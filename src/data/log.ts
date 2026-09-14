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
	"updatedAt": "2026-09-14T17:34:51.675Z",
	"tokensScored": 17405,
	"verdictsIssued": 17405,
	"safe": 14739,
	"risky": 1279,
	"likelyRug": 1387,
	"ticks": 994
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "df2518ddfd43",
		"ts": "2026-09-14T17:34:48.012Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 121845593.09,
		"hash": "df2518ddfd436aaec103942d2dc8577541a187678fcd819e7d238183772ee92f"
	},
	{
		"id": "dcfe83d9707c",
		"ts": "2026-09-14T17:34:48.222Z",
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
		"liquidityUsd": 18504626.93,
		"hash": "dcfe83d9707c04cad97d619435ac3b3b4a2cf194bc8fd589371b70dc1d18602c"
	},
	{
		"id": "57aa80c017e9",
		"ts": "2026-09-14T17:34:48.432Z",
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
		"liquidityUsd": 962134.87,
		"hash": "57aa80c017e9cb5f791ecfcad313e2329c2ccc43c05fbe00f0507b308c29261a"
	},
	{
		"id": "551cba0a8642",
		"ts": "2026-09-14T17:34:48.645Z",
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
		"liquidityUsd": 34413703.76,
		"hash": "551cba0a8642363060ed8ea2906c1ce6588bf68fc9d9bfac868b69809c548ba2"
	},
	{
		"id": "be0cd0210ea6",
		"ts": "2026-09-14T17:34:48.851Z",
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
		"liquidityUsd": 3962293.07,
		"hash": "be0cd0210ea6c0c761fc7c845bca24dfdab182975e2498fb1c7d16e278f38c04"
	},
	{
		"id": "81e464ca3fbf",
		"ts": "2026-09-14T17:34:49.093Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1196234.07,
		"hash": "81e464ca3fbfdf2f9687a5645ed8fee0c598136d1a8f2c2b068ad523461f12f0"
	},
	{
		"id": "cddceedfd357",
		"ts": "2026-09-14T17:34:49.294Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1429452.76,
		"hash": "cddceedfd3579fa4ac736a42ab137c6592a96bd9fa5a4a45518c0071fbd02578"
	},
	{
		"id": "9891f75419b5",
		"ts": "2026-09-14T17:34:49.511Z",
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
		"liquidityUsd": 1109694.17,
		"hash": "9891f75419b5a11fc5710398d4df3b3835961d011738aca661ec41506f83c037"
	},
	{
		"id": "88e110cc70a1",
		"ts": "2026-09-14T17:34:49.724Z",
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
		"liquidityUsd": 1361053.25,
		"hash": "88e110cc70a1f673e1da40f16e6ed195371d37ca4394221cf7daf71c226e473b"
	},
	{
		"id": "5dff40e21b37",
		"ts": "2026-09-14T17:34:49.931Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3277849.21,
		"hash": "5dff40e21b37f4f7c815b29ea33d219915ea880975bf10c52c365a06eef01870"
	},
	{
		"id": "4de1e872a1bf",
		"ts": "2026-09-14T17:34:50.142Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14054360.87,
		"hash": "4de1e872a1bfbb90b33506dea42688d32e2970c4448aab0ee7c9e5324c19b1bd"
	},
	{
		"id": "bfa7e9a77165",
		"ts": "2026-09-14T17:34:50.331Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 445408.64,
		"hash": "bfa7e9a771656dcb488812430d6dfe9783b8d1f8b8806c5020b1d02caa9ed039"
	},
	{
		"id": "bdba134f66ce",
		"ts": "2026-09-14T17:34:50.530Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 685749.64,
		"hash": "bdba134f66ce6b341e4e728b8f5675adc125673a4aa0b92a3cf45c1e5d66e88d"
	},
	{
		"id": "2a27841f5889",
		"ts": "2026-09-14T17:34:50.718Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1487099.33,
		"hash": "2a27841f588949385fc69d538cdf94b93a25e9d28f595ded83f6cb7e2778c43b"
	},
	{
		"id": "a6c355ae8cf4",
		"ts": "2026-09-14T17:34:51.039Z",
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
		"liquidityUsd": 670047.73,
		"hash": "a6c355ae8cf4665605a15db77c7c9337c915054801ae38201a99fd863b375615"
	},
	{
		"id": "6e0346032cd9",
		"ts": "2026-09-14T17:34:51.254Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 269802.73,
		"hash": "6e0346032cd98b6313016c67ff908c2e116017880d003c43492d6c08922f5cf0"
	},
	{
		"id": "5624d6529f3e",
		"ts": "2026-09-14T17:34:51.475Z",
		"symbol": "AAPL",
		"token": "0xb200000000000000000000C2e324d24d7eEcd1fb",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1374785.24,
		"hash": "5624d6529f3e5d69b436cb9fe1275af68539975b8b470b3f69c6a7fe7632b046"
	},
	{
		"id": "a794286308f2",
		"ts": "2026-09-14T17:34:51.675Z",
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
		"liquidityUsd": 1429452.76,
		"hash": "a794286308f24ff1f0eac0789576dd9678f8582e9b26523d9a6fa794feab5878"
	},
	{
		"id": "23f493bf0d5a",
		"ts": "2026-09-14T11:40:07.649Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 121160919.18,
		"hash": "23f493bf0d5adb17cc584921434df385862655063aa3d18a0ae05cb49a3a4de0"
	},
	{
		"id": "fc9613938da9",
		"ts": "2026-09-14T11:40:07.937Z",
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
		"liquidityUsd": 16855430.17,
		"hash": "fc9613938da9f8c2ab04511337639ebb298f44c8c1273d0784680cc3ab781cd0"
	},
	{
		"id": "17494df42d6b",
		"ts": "2026-09-14T11:40:08.391Z",
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
		"liquidityUsd": 967227.56,
		"hash": "17494df42d6bc05af09ce22009327a21916c3d303558f80d2f51d27b1dc09d81"
	},
	{
		"id": "ccaf5e222df2",
		"ts": "2026-09-14T11:40:08.731Z",
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
		"liquidityUsd": 34363540.43,
		"hash": "ccaf5e222df29c7519efc00f6d9d0abe1214b581dd68afd58d2eb92eda02f50e"
	},
	{
		"id": "7043457f0ef0",
		"ts": "2026-09-14T11:40:09.207Z",
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
		"liquidityUsd": 3935142.83,
		"hash": "7043457f0ef0bb2612db06a0212b4ddb3eccb05d2f8c6a42ddf8f97283b4a884"
	},
	{
		"id": "8508ad158dbb",
		"ts": "2026-09-14T11:40:09.498Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1184787.24,
		"hash": "8508ad158dbbbd9e24d2602dd1121c7ae532b685a6f05359be3c30826422612c"
	},
	{
		"id": "991861d2d4de",
		"ts": "2026-09-14T11:40:09.784Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1543197,
		"hash": "991861d2d4de422be0d5399063ec3c77f3e02074af7921aad15f304d789ddaf6"
	},
	{
		"id": "ca64e8c171c2",
		"ts": "2026-09-14T11:40:10.051Z",
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
		"liquidityUsd": 1102456.8,
		"hash": "ca64e8c171c2f29d44d2a31e9b52d84a6fee2117e0ea16b07c2060e25c4ffdd0"
	},
	{
		"id": "7445ffeff21e",
		"ts": "2026-09-14T11:40:10.420Z",
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
		"liquidityUsd": 1543197,
		"hash": "7445ffeff21ee832023c336e280a874c8599d4d2d9c1c94e8c2d436064d2e15c"
	},
	{
		"id": "8be00c829a05",
		"ts": "2026-09-14T11:40:10.669Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 473437.69,
		"hash": "8be00c829a054f5fe3f479fbce427ac8a9ca8703ab2e90df65397c9f42ed86cc"
	},
	{
		"id": "08a376920f0d",
		"ts": "2026-09-14T11:40:10.892Z",
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
		"liquidityUsd": 3129622.91,
		"hash": "08a376920f0d30dd9d0d9f35aac76c7539f3de9343d609499e63291ecc81a2c1"
	},
	{
		"id": "8df458405349",
		"ts": "2026-09-14T11:40:11.128Z",
		"symbol": "LSK",
		"token": "0xac485391EB2d7D88253a7F1eF18C37f4242D1A24",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 343865.33,
		"hash": "8df45840534921d962199af029f025e4867a193fb06942c25a44d83b8f0d8236"
	},
	{
		"id": "11fb14fc08b0",
		"ts": "2026-09-14T11:40:11.405Z",
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
		"liquidityUsd": 691417.13,
		"hash": "11fb14fc08b0d82797136b490f5387edee9c2a70b54e7db40f3695cf46df06a3"
	},
	{
		"id": "f2f1fdbba86f",
		"ts": "2026-09-14T11:40:11.638Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14176917.64,
		"hash": "f2f1fdbba86ff9a187b42fe8c54660b5a2a05153a6ef001d25646f9059aa7b53"
	},
	{
		"id": "365699574a0a",
		"ts": "2026-09-14T11:40:11.858Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1485035.31,
		"hash": "365699574a0ac9e2eec09d02cd666093d4b6cb4b78196613dbd2df573c0e5a49"
	},
	{
		"id": "ea17d7bb32c3",
		"ts": "2026-09-14T11:40:12.077Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 671278.79,
		"hash": "ea17d7bb32c38c9e7a64730fb1e460a530b8d98918b9bcc6d7ccffdaeadf5cec"
	},
	{
		"id": "90d7dbba3e7d",
		"ts": "2026-09-14T11:40:12.301Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 284637.94,
		"hash": "90d7dbba3e7da440de63b88a10637aa5882af63b044df75291344378c5739917"
	},
	{
		"id": "23a46e5a1ea2",
		"ts": "2026-09-14T11:40:12.614Z",
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
		"liquidityUsd": 1536745.04,
		"hash": "23a46e5a1ea257f1b8d0932ebc3be8a5bc599bbdb493a2e81b8a4f9113a95026"
	},
	{
		"id": "c01d44ee534a",
		"ts": "2026-09-14T11:40:12.844Z",
		"symbol": "STONX",
		"token": "0x89d8CB38067b55f820F29A9E12d0CE18682A2Bfc",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 938641.19,
		"hash": "c01d44ee534aa72d5959a461cd00d2058d972186ee14e2df5769a83f33b20064"
	},
	{
		"id": "914069296d09",
		"ts": "2026-09-14T05:43:36.234Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120947876.53,
		"hash": "914069296d09ec709e712e8d18128c0b44711fb265df4c8c3be0e64684f96ef8"
	},
	{
		"id": "5826a3b98ff7",
		"ts": "2026-09-14T05:43:36.680Z",
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
		"liquidityUsd": 15081827.35,
		"hash": "5826a3b98ff7639968fc7be9d7cbcb3e1596e611481cc9158e2e0f97fb495449"
	},
	{
		"id": "d1318fa30c7b",
		"ts": "2026-09-14T05:43:36.924Z",
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
		"liquidityUsd": 971288.96,
		"hash": "d1318fa30c7bc254c61b0dd802304da8022598b5d250223fc1bf5b116efa05a7"
	},
	{
		"id": "0963e685a7be",
		"ts": "2026-09-14T05:43:37.168Z",
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
		"liquidityUsd": 34254719.83,
		"hash": "0963e685a7be540b64cceb506da22fcd4306875186d756b476ca098400c18704"
	},
	{
		"id": "0a43cd021633",
		"ts": "2026-09-14T05:43:37.415Z",
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
		"liquidityUsd": 3938452.99,
		"hash": "0a43cd02163357251c389a160485b2cacc643f528e8ad7dcb7c5afbf92a132dd"
	},
	{
		"id": "3bef1208672f",
		"ts": "2026-09-14T05:43:37.657Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1181991.2,
		"hash": "3bef1208672ffedd483420483be06cc85a4d0d4b6f7f29d591e90c5007ac72fb"
	},
	{
		"id": "1979e928b379",
		"ts": "2026-09-14T05:43:37.902Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1550006.38,
		"hash": "1979e928b379c056efbb0d59792012c73341816a1a42e863c49b8922a0643035"
	},
	{
		"id": "a2496b2078a2",
		"ts": "2026-09-14T05:43:38.169Z",
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
		"liquidityUsd": 1135257.88,
		"hash": "a2496b2078a2032983e5dcdfc795b08ea9a8255ece796d260f9a72679ca84bea"
	},
	{
		"id": "ac6b90e74764",
		"ts": "2026-09-14T05:43:38.419Z",
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
		"liquidityUsd": 1550006.38,
		"hash": "ac6b90e74764699914b1b20b545302d3cbad4b2e50c19d629c599c060f99c07a"
	},
	{
		"id": "8a6d4832ecf6",
		"ts": "2026-09-14T05:43:38.678Z",
		"symbol": "LSK",
		"token": "0xac485391EB2d7D88253a7F1eF18C37f4242D1A24",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 376384.65,
		"hash": "8a6d4832ecf65b646bb57fa5c57492809fd1191e6c275205e33deacce02eaa86"
	},
	{
		"id": "290c07dff573",
		"ts": "2026-09-14T05:43:38.900Z",
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
		"liquidityUsd": 702351.9,
		"hash": "290c07dff573cf59d914a40255aa32b2a0c0fdaf37b4ca47b7d237068869ea34"
	},
	{
		"id": "5c9166a7592c",
		"ts": "2026-09-14T05:43:39.127Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1440093.32,
		"hash": "5c9166a7592ce37f1b52525e90ccf6925fa280480b4cff6bb0ad50cfa583b0d4"
	},
	{
		"id": "5446e46d6ba4",
		"ts": "2026-09-14T05:43:39.350Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 477443.71,
		"hash": "5446e46d6ba49ba1ebabce4f1cd7686ff9d50bc4fd0bc0fec5b8439137465927"
	},
	{
		"id": "a0b828544722",
		"ts": "2026-09-14T05:43:39.572Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14011044.07,
		"hash": "a0b828544722a1aa71e8dbfb529f38d2ee11ce9d61e273652a76eb75f21e5c0f"
	},
	{
		"id": "bf95a889be0f",
		"ts": "2026-09-14T05:43:39.803Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 726299.94,
		"hash": "bf95a889be0f76a321d21ab659d36493f778a41720f3b344d712c8f53b26aab3"
	},
	{
		"id": "a4897eb3ebf0",
		"ts": "2026-09-14T05:43:40.026Z",
		"symbol": "STONX",
		"token": "0x89d8CB38067b55f820F29A9E12d0CE18682A2Bfc",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1152951.33,
		"hash": "a4897eb3ebf009fd10e67336787ceab9511f8504899218f7eca9713f0547dba7"
	},
	{
		"id": "faaafcab2c29",
		"ts": "2026-09-14T05:43:40.250Z",
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
		"liquidityUsd": 3175218.2,
		"hash": "faaafcab2c2947a8361494c16dd2c50a4c260134be3b54c1d8dce676ddb0b306"
	},
	{
		"id": "3b6cde248014",
		"ts": "2026-09-14T05:43:40.477Z",
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
		"liquidityUsd": 1456363.71,
		"hash": "3b6cde2480147ab3b9bbbc2be2b07fdbadf13cd4f10117cb1a9f62fe67cb1d4a"
	},
	{
		"id": "a8facc6d2269",
		"ts": "2026-09-14T05:43:40.700Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 276933.71,
		"hash": "a8facc6d2269990bc8681c9597e09c4cf1cec83442c5f16bf60224e776eefc2a"
	},
	{
		"id": "0790bc7ec617",
		"ts": "2026-09-14T00:39:50.418Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120094687.91,
		"hash": "0790bc7ec6175285a78b558c37d023445489d7d420f27e1716e9854849c1199d"
	},
	{
		"id": "e1efe37b44ce",
		"ts": "2026-09-14T00:39:50.894Z",
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
		"liquidityUsd": 15058665.79,
		"hash": "e1efe37b44ce17393c940f18869d14d09a3469e183b499a23549b1ae6f2590b3"
	},
	{
		"id": "950085bc66b6",
		"ts": "2026-09-14T00:39:51.138Z",
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
		"liquidityUsd": 961142.2,
		"hash": "950085bc66b669ef3b9fa1196e87c6f9a9abd8bdb4a5f4b5da9b1e579402d876"
	},
	{
		"id": "b709236e979e",
		"ts": "2026-09-14T00:39:51.386Z",
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
		"liquidityUsd": 33797028.06,
		"hash": "b709236e979eff980aaa9abf806f5a419eb53e523506ec54d42d64a72b6d9c53"
	},
	{
		"id": "745d1d33a583",
		"ts": "2026-09-14T00:39:51.630Z",
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
		"liquidityUsd": 3881682.35,
		"hash": "745d1d33a58384f804ac53e2522cb1863507a5548fde67db766fef4476fe7f3b"
	},
	{
		"id": "0f7d43a13513",
		"ts": "2026-09-14T00:39:51.871Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1166815.33,
		"hash": "0f7d43a1351302ab9e13b7510e0e6ba6cf2b8692eebf0ced0fb5eec1dc7947a4"
	},
	{
		"id": "fb9284fdfdf7",
		"ts": "2026-09-14T00:39:52.112Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1622872.3,
		"hash": "fb9284fdfdf71bbe575723da6684b29c9544cf0d99a29fa2ad3f558ed3272899"
	},
	{
		"id": "2219c58050d1",
		"ts": "2026-09-14T00:39:52.356Z",
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
		"liquidityUsd": 1120885.67,
		"hash": "2219c58050d1853a744bee4b2a2204d41735cdbb9856c5b37aab5be97a0f7022"
	},
	{
		"id": "63e33f2a55e0",
		"ts": "2026-09-14T00:39:52.797Z",
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
		"liquidityUsd": 1593090.51,
		"hash": "63e33f2a55e0f8422e1437a161916f55836b6e12ed3db4cc9f70b9443c625e8f"
	},
	{
		"id": "7eb3aeb02e88",
		"ts": "2026-09-14T00:39:53.037Z",
		"symbol": "LSK",
		"token": "0xac485391EB2d7D88253a7F1eF18C37f4242D1A24",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 381908.74,
		"hash": "7eb3aeb02e88a24351690966c0839be480e3212ca8c1488a389b91334e16a1a4"
	},
	{
		"id": "31c397d38f16",
		"ts": "2026-09-14T00:39:53.264Z",
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
		"liquidityUsd": 685631.16,
		"hash": "31c397d38f16f9447d2439d19f8d9048208829eab44b2b849e13d4872f2811ca"
	},
	{
		"id": "72e8b77ef912",
		"ts": "2026-09-14T00:39:53.488Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1424244.16,
		"hash": "72e8b77ef912db1833a7d7db40d3a04b218a1b1379c4eea540e6d8d4febc21a1"
	},
	{
		"id": "3a9987f9e9d2",
		"ts": "2026-09-14T00:39:53.713Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 508517.85,
		"hash": "3a9987f9e9d25226cbf2ee30c86e4af41e494cea47d7b1946470dbbe1f109b8c"
	},
	{
		"id": "dee96f2d196b",
		"ts": "2026-09-14T00:39:53.991Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13551011.04,
		"hash": "dee96f2d196bd4813d9041cac1804b115e17a1aa4f996ff8717837d1ffffe3be"
	},
	{
		"id": "cfbc3fb32ee1",
		"ts": "2026-09-14T00:39:54.222Z",
		"symbol": "STONX",
		"token": "0x89d8CB38067b55f820F29A9E12d0CE18682A2Bfc",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1186216.13,
		"hash": "cfbc3fb32ee1b714060c8334f529d440b09b4623496505fa97d308a190d39de1"
	},
	{
		"id": "11832c59f698",
		"ts": "2026-09-14T00:39:54.450Z",
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
		"liquidityUsd": 1622570.87,
		"hash": "11832c59f698f6ae1a7f6408871c7e3b9490b5f783cc4b27391120b64f738c2f"
	},
	{
		"id": "f049d665c86b",
		"ts": "2026-09-14T00:39:54.674Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 736544.46,
		"hash": "f049d665c86b0bd2aed30aaec90748970f03937fcd6cd56663129623df490141"
	},
	{
		"id": "44776e96b368",
		"ts": "2026-09-14T00:39:54.910Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 290252.21,
		"hash": "44776e96b3682f343ff37e3ca6da49eee38e52c61012e07f9666a7155d530c4b"
	},
	{
		"id": "6328016b2caf",
		"ts": "2026-09-14T00:39:55.144Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 395332.07,
		"hash": "6328016b2caf7ab54268af05b7aca650c4af24159181ae9d9c301a33b487c777"
	},
	{
		"id": "dbe259b6e886",
		"ts": "2026-09-13T22:50:07.869Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120109581.73,
		"hash": "dbe259b6e8864d2c7dee01639d99e07d26f5a6912fd5eb5bcb666448de29fabc"
	},
	{
		"id": "8b116d59c80d",
		"ts": "2026-09-13T22:50:08.214Z",
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
		"liquidityUsd": 13089247.95,
		"hash": "8b116d59c80dc9429aa25b59081a91770c4cbe1dcc53dc0eea1a1fd43cae6894"
	},
	{
		"id": "70495d2c3733",
		"ts": "2026-09-13T22:50:08.511Z",
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
		"liquidityUsd": 958270.99,
		"hash": "70495d2c37331fc4085bdf88e38ecee4ebd16839a446b9a74f5133a4b4528c1d"
	},
	{
		"id": "acf7bb3a5605",
		"ts": "2026-09-13T22:50:08.775Z",
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
		"liquidityUsd": 33811065.89,
		"hash": "acf7bb3a5605feb0730571e0e9cea525210046499c72fc4b8ca38607bde1694c"
	},
	{
		"id": "bfdcc67cbd10",
		"ts": "2026-09-13T22:50:09.235Z",
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
		"liquidityUsd": 3878660.48,
		"hash": "bfdcc67cbd103bd29632ccbb6782e0cc2e5b3a07d23711d99ee0b759f8a78a8e"
	},
	{
		"id": "397b337dad9e",
		"ts": "2026-09-13T22:50:09.485Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1160439.03,
		"hash": "397b337dad9e2baa5d49404a10c13ce778ee6b88905c8649863ce74962339361"
	},
	{
		"id": "8a914f13902b",
		"ts": "2026-09-13T22:50:09.751Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1615454.79,
		"hash": "8a914f13902b341cff3e852e96b05bff715a879d96996058fe2cb067afaa34a3"
	},
	{
		"id": "b9fcdf806b0d",
		"ts": "2026-09-13T22:50:10.053Z",
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
		"liquidityUsd": 1124648.52,
		"hash": "b9fcdf806b0dbd9b4701a9e45afd52fbb0fc502087be78faab542d6fb23b7302"
	},
	{
		"id": "ada8612201ec",
		"ts": "2026-09-13T22:50:10.395Z",
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
		"liquidityUsd": 1600011.2,
		"hash": "ada8612201ec8af2c99fd6220691d01d4f93e7db478c7729b265899b270fdbfd"
	},
	{
		"id": "3155cc8da5fd",
		"ts": "2026-09-13T22:50:10.669Z",
		"symbol": "LSK",
		"token": "0xac485391EB2d7D88253a7F1eF18C37f4242D1A24",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 396197.55,
		"hash": "3155cc8da5fd5690ec59b4ab456a7349ef21d658a298175934db0911e1ed30c5"
	},
	{
		"id": "ed3c25fbe352",
		"ts": "2026-09-13T22:50:10.909Z",
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
		"liquidityUsd": 700807.18,
		"hash": "ed3c25fbe35284fbcdefd7b29f27561793130655eb7f8a0ecad076f9c9679d61"
	},
	{
		"id": "8289e98d44e3",
		"ts": "2026-09-13T22:50:11.136Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1396582.97,
		"hash": "8289e98d44e3cd2b687f7ce248d8d73ef6d84b65f897de79ad9c3c7923e841de"
	},
	{
		"id": "b4bfd8898dd8",
		"ts": "2026-09-13T22:50:11.366Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 496586.3,
		"hash": "b4bfd8898dd8d9805ef0c3d4b1f1d790ae36235bb121c618808344b025fdf25b"
	},
	{
		"id": "f9c68ed849ad",
		"ts": "2026-09-13T22:50:11.620Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13539581.73,
		"hash": "f9c68ed849ad3065bea8a1845f02202a3cb3d80703091d51f19daa7c641f8b53"
	},
	{
		"id": "29a34a366a6b",
		"ts": "2026-09-13T22:50:11.868Z",
		"symbol": "STONX",
		"token": "0x89d8CB38067b55f820F29A9E12d0CE18682A2Bfc",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1265098.22,
		"hash": "29a34a366a6b98f96b4b5fe17b93e53847bae3cc8ec73f77c10a53c1db77f341"
	},
	{
		"id": "b7e3dc0ecdfa",
		"ts": "2026-09-13T22:50:12.109Z",
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
		"liquidityUsd": 1615454.79,
		"hash": "b7e3dc0ecdfa71131a809633ce5283bfccfd6d66dff369dc68947311f21cd364"
	},
	{
		"id": "24908782137b",
		"ts": "2026-09-13T22:50:12.343Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 696447.27,
		"hash": "24908782137bbe6056c079849b21be73d04c7b98599c6066c0260f589ab9a254"
	},
	{
		"id": "5c91f3567141",
		"ts": "2026-09-13T22:50:12.584Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 734757.41,
		"hash": "5c91f3567141ec9ba72af10ab96491bbf89f48ef7d58458c2eb7ca98493a5db6"
	},
	{
		"id": "5cb70ab4063d",
		"ts": "2026-09-13T22:50:12.827Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 402320.22,
		"hash": "5cb70ab4063de77ab0a5b64649d589f5ae13521e827b662699798ac8e4a4241d"
	},
	{
		"id": "d5feb74b92f9",
		"ts": "2026-09-13T20:14:33.589Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120727196.68,
		"hash": "d5feb74b92f9df87e5c8522352297d6d7acc801221e39b9c9f5b573bd4495cb5"
	},
	{
		"id": "a59f624ccd3a",
		"ts": "2026-09-13T20:14:33.807Z",
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
		"liquidityUsd": 16796579.82,
		"hash": "a59f624ccd3a2655a746b75dc0c8f6e21beb5fba3a245f60bf4ccd679276a687"
	},
	{
		"id": "0ca2f7ad9f4d",
		"ts": "2026-09-13T20:14:34.030Z",
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
		"liquidityUsd": 971456.83,
		"hash": "0ca2f7ad9f4d7f04880fde19546d6c78bb1dfaf0f339e9aa136df56ca2486c73"
	},
	{
		"id": "7b529d62ca85",
		"ts": "2026-09-13T20:14:34.254Z",
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
		"liquidityUsd": 34050608.73,
		"hash": "7b529d62ca85e6c9db5cb5676a41f035ff11b3bf72ffed4df1dd3638c30f6d81"
	},
	{
		"id": "0994590aaf1c",
		"ts": "2026-09-13T20:14:34.482Z",
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
		"liquidityUsd": 3939558.04,
		"hash": "0994590aaf1ce4621ecdbb0caeae665eb6d30da97c5ce340f9e74b20e7dcc913"
	},
	{
		"id": "556ecd92c964",
		"ts": "2026-09-13T20:14:34.755Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1180298.9,
		"hash": "556ecd92c9640f644dc6769e464769e869ccaa56552339d7813d03a88cb8a85f"
	},
	{
		"id": "db6b3b0eb9cf",
		"ts": "2026-09-13T20:14:34.977Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1594809.34,
		"hash": "db6b3b0eb9cffa1ae064380c6c92efd1163bef08228ea5b028055086f51feba9"
	},
	{
		"id": "d2e53fbeb193",
		"ts": "2026-09-13T20:14:35.199Z",
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
		"liquidityUsd": 1137434.44,
		"hash": "d2e53fbeb193bc44f2d69846700be7f914e38aef2f5e6c11969f0c9dac821a07"
	},
	{
		"id": "73c6b1da5cd3",
		"ts": "2026-09-13T20:14:35.411Z",
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
		"liquidityUsd": 1594809.34,
		"hash": "73c6b1da5cd34415fa6c67fd80bc315eba28330489fd78637aff4f88ab3631d0"
	},
	{
		"id": "3b739bc9958f",
		"ts": "2026-09-13T20:14:35.639Z",
		"symbol": "LSK",
		"token": "0xac485391EB2d7D88253a7F1eF18C37f4242D1A24",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 406536.96,
		"hash": "3b739bc9958f855a0f7083a2d29ede065bd407fa7baedf5ad4a5fc611c09ddbc"
	},
	{
		"id": "81b410cbf35f",
		"ts": "2026-09-13T20:14:35.845Z",
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
		"liquidityUsd": 701887.86,
		"hash": "81b410cbf35fb80a85051f63d6e0fcb7fa4b73fadc6218f060c258d76736aa8c"
	},
	{
		"id": "fcc7b21ad67d",
		"ts": "2026-09-13T20:14:36.039Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1435135.34,
		"hash": "fcc7b21ad67dc5cbd861e4d2803a2aa1fa08f3247f7373b65a74db8dc1a60406"
	},
	{
		"id": "d30f194968b8",
		"ts": "2026-09-13T20:14:36.246Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 522583.52,
		"hash": "d30f194968b873f759fab8bf9172039cb034869698737c98650adec477984c4e"
	},
	{
		"id": "42687ae3f102",
		"ts": "2026-09-13T20:14:36.446Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13739453.28,
		"hash": "42687ae3f102e676c1c15e4cb152d63d00ed34b916e3cb0b7c8930cdc5b0e5a6"
	},
	{
		"id": "196f09d8e808",
		"ts": "2026-09-13T20:14:36.655Z",
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
		"liquidityUsd": 1562175.77,
		"hash": "196f09d8e8089469c94ddf0708b04effbb5e5923cf4c8e96752c09acc09b7dc0"
	},
	{
		"id": "8d9666320f97",
		"ts": "2026-09-13T20:14:36.859Z",
		"symbol": "STONX",
		"token": "0x89d8CB38067b55f820F29A9E12d0CE18682A2Bfc",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1414734.28,
		"hash": "8d9666320f9778f6a28e355b086835b5f5d9507bf0ba32e84eaaae40b395e304"
	},
	{
		"id": "3c7919626fe2",
		"ts": "2026-09-13T20:14:37.066Z",
		"symbol": "KAI",
		"token": "0xca18A528Ea897040f715edC92e6e4572780c5ca1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 285043.38,
		"hash": "3c7919626fe292ce5a83d9c1efc8bcb6e027a0ddcf3f29e5fe9ae971d039683a"
	},
	{
		"id": "b439e2c62829",
		"ts": "2026-09-13T20:14:37.260Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 410645.29,
		"hash": "b439e2c62829693c9a4d8b363b5980c6ed73ff50c7c50aa1866ba065307d6f83"
	},
	{
		"id": "f743bea8868a",
		"ts": "2026-09-13T20:14:37.487Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 739675.99,
		"hash": "f743bea8868a767ff5233765e4af2ef6d43fa3ed820f5314a08acbc7dfb6eab7"
	},
	{
		"id": "1c03ac4921af",
		"ts": "2026-09-13T17:13:02.192Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120523965.57,
		"hash": "1c03ac4921af0f533c7234bd49ee8b000b6dca19659e78393e028a76e5052f8a"
	},
	{
		"id": "e3c251b07f4b",
		"ts": "2026-09-13T17:13:02.691Z",
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
		"liquidityUsd": 12446139.9,
		"hash": "e3c251b07f4b98ab568071d3aba0217a0df871d937dd58d2e957a1c4126adc33"
	},
	{
		"id": "a7f4ed6a0c80",
		"ts": "2026-09-13T17:13:02.928Z",
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
		"liquidityUsd": 974133.32,
		"hash": "a7f4ed6a0c802a0c0a9c663de31f0bdfbb8ac302a68f2790f7ae24fd4b0c9e4f"
	},
	{
		"id": "284d1f4a4c49",
		"ts": "2026-09-13T17:13:03.179Z",
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
		"liquidityUsd": 34141583.36,
		"hash": "284d1f4a4c4979cb773605c088e04ed8b4d3d33ed7c45ae0fcb1968ee0f6549e"
	},
	{
		"id": "099c55cd0007",
		"ts": "2026-09-13T17:13:03.423Z",
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
		"liquidityUsd": 3946362.39,
		"hash": "099c55cd00079019ed15247283098665a64a6d6df05b55ce57fe8738ec7ff4e5"
	},
	{
		"id": "6555182dcbcb",
		"ts": "2026-09-13T17:13:03.668Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1180584.38,
		"hash": "6555182dcbcb1aa24b330cfaed83042d361a68b821b079cb608c912222381334"
	},
	{
		"id": "26413132a8b9",
		"ts": "2026-09-13T17:13:04.034Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1611446.45,
		"hash": "26413132a8b9bb483c9311b2c7f5d465d6ffe8fb921ab8963bbbeebed556f85a"
	},
	{
		"id": "1f04122caf32",
		"ts": "2026-09-13T17:13:04.295Z",
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
		"liquidityUsd": 1139052.43,
		"hash": "1f04122caf323be055af9602d09eb2b1bd5fb3b25fda27aee7f3fed75543524c"
	},
	{
		"id": "07eb3cffeeef",
		"ts": "2026-09-13T17:13:04.572Z",
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
		"liquidityUsd": 1611446.45,
		"hash": "07eb3cffeeef568870a3b1bf6f75f749e0f66a0690e245eb7fe72f94526ea389"
	},
	{
		"id": "057d03e87f5b",
		"ts": "2026-09-13T17:13:04.813Z",
		"symbol": "LSK",
		"token": "0xac485391EB2d7D88253a7F1eF18C37f4242D1A24",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 352970.79,
		"hash": "057d03e87f5bd10f92bd7492a0bf0cb9b2b36f146c207e8c38df5f380948748a"
	},
	{
		"id": "49313016a991",
		"ts": "2026-09-13T17:13:05.033Z",
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
		"liquidityUsd": 707805.65,
		"hash": "49313016a991a35bfe16549a69ca5490fe9e9fbed452195dd2863cbc98ce31d6"
	},
	{
		"id": "d3bf79598555",
		"ts": "2026-09-13T17:13:05.256Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1463104.72,
		"hash": "d3bf7959855586c23f2da89f9246ccb3bb18a37e432c08708ffe913b7afc9b50"
	},
	{
		"id": "1b64487793dc",
		"ts": "2026-09-13T17:13:05.475Z",
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
		"liquidityUsd": 1564637.64,
		"hash": "1b64487793dce261220ffee3b0f35ebc39955f8b5b48fd10f2e56e17fc930bdb"
	},
	{
		"id": "b82bdf044719",
		"ts": "2026-09-13T17:13:05.691Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 465202.69,
		"hash": "b82bdf044719c8a7cc50dd3354f0986ec46db1183c1db53c8ab94d175107504e"
	},
	{
		"id": "393ab3ce9857",
		"ts": "2026-09-13T17:13:05.911Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 193833.78,
		"hash": "393ab3ce9857aa4026025f0d1657a0e29392fe427e446a7a0cec94f46664185b"
	},
	{
		"id": "aa6d58c46ea6",
		"ts": "2026-09-13T17:13:06.135Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13808856.73,
		"hash": "aa6d58c46ea6957199a2517bf254be42d653016a1ce9072bae2cd099d6aafc4d"
	},
	{
		"id": "5bed6d8006a5",
		"ts": "2026-09-13T17:13:06.354Z",
		"symbol": "STONX",
		"token": "0x89d8CB38067b55f820F29A9E12d0CE18682A2Bfc",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1180816.54,
		"hash": "5bed6d8006a5925ae78fbe3b4715a9cee9e98c6665747cb981f2a90e5872eca4"
	},
	{
		"id": "b9e25cd9c92e",
		"ts": "2026-09-13T17:13:06.576Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 725038.46,
		"hash": "b9e25cd9c92e053ad14a009941cf3cf710d20e6d49783be8dffd59a90c243121"
	},
	{
		"id": "e36fa030a480",
		"ts": "2026-09-13T17:13:06.799Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 426903.17,
		"hash": "e36fa030a4808bd4e670dade0a986b98e0d747fab4e7b24ba6c58976a86ccb95"
	},
	{
		"id": "3e94951b8427",
		"ts": "2026-09-13T13:16:36.364Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 119725934.79,
		"hash": "3e94951b8427a1c81e0eaaced39e8e2b9474074c38109aba46dec2a0cd61cd09"
	},
	{
		"id": "778ec7408a57",
		"ts": "2026-09-13T13:16:36.564Z",
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
		"liquidityUsd": 16128961.67,
		"hash": "778ec7408a57cefc5007d6239d67848d9937dc116f9003608a0330ddd02831d0"
	},
	{
		"id": "b2d3b7bb5611",
		"ts": "2026-09-13T13:16:36.762Z",
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
		"liquidityUsd": 964029.45,
		"hash": "b2d3b7bb56116924beb2be53c55593128a4c0a5cb17480f18747734b74c1e5f1"
	},
	{
		"id": "64789c91cddf",
		"ts": "2026-09-13T13:16:36.956Z",
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
		"liquidityUsd": 33909215.31,
		"hash": "64789c91cddfcde1b65a0e24802abb7e3118b3e34ac4ef447097b062ced582b0"
	},
	{
		"id": "dbfc3a869743",
		"ts": "2026-09-13T13:16:37.145Z",
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
		"liquidityUsd": 3888396.86,
		"hash": "dbfc3a86974331ec84364af54ecfc1f724b375ed6b27aa86444b306bb1b96604"
	},
	{
		"id": "557d1728a951",
		"ts": "2026-09-13T13:16:37.435Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1165017.26,
		"hash": "557d1728a951908ef9042536e85564455947caac004e64a7f6f63c589aa96e27"
	},
	{
		"id": "cac799a2ffac",
		"ts": "2026-09-13T13:16:37.624Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1624374.61,
		"hash": "cac799a2ffacd346fa2ee60f6de2cd4ee60915b97277023697f20191970bd312"
	},
	{
		"id": "bc68bd96fef2",
		"ts": "2026-09-13T13:16:37.823Z",
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
		"liquidityUsd": 1128791.56,
		"hash": "bc68bd96fef28fec9b8e1a30549501d57b83af346319a41d9fb5d003c6d2d03a"
	},
	{
		"id": "5fbc6b1e5ae6",
		"ts": "2026-09-13T13:16:38.017Z",
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
		"liquidityUsd": 1624374.61,
		"hash": "5fbc6b1e5ae6b22e537e3aaef051289c9d40a7b2843ef3b2bd4b21b8a4cffed1"
	},
	{
		"id": "ab2ba8c40210",
		"ts": "2026-09-13T13:16:38.204Z",
		"symbol": "LSK",
		"token": "0xac485391EB2d7D88253a7F1eF18C37f4242D1A24",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 359809.34,
		"hash": "ab2ba8c402107084c56f5610ab6310d008869866c6ec851a776c23085b9d86df"
	},
	{
		"id": "33805d51f1c2",
		"ts": "2026-09-13T13:16:38.397Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1450673.78,
		"hash": "33805d51f1c20feac775b5fed10cb91899f9b9d8b617a09533acbf73d3b654e5"
	},
	{
		"id": "9292c8664171",
		"ts": "2026-09-13T13:16:38.581Z",
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
		"liquidityUsd": 715137.82,
		"hash": "9292c86641710792409a0e3c80e4c1f0b7d9de1e224b80ae41af3848e8fdf115"
	},
	{
		"id": "53bfab262481",
		"ts": "2026-09-13T13:16:38.772Z",
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
		"liquidityUsd": 1565780.01,
		"hash": "53bfab26248154cd7bb7d6131edc3ceab4673165102ea0c9b175b738c95c6e8f"
	},
	{
		"id": "a5a72817938d",
		"ts": "2026-09-13T13:16:38.973Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13817738.6,
		"hash": "a5a72817938db63c067dd44790187581ee469bc4f4ac703cf346aba663f88d98"
	},
	{
		"id": "0489fd0f8e54",
		"ts": "2026-09-13T13:16:39.200Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 199117.29,
		"hash": "0489fd0f8e54ebb22ab79ede4447fc38318e67b7aa7542546c2b16643475139f"
	},
	{
		"id": "eb7adc761507",
		"ts": "2026-09-13T13:16:39.399Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 496314.94,
		"hash": "eb7adc76150756a5ad25a6c1a55192a0f455bb0132d30907cd17b7785d7f70fc"
	},
	{
		"id": "a0ee0d38e31b",
		"ts": "2026-09-13T13:16:39.610Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 534735.99,
		"hash": "a0ee0d38e31b7f528fe2de2ac394209be8e0240c5bbde9fb9a4b15aaff5da41d"
	},
	{
		"id": "0ace99d535f7",
		"ts": "2026-09-13T13:16:39.794Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 394062.92,
		"hash": "0ace99d535f766077763733e84f1f079cd9feef0be24211d822b9343bc96e710"
	},
	{
		"id": "e9983c11a069",
		"ts": "2026-09-13T13:16:40.061Z",
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
		"liquidityUsd": 489731.17,
		"hash": "e9983c11a069fceff4545f1b0c8ea5bd0a5caf22464199454830abde600c9466"
	},
	{
		"id": "c4b2b4cbd95e",
		"ts": "2026-09-13T07:59:59.989Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120165473.53,
		"hash": "c4b2b4cbd95ef737300534c5076a92caa570dbd048a7e338f84c266c8bb030f3"
	},
	{
		"id": "7bbd2e7b21d1",
		"ts": "2026-09-13T08:00:00.243Z",
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
		"liquidityUsd": 15679159.38,
		"hash": "7bbd2e7b21d15ea8199d0724b2f92a6437f824e2afa828ec0e629301192a5337"
	},
	{
		"id": "f9980449634c",
		"ts": "2026-09-13T08:00:00.508Z",
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
		"liquidityUsd": 980907.04,
		"hash": "f9980449634c0f4eaba4e34b9e7e2e69766fc1035d89d23bfe1a50d33b5bc3a9"
	},
	{
		"id": "5c48d020d68b",
		"ts": "2026-09-13T08:00:00.781Z",
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
		"liquidityUsd": 34009891.95,
		"hash": "5c48d020d68bfa793f01cf2fbfb360bfcaca473cd0327fc5314d60238c637b83"
	},
	{
		"id": "79d7837d0ed7",
		"ts": "2026-09-13T08:00:01.081Z",
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
		"liquidityUsd": 3939191.08,
		"hash": "79d7837d0ed7ff954ad6dd50cae2306e2f52ef7f7ebf9a0301ab97a75c35c1b2"
	},
	{
		"id": "7b6537368b33",
		"ts": "2026-09-13T08:00:01.350Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1184461.36,
		"hash": "7b6537368b3306b61dadf3cf060dc1f72cc101c6aa5b6eaaaeb64e4409b204cb"
	},
	{
		"id": "5935a0e38b50",
		"ts": "2026-09-13T08:00:01.652Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1657399.61,
		"hash": "5935a0e38b501a36101fd5928e26f5de4ef785a40fe64d868c1ad26816270a59"
	},
	{
		"id": "64b331cca2ea",
		"ts": "2026-09-13T08:00:02.028Z",
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
		"liquidityUsd": 2329719.06,
		"hash": "64b331cca2eadc6df6a5a110a7168c483adaeccfef7c6953564338fddd758002"
	},
	{
		"id": "f5f8be744a0a",
		"ts": "2026-09-13T08:00:02.271Z",
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
		"liquidityUsd": 1606513.71,
		"hash": "f5f8be744a0a321db809e96a07313d535854b9edeef5ddb8282b98bc89f10d24"
	},
	{
		"id": "91beef59117c",
		"ts": "2026-09-13T08:00:02.731Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1491926.37,
		"hash": "91beef59117c3b4c3ce2fba898fd0219cdd614acd36d8eeb15b1009b4311c5aa"
	},
	{
		"id": "1fd3467eafed",
		"ts": "2026-09-13T08:00:03.055Z",
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
		"liquidityUsd": 14155461.14,
		"hash": "1fd3467eafed1e90b1a689b6739fad13cb04825be13bdc0b5650db85b01498cd"
	},
	{
		"id": "223be87da943",
		"ts": "2026-09-13T08:00:03.281Z",
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
		"liquidityUsd": 1642247.73,
		"hash": "223be87da94354b9db4aca2474e1bbfb2c68d22cacc5b7832f278f9328e2660c"
	},
	{
		"id": "3f28b8d49d43",
		"ts": "2026-09-13T08:00:03.506Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 520695.39,
		"hash": "3f28b8d49d430f9ff3d40666f9ec22f57db6725e44f54536dc4a054a36a0d6c0"
	},
	{
		"id": "1b85c41a8cb5",
		"ts": "2026-09-13T08:00:03.722Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 580653.53,
		"hash": "1b85c41a8cb562bc87b33b5abf782540bcca8c8292d6a915ddfdc2686957149e"
	},
	{
		"id": "930ab8a473e9",
		"ts": "2026-09-13T08:00:03.948Z",
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
		"liquidityUsd": 740794.2,
		"hash": "930ab8a473e92219f9b056b756c3a49053b8bccb13dbdd9648206a1f1e0ba6a2"
	},
	{
		"id": "a25c91c59074",
		"ts": "2026-09-13T08:00:04.172Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 192031.46,
		"hash": "a25c91c59074fc32675e436c4ebdd412dbafb8e10625b2a8054c9528b5243ebe"
	},
	{
		"id": "d046950b8708",
		"ts": "2026-09-13T08:00:04.389Z",
		"symbol": "LSK",
		"token": "0xac485391EB2d7D88253a7F1eF18C37f4242D1A24",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 325573.57,
		"hash": "d046950b870862ba0fde6f7a3f05ae244d151e3cb4fea7e562c93c925a227509"
	},
	{
		"id": "dd9c52f141e9",
		"ts": "2026-09-13T08:00:04.615Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 246113.19,
		"hash": "dd9c52f141e970774aa007a49e76dcd125129f84d647080aa7f6935fd3ad9019"
	},
	{
		"id": "6cf1a7f6d82c",
		"ts": "2026-09-13T08:00:04.840Z",
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
		"liquidityUsd": 520883.59,
		"hash": "6cf1a7f6d82c3c88a38196bb5fa9ee684d8b26902b8c5ea08ef1c8cc62a47a6f"
	},
	{
		"id": "5db271f94b45",
		"ts": "2026-09-13T02:56:03.803Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120346135.52,
		"hash": "5db271f94b454e2d61ff115a5a5b3c6f4c99231a707cde77305bbb803b10caf6"
	},
	{
		"id": "179145e60fe1",
		"ts": "2026-09-13T02:56:04.068Z",
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
		"liquidityUsd": 12335709.93,
		"hash": "179145e60fe111bf2496868468bf43dd6f21300168cd5891e45e09b3372a1379"
	},
	{
		"id": "16de04f2bc59",
		"ts": "2026-09-13T02:56:04.297Z",
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
		"liquidityUsd": 984482.18,
		"hash": "16de04f2bc5940dac4242c0a15cb59c05b7a531759e6f3df428736306a3961f3"
	},
	{
		"id": "cbd82800bf5f",
		"ts": "2026-09-13T02:56:04.549Z",
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
		"liquidityUsd": 34016425.54,
		"hash": "cbd82800bf5f59e6918bf7eca3209a7e60db1c30192ba183cbd07233487b14c5"
	},
	{
		"id": "e12f6dfd5beb",
		"ts": "2026-09-13T02:56:04.788Z",
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
		"liquidityUsd": 3950627.73,
		"hash": "e12f6dfd5beb2a3e998f59ad7053d515a4659f9b8dc9c11b2794aa37950b546d"
	},
	{
		"id": "62df2f993031",
		"ts": "2026-09-13T02:56:05.039Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1184779.34,
		"hash": "62df2f993031f0399409b8bba352f21c6902b072d4eebe6693ccfd718c535212"
	},
	{
		"id": "789455e15e54",
		"ts": "2026-09-13T02:56:05.284Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1706412.24,
		"hash": "789455e15e54751572e754b50c36ddd47d80d7cf0d9c89e69f85d5ad72f76d8a"
	},
	{
		"id": "6c239246eb62",
		"ts": "2026-09-13T02:56:05.536Z",
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
		"liquidityUsd": 2334887.01,
		"hash": "6c239246eb62215b731fcdc01342c6aa5fbdb55a95e36098c80d2fe190efb085"
	},
	{
		"id": "b0423f29036e",
		"ts": "2026-09-13T02:56:05.766Z",
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
		"liquidityUsd": 1624147.17,
		"hash": "b0423f29036e617267085dcca57f3a75ec45ff86de48f04b8fdb2eb7bb7fea33"
	},
	{
		"id": "ac969262c1f7",
		"ts": "2026-09-13T02:56:06.063Z",
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
		"liquidityUsd": 14437363.79,
		"hash": "ac969262c1f7b64e1fb55c8e994809b1fa23e25413a3cab50ece6638acda2338"
	},
	{
		"id": "d3cd4bccdbee",
		"ts": "2026-09-13T02:56:06.297Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 554145.33,
		"hash": "d3cd4bccdbeec1643f060cadf3885918724763bba3fc4c90cc2e9627e9ab9704"
	},
	{
		"id": "d58edf618364",
		"ts": "2026-09-13T02:56:06.532Z",
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
		"liquidityUsd": 1616149.67,
		"hash": "d58edf61836428c8035feab870a688bcee44d436ded065286e2975c03a4f6326"
	},
	{
		"id": "e6a7dd839606",
		"ts": "2026-09-13T02:56:06.752Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1521654.35,
		"hash": "e6a7dd839606ddeb56d7f1ae40ac9aad22e733a470eb4130a3f1b35ef519b8cb"
	},
	{
		"id": "75a47c16df48",
		"ts": "2026-09-13T02:56:07.002Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 565712.11,
		"hash": "75a47c16df483cb6f94420aa467830d58362f79a62ae5dd6b5585e219feafd40"
	},
	{
		"id": "9dfd63435177",
		"ts": "2026-09-13T02:56:07.218Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 263680.5,
		"hash": "9dfd63435177da148c6c0e4494d9581eed30132fcf687d4af0b6b5779a31b047"
	},
	{
		"id": "fd5f309ad714",
		"ts": "2026-09-13T02:56:07.440Z",
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
		"liquidityUsd": 748287.59,
		"hash": "fd5f309ad7148d07131f5b9e23a68c74b366a9a4ca1fbda045fd0c7141c1cf3f"
	},
	{
		"id": "509e40b17957",
		"ts": "2026-09-13T02:56:07.667Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 66465.27,
		"hash": "509e40b17957352c80159a5d6ff76a154ed86360597bc743dd223f6c81043fdf"
	},
	{
		"id": "fe020bb600be",
		"ts": "2026-09-13T02:56:07.940Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 197253.91,
		"hash": "fe020bb600beee002602eb2d93c2ad36fe194826c58f37d0c49cbf613ee14456"
	},
	{
		"id": "821eae37ef30",
		"ts": "2026-09-13T02:56:08.169Z",
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
		"liquidityUsd": 532205.33,
		"hash": "821eae37ef30529e3666ca4fd58c3f8cff0741306e824a90a4f96736fe83af9b"
	},
	{
		"id": "9e628ff47684",
		"ts": "2026-09-12T23:41:32.958Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120345386.55,
		"hash": "9e628ff476846cf9853493f93778ca55ffac1f4959dae8acc60e5c484ae9b081"
	},
	{
		"id": "8237cd0fca9a",
		"ts": "2026-09-12T23:41:33.418Z",
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
		"liquidityUsd": 16246462.65,
		"hash": "8237cd0fca9ac93cd232e97590ed5f3ac998cc460b5cf24e840734df601a6e4a"
	},
	{
		"id": "5e220e68746f",
		"ts": "2026-09-12T23:41:33.665Z",
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
		"liquidityUsd": 987150.78,
		"hash": "5e220e68746f241fcb36b3becb2d48aa84ee2c89d0c4500846d475618ac27d22"
	},
	{
		"id": "77727045bc7f",
		"ts": "2026-09-12T23:41:33.907Z",
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
		"liquidityUsd": 33953843.35,
		"hash": "77727045bc7f4371ad7333e20ef454fc7822d788d30c5a08664a9c0dca150b50"
	},
	{
		"id": "818b07c52203",
		"ts": "2026-09-12T23:41:34.147Z",
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
		"liquidityUsd": 3963765.52,
		"hash": "818b07c522031bc961449b6811a707fb9d5472f19e26536fb5e12c10fd4d59ac"
	},
	{
		"id": "d7d799657a86",
		"ts": "2026-09-12T23:41:34.391Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1184375.28,
		"hash": "d7d799657a866647de605f83979c685bc370f53f388255581d90774168d08520"
	},
	{
		"id": "b3f800c60c16",
		"ts": "2026-09-12T23:41:34.632Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1604853.15,
		"hash": "b3f800c60c1661d919ab6cfff81c30603ef5e06371bc2e5b3b0852ca69b5ddf5"
	},
	{
		"id": "5f96d7556641",
		"ts": "2026-09-12T23:41:34.872Z",
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
		"liquidityUsd": 1150528.87,
		"hash": "5f96d75566411cb46e2cbd0913b33614d6726c39aad5b1ed76a07e3511d11b61"
	},
	{
		"id": "5919865fac72",
		"ts": "2026-09-12T23:41:35.128Z",
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
		"liquidityUsd": 1604853.15,
		"hash": "5919865fac72a17dd11be025f8f5ffd5986d309891f59790f1f93c81b05dc9eb"
	},
	{
		"id": "311d7be92a71",
		"ts": "2026-09-12T23:41:35.642Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 557849.16,
		"hash": "311d7be92a71519ddc2a9734f353a9f68fb191f13b709e3b3a2cfb643248388f"
	},
	{
		"id": "aeccfdddaeb3",
		"ts": "2026-09-12T23:41:35.868Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14503982.48,
		"hash": "aeccfdddaeb319ddffb1937878813977832b0d86b48b6a35a1fee97a4670aee1"
	}
]
