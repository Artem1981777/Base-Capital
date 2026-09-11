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
	"updatedAt": "2026-09-11T19:25:13.619Z",
	"tokensScored": 17043,
	"verdictsIssued": 17043,
	"safe": 14440,
	"risky": 1254,
	"likelyRug": 1349,
	"ticks": 975
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "e54672455765",
		"ts": "2026-09-11T19:25:09.626Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 119275123.44,
		"hash": "e54672455765369076059227e1cc58c100c63139dd5d278d03274a578a92fcaf"
	},
	{
		"id": "c4a9d85059be",
		"ts": "2026-09-11T19:25:09.838Z",
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
		"liquidityUsd": 17885725.8,
		"hash": "c4a9d85059be4ffdd5f7f320f6ac6e151edfd03c96ac4fe8ac285e0aa273752e"
	},
	{
		"id": "0094f0759f18",
		"ts": "2026-09-11T19:25:10.042Z",
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
		"liquidityUsd": 1004620.48,
		"hash": "0094f0759f182f69c604ed6cbbf5902ba5c0a66454ecbedae3fbed354e2ef9da"
	},
	{
		"id": "bc1fd98a28c9",
		"ts": "2026-09-11T19:25:10.255Z",
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
		"liquidityUsd": 33305652.58,
		"hash": "bc1fd98a28c939d5b0210d8d2f54650b28f633a820d16332bdcb6b961784f8db"
	},
	{
		"id": "30c48b8c067a",
		"ts": "2026-09-11T19:25:10.475Z",
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
		"liquidityUsd": 4093784.18,
		"hash": "30c48b8c067a520df1370662b69e587c7f67742097c5c53bc973479aa7305978"
	},
	{
		"id": "8e2eefb8a37a",
		"ts": "2026-09-11T19:25:10.694Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1185979.65,
		"hash": "8e2eefb8a37a7974913a71293d3c4ca4755bfd342adb61ea6051fdc17ef440ff"
	},
	{
		"id": "41368d826c96",
		"ts": "2026-09-11T19:25:10.897Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1369937.69,
		"hash": "41368d826c96988582c5e48ff5f9db7a7d7ad51bcf8fd11e3ede4e47e706c828"
	},
	{
		"id": "d5e0a37a2e8a",
		"ts": "2026-09-11T19:25:11.126Z",
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
		"liquidityUsd": 1156802.05,
		"hash": "d5e0a37a2e8a5e7c6c95961f4ce1e47faced5a2218922a8caa8158c086314ab4"
	},
	{
		"id": "02baec08897d",
		"ts": "2026-09-11T19:25:11.485Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 175759.34,
		"hash": "02baec08897d3b7c9afb45bf852423444348d199e65d2e84f6ba0b81e7e80687"
	},
	{
		"id": "67796c4b3cd6",
		"ts": "2026-09-11T19:25:11.690Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 616054.28,
		"hash": "67796c4b3cd62f1743cba69c7afd4f81509dc443df7341f777200350b022d236"
	},
	{
		"id": "a43ffc72521c",
		"ts": "2026-09-11T19:25:11.904Z",
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
		"liquidityUsd": 747151.28,
		"hash": "a43ffc72521cc0c872ddb1cb36f1e0568ef7b3a5ca359836cae63c6126253150"
	},
	{
		"id": "c28b313ce1c2",
		"ts": "2026-09-11T19:25:12.114Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1650816.69,
		"hash": "c28b313ce1c264d0e59ad92e724fcdb48920aad4be7ecf7f25ba2cc5d97f83a0"
	},
	{
		"id": "c5d3db03c7d9",
		"ts": "2026-09-11T19:25:12.303Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14510157.84,
		"hash": "c5d3db03c7d9dfc106750773d9c4721f75cb12798f81e63184b412755f850443"
	},
	{
		"id": "a87c4b2f9245",
		"ts": "2026-09-11T19:25:12.497Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 153771.42,
		"hash": "a87c4b2f9245c6d9b9fc68ee4cbf4cd00fb559f6efc464e5cfb2acbcf7d00f53"
	},
	{
		"id": "f76f90e3be9e",
		"ts": "2026-09-11T19:25:12.771Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 260236.41,
		"hash": "f76f90e3be9e642488ef84a2942eba68a7c136e9616deca7746aa3413318643f"
	},
	{
		"id": "5d138b40c3f1",
		"ts": "2026-09-11T19:25:12.985Z",
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
		"liquidityUsd": 785691.8,
		"hash": "5d138b40c3f1243b68c26bfe5eae061a113646acd15941439988d7d37ae5605f"
	},
	{
		"id": "3ae3a86cd2c9",
		"ts": "2026-09-11T19:25:13.220Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 469566.34,
		"hash": "3ae3a86cd2c9ccc3702c1ff437599444fb1689d53f7d112da3ab58985a5ab26b"
	},
	{
		"id": "d135876ce167",
		"ts": "2026-09-11T19:25:13.419Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 381692,
		"hash": "d135876ce167c93560af3ef4f2790b2200e5e3a6c54b508c8e411f3b352ad842"
	},
	{
		"id": "7afcba7a1395",
		"ts": "2026-09-11T19:25:13.619Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1166007.61,
		"hash": "7afcba7a13954e40272fa2314c3e091fbbbcf28d1f74214944b70ae360acbcea"
	},
	{
		"id": "133f11aa1810",
		"ts": "2026-09-11T16:52:42.828Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118018689.27,
		"hash": "133f11aa18104082ef97e1a198e6f93500f72765aca3615f99e228cbac78766f"
	},
	{
		"id": "694d96d8d4bc",
		"ts": "2026-09-11T16:52:43.209Z",
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
		"liquidityUsd": 13360525.39,
		"hash": "694d96d8d4bca12ca70e5cd4042a1f38ac50d8491a6693407c76969607c864ff"
	},
	{
		"id": "c6d9d1861a45",
		"ts": "2026-09-11T16:52:43.416Z",
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
		"liquidityUsd": 1019455.68,
		"hash": "c6d9d1861a45530c8f5599fa50f6e4f730c2d6492ee2df1520a43a411c177ce4"
	},
	{
		"id": "111825ffac3b",
		"ts": "2026-09-11T16:52:43.626Z",
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
		"liquidityUsd": 34393319.79,
		"hash": "111825ffac3b0c02ecac0a678fda6910eafdf76b2009e1d852897bc85686ad7e"
	},
	{
		"id": "ecfae83a6313",
		"ts": "2026-09-11T16:52:43.834Z",
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
		"liquidityUsd": 4176557.15,
		"hash": "ecfae83a6313aa37d36a80ff6ef82ee680394676b1bc2541e59ac491365a9b34"
	},
	{
		"id": "dc7e1de0546e",
		"ts": "2026-09-11T16:52:44.047Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1203332.37,
		"hash": "dc7e1de0546ef0e7c40c8c8ffb5515a143337fd591268471fdfe7a095aa649b1"
	},
	{
		"id": "5d8a3d742920",
		"ts": "2026-09-11T16:52:44.262Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34393319.79,
		"hash": "5d8a3d742920dcd8687caa07d193ef0a047b08b024e155b63fa8ae6fed5e0295"
	},
	{
		"id": "8ba58da05bd8",
		"ts": "2026-09-11T16:52:44.528Z",
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
		"liquidityUsd": 1174591.01,
		"hash": "8ba58da05bd8ab14a515df1064658b48b4aeb19c3d065cbdeb96eb4903ffc351"
	},
	{
		"id": "1e7fab35535d",
		"ts": "2026-09-11T16:52:44.742Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1596550.86,
		"hash": "1e7fab35535d473d70cff1303260e9721cd0f156efe413b34f13fa302f1a36db"
	},
	{
		"id": "b5c41db0f29e",
		"ts": "2026-09-11T16:52:44.946Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 634682.49,
		"hash": "b5c41db0f29e4cd4193d83f2b6b62c0b2ed388615fbfa3d9698528b78a045166"
	},
	{
		"id": "3fd3db0d3b8d",
		"ts": "2026-09-11T16:52:45.146Z",
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
		"liquidityUsd": 748034.78,
		"hash": "3fd3db0d3b8dcd31a82a5c67252a465c6824cc4f5f346818a48c8b309026e859"
	},
	{
		"id": "c517a00d5e36",
		"ts": "2026-09-11T16:52:45.369Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1673386.38,
		"hash": "c517a00d5e36af3f7f26948b60dc87f430376766d42e39b50d0b2a25164e7f25"
	},
	{
		"id": "2c6fa5506d45",
		"ts": "2026-09-11T16:52:45.577Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14836879.65,
		"hash": "2c6fa5506d45c2637efd5ab703bdb3ae97b5213814630223d7c0b62b86ab1aae"
	},
	{
		"id": "b312d7b45b74",
		"ts": "2026-09-11T16:52:46.184Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 255915.33,
		"hash": "b312d7b45b74c7cde957ed0e93dc2ea3b7a34b6012480ca76fe51b3b9e80a984"
	},
	{
		"id": "668816aaab3a",
		"ts": "2026-09-11T16:52:46.386Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 164674.18,
		"hash": "668816aaab3a8e1489e5631151f4ba67028b339420f9ad0bbcfa4ade06ce7802"
	},
	{
		"id": "d3b31b52209d",
		"ts": "2026-09-11T16:52:46.580Z",
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
		"liquidityUsd": 806555.43,
		"hash": "d3b31b52209d10f63fb9b939f7b3f96e1d121960fa8dcb8716600e0cdd328ff4"
	},
	{
		"id": "f8c27dbf2e14",
		"ts": "2026-09-11T16:52:46.786Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 398318.39,
		"hash": "f8c27dbf2e14928c344bc25dc0c94076cfbcb8db125bdce4b3799a985fc74151"
	},
	{
		"id": "7600a91748e0",
		"ts": "2026-09-11T16:52:46.975Z",
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
		"liquidityUsd": 554215.28,
		"hash": "7600a91748e0b585b7b1565f4af93ba7bafb4dcca6f78b2e595698304e865171"
	},
	{
		"id": "f5acfea0925c",
		"ts": "2026-09-11T16:52:47.169Z",
		"symbol": "HTTPBASE20",
		"token": "0xB2000000000000000000004b27c608b6e9814Cc0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 28863.8,
		"hash": "f5acfea0925ce405d390d8463e6afe35f062ce431448cdf9e55e903256fcb414"
	},
	{
		"id": "d6a4e66726f6",
		"ts": "2026-09-11T12:33:13.415Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118102299.58,
		"hash": "d6a4e66726f6e9680ece25f3788b8bfc13722a8636cff2ba0b013d3b8199e4b2"
	},
	{
		"id": "304f110162a8",
		"ts": "2026-09-11T12:33:13.688Z",
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
		"liquidityUsd": 13626906.97,
		"hash": "304f110162a89bb5be9e09251bdf44544b575990c110dc1582a76875c14088da"
	},
	{
		"id": "ede1ed9ad7a1",
		"ts": "2026-09-11T12:33:13.949Z",
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
		"liquidityUsd": 987571.67,
		"hash": "ede1ed9ad7a1fae834f57d189b9cf28b003e462027b104014b4c6eb6959b3468"
	},
	{
		"id": "cbc4dc78b33a",
		"ts": "2026-09-11T12:33:14.223Z",
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
		"liquidityUsd": 32716689.67,
		"hash": "cbc4dc78b33a1eae2d90a7d39fb2dd1be62c10c77dd460e97d37fe975986baa1"
	},
	{
		"id": "d415a86f1d0b",
		"ts": "2026-09-11T12:33:14.474Z",
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
		"liquidityUsd": 3974813.2,
		"hash": "d415a86f1d0b71ea0ef425fa330cd930390b73295e58b682c3bf232a94a2d918"
	},
	{
		"id": "53a4e29c77df",
		"ts": "2026-09-11T12:33:14.727Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1139976.34,
		"hash": "53a4e29c77df09364acb4c274da82847f456d536acd76ebe7455ca5ae4a22c82"
	},
	{
		"id": "0e063d0d8ae6",
		"ts": "2026-09-11T12:33:14.982Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 32634558.24,
		"hash": "0e063d0d8ae6b57546987c5655d3a75be9509fa21d871d85fba4f4d415a188a8"
	},
	{
		"id": "d0685ebcf596",
		"ts": "2026-09-11T12:33:15.250Z",
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
		"liquidityUsd": 1113863.01,
		"hash": "d0685ebcf59659fb484371c4f973d902f773b74e865d3db151782a464fcd181c"
	},
	{
		"id": "72444d461c20",
		"ts": "2026-09-11T12:33:15.541Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1566931.95,
		"hash": "72444d461c20b637c6c0d3db1dd0630600c6dede37591920d97badadebe929bd"
	},
	{
		"id": "41a1d744088b",
		"ts": "2026-09-11T12:33:15.795Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 605234.07,
		"hash": "41a1d744088b1030e800399a22a91937cd9ff0e2628fe32afe1225ea5adc128b"
	},
	{
		"id": "acb9c89e016b",
		"ts": "2026-09-11T12:33:16.035Z",
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
		"liquidityUsd": 719051.58,
		"hash": "acb9c89e016bca331442c35b94dad7a5d9ddbd71b6ed2ccdac1747bc4b0f1593"
	},
	{
		"id": "7dfe0f912908",
		"ts": "2026-09-11T12:33:16.288Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1589637.51,
		"hash": "7dfe0f912908550f1d273f9ad7efbcc620a00221422d35612dc00260b2990091"
	},
	{
		"id": "da2c546ef03a",
		"ts": "2026-09-11T12:33:16.524Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14376158.65,
		"hash": "da2c546ef03a926547df02369cc0fe0e6d2d289d100231e773f3c4bad22e5667"
	},
	{
		"id": "caeccde05f02",
		"ts": "2026-09-11T12:33:16.780Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 254017.75,
		"hash": "caeccde05f02d8f95664309fafe65494e4e5457a187b18c63961ffd2c255a787"
	},
	{
		"id": "e39b34082f99",
		"ts": "2026-09-11T12:33:17.035Z",
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
		"liquidityUsd": 575014.8,
		"hash": "e39b34082f991cdb6435b9a9d17e1e5d677684a0661fea3cdaebe3344e5c447a"
	},
	{
		"id": "2999b010c4e3",
		"ts": "2026-09-11T12:33:17.270Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 429881.06,
		"hash": "2999b010c4e386cfc722aee2ed0be4b36bf756892883e69a668c4a4664729712"
	},
	{
		"id": "5eab06f4a0af",
		"ts": "2026-09-11T12:33:17.533Z",
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
		"liquidityUsd": 730468.3,
		"hash": "5eab06f4a0affd189b24f539bca59cd73b0081e31a99c534d00b615c3524a667"
	},
	{
		"id": "373b3cf21a1d",
		"ts": "2026-09-11T12:33:17.796Z",
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
		"liquidityUsd": 1319721.55,
		"hash": "373b3cf21a1d2ab84362538eadf36fbe6d82eed15a80e9d70d684d1716bb2829"
	},
	{
		"id": "67b0f53f6d99",
		"ts": "2026-09-11T12:33:18.054Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 370669.99,
		"hash": "67b0f53f6d99fd4263a9e0b0b5f2570ef3f3df7285c6232f2bbef2c7bd04d623"
	},
	{
		"id": "f4ce1e7b402c",
		"ts": "2026-09-11T07:44:14.975Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117888260.85,
		"hash": "f4ce1e7b402c4d518997bafb8f4e76cefdca32f5d64bea0c61186b37c7c15c36"
	},
	{
		"id": "900e03f2601c",
		"ts": "2026-09-11T07:44:15.624Z",
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
		"liquidityUsd": 18049271.09,
		"hash": "900e03f2601ca649d57d1c532fa01a5bb5ff625fec2aaf3990be65ffdd72e731"
	},
	{
		"id": "e2bda2d8ebc8",
		"ts": "2026-09-11T07:44:16.078Z",
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
		"liquidityUsd": 992062.46,
		"hash": "e2bda2d8ebc854865f9c98abb962792903f2fc35a340e7a973ef84a01fdc1492"
	},
	{
		"id": "aee2e4228ce9",
		"ts": "2026-09-11T07:44:16.518Z",
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
		"liquidityUsd": 32897295.53,
		"hash": "aee2e4228ce9c489ff5405535d21228950b0902768e4d0ab00d8635b4157c3fb"
	},
	{
		"id": "769bb140469c",
		"ts": "2026-09-11T07:44:16.765Z",
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
		"liquidityUsd": 4048520.32,
		"hash": "769bb140469cdd308ebb37405f9a66a85b6af656d7dd44d4e0683c497c0eceb2"
	},
	{
		"id": "66da50a91c64",
		"ts": "2026-09-11T07:44:17.013Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1161552.79,
		"hash": "66da50a91c642612a3067e5caa95c567e280906cd970f817a70872dea38b11e7"
	},
	{
		"id": "d47cd5e8264f",
		"ts": "2026-09-11T07:44:17.261Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 32897295.53,
		"hash": "d47cd5e8264f43f81432608c37fdb63fc3b4e2fbe160671f2e80e459b4287959"
	},
	{
		"id": "32ecc60c6622",
		"ts": "2026-09-11T07:44:17.532Z",
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
		"liquidityUsd": 1123216.07,
		"hash": "32ecc60c6622bfdc9e052a8187cd710120f688fc8d2ecdf7b50b2b9db79d74be"
	},
	{
		"id": "0a5e47f50e4a",
		"ts": "2026-09-11T07:44:18.375Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1544005.36,
		"hash": "0a5e47f50e4affc2f9ee4a5176f6c474be1fd8da74992bd285cbc2130976ecd3"
	},
	{
		"id": "20d3310c3640",
		"ts": "2026-09-11T07:44:18.618Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 551884.35,
		"hash": "20d3310c364028c4374d74d2f251d43c933e26045431215385c7b2f0390b9c45"
	},
	{
		"id": "022a9ebcbd24",
		"ts": "2026-09-11T07:44:18.845Z",
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
		"liquidityUsd": 791313.37,
		"hash": "022a9ebcbd24e05693197479563387fc6b0931fe9ad1e060821ecd4385b75433"
	},
	{
		"id": "088f7996e1df",
		"ts": "2026-09-11T07:44:19.072Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1636770.57,
		"hash": "088f7996e1df88cbdd7452ce1ddf4c333dcdae3493bef0df4f4b4f5b5a6464ff"
	},
	{
		"id": "2f10d1bc5492",
		"ts": "2026-09-11T07:44:19.305Z",
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
		"liquidityUsd": 524013.22,
		"hash": "2f10d1bc54928081a61f37de3f3955b86f4096cf52454c3b3ebc9f0ca8d22dde"
	},
	{
		"id": "9d4e7a09de18",
		"ts": "2026-09-11T07:44:19.533Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 241093.6,
		"hash": "9d4e7a09de188f9620ca6bf26b63505f8fd7ae9e819cdf055658b59604881624"
	},
	{
		"id": "5b93fdb9d7dd",
		"ts": "2026-09-11T07:44:19.761Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14350147.42,
		"hash": "5b93fdb9d7ddd2c49d780d213802f0edb54ca00fbda084594166e745c85750b1"
	},
	{
		"id": "f5853af07b0a",
		"ts": "2026-09-11T07:44:19.988Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 437894.17,
		"hash": "f5853af07b0ae6a8bfe2e0222fb91d1b170f82fb5dc4cba8b6709b6f222b3b8b"
	},
	{
		"id": "02a6d0a52cee",
		"ts": "2026-09-11T07:44:20.215Z",
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
		"liquidityUsd": 744425.63,
		"hash": "02a6d0a52cee726ee3dd44aa06736dc28969d4cef670f613d823a59c1b1de8fc"
	},
	{
		"id": "856f5e7825c0",
		"ts": "2026-09-11T07:44:20.442Z",
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
		"liquidityUsd": 251404.32,
		"hash": "856f5e7825c096f423e6e6108d5cf022e92b55ae5924e0b09125ffb93586667d"
	},
	{
		"id": "b256d32666c6",
		"ts": "2026-09-11T07:44:20.668Z",
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
		"liquidityUsd": 1351382.18,
		"hash": "b256d32666c677dc48e2aa4f82bc28c6b593bc819da7badca9925b6b5c63953e"
	},
	{
		"id": "7a8d81db5423",
		"ts": "2026-09-11T07:44:20.895Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 611126.08,
		"hash": "7a8d81db542365a3d16189b48f5e8138d15472ea514c6b6f3c6bce1da1906194"
	},
	{
		"id": "9e3dd91b7474",
		"ts": "2026-09-11T02:48:22.910Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117488636.43,
		"hash": "9e3dd91b7474aa1f3760db15202dd6b1386baf341cb0ab6b751f3890c014de33"
	},
	{
		"id": "b394fed8056a",
		"ts": "2026-09-11T02:48:23.334Z",
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
		"liquidityUsd": 16854677.76,
		"hash": "b394fed8056ac3834f8d80c7a0e28a7bfb33ad9c7f047a44b0de2f98ff3a1946"
	},
	{
		"id": "b67c10c5b8c4",
		"ts": "2026-09-11T02:48:23.593Z",
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
		"liquidityUsd": 984857.03,
		"hash": "b67c10c5b8c484b0a6d771259056be7299d0a0a3efaeb40f6c661230f358cf04"
	},
	{
		"id": "237156fbf52a",
		"ts": "2026-09-11T02:48:23.826Z",
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
		"liquidityUsd": 32496841.08,
		"hash": "237156fbf52a5aee11701150dc1bc3b034b2ba9e11de3e217ad8975e405ad68f"
	},
	{
		"id": "25a0cbafbe28",
		"ts": "2026-09-11T02:48:24.067Z",
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
		"liquidityUsd": 4015401.05,
		"hash": "25a0cbafbe28ac34600b0bd1f19598c1388d95f36fbd44f987b1b16b5c285d61"
	},
	{
		"id": "99d2424c7a4a",
		"ts": "2026-09-11T02:48:24.306Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1150217.72,
		"hash": "99d2424c7a4a63110758472c11e297559b25dc741746fb095c9e471f31873458"
	},
	{
		"id": "f788b5377a6c",
		"ts": "2026-09-11T02:48:24.551Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2419194.2,
		"hash": "f788b5377a6cc814d1c91b843cf48d7ea5736ef4a7c0aa9d723519110120af28"
	},
	{
		"id": "1e869e910794",
		"ts": "2026-09-11T02:48:24.788Z",
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
		"liquidityUsd": 1097187.11,
		"hash": "1e869e9107941fda975730eaa3be22f8c3ee7793737e11ebd737b72d78d0f5af"
	},
	{
		"id": "f5ff9ac61a31",
		"ts": "2026-09-11T02:48:25.034Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1567966.49,
		"hash": "f5ff9ac61a31a9a128a09b63fd9fb0ee04f98eff11edff1d934ae3fa8d33e0b1"
	},
	{
		"id": "f360490a0d50",
		"ts": "2026-09-11T02:48:25.265Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 553567.77,
		"hash": "f360490a0d5064fd300f9d60c61853cfd010c855d00b16de3ef9d07178a74f68"
	},
	{
		"id": "c751c740b24b",
		"ts": "2026-09-11T02:48:25.485Z",
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
		"liquidityUsd": 517658.7,
		"hash": "c751c740b24bfdcad18eff2c2795395085c173489994f6ae4c07dee590918e10"
	},
	{
		"id": "05740fd3eeda",
		"ts": "2026-09-11T02:48:25.706Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1566592.89,
		"hash": "05740fd3eeda0a6952fa55741e47a7fe780c6539d923a31c2e89e5b40d2cce87"
	},
	{
		"id": "57408d2a9abe",
		"ts": "2026-09-11T02:48:25.930Z",
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
		"liquidityUsd": 779332.37,
		"hash": "57408d2a9abeb6dbd1a263e996bfae083d313e36e8bbece6163474fdf30c3958"
	},
	{
		"id": "36c9454f8d2d",
		"ts": "2026-09-11T02:48:26.143Z",
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
		"liquidityUsd": 762195.5,
		"hash": "36c9454f8d2d9b4fa647208a02ea7d9204c8093b46ed09a4ed0f3597b4712cf9"
	},
	{
		"id": "02b3d36a820e",
		"ts": "2026-09-11T02:48:26.360Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14087154.55,
		"hash": "02b3d36a820e62598db403c783dcd50eed20a8e935731c83631b244026bc7ff8"
	},
	{
		"id": "9d6aac57d3f9",
		"ts": "2026-09-11T02:48:26.581Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 330115.84,
		"hash": "9d6aac57d3f9364ca9d78afca2ed3a6855128cd412bd9bf91db28cc757590195"
	},
	{
		"id": "f31e4d506e25",
		"ts": "2026-09-11T02:48:26.796Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 250921.89,
		"hash": "f31e4d506e25c831a2d515bc9f5f39be69774ef94d61bbd2fd4baae74719e064"
	},
	{
		"id": "4a262b9be81a",
		"ts": "2026-09-11T02:48:27.007Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 211733.12,
		"hash": "4a262b9be81a5c5b96cdac721902e19edc64797907d19e1c6adc9cf2610b3d58"
	},
	{
		"id": "fdd2d3c27f41",
		"ts": "2026-09-11T02:48:27.235Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 997135.04,
		"hash": "fdd2d3c27f41e1d01a02c925d7642c8659b5dee3f138a9fb0ab90a9573fe9f5e"
	},
	{
		"id": "7c5f72b82124",
		"ts": "2026-09-11T02:48:27.453Z",
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
		"liquidityUsd": 1370052.28,
		"hash": "7c5f72b821244cc3269b222629bddc32d4c50656039b73294ce2e5d1d7c62dfc"
	},
	{
		"id": "8580a9859c54",
		"ts": "2026-09-10T23:40:00.104Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117366417.65,
		"hash": "8580a9859c547f0fba466998054e20ca93f7cb05ca8994ebc1c38f337b9a7342"
	},
	{
		"id": "4133ee932432",
		"ts": "2026-09-10T23:40:00.785Z",
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
		"liquidityUsd": 18291365.78,
		"hash": "4133ee9324327885c17df97842853941127776095b31fd0e24f506f86e292f68"
	},
	{
		"id": "835dd1d718a2",
		"ts": "2026-09-10T23:40:01.056Z",
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
		"liquidityUsd": 982251.6,
		"hash": "835dd1d718a26cf9bb0225104b124195159e74f4b86a51ef7d98c719bae5be73"
	},
	{
		"id": "c033355dc1a4",
		"ts": "2026-09-10T23:40:01.323Z",
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
		"liquidityUsd": 32593794.06,
		"hash": "c033355dc1a465579402a37cd77e4951890fc990af3a83096e2dcdc4f08188fe"
	},
	{
		"id": "73c887b60434",
		"ts": "2026-09-10T23:40:01.584Z",
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
		"liquidityUsd": 4014000.25,
		"hash": "73c887b604341ab342a3475fc926c2921bcd674a8cc469aaca16255534809078"
	},
	{
		"id": "71381ac8d32c",
		"ts": "2026-09-10T23:40:02.173Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1143446.5,
		"hash": "71381ac8d32c84d7698db602fcf7b5dd2a828ea3f4b7913d4e99bd7b49834edb"
	},
	{
		"id": "034355cbde49",
		"ts": "2026-09-10T23:40:02.464Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1725485.5,
		"hash": "034355cbde495c83dcdefdafca69660ae3c1d783f547977e03a4654d9037d221"
	},
	{
		"id": "e591f02984ae",
		"ts": "2026-09-10T23:40:02.732Z",
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
		"liquidityUsd": 1094718.63,
		"hash": "e591f02984ae4c6eee0e539bf45fe04d5c4c18abbab569cfdad39accfd9bc03a"
	},
	{
		"id": "bde03bc34f8e",
		"ts": "2026-09-10T23:40:03.216Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1725485.5,
		"hash": "bde03bc34f8e843c977ed4d3c44e64bc7216b43eeb6450f79b4d4296203d3f3d"
	},
	{
		"id": "fb894441aea6",
		"ts": "2026-09-10T23:40:03.562Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 543963.06,
		"hash": "fb894441aea6cc04ef45c317c4febb6ef22eda2827b29fc1fd63b0a125bdacf9"
	},
	{
		"id": "0b285c56da5d",
		"ts": "2026-09-10T23:40:03.840Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 534971.94,
		"hash": "0b285c56da5d083ff8cd517faf1e6e182467080ca3dbc05c003181c9d89c7c79"
	},
	{
		"id": "0fc3e161c7f2",
		"ts": "2026-09-10T23:40:04.075Z",
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
		"liquidityUsd": 829815.18,
		"hash": "0fc3e161c7f2f8068aa7b11cd37f74c8b9fc07061b9a566e382cb397cc053c74"
	},
	{
		"id": "ecb4695d74fb",
		"ts": "2026-09-10T23:40:04.309Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1545312.48,
		"hash": "ecb4695d74fba813379302a515e354e4a0b9d42444b4a21c757196ad4d326110"
	},
	{
		"id": "ffeaec90f32f",
		"ts": "2026-09-10T23:40:04.544Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14410443.78,
		"hash": "ffeaec90f32f45b1a7171fa78d836a0b1e588d28e75b6342fad6d2b4a9727993"
	},
	{
		"id": "48c11b0dd672",
		"ts": "2026-09-10T23:40:04.784Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 335483.28,
		"hash": "48c11b0dd6727bc6081a28eb7a66478a52bcf195cd17b12a1f2b199fd22fece6"
	},
	{
		"id": "197202fcf753",
		"ts": "2026-09-10T23:40:05.022Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 247434.65,
		"hash": "197202fcf7539e1f1b00d693bb0697fd6d8d81a3634ea87b29d0ecec829fc2d9"
	},
	{
		"id": "1875b298e056",
		"ts": "2026-09-10T23:40:05.260Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 998343.93,
		"hash": "1875b298e0568bc25290bce2d468376c2eb322a344c5854a8182901030114992"
	},
	{
		"id": "f6c91981b710",
		"ts": "2026-09-10T23:40:05.497Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 220844.05,
		"hash": "f6c91981b71007690a52f82fee63f105780760cd895b4385e60df5c1c32c4def"
	},
	{
		"id": "c5ee974e2bf7",
		"ts": "2026-09-10T23:40:05.733Z",
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
		"liquidityUsd": 1272851.07,
		"hash": "c5ee974e2bf7ae18b4fd0b566e5e058e853d12a9be2625630b3212fc2e5c6342"
	},
	{
		"id": "e6d01129a868",
		"ts": "2026-09-10T23:40:05.972Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 603565.38,
		"hash": "e6d01129a868549bfd029a64bd40f813579d80d7afe2ca2b845788639aece987"
	},
	{
		"id": "f9024ff7e3d8",
		"ts": "2026-09-10T21:21:53.408Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117813651.93,
		"hash": "f9024ff7e3d8e8a7103202f77197fabe9cf95d102bdea1c45af7d1d53b23fcc3"
	},
	{
		"id": "52aa1688c3e1",
		"ts": "2026-09-10T21:21:53.668Z",
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
		"liquidityUsd": 17714279.23,
		"hash": "52aa1688c3e19694d35632bad243daaf31561e4f3396b3944aba22a3ab47259d"
	},
	{
		"id": "65bac7738389",
		"ts": "2026-09-10T21:21:53.919Z",
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
		"liquidityUsd": 989359.23,
		"hash": "65bac7738389265b13f2ccd4b7cb096d3706a0155826ad5e382a6a0ebcf9d2bf"
	},
	{
		"id": "3e8e2e8b47ac",
		"ts": "2026-09-10T21:21:54.170Z",
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
		"liquidityUsd": 32816310.74,
		"hash": "3e8e2e8b47ac424092b31e1fc308809a2ce5c331f55b0b63dadd5b8210513017"
	},
	{
		"id": "37abfc5b5de5",
		"ts": "2026-09-10T21:21:54.448Z",
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
		"liquidityUsd": 4039074.77,
		"hash": "37abfc5b5de54cf1c9410c3c60ee2b7207337269988df2c39edc34e4b2145b1c"
	},
	{
		"id": "efec0e22b294",
		"ts": "2026-09-10T21:21:54.728Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1151082.52,
		"hash": "efec0e22b294fbf5aa27937f1d63dc13aa62365f56e92cf9a52ee9f0ce0d7afa"
	},
	{
		"id": "4a9dd4828a70",
		"ts": "2026-09-10T21:21:54.992Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1727526.52,
		"hash": "4a9dd4828a7071d2be993c03452b63fd4282e9d5bc35c133a183122592e6a208"
	},
	{
		"id": "1caa948cf12d",
		"ts": "2026-09-10T21:21:55.251Z",
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
		"liquidityUsd": 1103075.25,
		"hash": "1caa948cf12db7f021c1874294bb553af93ab9aa0c04f682e009456a7f56c4d8"
	},
	{
		"id": "a108a9c438ee",
		"ts": "2026-09-10T21:21:55.516Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1727526.52,
		"hash": "a108a9c438eea0936017aa1c9abc7b1cb7cb69782b5778e5d96dc9696a3ff0ad"
	},
	{
		"id": "c96c33e50b54",
		"ts": "2026-09-10T21:21:55.774Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 575344.56,
		"hash": "c96c33e50b5403ffc24123436a640bb9e5d9cc7cdbdc264687f5c0909feb8564"
	},
	{
		"id": "105bd20f6876",
		"ts": "2026-09-10T21:21:56.020Z",
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
		"liquidityUsd": 509438.64,
		"hash": "105bd20f6876b3fe3cac1bf4c154a102439406915c976f8d5e3bfffb5b174e10"
	},
	{
		"id": "d8e21b603547",
		"ts": "2026-09-10T21:21:56.257Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1577178.12,
		"hash": "d8e21b6035476653ccb1eadd1dcca21055228daf74368431f8f14dd654d67e53"
	},
	{
		"id": "3ee115406a87",
		"ts": "2026-09-10T21:21:56.496Z",
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
		"liquidityUsd": 870399.95,
		"hash": "3ee115406a87424986eb2f14c8bf179bf060e9614346d31e83b9ddfca6f30025"
	},
	{
		"id": "fd36d0dad3d5",
		"ts": "2026-09-10T21:21:56.734Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 338350.76,
		"hash": "fd36d0dad3d5ac02a65ab634a8c4e4b0ddde3f2928f2585df75a91011fdbd8a6"
	},
	{
		"id": "6f87b9b5f83b",
		"ts": "2026-09-10T21:21:56.979Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14338064.48,
		"hash": "6f87b9b5f83b203c6b5859bc775ce44ad47894da3e67be0b8cf41d7bce5fa6b7"
	},
	{
		"id": "f628f05bae8b",
		"ts": "2026-09-10T21:21:57.216Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 429269.86,
		"hash": "f628f05bae8ba7d0208d855eb06dc4b7df69d2e92ca139c8f1876e5cd95b59dc"
	},
	{
		"id": "b3a25c386160",
		"ts": "2026-09-10T21:21:57.456Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 244820.03,
		"hash": "b3a25c386160757fdd945c2349a685ef34358442b42da2b14647512ee088319c"
	},
	{
		"id": "cbc1b2027ace",
		"ts": "2026-09-10T21:21:57.694Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 225016.4,
		"hash": "cbc1b2027ace1efc2e5284bcb764f204fae24fcad4c67dc9b12fc6faf948aca3"
	},
	{
		"id": "bd94443bf041",
		"ts": "2026-09-10T21:21:57.934Z",
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
		"liquidityUsd": 773828.59,
		"hash": "bd94443bf04122202bdbf79d594e59e0dbe76fe1a02a10efcf32299369c3fce8"
	},
	{
		"id": "c3a7f799c192",
		"ts": "2026-09-10T21:21:58.172Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1004694.92,
		"hash": "c3a7f799c1922fbe169ca66faee9613a3d5247aa8ddd961debd8188771388314"
	},
	{
		"id": "a6e3eda9b4d7",
		"ts": "2026-09-10T18:02:23.020Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118082540.9,
		"hash": "a6e3eda9b4d7f1438c07a1b032e21511f7c57b454e1e284f5dfeb8b00b6f5443"
	},
	{
		"id": "a8fc1d6e27a7",
		"ts": "2026-09-10T18:02:23.500Z",
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
		"liquidityUsd": 17247331.4,
		"hash": "a8fc1d6e27a7f54f82f433e468adfe314b88d9d16b73ce1356d4c63cd21d1d09"
	},
	{
		"id": "c0ad3ff3fc01",
		"ts": "2026-09-10T18:02:23.961Z",
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
		"liquidityUsd": 993417.37,
		"hash": "c0ad3ff3fc01223ed5afaecc73db0d41e17099a9130b52ad58f7541f97e5a57f"
	},
	{
		"id": "4173fa5faf80",
		"ts": "2026-09-10T18:02:24.204Z",
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
		"liquidityUsd": 32879159.8,
		"hash": "4173fa5faf804c83dadb98dd6a1f92878dd0fdddd168e41be08e9f0d892eb0b7"
	},
	{
		"id": "b8d0ff5a1ea8",
		"ts": "2026-09-10T18:02:24.452Z",
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
		"liquidityUsd": 4086728.71,
		"hash": "b8d0ff5a1ea86deee188ed30dc69340324df06a388f4ad2479090f47508a4158"
	},
	{
		"id": "b12443328661",
		"ts": "2026-09-10T18:02:24.711Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1154586.73,
		"hash": "b12443328661cdaa6cdb3a41aaa869309b4549d419e5a43d6070ac72e7ddb5b5"
	},
	{
		"id": "8c8484937e0f",
		"ts": "2026-09-10T18:02:24.968Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1712893.22,
		"hash": "8c8484937e0f5c2a40886ef00471fdd2af8fbdcdfc6efd5d92e65679938c09ee"
	},
	{
		"id": "70e7cb222015",
		"ts": "2026-09-10T18:02:25.215Z",
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
		"liquidityUsd": 1104944.34,
		"hash": "70e7cb222015b881181a08a8f64370c44495a111a078eb3c2f7bb89f2b5e10fa"
	},
	{
		"id": "acbc4499b83f",
		"ts": "2026-09-10T18:02:25.676Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1710076.65,
		"hash": "acbc4499b83f7521dc3b49827ac9c5b3522759380b0ed6bc39102c9a56be9efb"
	},
	{
		"id": "5a78b7d8b95a",
		"ts": "2026-09-10T18:02:25.923Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 498379.85,
		"hash": "5a78b7d8b95a6b0832871156d1809c6d9aa1b1d03314ecae75fc12bb07e5d222"
	},
	{
		"id": "834e4f1e85af",
		"ts": "2026-09-10T18:02:26.155Z",
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
		"liquidityUsd": 521980.01,
		"hash": "834e4f1e85afed03064c1add302e819c8be747bc09d0ae7d8649dacea5e96b32"
	},
	{
		"id": "68ecf24490ea",
		"ts": "2026-09-10T18:02:26.383Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1644727.45,
		"hash": "68ecf24490eac8d655ed1db17118f1ffba7d192b0342587b8d7a35cc175e5c39"
	},
	{
		"id": "07a94edaa352",
		"ts": "2026-09-10T18:02:26.611Z",
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
		"liquidityUsd": 803396.8,
		"hash": "07a94edaa352407502233b0094b54746b8fcecf2d9c58d8b23e43d8f77f5a0c7"
	},
	{
		"id": "23055f526717",
		"ts": "2026-09-10T18:02:26.842Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14524138.71,
		"hash": "23055f5267174b5c8f4ce126c3e5186086af05cee64156fd1a658280b1023acd"
	},
	{
		"id": "49acd29a767d",
		"ts": "2026-09-10T18:02:27.080Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 337950.14,
		"hash": "49acd29a767d377e6e1e742419b988c982f3bd16c00fb3bbcf25fd8dda1ff2b4"
	},
	{
		"id": "ceef7eb80428",
		"ts": "2026-09-10T18:02:27.306Z",
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
		"liquidityUsd": 1176909.47,
		"hash": "ceef7eb80428e26f82018c7fd87bfbd0991e9b6dbe3fb08b089226c45c690c0c"
	},
	{
		"id": "6f9f9e6fa7be",
		"ts": "2026-09-10T18:02:27.533Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 611239.79,
		"hash": "6f9f9e6fa7bef71d73226305f89df19988d3e1a9512d33429a11bf478bfe3e56"
	},
	{
		"id": "b43e747584cd",
		"ts": "2026-09-10T18:02:27.769Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 243077.04,
		"hash": "b43e747584cd9b62858fb88eae078c208b4711297d9a989c322a48c246f753d6"
	},
	{
		"id": "50031f967b6f",
		"ts": "2026-09-10T18:02:28.001Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 423318.97,
		"hash": "50031f967b6ffd91b4aa86be33724fedc54c3b7d5c4aa0baf67550a88b226deb"
	},
	{
		"id": "d2214824b3b1",
		"ts": "2026-09-10T14:46:20.166Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117489064.99,
		"hash": "d2214824b3b1654660016a24f22841ae46366a110507c62638b80fd42c62cd0f"
	},
	{
		"id": "4e0deced6be1",
		"ts": "2026-09-10T14:46:20.534Z",
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
		"liquidityUsd": 18718994.8,
		"hash": "4e0deced6be13d8821bc69041f03d659e1adcb9906e2d54130cb52c123faa47e"
	},
	{
		"id": "43197dd7ac4d",
		"ts": "2026-09-10T14:46:20.757Z",
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
		"liquidityUsd": 986006.41,
		"hash": "43197dd7ac4dee7edf42c6a1f56b53cddb90aac1c7cd91334a2dcae80999a7b5"
	},
	{
		"id": "b4a88e0b5da3",
		"ts": "2026-09-10T14:46:20.973Z",
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
		"liquidityUsd": 32714086.84,
		"hash": "b4a88e0b5da3658abb9b0967b617912881510059b9c0b1676258b37a4dd38494"
	},
	{
		"id": "232045a78eef",
		"ts": "2026-09-10T14:46:21.190Z",
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
		"liquidityUsd": 4065632.19,
		"hash": "232045a78eef51172474b14ada87c08a3ed3220e7b5cdbb14af43ade96778fd9"
	},
	{
		"id": "e7071f0463e7",
		"ts": "2026-09-10T14:46:21.400Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1148090.98,
		"hash": "e7071f0463e758139eab4a97c54bea84c64ea67885c4973b3277fb052efd8a60"
	},
	{
		"id": "9e64f21c32bc",
		"ts": "2026-09-10T14:46:21.616Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1673453.05,
		"hash": "9e64f21c32bcc8037ed9678854687480f7e6c6edbc4da8ad239448c62a015e51"
	},
	{
		"id": "54d1a11dd7f7",
		"ts": "2026-09-10T14:46:21.849Z",
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
		"liquidityUsd": 2504910.34,
		"hash": "54d1a11dd7f727bdbe7fa01c2637c3b3878657fbcdb6233c9db9cfaf58af1ebd"
	},
	{
		"id": "71ed855f33bc",
		"ts": "2026-09-10T14:46:22.243Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1673453.05,
		"hash": "71ed855f33bc2787a5f93a7bab91c36e60c12396a76e7d4a2ab413dac4984d4a"
	},
	{
		"id": "aa78ed5504bb",
		"ts": "2026-09-10T14:46:22.470Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 531703.35,
		"hash": "aa78ed5504bb2335032ae49387fca89db97bfb08296355ec8c0dfc0e8e111791"
	},
	{
		"id": "0a7d6242df46",
		"ts": "2026-09-10T14:46:22.673Z",
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
		"liquidityUsd": 512510.17,
		"hash": "0a7d6242df46d38811f36d24e5f4eec8270c2b1d85a173a4e47d27b4cbd979f7"
	},
	{
		"id": "1fc93bcd81df",
		"ts": "2026-09-10T14:46:22.883Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13988811.66,
		"hash": "1fc93bcd81dfcf6eb07efd3c2a22a88e1210f827f254e3c50fe5999e15ca0f56"
	},
	{
		"id": "b6b21b0dc315",
		"ts": "2026-09-10T14:46:23.097Z",
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
		"liquidityUsd": 776644.17,
		"hash": "b6b21b0dc315f2d9bb36ef89bc58ef8dd185ceb7f779f69173854073d7e8ed6d"
	},
	{
		"id": "72ca461541b0",
		"ts": "2026-09-10T14:46:23.302Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 237708.75,
		"hash": "72ca461541b0b431b94cd26077e28f42814c2cef1f5772395c23d7ddd333b7b4"
	},
	{
		"id": "b41f645392ce",
		"ts": "2026-09-10T14:46:23.510Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1520839.49,
		"hash": "b41f645392cefb3f4a16891af08d4f0e758dc71a5633f4e33740920a7fe9a3b7"
	},
	{
		"id": "dbf597c1317b",
		"ts": "2026-09-10T14:46:23.707Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 338281.22,
		"hash": "dbf597c1317b4509f1902da08b515c0db1200d10a63bd2fc8eb1da504c1bb345"
	},
	{
		"id": "498b6d7f37c4",
		"ts": "2026-09-10T14:46:23.911Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 615425.86,
		"hash": "498b6d7f37c49f5594823e163bd79cb36211e0285b577b682dc665cf09d35cd6"
	},
	{
		"id": "6f3005f154a0",
		"ts": "2026-09-10T14:46:24.112Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 418155.54,
		"hash": "6f3005f154a0066cdc8e991b3a8321abfaeb45d398edc62dcaaddfd0b9663cd3"
	},
	{
		"id": "745727c9a9ef",
		"ts": "2026-09-10T14:46:24.321Z",
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
		"liquidityUsd": 1158953.96,
		"hash": "745727c9a9efd86136f798b8e25caec54bf2b53a3aa269ccc8c8ed5273a95ac9"
	},
	{
		"id": "ef24ca9b676f",
		"ts": "2026-09-10T10:31:04.800Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118416128.6,
		"hash": "ef24ca9b676f02b521e798a4d5e1c46f3b984a7927be9c47d38ec3f78648bbfa"
	},
	{
		"id": "12836e79f1f5",
		"ts": "2026-09-10T10:31:05.068Z",
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
		"liquidityUsd": 18083123.5,
		"hash": "12836e79f1f5edfbd40d79e8781b9a0905535ada20d6999abc6404dc6cddddd2"
	},
	{
		"id": "aa17c169bb76",
		"ts": "2026-09-10T10:31:05.316Z",
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
		"liquidityUsd": 1000555.17,
		"hash": "aa17c169bb76dc71f092b7ce880c47b54d0d37d12d426f72b806514131e655c1"
	},
	{
		"id": "4cd033510791",
		"ts": "2026-09-10T10:31:05.576Z",
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
		"liquidityUsd": 31659602.2,
		"hash": "4cd0335107918b09f35938b3a9117f3239c919853f6453c6d64f068d1f89e8a7"
	},
	{
		"id": "c031dcdfcb0a",
		"ts": "2026-09-10T10:31:05.839Z",
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
		"liquidityUsd": 4129712.69,
		"hash": "c031dcdfcb0aac735802db8551664e1af99a235da696e05060b20109e1f0e406"
	},
	{
		"id": "6c190f016cb3",
		"ts": "2026-09-10T10:31:06.099Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1167668.33,
		"hash": "6c190f016cb39d97091f157d1a27f41ed185521bff64dde80d38a85fb97bc2b3"
	},
	{
		"id": "9781b5d1242b",
		"ts": "2026-09-10T10:31:06.360Z",
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
		"liquidityUsd": 1718933.23,
		"hash": "9781b5d1242b2fa59ae958d0fc7ec556d872178da37e64caf0b331d136df8547"
	},
	{
		"id": "56a745bce291",
		"ts": "2026-09-10T10:31:06.622Z",
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
		"liquidityUsd": 2485344.33,
		"hash": "56a745bce291aa1c4c3b916ece73df49be2a626dbc7d659d0b3e1e16c6f94507"
	},
	{
		"id": "d33101b26996",
		"ts": "2026-09-10T10:31:06.903Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1719523.33,
		"hash": "d33101b26996872804ad9b4740e8a2e3a48667e5955fd762f99e19892d599737"
	},
	{
		"id": "88f2fca5ffd4",
		"ts": "2026-09-10T10:31:07.220Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 565801.26,
		"hash": "88f2fca5ffd4c126153219c9b39f56c29608a22a2e974f5626734e5a306e7eeb"
	},
	{
		"id": "112c37838f4c",
		"ts": "2026-09-10T10:31:07.452Z",
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
		"liquidityUsd": 537481.5,
		"hash": "112c37838f4c5c49193e29574250d8d62fbe01ba108d9a8e460cdd82db936204"
	},
	{
		"id": "eea9bbafd735",
		"ts": "2026-09-10T10:31:07.696Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14309211.29,
		"hash": "eea9bbafd735d706309722c08088c3a3006904b471bf55c325bd25dc3146f0e1"
	},
	{
		"id": "e50298f1b79e",
		"ts": "2026-09-10T10:31:07.928Z",
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
		"liquidityUsd": 800908.62,
		"hash": "e50298f1b79eaf07bb5eba938fb73818e787900fd1433c72f5181584cf52b927"
	},
	{
		"id": "4ca8e22b76f0",
		"ts": "2026-09-10T10:31:08.169Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1585309.29,
		"hash": "4ca8e22b76f0d65e8fb5a528287da3771cd5cf4b861139c9cfd1db49aa539f21"
	},
	{
		"id": "9a2d6b3bf405",
		"ts": "2026-09-10T10:31:08.400Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 239455.96,
		"hash": "9a2d6b3bf405f322f7f943cb4b0f7057a423bd94b786180197993c0b93605d14"
	},
	{
		"id": "1118e72b4e5b",
		"ts": "2026-09-10T10:31:08.644Z",
		"symbol": "KAI",
		"token": "0xca18A528Ea897040f715edC92e6e4572780c5ca1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 301807.98,
		"hash": "1118e72b4e5b2cdd682538f3d25a6000c08e8b8a1d22d98326057fbdf9c37d3e"
	},
	{
		"id": "5eb6306218a5",
		"ts": "2026-09-10T10:31:08.885Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 622764.74,
		"hash": "5eb6306218a57e14fb363a7d1c063a137f9c3f64b8a1c4c98cf6b9cea5d295c9"
	},
	{
		"id": "020a2b464e97",
		"ts": "2026-09-10T10:31:09.117Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 355707.81,
		"hash": "020a2b464e9719e1dfea42f24eed5618467d53166d3e98f3911e6f289b3d7dac"
	},
	{
		"id": "75e538657e30",
		"ts": "2026-09-10T10:31:09.364Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3268822.18,
		"hash": "75e538657e30ea0e9144ed01bff0e020f617a6679a9feb08ca37734e4d2b5890"
	},
	{
		"id": "ab1362f30c58",
		"ts": "2026-09-10T05:32:34.701Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118338024.86,
		"hash": "ab1362f30c58229373ae050972f30ce6d2c3b3bff48f9140fcf13edacbb55269"
	},
	{
		"id": "ee93314cdd13",
		"ts": "2026-09-10T05:32:35.019Z",
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
		"liquidityUsd": 18641223.8,
		"hash": "ee93314cdd13861a10c5bb060c80173ef0efda07b57fb69c6e141acf3e15cb21"
	},
	{
		"id": "a1cfe2d5238a",
		"ts": "2026-09-10T05:32:35.241Z",
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
		"liquidityUsd": 1003607.03,
		"hash": "a1cfe2d5238a11f7e0e1adcf330eb44f1603866baa51bc2825a4531ca97e0bf5"
	},
	{
		"id": "523a5527f57a",
		"ts": "2026-09-10T05:32:35.620Z",
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
		"liquidityUsd": 32050052.2,
		"hash": "523a5527f57aba760f28ccf1a090ac4ab3f628ae306e1f8652c3f4deadca0519"
	},
	{
		"id": "d9e92d7be6f5",
		"ts": "2026-09-10T05:32:35.838Z",
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
		"liquidityUsd": 4257480.92,
		"hash": "d9e92d7be6f5bee04578ffc3320424012575cdb4139151b3d37f6bb6e17ed2d9"
	},
	{
		"id": "63ebb434c806",
		"ts": "2026-09-10T05:32:36.051Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1176605.15,
		"hash": "63ebb434c80609d3abf7703f581eb5d73ab5af03213a95e55175fc91685d773c"
	}
]
