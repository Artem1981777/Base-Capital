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
	"updatedAt": "2026-07-28T09:34:00.256Z",
	"tokensScored": 6030,
	"verdictsIssued": 6030,
	"safe": 5268,
	"risky": 471,
	"likelyRug": 291,
	"ticks": 367
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "02dd477b542f",
		"ts": "2026-07-28T09:33:56.430Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111167470.34,
		"hash": "02dd477b542f62350ba6e4183b2e7a696a65e511317f35263d13cb892e490e33"
	},
	{
		"id": "f74064c92cbc",
		"ts": "2026-07-28T09:33:56.879Z",
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
		"liquidityUsd": 15498347.41,
		"hash": "f74064c92cbc329f5345b5fb82df4e0ec0d0c8655357aea5917af83d11d1667e"
	},
	{
		"id": "76393b48c71d",
		"ts": "2026-07-28T09:33:57.122Z",
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
		"liquidityUsd": 1078135.94,
		"hash": "76393b48c71dfd5b7f132a7afaa26b9746c7d63d68c8eba430a90f3d5e02dba4"
	},
	{
		"id": "d76d972e6f0d",
		"ts": "2026-07-28T09:33:57.395Z",
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
		"liquidityUsd": 26496789.06,
		"hash": "d76d972e6f0d784d7923819273a9d1d390300edf663622e698a19649e5d130ab"
	},
	{
		"id": "83858045929a",
		"ts": "2026-07-28T09:33:57.638Z",
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
		"liquidityUsd": 4929316.76,
		"hash": "83858045929a7af3128fcd119f3e24f4bbbccbf3c77cc31baf07cadc88f8b87f"
	},
	{
		"id": "7a2021211b6c",
		"ts": "2026-07-28T09:33:57.883Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 947626.96,
		"hash": "7a2021211b6cb507cb1cbd3e81edfc529b1c9feae495fe9157470eaefe70e162"
	},
	{
		"id": "f5eb2d865295",
		"ts": "2026-07-28T09:33:58.148Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26496789.06,
		"hash": "f5eb2d8652956f0cc6d1fd1a98b7c167af6f091d060042c4bae86b394cd4ce1f"
	},
	{
		"id": "36d42c5ad019",
		"ts": "2026-07-28T09:33:58.389Z",
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
		"liquidityUsd": 2422145.02,
		"hash": "36d42c5ad01965fd614181a26e7f9792a5a8ebcd69cc2b2b2cf7065fa8053ff4"
	},
	{
		"id": "94aa1e3d6814",
		"ts": "2026-07-28T09:33:58.632Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 493516.09,
		"hash": "94aa1e3d6814fe212cc76d3006b9562f36c665a5accec19a1f6bff4b2662d657"
	},
	{
		"id": "d264156c8475",
		"ts": "2026-07-28T09:33:58.875Z",
		"symbol": "$MFER",
		"token": "0xE3086852A4B125803C815a158249ae468A3254Ca",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 185043.05,
		"hash": "d264156c84753689ed33aa4b75d1414a5a663fab5bd3afee37f919a3ae84fdef"
	},
	{
		"id": "327d2efb58a2",
		"ts": "2026-07-28T09:33:59.102Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 522558.21,
		"hash": "327d2efb58a2d6334b3969fa957c3deb5ed8e07ada3a3fc9ab821ae28c780378"
	},
	{
		"id": "1233e165dfb9",
		"ts": "2026-07-28T09:33:59.328Z",
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
		"liquidityUsd": 1305723.35,
		"hash": "1233e165dfb95699daef1930e2df5ec994d60ada0ce443a4bf2e46bba50f0acc"
	},
	{
		"id": "5a26ad97f449",
		"ts": "2026-07-28T09:33:59.554Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 513320.76,
		"hash": "5a26ad97f449787c3d54fa47196f90f65f84a3e066a632a4bebf9f528777f4b3"
	},
	{
		"id": "3cecdfe06237",
		"ts": "2026-07-28T09:33:59.781Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1813989.55,
		"hash": "3cecdfe062375026bbfc82a59300eef482aab2b70047433fb817f88f7b52841c"
	},
	{
		"id": "3b971c5f1128",
		"ts": "2026-07-28T09:34:00.008Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1754047.86,
		"hash": "3b971c5f11285c5579f645fba19adf42c14be7ca0f6243f1f9da643042896400"
	},
	{
		"id": "e3d6108b9e80",
		"ts": "2026-07-28T09:34:00.256Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146352.11,
		"hash": "e3d6108b9e80853fc10c7aef07e23755f137552922964ba5cd8c2cfad91a2ff3"
	},
	{
		"id": "0bf7c683c246",
		"ts": "2026-07-28T06:29:18.983Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110968756.87,
		"hash": "0bf7c683c246af46be49a6fb35ffd2de526d7f50c6365930c37d585241964dbe"
	},
	{
		"id": "3c429eec2014",
		"ts": "2026-07-28T06:29:19.427Z",
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
		"liquidityUsd": 17359550.28,
		"hash": "3c429eec20147b84e33d4400eca3e418660df79c06effc5d0b6d358b791c6c20"
	},
	{
		"id": "7dc37d851982",
		"ts": "2026-07-28T06:29:19.676Z",
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
		"liquidityUsd": 1086590.18,
		"hash": "7dc37d851982e30d04fbf139e3e4fa3bc3a908603badc69405437f666b857e3d"
	},
	{
		"id": "afcec517b900",
		"ts": "2026-07-28T06:29:19.912Z",
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
		"liquidityUsd": 26217464.43,
		"hash": "afcec517b90076aca55eb33cce006aec4f856ed4e086742281f9ac67c98a6010"
	},
	{
		"id": "cc8c687bb7c5",
		"ts": "2026-07-28T06:29:20.149Z",
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
		"liquidityUsd": 4929968.77,
		"hash": "cc8c687bb7c50dc57001981ae2984050201c0486a4b6cc079d333839b8697e85"
	},
	{
		"id": "ce14de362d1d",
		"ts": "2026-07-28T06:29:20.382Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 947593.88,
		"hash": "ce14de362d1da909c7de064259a2db015c8cbea6ae4cd11d9b1bb7c82959fc01"
	},
	{
		"id": "cbbcc8acbe42",
		"ts": "2026-07-28T06:29:20.615Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26217464.43,
		"hash": "cbbcc8acbe42e8cf485b743c054253ba7afb42afd721269ba25c73eca68c8cf4"
	},
	{
		"id": "d50b97b23666",
		"ts": "2026-07-28T06:29:20.853Z",
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
		"liquidityUsd": 2406916.16,
		"hash": "d50b97b2366625e5bfafd385cefb09ead53a1d7a6fb8f3fb75f5639f65e87d0e"
	},
	{
		"id": "d4897a0565c6",
		"ts": "2026-07-28T06:29:21.086Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 492333.35,
		"hash": "d4897a0565c64a8fee0a0a4123e6fc4d3adbc98372c418f5709f82fff9f01f97"
	},
	{
		"id": "34a700f3a67c",
		"ts": "2026-07-28T06:29:21.326Z",
		"symbol": "$MFER",
		"token": "0xE3086852A4B125803C815a158249ae468A3254Ca",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 176780.16,
		"hash": "34a700f3a67c339dfaa6775dadb00ab46d57809463845a984f158119d00bc1ed"
	},
	{
		"id": "8a0d8f397c34",
		"ts": "2026-07-28T06:29:21.545Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 520364.29,
		"hash": "8a0d8f397c34d3fed4f075045cfb91ffcb68769663bf4bebf1c8df56cfeda43c"
	},
	{
		"id": "d4d547bc063d",
		"ts": "2026-07-28T06:29:21.763Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9741483.37,
		"hash": "d4d547bc063dab00bb8912cce21f5bdab058b3f9d650e7a254aa2c64ce8b40a6"
	},
	{
		"id": "9580a8c3cd92",
		"ts": "2026-07-28T06:29:21.987Z",
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
		"liquidityUsd": 1314087.19,
		"hash": "9580a8c3cd92e213ecd7f16cab95ca4412387fd15fed0e591d15d86a41c444a6"
	},
	{
		"id": "56c14a29077e",
		"ts": "2026-07-28T06:29:22.209Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 506123.56,
		"hash": "56c14a29077ebe33dd9e6f6aaff196774d5e161b7c482e7831875d40478ae40b"
	},
	{
		"id": "cb368258c856",
		"ts": "2026-07-28T06:29:22.432Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1679384.88,
		"hash": "cb368258c8564dedfec469712305e24cbca73c560659e949f4b6e9259b5ccfef"
	},
	{
		"id": "ec4db0dd1894",
		"ts": "2026-07-28T06:29:22.650Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1754272.5,
		"hash": "ec4db0dd18946f48c4ac20019ae23bbb66475713bb9c0c2ba693e862d7da21b1"
	},
	{
		"id": "1b04768b753f",
		"ts": "2026-07-28T03:57:57.316Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110636563.41,
		"hash": "1b04768b753fedbf6be1a118b6ea8413bdc338938b137398b97bb98639ce2b23"
	},
	{
		"id": "9d96194b18d2",
		"ts": "2026-07-28T03:57:57.553Z",
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
		"liquidityUsd": 13526577.43,
		"hash": "9d96194b18d2a771072813d5e0f82ff068db4262385e962132176cb25e2d8653"
	},
	{
		"id": "cb6836282999",
		"ts": "2026-07-28T03:57:58.008Z",
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
		"liquidityUsd": 1088551.95,
		"hash": "cb6836282999c1322686330d1e9ecd9f44c27d559560e8273e54c4dffbe4acc3"
	},
	{
		"id": "6fdff45b12ef",
		"ts": "2026-07-28T03:57:58.449Z",
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
		"liquidityUsd": 26120868.68,
		"hash": "6fdff45b12ef513d20e11ee510f5ab9a442510d0c95235920d1cb8336f20c3ee"
	},
	{
		"id": "158d8f654098",
		"ts": "2026-07-28T03:57:58.683Z",
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
		"liquidityUsd": 4917720.15,
		"hash": "158d8f6540980dfb8fddd3063a26ec2d14dc8dc53b9ac37a37c40d9becd09e26"
	},
	{
		"id": "2414392253ee",
		"ts": "2026-07-28T03:57:58.918Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 946620.94,
		"hash": "2414392253ee164ff7f05d786095ae82400c3d7d625e91b15a921c6d79df87b7"
	},
	{
		"id": "a00b3279a7a7",
		"ts": "2026-07-28T03:57:59.158Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26120868.68,
		"hash": "a00b3279a7a7acff12081a308ae08c48168e29dc6eef42a42e119ebd8bcaf5be"
	},
	{
		"id": "d4ea82d89c68",
		"ts": "2026-07-28T03:57:59.392Z",
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
		"liquidityUsd": 2403090.36,
		"hash": "d4ea82d89c68d9e22b571c2d9e39019608e121c49d239312d3674d07da5ed310"
	},
	{
		"id": "f4007036de0f",
		"ts": "2026-07-28T03:57:59.624Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 492499.96,
		"hash": "f4007036de0ff379b1e73de1022465087bdf3ac34b4d6b524c68d583027198d7"
	},
	{
		"id": "2b7de5adf17c",
		"ts": "2026-07-28T03:57:59.857Z",
		"symbol": "$MFER",
		"token": "0xE3086852A4B125803C815a158249ae468A3254Ca",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 177400.68,
		"hash": "2b7de5adf17c875f22da3bf81bdb76923867f7f89ef14cc0cf94feedf4292455"
	},
	{
		"id": "dc0c6cb53844",
		"ts": "2026-07-28T03:58:00.084Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9782495,
		"hash": "dc0c6cb53844ca67cf020a662b62416aad40bd5beb343a48dc6c80bf6da06a51"
	},
	{
		"id": "dc8053e22cc4",
		"ts": "2026-07-28T03:58:00.321Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 514478.22,
		"hash": "dc8053e22cc48169262c3d68b4b0ebd2547ff32ac29504eae1aa40e3dd3bf23b"
	},
	{
		"id": "70450912ed85",
		"ts": "2026-07-28T03:58:00.556Z",
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
		"liquidityUsd": 1317978.23,
		"hash": "70450912ed85aef6bcaf78c590a43c15f29b010af4c6772e7eb01dfe67f41d8e"
	},
	{
		"id": "1ec213e0f0ce",
		"ts": "2026-07-28T03:58:00.937Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 511224.41,
		"hash": "1ec213e0f0ceeb2b111cb84b636859922133e22be49d26686d50822be68234ad"
	},
	{
		"id": "aa7408e32dfc",
		"ts": "2026-07-28T03:58:01.181Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1827339.53,
		"hash": "aa7408e32dfca84d47db4804f8109249a1e8ab24b98f6d8b3c88789340441b7a"
	},
	{
		"id": "d2de0b575496",
		"ts": "2026-07-28T03:58:01.415Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1748945.37,
		"hash": "d2de0b5754969223d46de3b79c2413f45ea4b4529e187dea25e996c16c3f0b8a"
	},
	{
		"id": "bd9abfe64293",
		"ts": "2026-07-28T00:04:09.087Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111112514.31,
		"hash": "bd9abfe64293a7b7093f58ac3d2c523cbbf34b2afa3a9f7ca0080a32f9d897c5"
	},
	{
		"id": "06990311dc29",
		"ts": "2026-07-28T00:04:09.536Z",
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
		"liquidityUsd": 17502898.77,
		"hash": "06990311dc29c18232ee837782aa72d489adee656bb03500e7f481a55f0a1702"
	},
	{
		"id": "1fe340e64d43",
		"ts": "2026-07-28T00:04:09.779Z",
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
		"liquidityUsd": 1081835.89,
		"hash": "1fe340e64d43ffba919135e9daa83f8494745df601178d5edbcec424d0393f6c"
	},
	{
		"id": "23e8e2727e88",
		"ts": "2026-07-28T00:04:10.024Z",
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
		"liquidityUsd": 26231387.4,
		"hash": "23e8e2727e883e54ef3a666d9cdc18412ef046f4dcdf2c92d4194c38ac5ba162"
	},
	{
		"id": "9536f92d6baf",
		"ts": "2026-07-28T00:04:10.264Z",
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
		"liquidityUsd": 4949516.84,
		"hash": "9536f92d6baf8cf7e075219544288049b379ef0fb0bb6a7f29e14797baf017fc"
	},
	{
		"id": "cdfcdca0cec1",
		"ts": "2026-07-28T00:04:10.504Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 948519.6,
		"hash": "cdfcdca0cec1418e2b27f770a98dff4ad9a96d60282c1b3fea0f23b68e78e05c"
	},
	{
		"id": "f678f43de98b",
		"ts": "2026-07-28T00:04:10.745Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26231387.4,
		"hash": "f678f43de98b2999c8cce860b3a05a158c2edf012cd5aab4a6470dbdc8b1cf1f"
	},
	{
		"id": "20a7890ebfd3",
		"ts": "2026-07-28T00:04:10.986Z",
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
		"liquidityUsd": 3791457,
		"hash": "20a7890ebfd36c9ffa4b75bc6b1d57158e666424684b434e22f3aae5c159c35e"
	},
	{
		"id": "efb05a274d69",
		"ts": "2026-07-28T00:04:11.227Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 503988.11,
		"hash": "efb05a274d693230101e97f59f82d34cc7ac954b76d686b8acbde5a71c0d4216"
	},
	{
		"id": "e1e841e4ac14",
		"ts": "2026-07-28T00:04:11.468Z",
		"symbol": "$MFER",
		"token": "0xE3086852A4B125803C815a158249ae468A3254Ca",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 176251.21,
		"hash": "e1e841e4ac145bc1ab64132dc4e3e9849b8cc0e7d5ccad9935c057feff517080"
	},
	{
		"id": "844f85799846",
		"ts": "2026-07-28T00:04:11.696Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9933071.03,
		"hash": "844f85799846b5d4f883bca6f9635202155c1e965fec60560ab0c1344b9f5898"
	},
	{
		"id": "55f528101131",
		"ts": "2026-07-28T00:04:11.920Z",
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
		"liquidityUsd": 1314093.37,
		"hash": "55f528101131a011dbf37b73958b177c78713c08c02857aa3b2b1f0ef4a86cb2"
	},
	{
		"id": "30c4f24ff5a7",
		"ts": "2026-07-28T00:04:12.151Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 524311.54,
		"hash": "30c4f24ff5a738915c1b4818da7b5e55ddab0eb1f2deefbab1d87305e79010ee"
	},
	{
		"id": "3a92a9a2651a",
		"ts": "2026-07-28T00:04:12.375Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1940050.16,
		"hash": "3a92a9a2651a6f4696f2e6f141d68bb2e4c62cdfa291c4a9848e7a52c4d370f4"
	},
	{
		"id": "fc17430b71ee",
		"ts": "2026-07-28T00:04:12.602Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1734963.39,
		"hash": "fc17430b71eea824c6da88efc20d0b31e264d71906f4ab8c6e394f3e7d87f666"
	},
	{
		"id": "7049e09138f4",
		"ts": "2026-07-28T00:04:12.827Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 524236.2,
		"hash": "7049e09138f48f801c44f8f60ab71b4d330cfae110381c1f657414e3cf78a401"
	},
	{
		"id": "3166f17d598b",
		"ts": "2026-07-27T22:57:32.352Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111669692.04,
		"hash": "3166f17d598bc0a0bb3d2adda29c52c607fbb0853d17e8d97feadcd7b5e79b56"
	},
	{
		"id": "57098b763946",
		"ts": "2026-07-27T22:57:32.552Z",
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
		"liquidityUsd": 13586521.47,
		"hash": "57098b7639469c9825bd0d4bdeceb5bed0070711300b99da245a46d91ba709e0"
	},
	{
		"id": "59719dab932c",
		"ts": "2026-07-27T22:57:32.749Z",
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
		"liquidityUsd": 1097390.43,
		"hash": "59719dab932c453e4cac87961d100fbd00ffec99344bd305fd2e98073c616bb3"
	},
	{
		"id": "34cb5548ebbe",
		"ts": "2026-07-27T22:57:32.944Z",
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
		"liquidityUsd": 26247569.67,
		"hash": "34cb5548ebbe174658fecb14ced7d394e27878d25def8d2497729e0b744854f9"
	},
	{
		"id": "b50297e27514",
		"ts": "2026-07-27T22:57:33.143Z",
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
		"liquidityUsd": 4984624.56,
		"hash": "b50297e27514b71e0cb92709dfda096fe136f516fbb8cf65285f24256dc43ae3"
	},
	{
		"id": "2049f8f9c1b3",
		"ts": "2026-07-27T22:57:33.334Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 969809.06,
		"hash": "2049f8f9c1b3e02fbc6239d5d7cbc0995a15648fca44c349d0c10fe45598ad43"
	},
	{
		"id": "49b052368a2a",
		"ts": "2026-07-27T22:57:33.523Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26247569.67,
		"hash": "49b052368a2aae37f228b0847d5600e093538a404db96d44336b5b255d2d94d2"
	},
	{
		"id": "466da7ce949b",
		"ts": "2026-07-27T22:57:33.712Z",
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
		"liquidityUsd": 3803366.69,
		"hash": "466da7ce949b0c52d4499087c6b0c308c93ce227d907f3e811d452daba169042"
	},
	{
		"id": "a8518ce88caa",
		"ts": "2026-07-27T22:57:33.903Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 510765.35,
		"hash": "a8518ce88caad916e1a135e517ddc534f9f3ddf4ef88377bb8bb8b3a18a7beb2"
	},
	{
		"id": "ff6f4f6dd705",
		"ts": "2026-07-27T22:57:34.106Z",
		"symbol": "$MFER",
		"token": "0xE3086852A4B125803C815a158249ae468A3254Ca",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 177753.4,
		"hash": "ff6f4f6dd705e9d464a483c50ae3d3e3eac283de76ff792f598422664ad021d2"
	},
	{
		"id": "d198d457847d",
		"ts": "2026-07-27T22:57:34.491Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9881628.53,
		"hash": "d198d457847df8ffca11504156026daa2b801b36424d7f723802b37619076558"
	},
	{
		"id": "b98efc61361e",
		"ts": "2026-07-27T22:57:34.692Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 521187.76,
		"hash": "b98efc61361e37cd0f739d64ee07a6ecaa7083deb69617917eafba8ea250619f"
	},
	{
		"id": "3677a7e3d90d",
		"ts": "2026-07-27T22:57:34.892Z",
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
		"liquidityUsd": 1444932.94,
		"hash": "3677a7e3d90decc85aeb5931c37723c6e789d7e6f1b87fdd25bd2a7438f85345"
	},
	{
		"id": "23375eea2683",
		"ts": "2026-07-27T22:57:35.274Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1945231.76,
		"hash": "23375eea2683ecd3707ef49c33727f9466a73919ae241e6786974664b4f865ea"
	},
	{
		"id": "f092d71c5370",
		"ts": "2026-07-27T22:57:35.461Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1741195.84,
		"hash": "f092d71c537039d72291a2c2a6113ac3653506c3e3f3f5cc0563e0cdc4a13f69"
	},
	{
		"id": "e5b817f297e5",
		"ts": "2026-07-27T22:57:35.650Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 509460.37,
		"hash": "e5b817f297e5d4eb4e5217e07a88d49c2162f4080287ceb0c8a42269a181a1e3"
	},
	{
		"id": "caa9296cc5e6",
		"ts": "2026-07-27T21:06:33.833Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112721465.45,
		"hash": "caa9296cc5e637b492929c339de30356b5a0f9ae46460c47c88e739bf636b8c3"
	},
	{
		"id": "031a6c483858",
		"ts": "2026-07-27T21:06:34.054Z",
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
		"liquidityUsd": 17356191.35,
		"hash": "031a6c483858eb8f90503155807c62dad8a1d18c0dc7f7e276b53dd61b0f976e"
	},
	{
		"id": "e8b431a85a40",
		"ts": "2026-07-27T21:06:34.269Z",
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
		"liquidityUsd": 1118506.21,
		"hash": "e8b431a85a40e3bb4eeea917496333c5d53440317b5ff1fa67af082401ae90b2"
	},
	{
		"id": "d2f993a70036",
		"ts": "2026-07-27T21:06:34.462Z",
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
		"liquidityUsd": 26768355.31,
		"hash": "d2f993a7003613667940304e4e850ff5ee1c498715573435cfb11c63c280df9d"
	},
	{
		"id": "c5bda366e0f0",
		"ts": "2026-07-27T21:06:34.666Z",
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
		"liquidityUsd": 5106062.57,
		"hash": "c5bda366e0f0b0aed2bc651e8570ede9e5f742b2d225638e344f0eb91f997ae1"
	},
	{
		"id": "e14dc55b866b",
		"ts": "2026-07-27T21:06:34.906Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 976346.16,
		"hash": "e14dc55b866b0fb97c8c474583e0793c0b02435db99c4f7719e52380387094c0"
	},
	{
		"id": "95e15d15d9c2",
		"ts": "2026-07-27T21:06:35.117Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26768355.31,
		"hash": "95e15d15d9c27310d74e236a33dafc84e0969bb67ab5c5448a7afaa2424b3604"
	},
	{
		"id": "10d2338e54a8",
		"ts": "2026-07-27T21:06:35.320Z",
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
		"liquidityUsd": 3896178.74,
		"hash": "10d2338e54a803faa5889899f8ec53cdb8ffc34867b919021ba31c4d4cd2776a"
	},
	{
		"id": "78ab750ef1db",
		"ts": "2026-07-27T21:06:35.523Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 534869.45,
		"hash": "78ab750ef1db3177b2854fb26febfaedd29847c935f9005ad83c50529bb6807b"
	},
	{
		"id": "82941e838a9a",
		"ts": "2026-07-27T21:06:35.712Z",
		"symbol": "$MFER",
		"token": "0xE3086852A4B125803C815a158249ae468A3254Ca",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 178975.72,
		"hash": "82941e838a9ad00aedf0ed0db826c00888820a72e7df2fd327fca699f7f231c4"
	},
	{
		"id": "051d5d3a967e",
		"ts": "2026-07-27T21:06:35.915Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10039461.73,
		"hash": "051d5d3a967e3ba577466961a0af0b6d0b1950068835bd5cdf3413c1fe66c0ea"
	},
	{
		"id": "28022cf4fab6",
		"ts": "2026-07-27T21:06:36.109Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 544655.24,
		"hash": "28022cf4fab6ec3e55d02cc775d4069069a6e587fd8fdc85842d128c64379ac3"
	},
	{
		"id": "d200709f5508",
		"ts": "2026-07-27T21:06:36.325Z",
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
		"liquidityUsd": 1460366.56,
		"hash": "d200709f550895c70d31023dc0a849a3a5bb7c9de2ee36f959405bc8ab64d227"
	},
	{
		"id": "c89fbe095d51",
		"ts": "2026-07-27T21:06:36.518Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2000649.24,
		"hash": "c89fbe095d51487f4280087bb505b26d916e41921dd87743988cd947a01afeae"
	},
	{
		"id": "c93806041389",
		"ts": "2026-07-27T21:06:36.723Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1767393.97,
		"hash": "c938060413891ab55721f18c96aa88058fe8cbf4496ef79af9a0719d28ddc772"
	},
	{
		"id": "844361f67a15",
		"ts": "2026-07-27T21:06:36.965Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 513472.12,
		"hash": "844361f67a15557b1a135ef4df1b98ee4f3bdef0e8b99eae0d1a669d5db3ace5"
	},
	{
		"id": "db613e8dbbae",
		"ts": "2026-07-27T19:21:49.294Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112619871.41,
		"hash": "db613e8dbbae2a5e08b5bcc74fa4eb019dced9872b6922da9d13195defa165c4"
	},
	{
		"id": "75d284b7a1e6",
		"ts": "2026-07-27T19:21:49.671Z",
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
		"liquidityUsd": 15104499.5,
		"hash": "75d284b7a1e6a81f6d0f470a0fe1a4e1cfe08c56a5ac3ef5d46ed1e217749f1d"
	},
	{
		"id": "695f6693c4f2",
		"ts": "2026-07-27T19:21:49.881Z",
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
		"liquidityUsd": 1119751.87,
		"hash": "695f6693c4f246781cf871910fe4a9d72f6a72b3904c565e02b33f41ae836269"
	},
	{
		"id": "1553d6a42845",
		"ts": "2026-07-27T19:21:50.253Z",
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
		"liquidityUsd": 26622858.53,
		"hash": "1553d6a42845a69622561ea1bd21b7f3dd36ebd64da3b988e646f288189cbc3a"
	},
	{
		"id": "b011151dbf20",
		"ts": "2026-07-27T19:21:50.466Z",
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
		"liquidityUsd": 5122425.33,
		"hash": "b011151dbf20005ffd2420d379014f9a63602a0837f47090591a488cb81963aa"
	},
	{
		"id": "10b61da9f4b7",
		"ts": "2026-07-27T19:21:50.670Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 976368.01,
		"hash": "10b61da9f4b7f665046f18e1b7ca474af113f03a127c377555034a9870b25b10"
	},
	{
		"id": "5e452f3aba11",
		"ts": "2026-07-27T19:21:50.878Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26622858.53,
		"hash": "5e452f3aba11eee9e166d3707edcec951297960c69ed0ebcc92308715afb2b65"
	},
	{
		"id": "b0d087c7dfc1",
		"ts": "2026-07-27T19:21:51.080Z",
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
		"liquidityUsd": 3636481.83,
		"hash": "b0d087c7dfc10afd996c05fdcc6201dac682d2d519d14c0191e33d26d9b3758e"
	},
	{
		"id": "076b694dccda",
		"ts": "2026-07-27T19:21:51.288Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 555230.52,
		"hash": "076b694dccda6eff4e45ed0fa2f328d2cde9a9d6d46a799c3d1239890553b781"
	},
	{
		"id": "e40797084751",
		"ts": "2026-07-27T19:21:51.495Z",
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
		"liquidityUsd": 10147004.75,
		"hash": "e407970847514c6c920427b87a09ab604bfd32541cad06f12ee8a035cf0a944d"
	},
	{
		"id": "c1d68df29fc0",
		"ts": "2026-07-27T19:21:51.693Z",
		"symbol": "$MFER",
		"token": "0xE3086852A4B125803C815a158249ae468A3254Ca",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 179017.36,
		"hash": "c1d68df29fc05a11c291702820bddec5d1429960f141b62a26544e66899c289b"
	},
	{
		"id": "ce7d46215913",
		"ts": "2026-07-27T19:21:51.905Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 582186.94,
		"hash": "ce7d46215913f3d5f92aad5a20be895b9903d77a66a1838c88791b20b0320739"
	},
	{
		"id": "416dacc161b8",
		"ts": "2026-07-27T19:21:52.117Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1999291.63,
		"hash": "416dacc161b8503f715be7cd4dad8013e07c6411014da601d9f0c907cc9d9096"
	},
	{
		"id": "06a6d5065ee3",
		"ts": "2026-07-27T19:21:52.313Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 265397.87,
		"hash": "06a6d5065ee3dd7b052c29b6d0cc74dfeaf99b8e1f9fa4db79edc960116755e0"
	},
	{
		"id": "50f875d9ec1f",
		"ts": "2026-07-27T19:21:52.507Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 519024.21,
		"hash": "50f875d9ec1fb7f8fa2e5faca82e1e9a15ef7499d62dc5f90e8b0ca9be6fddee"
	},
	{
		"id": "cfd9dc9a2af4",
		"ts": "2026-07-27T19:21:52.703Z",
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
		"liquidityUsd": 1455226.94,
		"hash": "cfd9dc9a2af4d33d37e74e4daead063a50366a2a2b8b35ca6127314f6aa239d8"
	},
	{
		"id": "158d7f1ee4b9",
		"ts": "2026-07-27T17:39:29.599Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112499153.26,
		"hash": "158d7f1ee4b96f6730313bfefd4e058cbf66be70a74b2573dd6bcee0e17c64ce"
	},
	{
		"id": "23ec3847bc77",
		"ts": "2026-07-27T17:39:30.048Z",
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
		"liquidityUsd": 16671869.87,
		"hash": "23ec3847bc775fb17ef6f5cf7f553035d723b03a3766fb7a3cb32943d774d33a"
	},
	{
		"id": "32f9770f22a0",
		"ts": "2026-07-27T17:39:30.300Z",
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
		"liquidityUsd": 1116502.57,
		"hash": "32f9770f22a004a2872080899cdbc106626d4c6b2adecb3c424a698dba9c1dbf"
	},
	{
		"id": "5cd6efc59740",
		"ts": "2026-07-27T17:39:30.549Z",
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
		"liquidityUsd": 26454433.24,
		"hash": "5cd6efc597404adb04dd0aa8eea61075b0c365a6c23f13519614b2781cec049f"
	},
	{
		"id": "771fafb346d8",
		"ts": "2026-07-27T17:39:30.801Z",
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
		"liquidityUsd": 5118340.77,
		"hash": "771fafb346d8a1f449919af1f1d929853c1a56cb3e8928a44521d960f56e9af2"
	},
	{
		"id": "64eeb8d4aa02",
		"ts": "2026-07-27T17:39:31.047Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 976368.01,
		"hash": "64eeb8d4aa02a5947719431fd285779b1215a18a283a45849509d4e1e686fadd"
	},
	{
		"id": "d5ee1a581d11",
		"ts": "2026-07-27T17:39:31.290Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26454433.24,
		"hash": "d5ee1a581d115285dc1137f15304f795981cf128b16881f47814058cdcaba127"
	},
	{
		"id": "9462b1107b7f",
		"ts": "2026-07-27T17:39:31.542Z",
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
		"liquidityUsd": 3788274.3,
		"hash": "9462b1107b7fdb9f93a5807225ac6fdbe6fac43f128ca62a68d0798d883a1581"
	},
	{
		"id": "c9833de29c8f",
		"ts": "2026-07-27T17:39:31.798Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 558043.51,
		"hash": "c9833de29c8fa8ac8c10ba028bb0d702b7f14c8789374274bbf0de9f0e832b7d"
	},
	{
		"id": "56e7ad4512ab",
		"ts": "2026-07-27T17:39:32.049Z",
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
		"liquidityUsd": 10057652.18,
		"hash": "56e7ad4512ab2664cda303d466a34410ada4aea06142763b91021850d4b048e4"
	},
	{
		"id": "a27555770cb8",
		"ts": "2026-07-27T17:39:32.285Z",
		"symbol": "$MFER",
		"token": "0xE3086852A4B125803C815a158249ae468A3254Ca",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 178124.09,
		"hash": "a27555770cb8e377db6fb0d673cd4901aac72221e219480f7cb342afdb858e98"
	},
	{
		"id": "906d22b1c209",
		"ts": "2026-07-27T17:39:32.577Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2011327.28,
		"hash": "906d22b1c209132a9302cd2a86828ce898d4741d66060019474d8990f2dbc1eb"
	},
	{
		"id": "fa067cc9bf30",
		"ts": "2026-07-27T17:39:32.809Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 271053.43,
		"hash": "fa067cc9bf30e18d6a1cb9b26e04906397e74e655b37f29d34ddbcd525d30a72"
	},
	{
		"id": "20ddc268026f",
		"ts": "2026-07-27T17:39:33.040Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1805040.23,
		"hash": "20ddc268026fe4d9cd34b098c37ab36b1639f9ce27aadf77bdba5db0ed82530e"
	},
	{
		"id": "6a945a8bac1b",
		"ts": "2026-07-27T17:39:33.273Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 584045.22,
		"hash": "6a945a8bac1b32ad4b2bbe0869aeaef45ac9f7badc249905d5a7e54b797bae6b"
	},
	{
		"id": "73fb052e6967",
		"ts": "2026-07-27T17:39:33.506Z",
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
		"liquidityUsd": 1494063.16,
		"hash": "73fb052e69674bd015b5c6fa7cde2a587209f10adbdb1f67bcfc4b10ffbb35ef"
	},
	{
		"id": "86034504d6e2",
		"ts": "2026-07-27T15:39:26.784Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112218462.05,
		"hash": "86034504d6e2ddbd8a3ee8eba75cb60b2629893eaa912d7cf31daf3041f838ec"
	},
	{
		"id": "5be4619e80b7",
		"ts": "2026-07-27T15:39:27.235Z",
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
		"liquidityUsd": 16447472.63,
		"hash": "5be4619e80b7082050b770218cd827738ba4dbe620adaba329b7599eeefbb00f"
	},
	{
		"id": "11dfb4a14c1f",
		"ts": "2026-07-27T15:39:27.452Z",
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
		"liquidityUsd": 1110457.09,
		"hash": "11dfb4a14c1f0a1fe50e68753280ac1ae16c1adf07256821843f42238740cd70"
	},
	{
		"id": "3c4d44e69c60",
		"ts": "2026-07-27T15:39:27.648Z",
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
		"liquidityUsd": 25802979.86,
		"hash": "3c4d44e69c6007929d8e1d17c2db303b6be53d41a6b7de7283e772f7dee55f86"
	},
	{
		"id": "3292f875befc",
		"ts": "2026-07-27T15:39:27.838Z",
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
		"liquidityUsd": 5070728.27,
		"hash": "3292f875befccd21d9c1b650247e5c6fd759aa3e111a8b797a6ca9a06f54e811"
	},
	{
		"id": "3d64f3e6bc17",
		"ts": "2026-07-27T15:39:28.048Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 983206.96,
		"hash": "3d64f3e6bc1775fbf768a30841635ed106414b35274d4e5a69a138cdacd869da"
	},
	{
		"id": "8a898c37f160",
		"ts": "2026-07-27T15:39:28.256Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25802979.86,
		"hash": "8a898c37f16056ed2c8f860c0f2d148f3701e7b1e8b0a4eb8c629641fe88b76e"
	},
	{
		"id": "3baa426081bf",
		"ts": "2026-07-27T15:39:28.474Z",
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
		"liquidityUsd": 3787344.43,
		"hash": "3baa426081bf4b815d7a99ecf510d31d4deb1c3de5726ab8eca19937e7adc15a"
	},
	{
		"id": "6fae44f67771",
		"ts": "2026-07-27T15:39:28.675Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 571522.1,
		"hash": "6fae44f67771d11bca8dd5eebaa312521a868ea356ef96ca3e5b5155f44d9a8b"
	},
	{
		"id": "a1c1fa0a6ccc",
		"ts": "2026-07-27T15:39:28.872Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 275699.44,
		"hash": "a1c1fa0a6ccccfaefea37836d9212882b778b03f188cf45f0dee0750314c8630"
	},
	{
		"id": "2b9faba8945e",
		"ts": "2026-07-27T15:39:29.069Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9929555.25,
		"hash": "2b9faba8945eb1bb192c4c6b9b7dbe2260e85b9d73e1fbba50d556f9e7b16b34"
	},
	{
		"id": "e3792ea62e16",
		"ts": "2026-07-27T15:39:29.271Z",
		"symbol": "$MFER",
		"token": "0xE3086852A4B125803C815a158249ae468A3254Ca",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 174457.16,
		"hash": "e3792ea62e16808e14dd868e918568c285de910850505e459625b5629f675ad7"
	},
	{
		"id": "68beb19e0faa",
		"ts": "2026-07-27T15:39:29.481Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2003597.96,
		"hash": "68beb19e0faae4a674b275b861e0e33dea828f879d1484922d2f439587e4fe06"
	},
	{
		"id": "ab66ccd123b2",
		"ts": "2026-07-27T15:39:29.670Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1795511.29,
		"hash": "ab66ccd123b2d1c416a5727a9da5338bf276ab0ba59fec65a8a6c7dc5aa03852"
	},
	{
		"id": "51ed4bfca7da",
		"ts": "2026-07-27T15:39:29.873Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5876660.85,
		"hash": "51ed4bfca7da20af5d8fef006a29756c4781ddcf20d36f2f722ebe73fea7944a"
	},
	{
		"id": "aa0f406553b2",
		"ts": "2026-07-27T15:39:30.073Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 639945.27,
		"hash": "aa0f406553b2ec9b0428aaf8c1ced0a7402cb48d9f5911ed994051f9f29e63e3"
	},
	{
		"id": "1e43a52c374a",
		"ts": "2026-07-27T12:18:19.154Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112919227.76,
		"hash": "1e43a52c374ad911a000c72de6c2123be1b5b890cc75eb0c27f1f22723b5bcb3"
	},
	{
		"id": "908892299319",
		"ts": "2026-07-27T12:18:19.501Z",
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
		"liquidityUsd": 13381766.66,
		"hash": "908892299319f9dbf6624c7c6c1269f2843e45ac950be3e18b5830e9e1c9d324"
	},
	{
		"id": "d557558781bc",
		"ts": "2026-07-27T12:18:19.720Z",
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
		"liquidityUsd": 1129118,
		"hash": "d557558781bc07214daf508a5735f74e7bbc7025a1322c78e3272269b0ab6a87"
	},
	{
		"id": "3c377256bdcb",
		"ts": "2026-07-27T12:18:19.933Z",
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
		"liquidityUsd": 25808249.83,
		"hash": "3c377256bdcb1180cdf5ddfe6281262c3b38de4ec659d911889ce774636f2e53"
	},
	{
		"id": "0b1808b6876d",
		"ts": "2026-07-27T12:18:20.135Z",
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
		"liquidityUsd": 5198859.36,
		"hash": "0b1808b6876d22a634a6b8d937bac22d661fe611cd91b73d93763ef265bc6cc0"
	},
	{
		"id": "108cd4749ee3",
		"ts": "2026-07-27T12:18:20.359Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 993542.17,
		"hash": "108cd4749ee34b629c5dbe582ac0dcb1253bf28e40d375118cddf32a4b5279f1"
	},
	{
		"id": "ff768df2b605",
		"ts": "2026-07-27T12:18:20.558Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25808249.83,
		"hash": "ff768df2b605ecdaf0280dd4a36710451bb81429d88ae464fe6de57208c8ad95"
	},
	{
		"id": "b6a3834f04c5",
		"ts": "2026-07-27T12:18:20.792Z",
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
		"liquidityUsd": 2503336.1,
		"hash": "b6a3834f04c513b9a72588125d56dd70f5d68c33a5dbf211e87588ef7b0146f8"
	},
	{
		"id": "742ef0ff29dc",
		"ts": "2026-07-27T12:18:20.991Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 625614.17,
		"hash": "742ef0ff29dc8bd0cbd5c96576e03f66f1caeedf41525a6d62343e7878a4ecc7"
	},
	{
		"id": "07f265c5b9e9",
		"ts": "2026-07-27T12:18:21.195Z",
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
		"liquidityUsd": 10431602,
		"hash": "07f265c5b9e9803aa8573641c59158939e276767ce02595a8da101c7c32c10f0"
	},
	{
		"id": "04fc19cb6453",
		"ts": "2026-07-27T12:18:21.388Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 275554.1,
		"hash": "04fc19cb6453bb41c668b01c08913a1c5732bdee294493c9fa2bf58664fe61fb"
	},
	{
		"id": "50ec17982240",
		"ts": "2026-07-27T12:18:21.597Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1825709.32,
		"hash": "50ec17982240b12eac5c7dfb90a95dee94675e6072ce445bc524a89de389139a"
	},
	{
		"id": "bb4202dd1e44",
		"ts": "2026-07-27T12:18:21.802Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2043787.6,
		"hash": "bb4202dd1e4409c316b7aa65679a56b584cd2659104e46f4cfdc9efe6b99e321"
	},
	{
		"id": "1ae23c94b225",
		"ts": "2026-07-27T12:18:22.009Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5961875.63,
		"hash": "1ae23c94b2253174313f4e8de4d76447fbf1a6185b45f9d7e96e84110353697f"
	},
	{
		"id": "4d2a9659883d",
		"ts": "2026-07-27T12:18:22.240Z",
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
		"liquidityUsd": 1349583.39,
		"hash": "4d2a9659883d97f5d4c6ad41910ec4d1aac643920aa961290f9094fd0f223cd8"
	},
	{
		"id": "1bedb23b197a",
		"ts": "2026-07-27T12:18:22.440Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 657616.49,
		"hash": "1bedb23b197a4f120b235ed84a058d53e6fca98f9e3212606436e3631c88b490"
	},
	{
		"id": "0fb1f9f7963f",
		"ts": "2026-07-27T08:27:07.169Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112854549.46,
		"hash": "0fb1f9f7963f19131ee0dc027b82282bc258439356f008101f8e6119df1f8b5f"
	},
	{
		"id": "23aee9a10d7d",
		"ts": "2026-07-27T08:27:07.659Z",
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
		"liquidityUsd": 16032232.65,
		"hash": "23aee9a10d7da94c8ce92526b9096e31d416a8d027ba8be61cb1bc1dc966d37c"
	},
	{
		"id": "c6212fb48ede",
		"ts": "2026-07-27T08:27:07.957Z",
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
		"liquidityUsd": 1133100.55,
		"hash": "c6212fb48ede125c5ba2e996de22a9216a6554851b1e464418d5d1e278ea250b"
	},
	{
		"id": "f58568a4256f",
		"ts": "2026-07-27T08:27:08.231Z",
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
		"liquidityUsd": 25673911.21,
		"hash": "f58568a4256f7f40167d09bbeee716a6f5f4aa7ba083699b9f422344f1198238"
	},
	{
		"id": "40f84e9f4f77",
		"ts": "2026-07-27T08:27:08.481Z",
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
		"liquidityUsd": 5190968.23,
		"hash": "40f84e9f4f779fda5e7742239b17319c9d76b7a444979e914523bdda22e6bb62"
	},
	{
		"id": "e40102512ffa",
		"ts": "2026-07-27T08:27:08.732Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 993683.38,
		"hash": "e40102512ffa6ece8578ad1e97b43f5565b78eb7c164e9ca8f927b862f08039f"
	},
	{
		"id": "5f66ee614ed8",
		"ts": "2026-07-27T08:27:09.226Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25673911.18,
		"hash": "5f66ee614ed8afab6014c858061b3de77e4250ef5049eb205d450ae699409826"
	},
	{
		"id": "c9a637d75d23",
		"ts": "2026-07-27T08:27:09.456Z",
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
		"liquidityUsd": 2510794.66,
		"hash": "c9a637d75d231d18b12b0ac6e003e6ab039b44c9ef7447d506020845840ae8c3"
	},
	{
		"id": "605cb71e80d8",
		"ts": "2026-07-27T08:27:09.726Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 594347.99,
		"hash": "605cb71e80d84b0793f130ecf1c868e6bc3c9151d01a54b03df83cd9a32f1a9d"
	},
	{
		"id": "edd53f4a20bd",
		"ts": "2026-07-27T08:27:09.989Z",
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
		"liquidityUsd": 10557045.11,
		"hash": "edd53f4a20bddf56a265f348ea8c86c2d1240c6a5bd3fd9e5a5c7e6686785462"
	},
	{
		"id": "e3d15ab35f2f",
		"ts": "2026-07-27T08:27:10.204Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 275949.58,
		"hash": "e3d15ab35f2fb10b68b45fab68e5f79eb907df8cf4f95c96f3961eed1b0bd261"
	},
	{
		"id": "db53d962116a",
		"ts": "2026-07-27T08:27:10.425Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1817859.39,
		"hash": "db53d962116aa4209b22f41e321a0fa5bbb3c2d505c45fe91a7557dfdd2aed75"
	},
	{
		"id": "aa07d15d8299",
		"ts": "2026-07-27T08:27:10.641Z",
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
		"liquidityUsd": 2042784.74,
		"hash": "aa07d15d829985986de1d2f0eed22094ed092c22114f2efb6e42f226b07842b8"
	},
	{
		"id": "9c8edac55745",
		"ts": "2026-07-27T08:27:10.861Z",
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
		"liquidityUsd": 1414913.68,
		"hash": "9c8edac557459a1390e56591de000732882db6534d6651394786053e97a9940a"
	},
	{
		"id": "441f4817ffd2",
		"ts": "2026-07-27T08:27:11.077Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4784356.56,
		"hash": "441f4817ffd20a967a49eadbb6bcaebfc266303e78616d0968bb3fbe5c8f73c4"
	},
	{
		"id": "74038a64387a",
		"ts": "2026-07-27T08:27:11.299Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5966973.54,
		"hash": "74038a64387aee5fd41681c621f0e6e0ad074e366b7248e8043e56884f98953f"
	},
	{
		"id": "9e1dd68c8bbb",
		"ts": "2026-07-27T08:27:11.519Z",
		"symbol": "BEAN",
		"token": "0x5c72992b83E74c4D5200A8E8920fB946214a5A5D",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 259901.54,
		"hash": "9e1dd68c8bbb29bcfb5eb30861a832bf2c19a79a83af45da84219b4f7e3cf7e5"
	},
	{
		"id": "5636e2e12bcc",
		"ts": "2026-07-27T04:33:45.877Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112499072.78,
		"hash": "5636e2e12bcc9a009a8ffc45115d8b542c0092e57297425c07014c357ce911a0"
	},
	{
		"id": "0aae382acb6b",
		"ts": "2026-07-27T04:33:46.363Z",
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
		"liquidityUsd": 18120885.16,
		"hash": "0aae382acb6b0846b57aaf3f2ca31ca7d23011003493952d6f97049add05273e"
	},
	{
		"id": "62dd9645246c",
		"ts": "2026-07-27T04:33:46.615Z",
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
		"liquidityUsd": 1126232.53,
		"hash": "62dd9645246ce31c25dfc2f9c54e6cfee2cf3c679ad6938bc1d35060b09dd281"
	},
	{
		"id": "72ce887edcac",
		"ts": "2026-07-27T04:33:46.877Z",
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
		"liquidityUsd": 25623014.07,
		"hash": "72ce887edcacd0ce8da5aff710b442e1603fc3583b802f45eaedd969b87d8eb6"
	},
	{
		"id": "ee9907ce8d9b",
		"ts": "2026-07-27T04:33:47.137Z",
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
		"liquidityUsd": 5196921.77,
		"hash": "ee9907ce8d9b1ce7f7f4142a93b20f758c852cf874bc2fe0a9c77dc5e2f9d15a"
	},
	{
		"id": "d86f7a279d38",
		"ts": "2026-07-27T04:33:47.390Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 990931.06,
		"hash": "d86f7a279d38fe36ff6588121cbfc1c04cd1b12f8c08e964bea1037248bc4893"
	},
	{
		"id": "624654c7da63",
		"ts": "2026-07-27T04:33:47.637Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25623014.07,
		"hash": "624654c7da6379764a3050120d0939c5402a50ca01fba48587eca72e849a4165"
	},
	{
		"id": "f8db9d8e1a09",
		"ts": "2026-07-27T04:33:47.907Z",
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
		"liquidityUsd": 2495611.98,
		"hash": "f8db9d8e1a09b0e4421c61bce4b14a6bea5efab84bf5a1100ffce36ffcfda260"
	},
	{
		"id": "31a7fdccc239",
		"ts": "2026-07-27T04:33:48.170Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 533703.06,
		"hash": "31a7fdccc2390736485ddce1d0b5c9cb53af26f4cdcc97777787979ea1e18da0"
	},
	{
		"id": "46e6c653c9ab",
		"ts": "2026-07-27T04:33:48.517Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1818301.59,
		"hash": "46e6c653c9ab6d51407d2846a04f176120d1f682cc1f38cde24176975d79e25f"
	},
	{
		"id": "5f735f360bf1",
		"ts": "2026-07-27T04:33:48.751Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 272690.96,
		"hash": "5f735f360bf14b133fb1e70ec422a239ab0d19d216ca64869698d89ebab081a7"
	},
	{
		"id": "a443c62e9eae",
		"ts": "2026-07-27T04:33:48.984Z",
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
		"liquidityUsd": 1428534.52,
		"hash": "a443c62e9eae1ca350c5840b33baab82495a3e4b47b04a8c02746f7fcd12330a"
	},
	{
		"id": "ea6f32dbf280",
		"ts": "2026-07-27T04:33:49.215Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10513596.55,
		"hash": "ea6f32dbf280890f71e598449a10373b072f66c7fb302dba301fb8dde05c8c90"
	},
	{
		"id": "5370ae652715",
		"ts": "2026-07-27T04:33:49.448Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5924984.24,
		"hash": "5370ae652715075d3aa4f1dc764cadf74c325465652e60214a0297234ac50dc4"
	},
	{
		"id": "d7ba886aaba6",
		"ts": "2026-07-27T04:33:49.680Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4779246.52,
		"hash": "d7ba886aaba6911fde264c372a54aac7615b2afb859e51eead624787cffb82b7"
	},
	{
		"id": "959c8a8a81e5",
		"ts": "2026-07-27T04:33:49.918Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 368463.94,
		"hash": "959c8a8a81e5d60c4660fa97aac7009c10105935d97a30d68c14e960f66bf43d"
	},
	{
		"id": "9eb404fc7472",
		"ts": "2026-07-27T04:33:50.158Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2071475.86,
		"hash": "9eb404fc7472bdf63b0da8d157243ac30084286b5ec56fb96f8480c1df720e98"
	},
	{
		"id": "792899327972",
		"ts": "2026-07-27T00:02:09.914Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112439088.62,
		"hash": "792899327972e65df256a5456dab766b904f911f248a17f39edb7ec3e6e3ff72"
	},
	{
		"id": "95b293d8a70b",
		"ts": "2026-07-27T00:02:10.255Z",
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
		"liquidityUsd": 17752320.58,
		"hash": "95b293d8a70b7f635269450598a7dae2eb1449a251bddd6a02822c7899de7715"
	},
	{
		"id": "ed27adacd637",
		"ts": "2026-07-27T00:02:10.451Z",
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
		"liquidityUsd": 1119498.5,
		"hash": "ed27adacd6374242c0371f72fd4d195be181ff8ea287e7ea613812d65d555e18"
	},
	{
		"id": "3ada7c85ddf2",
		"ts": "2026-07-27T00:02:10.646Z",
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
		"liquidityUsd": 25409395.56,
		"hash": "3ada7c85ddf2ddbf01fd12fbe4f4ada4d34831b4ac916a3e9a67e93cb4f4829e"
	},
	{
		"id": "6a34c4a4ad80",
		"ts": "2026-07-27T00:02:10.837Z",
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
		"liquidityUsd": 5184590.32,
		"hash": "6a34c4a4ad80428a45bd2f61db0fc3a22704d51f0b17e3de1ccf01563b5e7129"
	},
	{
		"id": "aa683f5b7e93",
		"ts": "2026-07-27T00:02:11.038Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 994223.32,
		"hash": "aa683f5b7e9340e43961e8888b5005879543a42caa9c32d1a13a160bed73bf5f"
	}
]
