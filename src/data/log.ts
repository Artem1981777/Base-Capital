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
	"updatedAt": "2026-10-25T18:04:30.117Z",
	"tokensScored": 21404,
	"verdictsIssued": 21404,
	"safe": 18251,
	"risky": 1506,
	"likelyRug": 1647,
	"ticks": 1207
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "e0008b9bb42a",
		"ts": "2026-10-25T18:04:25.320Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 159255507.31,
		"hash": "e0008b9bb42a2f338633342c37f9a8667c99fae4ad50226341a61c9d8a6f8e0e"
	},
	{
		"id": "cff617fbb4a2",
		"ts": "2026-10-25T18:04:25.799Z",
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
		"liquidityUsd": 17591285.16,
		"hash": "cff617fbb4a2d3b66446e2184cd14f120b3c52cb09c42c9824aa87417c4b7634"
	},
	{
		"id": "283907a0e87c",
		"ts": "2026-10-25T18:04:26.299Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 258727.99,
		"hash": "283907a0e87c20499f7e99f2fd1e66511991ed4456dd70bbbda9c1d845f49608"
	},
	{
		"id": "8b4cb0f58ffe",
		"ts": "2026-10-25T18:04:26.557Z",
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
		"liquidityUsd": 7586627.52,
		"hash": "8b4cb0f58ffe1257a22b0bb2606863ded64e5d3fc3fe77de80e494f7870b4fb3"
	},
	{
		"id": "9d3af16b5f3a",
		"ts": "2026-10-25T18:04:26.809Z",
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
		"liquidityUsd": 2089223.75,
		"hash": "9d3af16b5f3a5801f9ea25b7c4cddddcbfe2a8c93bfe53d45cd18b9cdf949885"
	},
	{
		"id": "1d8d6be6a339",
		"ts": "2026-10-25T18:04:27.061Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1130890.98,
		"hash": "1d8d6be6a339aaea56742bd6dbea745c8b44b8388ea0b397bd9895288bb61928"
	},
	{
		"id": "7de1caf589f9",
		"ts": "2026-10-25T18:04:27.313Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 7591047.06,
		"hash": "7de1caf589f9267d8530f58b337e8bf597b2d0c7d0a345bf26bce72702c6eb19"
	},
	{
		"id": "8a303d28ff24",
		"ts": "2026-10-25T18:04:27.563Z",
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
		"liquidityUsd": 2138784.68,
		"hash": "8a303d28ff24d7e10748787f4eab283f34047e5e229fd6272480768ce45581ae"
	},
	{
		"id": "4e90c0f472e3",
		"ts": "2026-10-25T18:04:27.816Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1152800.1,
		"hash": "4e90c0f472e331bb7147fac160a7f440a9153b165738efe535faa8ea134f7a02"
	},
	{
		"id": "e08e8a214613",
		"ts": "2026-10-25T18:04:28.052Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1794301.88,
		"hash": "e08e8a21461391ecd506bc06ecd663b8bee3e9003af000ca5b31eca9fbe75023"
	},
	{
		"id": "a2707384cf63",
		"ts": "2026-10-25T18:04:28.274Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 2467286.2,
		"hash": "a2707384cf632ebeaa3d3cccf11b1fc642e428b5f457eb627b9f363f6446104c"
	},
	{
		"id": "927e6ab2a475",
		"ts": "2026-10-25T18:04:28.509Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 514267.66,
		"hash": "927e6ab2a47598ceb5d90a2eeda856840f5bf933508416b1654db58e4e2bfbf7"
	},
	{
		"id": "2c5a55132387",
		"ts": "2026-10-25T18:04:28.742Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 57483.29,
		"hash": "2c5a55132387c3f9f852eb9c50e3571219739b860f0c6cb81f72142d3d4783c3"
	},
	{
		"id": "570b0ddb66cc",
		"ts": "2026-10-25T18:04:28.974Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 9008794.42,
		"hash": "570b0ddb66cccfded759cb4a508b6cbbfc038f178fdc6c2acdc0fee14efdc437"
	},
	{
		"id": "5628153deaf2",
		"ts": "2026-10-25T18:04:29.199Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 665489.91,
		"hash": "5628153deaf298db1db471ff44084659d89071e5564e38cccb34789c0f146b4d"
	},
	{
		"id": "0351f6b56ff0",
		"ts": "2026-10-25T18:04:29.422Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2439530.04,
		"hash": "0351f6b56ff0f29992f9b29074a7ea70dd0d816be952dd69ca643254cfa78c42"
	},
	{
		"id": "0ba819c9cc3c",
		"ts": "2026-10-25T18:04:29.657Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 180451.75,
		"hash": "0ba819c9cc3cac623cdc54887c3054b67f0b2530929c2d60b9d9ce646d4717a9"
	},
	{
		"id": "e30dac5ac890",
		"ts": "2026-10-25T18:04:29.893Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3852417.83,
		"hash": "e30dac5ac8907c0c8c2420acf2485bdd0f1ba28b9bb28af15f69a80940fd7546"
	},
	{
		"id": "92afd3b47cda",
		"ts": "2026-10-25T18:04:30.116Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4060712.98,
		"hash": "92afd3b47cda3b99ca42c42d6c8c3003b1acc8a03b853a8a0ad619a7db157104"
	},
	{
		"id": "4306109a9d51",
		"ts": "2026-10-25T14:45:27.612Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 158057308.95,
		"hash": "4306109a9d517930bd0ddc8343d5503bd7222ca11cd39b6d89e49789fdc1c743"
	},
	{
		"id": "a2a1468ee928",
		"ts": "2026-10-25T14:45:28.102Z",
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
		"liquidityUsd": 17413469.12,
		"hash": "a2a1468ee928fd57d6269a250252ca04f3c818563c70de811c8342ceb6e54247"
	},
	{
		"id": "07d7e8c9c489",
		"ts": "2026-10-25T14:45:28.377Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 256212.67,
		"hash": "07d7e8c9c489ef0fdc78fbb3d2303615b1bb744af8bbeb0a898520cae6f56cec"
	},
	{
		"id": "82f93006b106",
		"ts": "2026-10-25T14:45:28.669Z",
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
		"liquidityUsd": 7611076.17,
		"hash": "82f93006b106233302ccb9d6ca8679453df3450d7e8e32a41fa36a8cb41a87cd"
	},
	{
		"id": "7ed00d59f949",
		"ts": "2026-10-25T14:45:28.949Z",
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
		"liquidityUsd": 2065459.34,
		"hash": "7ed00d59f949595e3ff2982db05b041a2ca1dd09f7e1de0f34b80e8d08182f55"
	},
	{
		"id": "7690de4bd10b",
		"ts": "2026-10-25T14:45:29.218Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1119130.4,
		"hash": "7690de4bd10b9ac6ca9fcecdc4445d88ddd84bf0b3fb1adfface7ecfbed0041c"
	},
	{
		"id": "07532d25f1a5",
		"ts": "2026-10-25T14:45:29.488Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 7611076.17,
		"hash": "07532d25f1a53c847c6f8ef4f347579f90725bd507121ad75396d8ef96cf7118"
	},
	{
		"id": "9e3a953c2a66",
		"ts": "2026-10-25T14:45:29.747Z",
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
		"liquidityUsd": 2115512.81,
		"hash": "9e3a953c2a66e7fea7c72231eec0242f07e14e353586b68bfda7f6b5e4846baf"
	},
	{
		"id": "3103c995ac88",
		"ts": "2026-10-25T14:45:30.016Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1145352.63,
		"hash": "3103c995ac88fac95cb46d23ce1f0f0ab8805560dbc6f22edc2c5f9ab84a56e4"
	},
	{
		"id": "e981f9f13af8",
		"ts": "2026-10-25T14:45:30.276Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1771352.17,
		"hash": "e981f9f13af83ae7714d26b2ebea013484abc5554305bce6fa60bc80538c060d"
	},
	{
		"id": "46e1a75765de",
		"ts": "2026-10-25T14:45:30.517Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 2467851.79,
		"hash": "46e1a75765de67eb47b54398c54c64c07536babd624478991ac340a487306ae6"
	},
	{
		"id": "a249db576422",
		"ts": "2026-10-25T14:45:30.756Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 509035.33,
		"hash": "a249db5764221c5d6db4f3db011e8dcfdaefe61749545a8801be7aa01ed8bd97"
	},
	{
		"id": "56b99b06238b",
		"ts": "2026-10-25T14:45:31.008Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 59917.73,
		"hash": "56b99b06238bdd546400d0219364bdc01f62162f4e764bd51751be0929ad665f"
	},
	{
		"id": "b95cf215b411",
		"ts": "2026-10-25T14:45:31.262Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 8910689.97,
		"hash": "b95cf215b411ba533cef20974b756088dd2815f07efba0f6fe6085a1b4e17947"
	},
	{
		"id": "fec3e3ea8765",
		"ts": "2026-10-25T14:45:31.506Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 724192.61,
		"hash": "fec3e3ea876589041d98369bcc61177f7171595e6b3d66e131c5e117ccf46a11"
	},
	{
		"id": "39101854b704",
		"ts": "2026-10-25T14:45:31.766Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 669054.1,
		"hash": "39101854b7042407a43bec19b497e44ccbdd14e546b95dc9f1056b517b1c5f70"
	},
	{
		"id": "91c27e3c6a30",
		"ts": "2026-10-25T14:45:32.009Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3821910.2,
		"hash": "91c27e3c6a3003bd0b17a84f36a44c5117c40fa41f69951889afb618cd197597"
	},
	{
		"id": "f3938c796abb",
		"ts": "2026-10-25T14:45:32.267Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 190464.18,
		"hash": "f3938c796abb132d21febb3ba23158a078f7fa9f0a16bf268b8df10129038cef"
	},
	{
		"id": "e23cccecd10d",
		"ts": "2026-10-25T14:45:32.513Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4479247.38,
		"hash": "e23cccecd10d0b664fa813ab714ffc84ef4a116c3a88cc24d0e0bc0d3f8f960a"
	},
	{
		"id": "9ed6dbba8e15",
		"ts": "2026-10-25T10:38:00.329Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 157589215.28,
		"hash": "9ed6dbba8e154cdb25c055eb8ae0cfaa7d88b7b47336137b25e26fb62206e2fe"
	},
	{
		"id": "d7ed7768eff7",
		"ts": "2026-10-25T10:38:00.625Z",
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
		"liquidityUsd": 17173302.35,
		"hash": "d7ed7768eff75f60dd31e4e12e5d9aa131e517a0918962488ea73f3c2a9e6c1f"
	},
	{
		"id": "eabbbaabb84a",
		"ts": "2026-10-25T10:38:01.040Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 255668.91,
		"hash": "eabbbaabb84a89b59a5f71a7b8c441b6053d12a5e6c40a725caa2138ad3fa327"
	},
	{
		"id": "50b10db6ce48",
		"ts": "2026-10-25T10:38:01.302Z",
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
		"liquidityUsd": 7570592.1,
		"hash": "50b10db6ce48349427f94827e09c5df8483506d7230478bd4bf03c9641ce66d2"
	},
	{
		"id": "c256b0ba648d",
		"ts": "2026-10-25T10:38:01.551Z",
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
		"liquidityUsd": 2057747.75,
		"hash": "c256b0ba648d67a44b5888ff587c6874e3ff76d3cc0ec76f2555c9aed7900146"
	},
	{
		"id": "07169c3be298",
		"ts": "2026-10-25T10:38:01.794Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1116274.5,
		"hash": "07169c3be29873876cd5157e06df95631af222a61a37c5cff0679e242292e680"
	},
	{
		"id": "91b94d2780df",
		"ts": "2026-10-25T10:38:02.046Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 7570592.1,
		"hash": "91b94d2780dff31fda9e34b214bc42968191925c1c8afca63ba3b51ca1578f47"
	},
	{
		"id": "0798e1af5973",
		"ts": "2026-10-25T10:38:02.301Z",
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
		"liquidityUsd": 2110772.56,
		"hash": "0798e1af597333fa5c5f6c5fc70c57e63b79ebeee9f1b4c957696fc188fa7e45"
	},
	{
		"id": "3e755b20e2bd",
		"ts": "2026-10-25T10:38:02.545Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1152332.88,
		"hash": "3e755b20e2bda41c759a923beacd291e4372c404dc79af12589ff1bda443aaf8"
	},
	{
		"id": "e43c771d26f9",
		"ts": "2026-10-25T10:38:02.812Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1775190.05,
		"hash": "e43c771d26f976e97bc6d1d9a5efe2cb2503ad2dc911aa6ca811f5b7ec614f3b"
	},
	{
		"id": "39d2e965e411",
		"ts": "2026-10-25T10:38:03.052Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 503984.94,
		"hash": "39d2e965e41176ac42aa34938d433219cc5001e0a182c1ae495dc8dd25a7abdb"
	},
	{
		"id": "b4ea965c1e2b",
		"ts": "2026-10-25T10:38:03.277Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 2466055.21,
		"hash": "b4ea965c1e2b640b55c65d8f53505b02f7b335f5700c360515b69c3efa212d21"
	},
	{
		"id": "fd8995c6d65a",
		"ts": "2026-10-25T10:38:03.513Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 58906.09,
		"hash": "fd8995c6d65a6652e313b0b1af70c1a0b066e2300137ba69a4386d706d619702"
	},
	{
		"id": "b1a40449b8c2",
		"ts": "2026-10-25T10:38:03.751Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 673147.22,
		"hash": "b1a40449b8c2aba1dd29c1572eebc35821c14e6608ec60fdccdfa668cefc5b7b"
	},
	{
		"id": "222b173db8c6",
		"ts": "2026-10-25T10:38:03.976Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 723887.87,
		"hash": "222b173db8c651224040ce4678d98593c49d8bdecfb919f29e6cebd250df17be"
	},
	{
		"id": "6c7ed68a6596",
		"ts": "2026-10-25T10:38:04.210Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 8850466.94,
		"hash": "6c7ed68a65969f80206572f46994310d854fbaa1d3de22f2632cfadf6fca8140"
	},
	{
		"id": "35d977c13470",
		"ts": "2026-10-25T10:38:04.438Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3850599.35,
		"hash": "35d977c134704eb036d85f902ef6eafb5594e5b4e1fc01e2d81f283764dcc67c"
	},
	{
		"id": "339fac5e3592",
		"ts": "2026-10-25T10:38:04.666Z",
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
		"liquidityUsd": 1310396.37,
		"hash": "339fac5e359206808230b6d31837078898c381594f0a26634eaef835da3b222c"
	},
	{
		"id": "769c1a68343e",
		"ts": "2026-10-25T10:38:04.902Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 195708.97,
		"hash": "769c1a68343e708d1e1e455e86923cfd264ef5b1839c46b1a28d01105dd87338"
	},
	{
		"id": "203ba0958e81",
		"ts": "2026-10-25T05:37:37.156Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 159354508.68,
		"hash": "203ba0958e81e8f3e0008b8c2600e2c90bfc50d21163da8143a90ed376ac9ab4"
	},
	{
		"id": "573bc303f606",
		"ts": "2026-10-25T05:37:37.657Z",
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
		"liquidityUsd": 17372689.92,
		"hash": "573bc303f6066dc5e9b472ce902684e19c3f40abce6163854ccc233aeab08973"
	},
	{
		"id": "6485a9bd0cd4",
		"ts": "2026-10-25T05:37:37.881Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 259596.72,
		"hash": "6485a9bd0cd4cbf8fdb6a6b721e55e28fb75cbee42380648001c1c8a2140aa8d"
	},
	{
		"id": "adb57b2bac47",
		"ts": "2026-10-25T05:37:38.116Z",
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
		"liquidityUsd": 7710137.1,
		"hash": "adb57b2bac47b5bceee7f9ab9a3817828f02de10932da7956e6e076ebcb3187c"
	},
	{
		"id": "c30a7b41f67c",
		"ts": "2026-10-25T05:37:38.325Z",
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
		"liquidityUsd": 2111250.16,
		"hash": "c30a7b41f67c8f3388ad1fe8f86b7cc935d900ade14263cb1346ea6f0ed4cfb4"
	},
	{
		"id": "ff956025593e",
		"ts": "2026-10-25T05:37:38.527Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1134713.38,
		"hash": "ff956025593e26cc9df1cccdd5ab3f352b0100a503cccc6bd755f9cccbeb3c99"
	},
	{
		"id": "0d126a307ab2",
		"ts": "2026-10-25T05:37:38.727Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 7710137.1,
		"hash": "0d126a307ab27512618f4cc3f40c78acfcdb653f51aa0ce6f356692ae861a5ee"
	},
	{
		"id": "9bc2bfac2074",
		"ts": "2026-10-25T05:37:38.936Z",
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
		"liquidityUsd": 2219715.84,
		"hash": "9bc2bfac207483aeb4a3368930c4e7abdfd8b19ab1beb0d7268c4aadb7ea46eb"
	},
	{
		"id": "629e03705dac",
		"ts": "2026-10-25T05:37:39.144Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1201680.38,
		"hash": "629e03705dac9a42af01b75bf3020362e9d053ae68c63865d1029603d9decd50"
	},
	{
		"id": "7abb3f151e24",
		"ts": "2026-10-25T05:37:39.344Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 493225.11,
		"hash": "7abb3f151e240eb1587dd09987b2df75a34ecb2c9f3011166d6307cadf96708c"
	},
	{
		"id": "2955bdb02de6",
		"ts": "2026-10-25T05:37:39.536Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 1789777.19,
		"hash": "2955bdb02de633f827c3c64d3ef90c2790f390163195a3615779d271847c89fa"
	},
	{
		"id": "2a0d45aea550",
		"ts": "2026-10-25T05:37:39.721Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 2465059.36,
		"hash": "2a0d45aea5501ae1d51087e5dc6e041286fffbdbfa8792a6f9105df11c1143ab"
	},
	{
		"id": "831e979c3c04",
		"ts": "2026-10-25T05:37:39.959Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 676683.26,
		"hash": "831e979c3c04d7c47f11f33f8b776a3acec60ebc7ddb1bbf7a434edeefb3974e"
	},
	{
		"id": "5b0b207825a0",
		"ts": "2026-10-25T05:37:40.158Z",
		"symbol": "SLC",
		"token": "0x6Bd83ABC39391Af1E24826E90237C4BD3468b5D2",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 168028.57,
		"hash": "5b0b207825a002e8511cf7e190e712e8ca927c8fe5dab41401aa0ad34c9c04d3"
	},
	{
		"id": "249c8167dfdd",
		"ts": "2026-10-25T05:37:40.349Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 738273.93,
		"hash": "249c8167dfdd87edc84579f95bf742187d4dfa1c50e5ad77c46595235b4ffffb"
	},
	{
		"id": "524abe5dd4a5",
		"ts": "2026-10-25T05:37:40.544Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 9021594.29,
		"hash": "524abe5dd4a5a1ed6aa628b32c6fc7060d52e7fa3a5d95a6c8eb1d9ebd171764"
	},
	{
		"id": "ca06a935808d",
		"ts": "2026-10-25T05:37:40.743Z",
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
		"liquidityUsd": 3091728.1,
		"hash": "ca06a935808d362b3ac34fbcd93f4a7a46a0fc81fea5e3db8ee769183fedff38"
	},
	{
		"id": "c97ca88d5f9b",
		"ts": "2026-10-25T05:37:40.943Z",
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
		"liquidityUsd": 1313755.32,
		"hash": "c97ca88d5f9b5249b897de133e12dd168a7fae78df2be42ffc2935394a115ef3"
	},
	{
		"id": "b672bf728804",
		"ts": "2026-10-25T05:37:41.133Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3910453.21,
		"hash": "b672bf72880443316111ae3df74f390df1047525b806a8dcac6e281a423d5a16"
	},
	{
		"id": "7f58c245cc8b",
		"ts": "2026-10-25T00:46:29.180Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 158914756.54,
		"hash": "7f58c245cc8beeeb8645c9b387206a5b04fda4723fbad1109d73714c81769904"
	},
	{
		"id": "af86229b6819",
		"ts": "2026-10-25T00:46:29.545Z",
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
		"liquidityUsd": 17355108.26,
		"hash": "af86229b68199a9c9802cbdcc62b45bc2919f7df6c8951d320d073dcb722a43b"
	},
	{
		"id": "8bf879ad2607",
		"ts": "2026-10-25T00:46:29.769Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 255609.39,
		"hash": "8bf879ad26079687004d88cc37791f119d19147d623b7d6333ea8f21083b3bb1"
	},
	{
		"id": "b565d4dd0909",
		"ts": "2026-10-25T00:46:29.976Z",
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
		"liquidityUsd": 8029695.18,
		"hash": "b565d4dd09093c00e9cb9b46635974affe085827eb3054a44cbdf0aec9544aee"
	},
	{
		"id": "bd554c095aa9",
		"ts": "2026-10-25T00:46:30.181Z",
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
		"liquidityUsd": 2142826.81,
		"hash": "bd554c095aa943833325618e921bdfb54c2be6a85baa15be1f098bd4975e6c58"
	},
	{
		"id": "54ff4740953a",
		"ts": "2026-10-25T00:46:30.407Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1126664.57,
		"hash": "54ff4740953a1496d1a84d68904ed5a3f5ba48fd932ba337cd720d576e30f378"
	},
	{
		"id": "dc7fdfb10845",
		"ts": "2026-10-25T00:46:30.618Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2466288.49,
		"hash": "dc7fdfb10845d71497821dc028693bcc61704d7348ee98f37c298590b4cb9c0a"
	},
	{
		"id": "9f0a69a0fcf7",
		"ts": "2026-10-25T00:46:30.824Z",
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
		"liquidityUsd": 2219589.85,
		"hash": "9f0a69a0fcf78123912913a0aa3eb66426d3a57060a5c6814d0e2e3814343da0"
	},
	{
		"id": "a808fcfbd61c",
		"ts": "2026-10-25T00:46:31.024Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1198764.23,
		"hash": "a808fcfbd61c26023076cd99301c4021a3c487759181f900ca208946b28a21dc"
	},
	{
		"id": "3928b3dc2660",
		"ts": "2026-10-25T00:46:31.221Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1800602.26,
		"hash": "3928b3dc2660ee0a26452c48e42192f47699e7c5a682b23103fb9e68d268ad24"
	},
	{
		"id": "133cc74f2573",
		"ts": "2026-10-25T00:46:31.412Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 476183.85,
		"hash": "133cc74f25731dc354a80283832c16a0e50aed5cd7adf5ab22fefd2a70e82663"
	},
	{
		"id": "552b53381e3d",
		"ts": "2026-10-25T00:46:31.595Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 2466288.49,
		"hash": "552b53381e3dbc92d2fe1c3f92b8deb87fbe599bd5b363248def1993018fc6c9"
	},
	{
		"id": "83d3f3dd286f",
		"ts": "2026-10-25T00:46:31.782Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 669863.35,
		"hash": "83d3f3dd286f7478676eaa9a835d0de54123fb4513f66536ad059a2de3c3bb8b"
	},
	{
		"id": "c9a60887213d",
		"ts": "2026-10-25T00:46:32.013Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 950261.97,
		"hash": "c9a60887213d101f08c5ba6cb22e09351115f11957803baf1625031b7ef773e3"
	},
	{
		"id": "b30392933702",
		"ts": "2026-10-25T00:46:32.203Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 9000294.57,
		"hash": "b30392933702e8bde159ee6b000e86cdadd52c30b46764e54258ee3216882a27"
	},
	{
		"id": "fcf46c44d4f2",
		"ts": "2026-10-25T00:46:32.391Z",
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
		"liquidityUsd": 3119068.71,
		"hash": "fcf46c44d4f2044aec23b74c7404534fbcada06a9223aef8cab1fb5239fa68b4"
	},
	{
		"id": "81b28045eb69",
		"ts": "2026-10-25T00:46:32.626Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 963263.03,
		"hash": "81b28045eb69bfcd2dccca8e763c7cd6988486302692feafd97a3aba590c4c63"
	},
	{
		"id": "b114940ebf94",
		"ts": "2026-10-25T00:46:32.812Z",
		"symbol": "UP",
		"token": "0x5b2193fDc451C1f847bE09CA9d13A4Bf60f8c86B",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 565519.44,
		"hash": "b114940ebf94ae8f09d8c9cf446b3d61b2341970f97772b44c6a3caedcbe0ba2"
	},
	{
		"id": "43927cb5d92a",
		"ts": "2026-10-25T00:46:32.994Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 514417.78,
		"hash": "43927cb5d92adfddc52a21057c08e9c4ca1397561cebded2923c5253c953d9d2"
	},
	{
		"id": "34d9eeea3cfb",
		"ts": "2026-10-24T22:51:10.484Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 158336492.05,
		"hash": "34d9eeea3cfbd1167659b0b239c856b4a4b19bfc67b095d4976a7a65a732d3c4"
	},
	{
		"id": "27dd29a44764",
		"ts": "2026-10-24T22:51:10.755Z",
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
		"liquidityUsd": 17235097.98,
		"hash": "27dd29a44764c073ec798d39b547ddc20422d61b914240926d02ccd216ac2087"
	},
	{
		"id": "dbf154360c6a",
		"ts": "2026-10-24T22:51:11.225Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 259000.44,
		"hash": "dbf154360c6aa35c3de5c1feabb314836f3d2b62332b14dfb35322c2f96c0aeb"
	},
	{
		"id": "eb7eaf16ef06",
		"ts": "2026-10-24T22:51:11.490Z",
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
		"liquidityUsd": 8012965.91,
		"hash": "eb7eaf16ef06dc4c3bb3ce8cdbea06969261b3487047d1c1dc1b907ab6ba665f"
	},
	{
		"id": "2aaf4e8aa191",
		"ts": "2026-10-24T22:51:11.766Z",
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
		"liquidityUsd": 2123100.89,
		"hash": "2aaf4e8aa191c3385b1a33787584c7e33e4731c16846e8c4445190abbdd98fca"
	},
	{
		"id": "1a2960c3f3a3",
		"ts": "2026-10-24T22:51:12.048Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1116306.05,
		"hash": "1a2960c3f3a3bf8c544c481cc99f07d69aa17f938a22a5ce3d5dc59419a300da"
	},
	{
		"id": "44e854b7fde8",
		"ts": "2026-10-24T22:51:12.326Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2470677.06,
		"hash": "44e854b7fde836ee3534330823efdc5a808dc7e091e1dcdf8aec77e806033dbf"
	},
	{
		"id": "0a650b8cd709",
		"ts": "2026-10-24T22:51:12.603Z",
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
		"liquidityUsd": 2202923.52,
		"hash": "0a650b8cd709d5c247848f28b533f2b05121db4627ff062f3983274e7415a2ad"
	},
	{
		"id": "9241fde2970e",
		"ts": "2026-10-24T22:51:12.876Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1199560.98,
		"hash": "9241fde2970e82c4bfd85b58b64b2fbe47972a6b9e335298c067b7c777fddc66"
	},
	{
		"id": "f462209e390e",
		"ts": "2026-10-24T22:51:13.157Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1795207.78,
		"hash": "f462209e390e266c1c0a7dc3bd718433ae51fb85f8a22413840bae5e4f62651d"
	},
	{
		"id": "93b76102c897",
		"ts": "2026-10-24T22:51:13.392Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 505439.93,
		"hash": "93b76102c8977bd9dac7520933e1e4ad30483a34b227c80c8120f3bca81d05e2"
	},
	{
		"id": "0003c90d6348",
		"ts": "2026-10-24T22:51:13.640Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 2470677.06,
		"hash": "0003c90d6348e599b7177ebeec9c42de30621402131fe24c93af0700fa144bb8"
	},
	{
		"id": "513aa8a2eb9e",
		"ts": "2026-10-24T22:51:13.876Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 956690.72,
		"hash": "513aa8a2eb9efafe2b5be5a012ab54d4787e0aa0dd1eef1a6294319874913344"
	},
	{
		"id": "278525824108",
		"ts": "2026-10-24T22:51:14.124Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 670152.72,
		"hash": "2785258241082801cadab76da1591c6b8f6168f53a6cb5e9e83ca70aa29ae899"
	},
	{
		"id": "6be9fa4efaee",
		"ts": "2026-10-24T22:51:14.366Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 8897001.25,
		"hash": "6be9fa4efaee07446a42dbc1a49c33536ee47cf5456aa9a38ba1a6b80aab0505"
	},
	{
		"id": "57abb612a5b0",
		"ts": "2026-10-24T22:51:14.607Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 955997.2,
		"hash": "57abb612a5b003ff6f49faa8663784b2668a12c979f23c0f4db6f735f03a533c"
	},
	{
		"id": "c2e5f51964f3",
		"ts": "2026-10-24T22:51:14.845Z",
		"symbol": "UP",
		"token": "0x5b2193fDc451C1f847bE09CA9d13A4Bf60f8c86B",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 616396.89,
		"hash": "c2e5f51964f394581d64cd8e7d051c0d1babbd2bd6a6e11ed7bf4469f141f0d9"
	},
	{
		"id": "2ffea4c09956",
		"ts": "2026-10-24T22:51:15.089Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 511890.54,
		"hash": "2ffea4c09956175cf60d626b670633c3590a0927fa7244a1ba5198659d6bdcc5"
	},
	{
		"id": "e5279111cb8e",
		"ts": "2026-10-24T22:51:15.324Z",
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
		"liquidityUsd": 3082869.44,
		"hash": "e5279111cb8eefd69942777a48a2083f16c203a0bf816ab636530f13f96afb40"
	},
	{
		"id": "60767f4a28a1",
		"ts": "2026-10-24T20:08:30.710Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 155357768.02,
		"hash": "60767f4a28a1ef8f7549386c041769e63ad2aedf5f639a1fd4f25b6f2eaf2b9a"
	},
	{
		"id": "b2e449777ec4",
		"ts": "2026-10-24T20:08:30.942Z",
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
		"liquidityUsd": 17293130.67,
		"hash": "b2e449777ec43844e8d67da95fe651f70cd1c6ddd3a6c3bd4676922619862304"
	},
	{
		"id": "68253858e2cb",
		"ts": "2026-10-24T20:08:31.176Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 259378.97,
		"hash": "68253858e2cbf69fdc585edfcd115d6ed0275246e01c5ad8448571d8f30d41d0"
	},
	{
		"id": "f4c4c5436e80",
		"ts": "2026-10-24T20:08:31.379Z",
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
		"liquidityUsd": 8759039.02,
		"hash": "f4c4c5436e80ff517dfc927e2fbee92635afef60a2cebdeb09c65aebbcfd6b0d"
	},
	{
		"id": "07542722a34f",
		"ts": "2026-10-24T20:08:31.593Z",
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
		"liquidityUsd": 2107017.2,
		"hash": "07542722a34fb39720407eaaa617f1209f25a768bf24a6a3690662196c21b947"
	},
	{
		"id": "b4b611e2e5b2",
		"ts": "2026-10-24T20:08:31.811Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1109612.88,
		"hash": "b4b611e2e5b2f7558a2a6eb4e7118730795dc7cf771c1ea1652c23fd3513b631"
	},
	{
		"id": "81c8e9875006",
		"ts": "2026-10-24T20:08:32.065Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2469284.94,
		"hash": "81c8e987500682cce94fbbd6128d51779d032c0ad16e83d4b4818636d5f7486e"
	},
	{
		"id": "fd4e4d28a254",
		"ts": "2026-10-24T20:08:32.280Z",
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
		"liquidityUsd": 2205707.94,
		"hash": "fd4e4d28a2542ce77dcfb5fe3621b2991b00e6ea4d8f8c9ed18f58921fcd64bd"
	},
	{
		"id": "9ce0bcbd45b7",
		"ts": "2026-10-24T20:08:32.492Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1204783.37,
		"hash": "9ce0bcbd45b75830ad1d999bff52a0e4a3e3ca39da5fbc8ab4b21f370846a6ae"
	},
	{
		"id": "46cf12812254",
		"ts": "2026-10-24T20:08:32.745Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1797138.89,
		"hash": "46cf12812254867ca9c83a603a5398e7992730a3366518404033569bba503ff4"
	},
	{
		"id": "660bd3deaef9",
		"ts": "2026-10-24T20:08:32.949Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 510811.84,
		"hash": "660bd3deaef9ac425616bf47be9037e24b1708c94e223d369a84fd7eeb8d40dd"
	},
	{
		"id": "17c46171b6e8",
		"ts": "2026-10-24T20:08:33.172Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 2469284.94,
		"hash": "17c46171b6e8e9f329f1ef2d39034cdd459ddb2b3ca7869277aef907c08135c9"
	},
	{
		"id": "4110a0ac0a8a",
		"ts": "2026-10-24T20:08:33.395Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 4084531.43,
		"hash": "4110a0ac0a8a5b394a389a4ed8a5e2ea33d2be27897f1e1349cfbed53c9a9ed9"
	},
	{
		"id": "0ac325a0d6de",
		"ts": "2026-10-24T20:08:33.591Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 12167506.62,
		"hash": "0ac325a0d6de947f7f96ff4c35f612f45990f88ac51281de8a1328985409938e"
	},
	{
		"id": "6d2c5624036b",
		"ts": "2026-10-24T20:08:33.853Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 948900.01,
		"hash": "6d2c5624036bc5b3faa9eed7902324e6bf8de0b09265618bb39199962a22b6ae"
	},
	{
		"id": "29919c00a999",
		"ts": "2026-10-24T20:08:34.043Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 663120.28,
		"hash": "29919c00a999d9753f14d229ac807a5dc031472bed2f94e212a1b461ef80bfd9"
	},
	{
		"id": "24d0a208d1c0",
		"ts": "2026-10-24T20:08:34.234Z",
		"symbol": "UP",
		"token": "0x5b2193fDc451C1f847bE09CA9d13A4Bf60f8c86B",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 586346.58,
		"hash": "24d0a208d1c062955bcdc3a552b3ceb5683c5271723e8a8516c24559c315a6c1"
	},
	{
		"id": "a493d8d54015",
		"ts": "2026-10-24T20:08:34.463Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 953001.13,
		"hash": "a493d8d540158bd103dcaf608c91937c6119adc18fe78fec96f0362fc98e74e2"
	},
	{
		"id": "ed34ac397b73",
		"ts": "2026-10-24T20:08:34.672Z",
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
		"liquidityUsd": 3109938.03,
		"hash": "ed34ac397b73ec260deca689818c959a44c3f531b51d8b90b587080816e6273b"
	},
	{
		"id": "76e83a66ae05",
		"ts": "2026-10-24T17:47:46.308Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 152917530.52,
		"hash": "76e83a66ae05642fadf579faa43b09a80107bb35ce8d401b55d38d334ca22a00"
	},
	{
		"id": "ca2e8e080284",
		"ts": "2026-10-24T17:47:46.538Z",
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
		"liquidityUsd": 17085943.97,
		"hash": "ca2e8e080284185f8f92bc4ead4197d40646b8cd51de5c82c6d012e4990f75c1"
	},
	{
		"id": "db80f45fbcb3",
		"ts": "2026-10-24T17:47:46.772Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 256703.42,
		"hash": "db80f45fbcb3f068a2a5dc54763fa4f3a2ef39469dd029ae332c962e45cf52e6"
	},
	{
		"id": "0930243fc474",
		"ts": "2026-10-24T17:47:46.967Z",
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
		"liquidityUsd": 8725466.19,
		"hash": "0930243fc47482681ae610bb69df415f23afe4a1181b1fa3d952dd07b983addd"
	},
	{
		"id": "34d5aa3a8284",
		"ts": "2026-10-24T17:47:47.178Z",
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
		"liquidityUsd": 2072997.85,
		"hash": "34d5aa3a8284876e387fffc62a22816f573a589a52160775bf5a886d231b56d9"
	},
	{
		"id": "23fb8e9a3873",
		"ts": "2026-10-24T17:47:47.393Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1092746.15,
		"hash": "23fb8e9a38738b62f364808ed7b26bddeaf7604219babf8ec4790265ca003327"
	},
	{
		"id": "1556bd5f0799",
		"ts": "2026-10-24T17:47:47.652Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2468407.4,
		"hash": "1556bd5f079933d2810fba444c95855cf9e32c2211892698a64cdd3ebad66be2"
	},
	{
		"id": "32522c2570c5",
		"ts": "2026-10-24T17:47:47.859Z",
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
		"liquidityUsd": 2312821.34,
		"hash": "32522c2570c534622749fd28ca14f67b4b4b296c8814ad59292a47afd56f4178"
	},
	{
		"id": "6ed695847807",
		"ts": "2026-10-24T17:47:48.068Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1158948.05,
		"hash": "6ed695847807a43e7b6e6070bbd54bed1d4a3be6eb7ec5370218a5747466bd15"
	},
	{
		"id": "4b43e197ec59",
		"ts": "2026-10-24T17:47:48.349Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1782478.93,
		"hash": "4b43e197ec59bc7e04ad879f28d9bdb0be9e3c7326fc33e77e8c9c3a719cc0f7"
	},
	{
		"id": "2654b6d7418c",
		"ts": "2026-10-24T17:47:48.544Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 2468423.8,
		"hash": "2654b6d7418c732d0dee7c76e5bc68e4b86f7029c2a2657c9b306092d2175209"
	},
	{
		"id": "a6eb95d32e62",
		"ts": "2026-10-24T17:47:48.750Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 496153.01,
		"hash": "a6eb95d32e62a673b2f37a2295391bd380dc63c8fa217d7fe267e122959f9d5f"
	},
	{
		"id": "cec0cd28c2c3",
		"ts": "2026-10-24T17:47:48.947Z",
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
		"liquidityUsd": 1021556.54,
		"hash": "cec0cd28c2c34305dad71c4a9d3bd37c6b556fa1223556a585f04b8c8b4fa774"
	},
	{
		"id": "1adf92bec205",
		"ts": "2026-10-24T17:47:49.139Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 11979278.25,
		"hash": "1adf92bec205b7232f89a4236d6af55af5c44195a4912ce0917a258383795936"
	},
	{
		"id": "b855e6fea14f",
		"ts": "2026-10-24T17:47:49.340Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 950134.13,
		"hash": "b855e6fea14f5a710ee748db4906dc1bb7c141de4ac3137498f8363606287ac5"
	},
	{
		"id": "583a6844e6f0",
		"ts": "2026-10-24T17:47:49.547Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 4006834.95,
		"hash": "583a6844e6f000471995f77430127bc430210e22eb16dd5d12858e6014a191c8"
	},
	{
		"id": "98f1bedfe7b4",
		"ts": "2026-10-24T17:47:49.736Z",
		"symbol": "SLC",
		"token": "0x6Bd83ABC39391Af1E24826E90237C4BD3468b5D2",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 156510.07,
		"hash": "98f1bedfe7b44bde249b9ca7123d2440ec8f8e902d7e2b728c852c49750da076"
	},
	{
		"id": "07d353203476",
		"ts": "2026-10-24T17:47:49.933Z",
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
		"liquidityUsd": 3051273.13,
		"hash": "07d353203476849eca6ce30f4efb1323835cb77c846bcbd88e39074e24fc6280"
	},
	{
		"id": "111c95371820",
		"ts": "2026-10-24T17:47:50.149Z",
		"symbol": "UP",
		"token": "0x5b2193fDc451C1f847bE09CA9d13A4Bf60f8c86B",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 584217.64,
		"hash": "111c953718201bb0097c8742c7240d0a136475c41953f0221cfcfb1c7169752a"
	},
	{
		"id": "af5b83b2ceb5",
		"ts": "2026-10-24T14:13:36.522Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 155414117.11,
		"hash": "af5b83b2ceb54a5a06c76fc065e5c52f93c768aadd3c377bb64523df65f1cb07"
	},
	{
		"id": "1cbc4d957bcd",
		"ts": "2026-10-24T14:13:37.015Z",
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
		"liquidityUsd": 17005764.9,
		"hash": "1cbc4d957bcd5bc19a8c160d185ba776ea347650d5c3d78d5c37e6a8259dcfd0"
	},
	{
		"id": "6732b7698a70",
		"ts": "2026-10-24T14:13:37.497Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 262990.88,
		"hash": "6732b7698a702fc15298e9084fa46848a1d00e434a6389dfe3e44deec24f4d5c"
	},
	{
		"id": "b8e069709e66",
		"ts": "2026-10-24T14:13:37.757Z",
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
		"liquidityUsd": 8870256.66,
		"hash": "b8e069709e66dca1df28e5c7424e81b3edbb6a6834f2fade61c7e4e7960c75af"
	},
	{
		"id": "7b115e760f13",
		"ts": "2026-10-24T14:13:38.020Z",
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
		"liquidityUsd": 2152718,
		"hash": "7b115e760f1332cb6f9a5db1c557422870427d8e1f1c46500d87f9848e0e28c6"
	},
	{
		"id": "4ace5a0278e4",
		"ts": "2026-10-24T14:13:38.282Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1130675.43,
		"hash": "4ace5a0278e4f57d2d92b9f9e20a5f410d01f586f64e74a68329be4baee62b7e"
	},
	{
		"id": "88015c0f1061",
		"ts": "2026-10-24T14:13:38.533Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2468981.88,
		"hash": "88015c0f10610a06ddc8389f9f508abe5164d07a7adc77c63736a01ed12a3525"
	},
	{
		"id": "734578d18ac2",
		"ts": "2026-10-24T14:13:38.791Z",
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
		"liquidityUsd": 2377649.47,
		"hash": "734578d18ac295d86961c1881223f597a56301760a7ccc16dd705bd3cc1b68e4"
	},
	{
		"id": "286431662e63",
		"ts": "2026-10-24T14:13:39.044Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1773831.65,
		"hash": "286431662e6343c7293dd1bddec7c6eb087c70880e30a7c483524897e5bebb97"
	},
	{
		"id": "7293e692c0d7",
		"ts": "2026-10-24T14:13:39.302Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2468982.18,
		"hash": "7293e692c0d7c4baf9091afdcdb094d7a1917660ef0179dcc0a93da6b504a835"
	},
	{
		"id": "3c6d5b1d3ec7",
		"ts": "2026-10-24T14:13:39.542Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1200953.29,
		"hash": "3c6d5b1d3ec786488e85584daf4a499e07896b83c6710a99d6876b8a87403e92"
	},
	{
		"id": "427907c44637",
		"ts": "2026-10-24T14:13:39.783Z",
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
		"liquidityUsd": 1038623.9,
		"hash": "427907c44637abfd808b34ab0e1aba3e46e341afa5e7a36a3962bc99310db867"
	},
	{
		"id": "c4964257a55e",
		"ts": "2026-10-24T14:13:40.020Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 490377.13,
		"hash": "c4964257a55e6ed14a1c25fc96602944012275192260170d555383a3c75b3ddd"
	},
	{
		"id": "79418e17f906",
		"ts": "2026-10-24T14:13:40.266Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 4172592.29,
		"hash": "79418e17f906960c0a0322931a37a5e3b390ea8a17c9afdce534a9220bf30ba9"
	},
	{
		"id": "ad072816c539",
		"ts": "2026-10-24T14:13:40.500Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 949649.04,
		"hash": "ad072816c539bc349c4286a634abb04d55c16431b31da6627eb432aec5ae2a1a"
	},
	{
		"id": "af9cbf98f12f",
		"ts": "2026-10-24T14:13:40.737Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 12201065.86,
		"hash": "af9cbf98f12fb19575dea68fc2090ba71cb6c7ade5daa30af21fde6dbdb9287a"
	},
	{
		"id": "efd84c8d7e70",
		"ts": "2026-10-24T14:13:40.974Z",
		"symbol": "SLC",
		"token": "0x6Bd83ABC39391Af1E24826E90237C4BD3468b5D2",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 176581.42,
		"hash": "efd84c8d7e70ed114b0dfc9c5f3cbcbfc7a15c28a733edcf285036aefd7a23ef"
	},
	{
		"id": "2973ca769326",
		"ts": "2026-10-24T14:13:41.214Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 54780.73,
		"hash": "2973ca76932640fd93cf11aa8043258db445c06544c9086da11692faf4f5b87a"
	},
	{
		"id": "47be0314a9a3",
		"ts": "2026-10-24T14:13:41.449Z",
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
		"liquidityUsd": 3104985.69,
		"hash": "47be0314a9a3c147e4a83e3cdaac696836edd277658702a4829141a5346fb025"
	},
	{
		"id": "0d0a0001c396",
		"ts": "2026-10-24T10:12:48.591Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 155336182.63,
		"hash": "0d0a0001c396c935bd9d43e3ff90985aa2c2035493a3f0e236a84b898dafd285"
	},
	{
		"id": "cfdff97d7363",
		"ts": "2026-10-24T10:12:48.873Z",
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
		"liquidityUsd": 16987600.55,
		"hash": "cfdff97d73634fe3a8963bf9acfc33d80e9789ee91c39bb6432c86e42bd9d30c"
	},
	{
		"id": "08831341b8fb",
		"ts": "2026-10-24T10:12:49.139Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 262728.36,
		"hash": "08831341b8fb94fd4beee8d02d426f6ec3d94a919936e751fae073650913b9fb"
	},
	{
		"id": "244ca6e09ec4",
		"ts": "2026-10-24T10:12:49.379Z",
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
		"liquidityUsd": 8949386.26,
		"hash": "244ca6e09ec4aef9e0eb339824c747544ef28a7fccc083d59b4a1f19f1563f84"
	},
	{
		"id": "17725edf4ad4",
		"ts": "2026-10-24T10:12:49.660Z",
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
		"liquidityUsd": 3286961.31,
		"hash": "17725edf4ad4943c0dd6f39ba810875d81982cf8a5eeb0d854ce1f6ba9ac9589"
	},
	{
		"id": "e06d5ff8d082",
		"ts": "2026-10-24T10:12:49.929Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1131401.78,
		"hash": "e06d5ff8d08219f861d13f20a4a7fdefaef17ecf69f07b8bb264336b2a6e5fab"
	},
	{
		"id": "166563ac6fb1",
		"ts": "2026-10-24T10:12:50.174Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2468954.07,
		"hash": "166563ac6fb1ade67e15bbb17ed9520ef6fae311ad13137bba8ab222141c6e70"
	},
	{
		"id": "fc547371d635",
		"ts": "2026-10-24T10:12:50.467Z",
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
		"liquidityUsd": 2368974.8,
		"hash": "fc547371d635cec1d0c5e9da88b826839b57784ff5d7ceb3542cee0a381f61c4"
	},
	{
		"id": "4c2d7326f994",
		"ts": "2026-10-24T10:12:50.726Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2468887.27,
		"hash": "4c2d7326f9942ba6f61d38dc20b8c94e3aca0b641c474ae95dfd04024f0fe741"
	},
	{
		"id": "54f84d93310d",
		"ts": "2026-10-24T10:12:50.964Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1755527.58,
		"hash": "54f84d93310d39689bb298ff73c90a5c9a9c055b9f4e1c13a569f51792d0fadc"
	},
	{
		"id": "4973ab58e98a",
		"ts": "2026-10-24T10:12:51.194Z",
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
		"liquidityUsd": 1038070.84,
		"hash": "4973ab58e98ad98f879cf47934acff7456bd9bdc6e04ec822161346ab26b693f"
	},
	{
		"id": "0e0ab7266ef0",
		"ts": "2026-10-24T10:12:51.429Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1184119.77,
		"hash": "0e0ab7266ef014abb274716b7cb3bf12f2d50ff0c0279aeb8fd44420baed0727"
	},
	{
		"id": "489088f887a4",
		"ts": "2026-10-24T10:12:51.667Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 953785.29,
		"hash": "489088f887a46b192163d00868da99b0b6ddbc00ab6e07be9a4b08d502ab7908"
	},
	{
		"id": "e0e27cfb4ced",
		"ts": "2026-10-24T10:12:51.889Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 4250466.73,
		"hash": "e0e27cfb4cedd083beedf473b68d021b548f273560b9f731f2a9bab63a5eb8e4"
	},
	{
		"id": "b2798f0314b7",
		"ts": "2026-10-24T10:12:52.120Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 12272720.99,
		"hash": "b2798f0314b721f6cc31569ba57e3cc36582690d35270ce8daad1e3dd4c328fc"
	},
	{
		"id": "32fb557704bb",
		"ts": "2026-10-24T10:12:52.352Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 54391.34,
		"hash": "32fb557704bb743d0983d63683634db52af77cf58f9f3dae1c6f754c9eb6a0cc"
	},
	{
		"id": "bc75f1c62090",
		"ts": "2026-10-24T10:12:52.592Z",
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
		"liquidityUsd": 3102966.03,
		"hash": "bc75f1c62090dca7519f167de7e3fe71340b0788b647a7ab82a372770e744fc1"
	},
	{
		"id": "f7faa53d10aa",
		"ts": "2026-10-24T10:12:52.819Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3247569.21,
		"hash": "f7faa53d10aa582f35247ad6fa241528d52fe6efdaa9a298ce35a22254b0504a"
	},
	{
		"id": "0c44167cf0f6",
		"ts": "2026-10-24T10:12:53.052Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 512304.28,
		"hash": "0c44167cf0f6039f1742470b718f98fb6a998d76146b6e1324c4459d6b2c62ea"
	},
	{
		"id": "374c65d34308",
		"ts": "2026-10-24T05:20:47.988Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156350523.55,
		"hash": "374c65d3430897615c05b3af05f58b78e488eb9c6d2ea1d6a02415b02230c127"
	},
	{
		"id": "f92b428b8edb",
		"ts": "2026-10-24T05:20:48.246Z",
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
		"liquidityUsd": 16443819.63,
		"hash": "f92b428b8edb57bf2a8deeb4a5f180cc2f131aeaa347c9b744eb3778cf14ca57"
	},
	{
		"id": "11652f391676",
		"ts": "2026-10-24T05:20:48.457Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 263720.97,
		"hash": "11652f3916766ea8ec7eb90793e63268fb737ca957ee931cbedbe6f015bf00e5"
	},
	{
		"id": "cab797ca59b9",
		"ts": "2026-10-24T05:20:48.679Z",
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
		"liquidityUsd": 9785504.24,
		"hash": "cab797ca59b9f2682dcfe63dc2dc2b4964e066dbe81123ae7d65b2214cb1a866"
	},
	{
		"id": "c11b19b2d4ee",
		"ts": "2026-10-24T05:20:48.894Z",
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
		"liquidityUsd": 3339835.52,
		"hash": "c11b19b2d4ee55f167f8ed180ae53e6ff93324e923d32b2dc481a8a0f2a5e03d"
	},
	{
		"id": "d251c5ae37f6",
		"ts": "2026-10-24T05:20:49.119Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1141739.1,
		"hash": "d251c5ae37f63f90ccbe8c1ef0b113ffc593d392a15cfed8c700e0f57cebf077"
	},
	{
		"id": "83b1de24f48e",
		"ts": "2026-10-24T05:20:49.352Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2473330.59,
		"hash": "83b1de24f48ed36cd969b7ab8087f5f1a76b571c8e69f28ca149dbe0c43315c8"
	},
	{
		"id": "d4e59240a632",
		"ts": "2026-10-24T05:20:49.576Z",
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
		"liquidityUsd": 2401985.84,
		"hash": "d4e59240a6322f61d4f41742d4316297660353295e8b2e6981d7d42f26002298"
	},
	{
		"id": "09181b0559cd",
		"ts": "2026-10-24T05:20:49.813Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2473330.59,
		"hash": "09181b0559cd04c44d44ff9fd21ec41186bf37a7c0ae28ed2907c5cf044009d7"
	},
	{
		"id": "5f03d9fd95b4",
		"ts": "2026-10-24T05:20:50.052Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1753184.52,
		"hash": "5f03d9fd95b49ea59c5022cbbed01f2648dad7ced5dba6f80748c70f613604da"
	}
]
