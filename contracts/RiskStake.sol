// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/// @notice Minimal ERC-20 interface (USDC on Base).
interface IERC20 {
    function transfer(address to, uint256 amount) external returns (bool);
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

/// @title RiskStake v4
/// @notice v3 + a DETERMINISTIC on-chain arbiter. A verdict's decision inputs
/// (risk score + hard-rug flag bitmap) are committed on-chain, and settlement
/// re-runs a pure isVerdictCorrect() that mirrors off-chain verdictRule.ts
/// byte-for-byte - so resolution is the contract's word, not the owner's.
/// Adds risk-scaled challenge bonds and an emergency pause (exits stay open).
/// Every v3 public signature and historical proofHash is preserved; the 48h
/// time-locked rescue and separated owner/oracle/treasury roles are unchanged.
contract RiskStake {
    enum Status { None, Pending, Proposed, Challenged, Correct, Wrong }

    struct Verdict {
        uint256 agentId;
        address agent;
        address token;
        uint8 rating;
        uint16 ruleVersion;
        uint96 stake;
        uint40 committedAt;
        uint40 resolvedAt;
        uint40 challengeDeadline;
        Status status;
        bool proposedCorrect;
        address challenger;
        uint96 challengeBond;
        bytes32 proofHash;
        string snapshotURI;
    }

    struct AgentStats {
        uint256 totalVerdicts;
        uint256 totalStaked;
        uint256 totalSlashed;
        uint256 totalReturned;
        uint256 correct;
        uint256 wrong;
        uint256 atRisk;
    }

    struct RescueRequest {
        address to;
        uint256 amount;
        uint40 eta;
        bool active;
    }

    /// @notice Committed decision inputs enabling deterministic on-chain arbitration.
    struct VerdictInputs {
        uint8 score;
        uint16 hardFlags;
        bool set;
    }

    uint256 public constant RESCUE_DELAY = 48 hours;

    // Deterministic rule mirror of src/lib/verdictRule.ts (kept byte-compatible).
    uint8 public constant MIN_SAFE_SCORE = 75;
    // Bit0 honeypot | Bit1 cannot_sell_all | Bit2 cannot_buy | Bit3 sim_honeypot | Bit4 sim_extreme_sell_tax.
    uint16 public constant HARD_RUG_MASK = 0x1F;
    uint16 public constant RULE_VERSION = 4;

    IERC20 public immutable usdc;
    address public owner;
    address public oracle;
    address public treasury;

    uint96 public minStake;
    uint96 public maxStake;
    uint40 public minMaturity;
    uint40 public challengeWindow;
    uint96 public challengeBondAmount;
    uint16 public challengeRewardBps;
    uint16 public challengeBondBps;
    bool public paused;

    RescueRequest public pendingRescue;

    mapping(bytes32 => Verdict) public verdicts;
    mapping(bytes32 => VerdictInputs) public verdictInputs;
    bytes32[] public verdictIds;

    mapping(uint256 => AgentStats) private _stats;
    mapping(uint256 => address) public agentSigner;
    mapping(address => uint256) public signerAgentId;
    mapping(uint256 => uint40) public agentRegisteredAt;

    bytes32[] private _pending;
    mapping(bytes32 => uint256) private _pendingPos;

    uint256 private _locked = 1;

    event AgentRegistered(uint256 indexed agentId, address indexed signer, uint40 registeredAt);
    event AgentSignerRotated(uint256 indexed agentId, address indexed oldSigner, address indexed newSigner);
    event VerdictCommitted(bytes32 indexed id, uint256 indexed agentId, address indexed token, uint8 rating, uint256 stake);
    event VerdictInputsCommitted(bytes32 indexed id, uint8 score, uint16 hardFlags);
    event ResolutionProposed(bytes32 indexed id, bool correct, uint16 ruleVersion, bytes32 proofHash, string snapshotURI, uint40 challengeDeadline);
    event ResolutionChallenged(bytes32 indexed id, address indexed challenger, uint256 bond);
    event ChallengeResolved(bytes32 indexed id, bool challengeSucceeded, bool finalCorrect);
    event VerdictFinalized(bytes32 indexed id, uint256 indexed agentId, bool correct, uint256 amount);
    event TreasuryUpdated(address treasury);
    event OracleUpdated(address oracle);
    event OwnerUpdated(address owner);
    event StakeBoundsUpdated(uint96 minStake, uint96 maxStake);
    event MinMaturityUpdated(uint40 minMaturity);
    event ChallengeParamsUpdated(uint40 challengeWindow, uint96 challengeBondAmount, uint16 challengeRewardBps);
    event ChallengeBondBpsUpdated(uint16 challengeBondBps);
    event PausedSet(bool paused);
    event RescueQueued(address indexed to, uint256 amount, uint40 eta);
    event RescueExecuted(address indexed to, uint256 amount);
    event RescueCancelled(address indexed to, uint256 amount);

    modifier onlyOwner() { require(msg.sender == owner, "not owner"); _; }
    modifier onlyOracle() { require(msg.sender == oracle, "not oracle"); _; }
    modifier nonReentrant() { require(_locked == 1, "reentrant"); _locked = 2; _; _locked = 1; }
    modifier whenNotPaused() { require(!paused, "paused"); _; }

    constructor(address _usdc, address _treasury, address _oracle) {
        require(_usdc != address(0) && _treasury != address(0) && _oracle != address(0), "zero addr");
        usdc = IERC20(_usdc);
        owner = msg.sender;
        treasury = _treasury;
        oracle = _oracle;
        minStake = 1_000_000;
        maxStake = 1_000_000_000;
        minMaturity = 1800;
        challengeWindow = 24 hours;
        challengeBondAmount = 1_000_000;
        challengeRewardBps = 5000;
        challengeBondBps = 1000;
    }

    function registerAgent(uint256 agentId, address signer) external onlyOwner {
        require(agentId != 0 && signer != address(0), "bad args");
        require(agentSigner[agentId] == address(0), "agent exists");
        require(signerAgentId[signer] == 0, "signer used");
        agentSigner[agentId] = signer;
        signerAgentId[signer] = agentId;
        agentRegisteredAt[agentId] = uint40(block.timestamp);
        emit AgentRegistered(agentId, signer, uint40(block.timestamp));
    }

    function rotateAgentSigner(uint256 agentId, address newSigner) external onlyOwner {
        address old = agentSigner[agentId];
        require(old != address(0), "no agent");
        require(newSigner != address(0) && signerAgentId[newSigner] == 0, "bad signer");
        delete signerAgentId[old];
        agentSigner[agentId] = newSigner;
        signerAgentId[newSigner] = agentId;
        emit AgentSignerRotated(agentId, old, newSigner);
    }

    /// @notice v3-compatible commit (no decision inputs; legacy owner arbitration).
    function commitVerdict(bytes32 id, address token, uint8 rating, uint256 stake) external nonReentrant whenNotPaused {
        _commit(id, token, rating, stake);
    }

    /// @notice v4 commit carrying decision inputs for deterministic arbitration.
    function commitVerdict(bytes32 id, address token, uint8 rating, uint256 stake, uint8 score, uint16 hardFlags) external nonReentrant whenNotPaused {
        _commit(id, token, rating, stake);
        verdictInputs[id] = VerdictInputs({ score: score, hardFlags: hardFlags, set: true });
        emit VerdictInputsCommitted(id, score, hardFlags);
    }

    function _commit(bytes32 id, address token, uint8 rating, uint256 stake) internal {
        require(verdicts[id].status == Status.None, "exists");
        require(rating <= 2, "bad rating");
        require(stake >= minStake && stake <= maxStake, "stake out of bounds");
        uint256 agentId = signerAgentId[msg.sender];
        require(agentId != 0, "agent not registered");
        require(usdc.transferFrom(msg.sender, address(this), stake), "transfer failed");

        Verdict storage v = verdicts[id];
        v.agentId = agentId;
        v.agent = msg.sender;
        v.token = token;
        v.rating = rating;
        v.stake = uint96(stake);
        v.committedAt = uint40(block.timestamp);
        v.status = Status.Pending;
        verdictIds.push(id);
        _addPending(id);

        AgentStats storage s = _stats[agentId];
        s.totalVerdicts += 1;
        s.totalStaked += stake;
        s.atRisk += stake;

        emit VerdictCommitted(id, agentId, token, rating, stake);
    }

    function proposeResolution(
        bytes32 id,
        bool correct,
        bytes32 proofHash,
        uint16 ruleVersion,
        string calldata snapshotURI
    ) external onlyOracle {
        Verdict storage v = verdicts[id];
        require(v.status == Status.Pending, "not pending");
        require(block.timestamp >= uint256(v.committedAt) + minMaturity, "not matured");
        require(proofHash != bytes32(0), "no proof");
        require(bytes(snapshotURI).length > 0, "no snapshot");

        v.status = Status.Proposed;
        v.proposedCorrect = correct;
        v.proofHash = proofHash;
        v.ruleVersion = ruleVersion;
        v.snapshotURI = snapshotURI;
        v.resolvedAt = uint40(block.timestamp);
        v.challengeDeadline = uint40(block.timestamp + challengeWindow);

        emit ResolutionProposed(id, correct, ruleVersion, proofHash, snapshotURI, v.challengeDeadline);
    }

    /// @notice Deterministic rule mirror of src/lib/verdictRule.ts.
    /// rating 0 = SAFE: correct iff no hard-rug AND score >= 75.
    /// rating 1|2 = RISKY/RUG: correct iff hard-rug OR score < 75.
    function isVerdictCorrect(uint8 rating, uint8 score, uint16 hardFlags) public pure returns (bool) {
        bool hardRug = (hardFlags & HARD_RUG_MASK) != 0;
        if (rating == 0) {
            return !hardRug && score >= MIN_SAFE_SCORE;
        }
        return hardRug || score < MIN_SAFE_SCORE;
    }

    /// @notice Risk-scaled challenge bond = max(floor, stake * bps / 1e4).
    function requiredBond(uint256 stake) public view returns (uint256) {
        uint256 scaled = (stake * challengeBondBps) / 10000;
        return scaled > challengeBondAmount ? scaled : challengeBondAmount;
    }

    function challengeResolution(bytes32 id) external nonReentrant {
        Verdict storage v = verdicts[id];
        require(v.status == Status.Proposed, "not challengeable");
        require(block.timestamp <= v.challengeDeadline, "window closed");
        uint256 bond = requiredBond(v.stake);
        require(usdc.transferFrom(msg.sender, address(this), bond), "bond failed");
        v.status = Status.Challenged;
        v.challenger = msg.sender;
        v.challengeBond = uint96(bond);
        emit ResolutionChallenged(id, msg.sender, bond);
    }

    /// @notice v3-compatible owner arbitration for verdicts without committed inputs.
    function resolveChallenge(bytes32 id, bool challengeSucceeded) external onlyOwner nonReentrant {
        Verdict storage v = verdicts[id];
        require(v.status == Status.Challenged, "not challenged");
        _resolve(id, v, challengeSucceeded);
    }

    /// @notice v4 deterministic, permissionless resolution: recomputes correctness
    /// on-chain from the committed inputs, so no trusted party decides the outcome.
    function resolveChallengeAuto(bytes32 id) external nonReentrant {
        Verdict storage v = verdicts[id];
        require(v.status == Status.Challenged, "not challenged");
        VerdictInputs memory inp = verdictInputs[id];
        require(inp.set, "no inputs");
        bool finalCorrect = isVerdictCorrect(v.rating, inp.score, inp.hardFlags);
        bool challengeSucceeded = finalCorrect != v.proposedCorrect;
        _resolve(id, v, challengeSucceeded);
    }

    function _resolve(bytes32 id, Verdict storage v, bool challengeSucceeded) internal {
        bool finalCorrect = challengeSucceeded ? !v.proposedCorrect : v.proposedCorrect;
        if (challengeSucceeded) {
            require(usdc.transfer(v.challenger, v.challengeBond), "bond return failed");
        } else {
            require(usdc.transfer(treasury, v.challengeBond), "bond slash failed");
        }
        _settle(id, v, finalCorrect, challengeSucceeded);
        emit ChallengeResolved(id, challengeSucceeded, finalCorrect);
    }

    function finalize(bytes32 id) external nonReentrant {
        Verdict storage v = verdicts[id];
        require(v.status == Status.Proposed, "not finalizable");
        require(block.timestamp > v.challengeDeadline, "window open");
        VerdictInputs memory inp = verdictInputs[id];
        bool correct = inp.set ? isVerdictCorrect(v.rating, inp.score, inp.hardFlags) : v.proposedCorrect;
        _settle(id, v, correct, false);
    }

    function _settle(bytes32 id, Verdict storage v, bool correct, bool challengeWon) internal {
        uint256 amount = v.stake;
        AgentStats storage s = _stats[v.agentId];
        s.atRisk -= amount;
        _removePending(id);

        if (correct) {
            v.status = Status.Correct;
            s.correct += 1;
            s.totalReturned += amount;
            require(usdc.transfer(v.agent, amount), "return failed");
        } else {
            v.status = Status.Wrong;
            s.wrong += 1;
            s.totalSlashed += amount;
            uint256 toTreasury = amount;
            if (challengeWon && v.challenger != address(0) && challengeRewardBps > 0) {
                uint256 reward = (amount * challengeRewardBps) / 10000;
                if (reward > 0) {
                    toTreasury -= reward;
                    require(usdc.transfer(v.challenger, reward), "reward failed");
                }
            }
            require(usdc.transfer(treasury, toTreasury), "slash failed");
        }
        emit VerdictFinalized(id, v.agentId, correct, amount);
    }

    function _addPending(bytes32 id) internal {
        _pending.push(id);
        _pendingPos[id] = _pending.length;
    }

    function _removePending(bytes32 id) internal {
        uint256 pos = _pendingPos[id];
        if (pos == 0) return;
        uint256 i = pos - 1;
        uint256 last = _pending.length - 1;
        if (i != last) {
            bytes32 lastId = _pending[last];
            _pending[i] = lastId;
            _pendingPos[lastId] = i + 1;
        }
        _pending.pop();
        delete _pendingPos[id];
    }

    function getAgentStats(uint256 agentId)
        external
        view
        returns (
            uint256 totalVerdicts,
            uint256 totalStaked,
            uint256 totalSlashed,
            uint256 totalReturned,
            uint256 correct,
            uint256 wrong,
            uint256 accuracyBps,
            uint256 totalAtRisk,
            uint256 slashRateBps,
            uint256 identityAgeSeconds
        )
    {
        AgentStats memory s = _stats[agentId];
        uint256 resolved = s.correct + s.wrong;
        uint256 acc = resolved == 0 ? 0 : (s.correct * 10000) / resolved;
        uint256 settled = s.totalSlashed + s.totalReturned;
        uint256 slashRate = settled == 0 ? 0 : (s.totalSlashed * 10000) / settled;
        uint40 reg = agentRegisteredAt[agentId];
        uint256 age = reg == 0 ? 0 : block.timestamp - uint256(reg);
        return (s.totalVerdicts, s.totalStaked, s.totalSlashed, s.totalReturned, s.correct, s.wrong, acc, s.atRisk, slashRate, age);
    }

    function verdictCount() external view returns (uint256) {
        return verdictIds.length;
    }

    function pendingCount() external view returns (uint256) {
        return _pending.length;
    }

    function getPending(uint256 offset, uint256 limit) external view returns (bytes32[] memory ids) {
        uint256 len = _pending.length;
        if (offset >= len) return new bytes32[](0);
        uint256 end = offset + limit;
        if (end > len) end = len;
        ids = new bytes32[](end - offset);
        for (uint256 i = offset; i < end; i++) {
            ids[i - offset] = _pending[i];
        }
    }

    function setTreasury(address _t) external onlyOwner {
        require(_t != address(0), "zero addr");
        treasury = _t;
        emit TreasuryUpdated(_t);
    }

    function setOracle(address _o) external onlyOwner {
        require(_o != address(0), "zero addr");
        oracle = _o;
        emit OracleUpdated(_o);
    }

    function setOwner(address _o) external onlyOwner {
        require(_o != address(0), "zero addr");
        owner = _o;
        emit OwnerUpdated(_o);
    }

    function setStakeBounds(uint96 _min, uint96 _max) external onlyOwner {
        require(_min > 0 && _min <= _max, "bad bounds");
        minStake = _min;
        maxStake = _max;
        emit StakeBoundsUpdated(_min, _max);
    }

    function setMinMaturity(uint40 _m) external onlyOwner {
        minMaturity = _m;
        emit MinMaturityUpdated(_m);
    }

    function setChallengeParams(uint40 _window, uint96 _bond, uint16 _rewardBps) external onlyOwner {
        require(_window > 0, "bad window");
        require(_rewardBps <= 10000, "bad bps");
        challengeWindow = _window;
        challengeBondAmount = _bond;
        challengeRewardBps = _rewardBps;
        emit ChallengeParamsUpdated(_window, _bond, _rewardBps);
    }

    function setChallengeBondBps(uint16 _bps) external onlyOwner {
        require(_bps <= 10000, "bad bps");
        challengeBondBps = _bps;
        emit ChallengeBondBpsUpdated(_bps);
    }

    function setPaused(bool _p) external onlyOwner {
        paused = _p;
        emit PausedSet(_p);
    }

    function queueRescue(address to, uint256 amount) external onlyOwner {
        require(to != address(0), "zero addr");
        require(amount > 0, "zero amount");
        uint40 eta = uint40(block.timestamp + RESCUE_DELAY);
        pendingRescue = RescueRequest({ to: to, amount: amount, eta: eta, active: true });
        emit RescueQueued(to, amount, eta);
    }

    function executeRescue() external onlyOwner nonReentrant {
        RescueRequest memory r = pendingRescue;
        require(r.active, "no rescue");
        require(block.timestamp >= r.eta, "timelock");
        delete pendingRescue;
        require(usdc.transfer(r.to, r.amount), "rescue failed");
        emit RescueExecuted(r.to, r.amount);
    }

    function cancelRescue() external onlyOwner {
        RescueRequest memory r = pendingRescue;
        require(r.active, "no rescue");
        delete pendingRescue;
        emit RescueCancelled(r.to, r.amount);
    }
}
