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
	"updatedAt": "2026-08-12T06:10:42.782Z",
	"tokensScored": 9347,
	"verdictsIssued": 9347,
	"safe": 8147,
	"risky": 691,
	"likelyRug": 509,
	"ticks": 566
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "dc33175571fd",
		"ts": "2026-08-12T06:10:39.172Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112173154.98,
		"hash": "dc33175571fdcd7277161579a3445b56f52b29c9e0a6c7c2d9a30b160120422f"
	},
	{
		"id": "70622aa314ac",
		"ts": "2026-08-12T06:10:39.407Z",
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
		"liquidityUsd": 19074499.65,
		"hash": "70622aa314ac414cb6ac284eeb6fa3579a63b2cb188189ea8bdc34bd77a4b437"
	},
	{
		"id": "6ace5a2d27c0",
		"ts": "2026-08-12T06:10:39.609Z",
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
		"liquidityUsd": 995725.51,
		"hash": "6ace5a2d27c0e0938d5e41fa9e0b954f9fd3b0349404f92df105e042809f360f"
	},
	{
		"id": "3e77e978a442",
		"ts": "2026-08-12T06:10:39.815Z",
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
		"liquidityUsd": 26871547.66,
		"hash": "3e77e978a44286f8133f361ac369941ce5c639aa13f8fc8bdad5e81076a4db78"
	},
	{
		"id": "cce28cdca6f5",
		"ts": "2026-08-12T06:10:40.013Z",
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
		"liquidityUsd": 4103068.95,
		"hash": "cce28cdca6f534a58be75f07ed33cf18f94fee19be66ebb02961216344c9e522"
	},
	{
		"id": "67c86be59662",
		"ts": "2026-08-12T06:10:40.230Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 916493.44,
		"hash": "67c86be59662850dcd6f530231b14126674dd3329a6cb6cee705cdb80caa2ba8"
	},
	{
		"id": "03e15c3c8ac3",
		"ts": "2026-08-12T06:10:40.447Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26871547.66,
		"hash": "03e15c3c8ac31c5be99e292bf8ecb7bf1aa1099b844b3326fca6197ad6338fce"
	},
	{
		"id": "2eee596f5a23",
		"ts": "2026-08-12T06:10:40.646Z",
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
		"liquidityUsd": 4457710.36,
		"hash": "2eee596f5a23e6877568d6b07d8ef5bb6526343dded2f21cb6a7e6ef41f12515"
	},
	{
		"id": "c3d60b6a2eea",
		"ts": "2026-08-12T06:10:40.847Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3828194.25,
		"hash": "c3d60b6a2eea8f6dc68b4f2ced59fb98a6cbf51dbceebec48884979468c1e90b"
	},
	{
		"id": "b61076bead44",
		"ts": "2026-08-12T06:10:41.048Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 952904.65,
		"hash": "b61076bead4479578455ea9ed10d9e8688ed73326f5258faf95d0e35cd597734"
	},
	{
		"id": "50e31113b849",
		"ts": "2026-08-12T06:10:41.394Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2203062.57,
		"hash": "50e31113b8496eca431f8835ceacdca7e3fd720b275c778fc2d37d2e091ad4a1"
	},
	{
		"id": "10992b3f4a84",
		"ts": "2026-08-12T06:10:41.625Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1841895.2,
		"hash": "10992b3f4a84eec7966b1b6d260837ff81547074081430c0dc41f00a11ae3da9"
	},
	{
		"id": "5d77692789cf",
		"ts": "2026-08-12T06:10:41.806Z",
		"symbol": "noice",
		"token": "0x9Cb41FD9dC6891BAe8187029461bfAADF6CC0C69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 231215.25,
		"hash": "5d77692789cf7d251798cf1c60f69874f605eab884a6dc944f31d548fd88250e"
	},
	{
		"id": "ab1637f5d5bd",
		"ts": "2026-08-12T06:10:41.991Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9475739.63,
		"hash": "ab1637f5d5bd3a04a9610491333c4405da7ba4267f13a0d6251550e6bf2c6db2"
	},
	{
		"id": "a76b6d81d8b7",
		"ts": "2026-08-12T06:10:42.192Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 707531.5,
		"hash": "a76b6d81d8b7ef28f6fdd151c3705f58dc8b78d35b902b1715dc1897e8a9130e"
	},
	{
		"id": "dade3495d555",
		"ts": "2026-08-12T06:10:42.395Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4375506.34,
		"hash": "dade3495d55539adbf3fe06551fe60a57aba0355897aec0b1db06a56205d1e5c"
	},
	{
		"id": "d46fa1a48438",
		"ts": "2026-08-12T06:10:42.577Z",
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
		"liquidityUsd": 257432.11,
		"hash": "d46fa1a4843825aab489665bcf7ffffc5ea8acc396d90548bf9f85e4304d36c2"
	},
	{
		"id": "fb814a23e130",
		"ts": "2026-08-12T06:10:42.782Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 826595.57,
		"hash": "fb814a23e13036f393141c48046b6aff4fda13bf4aebe82c033439110c82aa07"
	},
	{
		"id": "c692e9d8f218",
		"ts": "2026-08-12T04:03:39.253Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112027015.45,
		"hash": "c692e9d8f218527999fe9ec1b0cbfa7ad0bebced77c002a7eb866895c5e76f91"
	},
	{
		"id": "eeb5dc6a8f40",
		"ts": "2026-08-12T04:03:39.697Z",
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
		"liquidityUsd": 19583239.24,
		"hash": "eeb5dc6a8f406bdaa93ed6d4843a900193a8804ac51477a7553720fe83098ca9"
	},
	{
		"id": "e4a86ec3f2d3",
		"ts": "2026-08-12T04:03:39.940Z",
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
		"liquidityUsd": 993934.19,
		"hash": "e4a86ec3f2d3a33fbe1a41ff9904129a62c4fe0da7002ded14249996e2f17c54"
	},
	{
		"id": "62d597812c4d",
		"ts": "2026-08-12T04:03:40.169Z",
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
		"liquidityUsd": 26852443.88,
		"hash": "62d597812c4d4afbefc1d6d114cf45fbc5ff84d6c0c6fbbb858bea958417e3f8"
	},
	{
		"id": "9420a5f6d7f2",
		"ts": "2026-08-12T04:03:40.403Z",
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
		"liquidityUsd": 4087735.47,
		"hash": "9420a5f6d7f2fc739a65eb50eab6d4c0636e171d90171ddb9accb21f72c79030"
	},
	{
		"id": "1de272a495b0",
		"ts": "2026-08-12T04:03:40.690Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 917001.29,
		"hash": "1de272a495b063ca99b74a067763b466adaad22951b517ed83df646297ffd6c2"
	},
	{
		"id": "7262c33e0675",
		"ts": "2026-08-12T04:03:40.936Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26852443.88,
		"hash": "7262c33e0675dfda6996df58225355b5e08ece1ef642bef2f16a3f83bbda4b40"
	},
	{
		"id": "8d7e00f41d90",
		"ts": "2026-08-12T04:03:41.185Z",
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
		"liquidityUsd": 4454440.59,
		"hash": "8d7e00f41d90e346cf34aaf7c5642e750ef9aba6c77129b1ea58eb0c81bdc50b"
	},
	{
		"id": "cd7937b26bb3",
		"ts": "2026-08-12T04:03:41.423Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3831025.01,
		"hash": "cd7937b26bb3a611d3ebd48063262a3b2afe7031162862099964223bfccba180"
	},
	{
		"id": "5f7964e4a662",
		"ts": "2026-08-12T04:03:41.680Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 948797.96,
		"hash": "5f7964e4a662dca780ffd0f21acbd12ae2a28dbf2b77c5a10f1a2cfe95ff5b0d"
	},
	{
		"id": "695dbda9a67d",
		"ts": "2026-08-12T04:03:42.104Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2268584.68,
		"hash": "695dbda9a67d133deffe10b8cc5ea8bd6cb967bc593c878699e1056bc227a5f9"
	},
	{
		"id": "5a158197ec71",
		"ts": "2026-08-12T04:03:42.323Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1838964.37,
		"hash": "5a158197ec7157a8dd9d0101cc84e10df7c6668d2211ef8ab87fdededd8792b5"
	},
	{
		"id": "bca631d79e6c",
		"ts": "2026-08-12T04:03:42.536Z",
		"symbol": "noice",
		"token": "0x9Cb41FD9dC6891BAe8187029461bfAADF6CC0C69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 231182.38,
		"hash": "bca631d79e6c299b85af9de4a86c9600d8af1c7694f0fd359aedd56aedcd549e"
	},
	{
		"id": "363ccc8c1a96",
		"ts": "2026-08-12T04:03:42.756Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 728545.57,
		"hash": "363ccc8c1a9602ea665b8133bedbfa4ac30b24f056b57bcbc8bb178a7604a7db"
	},
	{
		"id": "115212f5b81b",
		"ts": "2026-08-12T04:03:42.977Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4352333.48,
		"hash": "115212f5b81b30c51823efdc97fba13de80c8bd9232fc87725dcbc364fe51bbf"
	},
	{
		"id": "d70215730b70",
		"ts": "2026-08-12T04:03:43.190Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9331842.28,
		"hash": "d70215730b70013cc53714f54f855aafe2f95c47880c44730206782f42e10bb7"
	},
	{
		"id": "b45983907945",
		"ts": "2026-08-12T04:03:43.410Z",
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
		"liquidityUsd": 261046.87,
		"hash": "b45983907945b40ef9b8423b4bc473fee2c7478663dff8c7fbca96b098e22c1a"
	},
	{
		"id": "2c85b4d0325a",
		"ts": "2026-08-12T04:03:43.630Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 826938.66,
		"hash": "2c85b4d0325a7da311c0dc92fa562a837f414ab9462f97ab86b77dc30b7a2748"
	},
	{
		"id": "06de6d156b30",
		"ts": "2026-08-12T04:03:43.843Z",
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
		"liquidityUsd": 1208277.58,
		"hash": "06de6d156b30a9625c05008592c8785130232aee64555cc915dfb2792a6cc007"
	},
	{
		"id": "9baae2c654ff",
		"ts": "2026-08-12T01:37:49.097Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112045418.35,
		"hash": "9baae2c654ff6447cec653674780a876ae70746e6924a091f6e0b49b401730fa"
	},
	{
		"id": "5cb4109ab6d2",
		"ts": "2026-08-12T01:37:49.537Z",
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
		"liquidityUsd": 18490853.75,
		"hash": "5cb4109ab6d2dc90ba1ac066b6cb5e8c9a84639293d279a92a7774d469272384"
	},
	{
		"id": "8b7b1ed90df4",
		"ts": "2026-08-12T01:37:49.777Z",
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
		"liquidityUsd": 992570.39,
		"hash": "8b7b1ed90df4c4ed20d486834d16c71432f0db268078c538a9c04e9a9d0f2cc5"
	},
	{
		"id": "f1fd4fd0f801",
		"ts": "2026-08-12T01:37:50.206Z",
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
		"liquidityUsd": 26823330.37,
		"hash": "f1fd4fd0f80189fe0e30f747a7579c4c0a0fc404b1689acdf61788483022ec41"
	},
	{
		"id": "a5f2dea0f770",
		"ts": "2026-08-12T01:37:50.463Z",
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
		"liquidityUsd": 4078706.93,
		"hash": "a5f2dea0f7700a1861373b7a5b9a4c3e324957daac2621a1ba42ed428e25dfa2"
	},
	{
		"id": "a28028a68fae",
		"ts": "2026-08-12T01:37:50.891Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 917001.29,
		"hash": "a28028a68faef98e195f42cfc407f9938b43fd977a07eb50c671617b7bffae7a"
	},
	{
		"id": "c591cc7ea6e2",
		"ts": "2026-08-12T01:37:51.143Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26823330.37,
		"hash": "c591cc7ea6e24f1533a22b000e16d114f7ab44be1efe3ec9111c2a1766dcac5b"
	},
	{
		"id": "f96d56c7968e",
		"ts": "2026-08-12T01:37:51.403Z",
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
		"liquidityUsd": 4440796.6,
		"hash": "f96d56c7968e1e8c5ff3bdf02b1daefb03b1ff95e78ee26c129b22533af33d31"
	},
	{
		"id": "9874da1db778",
		"ts": "2026-08-12T01:37:51.632Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4006103.81,
		"hash": "9874da1db778a4c10e69fca51ead251e531dff7c9a169522bf765714d887b0df"
	},
	{
		"id": "b6213d55f2b7",
		"ts": "2026-08-12T01:37:51.868Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 972942.58,
		"hash": "b6213d55f2b77ebb03a4dd446532ab5f89d1cfdba3c9923aae735990e6df90ae"
	},
	{
		"id": "33caf095a6c4",
		"ts": "2026-08-12T01:37:52.092Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2187823.77,
		"hash": "33caf095a6c409ed8b8b5fe016e6e98045a0700f842cb3c50f985c56f6aa0669"
	},
	{
		"id": "bbeed4a1e61c",
		"ts": "2026-08-12T01:37:52.308Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1834379.66,
		"hash": "bbeed4a1e61c420de92e4f8937d37d6e00d12ec30311fcd2d601a96bdf8d6e99"
	},
	{
		"id": "e5db9244ef9d",
		"ts": "2026-08-12T01:37:52.529Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 719793.86,
		"hash": "e5db9244ef9d874cd27e35d4796eddd1b00d6a766f8ca543f2f33b31c7f09ce7"
	},
	{
		"id": "2bd491fa249b",
		"ts": "2026-08-12T01:37:52.752Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4336899.69,
		"hash": "2bd491fa249bca4fa300dd958d1b43d4d3b393532d9b589c42a4b5370004411d"
	},
	{
		"id": "774f8f9604d4",
		"ts": "2026-08-12T01:37:52.973Z",
		"symbol": "noice",
		"token": "0x9Cb41FD9dC6891BAe8187029461bfAADF6CC0C69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 236740.67,
		"hash": "774f8f9604d45e81ea8b1b801c96b13ba15f55c21a2e486e2fb18478d98226cf"
	},
	{
		"id": "6726709618d0",
		"ts": "2026-08-12T01:37:53.263Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9295613.93,
		"hash": "6726709618d079f26e3ba5f53aedac204e5270cea263c692030fde5d3e242bb4"
	},
	{
		"id": "644ffc533269",
		"ts": "2026-08-12T01:37:53.486Z",
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
		"liquidityUsd": 257404.02,
		"hash": "644ffc533269446fdc9a947cd660f3427d4ca15d1712e5bf2c9814e07ada255e"
	},
	{
		"id": "2ed66484e1fe",
		"ts": "2026-08-12T01:37:53.707Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 825828.41,
		"hash": "2ed66484e1fe451c83c2d5529d1ce222d907db985fc1099b26eef55ab8973cdf"
	},
	{
		"id": "1bc22661b55e",
		"ts": "2026-08-12T01:37:53.922Z",
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
		"liquidityUsd": 1208697.81,
		"hash": "1bc22661b55e0c0b704e194dac10172d1b9316f99c331a8addc5c4f2306847b7"
	},
	{
		"id": "cf6309a39d45",
		"ts": "2026-08-11T23:35:26.158Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112088443.28,
		"hash": "cf6309a39d4504da6727f6981899b2eb2b2968cd74b215d31acc471b01e0ed49"
	},
	{
		"id": "ccaf110fb597",
		"ts": "2026-08-11T23:35:26.484Z",
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
		"liquidityUsd": 18232190.05,
		"hash": "ccaf110fb597cf1d6416acba9146df852d7be90a075fdcf0385a86a796497891"
	},
	{
		"id": "6125aeddc65b",
		"ts": "2026-08-11T23:35:26.679Z",
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
		"liquidityUsd": 995366.7,
		"hash": "6125aeddc65b03f312784ce974392deb937baed6943db283090c7e74bb8ab103"
	},
	{
		"id": "f368309a12e9",
		"ts": "2026-08-11T23:35:26.994Z",
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
		"liquidityUsd": 26821601.18,
		"hash": "f368309a12e94658a8d0582eb2f6fc732ba83263f26cbb9e9b17ba7512102cd2"
	},
	{
		"id": "499914145f8a",
		"ts": "2026-08-11T23:35:27.193Z",
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
		"liquidityUsd": 4071451.91,
		"hash": "499914145f8a691aebbbf548b79bcfdb7f11d2598030351198a9d16bd2238440"
	},
	{
		"id": "6b5653d600e0",
		"ts": "2026-08-11T23:35:27.373Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 907197.44,
		"hash": "6b5653d600e0eea921b91e909c8e6c7c88c5043929dadd9db25f8308d078d5d9"
	},
	{
		"id": "99682e8efb4e",
		"ts": "2026-08-11T23:35:27.566Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26821601.18,
		"hash": "99682e8efb4e0ecc42ba5613618e743f67a78b3927ad5210c89544796d15e35b"
	},
	{
		"id": "5784d8d5592a",
		"ts": "2026-08-11T23:35:27.769Z",
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
		"liquidityUsd": 4440252.5,
		"hash": "5784d8d5592a3d6e567feed87f9773ed62839b626d1d1ce3dd8bdb0d31edd479"
	},
	{
		"id": "8b226bf15ab5",
		"ts": "2026-08-11T23:35:27.958Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4010886.22,
		"hash": "8b226bf15ab592110602a6ac96207917d22d09f93fa2b7ac3da15b5e1e69ce22"
	},
	{
		"id": "f7051a388f23",
		"ts": "2026-08-11T23:35:28.171Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 974738.78,
		"hash": "f7051a388f23f98e3f52546dcc72b93e83a99cd73880550c99406ce442860e7c"
	},
	{
		"id": "0bde3fcb9edb",
		"ts": "2026-08-11T23:35:28.376Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2149695.55,
		"hash": "0bde3fcb9edb2987dd9fe46dbdbd862af00efd35deb220da7b720ee7bf795e7a"
	},
	{
		"id": "c581730ef17a",
		"ts": "2026-08-11T23:35:28.573Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9253052.07,
		"hash": "c581730ef17a8542cd59fc2852c39925b0295263126a206d7045928670a5ba06"
	},
	{
		"id": "ca470075c205",
		"ts": "2026-08-11T23:35:28.769Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1830541.1,
		"hash": "ca470075c2052b1e6998dadaf6229c53ac102cfa747fe1d2fe17908165f5caea"
	},
	{
		"id": "5987aab0a6c7",
		"ts": "2026-08-11T23:35:28.960Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 716927.75,
		"hash": "5987aab0a6c73bcc1a891c76adb3572a7651c73ba36884492ef7faa7c17be4d5"
	},
	{
		"id": "8747dbac898f",
		"ts": "2026-08-11T23:35:29.154Z",
		"symbol": "noice",
		"token": "0x9Cb41FD9dC6891BAe8187029461bfAADF6CC0C69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 231190.01,
		"hash": "8747dbac898f0c39b03fb23844c850b9e26f633f9c288f024e4d6290a49c29b6"
	},
	{
		"id": "d612d977e842",
		"ts": "2026-08-11T23:35:29.346Z",
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
		"liquidityUsd": 251280.84,
		"hash": "d612d977e84265bce5e201bae69998a85087fd313b0cee0e5f96135f0dfb18eb"
	},
	{
		"id": "cea7f01fc27c",
		"ts": "2026-08-11T23:35:29.570Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 824522.2,
		"hash": "cea7f01fc27c59096ea86b1d1b966f40a0cf0d5bdd93dab22c5d83f4218fd560"
	},
	{
		"id": "7474449b2fcf",
		"ts": "2026-08-11T23:35:29.775Z",
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
		"liquidityUsd": 1204053.24,
		"hash": "7474449b2fcfc8adfedd63b02c3fa66b781e2c6c9134ed5d33e135204bbe0514"
	},
	{
		"id": "778caeda3820",
		"ts": "2026-08-11T22:37:12.341Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112085809.78,
		"hash": "778caeda382034852602ff2309e3de282d3eff736ce76233c939e91faf6f373e"
	},
	{
		"id": "7d91f5157d80",
		"ts": "2026-08-11T22:37:12.713Z",
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
		"liquidityUsd": 18056325.81,
		"hash": "7d91f5157d80e1a85a5d08e51f1f7907c7d6a2b1990f14d89460f5c331a475fb"
	},
	{
		"id": "7fa21deebf53",
		"ts": "2026-08-11T22:37:13.047Z",
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
		"liquidityUsd": 996915.24,
		"hash": "7fa21deebf5344bb174516d8aefb730daca3fcfb7aac29514f97c473b27cda4d"
	},
	{
		"id": "1234a9df9f17",
		"ts": "2026-08-11T22:37:13.378Z",
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
		"liquidityUsd": 26822578.18,
		"hash": "1234a9df9f177584a3f634547f33c2ed4a7c5420ff689a3af90d0f079d3318e6"
	},
	{
		"id": "42b6e156ef8d",
		"ts": "2026-08-11T22:37:13.573Z",
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
		"liquidityUsd": 4083109.56,
		"hash": "42b6e156ef8d1f28b86931a31b3a1b3d1afc2a974f6f9075c5c5a1d799983570"
	},
	{
		"id": "05681a73bce6",
		"ts": "2026-08-11T22:37:13.769Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 910124.81,
		"hash": "05681a73bce66cb4a63694e7ad00cbe9d6ec51ed13894b521f220393b49bb26b"
	},
	{
		"id": "b1f7fa6508ad",
		"ts": "2026-08-11T22:37:13.952Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26822578.18,
		"hash": "b1f7fa6508ad4bf8ee93531bd5827014122935f1f608ec8229e9937e8eca691d"
	},
	{
		"id": "491a8acad73a",
		"ts": "2026-08-11T22:37:14.303Z",
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
		"liquidityUsd": 4482571.93,
		"hash": "491a8acad73a36657b3adf36dd4d07bc73d602339029519a765935e2b65a83af"
	},
	{
		"id": "c1c76dd6fb88",
		"ts": "2026-08-11T22:37:14.490Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3958373.29,
		"hash": "c1c76dd6fb88e436bcec8528bd4a5c36fdfde06c7dede8a0f42cd6a536129218"
	},
	{
		"id": "75f4fe8ce76e",
		"ts": "2026-08-11T22:37:14.700Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 969955.13,
		"hash": "75f4fe8ce76e5278da51542457d1367294d201489006d33635944570b5c34e04"
	},
	{
		"id": "95ed02a4fdd3",
		"ts": "2026-08-11T22:37:14.897Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2157727.22,
		"hash": "95ed02a4fdd3adf521fcabab6eb7c0344c108f6a15ccf2f2e60090a15009e6b6"
	},
	{
		"id": "3e531d982a92",
		"ts": "2026-08-11T22:37:15.097Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9258492.33,
		"hash": "3e531d982a922da189f4cc3f8858a0ce1815563151d60e03ba84307b06cf4c6a"
	},
	{
		"id": "98cd1618f843",
		"ts": "2026-08-11T22:37:15.301Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1837008.05,
		"hash": "98cd1618f843513185ddfc5edb64a44d80a4126513bac1223816b987491c0ac9"
	},
	{
		"id": "dc8d55f11b53",
		"ts": "2026-08-11T22:37:15.491Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 716248.29,
		"hash": "dc8d55f11b53d3a87f6b382d313694600a005ec09839e8046ab418aba7fe9e2a"
	},
	{
		"id": "1e5d435e8e5e",
		"ts": "2026-08-11T22:37:15.691Z",
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
		"liquidityUsd": 252474.23,
		"hash": "1e5d435e8e5e2b385ec79f24142823ac2c0e73028b6254703615fb5457eb3cec"
	},
	{
		"id": "ea4bba6f5443",
		"ts": "2026-08-11T22:37:15.890Z",
		"symbol": "noice",
		"token": "0x9Cb41FD9dC6891BAe8187029461bfAADF6CC0C69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 224376.86,
		"hash": "ea4bba6f5443d0a697db9b7106d9b818aa09769bc67de066f92378a87fe9ec6b"
	},
	{
		"id": "0b4128a24ea7",
		"ts": "2026-08-11T22:37:16.093Z",
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
		"liquidityUsd": 1201863.74,
		"hash": "0b4128a24ea7aead9feb0d946df7d9319c0bd1458ce3323b1ae055c344a4cfa4"
	},
	{
		"id": "9f10fc090c96",
		"ts": "2026-08-11T22:37:16.323Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 72771.8,
		"hash": "9f10fc090c96c843d55b06a7b2c4202f2c9204b348fb002b93df510cc5f6475a"
	},
	{
		"id": "438a04cddb76",
		"ts": "2026-08-11T21:41:28.508Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112009835.08,
		"hash": "438a04cddb76eeea8646329ec362d82fe09348ba3ec5aa526a4d0e0bd3ab5ae5"
	},
	{
		"id": "467cb39141d5",
		"ts": "2026-08-11T21:41:28.897Z",
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
		"liquidityUsd": 18034576.6,
		"hash": "467cb39141d534c8227e2d10ad75519cc1e7678e68ffa1e85fc5002a97936c9f"
	},
	{
		"id": "6c9e24e30720",
		"ts": "2026-08-11T21:41:29.255Z",
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
		"liquidityUsd": 1021808.74,
		"hash": "6c9e24e3072043928393e3c30a7c7cbbdb79be387967dc214d3a00a6c1a93439"
	},
	{
		"id": "cf0f97b151ae",
		"ts": "2026-08-11T21:41:29.465Z",
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
		"liquidityUsd": 26865048.04,
		"hash": "cf0f97b151ae34bd4ffb637003926e175402a6ecef191a18c635fe4ea0e76694"
	},
	{
		"id": "e55ca0535b59",
		"ts": "2026-08-11T21:41:29.826Z",
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
		"liquidityUsd": 4050746.89,
		"hash": "e55ca0535b59e14afd72e5e06e5b1e574ddd781b508d51c67435b386413cacb5"
	},
	{
		"id": "dcf1d05ce0ae",
		"ts": "2026-08-11T21:41:30.036Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 904051.78,
		"hash": "dcf1d05ce0ae78bafb6de61c5a9960b41c5f597d15ff6248dd65dc2ad3298de8"
	},
	{
		"id": "aadc77ab466f",
		"ts": "2026-08-11T21:41:30.234Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26865048.04,
		"hash": "aadc77ab466fa343962347a5f5b940dcae8616cff4c2c501266a3e07c1b0bdee"
	},
	{
		"id": "b91e6e4cc702",
		"ts": "2026-08-11T21:41:30.445Z",
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
		"liquidityUsd": 4475646.22,
		"hash": "b91e6e4cc702b6ab7901fc5a2a1c5be5b01a9f2c257555e46f08bff0f6b9a2ab"
	},
	{
		"id": "6e9be7c955e3",
		"ts": "2026-08-11T21:41:30.651Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3967292.45,
		"hash": "6e9be7c955e3f1821ba60242082a3ece9c31f8bda92b9c864aad43c1c769b733"
	},
	{
		"id": "e384b9549965",
		"ts": "2026-08-11T21:41:30.855Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 968067.75,
		"hash": "e384b954996585f30e25fc48f8ad0ef15fed0fb6c98fcb2eda1ad88fe68e7eb8"
	},
	{
		"id": "85441469f2e2",
		"ts": "2026-08-11T21:41:31.065Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2138361.62,
		"hash": "85441469f2e2aa7dfe9ff0419be3e1945ad8a7cafc0d44d29e740444780d14ec"
	},
	{
		"id": "051a5ab09fad",
		"ts": "2026-08-11T21:41:31.258Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9246248.55,
		"hash": "051a5ab09fad6ade961c8a72815031f2718209952c7b503c87f94df92f123deb"
	},
	{
		"id": "3bf39476d5b4",
		"ts": "2026-08-11T21:41:31.597Z",
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
		"liquidityUsd": 251826.03,
		"hash": "3bf39476d5b4b991c9cac36a1b31352d30079d6adb1a7dddd5cd3a6d99391433"
	},
	{
		"id": "212dd069bc51",
		"ts": "2026-08-11T21:41:31.783Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1828902.67,
		"hash": "212dd069bc51b78c2e9d2dfe4b17fc7334792774e340ce5e5f46de43ee856bdc"
	},
	{
		"id": "72a9460b8d1e",
		"ts": "2026-08-11T21:41:31.981Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 735673.99,
		"hash": "72a9460b8d1ea6f6fee996cc1b3085dba900f7deed9361381732a3afd58ea59b"
	},
	{
		"id": "deb8442ac499",
		"ts": "2026-08-11T21:41:32.179Z",
		"symbol": "noice",
		"token": "0x9Cb41FD9dC6891BAe8187029461bfAADF6CC0C69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 229214.22,
		"hash": "deb8442ac499f82a401a315e5557c0b4cd6093b5b3bb1b98ae6be6aaeb80dbbb"
	},
	{
		"id": "8e9adbbfd983",
		"ts": "2026-08-11T21:41:32.365Z",
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
		"liquidityUsd": 1207945.85,
		"hash": "8e9adbbfd983403b472359e2574e76043494746d5beef571cefa071939be655e"
	},
	{
		"id": "0f7ccda9e1b6",
		"ts": "2026-08-11T21:41:32.553Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4343814.03,
		"hash": "0f7ccda9e1b6388bae98cfc7a6e81bde4f62f7f462d3ec36c3c16d98afbd0ee2"
	},
	{
		"id": "ea5a32a86dac",
		"ts": "2026-08-11T20:38:44.577Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111985781.72,
		"hash": "ea5a32a86dac53bc966305ae796c13da765f7faab60bcd85b8cf9d3070e25943"
	},
	{
		"id": "e08034c3a911",
		"ts": "2026-08-11T20:38:45.028Z",
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
		"liquidityUsd": 17012689.39,
		"hash": "e08034c3a911108667cca04e191d66252d08cd382d41c35b03be796c74c30720"
	},
	{
		"id": "5fd813fa00c1",
		"ts": "2026-08-11T20:38:45.273Z",
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
		"liquidityUsd": 1021808.74,
		"hash": "5fd813fa00c13d7e4be8090201154067a577319b5c215e7fd2badc41e47c8772"
	},
	{
		"id": "946c9b931cec",
		"ts": "2026-08-11T20:38:45.514Z",
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
		"liquidityUsd": 26888150.8,
		"hash": "946c9b931cec5b56ab15cf6d9340790e2d2d4bb77769351be75d643c0b84e902"
	},
	{
		"id": "2b43b15e8aec",
		"ts": "2026-08-11T20:38:45.748Z",
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
		"liquidityUsd": 4043261.27,
		"hash": "2b43b15e8aec557e2b74ca358095d2867d518a8ca45b7d9ff81c65c18d2533e0"
	},
	{
		"id": "019940426d1f",
		"ts": "2026-08-11T20:38:45.989Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 904051.78,
		"hash": "019940426d1f4f50014100c0cdfe812c55c91c86903a56c26064ede68e251720"
	},
	{
		"id": "35150e43d984",
		"ts": "2026-08-11T20:38:46.238Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26888150.8,
		"hash": "35150e43d98453d50c76f072ff9c2017a09baf4810ece36f94482f37205c59b3"
	},
	{
		"id": "8e56273fccab",
		"ts": "2026-08-11T20:38:46.481Z",
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
		"liquidityUsd": 4473985.7,
		"hash": "8e56273fccabdde0786dc0b1d363fc46a1ee2323250a446f008ed5eb556122a7"
	},
	{
		"id": "1e28f614b5c1",
		"ts": "2026-08-11T20:38:46.718Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4116319.62,
		"hash": "1e28f614b5c19b5b708aa24216c8e18f9b5dfbee833b824efa1549f127612a1a"
	},
	{
		"id": "e93cb2a542da",
		"ts": "2026-08-11T20:38:46.957Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 967101.63,
		"hash": "e93cb2a542dac9c9433450323a87e2e5b19f01e01c167d5387a2c32ff7761ebe"
	},
	{
		"id": "e3e8ff0cdc83",
		"ts": "2026-08-11T20:38:47.184Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2132546.55,
		"hash": "e3e8ff0cdc832173c80049c4635f2d75bc47d760e71ba356709eea699bc87ec5"
	},
	{
		"id": "600cc9bb053f",
		"ts": "2026-08-11T20:38:47.409Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9262119.94,
		"hash": "600cc9bb053f759bcdaa6d0b2c02b4acb157b8dfa166b320d84e1f8d20e3bef9"
	},
	{
		"id": "07f9256169ec",
		"ts": "2026-08-11T20:38:47.627Z",
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
		"liquidityUsd": 251821.3,
		"hash": "07f9256169ec304a9d823c82ecf2670fb1d2678f612cab382be1651f15daa212"
	},
	{
		"id": "35c7fecc38f9",
		"ts": "2026-08-11T20:38:47.881Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1832464.59,
		"hash": "35c7fecc38f9c9236d723beb10abadf8a9a6f1a076bd055b84333d7176c9dc1c"
	},
	{
		"id": "6002e1f76ca9",
		"ts": "2026-08-11T20:38:48.105Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 734410.08,
		"hash": "6002e1f76ca9525f07856370581f1744b3bcdbb287cf42821df727a796abb8be"
	},
	{
		"id": "89063422923c",
		"ts": "2026-08-11T20:38:48.324Z",
		"symbol": "noice",
		"token": "0x9Cb41FD9dC6891BAe8187029461bfAADF6CC0C69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 228447.62,
		"hash": "89063422923c29bec882d4cee78dd8792ea2fba944333b9302335faa0e014475"
	},
	{
		"id": "a12ca79fba37",
		"ts": "2026-08-11T20:38:48.548Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4359815.35,
		"hash": "a12ca79fba37ee6f511c3120e83a55ab4fe5530ea9d132617b85865f5e0e8ce1"
	},
	{
		"id": "a2557a8ead70",
		"ts": "2026-08-11T19:08:40.081Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111339888.17,
		"hash": "a2557a8ead7085848448b5006342781c30422d5b2f274b67cb3cd9d2c1ddd4fd"
	},
	{
		"id": "e8bdc54cb9e2",
		"ts": "2026-08-11T19:08:40.334Z",
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
		"liquidityUsd": 13826471.8,
		"hash": "e8bdc54cb9e26e71584770475542bab031cc2656cd45b98104a66d3baf76eeca"
	},
	{
		"id": "40874f2dea7c",
		"ts": "2026-08-11T19:08:40.586Z",
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
		"liquidityUsd": 1021661.18,
		"hash": "40874f2dea7c4c45518c924323014005a10fbb1b7da48908f52b18c983112705"
	},
	{
		"id": "f07eadbb956b",
		"ts": "2026-08-11T19:08:40.832Z",
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
		"liquidityUsd": 26788466.56,
		"hash": "f07eadbb956bcd59f4bd6276485e2d60dd13e8b0fab959a14020a78b6558f43c"
	},
	{
		"id": "0c2f13040d74",
		"ts": "2026-08-11T19:08:41.286Z",
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
		"liquidityUsd": 4001432.02,
		"hash": "0c2f13040d74dd48780b2ef08e4f21fb3c00cf2bdacab07d4589f791804e06b8"
	},
	{
		"id": "d4ddfb335ed8",
		"ts": "2026-08-11T19:08:41.527Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 904339.32,
		"hash": "d4ddfb335ed8560d43876a4b2e71f1bf003a2a6c867dd5a35749339ef597c102"
	},
	{
		"id": "bdb148d4a658",
		"ts": "2026-08-11T19:08:41.762Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26788466.56,
		"hash": "bdb148d4a658d36b67752933d4d915b06fc42caa53d658cdf27064f515d8517b"
	},
	{
		"id": "e3e264f33305",
		"ts": "2026-08-11T19:08:42.001Z",
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
		"liquidityUsd": 4436795.88,
		"hash": "e3e264f33305b09d21240d3578ffedcec56dfffb2402d3af765ee14e00514689"
	},
	{
		"id": "fc6aefcfb36e",
		"ts": "2026-08-11T19:08:42.246Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4110036.76,
		"hash": "fc6aefcfb36ea33582a108628a9d8548c3663b8894a8bc211f16544ce4eab13e"
	},
	{
		"id": "7c00b5660c15",
		"ts": "2026-08-11T19:08:42.482Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 967437.2,
		"hash": "7c00b5660c153d9f228af163124650ccc0c39ae449958908e1bf73853bdeca59"
	},
	{
		"id": "f7edf7dbfb68",
		"ts": "2026-08-11T19:08:42.698Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2085888.96,
		"hash": "f7edf7dbfb68ea06c4f1760fdc1c84c87f003425b9528533e7827f2aa6ba0727"
	},
	{
		"id": "9c3a990bf595",
		"ts": "2026-08-11T19:08:42.916Z",
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
		"liquidityUsd": 252161.51,
		"hash": "9c3a990bf5952ba6132f614c7b49c6fe96c4d90b8a5379cfd851c2050e885302"
	},
	{
		"id": "3e0dc2f5fd0a",
		"ts": "2026-08-11T19:08:43.139Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9179179.59,
		"hash": "3e0dc2f5fd0a49b25df81cf9518cbee2d70151b8cf2bf46340f124ba373e1d54"
	},
	{
		"id": "261e73c84d3c",
		"ts": "2026-08-11T19:08:43.366Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1824471.78,
		"hash": "261e73c84d3c81f4468bf0fc8b1c3b8434133366c7368b3fb9769170df1745ad"
	},
	{
		"id": "02ccf56e7edf",
		"ts": "2026-08-11T19:08:43.586Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 705064.32,
		"hash": "02ccf56e7edf3ee8236db3f3397c9a7386573011ebeca6115dcd34a387577244"
	},
	{
		"id": "cf89f3e00fcc",
		"ts": "2026-08-11T19:08:43.803Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4326322.53,
		"hash": "cf89f3e00fcc48c662b6baf68e67eb82a8f3e4d8aa13a1263b45ead627478ae8"
	},
	{
		"id": "e8849035d501",
		"ts": "2026-08-11T19:08:44.026Z",
		"symbol": "noice",
		"token": "0x9Cb41FD9dC6891BAe8187029461bfAADF6CC0C69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 228135.43,
		"hash": "e8849035d501e3fc2137c329c04cf85d098cb58515f348083dba6b3c4d48b3bc"
	},
	{
		"id": "cda8658ea5ee",
		"ts": "2026-08-11T19:08:44.254Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 813259.52,
		"hash": "cda8658ea5ee6470cb53d16032d2099fa524b14f2025c975f8240e8e9e698d00"
	},
	{
		"id": "6d64c2b69d30",
		"ts": "2026-08-11T17:58:45.242Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111319798.21,
		"hash": "6d64c2b69d307875302e8e5ca959993960f6a6e652dc3cb13a6c23a4394f4284"
	},
	{
		"id": "2eb63a1face2",
		"ts": "2026-08-11T17:58:45.502Z",
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
		"liquidityUsd": 18082906.09,
		"hash": "2eb63a1face22ab063a8816c118df8c45c5b577b9caaa31aaeb10f9d8d1b20fe"
	},
	{
		"id": "3f76d203c9aa",
		"ts": "2026-08-11T17:58:45.705Z",
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
		"liquidityUsd": 1021661.18,
		"hash": "3f76d203c9aa6b11717fb0de3f04db72cc659a544122d325b3a46b2ada93331e"
	},
	{
		"id": "487ecd485c38",
		"ts": "2026-08-11T17:58:45.936Z",
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
		"liquidityUsd": 26759189.52,
		"hash": "487ecd485c38c02035592dca4b96b5007cf12e4a7dd2cf402e034fb285758dcc"
	},
	{
		"id": "c938d22badef",
		"ts": "2026-08-11T17:58:46.167Z",
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
		"liquidityUsd": 4039753.91,
		"hash": "c938d22badef085e713bc47d30c84c15e644a8c13419cd4f474fa7c14f68c30a"
	},
	{
		"id": "0b1ae22e6e59",
		"ts": "2026-08-11T17:58:46.366Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 904339.32,
		"hash": "0b1ae22e6e596603293ecf56e17b1ab986c946f3510d9c0dc215c30f6041bd17"
	},
	{
		"id": "05a5ffc0a4ec",
		"ts": "2026-08-11T17:58:46.553Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26759189.52,
		"hash": "05a5ffc0a4ec11b95e40d97946489c6bee7765a69bfa6eff908534833cd51c12"
	},
	{
		"id": "891037469fc5",
		"ts": "2026-08-11T17:58:46.860Z",
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
		"liquidityUsd": 4437152.23,
		"hash": "891037469fc5f58d55a67abb17a6e39c9d44bfeaae39dbfceb0419546a98197f"
	},
	{
		"id": "045407bcf768",
		"ts": "2026-08-11T17:58:47.044Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4073614.91,
		"hash": "045407bcf768cb4ab8c9b9b4f263293bc9c587ece7a3b6f381f28b58896e62f2"
	},
	{
		"id": "e0ab083edd56",
		"ts": "2026-08-11T17:58:47.226Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 968961.44,
		"hash": "e0ab083edd563cb5a949ae8fb4897ed0d7d038b0f6143f2ca1e466a32f289217"
	},
	{
		"id": "f0e309779d49",
		"ts": "2026-08-11T17:58:47.404Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2091381.95,
		"hash": "f0e309779d490cff49a8e82c2a97bbe881309e3fdf79b8a2d1fd882c3224923d"
	},
	{
		"id": "e847289f74e9",
		"ts": "2026-08-11T17:58:47.647Z",
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
		"liquidityUsd": 252699.71,
		"hash": "e847289f74e95f98f17ffb785e60ad054a622c2b49b849eeffd0a69387a54b93"
	},
	{
		"id": "5e78418063e2",
		"ts": "2026-08-11T17:58:47.833Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1835408.55,
		"hash": "5e78418063e2b4c76867866294d5271b0b42db5d2d4fde26f67507bd5e1a42e6"
	},
	{
		"id": "6bee8fecad73",
		"ts": "2026-08-11T17:58:48.027Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4346952.88,
		"hash": "6bee8fecad73212d4fad6adb91e296fd5c165a6a3778c27839903fd9c947263f"
	},
	{
		"id": "ba36c883d059",
		"ts": "2026-08-11T17:58:48.208Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9193584.87,
		"hash": "ba36c883d05917bf62a2021189f3b1cce357df644e591e68a2893fff0e346841"
	},
	{
		"id": "6e6e30783dcb",
		"ts": "2026-08-11T17:58:48.390Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 714700.68,
		"hash": "6e6e30783dcb4713a891fdc6ec1d0fdda5285cd704e2e1a21fbadd2701c3dc1a"
	},
	{
		"id": "d504ceddf8a0",
		"ts": "2026-08-11T17:58:48.701Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 812119.59,
		"hash": "d504ceddf8a0722dbec8df3f67e6c43daf56044e661f62640d3047448023f72b"
	},
	{
		"id": "b428bc86efc8",
		"ts": "2026-08-11T17:58:48.894Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 465353.65,
		"hash": "b428bc86efc8e0d92a0e240ccb3d9d125f582591fcd6c256466238d1d7151c45"
	},
	{
		"id": "95b7e6ac31ec",
		"ts": "2026-08-11T16:58:11.935Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111024494.22,
		"hash": "95b7e6ac31ec85fbccb2d79651d56542c2b88d86e7093affe5c1fdece951c538"
	},
	{
		"id": "358eb067cda1",
		"ts": "2026-08-11T16:58:12.142Z",
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
		"liquidityUsd": 13835463.25,
		"hash": "358eb067cda14a722f595e4e4dbdfe9bbbf2d90cfbcabcec1121f53cd2645fbf"
	},
	{
		"id": "f249e1be7497",
		"ts": "2026-08-11T16:58:12.376Z",
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
		"liquidityUsd": 1028443.56,
		"hash": "f249e1be7497c28fda9a27f12f57e5ed3c57ff3b48ce0d08f0c197f306cee2a1"
	},
	{
		"id": "e78e8e91d374",
		"ts": "2026-08-11T16:58:12.585Z",
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
		"liquidityUsd": 26740534.07,
		"hash": "e78e8e91d374b507693cf3b1025e2659817d67579c9d6ebd037dde5a5e0b5604"
	},
	{
		"id": "811276b87df8",
		"ts": "2026-08-11T16:58:12.797Z",
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
		"liquidityUsd": 4042190.03,
		"hash": "811276b87df8f108b9a3ff1f27f54e1d35b00b7fb0f32c9084b040aa90d39654"
	},
	{
		"id": "ac26b31e3437",
		"ts": "2026-08-11T16:58:13.030Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 904334.93,
		"hash": "ac26b31e3437a41ca674cf5b717d661e4e32e1e65e9e5f38761d6f430b24829f"
	},
	{
		"id": "1ef601d1d74d",
		"ts": "2026-08-11T16:58:13.239Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26740534.07,
		"hash": "1ef601d1d74d25629a8cea165c3d42349e73ca8e736b5dc9e1a0a97b25d024f4"
	},
	{
		"id": "2622bc553ede",
		"ts": "2026-08-11T16:58:13.446Z",
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
		"liquidityUsd": 4437127.57,
		"hash": "2622bc553ede23b0b80c6ad7c89dece4332771bf730c06e2b4ee93679f4944f8"
	},
	{
		"id": "1f4074887ee8",
		"ts": "2026-08-11T16:58:13.977Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4100980.71,
		"hash": "1f4074887ee8c4d5f9f3045189c6e9670e9018b5a1ac1a3602d17867a8b54618"
	},
	{
		"id": "c22e21bda075",
		"ts": "2026-08-11T16:58:14.194Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 974917.28,
		"hash": "c22e21bda075b7525f19e63bd1cd2675a6f811edae5813efda7ed5c3a36a38bf"
	},
	{
		"id": "d24ab3b6f4d8",
		"ts": "2026-08-11T16:58:14.402Z",
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
		"liquidityUsd": 251923.84,
		"hash": "d24ab3b6f4d8feb74aa2913de29ab7636fb43e1914df81e0a18d90ad096c04d7"
	},
	{
		"id": "34a040e68f3b",
		"ts": "2026-08-11T16:58:14.611Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2063725.18,
		"hash": "34a040e68f3b7b4fa3605ee8af0b02af00732570ce00e933277172402b5c17e3"
	},
	{
		"id": "1f28db87c975",
		"ts": "2026-08-11T16:58:14.823Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9212613.03,
		"hash": "1f28db87c97514e61169991640fcf643de11d809fc4bb99bb39e6d9cf8c98235"
	},
	{
		"id": "190728d7988e",
		"ts": "2026-08-11T16:58:15.038Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1829457.36,
		"hash": "190728d7988e7d6538674c81262d209cf8886a9df9892a60ddac8f8868689b7c"
	},
	{
		"id": "c08a2a4a41e5",
		"ts": "2026-08-11T16:58:15.255Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4342777.55,
		"hash": "c08a2a4a41e5ab140a05b9551d02b20ee3cc0ecaf17364359f31c6b1498f1922"
	},
	{
		"id": "e315607d335d",
		"ts": "2026-08-11T16:58:15.469Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 692475.56,
		"hash": "e315607d335d3acc826c19363d6391b4c04975922502023e36ffdfcda67dc5f0"
	},
	{
		"id": "9866cdaada48",
		"ts": "2026-08-11T16:58:15.687Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 809944.76,
		"hash": "9866cdaada480ce82fd062c37ca5c8ac8981497ed0c0e24e8e976e95621f1ce9"
	},
	{
		"id": "97ae9eb4fd4e",
		"ts": "2026-08-11T15:57:12.511Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111183179.77,
		"hash": "97ae9eb4fd4e7c917775bf25f98ea1fa3b7c76a2c384e98fd4be27b222a2c0fb"
	},
	{
		"id": "25943f7f18de",
		"ts": "2026-08-11T15:57:12.773Z",
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
		"liquidityUsd": 18712605.5,
		"hash": "25943f7f18de6f9a6a65bcba0a4d0df9400cc93620431204d91b9dd5ad10a78d"
	},
	{
		"id": "0d8f134169b7",
		"ts": "2026-08-11T15:57:13.398Z",
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
		"liquidityUsd": 1028443.56,
		"hash": "0d8f134169b735af9b8b82109a8a80c1fbc4dc5ce80e20a4ab4687658d4203b7"
	},
	{
		"id": "57849e3f8c71",
		"ts": "2026-08-11T15:57:13.809Z",
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
		"liquidityUsd": 26714372.74,
		"hash": "57849e3f8c71e376279e971101d131910d0088330412e5922498e964d5b14511"
	},
	{
		"id": "5cfab412a950",
		"ts": "2026-08-11T15:57:14.113Z",
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
		"liquidityUsd": 4081374.72,
		"hash": "5cfab412a950cc1fdb7edc888a1213bd019a36cad8984d55d2b2e7c8a662f5ed"
	},
	{
		"id": "664b344a83ed",
		"ts": "2026-08-11T15:57:14.365Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 893968.42,
		"hash": "664b344a83ed243165c6183238bcf84d7ddd3febcb620bd298cd7f2edc345929"
	},
	{
		"id": "0f938c7ba18b",
		"ts": "2026-08-11T15:57:14.879Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26714372.74,
		"hash": "0f938c7ba18bfb4146f23ca703584cbab5de18081e0e452791446a24ce226d01"
	},
	{
		"id": "99e025ce7693",
		"ts": "2026-08-11T15:57:15.445Z",
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
		"liquidityUsd": 4421347.42,
		"hash": "99e025ce7693ed0f7cec154d8b7015e85132acc46f463d387ca6175e67e7bcfa"
	},
	{
		"id": "893fcf315e48",
		"ts": "2026-08-11T15:57:15.690Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4385991.18,
		"hash": "893fcf315e4884db89f6a1dd30cf3d3e400f690e8fb6851c4306a36d7f45fd01"
	},
	{
		"id": "21fe087515a7",
		"ts": "2026-08-11T15:57:15.934Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 980301.64,
		"hash": "21fe087515a750ca3e59ec8bc2f1dab05f5ab7fedadd064a1433075507467ff5"
	},
	{
		"id": "dfdeca05d868",
		"ts": "2026-08-11T15:57:16.158Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2088795.14,
		"hash": "dfdeca05d868cdf32d3be9fd3c3f6d02f60c66a13e0601be0a4a8df2dea7650d"
	},
	{
		"id": "309d0c30c2d2",
		"ts": "2026-08-11T15:57:16.378Z",
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
		"liquidityUsd": 251848.58,
		"hash": "309d0c30c2d226af70987a4f244d5d59fc083ff5dc7eb5b35cc83cd52cc78e84"
	},
	{
		"id": "e4af14267d60",
		"ts": "2026-08-11T15:57:16.600Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4322840.07,
		"hash": "e4af14267d6079ea1c320e7251b102412070eac602624b965edc0931172c2710"
	},
	{
		"id": "6207117752f1",
		"ts": "2026-08-11T15:57:16.821Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9170104.09,
		"hash": "6207117752f1347512c5d91eb63681f423098e4a355833bb85bae92d4e82c8e3"
	},
	{
		"id": "986667630c57",
		"ts": "2026-08-11T15:57:17.052Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 690616.45,
		"hash": "986667630c57101cd1574928332e4a16052f965aff160e384cafcbecca8420fe"
	},
	{
		"id": "d382ce0b0ea2",
		"ts": "2026-08-11T15:57:17.265Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 808157.66,
		"hash": "d382ce0b0ea2d19b9f01ec415885914353ca9d00de0eda4ba5ba02c3b60e2a15"
	},
	{
		"id": "d47f364cda25",
		"ts": "2026-08-11T15:57:17.487Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 73904.49,
		"hash": "d47f364cda25fba7b77ad4bdb49d20be7300a1382366c566ee09b66f4fd541f6"
	},
	{
		"id": "6840ba46dca2",
		"ts": "2026-08-11T14:17:39.689Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112182883.42,
		"hash": "6840ba46dca200ae68544b08ec64d124b2b8206c2dc9d72be7fdfbf6aab9767e"
	},
	{
		"id": "a2e336bc255c",
		"ts": "2026-08-11T14:17:40.141Z",
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
		"liquidityUsd": 18450237.31,
		"hash": "a2e336bc255cc79b97528107db5062411d852294aaac0698f8d4d03e4ba17724"
	},
	{
		"id": "cfb5ba9f2a86",
		"ts": "2026-08-11T14:17:40.387Z",
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
		"liquidityUsd": 1034923.63,
		"hash": "cfb5ba9f2a861b2163c1ef1a363b3edbd8f6768763512094a0c674047150ee94"
	}
]
