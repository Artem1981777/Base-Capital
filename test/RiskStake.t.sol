// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {RiskStake} from "../contracts/RiskStake.sol";

/// Minimal cheatcode interface (subset of forge-std Vm) so the suite is
/// fully self-contained — no forge-std install required.
interface Vm {
    function warp(uint256) external;
    function prank(address) external;
    function expectRevert() external;
}

/// Mock 6-decimal USDC with an optional reentrancy hook for the guard test.
contract MockUSDC {
    uint8 public decimals = 6;
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    address public reentryTarget;
    bytes public reentryData;
    bool public reentryOnFrom;

    function setReentry(address t, bytes calldata d, bool onFrom) external {
        reentryTarget = t;
        reentryData = d;
        reentryOnFrom = onFrom;
    }

    function mint(address to, uint256 amt) external {
        balanceOf[to] += amt;
    }

    function approve(address sp, uint256 amt) external returns (bool) {
        allowance[msg.sender][sp] = amt;
        return true;
    }

    function transfer(address to, uint256 amt) external returns (bool) {
        balanceOf[msg.sender] -= amt;
        balanceOf[to] += amt;
        if (reentryTarget != address(0) && !reentryOnFrom) {
            (bool ok, ) = reentryTarget.call(reentryData);
            require(ok, "reentry failed");
        }
        return true;
    }

    function transferFrom(address from, address to, uint256 amt) external returns (bool) {
        uint256 a = allowance[from][msg.sender];
        require(a >= amt, "allowance");
        allowance[from][msg.sender] = a - amt;
        balanceOf[from] -= amt;
        balanceOf[to] += amt;
        if (reentryTarget != address(0) && reentryOnFrom) {
            (bool ok, ) = reentryTarget.call(reentryData);
            require(ok, "reentry failed");
        }
        return true;
    }
}

