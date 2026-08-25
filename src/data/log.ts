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
	"updatedAt": "2026-08-25T03:44:29.925Z",
	"tokensScored": 14641,
	"verdictsIssued": 14641,
	"safe": 12506,
	"risky": 1088,
	"likelyRug": 1047,
	"ticks": 847
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "29f490a607f9",
		"ts": "2026-08-25T03:44:24.888Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113605055.3,
		"hash": "29f490a607f9f2091195f34db351db484932201feb0e27d6823c949c558904fa"
	},
	{
		"id": "821ce6d94d7b",
		"ts": "2026-08-25T03:44:25.157Z",
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
		"liquidityUsd": 14551521.43,
		"hash": "821ce6d94d7b662b66a008c43b3856387249d08c35672b9cf409abb9e25092e3"
	},
	{
		"id": "93c64767563b",
		"ts": "2026-08-25T03:44:25.401Z",
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
		"liquidityUsd": 1026543.31,
		"hash": "93c64767563bd98e9bc09ed21fcadce89c77df375b6ea9ac95744f9815571a46"
	},
	{
		"id": "a03c7b2b6f0c",
		"ts": "2026-08-25T03:44:25.655Z",
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
		"liquidityUsd": 30811483.89,
		"hash": "a03c7b2b6f0ca06ca88d238c53c2b493e7d79e6feef8c93e2f9b6ab1540f5e07"
	},
	{
		"id": "a46085384d20",
		"ts": "2026-08-25T03:44:25.917Z",
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
		"liquidityUsd": 4919962.08,
		"hash": "a46085384d2077481def61d37640c202e5280334efb2bcd6b74027a4b933fd13"
	},
	{
		"id": "fc601fa06063",
		"ts": "2026-08-25T03:44:26.162Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1225692.73,
		"hash": "fc601fa06063b9f26e70d53e8b166753fafdd412e58b9e5ba70820c25427a48c"
	},
	{
		"id": "d27c8f9c2fbb",
		"ts": "2026-08-25T03:44:26.403Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2407251.37,
		"hash": "d27c8f9c2fbb97682092ac4a016219048c132837a1bd59f9633de2034a6ef2fc"
	},
	{
		"id": "58f556ef2fe2",
		"ts": "2026-08-25T03:44:26.654Z",
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
		"liquidityUsd": 1941169.59,
		"hash": "58f556ef2fe2f50b54912536429664cb53b11b6d4083060a03d5951bfce9739c"
	},
	{
		"id": "2c3a4527659e",
		"ts": "2026-08-25T03:44:26.928Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 843518.56,
		"hash": "2c3a4527659e66ee0c80be35ada87406f03480cc35c32137166daad6d1ed2662"
	},
	{
		"id": "47e29e4fb0b6",
		"ts": "2026-08-25T03:44:27.636Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1382568.33,
		"hash": "47e29e4fb0b639c2cb45e93e7611d9c72f7de4558437308a26fa0c22494d6597"
	},
	{
		"id": "f52bcfc2a23d",
		"ts": "2026-08-25T03:44:28.147Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2409518.9,
		"hash": "f52bcfc2a23de48c41ea0e3c4535c5c5eb0e2c7c471d8771533844dcca498f02"
	},
	{
		"id": "b7b4c871f052",
		"ts": "2026-08-25T03:44:28.365Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 603930.07,
		"hash": "b7b4c871f0527e994b70439d029779cca309b9030fc3f297c580ef05f0ebda81"
	},
	{
		"id": "fc545dd01d45",
		"ts": "2026-08-25T03:44:28.594Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 116775.05,
		"hash": "fc545dd01d456a92eaa7b8b0d9dfa726ca6103e11b3c870e6ba5a89139952bc4"
	},
	{
		"id": "e2656f4277bc",
		"ts": "2026-08-25T03:44:28.811Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1929155.29,
		"hash": "e2656f4277bc57b21373434f9e88a5b8db1308b47ad2c62127c808a35c1a34a5"
	},
	{
		"id": "9c89edeafc1a",
		"ts": "2026-08-25T03:44:29.033Z",
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
		"liquidityUsd": 1004267.16,
		"hash": "9c89edeafc1a4958e690632e71e112d97d9f8ef9da5c365d34e447d61b35f387"
	},
	{
		"id": "840d9a91658b",
		"ts": "2026-08-25T03:44:29.253Z",
		"symbol": "TYBG",
		"token": "0x0d97F261b1e88845184f678e2d1e7a98D9FD38dE",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 247531.7,
		"hash": "840d9a91658b77fcecaf96946bf87d5c60e68712aa1a9f9b5b95d4981840dfee"
	},
	{
		"id": "cf9c902146ed",
		"ts": "2026-08-25T03:44:29.473Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3577736.28,
		"hash": "cf9c902146edb5b034c6a7e801484a458f5cf935454fd93501e5fb3d177aa8ea"
	},
	{
		"id": "19610492bf73",
		"ts": "2026-08-25T03:44:29.693Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11388965.52,
		"hash": "19610492bf733d33229d7735fa25a90e2ba9645f95046c9c3a01e3e1d61f4224"
	},
	{
		"id": "dd0dd978af5f",
		"ts": "2026-08-25T03:44:29.925Z",
		"symbol": "BITBANK",
		"token": "0xB200000000000000000000E83d09CF068e06365c",
		"score": 10,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 25876.57,
		"hash": "dd0dd978af5fbabe00abe82cd648ff63f7e87d92af80b72bd2693bd6fc08d0f1"
	},
	{
		"id": "c9131dd1edc9",
		"ts": "2026-08-25T02:54:24.385Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113685555.41,
		"hash": "c9131dd1edc94508d58160c89d0a04c731cb47d7b0e94182b0b0e7ce2b5b616c"
	},
	{
		"id": "cd7d81e13c6a",
		"ts": "2026-08-25T02:54:24.672Z",
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
		"liquidityUsd": 16430252.36,
		"hash": "cd7d81e13c6a2dc04f16c8e019cc4be76620923913a8c93f1ab3b5f391d0de5f"
	},
	{
		"id": "93c2609e05cd",
		"ts": "2026-08-25T02:54:24.910Z",
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
		"liquidityUsd": 1027351.88,
		"hash": "93c2609e05cd4fe0e254f6a0e5097928d55cbcf5748ce436d40215aa32a321f8"
	},
	{
		"id": "9bb445f642b2",
		"ts": "2026-08-25T02:54:25.354Z",
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
		"liquidityUsd": 31064488.02,
		"hash": "9bb445f642b24d549e0ee84a579e51bcbfc8710966094028033a52611a422c16"
	},
	{
		"id": "f121736e67b4",
		"ts": "2026-08-25T02:54:25.596Z",
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
		"liquidityUsd": 4936596.13,
		"hash": "f121736e67b49dc849e5c740520ff8350533ed340c6d1d72ff798cc863fa81fc"
	},
	{
		"id": "6f77e97d6e59",
		"ts": "2026-08-25T02:54:25.833Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1225692.73,
		"hash": "6f77e97d6e59f1b372ef6f41f6cf434cef04483f92e6606eebbbc203bfd34c8c"
	},
	{
		"id": "b32653a93d84",
		"ts": "2026-08-25T02:54:26.068Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2523247.13,
		"hash": "b32653a93d848f9e73f950125ad1da8fd0053cf2c37320a4b5ca0bd5e93196a6"
	},
	{
		"id": "208fe2eb4b35",
		"ts": "2026-08-25T02:54:26.350Z",
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
		"liquidityUsd": 1943683.76,
		"hash": "208fe2eb4b3590d0d939b3f8e723746b1562aef1f9b933804570e285dbe1b34d"
	},
	{
		"id": "14147428d4a5",
		"ts": "2026-08-25T02:54:26.614Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 803243.18,
		"hash": "14147428d4a500d35cb963edf3b474f3b06fcb860168d70bd6c1c9b8dca86e4b"
	},
	{
		"id": "3f9897e2dfcd",
		"ts": "2026-08-25T02:54:26.849Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1360914.25,
		"hash": "3f9897e2dfcd5f53b159910c697680ecf966289a084295cadc95393b9e6dbcd9"
	},
	{
		"id": "2e3a390d1e38",
		"ts": "2026-08-25T02:54:27.078Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2521499.75,
		"hash": "2e3a390d1e3892589fc0c268aec1de3e8e1b98fe8fecb399fe6a230bffb56785"
	},
	{
		"id": "5de6897fea82",
		"ts": "2026-08-25T02:54:27.488Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 114443.14,
		"hash": "5de6897fea822235461a16b43cf9fd5dfeb0f576ef48c37bd677c5c833181a55"
	},
	{
		"id": "21960ded57f1",
		"ts": "2026-08-25T02:54:27.708Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 608527.67,
		"hash": "21960ded57f1ad3a2d00a9ab58908aba3526aa56bce571e23bd483e4f89dc409"
	},
	{
		"id": "ca6764144fc9",
		"ts": "2026-08-25T02:54:27.924Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1915198.08,
		"hash": "ca6764144fc9ee273a6973bb9593e81d474f3c8ca2c67c1219be63540de956cb"
	},
	{
		"id": "b35fca8a4c7b",
		"ts": "2026-08-25T02:54:28.144Z",
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
		"liquidityUsd": 993726.3,
		"hash": "b35fca8a4c7b4a54f20810b7accb3b7f5477c1852b5ea10b25f22273eea40e76"
	},
	{
		"id": "8bbc95ab4a6f",
		"ts": "2026-08-25T02:54:28.366Z",
		"symbol": "TYBG",
		"token": "0x0d97F261b1e88845184f678e2d1e7a98D9FD38dE",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 252991.53,
		"hash": "8bbc95ab4a6f12d80744265d497d5f04a9d5f72cd07b96c4bfe90f1d6eb3b13a"
	},
	{
		"id": "c0d16cf6208c",
		"ts": "2026-08-25T02:54:28.597Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11369633.66,
		"hash": "c0d16cf6208c2b2467d1082d243b4fc68a1cb4fd33244df9deb375aa739d2779"
	},
	{
		"id": "9ed65a0ae0b6",
		"ts": "2026-08-25T02:54:28.850Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 568604.19,
		"hash": "9ed65a0ae0b6fb41a2928b8d3f13576aa8387c242957226f9b26afc409ae7572"
	},
	{
		"id": "2f7dd748a88b",
		"ts": "2026-08-25T02:54:29.236Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3609865.3,
		"hash": "2f7dd748a88bbe26eb3757060b5a9c411e1f360c73690822cb550732a43ea622"
	},
	{
		"id": "950eaae3d73d",
		"ts": "2026-08-25T01:02:06.019Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113672049.36,
		"hash": "950eaae3d73d1e32e32d20e0f7908d1236c7c2978fe31e3f5130e1960c7c0fe6"
	},
	{
		"id": "134016531b82",
		"ts": "2026-08-25T01:02:06.484Z",
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
		"liquidityUsd": 13598543.68,
		"hash": "134016531b8298b81fb3c7af78b392e5b7ac62bd8a00d19cd50066eed2469f0e"
	},
	{
		"id": "7b0286cadb62",
		"ts": "2026-08-25T01:02:06.757Z",
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
		"liquidityUsd": 1031559.69,
		"hash": "7b0286cadb621c78c794e61cec088438274ef5f7b5f0a2655dd45e1f26723137"
	},
	{
		"id": "28b0b6fece13",
		"ts": "2026-08-25T01:02:07.020Z",
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
		"liquidityUsd": 30455419.5,
		"hash": "28b0b6fece13be9c0dac4be2b9605f1fb58e5f3ea31127fd71b200021cda4f06"
	},
	{
		"id": "61b4b56f6052",
		"ts": "2026-08-25T01:02:07.285Z",
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
		"liquidityUsd": 4853488.22,
		"hash": "61b4b56f6052b707bf8b87d39e848999f67cadf52cd03d4760fdc986b56df7bd"
	},
	{
		"id": "177a64ba30ee",
		"ts": "2026-08-25T01:02:07.518Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1205375.28,
		"hash": "177a64ba30ee07e3f44ea244e5e5acd0cf75ab91833d0fee3fc160006b7fdb23"
	},
	{
		"id": "bdde3c7f49f6",
		"ts": "2026-08-25T01:02:07.758Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2533614.62,
		"hash": "bdde3c7f49f6e654ac86c3fc38a0509e6278dd30a3709a8c0b08531387cb767d"
	},
	{
		"id": "25d02abfa60b",
		"ts": "2026-08-25T01:02:08.029Z",
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
		"liquidityUsd": 1937504.29,
		"hash": "25d02abfa60b02678d2aeb0db909b5cee80d7511fc584fd2ef74633a8afa2c32"
	},
	{
		"id": "93e448bfe3ce",
		"ts": "2026-08-25T01:02:08.285Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 769693.15,
		"hash": "93e448bfe3ce3f9916447e9ce73546c5496bdf3aa7e968e6e13235d8d2d23367"
	},
	{
		"id": "f1914bd40487",
		"ts": "2026-08-25T01:02:08.533Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1363121.75,
		"hash": "f1914bd40487e8fa2238032c8d0eaa19232fe78b9b323f55ce7309863a92d626"
	},
	{
		"id": "8af0a9cd3ba2",
		"ts": "2026-08-25T01:02:08.764Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2533614.62,
		"hash": "8af0a9cd3ba2a6bb4ec75eb219fe73ab67cfb8792405601cf01f937e78c9e69a"
	},
	{
		"id": "5509fa1d018c",
		"ts": "2026-08-25T01:02:08.991Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 597255.24,
		"hash": "5509fa1d018cf64bf3172438141e76defc7db77ac560a4167789fe97bae130a9"
	},
	{
		"id": "2f71837d017e",
		"ts": "2026-08-25T01:02:09.227Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 106771.77,
		"hash": "2f71837d017ec4fd8348e6042f6ea91dde857bc32feaddd8d126c2991cd7fd32"
	},
	{
		"id": "efd6ffe3741e",
		"ts": "2026-08-25T01:02:09.441Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1889319.77,
		"hash": "efd6ffe3741edeb3515d5bba724a7a2614bfbef651fe9c44b12ac79f33b82d05"
	},
	{
		"id": "247262d03a8b",
		"ts": "2026-08-25T01:02:09.670Z",
		"symbol": "TYBG",
		"token": "0x0d97F261b1e88845184f678e2d1e7a98D9FD38dE",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 263822.27,
		"hash": "247262d03a8bad282014858d5f26582e2583d83f4727155fea7a0413c0e2a91f"
	},
	{
		"id": "f9ea73b1f436",
		"ts": "2026-08-25T01:02:09.897Z",
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
		"liquidityUsd": 975655.49,
		"hash": "f9ea73b1f436d4b4a9a8ff03458719886ff108228554d1a2646ad1ca097b2c3c"
	},
	{
		"id": "98bce008896e",
		"ts": "2026-08-25T01:02:10.137Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 567271.97,
		"hash": "98bce008896ef5403bd45efd4262aa7ef83c1d9561ca9ec1ac351f79c0e6d379"
	},
	{
		"id": "ba2315a93bf0",
		"ts": "2026-08-25T01:02:10.373Z",
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
		"liquidityUsd": 3521306.17,
		"hash": "ba2315a93bf04b8f3a28862419b3a5a5dba471b9033f003f02a01e6b3070942a"
	},
	{
		"id": "7dc1bf92f64f",
		"ts": "2026-08-25T01:02:10.590Z",
		"symbol": "BITBANK",
		"token": "0xB200000000000000000000E83d09CF068e06365c",
		"score": 10,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 27016.26,
		"hash": "7dc1bf92f64f7270d9329d6af374dbe383a52725c42c91afe3c32cc25505e300"
	},
	{
		"id": "351480fd2ffb",
		"ts": "2026-08-24T23:18:57.172Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113426550.59,
		"hash": "351480fd2ffb57494d0414f79dfba46ca9abfe0809004d2447dd9bf8be27999c"
	},
	{
		"id": "54534f1bd01d",
		"ts": "2026-08-24T23:18:57.438Z",
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
		"liquidityUsd": 18426872.55,
		"hash": "54534f1bd01ddc6a60eec747a7ea794ba631be354c77c14ef9a8b7fea0f00515"
	},
	{
		"id": "dc6e303b42e3",
		"ts": "2026-08-24T23:18:57.688Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 48,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.04,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "dc6e303b42e339a1de85338067ac98003d68087b741a8290894fd49581ca14f3"
	},
	{
		"id": "6526758df1a6",
		"ts": "2026-08-24T23:18:57.936Z",
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
		"liquidityUsd": 30576442.78,
		"hash": "6526758df1a61ba6d92846a1e55d88f1fa1eca05c323b44127ec063a48629932"
	},
	{
		"id": "12b8cd676bff",
		"ts": "2026-08-24T23:18:58.182Z",
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
		"liquidityUsd": 4815651.63,
		"hash": "12b8cd676bff9e68da226df155836cb753e9481025a16170ece24b9b77df9b3a"
	},
	{
		"id": "a38de5736c78",
		"ts": "2026-08-24T23:18:58.430Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1183868.7,
		"hash": "a38de5736c78d1af6d6250bf8aff55dad16556dadcc2b9a622a8af282cefb981"
	},
	{
		"id": "a4c985f6e051",
		"ts": "2026-08-24T23:18:58.680Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2566959.8,
		"hash": "a4c985f6e051659eb46233761f802454c32c68f35495aceab0ae7edb2c41f7a8"
	},
	{
		"id": "95a4a68a6c39",
		"ts": "2026-08-24T23:18:58.923Z",
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
		"liquidityUsd": 1923528.3,
		"hash": "95a4a68a6c39c01eabd2fa5c6c9baa5cfbd4dff3d9963af5ed3b139f9784eae6"
	},
	{
		"id": "97401c5cabbe",
		"ts": "2026-08-24T23:18:59.179Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 764018.5,
		"hash": "97401c5cabbe28317780b2ce55e30dbd5d8035004bd89dfb1099bf14c600f808"
	},
	{
		"id": "8db87bce5cf6",
		"ts": "2026-08-24T23:18:59.464Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair"
		],
		"liquidityUsd": 0,
		"hash": "8db87bce5cf6fb97876493c50da3fcbedf95dc990aad7270b8a21510124b9e26"
	},
	{
		"id": "c00783e1062f",
		"ts": "2026-08-24T23:18:59.694Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "c00783e1062f46462aa56bde4984ebc40c1069b46b1fdbb71470afbc4409dc63"
	},
	{
		"id": "f7b03802fab3",
		"ts": "2026-08-24T23:18:59.907Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "f7b03802fab3a54d724adaa25fbc341be719a86eb50eb1239be0ab9add084503"
	},
	{
		"id": "3e19d82c53c6",
		"ts": "2026-08-24T23:19:00.153Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair"
		],
		"liquidityUsd": 0,
		"hash": "3e19d82c53c6f3db534f52b1f1c951cabde815c9bfb8bb01b1641b26a4bad679"
	},
	{
		"id": "40eedd845348",
		"ts": "2026-08-24T23:19:00.400Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair"
		],
		"liquidityUsd": 0,
		"hash": "40eedd845348c3153357e2414fd7cd81e0bb1617c234870ffc7d92d1aab786f9"
	},
	{
		"id": "875015116760",
		"ts": "2026-08-24T23:19:00.655Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"no_dex_pair",
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 0,
		"hash": "875015116760f4b775f9292549e361d20e5b7dfba5a7e55b97683675f1aaa2c9"
	},
	{
		"id": "dc65b0a46fdc",
		"ts": "2026-08-24T23:19:00.955Z",
		"symbol": "TYBG",
		"token": "0x0d97F261b1e88845184f678e2d1e7a98D9FD38dE",
		"score": 42,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.16,
		"flags": [
			"no_dex_pair",
			"modifiable_tax",
			"external_call"
		],
		"liquidityUsd": 0,
		"hash": "dc65b0a46fdc9bc37727ec7f1de26582660301fa630969c70e3fe52c5ff8d5c7"
	},
	{
		"id": "c735589c29e8",
		"ts": "2026-08-24T23:19:01.201Z",
		"symbol": "BITBANK",
		"token": "0xB200000000000000000000E83d09CF068e06365c",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"no_dex_pair",
			"sim_honeypot"
		],
		"liquidityUsd": 0,
		"hash": "c735589c29e8a24794da5cb50dfe7db9d800c237982a320bb02b935758c99dbd"
	},
	{
		"id": "7a73eac5a2b1",
		"ts": "2026-08-24T23:19:01.444Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3465456.26,
		"hash": "7a73eac5a2b1cc5e22a5cb86e5467e35101c61d744ac7202a22e059b52fcacb5"
	},
	{
		"id": "f42762d77c3e",
		"ts": "2026-08-24T22:21:17.310Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 56,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "f42762d77c3e9f9133f7dceabb057e003e769db8280019306945eeb113f3e21f"
	},
	{
		"id": "07007b3ec320",
		"ts": "2026-08-24T22:21:17.558Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 44,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "07007b3ec3202663231252058b1608ee25e3811ab56ce93af98e8e63a9598b0c"
	},
	{
		"id": "0981dc7b2664",
		"ts": "2026-08-24T22:21:18.013Z",
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
		"liquidityUsd": 951010.61,
		"hash": "0981dc7b26646deee16323319185c987dfbf30c2dbf9ed0445caad69c38cc595"
	},
	{
		"id": "1ec016c40ab3",
		"ts": "2026-08-24T22:21:18.278Z",
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
		"liquidityUsd": 30650448.27,
		"hash": "1ec016c40ab325b7a2705a5fb758df4dfaf317029aaf96773064642375205eac"
	},
	{
		"id": "d45ea1dbb818",
		"ts": "2026-08-24T22:21:18.524Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "d45ea1dbb818297dab299b4d8482374f02b69a32aefb9494776185772ad449e6"
	},
	{
		"id": "b5df297bbf7a",
		"ts": "2026-08-24T22:21:18.754Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"no_dex_pair",
			"modifiable_tax"
		],
		"liquidityUsd": 0,
		"hash": "b5df297bbf7a560aa5715f52575372109d6238f6c50b08128cd9d4612bfb9737"
	},
	{
		"id": "c844ce7916bb",
		"ts": "2026-08-24T22:21:18.992Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2611548.77,
		"hash": "c844ce7916bb3d730344134fc13ed049ee83ba94c83171293263ca6f76cbaaa2"
	},
	{
		"id": "054b28377e21",
		"ts": "2026-08-24T22:21:19.242Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 44,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "054b28377e21495ea0d7a4d96404a99004bb570711f43937a9f6eebf490da2b3"
	},
	{
		"id": "96e4cbcfff71",
		"ts": "2026-08-24T22:21:19.711Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"no_dex_pair",
			"sim_honeypot"
		],
		"liquidityUsd": 0,
		"hash": "96e4cbcfff71e6ef30f7f145fe34cfa6fdcc98da53d1b6be0bb668e7df74b81d"
	},
	{
		"id": "81654c3f38b0",
		"ts": "2026-08-24T22:21:20.408Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair"
		],
		"liquidityUsd": 0,
		"hash": "81654c3f38b0e99331d19c47a3f23ed4185ce1b098c3897f0ad66d224f1edc22"
	},
	{
		"id": "a65a4ceceeae",
		"ts": "2026-08-24T22:21:20.628Z",
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
		"liquidityUsd": 2607898.46,
		"hash": "a65a4ceceeaef0be1733738ea030428c94bbb394a165d18b3ceac61676645170"
	},
	{
		"id": "3cae533847b8",
		"ts": "2026-08-24T22:21:20.844Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 580418.77,
		"hash": "3cae533847b882d45c9073f42b33ca065a80d1e7d04609a21ffe150343594749"
	},
	{
		"id": "5403b6f221ff",
		"ts": "2026-08-24T22:21:21.064Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 103228.28,
		"hash": "5403b6f221ff12297de6523747731e448a5a5e81745dadfd80bb5490df3ad1ae"
	},
	{
		"id": "52c8b23a136d",
		"ts": "2026-08-24T22:21:21.299Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1846831.35,
		"hash": "52c8b23a136db4e833774be1231af28c87d7a6c8bd85bbdb6e910a256af695d0"
	},
	{
		"id": "cd894e7ddfb1",
		"ts": "2026-08-24T22:21:21.524Z",
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
		"liquidityUsd": 962549.8,
		"hash": "cd894e7ddfb1fac85f22e223ba4c00e338b0e95ed2bf5037973f83990599472e"
	},
	{
		"id": "95f54ad6d5ba",
		"ts": "2026-08-24T22:21:21.749Z",
		"symbol": "TYBG",
		"token": "0x0d97F261b1e88845184f678e2d1e7a98D9FD38dE",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 272866.9,
		"hash": "95f54ad6d5baadf36d15b0795ee2110cb44e8a036251f3fba53274188c610274"
	},
	{
		"id": "71582b7d98dc",
		"ts": "2026-08-24T22:21:21.969Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "71582b7d98dce473f2aa185e3810072278c9c9574dc0d9fafd658991c31af1f9"
	},
	{
		"id": "acfde70fb454",
		"ts": "2026-08-24T21:24:17.027Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113335942.99,
		"hash": "acfde70fb454a9ad4ed327c5792eeb70fe390d1b3a852713841d1b117586e11a"
	},
	{
		"id": "c1ce2b3a2f77",
		"ts": "2026-08-24T21:24:17.486Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 44,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "c1ce2b3a2f77b90bce5cf06a6233090fa340f03141c417a0aa00798b8cad9760"
	},
	{
		"id": "ecd93f6e26c5",
		"ts": "2026-08-24T21:24:17.739Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 48,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.04,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "ecd93f6e26c53177a01e284d50487e9ce041a4822f520aed9083c0ed27e9c68b"
	},
	{
		"id": "8d87779b00fd",
		"ts": "2026-08-24T21:24:17.987Z",
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
		"liquidityUsd": 30558392.46,
		"hash": "8d87779b00fd42a5384b31628d66373b4441dd63c72bd8099ed682bb259ffef0"
	},
	{
		"id": "1732905f093e",
		"ts": "2026-08-24T21:24:18.236Z",
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
		"liquidityUsd": 4806842.78,
		"hash": "1732905f093e5dcac4ed7792a8b2d9a80c06d7fc4d7b81c7506e460bd7f9ea16"
	},
	{
		"id": "cfe3b68e22b0",
		"ts": "2026-08-24T21:24:18.483Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1185530.93,
		"hash": "cfe3b68e22b0da16f005a914a98fedb966f365041fc80faf01a8553ce54c113b"
	},
	{
		"id": "64dbf5151acf",
		"ts": "2026-08-24T21:24:18.728Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2560675.26,
		"hash": "64dbf5151acf3028efb11a8b6470550ea8b40bfe0c48a04c878526063fe07110"
	},
	{
		"id": "101f27053f63",
		"ts": "2026-08-24T21:24:18.972Z",
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
		"liquidityUsd": 1924511.92,
		"hash": "101f27053f63ba46212c514b37f7b709befae5e16c57e53e23e7e76b0ae7122f"
	},
	{
		"id": "f5141ad5dffe",
		"ts": "2026-08-24T21:24:19.237Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 787808.67,
		"hash": "f5141ad5dffee1a49d0b3393a9582b2cd89bdd5710646d18ecf1d197ca627120"
	},
	{
		"id": "e80f3f2c9468",
		"ts": "2026-08-24T21:24:19.482Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1358445.52,
		"hash": "e80f3f2c9468d79e06499416b0a326bd7ddfa77ee3e2a6be3c72027354cb2975"
	},
	{
		"id": "ac00ce4a4e68",
		"ts": "2026-08-24T21:24:19.714Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "ac00ce4a4e68b3a3147cb50eb9693d686722fb57801b6d9fcdc6055883a804ff"
	},
	{
		"id": "b1b5b8421522",
		"ts": "2026-08-24T21:24:19.946Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "b1b5b8421522b2d6a7fdc2b55129ec23e9f600d01cd0bf0e8018b21e3471cb7b"
	},
	{
		"id": "63487df98f0f",
		"ts": "2026-08-24T21:24:20.180Z",
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
		"liquidityUsd": 970847.45,
		"hash": "63487df98f0fe429eadc584352b2c5985e88108823c04d723e0f5bdcd841a2d2"
	},
	{
		"id": "eb1d601b9aee",
		"ts": "2026-08-24T21:24:20.415Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 95554.57,
		"hash": "eb1d601b9aee8eb4e407939aafb221091b01409d36af80519010a7d7d0c4d967"
	},
	{
		"id": "6b4340603d99",
		"ts": "2026-08-24T21:24:20.645Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1835326.33,
		"hash": "6b4340603d99c1ce1974558ab663e122b310048b8fd24a6b0d5d42f389161eec"
	},
	{
		"id": "d39cab3ad728",
		"ts": "2026-08-24T21:24:20.875Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 553919.9,
		"hash": "d39cab3ad728aeb2ae175ae74dc9de976e9ad12830cb183638ae37d94483a951"
	},
	{
		"id": "dcf3e014132f",
		"ts": "2026-08-24T21:24:21.113Z",
		"symbol": "TYBG",
		"token": "0x0d97F261b1e88845184f678e2d1e7a98D9FD38dE",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "dcf3e014132f92df3b9e86f3717ed91509cda3efcd5d955226e2b4974ed36aa6"
	},
	{
		"id": "7c52b85f88e7",
		"ts": "2026-08-24T21:24:21.354Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3549508.33,
		"hash": "7c52b85f88e75805a27cadf0b61045b81a4f2b541c8837c0de601ffe4fd496dc"
	},
	{
		"id": "a3a0ad1b499b",
		"ts": "2026-08-24T20:25:04.989Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113049120.84,
		"hash": "a3a0ad1b499b73135d9fb92081733308cb67964917dd667c3d8208d536843864"
	},
	{
		"id": "3882082bf86c",
		"ts": "2026-08-24T20:25:05.566Z",
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
		"liquidityUsd": 17296893.83,
		"hash": "3882082bf86cd3b89f0257b8046f45ba2b6e4fad7789a543672df1b58dbe5ce7"
	},
	{
		"id": "1cfddd32cb5a",
		"ts": "2026-08-24T20:25:05.853Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 48,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.04,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "1cfddd32cb5aedb7065de0fa5b79f9a30e21d596f5a986f3500dd3a78ed29761"
	},
	{
		"id": "20d02d5daf79",
		"ts": "2026-08-24T20:25:06.160Z",
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
		"liquidityUsd": 30263074.84,
		"hash": "20d02d5daf793f2d551fb9fec52e95664bc0213bf2e349e6009f91b1b8ba1629"
	},
	{
		"id": "49cf2931448f",
		"ts": "2026-08-24T20:25:06.455Z",
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
		"liquidityUsd": 4757731.43,
		"hash": "49cf2931448f239abfd31333fbb8eefbfeea9106a812abbff9fb71a2264b2555"
	},
	{
		"id": "243096e45ff8",
		"ts": "2026-08-24T20:25:06.737Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1176775.52,
		"hash": "243096e45ff86457918360d28450d7c8d8c63fbf108d57e8c3cee1ea556c86e5"
	},
	{
		"id": "b2bfcc6a1715",
		"ts": "2026-08-24T20:25:07.020Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2564458.59,
		"hash": "b2bfcc6a1715cc903de716c15972fb81d9317a358489a29e309a843ce1bae8b7"
	},
	{
		"id": "48ff29c0cf97",
		"ts": "2026-08-24T20:25:07.357Z",
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
		"liquidityUsd": 1917459.53,
		"hash": "48ff29c0cf973de9172c10f856c9402aa027eef34c943477a3dde30cfd708226"
	},
	{
		"id": "b96d5d749bb6",
		"ts": "2026-08-24T20:25:07.656Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1279474.02,
		"hash": "b96d5d749bb6d2e7c0316da06d99e9a6bada907eaf0fcf52a4795b4088d20b0c"
	},
	{
		"id": "c4f701510e86",
		"ts": "2026-08-24T20:25:08.156Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"no_dex_pair",
			"sim_honeypot"
		],
		"liquidityUsd": 0,
		"hash": "c4f701510e86fe922c6d161c2e3f3a3d3caa6317cb586350bb7b9396859dbbbf"
	},
	{
		"id": "aa2f7ce211de",
		"ts": "2026-08-24T20:25:08.420Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2564458.89,
		"hash": "aa2f7ce211de927480441565ae7b0720ba108b17629d264292c0d04784a2d801"
	},
	{
		"id": "efd8bf2b36aa",
		"ts": "2026-08-24T20:25:08.686Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "efd8bf2b36aab14feaf0082962f9bdd91cc29af7539ec5a0031bc45882ff8a2d"
	},
	{
		"id": "bf9b8bf32354",
		"ts": "2026-08-24T20:25:08.959Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 598306.11,
		"hash": "bf9b8bf32354458d6fd5b9e50033dd7157baf2f80ed1218737d2b45bd7f11710"
	},
	{
		"id": "f8d920444a62",
		"ts": "2026-08-24T20:25:09.230Z",
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
		"liquidityUsd": 979028.73,
		"hash": "f8d920444a6297d4341826f850d6cbb513c6797eb450f74c2bbde3572d2fee46"
	},
	{
		"id": "6367800adf2b",
		"ts": "2026-08-24T20:25:09.663Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 564593.11,
		"hash": "6367800adf2b002efab1da6856a90912c82a1bea7877dec61531409e8d530394"
	},
	{
		"id": "289f63588397",
		"ts": "2026-08-24T20:25:09.936Z",
		"symbol": "TYBG",
		"token": "0x0d97F261b1e88845184f678e2d1e7a98D9FD38dE",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 280140.03,
		"hash": "289f6358839783e0c70b6df13d6988e9959cd77c624892f9a16c02d093356b75"
	},
	{
		"id": "b14bea415654",
		"ts": "2026-08-24T20:25:10.199Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 392274.49,
		"hash": "b14bea415654be63bb5b738ed4238ee9f7f57cf04d878ae34f8481198e74c5d7"
	},
	{
		"id": "f88fcf7d8a3e",
		"ts": "2026-08-24T20:25:10.484Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1857712.48,
		"hash": "f88fcf7d8a3ef268f4a3d3fbfe87efcccc575d1cb139910b6b7d6cc0ad36eb19"
	},
	{
		"id": "37c6ce9918a8",
		"ts": "2026-08-24T19:25:36.923Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112955334.26,
		"hash": "37c6ce9918a80c6f0bb2a2322cb28f5a245cb7a01746ffd5b68d2674aab83077"
	},
	{
		"id": "50c0d6770e1f",
		"ts": "2026-08-24T19:25:37.339Z",
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
		"liquidityUsd": 16273263.33,
		"hash": "50c0d6770e1f89536cabb7d1cf3173c396a8ca151fe1062ec20b83c435b34049"
	},
	{
		"id": "a6898d645717",
		"ts": "2026-08-24T19:25:37.592Z",
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
		"liquidityUsd": 939359.05,
		"hash": "a6898d645717b7484480a2c3dbfbbd559b38c47af80fa73d3bf8290a1b8c1e21"
	},
	{
		"id": "d752afe16a13",
		"ts": "2026-08-24T19:25:37.987Z",
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
		"liquidityUsd": 30076365.6,
		"hash": "d752afe16a13989ad92925b39e41209f084376a8bd1765f48f12a17a03f2912c"
	},
	{
		"id": "8ab593547a94",
		"ts": "2026-08-24T19:25:38.214Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "8ab593547a9463e65af0a376faaf83896b025fb6cbcb0f20140f65f77d0ab2b4"
	},
	{
		"id": "0c41e3ddf518",
		"ts": "2026-08-24T19:25:38.458Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1176219.3,
		"hash": "0c41e3ddf518b305b5a7837d8163b58392982a0c09df06168c98d821c14348e4"
	},
	{
		"id": "a16dd7364c9d",
		"ts": "2026-08-24T19:25:38.681Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2559285.21,
		"hash": "a16dd7364c9deaf825eaebc00e878945185a410aad08735ed4eca0fc5235df06"
	},
	{
		"id": "be0d8412393e",
		"ts": "2026-08-24T19:25:38.929Z",
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
		"liquidityUsd": 1911401.09,
		"hash": "be0d8412393ea3801af45415db4c088ca9607ecf69a1d2996a65d0e7ddbff488"
	},
	{
		"id": "bf28e01341e2",
		"ts": "2026-08-24T19:25:39.173Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair"
		],
		"liquidityUsd": 0,
		"hash": "bf28e01341e2c759e33949b7f182c405908fea436ac455cb8a12edbe471927d8"
	},
	{
		"id": "c3b577edd43c",
		"ts": "2026-08-24T19:25:39.652Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"no_dex_pair",
			"sim_honeypot"
		],
		"liquidityUsd": 0,
		"hash": "c3b577edd43cbc041f873577185a9b27cfde680400a89bc1fc9fec27b432f4b7"
	},
	{
		"id": "36d85638b26e",
		"ts": "2026-08-24T19:25:39.869Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2557941.88,
		"hash": "36d85638b26e9030faa9ba5ae59c9318c1e7e76c67b6bfde31200760f2dbc837"
	},
	{
		"id": "59cc49c1af69",
		"ts": "2026-08-24T19:25:40.079Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 97885.78,
		"hash": "59cc49c1af69382b70b02cd9b006e6779a90bcacfb5148fe5a7accbf7fa15993"
	},
	{
		"id": "640655ae9870",
		"ts": "2026-08-24T19:25:40.312Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "640655ae9870822899a8e3d8fffdc7c105a13259e98061d2d019dd3ccc2cbf27"
	},
	{
		"id": "59b7f94ba1e9",
		"ts": "2026-08-24T19:25:40.534Z",
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
		"liquidityUsd": 959727.31,
		"hash": "59b7f94ba1e909492249b4268fa91ec3c8d345ca5b452b6a9afa4d6600bd0541"
	},
	{
		"id": "e2a49d5df957",
		"ts": "2026-08-24T19:25:40.750Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 528208.24,
		"hash": "e2a49d5df95779b23a411563381eb66ec277f01900959d7acccb01e80434fa53"
	},
	{
		"id": "a13ed3cad00d",
		"ts": "2026-08-24T19:25:40.967Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 385795.21,
		"hash": "a13ed3cad00de510d7a340cda70129e4e6d7c5ab73ee18398cc91797ead8e245"
	},
	{
		"id": "a63f0d4559b4",
		"ts": "2026-08-24T19:25:41.175Z",
		"symbol": "GAME",
		"token": "0x1C4CcA7C5DB003824208aDDA61Bd749e55F463a3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3033700.3,
		"hash": "a63f0d4559b48eb503ba0451a8972b2f6c8d73bf0842a189994bdfeeb3aca533"
	},
	{
		"id": "e889d3d5836b",
		"ts": "2026-08-24T19:25:41.400Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1874126.69,
		"hash": "e889d3d5836be59124c7a1adaf5a2903b976fb0c278b1f39eefbadf4364dc344"
	},
	{
		"id": "265559ab3baf",
		"ts": "2026-08-24T19:25:41.618Z",
		"symbol": "TYBG",
		"token": "0x0d97F261b1e88845184f678e2d1e7a98D9FD38dE",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 285321.93,
		"hash": "265559ab3baff5020fa5ca2b74fa67aee73fd301bcdff403fb2113187c9f0833"
	},
	{
		"id": "c1d6d572e5b4",
		"ts": "2026-08-24T18:34:08.935Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113013906.1,
		"hash": "c1d6d572e5b4d3f5a3cf601b4aac00414743205b8c1f4d00da1270273c0d4a87"
	},
	{
		"id": "624874123d74",
		"ts": "2026-08-24T18:34:09.206Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 44,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "624874123d745ac5abebfe88109338455085d691df27c2997943881af38bfdf3"
	},
	{
		"id": "dbaff9221e37",
		"ts": "2026-08-24T18:34:09.470Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 48,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.04,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "dbaff9221e37c85c16e02da491b8ffb7e54af08c4208ceb4c3702393ffc126aa"
	},
	{
		"id": "4aba018a7c6d",
		"ts": "2026-08-24T18:34:09.717Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 48,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.04,
		"flags": [
			"no_dex_pair",
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "4aba018a7c6dae2c7d05fdbf5300f4d67aaf6ddf79a359de6896153a5707d545"
	},
	{
		"id": "fc6070b16117",
		"ts": "2026-08-24T18:34:10.336Z",
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
		"liquidityUsd": 4803299.21,
		"hash": "fc6070b1611724b0684ed52bd7bbb2fb67d261befabe4ef10cf070b4569acbe0"
	},
	{
		"id": "5eed570830a8",
		"ts": "2026-08-24T18:34:10.588Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1180055.21,
		"hash": "5eed570830a8c4aeca1413d92a93bd2623a476fd989b54ea1a0e7cd1c632c280"
	},
	{
		"id": "6644304da1ef",
		"ts": "2026-08-24T18:34:10.852Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2550829.94,
		"hash": "6644304da1ef648d0381c4f15174204adfbf7e78bcd0b3bec457e0614b8e8a62"
	},
	{
		"id": "3eb91d4f4c26",
		"ts": "2026-08-24T18:34:11.092Z",
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
		"liquidityUsd": 1899434.84,
		"hash": "3eb91d4f4c26cb68b094f804d80ebc4a9efa8a4ae1ae3b20d00865264fdd3373"
	},
	{
		"id": "d38a59b2be2f",
		"ts": "2026-08-24T18:34:11.343Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1441910.07,
		"hash": "d38a59b2be2fbe275a02744e6723508b2604f5f1b8674f2a64c8733636e0a251"
	},
	{
		"id": "db2028e96eb1",
		"ts": "2026-08-24T18:34:11.786Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 868898.69,
		"hash": "db2028e96eb1c23fc70375d9831c868a119c644f565576d2e0736feb33354e98"
	},
	{
		"id": "657ff55a56e2",
		"ts": "2026-08-24T18:34:12.007Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2555281.1,
		"hash": "657ff55a56e2f427b75c1584b4fa32107deb8566677097ef6031f548e2f3ae06"
	},
	{
		"id": "4f5a3f2f210d",
		"ts": "2026-08-24T18:34:12.344Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 102326.55,
		"hash": "4f5a3f2f210d90028a002b2b3115018baf8575d6e6e8d3c72e02954f976c320e"
	},
	{
		"id": "8b1482bf7fed",
		"ts": "2026-08-24T18:34:12.565Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 582946.82,
		"hash": "8b1482bf7fed5dad600e78466b38a1891e1f556aa01eb7acd4d02c0468c33a3a"
	},
	{
		"id": "7e2b4f524ffa",
		"ts": "2026-08-24T18:34:12.798Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 544923.69,
		"hash": "7e2b4f524ffa258a42890d8d4b22acdda2715f8cde9d7bfc717515655899f101"
	},
	{
		"id": "e99d97c79635",
		"ts": "2026-08-24T18:34:13.025Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 0,
		"hash": "e99d97c79635a9833b22686a7f618da49478d0be2c6ed6bf8c7f571c017a7603"
	},
	{
		"id": "707e7561c659",
		"ts": "2026-08-24T18:34:13.247Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 389047.64,
		"hash": "707e7561c6591b9c9ca06adbc7339d58a5dd09ddba797458387e7aa2342c80bb"
	},
	{
		"id": "e395f2895f04",
		"ts": "2026-08-24T18:34:13.481Z",
		"symbol": "GAME",
		"token": "0x1C4CcA7C5DB003824208aDDA61Bd749e55F463a3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3078302.06,
		"hash": "e395f2895f04084fc5496a4b91f5bc160fd27c99c52571fe64d98fa98fce6039"
	},
	{
		"id": "c45617bbf1e8",
		"ts": "2026-08-24T18:34:13.703Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1896024.5,
		"hash": "c45617bbf1e88cd00e0828dead07f8922259bb2972562bc141401d3d60962d97"
	},
	{
		"id": "a35a2fb6e0c0",
		"ts": "2026-08-24T18:34:13.924Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 126212.74,
		"hash": "a35a2fb6e0c0c8ec6047be6cfc9f67ed51af3ac01cb8d8ba59e07289bddb9e06"
	},
	{
		"id": "adb935ca619b",
		"ts": "2026-08-24T17:26:54.176Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 56,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "adb935ca619b187889c3b0e9f8440d2165b221e338ae7f4ac8264dea126ab974"
	},
	{
		"id": "11123cf9ea1f",
		"ts": "2026-08-24T17:26:54.679Z",
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
		"liquidityUsd": 14274232.16,
		"hash": "11123cf9ea1f2cd64962fd61bb2fcd5bd490c2337b7ff825977a27273e29bca3"
	},
	{
		"id": "6d33c9558de6",
		"ts": "2026-08-24T17:26:54.966Z",
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
		"liquidityUsd": 930653.33,
		"hash": "6d33c9558de648e76a63b7e31c1027163051f215fd3e0e19b7987bd103ab9482"
	},
	{
		"id": "39fd136501c4",
		"ts": "2026-08-24T17:26:55.238Z",
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
		"liquidityUsd": 30127648.07,
		"hash": "39fd136501c43a1629572cb4943cf662ffacf87aa94c0d932595ef264d51f11e"
	},
	{
		"id": "4536bc178c13",
		"ts": "2026-08-24T17:26:55.622Z",
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
		"liquidityUsd": 4775379.61,
		"hash": "4536bc178c13f11be1d9ae713074409bbb8368ad53a9667ab8b6e11c3e7d7087"
	},
	{
		"id": "0b03d19f6fd5",
		"ts": "2026-08-24T17:26:55.900Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1180874.53,
		"hash": "0b03d19f6fd5067f79fd0f6a1cf8f613de642e69e6633886ffddfbcc40279ee4"
	},
	{
		"id": "c4bc06d00c8b",
		"ts": "2026-08-24T17:26:56.177Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2800561.05,
		"hash": "c4bc06d00c8b3acf9fdeefe2c2c7ba9ce7d5d4a0283bbf7f7a8dee59dac200d2"
	},
	{
		"id": "3653ccb4f220",
		"ts": "2026-08-24T17:26:56.454Z",
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
		"liquidityUsd": 1882407.03,
		"hash": "3653ccb4f2204b5b65ce4bf4a50d81e5a2e1aa206ee8f66a5f03906bb021abac"
	},
	{
		"id": "19c4ba789dc2",
		"ts": "2026-08-24T17:26:56.926Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 811494.3,
		"hash": "19c4ba789dc2025f659c9d8303ba2880d74bd76f933b206f1f62fa5860661382"
	},
	{
		"id": "58b6039997f0",
		"ts": "2026-08-24T17:26:57.201Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1418616.73,
		"hash": "58b6039997f0c015308a49681ba0954d2efa919ed04e02a3f5c6b1da3e06774e"
	},
	{
		"id": "4f033c05067a",
		"ts": "2026-08-24T17:26:57.475Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2800561.05,
		"hash": "4f033c05067aa0a630593f6b137b8ac909b318426861a787310668eeeb4e5df8"
	},
	{
		"id": "6875126c1b1b",
		"ts": "2026-08-24T17:26:57.727Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 100294.69,
		"hash": "6875126c1b1b2faff0c2a22e255bc8b1f6201dec60dd6ec7c93079a912efb088"
	},
	{
		"id": "e8af8eeca147",
		"ts": "2026-08-24T17:26:57.982Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 559868.18,
		"hash": "e8af8eeca147c8743b30720d6d27762a94f7d6cdf87838311d02463cd0b7e814"
	},
	{
		"id": "4df426f358a6",
		"ts": "2026-08-24T17:26:58.238Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 598786.72,
		"hash": "4df426f358a641ce4dcb43a530d32e95140220f72d56ca6d7667f4d522010167"
	},
	{
		"id": "52e7eed214fa",
		"ts": "2026-08-24T17:26:58.493Z",
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
		"liquidityUsd": 904718.99,
		"hash": "52e7eed214fab7bbb785d1b8898601f2d4a3f15801f7d6e8eeca230708c803c1"
	},
	{
		"id": "288268fe93f4",
		"ts": "2026-08-24T17:26:58.750Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 393182.52,
		"hash": "288268fe93f4c04b470f8b508c664c4431d9274c18bb21973d0de68fb9424994"
	},
	{
		"id": "7c5c0a58b5c6",
		"ts": "2026-08-24T17:26:59.007Z",
		"symbol": "GAME",
		"token": "0x1C4CcA7C5DB003824208aDDA61Bd749e55F463a3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3092204.93,
		"hash": "7c5c0a58b5c650378fd34e645ced48883107bdbc82955e778789ea8e8f76c3db"
	},
	{
		"id": "2e43bf9dc287",
		"ts": "2026-08-24T17:26:59.271Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4261892.64,
		"hash": "2e43bf9dc287a77af1f11fd6401d7a097d7fe4b4947e01c5da91e177fda19b85"
	},
	{
		"id": "e31b66704e70",
		"ts": "2026-08-24T17:26:59.524Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 118708.61,
		"hash": "e31b66704e7023c21cdf8dd65038d2fb99884dcb1b2ce395d8204b32c690b8c3"
	},
	{
		"id": "8290527981a7",
		"ts": "2026-08-24T16:32:11.626Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113088336.62,
		"hash": "8290527981a7713e82802a3c0ac7ecede24495aed19102ccf8059a96b8cb672a"
	},
	{
		"id": "48c17e3c0941",
		"ts": "2026-08-24T16:32:12.063Z",
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
		"liquidityUsd": 16763651.34,
		"hash": "48c17e3c0941490035abe28e68df6eec523fe34bc6a2e5ac4289da31f484ec8e"
	},
	{
		"id": "362db9b52953",
		"ts": "2026-08-24T16:32:12.466Z",
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
		"liquidityUsd": 944991.29,
		"hash": "362db9b529535a41105a1c5713a161e82f7c3f88cf49766328a9be3023d7b9ea"
	},
	{
		"id": "1a4bb204b2d5",
		"ts": "2026-08-24T16:32:12.722Z",
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
		"liquidityUsd": 30434939.47,
		"hash": "1a4bb204b2d502e0c2423aba9fa96b6bb1dddc16e4b85412cfbeec4e5d3a52f8"
	},
	{
		"id": "b19266f7d8f7",
		"ts": "2026-08-24T16:32:13.231Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "b19266f7d8f7bda839d58479841b246405ab61a8d2cdf2a45cf0f0fa046efeae"
	},
	{
		"id": "316a0339b3b8",
		"ts": "2026-08-24T16:32:14.690Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"no_dex_pair",
			"modifiable_tax"
		],
		"liquidityUsd": 0,
		"hash": "316a0339b3b81fb042ae5bacb0248c780742be035046c9d19008bc97cbeeca16"
	},
	{
		"id": "071e32d12694",
		"ts": "2026-08-24T16:32:14.940Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 56,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced"
		],
		"liquidityUsd": 0,
		"hash": "071e32d12694c9b25858ead8c963ecec3bfcd2e66d525745bcf3fb8a2cc78c3f"
	},
	{
		"id": "4975b1275e58",
		"ts": "2026-08-24T16:32:15.183Z",
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
		"liquidityUsd": 1921660.8,
		"hash": "4975b1275e58eb4d2cf785fff6fb3ed02558aeccc4fb40e5598fd11098646960"
	},
	{
		"id": "77069e194d0b",
		"ts": "2026-08-24T16:32:15.616Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 823911.66,
		"hash": "77069e194d0b9c58c9e2053b204057a382e817c677f72cba246fee4d8e9ab917"
	},
	{
		"id": "df20950a6f2e",
		"ts": "2026-08-24T16:32:15.848Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair"
		],
		"liquidityUsd": 0,
		"hash": "df20950a6f2ea661d81ef698a4f02236c68278e3448fc827389d034e3eecb84e"
	},
	{
		"id": "dbfe66014296",
		"ts": "2026-08-24T16:32:16.061Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2885205.31,
		"hash": "dbfe66014296756573ba354e9adeaf24a0fb698bd0430612cd462f6ee1819522"
	},
	{
		"id": "5270cfca5379",
		"ts": "2026-08-24T16:32:16.294Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 590014.93,
		"hash": "5270cfca5379faa802dc3e2a153baebe438ea7ed7cb4cbc4ec0bafc9c50e28bc"
	},
	{
		"id": "9d7d63b3df6a",
		"ts": "2026-08-24T16:32:16.521Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 96269.73,
		"hash": "9d7d63b3df6a38c77af74a7f251c2367e750b8c7144c9acab6c7b679805f72bf"
	},
	{
		"id": "f629b2ce7c8c",
		"ts": "2026-08-24T16:32:16.751Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 593738.05,
		"hash": "f629b2ce7c8c13b957c160699c87c121e3213a14ff9d9d30c84b53c2c7ea3292"
	},
	{
		"id": "a0a7d9abe666",
		"ts": "2026-08-24T16:32:16.980Z",
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
		"liquidityUsd": 902438.29,
		"hash": "a0a7d9abe666029f672e9ad4d6a4120c895d957430694dc868408607ac65e989"
	}
]
