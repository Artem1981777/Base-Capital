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
	"updatedAt": "2026-08-19T06:36:44.614Z",
	"tokensScored": 12073,
	"verdictsIssued": 12073,
	"safe": 10464,
	"risky": 879,
	"likelyRug": 730,
	"ticks": 712
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "e63c7a91f139",
		"ts": "2026-08-19T06:36:40.432Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111722408.97,
		"hash": "e63c7a91f139550bd3c4f06ed02b4f72d11bf80c275b8ca04aef8eb44cf6ab28"
	},
	{
		"id": "7f00232e6e6e",
		"ts": "2026-08-19T06:36:40.675Z",
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
		"liquidityUsd": 16950992.02,
		"hash": "7f00232e6e6e12956ee0b7efab1376e9b0c0c62252ebbd26090ae73bcf77d08e"
	},
	{
		"id": "4f75479c7b8f",
		"ts": "2026-08-19T06:36:40.918Z",
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
		"liquidityUsd": 739045.04,
		"hash": "4f75479c7b8f1dca1f9c793cb4f82b0efce0da86308321b1d3a2fd27a4ec546b"
	},
	{
		"id": "fa25b4ddaa2f",
		"ts": "2026-08-19T06:36:41.163Z",
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
		"liquidityUsd": 26635215.78,
		"hash": "fa25b4ddaa2f87287457a8be0c15c9923ee36655282a79a0f75761b198594fc5"
	},
	{
		"id": "33345314694d",
		"ts": "2026-08-19T06:36:41.401Z",
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
		"liquidityUsd": 4237754.78,
		"hash": "33345314694d90befb45858083dffa495ebfce757baec32223fa127fbe8a5d20"
	},
	{
		"id": "bc3f46b968ec",
		"ts": "2026-08-19T06:36:41.660Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 891945.82,
		"hash": "bc3f46b968ec499dc895c6895ab6f4490212fbc12ff66200f482fee127127617"
	},
	{
		"id": "0c0eac6f7ba3",
		"ts": "2026-08-19T06:36:41.894Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4191042.05,
		"hash": "0c0eac6f7ba3632be199f5a689ac28b9cc39d6910424dab6b9c7a38964b7be2a"
	},
	{
		"id": "f69ca32c9755",
		"ts": "2026-08-19T06:36:42.130Z",
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
		"liquidityUsd": 3543660.52,
		"hash": "f69ca32c97559b0727d2495f41dbb6a471b053b53149ae3584e02173ca15bb3e"
	},
	{
		"id": "c273beecd44e",
		"ts": "2026-08-19T06:36:42.383Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 386201.53,
		"hash": "c273beecd44e89b6e3662b4a0f26c6d7e9a077e59f8aec3fb10cce5f9d73421f"
	},
	{
		"id": "f254f459a072",
		"ts": "2026-08-19T06:36:42.636Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3442303.28,
		"hash": "f254f459a072d7d46296e3d817c3a3b5951243ad6e7763ac77639d109d289202"
	},
	{
		"id": "61f7144802d0",
		"ts": "2026-08-19T06:36:42.857Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2865851.05,
		"hash": "61f7144802d09a18b38c0b927218eec1c46a94bc744707d4213dcad4937f7a5b"
	},
	{
		"id": "e0d5689c0c4d",
		"ts": "2026-08-19T06:36:43.075Z",
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
		"liquidityUsd": 491831.29,
		"hash": "e0d5689c0c4dbaf9f31afe359381cc4a74495367ddf0042a4317288009467aab"
	},
	{
		"id": "b2610b0479a5",
		"ts": "2026-08-19T06:36:43.295Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 516731.07,
		"hash": "b2610b0479a5fcd7ba6a209836aaef15bf01460f6dea183b32d7d571d523da95"
	},
	{
		"id": "2135a0661b94",
		"ts": "2026-08-19T06:36:43.512Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4191042.05,
		"hash": "2135a0661b94b240540ec389dadf040d3ca8c10a923fed261fef8bbabc093d49"
	},
	{
		"id": "47365ec73493",
		"ts": "2026-08-19T06:36:43.733Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9594446.43,
		"hash": "47365ec7349309979a8f6ef6622360c92de7270f0f11debd0bb312a0ce1ceb0f"
	},
	{
		"id": "e8e8ec75e929",
		"ts": "2026-08-19T06:36:43.950Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 62524.56,
		"hash": "e8e8ec75e929cad0106e5d0af6d6aecfb5374c31b49e5d2f48c0e5b24695f4cd"
	},
	{
		"id": "c56761f8ef11",
		"ts": "2026-08-19T06:36:44.174Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 861452.31,
		"hash": "c56761f8ef118c6cbb3acb7af62a6c17b2be671ed5377a4637606a8ad440d1fe"
	},
	{
		"id": "1dd24b467065",
		"ts": "2026-08-19T06:36:44.392Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2941326.53,
		"hash": "1dd24b4670656082d3bc8e0b879d1b5fc68beb05d628c7176ea9db9372c1080f"
	},
	{
		"id": "5ad58b7da51f",
		"ts": "2026-08-19T06:36:44.614Z",
		"symbol": "dogue",
		"token": "0xb2000000000000000000003779298b7eB3D8d501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 65976.37,
		"hash": "5ad58b7da51f8e4b63531a64cb6e64e25aa7921582563317b12e5d0639a7663a"
	},
	{
		"id": "15b316055686",
		"ts": "2026-08-19T05:25:14.668Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111728307.45,
		"hash": "15b316055686701b8ab85c5348771a8350e4fdbadbbd833012d328097dce53d7"
	},
	{
		"id": "070eef6fbc07",
		"ts": "2026-08-19T05:25:15.314Z",
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
		"liquidityUsd": 16999317.06,
		"hash": "070eef6fbc07ab6572af1d36fd1750aa9906f5c5fecc8d31fcf23acb95dcd44b"
	},
	{
		"id": "4fbc266f6475",
		"ts": "2026-08-19T05:25:15.777Z",
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
		"liquidityUsd": 743196.6,
		"hash": "4fbc266f64752fdbebd8ba8e0da55cdfe48e27f0e26a97c1960d22f837f0a4c9"
	},
	{
		"id": "b3fc5e71813e",
		"ts": "2026-08-19T05:25:16.207Z",
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
		"liquidityUsd": 26635419.68,
		"hash": "b3fc5e71813eebd9605b72bb4756c35a3f6251daf4bb44edfaaf597f1fa3141e"
	},
	{
		"id": "97e3970823ac",
		"ts": "2026-08-19T05:25:16.643Z",
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
		"liquidityUsd": 4245815.75,
		"hash": "97e3970823acda02fca9fb454d8ba3be23101e0d1251ae6633747151be714fa1"
	},
	{
		"id": "15d634c0ce08",
		"ts": "2026-08-19T05:25:16.887Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 891945.82,
		"hash": "15d634c0ce0869449cc515575dd04ed695c7121811cfc4c3cd021f2a89f6126d"
	},
	{
		"id": "85e94647dc3e",
		"ts": "2026-08-19T05:25:17.209Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4220587.96,
		"hash": "85e94647dc3ea74280d9d85ce9ec4524631a79778a82fb2c407ae87ea429d658"
	},
	{
		"id": "023ac3f307b9",
		"ts": "2026-08-19T05:25:17.625Z",
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
		"liquidityUsd": 3542491.36,
		"hash": "023ac3f307b9514eb3c64aaf8bc577dd2b2579296d40a4a54e4406c95e4e7314"
	},
	{
		"id": "b54dacc772f7",
		"ts": "2026-08-19T05:25:18.291Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 385095.93,
		"hash": "b54dacc772f702ca1a958bf790de7014218b2c87f91ffacf5da4116f35763900"
	},
	{
		"id": "c43a7bfdf09a",
		"ts": "2026-08-19T05:25:18.535Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 483421.93,
		"hash": "c43a7bfdf09afb3f7dcff6d059e2066b7d47b8e6331ebe92b522bd3d3289de78"
	},
	{
		"id": "8b3fa676a483",
		"ts": "2026-08-19T05:25:18.764Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3385533.46,
		"hash": "8b3fa676a483da3758966a61f324b85227d95817b057bb418d6a1153fdab051f"
	},
	{
		"id": "273215d9b280",
		"ts": "2026-08-19T05:25:18.983Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2855591.43,
		"hash": "273215d9b280e10780d909c2c505a9e527cb6ab72e1f70abd9ac04632a1281a9"
	},
	{
		"id": "fe0340f3cc0a",
		"ts": "2026-08-19T05:25:19.212Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4218989.72,
		"hash": "fe0340f3cc0a2d45aceb31907699d404d36ae277cf6b1245952d88841d14a8e2"
	},
	{
		"id": "638779552344",
		"ts": "2026-08-19T05:25:19.429Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 525798.03,
		"hash": "63877955234483ca7ea2086916221107a09a0963939cb4e93aafb9e38d83cad0"
	},
	{
		"id": "508dd7110b70",
		"ts": "2026-08-19T05:25:19.663Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9196845.63,
		"hash": "508dd7110b70ec7a5ce6149e6ade83d6e53ab30ef4e49d2c32b53434b93342ae"
	},
	{
		"id": "d338d30e02c7",
		"ts": "2026-08-19T05:25:19.884Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 51825.9,
		"hash": "d338d30e02c73596f54b72cfe42713f97c410bc9759a9acf36ee3f650650e6c3"
	},
	{
		"id": "972ad47f6dd7",
		"ts": "2026-08-19T05:25:20.106Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 871959.98,
		"hash": "972ad47f6dd78b598ad715c9ae69a8ddd8c4f0c9361961086e0ad1afad98fbbe"
	},
	{
		"id": "7ef7e611357c",
		"ts": "2026-08-19T05:25:20.333Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2944508.61,
		"hash": "7ef7e611357cd7a2893fc6cb59df11c7b20449a1658a6c0a4bc585dedaced4f1"
	},
	{
		"id": "2ebb534101ce",
		"ts": "2026-08-19T05:25:20.561Z",
		"symbol": "dogue",
		"token": "0xb2000000000000000000003779298b7eB3D8d501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 68668.22,
		"hash": "2ebb534101ce5f07250d71715d65bf19f656bb44fea01fca33e334e7438b34d4"
	},
	{
		"id": "a540aec3f33b",
		"ts": "2026-08-19T04:32:46.081Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111798685.1,
		"hash": "a540aec3f33b7d1d78354023b1178dd4a069dbb37c65fa80bf89dc188e77e6fc"
	},
	{
		"id": "4e013b0ba327",
		"ts": "2026-08-19T04:32:46.628Z",
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
		"liquidityUsd": 16450015.37,
		"hash": "4e013b0ba327a4ae1df09a7c2cb93a49287b5ff52b477d658ac4b2a0e8cd7f4e"
	},
	{
		"id": "66a16a0e69e5",
		"ts": "2026-08-19T04:32:46.880Z",
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
		"liquidityUsd": 743196.6,
		"hash": "66a16a0e69e522b99b2b3564cb58a0589ffa44ccebbc2ec87cac9c671ee2fc44"
	},
	{
		"id": "3cf2c492de92",
		"ts": "2026-08-19T04:32:47.127Z",
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
		"liquidityUsd": 26635654.55,
		"hash": "3cf2c492de9208d5739224bf02a96f940242070d6af2742907e7bfaf6d7a37a7"
	},
	{
		"id": "877e298098a0",
		"ts": "2026-08-19T04:32:47.373Z",
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
		"liquidityUsd": 4245119.76,
		"hash": "877e298098a04770cd80f45860fa28ab23e8c4ed155b7e641d37ce9b4a79f7e0"
	},
	{
		"id": "b39cd6a0a9bb",
		"ts": "2026-08-19T04:32:47.667Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 893639.78,
		"hash": "b39cd6a0a9bb16f0a679074ee93d767e6245162513f2feebfa46a7b5ccacb29b"
	},
	{
		"id": "6f9024501115",
		"ts": "2026-08-19T04:32:47.913Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4188169.53,
		"hash": "6f9024501115ef340a3075fd1bb56ee13ec39ea246915711e4e804a9b0df4d56"
	},
	{
		"id": "94e43f3ae1fa",
		"ts": "2026-08-19T04:32:48.164Z",
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
		"liquidityUsd": 3543399.27,
		"hash": "94e43f3ae1fa882af9d531543511c9e74fa7fefead59b2ee32f6c8774a4b77d6"
	},
	{
		"id": "3c895f7b5199",
		"ts": "2026-08-19T04:32:48.413Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 368619.99,
		"hash": "3c895f7b51996735789235461575c010e6180ce1450782d1204838f518b48f08"
	},
	{
		"id": "8e0cf6fa8b62",
		"ts": "2026-08-19T04:32:48.662Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 484003.44,
		"hash": "8e0cf6fa8b62896b1ff88acc5f8ddc284791f87e61795294d587234787b60a88"
	},
	{
		"id": "09227f2d47a0",
		"ts": "2026-08-19T04:32:48.895Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3329662.41,
		"hash": "09227f2d47a07935dd78a68ff167335dcce7bb1ad10c0c83fb16c9bb39b9f92b"
	},
	{
		"id": "e387fa5a7fc3",
		"ts": "2026-08-19T04:32:49.125Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2952000.98,
		"hash": "e387fa5a7fc3fae8135bbd9ecd6f539f3cad9b4f23226891d63e15565e72c311"
	},
	{
		"id": "f2c14734fc90",
		"ts": "2026-08-19T04:32:49.357Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4188169.53,
		"hash": "f2c14734fc9048712d1da0c40382e8d064add6c57ef18f3dce921e0107938ecf"
	},
	{
		"id": "03bbcb242285",
		"ts": "2026-08-19T04:32:49.591Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 530891.39,
		"hash": "03bbcb242285dc0be103d56693215f4625d535f4f1e07110c49047eee0b2b5b0"
	},
	{
		"id": "f8fabc90bdd9",
		"ts": "2026-08-19T04:32:49.820Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9278858.29,
		"hash": "f8fabc90bdd9259f3c2e7a99734f775bdd8c92003cacbfb2de6aa0918f84a212"
	},
	{
		"id": "89b85aaf2caf",
		"ts": "2026-08-19T04:32:50.052Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 873446.44,
		"hash": "89b85aaf2caf7ad0d035dd596f83b2ac5699b2fd5cb10154817f3cc03b3c29be"
	},
	{
		"id": "db7647b411c4",
		"ts": "2026-08-19T04:32:50.302Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55179.57,
		"hash": "db7647b411c4283f95bcabc5858ebedb46be9a17f842d77e8aba62dd6be6a45f"
	},
	{
		"id": "1afe0bd75935",
		"ts": "2026-08-19T04:32:50.535Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2945605.07,
		"hash": "1afe0bd75935e2d7b80a72a1e56e8e4d21785bb4094917f5078950d7310fd6cb"
	},
	{
		"id": "cfd039f31756",
		"ts": "2026-08-19T04:32:50.770Z",
		"symbol": "dogue",
		"token": "0xb2000000000000000000003779298b7eB3D8d501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 64049.88,
		"hash": "cfd039f3175693fa35283f78afa5706aeef9cefb38e18a5aa7dd126eb2344327"
	},
	{
		"id": "3d3e697f5bb1",
		"ts": "2026-08-19T03:42:24.603Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111807604.09,
		"hash": "3d3e697f5bb19647df4f886d92a37a78bce53446855e74bbe9fc2af1812bcd89"
	},
	{
		"id": "e49a33c5035e",
		"ts": "2026-08-19T03:42:25.106Z",
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
		"liquidityUsd": 17295211.87,
		"hash": "e49a33c5035ea3dbbafb70198e081d47fb4d1d7f7de88668f85a56b46ffe9a3a"
	},
	{
		"id": "3667d1f4d06b",
		"ts": "2026-08-19T03:42:25.362Z",
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
		"liquidityUsd": 744971.28,
		"hash": "3667d1f4d06b9d73a823cdf1691749e868c4a74f9d905f9663fe351bd42d10cb"
	},
	{
		"id": "a4d721b9929d",
		"ts": "2026-08-19T03:42:25.632Z",
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
		"liquidityUsd": 26635748.96,
		"hash": "a4d721b9929d0853778f71b93257b9200402676e23054e52cc5f2c78fbfc478e"
	},
	{
		"id": "ef13baac6e07",
		"ts": "2026-08-19T03:42:25.881Z",
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
		"liquidityUsd": 4248708.19,
		"hash": "ef13baac6e072732c2bdd3e3b221f64641794b1bbb7346c06261bc0b09941f8d"
	},
	{
		"id": "ddba1ef089bb",
		"ts": "2026-08-19T03:42:26.153Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 893639.78,
		"hash": "ddba1ef089bbe46ab7c5f1345bbf3f93fa42649d764497c07a9dbe2efbad1560"
	},
	{
		"id": "0bceb35e0c0c",
		"ts": "2026-08-19T03:42:26.420Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4216993.82,
		"hash": "0bceb35e0c0c617480d3d223ece7a922086b5828c5ca46d654049b737adbca8a"
	},
	{
		"id": "90ce7a5510f1",
		"ts": "2026-08-19T03:42:26.674Z",
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
		"liquidityUsd": 3540779.99,
		"hash": "90ce7a5510f1d65f696db2a557157a00b85954d0ce2fca5ce5b2586d958ff828"
	},
	{
		"id": "f49870ebce05",
		"ts": "2026-08-19T03:42:27.195Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 369400.24,
		"hash": "f49870ebce05534c8e4e0ec05487f8485d6c00f980c71ad6fddae9b265f743be"
	},
	{
		"id": "6665225677c3",
		"ts": "2026-08-19T03:42:27.448Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 473685.91,
		"hash": "6665225677c3d50010dff9572d6bf1729486c629bbf470195b422d645c24c648"
	},
	{
		"id": "964d3749930c",
		"ts": "2026-08-19T03:42:27.700Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3492603.3,
		"hash": "964d3749930cf775f7a37cc2c629b5b0a886be4970d4b4d56d9e56ecc270211e"
	},
	{
		"id": "b42b9ff096dc",
		"ts": "2026-08-19T03:42:27.935Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2882660.53,
		"hash": "b42b9ff096dc97f42f4a54920a92612c217abc45a755a8a017548906223dc6fe"
	},
	{
		"id": "ed2c2ff4b076",
		"ts": "2026-08-19T03:42:28.183Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 533059.89,
		"hash": "ed2c2ff4b076d52ffeed3125999b52efeed2bfb1a95a4f2a862c8c9760c823b4"
	},
	{
		"id": "8971dfe42f27",
		"ts": "2026-08-19T03:42:28.418Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4216993.82,
		"hash": "8971dfe42f27a6007b7a8ae22a387196538f482e7bf2c99bfd59881a03c32da0"
	},
	{
		"id": "e011539b0d19",
		"ts": "2026-08-19T03:42:28.667Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9313624.68,
		"hash": "e011539b0d19b994a572ba34645ac995dbf556d2ceea9e085316e913b8ba952b"
	},
	{
		"id": "586e89c19977",
		"ts": "2026-08-19T03:42:28.904Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 54096.39,
		"hash": "586e89c19977004ee96d19ab01f997f6bff2c30a908a395620fe7f845926fbe5"
	},
	{
		"id": "3aaa0894d0d8",
		"ts": "2026-08-19T03:42:29.154Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 872014.52,
		"hash": "3aaa0894d0d84674adcd8d7147bdceec6af5feb39ee4aa7bcd5c510ccc1ffcf6"
	},
	{
		"id": "332f1c60dc43",
		"ts": "2026-08-19T03:42:29.403Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2939473.36,
		"hash": "332f1c60dc43b891e79f7542f6e9765654c50bdbb7725a04e284f549316b0fda"
	},
	{
		"id": "92c86a2d3016",
		"ts": "2026-08-19T03:42:29.638Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 244291.62,
		"hash": "92c86a2d3016c7d075717a1d4f37a9bee66a358b8e2a788e892d4fb4b1139976"
	},
	{
		"id": "c667d6ed5102",
		"ts": "2026-08-19T02:21:30.782Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112755937.42,
		"hash": "c667d6ed510236a019a0e54d69025f77edc0ef16fe5f0150ce6cb7f155d0b6e0"
	},
	{
		"id": "39ac49eb2cd2",
		"ts": "2026-08-19T02:21:31.308Z",
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
		"liquidityUsd": 18358309.44,
		"hash": "39ac49eb2cd2b579d3d584dba413bcad80cad754e4a64f88e9965f2a00ed6f0c"
	},
	{
		"id": "e726b33f058e",
		"ts": "2026-08-19T02:21:31.806Z",
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
		"liquidityUsd": 743612.63,
		"hash": "e726b33f058e17d3aaf95dc46dc3e0edab0c0137524160dbbf0482c6d2a16c32"
	},
	{
		"id": "0b5e0ed280ad",
		"ts": "2026-08-19T02:21:32.078Z",
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
		"liquidityUsd": 26635124.05,
		"hash": "0b5e0ed280add6825f1228ff1ea06d8e18d0c4f4017adff94379a9dc3f840034"
	},
	{
		"id": "04b4a527475b",
		"ts": "2026-08-19T02:21:32.352Z",
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
		"liquidityUsd": 4241320.22,
		"hash": "04b4a527475bb8b97a3285ca75de9aedf8d48658ef331b1d8b24d7e2a55bd45c"
	},
	{
		"id": "380ed8dcfd31",
		"ts": "2026-08-19T02:21:32.625Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 891561.12,
		"hash": "380ed8dcfd31b5f2ee9a848b6d8d376984558659d7f179827943a465b7a400c6"
	},
	{
		"id": "96c996dd3f2c",
		"ts": "2026-08-19T02:21:32.897Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4196666.7,
		"hash": "96c996dd3f2c84dd6de21a18f51bf7f8291b2f048e003dbe44be441e2a7d8a6b"
	},
	{
		"id": "4beee87e2671",
		"ts": "2026-08-19T02:21:33.170Z",
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
		"liquidityUsd": 3536610.54,
		"hash": "4beee87e2671bef35836b0282811912a6e466f8f6a259683f11d22442fea75bb"
	},
	{
		"id": "ddf041b6e337",
		"ts": "2026-08-19T02:21:33.666Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 368196.74,
		"hash": "ddf041b6e3379622076dd95a424a44f228fc07867762462292ffb3a12afa16dd"
	},
	{
		"id": "3b96f3cbdee7",
		"ts": "2026-08-19T02:21:34.020Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 474991.23,
		"hash": "3b96f3cbdee77d44a0730749ab284e4315bb8bb0a246796cb9e55c9962964f56"
	},
	{
		"id": "3a404a384509",
		"ts": "2026-08-19T02:21:34.276Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2792440.21,
		"hash": "3a404a38450985abe4ee29e1121b915bcf9c94b1f866646b71f06b693ed3369d"
	},
	{
		"id": "7d9fca21d5a9",
		"ts": "2026-08-19T02:21:34.530Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3566378.13,
		"hash": "7d9fca21d5a9666ae20e6ad4157f51fa7f5080738cd6207800dbecedadc06c20"
	},
	{
		"id": "bf8e6a30902a",
		"ts": "2026-08-19T02:21:34.788Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4196666.7,
		"hash": "bf8e6a30902a47c0b04f4552370bb5dd6c2edcbcdb9977788c4ac708e6716c9a"
	},
	{
		"id": "42e2af6a4f61",
		"ts": "2026-08-19T02:21:35.046Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 52918.52,
		"hash": "42e2af6a4f61fdaebc654b3fa5c814a0cc030a9bde35f4e76ee9338da4b987e5"
	},
	{
		"id": "18861f0d12b4",
		"ts": "2026-08-19T02:21:35.296Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9265136.98,
		"hash": "18861f0d12b4d23288824e0122b8a820c622f00f005aefc273b599963a659724"
	},
	{
		"id": "4503299c35ae",
		"ts": "2026-08-19T02:21:35.545Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 545185.85,
		"hash": "4503299c35aeabdd46d77ac9bed428acb4136a192c31c4f66dd94b663efe58d7"
	},
	{
		"id": "44d340a6fc73",
		"ts": "2026-08-19T02:21:35.796Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 862223.37,
		"hash": "44d340a6fc73243b942536ad7de7c9f8a0ce9e996353aae07b2f9254363d1fb2"
	},
	{
		"id": "3a7dc17545cb",
		"ts": "2026-08-19T02:21:36.051Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2965905.49,
		"hash": "3a7dc17545cbcb0ee3a938a09dc9b324dff93d08ba3b494c4e5354201a0e7e64"
	},
	{
		"id": "af817033e481",
		"ts": "2026-08-19T02:21:36.300Z",
		"symbol": "dogue",
		"token": "0xb2000000000000000000003779298b7eB3D8d501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 74319.55,
		"hash": "af817033e48108c9df1c3f59e43aba064a76b34f1fddd61eddc5ab7815f8517a"
	},
	{
		"id": "b039bc056785",
		"ts": "2026-08-19T01:00:12.963Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112882171.42,
		"hash": "b039bc056785cfcd30c1aac6a6e1bb41a7e05cc93584358f843948cfff10702e"
	},
	{
		"id": "091c1e259aa4",
		"ts": "2026-08-19T01:00:13.427Z",
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
		"liquidityUsd": 15188024.38,
		"hash": "091c1e259aa4782ce131db8fa8fd37ea1996eb71d0132426cbe361e481896068"
	},
	{
		"id": "f024939dff5e",
		"ts": "2026-08-19T01:00:13.693Z",
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
		"liquidityUsd": 744772.68,
		"hash": "f024939dff5e51feebd7db858586271d7f8c5525c1e9be7b700bfd58c83c62ca"
	},
	{
		"id": "327634193938",
		"ts": "2026-08-19T01:00:13.963Z",
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
		"liquidityUsd": 26725232.41,
		"hash": "327634193938da64f3c8858523d097d5831ef3fb043330464d48aeecaae91920"
	},
	{
		"id": "eca2ead8be8c",
		"ts": "2026-08-19T01:00:14.244Z",
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
		"liquidityUsd": 4252987.72,
		"hash": "eca2ead8be8c298aad37326d369c33c73dcabe1e7712afbfd5668b74b0a8ac42"
	},
	{
		"id": "2b077d561677",
		"ts": "2026-08-19T01:00:14.516Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 880907.22,
		"hash": "2b077d5616778b81e884a991a030ddfb90459cc1eb669e697ab8b2556ff68244"
	},
	{
		"id": "f2b07406e804",
		"ts": "2026-08-19T01:00:14.775Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4265451.11,
		"hash": "f2b07406e8049bb82808c4965a733170eddc9388dfc35f0b1fa481083c28cb23"
	},
	{
		"id": "3b9d97aff5ad",
		"ts": "2026-08-19T01:00:15.044Z",
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
		"liquidityUsd": 3549318.19,
		"hash": "3b9d97aff5ad9b211e62a36ed1a8f159883ecfa8bd626c7b55ce11029652d2bf"
	},
	{
		"id": "0123ca7a0d88",
		"ts": "2026-08-19T01:00:15.500Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 393382.97,
		"hash": "0123ca7a0d8895ab76f84fafa3337c7102fa727381f3d30cc7b8bf947818e076"
	},
	{
		"id": "dc9a667ed705",
		"ts": "2026-08-19T01:00:15.765Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 477806.25,
		"hash": "dc9a667ed70548d57cebfcf952e1ee59a806e17dbe41a4775bc6f750f17b2636"
	},
	{
		"id": "73f138ede985",
		"ts": "2026-08-19T01:00:16.038Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4260435.73,
		"hash": "73f138ede98570ea193de8e9a1ea35d211d100e1471d54a93746703e3c275b8e"
	},
	{
		"id": "5a401e9c2568",
		"ts": "2026-08-19T01:00:16.283Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2815393.83,
		"hash": "5a401e9c25683cea5296e6ad8c01acd52020089e8de0615fec36e8f2b11fe610"
	},
	{
		"id": "95fb03e4fdb0",
		"ts": "2026-08-19T01:00:16.530Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 60404.07,
		"hash": "95fb03e4fdb0961942460dfff26b5a7ba14e188c0d305e57d8f4ed921c994a4e"
	},
	{
		"id": "e8ddb16384c6",
		"ts": "2026-08-19T01:00:16.796Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3333129.52,
		"hash": "e8ddb16384c69b6263606d599b3b4bdf62e70d5bc2c2994b0cad1bd36b723bc7"
	},
	{
		"id": "dd9f3c62d2d1",
		"ts": "2026-08-19T01:00:17.089Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9354693.22,
		"hash": "dd9f3c62d2d1f8aec356e53a26007b90d41b767f09187fe3f9d17ee64bdc8ad2"
	},
	{
		"id": "d13e5b58345a",
		"ts": "2026-08-19T01:00:17.333Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 541208.37,
		"hash": "d13e5b58345a1156af20a569521953388d210864c3706ba7cbc2609e41357849"
	},
	{
		"id": "0807398923bd",
		"ts": "2026-08-19T01:00:17.594Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 849709.79,
		"hash": "0807398923bde13a41e35e8165d6a556a0b276425637057e424dd399838ca025"
	},
	{
		"id": "d9ed6e9d3ca2",
		"ts": "2026-08-19T01:00:17.904Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2974871.94,
		"hash": "d9ed6e9d3ca27646b8f108be624c288c1af15142c119d4a653960710aaeccafa"
	},
	{
		"id": "50a184fc99c2",
		"ts": "2026-08-19T01:00:18.163Z",
		"symbol": "dogue",
		"token": "0xb2000000000000000000003779298b7eB3D8d501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 82642.91,
		"hash": "50a184fc99c2a476369e3c06602c0117c76a7718e8ca05965ff04bedb6ea802c"
	},
	{
		"id": "9925d5e8069e",
		"ts": "2026-08-18T23:17:41.237Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112911396.67,
		"hash": "9925d5e8069e099783322d20fb51524c246a87eeb21fe89fb7e96ee2d7f511d6"
	},
	{
		"id": "ebde5bd22202",
		"ts": "2026-08-18T23:17:41.437Z",
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
		"liquidityUsd": 17136253.63,
		"hash": "ebde5bd222027d9d608ac8cb53f2e8934529cf08ccf4c3d9bf1567a8707dd821"
	},
	{
		"id": "d8c32b0fc85c",
		"ts": "2026-08-18T23:17:41.837Z",
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
		"liquidityUsd": 744772.68,
		"hash": "d8c32b0fc85c173106b6a10404d375adfdb4554b9a08f417f5a9db3faca500d4"
	},
	{
		"id": "5ba2ff6d92f2",
		"ts": "2026-08-18T23:17:42.035Z",
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
		"liquidityUsd": 26779596.66,
		"hash": "5ba2ff6d92f2a816975afd34db45b714e947bfa02b7d6177fc2a1d7cd3f03636"
	},
	{
		"id": "1427940ff492",
		"ts": "2026-08-18T23:17:42.253Z",
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
		"liquidityUsd": 4262476.44,
		"hash": "1427940ff492f5c97950d1d4e147bb8c6b04183f45ae0114d5ae0da8eddbabec"
	},
	{
		"id": "217a812571c3",
		"ts": "2026-08-18T23:17:42.483Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 891093.97,
		"hash": "217a812571c3534687a7a01b2f53395227cbfc60f3649299cca5ee46e979746d"
	},
	{
		"id": "8eaa1f019030",
		"ts": "2026-08-18T23:17:42.687Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4345548.65,
		"hash": "8eaa1f019030ecddd31c401f60f94dcadd530f3774a15278de71a431ec1876f6"
	},
	{
		"id": "d07a7fae9954",
		"ts": "2026-08-18T23:17:42.918Z",
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
		"liquidityUsd": 3552357.95,
		"hash": "d07a7fae99547bd1e4e834a00c40f9d7e03d2192b64c6ee9ca24d37c246723f9"
	},
	{
		"id": "fa73f888acb4",
		"ts": "2026-08-18T23:17:43.119Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 409000.27,
		"hash": "fa73f888acb4699d5a5100e2fcd710e1414d556eb01deeb6ff960ed8603463fa"
	},
	{
		"id": "1b41c24ca179",
		"ts": "2026-08-18T23:17:43.317Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 485261.03,
		"hash": "1b41c24ca179036816d8fc4d7218985136f78d991f6e414c4a57f4bd6bf6cf2d"
	},
	{
		"id": "1a653d07218f",
		"ts": "2026-08-18T23:17:43.501Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4345548.65,
		"hash": "1a653d07218fdecb5592fe31920a4a29285603b46d55094dc39ed9e4e9e13b80"
	},
	{
		"id": "7385fb3fd856",
		"ts": "2026-08-18T23:17:43.705Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 62697.96,
		"hash": "7385fb3fd8566796a1982a1e15132a20874334a8bcd8787dfaa729bafa45b533"
	},
	{
		"id": "d7857487dc07",
		"ts": "2026-08-18T23:17:43.890Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2786891.96,
		"hash": "d7857487dc0793bbfc742cd71a68a459849c8658e72be8d2583ded97ecccf27f"
	},
	{
		"id": "45a9dcba6ac4",
		"ts": "2026-08-18T23:17:44.100Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2970432.9,
		"hash": "45a9dcba6ac41186df258c285aa29dc7e71c49719602aff89e07479a9c720e73"
	},
	{
		"id": "fc8726fbbe60",
		"ts": "2026-08-18T23:17:44.350Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 852725,
		"hash": "fc8726fbbe60e2cf4ea0504b5a30c76a0caee69ae214c7fa84a85fd4fb6b9344"
	},
	{
		"id": "c7b9956d304d",
		"ts": "2026-08-18T23:17:44.552Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9327412.35,
		"hash": "c7b9956d304d6844c0d1911942da46e29cbab518b8abffd2a09706b142d968a8"
	},
	{
		"id": "a330ab765992",
		"ts": "2026-08-18T23:17:44.736Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 563225.23,
		"hash": "a330ab765992d71b28ef82b6d83d5797ecf417743a26a939b6da69d6c0adebd7"
	},
	{
		"id": "d5ee7604c2ec",
		"ts": "2026-08-18T23:17:44.957Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1012177.53,
		"hash": "d5ee7604c2ece045706c2daee7f15d7fd4e538d4b542b7000d8d746dfc31f1d0"
	},
	{
		"id": "ce97d657f8ea",
		"ts": "2026-08-18T23:17:45.170Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 73354.28,
		"hash": "ce97d657f8ea5166ec51ca30a7d6d51a6910bf8cc9d4807da012ee6f90479a8b"
	},
	{
		"id": "2c549c95c77a",
		"ts": "2026-08-18T22:18:24.288Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112915097.87,
		"hash": "2c549c95c77a635940b97eac92cb989bd2765f9bd5c3dd4c3c1f67c2a99c8123"
	},
	{
		"id": "c232c7122899",
		"ts": "2026-08-18T22:18:24.944Z",
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
		"liquidityUsd": 14709816.68,
		"hash": "c232c71228995c3e5622c952a1db5cd6317fa53e6cddd0aee663b7658c11b7dc"
	},
	{
		"id": "756990b2ff15",
		"ts": "2026-08-18T22:18:25.378Z",
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
		"liquidityUsd": 744772.68,
		"hash": "756990b2ff15733d8e2e99747242e0ce4d8e0d0c9d6d92d9b031ba185073824c"
	},
	{
		"id": "d6e446d95d5b",
		"ts": "2026-08-18T22:18:25.831Z",
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
		"liquidityUsd": 26795394.98,
		"hash": "d6e446d95d5b77f8d1aeb2b79cfa6ac2e6a519092d5bed101590d0a02b62618f"
	},
	{
		"id": "95fbbc783f21",
		"ts": "2026-08-18T22:18:26.070Z",
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
		"liquidityUsd": 4257061.53,
		"hash": "95fbbc783f212db03b354f6403001c8888fec7f2ae9777c573a43ae2ea60ece3"
	},
	{
		"id": "1535a1f884f1",
		"ts": "2026-08-18T22:18:26.309Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 878435.84,
		"hash": "1535a1f884f1f7433e5457e9b585070b24ab250142394dfbde2a44216dc871bf"
	},
	{
		"id": "9103489e8c3b",
		"ts": "2026-08-18T22:18:26.557Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4320161.94,
		"hash": "9103489e8c3b8a0df1d71bdd964bb27c4c0d7ad89e2d4477569ca0bb490d45fc"
	},
	{
		"id": "7c61b8109568",
		"ts": "2026-08-18T22:18:27.017Z",
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
		"liquidityUsd": 3547725.04,
		"hash": "7c61b8109568121ce944b5ba4a193da069adbe128ce4c094120252f08193f82f"
	},
	{
		"id": "e08b86f632d9",
		"ts": "2026-08-18T22:18:27.457Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 427719.07,
		"hash": "e08b86f632d954197eb813ab7a2ca9d30b5644798e5eaca62b1106c826c6fb20"
	},
	{
		"id": "48d451d73ef6",
		"ts": "2026-08-18T22:18:27.711Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 482848.37,
		"hash": "48d451d73ef6e536bf16829b790257066b49d9822f2133a09b725b529da1e06a"
	},
	{
		"id": "13402f330351",
		"ts": "2026-08-18T22:18:27.969Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4320161.93,
		"hash": "13402f330351af45fff442eaa24d023c3962834a172741f339ebb7dd7fb49207"
	},
	{
		"id": "f864a5b31d1d",
		"ts": "2026-08-18T22:18:28.190Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2766219.3,
		"hash": "f864a5b31d1d0380b1c39706220ccd3c19db40f74439fecebf0e3ed373011c19"
	},
	{
		"id": "773b3c7d1e98",
		"ts": "2026-08-18T22:18:28.412Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 68667.09,
		"hash": "773b3c7d1e98bd720d6f9b2724219928b734f85ae40bdaaa50e81997e139e95f"
	},
	{
		"id": "e30b86ccc8fc",
		"ts": "2026-08-18T22:18:28.637Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 852133.81,
		"hash": "e30b86ccc8fc93387b53293ddcf18e825f1279ca4692d67053350bf7d110906c"
	},
	{
		"id": "4bb21acbd15d",
		"ts": "2026-08-18T22:18:28.894Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9296953.83,
		"hash": "4bb21acbd15d69d34334032bc37f7ec0a5efe34892ca5219a7218bc5a8ba0809"
	},
	{
		"id": "b3e1bea6533e",
		"ts": "2026-08-18T22:18:29.115Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 246847.78,
		"hash": "b3e1bea6533ef758e0c6be61b31b993d475298120bebaedffe6c5a7c45c93649"
	},
	{
		"id": "678a1cda57f0",
		"ts": "2026-08-18T22:18:29.339Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2970036.52,
		"hash": "678a1cda57f0adb1c5fd697ca682bf9261967c7694cc5722e24644c5f415c107"
	},
	{
		"id": "b7003366d785",
		"ts": "2026-08-18T22:18:29.562Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 546069.37,
		"hash": "b7003366d785595fa352dff25ed5953f4df1b5932d4b1f7b3182947ea14061ba"
	},
	{
		"id": "ca5f3cc4e0af",
		"ts": "2026-08-18T22:18:29.782Z",
		"symbol": "RSC",
		"token": "0xFbB75A59193A3525a8825BeBe7D4b56899E2f7e1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 68409.36,
		"hash": "ca5f3cc4e0affb87a61d579650746642b97867e64adc302cd0a4ad1967e1b367"
	},
	{
		"id": "2477dc6c2f4e",
		"ts": "2026-08-18T21:19:42.463Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112862923.93,
		"hash": "2477dc6c2f4e4c59bf88af9ddd9369110c420098c06df932b0d2f0abb9af61b0"
	},
	{
		"id": "fbd7950c1e7b",
		"ts": "2026-08-18T21:19:43.098Z",
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
		"liquidityUsd": 16637337.56,
		"hash": "fbd7950c1e7b14d28537627fce84603720bd9d83a8b54ef3189768c15d7967b4"
	},
	{
		"id": "cf3568719ba5",
		"ts": "2026-08-18T21:19:43.544Z",
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
		"liquidityUsd": 745089.89,
		"hash": "cf3568719ba539dd80a73000fd18a1c21b4e46b6fa7cdc30014cb806a432d4e6"
	},
	{
		"id": "777480a99de9",
		"ts": "2026-08-18T21:19:43.977Z",
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
		"liquidityUsd": 26797171.14,
		"hash": "777480a99de9f340d0bd842c7892719fe545798f676b5c346dafadcdc30ca0f1"
	},
	{
		"id": "231185241417",
		"ts": "2026-08-18T21:19:44.413Z",
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
		"liquidityUsd": 4278021.32,
		"hash": "231185241417c630501bc335da6c4d6ca64f94a6db1f325500b0e3ebe2565ce5"
	},
	{
		"id": "4d1cdd6c66e1",
		"ts": "2026-08-18T21:19:44.645Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889005.54,
		"hash": "4d1cdd6c66e187b91aef56028e6aedf0e2caa12303a96dfa9fb766ef09d55043"
	},
	{
		"id": "f49b0d154824",
		"ts": "2026-08-18T21:19:44.874Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4322894.23,
		"hash": "f49b0d1548246b54a3b7891855421d9b6ee857a320a294e145880bd97988701b"
	},
	{
		"id": "d8a6a5aed58f",
		"ts": "2026-08-18T21:19:45.317Z",
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
		"liquidityUsd": 3545409.16,
		"hash": "d8a6a5aed58f5d977094d1351433916379153fa3028fbef1d618f51b68fce9c3"
	},
	{
		"id": "f10cc036fbbf",
		"ts": "2026-08-18T21:19:45.948Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 438868.79,
		"hash": "f10cc036fbbf0d85d73945ee37a8f3fa9660dabe6b0c68a83fffb22e2d0dd73b"
	},
	{
		"id": "cf37bf34d69e",
		"ts": "2026-08-18T21:19:46.184Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 483373.56,
		"hash": "cf37bf34d69ed093b6a373ebc66757d90394fe07d449d946dc5d65092dbae25f"
	},
	{
		"id": "9012035bceac",
		"ts": "2026-08-18T21:19:46.399Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4330106.89,
		"hash": "9012035bceac9488e98b45e857410564fb69e2e3b6f7e002ec201e2c1de4b570"
	},
	{
		"id": "c7a13193bbd0",
		"ts": "2026-08-18T21:19:46.612Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2790965.84,
		"hash": "c7a13193bbd07b17c2470167a7d7f179191c68405ab32e272c4ffaeb0d1b2bed"
	},
	{
		"id": "274300251261",
		"ts": "2026-08-18T21:19:46.829Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 63039.71,
		"hash": "27430025126170ff8728de0e46c84d16019c3774e0eb8ef14595c4e98908e712"
	},
	{
		"id": "c5398c91f56b",
		"ts": "2026-08-18T21:19:47.178Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 851911.87,
		"hash": "c5398c91f56bf75657a1af180118805c24be42334fa329f9a7c73d20781f4bb9"
	},
	{
		"id": "101ebafc520b",
		"ts": "2026-08-18T21:19:47.393Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9289418.74,
		"hash": "101ebafc520b61e21ebde16f67f40421e3a57f8dec60d6553ac65a1520e37a16"
	},
	{
		"id": "7deceba978d3",
		"ts": "2026-08-18T21:19:47.606Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 247298.46,
		"hash": "7deceba978d349d324bcab704211f847339ff94b75406d1ac989b2e2c3a092ac"
	},
	{
		"id": "7fdbd625d716",
		"ts": "2026-08-18T21:19:47.821Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2970038.51,
		"hash": "7fdbd625d716669c37753732d97abfabc2e28116936468165746ebfd086b0eb0"
	},
	{
		"id": "d6c7988ea8f9",
		"ts": "2026-08-18T21:19:48.036Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 344146.19,
		"hash": "d6c7988ea8f9af50d48dfc921fb835e4f704535fdd4881cfbc6d258b37c8ab97"
	},
	{
		"id": "3001a336a659",
		"ts": "2026-08-18T21:19:48.472Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1021366.36,
		"hash": "3001a336a659582766d90176de914698fbbfe4a0117637f8fefaab7c0d51d83a"
	},
	{
		"id": "5abccf619f0c",
		"ts": "2026-08-18T20:18:28.064Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112829487.13,
		"hash": "5abccf619f0cf8b1e754a086a42a7e951ebeadfce46beebc5c1e72023deddbc2"
	},
	{
		"id": "8735f4017c8e",
		"ts": "2026-08-18T20:18:28.710Z",
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
		"liquidityUsd": 17714508.97,
		"hash": "8735f4017c8e92d75697d50747b65e5a4ec62afbca3ffe0ae830beff4ad669a5"
	},
	{
		"id": "e096f1c6e27b",
		"ts": "2026-08-18T20:18:29.153Z",
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
		"liquidityUsd": 747034.3,
		"hash": "e096f1c6e27bbe26590a828eff2f292dc8fa12039a4220ff7729b303207741be"
	},
	{
		"id": "93b7dd6c344a",
		"ts": "2026-08-18T20:18:29.582Z",
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
		"liquidityUsd": 26824938.64,
		"hash": "93b7dd6c344a202b7b5ee3a0a1e8b5383e09266355d526a6682a43b2ebe7210d"
	},
	{
		"id": "9893529e961e",
		"ts": "2026-08-18T20:18:29.811Z",
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
		"liquidityUsd": 4281452.23,
		"hash": "9893529e961e28f3c0c258dfbc63fa0ea054c313a15c84468d43f13b51d7317d"
	},
	{
		"id": "23028cb1ee88",
		"ts": "2026-08-18T20:18:30.049Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 891239.39,
		"hash": "23028cb1ee885348d4057581602f6ba7992f95e252b07119675f65d2283027da"
	},
	{
		"id": "edf0e4de7062",
		"ts": "2026-08-18T20:18:30.284Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4344039.74,
		"hash": "edf0e4de706278029a8a8669d7f48f7ce7db1bf2faff6a985b1b5394e90fd806"
	},
	{
		"id": "d83931a43635",
		"ts": "2026-08-18T20:18:30.515Z",
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
		"liquidityUsd": 3161460.16,
		"hash": "d83931a4363506c5e2029341e53bc74c5f3db4210f19c11b327b306096ea191f"
	},
	{
		"id": "473e8e53fac1",
		"ts": "2026-08-18T20:18:30.959Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 437707.14,
		"hash": "473e8e53fac1dd3b40af694196d11bea5ff2044b849a48a57ef0ba8231fce8f7"
	},
	{
		"id": "f1d4bea6b29c",
		"ts": "2026-08-18T20:18:31.206Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 449549.98,
		"hash": "f1d4bea6b29c44ef283ffa8c9e37195b5a67a43ac2faeca2c68dc7f9a7937a36"
	},
	{
		"id": "461829092249",
		"ts": "2026-08-18T20:18:31.431Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4343666.92,
		"hash": "461829092249e040e363ba61e33a1ef70f739f1fcb8cd9237ed6d3f9e84a3653"
	},
	{
		"id": "fd13c4d6d160",
		"ts": "2026-08-18T20:18:31.651Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2796897.67,
		"hash": "fd13c4d6d1608e5abd5165041f86c7181d0594bea8082aeb94e7f895cb4ed3b4"
	},
	{
		"id": "3dbe35a89b53",
		"ts": "2026-08-18T20:18:31.875Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 64478.74,
		"hash": "3dbe35a89b53ac9b9e7b77b1510d65080aed6c37a2ddaba11ad9a95415aba9fc"
	},
	{
		"id": "ea3cbe430927",
		"ts": "2026-08-18T20:18:32.090Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 851805.21,
		"hash": "ea3cbe430927519934d5fd5f84828d0b9199b02ab2a7bd66ee104f5fde5f7c03"
	},
	{
		"id": "3654f04c1fdd",
		"ts": "2026-08-18T20:18:32.306Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9241094.28,
		"hash": "3654f04c1fddf0aa841751cb2bed26c64132c69846db85de9d35108f2f6d926e"
	},
	{
		"id": "558fa4315e86",
		"ts": "2026-08-18T20:18:32.524Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 247462.29,
		"hash": "558fa4315e86ef4a964c771202d4e33ca7f18941273d964104b711dbcaa2386c"
	},
	{
		"id": "a4982323c0e7",
		"ts": "2026-08-18T20:18:32.739Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2960979.39,
		"hash": "a4982323c0e764d41bafd5e7a57db2522f1a6536d92f7a1eb642290bb89b6f17"
	},
	{
		"id": "abad31be39fd",
		"ts": "2026-08-18T20:18:32.958Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 343921.75,
		"hash": "abad31be39fda5e12b7d414bb617e00d9d7d6132bed57d8eece05f357bcc7951"
	},
	{
		"id": "90b3e2008981",
		"ts": "2026-08-18T20:18:33.216Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1025107.46,
		"hash": "90b3e2008981d98823475aeb0a06701f588e9943828b2a779841898383854db3"
	},
	{
		"id": "146855617169",
		"ts": "2026-08-18T19:23:57.459Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112826737.5,
		"hash": "146855617169ae2b7d5c5e7829d9c57fddb7a977fcd8f1083fd6f2e63a25b57a"
	},
	{
		"id": "3879510382ab",
		"ts": "2026-08-18T19:23:58.099Z",
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
		"liquidityUsd": 16715346.05,
		"hash": "3879510382ab394b5e9fa00f2283abb13d775bef9b9056541b2615d84494851d"
	},
	{
		"id": "fac8a0f43bce",
		"ts": "2026-08-18T19:23:58.538Z",
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
		"liquidityUsd": 747416.59,
		"hash": "fac8a0f43bceab41021a8f7101249b09877e05bafa7e0feba9c1377e9ffea3fc"
	},
	{
		"id": "e69f92099adf",
		"ts": "2026-08-18T19:24:02.013Z",
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
		"liquidityUsd": 26832412.98,
		"hash": "e69f92099adf9ff08cd422e9ba17458baeb978a83836e2091bb42663b6b30b57"
	},
	{
		"id": "7b6bc67de6a3",
		"ts": "2026-08-18T19:24:02.454Z",
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
		"liquidityUsd": 4289776.41,
		"hash": "7b6bc67de6a3c5b8ae3add708a9e0a7e2f7810195c45a030fa0c78a103416e9b"
	},
	{
		"id": "26ebfec80148",
		"ts": "2026-08-18T19:24:02.674Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 893976.7,
		"hash": "26ebfec80148d3a62cb9f4f92547e53f9cc3663da8e6eeb17d615370f7b1f13e"
	},
	{
		"id": "4cb4aab812ee",
		"ts": "2026-08-18T19:24:02.990Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4252722.48,
		"hash": "4cb4aab812ee596458cfae83df87787635b5ee89564e425ec7f11acb9c928676"
	},
	{
		"id": "5821574e6bc7",
		"ts": "2026-08-18T19:24:03.456Z",
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
		"liquidityUsd": 3161360.25,
		"hash": "5821574e6bc7211087b565e5be8a47b4052eaad1da70a57fd603ddfa7f6fffa1"
	},
	{
		"id": "6e8e7ccd3942",
		"ts": "2026-08-18T19:24:04.158Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 447375.64,
		"hash": "6e8e7ccd394273fdc12eb2ef3c89523c76bd4aa263dcfc817b1ea0e436a02838"
	},
	{
		"id": "db5a7ca52b4a",
		"ts": "2026-08-18T19:24:04.387Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 450876.71,
		"hash": "db5a7ca52b4aeeabd1dfc56c29aa29c062cf0a124477d62f4936d7cde4c6d08b"
	}
]
