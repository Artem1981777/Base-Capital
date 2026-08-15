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
	"updatedAt": "2026-08-15T03:34:43.814Z",
	"tokensScored": 10248,
	"verdictsIssued": 10248,
	"safe": 8927,
	"risky": 762,
	"likelyRug": 559,
	"ticks": 617
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "6ecdc4db7ffe",
		"ts": "2026-08-15T03:34:39.955Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111724806.86,
		"hash": "6ecdc4db7ffe364f03c8cc1776c55b05f9471846f356c66870569ed1b691fea1"
	},
	{
		"id": "9a59228ef3da",
		"ts": "2026-08-15T03:34:40.200Z",
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
		"liquidityUsd": 15583154.99,
		"hash": "9a59228ef3dabf36197870422cc4f158c68147e5499592f87e5bb9441970b652"
	},
	{
		"id": "2b088e8703b1",
		"ts": "2026-08-15T03:34:40.448Z",
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
		"liquidityUsd": 798477.66,
		"hash": "2b088e8703b18427952479d262cf8c8d5e60741e4e4722a673c9f762b28d7fe5"
	},
	{
		"id": "1be84453bc6a",
		"ts": "2026-08-15T03:34:40.697Z",
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
		"liquidityUsd": 26611203.9,
		"hash": "1be84453bc6a2f143ef121dd94668552e39ca4a6a2f1a555931278c66439a6d0"
	},
	{
		"id": "04b0194cd3b3",
		"ts": "2026-08-15T03:34:40.934Z",
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
		"liquidityUsd": 4154124.01,
		"hash": "04b0194cd3b383012458e59fb86e3f1634134dc2e11fe1f75582dc69de25502d"
	},
	{
		"id": "e3b2eef85a27",
		"ts": "2026-08-15T03:34:41.183Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 893791.13,
		"hash": "e3b2eef85a274640514d865bf846c2583f46dbfef2465e9abb93e3b9317d47e7"
	},
	{
		"id": "dce88fe345ab",
		"ts": "2026-08-15T03:34:41.425Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6202670.14,
		"hash": "dce88fe345ab7ce83b55d5d25e0f48b7d2d00f201e2a2bb67e66db5f1a2534aa"
	},
	{
		"id": "e26541ba985e",
		"ts": "2026-08-15T03:34:41.695Z",
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
		"liquidityUsd": 3819200.53,
		"hash": "e26541ba985ec1aa10508418cba6db782af0b11924922d69565082ddb319302c"
	},
	{
		"id": "4d894b7074e8",
		"ts": "2026-08-15T03:34:41.943Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 6237851.65,
		"hash": "4d894b7074e8f2702f02699711e47695408493d4f5e822dc583d074083ef564d"
	},
	{
		"id": "43be8b4013fa",
		"ts": "2026-08-15T03:34:42.232Z",
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
		"liquidityUsd": 894972.83,
		"hash": "43be8b4013fa46a1e2d9e1363b363427b3f1473f7123680cb4e88a8c6ccbf82a"
	},
	{
		"id": "22e0b8f394b3",
		"ts": "2026-08-15T03:34:42.450Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 257806.25,
		"hash": "22e0b8f394b36b3f8562a7d08c113eabb03955423d7d3663a9ca4317491f9a4c"
	},
	{
		"id": "9b4d8b07a3df",
		"ts": "2026-08-15T03:34:42.680Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 646030.98,
		"hash": "9b4d8b07a3dfa4d45a21991eef5268243ba49c0164f2812f21cd9e4ed465f797"
	},
	{
		"id": "745a0a3e4e55",
		"ts": "2026-08-15T03:34:42.916Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2469286.73,
		"hash": "745a0a3e4e55ca7bacce3aed71904ee6adb0d4fa50588491d7f2063f66fb353e"
	},
	{
		"id": "aabeecb3c257",
		"ts": "2026-08-15T03:34:43.136Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1522437.44,
		"hash": "aabeecb3c2578660d1cb19bfd3259db2b5461c44aaffc2475e143a980e6a8070"
	},
	{
		"id": "e5eb11257314",
		"ts": "2026-08-15T03:34:43.365Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 847265.21,
		"hash": "e5eb112573148232eb18cbed1c24645c43c4b0cd061a4e04d6abd305fe52c90d"
	},
	{
		"id": "018a72e57e21",
		"ts": "2026-08-15T03:34:43.595Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4151433.67,
		"hash": "018a72e57e2144da62a39b67e5f846348ef7caca140741c29a802c666ba8191a"
	},
	{
		"id": "15eb6d592fc3",
		"ts": "2026-08-15T03:34:43.814Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9436726.68,
		"hash": "15eb6d592fc37f133579b6940c14b9106161c49e4299ca8d89771e6a7a195daf"
	},
	{
		"id": "6ec0c41a2c64",
		"ts": "2026-08-15T02:47:44.049Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111701976.86,
		"hash": "6ec0c41a2c645f6e3280b4f007002888a2f55451ad17730a02235dc4524f28ba"
	},
	{
		"id": "484fb7d72022",
		"ts": "2026-08-15T02:47:44.375Z",
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
		"liquidityUsd": 16840682.75,
		"hash": "484fb7d72022e76f378faa22df2e057847599c7af6644e7448e313008dd474d4"
	},
	{
		"id": "81585d620796",
		"ts": "2026-08-15T02:47:44.579Z",
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
		"liquidityUsd": 798477.66,
		"hash": "81585d62079609fa71df7848924465c61c0173decbcb41d5ac016166805915c2"
	},
	{
		"id": "ca022e8b1be1",
		"ts": "2026-08-15T02:47:44.820Z",
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
		"liquidityUsd": 26600789.04,
		"hash": "ca022e8b1be193f0db1b2a7f128a4ef8a2fd13687a16660986aee42f6d4ea662"
	},
	{
		"id": "397814c1d40c",
		"ts": "2026-08-15T02:47:45.017Z",
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
		"liquidityUsd": 4156412.22,
		"hash": "397814c1d40c756688bfabba465b48cc4be0c803f04b40f8171528708aadff75"
	},
	{
		"id": "c376b0b419c0",
		"ts": "2026-08-15T02:47:45.215Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 893791.13,
		"hash": "c376b0b419c02d483eacf7031a65d060be04eaeaca7876b212db2e38131b83ee"
	},
	{
		"id": "5f2ac9d573d2",
		"ts": "2026-08-15T02:47:45.407Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6238479.07,
		"hash": "5f2ac9d573d2e539bdfc55ee2da5cb3edcefac3ccebdc69754af715d05289b2e"
	},
	{
		"id": "3e793725b387",
		"ts": "2026-08-15T02:47:45.605Z",
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
		"liquidityUsd": 3818611.64,
		"hash": "3e793725b387f95774079820ea469f218c6986d20defbbf17c6acde8780bc24c"
	},
	{
		"id": "c58d6a178b08",
		"ts": "2026-08-15T02:47:45.878Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 6238479.07,
		"hash": "c58d6a178b0885c83cb8b030ff93e8629aece2c2d908ebcef183b3d6623c8c6f"
	},
	{
		"id": "e40ddcca1572",
		"ts": "2026-08-15T02:47:46.068Z",
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
		"liquidityUsd": 900051.66,
		"hash": "e40ddcca1572e07490cc80c40de339d21c36f8ce0147627b8acdfc8bc05073f5"
	},
	{
		"id": "a9a8fd17ee2b",
		"ts": "2026-08-15T02:47:46.261Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2475203.57,
		"hash": "a9a8fd17ee2bbfb1367ad6fc3e6624581d23a8a5b0e755828ebd20fda36cc784"
	},
	{
		"id": "27141260e48d",
		"ts": "2026-08-15T02:47:46.457Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 257560.98,
		"hash": "27141260e48d74028a31322a7b0608e5f8c77c643cecbb460b193d9f122757b8"
	},
	{
		"id": "b6cc1128ea1e",
		"ts": "2026-08-15T02:47:46.651Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 639435.53,
		"hash": "b6cc1128ea1e12dbfb06fa223ea2df68a2b31cb00f89a926b1e680e5a31635f1"
	},
	{
		"id": "dcb1e70cb43e",
		"ts": "2026-08-15T02:47:46.839Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1521585.11,
		"hash": "dcb1e70cb43e994de73109a054800c8213bc8f0eae084c4e501562de46d9f93a"
	},
	{
		"id": "a6121045dfc1",
		"ts": "2026-08-15T02:47:47.048Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 712434.39,
		"hash": "a6121045dfc1bac71f22e8c7664f50636e6a859058cbb44c3225780109575646"
	},
	{
		"id": "68a3a0e8ef94",
		"ts": "2026-08-15T02:47:47.251Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4150572.73,
		"hash": "68a3a0e8ef942e566f55ac4bcb054646f366e22369d68dd21ef7f2cd27306fd2"
	},
	{
		"id": "90e57475fd5f",
		"ts": "2026-08-15T02:47:47.456Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9441009,
		"hash": "90e57475fd5faf6fe0ff745caec435a75654624de63f3da6a12204c731e5c26b"
	},
	{
		"id": "c50aa6345f69",
		"ts": "2026-08-15T01:00:47.993Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111672594.77,
		"hash": "c50aa6345f69703d1869fc614b760931733cb8caad2eada7ed6d841a3bca60b0"
	},
	{
		"id": "6a24bee9e59f",
		"ts": "2026-08-15T01:00:48.228Z",
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
		"liquidityUsd": 16749301.26,
		"hash": "6a24bee9e59f770ae938fb19a8bec8ef90124bb2e2fe0895720783584eb14213"
	},
	{
		"id": "1da432cdf614",
		"ts": "2026-08-15T01:00:48.467Z",
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
		"liquidityUsd": 800536.61,
		"hash": "1da432cdf6149dd57a13d5f351bf534a3d3587a926eb67780df3bf4cc03c598b"
	},
	{
		"id": "db2705b3e28b",
		"ts": "2026-08-15T01:00:48.702Z",
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
		"liquidityUsd": 26576088.88,
		"hash": "db2705b3e28bf7b59cec02c0b30048b5716d9fb0eae5eb771afa92eaead9271f"
	},
	{
		"id": "39f84e9e116f",
		"ts": "2026-08-15T01:00:48.942Z",
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
		"liquidityUsd": 4147445.42,
		"hash": "39f84e9e116f17743b8600328ccf1ca6ea01789c541204fdda4b1076473a6ddc"
	},
	{
		"id": "ad2ba32043c4",
		"ts": "2026-08-15T01:00:49.176Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 893791.13,
		"hash": "ad2ba32043c4f2daf0b90fe989826471af1719102c78396d7890f16a76447da9"
	},
	{
		"id": "fa45a3528bad",
		"ts": "2026-08-15T01:00:49.421Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6048342.36,
		"hash": "fa45a3528bada267e031048feb4b294cc5cf154477842b9c8c10b24a558423a4"
	},
	{
		"id": "f3e2c38d22e4",
		"ts": "2026-08-15T01:00:49.659Z",
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
		"liquidityUsd": 3813986.97,
		"hash": "f3e2c38d22e4ca4974d10ef36c56972ee728fc957380f070ec97a1c4b999d08a"
	},
	{
		"id": "4e3d61ae7ab9",
		"ts": "2026-08-15T01:00:49.896Z",
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
		"liquidityUsd": 898828.14,
		"hash": "4e3d61ae7ab940970d7a0bb3a5c3e0ec9342d9df36471a7dff0cc069f38f2287"
	},
	{
		"id": "1540d7283239",
		"ts": "2026-08-15T01:00:50.129Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 6045533.24,
		"hash": "1540d72832391b0aaf9bc277a7a0d5cb535807da17efe8058a03ab3a602e529d"
	},
	{
		"id": "bfdadc82de52",
		"ts": "2026-08-15T01:00:50.354Z",
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
		"liquidityUsd": 2465147.9,
		"hash": "bfdadc82de52253492a84fe77d830a081f012d9517b9204a304c13e7fa92975f"
	},
	{
		"id": "9fe505ba835e",
		"ts": "2026-08-15T01:00:50.571Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 262108.73,
		"hash": "9fe505ba835e6f448ec767e747214d272bb56577f69a9be47018c66c739a5546"
	},
	{
		"id": "4140325a4c5f",
		"ts": "2026-08-15T01:00:50.792Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 655411.07,
		"hash": "4140325a4c5fc0928698d55adbe14c0432e4eccdf7c2fdd3e0607c4c9d24c00c"
	},
	{
		"id": "5b9837541803",
		"ts": "2026-08-15T01:00:51.015Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1519326.32,
		"hash": "5b98375418036972a6b1db2b071b1fe34f8689e6feac7c1ca774e9b89f88d7c3"
	},
	{
		"id": "148b5aede3ef",
		"ts": "2026-08-15T01:00:51.234Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 849627.79,
		"hash": "148b5aede3efe8d224c3babae1018dcb0f688b55e1cc0d72e598ffa160a24211"
	},
	{
		"id": "ec5dcb715160",
		"ts": "2026-08-15T01:00:51.458Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4144153.26,
		"hash": "ec5dcb715160bf3f77a628c9348d533a27b515805dc78e6f7d382c683a2fb0ff"
	},
	{
		"id": "9dbe30991d29",
		"ts": "2026-08-15T01:00:51.674Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9437977.51,
		"hash": "9dbe30991d29b7e707e4bd3f684065aae5b171e421a9992b95216c871b0d15e6"
	},
	{
		"id": "cca7bd3611c8",
		"ts": "2026-08-14T23:17:31.909Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111752186.23,
		"hash": "cca7bd3611c86b9b9c39f33459dd2508e586c74df9810402175b2f47d9436a81"
	},
	{
		"id": "a6d1135ddc1d",
		"ts": "2026-08-14T23:17:32.326Z",
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
		"liquidityUsd": 16144191.05,
		"hash": "a6d1135ddc1d4c9f81b5c2a2d8724c44b6973cff4879fcdf28d8013e7ea8ce66"
	},
	{
		"id": "d2d5ee759fc5",
		"ts": "2026-08-14T23:17:32.560Z",
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
		"liquidityUsd": 801051.37,
		"hash": "d2d5ee759fc568c67b83c39bc99b5033ada64c90f0030c60ac1bd4e595d96547"
	},
	{
		"id": "29170fa6d960",
		"ts": "2026-08-14T23:17:32.785Z",
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
		"liquidityUsd": 26544262.7,
		"hash": "29170fa6d9600ca62742c6a6f3a17014f3dd9b164a2401fca1f847e78f39f80f"
	},
	{
		"id": "9c405886d718",
		"ts": "2026-08-14T23:17:33.017Z",
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
		"liquidityUsd": 4157458.72,
		"hash": "9c405886d7183e0be819b42d95fa51dfb05815a35feb7b5af7c1327e3ef31956"
	},
	{
		"id": "b8f296744282",
		"ts": "2026-08-14T23:17:33.260Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889873.4,
		"hash": "b8f2967442828a7f5bbbd7ba23bceedcb3d7bf1b4dd3411c2ea7b934e0f62db4"
	},
	{
		"id": "93b2d92628c4",
		"ts": "2026-08-14T23:17:33.490Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6087312.72,
		"hash": "93b2d92628c4c630952a5a17ae48168cb6a952b5c50dc8d55ef826e2ab0f1e8e"
	},
	{
		"id": "e4b570ed2fee",
		"ts": "2026-08-14T23:17:33.712Z",
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
		"liquidityUsd": 3811047.32,
		"hash": "e4b570ed2fee413bba08e5576747a1724ea15505ace0e79a84ab719768c464a3"
	},
	{
		"id": "4e646d54b535",
		"ts": "2026-08-14T23:17:33.942Z",
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
		"liquidityUsd": 898940.73,
		"hash": "4e646d54b53580b60e4d092002ab6ad2e6cff6592a5980c63f83e31f9321a38c"
	},
	{
		"id": "8ea1964309d2",
		"ts": "2026-08-14T23:17:34.162Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2455398.25,
		"hash": "8ea1964309d207528b631281b268da13801bc23f667a4b9d897e1296b2e6466e"
	},
	{
		"id": "0b3b3d7bd9bb",
		"ts": "2026-08-14T23:17:34.380Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 640620.84,
		"hash": "0b3b3d7bd9bb693a89c168f5e124d8e4dd2193ea8a0d27995dc366e09accd832"
	},
	{
		"id": "8dbe7b300865",
		"ts": "2026-08-14T23:17:34.586Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6087312.72,
		"hash": "8dbe7b300865a5f32aeaa761257db35726f4c97a0fa06169adf2eee5c1b8a9fb"
	},
	{
		"id": "4dc3d4496127",
		"ts": "2026-08-14T23:17:34.805Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 268722.85,
		"hash": "4dc3d4496127a9353196e5ed2b626ddbdec05d2f050eb461eee05f627332f74d"
	},
	{
		"id": "cf66bd7ff5e0",
		"ts": "2026-08-14T23:17:35.012Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1518661.33,
		"hash": "cf66bd7ff5e02fcb5d338c6197ab4a848fac8abe2767f2883b413a3f363b4bd5"
	},
	{
		"id": "7eab02af946e",
		"ts": "2026-08-14T23:17:35.280Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 847329.31,
		"hash": "7eab02af946e9a5b3942fcc8c896ed14115ec71e9ccc3e3ff68b757f2694e87d"
	},
	{
		"id": "909dc50f99db",
		"ts": "2026-08-14T23:17:35.487Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9516931.86,
		"hash": "909dc50f99db2b68a0798549983fd23b2bfa6a608ba6134eba98bd5f1333b663"
	},
	{
		"id": "ccac45d1d6c4",
		"ts": "2026-08-14T23:17:35.706Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4137377.09,
		"hash": "ccac45d1d6c4664ba98ef1414977372b47449f40ab4bce6ad736b6ba3e70ad8f"
	},
	{
		"id": "a9255a3e3ef2",
		"ts": "2026-08-14T22:18:30.974Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111748688.86,
		"hash": "a9255a3e3ef2baa8801e46636cc42153360cda35fa6704fa0dc370f1dc742fee"
	},
	{
		"id": "519cf827e7cf",
		"ts": "2026-08-14T22:18:31.341Z",
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
		"liquidityUsd": 16265263.89,
		"hash": "519cf827e7cf368af384b5646ed0ab2f6bb7000bd63461aa9f57e3dda5e5e674"
	},
	{
		"id": "2b2d24c7c9ae",
		"ts": "2026-08-14T22:18:31.608Z",
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
		"liquidityUsd": 801150.8,
		"hash": "2b2d24c7c9ae34a69e5b43ac6c71f4e4eb9c729b622cecda284a5e36b7d5997a"
	},
	{
		"id": "301be68b14f1",
		"ts": "2026-08-14T22:18:31.812Z",
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
		"liquidityUsd": 26544022.97,
		"hash": "301be68b14f13b41671b5bd78dda3390174c9cf8c2f4237d9e681fbf1344e46f"
	},
	{
		"id": "965e9aba5eee",
		"ts": "2026-08-14T22:18:32.159Z",
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
		"liquidityUsd": 4160388.59,
		"hash": "965e9aba5eee0f403977be6d293b787ece0b94184684b5a55b36fe962237621a"
	},
	{
		"id": "5906ae6be4d7",
		"ts": "2026-08-14T22:18:32.382Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889873.4,
		"hash": "5906ae6be4d714d3297e48394a5d8f0e63fe3da64b7664e4206d1f0f028f9394"
	},
	{
		"id": "4608efd207a0",
		"ts": "2026-08-14T22:18:32.568Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6014198.75,
		"hash": "4608efd207a0de413decd4ae7cf92dcd205596c215554e63656acec7234b0056"
	},
	{
		"id": "7900b660a3f3",
		"ts": "2026-08-14T22:18:32.792Z",
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
		"liquidityUsd": 3804239,
		"hash": "7900b660a3f37f5ae8156860b4238416f1af7a0a39689140d1643cfa6bbaa212"
	},
	{
		"id": "74883a21ef81",
		"ts": "2026-08-14T22:18:33.002Z",
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
		"liquidityUsd": 897966.2,
		"hash": "74883a21ef812835588cf6309d1f84bfccb7208ea4455a5ee687176d2f8ccac7"
	},
	{
		"id": "daf8a79584aa",
		"ts": "2026-08-14T22:18:33.188Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2518523.48,
		"hash": "daf8a79584aa1c21d1cddeb5c1e1eef9008b2aef4ed7f96921fcac87da9c85bb"
	},
	{
		"id": "07523104c2ef",
		"ts": "2026-08-14T22:18:33.392Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 644884.55,
		"hash": "07523104c2ef3ff3ff6c48a42be29752779164743b8ee33d1d38ac9d35b6ee8a"
	},
	{
		"id": "d9a39c6ae097",
		"ts": "2026-08-14T22:18:33.579Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6014198.75,
		"hash": "d9a39c6ae097decfe59be9607a2664b8f619b82b0ed1994c477de15285e0b5e9"
	},
	{
		"id": "fafb6753b80a",
		"ts": "2026-08-14T22:18:33.919Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 267260.95,
		"hash": "fafb6753b80a6a8f2260337545a9f30a08c87854d8c266466888a85d66203650"
	},
	{
		"id": "e94961bf085a",
		"ts": "2026-08-14T22:18:34.121Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1518485.28,
		"hash": "e94961bf085a456f273464c1a43f0903d907ae2b902578949898f3112262e0ad"
	},
	{
		"id": "4e0036d85ea1",
		"ts": "2026-08-14T22:18:34.323Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 846573.28,
		"hash": "4e0036d85ea18a2478563341367455b0dda41b6f9695657f861e3749e811e288"
	},
	{
		"id": "afe60f6984fd",
		"ts": "2026-08-14T22:18:34.519Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9494840.93,
		"hash": "afe60f6984fd218c4301e993d2ce1a4bdaed2c76dddbb669bd5bd29821e50236"
	},
	{
		"id": "097b95b9a6ae",
		"ts": "2026-08-14T22:18:34.699Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4129222.71,
		"hash": "097b95b9a6aede1ca49ee41c77acaa67c8283a33950354ec0ffc926ad0c340c3"
	},
	{
		"id": "3d067c4f7c97",
		"ts": "2026-08-14T21:20:56.773Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111732747.02,
		"hash": "3d067c4f7c970f06a116f83c4338d126907e6cd313efcd079dc8916467db0590"
	},
	{
		"id": "5a7c0d7e07d1",
		"ts": "2026-08-14T21:20:57.005Z",
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
		"liquidityUsd": 15731062.96,
		"hash": "5a7c0d7e07d144e2ea027881c90a64abb3c67da2ec204988316d6c19f967f21b"
	},
	{
		"id": "c56e15903e08",
		"ts": "2026-08-14T21:20:57.228Z",
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
		"liquidityUsd": 801044.19,
		"hash": "c56e15903e08186daf2274d0ba2aa4df62967fb3d1f8cde5012be2bd3556be88"
	},
	{
		"id": "e4cf231e5fe6",
		"ts": "2026-08-14T21:20:57.456Z",
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
		"liquidityUsd": 26546602.36,
		"hash": "e4cf231e5fe6637e8d99f71d9b44503736021cbb2b550ba008118f4e0fcdf7d4"
	},
	{
		"id": "7e946108f74d",
		"ts": "2026-08-14T21:20:57.690Z",
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
		"liquidityUsd": 4160388.59,
		"hash": "7e946108f74d2a8dd718e9db3e374e15c19fa46565e4336ad30a6cff64167f03"
	},
	{
		"id": "e3d384dc6644",
		"ts": "2026-08-14T21:20:57.921Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889873.4,
		"hash": "e3d384dc66442482fefde1112dbec35383d765aa454a312d337765b8a6aa0be7"
	},
	{
		"id": "43dd2fe2db1b",
		"ts": "2026-08-14T21:20:58.149Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6000138.6,
		"hash": "43dd2fe2db1b9b25dde3804006b61c448e00aa9d56b39bedbbe40d1d56a03058"
	},
	{
		"id": "361368a1fe29",
		"ts": "2026-08-14T21:20:58.385Z",
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
		"liquidityUsd": 3806684.47,
		"hash": "361368a1fe29eb6ec65d74a734936163f208d84f1777690407313121cb4cb7c8"
	},
	{
		"id": "083012d50769",
		"ts": "2026-08-14T21:20:58.613Z",
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
		"liquidityUsd": 896758.02,
		"hash": "083012d507696b236614c616fdb0c918ed3033ccd2bc9dda33f0dd9fb12509c8"
	},
	{
		"id": "076ead98fffd",
		"ts": "2026-08-14T21:20:58.898Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"has_blacklist",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 649612.86,
		"hash": "076ead98fffd4493eeafecbd5548a00184bfeebb1ff28626ea2491371117e58a"
	},
	{
		"id": "5cfd16f38c00",
		"ts": "2026-08-14T21:20:59.116Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6000133.3,
		"hash": "5cfd16f38c000f939d3856cc13148ef179a70d99e750d89b6ad7e027c3a5d364"
	},
	{
		"id": "c0646669d476",
		"ts": "2026-08-14T21:20:59.329Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 266809.58,
		"hash": "c0646669d4761728f05a703487e820aa1f796d331d015cbac46e1b166f2971be"
	},
	{
		"id": "abaed23418fc",
		"ts": "2026-08-14T21:20:59.540Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1519624.16,
		"hash": "abaed23418fc743bf9f1d88bc67fa270f87c86f9a08235c494ccb0f7ab739a58"
	},
	{
		"id": "0d3136516ed7",
		"ts": "2026-08-14T21:20:59.755Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2504360.06,
		"hash": "0d3136516ed73fe6fedf620a2e7aaec0fe6ab3512375c9703b50fdba9e3dd9eb"
	},
	{
		"id": "ede4b410be9c",
		"ts": "2026-08-14T21:20:59.975Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 847210.97,
		"hash": "ede4b410be9c661b06bc55d8292eb1b7116c893c706cc6fea7e27457bd487610"
	},
	{
		"id": "26f4399e9b96",
		"ts": "2026-08-14T21:21:00.204Z",
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
		"liquidityUsd": 9485036.35,
		"hash": "26f4399e9b96f94f72b72957aa30bea273c2a85c70be367ffbf3e5182c80e91c"
	},
	{
		"id": "a39b3089cba3",
		"ts": "2026-08-14T21:21:00.422Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4125622.4,
		"hash": "a39b3089cba3a153af157f9c1d538e52ea3f51190443f271de05d209af6dd5b3"
	},
	{
		"id": "27897fca7def",
		"ts": "2026-08-14T20:26:38.548Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111712306.48,
		"hash": "27897fca7def0e9dfc279283378b569fc43d7af97e6e6483e9022cdec0a64a28"
	},
	{
		"id": "2c3666823583",
		"ts": "2026-08-14T20:26:38.900Z",
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
		"liquidityUsd": 16840873.54,
		"hash": "2c36668235838febdc25c4be59b0af850a4e1dafd70d9fcc69ef53a8e9979a48"
	},
	{
		"id": "5439adb11da1",
		"ts": "2026-08-14T20:26:39.089Z",
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
		"liquidityUsd": 805018.21,
		"hash": "5439adb11da1dd6f0daca668855148c4dce423b641c5cdbae6f17e2838c67d3d"
	},
	{
		"id": "251a58656fe3",
		"ts": "2026-08-14T20:26:39.415Z",
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
		"liquidityUsd": 26547526.53,
		"hash": "251a58656fe32dc86faae23d369ab105b68a8d34c17a789efc89e723c1a92502"
	},
	{
		"id": "876211d4b26c",
		"ts": "2026-08-14T20:26:39.598Z",
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
		"liquidityUsd": 4162727.07,
		"hash": "876211d4b26cb58012f45070f3e1476a699a0f2e3fed6fa0ac694c5c03f2492f"
	},
	{
		"id": "3d61263040a7",
		"ts": "2026-08-14T20:26:39.816Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889873.4,
		"hash": "3d61263040a74fb270b663b6eeb729e6e65488c278a7e8e1df7aaee40819018d"
	},
	{
		"id": "48256bc7e27c",
		"ts": "2026-08-14T20:26:40.009Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5990087.87,
		"hash": "48256bc7e27c2e8e4ab3fb4774ae4430885577a1c6599ec67db10c98082220d9"
	},
	{
		"id": "f3ceea507c35",
		"ts": "2026-08-14T20:26:40.203Z",
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
		"liquidityUsd": 3810525.17,
		"hash": "f3ceea507c358141c787c3cca831411299c498a5d38bd567cb7389e252d6ff09"
	},
	{
		"id": "4e1fa518d962",
		"ts": "2026-08-14T20:26:40.395Z",
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
		"liquidityUsd": 897999.76,
		"hash": "4e1fa518d9620bc005d08a019dfe2f00a422b03ebb8f06be32ce43ac3d412d22"
	},
	{
		"id": "3d12b0133ca6",
		"ts": "2026-08-14T20:26:40.592Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"has_blacklist",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 660847.11,
		"hash": "3d12b0133ca60327796d674b408ce82a497f96269b8818fa04a3d82f67f5cdf1"
	},
	{
		"id": "d999742b2d54",
		"ts": "2026-08-14T20:26:40.769Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5990724.48,
		"hash": "d999742b2d546c4d66b98108596cdf33a0117021a04891e9fa7ff55045a276da"
	},
	{
		"id": "d50cb5df7865",
		"ts": "2026-08-14T20:26:40.959Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 266292.68,
		"hash": "d50cb5df7865f6144981a5a34033924cbc60e971e54408f3d8f04eeb138e6840"
	},
	{
		"id": "a5f0d9ddbc49",
		"ts": "2026-08-14T20:26:41.316Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1522174.28,
		"hash": "a5f0d9ddbc495d5c5ec88caf8ecd0cd9db469c68420913d9f5545798dd3f7068"
	},
	{
		"id": "087e669c267b",
		"ts": "2026-08-14T20:26:41.508Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2487013.96,
		"hash": "087e669c267b0fb322c4980f3bf995cbafff31549339896cc160f2163c83c7a7"
	},
	{
		"id": "811773607235",
		"ts": "2026-08-14T20:26:41.685Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 847013.36,
		"hash": "8117736072358a4eae757a75b74318dc0511d50028d54e9df50da301aeeefaea"
	},
	{
		"id": "1b45dcf96a33",
		"ts": "2026-08-14T20:26:41.879Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9486763.54,
		"hash": "1b45dcf96a331b782e5559b85ee70b3293d4ef3e1c239f06dab7d8b4882c1e1f"
	},
	{
		"id": "04c79897c9f2",
		"ts": "2026-08-14T20:26:42.075Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4129797.33,
		"hash": "04c79897c9f2e30cf7f937c625f69f849a5db9ce07216c682cd42a02c9ed9b17"
	},
	{
		"id": "92fb461819e4",
		"ts": "2026-08-14T19:45:12.309Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111752115.83,
		"hash": "92fb461819e483fd8bb0bbc2b49320b1ab3d7c635412450a9458da3601a62eaa"
	},
	{
		"id": "4b186e81191d",
		"ts": "2026-08-14T19:45:12.650Z",
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
		"liquidityUsd": 16388973.41,
		"hash": "4b186e81191dcba9f8f044d93ad8acc0a17ba8c0932eedac0b090d6ad4f6fcbd"
	},
	{
		"id": "0709ef15997f",
		"ts": "2026-08-14T19:45:12.836Z",
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
		"liquidityUsd": 806263.28,
		"hash": "0709ef15997fdfb10de698f0466e90459bfa6ba05a14fb07451e42c9934a0311"
	},
	{
		"id": "7bdb9dcdb91e",
		"ts": "2026-08-14T19:45:13.164Z",
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
		"liquidityUsd": 26548188.91,
		"hash": "7bdb9dcdb91e3fdfb6254e14aabb66edbf8c7ad901c518ba7fa2e08bb299e3e3"
	},
	{
		"id": "169ee96464b0",
		"ts": "2026-08-14T19:45:13.352Z",
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
		"liquidityUsd": 4164875.89,
		"hash": "169ee96464b00ddd40dc523d276e9b883be7325a9ed79c2b750776d73681db4c"
	},
	{
		"id": "861c0e1401ad",
		"ts": "2026-08-14T19:45:13.608Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 887180.21,
		"hash": "861c0e1401ad1cf805d509d70170cd8e896c75ad372657c1f46dbb4ce995106c"
	},
	{
		"id": "a8201de38059",
		"ts": "2026-08-14T19:45:13.807Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5871296.65,
		"hash": "a8201de38059407150375c0e4b80ec144f533ecf35015cc2b27c7f6d2d25a7ed"
	},
	{
		"id": "8976cf426c62",
		"ts": "2026-08-14T19:45:14.006Z",
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
		"liquidityUsd": 3806197.92,
		"hash": "8976cf426c62f2b5094dd4a466bd11ced2c4b45e59b4656db6fea77801eb7c98"
	},
	{
		"id": "7564a5b26c23",
		"ts": "2026-08-14T19:45:14.185Z",
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
		"liquidityUsd": 891082.66,
		"hash": "7564a5b26c230554db2115d849f1f5148f57b6641486e0413e1d934bbb303f82"
	},
	{
		"id": "8619fc3a6e7d",
		"ts": "2026-08-14T19:45:14.368Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"has_blacklist",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 655005.07,
		"hash": "8619fc3a6e7d81294cd7b6fdf39d656835179fb298f899b62fff25cc86fa0869"
	},
	{
		"id": "dcbd9ff026f1",
		"ts": "2026-08-14T19:45:14.547Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5871296.65,
		"hash": "dcbd9ff026f1e4a6dcc0471c279528aae5e6070a00063dab9c99fb32ac7f1f17"
	},
	{
		"id": "913f13f9b807",
		"ts": "2026-08-14T19:45:14.744Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1519633.44,
		"hash": "913f13f9b8071b680f792199bedc836552a8c98650231c14caf6ffe585384d66"
	},
	{
		"id": "eaef223d83a8",
		"ts": "2026-08-14T19:45:14.922Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 263244.46,
		"hash": "eaef223d83a803e98df8077b755d4e92e1ec42620f3780d97fccf3ef22750975"
	},
	{
		"id": "280ba543f427",
		"ts": "2026-08-14T19:45:15.119Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2433375.88,
		"hash": "280ba543f427915602fe72f09ef14f08a2bb00a8c50256d35e90533629091909"
	},
	{
		"id": "4011273c6561",
		"ts": "2026-08-14T19:45:15.445Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 844868.94,
		"hash": "4011273c656179bdae4d3529e107df81b33d8259c30d950d17482ae4554b1d16"
	},
	{
		"id": "fc43c4fb0dcf",
		"ts": "2026-08-14T19:45:15.638Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9478041.97,
		"hash": "fc43c4fb0dcf6c5887b7313a47a1660ba97ddcd1a866e91ed10f7eaeaa323b80"
	},
	{
		"id": "bb9413feed28",
		"ts": "2026-08-14T19:45:15.837Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1851738.23,
		"hash": "bb9413feed28c83a0b336c5daf240f49102a03b3e9f13b9f4cfa0ed60d744dca"
	},
	{
		"id": "32a1c4e241bb",
		"ts": "2026-08-14T18:47:50.735Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111780351.27,
		"hash": "32a1c4e241bbae5c63836033238ccf22f5f6b22337faf215dc32397be04039dd"
	},
	{
		"id": "774a8bf867a8",
		"ts": "2026-08-14T18:47:50.975Z",
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
		"liquidityUsd": 12934817.82,
		"hash": "774a8bf867a8448f3f2bd00df4ee2c02e24651f96072a44f0b540f8ed2da225a"
	},
	{
		"id": "fb1046f14bb2",
		"ts": "2026-08-14T18:47:51.220Z",
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
		"liquidityUsd": 811677.17,
		"hash": "fb1046f14bb2310155d18d6e9bff3637ff1c69ae395b993dec2ee27d9bc789aa"
	},
	{
		"id": "91cfa7df5c47",
		"ts": "2026-08-14T18:47:51.459Z",
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
		"liquidityUsd": 26549265.33,
		"hash": "91cfa7df5c47d06cc13bf3274dbd2926f2e921a3d69577d2c053a148dfe0a8f3"
	},
	{
		"id": "c21d1ca53c95",
		"ts": "2026-08-14T18:47:51.706Z",
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
		"liquidityUsd": 4175249.93,
		"hash": "c21d1ca53c9550e6e9c90291cd1ea23556b8dcc2704af84029f038eebacc125e"
	},
	{
		"id": "5372c9d5a829",
		"ts": "2026-08-14T18:47:51.946Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 888179.5,
		"hash": "5372c9d5a82951e91ebd5c479f84b8b9d8dc8976c8de1a80aa6f4963da127754"
	},
	{
		"id": "a238e661f938",
		"ts": "2026-08-14T18:47:52.177Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5853222.82,
		"hash": "a238e661f9382b4326550b314a01384f4279c1f24ba988c8525bbad9ce000e4d"
	},
	{
		"id": "9818bbb06ae6",
		"ts": "2026-08-14T18:47:52.426Z",
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
		"liquidityUsd": 3802428.68,
		"hash": "9818bbb06ae619824b5e3d5ac94484e54b769bbeb78d6560b1634c957a181711"
	},
	{
		"id": "0e057e10e4ee",
		"ts": "2026-08-14T18:47:52.668Z",
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
		"liquidityUsd": 889058.38,
		"hash": "0e057e10e4ee42ef20cf489901459d425c2801969b823393b37cdb54a41218c4"
	},
	{
		"id": "a606cae81354",
		"ts": "2026-08-14T18:47:52.918Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"has_blacklist",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 654080.42,
		"hash": "a606cae8135434ffadc4b2534346e47b7a4418f6ca71a2da2218575c54fec963"
	},
	{
		"id": "a62efbb1e362",
		"ts": "2026-08-14T18:47:53.143Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5853222.82,
		"hash": "a62efbb1e3625c27fb257b198071ec6c307d981a676301b9f33d8292fbf615c3"
	},
	{
		"id": "ee514de443d1",
		"ts": "2026-08-14T18:47:53.372Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1519159.78,
		"hash": "ee514de443d10cf6b8455ead3da3b0e02ce9bffb60a0afef9904ebbfbfb71075"
	},
	{
		"id": "456a4cc89983",
		"ts": "2026-08-14T18:47:53.591Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 266339.98,
		"hash": "456a4cc89983013c2debce7ef3b9f30732a3c1c38b6a24397de67742eee2f160"
	},
	{
		"id": "193dbdd8075d",
		"ts": "2026-08-14T18:47:53.820Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2406236.37,
		"hash": "193dbdd8075d931aa3cb98334d7ee5efae2be36007200e0fe5ef1858ce4c8485"
	},
	{
		"id": "0452c9d49588",
		"ts": "2026-08-14T18:47:54.050Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 846407.58,
		"hash": "0452c9d49588c9591bc295e6501eff21a8cd499e048a44dcb5508c5deb63eab4"
	},
	{
		"id": "ae951a0e750c",
		"ts": "2026-08-14T18:47:54.317Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9464536.35,
		"hash": "ae951a0e750cc0029d2e2a4530ac65d77a0f753ea20c3a895be8fcb99e9c9551"
	},
	{
		"id": "c5c3ab43b2ad",
		"ts": "2026-08-14T18:47:54.539Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1850711.5,
		"hash": "c5c3ab43b2ad6dfcf27182ab91b1fd33315a08cf873f679d9367ff2c5d6df24f"
	},
	{
		"id": "f81d556e5d99",
		"ts": "2026-08-14T17:49:41.873Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111814175.08,
		"hash": "f81d556e5d992dfaccef5dcb8bc5ccb20186fe6b9b2cd7e52c0434e165f3c9bd"
	},
	{
		"id": "c38508e309e6",
		"ts": "2026-08-14T17:49:43.356Z",
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
		"liquidityUsd": 16302933.09,
		"hash": "c38508e309e69108f94d45f6295c66c5a9c354d58d45ebe73edb21c3fd0103bb"
	},
	{
		"id": "227afef307e9",
		"ts": "2026-08-14T17:49:43.590Z",
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
		"liquidityUsd": 814940.32,
		"hash": "227afef307e90f1a7a675ca668e89c8e2b5b0e31e3e40acbfb397b7bbd3d6e31"
	},
	{
		"id": "5814fb35f5ca",
		"ts": "2026-08-14T17:49:43.791Z",
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
		"liquidityUsd": 26545971.02,
		"hash": "5814fb35f5ca8e0194b1d1d8884702602fbb546a58627d80e3ccb2d20aa4f3bb"
	},
	{
		"id": "9e910c457582",
		"ts": "2026-08-14T17:49:44.138Z",
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
		"liquidityUsd": 4175249.93,
		"hash": "9e910c45758214af17c4b22208a847f1629789b1c5c0f45a5993329be1d7cc36"
	},
	{
		"id": "b0071f1c898c",
		"ts": "2026-08-14T17:49:44.340Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 886332.26,
		"hash": "b0071f1c898c1f6621c5bb98823b2948ad5637118b9e8673b40def4749a0f756"
	},
	{
		"id": "01b3ad75af41",
		"ts": "2026-08-14T17:49:44.544Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5679399.41,
		"hash": "01b3ad75af4183aed3c2742e7a69680bbaec60d5770ada708d2054acfbc4045a"
	},
	{
		"id": "5f1a9743bfb3",
		"ts": "2026-08-14T17:49:44.753Z",
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
		"liquidityUsd": 3676828.94,
		"hash": "5f1a9743bfb34a8c366775459b7953810aa727a700c95311e11c48632bde77d1"
	},
	{
		"id": "58001353fe2f",
		"ts": "2026-08-14T17:49:44.951Z",
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
		"liquidityUsd": 890251.66,
		"hash": "58001353fe2ffd3027436ab5bf21fd4c845225a354ae37ab1dddbbf4c9f63144"
	},
	{
		"id": "d135894070e6",
		"ts": "2026-08-14T17:49:45.297Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"has_blacklist",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 662271.01,
		"hash": "d135894070e61d5fad131774d7a456f2db923e36e975f7b324d2c79611caee5d"
	},
	{
		"id": "b49ace2dae9e",
		"ts": "2026-08-14T17:49:45.519Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5679399.41,
		"hash": "b49ace2dae9ebbc6186f8ec87788668bddc99f2ec6695476691c21895d45aaa8"
	},
	{
		"id": "91141c8f4262",
		"ts": "2026-08-14T17:49:45.733Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 262811.6,
		"hash": "91141c8f426201e641ba826443121e511a7180513aefd2886f5acbed946b7db9"
	},
	{
		"id": "b24c168a09a6",
		"ts": "2026-08-14T17:49:45.930Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1526547.48,
		"hash": "b24c168a09a6bd13b624d656e8b8e8bbd0fc8853446c2d794681deaff9055847"
	},
	{
		"id": "54e31efd241c",
		"ts": "2026-08-14T17:49:46.126Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2402591.79,
		"hash": "54e31efd241cf7ca179462168c200849ce7803a3876f5bea0a9436be00c60d16"
	},
	{
		"id": "3bb0818540ff",
		"ts": "2026-08-14T17:49:46.329Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 850651.02,
		"hash": "3bb0818540ff219f23bee8e76a333faa810ea0db1c7082462bdbc489eb121e42"
	},
	{
		"id": "90c0dbc8619f",
		"ts": "2026-08-14T17:49:46.524Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9511186.46,
		"hash": "90c0dbc8619f921548a214367cc404637d6608b32a9c2ff30d97867143b6339d"
	},
	{
		"id": "3825cec24adf",
		"ts": "2026-08-14T17:49:46.734Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1857063.85,
		"hash": "3825cec24adf2721ce3d91dd98584e57a6b791815627c475ea0297ce9c4e14be"
	},
	{
		"id": "296c778c71ec",
		"ts": "2026-08-14T16:48:40.648Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111715286.51,
		"hash": "296c778c71ecb4a399773f3358667912d832b46bb810ae4bb9ceecc78a5d5fd4"
	},
	{
		"id": "717bd4bc6de7",
		"ts": "2026-08-14T16:48:41.097Z",
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
		"liquidityUsd": 16854480.57,
		"hash": "717bd4bc6de7af20bcaf630bb8440cca427de87e55ffa2c93e5500a0269ec84a"
	},
	{
		"id": "562099fb8902",
		"ts": "2026-08-14T16:48:41.336Z",
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
		"liquidityUsd": 817645.36,
		"hash": "562099fb8902a003ea8f15996a8e0b73935426b508a35854da9e20d6d3f1ed58"
	},
	{
		"id": "1298067eaf1c",
		"ts": "2026-08-14T16:48:41.579Z",
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
		"liquidityUsd": 26634761.93,
		"hash": "1298067eaf1cda2e0d3f50ad940c364c69d89429159e209d73bdeb874649ee9b"
	},
	{
		"id": "791ca21b8383",
		"ts": "2026-08-14T16:48:41.814Z",
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
		"liquidityUsd": 4175290.18,
		"hash": "791ca21b838344670589b196efd7194a75725f0fbff4a16afda46571716f8783"
	},
	{
		"id": "621a74dff82d",
		"ts": "2026-08-14T16:48:42.052Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889156.03,
		"hash": "621a74dff82d322a57ff1fa2a33c567b642be3feea935e29e8974e2876187dbd"
	},
	{
		"id": "e54d59ff8ab4",
		"ts": "2026-08-14T16:48:42.299Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5687479.75,
		"hash": "e54d59ff8ab42d6fafc22fe7032c44f36c687b6847323921edc1325ef636995f"
	},
	{
		"id": "17a051141dd0",
		"ts": "2026-08-14T16:48:42.946Z",
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
		"liquidityUsd": 3680204.06,
		"hash": "17a051141dd0c548e0d898029c6be2b6131fbff00b941b5d8b749144fa4488f5"
	},
	{
		"id": "1ab414c22fc6",
		"ts": "2026-08-14T16:48:43.293Z",
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
		"liquidityUsd": 890014.05,
		"hash": "1ab414c22fc6c9e5d35d24223e55a11c59004b3dd0f62f5cba9f3c16b5200584"
	},
	{
		"id": "fe75c5cf769f",
		"ts": "2026-08-14T16:48:43.533Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"has_blacklist",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 645527.51,
		"hash": "fe75c5cf769f2641ef8b6cc281ff7f62a909aad0d900f44e83c2b3d8c0e9da48"
	},
	{
		"id": "cc0283af22db",
		"ts": "2026-08-14T16:48:43.753Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 260577.02,
		"hash": "cc0283af22db4f6aae53b91f103356b9078b40ee10d121a9154f3cc26ddb4de6"
	},
	{
		"id": "f35253b61148",
		"ts": "2026-08-14T16:48:43.972Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5684129.19,
		"hash": "f35253b61148fe79c219a464c345e6c2b24638345e2cd2ab47a907c488950205"
	},
	{
		"id": "6434e7eadc13",
		"ts": "2026-08-14T16:48:44.276Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1549654.7,
		"hash": "6434e7eadc1343643b53b27d012fc9a92a9c069d630209d9c9d946eb3b3e7ef2"
	},
	{
		"id": "9d3658933f36",
		"ts": "2026-08-14T16:48:44.496Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2373042.6,
		"hash": "9d3658933f36405a5deeb1cd3a91f189f3c81fbae6d19c346c1eb39e6ba80536"
	},
	{
		"id": "d0279202edc2",
		"ts": "2026-08-14T16:48:44.714Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 851520.32,
		"hash": "d0279202edc2bb0b9619fd886e77937c8e860941c17463257581db35d61dd506"
	},
	{
		"id": "8bd690c30214",
		"ts": "2026-08-14T16:48:44.935Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9542777.6,
		"hash": "8bd690c302146b62ad79268540d0cabc8b0d874e7a16a4b5d5521843ece162ee"
	},
	{
		"id": "65087f86ed4c",
		"ts": "2026-08-14T16:48:45.157Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 74895.49,
		"hash": "65087f86ed4c951c9bd0ad3d5337711b4d6e53e141c73b680e89ffb21c77c39b"
	},
	{
		"id": "4a87f7d60e10",
		"ts": "2026-08-14T15:47:00.844Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111560142.11,
		"hash": "4a87f7d60e10822391ff3ce6143b16cd6db2bdb253977b38eb2cb3f1edf8f7f2"
	},
	{
		"id": "51e3243d71d5",
		"ts": "2026-08-14T15:47:01.470Z",
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
		"liquidityUsd": 16184844.22,
		"hash": "51e3243d71d5a9d53b925bd5f9232b019d50aedf02f030b970497458bf7e20d8"
	},
	{
		"id": "6acefe3188b4",
		"ts": "2026-08-14T15:47:01.757Z",
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
		"liquidityUsd": 811502.37,
		"hash": "6acefe3188b4239158644a994be748053f0c4c069063e4a3382100d09d9b3ae0"
	},
	{
		"id": "049fcc0b0c7e",
		"ts": "2026-08-14T15:47:02.185Z",
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
		"liquidityUsd": 26577628.41,
		"hash": "049fcc0b0c7e68601c4c023ea3a5c179ad5a7c025ac4e9c9fe98697d8b555746"
	},
	{
		"id": "5f07688b0f02",
		"ts": "2026-08-14T15:47:02.418Z",
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
		"liquidityUsd": 4140181.89,
		"hash": "5f07688b0f026910b83a71c546548c33354c05b985aa82ea84179a564470002e"
	},
	{
		"id": "6073751a0cf0",
		"ts": "2026-08-14T15:47:02.696Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889156.03,
		"hash": "6073751a0cf0787684a876af5d42232f16e773c2617092d28a53a686924a8efc"
	},
	{
		"id": "280449597f63",
		"ts": "2026-08-14T15:47:02.927Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5604851.56,
		"hash": "280449597f63dd5e5eda06e765ee71f0911c70e51ac9c8aef8377991f9f3c7b2"
	},
	{
		"id": "5296b680f5ea",
		"ts": "2026-08-14T15:47:03.166Z",
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
		"liquidityUsd": 3676105.87,
		"hash": "5296b680f5ea83df062050eb2d715b35360c3f289d8cc2c9e8bf5015f276d081"
	},
	{
		"id": "7ec573a8ce12",
		"ts": "2026-08-14T15:47:03.536Z",
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
		"liquidityUsd": 897909.13,
		"hash": "7ec573a8ce12f46e3348e4b0fe77b1b56fefcf4c77ad56bfda8f548b83b61764"
	},
	{
		"id": "43add7332bec",
		"ts": "2026-08-14T15:47:03.784Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"has_blacklist",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 635315.06,
		"hash": "43add7332beca277a0bb366e09cc4a86d7ebabfdd6f278f3f3bf94758225212b"
	},
	{
		"id": "db186ad10c8c",
		"ts": "2026-08-14T15:47:03.998Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 261961.37,
		"hash": "db186ad10c8c4f59cba3f9e2fc1582c355c314de311076909e4d2bf13bbec6c1"
	},
	{
		"id": "4bdc5443a05d",
		"ts": "2026-08-14T15:47:04.212Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5604851.76,
		"hash": "4bdc5443a05df324a33462749dcb44c6a53c974c39580ac192c9065052c46610"
	},
	{
		"id": "e5a3035d2834",
		"ts": "2026-08-14T15:47:04.426Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2379713.28,
		"hash": "e5a3035d2834fff55c588523c782d08cec53adeddd45dec99c4d1b4ab30d1d79"
	}
]