contract RiskStakeTest {
    Vm constant vm = Vm(0x7109709ECfa91a80626fF3989D68f67F5b1DD12D);

    RiskStake rs;
    MockUSDC usdc;

    address oracle = address(0xA11CE);
    address treasury = address(0xBEEF);
    address agent = address(0xCAFE);

    bytes32 constant ID1 = keccak256("v1");
    bytes32 constant ID2 = keccak256("v2");
    bytes32 constant PROOF = keccak256("proof");
    address constant TOKEN = address(0x1234567890123456789012345678901234567890);
    uint256 constant STAKE = 5_000_000; // $5
    uint256 constant FUND = 1_000_000_000; // $1000

    function setUp() public {
        usdc = new MockUSDC();
        rs = new RiskStake(address(usdc), treasury, oracle);
        usdc.mint(agent, FUND);
        vm.prank(agent);
        usdc.approve(address(rs), FUND);
    }

    function assertEq(uint256 a, uint256 b) internal pure { require(a == b, "eq uint"); }
    function assertEq(address a, address b) internal pure { require(a == b, "eq addr"); }
    function assertTrue(bool c) internal pure { require(c, "assertTrue"); }

    function _commit(bytes32 id, uint8 rating, uint256 stake) internal {
        vm.prank(agent);
        rs.commitVerdict(id, TOKEN, rating, stake);
    }

    function test_ConstructorRoles() public view {
        assertEq(rs.owner(), address(this));
        assertEq(rs.oracle(), oracle);
        assertEq(rs.treasury(), treasury);
        assertEq(uint256(rs.minStake()), 1_000_000);
        assertEq(uint256(rs.maxStake()), 1_000_000_000);
        assertEq(uint256(rs.minMaturity()), 1800);
    }

    function test_AtRiskWhilePending() public {
        _commit(ID1, 0, STAKE);
        (uint256 tv,,,,,,, uint256 ar,) = rs.getAgentStats(agent);
        assertEq(tv, 1);
        assertEq(ar, STAKE);
        assertEq(rs.pendingCount(), 1);
    }

    function test_CommitAndResolveCorrect() public {
        _commit(ID1, 0, STAKE);
        vm.warp(block.timestamp + 1801);
        vm.prank(oracle);
        rs.resolveVerdict(ID1, true, PROOF);
        assertEq(usdc.balanceOf(agent), FUND); // stake returned in full
        (
            uint256 tv,
            uint256 ts,
            uint256 sl,
            uint256 ret,
            uint256 cor,
            uint256 wr,
            uint256 acc,
            uint256 ar,
            uint256 srate
        ) = rs.getAgentStats(agent);
        assertEq(tv, 1);
        assertEq(ts, STAKE);
        assertEq(sl, 0);
        assertEq(ret, STAKE);
        assertEq(cor, 1);
        assertEq(wr, 0);
        assertEq(acc, 10000);
        assertEq(ar, 0);
        assertEq(srate, 0);
    }

    function test_ResolveWrongSlashes() public {
        _commit(ID1, 1, STAKE);
        vm.warp(block.timestamp + 1801);
        vm.prank(oracle);
        rs.resolveVerdict(ID1, false, PROOF);
        assertEq(usdc.balanceOf(treasury), STAKE); // slashed to treasury
        (,, uint256 sl,,, uint256 wr,, uint256 ar, uint256 srate) = rs.getAgentStats(agent);
        assertEq(sl, STAKE);
        assertEq(wr, 1);
        assertEq(ar, 0);
        assertEq(srate, 10000);
    }

    function test_ResolveBeforeMaturityReverts() public {
        _commit(ID1, 1, STAKE);
        vm.prank(oracle);
        vm.expectRevert();
        rs.resolveVerdict(ID1, false, PROOF);
    }

    function test_OnlyOracleResolves() public {
        _commit(ID1, 1, STAKE);
        vm.warp(block.timestamp + 1801);
        vm.prank(agent);
        vm.expectRevert();
        rs.resolveVerdict(ID1, false, PROOF);
    }

    function test_OwnerCannotResolve() public {
        _commit(ID1, 1, STAKE);
        vm.warp(block.timestamp + 1801);
        vm.expectRevert(); // msg.sender = this = owner, but not oracle
        rs.resolveVerdict(ID1, false, PROOF);
    }

    function test_OnlyOwnerAdmin() public {
        vm.prank(agent);
        vm.expectRevert();
        rs.setOracle(agent);
    }

    function test_StakeBoundsLow() public {
        vm.prank(agent);
        vm.expectRevert();
        rs.commitVerdict(ID1, TOKEN, 0, 999_999);
    }

    function test_StakeBoundsHigh() public {
        vm.prank(agent);
        vm.expectRevert();
        rs.commitVerdict(ID1, TOKEN, 0, 1_000_000_001);
    }

    function test_DuplicateCommitReverts() public {
        _commit(ID1, 0, STAKE);
        vm.prank(agent);
        vm.expectRevert();
        rs.commitVerdict(ID1, TOKEN, 0, STAKE);
    }

    function test_BadRatingReverts() public {
        vm.prank(agent);
        vm.expectRevert();
        rs.commitVerdict(ID1, TOKEN, 3, STAKE);
    }

    function test_PendingViews() public {
        _commit(ID1, 0, STAKE);
        _commit(ID2, 1, STAKE);
        assertEq(rs.pendingCount(), 2);
        assertEq(rs.getPending(0, 10).length, 2);
        vm.warp(block.timestamp + 1801);
        vm.prank(oracle);
        rs.resolveVerdict(ID1, true, PROOF);
        assertEq(rs.pendingCount(), 1);
        bytes32[] memory p = rs.getPending(0, 10);
        assertEq(p.length, 1);
        assertEq(uint256(p[0]), uint256(ID2));
    }

    function test_TimelockRescue() public {
        _commit(ID1, 0, STAKE); // contract now holds STAKE
        rs.queueRescue(address(this), STAKE);
        vm.expectRevert(); // before delay
        rs.executeRescue();
        vm.warp(block.timestamp + 48 hours);
        uint256 before = usdc.balanceOf(address(this));
        rs.executeRescue();
        assertEq(usdc.balanceOf(address(this)), before + STAKE);
    }

    function test_CancelRescue() public {
        _commit(ID1, 0, STAKE);
        rs.queueRescue(address(this), STAKE);
        rs.cancelRescue();
        vm.warp(block.timestamp + 48 hours);
        vm.expectRevert(); // nothing queued
        rs.executeRescue();
    }

    function test_OnlyOwnerQueueRescue() public {
        vm.prank(agent);
        vm.expectRevert();
        rs.queueRescue(agent, STAKE);
    }

    function test_ReentrancyGuard() public {
        // During commit's transferFrom, re-enter commitVerdict -> must revert.
        bytes memory data = abi.encodeWithSelector(
            rs.commitVerdict.selector, ID2, TOKEN, uint8(0), STAKE
        );
        usdc.setReentry(address(rs), data, true);
        vm.prank(agent);
        vm.expectRevert();
        rs.commitVerdict(ID1, TOKEN, 0, STAKE);
    }
}
