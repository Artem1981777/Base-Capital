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
	"updatedAt": "2026-10-14T05:45:22.927Z",
	"tokensScored": 20139,
	"verdictsIssued": 20139,
	"safe": 17158,
	"risky": 1436,
	"likelyRug": 1545,
	"ticks": 1140
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "db3e09954721",
		"ts": "2026-10-14T05:45:18.391Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 150513738.12,
		"hash": "db3e09954721916802676991ac52f2b55e1b5c06be748491dab3649d13024fd9"
	},
	{
		"id": "7f4144af133b",
		"ts": "2026-10-14T05:45:18.700Z",
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
		"liquidityUsd": 18325178.04,
		"hash": "7f4144af133b686911b3603040692a3e47532d96c849aa6ee58d624a5cfceca3"
	},
	{
		"id": "e62b44302cff",
		"ts": "2026-10-14T05:45:18.969Z",
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
		"liquidityUsd": 799274.96,
		"hash": "e62b44302cff63bcdaad55e9506a45172d299b9dc1b32258e11e9979a3e989bb"
	},
	{
		"id": "b2bd540c2d16",
		"ts": "2026-10-14T05:45:19.224Z",
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
		"liquidityUsd": 41900140.15,
		"hash": "b2bd540c2d16e125e545a93f37ca35ef8df569c958b0774ddb12ff43649f8d6e"
	},
	{
		"id": "025257020a50",
		"ts": "2026-10-14T05:45:19.480Z",
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
		"liquidityUsd": 4782639.11,
		"hash": "025257020a50bb8d9fc74d34ab5102edaf519ac91e598a5ec110c397170788e1"
	},
	{
		"id": "327470e29a01",
		"ts": "2026-10-14T05:45:19.736Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1212514.46,
		"hash": "327470e29a012334515f4ff05c09d64e8b355d42b0460918b8623c768ed3845a"
	},
	{
		"id": "8af2c09704a6",
		"ts": "2026-10-14T05:45:20.001Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41900140.15,
		"hash": "8af2c09704a6a6addbe4d036affacb70ca6ba822e8a4a20da055b0651771da06"
	},
	{
		"id": "f86d75259d61",
		"ts": "2026-10-14T05:45:20.248Z",
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
		"liquidityUsd": 3037157.4,
		"hash": "f86d75259d613c04bf8d79a5f072ba7dc5018c947026c5b605407ad6393e85b1"
	},
	{
		"id": "d9185dd1e82c",
		"ts": "2026-10-14T05:45:20.505Z",
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
		"liquidityUsd": 1890613.45,
		"hash": "d9185dd1e82cf7158c5bea68c9ec5e7b837cfbffd2831d34816cb600213c014f"
	},
	{
		"id": "b5c8b86d3420",
		"ts": "2026-10-14T05:45:20.756Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 331899.94,
		"hash": "b5c8b86d342083b6b5f766126ec01ffb8982315f50bcd53e65da8e785277faa4"
	},
	{
		"id": "8e5ab7419f17",
		"ts": "2026-10-14T05:45:20.994Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5200136.32,
		"hash": "8e5ab7419f1720766db7c9cc2d052e0901e6f7eec4b3afcc014ccc91919b975d"
	},
	{
		"id": "afe17b7ea4b0",
		"ts": "2026-10-14T05:45:21.241Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 4896017.67,
		"hash": "afe17b7ea4b0cd165e9e365771bd3e95de2c62c99c8e05be77aeabc6fed38a37"
	},
	{
		"id": "a283fc59704f",
		"ts": "2026-10-14T05:45:21.482Z",
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
		"liquidityUsd": 15906834.81,
		"hash": "a283fc59704ff65aa24f34ab76e76461fdf6bd861a100fd7848eb340e7481568"
	},
	{
		"id": "182a59dbb29a",
		"ts": "2026-10-14T05:45:21.714Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1127875.59,
		"hash": "182a59dbb29a03f7e2a6f699b7510ba319f6cd40de32e8106d814e2034122ae4"
	},
	{
		"id": "8b12388bac5f",
		"ts": "2026-10-14T05:45:21.958Z",
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
		"liquidityUsd": 3050602.52,
		"hash": "8b12388bac5fbf33a6554d0a34dea1ffc0f040423da91683d6721970cfd65bd8"
	},
	{
		"id": "79b892493239",
		"ts": "2026-10-14T05:45:22.202Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4069294.34,
		"hash": "79b89249323937f4ec19d5c5e802d1706f2b633df2990ec3c32b607c7e86a5a6"
	},
	{
		"id": "14a56a5397ae",
		"ts": "2026-10-14T05:45:22.429Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 613100.25,
		"hash": "14a56a5397ae77db2c2d2c46ea83762f188ed3840da1575f053ca9937518d103"
	},
	{
		"id": "af61d9d1d791",
		"ts": "2026-10-14T05:45:22.690Z",
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
		"liquidityUsd": 1174695.13,
		"hash": "af61d9d1d791199496d978299d59e8b16b475b866213b237f6143fb64a67268c"
	},
	{
		"id": "b8e55b6a7350",
		"ts": "2026-10-14T05:45:22.926Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1185606.16,
		"hash": "b8e55b6a735078f241f9002ecd63f48320ba62d7a04488953ff80417759dc1b2"
	},
	{
		"id": "46439fc642c0",
		"ts": "2026-10-14T00:06:22.110Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 150314585.92,
		"hash": "46439fc642c0c41221f2d9022ee4d012e3a01bf261445cd355a208aa6e9e0823"
	},
	{
		"id": "9cc83df5ee8c",
		"ts": "2026-10-14T00:06:22.433Z",
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
		"liquidityUsd": 18193976.04,
		"hash": "9cc83df5ee8c818126c947d515ae7ec4e6c76019f668f525fc7b78ac57878f0b"
	},
	{
		"id": "36a10f1a21ac",
		"ts": "2026-10-14T00:06:22.746Z",
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
		"liquidityUsd": 802468.86,
		"hash": "36a10f1a21ac7fcd337cc254d900325e670aaea7b8ace24c1911755c1016c0f2"
	},
	{
		"id": "e0759da1164c",
		"ts": "2026-10-14T00:06:23.058Z",
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
		"liquidityUsd": 41950861.08,
		"hash": "e0759da1164c3043304dce6825d41315282dafa18a5f2f28e867deb673fa20e2"
	},
	{
		"id": "545516be0820",
		"ts": "2026-10-14T00:06:23.368Z",
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
		"liquidityUsd": 4762798.38,
		"hash": "545516be0820f76c0f9ae313d38bb9baca07bcf19723932e4bd6e43fae1c5904"
	},
	{
		"id": "b55b9de12975",
		"ts": "2026-10-14T00:06:23.678Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1208305.89,
		"hash": "b55b9de12975e81af69086ea11ac821ca446b1cc949dd58e8da2cb2b3347bc93"
	},
	{
		"id": "d299c638eb41",
		"ts": "2026-10-14T00:06:23.987Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41950861.08,
		"hash": "d299c638eb411af22b6b4b843c4ba98159b4d69e76d71078390ed921d83ce1fb"
	},
	{
		"id": "027d0791fa32",
		"ts": "2026-10-14T00:06:24.310Z",
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
		"liquidityUsd": 929443.36,
		"hash": "027d0791fa32e9b38b82c19f58131e7c298e370418b4a7aa6625c0983ff291e1"
	},
	{
		"id": "e1d681d5f174",
		"ts": "2026-10-14T00:06:24.621Z",
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
		"liquidityUsd": 1909032.38,
		"hash": "e1d681d5f17425cff728d29e4d3a6b853450d21662d5c22fabe9be9781db4037"
	},
	{
		"id": "64ffca6886fb",
		"ts": "2026-10-14T00:06:24.924Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 318259.72,
		"hash": "64ffca6886fbf556504ee1e5ac80313b7bc1816738d7eb741b0fe07761a5241f"
	},
	{
		"id": "1e8306a0aeea",
		"ts": "2026-10-14T00:06:25.213Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 5094678.39,
		"hash": "1e8306a0aeeae70def10b5f97f9d16e12a03dbbf5136cd285c1c0d379bb31060"
	},
	{
		"id": "8b1bcdc2deae",
		"ts": "2026-10-14T00:06:25.507Z",
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
		"liquidityUsd": 15765452.09,
		"hash": "8b1bcdc2deae1852ea988c855010d48d1269fbddaa413feaa0238c54e1e67fa3"
	},
	{
		"id": "91c0196ee4a3",
		"ts": "2026-10-14T00:06:25.798Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1123733.54,
		"hash": "91c0196ee4a3ce2cf021c4baf8d71d2f540d9664db3efb6e43771e994398744e"
	},
	{
		"id": "74ee078fc335",
		"ts": "2026-10-14T00:06:26.089Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4078118.5,
		"hash": "74ee078fc335831027cf90888b8e7dc6f9965580567dcaae9fe8d6e7b6cbbb8d"
	},
	{
		"id": "fc8dca4edfb4",
		"ts": "2026-10-14T00:06:26.378Z",
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
		"liquidityUsd": 3088432.27,
		"hash": "fc8dca4edfb43317bfef2420c032df1d5ab570d75ecbc6f4307f98d567b3f657"
	},
	{
		"id": "89b8ead4fadf",
		"ts": "2026-10-14T00:06:26.670Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 623089.67,
		"hash": "89b8ead4fadf115d6f0af30af21072e1544533253cec435b553b1b7aac0c4165"
	},
	{
		"id": "1c92e036cd07",
		"ts": "2026-10-14T00:06:26.963Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 448617.11,
		"hash": "1c92e036cd074e931f2f8674f6a22756b6ad25a82b632cd36814ce586d0e1ffd"
	},
	{
		"id": "5363045427cf",
		"ts": "2026-10-14T00:06:27.251Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 197587.14,
		"hash": "5363045427cfce2d352555fc5d692dbb715853d077ac2ae5c41c5cd44a625d86"
	},
	{
		"id": "6a8657527542",
		"ts": "2026-10-14T00:06:27.540Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5158759.72,
		"hash": "6a86575275429496b78344a62b5c6f9247a1ca601f67b52048e6b57fc9da68de"
	},
	{
		"id": "334deda56350",
		"ts": "2026-10-13T20:02:37.615Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 150494459.46,
		"hash": "334deda563503b5f2c3f05b24c03510542114a0e6400f4f6c30770fc511cae70"
	},
	{
		"id": "80be976d0a7e",
		"ts": "2026-10-13T20:02:38.142Z",
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
		"liquidityUsd": 18275383.57,
		"hash": "80be976d0a7e6b6f2d126d26d7d123db8522ea7d05d16cd3d4c4de0ca1c4b6e2"
	},
	{
		"id": "4ce33acd818f",
		"ts": "2026-10-13T20:02:38.444Z",
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
		"liquidityUsd": 800872.5,
		"hash": "4ce33acd818fa06f2024c6432ad0a805a5a2597a1aa20aef2398327ca55448bd"
	},
	{
		"id": "9870044bb39e",
		"ts": "2026-10-13T20:02:38.745Z",
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
		"liquidityUsd": 42013803.89,
		"hash": "9870044bb39e2a1921882d8565228ce033f4388885ab261b17a29c56abc2187e"
	},
	{
		"id": "e0f4b7d3344f",
		"ts": "2026-10-13T20:02:39.042Z",
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
		"liquidityUsd": 4775686.43,
		"hash": "e0f4b7d3344fc06c8393b62645b396269c4b42940f76b37f3c1ef65874c6c439"
	},
	{
		"id": "913519fcf6db",
		"ts": "2026-10-13T20:02:39.382Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1208240.4,
		"hash": "913519fcf6db183a24f198594f9d9ce70ce0c4a179bc816cc384b1bec858116c"
	},
	{
		"id": "4e3702e5c1ac",
		"ts": "2026-10-13T20:02:39.677Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42013803.89,
		"hash": "4e3702e5c1acb03013c283d9d274b389c081432b09351ee52452bf6ba8bf35c0"
	},
	{
		"id": "20c4c277c687",
		"ts": "2026-10-13T20:02:39.976Z",
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
		"liquidityUsd": 932976.26,
		"hash": "20c4c277c6872a31a502c99b621c75e566b3806ce1c300bb5acf3866a0fabfc4"
	},
	{
		"id": "8760c4ccdee3",
		"ts": "2026-10-13T20:02:40.264Z",
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
		"liquidityUsd": 1885988.3,
		"hash": "8760c4ccdee3edb3bc4c360199ab1c117763177f2f098980a293423aa14c0611"
	},
	{
		"id": "b73f632bb696",
		"ts": "2026-10-13T20:02:40.562Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 325390.41,
		"hash": "b73f632bb6962d97e5a7f4b02bd66b45bf5738fa12e03896e20db966abbb24ec"
	},
	{
		"id": "b599f08c1f68",
		"ts": "2026-10-13T20:02:40.833Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5106168.08,
		"hash": "b599f08c1f68fbfe10003b7be19789879b6f4c85e11647d2d811a7af6478df5f"
	},
	{
		"id": "fd1349e7d56c",
		"ts": "2026-10-13T20:02:41.113Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 4817184.14,
		"hash": "fd1349e7d56cf951bddac25f6b5b09a39fe37fac1a9eab8cb86af4fe19b02bae"
	},
	{
		"id": "c86ceb9b79ed",
		"ts": "2026-10-13T20:02:41.388Z",
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
		"liquidityUsd": 15489655.04,
		"hash": "c86ceb9b79eddded35120ae53110cbe85c4845905e605fce468883c4f1036b5d"
	},
	{
		"id": "79b8cdbe642d",
		"ts": "2026-10-13T20:02:41.669Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1130554.06,
		"hash": "79b8cdbe642d8dc2fe69f5f941797a222fb93538c1b73d601affb0b0e5c827e0"
	},
	{
		"id": "707636e7fcd6",
		"ts": "2026-10-13T20:02:41.945Z",
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
		"liquidityUsd": 3098457.92,
		"hash": "707636e7fcd60a4caf80a6a925ab733622240cda2cbf5927891b38f7455aa26f"
	},
	{
		"id": "3393d63db469",
		"ts": "2026-10-13T20:02:42.228Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 456415.2,
		"hash": "3393d63db46957b84a0fc702178a00a46a7fb3149f4dddb9fd0848e8ee91af66"
	},
	{
		"id": "ae7fd428f83c",
		"ts": "2026-10-13T20:02:42.502Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2146659.82,
		"hash": "ae7fd428f83cf88a0a2505d541a9f75401c2f9355c62a03acd3e618dbe1b5873"
	},
	{
		"id": "aa9fda89c63e",
		"ts": "2026-10-13T20:02:42.778Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 197819.4,
		"hash": "aa9fda89c63ee442548995b37552aeb7cdb62b443ed85ebd7a8209cef2faf219"
	},
	{
		"id": "6ab4a6692c80",
		"ts": "2026-10-13T20:02:43.053Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3940048.12,
		"hash": "6ab4a6692c80d7074b9059f05758383cbd08c5ff53ee32e9c225d18c770e2cdd"
	},
	{
		"id": "fcf5992ce1bf",
		"ts": "2026-10-13T13:28:11.896Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 150067717.04,
		"hash": "fcf5992ce1bfa7be4894effc625ad42802ee50f7ce3a3b27c95c33c57cb3a806"
	},
	{
		"id": "8ec25219dbaa",
		"ts": "2026-10-13T13:28:12.411Z",
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
		"liquidityUsd": 18202629.91,
		"hash": "8ec25219dbaa0901edd7da9233357d90f2660e48587c929890667933763ed4e3"
	},
	{
		"id": "4ffc350174f4",
		"ts": "2026-10-13T13:28:12.687Z",
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
		"liquidityUsd": 802071.29,
		"hash": "4ffc350174f42bf587adf3f5a1e90f4b702763f80dc6f805f97bb86efa5016e0"
	},
	{
		"id": "637b23fd9b94",
		"ts": "2026-10-13T13:28:12.963Z",
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
		"liquidityUsd": 40714270.67,
		"hash": "637b23fd9b9492dbf8984d024c0d227870264407c198ad3cd98add6fa79fb5de"
	},
	{
		"id": "e487bc050432",
		"ts": "2026-10-13T13:28:13.246Z",
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
		"liquidityUsd": 4745133.93,
		"hash": "e487bc05043217e9428758e6f57696171f09f1c1b3d5648a07738afbab1cde9b"
	},
	{
		"id": "7e7fc174901d",
		"ts": "2026-10-13T13:28:13.521Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1199448.97,
		"hash": "7e7fc174901d6b698efe1a630171f07b4e8752e651497bc139cdf765cd93f30b"
	},
	{
		"id": "051416f1f51c",
		"ts": "2026-10-13T13:28:13.794Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 40714270.67,
		"hash": "051416f1f51cd5008eaeeedea619d255187c54c01f8cf9ed69e2baca53b46ea8"
	},
	{
		"id": "7b96192c6346",
		"ts": "2026-10-13T13:28:14.303Z",
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
		"liquidityUsd": 3031299.76,
		"hash": "7b96192c6346956e2be4ba71a5f37cec1130533ebe965082b2b4685d87cf496a"
	},
	{
		"id": "55e44ea4cd41",
		"ts": "2026-10-13T13:28:14.566Z",
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
		"liquidityUsd": 1877515.85,
		"hash": "55e44ea4cd41b6ef29ebc19f318d086dd942c81fa40616813c8208d751f15795"
	},
	{
		"id": "17007d21667c",
		"ts": "2026-10-13T13:28:14.839Z",
		"symbol": "THEO",
		"token": "0xebE516a20238F79DC20b07eaD6768e08891Ed309",
		"score": 68,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.36,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 45873.61,
		"hash": "17007d21667cae5a42bb25c7da4ffa16c344960250098a5aa834e31599c5966f"
	},
	{
		"id": "432b29397dff",
		"ts": "2026-10-13T13:28:15.090Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 192513.09,
		"hash": "432b29397dff702090e1fa9a7ec8bd41e0a19913d39f955bd94735dd8fc10317"
	},
	{
		"id": "09bc05990529",
		"ts": "2026-10-13T13:28:15.353Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 4684779.94,
		"hash": "09bc0599052924f7da25ce7eadbe7f2bb6aff26cd6f30a5a992e4bdc5fd76148"
	},
	{
		"id": "348dfd4326e6",
		"ts": "2026-10-13T13:28:15.608Z",
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
		"liquidityUsd": 15518278.65,
		"hash": "348dfd4326e6c58412428fd3906b2862aedcd921a429263ccd8b746d18f812c2"
	},
	{
		"id": "2ba399da1b05",
		"ts": "2026-10-13T13:28:15.860Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5126562.79,
		"hash": "2ba399da1b050166417bcc66a6c2b3bf300a294daef8805b6465f3aa8289ca4e"
	},
	{
		"id": "3569207b7ae6",
		"ts": "2026-10-13T13:28:16.122Z",
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
		"liquidityUsd": 313258.84,
		"hash": "3569207b7ae6f07e3fa28d093e355f595f717046061bde02e37c4d90fe852d53"
	},
	{
		"id": "e055af8634a8",
		"ts": "2026-10-13T13:28:16.391Z",
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
		"liquidityUsd": 3083837.76,
		"hash": "e055af8634a81baba26d27b8759054730b156168ebdf2cbed30ce15a3387dc02"
	},
	{
		"id": "6af840761ab4",
		"ts": "2026-10-13T13:28:16.649Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1123649.89,
		"hash": "6af840761ab46a061478793601d87eda5df2ce17c37eb3cc4bf65e6df91aa184"
	},
	{
		"id": "df5fcf61ace3",
		"ts": "2026-10-13T13:28:16.903Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1494133.46,
		"hash": "df5fcf61ace38010a29957cc006fd57308ef1dd0cba9835c0797fc82fa68a514"
	},
	{
		"id": "44a15f49fce1",
		"ts": "2026-10-13T13:28:17.161Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4046025.65,
		"hash": "44a15f49fce1c815c9983530ebdce160b30ab8d53ba3ea0a56fb942b409a6313"
	},
	{
		"id": "468c42bc55c7",
		"ts": "2026-10-13T05:16:49.357Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 150046721.9,
		"hash": "468c42bc55c796ebdea728ed7a8741b549b0b75a4b84bb6dbb4bfed80bb3fdea"
	},
	{
		"id": "72ec65ebdc67",
		"ts": "2026-10-13T05:16:49.628Z",
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
		"liquidityUsd": 18265339.88,
		"hash": "72ec65ebdc67110c2b564fc018b7c8d8ca47fb122d47d063da59f17411e401ef"
	},
	{
		"id": "c3007edcbe7d",
		"ts": "2026-10-13T05:16:49.875Z",
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
		"liquidityUsd": 806557.86,
		"hash": "c3007edcbe7d24854d74744d2ffb35d68ce055d90259dde6c8c1c45ffcb1cadd"
	},
	{
		"id": "f59a733cd768",
		"ts": "2026-10-13T05:16:50.186Z",
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
		"liquidityUsd": 41224533.21,
		"hash": "f59a733cd76870b107d4542bb699766c513be057a081d182fa92466f237c6487"
	},
	{
		"id": "5b7402619d6f",
		"ts": "2026-10-13T05:16:50.451Z",
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
		"liquidityUsd": 4804475.14,
		"hash": "5b7402619d6f45b2be72faf25de7136ca0269f7defa3958f729afcab58fef32c"
	},
	{
		"id": "687b66230f9f",
		"ts": "2026-10-13T05:16:50.711Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1218231.64,
		"hash": "687b66230f9f11b9293fe42cd99624490884f8a41027ff5a74bfacd8e47801ab"
	},
	{
		"id": "5ccd74469fea",
		"ts": "2026-10-13T05:16:50.983Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41224533.21,
		"hash": "5ccd74469fea564738ff3970df00473631fb31dad79c5d1b2ace92dcb791f0aa"
	},
	{
		"id": "8c3e88972695",
		"ts": "2026-10-13T05:16:51.262Z",
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
		"liquidityUsd": 3277950.22,
		"hash": "8c3e889726956998110c256456479de87d6884dcfd1c82d12cc3d361a5f3814d"
	},
	{
		"id": "cb06347b35f3",
		"ts": "2026-10-13T05:16:51.518Z",
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
		"liquidityUsd": 1879884.32,
		"hash": "cb06347b35f33e663c2390225c1e62ad6c4221537ec4856f53f713592da8e539"
	},
	{
		"id": "7475ef833b4d",
		"ts": "2026-10-13T05:16:51.895Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5076577.18,
		"hash": "7475ef833b4dc61d79f11b52c21a1d1fd19468935e04763f74049d860ca73239"
	},
	{
		"id": "72a4d3bfa9b7",
		"ts": "2026-10-13T05:16:52.127Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 182383.13,
		"hash": "72a4d3bfa9b757dce7e79e58ee45dacba13cb35e7f48da69ce5face5e5253463"
	},
	{
		"id": "582c4d071f7d",
		"ts": "2026-10-13T05:16:52.355Z",
		"symbol": "THEO",
		"token": "0xebE516a20238F79DC20b07eaD6768e08891Ed309",
		"score": 76,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.52,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 45332.16,
		"hash": "582c4d071f7d78ada34fcba57dbbdf3959030711c69a9299f4526f8536c847df"
	},
	{
		"id": "f758ff064ccf",
		"ts": "2026-10-13T05:16:52.590Z",
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
		"liquidityUsd": 15860762.58,
		"hash": "f758ff064ccf01075532f8f7b246a5436164d64002ba66d18354737c209b35b3"
	},
	{
		"id": "87a1f3027860",
		"ts": "2026-10-13T05:16:52.827Z",
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
		"liquidityUsd": 1197773.06,
		"hash": "87a1f3027860c04d7d5261142e7f7cabcd114d9a43275e644ce6ad9ab42fe2df"
	},
	{
		"id": "b2b969309229",
		"ts": "2026-10-13T05:16:53.055Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 4723325.91,
		"hash": "b2b969309229fafddde683b82ae6a817fed446afa0dbbf0713a1c0e21379e4ad"
	},
	{
		"id": "0eefb7ec3049",
		"ts": "2026-10-13T05:16:53.292Z",
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
		"liquidityUsd": 324590.59,
		"hash": "0eefb7ec30496b826132e9e45c8f5bd205f54003a520d024af562d31555629ac"
	},
	{
		"id": "11f12b690ff0",
		"ts": "2026-10-13T05:16:53.525Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1492681.98,
		"hash": "11f12b690ff07381a4d6f6a9180ae810a1878c43d1e91098ce950fb5c46177c6"
	},
	{
		"id": "a99840e27938",
		"ts": "2026-10-13T05:16:53.749Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2192684.34,
		"hash": "a99840e279385130a9d12eed9e096b69502a42d238142e85f46228ef20fc6a5c"
	},
	{
		"id": "f19e8a5a775f",
		"ts": "2026-10-13T05:16:53.985Z",
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
		"liquidityUsd": 1122178.39,
		"hash": "f19e8a5a775f595b4b5c39b389bfcc7ecd954a5510105c9a133a760b8f9633a1"
	},
	{
		"id": "c9b9bb71b647",
		"ts": "2026-10-12T23:27:01.783Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 148286914.2,
		"hash": "c9b9bb71b6473506a7de61718e53be1e5bd66af36bf8fa2d431b9295ff6ba835"
	},
	{
		"id": "b1d76ed09be3",
		"ts": "2026-10-12T23:27:02.251Z",
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
		"liquidityUsd": 17964237.32,
		"hash": "b1d76ed09be3f3297b81295b35cca71953baf60a3f10d78f7a022bb69c9d04af"
	},
	{
		"id": "296571f414dd",
		"ts": "2026-10-12T23:27:02.498Z",
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
		"liquidityUsd": 794125.89,
		"hash": "296571f414dd8d2848feb106e53467d8f5f56c541ff539f52e97173c26f126be"
	},
	{
		"id": "28e61f194daf",
		"ts": "2026-10-12T23:27:02.745Z",
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
		"liquidityUsd": 40731849.15,
		"hash": "28e61f194daf9f17fab8963de33b47f017b12941f36d2fffe0cb158522fc0c67"
	},
	{
		"id": "08fcc12c68a7",
		"ts": "2026-10-12T23:27:03.025Z",
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
		"liquidityUsd": 4719764.08,
		"hash": "08fcc12c68a798558a46c8b1abfcc9184f4d2194d9f89bd2184deafe97118cf4"
	},
	{
		"id": "cd3733e75cdf",
		"ts": "2026-10-12T23:27:03.302Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1227144.82,
		"hash": "cd3733e75cdf0510e788a6edd965221e079d625b545529dabb946410f8d3d7ff"
	},
	{
		"id": "fd3410e1adb7",
		"ts": "2026-10-12T23:27:03.609Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 40731853.46,
		"hash": "fd3410e1adb7f8c851a22157751566e863f9b2b7600c12b990711a576dd49aee"
	},
	{
		"id": "643ae574d9b8",
		"ts": "2026-10-12T23:27:03.859Z",
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
		"liquidityUsd": 641972.79,
		"hash": "643ae574d9b86ec6a986d14d90172d09556d6f352f7a2a92365d973af17a9673"
	},
	{
		"id": "5cd18a1eb770",
		"ts": "2026-10-12T23:27:04.101Z",
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
		"liquidityUsd": 1885236.49,
		"hash": "5cd18a1eb7705d127a4611a2cc399480540242ecc11387ef4d074f46ebf3a817"
	},
	{
		"id": "38a24012ace8",
		"ts": "2026-10-12T23:27:04.348Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5083953.51,
		"hash": "38a24012ace8da13f5989d9cf068e890646c2c2df801143d8b5417e430d005cb"
	},
	{
		"id": "4bebb55ba69d",
		"ts": "2026-10-12T23:27:04.579Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 174320.53,
		"hash": "4bebb55ba69df17659940e66b1d5e3964754811c00cd1bd30cc78ec1f4e6fbef"
	},
	{
		"id": "4f33d9b82674",
		"ts": "2026-10-12T23:27:04.812Z",
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
		"liquidityUsd": 15478475.6,
		"hash": "4f33d9b8267496cdbd45d2a02a5fd5c4029b2bfdbdff2996448e5e3f962a9e29"
	},
	{
		"id": "aeb72f265676",
		"ts": "2026-10-12T23:27:05.039Z",
		"symbol": "THEO",
		"token": "0xebE516a20238F79DC20b07eaD6768e08891Ed309",
		"score": 76,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.52,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 44693.18,
		"hash": "aeb72f265676a77fe10032ca148ca105ffc483a6afb40a774b6943c93aa5ec7b"
	},
	{
		"id": "e300a41a9ff2",
		"ts": "2026-10-12T23:27:05.276Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1116574.85,
		"hash": "e300a41a9ff2974479d125beea8f632fc87c56ca5d999f7f5e2e016b2698976d"
	},
	{
		"id": "6681de35d53b",
		"ts": "2026-10-12T23:27:05.501Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1474701.39,
		"hash": "6681de35d53bf89a6f825495d78e1c1d2416d2dee3ef8e300d804599a0300816"
	},
	{
		"id": "7e21c17ee6be",
		"ts": "2026-10-12T23:27:05.735Z",
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
		"liquidityUsd": 546747.2,
		"hash": "7e21c17ee6be6a4a11bb7db599e6e1bcea5ae2256d0ac4ffa214d5ce61fa1544"
	},
	{
		"id": "d751821922c4",
		"ts": "2026-10-12T23:27:05.959Z",
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
		"liquidityUsd": 332430.39,
		"hash": "d751821922c4041a5008ec63c9d09465b73157fd713818a987be6af75c12099d"
	},
	{
		"id": "1cd9063e7948",
		"ts": "2026-10-12T23:27:06.188Z",
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
		"liquidityUsd": 1119673.78,
		"hash": "1cd9063e79484e8044d15173e66ab83e23c2f12e16b338f53fc63674eeec04b5"
	},
	{
		"id": "553708955ebc",
		"ts": "2026-10-12T23:27:06.411Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2141131.41,
		"hash": "553708955ebcbeeabe39b0267d32643d15d762bc872d66bc3773ae2c44836388"
	},
	{
		"id": "8d76cb2b2eb7",
		"ts": "2026-10-12T16:27:01.514Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 150661180.11,
		"hash": "8d76cb2b2eb7e01764f295748c040b4e6c535ed62d682fc0daffd1ddd0508339"
	},
	{
		"id": "c1ee56d0fce4",
		"ts": "2026-10-12T16:27:01.748Z",
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
		"liquidityUsd": 18365207.3,
		"hash": "c1ee56d0fce4546534b5620d31ab18c82854ddb1421de434cd764ea56d34bcb8"
	},
	{
		"id": "225e043c5065",
		"ts": "2026-10-12T16:27:02.005Z",
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
		"liquidityUsd": 808855.87,
		"hash": "225e043c5065c8707b8b8939b22e6c5363f5deebb0498c59243309b50012c1bb"
	},
	{
		"id": "3219bece3edb",
		"ts": "2026-10-12T16:27:02.241Z",
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
		"liquidityUsd": 41173321.8,
		"hash": "3219bece3edb1e16a07f5ef81e0ec066f583a59c36371f0e9020606974f08cd6"
	},
	{
		"id": "0b6c9d9a97d2",
		"ts": "2026-10-12T16:27:02.508Z",
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
		"liquidityUsd": 4889927.26,
		"hash": "0b6c9d9a97d23977aa43ed4d319b1f6b46b371a3ed5625e643053feec05551f9"
	},
	{
		"id": "5978c186777f",
		"ts": "2026-10-12T16:27:02.751Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1239097.99,
		"hash": "5978c186777f160fb1028e3bc9a88600388a0c7f09a4c71a463812b68276c898"
	},
	{
		"id": "0c54313197df",
		"ts": "2026-10-12T16:27:03.002Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41173321.8,
		"hash": "0c54313197dfb08def0e9d5bf57453e6d99a20b412fe61d23ba64983236f9ce5"
	},
	{
		"id": "b9e2f6f013f1",
		"ts": "2026-10-12T16:27:03.306Z",
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
		"liquidityUsd": 601932.78,
		"hash": "b9e2f6f013f187bc291b970f5b9188ddb6b4441845c2ad4bad2035d8da268bc6"
	},
	{
		"id": "53cf4b3cde1a",
		"ts": "2026-10-12T16:27:03.543Z",
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
		"liquidityUsd": 1876632.31,
		"hash": "53cf4b3cde1a36a2937c305c02c3fe813f9e591f819122f494f660f56e572117"
	},
	{
		"id": "db118408e305",
		"ts": "2026-10-12T16:27:03.798Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 560059.63,
		"hash": "db118408e3051f712d5b640240a323f2f4c64f97ef83ccb0b1b3496f4291f9d0"
	},
	{
		"id": "d80e0bd45050",
		"ts": "2026-10-12T16:27:04.009Z",
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
		"liquidityUsd": 16067029.84,
		"hash": "d80e0bd45050e0b91336b8886b45eaf4f78f594960667dbc421822ed95ee3994"
	},
	{
		"id": "c0c71612c6c8",
		"ts": "2026-10-12T16:27:04.221Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5067364.42,
		"hash": "c0c71612c6c8a98456746d5c1e19fd6dff605bff84c7f87193a2638f3621e025"
	},
	{
		"id": "2137c38904ae",
		"ts": "2026-10-12T16:27:04.441Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 203463.74,
		"hash": "2137c38904ae5226e2c3544b8257630873a7274e1b9c0d1ea397894f1b6f1523"
	},
	{
		"id": "2a90c723d309",
		"ts": "2026-10-12T16:27:04.715Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1146180.56,
		"hash": "2a90c723d30984d39045e1453405860795ffb18423bf5cb8ef05791f2abd499d"
	},
	{
		"id": "318c80a14f9f",
		"ts": "2026-10-12T16:27:04.929Z",
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
		"liquidityUsd": 331040.75,
		"hash": "318c80a14f9f435ac5102703b191ff0a2d23862447b67472f06e4114f4d229b0"
	},
	{
		"id": "14daf946dcef",
		"ts": "2026-10-12T16:27:05.136Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1555530.61,
		"hash": "14daf946dcef5f35f44f22cd7d222bbf9cf55580a64ce41259a18ecbce372c00"
	},
	{
		"id": "73bba0be994f",
		"ts": "2026-10-12T16:27:05.343Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 230938.89,
		"hash": "73bba0be994f614764c4541bf0eb02487460dcc878605c863245a9d445694dad"
	},
	{
		"id": "090ca926e04d",
		"ts": "2026-10-12T16:27:05.556Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 105326.57,
		"hash": "090ca926e04db73f896114abb193d2eb517814db025978bc4c42d1a539ec0b35"
	},
	{
		"id": "58408550c82e",
		"ts": "2026-10-12T16:27:05.775Z",
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
		"liquidityUsd": 3208345.87,
		"hash": "58408550c82ee5461e142f3c680d36dd2575865d1a45f7022b73bc38a9cb4ce3"
	},
	{
		"id": "bdf04a7f3070",
		"ts": "2026-10-12T06:54:41.661Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 150672549.8,
		"hash": "bdf04a7f307089dcf6b321b49e73b091532c2dae8e3b8552697e9e39333fd224"
	},
	{
		"id": "10282f0a0369",
		"ts": "2026-10-12T06:54:41.894Z",
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
		"liquidityUsd": 18601621.23,
		"hash": "10282f0a0369a26e69a36955e4280561eee171000bb2e20522bf9a837ba11d99"
	},
	{
		"id": "4603f1b1fc2b",
		"ts": "2026-10-12T06:54:42.107Z",
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
		"liquidityUsd": 814578.99,
		"hash": "4603f1b1fc2b952969b8a03effaccec2952dd3893de2a1e2cbc437ac2fe1e75a"
	},
	{
		"id": "8dd3a382458b",
		"ts": "2026-10-12T06:54:42.351Z",
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
		"liquidityUsd": 42931524.92,
		"hash": "8dd3a382458b165422e1dbd6acc717aaf0e03b1fdebf25feced1db76c9d2ba10"
	},
	{
		"id": "ba82702111cc",
		"ts": "2026-10-12T06:54:42.552Z",
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
		"liquidityUsd": 4990127.72,
		"hash": "ba82702111cc1ee3c9a692e51d885140e01304a97a6188bb0d4c844dc5108da6"
	},
	{
		"id": "1100c5c5235d",
		"ts": "2026-10-12T06:54:42.846Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1270195.98,
		"hash": "1100c5c5235d2a599d17b615586285cdddb3f066cb3d2f23776180d6a9e48f92"
	},
	{
		"id": "06d46f60a099",
		"ts": "2026-10-12T06:54:43.051Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42931525.92,
		"hash": "06d46f60a099ba5a9d52987d61be9316fcf52bb221c4a3785bd76bc166111e36"
	},
	{
		"id": "4f9eb51a0cfa",
		"ts": "2026-10-12T06:54:43.249Z",
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
		"liquidityUsd": 815227.89,
		"hash": "4f9eb51a0cfa7ce23d897fe045ec8f7af3127b02c6bd2371026b8867a29d4e9b"
	},
	{
		"id": "5661bad5a4ae",
		"ts": "2026-10-12T06:54:43.477Z",
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
		"liquidityUsd": 1907243.39,
		"hash": "5661bad5a4aea2ed51b800135fec61b61f5e3703d477672ddce5571d6d69a3db"
	},
	{
		"id": "bb81d2e2d72d",
		"ts": "2026-10-12T06:54:43.713Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 586554.4,
		"hash": "bb81d2e2d72db24c7e34e8a0ea34393fb3ef435f5c2448b7d35f608c06e0e0dd"
	},
	{
		"id": "4e818ef94515",
		"ts": "2026-10-12T06:54:43.926Z",
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
		"liquidityUsd": 16617640.79,
		"hash": "4e818ef945156971d3956bef5a4c605e55c6378758dedf41d8c7e57bf9c828fb"
	},
	{
		"id": "4d349c6c1616",
		"ts": "2026-10-12T06:54:44.121Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2284151.23,
		"hash": "4d349c6c1616efb538010deb3c274533bd1aa7c4748ad46ad74912d3b8476059"
	},
	{
		"id": "4071f15863d8",
		"ts": "2026-10-12T06:54:44.322Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5385741.92,
		"hash": "4071f15863d8356ade689c63df96ef0aa3070b006eedce62c35384ec9b7b4385"
	},
	{
		"id": "d40e69a618ec",
		"ts": "2026-10-12T06:54:44.581Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 111868.12,
		"hash": "d40e69a618ec5eea41ff7020b527c74e3c10e0aaf7bc45d88e25ebde970f6ce6"
	},
	{
		"id": "3337dbe431aa",
		"ts": "2026-10-12T06:54:44.779Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 744545.78,
		"hash": "3337dbe431aafb3730badaf16c602d890e20d6ef696daaf5eadde8364159e38c"
	},
	{
		"id": "47ac236af781",
		"ts": "2026-10-12T06:54:44.978Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 219150.71,
		"hash": "47ac236af7811113afb5565461a98d62d34dc2b4ed91674bc7b6276ebdeda1d3"
	},
	{
		"id": "83f3a6b70510",
		"ts": "2026-10-12T06:54:45.188Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 5035858.42,
		"hash": "83f3a6b70510e8411ae3bed745c043eecbff032054e4ea90f05ad24dbc90bb9e"
	},
	{
		"id": "446dde53b441",
		"ts": "2026-10-12T06:54:45.397Z",
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
		"liquidityUsd": 3297759.27,
		"hash": "446dde53b4414baa2324164f25e8c41165469ac0202c1c8d6f451c8b0b21ef10"
	},
	{
		"id": "c9579e03ada7",
		"ts": "2026-10-12T06:54:45.610Z",
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
		"liquidityUsd": 348393.2,
		"hash": "c9579e03ada7cad04ca6d66efa6105def3ac630b17a2ef700dd577292294702d"
	},
	{
		"id": "964d0de40fc1",
		"ts": "2026-10-12T00:10:34.986Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 149457172.33,
		"hash": "964d0de40fc1c121cd5a104440d2eb915daa7ea38f4813cb3927ebb1bf176c06"
	},
	{
		"id": "91e2706bf19e",
		"ts": "2026-10-12T00:10:35.260Z",
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
		"liquidityUsd": 18479811.83,
		"hash": "91e2706bf19e351104ac1f8ac54dd856d34acc9aa7e3740098df13b7c29c1613"
	},
	{
		"id": "608fd4499126",
		"ts": "2026-10-12T00:10:35.514Z",
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
		"liquidityUsd": 813497.48,
		"hash": "608fd449912604d5b7b59c1a3b8016b08c63cc5efbaa694f7a17bcc127266d2e"
	},
	{
		"id": "00fccc116fe7",
		"ts": "2026-10-12T00:10:35.776Z",
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
		"liquidityUsd": 42942594.46,
		"hash": "00fccc116fe716412b0a3ae4216faa69ae2d1ddca36ad1fb0e713bbc401f17b8"
	},
	{
		"id": "0823c3d48d99",
		"ts": "2026-10-12T00:10:36.024Z",
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
		"liquidityUsd": 4968073.62,
		"hash": "0823c3d48d99a5bba0b400ce3cd188ad27854cfcc28a84182ed8829043c21d48"
	},
	{
		"id": "85a2ceb768bf",
		"ts": "2026-10-12T00:10:36.276Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1267174.1,
		"hash": "85a2ceb768bf9520ef8cca2f4ddd6f4ffa23e43f965880ad47eb3b7cc53fb820"
	},
	{
		"id": "224f56f4eb9d",
		"ts": "2026-10-12T00:10:36.523Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42942594.46,
		"hash": "224f56f4eb9d05054fef072f4e08e3cec47fef99cd1f751ceca1bd2bcf6e4c61"
	},
	{
		"id": "60fba233b2ff",
		"ts": "2026-10-12T00:10:36.773Z",
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
		"liquidityUsd": 2300926.48,
		"hash": "60fba233b2ffb9fe9f8b99645a7d53dfbf9d8e3325509818c33e127f76e736b8"
	},
	{
		"id": "135922d635e1",
		"ts": "2026-10-12T00:10:37.021Z",
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
		"liquidityUsd": 1950936.82,
		"hash": "135922d635e162a5dc8926e60fe1f25a2d48e1ba3a9f370507114f6b564d413e"
	},
	{
		"id": "863ad370e4ec",
		"ts": "2026-10-12T00:10:37.275Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 16460832.87,
		"hash": "863ad370e4eca3aee6f7cefb15a9ee0319e12e0759dd273bdb988e86129a0c5e"
	},
	{
		"id": "0f79c88ae81e",
		"ts": "2026-10-12T00:10:37.509Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2277288.96,
		"hash": "0f79c88ae81e04b735bf6c121a4681d4e251feb1b5116485f4c535399e067bc3"
	},
	{
		"id": "6c4c0404ab97",
		"ts": "2026-10-12T00:10:37.742Z",
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
		"liquidityUsd": 609163.53,
		"hash": "6c4c0404ab97aa3f9fce04a3b41caffbddd256a7415c0616704f7e9d53d089ae"
	},
	{
		"id": "374fc4218f32",
		"ts": "2026-10-12T00:10:37.980Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 5354032.08,
		"hash": "374fc4218f324c68c09df0a0e5257edeff56b78171ff9ba07e34b276e2516523"
	},
	{
		"id": "b02d510f95ea",
		"ts": "2026-10-12T00:10:38.215Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 593284.47,
		"hash": "b02d510f95eaef338cd58bc4a152a93a7be19e1a587d93231db046474205c3e3"
	},
	{
		"id": "1013f74bf25d",
		"ts": "2026-10-12T00:10:38.505Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 118734.38,
		"hash": "1013f74bf25d86dc55b0831dd87948387d0518607f300e7666c699629a8c0db1"
	},
	{
		"id": "a6c02e577194",
		"ts": "2026-10-12T00:10:38.767Z",
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
		"liquidityUsd": 3306381.43,
		"hash": "a6c02e577194caa429a043de454df5aab8a748fea8fb152681329120030af951"
	},
	{
		"id": "d3e9e2effec0",
		"ts": "2026-10-12T00:10:39.000Z",
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
		"liquidityUsd": 368387.35,
		"hash": "d3e9e2effec044664200da5d41695749fcc06a25d0703fc1eef13109c7596bce"
	},
	{
		"id": "52769ed3209b",
		"ts": "2026-10-12T00:10:39.232Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 402658.07,
		"hash": "52769ed3209b124fd2fe0c166ee225e6944d9e8f00e45f595785ff45fa0951bd"
	},
	{
		"id": "5c68174b5867",
		"ts": "2026-10-12T00:10:39.464Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 195774.11,
		"hash": "5c68174b5867b45ad9af29172bb1b4b37b867f5a366c21625b60e0cdd235448e"
	},
	{
		"id": "f7d0764fac9c",
		"ts": "2026-10-11T20:45:50.596Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 149647745.33,
		"hash": "f7d0764fac9c88edd0fdf363d7498c6bf0072ee5d136a6716fa280ffd63d55c5"
	},
	{
		"id": "52f58a6af170",
		"ts": "2026-10-11T20:45:51.398Z",
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
		"liquidityUsd": 18496198.49,
		"hash": "52f58a6af170affe7742407ad18b3f3be4f5aa9abda8f98e27135030a0d27d53"
	},
	{
		"id": "ec3d5bab2e17",
		"ts": "2026-10-11T20:45:51.748Z",
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
		"liquidityUsd": 814198.53,
		"hash": "ec3d5bab2e17fd698a82410f418eb1de7fc200c6cde9f96bcf1710cf2236e31f"
	},
	{
		"id": "f9d9cf17cf3f",
		"ts": "2026-10-11T20:45:52.047Z",
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
		"liquidityUsd": 42821796.15,
		"hash": "f9d9cf17cf3f685ad6ada048fd7fbfef17fca2c8ae1f07b370eb7108f36f8624"
	},
	{
		"id": "cfdcf3df2435",
		"ts": "2026-10-11T20:45:52.347Z",
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
		"liquidityUsd": 4970720.72,
		"hash": "cfdcf3df2435f0ad2d7e236d16c11441a9b9da5adafcc9aa4adc5f736a0b8350"
	},
	{
		"id": "431a1d333628",
		"ts": "2026-10-11T20:45:52.652Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1271098.36,
		"hash": "431a1d3336282a4569f520e9afff14b1b0e8691665bbdd2fe6ecdcc1b364ff93"
	},
	{
		"id": "7f04c07ea2d5",
		"ts": "2026-10-11T20:45:52.946Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42821796.15,
		"hash": "7f04c07ea2d5fa29c861d27bd404259ed3ed8cf82dd88effa4b12dc37f94e165"
	},
	{
		"id": "da4862d6ad74",
		"ts": "2026-10-11T20:45:53.270Z",
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
		"liquidityUsd": 2300844.95,
		"hash": "da4862d6ad74cbaad9a11376010e7bb11e5a56b4994e48c33fb2e803887515a6"
	},
	{
		"id": "c680129c601d",
		"ts": "2026-10-11T20:45:53.575Z",
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
		"liquidityUsd": 1952461.78,
		"hash": "c680129c601d1f4b94984647b2d5d2da7b2a163eb7c51c20f4e54a15bb771f4a"
	},
	{
		"id": "87b043812df5",
		"ts": "2026-10-11T20:45:53.874Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 16355782.53,
		"hash": "87b043812df5e05ab121dcdfa2b010b813a5d86598e75e13af90e5129be6a8f1"
	},
	{
		"id": "d6c8014c096b",
		"ts": "2026-10-11T20:45:54.170Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2274819.37,
		"hash": "d6c8014c096bad97382c768eeb44c7c06a84693d17912ca66150cdae4b3382e5"
	},
	{
		"id": "56ad8d391704",
		"ts": "2026-10-11T20:45:54.466Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 5341147.63,
		"hash": "56ad8d39170400f8cd3f49ed341d6d723f59f861f6964e79c448f541c50557f7"
	},
	{
		"id": "39ee2a3c6619",
		"ts": "2026-10-11T20:45:54.746Z",
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
		"liquidityUsd": 597775,
		"hash": "39ee2a3c66190b31573ed860a0eb6a891c6ecf5cb49f3632540fa71074deb07b"
	},
	{
		"id": "a269709062ef",
		"ts": "2026-10-11T20:45:55.031Z",
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
		"liquidityUsd": 354869.31,
		"hash": "a269709062efc6ef2eb200ffa9bc1dff990e2ff6fbe0ea34c3f5d604c624b24c"
	},
	{
		"id": "dca0d3d46b19",
		"ts": "2026-10-11T20:45:55.311Z",
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
		"liquidityUsd": 3327742.92,
		"hash": "dca0d3d46b19a5ff96678604afbc1c9e08e7b7427e50618694d8af95f26346bc"
	},
	{
		"id": "96291db97ae5",
		"ts": "2026-10-11T20:45:55.591Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 193311.19,
		"hash": "96291db97ae592e8c5a1b8e0e816c3d336f7de8b0b342a445c7febcd97dd915f"
	},
	{
		"id": "94ba96cdddde",
		"ts": "2026-10-11T20:45:55.823Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 592907.26,
		"hash": "94ba96cdddded8c60fcf0c0d1aa89dab67306826b9a32100086c6b03df962f51"
	},
	{
		"id": "8f1be3cfdd4f",
		"ts": "2026-10-11T20:45:56.102Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1575808.1,
		"hash": "8f1be3cfdd4f1cca225aa44e1ae35c2f807cce3f7cc5bb408e86a09e2bc1e57b"
	},
	{
		"id": "f210b17f6222",
		"ts": "2026-10-11T16:30:42.728Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 149762163.66,
		"hash": "f210b17f6222660057b9d82afa1ff2dfc6c69d737616e7a20dc12b7c08b9d1cb"
	},
	{
		"id": "f39b005dfcdc",
		"ts": "2026-10-11T16:30:42.999Z",
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
		"liquidityUsd": 18457715.62,
		"hash": "f39b005dfcdcad464a14afe22bdea4dae49d1cfae4b9c3f849edb01153de4df4"
	},
	{
		"id": "915cbcb205c3",
		"ts": "2026-10-11T16:30:43.264Z",
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
		"liquidityUsd": 814949.96,
		"hash": "915cbcb205c3f79d88e3f6bda8b55e1361bdf7a5a98ce93c3e08738242604d47"
	},
	{
		"id": "dcdc2f7f4aba",
		"ts": "2026-10-11T16:30:43.752Z",
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
		"liquidityUsd": 44316413.87,
		"hash": "dcdc2f7f4aba3294ea678f0eee2906eb523aed7d969525941d2e1f1e350c3104"
	},
	{
		"id": "87dd5c24f478",
		"ts": "2026-10-11T16:30:44.032Z",
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
		"liquidityUsd": 4989540.12,
		"hash": "87dd5c24f4786e9340dca12e58b2a096f229e505657f91d28ebdeee9b2fe268b"
	},
	{
		"id": "019558ed76f8",
		"ts": "2026-10-11T16:30:44.291Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1280111.96,
		"hash": "019558ed76f8e7a9db94179ce7a3dab6d8fc99edfafb40e14992bee74a182661"
	},
	{
		"id": "b60c076866cd",
		"ts": "2026-10-11T16:30:44.545Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 44316413.87,
		"hash": "b60c076866cd09d51cace936b56a8937ac9009964a663cde344c3e268f086015"
	},
	{
		"id": "b5680c97f2e3",
		"ts": "2026-10-11T16:30:44.823Z",
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
		"liquidityUsd": 2298832.6,
		"hash": "b5680c97f2e313c5a1e668605c15ed3f18142998b421eabfabfa817b72a82a08"
	},
	{
		"id": "54a64e9bb36c",
		"ts": "2026-10-11T16:30:45.104Z",
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
		"liquidityUsd": 1980197.14,
		"hash": "54a64e9bb36cd8b6cb597d11f73508e08dce20f578835d798fca9d45a75f2081"
	},
	{
		"id": "0fb4e6466dcf",
		"ts": "2026-10-11T16:30:45.372Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 16225258.79,
		"hash": "0fb4e6466dcf26c745f0cdeeaa206399efb00bbf691622509619bb5492362955"
	},
	{
		"id": "ce0af345b917",
		"ts": "2026-10-11T16:30:45.615Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 5282159.63,
		"hash": "ce0af345b91755239d158f347ae752393a8e99133f607752063c019ffbe57890"
	}
]
