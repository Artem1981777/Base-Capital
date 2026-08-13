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
	"updatedAt": "2026-08-13T15:55:59.434Z",
	"tokensScored": 9736,
	"verdictsIssued": 9736,
	"safe": 8484,
	"risky": 714,
	"likelyRug": 538,
	"ticks": 588
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "6e72c52f13f2",
		"ts": "2026-08-13T15:55:55.862Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111661399.05,
		"hash": "6e72c52f13f21361a63eecfc34b995753ab8d97e3d226e6506294d324a571258"
	},
	{
		"id": "628bb4655475",
		"ts": "2026-08-13T15:55:56.061Z",
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
		"liquidityUsd": 18545638.47,
		"hash": "628bb4655475ff08bd5a825e376fa5f06642121dc4d161f47b65d1a048ebdd2d"
	},
	{
		"id": "b51db2f2a778",
		"ts": "2026-08-13T15:55:56.264Z",
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
		"liquidityUsd": 786598.31,
		"hash": "b51db2f2a77806fd7ab5d0c24baefbb7bf31f2127f1811859d7bc1ded9b570e3"
	},
	{
		"id": "ebfc5e7d5845",
		"ts": "2026-08-13T15:55:56.460Z",
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
		"liquidityUsd": 26925957.51,
		"hash": "ebfc5e7d5845c5c2781186f721280b69e43c226f18b3368338fb3717ab084b9d"
	},
	{
		"id": "559b46debcae",
		"ts": "2026-08-13T15:55:56.847Z",
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
		"liquidityUsd": 4253099.53,
		"hash": "559b46debcaebde3c2f8d19339d6253457211ce07e19937e1aa4e6d289eb35df"
	},
	{
		"id": "5f47532dbc72",
		"ts": "2026-08-13T15:55:57.039Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 900093.48,
		"hash": "5f47532dbc720e3696ab4357345d608607e54dc6c1c748437a481045cf6af59d"
	},
	{
		"id": "df9666061c31",
		"ts": "2026-08-13T15:55:57.239Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4524697.72,
		"hash": "df9666061c31fd99d29008eaa6d71540e0e14f9055cce610aa378293dce19dab"
	},
	{
		"id": "7eaa6abd68aa",
		"ts": "2026-08-13T15:55:57.450Z",
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
		"liquidityUsd": 4091297.81,
		"hash": "7eaa6abd68aa2fc5c69a4fc1eb9187485c0e9a2a082ad3c667474d76b9987a3c"
	},
	{
		"id": "b9a47262957d",
		"ts": "2026-08-13T15:55:57.648Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 917300.62,
		"hash": "b9a47262957d67ec18cd2bfdb9d252ae03b62815260c60c766fffba177fc0176"
	},
	{
		"id": "fe999c4b9250",
		"ts": "2026-08-13T15:55:57.847Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4521510.59,
		"hash": "fe999c4b9250a4eecda21b3680b2cc48f3277e4361e0b815f13e87252224bb16"
	},
	{
		"id": "1cd33ec58b68",
		"ts": "2026-08-13T15:55:58.037Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2340701.6,
		"hash": "1cd33ec58b68301150974601f0e4a3d876d7136426532f96edcf7c08afd4e17f"
	},
	{
		"id": "143c4dcc323d",
		"ts": "2026-08-13T15:55:58.239Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1667674.08,
		"hash": "143c4dcc323d3469110e516a90bb24dc7d34fd5fc0032bcfb7e1464b924c41a9"
	},
	{
		"id": "ea2652f1324c",
		"ts": "2026-08-13T15:55:58.438Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 753473.64,
		"hash": "ea2652f1324c656e81a84a1f012dbc695fdb180db3d41c166ad7267a267a9c13"
	},
	{
		"id": "3311de3df746",
		"ts": "2026-08-13T15:55:58.645Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 651458.23,
		"hash": "3311de3df7467ddcf6b1ac1cbad0a7aa35a26a7042b0aa31319cd4b8392f1df3"
	},
	{
		"id": "32c9ef49cb29",
		"ts": "2026-08-13T15:55:58.839Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 84693.31,
		"hash": "32c9ef49cb295f9c298e6746f07c6f1188bf333189a87c62369a7f3c936a08cd"
	},
	{
		"id": "eb683d111b4d",
		"ts": "2026-08-13T15:55:59.043Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9380187.84,
		"hash": "eb683d111b4d2405bd6138ead7fcfbfb1aafd086313c49d31a88c915dfb97862"
	},
	{
		"id": "ae0ce2469bf5",
		"ts": "2026-08-13T15:55:59.235Z",
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
		"liquidityUsd": 243502.74,
		"hash": "ae0ce2469bf5f3ffa31eb9c9a4ae4fb1e666135acc330f4b4efb1a78543a81da"
	},
	{
		"id": "dd118f43f6d9",
		"ts": "2026-08-13T15:55:59.434Z",
		"symbol": "SR",
		"token": "0x10c56F005a379f8eAfc88ff5c3f40d30F0031AC9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 102011.28,
		"hash": "dd118f43f6d939fc8fa7d1c8a29c8236a41d471a377254beb6fbe1aee903a43b"
	},
	{
		"id": "978f9949bd8c",
		"ts": "2026-08-13T14:53:02.769Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111773578.18,
		"hash": "978f9949bd8c87777e17be3620296ac464e45baf964a6098aa2ce2c4f7cfffa3"
	},
	{
		"id": "15c54095ea12",
		"ts": "2026-08-13T14:53:03.132Z",
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
		"liquidityUsd": 17485017.89,
		"hash": "15c54095ea12ba8fb4dac5db5e035f10a0321f28240505cc44c2cd6102e0fef4"
	},
	{
		"id": "85acce308abe",
		"ts": "2026-08-13T14:53:03.328Z",
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
		"liquidityUsd": 848861.83,
		"hash": "85acce308abe475f8b1d8d6e7d2ae167e6f3674083297c4280cca618f76bda2d"
	},
	{
		"id": "e689fd6bf021",
		"ts": "2026-08-13T14:53:03.523Z",
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
		"liquidityUsd": 26990653.24,
		"hash": "e689fd6bf021dc7ce62608e89a0904a62b64ecf0df4aeb92eeddd8848984b847"
	},
	{
		"id": "57123c81d876",
		"ts": "2026-08-13T14:53:03.894Z",
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
		"liquidityUsd": 4272403.87,
		"hash": "57123c81d8760abb847317f1f5ae8dd775717acd515c47fb7a22e4fe978b2252"
	},
	{
		"id": "152365bad2bc",
		"ts": "2026-08-13T14:53:04.095Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 907905.55,
		"hash": "152365bad2bc22f2d5164be94ccccf96ef9c756b812a04c3361bc63ee558c4fb"
	},
	{
		"id": "703300c69fb3",
		"ts": "2026-08-13T14:53:04.308Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4531565.11,
		"hash": "703300c69fb3e9270ca4d062d3cbec5b2ee1165b8b520c7aa192cd50aa2b84c5"
	},
	{
		"id": "a1dec158e944",
		"ts": "2026-08-13T14:53:04.563Z",
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
		"liquidityUsd": 4100486.8,
		"hash": "a1dec158e9442d40dc843cc243dcf27fbf24dc8003262ae369429e90b7eaf2e5"
	},
	{
		"id": "f76218de1b7d",
		"ts": "2026-08-13T14:53:04.752Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 920433.78,
		"hash": "f76218de1b7d7f0c4b8099482c3d791608b93b4e3d2e5c9450a56e223e6a0675"
	},
	{
		"id": "4277daa61a38",
		"ts": "2026-08-13T14:53:04.946Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4510873.91,
		"hash": "4277daa61a385c0f7601bb77e16680d50833ea07995fce9ed6154f49f46b9ef6"
	},
	{
		"id": "e66eefbbb2e1",
		"ts": "2026-08-13T14:53:05.132Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2363475.9,
		"hash": "e66eefbbb2e10beaf872599cc4c28174ed72ada00bd29fcc6649947efab1865a"
	},
	{
		"id": "a61caa635754",
		"ts": "2026-08-13T14:53:05.314Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1642174.21,
		"hash": "a61caa6357548dd1522db8c83d05b4e78a4a5b5a8b333b31382a13fa7212d7a1"
	},
	{
		"id": "4e163536aea9",
		"ts": "2026-08-13T14:53:05.498Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 765455.75,
		"hash": "4e163536aea9860969ba91f24b1d3532141c0dbcafc19299ed2cbac4e82e4e1c"
	},
	{
		"id": "b690ab387df6",
		"ts": "2026-08-13T14:53:05.694Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9424440.05,
		"hash": "b690ab387df6f2b3aa1e397755c2c59d9b242ee7af20532100e5281a8846542c"
	},
	{
		"id": "482fe4ae375d",
		"ts": "2026-08-13T14:53:05.936Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 662623.66,
		"hash": "482fe4ae375d9b85da95562d95e97c77600556c8a52ed1996750278764a1500d"
	},
	{
		"id": "6e75adb890ad",
		"ts": "2026-08-13T14:53:06.160Z",
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
		"liquidityUsd": 244505.99,
		"hash": "6e75adb890ad23e001e23352a5ad1fe9975e7ffe16262e31ec3e41c7962058d2"
	},
	{
		"id": "211192dcf5c0",
		"ts": "2026-08-13T14:53:06.358Z",
		"symbol": "SR",
		"token": "0x10c56F005a379f8eAfc88ff5c3f40d30F0031AC9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 102265.32,
		"hash": "211192dcf5c02e2b8df05faa27d0698166e7211b581b7cd5c5e29225bb20969b"
	},
	{
		"id": "7b1840888844",
		"ts": "2026-08-13T14:53:06.538Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 86064.76,
		"hash": "7b18408888449eb697c871e34737759020ec9fb68d5041a073725b101a663c0c"
	},
	{
		"id": "dabbe2ab94c0",
		"ts": "2026-08-13T14:53:06.722Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 829161.08,
		"hash": "dabbe2ab94c02735c1d6108cc278ce41257fc61710066f269ab16a78fa53c389"
	},
	{
		"id": "bc46a66274c8",
		"ts": "2026-08-13T13:00:45.499Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112123269.99,
		"hash": "bc46a66274c8e5b587f68eda69c8441e2347a0fa2148a1083c8683f410d35d07"
	},
	{
		"id": "57327812fa94",
		"ts": "2026-08-13T13:00:45.933Z",
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
		"liquidityUsd": 18859732.53,
		"hash": "57327812fa940f1a94e2ab87a39d0d0c6729e5a6aa674d116e11f9818db7664c"
	},
	{
		"id": "6ba48f745124",
		"ts": "2026-08-13T13:00:46.167Z",
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
		"liquidityUsd": 857981.81,
		"hash": "6ba48f745124fed068fb002ace742b25660090c2c2ec64b43d76481dde483d68"
	},
	{
		"id": "310b44a101d2",
		"ts": "2026-08-13T13:00:46.648Z",
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
		"liquidityUsd": 26794326.9,
		"hash": "310b44a101d2b772f9a19c5d85e1e4c886a4b70a80f7680907b0cb6c373db59b"
	},
	{
		"id": "d980ea9ed3f2",
		"ts": "2026-08-13T13:00:46.903Z",
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
		"liquidityUsd": 4231415.56,
		"hash": "d980ea9ed3f2b97ae8c187ac56f5015ab2251ab9dac1e74a326eadb086455365"
	},
	{
		"id": "40ac9840f10f",
		"ts": "2026-08-13T13:00:47.137Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 898247.82,
		"hash": "40ac9840f10f854321eb517cdaee99756617a5e4ccc1c382c462ca7ab0e7d8fa"
	},
	{
		"id": "41fc1d64623d",
		"ts": "2026-08-13T13:00:47.378Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4478776.32,
		"hash": "41fc1d64623dc0f2ab6311872b68d40e02124b890a9f60560e7f6f0533c5c3a9"
	},
	{
		"id": "1cac0fe40d98",
		"ts": "2026-08-13T13:00:47.623Z",
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
		"liquidityUsd": 4087861.43,
		"hash": "1cac0fe40d98a5031bfd224d39414a7ac2b6801dfdb4cdc662c4460a684ec0bd"
	},
	{
		"id": "6c814569b3f6",
		"ts": "2026-08-13T13:00:47.857Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 926813.66,
		"hash": "6c814569b3f69f08ab15126194d88fe1955686e05fa42f61a0dc45fe2afc4930"
	},
	{
		"id": "67099918a2e8",
		"ts": "2026-08-13T13:00:48.084Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4480022.58,
		"hash": "67099918a2e8c28895d9f5626f7a2f3c3b58fa3c7c79248f57d81eb7d1e2480d"
	},
	{
		"id": "13d0e20473a4",
		"ts": "2026-08-13T13:00:48.310Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2338709.7,
		"hash": "13d0e20473a4c758145778b4102e327d97cfd07bf607a01930257755fecf28bc"
	},
	{
		"id": "20e314a964fc",
		"ts": "2026-08-13T13:00:48.526Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1632644.14,
		"hash": "20e314a964fc61ec14261280ca4fd0360b2b48facba3d0c526dd09602340d79b"
	},
	{
		"id": "e64128736fd6",
		"ts": "2026-08-13T13:00:48.739Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 759281.22,
		"hash": "e64128736fd62b1d2db37da1a749abc6559ce4921a5c9e236bd6379f0f9de883"
	},
	{
		"id": "744806774f48",
		"ts": "2026-08-13T13:00:48.956Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1919002.21,
		"hash": "744806774f48d476dd8de2bc7d00a12373679a194f32f38c57387a282a0bb3a9"
	},
	{
		"id": "7f937854a8c4",
		"ts": "2026-08-13T13:00:49.182Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 243916.17,
		"hash": "7f937854a8c43d89e59606e11a1399c6804953cce24f40149421ecb8d2e2620d"
	},
	{
		"id": "8598110a30d1",
		"ts": "2026-08-13T13:00:49.395Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 824153.06,
		"hash": "8598110a30d1430499b0a8869960fb5c0f35d2f02e48059b58646cc504ca373b"
	},
	{
		"id": "37eb878c6c89",
		"ts": "2026-08-13T13:00:49.613Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 481686.33,
		"hash": "37eb878c6c89a88c70109ef76331a26ca7dfc3a8b6a9c446bbce93c51b9766c0"
	},
	{
		"id": "67687b939438",
		"ts": "2026-08-13T13:00:49.850Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 637534.68,
		"hash": "67687b9394384da627cd53938872cf928cc40dbfeef4c8fe8dcc6f6f8caf1fac"
	},
	{
		"id": "a2a581efbbfa",
		"ts": "2026-08-13T13:00:50.062Z",
		"symbol": "SR",
		"token": "0x10c56F005a379f8eAfc88ff5c3f40d30F0031AC9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 99939.15,
		"hash": "a2a581efbbfa3a9af4d19c2f4440c4a5ddf120d6f17d2394d40352ebbfb895d9"
	},
	{
		"id": "9a1514e8b12c",
		"ts": "2026-08-13T11:05:58.769Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112202811,
		"hash": "9a1514e8b12cf1be1a6afa3115e02e59c5ce20610945b4282db71322957f852c"
	},
	{
		"id": "159bf51295ad",
		"ts": "2026-08-13T11:05:59.238Z",
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
		"liquidityUsd": 19136465.85,
		"hash": "159bf51295adc25141ec82c9e9fae02517de14cc8df5d65ba676528cd7f9e6ed"
	},
	{
		"id": "ce19a0f81322",
		"ts": "2026-08-13T11:05:59.642Z",
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
		"liquidityUsd": 862638.35,
		"hash": "ce19a0f81322cdb2d42a4aeb0490222ce345de0f20899fdca1a47ce03875e207"
	},
	{
		"id": "f865bccfba16",
		"ts": "2026-08-13T11:05:59.965Z",
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
		"liquidityUsd": 26833895.67,
		"hash": "f865bccfba163917afc40125b967bac8056ba68edc576dbfc24e9a3f530f224c"
	},
	{
		"id": "55dfd9e170e3",
		"ts": "2026-08-13T11:06:00.148Z",
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
		"liquidityUsd": 4228519.96,
		"hash": "55dfd9e170e3c34b46cb9009c0dec0de0568893562dc1e14a22e26a2a21135b0"
	},
	{
		"id": "96d29343b0a9",
		"ts": "2026-08-13T11:06:00.346Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 896427.7,
		"hash": "96d29343b0a98bfaa5f9a85d640387392ef5be3d0b2f753b12d3f811dd9bf3b5"
	},
	{
		"id": "f96f35ab1d6e",
		"ts": "2026-08-13T11:06:00.532Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4531064.03,
		"hash": "f96f35ab1d6ecb15eaf8c5facd9d7ac95c4384656ed5f224d2fda312698cb8fc"
	},
	{
		"id": "e018903a4077",
		"ts": "2026-08-13T11:06:00.729Z",
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
		"liquidityUsd": 4076773.56,
		"hash": "e018903a40778db1271edd1aeee46536b462ebfcf55678df4792d7cdc64956c8"
	},
	{
		"id": "439de1e0e5f1",
		"ts": "2026-08-13T11:06:00.920Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 947270.45,
		"hash": "439de1e0e5f17b6c06a36963ef8c0c574e5ce8e1a7090c4217c8f8eb2d68a097"
	},
	{
		"id": "e91f358b7a10",
		"ts": "2026-08-13T11:06:01.103Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4538200.08,
		"hash": "e91f358b7a10e9ed1d234d23c12f27193fc83c1fb9543a285a5a67b4d1bf4d2f"
	},
	{
		"id": "f71e5065bac8",
		"ts": "2026-08-13T11:06:01.285Z",
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
		"liquidityUsd": 247562.65,
		"hash": "f71e5065bac84ec06db600439b2041f0e4e912b4fe9f269b63a9ce016b955135"
	},
	{
		"id": "fa4baa7900d1",
		"ts": "2026-08-13T11:06:01.742Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1708902.29,
		"hash": "fa4baa7900d13b466549186360d2699b9c0cc0a19e200b633e0413a788fc512b"
	},
	{
		"id": "583270c6ab97",
		"ts": "2026-08-13T11:06:01.960Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2329540.85,
		"hash": "583270c6ab97e9aa721e84d2b68269d639fac7e46c315637d8032cccba42d489"
	},
	{
		"id": "1ea690cf64ef",
		"ts": "2026-08-13T11:06:02.174Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 768202.42,
		"hash": "1ea690cf64efc74b85ab3993782fc877b9d12b6267f0fd7fbc3aca39b800e22c"
	},
	{
		"id": "63af63b047af",
		"ts": "2026-08-13T11:06:02.455Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1933968.32,
		"hash": "63af63b047af89251687a4a8df0ccbf45925a73584dfe8adb9b2e98839bcb6bd"
	},
	{
		"id": "f7eff4543dac",
		"ts": "2026-08-13T11:06:02.644Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 821911.1,
		"hash": "f7eff4543dacb50fd1a4375f860078431ef550d4b4fe57df32da21aee0b278a3"
	},
	{
		"id": "3de95c540006",
		"ts": "2026-08-13T11:06:02.832Z",
		"symbol": "SR",
		"token": "0x10c56F005a379f8eAfc88ff5c3f40d30F0031AC9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 105774.86,
		"hash": "3de95c540006781855aca3cd310a6206997294424d3397e9560309d87c23674f"
	},
	{
		"id": "00ba5faef875",
		"ts": "2026-08-13T11:06:03.015Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9400244.6,
		"hash": "00ba5faef87581393d39806c9581412cc19f4f4397b43eb6825f99ff9f125408"
	},
	{
		"id": "fcf477cf801f",
		"ts": "2026-08-13T10:00:21.421Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112200483.68,
		"hash": "fcf477cf801f4e4d599c9d8f53d39a7603f5f1f35c5a8650b5b003e53f90d209"
	},
	{
		"id": "3431ae680b04",
		"ts": "2026-08-13T10:00:21.619Z",
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
		"liquidityUsd": 19611741.1,
		"hash": "3431ae680b045fb2ac3348cf41df766a79ecd6d356b12b2fa2e012eff1b0015c"
	},
	{
		"id": "fe377e3ede54",
		"ts": "2026-08-13T10:00:21.809Z",
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
		"liquidityUsd": 862638.35,
		"hash": "fe377e3ede5415708a3b13ea4cc0e9b8404c337e2ef80d758f70b310ca48a0a3"
	},
	{
		"id": "4855e3486a89",
		"ts": "2026-08-13T10:00:22.001Z",
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
		"liquidityUsd": 26889186.52,
		"hash": "4855e3486a894707ff4d6767f7e4188168f692d9824c958a51cc0ff194ec463c"
	},
	{
		"id": "faa03d452b14",
		"ts": "2026-08-13T10:00:22.268Z",
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
		"liquidityUsd": 4228519.96,
		"hash": "faa03d452b145ccb62201fa98e4b307773dceac169fcf764a4bc53f5a32fdafb"
	},
	{
		"id": "d5819f95b4ba",
		"ts": "2026-08-13T10:00:22.482Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 896427.7,
		"hash": "d5819f95b4ba1ac1e649597caeee455170fb7fda0bf0c4ab839255074d366f41"
	},
	{
		"id": "4d4046bf4767",
		"ts": "2026-08-13T10:00:22.675Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4382916.54,
		"hash": "4d4046bf4767fed772c6ff1642ad6cea1e37b522d415553069f208947ee3b7b8"
	},
	{
		"id": "096e5bb0f371",
		"ts": "2026-08-13T10:00:22.947Z",
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
		"liquidityUsd": 4093269.25,
		"hash": "096e5bb0f37189c49da789a02a3a2733276bab086f774e39e25830173f067533"
	},
	{
		"id": "c960ee081cfb",
		"ts": "2026-08-13T10:00:23.198Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 942389.81,
		"hash": "c960ee081cfbca82ed139be3ae52fe355420f4fd32f9b94ae06b7100df2a25a0"
	},
	{
		"id": "62864e16a524",
		"ts": "2026-08-13T10:00:23.386Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4382916.58,
		"hash": "62864e16a524f295e0758a3fb547ac0b3a38956d00ccd72eb35449549037d335"
	},
	{
		"id": "623490fe2fa4",
		"ts": "2026-08-13T10:00:23.730Z",
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
		"liquidityUsd": 249705.73,
		"hash": "623490fe2fa4f9a1b7d71e53f7cbc269a8b7eed46e59719a15518ea65242c488"
	},
	{
		"id": "93aefc7ee100",
		"ts": "2026-08-13T10:00:23.914Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2334882.49,
		"hash": "93aefc7ee1000e9a78b3cabf0fdafb732b7400431b3cb334ad546c42158b0245"
	},
	{
		"id": "fa1bdd1f94fb",
		"ts": "2026-08-13T10:00:24.107Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1622097.7,
		"hash": "fa1bdd1f94fb91dce09e0b14e4dac9ca639b2963b2c431b286bbdd99b12881ed"
	},
	{
		"id": "bfcb71d10c51",
		"ts": "2026-08-13T10:00:24.299Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 769991.34,
		"hash": "bfcb71d10c51323b23040dba531a967943d74da6ba8253c9fe3f85f908664ce9"
	},
	{
		"id": "9b77ff96c996",
		"ts": "2026-08-13T10:00:24.478Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1938678.18,
		"hash": "9b77ff96c99634b8a847e3a2512b76f34bedaf56a22d82dc5be5cde4f3df2aa5"
	},
	{
		"id": "74ace7678079",
		"ts": "2026-08-13T10:00:24.662Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 825214.64,
		"hash": "74ace767807934be3d61b4ec1ba51ee0ce883dd727d4daec1dab7595cbf38081"
	},
	{
		"id": "0d5ef66d3eb2",
		"ts": "2026-08-13T10:00:24.866Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9472978.05,
		"hash": "0d5ef66d3eb2b0e35cedd67b898b8896d4c0c5b0d4f08903fed09e616146549f"
	},
	{
		"id": "1bbd6c49365e",
		"ts": "2026-08-13T10:00:25.050Z",
		"symbol": "SR",
		"token": "0x10c56F005a379f8eAfc88ff5c3f40d30F0031AC9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 105248.49,
		"hash": "1bbd6c49365e5415f577105a120fc2d8e63a5aeeee74f2b5dfde65a03707e87c"
	},
	{
		"id": "05bb5b09d34d",
		"ts": "2026-08-13T08:17:18.097Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112459342.29,
		"hash": "05bb5b09d34db93579c81e682bc67ded7e65aa8c26997f88acccd6485e82ecb1"
	},
	{
		"id": "5dd9b75c141f",
		"ts": "2026-08-13T08:17:18.561Z",
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
		"liquidityUsd": 19619442.16,
		"hash": "5dd9b75c141f754fc8ce65b91a0d27e3ecce6640244c605f9da3d477c994c1bc"
	},
	{
		"id": "81d1003fd848",
		"ts": "2026-08-13T08:17:18.824Z",
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
		"liquidityUsd": 872678.72,
		"hash": "81d1003fd8488f8812ec902d6af02954b8419c2540050f67a191fb91ae6c2c3e"
	},
	{
		"id": "fc7fe2b9b67a",
		"ts": "2026-08-13T08:17:19.087Z",
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
		"liquidityUsd": 26912730.49,
		"hash": "fc7fe2b9b67aca5d1d9a2558041d6ba4970e09468145553daaa03a5499d58ef2"
	},
	{
		"id": "41b94268df70",
		"ts": "2026-08-13T08:17:19.352Z",
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
		"liquidityUsd": 4287321.9,
		"hash": "41b94268df702a0300c8ce9e01d34e2f42824db334adf9ed54477a60386d69a6"
	},
	{
		"id": "dcd0f11c8323",
		"ts": "2026-08-13T08:17:19.612Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 896427.7,
		"hash": "dcd0f11c83239cb66a8ef8da610c4fbb89cefbdbdc56f0be43d04113be031ebd"
	},
	{
		"id": "4edca3488aa9",
		"ts": "2026-08-13T08:17:19.874Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4342247.57,
		"hash": "4edca3488aa9afc130d6e5ccab2099abf858b03d754525c78945aea9ab4ec182"
	},
	{
		"id": "8612fa406353",
		"ts": "2026-08-13T08:17:20.138Z",
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
		"liquidityUsd": 4250614.16,
		"hash": "8612fa40635344132bf30402a5c26dd7fcc40c339394417cd52dbf6dd3679760"
	},
	{
		"id": "a04f222470d9",
		"ts": "2026-08-13T08:17:20.398Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 950409.74,
		"hash": "a04f222470d9d8713beb90c1a65181b390b6d32c478aa10634e5677f5816438c"
	},
	{
		"id": "52324b5d0fd8",
		"ts": "2026-08-13T08:17:20.658Z",
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
		"liquidityUsd": 4342251.19,
		"hash": "52324b5d0fd8cddab08e2808eea23b05f45a6632a375e6c55ff001afd4b58c35"
	},
	{
		"id": "e010aadfc2af",
		"ts": "2026-08-13T08:17:20.904Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 256431.7,
		"hash": "e010aadfc2aff40120f5b59f82ed01c41490c881f0067fd63bbe6892b17efccc"
	},
	{
		"id": "3cfe711d37b8",
		"ts": "2026-08-13T08:17:21.149Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2376789,
		"hash": "3cfe711d37b8b3e2117a182f0e1966bbb1196a99be812497bccf7c9c5f43a178"
	},
	{
		"id": "8cf3ae56dc4f",
		"ts": "2026-08-13T08:17:21.394Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 781422.36,
		"hash": "8cf3ae56dc4fee6c7f738a13be84a483962546173476358bd7b67ef2d521a415"
	},
	{
		"id": "7fff66c9dce3",
		"ts": "2026-08-13T08:17:21.639Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1481151.27,
		"hash": "7fff66c9dce34acd648ecf37c259a952ab572eafa0fec46a959636cb04421abb"
	},
	{
		"id": "6791756d25e4",
		"ts": "2026-08-13T08:17:21.886Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1945681.95,
		"hash": "6791756d25e4ef1028e903c83627581066487f6a76c52f3463761d3169f8c18f"
	},
	{
		"id": "7a1f3ef2dd50",
		"ts": "2026-08-13T08:17:22.131Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 827666.24,
		"hash": "7a1f3ef2dd507609b619892d982df65cfed48bbe1f5e27050e4120ebf9573ac9"
	},
	{
		"id": "aa5adb18ce9d",
		"ts": "2026-08-13T08:17:22.413Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9367760.28,
		"hash": "aa5adb18ce9dc60a409d1c90649bd883e4f8c1af1e8428925880588a9eeb7875"
	},
	{
		"id": "9e253082e204",
		"ts": "2026-08-13T06:13:26.788Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112540288.95,
		"hash": "9e253082e20472a1ddb9bd359851a8c7d31d92504ce311903390382aba168f6c"
	},
	{
		"id": "da08d99b84a8",
		"ts": "2026-08-13T06:13:27.233Z",
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
		"liquidityUsd": 19621877.62,
		"hash": "da08d99b84a828a2ac2c8a3bb4c70ed06fe32f9b6b95ad8b0ca1c978b98b7919"
	},
	{
		"id": "f5819ac4d5ee",
		"ts": "2026-08-13T06:13:27.472Z",
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
		"liquidityUsd": 890770.81,
		"hash": "f5819ac4d5ee88642083c6257e7512e80a8b6bad5ab11949cf3436e8ac896b23"
	},
	{
		"id": "968eeb12b7f2",
		"ts": "2026-08-13T06:13:27.710Z",
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
		"liquidityUsd": 26944255.94,
		"hash": "968eeb12b7f28fa7e640d8846595195603f6de9bbd625c2e381054b187e45fa7"
	},
	{
		"id": "e90aedb72cc3",
		"ts": "2026-08-13T06:13:27.952Z",
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
		"liquidityUsd": 4299110.28,
		"hash": "e90aedb72cc3dd9a311b78dad907fc3ba68caa01729804beb728be96f0f3ebd5"
	},
	{
		"id": "0eea59f76748",
		"ts": "2026-08-13T06:13:28.188Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 896427.7,
		"hash": "0eea59f76748df867f3002eb064bc0be9369b4c888478f3bb98a64bba0bbda70"
	},
	{
		"id": "dc4e000a2c78",
		"ts": "2026-08-13T06:13:28.426Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26944255.94,
		"hash": "dc4e000a2c787b6c0bbbc64f335ba5171c34c36a90a5ce7fb70dd67b17220122"
	},
	{
		"id": "884d413f5821",
		"ts": "2026-08-13T06:13:28.666Z",
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
		"liquidityUsd": 4251581.25,
		"hash": "884d413f5821ba5aa1c049557ea8e4946daf3499e7f27fa8de9b200754311b9c"
	},
	{
		"id": "769d556d13b6",
		"ts": "2026-08-13T06:13:28.905Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 941270.72,
		"hash": "769d556d13b6035f67ee788828814e60723ddcf63c90ec673b34576d39bc4332"
	},
	{
		"id": "2e6aab28b9cd",
		"ts": "2026-08-13T06:13:29.147Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2400719.48,
		"hash": "2e6aab28b9cd9cc642a54ab9052cb5e27b6506869753ce9343b71a22dfe0150c"
	},
	{
		"id": "9fc2e0b89381",
		"ts": "2026-08-13T06:13:29.376Z",
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
		"liquidityUsd": 258483.52,
		"hash": "9fc2e0b89381a8fdd3793f7a7d142db7e1d02f9474125f5c2c377beca0a72343"
	},
	{
		"id": "80271f5d87b4",
		"ts": "2026-08-13T06:13:29.599Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4573136.45,
		"hash": "80271f5d87b43ba299efdd2a3296af9e36d368fdac1022df67d944b90c296de7"
	},
	{
		"id": "af9d775587f5",
		"ts": "2026-08-13T06:13:29.823Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1943070.1,
		"hash": "af9d775587f52b62b77685d09e51a092b613e95f91d5c1d4f239a9c0e1a2aa50"
	},
	{
		"id": "4ab2d2477996",
		"ts": "2026-08-13T06:13:30.049Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1619399.66,
		"hash": "4ab2d2477996936c54c24437883c96375d528f3e822a5cf13a69217786e603e8"
	},
	{
		"id": "4f354e4e7afe",
		"ts": "2026-08-13T06:13:30.271Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 829893.02,
		"hash": "4f354e4e7afea066e59c4f4328b47642ac860caca5b2098a425ad841a494889e"
	},
	{
		"id": "d5f7b1901ee1",
		"ts": "2026-08-13T06:13:30.494Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 790875.34,
		"hash": "d5f7b1901ee1d1fb1d0ca527160a46beda12744d0a8f417b75ae7871922549df"
	},
	{
		"id": "8cb58f33f987",
		"ts": "2026-08-13T06:13:30.717Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9385561.07,
		"hash": "8cb58f33f9873e8e409119c317cdd8c203264372fe88288ee81e9fbb0fbaa23d"
	},
	{
		"id": "de0356390214",
		"ts": "2026-08-13T04:07:55.017Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112150207.35,
		"hash": "de03563902145d741697c8533ad399078eb0b8ebf2399a8ab49834dcd35fcb7c"
	},
	{
		"id": "cf13128c8d6c",
		"ts": "2026-08-13T04:07:55.242Z",
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
		"liquidityUsd": 17529904.8,
		"hash": "cf13128c8d6cfe9cf637aeea75cf3dda37c4597dce9a2cae4ecea9c65e582b52"
	},
	{
		"id": "bd0e410b79de",
		"ts": "2026-08-13T04:07:55.458Z",
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
		"liquidityUsd": 893569.6,
		"hash": "bd0e410b79dec75585680a0f685565911cc84e5310a0b30b8caf0aa72082e653"
	},
	{
		"id": "1488785c0529",
		"ts": "2026-08-13T04:07:55.664Z",
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
		"liquidityUsd": 26863368.8,
		"hash": "1488785c0529eaad3dee99029c7d1aa5c8025e1c0ec3d7836fceb114de1ea788"
	},
	{
		"id": "6e60da490312",
		"ts": "2026-08-13T04:07:55.859Z",
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
		"liquidityUsd": 4287689.49,
		"hash": "6e60da490312bdffc5543100791385eb21a1d9b7fcb14476b865c7ac7ed0fa66"
	},
	{
		"id": "43afc3513b3c",
		"ts": "2026-08-13T04:07:56.060Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 896427.7,
		"hash": "43afc3513b3c9fc9e435ef129ab7b624f0ab7a77797ad2468d4e413fa6e3e6e2"
	},
	{
		"id": "0824a95a1d19",
		"ts": "2026-08-13T04:07:56.264Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26863368.8,
		"hash": "0824a95a1d19c3637fd8f77dcf71fa17d3e1309cb886f6340cb8179637630bbf"
	},
	{
		"id": "e298a06f395d",
		"ts": "2026-08-13T04:07:56.490Z",
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
		"liquidityUsd": 4237364.93,
		"hash": "e298a06f395d3688e1ce1ab8fcb361b72e59a9444ed49658ae858b40291257fd"
	},
	{
		"id": "efe7d9e40362",
		"ts": "2026-08-13T04:07:56.679Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 946368.8,
		"hash": "efe7d9e40362dac939bab1dc8cacde80c7d0a8cb3cadca27b18b81f4e8e893f9"
	},
	{
		"id": "52be74ba253c",
		"ts": "2026-08-13T04:07:56.880Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2409025.94,
		"hash": "52be74ba253ce426e2f08b2796f809cc4a975dfd214fd7577dc997a6e236d0f8"
	},
	{
		"id": "8682828ae433",
		"ts": "2026-08-13T04:07:57.080Z",
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
		"liquidityUsd": 259539,
		"hash": "8682828ae4338a7bb314f6145007b77808a7230726a2bd540b7e42eee700386a"
	},
	{
		"id": "68c4455a6e5e",
		"ts": "2026-08-13T04:07:57.269Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4406405.07,
		"hash": "68c4455a6e5e4199daea150976abdb58cc2f42eb19b78e7336ff8f7ee3766248"
	},
	{
		"id": "5a55bf5bca50",
		"ts": "2026-08-13T04:07:57.465Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1949446.37,
		"hash": "5a55bf5bca50ad74556fd3e3b82dc8d87b1bfa7eab648f6991072b12fdd29a51"
	},
	{
		"id": "ac335786b317",
		"ts": "2026-08-13T04:07:57.653Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1683491.3,
		"hash": "ac335786b3170d2e2226146fcff1faebed1c94d8c143276de42709faf28802dd"
	},
	{
		"id": "86ccc83d5d93",
		"ts": "2026-08-13T04:07:57.874Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 827049.76,
		"hash": "86ccc83d5d93473ac24ea886d0fe9cdcd4cee457be09126793f138eff5ab11be"
	},
	{
		"id": "ca8eb74ebd54",
		"ts": "2026-08-13T04:07:58.067Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4129716.16,
		"hash": "ca8eb74ebd54422a1e80a36ddb43781c10f6050f97822bad7dfb430ed44afccd"
	},
	{
		"id": "47b4e716a456",
		"ts": "2026-08-13T04:07:58.265Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 797520.33,
		"hash": "47b4e716a4562bbab5f829b26b66d2489e584e0ce13970304188fc302b50c580"
	},
	{
		"id": "bf31087b3de4",
		"ts": "2026-08-13T04:07:58.453Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9510385.16,
		"hash": "bf31087b3de42830ae7a7e368deffd8e65189e1378f26965277d448a71c5c498"
	},
	{
		"id": "5741f40b3955",
		"ts": "2026-08-13T01:40:46.180Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111962701.56,
		"hash": "5741f40b3955f8fa72755cb2f70ec411c7b15c495988c7da4b8ffc8d94ab6828"
	},
	{
		"id": "a3557466185a",
		"ts": "2026-08-13T01:40:46.510Z",
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
		"liquidityUsd": 18701426.19,
		"hash": "a3557466185aa36113bde44689eabf15b7c9a99208aa73bce223179c1f102c5b"
	},
	{
		"id": "2b18d37a45e0",
		"ts": "2026-08-13T01:40:46.708Z",
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
		"liquidityUsd": 907524.7,
		"hash": "2b18d37a45e0b610b61289af2b0dce4e9863727708d63bdb4e6b669d52082400"
	},
	{
		"id": "5bada62ccd86",
		"ts": "2026-08-13T01:40:47.036Z",
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
		"liquidityUsd": 26841518.06,
		"hash": "5bada62ccd8646efb98ecc187e5cee6821ed11c7d464c738ead15321ccc3f380"
	},
	{
		"id": "96c4cdb21589",
		"ts": "2026-08-13T01:40:47.226Z",
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
		"liquidityUsd": 4277132.75,
		"hash": "96c4cdb215895e933a6706f351abce78372197ba7400e819493a63ee6c828050"
	},
	{
		"id": "89eee5c3e745",
		"ts": "2026-08-13T01:40:47.421Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 894514.43,
		"hash": "89eee5c3e74506b290036dbf1dbd3f0012854e0bb17f259012b9f8aae83eaf5c"
	},
	{
		"id": "9d208458306f",
		"ts": "2026-08-13T01:40:47.603Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4370685.44,
		"hash": "9d208458306f3fba7eb02a67bb5cc24e8cc81f2ea0b0fa5a7b515bd39f41bb3e"
	},
	{
		"id": "e171de20d199",
		"ts": "2026-08-13T01:40:47.840Z",
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
		"liquidityUsd": 4223131.7,
		"hash": "e171de20d1996c03ff0651bba0bbbd7c1b5e0c6218509ebd3a791021d411e7d5"
	},
	{
		"id": "43ceb243f252",
		"ts": "2026-08-13T01:40:48.023Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 947944.78,
		"hash": "43ceb243f25203ffcdf4dbb4d1db8431cffe1779ece2af329f98b3169cf3c77f"
	},
	{
		"id": "0c8d6c15e328",
		"ts": "2026-08-13T01:40:48.209Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4352041.35,
		"hash": "0c8d6c15e328def0886fc99c9de46ac4ff33f7f711fe02418221488940accab1"
	},
	{
		"id": "c0cdd8d4a221",
		"ts": "2026-08-13T01:40:48.402Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2400640.65,
		"hash": "c0cdd8d4a221cc7e757c8ec0d66422eba10badc0c2cfcf270f29fb640d2d8670"
	},
	{
		"id": "9f2b47aca9b3",
		"ts": "2026-08-13T01:40:48.591Z",
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
		"liquidityUsd": 256550.18,
		"hash": "9f2b47aca9b36560ce789e0fcafa6d8314fec856fb5098f678258a1bb93dea91"
	},
	{
		"id": "7190e5589b56",
		"ts": "2026-08-13T01:40:48.778Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 820483.28,
		"hash": "7190e5589b56c0149913c0549d76c91d8fbfce2ff07f588d5e71aff99c2a42a0"
	},
	{
		"id": "227c0a7a3467",
		"ts": "2026-08-13T01:40:48.961Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4108797.45,
		"hash": "227c0a7a34672d70838a1462a00b2ff48c2abe72fd2fa13ec3169ab2059dd5e9"
	},
	{
		"id": "c57edabe06d7",
		"ts": "2026-08-13T01:40:49.147Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1733955.29,
		"hash": "c57edabe06d70075e156be1f5695bc8f648717ea840c61837be999549fd11180"
	},
	{
		"id": "223e42a03f3f",
		"ts": "2026-08-13T01:40:49.333Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1945741.36,
		"hash": "223e42a03f3f86635ae01df45d6dfc36e2d534035387910a709c59c7cc8f4829"
	},
	{
		"id": "d446ee9b8e76",
		"ts": "2026-08-13T01:40:49.536Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9338606.14,
		"hash": "d446ee9b8e76095e60067818f7d201abb59c8eb4f7acef6f7eb402f1247d5afd"
	},
	{
		"id": "0edfc77436fd",
		"ts": "2026-08-12T23:36:52.367Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111988860.35,
		"hash": "0edfc77436fd6c59ba2cae59faefba6b6317d26ab00c7d16c65c6eca65d3c5af"
	},
	{
		"id": "f89433cd2a51",
		"ts": "2026-08-12T23:36:52.568Z",
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
		"liquidityUsd": 17992072.47,
		"hash": "f89433cd2a51cd8df3c5cb640ad9c4632038881f83f4e009a95745607960a70f"
	},
	{
		"id": "da07e567d01c",
		"ts": "2026-08-12T23:36:52.782Z",
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
		"liquidityUsd": 908383.79,
		"hash": "da07e567d01cc0f963e5a993c13aa1c4b6a6ea81ff46571b1bf2964eb940fa1b"
	},
	{
		"id": "4b1ecdca4040",
		"ts": "2026-08-12T23:36:52.985Z",
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
		"liquidityUsd": 26814162.77,
		"hash": "4b1ecdca404087a0a8b2194ffaa47014c6465b79093f8cfd46fe47035c0d072e"
	},
	{
		"id": "22fdfaf7bb40",
		"ts": "2026-08-12T23:36:53.190Z",
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
		"liquidityUsd": 4259030.57,
		"hash": "22fdfaf7bb40564b831f9a584e66dabdd3e7e286d51ffb492deaa50377d5e6a3"
	},
	{
		"id": "d9b785aee2ca",
		"ts": "2026-08-12T23:36:53.405Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 890450.1,
		"hash": "d9b785aee2ca8649453b503c60bf62083926c7afdf5ed8388568ca46da114401"
	},
	{
		"id": "9c511053e4e4",
		"ts": "2026-08-12T23:36:53.594Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4552420.01,
		"hash": "9c511053e4e41cd065933aad5fb2a15ab65d2e999aa6b99bd216a4d61e8e8fce"
	},
	{
		"id": "435253776e4e",
		"ts": "2026-08-12T23:36:53.788Z",
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
		"liquidityUsd": 4372812.7,
		"hash": "435253776e4e94b6cae56c372805d497215f904d2c7e0d0a3f4c026f8082ea8f"
	},
	{
		"id": "14a5c810b271",
		"ts": "2026-08-12T23:36:53.978Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 939103.72,
		"hash": "14a5c810b2710fe59d17236a7d8c219efd2b16fc3f5d85d816794ca7a2842e08"
	},
	{
		"id": "be282dd1a7bd",
		"ts": "2026-08-12T23:36:54.171Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4552420.01,
		"hash": "be282dd1a7bdf679043f0b2465a77b9329f46da47d2bc24bdd170f151fbc0fa0"
	},
	{
		"id": "fac739d0f7eb",
		"ts": "2026-08-12T23:36:54.363Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2420216.87,
		"hash": "fac739d0f7eb8b552a77d4dc1c63d7c481ff17de8ec7716e23a8f9c258ea9175"
	},
	{
		"id": "37b56a8482d7",
		"ts": "2026-08-12T23:36:54.552Z",
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
		"liquidityUsd": 255787.16,
		"hash": "37b56a8482d75f1c41ecdaaf2af6d4ab49777869fa7dab4a4318c3e521987b16"
	},
	{
		"id": "79f494fa8d96",
		"ts": "2026-08-12T23:36:54.770Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 818205.11,
		"hash": "79f494fa8d96e8156e63cf4920b064e1708e4463a51944bdc5cc7d56acdb67a5"
	},
	{
		"id": "e627d37f2e33",
		"ts": "2026-08-12T23:36:54.962Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4099147.08,
		"hash": "e627d37f2e3380b7432d842ddc30eb49e9f1ee9e88219a3a47ecee8528c7b033"
	},
	{
		"id": "24517c2f45ef",
		"ts": "2026-08-12T23:36:55.150Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1995046.74,
		"hash": "24517c2f45ef5015f60a29ef655d6412f5ec25dc88032308becb9f41ceb76b6b"
	},
	{
		"id": "e0a1e7bd0b48",
		"ts": "2026-08-12T23:36:55.354Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9291997.56,
		"hash": "e0a1e7bd0b484a2c0435ca4fecce33640ec85f590c50d781d02182d0d57ce1e1"
	},
	{
		"id": "cd0dbe60a332",
		"ts": "2026-08-12T23:36:55.543Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1750162.27,
		"hash": "cd0dbe60a3327ca4be3f950293f0652aa09e7b1c5323514d6001d2c3cfc5e1fc"
	},
	{
		"id": "7a732a512915",
		"ts": "2026-08-12T22:36:25.868Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112000855.51,
		"hash": "7a732a51291557e9921890284a219eb85bb0eb9be59745ddeafc83a433817b8f"
	},
	{
		"id": "303ac0147969",
		"ts": "2026-08-12T22:36:26.102Z",
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
		"liquidityUsd": 18000823.63,
		"hash": "303ac0147969e9b20c729024bd14bd3b543db3018ee221981e9b3afe5e4dc3ee"
	},
	{
		"id": "fdc980b710f8",
		"ts": "2026-08-12T22:36:26.333Z",
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
		"liquidityUsd": 908383.79,
		"hash": "fdc980b710f857c61e9ad94bbf9854243b30da6455d9dfec08f657fb72e18a82"
	},
	{
		"id": "7633c0fa975a",
		"ts": "2026-08-12T22:36:26.777Z",
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
		"liquidityUsd": 26813957.76,
		"hash": "7633c0fa975a054dcde956081ca2cbbb931e5d5591d690962a840faa530bc004"
	},
	{
		"id": "7fed40c701f4",
		"ts": "2026-08-12T22:36:27.011Z",
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
		"liquidityUsd": 4253744.02,
		"hash": "7fed40c701f47f9b0a5496391797307a351062075d1f9e22a2296c6c7f349129"
	},
	{
		"id": "65a96b03dc82",
		"ts": "2026-08-12T22:36:27.257Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 890120.48,
		"hash": "65a96b03dc8256de81a011489631afc8444bdd2b84093fc40f74eeaabcbfd3cc"
	},
	{
		"id": "9bd22ab64a2a",
		"ts": "2026-08-12T22:36:27.483Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4521221.64,
		"hash": "9bd22ab64a2a612f678fb81d47d1a5305847af85ca0dd43ab22f701991adc9c1"
	},
	{
		"id": "d0789da04766",
		"ts": "2026-08-12T22:36:27.719Z",
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
		"liquidityUsd": 4378992.19,
		"hash": "d0789da04766d4d655f9ddeb9bfe98c10243dc238e9a0ac3fe49fdadc8ee598f"
	},
	{
		"id": "9f4c7c947236",
		"ts": "2026-08-12T22:36:27.947Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 938962.16,
		"hash": "9f4c7c947236a56d6be81a66f02756d079152208d6a35663b90800ff7181f14e"
	},
	{
		"id": "430ca07af025",
		"ts": "2026-08-12T22:36:28.172Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4521221.41,
		"hash": "430ca07af02529764ea480fd89d88973ffe941f0e8997fc5d73728661519982f"
	},
	{
		"id": "cc4a73c09e2e",
		"ts": "2026-08-12T22:36:28.390Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2411489.53,
		"hash": "cc4a73c09e2e32f353de94a70c6b39292e33932dcb0433da2fbd6d8b87756db2"
	},
	{
		"id": "12143296644c",
		"ts": "2026-08-12T22:36:28.604Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 256155.6,
		"hash": "12143296644c9c4671e4b24e137e7c6148bae23285f16ea65dbb7f303870892a"
	},
	{
		"id": "c7e6f64b4bb2",
		"ts": "2026-08-12T22:36:28.813Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 818852.81,
		"hash": "c7e6f64b4bb22775607f580e4e7cffb63c7f1f99d006cced8cd8264d686f4074"
	},
	{
		"id": "d941051ca805",
		"ts": "2026-08-12T22:36:29.031Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4109167.48,
		"hash": "d941051ca805d41a380e1b5559d0a0ed56b5909b5657899a23d803841489d776"
	},
	{
		"id": "de8da2077d14",
		"ts": "2026-08-12T22:36:29.243Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1997105.31,
		"hash": "de8da2077d142200bd486cc41662578379056d5dc9435be5ee3a5760dae0ad97"
	},
	{
		"id": "0cc9f675c4bb",
		"ts": "2026-08-12T22:36:29.454Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9274686.76,
		"hash": "0cc9f675c4bbfc1b614dfdf3c1bc69d5fee79f348adbc8d1049899a8a9dddfd4"
	},
	{
		"id": "a4190d5b17e0",
		"ts": "2026-08-12T22:36:29.671Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1751858.76,
		"hash": "a4190d5b17e048b3e6711178480bafaa262cc3fcc8d974739fc5724c5669148c"
	},
	{
		"id": "cae78b5cf8f8",
		"ts": "2026-08-12T21:40:56.648Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111990615.38,
		"hash": "cae78b5cf8f86fc270463cdeca81ca6c1cd7d433bb72e68e9fc8b9dd4888c34d"
	},
	{
		"id": "4f46654dbe1e",
		"ts": "2026-08-12T21:40:56.892Z",
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
		"liquidityUsd": 17830693.7,
		"hash": "4f46654dbe1eb75984149f4ae8244624014804742d15479c6077d7a006e1bf34"
	},
	{
		"id": "cbf85290e10d",
		"ts": "2026-08-12T21:40:57.118Z",
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
		"liquidityUsd": 911910.73,
		"hash": "cbf85290e10dc18b2af5099cfe1f7905aef0f4b947e411e0e49312284fe7764a"
	},
	{
		"id": "b694fd3ffd41",
		"ts": "2026-08-12T21:40:57.562Z",
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
		"liquidityUsd": 26802202.57,
		"hash": "b694fd3ffd4108f4e52e9f4e3f669126159900ec5868d3f23cb364e1b8c7bcfc"
	},
	{
		"id": "f692016551e7",
		"ts": "2026-08-12T21:40:57.834Z",
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
		"liquidityUsd": 4283426.43,
		"hash": "f692016551e7bd01f03b80fddabcbb165bf8034a9195ff6536b86fc9a9a42e3c"
	}
]
