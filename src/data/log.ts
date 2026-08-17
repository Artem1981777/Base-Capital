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
	"updatedAt": "2026-08-17T18:32:29.747Z",
	"tokensScored": 11413,
	"verdictsIssued": 11413,
	"safe": 9918,
	"risky": 845,
	"likelyRug": 650,
	"ticks": 678
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "fc5b7db7d660",
		"ts": "2026-08-17T18:32:25.427Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112875116.05,
		"hash": "fc5b7db7d660820d1f3e7332e5103320d4119370415df9ce95d86fa7d26f5f78"
	},
	{
		"id": "b0f2afbf9268",
		"ts": "2026-08-17T18:32:25.666Z",
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
		"liquidityUsd": 13274050.85,
		"hash": "b0f2afbf9268d0d0c98f5f477c0ceada7009c497a8123cb95614d131c86b4342"
	},
	{
		"id": "b2154cd42dde",
		"ts": "2026-08-17T18:32:25.899Z",
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
		"liquidityUsd": 786363.69,
		"hash": "b2154cd42dde10988ee0cbdca7c434e0969e920038b340bfe72bb50ddcacdee8"
	},
	{
		"id": "bb5752e605af",
		"ts": "2026-08-17T18:32:26.164Z",
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
		"liquidityUsd": 27003064.72,
		"hash": "bb5752e605aff1de43cb69ba6694ee7bbf27a738fcd7248fa7f4cacb13a650fd"
	},
	{
		"id": "1ed8504fc4b6",
		"ts": "2026-08-17T18:32:26.392Z",
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
		"liquidityUsd": 4259005.41,
		"hash": "1ed8504fc4b6557eec4543d3533363a189f4ec71c84337404de0c90b774de482"
	},
	{
		"id": "a9b639e798f6",
		"ts": "2026-08-17T18:32:26.628Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889566.03,
		"hash": "a9b639e798f6841c0e9dbd0a3e012d9a8c234536ba673353c70194bbcb73d5b6"
	},
	{
		"id": "11ab42de374f",
		"ts": "2026-08-17T18:32:26.863Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3969089.17,
		"hash": "11ab42de374f0dcc93a9a390d7b0e835c97ebdebdcf7c7cb30282a81936bbd71"
	},
	{
		"id": "55c3662cfaad",
		"ts": "2026-08-17T18:32:27.099Z",
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
		"liquidityUsd": 1210711.79,
		"hash": "55c3662cfaad47de978bf1a224ffff2e276bc80d3ec7fcadcf6e7f524df32ddb"
	},
	{
		"id": "f1fcc1ec1d8a",
		"ts": "2026-08-17T18:32:27.330Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 498305.44,
		"hash": "f1fcc1ec1d8a68fa1d3a2e331bd3c04a7dcd8e024f5e4001ba5b1fafc8a929c9"
	},
	{
		"id": "61d82e379721",
		"ts": "2026-08-17T18:32:27.570Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 82,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.64,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109287.91,
		"hash": "61d82e3797212988ff8e284762ea2614fea8deff8ebc29f72ca969995c332436"
	},
	{
		"id": "f111c7335ceb",
		"ts": "2026-08-17T18:32:27.788Z",
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
		"liquidityUsd": 520377.84,
		"hash": "f111c7335ceb07bc68c2e6ba6c5df4fe342dde6ff458b02e6e85e39079eb76de"
	},
	{
		"id": "f3837b7d720e",
		"ts": "2026-08-17T18:32:28.009Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 413720.55,
		"hash": "f3837b7d720e10bc231b399df2dfda9a7670f765b8ac47b2e7263446c3203d83"
	},
	{
		"id": "73c404b1f326",
		"ts": "2026-08-17T18:32:28.220Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9832846.33,
		"hash": "73c404b1f326a4dc4e36b8bbcec3f79ba8c5b82de050f6902e19f3a0d0cc17d7"
	},
	{
		"id": "839ae404cf04",
		"ts": "2026-08-17T18:32:28.440Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 241860.08,
		"hash": "839ae404cf04a28df65c545d38f0113412b45346d1e2009dd0a8322b77824bbc"
	},
	{
		"id": "f09cd8160fd9",
		"ts": "2026-08-17T18:32:28.659Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 37515.05,
		"hash": "f09cd8160fd9e5142cf7d1bc417c03b41b2323a60bb95f091f18676ff0e89467"
	},
	{
		"id": "428e064cf2ae",
		"ts": "2026-08-17T18:32:28.880Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1008717.73,
		"hash": "428e064cf2aeb725b9d120a97e359f24c369a852e508056e72e5aaeaca035dbe"
	},
	{
		"id": "bf4c9564a227",
		"ts": "2026-08-17T18:32:29.091Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 94943.51,
		"hash": "bf4c9564a227a9a688fc0361edcbdca64c06f74499da8ca7d353f66024bcfd25"
	},
	{
		"id": "3d38a4c68641",
		"ts": "2026-08-17T18:32:29.309Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 53214.18,
		"hash": "3d38a4c68641d28828c6b33c600ebc72f91607c64c5b2203afa5f60804e9b741"
	},
	{
		"id": "b5814be14c70",
		"ts": "2026-08-17T18:32:29.526Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2565111.59,
		"hash": "b5814be14c703de9b6d84b857aa8d9f601e6b7d0b5934dd09e3647350bb648f6"
	},
	{
		"id": "50c4297a2777",
		"ts": "2026-08-17T18:32:29.747Z",
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
		"liquidityUsd": 583878.41,
		"hash": "50c4297a2777f61a2ee84ad6e406eaecc0b137d0751d689c0d8af957cf1dc5e1"
	},
	{
		"id": "d95dd82842a1",
		"ts": "2026-08-17T17:23:21.553Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111744605.2,
		"hash": "d95dd82842a111b779dc2f5027dbdb1233a39b8fa7c362ea02fb1dfa623fb82e"
	},
	{
		"id": "25638b647e64",
		"ts": "2026-08-17T17:23:22.041Z",
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
		"liquidityUsd": 13079346.89,
		"hash": "25638b647e6464b1ac44ad041335865b7e50b28b48a467d870b8b16f6b5cc835"
	},
	{
		"id": "ce11c84f09a7",
		"ts": "2026-08-17T17:23:22.305Z",
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
		"liquidityUsd": 786363.69,
		"hash": "ce11c84f09a7d0ecaee7c04bd2d596d22aae4fc843617254ca3dc8749e5966e0"
	},
	{
		"id": "68725b1b18b0",
		"ts": "2026-08-17T17:23:22.569Z",
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
		"liquidityUsd": 27036359.45,
		"hash": "68725b1b18b0d5ea9c1458102dce689979f97a1f9fb20d3adf8821acbd73c4a6"
	},
	{
		"id": "38b19c24ef16",
		"ts": "2026-08-17T17:23:22.831Z",
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
		"liquidityUsd": 4269424.13,
		"hash": "38b19c24ef16f2c0b3acf1f7ef2a99568eb7fdf3c16511166a0049273ba65543"
	},
	{
		"id": "9620b735e42c",
		"ts": "2026-08-17T17:23:23.092Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 890725.61,
		"hash": "9620b735e42cc8685ffcf46d1a7fc33c280df12c7b4a0c20d5a480ea1ae895eb"
	},
	{
		"id": "50c17a207058",
		"ts": "2026-08-17T17:23:23.349Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4138209.37,
		"hash": "50c17a2070582e42f5ffa5bcd6f8d6d0b967143f46b69b23c605ba2d09d4343f"
	},
	{
		"id": "200b35eb53ec",
		"ts": "2026-08-17T17:23:23.610Z",
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
		"liquidityUsd": 1212703.14,
		"hash": "200b35eb53ec51886d528ce560a356814332ac52f0d778955baadaa3e39ac591"
	},
	{
		"id": "c51ea06aa5ce",
		"ts": "2026-08-17T17:23:23.913Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 480027.07,
		"hash": "c51ea06aa5ce8c5af562ea4b238944286ae8399ac2f33e9642494392af719e08"
	},
	{
		"id": "eb12ea7ef85f",
		"ts": "2026-08-17T17:23:24.176Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 12,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.76,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 89839.52,
		"hash": "eb12ea7ef85f9d6402a67153ba84a8b17bdb3ecb7c6189bb13a06b3138f6dcaa"
	},
	{
		"id": "b74cd2511e27",
		"ts": "2026-08-17T17:23:24.420Z",
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
		"liquidityUsd": 535578.21,
		"hash": "b74cd2511e279c5f0d32963b5e6340aa99670a51ef7ac1e44f239a9d0c7296af"
	},
	{
		"id": "6f94c7b90b45",
		"ts": "2026-08-17T17:23:24.667Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 414800.98,
		"hash": "6f94c7b90b45fec72112357fdac65f16f735cbc2aafb1c31bb96697dc18a79a3"
	},
	{
		"id": "4d6304795b2b",
		"ts": "2026-08-17T17:23:24.912Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 242026.98,
		"hash": "4d6304795b2bda29852c19d169cb9b1782685dfce0e463141dc0a73c702e55b3"
	},
	{
		"id": "b8cd90fafea3",
		"ts": "2026-08-17T17:23:25.156Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 44589.86,
		"hash": "b8cd90fafea394406d39b81af4c974c2217ea2ab289e7a226d8e30dd3778c69d"
	},
	{
		"id": "ec6eb9be7f5b",
		"ts": "2026-08-17T17:23:25.402Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9876523.53,
		"hash": "ec6eb9be7f5bbacf6c2f12dfe149831664b9c6be0ad137cc3e411d48cf995c7d"
	},
	{
		"id": "aef204824dc7",
		"ts": "2026-08-17T17:23:25.644Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1012707.62,
		"hash": "aef204824dc75a23e7443b4b3d2e6357db05ab5d31f9c24fccdc43e3a333ad66"
	},
	{
		"id": "3314b023d760",
		"ts": "2026-08-17T17:23:25.885Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 57263.89,
		"hash": "3314b023d760a0652a81ea0fde197a934c2d92e12d6082c329a61b9dc7590a2d"
	},
	{
		"id": "6ce95264dee6",
		"ts": "2026-08-17T17:23:26.128Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2580702.89,
		"hash": "6ce95264dee631b9c430bc530aca4d55ab94c5e4ac01fec6ff65097282d551e7"
	},
	{
		"id": "a2561f19aa8f",
		"ts": "2026-08-17T17:23:26.373Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 94500.29,
		"hash": "a2561f19aa8f7ecd1e00ba9096ac3896d369bfc60458d153e02ad8498da9bc2c"
	},
	{
		"id": "7c14e8142842",
		"ts": "2026-08-17T17:23:26.626Z",
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
		"liquidityUsd": 607480.93,
		"hash": "7c14e814284241a36d031e2f759bd50b56fc0d651ef62f8b1c8d14036338083e"
	},
	{
		"id": "e1dc85674f86",
		"ts": "2026-08-17T16:22:07.953Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111743659.7,
		"hash": "e1dc85674f863e04b3ae4686f690ae68e0e07a8bf349b90c2088f8c639d70294"
	},
	{
		"id": "039afecf0bc2",
		"ts": "2026-08-17T16:22:08.245Z",
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
		"liquidityUsd": 15111538.43,
		"hash": "039afecf0bc24ca4890dffb2789722f3b2e297c45352ba553fa68c8d70c453d7"
	},
	{
		"id": "dc39c3603c4b",
		"ts": "2026-08-17T16:22:08.438Z",
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
		"liquidityUsd": 795429.95,
		"hash": "dc39c3603c4b4faf9f3cf4eb9940915f25832ee21451a7a5d88b66e9e5011d5d"
	},
	{
		"id": "29ec2f594caa",
		"ts": "2026-08-17T16:22:08.641Z",
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
		"liquidityUsd": 27165053.13,
		"hash": "29ec2f594caa36c83bb962c8fab9fce169c612590914719b0490fe556ed8823f"
	},
	{
		"id": "4bedc123f561",
		"ts": "2026-08-17T16:22:09.005Z",
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
		"liquidityUsd": 4270058.43,
		"hash": "4bedc123f561acdaf323e00e92d3f5406c97a73c35bc57a936b0a0ad7611672a"
	},
	{
		"id": "0cad239f46e5",
		"ts": "2026-08-17T16:22:09.220Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 890726.5,
		"hash": "0cad239f46e57b6d3bc7eddee940869b8a33149d303b3e3509c9dd3a69c78c1d"
	},
	{
		"id": "90dc5bc8cd10",
		"ts": "2026-08-17T16:22:09.407Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4106691.87,
		"hash": "90dc5bc8cd10846980b1cbc6e8c42d60032a9d8816fcf89b2185471f03a0246e"
	},
	{
		"id": "91ce7dd0109b",
		"ts": "2026-08-17T16:22:09.635Z",
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
		"liquidityUsd": 1210213.62,
		"hash": "91ce7dd0109bba15159db59e9d99d1df2ce43c2524b88a460695a9dc73b2a0c0"
	},
	{
		"id": "5c5c5ea0ab39",
		"ts": "2026-08-17T16:22:09.825Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 457892.82,
		"hash": "5c5c5ea0ab394fd295554465b176e42783f77bb6d73881a8ca78b5e73e08fce5"
	},
	{
		"id": "4e5c9dd35527",
		"ts": "2026-08-17T16:22:10.018Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 82,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.64,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 96372.99,
		"hash": "4e5c9dd35527259630575362424592f9d40222f435f40f2d3a343f8d7850f752"
	},
	{
		"id": "aacd19ef8057",
		"ts": "2026-08-17T16:22:10.199Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 44260.27,
		"hash": "aacd19ef80572aa2a429c0bbe3972ed0608089e0bc3f1c287da670d591ad9065"
	},
	{
		"id": "71ae6e7a4892",
		"ts": "2026-08-17T16:22:10.399Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 421311.28,
		"hash": "71ae6e7a4892b4d2f0660280ce7a513da6a8b6f5b62692e0a0e03b47da1567a4"
	},
	{
		"id": "83caeb2a4fe4",
		"ts": "2026-08-17T16:22:10.584Z",
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
		"liquidityUsd": 537407.61,
		"hash": "83caeb2a4fe4cbb8c099c121f0de0d69b45ce34f62bba4cdbc1a9ad82f6427c0"
	},
	{
		"id": "55cea0a30d37",
		"ts": "2026-08-17T16:22:10.771Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 240541.79,
		"hash": "55cea0a30d370d7239491ee00819688ed84256ebf1dabdb9b22d5d4a33d638bc"
	},
	{
		"id": "ce546fa6e10f",
		"ts": "2026-08-17T16:22:10.945Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1005610.4,
		"hash": "ce546fa6e10fdf0aca9d8a8edc9f7d2b10accd08065c467ab852a400cef10d7e"
	},
	{
		"id": "fc50e17a04cd",
		"ts": "2026-08-17T16:22:11.147Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9815989.29,
		"hash": "fc50e17a04cd95ce08034fc80173d3efe4d860512ee94038038b08887f04f9ab"
	},
	{
		"id": "8f03af76051d",
		"ts": "2026-08-17T16:22:11.331Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 54609.2,
		"hash": "8f03af76051d95ca305fd2d37de8187ccea91cce8da57007eb915da91c729321"
	},
	{
		"id": "e120822103de",
		"ts": "2026-08-17T16:22:11.583Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2617279.67,
		"hash": "e120822103de3dd4c9fba9483b1a36d7f4b3bb68dc741008ee511681bbc270fe"
	},
	{
		"id": "f9ad538ef83c",
		"ts": "2026-08-17T16:22:11.784Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 92721.88,
		"hash": "f9ad538ef83ceba51ef1083d21a608807e50db20577a4ab53cbd583068e4c902"
	},
	{
		"id": "92907c58003c",
		"ts": "2026-08-17T16:22:11.988Z",
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
		"liquidityUsd": 614924.55,
		"hash": "92907c58003c423542ef1dd2988145da881888a04c1fd3e44b99143b70c94bce"
	},
	{
		"id": "27fe35a46eb9",
		"ts": "2026-08-17T15:20:48.268Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111675434.51,
		"hash": "27fe35a46eb96ea34dfb6f6fa158b11068536cf2661ced653b9af1d65ea6df8e"
	},
	{
		"id": "c0a205a3f2c9",
		"ts": "2026-08-17T15:20:48.703Z",
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
		"liquidityUsd": 15969439.05,
		"hash": "c0a205a3f2c93ecc1aa4c5c2557549b1c8ab12b1a1d84a2954a26d879ef79841"
	},
	{
		"id": "676131eb4344",
		"ts": "2026-08-17T15:20:48.942Z",
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
		"liquidityUsd": 797158.49,
		"hash": "676131eb4344c05a0437840aabd4e67806e99fadd452db8994f53e393f9b6b2b"
	},
	{
		"id": "cebc0a7b3964",
		"ts": "2026-08-17T15:20:49.369Z",
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
		"liquidityUsd": 27143042.74,
		"hash": "cebc0a7b3964c495c5ae3d976c6eb71e88fe70fa831b485556d6e957ab33a242"
	},
	{
		"id": "f47f81c91876",
		"ts": "2026-08-17T15:20:49.602Z",
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
		"liquidityUsd": 4236552.73,
		"hash": "f47f81c91876421927d9d780b79b7a184d2da9a864806dc9a179870955bfa484"
	},
	{
		"id": "3f38139324a0",
		"ts": "2026-08-17T15:20:49.842Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889686.1,
		"hash": "3f38139324a044f6b19bacd8c40bbe27f3f1f6089fcc219c44a0612c755be165"
	},
	{
		"id": "1b1caaf810ce",
		"ts": "2026-08-17T15:20:50.067Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4469084.95,
		"hash": "1b1caaf810ce563ccf4c04d46dde661d7fd882295cb3f568b56a9774863d0d49"
	},
	{
		"id": "8e205091ab92",
		"ts": "2026-08-17T15:20:50.308Z",
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
		"liquidityUsd": 1351772.37,
		"hash": "8e205091ab923df42b5cfda2c1fe405618e5303873665174dc831d91578787fb"
	},
	{
		"id": "73b1024b13a3",
		"ts": "2026-08-17T15:20:50.555Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 539980.17,
		"hash": "73b1024b13a326a0a180f8b06508b06b3993e2a501753f300dfdb95064f5edec"
	},
	{
		"id": "39e123f623ca",
		"ts": "2026-08-17T15:20:50.783Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 82,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.64,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 138353.93,
		"hash": "39e123f623ca66d05e360e5becf11dd097199b96f12e202a0ab4d245fb07ac93"
	},
	{
		"id": "d05cc180e24a",
		"ts": "2026-08-17T15:20:50.999Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 56839.97,
		"hash": "d05cc180e24a2294f7c6f6e0e958089e6e9a55ab82fd117f94dc670680c02b43"
	},
	{
		"id": "484dda567379",
		"ts": "2026-08-17T15:20:51.222Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 424552.66,
		"hash": "484dda56737987709ccb742054f0ad7a3438b4c52693d9b3c7bd3c830ea46c8d"
	},
	{
		"id": "0734572b7eb7",
		"ts": "2026-08-17T15:20:51.434Z",
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
		"liquidityUsd": 568465.78,
		"hash": "0734572b7eb7c467e083a9ecbb2d3cead82810ba998ab88e8050e37f2a4b1ad2"
	},
	{
		"id": "8bda457585e7",
		"ts": "2026-08-17T15:20:52.310Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 239363.84,
		"hash": "8bda457585e7cb740e28244553a679a4abb77989b1be5987a6e059466ecb650a"
	},
	{
		"id": "7bd97eff1bc2",
		"ts": "2026-08-17T15:20:52.532Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1004237.8,
		"hash": "7bd97eff1bc26624b32f4ffddf3d3a525e40ba2ad134c691cb22dfbab7ab6de4"
	},
	{
		"id": "03735de1c7ca",
		"ts": "2026-08-17T15:20:52.745Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9606024.4,
		"hash": "03735de1c7ca040f97382fb3f32c77ac17cadbc6a27d108d953d850895bf65d9"
	},
	{
		"id": "4333002b4cb9",
		"ts": "2026-08-17T15:20:52.966Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 65170.31,
		"hash": "4333002b4cb96987a5372f9f4f7538ade951085055513406144007a05ec04297"
	},
	{
		"id": "611feab0e137",
		"ts": "2026-08-17T15:20:53.179Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2598007.28,
		"hash": "611feab0e13706c8342f4cb995ac9bd6d2a7aea79c3ed08685997bcbb37fd4e3"
	},
	{
		"id": "3a2eb2153810",
		"ts": "2026-08-17T15:20:53.395Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4469084.95,
		"hash": "3a2eb215381097a2cd2713bf63f7607d760d224929b205a44d192e5d8a165f53"
	},
	{
		"id": "9e152f0dc02b",
		"ts": "2026-08-17T15:20:53.618Z",
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
		"liquidityUsd": 603909.15,
		"hash": "9e152f0dc02b8c7098f1daa8877d7acc9c4e02a18f52f2ef838e3531191cf25c"
	},
	{
		"id": "a30a3fea5875",
		"ts": "2026-08-17T14:22:55.791Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111417032.3,
		"hash": "a30a3fea587539832d2e6e3f733a0891e0b3b6eec3c02865afde773eba6b1278"
	},
	{
		"id": "cd6dea2b3d5a",
		"ts": "2026-08-17T14:22:56.236Z",
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
		"liquidityUsd": 18118177.23,
		"hash": "cd6dea2b3d5ad248b25e20cc77f2d33e6f6a028c20698ef422b9eeb9fa15187d"
	},
	{
		"id": "63c8bd478aeb",
		"ts": "2026-08-17T14:22:56.467Z",
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
		"liquidityUsd": 800150.26,
		"hash": "63c8bd478aebf8b8bdc74f72783637ffd4924b2df3cc30548289cb491d89ea0d"
	},
	{
		"id": "d2f5728c6214",
		"ts": "2026-08-17T14:22:56.701Z",
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
		"liquidityUsd": 27161373.78,
		"hash": "d2f5728c62142039b91be54a67396d07955f4ff6c4fb196a54c852d35faeca44"
	},
	{
		"id": "2ae191beb019",
		"ts": "2026-08-17T14:22:56.948Z",
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
		"liquidityUsd": 4228725.62,
		"hash": "2ae191beb019fbde89e2b68b71451cc2f0d980b7f85a64da8e9153901543bbd2"
	},
	{
		"id": "adb724b96f84",
		"ts": "2026-08-17T14:22:57.184Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 892290.12,
		"hash": "adb724b96f844cf405a2a43cd69a9b79d051fa3bd4ecfec84f64f784a6d3c91f"
	},
	{
		"id": "f94611e66a51",
		"ts": "2026-08-17T14:22:57.407Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4592795.09,
		"hash": "f94611e66a51a097a9168a279b5d697dbea6684894812d8c4683616a0d9faa88"
	},
	{
		"id": "f45e0d1378f5",
		"ts": "2026-08-17T14:22:57.653Z",
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
		"liquidityUsd": 3601354.24,
		"hash": "f45e0d1378f5b7a4a919521b28c39c200993c4aa8cd56ea478f5db84f7ac84d5"
	},
	{
		"id": "95f09ed5a9bf",
		"ts": "2026-08-17T14:22:57.895Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 490808.32,
		"hash": "95f09ed5a9bf7641037000f314cc70656807b144c52255c40180e09d0d7d27f6"
	},
	{
		"id": "54f6314e3903",
		"ts": "2026-08-17T14:22:58.117Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 140934.37,
		"hash": "54f6314e3903d21c133cf80cc95f4b657939f605ed62a4cf883b55f7cd060c07"
	},
	{
		"id": "1900aa26389a",
		"ts": "2026-08-17T14:22:58.328Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 72958.11,
		"hash": "1900aa26389afbc7d858dfc977a9ef2a9fe0ba1e6f93a94b84dd4e0615791ab6"
	},
	{
		"id": "56bba7bc6ada",
		"ts": "2026-08-17T14:22:58.557Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 427341.48,
		"hash": "56bba7bc6ada4c19002410e9e976c7393ad3c2e5d6f83b06c2cc8324c68d3cd2"
	},
	{
		"id": "5d140b0075a4",
		"ts": "2026-08-17T14:22:58.776Z",
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
		"liquidityUsd": 580787.35,
		"hash": "5d140b0075a4d06d0913459ac4df5ceeabad2e053405f4037de4b09f036c3b36"
	},
	{
		"id": "d241403b9dee",
		"ts": "2026-08-17T14:22:58.985Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 999041.5,
		"hash": "d241403b9dee210fe31cf38987fe80a65b9a29e1735505366e2aae61deb2b5e1"
	},
	{
		"id": "da0cb6816b0f",
		"ts": "2026-08-17T14:22:59.204Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9580621.86,
		"hash": "da0cb6816b0f2ef85fde41b3a9566f48e208f9cd46ffba5fef67a012baf00d1c"
	},
	{
		"id": "0225bedadc2c",
		"ts": "2026-08-17T14:22:59.427Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 60770.26,
		"hash": "0225bedadc2c73be0561f2198719ec02d68a6cb736785f6950c5b6f7d3b06f5e"
	},
	{
		"id": "ccfc17e64b18",
		"ts": "2026-08-17T14:22:59.647Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 241604.86,
		"hash": "ccfc17e64b1867a1c49902e7bad99fa80ed591ae1779abfe3c529eee7b4591ea"
	},
	{
		"id": "b25ea36fb811",
		"ts": "2026-08-17T14:22:59.857Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4602582.56,
		"hash": "b25ea36fb811008132e54b220784b8c598141eb5410b7bc466596e07e579ff2d"
	},
	{
		"id": "eecb13e705ec",
		"ts": "2026-08-17T14:23:00.074Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2612786.76,
		"hash": "eecb13e705ec2402e63768e089d6fa665baeefe0314d41f9af79c34c67efaee9"
	},
	{
		"id": "12a8a594a9f2",
		"ts": "2026-08-17T14:23:00.324Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 643720.55,
		"hash": "12a8a594a9f2ff20a83559fe069f5ba99920533d0dd6caac8d136906d102c215"
	},
	{
		"id": "ee41a825629b",
		"ts": "2026-08-17T13:36:12.631Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111562072.26,
		"hash": "ee41a825629b6888a78ca094406eb802a3a282717925db73cc07165ae8a3778a"
	},
	{
		"id": "5a52d51e78fa",
		"ts": "2026-08-17T13:36:13.070Z",
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
		"liquidityUsd": 19118180.33,
		"hash": "5a52d51e78fa6074af899f955a6de99bbd7315e4db1aaab93d6eb40e295fffe7"
	},
	{
		"id": "63732ed6a38f",
		"ts": "2026-08-17T13:36:13.323Z",
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
		"liquidityUsd": 800876.63,
		"hash": "63732ed6a38fe458f0c182c72ea206eadf831b039b9c0eab746513a328119554"
	},
	{
		"id": "11bba41fc257",
		"ts": "2026-08-17T13:36:13.572Z",
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
		"liquidityUsd": 27126596.91,
		"hash": "11bba41fc257407d433cff0a6d78a28c445af682689d0b594c9223bfc397a520"
	},
	{
		"id": "b777e6a4c1d9",
		"ts": "2026-08-17T13:36:13.820Z",
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
		"liquidityUsd": 4214456.32,
		"hash": "b777e6a4c1d931720a904c9891b86e5eb2e6feeaa1be979a86007098a9bf1bad"
	},
	{
		"id": "78e171658fe4",
		"ts": "2026-08-17T13:36:14.059Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889612.92,
		"hash": "78e171658fe49f4fc2bae940afdd2f0eb76f5b957fe042b47225714f2067a34a"
	},
	{
		"id": "2bbf92fa49c0",
		"ts": "2026-08-17T13:36:14.297Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4620833.83,
		"hash": "2bbf92fa49c00e51512f28facb5749ecd469fe16f39740e76898c785e574c02a"
	},
	{
		"id": "fbfe40720914",
		"ts": "2026-08-17T13:36:14.559Z",
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
		"liquidityUsd": 3596760.95,
		"hash": "fbfe407209140ad11a8e05b49001bc6fb17fa51183c55c6789476ac515ab64d5"
	},
	{
		"id": "c81342c0d140",
		"ts": "2026-08-17T13:36:14.895Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 84277.34,
		"hash": "c81342c0d1406b236ea6f232f7df3eefdcea6b5c7e7a8b9c79ea35d6a1908f5d"
	},
	{
		"id": "e499278be349",
		"ts": "2026-08-17T13:36:15.192Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 71994.49,
		"hash": "e499278be3493815979cb64a6632ddfaf5e884f27f32a612258d1f0b8ac33f5e"
	},
	{
		"id": "3980fe6f00c7",
		"ts": "2026-08-17T13:36:15.417Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 507427.17,
		"hash": "3980fe6f00c7b06ae0a7bfa60b98dd682d12fe52e02b4b2b48fb478822ab8c14"
	},
	{
		"id": "75bb1ca69cc0",
		"ts": "2026-08-17T13:36:15.643Z",
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
		"liquidityUsd": 1514022.49,
		"hash": "75bb1ca69cc0c05124330e455f07eca5868d4997cf4a0fc2e66b250ed09d947d"
	},
	{
		"id": "22a1a2c60cba",
		"ts": "2026-08-17T13:36:15.887Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 703977.69,
		"hash": "22a1a2c60cba49a75f9e23f49f0a16356ead4e9cdf8d774f495cd1bb6e9f5855"
	},
	{
		"id": "ec30fad18789",
		"ts": "2026-08-17T13:36:16.115Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4599648.17,
		"hash": "ec30fad18789ab938890d7001d10869bb08a77abbd723c06ae00e351c4f65890"
	},
	{
		"id": "352c3e1e412f",
		"ts": "2026-08-17T13:36:16.337Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 995106.91,
		"hash": "352c3e1e412f809ee1b25ed8a2b2a350a77d061e69e686e0400bb36b2c9e9873"
	},
	{
		"id": "a45583c6e0a3",
		"ts": "2026-08-17T13:36:16.560Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 77996,
		"hash": "a45583c6e0a30c466dd8f9619849d89a793b0f1b9c45ebed0308c5a7fcc1e3e4"
	},
	{
		"id": "48e81d0b29ac",
		"ts": "2026-08-17T13:36:16.782Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9607231.76,
		"hash": "48e81d0b29ac415883e300f831b1a3cbc0c38cda525f3a9e0cedd79ce4bd171a"
	},
	{
		"id": "ce66839d2ca3",
		"ts": "2026-08-17T13:36:17.006Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 244167.35,
		"hash": "ce66839d2ca3895c820e942f8ac2a7e7f86fab1b5bcd501eb95a68808335fc2e"
	},
	{
		"id": "ce177daa5387",
		"ts": "2026-08-17T13:36:17.227Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2608454.69,
		"hash": "ce177daa5387d6daa8234ecb66fb247707d88820c15338a7d1bc5762d60f2542"
	},
	{
		"id": "f5e10ad12042",
		"ts": "2026-08-17T13:36:17.450Z",
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
		"liquidityUsd": 631056.27,
		"hash": "f5e10ad12042b9cbbd307d9fe6cdf26412ff8a7f6a824d54bd1d213b3bc64df1"
	},
	{
		"id": "13dd6fee954e",
		"ts": "2026-08-17T12:35:39.692Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111638660.24,
		"hash": "13dd6fee954e01aefb2392490edb377122b7258e4f1e2e314b425912df2d0420"
	},
	{
		"id": "f4684aedbac6",
		"ts": "2026-08-17T12:35:40.114Z",
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
		"liquidityUsd": 18437900.08,
		"hash": "f4684aedbac6ab57461133a7195b71ecedd1dfde1731c7e8d6b92355a8cb4f85"
	},
	{
		"id": "39a268d8f07a",
		"ts": "2026-08-17T12:35:40.343Z",
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
		"liquidityUsd": 799274.44,
		"hash": "39a268d8f07a3a581c65660500f7b40ae9697b7f66edd73d785b76133c4f1312"
	},
	{
		"id": "a1b571f95334",
		"ts": "2026-08-17T12:35:40.573Z",
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
		"liquidityUsd": 27028944.78,
		"hash": "a1b571f953347f4849b583681fb11c78836ed6bbe26289c8c76993deade9b570"
	},
	{
		"id": "c380e11a40ec",
		"ts": "2026-08-17T12:35:40.830Z",
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
		"liquidityUsd": 4187758.99,
		"hash": "c380e11a40ecc5d5c4e4d957ded55272a4f8f220af7d44f5710d2db432bffbe3"
	},
	{
		"id": "e70723277552",
		"ts": "2026-08-17T12:35:41.110Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 894708.9,
		"hash": "e7072327755234777d6733ef929b7d7224f905193a8e4a2debfe6f6783110be7"
	},
	{
		"id": "760c9d4c9f74",
		"ts": "2026-08-17T12:35:41.331Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4581304.58,
		"hash": "760c9d4c9f748c1db94c8d96957a7446edbbc17b8e024d2bb91850f2532e295f"
	},
	{
		"id": "cc5b9f0eb0c2",
		"ts": "2026-08-17T12:35:41.556Z",
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
		"liquidityUsd": 3305298.91,
		"hash": "cc5b9f0eb0c2f6a79fb3107fc83bc4ab8f4ea924a06c9687dc0e69c6209cb5cb"
	},
	{
		"id": "7975f453f526",
		"ts": "2026-08-17T12:35:41.783Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 92954.57,
		"hash": "7975f453f526fb14319431e3991e022cc187c8b3663c51d6e250aa09335dafd3"
	},
	{
		"id": "5ff5ad490f6f",
		"ts": "2026-08-17T12:35:42.006Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 75421.66,
		"hash": "5ff5ad490f6f687fa46a659ae51df254acb3f046f05d76ba45a02cb46d2bd3bc"
	},
	{
		"id": "b766a92f217a",
		"ts": "2026-08-17T12:35:42.216Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 428895.09,
		"hash": "b766a92f217ae75ecaed490e1fc14bd2f30d6a80327c285d87164408f390118a"
	},
	{
		"id": "b557ba8d1fc0",
		"ts": "2026-08-17T12:35:42.427Z",
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
		"liquidityUsd": 1483895.07,
		"hash": "b557ba8d1fc07b9f3e2749f52eac86f9fd11be610f23ebeea9025c75bcd05f92"
	},
	{
		"id": "533ba66cf460",
		"ts": "2026-08-17T12:35:42.635Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 704691.48,
		"hash": "533ba66cf4609989c0499a78426b2797ac83ef38572a74509e8dd637f32933df"
	},
	{
		"id": "e8910b1764b4",
		"ts": "2026-08-17T12:35:42.845Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4581304.58,
		"hash": "e8910b1764b41f03aab179fa29e04242dadd6a67536b18062ef2ead2cfa63209"
	},
	{
		"id": "60894f5335c8",
		"ts": "2026-08-17T12:35:43.054Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 994763.47,
		"hash": "60894f5335c8b9fbb499df19263c913a6f520c3dcd0133eb32a76b64d38004a0"
	},
	{
		"id": "528454aac82b",
		"ts": "2026-08-17T12:35:43.262Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9612202.37,
		"hash": "528454aac82b663fb2f2fd5ff2bebfd4fa9d5a222f73c77d1535d0e6f7eadfc0"
	},
	{
		"id": "34958b092921",
		"ts": "2026-08-17T12:35:43.471Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 246368.73,
		"hash": "34958b0929211f4a12e16bd355fe45873ea1faf9181a3fcb0145ddc3b0acbb6b"
	},
	{
		"id": "3dee2d98bfa3",
		"ts": "2026-08-17T12:35:43.681Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2576564.51,
		"hash": "3dee2d98bfa3178db6fc69cad052fb1951c5415b865b96d38bf7c72378cd07e2"
	},
	{
		"id": "f5df58660278",
		"ts": "2026-08-17T12:35:43.890Z",
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
		"liquidityUsd": 639518.03,
		"hash": "f5df586602780118227a8e265526a87f48f90ba3bc65e3174505f34b7bf946c2"
	},
	{
		"id": "28a745337cea",
		"ts": "2026-08-17T11:20:38.467Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111650343.65,
		"hash": "28a745337cea800b6a5c7a3c5806c929545d629568634d307b1ffcf9e984e62a"
	},
	{
		"id": "d6fe7e4e4c45",
		"ts": "2026-08-17T11:20:38.693Z",
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
		"liquidityUsd": 18770173.4,
		"hash": "d6fe7e4e4c45df4c1c742b99e08b9177f45645cece89e16cd5650d6d25b0f43f"
	},
	{
		"id": "27992584a7dd",
		"ts": "2026-08-17T11:20:38.903Z",
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
		"liquidityUsd": 808305.45,
		"hash": "27992584a7ddcf821714b58cfc1750ae77a562d097141b6e316df27545d1bd56"
	},
	{
		"id": "14e7acb8b0dd",
		"ts": "2026-08-17T11:20:39.111Z",
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
		"liquidityUsd": 27010957.68,
		"hash": "14e7acb8b0dd6cc80c14adf75bc3055a76c9d222012e3a7cee7a0023a7223244"
	},
	{
		"id": "36181e1566fb",
		"ts": "2026-08-17T11:20:39.305Z",
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
		"liquidityUsd": 4192759.79,
		"hash": "36181e1566fbeb73f03b35a80b205f60153e27b8660104ff6ed43b59fcde883e"
	},
	{
		"id": "e7255cd7d122",
		"ts": "2026-08-17T11:20:39.528Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 890524.48,
		"hash": "e7255cd7d122af976adac1575005735fa2f8e650ab2b63b541e50e60692db890"
	},
	{
		"id": "cb9e10d7f552",
		"ts": "2026-08-17T11:20:39.721Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4627565.72,
		"hash": "cb9e10d7f552d41e8b0a7401f41844710299f3f8a903bbcdcba7ff03c07b7cd3"
	},
	{
		"id": "588445116ba7",
		"ts": "2026-08-17T11:20:39.924Z",
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
		"liquidityUsd": 3637690.93,
		"hash": "588445116ba7ded37e8bc5f5e649e7aa1494ca2d77638b5b53bac9cb2132e146"
	},
	{
		"id": "007406b15321",
		"ts": "2026-08-17T11:20:40.183Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 89828.55,
		"hash": "007406b15321d822748ecdeae2cdc65e4810e8e36ea476df2890d32b26d8d044"
	},
	{
		"id": "8b9dd9a9015e",
		"ts": "2026-08-17T11:20:40.377Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 81957.42,
		"hash": "8b9dd9a9015e81ef6b2ffcc98862f697c1b5caf95c81e0e398322313c7e4c377"
	},
	{
		"id": "e3854576662b",
		"ts": "2026-08-17T11:20:40.563Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 460002.38,
		"hash": "e3854576662bf8c641a3bddbce4d6a402e34f9e6bfbf81f12a3a7f1fef56ee84"
	},
	{
		"id": "066dc4c494b9",
		"ts": "2026-08-17T11:20:40.744Z",
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
		"liquidityUsd": 1468162.23,
		"hash": "066dc4c494b9f202f7f24c4d0fd506993fa800707d05a1b9edf152276123746b"
	},
	{
		"id": "c0571b8e75a2",
		"ts": "2026-08-17T11:20:40.950Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4638619.35,
		"hash": "c0571b8e75a2072dc73b8b71190d4f18114b741541d8215736cf131aa2e4a869"
	},
	{
		"id": "e5edd291211f",
		"ts": "2026-08-17T11:20:41.140Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 747223.78,
		"hash": "e5edd291211ff0faf33a1f73b6a6e4f03ea738c18f0aba212501a2a70af3ead8"
	},
	{
		"id": "d5093fe12f72",
		"ts": "2026-08-17T11:20:41.344Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1003998.64,
		"hash": "d5093fe12f7237bf3e4d1fe0fca4279d465fb6ec01c5b550dc86812c099563a6"
	},
	{
		"id": "f3d77a336ba1",
		"ts": "2026-08-17T11:20:41.534Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9677646.65,
		"hash": "f3d77a336ba146e6448b1cf877deb90a916a901f5d242591a7b14d01de23accd"
	},
	{
		"id": "b976bf094902",
		"ts": "2026-08-17T11:20:41.743Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 254577.99,
		"hash": "b976bf094902ab82bd2faa7a279165106cdbf85e65328376cac1fb0b2621d448"
	},
	{
		"id": "1915eb26b320",
		"ts": "2026-08-17T11:20:41.925Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2584367.54,
		"hash": "1915eb26b320b96fe5a28a6c21f5a2c9d94d603d61b1eeb1d0ca64be39f41b0c"
	},
	{
		"id": "460d8a9e9123",
		"ts": "2026-08-17T11:20:42.174Z",
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
		"liquidityUsd": 659977.06,
		"hash": "460d8a9e9123a50852fd666cb3da60d93d7568e68f492432fdd1ef98eb41aa07"
	},
	{
		"id": "bcd0453e5745",
		"ts": "2026-08-17T10:27:37.327Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111495309.69,
		"hash": "bcd0453e5745c15be0b440907b1b450c90aaf537f71b6cefbc944c410354c4c4"
	},
	{
		"id": "98000ffad7d8",
		"ts": "2026-08-17T10:27:38.003Z",
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
		"liquidityUsd": 18006869.81,
		"hash": "98000ffad7d8afc431f2b14ef7f61f4d1b748a10425c3d0574ef9c4066f872f5"
	},
	{
		"id": "9d907de30bac",
		"ts": "2026-08-17T10:27:38.463Z",
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
		"liquidityUsd": 803712.06,
		"hash": "9d907de30bac5101d4177b27e33d3524f84102ff6cdd72e7865a9a242c4ac35e"
	},
	{
		"id": "e691dd6880cb",
		"ts": "2026-08-17T10:27:38.710Z",
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
		"liquidityUsd": 26960204.04,
		"hash": "e691dd6880cb0618b8da13c31074d8034b3edb7e0b76a21811ac57d0cca60302"
	},
	{
		"id": "b1909d4549a9",
		"ts": "2026-08-17T10:27:39.166Z",
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
		"liquidityUsd": 4163027.34,
		"hash": "b1909d4549a9c2c0b795755436d045877d81d5ebd8415785736f381cb82c2cbb"
	},
	{
		"id": "cd8de56b54f9",
		"ts": "2026-08-17T10:27:39.411Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 890524.48,
		"hash": "cd8de56b54f9d6f920b740c1d314c0c1f0149e553aae2422d015f793964e6c4d"
	},
	{
		"id": "37dfb3a84d94",
		"ts": "2026-08-17T10:27:39.654Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5098845.99,
		"hash": "37dfb3a84d94c3ed1701985a367506ddb007e286ea70ece809f768e8c485b148"
	},
	{
		"id": "343c1614b0e3",
		"ts": "2026-08-17T10:27:39.899Z",
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
		"liquidityUsd": 3310341.94,
		"hash": "343c1614b0e3572acb91938d30fd59a14a4329d48319a8c67cb8e4e9ead15bb8"
	},
	{
		"id": "e7b997c0a0a9",
		"ts": "2026-08-17T10:27:40.573Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 83025.13,
		"hash": "e7b997c0a0a971505835c45d7413a5752cd14b54273798476dc0373d188b31d6"
	},
	{
		"id": "75d0c09edafa",
		"ts": "2026-08-17T10:27:40.816Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 81900.96,
		"hash": "75d0c09edafaf41093f45507652a479ca5f46c945fa5f3d73a639dcf10c1a741"
	},
	{
		"id": "a01612f630f1",
		"ts": "2026-08-17T10:27:41.048Z",
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
		"liquidityUsd": 5098845.99,
		"hash": "a01612f630f1f4f59b58377870b69d91b68ebec184d391352256930f0f6a1418"
	},
	{
		"id": "7014b549933b",
		"ts": "2026-08-17T10:27:41.277Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 480746.62,
		"hash": "7014b549933b42173f7c210f82c29d4fce7d2cda9b8a4cface7e5a425f2dcecf"
	},
	{
		"id": "0d6e5877b62d",
		"ts": "2026-08-17T10:27:41.508Z",
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
		"liquidityUsd": 1425669.46,
		"hash": "0d6e5877b62dcc59fc70db62c22c93ca95bc4b5659b387f6e9ac6481aa917976"
	},
	{
		"id": "c3d9b243007d",
		"ts": "2026-08-17T10:27:41.738Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 995243.47,
		"hash": "c3d9b243007d07525739837e612be1d6aa0d4290aa5ca6a5b3b8a2036232bc7d"
	},
	{
		"id": "3d5a9d76644d",
		"ts": "2026-08-17T10:27:41.969Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 702917.81,
		"hash": "3d5a9d76644dd5e893d4b04920da7118d7fbf660164a269a3bf80d10ccc81537"
	},
	{
		"id": "266b246fd1e6",
		"ts": "2026-08-17T10:27:42.198Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9599019.39,
		"hash": "266b246fd1e6b08cf56e954356e52023980e12cb9690f5d2f4263e4b840e9c77"
	},
	{
		"id": "1552b2567547",
		"ts": "2026-08-17T10:27:42.427Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2563569.62,
		"hash": "1552b25675479a590057be6699e1e341cf4b3212ab163a2c27fffe04340df21d"
	},
	{
		"id": "4a9d676b0667",
		"ts": "2026-08-17T10:27:42.655Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 256060.15,
		"hash": "4a9d676b06671ec47a88c6e0bec080c4f3cee70fb88951edec06dff98be53386"
	},
	{
		"id": "eca8dbc693e2",
		"ts": "2026-08-17T10:27:42.885Z",
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
		"liquidityUsd": 590132.48,
		"hash": "eca8dbc693e2ec2d5408749c84a3b0bdb7fe553e8a33211d26f385f8c5fcc782"
	},
	{
		"id": "7716612a38e7",
		"ts": "2026-08-17T10:27:43.113Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 73269.45,
		"hash": "7716612a38e7221f19a1a1b31708b13ffc49f259c4e2096838d6e65bcc5781a2"
	},
	{
		"id": "b6906d6300ec",
		"ts": "2026-08-17T09:36:30.550Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111520771.7,
		"hash": "b6906d6300ec7c71d8187814a6f262f1a52b2710a85785cac128fd6cf488d7d4"
	},
	{
		"id": "ab0232295362",
		"ts": "2026-08-17T09:36:31.050Z",
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
		"liquidityUsd": 17795396.14,
		"hash": "ab023229536239e927848f17261cfa15228fd16db28949bac4c4945aead18e5a"
	},
	{
		"id": "8580b99cea72",
		"ts": "2026-08-17T09:36:31.328Z",
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
		"liquidityUsd": 803712.06,
		"hash": "8580b99cea72e05d851ef59b749cd35f736b9a28c994a3b2d88fb8f884d0c1a3"
	},
	{
		"id": "0961d9afa657",
		"ts": "2026-08-17T09:36:31.606Z",
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
		"liquidityUsd": 26987038.66,
		"hash": "0961d9afa65743f47ac7400e524a8f4e08cf71ceefda76d0f703a50c0f73aff4"
	},
	{
		"id": "e742b3e468c7",
		"ts": "2026-08-17T09:36:31.884Z",
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
		"liquidityUsd": 4170646.72,
		"hash": "e742b3e468c759139387822ce4b9bcb2873c63617fbf25cb1ec17ac93f14aafa"
	},
	{
		"id": "58b5483a0b64",
		"ts": "2026-08-17T09:36:32.197Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 890524.48,
		"hash": "58b5483a0b64a2b959fe84d66a00d821147ac38ed1d11bb89d0d0aec935b7a37"
	},
	{
		"id": "7c0dbcc560b8",
		"ts": "2026-08-17T09:36:32.518Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5162758.44,
		"hash": "7c0dbcc560b84f3a0fca290db02b9d1fb1a9c8276d8d9191e418c2ddde1edab9"
	},
	{
		"id": "39e7e457ba7c",
		"ts": "2026-08-17T09:36:32.810Z",
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
		"liquidityUsd": 3312895.22,
		"hash": "39e7e457ba7ca4e83d83244ccc484540bebe784ff51fcb3bfd3835cfaa76a601"
	},
	{
		"id": "fd0c4e239196",
		"ts": "2026-08-17T09:36:33.090Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 85721.28,
		"hash": "fd0c4e2391964ad019bf9da8995ac8d6f5a9e81374fa5b98f4aaeb801954e834"
	},
	{
		"id": "56c20b9a9b9f",
		"ts": "2026-08-17T09:36:33.367Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 85031.05,
		"hash": "56c20b9a9b9f2b4c2962eab24327617985e66eb53d47f9ef0fa100c703dd11cb"
	},
	{
		"id": "c507c7ef9c30",
		"ts": "2026-08-17T09:36:33.630Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5162772.31,
		"hash": "c507c7ef9c30ec8d47cc7291bb47a42c08b9bf67b4842f60fcb1b7622fb0fc14"
	},
	{
		"id": "2316529dc86a",
		"ts": "2026-08-17T09:36:34.022Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 517439.59,
		"hash": "2316529dc86ad6397a837012974a9e18df35e064b4117152b1b1f46e6b0c457b"
	},
	{
		"id": "4565f0842758",
		"ts": "2026-08-17T09:36:34.283Z",
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
		"liquidityUsd": 1496358.51,
		"hash": "4565f0842758a6b7f44a8a7b7e5e51f56a0b78f167f4c99ef6747186f1252a3e"
	},
	{
		"id": "5e23a433e0e7",
		"ts": "2026-08-17T09:36:34.544Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1002887.23,
		"hash": "5e23a433e0e7e40b2eeac07eb2f9c8205beb0e2bebf95cc5d3f92c7e17e13920"
	},
	{
		"id": "395831ae7b2c",
		"ts": "2026-08-17T09:36:34.805Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9606162.81,
		"hash": "395831ae7b2cc027372a6c5ced641457a1ad259ca5f03bff9e9ca7c4696a9d46"
	},
	{
		"id": "4466ce2d575e",
		"ts": "2026-08-17T09:36:35.066Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2575781.08,
		"hash": "4466ce2d575e44a9df617e63707f682d633b8cd8eb21e239fb1336812f646b8c"
	},
	{
		"id": "ec909929b081",
		"ts": "2026-08-17T09:36:35.327Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 691439.23,
		"hash": "ec909929b08188be804614bb5e34641ab435ff52c843d0545a13ecbbd729ecde"
	},
	{
		"id": "eddf0be0b4b6",
		"ts": "2026-08-17T09:36:35.588Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 80392.81,
		"hash": "eddf0be0b4b682cb675ebc02d2a198dcc94c7d314fd75d697bf28d42364e112f"
	},
	{
		"id": "5c8a0e366f88",
		"ts": "2026-08-17T09:36:35.849Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 256127.89,
		"hash": "5c8a0e366f884e6b33b6199b93ce228a9be5b12a769ad6bd6ae8914b7328923f"
	},
	{
		"id": "574e92b9fc4e",
		"ts": "2026-08-17T09:36:36.110Z",
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
		"liquidityUsd": 591526.85,
		"hash": "574e92b9fc4ef65fe9acd87a67ee02e327d57e88a295cc84bae4d98ee795036c"
	},
	{
		"id": "a3960a3fdb9f",
		"ts": "2026-08-17T08:38:15.363Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 111488552.53,
		"hash": "a3960a3fdb9f7b21394e69801e28418f6838add8162e11b913c1ffc5b45b4aa5"
	},
	{
		"id": "51b2ab17ecb5",
		"ts": "2026-08-17T08:38:34.067Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 18332827.73,
		"hash": "51b2ab17ecb5d87955106a065795affb5fda696bb1206bc2b88cc72ec7a889cb"
	}
]
