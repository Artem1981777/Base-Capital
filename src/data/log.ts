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
	"updatedAt": "2026-10-05T01:32:57.791Z",
	"tokensScored": 19442,
	"verdictsIssued": 19442,
	"safe": 16551,
	"risky": 1396,
	"likelyRug": 1495,
	"ticks": 1103
}

export const verdicts: AgentVerdict[] = [
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
	},
	{
		"id": "07025e17429e",
		"ts": "2026-10-03T18:57:59.748Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1662410.6,
		"hash": "07025e17429e59fbf7255d48fc2581f62f0f7968f9fe89a4b3ed7ec89b28d152"
	},
	{
		"id": "16948fd66c66",
		"ts": "2026-10-03T18:57:59.961Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 184418.29,
		"hash": "16948fd66c66c5cb9399754cb14d557d95e8ec4d3493d180b927c78fa12c84d9"
	},
	{
		"id": "770ef2dde038",
		"ts": "2026-10-03T18:58:00.192Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 254965.16,
		"hash": "770ef2dde03839a31a2fc05a42447c586f97d3751abc1798e3f921b26b8d13be"
	},
	{
		"id": "b187783a4a34",
		"ts": "2026-10-03T18:58:00.419Z",
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
		"liquidityUsd": 1125563.2,
		"hash": "b187783a4a3467f8aaf4cfc5dce43dae78b055f8b8ba269de59625180db6b841"
	},
	{
		"id": "704bf3036c8a",
		"ts": "2026-10-03T18:58:00.656Z",
		"symbol": "BASEPAD",
		"token": "0xAeadc7084BC3C482921A8ad7EADc65F70E06106D",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 67482.1,
		"hash": "704bf3036c8a227136fe9bc9bececdc2614ea230ca0827ab24a3d1f9e119f06a"
	},
	{
		"id": "6076b26c3ec4",
		"ts": "2026-10-03T18:58:00.894Z",
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
		"liquidityUsd": 5990887.97,
		"hash": "6076b26c3ec4780ba626cd7fa29832458104916b3c95d36593abcaaf0fe66b08"
	},
	{
		"id": "7d65d296ee3e",
		"ts": "2026-10-03T18:58:01.121Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3525219.11,
		"hash": "7d65d296ee3e109bab60af621fc3edd4f92db1a7c8e5b82f439f0db12691c52b"
	},
	{
		"id": "4ed57eb4d229",
		"ts": "2026-10-03T18:58:02.103Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4116802.98,
		"hash": "4ed57eb4d229dbfe85e6c93e40c6e1f0fd687868fbf6cfac0e05d14f63d2d61a"
	},
	{
		"id": "794b43194c22",
		"ts": "2026-10-03T15:38:47.554Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 162427780.81,
		"hash": "794b43194c22175c41f6e1d65a6e6dd20777456f4ef19c5c377acdb6233893a3"
	},
	{
		"id": "f813a659abb5",
		"ts": "2026-10-03T15:38:48.228Z",
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
		"liquidityUsd": 16688846.39,
		"hash": "f813a659abb5474cb11c5f750cde5953153be53aeece9ec024016f803d899c96"
	},
	{
		"id": "9c4a21cf29c2",
		"ts": "2026-10-03T15:38:48.508Z",
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
		"liquidityUsd": 859149.76,
		"hash": "9c4a21cf29c20c247ca76afbda5fd68f666c4cb5eab9b7f1f0c34d653c8ad3ba"
	},
	{
		"id": "c6dda80f9e00",
		"ts": "2026-10-03T15:38:48.803Z",
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
		"liquidityUsd": 41696777.02,
		"hash": "c6dda80f9e003894abac1623b0deb5fe4d3cb4a680430558e26e5b6c5a72c5e3"
	},
	{
		"id": "be77d7446ebc",
		"ts": "2026-10-03T15:38:49.075Z",
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
		"liquidityUsd": 4597350.42,
		"hash": "be77d7446ebc428e7f213ce88cc2f1e00889f4d7ba0b0d4a4e93a6b1fe30d1d7"
	},
	{
		"id": "ba3ef7ea4e0e",
		"ts": "2026-10-03T15:38:49.353Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1320713.05,
		"hash": "ba3ef7ea4e0e8d309c11494f1a5666a7ad32145718028dc9323206b76b806c1e"
	},
	{
		"id": "3044a43ff01a",
		"ts": "2026-10-03T15:38:49.615Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41696776.12,
		"hash": "3044a43ff01aac9d29e8896e13743b1dd37a206a1d301f9a56e62247aa7eabf7"
	},
	{
		"id": "8bac686f3eb5",
		"ts": "2026-10-03T15:38:49.887Z",
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
		"liquidityUsd": 769483.84,
		"hash": "8bac686f3eb5a321c0d1cd26f7392b4dc5e095a4110a5072cd5b968ca14e4f0f"
	},
	{
		"id": "c853d79328f3",
		"ts": "2026-10-03T15:38:50.172Z",
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
		"liquidityUsd": 1843557.21,
		"hash": "c853d79328f3d0340125e9c7ea3c7bb9f13200acc2f9e96242d54e811b53ee05"
	},
	{
		"id": "504a8a68bed0",
		"ts": "2026-10-03T15:38:50.460Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1405670.05,
		"hash": "504a8a68bed02ff905a47fd8b70c7f82283c37d345abacaaef1d59a8c5a46913"
	},
	{
		"id": "bd8e76c49592",
		"ts": "2026-10-03T15:38:50.686Z",
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
		"liquidityUsd": 1161713.09,
		"hash": "bd8e76c49592fde647e75ce8e046cbf67a9b48c25a47f3b5be097d1c4f254822"
	},
	{
		"id": "218c2307bcab",
		"ts": "2026-10-03T15:38:50.913Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 263245.09,
		"hash": "218c2307bcabe88b69aeded2084cc5e01a16a90aad7b814c02c0872f7da64186"
	},
	{
		"id": "900d9c74c7e1",
		"ts": "2026-10-03T15:38:51.138Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1586018.8,
		"hash": "900d9c74c7e1eca992b1b67f6e9e8cffddba3ff317f5ef77e698d8d939baf8be"
	},
	{
		"id": "0caded0fe60d",
		"ts": "2026-10-03T15:38:51.359Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6053700.43,
		"hash": "0caded0fe60d5ea0bc3aa6fa83d76f3033eae577c0a8b1c92ec3ea1f17d9bf78"
	},
	{
		"id": "79e1c054c66a",
		"ts": "2026-10-03T15:38:51.585Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 185535.98,
		"hash": "79e1c054c66a57b8aae2d288d8357ef95ad40d1ddbb6fa2e7bc660587d4db111"
	},
	{
		"id": "1703846a8c89",
		"ts": "2026-10-03T15:38:51.815Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11950404.43,
		"hash": "1703846a8c89b808b5379fccc861b0e1de698533980cdac8cb312e80842fb55f"
	},
	{
		"id": "f7ba0384be48",
		"ts": "2026-10-03T15:38:52.039Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3607998.44,
		"hash": "f7ba0384be48d510b9b76beac9ff909fe70bd91dfab2b096d2eb6a7d540c41ef"
	},
	{
		"id": "5174b87e56e4",
		"ts": "2026-10-03T15:38:52.263Z",
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
		"liquidityUsd": 1113363.64,
		"hash": "5174b87e56e4e65c52693b259f1abda6badb35a93dfd2498ff79957757c52307"
	},
	{
		"id": "c2ac8cddffbc",
		"ts": "2026-10-03T15:38:52.486Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 502094.44,
		"hash": "c2ac8cddffbcf198984a9074eec431ecf4c8084d83e6fdb5f6743f67b3c71119"
	},
	{
		"id": "7500be407cfc",
		"ts": "2026-10-03T11:28:56.264Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 162412308.55,
		"hash": "7500be407cfc1933f94f309bb52890351bdf6748d2d49c90ad11149bbcb9bebf"
	},
	{
		"id": "509b9399e2ee",
		"ts": "2026-10-03T11:28:56.458Z",
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
		"liquidityUsd": 17183459.65,
		"hash": "509b9399e2ee7c80aa670abc5dbbc5c5529ef802d2ac699734c51a02cf749ae9"
	},
	{
		"id": "e5d6846febd6",
		"ts": "2026-10-03T11:28:56.647Z",
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
		"liquidityUsd": 859149.76,
		"hash": "e5d6846febd647328028f7d2eeb1bcc5933f8b5165328fff8c5220e023cdd754"
	},
	{
		"id": "9bd4277a05f9",
		"ts": "2026-10-03T11:28:56.840Z",
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
		"liquidityUsd": 41708760.9,
		"hash": "9bd4277a05f98d57d691df3744b2669f3902843db91b5161e0146ca7fb11457b"
	},
	{
		"id": "757609699fad",
		"ts": "2026-10-03T11:28:57.025Z",
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
		"liquidityUsd": 4544002.4,
		"hash": "757609699fad933dc1fdc97792a083aa21ee96ce2b9f9ac1192ec22ac1ff3272"
	},
	{
		"id": "2d76a476de14",
		"ts": "2026-10-03T11:28:57.210Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1315312.77,
		"hash": "2d76a476de14167879efa3ee157c7e14e281462d5bf6557432b2bdfc9c4d0a33"
	},
	{
		"id": "7a828852c191",
		"ts": "2026-10-03T11:28:57.398Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41708760.9,
		"hash": "7a828852c191804d52ec3410efe698ebda7243fd3692576996321d868eb2257b"
	},
	{
		"id": "bb0a376251dc",
		"ts": "2026-10-03T11:28:57.590Z",
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
		"liquidityUsd": 736299.63,
		"hash": "bb0a376251dce3f15a879597755176e15e22e370ac5156ba4b409a14693dabe6"
	},
	{
		"id": "98cf0407a842",
		"ts": "2026-10-03T11:28:57.780Z",
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
		"liquidityUsd": 1811606.4,
		"hash": "98cf0407a84267f23fda58d0371c458432a6f843b566b37a4102b432ec45db21"
	},
	{
		"id": "dfab04aec182",
		"ts": "2026-10-03T11:28:57.965Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1352765.65,
		"hash": "dfab04aec18267b2ca692bd4b47baa8778e86519b5c585748ea0bae582bdef4f"
	},
	{
		"id": "cfd88958c477",
		"ts": "2026-10-03T11:28:58.144Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1604494.96,
		"hash": "cfd88958c4773af542e0ab2e86a81ddaca5e98d13b0590cb1b79b318b82c3b9f"
	},
	{
		"id": "8c850fe6430e",
		"ts": "2026-10-03T11:28:58.342Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6103825.19,
		"hash": "8c850fe6430e530ebb117b8a7cbe47443199ea34d2fef1e26e151f5340fec846"
	},
	{
		"id": "bea673457b6f",
		"ts": "2026-10-03T11:28:58.520Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11950404.43,
		"hash": "bea673457b6f0532e09fc84a84e1e920406e78648918b2d227fba2d902a86653"
	},
	{
		"id": "890ed9c06b31",
		"ts": "2026-10-03T11:28:58.709Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1173724.21,
		"hash": "890ed9c06b3108f7b8e8ff7e435c6de0e63660c6f957d4ab0ec531a11688a951"
	},
	{
		"id": "bb4a3a4f2524",
		"ts": "2026-10-03T11:28:58.886Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 168569.79,
		"hash": "bb4a3a4f25244751c2bd974e6e0d8b758a31b8fd0e02789d2538fcbdad473b84"
	},
	{
		"id": "5099cd8eb945",
		"ts": "2026-10-03T11:28:59.070Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18240807.32,
		"hash": "5099cd8eb9456f03036ffa1bba2707a4581d1b51199917234b5e37444bc75d9e"
	},
	{
		"id": "af24b8d4f3ce",
		"ts": "2026-10-03T11:28:59.258Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 467618.69,
		"hash": "af24b8d4f3ce04cf61ed5c6b2e1ebec157a900a47b66a03e21353f7e71020436"
	},
	{
		"id": "4e30d3b3a4f0",
		"ts": "2026-10-03T11:28:59.438Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2587292.99,
		"hash": "4e30d3b3a4f0b3fa8a99048e947ac7e4b9b3acbf32311c37a553f98eae8c62fb"
	},
	{
		"id": "3479d6f5cb76",
		"ts": "2026-10-03T11:28:59.614Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3591967.79,
		"hash": "3479d6f5cb76a32aeddf8adbd438ab01ad6e1f58932518d70069bc1777494f21"
	},
	{
		"id": "ea65eb78e2c4",
		"ts": "2026-10-03T05:59:18.739Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 162479540.52,
		"hash": "ea65eb78e2c482990519bf4555d0aaf827a356d532dd3411af80819fde1e2a99"
	},
	{
		"id": "3b24663adc6a",
		"ts": "2026-10-03T05:59:18.939Z",
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
		"liquidityUsd": 16427202.26,
		"hash": "3b24663adc6a825f344ed5717100694c368bcbcd47e5001bc10ed4140d6b74ac"
	},
	{
		"id": "455e484b530e",
		"ts": "2026-10-03T05:59:19.137Z",
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
		"liquidityUsd": 870085.69,
		"hash": "455e484b530e5bd0990d5eee97b16787b36d0f6d6323680956f67839faad4997"
	},
	{
		"id": "3eb845910824",
		"ts": "2026-10-03T05:59:19.338Z",
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
		"liquidityUsd": 41608220.88,
		"hash": "3eb845910824139aaeaa03efafb550c7dbb2ec1262b62fa4b12e50d6e1b703f3"
	},
	{
		"id": "31dc85831c74",
		"ts": "2026-10-03T05:59:19.525Z",
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
		"liquidityUsd": 4449405.6,
		"hash": "31dc85831c7415d1989f5433e21c26594fc54ee16eda9c399c029b74ef175875"
	},
	{
		"id": "5507d6dea387",
		"ts": "2026-10-03T05:59:19.711Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1319496.17,
		"hash": "5507d6dea387a99eabf7b38f7b53bd1359af54cd56aa3acb614d5d0f085dc2a6"
	},
	{
		"id": "6b56441a6729",
		"ts": "2026-10-03T05:59:19.899Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41608220.88,
		"hash": "6b56441a6729fa0c2fb3f32d415cb3d26b00b3c2fc4a66689f95e5e6af7cda77"
	},
	{
		"id": "0dedbb386c2e",
		"ts": "2026-10-03T05:59:20.108Z",
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
		"liquidityUsd": 734921.45,
		"hash": "0dedbb386c2eb8acbea98ee0ed15f68a6ca535eff1e3ea31dc2f12afc2a15f01"
	},
	{
		"id": "41ccfb5c3db7",
		"ts": "2026-10-03T05:59:20.292Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 29,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.42,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 6257674.72,
		"hash": "41ccfb5c3db77f53601cab1a49b0136695641de05ce2636914e4d3b27c475050"
	},
	{
		"id": "29689f60d26a",
		"ts": "2026-10-03T05:59:20.480Z",
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
		"liquidityUsd": 1783293.18,
		"hash": "29689f60d26a19177b425573c8a7e64927963290fc2313915241d2b1293789b7"
	}
]
