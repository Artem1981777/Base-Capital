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
	"updatedAt": "2026-10-23T18:52:05.563Z",
	"tokensScored": 21157,
	"verdictsIssued": 21157,
	"safe": 18036,
	"risky": 1493,
	"likelyRug": 1628,
	"ticks": 1194
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "a96351e7ffdc",
		"ts": "2026-10-23T18:52:00.615Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 157320750.92,
		"hash": "a96351e7ffdcb1fcc2d27d39a06a9a71159b03e5da6056558d2e633be192de54"
	},
	{
		"id": "f7d311587f13",
		"ts": "2026-10-23T18:52:01.180Z",
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
		"liquidityUsd": 16575384.87,
		"hash": "f7d311587f13c6b86b198757af22d69488c6b70ad9dc01587ce0e70087720e08"
	},
	{
		"id": "fec6b4dba803",
		"ts": "2026-10-23T18:52:01.456Z",
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
		"liquidityUsd": 270615.48,
		"hash": "fec6b4dba8032ffc811a982b78b813a537b7299c450c0b017085284441980c6b"
	},
	{
		"id": "d53588805909",
		"ts": "2026-10-23T18:52:01.713Z",
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
		"liquidityUsd": 10608610.94,
		"hash": "d53588805909468c03958f95431c1159244f4f46e74b88e69167028ae53d85c5"
	},
	{
		"id": "7119481d36a9",
		"ts": "2026-10-23T18:52:01.998Z",
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
		"liquidityUsd": 3421617.41,
		"hash": "7119481d36a9bfe7f149741cea03979473a1bfb8a049a4d27f73e8e9755e3108"
	},
	{
		"id": "a19f31133534",
		"ts": "2026-10-23T18:52:02.270Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1170009.9,
		"hash": "a19f311335349d7c17f23162f2d92de5bc0bc3207b9cad6e269056550fcdddc7"
	},
	{
		"id": "34df4df76171",
		"ts": "2026-10-23T18:52:02.529Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 10608610.94,
		"hash": "34df4df761715ea06563c52269392703e04d35bed4c638aa7cd3341a8f0440a2"
	},
	{
		"id": "38226cb8de78",
		"ts": "2026-10-23T18:52:02.815Z",
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
		"liquidityUsd": 1711777.98,
		"hash": "38226cb8de7854228679f749028b0646aed01c9f321923520c77193458697d1b"
	},
	{
		"id": "41b6b6288675",
		"ts": "2026-10-23T18:52:03.073Z",
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
		"liquidityUsd": 2467681.56,
		"hash": "41b6b62886757e1aa0c4cf2a8edd525f6fd33fdc859886fb915445ea52f2f7f7"
	},
	{
		"id": "287dba0503a2",
		"ts": "2026-10-23T18:52:03.331Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4729464.7,
		"hash": "287dba0503a2e4e68a130d26287a3766315e2d1c4284f0205893c3d4495d0b8b"
	},
	{
		"id": "ddda40d5d1d5",
		"ts": "2026-10-23T18:52:03.579Z",
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
		"liquidityUsd": 1770406.68,
		"hash": "ddda40d5d1d5c3d44c536e8373957afd903f23505ec8f59a9de43a3cd8bcbdcc"
	},
	{
		"id": "fa56fd6122e6",
		"ts": "2026-10-23T18:52:03.808Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1263081.49,
		"hash": "fa56fd6122e622dbde9a827b8ba0f5ace76c0ba344073f1e70119209621262ab"
	},
	{
		"id": "a65c15d59bb7",
		"ts": "2026-10-23T18:52:04.055Z",
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
		"liquidityUsd": 3242029.92,
		"hash": "a65c15d59bb7713d882758e7e6b9bc8869eddb18f2520aa5466c2dfb0fe6a182"
	},
	{
		"id": "2570f4782ae6",
		"ts": "2026-10-23T18:52:04.283Z",
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
		"liquidityUsd": 12631744.07,
		"hash": "2570f4782ae6f4cea99c789b6ae93fd21971ef1bbfe8c08bf919e4775e534abc"
	},
	{
		"id": "5698b6d3812a",
		"ts": "2026-10-23T18:52:04.587Z",
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
		"liquidityUsd": 1052387.94,
		"hash": "5698b6d3812aa6b27c68426c55a3bd4b58bd980a521c896036eb6f2a3098d712"
	},
	{
		"id": "2cacdbf913b3",
		"ts": "2026-10-23T18:52:04.830Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1946627.34,
		"hash": "2cacdbf913b3002eace2e793766190e9ec7b55886e23b789e02286d61a04799a"
	},
	{
		"id": "8baa5dc89a23",
		"ts": "2026-10-23T18:52:05.067Z",
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
		"liquidityUsd": 973461.58,
		"hash": "8baa5dc89a236025ccd2f0cb9f017df2e3511269d65781450ce14fed38f22dc1"
	},
	{
		"id": "079c4ba909f9",
		"ts": "2026-10-23T18:52:05.310Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 56842.56,
		"hash": "079c4ba909f97e0c8f7612616fe874497f8507cdfd8ac2a094ec0e29c47f8899"
	},
	{
		"id": "9115d8cbaf7e",
		"ts": "2026-10-23T18:52:05.563Z",
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
		"liquidityUsd": 672453.37,
		"hash": "9115d8cbaf7e859da3bfe4a765af043c4fe9b02e7afa4c46862cf77e1f4f0f1e"
	},
	{
		"id": "7c4e65778f27",
		"ts": "2026-10-23T14:38:07.446Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156920114.89,
		"hash": "7c4e65778f2756857c18ccff2a129e5b0fdd2f0003015840ec09daf3e02d2621"
	},
	{
		"id": "327c731b79ac",
		"ts": "2026-10-23T14:38:07.914Z",
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
		"liquidityUsd": 16494873.75,
		"hash": "327c731b79ace70c2221434062b8604b4b06aa023ccd850e51170f6376061da3"
	},
	{
		"id": "faca2b0daa28",
		"ts": "2026-10-23T14:38:08.210Z",
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
		"liquidityUsd": 269034.79,
		"hash": "faca2b0daa28abf8f7715c9b98dd32b7a68e3942f153e33581b7e285db5806a8"
	},
	{
		"id": "a26b9fdf147c",
		"ts": "2026-10-23T14:38:08.474Z",
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
		"liquidityUsd": 10563727.71,
		"hash": "a26b9fdf147c4e758799a1124e8529915f83a560ff740a930476151689e6321a"
	},
	{
		"id": "64426c00f00e",
		"ts": "2026-10-23T14:38:08.742Z",
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
		"liquidityUsd": 3392098.3,
		"hash": "64426c00f00e3374873d85eb4088b85ebeba9e0d9b70892d07e4b0ede8cb0340"
	},
	{
		"id": "5c6c70dc172b",
		"ts": "2026-10-23T14:38:09.020Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1151357.37,
		"hash": "5c6c70dc172b3553eba95aecfddf8315ffef2c1fab63c607b33b596f7c89d523"
	},
	{
		"id": "7ee8fd0fa634",
		"ts": "2026-10-23T14:38:09.300Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 10563727.71,
		"hash": "7ee8fd0fa634d613a0136d25e11fca47829b70a1819492a3408a50919c104d62"
	},
	{
		"id": "51ad5cb13b46",
		"ts": "2026-10-23T14:38:09.599Z",
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
		"liquidityUsd": 1303121.55,
		"hash": "51ad5cb13b46c91dddbdfe9122d494f62337ad44e2aa8d04465f3a2f250c84f6"
	},
	{
		"id": "e8d3b4128455",
		"ts": "2026-10-23T14:38:09.892Z",
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
		"liquidityUsd": 2467281.27,
		"hash": "e8d3b41284555914d14ef3e142a08499e0cdac6a99d68f9dd680bc53352efa46"
	},
	{
		"id": "939e137d53a9",
		"ts": "2026-10-23T14:38:10.157Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2145302.47,
		"hash": "939e137d53a939e3c2a50e94db39a4f484e514d0a324e041bad169ad6c0a2946"
	},
	{
		"id": "225665dda7b9",
		"ts": "2026-10-23T14:38:10.405Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1264477.23,
		"hash": "225665dda7b90576281f71aaec4d4aeae04d0292cbaa31037275b53bac5212e2"
	},
	{
		"id": "17ae244396f9",
		"ts": "2026-10-23T14:38:10.707Z",
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
		"liquidityUsd": 1757367.24,
		"hash": "17ae244396f99ff417fa120e0d3a965e5b31c5715227d1220c97c3cfa94754a3"
	},
	{
		"id": "ff18aea4c81f",
		"ts": "2026-10-23T14:38:10.935Z",
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
		"liquidityUsd": 3265164.27,
		"hash": "ff18aea4c81f28465533bd1ec9efc9e06064f2d8b3fd13db42d7864260e4ca1c"
	},
	{
		"id": "373206e336c7",
		"ts": "2026-10-23T14:38:11.198Z",
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
		"liquidityUsd": 12908977.71,
		"hash": "373206e336c70fc7bfaa9ee6faff55a78fa3f6c12d4b1cead64105f64a4bac90"
	},
	{
		"id": "ddd31b8ee9d4",
		"ts": "2026-10-23T14:38:11.449Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1987871.52,
		"hash": "ddd31b8ee9d4c29d0721e0386d6a849f5f4db14221f351b27f382cfaf61ff120"
	},
	{
		"id": "5369a4870259",
		"ts": "2026-10-23T14:38:11.717Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55978.96,
		"hash": "5369a4870259ffd7bdc1c00c2d220257ceb8d89a7a5a890224849192ae7811dc"
	},
	{
		"id": "0d335cb3a37d",
		"ts": "2026-10-23T14:38:11.964Z",
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
		"liquidityUsd": 980980.72,
		"hash": "0d335cb3a37de380b7f608a890bd60d7eda425303c372226c916634519ececdc"
	},
	{
		"id": "fff60842288c",
		"ts": "2026-10-23T14:38:12.207Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 257191.12,
		"hash": "fff60842288c2d2f70b935da4c8d3dd098517cb3ae33de88bab6d4434ac340d4"
	},
	{
		"id": "c704bb86c7ce",
		"ts": "2026-10-23T14:38:12.442Z",
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
		"liquidityUsd": 653070.69,
		"hash": "c704bb86c7ce834871cd293608f77dc05ef1e3beebc8b466c20c590bdb4eedb3"
	},
	{
		"id": "110a94e07fcc",
		"ts": "2026-10-23T09:03:13.185Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156751623.76,
		"hash": "110a94e07fcccf8ff203b766da438b9a842d61f21d79feb0b4b1889a6a09c297"
	},
	{
		"id": "238dc2aafb05",
		"ts": "2026-10-23T09:03:13.963Z",
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
		"liquidityUsd": 16465660.55,
		"hash": "238dc2aafb0579815f9a2b0fad8374a8f2552d0bbf1ac5f6621ade99d36edd7d"
	},
	{
		"id": "3775da0c8f2e",
		"ts": "2026-10-23T09:03:14.215Z",
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
		"liquidityUsd": 270361.83,
		"hash": "3775da0c8f2e2252fd24a702541539fa4b935f12d46f9ca3fdcd01a82abbcb0c"
	},
	{
		"id": "e0925ab3c515",
		"ts": "2026-10-23T09:03:14.470Z",
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
		"liquidityUsd": 11572673.29,
		"hash": "e0925ab3c5154f63fb41e940b6c5889a1dc7c660359780e7a6738e2f5cf598b3"
	},
	{
		"id": "88a1074c6964",
		"ts": "2026-10-23T09:03:14.724Z",
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
		"liquidityUsd": 3419346.19,
		"hash": "88a1074c6964e194843fdfd739e2ef2428bfda8f4796e17e254a4583123de0d6"
	},
	{
		"id": "540ddab36b68",
		"ts": "2026-10-23T09:03:14.982Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1152536.34,
		"hash": "540ddab36b685aa865c24237cad920039bbfcc1427b92d62e387ddfdf85f5907"
	},
	{
		"id": "b703bc00805e",
		"ts": "2026-10-23T09:03:15.246Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 11572673.29,
		"hash": "b703bc00805e4bdb1b5ac5d3fcd94e1be3a284ac86cc548bd2e78d76ceed98d9"
	},
	{
		"id": "78126fe4ffaa",
		"ts": "2026-10-23T09:03:15.498Z",
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
		"liquidityUsd": 1317553.05,
		"hash": "78126fe4ffaad9ddf0790227f082d3c78a4f988d17e9089cd88b1e89e0dbdf7e"
	},
	{
		"id": "8e1300497efa",
		"ts": "2026-10-23T09:03:15.773Z",
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
		"liquidityUsd": 2468808.62,
		"hash": "8e1300497efa1cf47f686dd29be166b61f12a28c5569b1867c7a971959ab8e32"
	},
	{
		"id": "5c4fc3993384",
		"ts": "2026-10-23T09:03:16.471Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1268592.81,
		"hash": "5c4fc3993384430ae33e1d9bfbc87954f3f3dba6986aa62ccc961514c39746d0"
	},
	{
		"id": "57d08a97dbbe",
		"ts": "2026-10-23T09:03:16.704Z",
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
		"liquidityUsd": 3262355.96,
		"hash": "57d08a97dbbedf53153ab41b93c0dbea1b47f64dae699c5319f9838419aaae2e"
	},
	{
		"id": "652fbf591160",
		"ts": "2026-10-23T09:03:16.935Z",
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
		"liquidityUsd": 1803969.52,
		"hash": "652fbf5911604756a870dcbed850e8cb8e9e6683f7087bc13f5bfec8bf200176"
	},
	{
		"id": "15bfc8bb2db2",
		"ts": "2026-10-23T09:03:17.175Z",
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
		"liquidityUsd": 13449634.6,
		"hash": "15bfc8bb2db282c7ff323a89fe714107ec283158943d1ba552dffd6ddd9a7200"
	},
	{
		"id": "abc0b2eed401",
		"ts": "2026-10-23T09:03:17.405Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4519908.72,
		"hash": "abc0b2eed401a2be9572612b598d1c2aed591bf53c92877dd653ccd119fffaaa"
	},
	{
		"id": "eeae17edf926",
		"ts": "2026-10-23T09:03:17.640Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2001833.83,
		"hash": "eeae17edf926c18c8520d13c7ae360f458e2d7f81e58a844ee67cf8289bb21c5"
	},
	{
		"id": "acabe09458de",
		"ts": "2026-10-23T09:03:17.890Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 56605.12,
		"hash": "acabe09458de4daa8b8543c5475ad0a6a3d72e6f2d32a7143ac0c6abb73a32be"
	},
	{
		"id": "53d04698136e",
		"ts": "2026-10-23T09:03:18.124Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 528574.87,
		"hash": "53d04698136e3505fd95c1bba3bc5b6165e5ed656b51ff2c71c0e1397b8dce27"
	},
	{
		"id": "82d7ed8da07f",
		"ts": "2026-10-23T09:03:18.355Z",
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
		"liquidityUsd": 651214.8,
		"hash": "82d7ed8da07fc4c606a44edb72799afb2137af8f1ae632ee59e1924ecea0fa8f"
	},
	{
		"id": "ed2b594c26b8",
		"ts": "2026-10-23T09:03:18.598Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 264698.27,
		"hash": "ed2b594c26b803cd40e1034ff279f2c5beb9c183600a1053dc39c7bb6fa4b4a9"
	},
	{
		"id": "fa410d4fb1fa",
		"ts": "2026-10-23T03:12:03.041Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 157039262.97,
		"hash": "fa410d4fb1fa52427bfbb9caa228232ec3c3df12427282762e6690f1a83c7316"
	},
	{
		"id": "01f5da457a6d",
		"ts": "2026-10-23T03:12:03.383Z",
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
		"liquidityUsd": 16381933.18,
		"hash": "01f5da457a6da87aa91705611033fc3b634b10f892cae78055f006137860c07d"
	},
	{
		"id": "7bb2f9bf0383",
		"ts": "2026-10-23T03:12:03.649Z",
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
		"liquidityUsd": 271841.84,
		"hash": "7bb2f9bf03834f98b5ef937f5375f20983f8ff9e2edea297345a368c8dbdede4"
	},
	{
		"id": "f5bc8c5b4000",
		"ts": "2026-10-23T03:12:03.903Z",
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
		"liquidityUsd": 11964162.13,
		"hash": "f5bc8c5b4000431e8f7a41c61d3d76be14deda3323c4921c30c79165f4ad455d"
	},
	{
		"id": "599ac1d42e76",
		"ts": "2026-10-23T03:12:04.178Z",
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
		"liquidityUsd": 3438258.2,
		"hash": "599ac1d42e76cc4e745a3e41d27dab52ccb05e4dbd021f92c330b826964a4356"
	},
	{
		"id": "070c3a1c0c58",
		"ts": "2026-10-23T03:12:04.449Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1141212.69,
		"hash": "070c3a1c0c581ca5c703ec9d100970572974c20b9ced92fd03662c7ea72c64f8"
	},
	{
		"id": "095e2198e37c",
		"ts": "2026-10-23T03:12:04.719Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 11964162.13,
		"hash": "095e2198e37cf5e706ae74c55ead66665e10431381d446fbec9cb0046de44154"
	},
	{
		"id": "b4be8ee1485c",
		"ts": "2026-10-23T03:12:04.988Z",
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
		"liquidityUsd": 1128549.95,
		"hash": "b4be8ee1485ca78cfc4eab793053c6c73e1c315d29c9055d4c4dd3068c6ab860"
	},
	{
		"id": "bb4cf0f4542c",
		"ts": "2026-10-23T03:12:05.260Z",
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
		"liquidityUsd": 2467902.12,
		"hash": "bb4cf0f4542c601f783a934ccb37091569878c0d14e34fa53c2d8e92f2662a98"
	},
	{
		"id": "6b4673a95027",
		"ts": "2026-10-23T03:12:05.511Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1276278.73,
		"hash": "6b4673a950270dc6f0358f13b14844bb7afc3facdf83851e126330eca4c39337"
	},
	{
		"id": "768eaecdc891",
		"ts": "2026-10-23T03:12:05.753Z",
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
		"liquidityUsd": 1775583.69,
		"hash": "768eaecdc8911581d60e9d9cffa32d3cb0cd3db5aee8080aaa6155419cac1858"
	},
	{
		"id": "0ff0a84e1d38",
		"ts": "2026-10-23T03:12:05.996Z",
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
		"liquidityUsd": 3225582.06,
		"hash": "0ff0a84e1d38aa83e7c98383a1559af6a940a8e0f1460576412cd77d75bf939d"
	},
	{
		"id": "e4c3604636b0",
		"ts": "2026-10-23T03:12:06.224Z",
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
		"liquidityUsd": 13455727.84,
		"hash": "e4c3604636b09b9e23c898c1c8289f2d5edd453b3a2eb4984670ed72a6b9391a"
	},
	{
		"id": "ae8d94354fbd",
		"ts": "2026-10-23T03:12:06.450Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 57371.07,
		"hash": "ae8d94354fbd5b3e9db42012cc5cc7e5d269adceab6cead23ee003d289ef4004"
	},
	{
		"id": "5612f2b950a7",
		"ts": "2026-10-23T03:12:06.812Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2015839.19,
		"hash": "5612f2b950a7cedf99bc8b2b3c05a200d73f083aa74d64da60788eb20d5cfcac"
	},
	{
		"id": "1668518adc7d",
		"ts": "2026-10-23T03:12:07.040Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 255333.59,
		"hash": "1668518adc7dc73209c4aad3b5a693aaec2ac7783ae6fdad1706668cccd62e54"
	},
	{
		"id": "2ff0e5fba107",
		"ts": "2026-10-23T03:12:07.281Z",
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
		"liquidityUsd": 560985.25,
		"hash": "2ff0e5fba107a7d54cdb294026c9fbe25077477d1c1eb0df83162a48e1e45559"
	},
	{
		"id": "106693f404b3",
		"ts": "2026-10-23T03:12:07.522Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 503501.98,
		"hash": "106693f404b3092def7cfde1132afd9bb5a6d0070c620dfb9ae60dceff418c83"
	},
	{
		"id": "e0a8693cbc16",
		"ts": "2026-10-23T03:12:07.757Z",
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
		"liquidityUsd": 1330558.7,
		"hash": "e0a8693cbc16ae60268f1a02380efcf488e5907bebedabf9dd74d848d58fb65a"
	},
	{
		"id": "2d9dc32eca5c",
		"ts": "2026-10-22T23:51:36.686Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156468211.38,
		"hash": "2d9dc32eca5c0625c32eff6397a93504aaeb9b5c2a68fa5c569c60cec2d5d904"
	},
	{
		"id": "c95447db5aaf",
		"ts": "2026-10-22T23:51:37.200Z",
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
		"liquidityUsd": 16208239.47,
		"hash": "c95447db5aaf0894a515b010234165a4d432d7960a87db22b96f8fe4f6716362"
	},
	{
		"id": "a8cc2018f4d8",
		"ts": "2026-10-22T23:51:37.484Z",
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
		"liquidityUsd": 266146.87,
		"hash": "a8cc2018f4d84001fdd17ba5c94ef6c00e44b063a62961401e9dd19f69ef2110"
	},
	{
		"id": "2251620c7fa7",
		"ts": "2026-10-22T23:51:37.784Z",
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
		"liquidityUsd": 11964567.1,
		"hash": "2251620c7fa7d35c46b112fe18309340917dfec9172907033c74a0611fe4da69"
	},
	{
		"id": "b0edab884676",
		"ts": "2026-10-22T23:51:38.058Z",
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
		"liquidityUsd": 3431758.48,
		"hash": "b0edab884676c6a142bb7620e53d9dcaed077075463a294f5cb73717b6ff26fa"
	},
	{
		"id": "52894570a9f6",
		"ts": "2026-10-22T23:51:38.332Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1143404.18,
		"hash": "52894570a9f6e2ca87df1fb384e728fae8ae38815e6ae12897ba1425a72f76e0"
	},
	{
		"id": "81676d29b897",
		"ts": "2026-10-22T23:51:38.680Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 11964567.1,
		"hash": "81676d29b897e6b2eba71c5f6966bd3ab1024a996a0406d2ffbfe7492a68dd13"
	},
	{
		"id": "224e5968900b",
		"ts": "2026-10-22T23:51:38.987Z",
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
		"liquidityUsd": 1236936.17,
		"hash": "224e5968900b1e6f6b8c3d56137c0756c83013631dac710074f48ea6bcd9ecf0"
	},
	{
		"id": "2291c208b072",
		"ts": "2026-10-22T23:51:39.288Z",
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
		"liquidityUsd": 2471174.44,
		"hash": "2291c208b072b0416ced85f054226b02d76c915bf245645f08ef0d678042096b"
	},
	{
		"id": "9543160f6fa3",
		"ts": "2026-10-22T23:51:39.611Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1272105.49,
		"hash": "9543160f6fa3b3633f48460a8047b79394d46d1981144cc22446f042660159c4"
	},
	{
		"id": "e55fa88c7b37",
		"ts": "2026-10-22T23:51:39.889Z",
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
		"liquidityUsd": 1824666.38,
		"hash": "e55fa88c7b37a727b07a6ba3599c0afd02baf03df6b7d0dc2fe5d7b0d3f12762"
	},
	{
		"id": "15f8629b33f6",
		"ts": "2026-10-22T23:51:40.149Z",
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
		"liquidityUsd": 13455707.36,
		"hash": "15f8629b33f6f55110fd559bc5bbaf8f08ac273b8832199d0fa09c5dda3317c3"
	},
	{
		"id": "b0dd8c6053b1",
		"ts": "2026-10-22T23:51:40.427Z",
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
		"liquidityUsd": 3238280.16,
		"hash": "b0dd8c6053b1f0d745e27038cc47b84fe2b127ca3a568da8a3ffe35101a408e2"
	},
	{
		"id": "8684d1c109fc",
		"ts": "2026-10-22T23:51:40.704Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 58012.93,
		"hash": "8684d1c109fc3f18e2fe60080888a0b87cae3c6024c580c3ab703acd2ee42823"
	},
	{
		"id": "fb0c38adadce",
		"ts": "2026-10-22T23:51:40.952Z",
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
		"liquidityUsd": 116831.83,
		"hash": "fb0c38adadce0c8fc54b14f9fae22dcf745320c15e10e8670042f983c2997398"
	},
	{
		"id": "1fdf00655e02",
		"ts": "2026-10-22T23:51:41.234Z",
		"symbol": "MSTRc",
		"token": "0xb2000000000000000000004884b426556b92883d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 885713.77,
		"hash": "1fdf00655e02ad65ca970073937e68d3c49f3cb9b8759cf26cb1ac78260a72c7"
	},
	{
		"id": "8d3b14a87529",
		"ts": "2026-10-22T23:51:41.488Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 480469.88,
		"hash": "8d3b14a87529c3e6b9b728a3aebe55b2bf732315ce9574166f558d57e7559e10"
	},
	{
		"id": "36360ce20846",
		"ts": "2026-10-22T23:51:41.738Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1975518.74,
		"hash": "36360ce20846cb6e400e866e2e73636245f3782068e0a1d8f03d041b545107dd"
	},
	{
		"id": "9d4ac79e684e",
		"ts": "2026-10-22T23:51:41.971Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 246218.15,
		"hash": "9d4ac79e684e4b6cd44b1a456bf785e8c8496ef72907a4fd11b0eabf4e38b7d9"
	},
	{
		"id": "0b8fffb24656",
		"ts": "2026-10-22T20:24:04.898Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156188382.72,
		"hash": "0b8fffb24656b3b8a33634b356a871a19e052fcf3e0af493d7159d0c2111a5fc"
	},
	{
		"id": "4b0dde86793f",
		"ts": "2026-10-22T20:24:05.120Z",
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
		"liquidityUsd": 16179648.94,
		"hash": "4b0dde86793f8dbff730df14eda791141b69d6b9b7a279fe51d94d452eb47812"
	},
	{
		"id": "73326840e0cb",
		"ts": "2026-10-22T20:24:05.344Z",
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
		"liquidityUsd": 265146.06,
		"hash": "73326840e0cbb3a121b91c212cf9f33788c70d5a3dfc853a58cee65e20d399e5"
	},
	{
		"id": "9a21e0c28402",
		"ts": "2026-10-22T20:24:05.550Z",
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
		"liquidityUsd": 12194908.19,
		"hash": "9a21e0c284022f707473248c0b7f8d2ec6e486ef442f670299fa764639d9bc9e"
	},
	{
		"id": "56f1aa09536c",
		"ts": "2026-10-22T20:24:05.747Z",
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
		"liquidityUsd": 3430253.98,
		"hash": "56f1aa09536c4542a24f7ff53977c9c83340fffeb43cef02b92cbdbd38dcae22"
	},
	{
		"id": "fe92aaaf0716",
		"ts": "2026-10-22T20:24:05.939Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1139583.24,
		"hash": "fe92aaaf071600ea61a54bec88751166503d4e16298c49367ef0b95faf036331"
	},
	{
		"id": "c3f874cf25b8",
		"ts": "2026-10-22T20:24:06.131Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12194908.19,
		"hash": "c3f874cf25b82c71c9d8d340d4de2cfefdde2d6be29e9e8db56c1915096a4568"
	},
	{
		"id": "32869ee8bdfa",
		"ts": "2026-10-22T20:24:06.395Z",
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
		"liquidityUsd": 1237578.75,
		"hash": "32869ee8bdfa04dfc252ff42c9ba202d3f458550a8525441eee0ec5ee55c072c"
	},
	{
		"id": "eefbea1d7196",
		"ts": "2026-10-22T20:24:06.604Z",
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
		"liquidityUsd": 2470628.12,
		"hash": "eefbea1d719653d775273f400ee18567c66faae170104e2c4b7eb56c7b756fcb"
	},
	{
		"id": "7e506dfe0146",
		"ts": "2026-10-22T20:24:06.795Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1258560.45,
		"hash": "7e506dfe01467dfd451f859dac2e4f8428cf65adf6eb745d0c5cf371d0ba0b12"
	},
	{
		"id": "1eebfbcf8d6c",
		"ts": "2026-10-22T20:24:06.993Z",
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
		"liquidityUsd": 1824110.91,
		"hash": "1eebfbcf8d6c63586f22eee3df63033668481cf343edf2e3bb2d0f5611bdb138"
	},
	{
		"id": "dac92fdcc6a9",
		"ts": "2026-10-22T20:24:07.193Z",
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
		"liquidityUsd": 13462214.3,
		"hash": "dac92fdcc6a910926d7e998e1f21f619676263d8854231309af0211288b83a6e"
	},
	{
		"id": "33854496249d",
		"ts": "2026-10-22T20:24:07.974Z",
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
		"liquidityUsd": 3250590.11,
		"hash": "33854496249d834958f73c9e63cbe197d2c73c53b69bcd4d5d37e40c9d347eb2"
	},
	{
		"id": "99421986f518",
		"ts": "2026-10-22T20:24:08.175Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 59416.03,
		"hash": "99421986f518d02b8b811067e1fb4c7ed3841348a6febe99fd932345ed72c128"
	},
	{
		"id": "d885aec7005e",
		"ts": "2026-10-22T20:24:08.384Z",
		"symbol": "PANGEA",
		"token": "0xA551dEF8a44ea423CaA58DA45b3F5764004286Ea",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 131467.4,
		"hash": "d885aec7005e3b25699c39d3f85282ce61c182e6f4fcf4d6e12c7a8c7e82af18"
	},
	{
		"id": "c7103306c797",
		"ts": "2026-10-22T20:24:09.193Z",
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
		"liquidityUsd": 93941.52,
		"hash": "c7103306c797e27b7c8a6e067a8fc77ed03aba48e582c0e24a33f9b2f2e6fe1e"
	},
	{
		"id": "f1b35d0ba14e",
		"ts": "2026-10-22T20:24:09.383Z",
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
		"liquidityUsd": 256613.62,
		"hash": "f1b35d0ba14e0f493c03c1c03a192fa0846c7d78630f5fcf10ce4e2c4cf062d1"
	},
	{
		"id": "61b51a0ae01b",
		"ts": "2026-10-22T20:24:09.560Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 481018.12,
		"hash": "61b51a0ae01bc3b8fd7bb144855043360abeece331aa0a74b0e93bfcb78859db"
	},
	{
		"id": "0c2f353324fc",
		"ts": "2026-10-22T20:24:09.797Z",
		"symbol": "MSTRc",
		"token": "0xb2000000000000000000004884b426556b92883d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1669107.72,
		"hash": "0c2f353324fc7e8eca3508c2bb4e229339a5b21bdaf84e6d070956092ee4b78f"
	},
	{
		"id": "8532d4797db6",
		"ts": "2026-10-22T16:33:24.571Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 155956190.24,
		"hash": "8532d4797db640912f92e5fa06ea3892b929b5557034cbe6ac106f6686bd36ac"
	},
	{
		"id": "e3b8bba9edb2",
		"ts": "2026-10-22T16:33:25.037Z",
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
		"liquidityUsd": 16248609.5,
		"hash": "e3b8bba9edb2fc2b10480aa8d96bf9eecb4632786926d9062ab881c5cebc7830"
	},
	{
		"id": "df5a1e350c77",
		"ts": "2026-10-22T16:33:25.316Z",
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
		"liquidityUsd": 266908.8,
		"hash": "df5a1e350c772c077d91c673e6141a7c1b3bf5cabcdb1e392fb62b903fb1cd73"
	},
	{
		"id": "5a8751492de2",
		"ts": "2026-10-22T16:33:25.571Z",
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
		"liquidityUsd": 18196947.11,
		"hash": "5a8751492de20eb4ef25931eb5e772b9e04be249d54322d53fc5c117ec4183ae"
	},
	{
		"id": "1742aee620d0",
		"ts": "2026-10-22T16:33:25.853Z",
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
		"liquidityUsd": 3472138.17,
		"hash": "1742aee620d02bf6940310a6c78b973c8fcfadd75615da15599a1fe87ae69bb7"
	},
	{
		"id": "85f46042e0cf",
		"ts": "2026-10-22T16:33:26.130Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1144230.87,
		"hash": "85f46042e0cf067627a5ddc9bc9ed52f0357117ab644b260f3e4d652a4a256bc"
	},
	{
		"id": "4b87dc59a8ab",
		"ts": "2026-10-22T16:33:26.734Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 18196947.11,
		"hash": "4b87dc59a8ab91618e195b73294ac25dff98858bfb9eb7e8594df7ef1feb5f1a"
	},
	{
		"id": "2a8ed8472ef0",
		"ts": "2026-10-22T16:33:26.997Z",
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
		"liquidityUsd": 1160291.94,
		"hash": "2a8ed8472ef0b90855ef0764d3b74f326823d5652949539d275eb7aba9abe809"
	},
	{
		"id": "60175b00fdee",
		"ts": "2026-10-22T16:33:27.290Z",
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
		"liquidityUsd": 2469823.18,
		"hash": "60175b00fdeecded54139d95debd8cb475d4f12391b939916d2a5caa4762d9db"
	},
	{
		"id": "b177d573ce1e",
		"ts": "2026-10-22T16:33:27.577Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1278663.54,
		"hash": "b177d573ce1eb19852ab46a15f25c0dfcd56702dff5ea94151edd161c0781265"
	},
	{
		"id": "b33ffaa8fb9f",
		"ts": "2026-10-22T16:33:27.816Z",
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
		"liquidityUsd": 15421141.61,
		"hash": "b33ffaa8fb9fc00cfea77b895bd79fbdd15c22e47844c69889e74da28006afea"
	},
	{
		"id": "599b5ede5336",
		"ts": "2026-10-22T16:33:28.050Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 57901.8,
		"hash": "599b5ede5336590874e04bbe07c2342472700c771ba2a9a05ee5c1efc9ddc965"
	},
	{
		"id": "f94e4cf3b466",
		"ts": "2026-10-22T16:33:28.343Z",
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
		"liquidityUsd": 1803627.25,
		"hash": "f94e4cf3b4663eb52ed114393a18444dd0ec7597713e17ccaf9c4775e7c99749"
	},
	{
		"id": "31bc1ab64031",
		"ts": "2026-10-22T16:33:28.580Z",
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
		"liquidityUsd": 96990.98,
		"hash": "31bc1ab64031bf9963077508bb8304ec68660fe0e34c38ecb18838cd29f565d9"
	},
	{
		"id": "f40896ca5c5f",
		"ts": "2026-10-22T16:33:28.815Z",
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
		"liquidityUsd": 3261566.9,
		"hash": "f40896ca5c5fbd0838604591320dfb3df5c0f41b5de50c7b180e991674c63b22"
	},
	{
		"id": "3d2fc091c2cc",
		"ts": "2026-10-22T16:33:29.047Z",
		"symbol": "PANGEA",
		"token": "0xA551dEF8a44ea423CaA58DA45b3F5764004286Ea",
		"score": 71,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.42,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 134912.47,
		"hash": "3d2fc091c2cc90658939dd8cc47860dcf6a43e52f03a93f072d6019f91bb5f40"
	},
	{
		"id": "4ba11ffd674d",
		"ts": "2026-10-22T16:33:29.284Z",
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
		"liquidityUsd": 262890.31,
		"hash": "4ba11ffd674d522626b0161e200104761f22b078f509bf355ca08499280e738d"
	},
	{
		"id": "98b9794727e2",
		"ts": "2026-10-22T16:33:29.520Z",
		"symbol": "MSTRc",
		"token": "0xb2000000000000000000004884b426556b92883d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1499445.81,
		"hash": "98b9794727e281d8c821ef1c407b0e39b41338875e04eaff9ec7071c7d4786fd"
	},
	{
		"id": "6a5b2a37c7b9",
		"ts": "2026-10-22T16:33:29.933Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3950534.82,
		"hash": "6a5b2a37c7b97f83c9485c1cac0af8e77afafd1dc811d522471f447fef09aed6"
	},
	{
		"id": "a1e96b97c78c",
		"ts": "2026-10-22T11:04:59.467Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 155482444.78,
		"hash": "a1e96b97c78c877256a9ac867f967a1712d367aac6e5e00e3dd9ce5e21825ba8"
	},
	{
		"id": "f401f491ad75",
		"ts": "2026-10-22T11:05:00.203Z",
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
		"liquidityUsd": 16283801.51,
		"hash": "f401f491ad75f6b071cd40973fc7a23a18a12134d6c6acf1afa86ec1de997cee"
	},
	{
		"id": "5ce8ba756eb1",
		"ts": "2026-10-22T11:05:00.501Z",
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
		"liquidityUsd": 266086.31,
		"hash": "5ce8ba756eb1e82e1e3614e2c5055469fdeeec72b7db6f8a246af36258ceb11e"
	},
	{
		"id": "a8600a504310",
		"ts": "2026-10-22T11:05:01.090Z",
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
		"liquidityUsd": 21354131.02,
		"hash": "a8600a504310f183a2138b026615f6bcd78615b9e1e320952a99c6f919b495da"
	},
	{
		"id": "40c169c21f18",
		"ts": "2026-10-22T11:05:01.371Z",
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
		"liquidityUsd": 3943040.18,
		"hash": "40c169c21f189efa621f5d82f35fd71ca6ea50f9146aac72279ffdf2a413d82a"
	},
	{
		"id": "388de5c6c4f0",
		"ts": "2026-10-22T11:05:01.651Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1145468.75,
		"hash": "388de5c6c4f021e84bc8a821dcd4b1bf4eec3ca292757103bd0c4942975e9ea0"
	},
	{
		"id": "4db62cc4120f",
		"ts": "2026-10-22T11:05:01.918Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 21354131.02,
		"hash": "4db62cc4120fc9d83eabde223718a163dfe2ab149e8d11b550bc6a533125a4b2"
	},
	{
		"id": "299bb9d5f4d2",
		"ts": "2026-10-22T11:05:02.198Z",
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
		"liquidityUsd": 1317160.54,
		"hash": "299bb9d5f4d249e44a52116d58c12ab8b4d6ef2849adc2d4b52d60bf32e1a92e"
	},
	{
		"id": "fa566d584d39",
		"ts": "2026-10-22T11:05:02.467Z",
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
		"liquidityUsd": 2470591.43,
		"hash": "fa566d584d394d2aa311d5c0bc1e665449cc3d276a4da86b0cd6fe7962c42e3b"
	},
	{
		"id": "b01d5f897222",
		"ts": "2026-10-22T11:05:02.735Z",
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
		"liquidityUsd": 16092402.84,
		"hash": "b01d5f897222c1edd58dae87dfe757899908ddf9a1339534e8b6a67fa92318dc"
	},
	{
		"id": "0a114811273f",
		"ts": "2026-10-22T11:05:03.011Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 59885.38,
		"hash": "0a114811273f8f6943600375e89fab74aa38b4fe62e3b5fb78883e86f14858cc"
	},
	{
		"id": "8100a0f51c38",
		"ts": "2026-10-22T11:05:03.276Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1284946.17,
		"hash": "8100a0f51c38e062df39c103491094e5f575c0791d997a0510f13a3cad38ba37"
	},
	{
		"id": "3e75551dec86",
		"ts": "2026-10-22T11:05:03.526Z",
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
		"liquidityUsd": 1801157.85,
		"hash": "3e75551dec861934e73643a3d42cb0ae71f7b3482df460b3da5b6d5cfec7de8c"
	},
	{
		"id": "0d6e860a2431",
		"ts": "2026-10-22T11:05:03.772Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 106250.97,
		"hash": "0d6e860a2431d50eece1dfc83042b7917a416cddc127e9f085c35a35b6edd850"
	},
	{
		"id": "b64e8fbdb28f",
		"ts": "2026-10-22T11:05:04.019Z",
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
		"liquidityUsd": 3326071.01,
		"hash": "b64e8fbdb28f4b88d7cc1bf3f40a924387d1589653b5e78fa99dc193fb681d72"
	},
	{
		"id": "40e769da343f",
		"ts": "2026-10-22T11:05:04.267Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 306617.52,
		"hash": "40e769da343f832c1f63d680ff924aa1843df227cf7ee06b8aeaa8795a2b25a2"
	},
	{
		"id": "5ab9672b8a03",
		"ts": "2026-10-22T11:05:04.513Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1129807.31,
		"hash": "5ab9672b8a03d3511c82d1a3cdef7c12409e9fda4c48f2665430c8c26986804c"
	},
	{
		"id": "1e0711a5ce77",
		"ts": "2026-10-22T11:05:04.768Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 471573.16,
		"hash": "1e0711a5ce77da1de28382b89757081c5db070980a514439431fe00b10306dd9"
	},
	{
		"id": "1f491e7159a0",
		"ts": "2026-10-22T11:05:05.017Z",
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
		"liquidityUsd": 262447.22,
		"hash": "1f491e7159a063e8643b7dc570f7175370233bb14aa5e72c8bd0b3de98f90865"
	},
	{
		"id": "fa3766ee8378",
		"ts": "2026-10-22T05:43:11.441Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156592016.53,
		"hash": "fa3766ee83780aeda15e5d4318a50a13e3e91b17c15f90c1171ce0739d323450"
	},
	{
		"id": "6eeb8cc58877",
		"ts": "2026-10-22T05:43:11.897Z",
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
		"liquidityUsd": 16400479.31,
		"hash": "6eeb8cc588778aeffde1eb6b9f3278258086482880acbd26ea613a20a76d3ed1"
	},
	{
		"id": "ac465d446cba",
		"ts": "2026-10-22T05:43:12.159Z",
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
		"liquidityUsd": 272238.1,
		"hash": "ac465d446cba38500f41e992b21a9b2288df5497fcea5c276d1d11b2b6f599a3"
	},
	{
		"id": "7570054667b8",
		"ts": "2026-10-22T05:43:12.423Z",
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
		"liquidityUsd": 24767855.58,
		"hash": "7570054667b8aa156723b07bb96d96a038ca778579afa1eefb43e0dbd7744f02"
	},
	{
		"id": "16578a15f06f",
		"ts": "2026-10-22T05:43:12.678Z",
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
		"liquidityUsd": 4074439.86,
		"hash": "16578a15f06f1b4fe334abd132def1c4f29d1f9a3cb5035dbce906f23577a32e"
	},
	{
		"id": "ba42c89494ed",
		"ts": "2026-10-22T05:43:12.935Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1165194.82,
		"hash": "ba42c89494ed9c92020b4a033db84d34cf738145947b632275bd79e4b51aeafe"
	},
	{
		"id": "cb25ff90c46c",
		"ts": "2026-10-22T05:43:13.201Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24767855.58,
		"hash": "cb25ff90c46cfdda37535d557dc4db4526935bc8e8704653b84351e36162aa77"
	},
	{
		"id": "7ceba2c890cd",
		"ts": "2026-10-22T05:43:13.461Z",
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
		"liquidityUsd": 766808.12,
		"hash": "7ceba2c890cdfee9e0fb0cce3039fc690bbc12b8ad7361acaf6a81884357d827"
	},
	{
		"id": "1e38ac1ba5a7",
		"ts": "2026-10-22T05:43:13.740Z",
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
		"liquidityUsd": 2471259.16,
		"hash": "1e38ac1ba5a7e04f26fce5d39ba3b1ed6bb40a2bd5b3e3f8c0159de6eb64f28e"
	},
	{
		"id": "82f5eb0efae5",
		"ts": "2026-10-22T05:43:13.996Z",
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
		"liquidityUsd": 16752952.58,
		"hash": "82f5eb0efae57aa7dd2e4e0eed7f6e27bea004339a9bf83030b57c351e70ef62"
	},
	{
		"id": "e7a014679004",
		"ts": "2026-10-22T05:43:14.235Z",
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
		"liquidityUsd": 1793998.73,
		"hash": "e7a014679004202a8ff74c86f78d60da23d523df1321d7f6c12ae9a961d5bf4f"
	},
	{
		"id": "2b027c5689c5",
		"ts": "2026-10-22T05:43:14.457Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 310867.96,
		"hash": "2b027c5689c5c925aa6f0428705c4b627aa753762569a54cd42f63fcb7e24bdf"
	},
	{
		"id": "81c702c60dc1",
		"ts": "2026-10-22T05:43:14.682Z",
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
		"liquidityUsd": 3430877.89,
		"hash": "81c702c60dc174e159190ca16ab03b06d350ef570bd825efa1b3997f4763ae25"
	},
	{
		"id": "b54eff09f065",
		"ts": "2026-10-22T05:43:14.906Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 63180.58,
		"hash": "b54eff09f06524a0f14d16561fe599976c45bf16bc04dde2272d93407cd703b0"
	},
	{
		"id": "0c3c14e4e686",
		"ts": "2026-10-22T05:43:15.141Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1186489.82,
		"hash": "0c3c14e4e6860211228cbf3feef3ded2827329fe3ffe9c533d34c0bb4451b772"
	},
	{
		"id": "c7ecd82d8b6a",
		"ts": "2026-10-22T05:43:15.378Z",
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
		"liquidityUsd": 1297754.46,
		"hash": "c7ecd82d8b6adb1eef2dbda66a96dc6c23eee92461fc5a73293f7962628e9706"
	},
	{
		"id": "aa2d755e836e",
		"ts": "2026-10-22T05:43:15.600Z",
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
		"liquidityUsd": 158667.4,
		"hash": "aa2d755e836ef620ba75b381002d1253fa37d22b8f17a02e43834e7b0646bcb3"
	},
	{
		"id": "b0f83f88b564",
		"ts": "2026-10-22T05:43:15.825Z",
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
		"liquidityUsd": 637789.48,
		"hash": "b0f83f88b564ace0923c19d4bb510785e51d3a7bfee6cd2a79988aa11fe168d5"
	},
	{
		"id": "d67a78000248",
		"ts": "2026-10-22T05:43:16.060Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1156570.52,
		"hash": "d67a78000248a6d8381d149315f92da89d0cf969b4b7e6e5dc25c1cb99d890e9"
	},
	{
		"id": "b24863b12443",
		"ts": "2026-10-22T00:24:08.177Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 157581269.79,
		"hash": "b24863b12443dba3b11e06e40923e339936507bd86f7b3a34c32d5b9cbb97a01"
	},
	{
		"id": "a99858db6357",
		"ts": "2026-10-22T00:24:08.648Z",
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
		"liquidityUsd": 16634105.75,
		"hash": "a99858db6357ef3805b6e5c0f3c4a6184230f5773b5984706ba2b1b2a99cb227"
	},
	{
		"id": "309ae42d98fc",
		"ts": "2026-10-22T00:24:08.924Z",
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
		"liquidityUsd": 275655.95,
		"hash": "309ae42d98fc29427aec76bcb0e1cc07b1e941680d32abe42e1774328fba3b55"
	},
	{
		"id": "fb64c1ab8c3f",
		"ts": "2026-10-22T00:24:09.220Z",
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
		"liquidityUsd": 28229071.47,
		"hash": "fb64c1ab8c3fc5e3d393a5a4c1fc6b443d9da458391caf4df68412ae3fac0e75"
	},
	{
		"id": "20f1c03df4ec",
		"ts": "2026-10-22T00:24:09.517Z",
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
		"liquidityUsd": 4221926.26,
		"hash": "20f1c03df4ecabcde8bdcf507652585df83555b0704f3d98ffb7d0661e29b65e"
	},
	{
		"id": "6be3a0e5176c",
		"ts": "2026-10-22T00:24:09.803Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1195282.16,
		"hash": "6be3a0e5176cffad8b40da2ffe4f19bb2809129a3ed5ac5c7ba98ed793f46fb9"
	},
	{
		"id": "e87607e76ec4",
		"ts": "2026-10-22T00:24:10.135Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28222253.39,
		"hash": "e87607e76ec435e8f85b83fde60dc4b6d4ff617dc092dcf212ef8ccc718c536e"
	},
	{
		"id": "70349af680b6",
		"ts": "2026-10-22T00:24:10.515Z",
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
		"liquidityUsd": 1315757.78,
		"hash": "70349af680b6dd6835edf00ea60655cf63f37812a6b5940521475bbcb03a0a87"
	},
	{
		"id": "3b3d7c8fa521",
		"ts": "2026-10-22T00:24:10.806Z",
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
		"liquidityUsd": 2467144.31,
		"hash": "3b3d7c8fa521e936a813ba190ef0a1d7fbfd4b309790b723ef3bc68d6848b435"
	},
	{
		"id": "e1716ac29ef2",
		"ts": "2026-10-22T00:24:11.074Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 321049.89,
		"hash": "e1716ac29ef2c39783893144dbfe390edd884b160b6aeed41b00bfa546cccb7f"
	},
	{
		"id": "7923ed3aa635",
		"ts": "2026-10-22T00:24:11.316Z",
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
		"liquidityUsd": 3540844.72,
		"hash": "7923ed3aa63585febf852bb0eee03f6d6234760005a230421f595a9df378108e"
	},
	{
		"id": "a789c8b46a9b",
		"ts": "2026-10-22T00:24:11.547Z",
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
		"liquidityUsd": 17358078.14,
		"hash": "a789c8b46a9bd3ab3166e28c82c1a0ae0eb5c2df13467c18b890a7293f7a72a4"
	},
	{
		"id": "08987bd3c59d",
		"ts": "2026-10-22T00:24:11.798Z",
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
		"liquidityUsd": 1808233.95,
		"hash": "08987bd3c59d23a4eb2d8b5e47752697cd55a1682776d9c3e9bda755acc7c464"
	},
	{
		"id": "caf8a85f500f",
		"ts": "2026-10-22T00:24:12.107Z",
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
		"liquidityUsd": 1356626.14,
		"hash": "caf8a85f500f23f9d8a5eb9e8120bf6adcd0e88ca4074922a0ed2011cc6e439c"
	},
	{
		"id": "0495ee0aa13f",
		"ts": "2026-10-22T00:24:12.371Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1194790.53,
		"hash": "0495ee0aa13f57bd2e2ce5b78daedc51ae405079b7d0b66c35d017f74abff33f"
	},
	{
		"id": "9ef990aeaf6d",
		"ts": "2026-10-22T00:24:12.608Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1383026.41,
		"hash": "9ef990aeaf6d372583a9fcad1c735776af14a894f466d1ffcac503f735dfdb25"
	},
	{
		"id": "293f11e98e23",
		"ts": "2026-10-22T00:24:12.858Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 64047.48,
		"hash": "293f11e98e2309a801ea81fd214518518f0e819b30fe352fa0abe9ed42d3083b"
	},
	{
		"id": "2149d58201f4",
		"ts": "2026-10-22T00:24:13.102Z",
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
		"liquidityUsd": 636023.77,
		"hash": "2149d58201f4691ebcdb300ab7633da50102fef355b0ad2c4c3f0886eff75544"
	},
	{
		"id": "d1d5ffaefc1f",
		"ts": "2026-10-22T00:24:13.338Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1206206.63,
		"hash": "d1d5ffaefc1f98a3519da8da96f762054bb62daaa329ef3d2a223e8c68559c03"
	},
	{
		"id": "b052e94ea00b",
		"ts": "2026-10-21T21:11:49.019Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 158030177.88,
		"hash": "b052e94ea00b1cbdb0eadbd5ebc21d261692b5cf2d1de09a5a1cd93ac06e219c"
	},
	{
		"id": "3a15f6f4e9c6",
		"ts": "2026-10-21T21:11:49.708Z",
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
		"liquidityUsd": 16721847.79,
		"hash": "3a15f6f4e9c6356149617249d895ccd76560c1e05d53d66c3f55404825c61b50"
	},
	{
		"id": "f429ddd8a10d",
		"ts": "2026-10-21T21:11:50.169Z",
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
		"liquidityUsd": 276633.89,
		"hash": "f429ddd8a10d33e008c618f7763f63caa01d44aa1f6be9bd83f4b48e0c263b43"
	},
	{
		"id": "b09acfec73c4",
		"ts": "2026-10-21T21:11:50.644Z",
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
		"liquidityUsd": 34699236.48,
		"hash": "b09acfec73c41a2cc39d8349fffa2d1fe777815c9a7522d7e0ab9a64d70cd021"
	},
	{
		"id": "299bb68eba67",
		"ts": "2026-10-21T21:11:50.891Z",
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
		"liquidityUsd": 4259218.24,
		"hash": "299bb68eba67c7b73c750afcce174c07405b0d1463ef797e11a0cf3fe5348245"
	},
	{
		"id": "267dc5f12f6d",
		"ts": "2026-10-21T21:11:51.181Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1205590.99,
		"hash": "267dc5f12f6df4e1600e739ab46be71fa2bf5b7bafcf2b415943d158378d0e66"
	},
	{
		"id": "5f47a723faff",
		"ts": "2026-10-21T21:11:51.448Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34699237.22,
		"hash": "5f47a723faff18da364677b20b3b1ebf236ca5f8f75b26d960f13a0416e378f8"
	},
	{
		"id": "25d7debcc282",
		"ts": "2026-10-21T21:11:51.707Z",
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
		"liquidityUsd": 1570499.27,
		"hash": "25d7debcc282d99ec7f2022728af47c0c2946d30130feb4cb0418aa08d1cb374"
	},
	{
		"id": "3d958f130810",
		"ts": "2026-10-21T21:11:52.191Z",
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
		"liquidityUsd": 2466439.46,
		"hash": "3d958f13081075bce80989000408c5a0aaf2edc5953beef9cf5eb95cb135d800"
	},
	{
		"id": "073a04ead78d",
		"ts": "2026-10-21T21:11:52.450Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3579933.26,
		"hash": "073a04ead78db125bde449be71dec4050a119d9cc3dc31ff7b42a812c3599e69"
	}
]
