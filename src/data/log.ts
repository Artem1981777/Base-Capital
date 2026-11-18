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
	"updatedAt": "2026-11-18T19:55:01.944Z",
	"tokensScored": 23122,
	"verdictsIssued": 23122,
	"safe": 19706,
	"risky": 1619,
	"likelyRug": 1797,
	"ticks": 1298
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "c27ad7898d0c",
		"ts": "2026-11-18T19:54:57.868Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 86825422.62,
		"hash": "c27ad7898d0cac6072c1a92402283201da6cb285cf1619be5fe8a1a73324b451"
	},
	{
		"id": "a58148ac96f0",
		"ts": "2026-11-18T19:54:58.106Z",
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
		"liquidityUsd": 16021993.5,
		"hash": "a58148ac96f0dfb08b63770c6f401f848bb5dc3170e565b526d956747451c3d4"
	},
	{
		"id": "f4abf858b978",
		"ts": "2026-11-18T19:54:58.306Z",
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
		"liquidityUsd": 361674.35,
		"hash": "f4abf858b978013e8be3302a815308c74dae147962c3bd6d73a5a520ec93e31a"
	},
	{
		"id": "d2c5a89a8f2e",
		"ts": "2026-11-18T19:54:58.538Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3621233.18,
		"hash": "d2c5a89a8f2ee8ee6481776c526cbc7bb823df353f7e5c51df446adbe4261f97"
	},
	{
		"id": "37d9384e6982",
		"ts": "2026-11-18T19:54:58.745Z",
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
		"liquidityUsd": 865344.92,
		"hash": "37d9384e6982da6bd02df83d25437fb504bc9bcac3b580cd70fc1292666003a7"
	},
	{
		"id": "10adc974ef55",
		"ts": "2026-11-18T19:54:58.967Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 826439.02,
		"hash": "10adc974ef555e169ab657ff991815d985b8ffd4e31d312a31daf534521e07b1"
	},
	{
		"id": "16e3d0f57b85",
		"ts": "2026-11-18T19:54:59.160Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3621233.18,
		"hash": "16e3d0f57b85503ae7030d82aaf6456ebd97dc99adb014248a701f5c6d4977fe"
	},
	{
		"id": "cb9053bf13c4",
		"ts": "2026-11-18T19:54:59.449Z",
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
		"liquidityUsd": 1665468.7,
		"hash": "cb9053bf13c43adbea84425c3d0cdfadb11977940cbe010774c574ceaa8ae986"
	},
	{
		"id": "431332d8c28f",
		"ts": "2026-11-18T19:54:59.653Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"volume_liquidity_anomaly",
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 967436.7,
		"hash": "431332d8c28f1d28aa0c60d1982dedafbb76679b682bb9aae887a065f5b74850"
	},
	{
		"id": "88926950a93e",
		"ts": "2026-11-18T19:54:59.855Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 814503.3,
		"hash": "88926950a93eb455328b5d8d371c14f3dfca592c3a1e7ac00effb4255dda6f8c"
	},
	{
		"id": "54df2f362a32",
		"ts": "2026-11-18T19:55:00.055Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1715751.35,
		"hash": "54df2f362a322b861f4d24e72748f7f57ed1cbaaa378f36e7fc8be0f54148f44"
	},
	{
		"id": "ee5e6245af82",
		"ts": "2026-11-18T19:55:00.252Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"volume_liquidity_anomaly",
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 131757.75,
		"hash": "ee5e6245af827d3f91a2caac4723061470205e414f45d23cbb1400bd54d7de3a"
	},
	{
		"id": "078535eaf237",
		"ts": "2026-11-18T19:55:00.455Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 2750873.93,
		"hash": "078535eaf23725fb4fd0235498ca61e2a6dc3cfbca76e36cb253361c2dd0016e"
	},
	{
		"id": "5fbb0f831795",
		"ts": "2026-11-18T19:55:00.702Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1325338.12,
		"hash": "5fbb0f8317957612212d6cf7b1c3f37972501b9be444a818f7071c111fb1faee"
	},
	{
		"id": "c5a20e24f7ad",
		"ts": "2026-11-18T19:55:01.151Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2022831.89,
		"hash": "c5a20e24f7ad6aa6439322ba7558c349fa9729cb94de109d58c839a68f486d66"
	},
	{
		"id": "667a1e50bcb2",
		"ts": "2026-11-18T19:55:01.340Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 8,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.84,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1609199.6,
		"hash": "667a1e50bcb297a4855665364654ab8a9048afc085d47a63e8c12786a1e76468"
	},
	{
		"id": "c5b79c9bd13c",
		"ts": "2026-11-18T19:55:01.534Z",
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
		"liquidityUsd": 6713925.25,
		"hash": "c5b79c9bd13c7db61eac7f4fdbb7067713cca5cd976450346fa3713606b94a60"
	},
	{
		"id": "cd59e31e2fd1",
		"ts": "2026-11-18T19:55:01.728Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1003215.25,
		"hash": "cd59e31e2fd187e089bb2ed04aed2881655e044f82f56eb63a4b87124bd42ce2"
	},
	{
		"id": "637b38e06167",
		"ts": "2026-11-18T19:55:01.944Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 815427.57,
		"hash": "637b38e061670fef2b75485b4ad5ee9eb4434b47dc1241199a60ea993c923fde"
	},
	{
		"id": "325b791401e9",
		"ts": "2026-11-18T11:02:03.314Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 88713458.61,
		"hash": "325b791401e9a4b4ae034d6284be8fff6534b04b6d87f7be693051c31ca630a3"
	},
	{
		"id": "19bba16fd9dd",
		"ts": "2026-11-18T11:02:04.183Z",
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
		"liquidityUsd": 16311817.83,
		"hash": "19bba16fd9dd12a6a3d88e973d525ee68d3830cc43175d28d51d0508fa4a92c8"
	},
	{
		"id": "5c1a83963875",
		"ts": "2026-11-18T11:02:04.624Z",
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
		"liquidityUsd": 366228.49,
		"hash": "5c1a8396387593b7240dd43a4f543b1c1ebc6addd51f075626d2765365a80af2"
	},
	{
		"id": "6c3af2fa29d6",
		"ts": "2026-11-18T11:02:05.097Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3671606.06,
		"hash": "6c3af2fa29d6dd16faaa28111b74459c316fd2e4c61484241414c5b804352829"
	},
	{
		"id": "848c479ffa51",
		"ts": "2026-11-18T11:02:05.528Z",
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
		"liquidityUsd": 885004.76,
		"hash": "848c479ffa5144d788ebbf7699d3dbdede0311da5b4152ae7483c5f106cd14b0"
	},
	{
		"id": "8c5ae287a555",
		"ts": "2026-11-18T11:02:05.968Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 844148.55,
		"hash": "8c5ae287a555e868fd5d0f5520290aeb705777b5b636133acbb9cfcb7d1f277b"
	},
	{
		"id": "eb11b391ee4d",
		"ts": "2026-11-18T11:02:06.200Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3671606.06,
		"hash": "eb11b391ee4dda441ff924c20a4000606210e3c1eabfe8b40f6ee5237b8bcda1"
	},
	{
		"id": "7896d097a8c0",
		"ts": "2026-11-18T11:02:06.691Z",
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
		"liquidityUsd": 1713847.25,
		"hash": "7896d097a8c098f6ec97ef473765c70dc1702ba0725b59d9122105a1d5e257d9"
	},
	{
		"id": "3147ea45d7ed",
		"ts": "2026-11-18T11:02:06.923Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"volume_liquidity_anomaly",
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 830428.36,
		"hash": "3147ea45d7ed3810b398f337a9d81e5ecad475e0bf0a3c5c576991d9222da055"
	},
	{
		"id": "80645f1c2104",
		"ts": "2026-11-18T11:02:07.392Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 885024.88,
		"hash": "80645f1c2104b807cf4756be422228621f797552460e4fc7b8ed7d519ac452b6"
	},
	{
		"id": "4625e17c3c04",
		"ts": "2026-11-18T11:02:07.619Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 57379.93,
		"hash": "4625e17c3c04462c2fb6c082fe17af188af9bc909093739a6fba69c0c8accaed"
	},
	{
		"id": "507129148b11",
		"ts": "2026-11-18T11:02:07.840Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1807199.77,
		"hash": "507129148b11698b7c749fc6b2a84e8dab140096f9b9aee49c6b49a2fd851984"
	},
	{
		"id": "2b7bd2e59397",
		"ts": "2026-11-18T11:02:08.080Z",
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
		"liquidityUsd": 790590.35,
		"hash": "2b7bd2e59397607f2ac12cc4b438ccedc8f347f6b1ccbf317b005ab6a6b9e8a5"
	},
	{
		"id": "165101013531",
		"ts": "2026-11-18T11:02:08.309Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1360300.77,
		"hash": "1651010135314b1c8972b470105ebde8fc7aec904fa9312e9cfe7094e97cc92a"
	},
	{
		"id": "22890d5c3d0c",
		"ts": "2026-11-18T11:02:08.528Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2793866.96,
		"hash": "22890d5c3d0c463429f705f8717cfe5134cd8e02e6a4e45e8218b172a6101518"
	},
	{
		"id": "2e3413784c71",
		"ts": "2026-11-18T11:02:08.751Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3429443.43,
		"hash": "2e3413784c714a82533532fd915b118bc73080676130902e247ed8c99532143e"
	},
	{
		"id": "10411727e9f7",
		"ts": "2026-11-18T11:02:08.970Z",
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
		"liquidityUsd": 804896.74,
		"hash": "10411727e9f7c0a0fba076b79d707fcdd0106936bd1a75a4f9cc1e95f20f25b8"
	},
	{
		"id": "1cc559e9bc90",
		"ts": "2026-11-18T11:02:09.191Z",
		"symbol": "AX1",
		"token": "0x0947FB7076BFa307796F8fd533055f6016C6cccC",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 392831.55,
		"hash": "1cc559e9bc9010fb2f41781b55109604064ea9b07ac0680216ed5042c68f05a8"
	},
	{
		"id": "354dc236cbff",
		"ts": "2026-11-18T11:02:09.410Z",
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
		"liquidityUsd": 2157314.33,
		"hash": "354dc236cbff210511e331898e9667b7deb4b2d16173e336b5d9f49a065a19bc"
	},
	{
		"id": "689ab77601a1",
		"ts": "2026-11-18T11:02:09.645Z",
		"symbol": "infi",
		"token": "0x9f4c76F421f47b3C234f841F477897f1D895177D",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 347593.83,
		"hash": "689ab77601a12303e1799f12a9dd54359a65c7dc83820e51576e2ae2c81f7aa5"
	},
	{
		"id": "c8f669e5f290",
		"ts": "2026-11-18T02:03:16.113Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 88768099.46,
		"hash": "c8f669e5f290f8adbd78c3c52f89842543fb415c2ad3179c5f84adaa104e8fb1"
	},
	{
		"id": "a2d952ee28cb",
		"ts": "2026-11-18T02:03:16.340Z",
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
		"liquidityUsd": 16276943.17,
		"hash": "a2d952ee28cbc68d9e68f88ae734569b30b2cef401288cfd3b9c850f4839053e"
	},
	{
		"id": "d67a76d7aae6",
		"ts": "2026-11-18T02:03:16.584Z",
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
		"liquidityUsd": 370347.53,
		"hash": "d67a76d7aae6e307b01643538766fc3bb3620cbf204ee2d9d97218744e112845"
	},
	{
		"id": "36ba027d674c",
		"ts": "2026-11-18T02:03:16.818Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3696119.25,
		"hash": "36ba027d674c1095e4ca6b14b9d839d75dbd9a661bd1722d8b34db84f0df2329"
	},
	{
		"id": "02d062fd7577",
		"ts": "2026-11-18T02:03:17.050Z",
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
		"liquidityUsd": 882086.73,
		"hash": "02d062fd7577c9185da284fa25b967bc45855e9103fe8e77b37cd86505181a0c"
	},
	{
		"id": "2f165739ed32",
		"ts": "2026-11-18T02:03:17.268Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 842602.95,
		"hash": "2f165739ed32a37b9dd20d601f143ad856b204d5d15f1d6b625cad378883e37a"
	},
	{
		"id": "761b7349258b",
		"ts": "2026-11-18T02:03:17.483Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3696833.62,
		"hash": "761b7349258bb8205f911a72f06f442c9f8ecf821dc6717775d7bf8bced4b731"
	},
	{
		"id": "b1270f58cb70",
		"ts": "2026-11-18T02:03:17.737Z",
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
		"liquidityUsd": 1805121.33,
		"hash": "b1270f58cb705db1d1eb3eda53b32150ed7e154c46685fe443154a09f4339f20"
	},
	{
		"id": "59ef54b37bb6",
		"ts": "2026-11-18T02:03:17.969Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"volume_liquidity_anomaly",
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 833977.05,
		"hash": "59ef54b37bb6a3802cf5259f62e9796bea72d8cace16408c5f8da51709fdf1a8"
	},
	{
		"id": "d8bbbb1dd70c",
		"ts": "2026-11-18T02:03:18.177Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 902503.16,
		"hash": "d8bbbb1dd70c9d1308104eb3daa20b629a096ca08b7862d1e8a7ae6f324dcf09"
	},
	{
		"id": "82ed82caae16",
		"ts": "2026-11-18T02:03:18.425Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 56338.12,
		"hash": "82ed82caae166306c286232a00af065af6fde98bc11288098ab99864315d36af"
	},
	{
		"id": "56ed7843c8f3",
		"ts": "2026-11-18T02:03:18.647Z",
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
		"liquidityUsd": 784869.46,
		"hash": "56ed7843c8f34feb7fe152beeb78ffe67b69ad07bc73b0618b774a366f31451b"
	},
	{
		"id": "e349ddb9cf3b",
		"ts": "2026-11-18T02:03:18.862Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 576442.4,
		"hash": "e349ddb9cf3b96a1980893fea7d69e6579d2e7a860ecd627c80b7daaf1b56c8d"
	},
	{
		"id": "393becdaf635",
		"ts": "2026-11-18T02:03:19.059Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1359841.86,
		"hash": "393becdaf63566a3cb8904e85326eb365a0ed9348ac3c8eb08873eeba19ab86f"
	},
	{
		"id": "e626d6b155c5",
		"ts": "2026-11-18T02:03:19.423Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1683162.66,
		"hash": "e626d6b155c54e6785fa2a2085c557833c1918c38b24b6ebc84a73a02b16e759"
	},
	{
		"id": "1ef54b054dac",
		"ts": "2026-11-18T02:03:19.636Z",
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
		"liquidityUsd": 843969.38,
		"hash": "1ef54b054dacf4286dd0609109a2f454a252912cab5b59f244f4049e04ee9e32"
	},
	{
		"id": "931bffe53dc9",
		"ts": "2026-11-18T02:03:19.835Z",
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
		"liquidityUsd": 6598201.28,
		"hash": "931bffe53dc95bc6fa9afd2ee63d98d9431496c227a1c654311a36b1be5daf3f"
	},
	{
		"id": "3e737b672b8d",
		"ts": "2026-11-18T02:03:20.108Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1521441.94,
		"hash": "3e737b672b8dbf9dceed74f7ad31d324289457bee7e257e69762e42e2cfa844a"
	},
	{
		"id": "8b6548719d5d",
		"ts": "2026-11-18T02:03:20.327Z",
		"symbol": "SPCXc",
		"token": "0xb2000000000000000000007b9fcbd005511aCBd5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 956360.45,
		"hash": "8b6548719d5d323612a131816e36482e6f00e60b00389224cc899eb816d34c7f"
	},
	{
		"id": "5ae62935718f",
		"ts": "2026-11-17T19:33:25.719Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 88533781.15,
		"hash": "5ae62935718f83596d85852d91942fc1fff69b703f46b140b4d831ddb8b8dbf1"
	},
	{
		"id": "5aa75bcde2f2",
		"ts": "2026-11-17T19:33:26.189Z",
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
		"liquidityUsd": 16086287.24,
		"hash": "5aa75bcde2f22171f7f4c07e1fc94400d2d351ebaff7daeb7a924cebae455384"
	},
	{
		"id": "cd2bfa425c2c",
		"ts": "2026-11-17T19:33:26.645Z",
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
		"liquidityUsd": 195962.46,
		"hash": "cd2bfa425c2cc57306ad34d201e5a748acb95de272039840df83745ade79255d"
	},
	{
		"id": "0787099db18c",
		"ts": "2026-11-17T19:33:27.110Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3692204.52,
		"hash": "0787099db18cb325bc975fea2eb462b9949ec4088d4a1b1a72eb1ee929b7054f"
	},
	{
		"id": "b3d3a5da3235",
		"ts": "2026-11-17T19:33:27.368Z",
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
		"liquidityUsd": 860748.43,
		"hash": "b3d3a5da32351745be852877cf76466de054ae07abf700ed75f20174d25e3eea"
	},
	{
		"id": "71bd11c70fc1",
		"ts": "2026-11-17T19:33:27.621Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 833851.17,
		"hash": "71bd11c70fc14280cffe3ceb6aa6cfc45baf8c747c37f8e753498a37bc8c6814"
	},
	{
		"id": "e4902b8efb9c",
		"ts": "2026-11-17T19:33:27.878Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3692204.52,
		"hash": "e4902b8efb9ccb682957146ab3f5f7bf44a2f771534cb22ded0caff981ec3d87"
	},
	{
		"id": "85ca4d127fbd",
		"ts": "2026-11-17T19:33:28.132Z",
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
		"liquidityUsd": 1790331.98,
		"hash": "85ca4d127fbd930a0b38e51041ad625109eba2503b73fd0025fb7a4d410987ab"
	},
	{
		"id": "7b54fe3ead36",
		"ts": "2026-11-17T19:33:28.390Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 893933.88,
		"hash": "7b54fe3ead36ec88e5b23417b2a59843d2aedb5629cf598568fef7bb8dbfa125"
	},
	{
		"id": "c3ab506668a2",
		"ts": "2026-11-17T19:33:28.642Z",
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
		"liquidityUsd": 56254.65,
		"hash": "c3ab506668a2899aefeae3d6cce304a9868433adbfbb9151f29feafb35459043"
	},
	{
		"id": "63c8cf43a684",
		"ts": "2026-11-17T19:33:28.879Z",
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
		"liquidityUsd": 825502.2,
		"hash": "63c8cf43a684e48b1d624a32e74b8d11b31356e2efae428c217dd45fedec5d39"
	},
	{
		"id": "23225ed1fe01",
		"ts": "2026-11-17T19:33:29.114Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2958666.89,
		"hash": "23225ed1fe01b0d608127653eb786d63d485f17d6eab9dd61704dad5c54a077e"
	},
	{
		"id": "41855951061e",
		"ts": "2026-11-17T19:33:29.353Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 567726.39,
		"hash": "41855951061e6eee0e5da938816da76562a32553a02dec9537e4d11757d26c0d"
	},
	{
		"id": "debb4d1d2a8d",
		"ts": "2026-11-17T19:33:29.590Z",
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
		"liquidityUsd": 779209.72,
		"hash": "debb4d1d2a8d20d48148e01145d414e01c50407ef181ddd834294bc43f871ead"
	},
	{
		"id": "07852758f352",
		"ts": "2026-11-17T19:33:29.824Z",
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
		"liquidityUsd": 782935.49,
		"hash": "07852758f3527d56eae9a16fd7983d250862c8a421a9557eb33e2457a2ca51f8"
	},
	{
		"id": "e9cc56e945ee",
		"ts": "2026-11-17T19:33:30.061Z",
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
		"liquidityUsd": 6524761.49,
		"hash": "e9cc56e945ee5be9f8d8fc8418642e265d70fb10a556919206afecef5979617c"
	},
	{
		"id": "0cca30a3214b",
		"ts": "2026-11-17T19:33:30.298Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1352535.77,
		"hash": "0cca30a3214b22466f08a6cd4d35230c0241e25a3c926313330b66fd50714646"
	},
	{
		"id": "33e3bb8e1ec5",
		"ts": "2026-11-17T19:33:30.532Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1574753.89,
		"hash": "33e3bb8e1ec5b87bdba692a15a0ed5f54e5fe9081f8d0b7a5bdd51a2547702d4"
	},
	{
		"id": "da07b8727560",
		"ts": "2026-11-17T19:33:30.768Z",
		"symbol": "SPCXc",
		"token": "0xb2000000000000000000007b9fcbd005511aCBd5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 969913.16,
		"hash": "da07b8727560eb47e8d4f7e5da0ef63c62350b8f0abe40a001b2b515a0f7621c"
	},
	{
		"id": "df72bb055767",
		"ts": "2026-11-17T10:05:23.024Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 89450837.23,
		"hash": "df72bb0557676f7c95b8df2f22e4eb99f26d51e9352369b3de2d861db24f4bdd"
	},
	{
		"id": "35c3d4134548",
		"ts": "2026-11-17T10:05:23.333Z",
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
		"liquidityUsd": 17602885.92,
		"hash": "35c3d41345489b1c8b2e64999cb6b8378bd8ef0ff665dd67f83a063916bffb25"
	},
	{
		"id": "e6c106ca7207",
		"ts": "2026-11-17T10:05:23.624Z",
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
		"liquidityUsd": 200543.61,
		"hash": "e6c106ca72071e5acf00d7bdccf6010a80b171794f935d9690c2af7307fb54d4"
	},
	{
		"id": "4fc57f98d030",
		"ts": "2026-11-17T10:05:23.870Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3688562.32,
		"hash": "4fc57f98d0301725e718439a01037e50856e8daebfc73c289f78d43bbc981e2f"
	},
	{
		"id": "a55b097b4baf",
		"ts": "2026-11-17T10:05:24.124Z",
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
		"liquidityUsd": 877879.8,
		"hash": "a55b097b4baf6ffb8a25d86d3e6f86b6687bda83058f4b2e323d2d5c33835e40"
	},
	{
		"id": "138993f3aa0b",
		"ts": "2026-11-17T10:05:24.381Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 842330.12,
		"hash": "138993f3aa0b342ce83941b16a2423dedb96da3b44bc3d22a4c139f30579f748"
	},
	{
		"id": "c38b0d315a94",
		"ts": "2026-11-17T10:05:24.644Z",
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
		"liquidityUsd": 228609.02,
		"hash": "c38b0d315a943c80bb8c99bc05b22e44af6448d9ecac1058dd0be3c74f16112f"
	},
	{
		"id": "785c44caca14",
		"ts": "2026-11-17T10:05:24.899Z",
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
		"liquidityUsd": 1812799.35,
		"hash": "785c44caca147ff77916922f7f3a273928a90bbc1a0729d74362c817f15de487"
	},
	{
		"id": "f503c9def0e3",
		"ts": "2026-11-17T10:05:25.159Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 914048.67,
		"hash": "f503c9def0e304a63a38c14dba23a88606aa2504828a73532dee16aea93ec2db"
	},
	{
		"id": "d8ab22861ac6",
		"ts": "2026-11-17T10:05:25.423Z",
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
		"liquidityUsd": 207141.36,
		"hash": "d8ab22861ac602d129cab3b674f9cb8c46cbe21162c14d0f3cb87f9bf0028622"
	},
	{
		"id": "44bdcc7b176d",
		"ts": "2026-11-17T10:05:25.666Z",
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
		"liquidityUsd": 6720885.88,
		"hash": "44bdcc7b176d80342b63517dc730837231839f3de63385b7b0f870ed245fabb2"
	},
	{
		"id": "c1a74f5054db",
		"ts": "2026-11-17T10:05:25.907Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1543204.69,
		"hash": "c1a74f5054db46ee24325ba49af440f6ddf0f5dfe85a11097026a45f86e6e6d1"
	},
	{
		"id": "936c584dba03",
		"ts": "2026-11-17T10:05:26.137Z",
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
		"liquidityUsd": 2097318.26,
		"hash": "936c584dba03cd348c55be9131a7477016d8284928167fca608c4ec7c3fe99b7"
	},
	{
		"id": "44d3ab0c5787",
		"ts": "2026-11-17T10:05:26.366Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1377020.36,
		"hash": "44d3ab0c578767142966ab3f68b5e48ddeb1369fc1e8ec7551c20ca326930431"
	},
	{
		"id": "f6c4de48957c",
		"ts": "2026-11-17T10:05:26.608Z",
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
		"liquidityUsd": 769280.68,
		"hash": "f6c4de48957c9eacf836825eb546af12788ad3e639b8fe3bc177204e3733826e"
	},
	{
		"id": "2a0a4ecc695f",
		"ts": "2026-11-17T10:05:26.839Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 571578.43,
		"hash": "2a0a4ecc695f01db8fe4e195baf784839f41719f3916bd71bb03c4ae9e093de5"
	},
	{
		"id": "8a5443277ef6",
		"ts": "2026-11-17T10:05:27.066Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3201596.37,
		"hash": "8a5443277ef6a4d4f22322ee8337ee1c97d14167220ac012cff33371aa8e49d9"
	},
	{
		"id": "2676664a0ff3",
		"ts": "2026-11-17T10:05:27.308Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 62288.21,
		"hash": "2676664a0ff372f6feb0c50e73c8fca4e9da6c84a978c8f990213b2fad2b1ba4"
	},
	{
		"id": "b8e237907708",
		"ts": "2026-11-17T10:05:27.539Z",
		"symbol": "SPCXc",
		"token": "0xb2000000000000000000007b9fcbd005511aCBd5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 950167.48,
		"hash": "b8e23790770885edc64ea57e39e73192b246c6dc02964b6fc65df68695593580"
	},
	{
		"id": "7c703fa902bd",
		"ts": "2026-11-17T01:30:08.394Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 88961829.03,
		"hash": "7c703fa902bdeee9e43a28d818b836561d8e68111f057924edc03c79aac641ab"
	},
	{
		"id": "60485cd0e38f",
		"ts": "2026-11-17T01:30:09.085Z",
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
		"liquidityUsd": 17532222.53,
		"hash": "60485cd0e38fcae0a260e89edfb45e4cbdcb6c916108b010bdb007c393e459ff"
	},
	{
		"id": "2015b04f876b",
		"ts": "2026-11-17T01:30:09.556Z",
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
		"liquidityUsd": 201436.52,
		"hash": "2015b04f876beaf9ab747fcff9089df71fe1e96cf47cc7abc0f489eac3c487eb"
	},
	{
		"id": "e96b3a385ae3",
		"ts": "2026-11-17T01:30:09.807Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3666146.89,
		"hash": "e96b3a385ae37a62a44e33b655f6507d81ed4f0f4bc200f2086c5fbb4668bc3a"
	},
	{
		"id": "4beca99da5cb",
		"ts": "2026-11-17T01:30:10.054Z",
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
		"liquidityUsd": 956088.6,
		"hash": "4beca99da5cb7a196005b52a94f0233b9b427322352d14b46d7d9cb6bcdf83f3"
	},
	{
		"id": "13b67762a3f5",
		"ts": "2026-11-17T01:30:10.303Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 845750.35,
		"hash": "13b67762a3f5253ebcea8b6814b9b581847d4fc5cc7d51fe6f8db3e8ca077302"
	},
	{
		"id": "4a01eaecbb0a",
		"ts": "2026-11-17T01:30:10.550Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 147624.23,
		"hash": "4a01eaecbb0a18576d96116035d163b817cdadc79626a74ea2cc2c0ed0f4ab80"
	},
	{
		"id": "9d8c8641ef3f",
		"ts": "2026-11-17T01:30:10.795Z",
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
		"liquidityUsd": 1908173.97,
		"hash": "9d8c8641ef3f757f3ca2be8d7dcb046b46ce0fed0d05569c4cb666c1e8de55f7"
	},
	{
		"id": "994b78ef0610",
		"ts": "2026-11-17T01:30:11.043Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1378937.25,
		"hash": "994b78ef06100cbc551afdde1d54675ee66cdd77f8da487d3787c2d5b2739730"
	},
	{
		"id": "90a83a351ba6",
		"ts": "2026-11-17T01:30:11.291Z",
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
		"liquidityUsd": 207662.04,
		"hash": "90a83a351ba617d5a11c6029de06f2514d49f8586403d9f0c5e1bd6baa447272"
	},
	{
		"id": "a25a2649ba59",
		"ts": "2026-11-17T01:30:11.512Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 920439.44,
		"hash": "a25a2649ba592928b21d23adc0476f4cd067a1e6fa652435dd801be6e8d96d4f"
	},
	{
		"id": "50dce0b3db52",
		"ts": "2026-11-17T01:30:11.741Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1439198.35,
		"hash": "50dce0b3db528942f0182cfffea99044b7037a6c2c8adc68814bc9a13219a21f"
	},
	{
		"id": "1f5380e65559",
		"ts": "2026-11-17T01:30:12.033Z",
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
		"liquidityUsd": 2070511,
		"hash": "1f5380e655598afaf87befde743628cfdc036e78f8c6a7a0aaf77f19869d5ea7"
	},
	{
		"id": "7b5bd1a66ac5",
		"ts": "2026-11-17T01:30:12.262Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 568045.97,
		"hash": "7b5bd1a66ac5c0303b9fc3a370d7ca6b96a9201c1f640da54f31d0f4102386fd"
	},
	{
		"id": "d7442753e6a3",
		"ts": "2026-11-17T01:30:12.493Z",
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
		"liquidityUsd": 6550119.13,
		"hash": "d7442753e6a3b19765201653de8cca0cd3f978fc47d67c452b33245361a615d3"
	},
	{
		"id": "a14a36add6ff",
		"ts": "2026-11-17T01:30:12.713Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4809026,
		"hash": "a14a36add6ff6b6e3dcda0339a2a47646bdb63984934c33d70c8e3d43bd7e974"
	},
	{
		"id": "3f00103c1236",
		"ts": "2026-11-17T01:30:12.945Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2764803.47,
		"hash": "3f00103c123630c346723ae3fe731fe685a1404560f19bb25ea77ad8d9ae94e7"
	},
	{
		"id": "e65f9e37fbf9",
		"ts": "2026-11-17T01:30:13.176Z",
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
		"liquidityUsd": 787747.76,
		"hash": "e65f9e37fbf953893499c635fb5c1832c216be648fc032827c69a2408692e537"
	},
	{
		"id": "e64027360b05",
		"ts": "2026-11-17T01:30:13.397Z",
		"symbol": "MSTRc",
		"token": "0xb2000000000000000000004884b426556b92883d",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 590884.44,
		"hash": "e64027360b0526ce5717534b54141e06773fac46daf758cdd6bc746e91f2802b"
	},
	{
		"id": "3c6bd2cc8efa",
		"ts": "2026-11-16T17:52:15.726Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 89157934.4,
		"hash": "3c6bd2cc8efabd8dc77f4c37f66ea639eb0e11729829276eb119de9e4356d139"
	},
	{
		"id": "bc75a239157f",
		"ts": "2026-11-16T17:52:16.042Z",
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
		"liquidityUsd": 17548352.35,
		"hash": "bc75a239157fe38b639952085d17d5b468b51bebbda540b2272c23eadd350568"
	},
	{
		"id": "b9436a6b7e68",
		"ts": "2026-11-16T17:52:16.370Z",
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
		"liquidityUsd": 203562.12,
		"hash": "b9436a6b7e68a96f942a1845d94b9d5f8148d03ef3ef0daf0ec35c07df0c7a64"
	},
	{
		"id": "ff80cddbf37c",
		"ts": "2026-11-16T17:52:16.704Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3678035.74,
		"hash": "ff80cddbf37c09fcd633ef7976953709d71cc231ae37a3fd81f5899cefad3fd4"
	},
	{
		"id": "f4c69b50d617",
		"ts": "2026-11-16T17:52:17.011Z",
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
		"liquidityUsd": 1026309.06,
		"hash": "f4c69b50d61714e38382576959af3a1002ba0a25126d34293bc19fc9529a8829"
	},
	{
		"id": "757a7426c65e",
		"ts": "2026-11-16T17:52:17.340Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 846245.26,
		"hash": "757a7426c65eaaeae53bece7b4301782c83ffdcb8d170ac9b3122dff4e620363"
	},
	{
		"id": "43b63e837836",
		"ts": "2026-11-16T17:52:17.665Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 126606.13,
		"hash": "43b63e837836ced6bb817b3c53e0b56d3fb3c2cf65c1d53635a105c405d00162"
	},
	{
		"id": "a5456bc64955",
		"ts": "2026-11-16T17:52:18.420Z",
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
		"liquidityUsd": 1917009.11,
		"hash": "a5456bc649556af908794e56a271e40870abfcc3cebc9929aaffe1e01331f0d2"
	},
	{
		"id": "b69884e6f72b",
		"ts": "2026-11-16T17:52:18.787Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 826743.49,
		"hash": "b69884e6f72ba5b9eacddacb27ca87c96f8cd76e681b60feffd276e89adb56fc"
	},
	{
		"id": "765398795324",
		"ts": "2026-11-16T17:52:19.155Z",
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
		"liquidityUsd": 201590.33,
		"hash": "765398795324b019110d76b2dfedafad3f682f7e36936acf7f7a1c9f1147169f"
	},
	{
		"id": "80220e298508",
		"ts": "2026-11-16T17:52:19.455Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1382987.5,
		"hash": "80220e2985089d95d5d40c938ed726670ea186916511b237afbe860e5b4b7281"
	},
	{
		"id": "34c2325cf2aa",
		"ts": "2026-11-16T17:52:19.723Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2750632.86,
		"hash": "34c2325cf2aa85d8b2d48610ec807d370b5c6f8c6e8d24eb225ad6648931bcfc"
	},
	{
		"id": "5c7f78b23e1f",
		"ts": "2026-11-16T17:52:20.028Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3449801.31,
		"hash": "5c7f78b23e1fe91ec56f19e993689d22f6421745fe8d3683179b0bb0ee31c5ac"
	},
	{
		"id": "f9edb6213b89",
		"ts": "2026-11-16T17:52:20.317Z",
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
		"liquidityUsd": 2097310.14,
		"hash": "f9edb6213b89482bb506b421f67514fbbdf40e69cf39714de1e6dcde2233297f"
	},
	{
		"id": "655935859163",
		"ts": "2026-11-16T17:52:20.592Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 567456.95,
		"hash": "65593585916351f975d44cfd97c09cee25eb9b7793abad6ed22a3eb6aa4ca3ec"
	},
	{
		"id": "4e6d272a0ccc",
		"ts": "2026-11-16T17:52:20.862Z",
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
		"liquidityUsd": 6493367.38,
		"hash": "4e6d272a0ccc9fcb3b553095c1efafaa486670b272db299ef45de71da5f6eadd"
	},
	{
		"id": "8b750590a6d1",
		"ts": "2026-11-16T17:52:21.222Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1433919.96,
		"hash": "8b750590a6d1c74d7c156bdb1f950a487c1af33651b4bdbcb644e504da715356"
	},
	{
		"id": "99734c543772",
		"ts": "2026-11-16T17:52:21.561Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3160527.75,
		"hash": "99734c543772e04a36dc1740b61eed9fb0e674076d04e4431af52b8d13172bd2"
	},
	{
		"id": "fd3e7f0bccb0",
		"ts": "2026-11-16T17:52:21.996Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 126606.13,
		"hash": "fd3e7f0bccb0009d3d349289bbadceac9b6ef697cfb13a95d3b81389ff534d3e"
	},
	{
		"id": "abc3787947a8",
		"ts": "2026-11-16T17:52:22.277Z",
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
		"liquidityUsd": 2415200.53,
		"hash": "abc3787947a8ade1a53cbb3e08b4ada29092fedd8adaede9abbbebe6f161330c"
	},
	{
		"id": "2bcbce494932",
		"ts": "2026-11-16T07:35:59.274Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 89636182.67,
		"hash": "2bcbce494932bcdef65add73094ee6f634c008c940c46030de3e4742c853f914"
	},
	{
		"id": "a2aabc020c6a",
		"ts": "2026-11-16T07:35:59.723Z",
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
		"liquidityUsd": 17244319.56,
		"hash": "a2aabc020c6a72df013714aa80113dfdb2a739b87fd76f9c8726ca44401cbced"
	},
	{
		"id": "18f4130cb3b9",
		"ts": "2026-11-16T07:35:59.999Z",
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
		"liquidityUsd": 199873.44,
		"hash": "18f4130cb3b9a7fc8a3028542bfd5ebc62688ec954e14ed6d804c799b9c2efd1"
	},
	{
		"id": "b5cff204a286",
		"ts": "2026-11-16T07:36:00.241Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3643992.05,
		"hash": "b5cff204a28696a22b34c3b6759c9ee24192fe86367301456ac908d92bd2ac35"
	},
	{
		"id": "79346b503e5d",
		"ts": "2026-11-16T07:36:00.498Z",
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
		"liquidityUsd": 975595.04,
		"hash": "79346b503e5dd410538d7432f5a3850bfcfcdf5bdf924cfa793d75eecb5b92d7"
	},
	{
		"id": "d90bba25bf17",
		"ts": "2026-11-16T07:36:00.754Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 844623.29,
		"hash": "d90bba25bf179ac323445791e8365befef58d5e12148f88cf5f68406ec85e25a"
	},
	{
		"id": "4e49fa8c92ba",
		"ts": "2026-11-16T07:36:01.195Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 104207.82,
		"hash": "4e49fa8c92ba856da5f723de505083cf94579ff56c8e177f3d85e1ac60dbe463"
	},
	{
		"id": "7641013f8723",
		"ts": "2026-11-16T07:36:01.475Z",
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
		"liquidityUsd": 1770273.89,
		"hash": "7641013f872318cc3a0975d4dad75d1a1549d7997ad99f848d45d342d761910d"
	},
	{
		"id": "e0812a010922",
		"ts": "2026-11-16T07:36:01.725Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 821508.27,
		"hash": "e0812a010922eafbbf53746a8aec47edd37d1b41b6b0f5fa8845d17efea1f7e1"
	},
	{
		"id": "acb542f71b70",
		"ts": "2026-11-16T07:36:01.988Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1417751.99,
		"hash": "acb542f71b70f414b4c456c7e9c9abacf3e9b9826390b4808913abff2820cef4"
	},
	{
		"id": "5dd51bda0864",
		"ts": "2026-11-16T07:36:02.227Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 2745713.95,
		"hash": "5dd51bda0864e5cab5c6a69e12b4d52ae6a62bad98d0da32479d225353843366"
	},
	{
		"id": "61174eee516f",
		"ts": "2026-11-16T07:36:02.478Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4799884.61,
		"hash": "61174eee516fcee2b3207adacf7df6b860e84086239221314a904074e7634040"
	},
	{
		"id": "fda62931564d",
		"ts": "2026-11-16T07:36:02.724Z",
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
		"liquidityUsd": 6549259.18,
		"hash": "fda62931564dfc169f77a96ea8c689bb89c061e21f458174bd938094da75e20a"
	},
	{
		"id": "790bca1287b3",
		"ts": "2026-11-16T07:36:02.943Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1333699.15,
		"hash": "790bca1287b3d9e5968a0fb317069c27fae98f2f15f3bdb9aa0fc6bf436466dd"
	},
	{
		"id": "884f92597b71",
		"ts": "2026-11-16T07:36:03.184Z",
		"symbol": "SOGNI",
		"token": "0xE014d2A4da6E450f21b5050120D291e63c8940FD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 414312.13,
		"hash": "884f92597b718764529dfdb4cd2522cf3a03419b9875029dfd7d7f98848b9094"
	},
	{
		"id": "dfcc69c96a4b",
		"ts": "2026-11-16T07:36:03.425Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3140630.86,
		"hash": "dfcc69c96a4b6e4fe8f2736769746ee4c89270c9d329534bb25efa1c5c10e109"
	},
	{
		"id": "bd4829aea99e",
		"ts": "2026-11-16T07:36:03.643Z",
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
		"liquidityUsd": 1049827.75,
		"hash": "bd4829aea99e6bbb6e8d2009da8ec64c525c513e5333f2b4e06c1c56fe65c47a"
	},
	{
		"id": "d0858bded234",
		"ts": "2026-11-16T07:36:03.861Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 560088.4,
		"hash": "d0858bded234a887879a2bc91cda6d4bff135fb5eae58ab3fc997eac05bca25f"
	},
	{
		"id": "f9677444f31c",
		"ts": "2026-11-16T07:36:04.093Z",
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
		"liquidityUsd": 2393937.2,
		"hash": "f9677444f31c41d3e64e3c3882b2b946f90fab7b77db7e4f0209a20fea7416f9"
	},
	{
		"id": "47a1700fe45f",
		"ts": "2026-11-16T00:41:33.526Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 86865128.8,
		"hash": "47a1700fe45f6a343b4761dafc74d4a4231dddacb6fda5ac26f7db6c18293c5c"
	},
	{
		"id": "ffac84718b2d",
		"ts": "2026-11-16T00:41:33.796Z",
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
		"liquidityUsd": 17140390.3,
		"hash": "ffac84718b2d8c518e05e5835691f73fa683338cf1f948356d7830a106ffe197"
	},
	{
		"id": "3312d835ff66",
		"ts": "2026-11-16T00:41:34.058Z",
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
		"liquidityUsd": 205652.2,
		"hash": "3312d835ff667e0d08e28ba8103467c0e3def72aa9126f3884ce16ff511bfc75"
	},
	{
		"id": "14becb790cca",
		"ts": "2026-11-16T00:41:34.332Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3651572.7,
		"hash": "14becb790ccaa2b8dc2c2abc9aa7a28ee5dc3580bd6374bfb82efbe1718442dc"
	},
	{
		"id": "b193bd7d3548",
		"ts": "2026-11-16T00:41:34.596Z",
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
		"liquidityUsd": 980438.56,
		"hash": "b193bd7d354828e37165d947729274aa4b70672f786124c4c3b6b37c143fc906"
	},
	{
		"id": "00512f881e4f",
		"ts": "2026-11-16T00:41:34.855Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 844100.83,
		"hash": "00512f881e4fe348e188b192ac7a2dfcdde20af74a2bcae07298f5fbd7bdf342"
	},
	{
		"id": "caf4eb2b58e7",
		"ts": "2026-11-16T00:41:35.116Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 126542.85,
		"hash": "caf4eb2b58e7b81ed4d4359924b34c97fe4aae27695f13b1152d87137173b814"
	},
	{
		"id": "ae230b55706f",
		"ts": "2026-11-16T00:41:35.386Z",
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
		"liquidityUsd": 1728404.2,
		"hash": "ae230b55706f79f8b5bfbff374d078e8e7a80dab8d4f218f2491b4400b78f399"
	},
	{
		"id": "0c20e4cf5486",
		"ts": "2026-11-16T00:41:35.647Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 815868.66,
		"hash": "0c20e4cf5486c92ff84b8e0880ce4b15153f5983af4ee6724a605a77fe26d691"
	},
	{
		"id": "c48a1f826e69",
		"ts": "2026-11-16T00:41:35.908Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1959136.14,
		"hash": "c48a1f826e694f95c66753785090544af4507f6704424cb071cb1c1d272cdc01"
	},
	{
		"id": "2c8bd1d4dd16",
		"ts": "2026-11-16T00:41:36.152Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2782793.99,
		"hash": "2c8bd1d4dd16f47254cf20370881f0491f4dee58ce8cd93fe975b8ee98a8fbe9"
	},
	{
		"id": "784874ebc2c2",
		"ts": "2026-11-16T00:41:36.392Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1418749.83,
		"hash": "784874ebc2c278024b795c0469bec245d8277532f1428c4d7a1605c8de939013"
	},
	{
		"id": "18798b5bc5fc",
		"ts": "2026-11-16T00:41:36.639Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 272326.47,
		"hash": "18798b5bc5fc816e0d737274d845c3bed9e7b9b061cadf562e38c9213fa47097"
	},
	{
		"id": "15a731e6a681",
		"ts": "2026-11-16T00:41:36.882Z",
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
		"liquidityUsd": 2131124.19,
		"hash": "15a731e6a6819a03986b24413946e7bba530f176f66e24d0bb81dfa2b787cb43"
	},
	{
		"id": "973da2a01eaf",
		"ts": "2026-11-16T00:41:37.127Z",
		"symbol": "SOGNI",
		"token": "0xE014d2A4da6E450f21b5050120D291e63c8940FD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 404990.27,
		"hash": "973da2a01eaf67cf9676e3c2121f20230c50c60e52c502c6194a4976288fd383"
	},
	{
		"id": "a64f00c1107e",
		"ts": "2026-11-16T00:41:37.367Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1443983.78,
		"hash": "a64f00c1107e766921fd9d5b472788b18019a76ce6d0bafde542209a261848eb"
	},
	{
		"id": "ba61c52d4feb",
		"ts": "2026-11-16T00:41:37.608Z",
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
		"liquidityUsd": 6512436.53,
		"hash": "ba61c52d4feb0bd3c4c9e124ec32972df61316d34185fe6ac9c114a92d6a3f0f"
	},
	{
		"id": "0b6783b936c1",
		"ts": "2026-11-16T00:41:37.854Z",
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
		"liquidityUsd": 1060235.15,
		"hash": "0b6783b936c1f39fd725f1370d972661b9764071dce399cb60062bc08ac868cf"
	},
	{
		"id": "ff1c23c89f66",
		"ts": "2026-11-16T00:41:38.095Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3197429.16,
		"hash": "ff1c23c89f6684a581688bec87684736dd5dfb9f4a1838a9ae9cb9a09405a1f5"
	},
	{
		"id": "e7034052bda0",
		"ts": "2026-11-15T20:46:14.911Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 87217927.53,
		"hash": "e7034052bda0c34570f6577c5db7b765d14ab5b1acf0baede77925fd8bfa38c5"
	},
	{
		"id": "7e1752f84a77",
		"ts": "2026-11-15T20:46:15.375Z",
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
		"liquidityUsd": 17191816.99,
		"hash": "7e1752f84a771610fce44118aed3ed6463020c856ba6ef9c29a340fe671ce171"
	},
	{
		"id": "7381e45b5cbd",
		"ts": "2026-11-15T20:46:15.634Z",
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
		"liquidityUsd": 204227.9,
		"hash": "7381e45b5cbde7c390a1d787ede1d95abd4cdf870dc8f5bf62edaf63fc186752"
	},
	{
		"id": "893bc94d802a",
		"ts": "2026-11-15T20:46:15.915Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3720023.62,
		"hash": "893bc94d802a3f262c0c885d0e8eadf183a84cd4dee374e78d423382f3b5133c"
	},
	{
		"id": "fbd238791402",
		"ts": "2026-11-15T20:46:16.175Z",
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
		"liquidityUsd": 980148.47,
		"hash": "fbd238791402dfb36690eb20654592751afac0cb803e6bb78f9cb6831f1f8632"
	},
	{
		"id": "8202c604cf5a",
		"ts": "2026-11-15T20:46:16.470Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 846817.68,
		"hash": "8202c604cf5abd5e33f24d6285279a753ffef9dcf0b71e0191d9a357bf35849b"
	},
	{
		"id": "077705209596",
		"ts": "2026-11-15T20:46:16.738Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 126542.08,
		"hash": "07770520959616e4e00b4f30c765bbf53976b582ca0a0d32e06433281ff3e081"
	},
	{
		"id": "a9ff7efddddf",
		"ts": "2026-11-15T20:46:16.993Z",
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
		"liquidityUsd": 1741909.17,
		"hash": "a9ff7efddddfab15adf1f2d87d62e37c20daa62d556f1eaaf15d7e4af5830a58"
	},
	{
		"id": "3796ffd53b76",
		"ts": "2026-11-15T20:46:17.249Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1422517.71,
		"hash": "3796ffd53b76251367721a80357a4b754e547eae20cace20b7c4d19b2c0666f4"
	},
	{
		"id": "3a90ceed0a69",
		"ts": "2026-11-15T20:46:17.505Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1397966.66,
		"hash": "3a90ceed0a699c129389aa3ade423cc738e15fd37ac8a47ddba049c7a39a3ed7"
	},
	{
		"id": "d9e3b2afed19",
		"ts": "2026-11-15T20:46:17.749Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 830714.03,
		"hash": "d9e3b2afed192d2629fb33dacdf2df2e4ce0dd1bd9aa60bf77796aaf0fc21dbb"
	},
	{
		"id": "11108b6eb0ff",
		"ts": "2026-11-15T20:46:18.012Z",
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
		"liquidityUsd": 2110455.65,
		"hash": "11108b6eb0ff9f5d33e16be3f587cc07bf59642a735ff7878c0f1847bd929c4c"
	},
	{
		"id": "0f33324e0e1a",
		"ts": "2026-11-15T20:46:18.388Z",
		"symbol": "SOGNI",
		"token": "0xE014d2A4da6E450f21b5050120D291e63c8940FD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 419063.56,
		"hash": "0f33324e0e1a95294446e334dd6d6f375ee7f39d6253d1b4b2898a8c6446efce"
	},
	{
		"id": "68afde75e712",
		"ts": "2026-11-15T20:46:18.648Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 275875.13,
		"hash": "68afde75e7121d9a2ad5417fab7265cbdf2249c85535e7d157b16aac62b39710"
	},
	{
		"id": "16b64bc74509",
		"ts": "2026-11-15T20:46:18.914Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3963006.21,
		"hash": "16b64bc74509dc21430a435b18a826ab431b77f21df4c54a187ab0597e0fe3f2"
	},
	{
		"id": "1537d7839816",
		"ts": "2026-11-15T20:46:19.150Z",
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
		"liquidityUsd": 6589606.02,
		"hash": "1537d78398168c8e1877ac0c2d3882b5dc98b1eaaef6fb887a68751a3a410a7c"
	},
	{
		"id": "2c3225c252d1",
		"ts": "2026-11-15T20:46:19.388Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2785969.99,
		"hash": "2c3225c252d1edf7f5a63c31f43deac24252ac5902a79d81f7204117036da2e6"
	},
	{
		"id": "58d615eb8cf1",
		"ts": "2026-11-15T20:46:19.637Z",
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
		"liquidityUsd": 1062079.99,
		"hash": "58d615eb8cf153ed6f5a757c710771ee53bada82383f4921abffce2a3be0fcc9"
	},
	{
		"id": "05917e5b90f1",
		"ts": "2026-11-15T20:46:19.875Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3222122.23,
		"hash": "05917e5b90f19e236ac7aea52b06caab5e30965f829feee8e54bcd7a65e4b5b9"
	},
	{
		"id": "e5fa15ad6b3d",
		"ts": "2026-11-15T15:16:12.314Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 86607039.02,
		"hash": "e5fa15ad6b3de63e8af8ed307152df9333db38427dbf9ba77bd640a0a2672be0"
	},
	{
		"id": "765d1d8dceb4",
		"ts": "2026-11-15T15:16:12.561Z",
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
		"liquidityUsd": 16797270.89,
		"hash": "765d1d8dceb441992dca6bcda6581226aac633f11d423c5eb55968d5a74e755f"
	},
	{
		"id": "feff6bd891bf",
		"ts": "2026-11-15T15:16:12.881Z",
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
		"liquidityUsd": 201736.97,
		"hash": "feff6bd891bf72dadf466b4877954a5600922e800d753988911435feb9548fd9"
	},
	{
		"id": "875f8486d03e",
		"ts": "2026-11-15T15:16:13.318Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3720697.01,
		"hash": "875f8486d03e874dc3ad68127864dcdb6817047f05fa549d9e65938e72f196e8"
	},
	{
		"id": "5166f47fd88d",
		"ts": "2026-11-15T15:16:13.747Z",
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
		"liquidityUsd": 945862.56,
		"hash": "5166f47fd88d8cf959596b8076bb755b3ad70e7d4021568f04bbabd0991aaaa8"
	},
	{
		"id": "4d9b2e69a810",
		"ts": "2026-11-15T15:16:13.997Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 832349.71,
		"hash": "4d9b2e69a810753e1f7afc2d5e5dffe6ad04b9f3d277e9371c8181832c96d407"
	},
	{
		"id": "fd81ef84c52c",
		"ts": "2026-11-15T15:16:14.227Z",
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
		"liquidityUsd": 235377.01,
		"hash": "fd81ef84c52cd70baff01b0423181cc4dfbb9b3e600befdf0cadda7f0177adf8"
	},
	{
		"id": "08d4d909d46f",
		"ts": "2026-11-15T15:16:14.463Z",
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
		"liquidityUsd": 1712759.21,
		"hash": "08d4d909d46fd984843c2c22b9263523026bd3157e441c01a5e4123e187a9d51"
	}
]
