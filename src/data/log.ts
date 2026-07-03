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
	"updatedAt": "2026-07-03T19:14:56.084Z",
	"tokensScored": 1217,
	"verdictsIssued": 1217,
	"safe": 1068,
	"risky": 118,
	"likelyRug": 31,
	"ticks": 86
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "1ab1b0f4ff23",
		"ts": "2026-07-03T19:14:52.710Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 99153866.11,
		"hash": "1ab1b0f4ff23646b6fff333988a5bae9ac18e989b493e0d7370a2339711aaba3"
	},
	{
		"id": "2086c5d6ccbe",
		"ts": "2026-07-03T19:14:53.066Z",
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
		"liquidityUsd": 16112220.18,
		"hash": "2086c5d6ccbe2c4f241ccf9cea58cb81302871ce4ba96a5ff904a64e29d8412f"
	},
	{
		"id": "d0b72c907a76",
		"ts": "2026-07-03T19:14:53.263Z",
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
		"liquidityUsd": 1402450.82,
		"hash": "d0b72c907a76676767bdc8d0a30f68f906b1d42d3deddd4f92f854792c14c036"
	},
	{
		"id": "2ec641dc603a",
		"ts": "2026-07-03T19:14:53.462Z",
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
		"liquidityUsd": 30505630.19,
		"hash": "2ec641dc603a8fe163a0900d0c6eb9d6b4e50fd7030adf52b7a8d750b739f4d7"
	},
	{
		"id": "4971c0cff27b",
		"ts": "2026-07-03T19:14:53.656Z",
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
		"liquidityUsd": 4121710.11,
		"hash": "4971c0cff27b8dde7db2a6009f6325ec8584bb338104a1dafc2fb6da2acb9e4d"
	},
	{
		"id": "465256b4bcdf",
		"ts": "2026-07-03T19:14:53.865Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 986724.13,
		"hash": "465256b4bcdf98fd9b6e47af47a6ee9a1c66b36af1a93ba83dba360337c1e938"
	},
	{
		"id": "ada323affdc8",
		"ts": "2026-07-03T19:14:54.059Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30505630.19,
		"hash": "ada323affdc8400e6564b917e4cc90463dfb92a041387ce41c6cfee044b5e6c9"
	},
	{
		"id": "d1ab7b28fe65",
		"ts": "2026-07-03T19:14:54.247Z",
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
		"liquidityUsd": 2333825.72,
		"hash": "d1ab7b28fe65dd792a3414cf192c32773902d30ca99af26fe5aaf2bc9c9887c3"
	},
	{
		"id": "a80238351ccd",
		"ts": "2026-07-03T19:14:54.437Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3240335.58,
		"hash": "a80238351ccdce49a4ed45c942fd1b25450b50c99493a8e8f77258217ef270ba"
	},
	{
		"id": "8631619e8282",
		"ts": "2026-07-03T19:14:54.627Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 382937,
		"hash": "8631619e82825941cb59c76d35492967c3241013045d537bfe9f0cedb9b17e43"
	},
	{
		"id": "e6e3d4f2e7ca",
		"ts": "2026-07-03T19:14:54.811Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5042848.1,
		"hash": "e6e3d4f2e7ca567e3c49da28de89e09cb4463dfc65e763d66bb255e1062969e4"
	},
	{
		"id": "feb93a05abd7",
		"ts": "2026-07-03T19:14:54.992Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 967840.74,
		"hash": "feb93a05abd73e078b10b91e58f9264622c2d521510020a30d973941735b44cd"
	},
	{
		"id": "36d0494c5838",
		"ts": "2026-07-03T19:14:55.171Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2169397.18,
		"hash": "36d0494c5838b0bbdab73d2b615c6eef8844277bb04823025f88ba91941e69f9"
	},
	{
		"id": "b588d0686cb8",
		"ts": "2026-07-03T19:14:55.353Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 282008.35,
		"hash": "b588d0686cb81c0f802b4ab985b64baeb931ff51f24737f5f9127b8ccf8c4df3"
	},
	{
		"id": "2ad560390771",
		"ts": "2026-07-03T19:14:55.534Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8240741.55,
		"hash": "2ad5603907712a93f14adc85b1ad4adefeaf7efafe82cbdd3623c241f26194e9"
	},
	{
		"id": "c148508f8eec",
		"ts": "2026-07-03T19:14:55.715Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 440165.65,
		"hash": "c148508f8eec5bbe905ced460830737822f21c2c58a562cd83b2fab5653615b8"
	},
	{
		"id": "8ad4ec3135aa",
		"ts": "2026-07-03T19:14:55.890Z",
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
		"liquidityUsd": 1425379.66,
		"hash": "8ad4ec3135aa3118ae2051d18a2121d47bd6607c8ad19bc73ced861ed1989be5"
	},
	{
		"id": "6517672c82d0",
		"ts": "2026-07-03T19:14:56.083Z",
		"symbol": "RIZE",
		"token": "0x9818B6c09f5ECc843060927E8587c427C7C93583",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 56041.32,
		"hash": "6517672c82d0e4e44ce9d134da9d5a592fe2ea363525a85fc58716affc417030"
	},
	{
		"id": "13229e3d6246",
		"ts": "2026-07-03T17:21:40.272Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 99037438.71,
		"hash": "13229e3d6246d182f6f7f52c3efa8abcf2fb54bce5c25e69eeafddd204e82c25"
	},
	{
		"id": "516434aee401",
		"ts": "2026-07-03T17:21:41.264Z",
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
		"liquidityUsd": 15186255.84,
		"hash": "516434aee401da0849cc035fabcd539d2aa375dfd311257abd54f0348d5fc0cc"
	},
	{
		"id": "24c6b1d2f76c",
		"ts": "2026-07-03T17:21:41.758Z",
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
		"liquidityUsd": 1405597.22,
		"hash": "24c6b1d2f76cdf0191aa1cabf8b51e676c16f11f0294c0abc4237b53f600b849"
	},
	{
		"id": "82c26e116b9e",
		"ts": "2026-07-03T17:21:42.256Z",
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
		"liquidityUsd": 30247432.89,
		"hash": "82c26e116b9ecbcc87286cbd540b2c6fed410b43e2a113fc8b531ed0a56e78a3"
	},
	{
		"id": "68121b9f9bac",
		"ts": "2026-07-03T17:21:42.742Z",
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
		"liquidityUsd": 4103912.18,
		"hash": "68121b9f9bace7d2f301346f84505385ee8e2969798df9324dc968cc1e524124"
	},
	{
		"id": "e6619a55ab90",
		"ts": "2026-07-03T17:21:43.468Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 994250.87,
		"hash": "e6619a55ab90b78db5e715426272065fc852312198ee197108e0d2dd9f4b500e"
	},
	{
		"id": "8c9e30ec2c0e",
		"ts": "2026-07-03T17:21:43.726Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30252840.1,
		"hash": "8c9e30ec2c0ea5e619fcc83112f6e7b6bc1e6a41b1ec57e172dce66b35e5d2e1"
	},
	{
		"id": "b8a3e09d2309",
		"ts": "2026-07-03T17:21:43.994Z",
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
		"liquidityUsd": 2333058.85,
		"hash": "b8a3e09d230983d6154dcf30334b89be316b7f2c7724f74d954ecce7a85cfce6"
	},
	{
		"id": "7242e34bb147",
		"ts": "2026-07-03T17:21:45.047Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 3142591.63,
		"hash": "7242e34bb147b759b5777d26a2b46b5771816c198fc1cf2956fbcacc1cf0b682"
	},
	{
		"id": "8376d692733a",
		"ts": "2026-07-03T17:21:45.313Z",
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
		"liquidityUsd": 5316710.38,
		"hash": "8376d692733a1f92b9c44531d7ced8c93a4a9c3403e0f21517905c94f6ea8ed9"
	},
	{
		"id": "9e141c270c3e",
		"ts": "2026-07-03T17:21:45.565Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 379842.09,
		"hash": "9e141c270c3e7208cbfdc95d48defd047da4c1a3803074265d06cefa7f02ac7c"
	},
	{
		"id": "0d1f02d04e15",
		"ts": "2026-07-03T17:21:45.910Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 976348.68,
		"hash": "0d1f02d04e157e801ad249ad13d8f32dd1d47092a3ffcb9b0360ad6cb94e0ff9"
	},
	{
		"id": "ed57480b74e2",
		"ts": "2026-07-03T17:21:46.153Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 241945.53,
		"hash": "ed57480b74e2d9d2014ac763765c3ea31850724446f9b8628296675002d9e39e"
	},
	{
		"id": "80de4c674fe8",
		"ts": "2026-07-03T17:21:46.391Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2175974.9,
		"hash": "80de4c674fe88039f6a933679ea7c60cad86815abd97024e3a10ea6106366f1a"
	},
	{
		"id": "f50a743598cd",
		"ts": "2026-07-03T17:21:46.644Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8328031.61,
		"hash": "f50a743598cd9d60feb1dc4f362a095f10cf2170081fe8524f53a7056f527eb0"
	},
	{
		"id": "5be1f2dfd5d2",
		"ts": "2026-07-03T17:21:46.889Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 439344.51,
		"hash": "5be1f2dfd5d2b5e965e4e7644033426b61e1f79a7767703279e309f7f1d5a97b"
	},
	{
		"id": "c1e9006c78a1",
		"ts": "2026-07-03T17:21:47.350Z",
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
		"liquidityUsd": 1519263.31,
		"hash": "c1e9006c78a188d9ee41cc03bbb325ed3b9e74884581825015841ff7766c2db7"
	},
	{
		"id": "9431e3b9299f",
		"ts": "2026-07-03T17:21:47.595Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1958882.12,
		"hash": "9431e3b9299f063822981fcd4c0f81347bdce14bdcfe62a46c636d03945c0413"
	},
	{
		"id": "76d69b59b636",
		"ts": "2026-07-03T15:08:04.679Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 99081947.78,
		"hash": "76d69b59b6368cf6e0224b24f6211e2cfc350f26094947fa793b409e2267e998"
	},
	{
		"id": "908e654003cc",
		"ts": "2026-07-03T15:08:04.941Z",
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
		"liquidityUsd": 15545096.99,
		"hash": "908e654003cc5e18261f2574c795d500afecd7d8f8ff880a61dc7da5c7d810cc"
	},
	{
		"id": "97354c9cc30a",
		"ts": "2026-07-03T15:08:05.161Z",
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
		"liquidityUsd": 1415769.08,
		"hash": "97354c9cc30a7ec7db6dd149953746d5f59486d50760754c156d44e71dc97764"
	},
	{
		"id": "92b981790daa",
		"ts": "2026-07-03T15:08:05.350Z",
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
		"liquidityUsd": 30550359.28,
		"hash": "92b981790daa99c4e6bec4fe3171b1ad83216de04f18d63abb2b22a41960b877"
	},
	{
		"id": "bbd1a1daa4bf",
		"ts": "2026-07-03T15:08:05.540Z",
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
		"liquidityUsd": 4125907.59,
		"hash": "bbd1a1daa4bfc3b9d2368089dcc7a4b19d13d1415fec8ea5ab2bc0ade741421d"
	},
	{
		"id": "fa89905d53d9",
		"ts": "2026-07-03T15:08:05.729Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 988888.65,
		"hash": "fa89905d53d90be46ed2be0f766629e9fb7ae96312283f0b7b0f77e9e4656ded"
	},
	{
		"id": "aba6fe32ad71",
		"ts": "2026-07-03T15:08:05.917Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30550359.28,
		"hash": "aba6fe32ad7122099931acd8f31781608a31ae650ac64b2512caa9ee7c3e8c88"
	},
	{
		"id": "940ad30e83e3",
		"ts": "2026-07-03T15:08:06.142Z",
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
		"liquidityUsd": 2339528.62,
		"hash": "940ad30e83e30b32760d6824aa818da167df6ad53ef82f4a65258f1b4515ad36"
	},
	{
		"id": "65f5fb35a8dd",
		"ts": "2026-07-03T15:08:07.912Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 3015340.39,
		"hash": "65f5fb35a8dda732afb7e0b5baef20627da5370455c728f00eda9f70a555d7d7"
	},
	{
		"id": "f3174658320e",
		"ts": "2026-07-03T15:08:08.103Z",
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
		"liquidityUsd": 5368781.03,
		"hash": "f3174658320ed9696dd44c9f45744b7744afb87710ffe08a7ccd401603f1d263"
	},
	{
		"id": "28b46b38cd77",
		"ts": "2026-07-03T15:08:08.288Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 240574.86,
		"hash": "28b46b38cd7713d7dcdc23570aa6f27954ddfa0b263db6250eda1bcfcfd67228"
	},
	{
		"id": "246655590f40",
		"ts": "2026-07-03T15:08:09.269Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 984294.67,
		"hash": "246655590f4078df25e7ad74d1412991e1d8cab33289650757aed482d661b59a"
	},
	{
		"id": "996ae56e8e51",
		"ts": "2026-07-03T15:08:09.449Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1960038.03,
		"hash": "996ae56e8e51a8f0b4a7193c7f6ab347f8d940033f71c8886350dbd393d33b24"
	},
	{
		"id": "b6a417efc256",
		"ts": "2026-07-03T15:08:12.208Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 386809.54,
		"hash": "b6a417efc256a54c204124652560e38580d5fc8821dec67d8d1244353b1b401f"
	},
	{
		"id": "889cd9fcd3cd",
		"ts": "2026-07-03T15:08:12.484Z",
		"symbol": "BLOCKTRONICS",
		"token": "0x7afE438411ee3959C7De6f7fB76bf9C769320bA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 185122.64,
		"hash": "889cd9fcd3cd933a4ad3d10d124c54cafa65bde878c8a5fb31d6064b381c7e8a"
	},
	{
		"id": "f030fa6f8ee5",
		"ts": "2026-07-03T15:08:12.662Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 2020389.79,
		"hash": "f030fa6f8ee542916e8e26904a2226f564c3d20859a0799c90213010104cba6a"
	},
	{
		"id": "0b8904aa8139",
		"ts": "2026-07-03T15:08:12.849Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8355788.9,
		"hash": "0b8904aa813967186159896abc74dc1535d6a941a5474fb417801cc62c3a80a3"
	},
	{
		"id": "69ffc6c38896",
		"ts": "2026-07-03T12:06:43.884Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 99304789.43,
		"hash": "69ffc6c388961ec1a4ea53b7c5be1e3f2479dd55b03637c0936073c38d3c6d6a"
	},
	{
		"id": "c84a34bc4423",
		"ts": "2026-07-03T12:06:44.368Z",
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
		"liquidityUsd": 14415860.04,
		"hash": "c84a34bc4423437464f11c7b0d264744558d958c7099c54483acf25be02d1836"
	},
	{
		"id": "70c8fcc40cd3",
		"ts": "2026-07-03T12:06:44.624Z",
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
		"liquidityUsd": 1414273.03,
		"hash": "70c8fcc40cd38d46e70a7f9a9f0a3a15bc7210974d464018f3827febf9d0926c"
	},
	{
		"id": "6d826b852dbb",
		"ts": "2026-07-03T12:06:44.885Z",
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
		"liquidityUsd": 30369430.81,
		"hash": "6d826b852dbb327446e3cca43e0c4b90ae7a7510bb4746af62ce1f1726793f12"
	},
	{
		"id": "0df1ad8d6c70",
		"ts": "2026-07-03T12:06:45.360Z",
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
		"liquidityUsd": 4125353.81,
		"hash": "0df1ad8d6c708bc16fbebf741074fd63b5c9adcde082eb5cdbee88106d4aab48"
	},
	{
		"id": "654080ecf73a",
		"ts": "2026-07-03T12:06:45.614Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 990506,
		"hash": "654080ecf73aa55806d2268a7d64ed28c850d89f9019554d10b3b145314631c2"
	},
	{
		"id": "6b753c946c01",
		"ts": "2026-07-03T12:06:45.888Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30369430.81,
		"hash": "6b753c946c01ff47ac6a93b2fc595368581ea0757469dcfdceee821e803402e1"
	},
	{
		"id": "6fd2a8a7d76e",
		"ts": "2026-07-03T12:06:46.176Z",
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
		"liquidityUsd": 2305993.38,
		"hash": "6fd2a8a7d76ef1a665f970eff48f4bfff80ddbc2a2728e15f23de025453ee4f2"
	},
	{
		"id": "0288d324f8a3",
		"ts": "2026-07-03T12:06:46.437Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3077882.99,
		"hash": "0288d324f8a3df2f7f2bb28e2faa2ba961b37c1196d820f26aa5f63fdb58510c"
	},
	{
		"id": "ad9c20fed62d",
		"ts": "2026-07-03T12:06:46.691Z",
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
		"liquidityUsd": 5379272.52,
		"hash": "ad9c20fed62dfae23db31b93277917f91f0ad460a6830d4aff1fe742bd6060ed"
	},
	{
		"id": "654737e4b8df",
		"ts": "2026-07-03T12:06:46.939Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 239679.96,
		"hash": "654737e4b8df3cc39ad74252181f300c02473364b2dac3586d48ae4b86358ef2"
	},
	{
		"id": "cd4ad91e56e6",
		"ts": "2026-07-03T12:06:47.178Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1954983.26,
		"hash": "cd4ad91e56e65bb8e86bf89df86bc07a6ddac3b48393e3632ab6f61513fe1297"
	},
	{
		"id": "8f2a50a5e457",
		"ts": "2026-07-03T12:06:47.420Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 990263.31,
		"hash": "8f2a50a5e457ec6bf2e09b44f546ba658364bfbadb2ee726ff4e3fe39b48f0e2"
	},
	{
		"id": "221a6bb79761",
		"ts": "2026-07-03T12:06:47.663Z",
		"symbol": "BLOCKTRONICS",
		"token": "0x7afE438411ee3959C7De6f7fB76bf9C769320bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 186923.96,
		"hash": "221a6bb797617873d73e41d9272c8f19e7541a2223aae08ae7b9ecade6d84b41"
	},
	{
		"id": "0308abcd495a",
		"ts": "2026-07-03T12:06:47.902Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2001411.75,
		"hash": "0308abcd495aeb076ce57880a2d3baa2bc46202e7900422078a501b407bcd911"
	},
	{
		"id": "14c5844a6d60",
		"ts": "2026-07-03T12:06:48.144Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8372123.69,
		"hash": "14c5844a6d60de75d2d634c62af08bcdf0d147e7fc557cef1b29c5d4040872ed"
	},
	{
		"id": "8de12eacbac8",
		"ts": "2026-07-03T12:06:48.383Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2100631.46,
		"hash": "8de12eacbac83fc147bc6f9961eff62dceb2ada988e4d69a361439e390698332"
	},
	{
		"id": "9107b3197246",
		"ts": "2026-07-03T09:54:27.874Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 99027750.57,
		"hash": "9107b3197246dd6a07af0202806d1c7c086191ab7a654375b642270396a7e0d9"
	},
	{
		"id": "55fb4b879b29",
		"ts": "2026-07-03T09:54:28.141Z",
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
		"liquidityUsd": 14787026.05,
		"hash": "55fb4b879b29012a551ce70b393db0a1a613ac00d0d6c6add331084d2f2eecf3"
	},
	{
		"id": "6acf00d670db",
		"ts": "2026-07-03T09:54:28.491Z",
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
		"liquidityUsd": 1403336.54,
		"hash": "6acf00d670db3d0309e3901b4610d4060aaa875cfac53e37591eda23b8adb0c5"
	},
	{
		"id": "1bffbacf1892",
		"ts": "2026-07-03T09:54:28.765Z",
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
		"liquidityUsd": 29531864.55,
		"hash": "1bffbacf18921d8d2a6ff3a75890e39d47e1853495e76bc7e4dbfea200c2c368"
	},
	{
		"id": "5ab8479a4a1f",
		"ts": "2026-07-03T09:54:29.024Z",
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
		"liquidityUsd": 4083468.72,
		"hash": "5ab8479a4a1f9f7457cf369b301230de70e629f788f69ac767ec608d90361b3c"
	},
	{
		"id": "5f9175d77d35",
		"ts": "2026-07-03T09:54:29.283Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 977718.9,
		"hash": "5f9175d77d3541318b64d52cb5f9ec25ffe51f05777a2db4f91555d3f726d430"
	},
	{
		"id": "5ee9f7917b6d",
		"ts": "2026-07-03T09:54:29.541Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29531864.55,
		"hash": "5ee9f7917b6de8ba0373943f8ebda9839ac231eeaeab80aad77941567fcc1a20"
	},
	{
		"id": "fa0b28126018",
		"ts": "2026-07-03T09:54:29.796Z",
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
		"liquidityUsd": 2322633.33,
		"hash": "fa0b2812601841f0795b49c5ae8222b329778848798fb6a19e5b5ce8a030495c"
	},
	{
		"id": "875a50fd1117",
		"ts": "2026-07-03T09:54:30.056Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3109262.27,
		"hash": "875a50fd11171eb69f7fc2645d9e319196d7e52b89adfd029601a3486d22b395"
	},
	{
		"id": "1369f0e143a9",
		"ts": "2026-07-03T09:54:30.315Z",
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
		"liquidityUsd": 5308179.67,
		"hash": "1369f0e143a978d3ab03433fbacf3ff44d79e4df6048efb5122d8a7575c11071"
	},
	{
		"id": "63cdd27b6a83",
		"ts": "2026-07-03T09:54:31.108Z",
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
		"liquidityUsd": 296210.55,
		"hash": "63cdd27b6a83dd85e1ab0f18dee811e28aaa3f3272137d76b062cae6ed553a3f"
	},
	{
		"id": "e07c57ce671e",
		"ts": "2026-07-03T09:54:31.347Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1941477.13,
		"hash": "e07c57ce671ef53f7e2da09d18a77d9eefb7f4dc0be1cc1729f021ac87f48224"
	},
	{
		"id": "ab65a182dc36",
		"ts": "2026-07-03T09:54:31.586Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 988948.78,
		"hash": "ab65a182dc36b5ac3087b401d1a5423798a28be35812b6c711b351977698dd96"
	},
	{
		"id": "cef82f32ec76",
		"ts": "2026-07-03T09:54:31.830Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2082342.86,
		"hash": "cef82f32ec7646bd37568dd5571d0a4608f0308bf8a6d6bd1c938183dda494ed"
	},
	{
		"id": "22f26e8c0ffe",
		"ts": "2026-07-03T09:54:32.074Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 197897.4,
		"hash": "22f26e8c0ffeefa8327f152c5166d2a57491e7e85801d34a3a63a86e692c6e16"
	},
	{
		"id": "455a381c34f2",
		"ts": "2026-07-03T09:54:32.311Z",
		"symbol": "BLOCKTRONICS",
		"token": "0x7afE438411ee3959C7De6f7fB76bf9C769320bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 184811.1,
		"hash": "455a381c34f28a7b350471308d6ae9ee97c7d96e8be58721231bb9664cd14216"
	},
	{
		"id": "e034ca032106",
		"ts": "2026-07-03T06:28:28.273Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 98727152.47,
		"hash": "e034ca032106f0c55a65b12dd599866d0fc702093ff2e979f638f3cdd25085fc"
	},
	{
		"id": "b31700588406",
		"ts": "2026-07-03T06:28:28.470Z",
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
		"liquidityUsd": 14608613.29,
		"hash": "b31700588406366c349b4f686fcb23fc895c019555b2e1a6da480eef0f9705b1"
	},
	{
		"id": "aee084bc331a",
		"ts": "2026-07-03T06:28:28.680Z",
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
		"liquidityUsd": 1394912.28,
		"hash": "aee084bc331af08998edcf11ae4480b26b70a9e992359488bbd16e78bde8f894"
	},
	{
		"id": "573c2f81dcca",
		"ts": "2026-07-03T06:28:28.868Z",
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
		"liquidityUsd": 29428823.2,
		"hash": "573c2f81dcca7fd73903b8ec10355a472a68f22f7a15503e1c241ee098834541"
	},
	{
		"id": "b6533ad67a5d",
		"ts": "2026-07-03T06:28:29.076Z",
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
		"liquidityUsd": 4063752.81,
		"hash": "b6533ad67a5dbae637fc26417d7f9c4f6ff4b3dde7d16c02d6208dfb76fee492"
	},
	{
		"id": "f17b44f33a82",
		"ts": "2026-07-03T06:28:29.272Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 971053.68,
		"hash": "f17b44f33a82f1104e8bb3125083a0a568af35a9b2c8da170c6aba1176c7c641"
	},
	{
		"id": "b847305c116f",
		"ts": "2026-07-03T06:28:29.474Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29428823.2,
		"hash": "b847305c116ff5f1b3c8601008f5af34a928e2bf0f3ec3af0a156c7b9405abb1"
	},
	{
		"id": "033b68c9f91e",
		"ts": "2026-07-03T06:28:29.677Z",
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
		"liquidityUsd": 2478343.19,
		"hash": "033b68c9f91e3b401ba9f791be88b2f218371afcb005b3cfaf84dfeefd97ae59"
	},
	{
		"id": "f9c88ec38a83",
		"ts": "2026-07-03T06:28:29.881Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3312776.29,
		"hash": "f9c88ec38a838bc98e0bdb6b4b5dabb47b464e53d6582a3a208d5baf76e17422"
	},
	{
		"id": "2463e3054308",
		"ts": "2026-07-03T06:28:30.069Z",
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
		"liquidityUsd": 5026752.58,
		"hash": "2463e3054308688f76eb2983013187520829dc605cea70b0bf094431063de02a"
	},
	{
		"id": "93b6e23613b5",
		"ts": "2026-07-03T06:28:30.278Z",
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
		"liquidityUsd": 360229.75,
		"hash": "93b6e23613b57ee814f8ca61ff5c084c0fed98dad27abf7f0d3211e52a1fe3ce"
	},
	{
		"id": "f71ed82f4381",
		"ts": "2026-07-03T06:28:30.475Z",
		"symbol": "BLOCKTRONICS",
		"token": "0x7afE438411ee3959C7De6f7fB76bf9C769320bA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 183942.26,
		"hash": "f71ed82f43813cdc862c8d26b96c1375fd64aee148223a6695c6ebff20b5a4e6"
	},
	{
		"id": "3dfbe59137ff",
		"ts": "2026-07-03T06:28:30.685Z",
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
		"liquidityUsd": 1463608.39,
		"hash": "3dfbe59137ff6a6e502a67d8d769847b70f69a5068498de89ed7112d28089f3f"
	},
	{
		"id": "624f972e11fb",
		"ts": "2026-07-03T06:28:30.862Z",
		"symbol": "OpenAI",
		"token": "0x43D6e8F4e413028365E9cf83D1e6c2181e8e3b07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 306572.65,
		"hash": "624f972e11fb1e7fe7ed63498f2f7f9f13f3788148de4e2b9966f6d81fa7d73b"
	},
	{
		"id": "eb5ab8ad6e26",
		"ts": "2026-07-03T06:28:31.073Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1944937.93,
		"hash": "eb5ab8ad6e26f41da15707d5ed1bc5a42787e8b8b570226cfa0d9746895d72ec"
	},
	{
		"id": "895e265eecd4",
		"ts": "2026-07-03T06:28:31.254Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8315715.25,
		"hash": "895e265eecd4b8ace2d462f00247a8cc08f0a7d91dd968991708464b27e3eee4"
	},
	{
		"id": "2bb16f5f5ad9",
		"ts": "2026-07-03T02:37:02.448Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 97931521.57,
		"hash": "2bb16f5f5ad92807cc28b9caac8d57463f27498d46cd49f8ae319773088bf9ac"
	},
	{
		"id": "f05d10611e24",
		"ts": "2026-07-03T02:37:02.978Z",
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
		"liquidityUsd": 13638102.08,
		"hash": "f05d10611e24cb4004cc489c8c75ce82b124b656e9a3b5ecbf2c2edc08f7812d"
	},
	{
		"id": "ab73e1129a1e",
		"ts": "2026-07-03T02:37:03.261Z",
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
		"liquidityUsd": 1390245.38,
		"hash": "ab73e1129a1e713309cd5417478b3f64e8b1dc40a267931e579aa344049ed0fc"
	},
	{
		"id": "9781789fb555",
		"ts": "2026-07-03T02:37:03.537Z",
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
		"liquidityUsd": 29328377.98,
		"hash": "9781789fb5556981b3b747c0e4760d17bd8e3b154e89441bbf32b6cd20a74e6d"
	},
	{
		"id": "18a11b92b7bd",
		"ts": "2026-07-03T02:37:03.825Z",
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
		"liquidityUsd": 4047487.51,
		"hash": "18a11b92b7bd0e2b05c7ff9bf290747bf8e4a70f2c46a3a988b695c9f1b6e6df"
	},
	{
		"id": "5d2de2d5eabc",
		"ts": "2026-07-03T02:37:04.114Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 973125.83,
		"hash": "5d2de2d5eabc7876d2e4921628bba296ef654d946b2dd86b354a9a682a7a3330"
	},
	{
		"id": "ee44bb42d7af",
		"ts": "2026-07-03T02:37:04.397Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29328377.98,
		"hash": "ee44bb42d7af0faa9e8a24915aadf8bdf2c6aaaa3d422c990feb69a00ffbb8bb"
	},
	{
		"id": "c14b8c9bc77a",
		"ts": "2026-07-03T02:37:04.680Z",
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
		"liquidityUsd": 2470003.58,
		"hash": "c14b8c9bc77a8566c4d36d05b81fc38378ce3063ced45be900f5ea3b59a966dc"
	},
	{
		"id": "561a32048623",
		"ts": "2026-07-03T02:37:04.960Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3384347.03,
		"hash": "561a3204862335dbcefee703923c928ca5532011f999d2da0e192d25d39e24b9"
	},
	{
		"id": "c5336124df82",
		"ts": "2026-07-03T02:37:05.314Z",
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
		"liquidityUsd": 4888951.01,
		"hash": "c5336124df82baf9721561e95485fb4171f7a10035c93d386a445e5d85db4520"
	},
	{
		"id": "bfd72b026f37",
		"ts": "2026-07-03T02:37:05.573Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8254400.85,
		"hash": "bfd72b026f371f4bc2856cb8e5d49830b894e102abb82397887c0eea47080dff"
	},
	{
		"id": "0f268326d2fd",
		"ts": "2026-07-03T02:37:05.831Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 264766.59,
		"hash": "0f268326d2fd22febafc534958d74863968b3e46fe388f5d00d76f5b5fcaefec"
	},
	{
		"id": "3dcb02e52e75",
		"ts": "2026-07-03T02:37:06.089Z",
		"symbol": "OpenAI",
		"token": "0x43D6e8F4e413028365E9cf83D1e6c2181e8e3b07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 517628.87,
		"hash": "3dcb02e52e752a52e556d24f50e7169328a84c4b2c1b75513efb30c35f5c15cd"
	},
	{
		"id": "44542b7187a8",
		"ts": "2026-07-03T02:37:06.346Z",
		"symbol": "BLOCKTRONICS",
		"token": "0x7afE438411ee3959C7De6f7fB76bf9C769320bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 186597.77,
		"hash": "44542b7187a884695bf7e5304f7ab5f65dda189c4b912e9db6ed859314d56332"
	},
	{
		"id": "ea7faeded7a0",
		"ts": "2026-07-03T02:37:06.607Z",
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
		"liquidityUsd": 1475700.79,
		"hash": "ea7faeded7a06e13382d9d6b0d94aecfb779637568933eb465bc4b3898655316"
	},
	{
		"id": "1e3a095aab39",
		"ts": "2026-07-03T02:37:06.865Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 422229.94,
		"hash": "1e3a095aab395db49718a59c7f6e938c586a3787bc3134efee548ba9a728ad25"
	},
	{
		"id": "7b10b925b7cf",
		"ts": "2026-07-02T23:01:31.261Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 98078599.7,
		"hash": "7b10b925b7cfc126fb74f5f3f9204074d1147b2a6755fa8f6aa266a0cf0b0eb7"
	},
	{
		"id": "5d8ee84b0608",
		"ts": "2026-07-02T23:01:31.514Z",
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
		"liquidityUsd": 14305632.46,
		"hash": "5d8ee84b0608ff926ec7347d568dac54dd43143fec47b3c3084bfc2c6af617dc"
	},
	{
		"id": "53d98df5418f",
		"ts": "2026-07-02T23:01:31.737Z",
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
		"liquidityUsd": 1388685.5,
		"hash": "53d98df5418fc34e0891c31772aecd2212d5f229bbda5afef1c7e3a03174334b"
	},
	{
		"id": "d782e37e9360",
		"ts": "2026-07-02T23:01:31.930Z",
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
		"liquidityUsd": 28748057.88,
		"hash": "d782e37e936086e72564bd403a0aa0f7487580e22dee6a2eccbf8b8f8113cf35"
	},
	{
		"id": "add749ec1cec",
		"ts": "2026-07-02T23:01:32.148Z",
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
		"liquidityUsd": 4029971.15,
		"hash": "add749ec1cec29231065653facf8680d5e4d66eb4bbb9bfbf87d64a04e4df9ef"
	},
	{
		"id": "bd7434c572b6",
		"ts": "2026-07-02T23:01:32.359Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 971699.82,
		"hash": "bd7434c572b64b870730dfd544bc3ccdb42aede8aa919d4747d31275d8fe097c"
	},
	{
		"id": "f9ea899799c9",
		"ts": "2026-07-02T23:01:32.547Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28748057.88,
		"hash": "f9ea899799c977a55c43c63d769d684935528505540becf6f23884d888311733"
	},
	{
		"id": "458eef67d6a8",
		"ts": "2026-07-02T23:01:32.736Z",
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
		"liquidityUsd": 2431115.86,
		"hash": "458eef67d6a8dceef0879f39d21de9ad5201d1cba3e9c4bedaaa45807da7dc47"
	},
	{
		"id": "17a6025ac8db",
		"ts": "2026-07-02T23:01:32.924Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3471495.51,
		"hash": "17a6025ac8db6dea014fbc70035cd5449c7a192092836a4465d57e55c8807ece"
	},
	{
		"id": "0dcb45a2639c",
		"ts": "2026-07-02T23:01:33.125Z",
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
		"liquidityUsd": 4843062.8,
		"hash": "0dcb45a2639cc37aefa2bccdad31da34dddeee8b9df325d9a46da2651a970b81"
	},
	{
		"id": "0e6bb1b63967",
		"ts": "2026-07-02T23:01:33.297Z",
		"symbol": "OpenAI",
		"token": "0x43D6e8F4e413028365E9cf83D1e6c2181e8e3b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 518306.64,
		"hash": "0e6bb1b6396767053a8d6143893233b179c4fc51cd14078abc087f0c9bb9c14b"
	},
	{
		"id": "91374662944e",
		"ts": "2026-07-02T23:01:33.478Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8063884.37,
		"hash": "91374662944eb7cea71ad6da086ce99dd6a11871bdb0ac7efadbfe028347a8ae"
	},
	{
		"id": "b6c4473c7a7a",
		"ts": "2026-07-02T23:01:33.669Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 244510.61,
		"hash": "b6c4473c7a7a8d009e03bac883115aeb4db7078964b918deb42ec21a95b549db"
	},
	{
		"id": "284022c43534",
		"ts": "2026-07-02T23:01:33.841Z",
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
		"liquidityUsd": 1474638.95,
		"hash": "284022c43534698d5167deea1f9c54b1c08f5dd1aa42917f947c413ea95e1b2b"
	},
	{
		"id": "151de2941567",
		"ts": "2026-07-02T23:01:34.021Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 422339.96,
		"hash": "151de29415672398149f74a905e361d4266fa5837e869b4f09484d1170fd60ee"
	},
	{
		"id": "6f4075218a27",
		"ts": "2026-07-02T23:01:34.208Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2055995.14,
		"hash": "6f4075218a27a689cb9f11f6e5bb90c66bc656995a433625677c6b10d11c4646"
	},
	{
		"id": "923fdee552e1",
		"ts": "2026-07-02T21:01:13.999Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 98030555.14,
		"hash": "923fdee552e105637d61145e22cfd075ae8761c5860430abdf5cbd42b2c886b1"
	},
	{
		"id": "fd93343011c3",
		"ts": "2026-07-02T21:01:14.479Z",
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
		"liquidityUsd": 14173071.41,
		"hash": "fd93343011c36bce98fdee723b558e6acfdb971158b7e31a67ee4b93a7ac3538"
	},
	{
		"id": "a2b8a65e610c",
		"ts": "2026-07-02T21:01:14.756Z",
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
		"liquidityUsd": 1394059.65,
		"hash": "a2b8a65e610c3a32f6ed745922ab15a9ea7d09067abc4ed79cebeb36a7d7b347"
	},
	{
		"id": "162aae8149ad",
		"ts": "2026-07-02T21:01:15.013Z",
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
		"liquidityUsd": 28704238.61,
		"hash": "162aae8149ad00ce0e9a5e8480732f198e1393925f3167472c72f1de630b9762"
	},
	{
		"id": "2727b3f0170f",
		"ts": "2026-07-02T21:01:15.266Z",
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
		"liquidityUsd": 4030003.7,
		"hash": "2727b3f0170f730046e0fe12aeac85ce0a8bdc34e8eb3ebe21f9f6ff8cfe121d"
	},
	{
		"id": "a89690bf4590",
		"ts": "2026-07-02T21:01:15.535Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 971878.27,
		"hash": "a89690bf45903214a895771c8b736abc137eed9dcec9ddbe0eeac8f61ce570ee"
	},
	{
		"id": "9d0da3aaff2c",
		"ts": "2026-07-02T21:01:15.787Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28704238.43,
		"hash": "9d0da3aaff2caa57bf11d64786ed33bb59d4016c4028126393167f18618c3345"
	},
	{
		"id": "df1290e0fc6e",
		"ts": "2026-07-02T21:01:16.044Z",
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
		"liquidityUsd": 2375462.16,
		"hash": "df1290e0fc6ec97521ee557bbe94621860c481ecc949e48442b09186319ff0d9"
	},
	{
		"id": "e3795dc6c4b3",
		"ts": "2026-07-02T21:01:16.311Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3494310.38,
		"hash": "e3795dc6c4b353e024b3e05527280f997b569c9b2a5bb953b9e1d265ff0f1c52"
	},
	{
		"id": "7474b1f295aa",
		"ts": "2026-07-02T21:01:16.562Z",
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
		"liquidityUsd": 4816614.28,
		"hash": "7474b1f295aa25072c66a2a30d07a9538eaf4aacf9408c6d41a3725a08fcfeea"
	},
	{
		"id": "e2c12f7375f3",
		"ts": "2026-07-02T21:01:16.814Z",
		"symbol": "OpenAI",
		"token": "0x43D6e8F4e413028365E9cf83D1e6c2181e8e3b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 518476.05,
		"hash": "e2c12f7375f3d2c9cf99113add93c0ded6fd622f5ec67952cf469aeed5d4f392"
	},
	{
		"id": "4995ea76c96b",
		"ts": "2026-07-02T21:01:17.527Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8120658.13,
		"hash": "4995ea76c96b97114ae468a7ee500cd4c777e519e2410b0fb5810102417c38b0"
	},
	{
		"id": "ccd47718268f",
		"ts": "2026-07-02T21:01:18.439Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 244082.78,
		"hash": "ccd47718268f8a960e56fe7afd7722b828f6026c93b80213c7aa6fff2bc5c169"
	},
	{
		"id": "5446c5433370",
		"ts": "2026-07-02T21:01:18.690Z",
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
		"liquidityUsd": 1499824.26,
		"hash": "5446c5433370558bd53bacae608681426b56bdf2b6b972fbf8e1510e255bf6b0"
	},
	{
		"id": "2f7b160dd7ce",
		"ts": "2026-07-02T21:01:18.926Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 543258.23,
		"hash": "2f7b160dd7cef8a674ac7343421ad880cf463c86eaf0d229a9d130a996c807b1"
	},
	{
		"id": "66766e3a14d1",
		"ts": "2026-07-02T21:01:19.166Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1699397.98,
		"hash": "66766e3a14d1636769dfc99e0b2d90c083d27b38e3747e96994437fad2f9564d"
	},
	{
		"id": "aa1cf61404ff",
		"ts": "2026-07-02T19:19:30.597Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 98030114.75,
		"hash": "aa1cf61404ff0cfe43126b029c1c7fef582523c1c84d6648edcc9414603d9242"
	},
	{
		"id": "a406b83f2d35",
		"ts": "2026-07-02T19:19:31.089Z",
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
		"liquidityUsd": 13890762.75,
		"hash": "a406b83f2d356718d648f96715d080fc1ce278d09e12b8f30bf72eedcc3d4922"
	},
	{
		"id": "cbaa702645c9",
		"ts": "2026-07-02T19:19:31.563Z",
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
		"liquidityUsd": 1385875.73,
		"hash": "cbaa702645c9953b800d214e778263878409de51f34a58654f45fc0aaf24273e"
	},
	{
		"id": "20d7ccd1e651",
		"ts": "2026-07-02T19:19:31.824Z",
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
		"liquidityUsd": 28744505.42,
		"hash": "20d7ccd1e6518b8d07f68680ee25048af16aa69a4addd9674006536c642589d0"
	},
	{
		"id": "2ac924d276b2",
		"ts": "2026-07-02T19:19:32.081Z",
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
		"liquidityUsd": 4037106.33,
		"hash": "2ac924d276b2f136619563e792bdec96bd5cd9c82590f4b9ed27aa3c9721d5a5"
	},
	{
		"id": "d1d7ef5d5b46",
		"ts": "2026-07-02T19:19:32.346Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 971875.93,
		"hash": "d1d7ef5d5b464c900eb7c3e8cbd26df2a9115b82c71a182c66fbd0c2d6a8ab97"
	},
	{
		"id": "5721b68f571e",
		"ts": "2026-07-02T19:19:32.628Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28744505.42,
		"hash": "5721b68f571ee945fb164f6240989eb126a03fedb384073916ac65e8a334e13e"
	},
	{
		"id": "4517af4ff338",
		"ts": "2026-07-02T19:19:32.906Z",
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
		"liquidityUsd": 2320391.41,
		"hash": "4517af4ff3388b2cdf593db8c05a4a0d96c376d812862f52dae196f386a426e6"
	},
	{
		"id": "72b871d09adf",
		"ts": "2026-07-02T19:19:33.169Z",
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
		"liquidityUsd": 4847811.09,
		"hash": "72b871d09adff29bb47931f5b50f05cdd7b6e4dbe33d84aa0801b1bdd2ffa8d5"
	},
	{
		"id": "241cf66b04cc",
		"ts": "2026-07-02T19:19:33.433Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3494472.47,
		"hash": "241cf66b04cce8f599ecbb8d7828db17a32ca635ff8964da31f21db589fa3e4d"
	},
	{
		"id": "a0e58268b481",
		"ts": "2026-07-02T19:19:33.680Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8108606.76,
		"hash": "a0e58268b4819e8a0d94a3a128f8a4bd23db41629c4cd6914e98749795b88473"
	},
	{
		"id": "00ef534fcd1a",
		"ts": "2026-07-02T19:19:33.936Z",
		"symbol": "OpenAI",
		"token": "0x43D6e8F4e413028365E9cf83D1e6c2181e8e3b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 518317.85,
		"hash": "00ef534fcd1a9f04d11dd88311e453d141b7934fdb03e90001dd13ef8f08fce0"
	},
	{
		"id": "69c82b9dc0eb",
		"ts": "2026-07-02T19:19:34.191Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 247523.52,
		"hash": "69c82b9dc0eba4b27361d58eb217a6be08feebc7de42382d22eb37da66efc36b"
	},
	{
		"id": "7aa482df3889",
		"ts": "2026-07-02T19:19:34.440Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 539726.99,
		"hash": "7aa482df3889939753eba618f7ad5644b46d903a78a778671e111f7508c0cfd5"
	},
	{
		"id": "7fe79c3e8064",
		"ts": "2026-07-02T19:19:34.682Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1943197.41,
		"hash": "7fe79c3e8064172c0ea87567df775825d9a457bcea3e3969b69a5133251b5dd8"
	},
	{
		"id": "461c69aa7e37",
		"ts": "2026-07-02T19:19:34.930Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1726456.74,
		"hash": "461c69aa7e37bd551a585a9cd5d2aa58b086f771e81179608f40a8c509494b5e"
	},
	{
		"id": "d743be0a3be8",
		"ts": "2026-07-02T17:43:19.289Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 98572910.6,
		"hash": "d743be0a3be8018bbaa40bc2c13719ece4310c329546ae72319cc6063cdf79ab"
	},
	{
		"id": "27c6f183d9c6",
		"ts": "2026-07-02T17:43:19.972Z",
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
		"liquidityUsd": 13164010.75,
		"hash": "27c6f183d9c60a9eceef5b6cc1de850d73b6a9d89ec80b426aae0d187391a902"
	},
	{
		"id": "eb102bd9da09",
		"ts": "2026-07-02T17:43:20.472Z",
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
		"liquidityUsd": 1387749.85,
		"hash": "eb102bd9da09d871c5d15a61f2dcb5dfe9ed6729b04e3bd9107537cc94174a90"
	},
	{
		"id": "5c253af13a90",
		"ts": "2026-07-02T17:43:20.937Z",
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
		"liquidityUsd": 28730435.34,
		"hash": "5c253af13a9074226d4760ca6cb24399ecca1d9a908fc40b26244a5e4c6d5030"
	},
	{
		"id": "45820f0d929a",
		"ts": "2026-07-02T17:43:21.400Z",
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
		"liquidityUsd": 4040355.78,
		"hash": "45820f0d929a66618a7a23ceace33a12b89345e5c573dcbcedc2d788951f063d"
	},
	{
		"id": "1bbcafc0aa8e",
		"ts": "2026-07-02T17:43:21.660Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 974545.1,
		"hash": "1bbcafc0aa8e6f989e0d6e78943272b4c84ffa91c811128f27ed907ae971d198"
	},
	{
		"id": "b8f7f8819b1f",
		"ts": "2026-07-02T17:43:21.921Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28730435.34,
		"hash": "b8f7f8819b1ffbad6667362519b4b99c3d9ce7d2feeaa78656f0cb972d9b91f1"
	},
	{
		"id": "c300433135c3",
		"ts": "2026-07-02T17:43:22.245Z",
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
		"liquidityUsd": 2344641.8,
		"hash": "c300433135c3adc86d7b228e84fbff038e32b4314c2f282c94b19491762ac600"
	},
	{
		"id": "43a25405cf39",
		"ts": "2026-07-02T17:43:22.500Z",
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
		"liquidityUsd": 4848656.7,
		"hash": "43a25405cf39a626054d3e6014fe5c180411422e1765fd0dfe08c0a99550ce4d"
	},
	{
		"id": "4ffcd6e85ae4",
		"ts": "2026-07-02T17:43:22.788Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3646615.24,
		"hash": "4ffcd6e85ae4ccc0271ab920952a80322aff0ccc16182eea036d3904f9d7971b"
	},
	{
		"id": "1b1184309ebc",
		"ts": "2026-07-02T17:43:23.020Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8153228.01,
		"hash": "1b1184309ebcc0f6e5455efc9ad667f7d6717695c6467f61004c86c183d9c466"
	},
	{
		"id": "a6f58081a9b4",
		"ts": "2026-07-02T17:43:23.531Z",
		"symbol": "OpenAI",
		"token": "0x43D6e8F4e413028365E9cf83D1e6c2181e8e3b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 518227.19,
		"hash": "a6f58081a9b462d63303dd37c47e6097851a269a93e6c2b743ce6c3f42851d5a"
	},
	{
		"id": "6c1416bebcf2",
		"ts": "2026-07-02T17:43:23.777Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 249189.35,
		"hash": "6c1416bebcf29f2a2eca00cb12908427231bf0b1de32e05f67e1962210adc212"
	},
	{
		"id": "c5b70e3efbcf",
		"ts": "2026-07-02T17:43:24.010Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 539502.65,
		"hash": "c5b70e3efbcfcab987068ad14d3ce41f13d0f5fef68dbc88313fff247bec5088"
	},
	{
		"id": "96d2ba5e7991",
		"ts": "2026-07-02T17:43:24.256Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1923382.91,
		"hash": "96d2ba5e7991570b8441aea41f295cd10a81f21021e0de4b3865916cc87bcb03"
	},
	{
		"id": "9fd7f0b3c59e",
		"ts": "2026-07-02T17:43:24.488Z",
		"symbol": "OpenAI",
		"token": "0x7C797DA3704b6F682917005b01C89710Ec17db07",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 22264.52,
		"hash": "9fd7f0b3c59efe3e070551ae14b6fc8c4eecd70a0d3a01ed19bbf77af24a7f2c"
	},
	{
		"id": "b07bb9099845",
		"ts": "2026-07-02T15:12:29.978Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 98395415.48,
		"hash": "b07bb9099845a2d60e45e89f02e0c3ff57cffae1daf2f893a1a26854d5dd26a8"
	},
	{
		"id": "eefe003c3171",
		"ts": "2026-07-02T15:12:31.336Z",
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
		"liquidityUsd": 13832277.3,
		"hash": "eefe003c3171a39c824004913c80b5c3a35066a76a4afe0d7871a68f0e4391f3"
	},
	{
		"id": "75f85dc49b1e",
		"ts": "2026-07-02T15:12:31.530Z",
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
		"liquidityUsd": 1385969.84,
		"hash": "75f85dc49b1ecdea480e221a188244f9e7488d705e5f2cd32ad0c030264eeb37"
	},
	{
		"id": "367d8f22d802",
		"ts": "2026-07-02T15:12:31.718Z",
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
		"liquidityUsd": 28789041.65,
		"hash": "367d8f22d802dcd26bc1fcf76d4449ff7853a839aaf9bfa81aa17483ccca0c22"
	},
	{
		"id": "cb0b2b757e2b",
		"ts": "2026-07-02T15:12:31.909Z",
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
		"liquidityUsd": 4028063.27,
		"hash": "cb0b2b757e2b7fbd6fabf5703dd41e9f353964181ff75fc03b52b7c5c395f06d"
	},
	{
		"id": "5c95cac499e9",
		"ts": "2026-07-02T15:12:32.098Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 967081.04,
		"hash": "5c95cac499e919130cdc14890ec09eed3bc1ce43a05a9e872ba5f9b094e427c8"
	},
	{
		"id": "1a32a1ba2a60",
		"ts": "2026-07-02T15:12:32.281Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28787472.91,
		"hash": "1a32a1ba2a6022b506fc5e0caee57991c8bafbc549e2584cd5f8b88243204c7b"
	},
	{
		"id": "690107cdf8af",
		"ts": "2026-07-02T15:12:32.469Z",
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
		"liquidityUsd": 2341743.44,
		"hash": "690107cdf8af4311dc01e5bd89cd659065c80ef85a94671a8273609df73e8878"
	},
	{
		"id": "484a0dae6b36",
		"ts": "2026-07-02T15:12:32.654Z",
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
		"liquidityUsd": 5020762.88,
		"hash": "484a0dae6b36e454d19cdaadfc46e247045a6f19b7e5e7ccdacb73e1b2fbf7ff"
	},
	{
		"id": "369758d8d217",
		"ts": "2026-07-02T15:12:32.839Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3641647.14,
		"hash": "369758d8d217c4edc3f0cde2bc4c8ff7408bb384591a7bf78a8a2356423755ef"
	},
	{
		"id": "f53ae7a5142f",
		"ts": "2026-07-02T15:12:33.011Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8116573.03,
		"hash": "f53ae7a5142f27aad8104c18b265c0ca2f550763b0bde7a76fd9594f88c7da6f"
	},
	{
		"id": "1d4f8903d1f0",
		"ts": "2026-07-02T15:12:33.185Z",
		"symbol": "OpenAI",
		"token": "0x43D6e8F4e413028365E9cf83D1e6c2181e8e3b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 517664.15,
		"hash": "1d4f8903d1f037706154d1cfd3f6f00557c3cb1ce6cf630b879862846e23b8ca"
	},
	{
		"id": "e5988ef778b7",
		"ts": "2026-07-02T15:12:33.359Z",
		"symbol": "OpenAI",
		"token": "0x7C797DA3704b6F682917005b01C89710Ec17db07",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 22264.52,
		"hash": "e5988ef778b734e98c34267ec6037f71ebceaf58b1836345b99d90816936e702"
	},
	{
		"id": "ebd58a39ddcd",
		"ts": "2026-07-02T15:12:34.762Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 546034.83,
		"hash": "ebd58a39ddcd7fbff3c3438fb0aa8d2355cf7d6bc033184e6149e9b1de868e53"
	},
	{
		"id": "db68fcfa27d4",
		"ts": "2026-07-02T15:12:34.933Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 321524.35,
		"hash": "db68fcfa27d462ac76b209fabf0dfa510520a088457f30d7236e5ce13a3ff499"
	},
	{
		"id": "2cee79f89a54",
		"ts": "2026-07-02T15:12:35.118Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 245366.08,
		"hash": "2cee79f89a54a9e5e90e0a0e5ab3ebe3607edd41f1753809a3f724b97f8801c6"
	},
	{
		"id": "f2c2bd3ce734",
		"ts": "2026-07-02T15:12:36.495Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2030420.15,
		"hash": "f2c2bd3ce7346c56212d0335e01a9d34b097ba91777f9b218d16a75410ee7155"
	},
	{
		"id": "249e20ba85a5",
		"ts": "2026-07-02T12:54:39.178Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 98598015.73,
		"hash": "249e20ba85a549a4d05ff33c4ebc17662226add4a647812cfcb3a72fc5198cc8"
	}
]
