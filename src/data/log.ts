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
	"updatedAt": "2026-11-16T17:52:22.278Z",
	"tokensScored": 23007,
	"verdictsIssued": 23007,
	"safe": 19619,
	"risky": 1613,
	"likelyRug": 1775,
	"ticks": 1292
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "3c6bd2cc8efa",
		"ts": "2026-11-16T17:52:15.726Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 89157934.4,
		"hash": "3c6bd2cc8efabd8dc77f4c37f66ea639eb0e11729829276eb119de9e4356d139"
	},
	{
		"id": "bc75a239157f",
		"ts": "2026-11-16T17:52:16.042Z",
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
		"liquidityUsd": 17548352.35,
		"hash": "bc75a239157fe38b639952085d17d5b468b51bebbda540b2272c23eadd350568"
	},
	{
		"id": "b9436a6b7e68",
		"ts": "2026-11-16T17:52:16.370Z",
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
		"liquidityUsd": 203562.12,
		"hash": "b9436a6b7e68a96f942a1845d94b9d5f8148d03ef3ef0daf0ec35c07df0c7a64"
	},
	{
		"id": "ff80cddbf37c",
		"ts": "2026-11-16T17:52:16.704Z",
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
		"liquidityUsd": 3678035.74,
		"hash": "ff80cddbf37c09fcd633ef7976953709d71cc231ae37a3fd81f5899cefad3fd4"
	},
	{
		"id": "f4c69b50d617",
		"ts": "2026-11-16T17:52:17.011Z",
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
		"liquidityUsd": 1026309.06,
		"hash": "f4c69b50d61714e38382576959af3a1002ba0a25126d34293bc19fc9529a8829"
	},
	{
		"id": "757a7426c65e",
		"ts": "2026-11-16T17:52:17.340Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 846245.26,
		"hash": "757a7426c65eaaeae53bece7b4301782c83ffdcb8d170ac9b3122dff4e620363"
	},
	{
		"id": "43b63e837836",
		"ts": "2026-11-16T17:52:17.665Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 126606.13,
		"hash": "43b63e837836ced6bb817b3c53e0b56d3fb3c2cf65c1d53635a105c405d00162"
	},
	{
		"id": "a5456bc64955",
		"ts": "2026-11-16T17:52:18.420Z",
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
		"liquidityUsd": 1917009.11,
		"hash": "a5456bc649556af908794e56a271e40870abfcc3cebc9929aaffe1e01331f0d2"
	},
	{
		"id": "b69884e6f72b",
		"ts": "2026-11-16T17:52:18.787Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 826743.49,
		"hash": "b69884e6f72ba5b9eacddacb27ca87c96f8cd76e681b60feffd276e89adb56fc"
	},
	{
		"id": "765398795324",
		"ts": "2026-11-16T17:52:19.155Z",
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
		"liquidityUsd": 201590.33,
		"hash": "765398795324b019110d76b2dfedafad3f682f7e36936acf7f7a1c9f1147169f"
	},
	{
		"id": "80220e298508",
		"ts": "2026-11-16T17:52:19.455Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1382987.5,
		"hash": "80220e2985089d95d5d40c938ed726670ea186916511b237afbe860e5b4b7281"
	},
	{
		"id": "34c2325cf2aa",
		"ts": "2026-11-16T17:52:19.723Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2750632.86,
		"hash": "34c2325cf2aa85d8b2d48610ec807d370b5c6f8c6e8d24eb225ad6648931bcfc"
	},
	{
		"id": "5c7f78b23e1f",
		"ts": "2026-11-16T17:52:20.028Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3449801.31,
		"hash": "5c7f78b23e1fe91ec56f19e993689d22f6421745fe8d3683179b0bb0ee31c5ac"
	},
	{
		"id": "f9edb6213b89",
		"ts": "2026-11-16T17:52:20.317Z",
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
		"liquidityUsd": 2097310.14,
		"hash": "f9edb6213b89482bb506b421f67514fbbdf40e69cf39714de1e6dcde2233297f"
	},
	{
		"id": "655935859163",
		"ts": "2026-11-16T17:52:20.592Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 567456.95,
		"hash": "65593585916351f975d44cfd97c09cee25eb9b7793abad6ed22a3eb6aa4ca3ec"
	},
	{
		"id": "4e6d272a0ccc",
		"ts": "2026-11-16T17:52:20.862Z",
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
		"liquidityUsd": 6493367.38,
		"hash": "4e6d272a0ccc9fcb3b553095c1efafaa486670b272db299ef45de71da5f6eadd"
	},
	{
		"id": "8b750590a6d1",
		"ts": "2026-11-16T17:52:21.222Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1433919.96,
		"hash": "8b750590a6d1c74d7c156bdb1f950a487c1af33651b4bdbcb644e504da715356"
	},
	{
		"id": "99734c543772",
		"ts": "2026-11-16T17:52:21.561Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3160527.75,
		"hash": "99734c543772e04a36dc1740b61eed9fb0e674076d04e4431af52b8d13172bd2"
	},
	{
		"id": "fd3e7f0bccb0",
		"ts": "2026-11-16T17:52:21.996Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 126606.13,
		"hash": "fd3e7f0bccb0009d3d349289bbadceac9b6ef697cfb13a95d3b81389ff534d3e"
	},
	{
		"id": "abc3787947a8",
		"ts": "2026-11-16T17:52:22.277Z",
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
		"liquidityUsd": 2415200.53,
		"hash": "abc3787947a8ade1a53cbb3e08b4ada29092fedd8adaede9abbbebe6f161330c"
	},
	{
		"id": "2bcbce494932",
		"ts": "2026-11-16T07:35:59.274Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 89636182.67,
		"hash": "2bcbce494932bcdef65add73094ee6f634c008c940c46030de3e4742c853f914"
	},
	{
		"id": "a2aabc020c6a",
		"ts": "2026-11-16T07:35:59.723Z",
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
		"liquidityUsd": 17244319.56,
		"hash": "a2aabc020c6a72df013714aa80113dfdb2a739b87fd76f9c8726ca44401cbced"
	},
	{
		"id": "18f4130cb3b9",
		"ts": "2026-11-16T07:35:59.999Z",
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
		"liquidityUsd": 199873.44,
		"hash": "18f4130cb3b9a7fc8a3028542bfd5ebc62688ec954e14ed6d804c799b9c2efd1"
	},
	{
		"id": "b5cff204a286",
		"ts": "2026-11-16T07:36:00.241Z",
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
		"liquidityUsd": 3643992.05,
		"hash": "b5cff204a28696a22b34c3b6759c9ee24192fe86367301456ac908d92bd2ac35"
	},
	{
		"id": "79346b503e5d",
		"ts": "2026-11-16T07:36:00.498Z",
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
		"liquidityUsd": 975595.04,
		"hash": "79346b503e5dd410538d7432f5a3850bfcfcdf5bdf924cfa793d75eecb5b92d7"
	},
	{
		"id": "d90bba25bf17",
		"ts": "2026-11-16T07:36:00.754Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 844623.29,
		"hash": "d90bba25bf179ac323445791e8365befef58d5e12148f88cf5f68406ec85e25a"
	},
	{
		"id": "4e49fa8c92ba",
		"ts": "2026-11-16T07:36:01.195Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 104207.82,
		"hash": "4e49fa8c92ba856da5f723de505083cf94579ff56c8e177f3d85e1ac60dbe463"
	},
	{
		"id": "7641013f8723",
		"ts": "2026-11-16T07:36:01.475Z",
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
		"liquidityUsd": 1770273.89,
		"hash": "7641013f872318cc3a0975d4dad75d1a1549d7997ad99f848d45d342d761910d"
	},
	{
		"id": "e0812a010922",
		"ts": "2026-11-16T07:36:01.725Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 821508.27,
		"hash": "e0812a010922eafbbf53746a8aec47edd37d1b41b6b0f5fa8845d17efea1f7e1"
	},
	{
		"id": "acb542f71b70",
		"ts": "2026-11-16T07:36:01.988Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1417751.99,
		"hash": "acb542f71b70f414b4c456c7e9c9abacf3e9b9826390b4808913abff2820cef4"
	},
	{
		"id": "5dd51bda0864",
		"ts": "2026-11-16T07:36:02.227Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 2745713.95,
		"hash": "5dd51bda0864e5cab5c6a69e12b4d52ae6a62bad98d0da32479d225353843366"
	},
	{
		"id": "61174eee516f",
		"ts": "2026-11-16T07:36:02.478Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4799884.61,
		"hash": "61174eee516fcee2b3207adacf7df6b860e84086239221314a904074e7634040"
	},
	{
		"id": "fda62931564d",
		"ts": "2026-11-16T07:36:02.724Z",
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
		"liquidityUsd": 6549259.18,
		"hash": "fda62931564dfc169f77a96ea8c689bb89c061e21f458174bd938094da75e20a"
	},
	{
		"id": "790bca1287b3",
		"ts": "2026-11-16T07:36:02.943Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1333699.15,
		"hash": "790bca1287b3d9e5968a0fb317069c27fae98f2f15f3bdb9aa0fc6bf436466dd"
	},
	{
		"id": "884f92597b71",
		"ts": "2026-11-16T07:36:03.184Z",
		"symbol": "SOGNI",
		"token": "0xE014d2A4da6E450f21b5050120D291e63c8940FD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 414312.13,
		"hash": "884f92597b718764529dfdb4cd2522cf3a03419b9875029dfd7d7f98848b9094"
	},
	{
		"id": "dfcc69c96a4b",
		"ts": "2026-11-16T07:36:03.425Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3140630.86,
		"hash": "dfcc69c96a4b6e4fe8f2736769746ee4c89270c9d329534bb25efa1c5c10e109"
	},
	{
		"id": "bd4829aea99e",
		"ts": "2026-11-16T07:36:03.643Z",
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
		"liquidityUsd": 1049827.75,
		"hash": "bd4829aea99e6bbb6e8d2009da8ec64c525c513e5333f2b4e06c1c56fe65c47a"
	},
	{
		"id": "d0858bded234",
		"ts": "2026-11-16T07:36:03.861Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 560088.4,
		"hash": "d0858bded234a887879a2bc91cda6d4bff135fb5eae58ab3fc997eac05bca25f"
	},
	{
		"id": "f9677444f31c",
		"ts": "2026-11-16T07:36:04.093Z",
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
		"liquidityUsd": 2393937.2,
		"hash": "f9677444f31c41d3e64e3c3882b2b946f90fab7b77db7e4f0209a20fea7416f9"
	},
	{
		"id": "47a1700fe45f",
		"ts": "2026-11-16T00:41:33.526Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 86865128.8,
		"hash": "47a1700fe45f6a343b4761dafc74d4a4231dddacb6fda5ac26f7db6c18293c5c"
	},
	{
		"id": "ffac84718b2d",
		"ts": "2026-11-16T00:41:33.796Z",
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
		"liquidityUsd": 17140390.3,
		"hash": "ffac84718b2d8c518e05e5835691f73fa683338cf1f948356d7830a106ffe197"
	},
	{
		"id": "3312d835ff66",
		"ts": "2026-11-16T00:41:34.058Z",
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
		"liquidityUsd": 205652.2,
		"hash": "3312d835ff667e0d08e28ba8103467c0e3def72aa9126f3884ce16ff511bfc75"
	},
	{
		"id": "14becb790cca",
		"ts": "2026-11-16T00:41:34.332Z",
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
		"liquidityUsd": 3651572.7,
		"hash": "14becb790ccaa2b8dc2c2abc9aa7a28ee5dc3580bd6374bfb82efbe1718442dc"
	},
	{
		"id": "b193bd7d3548",
		"ts": "2026-11-16T00:41:34.596Z",
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
		"liquidityUsd": 980438.56,
		"hash": "b193bd7d354828e37165d947729274aa4b70672f786124c4c3b6b37c143fc906"
	},
	{
		"id": "00512f881e4f",
		"ts": "2026-11-16T00:41:34.855Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 844100.83,
		"hash": "00512f881e4fe348e188b192ac7a2dfcdde20af74a2bcae07298f5fbd7bdf342"
	},
	{
		"id": "caf4eb2b58e7",
		"ts": "2026-11-16T00:41:35.116Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 126542.85,
		"hash": "caf4eb2b58e7b81ed4d4359924b34c97fe4aae27695f13b1152d87137173b814"
	},
	{
		"id": "ae230b55706f",
		"ts": "2026-11-16T00:41:35.386Z",
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
		"liquidityUsd": 1728404.2,
		"hash": "ae230b55706f79f8b5bfbff374d078e8e7a80dab8d4f218f2491b4400b78f399"
	},
	{
		"id": "0c20e4cf5486",
		"ts": "2026-11-16T00:41:35.647Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 815868.66,
		"hash": "0c20e4cf5486c92ff84b8e0880ce4b15153f5983af4ee6724a605a77fe26d691"
	},
	{
		"id": "c48a1f826e69",
		"ts": "2026-11-16T00:41:35.908Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1959136.14,
		"hash": "c48a1f826e694f95c66753785090544af4507f6704424cb071cb1c1d272cdc01"
	},
	{
		"id": "2c8bd1d4dd16",
		"ts": "2026-11-16T00:41:36.152Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2782793.99,
		"hash": "2c8bd1d4dd16f47254cf20370881f0491f4dee58ce8cd93fe975b8ee98a8fbe9"
	},
	{
		"id": "784874ebc2c2",
		"ts": "2026-11-16T00:41:36.392Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1418749.83,
		"hash": "784874ebc2c278024b795c0469bec245d8277532f1428c4d7a1605c8de939013"
	},
	{
		"id": "18798b5bc5fc",
		"ts": "2026-11-16T00:41:36.639Z",
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
		"liquidityUsd": 272326.47,
		"hash": "18798b5bc5fc816e0d737274d845c3bed9e7b9b061cadf562e38c9213fa47097"
	},
	{
		"id": "15a731e6a681",
		"ts": "2026-11-16T00:41:36.882Z",
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
		"liquidityUsd": 2131124.19,
		"hash": "15a731e6a6819a03986b24413946e7bba530f176f66e24d0bb81dfa2b787cb43"
	},
	{
		"id": "973da2a01eaf",
		"ts": "2026-11-16T00:41:37.127Z",
		"symbol": "SOGNI",
		"token": "0xE014d2A4da6E450f21b5050120D291e63c8940FD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 404990.27,
		"hash": "973da2a01eaf67cf9676e3c2121f20230c50c60e52c502c6194a4976288fd383"
	},
	{
		"id": "a64f00c1107e",
		"ts": "2026-11-16T00:41:37.367Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1443983.78,
		"hash": "a64f00c1107e766921fd9d5b472788b18019a76ce6d0bafde542209a261848eb"
	},
	{
		"id": "ba61c52d4feb",
		"ts": "2026-11-16T00:41:37.608Z",
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
		"liquidityUsd": 6512436.53,
		"hash": "ba61c52d4feb0bd3c4c9e124ec32972df61316d34185fe6ac9c114a92d6a3f0f"
	},
	{
		"id": "0b6783b936c1",
		"ts": "2026-11-16T00:41:37.854Z",
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
		"liquidityUsd": 1060235.15,
		"hash": "0b6783b936c1f39fd725f1370d972661b9764071dce399cb60062bc08ac868cf"
	},
	{
		"id": "ff1c23c89f66",
		"ts": "2026-11-16T00:41:38.095Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3197429.16,
		"hash": "ff1c23c89f6684a581688bec87684736dd5dfb9f4a1838a9ae9cb9a09405a1f5"
	},
	{
		"id": "e7034052bda0",
		"ts": "2026-11-15T20:46:14.911Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 87217927.53,
		"hash": "e7034052bda0c34570f6577c5db7b765d14ab5b1acf0baede77925fd8bfa38c5"
	},
	{
		"id": "7e1752f84a77",
		"ts": "2026-11-15T20:46:15.375Z",
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
		"liquidityUsd": 17191816.99,
		"hash": "7e1752f84a771610fce44118aed3ed6463020c856ba6ef9c29a340fe671ce171"
	},
	{
		"id": "7381e45b5cbd",
		"ts": "2026-11-15T20:46:15.634Z",
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
		"liquidityUsd": 204227.9,
		"hash": "7381e45b5cbde7c390a1d787ede1d95abd4cdf870dc8f5bf62edaf63fc186752"
	},
	{
		"id": "893bc94d802a",
		"ts": "2026-11-15T20:46:15.915Z",
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
		"liquidityUsd": 3720023.62,
		"hash": "893bc94d802a3f262c0c885d0e8eadf183a84cd4dee374e78d423382f3b5133c"
	},
	{
		"id": "fbd238791402",
		"ts": "2026-11-15T20:46:16.175Z",
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
		"liquidityUsd": 980148.47,
		"hash": "fbd238791402dfb36690eb20654592751afac0cb803e6bb78f9cb6831f1f8632"
	},
	{
		"id": "8202c604cf5a",
		"ts": "2026-11-15T20:46:16.470Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 846817.68,
		"hash": "8202c604cf5abd5e33f24d6285279a753ffef9dcf0b71e0191d9a357bf35849b"
	},
	{
		"id": "077705209596",
		"ts": "2026-11-15T20:46:16.738Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 126542.08,
		"hash": "07770520959616e4e00b4f30c765bbf53976b582ca0a0d32e06433281ff3e081"
	},
	{
		"id": "a9ff7efddddf",
		"ts": "2026-11-15T20:46:16.993Z",
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
		"liquidityUsd": 1741909.17,
		"hash": "a9ff7efddddfab15adf1f2d87d62e37c20daa62d556f1eaaf15d7e4af5830a58"
	},
	{
		"id": "3796ffd53b76",
		"ts": "2026-11-15T20:46:17.249Z",
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
		"liquidityUsd": 1422517.71,
		"hash": "3796ffd53b76251367721a80357a4b754e547eae20cace20b7c4d19b2c0666f4"
	},
	{
		"id": "3a90ceed0a69",
		"ts": "2026-11-15T20:46:17.505Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1397966.66,
		"hash": "3a90ceed0a699c129389aa3ade423cc738e15fd37ac8a47ddba049c7a39a3ed7"
	},
	{
		"id": "d9e3b2afed19",
		"ts": "2026-11-15T20:46:17.749Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 830714.03,
		"hash": "d9e3b2afed192d2629fb33dacdf2df2e4ce0dd1bd9aa60bf77796aaf0fc21dbb"
	},
	{
		"id": "11108b6eb0ff",
		"ts": "2026-11-15T20:46:18.012Z",
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
		"liquidityUsd": 2110455.65,
		"hash": "11108b6eb0ff9f5d33e16be3f587cc07bf59642a735ff7878c0f1847bd929c4c"
	},
	{
		"id": "0f33324e0e1a",
		"ts": "2026-11-15T20:46:18.388Z",
		"symbol": "SOGNI",
		"token": "0xE014d2A4da6E450f21b5050120D291e63c8940FD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 419063.56,
		"hash": "0f33324e0e1a95294446e334dd6d6f375ee7f39d6253d1b4b2898a8c6446efce"
	},
	{
		"id": "68afde75e712",
		"ts": "2026-11-15T20:46:18.648Z",
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
		"liquidityUsd": 275875.13,
		"hash": "68afde75e7121d9a2ad5417fab7265cbdf2249c85535e7d157b16aac62b39710"
	},
	{
		"id": "16b64bc74509",
		"ts": "2026-11-15T20:46:18.914Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3963006.21,
		"hash": "16b64bc74509dc21430a435b18a826ab431b77f21df4c54a187ab0597e0fe3f2"
	},
	{
		"id": "1537d7839816",
		"ts": "2026-11-15T20:46:19.150Z",
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
		"liquidityUsd": 6589606.02,
		"hash": "1537d78398168c8e1877ac0c2d3882b5dc98b1eaaef6fb887a68751a3a410a7c"
	},
	{
		"id": "2c3225c252d1",
		"ts": "2026-11-15T20:46:19.388Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2785969.99,
		"hash": "2c3225c252d1edf7f5a63c31f43deac24252ac5902a79d81f7204117036da2e6"
	},
	{
		"id": "58d615eb8cf1",
		"ts": "2026-11-15T20:46:19.637Z",
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
		"liquidityUsd": 1062079.99,
		"hash": "58d615eb8cf153ed6f5a757c710771ee53bada82383f4921abffce2a3be0fcc9"
	},
	{
		"id": "05917e5b90f1",
		"ts": "2026-11-15T20:46:19.875Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3222122.23,
		"hash": "05917e5b90f19e236ac7aea52b06caab5e30965f829feee8e54bcd7a65e4b5b9"
	},
	{
		"id": "e5fa15ad6b3d",
		"ts": "2026-11-15T15:16:12.314Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 86607039.02,
		"hash": "e5fa15ad6b3de63e8af8ed307152df9333db38427dbf9ba77bd640a0a2672be0"
	},
	{
		"id": "765d1d8dceb4",
		"ts": "2026-11-15T15:16:12.561Z",
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
		"liquidityUsd": 16797270.89,
		"hash": "765d1d8dceb441992dca6bcda6581226aac633f11d423c5eb55968d5a74e755f"
	},
	{
		"id": "feff6bd891bf",
		"ts": "2026-11-15T15:16:12.881Z",
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
		"liquidityUsd": 201736.97,
		"hash": "feff6bd891bf72dadf466b4877954a5600922e800d753988911435feb9548fd9"
	},
	{
		"id": "875f8486d03e",
		"ts": "2026-11-15T15:16:13.318Z",
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
		"liquidityUsd": 3720697.01,
		"hash": "875f8486d03e874dc3ad68127864dcdb6817047f05fa549d9e65938e72f196e8"
	},
	{
		"id": "5166f47fd88d",
		"ts": "2026-11-15T15:16:13.747Z",
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
		"liquidityUsd": 945862.56,
		"hash": "5166f47fd88d8cf959596b8076bb755b3ad70e7d4021568f04bbabd0991aaaa8"
	},
	{
		"id": "4d9b2e69a810",
		"ts": "2026-11-15T15:16:13.997Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 832349.71,
		"hash": "4d9b2e69a810753e1f7afc2d5e5dffe6ad04b9f3d277e9371c8181832c96d407"
	},
	{
		"id": "fd81ef84c52c",
		"ts": "2026-11-15T15:16:14.227Z",
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
		"liquidityUsd": 235377.01,
		"hash": "fd81ef84c52cd70baff01b0423181cc4dfbb9b3e600befdf0cadda7f0177adf8"
	},
	{
		"id": "08d4d909d46f",
		"ts": "2026-11-15T15:16:14.463Z",
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
		"liquidityUsd": 1712759.21,
		"hash": "08d4d909d46fd984843c2c22b9263523026bd3157e441c01a5e4123e187a9d51"
	},
	{
		"id": "d202a35ed63d",
		"ts": "2026-11-15T15:16:14.716Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 794407.77,
		"hash": "d202a35ed63d0bd3098fe3ea2feeccb23d38bac1f4824fbb7f3d20f14da6b041"
	},
	{
		"id": "eb4d39f3242b",
		"ts": "2026-11-15T15:16:14.951Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1389673.76,
		"hash": "eb4d39f3242b4de2043f39ef45c0f74d4833b0612c72d72bf08da5c9fd5514cf"
	},
	{
		"id": "f6dbc987654b",
		"ts": "2026-11-15T15:16:15.170Z",
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
		"liquidityUsd": 2061836.36,
		"hash": "f6dbc987654b980b288c8c25afbf7ba24a0455bb12fc3a50c4928c7324b85829"
	},
	{
		"id": "05148194e8b0",
		"ts": "2026-11-15T15:16:15.409Z",
		"symbol": "SOGNI",
		"token": "0xE014d2A4da6E450f21b5050120D291e63c8940FD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 416605.51,
		"hash": "05148194e8b0675ec6284fc6188ebb26629c5c2fe348547741a259dc97ce0dda"
	},
	{
		"id": "42724e2d5b1f",
		"ts": "2026-11-15T15:16:15.627Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4546381.91,
		"hash": "42724e2d5b1fb4f577685cd6b58e14e68c62c4252bfd70fd459ead7f46db8ff5"
	},
	{
		"id": "5c6f50065785",
		"ts": "2026-11-15T15:16:15.848Z",
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
		"liquidityUsd": 274523.87,
		"hash": "5c6f50065785db017de92418724dfdc28d87d292d504191eb4c5d01054744c01"
	},
	{
		"id": "b405517f6099",
		"ts": "2026-11-15T15:16:16.087Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2724192.26,
		"hash": "b405517f6099d563faf261eb8e0d1806d8d8aa5543f9b060412475419689571e"
	},
	{
		"id": "3a3d29b70604",
		"ts": "2026-11-15T15:16:16.306Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1432916.68,
		"hash": "3a3d29b706044f9f951bc497221fcb7099a8bdb5e56059e52cdaa626e578cd29"
	},
	{
		"id": "8fdc2570d9b0",
		"ts": "2026-11-15T15:16:16.525Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 325031.55,
		"hash": "8fdc2570d9b0ccc555bd89763b702150bedd1975471aa708c05919f5721c0bd4"
	},
	{
		"id": "28a2ec265164",
		"ts": "2026-11-15T15:16:16.759Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 557895.73,
		"hash": "28a2ec265164cae730aa83330f45a2c1ce0a4b337768ca052c0b6694784af766"
	},
	{
		"id": "a0d915921014",
		"ts": "2026-11-15T15:16:16.977Z",
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
		"liquidityUsd": 1031863.55,
		"hash": "a0d915921014d4ab44464154a1ed977155c6732b4893dae03bb2ad38085fa4e9"
	},
	{
		"id": "8a40516aa860",
		"ts": "2026-11-15T07:29:41.799Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 87330774.28,
		"hash": "8a40516aa860aa5e6524b342c7627594bbbaceca5c8a6d7e9b923fc5a8c719a6"
	},
	{
		"id": "3e886ece06d7",
		"ts": "2026-11-15T07:29:42.080Z",
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
		"liquidityUsd": 16700031.97,
		"hash": "3e886ece06d749140e0f7eb665517b56f558afe5b99dd1e73a26b7f683f5b9cd"
	},
	{
		"id": "ebe76849f202",
		"ts": "2026-11-15T07:29:42.402Z",
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
		"liquidityUsd": 201035.99,
		"hash": "ebe76849f202e823f4f862dd0fec8184afaf615077937c43d08eb5041389bfe7"
	},
	{
		"id": "50b5683f8b90",
		"ts": "2026-11-15T07:29:42.637Z",
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
		"liquidityUsd": 3728353.16,
		"hash": "50b5683f8b909c156c7a8c1d6bac5272816c2d191559a222440d938ad71e6b79"
	},
	{
		"id": "da056bdfa64c",
		"ts": "2026-11-15T07:29:42.841Z",
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
		"liquidityUsd": 930137.51,
		"hash": "da056bdfa64cd28002d4b24cff5624b5e89b038697f05cc81c5a7c8dc53f689f"
	},
	{
		"id": "af8a4b67246e",
		"ts": "2026-11-15T07:29:43.079Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 830890.94,
		"hash": "af8a4b67246e7e443c5de8fddaa65cf8c674fe6831bae224cc006b09713d791a"
	},
	{
		"id": "445432000c0b",
		"ts": "2026-11-15T07:29:43.307Z",
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
		"liquidityUsd": 283427.18,
		"hash": "445432000c0b5d44b1d8e52cd95d2b4a7bb484ede7feebbd88ebfeeaf009226b"
	},
	{
		"id": "e90fc3aa2dcf",
		"ts": "2026-11-15T07:29:43.509Z",
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
		"liquidityUsd": 2001506.79,
		"hash": "e90fc3aa2dcf74a6aaaa7d3300fa9482c4d5730324595bc39e880e11c7a273ce"
	},
	{
		"id": "46324472258e",
		"ts": "2026-11-15T07:29:43.733Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1380649.43,
		"hash": "46324472258e9c824652d96d7de847e18b1a1c49cac46affeffc81224a733cf2"
	},
	{
		"id": "1716baab2131",
		"ts": "2026-11-15T07:29:43.960Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 552151.66,
		"hash": "1716baab21312c4bd4289722fb30cb17843cc49e3a1cd208e5a2955ffe4cc182"
	},
	{
		"id": "8d481a92a93d",
		"ts": "2026-11-15T07:29:44.179Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 800020.9,
		"hash": "8d481a92a93de877dd6a0b87daaa854aee1cb39b9a5c30dd39046544700db05e"
	},
	{
		"id": "003733e19583",
		"ts": "2026-11-15T07:29:44.389Z",
		"symbol": "SOGNI",
		"token": "0xE014d2A4da6E450f21b5050120D291e63c8940FD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 416649.97,
		"hash": "003733e19583bbb6a1e65b6836cb1958e52a43d6bcfeb3e450f85f7f28b71dc3"
	},
	{
		"id": "cd4d083171a0",
		"ts": "2026-11-15T07:29:44.626Z",
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
		"liquidityUsd": 2064669.24,
		"hash": "cd4d083171a0f453cfa603341e51418aad96146c25144bce2f69477f224d9a7c"
	},
	{
		"id": "9d869f2b36ca",
		"ts": "2026-11-15T07:29:44.830Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3654599.65,
		"hash": "9d869f2b36caf4da1b3dc717ec5903295a782a60e112248c9076381b6b77a4e8"
	},
	{
		"id": "878b9a821b78",
		"ts": "2026-11-15T07:29:45.044Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2706072.84,
		"hash": "878b9a821b780fb8ed1be0517fae0dd1ed48d51fd1e2f90ddb454689d9f47025"
	},
	{
		"id": "3b21657d5549",
		"ts": "2026-11-15T07:29:45.260Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 319299.66,
		"hash": "3b21657d5549caf8c78f10d92f489074e7572278bfcf76c567072033cab9c488"
	},
	{
		"id": "f9a5b4543777",
		"ts": "2026-11-15T07:29:45.457Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1485367.87,
		"hash": "f9a5b4543777127700b7893e012e7abe303fcc4b425a00d6ef62ae05324d7876"
	},
	{
		"id": "4da0e856b178",
		"ts": "2026-11-15T07:29:45.646Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3050657.57,
		"hash": "4da0e856b178ee9f2fe0a4be26686c66622a05bf94bb0f127c079d74f7c8a1f3"
	},
	{
		"id": "57b3040b6798",
		"ts": "2026-11-15T07:29:45.839Z",
		"symbol": "RSC",
		"token": "0xFbB75A59193A3525a8825BeBe7D4b56899E2f7e1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 141598.38,
		"hash": "57b3040b679888810529475c51300a032a1fda154eb157bf5d2ef6aaef3cad0c"
	},
	{
		"id": "7a7d23ab1249",
		"ts": "2026-11-15T00:41:22.076Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 86950308.22,
		"hash": "7a7d23ab124914960d712f2c510f0bcb8cd12d3b58655c5659231a569486ea12"
	},
	{
		"id": "be3ac2a3c898",
		"ts": "2026-11-15T00:41:22.743Z",
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
		"liquidityUsd": 16250646.65,
		"hash": "be3ac2a3c89829a0bc9c0f975a79a68791d4728cb1532037c638a36fed3c88bf"
	},
	{
		"id": "cd2dd8c161fc",
		"ts": "2026-11-15T00:41:23.041Z",
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
		"liquidityUsd": 196962.3,
		"hash": "cd2dd8c161fc66e3813922ec57e00c6b6c1c4c551e8912692f53e9f86790ee25"
	},
	{
		"id": "d0d5091228e9",
		"ts": "2026-11-15T00:41:23.290Z",
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
		"liquidityUsd": 3704278.25,
		"hash": "d0d5091228e93579249f3b8a5cda810f6cb0006cec2c742bd784ab626732ff40"
	},
	{
		"id": "8b442cec8ca1",
		"ts": "2026-11-15T00:41:23.538Z",
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
		"liquidityUsd": 912788.91,
		"hash": "8b442cec8ca1ed0ebed6f2d161961dcecdc946041ff67c06657150686d08f5d9"
	},
	{
		"id": "a07c4e1ab799",
		"ts": "2026-11-15T00:41:23.791Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 809083.19,
		"hash": "a07c4e1ab7993d98b2ff3206b98d5668b3426320720e5c93b07cc5e4a52ac6a2"
	},
	{
		"id": "5b2f2eb34ca2",
		"ts": "2026-11-15T00:41:24.059Z",
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
		"liquidityUsd": 270467.14,
		"hash": "5b2f2eb34ca279a8092905ec14b229d81b3788cf58ae34aec78696aee8e71273"
	},
	{
		"id": "1a779b6d0b27",
		"ts": "2026-11-15T00:41:24.317Z",
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
		"liquidityUsd": 2021822.68,
		"hash": "1a779b6d0b276aff754c2e62f1b7c75d80a7a23f100ac23494c0135d57366f79"
	},
	{
		"id": "d70b22942a1a",
		"ts": "2026-11-15T00:41:24.576Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1334563.29,
		"hash": "d70b22942a1a1fb00e28315877b04fd4bd2834aff289dbab843c385c405d6883"
	},
	{
		"id": "a24d91861552",
		"ts": "2026-11-15T00:41:24.830Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 570532.61,
		"hash": "a24d918615521e1421fa83757db27634d82755f4cfb7b9f3236304c083d07872"
	},
	{
		"id": "3232468551a3",
		"ts": "2026-11-15T00:41:25.063Z",
		"symbol": "SOGNI",
		"token": "0xE014d2A4da6E450f21b5050120D291e63c8940FD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 410910.59,
		"hash": "3232468551a3f934324e02a9fec36dfb7a8db77dec746f3f8574ffd4cc3aa103"
	},
	{
		"id": "2ab22382cc73",
		"ts": "2026-11-15T00:41:25.294Z",
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
		"liquidityUsd": 1989913.34,
		"hash": "2ab22382cc739a9d832a4db5908619ab82808d9060c36f50c1f639e4b463904d"
	},
	{
		"id": "98de77442dff",
		"ts": "2026-11-15T00:41:25.536Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 711156.93,
		"hash": "98de77442dffc9742e1252333d9b2c34405747931d682db1e8cdd67319c4725d"
	},
	{
		"id": "d3d6c05f1d55",
		"ts": "2026-11-15T00:41:25.767Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 306062.12,
		"hash": "d3d6c05f1d5576fd14b8775ef2b93c4c48c8d49eb373d1c9016c1d46827e958c"
	},
	{
		"id": "dd51d8ebcc5e",
		"ts": "2026-11-15T00:41:25.998Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2666088.69,
		"hash": "dd51d8ebcc5ee919e7645b641362cd70325f0799fd54d253ca7e24f41fff10a5"
	},
	{
		"id": "739bf9cbbad9",
		"ts": "2026-11-15T00:41:26.228Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 178168.38,
		"hash": "739bf9cbbad9666c5aa61db312d22eecb579f61a8267ad8e7841b5dc303a9a02"
	},
	{
		"id": "d2f71fcd6b6f",
		"ts": "2026-11-15T00:41:26.459Z",
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
		"liquidityUsd": 729528.18,
		"hash": "d2f71fcd6b6ffdc9ec8e4629b446d7c7068d656abae5b1d31afa8afc4ce71159"
	},
	{
		"id": "c083fb6f9bcd",
		"ts": "2026-11-15T00:41:26.695Z",
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
		"liquidityUsd": 1442728.85,
		"hash": "c083fb6f9bcd2d7a8e6a8da30f2ab06a05a7673e749568a3fe131d5164af412b"
	},
	{
		"id": "b42fab6edfd6",
		"ts": "2026-11-15T00:41:26.925Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1682793.14,
		"hash": "b42fab6edfd6dc589a353a867d308464833de3fd75b195a1ef6b98c763a479a1"
	},
	{
		"id": "d4fde18d03e7",
		"ts": "2026-11-14T20:21:45.796Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 115109441.14,
		"hash": "d4fde18d03e7aadea8a98a7c996a45cd2d2a53992bfccfbaa41c2a9d37fbaa8e"
	},
	{
		"id": "9c100a6b1901",
		"ts": "2026-11-14T20:21:46.046Z",
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
		"liquidityUsd": 15960536.71,
		"hash": "9c100a6b1901315e8fe1f9b823da3482d8807f1d8443f5e1962f2514ad2e815e"
	},
	{
		"id": "6afab4f2b5eb",
		"ts": "2026-11-14T20:21:46.330Z",
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
		"liquidityUsd": 206289.44,
		"hash": "6afab4f2b5eb7a4586a627e284bccb17de0e45b85416d1a6ee8bf16eac4eaf5c"
	},
	{
		"id": "8b0753a0dac9",
		"ts": "2026-11-14T20:21:46.613Z",
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
		"liquidityUsd": 3739064.63,
		"hash": "8b0753a0dac99bd5ee114df159f4f87a1e5135d42c992ac58e262bcabb155791"
	},
	{
		"id": "452ebcd4cd08",
		"ts": "2026-11-14T20:21:46.868Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"volume_liquidity_anomaly",
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 923675,
		"hash": "452ebcd4cd08bf98d2ba16d1b3ea6d2fcb012d0540f9399f2bf9b7a8b7ace6a7"
	},
	{
		"id": "9e77c1c398a3",
		"ts": "2026-11-14T20:21:47.120Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 833349.67,
		"hash": "9e77c1c398a3f51618ef7aa871b68fe14d4c69175b5155576bae1ebfeb0141f2"
	},
	{
		"id": "aa0f45fe4ec9",
		"ts": "2026-11-14T20:21:47.355Z",
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
		"liquidityUsd": 276462.58,
		"hash": "aa0f45fe4ec955d16daa2981ca61744b9f75ba821b167257f4e838af3433a879"
	},
	{
		"id": "be450da7dbef",
		"ts": "2026-11-14T20:21:47.599Z",
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
		"liquidityUsd": 1860399.66,
		"hash": "be450da7dbefed242b92245d5ede666dd90bc584cb4eb86a9017e482029e194e"
	},
	{
		"id": "c991a3f4b389",
		"ts": "2026-11-14T20:21:47.834Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1404803.24,
		"hash": "c991a3f4b3890cfe883ee90b0eb2c6f896ba274fa866e7ae1622395cf777bee2"
	},
	{
		"id": "a758163d12e0",
		"ts": "2026-11-14T20:21:48.070Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 587487.2,
		"hash": "a758163d12e0055a51045b440d0b64cf9af92fd9eb09175420ede0c84de561f9"
	},
	{
		"id": "465ce2ab9b75",
		"ts": "2026-11-14T20:21:48.291Z",
		"symbol": "SOGNI",
		"token": "0xE014d2A4da6E450f21b5050120D291e63c8940FD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 411702.58,
		"hash": "465ce2ab9b758f19ab4c33b3bda8222dc9bfad311ebde68aac752ed84683e2cf"
	},
	{
		"id": "933362af1b19",
		"ts": "2026-11-14T20:21:48.515Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 720953.25,
		"hash": "933362af1b19886eab222bc192dbecfaf25bcd9411b36f1a23b5724e2d578fa3"
	},
	{
		"id": "7e054fd5ab94",
		"ts": "2026-11-14T20:21:48.737Z",
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
		"liquidityUsd": 2039078.32,
		"hash": "7e054fd5ab944577d68a97f737adee5ea607a6f5f9208a2eb265430c1167a189"
	},
	{
		"id": "c40beaa66c63",
		"ts": "2026-11-14T20:21:48.961Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 369328.31,
		"hash": "c40beaa66c63e24938341c91cdb62ff1fa7c5262585a5281d4410c782393e24b"
	},
	{
		"id": "13c2900ceafe",
		"ts": "2026-11-14T20:21:49.180Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 185474.15,
		"hash": "13c2900ceafed5ed533b1ba8caa57a58d6ed847082d0773a2edc5497161304ed"
	},
	{
		"id": "b24bd158bbac",
		"ts": "2026-11-14T20:21:49.405Z",
		"symbol": "PONS",
		"token": "0x304B826A47a5E6CB2766aD9069f670651c9F847d",
		"score": 71,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.42,
		"flags": [
			"low_liquidity",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 0,
		"hash": "b24bd158bbacea5f627e3bd00fa7388efd8a38a3cc47dcfddb847723ff6a55cf"
	},
	{
		"id": "647e6b673ab7",
		"ts": "2026-11-14T20:21:49.627Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1678133.09,
		"hash": "647e6b673ab75cba1c2a3759c30007be00a96834089a9c31dd54ed16f15a5c80"
	},
	{
		"id": "2ff40299e304",
		"ts": "2026-11-14T20:21:49.858Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2729840.13,
		"hash": "2ff40299e30412ddadd9c29dbe83403c7d976bb439ed21e299e49be985b12ea8"
	},
	{
		"id": "923bf58ce6e6",
		"ts": "2026-11-14T20:21:50.080Z",
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
		"liquidityUsd": 719104.49,
		"hash": "923bf58ce6e6dc8ac60bf0edd060ef5aaf3f6215d1b4c4a2361cd444caed42a9"
	},
	{
		"id": "dcab79c30716",
		"ts": "2026-11-14T15:30:15.374Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 115899574.75,
		"hash": "dcab79c3071661d14a6e85fbb7af0f890cc5e21cc24c3499e8957ed52e25de0f"
	},
	{
		"id": "2ef55b87aa5f",
		"ts": "2026-11-14T15:30:15.622Z",
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
		"liquidityUsd": 14142418.11,
		"hash": "2ef55b87aa5f6446a9576b4f5b54b9d46bab5948a43f975a8b0b8b5fb0f2200d"
	},
	{
		"id": "c991aaa60c67",
		"ts": "2026-11-14T15:30:15.882Z",
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
		"liquidityUsd": 205437.48,
		"hash": "c991aaa60c67d799c5e583415e06a797feabfff157dfa127c1ec4afea837cc29"
	},
	{
		"id": "8d414cb4ac95",
		"ts": "2026-11-14T15:30:16.122Z",
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
		"liquidityUsd": 3772148.84,
		"hash": "8d414cb4ac952ac6cb3e93569a75c0fc2ca34a068fd45f6bc5248db475669861"
	},
	{
		"id": "d8f7a41c3607",
		"ts": "2026-11-14T15:30:16.374Z",
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
		"liquidityUsd": 981500.98,
		"hash": "d8f7a41c36072e4bb35643a12ecdf2f4d4c2981ec34f38f004cd6a5ce9172321"
	},
	{
		"id": "88af50b1df28",
		"ts": "2026-11-14T15:30:16.637Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 848071.49,
		"hash": "88af50b1df28002e9fdb9a86121d0139f6658cdbb3f8c1ab15ddee83dd15cb42"
	},
	{
		"id": "4dae2fe764a9",
		"ts": "2026-11-14T15:30:16.877Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 588598.92,
		"hash": "4dae2fe764a93bd8baa48bc9c106bd306346930dd057656c53b05c57a27c4e6f"
	},
	{
		"id": "2fb48d89c52f",
		"ts": "2026-11-14T15:30:17.116Z",
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
		"liquidityUsd": 1946261.86,
		"hash": "2fb48d89c52f4ea0b04e940f1c043e5207276b1a7047228fbca4fb2f96329aad"
	},
	{
		"id": "0c9556422aeb",
		"ts": "2026-11-14T15:30:17.380Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1419191.57,
		"hash": "0c9556422aeb0165049dd25e02fe9380c0c2b90e42fd253aa1b2d5d229431b9e"
	},
	{
		"id": "124da0ccaab9",
		"ts": "2026-11-14T15:30:17.625Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 726176.37,
		"hash": "124da0ccaab94502f3dae57a28cff7e71a375dce70c748abab4b4be7d4f2bf0a"
	},
	{
		"id": "5fd5a624e9ae",
		"ts": "2026-11-14T15:30:17.850Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 597619.22,
		"hash": "5fd5a624e9aecebab167317123dd49e7b6fdaed9a3b3d85c629700ee5b4f0a54"
	},
	{
		"id": "41bc3505e04a",
		"ts": "2026-11-14T15:30:18.075Z",
		"symbol": "SOGNI",
		"token": "0xE014d2A4da6E450f21b5050120D291e63c8940FD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 416879.23,
		"hash": "41bc3505e04abdd3216bf78289023c678d6c0a8f8fe8d6caf613fe762a1fcec9"
	},
	{
		"id": "53efec864ec6",
		"ts": "2026-11-14T15:30:18.297Z",
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
		"liquidityUsd": 2212118.01,
		"hash": "53efec864ec63be2f47c8b1542b4986a31b09551e1f704e568bfcbaa9b0ae697"
	},
	{
		"id": "dc5693d63219",
		"ts": "2026-11-14T15:30:18.519Z",
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
		"liquidityUsd": 735691.19,
		"hash": "dc5693d63219e4f81f630bc8a586d47530db522ed890877bb9400d6c3adb869c"
	},
	{
		"id": "ed2bf6410e00",
		"ts": "2026-11-14T15:30:18.740Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 155568.48,
		"hash": "ed2bf6410e00ec54a116e192077ea1fd34ea45d1ee288e6e59775daa2518ff25"
	},
	{
		"id": "a49e2990bd84",
		"ts": "2026-11-14T15:30:18.964Z",
		"symbol": "PONS",
		"token": "0x304B826A47a5E6CB2766aD9069f670651c9F847d",
		"score": 71,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.42,
		"flags": [
			"low_liquidity",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 0,
		"hash": "a49e2990bd846243059e8af13e191c88d4c1f3fc55f06a6a3a9da0fa13de7590"
	},
	{
		"id": "b3e30fab4666",
		"ts": "2026-11-14T15:30:19.185Z",
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
		"liquidityUsd": 1469376.3,
		"hash": "b3e30fab4666bc793b46180f6e5444f5ef3baac7f040573dc9c80105085a1655"
	},
	{
		"id": "229361f8c574",
		"ts": "2026-11-14T15:30:19.457Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2743121.3,
		"hash": "229361f8c57490e4e0c982b7629d339da27206b6e2d09c6ebbf38d56346766bd"
	},
	{
		"id": "e0d94554d4b0",
		"ts": "2026-11-14T15:30:19.689Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1695769.48,
		"hash": "e0d94554d4b01584ecba5eb72594483c405b6f97750b746ffd0f79c374415ccd"
	},
	{
		"id": "5e1a38191c52",
		"ts": "2026-11-14T08:31:07.857Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 123158379.84,
		"hash": "5e1a38191c52db5a24a4feab1cfe96baa350441f050044ef4700eaf25c158049"
	},
	{
		"id": "4c719243e20a",
		"ts": "2026-11-14T08:31:08.510Z",
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
		"liquidityUsd": 13509890.54,
		"hash": "4c719243e20a2779b90fbff4c3ead95385884e4c626f53a81e8512252f7e5835"
	},
	{
		"id": "3caa81014a5d",
		"ts": "2026-11-14T08:31:08.751Z",
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
		"liquidityUsd": 210584.37,
		"hash": "3caa81014a5d9db9258a5860c038dd87047eff3bb0cec77a42c732bb3b2239bc"
	},
	{
		"id": "6559578e1e0f",
		"ts": "2026-11-14T08:31:08.999Z",
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
		"liquidityUsd": 3825546.96,
		"hash": "6559578e1e0fabeb91654a4bf400ba7242e9270d5e2627b46c564f0dfa39c4e1"
	},
	{
		"id": "b98bfa4a111a",
		"ts": "2026-11-14T08:31:09.249Z",
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
		"liquidityUsd": 1025162.81,
		"hash": "b98bfa4a111a21932e6bb9ec93d0237db8481fc2cfc8956d8df56e44603c9c78"
	},
	{
		"id": "c2b7969049e4",
		"ts": "2026-11-14T08:31:09.502Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 881390.71,
		"hash": "c2b7969049e46633c8f0910d5154f5b773c25600c51bbb20522ed478d3293ca3"
	},
	{
		"id": "35ee79c6ad16",
		"ts": "2026-11-14T08:31:09.812Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3825546.96,
		"hash": "35ee79c6ad160c6919d1a69a4adef1a19c5c49af1c8a0738e65436c7b7015ae0"
	},
	{
		"id": "223f7f80c85e",
		"ts": "2026-11-14T08:31:10.057Z",
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
		"liquidityUsd": 1855770.34,
		"hash": "223f7f80c85e9ebed679bde9d0aad6725f50befd567561dd648d5b2cf99ebcb7"
	},
	{
		"id": "c0ab3e3a249a",
		"ts": "2026-11-14T08:31:10.319Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 746848.92,
		"hash": "c0ab3e3a249ade4cf3b351b5c3c1dfb4060e4362c1529e0116af4452a61bad07"
	},
	{
		"id": "21c51d20fac0",
		"ts": "2026-11-14T08:31:10.565Z",
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
		"liquidityUsd": 1505049.95,
		"hash": "21c51d20fac0d1762312925b7e229df5628968b8213f47f73a7cd692837cdcec"
	},
	{
		"id": "5b36eb88740d",
		"ts": "2026-11-14T08:31:10.807Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1469579.02,
		"hash": "5b36eb88740ddd6e8869815c279e3f19913b726711419a6935c52007a8e5b8ae"
	},
	{
		"id": "9ab132c631c9",
		"ts": "2026-11-14T08:31:11.028Z",
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
		"liquidityUsd": 2281550.33,
		"hash": "9ab132c631c9d37df4e78321e081dca1b0f724343e5662e52d68112a439da806"
	},
	{
		"id": "1410c5dbd1fc",
		"ts": "2026-11-14T08:31:11.248Z",
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
		"liquidityUsd": 2002002.08,
		"hash": "1410c5dbd1fc5d00648bf584a7d289faac8ad776159b6d8161bf4d82388729a5"
	},
	{
		"id": "2597dff1ce9e",
		"ts": "2026-11-14T08:31:11.469Z",
		"symbol": "PONS",
		"token": "0x304B826A47a5E6CB2766aD9069f670651c9F847d",
		"score": 71,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.42,
		"flags": [
			"low_liquidity",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 0,
		"hash": "2597dff1ce9ef642b4ebd69a2c5a4e8120ce8fc9eceecc615beb9374780fd59e"
	},
	{
		"id": "57f175ef4457",
		"ts": "2026-11-14T08:31:11.703Z",
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
		"liquidityUsd": 756489.03,
		"hash": "57f175ef4457d69c4d3e277aab2fca2fcf836484acd8c5f1fce850192044887f"
	},
	{
		"id": "19df3f7f4d03",
		"ts": "2026-11-14T08:31:11.926Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1669190,
		"hash": "19df3f7f4d03753400955a1030662220a5f704ada2611415c32209552ee315b0"
	},
	{
		"id": "f159caedad11",
		"ts": "2026-11-14T08:31:12.147Z",
		"symbol": "SOGNI",
		"token": "0xE014d2A4da6E450f21b5050120D291e63c8940FD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 416344.3,
		"hash": "f159caedad113376dd6454f99c022cc7a2d4f6daf93b7e6c15d713cc5a742609"
	},
	{
		"id": "7317839bfcf1",
		"ts": "2026-11-14T08:31:12.368Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1817756.51,
		"hash": "7317839bfcf1fdfac232ce5df4d6f5942fe1384d8d8e03f20636ddf895b64951"
	},
	{
		"id": "ced3b0650e99",
		"ts": "2026-11-14T08:31:12.589Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 615251.45,
		"hash": "ced3b0650e99ee666d6aade591df00d04aee780998c8385baab113fd5079c2fc"
	},
	{
		"id": "a6d5e3279a35",
		"ts": "2026-11-14T01:13:53.308Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 124717712.64,
		"hash": "a6d5e3279a3502c37d5c88c66ff1aadc44d814c871f83c97fe177ffea924b129"
	},
	{
		"id": "b0110bcd037d",
		"ts": "2026-11-14T01:13:53.573Z",
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
		"liquidityUsd": 13564139.28,
		"hash": "b0110bcd037d8d7a121c98e3434b888b4d29ca2b03cdc0fed67c4443cca7b74c"
	},
	{
		"id": "5ceb81707a10",
		"ts": "2026-11-14T01:13:53.822Z",
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
		"liquidityUsd": 215559.99,
		"hash": "5ceb81707a10a50c0c116e0e2ab70fe06f3f89694aeb16c518882d83d1e1f586"
	},
	{
		"id": "935e6618bea7",
		"ts": "2026-11-14T01:13:54.072Z",
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
		"liquidityUsd": 3888589.04,
		"hash": "935e6618bea79ade7e0c925c772f7d364230b360213bb6eda6f5ac62693916fb"
	},
	{
		"id": "9e902e48fc77",
		"ts": "2026-11-14T01:13:54.313Z",
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
		"liquidityUsd": 1048166.76,
		"hash": "9e902e48fc77ef90d75a7a614b0e4d8a586e23b68c8722873853f548fc0df730"
	},
	{
		"id": "3a442aa4d831",
		"ts": "2026-11-14T01:13:54.598Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 897181.56,
		"hash": "3a442aa4d831e9ef6b194d613db54f6c532c4aa7f97948af12194db5c38ab476"
	},
	{
		"id": "557a822abd52",
		"ts": "2026-11-14T01:13:54.856Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3888589.04,
		"hash": "557a822abd52e649286502e04f0d0801c95cc4207b517113923269235367104a"
	},
	{
		"id": "c641e33292c7",
		"ts": "2026-11-14T01:13:55.104Z",
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
		"liquidityUsd": 1840003.46,
		"hash": "c641e33292c7304a5305403f8cf84249633468e906d8f68bc81e8179f03e43f0"
	},
	{
		"id": "65f70bd68d8e",
		"ts": "2026-11-14T01:13:55.355Z",
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
		"liquidityUsd": 1454471.34,
		"hash": "65f70bd68d8ec38726dd02d6aba83e20ff84fb4c70c35fc8b5b0bfd6cd0f3b9d"
	}
]
