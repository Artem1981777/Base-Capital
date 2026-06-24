// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/// @notice Minimal ERC-20 interface (USDC on Base).
interface IERC20 {
	function transfer(address to, uint256 amount) external returns (bool);
	function transferFrom(address from, address to, uint256 amount) external returns (bool);
	function balanceOf(address account) external view returns (uint256);
}

/// @title RiskStake
/// @notice On-chain skin-in-the-game for Base Capital's autonomous risk agent.
///         The agent stakes USDC behind every risk verdict it issues. Wrong
///         verdicts are slashed to the treasury; correct verdicts are returned
///         in full. Every agent's track record is queryable on-chain via
///         getAgentStats() — no trust required.
contract RiskStake {
	enum Status {
		None,
		Pending,
		Correct,
		Wrong
	}

	struct Verdict {
		address agent; // who staked
		address token; // the Base token the verdict is about
		uint8 rating; // 0 = SAFE, 1 = RISKY, 2 = LIKELY_RUG
		uint96 stake; // USDC staked (6 decimals)
		uint40 committedAt; // block timestamp at commit
		Status status;
	}

	struct AgentStats {
		uint256 totalVerdicts;
		uint256 totalStaked;
		uint256 totalSlashed;
		uint256 totalReturned;
		uint256 correct;
		uint256 wrong;
	}

	IERC20 public immutable usdc;
	address public owner; // oracle + admin (the risk agent / deployer)
	address public treasury; // receives slashed stakes

	mapping(bytes32 => Verdict) public verdicts;
	mapping(address => AgentStats) private _stats;
	bytes32[] public verdictIds;

	uint256 private _locked = 1;

	event VerdictCommitted(bytes32 indexed id, address indexed agent, address indexed token, uint8 rating, uint256 stake);
	event VerdictResolved(bytes32 indexed id, address indexed agent, bool correct, uint256 amount);
	event TreasuryUpdated(address treasury);
	event OwnerUpdated(address owner);

	modifier onlyOwner() {
		require(msg.sender == owner, "not owner");
		_;
	}

	modifier nonReentrant() {
		require(_locked == 1, "reentrant");
		_locked = 2;
		_;
		_locked = 1;
	}

	constructor(address _usdc, address _treasury) {
		require(_usdc != address(0) && _treasury != address(0), "zero addr");
		usdc = IERC20(_usdc);
		owner = msg.sender;
		treasury = _treasury;
	}

	/// @notice Stake USDC behind a verdict. Caller must approve USDC first.
	function commitVerdict(bytes32 id, address token, uint8 rating, uint256 stake) external nonReentrant {
		require(verdicts[id].status == Status.None, "exists");
		require(stake > 0 && stake <= type(uint96).max, "bad stake");
		require(rating <= 2, "bad rating");
		require(usdc.transferFrom(msg.sender, address(this), stake), "transfer failed");

		verdicts[id] = Verdict({
			agent: msg.sender,
			token: token,
			rating: rating,
			stake: uint96(stake),
			committedAt: uint40(block.timestamp),
			status: Status.Pending
		});
		verdictIds.push(id);

		AgentStats storage s = _stats[msg.sender];
		s.totalVerdicts += 1;
		s.totalStaked += stake;

		emit VerdictCommitted(id, msg.sender, token, rating, stake);
	}

	/// @notice Resolve a pending verdict. Only the oracle (owner) can resolve.
	///         Correct -> stake returned to the agent. Wrong -> slashed to treasury.
	function resolveVerdict(bytes32 id, bool correct) external onlyOwner nonReentrant {
		Verdict storage v = verdicts[id];
		require(v.status == Status.Pending, "not pending");
		uint256 amount = v.stake;
		AgentStats storage s = _stats[v.agent];

		if (correct) {
			v.status = Status.Correct;
			s.correct += 1;
			s.totalReturned += amount;
			require(usdc.transfer(v.agent, amount), "return failed");
			emit VerdictResolved(id, v.agent, true, amount);
		} else {
			v.status = Status.Wrong;
			s.wrong += 1;
			s.totalSlashed += amount;
			require(usdc.transfer(treasury, amount), "slash failed");
			emit VerdictResolved(id, v.agent, false, amount);
		}
	}

	/// @notice On-chain reputation. accuracyBps = correct/resolved in basis points (10000 = 100%).
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
			uint256 accuracyBps
		)
	{
		AgentStats memory s = _stats[agent];
		uint256 resolved = s.correct + s.wrong;
		uint256 acc = resolved == 0 ? 0 : (s.correct * 10000) / resolved;
		return (s.totalVerdicts, s.totalStaked, s.totalSlashed, s.totalReturned, s.correct, s.wrong, acc);
	}

	function verdictCount() external view returns (uint256) {
		return verdictIds.length;
	}

	function setTreasury(address _t) external onlyOwner {
		require(_t != address(0), "zero addr");
		treasury = _t;
		emit TreasuryUpdated(_t);
	}

	function setOwner(address _o) external onlyOwner {
		require(_o != address(0), "zero addr");
		owner = _o;
		emit OwnerUpdated(_o);
	}

	/// @notice Emergency rescue so funds can never be permanently locked (hackathon safety).
	function rescue(address to, uint256 amount) external onlyOwner {
		require(usdc.transfer(to, amount), "rescue failed");
	}
}
