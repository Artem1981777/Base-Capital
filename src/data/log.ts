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
	"updatedAt": "2026-08-15T09:21:13.841Z",
	"tokensScored": 10351,
	"verdictsIssued": 10351,
	"safe": 9018,
	"risky": 774,
	"likelyRug": 559,
	"ticks": 623
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "a683067dc3d9",
		"ts": "2026-08-15T09:21:09.971Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111688246.73,
		"hash": "a683067dc3d9f43f2f7fa83a042b1ab33d70507ec5fc9b2be5416e4cef95c3a3"
	},
	{
		"id": "6efacef0a5dd",
		"ts": "2026-08-15T09:21:10.205Z",
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
		"liquidityUsd": 16386447.27,
		"hash": "6efacef0a5dd5822fc81d54491e744f1042211353a9dff177a8e1be40911c5ac"
	},
	{
		"id": "620df42546b6",
		"ts": "2026-08-15T09:21:10.451Z",
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
		"liquidityUsd": 798767.04,
		"hash": "620df42546b64792b98561e59faa2b2d9110aaa180f69b0cb7600c3c30474b2b"
	},
	{
		"id": "5d98820c4b96",
		"ts": "2026-08-15T09:21:10.681Z",
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
		"liquidityUsd": 26491721.46,
		"hash": "5d98820c4b96833e4b7fd9cd78b0f4689199b5b671f2016243fba4e40ad41092"
	},
	{
		"id": "fc0f076dc482",
		"ts": "2026-08-15T09:21:10.932Z",
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
		"liquidityUsd": 4145815.26,
		"hash": "fc0f076dc482d893628a66cd71d25edc00fd3756066f444199539706ad8f32aa"
	},
	{
		"id": "ce9f0d93e66d",
		"ts": "2026-08-15T09:21:11.160Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 893704.17,
		"hash": "ce9f0d93e66db45bf57a93e0a7b3b3524027d72f517203f72d3f90c64d90bc9c"
	},
	{
		"id": "8e49c890d5a2",
		"ts": "2026-08-15T09:21:11.384Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6522256.47,
		"hash": "8e49c890d5a289f4df26cc50e31d2599cfa018254a5fb8cc7fefe12e1e57568a"
	},
	{
		"id": "dea71236987f",
		"ts": "2026-08-15T09:21:11.622Z",
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
		"liquidityUsd": 3804508.43,
		"hash": "dea71236987f61f9155c462657b2c3a496906ab31b4cc7c8de21304516672edc"
	},
	{
		"id": "764c92f6c845",
		"ts": "2026-08-15T09:21:11.854Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 6517776.18,
		"hash": "764c92f6c845c9c495250402e0cb6edae87d32c2b211cc7da02acd175dab6502"
	},
	{
		"id": "ef2eda1a8362",
		"ts": "2026-08-15T09:21:12.077Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2446598.56,
		"hash": "ef2eda1a836297cbf74ca89bddf1307974c2e2b5f34e82f054e33914e27a39ed"
	},
	{
		"id": "a8fcdeb6ab28",
		"ts": "2026-08-15T09:21:12.287Z",
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
		"liquidityUsd": 887417.52,
		"hash": "a8fcdeb6ab28d68a1330bf8d4075f1125f92d59b0a7cfeeba2b715760e309efa"
	},
	{
		"id": "a615257450c7",
		"ts": "2026-08-15T09:21:12.498Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 260877.34,
		"hash": "a615257450c7ebba1b76c98cd3ea6b3a689ce3f37c6f2cac3f062bc2e49e0f53"
	},
	{
		"id": "edfc31718af4",
		"ts": "2026-08-15T09:21:12.721Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9394931.53,
		"hash": "edfc31718af4591d12fcabcafc6ddf710e3d78fc7f832e04e31cfcb300546920"
	},
	{
		"id": "b72a882a7fad",
		"ts": "2026-08-15T09:21:12.936Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 847557.38,
		"hash": "b72a882a7fad3636e79ad3d2089330a6a967e8f2e6c94e95c55bef48396de93a"
	},
	{
		"id": "798ac7e45893",
		"ts": "2026-08-15T09:21:13.143Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "798ac7e458938d0f00d31ebee7ef9e117213ad6790abd0dd3e0f2af61ed139ed"
	},
	{
		"id": "746b82e95e7a",
		"ts": "2026-08-15T09:21:13.353Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1508270.2,
		"hash": "746b82e95e7a20023ff99edbfa1dbe9fa177685e0096780c617143774565cc2e"
	},
	{
		"id": "afeeed0a1c17",
		"ts": "2026-08-15T09:21:13.618Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 619883.04,
		"hash": "afeeed0a1c17906ea1b0a1320f89db71570cf15df7e386fec479b4b6c03ca4f0"
	},
	{
		"id": "d34b4f684f5d",
		"ts": "2026-08-15T09:21:13.841Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 558338.92,
		"hash": "d34b4f684f5d6583578a15263130047727f58bc5cb15b71fd8795e0f1798a391"
	},
	{
		"id": "66cc3e6eeba0",
		"ts": "2026-08-15T08:22:24.761Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111685432.8,
		"hash": "66cc3e6eeba037d5d1bcc68d446d57e9cfec5e2e2867b92e9d2bd38fdeeebf0e"
	},
	{
		"id": "433c9c245bb6",
		"ts": "2026-08-15T08:22:25.190Z",
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
		"liquidityUsd": 15863888.21,
		"hash": "433c9c245bb68eaa77ec0b982c6c339221fe50e38770b7465f6ac139218eb248"
	},
	{
		"id": "944df7adba12",
		"ts": "2026-08-15T08:22:25.426Z",
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
		"liquidityUsd": 798767.04,
		"hash": "944df7adba12724a81123ef07b4409dfa331f687dbc43222bbb17b2957ec488a"
	},
	{
		"id": "03d9a0f8807d",
		"ts": "2026-08-15T08:22:25.658Z",
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
		"liquidityUsd": 26499388.85,
		"hash": "03d9a0f8807d0b0d9aa60e9fe12c25c57fe2b71a04fd6e22d194d0e62349eecf"
	},
	{
		"id": "75a39f01ffc9",
		"ts": "2026-08-15T08:22:25.894Z",
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
		"liquidityUsd": 4145815.26,
		"hash": "75a39f01ffc9fc5b769b268047046a184fc2452494230dc52922938083dab6cf"
	},
	{
		"id": "669003dee600",
		"ts": "2026-08-15T08:22:26.136Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 893362.66,
		"hash": "669003dee600ff25d82b78b49cc1ee29760ce2a6dc01f7244c84c292ec24b7f5"
	},
	{
		"id": "722ef497b67d",
		"ts": "2026-08-15T08:22:26.366Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6944806.91,
		"hash": "722ef497b67dc86c9aff3fd2cbd6bdb4dae7620b4af708428442593026d362a3"
	},
	{
		"id": "cde0cc3f45a3",
		"ts": "2026-08-15T08:22:26.615Z",
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
		"liquidityUsd": 3810900.8,
		"hash": "cde0cc3f45a35fa21c2e575dd92a7cc077b3df758ed8ae1ce2a30bb20a5c4877"
	},
	{
		"id": "636a5d7442b7",
		"ts": "2026-08-15T08:22:26.849Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 6944815.14,
		"hash": "636a5d7442b7387a60069963f437705029993cf83b8434a1d52fac61d9b2ac69"
	},
	{
		"id": "7d2fc045ef42",
		"ts": "2026-08-15T08:22:27.083Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2436225.57,
		"hash": "7d2fc045ef42d89d053120f9e2e6e017fe3ecb9850c8d23588fd9126cd1506dd"
	},
	{
		"id": "f1ba3e584e3f",
		"ts": "2026-08-15T08:22:27.301Z",
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
		"liquidityUsd": 883613.96,
		"hash": "f1ba3e584e3f22e032bbfb2d41485dac4316822e98fd043dd5c069d45b38383c"
	},
	{
		"id": "5d77e0fbf87e",
		"ts": "2026-08-15T08:22:27.516Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 260129.78,
		"hash": "5d77e0fbf87e7be19aa9e2e3ea9147b08240f874652d698058f448969e092ff8"
	},
	{
		"id": "eed079946df5",
		"ts": "2026-08-15T08:22:27.732Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 849225.27,
		"hash": "eed079946df5164b3803c8e3c2a79be12b2b5cfec26891d4cfa85c3654014ea8"
	},
	{
		"id": "ece12fff29e1",
		"ts": "2026-08-15T08:22:27.946Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1511234.63,
		"hash": "ece12fff29e1d757e14f5535cb849a7ee09da6d97f7aaeabd957f4b63d1499d7"
	},
	{
		"id": "03df536c427e",
		"ts": "2026-08-15T08:22:28.161Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "03df536c427ec3ad98f9873dec11ecebca9f54868222f0be1234e3925b50e003"
	},
	{
		"id": "0a620031ca86",
		"ts": "2026-08-15T08:22:28.373Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9419115.06,
		"hash": "0a620031ca86f58e22db51090ff9af7c8ef85a4562a7b444675aec0d6e304c5f"
	},
	{
		"id": "d557fc3195f9",
		"ts": "2026-08-15T08:22:28.585Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 626374.55,
		"hash": "d557fc3195f9ae20072dc80be15d54ac8d21a8ce0f9892766b923925733cdf26"
	},
	{
		"id": "4a045a58e0ea",
		"ts": "2026-08-15T07:26:20.564Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111670598.17,
		"hash": "4a045a58e0ea9f53ff7ced4de3193bc0d68031525ac846360a2a3591bd8473a5"
	},
	{
		"id": "f9486e8040de",
		"ts": "2026-08-15T07:26:20.956Z",
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
		"liquidityUsd": 16386682.38,
		"hash": "f9486e8040de873fbce058918334551b9d6cef315a42e4fa1b6c653949505159"
	},
	{
		"id": "3c3e0e73c67e",
		"ts": "2026-08-15T07:26:21.290Z",
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
		"liquidityUsd": 799886.57,
		"hash": "3c3e0e73c67efaea7ae4b95bf936ed04c49a8e5b1ce33dc9c43caa99a54f9535"
	},
	{
		"id": "df7bb9bb217e",
		"ts": "2026-08-15T07:26:21.492Z",
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
		"liquidityUsd": 26499153.71,
		"hash": "df7bb9bb217e48f5fdded8fbdb4fcc3fb2bbe900a6d2933a945d65254fbc7d39"
	},
	{
		"id": "824bd5743ae9",
		"ts": "2026-08-15T07:26:21.691Z",
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
		"liquidityUsd": 4144008,
		"hash": "824bd5743ae9b044cf822216805823db6f3cf35f2429abe0b4bda2d50c59e4f1"
	},
	{
		"id": "e9bcac74290a",
		"ts": "2026-08-15T07:26:21.926Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 893791.13,
		"hash": "e9bcac74290a1faf153d181975b5ebf72fe756f7edb3d7fb16a22c57a3bde2d0"
	},
	{
		"id": "41a096406488",
		"ts": "2026-08-15T07:26:22.122Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 7013392.88,
		"hash": "41a09640648865264e293cdf5448bce5442113a29417dc3625cb099ba75d7c4a"
	},
	{
		"id": "5909081eb4bb",
		"ts": "2026-08-15T07:26:22.330Z",
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
		"liquidityUsd": 3811589.63,
		"hash": "5909081eb4bbf9678dc7c59410ace520310bf323ee1682e9dd61dff5ae2507d5"
	},
	{
		"id": "3e09644b48c2",
		"ts": "2026-08-15T07:26:22.543Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 7032509.8,
		"hash": "3e09644b48c2ee2e02fc81dcaa1dd938e67abf994edb81f23f7edbc93b200628"
	},
	{
		"id": "9f265d4e0c1a",
		"ts": "2026-08-15T07:26:22.738Z",
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
		"liquidityUsd": 881472.81,
		"hash": "9f265d4e0c1a22ed0eb17f31050e580b2ca7aac97fa19fd8c8c19487f1e38349"
	},
	{
		"id": "fecdddce4236",
		"ts": "2026-08-15T07:26:22.922Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2429363.02,
		"hash": "fecdddce4236aa978b401e3d242e203f31891c8ed48d132e3d631942a97daa28"
	},
	{
		"id": "d153010f4b53",
		"ts": "2026-08-15T07:26:23.135Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 260634.06,
		"hash": "d153010f4b53aad563bfc08261862dc765da139eb74bf6a1a528d33e3a2981e6"
	},
	{
		"id": "4f1bef0ceaa3",
		"ts": "2026-08-15T07:26:23.327Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1512195.8,
		"hash": "4f1bef0ceaa3f2b29169bf901dc1f69744b2f961be03e21248880dd86a41289e"
	},
	{
		"id": "12ba13d07828",
		"ts": "2026-08-15T07:26:23.541Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 849141.77,
		"hash": "12ba13d07828c186c4adc9485b0a779856c31e2549868a08450b12168d9090ed"
	},
	{
		"id": "294f17c15d66",
		"ts": "2026-08-15T07:26:23.719Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "294f17c15d66c6a2dfe4e1de80531f4766e718600b56b03aa0bd84c51ae40866"
	},
	{
		"id": "9dfd586bdd6e",
		"ts": "2026-08-15T07:26:23.914Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9415923.55,
		"hash": "9dfd586bdd6ea4c5bf57ab7434db1e42f3258d646b1d3e2a6c2cbe0decafef09"
	},
	{
		"id": "f8956f576cf1",
		"ts": "2026-08-15T07:26:24.100Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 629705.95,
		"hash": "f8956f576cf12f84e8ec266158c26d6e3f5201c14d3513b7cecaa4c2b79cc369"
	},
	{
		"id": "6c2a74b8d4f2",
		"ts": "2026-08-15T06:31:13.843Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111673647.7,
		"hash": "6c2a74b8d4f22344ca6d9cda34cb49980e7e4a761388ca21148587aebeb40f46"
	},
	{
		"id": "a1a12ca4b403",
		"ts": "2026-08-15T06:31:14.084Z",
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
		"liquidityUsd": 15864361.32,
		"hash": "a1a12ca4b403974a533dd7bf9321d1687d78c683c1083c34751fbd1dcd29511e"
	},
	{
		"id": "c0105eb103c6",
		"ts": "2026-08-15T06:31:14.325Z",
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
		"liquidityUsd": 799886.57,
		"hash": "c0105eb103c6a3b91f87ceb0b81b57f5335ec92832455f43a37c8951c2781b4c"
	},
	{
		"id": "03dc1a3f4249",
		"ts": "2026-08-15T06:31:14.748Z",
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
		"liquidityUsd": 26367113.97,
		"hash": "03dc1a3f42494674c71ade02e90f0ca43a998d7b2870d94bd03a47176d2c1052"
	},
	{
		"id": "09e9f8ba280e",
		"ts": "2026-08-15T06:31:14.988Z",
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
		"liquidityUsd": 4144008,
		"hash": "09e9f8ba280ee2bcfb870c6deaca8b72b0a035390d305dd1846f161781048be4"
	},
	{
		"id": "228c49bc7bc9",
		"ts": "2026-08-15T06:31:15.218Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 893791.13,
		"hash": "228c49bc7bc95a7954ce3024963086ff24060eb760e5caa869697c4862d25ac3"
	},
	{
		"id": "1787a67f8acb",
		"ts": "2026-08-15T06:31:15.448Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6661350.11,
		"hash": "1787a67f8acb9d336bb71ed57d6b9295fd753c89b2a271c4417fb6b02fff67cc"
	},
	{
		"id": "031496a21761",
		"ts": "2026-08-15T06:31:15.672Z",
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
		"liquidityUsd": 3811326.01,
		"hash": "031496a21761c791f433a5130cc0e736b6657357001571e3dabc06dcd9f9a3ff"
	},
	{
		"id": "89b329a5b834",
		"ts": "2026-08-15T06:31:15.909Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 6661350.11,
		"hash": "89b329a5b83438586bdde053e5f4ca35581ccf249c012c40941aa4c14073ba11"
	},
	{
		"id": "4f04ef11cfc9",
		"ts": "2026-08-15T06:31:16.135Z",
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
		"liquidityUsd": 885788.93,
		"hash": "4f04ef11cfc9a129589638ac7a71a3b618ce92d5467d73a4c4546d4b5266d158"
	},
	{
		"id": "e75df5d258ed",
		"ts": "2026-08-15T06:31:16.356Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 261049.59,
		"hash": "e75df5d258ed8d0facb8667343be73e033d472c5509a9244fee4fd5c3428fcf3"
	},
	{
		"id": "e43d04bf9b7f",
		"ts": "2026-08-15T06:31:16.567Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2429770.43,
		"hash": "e43d04bf9b7f58b5de45fa98303847f1b3f8b434406d3a9e9817fb04daf0a211"
	},
	{
		"id": "ebf9f6758d4f",
		"ts": "2026-08-15T06:31:16.783Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1518215.14,
		"hash": "ebf9f6758d4f528c9d1a73a9ace6a78dbf65b0dae2754fddb8dcbaa795ccc2fd"
	},
	{
		"id": "6f6d5c7e1033",
		"ts": "2026-08-15T06:31:16.992Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 850381.26,
		"hash": "6f6d5c7e103359c64bf4396c57b2b29ccac786a932032b6ba50ec84ed005d0c9"
	},
	{
		"id": "d079b4bf28f9",
		"ts": "2026-08-15T06:31:17.213Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "d079b4bf28f987cc7cbfb5ed2091a0e8265286227d2590e898cdea3740bb139f"
	},
	{
		"id": "e42269d2e5e7",
		"ts": "2026-08-15T06:31:17.422Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 633393.65,
		"hash": "e42269d2e5e767c103c5feaa813c9a38f951ce438547ccdc15e54e595103d01c"
	},
	{
		"id": "0c16f392a3ef",
		"ts": "2026-08-15T06:31:17.631Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9400072.86,
		"hash": "0c16f392a3ef49aeb9ebdbb2e0c76033d2700f77f8cc98bbf61cd58e8655e0f2"
	},
	{
		"id": "68b1df58c5f0",
		"ts": "2026-08-15T05:20:52.954Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111740037.34,
		"hash": "68b1df58c5f0c4e59e573d37142bfac1e5af2c5680915988f89957963fc7bffc"
	},
	{
		"id": "b448a25a2d0d",
		"ts": "2026-08-15T05:20:53.192Z",
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
		"liquidityUsd": 15890058.99,
		"hash": "b448a25a2d0d27f91d4b04b3818ed9310112a501ee71d051e8136c1c72d013df"
	},
	{
		"id": "36bc0b469b4b",
		"ts": "2026-08-15T05:20:53.434Z",
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
		"liquidityUsd": 799886.57,
		"hash": "36bc0b469b4b52e7c7ad9a631e9e8b9997f9011a630f19cb783d366bcb1140eb"
	},
	{
		"id": "dd85f6b1a67d",
		"ts": "2026-08-15T05:20:53.663Z",
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
		"liquidityUsd": 26661572.71,
		"hash": "dd85f6b1a67dcb47d5ec7f2a1f86750581227c23bb7c4ae71acbe8f1cc87641e"
	},
	{
		"id": "b40088fb7122",
		"ts": "2026-08-15T05:20:53.888Z",
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
		"liquidityUsd": 4154124.01,
		"hash": "b40088fb7122cf7426428cd6ed2656b41506a336a43f81cfb747a57b46d2a691"
	},
	{
		"id": "335095e3c3bf",
		"ts": "2026-08-15T05:20:54.127Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 893791.13,
		"hash": "335095e3c3bf2c0b0408a0c468ef63d10ab86171340cca9c211b9cf70315ff95"
	},
	{
		"id": "97524b74dca6",
		"ts": "2026-08-15T05:20:54.377Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6273211.91,
		"hash": "97524b74dca60d732760ebc8a974bb20e00e85ee8f8fc1617ed75b8d8ad2a586"
	},
	{
		"id": "3aeecfe2e730",
		"ts": "2026-08-15T05:20:54.616Z",
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
		"liquidityUsd": 3818172.56,
		"hash": "3aeecfe2e73030edbbdcbee8e36fe71c2f805fddc745de1c862f3542881cec22"
	},
	{
		"id": "987c775aabf9",
		"ts": "2026-08-15T05:20:54.841Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 6255017.61,
		"hash": "987c775aabf90d7d6052590a31858857fc02c071e765ea49aebb5313aa9667b1"
	},
	{
		"id": "93edb4e796b4",
		"ts": "2026-08-15T05:20:55.066Z",
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
		"liquidityUsd": 881117.01,
		"hash": "93edb4e796b4eaa3d1d457c03c698f5e4b8671bedc611c8b336b20e0c8b87c40"
	},
	{
		"id": "94fdeb7f7529",
		"ts": "2026-08-15T05:20:55.287Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 260692.01,
		"hash": "94fdeb7f7529d7c115efd3c6d09826725cb836dcc4f136ea1b75746465c0c66e"
	},
	{
		"id": "5d6408f821e2",
		"ts": "2026-08-15T05:20:55.511Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2435533.11,
		"hash": "5d6408f821e279b770608eaedb4169aa853642b4dff21bb6bdf1e51299d279f9"
	},
	{
		"id": "aaaef297e9ac",
		"ts": "2026-08-15T05:20:55.722Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 637927.75,
		"hash": "aaaef297e9ac11ed2ab4d6a80d9c75d2ed39d8c80a46e2409a31aa8616f77a57"
	},
	{
		"id": "593abd24afd7",
		"ts": "2026-08-15T05:20:55.946Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1521340.23,
		"hash": "593abd24afd7a53907df051829d0bef630aae0bb015ee76f60e4d744a356fba3"
	},
	{
		"id": "c860c01c8326",
		"ts": "2026-08-15T05:20:56.158Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 852746.87,
		"hash": "c860c01c832617c3fa2695176df7db99adc4c5f5922f84318333503875304a1c"
	},
	{
		"id": "4d5f278ad956",
		"ts": "2026-08-15T05:20:56.366Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "4d5f278ad956ddb5a36428edf610f9fb0f2b18c4ed3a95aeb847cbafa875173b"
	},
	{
		"id": "5f80b70bf17c",
		"ts": "2026-08-15T05:20:56.586Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9430168.69,
		"hash": "5f80b70bf17c21ccaf6d13614bd203d4dc582b94e07f1661bf9621a20a948907"
	},
	{
		"id": "27cda52e764d",
		"ts": "2026-08-15T04:25:14.778Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111722322.62,
		"hash": "27cda52e764df04349e70e8c5d863cebafdd242ad5641ad4febe1ecf15d191e3"
	},
	{
		"id": "b1fa2f05eb0a",
		"ts": "2026-08-15T04:25:15.107Z",
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
		"liquidityUsd": 15873791.49,
		"hash": "b1fa2f05eb0a44ebc3d74299130e0b245b61ad49bc68420eeed3b4da5f6065ba"
	},
	{
		"id": "6be7d018964c",
		"ts": "2026-08-15T04:25:15.495Z",
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
		"liquidityUsd": 799886.57,
		"hash": "6be7d018964c0923ff53757cb8c8da3b8ddec0d0e01c66f38b107a27022c6e4f"
	},
	{
		"id": "71aedaf1255b",
		"ts": "2026-08-15T04:25:15.822Z",
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
		"liquidityUsd": 26623127.5,
		"hash": "71aedaf1255bcfbbd6f12a4e7e1d1543a11ffb4fad9adac2ca8c9d3cb1a47af1"
	},
	{
		"id": "773756c48043",
		"ts": "2026-08-15T04:25:16.134Z",
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
		"liquidityUsd": 4154124.01,
		"hash": "773756c4804393fad801b414cc00d90a6b7f35a6041d34dec19093daad8a8fa4"
	},
	{
		"id": "67679d52cb26",
		"ts": "2026-08-15T04:25:16.350Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 893791.13,
		"hash": "67679d52cb262bf3f2f65841ca1d515e053eea2e0324a44d2eee1124b95a7561"
	},
	{
		"id": "15e34dc348ac",
		"ts": "2026-08-15T04:25:16.545Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6189196.54,
		"hash": "15e34dc348ac46fc9e243afa751088a36c109205aac71e0fe0f442d3a5fb9749"
	},
	{
		"id": "480525125048",
		"ts": "2026-08-15T04:25:16.760Z",
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
		"liquidityUsd": 3817377.93,
		"hash": "4805251250488810f7ce5b359d46c72a1770327e77c0ee6346ac6de86021740f"
	},
	{
		"id": "27acf5c8852a",
		"ts": "2026-08-15T04:25:16.945Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 6168523.57,
		"hash": "27acf5c8852ab0447e67ff02b0b71a511babdf571f8da9cf4ed23a4c6f6efe02"
	},
	{
		"id": "d88c54012891",
		"ts": "2026-08-15T04:25:17.388Z",
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
		"liquidityUsd": 893415.86,
		"hash": "d88c54012891ca335449f13d78ae02fd658eb6a9a455c6208f410e898fe32ef4"
	},
	{
		"id": "3c8e2916ade8",
		"ts": "2026-08-15T04:25:17.578Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 257654.41,
		"hash": "3c8e2916ade8a0f49289d5110d300ebf31b1e13eefe044de52d9f94b13cd7b7b"
	},
	{
		"id": "2a6437b724b3",
		"ts": "2026-08-15T04:25:17.764Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2428975.67,
		"hash": "2a6437b724b31a4174370a85ddc52a7cac1fea07aac30069da95e8c41f1fb26d"
	},
	{
		"id": "ec6289825658",
		"ts": "2026-08-15T04:25:17.959Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 643240.94,
		"hash": "ec6289825658a03135182abf2d632c2578aeb3c70826ce4591dee67f8d5774ce"
	},
	{
		"id": "289cfb15c286",
		"ts": "2026-08-15T04:25:18.144Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1520129.81,
		"hash": "289cfb15c286bb1bdda47c26ba1b55d377624b2d8f0ed1d8b0e3a09545153c29"
	},
	{
		"id": "d5da7333f2d0",
		"ts": "2026-08-15T04:25:18.333Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 851654.34,
		"hash": "d5da7333f2d071017297dcc62ac5923b24b24881b684c7ee08804c0ce183bee2"
	},
	{
		"id": "ab9032828812",
		"ts": "2026-08-15T04:25:18.511Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "ab90328288127b9f6556cbd7573eb5cf0feb34c9d48a15a58340a2f000bb9fa6"
	},
	{
		"id": "398d78e9b862",
		"ts": "2026-08-15T04:25:18.728Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9426644.99,
		"hash": "398d78e9b8627fb75124363da013a29e8c2ba65035ba79e9ff4c2cb951bb1ea8"
	},
	{
		"id": "6ecdc4db7ffe",
		"ts": "2026-08-15T03:34:39.955Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111724806.86,
		"hash": "6ecdc4db7ffe364f03c8cc1776c55b05f9471846f356c66870569ed1b691fea1"
	},
	{
		"id": "9a59228ef3da",
		"ts": "2026-08-15T03:34:40.200Z",
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
		"liquidityUsd": 15583154.99,
		"hash": "9a59228ef3dabf36197870422cc4f158c68147e5499592f87e5bb9441970b652"
	},
	{
		"id": "2b088e8703b1",
		"ts": "2026-08-15T03:34:40.448Z",
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
		"liquidityUsd": 798477.66,
		"hash": "2b088e8703b18427952479d262cf8c8d5e60741e4e4722a673c9f762b28d7fe5"
	},
	{
		"id": "1be84453bc6a",
		"ts": "2026-08-15T03:34:40.697Z",
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
		"liquidityUsd": 26611203.9,
		"hash": "1be84453bc6a2f143ef121dd94668552e39ca4a6a2f1a555931278c66439a6d0"
	},
	{
		"id": "04b0194cd3b3",
		"ts": "2026-08-15T03:34:40.934Z",
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
		"liquidityUsd": 4154124.01,
		"hash": "04b0194cd3b383012458e59fb86e3f1634134dc2e11fe1f75582dc69de25502d"
	},
	{
		"id": "e3b2eef85a27",
		"ts": "2026-08-15T03:34:41.183Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 893791.13,
		"hash": "e3b2eef85a274640514d865bf846c2583f46dbfef2465e9abb93e3b9317d47e7"
	},
	{
		"id": "dce88fe345ab",
		"ts": "2026-08-15T03:34:41.425Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6202670.14,
		"hash": "dce88fe345ab7ce83b55d5d25e0f48b7d2d00f201e2a2bb67e66db5f1a2534aa"
	},
	{
		"id": "e26541ba985e",
		"ts": "2026-08-15T03:34:41.695Z",
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
		"liquidityUsd": 3819200.53,
		"hash": "e26541ba985ec1aa10508418cba6db782af0b11924922d69565082ddb319302c"
	},
	{
		"id": "4d894b7074e8",
		"ts": "2026-08-15T03:34:41.943Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 6237851.65,
		"hash": "4d894b7074e8f2702f02699711e47695408493d4f5e822dc583d074083ef564d"
	},
	{
		"id": "43be8b4013fa",
		"ts": "2026-08-15T03:34:42.232Z",
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
		"liquidityUsd": 894972.83,
		"hash": "43be8b4013fa46a1e2d9e1363b363427b3f1473f7123680cb4e88a8c6ccbf82a"
	},
	{
		"id": "22e0b8f394b3",
		"ts": "2026-08-15T03:34:42.450Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 257806.25,
		"hash": "22e0b8f394b36b3f8562a7d08c113eabb03955423d7d3663a9ca4317491f9a4c"
	},
	{
		"id": "9b4d8b07a3df",
		"ts": "2026-08-15T03:34:42.680Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 646030.98,
		"hash": "9b4d8b07a3dfa4d45a21991eef5268243ba49c0164f2812f21cd9e4ed465f797"
	},
	{
		"id": "745a0a3e4e55",
		"ts": "2026-08-15T03:34:42.916Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2469286.73,
		"hash": "745a0a3e4e55ca7bacce3aed71904ee6adb0d4fa50588491d7f2063f66fb353e"
	},
	{
		"id": "aabeecb3c257",
		"ts": "2026-08-15T03:34:43.136Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1522437.44,
		"hash": "aabeecb3c2578660d1cb19bfd3259db2b5461c44aaffc2475e143a980e6a8070"
	},
	{
		"id": "e5eb11257314",
		"ts": "2026-08-15T03:34:43.365Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 847265.21,
		"hash": "e5eb112573148232eb18cbed1c24645c43c4b0cd061a4e04d6abd305fe52c90d"
	},
	{
		"id": "018a72e57e21",
		"ts": "2026-08-15T03:34:43.595Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4151433.67,
		"hash": "018a72e57e2144da62a39b67e5f846348ef7caca140741c29a802c666ba8191a"
	},
	{
		"id": "15eb6d592fc3",
		"ts": "2026-08-15T03:34:43.814Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9436726.68,
		"hash": "15eb6d592fc37f133579b6940c14b9106161c49e4299ca8d89771e6a7a195daf"
	},
	{
		"id": "6ec0c41a2c64",
		"ts": "2026-08-15T02:47:44.049Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111701976.86,
		"hash": "6ec0c41a2c645f6e3280b4f007002888a2f55451ad17730a02235dc4524f28ba"
	},
	{
		"id": "484fb7d72022",
		"ts": "2026-08-15T02:47:44.375Z",
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
		"liquidityUsd": 16840682.75,
		"hash": "484fb7d72022e76f378faa22df2e057847599c7af6644e7448e313008dd474d4"
	},
	{
		"id": "81585d620796",
		"ts": "2026-08-15T02:47:44.579Z",
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
		"liquidityUsd": 798477.66,
		"hash": "81585d62079609fa71df7848924465c61c0173decbcb41d5ac016166805915c2"
	},
	{
		"id": "ca022e8b1be1",
		"ts": "2026-08-15T02:47:44.820Z",
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
		"liquidityUsd": 26600789.04,
		"hash": "ca022e8b1be193f0db1b2a7f128a4ef8a2fd13687a16660986aee42f6d4ea662"
	},
	{
		"id": "397814c1d40c",
		"ts": "2026-08-15T02:47:45.017Z",
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
		"liquidityUsd": 4156412.22,
		"hash": "397814c1d40c756688bfabba465b48cc4be0c803f04b40f8171528708aadff75"
	},
	{
		"id": "c376b0b419c0",
		"ts": "2026-08-15T02:47:45.215Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 893791.13,
		"hash": "c376b0b419c02d483eacf7031a65d060be04eaeaca7876b212db2e38131b83ee"
	},
	{
		"id": "5f2ac9d573d2",
		"ts": "2026-08-15T02:47:45.407Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6238479.07,
		"hash": "5f2ac9d573d2e539bdfc55ee2da5cb3edcefac3ccebdc69754af715d05289b2e"
	},
	{
		"id": "3e793725b387",
		"ts": "2026-08-15T02:47:45.605Z",
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
		"liquidityUsd": 3818611.64,
		"hash": "3e793725b387f95774079820ea469f218c6986d20defbbf17c6acde8780bc24c"
	},
	{
		"id": "c58d6a178b08",
		"ts": "2026-08-15T02:47:45.878Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 6238479.07,
		"hash": "c58d6a178b0885c83cb8b030ff93e8629aece2c2d908ebcef183b3d6623c8c6f"
	},
	{
		"id": "e40ddcca1572",
		"ts": "2026-08-15T02:47:46.068Z",
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
		"liquidityUsd": 900051.66,
		"hash": "e40ddcca1572e07490cc80c40de339d21c36f8ce0147627b8acdfc8bc05073f5"
	},
	{
		"id": "a9a8fd17ee2b",
		"ts": "2026-08-15T02:47:46.261Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2475203.57,
		"hash": "a9a8fd17ee2bbfb1367ad6fc3e6624581d23a8a5b0e755828ebd20fda36cc784"
	},
	{
		"id": "27141260e48d",
		"ts": "2026-08-15T02:47:46.457Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 257560.98,
		"hash": "27141260e48d74028a31322a7b0608e5f8c77c643cecbb460b193d9f122757b8"
	},
	{
		"id": "b6cc1128ea1e",
		"ts": "2026-08-15T02:47:46.651Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 639435.53,
		"hash": "b6cc1128ea1e12dbfb06fa223ea2df68a2b31cb00f89a926b1e680e5a31635f1"
	},
	{
		"id": "dcb1e70cb43e",
		"ts": "2026-08-15T02:47:46.839Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1521585.11,
		"hash": "dcb1e70cb43e994de73109a054800c8213bc8f0eae084c4e501562de46d9f93a"
	},
	{
		"id": "a6121045dfc1",
		"ts": "2026-08-15T02:47:47.048Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 712434.39,
		"hash": "a6121045dfc1bac71f22e8c7664f50636e6a859058cbb44c3225780109575646"
	},
	{
		"id": "68a3a0e8ef94",
		"ts": "2026-08-15T02:47:47.251Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4150572.73,
		"hash": "68a3a0e8ef942e566f55ac4bcb054646f366e22369d68dd21ef7f2cd27306fd2"
	},
	{
		"id": "90e57475fd5f",
		"ts": "2026-08-15T02:47:47.456Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9441009,
		"hash": "90e57475fd5faf6fe0ff745caec435a75654624de63f3da6a12204c731e5c26b"
	},
	{
		"id": "c50aa6345f69",
		"ts": "2026-08-15T01:00:47.993Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111672594.77,
		"hash": "c50aa6345f69703d1869fc614b760931733cb8caad2eada7ed6d841a3bca60b0"
	},
	{
		"id": "6a24bee9e59f",
		"ts": "2026-08-15T01:00:48.228Z",
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
		"liquidityUsd": 16749301.26,
		"hash": "6a24bee9e59f770ae938fb19a8bec8ef90124bb2e2fe0895720783584eb14213"
	},
	{
		"id": "1da432cdf614",
		"ts": "2026-08-15T01:00:48.467Z",
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
		"liquidityUsd": 800536.61,
		"hash": "1da432cdf6149dd57a13d5f351bf534a3d3587a926eb67780df3bf4cc03c598b"
	},
	{
		"id": "db2705b3e28b",
		"ts": "2026-08-15T01:00:48.702Z",
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
		"liquidityUsd": 26576088.88,
		"hash": "db2705b3e28bf7b59cec02c0b30048b5716d9fb0eae5eb771afa92eaead9271f"
	},
	{
		"id": "39f84e9e116f",
		"ts": "2026-08-15T01:00:48.942Z",
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
		"liquidityUsd": 4147445.42,
		"hash": "39f84e9e116f17743b8600328ccf1ca6ea01789c541204fdda4b1076473a6ddc"
	},
	{
		"id": "ad2ba32043c4",
		"ts": "2026-08-15T01:00:49.176Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 893791.13,
		"hash": "ad2ba32043c4f2daf0b90fe989826471af1719102c78396d7890f16a76447da9"
	},
	{
		"id": "fa45a3528bad",
		"ts": "2026-08-15T01:00:49.421Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6048342.36,
		"hash": "fa45a3528bada267e031048feb4b294cc5cf154477842b9c8c10b24a558423a4"
	},
	{
		"id": "f3e2c38d22e4",
		"ts": "2026-08-15T01:00:49.659Z",
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
		"liquidityUsd": 3813986.97,
		"hash": "f3e2c38d22e4ca4974d10ef36c56972ee728fc957380f070ec97a1c4b999d08a"
	},
	{
		"id": "4e3d61ae7ab9",
		"ts": "2026-08-15T01:00:49.896Z",
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
		"liquidityUsd": 898828.14,
		"hash": "4e3d61ae7ab940970d7a0bb3a5c3e0ec9342d9df36471a7dff0cc069f38f2287"
	},
	{
		"id": "1540d7283239",
		"ts": "2026-08-15T01:00:50.129Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 6045533.24,
		"hash": "1540d72832391b0aaf9bc277a7a0d5cb535807da17efe8058a03ab3a602e529d"
	},
	{
		"id": "bfdadc82de52",
		"ts": "2026-08-15T01:00:50.354Z",
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
		"liquidityUsd": 2465147.9,
		"hash": "bfdadc82de52253492a84fe77d830a081f012d9517b9204a304c13e7fa92975f"
	},
	{
		"id": "9fe505ba835e",
		"ts": "2026-08-15T01:00:50.571Z",
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
		"liquidityUsd": 262108.73,
		"hash": "9fe505ba835e6f448ec767e747214d272bb56577f69a9be47018c66c739a5546"
	},
	{
		"id": "4140325a4c5f",
		"ts": "2026-08-15T01:00:50.792Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 655411.07,
		"hash": "4140325a4c5fc0928698d55adbe14c0432e4eccdf7c2fdd3e0607c4c9d24c00c"
	},
	{
		"id": "5b9837541803",
		"ts": "2026-08-15T01:00:51.015Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1519326.32,
		"hash": "5b98375418036972a6b1db2b071b1fe34f8689e6feac7c1ca774e9b89f88d7c3"
	},
	{
		"id": "148b5aede3ef",
		"ts": "2026-08-15T01:00:51.234Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 849627.79,
		"hash": "148b5aede3efe8d224c3babae1018dcb0f688b55e1cc0d72e598ffa160a24211"
	},
	{
		"id": "ec5dcb715160",
		"ts": "2026-08-15T01:00:51.458Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4144153.26,
		"hash": "ec5dcb715160bf3f77a628c9348d533a27b515805dc78e6f7d382c683a2fb0ff"
	},
	{
		"id": "9dbe30991d29",
		"ts": "2026-08-15T01:00:51.674Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9437977.51,
		"hash": "9dbe30991d29b7e707e4bd3f684065aae5b171e421a9992b95216c871b0d15e6"
	},
	{
		"id": "cca7bd3611c8",
		"ts": "2026-08-14T23:17:31.909Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111752186.23,
		"hash": "cca7bd3611c86b9b9c39f33459dd2508e586c74df9810402175b2f47d9436a81"
	},
	{
		"id": "a6d1135ddc1d",
		"ts": "2026-08-14T23:17:32.326Z",
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
		"liquidityUsd": 16144191.05,
		"hash": "a6d1135ddc1d4c9f81b5c2a2d8724c44b6973cff4879fcdf28d8013e7ea8ce66"
	},
	{
		"id": "d2d5ee759fc5",
		"ts": "2026-08-14T23:17:32.560Z",
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
		"liquidityUsd": 801051.37,
		"hash": "d2d5ee759fc568c67b83c39bc99b5033ada64c90f0030c60ac1bd4e595d96547"
	},
	{
		"id": "29170fa6d960",
		"ts": "2026-08-14T23:17:32.785Z",
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
		"liquidityUsd": 26544262.7,
		"hash": "29170fa6d9600ca62742c6a6f3a17014f3dd9b164a2401fca1f847e78f39f80f"
	},
	{
		"id": "9c405886d718",
		"ts": "2026-08-14T23:17:33.017Z",
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
		"liquidityUsd": 4157458.72,
		"hash": "9c405886d7183e0be819b42d95fa51dfb05815a35feb7b5af7c1327e3ef31956"
	},
	{
		"id": "b8f296744282",
		"ts": "2026-08-14T23:17:33.260Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889873.4,
		"hash": "b8f2967442828a7f5bbbd7ba23bceedcb3d7bf1b4dd3411c2ea7b934e0f62db4"
	},
	{
		"id": "93b2d92628c4",
		"ts": "2026-08-14T23:17:33.490Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6087312.72,
		"hash": "93b2d92628c4c630952a5a17ae48168cb6a952b5c50dc8d55ef826e2ab0f1e8e"
	},
	{
		"id": "e4b570ed2fee",
		"ts": "2026-08-14T23:17:33.712Z",
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
		"liquidityUsd": 3811047.32,
		"hash": "e4b570ed2fee413bba08e5576747a1724ea15505ace0e79a84ab719768c464a3"
	},
	{
		"id": "4e646d54b535",
		"ts": "2026-08-14T23:17:33.942Z",
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
		"liquidityUsd": 898940.73,
		"hash": "4e646d54b53580b60e4d092002ab6ad2e6cff6592a5980c63f83e31f9321a38c"
	},
	{
		"id": "8ea1964309d2",
		"ts": "2026-08-14T23:17:34.162Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2455398.25,
		"hash": "8ea1964309d207528b631281b268da13801bc23f667a4b9d897e1296b2e6466e"
	},
	{
		"id": "0b3b3d7bd9bb",
		"ts": "2026-08-14T23:17:34.380Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 640620.84,
		"hash": "0b3b3d7bd9bb693a89c168f5e124d8e4dd2193ea8a0d27995dc366e09accd832"
	},
	{
		"id": "8dbe7b300865",
		"ts": "2026-08-14T23:17:34.586Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6087312.72,
		"hash": "8dbe7b300865a5f32aeaa761257db35726f4c97a0fa06169adf2eee5c1b8a9fb"
	},
	{
		"id": "4dc3d4496127",
		"ts": "2026-08-14T23:17:34.805Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 268722.85,
		"hash": "4dc3d4496127a9353196e5ed2b626ddbdec05d2f050eb461eee05f627332f74d"
	},
	{
		"id": "cf66bd7ff5e0",
		"ts": "2026-08-14T23:17:35.012Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1518661.33,
		"hash": "cf66bd7ff5e02fcb5d338c6197ab4a848fac8abe2767f2883b413a3f363b4bd5"
	},
	{
		"id": "7eab02af946e",
		"ts": "2026-08-14T23:17:35.280Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 847329.31,
		"hash": "7eab02af946e9a5b3942fcc8c896ed14115ec71e9ccc3e3ff68b757f2694e87d"
	},
	{
		"id": "909dc50f99db",
		"ts": "2026-08-14T23:17:35.487Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9516931.86,
		"hash": "909dc50f99db2b68a0798549983fd23b2bfa6a608ba6134eba98bd5f1333b663"
	},
	{
		"id": "ccac45d1d6c4",
		"ts": "2026-08-14T23:17:35.706Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4137377.09,
		"hash": "ccac45d1d6c4664ba98ef1414977372b47449f40ab4bce6ad736b6ba3e70ad8f"
	},
	{
		"id": "a9255a3e3ef2",
		"ts": "2026-08-14T22:18:30.974Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111748688.86,
		"hash": "a9255a3e3ef2baa8801e46636cc42153360cda35fa6704fa0dc370f1dc742fee"
	},
	{
		"id": "519cf827e7cf",
		"ts": "2026-08-14T22:18:31.341Z",
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
		"liquidityUsd": 16265263.89,
		"hash": "519cf827e7cf368af384b5646ed0ab2f6bb7000bd63461aa9f57e3dda5e5e674"
	},
	{
		"id": "2b2d24c7c9ae",
		"ts": "2026-08-14T22:18:31.608Z",
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
		"liquidityUsd": 801150.8,
		"hash": "2b2d24c7c9ae34a69e5b43ac6c71f4e4eb9c729b622cecda284a5e36b7d5997a"
	},
	{
		"id": "301be68b14f1",
		"ts": "2026-08-14T22:18:31.812Z",
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
		"liquidityUsd": 26544022.97,
		"hash": "301be68b14f13b41671b5bd78dda3390174c9cf8c2f4237d9e681fbf1344e46f"
	},
	{
		"id": "965e9aba5eee",
		"ts": "2026-08-14T22:18:32.159Z",
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
		"liquidityUsd": 4160388.59,
		"hash": "965e9aba5eee0f403977be6d293b787ece0b94184684b5a55b36fe962237621a"
	},
	{
		"id": "5906ae6be4d7",
		"ts": "2026-08-14T22:18:32.382Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889873.4,
		"hash": "5906ae6be4d714d3297e48394a5d8f0e63fe3da64b7664e4206d1f0f028f9394"
	},
	{
		"id": "4608efd207a0",
		"ts": "2026-08-14T22:18:32.568Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6014198.75,
		"hash": "4608efd207a0de413decd4ae7cf92dcd205596c215554e63656acec7234b0056"
	},
	{
		"id": "7900b660a3f3",
		"ts": "2026-08-14T22:18:32.792Z",
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
		"liquidityUsd": 3804239,
		"hash": "7900b660a3f37f5ae8156860b4238416f1af7a0a39689140d1643cfa6bbaa212"
	},
	{
		"id": "74883a21ef81",
		"ts": "2026-08-14T22:18:33.002Z",
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
		"liquidityUsd": 897966.2,
		"hash": "74883a21ef812835588cf6309d1f84bfccb7208ea4455a5ee687176d2f8ccac7"
	},
	{
		"id": "daf8a79584aa",
		"ts": "2026-08-14T22:18:33.188Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2518523.48,
		"hash": "daf8a79584aa1c21d1cddeb5c1e1eef9008b2aef4ed7f96921fcac87da9c85bb"
	},
	{
		"id": "07523104c2ef",
		"ts": "2026-08-14T22:18:33.392Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 644884.55,
		"hash": "07523104c2ef3ff3ff6c48a42be29752779164743b8ee33d1d38ac9d35b6ee8a"
	},
	{
		"id": "d9a39c6ae097",
		"ts": "2026-08-14T22:18:33.579Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6014198.75,
		"hash": "d9a39c6ae097decfe59be9607a2664b8f619b82b0ed1994c477de15285e0b5e9"
	},
	{
		"id": "fafb6753b80a",
		"ts": "2026-08-14T22:18:33.919Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 267260.95,
		"hash": "fafb6753b80a6a8f2260337545a9f30a08c87854d8c266466888a85d66203650"
	},
	{
		"id": "e94961bf085a",
		"ts": "2026-08-14T22:18:34.121Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1518485.28,
		"hash": "e94961bf085a456f273464c1a43f0903d907ae2b902578949898f3112262e0ad"
	},
	{
		"id": "4e0036d85ea1",
		"ts": "2026-08-14T22:18:34.323Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 846573.28,
		"hash": "4e0036d85ea18a2478563341367455b0dda41b6f9695657f861e3749e811e288"
	},
	{
		"id": "afe60f6984fd",
		"ts": "2026-08-14T22:18:34.519Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9494840.93,
		"hash": "afe60f6984fd218c4301e993d2ce1a4bdaed2c76dddbb669bd5bd29821e50236"
	},
	{
		"id": "097b95b9a6ae",
		"ts": "2026-08-14T22:18:34.699Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4129222.71,
		"hash": "097b95b9a6aede1ca49ee41c77acaa67c8283a33950354ec0ffc926ad0c340c3"
	},
	{
		"id": "3d067c4f7c97",
		"ts": "2026-08-14T21:20:56.773Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111732747.02,
		"hash": "3d067c4f7c970f06a116f83c4338d126907e6cd313efcd079dc8916467db0590"
	},
	{
		"id": "5a7c0d7e07d1",
		"ts": "2026-08-14T21:20:57.005Z",
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
		"liquidityUsd": 15731062.96,
		"hash": "5a7c0d7e07d144e2ea027881c90a64abb3c67da2ec204988316d6c19f967f21b"
	},
	{
		"id": "c56e15903e08",
		"ts": "2026-08-14T21:20:57.228Z",
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
		"liquidityUsd": 801044.19,
		"hash": "c56e15903e08186daf2274d0ba2aa4df62967fb3d1f8cde5012be2bd3556be88"
	},
	{
		"id": "e4cf231e5fe6",
		"ts": "2026-08-14T21:20:57.456Z",
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
		"liquidityUsd": 26546602.36,
		"hash": "e4cf231e5fe6637e8d99f71d9b44503736021cbb2b550ba008118f4e0fcdf7d4"
	},
	{
		"id": "7e946108f74d",
		"ts": "2026-08-14T21:20:57.690Z",
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
		"liquidityUsd": 4160388.59,
		"hash": "7e946108f74d2a8dd718e9db3e374e15c19fa46565e4336ad30a6cff64167f03"
	},
	{
		"id": "e3d384dc6644",
		"ts": "2026-08-14T21:20:57.921Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889873.4,
		"hash": "e3d384dc66442482fefde1112dbec35383d765aa454a312d337765b8a6aa0be7"
	},
	{
		"id": "43dd2fe2db1b",
		"ts": "2026-08-14T21:20:58.149Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6000138.6,
		"hash": "43dd2fe2db1b9b25dde3804006b61c448e00aa9d56b39bedbbe40d1d56a03058"
	},
	{
		"id": "361368a1fe29",
		"ts": "2026-08-14T21:20:58.385Z",
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
		"liquidityUsd": 3806684.47,
		"hash": "361368a1fe29eb6ec65d74a734936163f208d84f1777690407313121cb4cb7c8"
	},
	{
		"id": "083012d50769",
		"ts": "2026-08-14T21:20:58.613Z",
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
		"liquidityUsd": 896758.02,
		"hash": "083012d507696b236614c616fdb0c918ed3033ccd2bc9dda33f0dd9fb12509c8"
	},
	{
		"id": "076ead98fffd",
		"ts": "2026-08-14T21:20:58.898Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"has_blacklist",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 649612.86,
		"hash": "076ead98fffd4493eeafecbd5548a00184bfeebb1ff28626ea2491371117e58a"
	},
	{
		"id": "5cfd16f38c00",
		"ts": "2026-08-14T21:20:59.116Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6000133.3,
		"hash": "5cfd16f38c000f939d3856cc13148ef179a70d99e750d89b6ad7e027c3a5d364"
	},
	{
		"id": "c0646669d476",
		"ts": "2026-08-14T21:20:59.329Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 266809.58,
		"hash": "c0646669d4761728f05a703487e820aa1f796d331d015cbac46e1b166f2971be"
	}
]
