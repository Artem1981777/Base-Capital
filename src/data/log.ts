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
	"updatedAt": "2026-09-02T23:48:57.358Z",
	"tokensScored": 15930,
	"verdictsIssued": 15930,
	"safe": 13540,
	"risky": 1179,
	"likelyRug": 1211,
	"ticks": 916
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "bdc66192caa9",
		"ts": "2026-09-02T23:48:52.205Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115012491.86,
		"hash": "bdc66192caa957db1f5cc10de5334b8b59f03d2c8c4c2fa16f8c6174c4eab57f"
	},
	{
		"id": "e9d48ee8b68c",
		"ts": "2026-09-02T23:48:52.493Z",
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
		"liquidityUsd": 18930159.83,
		"hash": "e9d48ee8b68c28fa81c10260a1ab1cf1c915abf600b986a24c163ced8cd01917"
	},
	{
		"id": "eea1ac17ff08",
		"ts": "2026-09-02T23:48:52.984Z",
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
		"liquidityUsd": 930259.08,
		"hash": "eea1ac17ff08a1b8b7020982fab941db501bb06d7a5e3e0dd497c5e587969e59"
	},
	{
		"id": "40efa5d1f13b",
		"ts": "2026-09-02T23:48:53.239Z",
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
		"liquidityUsd": 28154403.86,
		"hash": "40efa5d1f13b9f75745dd77ebda46c5da626eb2e55ce10e742fd89b9f69921f3"
	},
	{
		"id": "0e1e23b683a6",
		"ts": "2026-09-02T23:48:53.489Z",
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
		"liquidityUsd": 4052986.74,
		"hash": "0e1e23b683a6d626a94a05b12138f515acff13689208685bfeaaddcc6cd7b229"
	},
	{
		"id": "fbc32c930b6b",
		"ts": "2026-09-02T23:48:53.763Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1124516.25,
		"hash": "fbc32c930b6baa25dd658250b761c9eb47b8393e4a313a1f3398003b115f11d2"
	},
	{
		"id": "d1f201a64691",
		"ts": "2026-09-02T23:48:54.090Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 81,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.62,
		"flags": [
			"new_pair_under_24h",
			"owner_not_renounced"
		],
		"liquidityUsd": 3213474.45,
		"hash": "d1f201a64691775739c27ee16b38e34127004fed21aabcf297d371bddf3b76d5"
	},
	{
		"id": "7559e8107aa2",
		"ts": "2026-09-02T23:48:54.383Z",
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
		"liquidityUsd": 3649728.22,
		"hash": "7559e8107aa24888e1cb0869e03386821205dd4eea25bd39359ad785accb7aac"
	},
	{
		"id": "6f66be4e1aed",
		"ts": "2026-09-02T23:48:54.653Z",
		"symbol": "umia",
		"token": "0x56ab53b77F07DA3af732150E8aeC4783eB5BbA7D",
		"score": 43,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.14,
		"flags": [
			"new_pair_under_24h",
			"owner_can_change_balance",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 3213474.45,
		"hash": "6f66be4e1aed5a0cd2e74e2d5574a6eb0ad311588c1c5c31539acafd12fdebbd"
	},
	{
		"id": "cfe527c48f8b",
		"ts": "2026-09-02T23:48:55.118Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 781593.1,
		"hash": "cfe527c48f8bf30f479f39eb658f35a028e0b82fb13af2a7a00b37b704b25b72"
	},
	{
		"id": "65975371353e",
		"ts": "2026-09-02T23:48:55.376Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 960146.61,
		"hash": "65975371353e8d960b06d8e6231d034f0df1e449cde598258581771725db7b52"
	},
	{
		"id": "b39d02ee19ff",
		"ts": "2026-09-02T23:48:55.636Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3113686.38,
		"hash": "b39d02ee19ff87acda37f5db677fd66ff9a1f32d21d07f83eebe8fd54d6bf057"
	},
	{
		"id": "8a6c1df521e9",
		"ts": "2026-09-02T23:48:55.874Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 67102.92,
		"hash": "8a6c1df521e905bdc7b7497e2789ed5c006cf30c6567071bb3f0167b24895397"
	},
	{
		"id": "e0bbc340c91e",
		"ts": "2026-09-02T23:48:56.119Z",
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
		"liquidityUsd": 388720.54,
		"hash": "e0bbc340c91eb2ef34ee22011bb333261e07b14cd6af34b9de1a599e41976115"
	},
	{
		"id": "5e622bf0fc27",
		"ts": "2026-09-02T23:48:56.371Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1484541.69,
		"hash": "5e622bf0fc271800f022407b46cf57013d00faeb3616e43f024982d3abf6f893"
	},
	{
		"id": "c3f418950831",
		"ts": "2026-09-02T23:48:56.625Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 281981.63,
		"hash": "c3f4189508319a11f041e6578be0ea30fcfefa4a8794d0a205bc6cb2c410e059"
	},
	{
		"id": "93860a5793d1",
		"ts": "2026-09-02T23:48:56.869Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 669421.69,
		"hash": "93860a5793d1f95d3657104ed77cdf6d153f61c198af22284d5b684522e12821"
	},
	{
		"id": "6c132086c8b2",
		"ts": "2026-09-02T23:48:57.120Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1237182.56,
		"hash": "6c132086c8b2c02e72b0755be9a1d545b8407a37e05482b6bb1554a89b80a31c"
	},
	{
		"id": "baf1caeaa5a0",
		"ts": "2026-09-02T23:48:57.357Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1141365.79,
		"hash": "baf1caeaa5a0fe2bdef58f92795babe47f0e553fac3badbd9663d956ff41694b"
	},
	{
		"id": "857d77522835",
		"ts": "2026-09-02T21:33:04.250Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115764422.45,
		"hash": "857d77522835651dbaa89510f971e960ab36db4b59eea800da580365a8f07cd8"
	},
	{
		"id": "f2898dadded5",
		"ts": "2026-09-02T21:33:04.491Z",
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
		"liquidityUsd": 17061472.36,
		"hash": "f2898dadded5a01df8f3057eaa075363f330ae1c7dba3dcda83b1d4b80505560"
	},
	{
		"id": "82a8a0b65935",
		"ts": "2026-09-02T21:33:04.998Z",
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
		"liquidityUsd": 933237.6,
		"hash": "82a8a0b659359f73d3ad90da16448b74f598e433bd950bbed513db3fbcdc18b0"
	},
	{
		"id": "c18856067cda",
		"ts": "2026-09-02T21:33:05.249Z",
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
		"liquidityUsd": 28118830.36,
		"hash": "c18856067cdaef080b5992a5860f3fd4428574442b6b6df87558d284d490d85e"
	},
	{
		"id": "39cac8868daa",
		"ts": "2026-09-02T21:33:05.550Z",
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
		"liquidityUsd": 4067272.7,
		"hash": "39cac8868daa50fdf5c5963faacb3e7f37c1a88a6fc777cf58ac2deaea5ab0fd"
	},
	{
		"id": "d6744ad8fe6d",
		"ts": "2026-09-02T21:33:05.784Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1131317.7,
		"hash": "d6744ad8fe6d77cca52b02f1f61e16cc9ea30fdce09055612aa619ad02102a46"
	},
	{
		"id": "246c102683b8",
		"ts": "2026-09-02T21:33:06.084Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 81,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.62,
		"flags": [
			"new_pair_under_24h",
			"owner_not_renounced"
		],
		"liquidityUsd": 3331485.25,
		"hash": "246c102683b824c48e5cb88e2d50d4163cea04b947d74852240cc98c572b3733"
	},
	{
		"id": "c0f375632f67",
		"ts": "2026-09-02T21:33:06.344Z",
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
		"liquidityUsd": 3661663.79,
		"hash": "c0f375632f679e6fbc56dce43a6eb531392ea1ce4a58e6988a594c750999fea6"
	},
	{
		"id": "f69591e01710",
		"ts": "2026-09-02T21:33:06.589Z",
		"symbol": "umia",
		"token": "0x56ab53b77F07DA3af732150E8aeC4783eB5BbA7D",
		"score": 43,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.14,
		"flags": [
			"new_pair_under_24h",
			"owner_can_change_balance",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 3331485.25,
		"hash": "f69591e0171099cb572e645c00e2d106977fcde11f5230e9fdc0968bdd470a1b"
	},
	{
		"id": "573ee3f117a1",
		"ts": "2026-09-02T21:33:06.852Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 806587.37,
		"hash": "573ee3f117a1a82a772b440c0d6dbc24a22bb6b8aa68e897c0c559b7a4d7f443"
	},
	{
		"id": "b91e4acf0fc7",
		"ts": "2026-09-02T21:33:07.073Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3147810,
		"hash": "b91e4acf0fc704a7454442850e27aec7781f31a7c3c5cc3328f5f811997b15df"
	},
	{
		"id": "0f2fb34a7c4a",
		"ts": "2026-09-02T21:33:07.292Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 969148.43,
		"hash": "0f2fb34a7c4a549522a796a0b57dc24b4a9bc34aa0661e303d32e9453883ec51"
	},
	{
		"id": "740a33af7481",
		"ts": "2026-09-02T21:33:07.512Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 61560.31,
		"hash": "740a33af74818cac27664d73af74a17bad501bd75863cc30c36e5d05b5e4d01f"
	},
	{
		"id": "9306baef24ea",
		"ts": "2026-09-02T21:33:07.740Z",
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
		"liquidityUsd": 414684.14,
		"hash": "9306baef24ea41f157990311eb9fd51f9b9d5565d7f4e4502ba008beb6a39a37"
	},
	{
		"id": "7c32dfbbbce1",
		"ts": "2026-09-02T21:33:07.959Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 282095.27,
		"hash": "7c32dfbbbce1ed1a59325e5ff5b467f1fe25328d086c3f8a85d296343a56a82e"
	},
	{
		"id": "c03b9e48425f",
		"ts": "2026-09-02T21:33:08.195Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1627450.16,
		"hash": "c03b9e48425fc2337778555d91f61d1e61939ee0415ec82141089a697c48887c"
	},
	{
		"id": "903e95670577",
		"ts": "2026-09-02T21:33:08.415Z",
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
		"liquidityUsd": 610258.12,
		"hash": "903e956705772f840cc865af7cc0eff0cbc1755950847b8ae82c6713eee8756c"
	},
	{
		"id": "ac4182004ff3",
		"ts": "2026-09-02T21:33:08.677Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 693873.5,
		"hash": "ac4182004ff325022eab5e7a919b46b42e78e7b5d785ef035508fb6e3be7b842"
	},
	{
		"id": "00ba2bd4418e",
		"ts": "2026-09-02T21:33:08.902Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1224514.08,
		"hash": "00ba2bd4418e1b87bae4298fa35fec2c203c22075f1a2965fc768ec7b334199f"
	},
	{
		"id": "b96de50e8a98",
		"ts": "2026-09-02T21:33:09.122Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1140912.34,
		"hash": "b96de50e8a983501b440a09d232cf5d9b7b5d2b6b9fdb73a8bb5a8d33580645f"
	},
	{
		"id": "6a14e52e1d79",
		"ts": "2026-09-02T18:25:05.766Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115696709.76,
		"hash": "6a14e52e1d798aec7c1d7e432242c34791b826f69942193bc4c7febacfdeb302"
	},
	{
		"id": "61210cf6c7ec",
		"ts": "2026-09-02T18:25:06.334Z",
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
		"liquidityUsd": 18505498.61,
		"hash": "61210cf6c7ec4ecac4d50e165d7eaa6f25a5502bd577401b6763301721191efb"
	},
	{
		"id": "7bb6eb9bfea1",
		"ts": "2026-09-02T18:25:06.610Z",
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
		"liquidityUsd": 934876.1,
		"hash": "7bb6eb9bfea11aa24d66bf456a9d42b2c5c5a55581159a139a4248293e7fe54e"
	},
	{
		"id": "59036265fcf1",
		"ts": "2026-09-02T18:25:06.881Z",
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
		"liquidityUsd": 28088149.99,
		"hash": "59036265fcf1d32f845f9fc4e415bd22c71f1b3ba21266c87477b6b4fb47bde4"
	},
	{
		"id": "e791ad37bfb3",
		"ts": "2026-09-02T18:25:07.163Z",
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
		"liquidityUsd": 4066566.5,
		"hash": "e791ad37bfb3e289509fda2ed7947bca9342c8a0cc9729f8829a9b9003c7a625"
	},
	{
		"id": "c1f799eb2526",
		"ts": "2026-09-02T18:25:07.434Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1132263.42,
		"hash": "c1f799eb2526b669ea438110267577f672f433f64f5f4b08e6eaf3bc25f5eacf"
	},
	{
		"id": "06ec4ca42361",
		"ts": "2026-09-02T18:25:07.712Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 81,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.62,
		"flags": [
			"new_pair_under_24h",
			"owner_not_renounced"
		],
		"liquidityUsd": 3426018.31,
		"hash": "06ec4ca42361d92af066be63c19fca120cf019b1abc903a52fff18c5f3033e5a"
	},
	{
		"id": "fdd6805b9610",
		"ts": "2026-09-02T18:25:07.975Z",
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
		"liquidityUsd": 3665502.14,
		"hash": "fdd6805b9610feb8030585591e6fbb27683c80be398324b4f6400ca125f5eba1"
	},
	{
		"id": "d7ab948f4ca5",
		"ts": "2026-09-02T18:25:08.241Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 791521.89,
		"hash": "d7ab948f4ca5d9a9226ee878cafed2df09f117e3ad557ec5b2a00ce77f58dae4"
	},
	{
		"id": "85d5ee8feb97",
		"ts": "2026-09-02T18:25:08.528Z",
		"symbol": "umia",
		"token": "0x56ab53b77F07DA3af732150E8aeC4783eB5BbA7D",
		"score": 43,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.14,
		"flags": [
			"new_pair_under_24h",
			"owner_can_change_balance",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 3426018.31,
		"hash": "85d5ee8feb9750ec2bc55cad5fa9c10581cb8d97f2d0b27bdb614c627ada760f"
	},
	{
		"id": "b6ea1b7e01a2",
		"ts": "2026-09-02T18:25:08.771Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2980347.43,
		"hash": "b6ea1b7e01a2f8f67937657be4bf05beeabbb46244fd8b73328cf78f9ea4287f"
	},
	{
		"id": "10d2f36acf39",
		"ts": "2026-09-02T18:25:09.017Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 60955.75,
		"hash": "10d2f36acf399d98afedb0aeb4b49bdb725ae9f50e8b62169645be71837966d5"
	},
	{
		"id": "0eedec0ef389",
		"ts": "2026-09-02T18:25:09.262Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 278243.74,
		"hash": "0eedec0ef389e18025d6f5181f76a51e3cac6fa9982b93805519c2a82cf8d64d"
	},
	{
		"id": "aa6ff0216cf9",
		"ts": "2026-09-02T18:25:09.512Z",
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
		"liquidityUsd": 414141.94,
		"hash": "aa6ff0216cf9e5770ba4187b34906c900377148a48338a211cb128a28253dfdb"
	},
	{
		"id": "a8db84efef8c",
		"ts": "2026-09-02T18:25:09.754Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4021343.72,
		"hash": "a8db84efef8c56ec2f22b2f236164dc2daf4a1f0e2678eb0de9d535c6adc3273"
	},
	{
		"id": "ba43b2aa53c6",
		"ts": "2026-09-02T18:25:09.993Z",
		"symbol": "RIPE",
		"token": "0x2A0a59d6B975828e781EcaC125dBA40d7ee5dDC0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 76022.72,
		"hash": "ba43b2aa53c69a9f4463e932e6cb9329fd4784ca91fdfa1f4f1c29d1211dd1b8"
	},
	{
		"id": "7da9ae2f037f",
		"ts": "2026-09-02T18:25:10.237Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 895222.4,
		"hash": "7da9ae2f037f7926315bcd6a8388ba2ce6d5cb38926870c79842f2efc0d2f1ae"
	},
	{
		"id": "b3446d519a87",
		"ts": "2026-09-02T18:25:10.480Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1237537.52,
		"hash": "b3446d519a87795715a936dbdf45a5cdd229be04a77f5937a8258c51a6130e16"
	},
	{
		"id": "ec7689b10849",
		"ts": "2026-09-02T18:25:10.727Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1140837.47,
		"hash": "ec7689b10849635a91a36317c66dec46214f48b667276d1094351675ddb11e15"
	},
	{
		"id": "ebc5d1bf4019",
		"ts": "2026-09-02T18:25:10.975Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 978878.22,
		"hash": "ebc5d1bf4019992f998ddae61cf294faf4f52406a26b5475018ca74220370378"
	},
	{
		"id": "e77a261173a3",
		"ts": "2026-09-02T14:55:57.501Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115110394.87,
		"hash": "e77a261173a33cb6e67dbb7f907f42c46a9d0597f3444fdd4f8eb0a2dc411dc1"
	},
	{
		"id": "bc634627202c",
		"ts": "2026-09-02T14:55:58.004Z",
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
		"liquidityUsd": 18988265.75,
		"hash": "bc634627202c3fdd9b253250d31f1698945f869e748a3011a181d5960537a997"
	},
	{
		"id": "0674dfdf8c9c",
		"ts": "2026-09-02T14:55:58.484Z",
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
		"liquidityUsd": 936683.76,
		"hash": "0674dfdf8c9c57125cb75eaaf7755c0942169a1c0baa2c891325dced2e7f9ca4"
	},
	{
		"id": "4697af86497b",
		"ts": "2026-09-02T14:55:58.801Z",
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
		"liquidityUsd": 28133716.48,
		"hash": "4697af86497ba6ce59149a6698f70b613843b00d129355f9270e5bdf79038b6e"
	},
	{
		"id": "7c35b8d7b50e",
		"ts": "2026-09-02T14:55:59.107Z",
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
		"liquidityUsd": 4088220.29,
		"hash": "7c35b8d7b50e6facb8318f2693dab9d8fc7f79c406b212f52b47853d933be7bf"
	},
	{
		"id": "d43b8aab7a9c",
		"ts": "2026-09-02T14:55:59.414Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1135633.15,
		"hash": "d43b8aab7a9c3dd34f9d71b04e9054d889540a41061fe5a7029ea9bc0124829d"
	},
	{
		"id": "1f3f2b0a951f",
		"ts": "2026-09-02T14:55:59.714Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 81,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.62,
		"flags": [
			"new_pair_under_24h",
			"owner_not_renounced"
		],
		"liquidityUsd": 3152565.75,
		"hash": "1f3f2b0a951fdd2556f0cec991d43af47f73654f62b96670bd7fd2bb59b41840"
	},
	{
		"id": "68e72bb3594e",
		"ts": "2026-09-02T14:56:00.050Z",
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
		"liquidityUsd": 1156546.01,
		"hash": "68e72bb3594ed0dd67ccaf095c49bd6d0b799657c8ad27724cd463bb7e634a0e"
	},
	{
		"id": "281cb689587e",
		"ts": "2026-09-02T14:56:00.349Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 769618.2,
		"hash": "281cb689587e4b83cad0995ae49f65fb6fbabe7a7db8ed3a3794216b2ea6d236"
	},
	{
		"id": "5a74ada548b8",
		"ts": "2026-09-02T14:56:00.679Z",
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
		"liquidityUsd": 1138231.33,
		"hash": "5a74ada548b8dd82a1abef21290f11e9a78f9bddc2b2faac40672c5267f4207f"
	},
	{
		"id": "65682c1b3ee5",
		"ts": "2026-09-02T14:56:00.984Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4003947.23,
		"hash": "65682c1b3ee53d1f7678b05f2c8ec2a67f4ea590729406095868c759fccd1c53"
	},
	{
		"id": "2b0b5727179c",
		"ts": "2026-09-02T14:56:01.840Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1280358.09,
		"hash": "2b0b5727179cb5566630edf85b3cbdbfe3fca819deb88e6da1131b2fb1fcecfb"
	},
	{
		"id": "64add1efa733",
		"ts": "2026-09-02T14:56:02.225Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3097200.03,
		"hash": "64add1efa733d165c92568e1cecae35728b7e65dc150c4a552f530ba9c2ba1dc"
	},
	{
		"id": "098d2c577d8a",
		"ts": "2026-09-02T14:56:02.545Z",
		"symbol": "umia",
		"token": "0x56ab53b77F07DA3af732150E8aeC4783eB5BbA7D",
		"score": 43,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.14,
		"flags": [
			"new_pair_under_24h",
			"owner_can_change_balance",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 3152565.75,
		"hash": "098d2c577d8a33998669361a7fa9561ec67c1eb3a7e0c583ad8c70238e437bab"
	},
	{
		"id": "565257e6cc0d",
		"ts": "2026-09-02T14:56:02.840Z",
		"symbol": "OPAL",
		"token": "0x119B63B1605Be3A8ff4543c7F76f7f1f79eECd1f",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"not_open_source"
		],
		"liquidityUsd": 2801208.6,
		"hash": "565257e6cc0d12bfc6720fdcba6346ac02058142a8edfdec2e7e7a271040fb4a"
	},
	{
		"id": "88ec7fc3a8c1",
		"ts": "2026-09-02T14:56:03.137Z",
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
		"liquidityUsd": 276703.73,
		"hash": "88ec7fc3a8c13ab9284a4777bfeb3d496f7413f8677d658a89bf085771352562"
	},
	{
		"id": "7ba25ce30c65",
		"ts": "2026-09-02T14:56:03.436Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 432228.95,
		"hash": "7ba25ce30c65e4f11d27fba6770fcff58f65c4f5628c31e326815af89f91693e"
	},
	{
		"id": "a1464cb25a59",
		"ts": "2026-09-02T14:56:03.751Z",
		"symbol": "RIPE",
		"token": "0x2A0a59d6B975828e781EcaC125dBA40d7ee5dDC0",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 78795.53,
		"hash": "a1464cb25a59e8f3f0ddf837412cd3ca2ce36f600aa58f7b2c9041f07628302c"
	},
	{
		"id": "ab773a9d54ce",
		"ts": "2026-09-02T14:56:04.033Z",
		"symbol": "VIBES",
		"token": "0xefFC8815487084a97edfdfF968b56Ea123421Acb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 65958.03,
		"hash": "ab773a9d54ce95545d80e9d23d35b57c30481ff0bbb3ffbdcc14b1d9bcfb5d6e"
	},
	{
		"id": "c31ba071cc6c",
		"ts": "2026-09-02T10:32:11.417Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114205676.65,
		"hash": "c31ba071cc6cf81f3aa3c76c927d0c8ec121f1cd2d5248f96a042ee913435828"
	},
	{
		"id": "eff0fffb1953",
		"ts": "2026-09-02T10:32:11.876Z",
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
		"liquidityUsd": 13332946.85,
		"hash": "eff0fffb19535f742d8c70a28627fe5d1a080dd0d1e82c716133bcf029ab0ce2"
	},
	{
		"id": "c98e25ad3de5",
		"ts": "2026-09-02T10:32:12.138Z",
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
		"liquidityUsd": 919394.64,
		"hash": "c98e25ad3de58656a7ca60b9b57a690137728b8c180eeed98f05800f6df01088"
	},
	{
		"id": "c18230c831b5",
		"ts": "2026-09-02T10:32:12.395Z",
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
		"liquidityUsd": 28152274.61,
		"hash": "c18230c831b55a90de6822483f02472858b564ff2cf165f9ac2643207b928993"
	},
	{
		"id": "29264aad037f",
		"ts": "2026-09-02T10:32:12.645Z",
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
		"liquidityUsd": 4034872.2,
		"hash": "29264aad037f42f1495671b8d55b55fe3a094c405b91b8137a0ddbb41db0a3df"
	},
	{
		"id": "cd307c4b23ae",
		"ts": "2026-09-02T10:32:12.885Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1128051.23,
		"hash": "cd307c4b23aec7797a15968f625bfe773588e5b6ffb5288190fd70d5401466b5"
	},
	{
		"id": "e3c91484ff68",
		"ts": "2026-09-02T10:32:13.143Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1667407.55,
		"hash": "e3c91484ff68605ebbbddf0e8c8961541b479731a2f40abd265e9dcd00ef7252"
	},
	{
		"id": "61d92388dd1b",
		"ts": "2026-09-02T10:32:13.385Z",
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
		"liquidityUsd": 1128982.88,
		"hash": "61d92388dd1b9e1eb3bcf65f0a1613db8d66f97815ac46f777d695811848d08d"
	},
	{
		"id": "200186131032",
		"ts": "2026-09-02T10:32:13.672Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 775185.01,
		"hash": "2001861310329addddbf3497a87cdbea43eb3f6f822110a9492aeaef4adf301d"
	},
	{
		"id": "b447aae7d663",
		"ts": "2026-09-02T10:32:13.927Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1284067.45,
		"hash": "b447aae7d6630a3624630d5b9a733bf5730f711eacc1b5b49b2e126a21fb2556"
	},
	{
		"id": "1917767106f2",
		"ts": "2026-09-02T10:32:14.154Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3997049.77,
		"hash": "1917767106f2d6e176b68210daad6c461a7cdcbf0488d657020c7414514fbc32"
	},
	{
		"id": "e3149d21d1fe",
		"ts": "2026-09-02T10:32:14.381Z",
		"symbol": "VIBES",
		"token": "0xefFC8815487084a97edfdfF968b56Ea123421Acb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 69209.03,
		"hash": "e3149d21d1fedc253fa88fe5a6fc80e6475fbfb6350b5f4cc9699c848ba8037c"
	},
	{
		"id": "d24448b948d9",
		"ts": "2026-09-02T10:32:14.608Z",
		"symbol": "RIPE",
		"token": "0x2A0a59d6B975828e781EcaC125dBA40d7ee5dDC0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 102037.34,
		"hash": "d24448b948d96f55f25c7939e3822ea59d773b1c3bf71f4a7e52d80a82081140"
	},
	{
		"id": "6f983c0daad1",
		"ts": "2026-09-02T10:32:14.834Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1127743.76,
		"hash": "6f983c0daad1a719717ffa9d921e5357adca822ef76beb6934c47fa176addff9"
	},
	{
		"id": "baae11c55de5",
		"ts": "2026-09-02T10:32:15.187Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3106605.1,
		"hash": "baae11c55de5ce5393d27ab1f956c8a866d186daa886b4a2542ff038094b757b"
	},
	{
		"id": "522b26d0cc55",
		"ts": "2026-09-02T10:32:15.414Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 273743.95,
		"hash": "522b26d0cc55e29cec7d56f75d8cb71056cf14bf95da3a4d1ca84cf7cab4789c"
	},
	{
		"id": "0889a28ff04d",
		"ts": "2026-09-02T10:32:15.641Z",
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
		"liquidityUsd": 465362.19,
		"hash": "0889a28ff04d3bd16718616be5f0735fb2ab12dc88cc81f5b235fa5cb22c0f71"
	},
	{
		"id": "83f06502d580",
		"ts": "2026-09-02T10:32:15.867Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11990198.52,
		"hash": "83f06502d580533890d6760b393424afdebc57b7897896136a1b50676a4220fc"
	},
	{
		"id": "9ea667f97efb",
		"ts": "2026-09-02T05:24:13.936Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115254408.32,
		"hash": "9ea667f97efb7eef5be9b0cfc6cf32a5603c8af1fdc29ed1cff103e792d6675c"
	},
	{
		"id": "0a6a49e6b497",
		"ts": "2026-09-02T05:24:14.433Z",
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
		"liquidityUsd": 19603062.84,
		"hash": "0a6a49e6b497a342049388c5185e003acd9887842311b53f01721eebf7e2a861"
	},
	{
		"id": "8ac406b97de3",
		"ts": "2026-09-02T05:24:14.912Z",
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
		"liquidityUsd": 935289.09,
		"hash": "8ac406b97de3c17ddfbd7aacdf734d30a4129f2494d4e8293b6054508d4610c1"
	},
	{
		"id": "ae13c5c0c29e",
		"ts": "2026-09-02T05:24:15.154Z",
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
		"liquidityUsd": 28541263.9,
		"hash": "ae13c5c0c29ea5878ab68302e61088300278ef213df412d6d90846abb0d9650e"
	},
	{
		"id": "e1545ac35adb",
		"ts": "2026-09-02T05:24:15.406Z",
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
		"liquidityUsd": 4120059.76,
		"hash": "e1545ac35adb0e5877e74974225073a3aea4fdb4306271d6533d924a16ce5b69"
	},
	{
		"id": "6f4f01148062",
		"ts": "2026-09-02T05:24:15.650Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1151964.24,
		"hash": "6f4f011480629ed630761e9621743d1a901aae20f917d17a2abc4a7ecd8ea51e"
	},
	{
		"id": "7dd91194d881",
		"ts": "2026-09-02T05:24:15.920Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28541263.9,
		"hash": "7dd91194d881857372eabf6d35a840d249214dfb689a0be9e478b0a9cce1a254"
	},
	{
		"id": "e0f8c191a3df",
		"ts": "2026-09-02T05:24:16.184Z",
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
		"liquidityUsd": 1632475.38,
		"hash": "e0f8c191a3dfe59c893ce52f1c35ae51554a9205518a5026566163f997c378cc"
	},
	{
		"id": "7f16881b4c6a",
		"ts": "2026-09-02T05:24:16.467Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 815564.02,
		"hash": "7f16881b4c6a0e223a9c05b37b18cab86c3819ee102452c46e985c47d190edc0"
	},
	{
		"id": "a9c8358f6a3f",
		"ts": "2026-09-02T05:24:16.714Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1324754.7,
		"hash": "a9c8358f6a3f750e89503b578940b222000a8b074f41ef6dda954e0cfc1fb8db"
	},
	{
		"id": "d63396e1e82b",
		"ts": "2026-09-02T05:24:16.949Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4074508.7,
		"hash": "d63396e1e82b849e1512db0a20cdefd3cc9734e4674c27eaef3d0ec4a66063c1"
	},
	{
		"id": "2f1e9bdab435",
		"ts": "2026-09-02T05:24:17.175Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1150195.19,
		"hash": "2f1e9bdab4356358ad6559c53c240b24b552d7658bc46b05b6ca36b2add19f19"
	},
	{
		"id": "569d016cd041",
		"ts": "2026-09-02T05:24:17.410Z",
		"symbol": "RIPE",
		"token": "0x2A0a59d6B975828e781EcaC125dBA40d7ee5dDC0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 116274.05,
		"hash": "569d016cd04121ce78cc264795b1362640a0a188e01f5dc26ebe97cda445c1c4"
	},
	{
		"id": "58a3f42c0e02",
		"ts": "2026-09-02T05:24:17.643Z",
		"symbol": "VIBES",
		"token": "0xefFC8815487084a97edfdfF968b56Ea123421Acb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 73435.16,
		"hash": "58a3f42c0e025c0efcd1d43ad521585a11651504a689e666f0e3317d571cb996"
	},
	{
		"id": "3fdd91283f15",
		"ts": "2026-09-02T05:24:17.879Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3267104.68,
		"hash": "3fdd91283f1503b5303f5db4e72dc0c6065ff8a901126b935db8c5d98a44e343"
	},
	{
		"id": "c74843d2d84f",
		"ts": "2026-09-02T05:24:18.106Z",
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
		"liquidityUsd": 425951.67,
		"hash": "c74843d2d84f082ad59f560bb5f53633d9a50975aeb9c52d2557774bf97bacc7"
	},
	{
		"id": "7de68817d78f",
		"ts": "2026-09-02T05:24:18.343Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 12424344.28,
		"hash": "7de68817d78f0b98e2e2602c70e6d77cee050241b4c41b6faa67f7117d5a0227"
	},
	{
		"id": "eeb19f579d34",
		"ts": "2026-09-02T05:24:18.568Z",
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
		"liquidityUsd": 582044.12,
		"hash": "eeb19f579d34de9e40d54b7dc2914bf450fa9b876f15e3d201e7c9e7ddab38a5"
	},
	{
		"id": "1e1793df66e9",
		"ts": "2026-09-02T00:53:38.705Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115084490.69,
		"hash": "1e1793df66e98eea0cf7bf5538ae099373efc7cd8b8fccdd5d1da7bfecb7917c"
	},
	{
		"id": "836a75bf230b",
		"ts": "2026-09-02T00:53:38.955Z",
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
		"liquidityUsd": 14843719.33,
		"hash": "836a75bf230b3d04bdef9dff271b57963be8f331ef1e221db08e84c7fd5617f0"
	},
	{
		"id": "ff87b7a2fdd1",
		"ts": "2026-09-02T00:53:39.231Z",
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
		"liquidityUsd": 929207.38,
		"hash": "ff87b7a2fdd16c1f6f74e0ac1814b49a3d62c9313409a3a261fb42cb92911cdb"
	},
	{
		"id": "04ceea7f4302",
		"ts": "2026-09-02T00:53:39.472Z",
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
		"liquidityUsd": 28394353.91,
		"hash": "04ceea7f4302bcdbc924738ebc738e7e4c178a94423e18240b0bd349597f3637"
	},
	{
		"id": "67e74a9d3d3a",
		"ts": "2026-09-02T00:53:40.092Z",
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
		"liquidityUsd": 4094854.59,
		"hash": "67e74a9d3d3ad0c75b986aef176c73ecd6c5ffa65f763b0eb562690daed049f9"
	},
	{
		"id": "af9bec9cbb72",
		"ts": "2026-09-02T00:53:40.349Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1143029.29,
		"hash": "af9bec9cbb72efe1f7519793f58ab08205106c693b6b19f1aa61f59c3bc32534"
	},
	{
		"id": "818636ce3db7",
		"ts": "2026-09-02T00:53:40.619Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28394353.91,
		"hash": "818636ce3db7107a01d09b6969a60f8fffec453f79c7aefe3a58724ed6d9efa0"
	},
	{
		"id": "5ef887d340ff",
		"ts": "2026-09-02T00:53:40.863Z",
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
		"liquidityUsd": 1652858.01,
		"hash": "5ef887d340ffa914a59b48e0ff58d3c16642a2bfbb39b282ededd1dc76f3651a"
	},
	{
		"id": "3ed6784b7c74",
		"ts": "2026-09-02T00:53:41.113Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1309359.35,
		"hash": "3ed6784b7c740dd0125e9542ef75c293cef222475ed3934a35ee40b0fbb9f9f2"
	},
	{
		"id": "29c204fc54df",
		"ts": "2026-09-02T00:53:41.367Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 784160.91,
		"hash": "29c204fc54df6f72d15911be5c69b62c7569a4da60323da60664e3573ec2aa94"
	},
	{
		"id": "93265e3890c3",
		"ts": "2026-09-02T00:53:41.651Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4043831.48,
		"hash": "93265e3890c3124ab469a4645fe8f059761d6a2ac67afaf71f1243cc409282a8"
	},
	{
		"id": "3d1a58af03b0",
		"ts": "2026-09-02T00:53:41.871Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1144925.98,
		"hash": "3d1a58af03b08c9517a5d1a279db5fe8c6824853982a97f8809ef62d2c427578"
	},
	{
		"id": "0660e6009516",
		"ts": "2026-09-02T00:53:42.090Z",
		"symbol": "VIBES",
		"token": "0xefFC8815487084a97edfdfF968b56Ea123421Acb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 66864.23,
		"hash": "0660e600951600acd149ce3227b911ea7e240e2217a97c04a2ca435ae95fca46"
	},
	{
		"id": "608af206fa6c",
		"ts": "2026-09-02T00:53:42.312Z",
		"symbol": "RIPE",
		"token": "0x2A0a59d6B975828e781EcaC125dBA40d7ee5dDC0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 122827.96,
		"hash": "608af206fa6c94bf469674be3c757252baf278dd4dea977214d9b82816983040"
	},
	{
		"id": "7460a1126d86",
		"ts": "2026-09-02T00:53:42.531Z",
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
		"liquidityUsd": 609085.49,
		"hash": "7460a1126d86d6a678a91019266525db0779c474edb7e3ec63ff8b41caeeba51"
	},
	{
		"id": "1062ba95debb",
		"ts": "2026-09-02T00:53:42.752Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3256807.27,
		"hash": "1062ba95debb56781de708f7974b533fe90377e616fde3eaba430fa7e64a8c45"
	},
	{
		"id": "56219daeb169",
		"ts": "2026-09-02T00:53:42.969Z",
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
		"liquidityUsd": 433313.33,
		"hash": "56219daeb169969499679f15387c4aa8968f48ed0247a9bf6b5857e4d1e1ca70"
	},
	{
		"id": "1dddf5f72b38",
		"ts": "2026-09-02T00:53:43.188Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 334587.07,
		"hash": "1dddf5f72b38d5eb27fe29703731420f469103234f33e4b631ad2e5d3d46c554"
	},
	{
		"id": "ed6ede73e8a0",
		"ts": "2026-09-01T22:58:00.419Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114995588.29,
		"hash": "ed6ede73e8a04bc27f2509e3794ffcf58c0138012a56a9b8e302424056f1c718"
	},
	{
		"id": "85604562328d",
		"ts": "2026-09-01T22:58:01.110Z",
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
		"liquidityUsd": 17958147.32,
		"hash": "85604562328d5df16d039bf4c8620c557b1c665549b66f71fe668c947a487d07"
	},
	{
		"id": "be2d99e90f3b",
		"ts": "2026-09-01T22:58:01.592Z",
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
		"liquidityUsd": 930533.99,
		"hash": "be2d99e90f3b058d6d831d9ada95aceaa361bf5f4a710cab892b8d29a2eba967"
	},
	{
		"id": "97726b99f59b",
		"ts": "2026-09-01T22:58:01.857Z",
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
		"liquidityUsd": 28417265.67,
		"hash": "97726b99f59b17989bd258c3a8b31f6e4c69a6ccda527dc52b181206acea7914"
	},
	{
		"id": "cae89de71e3b",
		"ts": "2026-09-01T22:58:02.106Z",
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
		"liquidityUsd": 4088460.59,
		"hash": "cae89de71e3ba94b0b75454b53222f518c1006e667a2c20a6a4929ee162e6d66"
	},
	{
		"id": "e1882ec0acc6",
		"ts": "2026-09-01T22:58:02.357Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1145566.56,
		"hash": "e1882ec0acc660c7d624730ca89f5321eb5864b0d19556d6c494c3e7648c79be"
	},
	{
		"id": "a9e0021b549e",
		"ts": "2026-09-01T22:58:02.634Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28417265.67,
		"hash": "a9e0021b549e78be226761d71fbaac5319a9f14242a9011c78167a91f943d6fd"
	},
	{
		"id": "4c4db2d6f311",
		"ts": "2026-09-01T22:58:03.125Z",
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
		"liquidityUsd": 1653486.93,
		"hash": "4c4db2d6f31137e8472f3bfc9d4f767be2e8a8d6e3c310af1b69653bf3525a19"
	},
	{
		"id": "e9e6b0c2b247",
		"ts": "2026-09-01T22:58:03.870Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1280844.55,
		"hash": "e9e6b0c2b247b0a72b85cbcde3dc9e875a26b8842520d9befe0b4345587baaf0"
	},
	{
		"id": "9407d506979b",
		"ts": "2026-09-01T22:58:04.340Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 748671.58,
		"hash": "9407d506979b9bdf6a67837f31144d7063c087212881dc3eaa51d078af918ec8"
	},
	{
		"id": "2d3fd294d524",
		"ts": "2026-09-01T22:58:04.573Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4055657.03,
		"hash": "2d3fd294d524a7cdb043dc11092eb653bd470b1e0dea14e9d83b01e7f9f2f0d8"
	},
	{
		"id": "8eed1e1907de",
		"ts": "2026-09-01T22:58:04.805Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1153666.16,
		"hash": "8eed1e1907dea1dafa7593e603a9bb2ab310c557f4b04c3cb9b3f47812cdce9a"
	},
	{
		"id": "3d4642c1b17f",
		"ts": "2026-09-01T22:58:05.051Z",
		"symbol": "VIBES",
		"token": "0xefFC8815487084a97edfdfF968b56Ea123421Acb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 68125.86,
		"hash": "3d4642c1b17feee84fb7d9228f07d980e3687f4441c846ed6b1423628daaecb1"
	},
	{
		"id": "5e3aff03f6d2",
		"ts": "2026-09-01T22:58:05.287Z",
		"symbol": "RIPE",
		"token": "0x2A0a59d6B975828e781EcaC125dBA40d7ee5dDC0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 124567.39,
		"hash": "5e3aff03f6d2aba3268c6e23c1710a8fe085b6124881eccca826d07975ff56ef"
	},
	{
		"id": "8e7b72b4b0b5",
		"ts": "2026-09-01T22:58:05.520Z",
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
		"liquidityUsd": 606551.38,
		"hash": "8e7b72b4b0b5e68cea582be797e4a1036de8cda33a93daa28f3bc1cb029c9d21"
	},
	{
		"id": "7210323a9b0b",
		"ts": "2026-09-01T22:58:05.751Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3248208.39,
		"hash": "7210323a9b0be790154bcb6465451349b594dfc7429eb34a7f0799abc318fc4d"
	},
	{
		"id": "535704bfba56",
		"ts": "2026-09-01T22:58:06.003Z",
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
		"liquidityUsd": 448545.25,
		"hash": "535704bfba5645c1ba2b60b7d5f579b48b694a5aacafb0fcdad7b558fb8825c6"
	},
	{
		"id": "674d688a0bcb",
		"ts": "2026-09-01T22:58:06.254Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 351549.85,
		"hash": "674d688a0bcbe0a1d182ef4a298dc31e107e6604fc2f6143d782b4d92f1aa1d0"
	},
	{
		"id": "7fe64ccecc63",
		"ts": "2026-09-01T20:28:44.837Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115173292.9,
		"hash": "7fe64ccecc635cb586bf14ea82ea242788fc08570c2c9194f2f3ed2e0ed83d93"
	},
	{
		"id": "ac911c5a7884",
		"ts": "2026-09-01T20:28:45.191Z",
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
		"liquidityUsd": 17790576.7,
		"hash": "ac911c5a7884fbb5f37f9934f32a05bc73f35aea67a40be9626c213fdf892457"
	},
	{
		"id": "72482cf25180",
		"ts": "2026-09-01T20:28:45.480Z",
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
		"liquidityUsd": 932827.82,
		"hash": "72482cf25180f3d2d70a4694582ed710ca2b91cf686e57b492ca47424be95176"
	},
	{
		"id": "a318583c4183",
		"ts": "2026-09-01T20:28:45.673Z",
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
		"liquidityUsd": 28560195.81,
		"hash": "a318583c4183fa574958e68062f5be56b9d8ee46b31e4d3accfd828b20c3ee76"
	},
	{
		"id": "d4173bc7374b",
		"ts": "2026-09-01T20:28:45.860Z",
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
		"liquidityUsd": 4106372.55,
		"hash": "d4173bc7374b0f563a51e50082a6eba317e0b68fb50b677eb763965fbd52c22a"
	},
	{
		"id": "ae4aab3632e3",
		"ts": "2026-09-01T20:28:46.050Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1141707.27,
		"hash": "ae4aab3632e36a2fe9be4b4b34983d885aa785cb7cb64e6953a3c55ebc49bab1"
	},
	{
		"id": "0d9d747c94c5",
		"ts": "2026-09-01T20:28:46.252Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28560195.81,
		"hash": "0d9d747c94c5a17ad555de805136ded8a5da46b97bc4918b5ea7665246e57c1e"
	},
	{
		"id": "30c82ba87566",
		"ts": "2026-09-01T20:28:46.458Z",
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
		"liquidityUsd": 1658286.66,
		"hash": "30c82ba8756607b2f7d77342691e18cb912250975540d9a7b59fa1ea52a2a1b7"
	},
	{
		"id": "0d6116927daa",
		"ts": "2026-09-01T20:28:46.663Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1297475.56,
		"hash": "0d6116927daa1fd4a4941334dbc9151a274881c6e98d8836756c9b200b843d96"
	},
	{
		"id": "cfb7af5d1ddd",
		"ts": "2026-09-01T20:28:46.853Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4105956.22,
		"hash": "cfb7af5d1ddd9741efea2730401319a417dcc6539b143d2be23548aeae579bd0"
	},
	{
		"id": "436d0243abe2",
		"ts": "2026-09-01T20:28:47.035Z",
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
		"liquidityUsd": 733124.77,
		"hash": "436d0243abe2f0f32c6403de178f1c6f7f20f2b7b4e1b85f4228d6e3d67a0353"
	},
	{
		"id": "9b7d80a4c8bb",
		"ts": "2026-09-01T20:28:47.228Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1158158.47,
		"hash": "9b7d80a4c8bbc940f06b5ea4076a0c8928966fa3c3b15dfb3cdd88d9ea96f6ad"
	},
	{
		"id": "106aeb16567e",
		"ts": "2026-09-01T20:28:47.415Z",
		"symbol": "VIBES",
		"token": "0xefFC8815487084a97edfdfF968b56Ea123421Acb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 69134.95,
		"hash": "106aeb16567e37dc4bf086f6709f9ed992bd78568c292a9db47373db5a83c921"
	},
	{
		"id": "5b64869a536b",
		"ts": "2026-09-01T20:28:47.619Z",
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
		"liquidityUsd": 627698.72,
		"hash": "5b64869a536b4a2cd2e77862343c41b86c547cf97b2fa51f5828cba3ab280407"
	},
	{
		"id": "780b33ab457e",
		"ts": "2026-09-01T20:28:47.816Z",
		"symbol": "RIPE",
		"token": "0x2A0a59d6B975828e781EcaC125dBA40d7ee5dDC0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 96681.85,
		"hash": "780b33ab457e2d4a05c9626b39b9f2d6531d30343f2964e92542929df8c039fb"
	},
	{
		"id": "37e3730c3778",
		"ts": "2026-09-01T20:28:48.004Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3273877.29,
		"hash": "37e3730c377861481eb04d4c43b11452b09dbd939f6abbc7a0ae7e754fa54b21"
	},
	{
		"id": "cb92a46aa76e",
		"ts": "2026-09-01T20:28:48.186Z",
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
		"liquidityUsd": 490909.25,
		"hash": "cb92a46aa76e1199dfaf3606063420bdd70390784fd21a386cc4fdf4e55e2169"
	},
	{
		"id": "cec36724d793",
		"ts": "2026-09-01T20:28:48.437Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 367559.11,
		"hash": "cec36724d7933341988ab1d50f42a9dea327c51d969e3cc32e1ce1fd69e9aa40"
	},
	{
		"id": "683045f2b953",
		"ts": "2026-09-01T17:33:17.735Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115287123.79,
		"hash": "683045f2b953006c5a95fdb44e39c50aab24663074944f015e17644f6eaf8763"
	},
	{
		"id": "04a1c20c260e",
		"ts": "2026-09-01T17:33:18.071Z",
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
		"liquidityUsd": 19650925.39,
		"hash": "04a1c20c260ef648a29a00a337dfed9859169d264e88e747cb523e00631d90de"
	},
	{
		"id": "18d1d2259fc8",
		"ts": "2026-09-01T17:33:18.366Z",
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
		"liquidityUsd": 943023.24,
		"hash": "18d1d2259fc8ab8cb35c4dbd264e6c13c088eb1b572fe79a7b04a03d77d31d31"
	},
	{
		"id": "3baada4635ff",
		"ts": "2026-09-01T17:33:18.627Z",
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
		"liquidityUsd": 28699739.35,
		"hash": "3baada4635ffd35a280cda0fc1fd1fe61adfff72345dd412d36e3c5c2561ba08"
	},
	{
		"id": "ebdc58e01164",
		"ts": "2026-09-01T17:33:18.882Z",
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
		"liquidityUsd": 4148301.49,
		"hash": "ebdc58e01164baeb9f1897d9fc47b71af540c7a22e78cc87b1e462d29e922b47"
	},
	{
		"id": "f3bc7758d3c8",
		"ts": "2026-09-01T17:33:22.529Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1155523.1,
		"hash": "f3bc7758d3c83037295e4049d43f8b1d549529c6d569951ae7415505b07cf5ae"
	},
	{
		"id": "b0861e263483",
		"ts": "2026-09-01T17:33:22.783Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28699739.35,
		"hash": "b0861e263483c28fd9e2c6317f8e00428964214d38476eb362005a0fb3905705"
	},
	{
		"id": "9eae3b82d3a4",
		"ts": "2026-09-01T17:33:23.041Z",
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
		"liquidityUsd": 1668695.38,
		"hash": "9eae3b82d3a4e7fb95217366ac51803e6fcbf1d1d7e41c4cfbf179aad73951d1"
	},
	{
		"id": "6fe8cb221fa4",
		"ts": "2026-09-01T17:33:23.298Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 745624.26,
		"hash": "6fe8cb221fa45f0e7dad4a2053b459a86f3d103e2cb5e510aad6a79b19421624"
	},
	{
		"id": "5ae856921588",
		"ts": "2026-09-01T17:33:23.567Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1313444.91,
		"hash": "5ae856921588b345f0188cf1dbfed340c6685494f1d73ecee3ac547d0059099b"
	},
	{
		"id": "733612b9aa36",
		"ts": "2026-09-01T17:33:23.802Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4208740.88,
		"hash": "733612b9aa366ce9acc029cd8255dea544a279b996822181995b96627d4b16ff"
	},
	{
		"id": "76262272e012",
		"ts": "2026-09-01T17:33:24.036Z",
		"symbol": "VIBES",
		"token": "0xefFC8815487084a97edfdfF968b56Ea123421Acb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 76953.18,
		"hash": "76262272e012c402a2a97433ebab3fcf8c39900d01acdca3bc3b0fd25bf11c08"
	},
	{
		"id": "b7754d554f5d",
		"ts": "2026-09-01T17:33:24.270Z",
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
		"liquidityUsd": 649636.42,
		"hash": "b7754d554f5d3e89e2cb2a5398625c6ad4966b5ca65c27334f9a4c97ba213ee4"
	},
	{
		"id": "78207adef984",
		"ts": "2026-09-01T17:33:24.506Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1169591.68,
		"hash": "78207adef98453c5a6e115cb4a661fbc58acff4ec3841fa94f936e7eb05e50ec"
	},
	{
		"id": "77cc69d355d5",
		"ts": "2026-09-01T17:33:24.741Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3265093.92,
		"hash": "77cc69d355d503dd3fa552f6cbff9790112dfc2f99148f3cc3f6543a41e5ed47"
	},
	{
		"id": "cd450ea5b9a9",
		"ts": "2026-09-01T17:33:24.977Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 12391720.05,
		"hash": "cd450ea5b9a930d1803be0ecc8ce5039b010f040fb5c4975414631418f34423f"
	},
	{
		"id": "028319d3170d",
		"ts": "2026-09-01T17:33:25.212Z",
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
		"liquidityUsd": 421176.94,
		"hash": "028319d3170da915ab71d98e3951cbb0a00309bd904e43527e02fa9937f0281e"
	},
	{
		"id": "704b9d5d14aa",
		"ts": "2026-09-01T17:33:25.446Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 205239.92,
		"hash": "704b9d5d14aa38966aeb8db99c376632e308b6ac0b4a03f5334520dcf012d01a"
	},
	{
		"id": "e5fd6f219dc0",
		"ts": "2026-09-01T13:01:20.746Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115612352.32,
		"hash": "e5fd6f219dc035dc691653d475e550fc2c9b8a3cbaf8a2f0631585248b9fb2ea"
	},
	{
		"id": "f4818787a50a",
		"ts": "2026-09-01T13:01:21.006Z",
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
		"liquidityUsd": 13659368.53,
		"hash": "f4818787a50a975c246bf9d7a930b69b4c8468e065cea744c59b9c5bd984cb57"
	},
	{
		"id": "e968f7170efa",
		"ts": "2026-09-01T13:01:21.490Z",
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
		"liquidityUsd": 949376.27,
		"hash": "e968f7170efaec6c968ac3838d76880b23c20464ece7fc5f027ee257a196cce6"
	},
	{
		"id": "a87dad37ca9f",
		"ts": "2026-09-01T13:01:21.743Z",
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
		"liquidityUsd": 28906827.71,
		"hash": "a87dad37ca9f5c3c8d8d4aa1d1c89dd18cd0126de443c9b3193909ae3b1676e8"
	},
	{
		"id": "6bb421d5ed3b",
		"ts": "2026-09-01T13:01:21.989Z",
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
		"liquidityUsd": 4171010.51,
		"hash": "6bb421d5ed3bd4745652215723e281da04717994542e5d3c2796a1303451dd79"
	},
	{
		"id": "41ab95d805a8",
		"ts": "2026-09-01T13:01:22.250Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1162371.72,
		"hash": "41ab95d805a84ef23fe75593ecb487f96d4cc226ccfbcb059bd60f19a28a771f"
	},
	{
		"id": "c4d768cfc303",
		"ts": "2026-09-01T13:01:22.501Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28906827.71,
		"hash": "c4d768cfc30341e5804acc126463a446f83d5f8ded36ac222fb45250dad7536a"
	},
	{
		"id": "05b762c7c57e",
		"ts": "2026-09-01T13:01:22.742Z",
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
		"liquidityUsd": 1678725.58,
		"hash": "05b762c7c57eb9b7bc28fa6b304f899f925c420fbb2721a564f4aa230dc46d57"
	},
	{
		"id": "402e705cc344",
		"ts": "2026-09-01T13:01:23.222Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 788820.22,
		"hash": "402e705cc344cf29c1ab99b7769b2eae8fd3705417871ffd62bbff188b094825"
	},
	{
		"id": "8334b36dcfb7",
		"ts": "2026-09-01T13:01:23.473Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 219382.21,
		"hash": "8334b36dcfb73db969464d8cdd8dc6e1afab2343a778be28b19e9d39c5cf1cda"
	},
	{
		"id": "82b44cbfd3f2",
		"ts": "2026-09-01T13:01:23.697Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1368694.5,
		"hash": "82b44cbfd3f2efdcd296657131618a41d19b60d61b3c7225517d47e2e88ff5e5"
	},
	{
		"id": "21680edf162d",
		"ts": "2026-09-01T13:01:23.943Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4277903.98,
		"hash": "21680edf162ddaf6f8c46f42bc9955926be9fab47d567946df8afed5a3086d33"
	},
	{
		"id": "c7392a06d910",
		"ts": "2026-09-01T13:01:24.180Z",
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
		"liquidityUsd": 687449.75,
		"hash": "c7392a06d9106389048bf51e0d2e00bbb2d62fa19a9510fc5951c1a84b0ac1d6"
	},
	{
		"id": "409e0f38d5d8",
		"ts": "2026-09-01T13:01:24.410Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 100103.82,
		"hash": "409e0f38d5d871de71e2fde076a4feb3e6cae20f873629d4713ffaa646b8df14"
	}
]
