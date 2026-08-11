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
	"updatedAt": "2026-08-11T10:50:51.439Z",
	"tokensScored": 9101,
	"verdictsIssued": 9101,
	"safe": 7946,
	"risky": 677,
	"likelyRug": 478,
	"ticks": 552
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "c2dc977db8c4",
		"ts": "2026-08-11T10:50:47.891Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112131562.88,
		"hash": "c2dc977db8c46fb6a572e58c963aab7e5ac39b8c0b582d95f85a0328684b89f1"
	},
	{
		"id": "aeac6685da58",
		"ts": "2026-08-11T10:50:48.133Z",
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
		"liquidityUsd": 14184200.89,
		"hash": "aeac6685da58dec5a8198df3af178597dc1d1cd88a930c4226d485af9c50678c"
	},
	{
		"id": "fb26d2934d6f",
		"ts": "2026-08-11T10:50:48.375Z",
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
		"liquidityUsd": 1036501.15,
		"hash": "fb26d2934d6f5bb601e80bd0b9881475393cf4385f96dca069c4a60ee601d2d0"
	},
	{
		"id": "db5ea388f3e5",
		"ts": "2026-08-11T10:50:48.624Z",
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
		"liquidityUsd": 26902882.86,
		"hash": "db5ea388f3e580f22aebc15db42edcfe6374b8db66da2b44c08f38a6e6ee701c"
	},
	{
		"id": "6080e04a60df",
		"ts": "2026-08-11T10:50:48.859Z",
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
		"liquidityUsd": 4203806.86,
		"hash": "6080e04a60df8ffd05c6d1167df3e0c311b3b497ac70e7f03e5ff9a22ab09856"
	},
	{
		"id": "a59ebfec46fb",
		"ts": "2026-08-11T10:50:49.094Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 916234.15,
		"hash": "a59ebfec46fbdec24d930aaaab3262bd09a244188f681ff9ab3683e4962cfc6d"
	},
	{
		"id": "7885412b9dc5",
		"ts": "2026-08-11T10:50:49.334Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26902882.86,
		"hash": "7885412b9dc56ad4621530b88fff38f42e8fb6b027b0cd84edca69ce494757b5"
	},
	{
		"id": "49263447987e",
		"ts": "2026-08-11T10:50:49.580Z",
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
		"liquidityUsd": 4390036.3,
		"hash": "49263447987e75b2445fad29270b8b37895701b2fcd52b26d4fffa2838712d97"
	},
	{
		"id": "86eec256ceb6",
		"ts": "2026-08-11T10:50:49.865Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2145427.89,
		"hash": "86eec256ceb6e4523aca9e56889153e27967c98c3225d1ff08b0818d9caaef0d"
	},
	{
		"id": "8557cbe073c1",
		"ts": "2026-08-11T10:50:50.101Z",
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
		"liquidityUsd": 256209.32,
		"hash": "8557cbe073c109336b76917ab160fff65876ff6af409296d228ff59782be3326"
	},
	{
		"id": "2455668b95c8",
		"ts": "2026-08-11T10:50:50.331Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 989378.54,
		"hash": "2455668b95c8f8342edfd8375eb6fd9a09dfce71d359da24cbaf08a47dfc94bd"
	},
	{
		"id": "a004328c1fc9",
		"ts": "2026-08-11T10:50:50.551Z",
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
		"liquidityUsd": 9428323.68,
		"hash": "a004328c1fc9670dc3197536b220b5cd3cd856d83d4f32f66fe27e069b697168"
	},
	{
		"id": "13088a146bef",
		"ts": "2026-08-11T10:50:50.769Z",
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
		"liquidityUsd": 4604519.93,
		"hash": "13088a146befece15173715b207d40b3bd7c27d749b0f1a8b3af50f8c769cdcb"
	},
	{
		"id": "2218e02a51d8",
		"ts": "2026-08-11T10:50:50.992Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4366467.42,
		"hash": "2218e02a51d8e15a805e36a14e3b65ebc79e979d42ca71576b35279329e97a78"
	},
	{
		"id": "240d61a79f01",
		"ts": "2026-08-11T10:50:51.221Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 801269.27,
		"hash": "240d61a79f01ac4a36f71be6d6a86a4b5344a615ad97b4431a8e7fb20fc083aa"
	},
	{
		"id": "29a1369384cb",
		"ts": "2026-08-11T10:50:51.439Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 72927.22,
		"hash": "29a1369384cb5638f9979e1e9853fda92c97e5146da6ac33317585b54c643320"
	},
	{
		"id": "cbb9d8beed50",
		"ts": "2026-08-11T09:57:14.924Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111926013.41,
		"hash": "cbb9d8beed50ab75c050b60caaad588f2829a2dae9c4318c9938d9eb945d3018"
	},
	{
		"id": "009d6d61a41b",
		"ts": "2026-08-11T09:57:15.122Z",
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
		"liquidityUsd": 18125312.49,
		"hash": "009d6d61a41b1496ab9c66d3399b8fe7fa39f94217df293f6ad9679a96028594"
	},
	{
		"id": "663e686a76eb",
		"ts": "2026-08-11T09:57:15.458Z",
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
		"liquidityUsd": 1027492.82,
		"hash": "663e686a76ebc346c77b8f393a9686497ac99b19490a7190181a90d3bf52b611"
	},
	{
		"id": "ed08390acfaa",
		"ts": "2026-08-11T09:57:15.648Z",
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
		"liquidityUsd": 26809473.01,
		"hash": "ed08390acfaa0ce684c53e0cfed3221a1a261dad3e8f8037a4c5703f195b6339"
	},
	{
		"id": "fb1e5a59ba69",
		"ts": "2026-08-11T09:57:15.837Z",
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
		"liquidityUsd": 4194649.86,
		"hash": "fb1e5a59ba6998009f042264b8547bacdbef3a2936365c034315803c4b218fe4"
	},
	{
		"id": "e6f7a6b3343a",
		"ts": "2026-08-11T09:57:16.058Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 916234.15,
		"hash": "e6f7a6b3343a31d11f7a64c48a3e5aefba8970c5812f124d9890bab9a459d234"
	},
	{
		"id": "4da3069adfbf",
		"ts": "2026-08-11T09:57:16.247Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26809473.01,
		"hash": "4da3069adfbfc96bb1f0df7ebc50063fffe4a39edc34e400c6243054484f7b38"
	},
	{
		"id": "9c99b3f9a83f",
		"ts": "2026-08-11T09:57:16.619Z",
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
		"liquidityUsd": 1929054.73,
		"hash": "9c99b3f9a83f0298fbcb26bc995d885fc4860a355ac95d0ebcdb25022663417b"
	},
	{
		"id": "08767682317c",
		"ts": "2026-08-11T09:57:16.818Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2149606.02,
		"hash": "08767682317cc7e8957cc7ad06a06f0db8ecbf8c3736dc07ebd60a89989f1988"
	},
	{
		"id": "ae2f8a759bd8",
		"ts": "2026-08-11T09:57:17.010Z",
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
		"liquidityUsd": 253834.86,
		"hash": "ae2f8a759bd8e576dcbe275d88e04350c61b1ba55e268e6fa56b3d11c9ddbe10"
	},
	{
		"id": "7c0f8c6ba084",
		"ts": "2026-08-11T09:57:17.221Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9416598.66,
		"hash": "7c0f8c6ba08458ce7cfce01dc1345178d00351b7fee4ba7c491fff0aa4aee120"
	},
	{
		"id": "ba725eef5a77",
		"ts": "2026-08-11T09:57:17.427Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 987722.38,
		"hash": "ba725eef5a77c207db81523933d8bc8cfa44dbd33dd39229944158acaaae7bb3"
	},
	{
		"id": "0f5c2c3ab7b3",
		"ts": "2026-08-11T09:57:17.621Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4350245.16,
		"hash": "0f5c2c3ab7b3e0d1f108b40db0d33d73ee5a29a565bcb6ae58c7f7521d7a2e9f"
	},
	{
		"id": "0d292364df6a",
		"ts": "2026-08-11T09:57:17.801Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 73806.83,
		"hash": "0d292364df6a45d947158fc441efe95d8c21289a7c5b41b7934d30a0fda68ff2"
	},
	{
		"id": "3b5d8c677b7d",
		"ts": "2026-08-11T09:57:18.016Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 257322.53,
		"hash": "3b5d8c677b7d6f04dd3fbc178806ab4574b2ce6d3485fd812ca1c38c86614ed3"
	},
	{
		"id": "c8afb6817d99",
		"ts": "2026-08-11T09:57:18.212Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 799592.12,
		"hash": "c8afb6817d9924273af214fb7f98979204412ae13b617247f0ce25786d53abb3"
	},
	{
		"id": "1712a6783704",
		"ts": "2026-08-11T08:13:16.569Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112646012.07,
		"hash": "1712a67837044c5e8ed060a5cacc23a572069f0878c65b55620e8443ab6aec93"
	},
	{
		"id": "57bd2ca85378",
		"ts": "2026-08-11T08:13:17.013Z",
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
		"liquidityUsd": 18254692.36,
		"hash": "57bd2ca85378914483e4f6dc9f05d848c1956649bbe906d8b354bdd26bda3142"
	},
	{
		"id": "ea9ae5fd3ac5",
		"ts": "2026-08-11T08:13:17.263Z",
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
		"liquidityUsd": 1027492.82,
		"hash": "ea9ae5fd3ac590ffa38a1cc0ad08e85c5501ec1688f791665d19c0a95a9d1577"
	},
	{
		"id": "9a97c50632c7",
		"ts": "2026-08-11T08:13:17.508Z",
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
		"liquidityUsd": 26804776.89,
		"hash": "9a97c50632c707001d8d6bb9e7f46c8aea1b2d4cb33adad8cfd9f7aad695a993"
	},
	{
		"id": "f732a3401ca9",
		"ts": "2026-08-11T08:13:17.751Z",
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
		"liquidityUsd": 4178322.73,
		"hash": "f732a3401ca9a64df41f3a0b4a96e656819c05b462b4d9904ae768c232ba50be"
	},
	{
		"id": "498a5dd952dd",
		"ts": "2026-08-11T08:13:17.996Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 916234.15,
		"hash": "498a5dd952dd37691322833bd68ccd403d69569391ec2020962f5595007afc49"
	},
	{
		"id": "0044526e851d",
		"ts": "2026-08-11T08:13:18.242Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26804776.89,
		"hash": "0044526e851d746aeb3cbf0bdfa21f5c13e69e3cc31708bfc33e6d8897c399e6"
	},
	{
		"id": "a74dfbb7303f",
		"ts": "2026-08-11T08:13:18.483Z",
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
		"liquidityUsd": 1924061.46,
		"hash": "a74dfbb7303fe2d518f539523f8fda47e4badc02ee34390d783be9d9ca1fc257"
	},
	{
		"id": "0aecb341a876",
		"ts": "2026-08-11T08:13:18.722Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2147393.13,
		"hash": "0aecb341a876c13d0f65c0bab8d306364c7a9d41fd212a87c5a2cb9e95667c8b"
	},
	{
		"id": "46fdab6a5cd8",
		"ts": "2026-08-11T08:13:18.966Z",
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
		"liquidityUsd": 254401.1,
		"hash": "46fdab6a5cd8acf86896c986591dee1f4cb8252acd60c81700bdd0fa60207dd4"
	},
	{
		"id": "8ff345cf69e2",
		"ts": "2026-08-11T08:13:19.195Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9380179.35,
		"hash": "8ff345cf69e2e6dc50a0f2999aa3f2244a8ca58e1e89df1c067369a86bd3f259"
	},
	{
		"id": "bf7274649ede",
		"ts": "2026-08-11T08:13:19.421Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 990771.51,
		"hash": "bf7274649ededb868bfada4b756f030ffe54b84c4c55c7cc527597faff7a0b41"
	},
	{
		"id": "fae9b5d4a4f7",
		"ts": "2026-08-11T08:13:19.647Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 261571.68,
		"hash": "fae9b5d4a4f705661d49d67c1599851bf83a731034c0207a11ed7d355a9a78f8"
	},
	{
		"id": "95546e304bfe",
		"ts": "2026-08-11T08:13:19.875Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 287162.34,
		"hash": "95546e304bfe58b77d1a71e2a367e73a18de12c5fa1e8fb2a8928e8f8d347980"
	},
	{
		"id": "400f0f2a6aa8",
		"ts": "2026-08-11T08:13:20.103Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4338352.52,
		"hash": "400f0f2a6aa89a72ddff36abb433ac1bdca5960752ff8e44c7a93291fef9f25e"
	},
	{
		"id": "fc19d899753b",
		"ts": "2026-08-11T08:13:20.330Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 68127.15,
		"hash": "fc19d899753b5bcb4fb61b8b23810c461b440ff87ab94e2d7b11f1d20ed5de83"
	},
	{
		"id": "5313a99c67f1",
		"ts": "2026-08-11T08:13:20.556Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 73127.11,
		"hash": "5313a99c67f1de43386f4325a168dcd496347de6cf548c84d6954dbeeb145782"
	},
	{
		"id": "cbd80f621cb0",
		"ts": "2026-08-11T06:59:57.519Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112598731.04,
		"hash": "cbd80f621cb0e3f2e7cfc8a6dc9ba109c91f8c7f6890efcad414beaa6c55a4a0"
	},
	{
		"id": "e1863e635aac",
		"ts": "2026-08-11T06:59:57.748Z",
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
		"liquidityUsd": 18132906.92,
		"hash": "e1863e635aac930cadd9d8cdcd5fa3f34b9b383120e63303945c208d65659e91"
	},
	{
		"id": "ee3a92a37fa8",
		"ts": "2026-08-11T06:59:57.976Z",
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
		"liquidityUsd": 1027492.82,
		"hash": "ee3a92a37fa85c600f3d118372bfc8d303c2f8bd52880d0d761632f0f0d5617d"
	},
	{
		"id": "a4eb97c909a6",
		"ts": "2026-08-11T06:59:58.207Z",
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
		"liquidityUsd": 26787309.37,
		"hash": "a4eb97c909a60b167286a37c756933e857b843b0b427047e65fa0e22e636c839"
	},
	{
		"id": "043998e13433",
		"ts": "2026-08-11T06:59:58.626Z",
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
		"liquidityUsd": 4179242.67,
		"hash": "043998e13433e034d6ef9a2fd55d8ec543ae7956128cf0668fcb99affb29ea4f"
	},
	{
		"id": "5cc87c4d5c34",
		"ts": "2026-08-11T06:59:58.849Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 908742.83,
		"hash": "5cc87c4d5c3401baf1297dce6377880fc8970b2d276c2f28b559454288bd4282"
	},
	{
		"id": "dcf659b96a16",
		"ts": "2026-08-11T06:59:59.089Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26787309.37,
		"hash": "dcf659b96a16810171d926adfb256e2dd30ef9818b562d50b19c7e14386bbd64"
	},
	{
		"id": "9455a6e0433d",
		"ts": "2026-08-11T06:59:59.320Z",
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
		"liquidityUsd": 3685705.4,
		"hash": "9455a6e0433d4116773bd7dec3c3810d9adc75f6e4f6ad4181f8438bedc9a37d"
	},
	{
		"id": "58f4f44e42ec",
		"ts": "2026-08-11T06:59:59.607Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2143405.95,
		"hash": "58f4f44e42ec5a9919155ea32dea870e93247e87ce9d101c4d6f7707e2baa2e9"
	},
	{
		"id": "a74b7557afc8",
		"ts": "2026-08-11T06:59:59.835Z",
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
		"liquidityUsd": 254220.7,
		"hash": "a74b7557afc828ccdd0db51c7904fc6f7477893559ed42204fe2354e662d85a8"
	},
	{
		"id": "3d7e49b8a0c9",
		"ts": "2026-08-11T07:00:00.044Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9382518.35,
		"hash": "3d7e49b8a0c96ea076bda603e8d0d3feb72d2ac0dd8f528a919be20086397df4"
	},
	{
		"id": "674302d3428c",
		"ts": "2026-08-11T07:00:00.669Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1002187.9,
		"hash": "674302d3428c6c0ffceb61e528f7d41c044889c98765b415f55d11c1a68b1426"
	},
	{
		"id": "7f5dd2812cab",
		"ts": "2026-08-11T07:00:00.937Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 261571.68,
		"hash": "7f5dd2812cabed00c6de97f76f57c883a3a1f7ea1dee8aac9fd07cd78dd519fb"
	},
	{
		"id": "d4aa92aa7edf",
		"ts": "2026-08-11T07:00:01.183Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 285570.86,
		"hash": "d4aa92aa7edf4dadfc43496ab5853923d1d9ba4cdf3538c862c4b43dd0d94e37"
	},
	{
		"id": "9792b8ae08bb",
		"ts": "2026-08-11T07:00:01.459Z",
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
		"liquidityUsd": 4331355.15,
		"hash": "9792b8ae08bba028bd8062ddbce829b9e5eda7b9a74309d30ed308b41545318f"
	},
	{
		"id": "0f4333872779",
		"ts": "2026-08-11T07:00:01.691Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 69383.08,
		"hash": "0f4333872779bf5655b8f0966eba9ae6c396885855db85c328ca6c117d7240d0"
	},
	{
		"id": "01f568dffc78",
		"ts": "2026-08-11T07:00:02.282Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1938240.32,
		"hash": "01f568dffc78aadf08482faf9c3fec31265e6f53fa60a24577cdbddf5662b836"
	},
	{
		"id": "54ab7b13d1ff",
		"ts": "2026-08-11T05:03:53.072Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112758811.41,
		"hash": "54ab7b13d1ffe6893e4853141f1d1a71740cf7c51ef9a1bb7f6924709548c181"
	},
	{
		"id": "e12bece35c92",
		"ts": "2026-08-11T05:03:53.418Z",
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
		"liquidityUsd": 18582586.06,
		"hash": "e12bece35c92cb206a00c8d5cb6ee6d4013b9854a956f0843f546f554a53da44"
	},
	{
		"id": "f54003438145",
		"ts": "2026-08-11T05:03:53.611Z",
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
		"liquidityUsd": 1027492.82,
		"hash": "f540034381455610430b357c3ea13d9075496ff00c2ec90c3bf4f372c07d95cd"
	},
	{
		"id": "f8fc48fd2082",
		"ts": "2026-08-11T05:03:53.810Z",
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
		"liquidityUsd": 26809484.66,
		"hash": "f8fc48fd2082ec9a790d033cd8d0fdbb25eace25dc4e36b78100509cc761c4b9"
	},
	{
		"id": "c6f696ee9441",
		"ts": "2026-08-11T05:03:54.010Z",
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
		"liquidityUsd": 4182248.4,
		"hash": "c6f696ee944140bcacf4019b40d8f3aebadea850e88f69f87aaa5a3d613a93db"
	},
	{
		"id": "04d89dc21ec9",
		"ts": "2026-08-11T05:03:54.424Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 913407.93,
		"hash": "04d89dc21ec9df056f16cca8b44f6f67533098b2dfbcf9aa5467b56e99dd7bf5"
	},
	{
		"id": "3cf066e1abd8",
		"ts": "2026-08-11T05:03:54.618Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26809484.66,
		"hash": "3cf066e1abd8485e24520fd8dc24f6cfdaac3e41e1273b2b2f339b0fa1f841f1"
	},
	{
		"id": "9f7dfa1d8ac7",
		"ts": "2026-08-11T05:03:54.860Z",
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
		"liquidityUsd": 3796240.23,
		"hash": "9f7dfa1d8ac71b1c3b4ff00384347498d0f84289b98c901504f3d96ee4857728"
	},
	{
		"id": "0a1db69ab01c",
		"ts": "2026-08-11T05:03:55.049Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2155036.02,
		"hash": "0a1db69ab01c1cd69b8e741d9f35ebd194299529869e78882607c22cc7f60409"
	},
	{
		"id": "5d37a2e0cef9",
		"ts": "2026-08-11T05:03:55.265Z",
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
		"liquidityUsd": 256161.55,
		"hash": "5d37a2e0cef94605e62b89164d28b8556a8a8a08c18ec500e88fcabff9badc73"
	},
	{
		"id": "7acfcd0d1334",
		"ts": "2026-08-11T05:03:55.463Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1013332.95,
		"hash": "7acfcd0d133418976d7a0f7eac86d423a4581a70505a396b87dce0f653830f2e"
	},
	{
		"id": "742c815811a5",
		"ts": "2026-08-11T05:03:55.656Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9373880.96,
		"hash": "742c815811a5cd95039d4428350e9f0d14d89cce249498c2ae6571fd36231e6c"
	},
	{
		"id": "e4f692d3528d",
		"ts": "2026-08-11T05:03:55.840Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 262033.48,
		"hash": "e4f692d3528d6b10cf32c68d8aec1df5ee4b6d7126fa61d5e599928b4eae80e0"
	},
	{
		"id": "ec6697046e4f",
		"ts": "2026-08-11T05:03:56.035Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4352137.41,
		"hash": "ec6697046e4f67e6ec75991e39c7678c86cce7d7126943431121975d0167582f"
	},
	{
		"id": "a34682ace1bf",
		"ts": "2026-08-11T05:03:56.218Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 69924.26,
		"hash": "a34682ace1bf7f8f98efab7158a31a9db3ba9bdde2a3c57fcfe6db5e56de884c"
	},
	{
		"id": "fa3ce751b94a",
		"ts": "2026-08-11T05:03:56.407Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1941709.95,
		"hash": "fa3ce751b94a4e68570747a99dce642f8aee15afae456f7a1bb57d7a261db22f"
	},
	{
		"id": "9bfd9b741e29",
		"ts": "2026-08-11T05:03:56.590Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4085397.9,
		"hash": "9bfd9b741e293e36e172ee472c0c42fa96aa6afd094a738c3a1947f0f5766e62"
	},
	{
		"id": "b4db16354e47",
		"ts": "2026-08-11T03:39:50.394Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112683534.95,
		"hash": "b4db16354e479fe5df6f4dbf5788f729cacbe74ef5146330cb8bc711374cc927"
	},
	{
		"id": "46dd65c6b628",
		"ts": "2026-08-11T03:39:50.826Z",
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
		"liquidityUsd": 18586125.29,
		"hash": "46dd65c6b6286b0fa46007d1ee19495a1de389e31784c605ded0480bab70e17b"
	},
	{
		"id": "a063a4af7326",
		"ts": "2026-08-11T03:39:51.068Z",
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
		"liquidityUsd": 1027492.82,
		"hash": "a063a4af7326ac9740fd5eb8083a8993a5458a95e0b10ae83b1441a6d9c26262"
	},
	{
		"id": "e78bdc64c59b",
		"ts": "2026-08-11T03:39:51.302Z",
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
		"liquidityUsd": 26820837.41,
		"hash": "e78bdc64c59bd870c14bfe2c88eb118b67207bb5f7a5db383fb58d4648d548a0"
	},
	{
		"id": "5cb020e54fec",
		"ts": "2026-08-11T03:39:51.542Z",
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
		"liquidityUsd": 4209195.58,
		"hash": "5cb020e54fecf98aaa437007a4ed5d332b906c65782c4fc979b031e8f210f7ea"
	},
	{
		"id": "5b8effbdfade",
		"ts": "2026-08-11T03:39:51.774Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 916453.01,
		"hash": "5b8effbdfade6d938d42d2e01c0945031a01ca56ac7b6c5638fd898e042d2e6f"
	},
	{
		"id": "89889cb7c5f8",
		"ts": "2026-08-11T03:39:52.010Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26820837.41,
		"hash": "89889cb7c5f8b80b11cf6fdf0f7552766222bbc8ee94c36401cfb2451a7782e2"
	},
	{
		"id": "42a21e3b4a7a",
		"ts": "2026-08-11T03:39:52.256Z",
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
		"liquidityUsd": 3804085.71,
		"hash": "42a21e3b4a7a5eb4d5da7f56ac494f775e4b3b09b9e859f63e59cfed87e06ce0"
	},
	{
		"id": "48ffb98f69ba",
		"ts": "2026-08-11T03:39:52.488Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2202193.73,
		"hash": "48ffb98f69ba6ba9adf02e7d46ff023bf0e0a1c54562bf0b479177008cc3f992"
	},
	{
		"id": "fafa7af09fc0",
		"ts": "2026-08-11T03:39:52.724Z",
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
		"liquidityUsd": 251006.95,
		"hash": "fafa7af09fc0987f5a79b9dd98df09b7ce3a61355cb0653b14e1c8fde319ecee"
	},
	{
		"id": "1470da4d7dda",
		"ts": "2026-08-11T03:39:52.949Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1022173.41,
		"hash": "1470da4d7ddaa9df03f4613870df6f92704430553c401ffcd6601ef3f9ba32b7"
	},
	{
		"id": "9e61e978fbb6",
		"ts": "2026-08-11T03:39:53.165Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9433086.65,
		"hash": "9e61e978fbb6334b66ac8c3aaab727d06cdc3213bc54f4ceff117c9ebca487a7"
	},
	{
		"id": "6d8c19400188",
		"ts": "2026-08-11T03:39:53.386Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 265424.55,
		"hash": "6d8c1940018802fc6d9a68bd5d45078d9941c3cb31c8ffdde8b62a7de5d38194"
	},
	{
		"id": "4d9ce7247765",
		"ts": "2026-08-11T03:39:53.610Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4377162.76,
		"hash": "4d9ce724776555561b0fd80ff50954b4693cf8e76e0db22eb3c2f5550ce2f1b7"
	},
	{
		"id": "30fab41edb46",
		"ts": "2026-08-11T03:39:53.825Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 69743.74,
		"hash": "30fab41edb46ae6983286c796e73b73542eaf5888a66c7b7339c0c0273f7de5e"
	},
	{
		"id": "2ea80c29e9bb",
		"ts": "2026-08-11T03:39:54.053Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1942285.76,
		"hash": "2ea80c29e9bb04359ab2527a9a4569e428b8b63ef20c756e90d63be965891054"
	},
	{
		"id": "6773b74b9b4e",
		"ts": "2026-08-11T03:39:54.277Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4088835.64,
		"hash": "6773b74b9b4e19b8a47ba79e094c3581e2a4b646b7c9dbd74ddda88862a4ccb7"
	},
	{
		"id": "c44e16193a13",
		"ts": "2026-08-11T01:21:30.761Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112704471.24,
		"hash": "c44e16193a134f56a4bad8e345788a63ab3069851fa88c4e48108c46971ecf56"
	},
	{
		"id": "89d5d99d63d7",
		"ts": "2026-08-11T01:21:31.007Z",
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
		"liquidityUsd": 18478160.78,
		"hash": "89d5d99d63d7318570c7faa68915d09d7c41a36de3c7265f8c04460ea467dc07"
	},
	{
		"id": "669a86cb7438",
		"ts": "2026-08-11T01:21:31.249Z",
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
		"liquidityUsd": 1027492.82,
		"hash": "669a86cb7438c826b8b42a28fcd0744cd148b1d3bda5cf5f2cab7329b6c5f15a"
	},
	{
		"id": "62dcd021550c",
		"ts": "2026-08-11T01:21:31.506Z",
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
		"liquidityUsd": 26770148.32,
		"hash": "62dcd021550c9a6295b8b9ab967abc972903eed0c4c44861aed5cbd6b53473fb"
	},
	{
		"id": "ad6bfa73b2f4",
		"ts": "2026-08-11T01:21:31.758Z",
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
		"liquidityUsd": 4195774.07,
		"hash": "ad6bfa73b2f4d278473de2b9f59b042ee4093a4d8583d845be87d0e97d627992"
	},
	{
		"id": "0f28c154bcdf",
		"ts": "2026-08-11T01:21:32.042Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 919443.41,
		"hash": "0f28c154bcdf1d3f91d617776502b068644b2713b16bf0b6326e1560c7ad3f1b"
	},
	{
		"id": "6b035b505a3d",
		"ts": "2026-08-11T01:21:32.296Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26770148.32,
		"hash": "6b035b505a3d176f7a3cfa963ef17c1b6977a1964860a44f962a18972756b1e8"
	},
	{
		"id": "f81667ac2b9d",
		"ts": "2026-08-11T01:21:32.559Z",
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
		"liquidityUsd": 3743736.29,
		"hash": "f81667ac2b9d34f519b23f8f22ed45ece64bd9ddffb0221d350892ab7ff728d3"
	},
	{
		"id": "95efeb56b6d2",
		"ts": "2026-08-11T01:21:32.823Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2207819.09,
		"hash": "95efeb56b6d2392d8ef496cfe6cc9bddf1ed5d450d1fb643011ab97d85c5b36c"
	},
	{
		"id": "f46925cc50f3",
		"ts": "2026-08-11T01:21:33.071Z",
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
		"liquidityUsd": 254952.3,
		"hash": "f46925cc50f309da75baafc62022c3b04237c7c56100bc6325cf008870b70782"
	},
	{
		"id": "1435b3eb2688",
		"ts": "2026-08-11T01:21:33.292Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1017170.99,
		"hash": "1435b3eb2688f1168fd6536dc74bfe4829847f2206506db6d7fb2715df680207"
	},
	{
		"id": "f67393a60ba0",
		"ts": "2026-08-11T01:21:33.511Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9382213.47,
		"hash": "f67393a60ba0eb25310e9e928dc78009091507b9317657d5c5e739d9693eab9e"
	},
	{
		"id": "9eae638dc9e4",
		"ts": "2026-08-11T01:21:33.730Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 264340.02,
		"hash": "9eae638dc9e488de5aa5368e6000676a584173090e2922588d10dcf0cf019700"
	},
	{
		"id": "fd390b782789",
		"ts": "2026-08-11T01:21:33.954Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 68231.68,
		"hash": "fd390b782789a7d987a64dd4ec0fe382ce348b35bbb1ae5ca6fc7929a46a3ffd"
	},
	{
		"id": "2cdc1b8069bf",
		"ts": "2026-08-11T01:21:34.174Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 646453.09,
		"hash": "2cdc1b8069bf1e6f357decc3af3b48cbfc98a28bd47a7c51ff83b0648bcf3a48"
	},
	{
		"id": "6396fac0e336",
		"ts": "2026-08-11T01:21:34.394Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4306788.34,
		"hash": "6396fac0e336a7c57b45a05f1572a67f18889bb23352b1f8a690ea920b672d59"
	},
	{
		"id": "261b3e294039",
		"ts": "2026-08-11T01:21:34.616Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1938575.23,
		"hash": "261b3e294039bbe92eacfc24e6a98ee902dd96018f11b790a2f87c87d394b430"
	},
	{
		"id": "3a6d9d0d0a50",
		"ts": "2026-08-10T23:31:01.492Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112515099.49,
		"hash": "3a6d9d0d0a503e34b0a447631659724db2d7b4cc0849b05df7e93415695e9b43"
	},
	{
		"id": "ad22c3762537",
		"ts": "2026-08-10T23:31:01.842Z",
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
		"liquidityUsd": 17224550.46,
		"hash": "ad22c3762537c4b994444c92a9da7d9ba4a495ed319d0e1df8c8b3a6a5982b93"
	},
	{
		"id": "4552a817a823",
		"ts": "2026-08-10T23:31:02.074Z",
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
		"liquidityUsd": 1027492.82,
		"hash": "4552a817a8232b86e80f23815c8f4c8a8336112c3cad2c3756a80ef2bb812027"
	},
	{
		"id": "6d1538b19e68",
		"ts": "2026-08-10T23:31:02.326Z",
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
		"liquidityUsd": 26705083.48,
		"hash": "6d1538b19e68abb1a48797c547b3decc5ac8ef72120342f4a55629393a5a625f"
	},
	{
		"id": "95c58a1ab956",
		"ts": "2026-08-10T23:31:02.606Z",
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
		"liquidityUsd": 4287668.91,
		"hash": "95c58a1ab95646b08dc09592dffebf81ccafd6091217dc9a0179df7f4e9c16ee"
	},
	{
		"id": "239250e59aa1",
		"ts": "2026-08-10T23:31:02.870Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 913530.11,
		"hash": "239250e59aa1734fdf47828bd5bf770eec290b2e8260de06223230a7cf57c292"
	},
	{
		"id": "6242e09ef988",
		"ts": "2026-08-10T23:31:03.169Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26705083.48,
		"hash": "6242e09ef9883e456efa7326349cb769487e2bcfe4671603c6e331fa68f08c48"
	},
	{
		"id": "25ba4f293acb",
		"ts": "2026-08-10T23:31:03.447Z",
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
		"liquidityUsd": 3328308.86,
		"hash": "25ba4f293acb0840a45a12bc83bb5d288e50651803d1c1d4edbea79b59525dc2"
	},
	{
		"id": "26acfcb7ea2f",
		"ts": "2026-08-10T23:31:03.652Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2130971.58,
		"hash": "26acfcb7ea2ffd297e592531ff9318daa36c407d6a41395099c33934a80ec8b9"
	},
	{
		"id": "7dfdfd1f4a91",
		"ts": "2026-08-10T23:31:03.857Z",
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
		"liquidityUsd": 264757.61,
		"hash": "7dfdfd1f4a919dc3c7f74e5102108a055ca92ecb6110e6922870e7844c71b94a"
	},
	{
		"id": "60da4160e4e9",
		"ts": "2026-08-10T23:31:04.066Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1007352.53,
		"hash": "60da4160e4e954c14648292662da45572e5cd2f4a0cf4c15b6c9f93212824fb5"
	},
	{
		"id": "6a93aa6d55cc",
		"ts": "2026-08-10T23:31:04.281Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 66170.2,
		"hash": "6a93aa6d55cc257f14e0f5a54de0aec755e93270ff0ac3973d491c8fdac2b1d5"
	},
	{
		"id": "cab803a85b9f",
		"ts": "2026-08-10T23:31:04.494Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9381159.32,
		"hash": "cab803a85b9f850b31c72c04d480bb5ce690a3ba3203c33c7d48f87b9bd0d7da"
	},
	{
		"id": "5d7bc33dd183",
		"ts": "2026-08-10T23:31:04.683Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 323514.74,
		"hash": "5d7bc33dd1830226639345055948fa0f7a21938744553dd0e186c348007d5f06"
	},
	{
		"id": "952127a659fd",
		"ts": "2026-08-10T23:31:04.900Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 648131.61,
		"hash": "952127a659fdaad5ca36e5a6226cb280f4995e9af6948ca40649224fbbdd51fc"
	},
	{
		"id": "7b358171d5ea",
		"ts": "2026-08-10T23:31:05.103Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4323359.11,
		"hash": "7b358171d5ea3b45a04a765e18854c4840dee0fb5e8ea203fcbabc0f52d71dc5"
	},
	{
		"id": "e7f84c67e86d",
		"ts": "2026-08-10T23:31:05.298Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1900494.5,
		"hash": "e7f84c67e86d31697d06a5a5bd6d9cf2d8ac0aec57f080312ff5ae307d92e57f"
	},
	{
		"id": "965d496ff617",
		"ts": "2026-08-10T23:31:05.495Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4113400.21,
		"hash": "965d496ff617968a70497e99502cc80f795a70ea9f4d676dbaf23d141e751fa8"
	},
	{
		"id": "b6a2080919ed",
		"ts": "2026-08-10T22:33:16.114Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112849790.44,
		"hash": "b6a2080919eda43145611c4699dbfc25ff6404858d54589cd8dc056a37f732c6"
	},
	{
		"id": "9d033e7e90a4",
		"ts": "2026-08-10T22:33:16.457Z",
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
		"liquidityUsd": 17889600.59,
		"hash": "9d033e7e90a453d73ea255f4d24ac6291217af16ed850857fc201a38dffc8b2e"
	},
	{
		"id": "2eb54d5c2485",
		"ts": "2026-08-10T22:33:16.802Z",
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
		"liquidityUsd": 1027492.82,
		"hash": "2eb54d5c24857175892acd3bd87b80bec50cfc74e5ae5f1cb6d2c491c5cb04df"
	},
	{
		"id": "c703daa0e025",
		"ts": "2026-08-10T22:33:16.990Z",
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
		"liquidityUsd": 26705209.12,
		"hash": "c703daa0e025b513046349f32840537d66a359eaf0c7bf9dbbf350d791030d84"
	},
	{
		"id": "9331c15459af",
		"ts": "2026-08-10T22:33:17.178Z",
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
		"liquidityUsd": 4314711.82,
		"hash": "9331c15459af4f0f5041c1b6f733b8386748a8e3016669af922b5768ef70efda"
	},
	{
		"id": "b7cb97fe70f4",
		"ts": "2026-08-10T22:33:17.381Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 920915.78,
		"hash": "b7cb97fe70f4de0746cc2813bb800d7bb245b66b10cf1f253d2d4741c98e2cba"
	},
	{
		"id": "09e9c77724b5",
		"ts": "2026-08-10T22:33:17.580Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26705209.12,
		"hash": "09e9c77724b5fc5d36f9d9de4a3e1dd037eca2b4d3916f09f2af0167709ccd7c"
	},
	{
		"id": "2ffcf214cb29",
		"ts": "2026-08-10T22:33:17.778Z",
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
		"liquidityUsd": 3791902.6,
		"hash": "2ffcf214cb294e24039306b0a1b66a3056486313c15a1ac0b81f6f54d0a3e52a"
	},
	{
		"id": "e5f033e147f3",
		"ts": "2026-08-10T22:33:17.981Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2132087.1,
		"hash": "e5f033e147f3ca4c114cc5f0866259f11bf1332fcf36878aa6661afa10f22a24"
	},
	{
		"id": "ce4aaa8e9b97",
		"ts": "2026-08-10T22:33:18.166Z",
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
		"liquidityUsd": 263099.24,
		"hash": "ce4aaa8e9b97431ebb551bb9de902996f7828ec1c38f3a2760476a601fed51d0"
	},
	{
		"id": "dad342caba16",
		"ts": "2026-08-10T22:33:18.339Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1004502.76,
		"hash": "dad342caba16f22577a6e6669f6fb12c89af4c17bb4a50e77ce8b1fabbfe877a"
	},
	{
		"id": "86e49bc249ac",
		"ts": "2026-08-10T22:33:18.525Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 66605.58,
		"hash": "86e49bc249ac977e159050b7a1eec9ab0a515faab002bc2494d7cd6b1bde3d4b"
	},
	{
		"id": "2aaa4eb3b916",
		"ts": "2026-08-10T22:33:18.708Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9413856.88,
		"hash": "2aaa4eb3b916940a864f61d0f52d44032bc6acf2c58a2ae616f7034b16f807be"
	},
	{
		"id": "beed8abfa2a1",
		"ts": "2026-08-10T22:33:18.953Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 327172.75,
		"hash": "beed8abfa2a11a03b80e465e4b75ec966beaa2c332592b8108375889632c6182"
	},
	{
		"id": "c1c3a576a65d",
		"ts": "2026-08-10T22:33:19.128Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 649162.37,
		"hash": "c1c3a576a65d1287c22668d045527a651a11e188f2990119845d3ff352999736"
	},
	{
		"id": "b3d14499a0c1",
		"ts": "2026-08-10T22:33:19.321Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4337552.67,
		"hash": "b3d14499a0c18854ca4a1a1f2d033e4f40778f0cfb339eefadb5bf97efeff9d7"
	},
	{
		"id": "59ca9c9bf055",
		"ts": "2026-08-10T22:33:19.544Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1950998.83,
		"hash": "59ca9c9bf055437d0fe2696811858e59c6936cc1c82f6e6fe15216acc931fda9"
	},
	{
		"id": "85b7f706dfaa",
		"ts": "2026-08-10T21:37:33.317Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112842447.56,
		"hash": "85b7f706dfaae98c82c03f72d2691e193b9ed631b767de874cff39a249d12459"
	},
	{
		"id": "ba7972c10538",
		"ts": "2026-08-10T21:37:33.884Z",
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
		"liquidityUsd": 18251514.03,
		"hash": "ba7972c10538a53f0ddb8f6be86abe193dbe2124eb7fd0bf4ca33f083e828beb"
	},
	{
		"id": "0c3cb7ba2788",
		"ts": "2026-08-10T21:37:34.257Z",
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
		"liquidityUsd": 1027492.82,
		"hash": "0c3cb7ba2788c195cbb944032782cff610eb69ed1ac86e110ff85e034988284a"
	},
	{
		"id": "8e037f778020",
		"ts": "2026-08-10T21:37:34.629Z",
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
		"liquidityUsd": 26715565.62,
		"hash": "8e037f778020c18c32bcade6b1d1cf98230162eff5f54612921cd3ab55c69ddc"
	},
	{
		"id": "563dbd1a4e11",
		"ts": "2026-08-10T21:37:34.997Z",
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
		"liquidityUsd": 4323805.69,
		"hash": "563dbd1a4e119bc8845e0b2381d2fbe060683576f479b63cae71ef853f50fb9e"
	},
	{
		"id": "53a45c26d1ac",
		"ts": "2026-08-10T21:37:35.404Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 922885.79,
		"hash": "53a45c26d1acd7bd69002547a339267466756bde126e2ce1e0d82afc493245dc"
	},
	{
		"id": "9e82ef03728a",
		"ts": "2026-08-10T21:37:35.771Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26715565.62,
		"hash": "9e82ef03728a8fb5e6750c5ffe797ced9a9ee11ef007d8b657a4cf108a103d87"
	},
	{
		"id": "780e24cbd653",
		"ts": "2026-08-10T21:37:36.142Z",
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
		"liquidityUsd": 3747534.83,
		"hash": "780e24cbd6533bcdb3b076d9a2d236f6a35ddc2564e617cccd95b50640fe467a"
	},
	{
		"id": "5fe2ece4d745",
		"ts": "2026-08-10T21:37:36.512Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2140511.77,
		"hash": "5fe2ece4d745c70a8abdc4d47470e104fef3295f2a6578afa424b3f8a604248d"
	},
	{
		"id": "57b47eb42194",
		"ts": "2026-08-10T21:37:36.905Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 65947.46,
		"hash": "57b47eb421946ca40c47affd1f70c53cb5f8f76b1dda1c112fe12e876790379f"
	},
	{
		"id": "ebfe87f88a89",
		"ts": "2026-08-10T21:37:37.303Z",
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
		"liquidityUsd": 262394.18,
		"hash": "ebfe87f88a8907420d698bc8946d757e06b28a03b0be3c40966afc2f7cd516df"
	},
	{
		"id": "68f884df01ed",
		"ts": "2026-08-10T21:37:37.651Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1002372.42,
		"hash": "68f884df01eda07fa0a6db3cc085ef768028aa614b124e1b4e2e655817a31c77"
	},
	{
		"id": "622df143be25",
		"ts": "2026-08-10T21:37:38.072Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9405279.9,
		"hash": "622df143be2539145abace455538fcd65f548ef55495e3887d63eb7d828f3762"
	},
	{
		"id": "3396bc44a6da",
		"ts": "2026-08-10T21:37:38.828Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 259980.85,
		"hash": "3396bc44a6da19e11e1e626b1f57177e1dfa5d099846ff6a49205866c10dc7b4"
	},
	{
		"id": "3595632f7c5d",
		"ts": "2026-08-10T21:37:39.179Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4338828.05,
		"hash": "3595632f7c5df63b0059830592a86ec2af4de54d7ea91039d246b7ea7cf09257"
	},
	{
		"id": "14d302cee845",
		"ts": "2026-08-10T21:37:39.531Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1953419.18,
		"hash": "14d302cee8459d5c7ae27cc07910664603bf866bb94a3a50515187f5e233961e"
	},
	{
		"id": "afef42351a26",
		"ts": "2026-08-10T21:37:39.890Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4120785.09,
		"hash": "afef42351a26c9e0b4487d2925ffe705f9d1c054f4e9199f7739e1c4389c04cf"
	},
	{
		"id": "70752f551388",
		"ts": "2026-08-10T20:37:23.087Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112813462.77,
		"hash": "70752f55138827046f941d026c78351e48b918c296e3450d95926afbfa4889fd"
	},
	{
		"id": "10e0a8285ba4",
		"ts": "2026-08-10T20:37:23.744Z",
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
		"liquidityUsd": 18292737.31,
		"hash": "10e0a8285ba4103c082e5e2d29755eec45c745bc652efa50187274c3447739ec"
	},
	{
		"id": "32e1c7addccf",
		"ts": "2026-08-10T20:37:24.232Z",
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
		"liquidityUsd": 1027492.82,
		"hash": "32e1c7addccf7ad7febe944f3a0497c9f09be62b5cb3056b8757a1cea999a79f"
	},
	{
		"id": "0cae8080834e",
		"ts": "2026-08-10T20:37:24.463Z",
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
		"liquidityUsd": 26774414.41,
		"hash": "0cae8080834e1dd316658578d89f5fd0b2951108273cfb41a6c9c4c1b1a49b03"
	},
	{
		"id": "70e814af4f72",
		"ts": "2026-08-10T20:37:24.894Z",
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
		"liquidityUsd": 4323139.92,
		"hash": "70e814af4f72f9fe320ca042846eb8472a67cbc3c0088781643494250279e526"
	},
	{
		"id": "ced91a612a47",
		"ts": "2026-08-10T20:37:25.153Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 922974.45,
		"hash": "ced91a612a4736322c2a2e4e945c62e3352bdd9d20b56190b6fafbb611c01215"
	},
	{
		"id": "e038702a6b2f",
		"ts": "2026-08-10T20:37:25.439Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26774400.89,
		"hash": "e038702a6b2f89778e474caeaa29e57245a30e8081527f990802c587c0ab5310"
	},
	{
		"id": "46862ff995a9",
		"ts": "2026-08-10T20:37:25.674Z",
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
		"liquidityUsd": 3553564.32,
		"hash": "46862ff995a9ed44e8260db70aa6891b53821299e2fc98116b98b1c108cf22a4"
	},
	{
		"id": "5c6f672f2537",
		"ts": "2026-08-10T20:37:25.938Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 66118.31,
		"hash": "5c6f672f25377c21e3762ab8ee93c9cc301aae0822a39395ea350c190700e6bd"
	},
	{
		"id": "08bbc24eeb6f",
		"ts": "2026-08-10T20:37:26.169Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2131474.09,
		"hash": "08bbc24eeb6fa13205f9576ae4a22783d4c5adb92891b726b6a0e1778364739d"
	},
	{
		"id": "7df64875eb27",
		"ts": "2026-08-10T20:37:26.386Z",
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
		"liquidityUsd": 260823.11,
		"hash": "7df64875eb27e8ccb6623917a3ca34b042858870cfed590b862c1e765c6733dc"
	},
	{
		"id": "cb7edd370bd3",
		"ts": "2026-08-10T20:37:26.602Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1002862.87,
		"hash": "cb7edd370bd3dbbc2c0ec33dc2073f34e0747fdb2a3a4b650aa0d8439db8377a"
	},
	{
		"id": "993db33dcd05",
		"ts": "2026-08-10T20:37:26.817Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9417984.74,
		"hash": "993db33dcd058c601f5422a11221651aad24f04fcbea0aaa23167d5f685b613f"
	},
	{
		"id": "a6468d264387",
		"ts": "2026-08-10T20:37:27.034Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 255675.02,
		"hash": "a6468d264387d242ebf639253b68e06b72048213ffff0ecc64b16dca1eae5a10"
	},
	{
		"id": "acd612a54c07",
		"ts": "2026-08-10T20:37:27.254Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4329365.17,
		"hash": "acd612a54c077cb8cce9cd14879b7c6ac553e4f2f5cd32e06e557dd0ac602cdc"
	},
	{
		"id": "cab2aba3c72f",
		"ts": "2026-08-10T20:37:27.471Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4125560.79,
		"hash": "cab2aba3c72fb8ecc8bd588345b8d77bfcf1ce9f43c7515d91f036f38c35fd17"
	},
	{
		"id": "50a2b526321d",
		"ts": "2026-08-10T20:37:27.686Z",
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
		"liquidityUsd": 1274141.55,
		"hash": "50a2b526321d7f0a9605cac515a4262f5c14d9611349bde7f9f7cf62aabdc534"
	},
	{
		"id": "6ec2c7913d8e",
		"ts": "2026-08-10T20:37:27.902Z",
		"symbol": "EURC",
		"token": "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2287971.89,
		"hash": "6ec2c7913d8e79f0821de3e3147c0dc60f9d163a4e39b5dfafd7c9a2f7c0655e"
	},
	{
		"id": "acf242ee2fc4",
		"ts": "2026-08-10T19:52:54.221Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112817218.34,
		"hash": "acf242ee2fc43dfc2a5f43b32051808fc407658aeae2671b151fa4e403f27fea"
	},
	{
		"id": "02d7f2960930",
		"ts": "2026-08-10T19:52:54.660Z",
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
		"liquidityUsd": 18187757.29,
		"hash": "02d7f2960930d5dd3448342b4cf7c6d27d9a273429aef920bc420ae444812dbd"
	},
	{
		"id": "2c575cf915f9",
		"ts": "2026-08-10T19:52:54.898Z",
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
		"liquidityUsd": 1027492.82,
		"hash": "2c575cf915f94b0149131f6e9ed28877b5d83e396d70e7d4032f8f1ce15c247f"
	},
	{
		"id": "e21a95be924a",
		"ts": "2026-08-10T19:52:55.133Z",
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
		"liquidityUsd": 26774631.84,
		"hash": "e21a95be924ad87792961b502b722a6a50125dd21efefa4ec17fddb01c1a96b1"
	},
	{
		"id": "49c0e9bf7860",
		"ts": "2026-08-10T19:52:55.371Z",
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
		"liquidityUsd": 4311145.96,
		"hash": "49c0e9bf786038cb9957ed00a9604c0201f89098d6cccde646cadd06c6a54ca0"
	},
	{
		"id": "c6d39f6ff421",
		"ts": "2026-08-10T19:52:55.608Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 922974.45,
		"hash": "c6d39f6ff4219f973bd5453cae3ee03b3fcdb8834cb1ef58ab2074b275bff505"
	},
	{
		"id": "13040a0c06d0",
		"ts": "2026-08-10T19:52:55.856Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26774631.84,
		"hash": "13040a0c06d0c84e6ff3754a13b36e44e6163732a26b67bc52ea837ded547dc6"
	},
	{
		"id": "86c261f9899d",
		"ts": "2026-08-10T19:52:56.091Z",
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
		"liquidityUsd": 4061360.13,
		"hash": "86c261f9899d9b67679e203f1888c2ac6a3adaaa047f41d978ae80a64d0e2d53"
	},
	{
		"id": "77c5767aab17",
		"ts": "2026-08-10T19:52:56.335Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 65444.38,
		"hash": "77c5767aab17677585c0fc520d81f2927599697fbce1b59ba59e2901c39cf727"
	},
	{
		"id": "b294fb457dbc",
		"ts": "2026-08-10T19:52:56.564Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2137566.5,
		"hash": "b294fb457dbc5002b2b08fb4d3547201b6caf228d06451fa7972d8f4e21e3ce0"
	},
	{
		"id": "6021b15be732",
		"ts": "2026-08-10T19:52:56.852Z",
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
		"liquidityUsd": 268053.11,
		"hash": "6021b15be732a011c7fdf08748b0c0bbdf86a225fdceefff0826d95f27ce6754"
	},
	{
		"id": "b897434ee9a1",
		"ts": "2026-08-10T19:52:57.071Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1003048.36,
		"hash": "b897434ee9a1f484208b024c377020222a1d141602b708828029f262f743964d"
	},
	{
		"id": "75f12b26ec33",
		"ts": "2026-08-10T19:52:57.288Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 266450.35,
		"hash": "75f12b26ec33d6c9371c4b8de21c02672f8a1fbaaea7f90f43fe9eda9ebdee15"
	}
]
