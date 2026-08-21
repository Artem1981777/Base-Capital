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
	"updatedAt": "2026-08-21T01:03:49.897Z",
	"tokensScored": 12840,
	"verdictsIssued": 12840,
	"safe": 11080,
	"risky": 921,
	"likelyRug": 839,
	"ticks": 753
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "5b5af41f527e",
		"ts": "2026-08-21T01:03:44.847Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112386386.13,
		"hash": "5b5af41f527e4d0cb3c4bfc133f5981850091fe47d8d1f988690d33a0584af05"
	},
	{
		"id": "9cf5fc9efd9d",
		"ts": "2026-08-21T01:03:45.258Z",
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
		"liquidityUsd": 14920243.1,
		"hash": "9cf5fc9efd9d1d9768eb44d9ac4cd820dacc6a9984dc0bcbb8b8e2847d58f457"
	},
	{
		"id": "6a8b8264846f",
		"ts": "2026-08-21T01:03:45.502Z",
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
		"liquidityUsd": 881671.9,
		"hash": "6a8b8264846f8781b410874436cd852563c0c2afdc6deba50314e4e8c2e8df06"
	},
	{
		"id": "8f0c6b130f2c",
		"ts": "2026-08-21T01:03:45.735Z",
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
		"liquidityUsd": 28329227.88,
		"hash": "8f0c6b130f2c2f7ab1b2b2c01aa293493242f9bb206127842b217127cf2f5ad6"
	},
	{
		"id": "4e9f1d1873da",
		"ts": "2026-08-21T01:03:45.965Z",
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
		"liquidityUsd": 3171593.18,
		"hash": "4e9f1d1873daa81140b3748292f15a4eaa03d7a2f28a7f578be23df3cb878da5"
	},
	{
		"id": "5690e13f4fd6",
		"ts": "2026-08-21T01:03:46.209Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1086772.83,
		"hash": "5690e13f4fd609d6c06ace9ac99dae686e57fb0bfd7d5f425a9c4a6633779f6c"
	},
	{
		"id": "2d1eb455ce92",
		"ts": "2026-08-21T01:03:46.444Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152698.99,
		"hash": "2d1eb455ce92faa52bf7779725c1280605a54934604b462482d77b1af8c4b25a"
	},
	{
		"id": "a9a77319002f",
		"ts": "2026-08-21T01:03:46.675Z",
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
		"liquidityUsd": 1617612.69,
		"hash": "a9a77319002fdb8d19f25621947a935dced0a1e40759c12d614a1a4c6672d336"
	},
	{
		"id": "8ce4defe4f2a",
		"ts": "2026-08-21T01:03:47.034Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 907869.28,
		"hash": "8ce4defe4f2ada292e5a5c4b79dc8444b0697abc4ff91b4a1aa6b2953bd19375"
	},
	{
		"id": "8cec863f897a",
		"ts": "2026-08-21T01:03:47.262Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3133389.13,
		"hash": "8cec863f897a43e14ba072ce1624ce25c52db0aa2b778edbdac23a7c0c214e87"
	},
	{
		"id": "46b0e243d4b1",
		"ts": "2026-08-21T01:03:47.473Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 283240.64,
		"hash": "46b0e243d4b1af8a7c8b99d819f19ab31a02f78943c8e2b44bae69a99ba743d7"
	},
	{
		"id": "4dae87d7053f",
		"ts": "2026-08-21T01:03:47.687Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11098479.72,
		"hash": "4dae87d7053fa848ed2a6c05ef2e211c1d16f97120fc10f465511dad37fb4d1c"
	},
	{
		"id": "287429f0f7cb",
		"ts": "2026-08-21T01:03:47.943Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 615074.25,
		"hash": "287429f0f7cbe447efe17ffe5842205e7529a55ad4d39957e9a115ed0d115715"
	},
	{
		"id": "654c26f0151c",
		"ts": "2026-08-21T01:03:48.189Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4114538.95,
		"hash": "654c26f0151c235876bef8e345cdce6551551629452b1389e53e6d434e138c2d"
	},
	{
		"id": "09accb03dd43",
		"ts": "2026-08-21T01:03:48.402Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1778336.03,
		"hash": "09accb03dd4334fd4beeb522487b05be0a7023d9880f8efe381fc5b4929f63cd"
	},
	{
		"id": "f9915e67dfa8",
		"ts": "2026-08-21T01:03:48.615Z",
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
		"liquidityUsd": 427369.01,
		"hash": "f9915e67dfa8388f7adcac360c39aaf0fb3c402e382ef5cca3ef7fdd52156393"
	},
	{
		"id": "0a66a2369671",
		"ts": "2026-08-21T01:03:49.271Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4408127.01,
		"hash": "0a66a2369671d5d2ee0bb723039502f4e519f1b62b5c7857230b0d063dfc92bb"
	},
	{
		"id": "53cab057c228",
		"ts": "2026-08-21T01:03:49.679Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 861093.16,
		"hash": "53cab057c22864d36820e2c36377a8dc1f3e271636c42c7a46c11bf270384069"
	},
	{
		"id": "2930d028e73e",
		"ts": "2026-08-21T01:03:49.897Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 975816.59,
		"hash": "2930d028e73e6cfdf9afd81ee197184d071977084d4cda757841e974f81d47ba"
	},
	{
		"id": "8ddd781f9fa0",
		"ts": "2026-08-20T23:21:46.092Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112122748.25,
		"hash": "8ddd781f9fa0b1a9a83104f7b7e636517182cc36043e5ac29396cfc7a809793c"
	},
	{
		"id": "467c93b86c79",
		"ts": "2026-08-20T23:21:46.447Z",
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
		"liquidityUsd": 16580295.54,
		"hash": "467c93b86c79ccc2c481742bf053d49a0df6ebdaabe9564c6c18b1f62047d29f"
	},
	{
		"id": "27f8afeb0460",
		"ts": "2026-08-20T23:21:46.676Z",
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
		"liquidityUsd": 867563.11,
		"hash": "27f8afeb0460139c926a89f6ade5f03b232017be0e0c3a25284afa175ae0017c"
	},
	{
		"id": "6b81d6265881",
		"ts": "2026-08-20T23:21:46.923Z",
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
		"liquidityUsd": 28220312.98,
		"hash": "6b81d6265881f108b8cea55c6cd30413593e33bf832a65d221462735479ee5d0"
	},
	{
		"id": "47b0f4c363f7",
		"ts": "2026-08-20T23:21:47.416Z",
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
		"liquidityUsd": 3254480.79,
		"hash": "47b0f4c363f763c89e20c70be723edc1599189533abcf9a34a764012b795464d"
	},
	{
		"id": "4dca916500ff",
		"ts": "2026-08-20T23:21:47.644Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1086169.75,
		"hash": "4dca916500ff559aacc5b474e19c8369bb8cab4eca8edd4662952f4292547aa7"
	},
	{
		"id": "e700e20a77d2",
		"ts": "2026-08-20T23:21:47.853Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152698.95,
		"hash": "e700e20a77d27441990d5c8238fbdea57cd33432fd05b7ad55c189860ec6ab60"
	},
	{
		"id": "b19d33665564",
		"ts": "2026-08-20T23:21:48.054Z",
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
		"liquidityUsd": 1607591.78,
		"hash": "b19d33665564bfd126beaa33da37a47806a3616c5a2803b3cc91399f27de6127"
	},
	{
		"id": "9a5d23bb0571",
		"ts": "2026-08-20T23:21:48.263Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 943396.71,
		"hash": "9a5d23bb0571d5ecd6bf4a92732fb49cd3f0887fed39555d96cca600d6cde700"
	},
	{
		"id": "f3d5d0cff2c3",
		"ts": "2026-08-20T23:21:48.475Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3105094.73,
		"hash": "f3d5d0cff2c3dc62c08981ea0747c2372e797c322ad81525cb9bb2627e334f23"
	},
	{
		"id": "c9fc2c9e3610",
		"ts": "2026-08-20T23:21:48.661Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 302987.73,
		"hash": "c9fc2c9e3610a7c701f66fd82250e2121e80714d00737afe3ee8469cd00bc9fa"
	},
	{
		"id": "a735d1e379a3",
		"ts": "2026-08-20T23:21:48.856Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4317346.08,
		"hash": "a735d1e379a3624c210b8540b658fc1b272a57c0b2d89a31b3652479c8e61db1"
	},
	{
		"id": "b3add3270750",
		"ts": "2026-08-20T23:21:49.085Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 608922.51,
		"hash": "b3add3270750fb09c3cd764f2a060d63aaad2448d9cab23695b6941e88024905"
	},
	{
		"id": "7d11113cb234",
		"ts": "2026-08-20T23:21:49.281Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4035792.69,
		"hash": "7d11113cb234f6959fbf99f4e6f18e60f45e75682874b36dfeb1893db5f2fe3d"
	},
	{
		"id": "fe2da7247484",
		"ts": "2026-08-20T23:21:49.493Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11131982.51,
		"hash": "fe2da7247484cc4619623033f1a7dc4a210dc70eef357d9a595d45653860bb8d"
	},
	{
		"id": "8d60ec3616e2",
		"ts": "2026-08-20T23:21:49.692Z",
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
		"liquidityUsd": 436730.97,
		"hash": "8d60ec3616e2c78ca67f1e9eef36b8befc8f3f582a597fdba4cec4851a4d5735"
	},
	{
		"id": "ea0eb4965a38",
		"ts": "2026-08-20T23:21:49.916Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1722400.84,
		"hash": "ea0eb4965a3848b331beea4d03d351852927d6df4c45f83b73a6ba860a2bc077"
	},
	{
		"id": "1c6aec47c438",
		"ts": "2026-08-20T23:21:50.116Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 959147.25,
		"hash": "1c6aec47c438fbcaef55cfedfaf92835d6e829b9810fc57b3277f2c86d53e521"
	},
	{
		"id": "487017d1a628",
		"ts": "2026-08-20T23:21:50.311Z",
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
		"liquidityUsd": 852799.9,
		"hash": "487017d1a6282ede53eef588a1bdb91f64f2c6bbfa76be507bc0cc81d09606b6"
	},
	{
		"id": "8b635ad63029",
		"ts": "2026-08-20T22:22:15.895Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112159860.91,
		"hash": "8b635ad6302937ff034fcaa084f5a60bb1142f349d8735dda1ee3e4c75be075b"
	},
	{
		"id": "2401f648b1be",
		"ts": "2026-08-20T22:22:16.161Z",
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
		"liquidityUsd": 13308729.87,
		"hash": "2401f648b1bef2f1386d93341dcabe901217b45ec2adeb55afad5e6ae17b1a67"
	},
	{
		"id": "63470f823842",
		"ts": "2026-08-20T22:22:16.435Z",
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
		"liquidityUsd": 866985.48,
		"hash": "63470f8238422ee8b1875bd83ef844cac6453ac196b3533e4a3706416ec254a6"
	},
	{
		"id": "ea1da7b3a6a0",
		"ts": "2026-08-20T22:22:16.698Z",
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
		"liquidityUsd": 28201203.61,
		"hash": "ea1da7b3a6a02ebba39735234a00d9635673d9000976f73d0375d0e76058653d"
	},
	{
		"id": "7e86e98abf4c",
		"ts": "2026-08-20T22:22:16.955Z",
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
		"liquidityUsd": 3211028.48,
		"hash": "7e86e98abf4c9415a735857ff033d7037b77731c6382731bad2d4c776f414930"
	},
	{
		"id": "a29210a79541",
		"ts": "2026-08-20T22:22:17.196Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1086169.75,
		"hash": "a29210a795413948880bdf52b17da7e5dcf66d14b9fa46cfb7a4af203e986de2"
	},
	{
		"id": "e72ccaa8ea5e",
		"ts": "2026-08-20T22:22:17.443Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152699.03,
		"hash": "e72ccaa8ea5ef77eedb91dd602920cce6e849002bb6dca20ef5d4efa4e8f2e8f"
	},
	{
		"id": "5ac2fed755ca",
		"ts": "2026-08-20T22:22:17.676Z",
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
		"liquidityUsd": 1596609.82,
		"hash": "5ac2fed755ca5d5491deb6d9b67ba016726c9bc34ad78eacd00535c45ab11b7e"
	},
	{
		"id": "aea01663f358",
		"ts": "2026-08-20T22:22:17.912Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 894975.36,
		"hash": "aea01663f358f9482ccc95bce1e929fef50023cdf3f94e1593773049b0096bc4"
	},
	{
		"id": "07902c3ff325",
		"ts": "2026-08-20T22:22:18.153Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3086202.34,
		"hash": "07902c3ff32597bbb414b3f8c2cc73c1ba9c58c3be45b7b5cf28980910fad43f"
	},
	{
		"id": "3b04e74cfb65",
		"ts": "2026-08-20T22:22:18.377Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4342849.54,
		"hash": "3b04e74cfb65651f7d0203a221a1b439e4ea948b30c80a55a7675cd638018a3e"
	},
	{
		"id": "61226b462405",
		"ts": "2026-08-20T22:22:18.596Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 607190.73,
		"hash": "61226b46240563471d7c66c475b273db5b6c29200b136365c71458f64f9c6efc"
	},
	{
		"id": "5d0229f7be35",
		"ts": "2026-08-20T22:22:18.916Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4044480.57,
		"hash": "5d0229f7be358e60873a7c6ebe5489483c0f90bb219a6485d381db4fd8257ca0"
	},
	{
		"id": "2a9dc62631bd",
		"ts": "2026-08-20T22:22:19.139Z",
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
		"liquidityUsd": 439022.53,
		"hash": "2a9dc62631bdcf0e92a7694b2134494f794065bbb7b6d90d469530170508d204"
	},
	{
		"id": "28c957f7f666",
		"ts": "2026-08-20T22:22:19.364Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1733167.53,
		"hash": "28c957f7f666ecf63c587d21204916840502b95c859b85f1e69de1fff1a2b787"
	},
	{
		"id": "ed7e706fe891",
		"ts": "2026-08-20T22:22:19.580Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11073412.98,
		"hash": "ed7e706fe8915890acc90d9543372c5c66387a94b7b86782ec1955d904ad3574"
	},
	{
		"id": "09bd57badb31",
		"ts": "2026-08-20T22:22:19.796Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 318672.14,
		"hash": "09bd57badb312bd928e4da9026857fb5ca855cbb6f4912587218a1a4f8b635e1"
	},
	{
		"id": "141f5ff11e4e",
		"ts": "2026-08-20T22:22:20.021Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 840201.97,
		"hash": "141f5ff11e4e8a8a220e72acebacaa033d8053cbfa6350030903698143555b03"
	},
	{
		"id": "ab48cdbdca92",
		"ts": "2026-08-20T22:22:20.246Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 686370.05,
		"hash": "ab48cdbdca925262b7ff9149967e7a556154a04d3441d8edb0b1de90f28fa273"
	},
	{
		"id": "0c32469e37fb",
		"ts": "2026-08-20T21:23:29.687Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112222476.51,
		"hash": "0c32469e37fb3d1be15c016261b89451daac62f1136359c40543a81b480e33f1"
	},
	{
		"id": "bbb0cb97fd22",
		"ts": "2026-08-20T21:23:29.997Z",
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
		"liquidityUsd": 16081996.54,
		"hash": "bbb0cb97fd222688c250ee3518afb7c9af81228ca3337011f282027d52dbfc05"
	},
	{
		"id": "e755c320d698",
		"ts": "2026-08-20T21:23:30.459Z",
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
		"liquidityUsd": 870791.58,
		"hash": "e755c320d69879866ce46fc3f136fe2fe27a116e7fab84c4d04ad69a86aa5e37"
	},
	{
		"id": "d84544eda4bc",
		"ts": "2026-08-20T21:23:30.943Z",
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
		"liquidityUsd": 28259326.44,
		"hash": "d84544eda4bc525616856974a8e8989aa3e852d269dbd19ab4c15eb927baf932"
	},
	{
		"id": "8f45a03b87c1",
		"ts": "2026-08-20T21:23:31.176Z",
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
		"liquidityUsd": 3220618.42,
		"hash": "8f45a03b87c1bdb74c4743ba70575d5459b9f085414c67e6f081bb521321b7ed"
	},
	{
		"id": "71bbb3376c49",
		"ts": "2026-08-20T21:23:31.428Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1088465.22,
		"hash": "71bbb3376c49dd4ae30898f3bdbf584f17e6ec485dccdb2b3d58dc21fc5cdc09"
	},
	{
		"id": "ced066e4b82f",
		"ts": "2026-08-20T21:23:31.683Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152698.98,
		"hash": "ced066e4b82f6e2947bf72d79c330bc7f32691a158b97b15e03ca2c77798dfed"
	},
	{
		"id": "a8afd6fcab45",
		"ts": "2026-08-20T21:23:31.963Z",
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
		"liquidityUsd": 1602665.59,
		"hash": "a8afd6fcab456b57f717d1e53bc2ba41bd1a74633bbfda8689e7b36d638439b2"
	},
	{
		"id": "27de74f6d8fe",
		"ts": "2026-08-20T21:23:32.267Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 844477.97,
		"hash": "27de74f6d8fe36052480197a12071dae7e119af20a17cf0d7a72181895a82aa5"
	},
	{
		"id": "515bfa798087",
		"ts": "2026-08-20T21:23:32.525Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3095729.19,
		"hash": "515bfa79808733cc8671f2226f1ee79f9a8169524adc8ae9b5e7171588f93e33"
	},
	{
		"id": "d4d8da7e5390",
		"ts": "2026-08-20T21:23:32.738Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4349001.98,
		"hash": "d4d8da7e53907e9640d68f595d366cb8a857c683da347400c68cbdd1ee1951bb"
	},
	{
		"id": "839fb633ee3c",
		"ts": "2026-08-20T21:23:32.975Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 595060.79,
		"hash": "839fb633ee3c3e9eb93507433548a43f4c621b9751b84034ddf2576665e1a1d9"
	},
	{
		"id": "4db53d990b19",
		"ts": "2026-08-20T21:23:33.215Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4056478.53,
		"hash": "4db53d990b197ece70eb31548ae59a3c7f4366dafc609485addef3f624f50af4"
	},
	{
		"id": "9b276838af39",
		"ts": "2026-08-20T21:23:33.428Z",
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
		"liquidityUsd": 436711.36,
		"hash": "9b276838af39ae4aa8bb2b18b63c7cfcf24150483dd88c477efe94698cd87c53"
	},
	{
		"id": "c3899857a657",
		"ts": "2026-08-20T21:23:33.667Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11124683.98,
		"hash": "c3899857a6576c6842f7d97aa2c8a64f71c1d0f836e6f225adad767dfccc667b"
	},
	{
		"id": "dc042badc736",
		"ts": "2026-08-20T21:23:33.904Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1735802.1,
		"hash": "dc042badc7365b1f0e0c8c6835309b033bb8ea904ea208ba76265dae7329d74c"
	},
	{
		"id": "9e3602385cb9",
		"ts": "2026-08-20T21:23:34.122Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 689373.36,
		"hash": "9e3602385cb910539943b8afc6c5934c2b683ff56a49f15fad5967cf9b588ca5"
	},
	{
		"id": "8f85861f1a7f",
		"ts": "2026-08-20T21:23:34.363Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 839567.02,
		"hash": "8f85861f1a7fbe71e24f2c2463967c1d587b70f06df0be835fa25e0fc06e0260"
	},
	{
		"id": "b2df53544fb8",
		"ts": "2026-08-20T21:23:34.601Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 268453.03,
		"hash": "b2df53544fb8710c173a7c67c39b1069dd20b3845e6e340d987fc56f2a0b3671"
	},
	{
		"id": "48220bf73241",
		"ts": "2026-08-20T20:23:02.039Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112133147.66,
		"hash": "48220bf7324191f2e7a72bac3573705b55c3617c4eb1436d250700107d49c482"
	},
	{
		"id": "211092bbef05",
		"ts": "2026-08-20T20:23:02.386Z",
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
		"liquidityUsd": 16327297.58,
		"hash": "211092bbef05ad93ddcfb900ef3adeee5825b60f769d8b6984055f25f4d7735e"
	},
	{
		"id": "b47344d79366",
		"ts": "2026-08-20T20:23:02.573Z",
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
		"liquidityUsd": 869303.37,
		"hash": "b47344d793667a96723f9535e20b2aec102f3e2a19f2d78464e2b43761522255"
	},
	{
		"id": "18f9516066b6",
		"ts": "2026-08-20T20:23:02.795Z",
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
		"liquidityUsd": 28176429.07,
		"hash": "18f9516066b6577e5cd092e52d8ae56417c33fdb0a4f849399fec1ab1e056d1a"
	},
	{
		"id": "1d8048c67a5f",
		"ts": "2026-08-20T20:23:03.000Z",
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
		"liquidityUsd": 3218096.21,
		"hash": "1d8048c67a5fa622fe5c4328b5cff4a9f453d5aa1fca77faa7189c92c5096f0f"
	},
	{
		"id": "9915ae322a99",
		"ts": "2026-08-20T20:23:03.217Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1092924.29,
		"hash": "9915ae322a99fb492838b8cb738fe83597a7f454bfd8e5399651d57d0f65a1d4"
	},
	{
		"id": "648264df36d5",
		"ts": "2026-08-20T20:23:03.413Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152698.91,
		"hash": "648264df36d57dd91d04a0cab95e08cc8128c0ff9375cb589fcf4430266eb64c"
	},
	{
		"id": "c45d3e5f837f",
		"ts": "2026-08-20T20:23:03.615Z",
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
		"liquidityUsd": 1604116.67,
		"hash": "c45d3e5f837f7bf63b0c02d364857c959405c9f7bcd98a14b4c84d802aa932ed"
	},
	{
		"id": "a67f264362c3",
		"ts": "2026-08-20T20:23:03.800Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 809729.48,
		"hash": "a67f264362c3fd17120ec81e685c509113b2af1b302c5581cc313c440edf41eb"
	},
	{
		"id": "d5f2dac95bc5",
		"ts": "2026-08-20T20:23:04.268Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3060719.35,
		"hash": "d5f2dac95bc5f245dcf4157ef42c27ac6f89f0b9c717e8d0d7b1d8a26b891256"
	},
	{
		"id": "4f838785dead",
		"ts": "2026-08-20T20:23:04.465Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4399615.8,
		"hash": "4f838785deadf5bc4909a3bb9ff057930ca553b3a98a5932ac6931021f9848fe"
	},
	{
		"id": "3ec95a6710f7",
		"ts": "2026-08-20T20:23:04.716Z",
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
		"liquidityUsd": 450279.94,
		"hash": "3ec95a6710f7aed2c36f982e107244d2b22fa1cfee2fb813eede49db1aa089f5"
	},
	{
		"id": "8aa29fa92624",
		"ts": "2026-08-20T20:23:04.888Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 598100.34,
		"hash": "8aa29fa926248907d23affd34e97d5fdf019347865c6805f918000fcfd0cb193"
	},
	{
		"id": "e86f09afc5da",
		"ts": "2026-08-20T20:23:05.074Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4060053.42,
		"hash": "e86f09afc5daa39dec650a5e44d45504f0c74778d07fefad04dda3115a45f19a"
	},
	{
		"id": "d66e7f949ed6",
		"ts": "2026-08-20T20:23:05.268Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1735345.39,
		"hash": "d66e7f949ed6e5d1e4264341e87c312eeb348faf20ba2faaf462c8b7fa2a1b77"
	},
	{
		"id": "aef6cb82324d",
		"ts": "2026-08-20T20:23:05.458Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11139611.19,
		"hash": "aef6cb82324dec36ad8c7a9a762aac1218ebf18af4430f1d88d038f90c1367b1"
	},
	{
		"id": "d555c3a4dc49",
		"ts": "2026-08-20T20:23:05.653Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 692816.59,
		"hash": "d555c3a4dc49ab79d052bdb9248bcb652b3bd764fe5abc80841a00b70b1b05e3"
	},
	{
		"id": "c09172c053e7",
		"ts": "2026-08-20T20:23:05.862Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 853360.45,
		"hash": "c09172c053e7140c7820d45f9a2c08be0cc774a67e9944eafc26e809f364a060"
	},
	{
		"id": "92a87486c45f",
		"ts": "2026-08-20T19:27:31.667Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112159474.81,
		"hash": "92a87486c45fb5be9ec0f697847e31acb9ce5996cdbb02a19ae27dfb357d4291"
	},
	{
		"id": "72b719fd5b4c",
		"ts": "2026-08-20T19:27:31.925Z",
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
		"liquidityUsd": 13989843.45,
		"hash": "72b719fd5b4c87728a76f180c0309b50640a47cdc55a6bcb0c771670aff791b5"
	},
	{
		"id": "83b2094f42ea",
		"ts": "2026-08-20T19:27:32.214Z",
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
		"liquidityUsd": 868748.9,
		"hash": "83b2094f42ea8863bcdb49164c2970ccbe7353e539181f2d34b640fdaf7f6530"
	},
	{
		"id": "1aa57ec81168",
		"ts": "2026-08-20T19:27:32.695Z",
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
		"liquidityUsd": 28158144.77,
		"hash": "1aa57ec811680d624f34a39ce983cac7d30ef0ee043b890de3df3f2357765833"
	},
	{
		"id": "2acae8ad95f1",
		"ts": "2026-08-20T19:27:32.944Z",
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
		"liquidityUsd": 3231093.56,
		"hash": "2acae8ad95f1c8332436d569316078051d9f629e2284fb60b7a330376044921a"
	},
	{
		"id": "dbb1f5f5c1dc",
		"ts": "2026-08-20T19:27:33.198Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1087387.81,
		"hash": "dbb1f5f5c1dc95cc02d91bca914371b6d9cf053b33f7ca311df6cdf7f4106ca8"
	},
	{
		"id": "3c2808e61c5e",
		"ts": "2026-08-20T19:27:33.448Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152699.23,
		"hash": "3c2808e61c5efa8e48d901c1a5221d405e4cbc7753ed161abe41054821be4841"
	},
	{
		"id": "1c709cbeaaaf",
		"ts": "2026-08-20T19:27:33.716Z",
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
		"liquidityUsd": 1610435.56,
		"hash": "1c709cbeaaaf556374e26b12d89f2860097f02c52ec0fb689c8d9b608a616d77"
	},
	{
		"id": "0565d42687b8",
		"ts": "2026-08-20T19:27:34.010Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 860154.11,
		"hash": "0565d42687b8d08045a72ffe3814524a9d0c0f48f31c92c377f98dab1f0093f0"
	},
	{
		"id": "2db4c854acf2",
		"ts": "2026-08-20T19:27:34.267Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3080377.54,
		"hash": "2db4c854acf249a597840b5ea66f6a84a0a6ae9c33fd66467291141b34ec0a1d"
	},
	{
		"id": "baa35632b7c8",
		"ts": "2026-08-20T19:27:34.505Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4081052.63,
		"hash": "baa35632b7c84af2b0a3467d19750d335f218c5c361a7ebf8f439b4e38742177"
	},
	{
		"id": "b596aa3f938a",
		"ts": "2026-08-20T19:27:34.742Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4389823.31,
		"hash": "b596aa3f938a3fef4afbde2a3486df676939b7573759f41121ce7d0c15d6efe4"
	},
	{
		"id": "06b43a29b4c5",
		"ts": "2026-08-20T19:27:34.978Z",
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
		"liquidityUsd": 448986.71,
		"hash": "06b43a29b4c56ef010e2a8ba093414253411424f1560aa0d7cfba5dcf30c3743"
	},
	{
		"id": "d8f210347af7",
		"ts": "2026-08-20T19:27:35.226Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 599484.78,
		"hash": "d8f210347af7cb58c296d533cea98e943e605544b9c2971a3899c3d27cf33bf5"
	},
	{
		"id": "8073a97780c2",
		"ts": "2026-08-20T19:27:35.465Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1736013.53,
		"hash": "8073a97780c2c5521f2c7348f89be3a698a5057bad7804c0569668fbb019f39c"
	},
	{
		"id": "0496bb3bea19",
		"ts": "2026-08-20T19:27:35.691Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 695926.61,
		"hash": "0496bb3bea19c3903e492df4e6ad1bba5465ab49e3d4d3915d927fac2662377a"
	},
	{
		"id": "de7ee6ea3fbd",
		"ts": "2026-08-20T19:27:35.930Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 859610.48,
		"hash": "de7ee6ea3fbdc1748e456447410507233b8dba96d44603394701f3cfc3e10a70"
	},
	{
		"id": "b0216060778e",
		"ts": "2026-08-20T19:27:36.167Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11147877.66,
		"hash": "b0216060778e586c8b8c91098088efdec2473867767b0776362c4b12f759a9ec"
	},
	{
		"id": "344f57b4e770",
		"ts": "2026-08-20T18:33:12.299Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112100367.81,
		"hash": "344f57b4e7707abd1ce2ba4a3acbd25c3b8d5edd0a8bf5247a4ca2d3a8031ada"
	},
	{
		"id": "41342c70098d",
		"ts": "2026-08-20T18:33:12.636Z",
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
		"liquidityUsd": 13404699.13,
		"hash": "41342c70098d4c7848900b4ada86a39db71ee21ab1a57ca3568934c0f564c0b9"
	},
	{
		"id": "b6edbb429ddd",
		"ts": "2026-08-20T18:33:12.827Z",
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
		"liquidityUsd": 875105.33,
		"hash": "b6edbb429dddd938a76b9b69db3f8a432326eaed40a81173c4f4930b82e77ac1"
	},
	{
		"id": "5428b32aeb8e",
		"ts": "2026-08-20T18:33:13.012Z",
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
		"liquidityUsd": 28255230.54,
		"hash": "5428b32aeb8ebee4b93f9525ee76ddd91bf2298b891b72efb7b4405a373f5b8f"
	},
	{
		"id": "762cac3aa6a1",
		"ts": "2026-08-20T18:33:13.238Z",
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
		"liquidityUsd": 3234719.64,
		"hash": "762cac3aa6a13fcdc6693359d2d737da29cf382316293064043c279cfab297d4"
	},
	{
		"id": "bc0ecbcd7249",
		"ts": "2026-08-20T18:33:13.455Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1100214.89,
		"hash": "bc0ecbcd72492e83263fbb6b7acd51b2dfad2b7d179ff53336232a709ec801e8"
	},
	{
		"id": "547b5b9e5e21",
		"ts": "2026-08-20T18:33:14.094Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152699.19,
		"hash": "547b5b9e5e218ef562df1a675e69bdb50383a32a135b1955a0ba19b0cf829fd5"
	},
	{
		"id": "56ecff47c5e3",
		"ts": "2026-08-20T18:33:14.293Z",
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
		"liquidityUsd": 1605397.6,
		"hash": "56ecff47c5e32d90f5b0f3e060776c0b7f2a3cab580974e10574e9e82e045e9c"
	},
	{
		"id": "a6bf90dbd2be",
		"ts": "2026-08-20T18:33:14.568Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 881101.81,
		"hash": "a6bf90dbd2be6784c53c8421a175f79d397d03c6386d9844e7effbdea5c5ebf9"
	},
	{
		"id": "38f5c413c6a1",
		"ts": "2026-08-20T18:33:14.766Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3102695.51,
		"hash": "38f5c413c6a1abcbc70023a323f68b36ebeb71c1e5e1656e1dbe61005d5d8577"
	},
	{
		"id": "daef3e7f7e17",
		"ts": "2026-08-20T18:33:14.949Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4063706.85,
		"hash": "daef3e7f7e175246435935c011a721aef80712d6427898b663dd879a1cb950c7"
	},
	{
		"id": "9f882a8f4950",
		"ts": "2026-08-20T18:33:15.151Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4616144.07,
		"hash": "9f882a8f49504bc6178536d2ceed50b08e795ddb26d5c01a3277f64c64cd25be"
	},
	{
		"id": "95578184f28d",
		"ts": "2026-08-20T18:33:15.341Z",
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
		"liquidityUsd": 435610.7,
		"hash": "95578184f28d44798276592331070c802024ebe514731bfa85e8b51096aa76e7"
	},
	{
		"id": "ea17235ad94b",
		"ts": "2026-08-20T18:33:15.520Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 617157.81,
		"hash": "ea17235ad94b6b39fcd73214267dc7c2d0f0e053439dcc6b8c00c0ed2445469d"
	},
	{
		"id": "c48adc470705",
		"ts": "2026-08-20T18:33:15.699Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1738415.37,
		"hash": "c48adc4707050d429c214afd6552d72487fc31123b240c7accc6ffd7337c44ec"
	},
	{
		"id": "a337308eb112",
		"ts": "2026-08-20T18:33:15.920Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 698174.01,
		"hash": "a337308eb1125e20bff0f42778d8a74f02d8c5c43dd03ce19af2b74e6ffaf985"
	},
	{
		"id": "2ba5bdc5dbd0",
		"ts": "2026-08-20T18:33:16.108Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11085924.96,
		"hash": "2ba5bdc5dbd0a9b2401fe6de3d2a6ec2e22be236027a6fa228643d71acd1a093"
	},
	{
		"id": "2ea0a2e32576",
		"ts": "2026-08-20T18:33:16.289Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 862403.4,
		"hash": "2ea0a2e32576a785dd78eaa817062867f54ef41a450b81a939581d8d74eaf8a6"
	},
	{
		"id": "cd571da52e3f",
		"ts": "2026-08-20T17:24:51.564Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112175859.39,
		"hash": "cd571da52e3f4fe843167635d726d4619763a1de675920808eda7bb2a4610eab"
	},
	{
		"id": "808c2c38d11f",
		"ts": "2026-08-20T17:24:51.927Z",
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
		"liquidityUsd": 15972875.33,
		"hash": "808c2c38d11f82e73dd7ad9ce7dc8a8164fa895e170e31f290d21ec14d092fe5"
	},
	{
		"id": "04802768de1d",
		"ts": "2026-08-20T17:24:52.142Z",
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
		"liquidityUsd": 876543.07,
		"hash": "04802768de1db3284f92608939c477789beee33cf926a3399157abef6d273cea"
	},
	{
		"id": "b82ad818344d",
		"ts": "2026-08-20T17:24:52.358Z",
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
		"liquidityUsd": 28377268.84,
		"hash": "b82ad818344d89592a88b4612a26ab804d97ceded7414805f04078716de7f9d4"
	},
	{
		"id": "a2da94ddc5c4",
		"ts": "2026-08-20T17:24:52.580Z",
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
		"liquidityUsd": 3255346.42,
		"hash": "a2da94ddc5c4d30e2cc452dbdd3febd5cfbfb34eef8d175a9b97e3b0a186122a"
	},
	{
		"id": "b8a9af44da69",
		"ts": "2026-08-20T17:24:52.787Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1079714.72,
		"hash": "b8a9af44da69f63c64f063fa733b9db6dfd33a972510ac0313fd3d98538cf0b0"
	},
	{
		"id": "c2b2ef4b048c",
		"ts": "2026-08-20T17:24:53.006Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152699.35,
		"hash": "c2b2ef4b048c54a6e9732c9a729500d3ed7ab08b822acba0cf34a4a10acd273a"
	},
	{
		"id": "0580272ff312",
		"ts": "2026-08-20T17:24:53.239Z",
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
		"liquidityUsd": 4069834.33,
		"hash": "0580272ff312c6cbd67f2fdba8820f596a480617453209ad7fb235b8558047da"
	},
	{
		"id": "7bc1b35f6da4",
		"ts": "2026-08-20T17:24:53.680Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 903022.2,
		"hash": "7bc1b35f6da48dfe54910f37e56274cea3480d4c61b9c742ea567384944d2d4e"
	},
	{
		"id": "86e3d176de01",
		"ts": "2026-08-20T17:24:53.887Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3108277.47,
		"hash": "86e3d176de0137f6ececd678f5b10195571aa0adc9d283b8ada8efc4e33867d3"
	},
	{
		"id": "dcde9412a70c",
		"ts": "2026-08-20T17:24:54.242Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4142717.73,
		"hash": "dcde9412a70cc1dff33948935421a59bc0d8ac7c3720713b5f88c9442e91ef17"
	},
	{
		"id": "30be3e61191f",
		"ts": "2026-08-20T17:24:54.446Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4328909.77,
		"hash": "30be3e61191fc55e5e0a9ad8a4315807851daad6de8f6544e706aadad0c946dc"
	},
	{
		"id": "90c20470a99c",
		"ts": "2026-08-20T17:24:54.653Z",
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
		"liquidityUsd": 449614.97,
		"hash": "90c20470a99c9c179379ca14f4a76a910b212dfe392a27bebb3438a7974687db"
	},
	{
		"id": "2bb8348687b1",
		"ts": "2026-08-20T17:24:54.859Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 593659.48,
		"hash": "2bb8348687b1f0f5f0f7fbf31474721f41de7e8bef4292ba29fd5c91bf741748"
	},
	{
		"id": "1f6fc0e4517b",
		"ts": "2026-08-20T17:24:55.076Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 701436.13,
		"hash": "1f6fc0e4517b29dceaf1451cf1f0d0f19faa6800e0561f6b09a7f6f334ee9892"
	},
	{
		"id": "df8e19d0c232",
		"ts": "2026-08-20T17:24:55.415Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1744152.12,
		"hash": "df8e19d0c2320e23390b64260860ecb4f36f21b3c40042c5022cf76e8001eb9e"
	},
	{
		"id": "ea695506bbc4",
		"ts": "2026-08-20T17:24:55.617Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 860278.13,
		"hash": "ea695506bbc419eaa8ed1ff09d92707b8dc96639d234fec9efd7ec4aebd43136"
	},
	{
		"id": "869d50bed351",
		"ts": "2026-08-20T17:24:55.840Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 337294.76,
		"hash": "869d50bed3510483b22ea4308425eb4724eb7b2d9309de917190c540c9ee317f"
	},
	{
		"id": "edeaf1ae5725",
		"ts": "2026-08-20T16:29:58.424Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112164063.33,
		"hash": "edeaf1ae57258804b9cb3e4e24e20274b877ef52a965adf7e406959bd263fb39"
	},
	{
		"id": "b7634a1f9275",
		"ts": "2026-08-20T16:29:58.936Z",
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
		"liquidityUsd": 15531759.18,
		"hash": "b7634a1f9275d74226b01a48c6a2c4c21652d83fd1fc2d885b31d00b6882c5fd"
	},
	{
		"id": "81296c3913da",
		"ts": "2026-08-20T16:29:59.216Z",
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
		"liquidityUsd": 868419.78,
		"hash": "81296c3913da44f7e54f3221297667c8c8993f774947b8627c00c2022fc97324"
	},
	{
		"id": "57f5abda1299",
		"ts": "2026-08-20T16:29:59.483Z",
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
		"liquidityUsd": 28381325.07,
		"hash": "57f5abda12992b8226ef016367183b25836e417dc97d5b03196e0ae5680583ce"
	},
	{
		"id": "4678d2ffd6ca",
		"ts": "2026-08-20T16:29:59.760Z",
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
		"liquidityUsd": 3244189.98,
		"hash": "4678d2ffd6ca3618fbd31ca3b8503e72056bfcb6c1aa1b7b51a0665e14058e25"
	},
	{
		"id": "ac64d7419848",
		"ts": "2026-08-20T16:30:00.028Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1074563.05,
		"hash": "ac64d7419848920be08f678bebd462199181e6ac36922f3c0633060541fd3667"
	},
	{
		"id": "a7862570811d",
		"ts": "2026-08-20T16:30:00.333Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152699.37,
		"hash": "a7862570811d25fec39f5028dce012bc459b77c0d74f93ca797894d5886409cd"
	},
	{
		"id": "4ed2659dac65",
		"ts": "2026-08-20T16:30:00.611Z",
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
		"liquidityUsd": 3845721.26,
		"hash": "4ed2659dac658fb378a641aaea608ddba8ab1d2841948bd1ed1bfb709954683c"
	},
	{
		"id": "dd8126439292",
		"ts": "2026-08-20T16:30:00.897Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 796489.2,
		"hash": "dd812643929254bbfb39ac32c74633c3227daf34e4b1a411cd99429c9b39098e"
	},
	{
		"id": "7dab6749c88e",
		"ts": "2026-08-20T16:30:02.209Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3120206.57,
		"hash": "7dab6749c88e40b20c139c2c415e5ffb2969b6518ed4c53c0143b43af742f839"
	},
	{
		"id": "7b4b36a07d7e",
		"ts": "2026-08-20T16:30:02.849Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4113481.92,
		"hash": "7b4b36a07d7ec1343ec1fb94b494195f5e09cc0bf1be845ade966aecbe9f93f6"
	},
	{
		"id": "bd96393edd80",
		"ts": "2026-08-20T16:30:03.287Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 448666.88,
		"hash": "bd96393edd80a1741881e2e130db1d711ec33892eb9391a6470f3ec438bcd3ec"
	},
	{
		"id": "6863619435e1",
		"ts": "2026-08-20T16:30:05.297Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 566222.24,
		"hash": "6863619435e171518b6823280bd96955940cff1b6fcb2237dc66ba20afc96730"
	},
	{
		"id": "d19d26a6b287",
		"ts": "2026-08-20T16:30:06.165Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4262719.97,
		"hash": "d19d26a6b2870e6f207edcf75da81f83422f1d2eb1dd66d5c71a3e3e73764ab1"
	},
	{
		"id": "4d4bd2462e51",
		"ts": "2026-08-20T16:30:06.472Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1732309.13,
		"hash": "4d4bd2462e510a458e4f31c922bfb89b992c446d7fc95ab02e23cddfe2d67a0f"
	},
	{
		"id": "d2b87b6e1bf6",
		"ts": "2026-08-20T16:30:06.744Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 701478.23,
		"hash": "d2b87b6e1bf67f96d71d7e69cb7e2512085a086a721103229f8c5c0ff91df0bb"
	},
	{
		"id": "b99ea573dfaf",
		"ts": "2026-08-20T16:30:06.997Z",
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
		"liquidityUsd": 562677.9,
		"hash": "b99ea573dfafbe2e347db798287b49067068efd2b6d8d62d3e287a718997c3fb"
	},
	{
		"id": "f64bd69ba77f",
		"ts": "2026-08-20T16:30:07.253Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 864857.64,
		"hash": "f64bd69ba77f12465ee7edb98433d1fb28156730adf74fbacacbb3135738a034"
	},
	{
		"id": "9dfe71ef28be",
		"ts": "2026-08-20T15:29:07.233Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111995441.55,
		"hash": "9dfe71ef28be18af88576dbc23adf48ccd3d0b9797e49933aab3ac9de116d8fc"
	},
	{
		"id": "cef355199e79",
		"ts": "2026-08-20T15:29:07.672Z",
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
		"liquidityUsd": 13518240.91,
		"hash": "cef355199e7982ad488c276aad3d9c0cbf8384733d2986253950a850165c1a8f"
	},
	{
		"id": "60fd855b97fd",
		"ts": "2026-08-20T15:29:08.119Z",
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
		"liquidityUsd": 845129.41,
		"hash": "60fd855b97fdcd7c3ba417e289a1c538d3de981def952f5b2855e4984642e5fe"
	},
	{
		"id": "ca9ad756bad9",
		"ts": "2026-08-20T15:29:08.550Z",
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
		"liquidityUsd": 28319941.21,
		"hash": "ca9ad756bad97e9191eb4e401aecf358fd33dde796d31d3f193d6a90ab8077f8"
	},
	{
		"id": "270400659146",
		"ts": "2026-08-20T15:29:08.870Z",
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
		"liquidityUsd": 3214336.5,
		"hash": "270400659146c4a19f03caf4bae49a43b16cdb7e145603d5e20717c7939ce8ac"
	},
	{
		"id": "a0ef2b08fefa",
		"ts": "2026-08-20T15:29:09.147Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1065050.35,
		"hash": "a0ef2b08fefa3f74ad00bf36ac6d92978c7fdd9f2e3babf9e6f48e8eb1496ef0"
	},
	{
		"id": "130ed72c2688",
		"ts": "2026-08-20T15:29:09.404Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152699.41,
		"hash": "130ed72c268812ce930f924408c66da3c3a70adf4a5fa4d8766cfd1d0d5e22ea"
	},
	{
		"id": "023bf4f80cb7",
		"ts": "2026-08-20T15:29:09.646Z",
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
		"liquidityUsd": 3808714.98,
		"hash": "023bf4f80cb73eaf87b4fef9d3761f5f21d8880025ad2b2696cf031662d340aa"
	},
	{
		"id": "ca6c25788786",
		"ts": "2026-08-20T15:29:09.912Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 806227.02,
		"hash": "ca6c2578878666f2bc4cbb5db124a17fc607da5c6176029bf5b76c34d2c6fe59"
	},
	{
		"id": "f381dd259a07",
		"ts": "2026-08-20T15:29:10.315Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4065657.1,
		"hash": "f381dd259a07fb3ac5b0bbcfebe02738b5d99f28a2571053c12f5057f74b524f"
	},
	{
		"id": "538c030e8b81",
		"ts": "2026-08-20T15:29:10.553Z",
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
		"liquidityUsd": 3050213.48,
		"hash": "538c030e8b81733d74627cad5254a015ff687e6fe57621d1330af9a7941378a3"
	},
	{
		"id": "7885c0e1137a",
		"ts": "2026-08-20T15:29:10.782Z",
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
		"liquidityUsd": 439827.76,
		"hash": "7885c0e1137a4db770bcf7572992c7a44d8e91dd3c8f5b8e7ffb92f729ad6020"
	},
	{
		"id": "7d4cb8a41a26",
		"ts": "2026-08-20T15:29:11.011Z",
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
		"liquidityUsd": 4344373.31,
		"hash": "7d4cb8a41a2633c919dc9b58b984de564b6bc2035b309919530d804c8162d531"
	},
	{
		"id": "72d0c067a807",
		"ts": "2026-08-20T15:29:11.241Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 547439.58,
		"hash": "72d0c067a807289e754901b755f8cbb8b42cc432bbc05bb51806be6e25a59a6a"
	},
	{
		"id": "1c4ac7efc1eb",
		"ts": "2026-08-20T15:29:11.480Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 702276.31,
		"hash": "1c4ac7efc1eb379170867e68cd22c944441ec2ef774e176d5531b9c86abf945b"
	},
	{
		"id": "1bfcd23834bb",
		"ts": "2026-08-20T15:29:11.708Z",
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
		"liquidityUsd": 565769.2,
		"hash": "1bfcd23834bb8b89c32034215d113ed9ebbea8cf7bb0afa323809ca003d9fd0a"
	},
	{
		"id": "4232e6243818",
		"ts": "2026-08-20T15:29:11.935Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1690971.04,
		"hash": "4232e6243818a81ba93904111f9b26f6c483d10a9aec1c27265a5a5a83e23eb6"
	},
	{
		"id": "49d132270370",
		"ts": "2026-08-20T15:29:12.168Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 862904.17,
		"hash": "49d1322703706f83b6a7da5c086596f8923932a0a338e4b9417732a2206497eb"
	},
	{
		"id": "ba0fd565eca8",
		"ts": "2026-08-20T14:32:06.410Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111517289.56,
		"hash": "ba0fd565eca8f2b71b0054284b09387d3f915e72fe621754dc3ca5f7c5a0a0cd"
	},
	{
		"id": "3d2a4db97195",
		"ts": "2026-08-20T14:32:06.743Z",
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
		"liquidityUsd": 14059303.46,
		"hash": "3d2a4db97195426974281413ba346ae2b0b13f74db2c7ed2ad10f395ee08438c"
	},
	{
		"id": "59851def535b",
		"ts": "2026-08-20T14:32:06.952Z",
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
		"liquidityUsd": 846402.33,
		"hash": "59851def535be4a1e9427254ec7468a7379a877a8b741a6fa92b5633956040a3"
	},
	{
		"id": "b232611be223",
		"ts": "2026-08-20T14:32:07.164Z",
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
		"liquidityUsd": 28122862.51,
		"hash": "b232611be22339a3fa879d86c230b83bfbc3680791cb9914a437a00ac822bb59"
	},
	{
		"id": "0e042b0e94f6",
		"ts": "2026-08-20T14:32:07.358Z",
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
		"liquidityUsd": 3187145.71,
		"hash": "0e042b0e94f66f7dc0c22272597590112c44b62a6d0de42e2a97a892ea70c998"
	},
	{
		"id": "fe7ef872d752",
		"ts": "2026-08-20T14:32:07.555Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1054881.61,
		"hash": "fe7ef872d752f4dcb57351d02298a1b162b47c1ebda5bac5d0df3e32216fa9c1"
	},
	{
		"id": "1cfd80809a84",
		"ts": "2026-08-20T14:32:07.759Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152699.41,
		"hash": "1cfd80809a8415d090cb6c7379d210f1b18fa8988f09de17d6b74c6e14f30f82"
	},
	{
		"id": "a9296d123ad0",
		"ts": "2026-08-20T14:32:07.954Z",
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
		"liquidityUsd": 3723561.41,
		"hash": "a9296d123ad01cf4778121c42bd8ca23f6cde0eb5772c789505aec6e0ca8fedc"
	},
	{
		"id": "77a0a21e9563",
		"ts": "2026-08-20T14:32:08.158Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 759510.01,
		"hash": "77a0a21e95637308af4dffe74bc4b4265eb6e779276e0740f31e6bb7e7734d55"
	},
	{
		"id": "5f23e83e3edb",
		"ts": "2026-08-20T14:32:08.353Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4042711.45,
		"hash": "5f23e83e3edb0ef8436e8057f8e80b80a04bbe82c3e8ee2adef8f80cd5d865af"
	},
	{
		"id": "94e24d5f7b50",
		"ts": "2026-08-20T14:32:08.562Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3048087.66,
		"hash": "94e24d5f7b50195e443b1f3dffafe50f1c627e15e678eb26b70b4fb016ca150b"
	},
	{
		"id": "de8c73d90045",
		"ts": "2026-08-20T14:32:08.755Z",
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
		"liquidityUsd": 427618.16,
		"hash": "de8c73d9004507fd4d3b287f6f3f630db069dcf7c30a8a76898252cd10ed0bbc"
	},
	{
		"id": "aa87835ec33b",
		"ts": "2026-08-20T14:32:09.205Z",
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
		"liquidityUsd": 553819.72,
		"hash": "aa87835ec33b14626142eec917e243bf9407b1538368bf1420295c191eed7b32"
	},
	{
		"id": "f94c5d31cf3a",
		"ts": "2026-08-20T14:32:09.731Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4350588.43,
		"hash": "f94c5d31cf3a78554d30bfdcd4d43e190c053ec7d8eff39cd8ca907e9e4061e5"
	},
	{
		"id": "bf1f42d5088a",
		"ts": "2026-08-20T14:32:09.925Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 541956.29,
		"hash": "bf1f42d5088a53be74f38205397ae584bbb9b254449d5cd2d011f348054be64e"
	},
	{
		"id": "f5f4c8cb9662",
		"ts": "2026-08-20T14:32:10.117Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 689067.99,
		"hash": "f5f4c8cb9662c481e31ef8888ee3ce574c13bb58e24112e5a591a63d7631d8c3"
	}
]
