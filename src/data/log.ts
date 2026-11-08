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
	"updatedAt": "2026-11-08T20:07:42.477Z",
	"tokensScored": 22497,
	"verdictsIssued": 22497,
	"safe": 19205,
	"risky": 1580,
	"likelyRug": 1712,
	"ticks": 1265
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "2d6604fca124",
		"ts": "2026-11-08T20:07:38.834Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 145147073.85,
		"hash": "2d6604fca124fbc4bf82cd643fa9196e1abcf212390ace58556a28664c169351"
	},
	{
		"id": "67095a50b88c",
		"ts": "2026-11-08T20:07:39.063Z",
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
		"liquidityUsd": 15839425.23,
		"hash": "67095a50b88c75ccb4af0b59d5a840fe0b1d7758529e64f75af08b4cf679fc35"
	},
	{
		"id": "9a767e26a572",
		"ts": "2026-11-08T20:07:39.281Z",
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
		"liquidityUsd": 239391.3,
		"hash": "9a767e26a572fbfbd419f8ef236a2b86875200c15536bd415958f989219c9ee5"
	},
	{
		"id": "0f19e7fcb74d",
		"ts": "2026-11-08T20:07:39.493Z",
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
		"liquidityUsd": 4668845.67,
		"hash": "0f19e7fcb74db275a31fa72c31196e9991701b8aafce29116a7c208cc7e03d9e"
	},
	{
		"id": "4e5a948fe59d",
		"ts": "2026-11-08T20:07:39.725Z",
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
		"liquidityUsd": 863774.5,
		"hash": "4e5a948fe59d6329cc6276efe7e6ab82fb05a3de71eca7f631860f9128716873"
	},
	{
		"id": "92b7f4dd4860",
		"ts": "2026-11-08T20:07:39.931Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 993486.34,
		"hash": "92b7f4dd48605365aaa1ee161007d7fbdc5fd3b2773b425054e23dd2054071fa"
	},
	{
		"id": "ee4a953bf534",
		"ts": "2026-11-08T20:07:40.138Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4669641.72,
		"hash": "ee4a953bf5343f950e7c01336e16f2b052ebe731b6e974637dd68fdfdec37403"
	},
	{
		"id": "391c40879172",
		"ts": "2026-11-08T20:07:40.334Z",
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
		"liquidityUsd": 934625.32,
		"hash": "391c40879172742ea6afa8f3cfccc4d5a27e57004918d65fb13722da52159294"
	},
	{
		"id": "1dc008812488",
		"ts": "2026-11-08T20:07:40.583Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 137427.71,
		"hash": "1dc008812488fe8dff76caf8720e00fbad83b1cf519a75283bd0cb59fead17e7"
	},
	{
		"id": "0eb06b6acc4b",
		"ts": "2026-11-08T20:07:40.825Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1547417.54,
		"hash": "0eb06b6acc4bc58335470ee212508d5b266e510aaeab63de73c5bf0db2c198bd"
	},
	{
		"id": "f06619f37a3f",
		"ts": "2026-11-08T20:07:41.033Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3274608.02,
		"hash": "f06619f37a3f53b9f0c246f39ca7003e482ee8c23908f3fd3afa39d89061d01d"
	},
	{
		"id": "c58293577419",
		"ts": "2026-11-08T20:07:41.242Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 563997.68,
		"hash": "c5829357741983bf18abdc63a5395a9d486d82c92f173c8460d194921fdb928c"
	},
	{
		"id": "73b8537b60b5",
		"ts": "2026-11-08T20:07:41.459Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1707636.08,
		"hash": "73b8537b60b5985826d9a20dc1a164cd363b0dd71b4a52b29687ab315e3ed847"
	},
	{
		"id": "0f4e24e7736a",
		"ts": "2026-11-08T20:07:41.647Z",
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
		"liquidityUsd": 7356365.87,
		"hash": "0f4e24e7736aaa4fec8888e0eebde9eda133217e5f8ce5c4591feef45a2bdfbf"
	},
	{
		"id": "21ffc8f60484",
		"ts": "2026-11-08T20:07:41.877Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 511729.08,
		"hash": "21ffc8f60484a5e22347c22ef231fcee5a55478a84b4c56d22aa2a192e89d873"
	},
	{
		"id": "ddbc7d9871fc",
		"ts": "2026-11-08T20:07:42.090Z",
		"symbol": "PROMPT",
		"token": "0x30c7235866872213F68cb1F08c37Cb9eCCB93452",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 64550.41,
		"hash": "ddbc7d9871fcae96416272c2b9c5ee5c4d138bcd1a3c2ffab582ff27e28c25f5"
	},
	{
		"id": "77ccd8053400",
		"ts": "2026-11-08T20:07:42.280Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 2427345.98,
		"hash": "77ccd8053400a8b164786b5b5e39829856679383b013b00c45afe775d5e9dbf2"
	},
	{
		"id": "0d4bbc268386",
		"ts": "2026-11-08T20:07:42.476Z",
		"symbol": "ZEN",
		"token": "0xf43eB8De897Fbc7F2502483B2Bef7Bb9EA179229",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1514972.72,
		"hash": "0d4bbc268386ddc943796b29cbb46681ef9cc37bc4b6fd41dad5e2ca267b5656"
	},
	{
		"id": "dc88a58b1d3e",
		"ts": "2026-11-08T15:44:44.089Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 145504295.33,
		"hash": "dc88a58b1d3e60bee57b00c756ca978e25eb22fbd02f1209a4eb58011c588666"
	},
	{
		"id": "8b0d7f633edd",
		"ts": "2026-11-08T15:44:44.569Z",
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
		"liquidityUsd": 15902829.49,
		"hash": "8b0d7f633edd2e9298fdf627deeec3ba13f3ee6e16eacc204516f8cfc808c3a2"
	},
	{
		"id": "d1387f811fbb",
		"ts": "2026-11-08T15:44:44.825Z",
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
		"liquidityUsd": 245940.57,
		"hash": "d1387f811fbbe461361bdb009da301ff7ac93dc81bb58a822cfc72887ba0fa1e"
	},
	{
		"id": "97eedf2e7e0d",
		"ts": "2026-11-08T15:44:45.146Z",
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
		"liquidityUsd": 4785242.76,
		"hash": "97eedf2e7e0d1a0ef4901ad259e18dde5b6496a76e9377f2aa009c7ef56a5d70"
	},
	{
		"id": "9a71617041ab",
		"ts": "2026-11-08T15:44:45.400Z",
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
		"liquidityUsd": 898100.77,
		"hash": "9a71617041ab424d07d825b5f8be42e8c0d9c6bdaff5022bffa3be6f25a404a9"
	},
	{
		"id": "fbdcc9176403",
		"ts": "2026-11-08T15:44:45.698Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1005864.14,
		"hash": "fbdcc9176403ed7d3c8af9bc819c7b2ad471a3c47c69cd340b171500dde04455"
	},
	{
		"id": "29d789e2b311",
		"ts": "2026-11-08T15:44:45.970Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4785242.76,
		"hash": "29d789e2b311ce47a9b46b130b880e7d19bdc41ba8bfa65d41b2db4b344ee821"
	},
	{
		"id": "d04739899b6a",
		"ts": "2026-11-08T15:44:46.232Z",
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
		"liquidityUsd": 1730618.2,
		"hash": "d04739899b6a6a195fa622e2af3199e83dd9293fe0ccd910e6bfdf43094e9374"
	},
	{
		"id": "3f4bb17fdb21",
		"ts": "2026-11-08T15:44:46.485Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"volume_liquidity_anomaly",
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 137086.62,
		"hash": "3f4bb17fdb21a7e1562f754fa7501222f320eca25faf188e0a664afba0671dd7"
	},
	{
		"id": "8c1aee862b40",
		"ts": "2026-11-08T15:44:46.743Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 964305.87,
		"hash": "8c1aee862b40e65036d6d00845bf24d5f318ff0cd2d791face45fed84ef36777"
	},
	{
		"id": "4bf1309f9ea5",
		"ts": "2026-11-08T15:44:46.986Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1556654.67,
		"hash": "4bf1309f9ea5a9dc2d698d41421c13cee008eaab420121f7073b656d1514c761"
	},
	{
		"id": "9dccbd0da6fb",
		"ts": "2026-11-08T15:44:47.226Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3286290.93,
		"hash": "9dccbd0da6fb55cb383b70d0a1d29ae4e54ab502cd45d4c9e231fd392d1872a6"
	},
	{
		"id": "bd17867e3b65",
		"ts": "2026-11-08T15:44:47.490Z",
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
		"liquidityUsd": 231224.28,
		"hash": "bd17867e3b65d7e97e496d0c6208494303ea00865d8955d4db8f030af3cc751b"
	},
	{
		"id": "6330a87eb46e",
		"ts": "2026-11-08T15:44:47.768Z",
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
		"liquidityUsd": 7377064.28,
		"hash": "6330a87eb46e2006ed2246278fa4d589f1f962e24978db6367581dd5e196a142"
	},
	{
		"id": "100d3870bf2e",
		"ts": "2026-11-08T15:44:48.048Z",
		"symbol": "PROMPT",
		"token": "0x30c7235866872213F68cb1F08c37Cb9eCCB93452",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 62020.98,
		"hash": "100d3870bf2e93d8a122429eb647180297782aa5add1ae8694daa7b4fc801e6c"
	},
	{
		"id": "d1736cbcd5ad",
		"ts": "2026-11-08T15:44:48.293Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 520675.11,
		"hash": "d1736cbcd5ad5520315709fda1342875be4c36b866aace75aecb44c3101574c6"
	},
	{
		"id": "824d544c749b",
		"ts": "2026-11-08T15:44:48.535Z",
		"symbol": "TEVA",
		"token": "0x00309D634d11541b857f927BE91aD2f0bD78894c",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 45592.5,
		"hash": "824d544c749bc5f68a41c4d9e8b8ba94379deabdc88d9b8d416be2c2074818e0"
	},
	{
		"id": "79811dd85c79",
		"ts": "2026-11-08T15:44:48.803Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1815424.01,
		"hash": "79811dd85c792295fe73e62cd8fdcf742bfbad744f0f80c6382fa5686120d806"
	},
	{
		"id": "fe101d366b7d",
		"ts": "2026-11-08T08:31:01.345Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 145709920.01,
		"hash": "fe101d366b7d68335c83b09ff7d68d791ad682bc0d7f779b78f52b04842c14f4"
	},
	{
		"id": "e0b58eee9236",
		"ts": "2026-11-08T08:31:01.568Z",
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
		"liquidityUsd": 15863335.49,
		"hash": "e0b58eee923655ada0ffa3c7b1d497cc4d50bb85e341c382c3a19aac88652ba7"
	},
	{
		"id": "9374abc8cb01",
		"ts": "2026-11-08T08:31:01.778Z",
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
		"liquidityUsd": 246256.85,
		"hash": "9374abc8cb01698cf20cf6ed7e877321ca6cfc2cfae6990f6294486a69af8dd4"
	},
	{
		"id": "75327ae3efcf",
		"ts": "2026-11-08T08:31:02.028Z",
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
		"liquidityUsd": 4885673.06,
		"hash": "75327ae3efcfbdefba9437192a19b40a004cf71b3c7592a18bd2318aae959f0f"
	},
	{
		"id": "2ffa284469f9",
		"ts": "2026-11-08T08:31:02.239Z",
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
		"liquidityUsd": 898960.62,
		"hash": "2ffa284469f9120d2348c150098f9ce46bf9204ee5f913067f297127074a10f4"
	},
	{
		"id": "ed2e8267a2aa",
		"ts": "2026-11-08T08:31:02.453Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1006683.45,
		"hash": "ed2e8267a2aa1159ef86e230d564478d6b76273d08125934297c358f1e123ea7"
	},
	{
		"id": "54a2e5ad86ca",
		"ts": "2026-11-08T08:31:02.661Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4885673.06,
		"hash": "54a2e5ad86ca9091b0ebc59d03c89613ae895e30f00309925200a5f499287c51"
	},
	{
		"id": "858468d6d179",
		"ts": "2026-11-08T08:31:02.866Z",
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
		"liquidityUsd": 1728641.53,
		"hash": "858468d6d1796406b5f639bc14c4994be900265feb9d077f980903d613d6efb9"
	},
	{
		"id": "bc0d519d4f0d",
		"ts": "2026-11-08T08:31:03.085Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 966851.37,
		"hash": "bc0d519d4f0dfaca9320f4055826da08f935436b64b5ab8dcf1ccf0802b4e8e4"
	},
	{
		"id": "f213db092068",
		"ts": "2026-11-08T08:31:03.295Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 136651.83,
		"hash": "f213db09206895d81b2a82d7ccfdef285a4744623d73d5800d6171bb4112cb7d"
	},
	{
		"id": "f54e47ed0ec6",
		"ts": "2026-11-08T08:31:03.491Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1565359.19,
		"hash": "f54e47ed0ec6782a60ee008e4ad9e590670d9bf62a182b1e946cf1e2a5db03b7"
	},
	{
		"id": "7e046527e902",
		"ts": "2026-11-08T08:31:03.703Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1858892.63,
		"hash": "7e046527e9029920c126087e2154eb23fbb0aa07d34157e0078874af94691721"
	},
	{
		"id": "5f3fc87b0f1f",
		"ts": "2026-11-08T08:31:03.927Z",
		"symbol": "PROMPT",
		"token": "0x30c7235866872213F68cb1F08c37Cb9eCCB93452",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 69734.68,
		"hash": "5f3fc87b0f1f84d410e4a03658f7addb9cd120913100fa10250688c4457080f8"
	},
	{
		"id": "0f778ffb3467",
		"ts": "2026-11-08T08:31:04.140Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3314880.18,
		"hash": "0f778ffb346783498fc3a7dcb8ba6995d0db977e943f3449bed9426fb2f95867"
	},
	{
		"id": "1aac3b96aadd",
		"ts": "2026-11-08T08:31:04.329Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 560726.14,
		"hash": "1aac3b96aadd5109bbac78aae1e332dbc2c9a8f52e89fb73cb9e6e61584bd91a"
	},
	{
		"id": "a71b968a6c80",
		"ts": "2026-11-08T08:31:04.522Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 176278.72,
		"hash": "a71b968a6c809434f10fbf3d2886f76e4447e4f1f31a29f5292a9b6638f3c190"
	},
	{
		"id": "6cd39b52ce27",
		"ts": "2026-11-08T08:31:04.710Z",
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
		"liquidityUsd": 229877.36,
		"hash": "6cd39b52ce27d81765e33aec6c61a518a1391e1506acde2d530581144ee229e3"
	},
	{
		"id": "538d6fcc8ade",
		"ts": "2026-11-08T08:31:04.901Z",
		"symbol": "CLANKER",
		"token": "0x1bc0c42215582d5A085795f4baDbaC3ff36d1Bcb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1652717.35,
		"hash": "538d6fcc8ade77a8e6cee1b1fa8ae3f50b3bda79ffdb44cf0ea912a6cabd7cc8"
	},
	{
		"id": "675c1f42471a",
		"ts": "2026-11-08T01:01:26.678Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 145619305.27,
		"hash": "675c1f42471a30c3ee4438ace89ce03cd93d84ad513f4cc7740ad7337da8db55"
	},
	{
		"id": "5c906bff457b",
		"ts": "2026-11-08T01:01:27.186Z",
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
		"liquidityUsd": 15825686.27,
		"hash": "5c906bff457b2d7d728a411bbbee3db31d7e354609ad13e9f63bc99314d73120"
	},
	{
		"id": "301f274e1f96",
		"ts": "2026-11-08T01:01:27.470Z",
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
		"liquidityUsd": 254617.78,
		"hash": "301f274e1f96ba752d8feee6549f11f166fdd48d7b433e37f519ea3562ff3168"
	},
	{
		"id": "d9174bd2acbd",
		"ts": "2026-11-08T01:01:27.772Z",
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
		"liquidityUsd": 4930973.73,
		"hash": "d9174bd2acbda6542d79954e4d41436e5abfa4dd02f64f04e3c2e116f0b49ab3"
	},
	{
		"id": "10fcd709c980",
		"ts": "2026-11-08T01:01:28.056Z",
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
		"liquidityUsd": 949847.48,
		"hash": "10fcd709c980cb3452fc329ff81887b9128d39d84bf951dc57f46c5cdcaca977"
	},
	{
		"id": "a09eef51f378",
		"ts": "2026-11-08T01:01:28.357Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1008092.13,
		"hash": "a09eef51f3782b215de6438942e94736eac0404099dd1cb34febc99f3481b42e"
	},
	{
		"id": "05c896f78971",
		"ts": "2026-11-08T01:01:28.631Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4930973.73,
		"hash": "05c896f789710f3450fa605cc905bada6eb9c266488adfa605a820e56510c272"
	},
	{
		"id": "023a5846aba5",
		"ts": "2026-11-08T01:01:28.896Z",
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
		"liquidityUsd": 2105922.29,
		"hash": "023a5846aba54743a3023c875a1c59d15e659fee8b4e417f041abf821a0985e1"
	},
	{
		"id": "4fcf22ae2e23",
		"ts": "2026-11-08T01:01:29.184Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 958556.17,
		"hash": "4fcf22ae2e237d899ad78be2c7d48676700ccfd2d038650a4bd5c4cd530ef48a"
	},
	{
		"id": "79bfb1141d8a",
		"ts": "2026-11-08T01:01:29.438Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 126860.65,
		"hash": "79bfb1141d8adf6811d570e4ed92fe51f00d73491b7f8877cbeb6a5c427b4191"
	},
	{
		"id": "5bb1244180fa",
		"ts": "2026-11-08T01:01:29.789Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1806421.91,
		"hash": "5bb1244180fa18c5882eb53a326372e52567e820de4a0573441ae3c8102b282a"
	},
	{
		"id": "ccd29ffa0f6a",
		"ts": "2026-11-08T01:01:30.031Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1594178.08,
		"hash": "ccd29ffa0f6ae53b40fe98664d9ca9232d3d4939921507b32ba4f6094d545412"
	},
	{
		"id": "8f4400cf10de",
		"ts": "2026-11-08T01:01:30.298Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 207257.4,
		"hash": "8f4400cf10de53968e7bb42afb2fd392bbebbf0f5a87d1fca8c51f61cfeb3fc1"
	},
	{
		"id": "db89b5a2bfae",
		"ts": "2026-11-08T01:01:30.549Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3335019.12,
		"hash": "db89b5a2bfae4cf97f940de914e76adbb361a12f80b4f3099b23d0ac6d9aeb00"
	},
	{
		"id": "adc66d1cb9eb",
		"ts": "2026-11-08T01:01:30.788Z",
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
		"liquidityUsd": 229383.33,
		"hash": "adc66d1cb9eb99a141c2310386f77aaf5a40184ba95e84133a65921a9af1b9ff"
	},
	{
		"id": "de37ef666bf3",
		"ts": "2026-11-08T01:01:31.032Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1620877.53,
		"hash": "de37ef666bf3675dbf734ecf4b13f02d61244994bddb13e1a732eb03f10f1312"
	},
	{
		"id": "11ddb6dc4176",
		"ts": "2026-11-08T01:01:31.304Z",
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
		"liquidityUsd": 7336530.23,
		"hash": "11ddb6dc417614f7bb3a49072f583cc49e08661ac82aec55362228899a70e3fa"
	},
	{
		"id": "c83e1beaf1e0",
		"ts": "2026-11-08T01:01:31.554Z",
		"symbol": "CLANKER",
		"token": "0x1bc0c42215582d5A085795f4baDbaC3ff36d1Bcb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1673510.56,
		"hash": "c83e1beaf1e050ae1e41803ecb36e990e25cacdb6726b6efc80ecc1c318008ac"
	},
	{
		"id": "0bc047901d4d",
		"ts": "2026-11-07T21:23:27.878Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 145480921.16,
		"hash": "0bc047901d4d215bde763e3c69473bf611cfd3a11f800660ef7c7c94468c9046"
	},
	{
		"id": "ee4c37fb09d5",
		"ts": "2026-11-07T21:23:28.390Z",
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
		"liquidityUsd": 15726668.15,
		"hash": "ee4c37fb09d5c20eeca1f3c5b31889704ebe0eca880b0045703fdacc132d3084"
	},
	{
		"id": "0cb366995480",
		"ts": "2026-11-07T21:23:28.652Z",
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
		"liquidityUsd": 261226.84,
		"hash": "0cb36699548086ead875433904a151ae7b28581d402c1f4c0cd636dab0a0c3e7"
	},
	{
		"id": "22f92cd862ba",
		"ts": "2026-11-07T21:23:28.922Z",
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
		"liquidityUsd": 4911023.28,
		"hash": "22f92cd862ba6331715971352539b3fc2e76b1523ba17ada5dd5edcb657c39d2"
	},
	{
		"id": "8c95422be1cc",
		"ts": "2026-11-07T21:23:29.189Z",
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
		"liquidityUsd": 890855.52,
		"hash": "8c95422be1ccd3c0282296bfac106d826ac65dd82f1a0dbe014a929b7fd9a9e9"
	},
	{
		"id": "959f01e051a2",
		"ts": "2026-11-07T21:23:29.441Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1008213.04,
		"hash": "959f01e051a2833bc762d74a89a9cf6bcbe9d33f06b5012b35221326aa9a703b"
	},
	{
		"id": "106e2d17c56f",
		"ts": "2026-11-07T21:23:29.697Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4911023.28,
		"hash": "106e2d17c56f6227a2d8b09ab6e079ff55a742e133664ad9e7e483bfa3dbd9d2"
	},
	{
		"id": "707b10d8f623",
		"ts": "2026-11-07T21:23:29.951Z",
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
		"liquidityUsd": 2097275.38,
		"hash": "707b10d8f623e3b6a70a22c5d9db1dc0b180be70f9186a908ec839cc6f97fe39"
	},
	{
		"id": "422659751292",
		"ts": "2026-11-07T21:23:30.238Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 969977.09,
		"hash": "42265975129275861d1ac83d0a7a8a6c779f3c35c37eeaf9f18bbf48ae23b180"
	},
	{
		"id": "72fdee14c0a4",
		"ts": "2026-11-07T21:23:30.504Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 8,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.84,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1802419.55,
		"hash": "72fdee14c0a494247d432ae6c012873e5c707d1ff8282163224a5d037de76325"
	},
	{
		"id": "d9abd290f5c3",
		"ts": "2026-11-07T21:23:30.753Z",
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
		"liquidityUsd": 126575.09,
		"hash": "d9abd290f5c3596eb5e2a5fa40439afe59ae7928c26a2caee04953a4bb75b494"
	},
	{
		"id": "5e9461aa4460",
		"ts": "2026-11-07T21:23:30.992Z",
		"symbol": "Reboot",
		"token": "0xe125872D91A5a67704FA782Aa74014Adff7cAE7E",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 348056.61,
		"hash": "5e9461aa4460ed5b4968eb4cb25ae2e28f4206a521c35357df300b82965e9fb1"
	},
	{
		"id": "9bbe42cf4318",
		"ts": "2026-11-07T21:23:31.267Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1595197.77,
		"hash": "9bbe42cf4318704cc672bfbfe8e5960757498cfed5264754775f800ab74670c2"
	},
	{
		"id": "a358cd9a2b25",
		"ts": "2026-11-07T21:23:31.504Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 195757.42,
		"hash": "a358cd9a2b25309703dac45b64a9ac5c9c7faa898e5b432e126d988395bf8987"
	},
	{
		"id": "562d44eb39d3",
		"ts": "2026-11-07T21:23:31.754Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1623190.41,
		"hash": "562d44eb39d300c6ee47939add0bdd906f6252e768390dbdbddc34a301871e04"
	},
	{
		"id": "77b4d557b23a",
		"ts": "2026-11-07T21:23:31.990Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 505929.29,
		"hash": "77b4d557b23a75f25b085260c766888a1bba8d03f363517adcc289d0b6e3cc16"
	},
	{
		"id": "9390a108765c",
		"ts": "2026-11-07T21:23:32.258Z",
		"symbol": "CLANKER",
		"token": "0x1bc0c42215582d5A085795f4baDbaC3ff36d1Bcb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1644734.48,
		"hash": "9390a108765c1a53a057d8b7cbdf9655e4a0925feebd4dcee0b6aaef99804361"
	},
	{
		"id": "ca79e05317f4",
		"ts": "2026-11-07T21:23:32.504Z",
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
		"liquidityUsd": 7247562.32,
		"hash": "ca79e05317f42d85fa4a5840a6589b111a5b719f0db9dc43798028a87866eeb1"
	},
	{
		"id": "c3b0d7705707",
		"ts": "2026-11-07T17:21:27.300Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 145742643.53,
		"hash": "c3b0d77057079cc285048b5c7cf597e40356dd8ae52a585f2af7b204d63d444d"
	},
	{
		"id": "ccda99d7c52f",
		"ts": "2026-11-07T17:21:27.547Z",
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
		"liquidityUsd": 15811034.87,
		"hash": "ccda99d7c52f90992d27350dca5bcab03b35067605435162ee797e984c5c8c0f"
	},
	{
		"id": "17b0535dc76b",
		"ts": "2026-11-07T17:21:27.799Z",
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
		"liquidityUsd": 265365.73,
		"hash": "17b0535dc76b611fdcdb7b9effa63ad52598b0eea0bd7b0e5033953f2815ffdd"
	},
	{
		"id": "d4f05387b6a1",
		"ts": "2026-11-07T17:21:28.038Z",
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
		"liquidityUsd": 4845892.28,
		"hash": "d4f05387b6a1f9e514302f1114c020483f4f4bc8ba06b484389fce9fb5c83752"
	},
	{
		"id": "e98a42858707",
		"ts": "2026-11-07T17:21:28.277Z",
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
		"liquidityUsd": 927493.37,
		"hash": "e98a428587070af61f12a1e07d1173788d165b593f46b59ee9033b0c55922c44"
	},
	{
		"id": "1708c2380e10",
		"ts": "2026-11-07T17:21:28.531Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1011623.06,
		"hash": "1708c2380e103726275e37df4e35ae082b7319f027a69086d519dd652cd3d135"
	},
	{
		"id": "36cf812c5ee2",
		"ts": "2026-11-07T17:21:28.774Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4845892.28,
		"hash": "36cf812c5ee24e02e410a82cbc499a4e0d177dbd4b274c5cd81abe6d4ca5d62c"
	},
	{
		"id": "0a4deb153a10",
		"ts": "2026-11-07T17:21:29.012Z",
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
		"liquidityUsd": 2090069.38,
		"hash": "0a4deb153a1030074ec2a57a8ef9afbf0f31e093d0bc34574efe11b5c32ca873"
	},
	{
		"id": "d884cabee388",
		"ts": "2026-11-07T17:21:29.258Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 965163.88,
		"hash": "d884cabee38819aa97708f6aea5e938c57c5c70f2fc495c29363611e6feb21ac"
	},
	{
		"id": "0c5c26b38097",
		"ts": "2026-11-07T17:21:29.500Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 8,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.84,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1802013.83,
		"hash": "0c5c26b3809721e348c6715a387f320f5fc285f1d74e44845e57374a3a5b1d1b"
	},
	{
		"id": "31c275025109",
		"ts": "2026-11-07T17:21:29.720Z",
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
		"liquidityUsd": 124344.04,
		"hash": "31c275025109a1e6a43b20df582fa1d77414d764c107db87eeccd7d48b5f2261"
	},
	{
		"id": "eb60b777cc19",
		"ts": "2026-11-07T17:21:29.948Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 183158.15,
		"hash": "eb60b777cc194855fa7cf8b5af34dc52026f8cd44c2085534ad33eb2c31aed66"
	},
	{
		"id": "ebc548aa6092",
		"ts": "2026-11-07T17:21:30.181Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1635795.96,
		"hash": "ebc548aa6092a97b623f790118df9000b6a1d7017520edbdcb1917070148bc2b"
	},
	{
		"id": "01b367b5bec0",
		"ts": "2026-11-07T17:21:30.407Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1595119.8,
		"hash": "01b367b5bec03acceb70d2570eddf01770ebde92c83f98062206e754fdc13261"
	},
	{
		"id": "be80c873c758",
		"ts": "2026-11-07T17:21:30.636Z",
		"symbol": "Reboot",
		"token": "0xe125872D91A5a67704FA782Aa74014Adff7cAE7E",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 379426.27,
		"hash": "be80c873c758fb0f97a551f96227f5e9913494336b235d1b7e9253db4c73bc2c"
	},
	{
		"id": "46174fb4e590",
		"ts": "2026-11-07T17:21:30.882Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3319658.49,
		"hash": "46174fb4e590e0ce75574b87e06f632b720c441fc758a8116dc595feadc5351e"
	},
	{
		"id": "7cb3c01e92a4",
		"ts": "2026-11-07T17:21:31.101Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 515026.67,
		"hash": "7cb3c01e92a40a07c13fb7df1289d80068c351164b072ecd2628d1838d3986dc"
	},
	{
		"id": "6cd2c9a11d0f",
		"ts": "2026-11-07T17:21:31.336Z",
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
		"liquidityUsd": 7301823.77,
		"hash": "6cd2c9a11d0fde4c944b0a69a0413924dc49a9d873c96ff573f3562fd0fbf064"
	},
	{
		"id": "ed2f791a82df",
		"ts": "2026-11-07T11:27:57.882Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 146056184.05,
		"hash": "ed2f791a82df8f564af93f1ae5f26ef3a350a4756c31d3b96205586fe10e6330"
	},
	{
		"id": "ca08cf963896",
		"ts": "2026-11-07T11:27:58.541Z",
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
		"liquidityUsd": 15807127.39,
		"hash": "ca08cf963896d3af8e08a126af22ab4286a7108b7558c904b2ddcbb304ae5b67"
	},
	{
		"id": "23340b7fefc2",
		"ts": "2026-11-07T11:27:58.782Z",
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
		"liquidityUsd": 292546.19,
		"hash": "23340b7fefc27c146e42287e25a32b0596912d67b1fff6b3b0746b3c8635d95c"
	},
	{
		"id": "1a1a4e7d8371",
		"ts": "2026-11-07T11:27:59.021Z",
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
		"liquidityUsd": 4849245.97,
		"hash": "1a1a4e7d83717b136a7f03506a817a5a40b744c46c94ebf7658db73cbe22faa5"
	},
	{
		"id": "9333b4b8e76e",
		"ts": "2026-11-07T11:27:59.263Z",
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
		"liquidityUsd": 909609.75,
		"hash": "9333b4b8e76e238345189a235c1945cd781624a58c384a05571776d5a13fb8c4"
	},
	{
		"id": "0b64ee09f019",
		"ts": "2026-11-07T11:27:59.512Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1024550.64,
		"hash": "0b64ee09f0194defe748dbd709a3037565188d15aa41411abd61eabea357dac2"
	},
	{
		"id": "5598a91e4e87",
		"ts": "2026-11-07T11:27:59.768Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2430810.09,
		"hash": "5598a91e4e8735f582324d15c3ad569a867ad1f13f77c14ddc51a591e6ea6e16"
	},
	{
		"id": "464fd774ddf8",
		"ts": "2026-11-07T11:28:00.016Z",
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
		"liquidityUsd": 1396412.13,
		"hash": "464fd774ddf834b9a7e3bb8cc1281e3a0bb3279fc734936859b66ab443ffbd09"
	},
	{
		"id": "3754c5b9d2b9",
		"ts": "2026-11-07T11:28:00.268Z",
		"symbol": "DENIM",
		"token": "0x0BDdfA9a0a1Eb326593262c7aF47ee091dB9cB70",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 360327.63,
		"hash": "3754c5b9d2b961302f845c23f1b00641e1c9df367055a8ea8e80bc0b9504b419"
	},
	{
		"id": "c4904a6c562d",
		"ts": "2026-11-07T11:28:00.513Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 126468.37,
		"hash": "c4904a6c562daf4e4ec931d26804b9884d7b8847907b474712fd2dde309765ad"
	},
	{
		"id": "74a524ee97f9",
		"ts": "2026-11-07T11:28:00.751Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 8,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.84,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 2026755.33,
		"hash": "74a524ee97f9ea2aa4e69b52cdc733b10d563b1a8edc7ee40aa05c9ee679bedc"
	},
	{
		"id": "8256dcbdbb8e",
		"ts": "2026-11-07T11:28:01.233Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1004538.82,
		"hash": "8256dcbdbb8eb66659e4b4f007c1c1817bbd7c479151d1899206027eaaa6ed58"
	},
	{
		"id": "b1738c2a8afb",
		"ts": "2026-11-07T11:28:01.479Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1599038.3,
		"hash": "b1738c2a8afbf60413cca9586dca813f65f4a68b739e915fc6db1b16b994c66e"
	},
	{
		"id": "6043aadc2a89",
		"ts": "2026-11-07T11:28:01.712Z",
		"symbol": "Reboot",
		"token": "0xe125872D91A5a67704FA782Aa74014Adff7cAE7E",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 368080.17,
		"hash": "6043aadc2a898bd20af440c8e9f9cc10da9c77bcc21eb6d235c4a918bb66c4d4"
	},
	{
		"id": "212e8807492f",
		"ts": "2026-11-07T11:28:01.954Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1671118.43,
		"hash": "212e8807492f856ec5ee5e17101e93c37ddb1f497b60a384ca6397d2af66f971"
	},
	{
		"id": "b722319d4962",
		"ts": "2026-11-07T11:28:02.225Z",
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
		"liquidityUsd": 7384546.48,
		"hash": "b722319d496233df21bca11e9cce06a510aeab30739bc9ee2b62fa6d5a66a4ef"
	},
	{
		"id": "885aad1593f8",
		"ts": "2026-11-07T11:28:02.461Z",
		"symbol": "Anthropic",
		"token": "0xF6D41CBb39a6540a93e0d29a50B4eb720444e754",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 10332121.57,
		"hash": "885aad1593f8c6f3b5ffe652b601abd20c844133eeb987a4cfbea2b8d81dd354"
	},
	{
		"id": "eea8b6596d9d",
		"ts": "2026-11-07T11:28:02.717Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3325262.44,
		"hash": "eea8b6596d9d185924f770fa840b2b8900b7a0e2816b743b598e525011bad12d"
	},
	{
		"id": "48edc2365aad",
		"ts": "2026-11-07T04:27:35.820Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 145969211.11,
		"hash": "48edc2365aad84d037a5d18a85440df1634b40d94bd22f5df3ccaa4a9cc09d82"
	},
	{
		"id": "c5f27ed49d37",
		"ts": "2026-11-07T04:27:36.358Z",
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
		"liquidityUsd": 15765714.22,
		"hash": "c5f27ed49d37a7d8fe2689afb479b7cdb1d79f4b8c8384d10a533fb92ae13136"
	},
	{
		"id": "67459c4bfb7d",
		"ts": "2026-11-07T04:27:36.630Z",
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
		"liquidityUsd": 242917.86,
		"hash": "67459c4bfb7deec4354820bc9967294b148e68ade05244f51f27d5493324f477"
	},
	{
		"id": "afb29f776096",
		"ts": "2026-11-07T04:27:36.925Z",
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
		"liquidityUsd": 4870537.94,
		"hash": "afb29f776096e3a63b9bb809456185754f67565fd388b41fa43870cfe312b76d"
	},
	{
		"id": "2e5720d411e3",
		"ts": "2026-11-07T04:27:37.195Z",
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
		"liquidityUsd": 924225.37,
		"hash": "2e5720d411e321d8e7bfcd3fd6707cd240380d49e5b7484c05bb2631089a665e"
	},
	{
		"id": "185155bf8b60",
		"ts": "2026-11-07T04:27:37.466Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1031494.93,
		"hash": "185155bf8b6025faf2552c33c3a16e2b4ffc91820eb70ae64f215ed5d655df08"
	},
	{
		"id": "ac747b12885b",
		"ts": "2026-11-07T04:27:37.730Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4870537.94,
		"hash": "ac747b12885b61b1acadf437df8e63fce34a011fde604e9be0f41302af651f96"
	},
	{
		"id": "455038ce8451",
		"ts": "2026-11-07T04:27:38.007Z",
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
		"liquidityUsd": 1263732.72,
		"hash": "455038ce845112a379429eda6af36663a8e191ec73e0fe08d7b2c98073caa79c"
	},
	{
		"id": "91e258f0d8bb",
		"ts": "2026-11-07T04:27:38.268Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"volume_liquidity_anomaly",
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 122398.14,
		"hash": "91e258f0d8bba0d51876f9f7ddd06845ce4a74ffa7a7d037e09b0f6237d5bc4c"
	},
	{
		"id": "ce383d7d2910",
		"ts": "2026-11-07T04:27:38.535Z",
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
		"liquidityUsd": 521120.92,
		"hash": "ce383d7d2910e58e63b21a3f830be670133144eb6ed844c15d228bc37086de1b"
	},
	{
		"id": "d93f357ac598",
		"ts": "2026-11-07T04:27:38.778Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1895693.6,
		"hash": "d93f357ac59891a60213b4c2f869ee2da4aa8233fe7075cdea06e1a74cf5195b"
	},
	{
		"id": "6eab695b871f",
		"ts": "2026-11-07T04:27:39.024Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 999680.31,
		"hash": "6eab695b871fb20e53f4daaeca1d6cb84b4d7a4b87328abed419123b0e0c630d"
	},
	{
		"id": "0e7a79541282",
		"ts": "2026-11-07T04:27:39.271Z",
		"symbol": "DENIM",
		"token": "0x0BDdfA9a0a1Eb326593262c7aF47ee091dB9cB70",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 363373.02,
		"hash": "0e7a795412824d92bfc0851ddc9c50519c72e322430407f4904eea9289c8d69e"
	},
	{
		"id": "dd17ffd99a74",
		"ts": "2026-11-07T04:27:39.516Z",
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
		"liquidityUsd": 7407655.68,
		"hash": "dd17ffd99a74c0ae84661f5e1252d9bb7670fd3a92d7b738f52e9f4a60868de5"
	},
	{
		"id": "74d55eed643d",
		"ts": "2026-11-07T04:27:39.774Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1619504.01,
		"hash": "74d55eed643d02ed2c3fb59092e89f595fbedab9de33081388fa3d8bf30f16dd"
	},
	{
		"id": "c5154d460593",
		"ts": "2026-11-07T04:27:40.023Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 565920.95,
		"hash": "c5154d4605938d6914027d2ccae3a94532d78b44217e4d7d35c3505578991b8d"
	},
	{
		"id": "c2d27abbc096",
		"ts": "2026-11-07T04:27:40.271Z",
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
		"liquidityUsd": 2613831.96,
		"hash": "c2d27abbc09689ee6c5b7b0b3a9d0368b00acaa4abcbc8431dad7ad7a8847ea1"
	},
	{
		"id": "7f4e6521f6d4",
		"ts": "2026-11-07T04:27:40.516Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3330691.53,
		"hash": "7f4e6521f6d41e424597427a554f41c24e314c96119d7bed41f59d51a171b99b"
	},
	{
		"id": "255ad41823fc",
		"ts": "2026-11-07T04:27:40.783Z",
		"symbol": "Reboot",
		"token": "0xe125872D91A5a67704FA782Aa74014Adff7cAE7E",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 352947.58,
		"hash": "255ad41823fc5bc1b6a0bfc09ffcab26ca2d99a4e777873a80001d6f453a1882"
	},
	{
		"id": "20c2184ced00",
		"ts": "2026-11-06T23:37:27.699Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 145945277.62,
		"hash": "20c2184ced009f0b4d7bb6949d65211f27b88bf7e4ced97b1e425a41d08228f7"
	},
	{
		"id": "e1d4e8f2c776",
		"ts": "2026-11-06T23:37:27.962Z",
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
		"liquidityUsd": 15756859.71,
		"hash": "e1d4e8f2c776af1aff58293c9b8f353eef0a9141d227b2027eba246253b40052"
	},
	{
		"id": "88e3ab746450",
		"ts": "2026-11-06T23:37:28.205Z",
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
		"liquidityUsd": 242963.91,
		"hash": "88e3ab746450415c01a3dbafa6f695ed633ab9ed579ca550e979959c30ef9e8c"
	},
	{
		"id": "d36fc42f7bf9",
		"ts": "2026-11-06T23:37:28.460Z",
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
		"liquidityUsd": 4910757.1,
		"hash": "d36fc42f7bf9f7d64bebfe42c4fba1730ee589dfd37515a8e48e7d00ecb0f6d6"
	},
	{
		"id": "6c4bced47ed0",
		"ts": "2026-11-06T23:37:28.731Z",
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
		"liquidityUsd": 879700.75,
		"hash": "6c4bced47ed09d518b30473c3d02ee2f84b420e91cf5281bbaa9638c7a446af5"
	},
	{
		"id": "6a38c691117d",
		"ts": "2026-11-06T23:37:28.980Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1026705.55,
		"hash": "6a38c691117d7694f9badf2bcb61be87975f1e18151a33d155fc57d9fa62503c"
	},
	{
		"id": "f7a47a87c66c",
		"ts": "2026-11-06T23:37:29.219Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4910757.1,
		"hash": "f7a47a87c66c11732d4c8108cd5b5e96354b156413fef9e54cb472b596364108"
	},
	{
		"id": "8dc1bf51155c",
		"ts": "2026-11-06T23:37:29.473Z",
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
		"liquidityUsd": 1490406.09,
		"hash": "8dc1bf51155c428aa399b7fd503bfa43ee31ab385585d4fe4400bc3ad8b63ad2"
	},
	{
		"id": "24e2864567d8",
		"ts": "2026-11-06T23:37:29.709Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"volume_liquidity_anomaly",
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 121865.39,
		"hash": "24e2864567d8112ac8cb77915c997fc1ff90f5ef1b08b02b7c97e9add3ab0554"
	},
	{
		"id": "1953c427d6e6",
		"ts": "2026-11-06T23:37:29.957Z",
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
		"liquidityUsd": 535020.89,
		"hash": "1953c427d6e6be0600f11c874b1dcd183e1ca0cf1b48196d5eff610a92965df5"
	},
	{
		"id": "c27564760ce4",
		"ts": "2026-11-06T23:37:30.188Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1611445.99,
		"hash": "c27564760ce421dbf391b576241cb9ecc38e6ab4af3964422f9a06fef5d5c046"
	},
	{
		"id": "f4cc9a00e0d3",
		"ts": "2026-11-06T23:37:30.419Z",
		"symbol": "DENIM",
		"token": "0x0BDdfA9a0a1Eb326593262c7aF47ee091dB9cB70",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 393257.49,
		"hash": "f4cc9a00e0d317e4ab06374aa8aa810f2e10b29c8f8b7a82290a978f09b18a9f"
	},
	{
		"id": "aedada25e545",
		"ts": "2026-11-06T23:37:30.643Z",
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
		"liquidityUsd": 7384893.04,
		"hash": "aedada25e5453e04f8d14209ec71f5011a6359bc79c8a1f1eabfff61b946bd6b"
	},
	{
		"id": "fbd8513dde44",
		"ts": "2026-11-06T23:37:30.879Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1022713.25,
		"hash": "fbd8513dde4470465b7a708df759fecbdb9e8af0ee164993c2a998eb9498d7c2"
	},
	{
		"id": "b29f8db2873d",
		"ts": "2026-11-06T23:37:31.115Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1624540.62,
		"hash": "b29f8db2873d0fbff53bd58d87fd186e9171c2ab4822e76bb72fe9e7f90f8c4d"
	},
	{
		"id": "ac9d3f62cd15",
		"ts": "2026-11-06T23:37:31.344Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 673234.69,
		"hash": "ac9d3f62cd15ebf3bcdcf01e12dea4e467e130b80eb10a6f6c35a50542cb1dab"
	},
	{
		"id": "b0f61d9202c0",
		"ts": "2026-11-06T23:37:31.567Z",
		"symbol": "CLANKER",
		"token": "0x1bc0c42215582d5A085795f4baDbaC3ff36d1Bcb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1717228.41,
		"hash": "b0f61d9202c021730ede61ed4e740c05e4821668bcf8340a3d84b1edc922e663"
	},
	{
		"id": "3668b3234582",
		"ts": "2026-11-06T23:37:31.790Z",
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
		"liquidityUsd": 2589571.54,
		"hash": "3668b323458266056cd995c94182761739d2f6ca39ef82e9e62c8fb6276ccf35"
	},
	{
		"id": "9e682f60b3f0",
		"ts": "2026-11-06T18:49:42.616Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 144980868.33,
		"hash": "9e682f60b3f02d2725e08204831edb108bb3e17ee87ab4d5ccfe1475c7ae5638"
	},
	{
		"id": "69e7a54610c5",
		"ts": "2026-11-06T18:49:43.471Z",
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
		"liquidityUsd": 15684383.55,
		"hash": "69e7a54610c574837baf5cea8980bfc5e943fe235c0463ca7d2903f466d865f5"
	},
	{
		"id": "af32dc7c8dcf",
		"ts": "2026-11-06T18:49:43.944Z",
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
		"liquidityUsd": 241472.22,
		"hash": "af32dc7c8dcf78ef2518d196b5fcafa404f197c5157e550bcd5f8fd5986058c8"
	},
	{
		"id": "dd8f41e72312",
		"ts": "2026-11-06T18:49:44.392Z",
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
		"liquidityUsd": 4876892.95,
		"hash": "dd8f41e72312aefbc5d873c2d7a1cd923f2c6012471cc9f559b08d538264e73f"
	},
	{
		"id": "1116ed22064c",
		"ts": "2026-11-06T18:49:44.835Z",
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
		"liquidityUsd": 883854.9,
		"hash": "1116ed22064c7f524c439f058c9e00084073c5e659e3b856424dc38b72756c45"
	},
	{
		"id": "a156b7d0b754",
		"ts": "2026-11-06T18:49:45.102Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1018683.74,
		"hash": "a156b7d0b754699f1cae260b989a64ef06c58cb73fa06bb27c6054b7d28401b3"
	},
	{
		"id": "310925ddf933",
		"ts": "2026-11-06T18:49:45.366Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4876892.95,
		"hash": "310925ddf933c2c74aa109342371ae3d0709453f892e7f253680b92765d47722"
	},
	{
		"id": "994588d1b796",
		"ts": "2026-11-06T18:49:45.657Z",
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
		"liquidityUsd": 1527816.99,
		"hash": "994588d1b796c0f3e7a890822e76725ff9a90d797f1e6652c00649cb075fa644"
	},
	{
		"id": "70742f82a749",
		"ts": "2026-11-06T18:49:45.908Z",
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
		"liquidityUsd": 519925.46,
		"hash": "70742f82a749a05cd9715f80020a4cf32ed79afc87002246b51cbdf3944900fe"
	},
	{
		"id": "0971c1a69c87",
		"ts": "2026-11-06T18:49:46.367Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 120331.73,
		"hash": "0971c1a69c87720f8963907b94794241cde5b5499b673e3ca6f14af772fe9dd1"
	},
	{
		"id": "7dbb566e8de1",
		"ts": "2026-11-06T18:49:46.597Z",
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
		"liquidityUsd": 7402109.52,
		"hash": "7dbb566e8de1e5caf278c15a422988d6650800013d3acf3f4ff1115a99c61151"
	},
	{
		"id": "76a932ccc26c",
		"ts": "2026-11-06T18:49:46.827Z",
		"symbol": "CLANKER",
		"token": "0x1bc0c42215582d5A085795f4baDbaC3ff36d1Bcb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1787723.06,
		"hash": "76a932ccc26cdaf9131b97dfa34e26f0b9e71d6800379736749b979957d5c864"
	},
	{
		"id": "11184b0e914b",
		"ts": "2026-11-06T18:49:47.058Z",
		"symbol": "DENIM",
		"token": "0x0BDdfA9a0a1Eb326593262c7aF47ee091dB9cB70",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 388781.35,
		"hash": "11184b0e914b3581a12306c8e428ed4a36f504374bddd4fcf2f0849c45e8644f"
	},
	{
		"id": "1dce77a2c1b9",
		"ts": "2026-11-06T18:49:47.287Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1269601.96,
		"hash": "1dce77a2c1b9122768267046059fdf5bd395121c521e9c1b62703061034a6c68"
	},
	{
		"id": "ba7f710258af",
		"ts": "2026-11-06T18:49:47.519Z",
		"symbol": "Reboot",
		"token": "0xe125872D91A5a67704FA782Aa74014Adff7cAE7E",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 401199.92,
		"hash": "ba7f710258af02f84f771327750e7cbf76bb7981d0229d4af6fc7de3c98a6780"
	},
	{
		"id": "2ef9720f4d24",
		"ts": "2026-11-06T18:49:47.874Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1606666.1,
		"hash": "2ef9720f4d2419cbee604857002819a9912bb185f0bc604bbbd289b2d7a35a86"
	},
	{
		"id": "8145b6cd0d53",
		"ts": "2026-11-06T18:49:48.103Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1017758.39,
		"hash": "8145b6cd0d533804171460ea185f7ebc907cad84d3c85a64968b4db2d44d935f"
	},
	{
		"id": "6c61d674c072",
		"ts": "2026-11-06T18:49:48.336Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 673744.53,
		"hash": "6c61d674c072e4bf18b6f7aa3ec6ec2636d19a1d38ae36baa50587d355a6608c"
	},
	{
		"id": "13d4fea63479",
		"ts": "2026-11-06T11:45:28.665Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 146318782.01,
		"hash": "13d4fea634798bd483845a805580bd47e1a66f654e683068ebd3c20c212e02dc"
	},
	{
		"id": "62fe63badbbb",
		"ts": "2026-11-06T11:45:29.150Z",
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
		"liquidityUsd": 15738289.74,
		"hash": "62fe63badbbb7c2af32eb842a8cd465fad55464b4cf3a0c2d77ef83c1aa85c5b"
	},
	{
		"id": "baedaa5348f1",
		"ts": "2026-11-06T11:45:29.398Z",
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
		"liquidityUsd": 238131.69,
		"hash": "baedaa5348f105c6e23bb288a5b093ab57c2c74756265da2bd2ef2cdd87dcabf"
	},
	{
		"id": "d5ecb05794ec",
		"ts": "2026-11-06T11:45:29.655Z",
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
		"liquidityUsd": 5093116.6,
		"hash": "d5ecb05794ec23f94ad25dc664fd3de5dff3b67dfd0b7b01473985fa2f2f5dd5"
	},
	{
		"id": "4a927bcbad65",
		"ts": "2026-11-06T11:45:29.922Z",
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
		"liquidityUsd": 886563.84,
		"hash": "4a927bcbad65d5cb2bb638bcd5da74653d75d827b1accbfb32fb3ed6d58db61d"
	},
	{
		"id": "8830a52672e7",
		"ts": "2026-11-06T11:45:30.167Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1024943.42,
		"hash": "8830a52672e7d54c475dc573df1b0b6b81dd390dfbf2c16c16d81ff4c2ba9df0"
	},
	{
		"id": "5640571fff26",
		"ts": "2026-11-06T11:45:30.419Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5093116.6,
		"hash": "5640571fff261b2c92b4f1343886c94d298e63bcff0fab46cb3ce8099183df08"
	},
	{
		"id": "49392560c9c7",
		"ts": "2026-11-06T11:45:30.672Z",
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
		"liquidityUsd": 2055007.46,
		"hash": "49392560c9c77f29ef1f8470f136237061f68e84ee12f96d8915403815a464e5"
	},
	{
		"id": "8967b1b164b3",
		"ts": "2026-11-06T11:45:30.923Z",
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
		"liquidityUsd": 525746.31,
		"hash": "8967b1b164b39e409bddd4b6ae79794b594e7cac6d93a053fa5ede22b268a2d8"
	},
	{
		"id": "5b39e8ecc07a",
		"ts": "2026-11-06T11:45:31.171Z",
		"symbol": "CLANKER",
		"token": "0x1bc0c42215582d5A085795f4baDbaC3ff36d1Bcb",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1807063.85,
		"hash": "5b39e8ecc07afa1671926a323137c49bca7af2ae92e3d196dfa6b4899177839c"
	},
	{
		"id": "a3ae5c5b3759",
		"ts": "2026-11-06T11:45:31.405Z",
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
		"liquidityUsd": 7437480.39,
		"hash": "a3ae5c5b375963b0229b1cd57eca1856f37b221895a23a34c3c2fdf555dccc33"
	},
	{
		"id": "7a4096e5af65",
		"ts": "2026-11-06T11:45:31.636Z",
		"symbol": "Reboot",
		"token": "0xe125872D91A5a67704FA782Aa74014Adff7cAE7E",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 364560.54,
		"hash": "7a4096e5af6559810fc11b6eb69232342ab83c2545e4dc665c2514151e09b735"
	},
	{
		"id": "c57a59b945a5",
		"ts": "2026-11-06T11:45:31.869Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1245333.8,
		"hash": "c57a59b945a59c6663b1f431a315e458ecc4615fab806e561ebcdf5d80c671d6"
	},
	{
		"id": "3a580548097a",
		"ts": "2026-11-06T11:45:32.099Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1010134.45,
		"hash": "3a580548097a95c10aefd0685a1b2a8066c0252c8bf57484a7483fd04e1bc255"
	},
	{
		"id": "ba460f324193",
		"ts": "2026-11-06T11:45:32.333Z",
		"symbol": "DENIM",
		"token": "0x0BDdfA9a0a1Eb326593262c7aF47ee091dB9cB70",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 401393.16,
		"hash": "ba460f3241933faf901d5b92a76e2a7f625ffd23f665fd9a3409fc01f19f9a82"
	},
	{
		"id": "34ef6031e721",
		"ts": "2026-11-06T11:45:32.581Z",
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
		"liquidityUsd": 2667993.51,
		"hash": "34ef6031e721e684c81bad770b949056c977e5161016019ef2db6ae0b429832b"
	},
	{
		"id": "f0dbd0fd7fee",
		"ts": "2026-11-06T11:45:32.812Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 2431531.77,
		"hash": "f0dbd0fd7feed1c54ed24247dc7d13a1fc5afea4d67a0576a50fd6a1bbd3c2c8"
	},
	{
		"id": "d5f075c9bd13",
		"ts": "2026-11-06T11:45:33.042Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1645884.37,
		"hash": "d5f075c9bd13fd648e5f98d1f9170415acb7723b1ae0dec4e8508e7200f0b6f2"
	},
	{
		"id": "a55dacf34f1c",
		"ts": "2026-11-06T03:05:21.503Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146257158.18,
		"hash": "a55dacf34f1cdfddb9b6fa787c8b0b4d987fd54c1285afc85ad0dcfbfd1e51d7"
	}
]
