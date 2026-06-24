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
	"updatedAt": "2026-06-24T04:48:24.900Z",
	"tokensScored": 8,
	"verdictsIssued": 8,
	"safe": 8,
	"risky": 0,
	"likelyRug": 0,
	"ticks": 1
}

export const verdicts: AgentVerdict[] = [
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
