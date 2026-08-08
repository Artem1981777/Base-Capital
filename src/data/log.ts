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
	"updatedAt": "2026-08-08T05:39:54.070Z",
	"tokensScored": 8039,
	"verdictsIssued": 8039,
	"safe": 7012,
	"risky": 612,
	"likelyRug": 415,
	"ticks": 489
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "2cbd70826d47",
		"ts": "2026-08-08T05:39:51.351Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115429690.2,
		"hash": "2cbd70826d4774774ee42146adf53a9c0c304679bdb5aaa6feb1fd8b79e4b926"
	},
	{
		"id": "1c55ab084e88",
		"ts": "2026-08-08T05:39:51.587Z",
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
		"liquidityUsd": 16933899,
		"hash": "1c55ab084e8802a9233501381cfccc94ab50681bfb5edea83ba25110a2887cf4"
	},
	{
		"id": "bba1d466d346",
		"ts": "2026-08-08T05:39:51.783Z",
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
		"liquidityUsd": 1047603.88,
		"hash": "bba1d466d346c8a15d91d5d448d401a2020ed274d7592982519602eff8553a48"
	},
	{
		"id": "751fd6ff3f8b",
		"ts": "2026-08-08T05:39:51.971Z",
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
		"liquidityUsd": 27485506.57,
		"hash": "751fd6ff3f8ba88167258e6e56bce05d42c16971327204a059a9c0e0b9e65223"
	},
	{
		"id": "9c99514daf31",
		"ts": "2026-08-08T05:39:52.182Z",
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
		"liquidityUsd": 4405414,
		"hash": "9c99514daf31141e1a53d6d4aa812c21fb9ca3788434b9a19a4bbe0c25c57294"
	},
	{
		"id": "982bff1320d9",
		"ts": "2026-08-08T05:39:52.375Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 927249.71,
		"hash": "982bff1320d92c369a72c1eb6d3f4f308a509a9e1f112f4ad5fee4db50fee582"
	},
	{
		"id": "637d3768b74f",
		"ts": "2026-08-08T05:39:52.559Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27485506.57,
		"hash": "637d3768b74fd93ef741630499c34014703372bf4cadca54505b811aeff272ad"
	},
	{
		"id": "2c64d4aba5f9",
		"ts": "2026-08-08T05:39:52.757Z",
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
		"liquidityUsd": 3943876.52,
		"hash": "2c64d4aba5f9ff7b17ead1f5b49ef21828c567a799863230f2f033db51d37031"
	},
	{
		"id": "395bedb4880e",
		"ts": "2026-08-08T05:39:52.949Z",
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
		"liquidityUsd": 986601.77,
		"hash": "395bedb4880e4f056a2e9e11e2663cc5ca0f61c6be8961f16cff6010065d65a2"
	},
	{
		"id": "b9dd710b7636",
		"ts": "2026-08-08T05:39:53.132Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 509362.88,
		"hash": "b9dd710b7636555680a1a58beac14799ec355113b16a8a416ff7be5f721fa6dc"
	},
	{
		"id": "8a3d13aad28e",
		"ts": "2026-08-08T05:39:53.325Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9283219.81,
		"hash": "8a3d13aad28ead79dd1afcafd48c4f6619e4c33f4f0be15ca20a58b76ebc1942"
	},
	{
		"id": "20987d6e8db9",
		"ts": "2026-08-08T05:39:53.501Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1796870.07,
		"hash": "20987d6e8db9f56d07ba538e7fc7204d97d22f92bd3024e487d2a79be65efc39"
	},
	{
		"id": "882333893aad",
		"ts": "2026-08-08T05:39:53.693Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4019179.07,
		"hash": "882333893aadd4a643f3d9e84c2c2ab56d28c5724da265cdf65a3dffa6b8cddd"
	},
	{
		"id": "29e67f3b8239",
		"ts": "2026-08-08T05:39:53.877Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2150926.47,
		"hash": "29e67f3b823962a1eda07cdb13781122004b91cb17ad1fde8fbd3eeb6eabe273"
	},
	{
		"id": "48809d99f7ef",
		"ts": "2026-08-08T05:39:54.069Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 681789.98,
		"hash": "48809d99f7eff38106e86387d2803132e22200a63e9371fe78b6201746875f1c"
	},
	{
		"id": "017957935ba4",
		"ts": "2026-08-08T04:52:22.456Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115511766.14,
		"hash": "017957935ba4d398ab91fc208fb279cfd7ee03f11c94994baea5c8ba30fb7b05"
	},
	{
		"id": "bb9ad7fd2376",
		"ts": "2026-08-08T04:52:22.795Z",
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
		"liquidityUsd": 17193664.14,
		"hash": "bb9ad7fd23767ffa52a8e9a879d664140cb602d1f7f4727c34c632bb80cb3da6"
	},
	{
		"id": "9d145b379c0c",
		"ts": "2026-08-08T04:52:23.143Z",
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
		"liquidityUsd": 1047603.88,
		"hash": "9d145b379c0ce0d10b52f4dd16fa3938623d425958a8fe316c8e99f4c8cbf8c9"
	},
	{
		"id": "73693b3c3ebd",
		"ts": "2026-08-08T04:52:23.469Z",
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
		"liquidityUsd": 27480211.28,
		"hash": "73693b3c3ebde0132d50d2104b94d46931f3d821fb7ea0a275f7c1a6e556d70c"
	},
	{
		"id": "ab4f384e10e0",
		"ts": "2026-08-08T04:52:23.795Z",
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
		"liquidityUsd": 4405414,
		"hash": "ab4f384e10e0fb2042cce61bd3da71e890dc834b52f1d37f00a00107c82eb523"
	},
	{
		"id": "0fb7da02a73c",
		"ts": "2026-08-08T04:52:23.979Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 927249.71,
		"hash": "0fb7da02a73c3c97ec5f5241fd4746602331948720103ec5b9800b09b55f88f3"
	},
	{
		"id": "47733e2254e8",
		"ts": "2026-08-08T04:52:24.163Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27480211.28,
		"hash": "47733e2254e8f82cf903766348e69845ce8ab11bdd76ad4713334309839eb8be"
	},
	{
		"id": "3a6a9713278f",
		"ts": "2026-08-08T04:52:24.488Z",
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
		"liquidityUsd": 3942807.07,
		"hash": "3a6a9713278f08c72ff4cdb78fd31c85f4eb09a68aeece1219f0d0c2034d7229"
	},
	{
		"id": "eca55792bcf6",
		"ts": "2026-08-08T04:52:24.753Z",
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
		"liquidityUsd": 987383.75,
		"hash": "eca55792bcf68ab104fb96e2bd9afeb4a8b98d10277292b0a51b302627d682fe"
	},
	{
		"id": "5ab5132346d8",
		"ts": "2026-08-08T04:52:24.942Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 521986.24,
		"hash": "5ab5132346d80a21d8aae0dd40f7236f564bc7f16b66f2a41d5c4cda8ea967a4"
	},
	{
		"id": "d74c18fd2d66",
		"ts": "2026-08-08T04:52:25.134Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9320547.78,
		"hash": "d74c18fd2d66a7167ce2f490753711fb68bbbe68a52cd2cfba3e92dbf9cd79ad"
	},
	{
		"id": "a0b150206fd8",
		"ts": "2026-08-08T04:52:25.340Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1797103.43,
		"hash": "a0b150206fd82d8d50ce71186a4e3cd50f175183bbb6c40cbcbe617a6bda8d55"
	},
	{
		"id": "fbce59660b03",
		"ts": "2026-08-08T04:52:25.523Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4024985.45,
		"hash": "fbce59660b036e197a7a8a4d711d2655b40e1b92dc02be36e49924f5d9495cac"
	},
	{
		"id": "ac03ff100698",
		"ts": "2026-08-08T04:52:25.711Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2147207.92,
		"hash": "ac03ff1006980d3e233e43b0adbaa88b13575f4ef867337632fb028bb5ed931b"
	},
	{
		"id": "159baacd59c8",
		"ts": "2026-08-08T04:52:25.906Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 692336.39,
		"hash": "159baacd59c81c3ab287d2333b1a7a6b7564282b0f5054e9029bdb083f2aeb1d"
	},
	{
		"id": "4358bd27e402",
		"ts": "2026-08-08T03:21:29.922Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115506601.94,
		"hash": "4358bd27e402218f5c8b33d188bf4205115fed486d5ed4609dcdb85278b10b09"
	},
	{
		"id": "31ec60bbca8b",
		"ts": "2026-08-08T03:21:30.446Z",
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
		"liquidityUsd": 16878498.79,
		"hash": "31ec60bbca8b44630bb1c295193d54430acae403600a57f5e2435406e8ee4a18"
	},
	{
		"id": "59a2a5156cdd",
		"ts": "2026-08-08T03:21:30.715Z",
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
		"liquidityUsd": 1047603.88,
		"hash": "59a2a5156cdd23fe1d0b310a640516db3674b6145f3ff86075b9cfcd527123b3"
	},
	{
		"id": "c8d92726cb90",
		"ts": "2026-08-08T03:21:31.206Z",
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
		"liquidityUsd": 27483473.05,
		"hash": "c8d92726cb9010e8335a96993684de0a33283b56151a2e579252f1b337b6aac2"
	},
	{
		"id": "baa97bf54d1f",
		"ts": "2026-08-08T03:21:31.478Z",
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
		"liquidityUsd": 4389889.23,
		"hash": "baa97bf54d1f91a8fa973001fe021e672438bc3dc3e495ef18a6311c8ca78c1c"
	},
	{
		"id": "036746dcf73b",
		"ts": "2026-08-08T03:21:31.742Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 915017.88,
		"hash": "036746dcf73b1b69f8123d6b3db4e31e7c27da653195a441becfee729f43ca39"
	},
	{
		"id": "da93db2aab30",
		"ts": "2026-08-08T03:21:32.014Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27483473.05,
		"hash": "da93db2aab3086338f88f90ac21f311de1e0a5df9551d90699ff484f1d091630"
	},
	{
		"id": "ad2703efbbb0",
		"ts": "2026-08-08T03:21:32.285Z",
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
		"liquidityUsd": 3936536.51,
		"hash": "ad2703efbbb094df39203a80cb0a13b8166704b6556f963e2ff2fb3ab4c0acab"
	},
	{
		"id": "d918d4492502",
		"ts": "2026-08-08T03:21:32.561Z",
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
		"liquidityUsd": 979690.37,
		"hash": "d918d449250208608ac89fc23a8ad625ef9e1262817d3b3f11ad79ba497e835f"
	},
	{
		"id": "2604beec9de3",
		"ts": "2026-08-08T03:21:32.826Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 519036.57,
		"hash": "2604beec9de35d35b716ffd8b9b2911f7da10403ffa18d43f5d73bd4fa7e31b5"
	},
	{
		"id": "80b82285a10e",
		"ts": "2026-08-08T03:21:33.074Z",
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
		"liquidityUsd": 289926.11,
		"hash": "80b82285a10e779f18b1d0db29986bd82e5eb65a1ee6e8bb6d2cde5b08f81541"
	},
	{
		"id": "f55b9c3badba",
		"ts": "2026-08-08T03:21:33.331Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9314229.12,
		"hash": "f55b9c3badbaf24890602b7e8634176e5bcf6398e94feea71bfa7df7e57daa87"
	},
	{
		"id": "a7ca501dec04",
		"ts": "2026-08-08T03:21:33.592Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1794355.78,
		"hash": "a7ca501dec04a8d39a978059916cb7420cbef29c69ebfe78553cceeff874147f"
	},
	{
		"id": "d817c84aec5b",
		"ts": "2026-08-08T03:21:33.841Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2146449.99,
		"hash": "d817c84aec5bf2f387f41d6c17ac7179c6a8e5bf2f3a085427d9b08edf6483e1"
	},
	{
		"id": "190f1224f2e3",
		"ts": "2026-08-08T03:21:34.090Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4027115.68,
		"hash": "190f1224f2e3aefe6203b53ce3c228787b5579b7e84c5d42c4a6e543f75828ea"
	},
	{
		"id": "09123de9f477",
		"ts": "2026-08-08T03:21:34.335Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 551004.58,
		"hash": "09123de9f4775393ab91f1c0a438011cd7547bafa705014481ba0babd5f95266"
	},
	{
		"id": "935b532e0c67",
		"ts": "2026-08-08T03:21:34.591Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 723102.71,
		"hash": "935b532e0c67f48c377b49e639494da3a1ca1030cd07afe7095f2de3ef15f1ce"
	},
	{
		"id": "3b561a8fe53c",
		"ts": "2026-08-08T01:16:48.033Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115632319.16,
		"hash": "3b561a8fe53ce4989c5cb9bbb6f70ea0c290841220ee1f394dd52bf76c7543e1"
	},
	{
		"id": "f19ee5cbc12c",
		"ts": "2026-08-08T01:16:48.261Z",
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
		"liquidityUsd": 17397232.3,
		"hash": "f19ee5cbc12cd798a6099f8320d856fb662a52c06346d4b8aba852bd37c296b1"
	},
	{
		"id": "56d6d851136d",
		"ts": "2026-08-08T01:16:48.485Z",
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
		"liquidityUsd": 1047603.88,
		"hash": "56d6d851136d281e3a2a22e2c519834245655b4d0a572a1c717d1f4b46fb143b"
	},
	{
		"id": "16a5e23504e6",
		"ts": "2026-08-08T01:16:48.706Z",
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
		"liquidityUsd": 27465082.69,
		"hash": "16a5e23504e6958abb6cd6430c9eaacda1ebfa29180c1c9e3b004d251a24c9d5"
	},
	{
		"id": "dab23c902527",
		"ts": "2026-08-08T01:16:48.923Z",
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
		"liquidityUsd": 4410759.83,
		"hash": "dab23c902527cd082d9d0d1ee02e4a586505928de1002b16c5d569d0c9276257"
	},
	{
		"id": "7e76c602bbea",
		"ts": "2026-08-08T01:16:49.159Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 922623.23,
		"hash": "7e76c602bbeab07ebe5bcceb735e707846f3e55c0ead16e798215fc062b4ec63"
	},
	{
		"id": "66c0e0552331",
		"ts": "2026-08-08T01:16:49.376Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27465082.69,
		"hash": "66c0e0552331c5166a0d041ba8f43f7cbcf1b9768480bfaba85cc521c331c4a3"
	},
	{
		"id": "a15862bad9d2",
		"ts": "2026-08-08T01:16:49.621Z",
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
		"liquidityUsd": 4339184.12,
		"hash": "a15862bad9d2019e24bbfc13b7d218ceef74c4053b7e05e9dfd05ea1e22fcddb"
	},
	{
		"id": "9174ad7f6211",
		"ts": "2026-08-08T01:16:49.839Z",
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
		"liquidityUsd": 985033.52,
		"hash": "9174ad7f6211172dd6ec78dbcce4b944ce0b2120279b91eb24f808038e51efcc"
	},
	{
		"id": "d2d430b14a31",
		"ts": "2026-08-08T01:16:50.060Z",
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
		"liquidityUsd": 288426.94,
		"hash": "d2d430b14a31e8bfb43e24e9176bf4ae872df08eaae58aae70f7059fb5d06c27"
	},
	{
		"id": "6b1a8c653810",
		"ts": "2026-08-08T01:16:50.265Z",
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
		"liquidityUsd": 9306371.63,
		"hash": "6b1a8c653810774ff1864d57d233dbe5b6aa35c55c594029dfdc20e393ada9cd"
	},
	{
		"id": "d276e2ef8f01",
		"ts": "2026-08-08T01:16:50.471Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3998229.5,
		"hash": "d276e2ef8f0138a364d561923f21e6862a00e59f2d27992fb385537dd2e1e9d0"
	},
	{
		"id": "160dd36b3585",
		"ts": "2026-08-08T01:16:50.677Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2149511.88,
		"hash": "160dd36b35858f5f2fff3d2d9f9778cfdcf791fdf580948de0391216c965f4eb"
	},
	{
		"id": "4b0eefdea04e",
		"ts": "2026-08-08T01:16:50.885Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 551220.14,
		"hash": "4b0eefdea04e7770d7d88a7114ad40d78bb4e0efb3e1bcaf287042bd59f7cb4e"
	},
	{
		"id": "3f68c5c6ab0e",
		"ts": "2026-08-08T01:16:51.089Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 527924.47,
		"hash": "3f68c5c6ab0e936a3a565867553dd9441195ca75d12d4b05049aaf193c0d11d7"
	},
	{
		"id": "70276db3522f",
		"ts": "2026-08-08T01:16:51.297Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 735337.9,
		"hash": "70276db3522fa7de4de8548c4712a6024a635ab9b7415ceeb13cd0c39d2c227e"
	},
	{
		"id": "1e937493da02",
		"ts": "2026-08-08T01:16:51.500Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1794549.66,
		"hash": "1e937493da0258be022393f1bbebee3de93aee6048df9831d9d556e20688c3f0"
	},
	{
		"id": "3cb9ac934232",
		"ts": "2026-08-07T23:29:58.537Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115510626.31,
		"hash": "3cb9ac93423206efbb9d15a55473f43ea6b9f5c132a2df11c40ef861ed9a419a"
	},
	{
		"id": "7117138b624b",
		"ts": "2026-08-07T23:29:58.806Z",
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
		"liquidityUsd": 16845661.43,
		"hash": "7117138b624bbdcfb7ac1708d91051bbe1717fd4613934d4b373020d0fdc2524"
	},
	{
		"id": "a382aa24cc70",
		"ts": "2026-08-07T23:29:59.151Z",
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
		"liquidityUsd": 1048148.87,
		"hash": "a382aa24cc70f15266b5fa002a0417b8357dbe7a67dc33e5bc7e3fa483095d18"
	},
	{
		"id": "5f50f8bf45a0",
		"ts": "2026-08-07T23:29:59.431Z",
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
		"liquidityUsd": 27427992.84,
		"hash": "5f50f8bf45a0fcf1984755eba1f1d11d025f33c258eaf813955d948458985036"
	},
	{
		"id": "179460a60e6f",
		"ts": "2026-08-07T23:29:59.706Z",
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
		"liquidityUsd": 4408671.49,
		"hash": "179460a60e6f9f23212992dad3b75a00ba7ba5374554f04e148ad65ce750c5e9"
	},
	{
		"id": "827049188782",
		"ts": "2026-08-07T23:29:59.969Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 922623.23,
		"hash": "827049188782a476661b8e741a6dcbe9555eb16132bccd120e66bf2de198070c"
	},
	{
		"id": "9a9340d5c295",
		"ts": "2026-08-07T23:30:00.291Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27427992.84,
		"hash": "9a9340d5c2959b25b5d717bf477ca7ed40d747ca0cfbfb113b47bad60dfd2b6b"
	},
	{
		"id": "cb5d6c2d50a3",
		"ts": "2026-08-07T23:30:00.564Z",
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
		"liquidityUsd": 4341832.11,
		"hash": "cb5d6c2d50a360c7125967fc15ec9cad6727d0757fae1a4341b4cb0d4ebc839c"
	},
	{
		"id": "d99d40bcc251",
		"ts": "2026-08-07T23:30:00.831Z",
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
		"liquidityUsd": 985255.47,
		"hash": "d99d40bcc2511f6c207ccae204b1ccc5f71370d93190acfe0a4e0483eb0f4480"
	},
	{
		"id": "e94ce1b9becf",
		"ts": "2026-08-07T23:30:01.157Z",
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
		"liquidityUsd": 9286930.09,
		"hash": "e94ce1b9becf5017233b0e5b3eca2f1ec8538a39389e7822022fb2c25ddcaf2a"
	},
	{
		"id": "a00b19b54c6c",
		"ts": "2026-08-07T23:30:01.471Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2149284.18,
		"hash": "a00b19b54c6c3b6dda1d1735843001a6f4d7ce8caa164b021e2330128758b4f8"
	},
	{
		"id": "8bff0598f73c",
		"ts": "2026-08-07T23:30:01.850Z",
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
		"liquidityUsd": 287188.79,
		"hash": "8bff0598f73cbf388085cdd623e96d573868eace6aed0907a39ff683f88c9efc"
	},
	{
		"id": "ac77b824e644",
		"ts": "2026-08-07T23:30:02.134Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3981489.77,
		"hash": "ac77b824e644639da9e554f2d1d4739ea2e319e8d9db2d8b36e7ba038a2c0fa1"
	},
	{
		"id": "797afe4078ca",
		"ts": "2026-08-07T23:30:02.431Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 554151.87,
		"hash": "797afe4078ca576fc7b98518057a3cfd592c623b60273e26f08bf82872de0d64"
	},
	{
		"id": "2601a1e07033",
		"ts": "2026-08-07T23:30:03.011Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 82501.23,
		"hash": "2601a1e07033d7cf334281c573e449ed79026dd7e04f9a163e85d92f108d953c"
	},
	{
		"id": "c988ec3f24dc",
		"ts": "2026-08-07T23:30:03.340Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1797349.66,
		"hash": "c988ec3f24dcff6a745627ce32a8f990248c60a4864933dedb9cad35d796ffaf"
	},
	{
		"id": "2bd07dda6bcc",
		"ts": "2026-08-07T22:30:39.905Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115521842,
		"hash": "2bd07dda6bccad2ba38bbc1a01b60118919ccc4f67d225ebcfe5f6f1987b4c99"
	},
	{
		"id": "097e151fd2b5",
		"ts": "2026-08-07T22:30:40.319Z",
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
		"liquidityUsd": 16531051.9,
		"hash": "097e151fd2b5d60bc3250370e1ff2706786e723acf6a088df80ee3b5df44be03"
	},
	{
		"id": "9e6bb25e2d86",
		"ts": "2026-08-07T22:30:40.548Z",
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
		"liquidityUsd": 1048634.39,
		"hash": "9e6bb25e2d867c17a992e8023ed9205ec5692029b19cf808ad6f6b2eee874a3f"
	},
	{
		"id": "52a7a4c34a52",
		"ts": "2026-08-07T22:30:40.778Z",
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
		"liquidityUsd": 27442494.5,
		"hash": "52a7a4c34a52a8c284ac50535831333854589cc6c67e15c21bc582593310da06"
	},
	{
		"id": "9bb3b8b85dc2",
		"ts": "2026-08-07T22:30:41.005Z",
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
		"liquidityUsd": 4404960.54,
		"hash": "9bb3b8b85dc2ac40af2d19f01a346e6414b6e75e7fd1e7b41fc6a1ee448398c4"
	},
	{
		"id": "99a941e93116",
		"ts": "2026-08-07T22:30:41.233Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 922623.23,
		"hash": "99a941e931162a351b34c0c107764ffa44ce51e33887a91c1b338d123dbf6b26"
	},
	{
		"id": "1a2aa316cbb6",
		"ts": "2026-08-07T22:30:41.459Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27442494.5,
		"hash": "1a2aa316cbb682178ba6015d3e9d9a9bf4b58f6a64d6ebf606a6460fb6c42ee8"
	},
	{
		"id": "076c6298bbc6",
		"ts": "2026-08-07T22:30:41.713Z",
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
		"liquidityUsd": 4340892.78,
		"hash": "076c6298bbc6b0d98eef8ce26bed93c602cd36b595bbf95ea6a2cf4acf2f13dc"
	},
	{
		"id": "b20a1c8af30d",
		"ts": "2026-08-07T22:30:41.945Z",
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
		"liquidityUsd": 982177.1,
		"hash": "b20a1c8af30daf132c19171031d2fe6732a4410f46a407ced950512bcd553865"
	},
	{
		"id": "65e34c2c7b13",
		"ts": "2026-08-07T22:30:42.176Z",
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
		"liquidityUsd": 9339929.46,
		"hash": "65e34c2c7b136b0bb2ddfcada4c055e33eeacf2df803d80283177e14613daf65"
	},
	{
		"id": "a04e8189341a",
		"ts": "2026-08-07T22:30:42.392Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 554195.75,
		"hash": "a04e8189341a2db4e35f6610995c72ed85d4fbaeb329140ac7a64a17ea34d685"
	},
	{
		"id": "79ed3cc9345c",
		"ts": "2026-08-07T22:30:42.680Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4049021.32,
		"hash": "79ed3cc9345cc7dfabe495b1831d4f1573c21b81324d82e545252abec82454a6"
	},
	{
		"id": "af8544aab4c9",
		"ts": "2026-08-07T22:30:43.021Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2149635.52,
		"hash": "af8544aab4c9f954857a00530987cb6810e40acc0baebce96a8124542ea33edd"
	},
	{
		"id": "e8d94cf97a3d",
		"ts": "2026-08-07T22:30:43.240Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 72710.03,
		"hash": "e8d94cf97a3dd3b45298d48cb52ff6be995eeb06b792e88c00ca735316e5e32c"
	},
	{
		"id": "fbaf0481d81b",
		"ts": "2026-08-07T22:30:43.457Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1797554.02,
		"hash": "fbaf0481d81b8643a9cee3f78ca4d67b3f1c6dff88d2c8a33376695bd4ea284e"
	},
	{
		"id": "1083b2310b6d",
		"ts": "2026-08-07T22:30:43.669Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 73975.52,
		"hash": "1083b2310b6d9fbdf243afedebd9035747803fc6e4b6b102f3fbb1ef72201feb"
	},
	{
		"id": "7ae2aa942f70",
		"ts": "2026-08-07T21:35:18.921Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115331858.76,
		"hash": "7ae2aa942f7056d246ddec1cdf7fdb1384ddcba761ade0b1f02719e3422c4cb0"
	},
	{
		"id": "62127a4ed848",
		"ts": "2026-08-07T21:35:19.302Z",
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
		"liquidityUsd": 15077643.67,
		"hash": "62127a4ed84876c1795ceade4164d87888ecb5ec6f328e2f3ca78685a2740e2a"
	},
	{
		"id": "8ceb1783636f",
		"ts": "2026-08-07T21:35:19.691Z",
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
		"liquidityUsd": 1049635.17,
		"hash": "8ceb1783636f05b4650ebc6d269acd688125a52c19fe9e309a001d4a2e712d0d"
	},
	{
		"id": "9c8419d9ab28",
		"ts": "2026-08-07T21:35:19.886Z",
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
		"liquidityUsd": 27520619.57,
		"hash": "9c8419d9ab2831f3bbb517b5c154f2a1f07730ace54c9168b89c2a1ad2f97294"
	},
	{
		"id": "df13817aa9ea",
		"ts": "2026-08-07T21:35:20.082Z",
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
		"liquidityUsd": 4404960.54,
		"hash": "df13817aa9ea5b8f663e0330bb5cf7710747be9df9372f11f40c44bf642e153e"
	},
	{
		"id": "bc051ae49a80",
		"ts": "2026-08-07T21:35:20.279Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 925169.62,
		"hash": "bc051ae49a808e82f1972514a683094276eab643597b4e2bd5091b9da40172c9"
	},
	{
		"id": "38849e27177d",
		"ts": "2026-08-07T21:35:20.484Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27520619.57,
		"hash": "38849e27177d70003c6e326fd0e2855b440002d15889c70dedc256478bfc43d8"
	},
	{
		"id": "58032cf38d1e",
		"ts": "2026-08-07T21:35:20.689Z",
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
		"liquidityUsd": 4338828.61,
		"hash": "58032cf38d1e16e391825968f6b830c92ed5a4199f02f3a65c58cd0623d48e93"
	},
	{
		"id": "e436358b0e12",
		"ts": "2026-08-07T21:35:20.911Z",
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
		"liquidityUsd": 980234.99,
		"hash": "e436358b0e1254fc8d667c69665a6ce69a07d4b8e2dcd7a6cee8504d729b14fc"
	},
	{
		"id": "5cf4156bfd06",
		"ts": "2026-08-07T21:35:21.116Z",
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
		"liquidityUsd": 9364664.79,
		"hash": "5cf4156bfd06e506588dacf7e878aa5cd84db06ba9312d7d3faf6d8d22ba584b"
	},
	{
		"id": "974f86fbd786",
		"ts": "2026-08-07T21:35:21.320Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 554706.78,
		"hash": "974f86fbd786276f474e0be33db291d85c690f8357ea2c692c6a3b22d5207129"
	},
	{
		"id": "7ae04fcd7c09",
		"ts": "2026-08-07T21:35:21.505Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 279239.46,
		"hash": "7ae04fcd7c09360358525190ee94fb467f373e2fc035f61087096ce74e767c30"
	},
	{
		"id": "ba03f5678fec",
		"ts": "2026-08-07T21:35:21.694Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4051141.39,
		"hash": "ba03f5678fec184f76b53e9ed196b832eedad4b58b3105da0226a45b573acf0b"
	},
	{
		"id": "19417ab428bd",
		"ts": "2026-08-07T21:35:21.904Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 632311.98,
		"hash": "19417ab428bd87c16c6fc2e133004b006b231e0708f16d43827fe8d04ce371bf"
	},
	{
		"id": "3fe87d8b7b05",
		"ts": "2026-08-07T21:35:22.110Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1799613.82,
		"hash": "3fe87d8b7b050ff8a0fcb3a2e3905de7a6d31d9bd437cee9e7209bfaf0e246b9"
	},
	{
		"id": "244117c3d404",
		"ts": "2026-08-07T21:35:22.337Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 78802.62,
		"hash": "244117c3d4046f9814afa29d3fafa52f1018cf806368e7d33d7555303d1adacc"
	},
	{
		"id": "e12e2250caed",
		"ts": "2026-08-07T20:36:25.554Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115330481.06,
		"hash": "e12e2250caed00120094a2881bf133c1b139b87f76d8fff5b3f87518102180a4"
	},
	{
		"id": "4e08142a894a",
		"ts": "2026-08-07T20:36:25.818Z",
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
		"liquidityUsd": 17026257.9,
		"hash": "4e08142a894a8a24dc26d63bda91b3280e67806a44c87387787b721cc4838184"
	},
	{
		"id": "960f73744a7d",
		"ts": "2026-08-07T20:36:26.085Z",
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
		"liquidityUsd": 1063388.01,
		"hash": "960f73744a7dd8aa8af483e4311b75dc549c8da94d8a75a82a53b1ace637ba00"
	},
	{
		"id": "9bc52b51d014",
		"ts": "2026-08-07T20:36:26.573Z",
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
		"liquidityUsd": 27525765.06,
		"hash": "9bc52b51d01433e12351d23b2d707fccaa3e462b28a67f0fd5f5a4720f15159f"
	},
	{
		"id": "ece9f0089e11",
		"ts": "2026-08-07T20:36:26.836Z",
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
		"liquidityUsd": 4415346.79,
		"hash": "ece9f0089e116b8a56985997feb6708a4d4449a0471fb8bb086c224c31d1eda9"
	},
	{
		"id": "d9bd398e9850",
		"ts": "2026-08-07T20:36:27.098Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 919577.69,
		"hash": "d9bd398e985064a052dff2672dfdd8fbabd549a92aedcdfe5f88a0b177de1231"
	},
	{
		"id": "c27123e83a00",
		"ts": "2026-08-07T20:36:27.378Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27525765.06,
		"hash": "c27123e83a00535e84ddd0301df92d9edfcdd361a092099d6636577595376de8"
	},
	{
		"id": "fa4b36cad1b6",
		"ts": "2026-08-07T20:36:27.635Z",
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
		"liquidityUsd": 4343901.76,
		"hash": "fa4b36cad1b63a0e74ab9d684af11567777621792d044eb58b9009ecc60a4f52"
	},
	{
		"id": "3cbf632f81fa",
		"ts": "2026-08-07T20:36:27.904Z",
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
		"liquidityUsd": 979539.69,
		"hash": "3cbf632f81facb51c2aa03a7c76f253fcfd4335f0af2cacaa91b4379863a6d3c"
	},
	{
		"id": "20eb248e7272",
		"ts": "2026-08-07T20:36:28.165Z",
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
		"liquidityUsd": 9375384.29,
		"hash": "20eb248e7272b00400a87340533ed9b44b146211ad5c1aecffd6f6b080ce6af2"
	},
	{
		"id": "1c7c5531ee8f",
		"ts": "2026-08-07T20:36:28.412Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 549328.45,
		"hash": "1c7c5531ee8f0630273b9570189c42e5f32ebe8d37380ea554c6c97f5d7a972b"
	},
	{
		"id": "762bd094d630",
		"ts": "2026-08-07T20:36:28.661Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 285334.16,
		"hash": "762bd094d630b0a9fc3ec7bdc273277ba40b176a98040780121a770090f3519b"
	},
	{
		"id": "bf9938c77463",
		"ts": "2026-08-07T20:36:28.906Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4079261.05,
		"hash": "bf9938c77463333f5bc50fc27c0873b69383476364d573fbe4fa10488ee387f7"
	},
	{
		"id": "0239cb587d53",
		"ts": "2026-08-07T20:36:29.152Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 638512.54,
		"hash": "0239cb587d5310a4f9df139b7b85e36cd8e2066f399072b5a6b598d9297e42db"
	},
	{
		"id": "7b555a1eec7c",
		"ts": "2026-08-07T20:36:29.397Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3335155.96,
		"hash": "7b555a1eec7c0c47d2a871bd0ce5339964d7a99edd8c84a313489865fddafbfd"
	},
	{
		"id": "85cae20396a7",
		"ts": "2026-08-07T20:36:29.642Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1801163.54,
		"hash": "85cae20396a7c48f73b38abc7b5d5474ddcab7ba41353381a30c16ddb72a5b4a"
	},
	{
		"id": "2ac63eee32b6",
		"ts": "2026-08-07T19:50:07.993Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115309689.53,
		"hash": "2ac63eee32b69dee4053a0b36ca1cbea6c79a07e9bca92dadd6aaf6063a3ddfd"
	},
	{
		"id": "08f19d22d5b9",
		"ts": "2026-08-07T19:50:08.276Z",
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
		"liquidityUsd": 16651846.16,
		"hash": "08f19d22d5b96570875aebc95c171aac95f3fa77fd4e672dd25d2ba0d680499a"
	},
	{
		"id": "8f1c76c358c3",
		"ts": "2026-08-07T19:50:08.541Z",
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
		"liquidityUsd": 1063388.01,
		"hash": "8f1c76c358c396e8a680fe3e1206e7b521b13381b61ed7131d44d3b2cadde170"
	},
	{
		"id": "a2e13d7f01f7",
		"ts": "2026-08-07T19:50:08.804Z",
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
		"liquidityUsd": 27615242.84,
		"hash": "a2e13d7f01f76170ff66b5c8fef915a3035b710a085aea1ccc77ae593d7d9540"
	},
	{
		"id": "d0664b9c799d",
		"ts": "2026-08-07T19:50:09.062Z",
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
		"liquidityUsd": 4399616.77,
		"hash": "d0664b9c799dcddbde78b40554aa501cdfc3645f837e44696232e15d34d2967c"
	},
	{
		"id": "fd846d90298f",
		"ts": "2026-08-07T19:50:09.323Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 926966.36,
		"hash": "fd846d90298fd9070837b897c674c3d735916cbd4e016a3d5e4ebb6c7d5b5fb0"
	},
	{
		"id": "d04b543a45b9",
		"ts": "2026-08-07T19:50:09.581Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27615242.84,
		"hash": "d04b543a45b93a2dca66d991a8beb4c761bf207909a331e245b780296ded4f89"
	},
	{
		"id": "a3e69bde76fd",
		"ts": "2026-08-07T19:50:09.859Z",
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
		"liquidityUsd": 4347911.74,
		"hash": "a3e69bde76fd2f287f9d07e7415883dffb8153b8f3eb8ec5f622e2db3ac17423"
	},
	{
		"id": "92b1a8e3d5f3",
		"ts": "2026-08-07T19:50:10.123Z",
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
		"liquidityUsd": 979003.38,
		"hash": "92b1a8e3d5f3aa222413f0c0ebfbf2309d6450174659c2bba75d3dd8361b9319"
	},
	{
		"id": "2a63e5a91364",
		"ts": "2026-08-07T19:50:10.382Z",
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
		"liquidityUsd": 9418939.78,
		"hash": "2a63e5a9136433d179c4022a3a194a7d4e93c581660418a2cb7d815e1d6bc09f"
	},
	{
		"id": "a89830471262",
		"ts": "2026-08-07T19:50:10.625Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 285751.66,
		"hash": "a89830471262d0c90af3c555aaeb938cf8b719d62cd727a8472564a250664106"
	},
	{
		"id": "6d3bc5eb1fc3",
		"ts": "2026-08-07T19:50:10.871Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 548121.31,
		"hash": "6d3bc5eb1fc3d7fbbe2c47ec2eece0d6d5f40ff8d4278aff73ce590abd550382"
	},
	{
		"id": "e1f800f60189",
		"ts": "2026-08-07T19:50:11.112Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4089271.42,
		"hash": "e1f800f60189cfe2d5352b4f5ff411cad9ffe27a578a3cd6c30317b02f0c3450"
	},
	{
		"id": "a4427b3ac6e7",
		"ts": "2026-08-07T19:50:11.355Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3366939.04,
		"hash": "a4427b3ac6e7076b74b9beed3ee8b7cae15113df019450fe85654e9045384857"
	},
	{
		"id": "0c4ca31e6b06",
		"ts": "2026-08-07T19:50:11.600Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 636704.83,
		"hash": "0c4ca31e6b0631c154e4b86bc09c3cfc874b00ce0d2635640ed41401a7a4f6bf"
	},
	{
		"id": "9914900d082f",
		"ts": "2026-08-07T19:50:11.841Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 629193.22,
		"hash": "9914900d082f210f4304a59d1767a2c25765c90d61fbac014109e5b186d993e1"
	},
	{
		"id": "281b36ffaffa",
		"ts": "2026-08-07T18:50:39.698Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115294012.4,
		"hash": "281b36ffaffaf57ad7a36dc7ee308213cbc2ea15e06c5f3bbf6847550041e8ed"
	},
	{
		"id": "74a282b41adc",
		"ts": "2026-08-07T18:50:39.981Z",
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
		"liquidityUsd": 16672871.29,
		"hash": "74a282b41adc2cb1fe469cfc27ccf5aacc9d06d35ac85c1f7427669cb2203fea"
	},
	{
		"id": "c9f3482b6e1f",
		"ts": "2026-08-07T18:50:40.253Z",
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
		"liquidityUsd": 1063388.01,
		"hash": "c9f3482b6e1f3483dfb0bf13e18a8b88bc8fdce719456660c4488372d5ecbbb9"
	},
	{
		"id": "13b54a821bb2",
		"ts": "2026-08-07T18:50:40.534Z",
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
		"liquidityUsd": 27523138.74,
		"hash": "13b54a821bb2a96d1a7f6409a5dff2d9f73591d25405830b8ff3a2b4203c93c7"
	},
	{
		"id": "1d5090cb2717",
		"ts": "2026-08-07T18:50:40.807Z",
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
		"liquidityUsd": 4404660.19,
		"hash": "1d5090cb2717567e86bf48f8975cbd5c068dca1bbb9bcfb96e72459c6a1955ca"
	},
	{
		"id": "4402447a648a",
		"ts": "2026-08-07T18:50:41.073Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 927151.88,
		"hash": "4402447a648ad6429e4462450ec111156d79cdf8023b8e27884424c91d03cbfd"
	},
	{
		"id": "7254a46353f7",
		"ts": "2026-08-07T18:50:41.352Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27523138.74,
		"hash": "7254a46353f76ccd0fa230a5bca1461b12fdb0a6c8623470832c29c394de89f5"
	},
	{
		"id": "6b2623c07364",
		"ts": "2026-08-07T18:50:41.623Z",
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
		"liquidityUsd": 4377980.03,
		"hash": "6b2623c0736405f8ad6640f93b5ae71854a735bc137abdfc6e563a0497e1ec0a"
	},
	{
		"id": "efea52afd9d1",
		"ts": "2026-08-07T18:50:41.898Z",
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
		"liquidityUsd": 980996.61,
		"hash": "efea52afd9d1970066078a0b8676da61e471239c1a74ea38a9f1586ffe044ebc"
	},
	{
		"id": "ed28ab49a446",
		"ts": "2026-08-07T18:50:42.168Z",
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
		"liquidityUsd": 9398571.76,
		"hash": "ed28ab49a446c10867e16a6b5d47af011771762d8363bb9285d51e0d6fa06a21"
	},
	{
		"id": "e249df8ab33e",
		"ts": "2026-08-07T18:50:42.499Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 289657.25,
		"hash": "e249df8ab33e93f2aa0e4b39e23634c9446b111b206c554e1da8ce5e330c1590"
	},
	{
		"id": "b75c5abd6110",
		"ts": "2026-08-07T18:50:42.756Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 541076.39,
		"hash": "b75c5abd6110f5b1a2dcf11f869c754a4972019978bb37c2c47b608f604cf81d"
	},
	{
		"id": "7b65f52d4ec7",
		"ts": "2026-08-07T18:50:43.019Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4022640.7,
		"hash": "7b65f52d4ec7a01bf4d10b19843374be046d735cba2ed82fb7a7fbf2fa4b4452"
	},
	{
		"id": "21c986459b4d",
		"ts": "2026-08-07T18:50:43.271Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 625087.41,
		"hash": "21c986459b4d86eadc0c9f145ebd26ce84dfec009e13739367de56fe76748b1c"
	},
	{
		"id": "7baaa13a313e",
		"ts": "2026-08-07T18:50:43.527Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2174782.42,
		"hash": "7baaa13a313ed3ec528bc44695ab3a60d66c45244721bd6a62a5e2bcf0a6ce82"
	},
	{
		"id": "19beade50244",
		"ts": "2026-08-07T18:50:43.825Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3385550.14,
		"hash": "19beade50244b650987fae62c8763f0844ea613ba12c8947d656a565af22f6b8"
	},
	{
		"id": "b8514b15272a",
		"ts": "2026-08-07T18:50:44.088Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4699034.7,
		"hash": "b8514b15272ae54f2886e67db0debe1f7caa72bf52697d2d840aea5d5c29282f"
	},
	{
		"id": "2ce1dabc5b2b",
		"ts": "2026-08-07T17:45:22.298Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115243431.73,
		"hash": "2ce1dabc5b2b57b4a8b5a570a1702f08222e4ccfec196acb78bc76521b613c97"
	},
	{
		"id": "829e04306696",
		"ts": "2026-08-07T17:45:22.497Z",
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
		"liquidityUsd": 16588865.66,
		"hash": "829e04306696dfc3690be1e220ef89392df413acbfbd18add92a2fdde31a51c8"
	},
	{
		"id": "e98f4a5b0795",
		"ts": "2026-08-07T17:45:22.697Z",
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
		"liquidityUsd": 1063388.01,
		"hash": "e98f4a5b079579012611c9ecce4b602e1a63ee651b040cb1aae36f9d117a8866"
	},
	{
		"id": "efe3aa4850a4",
		"ts": "2026-08-07T17:45:22.880Z",
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
		"liquidityUsd": 27023768.54,
		"hash": "efe3aa4850a4e6b434775ce72d54ba2792ad4c0c280611af1f3fb6d40ec90b12"
	},
	{
		"id": "df4fce90ba51",
		"ts": "2026-08-07T17:45:23.071Z",
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
		"liquidityUsd": 4396084.28,
		"hash": "df4fce90ba513f316950e470b0eb3e6bd1ebedad5994e1e31e7a906f77516acc"
	},
	{
		"id": "0505fdd3841e",
		"ts": "2026-08-07T17:45:23.271Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 927151.88,
		"hash": "0505fdd3841e4f9863d0d71d801b1e9e676ff1e8a5a5b0aa484d93dd5eea8839"
	},
	{
		"id": "c00ba05809b7",
		"ts": "2026-08-07T17:45:23.481Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27023768.54,
		"hash": "c00ba05809b768bf60cfb1122168bd25fa752e88b12bb753df4b5e8797a60e4b"
	},
	{
		"id": "11810eeabb7f",
		"ts": "2026-08-07T17:45:23.674Z",
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
		"liquidityUsd": 4386717.82,
		"hash": "11810eeabb7fc028421b7e790774f9257abbd5a486c0f0f2ec0b61624ce36c87"
	},
	{
		"id": "b997af123094",
		"ts": "2026-08-07T17:45:23.860Z",
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
		"liquidityUsd": 982438,
		"hash": "b997af1230945966f525bfa8e6faf493c4167c5ca06b5e3967037e55ab3555f0"
	},
	{
		"id": "41779eb9b5f1",
		"ts": "2026-08-07T17:45:24.045Z",
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
		"liquidityUsd": 9416937.47,
		"hash": "41779eb9b5f185c694dd55a937b290fe553af6cf5b9e3cdce9273c7882a6e612"
	},
	{
		"id": "341e9e0372df",
		"ts": "2026-08-07T17:45:24.224Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 289438.78,
		"hash": "341e9e0372dfe02342085384f2c1de841355a5235bc32d4ee54c1e0bda28e0d6"
	},
	{
		"id": "be0c08bd733e",
		"ts": "2026-08-07T17:45:24.402Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 539414.66,
		"hash": "be0c08bd733e045c1fcc7820f94be72ad2c6f338ad461f34339afd07d072d2d9"
	},
	{
		"id": "2246a46c1e59",
		"ts": "2026-08-07T17:45:24.585Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4060850.35,
		"hash": "2246a46c1e590d03c0622becaa71d2ac81bee33178277f26e74eb025930db878"
	},
	{
		"id": "aa085b30deeb",
		"ts": "2026-08-07T17:45:24.767Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 625219.03,
		"hash": "aa085b30deebab485e653559e51013f71e90a8ac5eb78190e8c1f33ef4e476a9"
	},
	{
		"id": "0f45c958898f",
		"ts": "2026-08-07T17:45:24.960Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2176664.44,
		"hash": "0f45c958898f9e735b2c926685f3caec9d39f3183f0e66991f6ea3f11719f0f2"
	},
	{
		"id": "89dbd7f347d7",
		"ts": "2026-08-07T17:45:25.153Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 300106.18,
		"hash": "89dbd7f347d7d16f13261f85dc54dc14bf1a27d7a5c6d663ff2b4ef4c8bdd393"
	},
	{
		"id": "06b29e28ea22",
		"ts": "2026-08-07T17:45:25.496Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3358576.64,
		"hash": "06b29e28ea221a316debbee23a5c808512ea96bd10271e91562fb71bf19b6d6a"
	},
	{
		"id": "7a0cd423d487",
		"ts": "2026-08-07T16:50:37.563Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115445405.23,
		"hash": "7a0cd423d4878e00e133f7f986af9977df186f5cc3fd422121057014b2fec4cd"
	},
	{
		"id": "2bdd6e1070e2",
		"ts": "2026-08-07T16:50:37.821Z",
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
		"liquidityUsd": 17145568.1,
		"hash": "2bdd6e1070e2f8156c282c684114a185fc11dd1070ad2ac3c3cc629b890de2a9"
	},
	{
		"id": "3bbc3ea84f7b",
		"ts": "2026-08-07T16:50:38.086Z",
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
		"liquidityUsd": 1063388.01,
		"hash": "3bbc3ea84f7bd0c7ccd5af7062dd253b9d5b521b3f76629f052f6a08a9f48a77"
	},
	{
		"id": "bdea77e94e28",
		"ts": "2026-08-07T16:50:38.583Z",
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
		"liquidityUsd": 27020711.94,
		"hash": "bdea77e94e28920b2d13de09cfa358f5ff3f01cfa61bc76261a528a666c7c25a"
	},
	{
		"id": "38deb9bb35d6",
		"ts": "2026-08-07T16:50:38.842Z",
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
		"liquidityUsd": 4408593.35,
		"hash": "38deb9bb35d659f8068313ad5fd34d50a29b2c4f59549560ccea2b399835dbb6"
	},
	{
		"id": "72be4433a350",
		"ts": "2026-08-07T16:50:39.096Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 927142.84,
		"hash": "72be4433a3502b78977b6c97e381ab2056dc13a47586d07f7c9cdbe9aa42b6c7"
	},
	{
		"id": "ca78dee14a47",
		"ts": "2026-08-07T16:50:39.358Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27026259.7,
		"hash": "ca78dee14a477ad76905c4745f07e50e99ad32cc78805ac2e0be92b3bc35ac65"
	},
	{
		"id": "6f382f4cd103",
		"ts": "2026-08-07T16:50:39.867Z",
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
		"liquidityUsd": 4395457.9,
		"hash": "6f382f4cd1035eb10c98b13107f0034a79a67caf14089643eb99cb1c4c6c0fca"
	},
	{
		"id": "56b55f1de874",
		"ts": "2026-08-07T16:50:40.142Z",
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
		"liquidityUsd": 981928.34,
		"hash": "56b55f1de874ec0dc28eb9a608b684795105855ccbf2cfaaeb6e7d507f6f64e8"
	},
	{
		"id": "187645bbae7c",
		"ts": "2026-08-07T16:50:40.410Z",
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
		"liquidityUsd": 9455940.32,
		"hash": "187645bbae7cce6ebfc6c53494eb6ee24911b691078ddd63040907e62c42c569"
	},
	{
		"id": "b77eca9b3179",
		"ts": "2026-08-07T16:50:40.786Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2183520.11,
		"hash": "b77eca9b31793cb5e3a05f57c432c90dc47e8bd1b01a4315b362739db8314a4e"
	},
	{
		"id": "d77b951bacb0",
		"ts": "2026-08-07T16:50:41.038Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 286593.23,
		"hash": "d77b951bacb0264d7ee14b580feb0926690f573171d0751285e472f959889c7d"
	},
	{
		"id": "0125f35ad6c7",
		"ts": "2026-08-07T16:50:41.283Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 538606.79,
		"hash": "0125f35ad6c759df5f7c8360bbbedd95b0a0b831100fbf7ec7479038b7903191"
	},
	{
		"id": "b6f48895536d",
		"ts": "2026-08-07T16:50:41.521Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 602465.82,
		"hash": "b6f48895536d2d4b529963383f1bc50ce1622c9150108b029146d1c55cb93d65"
	},
	{
		"id": "5124e630d88d",
		"ts": "2026-08-07T16:50:41.767Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4078385.67,
		"hash": "5124e630d88df5145e20aebdbc78f2ff0ae78dd6b5195dec1a27ec38ad3d7759"
	},
	{
		"id": "9cafdc94be51",
		"ts": "2026-08-07T16:50:42.020Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3369948.76,
		"hash": "9cafdc94be516595efea83b7b291753edc0211e5f842edf2cff6fc5dc89d1dbf"
	},
	{
		"id": "216b8d27b445",
		"ts": "2026-08-07T15:52:39.299Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115388550.57,
		"hash": "216b8d27b4459cd82d382554b8a136db0c0060b6ec01077c325adca862aa0a68"
	},
	{
		"id": "61bf2e583b78",
		"ts": "2026-08-07T15:52:39.554Z",
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
		"liquidityUsd": 16022095.28,
		"hash": "61bf2e583b78f79d13a7907735ffb8a67449a44483f918df898a544354bf27af"
	},
	{
		"id": "fac255064725",
		"ts": "2026-08-07T15:52:39.974Z",
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
		"liquidityUsd": 1063388.01,
		"hash": "fac255064725d17c7b8fce53c5a3db7b3128371cce218f347b8a7806138b8c41"
	},
	{
		"id": "26445b6dad28",
		"ts": "2026-08-07T15:52:40.233Z",
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
		"liquidityUsd": 26967976.85,
		"hash": "26445b6dad2813c54d3c114b78539623dffc38b80da5a4934323a404f5e4d5f3"
	},
	{
		"id": "96aa3b7b8dea",
		"ts": "2026-08-07T15:52:40.465Z",
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
		"liquidityUsd": 4415371.34,
		"hash": "96aa3b7b8dea25c508d6c5e7c1acdce09316e7d36895a0df6a036bf91087a97b"
	},
	{
		"id": "a6efea330265",
		"ts": "2026-08-07T15:52:40.712Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 927263.78,
		"hash": "a6efea3302659c36383bde1b4111379dd9ddb653fac4e0e5f9a253b42d664d6d"
	}
]
