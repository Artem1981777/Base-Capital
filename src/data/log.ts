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
	"updatedAt": "2026-11-23T11:44:17.642Z",
	"tokensScored": 23422,
	"verdictsIssued": 23422,
	"safe": 19933,
	"risky": 1636,
	"likelyRug": 1853,
	"ticks": 1314
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "ffbfed7839b4",
		"ts": "2026-11-23T11:44:13.475Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 82671418.71,
		"hash": "ffbfed7839b4a063839c9974ce847a94d4cef5d404fe60b97366652127bbb3b1"
	},
	{
		"id": "80be4fa1abc4",
		"ts": "2026-11-23T11:44:13.719Z",
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
		"liquidityUsd": 22385663.54,
		"hash": "80be4fa1abc474e57de8634e4e0aa4650fe306fba97edf1140883e26a45963a0"
	},
	{
		"id": "2c0a655c9153",
		"ts": "2026-11-23T11:44:13.962Z",
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
		"liquidityUsd": 357448.34,
		"hash": "2c0a655c915377a0458c750b9cabf10b4239734a00a10a486e80875f38cd3237"
	},
	{
		"id": "16b0bec97420",
		"ts": "2026-11-23T11:44:14.231Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3359514.19,
		"hash": "16b0bec97420700748e5cb2b0e639d66afe4f39fc19a08078c4af35c55abc0ff"
	},
	{
		"id": "fcdddbaba978",
		"ts": "2026-11-23T11:44:14.466Z",
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
		"liquidityUsd": 412310.19,
		"hash": "fcdddbaba978e8d6956811d6402b2eca3d52f45f66c612d52f2b7a74f04e0385"
	},
	{
		"id": "dcf2cf39618f",
		"ts": "2026-11-23T11:44:14.708Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 792438.72,
		"hash": "dcf2cf39618fa7be7ee8d97ab5f1fce8ae35b075dbb3ba7ffcd7bcd6898be8ab"
	},
	{
		"id": "6da6166397ec",
		"ts": "2026-11-23T11:44:14.936Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 1787186.89,
		"hash": "6da6166397ec92fcb071d06c848cc65cf1f40427a37e8c49ce62384ccfdb5900"
	},
	{
		"id": "b783782c02bd",
		"ts": "2026-11-23T11:44:15.177Z",
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
		"liquidityUsd": 1404864.46,
		"hash": "b783782c02bd3b50834e355a0209bf0f5002ccc75624a737f78ecd97efebfcc9"
	},
	{
		"id": "dc9a02beda89",
		"ts": "2026-11-23T11:44:15.407Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 601836.54,
		"hash": "dc9a02beda890a2e9ff7c1f7a1efe5bfa22ce80b64779d2a086b56a0b074ddf0"
	},
	{
		"id": "c2924ecb949c",
		"ts": "2026-11-23T11:44:15.647Z",
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
		"liquidityUsd": 7212878.16,
		"hash": "c2924ecb949cdbe04b9e00a7066b648b7073d92ff3a9f55fffc9fb3c1721817a"
	},
	{
		"id": "e8d707a6c61a",
		"ts": "2026-11-23T11:44:15.860Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1784056.43,
		"hash": "e8d707a6c61ace5b1f6b9b0a8a57704808cbdb835400886c49431cd893294d9c"
	},
	{
		"id": "170fe9e8201a",
		"ts": "2026-11-23T11:44:16.100Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 536282.92,
		"hash": "170fe9e8201a8975ec7e7a610ff502f58cc7bb70c2fbc27fb21c418dedefeb33"
	},
	{
		"id": "9f40527ee9a0",
		"ts": "2026-11-23T11:44:16.328Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 901221.54,
		"hash": "9f40527ee9a09d43884a6b42c9ccba0106773a64a280483ec5ff64115b53f6a0"
	},
	{
		"id": "8a86c61480d7",
		"ts": "2026-11-23T11:44:16.551Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1740087.37,
		"hash": "8a86c61480d76eb1ed154890d0f85b3048409e03e428688b822d4ecfcfd1306c"
	},
	{
		"id": "b5377aa6b5fb",
		"ts": "2026-11-23T11:44:16.766Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2638705.1,
		"hash": "b5377aa6b5fbf0da8a1ecd994b436722c35311968e75f2289b26b5e0027f2439"
	},
	{
		"id": "2d649b527ddc",
		"ts": "2026-11-23T11:44:16.989Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3100883.76,
		"hash": "2d649b527ddc8a74512a20ecbd155c77ebd97d430b2fc6561157d1ade2f3641f"
	},
	{
		"id": "b7d2ce09af11",
		"ts": "2026-11-23T11:44:17.203Z",
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
		"liquidityUsd": 1177875.61,
		"hash": "b7d2ce09af116bc5b2cd81282d67eb935b6414e141d9d0dc15c86aefad53ba6c"
	},
	{
		"id": "648bb11742bd",
		"ts": "2026-11-23T11:44:17.427Z",
		"symbol": "ANTc",
		"token": "0xb20000000000000000000016e38FD364d271Ba28",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1037069.13,
		"hash": "648bb11742bd92f2df52fa6cb1ab6de50b6f38e93470eda402980b50faa3483c"
	},
	{
		"id": "deb0945b173a",
		"ts": "2026-11-23T11:44:17.641Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 711740.68,
		"hash": "deb0945b173ac12be552abeb3a754e9a9ac0b3328b0c9003baafa32525878675"
	},
	{
		"id": "e943c06876e1",
		"ts": "2026-11-23T02:10:39.074Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 82308137.87,
		"hash": "e943c06876e132c123be8276f9fb09e82155cfeb256d50a10693474458a0418c"
	},
	{
		"id": "fcd74e324dbc",
		"ts": "2026-11-23T02:10:39.292Z",
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
		"liquidityUsd": 22038100.25,
		"hash": "fcd74e324dbc792c11a526f34b6e382134b4e945d312ee64ae0448f0847a3d4d"
	},
	{
		"id": "027dd9f7bd74",
		"ts": "2026-11-23T02:10:39.499Z",
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
		"liquidityUsd": 353394.15,
		"hash": "027dd9f7bd74e4e187332b453c90b35367411c305770bbcce7c676169622b61a"
	},
	{
		"id": "fb1a830e2317",
		"ts": "2026-11-23T02:10:39.708Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3374373.72,
		"hash": "fb1a830e2317e805ff9138ca8b098e5f0ea139da4313a32febb3a18cfdd18ece"
	},
	{
		"id": "bfca9704e682",
		"ts": "2026-11-23T02:10:39.916Z",
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
		"liquidityUsd": 400511.98,
		"hash": "bfca9704e6823bd198d10afdc2175669e67db167fea780b583a520bac5b87198"
	},
	{
		"id": "9def891609fc",
		"ts": "2026-11-23T02:10:40.159Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 785897.3,
		"hash": "9def891609fc0a16917451efffdca7f0f401ca0d97ea284e50a65e90b0357c3a"
	},
	{
		"id": "44cc17401a94",
		"ts": "2026-11-23T02:10:40.387Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3374373.72,
		"hash": "44cc17401a944794f7deec854c277fb2efa3725fa8e9f639ef81d7856f2427bc"
	},
	{
		"id": "c2be310b758f",
		"ts": "2026-11-23T02:10:40.603Z",
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
		"liquidityUsd": 1164715.64,
		"hash": "c2be310b758f25b0ab6eb29980bfeec4a23ead72be83ee17428ea8a5d6215c30"
	},
	{
		"id": "8223d2e2db28",
		"ts": "2026-11-23T02:10:40.810Z",
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
		"liquidityUsd": 7191503.75,
		"hash": "8223d2e2db286f2110da825607148079b8aa4704d24555ecd7f73382d49c681a"
	},
	{
		"id": "6235eec704ec",
		"ts": "2026-11-23T02:10:41.018Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 12,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.76,
		"flags": [
			"volume_liquidity_anomaly",
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1658059.67,
		"hash": "6235eec704ec8027fc9846f9f59cf33dc2a59baaa4cc3f84259e0d39bf4787de"
	},
	{
		"id": "94dfb995d0ce",
		"ts": "2026-11-23T02:10:41.235Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 906583.18,
		"hash": "94dfb995d0ceb0ff70ff2f253b050f7e7b6eb866d71d27f87d5abfb8bc19f375"
	},
	{
		"id": "664cacb2108d",
		"ts": "2026-11-23T02:10:41.431Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 569385.02,
		"hash": "664cacb2108d34ec75a7182ebc6b2e9a3b0c0c3f151df875c012eb8ac862d467"
	},
	{
		"id": "4dca129d4246",
		"ts": "2026-11-23T02:10:41.640Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2944079.34,
		"hash": "4dca129d4246fad97b485c073af344fb551ebcf837dd4dcaf160a1a22918dff8"
	},
	{
		"id": "700b83fc2f27",
		"ts": "2026-11-23T02:10:41.849Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 524466.46,
		"hash": "700b83fc2f27b5cfdc3c0e67e48676cb202181195e27f424b45b813ecf10b701"
	},
	{
		"id": "27f3ca1e3e73",
		"ts": "2026-11-23T02:10:42.056Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1508741.32,
		"hash": "27f3ca1e3e7345a48a646c49ae4d1fbf32e217bddb4aee13aeca86453b4cf238"
	},
	{
		"id": "ee1acf4afbe9",
		"ts": "2026-11-23T02:10:42.275Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2638662.99,
		"hash": "ee1acf4afbe95e8fae799a3aa89b8c1869e76c3a7b673ffd9403d07b35a0eaa1"
	},
	{
		"id": "ed3d15718c51",
		"ts": "2026-11-23T02:10:42.503Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 715575.25,
		"hash": "ed3d15718c51161f2efca272ef807fdf76f9f9f906d33f8dff9e3cdd8b72db24"
	},
	{
		"id": "a1e526a0bbfc",
		"ts": "2026-11-23T02:10:42.712Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3036480.39,
		"hash": "a1e526a0bbfcdc538a7d2b3a5ab991690e95481fc4b515ee88b47fa99fb8bb2a"
	},
	{
		"id": "511c04dd78ca",
		"ts": "2026-11-23T02:10:42.921Z",
		"symbol": "SOGNI",
		"token": "0xE014d2A4da6E450f21b5050120D291e63c8940FD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 439099.03,
		"hash": "511c04dd78ca1654ccad70cd23c9e7eb98011d5c977da695a597347e8b273d26"
	},
	{
		"id": "3ca51e7fabf9",
		"ts": "2026-11-22T21:29:25.717Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 82749588.34,
		"hash": "3ca51e7fabf987a16b559aeda10e9d82aac362538d26c97332ca00ea1c31e532"
	},
	{
		"id": "726051368687",
		"ts": "2026-11-22T21:29:26.402Z",
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
		"liquidityUsd": 22157451.94,
		"hash": "726051368687a3d2525c3dd601ef82cc7f34e84ceaa6efa13be6c239cddc199b"
	},
	{
		"id": "a28e08af86b4",
		"ts": "2026-11-22T21:29:26.666Z",
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
		"liquidityUsd": 358892.66,
		"hash": "a28e08af86b4c059ec4ffc63eb6e7a22f3784f9c5c91da3abde10ccb8567d5a6"
	},
	{
		"id": "0a2e98a25511",
		"ts": "2026-11-22T21:29:26.918Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3422829.9,
		"hash": "0a2e98a255115b8fd8e6a52612676c7ccfbc32c5b17f8ad3dfe949cbbeb61c44"
	},
	{
		"id": "197f90bcf544",
		"ts": "2026-11-22T21:29:27.172Z",
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
		"liquidityUsd": 407192.87,
		"hash": "197f90bcf54416543c0b335cc815b11b6722d794b57fdc89fce27e683dab2a94"
	},
	{
		"id": "eb76d9ac400e",
		"ts": "2026-11-22T21:29:27.423Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 795170.08,
		"hash": "eb76d9ac400eb25948b86d98612b7b95e88b40c2700128c4cd752a5a9fc9f65d"
	},
	{
		"id": "9b1622785039",
		"ts": "2026-11-22T21:29:27.677Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1650734.07,
		"hash": "9b16227850398a6b3675daf4f3b087ff770242619cff3fb3f31eaef25caebe56"
	},
	{
		"id": "007098fcaf25",
		"ts": "2026-11-22T21:29:27.935Z",
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
		"liquidityUsd": 1511890.75,
		"hash": "007098fcaf25d1a2a9e3bc47e6d5cb1d48782724299a94e7c574ce3fd83b5b8e"
	},
	{
		"id": "78d615a81f1b",
		"ts": "2026-11-22T21:29:28.189Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1652704.29,
		"hash": "78d615a81f1b1cca87ae721e87b35a1cee78b33b241a2984161e2678cda43776"
	},
	{
		"id": "b3745227cbfb",
		"ts": "2026-11-22T21:29:28.443Z",
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
		"liquidityUsd": 7232526.33,
		"hash": "b3745227cbfb4410d46b84d94a2e590795a5a8820c7dd774edb47c797fbdfc36"
	},
	{
		"id": "af7c55f50326",
		"ts": "2026-11-22T21:29:28.681Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 555238.99,
		"hash": "af7c55f50326cd39193c7e4f9d6addb0fa1799b4b2c847fa866d13af9b72bc20"
	},
	{
		"id": "65b9a3eb3e61",
		"ts": "2026-11-22T21:29:28.916Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3453225.56,
		"hash": "65b9a3eb3e610aacc480b86a1bce0c4005a5c77659e853cd16c5344c95524be9"
	},
	{
		"id": "aebcbcc2d539",
		"ts": "2026-11-22T21:29:29.151Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 867291.84,
		"hash": "aebcbcc2d53910011ef50decd6f7e41c1296906d5b56d774e51b10dd555e120e"
	},
	{
		"id": "ea90f19aa01e",
		"ts": "2026-11-22T21:29:29.385Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 721301.97,
		"hash": "ea90f19aa01ee0b756248fc8d9db254003a9248f02c6fe5b483389c0a6f30f37"
	},
	{
		"id": "e6b74434c93f",
		"ts": "2026-11-22T21:29:29.624Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 528255.19,
		"hash": "e6b74434c93f38663da07b7d0bb2faa93ca9f32c3c5b90346cc0e1f5c1f8afc3"
	},
	{
		"id": "0e67901b5a09",
		"ts": "2026-11-22T21:29:29.866Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2649505.55,
		"hash": "0e67901b5a09f2d923f1ccc8cc5debac850cf0bcc1cb7478b54f71f04d85775a"
	},
	{
		"id": "708f660fa30e",
		"ts": "2026-11-22T21:29:30.101Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3065196.11,
		"hash": "708f660fa30e4e490c532318c3e075ceaad8e83c97b70379c538d7e064d0c03b"
	},
	{
		"id": "f231f137f85c",
		"ts": "2026-11-22T21:29:30.337Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1587740.24,
		"hash": "f231f137f85c70a177b9fd162bffb0a2d55b026fd3888c8954e707950faa4677"
	},
	{
		"id": "3ed1530031b3",
		"ts": "2026-11-22T21:29:30.574Z",
		"symbol": "SOGNI",
		"token": "0xE014d2A4da6E450f21b5050120D291e63c8940FD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 434866.24,
		"hash": "3ed1530031b308b53d3175f3e9a35f4c374c6ef0bbbe885c2c306f57dfa33d73"
	},
	{
		"id": "1e318e1f81e2",
		"ts": "2026-11-22T15:53:19.350Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 82521444.37,
		"hash": "1e318e1f81e21346b4109e131a4e228088579ff5d7b2ddcba268fd18b5b2220e"
	},
	{
		"id": "322045264c1b",
		"ts": "2026-11-22T15:53:19.599Z",
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
		"liquidityUsd": 21991590.21,
		"hash": "322045264c1bf2607acf2f5dc0ad6c79253a05723a2ca77028d23dceede31b91"
	},
	{
		"id": "da7533816d1b",
		"ts": "2026-11-22T15:53:19.859Z",
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
		"liquidityUsd": 357721.61,
		"hash": "da7533816d1bcfb8ea1af0201eb7d924ba526ddcfdf6531a2eadfbe11ed2982a"
	},
	{
		"id": "0400f1af90cb",
		"ts": "2026-11-22T15:53:20.112Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3414778.66,
		"hash": "0400f1af90cbf53091636b2d7f0c80f673413545a578a89b476e8509f5e385cc"
	},
	{
		"id": "7b3ae151dec4",
		"ts": "2026-11-22T15:53:20.348Z",
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
		"liquidityUsd": 406495.41,
		"hash": "7b3ae151dec4424ff578deaed768f4e382394cb4457b43cf369a9c6dbb2d7d7d"
	},
	{
		"id": "64a7183031fb",
		"ts": "2026-11-22T15:53:20.596Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 792610.42,
		"hash": "64a7183031fb176d323533cace288170d435839991581409cfb2f611b782882d"
	},
	{
		"id": "11e5186c6e5f",
		"ts": "2026-11-22T15:53:20.836Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1681518.89,
		"hash": "11e5186c6e5f76a07fa643b8ec417951593b1a2e09e787efbd0d55280669c06f"
	},
	{
		"id": "345a664b70af",
		"ts": "2026-11-22T15:53:21.094Z",
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
		"liquidityUsd": 1573807.52,
		"hash": "345a664b70af61d53a7c6259403845289db67d38f207e4cd708bfb25ba234c9e"
	},
	{
		"id": "555db938953d",
		"ts": "2026-11-22T15:53:21.348Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1678830.19,
		"hash": "555db938953d5ba861cafbeb5759ef513c2cb8ee1d1f2bd964adf5efd14d4239"
	},
	{
		"id": "3d7c74e6ce1f",
		"ts": "2026-11-22T15:53:21.583Z",
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
		"liquidityUsd": 7130307.33,
		"hash": "3d7c74e6ce1f2110fe1db136fd42e2a6b304b12dd0bb3ad1685c55a564976f25"
	},
	{
		"id": "047d27820dad",
		"ts": "2026-11-22T15:53:21.815Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 869231.87,
		"hash": "047d27820dad551475bd65d0b25ad3d44ab729f22399846cc06ec929d3f16700"
	},
	{
		"id": "ef05bad3ee68",
		"ts": "2026-11-22T15:53:22.040Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4753314.5,
		"hash": "ef05bad3ee681891132ea94653fdd7940d65cefd08750f74a3dcd0e5ae45c2fe"
	},
	{
		"id": "a435ffecccfa",
		"ts": "2026-11-22T15:53:22.289Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 525841.6,
		"hash": "a435ffecccfae88230de8163c0beafc94861da97473d329801b44bd74928110a"
	},
	{
		"id": "6e1aefb6c674",
		"ts": "2026-11-22T15:53:22.527Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 720788.64,
		"hash": "6e1aefb6c6743b10631bb1d9db3fbf2ad269a3f76561ba5744d75c549e882e11"
	},
	{
		"id": "ceb9a0801c79",
		"ts": "2026-11-22T15:53:22.745Z",
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
		"liquidityUsd": 2988267.26,
		"hash": "ceb9a0801c79414f42669da9a8cf1a3b2f6abdcbc60a6d9ace53b36fc7a08921"
	},
	{
		"id": "3be7be6ce217",
		"ts": "2026-11-22T15:53:22.977Z",
		"symbol": "SOGNI",
		"token": "0xE014d2A4da6E450f21b5050120D291e63c8940FD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 436610.71,
		"hash": "3be7be6ce217cb5115e0f1b5cafee58ddff0a84e4bf9992faf0a25c58f975107"
	},
	{
		"id": "27e54175e08e",
		"ts": "2026-11-22T15:53:23.203Z",
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
		"liquidityUsd": 826513.71,
		"hash": "27e54175e08e67cf86fcbd7dbc9957a9a7e252dc591a39e1c2caf76f0fa52bbf"
	},
	{
		"id": "39d40a54f87a",
		"ts": "2026-11-22T15:53:23.445Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3102354.12,
		"hash": "39d40a54f87a9dfc45597e99fedd150cc1f529d4b8cce55c5a7e16fff8c6aa14"
	},
	{
		"id": "64b98a49fb74",
		"ts": "2026-11-22T15:53:23.683Z",
		"symbol": "ANTc",
		"token": "0xb20000000000000000000016e38FD364d271Ba28",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1070271.57,
		"hash": "64b98a49fb7476b945f4f5cebc574be56b51848b3c5f5eece49b43a48dadbc6e"
	},
	{
		"id": "47af99bfca4f",
		"ts": "2026-11-22T07:43:42.746Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 80643966.21,
		"hash": "47af99bfca4fefb35daac12b0cbec692df5c6974e15e840c137af96b85040e70"
	},
	{
		"id": "7e7e5cff6c39",
		"ts": "2026-11-22T07:43:43.081Z",
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
		"liquidityUsd": 21199964.77,
		"hash": "7e7e5cff6c399902cb35eeadc818b1f0b89de26be28a849d147b391655daed10"
	},
	{
		"id": "e717e654dfa9",
		"ts": "2026-11-22T07:43:43.479Z",
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
		"liquidityUsd": 346841.51,
		"hash": "e717e654dfa9a2319b19476b2e938b83d9cd560c0ae6804a1442901ea05d6dce"
	},
	{
		"id": "058784dc54d5",
		"ts": "2026-11-22T07:43:43.924Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3326257.98,
		"hash": "058784dc54d5d537076b659382da17685f48a1f9bdbd663c688c0a7fd51c9eb5"
	},
	{
		"id": "042fbf39a934",
		"ts": "2026-11-22T07:43:44.166Z",
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
		"liquidityUsd": 398143.93,
		"hash": "042fbf39a934606abccf2469d5bed7e81444e3bdf334f0e932b7abafdf584d67"
	},
	{
		"id": "ee5800dcefd5",
		"ts": "2026-11-22T07:43:44.438Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 773644.4,
		"hash": "ee5800dcefd5c444c775eff71ef21d27bf40fa602ca5c963ab0fd8bc9b482529"
	},
	{
		"id": "a3c64664d909",
		"ts": "2026-11-22T07:43:44.692Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3326257.98,
		"hash": "a3c64664d90940e028dbdb34e61cb049968bf11f205d021a2897e1806d1d2a89"
	},
	{
		"id": "7e243a0db71e",
		"ts": "2026-11-22T07:43:44.929Z",
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
		"liquidityUsd": 1544667.82,
		"hash": "7e243a0db71e472f349c0926c8a61c2ac44b8eac493d080af67219bb3d82a140"
	},
	{
		"id": "6293f52664b4",
		"ts": "2026-11-22T07:43:45.167Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 12,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.76,
		"flags": [
			"volume_liquidity_anomaly",
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1329628.75,
		"hash": "6293f52664b4a725bffd1c2bc8d352208442dfb106ad2cdbe69b0bc72f1248e0"
	},
	{
		"id": "372379d170d7",
		"ts": "2026-11-22T07:43:45.417Z",
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
		"liquidityUsd": 6964230.61,
		"hash": "372379d170d7c3b6329d1a28b28c831f8b7d183905e4d61b11f403fa49dbe1c6"
	},
	{
		"id": "d49eff3f2813",
		"ts": "2026-11-22T07:43:45.652Z",
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
		"liquidityUsd": 2652171.24,
		"hash": "d49eff3f281328dba60ca9a919cc10ca0ef2fd023a8dd60849090a38536c74b8"
	},
	{
		"id": "5e81dbeb31a1",
		"ts": "2026-11-22T07:43:45.874Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 813897.52,
		"hash": "5e81dbeb31a10f2cb0d6467653d4188f4ec3ddbae232e94bbfc33a0b61467f81"
	},
	{
		"id": "17a2bf4c469b",
		"ts": "2026-11-22T07:43:46.105Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3102525.81,
		"hash": "17a2bf4c469b5aa4d3a9e2193b7c4ce952098a26de1fce540e7ecdc7e0533387"
	},
	{
		"id": "11b0f78ccd27",
		"ts": "2026-11-22T07:43:46.399Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 718727.5,
		"hash": "11b0f78ccd27a392f34aea54741c0883640bd488ec0befd463c66d65ecec75d6"
	},
	{
		"id": "ef43ebaaeda9",
		"ts": "2026-11-22T07:43:46.633Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 498556.52,
		"hash": "ef43ebaaeda98ee10ec5549bcf192a3a77c355ec8428920b85dde30bd743723a"
	},
	{
		"id": "a90493c2fef9",
		"ts": "2026-11-22T07:43:46.972Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 504741.59,
		"hash": "a90493c2fef9abb67b512e9eb59895e88679108fed480716908c47539921d990"
	},
	{
		"id": "e49e20022190",
		"ts": "2026-11-22T07:43:47.434Z",
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
		"liquidityUsd": 788537.47,
		"hash": "e49e200221907f093c2e6c909476bb214cb937eb42af93af7f0d9d7bf123f84f"
	},
	{
		"id": "621c143aae78",
		"ts": "2026-11-22T07:43:47.688Z",
		"symbol": "ANTc",
		"token": "0xb20000000000000000000016e38FD364d271Ba28",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1103951.16,
		"hash": "621c143aae7840f1ffd63c6dd868389826dc4bce2eedc9b86517d90e73866fbe"
	},
	{
		"id": "0535bfc97e2d",
		"ts": "2026-11-22T07:43:47.982Z",
		"symbol": "SOGNI",
		"token": "0xE014d2A4da6E450f21b5050120D291e63c8940FD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 420359.92,
		"hash": "0535bfc97e2d829fc80c78bd851a89b4b37e1e9bb329e9bda6fdbb5e3819d082"
	},
	{
		"id": "2fd627d3d931",
		"ts": "2026-11-22T00:54:08.164Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 81338505.14,
		"hash": "2fd627d3d931bdbef838c9c3ac2dd16d10fd761db5a8f564c8c7872f18ca3481"
	},
	{
		"id": "e1e40e8bc80e",
		"ts": "2026-11-22T00:54:08.396Z",
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
		"liquidityUsd": 21511898.78,
		"hash": "e1e40e8bc80e77d2a5dbf8bfb5abe9a613813f190536c8dd670a24f6fb2cd10a"
	},
	{
		"id": "e6aa55a5e801",
		"ts": "2026-11-22T00:54:08.628Z",
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
		"liquidityUsd": 366260.97,
		"hash": "e6aa55a5e801a7f752a26b510d9321e5a4162c2610ef89d624fbf0acddcb76a3"
	},
	{
		"id": "cddbadccdbac",
		"ts": "2026-11-22T00:54:08.828Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3328346.88,
		"hash": "cddbadccdbac682a6f44df5903d693db435c2a93e59378d4304d16f603d7fa99"
	},
	{
		"id": "aa8dc48b71b4",
		"ts": "2026-11-22T00:54:09.046Z",
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
		"liquidityUsd": 407043.74,
		"hash": "aa8dc48b71b44c1b3ef9f244515f447ffb22991be140b66f683c49dc63464d05"
	},
	{
		"id": "a785510052e5",
		"ts": "2026-11-22T00:54:09.294Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 784974.8,
		"hash": "a785510052e534a9b4e93cb7489b71d539d89b4a24fdb4a75a71790b9a45bc55"
	},
	{
		"id": "1d4b943b42e9",
		"ts": "2026-11-22T00:54:09.505Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 84549.26,
		"hash": "1d4b943b42e99f742c233adf55a6c17d58303f7ca730c6a2191f8dfcf5e4b490"
	},
	{
		"id": "07b168caaa64",
		"ts": "2026-11-22T00:54:09.757Z",
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
		"liquidityUsd": 1563852.91,
		"hash": "07b168caaa64af32befaa308e5c420b5f3df12d9fee37a41dffecf5f831c8b12"
	},
	{
		"id": "24925de03bd0",
		"ts": "2026-11-22T00:54:09.966Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 12,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.76,
		"flags": [
			"volume_liquidity_anomaly",
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1321043.4,
		"hash": "24925de03bd01c333b9dbdbd2a3f05cce1420069e72e1783c5f8d71a5b1c585d"
	},
	{
		"id": "bdb37dd09adf",
		"ts": "2026-11-22T00:54:10.169Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 2735579.84,
		"hash": "bdb37dd09adfb8b26574a65e70df966c7265ef433d733d82f5c90ddae723e8a3"
	},
	{
		"id": "65d51dde0dea",
		"ts": "2026-11-22T00:54:10.375Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 826080.86,
		"hash": "65d51dde0dea71e363285a6bc6ce71fdea5efc5a70d7d6c5934cecb664b09e1a"
	},
	{
		"id": "907874af50b9",
		"ts": "2026-11-22T00:54:10.577Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 468959.02,
		"hash": "907874af50b995eb4028ddc6fadd282fcfc2767ec425ad7f43c4fca06821de82"
	},
	{
		"id": "7810bdf6b098",
		"ts": "2026-11-22T00:54:10.784Z",
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
		"liquidityUsd": 7012572.11,
		"hash": "7810bdf6b098671022253c9d4900a85b1c3e1c3a3c995d305e3d4a610d5569c1"
	},
	{
		"id": "7fa94bad31e0",
		"ts": "2026-11-22T00:54:10.974Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2887456.24,
		"hash": "7fa94bad31e0fcb3ce9cc4efd26ff2a5516c2fbe6a921efb97696911fac544ff"
	},
	{
		"id": "d7d68163f26c",
		"ts": "2026-11-22T00:54:11.169Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 512158.4,
		"hash": "d7d68163f26cc30d78555ff5ffef87b2f6f8f4d3a2628a14801001244ae71f75"
	},
	{
		"id": "d91e7a0727e0",
		"ts": "2026-11-22T00:54:11.357Z",
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
		"liquidityUsd": 783558.43,
		"hash": "d91e7a0727e0a46a7b11a0a301bea361c7bae71668d752440286ecc0183becd7"
	},
	{
		"id": "c1db13ecdf72",
		"ts": "2026-11-22T00:54:11.565Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 727045.45,
		"hash": "c1db13ecdf72270b4b922b9e2e98f6af871327a04ba97c59e8f43416ed6dad02"
	},
	{
		"id": "2f56a5364947",
		"ts": "2026-11-22T00:54:11.755Z",
		"symbol": "ANTc",
		"token": "0xb20000000000000000000016e38FD364d271Ba28",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1143105.95,
		"hash": "2f56a536494731d3db6a4cf3c294f297a5b6dd2d6858862fe929f071110661c2"
	},
	{
		"id": "677d0002a880",
		"ts": "2026-11-22T00:54:11.963Z",
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
		"liquidityUsd": 1777121.5,
		"hash": "677d0002a88051d4f30ed17790e04ff28e6d1a7d8df90665b84637c39937b395"
	},
	{
		"id": "a3e87ea41ef6",
		"ts": "2026-11-21T20:45:20.609Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 81442734.08,
		"hash": "a3e87ea41ef6e37beb8ba6061a6c76478c86248202df48bcbccf67cb85b266db"
	},
	{
		"id": "b22b81cf5ec4",
		"ts": "2026-11-21T20:45:21.119Z",
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
		"liquidityUsd": 21518382.76,
		"hash": "b22b81cf5ec45743e158807d368375a4203ebcf6f696f0b2855a57e23dcdc466"
	},
	{
		"id": "52c4d6df23ff",
		"ts": "2026-11-21T20:45:21.385Z",
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
		"liquidityUsd": 363778.26,
		"hash": "52c4d6df23ff25f4d6b6a2e454a68056c4acffae13419560a54aedef8ca1b522"
	},
	{
		"id": "ece92181a10a",
		"ts": "2026-11-21T20:45:21.631Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3330128.08,
		"hash": "ece92181a10a881a8ef8541a1ed580dcee69738b61e8c6cc8a65b84ac975b33c"
	},
	{
		"id": "5111b695f7e3",
		"ts": "2026-11-21T20:45:21.895Z",
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
		"liquidityUsd": 408120.43,
		"hash": "5111b695f7e38e6d12928a68542739f54fa7408bffa534a170bb960811a5f4e1"
	},
	{
		"id": "30b339472b43",
		"ts": "2026-11-21T20:45:22.137Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 788204.58,
		"hash": "30b339472b43bf97721a9f979a46280710e3a6eca7ba0367c54aec414f957d1d"
	},
	{
		"id": "72e2dab4dbea",
		"ts": "2026-11-21T20:45:22.383Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 84549.32,
		"hash": "72e2dab4dbeab96350fdc84ed985add60c88b97fb545b70ceff23fd76db3a212"
	},
	{
		"id": "51a9a7bced58",
		"ts": "2026-11-21T20:45:22.665Z",
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
		"liquidityUsd": 1565615.3,
		"hash": "51a9a7bced58227e82dfdf2507c8c5d59c8b26086243c27694aff3bd591ac973"
	},
	{
		"id": "7effe694c496",
		"ts": "2026-11-21T20:45:22.911Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 12,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.76,
		"flags": [
			"volume_liquidity_anomaly",
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1396041.91,
		"hash": "7effe694c4963a6f443581028ded4caa980f64e624b3248d19ebfb26e6f15835"
	},
	{
		"id": "8b68dc9e1613",
		"ts": "2026-11-21T20:45:23.180Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 2795885.72,
		"hash": "8b68dc9e1613faf09f0e7c73a61976d59fa9e8aaab4ef0393d3ebef35528d660"
	},
	{
		"id": "27e98ca19ff4",
		"ts": "2026-11-21T20:45:23.411Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 826048.06,
		"hash": "27e98ca19ff4c8ce83cb4502e07a31adaf51b842d0f19051681868af57edf5f1"
	},
	{
		"id": "36b58cb5f8cd",
		"ts": "2026-11-21T20:45:23.641Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 466883.88,
		"hash": "36b58cb5f8cd90108e7c639558cde76712c54025d9b355b47bd5494e2b8feef8"
	},
	{
		"id": "42e15d3f554a",
		"ts": "2026-11-21T20:45:23.873Z",
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
		"liquidityUsd": 6891641.72,
		"hash": "42e15d3f554a2c8e09f219bc9bfc98e1c6c11dffc8d4c0424026d5690dcbc531"
	},
	{
		"id": "d09760c75a3f",
		"ts": "2026-11-21T20:45:24.103Z",
		"symbol": "CHECK",
		"token": "0x9126236476eFBA9Ad8aB77855c60eB5BF37586Eb",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 508032.62,
		"hash": "d09760c75a3fc061e4850923e09693c45c36816c667870d98a3568d6d3dea578"
	},
	{
		"id": "54868cb811c9",
		"ts": "2026-11-21T20:45:24.353Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2719150.35,
		"hash": "54868cb811c9244cc8606f7089d3a581a44c5c29bfef517462f1b2ebb5ee0424"
	},
	{
		"id": "049b902819aa",
		"ts": "2026-11-21T20:45:24.587Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 516106.56,
		"hash": "049b902819aa2bad8997f23b113d9caf65fa9179f996dd5ab1d0166be8a0cd15"
	},
	{
		"id": "0e97cc6d09a5",
		"ts": "2026-11-21T20:45:24.817Z",
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
		"liquidityUsd": 758747.92,
		"hash": "0e97cc6d09a5a6ca81cd62b599098a9644e5c4312a8b6e4e8e96fe65b80ec54b"
	},
	{
		"id": "25f0b1ff92ea",
		"ts": "2026-11-21T20:45:25.046Z",
		"symbol": "ANTc",
		"token": "0xb20000000000000000000016e38FD364d271Ba28",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1150995.32,
		"hash": "25f0b1ff92eae2cde81cc1e21bedb4b4ab23a10f1ff113c6a909cfbe1cfe8029"
	},
	{
		"id": "5382bb28a3a1",
		"ts": "2026-11-21T20:45:25.277Z",
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
		"liquidityUsd": 1781280.31,
		"hash": "5382bb28a3a1e88b0fb95f5f7c7c62021e68e3ffa13314644a9d55a672de3b2f"
	},
	{
		"id": "4a3c1f323206",
		"ts": "2026-11-21T14:07:43.229Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 80334035.38,
		"hash": "4a3c1f323206eaf80349a5b1ac9a268fa1f9906607cb37a18e43db4e7e171fb2"
	},
	{
		"id": "86b5d6c303f8",
		"ts": "2026-11-21T14:07:43.933Z",
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
		"liquidityUsd": 21198202.51,
		"hash": "86b5d6c303f83d13c35abf41124cf8590ba575decc2c118b1d6e8d74e96cea9c"
	},
	{
		"id": "9c93db236ece",
		"ts": "2026-11-21T14:07:44.194Z",
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
		"liquidityUsd": 348362.65,
		"hash": "9c93db236eceafc3a3852280f5226a9590df13646ac325b35f8e94b0fe6c9cab"
	},
	{
		"id": "2508045dc095",
		"ts": "2026-11-21T14:07:44.450Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3334388.17,
		"hash": "2508045dc095b8242e6ea38117eec6449b0bc547423268519f995a7be0d7790a"
	},
	{
		"id": "f1e543dcb639",
		"ts": "2026-11-21T14:07:44.715Z",
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
		"liquidityUsd": 433960.33,
		"hash": "f1e543dcb639572b57ffa42cd746b95763624f6190ace7485df5b019e5106950"
	},
	{
		"id": "9e4e8e061924",
		"ts": "2026-11-21T14:07:45.000Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 793546.84,
		"hash": "9e4e8e061924a394ec88846e9b551e4801fe57085c41d9854cb8be778123c218"
	},
	{
		"id": "f3bf035b098c",
		"ts": "2026-11-21T14:07:45.260Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 84550.21,
		"hash": "f3bf035b098c746c384967778bcf9caeacab28326a50fdda5d1d52866d0c7780"
	},
	{
		"id": "6eb6f93b068f",
		"ts": "2026-11-21T14:07:45.516Z",
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
		"liquidityUsd": 1428490.78,
		"hash": "6eb6f93b068fcea931df9e94ce795974124c2ca1679ebb6fc43ea7f5d7da48fd"
	},
	{
		"id": "a3f134bdc7ca",
		"ts": "2026-11-21T14:07:45.791Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 12,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.76,
		"flags": [
			"volume_liquidity_anomaly",
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1372786.8,
		"hash": "a3f134bdc7caac83155c632af3aa7740f651c130534b4a761946578d094d7a39"
	},
	{
		"id": "ea74dc6df068",
		"ts": "2026-11-21T14:07:46.054Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 2638306.33,
		"hash": "ea74dc6df0686ed246d76b81859b90a7ddf9c3e1b0b9c8dddd9979232e76cc86"
	},
	{
		"id": "46b45a0e0d27",
		"ts": "2026-11-21T14:07:46.300Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 777045.6,
		"hash": "46b45a0e0d27aa87d9a50b8275c36c881ba2c67baaddfe2dcba4aa52fa35c533"
	},
	{
		"id": "9946079b5048",
		"ts": "2026-11-21T14:07:46.556Z",
		"symbol": "CHECK",
		"token": "0x9126236476eFBA9Ad8aB77855c60eB5BF37586Eb",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 505677.38,
		"hash": "9946079b5048db1b90ca2bf317d6b05f8c4d21acffd31a0a7147e53c43d8e610"
	},
	{
		"id": "a4e509068ba5",
		"ts": "2026-11-21T14:07:46.794Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 465565.73,
		"hash": "a4e509068ba5e7dbabfc901d4cfe81ffae2e07f9f656d60c7d40d7c123c0419b"
	},
	{
		"id": "77c8c7691655",
		"ts": "2026-11-21T14:07:47.035Z",
		"symbol": "ANTc",
		"token": "0xb20000000000000000000016e38FD364d271Ba28",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1130645.6,
		"hash": "77c8c7691655597912be97c9325796695009a3608ad2130470ced59c3fd34c2a"
	},
	{
		"id": "25b8c9c60c83",
		"ts": "2026-11-21T14:07:47.294Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 518797.28,
		"hash": "25b8c9c60c83d65402d65eb195498352de2a63ca178b585c949dbbb40c42ac8e"
	},
	{
		"id": "195a8b7d2998",
		"ts": "2026-11-21T14:07:47.552Z",
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
		"liquidityUsd": 1794082.65,
		"hash": "195a8b7d29985cb59d59352984b7f402c99713157c597ca124ff776f78d1ca23"
	},
	{
		"id": "968c6858f586",
		"ts": "2026-11-21T14:07:47.793Z",
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
		"liquidityUsd": 747840.36,
		"hash": "968c6858f58688a3d5b1fc4955b9789cb49fcf3f75dbf16a7e896f34fcbffed5"
	},
	{
		"id": "a756262f70e9",
		"ts": "2026-11-21T14:07:48.032Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2559972.56,
		"hash": "a756262f70e9a222ffc39c9304419810ca5ee81358b9148622b5be3bfb7e11b6"
	},
	{
		"id": "56ca8fb458a2",
		"ts": "2026-11-21T05:27:34.132Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 75595379.02,
		"hash": "56ca8fb458a2132703565555d588f9b50bcf803177d891ff26b83111e8959113"
	},
	{
		"id": "4e0a3520194e",
		"ts": "2026-11-21T05:27:34.614Z",
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
		"liquidityUsd": 19787829.47,
		"hash": "4e0a3520194ebdcb78c2c7350a9c8e8113543206c24cd902e30f2649e559d640"
	},
	{
		"id": "4d63172c27f5",
		"ts": "2026-11-21T05:27:35.078Z",
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
		"liquidityUsd": 339127.29,
		"hash": "4d63172c27f5a0b559ace207f07f227df033340f5702815e5b66694998d556ab"
	},
	{
		"id": "de1f6e3af9d8",
		"ts": "2026-11-21T05:27:35.337Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3226654.8,
		"hash": "de1f6e3af9d8e5ada0a393e9f1fc2f99de8f1428d91e7ada26f9f6f5e2570543"
	},
	{
		"id": "7d2c11c2f778",
		"ts": "2026-11-21T05:27:35.605Z",
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
		"liquidityUsd": 408364.35,
		"hash": "7d2c11c2f77893ac68e48fc4bb608b8792b4fca1ca7a22944b90aaf94de45db7"
	},
	{
		"id": "70dbcf027ac6",
		"ts": "2026-11-21T05:27:35.862Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 741692.11,
		"hash": "70dbcf027ac6c99f8f6401e15586623d47ef806658ceff539664335ee5aa3c69"
	},
	{
		"id": "7a430ba51825",
		"ts": "2026-11-21T05:27:36.113Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 84552.56,
		"hash": "7a430ba51825336647e4bd11859b79f3f4d40591a835aca24becaac31df0cc67"
	},
	{
		"id": "2188a0253001",
		"ts": "2026-11-21T05:27:36.372Z",
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
		"liquidityUsd": 811503.67,
		"hash": "2188a02530017400d307dc0c66e50c11fc08e437157b962976235fc568768a54"
	},
	{
		"id": "427bfdc21ff0",
		"ts": "2026-11-21T05:27:36.619Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 12,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.76,
		"flags": [
			"volume_liquidity_anomaly",
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1320121.55,
		"hash": "427bfdc21ff0249a0a9de3b0d9354bc39b2edab98ba3c8ae4db90ddeff96cdb0"
	},
	{
		"id": "2fd26be7aa7d",
		"ts": "2026-11-21T05:27:36.880Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 693624.65,
		"hash": "2fd26be7aa7df81ee3c9a9886ce886583a996ba8323c8c43bdc9993d45aa0d56"
	},
	{
		"id": "2362a3e606e1",
		"ts": "2026-11-21T05:27:37.113Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 482023.6,
		"hash": "2362a3e606e126ca7973b9fb8daddf76fa39012e378a73c803df8c3e9fcbc963"
	},
	{
		"id": "c5e8155a7478",
		"ts": "2026-11-21T05:27:37.350Z",
		"symbol": "ANTc",
		"token": "0xb20000000000000000000016e38FD364d271Ba28",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1141159.17,
		"hash": "c5e8155a74786beee2b23ce2e8b11b649e8bb03f612e0ceddf8f5b8aed5088f5"
	},
	{
		"id": "26978a9eb1a5",
		"ts": "2026-11-21T05:27:37.788Z",
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
		"liquidityUsd": 1672070.2,
		"hash": "26978a9eb1a504ae06194970de1b552e11bed2203fd2cee572650018cd78f186"
	},
	{
		"id": "0147e5adc306",
		"ts": "2026-11-21T05:27:38.021Z",
		"symbol": "CHECK",
		"token": "0x9126236476eFBA9Ad8aB77855c60eB5BF37586Eb",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 529077.46,
		"hash": "0147e5adc306adcbbc9acdb0e767a46b8b5ebccd7382eb253c8441076145b2cc"
	},
	{
		"id": "55f29b2ddcd2",
		"ts": "2026-11-21T05:27:38.265Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2171492.04,
		"hash": "55f29b2ddcd23ac929cbc1cf6be78aa2450986e85d313d9aa0bf6ef55b0f724d"
	},
	{
		"id": "408b91759e89",
		"ts": "2026-11-21T05:27:38.505Z",
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
		"liquidityUsd": 211513.83,
		"hash": "408b91759e89cd945d2fdaefe5ee34736d9166d501ae6748832150cb82568d89"
	},
	{
		"id": "cd131ea19dd4",
		"ts": "2026-11-21T05:27:38.767Z",
		"symbol": "SPCXc",
		"token": "0xb2000000000000000000007b9fcbd005511aCBd5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 920001.42,
		"hash": "cd131ea19dd496b44f996cbee1a28c74b609716265a72e0ffc5a3d9fe89b38f9"
	},
	{
		"id": "d8ec8062d890",
		"ts": "2026-11-21T05:27:39.008Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 142169.04,
		"hash": "d8ec8062d890b117c39fecb9bed2ffa4ff3eab2c7c8f3904b516cc0ad832096a"
	},
	{
		"id": "e3652e573806",
		"ts": "2026-11-20T23:38:19.940Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 77306646.09,
		"hash": "e3652e573806515da941b99145f74146eba0ea55e6606079f47bc8de9c2bb9dd"
	},
	{
		"id": "f4323a96cb95",
		"ts": "2026-11-20T23:38:20.149Z",
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
		"liquidityUsd": 20493027.27,
		"hash": "f4323a96cb956d9eb5296ee80411f9898a3127c00e5f86db1ee1e56a6e48c17b"
	},
	{
		"id": "054a6dfdaf71",
		"ts": "2026-11-20T23:38:20.362Z",
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
		"liquidityUsd": 326722.19,
		"hash": "054a6dfdaf71747397212765942ffaa80baed02880c3559225883e387ae2e0d2"
	},
	{
		"id": "8b32f39f715e",
		"ts": "2026-11-20T23:38:20.583Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3318950.59,
		"hash": "8b32f39f715e26877503d072b8e8a963a7415facc9a7cd3d4814abebade92db5"
	},
	{
		"id": "90b9ac533fd9",
		"ts": "2026-11-20T23:38:20.768Z",
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
		"liquidityUsd": 433047.05,
		"hash": "90b9ac533fd95d9885a7ff8b5b3887d2fa1b3f91df92a67e322cc59e7cb91311"
	},
	{
		"id": "3b0158a084e1",
		"ts": "2026-11-20T23:38:20.948Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 763491.21,
		"hash": "3b0158a084e13b83c95c1ecd4a44c990bc6855b74a852da100e82917f5d927da"
	},
	{
		"id": "9ae041c7b7a6",
		"ts": "2026-11-20T23:38:21.148Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 84552.22,
		"hash": "9ae041c7b7a601610557f70756c70f62c36004bf016961576358edff16edeee8"
	},
	{
		"id": "da44097bdc21",
		"ts": "2026-11-20T23:38:21.330Z",
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
		"liquidityUsd": 1496047.11,
		"hash": "da44097bdc210ca0c01cfc3fd6aba03ece67081ea6555e4ef4538ae0d070e641"
	},
	{
		"id": "01559f0d3128",
		"ts": "2026-11-20T23:38:21.518Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 739656.79,
		"hash": "01559f0d3128661475e7956a7b9b998e083c0f23b19e62c23399b098d5355ff2"
	},
	{
		"id": "1af95fba013b",
		"ts": "2026-11-20T23:38:21.723Z",
		"symbol": "ANTc",
		"token": "0xb20000000000000000000016e38FD364d271Ba28",
		"score": 8,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.84,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1149051.25,
		"hash": "1af95fba013bb7f74a1c92bfd406521448d0c7cf4112adeb11950368dc99a81a"
	},
	{
		"id": "b0c52f03f14c",
		"ts": "2026-11-20T23:38:21.910Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1317115.96,
		"hash": "b0c52f03f14c21e5c2b5988527bfc3a2b7089efedc5571fdd2c2857a6962c56d"
	},
	{
		"id": "05184f3691a3",
		"ts": "2026-11-20T23:38:22.098Z",
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
		"liquidityUsd": 1747569.48,
		"hash": "05184f3691a3ca8650d3474e9d16f89b988b7219fdafe6a6781bfb9c183ba7ce"
	},
	{
		"id": "ceef45389573",
		"ts": "2026-11-20T23:38:22.290Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 520214.91,
		"hash": "ceef45389573a9708d4ae3f4fc8905f46c5cb2ba68c75ddb3ab99b7b15a9eebd"
	},
	{
		"id": "d7ae2b2c28c7",
		"ts": "2026-11-20T23:38:22.476Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3068669.04,
		"hash": "d7ae2b2c28c701e30c456b65f056595d35b7aa3f426e4a9b7844682b77809728"
	},
	{
		"id": "0db64baae206",
		"ts": "2026-11-20T23:38:22.706Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 145917.04,
		"hash": "0db64baae206f6d74f4d270aaa87a48a573c50af330ee00c7d0a06113947a0dd"
	},
	{
		"id": "5669f54845ee",
		"ts": "2026-11-20T23:38:22.917Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2590565.56,
		"hash": "5669f54845ee7f0fe7cba169b9954ea3f6a555af5d7d3d968d805737a01ca3ab"
	},
	{
		"id": "3a6130c87cba",
		"ts": "2026-11-20T23:38:23.118Z",
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
		"liquidityUsd": 758303.06,
		"hash": "3a6130c87cba7aabb6b14a8f6a20636040293b3c32bc9bce7f2bf351304f7db0"
	},
	{
		"id": "a98a8cde3291",
		"ts": "2026-11-20T23:38:23.297Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1249217.17,
		"hash": "a98a8cde3291f72c8b84a42290f6f51b487b43ea2500f7d4b296ed557742c3f9"
	},
	{
		"id": "7abd17efaaf7",
		"ts": "2026-11-20T17:30:01.349Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 79423428.17,
		"hash": "7abd17efaaf783bc1c160ee268c09fac95a9041fc709c0f1443ab8053d3ee678"
	},
	{
		"id": "b50da3ff6453",
		"ts": "2026-11-20T17:30:02.135Z",
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
		"liquidityUsd": 19955450.83,
		"hash": "b50da3ff64536b6d6a6a6777fa72247a6f3320029e8de051b0cf7c7df6428c6c"
	},
	{
		"id": "70dc14935785",
		"ts": "2026-11-20T17:30:02.670Z",
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
		"liquidityUsd": 342112.06,
		"hash": "70dc1493578549305e8cb2e2b673965fbe94f5c03bfc1f601b1187ec253d85e1"
	},
	{
		"id": "4a3b1fcbf388",
		"ts": "2026-11-20T17:30:02.908Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3341701.85,
		"hash": "4a3b1fcbf388bb91c7b1b003a0a2451d6e1967c9f9b2425cab980e4c1fb65a88"
	},
	{
		"id": "8b32d974f6f7",
		"ts": "2026-11-20T17:30:03.180Z",
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
		"liquidityUsd": 423404.25,
		"hash": "8b32d974f6f7dbc7af15453ad165579259c4c83ddebb426a776c2bab6bf1702b"
	},
	{
		"id": "1dcd7943acab",
		"ts": "2026-11-20T17:30:03.442Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 759347.13,
		"hash": "1dcd7943acabbb35bfdac957784d8afac331085a1d1ebd7b6e3fc46e1730cdaa"
	},
	{
		"id": "88b1b3d6587f",
		"ts": "2026-11-20T17:30:03.700Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 248412.99,
		"hash": "88b1b3d6587f51809f04c95e0f478b76f07810bc95dbbc3646ae4bddca6b84db"
	},
	{
		"id": "4fbdeac23f5a",
		"ts": "2026-11-20T17:30:03.971Z",
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
		"liquidityUsd": 1506633.07,
		"hash": "4fbdeac23f5afc7d2b24ec593eaee844e329080a8699f6ddfa594858aeeb7af0"
	},
	{
		"id": "babb5452c97a",
		"ts": "2026-11-20T17:30:04.213Z",
		"symbol": "ANTc",
		"token": "0xb20000000000000000000016e38FD364d271Ba28",
		"score": 8,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.84,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1140409.84,
		"hash": "babb5452c97aa698d6e593371c6d80a4cc19925173d594b8034780a3baa81770"
	},
	{
		"id": "c0b121521232",
		"ts": "2026-11-20T17:30:04.471Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 730335.05,
		"hash": "c0b1215212321199cde8443e9f7aca853c6dacf41337fa42e956ed9eae1a4fc5"
	},
	{
		"id": "5affbd53c6c5",
		"ts": "2026-11-20T17:30:04.691Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3043740.97,
		"hash": "5affbd53c6c5f8ae56fb87c5c5a8b358cc1feaf1ff8007c48f1792cc18e473dd"
	},
	{
		"id": "6b8eb670622d",
		"ts": "2026-11-20T17:30:04.909Z",
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
		"liquidityUsd": 1759333.14,
		"hash": "6b8eb670622d0ca89e166b8fab470a5ec2ebb7094ffee0b2cda95914ab188f1f"
	},
	{
		"id": "c04dbc991e00",
		"ts": "2026-11-20T17:30:05.160Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 148094.19,
		"hash": "c04dbc991e001c8164fa1897d1a643715279fa1b3cd78401fc9aca42370034c8"
	}
]
