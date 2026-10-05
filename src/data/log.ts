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
	"updatedAt": "2026-10-05T23:40:24.820Z",
	"tokensScored": 19498,
	"verdictsIssued": 19498,
	"safe": 16599,
	"risky": 1399,
	"likelyRug": 1500,
	"ticks": 1106
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "44f2efa0fb76",
		"ts": "2026-10-05T23:40:20.500Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 162919874.46,
		"hash": "44f2efa0fb76116a5d4aa4ccd642d752b13580cc7e1a0cbe49a236ae6c03a673"
	},
	{
		"id": "75054d65468e",
		"ts": "2026-10-05T23:40:20.758Z",
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
		"liquidityUsd": 16466814.1,
		"hash": "75054d65468e310044499e401a45ebf1db542a027e5a91855f72fd3e4ec6ac2f"
	},
	{
		"id": "137daa5af1e3",
		"ts": "2026-10-05T23:40:21.006Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 863245.36,
		"hash": "137daa5af1e355a8ee942c34e1353e6cbea8e41290e7cb19f83bae35ba434e3f"
	},
	{
		"id": "3997daae6d8e",
		"ts": "2026-10-05T23:40:21.253Z",
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
		"liquidityUsd": 44759668.46,
		"hash": "3997daae6d8eec9421b86c7194065b395d424b3b097e7893ad44dbaaf6bff2d6"
	},
	{
		"id": "a3f638a630db",
		"ts": "2026-10-05T23:40:21.496Z",
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
		"liquidityUsd": 4785018.21,
		"hash": "a3f638a630db9376d55c562b9eaf9c799fa0c322070ab23d762e73c5559bbe76"
	},
	{
		"id": "e6f54ed56e76",
		"ts": "2026-10-05T23:40:21.746Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1331369.42,
		"hash": "e6f54ed56e76436b70260f371ff010fe9148641d1a3897f4e8601ffa85c38651"
	},
	{
		"id": "9e4a0e43f081",
		"ts": "2026-10-05T23:40:21.995Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 44759668.46,
		"hash": "9e4a0e43f0810928640e13a1bcf87be26f322b2b95212b777a4fd948e8331d19"
	},
	{
		"id": "ecd698f86381",
		"ts": "2026-10-05T23:40:22.253Z",
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
		"liquidityUsd": 561657.5,
		"hash": "ecd698f8638103d6ef465a87749e8acc1e8812cdb2fa20f5c36d3a299e6b3fcf"
	},
	{
		"id": "64844400df78",
		"ts": "2026-10-05T23:40:22.508Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1811150.04,
		"hash": "64844400df787bb7a82264772e0ad0a00827f08d754997bca7dc34ebeb276d3c"
	},
	{
		"id": "ad821044fd2c",
		"ts": "2026-10-05T23:40:22.758Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1260596.69,
		"hash": "ad821044fd2c6b5a9c347384e44446f13963120147c480f7c751bdf38d5db5f2"
	},
	{
		"id": "3de49f3ce5a3",
		"ts": "2026-10-05T23:40:22.981Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 280441.49,
		"hash": "3de49f3ce5a37d067838b3d49201f6b58d87e22932f2aebd0cfaf5ec4efa78d8"
	},
	{
		"id": "ad7dafac84cf",
		"ts": "2026-10-05T23:40:23.207Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1699559.95,
		"hash": "ad7dafac84cf63fad750e70f9c4a6ec618a595b78f07326288220302ceee51b2"
	},
	{
		"id": "e8d3b3c2234f",
		"ts": "2026-10-05T23:40:23.438Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1543060.48,
		"hash": "e8d3b3c2234fdf8b6df55d233c7e0aa5540cd06f3a189f56e6879557b02d820e"
	},
	{
		"id": "5fc9fc47f36f",
		"ts": "2026-10-05T23:40:23.671Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3844506.61,
		"hash": "5fc9fc47f36fd86424bb44326a9cbb54e706da6facc413361e1a93d467526f88"
	},
	{
		"id": "1e94710815e4",
		"ts": "2026-10-05T23:40:23.898Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4186179.58,
		"hash": "1e94710815e4254b4c769b8464a1e996d79f1254f8522642d997f022f3db322d"
	},
	{
		"id": "92575a1eb330",
		"ts": "2026-10-05T23:40:24.124Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 19057016.76,
		"hash": "92575a1eb330b77f77094faddcaa6b94d0dbddb1666cbdcfaae04d461abf63c6"
	},
	{
		"id": "ee17a5c2dd45",
		"ts": "2026-10-05T23:40:24.359Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 184829.19,
		"hash": "ee17a5c2dd45abfd969a24c63e675878c87672ae0574137156fbecf40dac862e"
	},
	{
		"id": "7d5b6bec48b0",
		"ts": "2026-10-05T23:40:24.592Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1252167.1,
		"hash": "7d5b6bec48b0835a43c46e3e8e023fc407488654de4acad0298d1a05bf81fc05"
	},
	{
		"id": "d4bd2e7eac71",
		"ts": "2026-10-05T23:40:24.819Z",
		"symbol": "ICP",
		"token": "0x00f3C42833C3170159af4E92dbb451Fb3F708917",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 745008.07,
		"hash": "d4bd2e7eac71925756e3771cecb668fc8414ccad772ddb9229908f61a423a8a9"
	},
	{
		"id": "3eb332ddedd9",
		"ts": "2026-10-05T17:48:15.947Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 162426306.78,
		"hash": "3eb332ddedd972c8866d38fe52d6d325e64d28afb218fc45cdb656a01e60baaf"
	},
	{
		"id": "2efc3af001af",
		"ts": "2026-10-05T17:48:16.231Z",
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
		"liquidityUsd": 16931482.69,
		"hash": "2efc3af001af077fb2ab5c5159eab08ada329fd89514c0f2201168ced7456bb8"
	},
	{
		"id": "d23034fe7968",
		"ts": "2026-10-05T17:48:16.512Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 860777.61,
		"hash": "d23034fe7968f5367900209f8ef10e3a55fa11529587aafe0b661b0e1083ecfb"
	},
	{
		"id": "4b0bdc649beb",
		"ts": "2026-10-05T17:48:16.776Z",
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
		"liquidityUsd": 44128054.8,
		"hash": "4b0bdc649beb98c4f2aea5542d3f959a4cdccb6df6dd21efd290b60dc470f81d"
	},
	{
		"id": "b3b83468471d",
		"ts": "2026-10-05T17:48:17.162Z",
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
		"liquidityUsd": 4725286.14,
		"hash": "b3b83468471d19c4e32c5c357f884f33393376e3f5faeed75a6784df980beda1"
	},
	{
		"id": "d559038fee4e",
		"ts": "2026-10-05T17:48:17.654Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1316169.22,
		"hash": "d559038fee4e5815dc65ab403bb529e28a91ab22cbd6465dbf9a4bb01ef3821d"
	},
	{
		"id": "649515ac5d95",
		"ts": "2026-10-05T17:48:17.943Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 44128054.8,
		"hash": "649515ac5d9511c7fd4c76ec2f41391c26d3bb29ad0712e0f0c8329e8d8b493f"
	},
	{
		"id": "5afe528ee9bc",
		"ts": "2026-10-05T17:48:18.224Z",
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
		"liquidityUsd": 522987.48,
		"hash": "5afe528ee9bcee8325aba3921703b4e9ed160def6f4d31f0f789ac4105559f4a"
	},
	{
		"id": "1163d5300c0f",
		"ts": "2026-10-05T17:48:18.494Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1828002.24,
		"hash": "1163d5300c0f559289c6310ab93acdf8f976fb68dca7229278620d2c2137d417"
	},
	{
		"id": "f5b256d801ba",
		"ts": "2026-10-05T17:48:18.989Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 563636.5,
		"hash": "f5b256d801ba87ed7c47c4fe0eaf4bb9461db04ce71bee2a4ac43fb34ef55469"
	},
	{
		"id": "c054813f55d8",
		"ts": "2026-10-05T17:48:19.232Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1708731.14,
		"hash": "c054813f55d862d578f60c7cc122eb269f79cdecf38751d6e3127284bc83c909"
	},
	{
		"id": "b120180806e6",
		"ts": "2026-10-05T17:48:19.484Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 296626.8,
		"hash": "b120180806e6fb98e426cf7683c542a49b6392754a05c2b6627280fbab9fd425"
	},
	{
		"id": "9212a1eff4c4",
		"ts": "2026-10-05T17:48:19.722Z",
		"symbol": "SM",
		"token": "0x4F81f6aE802deC6c8E1846ad853019A5458186D1",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 411282.3,
		"hash": "9212a1eff4c4e333b721068ac14813c163c6dc22e5b48efb10fad9a5282ef8b4"
	},
	{
		"id": "e242744c3c9f",
		"ts": "2026-10-05T17:48:19.984Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1502151.86,
		"hash": "e242744c3c9f26e9a2d787f16850c831b64fe9b079a6f15e2fee2ba366f6038d"
	},
	{
		"id": "a27d5bad40fe",
		"ts": "2026-10-05T17:48:20.225Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1168289.68,
		"hash": "a27d5bad40fedf72b07c9213ebc5383c064368584cf1ba85af2c91e89e66cfe4"
	},
	{
		"id": "db98b9a5c13f",
		"ts": "2026-10-05T17:48:20.497Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 3756910.69,
		"hash": "db98b9a5c13f5c57fe6f8c5d489d7af5a64e9cf1ce77601f55e3c03e28df0734"
	},
	{
		"id": "6a3c241ef6b9",
		"ts": "2026-10-05T17:48:20.752Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18651832.46,
		"hash": "6a3c241ef6b9883338a30184df08b77a01686adb13fdf64d13fcb04a364227f7"
	},
	{
		"id": "6e230b863b8c",
		"ts": "2026-10-05T17:48:21.018Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1350015.62,
		"hash": "6e230b863b8c6250729795db1fdd1c404c653444ce693fd71681089b1b341dec"
	},
	{
		"id": "414355bc047a",
		"ts": "2026-10-05T17:48:21.265Z",
		"symbol": "ICP",
		"token": "0x00f3C42833C3170159af4E92dbb451Fb3F708917",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 735504.66,
		"hash": "414355bc047a97c15f5d7d4035420c7f2b54449ad64b9dfbea1f174e8f5ae04d"
	},
	{
		"id": "0b8584689641",
		"ts": "2026-10-05T08:13:43.984Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 164264257.49,
		"hash": "0b858468964131016f55f200d71364671700cb20fd4b7d6baf9718e62669e368"
	},
	{
		"id": "20e813337bf0",
		"ts": "2026-10-05T08:13:44.467Z",
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
		"liquidityUsd": 16818683.01,
		"hash": "20e813337bf0a68fee4a2f724376806ddcfbbb28a157ab5eb9dbf14214d52c28"
	},
	{
		"id": "cbb3c68d8e08",
		"ts": "2026-10-05T08:13:44.703Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 872109.99,
		"hash": "cbb3c68d8e08b26770ee06a9ba5ac1dc93eab6d07a221a170a2d0850fb607dda"
	},
	{
		"id": "243e33f914b6",
		"ts": "2026-10-05T08:13:44.938Z",
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
		"liquidityUsd": 44054904.22,
		"hash": "243e33f914b6b144e27588a2d6f126a169216089fd495fe81c8b3baf0571b30f"
	},
	{
		"id": "22940f3916c2",
		"ts": "2026-10-05T08:13:45.193Z",
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
		"liquidityUsd": 4831247.53,
		"hash": "22940f3916c2df5b28037393d8158b00becaee131629b0442301d42ff2004896"
	},
	{
		"id": "92091a0a745b",
		"ts": "2026-10-05T08:13:45.430Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1337071.1,
		"hash": "92091a0a745bb2f84e284adc4761367f20f5cf66d785406b8fea76ee9bddeed5"
	},
	{
		"id": "d5b5b5f8b48b",
		"ts": "2026-10-05T08:13:45.685Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 44054910.04,
		"hash": "d5b5b5f8b48b1922c1d613f926d1815aa8e3bba7ceaa1716c913cb63e2878671"
	},
	{
		"id": "4697b6ff9402",
		"ts": "2026-10-05T08:13:45.921Z",
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
		"liquidityUsd": 681754.26,
		"hash": "4697b6ff9402922cdc5302b8a2493bd186e065fa33fdce289af4422465b3eeaf"
	},
	{
		"id": "e7decc9d6234",
		"ts": "2026-10-05T08:13:46.171Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1877249.63,
		"hash": "e7decc9d62348a8a607baf16435084e3bbe665f7dc7e2201374d2d7bfaf388de"
	},
	{
		"id": "c2dae6b84989",
		"ts": "2026-10-05T08:13:46.612Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 551709.35,
		"hash": "c2dae6b8498908ffe0375135d13572472a568bca786b9ef2dd797300516bed31"
	},
	{
		"id": "2f76ff2d7d22",
		"ts": "2026-10-05T08:13:46.848Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1507290.19,
		"hash": "2f76ff2d7d2230177d201a373a74b4a8511eccc7ae54e36f5c9b8a612702e84f"
	},
	{
		"id": "ca1b20622741",
		"ts": "2026-10-05T08:13:47.065Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 378603.62,
		"hash": "ca1b206227417bcd61ef561e93c2e6fe8348a3901669b3ca28a396c9be76b9da"
	},
	{
		"id": "a79c0178967a",
		"ts": "2026-10-05T08:13:47.300Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 286108.99,
		"hash": "a79c0178967a41174dbad69bc1a1d0b27b630209c29b2af242f3bf419c86bc67"
	},
	{
		"id": "3d7d9d19588b",
		"ts": "2026-10-05T08:13:47.518Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3796508.06,
		"hash": "3d7d9d19588b9937bf74cb83da2fa9db3c19f45251e548ffe4c3667beb30efdd"
	},
	{
		"id": "e1496507ce51",
		"ts": "2026-10-05T08:13:47.754Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1706683.73,
		"hash": "e1496507ce513369ba08434d58e5ac1a77b3685658dccf2b5ac9999b0515086a"
	},
	{
		"id": "32023f174e06",
		"ts": "2026-10-05T08:13:47.986Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 447374.18,
		"hash": "32023f174e06d90d34b102df6d9b118d951635596f242bb5daa373e4024e3421"
	},
	{
		"id": "c204839bd3f6",
		"ts": "2026-10-05T08:13:48.223Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 19501468.65,
		"hash": "c204839bd3f6a7a032e1825d6d21f541993e6357802c16e9108c1f69271ec9eb"
	},
	{
		"id": "bf5fe617cb01",
		"ts": "2026-10-05T08:13:48.440Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 197621.55,
		"hash": "bf5fe617cb011dc769e9fb5bc88bbc9264e67d0a29d8a5c0967da4296f6d7097"
	},
	{
		"id": "abd0069bd37b",
		"ts": "2026-10-05T01:32:53.226Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 163741063.7,
		"hash": "abd0069bd37b43824feb67f0745453b8fe285c25b1bc0fe84021d66539d19245"
	},
	{
		"id": "23e04a242ff5",
		"ts": "2026-10-05T01:32:53.696Z",
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
		"liquidityUsd": 14551801.44,
		"hash": "23e04a242ff5cba28b885caa8bc5f2ed8742e836f8aa902b576c271650078416"
	},
	{
		"id": "ce1f1be8a641",
		"ts": "2026-10-05T01:32:53.956Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 874756.62,
		"hash": "ce1f1be8a6416c70d39a3224837732a43b64c7c1b088654e84449aed3625ff27"
	},
	{
		"id": "4c204beed36e",
		"ts": "2026-10-05T01:32:54.229Z",
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
		"liquidityUsd": 43859181.31,
		"hash": "4c204beed36ed99918ce54c71659eed0ef80226b04eacf6f5413e22a8b3804b6"
	},
	{
		"id": "9c1139f56853",
		"ts": "2026-10-05T01:32:54.478Z",
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
		"liquidityUsd": 4792900.17,
		"hash": "9c1139f5685314013acfece2e7cc9974f8abd134113ee92bb18f8f96d6b64d9f"
	},
	{
		"id": "8bc11758862c",
		"ts": "2026-10-05T01:32:54.733Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1337845,
		"hash": "8bc11758862c37aaa1dead4dfcdd43d6db2f4aa2e7eb0e1bb19684cc6fd6c2d8"
	},
	{
		"id": "00c167ccc6c9",
		"ts": "2026-10-05T01:32:54.971Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 43859181.31,
		"hash": "00c167ccc6c91e5d6d903f80dfa815f434584f7a65d10fb48b8b718eebf34795"
	},
	{
		"id": "cf9b543d3dcb",
		"ts": "2026-10-05T01:32:55.238Z",
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
		"liquidityUsd": 598836.47,
		"hash": "cf9b543d3dcb47eef40171d92def791ad945a9778b180263deeed0999d546faf"
	},
	{
		"id": "04c33c14f1f4",
		"ts": "2026-10-05T01:32:55.489Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1893247.12,
		"hash": "04c33c14f1f4909f8b01f0e029a5436d5c7425cf68816ad2ad015dd29a4d5e97"
	},
	{
		"id": "1beb66dc68db",
		"ts": "2026-10-05T01:32:55.729Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 560592.58,
		"hash": "1beb66dc68dbb3214b78997fa7b757b1a5be8bc8ca06142b0aeeec673e32170e"
	},
	{
		"id": "6c7d6381b497",
		"ts": "2026-10-05T01:32:55.956Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 276011.26,
		"hash": "6c7d6381b497c86aba3f0ba07303416b298d49fb3a71d58037d44915c5787bd3"
	},
	{
		"id": "6f84c947e1a8",
		"ts": "2026-10-05T01:32:56.188Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1507735.53,
		"hash": "6f84c947e1a82e5ed8992715a2b4a146a4fa06f4960af9cc453a47c2e33b5701"
	},
	{
		"id": "d3ba46ccf4bd",
		"ts": "2026-10-05T01:32:56.400Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 397705.25,
		"hash": "d3ba46ccf4bd0bbb5cc4f9aca3e30f8c58aa656777242caf2ecf577989252a1b"
	},
	{
		"id": "330582a9ea2d",
		"ts": "2026-10-05T01:32:56.638Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3748579.28,
		"hash": "330582a9ea2de240aa6a4a83e388401c4fb8f297ef0b545a9fc1a38fb80133ee"
	},
	{
		"id": "18e39b275aa3",
		"ts": "2026-10-05T01:32:56.859Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1699107.58,
		"hash": "18e39b275aa32f9d63a7e98456d898d239602b7666a6be45522664b65b780867"
	},
	{
		"id": "e12cf5449fb6",
		"ts": "2026-10-05T01:32:57.080Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 19384418.49,
		"hash": "e12cf5449fb6c926d628fb7dcf6a58311a90bdcd4c6af126efd11a42e7820ef9"
	},
	{
		"id": "07f8c8445cee",
		"ts": "2026-10-05T01:32:57.319Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6041865.17,
		"hash": "07f8c8445ceea0ca5f7bce433483e0047f2f2d099d45a9a344179021773d2705"
	},
	{
		"id": "1f855d8e1229",
		"ts": "2026-10-05T01:32:57.550Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 198038.96,
		"hash": "1f855d8e1229eca00792dd97af17e6f769321e189d761d0c1c108ba0b9872ef7"
	},
	{
		"id": "aa51332c0f45",
		"ts": "2026-10-05T01:32:57.790Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1058836.07,
		"hash": "aa51332c0f4525a0275e06752a0f9314ad164535f366c5615528832b573e5884"
	},
	{
		"id": "8f96da05bd13",
		"ts": "2026-10-04T22:17:12.903Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 163407968.09,
		"hash": "8f96da05bd13362fb3dc0160a37bc3e381442e790c1a5e3d2dcbd1df49b4bcec"
	},
	{
		"id": "6c20da90eb34",
		"ts": "2026-10-04T22:17:13.149Z",
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
		"liquidityUsd": 14442046.18,
		"hash": "6c20da90eb3454dc52410a1b2e04fb895553ef62d84267eea7f2cd43c2d75413"
	},
	{
		"id": "7c19cad606ea",
		"ts": "2026-10-04T22:17:13.376Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 866093.74,
		"hash": "7c19cad606eae242367bab3c238c087d8e9178ba0cf2b46ca02c05d75cfd3d07"
	},
	{
		"id": "e6807d431622",
		"ts": "2026-10-04T22:17:13.605Z",
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
		"liquidityUsd": 44177442.31,
		"hash": "e6807d4316221109a8c9d1ee1399127df78d9af3663f53fe9de5e19dacc01a8d"
	},
	{
		"id": "5ab9f649840e",
		"ts": "2026-10-04T22:17:13.839Z",
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
		"liquidityUsd": 4737872.54,
		"hash": "5ab9f649840e323e8daebb1917f0edff4829caf3cf896d271c7ee5f5fb62a56e"
	},
	{
		"id": "a9078f5a08e4",
		"ts": "2026-10-04T22:17:14.060Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1334231.63,
		"hash": "a9078f5a08e41945024de08bc559d96d2d087e79f819d53095cb61fe42c9280e"
	},
	{
		"id": "5eac1fac8a34",
		"ts": "2026-10-04T22:17:14.294Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 44151808.08,
		"hash": "5eac1fac8a34221b254922c44a1ee4f3f1b94d33f7c9d2aa082fb36a0ba09bc1"
	},
	{
		"id": "a4d0d62dda30",
		"ts": "2026-10-04T22:17:14.519Z",
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
		"liquidityUsd": 619492.04,
		"hash": "a4d0d62dda3014b6a11bbd5ff36982f8bc0c28c36a8add09c67a1f97ff3c7592"
	},
	{
		"id": "4e0c329c4e61",
		"ts": "2026-10-04T22:17:14.746Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1858621.92,
		"hash": "4e0c329c4e61375fa0f7ac03963bf98f6d8fb085034602f49ff5de5aeeb30552"
	},
	{
		"id": "bbe9b1ddde71",
		"ts": "2026-10-04T22:17:14.981Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 572732.29,
		"hash": "bbe9b1ddde711d94c9883c8fef838b5549c89c7df2f068238f1051971dcca338"
	},
	{
		"id": "30f409a2570d",
		"ts": "2026-10-04T22:17:15.191Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1517549.94,
		"hash": "30f409a2570d5caebefd22cca787c07467f1812429f8bca919af8ce03e136940"
	},
	{
		"id": "0c2458641b56",
		"ts": "2026-10-04T22:17:15.408Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 281050.05,
		"hash": "0c2458641b567fac9194b3de04b2825bbadc8f01cfbb2fb2bb204255fbcadca9"
	},
	{
		"id": "ee17fed33e07",
		"ts": "2026-10-04T22:17:15.614Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 401957.24,
		"hash": "ee17fed33e078bfb75d45990ae54a5ef905f47fa7571ba1b45cf60419dd76cac"
	},
	{
		"id": "1e282f89205e",
		"ts": "2026-10-04T22:17:15.824Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1681472.95,
		"hash": "1e282f89205e6515a132557a4a91379c5fef40512db051bc8099c87b2fa25230"
	},
	{
		"id": "7d3592e1df49",
		"ts": "2026-10-04T22:17:16.041Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3668289.3,
		"hash": "7d3592e1df496705bd5df2b56918ab23b9c70ebebfa5aeec706c3d04d166623d"
	},
	{
		"id": "224816636d18",
		"ts": "2026-10-04T22:17:16.247Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2644306.7,
		"hash": "224816636d1833158e23cda1c4431623fb3f155ecbd66accbc95a8cfe8992b43"
	},
	{
		"id": "dd66502aebc5",
		"ts": "2026-10-04T22:17:16.455Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6030806.84,
		"hash": "dd66502aebc5caa4758ed23450ce096967893d077322bdbedca08a1c13d64170"
	},
	{
		"id": "b1bc187929c0",
		"ts": "2026-10-04T22:17:16.671Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 499416.18,
		"hash": "b1bc187929c0adef75ca0d27df67711890e383a809a390ca92cbddf2948c3078"
	},
	{
		"id": "f7d6228eb847",
		"ts": "2026-10-04T22:17:16.880Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 491422.16,
		"hash": "f7d6228eb8473cb7b3d27d968726bd3b7fdf818683dc369ff19f7ccf36deb460"
	},
	{
		"id": "664f4115e8b2",
		"ts": "2026-10-04T18:59:46.714Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 163051746.4,
		"hash": "664f4115e8b2f7eefaabd5c4546986012ad334429ef38b64916c1adf1b05b002"
	},
	{
		"id": "36080f6e3480",
		"ts": "2026-10-04T18:59:46.948Z",
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
		"liquidityUsd": 17151595.08,
		"hash": "36080f6e3480fa121dd31aa156c2fe04d6c5ffc00558057aff7cc55290cc7d77"
	},
	{
		"id": "68ebf68e7c64",
		"ts": "2026-10-04T18:59:47.182Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 865351.27,
		"hash": "68ebf68e7c64ee43378c5baab47fdcc1932f33e2617aa23ce9e18db8536bbc4e"
	},
	{
		"id": "dceb666a62ab",
		"ts": "2026-10-04T18:59:47.417Z",
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
		"liquidityUsd": 44067173.47,
		"hash": "dceb666a62abc49abdec43773e018987dd8158b15e6ae1acc92b9f1f947f00cc"
	},
	{
		"id": "66f3ffa6e175",
		"ts": "2026-10-04T18:59:47.665Z",
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
		"liquidityUsd": 4764287.76,
		"hash": "66f3ffa6e175c80b8668774726735d5172fb3f491b938377ab28b4c898069902"
	},
	{
		"id": "abb3c0caff5b",
		"ts": "2026-10-04T18:59:47.920Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1319892.43,
		"hash": "abb3c0caff5bfa315b87b74f89d3778e7f02f4bc0a2fd69ab18502ebb14df07f"
	},
	{
		"id": "834579c731d1",
		"ts": "2026-10-04T18:59:48.157Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 44067173.47,
		"hash": "834579c731d1ba62e05800aec93b2888f0a10afa9fbada5e6fe8c29d6b6c61ec"
	},
	{
		"id": "683bcee00564",
		"ts": "2026-10-04T18:59:48.391Z",
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
		"liquidityUsd": 628836.53,
		"hash": "683bcee005641c8c87f6c58cbad48b7985c17535b63714be3445b374f3c6eea1"
	},
	{
		"id": "cf0dad663668",
		"ts": "2026-10-04T18:59:48.620Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1868520.6,
		"hash": "cf0dad6636688072fd3cb293b61d47cab95df959e8dad8e89b52042c128e8833"
	},
	{
		"id": "7f183f093738",
		"ts": "2026-10-04T18:59:48.853Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 599856.57,
		"hash": "7f183f093738d7cd45f24d0871ad3589c5429fdb6c3ab06916038c0d9bf60a7e"
	},
	{
		"id": "7d8ff78d2668",
		"ts": "2026-10-04T18:59:49.061Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 289740.91,
		"hash": "7d8ff78d2668a9f30b8d3fa26b242a136be80ecc2cc7f433a661edea20680d21"
	},
	{
		"id": "37bcca0b2b4e",
		"ts": "2026-10-04T18:59:49.272Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 393927.14,
		"hash": "37bcca0b2b4e2339f6029f05fc9d968065fb761a0c73e6f6d17362fa8a0d549b"
	},
	{
		"id": "da451b17df10",
		"ts": "2026-10-04T18:59:49.489Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3696746.27,
		"hash": "da451b17df1048c64b18ea1f7e8df604943f523074ecdfc3d0738434fda0d5c7"
	},
	{
		"id": "efd126284f77",
		"ts": "2026-10-04T18:59:49.706Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1488015.99,
		"hash": "efd126284f777ab594d326cc30a08a30b725a47306264fa1a4ac5b1f7d64eb8f"
	},
	{
		"id": "12922b103768",
		"ts": "2026-10-04T18:59:50.027Z",
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
		"liquidityUsd": 1025503.03,
		"hash": "12922b103768315b148e4fa673428b5e4ddc18e55662670a38fcdfdcaed7cd11"
	},
	{
		"id": "bc083f5f5243",
		"ts": "2026-10-04T18:59:50.241Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1661778.7,
		"hash": "bc083f5f52431d156891c224a7a222a0a76f84db6629e1ffa95390dfa8ccec80"
	},
	{
		"id": "2c41e7e0945e",
		"ts": "2026-10-04T18:59:50.449Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 500116.15,
		"hash": "2c41e7e0945ea0854d2fec5b999d8012776e3161c581e4a77bf8cfd79c80b64f"
	},
	{
		"id": "7c8f3e0a72d4",
		"ts": "2026-10-04T18:59:50.667Z",
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
		"liquidityUsd": 18980935.02,
		"hash": "7c8f3e0a72d43ff20f8954a3f43a1ef761f66772d46df24f435859599481ea60"
	},
	{
		"id": "25111e61c908",
		"ts": "2026-10-04T18:59:50.882Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2637341.77,
		"hash": "25111e61c9083da0c1d04318ade41ea8854f7a29a038ee2101b79e0810275c5c"
	},
	{
		"id": "562b1d1a8007",
		"ts": "2026-10-04T15:06:32.340Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 163166714.15,
		"hash": "562b1d1a8007f7a16afc0eaf5eb2f550bce104aba469a7f092de6e2ba5f33787"
	},
	{
		"id": "e1965c232ab4",
		"ts": "2026-10-04T15:06:32.562Z",
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
		"liquidityUsd": 15127629.27,
		"hash": "e1965c232ab4ed7964a1e37a8b2ebbd4220208fc2562e0366f5935f441e8ece0"
	},
	{
		"id": "f4922c038f3a",
		"ts": "2026-10-04T15:06:32.755Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 863271.04,
		"hash": "f4922c038f3a3c28e9ac1e28eae47b2f37d2a6532be0fc86453b0bc54a2832b1"
	},
	{
		"id": "dfdf431760e2",
		"ts": "2026-10-04T15:06:32.958Z",
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
		"liquidityUsd": 44108158.96,
		"hash": "dfdf431760e2209bd24c68064020b642310d5654a59cde6affa2d96afb11ab51"
	},
	{
		"id": "5349eaa1f5d0",
		"ts": "2026-10-04T15:06:33.152Z",
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
		"liquidityUsd": 4667878.91,
		"hash": "5349eaa1f5d0180ec58a26dd7d723fb65bc276f342d10ad6e70fd559a37fb4d9"
	},
	{
		"id": "8419a0972ca6",
		"ts": "2026-10-04T15:06:33.354Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1324856.22,
		"hash": "8419a0972ca6a7409585c3f6bbaa37e97859cd63aebd798840390c7e0c3ab041"
	},
	{
		"id": "ca0dca8656cf",
		"ts": "2026-10-04T15:06:33.542Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 44108158.96,
		"hash": "ca0dca8656cf146bdcddbec301b48866bd047082eccac9e294107116f2ffce8f"
	},
	{
		"id": "0e8d240627a5",
		"ts": "2026-10-04T15:06:33.746Z",
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
		"liquidityUsd": 2413733.09,
		"hash": "0e8d240627a5ef11d7522a810a6b6d507aeb4e844b6d76c28b215d792680357b"
	},
	{
		"id": "e7ad516ae251",
		"ts": "2026-10-04T15:06:33.938Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1861668.38,
		"hash": "e7ad516ae251a5abc9af825e4b80f457b49a9a6f0aea0ccd7b27e0f5bd1f12b7"
	},
	{
		"id": "d90afc687f19",
		"ts": "2026-10-04T15:06:34.136Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1486882.45,
		"hash": "d90afc687f19273db439e02e0cce352907a8f94c0394e499a22b14ef479d536c"
	},
	{
		"id": "93b5aeb616f3",
		"ts": "2026-10-04T15:06:34.315Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 572295.03,
		"hash": "93b5aeb616f36b1893bd46c096d557e339b0c60b62701e1bebdf211bc75d12af"
	},
	{
		"id": "4706c1f5ae7a",
		"ts": "2026-10-04T15:06:34.503Z",
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
		"liquidityUsd": 1158058.06,
		"hash": "4706c1f5ae7a9e4828b5ee98a0a0b4575742315cfac5b2e85c87049ae3db5ca4"
	},
	{
		"id": "f4b0c50bc467",
		"ts": "2026-10-04T15:06:34.682Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 290194.24,
		"hash": "f4b0c50bc4674514bfc9b85b15128bd88f593c513711ec42cd1417f3efe8be07"
	},
	{
		"id": "24f7c2ca7770",
		"ts": "2026-10-04T15:06:34.863Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1639146.03,
		"hash": "24f7c2ca7770fd22c088b8124481a4ae8a6206bed797eebccfba56a7831a799f"
	},
	{
		"id": "cc6affba8f9e",
		"ts": "2026-10-04T15:06:35.059Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 497560.51,
		"hash": "cc6affba8f9eae54cdf652484d0ecfdb227d49f76b785296ef7265c27a9c3fe6"
	},
	{
		"id": "71870797323c",
		"ts": "2026-10-04T15:06:35.248Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3646739.74,
		"hash": "71870797323c544c650a0cefdfe42727b3a6e3ce1c39b15d23dd5ccbec95ba69"
	},
	{
		"id": "faa78a2393fe",
		"ts": "2026-10-04T15:06:35.427Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 388556.82,
		"hash": "faa78a2393fee3d5cc21008bc89dc8882eb48ef313e0659d0b49d2ac162fb679"
	},
	{
		"id": "c7dd14b3724a",
		"ts": "2026-10-04T15:06:35.617Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2634894.8,
		"hash": "c7dd14b3724a066a11056c75756b5198eef4cb57f6f545f3808659eb1c584e58"
	},
	{
		"id": "e10e1cf3263f",
		"ts": "2026-10-04T15:06:35.828Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18235444.84,
		"hash": "e10e1cf3263f24943a677844a7829c0ebcdea3f24fa0971de3f4dee1e117795a"
	},
	{
		"id": "f540413eb1ab",
		"ts": "2026-10-04T09:17:17.264Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 162980699.99,
		"hash": "f540413eb1abe52b4f66f66d80bde3f6b6332a894e31c49aa465b32ffb683e3b"
	},
	{
		"id": "d8bdeef5a592",
		"ts": "2026-10-04T09:17:17.720Z",
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
		"liquidityUsd": 17144479.45,
		"hash": "d8bdeef5a592e99c31c6972da016ddf5f0005a0b63abbdc0856da1c8568b0570"
	},
	{
		"id": "06bc8018cdea",
		"ts": "2026-10-04T09:17:17.951Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 865706.77,
		"hash": "06bc8018cdea8a827ac153aa6e8c756412a121111d3ddaaaef89744f6090dcf2"
	},
	{
		"id": "832d94070196",
		"ts": "2026-10-04T09:17:18.204Z",
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
		"liquidityUsd": 44011512.74,
		"hash": "832d94070196dfefc3a6f3fd24cbf174bcf009fa669b1e6636afd4193e662e72"
	},
	{
		"id": "cfd75a4feaff",
		"ts": "2026-10-04T09:17:18.449Z",
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
		"liquidityUsd": 4620137.27,
		"hash": "cfd75a4feaff6d55b4db9c0dd73bce660d1b775c4cea175db1997dcf44fab392"
	},
	{
		"id": "a3f97ae8b7ff",
		"ts": "2026-10-04T09:17:18.677Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1325697.55,
		"hash": "a3f97ae8b7ff1676a1e852262385e54970bde93a4b78cc28c4e196cffbd5bba6"
	},
	{
		"id": "4f3be48a15ad",
		"ts": "2026-10-04T09:17:18.917Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 44011512.74,
		"hash": "4f3be48a15add7b3f8e85219bb87e01aee6ee2f666419478ab80e5e02138534e"
	},
	{
		"id": "8cc601d1c3eb",
		"ts": "2026-10-04T09:17:19.184Z",
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
		"liquidityUsd": 2220544.69,
		"hash": "8cc601d1c3eb9918cba30f3a05d2585b3f3f1dbc09574500f8ef451f37dcc785"
	},
	{
		"id": "916f40546c69",
		"ts": "2026-10-04T09:17:19.499Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1843378.35,
		"hash": "916f40546c693938e20137a6589d707bc59fb60afa1720f5cd0227f2157a937d"
	},
	{
		"id": "e044afb11d61",
		"ts": "2026-10-04T09:17:19.737Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 315699.34,
		"hash": "e044afb11d61115436a27bee91aca4474fa5cd9124e87b3c2ea6227a64fec367"
	},
	{
		"id": "f8104d290cc2",
		"ts": "2026-10-04T09:17:19.962Z",
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
		"liquidityUsd": 1170135.4,
		"hash": "f8104d290cc2a0db048db51638d1e6fd3e5b943cb616c5c9f02ba731e3d171d8"
	},
	{
		"id": "247f6f24d3fc",
		"ts": "2026-10-04T09:17:20.177Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1476046.73,
		"hash": "247f6f24d3fcb6a914a945a6855bf3a7c6df068dc968b6b7dfe55d380e9cf2e4"
	},
	{
		"id": "63d98e64ce14",
		"ts": "2026-10-04T09:17:20.389Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1637187.78,
		"hash": "63d98e64ce14e9697c1f21791adeefe11a58e6e94d518a80a34bac02c9273ef9"
	},
	{
		"id": "1df8f43f81f5",
		"ts": "2026-10-04T09:17:20.615Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 486770.4,
		"hash": "1df8f43f81f5541ea5ec42df372ef1b4664ed3deaa7b35b26ac3272711ef931e"
	},
	{
		"id": "8faa2fcd8d63",
		"ts": "2026-10-04T09:17:20.826Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 3420947.78,
		"hash": "8faa2fcd8d634aff16299483445f8f09752a86e2d7df6d769fcb8f12e2c2cc74"
	},
	{
		"id": "dd93685330fc",
		"ts": "2026-10-04T09:17:21.052Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 377722.18,
		"hash": "dd93685330fc503304df465b828249102232794569bd889d9fe2a850830fc80c"
	},
	{
		"id": "f8bed1bbc9d4",
		"ts": "2026-10-04T09:17:21.266Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2637182.21,
		"hash": "f8bed1bbc9d429175812eea97691af698bc6e462e2efe15b187fb8ba64466445"
	},
	{
		"id": "8ec9cdddd8cc",
		"ts": "2026-10-04T09:17:21.490Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 549394.31,
		"hash": "8ec9cdddd8cc6d57b6ddf8f35efdf9bd46f25dc85baf99d42bbc0de5c68335eb"
	},
	{
		"id": "6f35d370aa1e",
		"ts": "2026-10-04T09:17:21.714Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18404944.31,
		"hash": "6f35d370aa1ec66660ee64adc8e83197d5fd8d34a469a0f802f458cacbe1385d"
	},
	{
		"id": "15a0d8a5bf23",
		"ts": "2026-10-04T02:21:41.037Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 162729504.15,
		"hash": "15a0d8a5bf23b835de23540c0680ecdfb34b724cfc8e1475c1b99c009d90b1fe"
	},
	{
		"id": "c5bc51ad6f85",
		"ts": "2026-10-04T02:21:41.454Z",
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
		"liquidityUsd": 16469501.05,
		"hash": "c5bc51ad6f854fbb331c2996aacfc30c34e82bd1580e27e6a4719c1b167c5045"
	},
	{
		"id": "3b3332c125c6",
		"ts": "2026-10-04T02:21:41.901Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 862018.06,
		"hash": "3b3332c125c671116ff9082e915a9e0ce5b85d41e41c2d20d3dd7f7660e01ec9"
	},
	{
		"id": "94f54681b163",
		"ts": "2026-10-04T02:21:42.133Z",
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
		"liquidityUsd": 43047038.09,
		"hash": "94f54681b163c5ddc5db3318047cd97073269e0c58795e1453f25f9c5274eeea"
	},
	{
		"id": "10cae9f69ffd",
		"ts": "2026-10-04T02:21:42.373Z",
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
		"liquidityUsd": 4595535.96,
		"hash": "10cae9f69ffd392aa3174efb38bda4ca171b580d1e10eb23905f55f1b8383817"
	},
	{
		"id": "5e80e15797ed",
		"ts": "2026-10-04T02:21:42.997Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1323325.67,
		"hash": "5e80e15797ed6a7a9fd7a0df0a874d1f2348dbf20985c97f4432bda022ebb6a9"
	},
	{
		"id": "2458f625dcf9",
		"ts": "2026-10-04T02:21:43.227Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 43047038.09,
		"hash": "2458f625dcf9c44dbb08654b69e7ace0f51ad5c8ec623d9968cbecb3a75776eb"
	},
	{
		"id": "1d2965d41891",
		"ts": "2026-10-04T02:21:43.475Z",
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
		"liquidityUsd": 2252819.39,
		"hash": "1d2965d41891eefba1a7ac5fd1abfe426d2f180fa9f051935a21fa8dd47103de"
	},
	{
		"id": "2a23afa2839d",
		"ts": "2026-10-04T02:21:43.715Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1822397.89,
		"hash": "2a23afa2839d1522ccde3ea0896abddbb84299725b72e0a6f9d893d6420eb023"
	},
	{
		"id": "1c16049af3be",
		"ts": "2026-10-04T02:21:43.953Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1197247.52,
		"hash": "1c16049af3be422b83d0f93407fcd30581980f9d68abfbea6e934f9e5d846d3f"
	},
	{
		"id": "7542deba3f6f",
		"ts": "2026-10-04T02:21:44.166Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 338822.07,
		"hash": "7542deba3f6f8f4446410414bfeda76ea3c2b76afe3ceef3de6c34b860e2ed4d"
	},
	{
		"id": "98ecbed1be94",
		"ts": "2026-10-04T02:21:44.377Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1664807.49,
		"hash": "98ecbed1be948ae64f228477b1754d0e6f1bb216dab261315ec95fc9927c48f7"
	},
	{
		"id": "d133085027cf",
		"ts": "2026-10-04T02:21:44.599Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1479208.08,
		"hash": "d133085027cf8305c3bff0fb07d1b3ed6f0bd47acc1a154620a0509b40a9fb11"
	},
	{
		"id": "c32a3376fab9",
		"ts": "2026-10-04T02:21:44.818Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 481994.72,
		"hash": "c32a3376fab9d8fa11168e96dd5ff24f6218f9974ab56e92d630b53e64245d84"
	},
	{
		"id": "809c982bf577",
		"ts": "2026-10-04T02:21:45.029Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3410859.38,
		"hash": "809c982bf57765ff13e992506e16d338ccdcdc763c38db5acfd9b9b6a772b0ba"
	},
	{
		"id": "9ea1ea917359",
		"ts": "2026-10-04T02:21:45.240Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1146294.44,
		"hash": "9ea1ea91735921e4bf97b2f29e0515ca4bbc83e0f0c518574277d71b940a1711"
	},
	{
		"id": "5b4ac3f61201",
		"ts": "2026-10-04T02:21:45.463Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 377743.45,
		"hash": "5b4ac3f61201007af343976094c3d2fd1b35b40bd0eb6a05d00b814c95870a0f"
	},
	{
		"id": "2263f3c75c76",
		"ts": "2026-10-04T02:21:45.690Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 183798.86,
		"hash": "2263f3c75c767dc6d32efc02db0d42e4bb0f6f211f92b204cd0ac0410440cad6"
	},
	{
		"id": "be9a075d69d0",
		"ts": "2026-10-04T02:21:45.903Z",
		"symbol": "BASEPAD",
		"token": "0xAeadc7084BC3C482921A8ad7EADc65F70E06106D",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 73466.6,
		"hash": "be9a075d69d050c54bac64311f75e644a44674a20c5f9a7832373294a3062bad"
	},
	{
		"id": "390e95298f39",
		"ts": "2026-10-03T22:01:46.121Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 162487945.62,
		"hash": "390e95298f396a23b4282b2277eb64fcc385c071f0616cab043a36ba257584bc"
	},
	{
		"id": "7f9dea801df3",
		"ts": "2026-10-03T22:01:46.453Z",
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
		"liquidityUsd": 17665853.7,
		"hash": "7f9dea801df302e3749a11361264f79a1c93a05ff257c53bcb996e5199c677d4"
	},
	{
		"id": "414a730bfdd0",
		"ts": "2026-10-03T22:01:46.763Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 860389.91,
		"hash": "414a730bfdd0e9257e8dc3b6d48e1410f50e70417edad225f7b1a3f78f5175c7"
	},
	{
		"id": "64a0f9292f09",
		"ts": "2026-10-03T22:01:46.975Z",
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
		"liquidityUsd": 42992430.4,
		"hash": "64a0f9292f0943988772585150492462fd9fb189468ef47fbd68938d86d0e179"
	},
	{
		"id": "5c9613d1b87c",
		"ts": "2026-10-03T22:01:47.217Z",
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
		"liquidityUsd": 4593573.97,
		"hash": "5c9613d1b87c11ff200c6e0a338c06ebcb8c009a0f520ee3935ac88adf4d748d"
	},
	{
		"id": "bf5408fa0622",
		"ts": "2026-10-03T22:01:47.430Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1322739.46,
		"hash": "bf5408fa0622dd0d9369967f3ed9786f65b0f638018ab78d403ef7a381901bcd"
	},
	{
		"id": "14a13965b706",
		"ts": "2026-10-03T22:01:47.637Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42992430.4,
		"hash": "14a13965b706b904409a1d207b6b7729572bfc097056504c0482cfc47fae7ded"
	},
	{
		"id": "e70a1f1675c0",
		"ts": "2026-10-03T22:01:47.851Z",
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
		"liquidityUsd": 2251525.82,
		"hash": "e70a1f1675c02b15b95d1da45c3d2f4aa6c821053aad09c11a78385aaccd65bf"
	},
	{
		"id": "0b0cba5b3035",
		"ts": "2026-10-03T22:01:48.095Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1811820.71,
		"hash": "0b0cba5b3035cf85afc4874cda66947c6e228bb762502405ae166e707c9dde0d"
	},
	{
		"id": "b517593b2b7a",
		"ts": "2026-10-03T22:01:48.297Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1182230.17,
		"hash": "b517593b2b7a39c1ab4883f4d91d1782b0e0ed8b6cd20ba8ccc7a7805fe88c07"
	},
	{
		"id": "0c1d34e6cf84",
		"ts": "2026-10-03T22:01:48.511Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1679476.61,
		"hash": "0c1d34e6cf8423973b3e2eb476e6cda5114aa653085211300438673db2d79887"
	},
	{
		"id": "743ecc28c4fe",
		"ts": "2026-10-03T22:01:48.712Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1505159.57,
		"hash": "743ecc28c4fe551aa4cf811857693259502b6be59ba61fb92af0d1975d435b3d"
	},
	{
		"id": "6a8a7527f566",
		"ts": "2026-10-03T22:01:48.950Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 258967.17,
		"hash": "6a8a7527f5662a1c8925b9dcf9811bc7a87774b8026cdfc9844111708774708c"
	},
	{
		"id": "5b194be1ea82",
		"ts": "2026-10-03T22:01:49.200Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1179288.35,
		"hash": "5b194be1ea829e570694da7b8990f35317427fd1bdd3e2e724c75a4b5dcd95a0"
	},
	{
		"id": "f7946434dd22",
		"ts": "2026-10-03T22:01:49.423Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 183751.64,
		"hash": "f7946434dd22f7d8400a89f489aa3f3beff2646dc27c6c864ec77e2d9d45d78a"
	},
	{
		"id": "caff3f7613bd",
		"ts": "2026-10-03T22:01:49.625Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6039031.8,
		"hash": "caff3f7613bd90dc30297f99a2558f14d36173544c16bb502e7072c0632a41a9"
	},
	{
		"id": "8a0158258a83",
		"ts": "2026-10-03T22:01:49.808Z",
		"symbol": "BASEPAD",
		"token": "0xAeadc7084BC3C482921A8ad7EADc65F70E06106D",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 61989.86,
		"hash": "8a0158258a8372a3af66d0b0f71d4bf3c76a7fb62544349e4e0180acf44be368"
	},
	{
		"id": "f679f3219211",
		"ts": "2026-10-03T22:01:50.096Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 482234.04,
		"hash": "f679f321921160004fa7ae29c3908bca6837777d8d0275860c09ef29dc81ef8e"
	},
	{
		"id": "3610e58c71f4",
		"ts": "2026-10-03T22:01:50.288Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 379082.62,
		"hash": "3610e58c71f4bac01f2df84be260bf6d5bb8fcd6e26bfe4b5ebd7c01d8e642fa"
	},
	{
		"id": "45319859432a",
		"ts": "2026-10-03T18:57:56.675Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 162478005.63,
		"hash": "45319859432a51ff0b604a90fddd6d8ade21cfed19e95c58da684635fda1ae19"
	},
	{
		"id": "5ebfe1bf5e38",
		"ts": "2026-10-03T18:57:57.278Z",
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
		"liquidityUsd": 16254346.74,
		"hash": "5ebfe1bf5e384efead1b8c9acb5b71680da177e2477d4f62ff943ce5c204f749"
	},
	{
		"id": "f7c597463c9f",
		"ts": "2026-10-03T18:57:57.692Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 860039.8,
		"hash": "f7c597463c9f9a0cfe05238f827007c0df407ba77dbc08d5e4db7c3455420be3"
	},
	{
		"id": "963248c0d144",
		"ts": "2026-10-03T18:57:57.925Z",
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
		"liquidityUsd": 42288561.83,
		"hash": "963248c0d144eabd1368d25fe38752da336b623eafade843bbcb1a70a9a3e8d3"
	},
	{
		"id": "6ac0fd405979",
		"ts": "2026-10-03T18:57:58.155Z",
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
		"liquidityUsd": 4595195.95,
		"hash": "6ac0fd4059799fef845dc959f1f9c6926dc38b52be995a43a404e8407ac24ad6"
	},
	{
		"id": "eb22ce570819",
		"ts": "2026-10-03T18:57:58.389Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1323396.29,
		"hash": "eb22ce570819c91e3ba30f8e18c539a0e165eef89d6cbc61e757c4edea8a74c7"
	},
	{
		"id": "db6f53ea78c9",
		"ts": "2026-10-03T18:57:58.620Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42288561.83,
		"hash": "db6f53ea78c94378aa6f423d83272b4744b9c96dad27227b4571e9bdbc1487dc"
	},
	{
		"id": "7183b1760d79",
		"ts": "2026-10-03T18:57:58.848Z",
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
		"liquidityUsd": 2251046.94,
		"hash": "7183b1760d79beb75f298228c5ca239f6292e858d62353011f0eee80d314629d"
	},
	{
		"id": "4a5f826f2b55",
		"ts": "2026-10-03T18:57:59.079Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1815303.57,
		"hash": "4a5f826f2b55217d0bd1cf7c7fc6ff9adc94b8a4befd9c424356d82e768d5d36"
	},
	{
		"id": "c1c2e3061b54",
		"ts": "2026-10-03T18:57:59.316Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1464684.8,
		"hash": "c1c2e3061b54d0f32c2ee59d344d7f767c637a714fca4c9bf680d188a759fa83"
	},
	{
		"id": "40d0983748e1",
		"ts": "2026-10-03T18:57:59.531Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1205981.53,
		"hash": "40d0983748e1ba2b1ebbe5dfe3b9761712e3e805f5e9e08a0c0e3b9e72ad52ac"
	}
]
