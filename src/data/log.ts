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
	"updatedAt": "2026-10-27T19:11:10.957Z",
	"tokensScored": 21595,
	"verdictsIssued": 21595,
	"safe": 18418,
	"risky": 1517,
	"likelyRug": 1660,
	"ticks": 1217
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "9b438bc6953a",
		"ts": "2026-10-27T19:11:06.247Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 157653080.12,
		"hash": "9b438bc6953a0b92593ef4f385a899b775b46dc076dfc1c30db978ee991ca56e"
	},
	{
		"id": "86133c0856d0",
		"ts": "2026-10-27T19:11:06.510Z",
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
		"liquidityUsd": 16603347.95,
		"hash": "86133c0856d0ba16560328d1e8617e0ff16448c479fb30d81c1bb8a5370bd94e"
	},
	{
		"id": "f1a8a93927cd",
		"ts": "2026-10-27T19:11:06.774Z",
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
		"liquidityUsd": 260937.63,
		"hash": "f1a8a93927cda6b34115103cba7f02bf6c4ae8fbfb4ecd022a92352e2b0ffb7b"
	},
	{
		"id": "79f695402457",
		"ts": "2026-10-27T19:11:07.040Z",
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
		"liquidityUsd": 6999880.52,
		"hash": "79f6954024573248a03ccd934bbc11a556bd09a929d63841cbbc797baa2b8fda"
	},
	{
		"id": "b9a1bed064d8",
		"ts": "2026-10-27T19:11:07.300Z",
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
		"liquidityUsd": 2146929.07,
		"hash": "b9a1bed064d8fa466da3c5eeb5e68711147c5ba57e3b538a1de94757016a203d"
	},
	{
		"id": "78146ce84523",
		"ts": "2026-10-27T19:11:07.565Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1116048.09,
		"hash": "78146ce8452302c532ad269b029a58a9f9f25428ce859c502b952651ebf64168"
	},
	{
		"id": "3fec6faad010",
		"ts": "2026-10-27T19:11:07.828Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6999880.52,
		"hash": "3fec6faad01004894e0848742e0674ea3949c4186a92a8197e4ba3440937841b"
	},
	{
		"id": "4249e70e4f46",
		"ts": "2026-10-27T19:11:08.086Z",
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
		"liquidityUsd": 1722547.34,
		"hash": "4249e70e4f46047849442c99a8461e1b1405904602792c9d3ba21594d8273ace"
	},
	{
		"id": "aa1675539559",
		"ts": "2026-10-27T19:11:08.344Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h"
		],
		"liquidityUsd": 261462.23,
		"hash": "aa16755395592a5e74005bb661350192fe9f41edbfc488eb3ccaa31e5b3c4c9a"
	},
	{
		"id": "0566a1c16875",
		"ts": "2026-10-27T19:11:08.603Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2476295.44,
		"hash": "0566a1c16875b1598a76891584437dbae74e67fcc02bd84933fbf50691e7352d"
	},
	{
		"id": "3228c5f62c6e",
		"ts": "2026-10-27T19:11:08.833Z",
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
		"liquidityUsd": 1826395.59,
		"hash": "3228c5f62c6eb9570117af631a4190cde996a441aae345c1fe9f67a45286d087"
	},
	{
		"id": "aabd893274fd",
		"ts": "2026-10-27T19:11:09.072Z",
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
		"liquidityUsd": 476495.27,
		"hash": "aabd893274fd1407b8b3ba1fb04893696417f2db34035f902190e4f4b684ed7a"
	},
	{
		"id": "16460e10fc81",
		"ts": "2026-10-27T19:11:09.309Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4645947.42,
		"hash": "16460e10fc81ef3e694e2fed7e96cf5f5bb9c9d766a852b8eff9d4324743fedc"
	},
	{
		"id": "7a29972f4476",
		"ts": "2026-10-27T19:11:09.538Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1140501.76,
		"hash": "7a29972f44766816c3bd6dd24b5443b80e19a2682d425b75ac1ad8d5d279f8a2"
	},
	{
		"id": "a1f3a526746e",
		"ts": "2026-10-27T19:11:09.775Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 530162.48,
		"hash": "a1f3a526746ea33d32309c9a878723481346cf5742c2adccb43f376cfe925030"
	},
	{
		"id": "1ba0581e7648",
		"ts": "2026-10-27T19:11:10.011Z",
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
		"liquidityUsd": 8669554.9,
		"hash": "1ba0581e7648b8b18af3fbdce669df23bbbbd87f6f83f2e0bb70854a376ddf6b"
	},
	{
		"id": "b2cdea07da17",
		"ts": "2026-10-27T19:11:10.238Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3728504.51,
		"hash": "b2cdea07da17e8b924ebc90036b2809027d48758e072c7503e2fd4c63140589b"
	},
	{
		"id": "118c5c3fb184",
		"ts": "2026-10-27T19:11:10.477Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 551098.44,
		"hash": "118c5c3fb18470418486d582bcdf404372a5d8fb9be0e1f23e8c57e3e06d2fdc"
	},
	{
		"id": "540746753bc9",
		"ts": "2026-10-27T19:11:10.734Z",
		"symbol": "Paper",
		"token": "0xF5954f33798529917c4940317cAdA852f00C9B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10639275.74,
		"hash": "540746753bc96132ef25aa96e71ac0c63f81d5017fe276acc8eef8c486ed44ea"
	},
	{
		"id": "25b91356abc7",
		"ts": "2026-10-27T19:11:10.957Z",
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
		"liquidityUsd": 3060312.26,
		"hash": "25b91356abc7fdb316f9cb6ac3e73ceacf7c4ac50db506a461f759a05a41c4bb"
	},
	{
		"id": "2fd33ddff693",
		"ts": "2026-10-27T13:54:02.307Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156481639.96,
		"hash": "2fd33ddff6936e16908015717ea1c760c9dc8a372307a1e22cedb1fb0fa3e24f"
	},
	{
		"id": "7aa5a059ec7d",
		"ts": "2026-10-27T13:54:02.567Z",
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
		"liquidityUsd": 16304236.82,
		"hash": "7aa5a059ec7d58d104d66c466ae0ddb52fceea74b12a16cc72950ca879c26880"
	},
	{
		"id": "87e0353d4791",
		"ts": "2026-10-27T13:54:02.821Z",
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
		"liquidityUsd": 257862.43,
		"hash": "87e0353d4791da16db9f9adb818743d775993c290e7040c92f28716a6dc1408f"
	},
	{
		"id": "96bf6a23d7b0",
		"ts": "2026-10-27T13:54:03.080Z",
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
		"liquidityUsd": 7014660.79,
		"hash": "96bf6a23d7b0f2dcde6814f7264242b0b25c012e47d5714c00676e957e6c569b"
	},
	{
		"id": "234f0c8fdb0d",
		"ts": "2026-10-27T13:54:03.354Z",
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
		"liquidityUsd": 2119498.1,
		"hash": "234f0c8fdb0dca28537f8cfeb8b828758996ff0a3039613e63b2c383fcde44a4"
	},
	{
		"id": "e58fbd4768a8",
		"ts": "2026-10-27T13:54:03.602Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1101871.86,
		"hash": "e58fbd4768a899c6284a81f030ae4695b5f0266266917ed851cd6ad4226d17ff"
	},
	{
		"id": "ed4eb9cf0e20",
		"ts": "2026-10-27T13:54:03.857Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 7013030.98,
		"hash": "ed4eb9cf0e2099a21c0af66cc9c5277919c7f8777a8a793403ffdbfd474978d4"
	},
	{
		"id": "0a3e99453f0c",
		"ts": "2026-10-27T13:54:04.111Z",
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
		"liquidityUsd": 1708313.92,
		"hash": "0a3e99453f0c02407e71a1b0b29723014c290322b5fb95a5c3fc26fa4671b568"
	},
	{
		"id": "0674353f5638",
		"ts": "2026-10-27T13:54:04.378Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2470294.64,
		"hash": "0674353f56382a99cddabec74916746809955b1125f3b694f825a7a290778123"
	},
	{
		"id": "9e3ba1c9144f",
		"ts": "2026-10-27T13:54:04.627Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 180816.41,
		"hash": "9e3ba1c9144fdb7909b3200d01dea81d7d87fe61e0e36a41afe278a7bd66e61a"
	},
	{
		"id": "91e692048b9b",
		"ts": "2026-10-27T13:54:04.850Z",
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
		"liquidityUsd": 1830095.15,
		"hash": "91e692048b9b65c47cde25e9ea200162873683bf539dc606099ebbe875ad5d10"
	},
	{
		"id": "c7ae89cfb225",
		"ts": "2026-10-27T13:54:05.079Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1147112.43,
		"hash": "c7ae89cfb22500408d1df4a5668221fc55aba1f0434d3b77e99f09b36726cd45"
	},
	{
		"id": "be2a8cac8029",
		"ts": "2026-10-27T13:54:05.303Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4758234.04,
		"hash": "be2a8cac8029ec619d36c84201451dc07e66fda1bcf9c4412bd8c0506ff0a432"
	},
	{
		"id": "0d4dba834647",
		"ts": "2026-10-27T13:54:05.529Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 524384.4,
		"hash": "0d4dba8346471bb172236d4283a5d392edccb2e2d64fdbc42c92a65ca053a077"
	},
	{
		"id": "dbe11db89a9f",
		"ts": "2026-10-27T13:54:05.807Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3696731.43,
		"hash": "dbe11db89a9ff4d853cd427894aca41a2ceeb0e9d4c463e84b1161411c3a6b3a"
	},
	{
		"id": "b5a54441d5e4",
		"ts": "2026-10-27T13:54:06.035Z",
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
		"liquidityUsd": 8548490.44,
		"hash": "b5a54441d5e44583c749aaa8b8aa0c08fb0630212e2d81fe7c51ef45944a5975"
	},
	{
		"id": "2478377903d1",
		"ts": "2026-10-27T13:54:06.262Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 540704.74,
		"hash": "2478377903d1a216b3cd3da1d28672ddef20c4e9be6f7c0196e023824022d3c9"
	},
	{
		"id": "e25ff7a1b4a7",
		"ts": "2026-10-27T13:54:06.488Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 1215916.06,
		"hash": "e25ff7a1b4a70a8ed72e19234b2dc1dc8e55bf33881d0fc82dab32f13e68b3ea"
	},
	{
		"id": "dc4af9df8d81",
		"ts": "2026-10-27T13:54:06.713Z",
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
		"liquidityUsd": 3043885.68,
		"hash": "dc4af9df8d816420e707438d60629babbfee9d713c5ad62e9f9c26b60a986657"
	},
	{
		"id": "38ccc89c4025",
		"ts": "2026-10-27T07:13:37.251Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 155378363.55,
		"hash": "38ccc89c40251ba8ca41495039b3ad812390c42322fd7eb39a6bdcc4e122a76e"
	},
	{
		"id": "38aa935da606",
		"ts": "2026-10-27T07:13:37.961Z",
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
		"liquidityUsd": 16034744.92,
		"hash": "38aa935da606c8805dbe9fb93d4ffaabb97eb0c25068fcd70167f4a40a0bfbae"
	},
	{
		"id": "fd58f0a5a1de",
		"ts": "2026-10-27T07:13:38.227Z",
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
		"liquidityUsd": 253366.78,
		"hash": "fd58f0a5a1de8ac7e1f1179aa537e86e7ce157ae9a7393ecb741d1ffa1df007d"
	},
	{
		"id": "7c5f54f9073e",
		"ts": "2026-10-27T07:13:38.504Z",
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
		"liquidityUsd": 6940122.16,
		"hash": "7c5f54f9073e66b92e4e2024334f7815105a4828adcc8283bbd8a6253f002a4b"
	},
	{
		"id": "e8459ded8974",
		"ts": "2026-10-27T07:13:38.778Z",
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
		"liquidityUsd": 2008519.51,
		"hash": "e8459ded897465eaeffd3bda3411a380b2bbea7dcf4a5b67f24e9a2928d2751b"
	},
	{
		"id": "8c3a7f992546",
		"ts": "2026-10-27T07:13:39.037Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1095396.54,
		"hash": "8c3a7f9925464ceae015e4375e8e69b0a13376b2398b108444bbc0534085b453"
	},
	{
		"id": "fbd1dcd57393",
		"ts": "2026-10-27T07:13:39.298Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2467942.52,
		"hash": "fbd1dcd57393a2e45759c61b051fd5719fe54eaac0a6fc18b249ae97b42dff55"
	},
	{
		"id": "8d543e3ead69",
		"ts": "2026-10-27T07:13:39.565Z",
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
		"liquidityUsd": 1980834.86,
		"hash": "8d543e3ead69fc68f77a9a509c21ee3a55b26550940a20f5ebe39255a5c282c9"
	},
	{
		"id": "2fbf8aefa9cc",
		"ts": "2026-10-27T07:13:39.857Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2467942.52,
		"hash": "2fbf8aefa9cc5175c56e50af56fece013c5ec6197aa83c8ee4d3a3322ea67728"
	},
	{
		"id": "8c3daa8b2da8",
		"ts": "2026-10-27T07:13:40.116Z",
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
		"liquidityUsd": 1849281.82,
		"hash": "8c3daa8b2da874eaba8cb23b9479b31c7aac39a4864a54513a734ce102cb8e48"
	},
	{
		"id": "2ee8dde7616f",
		"ts": "2026-10-27T07:13:40.362Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1131884.43,
		"hash": "2ee8dde7616fa8a187f6de135a9809e6790f64aa6a9534dd74d24c715bc334b6"
	},
	{
		"id": "c96dfd250649",
		"ts": "2026-10-27T07:13:40.612Z",
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
		"liquidityUsd": 3003934.25,
		"hash": "c96dfd250649153e894e6c538a53a9781e93d9651254809ae5eff8ce14cb28d8"
	},
	{
		"id": "7eb0cd9fdf11",
		"ts": "2026-10-27T07:13:40.865Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3632496.13,
		"hash": "7eb0cd9fdf119d91c78ca3fc9a2a433919d70ba6811e74c00bdedcc74b5f515a"
	},
	{
		"id": "985022f4254a",
		"ts": "2026-10-27T07:13:41.127Z",
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
		"liquidityUsd": 8352894.95,
		"hash": "985022f4254a9f95ac012abd1b6064396c1b7c4acd67dd61f2d0261f5f731acf"
	},
	{
		"id": "8c62a1bbe8ba",
		"ts": "2026-10-27T07:13:41.372Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4096025.6,
		"hash": "8c62a1bbe8ba077de6098664733710240e06b73703dbada47e346059632838de"
	},
	{
		"id": "5c633eaa8eee",
		"ts": "2026-10-27T07:13:41.621Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 149025.03,
		"hash": "5c633eaa8eee144e41c3f36a5d0ec04ffe9baf124c7e11462aeb247ecaec019e"
	},
	{
		"id": "dfe25fc673a1",
		"ts": "2026-10-27T07:13:41.863Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 541945.18,
		"hash": "dfe25fc673a191cb0eb8e8e9c1063d709398f2d6607a136c075b2daa9d303532"
	},
	{
		"id": "03643c00e276",
		"ts": "2026-10-27T07:13:42.108Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 175955.67,
		"hash": "03643c00e276aad4c144f80e42dceda38974153f14a0182b8677248ba23d4963"
	},
	{
		"id": "42fa5d3cb96c",
		"ts": "2026-10-27T07:13:42.353Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 677735.14,
		"hash": "42fa5d3cb96cc688830da1d7ba8559182af01757917d360c7ef6938366af2f17"
	},
	{
		"id": "1c3f7f14d5e9",
		"ts": "2026-10-27T01:04:03.552Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156381454.22,
		"hash": "1c3f7f14d5e905a573368b1338758914b66d8b0dcade029b556b507bbf78fe1b"
	},
	{
		"id": "24da61564689",
		"ts": "2026-10-27T01:04:03.843Z",
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
		"liquidityUsd": 16077706.23,
		"hash": "24da615646895cc020e827d2b1ff1078fb20e24bf30501723077ee2c5be92a12"
	},
	{
		"id": "56321d670195",
		"ts": "2026-10-27T01:04:04.123Z",
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
		"liquidityUsd": 254304.9,
		"hash": "56321d6701955f5e460b3e27d3cdf068c840a85bd29bd1e8b0cdcb20761815f8"
	},
	{
		"id": "689c691af161",
		"ts": "2026-10-27T01:04:04.432Z",
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
		"liquidityUsd": 7033584.6,
		"hash": "689c691af161c8e6a4e49a86ca0d29e33598418b768389e482d0b1a90a83bf24"
	},
	{
		"id": "c43866c9e57d",
		"ts": "2026-10-27T01:04:04.726Z",
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
		"liquidityUsd": 2071046.74,
		"hash": "c43866c9e57d35427a5b24dd7de5fdcc862ad1842602c149f55ccd310935f17b"
	},
	{
		"id": "1aa2ec5dfa80",
		"ts": "2026-10-27T01:04:05.014Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1109040.13,
		"hash": "1aa2ec5dfa80a4c325302ea23895492d7dc3671a5972c5d6bcf4ca6a419aea7a"
	},
	{
		"id": "b59b5b0c20c2",
		"ts": "2026-10-27T01:04:05.289Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2466717.39,
		"hash": "b59b5b0c20c28c7b96de93229344e04f8c555a9e27d6b508e6c1ce71313ee7d1"
	},
	{
		"id": "cb6d43b2495c",
		"ts": "2026-10-27T01:04:05.566Z",
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
		"liquidityUsd": 1829840.74,
		"hash": "cb6d43b2495c7dd71a339c1fbec9c6231c4d9fcafc5c87a8bed3e6b30e517243"
	},
	{
		"id": "efeb8736f503",
		"ts": "2026-10-27T01:04:05.839Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2466717.39,
		"hash": "efeb8736f503b8e30e22cb85a473a04878e40aceb8323a6c6d90ef446751359a"
	},
	{
		"id": "b99293e4deee",
		"ts": "2026-10-27T01:04:06.109Z",
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
		"liquidityUsd": 1829046.44,
		"hash": "b99293e4deee57484fecf6d01875b94b2b08f4ee2a70138834296ef6caea89e5"
	},
	{
		"id": "0ba61a921730",
		"ts": "2026-10-27T01:04:06.371Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1148263.79,
		"hash": "0ba61a9217309eb7828608a7020beed75e2d6e440573b521127f55687e3f4bf2"
	},
	{
		"id": "4dcc4ee06904",
		"ts": "2026-10-27T01:04:06.631Z",
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
		"liquidityUsd": 3041550.25,
		"hash": "4dcc4ee06904c0ae7bd529ea4a6891c5520c85909f1038e8d148173d24dbbb7d"
	},
	{
		"id": "e7a83e9c5f1a",
		"ts": "2026-10-27T01:04:06.888Z",
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
		"liquidityUsd": 8689556.7,
		"hash": "e7a83e9c5f1a8b9e2975ce6a2bbf9fe0745d0aea85fac619aa71dc8091daff2f"
	},
	{
		"id": "43975a9d8da5",
		"ts": "2026-10-27T01:04:07.143Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 148399.45,
		"hash": "43975a9d8da56625692c40eb3365e69f7a92bdd41605960c402be7737dd77a5e"
	},
	{
		"id": "0c5bd60b24fa",
		"ts": "2026-10-27T01:04:07.399Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 546877.42,
		"hash": "0c5bd60b24fa100dd27be72394359bbf2f36c2b61f6f4fa10d394d92853ebd82"
	},
	{
		"id": "1c622a77dc38",
		"ts": "2026-10-27T01:04:07.655Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3787235.66,
		"hash": "1c622a77dc38662250412532affee2c8ccac717ef111db980d99f945ecd67d48"
	},
	{
		"id": "0881ce84993f",
		"ts": "2026-10-27T01:04:07.919Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 678315.01,
		"hash": "0881ce84993f6e7d297e5db080bdad5dd10db1b82caa3794c09cee11e30abbad"
	},
	{
		"id": "03e23c3545b6",
		"ts": "2026-10-27T01:04:08.177Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 234314.13,
		"hash": "03e23c3545b691a1a3bee1f4e3d8ccc9b66097edf251118efefa04684dd09f64"
	},
	{
		"id": "49c2fafde05a",
		"ts": "2026-10-27T01:04:08.435Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4276616.68,
		"hash": "49c2fafde05aff4be28b6ba6dfdfdb361999d4c8cfe3e11826e6686ce87439da"
	},
	{
		"id": "9e2d9dca4166",
		"ts": "2026-10-26T21:18:06.696Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156380087.34,
		"hash": "9e2d9dca41661085c50bb3d4d9cce41924898cbe165d5bec21cf7c66f0da9a7b"
	},
	{
		"id": "be40f2c556c2",
		"ts": "2026-10-26T21:18:07.399Z",
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
		"liquidityUsd": 16607282.56,
		"hash": "be40f2c556c29900d952126ef21c72b5914eb03b252c3ea7be7378630d10a173"
	},
	{
		"id": "e6fedaa93a65",
		"ts": "2026-10-26T21:18:07.691Z",
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
		"liquidityUsd": 254536.5,
		"hash": "e6fedaa93a65e536312ed9791a4c472320423c284ee0922a26b5a94452eeca29"
	},
	{
		"id": "d8bd4adb875d",
		"ts": "2026-10-26T21:18:07.957Z",
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
		"liquidityUsd": 7022438.35,
		"hash": "d8bd4adb875d31e89e27fe60c3f2edfd7c6bbed5c850b241409b41dc26270230"
	},
	{
		"id": "7a81a631045e",
		"ts": "2026-10-26T21:18:08.240Z",
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
		"liquidityUsd": 2100441.92,
		"hash": "7a81a631045eb4db6d95d13bc5fe6c3b0ed26880a8498fc6e4cdfd2fbd5b4114"
	},
	{
		"id": "dcbf77d57913",
		"ts": "2026-10-26T21:18:08.505Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1098021,
		"hash": "dcbf77d57913466838ba7ef883d3c1bd2719052a5f8b67a8d4281b9a411e6b2f"
	},
	{
		"id": "bb96288316d0",
		"ts": "2026-10-26T21:18:08.767Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2468127.72,
		"hash": "bb96288316d0761617536b35ee7afebba53ad408cdea18c4a1d429498bc05aa6"
	},
	{
		"id": "dca1d9f64d85",
		"ts": "2026-10-26T21:18:09.033Z",
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
		"liquidityUsd": 1814197.82,
		"hash": "dca1d9f64d85b772e23463507762c50c920d6d47b00d0b080d122e1b9ae88f6b"
	},
	{
		"id": "d78c9cc545f4",
		"ts": "2026-10-26T21:18:09.300Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2468127.96,
		"hash": "d78c9cc545f429c859cdf6eb47ecab795698c53d9f8c04104449c050ae55f2b8"
	},
	{
		"id": "dea57453fdb4",
		"ts": "2026-10-26T21:18:09.576Z",
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
		"liquidityUsd": 1809267.45,
		"hash": "dea57453fdb499260d6370f9af203571419d5aa4c388cce1567945b45ffe3e20"
	},
	{
		"id": "99a3daca5f64",
		"ts": "2026-10-26T21:18:09.825Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1139350.94,
		"hash": "99a3daca5f64a87164170b1b32070951410ecb266d3b61aa46516db356b8e5e2"
	},
	{
		"id": "645df5f3d7d0",
		"ts": "2026-10-26T21:18:10.071Z",
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
		"liquidityUsd": 2990460.64,
		"hash": "645df5f3d7d0ea56e9f47e6a8155f5f2d6acf7bf3cfc9516a5876b89dba441de"
	},
	{
		"id": "68120aea4fd0",
		"ts": "2026-10-26T21:18:10.317Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 56005.96,
		"hash": "68120aea4fd052697a871ba0092e9851abe612d5921690951f534ed99dff70a2"
	},
	{
		"id": "3c95c3c6713a",
		"ts": "2026-10-26T21:18:10.566Z",
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
		"liquidityUsd": 8814724.43,
		"hash": "3c95c3c6713a6e7dfd65b4f59c2d97cc98695ff40b41adda318bc2707d88d753"
	},
	{
		"id": "81b21eef8b31",
		"ts": "2026-10-26T21:18:10.814Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 251780.8,
		"hash": "81b21eef8b31bf030747daee138c7dabbfd13514ae9501ebb2150a46b2c8a483"
	},
	{
		"id": "568e20fef0f4",
		"ts": "2026-10-26T21:18:11.064Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 173894.74,
		"hash": "568e20fef0f43e4b282a358b82d32c21536ca7737518373d0cad6a8eddac7be2"
	},
	{
		"id": "3053f73f8115",
		"ts": "2026-10-26T21:18:11.314Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 680450.91,
		"hash": "3053f73f811530bb7c8bcbb6c21ee0627fe18dbe78b6e19b655ff146fcc46fe8"
	},
	{
		"id": "068fb67a4e7e",
		"ts": "2026-10-26T21:18:11.560Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 551721.12,
		"hash": "068fb67a4e7e1b82e197947905edfe9a6734a08f3ecff56be6f2613b4342348e"
	},
	{
		"id": "aaf27b116e75",
		"ts": "2026-10-26T21:18:11.808Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3762900.04,
		"hash": "aaf27b116e75b3d4e52fde31d16b9e3ea07e187697dd52cee39d0775fb833eaf"
	},
	{
		"id": "75936a911edd",
		"ts": "2026-10-26T16:26:12.447Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 136558214.42,
		"hash": "75936a911edd5fba6fd0af6ceef168e5d8539b7b38094ff02c118600981a4a20"
	},
	{
		"id": "383469903ec1",
		"ts": "2026-10-26T16:26:13.104Z",
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
		"liquidityUsd": 16761180.77,
		"hash": "383469903ec1eae75ed3c9eefe8d137d1624a190c1814cbb710518aff14bb30c"
	},
	{
		"id": "1b5a5e209a49",
		"ts": "2026-10-26T16:26:13.350Z",
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
		"liquidityUsd": 255489.66,
		"hash": "1b5a5e209a4970cf867571272f3283663bc08a46ee5d71ad6ebe425e08a432e5"
	},
	{
		"id": "52331ed42e6b",
		"ts": "2026-10-26T16:26:13.595Z",
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
		"liquidityUsd": 7092438.58,
		"hash": "52331ed42e6b2970e516670de1ba38fc9b1fc73779bd8eb299bf4d8aa83b228f"
	},
	{
		"id": "1e5db33a21ce",
		"ts": "2026-10-26T16:26:13.856Z",
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
		"liquidityUsd": 2075844.85,
		"hash": "1e5db33a21ce8b8c8f9208336c2ded613cd1dcb724e7a51b84832747cfd169eb"
	},
	{
		"id": "0575ec010c9b",
		"ts": "2026-10-26T16:26:14.109Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1106358.69,
		"hash": "0575ec010c9bbd8bb067d30e683f28a6e90c9b16ba3cbf91969093faa91d5fcc"
	},
	{
		"id": "c5aabb5877d0",
		"ts": "2026-10-26T16:26:14.347Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2467494.18,
		"hash": "c5aabb5877d01c27c5288bcc82538812db0f588ae6f2bdfb3715872923ea4665"
	},
	{
		"id": "9507105b8be5",
		"ts": "2026-10-26T16:26:14.592Z",
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
		"liquidityUsd": 1822052.6,
		"hash": "9507105b8be5857f9cf5703190134482b09e7a3a5518fca24416c5d15161e575"
	},
	{
		"id": "39cd4eeccd0e",
		"ts": "2026-10-26T16:26:14.840Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2467486.3,
		"hash": "39cd4eeccd0e8fe4cc32fbe14a08d19b53060207397f2a058a2a7fa2cbe124c1"
	},
	{
		"id": "4842ff2f22b0",
		"ts": "2026-10-26T16:26:15.079Z",
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
		"liquidityUsd": 1814075.55,
		"hash": "4842ff2f22b0433aec8bef6093dcb9bf4031d429e976d84c67e1e856a4234614"
	},
	{
		"id": "3913c775db20",
		"ts": "2026-10-26T16:26:15.305Z",
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
		"liquidityUsd": 8846822.29,
		"hash": "3913c775db20e4384d0d0022dd7895095ccde6f073c4d068fe41762b6d52cdf1"
	},
	{
		"id": "cad49e1474bb",
		"ts": "2026-10-26T16:26:15.532Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1157403.24,
		"hash": "cad49e1474bb01a07c352feba74f5489d072d9e9968b20d4a9e186f6bf438225"
	},
	{
		"id": "0fbdd9021fab",
		"ts": "2026-10-26T16:26:15.758Z",
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
		"liquidityUsd": 3010426.3,
		"hash": "0fbdd9021fab818facbb00a6a8622d954f3da21bd84e19909409010799030183"
	},
	{
		"id": "c347cb3fb4ab",
		"ts": "2026-10-26T16:26:15.998Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 56530.9,
		"hash": "c347cb3fb4ab974daa55d35a6fe14e46287f84f47eb3fe0b6b942790ab7a248e"
	},
	{
		"id": "739c254f4c5a",
		"ts": "2026-10-26T16:26:16.236Z",
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
		"liquidityUsd": 1057453.72,
		"hash": "739c254f4c5ab493e1aade8d88fe4fd7969bda35e54d1bce4ae4a64ce562a30d"
	},
	{
		"id": "d3abab71ab3a",
		"ts": "2026-10-26T16:26:16.462Z",
		"symbol": "PANGEA",
		"token": "0xA551dEF8a44ea423CaA58DA45b3F5764004286Ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 152009.88,
		"hash": "d3abab71ab3a2850ceea208c0902014bd6f48371f3a40f22bb1cab813c517457"
	},
	{
		"id": "e6d748955d6e",
		"ts": "2026-10-26T16:26:16.688Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 676885.84,
		"hash": "e6d748955d6e66d3ad479651c24e50491fb26e0fb260ddcfeae27bf72002e938"
	},
	{
		"id": "90b6289a37b9",
		"ts": "2026-10-26T16:26:16.917Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 260777.97,
		"hash": "90b6289a37b945440586070b7fa97d73fc1105d90c87a17cc3b67929f001661a"
	},
	{
		"id": "5a08ec8d29a1",
		"ts": "2026-10-26T16:26:17.145Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 175262.62,
		"hash": "5a08ec8d29a146b5c1dc300a7c8064f7ff97ac66f8f10a60f04b4a7d40d6c70e"
	},
	{
		"id": "34d9ee666071",
		"ts": "2026-10-26T09:38:04.415Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 157726876.16,
		"hash": "34d9ee66607195b90df984212c0d2629655550880a55348e3802c71a6c390c25"
	},
	{
		"id": "5c763e61d673",
		"ts": "2026-10-26T09:38:05.137Z",
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
		"liquidityUsd": 17521562.7,
		"hash": "5c763e61d6737ece1dc66bf17708adb08d20c71a411063fd60ea86e64e4c45f8"
	},
	{
		"id": "78a31bffcb37",
		"ts": "2026-10-26T09:38:05.468Z",
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
		"liquidityUsd": 256314.01,
		"hash": "78a31bffcb37764a4fb78714668bbc61be125bb474d1528a5ff068c8e360b23c"
	},
	{
		"id": "e9df78c49f10",
		"ts": "2026-10-26T09:38:05.735Z",
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
		"liquidityUsd": 7136841.63,
		"hash": "e9df78c49f10df0b88c13bdcc0031a12678586774313de5f7002a7c71e56630d"
	},
	{
		"id": "7f4a1460ef1a",
		"ts": "2026-10-26T09:38:06.017Z",
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
		"liquidityUsd": 2095894.74,
		"hash": "7f4a1460ef1abc69f3780bd009a2d6e18ca665a8d0584d3436a91f6a7d58e76f"
	},
	{
		"id": "9c3ce7212a04",
		"ts": "2026-10-26T09:38:06.287Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1110596.83,
		"hash": "9c3ce7212a04472d0da18f63af60aad6fa65356ce99dbb543c2e939333b2d954"
	},
	{
		"id": "65598aaf762a",
		"ts": "2026-10-26T09:38:06.558Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 7136841.63,
		"hash": "65598aaf762a1d4bd5f229dc81dafb38ee0040b7be5f8b883db32bfb8e8d4951"
	},
	{
		"id": "4a4843ed52a8",
		"ts": "2026-10-26T09:38:06.857Z",
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
		"liquidityUsd": 2201150.89,
		"hash": "4a4843ed52a83ec27f5429d03d3b0494ec921b1bff646cab02f312a0767bd677"
	},
	{
		"id": "5dee47688387",
		"ts": "2026-10-26T09:38:07.130Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2467759.74,
		"hash": "5dee476883875cf9380abfe6189614fcc80758c1ff05bf5be33ea9a7ab8717f3"
	},
	{
		"id": "e7b7bd349ab4",
		"ts": "2026-10-26T09:38:07.393Z",
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
		"liquidityUsd": 1839719.19,
		"hash": "e7b7bd349ab4d50f690bf3d8ac2928396e49d61b5fad6de9293437dc058fedd9"
	},
	{
		"id": "839fed3fe967",
		"ts": "2026-10-26T09:38:07.645Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1161669.8,
		"hash": "839fed3fe967fecece7283cffcac6e79d8f0ab3e3fb8e9ff331526b9969b43a6"
	},
	{
		"id": "170aa56e8d2b",
		"ts": "2026-10-26T09:38:07.895Z",
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
		"liquidityUsd": 8890460.48,
		"hash": "170aa56e8d2b9aadfd3d80ce62b19a9e29df72aee88ef226264e8993ce8c95d7"
	},
	{
		"id": "f01c936f9307",
		"ts": "2026-10-26T09:38:08.142Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 56958.54,
		"hash": "f01c936f930716e7c429199147bf7e38d4a4e381f1ad94837ebd6877736f8f99"
	},
	{
		"id": "3cd5245c4579",
		"ts": "2026-10-26T09:38:08.391Z",
		"symbol": "PANGEA",
		"token": "0xA551dEF8a44ea423CaA58DA45b3F5764004286Ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 158351.99,
		"hash": "3cd5245c457960f1e64acd8483794e17c130fd1beed12c058cda767ed5d3754a"
	},
	{
		"id": "a75c467248f9",
		"ts": "2026-10-26T09:38:08.647Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 513839.22,
		"hash": "a75c467248f99234a908c13c1c184f1048687897c07be4c83eace1313e9974d8"
	},
	{
		"id": "30a45730b8a3",
		"ts": "2026-10-26T09:38:08.905Z",
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
		"liquidityUsd": 1067341.56,
		"hash": "30a45730b8a3747920433903c73c87f7fa36b151553d83e4daa551b6e1dc5733"
	},
	{
		"id": "913cdb86bdf7",
		"ts": "2026-10-26T09:38:09.151Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 674740.16,
		"hash": "913cdb86bdf768855a3f91798837679a60813899a35ad37c29e94131e8b1f34e"
	},
	{
		"id": "b0b9a5e8fca7",
		"ts": "2026-10-26T09:38:09.399Z",
		"symbol": "GULD",
		"token": "0x14D6C649292c5c9790c5196D1a9EA039307947a1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1061360.6,
		"hash": "b0b9a5e8fca72fbe3eab757d8c18a632acd6d9c6b52873c19ec31fa7bfaddc65"
	},
	{
		"id": "f107d172ecd3",
		"ts": "2026-10-26T09:38:09.646Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 207162.48,
		"hash": "f107d172ecd3f7a134c1f2cc6b86fd4867a3d8c485a13c30ee13634f218fd235"
	},
	{
		"id": "8e3a459c3b87",
		"ts": "2026-10-26T03:00:40.416Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 156348177.4,
		"hash": "8e3a459c3b87258423f3156d4fb38d0a930ec35f206e5f53eee261f9fa4acbec"
	},
	{
		"id": "7f9cb999467f",
		"ts": "2026-10-26T03:00:40.639Z",
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
		"liquidityUsd": 17201609.78,
		"hash": "7f9cb999467f2ed3186342822c6c00fd268855f5ef6799878719b3b2b36b0b77"
	},
	{
		"id": "ec30b00d143c",
		"ts": "2026-10-26T03:00:40.864Z",
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
		"liquidityUsd": 253959.28,
		"hash": "ec30b00d143cc50b3f50cb2e85755e035307806dadbe8be44e19b178bf83949b"
	},
	{
		"id": "bb93b8742595",
		"ts": "2026-10-26T03:00:41.061Z",
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
		"liquidityUsd": 7194621.39,
		"hash": "bb93b8742595d5b2ce0b5d42eff948cb3c008c038fe8a6690484a6f52dffa5cc"
	},
	{
		"id": "a2f85abaac83",
		"ts": "2026-10-26T03:00:41.256Z",
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
		"liquidityUsd": 2033399.24,
		"hash": "a2f85abaac83a0113725923ef5693604fb3427353ae29b7d39d89678589cc66b"
	},
	{
		"id": "65e51fd092d5",
		"ts": "2026-10-26T03:00:41.472Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1104585.72,
		"hash": "65e51fd092d544713230f09a04705f39c06fae303e5fe28386a7ea4160cfa1c0"
	},
	{
		"id": "225631ec5254",
		"ts": "2026-10-26T03:00:41.668Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 7194621.62,
		"hash": "225631ec5254882cfe12aed9aad64ded7ee056372ada0ef0dc3edc21b3cbc929"
	},
	{
		"id": "fbdb413d3717",
		"ts": "2026-10-26T03:00:41.885Z",
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
		"liquidityUsd": 2087230.77,
		"hash": "fbdb413d3717dc7d0152dec342c393fcea9fa43b7c702746ea17229256fba674"
	},
	{
		"id": "f37a465fc803",
		"ts": "2026-10-26T03:00:42.097Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2467962.04,
		"hash": "f37a465fc8039d0b74176369f0f3cc46340797a215f4fb77fd50c28facc8e261"
	},
	{
		"id": "787271c5253f",
		"ts": "2026-10-26T03:00:42.296Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1144501.93,
		"hash": "787271c5253f585e8f4b644cdaf6ff873ff0e35fbf6d787b6e95590f9038cd1f"
	},
	{
		"id": "3ade827c2cf5",
		"ts": "2026-10-26T03:00:42.491Z",
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
		"liquidityUsd": 1778792.44,
		"hash": "3ade827c2cf5bb4bb9cc8d36f342043eff292585beade60002888c3f32901763"
	},
	{
		"id": "42b9960a2e83",
		"ts": "2026-10-26T03:00:42.679Z",
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
		"liquidityUsd": 8753195.48,
		"hash": "42b9960a2e83feed081b76a50c147c49c5b50bd238a3dae6b4236c4217115f94"
	},
	{
		"id": "727e264e1ee4",
		"ts": "2026-10-26T03:00:42.949Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 58456.15,
		"hash": "727e264e1ee42be316e59dde8e25f320dd8291859e974dd95558c10bd746bc3c"
	},
	{
		"id": "ba35749bbe82",
		"ts": "2026-10-26T03:00:43.142Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 500061.83,
		"hash": "ba35749bbe826b27e7c561b14a42215d90096e3135bd41b8e2b9ae9ea9e19346"
	},
	{
		"id": "910d0c041538",
		"ts": "2026-10-26T03:00:43.346Z",
		"symbol": "PANGEA",
		"token": "0xA551dEF8a44ea423CaA58DA45b3F5764004286Ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 151327.94,
		"hash": "910d0c0415380105ba81c5f579a55e97c1eab05d48b0eb756a1c7f36b6779748"
	},
	{
		"id": "d414bc593681",
		"ts": "2026-10-26T03:00:43.557Z",
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
		"liquidityUsd": 1264108.26,
		"hash": "d414bc5936815702a8dc20a06a10f4ee56450554c1f51b6e492e6d6f25a8ce04"
	},
	{
		"id": "215319367b35",
		"ts": "2026-10-26T03:00:43.768Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 204402.89,
		"hash": "215319367b35892ca37d884da94fda710f22612de218f1999930e879cafb096b"
	},
	{
		"id": "d6e2e8712b9d",
		"ts": "2026-10-26T03:00:43.958Z",
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
		"liquidityUsd": 1083552.95,
		"hash": "d6e2e8712b9dbbff818403031006838173ae11520a8fadd4436035d844c055e4"
	},
	{
		"id": "27fa78eff9ea",
		"ts": "2026-10-26T03:00:44.156Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 654358.58,
		"hash": "27fa78eff9eab5c686bb43b028b557f06a0a943ea59a8d65151ba77269764685"
	},
	{
		"id": "8a342b2c32f0",
		"ts": "2026-10-25T23:45:25.303Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 157813434.43,
		"hash": "8a342b2c32f00b26f432b777f7e383c7a74a799be7e9a4202ce6342031ea0377"
	},
	{
		"id": "520a9aa183a9",
		"ts": "2026-10-25T23:45:26.032Z",
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
		"liquidityUsd": 17443908.9,
		"hash": "520a9aa183a991fa266dcf83b8808ae1c96198a6d5276e1364243d5ee71f02b3"
	},
	{
		"id": "2eab7e89fa3e",
		"ts": "2026-10-25T23:45:26.335Z",
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
		"liquidityUsd": 256404.13,
		"hash": "2eab7e89fa3e087cba3d8c93fd851649a066af490c53f7daad53e682394758a1"
	},
	{
		"id": "208f3fa9a5db",
		"ts": "2026-10-25T23:45:26.611Z",
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
		"liquidityUsd": 7434961.9,
		"hash": "208f3fa9a5db4a1e27aeea83a0ffa54b36c3c4d2ad42a00ad0f0d9afce1f960b"
	},
	{
		"id": "4672d2857fea",
		"ts": "2026-10-25T23:45:26.882Z",
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
		"liquidityUsd": 2064849.97,
		"hash": "4672d2857fea7f7689d6ef38d6e649be2e20ba5c1f17774e7a52658b1ceb98c4"
	},
	{
		"id": "2111c3ff8010",
		"ts": "2026-10-25T23:45:27.160Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1114669.37,
		"hash": "2111c3ff80104f03a298a019706f9cd0739e7cb138f99dab681d4276616eabd1"
	},
	{
		"id": "ecd6bbedd9d0",
		"ts": "2026-10-25T23:45:27.414Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 7434961.9,
		"hash": "ecd6bbedd9d08f0ee7b4c978a205e52461b2fb63aae3ec7f3541783a6e2c5fba"
	},
	{
		"id": "55a512c6fa96",
		"ts": "2026-10-25T23:45:27.681Z",
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
		"liquidityUsd": 2111634.48,
		"hash": "55a512c6fa96ab38e1ec06e91cc78635625ca8475aef57bc2bbea3e0c624b250"
	},
	{
		"id": "68191e98bf4f",
		"ts": "2026-10-25T23:45:27.943Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2469293.67,
		"hash": "68191e98bf4fe49a43208477db4d6cb4baf2aaed03829ad272dee64e1ac3a18d"
	},
	{
		"id": "a4b9a058e5e1",
		"ts": "2026-10-25T23:45:28.215Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1158496.52,
		"hash": "a4b9a058e5e1217b1989c127b6d02c43389ccf5870ba8608ad4e8ad725ca014c"
	},
	{
		"id": "f2e7087e8451",
		"ts": "2026-10-25T23:45:28.462Z",
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
		"liquidityUsd": 1792186.84,
		"hash": "f2e7087e8451e9c608bbdaebf65f31559a191ef09f80eaaa087fe5329e64dda4"
	},
	{
		"id": "3f20c973fbb5",
		"ts": "2026-10-25T23:45:28.705Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 515429.65,
		"hash": "3f20c973fbb5abacf8c27c74e846404f4c7d58c3a910574ded0479788054890e"
	},
	{
		"id": "06f31ac50dbf",
		"ts": "2026-10-25T23:45:28.949Z",
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
		"liquidityUsd": 8904949.14,
		"hash": "06f31ac50dbfa986dacb737636c9b5deadb798effb9b41191151b77e2a61f528"
	},
	{
		"id": "eb7c287ed021",
		"ts": "2026-10-25T23:45:29.188Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 58269.41,
		"hash": "eb7c287ed0218dc7b5fe072ceff67fbb46642e2a952c77dd3d49669d31ac0389"
	},
	{
		"id": "6ef0aec90a14",
		"ts": "2026-10-25T23:45:29.444Z",
		"symbol": "PANGEA",
		"token": "0xA551dEF8a44ea423CaA58DA45b3F5764004286Ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 156176.83,
		"hash": "6ef0aec90a14d98bf57cd1fef832b8f77720ad8aad51e8b60839a0d5fe1cfb1d"
	},
	{
		"id": "608a0b38abf4",
		"ts": "2026-10-25T23:45:29.693Z",
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
		"liquidityUsd": 1289944.41,
		"hash": "608a0b38abf4c6e875963be1c7b32b4e830981160deb7da13a252306b663cc58"
	},
	{
		"id": "cd8a9a6ec96a",
		"ts": "2026-10-25T23:45:29.941Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3813694.58,
		"hash": "cd8a9a6ec96ab323fceeb9d0fa2e03d3234ae731b30a6cda3b317b56aa9b5a31"
	},
	{
		"id": "b030f969a576",
		"ts": "2026-10-25T23:45:30.185Z",
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
		"liquidityUsd": 1087563.72,
		"hash": "b030f969a5761cb61008095cb5208a8a42c511f917b0382f84ad977d15067a71"
	},
	{
		"id": "82d3ba286556",
		"ts": "2026-10-25T23:45:30.429Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 656693.33,
		"hash": "82d3ba286556c115ceef4e7e28ae4ee040907d28a0f7b18c8cce75bc7d496011"
	},
	{
		"id": "92883cc57c49",
		"ts": "2026-10-25T21:23:08.304Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 158755593.42,
		"hash": "92883cc57c492d8f11de124523e1f2c01ef04fddbd379ba5f397555adb6862f6"
	},
	{
		"id": "48467f4d7a2a",
		"ts": "2026-10-25T21:23:08.713Z",
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
		"liquidityUsd": 17499815.67,
		"hash": "48467f4d7a2a51b3bf02fa25fcea634aa23f16563cd6b94cfd10b5a4095da489"
	},
	{
		"id": "719ec145e4f9",
		"ts": "2026-10-25T21:23:08.939Z",
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
		"liquidityUsd": 257855.15,
		"hash": "719ec145e4f9b5fc8efdb2dd7426d1735508e59955cbd0ad5e0513a96d80f473"
	},
	{
		"id": "b7031e73b069",
		"ts": "2026-10-25T21:23:09.154Z",
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
		"liquidityUsd": 7493378.98,
		"hash": "b7031e73b069a3402d744da5e99662088ea809576799d059dc92fcce70554dbb"
	},
	{
		"id": "38fdfb449c6a",
		"ts": "2026-10-25T21:23:09.372Z",
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
		"liquidityUsd": 2097610.35,
		"hash": "38fdfb449c6ae89c59852ca8f6b9421e48695bbaf35099c221ecb1ef0df18532"
	},
	{
		"id": "15f87c3232fe",
		"ts": "2026-10-25T21:23:09.590Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1125552.43,
		"hash": "15f87c3232fe22565e06fe0d9c512b8440cb9bed687437a8e44197fca4a09dbc"
	},
	{
		"id": "a98b5e52c0aa",
		"ts": "2026-10-25T21:23:09.941Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 7494475.57,
		"hash": "a98b5e52c0aae052d127f6779734dfb9733fe34c2a76774fe21520ee8b821daa"
	},
	{
		"id": "003544d2bb17",
		"ts": "2026-10-25T21:23:10.151Z",
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
		"liquidityUsd": 2128352.39,
		"hash": "003544d2bb176fdacf4ffa2f9f5fd502a2aba7f5abdfc0e84b41529d698d53d7"
	},
	{
		"id": "081852437f27",
		"ts": "2026-10-25T21:23:10.363Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2467426.79,
		"hash": "081852437f27e310f0b5806f62bd6aebbae1a37c13d8173c4eb9ec33fc1a969e"
	},
	{
		"id": "96a1cafda08e",
		"ts": "2026-10-25T21:23:10.565Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1163612.93,
		"hash": "96a1cafda08e6bcca62a4096e226230b93f07c36210acf6bd24f0680b0378d33"
	},
	{
		"id": "09286f742bf5",
		"ts": "2026-10-25T21:23:10.775Z",
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
		"liquidityUsd": 1792057.42,
		"hash": "09286f742bf5a70f5b6d90a7913e7edc1d09e795cf6e3ce0ede26fd30a2ea27c"
	},
	{
		"id": "d8cfb247f32c",
		"ts": "2026-10-25T21:23:10.982Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 514741.21,
		"hash": "d8cfb247f32ce864ff29886f8f68461120591b5191cb89a759a76600b072b924"
	},
	{
		"id": "eed97c6dedc2",
		"ts": "2026-10-25T21:23:11.159Z",
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
		"liquidityUsd": 8990653.31,
		"hash": "eed97c6dedc22c51e3aabac2300412bad8e1f62cb333db5d458852b65946abd3"
	},
	{
		"id": "57b492847747",
		"ts": "2026-10-25T21:23:11.426Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 58213.81,
		"hash": "57b492847747024a598faa2c1568ce6bf75495239efd683fe34df71d8018af38"
	},
	{
		"id": "900ea97b57a4",
		"ts": "2026-10-25T21:23:11.630Z",
		"symbol": "PANGEA",
		"token": "0xA551dEF8a44ea423CaA58DA45b3F5764004286Ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 180424.22,
		"hash": "900ea97b57a4bd412b0953dcfe1f1a624a8372a6ab840ace9d8381738259edf3"
	},
	{
		"id": "a501e4ff3994",
		"ts": "2026-10-25T21:23:11.845Z",
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
		"liquidityUsd": 1338262.62,
		"hash": "a501e4ff39948f02b6233cc7ae127e002be1381ebc915b2f711dea221b1bf2c5"
	},
	{
		"id": "4dcf4b4707fb",
		"ts": "2026-10-25T21:23:12.043Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 657041.75,
		"hash": "4dcf4b4707fb98d21bbe7aa6000f5b2a8eefe5a32c84df178cd78f54447b2da9"
	},
	{
		"id": "921cc7b0366f",
		"ts": "2026-10-25T21:23:12.238Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3837933.76,
		"hash": "921cc7b0366ff475e9b9c9f1fe95f9ff2658cc5289c222dd4e0df5bb3c198b7f"
	},
	{
		"id": "522fdae226e9",
		"ts": "2026-10-25T21:23:12.434Z",
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
		"liquidityUsd": 1093759.47,
		"hash": "522fdae226e9a6dd18640ef00a55fcc857a2ad5e5117187208790d8fb544bd2a"
	},
	{
		"id": "e0008b9bb42a",
		"ts": "2026-10-25T18:04:25.320Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 159255507.31,
		"hash": "e0008b9bb42a2f338633342c37f9a8667c99fae4ad50226341a61c9d8a6f8e0e"
	},
	{
		"id": "cff617fbb4a2",
		"ts": "2026-10-25T18:04:25.799Z",
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
		"liquidityUsd": 17591285.16,
		"hash": "cff617fbb4a2d3b66446e2184cd14f120b3c52cb09c42c9824aa87417c4b7634"
	},
	{
		"id": "283907a0e87c",
		"ts": "2026-10-25T18:04:26.299Z",
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
		"liquidityUsd": 258727.99,
		"hash": "283907a0e87c20499f7e99f2fd1e66511991ed4456dd70bbbda9c1d845f49608"
	},
	{
		"id": "8b4cb0f58ffe",
		"ts": "2026-10-25T18:04:26.557Z",
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
		"liquidityUsd": 7586627.52,
		"hash": "8b4cb0f58ffe1257a22b0bb2606863ded64e5d3fc3fe77de80e494f7870b4fb3"
	},
	{
		"id": "9d3af16b5f3a",
		"ts": "2026-10-25T18:04:26.809Z",
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
		"liquidityUsd": 2089223.75,
		"hash": "9d3af16b5f3a5801f9ea25b7c4cddddcbfe2a8c93bfe53d45cd18b9cdf949885"
	},
	{
		"id": "1d8d6be6a339",
		"ts": "2026-10-25T18:04:27.061Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1130890.98,
		"hash": "1d8d6be6a339aaea56742bd6dbea745c8b44b8388ea0b397bd9895288bb61928"
	},
	{
		"id": "7de1caf589f9",
		"ts": "2026-10-25T18:04:27.313Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 7591047.06,
		"hash": "7de1caf589f9267d8530f58b337e8bf597b2d0c7d0a345bf26bce72702c6eb19"
	},
	{
		"id": "8a303d28ff24",
		"ts": "2026-10-25T18:04:27.563Z",
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
		"liquidityUsd": 2138784.68,
		"hash": "8a303d28ff24d7e10748787f4eab283f34047e5e229fd6272480768ce45581ae"
	},
	{
		"id": "4e90c0f472e3",
		"ts": "2026-10-25T18:04:27.816Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1152800.1,
		"hash": "4e90c0f472e331bb7147fac160a7f440a9153b165738efe535faa8ea134f7a02"
	}
]
