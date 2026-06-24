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
	"updatedAt": "2026-06-24T17:03:04.318Z",
	"tokensScored": 40,
	"verdictsIssued": 40,
	"safe": 37,
	"risky": 3,
	"likelyRug": 0,
	"ticks": 5
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "84314d1f81ef",
		"ts": "2026-06-24T17:03:01.944Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 94712779.31,
		"hash": "84314d1f81ef661d1dd72ed5538ce2bd6061bcd4b184c14e12c741dbc0556f1f"
	},
	{
		"id": "ac0cf62c3726",
		"ts": "2026-06-24T17:03:02.462Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12248862.74,
		"hash": "ac0cf62c3726c1d8cca1ce6dbe2ec803c8e2be35d5bd23b9e62778912cfd4382"
	},
	{
		"id": "545773e298ef",
		"ts": "2026-06-24T17:03:02.814Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1401349.52,
		"hash": "545773e298efb408a9150bb310e874ce4c5a1d26e47a3d2d88bccb1633d54652"
	},
	{
		"id": "174a77f6082f",
		"ts": "2026-06-24T17:03:03.160Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24903069.26,
		"hash": "174a77f6082f2de5debf8a34477fcc868a57bf7e4214396a7a4f0316b2e570f2"
	},
	{
		"id": "b0e9cb27ae97",
		"ts": "2026-06-24T17:03:03.511Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3853725.04,
		"hash": "b0e9cb27ae97764253ba760205a2d78c90354924e5139767e381a7799869daee"
	},
	{
		"id": "68505c34dbdb",
		"ts": "2026-06-24T17:03:03.701Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 895027.56,
		"hash": "68505c34dbdb741caec726b4d23b008a613f74b03d365d5c5121088c2f8e5984"
	},
	{
		"id": "92c8007180ff",
		"ts": "2026-06-24T17:03:03.944Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1146767.69,
		"hash": "92c8007180ff4167980d503afbd7a0928e2ce2923f2e87fe979c31297c904629"
	},
	{
		"id": "170930e930d2",
		"ts": "2026-06-24T17:03:04.318Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2370352.78,
		"hash": "170930e930d2834fa3952a397ae878404ac2495794e952866e5e302ecd0db245"
	},
	{
		"id": "f37374980e4d",
		"ts": "2026-06-24T14:23:47.129Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 97517551.34,
		"hash": "f37374980e4d260a4bed0b4dd916b4e37545fa3499ccdbce4cdad6c14d42d4e6"
	},
	{
		"id": "436f8e26f919",
		"ts": "2026-06-24T14:23:47.390Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12580535.51,
		"hash": "436f8e26f919dbcddcad71e3fdecaf7c22ebbb843a81cb1988736bb6c3d8fa1e"
	},
	{
		"id": "319198e9ff42",
		"ts": "2026-06-24T14:23:47.645Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1516624.73,
		"hash": "319198e9ff4266254d9f8e038c0685846b871728ba58e9267bee1e3ae59f2f51"
	},
	{
		"id": "6bfed6a7f071",
		"ts": "2026-06-24T14:23:47.905Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 25317330.51,
		"hash": "6bfed6a7f071aed27b3564d302c1d8c25e5083102d1bbcaf33b95035637c2c60"
	},
	{
		"id": "ae307fdc207b",
		"ts": "2026-06-24T14:23:48.169Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3981026.74,
		"hash": "ae307fdc207b6fc91113668e0ec14634352cb574920acf5c07748d1142f2764c"
	},
	{
		"id": "90211ba6d5bd",
		"ts": "2026-06-24T14:23:48.441Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 941543.34,
		"hash": "90211ba6d5bd2917f3b7594ba584bbb8e56865c54b743aebb12f7f4d5e8ea2a9"
	},
	{
		"id": "ea02b81ec393",
		"ts": "2026-06-24T14:23:48.718Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25317353.25,
		"hash": "ea02b81ec3935585fde7b929f018123a9d89229546a326bed49c6af77fa3d436"
	},
	{
		"id": "9d2bb300f498",
		"ts": "2026-06-24T14:23:48.974Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1773791.42,
		"hash": "9d2bb300f498d47081529ab4fd9f8f70ad9a184f40b13e164a7715cb18408729"
	},
	{
		"id": "8798b7d2b5c0",
		"ts": "2026-06-24T11:43:25.004Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 98447595.94,
		"hash": "8798b7d2b5c08ef77e14f9d0e58afade5abbdcb9ffa1ead544284ffae7b5cdc8"
	},
	{
		"id": "ba31fc5d561e",
		"ts": "2026-06-24T11:43:25.510Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13618726.05,
		"hash": "ba31fc5d561e3e5b1193baa1e8475c2b4db97065674fa733bfeaa0e64a9903cb"
	},
	{
		"id": "20d328cbebb5",
		"ts": "2026-06-24T11:43:25.859Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1594281.19,
		"hash": "20d328cbebb589db118bb756db80b576690dfe55a3481df98006799d29fdcf0d"
	},
	{
		"id": "c70a84be5e92",
		"ts": "2026-06-24T11:43:26.204Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 25641784.5,
		"hash": "c70a84be5e92a83771bc6e8a4b765ffd482bf81e6ef0b8a07059b95dcc0174ac"
	},
	{
		"id": "c1e3cf6f9b86",
		"ts": "2026-06-24T11:43:26.546Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 4354059.91,
		"hash": "c1e3cf6f9b86e5f3343cd921489251a1be8ffe0e5d5a0fb1d160d88be0800cd4"
	},
	{
		"id": "4969c6cc6751",
		"ts": "2026-06-24T11:43:27.176Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 954809.66,
		"hash": "4969c6cc6751fee644fcc9a2812a4ab9ad047c403fcf65c6950691aeefdc58ef"
	},
	{
		"id": "f43151cd32e3",
		"ts": "2026-06-24T11:43:27.363Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25641784.5,
		"hash": "f43151cd32e399ff70989ea4b9afb1249ba03190d6a343285a886614f1ed3dc9"
	},
	{
		"id": "55d86950978a",
		"ts": "2026-06-24T11:43:27.705Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1799399.96,
		"hash": "55d86950978ad03f48fb78d45a944fed456c6347d6326fda36ea8d1a1dfbb287"
	},
	{
		"id": "da548e6ca18b",
		"ts": "2026-06-24T08:19:58.819Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 98580939.47,
		"hash": "da548e6ca18b2951a0123ce3aacbd645e35c6cc9ad7daa5017669479ea42b709"
	},
	{
		"id": "a01b4b1e646f",
		"ts": "2026-06-24T08:19:58.865Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13351693.45,
		"hash": "a01b4b1e646f3347e5c13fba5591f5ca2948628f15edab6e0350015609a104ab"
	},
	{
		"id": "4c436958f1cd",
		"ts": "2026-06-24T08:19:58.907Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1584032.5,
		"hash": "4c436958f1cdf6dd6ff63b0438fce35c32f1464bd69f64a82d9ab8391717f49a"
	},
	{
		"id": "0b7c5ad6eba8",
		"ts": "2026-06-24T08:19:58.947Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 26046659.36,
		"hash": "0b7c5ad6eba8d69a9e989cddd08e594dfa4e3d7a193caf849298a874521b9629"
	},
	{
		"id": "3e87ec143058",
		"ts": "2026-06-24T08:19:58.989Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 4398427.04,
		"hash": "3e87ec143058bfe9535d253c93dd4c34fdd6235fdd8ed71be0a28c7186f44d9f"
	},
	{
		"id": "13d44d4fa884",
		"ts": "2026-06-24T08:19:59.035Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 953490.69,
		"hash": "13d44d4fa88430eaaf9ab1e7609495c120e133aacf267b09311f99e70a8de1ca"
	},
	{
		"id": "4d60c54a8f46",
		"ts": "2026-06-24T08:19:59.116Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 26046659.36,
		"hash": "4d60c54a8f4649a76e6511fd64df7a598744fec3c8d211cf228ad2e6c985a2f1"
	},
	{
		"id": "b8cca87f4de0",
		"ts": "2026-06-24T08:19:59.182Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1732192.55,
		"hash": "b8cca87f4de036955e6cb4a3c38ee0becf2066351c52c40c47d929f2e18ede4d"
	},
	{
		"id": "2c2eb8ce5873",
		"ts": "2026-06-24T04:48:24.588Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 98023432.71,
		"hash": "2c2eb8ce5873b6e8c2f0e30350ac6263914c922b4c9f7a67861d795a26fa0669"
	},
	{
		"id": "8e91db03a33c",
		"ts": "2026-06-24T04:48:24.632Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13429063.95,
		"hash": "8e91db03a33c24fd28c6bbd98cb1084465c01b1c3bca4c0fb6052f79d7ef7ecf"
	},
	{
		"id": "1f6f692e5721",
		"ts": "2026-06-24T04:48:24.672Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1559651.17,
		"hash": "1f6f692e57216df9c3ea8b91b67bc1f99b6b7053a62299331e15d195f40bc115"
	},
	{
		"id": "fc2ddaabfd44",
		"ts": "2026-06-24T04:48:24.712Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 25593759.51,
		"hash": "fc2ddaabfd447d610afebcfcd57193f43502297010f2f63921f5b92c3f49e43f"
	},
	{
		"id": "a0b0dc12ad54",
		"ts": "2026-06-24T04:48:24.780Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 4386870.47,
		"hash": "a0b0dc12ad544b40b059725cf1aafe99d6a570e3344cdd13ccf9cca5a073d615"
	},
	{
		"id": "391d05ea5798",
		"ts": "2026-06-24T04:48:24.819Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 950108.15,
		"hash": "391d05ea5798badbca15272528fb84516672510f9974238946f78f18016e6f8a"
	},
	{
		"id": "429a05564aeb",
		"ts": "2026-06-24T04:48:24.860Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 25593759.51,
		"hash": "429a05564aebe53c0c33507d0e0522391159263f5412be75784d1784c17dd303"
	},
	{
		"id": "0e5da6734d44",
		"ts": "2026-06-24T04:48:24.900Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2428793.6,
		"hash": "0e5da6734d4463624b0382a697d322f0afe30733aba2ac29da54c938f564104f"
	}
]
