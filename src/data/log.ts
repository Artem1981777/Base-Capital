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
	"updatedAt": "2026-11-27T06:30:58.863Z",
	"tokensScored": 23612,
	"verdictsIssued": 23612,
	"safe": 20083,
	"risky": 1646,
	"likelyRug": 1883,
	"ticks": 1324
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "598c6a2954a6",
		"ts": "2026-11-27T06:30:53.987Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 96875884.51,
		"hash": "598c6a2954a652aecdd14191eb65f33dfcd5a1faa9f547461ff6a8030fc1c2cc"
	},
	{
		"id": "ff2378be767f",
		"ts": "2026-11-27T06:30:54.501Z",
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
		"liquidityUsd": 23482918.84,
		"hash": "ff2378be767fb39a7551aa26f7421877733608853a536a05b257d376e15ead5a"
	},
	{
		"id": "0d3b9cdcd5ce",
		"ts": "2026-11-27T06:30:54.769Z",
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
		"liquidityUsd": 350460.09,
		"hash": "0d3b9cdcd5cec5e6294f6ba116bacf92577f2aec653234ef1e571351d87f41c5"
	},
	{
		"id": "2207750d3ca0",
		"ts": "2026-11-27T06:30:55.044Z",
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
		"liquidityUsd": 3292883.93,
		"hash": "2207750d3ca048496d517173dca53a8abb8f4a264a05065fd8817b02d8950748"
	},
	{
		"id": "c1860a936923",
		"ts": "2026-11-27T06:30:55.309Z",
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
		"liquidityUsd": 404256.84,
		"hash": "c1860a936923c4abaef4b476c265c598f67f2b76258104386c2c1f2afa65db61"
	},
	{
		"id": "fa02d2f05578",
		"ts": "2026-11-27T06:30:55.571Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 802012.8,
		"hash": "fa02d2f055787b3bc10d3b63dc73bbb4e3f296b1105973823b060f6ce381b2d9"
	},
	{
		"id": "8fcd63625cb4",
		"ts": "2026-11-27T06:30:55.836Z",
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
		"liquidityUsd": 1879159.94,
		"hash": "8fcd63625cb4213464eb9ba2d01c9cb7a6619895cb650c5b5ed7f082a29a107c"
	},
	{
		"id": "cf6eae9ea061",
		"ts": "2026-11-27T06:30:56.102Z",
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
		"liquidityUsd": 1428112.51,
		"hash": "cf6eae9ea0614eac960b4d49efe76e9ade9d991fcc4fdc26882a9def815c959b"
	},
	{
		"id": "6a664d318a8f",
		"ts": "2026-11-27T06:30:56.365Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 619541.5,
		"hash": "6a664d318a8f927cb8def28486e7c815793e130b1aaa3dd54b72a2ae7b19f1e2"
	},
	{
		"id": "e3ef095ecfd0",
		"ts": "2026-11-27T06:30:56.638Z",
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
		"liquidityUsd": 7345386.38,
		"hash": "e3ef095ecfd0fd2b6e71a5835496a13d0f8f6190c388c15ae12af3c029b9690c"
	},
	{
		"id": "20480ea1efbe",
		"ts": "2026-11-27T06:30:56.886Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1879162.07,
		"hash": "20480ea1efbe320cc8982ab37f3b207f0d1b9ad9d4fcd8d928ff6edd4e73153c"
	},
	{
		"id": "7892bace3d61",
		"ts": "2026-11-27T06:30:57.129Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 1273531.12,
		"hash": "7892bace3d61ecd91e915eaf4571118fc9d2c45a1e06833e714128c388da0299"
	},
	{
		"id": "fee7d44abddf",
		"ts": "2026-11-27T06:30:57.383Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 326126.01,
		"hash": "fee7d44abddf0f2ce6a4c0ddee71c1118f0f58226ed9eb852f4d624734c83999"
	},
	{
		"id": "76fc3d4d5564",
		"ts": "2026-11-27T06:30:57.628Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 729488.08,
		"hash": "76fc3d4d55640df79dc7f7a9c325e565ebc0a57768ba7ffefcc2e2b1936ae09d"
	},
	{
		"id": "24face8641f4",
		"ts": "2026-11-27T06:30:57.870Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 870973.25,
		"hash": "24face8641f4064d0935f31605f3cd10612e7fe07b3d318f8e14b0cf942876ab"
	},
	{
		"id": "d1e0aa2be371",
		"ts": "2026-11-27T06:30:58.119Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5191046.47,
		"hash": "d1e0aa2be371542f7034d76210274e6751a7328976218ffdcbb1110cb2fd851c"
	},
	{
		"id": "28875d1d8112",
		"ts": "2026-11-27T06:30:58.364Z",
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
		"liquidityUsd": 202679.23,
		"hash": "28875d1d8112e8c8eb7a85bd9d801fcbf9df9337c1672fe7258a8e3ca7a16684"
	},
	{
		"id": "091b09b01b50",
		"ts": "2026-11-27T06:30:58.610Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 672843.27,
		"hash": "091b09b01b509b445256ba556a79f5ad012ee0c7591b2f609de5b9f9fe484f42"
	},
	{
		"id": "893aad29bcc9",
		"ts": "2026-11-27T06:30:58.863Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 427038.76,
		"hash": "893aad29bcc99b5c9e93072b4a4a48273af25eae985a3ea3a9089d97e94697fa"
	},
	{
		"id": "53b4b8627204",
		"ts": "2026-11-26T23:27:45.448Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 94948224.72,
		"hash": "53b4b8627204beaeccb11c645c46b80c51f54a43e54a04f48b20ffbd145a42e7"
	},
	{
		"id": "f88b61577437",
		"ts": "2026-11-26T23:27:45.728Z",
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
		"liquidityUsd": 23240650.69,
		"hash": "f88b61577437d9cbbfa1ef153ac4bbc144fe42562475893bf716f849536a6a61"
	},
	{
		"id": "b4379c6f4a5d",
		"ts": "2026-11-26T23:27:46.005Z",
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
		"liquidityUsd": 350722.71,
		"hash": "b4379c6f4a5de220246938b9ab4d6f067efe8f2f579a9870a39ab9968fd17896"
	},
	{
		"id": "586cf3fbca44",
		"ts": "2026-11-26T23:27:46.272Z",
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
		"liquidityUsd": 3244166.2,
		"hash": "586cf3fbca442d2f6f4c3a1cd316505d803c396c6fa7b5574af6b39dc2397f49"
	},
	{
		"id": "a09fce07164d",
		"ts": "2026-11-26T23:27:46.527Z",
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
		"liquidityUsd": 388002.13,
		"hash": "a09fce07164d0d3f3d21a29f6e5d65a0e5912943c59b928f476059dea657b066"
	},
	{
		"id": "59c93f9c7bf4",
		"ts": "2026-11-26T23:27:46.814Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 787065.91,
		"hash": "59c93f9c7bf4a171df1bb1d630a84ac407badae9b95b09067019ad74a111bc66"
	},
	{
		"id": "77e115178a2e",
		"ts": "2026-11-26T23:27:47.097Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3244166.2,
		"hash": "77e115178a2e6f0cef7acc6dcc8a23ae3f5c1c90aace9f2ccaa04bd177b960fa"
	},
	{
		"id": "8c5b6bc70bf1",
		"ts": "2026-11-26T23:27:47.515Z",
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
		"liquidityUsd": 1390776.52,
		"hash": "8c5b6bc70bf12c18e0fc3c1c285cb1b43baa3d562d6f4b8de4c4ff2c89f2e197"
	},
	{
		"id": "ac31e6ae2b52",
		"ts": "2026-11-26T23:27:47.784Z",
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
		"liquidityUsd": 616830.45,
		"hash": "ac31e6ae2b520c66da49de3f6b20c76d71d5460f981ab938d30a626f312187a0"
	},
	{
		"id": "ad08261d30e1",
		"ts": "2026-11-26T23:27:48.044Z",
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
		"liquidityUsd": 7147498.99,
		"hash": "ad08261d30e11de0650cfba1b8cfa29ee0f7ce87283f21fa67b8d7b1de7c554d"
	},
	{
		"id": "089720d964c6",
		"ts": "2026-11-26T23:27:48.294Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 1256477.5,
		"hash": "089720d964c685bfc2413a7c3bdae4c6820532c6df00c7064e0f1a7531e3b4d1"
	},
	{
		"id": "49a24a0882bc",
		"ts": "2026-11-26T23:27:48.550Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 2118583.21,
		"hash": "49a24a0882bccda2e05f7e8988006bfe86381be97773f03c9cd9699ada3f3f4b"
	},
	{
		"id": "2643f2bcd9c4",
		"ts": "2026-11-26T23:27:48.810Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 675863.51,
		"hash": "2643f2bcd9c42845f07574e426f6409cc25aef2f8e362a90ae51811c2980c709"
	},
	{
		"id": "e548384ad14e",
		"ts": "2026-11-26T23:27:49.062Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 350358.94,
		"hash": "e548384ad14eaab3a93097bafbd1ba04a4f1cfc85dc9d21dd00276f1a6c70ad1"
	},
	{
		"id": "4bcf3df985b8",
		"ts": "2026-11-26T23:27:49.310Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 864783.16,
		"hash": "4bcf3df985b80b55d4b340ef10cf55bbb825ed46de03d75608574e4a0964ea58"
	},
	{
		"id": "d105543a9b71",
		"ts": "2026-11-26T23:27:49.558Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5058690.07,
		"hash": "d105543a9b715b1acd10ecb2b3b698fdf578324b2f33985fb04b933ea74f8980"
	},
	{
		"id": "ab92e3440682",
		"ts": "2026-11-26T23:27:49.821Z",
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
		"liquidityUsd": 208648.07,
		"hash": "ab92e3440682cf3490c933c52279cb0f35213a86f76bae2a18275b98d620f9fa"
	},
	{
		"id": "4421f5e8b466",
		"ts": "2026-11-26T23:27:50.081Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1272504.88,
		"hash": "4421f5e8b466709586a17e4362bf9942a35dbdc5ff35e00aefacf3a4e8ebea90"
	},
	{
		"id": "a63295bcd11a",
		"ts": "2026-11-26T23:27:50.333Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 673716.67,
		"hash": "a63295bcd11a604cabbaa8f4fd5c1701162c167a955af953075d01b32de29dab"
	},
	{
		"id": "1a5354e3492c",
		"ts": "2026-11-26T14:41:21.016Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 95243151.16,
		"hash": "1a5354e3492c3706ddca3909ed936d2451dc9e4ec93f5143e6f71d71764dd1ab"
	},
	{
		"id": "7b235904ab62",
		"ts": "2026-11-26T14:41:21.453Z",
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
		"liquidityUsd": 23195654.19,
		"hash": "7b235904ab6279ce010c22e7cfb6ca0b5dd6f3f3f809187e832a5b932723ff95"
	},
	{
		"id": "94c7388fbd00",
		"ts": "2026-11-26T14:41:21.722Z",
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
		"liquidityUsd": 339793.85,
		"hash": "94c7388fbd009e856f16ffff7dfe236170ca8951454d26ad84009de57e2938c7"
	},
	{
		"id": "a09c2d5cbbb0",
		"ts": "2026-11-26T14:41:21.993Z",
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
		"liquidityUsd": 3247931.49,
		"hash": "a09c2d5cbbb07c349e1a7f8f4e8b72aa6bbf549227368571d9968446132e70d0"
	},
	{
		"id": "9c7ad3637f44",
		"ts": "2026-11-26T14:41:22.257Z",
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
		"liquidityUsd": 385857.45,
		"hash": "9c7ad3637f44836128ff1bc1a292dfbee023517c170a710343c4a702d22d89d8"
	},
	{
		"id": "2de56f340cf8",
		"ts": "2026-11-26T14:41:22.519Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 787455.34,
		"hash": "2de56f340cf8dcc70b30cd16ae6b5383fef5375477ea77b834223679742aa310"
	},
	{
		"id": "f325e0e90c4c",
		"ts": "2026-11-26T14:41:22.783Z",
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
		"liquidityUsd": 2159924.8,
		"hash": "f325e0e90c4c7f0ee9b8647cf4f5e79db11247159ec701693dce0463a9c236fe"
	},
	{
		"id": "484ab7e8ad64",
		"ts": "2026-11-26T14:41:23.045Z",
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
		"liquidityUsd": 1400351.95,
		"hash": "484ab7e8ad64aaa8bae19752a4857155c42ff2d4376d0a48cfe91eea92ff5259"
	},
	{
		"id": "fe3827cbd275",
		"ts": "2026-11-26T14:41:23.307Z",
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
		"liquidityUsd": 606118.04,
		"hash": "fe3827cbd275a6a3c1bda5d529a4468bb7c7818a2443e17acecd97957070a9fb"
	},
	{
		"id": "cbcba2aa33b6",
		"ts": "2026-11-26T14:41:23.574Z",
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
		"liquidityUsd": 7294015.71,
		"hash": "cbcba2aa33b667a37ae49524698196f2a83b81a07a6f36bf8e8fb9cc1fd3bbc1"
	},
	{
		"id": "9dca29c44c3c",
		"ts": "2026-11-26T14:41:24.203Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 2159924.8,
		"hash": "9dca29c44c3c69d3b2d4f80c5af75703957c32f8ab2411fef7f1fb65b38b954c"
	},
	{
		"id": "0825b85a1d0c",
		"ts": "2026-11-26T14:41:24.454Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 1268722.12,
		"hash": "0825b85a1d0ca5c17f4c88354a8944b535fb3967fd0242a20c26d6cfe6d38b0b"
	},
	{
		"id": "c0df066f1afe",
		"ts": "2026-11-26T14:41:24.697Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 669877.91,
		"hash": "c0df066f1afe4f9b027dc7cfb5ae87164e2fef9f2ddf8ab17cfbcaa4cf1ade9b"
	},
	{
		"id": "c7d72a8727d4",
		"ts": "2026-11-26T14:41:24.943Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 858227.6,
		"hash": "c7d72a8727d4ccb8297ecf5e9d9c81d45656cb38f50e9970db1ea58b7fe3e724"
	},
	{
		"id": "a717ba63f7dd",
		"ts": "2026-11-26T14:41:25.188Z",
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
		"liquidityUsd": 212122.84,
		"hash": "a717ba63f7dd7dd5e1dbcca0bfd4f396f4488a701bc3a35751699ddab21a2e0a"
	},
	{
		"id": "39286182f4db",
		"ts": "2026-11-26T14:41:25.435Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1731869.37,
		"hash": "39286182f4db16bcb208d64093c555f75f8b76640371a0c8d8bbaf15482256cd"
	},
	{
		"id": "a0bc32210829",
		"ts": "2026-11-26T14:41:25.742Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1287418.66,
		"hash": "a0bc32210829a6c0995b62dc888164321e345311a3c2cd70fbde7a360bcedbca"
	},
	{
		"id": "f512a664ad3c",
		"ts": "2026-11-26T14:41:25.988Z",
		"symbol": "SOGNI",
		"token": "0xE014d2A4da6E450f21b5050120D291e63c8940FD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 470109.8,
		"hash": "f512a664ad3c28b3b35c64a45eed5d08e0dd04cbaeb40b4792a5ea4025c03ec0"
	},
	{
		"id": "f9f86835e1e7",
		"ts": "2026-11-26T04:40:57.845Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 95092422.22,
		"hash": "f9f86835e1e7f559701c43b455c9627b2c90a28fd369de4b8148625c076142de"
	},
	{
		"id": "2aaa7b5aeac5",
		"ts": "2026-11-26T04:40:58.104Z",
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
		"liquidityUsd": 22841175.14,
		"hash": "2aaa7b5aeac520993a876c3c809f1c24378fdee41231b94972ad57a879feb714"
	},
	{
		"id": "553137d8b8cb",
		"ts": "2026-11-26T04:40:58.382Z",
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
		"liquidityUsd": 350087.16,
		"hash": "553137d8b8cb6aa08c4c13a795587e842bf6b49faa69051e29498535edabf95f"
	},
	{
		"id": "a9ef539c1d41",
		"ts": "2026-11-26T04:40:58.644Z",
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
		"liquidityUsd": 3263509.42,
		"hash": "a9ef539c1d41dc5173980f9efda57c3127475cb07e821ca3027948588dc5c0f4"
	},
	{
		"id": "2bbbada589c2",
		"ts": "2026-11-26T04:40:58.894Z",
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
		"liquidityUsd": 383341.55,
		"hash": "2bbbada589c2c1e1fbb35893f7b8327ff410f0994c4c12e6127a8655a9fe948f"
	},
	{
		"id": "08470f368ea1",
		"ts": "2026-11-26T04:40:59.169Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 788134.69,
		"hash": "08470f368ea19539328fdb5b1a28781f562785c5a7e404818b9aed8ea8cf4e92"
	},
	{
		"id": "2da0d93abde4",
		"ts": "2026-11-26T04:40:59.424Z",
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
		"liquidityUsd": 2086358.43,
		"hash": "2da0d93abde4fb3a339193202b986e5fb54dd9130629960b00ec75e9c277866c"
	},
	{
		"id": "2cdd8909f459",
		"ts": "2026-11-26T04:40:59.674Z",
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
		"liquidityUsd": 1496263.45,
		"hash": "2cdd8909f459d8310d0f0583246d6725eac3e3dee18ab1833acfb1f40c7495eb"
	},
	{
		"id": "036b9e715f58",
		"ts": "2026-11-26T04:40:59.942Z",
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
		"liquidityUsd": 650761.29,
		"hash": "036b9e715f58bc77928d627c437ac4ae65f7f521e253b4c5e44371b96c6820ec"
	},
	{
		"id": "6d3e8b26fd62",
		"ts": "2026-11-26T04:41:00.206Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 12,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.76,
		"flags": [
			"volume_liquidity_anomaly",
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 2086358.43,
		"hash": "6d3e8b26fd62aac061d76b2f73b3ccabad87551ce69ae2b3d980098459ed864a"
	},
	{
		"id": "0feffbd9ae30",
		"ts": "2026-11-26T04:41:00.485Z",
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
		"liquidityUsd": 7323228.82,
		"hash": "0feffbd9ae30a0c850204477f9903c0fac32f6e5f64c4adb741cdc0482d4e67d"
	},
	{
		"id": "c7b5b014d7e3",
		"ts": "2026-11-26T04:41:00.915Z",
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
		"liquidityUsd": 216658.52,
		"hash": "c7b5b014d7e3349eea5b20d502d96139284e14d50953c9f721901d87dfbd5a9e"
	},
	{
		"id": "01aca74e9fc3",
		"ts": "2026-11-26T04:41:01.177Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 670476.49,
		"hash": "01aca74e9fc37505b2773e6a52542ad60b280646fc673d30f3055d33041a1371"
	},
	{
		"id": "35c5413fdc6c",
		"ts": "2026-11-26T04:41:01.471Z",
		"symbol": "SOGNI",
		"token": "0xE014d2A4da6E450f21b5050120D291e63c8940FD",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 472672.61,
		"hash": "35c5413fdc6c73b7086582350bc10320c7d69ad90c346be870759162058414a5"
	},
	{
		"id": "80f66bc00239",
		"ts": "2026-11-26T04:41:01.720Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1708815.4,
		"hash": "80f66bc00239612e6a946e2a538de87e93b33336d12a099ffebc0f9f18676a72"
	},
	{
		"id": "0d1ab379a473",
		"ts": "2026-11-26T04:41:01.996Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"mintable",
			"pausable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1226269.56,
		"hash": "0d1ab379a473ed090d3d2780a2f3b86f5235b75730de3c90f7f3779e413a8b20"
	},
	{
		"id": "f373df9a074f",
		"ts": "2026-11-26T04:41:02.281Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1720185.84,
		"hash": "f373df9a074f6800fa93466249d874ecaef36c83a5c607f13dcd2dbbd21e5389"
	},
	{
		"id": "b7685b6c5e97",
		"ts": "2026-11-26T04:41:02.548Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 849369.33,
		"hash": "b7685b6c5e97230f2135b8f03c27bf5d52057d22e6ddc304ddf2065c8fa7d6f5"
	},
	{
		"id": "9a41b362100d",
		"ts": "2026-11-26T04:41:02.802Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1308455.18,
		"hash": "9a41b362100dea500842aacbd81964854dc1405cdcfd4d94f5b775bb9dd68173"
	},
	{
		"id": "93afb85c008c",
		"ts": "2026-11-25T22:55:14.705Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 94622961.57,
		"hash": "93afb85c008cabb742074aec8d031b3c3e08d9f23fc13cc82ed8695ad6cd6ba8"
	},
	{
		"id": "862240bf143c",
		"ts": "2026-11-25T22:55:14.992Z",
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
		"liquidityUsd": 22575015.32,
		"hash": "862240bf143c6c136f16a0ce56f3da7feaca46b125fd90b04a3b98eff2601dcd"
	},
	{
		"id": "b9d366f30664",
		"ts": "2026-11-25T22:55:15.474Z",
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
		"liquidityUsd": 345411.8,
		"hash": "b9d366f30664ef9efc04ea2631ac0446d23fc52d6bbdd9ae4e0db030bc204738"
	},
	{
		"id": "1b900c778515",
		"ts": "2026-11-25T22:55:15.778Z",
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
		"liquidityUsd": 3257970.91,
		"hash": "1b900c778515afb89278e8ee61bb2b341654e00389becb7ae9147120a897e199"
	},
	{
		"id": "9c173cedf060",
		"ts": "2026-11-25T22:55:16.309Z",
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
		"liquidityUsd": 379614.88,
		"hash": "9c173cedf0600b15661eaa44a50f1495d6a4fe6022b4e8ca89a2b654db69b59a"
	},
	{
		"id": "9116611ff1f1",
		"ts": "2026-11-25T22:55:16.596Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 774302.51,
		"hash": "9116611ff1f153b7fca9d3a81a18390d901f20f46f216d30947607f396d45d08"
	},
	{
		"id": "5a9253993070",
		"ts": "2026-11-25T22:55:16.886Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3257970.91,
		"hash": "5a9253993070e3fb451dcb6e30e91a5be2d85b00e19850770ee7d9c89949b198"
	},
	{
		"id": "0bcc5bfa6268",
		"ts": "2026-11-25T22:55:17.149Z",
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
		"liquidityUsd": 1449681.92,
		"hash": "0bcc5bfa6268e49391d1384bb49c149a937cc054f0aca3e75055cfa85716a005"
	},
	{
		"id": "5b5678db7ad1",
		"ts": "2026-11-25T22:55:17.436Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 12,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.76,
		"flags": [
			"volume_liquidity_anomaly",
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1944495.88,
		"hash": "5b5678db7ad1ac436682e3223113d6fc6eb88c046d3ae0059194abab7f7a497b"
	},
	{
		"id": "e2927e78ced7",
		"ts": "2026-11-25T22:55:17.705Z",
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
		"liquidityUsd": 540621.27,
		"hash": "e2927e78ced7a46585765e246f893e25c877379cb0af7661569940f7f0bb5dca"
	},
	{
		"id": "b6c86a5386a7",
		"ts": "2026-11-25T22:55:17.974Z",
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
		"liquidityUsd": 217036.59,
		"hash": "b6c86a5386a715260c8f2ae2f4e9ac7307b949eaff21b2068d511cd025732978"
	},
	{
		"id": "a1287037daf1",
		"ts": "2026-11-25T22:55:18.243Z",
		"symbol": "SOGNI",
		"token": "0xE014d2A4da6E450f21b5050120D291e63c8940FD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 468547.7,
		"hash": "a1287037daf1c7ae6d70490435853c610b8a37de9e0f6e8f2405116d4b1028a0"
	},
	{
		"id": "31898e7e4fb6",
		"ts": "2026-11-25T22:55:18.510Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 664024.81,
		"hash": "31898e7e4fb650ba370707e65afde685f3e22d150322c2697ae591a7723aa66e"
	},
	{
		"id": "8a3d22e38adc",
		"ts": "2026-11-25T22:55:18.774Z",
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
		"liquidityUsd": 1718431.94,
		"hash": "8a3d22e38adc1d5070d7f207fc6813b06a0b069ccf701ef428a0ddbcae619cf0"
	},
	{
		"id": "90ced9b9e1b1",
		"ts": "2026-11-25T22:55:19.030Z",
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
		"liquidityUsd": 7485783.21,
		"hash": "90ced9b9e1b1d9b3efed4efb88bf75501ebcb1d438b91d7556deaf4be4965687"
	},
	{
		"id": "c8395d0bf1f1",
		"ts": "2026-11-25T22:55:19.296Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 841076.06,
		"hash": "c8395d0bf1f1c00d8f769d8a6850df468004d6d21e8b782ebf20aad673dc65d8"
	},
	{
		"id": "8938bfd659a8",
		"ts": "2026-11-25T22:55:19.561Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 287102.32,
		"hash": "8938bfd659a8b6ec03e48d4e956441833efe22d05e7757298d01325914cbb698"
	},
	{
		"id": "168b55850c42",
		"ts": "2026-11-25T22:55:19.813Z",
		"symbol": "TTWOc",
		"token": "0xB200000000000000000000f720C26062Bc3067Da",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 302005.95,
		"hash": "168b55850c42dd6909a20d734dd1a57dbfbf9bf6fd4c83732b1ecba0e247c904"
	},
	{
		"id": "e1f66dfd912d",
		"ts": "2026-11-25T22:55:20.082Z",
		"symbol": "ANTc",
		"token": "0xb20000000000000000000016e38FD364d271Ba28",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1213258.31,
		"hash": "e1f66dfd912d12a4115e563ea25986c60eada6acf3a958342e51f98d332af2da"
	},
	{
		"id": "a9bf8758c7f3",
		"ts": "2026-11-25T13:51:08.200Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 92195391.36,
		"hash": "a9bf8758c7f3b9ed15d503535d06857c070c1202c1eb54a6c1abff244d786440"
	},
	{
		"id": "3f4fc87dac67",
		"ts": "2026-11-25T13:51:08.462Z",
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
		"liquidityUsd": 21823192.57,
		"hash": "3f4fc87dac6788b6ac05e0eba31a7f858487d59bdd772044a8a8227706291f84"
	},
	{
		"id": "63368f1b515a",
		"ts": "2026-11-25T13:51:08.728Z",
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
		"liquidityUsd": 335270.02,
		"hash": "63368f1b515ae0bcce777674ce6e3b6c435701707c391cbccfd2bd988bd65bec"
	},
	{
		"id": "60f88fd9e13f",
		"ts": "2026-11-25T13:51:09.242Z",
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
		"liquidityUsd": 3189659.99,
		"hash": "60f88fd9e13fd5cea86181067ac6e412681a5006fc319ab7b4ee3020e9aa6d95"
	},
	{
		"id": "63aea8bb97f4",
		"ts": "2026-11-25T13:51:09.516Z",
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
		"liquidityUsd": 363784.6,
		"hash": "63aea8bb97f4ce8094676b57b096d5d4537f581036f4ad004261bb82bf70f76d"
	},
	{
		"id": "964e04bb97c0",
		"ts": "2026-11-25T13:51:09.773Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 752171.02,
		"hash": "964e04bb97c098581683f91d6de743b747a63ce78712ac4b16c83b85ba5a05ba"
	},
	{
		"id": "598318e453e3",
		"ts": "2026-11-25T13:51:10.040Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3189659.99,
		"hash": "598318e453e312675af00db17c95b62d972fe3ca8453d1a0999ae358ff682e6e"
	},
	{
		"id": "c1b93267c68d",
		"ts": "2026-11-25T13:51:10.320Z",
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
		"liquidityUsd": 1472116.98,
		"hash": "c1b93267c68dbda627c28e15a3857cf20fe53990ad53927c684e924e58a4b865"
	},
	{
		"id": "b5084af9177d",
		"ts": "2026-11-25T13:51:10.595Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 12,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.76,
		"flags": [
			"volume_liquidity_anomaly",
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1892160.86,
		"hash": "b5084af9177d0c6001796c87d3d00723f752e806a09664f40f81b0995db0dc56"
	},
	{
		"id": "c86abe63cae8",
		"ts": "2026-11-25T13:51:10.849Z",
		"symbol": "ANTc",
		"token": "0xb20000000000000000000016e38FD364d271Ba28",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1137339.96,
		"hash": "c86abe63cae88c8cbec5bf7dec88556275b974548d9248e2cf601823ff2dbf47"
	},
	{
		"id": "a267d6a5292b",
		"ts": "2026-11-25T13:51:11.093Z",
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
		"liquidityUsd": 540930.91,
		"hash": "a267d6a5292b0206e2b3fe5765fe4b018e2cc2423b520de29768721bca785dd5"
	},
	{
		"id": "a09b541e1a99",
		"ts": "2026-11-25T13:51:11.350Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1250406.74,
		"hash": "a09b541e1a99beede9e21f91a447ae1bab3c3d6ddf406b43d0ec8c54842efe8a"
	},
	{
		"id": "9372c167b9ea",
		"ts": "2026-11-25T13:51:11.675Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 509394.7,
		"hash": "9372c167b9eaacc5cec16df4ac8d7ba87a594303dbe87c553507293a0c039901"
	},
	{
		"id": "65e4c24ddcd8",
		"ts": "2026-11-25T13:51:11.921Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 796493.38,
		"hash": "65e4c24ddcd8c42deebb396db1b4baf2cc6a6d0526af68e4fb888b5d2639f824"
	},
	{
		"id": "17be31edf94f",
		"ts": "2026-11-25T13:51:12.183Z",
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
		"liquidityUsd": 6861186.37,
		"hash": "17be31edf94f4e4b0231ee624e0023e2f481c3d571f4edf2057df2f6f5ad9008"
	},
	{
		"id": "295e5430240a",
		"ts": "2026-11-25T13:51:12.441Z",
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
		"liquidityUsd": 1641333.72,
		"hash": "295e5430240a07e9f6dee7309612d9d131d6871570a4c110425165a743e6f3c1"
	},
	{
		"id": "f38c8c96b0f1",
		"ts": "2026-11-25T13:51:12.701Z",
		"symbol": "SOGNI",
		"token": "0xE014d2A4da6E450f21b5050120D291e63c8940FD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 454270.43,
		"hash": "f38c8c96b0f1d1f9d688c3266f1662127bd48215873e63f00ca7f7e9951ef7ba"
	},
	{
		"id": "af75e5a8f42e",
		"ts": "2026-11-25T13:51:12.960Z",
		"symbol": "TTWOc",
		"token": "0xB200000000000000000000f720C26062Bc3067Da",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 265636.22,
		"hash": "af75e5a8f42e296e053e136ca603602c52c35387a5262b2e00ae82bf3e5c6931"
	},
	{
		"id": "5670a13cfa9c",
		"ts": "2026-11-25T13:51:13.217Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1905790.97,
		"hash": "5670a13cfa9c6baf0305c4b3c50ccc60c039a00132a9f69d376f2d69bce7663b"
	},
	{
		"id": "efe6f46cca2b",
		"ts": "2026-11-25T13:51:13.454Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 254948.95,
		"hash": "efe6f46cca2bb778605dd72d6c09082440a92ed283e4531d98a5fde03259d81c"
	},
	{
		"id": "7db3121ccfd0",
		"ts": "2026-11-25T03:20:04.923Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 94313551.21,
		"hash": "7db3121ccfd04f2bb0181dc708dd3c8b89185d934ce6746dce206d7355cfc020"
	},
	{
		"id": "3d5d9b447ffb",
		"ts": "2026-11-25T03:20:05.305Z",
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
		"liquidityUsd": 22070152.46,
		"hash": "3d5d9b447ffb127247c1fda463c5d5a20bfdf60f51b7987fe017c80d5d3742b1"
	},
	{
		"id": "b55bdf9a531a",
		"ts": "2026-11-25T03:20:05.549Z",
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
		"liquidityUsd": 348447.39,
		"hash": "b55bdf9a531a697bb346311a858d283e396b74b4e77f023d10730dd5dfe5c44c"
	},
	{
		"id": "12f6268e71ea",
		"ts": "2026-11-25T03:20:05.837Z",
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
		"liquidityUsd": 3234214.4,
		"hash": "12f6268e71eab4d1f2dd069fa8822b618f7219aa3682cec178eb7c5f73d33656"
	},
	{
		"id": "60758593ff0c",
		"ts": "2026-11-25T03:20:06.045Z",
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
		"liquidityUsd": 372941.18,
		"hash": "60758593ff0ccccb55888398bebf676688e77ad609115d870044906cbb12c058"
	},
	{
		"id": "5bf32b903618",
		"ts": "2026-11-25T03:20:06.370Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 761228.16,
		"hash": "5bf32b9036183f392cb88107aa2c490b8fc2f26f544dc1c32843fe964fbba2ab"
	},
	{
		"id": "c540d975dfe7",
		"ts": "2026-11-25T03:20:06.584Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3234214.4,
		"hash": "c540d975dfe7011989924bebe1bd5cb7e2755e967780093607bc7121d840bd75"
	},
	{
		"id": "4d0e11e105ea",
		"ts": "2026-11-25T03:20:06.865Z",
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
		"liquidityUsd": 1498918.4,
		"hash": "4d0e11e105ea3b23d9d7c825424a414c23e7df4b744a9ce143396fb741fe7e23"
	},
	{
		"id": "de4ac8c2fc11",
		"ts": "2026-11-25T03:20:07.093Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 12,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.76,
		"flags": [
			"volume_liquidity_anomaly",
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1943700.57,
		"hash": "de4ac8c2fc1126ef7cc2d7c63bb2fc6195302a5de2c17e9ea5002de6c1053c48"
	},
	{
		"id": "f79cd56765e9",
		"ts": "2026-11-25T03:20:07.329Z",
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
		"liquidityUsd": 504812.39,
		"hash": "f79cd56765e9c22a593d3804542e7a0dad5d9d2b064fee7a30cbfc621425ef04"
	},
	{
		"id": "90d867c1976a",
		"ts": "2026-11-25T03:20:07.614Z",
		"symbol": "ANTc",
		"token": "0xb20000000000000000000016e38FD364d271Ba28",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1226753.49,
		"hash": "90d867c1976a87ea9c87402a539e378c8e25096f4c302d663182f03f3929d4ce"
	},
	{
		"id": "8156ba5befa7",
		"ts": "2026-11-25T03:20:07.870Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5327978.82,
		"hash": "8156ba5befa7a7c169b0c943ee4bc676e25433f840e49c0730d385eaefcdc14b"
	},
	{
		"id": "6e799ea76c4c",
		"ts": "2026-11-25T03:20:08.099Z",
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
		"liquidityUsd": 6948473.6,
		"hash": "6e799ea76c4c25c97676ec8df0a490db72e8de413022256742e20b3196b6b461"
	},
	{
		"id": "f361ecf9884a",
		"ts": "2026-11-25T03:20:08.320Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 521318.96,
		"hash": "f361ecf9884a303573ad18b14dab1edcc5a0235fb64722d41696c46c04d9465d"
	},
	{
		"id": "73ed700b1e52",
		"ts": "2026-11-25T03:20:08.575Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 822486.32,
		"hash": "73ed700b1e52d7fd44183264320d65a3e206dbf690184cfadab7c1476407a107"
	},
	{
		"id": "5fd215429c01",
		"ts": "2026-11-25T03:20:08.994Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1687413.5,
		"hash": "5fd215429c0105b17667feca3b5f2c994add037e2d0653dcc8bc06739c081bd1"
	},
	{
		"id": "27714ab76e0e",
		"ts": "2026-11-25T03:20:09.228Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 695477.87,
		"hash": "27714ab76e0e8cc9585a018c29ddb8f1b533ea2abe9f05ce75d5d55a6911a8ed"
	},
	{
		"id": "d2cf4f523076",
		"ts": "2026-11-25T03:20:09.593Z",
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
		"liquidityUsd": 1062662.02,
		"hash": "d2cf4f523076b86caca28463f7371a897db4765cfb2f645d9fa86ca202fd0194"
	},
	{
		"id": "e8f03be39787",
		"ts": "2026-11-25T03:20:09.881Z",
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
		"liquidityUsd": 1680336.64,
		"hash": "e8f03be39787fc510e848f1cd3d9b038cc3ff0d2dd16a3df7cf04f0527d6bf54"
	},
	{
		"id": "51348c177b1a",
		"ts": "2026-11-25T03:20:10.104Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1269234.18,
		"hash": "51348c177b1a2d5de9d08dd9969dd41bbd38a27621c70a43e38a3eb5068dec93"
	},
	{
		"id": "c5617c03e9b4",
		"ts": "2026-11-24T19:54:19.721Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 95384564.29,
		"hash": "c5617c03e9b44977fb6c4154378825f41b17d19c4c96a7124f4c7e6fa19d0fef"
	},
	{
		"id": "8d6f38755e48",
		"ts": "2026-11-24T19:54:19.946Z",
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
		"liquidityUsd": 22070102.83,
		"hash": "8d6f38755e4832effbce141f4c9f2f68ecbd5a9701182b3afd67b5a87375fa20"
	},
	{
		"id": "37e1b5efeed2",
		"ts": "2026-11-24T19:54:20.319Z",
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
		"liquidityUsd": 349329.36,
		"hash": "37e1b5efeed2748c07b3a1a96055d5a9006d23a3f7ec334fb41e5befc69fb8df"
	},
	{
		"id": "d4d0e5714c44",
		"ts": "2026-11-24T19:54:20.527Z",
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
		"liquidityUsd": 3267752.5,
		"hash": "d4d0e5714c4460d1e6fe0c660d9d85394face2571ea277e086fee4d355f3b887"
	},
	{
		"id": "cbb21544e466",
		"ts": "2026-11-24T19:54:20.930Z",
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
		"liquidityUsd": 378876.83,
		"hash": "cbb21544e4669e730920b6649b9e1c86d5391bd08fe5ee7d191b87e656108e17"
	},
	{
		"id": "339c5c0a9f22",
		"ts": "2026-11-24T19:54:21.171Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 771590.49,
		"hash": "339c5c0a9f22b6551a120a5d76a8fd116a63c7a475b47112aa5841b173f657e3"
	},
	{
		"id": "22b6f757e6dd",
		"ts": "2026-11-24T19:54:21.460Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3267752.5,
		"hash": "22b6f757e6dd93d1a3de506b5251c39deaf722a1b26de5ad824b73ca482aa22f"
	},
	{
		"id": "471bef480ee5",
		"ts": "2026-11-24T19:54:21.653Z",
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
		"liquidityUsd": 1510149.03,
		"hash": "471bef480ee5eaaa75ca3768bd907d3afce5f3490158fa1e807fa0281de85044"
	},
	{
		"id": "8abafcf8f607",
		"ts": "2026-11-24T19:54:21.844Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 12,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.76,
		"flags": [
			"volume_liquidity_anomaly",
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1791462.04,
		"hash": "8abafcf8f6072eba77fdf44e768d8cd53074123a4779142076d0128923bbfab6"
	},
	{
		"id": "32f3456817ac",
		"ts": "2026-11-24T19:54:22.135Z",
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
		"liquidityUsd": 527739.02,
		"hash": "32f3456817ac9c4d697496a75e935084ac9bdde2b7e4f92e336714dc26271024"
	},
	{
		"id": "07b57ae358f6",
		"ts": "2026-11-24T19:54:22.321Z",
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
		"liquidityUsd": 6916991.04,
		"hash": "07b57ae358f673acb772f922dc8ded7f168fca7ed4ab0e6af4b7e6ef05e6a490"
	},
	{
		"id": "d06bc0213b73",
		"ts": "2026-11-24T19:54:22.537Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1687108.24,
		"hash": "d06bc0213b731ddabf4595664b47265ebae6897ebabf5a605ad72e1e832c49fb"
	},
	{
		"id": "4c4c8bca4afe",
		"ts": "2026-11-24T19:54:22.728Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1532744.7,
		"hash": "4c4c8bca4afecf1f68024962c21b2cc283fc41a6e178b6a6f3fb31d6ff601bc5"
	},
	{
		"id": "4254a1372b1b",
		"ts": "2026-11-24T19:54:22.920Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 831836.94,
		"hash": "4254a1372b1bf2a7d38428e109d08b42f7936251961b81f0564bfb98a45b539a"
	},
	{
		"id": "b253ae00a578",
		"ts": "2026-11-24T19:54:23.103Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 548477.85,
		"hash": "b253ae00a578f2a5f0316de9b79a781ab611e2081889ddc66578fa584edda930"
	},
	{
		"id": "e6cda3103b18",
		"ts": "2026-11-24T19:54:23.378Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 713187.45,
		"hash": "e6cda3103b1803b6354738059d363f713795f66e698531d1e27ea7a307ea1492"
	},
	{
		"id": "7f1144c3be1a",
		"ts": "2026-11-24T19:54:23.595Z",
		"symbol": "ANTc",
		"token": "0xb20000000000000000000016e38FD364d271Ba28",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 427432,
		"hash": "7f1144c3be1aaf60b6431567b30dc450ffd3a794992985f19bee763390e52a99"
	},
	{
		"id": "2c5e5838afbb",
		"ts": "2026-11-24T19:54:23.811Z",
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
		"liquidityUsd": 985405.08,
		"hash": "2c5e5838afbbb501f61b947b3bec4e9245ef0429673c58abc42f88b0e14fe6f0"
	},
	{
		"id": "e7304b23687b",
		"ts": "2026-11-24T19:54:24.003Z",
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
		"liquidityUsd": 1694932.1,
		"hash": "e7304b23687b64c0e9791c08fc93f9f016bbd339ff359cf8b238c52f619a6464"
	},
	{
		"id": "6c24d0733d90",
		"ts": "2026-11-24T08:11:51.489Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 82424344.4,
		"hash": "6c24d0733d9063e04b41aef27999a150ccafcb01a38cbe8401fc1518e3b3abf7"
	},
	{
		"id": "18cc57c6d21b",
		"ts": "2026-11-24T08:11:51.749Z",
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
		"liquidityUsd": 22113984.47,
		"hash": "18cc57c6d21bd28fb0a5aef4fefdce3cecb91cc74cdcc3c13330c3099819a27f"
	},
	{
		"id": "1f1c699314aa",
		"ts": "2026-11-24T08:11:51.989Z",
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
		"liquidityUsd": 367140.74,
		"hash": "1f1c699314aa8955a7ad4a3961b9570b8228c601f3666b78ef8152a88fd14ac3"
	},
	{
		"id": "fa417d90c4df",
		"ts": "2026-11-24T08:11:52.233Z",
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
		"liquidityUsd": 3332956.1,
		"hash": "fa417d90c4df209dac36328e491e352b9da227b5dde85142da42440bff73b5f0"
	},
	{
		"id": "3473fcbc07c0",
		"ts": "2026-11-24T08:11:52.467Z",
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
		"liquidityUsd": 352096.39,
		"hash": "3473fcbc07c054c28a05b2545d2f6a38fe26a3fb57bf07a0a872c954940c6313"
	},
	{
		"id": "a0316534f450",
		"ts": "2026-11-24T08:11:52.703Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 786413.08,
		"hash": "a0316534f45067a86983de4fa4fa594286b8f2ac726a2b7935abfe71ff5df68a"
	},
	{
		"id": "9d6289fbe814",
		"ts": "2026-11-24T08:11:52.938Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 85111.04,
		"hash": "9d6289fbe81496a5a4ce3dda780c7cb0667dbc847d4a895a8f222ae759bbcb51"
	},
	{
		"id": "ecf89fea1af6",
		"ts": "2026-11-24T08:11:53.176Z",
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
		"liquidityUsd": 1528808.93,
		"hash": "ecf89fea1af64aa5c022e35358c69589b1e3a600a2b84a4b97eeb37553b1efef"
	},
	{
		"id": "3dc61046b743",
		"ts": "2026-11-24T08:11:53.414Z",
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
		"liquidityUsd": 607302.05,
		"hash": "3dc61046b743831b6dd016570c1e2d9b2fc4bf1befad5bdc932bc68b4e6074ba"
	},
	{
		"id": "9f916a8e73c0",
		"ts": "2026-11-24T08:11:53.654Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 12,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.76,
		"flags": [
			"volume_liquidity_anomaly",
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1826958.73,
		"hash": "9f916a8e73c096634363a82496f1ead7d62be344fa04f41139d01b894a0fd69f"
	},
	{
		"id": "430586c59531",
		"ts": "2026-11-24T08:11:53.877Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1521620.05,
		"hash": "430586c5953169ed4a5a6190c28cd80ddfff597bf4e480c4e48586e9c716e269"
	},
	{
		"id": "6479b9b8bbe6",
		"ts": "2026-11-24T08:11:54.096Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 532036.64,
		"hash": "6479b9b8bbe6cc29fc5188de4b8fc17ee6fb2232bcb3eb05a6c5ee3499bcbd2d"
	},
	{
		"id": "f9933ab353d6",
		"ts": "2026-11-24T08:11:54.315Z",
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
		"liquidityUsd": 7043644.79,
		"hash": "f9933ab353d63937904855c2a55b4c53bd1cf0f54c77b2aa267d3a0d40314753"
	},
	{
		"id": "0edc7e0cb5e7",
		"ts": "2026-11-24T08:11:54.536Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 876558.32,
		"hash": "0edc7e0cb5e7d85071d7c153576cc140379b5da75d60f80ce6af0b4f1d6e6289"
	},
	{
		"id": "5578665917e6",
		"ts": "2026-11-24T08:11:54.755Z",
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
		"liquidityUsd": 1190085.33,
		"hash": "5578665917e6ce82f5676fe17ca0873601648549dd98c70dcfd74401d2b947aa"
	},
	{
		"id": "1c921f45e939",
		"ts": "2026-11-24T08:11:54.976Z",
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
		"liquidityUsd": 798895.5,
		"hash": "1c921f45e9397fc0b8b6aa1ec5ca486662292283befdcbf5c3bcfcc61d048cc0"
	},
	{
		"id": "fdd308176608",
		"ts": "2026-11-24T08:11:55.203Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 720204.72,
		"hash": "fdd308176608272b9a43383544fa27cf3a3f84347bca347eaf8d555dfeac7e19"
	},
	{
		"id": "d067e1a4eef1",
		"ts": "2026-11-24T08:11:55.808Z",
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
		"liquidityUsd": 1165792.35,
		"hash": "d067e1a4eef16513477de07c9e74d304f386ee467eb8186a508f1398c08602d1"
	},
	{
		"id": "3e28244802bb",
		"ts": "2026-11-24T08:11:56.033Z",
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
		"liquidityUsd": 1773560.5,
		"hash": "3e28244802bbeb00547b6dcf24500f46d220224ada67d39319e54044b3b018a3"
	},
	{
		"id": "3280559e3f3b",
		"ts": "2026-11-23T23:19:15.252Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 82801645.99,
		"hash": "3280559e3f3b31e4766417bcec55cad059407cb773a1ec92e85db1b5a47baf2d"
	},
	{
		"id": "a931f5f5d148",
		"ts": "2026-11-23T23:19:15.512Z",
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
		"liquidityUsd": 22394634.83,
		"hash": "a931f5f5d1485f890866cb05abf00d254d97ffe510e0e490f416e05124a5d612"
	},
	{
		"id": "36897bc90c5e",
		"ts": "2026-11-23T23:19:15.775Z",
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
		"liquidityUsd": 362439.7,
		"hash": "36897bc90c5e098d6616e7479914416ac79d96804e7e230636ec8567f5d17d40"
	},
	{
		"id": "d24712eb16ff",
		"ts": "2026-11-23T23:19:16.239Z",
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
		"liquidityUsd": 3336069.23,
		"hash": "d24712eb16ff183178cecf3ec2495354571bfb5f4acde1153f0a35bed381c9ee"
	},
	{
		"id": "d7c896699c69",
		"ts": "2026-11-23T23:19:16.509Z",
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
		"liquidityUsd": 357903.92,
		"hash": "d7c896699c69c84a1bdd93eaf1aa3b00fbe0596cecba3eedbb08f52caff81a49"
	},
	{
		"id": "07b3e5c9bdc3",
		"ts": "2026-11-23T23:19:16.759Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 793842.11,
		"hash": "07b3e5c9bdc3c7a18f3c40851e71bf3dac6b97ed7051c915709b43ee7fe14131"
	},
	{
		"id": "5644a85b2510",
		"ts": "2026-11-23T23:19:17.003Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 85111.03,
		"hash": "5644a85b251003b3d9fe44a0e3008a797f9ae3f2b01e8106644917a770275abf"
	},
	{
		"id": "100c43c402eb",
		"ts": "2026-11-23T23:19:17.246Z",
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
		"liquidityUsd": 1420704.46,
		"hash": "100c43c402eb53708ff09594bcdc7bdf2ab9590bf59e98a0226f3348e7b2ce2a"
	},
	{
		"id": "d54c0864420f",
		"ts": "2026-11-23T23:19:17.505Z",
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
		"liquidityUsd": 606284.62,
		"hash": "d54c0864420f8f3a4f0d14dc0b9908b095cef5df43cb10ec63118742f9c34627"
	},
	{
		"id": "bf15709ade8c",
		"ts": "2026-11-23T23:19:17.753Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 12,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.76,
		"flags": [
			"volume_liquidity_anomaly",
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1848176.5,
		"hash": "bf15709ade8c74259bae6563273a1e9a07982a3d921ed8723c5211e6854b90a9"
	},
	{
		"id": "f4177d136f01",
		"ts": "2026-11-23T23:19:17.978Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 578151.85,
		"hash": "f4177d136f01e03089fbb534f685d807498f51f36b4927de7995feae4f520a7b"
	},
	{
		"id": "0eec18730e34",
		"ts": "2026-11-23T23:19:18.210Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1815256.27,
		"hash": "0eec18730e340336573e5f426a2a6ada9344d95ca749cee110580c10f3eb5f7f"
	},
	{
		"id": "372ae4575cfe",
		"ts": "2026-11-23T23:19:18.442Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 881581.55,
		"hash": "372ae4575cfed2bf666ffbdcbeda7863ba1e2ef3312d28bbd3036b7a4807e0a7"
	},
	{
		"id": "8d0397d35a29",
		"ts": "2026-11-23T23:19:18.667Z",
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
		"liquidityUsd": 6996537.21,
		"hash": "8d0397d35a29aef39aebf7f396afe1348654a36751d1d39c2b470f43e4d598ab"
	},
	{
		"id": "1b0fa17980a2",
		"ts": "2026-11-23T23:19:18.888Z",
		"symbol": "ANTc",
		"token": "0xb20000000000000000000016e38FD364d271Ba28",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1147259.57,
		"hash": "1b0fa17980a286e3ee8b5cd80ea9699a24cd4023bda2704905c74444cf1fe1c7"
	},
	{
		"id": "b3095b4f0dc6",
		"ts": "2026-11-23T23:19:19.123Z",
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
		"liquidityUsd": 1170079.31,
		"hash": "b3095b4f0dc6f9edaf08e7b3a442cfad6632b5dc5705904cb57e9f6f021b184e"
	},
	{
		"id": "7200268e78ed",
		"ts": "2026-11-23T23:19:19.355Z",
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
		"liquidityUsd": 1803567.94,
		"hash": "7200268e78ed38f2162838bd0c6969bb96cf7e3f955b40b1ab7df5fe0bc4190c"
	},
	{
		"id": "f159e12a88e2",
		"ts": "2026-11-23T23:19:19.581Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3061305.16,
		"hash": "f159e12a88e21eb68d5ed08447e1fa6397b2506045234fea56a0a2b493bba1b7"
	},
	{
		"id": "ffbfed7839b4",
		"ts": "2026-11-23T11:44:13.475Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 82671418.71,
		"hash": "ffbfed7839b4a063839c9974ce847a94d4cef5d404fe60b97366652127bbb3b1"
	},
	{
		"id": "80be4fa1abc4",
		"ts": "2026-11-23T11:44:13.719Z",
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
		"liquidityUsd": 22385663.54,
		"hash": "80be4fa1abc474e57de8634e4e0aa4650fe306fba97edf1140883e26a45963a0"
	},
	{
		"id": "2c0a655c9153",
		"ts": "2026-11-23T11:44:13.962Z",
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
		"liquidityUsd": 357448.34,
		"hash": "2c0a655c915377a0458c750b9cabf10b4239734a00a10a486e80875f38cd3237"
	},
	{
		"id": "16b0bec97420",
		"ts": "2026-11-23T11:44:14.231Z",
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
		"liquidityUsd": 3359514.19,
		"hash": "16b0bec97420700748e5cb2b0e639d66afe4f39fc19a08078c4af35c55abc0ff"
	},
	{
		"id": "fcdddbaba978",
		"ts": "2026-11-23T11:44:14.466Z",
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
		"liquidityUsd": 412310.19,
		"hash": "fcdddbaba978e8d6956811d6402b2eca3d52f45f66c612d52f2b7a74f04e0385"
	},
	{
		"id": "dcf2cf39618f",
		"ts": "2026-11-23T11:44:14.708Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 792438.72,
		"hash": "dcf2cf39618fa7be7ee8d97ab5f1fce8ae35b075dbb3ba7ffcd7bcd6898be8ab"
	},
	{
		"id": "6da6166397ec",
		"ts": "2026-11-23T11:44:14.936Z",
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
		"liquidityUsd": 1787186.89,
		"hash": "6da6166397ec92fcb071d06c848cc65cf1f40427a37e8c49ce62384ccfdb5900"
	},
	{
		"id": "b783782c02bd",
		"ts": "2026-11-23T11:44:15.177Z",
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
		"liquidityUsd": 1404864.46,
		"hash": "b783782c02bd3b50834e355a0209bf0f5002ccc75624a737f78ecd97efebfcc9"
	},
	{
		"id": "dc9a02beda89",
		"ts": "2026-11-23T11:44:15.407Z",
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
		"liquidityUsd": 601836.54,
		"hash": "dc9a02beda890a2e9ff7c1f7a1efe5bfa22ce80b64779d2a086b56a0b074ddf0"
	},
	{
		"id": "c2924ecb949c",
		"ts": "2026-11-23T11:44:15.647Z",
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
		"liquidityUsd": 7212878.16,
		"hash": "c2924ecb949cdbe04b9e00a7066b648b7073d92ff3a9f55fffc9fb3c1721817a"
	}
]
