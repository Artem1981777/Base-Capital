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
	"updatedAt": "2026-10-16T05:23:22.584Z",
	"tokensScored": 20346,
	"verdictsIssued": 20346,
	"safe": 17335,
	"risky": 1448,
	"likelyRug": 1563,
	"ticks": 1151
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "1de0a8801b6e",
		"ts": "2026-10-16T05:23:18.755Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146897245.63,
		"hash": "1de0a8801b6e35adf951aaa254a849136714d86e8994c93adc5d437e2f010ebe"
	},
	{
		"id": "2a75a4971989",
		"ts": "2026-10-16T05:23:18.999Z",
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
		"liquidityUsd": 18499519.78,
		"hash": "2a75a4971989e23935384ddb22691cbfc4f1525097329308dda39b94365fb546"
	},
	{
		"id": "ee287501e28f",
		"ts": "2026-10-16T05:23:19.218Z",
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
		"liquidityUsd": 775496.35,
		"hash": "ee287501e28f165246226ae2c1e78a9f90165ec3def2ca9e182a45f1f37071a6"
	},
	{
		"id": "9723747827dd",
		"ts": "2026-10-16T05:23:19.473Z",
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
		"liquidityUsd": 47449897.2,
		"hash": "9723747827ddb495f371911ace3175673503f69aa2644441004f3851b671d372"
	},
	{
		"id": "951308dd7fff",
		"ts": "2026-10-16T05:23:19.692Z",
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
		"liquidityUsd": 4763873,
		"hash": "951308dd7fff9cf273e1936ec16a8a09698ad9da06ff32a7a16c30127ac6e75e"
	},
	{
		"id": "52810655b215",
		"ts": "2026-10-16T05:23:19.896Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1174784.27,
		"hash": "52810655b21510dd3bd78b6029128da1e3728401ae78bf2b4cb87d3475f9bf13"
	},
	{
		"id": "e7280c09dceb",
		"ts": "2026-10-16T05:23:20.110Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 47449897.2,
		"hash": "e7280c09dceb055d3a8add26d0b193719bf22642b4c1b05d5d7af0e07ddea895"
	},
	{
		"id": "4ee9e43562f7",
		"ts": "2026-10-16T05:23:20.335Z",
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
		"liquidityUsd": 3043956.49,
		"hash": "4ee9e43562f75d09481f23bd506e8a831fed9a99adb402b66179b32d1800aad8"
	},
	{
		"id": "0464a5e0158d",
		"ts": "2026-10-16T05:23:20.561Z",
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
		"liquidityUsd": 1805450.31,
		"hash": "0464a5e0158de1b91e0eb47870b83f5fc30dcce7f19cdfaabdfcad20ff3e622c"
	},
	{
		"id": "7cbdcdf92b74",
		"ts": "2026-10-16T05:23:20.784Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1374977.76,
		"hash": "7cbdcdf92b746a9beef83a7d663526eaf0a2849e6cf669a6bb7767609829c94c"
	},
	{
		"id": "b8a901544c44",
		"ts": "2026-10-16T05:23:21.003Z",
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
		"liquidityUsd": 206757.64,
		"hash": "b8a901544c44acf53482ddd66e418147dd862fa7f2c83ba09bd66f861fb2136b"
	},
	{
		"id": "5eb226f85095",
		"ts": "2026-10-16T05:23:21.200Z",
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
		"liquidityUsd": 3077294.79,
		"hash": "5eb226f85095d138428fc4b7fa26359e4572dffb93e8b720eaa77fe6514342c2"
	},
	{
		"id": "ff0c147d135a",
		"ts": "2026-10-16T05:23:21.397Z",
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
		"liquidityUsd": 16587064.69,
		"hash": "ff0c147d135a0d3830bcac5640748819986a34394734c88353c8b728df31004e"
	},
	{
		"id": "70f5e8e7a9b1",
		"ts": "2026-10-16T05:23:21.585Z",
		"symbol": "Paper",
		"token": "0x503fdcc939Ed5c10aCfB495209Fa9d36c5988B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10199551.91,
		"hash": "70f5e8e7a9b1126b84b328174204a9586ae8989f9db0b49759f04c9ae802fadc"
	},
	{
		"id": "8fda869d9777",
		"ts": "2026-10-16T05:23:21.810Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 174339.73,
		"hash": "8fda869d9777453d08a105edc51e6b554c615b0f7ea01f4cbdfc1e21e3761d15"
	},
	{
		"id": "e9c0f6ea1a80",
		"ts": "2026-10-16T05:23:21.995Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2105710.01,
		"hash": "e9c0f6ea1a809ce3ae1843faa7c521b7bf8250389aa252926944d54433b789c7"
	},
	{
		"id": "a6a1c9128b78",
		"ts": "2026-10-16T05:23:22.199Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1115690.73,
		"hash": "a6a1c9128b782b39bb5a40b02ffcebfa04b71b54f88ba293deb4b6dcf58ac3b6"
	},
	{
		"id": "a11e65cedb1f",
		"ts": "2026-10-16T05:23:22.388Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4068385.52,
		"hash": "a11e65cedb1fe77b9a1c7f8bdd6253877b5de15cd082d03d5d2fa059cf224cfc"
	},
	{
		"id": "a74dc91396f7",
		"ts": "2026-10-16T05:23:22.584Z",
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
		"liquidityUsd": 4588254.65,
		"hash": "a74dc91396f7ad9b740a9912f42ec0a57db14f64e8cc283978711b75cde88465"
	},
	{
		"id": "22b7af496896",
		"ts": "2026-10-16T00:02:42.929Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146545015.29,
		"hash": "22b7af4968966dd9ce7be3cf557e4d6ac123b92c3544bed02eafdd70ccba9e1a"
	},
	{
		"id": "64a16bd3e0b2",
		"ts": "2026-10-16T00:02:43.486Z",
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
		"liquidityUsd": 18468293.71,
		"hash": "64a16bd3e0b289be3c7e5d0e4ef940b3f004b5c92b9d8cf8b4411448ac0a12a4"
	},
	{
		"id": "76ea99a3a9f9",
		"ts": "2026-10-16T00:02:43.782Z",
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
		"liquidityUsd": 777032.98,
		"hash": "76ea99a3a9f9ff04608e5acbe381c9c7fd03c4cd04889937026486fb22c216e0"
	},
	{
		"id": "06cd451d4ff7",
		"ts": "2026-10-16T00:02:44.074Z",
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
		"liquidityUsd": 46602839.41,
		"hash": "06cd451d4ff7bc1567044ad4a667314bfb057dc67e54bdfe8a14224b663c99a0"
	},
	{
		"id": "5eb0267806cb",
		"ts": "2026-10-16T00:02:44.386Z",
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
		"liquidityUsd": 4737024.85,
		"hash": "5eb0267806cbd6de45e5f1043ae7448d9d19078258188c593f92668c5bc83770"
	},
	{
		"id": "3099a3833ba3",
		"ts": "2026-10-16T00:02:44.672Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1162969.42,
		"hash": "3099a3833ba3be59154a163aa2b6553ee892d01c5a81323230390eb48709aa7b"
	},
	{
		"id": "7b24d46302ae",
		"ts": "2026-10-16T00:02:44.978Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 140026.23,
		"hash": "7b24d46302aeea583b3b5e26f4b123ff17825acbd7f25d6906f11352992d2590"
	},
	{
		"id": "17254f8fc49e",
		"ts": "2026-10-16T00:02:45.725Z",
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
		"liquidityUsd": 2384586.98,
		"hash": "17254f8fc49e6c073b61593cee7367413bb058f4ffd9c9ffa16191bfc3262407"
	},
	{
		"id": "d38b13cae7f4",
		"ts": "2026-10-16T00:02:46.015Z",
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
		"liquidityUsd": 1801325.39,
		"hash": "d38b13cae7f45681a1b01fc867f5733de6850ce8c17059fc3378909d63e0a63f"
	},
	{
		"id": "3564292e5c73",
		"ts": "2026-10-16T00:02:46.321Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1351421.98,
		"hash": "3564292e5c734d6253f05984a45c1f201dee9445351f5708fad18c44c0f67c8d"
	},
	{
		"id": "176353078097",
		"ts": "2026-10-16T00:02:46.600Z",
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
		"liquidityUsd": 16656824.78,
		"hash": "1763530780978e4c333ef1e5b0c68f0be476b0a8473f477a9f950321e778b56c"
	},
	{
		"id": "f05af8e81dd1",
		"ts": "2026-10-16T00:02:46.872Z",
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
		"liquidityUsd": 201228.67,
		"hash": "f05af8e81dd18adfb8b00493555739c01a51ecaa89c0eb7705f2a4c46ad05a63"
	},
	{
		"id": "9e3addf70a1f",
		"ts": "2026-10-16T00:02:47.160Z",
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
		"liquidityUsd": 3038530.37,
		"hash": "9e3addf70a1f5bc39895fb824935fb577f325dfb6d3df768f029d420366672a2"
	},
	{
		"id": "d9d29b1a9a3c",
		"ts": "2026-10-16T00:02:47.439Z",
		"symbol": "Paper",
		"token": "0x503fdcc939Ed5c10aCfB495209Fa9d36c5988B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10199550.98,
		"hash": "d9d29b1a9a3c0624531e8f4e5ff00f005d0e4d39f9ff9acd040c7022a10be9dd"
	},
	{
		"id": "d9ae5614c62c",
		"ts": "2026-10-16T00:02:47.712Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1108450.42,
		"hash": "d9ae5614c62c5011e058a05b57634f78f483a89b366f4af6f13dc3b83be4e168"
	},
	{
		"id": "fd553c1a7ade",
		"ts": "2026-10-16T00:02:47.999Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2098496.66,
		"hash": "fd553c1a7ade06e1131671439dede39d3dda9873a928cf9138b3114e691ec925"
	},
	{
		"id": "c54c7aed3493",
		"ts": "2026-10-16T00:02:48.284Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1117804.19,
		"hash": "c54c7aed349331d39ad41308b4c30662f6b799998ea58959129f0d8fe266ce8e"
	},
	{
		"id": "86bbd88e7ec3",
		"ts": "2026-10-16T00:02:48.556Z",
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
		"liquidityUsd": 4558077.87,
		"hash": "86bbd88e7ec327878c3a71f2033a7e2a634b54afc97d4e4a1de2f121750a770d"
	},
	{
		"id": "f4d1316cb4f2",
		"ts": "2026-10-16T00:02:48.843Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4030866.55,
		"hash": "f4d1316cb4f248d77fc004b0ba3693335bd65bc31402f558ff8337775fa09bec"
	},
	{
		"id": "5aff608488df",
		"ts": "2026-10-15T21:08:05.800Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146866561.16,
		"hash": "5aff608488df5f72f3c79cba33a848b28c721e0e6ff129f6cfea50624367de26"
	},
	{
		"id": "aca65df99a67",
		"ts": "2026-10-15T21:08:06.307Z",
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
		"liquidityUsd": 18458009.27,
		"hash": "aca65df99a67a33e7e99d3d283665c5561dc2c4788ea10b27a0d80e3f0f94d2b"
	},
	{
		"id": "33abd1f415fe",
		"ts": "2026-10-15T21:08:06.592Z",
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
		"liquidityUsd": 777032.98,
		"hash": "33abd1f415fe689df7bcca5542a710176ae5c460f3921e7430e55a018cf29416"
	},
	{
		"id": "878dd50f0761",
		"ts": "2026-10-15T21:08:06.862Z",
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
		"liquidityUsd": 45539994.41,
		"hash": "878dd50f0761ce0c1aef9dfb5ade726f1bf2516481eb277a133cbf04df82db84"
	},
	{
		"id": "19f90e7a9414",
		"ts": "2026-10-15T21:08:07.167Z",
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
		"liquidityUsd": 4759144.41,
		"hash": "19f90e7a94148d82092f8b8208a6208801bc6f739c2b5480cf9d6bd9913ca587"
	},
	{
		"id": "9160611cbd75",
		"ts": "2026-10-15T21:08:07.421Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1172131.27,
		"hash": "9160611cbd7519270b6a92e6b2003c4bc07b511a4d3740c1e0654760cfda127b"
	},
	{
		"id": "efaa05142d56",
		"ts": "2026-10-15T21:08:07.711Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 140026.22,
		"hash": "efaa05142d56ce94f72084510fe521030046c55242651a67f9dfd0e3118fd388"
	},
	{
		"id": "dbfd617a7625",
		"ts": "2026-10-15T21:08:08.013Z",
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
		"liquidityUsd": 2552971.19,
		"hash": "dbfd617a76251774f3a8f3695313b41a323b9e3e8de48c8bdc20bd94a7b8cdbf"
	},
	{
		"id": "57c0e5f26ff5",
		"ts": "2026-10-15T21:08:08.305Z",
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
		"liquidityUsd": 1789184.87,
		"hash": "57c0e5f26ff5a351cfccece30e79817f33df7e252db476fa4185833680bbe830"
	},
	{
		"id": "838305a45709",
		"ts": "2026-10-15T21:08:08.597Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3042069.07,
		"hash": "838305a45709d30f84d4ca6b5747f17991d156f77cba8cb9d6ba64cfaa6763e3"
	},
	{
		"id": "b8d54215b8a4",
		"ts": "2026-10-15T21:08:08.839Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1391826.81,
		"hash": "b8d54215b8a418168206915207d442c39ce6c536d39b2f8f718ff9d93a2caa36"
	},
	{
		"id": "d7203e6dbbff",
		"ts": "2026-10-15T21:08:09.079Z",
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
		"liquidityUsd": 16737377.48,
		"hash": "d7203e6dbbff8c9e91d93d4059205180c1093228f303904a042dbe2b57028449"
	},
	{
		"id": "c870b0fc54f5",
		"ts": "2026-10-15T21:08:09.348Z",
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
		"liquidityUsd": 199696.18,
		"hash": "c870b0fc54f58426d0c73459cb591bdcedb01e2723cf799933995d65210ee29b"
	},
	{
		"id": "a19301fcfefd",
		"ts": "2026-10-15T21:08:09.628Z",
		"symbol": "Paper",
		"token": "0x503fdcc939Ed5c10aCfB495209Fa9d36c5988B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10199596.35,
		"hash": "a19301fcfefd8216a68a4539d5ea9f11f17913f475f5d4b28c12e55b6a7ea711"
	},
	{
		"id": "7393be6019fd",
		"ts": "2026-10-15T21:08:09.879Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1111152.09,
		"hash": "7393be6019fda336deaf0b671937bf3befd5998fc940c5890f6e8249bd62acf3"
	},
	{
		"id": "a98d22bdf3a5",
		"ts": "2026-10-15T21:08:10.113Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2080038.85,
		"hash": "a98d22bdf3a545a1e01544ae8059250d51159b50fd0aca6262cb4ff13f41e825"
	},
	{
		"id": "283dafc3fda8",
		"ts": "2026-10-15T21:08:10.353Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1125743.87,
		"hash": "283dafc3fda882f62df882d3195881d017e0f23429555d35628ff5c7cd885d65"
	},
	{
		"id": "4ce83faf97d4",
		"ts": "2026-10-15T21:08:10.591Z",
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
		"liquidityUsd": 4658763.43,
		"hash": "4ce83faf97d47d1663a44abc187aede38bf81a3f4384240aef5cf80a8c6f84d3"
	},
	{
		"id": "f13d2b043212",
		"ts": "2026-10-15T17:58:32.466Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146642909.49,
		"hash": "f13d2b04321279526f201f38a1171dfc7d3c8998281049bcb2add69e7082ce93"
	},
	{
		"id": "c66b8b631b62",
		"ts": "2026-10-15T17:58:32.722Z",
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
		"liquidityUsd": 18429056.48,
		"hash": "c66b8b631b6219ae94399d08a7f89a9090053365732b936cd9c342a6c24db6f4"
	},
	{
		"id": "85c4b29c4ba0",
		"ts": "2026-10-15T17:58:32.969Z",
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
		"liquidityUsd": 778133.59,
		"hash": "85c4b29c4ba0a054db5ac1be87dd340cfd2fa21a319189ba581c56bd2ac0be65"
	},
	{
		"id": "dda58194667f",
		"ts": "2026-10-15T17:58:33.188Z",
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
		"liquidityUsd": 45189762.68,
		"hash": "dda58194667fff15bf29b988bd49832a1d08ba2a81ff1213dffbcd85bb531200"
	},
	{
		"id": "61a4158aea6d",
		"ts": "2026-10-15T17:58:33.424Z",
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
		"liquidityUsd": 4725518.14,
		"hash": "61a4158aea6d87305a21d086e2a33a05ecf2ea6b6f7ec5a1c7792be2f6c18137"
	},
	{
		"id": "d087a0cb3a64",
		"ts": "2026-10-15T17:58:33.639Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1169763.78,
		"hash": "d087a0cb3a642befaec07227806c41046d3b86d4ec54b24e17fb79ef36efbc6a"
	},
	{
		"id": "8d244ab6e9b3",
		"ts": "2026-10-15T17:58:33.853Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 140025.66,
		"hash": "8d244ab6e9b3869b670d7cbe44f9fbef5c8e4bc4aff4a6452c272b9e64486de7"
	},
	{
		"id": "5406196cfe2c",
		"ts": "2026-10-15T17:58:34.057Z",
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
		"liquidityUsd": 2553213.84,
		"hash": "5406196cfe2c45166a00752c9e62251bef70985b4c98afb2e16ea52897ca5166"
	},
	{
		"id": "ba8640d7f671",
		"ts": "2026-10-15T17:58:34.360Z",
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
		"liquidityUsd": 1788912.4,
		"hash": "ba8640d7f671c1f0ee3359330f59430a79bb2a3d103953d9cf7d93cf9183156f"
	},
	{
		"id": "d89d19af6cf7",
		"ts": "2026-10-15T17:58:34.583Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2975854.26,
		"hash": "d89d19af6cf7f1a225a160a6f3bc215cc4e2a101d9e3b26ee8af297b21c96eee"
	},
	{
		"id": "510102afeb9c",
		"ts": "2026-10-15T17:58:34.783Z",
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
		"liquidityUsd": 16860529.52,
		"hash": "510102afeb9c0c1c9364f4bad4a74dab5d1cd990018238bc4d25e9602ee59a13"
	},
	{
		"id": "49a1208063d6",
		"ts": "2026-10-15T17:58:34.980Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1386084.01,
		"hash": "49a1208063d68dc3c24d1e59575a9c3cfd92bb21d9d72e47c1e83bed28d74803"
	},
	{
		"id": "9e8c17724247",
		"ts": "2026-10-15T17:58:35.202Z",
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
		"liquidityUsd": 224860.04,
		"hash": "9e8c177242479690c95269b1bfcbeff0d3f308762bff376157ec82d03b2b1a9e"
	},
	{
		"id": "2101174bfe1e",
		"ts": "2026-10-15T17:58:35.408Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2079659.2,
		"hash": "2101174bfe1ec0996c5c940f491538048d4baf0d0c0a4617b78df78540c4dd70"
	},
	{
		"id": "5da858f62061",
		"ts": "2026-10-15T17:58:35.604Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3990223.18,
		"hash": "5da858f62061ec67ed03a20e78a4a14f07753b6f309645117767fe5fa1519f66"
	},
	{
		"id": "105b03d841ec",
		"ts": "2026-10-15T17:58:35.819Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1114634.81,
		"hash": "105b03d841ecd0c0c06d80499c6378db445db664a9f30ca03fa2606ad981d6f4"
	},
	{
		"id": "ecbf70e234d9",
		"ts": "2026-10-15T17:58:36.015Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1109477.62,
		"hash": "ecbf70e234d988004edfb600f7ec8a5e560f9484f4a365a7558a82378fc1b92a"
	},
	{
		"id": "fa48601f2c19",
		"ts": "2026-10-15T17:58:36.199Z",
		"symbol": "Paper",
		"token": "0x503fdcc939Ed5c10aCfB495209Fa9d36c5988B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10199551.62,
		"hash": "fa48601f2c191d8e3875dead1b697c1d5e34b84859f14ce63a41fa3492901910"
	},
	{
		"id": "f1c1d2e33dc3",
		"ts": "2026-10-15T13:53:55.432Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 141928861.62,
		"hash": "f1c1d2e33dc32a99918e0f700ce22885e5e49a68bf09be89ddf6390fd3aac977"
	},
	{
		"id": "ed88e5ce14a0",
		"ts": "2026-10-15T13:53:56.008Z",
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
		"liquidityUsd": 17667591.52,
		"hash": "ed88e5ce14a046c99de1c314b8435bc94415978829017b78515b124eb3292bc3"
	},
	{
		"id": "8c0c870818d2",
		"ts": "2026-10-15T13:53:56.246Z",
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
		"liquidityUsd": 755434.97,
		"hash": "8c0c870818d2d99ed29d77d8ebe74597ccf812218e5787b1f50128c61dbcab6f"
	},
	{
		"id": "17683797fc49",
		"ts": "2026-10-15T13:53:56.624Z",
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
		"liquidityUsd": 44044252,
		"hash": "17683797fc4929ac0876238af62c88a5678732fe500d4c43d540a91d932a85fe"
	},
	{
		"id": "b42192a2ffb6",
		"ts": "2026-10-15T13:53:56.851Z",
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
		"liquidityUsd": 4518449.7,
		"hash": "b42192a2ffb6f89b1a0a7fb1d2001add7f46f91024be91bed1cd6c713b7d7bdd"
	},
	{
		"id": "c6c9db0cff26",
		"ts": "2026-10-15T13:53:57.091Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1113509.88,
		"hash": "c6c9db0cff2601cd90a123127076d8b1cfb05df0b767a04e20bda7e63f1a5697"
	},
	{
		"id": "914dd1e1cefe",
		"ts": "2026-10-15T13:53:57.354Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 140024.7,
		"hash": "914dd1e1cefe2a61ecdd84a282ca9a2effff175e3f09fa0b851b0efbcff25c57"
	},
	{
		"id": "f99c4d4a3ab0",
		"ts": "2026-10-15T13:53:57.615Z",
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
		"liquidityUsd": 2445235.33,
		"hash": "f99c4d4a3ab02b3788e593304c73a6fb431734568abc5ec743af5b1d98096a4f"
	},
	{
		"id": "5c2d2469dc00",
		"ts": "2026-10-15T13:53:57.946Z",
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
		"liquidityUsd": 1755598,
		"hash": "5c2d2469dc006d8cb989b45412e27e54ae7d06924722ea38658ad236d5f80738"
	},
	{
		"id": "2080033379af",
		"ts": "2026-10-15T13:53:58.188Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2770170.05,
		"hash": "2080033379afefcbbebd9d55f18dd7af3368cceefca4eaf127659f8d440f0860"
	},
	{
		"id": "436bfea66525",
		"ts": "2026-10-15T13:53:58.410Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1327719.39,
		"hash": "436bfea66525fa92592b855ca48d005301a862585d87c918df87f1cbe8399206"
	},
	{
		"id": "8895744871d6",
		"ts": "2026-10-15T13:53:58.623Z",
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
		"liquidityUsd": 15612019.88,
		"hash": "8895744871d64921e7ce32e49a074a032e3cda8ce0a98dbd628e8d4d71cfbe03"
	},
	{
		"id": "add063378294",
		"ts": "2026-10-15T13:53:58.846Z",
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
		"liquidityUsd": 296257.58,
		"hash": "add06337829426b3eeb79d39d5a55cba56bc69e41dd39e623b1914bbe831610d"
	},
	{
		"id": "5e939c3bcf37",
		"ts": "2026-10-15T13:53:59.083Z",
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
		"liquidityUsd": 175559.6,
		"hash": "5e939c3bcf37ea2d51028ea5fe4d7d12eb3049a0ef43de4574d73c1b1bdaae2f"
	},
	{
		"id": "e5e8a88b9c25",
		"ts": "2026-10-15T13:53:59.274Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1067801.62,
		"hash": "e5e8a88b9c258f4c346d5862a996237dea87c131d97371b06b1455c33407ae36"
	},
	{
		"id": "33946ffd751f",
		"ts": "2026-10-15T13:53:59.845Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1948933.99,
		"hash": "33946ffd751f5ba4ba20454eb9704df872963dea30ed57e904237371b93884ba"
	},
	{
		"id": "2bfbba5a9d14",
		"ts": "2026-10-15T13:54:00.064Z",
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
		"liquidityUsd": 1058667,
		"hash": "2bfbba5a9d14e84890c682973a82b79a5a5899dd48f6f869c0a5af2f114da4d6"
	},
	{
		"id": "014a2f7dea3a",
		"ts": "2026-10-15T13:54:00.285Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1104658.91,
		"hash": "014a2f7dea3a659dcf727b4562c1bd6f5f0216b307e29230d8db5408440bf0f7"
	},
	{
		"id": "988e96b3fec1",
		"ts": "2026-10-15T13:54:00.498Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 441981.37,
		"hash": "988e96b3fec1309435e8fc8e0137084c7bf23fc7ff84655bb01c53734302a91e"
	},
	{
		"id": "f766d283bb04",
		"ts": "2026-10-15T08:47:32.494Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 143693140.57,
		"hash": "f766d283bb04fd81e085c8d351735bda7939cbfc1a666b381fe46d2c35432b2c"
	},
	{
		"id": "409ec7903dd1",
		"ts": "2026-10-15T08:47:32.752Z",
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
		"liquidityUsd": 17855259.11,
		"hash": "409ec7903dd17f693d717c90fa985de1b775bdc65056bb5ada757f7064548ae8"
	},
	{
		"id": "e3399b0eb775",
		"ts": "2026-10-15T08:47:33.205Z",
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
		"liquidityUsd": 755434.97,
		"hash": "e3399b0eb775188aefefbf678b5cfd4dc22fe2e94920eaea65b1aadb2d17cfa4"
	},
	{
		"id": "7ccb160ebc42",
		"ts": "2026-10-15T08:47:33.450Z",
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
		"liquidityUsd": 44121524.54,
		"hash": "7ccb160ebc42759906cb3f1f1f7b3f572726f6fcb4f49ee2e32505c41baf2817"
	},
	{
		"id": "160afa581ab1",
		"ts": "2026-10-15T08:47:33.702Z",
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
		"liquidityUsd": 4364442.13,
		"hash": "160afa581ab15b05f90a7cd82a4f55e4e0debcffb4f82b104ee9298cefd03af7"
	},
	{
		"id": "62e473800a07",
		"ts": "2026-10-15T08:47:33.953Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1111381.98,
		"hash": "62e473800a078e1fef7b34da56b81673c5fb0e3de2968f09fc2de620a6fff57e"
	},
	{
		"id": "7a9de4d36cfe",
		"ts": "2026-10-15T08:47:34.229Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 140018.41,
		"hash": "7a9de4d36cfec501927ff390bf4ffd08a0a27e3c79c0df63452db1b5f34cf543"
	},
	{
		"id": "27a42f94c85f",
		"ts": "2026-10-15T08:47:34.532Z",
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
		"liquidityUsd": 2475825.62,
		"hash": "27a42f94c85f601c80d9f081ecb21f3f1506c281a84ba92f3169d7ee3bbbdb43"
	},
	{
		"id": "ce382e27e083",
		"ts": "2026-10-15T08:47:34.797Z",
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
		"liquidityUsd": 1767974.59,
		"hash": "ce382e27e08312658aaafa653ea75299625227d8574c1c45334756e000f81b78"
	},
	{
		"id": "440aa29a4454",
		"ts": "2026-10-15T08:47:35.039Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2828644.65,
		"hash": "440aa29a4454c07a980fdb2ab37669bb898786af5b23a7634792749c83754f6a"
	},
	{
		"id": "15d1885387a1",
		"ts": "2026-10-15T08:47:35.258Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1328179.01,
		"hash": "15d1885387a1923fd246883d892c6dce2a8655b38f93eacac699314a381182e9"
	},
	{
		"id": "ceb9cd40f0de",
		"ts": "2026-10-15T08:47:35.480Z",
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
		"liquidityUsd": 15720679.86,
		"hash": "ceb9cd40f0deb19a88b2b82460bb1b2db3c19ac13372a83bae5747149edceb77"
	},
	{
		"id": "36b2993d7c9c",
		"ts": "2026-10-15T08:47:35.699Z",
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
		"liquidityUsd": 1080079.26,
		"hash": "36b2993d7c9c44ce1719ddf4127ce1698007bc889dd56b808f5194ea5654afb7"
	},
	{
		"id": "92824dd2e42e",
		"ts": "2026-10-15T08:47:35.920Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1057887.18,
		"hash": "92824dd2e42eaf8d26941d14b9bcf4fbda53a3c8083e71e89bbc970ac50d4e1d"
	},
	{
		"id": "9f114cd99854",
		"ts": "2026-10-15T08:47:36.138Z",
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
		"liquidityUsd": 301851,
		"hash": "9f114cd998542b41e466db0446fc52d2c3081757af6a2c3731b5f4f97d35e424"
	},
	{
		"id": "d14221ec4369",
		"ts": "2026-10-15T08:47:36.358Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1126152.76,
		"hash": "d14221ec4369d27887570d2f11f690786a4cb020e2755746f7750b73a56d3c65"
	},
	{
		"id": "056458f1fdb0",
		"ts": "2026-10-15T08:47:36.573Z",
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
		"liquidityUsd": 4275945.61,
		"hash": "056458f1fdb0cf381945e99bc4785ab5b8992aa286c54198ef3331adf9d22197"
	},
	{
		"id": "ab4b7d8cd6d9",
		"ts": "2026-10-15T08:47:36.791Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3885883.14,
		"hash": "ab4b7d8cd6d9c1a92406c983d55d74cee50363d98cc9f981f0d9b9680de269dc"
	},
	{
		"id": "7d468e8fcbda",
		"ts": "2026-10-15T08:47:37.010Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2020380.05,
		"hash": "7d468e8fcbdad641d48b5ad4989f6e08fd307165ed6dc39eb1d8c4ac9d8d8a17"
	},
	{
		"id": "505f224dfc6d",
		"ts": "2026-10-15T03:00:21.233Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 144992976.08,
		"hash": "505f224dfc6d064acb25be60abad5f9543bdf5aaf5100ec4826d5c065fff87dc"
	},
	{
		"id": "94a79ed18f60",
		"ts": "2026-10-15T03:00:21.890Z",
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
		"liquidityUsd": 17486965.44,
		"hash": "94a79ed18f60eccb76fd3fd04c5b6dd99a7a58f11b5d5b5bd42d5c9099380082"
	},
	{
		"id": "a0f67c6e87fb",
		"ts": "2026-10-15T03:00:22.135Z",
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
		"liquidityUsd": 759117.66,
		"hash": "a0f67c6e87fbcda038885611a1bf25b8d4a28fd4771e59c8b33bafe94c44926c"
	},
	{
		"id": "201139b0917f",
		"ts": "2026-10-15T03:00:22.593Z",
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
		"liquidityUsd": 44793831.34,
		"hash": "201139b0917fbbb3adc98809ad5437b1b47198c64accd1c0856bc8e2a04c8085"
	},
	{
		"id": "5ff8dddf9f28",
		"ts": "2026-10-15T03:00:22.838Z",
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
		"liquidityUsd": 4468222.48,
		"hash": "5ff8dddf9f289e843a126039ad46206530f6b70d441ba9658188c12ada1bc402"
	},
	{
		"id": "adf049209a36",
		"ts": "2026-10-15T03:00:23.088Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1126992.63,
		"hash": "adf049209a362676b1f7828abeb945d432864068fef6ca5c57ebd39dd87fb93a"
	},
	{
		"id": "0d6228612e42",
		"ts": "2026-10-15T03:00:23.326Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 140129.93,
		"hash": "0d6228612e42ebe43cf439d81f25861f01682e55a08d5acc15c6b0cff702bb2c"
	},
	{
		"id": "e0e1eed0ff37",
		"ts": "2026-10-15T03:00:23.577Z",
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
		"liquidityUsd": 2526737.33,
		"hash": "e0e1eed0ff37e7369a36ea55241d63262c7441f1e3890d47838b36a3ed3a3929"
	},
	{
		"id": "25c63c3a796d",
		"ts": "2026-10-15T03:00:23.825Z",
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
		"liquidityUsd": 1803075.64,
		"hash": "25c63c3a796db56f6501a65bae6ff9716453e4eba632ab29095988fea8fb10ad"
	},
	{
		"id": "f7d991622ebf",
		"ts": "2026-10-15T03:00:24.088Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1334252.51,
		"hash": "f7d991622ebf049a2b388176fff2378426e581c154213aedc3e8fe43405d3d3f"
	},
	{
		"id": "19d54c93e293",
		"ts": "2026-10-15T03:00:24.324Z",
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
		"liquidityUsd": 1097015.76,
		"hash": "19d54c93e293f19aac26d004f56cb5b2cfe0c32eac3ae18a024feda5ff064857"
	},
	{
		"id": "576063e7c8fc",
		"ts": "2026-10-15T03:00:24.550Z",
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
		"liquidityUsd": 2828625.91,
		"hash": "576063e7c8fc8927dd1ab8974bbac63d4839d1e4722be600622aa2da765dfd44"
	},
	{
		"id": "fcdd28c685ae",
		"ts": "2026-10-15T03:00:24.778Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1063706.07,
		"hash": "fcdd28c685ae9637a7b519f8a0c63a2573d552506ade1ff64bce7a1582fbe2f8"
	},
	{
		"id": "d7f4ecbb179e",
		"ts": "2026-10-15T03:00:25.005Z",
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
		"liquidityUsd": 303020.03,
		"hash": "d7f4ecbb179e22d77faac1f59442554390740e579b747d2c6e2590e26f5f2b69"
	},
	{
		"id": "78790321f2d9",
		"ts": "2026-10-15T03:00:25.247Z",
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
		"liquidityUsd": 15476840.09,
		"hash": "78790321f2d9f062d8d1722b8c95e472cf87f228a3e0bb507de5158e1bb66be8"
	},
	{
		"id": "6cd6e5e2915b",
		"ts": "2026-10-15T03:00:25.482Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2031796.79,
		"hash": "6cd6e5e2915b3d973614f2a1feda51d2dbbba90307ec71be21be8a00593da9ed"
	},
	{
		"id": "0e5d7d8a9f13",
		"ts": "2026-10-15T03:00:25.713Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5276929.34,
		"hash": "0e5d7d8a9f13060f719f90a2f6d06ad7c303dd16a24bd2997890715bce221d80"
	},
	{
		"id": "06b8e4fbbacd",
		"ts": "2026-10-15T03:00:25.948Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3942227.35,
		"hash": "06b8e4fbbacde9cddea4c1139c10f6fe75ff4c6be43c30921fefeb1453bc32a2"
	},
	{
		"id": "b55541228828",
		"ts": "2026-10-15T03:00:26.179Z",
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
		"liquidityUsd": 4356623.79,
		"hash": "b555412288283346db9b88989e3c69f6180cf93bd2bb4bcdf3da4dfae77c9e3b"
	},
	{
		"id": "db4879817a06",
		"ts": "2026-10-14T23:38:09.648Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146624562.96,
		"hash": "db4879817a0664bc1b970722e32d566e25b69ea8cb31930b66f430b824d35fee"
	},
	{
		"id": "3886d5f4b474",
		"ts": "2026-10-14T23:38:10.321Z",
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
		"liquidityUsd": 17818945.22,
		"hash": "3886d5f4b474314b413c438afbd4ea6fe09ec8555cfd450ae78efcb48e2bae06"
	},
	{
		"id": "b5d3ef712138",
		"ts": "2026-10-14T23:38:10.589Z",
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
		"liquidityUsd": 802999.6,
		"hash": "b5d3ef712138e804cd8a7bb95a376a27c05da1367bb9194561576fa124bfcaea"
	},
	{
		"id": "9a58c1a4c846",
		"ts": "2026-10-14T23:38:10.846Z",
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
		"liquidityUsd": 45540046.4,
		"hash": "9a58c1a4c846141c7148899020cb36bc3013bbc58cfc47563cdc951f7288f422"
	},
	{
		"id": "b70bc2584467",
		"ts": "2026-10-14T23:38:11.093Z",
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
		"liquidityUsd": 4593465.9,
		"hash": "b70bc2584467767bb44b17e2047da325e0ce434ac90baeb76ca10516fc4050d6"
	},
	{
		"id": "19d54b741912",
		"ts": "2026-10-14T23:38:11.344Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1161079.32,
		"hash": "19d54b7419128121f924ba07533fe32387db867d396b7c80aac4eb1d8987fc2e"
	},
	{
		"id": "25ca7fcd6ef0",
		"ts": "2026-10-14T23:38:11.611Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 1780753.45,
		"hash": "25ca7fcd6ef0fa7b7d27adae6c4f7bf6e589d1e1ade768402970b16a965f80d8"
	},
	{
		"id": "d6a8b56854ff",
		"ts": "2026-10-14T23:38:11.881Z",
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
		"liquidityUsd": 2570012.33,
		"hash": "d6a8b56854ff3020b69f1f264155fb899a47ded322b79581f987091254c094c1"
	},
	{
		"id": "15ecb34d3e8b",
		"ts": "2026-10-14T23:38:12.128Z",
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
		"liquidityUsd": 1780752.24,
		"hash": "15ecb34d3e8b7661c2c3c8771d4ecfe65253073b99ef6466bd96c347958e15ae"
	},
	{
		"id": "101a1a7d1ef1",
		"ts": "2026-10-14T23:38:12.387Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1127355.8,
		"hash": "101a1a7d1ef1243f46ead814b48ed6e6f6320529c0d8f3f7cddc70371d5b7d97"
	},
	{
		"id": "1c1064ffacc7",
		"ts": "2026-10-14T23:38:12.618Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1371676.27,
		"hash": "1c1064ffacc7a013aa88a61ef77ca626c00f838f75ec3928e4bc22685cfcda99"
	},
	{
		"id": "efd6715de80d",
		"ts": "2026-10-14T23:38:12.858Z",
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
		"liquidityUsd": 2912231.04,
		"hash": "efd6715de80d47e8312d3caa7bba1b185977849a8bbbfe545e81862543b78db6"
	},
	{
		"id": "e2ba5dd12667",
		"ts": "2026-10-14T23:38:13.089Z",
		"symbol": "Paper",
		"token": "0xC54a9e149d964a8e8620f685bE8a09e0acbf0b07",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 5218853.88,
		"hash": "e2ba5dd1266705e0b6e675571bb193e6343072252002143658fc032c179dd983"
	},
	{
		"id": "d9136b739bc8",
		"ts": "2026-10-14T23:38:13.323Z",
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
		"liquidityUsd": 313730.77,
		"hash": "d9136b739bc83b5c2f1a542ee8cdc2b30186417a890c02743b7bf06f2f8466dc"
	},
	{
		"id": "d9c61d98e459",
		"ts": "2026-10-14T23:38:13.555Z",
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
		"liquidityUsd": 16078253.49,
		"hash": "d9c61d98e459d00b59dd1c34954b858133604b0273a65abe26e52e14db86e648"
	},
	{
		"id": "7254cf061b58",
		"ts": "2026-10-14T23:38:13.787Z",
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
		"liquidityUsd": 4591695.21,
		"hash": "7254cf061b58197521dbfee880d97dcd062daf0f9396f96e1219f7231e382c17"
	},
	{
		"id": "ad14cceb391d",
		"ts": "2026-10-14T23:38:14.016Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1071053.3,
		"hash": "ad14cceb391d8cb73f76306bdd68e965eaf386ad2749230325c3b719ad88ed4c"
	},
	{
		"id": "9645ee19cad5",
		"ts": "2026-10-14T23:38:14.255Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5237468.71,
		"hash": "9645ee19cad5c239c03bbd24a68a01f9eb9338c3edbc35b54197cb4b2924bbe0"
	},
	{
		"id": "dccc6ad42a8c",
		"ts": "2026-10-14T23:38:14.486Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2061545.35,
		"hash": "dccc6ad42a8cf950a0234c0d9d13fd4b652d8c78d2748d9d5e74c3fe8abe4130"
	},
	{
		"id": "b3b784cde495",
		"ts": "2026-10-14T20:24:46.689Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 147329210.26,
		"hash": "b3b784cde495280df083f6b2075281ea134aacea042833891bf3b16717755858"
	},
	{
		"id": "eb1942593194",
		"ts": "2026-10-14T20:24:47.395Z",
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
		"liquidityUsd": 17866912.88,
		"hash": "eb19425931942e9de135234f52ab2a8221e8c18284ce6041935bf0f887792eaa"
	},
	{
		"id": "7c60c549485a",
		"ts": "2026-10-14T20:24:47.839Z",
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
		"liquidityUsd": 802999.6,
		"hash": "7c60c549485acbd2f2ba688cf62975b7f21078512a03719c42e1598fef02221c"
	},
	{
		"id": "e8fcb1010c24",
		"ts": "2026-10-14T20:24:48.115Z",
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
		"liquidityUsd": 45130463.56,
		"hash": "e8fcb1010c247a6d94745b87176013d5d5796139137cacd36de0a5b5da0e7dbd"
	},
	{
		"id": "31b94cc9d2bb",
		"ts": "2026-10-14T20:24:48.377Z",
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
		"liquidityUsd": 4630360.86,
		"hash": "31b94cc9d2bbe48c5a7f725148f61d9b1d554a6aff5936812d87263c9ba2de47"
	},
	{
		"id": "5bc6f9fbc655",
		"ts": "2026-10-14T20:24:48.630Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1164384.72,
		"hash": "5bc6f9fbc655e689139cb5359ec4bf3b5a8e76b18e8833b426794bf2f189ff85"
	},
	{
		"id": "cb753b8911e5",
		"ts": "2026-10-14T20:24:48.901Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 45130463.56,
		"hash": "cb753b8911e52ec2935babb769e9bd5ba261c0bce957b8a297eccb837eabc918"
	},
	{
		"id": "55b9ccc9707d",
		"ts": "2026-10-14T20:24:49.155Z",
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
		"liquidityUsd": 2586513.09,
		"hash": "55b9ccc9707d837f1573fbe37ee03956acf36ed85ef8f9c6f269b5269b6f57fe"
	},
	{
		"id": "fa3029b82f30",
		"ts": "2026-10-14T20:24:49.422Z",
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
		"liquidityUsd": 1804672.64,
		"hash": "fa3029b82f3029ff395e789247d38800f58d6cccfb9237ea80ad8033f5cc13dd"
	},
	{
		"id": "debb5c5a450a",
		"ts": "2026-10-14T20:24:49.785Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1136165.14,
		"hash": "debb5c5a450adeece8f0268433e758c3e5a03574adb781847cef8d016589a0de"
	},
	{
		"id": "48ab94aefec0",
		"ts": "2026-10-14T20:24:50.020Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1378021.56,
		"hash": "48ab94aefec0681ebf0097e7e2418b36a5e3e49205a3569b49bfb8084b6cf48e"
	},
	{
		"id": "a43b10db34d1",
		"ts": "2026-10-14T20:24:50.254Z",
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
		"liquidityUsd": 2941278.08,
		"hash": "a43b10db34d1977a645adc578163de7e710698d985d80ed92a87964f45383846"
	},
	{
		"id": "402116b603f4",
		"ts": "2026-10-14T20:24:50.503Z",
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
		"liquidityUsd": 314831.86,
		"hash": "402116b603f489886a887b6eef5220a3e3924667ea69b51f1ba28e70ae4fe3c7"
	},
	{
		"id": "1eb2701cb579",
		"ts": "2026-10-14T20:24:50.737Z",
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
		"liquidityUsd": 4553768.97,
		"hash": "1eb2701cb57947b7beeb47890bf3ccc736dcd4ce0cbd3eab774c74b29e0a6516"
	},
	{
		"id": "aef2ea46fb12",
		"ts": "2026-10-14T20:24:50.988Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1072067.74,
		"hash": "aef2ea46fb1287bd010d8c392f6d0c78506ca7d7ad17d523afd184e5a0be3e75"
	},
	{
		"id": "318bf047c1ef",
		"ts": "2026-10-14T20:24:51.236Z",
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
		"liquidityUsd": 16264263.03,
		"hash": "318bf047c1ef79c4df3992db439a1e6c499046837f60e51a6adf2e467a64e309"
	},
	{
		"id": "bc09ae12851e",
		"ts": "2026-10-14T20:24:51.467Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2074101.13,
		"hash": "bc09ae12851ea77cf7d549fd925658ba2aff8de2cc47be7e9d8fc699f81492c4"
	},
	{
		"id": "485d12b5549c",
		"ts": "2026-10-14T20:24:51.714Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4003487.89,
		"hash": "485d12b5549c059811109a207572995f17c8f8102f72d356ea3bc9136c4f16a5"
	},
	{
		"id": "89b9c384703a",
		"ts": "2026-10-14T20:24:51.962Z",
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
		"liquidityUsd": 1152795.42,
		"hash": "89b9c384703a4442e755c33f809f539355a8a2f046b0cbb4c09bb856ba8c51f4"
	},
	{
		"id": "107e4005c6cd",
		"ts": "2026-10-14T16:26:23.162Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 147757271.35,
		"hash": "107e4005c6cd7f1e8d1fa78bdc6981f0fa0792a731297d8eeb6972999910bcb2"
	},
	{
		"id": "d0df3cb9bcdb",
		"ts": "2026-10-14T16:26:23.454Z",
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
		"liquidityUsd": 17831343.35,
		"hash": "d0df3cb9bcdb98c853c3c1a550cc4b2f44f4f4820247f5e42e4718b44a59c477"
	},
	{
		"id": "541d4a26aa58",
		"ts": "2026-10-14T16:26:23.733Z",
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
		"liquidityUsd": 802999.6,
		"hash": "541d4a26aa58c12d31c91a8e339490208bc8faa5b0258af5a46ed82146c9cabc"
	},
	{
		"id": "03a243ce795b",
		"ts": "2026-10-14T16:26:24.035Z",
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
		"liquidityUsd": 44329657.05,
		"hash": "03a243ce795b202213533804a163e9002157a3f2197ec920b28baf15d6548987"
	},
	{
		"id": "2d87e8ae7254",
		"ts": "2026-10-14T16:26:24.302Z",
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
		"liquidityUsd": 4619491.82,
		"hash": "2d87e8ae7254d85ff22d944061ad350e8ea90af9f877e9262df7397a29d77d61"
	},
	{
		"id": "a6ebeba1782f",
		"ts": "2026-10-14T16:26:24.559Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1162836.11,
		"hash": "a6ebeba1782f104f0024ddb93bdcbadf2034309da1407961f9bec2fc65fabe7f"
	},
	{
		"id": "8534e02e4db1",
		"ts": "2026-10-14T16:26:24.811Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 44329657.05,
		"hash": "8534e02e4db1e275160df20c3b5b03e341e6f0a88be9e177e60cc194bc27752b"
	},
	{
		"id": "6d29dda36f8d",
		"ts": "2026-10-14T16:26:25.081Z",
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
		"liquidityUsd": 2935742.65,
		"hash": "6d29dda36f8d93d1ad2c4d14c76326ea5a1ac2e0111fdb647a4599c4b5a31310"
	},
	{
		"id": "094d66c88040",
		"ts": "2026-10-14T16:26:25.357Z",
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
		"liquidityUsd": 1773500.68,
		"hash": "094d66c88040cfa6a0497de7d4c54e3cc3a1662297e7cc00f6a5b73a16969c1b"
	},
	{
		"id": "082a3988c783",
		"ts": "2026-10-14T16:26:25.617Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 319223.98,
		"hash": "082a3988c783212343f818d6492758ee305f2b59ec55dc571d7989644d84be80"
	},
	{
		"id": "6d96c9c42609",
		"ts": "2026-10-14T16:26:25.883Z",
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
		"liquidityUsd": 1170814.16,
		"hash": "6d96c9c42609bdf5b9f9abc3afd456ae41cd979aca01e65acb70192417ea4180"
	},
	{
		"id": "c6fbcc7787eb",
		"ts": "2026-10-14T16:26:26.141Z",
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
		"liquidityUsd": 4545882.49,
		"hash": "c6fbcc7787eb82b3ef102058d7e6a9c501d0f234de174d14a06b78742b3c3519"
	},
	{
		"id": "83291eb0c5a1",
		"ts": "2026-10-14T16:26:26.382Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1341203.54,
		"hash": "83291eb0c5a1f1c9ed6ef5a2144eebb659f5728434fa0cde03674cb7ede0c0f7"
	},
	{
		"id": "781c865aedb3",
		"ts": "2026-10-14T16:26:26.628Z",
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
		"liquidityUsd": 15851442.52,
		"hash": "781c865aedb32effda8815c6541484f2ecf9adc4728c113fb0ea571c56655dc9"
	},
	{
		"id": "2dec65bc8bfd",
		"ts": "2026-10-14T16:26:26.867Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1066183.8,
		"hash": "2dec65bc8bfd2811dd15d3ba693898b0883c30a351fe8dd7299ff38666d3175e"
	},
	{
		"id": "f902d1a93c3b",
		"ts": "2026-10-14T16:26:27.093Z",
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
		"liquidityUsd": 2911849.17,
		"hash": "f902d1a93c3ba0b16d726471db5071bf0e17f17e13626c206020ce7a1f9a4d39"
	},
	{
		"id": "b45672289a98",
		"ts": "2026-10-14T16:26:27.339Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4000289.07,
		"hash": "b45672289a9877cd6f021c3b1f548feb5fbab180438925519a0bee5ab704ebf3"
	},
	{
		"id": "69efec216873",
		"ts": "2026-10-14T16:26:27.581Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5228866.75,
		"hash": "69efec216873538a195a7edaec495dd077bf17e112dd3f0860620a081a876199"
	},
	{
		"id": "0e5d4fc3fa7b",
		"ts": "2026-10-14T16:26:27.813Z",
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
		"liquidityUsd": 605098.07,
		"hash": "0e5d4fc3fa7ba3dcb111b3d8a45fb2ce88fdd37b9a1668bbc9553a35da840249"
	},
	{
		"id": "f18aaf86003b",
		"ts": "2026-10-14T11:05:58.831Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 149691851.92,
		"hash": "f18aaf86003b98e6f762a6eee3e9603135c7b76734f6e8fbc7c7a4a97b212a52"
	},
	{
		"id": "6349b877d912",
		"ts": "2026-10-14T11:05:59.168Z",
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
		"liquidityUsd": 18286019.22,
		"hash": "6349b877d912754e301259bdb2f7656941d105b35cc3d015490b40b6e8aafb0b"
	},
	{
		"id": "0edb71340273",
		"ts": "2026-10-14T11:05:59.476Z",
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
		"liquidityUsd": 798146.82,
		"hash": "0edb71340273537c6edf1c91069a3c9bd65179423171ccd775b21683776994ce"
	},
	{
		"id": "1e9ad59daa21",
		"ts": "2026-10-14T11:05:59.771Z",
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
		"liquidityUsd": 41756430.98,
		"hash": "1e9ad59daa2108a9122e1423815eed5afff112da76ffbc5d173bb319d3163fbb"
	},
	{
		"id": "4b394d9bbf61",
		"ts": "2026-10-14T11:06:00.067Z",
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
		"liquidityUsd": 4774178.76,
		"hash": "4b394d9bbf61a0b7b30a7f1e077421945fc7d5819afc3ad1a249e8cce8ecc4ea"
	},
	{
		"id": "ea8c68bb754f",
		"ts": "2026-10-14T11:06:00.365Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1212524.64,
		"hash": "ea8c68bb754f5bb2b00fc72b097e7437768b2d2b9ed2927e360c21195ff01f6d"
	},
	{
		"id": "a9188b335616",
		"ts": "2026-10-14T11:06:00.675Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41756431.04,
		"hash": "a9188b335616b683e826c674f8e9ef579a9b6320aee6d61179228a994ded1ed2"
	},
	{
		"id": "e282334c2180",
		"ts": "2026-10-14T11:06:00.972Z",
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
		"liquidityUsd": 3023411.42,
		"hash": "e282334c2180b6a2cd2e02322d15c05e13e2e6ff60d2d47bf448d39ff926b848"
	},
	{
		"id": "d3cfb0e7a6d7",
		"ts": "2026-10-14T11:06:01.268Z",
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
		"liquidityUsd": 1800844.24,
		"hash": "d3cfb0e7a6d7124fe11e57ec693500f20b62d3a82cfe49877a26ab33c4e87164"
	},
	{
		"id": "e761966bc120",
		"ts": "2026-10-14T11:06:01.827Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 326950.32,
		"hash": "e761966bc1207a63f10d10f2d7da4b967d2d34a8fc17181997db4ea7c57b0c1a"
	},
	{
		"id": "13eca91160b6",
		"ts": "2026-10-14T11:06:02.119Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 4748082.38,
		"hash": "13eca91160b6240f3b21f5cac41c9725e85e2b91ef26bbe8ba0aaa1094575e66"
	},
	{
		"id": "db6ba0d930b2",
		"ts": "2026-10-14T11:06:02.415Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1282587.51,
		"hash": "db6ba0d930b23bf21a9e02fdfb0749f63e2f37d26b61e9580857cc4f8ada7d09"
	}
]
