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
	"updatedAt": "2026-09-24T01:01:09.155Z",
	"tokensScored": 18416,
	"verdictsIssued": 18416,
	"safe": 15625,
	"risky": 1334,
	"likelyRug": 1457,
	"ticks": 1049
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "1726d3c24479",
		"ts": "2026-09-24T01:01:04.376Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 152209908.73,
		"hash": "1726d3c24479fe524aea17eab3f8c5847cd586d5f67a55ef0a5a0a5127943541"
	},
	{
		"id": "526df76e3b09",
		"ts": "2026-09-24T01:01:04.645Z",
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
		"liquidityUsd": 17444635.41,
		"hash": "526df76e3b09c9603dc55d17dc63a9686ed156fa072f1988d58b3f356dc8da30"
	},
	{
		"id": "82cdf42fc7e7",
		"ts": "2026-09-24T01:01:04.901Z",
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
		"liquidityUsd": 878840.96,
		"hash": "82cdf42fc7e78494525e677d9cb181c7b70845ededc0b61582c69aa760662aa9"
	},
	{
		"id": "84f5dadbf0df",
		"ts": "2026-09-24T01:01:05.213Z",
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
		"liquidityUsd": 35884684.36,
		"hash": "84f5dadbf0df5d0de401d4b15b8ac67ea453d51370a6c8ead94a60edbea3b513"
	},
	{
		"id": "6b8a274a9fe6",
		"ts": "2026-09-24T01:01:05.498Z",
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
		"liquidityUsd": 4454925.34,
		"hash": "6b8a274a9fe6716c9aca8fe60f14bb4e2a91410891500cf4ee1305dc12fc6efa"
	},
	{
		"id": "926b29594655",
		"ts": "2026-09-24T01:01:05.760Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1253553.81,
		"hash": "926b295946552c3726b5c8396c800d7a8ab55ffbc2a4f4709e787bf1adeb6959"
	},
	{
		"id": "666c77fd3722",
		"ts": "2026-09-24T01:01:06.046Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 35884684.36,
		"hash": "666c77fd3722fc4e1538601cf0bd8892ff4b66a1d71a079427940640a35c750b"
	},
	{
		"id": "fb58eea05302",
		"ts": "2026-09-24T01:01:06.347Z",
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
		"liquidityUsd": 1364366.67,
		"hash": "fb58eea05302e5398c6fe92acf11ac17015dce14b3244406fdb91f4fc36eee75"
	},
	{
		"id": "6f43d53ee1ec",
		"ts": "2026-09-24T01:01:06.598Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2824707.43,
		"hash": "6f43d53ee1ec79609c5950838e5eebf0f378240e13d783fe194825e62de04207"
	},
	{
		"id": "69df6e08ca27",
		"ts": "2026-09-24T01:01:06.992Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1530508.61,
		"hash": "69df6e08ca27db8eb03c768f1e57c3f7edc2f96f0402af63b4a7fd910de26494"
	},
	{
		"id": "ffc748e3d3a3",
		"ts": "2026-09-24T01:01:07.240Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 656986.49,
		"hash": "ffc748e3d3a3338569fd147aa5c96393f2a27055d06d0e3475840a5ad35bd37e"
	},
	{
		"id": "ab04f0c5f6d6",
		"ts": "2026-09-24T01:01:07.486Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18419404.68,
		"hash": "ab04f0c5f6d6155abd8da06f0c86ec538aa0414b253084e1dbddb4d20b0f6ac0"
	},
	{
		"id": "b834927b9159",
		"ts": "2026-09-24T01:01:07.739Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 211190.45,
		"hash": "b834927b9159f0bbe249a56bba4387fac5db81f022d8cdb2e48d88d4936658a3"
	},
	{
		"id": "72e0bd7c2f04",
		"ts": "2026-09-24T01:01:07.982Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3381425.79,
		"hash": "72e0bd7c2f04d943607f3c306dc7780e705188e312b11624b0ae65f9a2759070"
	},
	{
		"id": "2123cc7602eb",
		"ts": "2026-09-24T01:01:08.213Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 757321.55,
		"hash": "2123cc7602ebbf755cde435da937ad292b460831bdb84750be24a9317ba2ecd6"
	},
	{
		"id": "014e6f9aa7ee",
		"ts": "2026-09-24T01:01:08.456Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 750068.46,
		"hash": "014e6f9aa7ee345abcc991f97cfe0aa713c67c6821b0bb5a6f0dff745a5f5807"
	},
	{
		"id": "063d890a4eb5",
		"ts": "2026-09-24T01:01:08.685Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1095798.78,
		"hash": "063d890a4eb5dbb50e9e58d1aa4fb8e3d02eef19b1196ecaa8af625182258895"
	},
	{
		"id": "d237036a6233",
		"ts": "2026-09-24T01:01:08.913Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1946472.01,
		"hash": "d237036a6233ae7bf87fa6b90f31ad6a8a0219051e963df8003730f2f6f376ff"
	},
	{
		"id": "4a2280be719d",
		"ts": "2026-09-24T01:01:09.155Z",
		"symbol": "CATALYST",
		"token": "0xcA7A1E31b36779cf32acb18714Ab26982CF36B05",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 1171695.9,
		"hash": "4a2280be719d126c49a576f7cc40a121eacbb8c682c92e03c7813e5ea9a58c2b"
	},
	{
		"id": "4531970967a9",
		"ts": "2026-09-23T22:00:39.118Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 151676829.14,
		"hash": "4531970967a921b578c384f8875a52a98994baba37880aff833b4c7ea856b071"
	},
	{
		"id": "b0c892dec613",
		"ts": "2026-09-23T22:00:39.498Z",
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
		"liquidityUsd": 12993722.58,
		"hash": "b0c892dec613bb68978d9fb78d7833651493af2e938636092af1ff5b6326d963"
	},
	{
		"id": "41fd43ec40d5",
		"ts": "2026-09-23T22:00:39.747Z",
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
		"liquidityUsd": 879063.55,
		"hash": "41fd43ec40d5483d80b7ca43eb285415e9519951d96ac88e95568a2049d1e61b"
	},
	{
		"id": "3ae107f9b56d",
		"ts": "2026-09-23T22:00:40.014Z",
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
		"liquidityUsd": 35845951.78,
		"hash": "3ae107f9b56d268754bd26dbc0466861fc51fb8b4d169b732cbceca3a90efca4"
	},
	{
		"id": "aa14b87f6cb9",
		"ts": "2026-09-23T22:00:40.312Z",
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
		"liquidityUsd": 4432394.82,
		"hash": "aa14b87f6cb9ba10ca6cb94b7279e72a56111ccce6a4d6141306412741b0c541"
	},
	{
		"id": "b0343e5a2a4f",
		"ts": "2026-09-23T22:00:40.574Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1252461.9,
		"hash": "b0343e5a2a4f154c17907e8cf2fd61115f39c60a39826f012dd0f4759db4ae2d"
	},
	{
		"id": "ffc1b136bc0c",
		"ts": "2026-09-23T22:00:40.890Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 35845951.78,
		"hash": "ffc1b136bc0c5dff98ba31546c9bff3184d7be6bd5b9783f2f961b2bccfd0219"
	},
	{
		"id": "098c4b35e162",
		"ts": "2026-09-23T22:00:41.194Z",
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
		"liquidityUsd": 1362577.42,
		"hash": "098c4b35e162d3f41da4fc9b949c4deed403b0b5544a0d9376da459f4d137c18"
	},
	{
		"id": "e2f2cf4a0908",
		"ts": "2026-09-23T22:00:41.464Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2802482.97,
		"hash": "e2f2cf4a09084e082108d206da41fc9ef98d9cf05d8994e4624c685756befd99"
	},
	{
		"id": "993e503de516",
		"ts": "2026-09-23T22:00:41.734Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1579407,
		"hash": "993e503de51608f6cf3329e7ea4858792b32964f4e0250deb77e153167c88997"
	},
	{
		"id": "9a2d685784f1",
		"ts": "2026-09-23T22:00:41.979Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 640114.81,
		"hash": "9a2d685784f1874f6febc1c194ff7d2a76bdffed02ee03bf137ad31422570cd3"
	},
	{
		"id": "19c2d956ef3c",
		"ts": "2026-09-23T22:00:42.207Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 216998.81,
		"hash": "19c2d956ef3c783afec74590ebe620daf3488238501982ae3d398a4b69ef9530"
	},
	{
		"id": "effc7dab7655",
		"ts": "2026-09-23T22:00:42.447Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 740897.42,
		"hash": "effc7dab765547f57afde3ef99fa010aa95f537f12697b668933c1bd0fe87ba2"
	},
	{
		"id": "c14b66503a2b",
		"ts": "2026-09-23T22:00:42.763Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3362058.45,
		"hash": "c14b66503a2b9d5da308838e5f3e4bb3080d396fda083f13a3ea882113ae604b"
	},
	{
		"id": "4a519885e1e2",
		"ts": "2026-09-23T22:00:42.988Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18258487.31,
		"hash": "4a519885e1e247e9b44055ac58d19dceb378aaf7b15bc6decb771a146fa6e6c8"
	},
	{
		"id": "9010d72490f9",
		"ts": "2026-09-23T22:00:43.229Z",
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
		"liquidityUsd": 1434571.19,
		"hash": "9010d72490f93a816df2ebe1a6d4b6a521a588ad92fb6d88674edf04917448f1"
	},
	{
		"id": "4332f7f98a72",
		"ts": "2026-09-23T22:00:43.462Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 790267.24,
		"hash": "4332f7f98a728851a28928a7df7a0c87c5568ba175d98cf19182a095416211e3"
	},
	{
		"id": "0df9454c7c6e",
		"ts": "2026-09-23T22:00:43.705Z",
		"symbol": "SR",
		"token": "0x10c56F005a379f8eAfc88ff5c3f40d30F0031AC9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 111526.17,
		"hash": "0df9454c7c6e635b4cecbbf336c661b8a8e46688f3e2b7629aa7917b45e14917"
	},
	{
		"id": "ab4f52ab6b13",
		"ts": "2026-09-23T22:00:43.947Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1503360.19,
		"hash": "ab4f52ab6b1353059cc8e98430163afa7c7f1c1514430ab32ec7680c64d5d669"
	},
	{
		"id": "029d3345a737",
		"ts": "2026-09-23T18:12:50.468Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 151148719.88,
		"hash": "029d3345a737cbbbbfd66feabbd3f8f20ac823f57bd0bb293be9a64f69502bd0"
	},
	{
		"id": "3543ec288d41",
		"ts": "2026-09-23T18:12:50.714Z",
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
		"liquidityUsd": 16896616.67,
		"hash": "3543ec288d415d32c101f567d9002a4d6f95a93da4e14d48fe88547e761bade2"
	},
	{
		"id": "c70b5151f590",
		"ts": "2026-09-23T18:12:50.958Z",
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
		"liquidityUsd": 876455.3,
		"hash": "c70b5151f59098f7b386a3c556f03779bd60de60078ffbebab4291ae997b16da"
	},
	{
		"id": "cc77a93dab96",
		"ts": "2026-09-23T18:12:51.205Z",
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
		"liquidityUsd": 36064600.4,
		"hash": "cc77a93dab96d6ec892e21c4b3dbf7b14e5a74956d46da019e603249de190b6d"
	},
	{
		"id": "af2d12866db0",
		"ts": "2026-09-23T18:12:51.463Z",
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
		"liquidityUsd": 4434071.47,
		"hash": "af2d12866db0b0fb27a9eea1d8aed1fc8236ec503d3d447b160504efeafb8da0"
	},
	{
		"id": "4c450c846b92",
		"ts": "2026-09-23T18:12:51.717Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1254929.19,
		"hash": "4c450c846b92b247c01ef7cc1830c7945d7e11d4063f418c69808bea019ae0f2"
	},
	{
		"id": "35fcfb353c94",
		"ts": "2026-09-23T18:12:51.973Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36069931.06,
		"hash": "35fcfb353c9476fc62095d875c301a0524922cc699f6178893c1548d26fc3935"
	},
	{
		"id": "67acdbe41839",
		"ts": "2026-09-23T18:12:52.428Z",
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
		"liquidityUsd": 1356458.48,
		"hash": "67acdbe418390b6e7b33961d17b7cccda88e82b3389316cf260c4a31bfe58b72"
	},
	{
		"id": "56b058c0000e",
		"ts": "2026-09-23T18:12:52.682Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2703301.48,
		"hash": "56b058c0000eb887ab3e1dbd085f61cf04a9586cd807673360404df6c758b104"
	},
	{
		"id": "c0561fee2a31",
		"ts": "2026-09-23T18:12:52.927Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 679920.64,
		"hash": "c0561fee2a31e95dd58999c5c5b9a17faf67072e3705e2db3700c23387b0dd07"
	},
	{
		"id": "841ef3a255db",
		"ts": "2026-09-23T18:12:53.177Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 744186.34,
		"hash": "841ef3a255dbc236f8da3c74e558ebe2b24ebc16e3a1763ac9f2f001f64542c0"
	},
	{
		"id": "196d3fc352d0",
		"ts": "2026-09-23T18:12:53.402Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1586978.88,
		"hash": "196d3fc352d001131862f7ee62708256201e09f6a3da8a7f9426521d15af8f2c"
	},
	{
		"id": "96da6f025c08",
		"ts": "2026-09-23T18:12:53.621Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3386029.56,
		"hash": "96da6f025c08e7aa487ecd145b568105894751d7a505e252fbd40cf55607e816"
	},
	{
		"id": "0688e832243f",
		"ts": "2026-09-23T18:12:53.848Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18461183.74,
		"hash": "0688e832243f38f13497cf55b19d6eee6e74730cc49b02622fc27604b8ef9212"
	},
	{
		"id": "d58eb14abcd4",
		"ts": "2026-09-23T18:12:54.174Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 815130.05,
		"hash": "d58eb14abcd466c392b0c28e54d9879820ecada638eb522290e18920d45034b0"
	},
	{
		"id": "81e9a67a151c",
		"ts": "2026-09-23T18:12:54.398Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 189349.48,
		"hash": "81e9a67a151c4db5d1c9213b4debe810f46b958f549333b8aaff746ca4fd9807"
	},
	{
		"id": "7223ea6be816",
		"ts": "2026-09-23T18:12:54.618Z",
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
		"liquidityUsd": 1461032.53,
		"hash": "7223ea6be816ba42d76ea1c0ab77a488f079130fa21b8c904b4fa3cd6bc294fe"
	},
	{
		"id": "a2d3038c1c55",
		"ts": "2026-09-23T18:12:54.859Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 943029.39,
		"hash": "a2d3038c1c556c3f2fcd0bc2b4fdfd8c5ae8c99b39fa70782e3ad0888e1a4024"
	},
	{
		"id": "605a56f2fe43",
		"ts": "2026-09-23T18:12:55.087Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1084523.77,
		"hash": "605a56f2fe43ac6b60b6ff3c42b7bafca7c5d86ba608069a687b448d89a75856"
	},
	{
		"id": "7703e4cc79cb",
		"ts": "2026-09-23T13:18:34.725Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 152928679.89,
		"hash": "7703e4cc79cb6b4568b211cb9341b4680f94b170c1cbfadbf9799a603e13a54d"
	},
	{
		"id": "3f3e174cca5b",
		"ts": "2026-09-23T13:18:35.226Z",
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
		"liquidityUsd": 13086966.38,
		"hash": "3f3e174cca5b644031cff6bada71e2367737fd0c3bdb6b3626c7b6a6f3eff30d"
	},
	{
		"id": "008676fdfc4d",
		"ts": "2026-09-23T13:18:35.495Z",
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
		"liquidityUsd": 894362.52,
		"hash": "008676fdfc4de2f2aa75f4f182c40f12d435dd9e343e9ed2c295d2165326c26b"
	},
	{
		"id": "d4e9a301241e",
		"ts": "2026-09-23T13:18:35.764Z",
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
		"liquidityUsd": 36782054.13,
		"hash": "d4e9a301241e3ff45a393f15659303a30745bb2c1a227857b3f8b0adce0b19d1"
	},
	{
		"id": "891f8ca9d4c3",
		"ts": "2026-09-23T13:18:36.035Z",
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
		"liquidityUsd": 4620140.69,
		"hash": "891f8ca9d4c3fb2bfdea1bba258e366ba2068a19a9c33a35fb2f307b8423598d"
	},
	{
		"id": "f0677508a58f",
		"ts": "2026-09-23T13:18:36.312Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1325968.3,
		"hash": "f0677508a58fcc9e69117d84157b7514dc23486342232845ac5acd94115b411c"
	},
	{
		"id": "c5a2a10a1361",
		"ts": "2026-09-23T13:18:36.581Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36782054.13,
		"hash": "c5a2a10a13614c7a2b5131c6b331624bad47c100a4b9836e3964c433f04e9092"
	},
	{
		"id": "0a6ff992af8a",
		"ts": "2026-09-23T13:18:36.855Z",
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
		"liquidityUsd": 1379901.09,
		"hash": "0a6ff992af8ac075bec5915a1e40547f39d155c5e56781105a48a5b82a9a91b7"
	},
	{
		"id": "7ac7a1b6412c",
		"ts": "2026-09-23T13:18:37.113Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 701381.24,
		"hash": "7ac7a1b6412c8302b93962aeb5aad3a3d50358a4a7fa473440b9ac12c9c90736"
	},
	{
		"id": "a03066e3eedb",
		"ts": "2026-09-23T13:18:37.389Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2893842.56,
		"hash": "a03066e3eedb82e6db013a38bd6fef925db82f428fa4ec76949f49774bfe30a8"
	},
	{
		"id": "1bbe03e2027b",
		"ts": "2026-09-23T13:18:37.633Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 778722.05,
		"hash": "1bbe03e2027b650ec62bac9f9ff0f00931a471fb3abc82aa1b11ba088c777653"
	},
	{
		"id": "fe013c368ada",
		"ts": "2026-09-23T13:18:37.883Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 19014985.83,
		"hash": "fe013c368ada396edf58d0c6fea655e0eefde5a8ef049999eaf41ffa5cd017e8"
	},
	{
		"id": "fe1d65181c6b",
		"ts": "2026-09-23T13:18:38.123Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3463447.08,
		"hash": "fe1d65181c6b5914caef7971d0a4515a919dfba9f238b45c7260e73e4b5d742e"
	},
	{
		"id": "d13b411782dc",
		"ts": "2026-09-23T13:18:38.376Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 826406.71,
		"hash": "d13b411782dc909b2b1c5999f01b20d2df0b313d5aa9b6e513021864fb6f0eae"
	},
	{
		"id": "2bebbb7494da",
		"ts": "2026-09-23T13:18:38.618Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1533706.75,
		"hash": "2bebbb7494daf79bdf7c200e9679d5bfc811b48a24df4270f5db308cddb99c0e"
	},
	{
		"id": "4c38dccf0ca3",
		"ts": "2026-09-23T13:18:38.993Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 483181.34,
		"hash": "4c38dccf0ca32ba1382dd628dc6c433f98bb6ae511159233d9aee15303b66aef"
	},
	{
		"id": "e08b2b77b9b4",
		"ts": "2026-09-23T13:18:39.235Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1132710.98,
		"hash": "e08b2b77b9b432b931439304ceccbeb11d72bf2fe262e938203a5f9a4fd0c58c"
	},
	{
		"id": "f7f725b12544",
		"ts": "2026-09-23T13:18:39.485Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1084131.97,
		"hash": "f7f725b1254460552b05904227f49d0e2371e0acec3a8a9f174705c9aa0510a5"
	},
	{
		"id": "d52c66b93868",
		"ts": "2026-09-23T13:18:39.740Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2094843.16,
		"hash": "d52c66b93868bce9cb32be688acca6e92c9cf8ae7a51dd1bf160a4e3a01c9d79"
	},
	{
		"id": "f620aff1f47d",
		"ts": "2026-09-23T07:16:15.423Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 153549769.33,
		"hash": "f620aff1f47d276d0d01d186b7e8beaf166ecfd95a8f6e550841cb47c5dcf9c7"
	},
	{
		"id": "f5c5a863c271",
		"ts": "2026-09-23T07:16:15.687Z",
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
		"liquidityUsd": 15524961.7,
		"hash": "f5c5a863c271f5351acee984e941759761a6dada38330eb2b7601c32b57fb5ef"
	},
	{
		"id": "8e674198674d",
		"ts": "2026-09-23T07:16:15.895Z",
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
		"liquidityUsd": 909615.43,
		"hash": "8e674198674d36195e0d8a86df7612053da9c9a8bb6b3e2006785c5c624a2880"
	},
	{
		"id": "4d5a28fdf6fe",
		"ts": "2026-09-23T07:16:16.139Z",
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
		"liquidityUsd": 36941101.14,
		"hash": "4d5a28fdf6feb6ef0c7281abb0f659c43527dbe3bb252cc9f55b96878066c708"
	},
	{
		"id": "fa77b1b257d3",
		"ts": "2026-09-23T07:16:16.353Z",
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
		"liquidityUsd": 4679583.31,
		"hash": "fa77b1b257d333b8ec2870c80fba518d9924a660a8f09e99ffe0fdffb4ae9e87"
	},
	{
		"id": "e2d3d017c733",
		"ts": "2026-09-23T07:16:16.564Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1343395.05,
		"hash": "e2d3d017c733154412e28eb6570ac5ec78e7c5ef390b2d62bf00b5ea963078a4"
	},
	{
		"id": "63ff68afdc82",
		"ts": "2026-09-23T07:16:16.771Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36941101.14,
		"hash": "63ff68afdc8268919738fbc6b6f72ccf0defcc5a2253fb0876852a380135197b"
	},
	{
		"id": "d8b088ae4447",
		"ts": "2026-09-23T07:16:17.036Z",
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
		"liquidityUsd": 1355727.28,
		"hash": "d8b088ae4447dd9b300096d99b756d83c7a078804e2eea04c5e45295ad079812"
	},
	{
		"id": "53649beb3197",
		"ts": "2026-09-23T07:16:17.253Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 695790.49,
		"hash": "53649beb3197ae59dc3c4e3d96ceb620977e6d1630fb2d5b288c6b70739f7b60"
	},
	{
		"id": "f2a3821d514e",
		"ts": "2026-09-23T07:16:17.470Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2959846.72,
		"hash": "f2a3821d514e00b02acfe21c3169d373448add9c853150a8982ff1fd13261ad0"
	},
	{
		"id": "0e57383c3c30",
		"ts": "2026-09-23T07:16:17.663Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 842660.24,
		"hash": "0e57383c3c30058afde5aacf52c2efaaa6d6fb55185eee2fcf8e69b402d8728d"
	},
	{
		"id": "9fd13dbf5577",
		"ts": "2026-09-23T07:16:17.855Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 19200466.75,
		"hash": "9fd13dbf5577e07c3f03f6202e313e7cac14494836e68ffcceb2abd4bb79fb88"
	},
	{
		"id": "854dbcedc690",
		"ts": "2026-09-23T07:16:18.044Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3623947.66,
		"hash": "854dbcedc6901a1a367f17c8df7058655f0dc06582aabc876f3d243e46c97640"
	},
	{
		"id": "f0cfcb9ae23d",
		"ts": "2026-09-23T07:16:18.246Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1546973.08,
		"hash": "f0cfcb9ae23d49c0fa39fc60dfb9dc2e3a1739b169acbbe471e13e322e8b3a1b"
	},
	{
		"id": "9e042bb55e0f",
		"ts": "2026-09-23T07:16:18.438Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1157827.31,
		"hash": "9e042bb55e0fa3548bab7559c9c6b193fff83dbd8a7e9799786f4dd0f494913b"
	},
	{
		"id": "c23f6dd94635",
		"ts": "2026-09-23T07:16:18.632Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 493461.72,
		"hash": "c23f6dd9463518a624faa3beb85dba3e97984cb3a9a44748be5b42b945be6233"
	},
	{
		"id": "fdcc06a35da5",
		"ts": "2026-09-23T07:16:18.902Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 884790.51,
		"hash": "fdcc06a35da5cad43f4420e3a3ea75a091ba8890f7de5ff28d2a9595f64a75b5"
	},
	{
		"id": "604ff8da7440",
		"ts": "2026-09-23T07:16:19.094Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1107568.93,
		"hash": "604ff8da7440fc7546f2040bd69bc1e56820b903497dcdfa8d7fbde71b3f00a0"
	},
	{
		"id": "7a3d81dc8356",
		"ts": "2026-09-23T07:16:19.284Z",
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
		"liquidityUsd": 1556491.22,
		"hash": "7a3d81dc8356d398164e2a99523603af2827bf66f16856f555125c0dab993864"
	},
	{
		"id": "a7d5342c1e2e",
		"ts": "2026-09-23T01:12:41.823Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 153583745.13,
		"hash": "a7d5342c1e2ecb8f75c335ad4c7f68cb9d4a5585cb9474fe713f03b328081ae6"
	},
	{
		"id": "59cad1f6a113",
		"ts": "2026-09-23T01:12:42.079Z",
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
		"liquidityUsd": 17585789.75,
		"hash": "59cad1f6a113a17d128d5ac8ed03cb4cebf2fab7b76f86a666302bc0a141ae10"
	},
	{
		"id": "150c5a2a3d0d",
		"ts": "2026-09-23T01:12:42.330Z",
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
		"liquidityUsd": 899905.37,
		"hash": "150c5a2a3d0d61a86a1fb7a64b8648c7991cb1727c4d62a6f87349c15f0d1e92"
	},
	{
		"id": "8a67ebcfe0ba",
		"ts": "2026-09-23T01:12:42.585Z",
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
		"liquidityUsd": 36601234.2,
		"hash": "8a67ebcfe0ba8aca19ef607ad409b05f269a32fe4590da02035e19bb1055fe44"
	},
	{
		"id": "6708243ce1a9",
		"ts": "2026-09-23T01:12:42.831Z",
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
		"liquidityUsd": 4806477.62,
		"hash": "6708243ce1a908b5a286e08abd7dddf7f06256e8157a2a8caea986a1efecd3cd"
	},
	{
		"id": "79e691697102",
		"ts": "2026-09-23T01:12:43.079Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1337546.61,
		"hash": "79e69169710268bb32730ccb92bed08f37cce0794012ab8f32b787273506bb95"
	},
	{
		"id": "68aa5ee5fd7a",
		"ts": "2026-09-23T01:12:43.321Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36601234.2,
		"hash": "68aa5ee5fd7a03a9846cf41010b9a8972f0ef3cf219e2f95ca808b6992de8ed4"
	},
	{
		"id": "d0682197fac8",
		"ts": "2026-09-23T01:12:43.609Z",
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
		"liquidityUsd": 1354265.08,
		"hash": "d0682197fac84a768146bfecfe22cd90a3a3cd8f25c9ad0abbade8c0a33517ab"
	},
	{
		"id": "86b2a4e68925",
		"ts": "2026-09-23T01:12:43.852Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 679598.42,
		"hash": "86b2a4e689253b8fafe353095720d44d69fee96d9dbb4eac2d07415d3e8126c5"
	},
	{
		"id": "67853afb4379",
		"ts": "2026-09-23T01:12:44.098Z",
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
		"liquidityUsd": 19411255.87,
		"hash": "67853afb437986df5eb20635d84194213840f9fe285f66d336901b08cbc4abec"
	},
	{
		"id": "bd8c458d0e28",
		"ts": "2026-09-23T01:12:44.358Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2853329.66,
		"hash": "bd8c458d0e28e4409810d54c9f798052daff3180253982bd6752a8e1169d7413"
	},
	{
		"id": "254ef408e4a8",
		"ts": "2026-09-23T01:12:44.585Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 934141.73,
		"hash": "254ef408e4a84d02747557d5bba72761546922ab573157dab87be84a3da057b1"
	},
	{
		"id": "6051d96bf825",
		"ts": "2026-09-23T01:12:44.822Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1143482.96,
		"hash": "6051d96bf8252801ac34078c20c0ff3acbaf950159b49a547406af8ae9e95d06"
	},
	{
		"id": "939700b8c3ee",
		"ts": "2026-09-23T01:12:45.048Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 535950.16,
		"hash": "939700b8c3ee4771cdda6b233e4c8091e6da52a35ae3c030303a087ea4308705"
	},
	{
		"id": "242c1502cc76",
		"ts": "2026-09-23T01:12:45.279Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1558993.76,
		"hash": "242c1502cc76a6419d1f55d839524403ab3b29af4a45230a9c35d9c6ddaca35f"
	},
	{
		"id": "487aeb1c30d8",
		"ts": "2026-09-23T01:12:45.509Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1096664.13,
		"hash": "487aeb1c30d8d1a35fc2157c308ea707259cf2895047287aab0ae919cdd5bfd7"
	},
	{
		"id": "987e2fd5516c",
		"ts": "2026-09-23T01:12:45.738Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3619366.46,
		"hash": "987e2fd5516cea9a559996110c618ac39165f34ae227eeb6002533f2039cf651"
	},
	{
		"id": "2c017f2409b0",
		"ts": "2026-09-23T01:12:45.965Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 550923.57,
		"hash": "2c017f2409b0d7941b7cfa0ae17c09d08c1b7f8526c141f6321c2e328e63cddf"
	},
	{
		"id": "0951bc4239cb",
		"ts": "2026-09-23T01:12:46.192Z",
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
		"liquidityUsd": 1629453.76,
		"hash": "0951bc4239cb293cb3dc55f1e0c25f7e416763ff939755662f0bf5ce26543b86"
	},
	{
		"id": "fe1f99acbfd6",
		"ts": "2026-09-22T22:41:36.786Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 153284766.91,
		"hash": "fe1f99acbfd624b6e9ae9b005208b8bf5ff070afbf23343d4ef3e4d950ce1c67"
	},
	{
		"id": "799b2ffc24ea",
		"ts": "2026-09-22T22:41:37.063Z",
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
		"liquidityUsd": 17253009.45,
		"hash": "799b2ffc24ea4bcf2f0da0401830bd89f1265777a9f91d03356d17e3eaeb2dcd"
	},
	{
		"id": "58ca10591af0",
		"ts": "2026-09-22T22:41:37.322Z",
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
		"liquidityUsd": 895693.43,
		"hash": "58ca10591af078d0f01790b5447ba4b55038cb61b75fae60f3156cded9cf1127"
	},
	{
		"id": "ecf5649e21a4",
		"ts": "2026-09-22T22:41:37.586Z",
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
		"liquidityUsd": 36133912.32,
		"hash": "ecf5649e21a44284c96a590ed3a9ff67f29c8b8e02b8176a6678de35714f5e1a"
	},
	{
		"id": "8d38168dc8bf",
		"ts": "2026-09-22T22:41:37.849Z",
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
		"liquidityUsd": 4666617.59,
		"hash": "8d38168dc8bf409a5cc8fc043e60121c5a7e5923b43d29fdb4f9b40382634447"
	},
	{
		"id": "90b295c9a1e2",
		"ts": "2026-09-22T22:41:38.123Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1329644.53,
		"hash": "90b295c9a1e23c16550f28b4c48dac29f17aa093c834a7cb4aac8a3a7b4cd619"
	},
	{
		"id": "54426be14303",
		"ts": "2026-09-22T22:41:38.384Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36133912.32,
		"hash": "54426be14303975afe91fc79b7833f82d93d58eb3b384559220c6117d205400b"
	},
	{
		"id": "5ac6e763edb5",
		"ts": "2026-09-22T22:41:38.643Z",
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
		"liquidityUsd": 1371277,
		"hash": "5ac6e763edb5cce9f5a8b589360462e4554d4f1ec30abffbb5914612a135e6c1"
	},
	{
		"id": "0bd7d86fcf4b",
		"ts": "2026-09-22T22:41:38.902Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 607041.82,
		"hash": "0bd7d86fcf4bd2cb0b263f738005d2e931c38a65123462668f6b7a765b5d5e00"
	},
	{
		"id": "ee2ed7cf81d4",
		"ts": "2026-09-22T22:41:39.164Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2826129.91,
		"hash": "ee2ed7cf81d409566fc03ffce6436838ccb743509b6de640ede4770fad374e49"
	},
	{
		"id": "89e005149849",
		"ts": "2026-09-22T22:41:39.418Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1138138.41,
		"hash": "89e00514984988d86ae029705566dcb46d1c8696fad14c94e1a055e1ae892e8a"
	},
	{
		"id": "d529e5e77640",
		"ts": "2026-09-22T22:41:39.662Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 19153898.09,
		"hash": "d529e5e77640e7b8569976689f46bc1ae8119cb7f3b3845f618bf9d2b4ffd092"
	},
	{
		"id": "b41a49de3d3b",
		"ts": "2026-09-22T22:41:39.907Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 942562.29,
		"hash": "b41a49de3d3b21fd7bacf86ac590e3c3ed81803c87ffc342f2462d9d42bac407"
	},
	{
		"id": "6e2eed630bcb",
		"ts": "2026-09-22T22:41:40.151Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1602587.61,
		"hash": "6e2eed630bcb0f1fd52de1899f1b68db90edadbb970bef2b87168c1633ef4fd2"
	},
	{
		"id": "02856779ad0e",
		"ts": "2026-09-22T22:41:40.401Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 566995.85,
		"hash": "02856779ad0e01410b61a4a3ec95bbc50dae0dbd8a3f19f555e15969765ab5ac"
	},
	{
		"id": "494e770a69fa",
		"ts": "2026-09-22T22:41:40.658Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 1118780.78,
		"hash": "494e770a69fa53ee95fe34d36a9c95d6c0507777511af2462c680252341cb3e8"
	},
	{
		"id": "d3d0718cf55e",
		"ts": "2026-09-22T22:41:40.906Z",
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
		"liquidityUsd": 3612467.35,
		"hash": "d3d0718cf55e050efc8e8a61088c2a4bb354f92ff5e06fee13ea4cd59d54b840"
	},
	{
		"id": "502b809f2872",
		"ts": "2026-09-22T22:41:41.153Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 567108.83,
		"hash": "502b809f28727d94a913d8a5bde845807b9af96e27876beb8d12bc80d84a6bce"
	},
	{
		"id": "aaa7657eab44",
		"ts": "2026-09-22T22:41:41.410Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1548501.4,
		"hash": "aaa7657eab445a9f21d137047b976482ca2b4e5737f224082578725247648c08"
	},
	{
		"id": "3c99ae398160",
		"ts": "2026-09-22T19:31:56.327Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 151543143.66,
		"hash": "3c99ae39816007111b5a1ad4a94771bc30b485849e20d61d14edf724db510098"
	},
	{
		"id": "2ba9e9a3900a",
		"ts": "2026-09-22T19:31:57.108Z",
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
		"liquidityUsd": 13316655.95,
		"hash": "2ba9e9a3900a60ae71af917453df40b801a41aafe5b8502a942a45e57a4b7c72"
	},
	{
		"id": "77daf013cb1e",
		"ts": "2026-09-22T19:31:57.404Z",
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
		"liquidityUsd": 899885.13,
		"hash": "77daf013cb1e8af98ae11ef0079343d436d7529847aa1f1ab23d053178af89aa"
	},
	{
		"id": "56b476bce1e1",
		"ts": "2026-09-22T19:31:57.708Z",
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
		"liquidityUsd": 36097149.44,
		"hash": "56b476bce1e146b97290cc565407644d8e7e962111229b3978458f15097dcb80"
	},
	{
		"id": "c2f4aab07988",
		"ts": "2026-09-22T19:31:58.013Z",
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
		"liquidityUsd": 4619042.92,
		"hash": "c2f4aab07988dbf6f919cc2ccb20483cf2c750af765175098d45dd92a9602e73"
	},
	{
		"id": "5c80c47422e4",
		"ts": "2026-09-22T19:31:58.316Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1331166.3,
		"hash": "5c80c47422e46d7d6403f23ccdd6ee58038fba53bad5b27519306ec8716d08c5"
	},
	{
		"id": "e9e811f08cff",
		"ts": "2026-09-22T19:31:58.613Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36097149.44,
		"hash": "e9e811f08cff30d53fe79d24a87ce075dca02b31ee3dda04bec12042586677f2"
	},
	{
		"id": "2836dfee6fcb",
		"ts": "2026-09-22T19:31:58.942Z",
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
		"liquidityUsd": 1372283.01,
		"hash": "2836dfee6fcbe539219b3c0309e060c9f58059d10911fc8e0394aa5225f8d9c5"
	},
	{
		"id": "36892a42ab2d",
		"ts": "2026-09-22T19:31:59.240Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"mintable",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 717072.01,
		"hash": "36892a42ab2d0e702f10260dfc8b6245b41e1cb8c547db9f10aac141f0cca221"
	},
	{
		"id": "b0b08b1a685a",
		"ts": "2026-09-22T19:31:59.541Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1165213.97,
		"hash": "b0b08b1a685a87e86cc50a7879047d68476b3b74716103a4597d03a175b80f19"
	},
	{
		"id": "f6b0b973a8ee",
		"ts": "2026-09-22T19:31:59.824Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2660668.73,
		"hash": "f6b0b973a8ee86816e68909d3c0cd77199dc2b8a135acbf007b3b6aa253680c6"
	},
	{
		"id": "69ff0134a8b0",
		"ts": "2026-09-22T19:32:00.106Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 19207916.97,
		"hash": "69ff0134a8b0ec059db92e2781b71a698993334b08f07269c98b7291535ba118"
	},
	{
		"id": "6ed4a64403a0",
		"ts": "2026-09-22T19:32:00.402Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3578793.42,
		"hash": "6ed4a64403a02d23c9c09eeb4c7f7f284c4fb155260be10e660345ab75ef11ed"
	},
	{
		"id": "082425962516",
		"ts": "2026-09-22T19:32:00.705Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1615132.46,
		"hash": "082425962516491da2b597a537c91ff95b19e89885787d17015281d72d508d36"
	},
	{
		"id": "dd9b6f7b5e6f",
		"ts": "2026-09-22T19:32:01.001Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"mintable",
			"owner_not_renounced"
		],
		"liquidityUsd": 933606.12,
		"hash": "dd9b6f7b5e6f96f16bfa1dbd18aff2281a7ac2802442c1a84c7b7d8753c7fcc3"
	},
	{
		"id": "9d3088dd330c",
		"ts": "2026-09-22T19:32:01.299Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 594768.81,
		"hash": "9d3088dd330cc2e74b44805d28a607ad46f185a226e95cc0682c2a8f80563eba"
	},
	{
		"id": "9d5f9610cd9b",
		"ts": "2026-09-22T19:32:01.601Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1213828.53,
		"hash": "9d5f9610cd9ba879b45612727189b7cb62e7c3f94f1eb9e5351354c9811a6e22"
	},
	{
		"id": "f10ea6935c67",
		"ts": "2026-09-22T19:32:02.296Z",
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
		"liquidityUsd": 1551592.62,
		"hash": "f10ea6935c672f344b59d94f5e257968be1d41e07f9aaef4f590d57420172447"
	},
	{
		"id": "f4fe89f914e7",
		"ts": "2026-09-22T19:32:02.597Z",
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
		"liquidityUsd": 232019.4,
		"hash": "f4fe89f914e7dcd40b04bcb9efaaa072039d801cdc0e1cea7560aad19c111de0"
	},
	{
		"id": "d9928abe1eba",
		"ts": "2026-09-22T15:23:53.117Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 148439956.89,
		"hash": "d9928abe1eba576726362f247415eb93c68fb4ec2f5e2e652aad4a35e8d917d8"
	},
	{
		"id": "c5e4086870f4",
		"ts": "2026-09-22T15:23:53.575Z",
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
		"liquidityUsd": 15447751.95,
		"hash": "c5e4086870f4c93c96d9a50fea519b457ff6cfb3adb615fdd6f1754da61479fe"
	},
	{
		"id": "b5f72fe838cf",
		"ts": "2026-09-22T15:23:53.780Z",
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
		"liquidityUsd": 900466.6,
		"hash": "b5f72fe838cf2928a7968ca6a0e6838df45715110775606e182f7dd949e04218"
	},
	{
		"id": "02043b0da660",
		"ts": "2026-09-22T15:23:53.973Z",
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
		"liquidityUsd": 36217056.8,
		"hash": "02043b0da660421f47e8640a723e8f432ee91dffeebd5adaa26413f213301fd5"
	},
	{
		"id": "aef0f5c903cb",
		"ts": "2026-09-22T15:23:54.162Z",
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
		"liquidityUsd": 4678519.94,
		"hash": "aef0f5c903cb5f595ba497aa55b1211b297ca5d4355b117f0c4811cea9d19dc8"
	},
	{
		"id": "60059b34cf49",
		"ts": "2026-09-22T15:23:54.351Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1321100.95,
		"hash": "60059b34cf49a4d22e108593beaa8da3d3d37a5ec545ad317e03bec4937eae58"
	},
	{
		"id": "d7f32f5ee275",
		"ts": "2026-09-22T15:23:54.543Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36196397.86,
		"hash": "d7f32f5ee275303829d2f0e4be65b0c4a3f026385295bbef87869174004065d6"
	},
	{
		"id": "7c71118d5f03",
		"ts": "2026-09-22T15:23:54.732Z",
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
		"liquidityUsd": 1378897.53,
		"hash": "7c71118d5f039b1d659703fa990b7523c1c2165bbb74964dcfcdff711007afe6"
	},
	{
		"id": "1945b6c85140",
		"ts": "2026-09-22T15:23:54.929Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"mintable",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 702906.67,
		"hash": "1945b6c85140ee9baa14a40f86306bb84133cc7c65bec2b61c969f65136df3b9"
	},
	{
		"id": "dceadadbf250",
		"ts": "2026-09-22T15:23:55.126Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2625366.37,
		"hash": "dceadadbf2506b2e2fe91c8619dc602822850c841d3120790c3b9cb2dfed888f"
	},
	{
		"id": "c4a298784259",
		"ts": "2026-09-22T15:23:55.315Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1207306.81,
		"hash": "c4a298784259fae6acbdb6dace8281d3f33e2d9c1ddd2e92197f2ee7a9300eb6"
	},
	{
		"id": "33e4d5eb53f4",
		"ts": "2026-09-22T15:23:55.517Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18663168.43,
		"hash": "33e4d5eb53f4e68061c5ab022736b47010cb900491e5c37cd3553b257489e36c"
	},
	{
		"id": "7c8518977c57",
		"ts": "2026-09-22T15:23:55.714Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3521584.52,
		"hash": "7c8518977c57526fd917299209453498405e26c2cad157dc8d21dbc315494fe2"
	},
	{
		"id": "42a5eff14e2a",
		"ts": "2026-09-22T15:23:55.906Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1560821.83,
		"hash": "42a5eff14e2a790c71bccb0fd1286ee6a1aecece4d1c665ae0f08b4bddd31a40"
	},
	{
		"id": "1f4327537815",
		"ts": "2026-09-22T15:23:56.102Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 928746.36,
		"hash": "1f432753781556d99ecc41e94a166e375d8885eea5a00d60aeb8ed6b2ecb14ae"
	},
	{
		"id": "48da28f0f6fb",
		"ts": "2026-09-22T15:23:56.320Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1535684.26,
		"hash": "48da28f0f6fbb37f1d5d96372fcc144b7d74aed729b8d6b40f9d18282ec91f2e"
	},
	{
		"id": "32a5af4b3017",
		"ts": "2026-09-22T15:23:56.522Z",
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
		"liquidityUsd": 987734.27,
		"hash": "32a5af4b3017a76234b593b6f1eba87295f7f98158eead0cc0073818a04ce565"
	},
	{
		"id": "18a56babec1a",
		"ts": "2026-09-22T15:23:56.726Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 536853.7,
		"hash": "18a56babec1aed0544689bebc3d47ed647beea09e78a97d970cbe08e00861a3f"
	},
	{
		"id": "e25111a4048e",
		"ts": "2026-09-22T15:23:56.916Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 948657.11,
		"hash": "e25111a4048ebdcb9e7e6efa26be63934e64b9261a2173921542e2985e1806fb"
	},
	{
		"id": "bcb67f07af0a",
		"ts": "2026-09-22T10:53:36.917Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146068795.3,
		"hash": "bcb67f07af0af9d840ba7f44d8ac57cbce9ca6975468ee5ef6bc6b3ebc2c84b9"
	},
	{
		"id": "cc8f64d4c36a",
		"ts": "2026-09-22T10:53:37.168Z",
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
		"liquidityUsd": 17011281.62,
		"hash": "cc8f64d4c36a1b53a7bf87f58c3a3f07c1918ee9706f946df42016570c0a9189"
	},
	{
		"id": "aeac0a68cc30",
		"ts": "2026-09-22T10:53:37.429Z",
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
		"liquidityUsd": 902436.48,
		"hash": "aeac0a68cc30115f1e4ecd939248655f7bdc2bba3486e50eaeb3d9d380207b8c"
	},
	{
		"id": "b0e57918841e",
		"ts": "2026-09-22T10:53:37.682Z",
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
		"liquidityUsd": 36607709.24,
		"hash": "b0e57918841e50e8b984950b26268674550649c3b69d5d93606fec6bb2c3e3b4"
	},
	{
		"id": "3816f01275ac",
		"ts": "2026-09-22T10:53:37.942Z",
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
		"liquidityUsd": 4637571.36,
		"hash": "3816f01275ac8cb2096d8afea051d72fa6d0fe63bf60f8a6ce526e6fb0f2a5cc"
	},
	{
		"id": "9935e28b5036",
		"ts": "2026-09-22T10:53:38.191Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1314983.36,
		"hash": "9935e28b5036df5785c5fa93aa8d40075fa841ffc49447f27314a3d8dc0d0453"
	},
	{
		"id": "69ee4f0547d9",
		"ts": "2026-09-22T10:53:38.445Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36607709.24,
		"hash": "69ee4f0547d9d3af45e6f99374c47241eef4f8611f167977f56420b7ee9e96a6"
	},
	{
		"id": "f8d0b2ae7753",
		"ts": "2026-09-22T10:53:38.699Z",
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
		"liquidityUsd": 1312930.09,
		"hash": "f8d0b2ae775316fb890f9d249b5888c4939f33dbda37b5393887b75b50393083"
	},
	{
		"id": "b3add4821f9a",
		"ts": "2026-09-22T10:53:38.958Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"mintable",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 697739.5,
		"hash": "b3add4821f9ae2d780e8f55f41a0ba02a082d2de1b074740285730b5482253ad"
	},
	{
		"id": "7154c601c955",
		"ts": "2026-09-22T10:53:39.204Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2687186.31,
		"hash": "7154c601c955901788a6a5559874e6750288f18df1893fabecc9ba9621c27c23"
	},
	{
		"id": "f895a85a176b",
		"ts": "2026-09-22T10:53:39.445Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18942834.87,
		"hash": "f895a85a176bcdf96d211e98efeadfa00fc7525c6694ca7955e0888ee719cb63"
	},
	{
		"id": "445f2d47e64f",
		"ts": "2026-09-22T10:53:39.673Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1191371.93,
		"hash": "445f2d47e64f485222a7c18c7f114cd49021cf2cc2589ec80ca6c253f9f3de49"
	},
	{
		"id": "26d8132879e0",
		"ts": "2026-09-22T10:53:39.911Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1562794.31,
		"hash": "26d8132879e07fb424d649c11649a463f3ad9baa0c170598648fdf1a3a65c51c"
	},
	{
		"id": "b300fdaba57d",
		"ts": "2026-09-22T10:53:40.137Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3504194.37,
		"hash": "b300fdaba57de4d4df23a50825ff150415ead6df201434c619f3bed18f5b8fb1"
	},
	{
		"id": "2ca241e30736",
		"ts": "2026-09-22T10:53:40.380Z",
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
		"liquidityUsd": 1055609.57,
		"hash": "2ca241e30736c29b110bd714caeeaa4f7d6908a7bf42aa4132d249a842aa0ed0"
	},
	{
		"id": "726379cf5d71",
		"ts": "2026-09-22T10:53:40.607Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 914403.71,
		"hash": "726379cf5d71aca961cb508083da4773e344969b6b077ff32525240d9d984870"
	},
	{
		"id": "1f8cad6dae4f",
		"ts": "2026-09-22T10:53:40.848Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1525657.51,
		"hash": "1f8cad6dae4fdfb20c7bc090db7b4d8a1a2ff943924eaa68a49b1ab40809a896"
	},
	{
		"id": "12d089e553ec",
		"ts": "2026-09-22T10:53:41.077Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1345863.04,
		"hash": "12d089e553ec4cd36fe916e3a3468aae187fe21c24ac8a26352c658f599822a8"
	},
	{
		"id": "3e2ac62aa638",
		"ts": "2026-09-22T10:53:41.317Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4721171.73,
		"hash": "3e2ac62aa638a2ffca6f03d059e14353e0c52e2d3d83733b0308b8aa853acf0a"
	},
	{
		"id": "a8ccdbe6ae9d",
		"ts": "2026-09-22T05:48:51.088Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 144675108.57,
		"hash": "a8ccdbe6ae9d6c6c189a9ce49abcffacfb5a539a012bd4ca31272bfc98faf231"
	},
	{
		"id": "f4071d37cdcb",
		"ts": "2026-09-22T05:48:51.337Z",
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
		"liquidityUsd": 16832336.49,
		"hash": "f4071d37cdcb806faa47d0e5d6ff3262e97bd894243f4ad8dc23daf6e1dea7bc"
	},
	{
		"id": "33210e802efe",
		"ts": "2026-09-22T05:48:51.580Z",
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
		"liquidityUsd": 896564.37,
		"hash": "33210e802efe26e213c41e78f6cacc43318886f2e4e0c79b6532e8010b1dc78a"
	},
	{
		"id": "c84e2f7e18f1",
		"ts": "2026-09-22T05:48:51.841Z",
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
		"liquidityUsd": 36172677.73,
		"hash": "c84e2f7e18f1d41b898a501c88ef1c698cc6effb0dc2381b803a6f50ab67d96f"
	},
	{
		"id": "7595b18482b3",
		"ts": "2026-09-22T05:48:52.085Z",
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
		"liquidityUsd": 4604144.34,
		"hash": "7595b18482b3b7f12ed8b89c183bdd68206990140bd7c5b95bb76888e6c28f8e"
	},
	{
		"id": "2536158c8180",
		"ts": "2026-09-22T05:48:52.347Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1320513.35,
		"hash": "2536158c8180bc964cf1584ec46aaade458738868166301b97c80898fcd42e96"
	},
	{
		"id": "d880785721ab",
		"ts": "2026-09-22T05:48:52.598Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36172677.73,
		"hash": "d880785721ab55e8cc936c0a4b60f76454cf3da87c343272b3d1f0173e7c788a"
	},
	{
		"id": "3ba073eaf310",
		"ts": "2026-09-22T05:48:52.841Z",
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
		"liquidityUsd": 1374650.8,
		"hash": "3ba073eaf310360ed962a2e01d0ee2d8621dd2bb0d04eb97382b250d858f1c71"
	},
	{
		"id": "3d55b7ee56d8",
		"ts": "2026-09-22T05:48:53.307Z",
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
		"liquidityUsd": 18624995.4,
		"hash": "3d55b7ee56d8c452bc15bc237a4862f50f93e5d5e5b52a33e2d84e8953377eed"
	},
	{
		"id": "31d3385425ac",
		"ts": "2026-09-22T05:48:53.547Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 747039.63,
		"hash": "31d3385425ac4806e7cc664720725c75574e8574eef0e047677ae46b4e86fa4a"
	}
]
