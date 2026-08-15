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
	"updatedAt": "2026-08-15T16:18:58.457Z",
	"tokensScored": 10477,
	"verdictsIssued": 10477,
	"safe": 9124,
	"risky": 788,
	"likelyRug": 565,
	"ticks": 630
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "3df52746fc81",
		"ts": "2026-08-15T16:18:54.749Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111532630.85,
		"hash": "3df52746fc8177788d0ddeae55ce2ffff4afe563540c6418dcf41499527affa1"
	},
	{
		"id": "ea5786b218a8",
		"ts": "2026-08-15T16:18:55.198Z",
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
		"liquidityUsd": 15831815.26,
		"hash": "ea5786b218a841f70a7a479d6714a1fa504c28c1ae3cc759739406a0623b1930"
	},
	{
		"id": "451940d29d23",
		"ts": "2026-08-15T16:18:55.507Z",
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
		"liquidityUsd": 803239.12,
		"hash": "451940d29d238af0238f825521a63b70bd8b64f7a579d2be57240cdde80375aa"
	},
	{
		"id": "195ce6cd408f",
		"ts": "2026-08-15T16:18:55.690Z",
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
		"liquidityUsd": 26562654.18,
		"hash": "195ce6cd408f26d9027c1cc0b45d7ff04b991b8e877e4f953e7165efcf9c4e74"
	},
	{
		"id": "e27b48daacbb",
		"ts": "2026-08-15T16:18:55.899Z",
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
		"liquidityUsd": 4156751.26,
		"hash": "e27b48daacbb35dc1461b6e8101d6ca06c3e665fe699767a37243af83567c0a2"
	},
	{
		"id": "8004b390220a",
		"ts": "2026-08-15T16:18:56.122Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 895826.69,
		"hash": "8004b390220a80eddc7f16ddd822ba524fb00dd87cc6542989e3d8e676b38291"
	},
	{
		"id": "c363f017c42e",
		"ts": "2026-08-15T16:18:56.318Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26562654.18,
		"hash": "c363f017c42e5360d7c21d7cc2bf125a36a80697986888499c9f786a8223acdc"
	},
	{
		"id": "225c5ac7e0a8",
		"ts": "2026-08-15T16:18:56.530Z",
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
		"liquidityUsd": 4348706.56,
		"hash": "225c5ac7e0a81f381dba9928d88becdea0328c8fc20b5ba84687f6690ad5eb09"
	},
	{
		"id": "b5bbb3ff3d73",
		"ts": "2026-08-15T16:18:56.720Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2591283.16,
		"hash": "b5bbb3ff3d73d2c0cd2d9dc53ca20b9e15dcb01747a373572ddbd76e26662fff"
	},
	{
		"id": "bba377075ec2",
		"ts": "2026-08-15T16:18:56.906Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 5472921.9,
		"hash": "bba377075ec20e977a6410d14338722b7b510b70682c5eb0770a262544be6e0b"
	},
	{
		"id": "f37c25bcbae3",
		"ts": "2026-08-15T16:18:57.097Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 268426.2,
		"hash": "f37c25bcbae3818fbab0555795369c92ffd5a8df417b29787c11b2c89a53d567"
	},
	{
		"id": "b45b822a51e7",
		"ts": "2026-08-15T16:18:57.289Z",
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
		"liquidityUsd": 895825.81,
		"hash": "b45b822a51e7b4ce3f806519b4da5bee19739567af982b428c59cffaa215658e"
	},
	{
		"id": "f7829f01481d",
		"ts": "2026-08-15T16:18:57.475Z",
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
		"hash": "f7829f01481d6f7b26763acb1cfca03ce33e45d5cf5aafab9da442deef5845df"
	},
	{
		"id": "88e54db53488",
		"ts": "2026-08-15T16:18:57.676Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 378238.96,
		"hash": "88e54db534881c3304338fcaa60e57faa638eb0196e476aa62e896f94550b8e3"
	},
	{
		"id": "48b6933d0e08",
		"ts": "2026-08-15T16:18:57.866Z",
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
		"liquidityUsd": 639864.29,
		"hash": "48b6933d0e0874bf9ccc730635218c49671eeca775ace4890e13575719ffdf80"
	},
	{
		"id": "7d03ed56ffcc",
		"ts": "2026-08-15T16:18:58.050Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9487436.61,
		"hash": "7d03ed56ffcc72e4577e44041852d484757aaaedc5ed7bbace21ea7cd6de306d"
	},
	{
		"id": "d25a91afe1d2",
		"ts": "2026-08-15T16:18:58.237Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1496689.14,
		"hash": "d25a91afe1d2eac08e10c5acbaa0316f2ad747458679477735fa9128da69c620"
	},
	{
		"id": "9932d16757f4",
		"ts": "2026-08-15T16:18:58.456Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 852084.43,
		"hash": "9932d16757f44a24d1b5ad349735a834eb3184005be6ccc50b04084b5e097303"
	},
	{
		"id": "730442712406",
		"ts": "2026-08-15T15:16:08.047Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111512934.31,
		"hash": "730442712406a6ba17c8176b26464a57e96d23858831d4a2c220bcea8ddf697f"
	},
	{
		"id": "f1cd0e582e25",
		"ts": "2026-08-15T15:16:08.288Z",
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
		"liquidityUsd": 15800328.13,
		"hash": "f1cd0e582e25551d0ee0a727d6a98f361e4637f3506040efa8b82233ef2ee58d"
	},
	{
		"id": "c532901f4932",
		"ts": "2026-08-15T15:16:08.522Z",
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
		"hash": "c532901f4932cb61ccef453f41a4ffa8136de52d0d2ed94e49e290eb1b6924ca"
	},
	{
		"id": "3e2d4d615284",
		"ts": "2026-08-15T15:16:08.749Z",
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
		"liquidityUsd": 26486962.41,
		"hash": "3e2d4d61528484956de5fb22957c0454def7dc31305c1386808cb94e8e9b933a"
	},
	{
		"id": "ae7f5e39e140",
		"ts": "2026-08-15T15:16:08.985Z",
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
		"liquidityUsd": 4155192.14,
		"hash": "ae7f5e39e140c8b9171dae089bc69c97626fb729d9df1b8682c5da6b42252df6"
	},
	{
		"id": "d011068b7114",
		"ts": "2026-08-15T15:16:09.213Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 894594.44,
		"hash": "d011068b7114a9719c907003ef793d26eda3c47a8aff8379d2fa862a0125f7b5"
	},
	{
		"id": "998cccf6c4f4",
		"ts": "2026-08-15T15:16:09.444Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26487962.41,
		"hash": "998cccf6c4f42a756ca0b5ea48309d074722cc3782193000ea83a9d57bd1cf79"
	},
	{
		"id": "9b906134602a",
		"ts": "2026-08-15T15:16:09.674Z",
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
		"liquidityUsd": 3798348.86,
		"hash": "9b906134602a726cb3992d8af903712cdf605d0b9f2b3215fe46ece1c7caf8a2"
	},
	{
		"id": "895d85fb8e1e",
		"ts": "2026-08-15T15:16:09.906Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2567350.64,
		"hash": "895d85fb8e1ee68390cd9491e8c515af6bccfdfc5ef071c735a06399304b48db"
	},
	{
		"id": "89b0fa162705",
		"ts": "2026-08-15T15:16:10.140Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 6442501.52,
		"hash": "89b0fa162705bfc8613bfb1edcdd26575ecfaea0bc4dfa5208a8b4997791cf96"
	},
	{
		"id": "cc99d629f2c6",
		"ts": "2026-08-15T15:16:10.353Z",
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
		"liquidityUsd": 273775.77,
		"hash": "cc99d629f2c687b4ca37f2a285b60347ed6504feeca9943837f66748b1e35170"
	},
	{
		"id": "d92ca0ba46e7",
		"ts": "2026-08-15T15:16:10.571Z",
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
		"liquidityUsd": 893261.63,
		"hash": "d92ca0ba46e7dfe7c293e3c05d5f7583f950a400741de61132cc199096d1e162"
	},
	{
		"id": "2bff0499c7d1",
		"ts": "2026-08-15T15:16:10.785Z",
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
		"hash": "2bff0499c7d1d41ee9742f849c9f4b64736b2a7c359e52b320b8203f7806b778"
	},
	{
		"id": "4f8c058ad404",
		"ts": "2026-08-15T15:16:11.006Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 375414.97,
		"hash": "4f8c058ad40490b407b88c25451e12159c1c83931088f15c2f00aa1f649dc506"
	},
	{
		"id": "e0b71a463144",
		"ts": "2026-08-15T15:16:11.219Z",
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
		"liquidityUsd": 648356.7,
		"hash": "e0b71a463144c2cc5bc1b075ce09aad415418b6da0ad8894b48139d1fff32f9b"
	},
	{
		"id": "97364625b43c",
		"ts": "2026-08-15T15:16:11.438Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9474382.55,
		"hash": "97364625b43cab11d7e58d71374f59694c23d3dce4a7e460032fa1f1dfe6851d"
	},
	{
		"id": "6023635dd0f2",
		"ts": "2026-08-15T15:16:11.651Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1492636.49,
		"hash": "6023635dd0f225301e3fa5142afa13cc864a63a18278487b92bc4e5a0fed659f"
	},
	{
		"id": "58cba53578a0",
		"ts": "2026-08-15T15:16:11.871Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 485257.53,
		"hash": "58cba53578a012eaebc086e5675ecc13efaf648f41de35eb217a8e17041c2318"
	},
	{
		"id": "0e526d43df42",
		"ts": "2026-08-15T14:18:03.769Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111498911.16,
		"hash": "0e526d43df4275859fe733aa570bb3cc36d825c491921270bdb1da2099ea3ae0"
	},
	{
		"id": "98531f092822",
		"ts": "2026-08-15T14:18:04.227Z",
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
		"liquidityUsd": 15816369.39,
		"hash": "98531f092822bc8abadce5001774ba51b453a4e0e4f5a9c0b2d6c35c19cabc97"
	},
	{
		"id": "103bdc72a683",
		"ts": "2026-08-15T14:18:04.669Z",
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
		"hash": "103bdc72a683f0c6b93af411026bc15f27a03ba924887c44ba8ed616e567acaa"
	},
	{
		"id": "3c8be2dc1653",
		"ts": "2026-08-15T14:18:05.064Z",
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
		"liquidityUsd": 26487608.93,
		"hash": "3c8be2dc16538847c2e4d53d263ced8b40f698ef17d0c5bc9449a8432d5b6196"
	},
	{
		"id": "8b6bc41dffae",
		"ts": "2026-08-15T14:18:05.312Z",
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
		"liquidityUsd": 4156137.97,
		"hash": "8b6bc41dffaeeb6af4f66405e493cca3852b6817e3d5c4677f3f8dfbdfa6a4ef"
	},
	{
		"id": "984f71b8fed0",
		"ts": "2026-08-15T14:18:05.535Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 897375.52,
		"hash": "984f71b8fed0b6d79fc033780cef95071f5a22f25cb025a0f8a8b27ab27b9842"
	},
	{
		"id": "f3e205dfaf98",
		"ts": "2026-08-15T14:18:05.766Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26487608.93,
		"hash": "f3e205dfaf987155261f67a848f0d2cab333aac6afed93dbfea3c1d3c65e1404"
	},
	{
		"id": "046535775833",
		"ts": "2026-08-15T14:18:06.008Z",
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
		"liquidityUsd": 4102850.27,
		"hash": "046535775833f271f5a579c0084871cac5a3e027c7a626ba476dd62682dd6c29"
	},
	{
		"id": "1f3c2741ddac",
		"ts": "2026-08-15T14:18:06.229Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2615464.44,
		"hash": "1f3c2741ddac81036ad507fee0a3bee88db676ed6a2790423c0a53343421e955"
	},
	{
		"id": "5c49695050b8",
		"ts": "2026-08-15T14:18:06.461Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 6712601.86,
		"hash": "5c49695050b826e63bb5ac7dce8f7cf8f60499f25bcf4e7f2eeed5bd3863e549"
	},
	{
		"id": "87cdd109544b",
		"ts": "2026-08-15T14:18:06.689Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 277001.21,
		"hash": "87cdd109544b725b83e678a2c81127a092d2f2b8ea159e89f2c9e8ebd98065f9"
	},
	{
		"id": "d6640838d93d",
		"ts": "2026-08-15T14:18:06.895Z",
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
		"liquidityUsd": 888477.23,
		"hash": "d6640838d93db06611f71583d9b9c23d23dee7f50fa4cb49eac2a06dd5b676a7"
	},
	{
		"id": "7878941bf639",
		"ts": "2026-08-15T14:18:07.114Z",
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
		"hash": "7878941bf639f4b827013a3b61f9217e435f47ae1820fd10ca25947876e4d004"
	},
	{
		"id": "4e6ec139ca2f",
		"ts": "2026-08-15T14:18:07.342Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 376938.08,
		"hash": "4e6ec139ca2f85bfc83e6739b2af57c82636f92592b59b40f20505c0aa1a3de2"
	},
	{
		"id": "e02b0ccb6ba7",
		"ts": "2026-08-15T14:18:07.548Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9473602.16,
		"hash": "e02b0ccb6ba7ebeae92ccc61444cd89b29292c2ca7a2978991cee1b3fabac79f"
	},
	{
		"id": "6b4816fc8918",
		"ts": "2026-08-15T14:18:07.768Z",
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
		"liquidityUsd": 648794.62,
		"hash": "6b4816fc89187df6bba640f907c58da5089ca649ef14fdab3dbff619372bbaa3"
	},
	{
		"id": "caeca6b59c6e",
		"ts": "2026-08-15T14:18:07.998Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1486990.54,
		"hash": "caeca6b59c6e98b01ffd02f459531274a81b5b48e95f16a9326f3deaeac1a11a"
	},
	{
		"id": "2f1bf53e3bea",
		"ts": "2026-08-15T14:18:08.205Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 852273.57,
		"hash": "2f1bf53e3bea0a369615c999fe5ce884538e737d62750ab2439c32afadefd41f"
	},
	{
		"id": "a945e3418172",
		"ts": "2026-08-15T13:26:36.760Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111510913.33,
		"hash": "a945e341817227eb758c61ad3d8b28553dd0bdd29f97cec21307579bda01e964"
	},
	{
		"id": "b6443d8d77e4",
		"ts": "2026-08-15T13:26:37.187Z",
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
		"liquidityUsd": 15821796.81,
		"hash": "b6443d8d77e4320984c8992aea09bd1cc7ac34c741f2dda8eace0049464ffc03"
	},
	{
		"id": "de8ca89ad176",
		"ts": "2026-08-15T13:26:37.436Z",
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
		"hash": "de8ca89ad1763b822e60b08818fce866944244abee5cbfe4ed6608f1478c2a8f"
	},
	{
		"id": "064a5b845594",
		"ts": "2026-08-15T13:26:37.663Z",
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
		"liquidityUsd": 26449479.67,
		"hash": "064a5b8455945246c8e2c31db633edaf038846e3517feeb69e1e08977636ea80"
	},
	{
		"id": "173e7f9bb628",
		"ts": "2026-08-15T13:26:37.887Z",
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
		"liquidityUsd": 4154304.7,
		"hash": "173e7f9bb62861b13538e033be8ed7337387caafed11c4609563f236436af97d"
	},
	{
		"id": "4c512e97f489",
		"ts": "2026-08-15T13:26:38.177Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 895475.76,
		"hash": "4c512e97f489ab6a9cb6b336886c1dbfb1e31f248545f8288cd929cce579a6b1"
	},
	{
		"id": "79a213a86328",
		"ts": "2026-08-15T13:26:38.420Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26449479.67,
		"hash": "79a213a8632840c1f77d025665bbada65104335d41854c934357c9e696b9932c"
	},
	{
		"id": "23b4fbd6c21f",
		"ts": "2026-08-15T13:26:38.652Z",
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
		"liquidityUsd": 4096285.09,
		"hash": "23b4fbd6c21f6ac33fc54e0a2486b20837252df41c5187d765c93f8586d0d37b"
	},
	{
		"id": "50f4b4f4d406",
		"ts": "2026-08-15T13:26:38.927Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2581817.89,
		"hash": "50f4b4f4d406dd8abf47d252dd4fa29651bbe0ccecf5961ce8c0f3864b19f27a"
	},
	{
		"id": "4bc437c3d39b",
		"ts": "2026-08-15T13:26:39.296Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 6837050.34,
		"hash": "4bc437c3d39b0fe21740c3d44dfc7400ac5c707452c67716934c4e50358f5237"
	},
	{
		"id": "88172f239704",
		"ts": "2026-08-15T13:26:39.507Z",
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
		"liquidityUsd": 888823.23,
		"hash": "88172f2397048f71cee3e84544b52a35d78aaed8c7c64c4bdcd7c577df785d8a"
	},
	{
		"id": "fa4097ff9e4e",
		"ts": "2026-08-15T13:26:39.736Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 272042.82,
		"hash": "fa4097ff9e4e7f7c466d02b32b9b03a23347771140dc1961036c4e6111be4daa"
	},
	{
		"id": "816146c1af5b",
		"ts": "2026-08-15T13:26:39.949Z",
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
		"hash": "816146c1af5b7c0822839002737945575b2df74f9f48851cf7c3549451474d98"
	},
	{
		"id": "da2f3e3a4e19",
		"ts": "2026-08-15T13:26:40.159Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 381629.03,
		"hash": "da2f3e3a4e19399807a314f66da9a9fc17d66dc98849108278d401870ef19909"
	},
	{
		"id": "363b3950cb87",
		"ts": "2026-08-15T13:26:40.385Z",
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
		"liquidityUsd": 9421221.99,
		"hash": "363b3950cb87758aa1a68d0a54da006c3a5068e6ddd9f8b59fb38f8f78bf55a6"
	},
	{
		"id": "49eba1f9f7f7",
		"ts": "2026-08-15T13:26:40.596Z",
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
		"liquidityUsd": 652283.47,
		"hash": "49eba1f9f7f779af3c343b568710490ff378b14179b74077ad119f87348e6117"
	},
	{
		"id": "5bf373b35d0d",
		"ts": "2026-08-15T13:26:40.807Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1487738.72,
		"hash": "5bf373b35d0d4bfa2c7aef6ec122744c14d20f85b598fc8b6aacfb32c0206ef4"
	},
	{
		"id": "ffa88b73b25e",
		"ts": "2026-08-15T13:26:41.035Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 850508.33,
		"hash": "ffa88b73b25edbf9bc569021c9ee40930ddc8f633cbf4fc797afc5557fa36c31"
	},
	{
		"id": "656dcfe03ebd",
		"ts": "2026-08-15T12:29:48.625Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111635072.31,
		"hash": "656dcfe03ebdae564f2c9b78ae117c786c10dcf5cf77c0846a99088416b5d543"
	},
	{
		"id": "4dc12e0fbcb8",
		"ts": "2026-08-15T12:29:49.124Z",
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
		"liquidityUsd": 15848654.66,
		"hash": "4dc12e0fbcb88a8f7b027eab6547a473f4571610feb1e3fad733dd61717ad426"
	},
	{
		"id": "38c9ae699300",
		"ts": "2026-08-15T12:29:49.409Z",
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
		"hash": "38c9ae699300652d2ede68c7fedf7cba1dd0c357fa3c70b15ad29d2cb1df360f"
	},
	{
		"id": "365e038d7775",
		"ts": "2026-08-15T12:29:49.701Z",
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
		"liquidityUsd": 26446699.25,
		"hash": "365e038d7775f6c0659d5fd503ff935a0e06cec0beb06177e6b2ee832348b311"
	},
	{
		"id": "a6efe2a939d4",
		"ts": "2026-08-15T12:29:50.002Z",
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
		"liquidityUsd": 4145145.2,
		"hash": "a6efe2a939d416eb96d9ad16c673bdd9c7590746121b14cdc321af626853dc7c"
	},
	{
		"id": "0ac50a136b94",
		"ts": "2026-08-15T12:29:50.305Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 895475.76,
		"hash": "0ac50a136b946d57b4b63d70eceb06278224dd0e8bc61c3bd229e2a3c3c0a1b1"
	},
	{
		"id": "89d9fe021691",
		"ts": "2026-08-15T12:29:50.581Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26446643.19,
		"hash": "89d9fe0216919a77c8079b941793dc81ea77c2c49e5787170e6b34d2691d898e"
	},
	{
		"id": "cba8f10a78d1",
		"ts": "2026-08-15T12:29:50.873Z",
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
		"liquidityUsd": 4106032.21,
		"hash": "cba8f10a78d1572843575fb0a88a8d25585585aa449b965f5f189cd565479c9d"
	},
	{
		"id": "6da73c39c3f3",
		"ts": "2026-08-15T12:29:51.158Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2540257.04,
		"hash": "6da73c39c3f334f0e3023c9567892d0a5c2cee58a8e905f3bb8a860366e999cb"
	},
	{
		"id": "c4fdd51d2acf",
		"ts": "2026-08-15T12:29:51.439Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 6722703.69,
		"hash": "c4fdd51d2acf95e120d7329a5c3d84814e2ea72c69f2895c5306a3495f6f8298"
	},
	{
		"id": "e6b58cd946c1",
		"ts": "2026-08-15T12:29:51.703Z",
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
		"liquidityUsd": 897995.56,
		"hash": "e6b58cd946c10b7c81a19c2744e92bf3573f741a9203d120abe9976c9dfdc30b"
	},
	{
		"id": "47f49ee7468a",
		"ts": "2026-08-15T12:29:51.966Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 271753.54,
		"hash": "47f49ee7468ace1894d215b6bc02656bbcc17585fb2b85107d36b6e0c0dadc00"
	},
	{
		"id": "143bbd5096e0",
		"ts": "2026-08-15T12:29:52.230Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 849955.52,
		"hash": "143bbd5096e06205041c0cddb0a46e11ed8395fb2ba08a46c611b45ece8f00a9"
	},
	{
		"id": "ec31ab9d4253",
		"ts": "2026-08-15T12:29:52.526Z",
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
		"hash": "ec31ab9d42534ad6c951f1cb0f7eea62a0fd497e7c0882e5ead15df81fa5fa04"
	},
	{
		"id": "97b2a4aed272",
		"ts": "2026-08-15T12:29:52.789Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9392543.97,
		"hash": "97b2a4aed2721c9d94668382347e72785d6b1ce23e85d8c1a771561b42450137"
	},
	{
		"id": "10d166744c55",
		"ts": "2026-08-15T12:29:53.052Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 392035.04,
		"hash": "10d166744c557814b96b33291e90312b320b9993b9b0c51f9d0e17648618be9a"
	},
	{
		"id": "274db4e83e67",
		"ts": "2026-08-15T12:29:53.314Z",
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
		"liquidityUsd": 653973.48,
		"hash": "274db4e83e671efdd4eda42ef156248d69da57a3301b476d5be3450dec8e2f4a"
	},
	{
		"id": "024a8180d53f",
		"ts": "2026-08-15T12:29:53.576Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1490278.87,
		"hash": "024a8180d53f51ae132b32dd0b1445dbe68f539c6305be87c8d54f1d2e5d2593"
	},
	{
		"id": "9307baa61378",
		"ts": "2026-08-15T11:16:22.275Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111655177.66,
		"hash": "9307baa61378e6f2b221b758adae3724be294f54a828309687cfb9ad1320c670"
	},
	{
		"id": "8a454d877f92",
		"ts": "2026-08-15T11:16:22.768Z",
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
		"liquidityUsd": 16342882.48,
		"hash": "8a454d877f923c02f36377a3baad91cafdb5f3f74957893b2d26ffcdc0c041d1"
	},
	{
		"id": "9b1236c7d4d1",
		"ts": "2026-08-15T11:16:22.967Z",
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
		"hash": "9b1236c7d4d1919ff2decfc671ad19bfb7bd31c52dd48f9d30bf893370bd357a"
	},
	{
		"id": "c9834d8c602b",
		"ts": "2026-08-15T11:16:23.163Z",
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
		"liquidityUsd": 26490035.44,
		"hash": "c9834d8c602b7517b54d0e830856793119bf087dbbdb4e3960dff63835a7b203"
	},
	{
		"id": "9c3193f010b0",
		"ts": "2026-08-15T11:16:23.503Z",
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
		"liquidityUsd": 4148656.22,
		"hash": "9c3193f010b038620f3f9ad8dac63d7c215bfcdd8ce22f9d045487f4e4188c48"
	},
	{
		"id": "84d2c77da907",
		"ts": "2026-08-15T11:16:23.700Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 895475.76,
		"hash": "84d2c77da90755051eb624ea83663b0cd48ec959c3334e37e3255b5396230f22"
	},
	{
		"id": "f6ac6b766889",
		"ts": "2026-08-15T11:16:23.902Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26490035.44,
		"hash": "f6ac6b7668893b3bebe6c9b660b51fc10376abde8d35e8fd26674987cc563064"
	},
	{
		"id": "fb9dee29342e",
		"ts": "2026-08-15T11:16:24.106Z",
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
		"liquidityUsd": 3970702.74,
		"hash": "fb9dee29342edf6e6de57b4aa9858915ece505908ee9466d8237c7c08e1f0c97"
	},
	{
		"id": "44f7b7a54aad",
		"ts": "2026-08-15T11:16:24.295Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2492889.11,
		"hash": "44f7b7a54aadf197d5159d4980b4284970ef5cb58e3ec12e1434473644148a3d"
	},
	{
		"id": "726db27695f2",
		"ts": "2026-08-15T11:16:24.491Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 6686702.47,
		"hash": "726db27695f2bd0161804c01551a7cc51e0648f0df399d765f8f802dab58069a"
	},
	{
		"id": "e8a1fa04c2be",
		"ts": "2026-08-15T11:16:24.676Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 891447.1,
		"hash": "e8a1fa04c2be813323a8aa2ae6270c6904812736385e4a1c46ee160c780413e7"
	},
	{
		"id": "a0a7683f3937",
		"ts": "2026-08-15T11:16:24.926Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 263810.48,
		"hash": "a0a7683f39370589590eac9693e19ff64445eb88640533b06b847e7ebc6bb7fa"
	},
	{
		"id": "983311c186c9",
		"ts": "2026-08-15T11:16:25.113Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9398649.03,
		"hash": "983311c186c9a11a825257fee182dfcb05ff26f1ba600209b29893f63bda51dc"
	},
	{
		"id": "a7720a224bc3",
		"ts": "2026-08-15T11:16:25.309Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 849799.04,
		"hash": "a7720a224bc339733e64fd6db5268b89ce362c8017d152875fbb0a5bf912b21d"
	},
	{
		"id": "dd399e087785",
		"ts": "2026-08-15T11:16:25.486Z",
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
		"hash": "dd399e087785959b9050bd48c001bcf1fc6132e5548c46e13f740f232309d447"
	},
	{
		"id": "dd5a212953ba",
		"ts": "2026-08-15T11:16:25.706Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1509165.31,
		"hash": "dd5a212953bab8e290abbecd5c6dbc439527cf724a07d8423f0a7f4d036658f8"
	},
	{
		"id": "5043c83c39a3",
		"ts": "2026-08-15T11:16:25.888Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 474701.21,
		"hash": "5043c83c39a3fd0f3438b6ef50bc066585af7e07109aa569a48e9a9c5ce8afbd"
	},
	{
		"id": "172098e47df0",
		"ts": "2026-08-15T11:16:26.100Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 443656.45,
		"hash": "172098e47df09daa62dd33a7b000e92dc92cb0e3d23ca26ac2299424dc5b1aa9"
	},
	{
		"id": "c20bcbae65f5",
		"ts": "2026-08-15T10:18:06.366Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111626337.45,
		"hash": "c20bcbae65f5f05b1e3ee66fcf744d5c084052f7552487d2aef069b28a03cc00"
	},
	{
		"id": "083d679eaae2",
		"ts": "2026-08-15T10:18:06.790Z",
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
		"liquidityUsd": 15847208.9,
		"hash": "083d679eaae24c411200a0ddd44ba9ec054325d04bca40b7effb42b99a435edf"
	},
	{
		"id": "b01184506c9b",
		"ts": "2026-08-15T10:18:07.152Z",
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
		"hash": "b01184506c9b9ff7b149189ec27e53fe444d7151d14087717325573ccaa53daa"
	},
	{
		"id": "b9a7a18c5e49",
		"ts": "2026-08-15T10:18:07.498Z",
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
		"liquidityUsd": 26491406.54,
		"hash": "b9a7a18c5e490f8d3efae081125fd714259e43a91c05800f196d1c9ff77a6195"
	},
	{
		"id": "423bdb0ecd12",
		"ts": "2026-08-15T10:18:07.700Z",
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
		"liquidityUsd": 4147058.76,
		"hash": "423bdb0ecd12a980728012cd5ec27b0a79d81b1a6e434bd13d2b9b25c28a89dd"
	},
	{
		"id": "9dc7d0604c5d",
		"ts": "2026-08-15T10:18:07.908Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 895475.76,
		"hash": "9dc7d0604c5dab266f22f10298f5ee2943f06919a9e228fad68460da0c7fb5ad"
	},
	{
		"id": "7fa05e2bb539",
		"ts": "2026-08-15T10:18:08.115Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6597460.25,
		"hash": "7fa05e2bb539b6c0716942e8c6efa12103eae5d018bffedbcd733cca132c9af3"
	},
	{
		"id": "e429858dff52",
		"ts": "2026-08-15T10:18:08.318Z",
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
		"liquidityUsd": 3761127.42,
		"hash": "e429858dff528d2816fdce088d6bc3e786eb5e0e8404212b1d204fe466cc34cc"
	},
	{
		"id": "9e490aa640bd",
		"ts": "2026-08-15T10:18:08.521Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 6597460.25,
		"hash": "9e490aa640bd281a7194db6f3f4c01356d831e2b42187cd564e8a1c1449913ce"
	},
	{
		"id": "1bc822f9f3c7",
		"ts": "2026-08-15T10:18:08.713Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2484018.33,
		"hash": "1bc822f9f3c784079328b287c54a63531821a55cadb1df41707d879596a5964f"
	},
	{
		"id": "b3534b2a120a",
		"ts": "2026-08-15T10:18:08.899Z",
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
		"liquidityUsd": 886428.84,
		"hash": "b3534b2a120a41beb08c43ff5b285e98fc55bb740e2fd52ec6e0cab6e6efca94"
	},
	{
		"id": "a083f0980167",
		"ts": "2026-08-15T10:18:09.115Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 262794.98,
		"hash": "a083f0980167d54f9b7c5b1d861218a0522fd44376bfb570a350e87fe6f5bfac"
	},
	{
		"id": "34e4f576dfff",
		"ts": "2026-08-15T10:18:09.333Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9395066.51,
		"hash": "34e4f576dfff24a928034c0c09edb61d39909a2a9293d58c49378737e8d19b5c"
	},
	{
		"id": "142d4ed6d182",
		"ts": "2026-08-15T10:18:09.534Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 848899.33,
		"hash": "142d4ed6d182f5eb3f83ea16a409f3c5cd164a8cf1befac8e478cd356430d2f4"
	},
	{
		"id": "6f316147a555",
		"ts": "2026-08-15T10:18:09.720Z",
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
		"hash": "6f316147a555752142d99e86ebacfdcb95799cb4ebd8e7a4275aaa62b23e6941"
	},
	{
		"id": "435e43998b66",
		"ts": "2026-08-15T10:18:09.929Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1508123.36,
		"hash": "435e43998b66ab2a832c4ecc056586d2f06a864b5219ec25eb0f027be0c3e585"
	},
	{
		"id": "c24d960e0e41",
		"ts": "2026-08-15T10:18:10.129Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 624657.04,
		"hash": "c24d960e0e4125e818dc618ff830830cca73dcf049ab2486a1d0eb962bca69b8"
	},
	{
		"id": "1736867bacde",
		"ts": "2026-08-15T10:18:10.325Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 561553.96,
		"hash": "1736867bacdeb0de4faeb21ba45197c96611d7f8a7a7c7de99b149e891226e59"
	},
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
	}
]
