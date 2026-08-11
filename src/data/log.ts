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
	"updatedAt": "2026-08-11T03:39:54.277Z",
	"tokensScored": 9018,
	"verdictsIssued": 9018,
	"safe": 7875,
	"risky": 670,
	"likelyRug": 473,
	"ticks": 547
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "b4db16354e47",
		"ts": "2026-08-11T03:39:50.394Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112683534.95,
		"hash": "b4db16354e479fe5df6f4dbf5788f729cacbe74ef5146330cb8bc711374cc927"
	},
	{
		"id": "46dd65c6b628",
		"ts": "2026-08-11T03:39:50.826Z",
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
		"liquidityUsd": 18586125.29,
		"hash": "46dd65c6b6286b0fa46007d1ee19495a1de389e31784c605ded0480bab70e17b"
	},
	{
		"id": "a063a4af7326",
		"ts": "2026-08-11T03:39:51.068Z",
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
		"liquidityUsd": 1027492.82,
		"hash": "a063a4af7326ac9740fd5eb8083a8993a5458a95e0b10ae83b1441a6d9c26262"
	},
	{
		"id": "e78bdc64c59b",
		"ts": "2026-08-11T03:39:51.302Z",
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
		"liquidityUsd": 26820837.41,
		"hash": "e78bdc64c59bd870c14bfe2c88eb118b67207bb5f7a5db383fb58d4648d548a0"
	},
	{
		"id": "5cb020e54fec",
		"ts": "2026-08-11T03:39:51.542Z",
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
		"liquidityUsd": 4209195.58,
		"hash": "5cb020e54fecf98aaa437007a4ed5d332b906c65782c4fc979b031e8f210f7ea"
	},
	{
		"id": "5b8effbdfade",
		"ts": "2026-08-11T03:39:51.774Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 916453.01,
		"hash": "5b8effbdfade6d938d42d2e01c0945031a01ca56ac7b6c5638fd898e042d2e6f"
	},
	{
		"id": "89889cb7c5f8",
		"ts": "2026-08-11T03:39:52.010Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26820837.41,
		"hash": "89889cb7c5f8b80b11cf6fdf0f7552766222bbc8ee94c36401cfb2451a7782e2"
	},
	{
		"id": "42a21e3b4a7a",
		"ts": "2026-08-11T03:39:52.256Z",
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
		"liquidityUsd": 3804085.71,
		"hash": "42a21e3b4a7a5eb4d5da7f56ac494f775e4b3b09b9e859f63e59cfed87e06ce0"
	},
	{
		"id": "48ffb98f69ba",
		"ts": "2026-08-11T03:39:52.488Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2202193.73,
		"hash": "48ffb98f69ba6ba9adf02e7d46ff023bf0e0a1c54562bf0b479177008cc3f992"
	},
	{
		"id": "fafa7af09fc0",
		"ts": "2026-08-11T03:39:52.724Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 14,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.72,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 251006.95,
		"hash": "fafa7af09fc0987f5a79b9dd98df09b7ce3a61355cb0653b14e1c8fde319ecee"
	},
	{
		"id": "1470da4d7dda",
		"ts": "2026-08-11T03:39:52.949Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1022173.41,
		"hash": "1470da4d7ddaa9df03f4613870df6f92704430553c401ffcd6601ef3f9ba32b7"
	},
	{
		"id": "9e61e978fbb6",
		"ts": "2026-08-11T03:39:53.165Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9433086.65,
		"hash": "9e61e978fbb6334b66ac8c3aaab727d06cdc3213bc54f4ceff117c9ebca487a7"
	},
	{
		"id": "6d8c19400188",
		"ts": "2026-08-11T03:39:53.386Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 265424.55,
		"hash": "6d8c1940018802fc6d9a68bd5d45078d9941c3cb31c8ffdde8b62a7de5d38194"
	},
	{
		"id": "4d9ce7247765",
		"ts": "2026-08-11T03:39:53.610Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4377162.76,
		"hash": "4d9ce724776555561b0fd80ff50954b4693cf8e76e0db22eb3c2f5550ce2f1b7"
	},
	{
		"id": "30fab41edb46",
		"ts": "2026-08-11T03:39:53.825Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 69743.74,
		"hash": "30fab41edb46ae6983286c796e73b73542eaf5888a66c7b7339c0c0273f7de5e"
	},
	{
		"id": "2ea80c29e9bb",
		"ts": "2026-08-11T03:39:54.053Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1942285.76,
		"hash": "2ea80c29e9bb04359ab2527a9a4569e428b8b63ef20c756e90d63be965891054"
	},
	{
		"id": "6773b74b9b4e",
		"ts": "2026-08-11T03:39:54.277Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4088835.64,
		"hash": "6773b74b9b4e19b8a47ba79e094c3581e2a4b646b7c9dbd74ddda88862a4ccb7"
	},
	{
		"id": "c44e16193a13",
		"ts": "2026-08-11T01:21:30.761Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112704471.24,
		"hash": "c44e16193a134f56a4bad8e345788a63ab3069851fa88c4e48108c46971ecf56"
	},
	{
		"id": "89d5d99d63d7",
		"ts": "2026-08-11T01:21:31.007Z",
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
		"liquidityUsd": 18478160.78,
		"hash": "89d5d99d63d7318570c7faa68915d09d7c41a36de3c7265f8c04460ea467dc07"
	},
	{
		"id": "669a86cb7438",
		"ts": "2026-08-11T01:21:31.249Z",
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
		"liquidityUsd": 1027492.82,
		"hash": "669a86cb7438c826b8b42a28fcd0744cd148b1d3bda5cf5f2cab7329b6c5f15a"
	},
	{
		"id": "62dcd021550c",
		"ts": "2026-08-11T01:21:31.506Z",
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
		"liquidityUsd": 26770148.32,
		"hash": "62dcd021550c9a6295b8b9ab967abc972903eed0c4c44861aed5cbd6b53473fb"
	},
	{
		"id": "ad6bfa73b2f4",
		"ts": "2026-08-11T01:21:31.758Z",
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
		"liquidityUsd": 4195774.07,
		"hash": "ad6bfa73b2f4d278473de2b9f59b042ee4093a4d8583d845be87d0e97d627992"
	},
	{
		"id": "0f28c154bcdf",
		"ts": "2026-08-11T01:21:32.042Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 919443.41,
		"hash": "0f28c154bcdf1d3f91d617776502b068644b2713b16bf0b6326e1560c7ad3f1b"
	},
	{
		"id": "6b035b505a3d",
		"ts": "2026-08-11T01:21:32.296Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26770148.32,
		"hash": "6b035b505a3d176f7a3cfa963ef17c1b6977a1964860a44f962a18972756b1e8"
	},
	{
		"id": "f81667ac2b9d",
		"ts": "2026-08-11T01:21:32.559Z",
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
		"liquidityUsd": 3743736.29,
		"hash": "f81667ac2b9d34f519b23f8f22ed45ece64bd9ddffb0221d350892ab7ff728d3"
	},
	{
		"id": "95efeb56b6d2",
		"ts": "2026-08-11T01:21:32.823Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2207819.09,
		"hash": "95efeb56b6d2392d8ef496cfe6cc9bddf1ed5d450d1fb643011ab97d85c5b36c"
	},
	{
		"id": "f46925cc50f3",
		"ts": "2026-08-11T01:21:33.071Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 14,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.72,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 254952.3,
		"hash": "f46925cc50f309da75baafc62022c3b04237c7c56100bc6325cf008870b70782"
	},
	{
		"id": "1435b3eb2688",
		"ts": "2026-08-11T01:21:33.292Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1017170.99,
		"hash": "1435b3eb2688f1168fd6536dc74bfe4829847f2206506db6d7fb2715df680207"
	},
	{
		"id": "f67393a60ba0",
		"ts": "2026-08-11T01:21:33.511Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9382213.47,
		"hash": "f67393a60ba0eb25310e9e928dc78009091507b9317657d5c5e739d9693eab9e"
	},
	{
		"id": "9eae638dc9e4",
		"ts": "2026-08-11T01:21:33.730Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 264340.02,
		"hash": "9eae638dc9e488de5aa5368e6000676a584173090e2922588d10dcf0cf019700"
	},
	{
		"id": "fd390b782789",
		"ts": "2026-08-11T01:21:33.954Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 68231.68,
		"hash": "fd390b782789a7d987a64dd4ec0fe382ce348b35bbb1ae5ca6fc7929a46a3ffd"
	},
	{
		"id": "2cdc1b8069bf",
		"ts": "2026-08-11T01:21:34.174Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 646453.09,
		"hash": "2cdc1b8069bf1e6f357decc3af3b48cbfc98a28bd47a7c51ff83b0648bcf3a48"
	},
	{
		"id": "6396fac0e336",
		"ts": "2026-08-11T01:21:34.394Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4306788.34,
		"hash": "6396fac0e336a7c57b45a05f1572a67f18889bb23352b1f8a690ea920b672d59"
	},
	{
		"id": "261b3e294039",
		"ts": "2026-08-11T01:21:34.616Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1938575.23,
		"hash": "261b3e294039bbe92eacfc24e6a98ee902dd96018f11b790a2f87c87d394b430"
	},
	{
		"id": "3a6d9d0d0a50",
		"ts": "2026-08-10T23:31:01.492Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112515099.49,
		"hash": "3a6d9d0d0a503e34b0a447631659724db2d7b4cc0849b05df7e93415695e9b43"
	},
	{
		"id": "ad22c3762537",
		"ts": "2026-08-10T23:31:01.842Z",
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
		"liquidityUsd": 17224550.46,
		"hash": "ad22c3762537c4b994444c92a9da7d9ba4a495ed319d0e1df8c8b3a6a5982b93"
	},
	{
		"id": "4552a817a823",
		"ts": "2026-08-10T23:31:02.074Z",
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
		"liquidityUsd": 1027492.82,
		"hash": "4552a817a8232b86e80f23815c8f4c8a8336112c3cad2c3756a80ef2bb812027"
	},
	{
		"id": "6d1538b19e68",
		"ts": "2026-08-10T23:31:02.326Z",
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
		"liquidityUsd": 26705083.48,
		"hash": "6d1538b19e68abb1a48797c547b3decc5ac8ef72120342f4a55629393a5a625f"
	},
	{
		"id": "95c58a1ab956",
		"ts": "2026-08-10T23:31:02.606Z",
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
		"liquidityUsd": 4287668.91,
		"hash": "95c58a1ab95646b08dc09592dffebf81ccafd6091217dc9a0179df7f4e9c16ee"
	},
	{
		"id": "239250e59aa1",
		"ts": "2026-08-10T23:31:02.870Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 913530.11,
		"hash": "239250e59aa1734fdf47828bd5bf770eec290b2e8260de06223230a7cf57c292"
	},
	{
		"id": "6242e09ef988",
		"ts": "2026-08-10T23:31:03.169Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26705083.48,
		"hash": "6242e09ef9883e456efa7326349cb769487e2bcfe4671603c6e331fa68f08c48"
	},
	{
		"id": "25ba4f293acb",
		"ts": "2026-08-10T23:31:03.447Z",
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
		"liquidityUsd": 3328308.86,
		"hash": "25ba4f293acb0840a45a12bc83bb5d288e50651803d1c1d4edbea79b59525dc2"
	},
	{
		"id": "26acfcb7ea2f",
		"ts": "2026-08-10T23:31:03.652Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2130971.58,
		"hash": "26acfcb7ea2ffd297e592531ff9318daa36c407d6a41395099c33934a80ec8b9"
	},
	{
		"id": "7dfdfd1f4a91",
		"ts": "2026-08-10T23:31:03.857Z",
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
		"liquidityUsd": 264757.61,
		"hash": "7dfdfd1f4a919dc3c7f74e5102108a055ca92ecb6110e6922870e7844c71b94a"
	},
	{
		"id": "60da4160e4e9",
		"ts": "2026-08-10T23:31:04.066Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1007352.53,
		"hash": "60da4160e4e954c14648292662da45572e5cd2f4a0cf4c15b6c9f93212824fb5"
	},
	{
		"id": "6a93aa6d55cc",
		"ts": "2026-08-10T23:31:04.281Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 66170.2,
		"hash": "6a93aa6d55cc257f14e0f5a54de0aec755e93270ff0ac3973d491c8fdac2b1d5"
	},
	{
		"id": "cab803a85b9f",
		"ts": "2026-08-10T23:31:04.494Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9381159.32,
		"hash": "cab803a85b9f850b31c72c04d480bb5ce690a3ba3203c33c7d48f87b9bd0d7da"
	},
	{
		"id": "5d7bc33dd183",
		"ts": "2026-08-10T23:31:04.683Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 323514.74,
		"hash": "5d7bc33dd1830226639345055948fa0f7a21938744553dd0e186c348007d5f06"
	},
	{
		"id": "952127a659fd",
		"ts": "2026-08-10T23:31:04.900Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 648131.61,
		"hash": "952127a659fdaad5ca36e5a6226cb280f4995e9af6948ca40649224fbbdd51fc"
	},
	{
		"id": "7b358171d5ea",
		"ts": "2026-08-10T23:31:05.103Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4323359.11,
		"hash": "7b358171d5ea3b45a04a765e18854c4840dee0fb5e8ea203fcbabc0f52d71dc5"
	},
	{
		"id": "e7f84c67e86d",
		"ts": "2026-08-10T23:31:05.298Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1900494.5,
		"hash": "e7f84c67e86d31697d06a5a5bd6d9cf2d8ac0aec57f080312ff5ae307d92e57f"
	},
	{
		"id": "965d496ff617",
		"ts": "2026-08-10T23:31:05.495Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4113400.21,
		"hash": "965d496ff617968a70497e99502cc80f795a70ea9f4d676dbaf23d141e751fa8"
	},
	{
		"id": "b6a2080919ed",
		"ts": "2026-08-10T22:33:16.114Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112849790.44,
		"hash": "b6a2080919eda43145611c4699dbfc25ff6404858d54589cd8dc056a37f732c6"
	},
	{
		"id": "9d033e7e90a4",
		"ts": "2026-08-10T22:33:16.457Z",
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
		"liquidityUsd": 17889600.59,
		"hash": "9d033e7e90a453d73ea255f4d24ac6291217af16ed850857fc201a38dffc8b2e"
	},
	{
		"id": "2eb54d5c2485",
		"ts": "2026-08-10T22:33:16.802Z",
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
		"liquidityUsd": 1027492.82,
		"hash": "2eb54d5c24857175892acd3bd87b80bec50cfc74e5ae5f1cb6d2c491c5cb04df"
	},
	{
		"id": "c703daa0e025",
		"ts": "2026-08-10T22:33:16.990Z",
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
		"liquidityUsd": 26705209.12,
		"hash": "c703daa0e025b513046349f32840537d66a359eaf0c7bf9dbbf350d791030d84"
	},
	{
		"id": "9331c15459af",
		"ts": "2026-08-10T22:33:17.178Z",
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
		"liquidityUsd": 4314711.82,
		"hash": "9331c15459af4f0f5041c1b6f733b8386748a8e3016669af922b5768ef70efda"
	},
	{
		"id": "b7cb97fe70f4",
		"ts": "2026-08-10T22:33:17.381Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 920915.78,
		"hash": "b7cb97fe70f4de0746cc2813bb800d7bb245b66b10cf1f253d2d4741c98e2cba"
	},
	{
		"id": "09e9c77724b5",
		"ts": "2026-08-10T22:33:17.580Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26705209.12,
		"hash": "09e9c77724b5fc5d36f9d9de4a3e1dd037eca2b4d3916f09f2af0167709ccd7c"
	},
	{
		"id": "2ffcf214cb29",
		"ts": "2026-08-10T22:33:17.778Z",
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
		"liquidityUsd": 3791902.6,
		"hash": "2ffcf214cb294e24039306b0a1b66a3056486313c15a1ac0b81f6f54d0a3e52a"
	},
	{
		"id": "e5f033e147f3",
		"ts": "2026-08-10T22:33:17.981Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2132087.1,
		"hash": "e5f033e147f3ca4c114cc5f0866259f11bf1332fcf36878aa6661afa10f22a24"
	},
	{
		"id": "ce4aaa8e9b97",
		"ts": "2026-08-10T22:33:18.166Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 14,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.72,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 263099.24,
		"hash": "ce4aaa8e9b97431ebb551bb9de902996f7828ec1c38f3a2760476a601fed51d0"
	},
	{
		"id": "dad342caba16",
		"ts": "2026-08-10T22:33:18.339Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1004502.76,
		"hash": "dad342caba16f22577a6e6669f6fb12c89af4c17bb4a50e77ce8b1fabbfe877a"
	},
	{
		"id": "86e49bc249ac",
		"ts": "2026-08-10T22:33:18.525Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 66605.58,
		"hash": "86e49bc249ac977e159050b7a1eec9ab0a515faab002bc2494d7cd6b1bde3d4b"
	},
	{
		"id": "2aaa4eb3b916",
		"ts": "2026-08-10T22:33:18.708Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9413856.88,
		"hash": "2aaa4eb3b916940a864f61d0f52d44032bc6acf2c58a2ae616f7034b16f807be"
	},
	{
		"id": "beed8abfa2a1",
		"ts": "2026-08-10T22:33:18.953Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 327172.75,
		"hash": "beed8abfa2a11a03b80e465e4b75ec966beaa2c332592b8108375889632c6182"
	},
	{
		"id": "c1c3a576a65d",
		"ts": "2026-08-10T22:33:19.128Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 649162.37,
		"hash": "c1c3a576a65d1287c22668d045527a651a11e188f2990119845d3ff352999736"
	},
	{
		"id": "b3d14499a0c1",
		"ts": "2026-08-10T22:33:19.321Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4337552.67,
		"hash": "b3d14499a0c18854ca4a1a1f2d033e4f40778f0cfb339eefadb5bf97efeff9d7"
	},
	{
		"id": "59ca9c9bf055",
		"ts": "2026-08-10T22:33:19.544Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1950998.83,
		"hash": "59ca9c9bf055437d0fe2696811858e59c6936cc1c82f6e6fe15216acc931fda9"
	},
	{
		"id": "85b7f706dfaa",
		"ts": "2026-08-10T21:37:33.317Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112842447.56,
		"hash": "85b7f706dfaae98c82c03f72d2691e193b9ed631b767de874cff39a249d12459"
	},
	{
		"id": "ba7972c10538",
		"ts": "2026-08-10T21:37:33.884Z",
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
		"liquidityUsd": 18251514.03,
		"hash": "ba7972c10538a53f0ddb8f6be86abe193dbe2124eb7fd0bf4ca33f083e828beb"
	},
	{
		"id": "0c3cb7ba2788",
		"ts": "2026-08-10T21:37:34.257Z",
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
		"liquidityUsd": 1027492.82,
		"hash": "0c3cb7ba2788c195cbb944032782cff610eb69ed1ac86e110ff85e034988284a"
	},
	{
		"id": "8e037f778020",
		"ts": "2026-08-10T21:37:34.629Z",
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
		"liquidityUsd": 26715565.62,
		"hash": "8e037f778020c18c32bcade6b1d1cf98230162eff5f54612921cd3ab55c69ddc"
	},
	{
		"id": "563dbd1a4e11",
		"ts": "2026-08-10T21:37:34.997Z",
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
		"liquidityUsd": 4323805.69,
		"hash": "563dbd1a4e119bc8845e0b2381d2fbe060683576f479b63cae71ef853f50fb9e"
	},
	{
		"id": "53a45c26d1ac",
		"ts": "2026-08-10T21:37:35.404Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 922885.79,
		"hash": "53a45c26d1acd7bd69002547a339267466756bde126e2ce1e0d82afc493245dc"
	},
	{
		"id": "9e82ef03728a",
		"ts": "2026-08-10T21:37:35.771Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26715565.62,
		"hash": "9e82ef03728a8fb5e6750c5ffe797ced9a9ee11ef007d8b657a4cf108a103d87"
	},
	{
		"id": "780e24cbd653",
		"ts": "2026-08-10T21:37:36.142Z",
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
		"liquidityUsd": 3747534.83,
		"hash": "780e24cbd6533bcdb3b076d9a2d236f6a35ddc2564e617cccd95b50640fe467a"
	},
	{
		"id": "5fe2ece4d745",
		"ts": "2026-08-10T21:37:36.512Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2140511.77,
		"hash": "5fe2ece4d745c70a8abdc4d47470e104fef3295f2a6578afa424b3f8a604248d"
	},
	{
		"id": "57b47eb42194",
		"ts": "2026-08-10T21:37:36.905Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 65947.46,
		"hash": "57b47eb421946ca40c47affd1f70c53cb5f8f76b1dda1c112fe12e876790379f"
	},
	{
		"id": "ebfe87f88a89",
		"ts": "2026-08-10T21:37:37.303Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 262394.18,
		"hash": "ebfe87f88a8907420d698bc8946d757e06b28a03b0be3c40966afc2f7cd516df"
	},
	{
		"id": "68f884df01ed",
		"ts": "2026-08-10T21:37:37.651Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1002372.42,
		"hash": "68f884df01eda07fa0a6db3cc085ef768028aa614b124e1b4e2e655817a31c77"
	},
	{
		"id": "622df143be25",
		"ts": "2026-08-10T21:37:38.072Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9405279.9,
		"hash": "622df143be2539145abace455538fcd65f548ef55495e3887d63eb7d828f3762"
	},
	{
		"id": "3396bc44a6da",
		"ts": "2026-08-10T21:37:38.828Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 259980.85,
		"hash": "3396bc44a6da19e11e1e626b1f57177e1dfa5d099846ff6a49205866c10dc7b4"
	},
	{
		"id": "3595632f7c5d",
		"ts": "2026-08-10T21:37:39.179Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4338828.05,
		"hash": "3595632f7c5df63b0059830592a86ec2af4de54d7ea91039d246b7ea7cf09257"
	},
	{
		"id": "14d302cee845",
		"ts": "2026-08-10T21:37:39.531Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1953419.18,
		"hash": "14d302cee8459d5c7ae27cc07910664603bf866bb94a3a50515187f5e233961e"
	},
	{
		"id": "afef42351a26",
		"ts": "2026-08-10T21:37:39.890Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4120785.09,
		"hash": "afef42351a26c9e0b4487d2925ffe705f9d1c054f4e9199f7739e1c4389c04cf"
	},
	{
		"id": "70752f551388",
		"ts": "2026-08-10T20:37:23.087Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112813462.77,
		"hash": "70752f55138827046f941d026c78351e48b918c296e3450d95926afbfa4889fd"
	},
	{
		"id": "10e0a8285ba4",
		"ts": "2026-08-10T20:37:23.744Z",
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
		"liquidityUsd": 18292737.31,
		"hash": "10e0a8285ba4103c082e5e2d29755eec45c745bc652efa50187274c3447739ec"
	},
	{
		"id": "32e1c7addccf",
		"ts": "2026-08-10T20:37:24.232Z",
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
		"liquidityUsd": 1027492.82,
		"hash": "32e1c7addccf7ad7febe944f3a0497c9f09be62b5cb3056b8757a1cea999a79f"
	},
	{
		"id": "0cae8080834e",
		"ts": "2026-08-10T20:37:24.463Z",
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
		"liquidityUsd": 26774414.41,
		"hash": "0cae8080834e1dd316658578d89f5fd0b2951108273cfb41a6c9c4c1b1a49b03"
	},
	{
		"id": "70e814af4f72",
		"ts": "2026-08-10T20:37:24.894Z",
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
		"liquidityUsd": 4323139.92,
		"hash": "70e814af4f72f9fe320ca042846eb8472a67cbc3c0088781643494250279e526"
	},
	{
		"id": "ced91a612a47",
		"ts": "2026-08-10T20:37:25.153Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 922974.45,
		"hash": "ced91a612a4736322c2a2e4e945c62e3352bdd9d20b56190b6fafbb611c01215"
	},
	{
		"id": "e038702a6b2f",
		"ts": "2026-08-10T20:37:25.439Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26774400.89,
		"hash": "e038702a6b2f89778e474caeaa29e57245a30e8081527f990802c587c0ab5310"
	},
	{
		"id": "46862ff995a9",
		"ts": "2026-08-10T20:37:25.674Z",
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
		"liquidityUsd": 3553564.32,
		"hash": "46862ff995a9ed44e8260db70aa6891b53821299e2fc98116b98b1c108cf22a4"
	},
	{
		"id": "5c6f672f2537",
		"ts": "2026-08-10T20:37:25.938Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 66118.31,
		"hash": "5c6f672f25377c21e3762ab8ee93c9cc301aae0822a39395ea350c190700e6bd"
	},
	{
		"id": "08bbc24eeb6f",
		"ts": "2026-08-10T20:37:26.169Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2131474.09,
		"hash": "08bbc24eeb6fa13205f9576ae4a22783d4c5adb92891b726b6a0e1778364739d"
	},
	{
		"id": "7df64875eb27",
		"ts": "2026-08-10T20:37:26.386Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 260823.11,
		"hash": "7df64875eb27e8ccb6623917a3ca34b042858870cfed590b862c1e765c6733dc"
	},
	{
		"id": "cb7edd370bd3",
		"ts": "2026-08-10T20:37:26.602Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1002862.87,
		"hash": "cb7edd370bd3dbbc2c0ec33dc2073f34e0747fdb2a3a4b650aa0d8439db8377a"
	},
	{
		"id": "993db33dcd05",
		"ts": "2026-08-10T20:37:26.817Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9417984.74,
		"hash": "993db33dcd058c601f5422a11221651aad24f04fcbea0aaa23167d5f685b613f"
	},
	{
		"id": "a6468d264387",
		"ts": "2026-08-10T20:37:27.034Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 255675.02,
		"hash": "a6468d264387d242ebf639253b68e06b72048213ffff0ecc64b16dca1eae5a10"
	},
	{
		"id": "acd612a54c07",
		"ts": "2026-08-10T20:37:27.254Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4329365.17,
		"hash": "acd612a54c077cb8cce9cd14879b7c6ac553e4f2f5cd32e06e557dd0ac602cdc"
	},
	{
		"id": "cab2aba3c72f",
		"ts": "2026-08-10T20:37:27.471Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4125560.79,
		"hash": "cab2aba3c72fb8ecc8bd588345b8d77bfcf1ce9f43c7515d91f036f38c35fd17"
	},
	{
		"id": "50a2b526321d",
		"ts": "2026-08-10T20:37:27.686Z",
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
		"liquidityUsd": 1274141.55,
		"hash": "50a2b526321d7f0a9605cac515a4262f5c14d9611349bde7f9f7cf62aabdc534"
	},
	{
		"id": "6ec2c7913d8e",
		"ts": "2026-08-10T20:37:27.902Z",
		"symbol": "EURC",
		"token": "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2287971.89,
		"hash": "6ec2c7913d8e79f0821de3e3147c0dc60f9d163a4e39b5dfafd7c9a2f7c0655e"
	},
	{
		"id": "acf242ee2fc4",
		"ts": "2026-08-10T19:52:54.221Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112817218.34,
		"hash": "acf242ee2fc43dfc2a5f43b32051808fc407658aeae2671b151fa4e403f27fea"
	},
	{
		"id": "02d7f2960930",
		"ts": "2026-08-10T19:52:54.660Z",
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
		"liquidityUsd": 18187757.29,
		"hash": "02d7f2960930d5dd3448342b4cf7c6d27d9a273429aef920bc420ae444812dbd"
	},
	{
		"id": "2c575cf915f9",
		"ts": "2026-08-10T19:52:54.898Z",
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
		"liquidityUsd": 1027492.82,
		"hash": "2c575cf915f94b0149131f6e9ed28877b5d83e396d70e7d4032f8f1ce15c247f"
	},
	{
		"id": "e21a95be924a",
		"ts": "2026-08-10T19:52:55.133Z",
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
		"liquidityUsd": 26774631.84,
		"hash": "e21a95be924ad87792961b502b722a6a50125dd21efefa4ec17fddb01c1a96b1"
	},
	{
		"id": "49c0e9bf7860",
		"ts": "2026-08-10T19:52:55.371Z",
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
		"liquidityUsd": 4311145.96,
		"hash": "49c0e9bf786038cb9957ed00a9604c0201f89098d6cccde646cadd06c6a54ca0"
	},
	{
		"id": "c6d39f6ff421",
		"ts": "2026-08-10T19:52:55.608Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 922974.45,
		"hash": "c6d39f6ff4219f973bd5453cae3ee03b3fcdb8834cb1ef58ab2074b275bff505"
	},
	{
		"id": "13040a0c06d0",
		"ts": "2026-08-10T19:52:55.856Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26774631.84,
		"hash": "13040a0c06d0c84e6ff3754a13b36e44e6163732a26b67bc52ea837ded547dc6"
	},
	{
		"id": "86c261f9899d",
		"ts": "2026-08-10T19:52:56.091Z",
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
		"liquidityUsd": 4061360.13,
		"hash": "86c261f9899d9b67679e203f1888c2ac6a3adaaa047f41d978ae80a64d0e2d53"
	},
	{
		"id": "77c5767aab17",
		"ts": "2026-08-10T19:52:56.335Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 65444.38,
		"hash": "77c5767aab17677585c0fc520d81f2927599697fbce1b59ba59e2901c39cf727"
	},
	{
		"id": "b294fb457dbc",
		"ts": "2026-08-10T19:52:56.564Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2137566.5,
		"hash": "b294fb457dbc5002b2b08fb4d3547201b6caf228d06451fa7972d8f4e21e3ce0"
	},
	{
		"id": "6021b15be732",
		"ts": "2026-08-10T19:52:56.852Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 268053.11,
		"hash": "6021b15be732a011c7fdf08748b0c0bbdf86a225fdceefff0826d95f27ce6754"
	},
	{
		"id": "b897434ee9a1",
		"ts": "2026-08-10T19:52:57.071Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1003048.36,
		"hash": "b897434ee9a1f484208b024c377020222a1d141602b708828029f262f743964d"
	},
	{
		"id": "75f12b26ec33",
		"ts": "2026-08-10T19:52:57.288Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 266450.35,
		"hash": "75f12b26ec33d6c9371c4b8de21c02672f8a1fbaaea7f90f43fe9eda9ebdee15"
	},
	{
		"id": "bc758984ed5e",
		"ts": "2026-08-10T19:52:57.522Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9433593.29,
		"hash": "bc758984ed5ea2780c3f34d5a26439b91670d9beea4d8950d590b8d35ff3d522"
	},
	{
		"id": "d89850925f0d",
		"ts": "2026-08-10T19:52:57.739Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4122459.34,
		"hash": "d89850925f0ddfaffaab64283bc0fba7bb1b84891c1bf68f037cf50f83c6f146"
	},
	{
		"id": "a71accf645d7",
		"ts": "2026-08-10T19:52:57.960Z",
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
		"liquidityUsd": 1274141.55,
		"hash": "a71accf645d75b133b77d572e6c629cf2079a584cbb0fc7153ee189abdb7f6b7"
	},
	{
		"id": "88a9291d279f",
		"ts": "2026-08-10T18:51:55.461Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112771174.4,
		"hash": "88a9291d279fef45296f72a9dbf48e8de2851f49754686ca55434e025c51e413"
	},
	{
		"id": "9bed576dfb61",
		"ts": "2026-08-10T18:51:55.690Z",
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
		"liquidityUsd": 17933012.35,
		"hash": "9bed576dfb61bdbc67a382f07b45513f8d33c7127554b984efcd18f91d312c54"
	},
	{
		"id": "e0296420a1b3",
		"ts": "2026-08-10T18:51:55.942Z",
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
		"liquidityUsd": 1027492.82,
		"hash": "e0296420a1b3c63fde5212d0bb8da904a356e105c7f405d442368b5c045744aa"
	},
	{
		"id": "594bfaaa8a64",
		"ts": "2026-08-10T18:51:56.390Z",
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
		"liquidityUsd": 26702751.43,
		"hash": "594bfaaa8a649c381fe5e32fa2123c93a5201ac4990260b04220e3c9478320f9"
	},
	{
		"id": "b25d38f8b027",
		"ts": "2026-08-10T18:51:56.619Z",
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
		"liquidityUsd": 4302898.23,
		"hash": "b25d38f8b02709173ca08c84857601a6b6e32d91b621b2bbe5fd652e1b7a2f00"
	},
	{
		"id": "6bcc6ff6fda6",
		"ts": "2026-08-10T18:51:56.863Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 922974.45,
		"hash": "6bcc6ff6fda6a85a7789dc8b644de04b3d8b94b4f824c5ddc872185bab1a138c"
	},
	{
		"id": "3a7e1de8e53f",
		"ts": "2026-08-10T18:51:57.092Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26702751.43,
		"hash": "3a7e1de8e53f3ac7e98d44ff3eccbd32396f1655836df51d0923f49f8cdd3509"
	},
	{
		"id": "53430aea6ce8",
		"ts": "2026-08-10T18:51:57.342Z",
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
		"liquidityUsd": 4340347.96,
		"hash": "53430aea6ce8c92c923247afea3070b37e0379d2f61116fd26a0c51dc55594d6"
	},
	{
		"id": "499cb3da2c50",
		"ts": "2026-08-10T18:51:57.568Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 65889.11,
		"hash": "499cb3da2c50452ad148cca9a607061f517284d714aa9cf945518fb18c27cd5d"
	},
	{
		"id": "69dc7ca2b564",
		"ts": "2026-08-10T18:51:57.795Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2181473.49,
		"hash": "69dc7ca2b564a8bfaab85c1732bd94ff541d6050d77073d9c855285d617edc72"
	},
	{
		"id": "a255c45cbf8c",
		"ts": "2026-08-10T18:51:58.014Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 266843.25,
		"hash": "a255c45cbf8c5512a6d43bb7984396f1eac3a3d04c4ae7ca2586cb46a729d539"
	},
	{
		"id": "e2ea4ab1cab8",
		"ts": "2026-08-10T18:51:58.228Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1005279.42,
		"hash": "e2ea4ab1cab8d23f22f70cc7e1ec1c6a9a5e3f5d51797edea68d2b0991b9a6f0"
	},
	{
		"id": "88e00d4678ca",
		"ts": "2026-08-10T18:51:58.464Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 264252.33,
		"hash": "88e00d4678ca52ff177c3e37317e68531e50503114194de86fd5b3d952d81bb1"
	},
	{
		"id": "c47608d9902a",
		"ts": "2026-08-10T18:51:58.676Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9394014.9,
		"hash": "c47608d9902afd187ff878e0fdd8335a01b2a91f63b721b20a528eaa4fa59ff3"
	},
	{
		"id": "13d1e0fa4c58",
		"ts": "2026-08-10T18:51:58.892Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4101163.96,
		"hash": "13d1e0fa4c583b8389a020647583dc983591dc038e9eb19d574ec9523fc79d84"
	},
	{
		"id": "d4cbe2dcb7e0",
		"ts": "2026-08-10T18:51:59.105Z",
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
		"liquidityUsd": 1230169.09,
		"hash": "d4cbe2dcb7e050182df4db0229f6cdedc9ecba37aa6d7912bf94ab08878f5cf3"
	},
	{
		"id": "3213a5187f18",
		"ts": "2026-08-10T17:48:36.446Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112792206.3,
		"hash": "3213a5187f18e17c2f110325c1ec62488c3be5f54738a6810b2915e737d28986"
	},
	{
		"id": "f61230d8ccfe",
		"ts": "2026-08-10T17:48:36.885Z",
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
		"liquidityUsd": 13710931.9,
		"hash": "f61230d8ccfe8d5f79d1a4e142d7e4454b5524943c0e3b3c9774f2d52521f073"
	},
	{
		"id": "7bcd7fe9c0ff",
		"ts": "2026-08-10T17:48:37.131Z",
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
		"liquidityUsd": 1027492.82,
		"hash": "7bcd7fe9c0ff391c48df9e7acaa60004af246265217f69fae384bedd80855921"
	},
	{
		"id": "d049c501c109",
		"ts": "2026-08-10T17:48:37.371Z",
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
		"liquidityUsd": 26703251.69,
		"hash": "d049c501c109b0c179c7e79fea190859d26128ca6005a116282ee8260a73286f"
	},
	{
		"id": "7f805125dce7",
		"ts": "2026-08-10T17:48:37.611Z",
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
		"liquidityUsd": 4313709.95,
		"hash": "7f805125dce79fa59f7e7c62cd50cd451888ddf46ace7cfb499350968fb7bbe4"
	},
	{
		"id": "a1b04b938b71",
		"ts": "2026-08-10T17:48:37.865Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 914421.18,
		"hash": "a1b04b938b71dc7bac269e6a90e3031fb815cc7cf2d377cab083b64b81b627e8"
	},
	{
		"id": "cb3b2ab9afd3",
		"ts": "2026-08-10T17:48:38.106Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26703251.69,
		"hash": "cb3b2ab9afd34a72823665b89943f2c57faf03dfb72755a07180e66e60e28d26"
	},
	{
		"id": "c7d85d299042",
		"ts": "2026-08-10T17:48:38.346Z",
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
		"liquidityUsd": 4345671.32,
		"hash": "c7d85d299042dd9be298d96aa866b3ec004bb948f337463c56b9bb1f5c3a260a"
	},
	{
		"id": "a3f444edd19f",
		"ts": "2026-08-10T17:48:38.607Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 66136.75,
		"hash": "a3f444edd19fce041ffb758226b16674f3e769a508796ed777e9d480dd01ffdf"
	},
	{
		"id": "2c16744cc7bf",
		"ts": "2026-08-10T17:48:38.845Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2119508.41,
		"hash": "2c16744cc7bf2901acb1b89238ade368fb0d6ff35a423cad4565a79a036bd291"
	},
	{
		"id": "838e0ca0c5b2",
		"ts": "2026-08-10T17:48:39.069Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 265214.48,
		"hash": "838e0ca0c5b27375b3618c50c6c31cae03adf50c9e6e31a231399e4e1486a0ec"
	},
	{
		"id": "11494264812b",
		"ts": "2026-08-10T17:48:39.300Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1003913.27,
		"hash": "11494264812bc8cd6504123a66531a631ab60a5bde5c09abf4f3ad1febba6ed6"
	},
	{
		"id": "093c45d9c2cb",
		"ts": "2026-08-10T17:48:39.554Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 245764.12,
		"hash": "093c45d9c2cb7371b80ed68e2662963a4830df25f2049f785993931da76d03f2"
	},
	{
		"id": "9a6bf6679d2c",
		"ts": "2026-08-10T17:48:39.775Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9425544.94,
		"hash": "9a6bf6679d2c9f854045726b589d9b20c8a24446f3713d9d980ef7e640b27f86"
	},
	{
		"id": "e862b85a9c8d",
		"ts": "2026-08-10T17:48:40.000Z",
		"symbol": "EURC",
		"token": "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2245981.24,
		"hash": "e862b85a9c8d05d994592dd153932a3e47af2943b0eb419273d472d541b41f07"
	},
	{
		"id": "9e717afa4208",
		"ts": "2026-08-10T17:48:40.231Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 70303.95,
		"hash": "9e717afa4208b858aa0ee9f2cf3585e602cc3d2c9343d5f557f71c14b61b7581"
	},
	{
		"id": "4b66c9088ae3",
		"ts": "2026-08-10T16:54:12.897Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112728103.93,
		"hash": "4b66c9088ae39d695d1d4d5af7d576f06de9c7447b6a4f2a3260a4871424eb4f"
	},
	{
		"id": "de15e1475328",
		"ts": "2026-08-10T16:54:13.330Z",
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
		"liquidityUsd": 15350717.54,
		"hash": "de15e1475328bbd70f6d5b558c5b64b101bd904d89b76c55b487820820659983"
	},
	{
		"id": "9911008f95a0",
		"ts": "2026-08-10T16:54:13.576Z",
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
		"liquidityUsd": 1030673.4,
		"hash": "9911008f95a08205199c0970394b3a451259d912d7b41a6a7f801e9b97864a84"
	},
	{
		"id": "2bb407343bf4",
		"ts": "2026-08-10T16:54:13.811Z",
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
		"liquidityUsd": 26702206.41,
		"hash": "2bb407343bf4362b0a94b99cb0cdf40a8fe2ed945525db0be20a254f252c53fa"
	},
	{
		"id": "a446f1f825f2",
		"ts": "2026-08-10T16:54:14.052Z",
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
		"liquidityUsd": 4304951.71,
		"hash": "a446f1f825f2108d10873643726e923e25dbc1acf969edc153e9370016804ab2"
	},
	{
		"id": "0b8288641fd3",
		"ts": "2026-08-10T16:54:14.295Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 920950.37,
		"hash": "0b8288641fd3c0569735189964db8156b14b9bd80db6f93b6ee5c15eaa762336"
	},
	{
		"id": "d4d05da546e6",
		"ts": "2026-08-10T16:54:14.532Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26702206.41,
		"hash": "d4d05da546e679341475b79a116aaafa57593faebaa427e55c993a3b4ec41f8e"
	},
	{
		"id": "cb50c56abcee",
		"ts": "2026-08-10T16:54:14.770Z",
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
		"liquidityUsd": 4476131.43,
		"hash": "cb50c56abcee4e9951bdea2ede2f0497ec581448f37f91b05d098a0a8fb2d227"
	},
	{
		"id": "318128b6d075",
		"ts": "2026-08-10T16:54:15.008Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 66311.72,
		"hash": "318128b6d0755a8ba400e398a9657b733b725a656334363af0cf33e6d3da08dc"
	},
	{
		"id": "daaeca2070f8",
		"ts": "2026-08-10T16:54:15.246Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2087644.47,
		"hash": "daaeca2070f88379512d0954ec7de08a0afcb027ccbce3e1e41693f8da53dce3"
	},
	{
		"id": "646fbc7fb218",
		"ts": "2026-08-10T16:54:15.472Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 265148.98,
		"hash": "646fbc7fb218faa9e7ee2259a265a757fbb9cca1bbbc65d67d9b61c175ec7a59"
	},
	{
		"id": "bdc9026e088b",
		"ts": "2026-08-10T16:54:15.693Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1005064.86,
		"hash": "bdc9026e088bf4f4ac951c649293b2a1d394e550521ddaf1a6c35ee07f8883fe"
	},
	{
		"id": "0aebb727cf99",
		"ts": "2026-08-10T16:54:15.915Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 229468.71,
		"hash": "0aebb727cf997ae706f36bdb31b9cc0333bed523fa0908c0abbb96dbb54e977c"
	},
	{
		"id": "56f295f851be",
		"ts": "2026-08-10T16:54:16.153Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9400266.94,
		"hash": "56f295f851be1eaba4a53e4a6afff942776a31196ec0a5335a1a9bc86a2936b2"
	},
	{
		"id": "4af3827489e7",
		"ts": "2026-08-10T16:54:16.378Z",
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
		"liquidityUsd": 1309350.29,
		"hash": "4af3827489e79cb8ccac330f6a6d5de38a52f371d4cfcb38881c56cce5423a37"
	},
	{
		"id": "157d84bfa831",
		"ts": "2026-08-10T16:54:16.598Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4117463.27,
		"hash": "157d84bfa8314d5f234621ce189e3879b9005ce7d89398e2a5595c35942249db"
	},
	{
		"id": "0d5c71d3478b",
		"ts": "2026-08-10T15:57:08.601Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112789926.14,
		"hash": "0d5c71d3478b51a8bfc87e6a0a81fa63fd37daa7df390bc3508ac69947b63067"
	},
	{
		"id": "0b30e241e9c6",
		"ts": "2026-08-10T15:57:09.026Z",
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
		"liquidityUsd": 13353555.81,
		"hash": "0b30e241e9c68b4ee5a474923dc8a59814df84de21b34c622dd44e7fee82594a"
	},
	{
		"id": "e038f30d677c",
		"ts": "2026-08-10T15:57:09.239Z",
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
		"liquidityUsd": 1031144.63,
		"hash": "e038f30d677ccafd45047a04836c9cf2f71da72d9c24453c6ab7ee9ea6f3787e"
	},
	{
		"id": "0c70bfcc4530",
		"ts": "2026-08-10T15:57:09.499Z",
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
		"liquidityUsd": 26691405.32,
		"hash": "0c70bfcc45301e68a96d8cbc40aa80ea6c8932f7a969cbc261fcf8193a2def03"
	},
	{
		"id": "c0bdbf51dada",
		"ts": "2026-08-10T15:57:09.748Z",
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
		"liquidityUsd": 4314631.43,
		"hash": "c0bdbf51dada5da28d0fa29eae6aca4bcfdfd0aa931cac6d43af06a34fac14b7"
	},
	{
		"id": "084c2163086a",
		"ts": "2026-08-10T15:57:09.946Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 936140.73,
		"hash": "084c2163086a55924d59f7f15f89455c973a49382099a341b0b6ad7f8a5cb801"
	},
	{
		"id": "88bb81d87c6e",
		"ts": "2026-08-10T15:57:10.225Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26691405.32,
		"hash": "88bb81d87c6eb414a9d877ffefed0be90320cc084ce333cec5e7412088ea7333"
	},
	{
		"id": "c5a9c98f5648",
		"ts": "2026-08-10T15:57:10.451Z",
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
		"liquidityUsd": 4824984.28,
		"hash": "c5a9c98f5648c09014ce23b14e7138d221a093fa70fdadee7673b4ec17d6a43c"
	},
	{
		"id": "6f783fd2e8e2",
		"ts": "2026-08-10T15:57:10.650Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 66180.64,
		"hash": "6f783fd2e8e2d7a54db077cbb4d24639449f4295a2dac3510b807a7044851113"
	},
	{
		"id": "ef2a749588b9",
		"ts": "2026-08-10T15:57:10.861Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2085205.6,
		"hash": "ef2a749588b973cf583f7291e26171e589d86d96adb9aa78e1c360c8ed0869f0"
	},
	{
		"id": "053f7fc26227",
		"ts": "2026-08-10T15:57:11.061Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 265098.48,
		"hash": "053f7fc26227cfa3eae1240b24e8d1a340abcba4a67034b37c4e6476d559396b"
	},
	{
		"id": "92a7432e3da2",
		"ts": "2026-08-10T15:57:11.274Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 998217.9,
		"hash": "92a7432e3da28a4694490527a60c2020a0fdf271c49b90499fccd595bea0feb6"
	},
	{
		"id": "084f50160e7b",
		"ts": "2026-08-10T15:57:11.472Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 234134.08,
		"hash": "084f50160e7b578b7f3e46805a123514157f9b58de7c61995fd9c071c1ec797a"
	},
	{
		"id": "10f0f24f473b",
		"ts": "2026-08-10T15:57:11.703Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9417433.64,
		"hash": "10f0f24f473b599767356cae65681a84b754eb419ebb19da057a6be4b7c47997"
	},
	{
		"id": "755e3c7a62bc",
		"ts": "2026-08-10T15:57:11.926Z",
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
		"liquidityUsd": 1306055.97,
		"hash": "755e3c7a62bcce3ba8a96bf1f377a56df5b1c124e1d2f7772940cdc46b3b574b"
	},
	{
		"id": "cc6dbaea3ee7",
		"ts": "2026-08-10T15:57:12.136Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4136657.72,
		"hash": "cc6dbaea3ee70dc987b35d6c14a61fc74999cd920d6731203ebba42a6a919dd6"
	},
	{
		"id": "4dddc2cdee24",
		"ts": "2026-08-10T14:21:44.619Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114599100,
		"hash": "4dddc2cdee24f7bbe625619e1657740ca5456f7f080035fb059fa59a441eaabf"
	},
	{
		"id": "252fd63d6245",
		"ts": "2026-08-10T14:21:44.852Z",
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
		"liquidityUsd": 14368834.9,
		"hash": "252fd63d624500839b19044e63e94826331556973bdc135e62b08bfb53fc727b"
	},
	{
		"id": "19d963c2f05e",
		"ts": "2026-08-10T14:21:45.395Z",
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
		"liquidityUsd": 1047930.17,
		"hash": "19d963c2f05e03d43b7adf12ce536355404f40d68f38c9eb9a058adb14ba081e"
	},
	{
		"id": "6541924b5b41",
		"ts": "2026-08-10T14:21:45.590Z",
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
		"liquidityUsd": 26857668.08,
		"hash": "6541924b5b419787d98c357822eed81c44dd694dc9d6425a05486c0e22585612"
	},
	{
		"id": "2018492e3bd2",
		"ts": "2026-08-10T14:21:46.094Z",
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
		"liquidityUsd": 4360829.77,
		"hash": "2018492e3bd26a6cc5e27aa223c8f4ebae637c4cee3dad0e8f688956a632f9c7"
	},
	{
		"id": "4dbf04246502",
		"ts": "2026-08-10T14:21:46.286Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 936148.76,
		"hash": "4dbf04246502ae3ff4022e6ad95659979d4abf1f1202fb0f12b21f0c39c0ac2d"
	},
	{
		"id": "37960f60864e",
		"ts": "2026-08-10T14:21:46.756Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26857668.08,
		"hash": "37960f60864ee6322eee7647b4f68083a04fc89d6115865e5d4dbfb3408c97ea"
	},
	{
		"id": "9111c45d7074",
		"ts": "2026-08-10T14:21:46.953Z",
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
		"liquidityUsd": 4883502.76,
		"hash": "9111c45d7074c589b024bae9a829140769da465cff501e30a0c456b9a8a2b772"
	},
	{
		"id": "36618495e023",
		"ts": "2026-08-10T14:21:47.326Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 67918.18,
		"hash": "36618495e0232f22da1f7361e5529075d4decae41beb296ab2b62092d4a76fee"
	},
	{
		"id": "edca9fb6dc5a",
		"ts": "2026-08-10T14:21:47.535Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 14,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.72,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 276091.67,
		"hash": "edca9fb6dc5a95cf283d46a7cea64cccd7e8dcc3924adc5ac3ed5092e600c702"
	},
	{
		"id": "ba37e3afcc93",
		"ts": "2026-08-10T14:21:48.150Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2067266.32,
		"hash": "ba37e3afcc93aa2d1df96dd95d683d961b1607a950066e36239b4f2b73b7af6f"
	},
	{
		"id": "e02320804c21",
		"ts": "2026-08-10T14:21:48.338Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 992037.57,
		"hash": "e02320804c21e0bf542481fd4d43afd8c147681b9e3bbef6e10a26663baf04ef"
	},
	{
		"id": "0782b2384d8f",
		"ts": "2026-08-10T14:21:48.604Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 207554.07,
		"hash": "0782b2384d8fb39315a37fd0f0a1d4b91a70a769a766dec67b496e26af4a3510"
	},
	{
		"id": "9f303b964ce8",
		"ts": "2026-08-10T14:21:48.796Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9538918.21,
		"hash": "9f303b964ce86eb8b566ad41e2a6996ede3367b9f581a16e11b0e41746c26496"
	},
	{
		"id": "08247728013e",
		"ts": "2026-08-10T14:21:49.220Z",
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
		"liquidityUsd": 1338348.19,
		"hash": "08247728013e766e99078ee6102ffb932a962c5fcd67f2e8e6bbc013607305c2"
	},
	{
		"id": "8d6165f56313",
		"ts": "2026-08-10T14:21:49.418Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4188200.94,
		"hash": "8d6165f56313f01a1e0f8f7e2118f4849478df68232d7dedadcb70d43754c9c5"
	}
]
