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
	"updatedAt": "2026-08-25T09:31:20.898Z",
	"tokensScored": 14751,
	"verdictsIssued": 14751,
	"safe": 12597,
	"risky": 1094,
	"likelyRug": 1060,
	"ticks": 853
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "32aa00058070",
		"ts": "2026-08-25T09:31:16.482Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113658022.72,
		"hash": "32aa00058070694135edc2359e28432b1d61832fb0151ee4dd75a8805a17bd37"
	},
	{
		"id": "c83dd0fb1a96",
		"ts": "2026-08-25T09:31:16.957Z",
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
		"liquidityUsd": 15329325.56,
		"hash": "c83dd0fb1a96fed791262fc5a942630da4853e0e1b3015649b230242bb042e29"
	},
	{
		"id": "3b72f71cc140",
		"ts": "2026-08-25T09:31:17.225Z",
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
		"liquidityUsd": 1013852.75,
		"hash": "3b72f71cc14005c29cb39102625d51479da92b3dae1e9e9f77b5bea823a100de"
	},
	{
		"id": "be3ebdc500b4",
		"ts": "2026-08-25T09:31:17.481Z",
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
		"liquidityUsd": 30526110.67,
		"hash": "be3ebdc500b4b913ad0d75158d087557fb9faa5507aa550ebdc95e6b1704366c"
	},
	{
		"id": "1e22132ed1c6",
		"ts": "2026-08-25T09:31:17.732Z",
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
		"liquidityUsd": 4821804.87,
		"hash": "1e22132ed1c66016b70da2b9206dd4a6e8e6550d909385278bfbaa9ee42cc3a8"
	},
	{
		"id": "159994b14cff",
		"ts": "2026-08-25T09:31:17.979Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1221723.04,
		"hash": "159994b14cffd8710e1d3b8e064ab39c7d424dd2879bb19270551a83af1f1cbf"
	},
	{
		"id": "01d536b8d7f2",
		"ts": "2026-08-25T09:31:18.239Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2313321.81,
		"hash": "01d536b8d7f2d642b3be9690f2a22f5ed6f3cac85b8d95cdb1031aa8d5041545"
	},
	{
		"id": "cabfc6369256",
		"ts": "2026-08-25T09:31:18.488Z",
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
		"liquidityUsd": 1928898.81,
		"hash": "cabfc636925607ab62cdc90327c4d7b1b87f5dc3ff0156fbd84601d1583253a0"
	},
	{
		"id": "818f4d2556f7",
		"ts": "2026-08-25T09:31:18.765Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 794624.03,
		"hash": "818f4d2556f7311c80b4a3febe5bdf6124eb6321fd33dbc24ee4a4ad11ea56cc"
	},
	{
		"id": "1f277529e11b",
		"ts": "2026-08-25T09:31:19.015Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 2320575.93,
		"hash": "1f277529e11bb8da0d0abf1e5858387cdfb316494d8ce7c6b32cba47edc40572"
	},
	{
		"id": "64a6cbb4ec7b",
		"ts": "2026-08-25T09:31:19.252Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1299418.28,
		"hash": "64a6cbb4ec7b3cf4f7f86310a8af793b772e077b7d9f35fc731910a8fb2c4748"
	},
	{
		"id": "a814c245dfe1",
		"ts": "2026-08-25T09:31:19.487Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 108872.93,
		"hash": "a814c245dfe19e00f88481b2366b3fa8e9903a67d2d94c26d35c9200156e9bff"
	},
	{
		"id": "e90735070fda",
		"ts": "2026-08-25T09:31:19.720Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 577053.23,
		"hash": "e90735070fdaee2258017d718eae3573be1799f496bf1a6dcd9556191d71fd6a"
	},
	{
		"id": "abee46a9bb84",
		"ts": "2026-08-25T09:31:19.953Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1066247.32,
		"hash": "abee46a9bb84c04a33e71525b7bccc6c561b87aa06f78d3b4cb0d61a536a2f50"
	},
	{
		"id": "00b1c9fb5099",
		"ts": "2026-08-25T09:31:20.194Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1894176.89,
		"hash": "00b1c9fb50998ac69cedc4947cb44207af2abc208645073129d367fa582b30da"
	},
	{
		"id": "8ea3bcf1a737",
		"ts": "2026-08-25T09:31:20.429Z",
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
		"liquidityUsd": 932653.37,
		"hash": "8ea3bcf1a737f2a254c75994a166dc9ebe55233cfdd7b4aee39d6ddb704675a4"
	},
	{
		"id": "9970e792e903",
		"ts": "2026-08-25T09:31:20.666Z",
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
		"liquidityUsd": 3541611.19,
		"hash": "9970e792e903deb09b4fb3c5e08559b61bdb70d56cc756f74b27a8b24c85de23"
	},
	{
		"id": "ef92a06886c5",
		"ts": "2026-08-25T09:31:20.898Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11488917.37,
		"hash": "ef92a06886c552834b4d4ad64083b89517ec72f0f223c4ad282b7dfd522179e8"
	},
	{
		"id": "8b6cd1e9a416",
		"ts": "2026-08-25T08:36:54.246Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113666483.94,
		"hash": "8b6cd1e9a416f4bfd6a9e438e0f0557f274cd05308f1321c25be50233c22caf6"
	},
	{
		"id": "daa3ee18ce51",
		"ts": "2026-08-25T08:36:54.493Z",
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
		"liquidityUsd": 18689676.67,
		"hash": "daa3ee18ce51d9686834a62130ca5d9910f18a391c1aa3da0e4d622098e571dc"
	},
	{
		"id": "7c73e22bf298",
		"ts": "2026-08-25T08:36:54.770Z",
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
		"liquidityUsd": 1015337.81,
		"hash": "7c73e22bf298f112ee3dc7f76503ca31ec1aa6c39f985a506a1496ebdb93b456"
	},
	{
		"id": "7dcea0a33213",
		"ts": "2026-08-25T08:36:55.034Z",
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
		"liquidityUsd": 30558866.99,
		"hash": "7dcea0a33213a0427b573c175a5529865469dfd22028f7fb5ce7647ef0499ff3"
	},
	{
		"id": "5a0826bb68d9",
		"ts": "2026-08-25T08:36:55.272Z",
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
		"liquidityUsd": 4834484.94,
		"hash": "5a0826bb68d9b2aaacc06013b301b99099c05ca234ec343a760e1d138ee38b5b"
	},
	{
		"id": "9be7cc6489ae",
		"ts": "2026-08-25T08:36:55.545Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1216190.86,
		"hash": "9be7cc6489aeca42505d40555ddaa2590ea2a311474752a8d2862215e8e02bfc"
	},
	{
		"id": "0eb2c80d87d4",
		"ts": "2026-08-25T08:36:55.802Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2348520.6,
		"hash": "0eb2c80d87d493face7c806f86bbff36fdef80d574c51f1b55ff16e11ec6379a"
	},
	{
		"id": "75d89d80daeb",
		"ts": "2026-08-25T08:36:56.047Z",
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
		"liquidityUsd": 1936130.67,
		"hash": "75d89d80daebc2ec8fb3bd8389ee75cdb94def478d2ecb45a74c214d9d324a33"
	},
	{
		"id": "7c4fc6e4330a",
		"ts": "2026-08-25T08:36:56.297Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 810163.52,
		"hash": "7c4fc6e4330a8ef32ab03f1eacbbe3046350be67e8aff6a175227a536d53613e"
	},
	{
		"id": "f2435c8d916f",
		"ts": "2026-08-25T08:36:56.547Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1314934.68,
		"hash": "f2435c8d916ffa343767e108db34cc0b0635b87e6f4cee7415601ee91901128c"
	},
	{
		"id": "fd183665f44c",
		"ts": "2026-08-25T08:36:56.778Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2347574.75,
		"hash": "fd183665f44cf4a518394459477cf05d0973af9e5ddd8868e98675579a36c337"
	},
	{
		"id": "8d1dc846c285",
		"ts": "2026-08-25T08:36:57.008Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1908574.02,
		"hash": "8d1dc846c28545946d700ec129eba345abc46da93db10206c5890a8761fd4d0d"
	},
	{
		"id": "450ec985dc36",
		"ts": "2026-08-25T08:36:57.238Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 579601.68,
		"hash": "450ec985dc36fdd06a6963a7dfd043ada72164ab23097048fe89e16b77956604"
	},
	{
		"id": "a38f73afe7d3",
		"ts": "2026-08-25T08:36:57.469Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1074561.03,
		"hash": "a38f73afe7d37f9a16b0c190b8e3971a7a6639740c5c78eb83105181ab8dfd32"
	},
	{
		"id": "2a9b17f71905",
		"ts": "2026-08-25T08:36:57.683Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 97793.29,
		"hash": "2a9b17f719059a9e286659223ab1de45f186584feddccab94fc978d5f0387c91"
	},
	{
		"id": "f37528a2e1ca",
		"ts": "2026-08-25T08:36:57.913Z",
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
		"liquidityUsd": 928127.48,
		"hash": "f37528a2e1ca9a47ffd2bcda812d285086e37d2a549bf4a21a9aa7f4ab2923fd"
	},
	{
		"id": "30666e5fe8a5",
		"ts": "2026-08-25T08:36:58.145Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3542750.3,
		"hash": "30666e5fe8a535d7aa3e50b178cf6666cc2d0bb103d1e41d8c7c08ff8d2a28c5"
	},
	{
		"id": "4233cb575853",
		"ts": "2026-08-25T08:36:58.359Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11424781.63,
		"hash": "4233cb575853b814652bfc88ddf8e2ed091f010cb14b7477894e096383dc881a"
	},
	{
		"id": "23928e170e49",
		"ts": "2026-08-25T07:40:21.017Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113804788.18,
		"hash": "23928e170e49ae0d4788401338cb4b40e23732f39af1f285dc51a76e8ce91d69"
	},
	{
		"id": "d99ecf8ece77",
		"ts": "2026-08-25T07:40:21.467Z",
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
		"liquidityUsd": 18378269.18,
		"hash": "d99ecf8ece770dfaad609ef6a9062116df6e122b6673104fc3f6c8be0c4082fc"
	},
	{
		"id": "85cc14d9fe26",
		"ts": "2026-08-25T07:40:21.944Z",
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
		"liquidityUsd": 1020898.03,
		"hash": "85cc14d9fe26b4be2a62622ab9facaa9f5cacb76384286234f0f55b7df24f069"
	},
	{
		"id": "d405a0cc8690",
		"ts": "2026-08-25T07:40:22.227Z",
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
		"liquidityUsd": 30424590.59,
		"hash": "d405a0cc8690400773895173f23adcb6c38c3b16d9189474ca33d2708caa85c7"
	},
	{
		"id": "bf5bd9ba63b5",
		"ts": "2026-08-25T07:40:22.477Z",
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
		"liquidityUsd": 4868198.07,
		"hash": "bf5bd9ba63b569364baa4c3cba00840d8ff343923fb41f0248d68a5badbca639"
	},
	{
		"id": "75f1a0b02569",
		"ts": "2026-08-25T07:40:22.738Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1227716.97,
		"hash": "75f1a0b025694288ef72956fbd2e3befb973a2c1e958268f8448cbe53a7ceef6"
	},
	{
		"id": "fb5451bb49a6",
		"ts": "2026-08-25T07:40:22.985Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2310184.3,
		"hash": "fb5451bb49a6c7557cbe68d12700efe1d83f189d0286015015f1bc61f2705904"
	},
	{
		"id": "50a899c62310",
		"ts": "2026-08-25T07:40:23.306Z",
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
		"liquidityUsd": 1940574.53,
		"hash": "50a899c62310dd4abb329619859777dfe1a9d7db3f9a11c4754b5be9cfb9438b"
	},
	{
		"id": "7d5dc5f0663a",
		"ts": "2026-08-25T07:40:23.778Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 814879.08,
		"hash": "7d5dc5f0663a6dc0ccee6d4858e41d59a47b1153c4a4ef340014327b52a66061"
	},
	{
		"id": "da8edfa23ef5",
		"ts": "2026-08-25T07:40:24.057Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1353299.8,
		"hash": "da8edfa23ef578743db9ed680713044137894d3de306df08035db72173787ad2"
	},
	{
		"id": "93ac0fab3ad8",
		"ts": "2026-08-25T07:40:24.281Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2308977.73,
		"hash": "93ac0fab3ad879d91c71db9130810bd57ec02bafbef42e240a71c145ab68bf4b"
	},
	{
		"id": "81804d7ac6b9",
		"ts": "2026-08-25T07:40:24.512Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1924288.82,
		"hash": "81804d7ac6b9d7b67e9f50541e50b58f6591b28d3f08f4a66d37503c304a08e9"
	},
	{
		"id": "2076eed8d6f7",
		"ts": "2026-08-25T07:40:24.740Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1079597.65,
		"hash": "2076eed8d6f7124c5a8b2b6d9cfeb7a308ec3818fef5cd58b5b76fb5ef6a4c95"
	},
	{
		"id": "b928a4d4c331",
		"ts": "2026-08-25T07:40:24.971Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 580228.01,
		"hash": "b928a4d4c3317ecc36d6bf746e623c4c3ea15f03f06eb2b1c731ff1d166135b9"
	},
	{
		"id": "74a0a2241d87",
		"ts": "2026-08-25T07:40:25.192Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 107916.82,
		"hash": "74a0a2241d872b68c463948d7ed97ef25521564bc16e27980d519631aedef0be"
	},
	{
		"id": "c28d223b5456",
		"ts": "2026-08-25T07:40:25.425Z",
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
		"liquidityUsd": 960706.31,
		"hash": "c28d223b54564a7c2e09d1378c9621baac5a6b63d947f7a5475dbf8a108c5763"
	},
	{
		"id": "1a7e0e2c8468",
		"ts": "2026-08-25T07:40:25.657Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3532277.41,
		"hash": "1a7e0e2c84687c598c3fbfa9efb2c3a86b2a7919dcdf4cdb4a4e7049c24c3878"
	},
	{
		"id": "a7acc8201c0d",
		"ts": "2026-08-25T07:40:25.881Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11483221.96,
		"hash": "a7acc8201c0d9df2aa6ba6ed99fde5550fcf6bab1326924be3aef0812028ea01"
	},
	{
		"id": "09ce57643737",
		"ts": "2026-08-25T06:39:10.392Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113658204.75,
		"hash": "09ce57643737e1706a047977b829ecda0935e3d2c953b9a31c3daae8fd25c8e0"
	},
	{
		"id": "2e4404600305",
		"ts": "2026-08-25T06:39:10.609Z",
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
		"liquidityUsd": 18587603.24,
		"hash": "2e44046003055095b7b0dfac66015d33d8ffa856edf38665ed8a8c47c6d6a4d6"
	},
	{
		"id": "b9f2d6f88b0d",
		"ts": "2026-08-25T06:39:10.828Z",
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
		"liquidityUsd": 1021613.19,
		"hash": "b9f2d6f88b0d123ddae6023f6bd09c06cf352fe73f5dad377555c1bd3564cb49"
	},
	{
		"id": "00ba94234a27",
		"ts": "2026-08-25T06:39:11.167Z",
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
		"liquidityUsd": 30731113.37,
		"hash": "00ba94234a27d2ef99bd5862fd5407a7fc433c87e0741181bd36aa44823e82ef"
	},
	{
		"id": "fe93c032bd01",
		"ts": "2026-08-25T06:39:11.357Z",
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
		"liquidityUsd": 4888738.84,
		"hash": "fe93c032bd01d527d29f1bce8035682c4f0e0345e377632d77bb5495ec2e53fb"
	},
	{
		"id": "e5e821475e88",
		"ts": "2026-08-25T06:39:11.573Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1235785.77,
		"hash": "e5e821475e881874267ec69f8e7ba43e455443f5dc6fa0eb0dee635358f4eec8"
	},
	{
		"id": "0cc0a4bb8737",
		"ts": "2026-08-25T06:39:11.776Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2422863.32,
		"hash": "0cc0a4bb87378ee297c418ede67fb52234f88bf38c1f88af503793019c171db8"
	},
	{
		"id": "c5d59d11a610",
		"ts": "2026-08-25T06:39:11.965Z",
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
		"liquidityUsd": 1927134.22,
		"hash": "c5d59d11a61070642228caa2c58cd8b9d7d9f78788be12aa23bca8cbaf266bc8"
	},
	{
		"id": "80430a22c77e",
		"ts": "2026-08-25T06:39:12.162Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 799155.27,
		"hash": "80430a22c77e642d81584d656480137224324d86fe0b7a86b453e937cee1782e"
	},
	{
		"id": "8951f1912c9d",
		"ts": "2026-08-25T06:39:12.373Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1365129.87,
		"hash": "8951f1912c9d1b2509a29e3f4ddd1f6c56adeb3a259f439a8aa7df78b0e8a556"
	},
	{
		"id": "6ce9246fd6cf",
		"ts": "2026-08-25T06:39:12.548Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2421414.61,
		"hash": "6ce9246fd6cf2dc024da116612d44fcb4dd1bdf8393a95868f6e62fe70c8118a"
	},
	{
		"id": "8f75e5acb983",
		"ts": "2026-08-25T06:39:12.732Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1932535.8,
		"hash": "8f75e5acb9837301cfc85f1bddb5981fee056b0447c38041402893265dc3f952"
	},
	{
		"id": "959b52fa91a4",
		"ts": "2026-08-25T06:39:12.930Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 108044.15,
		"hash": "959b52fa91a45325baf81bdcdd4cecc8b315266fee04b8eedd9c0f1d66c40300"
	},
	{
		"id": "615d440dae8d",
		"ts": "2026-08-25T06:39:13.122Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 588611.28,
		"hash": "615d440dae8df3ae3470031b5a3d51cbe7fc300cf08bfd843cbcf2963fd45467"
	},
	{
		"id": "78c51962a76d",
		"ts": "2026-08-25T06:39:13.296Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1076872.75,
		"hash": "78c51962a76dda3e452eef488f3e471379c866486bb73433122f4dee11b74725"
	},
	{
		"id": "b22e033ad833",
		"ts": "2026-08-25T06:39:13.480Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11484553.79,
		"hash": "b22e033ad83309738557ba4616b46dc1deb5e4be0b782c3cf25ad27112393074"
	},
	{
		"id": "f1e9733a8312",
		"ts": "2026-08-25T06:39:13.668Z",
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
		"liquidityUsd": 960438.62,
		"hash": "f1e9733a8312b89c128006cf8be924b5e7859d634026fa5ac10922a9ef701598"
	},
	{
		"id": "7d12c9885e37",
		"ts": "2026-08-25T06:39:13.851Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3544102.09,
		"hash": "7d12c9885e37d4e2dbf1fe9d4535d1a534436652dbef8ff41b894ec3a7cd105e"
	},
	{
		"id": "a5c9b1e033fc",
		"ts": "2026-08-25T05:27:36.880Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113587273.37,
		"hash": "a5c9b1e033fcf0720e8d3aa69436a62bd6b86de8262dd5d855e6b6331950cd4c"
	},
	{
		"id": "f5fbd0ab441a",
		"ts": "2026-08-25T05:27:37.359Z",
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
		"liquidityUsd": 14539005.02,
		"hash": "f5fbd0ab441aa80ccd8fd35e4d22659f4aa5aa1488854904a4694bd6cfc5974d"
	},
	{
		"id": "cf823c77c8a2",
		"ts": "2026-08-25T05:27:37.611Z",
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
		"liquidityUsd": 1022829.15,
		"hash": "cf823c77c8a2978a51177b5bff6bc6a43c9529072c1ed4e05b6ed27889961aa5"
	},
	{
		"id": "a895b64d9466",
		"ts": "2026-08-25T05:27:37.850Z",
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
		"liquidityUsd": 31043898.26,
		"hash": "a895b64d94664442d6242a67ddb3593ce5862f0b117002ed4222fc0d152fa16d"
	},
	{
		"id": "29c6600caa66",
		"ts": "2026-08-25T05:27:38.102Z",
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
		"liquidityUsd": 4933158.93,
		"hash": "29c6600caa66a19aa7ec7f6397c51584a570a4b5d96777e8dc7ef77216470c44"
	},
	{
		"id": "03690fd026a9",
		"ts": "2026-08-25T05:27:38.349Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1214990.87,
		"hash": "03690fd026a9857e3ba9a02046b2e5d5ef3d7f0dca2979f87c95436d5181702a"
	},
	{
		"id": "8b8c10831bbc",
		"ts": "2026-08-25T05:27:38.615Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2354651.57,
		"hash": "8b8c10831bbc9252dbe063e9703c7248e468b57f54cdd227a711dae42bbdad26"
	},
	{
		"id": "7746b376f355",
		"ts": "2026-08-25T05:27:38.865Z",
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
		"liquidityUsd": 1932342.1,
		"hash": "7746b376f355a76d5dfb888547dfc8dfc42ab4895e18fc45db335847d7fb30d1"
	},
	{
		"id": "fbed1e2f07a3",
		"ts": "2026-08-25T05:27:39.131Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 795121.37,
		"hash": "fbed1e2f07a34c333301c96874b6780e87845d0884003c7453697b33a23adaa2"
	},
	{
		"id": "b3e7a6c4387f",
		"ts": "2026-08-25T05:27:39.381Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1369963.99,
		"hash": "b3e7a6c4387f3254237e0756f3bb6bcddda9b2e9de856ca6fc996dffc97f282b"
	},
	{
		"id": "f55adafb962d",
		"ts": "2026-08-25T05:27:39.617Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2354651.57,
		"hash": "f55adafb962df9f885e37e3390198a387b42f14245c3ae832b804a9f00cfe9ac"
	},
	{
		"id": "76a9e3daa391",
		"ts": "2026-08-25T05:27:39.842Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 111765.08,
		"hash": "76a9e3daa3913f026b7148f3bfc71f186e47c8431ab85e97d0491023e553d052"
	},
	{
		"id": "0f5fb9d0832c",
		"ts": "2026-08-25T05:27:40.058Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1927870.49,
		"hash": "0f5fb9d0832c18f69f4e5027326a5301ccf92cb55ccfd16052d8069a6fd3f68c"
	},
	{
		"id": "16982c7ef002",
		"ts": "2026-08-25T05:27:40.294Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 590269.99,
		"hash": "16982c7ef0028806055a345408dad329fc24df16302f24facedd1acd83e9042e"
	},
	{
		"id": "bb6f4b685a0f",
		"ts": "2026-08-25T05:27:40.518Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1084419.17,
		"hash": "bb6f4b685a0fc19e85ff4367edf8452a718b6b378faac5b15b79b951f2f395ab"
	},
	{
		"id": "da3b1f94537b",
		"ts": "2026-08-25T05:27:40.737Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11542230.66,
		"hash": "da3b1f94537beddae8e0cabb98146eaacaaa67dff8fe5317699dcc975f4590da"
	},
	{
		"id": "833b658eadd9",
		"ts": "2026-08-25T05:27:40.961Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3608429.19,
		"hash": "833b658eadd99a02a970f8d99c740c69b771e50a238e5847b8f634f6d534e4ce"
	},
	{
		"id": "b82ffb7ac62d",
		"ts": "2026-08-25T05:27:41.179Z",
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
		"liquidityUsd": 1000028.84,
		"hash": "b82ffb7ac62d8c453dc9f0ec6a75082f7d01d63bba6233c572181529e0afb9ac"
	},
	{
		"id": "a9819bcfc166",
		"ts": "2026-08-25T05:27:41.414Z",
		"symbol": "TYBG",
		"token": "0x0d97F261b1e88845184f678e2d1e7a98D9FD38dE",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 247226.62,
		"hash": "a9819bcfc166c19095925f0b876bfbcbb63c144d698b5f052cbbf28060cebc31"
	},
	{
		"id": "bd2e316db6ef",
		"ts": "2026-08-25T04:34:34.219Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113459206,
		"hash": "bd2e316db6eff860d3050c8c5ff51251618e1bd81564a1529fa15968d4de65e4"
	},
	{
		"id": "27c8784285d0",
		"ts": "2026-08-25T04:34:34.470Z",
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
		"liquidityUsd": 18018515.29,
		"hash": "27c8784285d07ca3cdda1c0a2b8f83aaa926b0e6de413086ae3f7b6b6dc63e0a"
	},
	{
		"id": "c8fd7c875f24",
		"ts": "2026-08-25T04:34:34.726Z",
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
		"liquidityUsd": 1020324.14,
		"hash": "c8fd7c875f24a5f6ac60fe7a95c94a01bb655f71a2c6028e86aa742708bd2ea1"
	},
	{
		"id": "22fe237d78d1",
		"ts": "2026-08-25T04:34:34.971Z",
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
		"liquidityUsd": 30745749.27,
		"hash": "22fe237d78d17ddb2a521c89e4d8de6b09455c963075072b86b7e507d5b85df6"
	},
	{
		"id": "1f9c7c7a03ee",
		"ts": "2026-08-25T04:34:35.229Z",
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
		"liquidityUsd": 4898004.81,
		"hash": "1f9c7c7a03eed47d0f30fee444fe8a3957591624e3b9c146c0aa06fb73d11026"
	},
	{
		"id": "678efe9c9bc1",
		"ts": "2026-08-25T04:34:35.474Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1210814.71,
		"hash": "678efe9c9bc1c6a69aaec58b0a1168b3feb0026038b418a34342a8a923e67b1f"
	},
	{
		"id": "9c01d9731266",
		"ts": "2026-08-25T04:34:35.721Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2272876.93,
		"hash": "9c01d97312661c84e2fe1590d3fd76be375c8338d0695458ed3f6405e1673bcc"
	},
	{
		"id": "ceace9a4ee25",
		"ts": "2026-08-25T04:34:35.971Z",
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
		"liquidityUsd": 1920538.71,
		"hash": "ceace9a4ee25e6a846f601b356d257ffe794ec809ceb1fb068544c0df5ed1be1"
	},
	{
		"id": "b3584e24b906",
		"ts": "2026-08-25T04:34:36.441Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 805466.09,
		"hash": "b3584e24b906c2aa8fc45277da137ec589434ac832e1bbc2b91ac6bfe16c770a"
	},
	{
		"id": "87376b6413d9",
		"ts": "2026-08-25T04:34:36.681Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1366194.58,
		"hash": "87376b6413d9e37b31a75dd829b13758dd1a945c86f993ba7350b0bb010994b6"
	},
	{
		"id": "652232ef8bff",
		"ts": "2026-08-25T04:34:36.910Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2272876.93,
		"hash": "652232ef8bff52a448ba3b640f6e400f5c21991ca3f0d68214d4bf4701de351c"
	},
	{
		"id": "9fc12dc61126",
		"ts": "2026-08-25T04:34:37.129Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 112240.19,
		"hash": "9fc12dc611261bcad45784c71fc421ccddbbbee2eeb571ce7eaaa6dd61cfd24e"
	},
	{
		"id": "573a69cf3850",
		"ts": "2026-08-25T04:34:37.358Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1924833.93,
		"hash": "573a69cf385013ccb7ddf320d90244856b123e2660c3cab947c0d38331b690bd"
	},
	{
		"id": "6f982ad5a865",
		"ts": "2026-08-25T04:34:37.578Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 602959.75,
		"hash": "6f982ad5a865598d21f1a55c65deab1e8d738d51ff55782a8783c115c7b755ff"
	},
	{
		"id": "d9b4ad698554",
		"ts": "2026-08-25T04:34:37.809Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11386717.92,
		"hash": "d9b4ad698554a92bbac31322345cf8923b5cadfa34ad671a6c7601792678791a"
	},
	{
		"id": "2d85b65717e3",
		"ts": "2026-08-25T04:34:38.038Z",
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
		"liquidityUsd": 995340.6,
		"hash": "2d85b65717e3c29dce7a31000ed21dbef63da27c95668922e1fd60c17017bb81"
	},
	{
		"id": "3e10959f4368",
		"ts": "2026-08-25T04:34:38.259Z",
		"symbol": "TYBG",
		"token": "0x0d97F261b1e88845184f678e2d1e7a98D9FD38dE",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 246808.9,
		"hash": "3e10959f4368b9a57e6ea393e8e31defcd16fa8be49107a72013c4b350b8f8c1"
	},
	{
		"id": "20365855472a",
		"ts": "2026-08-25T04:34:38.492Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3550658.64,
		"hash": "20365855472a6d71dc61726ea8d3f94fd4fee0188422081a2eb8d57e1dd0a6a1"
	},
	{
		"id": "33528b90d6b6",
		"ts": "2026-08-25T04:34:38.718Z",
		"symbol": "BITBANK",
		"token": "0xB200000000000000000000E83d09CF068e06365c",
		"score": 10,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 26645.44,
		"hash": "33528b90d6b667cadb6aad1396ee4b7779b7fed908491978cac46192790a530a"
	},
	{
		"id": "29f490a607f9",
		"ts": "2026-08-25T03:44:24.888Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113605055.3,
		"hash": "29f490a607f9f2091195f34db351db484932201feb0e27d6823c949c558904fa"
	},
	{
		"id": "821ce6d94d7b",
		"ts": "2026-08-25T03:44:25.157Z",
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
		"liquidityUsd": 14551521.43,
		"hash": "821ce6d94d7b662b66a008c43b3856387249d08c35672b9cf409abb9e25092e3"
	},
	{
		"id": "93c64767563b",
		"ts": "2026-08-25T03:44:25.401Z",
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
		"liquidityUsd": 1026543.31,
		"hash": "93c64767563bd98e9bc09ed21fcadce89c77df375b6ea9ac95744f9815571a46"
	},
	{
		"id": "a03c7b2b6f0c",
		"ts": "2026-08-25T03:44:25.655Z",
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
		"liquidityUsd": 30811483.89,
		"hash": "a03c7b2b6f0ca06ca88d238c53c2b493e7d79e6feef8c93e2f9b6ab1540f5e07"
	},
	{
		"id": "a46085384d20",
		"ts": "2026-08-25T03:44:25.917Z",
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
		"liquidityUsd": 4919962.08,
		"hash": "a46085384d2077481def61d37640c202e5280334efb2bcd6b74027a4b933fd13"
	},
	{
		"id": "fc601fa06063",
		"ts": "2026-08-25T03:44:26.162Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1225692.73,
		"hash": "fc601fa06063b9f26e70d53e8b166753fafdd412e58b9e5ba70820c25427a48c"
	},
	{
		"id": "d27c8f9c2fbb",
		"ts": "2026-08-25T03:44:26.403Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2407251.37,
		"hash": "d27c8f9c2fbb97682092ac4a016219048c132837a1bd59f9633de2034a6ef2fc"
	},
	{
		"id": "58f556ef2fe2",
		"ts": "2026-08-25T03:44:26.654Z",
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
		"liquidityUsd": 1941169.59,
		"hash": "58f556ef2fe2f50b54912536429664cb53b11b6d4083060a03d5951bfce9739c"
	},
	{
		"id": "2c3a4527659e",
		"ts": "2026-08-25T03:44:26.928Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 843518.56,
		"hash": "2c3a4527659e66ee0c80be35ada87406f03480cc35c32137166daad6d1ed2662"
	},
	{
		"id": "47e29e4fb0b6",
		"ts": "2026-08-25T03:44:27.636Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1382568.33,
		"hash": "47e29e4fb0b639c2cb45e93e7611d9c72f7de4558437308a26fa0c22494d6597"
	},
	{
		"id": "f52bcfc2a23d",
		"ts": "2026-08-25T03:44:28.147Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2409518.9,
		"hash": "f52bcfc2a23de48c41ea0e3c4535c5c5eb0e2c7c471d8771533844dcca498f02"
	},
	{
		"id": "b7b4c871f052",
		"ts": "2026-08-25T03:44:28.365Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 603930.07,
		"hash": "b7b4c871f0527e994b70439d029779cca309b9030fc3f297c580ef05f0ebda81"
	},
	{
		"id": "fc545dd01d45",
		"ts": "2026-08-25T03:44:28.594Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 116775.05,
		"hash": "fc545dd01d456a92eaa7b8b0d9dfa726ca6103e11b3c870e6ba5a89139952bc4"
	},
	{
		"id": "e2656f4277bc",
		"ts": "2026-08-25T03:44:28.811Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1929155.29,
		"hash": "e2656f4277bc57b21373434f9e88a5b8db1308b47ad2c62127c808a35c1a34a5"
	},
	{
		"id": "9c89edeafc1a",
		"ts": "2026-08-25T03:44:29.033Z",
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
		"liquidityUsd": 1004267.16,
		"hash": "9c89edeafc1a4958e690632e71e112d97d9f8ef9da5c365d34e447d61b35f387"
	},
	{
		"id": "840d9a91658b",
		"ts": "2026-08-25T03:44:29.253Z",
		"symbol": "TYBG",
		"token": "0x0d97F261b1e88845184f678e2d1e7a98D9FD38dE",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 247531.7,
		"hash": "840d9a91658b77fcecaf96946bf87d5c60e68712aa1a9f9b5b95d4981840dfee"
	},
	{
		"id": "cf9c902146ed",
		"ts": "2026-08-25T03:44:29.473Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3577736.28,
		"hash": "cf9c902146edb5b034c6a7e801484a458f5cf935454fd93501e5fb3d177aa8ea"
	},
	{
		"id": "19610492bf73",
		"ts": "2026-08-25T03:44:29.693Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11388965.52,
		"hash": "19610492bf733d33229d7735fa25a90e2ba9645f95046c9c3a01e3e1d61f4224"
	},
	{
		"id": "dd0dd978af5f",
		"ts": "2026-08-25T03:44:29.925Z",
		"symbol": "BITBANK",
		"token": "0xB200000000000000000000E83d09CF068e06365c",
		"score": 10,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 25876.57,
		"hash": "dd0dd978af5fbabe00abe82cd648ff63f7e87d92af80b72bd2693bd6fc08d0f1"
	},
	{
		"id": "c9131dd1edc9",
		"ts": "2026-08-25T02:54:24.385Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113685555.41,
		"hash": "c9131dd1edc94508d58160c89d0a04c731cb47d7b0e94182b0b0e7ce2b5b616c"
	},
	{
		"id": "cd7d81e13c6a",
		"ts": "2026-08-25T02:54:24.672Z",
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
		"liquidityUsd": 16430252.36,
		"hash": "cd7d81e13c6a2dc04f16c8e019cc4be76620923913a8c93f1ab3b5f391d0de5f"
	},
	{
		"id": "93c2609e05cd",
		"ts": "2026-08-25T02:54:24.910Z",
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
		"liquidityUsd": 1027351.88,
		"hash": "93c2609e05cd4fe0e254f6a0e5097928d55cbcf5748ce436d40215aa32a321f8"
	},
	{
		"id": "9bb445f642b2",
		"ts": "2026-08-25T02:54:25.354Z",
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
		"liquidityUsd": 31064488.02,
		"hash": "9bb445f642b24d549e0ee84a579e51bcbfc8710966094028033a52611a422c16"
	},
	{
		"id": "f121736e67b4",
		"ts": "2026-08-25T02:54:25.596Z",
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
		"liquidityUsd": 4936596.13,
		"hash": "f121736e67b49dc849e5c740520ff8350533ed340c6d1d72ff798cc863fa81fc"
	},
	{
		"id": "6f77e97d6e59",
		"ts": "2026-08-25T02:54:25.833Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1225692.73,
		"hash": "6f77e97d6e59f1b372ef6f41f6cf434cef04483f92e6606eebbbc203bfd34c8c"
	},
	{
		"id": "b32653a93d84",
		"ts": "2026-08-25T02:54:26.068Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2523247.13,
		"hash": "b32653a93d848f9e73f950125ad1da8fd0053cf2c37320a4b5ca0bd5e93196a6"
	},
	{
		"id": "208fe2eb4b35",
		"ts": "2026-08-25T02:54:26.350Z",
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
		"liquidityUsd": 1943683.76,
		"hash": "208fe2eb4b3590d0d939b3f8e723746b1562aef1f9b933804570e285dbe1b34d"
	},
	{
		"id": "14147428d4a5",
		"ts": "2026-08-25T02:54:26.614Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 803243.18,
		"hash": "14147428d4a500d35cb963edf3b474f3b06fcb860168d70bd6c1c9b8dca86e4b"
	},
	{
		"id": "3f9897e2dfcd",
		"ts": "2026-08-25T02:54:26.849Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1360914.25,
		"hash": "3f9897e2dfcd5f53b159910c697680ecf966289a084295cadc95393b9e6dbcd9"
	},
	{
		"id": "2e3a390d1e38",
		"ts": "2026-08-25T02:54:27.078Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2521499.75,
		"hash": "2e3a390d1e3892589fc0c268aec1de3e8e1b98fe8fecb399fe6a230bffb56785"
	},
	{
		"id": "5de6897fea82",
		"ts": "2026-08-25T02:54:27.488Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 114443.14,
		"hash": "5de6897fea822235461a16b43cf9fd5dfeb0f576ef48c37bd677c5c833181a55"
	},
	{
		"id": "21960ded57f1",
		"ts": "2026-08-25T02:54:27.708Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 608527.67,
		"hash": "21960ded57f1ad3a2d00a9ab58908aba3526aa56bce571e23bd483e4f89dc409"
	},
	{
		"id": "ca6764144fc9",
		"ts": "2026-08-25T02:54:27.924Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1915198.08,
		"hash": "ca6764144fc9ee273a6973bb9593e81d474f3c8ca2c67c1219be63540de956cb"
	},
	{
		"id": "b35fca8a4c7b",
		"ts": "2026-08-25T02:54:28.144Z",
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
		"liquidityUsd": 993726.3,
		"hash": "b35fca8a4c7b4a54f20810b7accb3b7f5477c1852b5ea10b25f22273eea40e76"
	},
	{
		"id": "8bbc95ab4a6f",
		"ts": "2026-08-25T02:54:28.366Z",
		"symbol": "TYBG",
		"token": "0x0d97F261b1e88845184f678e2d1e7a98D9FD38dE",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 252991.53,
		"hash": "8bbc95ab4a6f12d80744265d497d5f04a9d5f72cd07b96c4bfe90f1d6eb3b13a"
	},
	{
		"id": "c0d16cf6208c",
		"ts": "2026-08-25T02:54:28.597Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11369633.66,
		"hash": "c0d16cf6208c2b2467d1082d243b4fc68a1cb4fd33244df9deb375aa739d2779"
	},
	{
		"id": "9ed65a0ae0b6",
		"ts": "2026-08-25T02:54:28.850Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 568604.19,
		"hash": "9ed65a0ae0b6fb41a2928b8d3f13576aa8387c242957226f9b26afc409ae7572"
	},
	{
		"id": "2f7dd748a88b",
		"ts": "2026-08-25T02:54:29.236Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3609865.3,
		"hash": "2f7dd748a88bbe26eb3757060b5a9c411e1f360c73690822cb550732a43ea622"
	},
	{
		"id": "950eaae3d73d",
		"ts": "2026-08-25T01:02:06.019Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113672049.36,
		"hash": "950eaae3d73d1e32e32d20e0f7908d1236c7c2978fe31e3f5130e1960c7c0fe6"
	},
	{
		"id": "134016531b82",
		"ts": "2026-08-25T01:02:06.484Z",
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
		"liquidityUsd": 13598543.68,
		"hash": "134016531b8298b81fb3c7af78b392e5b7ac62bd8a00d19cd50066eed2469f0e"
	},
	{
		"id": "7b0286cadb62",
		"ts": "2026-08-25T01:02:06.757Z",
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
		"liquidityUsd": 1031559.69,
		"hash": "7b0286cadb621c78c794e61cec088438274ef5f7b5f0a2655dd45e1f26723137"
	},
	{
		"id": "28b0b6fece13",
		"ts": "2026-08-25T01:02:07.020Z",
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
		"liquidityUsd": 30455419.5,
		"hash": "28b0b6fece13be9c0dac4be2b9605f1fb58e5f3ea31127fd71b200021cda4f06"
	},
	{
		"id": "61b4b56f6052",
		"ts": "2026-08-25T01:02:07.285Z",
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
		"liquidityUsd": 4853488.22,
		"hash": "61b4b56f6052b707bf8b87d39e848999f67cadf52cd03d4760fdc986b56df7bd"
	},
	{
		"id": "177a64ba30ee",
		"ts": "2026-08-25T01:02:07.518Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1205375.28,
		"hash": "177a64ba30ee07e3f44ea244e5e5acd0cf75ab91833d0fee3fc160006b7fdb23"
	},
	{
		"id": "bdde3c7f49f6",
		"ts": "2026-08-25T01:02:07.758Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2533614.62,
		"hash": "bdde3c7f49f6e654ac86c3fc38a0509e6278dd30a3709a8c0b08531387cb767d"
	},
	{
		"id": "25d02abfa60b",
		"ts": "2026-08-25T01:02:08.029Z",
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
		"liquidityUsd": 1937504.29,
		"hash": "25d02abfa60b02678d2aeb0db909b5cee80d7511fc584fd2ef74633a8afa2c32"
	},
	{
		"id": "93e448bfe3ce",
		"ts": "2026-08-25T01:02:08.285Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 769693.15,
		"hash": "93e448bfe3ce3f9916447e9ce73546c5496bdf3aa7e968e6e13235d8d2d23367"
	},
	{
		"id": "f1914bd40487",
		"ts": "2026-08-25T01:02:08.533Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1363121.75,
		"hash": "f1914bd40487e8fa2238032c8d0eaa19232fe78b9b323f55ce7309863a92d626"
	},
	{
		"id": "8af0a9cd3ba2",
		"ts": "2026-08-25T01:02:08.764Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2533614.62,
		"hash": "8af0a9cd3ba2a6bb4ec75eb219fe73ab67cfb8792405601cf01f937e78c9e69a"
	},
	{
		"id": "5509fa1d018c",
		"ts": "2026-08-25T01:02:08.991Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 597255.24,
		"hash": "5509fa1d018cf64bf3172438141e76defc7db77ac560a4167789fe97bae130a9"
	},
	{
		"id": "2f71837d017e",
		"ts": "2026-08-25T01:02:09.227Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 106771.77,
		"hash": "2f71837d017ec4fd8348e6042f6ea91dde857bc32feaddd8d126c2991cd7fd32"
	},
	{
		"id": "efd6ffe3741e",
		"ts": "2026-08-25T01:02:09.441Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1889319.77,
		"hash": "efd6ffe3741edeb3515d5bba724a7a2614bfbef651fe9c44b12ac79f33b82d05"
	},
	{
		"id": "247262d03a8b",
		"ts": "2026-08-25T01:02:09.670Z",
		"symbol": "TYBG",
		"token": "0x0d97F261b1e88845184f678e2d1e7a98D9FD38dE",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 263822.27,
		"hash": "247262d03a8bad282014858d5f26582e2583d83f4727155fea7a0413c0e2a91f"
	},
	{
		"id": "f9ea73b1f436",
		"ts": "2026-08-25T01:02:09.897Z",
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
		"liquidityUsd": 975655.49,
		"hash": "f9ea73b1f436d4b4a9a8ff03458719886ff108228554d1a2646ad1ca097b2c3c"
	},
	{
		"id": "98bce008896e",
		"ts": "2026-08-25T01:02:10.137Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 567271.97,
		"hash": "98bce008896ef5403bd45efd4262aa7ef83c1d9561ca9ec1ac351f79c0e6d379"
	},
	{
		"id": "ba2315a93bf0",
		"ts": "2026-08-25T01:02:10.373Z",
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
		"liquidityUsd": 3521306.17,
		"hash": "ba2315a93bf04b8f3a28862419b3a5a5dba471b9033f003f02a01e6b3070942a"
	},
	{
		"id": "7dc1bf92f64f",
		"ts": "2026-08-25T01:02:10.590Z",
		"symbol": "BITBANK",
		"token": "0xB200000000000000000000E83d09CF068e06365c",
		"score": 10,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 27016.26,
		"hash": "7dc1bf92f64f7270d9329d6af374dbe383a52725c42c91afe3c32cc25505e300"
	},
	{
		"id": "351480fd2ffb",
		"ts": "2026-08-24T23:18:57.172Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113426550.59,
		"hash": "351480fd2ffb57494d0414f79dfba46ca9abfe0809004d2447dd9bf8be27999c"
	},
	{
		"id": "54534f1bd01d",
		"ts": "2026-08-24T23:18:57.438Z",
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
		"liquidityUsd": 18426872.55,
		"hash": "54534f1bd01ddc6a60eec747a7ea794ba631be354c77c14ef9a8b7fea0f00515"
	},
	{
		"id": "dc6e303b42e3",
		"ts": "2026-08-24T23:18:57.688Z",
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
		"hash": "dc6e303b42e339a1de85338067ac98003d68087b741a8290894fd49581ca14f3"
	},
	{
		"id": "6526758df1a6",
		"ts": "2026-08-24T23:18:57.936Z",
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
		"liquidityUsd": 30576442.78,
		"hash": "6526758df1a61ba6d92846a1e55d88f1fa1eca05c323b44127ec063a48629932"
	},
	{
		"id": "12b8cd676bff",
		"ts": "2026-08-24T23:18:58.182Z",
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
		"liquidityUsd": 4815651.63,
		"hash": "12b8cd676bff9e68da226df155836cb753e9481025a16170ece24b9b77df9b3a"
	},
	{
		"id": "a38de5736c78",
		"ts": "2026-08-24T23:18:58.430Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1183868.7,
		"hash": "a38de5736c78d1af6d6250bf8aff55dad16556dadcc2b9a622a8af282cefb981"
	},
	{
		"id": "a4c985f6e051",
		"ts": "2026-08-24T23:18:58.680Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2566959.8,
		"hash": "a4c985f6e051659eb46233761f802454c32c68f35495aceab0ae7edb2c41f7a8"
	},
	{
		"id": "95a4a68a6c39",
		"ts": "2026-08-24T23:18:58.923Z",
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
		"liquidityUsd": 1923528.3,
		"hash": "95a4a68a6c39c01eabd2fa5c6c9baa5cfbd4dff3d9963af5ed3b139f9784eae6"
	},
	{
		"id": "97401c5cabbe",
		"ts": "2026-08-24T23:18:59.179Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 764018.5,
		"hash": "97401c5cabbe28317780b2ce55e30dbd5d8035004bd89dfb1099bf14c600f808"
	},
	{
		"id": "8db87bce5cf6",
		"ts": "2026-08-24T23:18:59.464Z",
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
		"hash": "8db87bce5cf6fb97876493c50da3fcbedf95dc990aad7270b8a21510124b9e26"
	},
	{
		"id": "c00783e1062f",
		"ts": "2026-08-24T23:18:59.694Z",
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
		"hash": "c00783e1062f46462aa56bde4984ebc40c1069b46b1fdbb71470afbc4409dc63"
	},
	{
		"id": "f7b03802fab3",
		"ts": "2026-08-24T23:18:59.907Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "f7b03802fab3a54d724adaa25fbc341be719a86eb50eb1239be0ab9add084503"
	},
	{
		"id": "3e19d82c53c6",
		"ts": "2026-08-24T23:19:00.153Z",
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
		"hash": "3e19d82c53c6f3db534f52b1f1c951cabde815c9bfb8bb01b1641b26a4bad679"
	},
	{
		"id": "40eedd845348",
		"ts": "2026-08-24T23:19:00.400Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair"
		],
		"liquidityUsd": 0,
		"hash": "40eedd845348c3153357e2414fd7cd81e0bb1617c234870ffc7d92d1aab786f9"
	},
	{
		"id": "875015116760",
		"ts": "2026-08-24T23:19:00.655Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"no_dex_pair",
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 0,
		"hash": "875015116760f4b775f9292549e361d20e5b7dfba5a7e55b97683675f1aaa2c9"
	},
	{
		"id": "dc65b0a46fdc",
		"ts": "2026-08-24T23:19:00.955Z",
		"symbol": "TYBG",
		"token": "0x0d97F261b1e88845184f678e2d1e7a98D9FD38dE",
		"score": 42,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.16,
		"flags": [
			"no_dex_pair",
			"modifiable_tax",
			"external_call"
		],
		"liquidityUsd": 0,
		"hash": "dc65b0a46fdc9bc37727ec7f1de26582660301fa630969c70e3fe52c5ff8d5c7"
	},
	{
		"id": "c735589c29e8",
		"ts": "2026-08-24T23:19:01.201Z",
		"symbol": "BITBANK",
		"token": "0xB200000000000000000000E83d09CF068e06365c",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"no_dex_pair",
			"sim_honeypot"
		],
		"liquidityUsd": 0,
		"hash": "c735589c29e8a24794da5cb50dfe7db9d800c237982a320bb02b935758c99dbd"
	},
	{
		"id": "7a73eac5a2b1",
		"ts": "2026-08-24T23:19:01.444Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3465456.26,
		"hash": "7a73eac5a2b1cc5e22a5cb86e5467e35101c61d744ac7202a22e059b52fcacb5"
	},
	{
		"id": "f42762d77c3e",
		"ts": "2026-08-24T22:21:17.310Z",
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
		"hash": "f42762d77c3e9f9133f7dceabb057e003e769db8280019306945eeb113f3e21f"
	},
	{
		"id": "07007b3ec320",
		"ts": "2026-08-24T22:21:17.558Z",
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
		"hash": "07007b3ec3202663231252058b1608ee25e3811ab56ce93af98e8e63a9598b0c"
	},
	{
		"id": "0981dc7b2664",
		"ts": "2026-08-24T22:21:18.013Z",
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
		"liquidityUsd": 951010.61,
		"hash": "0981dc7b26646deee16323319185c987dfbf30c2dbf9ed0445caad69c38cc595"
	},
	{
		"id": "1ec016c40ab3",
		"ts": "2026-08-24T22:21:18.278Z",
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
		"liquidityUsd": 30650448.27,
		"hash": "1ec016c40ab325b7a2705a5fb758df4dfaf317029aaf96773064642375205eac"
	},
	{
		"id": "d45ea1dbb818",
		"ts": "2026-08-24T22:21:18.524Z",
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
		"hash": "d45ea1dbb818297dab299b4d8482374f02b69a32aefb9494776185772ad449e6"
	},
	{
		"id": "b5df297bbf7a",
		"ts": "2026-08-24T22:21:18.754Z",
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
		"hash": "b5df297bbf7a560aa5715f52575372109d6238f6c50b08128cd9d4612bfb9737"
	},
	{
		"id": "c844ce7916bb",
		"ts": "2026-08-24T22:21:18.992Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2611548.77,
		"hash": "c844ce7916bb3d730344134fc13ed049ee83ba94c83171293263ca6f76cbaaa2"
	},
	{
		"id": "054b28377e21",
		"ts": "2026-08-24T22:21:19.242Z",
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
		"hash": "054b28377e21495ea0d7a4d96404a99004bb570711f43937a9f6eebf490da2b3"
	},
	{
		"id": "96e4cbcfff71",
		"ts": "2026-08-24T22:21:19.711Z",
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
		"hash": "96e4cbcfff71e6ef30f7f145fe34cfa6fdcc98da53d1b6be0bb668e7df74b81d"
	},
	{
		"id": "81654c3f38b0",
		"ts": "2026-08-24T22:21:20.408Z",
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
		"hash": "81654c3f38b0e99331d19c47a3f23ed4185ce1b098c3897f0ad66d224f1edc22"
	},
	{
		"id": "a65a4ceceeae",
		"ts": "2026-08-24T22:21:20.628Z",
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
		"liquidityUsd": 2607898.46,
		"hash": "a65a4ceceeaef0be1733738ea030428c94bbb394a165d18b3ceac61676645170"
	},
	{
		"id": "3cae533847b8",
		"ts": "2026-08-24T22:21:20.844Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 580418.77,
		"hash": "3cae533847b882d45c9073f42b33ca065a80d1e7d04609a21ffe150343594749"
	},
	{
		"id": "5403b6f221ff",
		"ts": "2026-08-24T22:21:21.064Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 103228.28,
		"hash": "5403b6f221ff12297de6523747731e448a5a5e81745dadfd80bb5490df3ad1ae"
	},
	{
		"id": "52c8b23a136d",
		"ts": "2026-08-24T22:21:21.299Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1846831.35,
		"hash": "52c8b23a136db4e833774be1231af28c87d7a6c8bd85bbdb6e910a256af695d0"
	},
	{
		"id": "cd894e7ddfb1",
		"ts": "2026-08-24T22:21:21.524Z",
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
		"liquidityUsd": 962549.8,
		"hash": "cd894e7ddfb1fac85f22e223ba4c00e338b0e95ed2bf5037973f83990599472e"
	}
]
