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
	"updatedAt": "2026-07-09T14:50:01.824Z",
	"tokensScored": 2243,
	"verdictsIssued": 2243,
	"safe": 1962,
	"risky": 213,
	"likelyRug": 68,
	"ticks": 144
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "08554d2d87b2",
		"ts": "2026-07-09T14:49:57.527Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 103733301.39,
		"hash": "08554d2d87b29df7da662ff3c55516a3e443719ff18c33b1ce047768e18959dc"
	},
	{
		"id": "fffeab7fe449",
		"ts": "2026-07-09T14:49:58.075Z",
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
		"liquidityUsd": 15017093.75,
		"hash": "fffeab7fe4491dfc51cf7020b759d615a2f4ef62e202dbcc8ed196272a234e66"
	},
	{
		"id": "4c8f96d93759",
		"ts": "2026-07-09T14:49:58.450Z",
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
		"liquidityUsd": 1344136.01,
		"hash": "4c8f96d937594579e29a27c1ecba10f04c0629d6861716130ceb4f9b3facea95"
	},
	{
		"id": "3b9d892f76f4",
		"ts": "2026-07-09T14:49:58.722Z",
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
		"liquidityUsd": 31338897.23,
		"hash": "3b9d892f76f4d20dbe328ac141397e89ed728888152ca0a97499f28165f02bc5"
	},
	{
		"id": "f2179e3f8240",
		"ts": "2026-07-09T14:49:58.933Z",
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
		"liquidityUsd": 3929194.13,
		"hash": "f2179e3f824054660437ee4ed8fdb41918e2a7797ffb6809bcc8b87bd040dfe7"
	},
	{
		"id": "3f5c6b8ac10e",
		"ts": "2026-07-09T14:49:59.141Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 967535.37,
		"hash": "3f5c6b8ac10e16a5a25dc9a0a6851a1ddf3a84ea0bcae88ed98a01b3ccd77608"
	},
	{
		"id": "eb693a2c4f69",
		"ts": "2026-07-09T14:49:59.344Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 31338897.23,
		"hash": "eb693a2c4f69d813fcff849d9549a7ef02aa09b88f16299b3fd9246a4b6b9dbc"
	},
	{
		"id": "64adbea6881d",
		"ts": "2026-07-09T14:49:59.567Z",
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
		"liquidityUsd": 2518175.41,
		"hash": "64adbea6881dfe15212672a0acd052d40c6428b95470e295cc51876f4bcb2d6c"
	},
	{
		"id": "62d172ea9c80",
		"ts": "2026-07-09T14:49:59.775Z",
		"symbol": "RWAGMI",
		"token": "0xb200000000000000000000Bf0548AB2ebD00bA5e",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"not_open_source",
			"sim_honeypot"
		],
		"liquidityUsd": 0,
		"hash": "62d172ea9c804d72ad542ef19e7e6419e0222f174d8ac7e67e6e0654e5adc12a"
	},
	{
		"id": "599dffcfcd5a",
		"ts": "2026-07-09T14:49:59.984Z",
		"symbol": "B20",
		"token": "0xB2000000000000000000003deF83e24a9A000b20",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"not_open_source",
			"sim_honeypot"
		],
		"liquidityUsd": 21.87,
		"hash": "599dffcfcd5a3f735738a9935332f6e31e95009fc7b5aec6b4b9e6768848faff"
	},
	{
		"id": "15c54174f7d1",
		"ts": "2026-07-09T14:50:00.195Z",
		"symbol": "B420",
		"token": "0xB200000000000000000000231d6C1F1CE455ba32",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"not_open_source"
		],
		"liquidityUsd": 0,
		"hash": "15c54174f7d16f38694e2c1ab313251e844e1999d5371145afd7a52e0bb3e50b"
	},
	{
		"id": "dacd13b6dabf",
		"ts": "2026-07-09T14:50:00.451Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 629752.19,
		"hash": "dacd13b6dabfa12ad20d217c58f04189b4b2f31baa8dc4b28df453ac606ec51f"
	},
	{
		"id": "398ba8444595",
		"ts": "2026-07-09T14:50:00.738Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1915706.68,
		"hash": "398ba8444595bb18994be3d8c7c5a45cbef386e22b2b6500594652d615a5feba"
	},
	{
		"id": "059a2186db5f",
		"ts": "2026-07-09T14:50:00.951Z",
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
		"liquidityUsd": 7872654.99,
		"hash": "059a2186db5f6b9ea7c9696af0eff74523968afcaff1aba213d2cda674e4fccf"
	},
	{
		"id": "957637fbcebb",
		"ts": "2026-07-09T14:50:01.157Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1569787.24,
		"hash": "957637fbcebb9667cd70ab10bbfe2f292430381a5491dfc4374a2368e1ee3ee2"
	},
	{
		"id": "f9ab9810f35f",
		"ts": "2026-07-09T14:50:01.368Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 815744.6,
		"hash": "f9ab9810f35fe0964e9e3a38e51e4a879f57e7523ba051dce75497353433e25c"
	},
	{
		"id": "edec9a9ac448",
		"ts": "2026-07-09T14:50:01.575Z",
		"symbol": "cc0company",
		"token": "0x67c5F00491c09cbCF6359f95690574E6106bb3CF",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 72085.95,
		"hash": "edec9a9ac448b72bb41e75bb34010697936cc72da1d17982ad3605790b0e40ea"
	},
	{
		"id": "afd3b74e8e56",
		"ts": "2026-07-09T14:50:01.823Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 352831.9,
		"hash": "afd3b74e8e56d9701163a191a53fb4fbbb03a31d29737880055de88f6a076818"
	},
	{
		"id": "f80b68eafc85",
		"ts": "2026-07-09T11:53:59.272Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 103907636.31,
		"hash": "f80b68eafc85202329657a5bf38fd28b9a143643b1d77eed8776eebba1f6d6b6"
	},
	{
		"id": "a5ad31dfc400",
		"ts": "2026-07-09T11:53:59.758Z",
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
		"liquidityUsd": 15557043.45,
		"hash": "a5ad31dfc400ef206941b86b80d1d85bd8dbd38a7246506864642d25f7ae7f19"
	},
	{
		"id": "8f1041b1ef25",
		"ts": "2026-07-09T11:54:00.013Z",
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
		"liquidityUsd": 1341409.72,
		"hash": "8f1041b1ef25e42827e3878515bb50d4b859295ea617d58fbf106ccd4c2d96a3"
	},
	{
		"id": "90d1a2553528",
		"ts": "2026-07-09T11:54:00.474Z",
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
		"liquidityUsd": 31538080.58,
		"hash": "90d1a255352833c9e448811b26c8778845605b06773495a4071de1ae8a0658f4"
	},
	{
		"id": "6a29d6c1fba9",
		"ts": "2026-07-09T11:54:00.733Z",
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
		"liquidityUsd": 3927256.39,
		"hash": "6a29d6c1fba9fbd3096f2ac3b2eee91085c294c2730498689fc60f50bafca219"
	},
	{
		"id": "104588f44d16",
		"ts": "2026-07-09T11:54:00.988Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 967557.12,
		"hash": "104588f44d16a0e4f4440f8ec5948554d5a3b60eba1101fd7fe90db40cb47240"
	},
	{
		"id": "0b085832d50b",
		"ts": "2026-07-09T11:54:01.245Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 31538080.58,
		"hash": "0b085832d50bc09b97dbe50a906347c7afe2c24654760023c0e0ec7aafbef13a"
	},
	{
		"id": "806620f3730d",
		"ts": "2026-07-09T11:54:01.554Z",
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
		"liquidityUsd": 2505748.46,
		"hash": "806620f3730db8df4041831935332d46892b7d6c0f5e0b9815d440db1db10520"
	},
	{
		"id": "1d5aab6734d6",
		"ts": "2026-07-09T11:54:01.813Z",
		"symbol": "RWAGMI",
		"token": "0xb200000000000000000000Bf0548AB2ebD00bA5e",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"not_open_source",
			"sim_honeypot"
		],
		"liquidityUsd": 0,
		"hash": "1d5aab6734d6ae85b767dd09141851dc76fe61f5e6cd4cec61c81f243c701074"
	},
	{
		"id": "ebd3543df4e9",
		"ts": "2026-07-09T11:54:02.129Z",
		"symbol": "B20",
		"token": "0xB2000000000000000000003deF83e24a9A000b20",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"not_open_source",
			"sim_honeypot"
		],
		"liquidityUsd": 2732.18,
		"hash": "ebd3543df4e9fd16b6ee491e1cf8253d1388c488ca2dcf1317cfe275b9d93560"
	},
	{
		"id": "b9db262b5ad3",
		"ts": "2026-07-09T11:54:02.397Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 631953.3,
		"hash": "b9db262b5ad3199725b49d6bba47e830d1854089a78092b38857601d79939ffc"
	},
	{
		"id": "0351642aed44",
		"ts": "2026-07-09T11:54:02.655Z",
		"symbol": "B420",
		"token": "0xB200000000000000000000231d6C1F1CE455ba32",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"not_open_source"
		],
		"liquidityUsd": 0,
		"hash": "0351642aed445ca336cae6d46a6c5cf3f9be6cf8938d1fb247c9da5daf56d42d"
	},
	{
		"id": "127078534cf5",
		"ts": "2026-07-09T11:54:02.910Z",
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
		"liquidityUsd": 7740866.6,
		"hash": "127078534cf5f9d66d4418fbbf03cf75089988e79b53d40c40a0529aa75b813d"
	},
	{
		"id": "ac8fb3bca839",
		"ts": "2026-07-09T11:54:03.151Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 311866.1,
		"hash": "ac8fb3bca839e0281a6a59112aaedb9ebec4e8c342ed193e1dbc7a6feb2d8b2b"
	},
	{
		"id": "994d21b1acfc",
		"ts": "2026-07-09T11:54:03.389Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1919490.4,
		"hash": "994d21b1acfc903805901f2c0dfd8633147ba646035e6cf1616cbd0fe14f4617"
	},
	{
		"id": "f9e199104682",
		"ts": "2026-07-09T11:54:03.626Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1592175.71,
		"hash": "f9e199104682400073d9d78724d443c02aef6a61fe96857686f8d0efde2b7fe0"
	},
	{
		"id": "75649efa66c9",
		"ts": "2026-07-09T11:54:03.866Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 815945.98,
		"hash": "75649efa66c9b551b568ddd5f2e01817ee01b076e3a05c0068f054ad049cdaeb"
	},
	{
		"id": "7d4fd7f5a8a8",
		"ts": "2026-07-09T11:54:04.105Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 513996.63,
		"hash": "7d4fd7f5a8a8f2eca24a114fde9630b189f3c8a6f1645e8299e54f3935655361"
	},
	{
		"id": "4d61e107fa35",
		"ts": "2026-07-09T08:24:39.614Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 104009078.18,
		"hash": "4d61e107fa352afbca10bae15e3c40cc3cbadc86af69e647b4e72cb9e4a4c86e"
	},
	{
		"id": "ee329cc3eb70",
		"ts": "2026-07-09T08:24:39.824Z",
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
		"liquidityUsd": 16304587.18,
		"hash": "ee329cc3eb700aa4d2feb88f2b73d1b9deb23792ad3ee74221579f67e0245a9d"
	},
	{
		"id": "d1ec85d8036d",
		"ts": "2026-07-09T08:24:40.034Z",
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
		"liquidityUsd": 1345627.39,
		"hash": "d1ec85d8036df9a4711c20d183ad24a6fc6b0c6a2311951da1cea4133e08c7d3"
	},
	{
		"id": "e30d9aee5fbb",
		"ts": "2026-07-09T08:24:40.392Z",
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
		"liquidityUsd": 31893430.95,
		"hash": "e30d9aee5fbb312a917b50478ff119acd081483d5b0e432503a21d13946463fd"
	},
	{
		"id": "50f7d31d9cbe",
		"ts": "2026-07-09T08:24:40.603Z",
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
		"liquidityUsd": 3945628.79,
		"hash": "50f7d31d9cbeaf4c693032d10279f3138a8b7cb616455846216d55580342b7ce"
	},
	{
		"id": "d4745eb6b232",
		"ts": "2026-07-09T08:24:40.810Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 967516.04,
		"hash": "d4745eb6b232d7ffef9fddeb504b2dfc8a1af5444b906ae77c0e922bfbc5034c"
	},
	{
		"id": "2db86f6b50a4",
		"ts": "2026-07-09T08:24:41.016Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 31893430.95,
		"hash": "2db86f6b50a46d84a250736098d48d5860c065efb2681da611bb43b459f1d038"
	},
	{
		"id": "8386f26972bd",
		"ts": "2026-07-09T08:24:41.422Z",
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
		"liquidityUsd": 2537320.36,
		"hash": "8386f26972bd51bf3e53a45fc5a4ef3e53443ab40b770afe28a4b97cf30370d7"
	},
	{
		"id": "d68b4a4669d5",
		"ts": "2026-07-09T08:24:41.639Z",
		"symbol": "RWAGMI",
		"token": "0xb200000000000000000000Bf0548AB2ebD00bA5e",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"not_open_source",
			"sim_honeypot"
		],
		"liquidityUsd": 0,
		"hash": "d68b4a4669d584ccbc08343535a656a6de366fc2a151cb937a52741625ce5ab4"
	},
	{
		"id": "0348f8ecea10",
		"ts": "2026-07-09T08:24:41.860Z",
		"symbol": "B20",
		"token": "0xB2000000000000000000003deF83e24a9A000b20",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"not_open_source",
			"sim_honeypot"
		],
		"liquidityUsd": 3269.78,
		"hash": "0348f8ecea10765bdf737cd5096e3f5de6125bb8a8a2213874bb02f25720c6c7"
	},
	{
		"id": "6049e865132a",
		"ts": "2026-07-09T08:24:42.057Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 630259.28,
		"hash": "6049e865132ad27083dec2e783024dc919d3f125b3632b464208e819c616aea8"
	},
	{
		"id": "3e3651cd1aa8",
		"ts": "2026-07-09T08:24:42.250Z",
		"symbol": "B420",
		"token": "0xB200000000000000000000231d6C1F1CE455ba32",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "3e3651cd1aa8c8a7e6ecec7a4f64fa6c1f422a89f1631f15efac9d83362643f9"
	},
	{
		"id": "749500f401dd",
		"ts": "2026-07-09T08:24:42.441Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 326383.74,
		"hash": "749500f401dddca32d3a8b89cd665927f35b2a70a26ecb7ebb8f8b02a594ea28"
	},
	{
		"id": "31cd97b96665",
		"ts": "2026-07-09T08:24:42.639Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7801748.22,
		"hash": "31cd97b96665ed151800c80bf65e0f36e18392357273ffc019f68546ee2e716c"
	},
	{
		"id": "0a634dcc2ee2",
		"ts": "2026-07-09T08:24:42.847Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1932563,
		"hash": "0a634dcc2ee225524f95115173238d50da6a12ef070b2e0da89c12cf64b0f99a"
	},
	{
		"id": "65781a7778b4",
		"ts": "2026-07-09T08:24:43.045Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1617737.05,
		"hash": "65781a7778b409dcd6980a9cd98138e332f6fbcbb110510522584e3b85cff400"
	},
	{
		"id": "d3b9f994884f",
		"ts": "2026-07-09T08:24:43.267Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 418166.23,
		"hash": "d3b9f994884fbd0ea51c2c1f94ef9faf74a051037cf60d9a808174c99a7f0ae2"
	},
	{
		"id": "ffdd12c04b51",
		"ts": "2026-07-09T08:24:43.479Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 516058.88,
		"hash": "ffdd12c04b51c4424f0e59c99f66f1fb7bcfafc1e674c1274ac6312c49676995"
	},
	{
		"id": "a97f1778e08a",
		"ts": "2026-07-09T04:49:25.051Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 103244408.38,
		"hash": "a97f1778e08aa857b1935e1dcd791ceef5d618bb0a5be8a743c32007c6fbe8e9"
	},
	{
		"id": "ccebac377fdd",
		"ts": "2026-07-09T04:49:25.256Z",
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
		"liquidityUsd": 15860141.37,
		"hash": "ccebac377fdd25e6ce6eb660b868373487894626393be3e8d5ec6e2446780a6a"
	},
	{
		"id": "c6379b45d406",
		"ts": "2026-07-09T04:49:25.461Z",
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
		"liquidityUsd": 1333381.19,
		"hash": "c6379b45d40695d68a492af878cd59f569dd369e9ca8ccb59fc90a45a43e4526"
	},
	{
		"id": "44503363cd51",
		"ts": "2026-07-09T04:49:25.663Z",
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
		"liquidityUsd": 31914886.31,
		"hash": "44503363cd51b88b8de84ff59186bda49a5fd9f754803ed69a422a13161e0cc7"
	},
	{
		"id": "f5e18b5cf9d1",
		"ts": "2026-07-09T04:49:25.868Z",
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
		"liquidityUsd": 3891786.45,
		"hash": "f5e18b5cf9d11cef5e3bc331a20652266cff25572cc74426486faaf1e659158c"
	},
	{
		"id": "a0eabc17fa11",
		"ts": "2026-07-09T04:49:26.069Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 960537.39,
		"hash": "a0eabc17fa11cdb2aaa0c804acb42ff968de0a8c6bb00bfcdd05c4f828d4617a"
	},
	{
		"id": "1ea7833bb7ca",
		"ts": "2026-07-09T04:49:26.272Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 31914886.31,
		"hash": "1ea7833bb7ca6c73fd9c633fa8a7380da352dc467a9a6bfa548e949739ead61f"
	},
	{
		"id": "c2a6cfc2c237",
		"ts": "2026-07-09T04:49:26.538Z",
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
		"liquidityUsd": 2542554.87,
		"hash": "c2a6cfc2c237bedd2601854b4f285f95871f51e4a09019cf052ee8a12a0e9582"
	},
	{
		"id": "0c2a98c87a2a",
		"ts": "2026-07-09T04:49:26.742Z",
		"symbol": "RWAGMI",
		"token": "0xb200000000000000000000Bf0548AB2ebD00bA5e",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"not_open_source",
			"sim_honeypot"
		],
		"liquidityUsd": 0,
		"hash": "0c2a98c87a2a272f44e0cef2c56e37ca64ff2233085ae3a78c0f98bbef8a580d"
	},
	{
		"id": "83741b02f1f3",
		"ts": "2026-07-09T04:49:26.955Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 617800.61,
		"hash": "83741b02f1f3cacd514803af7d95e925ed1da2af152f381e7b1c8803dc88dc48"
	},
	{
		"id": "6a64ca013bd6",
		"ts": "2026-07-09T04:49:27.222Z",
		"symbol": "B20",
		"token": "0xB2000000000000000000003deF83e24a9A000b20",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 2943.46,
		"hash": "6a64ca013bd69e134e72a83e4c8680be05fecab41e57276cee4baef5725827f4"
	},
	{
		"id": "f687de61432d",
		"ts": "2026-07-09T04:49:27.411Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 340132.05,
		"hash": "f687de61432d1ce9d9ca666c9e4ffbba24477baf3d272137ae759f4f1f47dbfb"
	},
	{
		"id": "5a1e7d4f7011",
		"ts": "2026-07-09T04:49:27.620Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1625699.11,
		"hash": "5a1e7d4f7011b378a73daaa89d396af6460a1dab418804b3db0e7193120782a5"
	},
	{
		"id": "fbd088ec5ca5",
		"ts": "2026-07-09T04:49:27.832Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 938121.89,
		"hash": "fbd088ec5ca510abf6c52327c5a120644f31c27bad240cd0351b73b17731d06c"
	},
	{
		"id": "53806e3953ba",
		"ts": "2026-07-09T04:49:28.029Z",
		"symbol": "B420",
		"token": "0xB200000000000000000000231d6C1F1CE455ba32",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "53806e3953ba38a2f8f2ecb4999d32474adb82faec2fed7cfe458f3d2e8d2504"
	},
	{
		"id": "bf4ce5a97400",
		"ts": "2026-07-09T04:49:28.223Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 414291.65,
		"hash": "bf4ce5a97400b94cf32d71554a7a98416286ac9508f7b2d102dea70df3369f79"
	},
	{
		"id": "b7178fe5af92",
		"ts": "2026-07-09T04:49:28.445Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1916834.39,
		"hash": "b7178fe5af92afb822a575b8cdac83a0839504b72cd982c7dba57d0bc08eebc1"
	},
	{
		"id": "59096167ec8f",
		"ts": "2026-07-09T00:06:10.393Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102294219.18,
		"hash": "59096167ec8f3a280c619fc6c6ce3a8b909e31e41dd50dc95cad601dfb988c3b"
	},
	{
		"id": "c40ea19b3f77",
		"ts": "2026-07-09T00:06:10.595Z",
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
		"liquidityUsd": 15297072.78,
		"hash": "c40ea19b3f77838cd8ca1f83a5910535d5f3fba9853f1db06d0c0a2130ac1335"
	},
	{
		"id": "fa6fd7e5fc0e",
		"ts": "2026-07-09T00:06:10.943Z",
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
		"liquidityUsd": 1332654.69,
		"hash": "fa6fd7e5fc0e835eda67e5952bf238ba70018c42e7c1eb4900cd10daf0a4df2b"
	},
	{
		"id": "7005dee98fae",
		"ts": "2026-07-09T00:06:11.144Z",
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
		"liquidityUsd": 33212712.36,
		"hash": "7005dee98fae956187f9a46df4f89df1738e3b78d45db588cd2549cdea6af797"
	},
	{
		"id": "cbd35fde83cf",
		"ts": "2026-07-09T00:06:11.363Z",
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
		"liquidityUsd": 3921669.67,
		"hash": "cbd35fde83cf9e1fcadd02c0cc95be93a99f834604a48da781f892df5e230171"
	},
	{
		"id": "149f3ad33d0b",
		"ts": "2026-07-09T00:06:11.560Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 960533.88,
		"hash": "149f3ad33d0bd2c6ad192ab5e126e7ce3320bbbf2db7a9bc761bc60cd447431b"
	},
	{
		"id": "a7e0c8653417",
		"ts": "2026-07-09T00:06:11.763Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33212712.36,
		"hash": "a7e0c8653417c490ba48b9d39e07fa45e4be8886c9454bb6d62115e2568491db"
	},
	{
		"id": "99a4f95fb78e",
		"ts": "2026-07-09T00:06:11.971Z",
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
		"liquidityUsd": 2514331.11,
		"hash": "99a4f95fb78e0177cb3640ce77b2b67f4be617a0dcdcaadb8deb401cf5b1d842"
	},
	{
		"id": "8adb6dad94d3",
		"ts": "2026-07-09T00:06:12.331Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 626095.81,
		"hash": "8adb6dad94d359ef8584685c6d91138aacb215def37fec8e907bd4a7f61f1ddc"
	},
	{
		"id": "53f52ab8703d",
		"ts": "2026-07-09T00:06:12.531Z",
		"symbol": "RWAGMI",
		"token": "0xb200000000000000000000Bf0548AB2ebD00bA5e",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"not_open_source",
			"sim_honeypot"
		],
		"liquidityUsd": 9369.94,
		"hash": "53f52ab8703d116393d08b5d0b8b6aace432bb7ec4f1f0d2cbd0936634387690"
	},
	{
		"id": "a514c9513142",
		"ts": "2026-07-09T00:06:12.707Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 352001.02,
		"hash": "a514c951314229d262b00e39937695924a536a7774b4449960c7dad320f57f84"
	},
	{
		"id": "5c62004c320f",
		"ts": "2026-07-09T00:06:12.898Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1596514.85,
		"hash": "5c62004c320fe7f4d222eaeb6412b572a3e662dff291a89856cf9fd01eb76c9a"
	},
	{
		"id": "ebd1d25c7403",
		"ts": "2026-07-09T00:06:13.086Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2976005.43,
		"hash": "ebd1d25c74034f474aa592423b16883e494d0158335209dc9e36daed6c87be7b"
	},
	{
		"id": "b6d82a2dde19",
		"ts": "2026-07-09T00:06:13.301Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 934186.33,
		"hash": "b6d82a2dde1981c0d313044ffcc22067bf5c1c0092851040caa24678974ee3bd"
	},
	{
		"id": "f2fc151b9265",
		"ts": "2026-07-09T00:06:13.497Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 515076.53,
		"hash": "f2fc151b9265489db0807b83aadc0092361a8989d36c45b873885738ce0c82d8"
	},
	{
		"id": "0751b4871d5c",
		"ts": "2026-07-09T00:06:13.690Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 254517.39,
		"hash": "0751b4871d5c4fc485ec34a5cab2e3ebcec85fd5eff74854cfd4acf608ccf1c0"
	},
	{
		"id": "d9de4a11d272",
		"ts": "2026-07-09T00:06:13.874Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1914472.62,
		"hash": "d9de4a11d272db583313443e99d1ace8c8ce27bbf7c4381fa6d4d3438149eab9"
	},
	{
		"id": "cf911e0b8c6d",
		"ts": "2026-07-09T00:06:14.053Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4625866.04,
		"hash": "cf911e0b8c6d4fe8653e963aac617e72b00768db993ff0a41a0fb7eb2aba6785"
	},
	{
		"id": "5aa06f1e2866",
		"ts": "2026-07-08T22:02:26.664Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102100358.33,
		"hash": "5aa06f1e2866d087b9c01a8967e943d00f6bed1a1cbd10281ea75c7ff8ba23db"
	},
	{
		"id": "85d824f1a86d",
		"ts": "2026-07-08T22:02:27.301Z",
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
		"liquidityUsd": 16231240.8,
		"hash": "85d824f1a86df03bef3366ee6ad064e94f18e3d977961b434a7333883ef012de"
	},
	{
		"id": "2dbeba1d1e55",
		"ts": "2026-07-08T22:02:27.765Z",
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
		"liquidityUsd": 1327617.04,
		"hash": "2dbeba1d1e55c7e9d16481a8d99638963e69a96f3d96f2dd5a759b14422ed39a"
	},
	{
		"id": "c97c84350950",
		"ts": "2026-07-08T22:02:28.193Z",
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
		"liquidityUsd": 33308850.22,
		"hash": "c97c84350950e6f2ac08dce864dab7b4e0320e777371abcbcbbe78478daa89c1"
	},
	{
		"id": "19b99b61ff29",
		"ts": "2026-07-08T22:02:28.801Z",
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
		"liquidityUsd": 3911821.36,
		"hash": "19b99b61ff290b565026273ca19e5e97830befe2a1ab4b9301f397e8e162287b"
	},
	{
		"id": "25e7c5b71eb7",
		"ts": "2026-07-08T22:02:29.049Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 955492.26,
		"hash": "25e7c5b71eb73e20bbd07713e2cab33a00573f61641f06d69495756227df90a7"
	},
	{
		"id": "faef0e125db6",
		"ts": "2026-07-08T22:02:29.276Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33308850.22,
		"hash": "faef0e125db6a3d5da4f2d894ddb19ad8b6f3af243c7c3aeb8644a56749a012f"
	},
	{
		"id": "e7ca5c6c4e88",
		"ts": "2026-07-08T22:02:29.513Z",
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
		"liquidityUsd": 2567857.66,
		"hash": "e7ca5c6c4e88630136e16aa7751ba2b2112ebe2077def22000b067ec562f62c7"
	},
	{
		"id": "9f6e92867f63",
		"ts": "2026-07-08T22:02:29.978Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 629108.85,
		"hash": "9f6e92867f6345c0a652080df2e3be52c4ac997b392db547708d605be5eeecb6"
	},
	{
		"id": "54e400d34fee",
		"ts": "2026-07-08T22:02:30.209Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 330531.49,
		"hash": "54e400d34feeee43072b831a36d04254edd9a8f187d758fed67d4adf6de413ef"
	},
	{
		"id": "59236dacbf14",
		"ts": "2026-07-08T22:02:30.445Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 513963.33,
		"hash": "59236dacbf1413b651af3cafb1238c93c5acaa2a504c3877b3fd7ebf987ccde2"
	},
	{
		"id": "3286f5bff880",
		"ts": "2026-07-08T22:02:30.660Z",
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
		"liquidityUsd": 3008724.54,
		"hash": "3286f5bff880e43b2a53213bc7013b1d05d9f66910bb2baec27c5a1642d18507"
	},
	{
		"id": "81c3b67dd66d",
		"ts": "2026-07-08T22:02:30.875Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 957538.54,
		"hash": "81c3b67dd66d143274ccdde78760b56298b5c71ec1c8acb61b67e135e31d8033"
	},
	{
		"id": "f6cfc4910955",
		"ts": "2026-07-08T22:02:31.109Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1646011.22,
		"hash": "f6cfc49109559e39a5ecb88a322e4e5a593c5b95aaf5665b7789671025707207"
	},
	{
		"id": "4a9c934a56df",
		"ts": "2026-07-08T22:02:31.366Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 443895.34,
		"hash": "4a9c934a56dfea203b4cbfd6d29e8776389206ea72038f5771fcc375db6e9ecf"
	},
	{
		"id": "ca3867328cbb",
		"ts": "2026-07-08T22:02:31.579Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 51711.55,
		"hash": "ca3867328cbbfa7b52c6aed2f57b2be5a7b9aa777d141cb1a246ebe190cd86fe"
	},
	{
		"id": "b389af505de7",
		"ts": "2026-07-08T22:02:31.795Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 409558.63,
		"hash": "b389af505de7971f9591a5dee0920f24f760c2c78d8924f226f2c087d1edfcbd"
	},
	{
		"id": "6f550f7de9dc",
		"ts": "2026-07-08T22:02:32.788Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4604973.22,
		"hash": "6f550f7de9dc5829d45073b64ef20bc8d0d3789a2b39c60e906c318b0fe8b0a6"
	},
	{
		"id": "5fc686507b9f",
		"ts": "2026-07-08T20:18:02.390Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102050475.86,
		"hash": "5fc686507b9f69d1c916dea804d4ab18a2bb7697939477229213c7a863ee6c21"
	},
	{
		"id": "ea4f8a91c46f",
		"ts": "2026-07-08T20:18:02.584Z",
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
		"liquidityUsd": 16248625.46,
		"hash": "ea4f8a91c46fe92b12790dad3bbb1bcce5a57f4d23c4e8cc67174c4f7480d23a"
	},
	{
		"id": "8e1fefc3e99e",
		"ts": "2026-07-08T20:18:02.776Z",
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
		"liquidityUsd": 1344027.61,
		"hash": "8e1fefc3e99e00603f9eeaee9baf1d0b3831bf54d403e08d548b8ef90bda46bc"
	},
	{
		"id": "f63de01d5255",
		"ts": "2026-07-08T20:18:02.971Z",
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
		"liquidityUsd": 33359605.61,
		"hash": "f63de01d5255b45e1e1276ea8f9e312839cac6fd6d34aa387ccf90e01620b610"
	},
	{
		"id": "b08a36120347",
		"ts": "2026-07-08T20:18:03.160Z",
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
		"liquidityUsd": 3916966.26,
		"hash": "b08a361203479c0119cc6f10310964195158c3be7ae9afbecf35ef6a6ced316c"
	},
	{
		"id": "610bb420727c",
		"ts": "2026-07-08T20:18:03.381Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 961254.71,
		"hash": "610bb420727ce785002d01f175f269b61a0dfc20fb20ce6f87a9499dc2a88776"
	},
	{
		"id": "d85bf20ed87a",
		"ts": "2026-07-08T20:18:03.568Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33359605.61,
		"hash": "d85bf20ed87a13d77194b2b2a2577d0295324477ba2efb42b6fa4bfb9636109d"
	},
	{
		"id": "d995a45ae7cf",
		"ts": "2026-07-08T20:18:03.757Z",
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
		"liquidityUsd": 2564803.24,
		"hash": "d995a45ae7cfeb004f8b5ea1e1de94edab2cc54c3401afe8e9e319529531d739"
	},
	{
		"id": "90d4615c5547",
		"ts": "2026-07-08T20:18:03.946Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 615483.69,
		"hash": "90d4615c5547dada58743e60e80b9ed6ad4db8cf6e5115f5921dc721a4cf3f43"
	},
	{
		"id": "d7d878e5612d",
		"ts": "2026-07-08T20:18:04.150Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 333042.26,
		"hash": "d7d878e5612dde10df0f36cba838f4b53519972d1b1c56c027cfccb4fe708b3a"
	},
	{
		"id": "7961f5283a7a",
		"ts": "2026-07-08T20:18:04.323Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3063910.06,
		"hash": "7961f5283a7a2b22bf0870f5458f429f057eaf2b2fe9237574c72be3454b0f51"
	},
	{
		"id": "ab91c3b52895",
		"ts": "2026-07-08T20:18:04.509Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 955580.69,
		"hash": "ab91c3b52895ad776c7174e81542bd4eefdf4c963a937b04c1b99223d353913a"
	},
	{
		"id": "ad53bb36f60f",
		"ts": "2026-07-08T20:18:04.709Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 54913.76,
		"hash": "ad53bb36f60f7422af57fca246726909ac26717b72914957c1d2589326eb0142"
	},
	{
		"id": "8444c6f779ad",
		"ts": "2026-07-08T20:18:04.913Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1606358.03,
		"hash": "8444c6f779ad951c4f73d4012946441140adab9a116252f9fa0b4d6c5eb545f1"
	},
	{
		"id": "70932d7bf717",
		"ts": "2026-07-08T20:18:05.113Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1878717.13,
		"hash": "70932d7bf717aa06270401cdf6d9bcae920bbad100012069f711194afb663b4d"
	},
	{
		"id": "bb5d07399c78",
		"ts": "2026-07-08T20:18:05.453Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 410421.86,
		"hash": "bb5d07399c78bdf8c8be05036dc5823f353c2f178d8ae1c16dee1f17a86947ac"
	},
	{
		"id": "295451f8ae9d",
		"ts": "2026-07-08T20:18:05.650Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 323768.27,
		"hash": "295451f8ae9db9378f63e52ce28ebf98c46d0875a26ae6b9160776064f23531e"
	},
	{
		"id": "7c5ffc67587e",
		"ts": "2026-07-08T20:18:05.838Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4858777.71,
		"hash": "7c5ffc67587ebeca03c25cecceb50a95426c065e3085eec98dccbc7eeea3a6e4"
	},
	{
		"id": "85f404e06727",
		"ts": "2026-07-08T18:15:21.285Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 101839508.59,
		"hash": "85f404e06727466dbaeaa05b579938e5f913ce8b88ee66411e5d5fa3a1a66d13"
	},
	{
		"id": "c3d5b0413a3a",
		"ts": "2026-07-08T18:15:22.005Z",
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
		"liquidityUsd": 16130611.81,
		"hash": "c3d5b0413a3a38b970fd90c328e75df5cc0f6b113e8394f0da8a968b639bb712"
	},
	{
		"id": "adb042feffe8",
		"ts": "2026-07-08T18:15:22.489Z",
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
		"liquidityUsd": 1343516.63,
		"hash": "adb042feffe87e4cbe96c59c7b9715af2c26da6454f3da88fc98aa77cf0aaf2e"
	},
	{
		"id": "a93fa7dff5c0",
		"ts": "2026-07-08T18:15:22.967Z",
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
		"liquidityUsd": 33439724.07,
		"hash": "a93fa7dff5c05783378370d75a6ee545d8cece2e30f6696b869a81ddbf27d96f"
	},
	{
		"id": "eae73f4fe8f1",
		"ts": "2026-07-08T18:15:23.474Z",
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
		"liquidityUsd": 3915186.07,
		"hash": "eae73f4fe8f12d2e6c5fb2aa19bb66ff4228f138fdea65621f32d068f090183d"
	},
	{
		"id": "c143d44c754b",
		"ts": "2026-07-08T18:15:23.811Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 962474.43,
		"hash": "c143d44c754ba1d2c5539beb195f416b20e7aade27858aa6ea3ab015e9ce66e1"
	},
	{
		"id": "83dc07ed7d1f",
		"ts": "2026-07-08T18:15:24.106Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33439724.07,
		"hash": "83dc07ed7d1ffa4ce691fa705000d8ae0665dede43853f902609e3ae83aeb65b"
	},
	{
		"id": "e3f83e5981bd",
		"ts": "2026-07-08T18:15:24.380Z",
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
		"liquidityUsd": 2566423.55,
		"hash": "e3f83e5981bd7280f63c0122f182ed844ebddc65aa7f18c0a35c680270b8f00b"
	},
	{
		"id": "c4fcbabc20fe",
		"ts": "2026-07-08T18:15:24.869Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 631517,
		"hash": "c4fcbabc20fef49bbc349573462f52c4daf8c6a346c26c72e89f252a0993ad53"
	},
	{
		"id": "1cb63c458271",
		"ts": "2026-07-08T18:15:25.163Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 329523.13,
		"hash": "1cb63c458271cc9ab6d04a31026fd1960cfe553c32a7fab62c2756fc6feea03f"
	},
	{
		"id": "a5de72179231",
		"ts": "2026-07-08T18:15:35.373Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 53262.64,
		"hash": "a5de7217923130326d3252d0f00a94bd204e55400a27da6dff7e8949467ccd98"
	},
	{
		"id": "9435a18f9148",
		"ts": "2026-07-08T18:15:35.653Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 941876.37,
		"hash": "9435a18f9148092ceea4c6cc3d099e99b3c94b114aa71a937fde2f0477e25bc0"
	},
	{
		"id": "ad5e8d69cf2e",
		"ts": "2026-07-08T18:15:35.903Z",
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
		"liquidityUsd": 3073399.55,
		"hash": "ad5e8d69cf2ed38de9aacd721796de46c3a9d25bed94f52dc20cbb8ea8b520d1"
	},
	{
		"id": "763647a02d6e",
		"ts": "2026-07-08T18:15:36.142Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1604296.25,
		"hash": "763647a02d6e1ff248e9ff55fc11643c3ab174232d862ce3bb20b3b46990b306"
	},
	{
		"id": "e407bd7fef68",
		"ts": "2026-07-08T18:15:36.388Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4850687.15,
		"hash": "e407bd7fef684c6098333b2b44d8aafca53def34ddb57ef7812047a4af5dba5a"
	},
	{
		"id": "db2fd7ea41b6",
		"ts": "2026-07-08T18:15:36.638Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1858324.27,
		"hash": "db2fd7ea41b6e7cb0fe0ab420a8bf97dc44c801cff13f07ca5098feb8c425992"
	},
	{
		"id": "9c57b9f3fdea",
		"ts": "2026-07-08T18:15:36.875Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 375740.66,
		"hash": "9c57b9f3fdeaa60d64771afe42616cbfe1efcb47f194204e771085d62ef0655d"
	},
	{
		"id": "e288c186c9a0",
		"ts": "2026-07-08T18:15:37.118Z",
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
		"liquidityUsd": 1370024.68,
		"hash": "e288c186c9a070e6e2c722ab8c0a97238e9fce6fe16d972fa0fc204e7c49b73d"
	},
	{
		"id": "2692b7210bb9",
		"ts": "2026-07-08T16:00:52.394Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100852875.29,
		"hash": "2692b7210bb9cabd978ddacb2253f92f2445a03798ff353bd23c17664f737019"
	},
	{
		"id": "08df3f2c8ec8",
		"ts": "2026-07-08T16:00:52.898Z",
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
		"liquidityUsd": 16115273.96,
		"hash": "08df3f2c8ec8075bcb3a1674cbf6aa3ee46c43269f73c613f8d418a2ab393620"
	},
	{
		"id": "b5b14f7182d5",
		"ts": "2026-07-08T16:00:53.196Z",
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
		"liquidityUsd": 1332874.91,
		"hash": "b5b14f7182d58292a3a0f2303437b78b00c3ff1a018d97c3be62a13d3d793fe8"
	},
	{
		"id": "fd6d3dffcbb0",
		"ts": "2026-07-08T16:00:53.483Z",
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
		"liquidityUsd": 33032597.89,
		"hash": "fd6d3dffcbb0d64839cc1a0540c44cb421a7c898cf7d0c0c43896ff6394379e4"
	},
	{
		"id": "646ece833081",
		"ts": "2026-07-08T16:00:53.746Z",
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
		"liquidityUsd": 3876411.07,
		"hash": "646ece8330818dd7c78e80cd78f46762fc727ab9623489d6863ad22c79b49215"
	},
	{
		"id": "54c4aec63c24",
		"ts": "2026-07-08T16:00:54.009Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 940189.86,
		"hash": "54c4aec63c245dedaecfc7243c0b3a9bcf20bb6b7042f5675344f979f47059cd"
	},
	{
		"id": "537d162509bd",
		"ts": "2026-07-08T16:00:54.283Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33032597.89,
		"hash": "537d162509bd1c0edf95753fcf9b1106723809aae4156923a4cd852f857b6850"
	},
	{
		"id": "09f8924676af",
		"ts": "2026-07-08T16:00:54.552Z",
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
		"liquidityUsd": 2582130.7,
		"hash": "09f8924676affe600fb7c07d81aa678992fa62d761b8d45a2bd2059eeff3d956"
	},
	{
		"id": "0999dd99fc9a",
		"ts": "2026-07-08T16:00:54.827Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 52864.34,
		"hash": "0999dd99fc9a2ab92da7fce6ef0614aa03766ca57e512fb6009ee9195def8162"
	},
	{
		"id": "bf572f2a550e",
		"ts": "2026-07-08T16:00:55.091Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 943882.88,
		"hash": "bf572f2a550ed9e4100b89d57acce1fcf9035f1bcb56b4f3fa6e21b321593622"
	},
	{
		"id": "0f72824b8667",
		"ts": "2026-07-08T16:00:55.337Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 341797.1,
		"hash": "0f72824b866733a7f5e52ec8140926d9ef94ffe413501fcb5d507a26cee146f5"
	},
	{
		"id": "39e144675cd2",
		"ts": "2026-07-08T16:00:55.592Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4757328.73,
		"hash": "39e144675cd2808a4c1a53daaf82f8317fa6626c8e16f0fbe5af13617ef59a2a"
	},
	{
		"id": "4b20c055afe1",
		"ts": "2026-07-08T16:00:55.838Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2974173.45,
		"hash": "4b20c055afe1a8649a77f05f1dda2aada780d005f2ff770a8e07334869cc6152"
	},
	{
		"id": "b92ce2aadf6d",
		"ts": "2026-07-08T16:00:56.088Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1591044.98,
		"hash": "b92ce2aadf6d446232b5539c24ae8a13c6c2d226c5b9e7b216f605cacf5609d2"
	},
	{
		"id": "16b5aa027743",
		"ts": "2026-07-08T16:00:56.337Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 370763.77,
		"hash": "16b5aa027743f57fb75945f52dff86dd3640006a0c189dfb80de9220843f2be9"
	},
	{
		"id": "08f130d3df55",
		"ts": "2026-07-08T16:00:56.576Z",
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
		"liquidityUsd": 1292119.77,
		"hash": "08f130d3df550335a7cd83e9bde9c117e8e67d3281d5043ebff726ae4b443796"
	},
	{
		"id": "435cecb8044a",
		"ts": "2026-07-08T16:01:02.528Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1887399.54,
		"hash": "435cecb8044a6ac712e9c150e6a0b734f415412f03a3603136b34d4934b25d2a"
	},
	{
		"id": "2c47236b89d0",
		"ts": "2026-07-08T16:01:02.820Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4446044.13,
		"hash": "2c47236b89d05156ae2f2fef7ac4bc42811ea6fe7cd7f4fd85bbbe2952f34db1"
	},
	{
		"id": "52b08bbb4d44",
		"ts": "2026-07-08T13:54:58.638Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 101828549.21,
		"hash": "52b08bbb4d4455017e0d1a831e03150668cb91e2b9cdf68d3adc3391963c9734"
	},
	{
		"id": "1d90c4f063fe",
		"ts": "2026-07-08T13:54:59.081Z",
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
		"liquidityUsd": 15660005.44,
		"hash": "1d90c4f063fe6b76f0c3de3ba9c421f7aff03e97d0cdd88fed94c9ee392608c5"
	},
	{
		"id": "549145914be1",
		"ts": "2026-07-08T13:54:59.328Z",
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
		"liquidityUsd": 1348975.01,
		"hash": "549145914be121420175c29bf8440d8995faf13f0bbfc701dad083025812c0e3"
	},
	{
		"id": "bf90b7879fb2",
		"ts": "2026-07-08T13:54:59.575Z",
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
		"liquidityUsd": 33045156.23,
		"hash": "bf90b7879fb2046e32928cffb435ab646273b95823fdf8e70695e0f2c5bb9e9b"
	},
	{
		"id": "a2b10dea83d5",
		"ts": "2026-07-08T13:54:59.820Z",
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
		"liquidityUsd": 3885419.23,
		"hash": "a2b10dea83d5f05ddee399b96256d745f628832a1c1d90256e77432d9886e283"
	},
	{
		"id": "77dc658ab8ba",
		"ts": "2026-07-08T13:55:00.066Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 953251.41,
		"hash": "77dc658ab8bafb012c55828b772c77af4489e45f962ce855fc44b5baa20f456e"
	},
	{
		"id": "93c212eceaed",
		"ts": "2026-07-08T13:55:00.307Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33045156.23,
		"hash": "93c212eceaed934a8d91948896a716cd94f2c62a722098239e105e7cd9c93ff7"
	},
	{
		"id": "a114d433a00f",
		"ts": "2026-07-08T13:55:00.579Z",
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
		"liquidityUsd": 2609070.38,
		"hash": "a114d433a00f7c001a0c94f5d500d48bddea9a94255bf88bdbba2f06f2454cb7"
	},
	{
		"id": "f3d730123ed1",
		"ts": "2026-07-08T13:55:00.821Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 55497.89,
		"hash": "f3d730123ed1c79eb932539909709dfd5d03a55a2ef1bede80218ba902212e83"
	},
	{
		"id": "e162b98daa9f",
		"ts": "2026-07-08T13:55:01.065Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 382591.27,
		"hash": "e162b98daa9f061af66bb58e7cb9870062ec5fd89451e765d008248641c02f67"
	},
	{
		"id": "4bf36744e793",
		"ts": "2026-07-08T13:55:01.307Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 955198,
		"hash": "4bf36744e7938139a828e5fb7fbc5df9a39b93eb84dcdab89a6b3f35f9dbbb26"
	},
	{
		"id": "5a17e009b089",
		"ts": "2026-07-08T13:55:01.550Z",
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
		"liquidityUsd": 4908135.31,
		"hash": "5a17e009b089d41e69ca8e71e59a1dd2b434b3c3e40cbf5378334c4ce7154352"
	},
	{
		"id": "f7b3e9f8cc59",
		"ts": "2026-07-08T13:55:01.795Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3146279.36,
		"hash": "f7b3e9f8cc598e3b92302d162acc5c9fe7f43278ed30aab206f109d74e2658a0"
	},
	{
		"id": "85ce6cc1e0a9",
		"ts": "2026-07-08T13:55:02.041Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1886531.29,
		"hash": "85ce6cc1e0a9ef44d28e816d84b99beaad690984ab7fad3ec430200bcef68a1b"
	},
	{
		"id": "f5f69ebde114",
		"ts": "2026-07-08T13:55:02.288Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4476879.06,
		"hash": "f5f69ebde1147e0bfc5372427034f5cceaa8d94624abc9546c7f42bf701d7cb4"
	},
	{
		"id": "a97a3f8cb1d9",
		"ts": "2026-07-08T13:55:02.534Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1560524.33,
		"hash": "a97a3f8cb1d914ea55c482280a77f91ee495b20fe7a490f0a6f468b4f4605ebd"
	},
	{
		"id": "2a7f4948e5e1",
		"ts": "2026-07-08T13:55:02.762Z",
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
		"liquidityUsd": 1318237.3,
		"hash": "2a7f4948e5e1ec1c95c4f765f8e61ff12541e25832631e45ffdada72b5534a62"
	},
	{
		"id": "cb64688ea783",
		"ts": "2026-07-08T13:55:02.989Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 259317.37,
		"hash": "cb64688ea783b1052b1f1baa41ffeb0a54bbb7c830c14ef4ed007292ec291b27"
	},
	{
		"id": "99eb1247c4ef",
		"ts": "2026-07-08T11:44:46.723Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 101829028.01,
		"hash": "99eb1247c4ef9d1bd1486cd6746c68844e13c76cbac316a4cb7e56b88301bbcc"
	},
	{
		"id": "b4e7c7fc68d2",
		"ts": "2026-07-08T11:44:47.441Z",
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
		"liquidityUsd": 15949100.13,
		"hash": "b4e7c7fc68d224397ca4e170daca09182350d0c5f88b2d6c49abbbcdb34bd56f"
	},
	{
		"id": "79561cad9d41",
		"ts": "2026-07-08T11:44:47.920Z",
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
		"liquidityUsd": 1347106.25,
		"hash": "79561cad9d41a4123e4a2087bb9f5d198252cf98d5104ba906ac6302aabec109"
	},
	{
		"id": "38850021ef4e",
		"ts": "2026-07-08T11:44:48.404Z",
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
		"liquidityUsd": 32465561.23,
		"hash": "38850021ef4e1eed5d67402d7642dab167127c5f60f50ab9866a63baa9ef1c7b"
	},
	{
		"id": "06ba362c4195",
		"ts": "2026-07-08T11:44:48.882Z",
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
		"liquidityUsd": 3908844.48,
		"hash": "06ba362c4195804debad3a80cb9b3a1526b9fe6f2e267f18509511241517effc"
	},
	{
		"id": "54f9cf73a744",
		"ts": "2026-07-08T11:44:49.138Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 953370.22,
		"hash": "54f9cf73a7444aa643a96b3ceee5d02cdc404387fcc112f1b8bcb1c3c642c333"
	},
	{
		"id": "484cc658cad9",
		"ts": "2026-07-08T11:44:49.393Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 32472796.81,
		"hash": "484cc658cad9a79c01f7c73323b1aa622f51224d4c7a28004e0d1ffbcf511864"
	},
	{
		"id": "18cc3c673302",
		"ts": "2026-07-08T11:44:49.650Z",
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
		"liquidityUsd": 2640135.32,
		"hash": "18cc3c673302439fffffd88e0bb7ded18491176c469a12fb0707783c13589d99"
	},
	{
		"id": "1d65b82dee6f",
		"ts": "2026-07-08T11:44:50.126Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 57373.1,
		"hash": "1d65b82dee6f9edb59d865aef0ede9f702ab4a374878981be21e969d6b1f6b41"
	},
	{
		"id": "5568c59358a2",
		"ts": "2026-07-08T11:44:50.384Z",
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
		"liquidityUsd": 4905872.45,
		"hash": "5568c59358a2e4cff92a3c0e51babface75041bbd4ab67e0e8e139e53f9d18e9"
	},
	{
		"id": "010ec85ac847",
		"ts": "2026-07-08T11:44:50.626Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 920569.53,
		"hash": "010ec85ac8472c341c9d60a388565f692f536d53f987b4f4fd970766e432ee7d"
	},
	{
		"id": "5b9d9283926c",
		"ts": "2026-07-08T11:44:50.864Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 378480.47,
		"hash": "5b9d9283926c5a4e36b336f857bc91263ff8385d6219d454c05d101a47f80d08"
	},
	{
		"id": "1ec31286d4a3",
		"ts": "2026-07-08T11:44:51.106Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3049853.06,
		"hash": "1ec31286d4a30073401b6267a43b6670d78c47b883b849574c471148713609c7"
	},
	{
		"id": "fe453411753b",
		"ts": "2026-07-08T11:44:51.347Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1868952.05,
		"hash": "fe453411753b7cfc43c05628bfb5c1a5d0d82d6bf5944576bab5b8e4a00b88a0"
	},
	{
		"id": "007949bdd335",
		"ts": "2026-07-08T11:44:51.587Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1608433.08,
		"hash": "007949bdd335bdd210be6f179475d9600a7e9ff8cca1c5ea9e4a10525faf600c"
	},
	{
		"id": "71444e11ea38",
		"ts": "2026-07-08T11:44:51.830Z",
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
		"liquidityUsd": 1245799.35,
		"hash": "71444e11ea385b9e28726f2f1d4ebd1dcd8e43badf0eff32c0c681cd48614828"
	},
	{
		"id": "1347fb3a4cc3",
		"ts": "2026-07-08T11:44:52.680Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4481033.87,
		"hash": "1347fb3a4cc3bcae7aa08a767c15446f17a4ce6ae7a54b66068f554880f81e9b"
	},
	{
		"id": "b25c779c4365",
		"ts": "2026-07-08T11:44:52.918Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7262008.12,
		"hash": "b25c779c436570648ccdc7ef6fd21957b74b663906d52d875a10d6e2da158294"
	},
	{
		"id": "daad8771a740",
		"ts": "2026-07-08T09:24:01.001Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 101703866.2,
		"hash": "daad8771a740a1b4671cebcda8f8a0a5d7a1d03a87bd051d9e23ce066041fac1"
	},
	{
		"id": "428e91185f65",
		"ts": "2026-07-08T09:24:01.576Z",
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
		"liquidityUsd": 15750187.85,
		"hash": "428e91185f65fe7ca859bec2b29da230b3bed2551ecbc3a7ffbc22c879d9e958"
	},
	{
		"id": "b1e6371265d1",
		"ts": "2026-07-08T09:24:01.819Z",
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
		"liquidityUsd": 1358383.69,
		"hash": "b1e6371265d1fbe71664747ebf34d46be2695b759ce15b7968f715b4a2f7d838"
	}
]
