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
	"updatedAt": "2026-07-27T21:06:36.965Z",
	"tokensScored": 5950,
	"verdictsIssued": 5950,
	"safe": 5203,
	"risky": 466,
	"likelyRug": 281,
	"ticks": 362
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "caa9296cc5e6",
		"ts": "2026-07-27T21:06:33.833Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112721465.45,
		"hash": "caa9296cc5e637b492929c339de30356b5a0f9ae46460c47c88e739bf636b8c3"
	},
	{
		"id": "031a6c483858",
		"ts": "2026-07-27T21:06:34.054Z",
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
		"liquidityUsd": 17356191.35,
		"hash": "031a6c483858eb8f90503155807c62dad8a1d18c0dc7f7e276b53dd61b0f976e"
	},
	{
		"id": "e8b431a85a40",
		"ts": "2026-07-27T21:06:34.269Z",
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
		"liquidityUsd": 1118506.21,
		"hash": "e8b431a85a40e3bb4eeea917496333c5d53440317b5ff1fa67af082401ae90b2"
	},
	{
		"id": "d2f993a70036",
		"ts": "2026-07-27T21:06:34.462Z",
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
		"liquidityUsd": 26768355.31,
		"hash": "d2f993a7003613667940304e4e850ff5ee1c498715573435cfb11c63c280df9d"
	},
	{
		"id": "c5bda366e0f0",
		"ts": "2026-07-27T21:06:34.666Z",
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
		"liquidityUsd": 5106062.57,
		"hash": "c5bda366e0f0b0aed2bc651e8570ede9e5f742b2d225638e344f0eb91f997ae1"
	},
	{
		"id": "e14dc55b866b",
		"ts": "2026-07-27T21:06:34.906Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 976346.16,
		"hash": "e14dc55b866b0fb97c8c474583e0793c0b02435db99c4f7719e52380387094c0"
	},
	{
		"id": "95e15d15d9c2",
		"ts": "2026-07-27T21:06:35.117Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26768355.31,
		"hash": "95e15d15d9c27310d74e236a33dafc84e0969bb67ab5c5448a7afaa2424b3604"
	},
	{
		"id": "10d2338e54a8",
		"ts": "2026-07-27T21:06:35.320Z",
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
		"liquidityUsd": 3896178.74,
		"hash": "10d2338e54a803faa5889899f8ec53cdb8ffc34867b919021ba31c4d4cd2776a"
	},
	{
		"id": "78ab750ef1db",
		"ts": "2026-07-27T21:06:35.523Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 534869.45,
		"hash": "78ab750ef1db3177b2854fb26febfaedd29847c935f9005ad83c50529bb6807b"
	},
	{
		"id": "82941e838a9a",
		"ts": "2026-07-27T21:06:35.712Z",
		"symbol": "$MFER",
		"token": "0xE3086852A4B125803C815a158249ae468A3254Ca",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 178975.72,
		"hash": "82941e838a9ad00aedf0ed0db826c00888820a72e7df2fd327fca699f7f231c4"
	},
	{
		"id": "051d5d3a967e",
		"ts": "2026-07-27T21:06:35.915Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10039461.73,
		"hash": "051d5d3a967e3ba577466961a0af0b6d0b1950068835bd5cdf3413c1fe66c0ea"
	},
	{
		"id": "28022cf4fab6",
		"ts": "2026-07-27T21:06:36.109Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 544655.24,
		"hash": "28022cf4fab6ec3e55d02cc775d4069069a6e587fd8fdc85842d128c64379ac3"
	},
	{
		"id": "d200709f5508",
		"ts": "2026-07-27T21:06:36.325Z",
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
		"liquidityUsd": 1460366.56,
		"hash": "d200709f550895c70d31023dc0a849a3a5bb7c9de2ee36f959405bc8ab64d227"
	},
	{
		"id": "c89fbe095d51",
		"ts": "2026-07-27T21:06:36.518Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2000649.24,
		"hash": "c89fbe095d51487f4280087bb505b26d916e41921dd87743988cd947a01afeae"
	},
	{
		"id": "c93806041389",
		"ts": "2026-07-27T21:06:36.723Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1767393.97,
		"hash": "c938060413891ab55721f18c96aa88058fe8cbf4496ef79af9a0719d28ddc772"
	},
	{
		"id": "844361f67a15",
		"ts": "2026-07-27T21:06:36.965Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 513472.12,
		"hash": "844361f67a15557b1a135ef4df1b98ee4f3bdef0e8b99eae0d1a669d5db3ace5"
	},
	{
		"id": "db613e8dbbae",
		"ts": "2026-07-27T19:21:49.294Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112619871.41,
		"hash": "db613e8dbbae2a5e08b5bcc74fa4eb019dced9872b6922da9d13195defa165c4"
	},
	{
		"id": "75d284b7a1e6",
		"ts": "2026-07-27T19:21:49.671Z",
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
		"liquidityUsd": 15104499.5,
		"hash": "75d284b7a1e6a81f6d0f470a0fe1a4e1cfe08c56a5ac3ef5d46ed1e217749f1d"
	},
	{
		"id": "695f6693c4f2",
		"ts": "2026-07-27T19:21:49.881Z",
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
		"liquidityUsd": 1119751.87,
		"hash": "695f6693c4f246781cf871910fe4a9d72f6a72b3904c565e02b33f41ae836269"
	},
	{
		"id": "1553d6a42845",
		"ts": "2026-07-27T19:21:50.253Z",
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
		"liquidityUsd": 26622858.53,
		"hash": "1553d6a42845a69622561ea1bd21b7f3dd36ebd64da3b988e646f288189cbc3a"
	},
	{
		"id": "b011151dbf20",
		"ts": "2026-07-27T19:21:50.466Z",
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
		"liquidityUsd": 5122425.33,
		"hash": "b011151dbf20005ffd2420d379014f9a63602a0837f47090591a488cb81963aa"
	},
	{
		"id": "10b61da9f4b7",
		"ts": "2026-07-27T19:21:50.670Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 976368.01,
		"hash": "10b61da9f4b7f665046f18e1b7ca474af113f03a127c377555034a9870b25b10"
	},
	{
		"id": "5e452f3aba11",
		"ts": "2026-07-27T19:21:50.878Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26622858.53,
		"hash": "5e452f3aba11eee9e166d3707edcec951297960c69ed0ebcc92308715afb2b65"
	},
	{
		"id": "b0d087c7dfc1",
		"ts": "2026-07-27T19:21:51.080Z",
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
		"liquidityUsd": 3636481.83,
		"hash": "b0d087c7dfc10afd996c05fdcc6201dac682d2d519d14c0191e33d26d9b3758e"
	},
	{
		"id": "076b694dccda",
		"ts": "2026-07-27T19:21:51.288Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 555230.52,
		"hash": "076b694dccda6eff4e45ed0fa2f328d2cde9a9d6d46a799c3d1239890553b781"
	},
	{
		"id": "e40797084751",
		"ts": "2026-07-27T19:21:51.495Z",
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
		"liquidityUsd": 10147004.75,
		"hash": "e407970847514c6c920427b87a09ab604bfd32541cad06f12ee8a035cf0a944d"
	},
	{
		"id": "c1d68df29fc0",
		"ts": "2026-07-27T19:21:51.693Z",
		"symbol": "$MFER",
		"token": "0xE3086852A4B125803C815a158249ae468A3254Ca",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 179017.36,
		"hash": "c1d68df29fc05a11c291702820bddec5d1429960f141b62a26544e66899c289b"
	},
	{
		"id": "ce7d46215913",
		"ts": "2026-07-27T19:21:51.905Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 582186.94,
		"hash": "ce7d46215913f3d5f92aad5a20be895b9903d77a66a1838c88791b20b0320739"
	},
	{
		"id": "416dacc161b8",
		"ts": "2026-07-27T19:21:52.117Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1999291.63,
		"hash": "416dacc161b8503f715be7cd4dad8013e07c6411014da601d9f0c907cc9d9096"
	},
	{
		"id": "06a6d5065ee3",
		"ts": "2026-07-27T19:21:52.313Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 265397.87,
		"hash": "06a6d5065ee3dd7b052c29b6d0cc74dfeaf99b8e1f9fa4db79edc960116755e0"
	},
	{
		"id": "50f875d9ec1f",
		"ts": "2026-07-27T19:21:52.507Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 519024.21,
		"hash": "50f875d9ec1fb7f8fa2e5faca82e1e9a15ef7499d62dc5f90e8b0ca9be6fddee"
	},
	{
		"id": "cfd9dc9a2af4",
		"ts": "2026-07-27T19:21:52.703Z",
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
		"liquidityUsd": 1455226.94,
		"hash": "cfd9dc9a2af4d33d37e74e4daead063a50366a2a2b8b35ca6127314f6aa239d8"
	},
	{
		"id": "158d7f1ee4b9",
		"ts": "2026-07-27T17:39:29.599Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112499153.26,
		"hash": "158d7f1ee4b96f6730313bfefd4e058cbf66be70a74b2573dd6bcee0e17c64ce"
	},
	{
		"id": "23ec3847bc77",
		"ts": "2026-07-27T17:39:30.048Z",
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
		"liquidityUsd": 16671869.87,
		"hash": "23ec3847bc775fb17ef6f5cf7f553035d723b03a3766fb7a3cb32943d774d33a"
	},
	{
		"id": "32f9770f22a0",
		"ts": "2026-07-27T17:39:30.300Z",
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
		"liquidityUsd": 1116502.57,
		"hash": "32f9770f22a004a2872080899cdbc106626d4c6b2adecb3c424a698dba9c1dbf"
	},
	{
		"id": "5cd6efc59740",
		"ts": "2026-07-27T17:39:30.549Z",
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
		"liquidityUsd": 26454433.24,
		"hash": "5cd6efc597404adb04dd0aa8eea61075b0c365a6c23f13519614b2781cec049f"
	},
	{
		"id": "771fafb346d8",
		"ts": "2026-07-27T17:39:30.801Z",
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
		"liquidityUsd": 5118340.77,
		"hash": "771fafb346d8a1f449919af1f1d929853c1a56cb3e8928a44521d960f56e9af2"
	},
	{
		"id": "64eeb8d4aa02",
		"ts": "2026-07-27T17:39:31.047Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 976368.01,
		"hash": "64eeb8d4aa02a5947719431fd285779b1215a18a283a45849509d4e1e686fadd"
	},
	{
		"id": "d5ee1a581d11",
		"ts": "2026-07-27T17:39:31.290Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26454433.24,
		"hash": "d5ee1a581d115285dc1137f15304f795981cf128b16881f47814058cdcaba127"
	},
	{
		"id": "9462b1107b7f",
		"ts": "2026-07-27T17:39:31.542Z",
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
		"liquidityUsd": 3788274.3,
		"hash": "9462b1107b7fdb9f93a5807225ac6fdbe6fac43f128ca62a68d0798d883a1581"
	},
	{
		"id": "c9833de29c8f",
		"ts": "2026-07-27T17:39:31.798Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 558043.51,
		"hash": "c9833de29c8fa8ac8c10ba028bb0d702b7f14c8789374274bbf0de9f0e832b7d"
	},
	{
		"id": "56e7ad4512ab",
		"ts": "2026-07-27T17:39:32.049Z",
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
		"liquidityUsd": 10057652.18,
		"hash": "56e7ad4512ab2664cda303d466a34410ada4aea06142763b91021850d4b048e4"
	},
	{
		"id": "a27555770cb8",
		"ts": "2026-07-27T17:39:32.285Z",
		"symbol": "$MFER",
		"token": "0xE3086852A4B125803C815a158249ae468A3254Ca",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 178124.09,
		"hash": "a27555770cb8e377db6fb0d673cd4901aac72221e219480f7cb342afdb858e98"
	},
	{
		"id": "906d22b1c209",
		"ts": "2026-07-27T17:39:32.577Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2011327.28,
		"hash": "906d22b1c209132a9302cd2a86828ce898d4741d66060019474d8990f2dbc1eb"
	},
	{
		"id": "fa067cc9bf30",
		"ts": "2026-07-27T17:39:32.809Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 271053.43,
		"hash": "fa067cc9bf30e18d6a1cb9b26e04906397e74e655b37f29d34ddbcd525d30a72"
	},
	{
		"id": "20ddc268026f",
		"ts": "2026-07-27T17:39:33.040Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1805040.23,
		"hash": "20ddc268026fe4d9cd34b098c37ab36b1639f9ce27aadf77bdba5db0ed82530e"
	},
	{
		"id": "6a945a8bac1b",
		"ts": "2026-07-27T17:39:33.273Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 584045.22,
		"hash": "6a945a8bac1b32ad4b2bbe0869aeaef45ac9f7badc249905d5a7e54b797bae6b"
	},
	{
		"id": "73fb052e6967",
		"ts": "2026-07-27T17:39:33.506Z",
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
		"liquidityUsd": 1494063.16,
		"hash": "73fb052e69674bd015b5c6fa7cde2a587209f10adbdb1f67bcfc4b10ffbb35ef"
	},
	{
		"id": "86034504d6e2",
		"ts": "2026-07-27T15:39:26.784Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112218462.05,
		"hash": "86034504d6e2ddbd8a3ee8eba75cb60b2629893eaa912d7cf31daf3041f838ec"
	},
	{
		"id": "5be4619e80b7",
		"ts": "2026-07-27T15:39:27.235Z",
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
		"liquidityUsd": 16447472.63,
		"hash": "5be4619e80b7082050b770218cd827738ba4dbe620adaba329b7599eeefbb00f"
	},
	{
		"id": "11dfb4a14c1f",
		"ts": "2026-07-27T15:39:27.452Z",
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
		"liquidityUsd": 1110457.09,
		"hash": "11dfb4a14c1f0a1fe50e68753280ac1ae16c1adf07256821843f42238740cd70"
	},
	{
		"id": "3c4d44e69c60",
		"ts": "2026-07-27T15:39:27.648Z",
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
		"liquidityUsd": 25802979.86,
		"hash": "3c4d44e69c6007929d8e1d17c2db303b6be53d41a6b7de7283e772f7dee55f86"
	},
	{
		"id": "3292f875befc",
		"ts": "2026-07-27T15:39:27.838Z",
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
		"liquidityUsd": 5070728.27,
		"hash": "3292f875befccd21d9c1b650247e5c6fd759aa3e111a8b797a6ca9a06f54e811"
	},
	{
		"id": "3d64f3e6bc17",
		"ts": "2026-07-27T15:39:28.048Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 983206.96,
		"hash": "3d64f3e6bc1775fbf768a30841635ed106414b35274d4e5a69a138cdacd869da"
	},
	{
		"id": "8a898c37f160",
		"ts": "2026-07-27T15:39:28.256Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25802979.86,
		"hash": "8a898c37f16056ed2c8f860c0f2d148f3701e7b1e8b0a4eb8c629641fe88b76e"
	},
	{
		"id": "3baa426081bf",
		"ts": "2026-07-27T15:39:28.474Z",
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
		"liquidityUsd": 3787344.43,
		"hash": "3baa426081bf4b815d7a99ecf510d31d4deb1c3de5726ab8eca19937e7adc15a"
	},
	{
		"id": "6fae44f67771",
		"ts": "2026-07-27T15:39:28.675Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 571522.1,
		"hash": "6fae44f67771d11bca8dd5eebaa312521a868ea356ef96ca3e5b5155f44d9a8b"
	},
	{
		"id": "a1c1fa0a6ccc",
		"ts": "2026-07-27T15:39:28.872Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 275699.44,
		"hash": "a1c1fa0a6ccccfaefea37836d9212882b778b03f188cf45f0dee0750314c8630"
	},
	{
		"id": "2b9faba8945e",
		"ts": "2026-07-27T15:39:29.069Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9929555.25,
		"hash": "2b9faba8945eb1bb192c4c6b9b7dbe2260e85b9d73e1fbba50d556f9e7b16b34"
	},
	{
		"id": "e3792ea62e16",
		"ts": "2026-07-27T15:39:29.271Z",
		"symbol": "$MFER",
		"token": "0xE3086852A4B125803C815a158249ae468A3254Ca",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 174457.16,
		"hash": "e3792ea62e16808e14dd868e918568c285de910850505e459625b5629f675ad7"
	},
	{
		"id": "68beb19e0faa",
		"ts": "2026-07-27T15:39:29.481Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2003597.96,
		"hash": "68beb19e0faae4a674b275b861e0e33dea828f879d1484922d2f439587e4fe06"
	},
	{
		"id": "ab66ccd123b2",
		"ts": "2026-07-27T15:39:29.670Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1795511.29,
		"hash": "ab66ccd123b2d1c416a5727a9da5338bf276ab0ba59fec65a8a6c7dc5aa03852"
	},
	{
		"id": "51ed4bfca7da",
		"ts": "2026-07-27T15:39:29.873Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5876660.85,
		"hash": "51ed4bfca7da20af5d8fef006a29756c4781ddcf20d36f2f722ebe73fea7944a"
	},
	{
		"id": "aa0f406553b2",
		"ts": "2026-07-27T15:39:30.073Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 639945.27,
		"hash": "aa0f406553b2ec9b0428aaf8c1ced0a7402cb48d9f5911ed994051f9f29e63e3"
	},
	{
		"id": "1e43a52c374a",
		"ts": "2026-07-27T12:18:19.154Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112919227.76,
		"hash": "1e43a52c374ad911a000c72de6c2123be1b5b890cc75eb0c27f1f22723b5bcb3"
	},
	{
		"id": "908892299319",
		"ts": "2026-07-27T12:18:19.501Z",
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
		"liquidityUsd": 13381766.66,
		"hash": "908892299319f9dbf6624c7c6c1269f2843e45ac950be3e18b5830e9e1c9d324"
	},
	{
		"id": "d557558781bc",
		"ts": "2026-07-27T12:18:19.720Z",
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
		"liquidityUsd": 1129118,
		"hash": "d557558781bc07214daf508a5735f74e7bbc7025a1322c78e3272269b0ab6a87"
	},
	{
		"id": "3c377256bdcb",
		"ts": "2026-07-27T12:18:19.933Z",
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
		"liquidityUsd": 25808249.83,
		"hash": "3c377256bdcb1180cdf5ddfe6281262c3b38de4ec659d911889ce774636f2e53"
	},
	{
		"id": "0b1808b6876d",
		"ts": "2026-07-27T12:18:20.135Z",
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
		"liquidityUsd": 5198859.36,
		"hash": "0b1808b6876d22a634a6b8d937bac22d661fe611cd91b73d93763ef265bc6cc0"
	},
	{
		"id": "108cd4749ee3",
		"ts": "2026-07-27T12:18:20.359Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 993542.17,
		"hash": "108cd4749ee34b629c5dbe582ac0dcb1253bf28e40d375118cddf32a4b5279f1"
	},
	{
		"id": "ff768df2b605",
		"ts": "2026-07-27T12:18:20.558Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25808249.83,
		"hash": "ff768df2b605ecdaf0280dd4a36710451bb81429d88ae464fe6de57208c8ad95"
	},
	{
		"id": "b6a3834f04c5",
		"ts": "2026-07-27T12:18:20.792Z",
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
		"liquidityUsd": 2503336.1,
		"hash": "b6a3834f04c513b9a72588125d56dd70f5d68c33a5dbf211e87588ef7b0146f8"
	},
	{
		"id": "742ef0ff29dc",
		"ts": "2026-07-27T12:18:20.991Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 625614.17,
		"hash": "742ef0ff29dc8bd0cbd5c96576e03f66f1caeedf41525a6d62343e7878a4ecc7"
	},
	{
		"id": "07f265c5b9e9",
		"ts": "2026-07-27T12:18:21.195Z",
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
		"liquidityUsd": 10431602,
		"hash": "07f265c5b9e9803aa8573641c59158939e276767ce02595a8da101c7c32c10f0"
	},
	{
		"id": "04fc19cb6453",
		"ts": "2026-07-27T12:18:21.388Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 275554.1,
		"hash": "04fc19cb6453bb41c668b01c08913a1c5732bdee294493c9fa2bf58664fe61fb"
	},
	{
		"id": "50ec17982240",
		"ts": "2026-07-27T12:18:21.597Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1825709.32,
		"hash": "50ec17982240b12eac5c7dfb90a95dee94675e6072ce445bc524a89de389139a"
	},
	{
		"id": "bb4202dd1e44",
		"ts": "2026-07-27T12:18:21.802Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2043787.6,
		"hash": "bb4202dd1e4409c316b7aa65679a56b584cd2659104e46f4cfdc9efe6b99e321"
	},
	{
		"id": "1ae23c94b225",
		"ts": "2026-07-27T12:18:22.009Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5961875.63,
		"hash": "1ae23c94b2253174313f4e8de4d76447fbf1a6185b45f9d7e96e84110353697f"
	},
	{
		"id": "4d2a9659883d",
		"ts": "2026-07-27T12:18:22.240Z",
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
		"liquidityUsd": 1349583.39,
		"hash": "4d2a9659883d97f5d4c6ad41910ec4d1aac643920aa961290f9094fd0f223cd8"
	},
	{
		"id": "1bedb23b197a",
		"ts": "2026-07-27T12:18:22.440Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 657616.49,
		"hash": "1bedb23b197a4f120b235ed84a058d53e6fca98f9e3212606436e3631c88b490"
	},
	{
		"id": "0fb1f9f7963f",
		"ts": "2026-07-27T08:27:07.169Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112854549.46,
		"hash": "0fb1f9f7963f19131ee0dc027b82282bc258439356f008101f8e6119df1f8b5f"
	},
	{
		"id": "23aee9a10d7d",
		"ts": "2026-07-27T08:27:07.659Z",
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
		"liquidityUsd": 16032232.65,
		"hash": "23aee9a10d7da94c8ce92526b9096e31d416a8d027ba8be61cb1bc1dc966d37c"
	},
	{
		"id": "c6212fb48ede",
		"ts": "2026-07-27T08:27:07.957Z",
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
		"liquidityUsd": 1133100.55,
		"hash": "c6212fb48ede125c5ba2e996de22a9216a6554851b1e464418d5d1e278ea250b"
	},
	{
		"id": "f58568a4256f",
		"ts": "2026-07-27T08:27:08.231Z",
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
		"liquidityUsd": 25673911.21,
		"hash": "f58568a4256f7f40167d09bbeee716a6f5f4aa7ba083699b9f422344f1198238"
	},
	{
		"id": "40f84e9f4f77",
		"ts": "2026-07-27T08:27:08.481Z",
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
		"liquidityUsd": 5190968.23,
		"hash": "40f84e9f4f779fda5e7742239b17319c9d76b7a444979e914523bdda22e6bb62"
	},
	{
		"id": "e40102512ffa",
		"ts": "2026-07-27T08:27:08.732Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 993683.38,
		"hash": "e40102512ffa6ece8578ad1e97b43f5565b78eb7c164e9ca8f927b862f08039f"
	},
	{
		"id": "5f66ee614ed8",
		"ts": "2026-07-27T08:27:09.226Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25673911.18,
		"hash": "5f66ee614ed8afab6014c858061b3de77e4250ef5049eb205d450ae699409826"
	},
	{
		"id": "c9a637d75d23",
		"ts": "2026-07-27T08:27:09.456Z",
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
		"liquidityUsd": 2510794.66,
		"hash": "c9a637d75d231d18b12b0ac6e003e6ab039b44c9ef7447d506020845840ae8c3"
	},
	{
		"id": "605cb71e80d8",
		"ts": "2026-07-27T08:27:09.726Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 594347.99,
		"hash": "605cb71e80d84b0793f130ecf1c868e6bc3c9151d01a54b03df83cd9a32f1a9d"
	},
	{
		"id": "edd53f4a20bd",
		"ts": "2026-07-27T08:27:09.989Z",
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
		"liquidityUsd": 10557045.11,
		"hash": "edd53f4a20bddf56a265f348ea8c86c2d1240c6a5bd3fd9e5a5c7e6686785462"
	},
	{
		"id": "e3d15ab35f2f",
		"ts": "2026-07-27T08:27:10.204Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 275949.58,
		"hash": "e3d15ab35f2fb10b68b45fab68e5f79eb907df8cf4f95c96f3961eed1b0bd261"
	},
	{
		"id": "db53d962116a",
		"ts": "2026-07-27T08:27:10.425Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1817859.39,
		"hash": "db53d962116aa4209b22f41e321a0fa5bbb3c2d505c45fe91a7557dfdd2aed75"
	},
	{
		"id": "aa07d15d8299",
		"ts": "2026-07-27T08:27:10.641Z",
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
		"liquidityUsd": 2042784.74,
		"hash": "aa07d15d829985986de1d2f0eed22094ed092c22114f2efb6e42f226b07842b8"
	},
	{
		"id": "9c8edac55745",
		"ts": "2026-07-27T08:27:10.861Z",
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
		"liquidityUsd": 1414913.68,
		"hash": "9c8edac557459a1390e56591de000732882db6534d6651394786053e97a9940a"
	},
	{
		"id": "441f4817ffd2",
		"ts": "2026-07-27T08:27:11.077Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4784356.56,
		"hash": "441f4817ffd20a967a49eadbb6bcaebfc266303e78616d0968bb3fbe5c8f73c4"
	},
	{
		"id": "74038a64387a",
		"ts": "2026-07-27T08:27:11.299Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5966973.54,
		"hash": "74038a64387aee5fd41681c621f0e6e0ad074e366b7248e8043e56884f98953f"
	},
	{
		"id": "9e1dd68c8bbb",
		"ts": "2026-07-27T08:27:11.519Z",
		"symbol": "BEAN",
		"token": "0x5c72992b83E74c4D5200A8E8920fB946214a5A5D",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 259901.54,
		"hash": "9e1dd68c8bbb29bcfb5eb30861a832bf2c19a79a83af45da84219b4f7e3cf7e5"
	},
	{
		"id": "5636e2e12bcc",
		"ts": "2026-07-27T04:33:45.877Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112499072.78,
		"hash": "5636e2e12bcc9a009a8ffc45115d8b542c0092e57297425c07014c357ce911a0"
	},
	{
		"id": "0aae382acb6b",
		"ts": "2026-07-27T04:33:46.363Z",
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
		"liquidityUsd": 18120885.16,
		"hash": "0aae382acb6b0846b57aaf3f2ca31ca7d23011003493952d6f97049add05273e"
	},
	{
		"id": "62dd9645246c",
		"ts": "2026-07-27T04:33:46.615Z",
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
		"liquidityUsd": 1126232.53,
		"hash": "62dd9645246ce31c25dfc2f9c54e6cfee2cf3c679ad6938bc1d35060b09dd281"
	},
	{
		"id": "72ce887edcac",
		"ts": "2026-07-27T04:33:46.877Z",
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
		"liquidityUsd": 25623014.07,
		"hash": "72ce887edcacd0ce8da5aff710b442e1603fc3583b802f45eaedd969b87d8eb6"
	},
	{
		"id": "ee9907ce8d9b",
		"ts": "2026-07-27T04:33:47.137Z",
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
		"liquidityUsd": 5196921.77,
		"hash": "ee9907ce8d9b1ce7f7f4142a93b20f758c852cf874bc2fe0a9c77dc5e2f9d15a"
	},
	{
		"id": "d86f7a279d38",
		"ts": "2026-07-27T04:33:47.390Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 990931.06,
		"hash": "d86f7a279d38fe36ff6588121cbfc1c04cd1b12f8c08e964bea1037248bc4893"
	},
	{
		"id": "624654c7da63",
		"ts": "2026-07-27T04:33:47.637Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25623014.07,
		"hash": "624654c7da6379764a3050120d0939c5402a50ca01fba48587eca72e849a4165"
	},
	{
		"id": "f8db9d8e1a09",
		"ts": "2026-07-27T04:33:47.907Z",
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
		"liquidityUsd": 2495611.98,
		"hash": "f8db9d8e1a09b0e4421c61bce4b14a6bea5efab84bf5a1100ffce36ffcfda260"
	},
	{
		"id": "31a7fdccc239",
		"ts": "2026-07-27T04:33:48.170Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 533703.06,
		"hash": "31a7fdccc2390736485ddce1d0b5c9cb53af26f4cdcc97777787979ea1e18da0"
	},
	{
		"id": "46e6c653c9ab",
		"ts": "2026-07-27T04:33:48.517Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1818301.59,
		"hash": "46e6c653c9ab6d51407d2846a04f176120d1f682cc1f38cde24176975d79e25f"
	},
	{
		"id": "5f735f360bf1",
		"ts": "2026-07-27T04:33:48.751Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 272690.96,
		"hash": "5f735f360bf14b133fb1e70ec422a239ab0d19d216ca64869698d89ebab081a7"
	},
	{
		"id": "a443c62e9eae",
		"ts": "2026-07-27T04:33:48.984Z",
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
		"liquidityUsd": 1428534.52,
		"hash": "a443c62e9eae1ca350c5840b33baab82495a3e4b47b04a8c02746f7fcd12330a"
	},
	{
		"id": "ea6f32dbf280",
		"ts": "2026-07-27T04:33:49.215Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10513596.55,
		"hash": "ea6f32dbf280890f71e598449a10373b072f66c7fb302dba301fb8dde05c8c90"
	},
	{
		"id": "5370ae652715",
		"ts": "2026-07-27T04:33:49.448Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5924984.24,
		"hash": "5370ae652715075d3aa4f1dc764cadf74c325465652e60214a0297234ac50dc4"
	},
	{
		"id": "d7ba886aaba6",
		"ts": "2026-07-27T04:33:49.680Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4779246.52,
		"hash": "d7ba886aaba6911fde264c372a54aac7615b2afb859e51eead624787cffb82b7"
	},
	{
		"id": "959c8a8a81e5",
		"ts": "2026-07-27T04:33:49.918Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 368463.94,
		"hash": "959c8a8a81e5d60c4660fa97aac7009c10105935d97a30d68c14e960f66bf43d"
	},
	{
		"id": "9eb404fc7472",
		"ts": "2026-07-27T04:33:50.158Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2071475.86,
		"hash": "9eb404fc7472bdf63b0da8d157243ac30084286b5ec56fb96f8480c1df720e98"
	},
	{
		"id": "792899327972",
		"ts": "2026-07-27T00:02:09.914Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112439088.62,
		"hash": "792899327972e65df256a5456dab766b904f911f248a17f39edb7ec3e6e3ff72"
	},
	{
		"id": "95b293d8a70b",
		"ts": "2026-07-27T00:02:10.255Z",
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
		"liquidityUsd": 17752320.58,
		"hash": "95b293d8a70b7f635269450598a7dae2eb1449a251bddd6a02822c7899de7715"
	},
	{
		"id": "ed27adacd637",
		"ts": "2026-07-27T00:02:10.451Z",
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
		"liquidityUsd": 1119498.5,
		"hash": "ed27adacd6374242c0371f72fd4d195be181ff8ea287e7ea613812d65d555e18"
	},
	{
		"id": "3ada7c85ddf2",
		"ts": "2026-07-27T00:02:10.646Z",
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
		"liquidityUsd": 25409395.56,
		"hash": "3ada7c85ddf2ddbf01fd12fbe4f4ada4d34831b4ac916a3e9a67e93cb4f4829e"
	},
	{
		"id": "6a34c4a4ad80",
		"ts": "2026-07-27T00:02:10.837Z",
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
		"liquidityUsd": 5184590.32,
		"hash": "6a34c4a4ad80428a45bd2f61db0fc3a22704d51f0b17e3de1ccf01563b5e7129"
	},
	{
		"id": "aa683f5b7e93",
		"ts": "2026-07-27T00:02:11.038Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 994223.32,
		"hash": "aa683f5b7e9340e43961e8888b5005879543a42caa9c32d1a13a160bed73bf5f"
	},
	{
		"id": "73c0162ac728",
		"ts": "2026-07-27T00:02:11.241Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25409395.56,
		"hash": "73c0162ac728aee48756f6b1ebe6ebe17042fea4e0964472f032e850808df3da"
	},
	{
		"id": "15652d99d30c",
		"ts": "2026-07-27T00:02:11.452Z",
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
		"liquidityUsd": 2481387.6,
		"hash": "15652d99d30ce153fce5c1be2fd3208e8c6b5a9f1f0eab506bd6ff182cc46f26"
	},
	{
		"id": "840bcdfb2646",
		"ts": "2026-07-27T00:02:11.644Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1846547.3,
		"hash": "840bcdfb2646149364f04020571ca22ec448cba638cd42a0974aa3de4f2fd24f"
	},
	{
		"id": "bd20d711022f",
		"ts": "2026-07-27T00:02:11.850Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 447924.25,
		"hash": "bd20d711022fd5af781d5ad178b8cf75d30cdff1a330fbe0bb82c60ad2ace04a"
	},
	{
		"id": "214f45f7d9fc",
		"ts": "2026-07-27T00:02:12.036Z",
		"symbol": "OpenAI",
		"token": "0x1cB0f168A71F5319EaAE5E1765B4C76cfaD57b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 3180469.42,
		"hash": "214f45f7d9fc175fd084ce4ae34cee51041ca2f488ac9ab7d7de4b625491a1c3"
	},
	{
		"id": "7a412bacb4da",
		"ts": "2026-07-27T00:02:12.239Z",
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
		"liquidityUsd": 1381107.38,
		"hash": "7a412bacb4da2bebebffffdeb2c832b9170a8a53f1cfb2aa83c565f8cd513491"
	},
	{
		"id": "7cdb019786d2",
		"ts": "2026-07-27T00:02:12.425Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 274457.97,
		"hash": "7cdb019786d29d19d7f8f942f65edf94da2a9c4fa85c7ac572004250054a4483"
	},
	{
		"id": "300d8cbab4b3",
		"ts": "2026-07-27T00:02:12.628Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1116989.37,
		"hash": "300d8cbab4b3a549fa0dca4a5372cb795106c5db7ee70cda1329889cd0fec1f6"
	},
	{
		"id": "b2ff16476b28",
		"ts": "2026-07-27T00:02:12.835Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10468155.9,
		"hash": "b2ff16476b28c37c98f1cec3c9be2b45ae0186b3b82975647a8760c087bfd7b2"
	},
	{
		"id": "88c4794c3a0a",
		"ts": "2026-07-27T00:02:13.034Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4775525.5,
		"hash": "88c4794c3a0a234065b8fa38ae47d1ff5f2a458f8c735c3d381d94c0578a6242"
	},
	{
		"id": "5e2739789863",
		"ts": "2026-07-27T00:02:13.235Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6112933.44,
		"hash": "5e273978986379ef4f9a0b0e3434af692fbbb3407cd70b16a532a2cc636a8eb0"
	},
	{
		"id": "e11ab593576e",
		"ts": "2026-07-26T22:57:22.207Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112350520.83,
		"hash": "e11ab593576e72d046e0dfe825dc92d0bcdf27508188ab88271ab4b8ed353aab"
	},
	{
		"id": "816e06f97c8d",
		"ts": "2026-07-26T22:57:22.648Z",
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
		"liquidityUsd": 15102207.37,
		"hash": "816e06f97c8d3886ebc5912c47613b83e38bd9d06456b73e1eaefa3159ec9d65"
	},
	{
		"id": "b48461066ead",
		"ts": "2026-07-26T22:57:23.092Z",
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
		"liquidityUsd": 1120390.68,
		"hash": "b48461066ead66e3dcd6402eb233abc33d95ffad031d2d9cd7c9fbd1b52f4afb"
	},
	{
		"id": "444cef4a5a46",
		"ts": "2026-07-26T22:57:23.342Z",
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
		"liquidityUsd": 25243814.22,
		"hash": "444cef4a5a46610b7533c1a765663e6c4369da3d6518c87ead597c5b52dd2e94"
	},
	{
		"id": "848a822dfa52",
		"ts": "2026-07-26T22:57:23.585Z",
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
		"liquidityUsd": 5162788.43,
		"hash": "848a822dfa5238a4cc6629dca1ea5c73f0945c5cdebed2702989c71868a78fe1"
	},
	{
		"id": "bab997bd51a3",
		"ts": "2026-07-26T22:57:23.825Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 982020.84,
		"hash": "bab997bd51a3cee99db6a050627813f82a9d3161afe10655af19800c331aca5e"
	},
	{
		"id": "aee672bd4d40",
		"ts": "2026-07-26T22:57:24.087Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25243814.22,
		"hash": "aee672bd4d40a1ad7177b3e9746f02a2335e66d92dcd19929ed6e8163d63da1c"
	},
	{
		"id": "ee1d2c2fce34",
		"ts": "2026-07-26T22:57:24.327Z",
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
		"liquidityUsd": 2468142.6,
		"hash": "ee1d2c2fce341b43dc7e1631a68410bc3841757486748ce0e1da7d72e4876cc3"
	},
	{
		"id": "85ea81bad1ed",
		"ts": "2026-07-26T22:57:24.571Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1824905.85,
		"hash": "85ea81bad1ed7c6081bc183ad9e64075c4cbbf012edd64444c99bf8257a70c15"
	},
	{
		"id": "25f7d09cc9b9",
		"ts": "2026-07-26T22:57:24.815Z",
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
		"liquidityUsd": 1381107.38,
		"hash": "25f7d09cc9b915f1289955044ef1a1bf86070d8c92c433024ed38611907b6050"
	},
	{
		"id": "51caede181cc",
		"ts": "2026-07-26T22:57:25.042Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 433673.3,
		"hash": "51caede181cc243c0a5a48c426aaabbfae12ee04776e1695f5360c1ec153a57a"
	},
	{
		"id": "bc2143467979",
		"ts": "2026-07-26T22:57:25.266Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 261854.91,
		"hash": "bc2143467979116f7987d6bc5b2d1f35d901db9483aaf83901ed449ed0478826"
	},
	{
		"id": "0be7c146a1f2",
		"ts": "2026-07-26T22:57:25.490Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1113022.7,
		"hash": "0be7c146a1f25336069a08f769578a539d94e849d5e1ab250a9bcfbdf015c1d3"
	},
	{
		"id": "254d4c973033",
		"ts": "2026-07-26T22:57:25.716Z",
		"symbol": "OpenAI",
		"token": "0x1cB0f168A71F5319EaAE5E1765B4C76cfaD57b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 3182378.66,
		"hash": "254d4c97303314c04b47773dff3aa9ae0ba3d527c2d8cb48eec4ad15ae06a6ee"
	},
	{
		"id": "90946c21304d",
		"ts": "2026-07-26T22:57:25.941Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10475493.94,
		"hash": "90946c21304daf960700b25186b489968d80261b6aabc72452956a6714872fa6"
	},
	{
		"id": "d87cc0e84654",
		"ts": "2026-07-26T22:57:26.302Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6107545.34,
		"hash": "d87cc0e84654f5ff1e8f42195ea469f27cba93c934e4e8f937184985f81f9667"
	},
	{
		"id": "636ac8913696",
		"ts": "2026-07-26T22:57:26.553Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4761671.92,
		"hash": "636ac8913696e3dbc56afa37bb7fc39b16a8e6b4b1f75f9fb0d3b9ab1d7e678d"
	},
	{
		"id": "3f41470308ab",
		"ts": "2026-07-26T21:55:53.032Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111826417.82,
		"hash": "3f41470308abbc3f09c2e39c84a7e5312d42a4a890f3d6f516bf40697029f386"
	},
	{
		"id": "967bacf46565",
		"ts": "2026-07-26T21:55:53.379Z",
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
		"liquidityUsd": 15958692.82,
		"hash": "967bacf46565b57c51389760d9afe88d2443bad2503dc548034b26d9a23d992f"
	},
	{
		"id": "7865ce56fc14",
		"ts": "2026-07-26T21:55:53.577Z",
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
		"liquidityUsd": 1109948.68,
		"hash": "7865ce56fc14b514b222b80decaef4b44524adff10c6ece40ee9b667ac9d7581"
	},
	{
		"id": "2e83dd1d90e5",
		"ts": "2026-07-26T21:55:53.779Z",
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
		"liquidityUsd": 24978438.13,
		"hash": "2e83dd1d90e577796041abe06c523ecfcc6445c4837e053a2ca06751f4fbcf68"
	},
	{
		"id": "e460c286a3c1",
		"ts": "2026-07-26T21:55:53.980Z",
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
		"liquidityUsd": 5069838.83,
		"hash": "e460c286a3c16db3b2d13c9a5d93384047f2f3766ff901479aab74024e03254b"
	},
	{
		"id": "105bdbd104fc",
		"ts": "2026-07-26T21:55:54.198Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 980491.45,
		"hash": "105bdbd104fc6989caa048040164aef989899fffe62a3d13f3cc31c9e33c000e"
	},
	{
		"id": "400141cda48a",
		"ts": "2026-07-26T21:55:54.391Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24978438.13,
		"hash": "400141cda48aba177d888568df90634c6301d90737e665553fed71e389e35d89"
	},
	{
		"id": "d0b3748d83e7",
		"ts": "2026-07-26T21:55:54.599Z",
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
		"liquidityUsd": 2445649.87,
		"hash": "d0b3748d83e74f05f90f193aaf30f8c61eaea0a89ad8c4358435d38d28a9e389"
	},
	{
		"id": "879cab1bfdd6",
		"ts": "2026-07-26T21:55:54.793Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1803950.01,
		"hash": "879cab1bfdd6d72bc2b4dda522086f2da7217a78eda456b3b1e31a409d4bfbcf"
	},
	{
		"id": "514acef00c21",
		"ts": "2026-07-26T21:55:55.067Z",
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
		"liquidityUsd": 1369869.33,
		"hash": "514acef00c21b6723fd4c40375ea128b287b130ae03384dd272bedcd96b2b63d"
	},
	{
		"id": "a6cae39abda3",
		"ts": "2026-07-26T21:55:55.274Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 448449.61,
		"hash": "a6cae39abda38ab29efbcc662e7fcdf4ffc949b31080a720854f3845bcef4474"
	},
	{
		"id": "6e3daefa851d",
		"ts": "2026-07-26T21:55:55.464Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 261486.36,
		"hash": "6e3daefa851d1013f3c8833e74ab11a188b6e5dbf83120e7920ec05a41ec84f0"
	},
	{
		"id": "7cf3f87de1ea",
		"ts": "2026-07-26T21:55:55.664Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10419503.74,
		"hash": "7cf3f87de1eabc5de0167a08abd9c1fc64b58a08a1402441ac0cffb169e7300f"
	},
	{
		"id": "5ad27ce3f965",
		"ts": "2026-07-26T21:55:55.872Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1072311.57,
		"hash": "5ad27ce3f965ecf1caffcb1068e4608781c3da6ba2936393d5c7b49d94d56964"
	},
	{
		"id": "e5c30025b47b",
		"ts": "2026-07-26T21:55:56.066Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4709250.64,
		"hash": "e5c30025b47bd91c9deff7548dce74175644747fee5423ff656228577992fdbb"
	},
	{
		"id": "047da0b110e8",
		"ts": "2026-07-26T21:55:56.271Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6027536.38,
		"hash": "047da0b110e88138418d8ad3b2ffbd393d44333fd6a51e6a1d7a852548b9c6a2"
	},
	{
		"id": "8e461c50f3b3",
		"ts": "2026-07-26T21:55:56.451Z",
		"symbol": "OpenAI",
		"token": "0x1cB0f168A71F5319EaAE5E1765B4C76cfaD57b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 3182378.58,
		"hash": "8e461c50f3b37cf3ee91ea3a1027e57c307ecacae9549b6b580635a1f9678be4"
	},
	{
		"id": "ae3b7a816e2a",
		"ts": "2026-07-26T20:54:13.577Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111607754.59,
		"hash": "ae3b7a816e2ab1de0f545914c69e8829309640d00d413d93b4c1c089e624249f"
	},
	{
		"id": "0be9d79c535e",
		"ts": "2026-07-26T20:54:13.836Z",
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
		"liquidityUsd": 16579867.91,
		"hash": "0be9d79c535e93d011881edd03d10ee935b66a0df64761f99178f85cb689b115"
	},
	{
		"id": "fc1183e6a5c2",
		"ts": "2026-07-26T20:54:14.076Z",
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
		"liquidityUsd": 1100046.62,
		"hash": "fc1183e6a5c21d292bb7b9eb7b61641ca1b2578c6ebb4e992a2e30e54d186316"
	},
	{
		"id": "2fd086d304a6",
		"ts": "2026-07-26T20:54:14.316Z",
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
		"liquidityUsd": 24968916.5,
		"hash": "2fd086d304a6083bdb1bb7aee484021df31b133dbeefaa79c5d4654d17ca71e7"
	},
	{
		"id": "8b3044b84980",
		"ts": "2026-07-26T20:54:14.554Z",
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
		"liquidityUsd": 5063068.77,
		"hash": "8b3044b8498052bd9c080e4df5276521ca3d8fb202a818855b6a542c7098079f"
	},
	{
		"id": "b2d683005860",
		"ts": "2026-07-26T20:54:14.799Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 977934.14,
		"hash": "b2d68300586014e72b16b71bb213b04c7ae06676e703e55aea8d48d898a54ba0"
	},
	{
		"id": "bd4a246a1815",
		"ts": "2026-07-26T20:54:15.058Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24968916.5,
		"hash": "bd4a246a1815a5c22f38f4ff14029b9bb737519445eb98b8458e9827cd05856f"
	},
	{
		"id": "0d03a965b557",
		"ts": "2026-07-26T20:54:15.327Z",
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
		"liquidityUsd": 2423299.26,
		"hash": "0d03a965b5572887ab89b111fef59d6bfd7b0c9098d25622df55c89a3ead613d"
	},
	{
		"id": "4a04f7496a45",
		"ts": "2026-07-26T20:54:15.567Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1802771.55,
		"hash": "4a04f7496a450557c3416f1d5d2592b3865d310ce251c7ceeee687a1800b1116"
	},
	{
		"id": "420d51ce6300",
		"ts": "2026-07-26T20:54:15.806Z",
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
		"liquidityUsd": 1364407.09,
		"hash": "420d51ce63003038433d0cd4a50ac6f3ada1ef1d9fbc81a685c545dbf960dd79"
	},
	{
		"id": "9d8fd94de3f4",
		"ts": "2026-07-26T20:54:16.031Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10330531.37,
		"hash": "9d8fd94de3f4b3cf181cfe4f4e8bd2b2abcd650418ca4364d2b742e854cd90f0"
	},
	{
		"id": "786d4043b2dd",
		"ts": "2026-07-26T20:54:16.258Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 265786.26,
		"hash": "786d4043b2ddf0be177a078ddfcc97fe3facc202bc01b57904e49b58020a326d"
	},
	{
		"id": "2211f6333d1e",
		"ts": "2026-07-26T20:54:16.480Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1063281.49,
		"hash": "2211f6333d1e6de9c39a828917279b05a3a1164a298190e2fe846b65901bc980"
	},
	{
		"id": "202c4d00b002",
		"ts": "2026-07-26T20:54:16.703Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6009274.91,
		"hash": "202c4d00b002680f6db880e22b0051fed646190f2920685c144e04136c09ee6b"
	},
	{
		"id": "8c54765f5d2c",
		"ts": "2026-07-26T20:54:16.928Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4687653.26,
		"hash": "8c54765f5d2c716a611898f598c160f301f06582441578fd0abb2d73799b5b13"
	},
	{
		"id": "7a5d4b2d5154",
		"ts": "2026-07-26T20:54:17.151Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 850452.74,
		"hash": "7a5d4b2d51548e55c0d93865399f103a805716c4a43c460f6ff471addd12577e"
	},
	{
		"id": "77c591762c0b",
		"ts": "2026-07-26T19:21:43.930Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111574657.3,
		"hash": "77c591762c0b89e281a81bdd8393bcfb07bb498250645a765880713e71b1e351"
	},
	{
		"id": "5d9c0b004938",
		"ts": "2026-07-26T19:21:44.593Z",
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
		"liquidityUsd": 16636270.25,
		"hash": "5d9c0b004938ad69ec8717b41cbc4c54363e7aa765e599e9837ef535a647e30e"
	},
	{
		"id": "f6e551107161",
		"ts": "2026-07-26T19:21:44.846Z",
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
		"liquidityUsd": 1099893.71,
		"hash": "f6e551107161d69df2846a16b2bc74f875f9b2b2952f078239d6384e5c63fb78"
	},
	{
		"id": "13f57856369d",
		"ts": "2026-07-26T19:21:45.083Z",
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
		"liquidityUsd": 24964510.5,
		"hash": "13f57856369d80e47d04c01ad6dfa3e45e1f06ec4cfbb47fb771474fdcfdca64"
	},
	{
		"id": "5818037225c7",
		"ts": "2026-07-26T19:21:45.323Z",
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
		"liquidityUsd": 5070565.73,
		"hash": "5818037225c7b259498ca28652209aee7e2ddb9e0e7b2346381e9186ce0e5bff"
	},
	{
		"id": "b2eccafe7bdf",
		"ts": "2026-07-26T19:21:45.573Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 977986.95,
		"hash": "b2eccafe7bdf2c3bcf8d424bfd5a53aba88e4b60d7f93c1ace29925a7f2d0c05"
	},
	{
		"id": "094024a6a815",
		"ts": "2026-07-26T19:21:45.814Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24964510.5,
		"hash": "094024a6a815b0bb134262745a2cd5855b8867df1b5f2c124e04613ae0d52844"
	},
	{
		"id": "c801be3eeef2",
		"ts": "2026-07-26T19:21:46.068Z",
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
		"liquidityUsd": 2422603.19,
		"hash": "c801be3eeef2ee7ee741603a07e1730221830b91905ab22b3873888ed46d631c"
	},
	{
		"id": "63d7acb772d6",
		"ts": "2026-07-26T19:21:46.315Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1805013.25,
		"hash": "63d7acb772d6bab0a737659e003c0ef4ab619c7164a23ceca9d4445d882b111c"
	},
	{
		"id": "b72513080ae3",
		"ts": "2026-07-26T19:21:46.552Z",
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
		"liquidityUsd": 1365950.69,
		"hash": "b72513080ae342cb408ce5d8c41b434f9b1ba83d288f47d773a76b4d5f1139ca"
	},
	{
		"id": "9e192ff4721f",
		"ts": "2026-07-26T19:21:46.776Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10280555.19,
		"hash": "9e192ff4721f258d9b81614c1fe09137d7c61c5be1995953cb896a45297f69eb"
	},
	{
		"id": "3a5b0947c510",
		"ts": "2026-07-26T19:21:47.011Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1066902.88,
		"hash": "3a5b0947c51058e7370bf88619f2e850eaf046d52d444b91a1f6a6cf2865aa90"
	},
	{
		"id": "cd34ecf5a868",
		"ts": "2026-07-26T19:21:47.229Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 261118.79,
		"hash": "cd34ecf5a86825bc36e38d614a210018a4c7c764fe0b32699a2912669da7dc41"
	},
	{
		"id": "99dcc3032003",
		"ts": "2026-07-26T19:21:47.452Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4697942.53,
		"hash": "99dcc30320039b144fad4fd7c3285fc1e0978e9873daec9e82095a963d5cee0b"
	},
	{
		"id": "339ad921a193",
		"ts": "2026-07-26T19:21:47.686Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6010406.98,
		"hash": "339ad921a193261c9ab75d32a90bd6d221bef3494f09f600a767b134b9603a89"
	},
	{
		"id": "75cdfac7154f",
		"ts": "2026-07-26T19:21:47.902Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 852460.83,
		"hash": "75cdfac7154f33ad6448cf2f4ddf111da3439a59f96aac3607822b4f4dcd7147"
	},
	{
		"id": "4f3e207e2874",
		"ts": "2026-07-26T17:59:23.566Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111488713.04,
		"hash": "4f3e207e287434feab91902f7ef685ae964101145b622947d0e61a88f6fa539f"
	},
	{
		"id": "002a2a2d52c0",
		"ts": "2026-07-26T17:59:23.918Z",
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
		"liquidityUsd": 16855486.83,
		"hash": "002a2a2d52c065c08e25f4c5cc4a94b924e7852539886f031a987ccefce69a4f"
	},
	{
		"id": "427f647ff65b",
		"ts": "2026-07-26T17:59:24.127Z",
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
		"liquidityUsd": 1100468.24,
		"hash": "427f647ff65b00eb435eee318d262c4ebbdbaaad4d86a0e691d1993ac69f51bf"
	}
]
