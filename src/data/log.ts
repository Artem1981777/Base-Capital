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
	"updatedAt": "2026-10-07T09:43:35.867Z",
	"tokensScored": 19612,
	"verdictsIssued": 19612,
	"safe": 16701,
	"risky": 1405,
	"likelyRug": 1506,
	"ticks": 1112
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "d0df59e5e4a0",
		"ts": "2026-10-07T09:43:30.852Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 159038230.35,
		"hash": "d0df59e5e4a02d1f54caf9291a0d0eb2b7173bc4322629ddf1b1979cf6f1f869"
	},
	{
		"id": "47aced783c40",
		"ts": "2026-10-07T09:43:31.545Z",
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
		"liquidityUsd": 17104990.02,
		"hash": "47aced783c40e47951ae37cfaa4e399a2cf227cb72111a390468bee7463d6cc6"
	},
	{
		"id": "7e53abea51e5",
		"ts": "2026-10-07T09:43:31.820Z",
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
		"liquidityUsd": 833553.56,
		"hash": "7e53abea51e5f47d2368bc2e289393b6f62d3bbbc48dacc52e9b29a366d2c44e"
	},
	{
		"id": "7437c98db02d",
		"ts": "2026-10-07T09:43:32.093Z",
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
		"liquidityUsd": 43580433.73,
		"hash": "7437c98db02d834e3b62d82777b0ad66dca0d3c011af4a01ad2cc130908da17b"
	},
	{
		"id": "b5e8737315d1",
		"ts": "2026-10-07T09:43:32.350Z",
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
		"liquidityUsd": 4482006.66,
		"hash": "b5e8737315d1e641211b2ca91016f0388702a1a883e2c4fd9cd888642ced3ac6"
	},
	{
		"id": "fe327eeaf355",
		"ts": "2026-10-07T09:43:32.631Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1259290.04,
		"hash": "fe327eeaf355954746ef7f30285c8e7a81bf6a2c210babcd8432f3f4bbf0d1c3"
	},
	{
		"id": "0dca2205c61e",
		"ts": "2026-10-07T09:43:32.888Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 43580433.73,
		"hash": "0dca2205c61eaecb44a87e31f6a990c8c2600e0d798ee536cb9c9069e54d2839"
	},
	{
		"id": "b8d6dc212e34",
		"ts": "2026-10-07T09:43:33.143Z",
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
		"liquidityUsd": 584569.63,
		"hash": "b8d6dc212e34b2dadd0c38911fcfbce3b84e63035162cb8833d1cd624dd88726"
	},
	{
		"id": "39daee8564d1",
		"ts": "2026-10-07T09:43:33.397Z",
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
		"liquidityUsd": 1769601.23,
		"hash": "39daee8564d1795e63e55e6b04b444fd13a453419df1b3e702666f52846a5069"
	},
	{
		"id": "443fc693e1ba",
		"ts": "2026-10-07T09:43:33.661Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 183162.79,
		"hash": "443fc693e1baf938efbe2907e2adb50f485396bcf17216084d90385f47a70271"
	},
	{
		"id": "b4f58a93e013",
		"ts": "2026-10-07T09:43:33.901Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 211514.6,
		"hash": "b4f58a93e013b8bb81f8c23ee5b6bf084911b0cf8d324c7ff0492ede469860cc"
	},
	{
		"id": "5c0bea12d460",
		"ts": "2026-10-07T09:43:34.138Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3651234.22,
		"hash": "5c0bea12d460f0fc7c045ee36b494b2d4e65d0548478757774ea4f82c4673211"
	},
	{
		"id": "f9e46d86c886",
		"ts": "2026-10-07T09:43:34.375Z",
		"symbol": "ZEN",
		"token": "0xf43eB8De897Fbc7F2502483B2Bef7Bb9EA179229",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2661325.66,
		"hash": "f9e46d86c8862fd00617772a3f1a63d5ff9d041e809cb303f492ae222cb62d81"
	},
	{
		"id": "798e127c12db",
		"ts": "2026-10-07T09:43:34.619Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1333303.85,
		"hash": "798e127c12db45aeb72d91ff2a97e347a027457c83be434d984d6ad5b395cc41"
	},
	{
		"id": "e59c7190035f",
		"ts": "2026-10-07T09:43:34.858Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1583980.18,
		"hash": "e59c7190035ffb1c64500aa1ef9337f2a634bb90ae5d698f0c0eb14bd5584ae2"
	},
	{
		"id": "5621f95a3e42",
		"ts": "2026-10-07T09:43:35.138Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5291872.03,
		"hash": "5621f95a3e42ff77663c297aa0b3d1b394ead9efefa8606f441a87310c324094"
	},
	{
		"id": "ac93c00fe3c5",
		"ts": "2026-10-07T09:43:35.380Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2428253.88,
		"hash": "ac93c00fe3c5ba7ebdd5e3280c5582d0c3fa6f77f3116674c4330bb731ba27f9"
	},
	{
		"id": "20172dfbf25f",
		"ts": "2026-10-07T09:43:35.620Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 388423.05,
		"hash": "20172dfbf25f57c56e4e2c1176a423998ccdac4f6a0fbf69bf0be261334a2696"
	},
	{
		"id": "b957a6a0e816",
		"ts": "2026-10-07T09:43:35.867Z",
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
		"liquidityUsd": 1209402.63,
		"hash": "b957a6a0e816f8a0e0c7693477d64947556639cdd926623c93a07964f46a609f"
	},
	{
		"id": "8cd808c78ae4",
		"ts": "2026-10-07T02:02:02.311Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 162362820.66,
		"hash": "8cd808c78ae4952616b37280a0dc4e2ab43a7bf770c308df2e2fb57aa2002c8a"
	},
	{
		"id": "ccbac085a2b9",
		"ts": "2026-10-07T02:02:02.576Z",
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
		"liquidityUsd": 14060317.09,
		"hash": "ccbac085a2b99cae1b89c6eadf684edd8797cd2163cc5eb51edb4a7ffe7e146f"
	},
	{
		"id": "0133aa2e0be9",
		"ts": "2026-10-07T02:02:03.022Z",
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
		"liquidityUsd": 852982.01,
		"hash": "0133aa2e0be907444389eb2bf0652e2809c8caa2bedab1b77c9686dff8e7c004"
	},
	{
		"id": "fc9b4bdfdcc8",
		"ts": "2026-10-07T02:02:03.273Z",
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
		"liquidityUsd": 43657099.99,
		"hash": "fc9b4bdfdcc85bf3200169347c8cb7f9979a536ce377ed9acac07c8e164d92cb"
	},
	{
		"id": "784144a882f7",
		"ts": "2026-10-07T02:02:03.738Z",
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
		"liquidityUsd": 4568038.76,
		"hash": "784144a882f7f72f75a6d596d9391f39229fb5381503a53f3ab33fa9214620e8"
	},
	{
		"id": "235d17d88379",
		"ts": "2026-10-07T02:02:03.979Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1312005.22,
		"hash": "235d17d883793ace1aa4ef567f71481e6cd729303e148ec43937765bea02059f"
	},
	{
		"id": "a229987c351d",
		"ts": "2026-10-07T02:02:04.227Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 43657099.99,
		"hash": "a229987c351d1720a9c83970c045f31d15d3a975808977b614c34f20347d3dfb"
	},
	{
		"id": "a1733cb69873",
		"ts": "2026-10-07T02:02:04.478Z",
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
		"liquidityUsd": 2436508.4,
		"hash": "a1733cb698731a60abd2b2d038cc59b76be618ce1790c08225600a4ce0282a79"
	},
	{
		"id": "8c78241ddb5a",
		"ts": "2026-10-07T02:02:04.721Z",
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
		"liquidityUsd": 1852385.3,
		"hash": "8c78241ddb5a83a26ce64120b26346b8a452339bc991a7c756fe95388ba77c86"
	},
	{
		"id": "d54033136710",
		"ts": "2026-10-07T02:02:04.961Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 138936.6,
		"hash": "d540331367104334715943a1c1f1c36b380637d30a73fe57ef12587924dc7e41"
	},
	{
		"id": "beaf52f13e83",
		"ts": "2026-10-07T02:02:05.196Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3718560.36,
		"hash": "beaf52f13e834f031a35aa48e92f8fa4ee868982dfb3eadc60c6d21c575d0ef4"
	},
	{
		"id": "ef213cbee01c",
		"ts": "2026-10-07T02:02:05.433Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5532881.76,
		"hash": "ef213cbee01c18fbfa31b9b64fe7aaeb02fe2969d95e9c4507a4e75c4e9ff79d"
	},
	{
		"id": "d28ab469c8ab",
		"ts": "2026-10-07T02:02:05.656Z",
		"symbol": "ZEN",
		"token": "0xf43eB8De897Fbc7F2502483B2Bef7Bb9EA179229",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2529927.2,
		"hash": "d28ab469c8ab1283ea9eeb7d5f07694c816b2034d81aa347d73c3e391fbf89c6"
	},
	{
		"id": "f93caf0a9067",
		"ts": "2026-10-07T02:02:05.894Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1656903.76,
		"hash": "f93caf0a90677a277db5ea0278353e1cc87a5f42dc8bc554ed477743cb6f17b9"
	},
	{
		"id": "2ca66bff6342",
		"ts": "2026-10-07T02:02:06.130Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 230928.58,
		"hash": "2ca66bff6342f7601957d90704a390ab77d3e8db659cd5e5f49228ac3cbe6f56"
	},
	{
		"id": "e6e7e5121d61",
		"ts": "2026-10-07T02:02:06.364Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 400041.88,
		"hash": "e6e7e5121d61ad575002878960a72194d6962ce7dc9bc44f803bc5f794f9deab"
	},
	{
		"id": "a302adfd01ae",
		"ts": "2026-10-07T02:02:06.594Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1447658.99,
		"hash": "a302adfd01ae54dfaaeb5c8dbb640a1cd8662eb9add882a700b5cd1de0a79d6f"
	},
	{
		"id": "04b3637dba55",
		"ts": "2026-10-07T02:02:06.818Z",
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
		"liquidityUsd": 1218088.94,
		"hash": "04b3637dba55275cb02e89e71f5616b9a4beaf3294682ea4b57a4d78d006ed5b"
	},
	{
		"id": "a1946c5918b8",
		"ts": "2026-10-07T02:02:07.057Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18152658.67,
		"hash": "a1946c5918b80c9380ce2ab5fff9caf0023d15fc29752a4071371d7e5b8290aa"
	},
	{
		"id": "de112d871f14",
		"ts": "2026-10-06T22:15:36.386Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 163642268.77,
		"hash": "de112d871f14068008c9309dd576b5df8f55a230a02eea427689550bf82ae6e2"
	},
	{
		"id": "ed4eb02e5d19",
		"ts": "2026-10-06T22:15:36.627Z",
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
		"liquidityUsd": 17243614.94,
		"hash": "ed4eb02e5d19cc08b14885234dd083d0b6963c893b3db959f363b4639209ba45"
	},
	{
		"id": "35969cdacf75",
		"ts": "2026-10-06T22:15:36.830Z",
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
		"liquidityUsd": 852972.94,
		"hash": "35969cdacf75b52ef994864515460006c9a0ee12b876b0423359ae9a7ae0492d"
	},
	{
		"id": "73ac20ef8b2c",
		"ts": "2026-10-06T22:15:37.023Z",
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
		"liquidityUsd": 43903229.32,
		"hash": "73ac20ef8b2caf3b04ca0c301ab78efcf6c03ec53b33e92f2706bd0387f2176e"
	},
	{
		"id": "0581ed8c2f66",
		"ts": "2026-10-06T22:15:37.220Z",
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
		"liquidityUsd": 4643672.06,
		"hash": "0581ed8c2f662d8f2f53c324e88d6ba38f6653d196cbde80f4df091f36b23e6b"
	},
	{
		"id": "8370a8544593",
		"ts": "2026-10-06T22:15:37.416Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1332314.09,
		"hash": "8370a8544593ffb88057d8d9df7f6942413b5ef7004e933c13d947b2f9b05057"
	},
	{
		"id": "b4815ebf3965",
		"ts": "2026-10-06T22:15:37.607Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 43903229.32,
		"hash": "b4815ebf3965cfbd204f2897c0533664afb529e89c0c91a389018e2287ceb71a"
	},
	{
		"id": "62be274487fc",
		"ts": "2026-10-06T22:15:37.817Z",
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
		"liquidityUsd": 2453041.94,
		"hash": "62be274487fc706b5ac81c04b32b863b87da5dcf58868d7d0f7902ed94d587ab"
	},
	{
		"id": "ea4dd5d73201",
		"ts": "2026-10-06T22:15:38.013Z",
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
		"liquidityUsd": 1800187.43,
		"hash": "ea4dd5d73201e1b39a6a55132f08983be44cfbe31ec6a4717be926cf8b5e4cf4"
	},
	{
		"id": "f01bcff4017d",
		"ts": "2026-10-06T22:15:38.208Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 175640.87,
		"hash": "f01bcff4017dea87a996dbd58bfe8ef1ee6bd4ba05669ca54ffa61e15609b56e"
	},
	{
		"id": "4662b5518305",
		"ts": "2026-10-06T22:15:38.397Z",
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
		"liquidityUsd": 1249288.64,
		"hash": "4662b55183055a0cc03fa6bd041c1f94da7627f0c41ea429f37985891b01ae38"
	},
	{
		"id": "49ff08336c4c",
		"ts": "2026-10-06T22:15:38.586Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3787457.05,
		"hash": "49ff08336c4caf246366891e38de256d3a6993ed45088edafa62c8f3900129de"
	},
	{
		"id": "2a592fa6fd98",
		"ts": "2026-10-06T22:15:38.767Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5537211.18,
		"hash": "2a592fa6fd9876f3ad8872d5aaf425e6cd045e096136b82edcb73761af630f5d"
	},
	{
		"id": "7de4300701da",
		"ts": "2026-10-06T22:15:38.947Z",
		"symbol": "ZEN",
		"token": "0xf43eB8De897Fbc7F2502483B2Bef7Bb9EA179229",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2825936.37,
		"hash": "7de4300701da87f23db1ad0f865e63725cc5deea48522394dedca20258043d5d"
	},
	{
		"id": "6a5484ad8177",
		"ts": "2026-10-06T22:15:39.155Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2504802.68,
		"hash": "6a5484ad8177006b45426ab070fb2848cb8e73eaddeefb5d8aa80f9dc78ce9c2"
	},
	{
		"id": "a95ac43e197f",
		"ts": "2026-10-06T22:15:39.339Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1678541.11,
		"hash": "a95ac43e197f59bfe4ec94703a0843977b1d09cf9f1f167b5c824d4958461181"
	},
	{
		"id": "ed4b1c6b20da",
		"ts": "2026-10-06T22:15:39.526Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1470453.25,
		"hash": "ed4b1c6b20da5069227650be843abd18cf7420ff000a8f5b99a85caed059a684"
	},
	{
		"id": "593d8ab9661c",
		"ts": "2026-10-06T22:15:39.714Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 235827.77,
		"hash": "593d8ab9661cecc230a2fef49a7a9b78684d5b5a37ef8b488249e60966733bdc"
	},
	{
		"id": "8dec74bccc24",
		"ts": "2026-10-06T22:15:39.892Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 385492.11,
		"hash": "8dec74bccc243923ac00d1139cc4478e4fa8ba15099ab94f57b2e3a6b0f5ae64"
	},
	{
		"id": "de42c2717353",
		"ts": "2026-10-06T17:51:21.701Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 163568653.31,
		"hash": "de42c271735348d443342a2bc90615ef83e514aa29163af19f82f30168957d49"
	},
	{
		"id": "78d643d158a6",
		"ts": "2026-10-06T17:51:21.983Z",
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
		"liquidityUsd": 17045564.22,
		"hash": "78d643d158a6dac5317752a53104eca57dacc2f47ec1e6788061050ede8bf22c"
	},
	{
		"id": "a8ef4933f2d2",
		"ts": "2026-10-06T17:51:22.262Z",
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
		"liquidityUsd": 854435.63,
		"hash": "a8ef4933f2d29441feab3849ba2dbec139d6bf60caf647d43b6339a31a3b162f"
	},
	{
		"id": "009b4b68b74e",
		"ts": "2026-10-06T17:51:22.536Z",
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
		"liquidityUsd": 43613961.82,
		"hash": "009b4b68b74e005670a651562fe8aa3f6f48946e12ed6d7f1407131381c4646f"
	},
	{
		"id": "21370adab0ff",
		"ts": "2026-10-06T17:51:22.811Z",
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
		"liquidityUsd": 4668599.53,
		"hash": "21370adab0ff969482f6a8626bd05ec30b864c2b889723172be3c5451e778c5e"
	},
	{
		"id": "dce9f7079856",
		"ts": "2026-10-06T17:51:23.080Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1342147.6,
		"hash": "dce9f7079856e9a607b8853db654a2ebb7ee9a8eacb8c740200f447f03638e1e"
	},
	{
		"id": "029fbb02e459",
		"ts": "2026-10-06T17:51:23.361Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 43613961.82,
		"hash": "029fbb02e4592ae70d71497447f8598fad5accddb1a7af186f25b266389aec64"
	},
	{
		"id": "bcd43a8b638b",
		"ts": "2026-10-06T17:51:23.641Z",
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
		"liquidityUsd": 2449870.27,
		"hash": "bcd43a8b638bf6704a02b781602a44d7df97c6e3f20bc0c6316d125df9b8de4e"
	},
	{
		"id": "1bc5fbb1001f",
		"ts": "2026-10-06T17:51:23.917Z",
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
		"liquidityUsd": 1258641.99,
		"hash": "1bc5fbb1001f3117b003c88319edd8be4f39091ea3ce8887b94044fb40c31b48"
	},
	{
		"id": "6680df2d84d9",
		"ts": "2026-10-06T17:51:24.187Z",
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
		"liquidityUsd": 1771888.55,
		"hash": "6680df2d84d9f3253f142664d719553568f2cdef2489dc6676c77a4d93ac4f74"
	},
	{
		"id": "8f242c04abd8",
		"ts": "2026-10-06T17:51:24.440Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 174984.15,
		"hash": "8f242c04abd82c129e73a217c6f0e70c30a648869748e2bfca13e1ff2618acc3"
	},
	{
		"id": "6c17681b0072",
		"ts": "2026-10-06T17:51:24.690Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4154910.65,
		"hash": "6c17681b0072274cf15d539377c07a6a1ac572dc005a04fe639425a346d630a7"
	},
	{
		"id": "f02c0e2c6646",
		"ts": "2026-10-06T17:51:24.938Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1135670.26,
		"hash": "f02c0e2c6646c09ba97c20b49a203c594e045e55b40b238369964247b668bd75"
	},
	{
		"id": "71e24032c6aa",
		"ts": "2026-10-06T17:51:25.194Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 257906.85,
		"hash": "71e24032c6aa8ea78e7b9ff9254ceff9df7cf5dd3a2a8bb58617f507cec47366"
	},
	{
		"id": "66ed08a48264",
		"ts": "2026-10-06T17:51:25.448Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5657152.78,
		"hash": "66ed08a48264ee87d36d8c9b51b4f38a5712c5bf052517a0bd25f3a92922d7b9"
	},
	{
		"id": "963b98153f89",
		"ts": "2026-10-06T17:51:25.709Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3791526.34,
		"hash": "963b98153f890b936711ef4321326640ac2eda303e3c67a2c9e8a89348c45c3a"
	},
	{
		"id": "de3d86608196",
		"ts": "2026-10-06T17:51:25.966Z",
		"symbol": "ZEN",
		"token": "0xf43eB8De897Fbc7F2502483B2Bef7Bb9EA179229",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2595078.15,
		"hash": "de3d8660819675af7c4643597f0342dac8b047d673801dea983cf9d16e876afb"
	},
	{
		"id": "bd3590f69074",
		"ts": "2026-10-06T17:51:26.227Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1688692.72,
		"hash": "bd3590f69074a2ab382a39c7d101be03984d792cf485f12f79b9b86865919840"
	},
	{
		"id": "8dd6081eea2a",
		"ts": "2026-10-06T17:51:26.479Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1457012.06,
		"hash": "8dd6081eea2a072904e1363eabaa4221554c400f6c2bd35d19f970c797f28000"
	},
	{
		"id": "1c34e279102c",
		"ts": "2026-10-06T11:44:15.568Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 163133169.5,
		"hash": "1c34e279102ca8a2f66f40d179a4a3440ffcd727f90ecdfe192f517878001736"
	},
	{
		"id": "2e547ee7278d",
		"ts": "2026-10-06T11:44:16.072Z",
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
		"liquidityUsd": 17152466.38,
		"hash": "2e547ee7278deec899895954e50a3dfb83096df21eec00b7658dbfafd15faaac"
	},
	{
		"id": "e797342760a9",
		"ts": "2026-10-06T11:44:16.516Z",
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
		"liquidityUsd": 859224.7,
		"hash": "e797342760a9eb260d93e3d39ada51f5c4e5dcc8f83ffce13ba392da538c1cb8"
	},
	{
		"id": "05ae7b6a9333",
		"ts": "2026-10-06T11:44:16.767Z",
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
		"liquidityUsd": 44679318.32,
		"hash": "05ae7b6a9333f98345aa43e361017a93b0482a98d8f11df2ee430986d444baf6"
	},
	{
		"id": "eeff63f20776",
		"ts": "2026-10-06T11:44:17.007Z",
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
		"liquidityUsd": 4761984.54,
		"hash": "eeff63f207763f34fb6c4ef6782df0a7bf286f58ce2df38e352f696408917d3e"
	},
	{
		"id": "111a52fd224d",
		"ts": "2026-10-06T11:44:17.261Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1328861.26,
		"hash": "111a52fd224da589ff01f09f2bc105d47194c03ed04f71fa77ff3171f5477136"
	},
	{
		"id": "0edb3e6cb01a",
		"ts": "2026-10-06T11:44:17.499Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 44679318.32,
		"hash": "0edb3e6cb01a4df7a3a763b165a5b5cde85f116bdc1e2969617e039f4dafe7d9"
	},
	{
		"id": "61f4f06ba8eb",
		"ts": "2026-10-06T11:44:17.752Z",
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
		"liquidityUsd": 2468638.85,
		"hash": "61f4f06ba8eb5b22db59b567c17df234a309382bda9417fdbb21a29cf746594e"
	},
	{
		"id": "11dd26165210",
		"ts": "2026-10-06T11:44:17.995Z",
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
		"liquidityUsd": 1316169.48,
		"hash": "11dd261652104d220a0e16399bc5350314bf9796a4e002253a18d1eb4831ca81"
	},
	{
		"id": "1a9a245ba562",
		"ts": "2026-10-06T11:44:18.247Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2677911.94,
		"hash": "1a9a245ba56230c24e8e00778e5537bdaf497d552856b4b6ee9f519405641bdc"
	},
	{
		"id": "a5dcbf8186f8",
		"ts": "2026-10-06T11:44:18.467Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 173313.3,
		"hash": "a5dcbf8186f8406fe72d3a5b82e79d2cf8f667f44f5371c8fcadd2aa99aaf588"
	},
	{
		"id": "786f77df3105",
		"ts": "2026-10-06T11:44:18.705Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4177801.87,
		"hash": "786f77df31059055ca93d3c9b3492bf85c59b52c7055c5255014cb5c26b73724"
	},
	{
		"id": "669bfa532f70",
		"ts": "2026-10-06T11:44:18.925Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1716150.31,
		"hash": "669bfa532f705a8bb773cc904cbde3dda0791f97b533318e2eb0a9bac1a25e3b"
	},
	{
		"id": "e8060995ccec",
		"ts": "2026-10-06T11:44:19.162Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 270205.1,
		"hash": "e8060995ccec82b197d15e2a223ca7f4cb153e1c36abeebc83c186c7e80aea95"
	},
	{
		"id": "91be665b99ec",
		"ts": "2026-10-06T11:44:19.383Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1153838.13,
		"hash": "91be665b99ecd0248558b36b6688f6a6fef7f6476dbe95b8610903ce64b2b8b6"
	},
	{
		"id": "11081b0263d5",
		"ts": "2026-10-06T11:44:19.616Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3881251.34,
		"hash": "11081b0263d5b9c262fe52dd18e58deeca4f3515563ba174e2e52017782cbff8"
	},
	{
		"id": "2ccdc7a79fd3",
		"ts": "2026-10-06T11:44:19.839Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5837380.25,
		"hash": "2ccdc7a79fd3334ee5fcab4c27b4ff87a800a47af25d0409c0dec208c19fdc8b"
	},
	{
		"id": "2f177f6b358b",
		"ts": "2026-10-06T11:44:20.073Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1507185.97,
		"hash": "2f177f6b358b2e61f5f2ac706d9529edd29af03f42d997dc2d1757a87fe42051"
	},
	{
		"id": "2f2df03ccc0b",
		"ts": "2026-10-06T11:44:20.296Z",
		"symbol": "ICP",
		"token": "0x00f3C42833C3170159af4E92dbb451Fb3F708917",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 735051.11,
		"hash": "2f2df03ccc0be6a8e58de68d2717e6b1040f9ee3b41ac2c6eb6f096b9ccbb45c"
	},
	{
		"id": "4d8679fb6f3d",
		"ts": "2026-10-06T04:39:32.697Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 162343350.09,
		"hash": "4d8679fb6f3deed0393f10fdd575cc97f44bbdad96febbd1a6d012e78189aa4d"
	},
	{
		"id": "2031c2589ef8",
		"ts": "2026-10-06T04:39:32.898Z",
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
		"liquidityUsd": 15676719.13,
		"hash": "2031c2589ef8a8c6436ce76bd065dd7a4eaeefc14766ca00657ef35afc3b7824"
	},
	{
		"id": "e47162842f57",
		"ts": "2026-10-06T04:39:33.097Z",
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
		"liquidityUsd": 857810.1,
		"hash": "e47162842f575cb69679b646c42418ba6c431b48280e1440c1bf80bed528b6d9"
	},
	{
		"id": "4053529a9eb5",
		"ts": "2026-10-06T04:39:33.292Z",
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
		"liquidityUsd": 44831317.84,
		"hash": "4053529a9eb5dfd6e6bf1ef5bd2061871e305b41a4a37fa98c5081f729c746cf"
	},
	{
		"id": "e0e7e44f09ee",
		"ts": "2026-10-06T04:39:33.493Z",
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
		"liquidityUsd": 4761101.05,
		"hash": "e0e7e44f09ee10839e9ad073c3fb78406cdbe4e4919b411d9543ad863f453b6a"
	},
	{
		"id": "e24ef501f8b4",
		"ts": "2026-10-06T04:39:33.698Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1313430.03,
		"hash": "e24ef501f8b4830e8fcd51b1820baefefb8fe3311447f7321a6e2729556ec594"
	},
	{
		"id": "72688d2a3d7c",
		"ts": "2026-10-06T04:39:33.901Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 44831317.84,
		"hash": "72688d2a3d7c1890cf1a7699f73752bb387749c04378bd6d7b27675c0b90d5b0"
	},
	{
		"id": "de551bbec49a",
		"ts": "2026-10-06T04:39:34.108Z",
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
		"liquidityUsd": 559064.49,
		"hash": "de551bbec49a416e91c89fb249aaeec8340f7b5a7899122eb2797e513fda4ca0"
	},
	{
		"id": "3ea15b729701",
		"ts": "2026-10-06T04:39:34.298Z",
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
		"liquidityUsd": 1897826.02,
		"hash": "3ea15b729701fbc011e877cc259a81ad66a6d1b3539d4f42cf0ba27b6e8c011b"
	},
	{
		"id": "558d92746f10",
		"ts": "2026-10-06T04:39:34.496Z",
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
		"liquidityUsd": 1334272.31,
		"hash": "558d92746f10c82a7ca81eb44042e8b4b641cbdc70da381b51d4f63a75233f6d"
	},
	{
		"id": "3a8e8ab74d7b",
		"ts": "2026-10-06T04:39:34.697Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 171182.03,
		"hash": "3a8e8ab74d7b9bd017c2f3a43ff14c8562b1f57a0294db2593a278d63e6086be"
	},
	{
		"id": "040d9eb6b3cf",
		"ts": "2026-10-06T04:39:34.876Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1687450.07,
		"hash": "040d9eb6b3cf2ebf4578bcd66cadbc59f7c6adb86a838fb4f55a03617ea5a7f7"
	},
	{
		"id": "b729088d59b1",
		"ts": "2026-10-06T04:39:35.059Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1503903.71,
		"hash": "b729088d59b1f67506ccbcc2a9378b302e1b1971ea2e1b319f1eeee490e75eb8"
	},
	{
		"id": "26aeada2c5c1",
		"ts": "2026-10-06T04:39:35.244Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 292470.78,
		"hash": "26aeada2c5c15ad6b4c16f654a4b3f8e50e2ef26bf4f48d05f7c7994087a72f9"
	},
	{
		"id": "9029e20eab8b",
		"ts": "2026-10-06T04:39:35.444Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3867618.85,
		"hash": "9029e20eab8bd11e39d2057f25d0fadd2721a73a0b21a3b43809cea8c70ac46e"
	},
	{
		"id": "9ef610baf8df",
		"ts": "2026-10-06T04:39:35.637Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4155366.43,
		"hash": "9ef610baf8df5b2fc5372474693edf0242c0bf05de5bc7038b24461e5267380a"
	},
	{
		"id": "68535cee754c",
		"ts": "2026-10-06T04:39:35.938Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 19009788.81,
		"hash": "68535cee754c1d4ea0af0b80293ee464110f6d59c4e3b41d8d6782312accecca"
	},
	{
		"id": "2171cf8d453d",
		"ts": "2026-10-06T04:39:36.130Z",
		"symbol": "ICP",
		"token": "0x00f3C42833C3170159af4E92dbb451Fb3F708917",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 736569.24,
		"hash": "2171cf8d453d51234d0e48c0dd97cc0299d4c5dd2a11f6e39d72a990c2059902"
	},
	{
		"id": "bb42880d5738",
		"ts": "2026-10-06T04:39:36.313Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1157730.53,
		"hash": "bb42880d57380691c02ca693df2deb252073e9505428f3be2b3bd9eaa12bcbe8"
	},
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
	}
]
