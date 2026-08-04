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
	"updatedAt": "2026-08-04T15:26:37.823Z",
	"tokensScored": 7324,
	"verdictsIssued": 7324,
	"safe": 6367,
	"risky": 560,
	"likelyRug": 397,
	"ticks": 446
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "b14a2c13e703",
		"ts": "2026-08-04T15:26:33.097Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112730129.01,
		"hash": "b14a2c13e703dfa81a4339b58bd4281b73cee4640ca42aa2b8f5919c436645ed"
	},
	{
		"id": "6e1b11ce5f43",
		"ts": "2026-08-04T15:26:33.374Z",
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
		"liquidityUsd": 14090105.66,
		"hash": "6e1b11ce5f43514af1b2debbafec53180ea8b0a092601cfe2aea5297f4da76c4"
	},
	{
		"id": "59734c322b4e",
		"ts": "2026-08-04T15:26:33.666Z",
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
		"liquidityUsd": 343343.56,
		"hash": "59734c322b4ee9735af47792488ff6fce2ce5b56c22a30e166c0bf9f1c8155aa"
	},
	{
		"id": "21db97121e34",
		"ts": "2026-08-04T15:26:33.954Z",
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
		"liquidityUsd": 25047917.1,
		"hash": "21db97121e349e9b6e27ead38499a6e6a5e95cd23e09c480d633818c71b0e2ba"
	},
	{
		"id": "22120eda3476",
		"ts": "2026-08-04T15:26:34.256Z",
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
		"liquidityUsd": 4372573.63,
		"hash": "22120eda3476d2f1bd672db5bd548d98f56803999c38617cf939fa01fd2f6da8"
	},
	{
		"id": "82d8340ba3ff",
		"ts": "2026-08-04T15:26:34.527Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 902319.18,
		"hash": "82d8340ba3ff9beec8227597af70a5e321a76001f545301f8bbb007ded32046d"
	},
	{
		"id": "63651582282c",
		"ts": "2026-08-04T15:26:34.831Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25047917.1,
		"hash": "63651582282c1eaf8ea1af6a3e3be0a5e45ed2719a538ba30399ddbb95bf1663"
	},
	{
		"id": "86bfc0bd074f",
		"ts": "2026-08-04T15:26:35.204Z",
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
		"liquidityUsd": 3463188.29,
		"hash": "86bfc0bd074f1505d940dfedf14c9b0a9e11b22fd38d25fb6354f2cf4f0d6728"
	},
	{
		"id": "7117badba835",
		"ts": "2026-08-04T15:26:35.500Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1095939.26,
		"hash": "7117badba835fc53d061579e8051f14a9cfaf4503a40496e99b977b24f5559c2"
	},
	{
		"id": "ccd15b7ea7b0",
		"ts": "2026-08-04T15:26:35.822Z",
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
		"liquidityUsd": 975924.32,
		"hash": "ccd15b7ea7b0abbd31bf9afee84654f0123753f833255238cd2eff265e727b80"
	},
	{
		"id": "9c3e3bb47540",
		"ts": "2026-08-04T15:26:36.070Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 286737.8,
		"hash": "9c3e3bb47540a2db2c59e378e7e80ca79c7ef7cbdf4fcbe3e2db899ecd3ecf97"
	},
	{
		"id": "5c8fa7c7d095",
		"ts": "2026-08-04T15:26:36.320Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 85045.2,
		"hash": "5c8fa7c7d095ceb02543bdfa0e8aa13bd0ec6bab1e4327d6a72698e38bea6ec2"
	},
	{
		"id": "8723a3d06e64",
		"ts": "2026-08-04T15:26:36.571Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1911061.18,
		"hash": "8723a3d06e64fff6cbaf9c5b41f6562e7abfbcbfa137754973eaaf65e663a125"
	},
	{
		"id": "0f4d30f74470",
		"ts": "2026-08-04T15:26:36.822Z",
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
		"liquidityUsd": 1431564.32,
		"hash": "0f4d30f744708a336dc4de75f919cea043a72f381347eb1170be0874bde44a9c"
	},
	{
		"id": "ab10bb825aa7",
		"ts": "2026-08-04T15:26:37.075Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1679205.08,
		"hash": "ab10bb825aa71950a469200ae2f39227661a3e3c351c4c1824746e88914de785"
	},
	{
		"id": "666fb47113c5",
		"ts": "2026-08-04T15:26:37.327Z",
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
		"liquidityUsd": 692621.52,
		"hash": "666fb47113c509a12038a5b06bcb4159c1269069b9c3a656d58ab89d39d24d9f"
	},
	{
		"id": "d9eea876c4a5",
		"ts": "2026-08-04T15:26:37.573Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3155478.59,
		"hash": "d9eea876c4a5f644fc42fbe6e90622639899e22418861588d9a1975e3ae09439"
	},
	{
		"id": "15690ab89222",
		"ts": "2026-08-04T15:26:37.822Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1898418.45,
		"hash": "15690ab8922209a4d0bf6fbfbc989838c5033d80ad97815bae0687f324a54e29"
	},
	{
		"id": "867bfa522bcf",
		"ts": "2026-08-04T12:58:30.507Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112827428.2,
		"hash": "867bfa522bcf1855419991443ced6c9c0d05ac262068880db9d63770e5ec77e3"
	},
	{
		"id": "b2a5f83b84a5",
		"ts": "2026-08-04T12:58:30.978Z",
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
		"liquidityUsd": 18284852.1,
		"hash": "b2a5f83b84a58a33b1fe8cecb514fc595a77e047a8b7565db5cd9fa3aa0e11e4"
	},
	{
		"id": "9e1716011609",
		"ts": "2026-08-04T12:58:31.321Z",
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
		"liquidityUsd": 1117918.32,
		"hash": "9e171601160957667580f49d6f479681593cdeec5a252f87cb73b0274d231b57"
	},
	{
		"id": "e960b82f58e8",
		"ts": "2026-08-04T12:58:31.758Z",
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
		"liquidityUsd": 25107078.19,
		"hash": "e960b82f58e8ccc46f7c9882b9c2029c72a102a2a81e35b9bb8101e70bbf6da8"
	},
	{
		"id": "797f2dbff5f9",
		"ts": "2026-08-04T12:58:32.099Z",
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
		"liquidityUsd": 4397201.27,
		"hash": "797f2dbff5f9c0d39178fd017f739fb015521b7c1a3575978e2ed061345f9567"
	},
	{
		"id": "703c8f76f565",
		"ts": "2026-08-04T12:58:32.331Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 897279.83,
		"hash": "703c8f76f56565714b9eb551ebbe30eeeb28705f483e200a1ac783c37f3bdfc9"
	},
	{
		"id": "bc4569a46c81",
		"ts": "2026-08-04T12:58:32.570Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25107078.19,
		"hash": "bc4569a46c819d1292a7d52883e435bb5492f66ef9d514671b9db5afbdc3bedf"
	},
	{
		"id": "f82dccf755a0",
		"ts": "2026-08-04T12:58:32.811Z",
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
		"liquidityUsd": 3430722.09,
		"hash": "f82dccf755a0d3bb188873e21b43e9fdc590082c8b942875ed384e270b87cbdd"
	},
	{
		"id": "2d9851914011",
		"ts": "2026-08-04T12:58:33.053Z",
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
		"liquidityUsd": 836269.11,
		"hash": "2d985191401106fd51fa631dda579da60262148e9f604e300997b5a4b82812e4"
	},
	{
		"id": "3090a79ba7eb",
		"ts": "2026-08-04T12:58:33.290Z",
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
		"liquidityUsd": 286689.03,
		"hash": "3090a79ba7ebe2d634346e2f8a1c01a4036306d4f9406c4efac777816fbd360f"
	},
	{
		"id": "60384503812a",
		"ts": "2026-08-04T12:58:33.512Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1910136.34,
		"hash": "60384503812af10948cc820a69540b4631d1747a9179e536a8d08f786f024822"
	},
	{
		"id": "1a814007a249",
		"ts": "2026-08-04T12:58:33.743Z",
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
		"liquidityUsd": 1441083.93,
		"hash": "1a814007a249991c7c8e323f601fc509c18aa21240605ea0099c8a207144e5e7"
	},
	{
		"id": "6d58becabd19",
		"ts": "2026-08-04T12:58:33.961Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 84516.77,
		"hash": "6d58becabd192317661a011161b5a22951384fbb84837a40ee6e28683394b771"
	},
	{
		"id": "d39ea9aeaa52",
		"ts": "2026-08-04T12:58:34.187Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1675934.59,
		"hash": "d39ea9aeaa523679672a39f0ae1815ca217b52d2edbef170b40782ba472de9ab"
	},
	{
		"id": "50fe80e61c56",
		"ts": "2026-08-04T12:58:34.403Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3120654.51,
		"hash": "50fe80e61c5676023eaf7d05991ae788a989d40e7054267831a715cc5d7737fe"
	},
	{
		"id": "f31bdbf5611e",
		"ts": "2026-08-04T12:58:34.627Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1210043.73,
		"hash": "f31bdbf5611eb9ae8af9125b716c7f653f7bfcc78e69857afc3eb50164698193"
	},
	{
		"id": "525416e58042",
		"ts": "2026-08-04T12:58:34.844Z",
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
		"liquidityUsd": 689460.85,
		"hash": "525416e5804261bf2ad500adb20826b8fca65239cae76a680d2b92c13c6aff35"
	},
	{
		"id": "6f62ddef5ec3",
		"ts": "2026-08-04T12:58:35.070Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9505848.52,
		"hash": "6f62ddef5ec3a9e91b8310a39b1e4fe5e6b5fc558ee5aef6d98ea2ef865d15ab"
	},
	{
		"id": "69e8cf74befc",
		"ts": "2026-08-04T10:34:03.036Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112075680.98,
		"hash": "69e8cf74befc2c887a1cd107668e57bbdc80b21c4766c086aada2c0cd43d99da"
	},
	{
		"id": "2e4f85fb5ee2",
		"ts": "2026-08-04T10:34:03.644Z",
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
		"liquidityUsd": 16446566.02,
		"hash": "2e4f85fb5ee2cb1daa30773367b0445a414cfc4249223107e955cf4bc10e69ce"
	},
	{
		"id": "7d8fe48c538f",
		"ts": "2026-08-04T10:34:03.967Z",
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
		"liquidityUsd": 1114158.98,
		"hash": "7d8fe48c538fb29ceaa4c97278d49330ede2084a62387bfde567ee25dd380e3b"
	},
	{
		"id": "8135d359ca2d",
		"ts": "2026-08-04T10:34:04.276Z",
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
		"liquidityUsd": 24991035.2,
		"hash": "8135d359ca2d401c23a438345448c50e308d0f2d222aa4eec4494b7d718d795d"
	},
	{
		"id": "266bed7763d6",
		"ts": "2026-08-04T10:34:04.596Z",
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
		"liquidityUsd": 4386367.74,
		"hash": "266bed7763d63ce113517dc3ef48eeebfbb406920c56fbe7958f4a5eb3c77551"
	},
	{
		"id": "53ee2b1ebe86",
		"ts": "2026-08-04T10:34:04.888Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 897438.93,
		"hash": "53ee2b1ebe864b94490b51d9c4edcfc14b2335395b1005a74cd65191e69f789e"
	},
	{
		"id": "b20f7eeafce5",
		"ts": "2026-08-04T10:34:05.188Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24991035.2,
		"hash": "b20f7eeafce5328bc5cdbaa7f3a189667a6c18012a2211e0401b8923ce408db7"
	},
	{
		"id": "077259caca29",
		"ts": "2026-08-04T10:34:05.458Z",
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
		"liquidityUsd": 3393330.24,
		"hash": "077259caca2918400e43abcdc33cb9e58dddbb996d927936eecb350a1424421b"
	},
	{
		"id": "74b17363d668",
		"ts": "2026-08-04T10:34:05.730Z",
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
		"liquidityUsd": 281904.64,
		"hash": "74b17363d6687ece59d71b4536ea3c753c8af51ce372c94c5d965ae6f7d5d210"
	},
	{
		"id": "48a20832a8ba",
		"ts": "2026-08-04T10:34:06.233Z",
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
		"liquidityUsd": 841115.88,
		"hash": "48a20832a8ba8002e79dd6d8cb71feaf50bd304848d912254088c408d3df8f3b"
	},
	{
		"id": "09b02c8f1135",
		"ts": "2026-08-04T10:34:06.480Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1899125.23,
		"hash": "09b02c8f11358524d76357e29d4797786763befc843df7fe3113f401a573f758"
	},
	{
		"id": "ee116e64e730",
		"ts": "2026-08-04T10:34:06.724Z",
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
		"liquidityUsd": 1424849.73,
		"hash": "ee116e64e73027e566517473a3805c77efc40b590e7e0c664b34b2f5c992f705"
	},
	{
		"id": "2e55ceb574e2",
		"ts": "2026-08-04T10:34:06.973Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1658068.53,
		"hash": "2e55ceb574e27942d097b7e498333a9578771c85dfd99648dde56fe853355204"
	},
	{
		"id": "cdfc17fdd012",
		"ts": "2026-08-04T10:34:07.233Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 62071.41,
		"hash": "cdfc17fdd012dfdf3b5b4b5fe7484f3d7d269db493c51d45ecef22c344e17842"
	},
	{
		"id": "30cb035e3fec",
		"ts": "2026-08-04T10:34:07.477Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1192633.73,
		"hash": "30cb035e3feca84a4e34f05cf2c613e11fc39268cd941a21b88488e257717fc3"
	},
	{
		"id": "b089d1cc7ecf",
		"ts": "2026-08-04T10:34:07.728Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3142204.98,
		"hash": "b089d1cc7ecfa3cbee5f14a3ec8fe01ab87dff2014f34e7586b80ce2024ae186"
	},
	{
		"id": "56aeca93fa93",
		"ts": "2026-08-04T10:34:07.977Z",
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
		"liquidityUsd": 692216.98,
		"hash": "56aeca93fa933b38d7cfbf269213f56adcb96b4842ba7f38c4e375cdc4e861e2"
	},
	{
		"id": "b4153bd46762",
		"ts": "2026-08-04T10:34:08.228Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9423939.24,
		"hash": "b4153bd46762e7705a498d3aa53276e13637b3d4048e8aee9a08242f43ed2f51"
	},
	{
		"id": "6303e2069fb4",
		"ts": "2026-08-04T07:35:19.917Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112146562.09,
		"hash": "6303e2069fb455c3cf3d0be067787ebae1d50654187f7e8e2d4f131ef47aa8bf"
	},
	{
		"id": "3e3bbd1afe86",
		"ts": "2026-08-04T07:35:20.367Z",
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
		"liquidityUsd": 17310524.3,
		"hash": "3e3bbd1afe86158b474466816d0413479daaa976adaaf86dd956cc4bf73fe054"
	},
	{
		"id": "492624c2a774",
		"ts": "2026-08-04T07:35:20.622Z",
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
		"liquidityUsd": 1114556.39,
		"hash": "492624c2a774274529260adb20dce77439cfa57ada1c114bdebd6fe9128e67c3"
	},
	{
		"id": "905c09d89706",
		"ts": "2026-08-04T07:35:21.076Z",
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
		"liquidityUsd": 24985864.18,
		"hash": "905c09d89706069493bf6e6f5e6ae21e97069a1b79faa4089ea6b32b68002ed7"
	},
	{
		"id": "38fcd4d993fd",
		"ts": "2026-08-04T07:35:21.535Z",
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
		"liquidityUsd": 4397086.43,
		"hash": "38fcd4d993fd977af146fdcb471bfa83111b350c54046208b78301f70df52320"
	},
	{
		"id": "978d346cc10f",
		"ts": "2026-08-04T07:35:21.774Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 897430.9,
		"hash": "978d346cc10f95087874090759b4947ef0cd24ed3520f5ec71bac0620ca8c784"
	},
	{
		"id": "eb1ce967cab0",
		"ts": "2026-08-04T07:35:22.019Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24985864.18,
		"hash": "eb1ce967cab0c0d6abaeb99b8554e06b1c9da4a17491e8423fb298ab0ca8042b"
	},
	{
		"id": "857c8d925217",
		"ts": "2026-08-04T07:35:22.266Z",
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
		"liquidityUsd": 3408338.82,
		"hash": "857c8d925217471b41df3e1b5ba0899ffae558c9acb0005f3c959b39522a2a7f"
	},
	{
		"id": "dc600be87cb6",
		"ts": "2026-08-04T07:35:22.508Z",
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
		"liquidityUsd": 286534.97,
		"hash": "dc600be87cb6c30b8c72c5ab7b645b50119d503974ac919c4fb5bda389b6a4af"
	},
	{
		"id": "6a109e33080c",
		"ts": "2026-08-04T07:35:22.749Z",
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
		"liquidityUsd": 902402.92,
		"hash": "6a109e33080cd58c48e8eae979e23a7a451e68b806e088c7181f88234db2a027"
	},
	{
		"id": "9a7bf963c5cb",
		"ts": "2026-08-04T07:35:22.973Z",
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
		"liquidityUsd": 1492940.97,
		"hash": "9a7bf963c5cb54c456609bc39d86bd96ff3a2a0f472162e578947bbc9f0f53a0"
	},
	{
		"id": "00eb45b425cd",
		"ts": "2026-08-04T07:35:23.210Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1881010.08,
		"hash": "00eb45b425cdfcb21cae8ff1215821369cd8a3d4d27f0cd7159a3167c16b4fd3"
	},
	{
		"id": "b6a095b95769",
		"ts": "2026-08-04T07:35:23.433Z",
		"symbol": "MiroShark",
		"token": "0xd7bc6a05a56655FB2052F742B012d1DFD66e1BA3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 248040.13,
		"hash": "b6a095b9576901ca695759c126d684814bf9f3301e3dd03c2fb6e5d592fd100c"
	},
	{
		"id": "ecc477938939",
		"ts": "2026-08-04T07:35:23.655Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1659740.07,
		"hash": "ecc477938939f9cc9b94f513c7340f607ad433bde8ff443ee5facf717a3909c2"
	},
	{
		"id": "abd5ca6e2ec0",
		"ts": "2026-08-04T07:35:23.888Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1205988.24,
		"hash": "abd5ca6e2ec03b6e72c9df897a82938addefb6809ea142e507bd9c214862fdff"
	},
	{
		"id": "76066a912a45",
		"ts": "2026-08-04T07:35:24.124Z",
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
		"liquidityUsd": 697141.71,
		"hash": "76066a912a4559c6b598332cde30d5f34303564f04b4fed97d7399c6e855e9ec"
	},
	{
		"id": "087959061a33",
		"ts": "2026-08-04T07:35:24.346Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3082621.64,
		"hash": "087959061a333976fe28bf889433628696b22eea8aa907eb02f878d10a78d15a"
	},
	{
		"id": "a120959fcea2",
		"ts": "2026-08-04T07:35:24.573Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 365640.94,
		"hash": "a120959fcea238b22cc9bc5c7f4fa4682e30fe162e5ec1c0dbcbb15976ebb6c8"
	},
	{
		"id": "4faf4af98cae",
		"ts": "2026-08-04T04:09:50.396Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112161966.16,
		"hash": "4faf4af98caeb3953fc5cb16c038a92dca73a0d2d5905d455f15908726ec12a1"
	},
	{
		"id": "c8cc43ee6859",
		"ts": "2026-08-04T04:09:50.833Z",
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
		"liquidityUsd": 17311738.11,
		"hash": "c8cc43ee685925de162dfebe88df8c6e9758c57889265ea1bcd314addaa5a3f2"
	},
	{
		"id": "2f09834ffef1",
		"ts": "2026-08-04T04:09:51.069Z",
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
		"liquidityUsd": 1118785.58,
		"hash": "2f09834ffef153941068ee9fd222e89e34d4bc51b8bc6c2af8eb827cfc26e7ab"
	},
	{
		"id": "88f8133394df",
		"ts": "2026-08-04T04:09:51.507Z",
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
		"liquidityUsd": 25064212.62,
		"hash": "88f8133394df71fc0ff6b6d095798341f4fd210dd88d780f811a008e38304191"
	},
	{
		"id": "e52db9ca10e5",
		"ts": "2026-08-04T04:09:51.741Z",
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
		"liquidityUsd": 4396409.67,
		"hash": "e52db9ca10e5f04d19c71341fd18dfd6f6d2f3fe9fe61e4eb2d5dcd24d5029bd"
	},
	{
		"id": "2141353d4428",
		"ts": "2026-08-04T04:09:51.994Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 895167.65,
		"hash": "2141353d44287565d61b004a81e4b2b80b407e7d90a3ecbf8c7b61b9cfe35407"
	},
	{
		"id": "0cf2f65a6746",
		"ts": "2026-08-04T04:09:52.223Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25058551.34,
		"hash": "0cf2f65a67465ab737cdeea2db11e588656ecbef5837345058e74ee8c37ee14b"
	},
	{
		"id": "89eeab73140b",
		"ts": "2026-08-04T04:09:52.463Z",
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
		"liquidityUsd": 3405991.56,
		"hash": "89eeab73140b5ae8dd478f3545dd1694170d2de398273ff98348ce1fd4814f9c"
	},
	{
		"id": "422fed602e9b",
		"ts": "2026-08-04T04:09:52.696Z",
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
		"liquidityUsd": 808926.89,
		"hash": "422fed602e9b9bc8df819de7e417e71fce2d1fffe4bce61bcef9724c0d12018e"
	},
	{
		"id": "689130e3a441",
		"ts": "2026-08-04T04:09:52.928Z",
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
		"liquidityUsd": 286557.5,
		"hash": "689130e3a441e6abb2639f06bc4575f5c63b41690b499768ff6dcdd7b54ed5a2"
	},
	{
		"id": "8064253a631c",
		"ts": "2026-08-04T04:09:53.147Z",
		"symbol": "MiroShark",
		"token": "0xd7bc6a05a56655FB2052F742B012d1DFD66e1BA3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 252757.47,
		"hash": "8064253a631c66c0e2c91a1239bebb38a1c2c3d46c0d944254cbdf3f6833ff07"
	},
	{
		"id": "3f6df951d396",
		"ts": "2026-08-04T04:09:53.365Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1202252.43,
		"hash": "3f6df951d3963cf1e911284e4df773d3449649e939fca9a91f244d3a40588419"
	},
	{
		"id": "4bd6c988d5b7",
		"ts": "2026-08-04T04:09:53.583Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 51081.55,
		"hash": "4bd6c988d5b7bbf28fa48a17130df65b0b9aadd2b39ecdd7c57b07808b52464c"
	},
	{
		"id": "9716838701c2",
		"ts": "2026-08-04T04:09:53.799Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1660283.97,
		"hash": "9716838701c2421da0af9364cefb2e633aa1acc1c4f88d99d39b0e0c7e00577b"
	},
	{
		"id": "212a33ed9087",
		"ts": "2026-08-04T04:09:54.016Z",
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
		"liquidityUsd": 1514516.94,
		"hash": "212a33ed9087a08bdae5f8521b2cbded1ea761e954b69f0a42f2350d8ba054a1"
	},
	{
		"id": "49ce4e3f0f42",
		"ts": "2026-08-04T04:09:54.234Z",
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
		"liquidityUsd": 700160.59,
		"hash": "49ce4e3f0f42d7cb08a3e7d79ce1ac7fbf5b1118f39fcba7233d6975c3323fa4"
	},
	{
		"id": "2918efe25d28",
		"ts": "2026-08-04T04:09:54.450Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 365301.09,
		"hash": "2918efe25d288177df34e480beeca08ccea56481cc5439af8915bfbd59f4a122"
	},
	{
		"id": "bf0252cb176a",
		"ts": "2026-08-04T04:09:54.666Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3137395.57,
		"hash": "bf0252cb176a4f2010342a198926b5c12031f0f0b2dede078706cfdf062fbc70"
	},
	{
		"id": "a846187304e2",
		"ts": "2026-08-04T00:05:35.695Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112068790.36,
		"hash": "a846187304e282ae39171b1bcf411bb5dda6608b57460ecbd384066b95e3909f"
	},
	{
		"id": "3e032f431c02",
		"ts": "2026-08-04T00:05:35.970Z",
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
		"liquidityUsd": 17193457.93,
		"hash": "3e032f431c02be943eda71deeb7e5220c3a6c78acd0c324a9dc5f3ce075677b9"
	},
	{
		"id": "63b899683b29",
		"ts": "2026-08-04T00:05:36.327Z",
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
		"liquidityUsd": 1115579.33,
		"hash": "63b899683b29dabfbabe4b3384f65255f976a8f641e3847c77251f307516df8d"
	},
	{
		"id": "762e81a09cc6",
		"ts": "2026-08-04T00:05:36.535Z",
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
		"liquidityUsd": 24785184.4,
		"hash": "762e81a09cc61a793c78d4a178016038434327146cc01b4e93ee65e872a15097"
	},
	{
		"id": "95c2c4630e55",
		"ts": "2026-08-04T00:05:36.841Z",
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
		"liquidityUsd": 4380104.5,
		"hash": "95c2c4630e55f8df466e6cd977e5ee45286ac13d2504be06060981ec2c72d6e0"
	},
	{
		"id": "e39b0922b5d2",
		"ts": "2026-08-04T00:05:37.126Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 897857.55,
		"hash": "e39b0922b5d2dff3c90e0ac5fc6dade02fa1682fbefdc9e5fe2036204766ee99"
	},
	{
		"id": "70e4842cfac3",
		"ts": "2026-08-04T00:05:37.429Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24785184.4,
		"hash": "70e4842cfac32c56dd1f324361605db6b0ebfe9a17a9de90deef91e38e1df916"
	},
	{
		"id": "d7d28ddd2c97",
		"ts": "2026-08-04T00:05:37.692Z",
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
		"liquidityUsd": 3767832.45,
		"hash": "d7d28ddd2c97270b11bba8e46103c7d92c515d55e7b0050c73f42512f6610c76"
	},
	{
		"id": "2f7558a25b8f",
		"ts": "2026-08-04T00:05:37.956Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 823779.99,
		"hash": "2f7558a25b8f61cec2215fbc300fac567243bf97866e22a111f97cf0348e83fd"
	},
	{
		"id": "87e44d507055",
		"ts": "2026-08-04T00:05:38.179Z",
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
		"liquidityUsd": 296751.24,
		"hash": "87e44d507055a48c7b5b211d6e129729d8a4c25d33d09e0a6e78220c8e97e231"
	},
	{
		"id": "6bfbfc58dc42",
		"ts": "2026-08-04T00:05:38.390Z",
		"symbol": "MiroShark",
		"token": "0xd7bc6a05a56655FB2052F742B012d1DFD66e1BA3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 262194.56,
		"hash": "6bfbfc58dc42ef01f5ac07231355fed5686b4beaf533220a5a8e93da1f212a11"
	},
	{
		"id": "6189bce4bd3c",
		"ts": "2026-08-04T00:05:38.727Z",
		"symbol": "BLOCKTRONICS",
		"token": "0x7afE438411ee3959C7De6f7fB76bf9C769320bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 172918.88,
		"hash": "6189bce4bd3cdba40328f2398e5e860068a27f0f88bbb3b5b846ae4937752d10"
	},
	{
		"id": "86e68ce7a305",
		"ts": "2026-08-04T00:05:38.928Z",
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
		"liquidityUsd": 1486915.71,
		"hash": "86e68ce7a305672de120701fc47c4ca8d030aded0314068f70f5563b15795cd3"
	},
	{
		"id": "2c90d17c67fc",
		"ts": "2026-08-04T00:05:39.123Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1224438.85,
		"hash": "2c90d17c67fcdbbfee21a92ebfae947ea9608388671d94d99205fc7a73ebdf28"
	},
	{
		"id": "bfdf32b2cdb5",
		"ts": "2026-08-04T00:05:39.331Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9571834.6,
		"hash": "bfdf32b2cdb5d2282a58119e978d5f08788f060ef69f7be01ef8adbbed6137ea"
	},
	{
		"id": "581b24ba1052",
		"ts": "2026-08-04T00:05:39.538Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1673116.01,
		"hash": "581b24ba1052c5f983b5be2a22434a1ab3f94766688543698750acda33bd2a83"
	},
	{
		"id": "b1ae5f0efa29",
		"ts": "2026-08-04T00:05:39.771Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 363930.63,
		"hash": "b1ae5f0efa29b508afc73077dfd5e1590f3dfb8c514c19bb4a0a522ce0a80250"
	},
	{
		"id": "b31ede5ff67c",
		"ts": "2026-08-04T00:05:39.977Z",
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
		"liquidityUsd": 711300.19,
		"hash": "b31ede5ff67c77594cf14c152c81f4972f7c921f714e24897f658f3f180359a1"
	},
	{
		"id": "315a02c6f635",
		"ts": "2026-08-03T22:05:18.417Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112190033.02,
		"hash": "315a02c6f635ebc0c2218cf401a97169a881e5a686f044709da6480ae4e98b48"
	},
	{
		"id": "52da59ce2fd6",
		"ts": "2026-08-03T22:05:18.667Z",
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
		"liquidityUsd": 16002663.17,
		"hash": "52da59ce2fd61e3d5f8cb18689a5163e5d231821d1f37b416bb51be88277484b"
	},
	{
		"id": "34d61609a9c7",
		"ts": "2026-08-03T22:05:19.109Z",
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
		"liquidityUsd": 1118027.61,
		"hash": "34d61609a9c79b9ebc9f886f0ce6599ae7c5784308eed88f0c4e2befe6689108"
	},
	{
		"id": "a4a148c1e538",
		"ts": "2026-08-03T22:05:19.361Z",
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
		"liquidityUsd": 24814960.58,
		"hash": "a4a148c1e5381a541a494060ea06e6a29c6d305131e5167f77b9b76deee7cf1d"
	},
	{
		"id": "857104e6440a",
		"ts": "2026-08-03T22:05:19.615Z",
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
		"liquidityUsd": 4393728.06,
		"hash": "857104e6440a8ead8d0ae95c313b3953c25f4e8d78d70874784215b1b0b7a9ba"
	},
	{
		"id": "6f9cc690e62b",
		"ts": "2026-08-03T22:05:19.859Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 897857.55,
		"hash": "6f9cc690e62b3c202d8bd0c6391727257dfef21a05ae976cf35d676c2ca89712"
	},
	{
		"id": "3cba38850096",
		"ts": "2026-08-03T22:05:20.123Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24814960.58,
		"hash": "3cba38850096219ba7477a4ea7599e5d08c5beae40bf9673e58965d380a91ebb"
	},
	{
		"id": "1226c7f887d6",
		"ts": "2026-08-03T22:05:20.378Z",
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
		"liquidityUsd": 3826521.85,
		"hash": "1226c7f887d6475fe73d65cc167e021b8119ffe5b3cfb1dd18e3d11d2dca91f0"
	},
	{
		"id": "bc9f5698fa74",
		"ts": "2026-08-03T22:05:20.635Z",
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
		"liquidityUsd": 805735.83,
		"hash": "bc9f5698fa74cb597d4f8d2b3be3e57764ae396898b47cada8632867b91a3f93"
	},
	{
		"id": "c23757d4dab0",
		"ts": "2026-08-03T22:05:20.889Z",
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
		"liquidityUsd": 298427.13,
		"hash": "c23757d4dab01c6a73530cf11b650d80bf2659c5b70fba43dc9a9d9407a38aa3"
	},
	{
		"id": "55d8479ee8d3",
		"ts": "2026-08-03T22:05:21.115Z",
		"symbol": "MiroShark",
		"token": "0xd7bc6a05a56655FB2052F742B012d1DFD66e1BA3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 259027.89,
		"hash": "55d8479ee8d32f9f11a757566a027f6fdf29fe3d12f6dab4ce05d55906bf23db"
	},
	{
		"id": "4632115f90aa",
		"ts": "2026-08-03T22:05:21.339Z",
		"symbol": "BLOCKTRONICS",
		"token": "0x7afE438411ee3959C7De6f7fB76bf9C769320bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 177522.53,
		"hash": "4632115f90aaf17785bbf8ed2597727992f8c6ee48b89535790b1abc6fb7ece8"
	},
	{
		"id": "3a46ef136cf1",
		"ts": "2026-08-03T22:05:21.566Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1243164.16,
		"hash": "3a46ef136cf1c237ee156f532f6807a38a0010e461af2dfe52e7dfc8811ea9a2"
	},
	{
		"id": "4710f74282e6",
		"ts": "2026-08-03T22:05:21.799Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9585165.36,
		"hash": "4710f74282e6887fdf8cf0e7e0f50031b9f012261dedefd9a71dbcfea2edfc49"
	},
	{
		"id": "8e5a5e3fcde3",
		"ts": "2026-08-03T22:05:22.023Z",
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
		"liquidityUsd": 1528687.02,
		"hash": "8e5a5e3fcde320639ebd9238e16733b508004724b212c01585696ead02f56d9b"
	},
	{
		"id": "464243853cd0",
		"ts": "2026-08-03T22:05:22.248Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1676523.41,
		"hash": "464243853cd0fbafe191ee1c9277e1b7c8c4efde90367630107988aa2d7f2da3"
	},
	{
		"id": "ddacf09c8003",
		"ts": "2026-08-03T22:05:22.479Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 364683.35,
		"hash": "ddacf09c8003293018e5633f7332c7a3c61895375e33047e71fa66cf5cbfc57a"
	},
	{
		"id": "b2ea5c468d41",
		"ts": "2026-08-03T22:05:22.712Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 285365.53,
		"hash": "b2ea5c468d4127412dc7b975fd3c97bfdc2124688be4b2afd602005adee62537"
	},
	{
		"id": "672a0f38d266",
		"ts": "2026-08-03T20:24:34.632Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112447569.42,
		"hash": "672a0f38d266643dd72214696a6ee6b5168b3f02dd4643390a83e5e3312c242e"
	},
	{
		"id": "3d77c63cbff8",
		"ts": "2026-08-03T20:24:34.874Z",
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
		"liquidityUsd": 17201168.96,
		"hash": "3d77c63cbff8f62ca8bcf11693439712b41566e7c8731eb6ba8fa23f5a0ee31e"
	},
	{
		"id": "fb905a3332fe",
		"ts": "2026-08-03T20:24:35.123Z",
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
		"liquidityUsd": 1118417.3,
		"hash": "fb905a3332fe1a6dac325a0c759f7823aff0f00d76b77931225695617837395c"
	},
	{
		"id": "4623928ce53d",
		"ts": "2026-08-03T20:24:35.411Z",
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
		"liquidityUsd": 24878324.22,
		"hash": "4623928ce53dd193dcc62d650f71a376a775bb08de7ea0a05ca94b84bf65f2c5"
	},
	{
		"id": "531a9bf4d295",
		"ts": "2026-08-03T20:24:35.743Z",
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
		"liquidityUsd": 4411334.23,
		"hash": "531a9bf4d2959b0111f4503597a3dd3cae687a95fc9a2264cc4c1a256ddefa34"
	},
	{
		"id": "9cb3acd24d32",
		"ts": "2026-08-03T20:24:36.049Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 903843.31,
		"hash": "9cb3acd24d3224843354d6207855751fa606373984e40f9af23ecc47e06b20f3"
	},
	{
		"id": "309e732f9b78",
		"ts": "2026-08-03T20:24:36.308Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24878324.22,
		"hash": "309e732f9b78f92e6292eca89695fc4e078afb3f985a58461082809a72bc65b2"
	},
	{
		"id": "524ef0fb1d43",
		"ts": "2026-08-03T20:24:36.564Z",
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
		"liquidityUsd": 3852354.7,
		"hash": "524ef0fb1d43029f5e0f59dcdc2d0ea0b35fa294e2f145f5cba429bac4c0aa05"
	},
	{
		"id": "6766338cc816",
		"ts": "2026-08-03T20:24:36.802Z",
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
		"liquidityUsd": 846381.67,
		"hash": "6766338cc8169d172f9b301d57769b8c8d507943cc6de15ad66e6b28794c5465"
	},
	{
		"id": "334c0867ad7f",
		"ts": "2026-08-03T20:24:37.047Z",
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
		"liquidityUsd": 303780.27,
		"hash": "334c0867ad7f14113f8ee91021f526b8e2bd1ddf5f925a3c79d6a97c5f0dd619"
	},
	{
		"id": "794286424639",
		"ts": "2026-08-03T20:24:37.271Z",
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
		"liquidityUsd": 1724929.67,
		"hash": "794286424639ab04a8ec028d6042aa4955e762bdc82452109c1df4ee3cb8e000"
	},
	{
		"id": "569758697731",
		"ts": "2026-08-03T20:24:37.488Z",
		"symbol": "MiroShark",
		"token": "0xd7bc6a05a56655FB2052F742B012d1DFD66e1BA3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 262680.65,
		"hash": "569758697731015f774be75fb9dff579d24df344cc2ee1cea69c58c61bcdeaaa"
	},
	{
		"id": "185bd5e31f79",
		"ts": "2026-08-03T20:24:37.707Z",
		"symbol": "BLOCKTRONICS",
		"token": "0x7afE438411ee3959C7De6f7fB76bf9C769320bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 176560.35,
		"hash": "185bd5e31f793339e943c158da659079d6e2edb23faee4abbb8cc1f8a5063b12"
	},
	{
		"id": "6327dc36e1ef",
		"ts": "2026-08-03T20:24:37.932Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 290996.84,
		"hash": "6327dc36e1ef0b61f92405ef4201758f4409d496309ff6d7be2e74665fc1597f"
	},
	{
		"id": "d1228f04fa4e",
		"ts": "2026-08-03T20:24:38.153Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1688924.9,
		"hash": "d1228f04fa4e34a237635c4962c6c1ad1e058d8e722045e5edbe7a783273d98a"
	},
	{
		"id": "837995338719",
		"ts": "2026-08-03T20:24:38.423Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9651559.57,
		"hash": "83799533871972bc60d03e30a451b04a7c6ed05f273b73df3dd2aac5e139100f"
	},
	{
		"id": "f1f5042081b0",
		"ts": "2026-08-03T20:24:38.647Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1242481.77,
		"hash": "f1f5042081b029f1d508fa45e20eea4edb7ef9c0e0e1dcc841912de802edd358"
	},
	{
		"id": "824b19f24cae",
		"ts": "2026-08-03T20:24:38.866Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 370814.3,
		"hash": "824b19f24cae04d30a4921da3d3edbda6dcb7934743a4f4e3c67a86208ae336f"
	},
	{
		"id": "a7582d9b7e65",
		"ts": "2026-08-03T18:48:21.674Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112370607.66,
		"hash": "a7582d9b7e65299449b08278c79c912cfabd917377c1621d7a547a9056499ba6"
	},
	{
		"id": "5822c411a46d",
		"ts": "2026-08-03T18:48:22.027Z",
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
		"liquidityUsd": 18012935.5,
		"hash": "5822c411a46d9f027dd00fa8824f61ab43515b83bb7bb135fd2b010dca77d04c"
	},
	{
		"id": "b0cab70d068b",
		"ts": "2026-08-03T18:48:22.233Z",
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
		"liquidityUsd": 1117257.62,
		"hash": "b0cab70d068bdbaba249d2e21b2cbe59be8d24ece032f353d03c35fd78959d41"
	},
	{
		"id": "ca33136f68de",
		"ts": "2026-08-03T18:48:22.423Z",
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
		"liquidityUsd": 24875880.57,
		"hash": "ca33136f68deb6155826155bf909ea5bbae86d988a43c409a38c2ee6d10360cd"
	},
	{
		"id": "07414e3aa75d",
		"ts": "2026-08-03T18:48:22.627Z",
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
		"liquidityUsd": 4404006.76,
		"hash": "07414e3aa75de01590b772f11012314c2525a436a323d322c42ff670a75f7cfb"
	},
	{
		"id": "dde713a3784d",
		"ts": "2026-08-03T18:48:22.818Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 898554.49,
		"hash": "dde713a3784df97154d1b7cb522dba589275810ba2c91f7aaf3ecb124e75c5c5"
	},
	{
		"id": "985d73e949f8",
		"ts": "2026-08-03T18:48:23.017Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24875880.57,
		"hash": "985d73e949f816c4d1d52d7a7c8a375fcb38531ad995dd7c61139bc2db1c4a72"
	},
	{
		"id": "68de0b487976",
		"ts": "2026-08-03T18:48:23.207Z",
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
		"liquidityUsd": 3839823.09,
		"hash": "68de0b487976e9e7c81d29d5677856b9ed3de2d5ed4a2ffa877320db1d8be94d"
	},
	{
		"id": "433a7dfac240",
		"ts": "2026-08-03T18:48:23.408Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 835068.49,
		"hash": "433a7dfac24077eb6837f2fe16ec0034d7a8b3fa2a2e4b5445ccc084b4fd272a"
	},
	{
		"id": "f01bc8279c6a",
		"ts": "2026-08-03T18:48:23.603Z",
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
		"liquidityUsd": 305838.1,
		"hash": "f01bc8279c6af4c6a703bbc5c2a20741a2d8b59b98342035cff4ac6433bf5ce1"
	},
	{
		"id": "421ef8fdb542",
		"ts": "2026-08-03T18:48:23.803Z",
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
		"liquidityUsd": 1700493.5,
		"hash": "421ef8fdb542b25f054e5e2adce13b5c5cd9ab4508f26c0cd139719751a40071"
	},
	{
		"id": "ca2793030cd7",
		"ts": "2026-08-03T18:48:23.996Z",
		"symbol": "MiroShark",
		"token": "0xd7bc6a05a56655FB2052F742B012d1DFD66e1BA3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 253192.71,
		"hash": "ca2793030cd715e831871625187fdba830f4abb978aaa1fb765c9c33c821e24c"
	},
	{
		"id": "3788ca111b85",
		"ts": "2026-08-03T18:48:24.211Z",
		"symbol": "BLOCKTRONICS",
		"token": "0x7afE438411ee3959C7De6f7fB76bf9C769320bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 186334.79,
		"hash": "3788ca111b85908931479f1d91f1622e8d6917fc8e2d89a74e1dc2c29462585e"
	},
	{
		"id": "4dfcef41cd04",
		"ts": "2026-08-03T18:48:24.387Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 294202.28,
		"hash": "4dfcef41cd0414a4e2a5942e07fec261603747fe2f3c395ef3899f5dded88a87"
	},
	{
		"id": "d4a82633051a",
		"ts": "2026-08-03T18:48:24.589Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 54438.65,
		"hash": "d4a82633051afec37639dbbd209bf1834f441c4a7eba9e08fa21e745fddf4838"
	},
	{
		"id": "22555ae4945f",
		"ts": "2026-08-03T18:48:24.770Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1251884.7,
		"hash": "22555ae4945f3ca14bc93de941e8db23697c7c29bac41acc8a1303a407ab286a"
	},
	{
		"id": "1d28d3dca051",
		"ts": "2026-08-03T18:48:24.977Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9593250.92,
		"hash": "1d28d3dca05103e8685531892a2e692c536fc7f226dee7bc9e1a263b72e5ca2c"
	},
	{
		"id": "d42341842e0b",
		"ts": "2026-08-03T18:48:25.159Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 373167.93,
		"hash": "d42341842e0b00605829d09a750f44432a4af77fac2be897d2a0222ce194ec53"
	},
	{
		"id": "067699354fe0",
		"ts": "2026-08-03T16:20:36.862Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112161121.13,
		"hash": "067699354fe0a1a7d7d6916708e348fdb190964fe9303cfdbefd9497e1e51ef1"
	},
	{
		"id": "62a78264139b",
		"ts": "2026-08-03T16:20:37.133Z",
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
		"liquidityUsd": 17399860.79,
		"hash": "62a78264139b910f33ef75ee6574b88a391f9b2c1deb2e51e2e2e3aa08d0e932"
	},
	{
		"id": "2a3baac37db9",
		"ts": "2026-08-03T16:20:37.388Z",
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
		"liquidityUsd": 1114284.24,
		"hash": "2a3baac37db965816f03286ef51df7c4e4bb2ce18a34ffe4ad8d03d2fabff3ba"
	},
	{
		"id": "ee2dcac94d37",
		"ts": "2026-08-03T16:20:37.644Z",
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
		"liquidityUsd": 24784543.1,
		"hash": "ee2dcac94d37e9cbeed858826e6886aa273f492d5136eda6a277f506fdfc5c6c"
	},
	{
		"id": "6afc7c569258",
		"ts": "2026-08-03T16:20:37.911Z",
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
		"liquidityUsd": 4405359.41,
		"hash": "6afc7c569258bc267252283471033a88aa89704e8b403b30f34eb7a44654e0a9"
	},
	{
		"id": "eff496f55a89",
		"ts": "2026-08-03T16:20:38.167Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 894071.53,
		"hash": "eff496f55a89fc96b56a06ae334d8a7c60bfd0199aaae95635d193e8c1399eac"
	},
	{
		"id": "5473b1a9dd6f",
		"ts": "2026-08-03T16:20:38.427Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24784543.1,
		"hash": "5473b1a9dd6f2d754251093aef3e18cf51605c6270d55ced6865ad9d889f90d0"
	},
	{
		"id": "7e745eac5b53",
		"ts": "2026-08-03T16:20:38.688Z",
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
		"liquidityUsd": 3871170.75,
		"hash": "7e745eac5b53774f411ee33012a650a8c608575308a105a860c316bafeadeee3"
	},
	{
		"id": "28ead189bba3",
		"ts": "2026-08-03T16:20:38.949Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 989536.08,
		"hash": "28ead189bba33d62b4b64010d30a07ebc344252c1b45e93bda3a0820df53604f"
	},
	{
		"id": "c96b038f188b",
		"ts": "2026-08-03T16:20:39.207Z",
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
		"liquidityUsd": 301043.87,
		"hash": "c96b038f188bfa6c4efadac348ab98c078be1838927b2b56964e460bc6ce4ca7"
	},
	{
		"id": "de9496af15b4",
		"ts": "2026-08-03T16:20:39.448Z",
		"symbol": "MiroShark",
		"token": "0xd7bc6a05a56655FB2052F742B012d1DFD66e1BA3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 267592.79,
		"hash": "de9496af15b49840dbe3ae6d9aed0353fd5ae92b6d9323d60a43d5f89971bf95"
	},
	{
		"id": "daa1018db7fa",
		"ts": "2026-08-03T16:20:39.685Z",
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
		"liquidityUsd": 1694510.25,
		"hash": "daa1018db7fa14c7ab6ffbc5b7a1bb93aa4f41dd50814e5f75b12fbdee758dde"
	},
	{
		"id": "d703e0bee5a4",
		"ts": "2026-08-03T16:20:39.924Z",
		"symbol": "BLOCKTRONICS",
		"token": "0x7afE438411ee3959C7De6f7fB76bf9C769320bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 185916.61,
		"hash": "d703e0bee5a428674a0030aa59e4031fa5bc92cda94339662e7fe2b87ff16555"
	},
	{
		"id": "961f233b7de7",
		"ts": "2026-08-03T16:20:40.164Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 56057.6,
		"hash": "961f233b7de7971eea10601340e095d3fd3b4db37038a25e24eec5ee0cb81b9b"
	},
	{
		"id": "3f19e9e71906",
		"ts": "2026-08-03T16:20:40.401Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 284795.68,
		"hash": "3f19e9e71906a5cac9915acac009aa62920e836dd2fbcd957946c3c9299f8f76"
	},
	{
		"id": "9a91b7718060",
		"ts": "2026-08-03T16:20:40.639Z",
		"symbol": "BASEMATE",
		"token": "0x07E61D8a4e197dfC269e90D7ECe1dF0D26702bA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 131062.56,
		"hash": "9a91b77180602529fdc106846335fae4c58dd3f3e13f34405b0ce46aea76aa65"
	},
	{
		"id": "1079e10e3288",
		"ts": "2026-08-03T16:20:40.877Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1240809.4,
		"hash": "1079e10e3288cc6c8813ec966b75faf8f8f5b87f129315054763efc4bfe01da4"
	},
	{
		"id": "09bf2845c519",
		"ts": "2026-08-03T16:20:41.116Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9434017.69,
		"hash": "09bf2845c519727c50616fcccdcf678f362719e96e5cd75dc5c767a3cbbaf41e"
	},
	{
		"id": "e16b702eef57",
		"ts": "2026-08-03T13:38:03.234Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111347562.77,
		"hash": "e16b702eef570aeff639903dc648d8235b2b821021af381582b37241fc814258"
	},
	{
		"id": "0709db066e34",
		"ts": "2026-08-03T13:38:03.568Z",
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
		"liquidityUsd": 17743175.45,
		"hash": "0709db066e34901ddfae4334bdeb6499a9a6bd07635aa75e5094be379c106d45"
	},
	{
		"id": "aa564690d602",
		"ts": "2026-08-03T13:38:03.950Z",
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
		"liquidityUsd": 1102496.82,
		"hash": "aa564690d6025ef553a7f5a09fd8fa5a46849ae2163f2309900771c1a0feefae"
	},
	{
		"id": "a8b200596bb4",
		"ts": "2026-08-03T13:38:04.185Z",
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
		"liquidityUsd": 24571339.87,
		"hash": "a8b200596bb432570d02bb69b6fc947826acaf9b0017c48bcc82e50e5a62c840"
	},
	{
		"id": "7aefe1ee108f",
		"ts": "2026-08-03T13:38:04.369Z",
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
		"liquidityUsd": 4345962.77,
		"hash": "7aefe1ee108f13839f59c1dfe8d8693857c3b965cc65a6a08fcf59204a8206bc"
	},
	{
		"id": "5a845f9e815a",
		"ts": "2026-08-03T13:38:04.574Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 890046.48,
		"hash": "5a845f9e815a653730fc98c1b700b3775d31c0e37287e46778485644b71c8a1a"
	},
	{
		"id": "70620334ae2c",
		"ts": "2026-08-03T13:38:04.773Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24571339.87,
		"hash": "70620334ae2c743c6c9fb0cb162d6650a196afb7a5e2c323882ac5843527588a"
	},
	{
		"id": "55f0b91ac2bb",
		"ts": "2026-08-03T13:38:04.985Z",
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
		"liquidityUsd": 4057000.19,
		"hash": "55f0b91ac2bbcb38542f8d29ea23e92179a10bb8d6e4b0454ba4c6c94b439bfe"
	},
	{
		"id": "33aba2399e7b",
		"ts": "2026-08-03T13:38:05.170Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1033867.74,
		"hash": "33aba2399e7b62cd040bed77bb8096d5a7bf366ec5b631e7c681df36af27ee9b"
	},
	{
		"id": "535aa619ad27",
		"ts": "2026-08-03T13:38:05.360Z",
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
		"liquidityUsd": 301005.64,
		"hash": "535aa619ad276a18f9b746f1aebdc5ee116fdda7f68559901077a69746cbef15"
	},
	{
		"id": "6279510eb965",
		"ts": "2026-08-03T13:38:05.544Z",
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
		"liquidityUsd": 1637400.67,
		"hash": "6279510eb9652f495460a7b1b462b201a0326bd798b1ab0396941f034d2e3ba5"
	},
	{
		"id": "0a066014f342",
		"ts": "2026-08-03T13:38:05.730Z",
		"symbol": "MiroShark",
		"token": "0xd7bc6a05a56655FB2052F742B012d1DFD66e1BA3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 271905.96,
		"hash": "0a066014f3423534116ac252ec19926022036782f6c5adf70b532bf2ef9eefd1"
	},
	{
		"id": "d19a9b54fe61",
		"ts": "2026-08-03T13:38:05.929Z",
		"symbol": "BLOCKTRONICS",
		"token": "0x7afE438411ee3959C7De6f7fB76bf9C769320bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 194957.34,
		"hash": "d19a9b54fe61d646a68b4dc6652f708bade3d087f724af3dee7a3e31a762c280"
	},
	{
		"id": "c207fc329b67",
		"ts": "2026-08-03T13:38:06.133Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 57924,
		"hash": "c207fc329b67891bf51c8cd0131216e79c0a404a494109903d37da602d57d1a8"
	},
	{
		"id": "43b6f50580bb",
		"ts": "2026-08-03T13:38:06.318Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9293068.41,
		"hash": "43b6f50580bb7b7c4d8707c71c2b976efbefb206c51926c18655e05c4ef27d8b"
	},
	{
		"id": "0434ae65ca28",
		"ts": "2026-08-03T13:38:06.498Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 281284.85,
		"hash": "0434ae65ca28ea7270477cb45273b55e02a5b3659fbe87bb1f75096de176b114"
	},
	{
		"id": "9766f7c67add",
		"ts": "2026-08-03T13:38:06.697Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1695010.37,
		"hash": "9766f7c67add9f556552bc5fcbd0447f067ab0b1f6d034213e2aaca4596e91ce"
	},
	{
		"id": "6f418dbe4d37",
		"ts": "2026-08-03T13:38:06.878Z",
		"symbol": "BASEMATE",
		"token": "0x07E61D8a4e197dfC269e90D7ECe1dF0D26702bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 127271.62,
		"hash": "6f418dbe4d37d5358b4e958448325c724007f9ed2a53d9e96f85fb957332d995"
	},
	{
		"id": "59974d38256c",
		"ts": "2026-08-03T10:38:58.262Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111066146.75,
		"hash": "59974d38256ceefebf529f10563a5193f0433e469f3d554601b63f85b49f18fe"
	},
	{
		"id": "0fd95bd7cf36",
		"ts": "2026-08-03T10:38:58.752Z",
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
		"liquidityUsd": 16806139.71,
		"hash": "0fd95bd7cf36c131d4ca95596ed9cd8a574eadbba135dcd0fdf2aca899277bd1"
	}
]
