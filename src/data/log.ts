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
	"updatedAt": "2026-10-03T18:58:02.103Z",
	"tokensScored": 19309,
	"verdictsIssued": 19309,
	"safe": 16442,
	"risky": 1389,
	"likelyRug": 1478,
	"ticks": 1096
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "45319859432a",
		"ts": "2026-10-03T18:57:56.675Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 162478005.63,
		"hash": "45319859432a51ff0b604a90fddd6d8ade21cfed19e95c58da684635fda1ae19"
	},
	{
		"id": "5ebfe1bf5e38",
		"ts": "2026-10-03T18:57:57.278Z",
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
		"liquidityUsd": 16254346.74,
		"hash": "5ebfe1bf5e384efead1b8c9acb5b71680da177e2477d4f62ff943ce5c204f749"
	},
	{
		"id": "f7c597463c9f",
		"ts": "2026-10-03T18:57:57.692Z",
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
		"liquidityUsd": 860039.8,
		"hash": "f7c597463c9f9a0cfe05238f827007c0df407ba77dbc08d5e4db7c3455420be3"
	},
	{
		"id": "963248c0d144",
		"ts": "2026-10-03T18:57:57.925Z",
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
		"liquidityUsd": 42288561.83,
		"hash": "963248c0d144eabd1368d25fe38752da336b623eafade843bbcb1a70a9a3e8d3"
	},
	{
		"id": "6ac0fd405979",
		"ts": "2026-10-03T18:57:58.155Z",
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
		"liquidityUsd": 4595195.95,
		"hash": "6ac0fd4059799fef845dc959f1f9c6926dc38b52be995a43a404e8407ac24ad6"
	},
	{
		"id": "eb22ce570819",
		"ts": "2026-10-03T18:57:58.389Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1323396.29,
		"hash": "eb22ce570819c91e3ba30f8e18c539a0e165eef89d6cbc61e757c4edea8a74c7"
	},
	{
		"id": "db6f53ea78c9",
		"ts": "2026-10-03T18:57:58.620Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42288561.83,
		"hash": "db6f53ea78c94378aa6f423d83272b4744b9c96dad27227b4571e9bdbc1487dc"
	},
	{
		"id": "7183b1760d79",
		"ts": "2026-10-03T18:57:58.848Z",
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
		"liquidityUsd": 2251046.94,
		"hash": "7183b1760d79beb75f298228c5ca239f6292e858d62353011f0eee80d314629d"
	},
	{
		"id": "4a5f826f2b55",
		"ts": "2026-10-03T18:57:59.079Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1815303.57,
		"hash": "4a5f826f2b55217d0bd1cf7c7fc6ff9adc94b8a4befd9c424356d82e768d5d36"
	},
	{
		"id": "c1c2e3061b54",
		"ts": "2026-10-03T18:57:59.316Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1464684.8,
		"hash": "c1c2e3061b54d0f32c2ee59d344d7f767c637a714fca4c9bf680d188a759fa83"
	},
	{
		"id": "40d0983748e1",
		"ts": "2026-10-03T18:57:59.531Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1205981.53,
		"hash": "40d0983748e1ba2b1ebbe5dfe3b9761712e3e805f5e9e08a0c0e3b9e72ad52ac"
	},
	{
		"id": "07025e17429e",
		"ts": "2026-10-03T18:57:59.748Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1662410.6,
		"hash": "07025e17429e59fbf7255d48fc2581f62f0f7968f9fe89a4b3ed7ec89b28d152"
	},
	{
		"id": "16948fd66c66",
		"ts": "2026-10-03T18:57:59.961Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 184418.29,
		"hash": "16948fd66c66c5cb9399754cb14d557d95e8ec4d3493d180b927c78fa12c84d9"
	},
	{
		"id": "770ef2dde038",
		"ts": "2026-10-03T18:58:00.192Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 254965.16,
		"hash": "770ef2dde03839a31a2fc05a42447c586f97d3751abc1798e3f921b26b8d13be"
	},
	{
		"id": "b187783a4a34",
		"ts": "2026-10-03T18:58:00.419Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1125563.2,
		"hash": "b187783a4a3467f8aaf4cfc5dce43dae78b055f8b8ba269de59625180db6b841"
	},
	{
		"id": "704bf3036c8a",
		"ts": "2026-10-03T18:58:00.656Z",
		"symbol": "BASEPAD",
		"token": "0xAeadc7084BC3C482921A8ad7EADc65F70E06106D",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 67482.1,
		"hash": "704bf3036c8a227136fe9bc9bececdc2614ea230ca0827ab24a3d1f9e119f06a"
	},
	{
		"id": "6076b26c3ec4",
		"ts": "2026-10-03T18:58:00.894Z",
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
		"liquidityUsd": 5990887.97,
		"hash": "6076b26c3ec4780ba626cd7fa29832458104916b3c95d36593abcaaf0fe66b08"
	},
	{
		"id": "7d65d296ee3e",
		"ts": "2026-10-03T18:58:01.121Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3525219.11,
		"hash": "7d65d296ee3e109bab60af621fc3edd4f92db1a7c8e5b82f439f0db12691c52b"
	},
	{
		"id": "4ed57eb4d229",
		"ts": "2026-10-03T18:58:02.103Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4116802.98,
		"hash": "4ed57eb4d229dbfe85e6c93e40c6e1f0fd687868fbf6cfac0e05d14f63d2d61a"
	},
	{
		"id": "794b43194c22",
		"ts": "2026-10-03T15:38:47.554Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 162427780.81,
		"hash": "794b43194c22175c41f6e1d65a6e6dd20777456f4ef19c5c377acdb6233893a3"
	},
	{
		"id": "f813a659abb5",
		"ts": "2026-10-03T15:38:48.228Z",
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
		"liquidityUsd": 16688846.39,
		"hash": "f813a659abb5474cb11c5f750cde5953153be53aeece9ec024016f803d899c96"
	},
	{
		"id": "9c4a21cf29c2",
		"ts": "2026-10-03T15:38:48.508Z",
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
		"liquidityUsd": 859149.76,
		"hash": "9c4a21cf29c20c247ca76afbda5fd68f666c4cb5eab9b7f1f0c34d653c8ad3ba"
	},
	{
		"id": "c6dda80f9e00",
		"ts": "2026-10-03T15:38:48.803Z",
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
		"liquidityUsd": 41696777.02,
		"hash": "c6dda80f9e003894abac1623b0deb5fe4d3cb4a680430558e26e5b6c5a72c5e3"
	},
	{
		"id": "be77d7446ebc",
		"ts": "2026-10-03T15:38:49.075Z",
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
		"liquidityUsd": 4597350.42,
		"hash": "be77d7446ebc428e7f213ce88cc2f1e00889f4d7ba0b0d4a4e93a6b1fe30d1d7"
	},
	{
		"id": "ba3ef7ea4e0e",
		"ts": "2026-10-03T15:38:49.353Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1320713.05,
		"hash": "ba3ef7ea4e0e8d309c11494f1a5666a7ad32145718028dc9323206b76b806c1e"
	},
	{
		"id": "3044a43ff01a",
		"ts": "2026-10-03T15:38:49.615Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41696776.12,
		"hash": "3044a43ff01aac9d29e8896e13743b1dd37a206a1d301f9a56e62247aa7eabf7"
	},
	{
		"id": "8bac686f3eb5",
		"ts": "2026-10-03T15:38:49.887Z",
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
		"liquidityUsd": 769483.84,
		"hash": "8bac686f3eb5a321c0d1cd26f7392b4dc5e095a4110a5072cd5b968ca14e4f0f"
	},
	{
		"id": "c853d79328f3",
		"ts": "2026-10-03T15:38:50.172Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1843557.21,
		"hash": "c853d79328f3d0340125e9c7ea3c7bb9f13200acc2f9e96242d54e811b53ee05"
	},
	{
		"id": "504a8a68bed0",
		"ts": "2026-10-03T15:38:50.460Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1405670.05,
		"hash": "504a8a68bed02ff905a47fd8b70c7f82283c37d345abacaaef1d59a8c5a46913"
	},
	{
		"id": "bd8e76c49592",
		"ts": "2026-10-03T15:38:50.686Z",
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
		"liquidityUsd": 1161713.09,
		"hash": "bd8e76c49592fde647e75ce8e046cbf67a9b48c25a47f3b5be097d1c4f254822"
	},
	{
		"id": "218c2307bcab",
		"ts": "2026-10-03T15:38:50.913Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 263245.09,
		"hash": "218c2307bcabe88b69aeded2084cc5e01a16a90aad7b814c02c0872f7da64186"
	},
	{
		"id": "900d9c74c7e1",
		"ts": "2026-10-03T15:38:51.138Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1586018.8,
		"hash": "900d9c74c7e1eca992b1b67f6e9e8cffddba3ff317f5ef77e698d8d939baf8be"
	},
	{
		"id": "0caded0fe60d",
		"ts": "2026-10-03T15:38:51.359Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6053700.43,
		"hash": "0caded0fe60d5ea0bc3aa6fa83d76f3033eae577c0a8b1c92ec3ea1f17d9bf78"
	},
	{
		"id": "79e1c054c66a",
		"ts": "2026-10-03T15:38:51.585Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 185535.98,
		"hash": "79e1c054c66a57b8aae2d288d8357ef95ad40d1ddbb6fa2e7bc660587d4db111"
	},
	{
		"id": "1703846a8c89",
		"ts": "2026-10-03T15:38:51.815Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11950404.43,
		"hash": "1703846a8c89b808b5379fccc861b0e1de698533980cdac8cb312e80842fb55f"
	},
	{
		"id": "f7ba0384be48",
		"ts": "2026-10-03T15:38:52.039Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3607998.44,
		"hash": "f7ba0384be48d510b9b76beac9ff909fe70bd91dfab2b096d2eb6a7d540c41ef"
	},
	{
		"id": "5174b87e56e4",
		"ts": "2026-10-03T15:38:52.263Z",
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
		"liquidityUsd": 1113363.64,
		"hash": "5174b87e56e4e65c52693b259f1abda6badb35a93dfd2498ff79957757c52307"
	},
	{
		"id": "c2ac8cddffbc",
		"ts": "2026-10-03T15:38:52.486Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 502094.44,
		"hash": "c2ac8cddffbcf198984a9074eec431ecf4c8084d83e6fdb5f6743f67b3c71119"
	},
	{
		"id": "7500be407cfc",
		"ts": "2026-10-03T11:28:56.264Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 162412308.55,
		"hash": "7500be407cfc1933f94f309bb52890351bdf6748d2d49c90ad11149bbcb9bebf"
	},
	{
		"id": "509b9399e2ee",
		"ts": "2026-10-03T11:28:56.458Z",
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
		"liquidityUsd": 17183459.65,
		"hash": "509b9399e2ee7c80aa670abc5dbbc5c5529ef802d2ac699734c51a02cf749ae9"
	},
	{
		"id": "e5d6846febd6",
		"ts": "2026-10-03T11:28:56.647Z",
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
		"liquidityUsd": 859149.76,
		"hash": "e5d6846febd647328028f7d2eeb1bcc5933f8b5165328fff8c5220e023cdd754"
	},
	{
		"id": "9bd4277a05f9",
		"ts": "2026-10-03T11:28:56.840Z",
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
		"liquidityUsd": 41708760.9,
		"hash": "9bd4277a05f98d57d691df3744b2669f3902843db91b5161e0146ca7fb11457b"
	},
	{
		"id": "757609699fad",
		"ts": "2026-10-03T11:28:57.025Z",
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
		"liquidityUsd": 4544002.4,
		"hash": "757609699fad933dc1fdc97792a083aa21ee96ce2b9f9ac1192ec22ac1ff3272"
	},
	{
		"id": "2d76a476de14",
		"ts": "2026-10-03T11:28:57.210Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1315312.77,
		"hash": "2d76a476de14167879efa3ee157c7e14e281462d5bf6557432b2bdfc9c4d0a33"
	},
	{
		"id": "7a828852c191",
		"ts": "2026-10-03T11:28:57.398Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41708760.9,
		"hash": "7a828852c191804d52ec3410efe698ebda7243fd3692576996321d868eb2257b"
	},
	{
		"id": "bb0a376251dc",
		"ts": "2026-10-03T11:28:57.590Z",
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
		"liquidityUsd": 736299.63,
		"hash": "bb0a376251dce3f15a879597755176e15e22e370ac5156ba4b409a14693dabe6"
	},
	{
		"id": "98cf0407a842",
		"ts": "2026-10-03T11:28:57.780Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1811606.4,
		"hash": "98cf0407a84267f23fda58d0371c458432a6f843b566b37a4102b432ec45db21"
	},
	{
		"id": "dfab04aec182",
		"ts": "2026-10-03T11:28:57.965Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1352765.65,
		"hash": "dfab04aec18267b2ca692bd4b47baa8778e86519b5c585748ea0bae582bdef4f"
	},
	{
		"id": "cfd88958c477",
		"ts": "2026-10-03T11:28:58.144Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1604494.96,
		"hash": "cfd88958c4773af542e0ab2e86a81ddaca5e98d13b0590cb1b79b318b82c3b9f"
	},
	{
		"id": "8c850fe6430e",
		"ts": "2026-10-03T11:28:58.342Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6103825.19,
		"hash": "8c850fe6430e530ebb117b8a7cbe47443199ea34d2fef1e26e151f5340fec846"
	},
	{
		"id": "bea673457b6f",
		"ts": "2026-10-03T11:28:58.520Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11950404.43,
		"hash": "bea673457b6f0532e09fc84a84e1e920406e78648918b2d227fba2d902a86653"
	},
	{
		"id": "890ed9c06b31",
		"ts": "2026-10-03T11:28:58.709Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1173724.21,
		"hash": "890ed9c06b3108f7b8e8ff7e435c6de0e63660c6f957d4ab0ec531a11688a951"
	},
	{
		"id": "bb4a3a4f2524",
		"ts": "2026-10-03T11:28:58.886Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 168569.79,
		"hash": "bb4a3a4f25244751c2bd974e6e0d8b758a31b8fd0e02789d2538fcbdad473b84"
	},
	{
		"id": "5099cd8eb945",
		"ts": "2026-10-03T11:28:59.070Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18240807.32,
		"hash": "5099cd8eb9456f03036ffa1bba2707a4581d1b51199917234b5e37444bc75d9e"
	},
	{
		"id": "af24b8d4f3ce",
		"ts": "2026-10-03T11:28:59.258Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 467618.69,
		"hash": "af24b8d4f3ce04cf61ed5c6b2e1ebec157a900a47b66a03e21353f7e71020436"
	},
	{
		"id": "4e30d3b3a4f0",
		"ts": "2026-10-03T11:28:59.438Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2587292.99,
		"hash": "4e30d3b3a4f0b3fa8a99048e947ac7e4b9b3acbf32311c37a553f98eae8c62fb"
	},
	{
		"id": "3479d6f5cb76",
		"ts": "2026-10-03T11:28:59.614Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3591967.79,
		"hash": "3479d6f5cb76a32aeddf8adbd438ab01ad6e1f58932518d70069bc1777494f21"
	},
	{
		"id": "ea65eb78e2c4",
		"ts": "2026-10-03T05:59:18.739Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 162479540.52,
		"hash": "ea65eb78e2c482990519bf4555d0aaf827a356d532dd3411af80819fde1e2a99"
	},
	{
		"id": "3b24663adc6a",
		"ts": "2026-10-03T05:59:18.939Z",
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
		"liquidityUsd": 16427202.26,
		"hash": "3b24663adc6a825f344ed5717100694c368bcbcd47e5001bc10ed4140d6b74ac"
	},
	{
		"id": "455e484b530e",
		"ts": "2026-10-03T05:59:19.137Z",
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
		"liquidityUsd": 870085.69,
		"hash": "455e484b530e5bd0990d5eee97b16787b36d0f6d6323680956f67839faad4997"
	},
	{
		"id": "3eb845910824",
		"ts": "2026-10-03T05:59:19.338Z",
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
		"liquidityUsd": 41608220.88,
		"hash": "3eb845910824139aaeaa03efafb550c7dbb2ec1262b62fa4b12e50d6e1b703f3"
	},
	{
		"id": "31dc85831c74",
		"ts": "2026-10-03T05:59:19.525Z",
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
		"liquidityUsd": 4449405.6,
		"hash": "31dc85831c7415d1989f5433e21c26594fc54ee16eda9c399c029b74ef175875"
	},
	{
		"id": "5507d6dea387",
		"ts": "2026-10-03T05:59:19.711Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1319496.17,
		"hash": "5507d6dea387a99eabf7b38f7b53bd1359af54cd56aa3acb614d5d0f085dc2a6"
	},
	{
		"id": "6b56441a6729",
		"ts": "2026-10-03T05:59:19.899Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41608220.88,
		"hash": "6b56441a6729fa0c2fb3f32d415cb3d26b00b3c2fc4a66689f95e5e6af7cda77"
	},
	{
		"id": "0dedbb386c2e",
		"ts": "2026-10-03T05:59:20.108Z",
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
		"liquidityUsd": 734921.45,
		"hash": "0dedbb386c2eb8acbea98ee0ed15f68a6ca535eff1e3ea31dc2f12afc2a15f01"
	},
	{
		"id": "41ccfb5c3db7",
		"ts": "2026-10-03T05:59:20.292Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 29,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.42,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 6257674.72,
		"hash": "41ccfb5c3db77f53601cab1a49b0136695641de05ce2636914e4d3b27c475050"
	},
	{
		"id": "29689f60d26a",
		"ts": "2026-10-03T05:59:20.480Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1783293.18,
		"hash": "29689f60d26a19177b425573c8a7e64927963290fc2313915241d2b1293789b7"
	},
	{
		"id": "41994ee6a7b9",
		"ts": "2026-10-03T05:59:20.661Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1353803.34,
		"hash": "41994ee6a7b9d2e038e921fe627731e7560f18fc6d4a2f236babf71e78b16be7"
	},
	{
		"id": "25e407fe2d19",
		"ts": "2026-10-03T05:59:20.846Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1101772.93,
		"hash": "25e407fe2d197285595f96e12933231f7665e3588225d630f0e68fdb407924a4"
	},
	{
		"id": "8d556d1b56c9",
		"ts": "2026-10-03T05:59:21.027Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2579661.14,
		"hash": "8d556d1b56c99d1f7811fa8ad0a3ca693bf8589f0e25645ee1eb91ef09833d59"
	},
	{
		"id": "3895c9344d8c",
		"ts": "2026-10-03T05:59:21.211Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3606643.57,
		"hash": "3895c9344d8c02c40464c4f759d6eaa3b3ed2a8f0b28ea0222081764be535cc8"
	},
	{
		"id": "6a6a78d9061d",
		"ts": "2026-10-03T05:59:21.392Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18109148.15,
		"hash": "6a6a78d9061da5b763cb789864fd65cfc32d957a7c57f19b280b5b37698faaca"
	},
	{
		"id": "fdd77489a176",
		"ts": "2026-10-03T05:59:21.575Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 160248.94,
		"hash": "fdd77489a176506b653af127458f5f65cba743d0667260694e3fdb09ac69bb51"
	},
	{
		"id": "e78cda9c717c",
		"ts": "2026-10-03T05:59:21.757Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 492811.9,
		"hash": "e78cda9c717cf453e3f0864f503140cd8cf9026f3a3a4419420c58bc6dca810b"
	},
	{
		"id": "64b9663439b9",
		"ts": "2026-10-03T05:59:21.941Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1581780.06,
		"hash": "64b9663439b9212553d7b129cb8b25efaff7411e643514cd6a0e55df43b842fa"
	},
	{
		"id": "56a4c3ec774e",
		"ts": "2026-10-03T05:59:22.127Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4200065.28,
		"hash": "56a4c3ec774e2f98c7a987fd20cb58e58fa60b5baffbe9d36e65f861d12ed8af"
	},
	{
		"id": "9fffd861b53a",
		"ts": "2026-10-03T00:07:02.002Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 162101577.28,
		"hash": "9fffd861b53a35c572315ce2e846f3b070f930fba85bdeb92ede0b036b611731"
	},
	{
		"id": "17282cf93181",
		"ts": "2026-10-03T00:07:02.508Z",
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
		"liquidityUsd": 16692870.37,
		"hash": "17282cf931817a8a966c1ec1e3f8649bfa36499c42d1188fbc95993a6364b6cd"
	},
	{
		"id": "ea4308d20f72",
		"ts": "2026-10-03T00:07:02.989Z",
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
		"liquidityUsd": 868926.34,
		"hash": "ea4308d20f72a55d7006b6ba48a986d05c32ed3d5be344ddc91f8bbf5e02ed5e"
	},
	{
		"id": "4766a6a52413",
		"ts": "2026-10-03T00:07:03.266Z",
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
		"liquidityUsd": 41697059,
		"hash": "4766a6a52413d31e80abf0a81f7938524b348dede67e58872f680913dd895465"
	},
	{
		"id": "e32cbbb2c1bd",
		"ts": "2026-10-03T00:07:03.564Z",
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
		"liquidityUsd": 4414810.97,
		"hash": "e32cbbb2c1bd65f304bd9d8e678f11d7a7a26ee68d2bcbf41e2af002dcdbfa4c"
	},
	{
		"id": "0e68f010792d",
		"ts": "2026-10-03T00:07:03.887Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1305662.24,
		"hash": "0e68f010792d64f34c60397a4c049a8722bfd52da487b0ab5e5e2b88ba4a3c39"
	},
	{
		"id": "56108288ac44",
		"ts": "2026-10-03T00:07:04.179Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41697059,
		"hash": "56108288ac449477ffd2c39e621594b6e81d61ca9f3b42e49629778b77430cde"
	},
	{
		"id": "175530c26fdb",
		"ts": "2026-10-03T00:07:04.471Z",
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
		"liquidityUsd": 731795.98,
		"hash": "175530c26fdb40a3129336d9f99a87ccaf7bd38e857e88c0272232ec836ada8f"
	},
	{
		"id": "7f3c1750431a",
		"ts": "2026-10-03T00:07:04.724Z",
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
		"liquidityUsd": 5731904.89,
		"hash": "7f3c1750431a1d549998d70d02d8e9062b672a17dbdf0ffa0aed794bb91d2175"
	},
	{
		"id": "2777a5bad9f1",
		"ts": "2026-10-03T00:07:04.990Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1366648.66,
		"hash": "2777a5bad9f120cfd8d3097c040bbe0e7aa4e413bfe9070151cc6801379bee80"
	},
	{
		"id": "8e663e63f27a",
		"ts": "2026-10-03T00:07:05.226Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 1747644.93,
		"hash": "8e663e63f27ac7460633841aeb0781e53eefdfb6914cc1bc71b76d27d17b8f44"
	},
	{
		"id": "4b6e47818c99",
		"ts": "2026-10-03T00:07:05.460Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18149803.62,
		"hash": "4b6e47818c99c492158c9a05c72c1b94be985acaeaf4aecd1cc094fdaff1f0a6"
	},
	{
		"id": "7566bb285cd3",
		"ts": "2026-10-03T00:07:05.684Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3598998.1,
		"hash": "7566bb285cd380c548c7dba56b45f32785e2e718e665234826c61840dab5371f"
	},
	{
		"id": "8213cd2bca57",
		"ts": "2026-10-03T00:07:05.907Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 477200.2,
		"hash": "8213cd2bca57c9c6b3b0c9ee755d50cf8c4da15d55370f40c3c0db56472c0c87"
	},
	{
		"id": "1da2acd66d17",
		"ts": "2026-10-03T00:07:06.150Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1628420.58,
		"hash": "1da2acd66d1731e2b94fa450470b805a1aad0332142be9024fbd866dee6de8e3"
	},
	{
		"id": "9e2cd76ada67",
		"ts": "2026-10-03T00:07:06.374Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2564107.98,
		"hash": "9e2cd76ada679bad0202ee57dd88078e28c151b25cc660d0c284ef749c8ddf5a"
	},
	{
		"id": "11062701694e",
		"ts": "2026-10-03T00:07:06.609Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 159469.44,
		"hash": "11062701694e52db804f68640fb68c169dd604342d3ccae7b7e73271bda3aac6"
	},
	{
		"id": "9b55bc461de1",
		"ts": "2026-10-03T00:07:06.879Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1093013.46,
		"hash": "9b55bc461de11e66629361ceb459c56ab8448f91ab2fa4600492593acfc6576c"
	},
	{
		"id": "2f4ce7c20e4b",
		"ts": "2026-10-03T00:07:07.103Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 184285.57,
		"hash": "2f4ce7c20e4b791cb48967d24f55cef39481e10108c075929618dd6b1884f11d"
	},
	{
		"id": "dc722a3c643c",
		"ts": "2026-10-02T20:18:24.887Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 162432079.83,
		"hash": "dc722a3c643cc27950170f46d99b4142cdb86ecdec4ff150abb21f31d98a4be7"
	},
	{
		"id": "2eb3020aa602",
		"ts": "2026-10-02T20:18:25.284Z",
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
		"liquidityUsd": 16733012.33,
		"hash": "2eb3020aa6023dd57d2c1a2641309c4c36be45debfdeededc187d31b740d2433"
	},
	{
		"id": "e1bb7e9eb89f",
		"ts": "2026-10-02T20:18:25.645Z",
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
		"liquidityUsd": 868310.48,
		"hash": "e1bb7e9eb89f770fe796663476522bd35d860721e3ee0ce1f0cb81759de00472"
	},
	{
		"id": "ea4125ea1740",
		"ts": "2026-10-02T20:18:25.849Z",
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
		"liquidityUsd": 41137435.39,
		"hash": "ea4125ea17402d0db35372655c61d168753195964b76c0d44d098b0e36c7d64c"
	},
	{
		"id": "7a9ca2783ab1",
		"ts": "2026-10-02T20:18:26.062Z",
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
		"liquidityUsd": 4388295.03,
		"hash": "7a9ca2783ab14a54c0adab8315181fba339407a74534f15204922494b8ef029b"
	},
	{
		"id": "88ec10bf6181",
		"ts": "2026-10-02T20:18:26.265Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1301947.49,
		"hash": "88ec10bf61819fbf31fc65fa178345f8ca9487482a48ce2fdf6546c6c6949138"
	},
	{
		"id": "d6787e969d39",
		"ts": "2026-10-02T20:18:26.465Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41137435.39,
		"hash": "d6787e969d398524f53957b90d7cc58ad6f0eba0024dafb66f134510e4e2ea24"
	},
	{
		"id": "672a51e9648b",
		"ts": "2026-10-02T20:18:26.670Z",
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
		"liquidityUsd": 721639.9,
		"hash": "672a51e9648bd9fb569f13873bc7d3ce612e45e8af84c92f88f16f37420ed30f"
	},
	{
		"id": "104bdbb3e065",
		"ts": "2026-10-02T20:18:26.876Z",
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
		"liquidityUsd": 5381354.21,
		"hash": "104bdbb3e06599f2c96c8bb6f1385e5e00812ce01d086342ac5698856b982d19"
	},
	{
		"id": "2444ae0d4dfd",
		"ts": "2026-10-02T20:18:27.083Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1725844.49,
		"hash": "2444ae0d4dfde8c7d10c74579d5d3f29eaac04769fe73c266d472daafc137ef6"
	},
	{
		"id": "b9965fef8cec",
		"ts": "2026-10-02T20:18:27.277Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1355843.83,
		"hash": "b9965fef8cecd4be197b419bd5fd06b7fdb7035e0afa74ca65517d2bc09c234e"
	},
	{
		"id": "7d1e5070ae6e",
		"ts": "2026-10-02T20:18:27.462Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 225660.23,
		"hash": "7d1e5070ae6eb4a6a7b380b3fa17ddeffffa13342c074e6629edd272aeb40827"
	},
	{
		"id": "da8fd5f96670",
		"ts": "2026-10-02T20:18:27.656Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18237796.1,
		"hash": "da8fd5f9667051eb0a74667fc29e40c17b4e75a75dc2d73f72b04931fe6d9b5e"
	},
	{
		"id": "fdcd748c672f",
		"ts": "2026-10-02T20:18:27.852Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3560550.7,
		"hash": "fdcd748c672f938f1139a87eb28f85f25488d20560ad63547b933fcb48ca8681"
	},
	{
		"id": "f7e4e461fbd3",
		"ts": "2026-10-02T20:18:28.040Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 491163.88,
		"hash": "f7e4e461fbd3a397fb263a52b3bb3a4f194a9dd7ef50b30b7c200936a8408ff9"
	},
	{
		"id": "2d5e33495b91",
		"ts": "2026-10-02T20:18:28.224Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1673988.46,
		"hash": "2d5e33495b912df69a3f60c8ffbc9dd2107e9bb00db743a89c4faaa1d609a8d0"
	},
	{
		"id": "d5a86519720e",
		"ts": "2026-10-02T20:18:28.413Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2570817.32,
		"hash": "d5a86519720ed97867860b96ef7de9f7a73677ac8f4391addd92b0376bb02957"
	},
	{
		"id": "323f2dbe66e0",
		"ts": "2026-10-02T20:18:28.604Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 158709.13,
		"hash": "323f2dbe66e00fc43523dd55d823fbe50542453eefdbef12c4fb744b2e9e9e13"
	},
	{
		"id": "f7218291fb2e",
		"ts": "2026-10-02T20:18:28.808Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1088089,
		"hash": "f7218291fb2e55f23b0aa6e1fe375929ed9576b32469adc6cde044a78d295a1b"
	},
	{
		"id": "2eab370ce216",
		"ts": "2026-10-02T15:18:59.434Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 163636755.54,
		"hash": "2eab370ce2161851b773e90b063608472efc9a4bcd46bd202c6b74fc7a6923f8"
	},
	{
		"id": "3868d303bd12",
		"ts": "2026-10-02T15:18:59.654Z",
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
		"liquidityUsd": 14519787.89,
		"hash": "3868d303bd121856842cccbe3fac0256e5b581bdc93041a516bad93fdff7edc9"
	},
	{
		"id": "322541dc9539",
		"ts": "2026-10-02T15:18:59.872Z",
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
		"liquidityUsd": 876002.23,
		"hash": "322541dc953925380b3f5d2a0e0c362fde6e3c46bbb24cf518cfd57992457cc8"
	},
	{
		"id": "dfb1d6b54560",
		"ts": "2026-10-02T15:19:00.083Z",
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
		"liquidityUsd": 41054735.13,
		"hash": "dfb1d6b54560afed667bc9fae6baba1b54ab64c1d172965e61d7a6fb22362148"
	},
	{
		"id": "2a5335ddd396",
		"ts": "2026-10-02T15:19:00.314Z",
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
		"liquidityUsd": 4591788.23,
		"hash": "2a5335ddd39675feed4956ddb65094de3365dda2dab545fc27e587f17385a275"
	},
	{
		"id": "48cfd33aa553",
		"ts": "2026-10-02T15:19:00.526Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1349372.15,
		"hash": "48cfd33aa55364ec70d5e6fc9062f4bc20d446fb04ba8687770e19f4a2820482"
	},
	{
		"id": "4e1170213407",
		"ts": "2026-10-02T15:19:01.197Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41054737.09,
		"hash": "4e11702134070e9d84dd31b995503fc40d18c4fe06e33be11106b895a3fa0b39"
	},
	{
		"id": "b581cec50f51",
		"ts": "2026-10-02T15:19:01.409Z",
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
		"liquidityUsd": 731899.97,
		"hash": "b581cec50f51b8ad06a62273465d9fd6994614a3facf47287c6ded300d8114ac"
	},
	{
		"id": "352a20cbce4e",
		"ts": "2026-10-02T15:19:01.617Z",
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
		"liquidityUsd": 5509619.94,
		"hash": "352a20cbce4eeb6620dd4425a8280202c9779b2e7b2fabe254431fe6178e71dc"
	},
	{
		"id": "d77fdd165013",
		"ts": "2026-10-02T15:19:01.822Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1739408.74,
		"hash": "d77fdd1650134eb88002c570167cd55d9f65ed8b59e1a90ad3d0328cb23b7f54"
	},
	{
		"id": "df5f8d5f6c2b",
		"ts": "2026-10-02T15:19:02.032Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 223150.53,
		"hash": "df5f8d5f6c2bbd2f54467c5ee9f4d52a6bbb83bd2a42f3e2a734b49740019ff9"
	},
	{
		"id": "03dba6b4eb13",
		"ts": "2026-10-02T15:19:02.247Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1753758.89,
		"hash": "03dba6b4eb13c3e541b7d30294193bdd3b67ea853bd5ab1c94f90d2ab85fe9a1"
	},
	{
		"id": "596211273565",
		"ts": "2026-10-02T15:19:02.476Z",
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
		"liquidityUsd": 18760051.61,
		"hash": "596211273565d23c37c9119d437c4d64c83bfed17a72aa4ec7d983f9a7e1a759"
	},
	{
		"id": "45d2742e05b2",
		"ts": "2026-10-02T15:19:02.685Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 544708.39,
		"hash": "45d2742e05b2e29cea7bcbb89969ad040867a31838e57d92cffb9f0c93cff043"
	},
	{
		"id": "df006eb69932",
		"ts": "2026-10-02T15:19:02.880Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1204772.98,
		"hash": "df006eb699321d30dfe4f2a8c119688a7639e78b8a3adc72d26054d07f2a6339"
	},
	{
		"id": "b4df4cbfa509",
		"ts": "2026-10-02T15:19:03.081Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3812485.11,
		"hash": "b4df4cbfa509e64bd15f2ead0dbd1c902667ee1f6e2c658e444e464fd6b6a557"
	},
	{
		"id": "f042d81a2350",
		"ts": "2026-10-02T15:19:03.312Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2631675.39,
		"hash": "f042d81a23507d4a743622a7b7de7414048ebbbf5338d198e4fd1990ea5051e8"
	},
	{
		"id": "6387b992304a",
		"ts": "2026-10-02T15:19:03.508Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1106483.81,
		"hash": "6387b992304a34033bb6040317e500140d9fa6da2a870bf5aa68fc5315354f67"
	},
	{
		"id": "3a066cb17c25",
		"ts": "2026-10-02T15:19:03.702Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 164195.73,
		"hash": "3a066cb17c253e085f3b0a6a3dd71cf667a6a1f687751fdf63dcd8c76d08464f"
	},
	{
		"id": "bafd39c771f5",
		"ts": "2026-10-02T08:03:53.681Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 164063103.65,
		"hash": "bafd39c771f5d0d261e4389b785894da23a635e79e605a805ef0ca9e5ec551df"
	},
	{
		"id": "1f27e821584d",
		"ts": "2026-10-02T08:03:53.922Z",
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
		"liquidityUsd": 16635562.08,
		"hash": "1f27e821584db540e1da8a69cafeb4bde65d02c0c8b730253031e26c714439bc"
	},
	{
		"id": "b5be8552921a",
		"ts": "2026-10-02T08:03:54.158Z",
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
		"liquidityUsd": 878056.41,
		"hash": "b5be8552921a7340d461bf2873986a6abaef6dc87540a9082aef870426e9a721"
	},
	{
		"id": "0f7173fcc23a",
		"ts": "2026-10-02T08:03:54.422Z",
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
		"liquidityUsd": 41149937.68,
		"hash": "0f7173fcc23a4101c5a73408fa7283df9f1ef8ff97892e4aa4c1bf56d150b620"
	},
	{
		"id": "d0fc4286f28e",
		"ts": "2026-10-02T08:03:54.660Z",
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
		"liquidityUsd": 4657369.89,
		"hash": "d0fc4286f28e60c730413885c86434f806281f483dfcf13a1efa841cde4f30fd"
	},
	{
		"id": "5dccf52d8bad",
		"ts": "2026-10-02T08:03:54.900Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1347782.15,
		"hash": "5dccf52d8bad2a66a75b3661bf638a5d8efa40da042e7a1dcc5f875e002141de"
	},
	{
		"id": "ae915e09e08b",
		"ts": "2026-10-02T08:03:55.138Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41180961.52,
		"hash": "ae915e09e08bfc008dac6969cda42e4ab6461142942b0c4dea7b7506e9000793"
	},
	{
		"id": "bdbb97fbbf33",
		"ts": "2026-10-02T08:03:55.376Z",
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
		"liquidityUsd": 2192192.02,
		"hash": "bdbb97fbbf33d1625df1f24095ade1c6cc1b917dce1fa48bc485096b982046b6"
	},
	{
		"id": "a6188d4e746c",
		"ts": "2026-10-02T08:03:55.611Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1775396,
		"hash": "a6188d4e746cc9a358dcddb95a14f8d2d9b2093699a5b7c452eb18fc5894fd85"
	},
	{
		"id": "d7b16b0c1a70",
		"ts": "2026-10-02T08:03:55.847Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 242895.98,
		"hash": "d7b16b0c1a70882d4bd2a267a76dd697f1bfdb55c5e7bb299933abed35bae41a"
	},
	{
		"id": "e418e20fd942",
		"ts": "2026-10-02T08:03:56.067Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1234209.17,
		"hash": "e418e20fd94226eb0b28a653d88f1c7beea6daabdd23c8ef437c04709b489c8c"
	},
	{
		"id": "54ea671d795c",
		"ts": "2026-10-02T08:03:56.285Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 300301.95,
		"hash": "54ea671d795c0aff84e62b0f982b8a7b675b2b64ebbb3778d0589c12e161375e"
	},
	{
		"id": "4fa03ab037c0",
		"ts": "2026-10-02T08:03:56.506Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 489944.38,
		"hash": "4fa03ab037c0a5f60025c537c29001146325aec085f6fdf022b59b803620c0bf"
	},
	{
		"id": "c4261ae0eba0",
		"ts": "2026-10-02T08:03:56.725Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1799468.6,
		"hash": "c4261ae0eba0944ea6eb3f4c041b826080d4bed758664aae51c7dab497860d0e"
	},
	{
		"id": "a68459952ed1",
		"ts": "2026-10-02T08:03:56.947Z",
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
		"liquidityUsd": 400313.31,
		"hash": "a68459952ed101b747870ab77bb6f56276f78b423cf42cc4bd9dba17b531582f"
	},
	{
		"id": "7960878f9112",
		"ts": "2026-10-02T08:03:57.163Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6105725.93,
		"hash": "7960878f9112191d620f91a9ad006fc4d7a4dd8c6869c313bfc1419eb2e4f23d"
	},
	{
		"id": "0d3fbc5d6587",
		"ts": "2026-10-02T08:03:57.382Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3879719.78,
		"hash": "0d3fbc5d6587a7e2b2eb56bdbcdcdb98c979ec8e02d8a620aceb4982d5a62f9e"
	},
	{
		"id": "57e4d98ab902",
		"ts": "2026-10-02T08:03:57.608Z",
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
		"liquidityUsd": 544138.72,
		"hash": "57e4d98ab90270b78038bdd2d0fbaa8e79202f9f368a329726ba76a15d3bf587"
	},
	{
		"id": "421f28ce5b67",
		"ts": "2026-10-02T08:03:57.823Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 623846.06,
		"hash": "421f28ce5b674247f4eff80bcb502fef59dd3d4b7686ffb77feaa3388c4f4aba"
	},
	{
		"id": "6128c92f9c30",
		"ts": "2026-10-02T01:57:25.083Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 163186136.22,
		"hash": "6128c92f9c30522cc89aa34edc23f8190df619e882d6ec5a42db2160da1461a2"
	},
	{
		"id": "15f02e0badc3",
		"ts": "2026-10-02T01:57:25.562Z",
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
		"liquidityUsd": 13974100.47,
		"hash": "15f02e0badc37316f53a6278ab687673d41c6d6ab702278abffabeea1f265721"
	},
	{
		"id": "c0e38139c0a1",
		"ts": "2026-10-02T01:57:25.829Z",
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
		"liquidityUsd": 873369.95,
		"hash": "c0e38139c0a1338382bc67fee221ef2fe69deb29a6737151b5b7e48853355208"
	},
	{
		"id": "9adc60968896",
		"ts": "2026-10-02T01:57:26.105Z",
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
		"liquidityUsd": 41220607.93,
		"hash": "9adc609688960b070e65986badf94c726ae53f6cef1cc9e7b199b68c94cfda34"
	},
	{
		"id": "33e1baee784d",
		"ts": "2026-10-02T01:57:26.380Z",
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
		"liquidityUsd": 4564611.22,
		"hash": "33e1baee784d2448e12c1456723a554d9709ec4432711000cf5a93a2c820a65f"
	},
	{
		"id": "ea531baaab3b",
		"ts": "2026-10-02T01:57:26.641Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1298078.08,
		"hash": "ea531baaab3b9d1e1b1fda57eb70c5a5279fd650fc891b205791fb419353e868"
	},
	{
		"id": "6a48d950a75e",
		"ts": "2026-10-02T01:57:26.896Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41220607.93,
		"hash": "6a48d950a75e12b72ca948050dd589344e243b623fa5fd43a8f6a2c5389fb5a8"
	},
	{
		"id": "e40d07c2a299",
		"ts": "2026-10-02T01:57:27.140Z",
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
		"liquidityUsd": 2136886.4,
		"hash": "e40d07c2a2994e8e89aba40dc763ff586aa196156816566b20bb4d1dc6a844ed"
	},
	{
		"id": "3440b67ebdfe",
		"ts": "2026-10-02T01:57:27.396Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1710911.61,
		"hash": "3440b67ebdfed9d3606d17eca6c9f5c4998134fbb7d3b7c299d0817d7dc3d6d4"
	},
	{
		"id": "72f898a696fc",
		"ts": "2026-10-02T01:57:27.647Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 231915.16,
		"hash": "72f898a696fc13cff2f328bb4a6f079b2dc72c61cc559e01b940ff56fff1994a"
	},
	{
		"id": "c3253020a7d6",
		"ts": "2026-10-02T01:57:27.872Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 307046.71,
		"hash": "c3253020a7d6a44addf7a85e1bdc2f4a096cb18c5ecbcc0e1140a47f253288d8"
	},
	{
		"id": "584a32697e83",
		"ts": "2026-10-02T01:57:28.108Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3713262.99,
		"hash": "584a32697e83eb3de9a6856d824b118647cc1e7282b6eb17f1bdf2cb086927da"
	},
	{
		"id": "366e6160d32c",
		"ts": "2026-10-02T01:57:28.331Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1185314.89,
		"hash": "366e6160d32cd9053f477fed328e61d0a470ea0eea4abd8ae669b331dadd540f"
	},
	{
		"id": "2822a6e9a0e7",
		"ts": "2026-10-02T01:57:28.576Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1840434.08,
		"hash": "2822a6e9a0e704c59a477754fd15b12485188bee23190eae3c3dc2fc8888270d"
	},
	{
		"id": "8d433fe235f9",
		"ts": "2026-10-02T01:57:28.811Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 500393.75,
		"hash": "8d433fe235f9dcafed18b03c5790aafa320a24af61313e22464700d02ed6de9d"
	},
	{
		"id": "484c2d6c503e",
		"ts": "2026-10-02T01:57:29.033Z",
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
		"liquidityUsd": 409771.45,
		"hash": "484c2d6c503e796039a228443aa6f2dbe469235e5e38552b44b024dd7906cc32"
	},
	{
		"id": "22a996a03d36",
		"ts": "2026-10-02T01:57:29.279Z",
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
		"liquidityUsd": 526014.82,
		"hash": "22a996a03d36719f59da6665d600a5e3301a998821c9d1afab9891c6c4c11690"
	},
	{
		"id": "9956c1fdac9f",
		"ts": "2026-10-02T01:57:29.513Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 688345.47,
		"hash": "9956c1fdac9f07d89030435dee6b957ed260d68bf513ab5e4d65e83941a9883a"
	},
	{
		"id": "02e47013b5d6",
		"ts": "2026-10-02T01:57:29.735Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 17893898.16,
		"hash": "02e47013b5d6105d310742f0fa0d46e6d377922f9918f8059f8f20262dd67d0d"
	},
	{
		"id": "0dd444b1e34c",
		"ts": "2026-10-01T22:17:31.418Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 162747026.76,
		"hash": "0dd444b1e34c433f10edb3e3e595b92a29805e6b78f15c00ca5ed75910fc4e24"
	},
	{
		"id": "22f4c4c1bbd0",
		"ts": "2026-10-01T22:17:31.723Z",
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
		"liquidityUsd": 16788858.09,
		"hash": "22f4c4c1bbd099c1fff9dd75f2182af9e87a023493dd3523ea199a5225c4d2ee"
	},
	{
		"id": "1e16595ef4ca",
		"ts": "2026-10-01T22:17:31.998Z",
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
		"liquidityUsd": 868474.82,
		"hash": "1e16595ef4ca433d19ea26111dbec5c55f227539bad2502f66ea069cab0c1dae"
	},
	{
		"id": "8a67b06683e2",
		"ts": "2026-10-01T22:17:32.284Z",
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
		"liquidityUsd": 40964696.68,
		"hash": "8a67b06683e2a770f5ce18df22029b7fb5457c2271111a2b87abc107b6932570"
	},
	{
		"id": "1aedd15fa4d7",
		"ts": "2026-10-01T22:17:32.559Z",
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
		"liquidityUsd": 4542807.23,
		"hash": "1aedd15fa4d77281611e847bf6a7e5b1b5789648388620cf3925f66560d14345"
	},
	{
		"id": "37f52153de9c",
		"ts": "2026-10-01T22:17:32.832Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1299511.8,
		"hash": "37f52153de9c1909e87ab4552a30a5e2affc6e39956eb6dca2876524c4379c33"
	},
	{
		"id": "1a81c16e6045",
		"ts": "2026-10-01T22:17:33.085Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 40964696.68,
		"hash": "1a81c16e6045ac7abda0cffdd140a2511b1df5c923818d4633b8a966bb4ccb9e"
	},
	{
		"id": "79706762f697",
		"ts": "2026-10-01T22:17:33.360Z",
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
		"liquidityUsd": 1923435.91,
		"hash": "79706762f69797fc4dd28e8424dcc8e21ef9589797a3ff0416cb90fec27f2c98"
	},
	{
		"id": "44a10e5fdf19",
		"ts": "2026-10-01T22:17:33.625Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1737784.72,
		"hash": "44a10e5fdf19c3092a394de5900e4a5e34a312101d338ad090783e1e6e3e6300"
	},
	{
		"id": "931c7a7e7089",
		"ts": "2026-10-01T22:17:33.871Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 347125.86,
		"hash": "931c7a7e7089caa7e723bbe40855a8cb7c345a71014e6d85cee193c09a5b3d58"
	},
	{
		"id": "426b1dc026b8",
		"ts": "2026-10-01T22:17:34.109Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3765040.53,
		"hash": "426b1dc026b8d37d5d932404f580d7b5b470d140f739f9dc8099fed4f13d36c5"
	},
	{
		"id": "8c1606f746bb",
		"ts": "2026-10-01T22:17:34.348Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 242856.02,
		"hash": "8c1606f746bbb35acc43a508c73ad99b1426124c9a073c1e476e394598513c47"
	},
	{
		"id": "1c693703b37d",
		"ts": "2026-10-01T22:17:34.581Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1205660.27,
		"hash": "1c693703b37dd6a814076ccd7c765869f2dfb59c06412150f82f5fad155e33b7"
	},
	{
		"id": "abea3c2ff6c3",
		"ts": "2026-10-01T22:17:34.815Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1757382.21,
		"hash": "abea3c2ff6c306880b21cd7b19338bc9844ed1a6701c871aa1f75eb0104fa6d0"
	},
	{
		"id": "60b0914c60e1",
		"ts": "2026-10-01T22:17:35.049Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 498975.89,
		"hash": "60b0914c60e19d7483a8b907f9669af11a53ba0d7327a2c0ac788e1061914282"
	},
	{
		"id": "94fbeb87f984",
		"ts": "2026-10-01T22:17:35.267Z",
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
		"liquidityUsd": 382843.19,
		"hash": "94fbeb87f984fe121c5453fdfcdb8216ad277dc65f1b55d5891b19091d361906"
	},
	{
		"id": "1f9d7c00058d",
		"ts": "2026-10-01T22:17:35.497Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 182246.51,
		"hash": "1f9d7c00058d4acbf394c808ffbf97f7830356100a447136d2291125622eaeb0"
	},
	{
		"id": "33a749b7b2c5",
		"ts": "2026-10-01T22:17:35.730Z",
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
		"liquidityUsd": 540049.87,
		"hash": "33a749b7b2c59d29e0281f70805b2ae1b47f0d0e1b9b0a6eb9a4f2baf17ffd56"
	},
	{
		"id": "01602f5eb331",
		"ts": "2026-10-01T22:17:35.958Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 687673.19,
		"hash": "01602f5eb3318a4b5dc724486baf462aa2dbfc68217920fb6bcd8713e984b962"
	},
	{
		"id": "028f6de41e25",
		"ts": "2026-10-01T17:15:08.915Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 162437700.75,
		"hash": "028f6de41e25c0cb61a22c6674a21c2bf49f0885de354ebc3d38e1fc43b4654b"
	},
	{
		"id": "ab710145bc43",
		"ts": "2026-10-01T17:15:09.319Z",
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
		"liquidityUsd": 16808859.88,
		"hash": "ab710145bc43c11e011ad0b0cd43f8a0b182c0192bb2274ac91b1aa5ca9204e5"
	},
	{
		"id": "5997b4965507",
		"ts": "2026-10-01T17:15:09.565Z",
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
		"liquidityUsd": 869716.36,
		"hash": "5997b4965507c60073471cfbcd93194ad005cce2e75fb56272085d1bd65c9ed4"
	},
	{
		"id": "c6280dc716ec",
		"ts": "2026-10-01T17:15:09.795Z",
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
		"liquidityUsd": 40846678.6,
		"hash": "c6280dc716ec7edc25666926a7d6212a864669b2a02b96f9280325ebb0e8ac36"
	},
	{
		"id": "720b46fdec6a",
		"ts": "2026-10-01T17:15:10.021Z",
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
		"liquidityUsd": 4517075.45,
		"hash": "720b46fdec6acd7704632e9d0358a35c886e14ae3c253058ea94e5c39e2a2e07"
	},
	{
		"id": "b5e6b68ded88",
		"ts": "2026-10-01T17:15:10.255Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1304775.31,
		"hash": "b5e6b68ded889bcc17fef0b28342afdc4c9fd4325e73c68d58f2b0e59bb0c061"
	},
	{
		"id": "bc9531c68cb5",
		"ts": "2026-10-01T17:15:10.498Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 40846678.6,
		"hash": "bc9531c68cb5e022ac8b53fe28a46b5947a23441d980aa6bf4cc144bf723f16d"
	},
	{
		"id": "c142a46c3c2e",
		"ts": "2026-10-01T17:15:10.732Z",
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
		"liquidityUsd": 2113586.19,
		"hash": "c142a46c3c2e7e1f2b481b4ad3ebb0dd36c091c7e3c4017b4fd7d3884c3a4f3b"
	},
	{
		"id": "2f30f7511adc",
		"ts": "2026-10-01T17:15:10.966Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1734373.02,
		"hash": "2f30f7511adca248c7c54956a63fb4215efa35d2a8f43469692fa3968f7a1267"
	},
	{
		"id": "f3133199144e",
		"ts": "2026-10-01T17:15:11.180Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1807392.19,
		"hash": "f3133199144e455832780780ba81ff912c15a9a43ce938164317c29e786a23d1"
	}
]
