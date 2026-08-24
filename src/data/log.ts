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
	"updatedAt": "2026-08-24T03:59:03.459Z",
	"tokensScored": 14198,
	"verdictsIssued": 14198,
	"safe": 12214,
	"risky": 996,
	"likelyRug": 988,
	"ticks": 824
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "184deed9899a",
		"ts": "2026-08-24T03:58:58.004Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111370718.68,
		"hash": "184deed9899a9406d907bea94998b2bbdb1d59336d28a581e5f7fee325df8367"
	},
	{
		"id": "2f8707b7a73a",
		"ts": "2026-08-24T03:58:58.456Z",
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
		"liquidityUsd": 16748572.58,
		"hash": "2f8707b7a73a485e79d4e270cc8f8b8a551f5e6b915dfcafa76ae544497671b7"
	},
	{
		"id": "f1b845d75f71",
		"ts": "2026-08-24T03:58:58.988Z",
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
		"liquidityUsd": 898864.15,
		"hash": "f1b845d75f716d1b8da4752ca7e85927bd26246584e64f88253aac2425e57fd3"
	},
	{
		"id": "5fc7b1309d7e",
		"ts": "2026-08-24T03:58:59.230Z",
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
		"liquidityUsd": 28471624.31,
		"hash": "5fc7b1309d7eb96efbce290a48e1f6a229b40df0fc31cadaee3e6a80fe327129"
	},
	{
		"id": "ee0c0699baba",
		"ts": "2026-08-24T03:58:59.504Z",
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
		"liquidityUsd": 3414809.56,
		"hash": "ee0c0699baba7901d6ee85bb66ade54647f90a2f150e746d9fc8f8bdf6b6109d"
	},
	{
		"id": "51ddb763c2e1",
		"ts": "2026-08-24T03:58:59.750Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1169298.11,
		"hash": "51ddb763c2e1e427ba4595889343a1db228d0fcbfb7f127c2cf4ee8d1c3174bb"
	},
	{
		"id": "8d12a4f6dbd8",
		"ts": "2026-08-24T03:58:59.985Z",
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
		"liquidityUsd": 498978.73,
		"hash": "8d12a4f6dbd85e28b28ea50f9e704f756cadb6c6372189e53f67efcd412aaa09"
	},
	{
		"id": "26086442e6a0",
		"ts": "2026-08-24T03:59:00.245Z",
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
		"liquidityUsd": 1908139.36,
		"hash": "26086442e6a0d480daf768189ef4987ea27529a9ddb7f1b9df24a75273054fd2"
	},
	{
		"id": "99aeac038524",
		"ts": "2026-08-24T03:59:00.493Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 624589.56,
		"hash": "99aeac038524ea5120ca6260e7a223bacb7c1a477653c37316e736aa2f6460ba"
	},
	{
		"id": "f11bded9371b",
		"ts": "2026-08-24T03:59:00.999Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1352649,
		"hash": "f11bded9371bdd53e6b7f911493d8bc57b02314c724c4d06c619590c648168e0"
	},
	{
		"id": "5632d61b02f8",
		"ts": "2026-08-24T03:59:01.251Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 640199.59,
		"hash": "5632d61b02f853b5ee3dd320ed452a4f315496c63b010908544cb3179ee07f40"
	},
	{
		"id": "1c5ae4ef548c",
		"ts": "2026-08-24T03:59:01.510Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 877415.18,
		"hash": "1c5ae4ef548c418aaf5acaeccd6ced1f848bb1b770600193c2f1c15c9146b553"
	},
	{
		"id": "16c7553b4229",
		"ts": "2026-08-24T03:59:01.750Z",
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
		"liquidityUsd": 4106179.41,
		"hash": "16c7553b42295a2364756f23968554585e3b31d36a42a30e2e1f153835e1c405"
	},
	{
		"id": "948eced65dfb",
		"ts": "2026-08-24T03:59:02.062Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 646724.67,
		"hash": "948eced65dfbc1813d868143092d87d7504047eb9f19480e387b6675d2ef9ee9"
	},
	{
		"id": "3211cb69a133",
		"ts": "2026-08-24T03:59:02.309Z",
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
		"liquidityUsd": 10996466.33,
		"hash": "3211cb69a133514ec92042623a9ed3e569773166817f76066a50daa85fb07bf0"
	},
	{
		"id": "0e31ec861fd3",
		"ts": "2026-08-24T03:59:02.543Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 99440.57,
		"hash": "0e31ec861fd38e156bee29946240859ab29fcc8545b83bba4f03b1e5e48e6915"
	},
	{
		"id": "1ca1d41ed716",
		"ts": "2026-08-24T03:59:02.785Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 112903.42,
		"hash": "1ca1d41ed716bb5a705f961183d01c2decdbc8d6ec3e355237e1d812dca22a25"
	},
	{
		"id": "fa7b93e96bdf",
		"ts": "2026-08-24T03:59:03.016Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 264912.54,
		"hash": "fa7b93e96bdf47f13b0da60aa2e6244fcc85d30c4efe723e28d1a90142ca1cc7"
	},
	{
		"id": "c929c9188a96",
		"ts": "2026-08-24T03:59:03.234Z",
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
		"liquidityUsd": 831381.55,
		"hash": "c929c9188a9655f97a5c94db9b71ef4c273be43685ae22bff5cf087b9fd81ab3"
	},
	{
		"id": "412468df1701",
		"ts": "2026-08-24T03:59:03.459Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4210915.71,
		"hash": "412468df170159603b6bed4fc09ef8b534cecf9546db84ad6d1a444d40c13b5c"
	},
	{
		"id": "58dbc2fb729e",
		"ts": "2026-08-24T02:58:58.669Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111543584.2,
		"hash": "58dbc2fb729eb4ed6f865c425d5b6b24d99172e3d7ed3f6e76b53217570b5ad0"
	},
	{
		"id": "1514a6716650",
		"ts": "2026-08-24T02:58:59.119Z",
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
		"liquidityUsd": 14708299.64,
		"hash": "1514a6716650f13dbb3754131d177b1a217d18a7952bd62fb96b92f481df4722"
	},
	{
		"id": "013fc74e5837",
		"ts": "2026-08-24T02:58:59.559Z",
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
		"liquidityUsd": 900981.94,
		"hash": "013fc74e583724a631d9a6b25de8ec1ae81ee8e5caa9e98bc2904e59c7dcee91"
	},
	{
		"id": "d8b69ba9e488",
		"ts": "2026-08-24T02:58:59.801Z",
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
		"liquidityUsd": 28535290.12,
		"hash": "d8b69ba9e488f3f15384778da006b808ef02f742a9913916429bbf5dcf1bfda5"
	},
	{
		"id": "fabacf91ae34",
		"ts": "2026-08-24T02:59:00.042Z",
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
		"liquidityUsd": 3423374.74,
		"hash": "fabacf91ae3431fdac86b4a0adda11e2dc7bdd211f48e4a8619e83ec76af5a34"
	},
	{
		"id": "819628ab7d39",
		"ts": "2026-08-24T02:59:00.294Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1182902.15,
		"hash": "819628ab7d39b37055e091ec5c4802d7cb6dafb1571a91e7dde0babd34268fa3"
	},
	{
		"id": "0677b4ec0b63",
		"ts": "2026-08-24T02:59:00.532Z",
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
		"liquidityUsd": 500278.95,
		"hash": "0677b4ec0b63eec8ab7fd6bb97bf1fdb3f6583120769499f2cc95259eadefd12"
	},
	{
		"id": "fbedb59e25f2",
		"ts": "2026-08-24T02:59:00.788Z",
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
		"liquidityUsd": 1913313.42,
		"hash": "fbedb59e25f2506059a5b9313be22e5a8c1c5e2cdde8c72b532d14cc06f7ea31"
	},
	{
		"id": "c1c94d2d1784",
		"ts": "2026-08-24T02:59:01.152Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 597021.95,
		"hash": "c1c94d2d1784a4abb50200360234a5939d6949393da1a7595bb7a88553817532"
	},
	{
		"id": "905660c8dd7e",
		"ts": "2026-08-24T02:59:01.405Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1335281.21,
		"hash": "905660c8dd7e5e2ab1bdb584c890f5a926052371d167e3f8fa16159e5cf9d496"
	},
	{
		"id": "4e1db06a3ae7",
		"ts": "2026-08-24T02:59:01.684Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 648620.27,
		"hash": "4e1db06a3ae70f8c99d49bf463a8ea9731a00ce385bc4e9d715162d069d91350"
	},
	{
		"id": "0a537ac61553",
		"ts": "2026-08-24T02:59:02.154Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 835842.02,
		"hash": "0a537ac61553ace4b38809842a9769e2ae9b11bd818c0de0b59c79fec08b8349"
	},
	{
		"id": "f816cf9db458",
		"ts": "2026-08-24T02:59:02.390Z",
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
		"liquidityUsd": 4110144.84,
		"hash": "f816cf9db45839eb2ca615d3ab2cd24cb39975d0b1f77cf7166f4f8538867511"
	},
	{
		"id": "37a86e7681ce",
		"ts": "2026-08-24T02:59:02.879Z",
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
		"liquidityUsd": 11090124.67,
		"hash": "37a86e7681ce1eb7173b767bde84996b05ac3c2fb0589cb84227d34048abc598"
	},
	{
		"id": "5a74c2c540a7",
		"ts": "2026-08-24T02:59:03.170Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 647522.64,
		"hash": "5a74c2c540a7242ffbcc3cf408b5a32fe8100451772814e244080e2cb01ce013"
	},
	{
		"id": "b66dac959abe",
		"ts": "2026-08-24T02:59:03.389Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 296254.54,
		"hash": "b66dac959abede68bc07e8cfdf5db96a57d06d771bd5da31336212dee65d7481"
	},
	{
		"id": "4daf879c55c9",
		"ts": "2026-08-24T02:59:03.609Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 115221.06,
		"hash": "4daf879c55c96e5d8c1c6e49e431fd2c37349a73131feb470503b308ccfaac2f"
	},
	{
		"id": "d13780c1e9e5",
		"ts": "2026-08-24T02:59:03.830Z",
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
		"liquidityUsd": 809261.94,
		"hash": "d13780c1e9e571bd44e07f15c4a36152e4663eb0a237070d723af5fb59adf304"
	},
	{
		"id": "515dcc1653ab",
		"ts": "2026-08-24T02:59:04.075Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 100178.52,
		"hash": "515dcc1653ab2581e08414bb8187089262871b178e9c456a9e419bd8423129eb"
	},
	{
		"id": "c62199e8fdd1",
		"ts": "2026-08-24T02:59:04.296Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4226851.26,
		"hash": "c62199e8fdd17a149e7db711ef8639da946c6ac8f7b4037cac0efa7b824a9c8c"
	},
	{
		"id": "53b678410163",
		"ts": "2026-08-24T01:02:59.352Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111664990.96,
		"hash": "53b678410163a2b48952157763312fc4467933165564ac60de28182e109f9074"
	},
	{
		"id": "b2ea89e1f7b1",
		"ts": "2026-08-24T01:02:59.800Z",
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
		"liquidityUsd": 18964360.37,
		"hash": "b2ea89e1f7b109b24cf6b4eaef025ca0e15180f33a0650d33c522a7d115bc028"
	},
	{
		"id": "23b18c7c9517",
		"ts": "2026-08-24T01:03:00.054Z",
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
		"liquidityUsd": 894754.72,
		"hash": "23b18c7c9517db23c7aa910d3a0e6efd41f5b29efd09f5f2d163791b3eb9a676"
	},
	{
		"id": "85cdbb945d94",
		"ts": "2026-08-24T01:03:00.531Z",
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
		"liquidityUsd": 28604106.85,
		"hash": "85cdbb945d948e661de2c197cdadd47026bc9d226c27f3a57b2261aecd5f16e7"
	},
	{
		"id": "8fc799b0a688",
		"ts": "2026-08-24T01:03:00.981Z",
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
		"liquidityUsd": 3480839.84,
		"hash": "8fc799b0a688d9a49ed167ecceb9d5bf8d79e09bc164103a7094142998b8af78"
	},
	{
		"id": "fc932ccb01b4",
		"ts": "2026-08-24T01:03:01.424Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1194377.22,
		"hash": "fc932ccb01b420809e4e267973daff7051dea152d9890ade34039f79b4ec7e80"
	},
	{
		"id": "289e9b5967e4",
		"ts": "2026-08-24T01:03:01.690Z",
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
		"liquidityUsd": 500783.86,
		"hash": "289e9b5967e43d2d981b90052af2c00d77bd0242fd66e7294ad2f658d5581864"
	},
	{
		"id": "436aa12a5c4e",
		"ts": "2026-08-24T01:03:01.974Z",
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
		"liquidityUsd": 1930559.74,
		"hash": "436aa12a5c4eb4190c21b7ff1b38eaf8989ca05bfc9b584c215664caf7b8a546"
	},
	{
		"id": "f28571f06feb",
		"ts": "2026-08-24T01:03:02.222Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 602125.3,
		"hash": "f28571f06feb59fccf425238adb517312b6b6a88449147bdabc394ea04dae3c5"
	},
	{
		"id": "277f681f9a6a",
		"ts": "2026-08-24T01:03:02.513Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1337525.41,
		"hash": "277f681f9a6a36a45764312cf271bd80a7f430f686278349b608c887ccff16dd"
	},
	{
		"id": "28d2d97cbffc",
		"ts": "2026-08-24T01:03:02.787Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 655758.07,
		"hash": "28d2d97cbffc52b467eadfa4f25074e9acce6b494701fa4e8fe2a681da29fd46"
	},
	{
		"id": "a0c260a7d353",
		"ts": "2026-08-24T01:03:03.028Z",
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
		"liquidityUsd": 4133930.95,
		"hash": "a0c260a7d35394619a6d2dcbc922eebcec8c13a69e7d4d19ab9000a8c6aae46d"
	},
	{
		"id": "9324999c4c53",
		"ts": "2026-08-24T01:03:03.550Z",
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
		"liquidityUsd": 11097206.5,
		"hash": "9324999c4c53b01127ed026ebdd707d50fea87e2940d490ec67a4f18502e96fb"
	},
	{
		"id": "ce0bc0e3a99f",
		"ts": "2026-08-24T01:03:03.790Z",
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
		"liquidityUsd": 838682.22,
		"hash": "ce0bc0e3a99fa29905e2c51e7b6edd66dad79fc2aa46b16a4bd1d9a2cbd88e00"
	},
	{
		"id": "350ab6a7934e",
		"ts": "2026-08-24T01:03:04.023Z",
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
		"liquidityUsd": 675609.14,
		"hash": "350ab6a7934e45d9c6978b8ec1d788eb17e57a356973882af0a6b2eaf0e275d3"
	},
	{
		"id": "d5099ae7e014",
		"ts": "2026-08-24T01:03:04.270Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3418705.85,
		"hash": "d5099ae7e014ae278a9e50fb54aadbf91248f89b1119408f612145aa6d87b7bb"
	},
	{
		"id": "c1ed7fa5eb2c",
		"ts": "2026-08-24T01:03:04.500Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 264746.73,
		"hash": "c1ed7fa5eb2cd973b37eb6b15c94847da35e39479ba92fbdbbca7634d904b38a"
	},
	{
		"id": "8eda8b6121fc",
		"ts": "2026-08-24T01:03:04.738Z",
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
		"liquidityUsd": 832423.23,
		"hash": "8eda8b6121fca1efedfe462ed7de54783f38fcf5ec4549ceeb1d19fe7fe41631"
	},
	{
		"id": "d608aa5d46f2",
		"ts": "2026-08-24T01:03:04.975Z",
		"symbol": "GAME",
		"token": "0x1C4CcA7C5DB003824208aDDA61Bd749e55F463a3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2897127.21,
		"hash": "d608aa5d46f22358faf2843ade194af4b3a39ab5951e5027638e63531401741c"
	},
	{
		"id": "e5896d30fdd8",
		"ts": "2026-08-24T01:03:05.907Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 121530.87,
		"hash": "e5896d30fdd8b5e0b406cb1780173be38a188fb14c7e6c7f8a14336d3da40b4d"
	},
	{
		"id": "6699185ed75d",
		"ts": "2026-08-23T23:16:55.137Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111491437.08,
		"hash": "6699185ed75dcf800dbfd7dd1b25aa95014984f0530dc12e598a676a555f525b"
	},
	{
		"id": "57ef43fe9711",
		"ts": "2026-08-23T23:16:55.370Z",
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
		"liquidityUsd": 16642243.02,
		"hash": "57ef43fe97112138ee6daa7f1993c9eba9833893297f4a5d9fe87832071a8130"
	},
	{
		"id": "c27fef0b2d2a",
		"ts": "2026-08-23T23:16:55.818Z",
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
		"liquidityUsd": 891768.43,
		"hash": "c27fef0b2d2ac7906c7e51162ef6d187dcc30e6a5db30c56fbb3f99985024e82"
	},
	{
		"id": "b312cd6e09db",
		"ts": "2026-08-23T23:16:56.048Z",
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
		"liquidityUsd": 28683347.23,
		"hash": "b312cd6e09dbd80a834830d6b01dac775a7ca9dac18550d73a55eb4dd2d2c2bb"
	},
	{
		"id": "b1119f234b10",
		"ts": "2026-08-23T23:16:56.288Z",
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
		"liquidityUsd": 3482466.49,
		"hash": "b1119f234b1022612b4a54f2b40272426d1f9d305f9db92e1a6fbcd8b39f0e8d"
	},
	{
		"id": "7786ae4074fb",
		"ts": "2026-08-23T23:16:56.523Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1220626.15,
		"hash": "7786ae4074fb258b9ab035a4cb2857116973c2423320cabef62f7fea65b0eeba"
	},
	{
		"id": "382a6f1614c3",
		"ts": "2026-08-23T23:16:56.781Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 910779.64,
		"hash": "382a6f1614c3827b5f061e4c5de1809465d6879859121295a3c9039844476f83"
	},
	{
		"id": "82ced0566968",
		"ts": "2026-08-23T23:16:57.015Z",
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
		"liquidityUsd": 1921129.59,
		"hash": "82ced0566968ecd4e8a675a17fab9b0cbc394059f5fdf83c5430d106c91baafa"
	},
	{
		"id": "76471be435ab",
		"ts": "2026-08-23T23:16:57.242Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1316757.59,
		"hash": "76471be435ab08e79bba2e3bdec5454381e7402a01f4e075cff8ea12be2cb1ae"
	},
	{
		"id": "2d6ac8a9c755",
		"ts": "2026-08-23T23:16:57.478Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 640188.05,
		"hash": "2d6ac8a9c75516537890ffda9aa5ca2be9a60fa0e02d0df3955f65b43d8fbd5a"
	},
	{
		"id": "7774cac5888c",
		"ts": "2026-08-23T23:16:57.687Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 654795.64,
		"hash": "7774cac5888c00037cac7634ed207e14dd2b6c9dcdcb39bd309806c2a3d8935f"
	},
	{
		"id": "7926f2fc555c",
		"ts": "2026-08-23T23:16:57.910Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4106701.27,
		"hash": "7926f2fc555c04e58e26bfe15047586432be5a4d32f446788593d8c56e78bd06"
	},
	{
		"id": "b265e3990891",
		"ts": "2026-08-23T23:16:58.125Z",
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
		"liquidityUsd": 882908.8,
		"hash": "b265e399089173d729a6f88a92d80fccd2dc78a486d2700a7556b7b2d23a37b9"
	},
	{
		"id": "12f721e27365",
		"ts": "2026-08-23T23:16:58.341Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11062362.62,
		"hash": "12f721e2736519dfb88e14fc3b3acaf7ef9f9ed25f0e359cdc5b3d1851db1b1a"
	},
	{
		"id": "01c8ead8d4ea",
		"ts": "2026-08-23T23:16:58.559Z",
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
		"liquidityUsd": 685298.86,
		"hash": "01c8ead8d4ea4549b30707c6940de28ef5f81e3d60bf223404394200cd6b2f3f"
	},
	{
		"id": "a09e4385bf36",
		"ts": "2026-08-23T23:16:58.771Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3480578.98,
		"hash": "a09e4385bf369cb7e49490869ecd7fb64a7bbd6333bfc0a6cbab5c3c8ff5fdd2"
	},
	{
		"id": "ec8198532142",
		"ts": "2026-08-23T23:16:58.989Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 270918.1,
		"hash": "ec8198532142871002c949dcea921038b5e38c219dbd2cb02335814dba9073f4"
	},
	{
		"id": "9e0d5e8f4e1d",
		"ts": "2026-08-23T23:16:59.211Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 117287.18,
		"hash": "9e0d5e8f4e1d01dd2a4e80608e366f1dcfbb98bc71addfe611ebc287dbc639b6"
	},
	{
		"id": "31d8b9d51dea",
		"ts": "2026-08-23T23:16:59.437Z",
		"symbol": "GAME",
		"token": "0x1C4CcA7C5DB003824208aDDA61Bd749e55F463a3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2939570.56,
		"hash": "31d8b9d51dea17668dc2bb05733d93bef2ee6a025146ca46f4e056fd215e1e3d"
	},
	{
		"id": "5ca4646c90ed",
		"ts": "2026-08-23T23:16:59.654Z",
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
		"liquidityUsd": 853444.71,
		"hash": "5ca4646c90edccf8840aff5d4529f15da4dd18589e35e1ce0e1829a3a97fe178"
	},
	{
		"id": "6a817f236254",
		"ts": "2026-08-23T22:17:11.738Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111673439.27,
		"hash": "6a817f2362541479ae8c1947f1cc58db42245c097e9b62f9370c337c5ea46871"
	},
	{
		"id": "9450f1ca9ef7",
		"ts": "2026-08-23T22:17:12.177Z",
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
		"liquidityUsd": 15782928.72,
		"hash": "9450f1ca9ef72493d6eb2b5e1670d0d5704cc7a11301c9b86efb510fed46dcde"
	},
	{
		"id": "87938887ba01",
		"ts": "2026-08-23T22:17:12.628Z",
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
		"liquidityUsd": 897417.31,
		"hash": "87938887ba01ab6267d695f96809808184b942b47fddd11dad359846e4433b89"
	},
	{
		"id": "b1beafc6406e",
		"ts": "2026-08-23T22:17:13.092Z",
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
		"liquidityUsd": 28803293.04,
		"hash": "b1beafc6406eae47684eb3faa003f749bd65cd2cc9c419323298cd0fab130aee"
	},
	{
		"id": "e6a8427f7614",
		"ts": "2026-08-23T22:17:13.553Z",
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
		"liquidityUsd": 3502527.18,
		"hash": "e6a8427f7614ce25fff7a9f24b0485bd56791b077dcfbe81f0f6f2db06e2ad62"
	},
	{
		"id": "4b1bb2a10df5",
		"ts": "2026-08-23T22:17:13.796Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1222524.6,
		"hash": "4b1bb2a10df57de33ad5adcd983af348b8984b10eed5e7ae14077baf813edef9"
	},
	{
		"id": "8c35536a6c4a",
		"ts": "2026-08-23T22:17:14.036Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 914452.96,
		"hash": "8c35536a6c4a206e931f755ff5ae8ef564a8ba2d9120e682ec12b18dc5238154"
	},
	{
		"id": "dddfbabf7beb",
		"ts": "2026-08-23T22:17:14.278Z",
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
		"liquidityUsd": 1839251.45,
		"hash": "dddfbabf7beb24fae695f49ccd64eb3a14d1974ee08ef231a8ecce8a7c24f099"
	},
	{
		"id": "a12011f2a163",
		"ts": "2026-08-23T22:17:14.531Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1293749.57,
		"hash": "a12011f2a163c428ac33cd0a04740adabbe4c08a7d5a16cfa4838f1b4807a8bc"
	},
	{
		"id": "95201b79b32c",
		"ts": "2026-08-23T22:17:14.781Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 668150.34,
		"hash": "95201b79b32c0057f51ccfb725dc8b563be2ba5a56fbf3befa02005a2040c0a8"
	},
	{
		"id": "8fa03c80f69b",
		"ts": "2026-08-23T22:17:15.007Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 650604.56,
		"hash": "8fa03c80f69b936f4aee960676dce500388383e54b8b504bb10f21345d56e437"
	},
	{
		"id": "5472550a1d21",
		"ts": "2026-08-23T22:17:15.232Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4109857.63,
		"hash": "5472550a1d21e6d485a82f4a9eedcde9114c1bd6ebe0ffe33466fbad48196367"
	},
	{
		"id": "e168b071e815",
		"ts": "2026-08-23T22:17:15.454Z",
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
		"liquidityUsd": 849694.01,
		"hash": "e168b071e8153211902c6b413dcade5dea6b08243680f90f6e6bb9b5a0c29d61"
	},
	{
		"id": "c5a28c985077",
		"ts": "2026-08-23T22:17:15.688Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11191272.28,
		"hash": "c5a28c985077700bc61287cc63af40b0c3ba60376aa39589b70f02871146539b"
	},
	{
		"id": "211ef5f0648e",
		"ts": "2026-08-23T22:17:15.921Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3443890.71,
		"hash": "211ef5f0648e1b85df0085ec2f1ef7d63fd2ff199b41a3f14e60571acf643f04"
	},
	{
		"id": "08be1ad344d1",
		"ts": "2026-08-23T22:17:16.175Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 272571.56,
		"hash": "08be1ad344d1a7ecc7a0b5c90fd1ddeebbfc8408ae8fd97c966b0c8e300f7bf0"
	},
	{
		"id": "de8226be77a9",
		"ts": "2026-08-23T22:17:16.396Z",
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
		"liquidityUsd": 687911.92,
		"hash": "de8226be77a938adc66a8fe56a21c080883730b3e5bf3ffc94cff77589df6287"
	},
	{
		"id": "277eb34fac27",
		"ts": "2026-08-23T22:17:16.618Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 100113.12,
		"hash": "277eb34fac273b6390bfe3ffac878ac9c64a4308c2d39b2d4a30bdea6c08ffb5"
	},
	{
		"id": "2c8939afa11a",
		"ts": "2026-08-23T22:17:16.932Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 765639.27,
		"hash": "2c8939afa11a42c60af8d41cb596072e3b600ca5e3ce1ce249d69b10237ae06d"
	},
	{
		"id": "9173a60ed02c",
		"ts": "2026-08-23T22:17:17.162Z",
		"symbol": "GAME",
		"token": "0x1C4CcA7C5DB003824208aDDA61Bd749e55F463a3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2913409.03,
		"hash": "9173a60ed02c2010886b12553291581118437fb8c9b9959fef9d6088be7999b6"
	},
	{
		"id": "320d56511e87",
		"ts": "2026-08-23T21:16:56.296Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111684851.8,
		"hash": "320d56511e878d6dd8b15399779311eb582da01bcf6024dfd156a86dd1ea6b94"
	},
	{
		"id": "2dd2d903619d",
		"ts": "2026-08-23T21:16:56.579Z",
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
		"liquidityUsd": 16972187.61,
		"hash": "2dd2d903619dd9bca96e5cf169ad7e3cceb948e115d04aad9c433e486b9d2254"
	},
	{
		"id": "2ba664a4f84f",
		"ts": "2026-08-23T21:16:56.945Z",
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
		"liquidityUsd": 902046.38,
		"hash": "2ba664a4f84fd6eb54c51e59f417d4879749fedcc6a991b5803a90720f88e05a"
	},
	{
		"id": "32d64934df38",
		"ts": "2026-08-23T21:16:57.223Z",
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
		"liquidityUsd": 28846225.98,
		"hash": "32d64934df388b9282f9bdc0b5870e35acdb700fd7154a30d38a9476b30fb6aa"
	},
	{
		"id": "5d9a10a4a521",
		"ts": "2026-08-23T21:16:57.689Z",
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
		"liquidityUsd": 3506265.48,
		"hash": "5d9a10a4a5210415861505a0c5c0e1a3fa07e630d6fe172b340b1f169c5b13bc"
	},
	{
		"id": "20276904f4fc",
		"ts": "2026-08-23T21:16:57.940Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1240668.94,
		"hash": "20276904f4fcdf45d3fd9222d99d23638e752e0afb5bea76e0d507057796b248"
	},
	{
		"id": "f12a665446f5",
		"ts": "2026-08-23T21:16:58.196Z",
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
		"liquidityUsd": 385950.16,
		"hash": "f12a665446f5bca4ab04cfa6a5e86d686f77b14bdc6bf559e3b310ba698d4efb"
	},
	{
		"id": "2e5a363b3c04",
		"ts": "2026-08-23T21:16:58.441Z",
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
		"liquidityUsd": 1841897.96,
		"hash": "2e5a363b3c049ab416e8b8ff74f97dbc3c43e32d03b9b5737b4cf20316d9bb18"
	},
	{
		"id": "b124b2ef7625",
		"ts": "2026-08-23T21:16:58.669Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1300709.94,
		"hash": "b124b2ef76253103e67e3611a8977823dad5cb377ff602cd3601c3f799f8c0ad"
	},
	{
		"id": "4eca67be6cfc",
		"ts": "2026-08-23T21:16:58.913Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 627173.15,
		"hash": "4eca67be6cfcbb75fd11eabe0aed29e9c22430842d238f8f4e46c45cee71e75a"
	},
	{
		"id": "fb85d43d03c9",
		"ts": "2026-08-23T21:16:59.134Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 662256.94,
		"hash": "fb85d43d03c9062ff68bc57ab689e36279dcfc276ba9bfbac11be3412cefcd89"
	},
	{
		"id": "ce259814b2b3",
		"ts": "2026-08-23T21:16:59.356Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4103268.07,
		"hash": "ce259814b2b332e0f0a72af233f2ceffde831e5f7b37150027d7d0a152182cf7"
	},
	{
		"id": "8349521e391e",
		"ts": "2026-08-23T21:16:59.578Z",
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
		"liquidityUsd": 886613.87,
		"hash": "8349521e391ecdd3550507a3eb8a9da18ddaf2d4e5c0c574b47862aa3735fe7b"
	},
	{
		"id": "6b2974eb4e3a",
		"ts": "2026-08-23T21:16:59.802Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11175242.96,
		"hash": "6b2974eb4e3afb6f600a59a516ea331d288ca41e98f617bd10e06337fefbc826"
	},
	{
		"id": "2276027a1318",
		"ts": "2026-08-23T21:17:00.017Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3441871.01,
		"hash": "2276027a1318f77327e91c34034fd9e9bab66cf8195941989d81fa877f02f962"
	},
	{
		"id": "bb39822610e6",
		"ts": "2026-08-23T21:17:00.250Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 787562.34,
		"hash": "bb39822610e63fc8c4f031ce52ad591fd22a38c817d306971c72110deff1bf45"
	},
	{
		"id": "7ab565b030df",
		"ts": "2026-08-23T21:17:00.490Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 275113.82,
		"hash": "7ab565b030df0b5553e2cdbc6a1773af9a796f845ad4595b6650e11489d3a1d8"
	},
	{
		"id": "029e05ec91af",
		"ts": "2026-08-23T21:17:00.946Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 105193.4,
		"hash": "029e05ec91afb451d12138cd985fc7a8fa7c4e41f9be3d33332f94a692e6158e"
	},
	{
		"id": "e232dec42fc1",
		"ts": "2026-08-23T21:17:01.189Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 671956.67,
		"hash": "e232dec42fc1b61a7be400eaecd8ca213a75efc207aea84a99e623a390032e86"
	},
	{
		"id": "ffcc12ed90fc",
		"ts": "2026-08-23T21:17:01.427Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 96906.9,
		"hash": "ffcc12ed90fc5db4fd9e91b05c6496b1ec67a24f594fa16d12ff8c87a05d66fb"
	},
	{
		"id": "165a2a68c312",
		"ts": "2026-08-23T20:17:39.211Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111300869.53,
		"hash": "165a2a68c3124a96566a4c3854b73f9d1aef798a211d0d998a962388528fef0c"
	},
	{
		"id": "65d8552f6b39",
		"ts": "2026-08-23T20:17:39.646Z",
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
		"liquidityUsd": 16988986.78,
		"hash": "65d8552f6b39afa32be20a91ce6167125e6119ec8930fb9e5b939ffa7a48d54c"
	},
	{
		"id": "76875690767a",
		"ts": "2026-08-23T20:17:39.896Z",
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
		"liquidityUsd": 893420.68,
		"hash": "76875690767a8668083a2ca121d1f6abf06368a2faef7b3a10f9b221b3694c02"
	},
	{
		"id": "59eac56cf4ae",
		"ts": "2026-08-23T20:17:40.137Z",
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
		"liquidityUsd": 28751210.89,
		"hash": "59eac56cf4ae46e62e7e75d09ce2355f27cb114c9e3cd0936a040e23d484a1b4"
	},
	{
		"id": "5252a01dc22a",
		"ts": "2026-08-23T20:17:40.391Z",
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
		"liquidityUsd": 3443508.29,
		"hash": "5252a01dc22aa8859e14c2f4d39387ea650f9bccd83c6b5eb88d941a60529500"
	},
	{
		"id": "e166d9120a79",
		"ts": "2026-08-23T20:17:40.647Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1214837.3,
		"hash": "e166d9120a79236837a5cc768172f834cb2483789fc62859f90a326b0c6dbd3a"
	},
	{
		"id": "7872604e67ea",
		"ts": "2026-08-23T20:17:40.932Z",
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
		"liquidityUsd": 383641.09,
		"hash": "7872604e67ea4cc95caee95c3da94dea233f2804f56ce06ede3fac0aaf279b43"
	},
	{
		"id": "19785d179052",
		"ts": "2026-08-23T20:17:41.263Z",
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
		"liquidityUsd": 1822608.83,
		"hash": "19785d179052e7a002b9adf85b39e5b8bb22f95d8b9fab6cf2c59d1d4b040f52"
	},
	{
		"id": "b3f4c122126b",
		"ts": "2026-08-23T20:17:41.508Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1289719.96,
		"hash": "b3f4c122126b92151968750281d942d6b4bdc7a4a893442b3993001c08b92c4a"
	},
	{
		"id": "10ff6db8e477",
		"ts": "2026-08-23T20:17:41.833Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 642430.51,
		"hash": "10ff6db8e4776a188ddd660f75b7a0121bfa080d6c05031fc417bf7bc74f83fd"
	},
	{
		"id": "0e8b794682c6",
		"ts": "2026-08-23T20:17:42.059Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 660931.63,
		"hash": "0e8b794682c6a4a641926876f20b651038426a8e14d2fb636fe9707c5741a584"
	},
	{
		"id": "aaf3e969734c",
		"ts": "2026-08-23T20:17:42.283Z",
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
		"liquidityUsd": 866775.09,
		"hash": "aaf3e969734c3e13c679f1ceb959a29a163047edf5a290c9ffa6dad673941d5b"
	},
	{
		"id": "3bccb7e58a3a",
		"ts": "2026-08-23T20:17:42.513Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4067849.15,
		"hash": "3bccb7e58a3af87fce150039420125dae080fd19b18d02564b5f773b2f646c7f"
	},
	{
		"id": "cc1ea04222be",
		"ts": "2026-08-23T20:17:42.737Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11029325.98,
		"hash": "cc1ea04222be9370336aa959a276ab52cb0e20888bb8f80230c8519c28a68951"
	},
	{
		"id": "e4485d908bf1",
		"ts": "2026-08-23T20:17:42.962Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 767030.28,
		"hash": "e4485d908bf14396bda0b71d36f5db0c322c52fe52779d9a3d356c3b03bc3689"
	},
	{
		"id": "c16f14587630",
		"ts": "2026-08-23T20:17:43.185Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3363201.41,
		"hash": "c16f145876302f3c8860e374daa0a21c1222463c63e3e1c8e071c74ba24d80a2"
	},
	{
		"id": "75f8b34f02b1",
		"ts": "2026-08-23T20:17:43.624Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 109214.76,
		"hash": "75f8b34f02b1369212108256863622513d21c0d5a988c076cd094d9999be6aa4"
	},
	{
		"id": "3e5bec1b2f06",
		"ts": "2026-08-23T20:17:43.849Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 273838.72,
		"hash": "3e5bec1b2f0614811455944b6e48817c4bccd735712d5867b14e17fcac48658f"
	},
	{
		"id": "078c052da767",
		"ts": "2026-08-23T20:17:44.085Z",
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
		"liquidityUsd": 664218.36,
		"hash": "078c052da767c3c02bf0cf203d07583c837da7f372ed4b197b779e17734d6f57"
	},
	{
		"id": "67384a59b3c1",
		"ts": "2026-08-23T20:17:44.309Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 612652.85,
		"hash": "67384a59b3c1c8692666a31f1b80a3c41e8f5e5eb83d1d6ff896b7dd7bd9b1c0"
	},
	{
		"id": "387b8b80178c",
		"ts": "2026-08-23T19:19:31.365Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111240567.67,
		"hash": "387b8b80178c031bcb9cddf1e68ea9c594cde8c03ab5232f4d88d9095975dca8"
	},
	{
		"id": "19045a51ad52",
		"ts": "2026-08-23T19:19:31.614Z",
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
		"liquidityUsd": 16890237.31,
		"hash": "19045a51ad52cff1521d204176c6ef055ea2f4279d957d80eecc20159a7b6743"
	},
	{
		"id": "cc23cc248a5c",
		"ts": "2026-08-23T19:19:31.879Z",
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
		"liquidityUsd": 894748.66,
		"hash": "cc23cc248a5cd38f0930cf1a440a4eeffca9f94f9b051e1fdfa2abd3fd3f11fb"
	},
	{
		"id": "7da141b60ccb",
		"ts": "2026-08-23T19:19:32.217Z",
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
		"liquidityUsd": 28784447.61,
		"hash": "7da141b60ccb5c7be0339f5b801e4a9c1d759ba2c4c0c903619dcd80f9b8d909"
	},
	{
		"id": "9f25a9b47c37",
		"ts": "2026-08-23T19:19:32.455Z",
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
		"liquidityUsd": 3450525.59,
		"hash": "9f25a9b47c37e8cc1a070be976dc8b6bedbac1d238390fdb353744df1cd8f029"
	},
	{
		"id": "73c261bfdcdb",
		"ts": "2026-08-23T19:19:32.715Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1206098.19,
		"hash": "73c261bfdcdb8727f431672ee9b752f1712d3079b3ba99a0576f3c88566ff3e3"
	},
	{
		"id": "2004f9bbf115",
		"ts": "2026-08-23T19:19:32.957Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152786.29,
		"hash": "2004f9bbf1151de3eedf18250c62a41ab237dcf59130bf4d5f9a3832f5efa05d"
	},
	{
		"id": "e442d3c24590",
		"ts": "2026-08-23T19:19:33.267Z",
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
		"liquidityUsd": 1824782.08,
		"hash": "e442d3c24590a38b9315e144ab7baef458a50f3fb25f01a4a295082e95a56f85"
	},
	{
		"id": "d8f1154db631",
		"ts": "2026-08-23T19:19:33.526Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1316904.19,
		"hash": "d8f1154db631914d826044a13c01674b7b53a664e80fbb3eeda7bf358007cd22"
	},
	{
		"id": "f5af409cbc2d",
		"ts": "2026-08-23T19:19:33.775Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 656821.29,
		"hash": "f5af409cbc2daf7406964f31cff53aee7764648fb619e935f5d728343ee17f3a"
	},
	{
		"id": "c02d1440efcb",
		"ts": "2026-08-23T19:19:34.011Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 642388.45,
		"hash": "c02d1440efcb1fc754d88e6cf1840caf32c900cb501921e2e66a3911192fdb39"
	},
	{
		"id": "83c45401cd7b",
		"ts": "2026-08-23T19:19:34.230Z",
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
		"liquidityUsd": 853092.01,
		"hash": "83c45401cd7b8cb4f81e94c1535afd9a1bd43f6b12421a7978b6a489e606ef4d"
	},
	{
		"id": "b7ec273bc79f",
		"ts": "2026-08-23T19:19:34.469Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4095068.36,
		"hash": "b7ec273bc79f31fc9ee8990713a7caa57d7bd6942beb5c3a60f547ae7c657f9f"
	},
	{
		"id": "fdfe692c854c",
		"ts": "2026-08-23T19:19:34.703Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11134421.73,
		"hash": "fdfe692c854c98ca5f314dee772673fb47f615386f9a3ed52c16224733c3288b"
	},
	{
		"id": "8f5f17e2e311",
		"ts": "2026-08-23T19:19:34.924Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 788867.32,
		"hash": "8f5f17e2e311b8ba57087d682e5d292277322b4430184774dd850482d18491db"
	},
	{
		"id": "a1d674a0075f",
		"ts": "2026-08-23T19:19:35.162Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 106327.62,
		"hash": "a1d674a0075f5b5f7f0aa9b5c5ea33f9c37d851797e40c4bfbf489ed5892f5d4"
	},
	{
		"id": "1d003d6ce778",
		"ts": "2026-08-23T19:19:35.397Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3359352.14,
		"hash": "1d003d6ce77830904c5c0dd34da5e6ef6eb91b2c47ffed53ab45ddf0b59ea17c"
	},
	{
		"id": "8ba47346908f",
		"ts": "2026-08-23T19:19:35.624Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 265455.25,
		"hash": "8ba47346908fc70cce03e6afe77995db07aff51c81a97714b55777fdc3d4fcd8"
	},
	{
		"id": "1d072a796cfd",
		"ts": "2026-08-23T19:19:35.842Z",
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
		"liquidityUsd": 653538.69,
		"hash": "1d072a796cfd9a5ad4515ba13bfc3ac9934a242412c602c3512d00b0fe4f1c9f"
	},
	{
		"id": "165bccdf8069",
		"ts": "2026-08-23T19:19:36.080Z",
		"symbol": "ETHY",
		"token": "0xC44141a684f6AA4E36cD9264ab55550B03C88643",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 291311.56,
		"hash": "165bccdf806980c6b38367cf2f3e5b3a70c266f2767aa1031ef3ad7d1264fceb"
	},
	{
		"id": "382c241a1d23",
		"ts": "2026-08-23T18:22:27.940Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111319644.91,
		"hash": "382c241a1d23779578270b1d1489307134572e5e1e69dd9372bd75fad831b507"
	},
	{
		"id": "f740af66cdeb",
		"ts": "2026-08-23T18:22:28.592Z",
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
		"liquidityUsd": 16994892.58,
		"hash": "f740af66cdebceb17954d234aae7c0869f998f24bf82553957411783e7c90062"
	},
	{
		"id": "555115191d85",
		"ts": "2026-08-23T18:22:29.095Z",
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
		"liquidityUsd": 895435.23,
		"hash": "555115191d851463a365790e9abd10f67dd943f29d63e8d350606588e7dd9dc5"
	},
	{
		"id": "8e8b2ddf8431",
		"ts": "2026-08-23T18:22:29.542Z",
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
		"liquidityUsd": 28693945.95,
		"hash": "8e8b2ddf8431182ab987c54e438d7205ba891389b6b707bd1989d06a0a1deb07"
	},
	{
		"id": "6bc58431e650",
		"ts": "2026-08-23T18:22:29.995Z",
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
		"liquidityUsd": 3455472.3,
		"hash": "6bc58431e6503677a2ce5c674560f4d1f514bdd6b2b10533371ead26779823f9"
	},
	{
		"id": "dbb05077ecf6",
		"ts": "2026-08-23T18:22:30.229Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1194670.83,
		"hash": "dbb05077ecf62d4278cef494b638b3cdd0eca86fd23f9e7ab60f65bec858c104"
	},
	{
		"id": "776270d5ce7a",
		"ts": "2026-08-23T18:22:30.498Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152786.44,
		"hash": "776270d5ce7ab736ed10e2aea8e80963e0542e8ae1c3fea1e92f845c92bb5e87"
	},
	{
		"id": "09c6e6c74d37",
		"ts": "2026-08-23T18:22:30.840Z",
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
		"liquidityUsd": 1825836.83,
		"hash": "09c6e6c74d371955bdb42d9d07e4e5bb023f421dd40a036e7498327b915626c9"
	},
	{
		"id": "d9705a6fff0a",
		"ts": "2026-08-23T18:22:31.262Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1278323.15,
		"hash": "d9705a6fff0a69536db6a458ed9ef5562a8ad86899b1364c174bc623062e3eaa"
	},
	{
		"id": "f103f9d924e8",
		"ts": "2026-08-23T18:22:31.501Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 627413.98,
		"hash": "f103f9d924e82074efdc6a5132e69ded7a2abf0b3ed4a56e6d3045b4a385d1f3"
	},
	{
		"id": "1e301255eea2",
		"ts": "2026-08-23T18:22:31.715Z",
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
		"liquidityUsd": 872831.97,
		"hash": "1e301255eea2147a414a22e5f0912b5c4b8c6a17933f731a79b0cfe15dedf49c"
	},
	{
		"id": "ad59c5928153",
		"ts": "2026-08-23T18:22:31.944Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4096243.7,
		"hash": "ad59c592815331a8a36f91d643545acf5099bc3f7fa41c6f304982c678a98be4"
	},
	{
		"id": "e26a79e3d7da",
		"ts": "2026-08-23T18:22:32.166Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 643149.32,
		"hash": "e26a79e3d7da9fc10316ffc8a70635d7c609e5d114a6e30fcfcfc42fbc19f0b4"
	},
	{
		"id": "1182a1dc056c",
		"ts": "2026-08-23T18:22:32.492Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11143475.46,
		"hash": "1182a1dc056c64879978617f4a9f613af224635295dcfc9e054d5e192ec132eb"
	},
	{
		"id": "81596ae9e683",
		"ts": "2026-08-23T18:22:32.710Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 788784.38,
		"hash": "81596ae9e683566c5a367c6d97645e5e39405a61a62044cad9bb5fa0557a3927"
	},
	{
		"id": "1d90dc1f23dc",
		"ts": "2026-08-23T18:22:32.933Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3346528.97,
		"hash": "1d90dc1f23dcaa52deb17164c24e7df4b0dbfabdf6aa5f34a85f4c37291a6c24"
	},
	{
		"id": "cda81b5f3ac9",
		"ts": "2026-08-23T18:22:33.138Z",
		"symbol": "ETHY",
		"token": "0xC44141a684f6AA4E36cD9264ab55550B03C88643",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 294036.24,
		"hash": "cda81b5f3ac971b1e8557e628bcff46cf90c188c17b05cacb7debade73a9e8f8"
	},
	{
		"id": "8914095e0bea",
		"ts": "2026-08-23T18:22:33.356Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 109759.59,
		"hash": "8914095e0bea451a32e4ceb3275fda5a43e9b0a948a0a5a2eacd3074a616cfdc"
	},
	{
		"id": "bec0aa7d8195",
		"ts": "2026-08-23T18:22:33.582Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 263750.87,
		"hash": "bec0aa7d8195cf3f569eab3cd361034d2f7cd590c9420ff14e3b10c3a492bbb2"
	},
	{
		"id": "e462e3e5dd49",
		"ts": "2026-08-23T18:22:33.875Z",
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
		"liquidityUsd": 694630.96,
		"hash": "e462e3e5dd49e645b9cd53597d9eff25996c0a857b9e395ea51ec584ee376fcc"
	},
	{
		"id": "537d543aab24",
		"ts": "2026-08-23T17:16:32.192Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111313396.12,
		"hash": "537d543aab249a5d8527743c0b8fabc4a3f2eba433b0856cd28e84e679d4ec8e"
	},
	{
		"id": "71be6369ddf4",
		"ts": "2026-08-23T17:16:32.582Z",
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
		"liquidityUsd": 15222338.24,
		"hash": "71be6369ddf4f49b7640966e69183b78e9239edfbe9c80f78c5da3c6d57e68e2"
	},
	{
		"id": "8cf4f54f92c1",
		"ts": "2026-08-23T17:16:32.783Z",
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
		"liquidityUsd": 901640.95,
		"hash": "8cf4f54f92c15878a83fe36ab57471e86cd1418570788646965d57c8cfe9cf5f"
	},
	{
		"id": "b461c7639f4d",
		"ts": "2026-08-23T17:16:32.976Z",
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
		"liquidityUsd": 28737997.56,
		"hash": "b461c7639f4d65fa5ba3c4de7e1c31a954c65a773942357018cd187f739528be"
	},
	{
		"id": "72470ec9f2a9",
		"ts": "2026-08-23T17:16:33.168Z",
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
		"liquidityUsd": 3457919.83,
		"hash": "72470ec9f2a9d9fc5d40dba768e9f98bc93a790f7608e5166265a061a445dc4d"
	},
	{
		"id": "5a9ea4bbf2c9",
		"ts": "2026-08-23T17:16:33.387Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1187546.05,
		"hash": "5a9ea4bbf2c93936b140eb2a1eb6e5c4594ddcd7de7e9a2a59ec679c6960f16e"
	},
	{
		"id": "5a4a4fed4397",
		"ts": "2026-08-23T17:16:33.582Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152786.48,
		"hash": "5a4a4fed4397e65d90c8961a70b5e83d1097411a1badd7d61d3532c36f808046"
	},
	{
		"id": "6d62c2f2ec9d",
		"ts": "2026-08-23T17:16:33.786Z",
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
		"liquidityUsd": 1828004.25,
		"hash": "6d62c2f2ec9ddfa3dc14b638e6771d3e6c6e64aa0f1c8af86769f10860b50b24"
	},
	{
		"id": "f3e38369fd7e",
		"ts": "2026-08-23T17:16:34.007Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1317936.73,
		"hash": "f3e38369fd7e8d40d6a052727744c31a4a707658d0278f17bea78cde592071d4"
	},
	{
		"id": "655ae3e8ba57",
		"ts": "2026-08-23T17:16:34.198Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 685428.28,
		"hash": "655ae3e8ba579c63e2308b12ede1392f1ac1e3dd228af95321f5cd254b7bc4b9"
	},
	{
		"id": "fddb96a5f9b0",
		"ts": "2026-08-23T17:16:34.389Z",
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
		"liquidityUsd": 882645.8,
		"hash": "fddb96a5f9b0ab9917a68b4f9cd1fe93ed6404d43696022cf55fffe2d7d62243"
	},
	{
		"id": "5e3c9ff727c4",
		"ts": "2026-08-23T17:16:34.592Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4095543.24,
		"hash": "5e3c9ff727c4ed513eb7043e6b6a64762fa192c48f15b2c4fcdf346550439014"
	},
	{
		"id": "8b5a451aca11",
		"ts": "2026-08-23T17:16:34.786Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11167859.14,
		"hash": "8b5a451aca11fbfe13e93d4b1c8ae466e0b2dee8f605c405168e87d453184c1d"
	},
	{
		"id": "1aadfdd70389",
		"ts": "2026-08-23T17:16:34.976Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 583582.51,
		"hash": "1aadfdd703895ff29d0d1ea6363921e7abd9d70d3b08a5f9a56ae7a4c5fed42c"
	},
	{
		"id": "b34d47d7d516",
		"ts": "2026-08-23T17:16:35.174Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 792883.28,
		"hash": "b34d47d7d5166cbe0e834818106e9be7015e2f4fce12461fe4cdcf4e73422059"
	},
	{
		"id": "75f149e768ac",
		"ts": "2026-08-23T17:16:35.379Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3346472.09,
		"hash": "75f149e768ac5a63003ce9f72677dd1988b42fc93e34ba38530ebac7bf48726a"
	},
	{
		"id": "efc100a45b79",
		"ts": "2026-08-23T17:16:35.589Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 105434.24,
		"hash": "efc100a45b796a7b6aed009fa8f336affd656fa9899468ccf0551cb2d5476d0c"
	},
	{
		"id": "56ec1f043944",
		"ts": "2026-08-23T17:16:35.792Z",
		"symbol": "ETHY",
		"token": "0xC44141a684f6AA4E36cD9264ab55550B03C88643",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 286840.43,
		"hash": "56ec1f04394442fa2062ad97261e554d74d647cc4bf5567f4984b17086099522"
	},
	{
		"id": "58cc6280f396",
		"ts": "2026-08-23T17:16:36.157Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1837319.08,
		"hash": "58cc6280f3968fe33381d7afd40d467d9d85e97c97201f16841a76ebccb3c60a"
	},
	{
		"id": "178f24e80761",
		"ts": "2026-08-23T17:16:36.360Z",
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
		"liquidityUsd": 735801.28,
		"hash": "178f24e807618fda568b45962eb49ac77d6cbf11a8284763e3f912cafec4be6b"
	}
]
