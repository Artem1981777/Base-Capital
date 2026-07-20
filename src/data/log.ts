import type { AgentVerdict } from "../lib/verdict.js"

export type AgentStats = {
	updatedAt: string
	tokensScored: number
	verdictsIssued: number
	safe: number
	risky: number
	likelyRug: number
	ticks: number
}

export const stats: AgentStats = {
	"updatedAt": "2026-07-20T12:16:59.568Z",
	"tokensScored": 4561,
	"verdictsIssued": 4561,
	"safe": 4020,
	"risky": 361,
	"likelyRug": 180,
	"ticks": 279
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "2362d26a7658",
		"ts": "2026-07-20T12:16:55.997Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109171429.34,
		"hash": "2362d26a7658b6e1beba9233709de4931aa05e26e23b86f9c37c5f207583ec5d"
	},
	{
		"id": "4be7e9d98db7",
		"ts": "2026-07-20T12:16:56.253Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 13178478.49,
		"hash": "4be7e9d98db70c31bb94c6cdf242f63d3fb40bfb45b6d7f3657035522a699a47"
	},
	{
		"id": "16636bfa49f3",
		"ts": "2026-07-20T12:16:56.503Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 873566.31,
		"hash": "16636bfa49f3bb1a5f343def3c723969aa92b7da23ffec229e759f86034e531c"
	},
	{
		"id": "5459ede37726",
		"ts": "2026-07-20T12:16:56.749Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 25571157.62,
		"hash": "5459ede3772678319224b131768a6b295e10cd98dc7a23e2837ad1da288347ba"
	},
	{
		"id": "85afd7ebbc2b",
		"ts": "2026-07-20T12:16:56.997Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 5075623.98,
		"hash": "85afd7ebbc2beb663996451fb47695fa464064d34fcaa78e2a9e2b8346e4f601"
	},
	{
		"id": "475d876d2a24",
		"ts": "2026-07-20T12:16:57.241Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1008165.97,
		"hash": "475d876d2a24124174139e9a9777883590a07f0fccaecac31f10246e65f1c014"
	},
	{
		"id": "692e9cff99be",
		"ts": "2026-07-20T12:16:57.486Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25571157.62,
		"hash": "692e9cff99be78991ddf34a8a75bcb68155e8632a6456c7ad9bb9db7b0889c3e"
	},
	{
		"id": "e8573b77036f",
		"ts": "2026-07-20T12:16:57.734Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2520964.62,
		"hash": "e8573b77036f9cb59212a9ade649438a5b030a246a7ecd22f0ff7478d2dd79c9"
	},
	{
		"id": "77d52a1ef568",
		"ts": "2026-07-20T12:16:57.981Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 143783.44,
		"hash": "77d52a1ef5685254ef926413ac5b94e872eabf6305a9638505c56209d89837f6"
	},
	{
		"id": "2f6c2033105a",
		"ts": "2026-07-20T12:16:58.219Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2102192,
		"hash": "2f6c2033105a42f7537ede6f1ff2eb4f00420a13446cc8cf227e65e6e0cdac8b"
	},
	{
		"id": "e02082eaf0cf",
		"ts": "2026-07-20T12:16:58.451Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1243585.47,
		"hash": "e02082eaf0cffc7569bd73e07230308a4f3b0fd33add15248b8d70d976e3ef66"
	},
	{
		"id": "ac38765c93e3",
		"ts": "2026-07-20T12:16:58.677Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 40921.39,
		"hash": "ac38765c93e346ee5ccd8a03ccc00f8c850ca4264edd924bf75f1572146d8f13"
	},
	{
		"id": "981f48030a0b",
		"ts": "2026-07-20T12:16:58.896Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 89177.93,
		"hash": "981f48030a0b03661d969869a7f896d1c36ed9bf45653b56c9b4c2ce44e5643c"
	},
	{
		"id": "48490385a7dc",
		"ts": "2026-07-20T12:16:59.122Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5328155.86,
		"hash": "48490385a7dc738c69056d428c377df41f5c50d4fff98cf5289dbd60ed16554b"
	},
	{
		"id": "820cca7d05d9",
		"ts": "2026-07-20T12:16:59.348Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1312806.43,
		"hash": "820cca7d05d90c6ec71ef1d3662f94a0422e04cf9ea9904d7f4ff3957c50abcf"
	},
	{
		"id": "4ec64ecbae1d",
		"ts": "2026-07-20T12:16:59.568Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 184450.19,
		"hash": "4ec64ecbae1d896257a8591a6bd85f1a803572c423b7355ca40e25ec4cfcbae5"
	},
	{
		"id": "0da544144c04",
		"ts": "2026-07-20T09:56:46.897Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 108367366.38,
		"hash": "0da544144c04229db2da6cdd55cdd2f7f9195ab639e58767bb4dde81ddc230fd"
	},
	{
		"id": "596179f24a1e",
		"ts": "2026-07-20T09:56:47.371Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 15649254.54,
		"hash": "596179f24a1e9b58c428431ff322c8be8da0b0ff95996a4ebbf8e113ceebdaf8"
	},
	{
		"id": "da6d7beb7cab",
		"ts": "2026-07-20T09:56:47.613Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 870264.1,
		"hash": "da6d7beb7cab21ad5a45a4d7d2f0c1ee6786c7550a82a7005992ac3028142a66"
	},
	{
		"id": "690af8ac8d1a",
		"ts": "2026-07-20T09:56:47.854Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 25430199.3,
		"hash": "690af8ac8d1aad65b7ea90744f6d01456d99b5b18d2703533f95c27f37722d17"
	},
	{
		"id": "73ab06350a26",
		"ts": "2026-07-20T09:56:48.092Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 5016103.57,
		"hash": "73ab06350a2699e904755e67cd785ecacc84a483bc7cdc2f5a8365e7b01c9ec1"
	},
	{
		"id": "2581ff93af5f",
		"ts": "2026-07-20T09:56:48.335Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 993664.72,
		"hash": "2581ff93af5f27d6015e299463a30f0106bc3f5483bbcdfac3db73ab7300d7e1"
	},
	{
		"id": "ad0f6f8afeb7",
		"ts": "2026-07-20T09:56:48.576Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25430199.3,
		"hash": "ad0f6f8afeb7fb9c1c336595ee4457f1ca005f8cb9a8ba9fc6eb3c2984dea278"
	},
	{
		"id": "080d078499b8",
		"ts": "2026-07-20T09:56:48.825Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2501732.52,
		"hash": "080d078499b8cefe8b3ca40c7228ddbd2f5762e2cb18adb1cb9b1f0b7d0762b4"
	},
	{
		"id": "2f3ee1731798",
		"ts": "2026-07-20T09:56:49.067Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 140399.96,
		"hash": "2f3ee17317988d645c3fccdefedf935c37a0c986719345c858ab04ed94acb102"
	},
	{
		"id": "b5e42c9e35dd",
		"ts": "2026-07-20T09:56:49.308Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2057711.28,
		"hash": "b5e42c9e35ddade9dd36ab078c7563ebd3483700f21f5af4f8c981a8bf685884"
	},
	{
		"id": "568682609242",
		"ts": "2026-07-20T09:56:49.531Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 40660.21,
		"hash": "5686826092423413f6097b09c702653d2023e2d9f247200422c564be4a29b1a6"
	},
	{
		"id": "f38e568db01e",
		"ts": "2026-07-20T09:56:49.755Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1208949.67,
		"hash": "f38e568db01e74b977a77f06c4f91340ea1fa7a5703f913e12f5ec2c1e5dc780"
	},
	{
		"id": "c8cf0426bb4e",
		"ts": "2026-07-20T09:56:49.979Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 675282.08,
		"hash": "c8cf0426bb4e03631cf9f6cb757cbf6a24bfd9d8235fd247d3bfac96afe23131"
	},
	{
		"id": "686696d8e136",
		"ts": "2026-07-20T09:56:50.203Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 84577.4,
		"hash": "686696d8e136e7d0cc4fb51e5f00f4375b8aeb77e15e03c3e062230510188bb4"
	},
	{
		"id": "3681fd349379",
		"ts": "2026-07-20T09:56:50.428Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 183569.32,
		"hash": "3681fd349379bc4ad5619d224abdf1f25020342ce6551a210edff674d53facd7"
	},
	{
		"id": "d51e7ca2a6b6",
		"ts": "2026-07-20T09:56:50.654Z",
		"symbol": "JERRY",
		"token": "0xB200000000000000000000d9dAc57E31E1AcEB01",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 35437.72,
		"hash": "d51e7ca2a6b60f640461e654b4d6d866bb9ede2427e331b27ca314193b30d172"
	},
	{
		"id": "79584ad0f6a0",
		"ts": "2026-07-20T06:14:24.011Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107908552.52,
		"hash": "79584ad0f6a000e3b21f25bfbf970adaa6a85dd16df3227378282316a865e33c"
	},
	{
		"id": "9051f45d73ba",
		"ts": "2026-07-20T06:14:24.392Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 15851766.61,
		"hash": "9051f45d73baf341c21a605f559d795b18a6c947240eb99163c96cfd9d832317"
	},
	{
		"id": "5e149daefb3b",
		"ts": "2026-07-20T06:14:24.629Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 869877.96,
		"hash": "5e149daefb3b3c53bf69d266f720263cd18600a02c4c3eaa9d108dca9367f1e6"
	},
	{
		"id": "1b055a57d570",
		"ts": "2026-07-20T06:14:24.822Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 25442826.34,
		"hash": "1b055a57d570c41d995b6396eccbd40965145557d3aaa2073ee66c0835bf5306"
	},
	{
		"id": "f41d24ad819e",
		"ts": "2026-07-20T06:14:25.010Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 4994340.54,
		"hash": "f41d24ad819e201d7569703bc7b6c678cb1a3b07e4fb1a458308d0a93f398b4c"
	},
	{
		"id": "20754a3c23c2",
		"ts": "2026-07-20T06:14:25.209Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 993642.42,
		"hash": "20754a3c23c248e97fe75bc3d321f13a161269b50e43e1bbc9fe3405079a1a70"
	},
	{
		"id": "e9c457be6e61",
		"ts": "2026-07-20T06:14:25.410Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25442826.34,
		"hash": "e9c457be6e617f4f45fbbaf38309971a73583c1afcf1bf5096aa35d5e0cc456e"
	},
	{
		"id": "28217b93f818",
		"ts": "2026-07-20T06:14:25.631Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2482781.6,
		"hash": "28217b93f818aa1eb9f833c3e829706a49f79c244da3913a14442d7c8bc9427e"
	},
	{
		"id": "2404ad2062c2",
		"ts": "2026-07-20T06:14:25.831Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 142817,
		"hash": "2404ad2062c29f4cf41eed25c668ee53a6c58670e737595355ab5cb01b4f1e73"
	},
	{
		"id": "93e6ba05ecb9",
		"ts": "2026-07-20T06:14:26.028Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2036487.69,
		"hash": "93e6ba05ecb959e8b5032a4164978954954cbecb9974398db8c75ee5f139c825"
	},
	{
		"id": "67c2bf70afa9",
		"ts": "2026-07-20T06:14:26.233Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1339435.16,
		"hash": "67c2bf70afa9ea9374a1651ed81d64ce01ed7a93277fdecfdcffdad43a09df72"
	},
	{
		"id": "bddbfc51fa72",
		"ts": "2026-07-20T06:14:26.425Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 182757.71,
		"hash": "bddbfc51fa7271a5763c96e640bc34f4916985bcab55efcfee14e51a2b0c181b"
	},
	{
		"id": "31d41abfa311",
		"ts": "2026-07-20T06:14:26.633Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 41966.21,
		"hash": "31d41abfa311014421387adf9e236b6804e66573186a10604c8e80eaff388ffa"
	},
	{
		"id": "9b4b5cd9515d",
		"ts": "2026-07-20T06:14:26.840Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 670022.58,
		"hash": "9b4b5cd9515db4966ebf5060250cc8d4a6923657882a6373d93d2135df32c008"
	},
	{
		"id": "e3d117bb7198",
		"ts": "2026-07-20T06:14:27.031Z",
		"symbol": "JERRY",
		"token": "0xB200000000000000000000d9dAc57E31E1AcEB01",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 35733.09,
		"hash": "e3d117bb7198c4ac6601104d4cc4c58ee1129a75eb8f7665a7dc79c3150513c9"
	},
	{
		"id": "683ea26a6591",
		"ts": "2026-07-20T06:14:27.223Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 411756.19,
		"hash": "683ea26a65914e5f0f1eb1f3e6a1d8849f92e1df5e7b67df728d078caf37312e"
	},
	{
		"id": "d816320e2f44",
		"ts": "2026-07-20T02:38:20.891Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 108332705.17,
		"hash": "d816320e2f44992660081e3cfe56101def69e617627557e952dcb9c891f31078"
	},
	{
		"id": "550b07013f55",
		"ts": "2026-07-20T02:38:21.621Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 16054914.92,
		"hash": "550b07013f55b47b4cf28d09bb02c54d12351b8133ee0e5107e36894f99f4121"
	},
	{
		"id": "dcb9ee71434a",
		"ts": "2026-07-20T02:38:22.064Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 871415.49,
		"hash": "dcb9ee71434a7a08e7d549e5e18835b796afdaad712fda8d1853ad02afa948f1"
	},
	{
		"id": "ba1ab518489d",
		"ts": "2026-07-20T02:38:22.511Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 25605147.25,
		"hash": "ba1ab518489d8e4e76677dabd3b7554616de470a9e317d2fdb23297ac9296fc9"
	},
	{
		"id": "95e0023838a5",
		"ts": "2026-07-20T02:38:22.971Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 5073520.23,
		"hash": "95e0023838a5ae49aa4fef0375413c8cda5278d19ff3d58212ad5aadb2aa01b0"
	},
	{
		"id": "473cab7fe0e5",
		"ts": "2026-07-20T02:38:23.211Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 993650.13,
		"hash": "473cab7fe0e51ec6cfe8f6c56c56bf55caec9fdbe829168ef970cf29752b4dd4"
	},
	{
		"id": "f08998911d6e",
		"ts": "2026-07-20T02:38:23.445Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25605147.25,
		"hash": "f08998911d6e250231f07c925de68274a28aaeef9631defcec8bf56b57cd90e2"
	},
	{
		"id": "d516dfba3fa1",
		"ts": "2026-07-20T02:38:23.693Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2509069.48,
		"hash": "d516dfba3fa19c45727164bdb9d01c64e75815a7ee303055aa2b1ca9dc4ce584"
	},
	{
		"id": "6f0bc274ef4f",
		"ts": "2026-07-20T02:38:23.934Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 142678.11,
		"hash": "6f0bc274ef4fd9c41a29f51092528894eee6b8bde667b5d3f3c086d20557b234"
	},
	{
		"id": "62ba55a37fa9",
		"ts": "2026-07-20T02:38:24.181Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2043600.14,
		"hash": "62ba55a37fa904d8e07a26dcd322240e4725beb20270ac7b22274b4671133408"
	},
	{
		"id": "16a1876b4e7b",
		"ts": "2026-07-20T02:38:24.407Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1352561.77,
		"hash": "16a1876b4e7b1d99fae8ac64bc6aa4d993c2d81bcccb747af98605ae7d18f432"
	},
	{
		"id": "6b101ed8382e",
		"ts": "2026-07-20T02:38:24.630Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 44584.18,
		"hash": "6b101ed8382eb87dbf0216cee29ce865b85c0fc5871fa31e0fd618d693e9732c"
	},
	{
		"id": "083a46df8afc",
		"ts": "2026-07-20T02:38:24.851Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 191943.16,
		"hash": "083a46df8afc0021a3d576088dae693c464024e1cb9f5ca6778aa1feaab615ae"
	},
	{
		"id": "939f78e74417",
		"ts": "2026-07-20T02:38:25.082Z",
		"symbol": "Claude",
		"token": "0x9385Bd6198EC6664567c456Db8cEE1C940D1cB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 731767.38,
		"hash": "939f78e744175adf08e0e66b3b79b977abbe5b293a9906d14d6c9efb2b0eacbb"
	},
	{
		"id": "b0ee13aa3e57",
		"ts": "2026-07-20T02:38:25.308Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1196828.03,
		"hash": "b0ee13aa3e573c55fdbfd5364575c945c4e52707d20827e2ca7299ec08bdc6a6"
	},
	{
		"id": "364092b835eb",
		"ts": "2026-07-20T02:38:25.533Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 616668.88,
		"hash": "364092b835eb75f013198e36709f225d946f2cd129b31606fa0bee38246b443a"
	},
	{
		"id": "3dc5f404dcef",
		"ts": "2026-07-19T23:53:54.215Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 108143512.85,
		"hash": "3dc5f404dcefff8dcaee89c79b300565cd4d144301bc51bc6d1d440abbc647bf"
	},
	{
		"id": "3199e7a0ddc3",
		"ts": "2026-07-19T23:53:54.661Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 15436143.72,
		"hash": "3199e7a0ddc348cc3ac6d92a63b0229f6186eb42df7c80027a4bb3dde09032d4"
	},
	{
		"id": "aa4d239ef8af",
		"ts": "2026-07-19T23:53:55.098Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 864294.19,
		"hash": "aa4d239ef8af47e4b4facea5bea68f9085a6ec9d8cbe640cd88d77cd4706cfd7"
	},
	{
		"id": "aca6d93c9df3",
		"ts": "2026-07-19T23:53:55.334Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 25576149.95,
		"hash": "aca6d93c9df34c2b3e2cbecc8312fe99fa981d364038249c19dbfc49c865ad81"
	},
	{
		"id": "7aaff5e82619",
		"ts": "2026-07-19T23:53:55.570Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 5050110.52,
		"hash": "7aaff5e82619806433f97ae0bbc330f957ea210fc06681b7be5c485ffac5db02"
	},
	{
		"id": "2d716308969a",
		"ts": "2026-07-19T23:53:55.809Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 991379.68,
		"hash": "2d716308969a8ba4058abf2cc75fd18cb8634a3467e949f37dcff9f48c6ee46a"
	},
	{
		"id": "b7c7bfe99311",
		"ts": "2026-07-19T23:53:56.041Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25576149.95,
		"hash": "b7c7bfe99311a52051a513e050ee796c48c1f791722a6a37959f02699272fe18"
	},
	{
		"id": "f7a4dda41331",
		"ts": "2026-07-19T23:53:56.274Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2502238.42,
		"hash": "f7a4dda4133195e05b5ebe986deb8b48ba43253ae65ce12135d9d1e6ff261a8c"
	},
	{
		"id": "930dedb1af8d",
		"ts": "2026-07-19T23:53:56.519Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 148464.85,
		"hash": "930dedb1af8d017cca58de960717f7285ef247d18fc2146be462b9f04d68f394"
	},
	{
		"id": "90e68b9d8793",
		"ts": "2026-07-19T23:53:56.754Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity"
		],
		"liquidityUsd": 47833.35,
		"hash": "90e68b9d8793fdff6c26bfa10099230d1891e3ebb4256d92edfa8502bd329736"
	},
	{
		"id": "6d6f12a5eb61",
		"ts": "2026-07-19T23:53:56.973Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2066618.39,
		"hash": "6d6f12a5eb615a3ad5cfb59c3c880ec0f707246dc927eddcf219ac2bcda4f3ed"
	},
	{
		"id": "2539c9b28dad",
		"ts": "2026-07-19T23:53:57.191Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1266009.86,
		"hash": "2539c9b28dadb745504586aaba41bf9abac13a088e13c4efda864ee3eda6df29"
	},
	{
		"id": "21ff9a77e370",
		"ts": "2026-07-19T23:53:57.411Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 199888.15,
		"hash": "21ff9a77e370820f8fdf010372e13ed5a1019c5fa71e151cf52a7b203d05a701"
	},
	{
		"id": "186c39ebd37f",
		"ts": "2026-07-19T23:53:57.630Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 437473.4,
		"hash": "186c39ebd37ff0d7870a7597a37bfcbf9e2e10919dc87ac26f5c0b196dd908a5"
	},
	{
		"id": "047c281b6a90",
		"ts": "2026-07-19T23:53:57.849Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1210727.37,
		"hash": "047c281b6a90cb6ff7f65092b1f08a6d14a4c5e458f02f48ed0518c9dad16c19"
	},
	{
		"id": "af271a7ebaa1",
		"ts": "2026-07-19T23:53:58.069Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 620185.76,
		"hash": "af271a7ebaa1e82726d4f17985e27765cca698aa9fe2d64346555ceeb40388d8"
	},
	{
		"id": "9cc69cae83dd",
		"ts": "2026-07-19T23:53:58.289Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 532049.65,
		"hash": "9cc69cae83dd78ead4f09ddea6f394c9066f1ae98151169a4d22e65df38b882c"
	},
	{
		"id": "96d3ceb46341",
		"ts": "2026-07-19T22:47:14.859Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 108138427.41,
		"hash": "96d3ceb46341ee1651159daef19dc5c3f2057b285dca1eb60ed668612a3d753f"
	},
	{
		"id": "1b262f684469",
		"ts": "2026-07-19T22:47:15.068Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 15312347.09,
		"hash": "1b262f684469630120058505ea6efebc2d6dd49433bab0188987582a82cb3a52"
	},
	{
		"id": "046029f513da",
		"ts": "2026-07-19T22:47:15.272Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 864864.55,
		"hash": "046029f513da6908ad530b986890dfde867eafe2f25041fff258fae380a39a08"
	},
	{
		"id": "4f4bc5eb220e",
		"ts": "2026-07-19T22:47:15.465Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 25621004.87,
		"hash": "4f4bc5eb220e7539e7833dfc2f27e4ac57a54d963d0247bc8e33e8e0531e48fd"
	},
	{
		"id": "f7e077c61f02",
		"ts": "2026-07-19T22:47:15.657Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 5034705.36,
		"hash": "f7e077c61f0284fffa3dce2ee16d132f84d3f3fa6491edad45e04193fa6679b9"
	},
	{
		"id": "7fcdeebb7491",
		"ts": "2026-07-19T22:47:15.855Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 993833.38,
		"hash": "7fcdeebb74916a82c0cc7655e39791a142b70fe81ec5bdde0f7cd86c1308c4d0"
	},
	{
		"id": "c57c246cfb15",
		"ts": "2026-07-19T22:47:16.048Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25621004.87,
		"hash": "c57c246cfb15a27870aa3759c4afcd1b9643347b973866ab26500bec414ad9d4"
	},
	{
		"id": "96c9f9c39989",
		"ts": "2026-07-19T22:47:16.253Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2504418.49,
		"hash": "96c9f9c39989802f20f2e28af111cdbc790e3aaa70f79e1d8ad8cc845a3105af"
	},
	{
		"id": "cd1efe83aaab",
		"ts": "2026-07-19T22:47:16.450Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 154266.87,
		"hash": "cd1efe83aaab9daf6383eef70924afa8bf4314dfe8c36e369c835a67b722a88b"
	},
	{
		"id": "dcf6de36c237",
		"ts": "2026-07-19T22:47:16.645Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity"
		],
		"liquidityUsd": 47606.91,
		"hash": "dcf6de36c23705183f774abe96ca8f3180afb89b894a281a8c20cea7393bc0dd"
	},
	{
		"id": "f1c955911227",
		"ts": "2026-07-19T22:47:16.834Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2069854.82,
		"hash": "f1c95591122770945a8990d625a5648544afdd2ac52d42705628b1b45b5160dd"
	},
	{
		"id": "78364eba028c",
		"ts": "2026-07-19T22:47:17.017Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 201030.86,
		"hash": "78364eba028c3ea87bab4e4819b1d9b5f220dd727d83bcd35870486c56ac646f"
	},
	{
		"id": "80f8551f1136",
		"ts": "2026-07-19T22:47:17.215Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1244522.82,
		"hash": "80f8551f1136e78f629bcb09da89cbc43296152b95b124cc509b5dc3bf489565"
	},
	{
		"id": "0d9755d02bc2",
		"ts": "2026-07-19T22:47:17.398Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1855450.06,
		"hash": "0d9755d02bc2c3862d1734ee0e028ffe380672d6d50ebc02e8cf7cda7d0e43aa"
	},
	{
		"id": "fcb59f12ca8a",
		"ts": "2026-07-19T22:47:17.583Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1210521.67,
		"hash": "fcb59f12ca8a3ffd5ac5bec9d994f6af89f6ca53b0da0526be42894d1a586ea6"
	},
	{
		"id": "e5db6b186938",
		"ts": "2026-07-19T22:47:17.805Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 83438.93,
		"hash": "e5db6b186938ac2d74818b81a98ef9dee670811e83e8e10174c22d49fd72e693"
	},
	{
		"id": "d99e61445311",
		"ts": "2026-07-19T22:47:18.007Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 435728,
		"hash": "d99e61445311aeadceb3b1cf17c1dbccd83dd4d41a48c252bda46ab761678628"
	},
	{
		"id": "7d2a427a2303",
		"ts": "2026-07-19T21:48:22.755Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107853348.54,
		"hash": "7d2a427a2303d685ab497c096a35a732cfad540bc5fe699768dd46c3f10bf63a"
	},
	{
		"id": "beb79a154e58",
		"ts": "2026-07-19T21:48:23.106Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 14876406.16,
		"hash": "beb79a154e58faeb0e483c273935a08b61c45a9c77518a7c68e789f0a24535e8"
	},
	{
		"id": "3a31469fdc7b",
		"ts": "2026-07-19T21:48:23.296Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 862845.88,
		"hash": "3a31469fdc7b2bdf745e77e5dffda63d6d61e125504e73b7ff73d9072a6bede7"
	},
	{
		"id": "cfacb7f8de52",
		"ts": "2026-07-19T21:48:23.484Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 25414111.74,
		"hash": "cfacb7f8de527e3fdc3282aeb5be9b757ae061133aee358d86b675baef11d872"
	},
	{
		"id": "616286d3b294",
		"ts": "2026-07-19T21:48:23.673Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 5034705.36,
		"hash": "616286d3b2944c9d6ae667e8838005fdc66f28e15900e0fc7440e5c842bd252b"
	},
	{
		"id": "2a1d28bd3b04",
		"ts": "2026-07-19T21:48:23.863Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 990439.6,
		"hash": "2a1d28bd3b049855b951af09bbaee211df01b4aac449679be8e74b6a4ee9785b"
	},
	{
		"id": "01d4bad55b09",
		"ts": "2026-07-19T21:48:24.050Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25414111.74,
		"hash": "01d4bad55b094cac8d82311023d105c61eb661382610b9c9db05e7dab1100da5"
	},
	{
		"id": "075d820e816d",
		"ts": "2026-07-19T21:48:24.262Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2485357.49,
		"hash": "075d820e816d652486ebf040f5844c5ff90a111c185b762fe446d0d61505a654"
	},
	{
		"id": "642d7de47935",
		"ts": "2026-07-19T21:48:24.454Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 152915.63,
		"hash": "642d7de4793588e949959daba91a4886abcf9d5d8869fd8c512878e179f2adfa"
	},
	{
		"id": "99ad10812de3",
		"ts": "2026-07-19T21:48:24.639Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity"
		],
		"liquidityUsd": 45357.84,
		"hash": "99ad10812de30f011992d46f7f4134aa9c24c9fd16925a3bd59e25ff7a05dbc7"
	},
	{
		"id": "c3a5934d3080",
		"ts": "2026-07-19T21:48:24.818Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2066108.93,
		"hash": "c3a5934d308053fa1c4ac893f1d4ed0dabccfee610d81ef937910fc9cfa100a9"
	},
	{
		"id": "7241baa2a571",
		"ts": "2026-07-19T21:48:24.995Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1270611.64,
		"hash": "7241baa2a571d8c65b77d768342857a35f7dceb9fe4c00529df313df105f72d0"
	},
	{
		"id": "aec159c203e1",
		"ts": "2026-07-19T21:48:25.173Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 200320.36,
		"hash": "aec159c203e1792bbeb96129c673122a9c61e635ba0a57102cf4f2151cf30c51"
	},
	{
		"id": "e6525ebe40bd",
		"ts": "2026-07-19T21:48:25.354Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1847952.74,
		"hash": "e6525ebe40bdb5d0a17eef08d06760fb9849c985d7157db01e691193f488d31e"
	},
	{
		"id": "881cfbdf8e41",
		"ts": "2026-07-19T21:48:25.542Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 431088.03,
		"hash": "881cfbdf8e4132cb808447452b7e100860908ea9f561b5da9a0947e9ebd5a37a"
	},
	{
		"id": "2d4cbea2124b",
		"ts": "2026-07-19T21:48:25.730Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1210554.95,
		"hash": "2d4cbea2124b6588211df05a24ec777138ef541551212731378777652bbc6e12"
	},
	{
		"id": "0a61149840c8",
		"ts": "2026-07-19T20:41:43.016Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107789968.48,
		"hash": "0a61149840c842ffdbdad3fe11fc8490585c4708926efe38f6ecfd9ffd45830b"
	},
	{
		"id": "a4931d3d1c3f",
		"ts": "2026-07-19T20:41:43.464Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 14555940.28,
		"hash": "a4931d3d1c3f46f02a71981a2e3c79685a6a0e9d3b73e831bc896c740d08e4f7"
	},
	{
		"id": "4e916d3481d6",
		"ts": "2026-07-19T20:41:43.711Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 870087.16,
		"hash": "4e916d3481d6e14156b296cd29dc0f579d986836f5608da66734d48d80e464a1"
	},
	{
		"id": "7a682b207eca",
		"ts": "2026-07-19T20:41:43.954Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 25426294.49,
		"hash": "7a682b207ecafe4150c352e442df62c80982d38084e01204f45b1008f5b78330"
	},
	{
		"id": "36cc386c21b6",
		"ts": "2026-07-19T20:41:44.208Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 5028338.1,
		"hash": "36cc386c21b667a4a193bee04f9cc0e6cf266cabc640f60969bf6a2c391e0136"
	},
	{
		"id": "aa3a087f0be4",
		"ts": "2026-07-19T20:41:44.453Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 990439.6,
		"hash": "aa3a087f0be46ad783f2fa1a87b5a1875fb20c2bd821e3080e7f916de441bb67"
	},
	{
		"id": "b3333f262dca",
		"ts": "2026-07-19T20:41:44.694Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25426294.49,
		"hash": "b3333f262dca0be9ea0a1384c93067cbae8ac2e0df696847e081f1bc0323157a"
	},
	{
		"id": "e1cd0e160fa9",
		"ts": "2026-07-19T20:41:44.972Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2492569.82,
		"hash": "e1cd0e160fa990ea07d5095582222cb27dad8f6858a23c6f4f7430c4d4ce0fcf"
	},
	{
		"id": "5d6d35cbdd31",
		"ts": "2026-07-19T20:41:45.213Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 162868.47,
		"hash": "5d6d35cbdd319767073bc27651313a0cc2def7c4db4abf350763d2a188171919"
	},
	{
		"id": "ad126f507934",
		"ts": "2026-07-19T20:41:45.456Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity"
		],
		"liquidityUsd": 46821.64,
		"hash": "ad126f507934214e8d740ade51013a0e4e7f0d15bd50c8125c36b444be8fd192"
	},
	{
		"id": "86771d38dac9",
		"ts": "2026-07-19T20:41:45.684Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2076663.68,
		"hash": "86771d38dac96ba707c1083d9774c3eec32cc8c3d2ee268e7edf328a94fdd31f"
	},
	{
		"id": "875309eb827b",
		"ts": "2026-07-19T20:41:45.912Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1844844.37,
		"hash": "875309eb827b79542fd74145170e0cd1aa4ffc4b7ad6a6f8bb69c32bd1847eff"
	},
	{
		"id": "902484af03f4",
		"ts": "2026-07-19T20:41:46.141Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 205165.56,
		"hash": "902484af03f44ae5ac2220fef7a122a9c87cc0d346ae3af8c23b86d99e035fa6"
	},
	{
		"id": "c1f55602ea86",
		"ts": "2026-07-19T20:41:46.374Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1280279.76,
		"hash": "c1f55602ea86d7cf94d0eaf2fbe2d34ad509c7328927c298e12b628a189ed9aa"
	},
	{
		"id": "069289809631",
		"ts": "2026-07-19T20:41:46.602Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 432047.56,
		"hash": "069289809631509784fddc408bff77f0b4110151c9a14645dde6e3c7746db5a5"
	},
	{
		"id": "b75a670c88af",
		"ts": "2026-07-19T20:41:46.829Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 529771.86,
		"hash": "b75a670c88af706dc0973ccda4c2d8439e818fb22d331b49d083d6cdcdb46c09"
	},
	{
		"id": "1c176c9c2efd",
		"ts": "2026-07-19T19:02:54.879Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107737354.69,
		"hash": "1c176c9c2efd52fd4cc6d4465ecd19c4da6ad6b878300a9f5884828259ed366a"
	},
	{
		"id": "2b95f40bb9c4",
		"ts": "2026-07-19T19:02:55.332Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 15307407.79,
		"hash": "2b95f40bb9c4d2776019b32e47597e96dd6b59dfdea7789c18657d2dc21bd8bc"
	},
	{
		"id": "64212b92ffb2",
		"ts": "2026-07-19T19:02:55.568Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 869947.48,
		"hash": "64212b92ffb21f2c74aaf4548847c01f2a626038eb26393d787c388ce74c7244"
	},
	{
		"id": "e117ef32b59f",
		"ts": "2026-07-19T19:02:55.820Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 25344714.19,
		"hash": "e117ef32b59fa04a5d83027cf2fe91b2fee53f94aaa6fa9ad4928b9685410120"
	},
	{
		"id": "b16b994aa44a",
		"ts": "2026-07-19T19:02:56.055Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 5002159.9,
		"hash": "b16b994aa44a601f22871fed98d9fab3301e2f565255e570a743c1549cf181ec"
	},
	{
		"id": "03cee21d47da",
		"ts": "2026-07-19T19:02:56.304Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 996548.87,
		"hash": "03cee21d47dad13f40be1aab6e57318cd4552068258cef560c75ff7d44045f3f"
	},
	{
		"id": "386c20f82665",
		"ts": "2026-07-19T19:02:56.532Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25344714.19,
		"hash": "386c20f82665df3217dd7621d043d60fb8a72af2161d27c6885d088ac74c71e6"
	},
	{
		"id": "3b4735d75260",
		"ts": "2026-07-19T19:02:56.782Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2942327.34,
		"hash": "3b4735d752604e5f0634820c75e1690fa26e69c9c4cfac39f3f5fdc24b056047"
	},
	{
		"id": "6ca096defc67",
		"ts": "2026-07-19T19:02:57.018Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 166701.9,
		"hash": "6ca096defc674de203622db72aba51e6a0d67f0630989c233e717c4669492397"
	},
	{
		"id": "eb684f9fa57d",
		"ts": "2026-07-19T19:02:57.263Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity"
		],
		"liquidityUsd": 49276.18,
		"hash": "eb684f9fa57df29beb1fe0934af53af6328a2fbb7d83c773bfbc187dbe10afc4"
	},
	{
		"id": "a6b053838711",
		"ts": "2026-07-19T19:02:57.482Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1843053.68,
		"hash": "a6b0538387114db791582e06c2def1f97f9f26698e56a5aabcc077c73446a1b4"
	},
	{
		"id": "978b0a946db7",
		"ts": "2026-07-19T19:02:57.702Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1281334.4,
		"hash": "978b0a946db7336ef0537f45592d9d98530feb1681e243961e036425f98728fe"
	},
	{
		"id": "cd56909ad1d1",
		"ts": "2026-07-19T19:02:57.920Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 196030.88,
		"hash": "cd56909ad1d1fec6a6ec53eb6323f5694de2f58e18c98b9da1d38cadf126cc1e"
	},
	{
		"id": "99152f3f3a5b",
		"ts": "2026-07-19T19:02:58.145Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 429741.5,
		"hash": "99152f3f3a5b2b2e84661ab38e5193269c45f16d58d753787a035b66a5ecf4b4"
	},
	{
		"id": "33c9494a8ebd",
		"ts": "2026-07-19T19:02:58.363Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 618616.82,
		"hash": "33c9494a8ebd8658dd8d02c8f811105a26b4709344362f51b9c76eaa31370ea3"
	},
	{
		"id": "31ab6709596a",
		"ts": "2026-07-19T19:02:58.578Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2141939.98,
		"hash": "31ab6709596ae21085fcf578e276fdf8c56a1602c9045cf0dcfe7bfc8c92a8ed"
	},
	{
		"id": "327d7f6bc770",
		"ts": "2026-07-19T17:55:56.095Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107916823.35,
		"hash": "327d7f6bc7704c247364a2fa4a8885f2db23d965ba95a1e55b0e1c3da338159d"
	},
	{
		"id": "49ef76f7ed61",
		"ts": "2026-07-19T17:55:56.343Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 15118895.22,
		"hash": "49ef76f7ed61eac92e8c27c7b7a08308073fb8c10f1f30b06f59c54ee5ab5986"
	},
	{
		"id": "19a92dac1104",
		"ts": "2026-07-19T17:55:56.584Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 872092.42,
		"hash": "19a92dac1104257f645ef4a2d9d4923ebebd0efd312d3d40ab7794430191e693"
	},
	{
		"id": "4baa37d4dbf6",
		"ts": "2026-07-19T17:55:56.828Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 25446869.87,
		"hash": "4baa37d4dbf613d947bcef06b470b65d3502fb8ba92e1b56c7f0386ffaa9df75"
	},
	{
		"id": "d6fa2aff8f88",
		"ts": "2026-07-19T17:55:57.073Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 5023096.69,
		"hash": "d6fa2aff8f8890e7e7686230b2c2d0375cbea08fb37d7bbb5dd5039c3eef98f7"
	},
	{
		"id": "1860e216c586",
		"ts": "2026-07-19T17:55:57.312Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 993965.57,
		"hash": "1860e216c5867dd57aa80ece8b6f77d2bfa79121a0c13be642151a26e0c4fde8"
	},
	{
		"id": "e0a3d5249739",
		"ts": "2026-07-19T17:55:57.554Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25446869.87,
		"hash": "e0a3d524973962b1113aa8bf13c9a34aef1b6fd553ea23a93d5142b2a5bf345c"
	},
	{
		"id": "6e7f40860053",
		"ts": "2026-07-19T17:55:57.801Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2957637.9,
		"hash": "6e7f408600534f4055e8d22ab4e23c691fd14d9bdfa5d3f7578fe35beee68d33"
	},
	{
		"id": "63baf36de2f0",
		"ts": "2026-07-19T17:55:58.059Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 160634.14,
		"hash": "63baf36de2f0cfdc067a87320c33d0eb8cda9e4c605ba5858efdf857d204c9d2"
	},
	{
		"id": "b936d50bf31e",
		"ts": "2026-07-19T17:55:58.301Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 54542.48,
		"hash": "b936d50bf31edcbdc715f669cdeb5228f5bfb2e7cc01f75193b89d093eadfd0d"
	},
	{
		"id": "2a265b3e6389",
		"ts": "2026-07-19T17:55:58.524Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1845963.29,
		"hash": "2a265b3e6389fb1c9089024c1b15e31e713b6b7450a804a4a8bb7a6a46654782"
	},
	{
		"id": "7079fce71fd9",
		"ts": "2026-07-19T17:55:58.750Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1304862.48,
		"hash": "7079fce71fd9961f2f49e97889f1a32d9a2eb4726aee4dd4da22459e815518d2"
	},
	{
		"id": "795988023c88",
		"ts": "2026-07-19T17:55:58.976Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 431307.7,
		"hash": "795988023c88e99e18488f37e08846d2d1118cde274dc66468c3d23fcbe3d32d"
	},
	{
		"id": "f8032b0c95f3",
		"ts": "2026-07-19T17:55:59.199Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 197038.13,
		"hash": "f8032b0c95f3ccaa668b6435e7ed98c3d6553593c5fc61e6533f4b90d22055a0"
	},
	{
		"id": "38bd4ca66828",
		"ts": "2026-07-19T17:55:59.424Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 529697.12,
		"hash": "38bd4ca6682833f235cc034ec3856a1a90bbd3982a6c497a5100c139e803d056"
	},
	{
		"id": "141a88dc0b3e",
		"ts": "2026-07-19T17:55:59.654Z",
		"symbol": "HANDL",
		"token": "0x3BBCb624CB9A1f73163A886F460f47603E5E4425",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 66043.75,
		"hash": "141a88dc0b3e3273b26fb96b81f773d23b843c09d77255185b15ce53a87684ac"
	},
	{
		"id": "bd5404b6953a",
		"ts": "2026-07-19T16:54:27.935Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107970165.72,
		"hash": "bd5404b6953abe747570c997bfecd905a84daed23c0af5e9ddeb0e2a4cc91847"
	},
	{
		"id": "3d4403f99813",
		"ts": "2026-07-19T16:54:28.347Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 15100831.03,
		"hash": "3d4403f99813687b7d163cd8e6b580ecb1275b8d1793caa3f614ab8cd024eaa9"
	},
	{
		"id": "8714d56d9969",
		"ts": "2026-07-19T16:54:28.740Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 871104.79,
		"hash": "8714d56d99691cde37496a400cb0321046b05bd79027615d5e216c35b32378f5"
	},
	{
		"id": "bc5a5a24b8f7",
		"ts": "2026-07-19T16:54:28.967Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 25392217.09,
		"hash": "bc5a5a24b8f7c4d52ac8a05ba0a930214e3d2a5c333dc280bea83de55e02f94e"
	},
	{
		"id": "c9e1d0de8512",
		"ts": "2026-07-19T16:54:29.187Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 5030697.4,
		"hash": "c9e1d0de8512ac8027c97cb4a3e6844a6b56cb340a91c0d279d64eada02d11f9"
	},
	{
		"id": "11bbf77cbb92",
		"ts": "2026-07-19T16:54:29.402Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 994298.22,
		"hash": "11bbf77cbb928a9543ce43e59b2bbe422cdfbf6e1d0783bebc697242ac4ddb73"
	},
	{
		"id": "a7fc5ecedc79",
		"ts": "2026-07-19T16:54:29.612Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25392217.09,
		"hash": "a7fc5ecedc79315b8aa1c846ecc75dea4a842091de968de23c85bc82fbc567ae"
	},
	{
		"id": "1078cc42335d",
		"ts": "2026-07-19T16:54:29.844Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2954562.58,
		"hash": "1078cc42335d3f448515bf5902317a71447682b927bb4968ed3dfebf3a83401d"
	},
	{
		"id": "63aed4beee9e",
		"ts": "2026-07-19T16:54:30.062Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 167257.61,
		"hash": "63aed4beee9ef2ac9ae47b35bef7358688376dedfc8676f88487c97dc0a78711"
	},
	{
		"id": "16af843e25b3",
		"ts": "2026-07-19T16:54:30.276Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 53213.05,
		"hash": "16af843e25b32ded9275d9d3cfcd7d5a94032f6c62ccf5e37e090d30021ca1ee"
	},
	{
		"id": "b159e77dbfd5",
		"ts": "2026-07-19T16:54:30.471Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1848602.9,
		"hash": "b159e77dbfd577dc7c9a8eaa65f291f41bd5e4a7eeccba70c755924a0abd6351"
	},
	{
		"id": "b5ee97411941",
		"ts": "2026-07-19T16:54:30.664Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1309783.27,
		"hash": "b5ee974119418d2e313758e52ec623820e7fcf8bd05443e469e3da9245ba5d96"
	},
	{
		"id": "2ce9a320f826",
		"ts": "2026-07-19T16:54:30.858Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 437235.49,
		"hash": "2ce9a320f8263ca3df48ed4573564da0a74bd4b02401ef2061b9f0c4ee2983da"
	},
	{
		"id": "3d4579dc9f1a",
		"ts": "2026-07-19T16:54:31.055Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 196821.13,
		"hash": "3d4579dc9f1ad35b967471cfd229a59d729eb13d403fe1d5a96cfe4f4e7e41b4"
	},
	{
		"id": "38a33968f701",
		"ts": "2026-07-19T16:54:31.249Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 529264.89,
		"hash": "38a33968f701de19177adaa73f6978fd8d8118f0bd6e79774afeb54b5c8e4eda"
	},
	{
		"id": "057190b264c5",
		"ts": "2026-07-19T16:54:31.446Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2131988.89,
		"hash": "057190b264c5e77943779a588e8a6ca62d74f41a4f7d71599aa54f9525914344"
	},
	{
		"id": "292e753e57c4",
		"ts": "2026-07-19T15:54:22.562Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107974645.57,
		"hash": "292e753e57c41286dcee9ca10a085687570225aa249e207840134d4a5c5d8f6a"
	},
	{
		"id": "5cb5b9131fe2",
		"ts": "2026-07-19T15:54:23.047Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 16138747.07,
		"hash": "5cb5b9131fe2e8513be91fda259d4c490f9e74ae3757b6f7cbc44c77a8a537d5"
	},
	{
		"id": "cc93332e24f4",
		"ts": "2026-07-19T15:54:23.324Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 847561.19,
		"hash": "cc93332e24f40e4024dc6577545274ed27958fca6738e872468b81595a3fa9e6"
	},
	{
		"id": "4882eeee68aa",
		"ts": "2026-07-19T15:54:23.616Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 25466436.32,
		"hash": "4882eeee68aaee46c55980b65eff80cc8ea353488d096f8a0c8aa39f0b42723d"
	},
	{
		"id": "4cab6a779414",
		"ts": "2026-07-19T15:54:23.874Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 5039331.43,
		"hash": "4cab6a779414d3db684bc8869053c26fdbafdc4a86734ee93da119699701e7d4"
	},
	{
		"id": "63fee9c03c14",
		"ts": "2026-07-19T15:54:24.135Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 999197.41,
		"hash": "63fee9c03c14eec2d6d96646a9da2deaf504b58d9c13f960152801828da65698"
	},
	{
		"id": "687255f143ea",
		"ts": "2026-07-19T15:54:24.384Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25466436.32,
		"hash": "687255f143eac03389c8241324b0089eece70706b5caf2558abbcb34dbf459f7"
	},
	{
		"id": "9795a2ee9274",
		"ts": "2026-07-19T15:54:24.650Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2959557.5,
		"hash": "9795a2ee92746ca2bb9756aa7bbd87c2d184fbcb2fab3fbe0f527554c3fa8565"
	},
	{
		"id": "b1461d24097d",
		"ts": "2026-07-19T15:54:24.935Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 167304.95,
		"hash": "b1461d24097d0b2b4a32f4b5a48266a9580a742530f7a54d5648d244576ef445"
	},
	{
		"id": "6e9480b12347",
		"ts": "2026-07-19T15:54:25.217Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 57425.02,
		"hash": "6e9480b12347916b2a52f23ff3c1684ba5ad1803f4f7f295d9f87455a43ef346"
	},
	{
		"id": "87a0372f33c3",
		"ts": "2026-07-19T15:54:25.451Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1870974.65,
		"hash": "87a0372f33c3769687ea5ae5ec539fdf12e641c4063941c32a692a2c11de3132"
	},
	{
		"id": "e4a1a01b8025",
		"ts": "2026-07-19T15:54:25.697Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 439189.02,
		"hash": "e4a1a01b80256c67e9d659d4e9b46841e61410c53ada065fea8c1244cf4fa9f0"
	},
	{
		"id": "cd7b06a961fe",
		"ts": "2026-07-19T15:54:25.929Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1307775.22,
		"hash": "cd7b06a961fef2c97515415d6eb16d7bb563e5453570594a7eb827bd12b2478a"
	},
	{
		"id": "0c4beb31fa74",
		"ts": "2026-07-19T15:54:26.178Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 194421,
		"hash": "0c4beb31fa74c063b509c13df77bcb1e11bf9b59a2c0f841d61238f5a792ecb1"
	},
	{
		"id": "26495d6dd54d",
		"ts": "2026-07-19T15:54:26.410Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 133166.55,
		"hash": "26495d6dd54dc353185cde06ba00145971798588add4e993f1c72968c31cd077"
	},
	{
		"id": "cefea0188bf0",
		"ts": "2026-07-19T15:54:26.641Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 531050.61,
		"hash": "cefea0188bf0a281ec0756f13554154051fcd3e7a51a294a79e2ce1240af92c1"
	},
	{
		"id": "84a87d536e45",
		"ts": "2026-07-19T15:54:26.888Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 616598.36,
		"hash": "84a87d536e458984ca434741fcfbf17ce875f6ede5a4905ecb5d7e64b7f181bd"
	},
	{
		"id": "b41e31bc12be",
		"ts": "2026-07-19T14:51:53.444Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107996284.21,
		"hash": "b41e31bc12bebc1b709ffd9de88fb893963bba2f562ed54be086eb0df98b949c"
	},
	{
		"id": "946286c05063",
		"ts": "2026-07-19T14:51:53.703Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 16333396.23,
		"hash": "946286c0506379d4685e85b0715eb77e2bc8eef5a8cb5a2c77a0f6da1939e8d5"
	},
	{
		"id": "afa839c5729e",
		"ts": "2026-07-19T14:51:53.944Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 855792.98,
		"hash": "afa839c5729e3f2872e306fc3c2d24b31f80bf9aa9f8ba5ac7e1a9ec26867284"
	},
	{
		"id": "f942de65c816",
		"ts": "2026-07-19T14:51:54.186Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 25483011.5,
		"hash": "f942de65c816e3975fa593efd6540c851c10984cadd36e8f1f188959815a6c06"
	},
	{
		"id": "2aad9835db4e",
		"ts": "2026-07-19T14:51:54.424Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 5045568.04,
		"hash": "2aad9835db4e1a8333b6a968174b06be025eea90e79317c2a05d3bd9bd20de83"
	}
]
