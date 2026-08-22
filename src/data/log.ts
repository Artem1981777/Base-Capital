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
	"updatedAt": "2026-08-22T09:22:50.266Z",
	"tokensScored": 13431,
	"verdictsIssued": 13431,
	"safe": 11579,
	"risky": 953,
	"likelyRug": 899,
	"ticks": 784
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "cf4e2149d644",
		"ts": "2026-08-22T09:22:45.004Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109760597.33,
		"hash": "cf4e2149d6443142029c9fe503ca975bc49e3e206741064ca0a303e80c3be8de"
	},
	{
		"id": "caa2b82ddf7e",
		"ts": "2026-08-22T09:22:45.245Z",
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
		"liquidityUsd": 17361691.69,
		"hash": "caa2b82ddf7e987d5450dc3fc571a023c33bc1732bef2b4caa8106d48f9c2cf4"
	},
	{
		"id": "8306fa6ec7d0",
		"ts": "2026-08-22T09:22:45.480Z",
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
		"liquidityUsd": 895754.26,
		"hash": "8306fa6ec7d0d8724e54bd7662250facef3d7305849177a03a1b56744b7f5b57"
	},
	{
		"id": "90092485777d",
		"ts": "2026-08-22T09:22:45.775Z",
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
		"liquidityUsd": 28280873.57,
		"hash": "90092485777df99c3c4e4b0afa8165bb2f9f4cd6a9d7cefdf4f00daa619fda81"
	},
	{
		"id": "bc9a9b0ce123",
		"ts": "2026-08-22T09:22:46.010Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "bc9a9b0ce123b8884009b5c753b2d83a7b5f2ab81d1118962e6846df18e45d9a"
	},
	{
		"id": "2895d306667c",
		"ts": "2026-08-22T09:22:46.244Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1184767.98,
		"hash": "2895d306667cdf7e9785e5a8ea136bbd00fb421224836fba8d73cf2b6af18060"
	},
	{
		"id": "ef610615f40b",
		"ts": "2026-08-22T09:22:46.476Z",
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
		"liquidityUsd": 380004.42,
		"hash": "ef610615f40ba4218ca7d52c61d3786c1e474e9629e0c2e0f0641eef276e6b4d"
	},
	{
		"id": "b7683ec05c5a",
		"ts": "2026-08-22T09:22:46.711Z",
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
		"liquidityUsd": 3587708.76,
		"hash": "b7683ec05c5a1ec25d29598f92978769adb2fa6df2ce25b1918e5bfafb4c3ea3"
	},
	{
		"id": "dd7161ed5056",
		"ts": "2026-08-22T09:22:46.943Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 824227.14,
		"hash": "dd7161ed5056e2e68e43f2043a5891315a8aed84f21e37607ef6a7db64f9d3b4"
	},
	{
		"id": "79b71ea439bf",
		"ts": "2026-08-22T09:22:47.524Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1282571.49,
		"hash": "79b71ea439bff965c1bc1a01de624c74cde64fe88b29e90dec6be8e28eb571e5"
	},
	{
		"id": "e67c0cf699bd",
		"ts": "2026-08-22T09:22:47.738Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1887309.14,
		"hash": "e67c0cf699bd1aa49e777a584f39271de8c9b7a110f679e9eb827f0a6d0c35d9"
	},
	{
		"id": "2e6922ff54d1",
		"ts": "2026-08-22T09:22:47.952Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 77055.85,
		"hash": "2e6922ff54d159bc2579f5f427e875849da9181451218a8411ce23adb7abbd25"
	},
	{
		"id": "27e0023e792c",
		"ts": "2026-08-22T09:22:48.169Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11732518.81,
		"hash": "27e0023e792c0d8a7257f0d5c3cccb0c99543c3c9680133c05a77b029334f2cd"
	},
	{
		"id": "3c25da6d03b6",
		"ts": "2026-08-22T09:22:48.383Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 519114.36,
		"hash": "3c25da6d03b6e0a8d961c0b79a3771ba2ae089ce9c61fffdfe447f36d154cef9"
	},
	{
		"id": "baf53dd60cc2",
		"ts": "2026-08-22T09:22:48.673Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3267529.57,
		"hash": "baf53dd60cc2928a1440b18fd31418d92f6c469a3709297a7f70f328d769121b"
	},
	{
		"id": "7f459f4d43c5",
		"ts": "2026-08-22T09:22:49.467Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 114933.39,
		"hash": "7f459f4d43c50152f3e905b8bc905f7c5d59343685f60093b054120a341c5e5a"
	},
	{
		"id": "8c8ee3ac6155",
		"ts": "2026-08-22T09:22:49.681Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 656210.32,
		"hash": "8c8ee3ac6155da484e4d702fe35c83a1198ad2d5fcd9108dbab8da7206d6e9dc"
	},
	{
		"id": "a40d8c36ed40",
		"ts": "2026-08-22T09:22:49.898Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 537770.71,
		"hash": "a40d8c36ed40f6fe1349c2cc4b1629d4f26bf3f91f44ffde1d15c8fb37821bc4"
	},
	{
		"id": "9e6a513d71b9",
		"ts": "2026-08-22T09:22:50.266Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 754504.92,
		"hash": "9e6a513d71b9ac3b4ff7dc9e3e9e023791e4d2688ca75edd5486ed8bb914a20f"
	},
	{
		"id": "a00451d2c06a",
		"ts": "2026-08-22T08:24:03.600Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109883411.15,
		"hash": "a00451d2c06a90b3d36832fb52b1cd657e74b9484114a747a6ba92a6e13c34ef"
	},
	{
		"id": "5591d6f5c6cd",
		"ts": "2026-08-22T08:24:04.203Z",
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
		"liquidityUsd": 18119191.49,
		"hash": "5591d6f5c6cdb3449f1fdf99eeade91ef06ec58017fa32f44a15e5734928fc36"
	},
	{
		"id": "ad67e5f9d893",
		"ts": "2026-08-22T08:24:04.624Z",
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
		"liquidityUsd": 902392.76,
		"hash": "ad67e5f9d89399fdc31e348dda9bf9da3e023509a447d25610b54b99d7420b3e"
	},
	{
		"id": "6c05a3cb21ef",
		"ts": "2026-08-22T08:24:05.146Z",
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
		"liquidityUsd": 27890024.73,
		"hash": "6c05a3cb21ef5b18f1dadfe7336ea37473a76115b12764756f6544d7ad52bf89"
	},
	{
		"id": "a042d3d4d040",
		"ts": "2026-08-22T08:24:05.605Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "a042d3d4d0405b8c546756b005d1578deda0b7d9fee18d352c0ea8a9325f8cc3"
	},
	{
		"id": "1c5aeb93ede6",
		"ts": "2026-08-22T08:24:05.833Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1194174.24,
		"hash": "1c5aeb93ede61788b92b3eeb889c0cad4e07f6c922ab8a4fdb9553c27110f663"
	},
	{
		"id": "b6c876c0a8af",
		"ts": "2026-08-22T08:24:06.100Z",
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
		"liquidityUsd": 379414.01,
		"hash": "b6c876c0a8afbbbe1f4140488fdf1e0146a3253ef3d8e7b7079aa5ea02b1f80a"
	},
	{
		"id": "1c1f110595e4",
		"ts": "2026-08-22T08:24:06.340Z",
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
		"liquidityUsd": 3599847.12,
		"hash": "1c1f110595e4ed19ccd78922106d02674d662e094a78ea3cd6fc5e9c3df70343"
	},
	{
		"id": "0d0a94bb3f11",
		"ts": "2026-08-22T08:24:06.694Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1238225.56,
		"hash": "0d0a94bb3f1152facb2d0756f1c2867a7910437474a25a3569c49cafce24621f"
	},
	{
		"id": "b17ddafb9b2e",
		"ts": "2026-08-22T08:24:07.317Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 845239.73,
		"hash": "b17ddafb9b2e92343151e6f8c069636e926a0e36891a5b3607c75b719a355909"
	},
	{
		"id": "0193b7cec0f6",
		"ts": "2026-08-22T08:24:07.532Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1891779.25,
		"hash": "0193b7cec0f6465e639bad5a13eaac7bb960a5fe96fbb7e17bb756963f4e8118"
	},
	{
		"id": "9db5926e6270",
		"ts": "2026-08-22T08:24:07.747Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11739340.51,
		"hash": "9db5926e6270150e7252607362e402c6d9d10863a736a926ade8e78ef296e82d"
	},
	{
		"id": "d0f9368a0e1a",
		"ts": "2026-08-22T08:24:07.960Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 77596.93,
		"hash": "d0f9368a0e1a59f184d61ea9d87c3490e5b633c56e6fb748d958b5be2e2421dc"
	},
	{
		"id": "07a1c0e4eda8",
		"ts": "2026-08-22T08:24:08.175Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 529134.34,
		"hash": "07a1c0e4eda86328a4ecf8945bc8e95390f46d2b509cfc4cfe711673f9612f3e"
	},
	{
		"id": "1231aec1e605",
		"ts": "2026-08-22T08:24:08.390Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3314608.02,
		"hash": "1231aec1e6058809fe1c1b5ea95342cb3d839d30468ef38a3534fbf3ac834dea"
	},
	{
		"id": "e218717743fe",
		"ts": "2026-08-22T08:24:08.737Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 120479.02,
		"hash": "e218717743feb0f05aafd958afde8e6f3d21f757df4a4e3ffca8403aaea35ac4"
	},
	{
		"id": "f881f41e754f",
		"ts": "2026-08-22T08:24:08.952Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 655694.77,
		"hash": "f881f41e754fdf387e8cded6dc14a8e9f0a3db8f9761ef0989cb1fe2eb86cedc"
	},
	{
		"id": "8b595261c046",
		"ts": "2026-08-22T08:24:09.166Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 550445.35,
		"hash": "8b595261c0468c469032f21a16bd39ce089971a5a949c2feec30d510a746467a"
	},
	{
		"id": "64c0fef2c5db",
		"ts": "2026-08-22T08:24:09.381Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 746450.66,
		"hash": "64c0fef2c5db43dd452406f773cb8a5ad21205bdac363d9e36d0495cb48dbb0d"
	},
	{
		"id": "04c186b735f0",
		"ts": "2026-08-22T07:27:59.907Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109811050.93,
		"hash": "04c186b735f02adc50a3f2ec938857b43049e17a647b2c59efb3d0334a8da838"
	},
	{
		"id": "5615e36135d5",
		"ts": "2026-08-22T07:28:00.339Z",
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
		"liquidityUsd": 16967081.15,
		"hash": "5615e36135d5fd194cf8fd50525deae5ce79f0fcdcb9e9f5cc84745ab2d30fc0"
	},
	{
		"id": "f29d65cff2cc",
		"ts": "2026-08-22T07:28:00.664Z",
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
		"liquidityUsd": 900686.69,
		"hash": "f29d65cff2ccd060e563936d92bd7c845d25c6a6fedca95d51039c0bb479f511"
	},
	{
		"id": "d112c23eb1e1",
		"ts": "2026-08-22T07:28:00.942Z",
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
		"liquidityUsd": 27846961.71,
		"hash": "d112c23eb1e18f330d9723c32c8ff4de96c696a6406f1f8a0d934dc452a2a9d9"
	},
	{
		"id": "ac2c3ce649b7",
		"ts": "2026-08-22T07:28:01.339Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "ac2c3ce649b76e1de5f3919412b93d9efac7680eab0a3df63b87ac7e77e0b232"
	},
	{
		"id": "56c6f56337ea",
		"ts": "2026-08-22T07:28:01.569Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1195547.42,
		"hash": "56c6f56337ea8008d9c94ad671366c8e7dd8498fbe4a0aa527562a869e7451c2"
	},
	{
		"id": "b7d401f2ea72",
		"ts": "2026-08-22T07:28:01.798Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152757.73,
		"hash": "b7d401f2ea72d87e0dfdd2ee79c8ab5b648fb761598e377a6027add90a416b9c"
	},
	{
		"id": "926a69f21c24",
		"ts": "2026-08-22T07:28:02.256Z",
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
		"liquidityUsd": 3606203.31,
		"hash": "926a69f21c249689f558821ef13eea1c291d4b833db5b5b262f0f660712551af"
	},
	{
		"id": "4fac4c2ef83e",
		"ts": "2026-08-22T07:28:02.596Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1243756.41,
		"hash": "4fac4c2ef83eb21fab69feef549be4dcd96a000dbbab233edf8783f8f3760ba2"
	},
	{
		"id": "8fb521d34a8b",
		"ts": "2026-08-22T07:28:02.863Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 838255.34,
		"hash": "8fb521d34a8b6ed1128756ad6fbef2adffded73c4f1bbc6f9d1f2fd41278c86e"
	},
	{
		"id": "c1470277ed8a",
		"ts": "2026-08-22T07:28:03.293Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1903057.23,
		"hash": "c1470277ed8a3c37ceef9b54958437d676f0a54680be3d1f3197c05a33c0d216"
	},
	{
		"id": "873f0ba06aa3",
		"ts": "2026-08-22T07:28:03.609Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11638968.54,
		"hash": "873f0ba06aa3bc731e4c435fa945c7ecc35a62008c4835d26cdc07f9c8c6dd7b"
	},
	{
		"id": "fc81d5fc861d",
		"ts": "2026-08-22T07:28:03.839Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 77553.64,
		"hash": "fc81d5fc861d10471e1ad65e8c6b73394c594ea75f92ae31e598cc3092bca1d9"
	},
	{
		"id": "687852cd406c",
		"ts": "2026-08-22T07:28:04.056Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3352966.17,
		"hash": "687852cd406c7b3d7827780141e779d6c3210424ba4ea26e44702b8b136f02dc"
	},
	{
		"id": "cf0814e803ba",
		"ts": "2026-08-22T07:28:04.270Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 536574.33,
		"hash": "cf0814e803ba1abdd362161330f44a9a05cee7eaee61a046fc274877d3e7d8bd"
	},
	{
		"id": "24061644c9de",
		"ts": "2026-08-22T07:28:04.488Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 371242.72,
		"hash": "24061644c9de7c289c56c259c0608240a7160b24285431d8eb15e751a85a96d6"
	},
	{
		"id": "61c78d4832c6",
		"ts": "2026-08-22T07:28:04.703Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 549735.51,
		"hash": "61c78d4832c684a9727fdc122cb50488e13168e35c808ae3831203024096a1ca"
	},
	{
		"id": "711229277055",
		"ts": "2026-08-22T07:28:04.919Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 660427.03,
		"hash": "7112292770556a0fbebc6a24fc0fb6e9597826fc74a8c29febc5e2fcce152381"
	},
	{
		"id": "f4cdcd884e39",
		"ts": "2026-08-22T07:28:05.747Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 738202.61,
		"hash": "f4cdcd884e394a5c30f8b2c1b0d086503989cc7213efcba4da80c5956804b0fe"
	},
	{
		"id": "99ff1f7184bc",
		"ts": "2026-08-22T06:32:41.842Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109743954.11,
		"hash": "99ff1f7184bc8e092e8c1f2c2e8501216630026687e7cb0adbb146200d70542c"
	},
	{
		"id": "933fbdb3dd8b",
		"ts": "2026-08-22T06:32:42.088Z",
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
		"liquidityUsd": 13565180.43,
		"hash": "933fbdb3dd8b2588346c2ed13b81ab749cf689b98a84778b248da7a09c7e8981"
	},
	{
		"id": "f4f612b10c25",
		"ts": "2026-08-22T06:32:42.353Z",
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
		"liquidityUsd": 902282.56,
		"hash": "f4f612b10c25ad02dfc67c6553bd9a327fbb89f52148a1c3879c44cfda217992"
	},
	{
		"id": "b151c8a6cdbe",
		"ts": "2026-08-22T06:32:42.590Z",
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
		"liquidityUsd": 27797285.27,
		"hash": "b151c8a6cdbeb0ea90f64665efdc93eaee4ba074422c19b7ccf7ef9fcf488af8"
	},
	{
		"id": "a9e27c57be9b",
		"ts": "2026-08-22T06:32:42.823Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "a9e27c57be9baab547d92e58ece6429f6f16016be501fbebfc1b7d22eb4024cc"
	},
	{
		"id": "f69316fd4bb3",
		"ts": "2026-08-22T06:32:43.085Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1178370.11,
		"hash": "f69316fd4bb3090bccd49ca9cae01480e29327214093d392c075dea010ed451d"
	},
	{
		"id": "c8e861976f5e",
		"ts": "2026-08-22T06:32:43.373Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152755.51,
		"hash": "c8e861976f5ed8909040ff87ef24851edd96eead972366aabca36c4f312b8a6d"
	},
	{
		"id": "01f8333d497d",
		"ts": "2026-08-22T06:32:43.610Z",
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
		"liquidityUsd": 3593499.19,
		"hash": "01f8333d497d848bc56511d40412a0382d4e086fd73cd596e2f480878a9f9364"
	},
	{
		"id": "0fe4f9f14fe1",
		"ts": "2026-08-22T06:32:43.855Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1237995.03,
		"hash": "0fe4f9f14fe1cdb5dafc18fe04b066a3a50115e77af70267cfa5e13313a4d060"
	},
	{
		"id": "f9f004e5e7a8",
		"ts": "2026-08-22T06:32:44.099Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 829346.45,
		"hash": "f9f004e5e7a85f3ee0d6269420bba03796c3e47e0742a757e808d74c8141f327"
	},
	{
		"id": "7ff6fc9752b9",
		"ts": "2026-08-22T06:32:44.324Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1886277.51,
		"hash": "7ff6fc9752b94bb78f774237e5d9650f011ca26688eb7476df4553fb21d57c18"
	},
	{
		"id": "268194449b79",
		"ts": "2026-08-22T06:32:44.540Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11540604.52,
		"hash": "268194449b79a26d3b12bf3bcdc1860743f3268b162d0eae2c8761f462f26b3f"
	},
	{
		"id": "ce78bb814277",
		"ts": "2026-08-22T06:32:44.766Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 87718.07,
		"hash": "ce78bb814277851096fea38672ce08d48d121caba2572473463eb088da1f4b1d"
	},
	{
		"id": "0ae53e733e83",
		"ts": "2026-08-22T06:32:45.054Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 537667.37,
		"hash": "0ae53e733e83147a31eb96ae09834e71d8fb167a0a0b80028fbb2d48c62120d5"
	},
	{
		"id": "b0558c3f6a0b",
		"ts": "2026-08-22T06:32:45.481Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3380993.84,
		"hash": "b0558c3f6a0bb29f4b4d87325eed69740b38f7d6b3ec8b78d6e5c24b8223f6c1"
	},
	{
		"id": "981f527f15da",
		"ts": "2026-08-22T06:32:45.697Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 366881.5,
		"hash": "981f527f15da8087c58f8483d50802aa937f5d8bd9e33266c2f4e764cdb60e5c"
	},
	{
		"id": "cfe8775f082a",
		"ts": "2026-08-22T06:32:45.923Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 656670.68,
		"hash": "cfe8775f082ae0118294416487307730b8ed1edf13c91606fa4b4619fc19b5ab"
	},
	{
		"id": "1acda44439ca",
		"ts": "2026-08-22T06:32:46.147Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 542657.96,
		"hash": "1acda44439caf6ae5bf2d44cef7744a702b3548d0b5333812739f084d854b469"
	},
	{
		"id": "b271d1c5e4f0",
		"ts": "2026-08-22T06:32:46.363Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 738420.45,
		"hash": "b271d1c5e4f09b88ead0a4aa9110d1aa69e9efc49948871a2ac33fca950c4490"
	},
	{
		"id": "b4e8e0fac13d",
		"ts": "2026-08-22T05:22:25.978Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109401757.03,
		"hash": "b4e8e0fac13d961782f908bf77ae843e0ef85918403cbb0a9dc5593273e0a501"
	},
	{
		"id": "1fc40565258a",
		"ts": "2026-08-22T05:22:26.398Z",
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
		"liquidityUsd": 13596170.26,
		"hash": "1fc40565258a59859861383b1c66d4e7d0bff18cc8d090dfc4692e4f4c993780"
	},
	{
		"id": "eaed28d11147",
		"ts": "2026-08-22T05:22:26.602Z",
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
		"liquidityUsd": 910257.33,
		"hash": "eaed28d111474b2ba5a3b3b717a84a5acf308b8237c1183f36339f69a3f94789"
	},
	{
		"id": "faaddc6b3b45",
		"ts": "2026-08-22T05:22:26.791Z",
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
		"liquidityUsd": 27928707.94,
		"hash": "faaddc6b3b4581191a7c64b81728b4d9ef73f666a58b0f6fba3b932ef273e1d1"
	},
	{
		"id": "e8a6635bd64a",
		"ts": "2026-08-22T05:22:26.981Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "e8a6635bd64a028b912885bcdc3b4ffe0fd1637050ec01ea433b90216749dd2e"
	},
	{
		"id": "239b608b9245",
		"ts": "2026-08-22T05:22:27.179Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1176985.36,
		"hash": "239b608b9245b3354f633dea306bd494bc23d5340a87e07028202fbaa1da29ff"
	},
	{
		"id": "ce7b16940608",
		"ts": "2026-08-22T05:22:27.368Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152748.25,
		"hash": "ce7b169406080584767dbcf4eb89473afc3d8f9af31acf6a831d5524d0d0c421"
	},
	{
		"id": "4ecd0365833c",
		"ts": "2026-08-22T05:22:27.714Z",
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
		"liquidityUsd": 3611768.56,
		"hash": "4ecd0365833c4b0bdfb23ea87d5625d929c94b35535f991e03727b2bf370332e"
	},
	{
		"id": "0a163b5504f3",
		"ts": "2026-08-22T05:22:27.899Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1164199.11,
		"hash": "0a163b5504f33aeca19d6d162082107e5932553b1b9c22a84321e17a248be869"
	},
	{
		"id": "28e5d6042bb1",
		"ts": "2026-08-22T05:22:28.091Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 809503.33,
		"hash": "28e5d6042bb139eb719bbc2cc223214ffa072dfd40119b25a9d4677255235dc6"
	},
	{
		"id": "0b99dccc6e8f",
		"ts": "2026-08-22T05:22:28.275Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1857752.11,
		"hash": "0b99dccc6e8f2cf5dfd53fddc989dc4bb51715240aeab4348cbcd023c9ae3b5c"
	},
	{
		"id": "e1e4c22a7a76",
		"ts": "2026-08-22T05:22:28.463Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11592438.78,
		"hash": "e1e4c22a7a76ee5277235b27b05c97fdcde15c5c7a0815e2bc4b94ded889e0b5"
	},
	{
		"id": "bc6571373b83",
		"ts": "2026-08-22T05:22:28.805Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3318044.42,
		"hash": "bc6571373b83e7df7c2f45a9f73d4673a03ab7566d1ceab877105abb5892bf73"
	},
	{
		"id": "5d001c74acbd",
		"ts": "2026-08-22T05:22:28.991Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 76484.46,
		"hash": "5d001c74acbd3928afd5d65142eafc634e513fbe7ca56664690becdeee4cc0ce"
	},
	{
		"id": "aefac1db07ab",
		"ts": "2026-08-22T05:22:29.195Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 520931.91,
		"hash": "aefac1db07ab7b903b769e1535534f85bc25495b02ddb19426e7eaac7e3ebb85"
	},
	{
		"id": "6ef221eb9d26",
		"ts": "2026-08-22T05:22:29.402Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 368929,
		"hash": "6ef221eb9d264bc3213ffd5801965c6b3ff00a83fe73bf583e2df4be1832a404"
	},
	{
		"id": "9fa421b7bf8a",
		"ts": "2026-08-22T05:22:29.599Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 659522.42,
		"hash": "9fa421b7bf8a90e5b85fd22bdc5195a37420ddaaeb6f21595fcffdb42687e0c0"
	},
	{
		"id": "7095411ebd19",
		"ts": "2026-08-22T05:22:30.112Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 742113.21,
		"hash": "7095411ebd19639d94def7072d612c7b1d5b591477c4afed7339ba2fa02e8ab7"
	},
	{
		"id": "c2f587f01ae9",
		"ts": "2026-08-22T05:22:30.664Z",
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
		"liquidityUsd": 423997.06,
		"hash": "c2f587f01ae9d0ea97dda67fbc78d21d5fce8e07d8fd178239bd0986d9043b2a"
	},
	{
		"id": "62fdf147d581",
		"ts": "2026-08-22T04:28:26.380Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110620040.93,
		"hash": "62fdf147d5810b6446761c631bce6019e20638b5ebfa9f6e51af9e149f48d5da"
	},
	{
		"id": "887dabf9b67f",
		"ts": "2026-08-22T04:28:26.647Z",
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
		"liquidityUsd": 13970857.76,
		"hash": "887dabf9b67f8f6c308cc3ccf30787676f0017c78a1afea52322b5208771343e"
	},
	{
		"id": "dfb6a4fd03d4",
		"ts": "2026-08-22T04:28:27.106Z",
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
		"liquidityUsd": 944764.55,
		"hash": "dfb6a4fd03d485a85780e38c6ebee2a1a3048b4c37a0fdc2bcb66dfaae11ab0e"
	},
	{
		"id": "162662c828c5",
		"ts": "2026-08-22T04:28:27.338Z",
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
		"liquidityUsd": 28521784.88,
		"hash": "162662c828c558bea44444d00361f7a5f156ee2c5656f2127a8457bd4146364e"
	},
	{
		"id": "7a1e47dad242",
		"ts": "2026-08-22T04:28:27.587Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "7a1e47dad24205813270dcb8759f6be779c55e34c407560f8c008fdb03c4934f"
	},
	{
		"id": "908ae3f1d2d9",
		"ts": "2026-08-22T04:28:27.822Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1248954.68,
		"hash": "908ae3f1d2d9c4fa4aa19b013501870ff249ca37d4c5f0d8d0245e03ba902bb0"
	},
	{
		"id": "a318c5deb0d4",
		"ts": "2026-08-22T04:28:28.067Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152749.2,
		"hash": "a318c5deb0d4dba599ababc9cd059b83bbce78f27b4cbd5bd53ae1284a4546bf"
	},
	{
		"id": "43e9ff7b5810",
		"ts": "2026-08-22T04:28:28.310Z",
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
		"liquidityUsd": 3721369.94,
		"hash": "43e9ff7b58107a15c895c3fc2ed36c133c2f2a6c1adc93644765d051a0297a62"
	},
	{
		"id": "89a2da346e37",
		"ts": "2026-08-22T04:28:28.548Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 861485.9,
		"hash": "89a2da346e37543b194ac61406113eef489d693a5d8eebad8e22c83f609122ab"
	},
	{
		"id": "39dc8a6f543d",
		"ts": "2026-08-22T04:28:29.545Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1236117.94,
		"hash": "39dc8a6f543dbbc5e70cffce4c7f4a0cbb1a9208a4a219c140eb3c2ce9eb77a4"
	},
	{
		"id": "49a7eb02bbd4",
		"ts": "2026-08-22T04:28:29.774Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1946734.44,
		"hash": "49a7eb02bbd4487eba2f0fc2f36a5cc89b8a65376660a93de7d84eac842b6fb2"
	},
	{
		"id": "8a96d5ae102f",
		"ts": "2026-08-22T04:28:29.987Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 12022288.98,
		"hash": "8a96d5ae102f6090b173b89b393d91b5085731d7988f227599b941b82dd07a0d"
	},
	{
		"id": "7849e3a8b26e",
		"ts": "2026-08-22T04:28:30.215Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3552414.32,
		"hash": "7849e3a8b26e8b986cd9111d012e38bcfa295e3e2beb49789acc2d419a9058b2"
	},
	{
		"id": "f47b937904ab",
		"ts": "2026-08-22T04:28:30.436Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 80022.73,
		"hash": "f47b937904ab6d20513ec62c56c514e0c654e88c435e21d1e8fe1e5e23baef87"
	},
	{
		"id": "496cc8ff70a7",
		"ts": "2026-08-22T04:28:30.663Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 384844.12,
		"hash": "496cc8ff70a76af221a176ff9080717606dc05962fda26f5c43512880a7861b8"
	},
	{
		"id": "59dfdb623cfc",
		"ts": "2026-08-22T04:28:30.890Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 679297.51,
		"hash": "59dfdb623cfcf20c9e9eea08edc5b4ecebf1e7e67292087d8810d39a789113cb"
	},
	{
		"id": "fdf9edfacaa9",
		"ts": "2026-08-22T04:28:31.674Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 750631.01,
		"hash": "fdf9edfacaa91a750d3bf3179649a2cefa932bdef4367a1ed087f5882a46011d"
	},
	{
		"id": "79c5aa95f3f9",
		"ts": "2026-08-22T04:28:31.893Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 547601.5,
		"hash": "79c5aa95f3f93eb1ef1b42f1d43db2bfbcd1c5eaf2a3182e3d079188ec1ee5f9"
	},
	{
		"id": "945580e3a79e",
		"ts": "2026-08-22T04:28:32.117Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 441159.1,
		"hash": "945580e3a79e4be62f1c89c1db35427ad100b72626891322aca6d94a051792bf"
	},
	{
		"id": "0f4435bd0fc2",
		"ts": "2026-08-22T03:37:42.580Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111269250.74,
		"hash": "0f4435bd0fc2d85b1725a1daf45984752b509a027fa0d8df202c66bab0d623cf"
	},
	{
		"id": "a3bc33ad9d7d",
		"ts": "2026-08-22T03:37:42.789Z",
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
		"liquidityUsd": 15849529.57,
		"hash": "a3bc33ad9d7d7bdf1d3ceb47c8b15787bd34c357a2834a5b1cfda853868f2180"
	},
	{
		"id": "5abc7a40108c",
		"ts": "2026-08-22T03:37:43.002Z",
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
		"liquidityUsd": 944863.67,
		"hash": "5abc7a40108c12460421d9023e43a03478e25b2ea43ff3396022c07e238a8afe"
	},
	{
		"id": "cdad7ed55c2b",
		"ts": "2026-08-22T03:37:43.191Z",
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
		"liquidityUsd": 28591459.55,
		"hash": "cdad7ed55c2be13050dc5f5773f71d7311dbf15f1e9b137541a940cef70ba3e6"
	},
	{
		"id": "a5d9fbbc7936",
		"ts": "2026-08-22T03:37:43.383Z",
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
		"liquidityUsd": 3566099.05,
		"hash": "a5d9fbbc793641707651bfb3762c601ec6c9593ec70cbb800c53291f5842cf2b"
	},
	{
		"id": "c88b7478c796",
		"ts": "2026-08-22T03:37:43.606Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1244556.5,
		"hash": "c88b7478c7968bbc88aef1f57fb2903427d5d948cf4a1123ef9dc09a6cfe467b"
	},
	{
		"id": "dabd76a3d0d7",
		"ts": "2026-08-22T03:37:43.797Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152749.4,
		"hash": "dabd76a3d0d71d1a1e468049ecd11c6726418168cc801aeef8bfa3a99e542a29"
	},
	{
		"id": "090db833126c",
		"ts": "2026-08-22T03:37:43.982Z",
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
		"liquidityUsd": 4039298.23,
		"hash": "090db833126ced376eb7520866b3d932857fe6caa24b49025f587fc6892da706"
	},
	{
		"id": "2f5bc7668f4a",
		"ts": "2026-08-22T03:37:44.187Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1255958.5,
		"hash": "2f5bc7668f4a8dbebb1bef6290350eb285cd32d737bd167c765df15edce9960d"
	},
	{
		"id": "689d15759695",
		"ts": "2026-08-22T03:37:44.378Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 870623.24,
		"hash": "689d1575969545c2f889c3d6d29b6f073fb186acec265b196b0f95562a634a27"
	},
	{
		"id": "aea9f99cdcfd",
		"ts": "2026-08-22T03:37:44.580Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1948683.43,
		"hash": "aea9f99cdcfd533cc94312484650eea7344a32fbd7dd3674c2cf50409b9b0fd5"
	},
	{
		"id": "b55cfb917ea7",
		"ts": "2026-08-22T03:37:44.773Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 12015580.35,
		"hash": "b55cfb917ea7123d00639a8dcac44d99878bc926fb2ec4e37b305dfe3205006d"
	},
	{
		"id": "0fa5f7843867",
		"ts": "2026-08-22T03:37:44.974Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3530900.06,
		"hash": "0fa5f7843867b1926a4a8a05ac440d2bb0a4e3f491cac5732f65d34d78b496a4"
	},
	{
		"id": "067912049cd6",
		"ts": "2026-08-22T03:37:45.198Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 381326.35,
		"hash": "067912049cd6109bb039b9098092fcdb2f12fff12ed1fa4a7ecb2b34cf84317d"
	},
	{
		"id": "f1405fe31961",
		"ts": "2026-08-22T03:37:45.468Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 83066.97,
		"hash": "f1405fe319611157cb13447b0fd644fc162dabc3582c951fa1a7a3297632db14"
	},
	{
		"id": "0aa034655a51",
		"ts": "2026-08-22T03:37:45.652Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 681431.44,
		"hash": "0aa034655a51d4e8d5dfa4bc1476ba3ab35bf82071d547b27d7337edb40c7d1c"
	},
	{
		"id": "340e1aa06084",
		"ts": "2026-08-22T03:37:45.843Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 750631.01,
		"hash": "340e1aa060843ed65fea977314ce7c07a28169653c24cfcad6459254f363fd0a"
	},
	{
		"id": "6373cb1abcf2",
		"ts": "2026-08-22T03:37:46.034Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 460586.87,
		"hash": "6373cb1abcf2e4050b4e1d9173b3b6e7b8f7e549002dab1c63f90d4c8487d233"
	},
	{
		"id": "45b9e1c01939",
		"ts": "2026-08-22T03:37:46.220Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 283214.68,
		"hash": "45b9e1c01939efd3d973beb8879cba65b34c969e53b94d574c2dd909bc0c39b2"
	},
	{
		"id": "67a3925edf3a",
		"ts": "2026-08-22T02:18:24.202Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111090913.59,
		"hash": "67a3925edf3a93d4927e0497701e17473eb1f338d2458bcc119be77f04ade9ad"
	},
	{
		"id": "3088e8c8dc04",
		"ts": "2026-08-22T02:18:24.683Z",
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
		"liquidityUsd": 16454283.5,
		"hash": "3088e8c8dc047049427e8a6ee5275e76cd58cb6c07c1b2dbb79f572d6f182811"
	},
	{
		"id": "b75976f61259",
		"ts": "2026-08-22T02:18:25.191Z",
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
		"liquidityUsd": 940345.89,
		"hash": "b75976f61259b2708bfdae4f69e49dabc9c0f6a4e632015515ceb3f7a2e16b5d"
	},
	{
		"id": "307fd71bcc8b",
		"ts": "2026-08-22T02:18:25.475Z",
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
		"liquidityUsd": 28937580.53,
		"hash": "307fd71bcc8ba8803e925a9b2efb86cdb1d6d0650c3ae6b4224869c9ba3743e2"
	},
	{
		"id": "196ee07f92be",
		"ts": "2026-08-22T02:18:25.760Z",
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
		"liquidityUsd": 3545356.83,
		"hash": "196ee07f92be3dc30cb440ee295b9d7d3ddf6785ffb61b94b179e46446f26a5e"
	},
	{
		"id": "4bd5b772102e",
		"ts": "2026-08-22T02:18:26.373Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1219400.73,
		"hash": "4bd5b772102e02a9af19193271653c291d1d5f413aa2bfc43906377641dbe922"
	},
	{
		"id": "1753a8258b29",
		"ts": "2026-08-22T02:18:26.652Z",
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
		"liquidityUsd": 407393.45,
		"hash": "1753a8258b291cd003f52ad1d712349605f9607d2a8b6131bc061019c875d8db"
	},
	{
		"id": "2a0482cce21f",
		"ts": "2026-08-22T02:18:26.913Z",
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
		"liquidityUsd": 4029248.29,
		"hash": "2a0482cce21f642618b0cded533de6aba3a9e3eaf384be4f1de2460a3de7affd"
	},
	{
		"id": "19073fc8808d",
		"ts": "2026-08-22T02:18:27.435Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1315491.61,
		"hash": "19073fc8808deb4bf5b70e5b80b4e87592f93dbf84689660c882dc3c80f27f42"
	},
	{
		"id": "c575b4de8276",
		"ts": "2026-08-22T02:18:27.701Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 906762.17,
		"hash": "c575b4de827696e8d7d34b7a522f6c7b75a7fd1c2c8cc522ae8f306b65f07f35"
	},
	{
		"id": "75cb31129df0",
		"ts": "2026-08-22T02:18:27.965Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1951174.44,
		"hash": "75cb31129df0efadde6e1722b3a618d3a5047c90b2b63c848fd69f4fcaf01757"
	},
	{
		"id": "b7329744c129",
		"ts": "2026-08-22T02:18:28.212Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 12023368.21,
		"hash": "b7329744c129a0c54cf0dd6a108f0d32dd53f57a50080393ae386a5131e15ef0"
	},
	{
		"id": "da37ef25870c",
		"ts": "2026-08-22T02:18:28.476Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3475705.93,
		"hash": "da37ef25870c610129402ec86bdc6ef6d3b4e2314cc1f2b04c0e0b29f070d006"
	},
	{
		"id": "1869319fc259",
		"ts": "2026-08-22T02:18:28.720Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 389155.68,
		"hash": "1869319fc2596c49c0bd20c5216c11cadcbb19e6fddbc12883782e9ac25b43f2"
	},
	{
		"id": "c8b911b40eab",
		"ts": "2026-08-22T02:18:28.984Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 77659.78,
		"hash": "c8b911b40eab2ebd819b8292165ca4596eac8b5854130656f88c455cc6916580"
	},
	{
		"id": "6d33118c9a63",
		"ts": "2026-08-22T02:18:29.229Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 677897.99,
		"hash": "6d33118c9a63a2876076853d81049c8a832d2ff7b8de9e5177fe316db8d83a76"
	},
	{
		"id": "cd792785c0b1",
		"ts": "2026-08-22T02:18:29.492Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 748778.18,
		"hash": "cd792785c0b1597b2417c8f58a7140d1ab52d0d0b51a361a2f3806752c85e770"
	},
	{
		"id": "d43e291d7ba9",
		"ts": "2026-08-22T02:18:29.741Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 287699.22,
		"hash": "d43e291d7ba911377e228ce2a3686d886883d7e016c3e9ccf20be6bcd0871f2a"
	},
	{
		"id": "2946026e816b",
		"ts": "2026-08-22T02:18:30.005Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 465691.53,
		"hash": "2946026e816bc6f56bf616002f4fba700158e5f8aabf2f1cf14b20a7aa730dac"
	},
	{
		"id": "a5325abc6a0d",
		"ts": "2026-08-22T01:00:05.917Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111089764.29,
		"hash": "a5325abc6a0dfd4acfbef36abd6a467139d2b344e165a273006433182c8b9c69"
	},
	{
		"id": "1d64d02da29c",
		"ts": "2026-08-22T01:00:06.189Z",
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
		"liquidityUsd": 13989794.74,
		"hash": "1d64d02da29c86f92b40871a55029fc68b75551668f2bda9f7af3da519a7f79b"
	},
	{
		"id": "a7db894e1e5d",
		"ts": "2026-08-22T01:00:06.407Z",
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
		"liquidityUsd": 944504.91,
		"hash": "a7db894e1e5da90cbbdf8bce714c08a60da8974177fbd63bda0da24c116e829d"
	},
	{
		"id": "5570f1590e81",
		"ts": "2026-08-22T01:00:06.920Z",
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
		"liquidityUsd": 28857700.96,
		"hash": "5570f1590e81e2a76ac6892bda302f214e9e4ae582a63b434736355721e3f319"
	},
	{
		"id": "0d400594bbec",
		"ts": "2026-08-22T01:00:07.436Z",
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
		"liquidityUsd": 3545179.88,
		"hash": "0d400594bbecc487fdd906a5e056d4eda5fe9a97aad1433a92b698f70168f3af"
	},
	{
		"id": "1a3b11c226cd",
		"ts": "2026-08-22T01:00:07.651Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1217064.6,
		"hash": "1a3b11c226cd92c947e3e2bd2deed627766aab40d229b299f88c3cd1d33dac38"
	},
	{
		"id": "a252d4dc534f",
		"ts": "2026-08-22T01:00:07.877Z",
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
		"liquidityUsd": 382294.19,
		"hash": "a252d4dc534f4a2812186e4b3a3412b495ea1a7f632a08f3ebfe4bfe9ed6fb6a"
	},
	{
		"id": "0b402df578f2",
		"ts": "2026-08-22T01:00:08.676Z",
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
		"liquidityUsd": 1733159.39,
		"hash": "0b402df578f2a26ebec7dbd95d0861b4335bb40e087a862b4ae9945061970359"
	},
	{
		"id": "b4a97a207e62",
		"ts": "2026-08-22T01:00:08.888Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1266636.87,
		"hash": "b4a97a207e62f6edef621661b11030d26bdb2214b1ef6100267e6d8105d4d759"
	},
	{
		"id": "23e7743dc5c9",
		"ts": "2026-08-22T01:00:09.236Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 867480.27,
		"hash": "23e7743dc5c9a109e5667b771d3739e042f7fde94335ae1a8d78847cad5d2f87"
	},
	{
		"id": "3d48a08fefed",
		"ts": "2026-08-22T01:00:09.450Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1968002.28,
		"hash": "3d48a08fefed6329e2f943b9d7d0bdbc6f9d9e8b77620c413ff250234b63ebf0"
	},
	{
		"id": "7777d975cfdb",
		"ts": "2026-08-22T01:00:09.668Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 12041570.56,
		"hash": "7777d975cfdb51003b52d2d62b506a4c848806532ec2bb0f1fa15d6e74c5f134"
	},
	{
		"id": "904c67883bed",
		"ts": "2026-08-22T01:00:09.898Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3507463.51,
		"hash": "904c67883bed343d0eea61eb5bc6a960e85593d18748c073afc2c7314b614625"
	},
	{
		"id": "ddc3666255c7",
		"ts": "2026-08-22T01:00:10.836Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 391007.09,
		"hash": "ddc3666255c774223f4a4515d312fde6d4173850cbce9251bb645950a3d4b47d"
	},
	{
		"id": "9ff3e45d7d81",
		"ts": "2026-08-22T01:00:11.041Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 671274.31,
		"hash": "9ff3e45d7d816f453829717fd915778323b6dd5700ddf0785aed100e0a0eb1c5"
	},
	{
		"id": "12a3baa1e513",
		"ts": "2026-08-22T01:00:11.268Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 77998.99,
		"hash": "12a3baa1e513e47463b2722d6efef1b4c080235e6eb817a66b337a2b68fb06f9"
	},
	{
		"id": "000b9908d9ab",
		"ts": "2026-08-22T01:00:12.133Z",
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
		"liquidityUsd": 507725.66,
		"hash": "000b9908d9abaef949c3ccf1a027b91e3e518f5f07a44f74560b81adfdb6a1d9"
	},
	{
		"id": "57707e64a1f2",
		"ts": "2026-08-22T01:00:12.382Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 756690.04,
		"hash": "57707e64a1f20dc572046d3d0adc9657782b0f58150624fd5acbb1dc683a1faa"
	},
	{
		"id": "8fec938b3baa",
		"ts": "2026-08-22T01:00:12.612Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 272225.71,
		"hash": "8fec938b3baac4dbb2867d09c56ebcb567958add913bea236500f0140730518d"
	},
	{
		"id": "4d232bd49e35",
		"ts": "2026-08-21T23:19:07.029Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111278001.51,
		"hash": "4d232bd49e35a1d448dab00820ac03cfa9033bd9f55a0e3cf4f3b9e36e372ebc"
	},
	{
		"id": "6438447253b4",
		"ts": "2026-08-21T23:19:07.780Z",
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
		"liquidityUsd": 13913165.39,
		"hash": "6438447253b45e56f50c08429e6b29efe0a142b9ed95a65029522068f39416e3"
	},
	{
		"id": "1ebee685f085",
		"ts": "2026-08-21T23:19:08.218Z",
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
		"liquidityUsd": 949981.18,
		"hash": "1ebee685f085661072ecfb55b70ac23a8780ff5650006e9deb1a65ff42624f55"
	},
	{
		"id": "5b99854e2f1d",
		"ts": "2026-08-21T23:19:08.651Z",
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
		"liquidityUsd": 28621657.02,
		"hash": "5b99854e2f1d804c79ab5a35b6a0989f3226cbf0e6a47ce4091fae1bdcac53a2"
	},
	{
		"id": "96bf33fa6a88",
		"ts": "2026-08-21T23:19:08.916Z",
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
		"liquidityUsd": 3538471.05,
		"hash": "96bf33fa6a887b17592bf291a9a7b42a2af0641b29831f1695c03df8896035a1"
	},
	{
		"id": "c34a06c39696",
		"ts": "2026-08-21T23:19:09.189Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1211161.61,
		"hash": "c34a06c39696a90e28b8e2e1a91a00ac4deacd15e76bdc77807b391b6c86b83d"
	},
	{
		"id": "a9bfbce584ed",
		"ts": "2026-08-21T23:19:09.450Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 502405.2,
		"hash": "a9bfbce584edc3de5765763c59fa72ba766456d2566cb6342d329862dcf1d667"
	},
	{
		"id": "f5de611c480d",
		"ts": "2026-08-21T23:19:09.685Z",
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
		"liquidityUsd": 1743439.66,
		"hash": "f5de611c480d413c19b329559dc9096e5e2f159e230232feeca494e15ecd4ecf"
	},
	{
		"id": "b92a6237c4a4",
		"ts": "2026-08-21T23:19:09.942Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1289206.42,
		"hash": "b92a6237c4a415e1705ea683a26292342e52708958b71ccb37bd47a0e9ea4177"
	},
	{
		"id": "a49838b1d53b",
		"ts": "2026-08-21T23:19:10.659Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 791256.04,
		"hash": "a49838b1d53b0b8dcf4276a9491a855431f0545e6ebfdb59e0f6309fac50baaf"
	},
	{
		"id": "0c50a7521ab6",
		"ts": "2026-08-21T23:19:10.890Z",
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
		"liquidityUsd": 12126306.96,
		"hash": "0c50a7521ab6ec3859fe23d5e67e6cd1c1fbeb0873a1c3a5362136799b52eb37"
	},
	{
		"id": "84e50b37475f",
		"ts": "2026-08-21T23:19:11.119Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1977603.22,
		"hash": "84e50b37475f31d4c42d04de12b2109da0050b4ffc594665640a919bbf88f1cc"
	},
	{
		"id": "c5cce92695b2",
		"ts": "2026-08-21T23:19:11.370Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3466862.57,
		"hash": "c5cce92695b2b451f8efd19d035987d287718b41cca96166b696c8ce9dcdc22f"
	},
	{
		"id": "47f090929b83",
		"ts": "2026-08-21T23:19:11.733Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 267100.04,
		"hash": "47f090929b8376a43e8a5cbca7001232d822d86ef339ac36b3486058c3836787"
	},
	{
		"id": "05b532810f1a",
		"ts": "2026-08-21T23:19:12.088Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 390361.31,
		"hash": "05b532810f1af742b672e8c4c4e666ad294bf63e4d02fb3d11df501a68798232"
	},
	{
		"id": "1143512171b2",
		"ts": "2026-08-21T23:19:12.497Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 433369.94,
		"hash": "1143512171b2e7113725497b4617190b2e42dfdb8ba804af0500db94c762e7e9"
	},
	{
		"id": "61c881e4fa2b",
		"ts": "2026-08-21T23:19:12.952Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 770360.37,
		"hash": "61c881e4fa2b9ba6af4455a9dd0f78398bbfe016219a41bc5166dad3bee444a4"
	},
	{
		"id": "9ba4ec9797d2",
		"ts": "2026-08-21T23:19:13.204Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 73136.94,
		"hash": "9ba4ec9797d25ad197058be0aadc0df5aa0b53e63ccc105a572725e7c6dc7b09"
	},
	{
		"id": "0478a22b76b9",
		"ts": "2026-08-21T23:19:13.430Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 674362.17,
		"hash": "0478a22b76b9ef00f3845f6a3b3c5f529bda3cbec84c3a5b030a9ae204ecd8eb"
	},
	{
		"id": "970a6cfeebc2",
		"ts": "2026-08-21T22:19:13.714Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111493527.32,
		"hash": "970a6cfeebc28d15014eaaa10d47b927eead3bfe92b3b1167acdfaba14ccc041"
	},
	{
		"id": "5e542fa4cf9c",
		"ts": "2026-08-21T22:19:14.230Z",
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
		"liquidityUsd": 13922695.96,
		"hash": "5e542fa4cf9c251e1e789ef1a69aa78e882ac1064e77040f0c7f78461159378b"
	},
	{
		"id": "2adb59e7b022",
		"ts": "2026-08-21T22:19:14.572Z",
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
		"liquidityUsd": 955893.6,
		"hash": "2adb59e7b022d5a4499b238d32e882137e763828246a5ab0c76a09d1cb8ec6e0"
	},
	{
		"id": "45e1702ec28b",
		"ts": "2026-08-21T22:19:14.929Z",
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
		"liquidityUsd": 28670909.57,
		"hash": "45e1702ec28b61ae184013b05b15e1552f4703340e29df4cc766e2af630f4429"
	},
	{
		"id": "d8ace72b4d47",
		"ts": "2026-08-21T22:19:15.266Z",
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
		"liquidityUsd": 3540629.84,
		"hash": "d8ace72b4d4712b58600ecba063e8409844a208643adbd974279f5ad8f9f6204"
	},
	{
		"id": "42aafb0cf8e1",
		"ts": "2026-08-21T22:19:15.466Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1209646.56,
		"hash": "42aafb0cf8e198925b0b9e3e7c6aa79c1c98eaa7b4bc6737492e4d0321bdfefd"
	},
	{
		"id": "61a68d31e9df",
		"ts": "2026-08-21T22:19:15.657Z",
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
		"liquidityUsd": 358414,
		"hash": "61a68d31e9dfbf8d10ea30966f606acf44875a6d3ee8830e4c3c78b0c1844834"
	},
	{
		"id": "8e05725fa677",
		"ts": "2026-08-21T22:19:15.872Z",
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
		"liquidityUsd": 1748156.54,
		"hash": "8e05725fa677624386e895f71c163586a65adcd66d843cc6d4c48b103e47b400"
	},
	{
		"id": "e99a0fb36b10",
		"ts": "2026-08-21T22:19:16.055Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1301691.26,
		"hash": "e99a0fb36b10b4cb119ccff4e580dea35718bf4c4045a29ab2d8b6656d7e66b0"
	},
	{
		"id": "6bd7fbb9a1c4",
		"ts": "2026-08-21T22:19:16.572Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 784625.86,
		"hash": "6bd7fbb9a1c46f6c1d7d97b4467312a6f96341300ecfe769145c691c67975205"
	}
]
