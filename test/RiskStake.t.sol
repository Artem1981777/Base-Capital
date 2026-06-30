// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {RiskStake} from "../contracts/RiskStake.sol";

interface Vm {
    function prank(address) external;
    function startPrank(address) external;
    function stopPrank() external;
    function warp(uint256) external;
    function expectRevert(bytes calldata) external;
}

contract MockUSDC {
    uint8 public decimals = 6;
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    function mint(address to, uint256 amt) external { balanceOf[to] += amt; }
    function approve(address s, uint256 a) external returns (bool) { allowance[msg.sender][s] = a; return true; }
    function transfer(address to, uint256 a) external returns (bool) {
        require(balanceOf[msg.sender] >= a, "bal");
        balanceOf[msg.sender] -= a; balanceOf[to] += a; return true;
    }
    function transferFrom(address f, address to, uint256 a) external returns (bool) {
        require(balanceOf[f] >= a, "bal");
        uint256 al = allowance[f][msg.sender];
        require(al >= a, "allow");
        if (al != type(uint256).max) allowance[f][msg.sender] = al - a;
        balanceOf[f] -= a; balanceOf[to] += a; return true;
    }
}

contract RiskStakeTest {
    Vm constant vm = Vm(0x7109709ECfa91a80626fF3989D68f67F5b1DD12D);

    RiskStake rs;
    MockUSDC usdc;
    address constant ORACLE = address(0x1111);
    address constant TREASURY = address(0x2222);
    address constant SIGNER = address(0x3333);
    address constant CHALLENGER = address(0x4444);
    uint256 constant AGENT_ID = 57556;
    address constant TOKEN = address(0xBEEF);
    uint256 constant STAKE = 1_000_000; // $1
    uint256 constant BOND = 1_000_000;  // $1 default

    function assertEq(uint256 a, uint256 b) internal pure { require(a == b, "assertEq uint"); }
    function assertEq(bytes32 a, bytes32 b) internal pure { require(a == b, "assertEq bytes32"); }
    function assertTrue(bool c) internal pure { require(c, "assertTrue"); }
    function assertFalse(bool c) internal pure { require(!c, "assertFalse"); }

    function setUp() public {
        usdc = new MockUSDC();
        rs = new RiskStake(address(usdc), TREASURY, ORACLE); // owner = this
        rs.registerAgent(AGENT_ID, SIGNER);
        usdc.mint(SIGNER, 1_000_000_000);
        usdc.mint(CHALLENGER, 1_000_000_000);
        vm.prank(SIGNER); usdc.approve(address(rs), type(uint256).max);
        vm.prank(CHALLENGER); usdc.approve(address(rs), type(uint256).max);
    }

    function _commit(bytes32 id, uint8 rating) internal {
        vm.prank(SIGNER);
        rs.commitVerdict(id, TOKEN, rating, STAKE);
    }

    function _propose(bytes32 id, bool correct) internal {
        vm.warp(block.timestamp + 1801);
        vm.prank(ORACLE);
        rs.proposeResolution(id, correct, keccak256("snap"), 1, "ipfs://cid");
    }

    function _stats(uint256 agentId)
        internal view
        returns (uint256 tv, uint256 ts, uint256 tsl, uint256 tr, uint256 cor, uint256 wr, uint256 acc, uint256 atRisk, uint256 sr, uint256 age)
    {
        return rs.getAgentStats(agentId);
    }

    function testCommitTracksAgentId() public {
        bytes32 id = keccak256("v1");
        _commit(id, 0);
        assertEq(rs.pendingCount(), 1);
        assertEq(rs.verdictCount(), 1);
        (uint256 tv,,,,,,, uint256 atRisk,,) = _stats(AGENT_ID);
        assertEq(tv, 1);
        assertEq(atRisk, STAKE);
    }

    function testCommitRequiresRegisteredAgent() public {
        address rogue = address(0x5555);
        usdc.mint(rogue, STAKE);
        vm.startPrank(rogue);
        usdc.approve(address(rs), STAKE);
        vm.expectRevert(bytes("agent not registered"));
        rs.commitVerdict(keccak256("x"), TOKEN, 0, STAKE);
        vm.stopPrank();
    }

    function testFinalizeCorrectReturnsStake() public {
        bytes32 id = keccak256("c");
        _commit(id, 0);
        _propose(id, true);
        vm.warp(block.timestamp + 24 hours + 1);
        uint256 b0 = usdc.balanceOf(SIGNER);
        rs.finalize(id);
        assertEq(usdc.balanceOf(SIGNER), b0 + STAKE);
        (,,,, uint256 cor,, uint256 acc, uint256 atRisk,,) = _stats(AGENT_ID);
        assertEq(cor, 1);
        assertEq(acc, 10000);
        assertEq(atRisk, 0);
    }

    function testFinalizeWrongSlashesToTreasury() public {
        bytes32 id = keccak256("w");
        _commit(id, 0);
        _propose(id, false);
        vm.warp(block.timestamp + 24 hours + 1);
        uint256 tb = usdc.balanceOf(TREASURY);
        rs.finalize(id);
        assertEq(usdc.balanceOf(TREASURY), tb + STAKE);
        (,, uint256 tsl,,, uint256 wr,,, uint256 sr,) = _stats(AGENT_ID);
        assertEq(tsl, STAKE);
        assertEq(wr, 1);
        assertEq(sr, 10000);
    }

    function testCannotFinalizeBeforeWindow() public {
        bytes32 id = keccak256("e");
        _commit(id, 0);
        _propose(id, true);
        vm.expectRevert(bytes("window open"));
        rs.finalize(id);
    }

    function testProposeOnlyOracle() public {
        bytes32 id = keccak256("o");
        _commit(id, 0);
        vm.warp(block.timestamp + 1801);
        vm.expectRevert(bytes("not oracle"));
        rs.proposeResolution(id, true, keccak256("s"), 1, "ipfs://x");
    }

    function testProposeRequiresMaturity() public {
        bytes32 id = keccak256("m");
        _commit(id, 0);
        vm.prank(ORACLE);
        vm.expectRevert(bytes("not matured"));
        rs.proposeResolution(id, true, keccak256("s"), 1, "ipfs://x");
    }

    function testProposeRequiresProofAndSnapshot() public {
        bytes32 id = keccak256("p");
        _commit(id, 0);
        vm.warp(block.timestamp + 1801);
        vm.prank(ORACLE);
        vm.expectRevert(bytes("no proof"));
        rs.proposeResolution(id, true, bytes32(0), 1, "ipfs://x");
        vm.prank(ORACLE);
        vm.expectRevert(bytes("no snapshot"));
        rs.proposeResolution(id, true, keccak256("s"), 1, "");
    }

    function testChallengeSuccessFlipsAndRewards() public {
        bytes32 id = keccak256("ch");
        _commit(id, 0);
        _propose(id, true);
        vm.prank(CHALLENGER);
        rs.challengeResolution(id);
        uint256 chBefore = usdc.balanceOf(CHALLENGER);
        uint256 tBefore = usdc.balanceOf(TREASURY);
        rs.resolveChallenge(id, true);
        uint256 reward = STAKE / 2;
        assertEq(usdc.balanceOf(CHALLENGER), chBefore + BOND + reward);
        assertEq(usdc.balanceOf(TREASURY), tBefore + (STAKE - reward));
        (,, uint256 tsl,,, uint256 wr,,,,) = _stats(AGENT_ID);
        assertEq(tsl, STAKE);
        assertEq(wr, 1);
    }

    function testChallengeFailBondToTreasury() public {
        bytes32 id = keccak256("cf");
        _commit(id, 0);
        _propose(id, false);
        vm.prank(CHALLENGER);
        rs.challengeResolution(id);
        uint256 tBefore = usdc.balanceOf(TREASURY);
        uint256 chBefore = usdc.balanceOf(CHALLENGER);
        rs.resolveChallenge(id, false);
        assertEq(usdc.balanceOf(TREASURY), tBefore + STAKE + BOND);
        assertEq(usdc.balanceOf(CHALLENGER), chBefore);
    }

    function testCannotChallengeAfterWindow() public {
        bytes32 id = keccak256("cw");
        _commit(id, 0);
        _propose(id, true);
        vm.warp(block.timestamp + 24 hours + 1);
        vm.prank(CHALLENGER);
        vm.expectRevert(bytes("window closed"));
        rs.challengeResolution(id);
    }

    function testPendingIndexSwapPop() public {
        bytes32 a = keccak256("a");
        bytes32 b = keccak256("b");
        bytes32 c = keccak256("c2");
        _commit(a, 0);
        _commit(b, 0);
        _commit(c, 0);
        assertEq(rs.pendingCount(), 3);
        _propose(b, true);
        vm.warp(block.timestamp + 24 hours + 1);
        rs.finalize(b);
        assertEq(rs.pendingCount(), 2);
        bytes32[] memory ids = rs.getPending(0, 10);
        assertEq(ids.length, 2);
        bool hasA;
        bool hasB;
        bool hasC;
        for (uint256 i = 0; i < ids.length; i++) {
            if (ids[i] == a) hasA = true;
            if (ids[i] == b) hasB = true;
            if (ids[i] == c) hasC = true;
        }
        assertTrue(hasA);
        assertTrue(hasC);
        assertFalse(hasB);
    }

    function testRuleVersionAndProofStored() public {
        bytes32 id = keccak256("rv");
        _commit(id, 0);
        vm.warp(block.timestamp + 1801);
        vm.prank(ORACLE);
        rs.proposeResolution(id, true, keccak256("snapXYZ"), 7, "ipfs://Qm");
        (
            uint256 agentId,
            address agent,
            address token,
            uint8 rating,
            uint16 ruleVersion,
            uint96 stake,
            uint40 committedAt,
            uint40 resolvedAt,
            uint40 challengeDeadline,
            RiskStake.Status status,
            bool proposedCorrect,
            address chal,
            uint96 bond,
            bytes32 proofHash,
            string memory snapshotURI
        ) = rs.verdicts(id);
        agentId; agent; token; rating; stake; committedAt; resolvedAt; challengeDeadline; chal; bond; snapshotURI;
        assertEq(uint256(ruleVersion), 7);
        assertEq(proofHash, keccak256("snapXYZ"));
        assertTrue(proposedCorrect);
        assertEq(uint256(uint8(status)), uint256(uint8(RiskStake.Status.Proposed)));
    }

    function testRotateSignerPreservesTrackRecord() public {
        bytes32 id = keccak256("r");
        _commit(id, 0);
        _propose(id, true);
        vm.warp(block.timestamp + 24 hours + 1);
        rs.finalize(id);

        address ns = address(0x6666);
        rs.rotateAgentSigner(AGENT_ID, ns);

        (uint256 tv,,,, uint256 cor,,,,,) = _stats(AGENT_ID);
        assertEq(tv, 1);
        assertEq(cor, 1);

        usdc.mint(ns, STAKE);
        vm.startPrank(ns);
        usdc.approve(address(rs), STAKE);
        rs.commitVerdict(keccak256("r2"), TOKEN, 0, STAKE);
        vm.stopPrank();
        (uint256 tv2,,,,,,,,,) = _stats(AGENT_ID);
        assertEq(tv2, 2);

        vm.startPrank(SIGNER);
        vm.expectRevert(bytes("agent not registered"));
        rs.commitVerdict(keccak256("r3"), TOKEN, 0, STAKE);
        vm.stopPrank();
    }

    function testStakeBoundsEnforced() public {
        vm.startPrank(SIGNER);
        vm.expectRevert(bytes("stake out of bounds"));
        rs.commitVerdict(keccak256("lo"), TOKEN, 0, 1);
        vm.expectRevert(bytes("stake out of bounds"));
        rs.commitVerdict(keccak256("hi"), TOKEN, 0, 2_000_000_000);
        vm.stopPrank();
    }

    function testOnlyOwnerRegisters() public {
        vm.prank(SIGNER);
        vm.expectRevert(bytes("not owner"));
        rs.registerAgent(999, address(0x7777));
    }
}
