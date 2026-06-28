// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/// @notice Minimal ERC-20 interface (USDC on Base).
interface IERC20 {
    function transfer(address to, uint256 amount) external returns (bool);
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

/// @title RiskStake v2
/// @notice On-chain skin-in-the-game for Base Capital's autonomous risk agent.
/// Separated roles (owner / oracle / treasury), deterministic resolution with
/// an on-chain proof hash, a maturity guard, configurable stake bounds, and a
/// 48h time-locked rescue so funds can never be silently drained.
contract RiskStake {
    enum Status {
        None,
        Pending,
        Correct,
        Wrong
    }

    struct Verdict {
        address agent;       // who staked
        address token;       // the Base token the verdict is about
        uint8 rating;        // 0 = SAFE, 1 = RISKY, 2 = LIKELY_RUG
        uint96 stake;        // USDC staked (6 decimals)
        uint40 committedAt;  // block timestamp at commit
        uint40 resolvedAt;   // block timestamp at resolve (0 while pending)
        Status status;
        bytes32 proofHash;   // hash of the maturity-time data snapshot used to resolve
    }

    struct AgentStats {
        uint256 totalVerdicts;
        uint256 totalStaked;
        uint256 totalSlashed;
        uint256 totalReturned;
        uint256 correct;
        uint256 wrong;
        uint256 atRisk;      // sum of stakes currently Pending
    }

    struct RescueRequest {
        address to;
        uint256 amount;
        uint40 eta;
        bool active;
    }

    uint256 public constant RESCUE_DELAY = 48 hours;

    IERC20 public immutable usdc;
    address public owner;      // admin: roles, bounds, rescue
    address public oracle;     // resolves verdicts
    address public treasury;   // receives slashed stakes

    uint96 public minStake;    // inclusive lower bound (USDC units, 6dp)
    uint96 public maxStake;    // inclusive upper bound
    uint40 public minMaturity; // min seconds between commit and resolve

    RescueRequest public pendingRescue;

    mapping(bytes32 => Verdict) public verdicts;
    mapping(address => AgentStats) private _stats;
    bytes32[] public verdictIds;

    uint256 private _locked = 1;

    event VerdictCommitted(bytes32 indexed id, address indexed agent, address indexed token, uint8 rating, uint256 stake);
    event VerdictResolved(bytes32 indexed id, address indexed agent, bool correct, uint256 amount, bytes32 proofHash);
    event TreasuryUpdated(address treasury);
    event OracleUpdated(address oracle);
    event OwnerUpdated(address owner);
    event StakeBoundsUpdated(uint96 minStake, uint96 maxStake);
    event MinMaturityUpdated(uint40 minMaturity);
    event RescueQueued(address indexed to, uint256 amount, uint40 eta);
    event RescueExecuted(address indexed to, uint256 amount);
    event RescueCancelled(address indexed to, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "not owner");
        _;
    }

    modifier onlyOracle() {
        require(msg.sender == oracle, "not oracle");
        _;
    }

    modifier nonReentrant() {
        require(_locked == 1, "reentrant");
        _locked = 2;
        _;
        _locked = 1;
    }

    constructor(address _usdc, address _treasury, address _oracle) {
        require(_usdc != address(0) && _treasury != address(0) && _oracle != address(0), "zero addr");
        usdc = IERC20(_usdc);
        owner = msg.sender;
        treasury = _treasury;
        oracle = _oracle;
        minStake = 1_000_000;       // $1
        maxStake = 1_000_000_000;   // $1000
        minMaturity = 1800;         // 30 minutes
    }

    // --- Agent: commit ---

