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
	"updatedAt": "2026-08-17T15:20:53.618Z",
	"tokensScored": 11353,
	"verdictsIssued": 11353,
	"safe": 9871,
	"risky": 842,
	"likelyRug": 640,
	"ticks": 675
}

export const verdicts: AgentVerdict[] = [
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
	},
	{
		"id": "09dcdc8bf7f4",
		"ts": "2026-08-17T08:38:47.409Z",
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
		"liquidityUsd": 805079.16,
		"hash": "09dcdc8bf7f4b4c1f0e0bfcaa5c75751d835affb3f81517f77651b9f768b7f40"
	},
	{
		"id": "35418af15255",
		"ts": "2026-08-17T08:38:49.904Z",
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
		"liquidityUsd": 27003872.51,
		"hash": "35418af152557812ab566d38e7208e33c0eba60313658b706961d5f15cbba87e"
	},
	{
		"id": "6612de16b943",
		"ts": "2026-08-17T08:38:56.342Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4164709.63,
		"hash": "6612de16b943dc2d7bbbd63d08052624d1ad43107f1b5aca7a622216ac9000b2"
	},
	{
		"id": "12db05a68e3d",
		"ts": "2026-08-17T08:38:56.565Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 892142.03,
		"hash": "12db05a68e3d4c8e9b659dfa23efb53bc9d8adabff5ab3743e6086a172055d2d"
	},
	{
		"id": "726a0a889f3a",
		"ts": "2026-08-17T08:38:56.778Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 5401129.26,
		"hash": "726a0a889f3a6115b2986e6e7d0eab24db10d8901d2949a22b6e21273200bceb"
	},
	{
		"id": "af90253b5d0c",
		"ts": "2026-08-17T08:38:56.995Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3312630.64,
		"hash": "af90253b5d0c0bc1cb3025b617d7e4a79b0d81949a1f1b406cc232f08954ac90"
	},
	{
		"id": "9e9325f90fe4",
		"ts": "2026-08-17T08:38:57.206Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 80530.15,
		"hash": "9e9325f90fe45d13b62d85d3fdabeda8448dde98225171262c1319136d8b927a"
	},
	{
		"id": "6ea4a9e22113",
		"ts": "2026-08-17T08:38:57.428Z",
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
		"liquidityUsd": 80069.44,
		"hash": "6ea4a9e22113b04608828496a4bdb8792862eed64483a303ebc4198107e2b5c0"
	},
	{
		"id": "2825101b3abe",
		"ts": "2026-08-17T08:38:57.651Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5419883.12,
		"hash": "2825101b3abe5a1dd7fc71e650f456a90ce419f49f3feeafd0473cb2fe0f0615"
	},
	{
		"id": "f44fce6122dc",
		"ts": "2026-08-17T08:38:57.876Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 554729.86,
		"hash": "f44fce6122dc08e9987088e1a798d7606bd9f56e8908dc2cb36eeb27d0e907e6"
	},
	{
		"id": "d5b95cf546a0",
		"ts": "2026-08-17T08:38:58.095Z",
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
		"liquidityUsd": 1516238.34,
		"hash": "d5b95cf546a03edaf9a90fac1511ebc76b69bce21299c217ae2c855b6591b0ad"
	},
	{
		"id": "93c7cac99088",
		"ts": "2026-08-17T08:38:58.307Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 998059.25,
		"hash": "93c7cac99088e6e81ee0d96f1a0fd7d2b54ef8c498bb3c2b72d19591dc3f2d8c"
	},
	{
		"id": "d91374d1cbd0",
		"ts": "2026-08-17T08:38:58.525Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9600535.33,
		"hash": "d91374d1cbd04a460fc7f5c1b52b272ca6a56b9b70579278a24e9accf73095c3"
	},
	{
		"id": "7cc0d2fe386e",
		"ts": "2026-08-17T08:38:58.736Z",
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
		"liquidityUsd": 87277.54,
		"hash": "7cc0d2fe386eff418a1e794c1d07d6b5c428edf3b78b006b2122ed2fd126ec51"
	},
	{
		"id": "50759fadaf15",
		"ts": "2026-08-17T08:38:58.985Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2576494.51,
		"hash": "50759fadaf151155291cb4daa3970a5babd1a3804570f377b7c4bc9a7e5cf1a8"
	},
	{
		"id": "563c84b45900",
		"ts": "2026-08-17T08:38:59.209Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 674029.94,
		"hash": "563c84b459009a910843d05243b627d9de75630c6de800b219b44df7cb182a52"
	},
	{
		"id": "681453579249",
		"ts": "2026-08-17T08:38:59.428Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 263144.42,
		"hash": "6814535792497f777a0965ed1336a90d1be412206bd815195ef68d2e7894de11"
	},
	{
		"id": "915464c45d41",
		"ts": "2026-08-17T08:38:59.640Z",
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
		"liquidityUsd": 589533.25,
		"hash": "915464c45d416ee9a506ad718d3a1f56d156e6934683541cd2dea04d2c5971d7"
	},
	{
		"id": "1d55eaaa8eb6",
		"ts": "2026-08-17T07:49:09.390Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111703683.58,
		"hash": "1d55eaaa8eb66aeb39102c6ced74ef4708d12dc91ada94910204c10a5939f5b6"
	},
	{
		"id": "b1ef3b582a69",
		"ts": "2026-08-17T07:49:09.622Z",
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
		"liquidityUsd": 17949561.78,
		"hash": "b1ef3b582a69b685fab9912d4c003df45ee9a915ad9c9d86f80d62176a921c25"
	},
	{
		"id": "ef9570063c65",
		"ts": "2026-08-17T07:49:09.858Z",
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
		"liquidityUsd": 805079.16,
		"hash": "ef9570063c652c462d0870c94419a84f9470af0a8f032df76ba6887c39772af4"
	},
	{
		"id": "d66449ab1f22",
		"ts": "2026-08-17T07:49:10.089Z",
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
		"liquidityUsd": 27035663.52,
		"hash": "d66449ab1f22bf0e27297251fa86d0222aa723d510cab08c509b0d59d63a3b43"
	},
	{
		"id": "93d415dc2234",
		"ts": "2026-08-17T07:49:10.319Z",
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
		"liquidityUsd": 4197609.19,
		"hash": "93d415dc22342c2b84e0afddbb921a4e07292c4697a5ef0d787b989056606cc9"
	},
	{
		"id": "fd8d4985bee0",
		"ts": "2026-08-17T07:49:10.575Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 894118.81,
		"hash": "fd8d4985bee00eb189c24d16fd65253ba1a0a6a719ab6c6b0bb5c3c49a01ab4d"
	},
	{
		"id": "4ab4e207d856",
		"ts": "2026-08-17T07:49:10.799Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5594188.8,
		"hash": "4ab4e207d85640c669908609b79dd413deec807699c1cfbd9dc50c3a57334bff"
	},
	{
		"id": "e68349713166",
		"ts": "2026-08-17T07:49:11.027Z",
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
		"liquidityUsd": 3326807.15,
		"hash": "e6834971316666a4a663870eca78608ea5dd531f1fd38522f3940cc8381759ee"
	},
	{
		"id": "0daede8274a9",
		"ts": "2026-08-17T07:49:11.273Z",
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
		"liquidityUsd": 84263.34,
		"hash": "0daede8274a9feb34a198bde2a3c7546dfb648c2923542f8789d33bcf2cfb4ec"
	},
	{
		"id": "660d6285a11a",
		"ts": "2026-08-17T07:49:11.500Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 81132.14,
		"hash": "660d6285a11ae4f1848457113235f1aeaf598f1399506861f7c40368072a547a"
	},
	{
		"id": "fbcd6ab8699d",
		"ts": "2026-08-17T07:49:11.717Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5594188.8,
		"hash": "fbcd6ab8699dbf12b440f67c03caf9f0669c52a5623699801d82e58d894d177b"
	},
	{
		"id": "f1078e3c1faf",
		"ts": "2026-08-17T07:49:11.927Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1004588.71,
		"hash": "f1078e3c1faf1847d2457c0ab1dfe2aefed800d350a4f429093b8ec5cd05eb50"
	},
	{
		"id": "dad887957cb0",
		"ts": "2026-08-17T07:49:12.146Z",
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
		"liquidityUsd": 1549271.69,
		"hash": "dad887957cb0b983bf284e450c18f0b275d377de441852658d59d6ef898321d3"
	},
	{
		"id": "4d80e971ce69",
		"ts": "2026-08-17T07:49:12.365Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 556462.1,
		"hash": "4d80e971ce693861cd9330b57a9f13f24302f800293de7d70aad057d21590d96"
	},
	{
		"id": "09e35e4a09a3",
		"ts": "2026-08-17T07:49:12.594Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 263356.73,
		"hash": "09e35e4a09a3bd446b3cf2425971673206181f5494dd5e253b05c40f26b609e4"
	},
	{
		"id": "2bcc6f48d033",
		"ts": "2026-08-17T07:49:12.805Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9643174.79,
		"hash": "2bcc6f48d033c21bd421ffa0ddacab42b54c4eee74a73658ecb4cb615f18bcb3"
	},
	{
		"id": "67c82471230b",
		"ts": "2026-08-17T07:49:13.018Z",
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
		"liquidityUsd": 77071.38,
		"hash": "67c82471230b65ca305ad7ba910049e4de17df0a6e76be6f5c3d52896f7ac344"
	},
	{
		"id": "79e04f2ce751",
		"ts": "2026-08-17T07:49:13.231Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2566493.46,
		"hash": "79e04f2ce751c2f81c7f7ce769ebcaebc3c69bdf992a569fb579fafaa179bf56"
	},
	{
		"id": "8484a42b8f11",
		"ts": "2026-08-17T07:49:13.448Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 700391.3,
		"hash": "8484a42b8f112b83fa9b4ea8bcad7c21b152263c9ef2f0d5b11d6ffc87480ce6"
	},
	{
		"id": "774394140d95",
		"ts": "2026-08-17T07:49:13.662Z",
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
		"liquidityUsd": 601127.58,
		"hash": "774394140d95e61da45780adf6e13eb95b0d0063bc65153d6c3ec44cacd2dea3"
	},
	{
		"id": "14cdd6ec0128",
		"ts": "2026-08-17T06:45:38.536Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111588283.58,
		"hash": "14cdd6ec012802f909d6bc5c7c599de457e7ae5fbd0a374ccd8891f9727ba3ca"
	},
	{
		"id": "b43c8f4af463",
		"ts": "2026-08-17T06:45:38.753Z",
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
		"liquidityUsd": 17956905.07,
		"hash": "b43c8f4af46338b01ca544ba2d4cbcab9490a322f9331b3d70873abefd754252"
	},
	{
		"id": "1ea20b7f1b3a",
		"ts": "2026-08-17T06:45:39.089Z",
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
		"liquidityUsd": 805079.16,
		"hash": "1ea20b7f1b3aac217fb7ab302972bf0f3ec59cd5a481982c64b3859cd6b650d9"
	},
	{
		"id": "0ea953c19b8f",
		"ts": "2026-08-17T06:45:39.276Z",
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
		"liquidityUsd": 27034853.54,
		"hash": "0ea953c19b8fc58746a929421bea4184cabf79398b76e480e7c207f442664559"
	},
	{
		"id": "c6f626d5e00b",
		"ts": "2026-08-17T06:45:39.670Z",
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
		"liquidityUsd": 4177751.49,
		"hash": "c6f626d5e00b05a9d0bea27c0a548310406e90cdc9051c6b04000a6eb4e87c6d"
	},
	{
		"id": "e38afe62ff95",
		"ts": "2026-08-17T06:45:39.851Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 894118.81,
		"hash": "e38afe62ff95ea2fd74a6106356b593b361a16132927ceb01a1621316f760ec2"
	},
	{
		"id": "c52f96ee324e",
		"ts": "2026-08-17T06:45:40.039Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5793279.11,
		"hash": "c52f96ee324e4f2abd72b86e3c2ecac76e49c4086e0025d9eb61165fcc14845a"
	},
	{
		"id": "2af9e2f7721b",
		"ts": "2026-08-17T06:45:40.247Z",
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
		"liquidityUsd": 3327311.41,
		"hash": "2af9e2f7721b9256a0e93c278d87fa1f2b9eea165c03f0cee50f6d4a61997e73"
	},
	{
		"id": "9825acab9db1",
		"ts": "2026-08-17T06:45:40.585Z",
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
		"liquidityUsd": 88810.3,
		"hash": "9825acab9db1f97cf5cb0e10dc6c551d86e61db3f35225ad7ffb32ad851ddec3"
	},
	{
		"id": "b6ddce299fde",
		"ts": "2026-08-17T06:45:40.779Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 82132.41,
		"hash": "b6ddce299fde62e32e308dd789b82482461856542e9026aadc0048ae284badd3"
	},
	{
		"id": "1ae06518f43f",
		"ts": "2026-08-17T06:45:40.976Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1013313.57,
		"hash": "1ae06518f43fc78cb6531ad6999f55b27bd024e0d073a0692f08e49be62ef9d8"
	},
	{
		"id": "a10ffd9acb24",
		"ts": "2026-08-17T06:45:41.190Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5779073.5,
		"hash": "a10ffd9acb24affb0d023fecd4ed31691a417fb8d18e21c4a7e6373fa122400e"
	},
	{
		"id": "7eec4fe8bf7d",
		"ts": "2026-08-17T06:45:41.361Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 643618.91,
		"hash": "7eec4fe8bf7dd283bbc63f6eb013d5b58070dce1cf8080d2e7165a2a31a384c8"
	},
	{
		"id": "47fd286dc6c6",
		"ts": "2026-08-17T06:45:41.556Z",
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
		"liquidityUsd": 1426809.57,
		"hash": "47fd286dc6c6d06514c73cb2527d87232fa1e035723df5a594eced18f82533cb"
	},
	{
		"id": "eb0ceea64dce",
		"ts": "2026-08-17T06:45:41.747Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 263408.65,
		"hash": "eb0ceea64dcebf9149ff1c8bd163ed8d6cf90c818bbf3317a545f74982307a84"
	},
	{
		"id": "373d1b92bc25",
		"ts": "2026-08-17T06:45:41.945Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2595432.01,
		"hash": "373d1b92bc25748e390f57df8348a7f9f33baac0a3dc62f12ccae4b0f8d5dbbd"
	},
	{
		"id": "2f5895dfd333",
		"ts": "2026-08-17T06:45:42.146Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9638146.97,
		"hash": "2f5895dfd3335aa43ed2a94986f2961a1f2dccb45beab0194983f2ecd2736096"
	},
	{
		"id": "acb09385f999",
		"ts": "2026-08-17T06:45:42.331Z",
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
		"liquidityUsd": 88970.53,
		"hash": "acb09385f999af066954681e45d20a89cb034d02e0515bda879d2969d12c32d6"
	},
	{
		"id": "c0ae4c14c9ae",
		"ts": "2026-08-17T06:45:42.539Z",
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
		"liquidityUsd": 590502.6,
		"hash": "c0ae4c14c9ae8492607d5ab9875b6a738487f042ff2f4395701ebc799ed85316"
	},
	{
		"id": "3c468c0ee8f9",
		"ts": "2026-08-17T06:45:42.717Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 727525.17,
		"hash": "3c468c0ee8f9064ca8a5f467e6983d692a7941cb8834bafccae0442b00c18d01"
	},
	{
		"id": "efd8bb35b347",
		"ts": "2026-08-17T05:31:32.565Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111602756.78,
		"hash": "efd8bb35b347b020805ca536fb49523512a6cb1dfe7fe45a47a964979d11db73"
	},
	{
		"id": "d0104f2b6a30",
		"ts": "2026-08-17T05:31:32.800Z",
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
		"liquidityUsd": 18091242.35,
		"hash": "d0104f2b6a3051cf406c9f683edb07276e01e6fef61d1d31648dcb9a141e1cfc"
	}
]
