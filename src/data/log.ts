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
	"updatedAt": "2026-09-19T11:51:22.575Z",
	"tokensScored": 17920,
	"verdictsIssued": 17920,
	"safe": 15181,
	"risky": 1307,
	"likelyRug": 1432,
	"ticks": 1022
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "e3c21e63e10e",
		"ts": "2026-09-19T11:51:17.140Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129613838.49,
		"hash": "e3c21e63e10e7510dbce110487ed014d45dc1fa9be6ab548c81ae6be41162e7d"
	},
	{
		"id": "daa3d32d36ce",
		"ts": "2026-09-19T11:51:17.888Z",
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
		"liquidityUsd": 17976221.51,
		"hash": "daa3d32d36ce56784faa18521843c1480ad11ed3334a1a84f2d1a756552daf11"
	},
	{
		"id": "54d20d6db43f",
		"ts": "2026-09-19T11:51:18.173Z",
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
		"liquidityUsd": 884011.29,
		"hash": "54d20d6db43fbb2306fdec25494665d295164ff8bade2f2aa8ac98765b908ee0"
	},
	{
		"id": "3f18a9c04c9d",
		"ts": "2026-09-19T11:51:18.682Z",
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
		"liquidityUsd": 34979909.03,
		"hash": "3f18a9c04c9d8f5d7aaff22c8de96cebbd73ede6baa0232605edc9756d7d1a9e"
	},
	{
		"id": "14970b69cb24",
		"ts": "2026-09-19T11:51:18.957Z",
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
		"liquidityUsd": 4438379.98,
		"hash": "14970b69cb2436c3551db8ee2de284d9e3dfdecb726b9fbccc9a92b7ba0905dc"
	},
	{
		"id": "dfe7aa1fcfe0",
		"ts": "2026-09-19T11:51:19.256Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1229135.19,
		"hash": "dfe7aa1fcfe089aa1dec9b001cf8fc78a947d17b46ec652280f5d6a98d0a6efb"
	},
	{
		"id": "93b818a41cb0",
		"ts": "2026-09-19T11:51:19.538Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34979909.03,
		"hash": "93b818a41cb003fcdb86e3f53a066a174ae4475d0d0eaba72c439248e2f46659"
	},
	{
		"id": "60fe7804aa0e",
		"ts": "2026-09-19T11:51:19.818Z",
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
		"liquidityUsd": 2171612.49,
		"hash": "60fe7804aa0e27db283563b216100e52d9c77f82af09a77719014990ed0e79a2"
	},
	{
		"id": "b8a06f6fd7af",
		"ts": "2026-09-19T11:51:20.091Z",
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
		"liquidityUsd": 17008868.68,
		"hash": "b8a06f6fd7af03a6a61b8e9bb805e93a1d8e197399d2f83df07c2a6e36ee1ba9"
	},
	{
		"id": "cf2e2766b90b",
		"ts": "2026-09-19T11:51:20.371Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 3189653.17,
		"hash": "cf2e2766b90b6f7544b77a646d4434b1b4c8cc6496df2c2ee83aef14a088cb70"
	},
	{
		"id": "07adf70bfa06",
		"ts": "2026-09-19T11:51:20.638Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1659806.75,
		"hash": "07adf70bfa067e838778fd3a48f84f65eb15137fa358167560c14d189d339bc5"
	},
	{
		"id": "b4bad0dcbcf8",
		"ts": "2026-09-19T11:51:20.910Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1508998.55,
		"hash": "b4bad0dcbcf81605beb72783e4c4c151c1b43947421743ea5b23c2cc6a35c846"
	},
	{
		"id": "ca0b9f1d7081",
		"ts": "2026-09-19T11:51:21.181Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1462895.98,
		"hash": "ca0b9f1d708145971b1dfb4657ab79b3e4695a724c03fa87064f01c121a969e4"
	},
	{
		"id": "c02bc802dffe",
		"ts": "2026-09-19T11:51:21.448Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4793554.05,
		"hash": "c02bc802dffe74e33d1aca7c7fffcdc2b3eb0f8a874f175d4556114a0d32df71"
	},
	{
		"id": "b2392df341c9",
		"ts": "2026-09-19T11:51:21.707Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 461758.16,
		"hash": "b2392df341c96b9d01f341ab451f836a9935442bbe0eb0134a11c6cbe3d694ed"
	},
	{
		"id": "230a82e62500",
		"ts": "2026-09-19T11:51:21.953Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3137455.71,
		"hash": "230a82e625004f974367be810970b63a3c0e412034febfe8ab3175cafbb030fe"
	},
	{
		"id": "5cbdf70e09f0",
		"ts": "2026-09-19T11:51:22.219Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 939832.55,
		"hash": "5cbdf70e09f05fc2426cc4c7cd3b8305f0e78c80fa21202902a2de99343bd465"
	},
	{
		"id": "57d2ba815137",
		"ts": "2026-09-19T11:51:22.575Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3314407.29,
		"hash": "57d2ba8151370ee93f9595ca53adf497a65a212ffbe75591173e07da0ae64715"
	},
	{
		"id": "cdabc7aea84a",
		"ts": "2026-09-19T06:58:29.913Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 128290369.21,
		"hash": "cdabc7aea84acb576477fa3fc7aab670f1d498595b422c2ea332fd5ca3230cfb"
	},
	{
		"id": "11d00163a40e",
		"ts": "2026-09-19T06:58:30.592Z",
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
		"liquidityUsd": 17710225.32,
		"hash": "11d00163a40ef24bfb21666ff27ccf38d30f56ec12b9d59d69c6105b07b465c0"
	},
	{
		"id": "f7a926f4b050",
		"ts": "2026-09-19T06:58:31.077Z",
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
		"liquidityUsd": 878581.1,
		"hash": "f7a926f4b050bac720c2771df837d6fc02f2d4f3e33c068430cb1ac078227ad7"
	},
	{
		"id": "7d7b8e378af8",
		"ts": "2026-09-19T06:58:31.548Z",
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
		"liquidityUsd": 34813467.25,
		"hash": "7d7b8e378af82f24b73a0ed453695688f5794a51ca93fc08c06fb7330010e7da"
	},
	{
		"id": "74a03421f1a7",
		"ts": "2026-09-19T06:58:31.816Z",
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
		"liquidityUsd": 4406828.18,
		"hash": "74a03421f1a703c274e8368a127745d9b960aabe72dbf385c85ac38417920983"
	},
	{
		"id": "6a03d98b80d7",
		"ts": "2026-09-19T06:58:32.087Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1210379.47,
		"hash": "6a03d98b80d7f12ce70be778aa10c86d212221c7752055ed1f03a55548c01fcb"
	},
	{
		"id": "224faae5130d",
		"ts": "2026-09-19T06:58:32.356Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34813467.25,
		"hash": "224faae5130d14c03f09cdaa359fa5456894e50e93b9a2502120781d8b5fb355"
	},
	{
		"id": "32c91191abad",
		"ts": "2026-09-19T06:58:32.696Z",
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
		"liquidityUsd": 2065403.15,
		"hash": "32c91191abadaf9d94296a64b07d0f4d0b81958f70fa9c882509af287f4137a4"
	},
	{
		"id": "6bc1589d169d",
		"ts": "2026-09-19T06:58:32.982Z",
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
		"liquidityUsd": 17093547.92,
		"hash": "6bc1589d169d8dcb85b8138fc4173c1248c19fd58574a43299679711121a14fa"
	},
	{
		"id": "74f1e747bace",
		"ts": "2026-09-19T06:58:33.261Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3007036.93,
		"hash": "74f1e747bace66dce626f84a3d5d49724e96168b8be7b334999744f0b289c1bd"
	},
	{
		"id": "9c6982c0051b",
		"ts": "2026-09-19T06:58:33.500Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 751635.09,
		"hash": "9c6982c0051bfe3866bb43157ae7c70c8f2dcf6ec8b69338346370405934e819"
	},
	{
		"id": "6280f8f52bcb",
		"ts": "2026-09-19T06:58:33.744Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1605618.05,
		"hash": "6280f8f52bcbca1a9453f6489aa1d56f8f94e24ef4a813148b041dbcc83ddc94"
	},
	{
		"id": "6749ae06ec92",
		"ts": "2026-09-19T06:58:33.989Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1459909.65,
		"hash": "6749ae06ec928ef98f57276e08b078cd1ad7371906fea1279d95bab20f751ed1"
	},
	{
		"id": "eaafee7589fe",
		"ts": "2026-09-19T06:58:34.229Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3087169.18,
		"hash": "eaafee7589fef779ad9a026c5267637a67b50b0515405bc9458df326d8d4bec8"
	},
	{
		"id": "0587b434f825",
		"ts": "2026-09-19T06:58:34.465Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4746279.31,
		"hash": "0587b434f825bcec26fc9bc5b662d7336ed29cdc8efcc227a17cbc0d6bb83d26"
	},
	{
		"id": "fa674fee27f6",
		"ts": "2026-09-19T06:58:34.700Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 450770.79,
		"hash": "fa674fee27f6c4ae54909432f9d0e3f63b9df05aa24adceff5dbcb61e6b6ddee"
	},
	{
		"id": "2b92c1d5baff",
		"ts": "2026-09-19T06:58:34.940Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 962266.37,
		"hash": "2b92c1d5baff74a2218c19f7185bba7a216d54a534ac5df7aea2fea8a9e74047"
	},
	{
		"id": "eb31901ef752",
		"ts": "2026-09-19T06:58:35.185Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3359313.22,
		"hash": "eb31901ef7524860e102a06b8acbf4667e9e951318814493cf3a43f6e72fa614"
	},
	{
		"id": "b88a2cd54eee",
		"ts": "2026-09-19T01:04:37.893Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129562327.09,
		"hash": "b88a2cd54eee3f2e0ca14cb095e15dc0f20b6de91a17fcdbeb9f576f19326e8a"
	},
	{
		"id": "fc04d3ffef16",
		"ts": "2026-09-19T01:04:38.533Z",
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
		"liquidityUsd": 12618350.52,
		"hash": "fc04d3ffef1639072f8f15c518fc4f6d1d149abe06c167575be92b1cf03a1fa3"
	},
	{
		"id": "3a31f19f445f",
		"ts": "2026-09-19T01:04:38.781Z",
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
		"liquidityUsd": 878145.94,
		"hash": "3a31f19f445f1621d8926f8ecf57a7b190be8a4fb374c0afb83329b35fc4e4e9"
	},
	{
		"id": "c31a4da9d071",
		"ts": "2026-09-19T01:04:39.031Z",
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
		"liquidityUsd": 34251158.7,
		"hash": "c31a4da9d0715859312fdbcd611bd250cb3e0ff428c18ac14ac1c75c1572bbee"
	},
	{
		"id": "d80fc02b574b",
		"ts": "2026-09-19T01:04:39.278Z",
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
		"liquidityUsd": 4384667.84,
		"hash": "d80fc02b574b103650fa6ef1e58f6dd7e9c126dc0980c68a966956035b71acbd"
	},
	{
		"id": "473ba3faffac",
		"ts": "2026-09-19T01:04:39.526Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1229864.75,
		"hash": "473ba3faffac212b7d842ef16b570375440bfbfe2700a91ab77841d8307e02c9"
	},
	{
		"id": "056f90702d79",
		"ts": "2026-09-19T01:04:39.770Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34250190.78,
		"hash": "056f90702d79710f2f6ec911f0b6b6fac036bbc6665bcaa3eb408f95a2fbe480"
	},
	{
		"id": "323f466dd6e9",
		"ts": "2026-09-19T01:04:40.033Z",
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
		"liquidityUsd": 2061273.57,
		"hash": "323f466dd6e97108f609d7f1bd9d1451ac17971a9a421cc2ba6883e997336572"
	},
	{
		"id": "23eb93d5b819",
		"ts": "2026-09-19T01:04:40.279Z",
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
		"liquidityUsd": 70592.98,
		"hash": "23eb93d5b8197c450548a751302cdc9ce4ff48ceb6017d2e87a1210e6cd233cc"
	},
	{
		"id": "399eb5607543",
		"ts": "2026-09-19T01:04:40.530Z",
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
		"liquidityUsd": 17487801.49,
		"hash": "399eb5607543dee6b600435cecd2a6a0a41be2d92816a3b8a1dbc045cd1e89a2"
	},
	{
		"id": "4f5cd20a5868",
		"ts": "2026-09-19T01:04:40.759Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1491597.92,
		"hash": "4f5cd20a586815662f987047ae380da995227ab4d26b528171e88282d5f22e86"
	},
	{
		"id": "84ec265a3384",
		"ts": "2026-09-19T01:04:40.987Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1925195.22,
		"hash": "84ec265a338435e1f6e5044be2218d5700a57c670d5d588d074399bbfaea8c0f"
	},
	{
		"id": "32ff9efcb743",
		"ts": "2026-09-19T01:04:41.215Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1484743.27,
		"hash": "32ff9efcb743c72f3fdecba3cc74bf81e040ea01697c64296e8841947ec6ff41"
	},
	{
		"id": "62e0803abf10",
		"ts": "2026-09-19T01:04:41.444Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3132944.63,
		"hash": "62e0803abf10b9a2ae7ce75e1bc3cb58d54d894c129b4db2084a5afeec7a45ad"
	},
	{
		"id": "bce24d31a654",
		"ts": "2026-09-19T01:04:41.671Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4771017.59,
		"hash": "bce24d31a6546b996217a9b13980de7a42c7ee27ad54f66bdef9dd8dd613655a"
	},
	{
		"id": "b0d90ea95a3a",
		"ts": "2026-09-19T01:04:41.899Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 469212.01,
		"hash": "b0d90ea95a3a2844419943b9dd4d1666abdb41883661b4f57a1c825e5c400165"
	},
	{
		"id": "25b6136c56a0",
		"ts": "2026-09-19T01:04:42.127Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3380718.23,
		"hash": "25b6136c56a0435ea9df3067e3df1db1c74ad326942940ac48cd322cf31a3aac"
	},
	{
		"id": "1343a64d297e",
		"ts": "2026-09-19T01:04:42.355Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 972603.41,
		"hash": "1343a64d297e3c32563c7765f85becd6d50d9889f5d201a604cc25acf2f0e258"
	},
	{
		"id": "ce7de5c4e47c",
		"ts": "2026-09-18T22:59:18.178Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129575573.8,
		"hash": "ce7de5c4e47c2d103a61638b871149186ec93e2d7546c435f13d273c004d6bf7"
	},
	{
		"id": "2361ccedbb7e",
		"ts": "2026-09-18T22:59:18.448Z",
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
		"liquidityUsd": 18552337.63,
		"hash": "2361ccedbb7efd111688829fb08a71c41fdeb7190b5173fa63d35c065bd802b8"
	},
	{
		"id": "d2fe65549149",
		"ts": "2026-09-18T22:59:18.702Z",
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
		"liquidityUsd": 870562.52,
		"hash": "d2fe6554914978b565ba7735864e1315bfb61a81be6113e36b10305942d8c2d9"
	},
	{
		"id": "497c9b08409d",
		"ts": "2026-09-18T22:59:18.962Z",
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
		"liquidityUsd": 34381442.87,
		"hash": "497c9b08409d9e085b48c3f039e13c44a1e82e396a113c8e5892a0dac51ae97d"
	},
	{
		"id": "72cf5258f328",
		"ts": "2026-09-18T22:59:19.213Z",
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
		"liquidityUsd": 4375597.3,
		"hash": "72cf5258f32875d569434205dabb1be53338e8683d54e4f025403276d345527f"
	},
	{
		"id": "a890111bc6eb",
		"ts": "2026-09-18T22:59:19.482Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1235238.65,
		"hash": "a890111bc6eb9e5935caeffeae21f91a5f9aa95ecb6d4d9ae623ed4f389ae55b"
	},
	{
		"id": "ddd77c1dfcbc",
		"ts": "2026-09-18T22:59:19.748Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34381442.87,
		"hash": "ddd77c1dfcbc9ed9ac8d107b1b5f00377defbf6780e4a111b4a2f5ac67b93805"
	},
	{
		"id": "c4717844251a",
		"ts": "2026-09-18T22:59:20.006Z",
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
		"liquidityUsd": 2517248.86,
		"hash": "c4717844251aecd0c9ee308fb004d5577d3f1dd309a38603f4cf69de1952b1e6"
	},
	{
		"id": "7b906bc3661a",
		"ts": "2026-09-18T22:59:20.276Z",
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
		"liquidityUsd": 1485333.33,
		"hash": "7b906bc3661af38533d9791989a9e870dab4cdbbbcf74edca99914bddef9c924"
	},
	{
		"id": "4331902c26cc",
		"ts": "2026-09-18T22:59:20.555Z",
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
		"liquidityUsd": 17424941.05,
		"hash": "4331902c26ccff3d1768c953c769ec1f4eb3f0e5753c3edec06e7f8ff75aee84"
	},
	{
		"id": "745fefea0512",
		"ts": "2026-09-18T22:59:20.806Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1475263.96,
		"hash": "745fefea05120069a48cef67949617f39666bb8c1566df241c51f739bd367b3b"
	},
	{
		"id": "093bcce954f3",
		"ts": "2026-09-18T22:59:21.043Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1476699.41,
		"hash": "093bcce954f32f465784f6fb0d07b406ccd87da64b59e3ee6d3295dab9f13c90"
	},
	{
		"id": "85161474da1c",
		"ts": "2026-09-18T22:59:21.287Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3089159.61,
		"hash": "85161474da1c9a5707e9af560e800b0cf2e6298384c11e9bfa1d0bafb566978b"
	},
	{
		"id": "3211fd6db718",
		"ts": "2026-09-18T22:59:21.539Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4766026.81,
		"hash": "3211fd6db7189660e8c8fd71b8a80db1b305d5b6897fd33b93bf35f52d9b74e6"
	},
	{
		"id": "33f08420b504",
		"ts": "2026-09-18T22:59:21.796Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 478722.36,
		"hash": "33f08420b5049ee71a468989700bc257caf1bb5a440e907783e4630887de26f2"
	},
	{
		"id": "868ab24a0069",
		"ts": "2026-09-18T22:59:22.031Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1668186.38,
		"hash": "868ab24a00695d01307ba7a8bebad4dd1b3048a2a28e1605bab51293ad3ed34d"
	},
	{
		"id": "c64298ee637c",
		"ts": "2026-09-18T22:59:22.273Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3274254.05,
		"hash": "c64298ee637c5d62a428f57f331340a534e47fb0144e767f71c6cac6106943af"
	},
	{
		"id": "3e30885fce33",
		"ts": "2026-09-18T22:59:22.509Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 968752.35,
		"hash": "3e30885fce336fb4edf6d9f027074cad314e3bc5ef469636ab44e63f71f6da8b"
	},
	{
		"id": "13c70c87d4cc",
		"ts": "2026-09-18T20:20:12.596Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129122894.24,
		"hash": "13c70c87d4ccd567761b7acd169ee1a17140fa175904e3f914026cfc008b7fbd"
	},
	{
		"id": "dbb7fb4bb659",
		"ts": "2026-09-18T20:20:12.964Z",
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
		"liquidityUsd": 16151011.11,
		"hash": "dbb7fb4bb659278d2775a2c3f40f9a99fa88693a26ccccddebc8dfd67267d531"
	},
	{
		"id": "f1b7442b87c4",
		"ts": "2026-09-18T20:20:13.177Z",
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
		"liquidityUsd": 899454.59,
		"hash": "f1b7442b87c4865a3c385fcfbe7be4ad56454b1d70ac78135852418d33187bc8"
	},
	{
		"id": "56d1f2a06d95",
		"ts": "2026-09-18T20:20:13.412Z",
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
		"liquidityUsd": 34827387.23,
		"hash": "56d1f2a06d954c682170aec76b3bb7699440d43894575a8a39029c48d57c02e2"
	},
	{
		"id": "f4eb981bf750",
		"ts": "2026-09-18T20:20:13.615Z",
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
		"liquidityUsd": 4373853.84,
		"hash": "f4eb981bf750a9ff52cd58ecf1b64eb6eae4191b29593bb3608f9638954f11a5"
	},
	{
		"id": "5812f1aa7b8e",
		"ts": "2026-09-18T20:20:13.822Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1236999.3,
		"hash": "5812f1aa7b8ec1c9c00fc50b5fe66eb72af18eaa497751b318b73cad7d781adb"
	},
	{
		"id": "d325a71e4d98",
		"ts": "2026-09-18T20:20:14.060Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34827387.23,
		"hash": "d325a71e4d98378f1dee0cbdfc2ba69d1bd9036a6a7462f9dca31314e2c28187"
	},
	{
		"id": "de0e3c6f36bc",
		"ts": "2026-09-18T20:20:14.427Z",
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
		"liquidityUsd": 2325889.41,
		"hash": "de0e3c6f36bceca93130992006a842d064cdb9f37d815bbe6aed500da8aad158"
	},
	{
		"id": "60c85043e94e",
		"ts": "2026-09-18T20:20:14.790Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1489885.71,
		"hash": "60c85043e94e9069ea9d4ce90c7ec6b0da1117eb6ce87a0d809094c32d546d9f"
	},
	{
		"id": "91b116a9efd5",
		"ts": "2026-09-18T20:20:15.003Z",
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
		"liquidityUsd": 17539364.58,
		"hash": "91b116a9efd5072867b5daa7ff98f9013b079b0d80219034f9c1f02ad87816f0"
	},
	{
		"id": "e73f61ce349b",
		"ts": "2026-09-18T20:20:15.199Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1497775.79,
		"hash": "e73f61ce349bd24afa046172444513c0388bb8c173ce0d83cd5f3df5e28afd6f"
	},
	{
		"id": "3fa67780eec1",
		"ts": "2026-09-18T20:20:15.403Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4745994.54,
		"hash": "3fa67780eec1dde047e4f5ee132400947902818dafa510bda2d35c3f47d67e8a"
	},
	{
		"id": "61642d159ebc",
		"ts": "2026-09-18T20:20:15.599Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3093600.77,
		"hash": "61642d159ebc0e3a7ebe4070520619125e2c733fb039b245ec0079b8681c4fd6"
	},
	{
		"id": "fdc7d821b768",
		"ts": "2026-09-18T20:20:15.800Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1487018.79,
		"hash": "fdc7d821b76809e814b7da80a3ae6a68af169c7edd9e683bdf991f68b33513d0"
	},
	{
		"id": "6f2a4439721d",
		"ts": "2026-09-18T20:20:16.001Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 492176.62,
		"hash": "6f2a4439721d7973def129b267c625ea5736ea0e67c91d65c464d53867b5897a"
	},
	{
		"id": "be54d8b10242",
		"ts": "2026-09-18T20:20:16.233Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3290763.34,
		"hash": "be54d8b10242f279d23c9a570684f2daef8211f784e376c0b5d3a67a737036ea"
	},
	{
		"id": "f5f74bd90996",
		"ts": "2026-09-18T20:20:16.608Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1332545.33,
		"hash": "f5f74bd90996721bd6d055efebbcf3947ab00ecb4630bb90c56fbd6ea9aecd8f"
	},
	{
		"id": "30fdd3d8fca7",
		"ts": "2026-09-18T20:20:17.203Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 994510.95,
		"hash": "30fdd3d8fca7175f525001a4a45907b1819d3dff0710a30ec80cf011419d2a69"
	},
	{
		"id": "bec5c69c6c10",
		"ts": "2026-09-18T17:26:48.651Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129280515.89,
		"hash": "bec5c69c6c10ce813f2879b1c9e9400b0b248ade17d961d5750230cec57e6ea6"
	},
	{
		"id": "6ca1145b19a9",
		"ts": "2026-09-18T17:26:48.965Z",
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
		"liquidityUsd": 17287546.4,
		"hash": "6ca1145b19a974f46a2ef0d8d114828ed6a28b050f901f29d0b9e1330450d98c"
	},
	{
		"id": "700532fda5e9",
		"ts": "2026-09-18T17:26:49.192Z",
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
		"liquidityUsd": 896345.23,
		"hash": "700532fda5e909bf2e33711eeec7dce13c7bc313d25a29b2b471859422110a07"
	},
	{
		"id": "b83cbb2a45c0",
		"ts": "2026-09-18T17:26:49.394Z",
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
		"liquidityUsd": 33909458.97,
		"hash": "b83cbb2a45c086caca389d74a62a37bf3515bb63a7b8dce9b5e46c25199c3038"
	},
	{
		"id": "1346dce9c431",
		"ts": "2026-09-18T17:26:49.588Z",
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
		"liquidityUsd": 4311212.49,
		"hash": "1346dce9c431021d078a1f652f8395483e1616fa8ea38c7c54ccc208cc2fa9c4"
	},
	{
		"id": "d216a2f6b698",
		"ts": "2026-09-18T17:26:49.802Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1216152.64,
		"hash": "d216a2f6b698ad5c2d01ff042526a5e88f0d95f7901e46f3af7c0a4372f52492"
	},
	{
		"id": "ed6f0df46153",
		"ts": "2026-09-18T17:26:50.026Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1485761.86,
		"hash": "ed6f0df46153ae438552a2b8d93bcdfb5ba61bd022bae147cb729663e8bfbda3"
	},
	{
		"id": "ddf98d359958",
		"ts": "2026-09-18T17:26:50.212Z",
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
		"liquidityUsd": 2260853.7,
		"hash": "ddf98d3599582b95b2c7e9ee9728e5f1e6a352bd7ef77d5e624852d4fb77f790"
	},
	{
		"id": "fa86dc7a6ca7",
		"ts": "2026-09-18T17:26:50.408Z",
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
		"liquidityUsd": 1485761.86,
		"hash": "fa86dc7a6ca75f26bcff1e34728fd89780a13ff25a43acc9c862c6d52b390e69"
	},
	{
		"id": "83822a219874",
		"ts": "2026-09-18T17:26:50.624Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1453410.3,
		"hash": "83822a2198744863ecc979a9d8eeb753ff9974f406bd99ba9f2e0b1d1ca6948b"
	},
	{
		"id": "fa80e267e40f",
		"ts": "2026-09-18T17:26:50.823Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4745906.85,
		"hash": "fa80e267e40f5d81e43a8d02dadd54f65cc9079138eab75dd6d942d4d513f6ea"
	},
	{
		"id": "9c13afda404b",
		"ts": "2026-09-18T17:26:51.012Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3136185.91,
		"hash": "9c13afda404b64728cd3965031bad791d58b5a268eda54685203107b617af759"
	},
	{
		"id": "00a08700cd30",
		"ts": "2026-09-18T17:26:51.205Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 17145616.84,
		"hash": "00a08700cd3001753c89855240b597d54ba86beda5fa35b9db0273273187873a"
	},
	{
		"id": "5d2d01c29e86",
		"ts": "2026-09-18T17:26:51.421Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1458947.96,
		"hash": "5d2d01c29e8629549c36a70e825f25fc8b751f85af42ed16141f2637c1d1d995"
	},
	{
		"id": "0dc1ca815f19",
		"ts": "2026-09-18T17:26:51.614Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1010004,
		"hash": "0dc1ca815f1969ee32d44211001d587a2dca0cda7c64c4d4729517afb95edf74"
	},
	{
		"id": "bfc43dee3315",
		"ts": "2026-09-18T17:26:51.825Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 439330.68,
		"hash": "bfc43dee3315bd15021a8a4c1990259278f41ff14571ceabd613abeca12edba3"
	},
	{
		"id": "062c601c798f",
		"ts": "2026-09-18T17:26:52.026Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 528796.39,
		"hash": "062c601c798f5b3980e5a5c338a91f29a1d3c56be3f6adcee38d17e9d7aa7ab3"
	},
	{
		"id": "f49533b134ca",
		"ts": "2026-09-18T17:26:52.243Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1275895.98,
		"hash": "f49533b134ca8512b6e9a3d26d30fe34fbe68af11b631d519b8c3b5d833fa5ab"
	},
	{
		"id": "4cde7d975bb6",
		"ts": "2026-09-18T17:26:52.436Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3240114.9,
		"hash": "4cde7d975bb688bfe1d52b37e52b1eff215fcab74671b5ef65e6670181190566"
	},
	{
		"id": "5e5cfe936881",
		"ts": "2026-09-18T13:21:28.775Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 128895312.2,
		"hash": "5e5cfe936881f77413c1d338fa40e7735541a295c037411f37c48a55ea60d8c1"
	},
	{
		"id": "ea0d54fa00d1",
		"ts": "2026-09-18T13:21:28.983Z",
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
		"liquidityUsd": 16016468.01,
		"hash": "ea0d54fa00d170c211170e09ef646e1ef9bae8acd86a5f4eeb20d837c4939075"
	},
	{
		"id": "144538f2622c",
		"ts": "2026-09-18T13:21:29.189Z",
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
		"liquidityUsd": 856737.26,
		"hash": "144538f2622c7743e3b692a8eed911a7199327ec205f64c939625b5cb3bd9ff6"
	},
	{
		"id": "7879fbbd76c7",
		"ts": "2026-09-18T13:21:29.371Z",
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
		"liquidityUsd": 35986098.01,
		"hash": "7879fbbd76c74aa42a8899af20c1835cfd5e7ebd67aa36348a8dedbce0f832eb"
	},
	{
		"id": "5582038f35ec",
		"ts": "2026-09-18T13:21:29.561Z",
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
		"liquidityUsd": 4197912.98,
		"hash": "5582038f35ec7215a11978da2f46c8cec68c9efe6ab461f40489df5ade93131f"
	},
	{
		"id": "69f4b26671ba",
		"ts": "2026-09-18T13:21:29.743Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1176402.08,
		"hash": "69f4b26671ba2ff094a75350048ce25bdd72b774012f68b7a46b2e8d14180b81"
	},
	{
		"id": "385180d10ed6",
		"ts": "2026-09-18T13:21:29.933Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 35986098.01,
		"hash": "385180d10ed657bb8849f963dff104d6cd4d91c0a0b4901e961c4b3e8e20e232"
	},
	{
		"id": "875840da5d9c",
		"ts": "2026-09-18T13:21:30.116Z",
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
		"liquidityUsd": 2316519.53,
		"hash": "875840da5d9c822aba68d57848400eef02e1c06c63c9174ae89355f77dedcc5c"
	},
	{
		"id": "381c79740ae4",
		"ts": "2026-09-18T13:21:30.305Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1377580.49,
		"hash": "381c79740ae4b1d7a4d8f84bc9028116c4d91e8ed61d044842b7d9c0272adc74"
	},
	{
		"id": "f563ae090ed1",
		"ts": "2026-09-18T13:21:30.489Z",
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
		"liquidityUsd": 133080.93,
		"hash": "f563ae090ed1193759f789bc18c7ff2feefacd103cc5e794fc8ce86b8e04e62b"
	},
	{
		"id": "460e527c8b65",
		"ts": "2026-09-18T13:21:30.704Z",
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
		"liquidityUsd": 2926886.41,
		"hash": "460e527c8b6582a5f14d3b09e53d6e18aa4c5bca09cd3aa2e8b9546c95bc82d3"
	},
	{
		"id": "3fd66f2d4137",
		"ts": "2026-09-18T13:21:30.891Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4577242.65,
		"hash": "3fd66f2d413733a96a4c164ee0ea3bf438a41c19784985799801ad0df745aa37"
	},
	{
		"id": "02b2df549deb",
		"ts": "2026-09-18T13:21:31.077Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 16664967.14,
		"hash": "02b2df549deb413801f1aedc56a6a84076ab8c4271c0dbd315ce30e07788f549"
	},
	{
		"id": "79ba48a56cfa",
		"ts": "2026-09-18T13:21:31.265Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1382892.14,
		"hash": "79ba48a56cfa477f6ad399c38ed6c72fde0d57dbc5ed03f22aabef96e9389613"
	},
	{
		"id": "0eb294f2f51e",
		"ts": "2026-09-18T13:21:31.447Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 395884.23,
		"hash": "0eb294f2f51e6cd9b05153c65a067f6c956fccf74776163911ce5fc5a6849f72"
	},
	{
		"id": "e7b1be0dbdb7",
		"ts": "2026-09-18T13:21:31.640Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 962560.1,
		"hash": "e7b1be0dbdb730dcd2bd60517f618debee85867ac8b3c44f00c27ee07e19c71e"
	},
	{
		"id": "d5cc4b3bc116",
		"ts": "2026-09-18T13:21:31.827Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 187602.02,
		"hash": "d5cc4b3bc11602a55f924670c6150a1aadc9e23902013b6485be8344e6b63a16"
	},
	{
		"id": "903c678cc1ef",
		"ts": "2026-09-18T13:21:32.011Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1891867.62,
		"hash": "903c678cc1ef75b808c3ca5bcc57ff4a20f85f7a8f826c613a6618f1d199b318"
	},
	{
		"id": "538a4b2df2ae",
		"ts": "2026-09-18T13:21:32.190Z",
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
		"liquidityUsd": 519217.84,
		"hash": "538a4b2df2ae728206f43281fb5b5ccbaff95ce744b746ce6aebd164a3ec2512"
	},
	{
		"id": "c2de913e37db",
		"ts": "2026-09-18T08:09:06.267Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 128567084.91,
		"hash": "c2de913e37dbc9317e41d34c2eb072341729285ad68c591fd1fc8948209f647c"
	},
	{
		"id": "7509f0d716c1",
		"ts": "2026-09-18T08:09:06.910Z",
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
		"liquidityUsd": 17322501.93,
		"hash": "7509f0d716c1e2496202353e419069d96e5e7b6c07ccf482023a96a4f961a9e8"
	},
	{
		"id": "920e78c8ee15",
		"ts": "2026-09-18T08:09:07.149Z",
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
		"liquidityUsd": 969561.72,
		"hash": "920e78c8ee15ec440ff3ce0e01bd857a90ce4375b4aec85a26eacfb5d6ae80fb"
	},
	{
		"id": "23a496b41ede",
		"ts": "2026-09-18T08:09:07.384Z",
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
		"liquidityUsd": 36563788.07,
		"hash": "23a496b41ede2e4d0468a68c72ad4c4af69e8bca77b807e93ab4e30caeea3f77"
	},
	{
		"id": "9f5313df906a",
		"ts": "2026-09-18T08:09:07.618Z",
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
		"liquidityUsd": 4045587.52,
		"hash": "9f5313df906a9ebac3b38b0bbe6f05965efb4b09e8c73d898acf7be37e50950a"
	},
	{
		"id": "687fef57c68f",
		"ts": "2026-09-18T08:09:07.856Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1181986.8,
		"hash": "687fef57c68f4c44806f5f3c3f3e71c791d1d7a8d25eb8f4b6816defccc79142"
	},
	{
		"id": "36fd120e28cc",
		"ts": "2026-09-18T08:09:08.091Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36577999.43,
		"hash": "36fd120e28cc5a0a877f3dd3928d98b122bcd153879a67edd19392a7c08d11fa"
	},
	{
		"id": "ebc5d7d19d61",
		"ts": "2026-09-18T08:09:08.327Z",
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
		"liquidityUsd": 1062706.24,
		"hash": "ebc5d7d19d61157f39ad06382e75fdaa641f7e367599cb3d5e9af17b83c316b6"
	},
	{
		"id": "8b256d0469b8",
		"ts": "2026-09-18T08:09:08.559Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1344869.03,
		"hash": "8b256d0469b82b65b11ffae10a2cfa19109ee8edec46b5853dc480c0fd90cbf7"
	},
	{
		"id": "c48e18f9b0f0",
		"ts": "2026-09-18T08:09:08.870Z",
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
		"liquidityUsd": 767935.67,
		"hash": "c48e18f9b0f0c4bff6e18d1f6c51f948d78d1a0d1b1ad0f417eaaa3bb9599aa3"
	},
	{
		"id": "e8c572a9948f",
		"ts": "2026-09-18T08:09:09.088Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2868207.34,
		"hash": "e8c572a9948fb96499905d282bceb4a8730a347738a1e621e4227c07e0482d37"
	},
	{
		"id": "ae693fd124de",
		"ts": "2026-09-18T08:09:09.306Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4559233.68,
		"hash": "ae693fd124debaf9b1de25645bc7c5f4bd924d2d7b06fb8505cd32dfe7d70da2"
	},
	{
		"id": "6b476ad1591e",
		"ts": "2026-09-18T08:09:09.524Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 16153090.24,
		"hash": "6b476ad1591ee63cab5f82fb6667205d39b5c71c49de8700c6af6235ec30369c"
	},
	{
		"id": "75da3a4eb17f",
		"ts": "2026-09-18T08:09:09.745Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 956466.86,
		"hash": "75da3a4eb17f02b1d3c9679bb2f0b330472895e1b92b8194d49fb3603b8a3fb8"
	},
	{
		"id": "3c0c951885ef",
		"ts": "2026-09-18T08:09:09.963Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1889451.8,
		"hash": "3c0c951885efe7748dfc0ab278cbf383ccf06611ea38eb73961b1dd12e4e94d3"
	},
	{
		"id": "302e87f4e3bf",
		"ts": "2026-09-18T08:09:10.183Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 182632.08,
		"hash": "302e87f4e3bf77003fad83e6654f26309a44f9a7417fda037f7923d6d79390f4"
	},
	{
		"id": "a2d02b55dc62",
		"ts": "2026-09-18T08:09:10.402Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1381849.05,
		"hash": "a2d02b55dc62be9868e6fa1761848de125c8b0e234c6478ff4b8c4eb6aa750bc"
	},
	{
		"id": "520ab595d2ce",
		"ts": "2026-09-18T08:09:10.622Z",
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
		"liquidityUsd": 540144.66,
		"hash": "520ab595d2ceb323b076f341caa6b90faa32e803a1ee7fea5dd2ac7c9bc89c93"
	},
	{
		"id": "25d2ea699ed5",
		"ts": "2026-09-18T08:09:10.840Z",
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
		"liquidityUsd": 600930.93,
		"hash": "25d2ea699ed598317cc5dbbecf1c155dc99c37166cccb3df74c6561ccbc5294d"
	},
	{
		"id": "70422a8c46ab",
		"ts": "2026-09-18T02:59:31.592Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 128191324.75,
		"hash": "70422a8c46ab67c38933a1217d950e51568c57509f140bdb8ca1c0e02d92a358"
	},
	{
		"id": "c017ad24f7fa",
		"ts": "2026-09-18T02:59:31.840Z",
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
		"liquidityUsd": 16962690.54,
		"hash": "c017ad24f7faff631e6eb0c470b157a383552eecb38be1558157e2e387c3c1bc"
	},
	{
		"id": "6761486d0d0c",
		"ts": "2026-09-18T02:59:32.082Z",
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
		"liquidityUsd": 960085.89,
		"hash": "6761486d0d0ce3e3b8ac63d05b5ee8b55ac89263a0c3421c3714b2ff00a8ffd2"
	},
	{
		"id": "4f82b9e6a55c",
		"ts": "2026-09-18T02:59:32.317Z",
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
		"liquidityUsd": 35189806.88,
		"hash": "4f82b9e6a55cf478a07aeb88564d44ba214045f23025e4df7abac4000d18b87e"
	},
	{
		"id": "03039d820877",
		"ts": "2026-09-18T02:59:32.554Z",
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
		"liquidityUsd": 3981078.61,
		"hash": "03039d8208778ef4c6f2e2bb64175a7e210dec43010a34b3d99e63dce0d09003"
	},
	{
		"id": "e62ab3f1e794",
		"ts": "2026-09-18T02:59:32.819Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1164503.15,
		"hash": "e62ab3f1e794cd9eb84005311d85fdc1b708884f7d58b579b721cf0511f393aa"
	},
	{
		"id": "7cde9cc9640f",
		"ts": "2026-09-18T02:59:33.055Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 35189806.88,
		"hash": "7cde9cc9640f0432f764cb7fad4f30e958a05a9c232fca47921c35b178affdf1"
	},
	{
		"id": "28ef1798b8b5",
		"ts": "2026-09-18T02:59:33.294Z",
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
		"liquidityUsd": 1048267.21,
		"hash": "28ef1798b8b551159975626a0fb4a7384fb553da8db024131efab99902d1f1dd"
	},
	{
		"id": "09159ea9df66",
		"ts": "2026-09-18T02:59:33.528Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1351461.82,
		"hash": "09159ea9df66076f5b7af18bea67c9c2f0359136469f0628be9555685ec4b898"
	},
	{
		"id": "7225235a832b",
		"ts": "2026-09-18T02:59:33.761Z",
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
		"liquidityUsd": 1524088.24,
		"hash": "7225235a832b50589e86621be3ef7ad090f54077b0a272962c5cc571b43267b3"
	},
	{
		"id": "25bf7a18849c",
		"ts": "2026-09-18T02:59:33.978Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2917568.49,
		"hash": "25bf7a18849c2932b61d33ee58256034a330daacb2112612dc9a152d7403d39f"
	},
	{
		"id": "511971e2a3b1",
		"ts": "2026-09-18T02:59:34.196Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 15629319.08,
		"hash": "511971e2a3b19cdb3466403fca0a7fffcbbaff488947db2d2b3a6217f4e7a8d1"
	},
	{
		"id": "2695e743520e",
		"ts": "2026-09-18T02:59:34.415Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4610007.99,
		"hash": "2695e743520eef663135d833d7a4480988e045d150a93c9b025fa34cc37ba1dd"
	},
	{
		"id": "13b434f4b85b",
		"ts": "2026-09-18T02:59:34.639Z",
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
		"liquidityUsd": 522317.39,
		"hash": "13b434f4b85bc639cfacd9a8b37ef4395893d2e43b236ffeb6bb106e9c543ba5"
	},
	{
		"id": "5de0fdbeab7a",
		"ts": "2026-09-18T02:59:34.859Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1858395.85,
		"hash": "5de0fdbeab7a3d629ad99dfc6adadb6980371e44f47f7c962eb95049b0bcb668"
	},
	{
		"id": "2e5faefdd916",
		"ts": "2026-09-18T02:59:35.080Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1113223.51,
		"hash": "2e5faefdd91673d37c6982c6ccc2359cb4203f090718b2ff88b3e1b9b4addba3"
	},
	{
		"id": "6eedd8d38ed3",
		"ts": "2026-09-18T02:59:35.298Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 186767.39,
		"hash": "6eedd8d38ed30b9c61dc3e81a24e6ecc903aaad0c6d2abac18ca8ea68c4d7245"
	},
	{
		"id": "edef70265a6b",
		"ts": "2026-09-18T02:59:35.517Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 367229.78,
		"hash": "edef70265a6b15aaecabd4da61fc7934f01d68a4bfacb077c700860af237c939"
	},
	{
		"id": "4a206677898d",
		"ts": "2026-09-18T02:59:35.773Z",
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
		"liquidityUsd": 598034.69,
		"hash": "4a206677898d52e48587e21452bef321b0cff80b9261a42f2fe6f99fc0d24fe4"
	},
	{
		"id": "f83455c1057f",
		"ts": "2026-09-17T23:52:47.758Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 127836071.3,
		"hash": "f83455c1057f9c3edee9e6213739e4c4283ddb682a934105287cba48317b5249"
	},
	{
		"id": "8a3d99b3834d",
		"ts": "2026-09-17T23:52:48.007Z",
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
		"liquidityUsd": 16728610.71,
		"hash": "8a3d99b3834d26300fc487eaf0f0b0f44bb5d766647014430bdc65435bac11dd"
	},
	{
		"id": "8c245c819cc0",
		"ts": "2026-09-17T23:52:48.254Z",
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
		"liquidityUsd": 954308.09,
		"hash": "8c245c819cc0c6a360ccf28bc65eb5a0a7ad8e614f7cb6f90e923d630aa3b16e"
	},
	{
		"id": "2249743986c8",
		"ts": "2026-09-17T23:52:48.515Z",
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
		"liquidityUsd": 35012819.57,
		"hash": "2249743986c8b8e15819644ac0805b7dc992d0177bee1b540d4b7e2ca57a01b8"
	},
	{
		"id": "0450eb4a20ac",
		"ts": "2026-09-17T23:52:48.762Z",
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
		"liquidityUsd": 3902630.28,
		"hash": "0450eb4a20ac741590c618fa7b55671bcd10c4bb288d3e5c4e34f55ec22d1547"
	},
	{
		"id": "238c0083f1dc",
		"ts": "2026-09-17T23:52:49.044Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1152679.54,
		"hash": "238c0083f1dc5042f91dea921d93450583c56619e3565a10bc03aa1e56acac18"
	},
	{
		"id": "c329b701b963",
		"ts": "2026-09-17T23:52:49.301Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 35012819.57,
		"hash": "c329b701b963456ffc37201dfae2668b41face1502e50c39f3f73a4db9005545"
	},
	{
		"id": "7400e11116c8",
		"ts": "2026-09-17T23:52:49.550Z",
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
		"liquidityUsd": 1078632.3,
		"hash": "7400e11116c8da657538c27d026f877040e7573335a60a3c50135272b32e92df"
	},
	{
		"id": "bb3b489e79bd",
		"ts": "2026-09-17T23:52:49.793Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1340969.81,
		"hash": "bb3b489e79bdc21428ce88b7c6d2f6bb0fe27001653b770d4e1f750e6c8b4c40"
	},
	{
		"id": "9fabc0fd889d",
		"ts": "2026-09-17T23:52:50.059Z",
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
		"liquidityUsd": 1553010.97,
		"hash": "9fabc0fd889d58191772fe1f01db6fd166334e3a338da1690de6bfa0949c4af4"
	},
	{
		"id": "9095f100f033",
		"ts": "2026-09-17T23:52:50.289Z",
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
		"liquidityUsd": 15666897.42,
		"hash": "9095f100f0336f344bf1ffc76dbfda874614e664c340815890760e4b39cb1a05"
	},
	{
		"id": "beb828fc3dca",
		"ts": "2026-09-17T23:52:50.522Z",
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
		"liquidityUsd": 2851692.15,
		"hash": "beb828fc3dcafb719b62cf056af30b4e7e7633e881b250202a783f5977197f68"
	},
	{
		"id": "3ec42bd8d8f0",
		"ts": "2026-09-17T23:52:50.767Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4597675.18,
		"hash": "3ec42bd8d8f09099536961e78d97651ef767ceef39a87c9cf06626d23e699ce6"
	},
	{
		"id": "e79e5486dca2",
		"ts": "2026-09-17T23:52:51.000Z",
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
		"liquidityUsd": 541197.16,
		"hash": "e79e5486dca22e3e307690ea72955a99ce353ece44ca5fd4c57651da90fc32d7"
	},
	{
		"id": "c4922cd59a99",
		"ts": "2026-09-17T23:52:51.237Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1139667.34,
		"hash": "c4922cd59a9959e39a40216489b752cc5ac5a8b72d0e99e2f44d54e834f3d632"
	},
	{
		"id": "efeb5fadf223",
		"ts": "2026-09-17T23:52:51.481Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1849003.35,
		"hash": "efeb5fadf223826badb68471018f694d3d5684da063a70ec06c7def319a1b168"
	},
	{
		"id": "b1f7236bc731",
		"ts": "2026-09-17T23:52:51.713Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 177993.59,
		"hash": "b1f7236bc7319301c514784d8ae0ea1e3721bac9417d9e2caf2ba139036acbec"
	},
	{
		"id": "374bcd788cd6",
		"ts": "2026-09-17T23:52:51.943Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 377543.32,
		"hash": "374bcd788cd697636001510365222f612aa0d4076e551869adcb545a91de1dc7"
	},
	{
		"id": "dbb0c7ab69a4",
		"ts": "2026-09-17T23:52:52.189Z",
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
		"liquidityUsd": 600142.33,
		"hash": "dbb0c7ab69a48d6e01dd23295518f448c9f54f54183a26d8e39d1f245cf70bc0"
	},
	{
		"id": "0df42e5f8021",
		"ts": "2026-09-17T21:53:47.094Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 128193658.04,
		"hash": "0df42e5f8021511c52d84ac315cca1054515d9971317239ab0d1e6898cabe786"
	},
	{
		"id": "50023403d0d8",
		"ts": "2026-09-17T21:53:47.561Z",
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
		"liquidityUsd": 16689750.79,
		"hash": "50023403d0d865114664f453d1249d5eb819c59ae7975e3f91685a6c7723dbda"
	},
	{
		"id": "bbae9fd3639b",
		"ts": "2026-09-17T21:53:47.750Z",
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
		"liquidityUsd": 948426.75,
		"hash": "bbae9fd3639b0fa93e4fb6f48faabeaabe0e75d3323e50b5dce640be92c11fba"
	},
	{
		"id": "be1880146973",
		"ts": "2026-09-17T21:53:47.949Z",
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
		"liquidityUsd": 34995847.1,
		"hash": "be1880146973f62cae849905256a8d59cec9ceb983f1bffa7385335d91c745c7"
	},
	{
		"id": "418a51317dd8",
		"ts": "2026-09-17T21:53:48.166Z",
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
		"liquidityUsd": 3901507.21,
		"hash": "418a51317dd8a0e2c9f6222b654a680ea520a49842399a01fc6165b97ed85b36"
	},
	{
		"id": "dcd69bdc2424",
		"ts": "2026-09-17T21:53:48.365Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1151619.65,
		"hash": "dcd69bdc242409a9a39226a2210d4c03bef0c5cdd0f24e94470670bf2c5cdb3d"
	},
	{
		"id": "6ccfb81498c7",
		"ts": "2026-09-17T21:53:48.568Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1556661.67,
		"hash": "6ccfb81498c753c9701d6307624c15592889c0b22c6baa03b632412e19325cf6"
	},
	{
		"id": "7466f3d1224c",
		"ts": "2026-09-17T21:53:48.771Z",
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
		"liquidityUsd": 1080607.5,
		"hash": "7466f3d1224c00dfecdc40b4ff88810a4f7fc883419f5b1851b37d72d9f34a81"
	},
	{
		"id": "930db93f81ab",
		"ts": "2026-09-17T21:53:48.959Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1344719.39,
		"hash": "930db93f81abdca45c4d9ab103f29bbeec1800f76d95dc758eb6002e809108b5"
	},
	{
		"id": "787315f70968",
		"ts": "2026-09-17T21:53:49.152Z",
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
		"liquidityUsd": 1556661.67,
		"hash": "787315f70968015bac26aaf9e7ed352fa17f4a9c11e5411e45e2b97c127330d0"
	},
	{
		"id": "e131ce13f902",
		"ts": "2026-09-17T21:53:49.342Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 15446786.44,
		"hash": "e131ce13f9028a94b5a0d8b2b02ba0b5a51380f699b3b2e7b868bdaf084d9b32"
	},
	{
		"id": "1752996dc6d0",
		"ts": "2026-09-17T21:53:49.542Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2864650.6,
		"hash": "1752996dc6d0d9b02cdc6edbcdfe9c5b9f3c4e408f99004506929793fc2a3322"
	},
	{
		"id": "22fef1ce900c",
		"ts": "2026-09-17T21:53:49.783Z",
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
		"liquidityUsd": 542057.74,
		"hash": "22fef1ce900c90cc5fb696abd5238766624c01c1c58bfa3bd53b405999abbb87"
	},
	{
		"id": "dfeb3b909e8a",
		"ts": "2026-09-17T21:53:50.033Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4565918.26,
		"hash": "dfeb3b909e8ac469adad3f410ad44ddede9d74bbae24c78384af869c614d1016"
	},
	{
		"id": "0777dce1cd9c",
		"ts": "2026-09-17T21:53:50.253Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 1105681.65,
		"hash": "0777dce1cd9c40e138eede324975c89688498e37657ab346fa56c57cbcfe76cf"
	}
]
