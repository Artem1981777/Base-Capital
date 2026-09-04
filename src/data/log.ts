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
	"updatedAt": "2026-09-04T21:12:07.507Z",
	"tokensScored": 16155,
	"verdictsIssued": 16155,
	"safe": 13724,
	"risky": 1199,
	"likelyRug": 1232,
	"ticks": 928
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "d27ed4eeb883",
		"ts": "2026-09-04T21:12:03.190Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117488271.08,
		"hash": "d27ed4eeb883d8358919d468b074378ab7dfd8d12c9e3d24cdb1a736f4506139"
	},
	{
		"id": "d175d525aba0",
		"ts": "2026-09-04T21:12:03.691Z",
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
		"liquidityUsd": 18442144.85,
		"hash": "d175d525aba08edc8eb0f43d280ad6988db34e7a34a0de99884fea621ba3ebf0"
	},
	{
		"id": "f8bf56bfaebc",
		"ts": "2026-09-04T21:12:03.957Z",
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
		"liquidityUsd": 1034376.16,
		"hash": "f8bf56bfaebcc9e12bdce75165d702904aba0aad992c2caf41f368a228888d0f"
	},
	{
		"id": "dc4b19ad6e96",
		"ts": "2026-09-04T21:12:04.236Z",
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
		"liquidityUsd": 29307490.73,
		"hash": "dc4b19ad6e96a4253fc5f5881df37fe2708d9b5a0af0e80ef2ecc6ba9e2a2a5b"
	},
	{
		"id": "0a72395a80a3",
		"ts": "2026-09-04T21:12:04.488Z",
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
		"liquidityUsd": 4148238.04,
		"hash": "0a72395a80a3779af8b2e134e741449abda21df34fa29cd16aa51b55b792bc7b"
	},
	{
		"id": "5d50dd0abc90",
		"ts": "2026-09-04T21:12:04.740Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1147442.43,
		"hash": "5d50dd0abc902566a57be1509dbc8dcc0fc9e275c180762731e931dacae18194"
	},
	{
		"id": "af84f7fa8c9f",
		"ts": "2026-09-04T21:12:05.001Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2256869.22,
		"hash": "af84f7fa8c9f0815f70db567eaceefe8548c8e621c41b8931824184bcf63fc95"
	},
	{
		"id": "6b4e5ef6ac8a",
		"ts": "2026-09-04T21:12:05.251Z",
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
		"liquidityUsd": 1466306.14,
		"hash": "6b4e5ef6ac8a7ffee6862d48c1174511eb1fae6003f598db579a2f98d7716a66"
	},
	{
		"id": "84c0bf9164d9",
		"ts": "2026-09-04T21:12:05.506Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1183633.63,
		"hash": "84c0bf9164d95f7ad933f52656f5884846608f6746c45c82405c21fcd2c489fd"
	},
	{
		"id": "5d448eacd937",
		"ts": "2026-09-04T21:12:05.753Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"volume_liquidity_anomaly",
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 831099.96,
		"hash": "5d448eacd9376141b5bb65797e342a42ca773f3a74b690ac62a0ecdf3ac1ee8f"
	},
	{
		"id": "2ba44c6376e7",
		"ts": "2026-09-04T21:12:05.988Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 202299.02,
		"hash": "2ba44c6376e7d2b73a98f1a22f4f66cffcf68b92aeb9b0421633699ba5080460"
	},
	{
		"id": "f4007ada140c",
		"ts": "2026-09-04T21:12:06.228Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1302958.01,
		"hash": "f4007ada140c6f6dcdb0cc8e1871a270d7ce3a401217e2f59a12644d979ba1fd"
	},
	{
		"id": "c0dc5c5104a2",
		"ts": "2026-09-04T21:12:06.464Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1848370.18,
		"hash": "c0dc5c5104a2b6814f0c671af174b9115693f742bedb225fc3ae710c1475b4ed"
	},
	{
		"id": "57cbf04b88e1",
		"ts": "2026-09-04T21:12:06.695Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3243879.63,
		"hash": "57cbf04b88e12b042ceac9a2659b3dd11aada427c354e21f096c0d5c6eda731e"
	},
	{
		"id": "dea5b24102a3",
		"ts": "2026-09-04T21:12:06.926Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1322736.26,
		"hash": "dea5b24102a3f97cfdfc0b403365632fbc9e0af203b911db00ddcd633a31f695"
	},
	{
		"id": "a06e1d387873",
		"ts": "2026-09-04T21:12:07.271Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13418842.18,
		"hash": "a06e1d387873119ed6f2db8504ea243ef998ddcb4513755bbfb17b509c13cc47"
	},
	{
		"id": "ce8285236747",
		"ts": "2026-09-04T21:12:07.506Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 795117.49,
		"hash": "ce82852367479bb01e93c336e293c15be42145b2483805ea9148c500086d00f7"
	},
	{
		"id": "29c9e6cf0e42",
		"ts": "2026-09-04T18:02:24.919Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117498682.33,
		"hash": "29c9e6cf0e423dfe932e6270561afd2364ea44824fced9fc40ad39b3659506f7"
	},
	{
		"id": "133381e6519f",
		"ts": "2026-09-04T18:02:25.272Z",
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
		"liquidityUsd": 15016181.26,
		"hash": "133381e6519f576324a18feeda85a86f86dab87ac7a491406d67e13fa2800b8d"
	},
	{
		"id": "39cd7f020036",
		"ts": "2026-09-04T18:02:25.573Z",
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
		"liquidityUsd": 1030343.8,
		"hash": "39cd7f020036ef3c0c3401f9bdbddd6193814bf97a1f32c9060a244e30fa1fcf"
	},
	{
		"id": "7a015618feee",
		"ts": "2026-09-04T18:02:25.890Z",
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
		"liquidityUsd": 29240654.38,
		"hash": "7a015618feeef422e0b4d73b573d7ac677493d654a37251da59a72e8a52e5ee7"
	},
	{
		"id": "1b614dc1f84f",
		"ts": "2026-09-04T18:02:26.323Z",
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
		"liquidityUsd": 4147904.49,
		"hash": "1b614dc1f84feba5949c849663eb70cb9b4fd979aa2af05df9e1b2890b7ea374"
	},
	{
		"id": "80522a11c893",
		"ts": "2026-09-04T18:02:26.627Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1144856.06,
		"hash": "80522a11c893f790df41af5e682b8377dbd2f1eb6eb0ddbab780c607abcb6af2"
	},
	{
		"id": "6b84703c4046",
		"ts": "2026-09-04T18:02:26.893Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2117241.41,
		"hash": "6b84703c4046eaf9c7727d36bd77c674ae73262aaaf0ca1a4521844fe53dd20e"
	},
	{
		"id": "c84f79356d6e",
		"ts": "2026-09-04T18:02:27.129Z",
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
		"liquidityUsd": 1462930.23,
		"hash": "c84f79356d6e4932aea0403cc5494846c9f5270c03786ebd10143cd0eb8cf650"
	},
	{
		"id": "f44577963a80",
		"ts": "2026-09-04T18:02:27.428Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1024948.82,
		"hash": "f44577963a80ab970caeb5dfcd408d3d199880e91a91b0044f09d175f8a5b3e3"
	},
	{
		"id": "50f301746b19",
		"ts": "2026-09-04T18:02:27.700Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"volume_liquidity_anomaly",
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 845853.77,
		"hash": "50f301746b19bbf4690c7397255af0f5b4ae67e11370b5159dae1057092e46e9"
	},
	{
		"id": "b56a2f708682",
		"ts": "2026-09-04T18:02:27.922Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1261884.24,
		"hash": "b56a2f708682cacfb1ea32ea1ca08f888b6e6183772eeb8470691218ad875e30"
	},
	{
		"id": "5d1b799c829a",
		"ts": "2026-09-04T18:02:28.156Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 183068.62,
		"hash": "5d1b799c829a754b953e56252be027fb6bf98833d50cb76612f409c1d0c11c0d"
	},
	{
		"id": "4c5f688c052f",
		"ts": "2026-09-04T18:02:28.394Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1843216.17,
		"hash": "4c5f688c052f8539470605632b24dcf96e4a9e3f83c3ef031daef09271f85016"
	},
	{
		"id": "e1b7174947f8",
		"ts": "2026-09-04T18:02:28.614Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3250032.02,
		"hash": "e1b7174947f8b4b67114a6ab0a41f8779f55e97a9c582624a7a718b48a9d4baa"
	},
	{
		"id": "70db56d41022",
		"ts": "2026-09-04T18:02:28.850Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 153964.33,
		"hash": "70db56d41022c8551a3af507ca655c8395fcff287b27fc2ff8de638a47926f43"
	},
	{
		"id": "dfa54e185e16",
		"ts": "2026-09-04T18:02:29.088Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1330281.27,
		"hash": "dfa54e185e1643f9e69aee3c54211c0fed40e3b0fe36eae06e99abbb969f4f8b"
	},
	{
		"id": "f70dd6f62d06",
		"ts": "2026-09-04T18:02:29.307Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3943416.03,
		"hash": "f70dd6f62d06e6baa01ece67b824991bbbe20073bf771930fd29f2858761a85f"
	},
	{
		"id": "9e837c5ac4a5",
		"ts": "2026-09-04T18:02:29.548Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1142743.91,
		"hash": "9e837c5ac4a5cbcf57726fc9b62d623fa5e6d2129b299b1489bfddd75af92a55"
	},
	{
		"id": "535e42adc6e3",
		"ts": "2026-09-04T14:44:38.172Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117452340.32,
		"hash": "535e42adc6e37dddfcf755b97f54ba8919e5dda9f821e0ed18ad81b54eddcf6f"
	},
	{
		"id": "5ac497a0a8a5",
		"ts": "2026-09-04T14:44:38.442Z",
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
		"liquidityUsd": 18816683.81,
		"hash": "5ac497a0a8a58c2a80c6cecc5e154881dbe1fb63c05b1137e3a16f89c1dac6f4"
	},
	{
		"id": "77a0973a2a62",
		"ts": "2026-09-04T14:44:38.814Z",
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
		"liquidityUsd": 1058003.23,
		"hash": "77a0973a2a62e6bebda9ad66df1e01d566024326f0163e51cae694de0190dcdf"
	},
	{
		"id": "98de0adb3856",
		"ts": "2026-09-04T14:44:39.030Z",
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
		"liquidityUsd": 29093412.52,
		"hash": "98de0adb3856744d26a2347128f88cf631f0e65bc1f7169a000c77a7bfb0dfcd"
	},
	{
		"id": "0f5b4ef1f222",
		"ts": "2026-09-04T14:44:39.284Z",
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
		"liquidityUsd": 4145548.74,
		"hash": "0f5b4ef1f22235d50933b51bfd6f6fe97ebe9be2bfcd665b1d272d8a85ae3e3b"
	},
	{
		"id": "1a9979da50c0",
		"ts": "2026-09-04T14:44:39.509Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1145776.72,
		"hash": "1a9979da50c0ae736f727e14c4601e716568bd0a3fa4168addf0ab499271901f"
	},
	{
		"id": "4ddb4ab3641d",
		"ts": "2026-09-04T14:44:39.737Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1105206.05,
		"hash": "4ddb4ab3641d835d6bf6c61aa501bafa6c0ac8330ca4cfc68e92fe2db066a31f"
	},
	{
		"id": "7dddc5fbea28",
		"ts": "2026-09-04T14:44:39.958Z",
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
		"liquidityUsd": 1462147.49,
		"hash": "7dddc5fbea283962fe87d4c39da50ea80476fcb4553ba1dbd2b446f88c0013b7"
	},
	{
		"id": "ca172b78afb8",
		"ts": "2026-09-04T14:44:40.174Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1327432.95,
		"hash": "ca172b78afb8b70c9ef7fad588bdc0c77a5ce0a5687297845bec21ac68c74611"
	},
	{
		"id": "b74747b0f318",
		"ts": "2026-09-04T14:44:40.397Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"volume_liquidity_anomaly",
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 846368.4,
		"hash": "b74747b0f318d308ca3c39ea0bc8773fa3bff88df830f0d2c128359431be7cab"
	},
	{
		"id": "dc5ff36d6303",
		"ts": "2026-09-04T14:44:40.615Z",
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
		"liquidityUsd": 965824.81,
		"hash": "dc5ff36d6303d7468138241eda0f4f0d121b88912d4a96a4d3f1b7e1d504be18"
	},
	{
		"id": "edc484d58526",
		"ts": "2026-09-04T14:44:40.835Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1863806.07,
		"hash": "edc484d58526c086cc7b30df35acde9249aa47e3aeb1e68c13fd1ecd65f0e963"
	},
	{
		"id": "510808adcebf",
		"ts": "2026-09-04T14:44:41.046Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3309081.78,
		"hash": "510808adcebfad24e5fa143283a47034cb83c31b21e232a1d497533549b9b06d"
	},
	{
		"id": "029a3cb9088f",
		"ts": "2026-09-04T14:44:41.270Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 751762.42,
		"hash": "029a3cb9088fbdb003fcc1cef6b1c489c0178a3cfbd923b0b62925b5523deb43"
	},
	{
		"id": "142c361b42e6",
		"ts": "2026-09-04T14:44:41.474Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 139229.59,
		"hash": "142c361b42e62fc27e32710afc0f4c3568327c1a1c5793a7d915476d856c4713"
	},
	{
		"id": "3e1b7e754815",
		"ts": "2026-09-04T14:44:41.694Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1330744.37,
		"hash": "3e1b7e754815971781db960af27b851df143f38139120863d30d0b000fac3522"
	},
	{
		"id": "7194fe769ca7",
		"ts": "2026-09-04T14:44:41.894Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1138533.69,
		"hash": "7194fe769ca74722b06f1962f00e4db6624dcb8a60363b9c4af04e44e0621814"
	},
	{
		"id": "15001224ee08",
		"ts": "2026-09-04T14:44:42.119Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3979487.88,
		"hash": "15001224ee083f8ac20f625612d70e463a812a9921f013e1f77d02cd34c11101"
	},
	{
		"id": "17dce5ed7ead",
		"ts": "2026-09-04T10:36:59.013Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118604913.25,
		"hash": "17dce5ed7ead503bd04bcf794bd1df3f486406570bd1eab4ac07e6a85ecadd80"
	},
	{
		"id": "5e713dd784bd",
		"ts": "2026-09-04T10:36:59.224Z",
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
		"liquidityUsd": 18599063.77,
		"hash": "5e713dd784bd256a92088c5bcfd64468345e2b251736c4087a914ce95de28b03"
	},
	{
		"id": "fef19b729002",
		"ts": "2026-09-04T10:36:59.433Z",
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
		"liquidityUsd": 1059745.29,
		"hash": "fef19b7290027fd9a05f2ac2f4969fba15e44f9e742930fe2db20ff8cc22bc6b"
	},
	{
		"id": "9732584ee056",
		"ts": "2026-09-04T10:36:59.646Z",
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
		"liquidityUsd": 29478413.01,
		"hash": "9732584ee056f8aa46497fe1b9ba34aff59e861a1234b97d0a4d7370280f1993"
	},
	{
		"id": "15816ba870c1",
		"ts": "2026-09-04T10:36:59.850Z",
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
		"liquidityUsd": 4279039.48,
		"hash": "15816ba870c123eade2229631586e2333c6491d7c6ebcdab6ae2e4ec45336d94"
	},
	{
		"id": "fcecda494079",
		"ts": "2026-09-04T10:37:00.093Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1176407.73,
		"hash": "fcecda49407963242bc79e8f7c14720d22682fcd6bcb1e93bb178213cff1dccc"
	},
	{
		"id": "9ef4776b19bc",
		"ts": "2026-09-04T10:37:00.333Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1888547.85,
		"hash": "9ef4776b19bc6e26f641294d85edadf03af70ea2d2d538a2a209ae580dc89258"
	},
	{
		"id": "872d2787c3e1",
		"ts": "2026-09-04T10:37:00.595Z",
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
		"liquidityUsd": 2649718.91,
		"hash": "872d2787c3e18af8e90a64d8751dee7c0077708488090141fce7f19291f29c40"
	},
	{
		"id": "3ad307a97a26",
		"ts": "2026-09-04T10:37:00.803Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1089208.23,
		"hash": "3ad307a97a2644729a32605cad451bf233e26ed8869ad12094b5201dd09d2568"
	},
	{
		"id": "28b4d8ce416f",
		"ts": "2026-09-04T10:37:01.006Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1338604.7,
		"hash": "28b4d8ce416f7e41910f77cb30b82b104fa688af1d7d545b97c89e16cdf3b950"
	},
	{
		"id": "0b4f21d94f87",
		"ts": "2026-09-04T10:37:01.238Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"volume_liquidity_anomaly",
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 865228.73,
		"hash": "0b4f21d94f87b27b89efdfb58519af63df988e0db87a45edf14575922bf08982"
	},
	{
		"id": "80839690fe90",
		"ts": "2026-09-04T10:37:01.713Z",
		"symbol": "BASEJUICE",
		"token": "0xb200000000000000000000046390aed221043f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 116389.32,
		"hash": "80839690fe90d5a108f871e0e8fa3435949cb987e501a40823189420754db485"
	},
	{
		"id": "f042f70dc57f",
		"ts": "2026-09-04T10:37:02.017Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 90030.69,
		"hash": "f042f70dc57f76e830307006ad56754046127ad987510ee7a6bd0dc388649716"
	},
	{
		"id": "8c9e525129a1",
		"ts": "2026-09-04T10:37:02.220Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 144179.53,
		"hash": "8c9e525129a1e07f8e248fdcd5d78f93d7f8ba3dcdd470635e4ac3b7d1550c0c"
	},
	{
		"id": "daadf9fa5c11",
		"ts": "2026-09-04T10:37:02.576Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3282471.18,
		"hash": "daadf9fa5c11423a50a7a104e9256dc1b061c3e7c2e6e9fcaabda74c06e5513e"
	},
	{
		"id": "966b5d49a33e",
		"ts": "2026-09-04T10:37:02.779Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 520034.66,
		"hash": "966b5d49a33e043eb94b95faad40f11c6aa8ed11760d09930eb5faad833b870b"
	},
	{
		"id": "f1d43ad11b10",
		"ts": "2026-09-04T10:37:02.974Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1926477.5,
		"hash": "f1d43ad11b103357cc49825932d5caa55f5683c9b0f9070ce2242ac0fa69d9b7"
	},
	{
		"id": "87d55ec704cd",
		"ts": "2026-09-04T10:37:03.165Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1172279.92,
		"hash": "87d55ec704cd4425a4c5d210991381ec08f027cbc14d9205d8a69db2e036fe0c"
	},
	{
		"id": "630e666008bc",
		"ts": "2026-09-04T10:37:03.361Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 882994.62,
		"hash": "630e666008bcd258e6706688668eaab95fd3c304b96828bc45d111e87b48ff9a"
	},
	{
		"id": "fb930b96aaba",
		"ts": "2026-09-04T05:32:41.184Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118498146.79,
		"hash": "fb930b96aaba5c7dff317d0a2b17ecde2c1c35ff672074ef94761299289a3821"
	},
	{
		"id": "56b4e6bac223",
		"ts": "2026-09-04T05:32:41.648Z",
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
		"liquidityUsd": 18237501.47,
		"hash": "56b4e6bac223e6cf07035733e23b232f166ac429e180bf8bccd2ad80b7eb6275"
	},
	{
		"id": "12b2979dba98",
		"ts": "2026-09-04T05:32:41.897Z",
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
		"liquidityUsd": 1001763.31,
		"hash": "12b2979dba98c431e4dd9a02481474aa4ff7c0d074e699e108caece11d37024f"
	},
	{
		"id": "1f51b8bd64fb",
		"ts": "2026-09-04T05:32:42.147Z",
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
		"liquidityUsd": 29482708.32,
		"hash": "1f51b8bd64fbd67f1d84da1e44dba63e329327b8406b95f7ed971818ea38b288"
	},
	{
		"id": "d0bf4ed18dc0",
		"ts": "2026-09-04T05:32:42.394Z",
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
		"liquidityUsd": 4297451.54,
		"hash": "d0bf4ed18dc0f30975587c938589bd542353d8c71a07180fed76b8face760b44"
	},
	{
		"id": "15d0a4a16e11",
		"ts": "2026-09-04T05:32:42.652Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1171006.03,
		"hash": "15d0a4a16e11fc1c667507979f8554412b5495b227aa3fc787615070c5470e60"
	},
	{
		"id": "f7b3a1402136",
		"ts": "2026-09-04T05:32:42.894Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3088063.3,
		"hash": "f7b3a1402136e947aa3813e33f9542d39ae54499f009e0649f848ebfb92d95f6"
	},
	{
		"id": "2f261a931ed3",
		"ts": "2026-09-04T05:32:43.143Z",
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
		"liquidityUsd": 2858202.92,
		"hash": "2f261a931ed339046651164617b052740fea84f968d5d8fe98f570bc0dc503b8"
	},
	{
		"id": "89478956aab0",
		"ts": "2026-09-04T05:32:43.396Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1047859.35,
		"hash": "89478956aab0f3316bc0123689b4d1e0cb1177d7be63f09e841fef4cb2485208"
	},
	{
		"id": "701f6886020e",
		"ts": "2026-09-04T05:32:43.647Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1334251.65,
		"hash": "701f6886020e75c5cd99d047489c190f1ec04a97710607c3e9e76b61381606ec"
	},
	{
		"id": "3de554a2664a",
		"ts": "2026-09-04T05:32:43.877Z",
		"symbol": "BASEJUICE",
		"token": "0xb200000000000000000000046390aed221043f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 124364.49,
		"hash": "3de554a2664adc9695cf653ebe0a9ae4794ba325517e74b1351b9b9cfd6838a5"
	},
	{
		"id": "e58e46304783",
		"ts": "2026-09-04T05:32:44.104Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 911527.4,
		"hash": "e58e4630478371975606707517fd0e31bffd10bd16ef343c0a6a2600d89b1d51"
	},
	{
		"id": "5c4ebfdbf4ce",
		"ts": "2026-09-04T05:32:44.331Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 100867.36,
		"hash": "5c4ebfdbf4cefd46689dc471cc735a00ca4ea0d73c238189c5ca802499faccaf"
	},
	{
		"id": "2ed26f7cf109",
		"ts": "2026-09-04T05:32:44.558Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1916241.63,
		"hash": "2ed26f7cf1098924e8fce59c472f522e2ce58735524e8fc606ef98a8ebb0b7c3"
	},
	{
		"id": "6aefe723c488",
		"ts": "2026-09-04T05:32:44.785Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 152657.2,
		"hash": "6aefe723c48887b1ca10210ba7aeb76a251738e0232752b148d9152af3479fab"
	},
	{
		"id": "6879f6de5925",
		"ts": "2026-09-04T05:32:45.012Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3292196.99,
		"hash": "6879f6de592549a84c1f5da9aa3ad7c3e2a24d2723a9daf25202065e62a5098e"
	},
	{
		"id": "5dd9096563f1",
		"ts": "2026-09-04T05:32:45.240Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1170310.99,
		"hash": "5dd9096563f1a0ea82109b33b55fd6162e5e5fc5c189aef204015b692708376b"
	},
	{
		"id": "541ed3263f17",
		"ts": "2026-09-04T05:32:45.470Z",
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
		"liquidityUsd": 1087484.13,
		"hash": "541ed3263f17f8e0aa4a81611515f7ed635f90526baab11ee22db654125c5811"
	},
	{
		"id": "6f656311ae01",
		"ts": "2026-09-04T05:32:45.698Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4120416.55,
		"hash": "6f656311ae0117133b3d628c9799c0be0ef9cddb49dce7033c2653a2bb1e6738"
	},
	{
		"id": "674aa60356ba",
		"ts": "2026-09-04T00:43:08.017Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118718638.97,
		"hash": "674aa60356ba9fd795eea1ce23938bde8d72fe6096e73b0c7d43bec83e00ecf8"
	},
	{
		"id": "804e51104d82",
		"ts": "2026-09-04T00:43:08.275Z",
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
		"liquidityUsd": 14162627.38,
		"hash": "804e51104d82787e39e8b36215e3a2cb5de92e9193c3fc7e4778eec10b0ace51"
	},
	{
		"id": "19aaa3821900",
		"ts": "2026-09-04T00:43:08.531Z",
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
		"liquidityUsd": 989901.11,
		"hash": "19aaa38219002478d92bc936a3031f0d50f82e30e7bacde97b9a5468b9bf8e1d"
	},
	{
		"id": "91f58585884e",
		"ts": "2026-09-04T00:43:08.819Z",
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
		"liquidityUsd": 29473499.79,
		"hash": "91f58585884efa8425e90bb9fa5f87460da1592ce0a8215760ad81cae1d53334"
	},
	{
		"id": "ec09993af88d",
		"ts": "2026-09-04T00:43:09.066Z",
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
		"liquidityUsd": 4334847.14,
		"hash": "ec09993af88dd1b2961f79d19e79842905d8a4044b15d748cf8d5cbc70ec4489"
	},
	{
		"id": "67974ea28ae4",
		"ts": "2026-09-04T00:43:09.330Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1184552.89,
		"hash": "67974ea28ae45a7fc402bdbe5f7f67b0787c1a0a1944d1d6308641c09d78860f"
	},
	{
		"id": "81163900b0ce",
		"ts": "2026-09-04T00:43:09.606Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3143499.02,
		"hash": "81163900b0cec32b39ef870d12a2576e8c19f2c5a94470b9e2e26ee2da701a1c"
	},
	{
		"id": "e84aedbb0edf",
		"ts": "2026-09-04T00:43:09.879Z",
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
		"liquidityUsd": 3280164.12,
		"hash": "e84aedbb0edf13b435423158227b88ceff3456dc38fef86e3d2fadb6c69bcb5b"
	},
	{
		"id": "f3ef5a4c067e",
		"ts": "2026-09-04T00:43:10.160Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1038708.23,
		"hash": "f3ef5a4c067ed734491e48366ab589d24e11b432652a08ee5d776779ad6abdbc"
	},
	{
		"id": "8a42b606808d",
		"ts": "2026-09-04T00:43:10.448Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1967435.47,
		"hash": "8a42b606808d9b96f0edcf4ab37ecd2039ba3222a7fecdc815832be9460ddba4"
	},
	{
		"id": "54ee236b6fff",
		"ts": "2026-09-04T00:43:10.685Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1373136.76,
		"hash": "54ee236b6fff813854d4916a1448e70f3782a9cc0d298a7539795034e0ec4ff9"
	},
	{
		"id": "8edc51165593",
		"ts": "2026-09-04T00:43:10.921Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 924930.93,
		"hash": "8edc511655932eb5e3e03aa08bb4ea20684f51deb4e236b73359dca4baf38f93"
	},
	{
		"id": "c23f7ab1e042",
		"ts": "2026-09-04T00:43:11.155Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 103026.84,
		"hash": "c23f7ab1e042836842457445e216dfe1d47f85a308d6021e35554dc17551e1bc"
	},
	{
		"id": "6d9ddffca9b1",
		"ts": "2026-09-04T00:43:11.389Z",
		"symbol": "BASEJUICE",
		"token": "0xb200000000000000000000046390aed221043f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 133010.7,
		"hash": "6d9ddffca9b12db99d5735b92f4e80dfe4819606386ce0315580bcf3d5ce5ee8"
	},
	{
		"id": "06647bf4d820",
		"ts": "2026-09-04T00:43:11.622Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3409560.07,
		"hash": "06647bf4d820515f5fa9304b2e6ba137bdbe3124cfa97a2d7aa50063e20b780f"
	},
	{
		"id": "494a5d87880c",
		"ts": "2026-09-04T00:43:11.856Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 282226.55,
		"hash": "494a5d87880c740ad917a715e5f11b74f6e9a99e897f69704e6ff21724fddc0d"
	},
	{
		"id": "f741efe304b8",
		"ts": "2026-09-04T00:43:12.088Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1178908.69,
		"hash": "f741efe304b85ab7dc5532186fa89f8c22a646c991a3fd9c861c23921581e2d9"
	},
	{
		"id": "a3dccef25f62",
		"ts": "2026-09-04T00:43:12.321Z",
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
		"liquidityUsd": 1756147.92,
		"hash": "a3dccef25f62190201dd5e97a934fd387dceb635896d3aa42cbc6e8b6d864991"
	},
	{
		"id": "6b9229123ff7",
		"ts": "2026-09-04T00:43:12.555Z",
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
		"liquidityUsd": 1048688.75,
		"hash": "6b9229123ff7a250950cc80f0ac27bd1100c30cc356741bdaab1181b2d949b4f"
	},
	{
		"id": "e6991d33298e",
		"ts": "2026-09-03T22:15:55.687Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118853670.37,
		"hash": "e6991d33298e7b671b8e939832809d401f893d26407b43239e49478e5fc5828d"
	},
	{
		"id": "85d1b975605d",
		"ts": "2026-09-03T22:15:56.022Z",
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
		"liquidityUsd": 19255685.84,
		"hash": "85d1b975605d9793334b2a15ae6ee24f407133ca6866ff7743b20da2081b7d14"
	},
	{
		"id": "44abfb823da8",
		"ts": "2026-09-03T22:15:56.426Z",
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
		"liquidityUsd": 981392.6,
		"hash": "44abfb823da800e2592c63e5463a9afa2ff000804672c68b55d093d058ad2bf0"
	},
	{
		"id": "cd94c9b56f0d",
		"ts": "2026-09-03T22:15:56.837Z",
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
		"liquidityUsd": 29623059.67,
		"hash": "cd94c9b56f0db8939af4ab1abc12a948cd1d0c271ca4b6a6bb684c08b0501b52"
	},
	{
		"id": "42da65436eac",
		"ts": "2026-09-03T22:15:57.103Z",
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
		"liquidityUsd": 4330200.75,
		"hash": "42da65436eace0b5824525871e3175bc4dde62acea45f8bc01421490e7466ed4"
	},
	{
		"id": "32743857cbd5",
		"ts": "2026-09-03T22:15:57.372Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1181785.51,
		"hash": "32743857cbd5d0258ffde2e7dc397ce36d3064751cef718411e74db75350b5c9"
	},
	{
		"id": "483086e2d372",
		"ts": "2026-09-03T22:15:57.641Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29623059.67,
		"hash": "483086e2d37204034302b14874ab31313bae87f236919a083d15facd6dee2275"
	},
	{
		"id": "bb84b2cb1407",
		"ts": "2026-09-03T22:15:57.905Z",
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
		"liquidityUsd": 3483864.71,
		"hash": "bb84b2cb14073170a072956b9b19e37d1b3d5289115dd938f4b4f7176c957c14"
	},
	{
		"id": "ed667fa1576e",
		"ts": "2026-09-03T22:15:58.191Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1065204.33,
		"hash": "ed667fa1576ec734f9f1e4cbc355cf405745df15841eb5afba3d53c57d80abe3"
	},
	{
		"id": "e0d7d605dfe1",
		"ts": "2026-09-03T22:15:58.464Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1978097.75,
		"hash": "e0d7d605dfe14f28e7282b376dae04867ba2468354fd90429ce1201fa2fdf45d"
	},
	{
		"id": "8e45cbb4d452",
		"ts": "2026-09-03T22:15:58.717Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1398999.34,
		"hash": "8e45cbb4d452641a6c614b96d8e130389296dd3d056292f59d102da7cd42654b"
	},
	{
		"id": "7e41046d04ed",
		"ts": "2026-09-03T22:15:58.956Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 920807.17,
		"hash": "7e41046d04ed3efa0236d3053a4abc097c1bc9b2abd40d085007865f99073068"
	},
	{
		"id": "5cec937732c3",
		"ts": "2026-09-03T22:15:59.198Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3424841.21,
		"hash": "5cec937732c377e21f66c8043d8933b6eb9099212f877714fc5394c9802927e6"
	},
	{
		"id": "62f38da7f11f",
		"ts": "2026-09-03T22:15:59.434Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 112560.98,
		"hash": "62f38da7f11f9f9f4bf3409ec0d447df25ea947c1fe20b4109d64e46f56284a9"
	},
	{
		"id": "a2182adac6a7",
		"ts": "2026-09-03T22:15:59.667Z",
		"symbol": "BASEJUICE",
		"token": "0xb200000000000000000000046390aed221043f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 139589.96,
		"hash": "a2182adac6a75fbba9f74e3140545502433d636ee80f4bf223cc4e05bdac5102"
	},
	{
		"id": "e73996ff81f4",
		"ts": "2026-09-03T22:15:59.904Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 282445.79,
		"hash": "e73996ff81f4ab914b770d522a5d5a088f5f19465bef78ecb7995cb9525896d7"
	},
	{
		"id": "fec33e4d1bfb",
		"ts": "2026-09-03T22:16:00.159Z",
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
		"liquidityUsd": 1185348.98,
		"hash": "fec33e4d1bfb0f3f9a2d663a4244068261518f6214d394ce9155c2678a582716"
	},
	{
		"id": "be22def5d0ba",
		"ts": "2026-09-03T22:16:00.423Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 452857.88,
		"hash": "be22def5d0baa5eb5be2f14a5eabc86d989266339a8724f3def3464eb99b2209"
	},
	{
		"id": "2dc2a5a8ee14",
		"ts": "2026-09-03T22:16:00.708Z",
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
		"liquidityUsd": 1062684.33,
		"hash": "2dc2a5a8ee1411c3b4b7c84f062a1133ab0f475c88c07b25469f041454e41272"
	},
	{
		"id": "0540b5e5941f",
		"ts": "2026-09-03T19:36:57.548Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118928964,
		"hash": "0540b5e5941fc5543b0cca9b2b4ae3162417a00e09524118a4ac3234aeb56f2d"
	},
	{
		"id": "6eaa8673484d",
		"ts": "2026-09-03T19:36:58.186Z",
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
		"liquidityUsd": 19022635.8,
		"hash": "6eaa8673484de661d34e593eb84ed5a98631a341182703c5e1215173da256466"
	},
	{
		"id": "6b9531b51918",
		"ts": "2026-09-03T19:36:58.626Z",
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
		"liquidityUsd": 976617.11,
		"hash": "6b9531b51918c9c286553bfa882aa1d5066a87b48a27d0d841f18e211fcdfc19"
	},
	{
		"id": "7445e0b9f5df",
		"ts": "2026-09-03T19:36:59.068Z",
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
		"liquidityUsd": 29560194.34,
		"hash": "7445e0b9f5dfd08ebff84b85819055ba482d44f11ccd0f30e484e3226491240f"
	},
	{
		"id": "3d9731502445",
		"ts": "2026-09-03T19:36:59.350Z",
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
		"liquidityUsd": 4346214.94,
		"hash": "3d9731502445db4db4554b3a8f20f537a466f2a5128e3ba8e1495a6c256a427c"
	},
	{
		"id": "8f8be7c4c449",
		"ts": "2026-09-03T19:36:59.595Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1182318.33,
		"hash": "8f8be7c4c449f5c095f052975efbd5eb726c0efaec4d1f2bedb75d97cd230009"
	},
	{
		"id": "4c07c89e2937",
		"ts": "2026-09-03T19:36:59.842Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29560194.34,
		"hash": "4c07c89e2937a0ae6f8d4c32a6ad9ec832bc8724f5f1e2b4da78866cbb538edc"
	},
	{
		"id": "6d555205408d",
		"ts": "2026-09-03T19:37:00.093Z",
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
		"liquidityUsd": 3484877.73,
		"hash": "6d555205408d995622a712723a22ba43d53a435fb2e9ff411aaf3182797827c4"
	},
	{
		"id": "2dc35ec4984e",
		"ts": "2026-09-03T19:37:00.727Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 985517.76,
		"hash": "2dc35ec4984e2de12c23dd96fd58610f7b12ad3f081f6f38f13b9448b5931b66"
	},
	{
		"id": "c14729b8aed8",
		"ts": "2026-09-03T19:37:01.281Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1986782.31,
		"hash": "c14729b8aed84681e75fe44209ab5a120b5ee457aee5700548ed5d293164d254"
	},
	{
		"id": "f994162401f4",
		"ts": "2026-09-03T19:37:01.843Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1391512.56,
		"hash": "f994162401f4763cfc478b7f9f22aa18289e3b6e5eb65a8fce80563f1986bc3d"
	},
	{
		"id": "1bc13d3fd26d",
		"ts": "2026-09-03T19:37:02.110Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 892457.19,
		"hash": "1bc13d3fd26dd45a67121cfa86bcef6c0ac90e6e45ef8bb5f4a4f310b64abcfb"
	},
	{
		"id": "e866aa6ed932",
		"ts": "2026-09-03T19:37:02.373Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3423934.36,
		"hash": "e866aa6ed932387419b6bdcd87737becf880b79aa56c6260d08c01ac5787126a"
	},
	{
		"id": "390968b268ec",
		"ts": "2026-09-03T19:37:02.638Z",
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
		"liquidityUsd": 281523.41,
		"hash": "390968b268eca8a28bf6fe245853f56c8d33685da57525f4ce116371558b40b8"
	},
	{
		"id": "78993d862285",
		"ts": "2026-09-03T19:37:02.921Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 85679.34,
		"hash": "78993d862285de8c9bbff4acae9f11d236218955130031785cea0049395636d6"
	},
	{
		"id": "e7ba2a6770cd",
		"ts": "2026-09-03T19:37:03.230Z",
		"symbol": "umia",
		"token": "0x56ab53b77F07DA3af732150E8aeC4783eB5BbA7D",
		"score": 58,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.16,
		"flags": [
			"owner_can_change_balance",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 3280313.34,
		"hash": "e7ba2a6770cdf4e2ce6963c6a1b7f609d8744affe7f8ad6ab43aa8fa70b8476d"
	},
	{
		"id": "cc0b9d6e1843",
		"ts": "2026-09-03T19:37:03.498Z",
		"symbol": "BASEJUICE",
		"token": "0xb200000000000000000000046390aed221043f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 116109.36,
		"hash": "cc0b9d6e18431f7a5c18585d1e5d815dfd1b641e5db41d4d3cb9b9dda1479eba"
	},
	{
		"id": "849669cbfcd5",
		"ts": "2026-09-03T19:37:03.779Z",
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
		"liquidityUsd": 1189780.95,
		"hash": "849669cbfcd58419db186919ef1a8fd28e50160094d95667d628823edab458bc"
	},
	{
		"id": "18a912d501f5",
		"ts": "2026-09-03T19:37:04.008Z",
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
		"liquidityUsd": 457750.97,
		"hash": "18a912d501f538d6d7ad6fe88a5876aa3a1c61c2c46181ad453c6a91a13444cf"
	},
	{
		"id": "1685794daad3",
		"ts": "2026-09-03T16:53:35.274Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117931985.19,
		"hash": "1685794daad3231817a379354d227703e4c45b31159b8de2aa32628720e14ccb"
	},
	{
		"id": "45b4c8ae21c4",
		"ts": "2026-09-03T16:53:35.631Z",
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
		"liquidityUsd": 14995585.53,
		"hash": "45b4c8ae21c46342a237ad724056feb7d79d72b0d8e48dbaa383d3c1919d5489"
	},
	{
		"id": "656a94eebabf",
		"ts": "2026-09-03T16:53:35.832Z",
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
		"liquidityUsd": 979212.62,
		"hash": "656a94eebabfa65d9329773ed74e1cdc854dcde32b5b8d1d0e609efcf0c8b4c9"
	},
	{
		"id": "e481b65208e8",
		"ts": "2026-09-03T16:53:36.042Z",
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
		"liquidityUsd": 29274135.54,
		"hash": "e481b65208e8b4801bf120844c43c61a38b052d421445e6766a6098a73ec7a6b"
	},
	{
		"id": "156498c8f18c",
		"ts": "2026-09-03T16:53:36.245Z",
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
		"liquidityUsd": 4325045.45,
		"hash": "156498c8f18c4c2628362887cf705f702f524f3bd5d3a602ff297acdf7e94b91"
	},
	{
		"id": "103d263e13cb",
		"ts": "2026-09-03T16:53:36.446Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1182318.33,
		"hash": "103d263e13cb7a4703ef49724e8b3dec93ae94619427b39975a34c1c7b3d400b"
	},
	{
		"id": "c7ece9b91207",
		"ts": "2026-09-03T16:53:36.646Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29274135.54,
		"hash": "c7ece9b9120783ca073735a6ce17ff358e034c07a8affa59a3fd05c22ca84fc5"
	},
	{
		"id": "afd80793a615",
		"ts": "2026-09-03T16:53:36.848Z",
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
		"liquidityUsd": 3415630.55,
		"hash": "afd80793a615f1e6e22ef3d4cb4956d92b78501b5f7163e577236f6725011fed"
	},
	{
		"id": "fd522807d956",
		"ts": "2026-09-03T16:53:37.051Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 949963.55,
		"hash": "fd522807d956f6bee7a3702ce1efd91e0b00afb99abed9e37ccfcfc772377898"
	},
	{
		"id": "d6f4832c8b96",
		"ts": "2026-09-03T16:53:37.251Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1989448.73,
		"hash": "d6f4832c8b96d7b1fd23e37083ec93fe6390bb4a7c9aa65e360f2ac1548e9e13"
	},
	{
		"id": "c7e44b35782b",
		"ts": "2026-09-03T16:53:37.436Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1396185.96,
		"hash": "c7e44b35782b8f0833186d070594f2eae2f8214f04b6b780d9fc141ada47c8f9"
	},
	{
		"id": "d1d08ff819a6",
		"ts": "2026-09-03T16:53:37.619Z",
		"symbol": "umia",
		"token": "0x56ab53b77F07DA3af732150E8aeC4783eB5BbA7D",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3114289.2,
		"hash": "d1d08ff819a606acfbdbefe0582b7ce5f71c33eb7da205e284257083685255f5"
	},
	{
		"id": "b92bd08994c7",
		"ts": "2026-09-03T16:53:37.799Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 927213.02,
		"hash": "b92bd08994c72f4c5c41392250a9cb9d2e72593d64f1b717d6a7e5eae1790ac7"
	},
	{
		"id": "9466a32cc63c",
		"ts": "2026-09-03T16:53:37.982Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3222528.97,
		"hash": "9466a32cc63c3d1ef4527a1ec8fd71790cbc4bb2cf2b344f1abf46d25a52c2e8"
	},
	{
		"id": "dbed6df2ad84",
		"ts": "2026-09-03T16:53:38.169Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 282661.4,
		"hash": "dbed6df2ad8458c84f90242593bc52e34fa2a4177dd9e7915c77260099287e57"
	},
	{
		"id": "e5a7adf9ca31",
		"ts": "2026-09-03T16:53:38.355Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 87418.1,
		"hash": "e5a7adf9ca31531e49883affa7e075060aaefb8db9ab5488201c2e9bffd46e25"
	},
	{
		"id": "5bf297cbc8de",
		"ts": "2026-09-03T16:53:38.540Z",
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
		"liquidityUsd": 476386.97,
		"hash": "5bf297cbc8de85f8fe7db42e74d0a1ffef80160d30b154c8d1a5462ab5585b70"
	},
	{
		"id": "38d3e92ffb5a",
		"ts": "2026-09-03T16:53:38.724Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 692234.23,
		"hash": "38d3e92ffb5ae65eb86e09d594eeccb269a15aab1990cb101c2f75c7895aeeeb"
	},
	{
		"id": "c439093d8447",
		"ts": "2026-09-03T16:53:38.908Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1183170.98,
		"hash": "c439093d8447c8e47de6e8bd5b05c3364d3900797d8e493a05e1cd545e6961ca"
	},
	{
		"id": "d3b22766516c",
		"ts": "2026-09-03T12:32:43.762Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116059346.42,
		"hash": "d3b22766516c6ebbf9ccb3aa6518136da72f2b1a0fce8793953896d754e17cad"
	},
	{
		"id": "1f1c1d649ac5",
		"ts": "2026-09-03T12:32:44.036Z",
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
		"liquidityUsd": 17912741.3,
		"hash": "1f1c1d649ac5ac7676556a7753413f1fd3d4ce5cae9b0ac24489ad1f868b7bd3"
	},
	{
		"id": "3989848245cc",
		"ts": "2026-09-03T12:32:44.331Z",
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
		"liquidityUsd": 919528.63,
		"hash": "3989848245ccbc6897ee413d27b85b9afe5b7bdf5c8748a3d96be09e6a58f3d9"
	},
	{
		"id": "6f3d5cf79da3",
		"ts": "2026-09-03T12:32:44.577Z",
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
		"liquidityUsd": 28903118.15,
		"hash": "6f3d5cf79da3761c1eaf6221257b4afafec4fa71d513b5d4a649b2f35fa34b98"
	},
	{
		"id": "0065c9d8ed61",
		"ts": "2026-09-03T12:32:44.831Z",
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
		"liquidityUsd": 4156820.52,
		"hash": "0065c9d8ed617971169220026e131f8f26494c4eb023268ee38a842b857c944f"
	},
	{
		"id": "1f6b7e946d30",
		"ts": "2026-09-03T12:32:45.075Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1139815.31,
		"hash": "1f6b7e946d3094f3f96de6cefbab290faed6d5d66fdcb5e5a8763f2fcd02ac5d"
	},
	{
		"id": "8e7f94d885af",
		"ts": "2026-09-03T12:32:45.365Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28903118.15,
		"hash": "8e7f94d885af0d2dae300f947ed17a900757c194c626fb41e36d0d4c95f5bfc2"
	},
	{
		"id": "cc65fbfdd19d",
		"ts": "2026-09-03T12:32:45.648Z",
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
		"liquidityUsd": 3950694.91,
		"hash": "cc65fbfdd19d47a62ff77b2664b6bc0507863987ea224e8ec6d6b32e351a5748"
	},
	{
		"id": "95a5334c7900",
		"ts": "2026-09-03T12:32:45.909Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 971716.25,
		"hash": "95a5334c7900a76517e3e10a2eb70b95113de8b4904cd2e1d0fc4a9207da7b42"
	},
	{
		"id": "fd526866b58f",
		"ts": "2026-09-03T12:32:46.171Z",
		"symbol": "umia",
		"token": "0x56ab53b77F07DA3af732150E8aeC4783eB5BbA7D",
		"score": 58,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.16,
		"flags": [
			"owner_can_change_balance",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 2999036.07,
		"hash": "fd526866b58f82b2368e5c84b42bc2b01a143492f220600777c5a21e87aa4167"
	},
	{
		"id": "da1098d99b8c",
		"ts": "2026-09-03T12:32:46.406Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1900915.45,
		"hash": "da1098d99b8c66d12489f3dddc4429fe202b8dfbdacfb619c7f1700f1a8261f5"
	},
	{
		"id": "45ee9989a2cf",
		"ts": "2026-09-03T12:32:46.641Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 948592.74,
		"hash": "45ee9989a2cf5025705e80f5c819a5a68a154fff8ccf4665f462a75ca7cfec1e"
	},
	{
		"id": "0e483b85077f",
		"ts": "2026-09-03T12:32:46.873Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3135533.4,
		"hash": "0e483b85077f629ebcab411b8d873d2dc060aafc9da5405c2d7df229677529dd"
	},
	{
		"id": "a1f504a6e78a",
		"ts": "2026-09-03T12:32:47.109Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1310890.51,
		"hash": "a1f504a6e78a35a873bf920bbd00ba20df2f1859c9cabcbe773b7f156cdf41e6"
	},
	{
		"id": "d90d7f750260",
		"ts": "2026-09-03T12:32:47.345Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 281279.94,
		"hash": "d90d7f7502605d2738f3ef04dae6217338315424747d2f132603357f227c2768"
	},
	{
		"id": "01140406b9f7",
		"ts": "2026-09-03T12:32:47.576Z",
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
		"liquidityUsd": 505809.03,
		"hash": "01140406b9f7e43d254da5b9ad11e1b9a3431082f774af74b7f2055c60ffc03b"
	},
	{
		"id": "3bcf61c62c9b",
		"ts": "2026-09-03T12:32:47.814Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 733820.34,
		"hash": "3bcf61c62c9b81bdfad116c7be8000f91b6265e9c2d98b4c0d2971fdc0618fd2"
	},
	{
		"id": "84533dd516f1",
		"ts": "2026-09-03T12:32:48.062Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 92327.01,
		"hash": "84533dd516f18a0005c75c32ecebafe4999963acf84ed49308117cb2b1a3eb59"
	},
	{
		"id": "a7bd0ee53347",
		"ts": "2026-09-03T12:32:48.310Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1147244.99,
		"hash": "a7bd0ee53347dc54f0e58f56435a5c4893d267c490f65e2aab6627725e4eba71"
	},
	{
		"id": "e80f2444718e",
		"ts": "2026-09-03T07:43:13.893Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115726085.1,
		"hash": "e80f2444718e289930f66ba6f207cfb1647aa29c919d47659743ccaebd4973b0"
	},
	{
		"id": "c344b13356b6",
		"ts": "2026-09-03T07:43:14.132Z",
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
		"liquidityUsd": 18132140.54,
		"hash": "c344b13356b67e4c91988840ed72a5691f846d53029eb495fc07b28dd5576125"
	},
	{
		"id": "c3aebb25a300",
		"ts": "2026-09-03T07:43:14.356Z",
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
		"liquidityUsd": 929299.48,
		"hash": "c3aebb25a300f0be0fd34099e1d35e7f014d4a85ca5f8cab7a14aaeb6cda0f18"
	},
	{
		"id": "8ff4df3d047a",
		"ts": "2026-09-03T07:43:14.577Z",
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
		"liquidityUsd": 28762614.23,
		"hash": "8ff4df3d047af20248b3725006afaaa5735a6f9c11df62f1f555a770ffe61d76"
	},
	{
		"id": "ed74a22a1446",
		"ts": "2026-09-03T07:43:14.792Z",
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
		"liquidityUsd": 4147168.71,
		"hash": "ed74a22a1446513d2202cabe299158d178d5ca66fe941c8a18cb40a7ba573753"
	},
	{
		"id": "f2912d765e92",
		"ts": "2026-09-03T07:43:15.039Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1139780.52,
		"hash": "f2912d765e924273ab6d1985abac8b799112583533c1abd367e469c240e8ea31"
	},
	{
		"id": "76efdcd1adb1",
		"ts": "2026-09-03T07:43:15.265Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28762614.23,
		"hash": "76efdcd1adb1255bedb1765a6e7f7e319211bb0bde4a1018cf67c9db048b66e5"
	},
	{
		"id": "bf22061a32b5",
		"ts": "2026-09-03T07:43:15.473Z",
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
		"liquidityUsd": 3542143.53,
		"hash": "bf22061a32b5652e6a18c2c37a2624322815ac2bffb4217501da31f1cc975243"
	},
	{
		"id": "8b703e8b3694",
		"ts": "2026-09-03T07:43:15.841Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 957289.38,
		"hash": "8b703e8b3694b00fc46314191c94440529bb5af9b48a86e15911ec56594d9069"
	},
	{
		"id": "7e418c619645",
		"ts": "2026-09-03T07:43:16.052Z",
		"symbol": "umia",
		"token": "0x56ab53b77F07DA3af732150E8aeC4783eB5BbA7D",
		"score": 43,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.14,
		"flags": [
			"new_pair_under_24h",
			"owner_can_change_balance",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 3129318.68,
		"hash": "7e418c61964517b7bb54af700ed00a59b91d945180ca6af711e0e23ed39ef41f"
	},
	{
		"id": "e901798fa2eb",
		"ts": "2026-09-03T07:43:16.253Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1887812.51,
		"hash": "e901798fa2ebad0a61c0b631ce10998f6591e2eeb9390038e7e6d4fbe393bdcf"
	},
	{
		"id": "17fbd82cf744",
		"ts": "2026-09-03T07:43:16.449Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 977504.56,
		"hash": "17fbd82cf744678dd8c964235d43e914ef077907a6fb6ef3c41f6f36e3306012"
	},
	{
		"id": "a750456a0944",
		"ts": "2026-09-03T07:43:16.654Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3167217.95,
		"hash": "a750456a094458a9a82c69e25b4515f2b4f70a50c08e4b0732884b901af4fb65"
	},
	{
		"id": "9971b60e2a82",
		"ts": "2026-09-03T07:43:16.909Z",
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
		"liquidityUsd": 468548.25,
		"hash": "9971b60e2a82c3b50ecf9f887e03cdca19425efb01544dc490999d4b5bd5fa86"
	}
]
