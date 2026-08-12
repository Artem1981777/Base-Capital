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
	"updatedAt": "2026-08-12T20:00:36.785Z",
	"tokensScored": 9525,
	"verdictsIssued": 9525,
	"safe": 8294,
	"risky": 702,
	"likelyRug": 529,
	"ticks": 576
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "84187e954ced",
		"ts": "2026-08-12T20:00:32.998Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112152296.51,
		"hash": "84187e954ced4e0f133259aab57ce26abaa2f6db2f167bf327c37c4caed5d5d1"
	},
	{
		"id": "f5e44451206c",
		"ts": "2026-08-12T20:00:33.249Z",
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
		"liquidityUsd": 15179363.41,
		"hash": "f5e44451206c8a2ff7fc0786eff47fa1ce25778ce8ebd327b13d707731338b41"
	},
	{
		"id": "6cd95bc9086b",
		"ts": "2026-08-12T20:00:33.494Z",
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
		"liquidityUsd": 916417.73,
		"hash": "6cd95bc9086b308d7ab106e81533900ff06b9b2f56c37286442d0f6d7abefa17"
	},
	{
		"id": "f643a8dfee10",
		"ts": "2026-08-12T20:00:33.733Z",
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
		"liquidityUsd": 26822907.76,
		"hash": "f643a8dfee1051143030a260eb02e1513f99deec7482aec51229b7ffa2207d84"
	},
	{
		"id": "dc8b619bd755",
		"ts": "2026-08-12T20:00:33.992Z",
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
		"liquidityUsd": 4306639.85,
		"hash": "dc8b619bd755e2712f01ed2b8883e3ee7b1ef3b49f81b8293e5edbd1be5755d5"
	},
	{
		"id": "1cc3d153e284",
		"ts": "2026-08-12T20:00:34.249Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 899599.16,
		"hash": "1cc3d153e284a436e569948f3a3794c409e324a6b768cd9fd8bed1eecbd8e29f"
	},
	{
		"id": "1e02728954b1",
		"ts": "2026-08-12T20:00:34.492Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4465085.65,
		"hash": "1e02728954b1f35062ae3dce8c74e70a861ec7106736ec5a4aaecbdf3a6a92a5"
	},
	{
		"id": "3df50377ea8c",
		"ts": "2026-08-12T20:00:34.748Z",
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
		"liquidityUsd": 4384136.83,
		"hash": "3df50377ea8c01169b82eda891bb8af19833a5eb3648f0302d9306ab6c0c9f68"
	},
	{
		"id": "6c9f50c5c31c",
		"ts": "2026-08-12T20:00:34.989Z",
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
		"liquidityUsd": 945550.96,
		"hash": "6c9f50c5c31c6a6b45e3ac1082eda849ae15af9da2c37ed6d9e71c7539f7a3d3"
	},
	{
		"id": "de2a11b7f998",
		"ts": "2026-08-12T20:00:35.248Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4465085.65,
		"hash": "de2a11b7f99839ff2d0b58417ed913d883ff8a3612e53ec5bab7cafca2d58ff1"
	},
	{
		"id": "a04485e4bea2",
		"ts": "2026-08-12T20:00:35.468Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2425453.56,
		"hash": "a04485e4bea2e681c6a0dc8cfe90771eb590d66f63a769e65eb22473a7eba94b"
	},
	{
		"id": "4f9f818626e7",
		"ts": "2026-08-12T20:00:35.686Z",
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
		"liquidityUsd": 256731.5,
		"hash": "4f9f818626e7feaedbe0c69823bfde70955da9063fc687fb01557799e4711711"
	},
	{
		"id": "8966e7229a18",
		"ts": "2026-08-12T20:00:35.903Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4104474,
		"hash": "8966e7229a18d168fa19e1c78b0ec36fff1e444933af082ef04e6123734ba5f0"
	},
	{
		"id": "7e59274624b0",
		"ts": "2026-08-12T20:00:36.132Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 820831.94,
		"hash": "7e59274624b0c70ef717c20bd4b7cebad5a5fc94c06e93bbb0774a2608763452"
	},
	{
		"id": "f4e604c395f7",
		"ts": "2026-08-12T20:00:36.348Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1944816.8,
		"hash": "f4e604c395f7e0333b910425d32da0937d1b3ede362d7e4dd170a3dc31823875"
	},
	{
		"id": "46ecaeb23d4f",
		"ts": "2026-08-12T20:00:36.567Z",
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
		"liquidityUsd": 1185719.11,
		"hash": "46ecaeb23d4fa00137798eb4c7ee19a35ab1ffea8a6ce0fb060830e4b2c46aff"
	},
	{
		"id": "9d7098c17b60",
		"ts": "2026-08-12T20:00:36.784Z",
		"symbol": "EURC",
		"token": "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2317280.94,
		"hash": "9d7098c17b603fdb56b4adcae26a5386ee594f29779af8b6f4ec5e8a981e2bac"
	},
	{
		"id": "ebec0a870276",
		"ts": "2026-08-12T18:57:06.039Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112381989.59,
		"hash": "ebec0a87027684676dc6c584b84b220183aca643b954be6bfa620104c8a095b4"
	},
	{
		"id": "e423860ccc7f",
		"ts": "2026-08-12T18:57:06.373Z",
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
		"liquidityUsd": 17574092.82,
		"hash": "e423860ccc7f59010b5ca2c4159067f64b4e320e94fb066ea18d353ce2f7a174"
	},
	{
		"id": "9dcaa3497999",
		"ts": "2026-08-12T18:57:06.568Z",
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
		"liquidityUsd": 916417.73,
		"hash": "9dcaa3497999d901663c45a59db63faca80f407954380b216347dea9ee69d32c"
	},
	{
		"id": "ce8b4b17556e",
		"ts": "2026-08-12T18:57:06.752Z",
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
		"liquidityUsd": 26914106.64,
		"hash": "ce8b4b17556ef641e79313214f28fdb916e9f8c2eb8166c7adad64599b51cea8"
	},
	{
		"id": "e556e75ac4e5",
		"ts": "2026-08-12T18:57:06.937Z",
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
		"liquidityUsd": 4333310.82,
		"hash": "e556e75ac4e598bdf7a31688b749a4d42bf6a1f3b247eabd396d0e4e554cb073"
	},
	{
		"id": "935ea7f9830b",
		"ts": "2026-08-12T18:57:07.120Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 906995.32,
		"hash": "935ea7f9830b1c6bcc28c18bc3a9c31685de2d2184bd12038e569f918d3f7977"
	},
	{
		"id": "7260fb8d3cb0",
		"ts": "2026-08-12T18:57:07.306Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4426606.22,
		"hash": "7260fb8d3cb03e8f7cf6fda6700b1d0ec146020eca09dff33c7a42c75c788576"
	},
	{
		"id": "74bf8a6db680",
		"ts": "2026-08-12T18:57:07.509Z",
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
		"liquidityUsd": 4399801.55,
		"hash": "74bf8a6db680f7ebcbca87d81943e6472f732b8b33dfb881991274d19cdc8dfa"
	},
	{
		"id": "46469c65a49e",
		"ts": "2026-08-12T18:57:07.737Z",
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
		"liquidityUsd": 942258.04,
		"hash": "46469c65a49e115aaf34d0798ba1898449da8676eb20231c15f2744da46959c9"
	},
	{
		"id": "124b6b600703",
		"ts": "2026-08-12T18:57:07.940Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4428539.59,
		"hash": "124b6b600703a2a335c29aa23e1ac5cc41b03f9be70cc7b031a12849bab6d45e"
	},
	{
		"id": "1e28fa6f9cbb",
		"ts": "2026-08-12T18:57:08.125Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2453930.23,
		"hash": "1e28fa6f9cbb623503d43760410b5f988600fe816a4e9b2f07fccacba4e304be"
	},
	{
		"id": "6b1d7d00a76f",
		"ts": "2026-08-12T18:57:08.418Z",
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
		"liquidityUsd": 256852.25,
		"hash": "6b1d7d00a76fc33fdfed1303ad8c4f56bf2daa34f6d9aad4437efa4c9d4fa9b6"
	},
	{
		"id": "f3b1d7174dbd",
		"ts": "2026-08-12T18:57:08.602Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4125956.56,
		"hash": "f3b1d7174dbd335ff1638fbec78e3faf70e964e92f6d2bed8aa8bd05808d2a9e"
	},
	{
		"id": "9467966047bd",
		"ts": "2026-08-12T18:57:08.796Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 822654.18,
		"hash": "9467966047bd0d0fbe7d21c3cea38f4135fbf20266f7f5336b840dc63ac0d179"
	},
	{
		"id": "b41ecaad9472",
		"ts": "2026-08-12T18:57:08.980Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1906257.3,
		"hash": "b41ecaad94725ae9da428454807697c537a8496e3ef1146f0ade2bf681ef6daa"
	},
	{
		"id": "c2086e8791a4",
		"ts": "2026-08-12T18:57:09.167Z",
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
		"liquidityUsd": 1182533.29,
		"hash": "c2086e8791a45b9359d7d421d67ba1b248c82a4327b0a2de544d310a26a7fe04"
	},
	{
		"id": "0ec118658f72",
		"ts": "2026-08-12T18:57:09.353Z",
		"symbol": "EURC",
		"token": "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2330616.34,
		"hash": "0ec118658f72ddbc0d249e04889d1220376065bb852aab9e06376c49c1f242fc"
	},
	{
		"id": "5755b2db0a1a",
		"ts": "2026-08-12T17:55:21.209Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112394598.37,
		"hash": "5755b2db0a1a28740880acbfeed646b56b1c66f118a351b7901f99109c2d7c55"
	},
	{
		"id": "51a5ee866e01",
		"ts": "2026-08-12T17:55:21.659Z",
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
		"liquidityUsd": 16441560.51,
		"hash": "51a5ee866e01427df40b81bdb02a6bfd058898d8d8a66db1e9e6446bcf9e01b7"
	},
	{
		"id": "5f667bd9612c",
		"ts": "2026-08-12T17:55:21.898Z",
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
		"liquidityUsd": 916417.73,
		"hash": "5f667bd9612c5ba0419b7bf35c45f706241a8d268c34cc6f04747adc88535c50"
	},
	{
		"id": "aea6e3f1f07b",
		"ts": "2026-08-12T17:55:22.321Z",
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
		"liquidityUsd": 26932680.56,
		"hash": "aea6e3f1f07ba11115a9197833375ae5914d16d922a5ee3c898b042b16296271"
	},
	{
		"id": "b91574bfe0eb",
		"ts": "2026-08-12T17:55:22.565Z",
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
		"liquidityUsd": 4354508.43,
		"hash": "b91574bfe0eb8cdadb5522b15aec8a3078e06f93f22dd845c84f9ca9541d7425"
	},
	{
		"id": "c1a3d5e5141f",
		"ts": "2026-08-12T17:55:22.828Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 906995.32,
		"hash": "c1a3d5e5141fe294c58ab76857582017726619a33ffe89989c4a9422e130955a"
	},
	{
		"id": "a5263f066fcf",
		"ts": "2026-08-12T17:55:23.060Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4496524.07,
		"hash": "a5263f066fcff1d97ee31559acaccaf8864318ca01c11b33a6ff653478131af3"
	},
	{
		"id": "e62a8b7ee685",
		"ts": "2026-08-12T17:55:23.282Z",
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
		"liquidityUsd": 4403555.47,
		"hash": "e62a8b7ee685d3db397bb4706f43938f25b168987c1858b0404ff637aa4663a3"
	},
	{
		"id": "408d01873c57",
		"ts": "2026-08-12T17:55:23.526Z",
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
		"liquidityUsd": 943672.96,
		"hash": "408d01873c5782077aecd446f314b968a2c5e849630e53dd41b2a10bc30b915c"
	},
	{
		"id": "a08bbdf96c54",
		"ts": "2026-08-12T17:55:23.762Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2397504.57,
		"hash": "a08bbdf96c547700417d9b01f0b864b1f5afdc743fb61980442d11b258fa8783"
	},
	{
		"id": "0123fdb5b17a",
		"ts": "2026-08-12T17:55:23.984Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4496524.07,
		"hash": "0123fdb5b17aebaffb740b62c440e0eb8c0cbddcd082cb1b486e897663aa463e"
	},
	{
		"id": "f288d0643fc4",
		"ts": "2026-08-12T17:55:24.196Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 258169.79,
		"hash": "f288d0643fc414b7196f16759c77da2f755c1195ce775697ff6b460770cfbba5"
	},
	{
		"id": "e902f726b0ca",
		"ts": "2026-08-12T17:55:24.423Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4130456.65,
		"hash": "e902f726b0ca6c273c35f3cafb126a79bf280a3771cbae54b2c2563f06a91910"
	},
	{
		"id": "5148d62d8ecc",
		"ts": "2026-08-12T17:55:24.646Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 823349.34,
		"hash": "5148d62d8ecc275585c3d788fa56608d3fdcfb2ea4a51b8be7cc4a34bc74ac0e"
	},
	{
		"id": "720e5a9f3c3f",
		"ts": "2026-08-12T17:55:24.865Z",
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
		"liquidityUsd": 1190798.81,
		"hash": "720e5a9f3c3fe1e6cdb66cff74196281677311a6ed8552706b7e962411bf2fdd"
	},
	{
		"id": "4567082b2c75",
		"ts": "2026-08-12T17:55:25.076Z",
		"symbol": "EURC",
		"token": "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2242911.38,
		"hash": "4567082b2c753a51a08fe1c316cd1b475797f26ffc2606ec65100517e4763f20"
	},
	{
		"id": "96739929979a",
		"ts": "2026-08-12T17:55:25.305Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9348242.73,
		"hash": "96739929979ac754ede1d34667ee2cc9b5250c8754763da4e741046f1de78bf0"
	},
	{
		"id": "314645528cee",
		"ts": "2026-08-12T16:54:44.087Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112390810.76,
		"hash": "314645528cee983d69710f56bacf56d47fbdfd5021416be9591704fa15bb50c5"
	},
	{
		"id": "8dcdd00fc184",
		"ts": "2026-08-12T16:54:44.327Z",
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
		"liquidityUsd": 17599169.19,
		"hash": "8dcdd00fc184138fa1359bd38f52da692eb73f62edb1d096b5d0ded58cf7000a"
	},
	{
		"id": "6a19e13303fe",
		"ts": "2026-08-12T16:54:44.553Z",
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
		"liquidityUsd": 916417.73,
		"hash": "6a19e13303fe54d64d6d93f2834bcf8232ac1f49bf88af3f1533f732856d57b0"
	},
	{
		"id": "e929bde6ddc5",
		"ts": "2026-08-12T16:54:44.794Z",
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
		"liquidityUsd": 26935116.31,
		"hash": "e929bde6ddc585c9b580e4d53929b03364b25a2bf07caf51183a76d46166935e"
	},
	{
		"id": "484204b73aaf",
		"ts": "2026-08-12T16:54:45.032Z",
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
		"liquidityUsd": 4338058.01,
		"hash": "484204b73aaffbbccfa1b7ec2ebc226592da665617955fe997af18ec22caab5e"
	},
	{
		"id": "c00185aa55d6",
		"ts": "2026-08-12T16:54:45.271Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 909952.03,
		"hash": "c00185aa55d6d13ef27529bdc8fe03af8c4c712139d5f6094123a754955449e8"
	},
	{
		"id": "c38ec5b69d55",
		"ts": "2026-08-12T16:54:45.496Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4328198.97,
		"hash": "c38ec5b69d55fcacfd1ed4efd6920979c6905150fed0e2b7bcf94a8d7fb1c7d5"
	},
	{
		"id": "fd78aca11fcb",
		"ts": "2026-08-12T16:54:45.747Z",
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
		"liquidityUsd": 4410664.28,
		"hash": "fd78aca11fcb8b72543c3441d03877cfeec41a9ef255228bd4d729019184d414"
	},
	{
		"id": "3a5ca80fa0df",
		"ts": "2026-08-12T16:54:45.987Z",
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
		"liquidityUsd": 940242.49,
		"hash": "3a5ca80fa0dfd79fd97c2e8a8c9d8aa62d490ddd848ee0a508db89382f7df4d2"
	},
	{
		"id": "3fa3137c2340",
		"ts": "2026-08-12T16:54:46.224Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4336900.95,
		"hash": "3fa3137c23407cb1d49e208960b548b1675d51e07f20069cb45a06ea43d06763"
	},
	{
		"id": "51592c1fe59f",
		"ts": "2026-08-12T16:54:46.436Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2429562.68,
		"hash": "51592c1fe59f709cccfea6b6e71b57c2fe2797f7d26784cd9b3da09f38c4fb5d"
	},
	{
		"id": "b7fa299ccff3",
		"ts": "2026-08-12T16:54:46.662Z",
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
		"liquidityUsd": 258887.66,
		"hash": "b7fa299ccff3b74365b66b23ee9cf41687c8ce5fa086dea13e44f5555fc96c0c"
	},
	{
		"id": "7b9ead486318",
		"ts": "2026-08-12T16:54:46.881Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4130864.91,
		"hash": "7b9ead486318887b377071befd0a48cd84427c9d9243d404207485bef090abe4"
	},
	{
		"id": "68c1d937d43e",
		"ts": "2026-08-12T16:54:47.091Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 819644.71,
		"hash": "68c1d937d43e8e49ccea6dbff8a6d1072e7a2f23f10e83d4062e57822d1a1e9d"
	},
	{
		"id": "7c96925a8f55",
		"ts": "2026-08-12T16:54:47.317Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9369697.32,
		"hash": "7c96925a8f554c3d436063bcbd4c980037f0eb547f08963fa93f9fb50de24f6f"
	},
	{
		"id": "0b9479360ce1",
		"ts": "2026-08-12T16:54:47.539Z",
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
		"liquidityUsd": 1227706.63,
		"hash": "0b9479360ce14815789af4074c1131d4efbf941dcdf859742747c1b96f40b3d3"
	},
	{
		"id": "dba47feb65ba",
		"ts": "2026-08-12T16:54:47.760Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1830606.69,
		"hash": "dba47feb65ba1ee553a75f1173ec427a53579fa04f0bda5e9c4442282f201556"
	},
	{
		"id": "826f595a9a53",
		"ts": "2026-08-12T15:55:53.632Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112385669.05,
		"hash": "826f595a9a530d77e8a2e0502ee4044d516d994bf87a121149d179162dc9cac4"
	},
	{
		"id": "2da4101e9382",
		"ts": "2026-08-12T15:55:53.978Z",
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
		"liquidityUsd": 16419018.79,
		"hash": "2da4101e93824375db838434520c2fad3102f509516b2b13b03224c2e91129c3"
	},
	{
		"id": "baf613d718d1",
		"ts": "2026-08-12T15:55:54.179Z",
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
		"liquidityUsd": 993383.32,
		"hash": "baf613d718d1a7efd63601bdd34020398b77ac3b653bb98f6f9e360ae3012b24"
	},
	{
		"id": "b1c013530b3f",
		"ts": "2026-08-12T15:55:54.374Z",
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
		"liquidityUsd": 26886781.39,
		"hash": "b1c013530b3ff04e251b1d61b17dac47bb35dab15bf0e3994ea4aaf09900a480"
	},
	{
		"id": "df734865e2bb",
		"ts": "2026-08-12T15:55:54.563Z",
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
		"liquidityUsd": 4328864.33,
		"hash": "df734865e2bb5b9dd2162bc1d23050dd66ec98902795a48fc6f051da3c1bdd49"
	},
	{
		"id": "499a5aa7448d",
		"ts": "2026-08-12T15:55:54.748Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 904463.46,
		"hash": "499a5aa7448d8a9f4f7592db00320ee444a3536894792f986456873c9eb2c9c7"
	},
	{
		"id": "c5803f619d4f",
		"ts": "2026-08-12T15:55:54.947Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4212527.73,
		"hash": "c5803f619d4fb2a3e064cde6cccf0454e5825c3667be79ce4b8cb78d2eed533a"
	},
	{
		"id": "8b7272862aaf",
		"ts": "2026-08-12T15:55:55.157Z",
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
		"liquidityUsd": 4415926.31,
		"hash": "8b7272862aaf60ad538bdeb862ea5f690b9c729bf7d2924e22e504d69134d282"
	},
	{
		"id": "e4585505a6c4",
		"ts": "2026-08-12T15:55:55.342Z",
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
		"liquidityUsd": 942763.84,
		"hash": "e4585505a6c4271900ada32cf3cb2d48548a966a536561c7cd9cbc4b1d59bd46"
	},
	{
		"id": "3dbede004762",
		"ts": "2026-08-12T15:55:55.532Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4220623.96,
		"hash": "3dbede0047629ee6ff75f8078d29e146177d331e6e450908c9b309c5755304f1"
	},
	{
		"id": "2bce11bbaddd",
		"ts": "2026-08-12T15:55:55.712Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2457879.01,
		"hash": "2bce11bbadddfb4e273559b284647f0fb4c2649b9d557700702fa526e2c71996"
	},
	{
		"id": "538f3ab4985c",
		"ts": "2026-08-12T15:55:55.913Z",
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
		"liquidityUsd": 256357.31,
		"hash": "538f3ab4985cf786820166b22bb7233c7e3f9ea0e9cc172e3b6fb1b1a07de15a"
	},
	{
		"id": "7da342d78b1d",
		"ts": "2026-08-12T15:55:56.094Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4117171.55,
		"hash": "7da342d78b1d5a811b6a5221900ab297b20e0e83ce8cee7354fca8013946bf7d"
	},
	{
		"id": "82e1ab7cc18f",
		"ts": "2026-08-12T15:55:56.313Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 821396.34,
		"hash": "82e1ab7cc18ff847c825f2834f4d07b45a6644458d3c4046814463b80ae90f98"
	},
	{
		"id": "fa2572d168fe",
		"ts": "2026-08-12T15:55:56.509Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1830533.57,
		"hash": "fa2572d168fe78194dd02fd8da51453944d2c29a27b49d0d13a7f0c4f69bd22d"
	},
	{
		"id": "b7ec58b96d16",
		"ts": "2026-08-12T15:55:56.719Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9397506.26,
		"hash": "b7ec58b96d1621b7cbcd10fc49dd3ab8d275010ffa6d2c7ed2df5ddc07c9e2e1"
	},
	{
		"id": "6ba2f165b0bf",
		"ts": "2026-08-12T15:55:56.897Z",
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
		"liquidityUsd": 1254104.66,
		"hash": "6ba2f165b0bf5b267d7815ee7e7fed28bcb09d9a05ec021e3d242978ca39696b"
	},
	{
		"id": "e1951faf3b21",
		"ts": "2026-08-12T15:55:57.115Z",
		"symbol": "EURC",
		"token": "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2461442.16,
		"hash": "e1951faf3b2188eb0034d9cd45774a67bbf5a90cb8f34f069388fa9295b7703e"
	},
	{
		"id": "d2cffa6a0a3e",
		"ts": "2026-08-12T14:23:20.405Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112651740.25,
		"hash": "d2cffa6a0a3ed73cecfa5599856df8a1a12c46d8ae3933b4438210304295a863"
	},
	{
		"id": "d54c2533bb7b",
		"ts": "2026-08-12T14:23:20.741Z",
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
		"liquidityUsd": 16623314.62,
		"hash": "d54c2533bb7bbde6598310d67daf44ed70219c7002d0d254bb7a35bfcaf7c9f6"
	},
	{
		"id": "4dcfdc5588fa",
		"ts": "2026-08-12T14:23:21.080Z",
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
		"liquidityUsd": 1002997.76,
		"hash": "4dcfdc5588faba69925f9eb6f78a95c4fa52f32ced604f66cd26a85c533556ed"
	},
	{
		"id": "bada10e762c5",
		"ts": "2026-08-12T14:23:21.422Z",
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
		"liquidityUsd": 26902799.95,
		"hash": "bada10e762c589009a2be0bf552343cb4c9541b551cf2c839927e5fc6c766a03"
	},
	{
		"id": "14ca5c77c613",
		"ts": "2026-08-12T14:23:21.606Z",
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
		"liquidityUsd": 4248564.16,
		"hash": "14ca5c77c613c9b70865acccbaf1766e5476bf80b5de84523affd3880085eecf"
	},
	{
		"id": "93df9eeac891",
		"ts": "2026-08-12T14:23:21.788Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 918583.74,
		"hash": "93df9eeac891bcaad0df7030b4ceeb961796e78ebb59e48842b77caca445ead1"
	},
	{
		"id": "4f4639a8df71",
		"ts": "2026-08-12T14:23:21.974Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26902799.95,
		"hash": "4f4639a8df71e7114c9ed159dc58298a35e81ba75fb2869f80518b1f6286a90c"
	},
	{
		"id": "9b613454332d",
		"ts": "2026-08-12T14:23:22.185Z",
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
		"liquidityUsd": 4421336.74,
		"hash": "9b613454332d04214d557b18a9a1c329f99cac27a4a755a413f2d61b7bcd8c0d"
	},
	{
		"id": "8061434bbb0e",
		"ts": "2026-08-12T14:23:22.365Z",
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
		"liquidityUsd": 949867.54,
		"hash": "8061434bbb0e7680e398125f82eed6d8eb6ea8a0ae5562c3c44bf5e4d980052a"
	},
	{
		"id": "76cecb617788",
		"ts": "2026-08-12T14:23:22.584Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4263158.65,
		"hash": "76cecb61778817f3f13ea587964a0df552655184a5ba94040b4501460d21f1ee"
	},
	{
		"id": "f69e51295000",
		"ts": "2026-08-12T14:23:22.764Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2362165.49,
		"hash": "f69e5129500077ef4e97ab2df2e9b2d08bfdb2bdfd6f920670ffc6c9569cbf02"
	},
	{
		"id": "b8fdac40f2ab",
		"ts": "2026-08-12T14:23:22.965Z",
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
		"liquidityUsd": 256429.31,
		"hash": "b8fdac40f2abeb73c2d6674a3d1eefd315f47f22855a9d66eee2fb3890d8222f"
	},
	{
		"id": "67fdba5564e8",
		"ts": "2026-08-12T14:23:23.145Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1841603.08,
		"hash": "67fdba5564e870da2e55d9748cbf3d06c2198efd47283fb7f5877214dc3106d4"
	},
	{
		"id": "1dc5307c1b10",
		"ts": "2026-08-12T14:23:23.332Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4143759.83,
		"hash": "1dc5307c1b108e261179e7a052d00527c3394151dbd6fc82a72844a08ed7b8af"
	},
	{
		"id": "50257b0583fb",
		"ts": "2026-08-12T14:23:23.523Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9452467.63,
		"hash": "50257b0583fb4b107d91871408536c573cd1bb2524802ea4165f0bd30083a8e0"
	},
	{
		"id": "1af7335b276f",
		"ts": "2026-08-12T14:23:23.730Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 823076.06,
		"hash": "1af7335b276f262cdbe21a8e38a19e0a687ea2151e6fae5ed4efa9bdfdaf8703"
	},
	{
		"id": "eb2259e2f417",
		"ts": "2026-08-12T14:23:23.928Z",
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
		"liquidityUsd": 1265928.78,
		"hash": "eb2259e2f4172ced77992815b070bfba05bd8b6e8da969a4a23ab061c82300b3"
	},
	{
		"id": "3a0d9e41e73f",
		"ts": "2026-08-12T12:59:57.896Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113051827.83,
		"hash": "3a0d9e41e73f3fb9372758476ac9472619c1b5069508b810a9e0986b7ab25842"
	},
	{
		"id": "005cb19ad0ca",
		"ts": "2026-08-12T12:59:58.338Z",
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
		"liquidityUsd": 17253644.11,
		"hash": "005cb19ad0ca61c23ad448576e3c3dcda928b812baeeb41c7289e44723bd99bd"
	},
	{
		"id": "352adc0ed522",
		"ts": "2026-08-12T12:59:58.580Z",
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
		"liquidityUsd": 1002997.76,
		"hash": "352adc0ed522798ccaba1ebef32cd64fddbb48d908a958d2cc5b86cdadffce7d"
	},
	{
		"id": "bea0f8a7d38d",
		"ts": "2026-08-12T12:59:58.822Z",
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
		"liquidityUsd": 26998417.69,
		"hash": "bea0f8a7d38d5e576cabdc5ab10c7732daa8443a2f9f2709a3e94db74522588f"
	},
	{
		"id": "991009a50a5a",
		"ts": "2026-08-12T12:59:59.066Z",
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
		"liquidityUsd": 4229563.11,
		"hash": "991009a50a5a99354e57d613de799a37c13307559a1f901c7018a4eb4778497e"
	},
	{
		"id": "3dd2f6bb7864",
		"ts": "2026-08-12T12:59:59.307Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 918583.9,
		"hash": "3dd2f6bb78642c224d0d6f52e010cb5b49f24e1eed55d5614a0aaec9cab14118"
	},
	{
		"id": "ea9d9a22248e",
		"ts": "2026-08-12T12:59:59.548Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26998417.69,
		"hash": "ea9d9a22248eb35ae114cd79eb691226f52f65e4fb2ed013f2e23e6fc50f7a27"
	},
	{
		"id": "1829a5e3c389",
		"ts": "2026-08-12T12:59:59.796Z",
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
		"liquidityUsd": 4513095.86,
		"hash": "1829a5e3c389a5ad4b875c7374be8a76a0a65b8d814c1abc1f6c1708429ccdca"
	},
	{
		"id": "f34347451ea8",
		"ts": "2026-08-12T13:00:00.044Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4079467.66,
		"hash": "f34347451ea884f5e2e7a323a284ba316246dcbf87d4107387f926e26dab5908"
	},
	{
		"id": "869c10cea356",
		"ts": "2026-08-12T13:00:00.329Z",
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
		"liquidityUsd": 942368.21,
		"hash": "869c10cea356f181ecc1a23e91dc0edef15ae8a515c517620cde6ea8e5fee8b8"
	},
	{
		"id": "061a87d7aa01",
		"ts": "2026-08-12T13:00:00.596Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2349115.45,
		"hash": "061a87d7aa014baf9cd41f184599020605d6b4807909f4ac6924f7283637d25f"
	},
	{
		"id": "dc26ed52d3d0",
		"ts": "2026-08-12T13:00:00.840Z",
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
		"liquidityUsd": 258469.3,
		"hash": "dc26ed52d3d098123b9611ec5d12e258860e033cc0523866084db9ccc7d70b5d"
	},
	{
		"id": "8cb1f87c1c97",
		"ts": "2026-08-12T13:00:01.087Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1850833.4,
		"hash": "8cb1f87c1c971e45cec913467427184e3fb291acefc394eb22cd1fc67074c037"
	},
	{
		"id": "2217b3c0eb3c",
		"ts": "2026-08-12T13:00:01.326Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4662197.22,
		"hash": "2217b3c0eb3cad3b1e0809f31447b11026af084ac9d452cf47acb26d4090c836"
	},
	{
		"id": "4c62f48c2f13",
		"ts": "2026-08-12T13:00:01.577Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4207085.17,
		"hash": "4c62f48c2f139ce85545f7752024bd116a63a2e7ecf5f9790ab9eff73304322e"
	},
	{
		"id": "eadb52e153ab",
		"ts": "2026-08-12T13:00:01.823Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 709002.74,
		"hash": "eadb52e153abd00d1b0914949100cae51f21b93d8ba99742cdabb8204e29d764"
	},
	{
		"id": "84f89b5468ff",
		"ts": "2026-08-12T13:00:02.080Z",
		"symbol": "noice",
		"token": "0x9Cb41FD9dC6891BAe8187029461bfAADF6CC0C69",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 206069.92,
		"hash": "84f89b5468ff74cfda4dfd3e993dc285f4b8733100c29571dbc9242d4cba5c21"
	},
	{
		"id": "3fc2ffec6bb0",
		"ts": "2026-08-12T13:00:02.320Z",
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
		"liquidityUsd": 9529058.97,
		"hash": "3fc2ffec6bb008fc34114e96812550449dd8bf52338729c20649e9cec8025839"
	},
	{
		"id": "5e36d68f123d",
		"ts": "2026-08-12T11:02:12.712Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112966280.05,
		"hash": "5e36d68f123d237e50a9a6d97fc10b536a3eafa5c1b7aa49bee3e6565448676d"
	},
	{
		"id": "3d079411da50",
		"ts": "2026-08-12T11:02:13.149Z",
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
		"liquidityUsd": 17006095.07,
		"hash": "3d079411da506463ca10a9cdea2bad42267598e27da32118de07642b03667583"
	},
	{
		"id": "81cb6f5f6837",
		"ts": "2026-08-12T11:02:13.592Z",
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
		"liquidityUsd": 1002992.95,
		"hash": "81cb6f5f68379667cf78f4e8debc83a35234aa2d53018668357527e3bf565f9b"
	},
	{
		"id": "15035aae780e",
		"ts": "2026-08-12T11:02:14.023Z",
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
		"liquidityUsd": 27000198.56,
		"hash": "15035aae780e376e3cea6edeabe650a42dadf93d232e391369ac8b4062f53947"
	},
	{
		"id": "1a609404d3e5",
		"ts": "2026-08-12T11:02:14.258Z",
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
		"liquidityUsd": 4166753.69,
		"hash": "1a609404d3e534ecc78cc80b074ace6b0fa68e28bf25bb4e7318c42761e3361d"
	},
	{
		"id": "6161658630bf",
		"ts": "2026-08-12T11:02:14.488Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 919081.08,
		"hash": "6161658630bf06134bd01871504098fba009b72900803dfcbc15269921ebbef9"
	},
	{
		"id": "c28639317136",
		"ts": "2026-08-12T11:02:14.717Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27000172.69,
		"hash": "c28639317136a532dee67fb1d8dc7fd8631cc40b2f700d9393b504a7f3a3e4b4"
	},
	{
		"id": "82e167cc340e",
		"ts": "2026-08-12T11:02:14.951Z",
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
		"liquidityUsd": 4506410.43,
		"hash": "82e167cc340e6784ef9369d8ac1f8579a038c987a7e332a5f4ea412398b9a003"
	},
	{
		"id": "5f8ab8715905",
		"ts": "2026-08-12T11:02:15.186Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3914574.97,
		"hash": "5f8ab8715905a0c972970b44d5f4857dc2ed9affcb68b0cfe2d7ecac9400e17e"
	},
	{
		"id": "434694535004",
		"ts": "2026-08-12T11:02:15.417Z",
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
		"liquidityUsd": 950578.61,
		"hash": "43469453500469de648c3661f8155ac18ab5dcdfefaaf6986dc75d046be58b6d"
	},
	{
		"id": "c289a84ebe61",
		"ts": "2026-08-12T11:02:15.635Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2257275.71,
		"hash": "c289a84ebe616f487a65083eff01ab3e98d6881969f45a86863ae07be7e4c7e1"
	},
	{
		"id": "809d750f9ea8",
		"ts": "2026-08-12T11:02:15.848Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1840210.11,
		"hash": "809d750f9ea8bc2a4efbb23243905cbd9840db1b77cbf53a80c177a4810898ce"
	},
	{
		"id": "0302296f7298",
		"ts": "2026-08-12T11:02:16.063Z",
		"symbol": "noice",
		"token": "0x9Cb41FD9dC6891BAe8187029461bfAADF6CC0C69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 208400.62,
		"hash": "0302296f7298f5eb5d957ba734dec7d2e310aaa466b07b25a01846e9674cd46f"
	},
	{
		"id": "abf984ebe1a2",
		"ts": "2026-08-12T11:02:16.283Z",
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
		"liquidityUsd": 265632.34,
		"hash": "abf984ebe1a2fccd76609bb1863c0119cf438f993fddc1341e3bc0a95daa3bc6"
	},
	{
		"id": "1cb84e05403b",
		"ts": "2026-08-12T11:02:16.497Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4625834.24,
		"hash": "1cb84e05403b94f6affcd5c00592736e0a7f90553b7413e6d1b9b4200916d504"
	},
	{
		"id": "c28d96682af0",
		"ts": "2026-08-12T11:02:16.713Z",
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
		"liquidityUsd": 716946.08,
		"hash": "c28d96682af0bb6ed9ec0c74665c2b88a7966556ee3c854d3853780bf7ac3557"
	},
	{
		"id": "be1135d99a07",
		"ts": "2026-08-12T11:02:16.930Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4206760.27,
		"hash": "be1135d99a07d6d29f834e75cff1011b76904170a1e8a8712a7e8304b401c6b0"
	},
	{
		"id": "ff6a16d9433f",
		"ts": "2026-08-12T11:02:17.143Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9554390.26,
		"hash": "ff6a16d9433f2b0d31c2bf0a6684067384932b389558b71c74e96c184fb075f3"
	},
	{
		"id": "1553f901cf27",
		"ts": "2026-08-12T11:02:17.357Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 832026.9,
		"hash": "1553f901cf273b72b20637cac00014ee7c32094757f476f5736ebb5dc998b15e"
	},
	{
		"id": "e3c80e0c55da",
		"ts": "2026-08-12T09:58:30.283Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112794421.93,
		"hash": "e3c80e0c55daf824f19acaa7694bcda10d087e5c7ccd6ab2b962396628e25e71"
	},
	{
		"id": "eb05a4cb96cc",
		"ts": "2026-08-12T09:58:30.754Z",
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
		"liquidityUsd": 18328660.71,
		"hash": "eb05a4cb96cc0b50a0a563e83db88f0f3b3a439f10a5165b510b438f0d4df90a"
	},
	{
		"id": "262522ee77c1",
		"ts": "2026-08-12T09:58:31.075Z",
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
		"liquidityUsd": 1000820.36,
		"hash": "262522ee77c1b09bf7e9102e2a27bcbe45f72b20fa266b9865e462c5bae113b4"
	},
	{
		"id": "590c1e826564",
		"ts": "2026-08-12T09:58:31.395Z",
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
		"liquidityUsd": 26963463.66,
		"hash": "590c1e8265641a221b1133b8fca9c49582d73a7b2406e5bd05251081ffeb537e"
	},
	{
		"id": "34fa1a3e1641",
		"ts": "2026-08-12T09:58:31.595Z",
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
		"liquidityUsd": 4144709.72,
		"hash": "34fa1a3e16413a7b358e6425ba903c8e0a9aa2ed43834c6df09d7df957411b85"
	},
	{
		"id": "985aa4b0c56e",
		"ts": "2026-08-12T09:58:31.818Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 909596.52,
		"hash": "985aa4b0c56e5b6c10b41926674a13be0c44448722d66dd69c09cd29b1b57905"
	},
	{
		"id": "69c1a3d37d76",
		"ts": "2026-08-12T09:58:32.017Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26963463.66,
		"hash": "69c1a3d37d767ffe198ac1ff82d68f814efcccc7c22ef6f4935c9a4a24867e3d"
	},
	{
		"id": "a6b3f4381cda",
		"ts": "2026-08-12T09:58:32.235Z",
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
		"liquidityUsd": 4493733.75,
		"hash": "a6b3f4381cda912818c1d2218b1ab4f49006d28f5398a03647e9e88d58b20ed9"
	},
	{
		"id": "229a4810fbac",
		"ts": "2026-08-12T09:58:32.436Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3721908.48,
		"hash": "229a4810fbac7d4df9fc459c79daf5f680a6feb97f612a3f030955d7f756d54e"
	},
	{
		"id": "8e79f2cfc0b0",
		"ts": "2026-08-12T09:58:32.635Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 954591.51,
		"hash": "8e79f2cfc0b089007d89084fc26a864f665cb5eff32281b8d478ee8212a8eb4a"
	},
	{
		"id": "9af233c22a32",
		"ts": "2026-08-12T09:58:32.836Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2249525.12,
		"hash": "9af233c22a32634b579b713a07d7c0b3141ba7bf6f7cde4148e7f9b81a916ff4"
	},
	{
		"id": "dc93888e6172",
		"ts": "2026-08-12T09:58:33.051Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1828718.37,
		"hash": "dc93888e6172b623794db55a873933814920dfa69eba8647664d694b791b6be8"
	},
	{
		"id": "b790c014372c",
		"ts": "2026-08-12T09:58:33.293Z",
		"symbol": "noice",
		"token": "0x9Cb41FD9dC6891BAe8187029461bfAADF6CC0C69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 207601.1,
		"hash": "b790c014372c2e3b66111793fed56c791bd006581d69f7afd8817cc9bbcda362"
	},
	{
		"id": "f48731d3408c",
		"ts": "2026-08-12T09:58:33.494Z",
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
		"liquidityUsd": 266719.41,
		"hash": "f48731d3408cc8f31d2eb9dd10a8d1ae699b241aeb51db1d061c405e302cc9be"
	},
	{
		"id": "f98ba1eb414b",
		"ts": "2026-08-12T09:58:33.697Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4575630.28,
		"hash": "f98ba1eb414b6d2aa01e5ed463f7788f5274470b986997c37da7bebddf483dbd"
	},
	{
		"id": "23a04e10feb5",
		"ts": "2026-08-12T09:58:33.912Z",
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
		"liquidityUsd": 719370.88,
		"hash": "23a04e10feb5f39e799bf57d2ae1bd51a26c4221a9364854b41d58533c489dfd"
	},
	{
		"id": "f5c669973a8c",
		"ts": "2026-08-12T09:58:34.120Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4195090.75,
		"hash": "f5c669973a8c6a6a1b19dadd77b4e003d199ab689758baac3094b11579aa0c1e"
	},
	{
		"id": "e9ff3f4f240a",
		"ts": "2026-08-12T09:58:34.333Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9556639.55,
		"hash": "e9ff3f4f240af3a4c9a5a398b8b8312388e464289b7090cebd354ebad5d62148"
	},
	{
		"id": "494cf9bb0578",
		"ts": "2026-08-12T09:58:34.534Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 831539.36,
		"hash": "494cf9bb057897ba7532292b81b187168a47d2d683a22bea439f6209a4ab6217"
	},
	{
		"id": "25906a5966a1",
		"ts": "2026-08-12T08:13:36.509Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112317809.1,
		"hash": "25906a5966a17875016fa17056127e85d6ae4af1389730a617c88f9f0f9cb543"
	},
	{
		"id": "b110e7203986",
		"ts": "2026-08-12T08:13:36.961Z",
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
		"liquidityUsd": 13411190.27,
		"hash": "b110e72039866b9fbde5a0dcf065f2e46a969c9b17ffc18880836c5e3e6b4961"
	},
	{
		"id": "2d2c3132ee99",
		"ts": "2026-08-12T08:13:37.219Z",
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
		"liquidityUsd": 994492.37,
		"hash": "2d2c3132ee992fe200a8b7c13664086a24962ec6cfc7046c287dcfcfcf62a830"
	},
	{
		"id": "4dc9b2e49ab1",
		"ts": "2026-08-12T08:13:37.459Z",
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
		"liquidityUsd": 26830223.63,
		"hash": "4dc9b2e49ab1850f8aa894c78226d6c6e7d5da646ad46480b3d3bb8a3c6e8e97"
	},
	{
		"id": "009ea8346baf",
		"ts": "2026-08-12T08:13:37.700Z",
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
		"liquidityUsd": 4119247.83,
		"hash": "009ea8346baf463045a65b4fef6c7d17b6ce6341faf620a46b9d7c23075d30c6"
	},
	{
		"id": "13158e6eb787",
		"ts": "2026-08-12T08:13:37.933Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 906007.93,
		"hash": "13158e6eb787c1efbf40e9dd4f8df0750aabfe8e40885863f414d9cd171882ab"
	},
	{
		"id": "6a5124501d71",
		"ts": "2026-08-12T08:13:38.157Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26830223.63,
		"hash": "6a5124501d710ce752f123cea9fe6e6a07f48a076cb04b216e510152ffb51621"
	},
	{
		"id": "b62b70667470",
		"ts": "2026-08-12T08:13:38.398Z",
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
		"liquidityUsd": 4471142.85,
		"hash": "b62b7066747008c47aac8bcb7591fa7277fd46ee593d50dde8ecab1d4adc33b4"
	},
	{
		"id": "5bfd8d1dd08f",
		"ts": "2026-08-12T08:13:38.632Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3741098.26,
		"hash": "5bfd8d1dd08f50c2b6d52ff4dfad0ab31cf4a44864b55ee86ee8f641d09590ef"
	},
	{
		"id": "8492d7192ace",
		"ts": "2026-08-12T08:13:38.860Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 949493.56,
		"hash": "8492d7192ace06850c7452596e838146394782e574c2a19a00fc3f92ec7ae740"
	},
	{
		"id": "e510f59d1983",
		"ts": "2026-08-12T08:13:39.084Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2214684.31,
		"hash": "e510f59d19836cb313c084444c0c9216d01c4fc0014bb2d78fcf558d612e8e09"
	},
	{
		"id": "fe95ad49f4e7",
		"ts": "2026-08-12T08:13:39.301Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1824894.52,
		"hash": "fe95ad49f4e700947a1b641bfbbb5492afac56a51e4b58d123455b4700f30f6c"
	},
	{
		"id": "c5ccb151da96",
		"ts": "2026-08-12T08:13:39.524Z",
		"symbol": "noice",
		"token": "0x9Cb41FD9dC6891BAe8187029461bfAADF6CC0C69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 215939.63,
		"hash": "c5ccb151da963370dbb723acf9ee38ef708c75e997cc3e24960a804a400606de"
	},
	{
		"id": "54073065f3ce",
		"ts": "2026-08-12T08:13:39.737Z",
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
		"liquidityUsd": 262594.31,
		"hash": "54073065f3ce56d569ceb2013ae2fbffcf43e165e3037551f676508e4575717b"
	},
	{
		"id": "25c5ff9735dd",
		"ts": "2026-08-12T08:13:39.959Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4397907.53,
		"hash": "25c5ff9735dde7c33e00fa2f658791f9b8dfa3c84272f1c9585df988251ccaa0"
	},
	{
		"id": "fafb3418bd12",
		"ts": "2026-08-12T08:13:40.177Z",
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
		"liquidityUsd": 706917.26,
		"hash": "fafb3418bd12e5f3742fa257bc5ea84af1da26c242fcc31fbd1003298b19084d"
	},
	{
		"id": "33f88d65e0b6",
		"ts": "2026-08-12T08:13:40.401Z",
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
		"liquidityUsd": 9437274.31,
		"hash": "33f88d65e0b6eeceb18cd463a5172914d27f247e42076567f8614680ba9cf005"
	},
	{
		"id": "f1d5f6419a75",
		"ts": "2026-08-12T08:13:40.617Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 826992.33,
		"hash": "f1d5f6419a75f43f0760fedc0ea90197b9044faf5b8735dd37988506ffa9c018"
	},
	{
		"id": "0ec810d5098f",
		"ts": "2026-08-12T08:13:40.829Z",
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
		"liquidityUsd": 1236607.83,
		"hash": "0ec810d5098f5e647c96381af34f50fdfde15aa952a17cd247d42381594f1d0f"
	},
	{
		"id": "dc33175571fd",
		"ts": "2026-08-12T06:10:39.172Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112173154.98,
		"hash": "dc33175571fdcd7277161579a3445b56f52b29c9e0a6c7c2d9a30b160120422f"
	},
	{
		"id": "70622aa314ac",
		"ts": "2026-08-12T06:10:39.407Z",
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
		"liquidityUsd": 19074499.65,
		"hash": "70622aa314ac414cb6ac284eeb6fa3579a63b2cb188189ea8bdc34bd77a4b437"
	},
	{
		"id": "6ace5a2d27c0",
		"ts": "2026-08-12T06:10:39.609Z",
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
		"liquidityUsd": 995725.51,
		"hash": "6ace5a2d27c0e0938d5e41fa9e0b954f9fd3b0349404f92df105e042809f360f"
	},
	{
		"id": "3e77e978a442",
		"ts": "2026-08-12T06:10:39.815Z",
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
		"liquidityUsd": 26871547.66,
		"hash": "3e77e978a44286f8133f361ac369941ce5c639aa13f8fc8bdad5e81076a4db78"
	},
	{
		"id": "cce28cdca6f5",
		"ts": "2026-08-12T06:10:40.013Z",
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
		"liquidityUsd": 4103068.95,
		"hash": "cce28cdca6f534a58be75f07ed33cf18f94fee19be66ebb02961216344c9e522"
	},
	{
		"id": "67c86be59662",
		"ts": "2026-08-12T06:10:40.230Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 916493.44,
		"hash": "67c86be59662850dcd6f530231b14126674dd3329a6cb6cee705cdb80caa2ba8"
	},
	{
		"id": "03e15c3c8ac3",
		"ts": "2026-08-12T06:10:40.447Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26871547.66,
		"hash": "03e15c3c8ac31c5be99e292bf8ecb7bf1aa1099b844b3326fca6197ad6338fce"
	},
	{
		"id": "2eee596f5a23",
		"ts": "2026-08-12T06:10:40.646Z",
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
		"liquidityUsd": 4457710.36,
		"hash": "2eee596f5a23e6877568d6b07d8ef5bb6526343dded2f21cb6a7e6ef41f12515"
	},
	{
		"id": "c3d60b6a2eea",
		"ts": "2026-08-12T06:10:40.847Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3828194.25,
		"hash": "c3d60b6a2eea8f6dc68b4f2ced59fb98a6cbf51dbceebec48884979468c1e90b"
	},
	{
		"id": "b61076bead44",
		"ts": "2026-08-12T06:10:41.048Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 952904.65,
		"hash": "b61076bead4479578455ea9ed10d9e8688ed73326f5258faf95d0e35cd597734"
	},
	{
		"id": "50e31113b849",
		"ts": "2026-08-12T06:10:41.394Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2203062.57,
		"hash": "50e31113b8496eca431f8835ceacdca7e3fd720b275c778fc2d37d2e091ad4a1"
	},
	{
		"id": "10992b3f4a84",
		"ts": "2026-08-12T06:10:41.625Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1841895.2,
		"hash": "10992b3f4a84eec7966b1b6d260837ff81547074081430c0dc41f00a11ae3da9"
	},
	{
		"id": "5d77692789cf",
		"ts": "2026-08-12T06:10:41.806Z",
		"symbol": "noice",
		"token": "0x9Cb41FD9dC6891BAe8187029461bfAADF6CC0C69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 231215.25,
		"hash": "5d77692789cf7d251798cf1c60f69874f605eab884a6dc944f31d548fd88250e"
	},
	{
		"id": "ab1637f5d5bd",
		"ts": "2026-08-12T06:10:41.991Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9475739.63,
		"hash": "ab1637f5d5bd3a04a9610491333c4405da7ba4267f13a0d6251550e6bf2c6db2"
	},
	{
		"id": "a76b6d81d8b7",
		"ts": "2026-08-12T06:10:42.192Z",
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
		"liquidityUsd": 707531.5,
		"hash": "a76b6d81d8b7ef28f6fdd151c3705f58dc8b78d35b902b1715dc1897e8a9130e"
	},
	{
		"id": "dade3495d555",
		"ts": "2026-08-12T06:10:42.395Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4375506.34,
		"hash": "dade3495d55539adbf3fe06551fe60a57aba0355897aec0b1db06a56205d1e5c"
	},
	{
		"id": "d46fa1a48438",
		"ts": "2026-08-12T06:10:42.577Z",
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
		"liquidityUsd": 257432.11,
		"hash": "d46fa1a4843825aab489665bcf7ffffc5ea8acc396d90548bf9f85e4304d36c2"
	},
	{
		"id": "fb814a23e130",
		"ts": "2026-08-12T06:10:42.782Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 826595.57,
		"hash": "fb814a23e13036f393141c48046b6aff4fda13bf4aebe82c033439110c82aa07"
	},
	{
		"id": "c692e9d8f218",
		"ts": "2026-08-12T04:03:39.253Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112027015.45,
		"hash": "c692e9d8f218527999fe9ec1b0cbfa7ad0bebced77c002a7eb866895c5e76f91"
	},
	{
		"id": "eeb5dc6a8f40",
		"ts": "2026-08-12T04:03:39.697Z",
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
		"liquidityUsd": 19583239.24,
		"hash": "eeb5dc6a8f406bdaa93ed6d4843a900193a8804ac51477a7553720fe83098ca9"
	},
	{
		"id": "e4a86ec3f2d3",
		"ts": "2026-08-12T04:03:39.940Z",
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
		"liquidityUsd": 993934.19,
		"hash": "e4a86ec3f2d3a33fbe1a41ff9904129a62c4fe0da7002ded14249996e2f17c54"
	},
	{
		"id": "62d597812c4d",
		"ts": "2026-08-12T04:03:40.169Z",
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
		"liquidityUsd": 26852443.88,
		"hash": "62d597812c4d4afbefc1d6d114cf45fbc5ff84d6c0c6fbbb858bea958417e3f8"
	}
]
