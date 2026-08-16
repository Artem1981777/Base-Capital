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
	"updatedAt": "2026-08-16T10:19:08.605Z",
	"tokensScored": 10799,
	"verdictsIssued": 10799,
	"safe": 9405,
	"risky": 815,
	"likelyRug": 579,
	"ticks": 647
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "16a85a6bf9ba",
		"ts": "2026-08-16T10:19:04.079Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111395114.33,
		"hash": "16a85a6bf9ba6561d181bb3ac2460a4bb3db57afe09ff5ad752c3842324f97f4"
	},
	{
		"id": "f9dd7daafee4",
		"ts": "2026-08-16T10:19:04.590Z",
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
		"liquidityUsd": 16986159.22,
		"hash": "f9dd7daafee43de7f838617ed870eb447f7db11344345a02d227c5b63a9f9145"
	},
	{
		"id": "3b88fc0c6e1c",
		"ts": "2026-08-16T10:19:04.847Z",
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
		"liquidityUsd": 806073.68,
		"hash": "3b88fc0c6e1c950b83ecd1c140abc6e5898bcf308b6d47a6d6edd85b621210bb"
	},
	{
		"id": "8e4eaeb275f5",
		"ts": "2026-08-16T10:19:05.140Z",
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
		"liquidityUsd": 26620286.53,
		"hash": "8e4eaeb275f5d352cb0900675a6fd42400a439427b46fd0329aaac5f829fcca1"
	},
	{
		"id": "416258c5b097",
		"ts": "2026-08-16T10:19:05.368Z",
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
		"liquidityUsd": 4150679.59,
		"hash": "416258c5b09729f0753b21ac72cb64ed293040d4d4885acd6493a82b5a4ee6c4"
	},
	{
		"id": "da93054f8eae",
		"ts": "2026-08-16T10:19:05.710Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 887120.85,
		"hash": "da93054f8eae45b24a3e8d1057b53f866b5c4d16c87c2ee5d91d7c6f6b25f5e1"
	},
	{
		"id": "f6d809777485",
		"ts": "2026-08-16T10:19:05.969Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6206819.33,
		"hash": "f6d8097774850d9abdd46177f8d06faeb1164b54505cb314a21b6218fda253e9"
	},
	{
		"id": "f211666e928f",
		"ts": "2026-08-16T10:19:06.205Z",
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
		"liquidityUsd": 3555298.84,
		"hash": "f211666e928f6d6d2cf9b92423be19e9c808cbd56d572c3e7fc75a541f058aea"
	},
	{
		"id": "6cee0a1fc362",
		"ts": "2026-08-16T10:19:06.431Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2569736.77,
		"hash": "6cee0a1fc3629578db8f3218848106db0fc7eeb2eeacedfb7f9b64f572e94422"
	},
	{
		"id": "a7afff919797",
		"ts": "2026-08-16T10:19:06.662Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 264236.93,
		"hash": "a7afff9197978363c214feb3bf6d8f4f7d3ed90bae491f330033a6a023b4ba17"
	},
	{
		"id": "40f49953c0fa",
		"ts": "2026-08-16T10:19:06.875Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 148341.51,
		"hash": "40f49953c0fa62ecb28b22e8f2820912ab7d1c65c417446f8ce084dcf8be2ef2"
	},
	{
		"id": "542a56ef6b04",
		"ts": "2026-08-16T10:19:07.087Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 894227.13,
		"hash": "542a56ef6b0413a81d34525c1dc5d5db0ff4689f22762650f6013682795456c9"
	},
	{
		"id": "81f73c36cc3e",
		"ts": "2026-08-16T10:19:07.304Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6207331.49,
		"hash": "81f73c36cc3e5f95427b67ebca74e7c534516beddcad540d8989310d6716c934"
	},
	{
		"id": "24539a19fb56",
		"ts": "2026-08-16T10:19:07.517Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 8.32,
		"hash": "24539a19fb56c0801ad3b663c7d3485d7f9c70c96f7ae8c1c05c43a459d9fe8e"
	},
	{
		"id": "f5b379c05584",
		"ts": "2026-08-16T10:19:07.729Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1026155.89,
		"hash": "f5b379c055845ced08a80aef72f398a354953f05d4b975563eacc9483f64dbe8"
	},
	{
		"id": "ddd1aa1f383c",
		"ts": "2026-08-16T10:19:07.945Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 367401.48,
		"hash": "ddd1aa1f383c5de50c9b77369b4cd2d7c2b7104a8973752e536e6f18dddf781e"
	},
	{
		"id": "d6a773826aff",
		"ts": "2026-08-16T10:19:08.178Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 81105.98,
		"hash": "d6a773826affa0ef7b3cbba395a9cfd2972584d88c01a6ad776543844d8d6f2f"
	},
	{
		"id": "f04e17e93557",
		"ts": "2026-08-16T10:19:08.391Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9435914.35,
		"hash": "f04e17e935576dd0bdae2e8514d0bc72989a4a0be514e12ca8d25cd5992146ac"
	},
	{
		"id": "b06ed54699b3",
		"ts": "2026-08-16T10:19:08.604Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 89569.89,
		"hash": "b06ed54699b3d5ed66ba460c5624b2eebc63ccbe1e2254242eac793cf882267d"
	},
	{
		"id": "c1a9088df69f",
		"ts": "2026-08-16T09:23:17.570Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111438319.95,
		"hash": "c1a9088df69fedd23171cd16840b41e2adef6d8099699375a28f5b9b159a6acd"
	},
	{
		"id": "4d4c229adf4c",
		"ts": "2026-08-16T09:23:18.247Z",
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
		"liquidityUsd": 17004167.27,
		"hash": "4d4c229adf4cd2db76c0f38392f17089371317e9ecf8ff6837e7fe95105108a8"
	},
	{
		"id": "c142aad22836",
		"ts": "2026-08-16T09:23:18.670Z",
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
		"liquidityUsd": 804850.35,
		"hash": "c142aad2283683f0cd87e9b17aad6077fa71d4732a10dd7dfaf31718f93ff885"
	},
	{
		"id": "219259d73d46",
		"ts": "2026-08-16T09:23:19.133Z",
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
		"liquidityUsd": 26620450.43,
		"hash": "219259d73d46820c02419a7635c12264a5a11812459442ed5c329e785282f1f6"
	},
	{
		"id": "25c0a42617fd",
		"ts": "2026-08-16T09:23:19.556Z",
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
		"liquidityUsd": 4149806.87,
		"hash": "25c0a42617fdf7be26549dabff6aad8b86b8b26c944f323af3a62bf3ef184b0a"
	},
	{
		"id": "e922ef796c35",
		"ts": "2026-08-16T09:23:19.800Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 887120.85,
		"hash": "e922ef796c35adb36212f5e8d590955ea8a8741084b2387829650c435c0ae000"
	},
	{
		"id": "985b55e0d6ef",
		"ts": "2026-08-16T09:23:20.027Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26620450.43,
		"hash": "985b55e0d6ef86fcacc95d9a289c330a0301888200777d4d459deef89bf58aab"
	},
	{
		"id": "e82402dbb1b2",
		"ts": "2026-08-16T09:23:20.487Z",
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
		"liquidityUsd": 3889347.03,
		"hash": "e82402dbb1b2067798debfe4efffa7264dfeb35abcdfaf7acfa6c51d594b2758"
	},
	{
		"id": "1c4de4d72020",
		"ts": "2026-08-16T09:23:20.720Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2591326.11,
		"hash": "1c4de4d72020e4ff44894dd1a3d509c06da26e73ce9f4ea96769d03f0588020a"
	},
	{
		"id": "e9d1135619d4",
		"ts": "2026-08-16T09:23:20.968Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 264137.8,
		"hash": "e9d1135619d4c8e7a8260f3a399a937472cecdb7d3c88301ebcaadb9653f74f2"
	},
	{
		"id": "652c359eb8f2",
		"ts": "2026-08-16T09:23:21.180Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 146741.84,
		"hash": "652c359eb8f20a65094572f98ace08f43f217fd23a13dcbe5a9ec6787560eb8b"
	},
	{
		"id": "e9bff36f163e",
		"ts": "2026-08-16T09:23:21.408Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 894059.22,
		"hash": "e9bff36f163efff2aa231f2f05f35cbe4c22856ae14447c1054343dec5ff5f72"
	},
	{
		"id": "3c30d8435990",
		"ts": "2026-08-16T09:23:21.619Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1039225.59,
		"hash": "3c30d84359905b1a08e700d166d4bfae69e41ba9a9df348c9cffd667904cf461"
	},
	{
		"id": "6f01acc9ad4f",
		"ts": "2026-08-16T09:23:21.849Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 365094.44,
		"hash": "6f01acc9ad4f44e71f5acfcc94d05bbb4668ad0c896cce00e77f2570bc6eddfc"
	},
	{
		"id": "3577d8703b4b",
		"ts": "2026-08-16T09:23:22.059Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 8.61,
		"hash": "3577d8703b4b1aa1443fcc462a6c619a43dd5f06bd37f4459efee11adf857aac"
	},
	{
		"id": "b09801977a2e",
		"ts": "2026-08-16T09:23:22.288Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 84693.08,
		"hash": "b09801977a2ea2538ef796bf2d0052a49f8d7316a670c13fa4bf1d9690edc5f2"
	},
	{
		"id": "d7d8a714300e",
		"ts": "2026-08-16T09:23:22.498Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6633374.51,
		"hash": "d7d8a714300e84fb26e7faf3265a5a1c5fbadf55e668296c44f2d85db038c144"
	},
	{
		"id": "0eb7f538c71f",
		"ts": "2026-08-16T09:23:22.727Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9449072.57,
		"hash": "0eb7f538c71f8c0d75c7750eab5d9d49bb967d675825d3cae2c555803c3946d5"
	},
	{
		"id": "cc48ff9daede",
		"ts": "2026-08-16T09:23:22.937Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 621925.58,
		"hash": "cc48ff9daede4ecf3d4dcd1a1ff2fc5626a75850cb9ded4eb6844e8d898ef725"
	},
	{
		"id": "cff36f002ab8",
		"ts": "2026-08-16T08:23:35.684Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111452530,
		"hash": "cff36f002ab86bee73767ae8046c51131c31f701edab633e7e2ccae15d5a630c"
	},
	{
		"id": "731bd179a78b",
		"ts": "2026-08-16T08:23:36.135Z",
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
		"liquidityUsd": 16994074.52,
		"hash": "731bd179a78b40d6804cc9c7aea0634b84d3e6ab5b30ad77c6ca86532c545500"
	},
	{
		"id": "a6f34c8fbe8d",
		"ts": "2026-08-16T08:23:36.407Z",
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
		"liquidityUsd": 804850.35,
		"hash": "a6f34c8fbe8dd912055ff59a8d283c115258574487d90bab7d7e330c3dc759f7"
	},
	{
		"id": "6049e68c0d46",
		"ts": "2026-08-16T08:23:36.640Z",
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
		"liquidityUsd": 26606523.71,
		"hash": "6049e68c0d46ec24b854592e2d005cc2c30eb9dac45300fefaa02de0c74e91c0"
	},
	{
		"id": "82cab0bfabee",
		"ts": "2026-08-16T08:23:36.902Z",
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
		"liquidityUsd": 4145922.19,
		"hash": "82cab0bfabeeb2e504e80e3fd55745db6c800c49d641cf7f983e24b41c4d8efc"
	},
	{
		"id": "c6aad0bdf8e0",
		"ts": "2026-08-16T08:23:37.210Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 887120.85,
		"hash": "c6aad0bdf8e04a708a9d355908c97edbdb88a11c4d11b221ce3143a99c1d383c"
	},
	{
		"id": "195de1075a12",
		"ts": "2026-08-16T08:23:37.451Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26606523.71,
		"hash": "195de1075a1234916c11d7c7581bbc8f1c86a9cb5272c249abea3ec17b704dcf"
	},
	{
		"id": "f017fe35caaa",
		"ts": "2026-08-16T08:23:37.694Z",
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
		"liquidityUsd": 3886598.34,
		"hash": "f017fe35caaaf99471ff0d9ee9c23457dd9ad102b290bc5bed0030939931bca2"
	},
	{
		"id": "1f0b9b853295",
		"ts": "2026-08-16T08:23:37.925Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2588104.47,
		"hash": "1f0b9b85329576fc6fff9be5d0a56b1876ddf8a721ef4d050399d0fe9463f6ca"
	},
	{
		"id": "4d557e0bb09b",
		"ts": "2026-08-16T08:23:38.164Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 271605.7,
		"hash": "4d557e0bb09bba5403483ffdabc48be176039faed92169e4e153a4dee487c848"
	},
	{
		"id": "f176e3c7e122",
		"ts": "2026-08-16T08:23:38.382Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 147785.69,
		"hash": "f176e3c7e122f6350f6ee560f74a04c31fcd640356bf7ff5e82ce1760dbab27d"
	},
	{
		"id": "991caee94837",
		"ts": "2026-08-16T08:23:38.602Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 895145.53,
		"hash": "991caee94837c0e15ae9c52e101bde802d5f766f55fded56ae57c07ec5b4741b"
	},
	{
		"id": "415d030ba838",
		"ts": "2026-08-16T08:23:38.824Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1075263.96,
		"hash": "415d030ba83839008c4dd3606216b487768579d3ea5f5072ecb7fb105cf4076a"
	},
	{
		"id": "a9deeac41769",
		"ts": "2026-08-16T08:23:39.046Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 361461.38,
		"hash": "a9deeac417691cb3d0bf3a46e7d6aa398f6086a0e06faa66dc652b2daabd5309"
	},
	{
		"id": "4cc0c3a8015c",
		"ts": "2026-08-16T08:23:39.263Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 146589.43,
		"hash": "4cc0c3a8015c061fba03232afa17a172d20ec2cc2b8e7c4b9f11e48c7be563f7"
	},
	{
		"id": "90b99aafcb7a",
		"ts": "2026-08-16T08:23:39.484Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6323710.96,
		"hash": "90b99aafcb7a627781ae6b4d110b527c4e440ba1cc700061d2fbc2f6d6ea6e17"
	},
	{
		"id": "51b3b691eaac",
		"ts": "2026-08-16T08:23:39.702Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9440217.3,
		"hash": "51b3b691eaac3f457817d9fdb2801125272ce1921ece3759aaeb91f995af622e"
	},
	{
		"id": "296c83b24d2b",
		"ts": "2026-08-16T08:23:39.994Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 8.35,
		"hash": "296c83b24d2b9b54821eebb308d70b0d8d0aa6be81658a4031dfa1f3a0adf547"
	},
	{
		"id": "66284e1f8852",
		"ts": "2026-08-16T08:23:40.209Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 620825.07,
		"hash": "66284e1f8852e1c063e0104109c0be116fdd97f85936293972926dc377ab411d"
	},
	{
		"id": "9152f4c3e086",
		"ts": "2026-08-16T07:27:18.609Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111444563.54,
		"hash": "9152f4c3e08693b45a5936f93d7d65901b8e7251e96d4300062a49fcb9e5c06f"
	},
	{
		"id": "02c152ca3926",
		"ts": "2026-08-16T07:27:19.053Z",
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
		"liquidityUsd": 16549155.07,
		"hash": "02c152ca39266c90be5d125ccf98e9dd1a889cb39b8430d6e6730c736f2bfebc"
	},
	{
		"id": "fe9fc37a2bb7",
		"ts": "2026-08-16T07:27:19.300Z",
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
		"liquidityUsd": 804850.35,
		"hash": "fe9fc37a2bb7a4e6a20878d40c20389fedc4c316efd4efcae76b25411a922d9d"
	},
	{
		"id": "d135370f44c7",
		"ts": "2026-08-16T07:27:19.542Z",
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
		"liquidityUsd": 26604961.43,
		"hash": "d135370f44c7576912be71a4e7e8db9340af23988de82b5370b4d7d9d239dcdc"
	},
	{
		"id": "37433444498d",
		"ts": "2026-08-16T07:27:19.792Z",
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
		"liquidityUsd": 4145922.19,
		"hash": "37433444498dc7b3da6810706094815ed920f7de511abb0bc3628195590a20ab"
	},
	{
		"id": "66eefb20fa01",
		"ts": "2026-08-16T07:27:20.024Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 887120.85,
		"hash": "66eefb20fa016975091cce1d1ea5f8e1b34f16040d1cab95371971966464d9aa"
	},
	{
		"id": "82615a85e60f",
		"ts": "2026-08-16T07:27:20.270Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26604961.43,
		"hash": "82615a85e60f41f61d5030929977e306c1167e48b298fdf1135ae45adabc451e"
	},
	{
		"id": "bda36a2740fb",
		"ts": "2026-08-16T07:27:20.510Z",
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
		"liquidityUsd": 3887937.68,
		"hash": "bda36a2740fb01aefb68e48218ed77d5bf593c45d166c26123f9673c4f8ee20c"
	},
	{
		"id": "7a0546cf4781",
		"ts": "2026-08-16T07:27:20.754Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2580234.65,
		"hash": "7a0546cf478189cfdece04116ee86d7d09d88bf210e57b9f22e0a72143027efd"
	},
	{
		"id": "e9776784a294",
		"ts": "2026-08-16T07:27:20.991Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 275448.73,
		"hash": "e9776784a2941f9a2026a7d07f804d652bb13abb6262797a7e72443eea651068"
	},
	{
		"id": "fed88b765087",
		"ts": "2026-08-16T07:27:21.219Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 897257.01,
		"hash": "fed88b765087b86818bb65bdc84c2a587be83c433f2cef36c7cd19628a70fb70"
	},
	{
		"id": "6358016c71df",
		"ts": "2026-08-16T07:27:21.569Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 151953.26,
		"hash": "6358016c71df66209d2dc71a6d86f1ae1d1fd59bb7a60896129d0a0f09331e08"
	},
	{
		"id": "ada8bc9cfa0a",
		"ts": "2026-08-16T07:27:21.796Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1003630.28,
		"hash": "ada8bc9cfa0a1cdf2a6d6fbbb28f1d88c4dffc9d69367a87e62c19b542a70328"
	},
	{
		"id": "6ae11d3b5cad",
		"ts": "2026-08-16T07:27:22.017Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5421373.46,
		"hash": "6ae11d3b5cad0506a899ca680f90bb12f49b4c0bc00f341e462d0a23deef5f09"
	},
	{
		"id": "badb2a5ea67f",
		"ts": "2026-08-16T07:27:22.245Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9440542.69,
		"hash": "badb2a5ea67fd41811aeff800640a3fd110d3b739c4e1f7bbddfe5eed96dc68a"
	},
	{
		"id": "b57b3655140e",
		"ts": "2026-08-16T07:27:22.467Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 362527.82,
		"hash": "b57b3655140ef99b3da5497e00142e7a925aabf0e9b08203919282f07117a038"
	},
	{
		"id": "91168564e28f",
		"ts": "2026-08-16T07:27:22.697Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 43299.38,
		"hash": "91168564e28fd5fe8bbbc8062affb8a8230a1e197d33801b1d4995166f8e0c44"
	},
	{
		"id": "1189988716ab",
		"ts": "2026-08-16T07:27:22.921Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 4.68,
		"hash": "1189988716ab3c9e8eea78a216bb8ebacb70523e464efae45ad40a45eb429183"
	},
	{
		"id": "b77dd1511ab4",
		"ts": "2026-08-16T07:27:23.149Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 378029.22,
		"hash": "b77dd1511ab4c890ff7851ac3dbeb026dffd04af5428d9cfd0f7d2237472b68f"
	},
	{
		"id": "48a940827aab",
		"ts": "2026-08-16T06:33:27.091Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111434158.31,
		"hash": "48a940827aabb6ed8bcaeb3dc6e2f742d9d30afda19c6cbb03f519d8866ad027"
	},
	{
		"id": "be44c518fe03",
		"ts": "2026-08-16T06:33:27.439Z",
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
		"liquidityUsd": 17066256.58,
		"hash": "be44c518fe034d64169f94072c41e571341bf4e3567bfffbaef50260a730ddd8"
	},
	{
		"id": "2b8644ad01ca",
		"ts": "2026-08-16T06:33:27.636Z",
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
		"liquidityUsd": 804850.35,
		"hash": "2b8644ad01ca83bb59ea4e2ec23a0b3a5a0ef1ffaf6b1fb37bc9f63604481269"
	},
	{
		"id": "c129e5a205fe",
		"ts": "2026-08-16T06:33:27.880Z",
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
		"liquidityUsd": 26605599.48,
		"hash": "c129e5a205fe43dcff7d859b7b764d2046913ac5493c42e2a06900a79f94c9fe"
	},
	{
		"id": "e7e3f4e7db7a",
		"ts": "2026-08-16T06:33:28.086Z",
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
		"liquidityUsd": 4149266.52,
		"hash": "e7e3f4e7db7af4484054dc69da55db33a256a58d3e98777eea48aa96c92cfaa5"
	},
	{
		"id": "a98d4001e1ea",
		"ts": "2026-08-16T06:33:28.297Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 887831.66,
		"hash": "a98d4001e1ea9e8411d1fbf953e13c19564852909bdc0bc881135dfde2cbf500"
	},
	{
		"id": "6766d60d1289",
		"ts": "2026-08-16T06:33:28.500Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26605599.48,
		"hash": "6766d60d1289dd1760e42d1c3c0abddb8daf349873c63bd5f747b5ea94fc8dcc"
	},
	{
		"id": "8bd1f53abea0",
		"ts": "2026-08-16T06:33:28.707Z",
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
		"liquidityUsd": 3884233.88,
		"hash": "8bd1f53abea004c67ad7bd4bb5766f269752d42ac04b5b10777107017809262a"
	},
	{
		"id": "78f111532f25",
		"ts": "2026-08-16T06:33:28.898Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2587075.63,
		"hash": "78f111532f25164de9f7c1a84df9f2f53d4ad7a00aead41ac14a6527ad821a0d"
	},
	{
		"id": "d732b6413eb7",
		"ts": "2026-08-16T06:33:29.097Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 278234.49,
		"hash": "d732b6413eb780d925f4441a7849df908be6a8c5df62dafb6ea035e627dafa66"
	},
	{
		"id": "2a478c9dd71c",
		"ts": "2026-08-16T06:33:29.286Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 895147.8,
		"hash": "2a478c9dd71cce32bce2da7f6d9e2bbef05ec1909a0e4aceafb6c65d0b303f9d"
	},
	{
		"id": "32db63533b11",
		"ts": "2026-08-16T06:33:29.467Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 157454.64,
		"hash": "32db63533b11d4acf74917c85672ec528a133c47d5fb4b24606a58f733d2848d"
	},
	{
		"id": "136ce22f96dd",
		"ts": "2026-08-16T06:33:29.653Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5448436.18,
		"hash": "136ce22f96dde39739669d856bb3d459fe26ae6abcbb3771895458ad8e4c4535"
	},
	{
		"id": "1bf72ade29c9",
		"ts": "2026-08-16T06:33:29.859Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9432249.6,
		"hash": "1bf72ade29c9fff8bd85398c194c9ae9cd1905ccb020db650d0117d3a157ac46"
	},
	{
		"id": "3d59a477a00b",
		"ts": "2026-08-16T06:33:30.052Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 357443.06,
		"hash": "3d59a477a00b83c66d7dc04e6a488d19d119109cba9d821624040e320e111664"
	},
	{
		"id": "4f4fb951f824",
		"ts": "2026-08-16T06:33:30.544Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 41153.67,
		"hash": "4f4fb951f8246e9da6738c40b6e40148407ef775af2b072ee5b089c92d53ddb5"
	},
	{
		"id": "6e9854cc851e",
		"ts": "2026-08-16T06:33:30.738Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 999305.22,
		"hash": "6e9854cc851e2515de240cbd58c851c349fc640250e774552447ab385e5c8e2a"
	},
	{
		"id": "3983827be083",
		"ts": "2026-08-16T06:33:30.932Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 4.68,
		"hash": "3983827be083983eed3c4f80bbb50157f9b6bdf0343a5eeeb45540d3a2caff56"
	},
	{
		"id": "7876ad579225",
		"ts": "2026-08-16T06:33:31.119Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 377318.4,
		"hash": "7876ad579225f4988bac8e242ce3aaa76886c410e248a1e4e85998d1823dc545"
	},
	{
		"id": "3e626d0317b4",
		"ts": "2026-08-16T05:23:46.682Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111385577.79,
		"hash": "3e626d0317b42d98a564eb0f6e35bdfc1a6501444d984316355a2fd03055523d"
	},
	{
		"id": "37a1dcb85723",
		"ts": "2026-08-16T05:23:47.191Z",
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
		"liquidityUsd": 17066000.21,
		"hash": "37a1dcb857237ea5a0ab577e8d7296a47fe1640c2920ad2d1a4b11404a2c979c"
	},
	{
		"id": "2a05ee02a7bf",
		"ts": "2026-08-16T05:23:47.484Z",
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
		"liquidityUsd": 804850.35,
		"hash": "2a05ee02a7bf604d0178607e7d6c55c7d5bcdde645fea8215a86396d883b908d"
	},
	{
		"id": "1bd0c32d64e6",
		"ts": "2026-08-16T05:23:47.758Z",
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
		"liquidityUsd": 26632437.87,
		"hash": "1bd0c32d64e61382e5fb82c1d470650dedcf7fe7f77390ce28731b926d102f47"
	},
	{
		"id": "c3367b03356e",
		"ts": "2026-08-16T05:23:48.036Z",
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
		"liquidityUsd": 4154428.41,
		"hash": "c3367b03356edc8bdf8b47862537de283da67628d26277303989d9cefb1873b6"
	},
	{
		"id": "623caa0ca28e",
		"ts": "2026-08-16T05:23:48.313Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 890706.6,
		"hash": "623caa0ca28e8d25d72d0698041ade99d777b90b5605b5f70217cb168e50ae4c"
	},
	{
		"id": "53ae93767a70",
		"ts": "2026-08-16T05:23:48.593Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26632437.87,
		"hash": "53ae93767a70ba7efc1c67f10a5b628c7415f4201a200bc9730203f5a4af0ffc"
	},
	{
		"id": "44c70bed895d",
		"ts": "2026-08-16T05:23:48.884Z",
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
		"liquidityUsd": 4035397.83,
		"hash": "44c70bed895db08852feaf8aadc8aae7bb366d17fc9ea4c2ec0f9b10b4dff32c"
	},
	{
		"id": "57c4ff81ac18",
		"ts": "2026-08-16T05:23:49.166Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2594058.01,
		"hash": "57c4ff81ac1899441df862a038b3d4d5178a38d39e6a0d3f6c93d2e5548dd566"
	},
	{
		"id": "342d7e5799c9",
		"ts": "2026-08-16T05:23:49.446Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 278406.95,
		"hash": "342d7e5799c9d7329b9aa7b2ea628c95fa34a5e13a4b50c62b941b5dae4d6f55"
	},
	{
		"id": "95a119995990",
		"ts": "2026-08-16T05:23:49.709Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 897729.85,
		"hash": "95a119995990e418cf00059527c81bca7681aed611eaa9209cad1be016c99404"
	},
	{
		"id": "ce4df6b296a5",
		"ts": "2026-08-16T05:23:49.973Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 130278.07,
		"hash": "ce4df6b296a5b368468e9aa970d28751d01177f82d730f7f99d64bb90a8d1a38"
	},
	{
		"id": "b8a17d8b588f",
		"ts": "2026-08-16T05:23:50.307Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 5450550.12,
		"hash": "b8a17d8b588f0f8adf7db94063b596eabcdac8b2717e2f2bd201f3bc9aaf1098"
	},
	{
		"id": "9790a8cfd42e",
		"ts": "2026-08-16T05:23:50.564Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 9435738.88,
		"hash": "9790a8cfd42ebe5253ece11b792e38977f81ca44c18ee933350836a273e8a2c3"
	},
	{
		"id": "37d1a5ea09a5",
		"ts": "2026-08-16T05:23:50.828Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 362396.68,
		"hash": "37d1a5ea09a55fd741cb1eee48e92e975af644ac80b0807617b9e58b4a8710f5"
	},
	{
		"id": "ad0ac4c42a8e",
		"ts": "2026-08-16T05:23:51.089Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 379284.8,
		"hash": "ad0ac4c42a8e3d549a411d56cc106660bfeec28e6d955deee00c21b693773ad8"
	},
	{
		"id": "81c6e925c6d1",
		"ts": "2026-08-16T05:23:51.361Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1001167.32,
		"hash": "81c6e925c6d1ab5d6b1adbdc1365125cb2563e9533764060aa10ebc0459eb442"
	},
	{
		"id": "13a86154053a",
		"ts": "2026-08-16T05:23:51.620Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 2182.12,
		"hash": "13a86154053a62d9ae6f7462e42d2f7b4d419d81c083a4163cdb50a143b707d2"
	},
	{
		"id": "3e116d7dc543",
		"ts": "2026-08-16T05:23:51.910Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 626599.98,
		"hash": "3e116d7dc5438161848e76aef51780c7fb503e289f59d9b0b80e563470ef78f0"
	},
	{
		"id": "5daaf1efedcb",
		"ts": "2026-08-16T04:31:12.423Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111376219.15,
		"hash": "5daaf1efedcb47c130c0090f50793fd9971730e0f6dcfb86c4c6555372235f00"
	},
	{
		"id": "9fa624439d5e",
		"ts": "2026-08-16T04:31:13.085Z",
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
		"liquidityUsd": 16561033.63,
		"hash": "9fa624439d5ef4a94cf99fe16975ef88fce8c714a27220a2174fe24fb5294004"
	},
	{
		"id": "acdebc6a66e0",
		"ts": "2026-08-16T04:31:13.535Z",
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
		"liquidityUsd": 804850.35,
		"hash": "acdebc6a66e07f76ce280b52bf9f4d3f4a9f78783e111a8d84eafe8add8269c8"
	},
	{
		"id": "91b3d3b64adf",
		"ts": "2026-08-16T04:31:13.985Z",
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
		"liquidityUsd": 26675414.95,
		"hash": "91b3d3b64adf453c71988d73c0c82dde7028e03580f27af795ce1dfbef328ed1"
	},
	{
		"id": "ad8b7490185d",
		"ts": "2026-08-16T04:31:14.226Z",
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
		"liquidityUsd": 4154428.41,
		"hash": "ad8b7490185d9fa3ea70aa08530291bfe5960bc54fcebeaf2878c79849150180"
	},
	{
		"id": "9c1d34dfc489",
		"ts": "2026-08-16T04:31:14.461Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 891595.58,
		"hash": "9c1d34dfc4892186b47e7a410b17b9758c859ce0870092a302b912619b689d8b"
	},
	{
		"id": "f6690c696692",
		"ts": "2026-08-16T04:31:14.699Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26675414.95,
		"hash": "f6690c6966921677d4aeb24c8e208c289436d316b4f2f72982d6d59ed19f8dfc"
	},
	{
		"id": "0b97b708dd83",
		"ts": "2026-08-16T04:31:15.199Z",
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
		"liquidityUsd": 4038064.37,
		"hash": "0b97b708dd837ba54e5b7374143c2196d663c7eca8b166fe777781a0553696ec"
	},
	{
		"id": "f60e28d83c4c",
		"ts": "2026-08-16T04:31:15.438Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2593765.53,
		"hash": "f60e28d83c4cc1bfd518fdf83263057f8c7687f096f2c1a35bbb98f06283d517"
	},
	{
		"id": "8f34cc533a07",
		"ts": "2026-08-16T04:31:15.673Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 278679.16,
		"hash": "8f34cc533a07dea7bf3ac5e17536419e6552f9bfe6fa49fb77d47fcf4a2a718e"
	},
	{
		"id": "56bfb985b3bb",
		"ts": "2026-08-16T04:31:15.895Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 917301.96,
		"hash": "56bfb985b3bb2c5c13fba8dd5f2e6bd3419c6a081a0458369d4737fa5f2858ad"
	},
	{
		"id": "f4b5dee8d455",
		"ts": "2026-08-16T04:31:16.117Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 106054.47,
		"hash": "f4b5dee8d4555569cdf76710eb258bb847ef3c9a396fef942e2354a1e36f22a5"
	},
	{
		"id": "3746416a8ad7",
		"ts": "2026-08-16T04:31:16.341Z",
		"symbol": "DINO",
		"token": "0xb200000000000000000000245F3EEc9CB5522F01",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"low_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "3746416a8ad778195a05e2a6d9f7480bba17086961a2f17ad2e029a4b117e039"
	},
	{
		"id": "0605facb2e77",
		"ts": "2026-08-16T04:31:16.562Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5440263.17,
		"hash": "0605facb2e770c48af80d66e3f69c62ed97b10145ab8cf2089d97b5eec1c225c"
	},
	{
		"id": "581d3aceb885",
		"ts": "2026-08-16T04:31:16.785Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9466347.85,
		"hash": "581d3aceb885c84a492914cf19b335e00cef5586c1a9be6ef03dca5d65dcb6a3"
	},
	{
		"id": "27f156c63a25",
		"ts": "2026-08-16T04:31:17.009Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 364335.25,
		"hash": "27f156c63a25478ced1634613e048f6a0152fe481e75fadff4c5952bb6ef2f68"
	},
	{
		"id": "c6339bba8e44",
		"ts": "2026-08-16T04:31:17.232Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 380670.75,
		"hash": "c6339bba8e440f879e5ea2d68069b9c0d7d5b8bec692a945b7af8ffe761e9d4e"
	},
	{
		"id": "2c4b3b2ea114",
		"ts": "2026-08-16T04:31:17.455Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 626406.01,
		"hash": "2c4b3b2ea1146e734d17a9c9aab7962723cff2d64326a42fe8d3893d272c7f0c"
	},
	{
		"id": "251f2c9d52cc",
		"ts": "2026-08-16T04:31:17.677Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 59,
		"hash": "251f2c9d52cc514d6039600e0e0995ee07cde51fa4b47980d8ef20fceb0e0095"
	},
	{
		"id": "e20535eedd81",
		"ts": "2026-08-16T03:46:41.007Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111366372.61,
		"hash": "e20535eedd81e587a2c6311f11329a51b168a5beaf8331aa975c3df65639a0cd"
	},
	{
		"id": "f76eb67a5d0c",
		"ts": "2026-08-16T03:46:41.641Z",
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
		"liquidityUsd": 17078500.77,
		"hash": "f76eb67a5d0cd85e24ebf534d00f86c9fa8725787cafbdff9a1c76bbe35e18b7"
	},
	{
		"id": "32b414cab4eb",
		"ts": "2026-08-16T03:46:41.871Z",
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
		"liquidityUsd": 804850.35,
		"hash": "32b414cab4eb135465912e29a16e29e71443f276764abf6c65eb1bbe0c0df4ce"
	},
	{
		"id": "788614401041",
		"ts": "2026-08-16T03:46:42.305Z",
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
		"liquidityUsd": 26560333.04,
		"hash": "7886144010412e35e11c9601a6a54ab1272f16125ab01f86e9a18d280692d4af"
	},
	{
		"id": "6921991cd061",
		"ts": "2026-08-16T03:46:42.753Z",
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
		"liquidityUsd": 4154841.88,
		"hash": "6921991cd06128897153d37371950294a567866bff050139de9d8bf6044dfecb"
	},
	{
		"id": "3ca3cece9b61",
		"ts": "2026-08-16T03:46:42.988Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 890331.1,
		"hash": "3ca3cece9b6186af6f7cc098f13b8c4f0f916202adad7f659679f35f662d542f"
	},
	{
		"id": "99a589ce9de7",
		"ts": "2026-08-16T03:46:43.211Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26560333.04,
		"hash": "99a589ce9de7043717182974aad7668d9af275c95de13a54c7e32f4749eb4c22"
	},
	{
		"id": "b09433117e57",
		"ts": "2026-08-16T03:46:43.445Z",
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
		"liquidityUsd": 4037763.66,
		"hash": "b09433117e5778261c311bd8961325ed329542f46ac51e2615ae83f16e48ab90"
	},
	{
		"id": "28cca69ee87f",
		"ts": "2026-08-16T03:46:43.681Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2597255.03,
		"hash": "28cca69ee87f2a44155fffb77f3d724558aec586e28e93c12b626beef49728bf"
	},
	{
		"id": "a0d604c8ec3e",
		"ts": "2026-08-16T03:46:43.914Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 279018.04,
		"hash": "a0d604c8ec3ecb712ab9b20cfe972a33622b4395c4cffc84de34b16c70865187"
	},
	{
		"id": "7e02f51fd161",
		"ts": "2026-08-16T03:46:44.127Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 922225.3,
		"hash": "7e02f51fd1613bdac1f6f9d96796248c1de72b29700cba139947d39c9d668070"
	},
	{
		"id": "761a7de65120",
		"ts": "2026-08-16T03:46:44.344Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 111349.75,
		"hash": "761a7de65120244b9174510e12dc7302c78ebf2cd0151d4446b8cab11dc8129b"
	},
	{
		"id": "f89e0985525e",
		"ts": "2026-08-16T03:46:44.566Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5140844.92,
		"hash": "f89e0985525e68711b26333fb6b65e359c32a2454c0b664987d09658df2992e8"
	},
	{
		"id": "5cad8d917d78",
		"ts": "2026-08-16T03:46:44.780Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9480252.14,
		"hash": "5cad8d917d783f4b8243fca4c7a4c6b6171673f66e51f87ba986594e09ef7391"
	},
	{
		"id": "1a9e26553ea7",
		"ts": "2026-08-16T03:46:44.992Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 381982.49,
		"hash": "1a9e26553ea7ef5464381940ca9ff2e30dce01ff332cf59584e5d739d69ad246"
	},
	{
		"id": "ac9d0960334f",
		"ts": "2026-08-16T03:46:45.211Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 628954.3,
		"hash": "ac9d0960334f65a6cc4cf8cc2e523f951d5c13d60a49a91f99f7721273bb3ff1"
	},
	{
		"id": "e4b2eadaf053",
		"ts": "2026-08-16T03:46:45.433Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 631253.38,
		"hash": "e4b2eadaf053eb582f36246e9f43e0196fae950621276f04d8a8a95563b7f72a"
	},
	{
		"id": "129897b60882",
		"ts": "2026-08-16T03:46:45.649Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 985014.57,
		"hash": "129897b60882ae220a40ec2db511f72393959c22f7712a73ae187a96718a30ed"
	},
	{
		"id": "71e81c16bb9a",
		"ts": "2026-08-16T03:46:45.861Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 59,
		"hash": "71e81c16bb9acb3ca4727c91de38c0e1ad08cd92ace52a35cba770edcebd36dc"
	},
	{
		"id": "e8f24d908243",
		"ts": "2026-08-16T02:56:20.415Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111356474.09,
		"hash": "e8f24d908243d199c0233e8b4000cc79c827b1d520d84dab37e8191617773a38"
	},
	{
		"id": "7b168b2781ca",
		"ts": "2026-08-16T02:56:20.931Z",
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
		"liquidityUsd": 17523807.93,
		"hash": "7b168b2781ca69253397a273c5ffa1f694e4dcd08d889a6473a255640119b0c9"
	},
	{
		"id": "3b9ac6fca8a3",
		"ts": "2026-08-16T02:56:21.213Z",
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
		"liquidityUsd": 804850.35,
		"hash": "3b9ac6fca8a3d7481414763153975a4e26595779c832bc2bd88c2a9a11bdc73a"
	},
	{
		"id": "d1ced3747463",
		"ts": "2026-08-16T02:56:21.507Z",
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
		"liquidityUsd": 26560475.45,
		"hash": "d1ced3747463c3124fb7ee586e9c82007a013a9770e89ac28b367228fd6f0cdc"
	},
	{
		"id": "3d81409ff7ba",
		"ts": "2026-08-16T02:56:22.015Z",
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
		"liquidityUsd": 4154841.88,
		"hash": "3d81409ff7ba6bb7aab75f4061baedd583bc6ed135b36cabf1769c03235af43e"
	},
	{
		"id": "c3bfad38b107",
		"ts": "2026-08-16T02:56:22.287Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 890331.1,
		"hash": "c3bfad38b107b32a12d4a9ea93931163d5202b45ae8ed49552f73ba9b5ecbdc1"
	},
	{
		"id": "aab8b8193f1b",
		"ts": "2026-08-16T02:56:22.597Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26560475.45,
		"hash": "aab8b8193f1b9157135646d35d93327190770ccb00c849002a34e6003502a5bd"
	},
	{
		"id": "1aa5018b67ed",
		"ts": "2026-08-16T02:56:22.890Z",
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
		"liquidityUsd": 4037313.49,
		"hash": "1aa5018b67ed7f9ca49e9cea1fa0395725b2299b23067e769b4f17c0d9b8fe76"
	},
	{
		"id": "fb80955b47b1",
		"ts": "2026-08-16T02:56:23.193Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2582919.9,
		"hash": "fb80955b47b1ad26f1fd69b8be129121fabdc4a414993c885cd21e807d39e9f5"
	},
	{
		"id": "13e154c3caef",
		"ts": "2026-08-16T02:56:23.579Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 278223.29,
		"hash": "13e154c3caef14329c572403a79dae6b975399950748f0b70ceadc1268770869"
	},
	{
		"id": "7627f1d60d83",
		"ts": "2026-08-16T02:56:23.844Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 912678.35,
		"hash": "7627f1d60d83f71d675bb474f064600413d0cb89bf510d42db5d6b41e1e70583"
	},
	{
		"id": "8ff8aec3a693",
		"ts": "2026-08-16T02:56:24.101Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 112932.51,
		"hash": "8ff8aec3a6933bb922a40abdc48a2731ddeec6f193bd552e6da4f3c364abe09a"
	},
	{
		"id": "ab77a77570bf",
		"ts": "2026-08-16T02:56:24.365Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5046763.28,
		"hash": "ab77a77570bf26a611a401918db8084e10ad6afe467c088c79e39d69e2fab067"
	},
	{
		"id": "a0b7f2740a17",
		"ts": "2026-08-16T02:56:24.621Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9485077.5,
		"hash": "a0b7f2740a17a94a6780f05a9cac8dad6251696a651479077a4346a2112417a4"
	},
	{
		"id": "4a27a85c8d32",
		"ts": "2026-08-16T02:56:24.887Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 384358.32,
		"hash": "4a27a85c8d325a19927d42c164a5ef22d95970b8504138ba2f4c33b7a203866a"
	},
	{
		"id": "8e51bdf69e2c",
		"ts": "2026-08-16T02:56:25.143Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 631181.82,
		"hash": "8e51bdf69e2c2b4d99220d1d61d87507cd5200b999b5a68c94895324527cac6d"
	},
	{
		"id": "e1187005e3fa",
		"ts": "2026-08-16T02:56:25.408Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 632285.63,
		"hash": "e1187005e3fa59b9a069c2f13e39cdea44bc1d8f1027c7afc84f55e55e6f1fb6"
	},
	{
		"id": "4034f4aa19b6",
		"ts": "2026-08-16T02:56:25.663Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"low_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "4034f4aa19b6f571122e21e380baea56665d1998a118e5df428fe53a3fecb216"
	},
	{
		"id": "e310ac0a3de8",
		"ts": "2026-08-16T02:56:25.927Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 368080.42,
		"hash": "e310ac0a3de850fa105cc6f8d6313f78557fbe38a938f3448171dc824d0e96b1"
	},
	{
		"id": "111b7e6af9b1",
		"ts": "2026-08-16T01:04:17.017Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111394678.73,
		"hash": "111b7e6af9b18562b4048f4d84849225e2cd369cbe84934b8100eb75ac635065"
	},
	{
		"id": "16e11557083e",
		"ts": "2026-08-16T01:04:17.275Z",
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
		"liquidityUsd": 17078330.41,
		"hash": "16e11557083ee75bd6d3748bd299321ea0f601d1d7599244b0da69b93a1d8fbf"
	},
	{
		"id": "f26204d5681f",
		"ts": "2026-08-16T01:04:17.545Z",
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
		"liquidityUsd": 808906.43,
		"hash": "f26204d5681f348e84d18b7d6f565be985387a57b83ac4b933cdac9f3c628cf2"
	},
	{
		"id": "7cf542c1a3f8",
		"ts": "2026-08-16T01:04:17.872Z",
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
		"liquidityUsd": 26583993.66,
		"hash": "7cf542c1a3f8743a9a2db52a6d8e0800f841b2886b5b9840ef802dac2ca0b6e7"
	},
	{
		"id": "c816c624efa2",
		"ts": "2026-08-16T01:04:18.113Z",
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
		"liquidityUsd": 4161029.92,
		"hash": "c816c624efa2050acd64275a63ace5b5bcea01587e18c68a5d776d374c34f79c"
	},
	{
		"id": "1008a621e50e",
		"ts": "2026-08-16T01:04:18.373Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 892033.24,
		"hash": "1008a621e50ee376491847dce70e13e94efbc5b381c57779aff94d8daca39d63"
	},
	{
		"id": "6f48a170e09a",
		"ts": "2026-08-16T01:04:18.608Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26583993.66,
		"hash": "6f48a170e09a9a2224d3d297dd8ed0aeefb39b9d04cffa070ef480e062e81257"
	},
	{
		"id": "6e8e2c9c4ae7",
		"ts": "2026-08-16T01:04:18.873Z",
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
		"liquidityUsd": 4041776.08,
		"hash": "6e8e2c9c4ae7cf1b427be917e557ccd0d12893b10e8ec8d10f5badb8f161180f"
	},
	{
		"id": "bbdabc017fc3",
		"ts": "2026-08-16T01:04:19.107Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2567531.68,
		"hash": "bbdabc017fc35fa31325ac4cacc274c91ac1211dabd8284cdd273f14d4608cf3"
	},
	{
		"id": "a6fed562e346",
		"ts": "2026-08-16T01:04:19.346Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 5209816.02,
		"hash": "a6fed562e346dab2f9b523844321649b34fd6f23119a49e99c1692bb07459019"
	},
	{
		"id": "6c7a2a713c6d",
		"ts": "2026-08-16T01:04:19.563Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 887362.44,
		"hash": "6c7a2a713c6dbc6455a042e5d6286cee6a43a277d544627d751d0cef97cd7eea"
	},
	{
		"id": "6f6215c05e04",
		"ts": "2026-08-16T01:04:19.783Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 106041.7,
		"hash": "6f6215c05e045016ace852a9c95bdc416c808e1b3d2b145372398868da11b46d"
	},
	{
		"id": "7505e232e585",
		"ts": "2026-08-16T01:04:20.005Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 278159.12,
		"hash": "7505e232e585d0e51c9b1869c200eea2aaf7b706a211b0c1bd029e9d3bcdb515"
	},
	{
		"id": "720d7208f747",
		"ts": "2026-08-16T01:04:20.225Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 9462032.02,
		"hash": "720d7208f747ddee4fe98ae5eb76eeccc4a3bd0d02a0f3b4ae3b4cb587c01aab"
	},
	{
		"id": "3de13838461a",
		"ts": "2026-08-16T01:04:20.447Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 384260.95,
		"hash": "3de13838461a4b463ccf89c6d524bee9a5c04ef3cf2e8ec8865d964ccd7be6f4"
	},
	{
		"id": "08ec4a90636f",
		"ts": "2026-08-16T01:04:20.670Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"low_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "08ec4a90636f2d5b459356908fb3f287d20aa09a5adc99660f53727b5b1b97c7"
	},
	{
		"id": "f7ed7dda7876",
		"ts": "2026-08-16T01:04:20.888Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 640016.03,
		"hash": "f7ed7dda7876ff76e36fa74933d9a78c14c95de1f7d6a4e80993da42ee4652cc"
	},
	{
		"id": "d393f1cdb755",
		"ts": "2026-08-16T01:04:21.108Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 628973.12,
		"hash": "d393f1cdb7559da5081ec5546612fb8d3ffeac14dd7b1b802ea3f6085e47ce7a"
	},
	{
		"id": "a9e9fb38889b",
		"ts": "2026-08-16T01:04:21.329Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 365280.01,
		"hash": "a9e9fb38889be8c6fd082fce5e9ec09d01717e322c2ff6dbc4c59321c9682229"
	},
	{
		"id": "3842a661d4b0",
		"ts": "2026-08-15T23:16:25.180Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111393569.59,
		"hash": "3842a661d4b09f124fc697f689bef79aaa216a2a9205177e72ee39f2f89594bc"
	},
	{
		"id": "33d74adfd54e",
		"ts": "2026-08-15T23:16:25.439Z",
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
		"liquidityUsd": 18223298.53,
		"hash": "33d74adfd54e701a876e04e7f088ac1daab992f777e8b83ecb94512213e4e70a"
	},
	{
		"id": "27d48cd401b6",
		"ts": "2026-08-15T23:16:25.669Z",
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
		"liquidityUsd": 813182.84,
		"hash": "27d48cd401b691506be8ce5544e2685c1156949f8f645e50cb8392b801b4bb23"
	},
	{
		"id": "4b5b9cd27994",
		"ts": "2026-08-15T23:16:25.912Z",
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
		"liquidityUsd": 26624996.96,
		"hash": "4b5b9cd2799450415335848133e4cbb9a9d937cc36e1e8cca37a8afc3b0da566"
	},
	{
		"id": "5bc30de8577a",
		"ts": "2026-08-15T23:16:26.151Z",
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
		"liquidityUsd": 4168311.94,
		"hash": "5bc30de8577aa3690c91c4dcaedd66f0d39129791b464a3f595b7f1bd7fbea8f"
	},
	{
		"id": "317251b30bef",
		"ts": "2026-08-15T23:16:26.412Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 891957.92,
		"hash": "317251b30bef018f9c1cdeccdb0f4b7b461caf1ca0bcd9ac8cdf8c677d1126ef"
	},
	{
		"id": "2ee4bc6e9c51",
		"ts": "2026-08-15T23:16:26.740Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26624996.96,
		"hash": "2ee4bc6e9c51c1a6557dbf589c9a1f9e53f394230643cf65e9bdd866ce971f85"
	},
	{
		"id": "a2a6f6f51abb",
		"ts": "2026-08-15T23:16:27.010Z",
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
		"liquidityUsd": 4044493.34,
		"hash": "a2a6f6f51abb54c1219df53629c497e450f75ebe8c90957a7600253d10d67811"
	},
	{
		"id": "3874df25c710",
		"ts": "2026-08-15T23:16:27.480Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2557770.44,
		"hash": "3874df25c7109a64d96ca60a81e2eaf8be8b6841bed74fcede9e5dbca30ccf4a"
	},
	{
		"id": "033e49fad481",
		"ts": "2026-08-15T23:16:27.711Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 5127859.37,
		"hash": "033e49fad481870012c86933cfc96baf75c61ab74eafb06b2890fc06e5958267"
	}
]