    /// @notice Stake USDC behind a verdict. Caller must approve USDC first.
    function commitVerdict(bytes32 id, address token, uint8 rating, uint256 stake) external nonReentrant {
        require(verdicts[id].status == Status.None, "exists");
        require(rating <= 2, "bad rating");
        require(stake >= minStake && stake <= maxStake, "stake out of bounds");
        require(usdc.transferFrom(msg.sender, address(this), stake), "transfer failed");

        verdicts[id] = Verdict({
            agent: msg.sender,
            token: token,
            rating: rating,
            stake: uint96(stake),
            committedAt: uint40(block.timestamp),
            resolvedAt: 0,
            status: Status.Pending,
            proofHash: bytes32(0)
        });
        verdictIds.push(id);

        AgentStats storage s = _stats[msg.sender];
        s.totalVerdicts += 1;
        s.totalStaked += stake;
        s.atRisk += stake;

        emit VerdictCommitted(id, msg.sender, token, rating, stake);
    }

    // --- Oracle: resolve ---

    /// @notice Resolve a pending verdict. `proofHash` commits the maturity-time
    /// data snapshot on-chain so the decision is auditable and reproducible.
    /// Enforces the maturity window (committedAt + minMaturity).
    function resolveVerdict(bytes32 id, bool correct, bytes32 proofHash) external onlyOracle nonReentrant {
        Verdict storage v = verdicts[id];
        require(v.status == Status.Pending, "not pending");
        require(block.timestamp >= uint256(v.committedAt) + minMaturity, "not matured");

        uint256 amount = v.stake;
        AgentStats storage s = _stats[v.agent];
        s.atRisk -= amount;
        v.resolvedAt = uint40(block.timestamp);
        v.proofHash = proofHash;

        if (correct) {
            v.status = Status.Correct;
            s.correct += 1;
            s.totalReturned += amount;
            require(usdc.transfer(v.agent, amount), "return failed");
            emit VerdictResolved(id, v.agent, true, amount, proofHash);
        } else {
            v.status = Status.Wrong;
            s.wrong += 1;
            s.totalSlashed += amount;
            require(usdc.transfer(treasury, amount), "slash failed");
            emit VerdictResolved(id, v.agent, false, amount, proofHash);
        }
    }

    // --- Views ---

    /// @notice On-chain reputation. accuracyBps = correct/resolved; slashRateBps =
    /// slashed/(slashed+returned). Both in basis points (10000 = 100%).
    function getAgentStats(address agent)
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
            uint256 slashRateBps
        )
    {
        AgentStats memory s = _stats[agent];
        uint256 resolved = s.correct + s.wrong;
        uint256 acc = resolved == 0 ? 0 : (s.correct * 10000) / resolved;
        uint256 settled = s.totalSlashed + s.totalReturned;
        uint256 slashRate = settled == 0 ? 0 : (s.totalSlashed * 10000) / settled;
        return (
            s.totalVerdicts,
            s.totalStaked,
            s.totalSlashed,
            s.totalReturned,
            s.correct,
            s.wrong,
            acc,
            s.atRisk,
            slashRate
        );
    }

    function verdictCount() external view returns (uint256) {
        return verdictIds.length;
    }

    /// @notice Number of verdicts still Pending (unresolved).
    function pendingCount() external view returns (uint256 n) {
        uint256 len = verdictIds.length;
        for (uint256 i = 0; i < len; i++) {
            if (verdicts[verdictIds[i]].status == Status.Pending) n++;
        }
    }

    /// @notice Page through Pending verdict ids within [offset, offset+limit).
    function getPending(uint256 offset, uint256 limit) external view returns (bytes32[] memory ids) {
        uint256 len = verdictIds.length;
        if (offset >= len) return new bytes32[](0);
        uint256 end = offset + limit;
        if (end > len) end = len;
        uint256 c = 0;
        for (uint256 i = offset; i < end; i++) {
            if (verdicts[verdictIds[i]].status == Status.Pending) c++;
        }
        ids = new bytes32[](c);
        uint256 j = 0;
        for (uint256 i = offset; i < end; i++) {
            bytes32 vid = verdictIds[i];
            if (verdicts[vid].status == Status.Pending) {
                ids[j++] = vid;
            }
        }
    }

    // --- Admin (owner) ---

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

    // --- Time-locked rescue (replaces the old unbounded rescue) ---

    /// @notice Queue a rescue. Funds can only move after RESCUE_DELAY and the
    /// request is public via events the whole time — no silent draining.
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
