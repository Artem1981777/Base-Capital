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
	"updatedAt": "2026-08-24T14:37:23.252Z",
	"tokensScored": 14418,
	"verdictsIssued": 14418,
	"safe": 12359,
	"risky": 1039,
	"likelyRug": 1020,
	"ticks": 835
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "d889b6b25eca",
		"ts": "2026-08-24T14:37:18.580Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113612884.67,
		"hash": "d889b6b25eca60e5ebeabc7dd86c252712c21832978c01d28ce84109a250992a"
	},
	{
		"id": "76626f02e01b",
		"ts": "2026-08-24T14:37:18.827Z",
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
		"liquidityUsd": 17423524.25,
		"hash": "76626f02e01b7eb73ad27fcd9111c7edb6b3403a1327109b72f24e671db333b7"
	},
	{
		"id": "9a47e0263a4a",
		"ts": "2026-08-24T14:37:19.069Z",
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
		"liquidityUsd": 930786.77,
		"hash": "9a47e0263a4a46f33197cbdea27aa78dc35c826503e9e9a4edf7cc88e8f3080e"
	},
	{
		"id": "88a590ccc46e",
		"ts": "2026-08-24T14:37:19.320Z",
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
		"liquidityUsd": 30352616.66,
		"hash": "88a590ccc46e9980fd9206318ae082d517e73046f97847a3528200b9a0e75fa5"
	},
	{
		"id": "3288f1b3f461",
		"ts": "2026-08-24T14:37:19.600Z",
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
		"liquidityUsd": 3642936.52,
		"hash": "3288f1b3f4618b92304403ed1bf65e48a1db85d08a6bc528c85129075ac6eded"
	},
	{
		"id": "6cc31d11a711",
		"ts": "2026-08-24T14:37:19.872Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1190677.93,
		"hash": "6cc31d11a711712cb3d452ff1d32d987eca85ddef9a38386394ae7ab9a2f3e65"
	},
	{
		"id": "edf4f7c37be4",
		"ts": "2026-08-24T14:37:20.105Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152798.3,
		"hash": "edf4f7c37be46c0caa5fb3b86df5568b1818c6117ba5f1ab29369fb73572da4a"
	},
	{
		"id": "df98dbb9d914",
		"ts": "2026-08-24T14:37:20.373Z",
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
		"liquidityUsd": 1939541.91,
		"hash": "df98dbb9d914de7e07d5ddb1c153603d9abf1f75d55a7f8a03cc46cd31545134"
	},
	{
		"id": "9a4abaf3d184",
		"ts": "2026-08-24T14:37:20.673Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 891066.22,
		"hash": "9a4abaf3d18469a68515462c09359a26e729fc3fec2b01936ef6574b53b311c0"
	},
	{
		"id": "114ff9ece417",
		"ts": "2026-08-24T14:37:20.931Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1436927.75,
		"hash": "114ff9ece4176d8738802e0983927cf5a0b8d180064b9bdc2ca2c18b0c44c930"
	},
	{
		"id": "12e9acdbd497",
		"ts": "2026-08-24T14:37:21.151Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 609894.9,
		"hash": "12e9acdbd497015391b9162061cb6a79043706339c0e6abac0adcfed8e6ee34e"
	},
	{
		"id": "288d194efd85",
		"ts": "2026-08-24T14:37:21.390Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2854122.76,
		"hash": "288d194efd85aec93e165605306ce551e332f44e1e02161ce84f57b8b611eddc"
	},
	{
		"id": "1aac977b346f",
		"ts": "2026-08-24T14:37:21.637Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 625604.59,
		"hash": "1aac977b346f37669c86e9065c01f7eabfd86ea2d1072943a8482b516e8ec2fd"
	},
	{
		"id": "dc67ecbcd539",
		"ts": "2026-08-24T14:37:21.877Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 124260.31,
		"hash": "dc67ecbcd539f8beeb53eedce71081ea1eaa5ed61eca57e5922d947ed537c7fd"
	},
	{
		"id": "c181803573d0",
		"ts": "2026-08-24T14:37:22.102Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 408678.65,
		"hash": "c181803573d0e6c1a8e20d360c8e6bb128dd6b89b01d78d4267d196fd10a9c23"
	},
	{
		"id": "62eb00557e36",
		"ts": "2026-08-24T14:37:22.349Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 133877.54,
		"hash": "62eb00557e36e324238f85a5f63c6bff676301c975da68dbd3b2e226072b5d1d"
	},
	{
		"id": "ab46136ee42f",
		"ts": "2026-08-24T14:37:22.582Z",
		"symbol": "GAME",
		"token": "0x1C4CcA7C5DB003824208aDDA61Bd749e55F463a3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3141080.97,
		"hash": "ab46136ee42fc58a29d8f27ca1d57b218b68c4f9428d89ff1ba18f125d170919"
	},
	{
		"id": "3ee547b60bea",
		"ts": "2026-08-24T14:37:22.801Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 272772.11,
		"hash": "3ee547b60bea926a999128f495b810f3cfbcb6caa201f6562665df08912edeaf"
	},
	{
		"id": "0f9374f7a4d7",
		"ts": "2026-08-24T14:37:23.017Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 893518.86,
		"hash": "0f9374f7a4d764bb0d9947b3f9886bee8cb04faf946f7022b41a21a156875dd9"
	},
	{
		"id": "d3000d97ceea",
		"ts": "2026-08-24T14:37:23.252Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4401050.46,
		"hash": "d3000d97ceead72350150ba1f5fadeac58f2e894236127b682546bbe0a3a1bcb"
	},
	{
		"id": "7b74d2c50052",
		"ts": "2026-08-24T13:47:46.321Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 56,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "7b74d2c50052a49051b39a963a1a7d6f2828c635a98ffbfafb976a3c69bebb74"
	},
	{
		"id": "e44f54ea327e",
		"ts": "2026-08-24T13:48:05.095Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 44,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "e44f54ea327e09c01e3957234e280a694e389853e119a934413f459e5543242e"
	},
	{
		"id": "93c307efa958",
		"ts": "2026-08-24T13:48:23.763Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 48,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.04,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "93c307efa9589421a9e4cba94dbbfdb0d992fa0383cea90f1d952afd213c1a8e"
	},
	{
		"id": "4a58d14c1de5",
		"ts": "2026-08-24T13:48:42.498Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 48,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.04,
		"flags": [
			"no_dex_pair",
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "4a58d14c1de51af36b7c1fc9749015830c06f63e34c2c52d9d93f860a070368a"
	},
	{
		"id": "29fe14c7a6b1",
		"ts": "2026-08-24T13:48:42.719Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "29fe14c7a6b148860039d53c6222bcbe398f3626269c3642d110658fc5316682"
	},
	{
		"id": "4fb17263a576",
		"ts": "2026-08-24T13:48:42.932Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"no_dex_pair",
			"modifiable_tax"
		],
		"liquidityUsd": 0,
		"hash": "4fb17263a57654c1f44e60fedf465707d2b7a1fb96795ac4aced4b17d1799040"
	},
	{
		"id": "06b29f4da608",
		"ts": "2026-08-24T13:48:43.146Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 56,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced"
		],
		"liquidityUsd": 0,
		"hash": "06b29f4da608528f24a55806f4593eecebcd0210d6818a71209fff4e09473e2b"
	},
	{
		"id": "b99af1a0fb51",
		"ts": "2026-08-24T13:48:43.348Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 44,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "b99af1a0fb519db904aeb0e55452c4d3a5a683f0cbfd07a7d8293ede97dee4e5"
	},
	{
		"id": "a7384e9e5d0a",
		"ts": "2026-08-24T13:48:43.681Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"no_dex_pair",
			"sim_honeypot"
		],
		"liquidityUsd": 0,
		"hash": "a7384e9e5d0a720b45be7c3cf9ff49790258268faeb679babfc0d84f606b3edd"
	},
	{
		"id": "e27bf526ba34",
		"ts": "2026-08-24T13:48:43.883Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair"
		],
		"liquidityUsd": 0,
		"hash": "e27bf526ba3445d5d828522d92795451ab2174739b48610d93a88d2499774e39"
	},
	{
		"id": "ec84f007642f",
		"ts": "2026-08-24T13:48:44.093Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 56,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced"
		],
		"liquidityUsd": 0,
		"hash": "ec84f007642fafd83aa87508d574f9de65e093e8f0554b88cd77216cbdfa8562"
	},
	{
		"id": "c1437d6ea6fe",
		"ts": "2026-08-24T13:48:44.295Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair"
		],
		"liquidityUsd": 0,
		"hash": "c1437d6ea6fe830811aaadf830415d11e6e64d61664a844143f4fb04b4e6b05a"
	},
	{
		"id": "3e660edfd840",
		"ts": "2026-08-24T13:48:44.500Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "3e660edfd84050f461fbed5469b3a2a037313d03cc7260429267e1a590ca2b14"
	},
	{
		"id": "46d096386329",
		"ts": "2026-08-24T13:48:44.704Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "46d09638632959b2084cbba34e184969ae67b866e288c1b3fa05c3d1a2b93e40"
	},
	{
		"id": "9d86c9e7fa81",
		"ts": "2026-08-24T13:48:44.921Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "9d86c9e7fa817c7af787d8f7365e071d2d69642d7ba479e1231724406001b6ba"
	},
	{
		"id": "8b9b6453458b",
		"ts": "2026-08-24T13:48:45.123Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "8b9b6453458b2736de0042d1e37f56686c531013e1def8e1ce7c5f5ff03c3344"
	},
	{
		"id": "d147e6568cd3",
		"ts": "2026-08-24T13:48:45.320Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "d147e6568cd316c9473afc60c1a3087f8f10f885beef6aa69f8ca04c8223a649"
	},
	{
		"id": "75ddc57dfb91",
		"ts": "2026-08-24T13:48:45.537Z",
		"symbol": "GAME",
		"token": "0x1C4CcA7C5DB003824208aDDA61Bd749e55F463a3",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "75ddc57dfb9104109d47c44452d30285cb78625f4937c5cba0dcee1e76457541"
	},
	{
		"id": "f1396c2c3c18",
		"ts": "2026-08-24T13:48:45.748Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 0,
		"hash": "f1396c2c3c180377185c2666db55154abf8a697f8ee377d61192a1dc0a66be6e"
	},
	{
		"id": "00e98f0b9ce3",
		"ts": "2026-08-24T13:48:45.961Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 0,
		"hash": "00e98f0b9ce363cea2c77ead07757905972ca7b73d72af445444a7fa02acf881"
	},
	{
		"id": "acb668029def",
		"ts": "2026-08-24T12:41:10.144Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 56,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "acb668029def37db2b96f8d09770d72cac6daa065a5fbe7f1142c7c31b96a411"
	},
	{
		"id": "a2a7bddd1268",
		"ts": "2026-08-24T12:41:28.828Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 44,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "a2a7bddd1268f15f98b4c306a124582dba58b2de252c753b085646054a241312"
	},
	{
		"id": "5802b8f34664",
		"ts": "2026-08-24T12:41:47.537Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 48,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.04,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "5802b8f346647ae8e6b1aeeea546b453fcce3acba1d12f1bea696e7452f91d83"
	},
	{
		"id": "d072bcc91e86",
		"ts": "2026-08-24T12:42:06.249Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 48,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.04,
		"flags": [
			"no_dex_pair",
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "d072bcc91e86cc1893c646ea3f29f28f7cdf2a5819ceec516fa886e046384893"
	},
	{
		"id": "17e906e7b3de",
		"ts": "2026-08-24T12:42:06.563Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "17e906e7b3de4d01b020ebc29436591c900ce2979be9cb043a597e28e70ff7f7"
	},
	{
		"id": "6077d6e6a1e8",
		"ts": "2026-08-24T12:42:06.797Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"no_dex_pair",
			"modifiable_tax"
		],
		"liquidityUsd": 0,
		"hash": "6077d6e6a1e8230c72e48358d65d9e45bc37e402234aeb33f5c31f4fccb1caee"
	},
	{
		"id": "3561cde65fe6",
		"ts": "2026-08-24T12:42:07.028Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 56,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced"
		],
		"liquidityUsd": 0,
		"hash": "3561cde65fe617ad4943f479449fd5960b77b6b9150be2a5800d806509f68e33"
	},
	{
		"id": "3c79dd3fb1a0",
		"ts": "2026-08-24T12:42:07.262Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 44,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "3c79dd3fb1a07995b49ffe2b9e04c800f882f08d20b4ad27bb0a882c238fe2c1"
	},
	{
		"id": "c3ab5b469d9d",
		"ts": "2026-08-24T12:42:07.507Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"no_dex_pair",
			"sim_honeypot"
		],
		"liquidityUsd": 0,
		"hash": "c3ab5b469d9d50fa2dfaec142dadd152285683049155b4e3336bc0f560bacc3d"
	},
	{
		"id": "8255878561b0",
		"ts": "2026-08-24T12:42:07.743Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 56,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced"
		],
		"liquidityUsd": 0,
		"hash": "8255878561b03261905451f5c16dca824f75a0c5f5598d35d6617e5305a0fac1"
	},
	{
		"id": "f9586d9d4c7e",
		"ts": "2026-08-24T12:42:07.988Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair"
		],
		"liquidityUsd": 0,
		"hash": "f9586d9d4c7eb251db0a695b0269943464db383b9d9cb46ec41f15da05f58681"
	},
	{
		"id": "0e505295bdc6",
		"ts": "2026-08-24T12:42:08.223Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair"
		],
		"liquidityUsd": 0,
		"hash": "0e505295bdc6c5bd6490a4f0f42e554df0b8604c8705383190c5f89af5694981"
	},
	{
		"id": "aa76b4600b8a",
		"ts": "2026-08-24T12:42:08.457Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair"
		],
		"liquidityUsd": 0,
		"hash": "aa76b4600b8a66c6b19c5f04f45f6949db39b4a652301fc126af34ade892f599"
	},
	{
		"id": "0bad5e7c438e",
		"ts": "2026-08-24T12:42:08.696Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair"
		],
		"liquidityUsd": 0,
		"hash": "0bad5e7c438e383b650193b377b64a9b90e13806ab2135369c6ce6e2e1506459"
	},
	{
		"id": "be2b2440202a",
		"ts": "2026-08-24T12:42:08.916Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "be2b2440202a479e9fb220a450fb8eeea2337ea38f2e3dedd0a6468ef0124278"
	},
	{
		"id": "d547abfa7032",
		"ts": "2026-08-24T12:42:09.136Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "d547abfa7032b5f94faaf4c371aa8543a4d3532e285b733176b36b5809b392de"
	},
	{
		"id": "77031777254b",
		"ts": "2026-08-24T12:42:09.355Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "77031777254b44a4da7f1567fd161ae999594b34035e72e31d2a7b3ce7db21b2"
	},
	{
		"id": "00c6192b4ae6",
		"ts": "2026-08-24T12:42:09.576Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 0,
		"hash": "00c6192b4ae63f98f9ef809da417dd9fb2543054d5ae553883d8c240fbb00e92"
	},
	{
		"id": "e7b6e1fc045d",
		"ts": "2026-08-24T12:42:09.793Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 0,
		"hash": "e7b6e1fc045d10d7a1be0240bddb33e7ff709b3bf24aeb809144357501637032"
	},
	{
		"id": "3fb2270923b6",
		"ts": "2026-08-24T12:42:10.012Z",
		"symbol": "BASEJUICE",
		"token": "0xb200000000000000000000046390aed221043f01",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "3fb2270923b6104e7656e4d49479ab0d72f85d3445af67a5822f9469ef0177bf"
	},
	{
		"id": "9749a678684a",
		"ts": "2026-08-24T11:23:34.272Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111859971.26,
		"hash": "9749a678684aa5966d8bcc5929245e444d4b10c6985924afdb87df1aea813dea"
	},
	{
		"id": "fc53026cbfbe",
		"ts": "2026-08-24T11:23:34.598Z",
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
		"liquidityUsd": 19844623.73,
		"hash": "fc53026cbfbe0d2d206bb7b6591472c391fb45ee9646de86621f66535ca46b1e"
	},
	{
		"id": "223f2af4e436",
		"ts": "2026-08-24T11:23:34.807Z",
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
		"liquidityUsd": 913950.17,
		"hash": "223f2af4e436d1860eaefcb7babfe0274ab2155360e905a66461715532d99113"
	},
	{
		"id": "77d95d5a3b74",
		"ts": "2026-08-24T11:23:35.003Z",
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
		"liquidityUsd": 29580302.8,
		"hash": "77d95d5a3b7420ff7e46eae75f372ba1d226ba46c2dcd9d737f86d3885486221"
	},
	{
		"id": "ee5757b43a3f",
		"ts": "2026-08-24T11:23:35.193Z",
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
		"liquidityUsd": 3547270.24,
		"hash": "ee5757b43a3f62d1de13f367ea48957333835ad279fe0099aa97a9d143013940"
	},
	{
		"id": "0afcd2913b54",
		"ts": "2026-08-24T11:23:35.390Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1183897.09,
		"hash": "0afcd2913b54cc6c81c7bf736b07a4d9de9c0a8129df3580beba17675a7a7df4"
	},
	{
		"id": "267a8491c8f3",
		"ts": "2026-08-24T11:23:35.583Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152797.27,
		"hash": "267a8491c8f3d183d549635070ddcb88a6f37a629ef58901ed02a9768abf78ce"
	},
	{
		"id": "2409bfa4da15",
		"ts": "2026-08-24T11:23:35.782Z",
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
		"liquidityUsd": 1895130.27,
		"hash": "2409bfa4da1506f6c365ea534b9a11d8ea9c941e49b83c10675043150783afd0"
	},
	{
		"id": "8d658392605e",
		"ts": "2026-08-24T11:23:35.999Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 620612.79,
		"hash": "8d658392605e035d6f85755c394e37f4421aa40328d7aef6386af88fc58747f5"
	},
	{
		"id": "7e16ce44e851",
		"ts": "2026-08-24T11:23:36.340Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1388353.61,
		"hash": "7e16ce44e85114ae9ff63b25d904c05d7e63a1bfd86edb5178387f1b8417aa76"
	},
	{
		"id": "ee21bc45ffbf",
		"ts": "2026-08-24T11:23:36.531Z",
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
		"liquidityUsd": 846845.05,
		"hash": "ee21bc45ffbfd241e109fe1596028f225263923c862de759aab818bd0ad88996"
	},
	{
		"id": "2c8336fd6bc7",
		"ts": "2026-08-24T11:23:36.810Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 636150.71,
		"hash": "2c8336fd6bc7062d23a825d07d5a9441f6a4075b3e9b6edc639681dd098697ac"
	},
	{
		"id": "6242f4430d87",
		"ts": "2026-08-24T11:23:37.028Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 109669.5,
		"hash": "6242f4430d8784456d105544495ccd060483ed84f5758375d3233ea954297963"
	},
	{
		"id": "def3cbc98eee",
		"ts": "2026-08-24T11:23:37.239Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 110524.5,
		"hash": "def3cbc98eeeab226888190ec0401a430975629bf9dc023606516dc39a75fb32"
	},
	{
		"id": "498b249d1ee6",
		"ts": "2026-08-24T11:23:37.475Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 263300.15,
		"hash": "498b249d1ee66617beb1e1da005b8200ac2af2b61bdb32be0c0afb1a513547b3"
	},
	{
		"id": "f30bca376b3a",
		"ts": "2026-08-24T11:23:37.951Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 420895.67,
		"hash": "f30bca376b3afddc98c2a38100e538c781adf0344a6122133f1a21038c371966"
	},
	{
		"id": "ad1f403c8e70",
		"ts": "2026-08-24T11:23:38.943Z",
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
		"liquidityUsd": 669438.91,
		"hash": "ad1f403c8e70cb574abc183828918675600b35026b1fcd4a6747572a0b4a6646"
	},
	{
		"id": "917114f81c5e",
		"ts": "2026-08-24T11:23:39.214Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 852416.31,
		"hash": "917114f81c5e8e3fa79cd6bae9983cdef4ae2f30cb444af5486475c357f3f784"
	},
	{
		"id": "dd5584bcac72",
		"ts": "2026-08-24T11:23:39.637Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11218084.79,
		"hash": "dd5584bcac72d0fa5ccc4d7df2497cc56dc5413b545343a0d4ddcc4e1f2be7bb"
	},
	{
		"id": "0c80edda0344",
		"ts": "2026-08-24T11:23:40.210Z",
		"symbol": "BASEJUICE",
		"token": "0xb200000000000000000000046390aed221043f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 207177.57,
		"hash": "0c80edda0344a3d091f05b56563c7be28942281e70a1cfa8afa555074826849b"
	},
	{
		"id": "901528669c4d",
		"ts": "2026-08-24T10:33:31.170Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112013269.97,
		"hash": "901528669c4dc59d089031d9efd1deb8cfa47cc1544125e10ba46baf9dc132fe"
	},
	{
		"id": "e2f6649939bb",
		"ts": "2026-08-24T10:33:31.380Z",
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
		"liquidityUsd": 13472214.68,
		"hash": "e2f6649939bb3be3a420bc764d012f31118f88488c278b31dc15529ff2f0ab12"
	},
	{
		"id": "a3f88e6d0a72",
		"ts": "2026-08-24T10:33:31.578Z",
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
		"liquidityUsd": 920502.31,
		"hash": "a3f88e6d0a722467e055a661fb61c14b631146f02c02f6eb03a8e04649ce26ac"
	},
	{
		"id": "fdbf5b56a4f0",
		"ts": "2026-08-24T10:33:31.764Z",
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
		"liquidityUsd": 29580462.06,
		"hash": "fdbf5b56a4f068072012c8674e03ab143cae6e244852252d26eaf386cc5f4262"
	},
	{
		"id": "74e185edf305",
		"ts": "2026-08-24T10:33:31.964Z",
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
		"liquidityUsd": 3590375.45,
		"hash": "74e185edf305d63c836fb282d1f557b626d93fdc4cfd1aab80783ff0e08b438e"
	},
	{
		"id": "42f23351f657",
		"ts": "2026-08-24T10:33:32.144Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1171293.33,
		"hash": "42f23351f657e1fc39b03df15d22e603ef3f4532acc2e6be72e04b126306d30e"
	},
	{
		"id": "e7a772d994ae",
		"ts": "2026-08-24T10:33:32.349Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152797.38,
		"hash": "e7a772d994aeb65a51658c5e089d9fdfc55a624707b675ea755267c18ced9be4"
	},
	{
		"id": "002c2b6a722d",
		"ts": "2026-08-24T10:33:32.542Z",
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
		"liquidityUsd": 1901409.29,
		"hash": "002c2b6a722de234fd5eaf53484d6f7c733ec0a0fe7e4c28140216596c080037"
	},
	{
		"id": "384fd1a198fe",
		"ts": "2026-08-24T10:33:32.737Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 639937.97,
		"hash": "384fd1a198fe013b4f838af95f4b5b51f77e49921ff18d0ef9ab9ebf5e249916"
	},
	{
		"id": "451010b953fa",
		"ts": "2026-08-24T10:33:32.924Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 876769.75,
		"hash": "451010b953fa281c7ad54dc8bdac253f57afaab8fa8ecc3bba5f07e3a973e1bd"
	},
	{
		"id": "f773b4295f64",
		"ts": "2026-08-24T10:33:33.113Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1422943.01,
		"hash": "f773b4295f64e169e42991baf2366cdb3974958fa80602b8eeaca37866413ff5"
	},
	{
		"id": "e4314ce047e4",
		"ts": "2026-08-24T10:33:33.293Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 648588.83,
		"hash": "e4314ce047e45088cb5a6cf810248e29d4b2b19b97f93f13363ab6d58a95f097"
	},
	{
		"id": "6ddb02ecbfaf",
		"ts": "2026-08-24T10:33:34.035Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 100886.81,
		"hash": "6ddb02ecbfaf216cdb8b3f772d56c1806edd3300aad80bfe9370a9d5f4a97706"
	},
	{
		"id": "889fb771eac7",
		"ts": "2026-08-24T10:33:34.781Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 115888.78,
		"hash": "889fb771eac7dd75cf8c20218e10ed931bd64be6af014b695f9c7cc3a1ba243b"
	},
	{
		"id": "4bd6615f7f5d",
		"ts": "2026-08-24T10:33:34.968Z",
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
		"liquidityUsd": 672319,
		"hash": "4bd6615f7f5d0f0876adea9fd0ad0a4790cde654ffa9478e0976835d7d0cd3e4"
	},
	{
		"id": "e327cafb7bcc",
		"ts": "2026-08-24T10:33:35.151Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 266055.62,
		"hash": "e327cafb7bcc138c9d47d7dc29081851869794d734f64de92ed317db0e989ecf"
	},
	{
		"id": "3d8dd8aaa133",
		"ts": "2026-08-24T10:33:35.336Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 420922.7,
		"hash": "3d8dd8aaa13360f9fb48db06b01e438513b21088b82a79e0c6f2c3ae2fc3d634"
	},
	{
		"id": "f517318d5dc8",
		"ts": "2026-08-24T10:33:35.539Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4166609.92,
		"hash": "f517318d5dc8346b35279986af4a6fab8520fcfa4a2636d6771b9377fdf384c3"
	},
	{
		"id": "62665e199a61",
		"ts": "2026-08-24T10:33:35.777Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 867047.84,
		"hash": "62665e199a617467773cb21365ef9b45b9771ab5569c0d838502711152014b03"
	},
	{
		"id": "7d5c3ed320d4",
		"ts": "2026-08-24T10:33:35.967Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11281533.18,
		"hash": "7d5c3ed320d4801092aafcf3acd944be538c44b51a0cdf152b9b4679c3f04800"
	},
	{
		"id": "3eddd1469323",
		"ts": "2026-08-24T09:42:10.058Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111648713.59,
		"hash": "3eddd1469323bb03cd66fdeef431786952ea2dbc476f125566c05ee7b3b23a4a"
	},
	{
		"id": "157bb8dc7763",
		"ts": "2026-08-24T09:42:10.299Z",
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
		"liquidityUsd": 18849517.42,
		"hash": "157bb8dc7763c22ed006a7370168934d694ecb086ae1b15db094b2a187e9d976"
	},
	{
		"id": "a9468729601f",
		"ts": "2026-08-24T09:42:10.547Z",
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
		"liquidityUsd": 918999.13,
		"hash": "a9468729601f019658f5cf837cdf6eec1040f33617c4d2ae0961bad3df1243f6"
	},
	{
		"id": "bc69c55d9d17",
		"ts": "2026-08-24T09:42:10.795Z",
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
		"liquidityUsd": 29334222.03,
		"hash": "bc69c55d9d1712aa10b6814c916ce06c1043d9d9fc49ab3e8abd17a22586a4ba"
	},
	{
		"id": "a01ed6345d27",
		"ts": "2026-08-24T09:42:11.025Z",
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
		"liquidityUsd": 3488976.79,
		"hash": "a01ed6345d275b97bc9f65f19a1120280f75625bca6561229b3f68d61cda2a09"
	},
	{
		"id": "9e1ce3f9cae5",
		"ts": "2026-08-24T09:42:11.263Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1171293.33,
		"hash": "9e1ce3f9cae50316125d6120833dd0a31617be9a3be042e9f8029dccd5e8a8a0"
	},
	{
		"id": "46a629483f91",
		"ts": "2026-08-24T09:42:11.505Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152797.38,
		"hash": "46a629483f91e4cd8beec957a2325916a7d76e9feda0f7df4e4a0562747e0a13"
	},
	{
		"id": "f3b5db35ed9c",
		"ts": "2026-08-24T09:42:12.265Z",
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
		"liquidityUsd": 1891647.31,
		"hash": "f3b5db35ed9c6454b5b5daec0f6370d2d8c57615cd5bd551dd359a896d4316dc"
	},
	{
		"id": "cdb89f2988ca",
		"ts": "2026-08-24T09:42:12.501Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 595031.38,
		"hash": "cdb89f2988cabea887253fa6d5f2ee852204492383c91090743f30928a52bc33"
	},
	{
		"id": "ff14ea891aae",
		"ts": "2026-08-24T09:42:12.765Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 883713.14,
		"hash": "ff14ea891aaee18995ffe5ec097fd92a5fde2eab5113ac6ce5dce8235b4fe73a"
	},
	{
		"id": "b304d5845722",
		"ts": "2026-08-24T09:42:13.002Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1407708.71,
		"hash": "b304d584572292df5e7996d0b1ec501b2ec792f144f224950386437f19c53c9f"
	},
	{
		"id": "ae351333c894",
		"ts": "2026-08-24T09:42:13.833Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 640585.45,
		"hash": "ae351333c894260bded9fbffc8ecb1711fe3a9692deea2018e8265d9930f2005"
	},
	{
		"id": "66899be05d4c",
		"ts": "2026-08-24T09:42:14.307Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 94881.83,
		"hash": "66899be05d4c202ec9d88198c6e7a3b5110b637ea1f304c3fd03e6637bfa97d7"
	},
	{
		"id": "1d10c4646c81",
		"ts": "2026-08-24T09:42:14.536Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 118989.33,
		"hash": "1d10c4646c8134b570795f63d722431732b2e3bf2fd4396cc18d99bf398bfcf8"
	},
	{
		"id": "38a7145a3a5a",
		"ts": "2026-08-24T09:42:14.785Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4137009.84,
		"hash": "38a7145a3a5a7c871384127f50e4458333bc17b884c8dc0a5f002323f2c298d2"
	},
	{
		"id": "13ca30bf9977",
		"ts": "2026-08-24T09:42:14.995Z",
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
		"liquidityUsd": 669891.47,
		"hash": "13ca30bf9977f1d1c4f61160aed764a256b0b8566a7e6eb20e6cf5b7d575aa5f"
	},
	{
		"id": "efcc6bda0792",
		"ts": "2026-08-24T09:42:15.986Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 254630.77,
		"hash": "efcc6bda07927f649e29951e728bb4906a93bb35ae95dad137004a2421b7678e"
	},
	{
		"id": "3b1523637bca",
		"ts": "2026-08-24T09:42:16.495Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 417792.77,
		"hash": "3b1523637bca0e0299f9bf93abc4889c0aa5bbc5b9d204e0ed5637d21443df36"
	},
	{
		"id": "da3aa22c2418",
		"ts": "2026-08-24T09:42:16.703Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11175678.31,
		"hash": "da3aa22c2418c4f98c7a05dcff69524b1225f503955f5cec3816bdbc5b657cc7"
	},
	{
		"id": "6944a4d37453",
		"ts": "2026-08-24T09:42:16.924Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 862099.58,
		"hash": "6944a4d374530e7822e99e3e49ad76314088c8115ab7e3c713c2a3d45f6a1aad"
	},
	{
		"id": "9c45400c81bc",
		"ts": "2026-08-24T08:42:47.258Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111401783.18,
		"hash": "9c45400c81bcaba82b923b1338ae14a7fa4ff81795e9f998b1e81de095062d63"
	},
	{
		"id": "63ceaf1a0d17",
		"ts": "2026-08-24T08:42:47.698Z",
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
		"liquidityUsd": 19939192.16,
		"hash": "63ceaf1a0d17f97f46b3f95fb956e34ecfc2dc71bb21eae8222bea1d9131c885"
	},
	{
		"id": "6dd7338b5c6d",
		"ts": "2026-08-24T08:42:47.938Z",
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
		"liquidityUsd": 915076.33,
		"hash": "6dd7338b5c6daa0140c5e6a3422eeacb010f64489cb35c69fe492b90139ccdb8"
	},
	{
		"id": "8282a3430982",
		"ts": "2026-08-24T08:42:48.208Z",
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
		"liquidityUsd": 29158586.11,
		"hash": "8282a3430982cce0a03aed7b40a93fae594bbae0cdf8765201b89f1a650bd9e0"
	},
	{
		"id": "29a5f9145e8e",
		"ts": "2026-08-24T08:42:48.443Z",
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
		"liquidityUsd": 3436551.7,
		"hash": "29a5f9145e8e39c973a5626d215b95fa835355ccc72d251ee99ba29fac5f0831"
	},
	{
		"id": "ccf53d2dc883",
		"ts": "2026-08-24T08:42:48.687Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1171293.33,
		"hash": "ccf53d2dc883bd42a8bf28aa80c649127bceff72a8e4e32e7bc9ae5742688c0b"
	},
	{
		"id": "be098ddb0ef4",
		"ts": "2026-08-24T08:42:48.919Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152797.13,
		"hash": "be098ddb0ef43153470040a170775c150e326b6b0b813682221d406a96b56394"
	},
	{
		"id": "06fec6b6a645",
		"ts": "2026-08-24T08:42:49.159Z",
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
		"liquidityUsd": 1878620.89,
		"hash": "06fec6b6a6455527512694081916e4cd8e2961a11192bfe478466cff2c4db31d"
	},
	{
		"id": "3159d3c94b9f",
		"ts": "2026-08-24T08:42:49.394Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 614063.06,
		"hash": "3159d3c94b9f4647ddabbc8bb4560f0850724c17edd67c0e52dd2fc46af09bb8"
	},
	{
		"id": "c552ffb7b4d4",
		"ts": "2026-08-24T08:42:49.627Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1455828.27,
		"hash": "c552ffb7b4d45dbee7c2c5fe93bae3b38746a119bf6f9b30d2d103c90e34e19a"
	},
	{
		"id": "280f1d740a5b",
		"ts": "2026-08-24T08:42:49.850Z",
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
		"liquidityUsd": 881732.18,
		"hash": "280f1d740a5bb6e0cbcfba9bfa905ddca85f199f680e14371f1d8e1805c2cee8"
	},
	{
		"id": "d60c42a9e0cd",
		"ts": "2026-08-24T08:42:50.069Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 628823.64,
		"hash": "d60c42a9e0cd8cf11276386697c6cdb3d61f7b20da2ce83598bfc352dcf68f54"
	},
	{
		"id": "4da420feeedb",
		"ts": "2026-08-24T08:42:50.306Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 93703.84,
		"hash": "4da420feeedb5ed04c04e05304b395c92ef1097470f7c1d5acbf71d325e701a0"
	},
	{
		"id": "04db5c7f141c",
		"ts": "2026-08-24T08:42:50.528Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 117146.53,
		"hash": "04db5c7f141c1349e31fb87c52d26bc7c1c3e7a015c17215a53e8183bcfe62d4"
	},
	{
		"id": "e29e939bcb8e",
		"ts": "2026-08-24T08:42:50.746Z",
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
		"liquidityUsd": 11115426.6,
		"hash": "e29e939bcb8ee4d98151a5e705f86305676e3da354f26ae6a8832bd17e807d7a"
	},
	{
		"id": "32b8c619d954",
		"ts": "2026-08-24T08:42:50.965Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4111673.45,
		"hash": "32b8c619d95420e5682b9683611ae4c16a88fabb354d6d33d24ec147aedf9459"
	},
	{
		"id": "d1670be66195",
		"ts": "2026-08-24T08:42:51.184Z",
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
		"liquidityUsd": 660419.3,
		"hash": "d1670be66195bbcbd8b1d1ba7e0a4dc2cf394ccaa2de9ae48408147a3ec659c9"
	},
	{
		"id": "d4ebcb8451b2",
		"ts": "2026-08-24T08:42:51.403Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 249072.6,
		"hash": "d4ebcb8451b20fd80ae40d7ed08dc268cdf8da78e94b342f335d0e54883a2c5c"
	},
	{
		"id": "a2646d63b6c9",
		"ts": "2026-08-24T08:42:51.622Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 853169.65,
		"hash": "a2646d63b6c9c20d0e2967bbacf1ecaf3dbd9cf1bdb8fcca5aca52b730398c1c"
	},
	{
		"id": "eec8a9901402",
		"ts": "2026-08-24T08:42:52.001Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4225689.43,
		"hash": "eec8a990140215e2b3f8804cf64481afbd83c9e2c07e6f3cda7d8fae80020be4"
	},
	{
		"id": "3a3307f69398",
		"ts": "2026-08-24T07:54:28.790Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111965457.09,
		"hash": "3a3307f69398a8fddf3774889f5528cd42b2fab800a378e7489754e05099352b"
	},
	{
		"id": "8524b5c6f432",
		"ts": "2026-08-24T07:54:29.024Z",
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
		"liquidityUsd": 13679177.65,
		"hash": "8524b5c6f43225396e91f98227d3453cd71992fb4915e286132703b703cfdf5a"
	},
	{
		"id": "e2c40bebfe1a",
		"ts": "2026-08-24T07:54:29.276Z",
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
		"liquidityUsd": 914605.61,
		"hash": "e2c40bebfe1a28ff848d9bc3f04b699a695fbecea3978007b464be003a79b3fd"
	},
	{
		"id": "119904fd0a4f",
		"ts": "2026-08-24T07:54:29.510Z",
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
		"liquidityUsd": 29398275.5,
		"hash": "119904fd0a4f5a9a446523fbfe9ac56ae34a7c7e254e7ec522f0eafc3bb9e110"
	},
	{
		"id": "3591d50e73a9",
		"ts": "2026-08-24T07:54:29.753Z",
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
		"liquidityUsd": 3445947.58,
		"hash": "3591d50e73a902538e4838621aea59dfabd8b06d10015df1f81b8053b19eed73"
	},
	{
		"id": "c07a6a91aaf3",
		"ts": "2026-08-24T07:54:29.995Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1177279.34,
		"hash": "c07a6a91aaf3bc7b9364c34502b742811d1ac88f7e44bf7ef68ec00e9604f912"
	},
	{
		"id": "c8dfb655a708",
		"ts": "2026-08-24T07:54:30.224Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152797.13,
		"hash": "c8dfb655a708552412189c2225368c7bb71a53a50b78e0bf3a21fa62b7d05c72"
	},
	{
		"id": "77548891e32e",
		"ts": "2026-08-24T07:54:30.755Z",
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
		"liquidityUsd": 1887345.2,
		"hash": "77548891e32efe6fafcfbc126b78d2fdf6e7dd03276008d7240e40b96033733b"
	},
	{
		"id": "c67f4883ac84",
		"ts": "2026-08-24T07:54:31.385Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 622933.55,
		"hash": "c67f4883ac84cfb9bd20309628bd7bddf638c79ee61a200dde8a99b70c6f93ff"
	},
	{
		"id": "37f61e57986e",
		"ts": "2026-08-24T07:54:31.628Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1456096.22,
		"hash": "37f61e57986ed247ffb45bc192de8da048f9f22be95aec541804515bae83d293"
	},
	{
		"id": "3f38e5547ae1",
		"ts": "2026-08-24T07:54:31.852Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 631746.18,
		"hash": "3f38e5547ae1200a57770a39f71762a56a7f06b4f252eae5d7a212834a676c78"
	},
	{
		"id": "5e3ed1703a1b",
		"ts": "2026-08-24T07:54:32.113Z",
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
		"liquidityUsd": 899712.49,
		"hash": "5e3ed1703a1bb0afd167aa856e88122c6f13c906ce83a183e10d1b13524141ae"
	},
	{
		"id": "c874ef4056c0",
		"ts": "2026-08-24T07:54:32.340Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 95223.52,
		"hash": "c874ef4056c009c2538b416b814e30abc726068196c46346c05808e2e62bfd41"
	},
	{
		"id": "e4772e2dcbe8",
		"ts": "2026-08-24T07:54:32.563Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 119889.82,
		"hash": "e4772e2dcbe8ee1dbdcc4cf2cd090ed6de251398d4750f0856a54154bc6982ff"
	},
	{
		"id": "dc7853e51d90",
		"ts": "2026-08-24T07:54:32.792Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11167593.23,
		"hash": "dc7853e51d90d958b3753cd791f2b5c6d7066554810ceb469d02ce164ccd9b6e"
	},
	{
		"id": "8cfe29293127",
		"ts": "2026-08-24T07:54:33.006Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4126365.9,
		"hash": "8cfe29293127405d1613f9b48abb43890faf52721bfd8569be4af34634912fa4"
	},
	{
		"id": "ba5bfa341f61",
		"ts": "2026-08-24T07:54:33.233Z",
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
		"liquidityUsd": 660249.18,
		"hash": "ba5bfa341f6146bd80969b64910c3afdff578a03a5ecc48c58538bbccda090e1"
	},
	{
		"id": "e1dd1561e0bd",
		"ts": "2026-08-24T07:54:33.455Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 250086.9,
		"hash": "e1dd1561e0bd5795204252a01e6686a6ea3303c377d533d11a5aa80aec6a18e1"
	},
	{
		"id": "6b1d4b555335",
		"ts": "2026-08-24T07:54:33.669Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 861818.67,
		"hash": "6b1d4b555335a35b12240fb78c0a93c0e5c7a4e2a48454420a82cbb9bd7d1547"
	},
	{
		"id": "b1dcbc631a22",
		"ts": "2026-08-24T07:54:33.892Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4257403.34,
		"hash": "b1dcbc631a22ca6b48ef055f5060cefb9297e0699bf2396081ec831de45715a7"
	},
	{
		"id": "de7c79cda4eb",
		"ts": "2026-08-24T06:50:19.327Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111830074.63,
		"hash": "de7c79cda4eb5ab9dfabd7483f1ddcfc95a2c0eb55361284508b73890bee8316"
	},
	{
		"id": "1bb6f340563f",
		"ts": "2026-08-24T06:50:19.779Z",
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
		"liquidityUsd": 17585438.55,
		"hash": "1bb6f340563f88fa8f4be9853926bc8b5a0e38894b961e26b7cf700963144052"
	},
	{
		"id": "04c981f87930",
		"ts": "2026-08-24T06:50:20.007Z",
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
		"liquidityUsd": 911153.06,
		"hash": "04c981f8793087f52e517b1098a37cd59ce356d33517832a4e52d36b41b3f978"
	},
	{
		"id": "5ca79adfba86",
		"ts": "2026-08-24T06:50:20.235Z",
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
		"liquidityUsd": 29163591.15,
		"hash": "5ca79adfba865d259cb3bb916851d3058b4453fa8247302af9bef29fa4483d56"
	},
	{
		"id": "4de35c1b2548",
		"ts": "2026-08-24T06:50:20.478Z",
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
		"liquidityUsd": 3437632.96,
		"hash": "4de35c1b25487947c0227b26cf75201ec5440eab92243c28b7336822347912d0"
	},
	{
		"id": "05f41e1271d1",
		"ts": "2026-08-24T06:50:20.722Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1177279.97,
		"hash": "05f41e1271d11f35d063486172d30b1bf3d7cf8c63f29987df2d881f78a9a318"
	},
	{
		"id": "712f175fda29",
		"ts": "2026-08-24T06:50:20.967Z",
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
		"liquidityUsd": 502218.85,
		"hash": "712f175fda2988fbf5b76bb6000c21e0239974bf21b078c7c3f0a4a4c6bf3c08"
	},
	{
		"id": "d649ff901076",
		"ts": "2026-08-24T06:50:21.207Z",
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
		"liquidityUsd": 1883672.48,
		"hash": "d649ff901076d8b40202a5ba828a7d6d380e126b3bcfb7975786243ad74dbe8e"
	},
	{
		"id": "6016ded6b528",
		"ts": "2026-08-24T06:50:21.476Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 623705.78,
		"hash": "6016ded6b528ab05925226c5cbd8135688486cd00c3ff0b41521322b0b94157f"
	},
	{
		"id": "0c647773199e",
		"ts": "2026-08-24T06:50:21.702Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1430008.11,
		"hash": "0c647773199e00f6f285c3ff220567710899c3722ec2678af4c37d0b0f19d48e"
	},
	{
		"id": "8b6894b5e510",
		"ts": "2026-08-24T06:50:21.909Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 623252.79,
		"hash": "8b6894b5e51000a6db273a47f2a4e6bad6c8f1705cb91d30129b45a7c254ef41"
	},
	{
		"id": "f9a6b0d4a4a0",
		"ts": "2026-08-24T06:50:22.132Z",
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
		"liquidityUsd": 873113.86,
		"hash": "f9a6b0d4a4a0ca4a74754178ee6e98f564ca86a539343b654513adb83a804952"
	},
	{
		"id": "e3d202ef00d7",
		"ts": "2026-08-24T06:50:22.339Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 127191.49,
		"hash": "e3d202ef00d7c263745467ef53335326d7dd448eca81ab75c03f521c41dd64f8"
	},
	{
		"id": "b46329df48fc",
		"ts": "2026-08-24T06:50:22.941Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 94494.21,
		"hash": "b46329df48fc98f06b83cc17f264346d4a63bf34877e47600670b72aa14f1cc1"
	},
	{
		"id": "36bf147cbb13",
		"ts": "2026-08-24T06:50:23.148Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11158539.88,
		"hash": "36bf147cbb13a8185bc3e6a74a08306ddbc87371b93b277467afa6c058b375f9"
	},
	{
		"id": "4404b96ffa99",
		"ts": "2026-08-24T06:50:23.362Z",
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
		"liquidityUsd": 654602.28,
		"hash": "4404b96ffa99e7e8ba7e981538a63267cd73c95dc9c80ee73b42fecff7df0005"
	},
	{
		"id": "e24131d5a4ea",
		"ts": "2026-08-24T06:50:23.586Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4120935.47,
		"hash": "e24131d5a4ea702ad048d69f0eb89dbd25546bd97c83d837a541c2e11a01bfe5"
	},
	{
		"id": "ebc89177013e",
		"ts": "2026-08-24T06:50:23.793Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 857334.96,
		"hash": "ebc89177013e1551b1e54f1d01318b8c1ba66354d76fac21fd95314921af5eaf"
	},
	{
		"id": "583c3678762c",
		"ts": "2026-08-24T06:50:24.017Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 259090.05,
		"hash": "583c3678762c52ece5936b890e22de897e7ae92b2f97dc9f509af3283a9af36f"
	},
	{
		"id": "a6414e031c01",
		"ts": "2026-08-24T06:50:24.229Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4236319.79,
		"hash": "a6414e031c01a4abfea381fb9563dc4eb42162a21e182426d2e00000e73f2256"
	},
	{
		"id": "6bd9141f5aa9",
		"ts": "2026-08-24T05:34:15.302Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111621085.88,
		"hash": "6bd9141f5aa96f748984436a1bf887c3bd6abfafb9fbda6898b332ce188f4074"
	},
	{
		"id": "9df2a348cebb",
		"ts": "2026-08-24T05:34:15.753Z",
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
		"liquidityUsd": 17505725.78,
		"hash": "9df2a348cebb85ec2dfc87c67d14eabbd3d061344d5a508eab9d4ae617112104"
	},
	{
		"id": "8cbbfdc77041",
		"ts": "2026-08-24T05:34:16.191Z",
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
		"liquidityUsd": 906016.88,
		"hash": "8cbbfdc7704162e6059af1a74de51f4fa6501ad7ae699cb4bbc9aa3d7ed1b52b"
	},
	{
		"id": "0f631ece259b",
		"ts": "2026-08-24T05:34:16.426Z",
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
		"liquidityUsd": 28724309.76,
		"hash": "0f631ece259b41fc863cbe9bd10618736c014ace658516e860736c549cd6f633"
	},
	{
		"id": "4818e32fd896",
		"ts": "2026-08-24T05:34:16.675Z",
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
		"liquidityUsd": 3435421.7,
		"hash": "4818e32fd8967316c4ed48dc158f241aabfff1d13fdca2039dd8e4efc64c0e83"
	},
	{
		"id": "b0ca99b34c3d",
		"ts": "2026-08-24T05:34:16.903Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1176371.53,
		"hash": "b0ca99b34c3d6da74097598c1ea7cf2825c45bdc24e5e49c330bb080985a87cb"
	},
	{
		"id": "32716f82e6b4",
		"ts": "2026-08-24T05:34:17.130Z",
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
		"liquidityUsd": 500571.31,
		"hash": "32716f82e6b48ba007ff9b61a0c07e5b1c1aab68faf95c364df66eb23f106092"
	},
	{
		"id": "3666bbc36199",
		"ts": "2026-08-24T05:34:17.367Z",
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
		"liquidityUsd": 1917765.33,
		"hash": "3666bbc36199588601b5feb8929bb631ebf5f301f553261e8c116c798fcca447"
	},
	{
		"id": "2f155b0486db",
		"ts": "2026-08-24T05:34:17.594Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 652570.94,
		"hash": "2f155b0486db4b05d490217bfae6f123a893c02fb18669c79f7cf4fdd4eb44a1"
	},
	{
		"id": "8e8f87096d24",
		"ts": "2026-08-24T05:34:17.829Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1403653.84,
		"hash": "8e8f87096d24eb661d82dbbab48eb926394e0189c6b2e2d6b4be33e57bfece9d"
	},
	{
		"id": "40a7e844f2a3",
		"ts": "2026-08-24T05:34:18.050Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 642235.52,
		"hash": "40a7e844f2a3fcc217a9b6a93309ee04fe2ac785de8219121f0c078f34391ce6"
	},
	{
		"id": "d65e5f183dcb",
		"ts": "2026-08-24T05:34:18.263Z",
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
		"liquidityUsd": 863594.51,
		"hash": "d65e5f183dcb7febb94b1c8347bc3423093cd96ba60d49432ad23b4c3769fb13"
	},
	{
		"id": "87eb3b32b5f4",
		"ts": "2026-08-24T05:34:18.480Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 119826.45,
		"hash": "87eb3b32b5f48e015b2ad4d0af0717398bb6e370b98b1990c095a02ec7180bfb"
	},
	{
		"id": "984aad9ef4d4",
		"ts": "2026-08-24T05:34:18.703Z",
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
		"liquidityUsd": 653516.11,
		"hash": "984aad9ef4d42823c5e4d90c9b2587e7333f5a4dfaffeca8e1ffa3a4e389df49"
	},
	{
		"id": "eac49f9fe888",
		"ts": "2026-08-24T05:34:18.919Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4126302.34,
		"hash": "eac49f9fe888b60b51fc797a7c05f4cc6963b35a793638eff76245cfcc89e216"
	},
	{
		"id": "b86d0b137154",
		"ts": "2026-08-24T05:34:19.135Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11144363.81,
		"hash": "b86d0b13715469eb323b882811c0611902d5e78ebb46c25bc7cffdf82dfc1b8e"
	},
	{
		"id": "cfc443c2190f",
		"ts": "2026-08-24T05:34:19.598Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 96585.19,
		"hash": "cfc443c2190f0d249e6dccda95e6aff818ed7a4b9adf1e5fdadb048ecbf35010"
	},
	{
		"id": "f6fbbdd6760f",
		"ts": "2026-08-24T05:34:19.811Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 871219.8,
		"hash": "f6fbbdd6760fc3c4a5cd38a860eb688f542fc282166835dce9f4b94329d59bdd"
	},
	{
		"id": "7d4227085c0d",
		"ts": "2026-08-24T05:34:20.136Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 257576.63,
		"hash": "7d4227085c0d7b8a170e3211d5acad0a6ae4b6d08c6dc149d8878a61ca60a0ad"
	},
	{
		"id": "77f1b7fe96d8",
		"ts": "2026-08-24T05:34:20.359Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4250549.57,
		"hash": "77f1b7fe96d8801e0b2a0d54498c8f65bf940f300570b24424f94939e14228fe"
	}
]
