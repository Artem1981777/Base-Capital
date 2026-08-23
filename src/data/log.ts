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
	"updatedAt": "2026-08-23T21:17:01.427Z",
	"tokensScored": 14098,
	"verdictsIssued": 14098,
	"safe": 12136,
	"risky": 988,
	"likelyRug": 974,
	"ticks": 819
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "320d56511e87",
		"ts": "2026-08-23T21:16:56.296Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111684851.8,
		"hash": "320d56511e878d6dd8b15399779311eb582da01bcf6024dfd156a86dd1ea6b94"
	},
	{
		"id": "2dd2d903619d",
		"ts": "2026-08-23T21:16:56.579Z",
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
		"liquidityUsd": 16972187.61,
		"hash": "2dd2d903619dd9bca96e5cf169ad7e3cceb948e115d04aad9c433e486b9d2254"
	},
	{
		"id": "2ba664a4f84f",
		"ts": "2026-08-23T21:16:56.945Z",
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
		"liquidityUsd": 902046.38,
		"hash": "2ba664a4f84fd6eb54c51e59f417d4879749fedcc6a991b5803a90720f88e05a"
	},
	{
		"id": "32d64934df38",
		"ts": "2026-08-23T21:16:57.223Z",
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
		"liquidityUsd": 28846225.98,
		"hash": "32d64934df388b9282f9bdc0b5870e35acdb700fd7154a30d38a9476b30fb6aa"
	},
	{
		"id": "5d9a10a4a521",
		"ts": "2026-08-23T21:16:57.689Z",
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
		"liquidityUsd": 3506265.48,
		"hash": "5d9a10a4a5210415861505a0c5c0e1a3fa07e630d6fe172b340b1f169c5b13bc"
	},
	{
		"id": "20276904f4fc",
		"ts": "2026-08-23T21:16:57.940Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1240668.94,
		"hash": "20276904f4fcdf45d3fd9222d99d23638e752e0afb5bea76e0d507057796b248"
	},
	{
		"id": "f12a665446f5",
		"ts": "2026-08-23T21:16:58.196Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 385950.16,
		"hash": "f12a665446f5bca4ab04cfa6a5e86d686f77b14bdc6bf559e3b310ba698d4efb"
	},
	{
		"id": "2e5a363b3c04",
		"ts": "2026-08-23T21:16:58.441Z",
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
		"liquidityUsd": 1841897.96,
		"hash": "2e5a363b3c049ab416e8b8ff74f97dbc3c43e32d03b9b5737b4cf20316d9bb18"
	},
	{
		"id": "b124b2ef7625",
		"ts": "2026-08-23T21:16:58.669Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1300709.94,
		"hash": "b124b2ef76253103e67e3611a8977823dad5cb377ff602cd3601c3f799f8c0ad"
	},
	{
		"id": "4eca67be6cfc",
		"ts": "2026-08-23T21:16:58.913Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 627173.15,
		"hash": "4eca67be6cfcbb75fd11eabe0aed29e9c22430842d238f8f4e46c45cee71e75a"
	},
	{
		"id": "fb85d43d03c9",
		"ts": "2026-08-23T21:16:59.134Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 662256.94,
		"hash": "fb85d43d03c9062ff68bc57ab689e36279dcfc276ba9bfbac11be3412cefcd89"
	},
	{
		"id": "ce259814b2b3",
		"ts": "2026-08-23T21:16:59.356Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4103268.07,
		"hash": "ce259814b2b332e0f0a72af233f2ceffde831e5f7b37150027d7d0a152182cf7"
	},
	{
		"id": "8349521e391e",
		"ts": "2026-08-23T21:16:59.578Z",
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
		"liquidityUsd": 886613.87,
		"hash": "8349521e391ecdd3550507a3eb8a9da18ddaf2d4e5c0c574b47862aa3735fe7b"
	},
	{
		"id": "6b2974eb4e3a",
		"ts": "2026-08-23T21:16:59.802Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11175242.96,
		"hash": "6b2974eb4e3afb6f600a59a516ea331d288ca41e98f617bd10e06337fefbc826"
	},
	{
		"id": "2276027a1318",
		"ts": "2026-08-23T21:17:00.017Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3441871.01,
		"hash": "2276027a1318f77327e91c34034fd9e9bab66cf8195941989d81fa877f02f962"
	},
	{
		"id": "bb39822610e6",
		"ts": "2026-08-23T21:17:00.250Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 787562.34,
		"hash": "bb39822610e63fc8c4f031ce52ad591fd22a38c817d306971c72110deff1bf45"
	},
	{
		"id": "7ab565b030df",
		"ts": "2026-08-23T21:17:00.490Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 275113.82,
		"hash": "7ab565b030df0b5553e2cdbc6a1773af9a796f845ad4595b6650e11489d3a1d8"
	},
	{
		"id": "029e05ec91af",
		"ts": "2026-08-23T21:17:00.946Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 105193.4,
		"hash": "029e05ec91afb451d12138cd985fc7a8fa7c4e41f9be3d33332f94a692e6158e"
	},
	{
		"id": "e232dec42fc1",
		"ts": "2026-08-23T21:17:01.189Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 671956.67,
		"hash": "e232dec42fc1b61a7be400eaecd8ca213a75efc207aea84a99e623a390032e86"
	},
	{
		"id": "ffcc12ed90fc",
		"ts": "2026-08-23T21:17:01.427Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 96906.9,
		"hash": "ffcc12ed90fc5db4fd9e91b05c6496b1ec67a24f594fa16d12ff8c87a05d66fb"
	},
	{
		"id": "165a2a68c312",
		"ts": "2026-08-23T20:17:39.211Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111300869.53,
		"hash": "165a2a68c3124a96566a4c3854b73f9d1aef798a211d0d998a962388528fef0c"
	},
	{
		"id": "65d8552f6b39",
		"ts": "2026-08-23T20:17:39.646Z",
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
		"liquidityUsd": 16988986.78,
		"hash": "65d8552f6b39afa32be20a91ce6167125e6119ec8930fb9e5b939ffa7a48d54c"
	},
	{
		"id": "76875690767a",
		"ts": "2026-08-23T20:17:39.896Z",
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
		"liquidityUsd": 893420.68,
		"hash": "76875690767a8668083a2ca121d1f6abf06368a2faef7b3a10f9b221b3694c02"
	},
	{
		"id": "59eac56cf4ae",
		"ts": "2026-08-23T20:17:40.137Z",
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
		"liquidityUsd": 28751210.89,
		"hash": "59eac56cf4ae46e62e7e75d09ce2355f27cb114c9e3cd0936a040e23d484a1b4"
	},
	{
		"id": "5252a01dc22a",
		"ts": "2026-08-23T20:17:40.391Z",
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
		"liquidityUsd": 3443508.29,
		"hash": "5252a01dc22aa8859e14c2f4d39387ea650f9bccd83c6b5eb88d941a60529500"
	},
	{
		"id": "e166d9120a79",
		"ts": "2026-08-23T20:17:40.647Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1214837.3,
		"hash": "e166d9120a79236837a5cc768172f834cb2483789fc62859f90a326b0c6dbd3a"
	},
	{
		"id": "7872604e67ea",
		"ts": "2026-08-23T20:17:40.932Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 383641.09,
		"hash": "7872604e67ea4cc95caee95c3da94dea233f2804f56ce06ede3fac0aaf279b43"
	},
	{
		"id": "19785d179052",
		"ts": "2026-08-23T20:17:41.263Z",
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
		"liquidityUsd": 1822608.83,
		"hash": "19785d179052e7a002b9adf85b39e5b8bb22f95d8b9fab6cf2c59d1d4b040f52"
	},
	{
		"id": "b3f4c122126b",
		"ts": "2026-08-23T20:17:41.508Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1289719.96,
		"hash": "b3f4c122126b92151968750281d942d6b4bdc7a4a893442b3993001c08b92c4a"
	},
	{
		"id": "10ff6db8e477",
		"ts": "2026-08-23T20:17:41.833Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 642430.51,
		"hash": "10ff6db8e4776a188ddd660f75b7a0121bfa080d6c05031fc417bf7bc74f83fd"
	},
	{
		"id": "0e8b794682c6",
		"ts": "2026-08-23T20:17:42.059Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 660931.63,
		"hash": "0e8b794682c6a4a641926876f20b651038426a8e14d2fb636fe9707c5741a584"
	},
	{
		"id": "aaf3e969734c",
		"ts": "2026-08-23T20:17:42.283Z",
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
		"liquidityUsd": 866775.09,
		"hash": "aaf3e969734c3e13c679f1ceb959a29a163047edf5a290c9ffa6dad673941d5b"
	},
	{
		"id": "3bccb7e58a3a",
		"ts": "2026-08-23T20:17:42.513Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4067849.15,
		"hash": "3bccb7e58a3af87fce150039420125dae080fd19b18d02564b5f773b2f646c7f"
	},
	{
		"id": "cc1ea04222be",
		"ts": "2026-08-23T20:17:42.737Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11029325.98,
		"hash": "cc1ea04222be9370336aa959a276ab52cb0e20888bb8f80230c8519c28a68951"
	},
	{
		"id": "e4485d908bf1",
		"ts": "2026-08-23T20:17:42.962Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 767030.28,
		"hash": "e4485d908bf14396bda0b71d36f5db0c322c52fe52779d9a3d356c3b03bc3689"
	},
	{
		"id": "c16f14587630",
		"ts": "2026-08-23T20:17:43.185Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3363201.41,
		"hash": "c16f145876302f3c8860e374daa0a21c1222463c63e3e1c8e071c74ba24d80a2"
	},
	{
		"id": "75f8b34f02b1",
		"ts": "2026-08-23T20:17:43.624Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 109214.76,
		"hash": "75f8b34f02b1369212108256863622513d21c0d5a988c076cd094d9999be6aa4"
	},
	{
		"id": "3e5bec1b2f06",
		"ts": "2026-08-23T20:17:43.849Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 273838.72,
		"hash": "3e5bec1b2f0614811455944b6e48817c4bccd735712d5867b14e17fcac48658f"
	},
	{
		"id": "078c052da767",
		"ts": "2026-08-23T20:17:44.085Z",
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
		"liquidityUsd": 664218.36,
		"hash": "078c052da767c3c02bf0cf203d07583c837da7f372ed4b197b779e17734d6f57"
	},
	{
		"id": "67384a59b3c1",
		"ts": "2026-08-23T20:17:44.309Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 612652.85,
		"hash": "67384a59b3c1c8692666a31f1b80a3c41e8f5e5eb83d1d6ff896b7dd7bd9b1c0"
	},
	{
		"id": "387b8b80178c",
		"ts": "2026-08-23T19:19:31.365Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111240567.67,
		"hash": "387b8b80178c031bcb9cddf1e68ea9c594cde8c03ab5232f4d88d9095975dca8"
	},
	{
		"id": "19045a51ad52",
		"ts": "2026-08-23T19:19:31.614Z",
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
		"liquidityUsd": 16890237.31,
		"hash": "19045a51ad52cff1521d204176c6ef055ea2f4279d957d80eecc20159a7b6743"
	},
	{
		"id": "cc23cc248a5c",
		"ts": "2026-08-23T19:19:31.879Z",
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
		"liquidityUsd": 894748.66,
		"hash": "cc23cc248a5cd38f0930cf1a440a4eeffca9f94f9b051e1fdfa2abd3fd3f11fb"
	},
	{
		"id": "7da141b60ccb",
		"ts": "2026-08-23T19:19:32.217Z",
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
		"liquidityUsd": 28784447.61,
		"hash": "7da141b60ccb5c7be0339f5b801e4a9c1d759ba2c4c0c903619dcd80f9b8d909"
	},
	{
		"id": "9f25a9b47c37",
		"ts": "2026-08-23T19:19:32.455Z",
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
		"liquidityUsd": 3450525.59,
		"hash": "9f25a9b47c37e8cc1a070be976dc8b6bedbac1d238390fdb353744df1cd8f029"
	},
	{
		"id": "73c261bfdcdb",
		"ts": "2026-08-23T19:19:32.715Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1206098.19,
		"hash": "73c261bfdcdb8727f431672ee9b752f1712d3079b3ba99a0576f3c88566ff3e3"
	},
	{
		"id": "2004f9bbf115",
		"ts": "2026-08-23T19:19:32.957Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152786.29,
		"hash": "2004f9bbf1151de3eedf18250c62a41ab237dcf59130bf4d5f9a3832f5efa05d"
	},
	{
		"id": "e442d3c24590",
		"ts": "2026-08-23T19:19:33.267Z",
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
		"liquidityUsd": 1824782.08,
		"hash": "e442d3c24590a38b9315e144ab7baef458a50f3fb25f01a4a295082e95a56f85"
	},
	{
		"id": "d8f1154db631",
		"ts": "2026-08-23T19:19:33.526Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1316904.19,
		"hash": "d8f1154db631914d826044a13c01674b7b53a664e80fbb3eeda7bf358007cd22"
	},
	{
		"id": "f5af409cbc2d",
		"ts": "2026-08-23T19:19:33.775Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 656821.29,
		"hash": "f5af409cbc2daf7406964f31cff53aee7764648fb619e935f5d728343ee17f3a"
	},
	{
		"id": "c02d1440efcb",
		"ts": "2026-08-23T19:19:34.011Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 642388.45,
		"hash": "c02d1440efcb1fc754d88e6cf1840caf32c900cb501921e2e66a3911192fdb39"
	},
	{
		"id": "83c45401cd7b",
		"ts": "2026-08-23T19:19:34.230Z",
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
		"liquidityUsd": 853092.01,
		"hash": "83c45401cd7b8cb4f81e94c1535afd9a1bd43f6b12421a7978b6a489e606ef4d"
	},
	{
		"id": "b7ec273bc79f",
		"ts": "2026-08-23T19:19:34.469Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4095068.36,
		"hash": "b7ec273bc79f31fc9ee8990713a7caa57d7bd6942beb5c3a60f547ae7c657f9f"
	},
	{
		"id": "fdfe692c854c",
		"ts": "2026-08-23T19:19:34.703Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11134421.73,
		"hash": "fdfe692c854c98ca5f314dee772673fb47f615386f9a3ed52c16224733c3288b"
	},
	{
		"id": "8f5f17e2e311",
		"ts": "2026-08-23T19:19:34.924Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 788867.32,
		"hash": "8f5f17e2e311b8ba57087d682e5d292277322b4430184774dd850482d18491db"
	},
	{
		"id": "a1d674a0075f",
		"ts": "2026-08-23T19:19:35.162Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 106327.62,
		"hash": "a1d674a0075f5b5f7f0aa9b5c5ea33f9c37d851797e40c4bfbf489ed5892f5d4"
	},
	{
		"id": "1d003d6ce778",
		"ts": "2026-08-23T19:19:35.397Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3359352.14,
		"hash": "1d003d6ce77830904c5c0dd34da5e6ef6eb91b2c47ffed53ab45ddf0b59ea17c"
	},
	{
		"id": "8ba47346908f",
		"ts": "2026-08-23T19:19:35.624Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 265455.25,
		"hash": "8ba47346908fc70cce03e6afe77995db07aff51c81a97714b55777fdc3d4fcd8"
	},
	{
		"id": "1d072a796cfd",
		"ts": "2026-08-23T19:19:35.842Z",
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
		"liquidityUsd": 653538.69,
		"hash": "1d072a796cfd9a5ad4515ba13bfc3ac9934a242412c602c3512d00b0fe4f1c9f"
	},
	{
		"id": "165bccdf8069",
		"ts": "2026-08-23T19:19:36.080Z",
		"symbol": "ETHY",
		"token": "0xC44141a684f6AA4E36cD9264ab55550B03C88643",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 291311.56,
		"hash": "165bccdf806980c6b38367cf2f3e5b3a70c266f2767aa1031ef3ad7d1264fceb"
	},
	{
		"id": "382c241a1d23",
		"ts": "2026-08-23T18:22:27.940Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111319644.91,
		"hash": "382c241a1d23779578270b1d1489307134572e5e1e69dd9372bd75fad831b507"
	},
	{
		"id": "f740af66cdeb",
		"ts": "2026-08-23T18:22:28.592Z",
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
		"liquidityUsd": 16994892.58,
		"hash": "f740af66cdebceb17954d234aae7c0869f998f24bf82553957411783e7c90062"
	},
	{
		"id": "555115191d85",
		"ts": "2026-08-23T18:22:29.095Z",
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
		"liquidityUsd": 895435.23,
		"hash": "555115191d851463a365790e9abd10f67dd943f29d63e8d350606588e7dd9dc5"
	},
	{
		"id": "8e8b2ddf8431",
		"ts": "2026-08-23T18:22:29.542Z",
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
		"liquidityUsd": 28693945.95,
		"hash": "8e8b2ddf8431182ab987c54e438d7205ba891389b6b707bd1989d06a0a1deb07"
	},
	{
		"id": "6bc58431e650",
		"ts": "2026-08-23T18:22:29.995Z",
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
		"liquidityUsd": 3455472.3,
		"hash": "6bc58431e6503677a2ce5c674560f4d1f514bdd6b2b10533371ead26779823f9"
	},
	{
		"id": "dbb05077ecf6",
		"ts": "2026-08-23T18:22:30.229Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1194670.83,
		"hash": "dbb05077ecf62d4278cef494b638b3cdd0eca86fd23f9e7ab60f65bec858c104"
	},
	{
		"id": "776270d5ce7a",
		"ts": "2026-08-23T18:22:30.498Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152786.44,
		"hash": "776270d5ce7ab736ed10e2aea8e80963e0542e8ae1c3fea1e92f845c92bb5e87"
	},
	{
		"id": "09c6e6c74d37",
		"ts": "2026-08-23T18:22:30.840Z",
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
		"liquidityUsd": 1825836.83,
		"hash": "09c6e6c74d371955bdb42d9d07e4e5bb023f421dd40a036e7498327b915626c9"
	},
	{
		"id": "d9705a6fff0a",
		"ts": "2026-08-23T18:22:31.262Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1278323.15,
		"hash": "d9705a6fff0a69536db6a458ed9ef5562a8ad86899b1364c174bc623062e3eaa"
	},
	{
		"id": "f103f9d924e8",
		"ts": "2026-08-23T18:22:31.501Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 627413.98,
		"hash": "f103f9d924e82074efdc6a5132e69ded7a2abf0b3ed4a56e6d3045b4a385d1f3"
	},
	{
		"id": "1e301255eea2",
		"ts": "2026-08-23T18:22:31.715Z",
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
		"liquidityUsd": 872831.97,
		"hash": "1e301255eea2147a414a22e5f0912b5c4b8c6a17933f731a79b0cfe15dedf49c"
	},
	{
		"id": "ad59c5928153",
		"ts": "2026-08-23T18:22:31.944Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4096243.7,
		"hash": "ad59c592815331a8a36f91d643545acf5099bc3f7fa41c6f304982c678a98be4"
	},
	{
		"id": "e26a79e3d7da",
		"ts": "2026-08-23T18:22:32.166Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 643149.32,
		"hash": "e26a79e3d7da9fc10316ffc8a70635d7c609e5d114a6e30fcfcfc42fbc19f0b4"
	},
	{
		"id": "1182a1dc056c",
		"ts": "2026-08-23T18:22:32.492Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11143475.46,
		"hash": "1182a1dc056c64879978617f4a9f613af224635295dcfc9e054d5e192ec132eb"
	},
	{
		"id": "81596ae9e683",
		"ts": "2026-08-23T18:22:32.710Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 788784.38,
		"hash": "81596ae9e683566c5a367c6d97645e5e39405a61a62044cad9bb5fa0557a3927"
	},
	{
		"id": "1d90dc1f23dc",
		"ts": "2026-08-23T18:22:32.933Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3346528.97,
		"hash": "1d90dc1f23dcaa52deb17164c24e7df4b0dbfabdf6aa5f34a85f4c37291a6c24"
	},
	{
		"id": "cda81b5f3ac9",
		"ts": "2026-08-23T18:22:33.138Z",
		"symbol": "ETHY",
		"token": "0xC44141a684f6AA4E36cD9264ab55550B03C88643",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 294036.24,
		"hash": "cda81b5f3ac971b1e8557e628bcff46cf90c188c17b05cacb7debade73a9e8f8"
	},
	{
		"id": "8914095e0bea",
		"ts": "2026-08-23T18:22:33.356Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 109759.59,
		"hash": "8914095e0bea451a32e4ceb3275fda5a43e9b0a948a0a5a2eacd3074a616cfdc"
	},
	{
		"id": "bec0aa7d8195",
		"ts": "2026-08-23T18:22:33.582Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 263750.87,
		"hash": "bec0aa7d8195cf3f569eab3cd361034d2f7cd590c9420ff14e3b10c3a492bbb2"
	},
	{
		"id": "e462e3e5dd49",
		"ts": "2026-08-23T18:22:33.875Z",
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
		"liquidityUsd": 694630.96,
		"hash": "e462e3e5dd49e645b9cd53597d9eff25996c0a857b9e395ea51ec584ee376fcc"
	},
	{
		"id": "537d543aab24",
		"ts": "2026-08-23T17:16:32.192Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111313396.12,
		"hash": "537d543aab249a5d8527743c0b8fabc4a3f2eba433b0856cd28e84e679d4ec8e"
	},
	{
		"id": "71be6369ddf4",
		"ts": "2026-08-23T17:16:32.582Z",
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
		"liquidityUsd": 15222338.24,
		"hash": "71be6369ddf4f49b7640966e69183b78e9239edfbe9c80f78c5da3c6d57e68e2"
	},
	{
		"id": "8cf4f54f92c1",
		"ts": "2026-08-23T17:16:32.783Z",
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
		"liquidityUsd": 901640.95,
		"hash": "8cf4f54f92c15878a83fe36ab57471e86cd1418570788646965d57c8cfe9cf5f"
	},
	{
		"id": "b461c7639f4d",
		"ts": "2026-08-23T17:16:32.976Z",
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
		"liquidityUsd": 28737997.56,
		"hash": "b461c7639f4d65fa5ba3c4de7e1c31a954c65a773942357018cd187f739528be"
	},
	{
		"id": "72470ec9f2a9",
		"ts": "2026-08-23T17:16:33.168Z",
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
		"liquidityUsd": 3457919.83,
		"hash": "72470ec9f2a9d9fc5d40dba768e9f98bc93a790f7608e5166265a061a445dc4d"
	},
	{
		"id": "5a9ea4bbf2c9",
		"ts": "2026-08-23T17:16:33.387Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1187546.05,
		"hash": "5a9ea4bbf2c93936b140eb2a1eb6e5c4594ddcd7de7e9a2a59ec679c6960f16e"
	},
	{
		"id": "5a4a4fed4397",
		"ts": "2026-08-23T17:16:33.582Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152786.48,
		"hash": "5a4a4fed4397e65d90c8961a70b5e83d1097411a1badd7d61d3532c36f808046"
	},
	{
		"id": "6d62c2f2ec9d",
		"ts": "2026-08-23T17:16:33.786Z",
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
		"liquidityUsd": 1828004.25,
		"hash": "6d62c2f2ec9ddfa3dc14b638e6771d3e6c6e64aa0f1c8af86769f10860b50b24"
	},
	{
		"id": "f3e38369fd7e",
		"ts": "2026-08-23T17:16:34.007Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1317936.73,
		"hash": "f3e38369fd7e8d40d6a052727744c31a4a707658d0278f17bea78cde592071d4"
	},
	{
		"id": "655ae3e8ba57",
		"ts": "2026-08-23T17:16:34.198Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 685428.28,
		"hash": "655ae3e8ba579c63e2308b12ede1392f1ac1e3dd228af95321f5cd254b7bc4b9"
	},
	{
		"id": "fddb96a5f9b0",
		"ts": "2026-08-23T17:16:34.389Z",
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
		"liquidityUsd": 882645.8,
		"hash": "fddb96a5f9b0ab9917a68b4f9cd1fe93ed6404d43696022cf55fffe2d7d62243"
	},
	{
		"id": "5e3c9ff727c4",
		"ts": "2026-08-23T17:16:34.592Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4095543.24,
		"hash": "5e3c9ff727c4ed513eb7043e6b6a64762fa192c48f15b2c4fcdf346550439014"
	},
	{
		"id": "8b5a451aca11",
		"ts": "2026-08-23T17:16:34.786Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11167859.14,
		"hash": "8b5a451aca11fbfe13e93d4b1c8ae466e0b2dee8f605c405168e87d453184c1d"
	},
	{
		"id": "1aadfdd70389",
		"ts": "2026-08-23T17:16:34.976Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 583582.51,
		"hash": "1aadfdd703895ff29d0d1ea6363921e7abd9d70d3b08a5f9a56ae7a4c5fed42c"
	},
	{
		"id": "b34d47d7d516",
		"ts": "2026-08-23T17:16:35.174Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 792883.28,
		"hash": "b34d47d7d5166cbe0e834818106e9be7015e2f4fce12461fe4cdcf4e73422059"
	},
	{
		"id": "75f149e768ac",
		"ts": "2026-08-23T17:16:35.379Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3346472.09,
		"hash": "75f149e768ac5a63003ce9f72677dd1988b42fc93e34ba38530ebac7bf48726a"
	},
	{
		"id": "efc100a45b79",
		"ts": "2026-08-23T17:16:35.589Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 105434.24,
		"hash": "efc100a45b796a7b6aed009fa8f336affd656fa9899468ccf0551cb2d5476d0c"
	},
	{
		"id": "56ec1f043944",
		"ts": "2026-08-23T17:16:35.792Z",
		"symbol": "ETHY",
		"token": "0xC44141a684f6AA4E36cD9264ab55550B03C88643",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 286840.43,
		"hash": "56ec1f04394442fa2062ad97261e554d74d647cc4bf5567f4984b17086099522"
	},
	{
		"id": "58cc6280f396",
		"ts": "2026-08-23T17:16:36.157Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1837319.08,
		"hash": "58cc6280f3968fe33381d7afd40d467d9d85e97c97201f16841a76ebccb3c60a"
	},
	{
		"id": "178f24e80761",
		"ts": "2026-08-23T17:16:36.360Z",
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
		"liquidityUsd": 735801.28,
		"hash": "178f24e807618fda568b45962eb49ac77d6cbf11a8284763e3f912cafec4be6b"
	},
	{
		"id": "1a019e1b8b0c",
		"ts": "2026-08-23T16:19:16.866Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111183241.11,
		"hash": "1a019e1b8b0c78384a17bf1cbaff62dbcdbb6208d47b3f8830593d3411196ee6"
	},
	{
		"id": "fc4797459073",
		"ts": "2026-08-23T16:19:17.289Z",
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
		"liquidityUsd": 16920361.84,
		"hash": "fc4797459073bbb4ad69d4517e07f7a3ca39568db0a7f31d34fa5cbb037bc03c"
	},
	{
		"id": "194e4f331fdc",
		"ts": "2026-08-23T16:19:17.803Z",
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
		"liquidityUsd": 892846.12,
		"hash": "194e4f331fdc31abd14b5ac82d01dbdd46e74cbfce165f7cde89c65fc2ea7a3b"
	},
	{
		"id": "fd940891d85f",
		"ts": "2026-08-23T16:19:18.046Z",
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
		"liquidityUsd": 28669546.64,
		"hash": "fd940891d85f23f38044eafb8642a31d1454747d9d40be8d3cbde0fb02e39f3d"
	},
	{
		"id": "ff1d178fb6bb",
		"ts": "2026-08-23T16:19:18.325Z",
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
		"liquidityUsd": 3452024.41,
		"hash": "ff1d178fb6bbcf0af2b8bd26f9cfa1dcabfadbf172bc4cb0c36e0e75dcc20d5c"
	},
	{
		"id": "4d868dec3539",
		"ts": "2026-08-23T16:19:18.561Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1185039.44,
		"hash": "4d868dec3539999f1ef9ab62eb3748d0a66e42742e2b2cf737eb9ffb982337dd"
	},
	{
		"id": "d7b911b34ed6",
		"ts": "2026-08-23T16:19:18.800Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152786.46,
		"hash": "d7b911b34ed6b9fb853efa0a1583356d393ddfd8515a1fd074f80498813b4943"
	},
	{
		"id": "80d4fced664c",
		"ts": "2026-08-23T16:19:19.043Z",
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
		"liquidityUsd": 1824288.44,
		"hash": "80d4fced664c97d0b9e20b0d34198c614620a020626598a42c95d13571efc96e"
	},
	{
		"id": "2c58cff82aed",
		"ts": "2026-08-23T16:19:19.306Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1327930.53,
		"hash": "2c58cff82aedfa709dcbdfee873fc501138487936e907bf0522054407c74e2b4"
	},
	{
		"id": "81e9b6a79375",
		"ts": "2026-08-23T16:19:19.540Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 746734.03,
		"hash": "81e9b6a793753050b34cef514838780a53196f0d0ac0ec09edcdc29ef7a45795"
	},
	{
		"id": "7365104963de",
		"ts": "2026-08-23T16:19:19.762Z",
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
		"liquidityUsd": 831745.05,
		"hash": "7365104963ded4ca27d859490a53e117dae5cb696d0886704ea50dad433e3e7c"
	},
	{
		"id": "a6c63fc07cb8",
		"ts": "2026-08-23T16:19:19.984Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4096470.29,
		"hash": "a6c63fc07cb875b32f83c43249008ef6ce51fda69da0f05a0fea5f378a2a1262"
	},
	{
		"id": "27c53ab6a009",
		"ts": "2026-08-23T16:19:20.191Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11035978.97,
		"hash": "27c53ab6a009d829f1789fac95f107f51aa0b9530c0fea7b39bf31ca9b90673e"
	},
	{
		"id": "e84801af049a",
		"ts": "2026-08-23T16:19:20.402Z",
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
		"liquidityUsd": 763313.86,
		"hash": "e84801af049a2d973ce56cec51f1dad4942c4d0be797912dc1ba676430882239"
	},
	{
		"id": "ec1e91da1720",
		"ts": "2026-08-23T16:19:20.617Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 575770.47,
		"hash": "ec1e91da1720ec210467b1ae652cfd62d11b31da808bfbe1592ca617bf87d701"
	},
	{
		"id": "998b31f928b8",
		"ts": "2026-08-23T16:19:20.837Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3355687.34,
		"hash": "998b31f928b8a0020bd39b44c42a57ec4ec7e0d71c913d984ae67bc248fefcf6"
	},
	{
		"id": "de7aae1401db",
		"ts": "2026-08-23T16:19:21.057Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1837417.12,
		"hash": "de7aae1401db1cc0e17ecc8d4e7483bdbe791685d553f12cea724b32b5908851"
	},
	{
		"id": "a76a10d53258",
		"ts": "2026-08-23T16:19:21.265Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 654511.89,
		"hash": "a76a10d5325863238138305af5740ba304595f164bb56e542e2276390addc5da"
	},
	{
		"id": "9eb498abe602",
		"ts": "2026-08-23T16:19:21.475Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 126951.04,
		"hash": "9eb498abe6029ec2704fdb0ce3fb3447cb4efbb28eae84e4070fac860c8ddc18"
	},
	{
		"id": "36561dd8bba0",
		"ts": "2026-08-23T16:19:21.692Z",
		"symbol": "ETHY",
		"token": "0xC44141a684f6AA4E36cD9264ab55550B03C88643",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 288567.28,
		"hash": "36561dd8bba05c99184cab9ad50c2115d70c42bedf2103b1ab0bcf4c862fd70e"
	},
	{
		"id": "6191aae4e80f",
		"ts": "2026-08-23T15:18:16.872Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110965251.75,
		"hash": "6191aae4e80f9c4cdae15428bb53837094ef841b8720a2fb938d2848188c4632"
	},
	{
		"id": "128268342749",
		"ts": "2026-08-23T15:18:17.120Z",
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
		"liquidityUsd": 16727447.95,
		"hash": "128268342749c5dcbb9c11e418985c3671a238418d217637afb8909986177298"
	},
	{
		"id": "4e319a0bf00c",
		"ts": "2026-08-23T15:18:17.359Z",
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
		"liquidityUsd": 888163.84,
		"hash": "4e319a0bf00c8ed9cf064299fb7a0b7907323f2cc309cbde324426ddb6cde2d6"
	},
	{
		"id": "367664daabea",
		"ts": "2026-08-23T15:18:17.593Z",
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
		"liquidityUsd": 28414653.01,
		"hash": "367664daabea9f8c78d00c5fa9a75094f45c2f011b9ac77171987877b3063873"
	},
	{
		"id": "4f6ac6c1b531",
		"ts": "2026-08-23T15:18:17.833Z",
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
		"liquidityUsd": 3439255.65,
		"hash": "4f6ac6c1b5313e4c5ba311c3ac0f780e9f07e256422a70bf5eb2e5d6c4f22e9d"
	},
	{
		"id": "c4f631047ac0",
		"ts": "2026-08-23T15:18:18.069Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1160310.62,
		"hash": "c4f631047ac08359da9315c677a9d4f4a235dc802539c50a3a3355d901e174a9"
	},
	{
		"id": "b0891c5efef8",
		"ts": "2026-08-23T15:18:18.338Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 376595.13,
		"hash": "b0891c5efef8951c3280c90b1db4074edc665c6206c749885e3ba79077a9430e"
	},
	{
		"id": "9bb739cc7165",
		"ts": "2026-08-23T15:18:18.565Z",
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
		"liquidityUsd": 1818525.39,
		"hash": "9bb739cc7165159d1c404740dcfbaf6fbc678a73bd6119dcb5583113c456cefb"
	},
	{
		"id": "dbeb8efc85e9",
		"ts": "2026-08-23T15:18:18.803Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1321608.6,
		"hash": "dbeb8efc85e9d34cdb2bdcb563858546d928d6967bd0158f68e582ceba03f7d7"
	},
	{
		"id": "922071684834",
		"ts": "2026-08-23T15:18:19.039Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 638910.67,
		"hash": "9220716848347e5f02466f36dbcfb4f48b3fd176968d33b8f05274ddabf3b80f"
	},
	{
		"id": "6c91363693e8",
		"ts": "2026-08-23T15:18:19.262Z",
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
		"liquidityUsd": 805952.68,
		"hash": "6c91363693e85daa04cd52325f78c7eee7db28783d12f281e4246b8691195a15"
	},
	{
		"id": "846dcc3aba5e",
		"ts": "2026-08-23T15:18:19.486Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4088346.88,
		"hash": "846dcc3aba5ee2f70c4c43bf991ec59d1446d9f07f43ac867453ecb1433724fd"
	},
	{
		"id": "0f5171eee9d9",
		"ts": "2026-08-23T15:18:19.702Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11010731.98,
		"hash": "0f5171eee9d9a12ec5d6e6bc2954b072cf8397948f0e12df685dd8d46c5e4357"
	},
	{
		"id": "d690ddeabad3",
		"ts": "2026-08-23T15:18:19.921Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 127085.33,
		"hash": "d690ddeabad314500ba53f3b3035216d366a6e6cdb03d48083aa0cce5ac51716"
	},
	{
		"id": "dda14f49882f",
		"ts": "2026-08-23T15:18:20.141Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 740502.68,
		"hash": "dda14f49882fed8662e73f94a663ee8a359567a1adbdb18362cca3f8b6fb3f94"
	},
	{
		"id": "b10a3cda27ff",
		"ts": "2026-08-23T15:18:20.362Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 547052.87,
		"hash": "b10a3cda27ffa03b9243a867be8680a8ab33242a5bf18c79a780aa683c2a56aa"
	},
	{
		"id": "0be0b8dbe82f",
		"ts": "2026-08-23T15:18:20.586Z",
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
		"liquidityUsd": 3377614.35,
		"hash": "0be0b8dbe82ff6cd057b1418556395f567b05a6c1fee415c0be58c75ffaba108"
	},
	{
		"id": "77ce6034e0d8",
		"ts": "2026-08-23T15:18:20.802Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1827966.51,
		"hash": "77ce6034e0d853419c4eb5cd05069e49d60e91bc4ba306f4988641d3386aa9ec"
	},
	{
		"id": "b15207c93d50",
		"ts": "2026-08-23T15:18:21.021Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 630797.95,
		"hash": "b15207c93d50c1d157350ac19b6b6394fe7924714aa50b7d07238b1ffcda8dc3"
	},
	{
		"id": "0a5794ee4ef8",
		"ts": "2026-08-23T14:18:49.372Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110902230.18,
		"hash": "0a5794ee4ef8d0a55c13945b7b9c879365f4873e452b125d33593ad6821c4629"
	},
	{
		"id": "e9e3c3080697",
		"ts": "2026-08-23T14:18:49.614Z",
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
		"liquidityUsd": 17712215.31,
		"hash": "e9e3c3080697e2c40a28f9a61340a0b9ccc76ba59661d9d9e97d0b87f7e4ce68"
	},
	{
		"id": "98dd11d3ca93",
		"ts": "2026-08-23T14:18:49.841Z",
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
		"liquidityUsd": 894737.86,
		"hash": "98dd11d3ca930b88e45d9d2996a55d3ba53cb5f9369d52343023078902df4368"
	},
	{
		"id": "d5834573f652",
		"ts": "2026-08-23T14:18:50.067Z",
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
		"liquidityUsd": 28259167.44,
		"hash": "d5834573f652dcc669d089aff95adab5b8a4f1c32f149ef9f065cd96a04d8c92"
	},
	{
		"id": "3144eaf6a66f",
		"ts": "2026-08-23T14:18:50.518Z",
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
		"liquidityUsd": 3495444.91,
		"hash": "3144eaf6a66ff222c9e92072410bc81bef3673ea21e0aedf33aecdffad58b8b2"
	},
	{
		"id": "464ff955db2a",
		"ts": "2026-08-23T14:18:50.744Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1190434.15,
		"hash": "464ff955db2a879b1be13aa9dd02793965d46200fc8f8a5a3a3ad52f434a73d6"
	},
	{
		"id": "1acb42f0e839",
		"ts": "2026-08-23T14:18:50.967Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 373867.38,
		"hash": "1acb42f0e8395058f3c8f0a9fe9d5d7a2e66b21f8b0f4a39ae70c6dc73cdd6fc"
	},
	{
		"id": "416fc9c71cd3",
		"ts": "2026-08-23T14:18:51.192Z",
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
		"liquidityUsd": 1840340.27,
		"hash": "416fc9c71cd34f54cfe24204d9b7c73a3ed1fd95df021b7f7fa96de3bc52c547"
	},
	{
		"id": "f1a25578f010",
		"ts": "2026-08-23T14:18:51.425Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1335331.26,
		"hash": "f1a25578f010c362b5f44822628708e343bec3bb2855d8c89dbb665205ba1f68"
	},
	{
		"id": "e9e5b531d61c",
		"ts": "2026-08-23T14:18:51.660Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 636208.73,
		"hash": "e9e5b531d61cb47396e98173cb3bc69d0ed41cfbd2666253ace37e8ab0adb77f"
	},
	{
		"id": "e3e55d35166b",
		"ts": "2026-08-23T14:18:51.902Z",
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
		"liquidityUsd": 828457.23,
		"hash": "e3e55d35166ba339d30ac82633f03e11df05863d6f1cec1aea24ab374add06dc"
	},
	{
		"id": "d458f02c1f17",
		"ts": "2026-08-23T14:18:52.195Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4257292.76,
		"hash": "d458f02c1f17ddd23d6840d84f4acd0cfc25f96e75f4c1b228ec247920a1ca03"
	},
	{
		"id": "24b18bdb1c2b",
		"ts": "2026-08-23T14:18:52.406Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11304223.53,
		"hash": "24b18bdb1c2bba2a198e628d9070ddad99b1b309e98f0019e6c618d064aa3295"
	},
	{
		"id": "2694ded63b3e",
		"ts": "2026-08-23T14:18:52.614Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 731100.12,
		"hash": "2694ded63b3e0d191b19ea0f53efe211ce9e1d4d55800efd7a2fb931ca9b5921"
	},
	{
		"id": "933bde751c8f",
		"ts": "2026-08-23T14:18:52.829Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 138726.47,
		"hash": "933bde751c8f03526bf6001f0d2428197243d462c87cafca51f23f8722930741"
	},
	{
		"id": "d60c39beba93",
		"ts": "2026-08-23T14:18:53.041Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 556711.71,
		"hash": "d60c39beba93be9d87c7f16e93ccad35380a28a560d6afaec1d868afb237eecb"
	},
	{
		"id": "d4dabd1ec25f",
		"ts": "2026-08-23T14:18:53.251Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3423293.48,
		"hash": "d4dabd1ec25f8d9bca4f0d4c313f474c4f827a7090ef7bda4b611386e1288ed3"
	},
	{
		"id": "cbe4da15be52",
		"ts": "2026-08-23T14:18:53.459Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 632062.59,
		"hash": "cbe4da15be52265c5e8a2ed9982624fe248f6366a27cc1e19f98c3bc5ccbabff"
	},
	{
		"id": "c47723213088",
		"ts": "2026-08-23T14:18:53.677Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1831797.2,
		"hash": "c47723213088cd15dc64913588e0f304caf0ba49bd53ae12f60355f1faae875c"
	},
	{
		"id": "e3d95ce4cef2",
		"ts": "2026-08-23T13:28:39.871Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110908354.57,
		"hash": "e3d95ce4cef2442d2e8de1dc1d08614ba089d715af86438fb5d9a0b8a286a310"
	},
	{
		"id": "caea547593b7",
		"ts": "2026-08-23T13:28:40.094Z",
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
		"liquidityUsd": 16649216.41,
		"hash": "caea547593b73394aeff0ff72b9589edc48650db1885c435651098f40766516c"
	},
	{
		"id": "371c0858b6f1",
		"ts": "2026-08-23T13:28:40.293Z",
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
		"liquidityUsd": 883036.77,
		"hash": "371c0858b6f19b165b4cade04a5f677449496739299885bae293dd9b9896a03d"
	},
	{
		"id": "05e0b722960a",
		"ts": "2026-08-23T13:28:40.660Z",
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
		"liquidityUsd": 28257470.5,
		"hash": "05e0b722960a1bf0b8fd9d34d7dc4e7bc3a0a9d53100f1387719ba245ef68f68"
	},
	{
		"id": "d1785ac7d8cf",
		"ts": "2026-08-23T13:28:40.859Z",
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
		"liquidityUsd": 3407002.14,
		"hash": "d1785ac7d8cfa9c2911d09467ac9f6427b25836c9b16450977f546241ae9e4ea"
	},
	{
		"id": "c910b20772c9",
		"ts": "2026-08-23T13:28:41.076Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1189032.72,
		"hash": "c910b20772c9d7daf6b7f456636b3b2d69da507078ab07e284ed78e61e779a91"
	},
	{
		"id": "1b6f1d8cd5a4",
		"ts": "2026-08-23T13:28:41.290Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 375442.81,
		"hash": "1b6f1d8cd5a46e6a5abe7df8e33f5ed7793c0398ea05b624e6af14af759b1421"
	},
	{
		"id": "2e395b2219d6",
		"ts": "2026-08-23T13:28:41.498Z",
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
		"liquidityUsd": 1838073.62,
		"hash": "2e395b2219d6694f9bb90a6422ee83d5118a71ac4ae895238ca03440e14ff965"
	},
	{
		"id": "9fac6e2d0e70",
		"ts": "2026-08-23T13:28:41.695Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1296373.47,
		"hash": "9fac6e2d0e7058fccab9a88b28daeac7fe94804473e1083c1c4f8d6b8906918e"
	},
	{
		"id": "e27d8a631e38",
		"ts": "2026-08-23T13:28:41.889Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 589474.04,
		"hash": "e27d8a631e38f5ea22a531e1d73f483a9a892a086424634725f543d4362189cc"
	},
	{
		"id": "22fde879be6f",
		"ts": "2026-08-23T13:28:42.086Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11135415.34,
		"hash": "22fde879be6fbe4e3449c3444294fb022ee0799e67182265b19a6e6b3c38ed09"
	},
	{
		"id": "ef728c0e3d27",
		"ts": "2026-08-23T13:28:42.299Z",
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
		"liquidityUsd": 831213.26,
		"hash": "ef728c0e3d2794d67ed1a5eacda21332fa50bf791e01a493329504c114afef5b"
	},
	{
		"id": "d786e5f89c94",
		"ts": "2026-08-23T13:28:42.507Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 719422.36,
		"hash": "d786e5f89c949d9235362a545af01c36fd86b4b0b264130c99d44d2467329b19"
	},
	{
		"id": "79345580ed3a",
		"ts": "2026-08-23T13:28:42.700Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4257634.72,
		"hash": "79345580ed3a826ccaec111e3c08c355917d309d3a646833ec8c5d0d6866b643"
	},
	{
		"id": "772f0dd79e00",
		"ts": "2026-08-23T13:28:42.916Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 852123.24,
		"hash": "772f0dd79e002cad3c52d5f8349567f89531cc54409a29022bc309f7d1314692"
	},
	{
		"id": "56ae3676a76b",
		"ts": "2026-08-23T13:28:43.177Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 139008.45,
		"hash": "56ae3676a76b0ac3d4925c6f64c1f7a76b2743d9abbd0e2fcef6aba15aa2e6b3"
	},
	{
		"id": "e0c41c3556a7",
		"ts": "2026-08-23T13:28:43.573Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3269150.13,
		"hash": "e0c41c3556a710ef4b3240fba96c069c85eba5b1792fae9e9d0c426a8a7376c0"
	},
	{
		"id": "57139bdabd4c",
		"ts": "2026-08-23T13:28:43.766Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 617240.5,
		"hash": "57139bdabd4cc4dc58788fc769ba2986b546c15bd57953c5501c6b5146346686"
	},
	{
		"id": "4bb23c67f245",
		"ts": "2026-08-23T13:28:43.979Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1838344.05,
		"hash": "4bb23c67f245f285028d416e7cef81aa1f5b29ddce88793997fac4412f72902d"
	},
	{
		"id": "3ce21a75839b",
		"ts": "2026-08-23T12:31:27.479Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110280315.94,
		"hash": "3ce21a75839be2da873eb16382f84eed6c98f499b627e5514d8669b1b20bff56"
	},
	{
		"id": "a8b8ce1b5267",
		"ts": "2026-08-23T12:31:27.703Z",
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
		"liquidityUsd": 18659080.87,
		"hash": "a8b8ce1b52674b94d0f148b9a323b1825e76cb0899d8b472f0a5907825cf2019"
	},
	{
		"id": "d30feadb67c5",
		"ts": "2026-08-23T12:31:27.919Z",
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
		"liquidityUsd": 879101.11,
		"hash": "d30feadb67c56801a47bc2d60b247a8e7ba9691f16ad2746d1184b0c292051ec"
	},
	{
		"id": "5cc62fa33f1b",
		"ts": "2026-08-23T12:31:28.134Z",
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
		"liquidityUsd": 27864188.92,
		"hash": "5cc62fa33f1b9938b3d4ceb4c56802812c099e8a8c3dcb09d6e705046d835dac"
	},
	{
		"id": "0d459acd796d",
		"ts": "2026-08-23T12:31:28.426Z",
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
		"liquidityUsd": 3352329.88,
		"hash": "0d459acd796db655f42bde3bab0bf8f31a88c436b0942fe55670c8bffeecc0a3"
	},
	{
		"id": "e90349d0f1eb",
		"ts": "2026-08-23T12:31:28.632Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1167021.38,
		"hash": "e90349d0f1eb1c7c2d2e31dd90e277515e218e9afae50413ad845e85223aa981"
	},
	{
		"id": "d516ee4335c4",
		"ts": "2026-08-23T12:31:29.075Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 371463.36,
		"hash": "d516ee4335c48ba5e95d9d6f03017fb88f42a653ce6b972d301cea51e222b070"
	},
	{
		"id": "fdc498503b4e",
		"ts": "2026-08-23T12:31:29.282Z",
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
		"liquidityUsd": 1809828.94,
		"hash": "fdc498503b4ecbe82c61442bbe74f4c525e12e97b99226179bbd919cc9f7e353"
	},
	{
		"id": "36a0d22b7d79",
		"ts": "2026-08-23T12:31:29.496Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1279250.64,
		"hash": "36a0d22b7d79886fca6e9bfd3f01fefe7687c2a68f6cea12033ca8515df3973a"
	},
	{
		"id": "4ce6b5254e6e",
		"ts": "2026-08-23T12:31:29.693Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 583571.31,
		"hash": "4ce6b5254e6e8ade9d42072ca98e4bb10e7428b988ff75e7866091ebe7e9f49c"
	},
	{
		"id": "858411ee6db8",
		"ts": "2026-08-23T12:31:29.919Z",
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
		"liquidityUsd": 822330.55,
		"hash": "858411ee6db8ea47f64b3589dda37c594219e0471005d24da555ecdfd0aba312"
	},
	{
		"id": "115a2c00dec1",
		"ts": "2026-08-23T12:31:30.149Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11000491.09,
		"hash": "115a2c00dec1569748565bdc23ea5baeaa2a61451b60363230590d5944c3290d"
	},
	{
		"id": "a4b7afa92ab0",
		"ts": "2026-08-23T12:31:30.345Z",
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
		"liquidityUsd": 700445.66,
		"hash": "a4b7afa92ab0ccc0120f5c1cd521059dc714ca73d059bbd6f34a94964d378c0f"
	},
	{
		"id": "86db5d9708b4",
		"ts": "2026-08-23T12:31:30.561Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 601035.57,
		"hash": "86db5d9708b4ef7d667e8ae4aa5cb49e53541a533cdcc939f40c3b5d714a9d83"
	},
	{
		"id": "8a825356b631",
		"ts": "2026-08-23T12:31:30.759Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4197525.44,
		"hash": "8a825356b631f2771f7cf509c9d37ba169ffb40217967cd922a2e307ef552164"
	},
	{
		"id": "d5a67c2fdfc7",
		"ts": "2026-08-23T12:31:31.117Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 849546.86,
		"hash": "d5a67c2fdfc78d46505b48d2b1eb24c0021fd84f7e812341742ee6b83e051a68"
	},
	{
		"id": "941963f0f55c",
		"ts": "2026-08-23T12:31:31.466Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 137204.04,
		"hash": "941963f0f55c42218a3021184c1732096340a0e0584f74e97a6a1f22d06cac59"
	},
	{
		"id": "ddb2a7914bd0",
		"ts": "2026-08-23T12:31:31.677Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3257716.1,
		"hash": "ddb2a7914bd09273842f71e7a704f12aff6513df15a72d851e82d178a086b4c1"
	},
	{
		"id": "9c3088e72c96",
		"ts": "2026-08-23T12:31:31.891Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1820654.02,
		"hash": "9c3088e72c96d0bb439c5c42ce965e695c7a0b2d32f7dc0612f149d5d3643815"
	},
	{
		"id": "c97978fa411b",
		"ts": "2026-08-23T11:17:07.156Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110028002.3,
		"hash": "c97978fa411bee7ea7b8aa3bc38f1c3f13f0ba8e09dcfb6b94558ef5618d57f9"
	},
	{
		"id": "5a383d6fb4ea",
		"ts": "2026-08-23T11:17:07.425Z",
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
		"liquidityUsd": 19315540.4,
		"hash": "5a383d6fb4eacb2c00bae96bd1d1284a3cdbbe9e78021e73d60c2e95618e5fd7"
	},
	{
		"id": "81c6a98245fb",
		"ts": "2026-08-23T11:17:07.637Z",
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
		"liquidityUsd": 876580.74,
		"hash": "81c6a98245fb5e1d9098aaa3872f97dce51783b3f7f660c0cebdc36e16c8ee5a"
	},
	{
		"id": "98d2290a2e60",
		"ts": "2026-08-23T11:17:07.843Z",
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
		"liquidityUsd": 27816056.92,
		"hash": "98d2290a2e60ee9c58fe768f5be33ffa314764b4927a78a2d7ea56a35fb34840"
	}
]
