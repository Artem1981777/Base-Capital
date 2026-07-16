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
	"updatedAt": "2026-07-16T15:36:51.556Z",
	"tokensScored": 3672,
	"verdictsIssued": 3672,
	"safe": 3251,
	"risky": 304,
	"likelyRug": 117,
	"ticks": 227
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "f97ae164ee87",
		"ts": "2026-07-16T15:36:47.728Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106079440.28,
		"hash": "f97ae164ee8732076cd6bb46f31c28939b8bece4ff3e63df333740a675aba49b"
	},
	{
		"id": "8a5e4d170180",
		"ts": "2026-07-16T15:36:48.114Z",
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
		"liquidityUsd": 15404628.77,
		"hash": "8a5e4d170180b27309268229875c9ddf0ae1a18c1fd2e64fd23922fba97fcd4e"
	},
	{
		"id": "f9e4ee682822",
		"ts": "2026-07-16T15:36:48.358Z",
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
		"liquidityUsd": 1160868.42,
		"hash": "f9e4ee682822c000e16ec5380be236f0bd11b9b114fb45c6de42bff9313efdf2"
	},
	{
		"id": "dd54ca72f337",
		"ts": "2026-07-16T15:36:48.569Z",
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
		"liquidityUsd": 30247810.14,
		"hash": "dd54ca72f3374aee0190a110ce0e2979f2323739fb3ffca73200d8fa3e891650"
	},
	{
		"id": "13dd23acc5ae",
		"ts": "2026-07-16T15:36:48.784Z",
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
		"liquidityUsd": 4860183.81,
		"hash": "13dd23acc5aef9be9a7c299cb7c19befb3dd5a29fc990257ef56b4a6f3512687"
	},
	{
		"id": "39647ea15565",
		"ts": "2026-07-16T15:36:49.015Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1007645.91,
		"hash": "39647ea1556570f2f7d03c5f85e1390d7bbadd99263dff07e92126d9970aa508"
	},
	{
		"id": "3369bde41216",
		"ts": "2026-07-16T15:36:49.261Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30247810.14,
		"hash": "3369bde4121666d8bf1e4d2275cd9706600020cc109cfb5a67478916cca8209a"
	},
	{
		"id": "b8e442a5b746",
		"ts": "2026-07-16T15:36:49.474Z",
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
		"liquidityUsd": 2515747.6,
		"hash": "b8e442a5b74615a62fe54f6bf19a41a9ecf87cd1d8b67aa41a2d7ba3930b48e2"
	},
	{
		"id": "a6255ce34922",
		"ts": "2026-07-16T15:36:49.678Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 968652.08,
		"hash": "a6255ce34922889a737b60fd3a08030af4bfea18aced9ed05db49edd977886e4"
	},
	{
		"id": "e8894e5ae712",
		"ts": "2026-07-16T15:36:49.913Z",
		"symbol": "doji",
		"token": "0x693B8De886712f0039EEf578bbE5aC7ea3B598CE",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 132197.17,
		"hash": "e8894e5ae712959b682b5d45ceb7d8dd9098d386955483bdbf4857d442ab8e39"
	},
	{
		"id": "61c113f9e044",
		"ts": "2026-07-16T15:36:50.128Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 434238.18,
		"hash": "61c113f9e044a2c87966b94dd102cb5ed9a19705c2cb37b92db0efd5c6159e59"
	},
	{
		"id": "a411a71cf8c4",
		"ts": "2026-07-16T15:36:50.323Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 117500.49,
		"hash": "a411a71cf8c4b58bf63910dfd573496413b32d3f904da9e7ff94aab70572c57c"
	},
	{
		"id": "0e45cee2844c",
		"ts": "2026-07-16T15:36:50.528Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 121160.02,
		"hash": "0e45cee2844c6b37294b16a883ada0fddabe0290ee207428123cad020749bbcc"
	},
	{
		"id": "e5d205b73bb5",
		"ts": "2026-07-16T15:36:50.724Z",
		"symbol": "$COBIE",
		"token": "0x199084f1390B58493096Ff73Ec74c68164ba8453",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 63191.43,
		"hash": "e5d205b73bb5cb0420afefa1d13280a197606290c910d72f7f31bee654fd0a2f"
	},
	{
		"id": "b1d0f4581420",
		"ts": "2026-07-16T15:36:50.915Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 786248.58,
		"hash": "b1d0f4581420695993ed5b26b5573a35d2abc6050a0f746c3d01b6fd4e3eddc7"
	},
	{
		"id": "6dd9573dc502",
		"ts": "2026-07-16T15:36:51.106Z",
		"symbol": "SLEDGEHAMMER",
		"token": "0x1C0961F4a919026aac1c6dFB86af69A78588114F",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 33787.4,
		"hash": "6dd9573dc502e26ebfe4085eb6bd4c876ff9e772f92a456d13496bd9f32a6a54"
	},
	{
		"id": "d6a0dd973fbb",
		"ts": "2026-07-16T15:36:51.296Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 100194.08,
		"hash": "d6a0dd973fbb462fe788278dd7def8402bc9e69cddca6f53b7999482d219439d"
	},
	{
		"id": "90ebbc6c9624",
		"ts": "2026-07-16T15:36:51.555Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 487796.55,
		"hash": "90ebbc6c962420fbac470bf94f470e3b3648f74ccf8959649fe24399d3829247"
	},
	{
		"id": "912d060758d4",
		"ts": "2026-07-16T13:42:11.240Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105852085.87,
		"hash": "912d060758d41302fd582ac2d1f45411885444ecf110b8fa4ea8ab137517914f"
	},
	{
		"id": "15ab1cf05cd8",
		"ts": "2026-07-16T13:42:11.495Z",
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
		"liquidityUsd": 16145902.75,
		"hash": "15ab1cf05cd8b5f75d00240b8a978dca22093a1c48f92772bc3bf64fb7dd23b0"
	},
	{
		"id": "557aade1adf0",
		"ts": "2026-07-16T13:42:11.749Z",
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
		"liquidityUsd": 1155857.7,
		"hash": "557aade1adf009261f00d7efdce1945d2ac8d79364850eaa7fa6e38073df4a38"
	},
	{
		"id": "00f98c1bedc6",
		"ts": "2026-07-16T13:42:11.993Z",
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
		"liquidityUsd": 29732843.64,
		"hash": "00f98c1bedc6dd6f07590731740c4736631e5bae99d682ab086b221b1e05e079"
	},
	{
		"id": "56949081d658",
		"ts": "2026-07-16T13:42:12.238Z",
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
		"liquidityUsd": 4808314.45,
		"hash": "56949081d65876f9e933511fd2d19878093627c7ebf649ae0b233536830072f2"
	},
	{
		"id": "1dac8fec9fc7",
		"ts": "2026-07-16T13:42:12.491Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1005623.35,
		"hash": "1dac8fec9fc7c7c4b89fb8b7b802061d6d545e523a77ee0366bce0590be26839"
	},
	{
		"id": "cd0d76bf566b",
		"ts": "2026-07-16T13:42:12.734Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29732843.64,
		"hash": "cd0d76bf566bb5a05d319a6b62b0d1efbdd881c88bf82e37fb19c6466c554e0a"
	},
	{
		"id": "af312fcbf158",
		"ts": "2026-07-16T13:42:12.976Z",
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
		"liquidityUsd": 2513229.79,
		"hash": "af312fcbf1583c6f0653fa15bda5e44b20f5f1374f53edfed64af5064ac30644"
	},
	{
		"id": "503667d36c4f",
		"ts": "2026-07-16T13:42:13.220Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 933817.55,
		"hash": "503667d36c4f5e42776a37d47790c0db4937e74f465714dd13f05dfd5a8dc4f4"
	},
	{
		"id": "76e08d3bd7e8",
		"ts": "2026-07-16T13:42:13.470Z",
		"symbol": "doji",
		"token": "0x693B8De886712f0039EEf578bbE5aC7ea3B598CE",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 147628.28,
		"hash": "76e08d3bd7e820ee641b80b6604edb1e68fb0f95cdb82613c7da0828b36bc59c"
	},
	{
		"id": "242cf5b8dcb5",
		"ts": "2026-07-16T13:42:13.703Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 425080.74,
		"hash": "242cf5b8dcb53d038cab740baf20ebb3ae16bf22fcee177d1dedf283cabf0402"
	},
	{
		"id": "29540be9ab17",
		"ts": "2026-07-16T13:42:13.925Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 121160.02,
		"hash": "29540be9ab175529ecc445449665b7f7ad6921ec56bb83eb809c21e393c8da19"
	},
	{
		"id": "22a8dc0df6d3",
		"ts": "2026-07-16T13:42:14.152Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 147228.03,
		"hash": "22a8dc0df6d31415dbfa4e4c5a7fdbc1f3cb55d7a5b147bb39126996ad787517"
	},
	{
		"id": "52dc46d09da3",
		"ts": "2026-07-16T13:42:14.385Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 796098.22,
		"hash": "52dc46d09da354a464a674f08b272f886bf0acc2656b2b96ecd1ee070c71cae7"
	},
	{
		"id": "dcbf44d2bf60",
		"ts": "2026-07-16T13:42:14.610Z",
		"symbol": "SLEDGEHAMMER",
		"token": "0x1C0961F4a919026aac1c6dFB86af69A78588114F",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 35567.65,
		"hash": "dcbf44d2bf60bc13e502b6e241b82981d57d1cc171d945e11b42e965d1c72bc6"
	},
	{
		"id": "bac60c86b940",
		"ts": "2026-07-16T13:42:14.834Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 108240.49,
		"hash": "bac60c86b94031e1fcfddcce12e5f2875f9fbc3243a2282b7da68b1e6e53f7f6"
	},
	{
		"id": "a644f7f5bbb2",
		"ts": "2026-07-16T13:42:15.061Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2181938.53,
		"hash": "a644f7f5bbb2fc9dcb60fb6a0e30f3fbe31a2681f4f0c94facd53d8fe832ed42"
	},
	{
		"id": "7a30369b5fdf",
		"ts": "2026-07-16T13:42:15.294Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 542307.77,
		"hash": "7a30369b5fdf65ac50a2eb4ca47ca31bb835324ff56135429fa17141cb211bcc"
	},
	{
		"id": "861763012656",
		"ts": "2026-07-16T11:36:57.555Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105831810.68,
		"hash": "8617630126564ebcd6776f4876a0322d683f7410fc69cbbb0344943ed6c5b724"
	},
	{
		"id": "fddbed68de74",
		"ts": "2026-07-16T11:36:58.005Z",
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
		"liquidityUsd": 13874984.19,
		"hash": "fddbed68de74bdcf23cd5434516514a39d1c9990afe3b9ea52be11d730030a02"
	},
	{
		"id": "66a77800cba5",
		"ts": "2026-07-16T11:36:58.480Z",
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
		"liquidityUsd": 1158128.73,
		"hash": "66a77800cba577f46c417ccdb5efd0c4f9a3772a5cb4a2ad3f63fa09f1eb6aff"
	},
	{
		"id": "b8ac47ad9a3b",
		"ts": "2026-07-16T11:36:58.724Z",
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
		"liquidityUsd": 29891151.67,
		"hash": "b8ac47ad9a3b7b3271ec3aba48347ed6013bc19d8841ed854f09f9bb318382da"
	},
	{
		"id": "0b9fcf2e5767",
		"ts": "2026-07-16T11:36:58.975Z",
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
		"liquidityUsd": 4788482.87,
		"hash": "0b9fcf2e5767eecfb6063d021b4f55eb2708a26dd68f8116fa0c4a67f2c4c896"
	},
	{
		"id": "d9bef036a974",
		"ts": "2026-07-16T11:36:59.218Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1010534,
		"hash": "d9bef036a9742cd5751c0ea2ce2c2ae4d2147681d02c4b71f4371d01c00ee30c"
	},
	{
		"id": "9f4b64d07381",
		"ts": "2026-07-16T11:36:59.462Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29891151.67,
		"hash": "9f4b64d07381212192df6b94c13d4a9fe8140e7d173b2cc7f3a1855e52e5c468"
	},
	{
		"id": "cce70667f128",
		"ts": "2026-07-16T11:36:59.716Z",
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
		"liquidityUsd": 2508565.98,
		"hash": "cce70667f1288fe02399ed69ac69d6e5fe4f7125ad2222052d2a83587f06811c"
	},
	{
		"id": "3be938eabe30",
		"ts": "2026-07-16T11:36:59.954Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 900921.01,
		"hash": "3be938eabe3060e94e9dfab452e4d0e9522bb7313679be5403e235f478c881ff"
	},
	{
		"id": "21c6c8d3c61a",
		"ts": "2026-07-16T11:37:00.202Z",
		"symbol": "doji",
		"token": "0x693B8De886712f0039EEf578bbE5aC7ea3B598CE",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 169552.99,
		"hash": "21c6c8d3c61a7f9160245291d2b258ad87730ff7c26287c81d956b9407e6b919"
	},
	{
		"id": "4906af9a29d9",
		"ts": "2026-07-16T11:37:00.444Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 442642.79,
		"hash": "4906af9a29d98b431b746e8b252c589f059df1c7029d031742951ea8b14f789d"
	},
	{
		"id": "7fae2221cb56",
		"ts": "2026-07-16T11:37:00.699Z",
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
		"liquidityUsd": 794520.22,
		"hash": "7fae2221cb56534de3f8ff77ee5c815a1dca9253c5a3060283bc8d7b2349e565"
	},
	{
		"id": "066e3c1bb559",
		"ts": "2026-07-16T11:37:01.234Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 164991.95,
		"hash": "066e3c1bb559618f6c1897c022af987b0979d99055d345ca49d03578a34a53f3"
	},
	{
		"id": "7db76c21f3e0",
		"ts": "2026-07-16T11:37:01.479Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 66,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.32,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 121160.02,
		"hash": "7db76c21f3e09a36de37b3c7b207352266e59d34ddea83e026964a5c1e534567"
	},
	{
		"id": "953121686ad1",
		"ts": "2026-07-16T11:37:01.717Z",
		"symbol": "SLEDGEHAMMER",
		"token": "0x1C0961F4a919026aac1c6dFB86af69A78588114F",
		"score": 76,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.52,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 42074.36,
		"hash": "953121686ad1adeb4f0c74a2bba65887f4acc026211b4cfecb333bb3e86ac8bf"
	},
	{
		"id": "7bed64c96730",
		"ts": "2026-07-16T11:37:01.960Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 96326.44,
		"hash": "7bed64c96730897aeed96c1fb5ea220b44487661dc68534cd13b38adf7594bac"
	},
	{
		"id": "64e2be3db886",
		"ts": "2026-07-16T11:37:02.219Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 285691.57,
		"hash": "64e2be3db886c19ba418a17f8d632eed4e249abd36789f5dad4b645730f6b9a2"
	},
	{
		"id": "900bb05b4cdb",
		"ts": "2026-07-16T11:37:02.460Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1429875.89,
		"hash": "900bb05b4cdbd12c275f7af5f3600b7aaec5f1b6b316297ce38ba19f7e253801"
	},
	{
		"id": "764f13f93403",
		"ts": "2026-07-16T09:10:40.554Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105723080.02,
		"hash": "764f13f934039f1d1f048707411e948111033c5e2ec908fb6b8a39f03f2b0716"
	},
	{
		"id": "d420a5c55bf2",
		"ts": "2026-07-16T09:10:41.021Z",
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
		"liquidityUsd": 15146356.3,
		"hash": "d420a5c55bf2812343c212bcc2ec082eafcf390c6c4cd27f47b72f6f02e780bf"
	},
	{
		"id": "a744b2981515",
		"ts": "2026-07-16T09:10:41.321Z",
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
		"liquidityUsd": 1166756.45,
		"hash": "a744b29815155350d9d92104685dfb0dc99c5a12846210626bb558fe7ec7eaf2"
	},
	{
		"id": "048eb62fb2f3",
		"ts": "2026-07-16T09:10:41.572Z",
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
		"liquidityUsd": 29811279.61,
		"hash": "048eb62fb2f3a78c737271b4c248e658801e8d64b2ef9618444820a2f18db63a"
	},
	{
		"id": "413db9bbce7f",
		"ts": "2026-07-16T09:10:41.822Z",
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
		"liquidityUsd": 4721602.12,
		"hash": "413db9bbce7f8aa745ce3a711cb02eb4df4d8969ec9a4700e15e9b4f3040d22e"
	},
	{
		"id": "2d9d00c52da2",
		"ts": "2026-07-16T09:10:42.783Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1011071.3,
		"hash": "2d9d00c52da2cfdbbf9ebffb28af53c7bd7bee9d253dbae0853ebf1028a81883"
	},
	{
		"id": "b8ed1b3aaee2",
		"ts": "2026-07-16T09:10:43.549Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29811279.61,
		"hash": "b8ed1b3aaee256a77e31f5289ac1ca18e8318200ae96144b96b4e9fa7ef5d3b8"
	},
	{
		"id": "e189b8d16ec7",
		"ts": "2026-07-16T09:10:44.063Z",
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
		"liquidityUsd": 2513084.84,
		"hash": "e189b8d16ec74fbab7807461c382ff07c437e5eefcba518133e5970fb2557ba0"
	},
	{
		"id": "41d331be7dc4",
		"ts": "2026-07-16T09:10:44.312Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 935639.62,
		"hash": "41d331be7dc4fe75b65c13ff7a8f0782adf1fd568b14ca6b14bbbc2a9237ce7a"
	},
	{
		"id": "94fcb6f8f1bc",
		"ts": "2026-07-16T09:10:44.563Z",
		"symbol": "doji",
		"token": "0x693B8De886712f0039EEf578bbE5aC7ea3B598CE",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 120395.88,
		"hash": "94fcb6f8f1bc8165e58a9bebbe81ac6ad3ac477d8482ebcf985ca3ac4a6c9b7f"
	},
	{
		"id": "599cbcbc3074",
		"ts": "2026-07-16T09:10:44.795Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 433420.42,
		"hash": "599cbcbc307486ff5fdc74ef67a270ab6d51754bde786fd4c2120d5c11704e97"
	},
	{
		"id": "6740532750a3",
		"ts": "2026-07-16T09:10:45.027Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 793486.7,
		"hash": "6740532750a3a8057abcdbe9e83044df079f41535d320bdec22724bb1b1fef5c"
	},
	{
		"id": "03c55c027c1b",
		"ts": "2026-07-16T09:10:45.260Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 182581.09,
		"hash": "03c55c027c1b2052c10d55e6a61b5348416c862f2a3fecc93f7eba71ddbaba42"
	},
	{
		"id": "35649961b954",
		"ts": "2026-07-16T09:10:45.980Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 121160.02,
		"hash": "35649961b9546a10d6af4fd69a0e32bd6f44ccc9181164a870821852e3084123"
	},
	{
		"id": "07603c9a40c6",
		"ts": "2026-07-16T09:10:46.215Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 496620.28,
		"hash": "07603c9a40c60c105133d59148a0683992d192e3aa80b9b6fe3078ceffb6dee4"
	},
	{
		"id": "15603fdbc001",
		"ts": "2026-07-16T09:10:46.449Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 93524.49,
		"hash": "15603fdbc0017f66d129c2d9c844c93a78fcb2a1fff89f59ceec5c9072654cba"
	},
	{
		"id": "dff54a832a0b",
		"ts": "2026-07-16T09:10:46.682Z",
		"symbol": "SLEDGEHAMMER",
		"token": "0x1C0961F4a919026aac1c6dFB86af69A78588114F",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 30052.92,
		"hash": "dff54a832a0b0a786a17da828025a84d82da29e46e86e6c37af9dbe93cd9b1ab"
	},
	{
		"id": "8949a9414936",
		"ts": "2026-07-16T09:10:46.915Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1442888.12,
		"hash": "8949a9414936d680af6fa714a0ab626bfe3fe7ec950632bca194905d21ab746d"
	},
	{
		"id": "90e9d1cce212",
		"ts": "2026-07-16T06:13:58.076Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106354323.28,
		"hash": "90e9d1cce212871fd0b6490fc001cf7f9239c9cece66c8f3e7c6dbadb93b698a"
	},
	{
		"id": "6565f1118b30",
		"ts": "2026-07-16T06:13:58.739Z",
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
		"liquidityUsd": 16118031.9,
		"hash": "6565f1118b302b24259fe418af0730688e346c5333838656096e770fdf99985d"
	},
	{
		"id": "1a369cb07a91",
		"ts": "2026-07-16T06:13:59.205Z",
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
		"liquidityUsd": 1182564.96,
		"hash": "1a369cb07a91a361d8d55a592deb89fa5deea76c6013d6c01e808854c81205f1"
	},
	{
		"id": "579cc280ce89",
		"ts": "2026-07-16T06:13:59.669Z",
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
		"liquidityUsd": 30159237.18,
		"hash": "579cc280ce8922251897fc460c170cdb660308837e45e64d1c01a2dc433ab3dc"
	},
	{
		"id": "9662bd5769f2",
		"ts": "2026-07-16T06:14:00.134Z",
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
		"liquidityUsd": 4813876.17,
		"hash": "9662bd5769f2b2442a74e1cccef3d10567654b9fcc13f4bbd552138f7313cc91"
	},
	{
		"id": "2f858a15b249",
		"ts": "2026-07-16T06:14:00.389Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1022299.12,
		"hash": "2f858a15b24989d89d2c8a7249618020bf5c4951ff1c6c25153a7d9c6ca91063"
	},
	{
		"id": "7f41eadc7498",
		"ts": "2026-07-16T06:14:00.646Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30159237.18,
		"hash": "7f41eadc749871c0c55ccca4a157e814b555167d996bf9910b37203bb4719372"
	},
	{
		"id": "2fb7061fbf1c",
		"ts": "2026-07-16T06:14:01.238Z",
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
		"liquidityUsd": 2567702.21,
		"hash": "2fb7061fbf1c7c8345f98fb587a48ccc23fa2bf4c4bbd60c12554521c734aa70"
	},
	{
		"id": "52a09c984780",
		"ts": "2026-07-16T06:14:01.666Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 970014.52,
		"hash": "52a09c984780c5f457991f3bff6494fdc5b59847e925dae0d490949d57eb833c"
	},
	{
		"id": "3226c294ae03",
		"ts": "2026-07-16T06:14:01.992Z",
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
		"liquidityUsd": 821362.82,
		"hash": "3226c294ae03d43d40c6c8897ea07b4ff2791e73a2e4902d3c5c9c1c79d6f430"
	},
	{
		"id": "5f204194cc08",
		"ts": "2026-07-16T06:14:02.362Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 458290.94,
		"hash": "5f204194cc08307f17195625c4fd97c05f121708997512072f5389c2fafaa992"
	},
	{
		"id": "04f0a086762c",
		"ts": "2026-07-16T06:14:02.619Z",
		"symbol": "doji",
		"token": "0x693B8De886712f0039EEf578bbE5aC7ea3B598CE",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 99256.22,
		"hash": "04f0a086762cff3224e3093fc3c73af81a7955ba833ece9f2f98cf455f350530"
	},
	{
		"id": "e003678c4fa9",
		"ts": "2026-07-16T06:14:02.868Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 170478.04,
		"hash": "e003678c4fa9930cb7e6b81d3b923e54741dbe23c55603e3cb9f0f46cd2c0d2f"
	},
	{
		"id": "23c67fa19d9c",
		"ts": "2026-07-16T06:14:03.099Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 66,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.32,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 121160.02,
		"hash": "23c67fa19d9c6772289ee6d880e25314f0ca71e8c7b172d21acdc8158d77f230"
	},
	{
		"id": "8d5074eddf87",
		"ts": "2026-07-16T06:14:03.754Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 508615.38,
		"hash": "8d5074eddf87de9b290114f687315d7ce892dc76a6fac5aca73a8d867712fae2"
	},
	{
		"id": "576cebe7ce0d",
		"ts": "2026-07-16T06:14:03.986Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 95894.75,
		"hash": "576cebe7ce0d4f1e38f5f2a9923e874fd304731f38f5017448b59e35e368bcdd"
	},
	{
		"id": "9e4bb7b4eb0e",
		"ts": "2026-07-16T06:14:04.220Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 272103.28,
		"hash": "9e4bb7b4eb0e72e2e3ed5f9a299d8cc69253efce48b5a10c270eafae87e7079d"
	},
	{
		"id": "a2fb2e01f64b",
		"ts": "2026-07-16T06:14:04.441Z",
		"symbol": "SLEDGEHAMMER",
		"token": "0x1C0961F4a919026aac1c6dFB86af69A78588114F",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 27135.88,
		"hash": "a2fb2e01f64b7aae17ba50f728b420324a6dca2383866f6eeb917d3ecf029cb9"
	},
	{
		"id": "fb456b007819",
		"ts": "2026-07-16T03:27:24.963Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105994087.27,
		"hash": "fb456b00781937a267a89eb94f0e5b428cbf7be5dd53c5ae803e9cefdead2a6c"
	},
	{
		"id": "f9abd280dc80",
		"ts": "2026-07-16T03:27:25.311Z",
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
		"liquidityUsd": 15407779.98,
		"hash": "f9abd280dc807c993734e1a6fd978d72048d2e1ac8995e8c18267b56184aaca3"
	},
	{
		"id": "94419d9fc969",
		"ts": "2026-07-16T03:27:25.656Z",
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
		"liquidityUsd": 1183346.31,
		"hash": "94419d9fc9690abde839124fd6adc4cb320325e9eacd05bd2ce6dd28f985e9c0"
	},
	{
		"id": "0d98b190fde2",
		"ts": "2026-07-16T03:27:26.004Z",
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
		"liquidityUsd": 30221931.12,
		"hash": "0d98b190fde27238901fc9ec46caba851409e5ef82a50fe977fca9e6f62847e8"
	},
	{
		"id": "202046ff28ec",
		"ts": "2026-07-16T03:27:26.195Z",
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
		"liquidityUsd": 4821267.04,
		"hash": "202046ff28ecb8769cc1d646f2ce500ed716cb73c93127164494410f73a3b91d"
	},
	{
		"id": "6c1d2f7fcbcc",
		"ts": "2026-07-16T03:27:26.390Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1024986.59,
		"hash": "6c1d2f7fcbcceaf9fea59eb100e41d0ac12f6965bda0dc3ec0ddd3714a321131"
	},
	{
		"id": "a4a3922914fd",
		"ts": "2026-07-16T03:27:26.589Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30221931.12,
		"hash": "a4a3922914fdbe0de7fb0c2f5d41c97515a3b5f295a68eef07cb94a28a0e1e28"
	},
	{
		"id": "07fb20750b00",
		"ts": "2026-07-16T03:27:26.787Z",
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
		"liquidityUsd": 2565875.75,
		"hash": "07fb20750b001fdd55340472694a5797c5cfbf7688475f1cb191d7af6a8dba8b"
	},
	{
		"id": "ca1fb1250309",
		"ts": "2026-07-16T03:27:26.976Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1006894.19,
		"hash": "ca1fb125030965d50b13978b8b385bd50df0ac87ea538771f8ba4ae81c3d1273"
	},
	{
		"id": "a756f254a6ae",
		"ts": "2026-07-16T03:27:27.165Z",
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
		"liquidityUsd": 819378.22,
		"hash": "a756f254a6aee5e8ef8cac2ab0236d14d8d69571acd3a3c63dce6ffe45c4c8fd"
	},
	{
		"id": "c11b52e9ca82",
		"ts": "2026-07-16T03:27:27.361Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 462089.04,
		"hash": "c11b52e9ca820804c66b32bb626011f56e36cbec3b87578174e7138c0b2e23cf"
	},
	{
		"id": "8b0da827b252",
		"ts": "2026-07-16T03:27:27.553Z",
		"symbol": "doji",
		"token": "0x693B8De886712f0039EEf578bbE5aC7ea3B598CE",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 145765.48,
		"hash": "8b0da827b2524a25231940224b01b5791cdb1824c1331e04e7e02ad086e04e6b"
	},
	{
		"id": "f0f93b7ed3bb",
		"ts": "2026-07-16T03:27:27.745Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 84280.14,
		"hash": "f0f93b7ed3bbf9f96423e99f2a3705651fd0af2caf4809bb3c7f4b331c12776e"
	},
	{
		"id": "47ef742c1d6a",
		"ts": "2026-07-16T03:27:27.918Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 145265.97,
		"hash": "47ef742c1d6a8ab668abed9afabd049b0a5ef13f8866c8b53690ec00d5be2fbe"
	},
	{
		"id": "5c031745eec0",
		"ts": "2026-07-16T03:27:28.122Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 121160.02,
		"hash": "5c031745eec04a40af31519f4bc26321d2768a57fe7786a4a62b43830f2a7ebd"
	},
	{
		"id": "a887d5e5f75a",
		"ts": "2026-07-16T03:27:28.317Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 512201.16,
		"hash": "a887d5e5f75adeb10540be1850f8d51100d1fcf697aad753cb107fec025163b7"
	},
	{
		"id": "97ba5234006e",
		"ts": "2026-07-16T03:27:28.521Z",
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
		"liquidityUsd": 1298607.62,
		"hash": "97ba5234006ea53779e794b8bad96b2bf26d1f51c8a84a6c3620f1de7410caac"
	},
	{
		"id": "ecd9d7ad89ed",
		"ts": "2026-07-16T03:27:28.708Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1452781.22,
		"hash": "ecd9d7ad89eda8309aab47def1460290b61d771f4a96e04ae06b1ed160320fb9"
	},
	{
		"id": "d81b90ed5be3",
		"ts": "2026-07-16T00:00:12.585Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105746213.27,
		"hash": "d81b90ed5be31b6e1d0cce8bee270f5b2992d65acca930434b81a88e40614956"
	},
	{
		"id": "75d9a529056e",
		"ts": "2026-07-16T00:00:13.187Z",
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
		"liquidityUsd": 15810576.25,
		"hash": "75d9a529056e7e0a8d7fe1ca5f7746da23d5339c8eeb771085f19efc38aecd84"
	},
	{
		"id": "f295d41aa3f9",
		"ts": "2026-07-16T00:00:13.473Z",
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
		"liquidityUsd": 1172586.78,
		"hash": "f295d41aa3f97e2221422fb148c168381a1ba0a4209d3be5d0194d68b6e408e8"
	},
	{
		"id": "2bd6b1f1ad8b",
		"ts": "2026-07-16T00:00:13.816Z",
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
		"liquidityUsd": 30228391.18,
		"hash": "2bd6b1f1ad8b5debf8bfcf8db02971d1cb23f3896ac6199379d7b0ab22446b6a"
	},
	{
		"id": "320dc8b6c6d9",
		"ts": "2026-07-16T00:00:14.066Z",
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
		"liquidityUsd": 4791931.01,
		"hash": "320dc8b6c6d905e3f00d6412d4ba0eec86509ff185400f13da0f61c5213aa28f"
	},
	{
		"id": "62d7f53bcdcc",
		"ts": "2026-07-16T00:00:14.433Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1024976.08,
		"hash": "62d7f53bcdcce36a5ba869d3b4f9a9542813f7559e17a6bd3d2013f861c1c255"
	},
	{
		"id": "ba75ba4d868d",
		"ts": "2026-07-16T00:00:14.686Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30228391.18,
		"hash": "ba75ba4d868dd283a1176f4545ccf58eb72d054f94391e8b534a267fd47b073f"
	},
	{
		"id": "9dc2669b9399",
		"ts": "2026-07-16T00:00:15.040Z",
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
		"liquidityUsd": 2504621.35,
		"hash": "9dc2669b9399d013d24c2cc777530201b977179087d5ca50dac017ac311bb6c8"
	},
	{
		"id": "6a571a6be8c9",
		"ts": "2026-07-16T00:00:15.437Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1019929.69,
		"hash": "6a571a6be8c9b291432cb57c7afecf7b2d3f24c6322e3910bb7ab9ee2589bcfb"
	},
	{
		"id": "e97db0331fe5",
		"ts": "2026-07-16T00:00:15.696Z",
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
		"liquidityUsd": 791155.69,
		"hash": "e97db0331fe593e73f07628424d5e6882a5c0bccc3f636c4ae4c9457b7db8e13"
	},
	{
		"id": "6e03ed3fa2a6",
		"ts": "2026-07-16T00:00:16.067Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 473491.35,
		"hash": "6e03ed3fa2a6a2fb895991a4afd5dc72e73525542c6f983514a699d8092bac37"
	},
	{
		"id": "1554e356d137",
		"ts": "2026-07-16T00:00:16.396Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 88641.65,
		"hash": "1554e356d137d70fd6d956c10420f7503ebf67439f9e7d3d304062f5ab4f1fa6"
	},
	{
		"id": "3c35e89db5c5",
		"ts": "2026-07-16T00:00:16.716Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 121160.02,
		"hash": "3c35e89db5c552d5a33c2f5eeb0e49a4850984f9024c544744dd37e45f421190"
	},
	{
		"id": "a45d77a7e264",
		"ts": "2026-07-16T00:00:17.048Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 157627.11,
		"hash": "a45d77a7e2645713fa13bd853af4d18ba1c1294c9cc3a9fe71c25d5e9415e550"
	},
	{
		"id": "42d59477eef3",
		"ts": "2026-07-16T00:00:17.283Z",
		"symbol": "doji",
		"token": "0x693B8De886712f0039EEf578bbE5aC7ea3B598CE",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 129626.74,
		"hash": "42d59477eef3ba9e0ec71db3e0f4a6057da9510c7ef06572d1a7344ce8692b80"
	},
	{
		"id": "b9fb7f448cef",
		"ts": "2026-07-16T00:00:17.657Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 509009.62,
		"hash": "b9fb7f448cef66b126076f25b36f3606547d8bfd7e58360e9222b218dc466ff0"
	},
	{
		"id": "f887820cdf7a",
		"ts": "2026-07-16T00:00:17.942Z",
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
		"liquidityUsd": 1347617.18,
		"hash": "f887820cdf7af07d2d980d55f2e9af92cf920add625c2ea3d750a3a4364bbe8b"
	},
	{
		"id": "0f2d1a59e9f9",
		"ts": "2026-07-16T00:00:18.172Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1456758.82,
		"hash": "0f2d1a59e9f9abc9641ea03cd3aeecdf5b58361996c322c7f3e05ebcb8fb4f0c"
	},
	{
		"id": "f80a2a42db2b",
		"ts": "2026-07-16T00:00:18.435Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3536131.01,
		"hash": "f80a2a42db2bad90a27d2c21c1d5c9a5de8d20ae9124b45585c3cf43182dde36"
	},
	{
		"id": "90a991cfa941",
		"ts": "2026-07-15T22:57:36.404Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105849368.18,
		"hash": "90a991cfa941152d64fd9f9ce25d2e14288d3c0d1a1907b1fbc15ffe3944232c"
	},
	{
		"id": "177d7bd50c45",
		"ts": "2026-07-15T22:57:36.600Z",
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
		"liquidityUsd": 16417279.96,
		"hash": "177d7bd50c45c8a4c6499e3c9ac4902f533b4b18928f41a36c980e3def7ded84"
	},
	{
		"id": "9ca36ae4fd93",
		"ts": "2026-07-15T22:57:36.793Z",
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
		"liquidityUsd": 1176053.99,
		"hash": "9ca36ae4fd93d39da15d39602f1872030ec5c29e9280ca2a0963833fe0b88311"
	},
	{
		"id": "0c112fb99ffd",
		"ts": "2026-07-15T22:57:36.993Z",
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
		"liquidityUsd": 30289443.62,
		"hash": "0c112fb99ffde0cf654e31bddb1b2dea263c072c1492065bc6ac0a4c7cb13783"
	},
	{
		"id": "87fb2cffcb60",
		"ts": "2026-07-15T22:57:37.193Z",
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
		"liquidityUsd": 4787831.67,
		"hash": "87fb2cffcb609641823a35d9617f12374bbccbb1b6fc75f564e49f9d9368dfa5"
	},
	{
		"id": "0a70c66d96cb",
		"ts": "2026-07-15T22:57:37.385Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1024976.98,
		"hash": "0a70c66d96cb06756bd2e54d527ab00d450981a108abfff997c45e0ed494b9a8"
	},
	{
		"id": "9c54a898182a",
		"ts": "2026-07-15T22:57:37.573Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30289342.25,
		"hash": "9c54a898182a6d69b4012ab74112e9c3d69c9b9710516967fd065416487f1b1e"
	},
	{
		"id": "9feb400d551c",
		"ts": "2026-07-15T22:57:37.791Z",
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
		"liquidityUsd": 2510545.14,
		"hash": "9feb400d551c533b7f6ef14589fdb3ebdbe9b403c655af4f9c57126a3ea7e620"
	},
	{
		"id": "fdbde2071286",
		"ts": "2026-07-15T22:57:37.978Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1046467.04,
		"hash": "fdbde2071286cfdba81a5e4aa70bc4fb82e13d9eff06e1cb26fcbd7a0fe61e33"
	},
	{
		"id": "65448392d90b",
		"ts": "2026-07-15T22:57:38.170Z",
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
		"liquidityUsd": 786435.64,
		"hash": "65448392d90b666052e31c8dd5fea10ff902a943ca433288168cd9d600c3d247"
	},
	{
		"id": "9e607903ad13",
		"ts": "2026-07-15T22:57:38.351Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 5,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.9,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 109590.66,
		"hash": "9e607903ad130398b5b6479a0a05f27f2249bfcf55c3d74960792cc30c0a93e1"
	},
	{
		"id": "236af32ad767",
		"ts": "2026-07-15T22:57:38.546Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 470325.83,
		"hash": "236af32ad7677d97134406d26f3a35a68a2da99b3f6d10da703cc0e51cafe795"
	},
	{
		"id": "f3f3db0f4953",
		"ts": "2026-07-15T22:57:38.722Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 157778.39,
		"hash": "f3f3db0f49535d1065bba047e27f4fa295ab6c4fecf1b568301ab7eaf058d034"
	},
	{
		"id": "9a109af4512a",
		"ts": "2026-07-15T22:57:38.924Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 121160.02,
		"hash": "9a109af4512ac31cb63af30c8a4b26ae1d9f3ec4824e50751cdeb406fe3af33c"
	},
	{
		"id": "94c628ae3b2e",
		"ts": "2026-07-15T22:57:39.113Z",
		"symbol": "doji",
		"token": "0x693B8De886712f0039EEf578bbE5aC7ea3B598CE",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 134964.58,
		"hash": "94c628ae3b2e81cb0adde23c71728ee3a82597e8962744ee0fdcab0b8f45a8b3"
	},
	{
		"id": "57056b47a367",
		"ts": "2026-07-15T22:57:39.302Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 511789.52,
		"hash": "57056b47a36795de192846761d476d47aed5fa4b6815ec9c0a78391d6209ebcb"
	},
	{
		"id": "41910116f773",
		"ts": "2026-07-15T22:57:39.490Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1456758.82,
		"hash": "41910116f77361f1d3b9f97ac2a76780954a9bd786e629ee74fcae1ef471052e"
	},
	{
		"id": "6d42739be1c9",
		"ts": "2026-07-15T22:57:39.692Z",
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
		"liquidityUsd": 1337321.58,
		"hash": "6d42739be1c9da3550c3add169ac940844196e1886abcc26fbd317d5f81a2188"
	},
	{
		"id": "aaaad50f3ded",
		"ts": "2026-07-15T22:57:39.878Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3574712.7,
		"hash": "aaaad50f3ded77ad6ab16a95dbd1e0f2852b322e7ceae2cd4d7f038c78764027"
	},
	{
		"id": "775186e836d3",
		"ts": "2026-07-15T21:56:26.861Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105849150.24,
		"hash": "775186e836d3390eb1c4d591ff0891cbc5b6f2c96b39a7a7c108daf9eddfc0fc"
	},
	{
		"id": "078edaaa4728",
		"ts": "2026-07-15T21:56:27.210Z",
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
		"liquidityUsd": 16742343.81,
		"hash": "078edaaa472862c538d61c0e918c532918e8a5b7af53ff60e5ef6dac02ea8853"
	},
	{
		"id": "aec2392f5a90",
		"ts": "2026-07-15T21:56:27.408Z",
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
		"liquidityUsd": 1175873.86,
		"hash": "aec2392f5a9099dc8469b57bb2b97266eff965b80379e350988dbc883a909147"
	},
	{
		"id": "7bf4112a34bb",
		"ts": "2026-07-15T21:56:27.598Z",
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
		"liquidityUsd": 30317853.45,
		"hash": "7bf4112a34bb3f65ca4e98c091f7c3f15746a9b768664ab69ea0db229c0e50f3"
	},
	{
		"id": "e47d64295f31",
		"ts": "2026-07-15T21:56:27.819Z",
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
		"liquidityUsd": 4806796.84,
		"hash": "e47d64295f313705d97397e1705f4f6dce5c9b33f341285c2483af75b06fd11e"
	},
	{
		"id": "8566e4ff61de",
		"ts": "2026-07-15T21:56:28.009Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1024970.42,
		"hash": "8566e4ff61de047bed7a6605ea2938a7851ec4082b4c47240304ff02a483ff69"
	},
	{
		"id": "a84c57263467",
		"ts": "2026-07-15T21:56:28.205Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30317853.45,
		"hash": "a84c57263467b06ae1591a18e85b78232c7fb42764120f69bcae7dee2cd84dbf"
	},
	{
		"id": "208c1e0bf7d7",
		"ts": "2026-07-15T21:56:28.422Z",
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
		"liquidityUsd": 2879374.01,
		"hash": "208c1e0bf7d727c40b9a82a8bffc8950ac1d228fe07c9e2c1d5c2bb447d5c790"
	},
	{
		"id": "9f20b20731d8",
		"ts": "2026-07-15T21:56:28.754Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1023271.12,
		"hash": "9f20b20731d8fe53ec074fc25fb0b0fdcab98449bb511a9050469c6793246fda"
	},
	{
		"id": "25be3b55199c",
		"ts": "2026-07-15T21:56:28.943Z",
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
		"liquidityUsd": 783617.07,
		"hash": "25be3b55199c7bfff0b0c6dd9ee14ce5ba0ed790fecd4affe193f3fe1a2c0a66"
	},
	{
		"id": "61c96cf91872",
		"ts": "2026-07-15T21:56:29.140Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 143487.12,
		"hash": "61c96cf91872328708c7c779bdd70b9950f376a3b77db6d687e33eddbe7c9625"
	},
	{
		"id": "eb28a8883299",
		"ts": "2026-07-15T21:56:29.320Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 459394.31,
		"hash": "eb28a8883299bfb4d296568be15bb1b033f7d2a1b0a99a53bec6f167d0e0eb36"
	},
	{
		"id": "82212e099c51",
		"ts": "2026-07-15T21:56:29.517Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 158623.39,
		"hash": "82212e099c510709b4a813e35d4a7573bf9474faa3fcbb49ea308c54fa4a6570"
	},
	{
		"id": "5d9f9368d91b",
		"ts": "2026-07-15T21:56:29.695Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 121160.02,
		"hash": "5d9f9368d91b3ceb6e7246b76513938ebf6a4ec1f1034dc7557302a10ca2cfbb"
	},
	{
		"id": "70a9fbfaf469",
		"ts": "2026-07-15T21:56:30.102Z",
		"symbol": "doji",
		"token": "0x693B8De886712f0039EEf578bbE5aC7ea3B598CE",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 121759.24,
		"hash": "70a9fbfaf4690e88486af7cccd04af7aedcbef3bb01ba8adba8130775de7de83"
	},
	{
		"id": "f14d1ecd823a",
		"ts": "2026-07-15T21:56:30.290Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 520383.46,
		"hash": "f14d1ecd823a6e33ef233daafdd348a4265ae40d00f6c38d287da99e141f03b8"
	},
	{
		"id": "f8b1575c4864",
		"ts": "2026-07-15T21:56:30.492Z",
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
		"liquidityUsd": 1453490.97,
		"hash": "f8b1575c4864f20d2d8088cd359c43a4878fb85f3223ee96718a22b6d3cbfc7c"
	},
	{
		"id": "78c0bb364194",
		"ts": "2026-07-15T21:56:30.848Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3566098.73,
		"hash": "78c0bb364194a5bdee75e8b85993da2d9aae37832a12cd3b8b7770902834c4af"
	},
	{
		"id": "017591ba8c49",
		"ts": "2026-07-15T21:56:31.277Z",
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
		"liquidityUsd": 1352509.3,
		"hash": "017591ba8c49a06aa6a80e910c38fa8655672a464e1c1bf66f995fcb42172df4"
	},
	{
		"id": "d4915d1f77f4",
		"ts": "2026-07-15T20:05:26.754Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105853594.48,
		"hash": "d4915d1f77f4cd4b5c3d8f4a400f2c5629841541dcbbeaefa251d2552b95291b"
	},
	{
		"id": "5633cf55b58d",
		"ts": "2026-07-15T20:05:27.102Z",
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
		"liquidityUsd": 15282857.2,
		"hash": "5633cf55b58d5681d5dadf1680f510d74bb6479696728395e3c68f30614c6039"
	},
	{
		"id": "a2b95e4bb48a",
		"ts": "2026-07-15T20:05:27.295Z",
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
		"liquidityUsd": 1180128.13,
		"hash": "a2b95e4bb48afbace0d6ca981ab7789b4f45236848d078742425b0b14af9e10d"
	},
	{
		"id": "940299214ee8",
		"ts": "2026-07-15T20:05:27.496Z",
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
		"liquidityUsd": 30281371.64,
		"hash": "940299214ee8a1496d4c5fb3f03d37422d5ec20f2787280f732f2168c9f4caa7"
	},
	{
		"id": "147086f44970",
		"ts": "2026-07-15T20:05:27.688Z",
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
		"liquidityUsd": 4827437.97,
		"hash": "147086f44970c06e7c377f0d04c61ff4cf3b5efc18e110cf3598a8217c8304ea"
	},
	{
		"id": "bb2534dbc54e",
		"ts": "2026-07-15T20:05:27.878Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1023721.48,
		"hash": "bb2534dbc54ecc2f5d2b43c3f9b92690532c0a81b157343a27f230bb01a95e1c"
	},
	{
		"id": "a352f9a8f0ec",
		"ts": "2026-07-15T20:05:28.070Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30281371.64,
		"hash": "a352f9a8f0ec443b332026bed896c38dc2aa47b92c97beb08d5a69d366a3f257"
	},
	{
		"id": "0db0a2a6ec71",
		"ts": "2026-07-15T20:05:28.266Z",
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
		"liquidityUsd": 2882577.08,
		"hash": "0db0a2a6ec71c1a992cb879b54d157a44ef94d620cfb0d17c70c9292f0587cec"
	},
	{
		"id": "1169db3cc594",
		"ts": "2026-07-15T20:05:28.454Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 930552.78,
		"hash": "1169db3cc594500cc42500d3028fa1e46c67690f81bfae4925defd32c637330c"
	},
	{
		"id": "bcf8668b743e",
		"ts": "2026-07-15T20:05:28.643Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 61633.06,
		"hash": "bcf8668b743e3578e00a4e7e1f0779e867b25d1087952b123b6f823647d88a35"
	},
	{
		"id": "1e294307e8fe",
		"ts": "2026-07-15T20:05:28.829Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 781806.97,
		"hash": "1e294307e8fe814982957c4c85b83b292d2dd0aaaa7dccb2b56c3543b1e3f498"
	},
	{
		"id": "0ce131600553",
		"ts": "2026-07-15T20:05:29.015Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 495015.88,
		"hash": "0ce13160055306a5c797eddc33003510d9b6067428b9ca43bb3673c8a52c6ff3"
	},
	{
		"id": "745f22206904",
		"ts": "2026-07-15T20:05:29.188Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 150886.6,
		"hash": "745f2220690458f3bc7cca175720030572cd6d64a83d5c655b673925d9346a7d"
	},
	{
		"id": "1000753c64a6",
		"ts": "2026-07-15T20:05:29.387Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 121160.02,
		"hash": "1000753c64a6d839738a42a082a63470c876df4342369435b820e515a06f1abe"
	},
	{
		"id": "443b3f957f0e",
		"ts": "2026-07-15T20:05:29.586Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 521130.38,
		"hash": "443b3f957f0e705024d16c9a6512393189abcb1d284adfb6ddc09040b1e8d99b"
	},
	{
		"id": "9902d331e1cc",
		"ts": "2026-07-15T20:05:29.773Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1460151.02,
		"hash": "9902d331e1cce3759b4013381a00d4ae5b4ac85ac5e1c08083598c08fe256f88"
	},
	{
		"id": "d04ba9e3319e",
		"ts": "2026-07-15T20:05:30.104Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3600176.87,
		"hash": "d04ba9e3319ecbfb72741ccee8cb28fce6a91e5f60e3b81f558af20d55906cb9"
	},
	{
		"id": "be264344f1ff",
		"ts": "2026-07-15T20:05:30.332Z",
		"symbol": "doji",
		"token": "0x693B8De886712f0039EEf578bbE5aC7ea3B598CE",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 135785.98,
		"hash": "be264344f1ff9fb71c29acae126590c201cd5ff19f9b37d2396ec8e631b2ce3b"
	},
	{
		"id": "bdf6f3d2e4a7",
		"ts": "2026-07-15T18:03:08.588Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105934030.93,
		"hash": "bdf6f3d2e4a74c81b90d0346438680232de5d6144fdfb2b9dfb05f2fd29a4a6c"
	},
	{
		"id": "86bb1a9288fb",
		"ts": "2026-07-15T18:03:09.037Z",
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
		"liquidityUsd": 14379772.67,
		"hash": "86bb1a9288fb2ecb7497ff245d6bd0494d5de84c21f4702076c3f1e4156dd69f"
	},
	{
		"id": "37a1e28f34f3",
		"ts": "2026-07-15T18:03:09.317Z",
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
		"liquidityUsd": 1183617.17,
		"hash": "37a1e28f34f3e591aaaa1aa8948658863171919c3c609687bfd9ebde6b57f4b2"
	},
	{
		"id": "0a37eebf4768",
		"ts": "2026-07-15T18:03:09.564Z",
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
		"liquidityUsd": 29619826.85,
		"hash": "0a37eebf4768a08e153013a71c02a68ed6831ca6364005249f15b12a1beed182"
	},
	{
		"id": "a602005db151",
		"ts": "2026-07-15T18:03:09.803Z",
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
		"liquidityUsd": 4840005.29,
		"hash": "a602005db15144ae16643a843bb95936bb7d505239f02fca057afaed5d3d4cd4"
	},
	{
		"id": "7f0ea5864646",
		"ts": "2026-07-15T18:03:10.038Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1024369.03,
		"hash": "7f0ea5864646d3332a487a7daca71e35854e12ed5caea17a3c107e26a21f3fd5"
	},
	{
		"id": "9f900d6f6d7d",
		"ts": "2026-07-15T18:03:10.274Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29619826.85,
		"hash": "9f900d6f6d7da5bdfc433a79e6118b0f469da80271a7d56e33f587cf35e3cd0e"
	},
	{
		"id": "b6fc741feefa",
		"ts": "2026-07-15T18:03:10.519Z",
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
		"liquidityUsd": 2890056.99,
		"hash": "b6fc741feefa0952b0e75e06f303bd5d87e31f198a9af9f92edb332f9d2bd28d"
	},
	{
		"id": "7d7c52b1f9b8",
		"ts": "2026-07-15T18:03:10.766Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1195915.7,
		"hash": "7d7c52b1f9b8a5a50b07da6d94fa47b3a6c68fc2395050527c06cd32d4307aeb"
	},
	{
		"id": "2530fdb93880",
		"ts": "2026-07-15T18:03:11.002Z",
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
		"liquidityUsd": 804642.68,
		"hash": "2530fdb93880f05c34e11512873e95d0f29401088a77b87d87504e05127a1dd8"
	},
	{
		"id": "7b6888c2fcb3",
		"ts": "2026-07-15T18:03:11.222Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 81866.4,
		"hash": "7b6888c2fcb3aceb0289849c7eacfaef444744a4e5fafaaa2584401191326b71"
	},
	{
		"id": "824f14b252b4",
		"ts": "2026-07-15T18:03:11.442Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 121160.02,
		"hash": "824f14b252b4a3e26253fce93616378b1376ced923f708a9ac5a6efda0cc407b"
	},
	{
		"id": "c7eabdecd80d",
		"ts": "2026-07-15T18:03:11.664Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 481158.98,
		"hash": "c7eabdecd80df56244bf208f850062f19f472391a912974d87e22de8d8e2fa5a"
	},
	{
		"id": "bd79d571ffa3",
		"ts": "2026-07-15T18:03:11.885Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 154921.66,
		"hash": "bd79d571ffa363f2e858ee90ca2aeb7a735e65276f913fa0db90cff09ace5fc4"
	},
	{
		"id": "c790b036b261",
		"ts": "2026-07-15T18:03:12.104Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 521353.55,
		"hash": "c790b036b261b051bb136a16a077e48fe3271fbf1c46b9f06110deea673034cb"
	},
	{
		"id": "b384fa17d953",
		"ts": "2026-07-15T18:03:12.322Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3625949.54,
		"hash": "b384fa17d95376e4a124e52b562502984d351f26d77b75da5f35cb0519cf0212"
	},
	{
		"id": "72121c41b99a",
		"ts": "2026-07-15T18:03:12.540Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1443151.01,
		"hash": "72121c41b99a139724db095255efef512607320fab31f133e85a2f1a9a788b11"
	}
]
