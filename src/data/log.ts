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
	"updatedAt": "2026-09-01T13:01:25.357Z",
	"tokensScored": 15744,
	"verdictsIssued": 15744,
	"safe": 13394,
	"risky": 1165,
	"likelyRug": 1185,
	"ticks": 906
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "e5fd6f219dc0",
		"ts": "2026-09-01T13:01:20.746Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115612352.32,
		"hash": "e5fd6f219dc035dc691653d475e550fc2c9b8a3cbaf8a2f0631585248b9fb2ea"
	},
	{
		"id": "f4818787a50a",
		"ts": "2026-09-01T13:01:21.006Z",
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
		"liquidityUsd": 13659368.53,
		"hash": "f4818787a50a975c246bf9d7a930b69b4c8468e065cea744c59b9c5bd984cb57"
	},
	{
		"id": "e968f7170efa",
		"ts": "2026-09-01T13:01:21.490Z",
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
		"liquidityUsd": 949376.27,
		"hash": "e968f7170efaec6c968ac3838d76880b23c20464ece7fc5f027ee257a196cce6"
	},
	{
		"id": "a87dad37ca9f",
		"ts": "2026-09-01T13:01:21.743Z",
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
		"liquidityUsd": 28906827.71,
		"hash": "a87dad37ca9f5c3c8d8d4aa1d1c89dd18cd0126de443c9b3193909ae3b1676e8"
	},
	{
		"id": "6bb421d5ed3b",
		"ts": "2026-09-01T13:01:21.989Z",
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
		"liquidityUsd": 4171010.51,
		"hash": "6bb421d5ed3bd4745652215723e281da04717994542e5d3c2796a1303451dd79"
	},
	{
		"id": "41ab95d805a8",
		"ts": "2026-09-01T13:01:22.250Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1162371.72,
		"hash": "41ab95d805a84ef23fe75593ecb487f96d4cc226ccfbcb059bd60f19a28a771f"
	},
	{
		"id": "c4d768cfc303",
		"ts": "2026-09-01T13:01:22.501Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28906827.71,
		"hash": "c4d768cfc30341e5804acc126463a446f83d5f8ded36ac222fb45250dad7536a"
	},
	{
		"id": "05b762c7c57e",
		"ts": "2026-09-01T13:01:22.742Z",
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
		"liquidityUsd": 1678725.58,
		"hash": "05b762c7c57eb9b7bc28fa6b304f899f925c420fbb2721a564f4aa230dc46d57"
	},
	{
		"id": "402e705cc344",
		"ts": "2026-09-01T13:01:23.222Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 788820.22,
		"hash": "402e705cc344cf29c1ab99b7769b2eae8fd3705417871ffd62bbff188b094825"
	},
	{
		"id": "8334b36dcfb7",
		"ts": "2026-09-01T13:01:23.473Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 219382.21,
		"hash": "8334b36dcfb73db969464d8cdd8dc6e1afab2343a778be28b19e9d39c5cf1cda"
	},
	{
		"id": "82b44cbfd3f2",
		"ts": "2026-09-01T13:01:23.697Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1368694.5,
		"hash": "82b44cbfd3f2efdcd296657131618a41d19b60d61b3c7225517d47e2e88ff5e5"
	},
	{
		"id": "21680edf162d",
		"ts": "2026-09-01T13:01:23.943Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4277903.98,
		"hash": "21680edf162ddaf6f8c46f42bc9955926be9fab47d567946df8afed5a3086d33"
	},
	{
		"id": "c7392a06d910",
		"ts": "2026-09-01T13:01:24.180Z",
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
		"liquidityUsd": 687449.75,
		"hash": "c7392a06d9106389048bf51e0d2e00bbb2d62fa19a9510fc5951c1a84b0ac1d6"
	},
	{
		"id": "409e0f38d5d8",
		"ts": "2026-09-01T13:01:24.410Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 100103.82,
		"hash": "409e0f38d5d871de71e2fde076a4feb3e6cae20f873629d4713ffaa646b8df14"
	},
	{
		"id": "35abc728601c",
		"ts": "2026-09-01T13:01:24.658Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 400935.98,
		"hash": "35abc728601cfc7d17d3d8a2fbce92986ed6aa16cb86b98ead0bf426fda1ee5b"
	},
	{
		"id": "2d041675f959",
		"ts": "2026-09-01T13:01:24.894Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1170873.38,
		"hash": "2d041675f959a00cdebe7d330a8fc7b4e68e9ecb633a357a28206dd306f490b7"
	},
	{
		"id": "38dce30d1450",
		"ts": "2026-09-01T13:01:25.116Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 12499660.38,
		"hash": "38dce30d1450a88b865ddf83e5c6e8d5122f4ea13bb73d6fcc1a2912a1facb58"
	},
	{
		"id": "9b5e032181c6",
		"ts": "2026-09-01T13:01:25.357Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3345597.8,
		"hash": "9b5e032181c6734b1ad5c8e149cf1ca58260003c10005586a2ae2d9e87c75b83"
	},
	{
		"id": "ec87187a763d",
		"ts": "2026-09-01T07:10:53.257Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115534731.39,
		"hash": "ec87187a763d663ee6fd09618fd51c81e4bf83e676bbac5640aaedd9bef4d809"
	},
	{
		"id": "3217957f6566",
		"ts": "2026-09-01T07:10:53.502Z",
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
		"liquidityUsd": 19946500.15,
		"hash": "3217957f6566705e7886e8b2819a6b0ff04ae566d69306124bef6a59796971b3"
	},
	{
		"id": "dd3c6b1c97aa",
		"ts": "2026-09-01T07:10:53.757Z",
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
		"liquidityUsd": 962135.97,
		"hash": "dd3c6b1c97aa1852599b197408779050d316a3f3b67374aadd051694ce843587"
	},
	{
		"id": "8eae7d1a12c7",
		"ts": "2026-09-01T07:10:53.995Z",
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
		"liquidityUsd": 29085440.27,
		"hash": "8eae7d1a12c79718d98a6b2118e2f69f8ff21d94ebb4eb5588c5cf9fb7d29761"
	},
	{
		"id": "9ceb840c1761",
		"ts": "2026-09-01T07:10:54.250Z",
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
		"liquidityUsd": 4267638.73,
		"hash": "9ceb840c17613c290e8ce0ce69a5feb5c722c82f7669bfa528d373fa2cdf4ce9"
	},
	{
		"id": "d330603452c3",
		"ts": "2026-09-01T07:10:54.501Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1180626.11,
		"hash": "d330603452c396a47dc11ef8f48dcc654fe144e9c9bfb1726e510f730128701d"
	},
	{
		"id": "8f1d87c70585",
		"ts": "2026-09-01T07:10:54.752Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29085440.27,
		"hash": "8f1d87c70585463a299a5a9ca0e5980bac283455da88ab24fefc3669126b0e0b"
	},
	{
		"id": "28c63308cdd0",
		"ts": "2026-09-01T07:10:55.007Z",
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
		"liquidityUsd": 3184056.99,
		"hash": "28c63308cdd078efe698d15de86bc28961f41d76e647d0e7d1405f70e7b9affd"
	},
	{
		"id": "1e47f93f0a37",
		"ts": "2026-09-01T07:10:55.263Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 736924.38,
		"hash": "1e47f93f0a372451939904f502928993aa3b5561aaf17065691bbbdb4922768c"
	},
	{
		"id": "4709393746bd",
		"ts": "2026-09-01T07:10:55.513Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1364494.03,
		"hash": "4709393746bd6a5fce356f00ac0302c50a2d2a289a7f2b1961413e25724df1ca"
	},
	{
		"id": "460667e0ae63",
		"ts": "2026-09-01T07:10:55.735Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 207117.94,
		"hash": "460667e0ae639b8ef51a3043cb8ffc3db7d5f4de0bc59ed54d8c0b5e0910d999"
	},
	{
		"id": "1b6b5f69cb37",
		"ts": "2026-09-01T07:10:55.972Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 412302.14,
		"hash": "1b6b5f69cb37a9a25c0c96248ee14540f41b6baa0d5184f3950a5d930bd25af9"
	},
	{
		"id": "5de53f3b8d99",
		"ts": "2026-09-01T07:10:56.208Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4261745.68,
		"hash": "5de53f3b8d9961f7cd129dec065e684c4e00d2bb5795a742ffec6b6dc9db5a3b"
	},
	{
		"id": "58eff7cd1059",
		"ts": "2026-09-01T07:10:56.430Z",
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
		"liquidityUsd": 710360.22,
		"hash": "58eff7cd1059300a425559399378308c25cba9c2dca8659dda31f0469525e7ed"
	},
	{
		"id": "49007ff0bb87",
		"ts": "2026-09-01T07:10:56.669Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 94336.97,
		"hash": "49007ff0bb87e8a1e529db6071fb388d0d2c2f59d765e8595b640da943b65081"
	},
	{
		"id": "3b211ae40032",
		"ts": "2026-09-01T07:10:56.904Z",
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
		"liquidityUsd": 484639.38,
		"hash": "3b211ae4003277fdfe2a342b385395b2d9773cc636baf41d08b99fdaf23df31e"
	},
	{
		"id": "592ba24865b6",
		"ts": "2026-09-01T07:10:57.126Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1195857.12,
		"hash": "592ba24865b68b4d6d060cf4555b777339b4079f936d1811093fc64c82ec6537"
	},
	{
		"id": "6659d56c3364",
		"ts": "2026-09-01T07:10:57.363Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3403038.29,
		"hash": "6659d56c336456f983786dd922ded46a806e732da90789cf84ce3bb16c0fe96f"
	},
	{
		"id": "431f45e8e339",
		"ts": "2026-09-01T01:35:23.487Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115011105.38,
		"hash": "431f45e8e339338840e7a48a93d639ab09770f796d20590d8aa060af8c832164"
	},
	{
		"id": "e92507a83a84",
		"ts": "2026-09-01T01:35:23.801Z",
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
		"liquidityUsd": 19955737.33,
		"hash": "e92507a83a840fe46ea18da403fc5b182a7130669012a88168be47a8ead882f9"
	},
	{
		"id": "a828815c1936",
		"ts": "2026-09-01T01:35:24.264Z",
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
		"liquidityUsd": 960650.88,
		"hash": "a828815c1936a503abae402f1d41551cbe01b469a7b83e659bc7ce7de0fddf38"
	},
	{
		"id": "dac6ad9b4603",
		"ts": "2026-09-01T01:35:24.458Z",
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
		"liquidityUsd": 28477534.39,
		"hash": "dac6ad9b460335103fa39994f8360a6a6e67d4bced1e51d682def93415a0f98a"
	},
	{
		"id": "94850ac69807",
		"ts": "2026-09-01T01:35:24.658Z",
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
		"liquidityUsd": 4190474.71,
		"hash": "94850ac69807637819cc093ae30740048403fa88b1fadf91d8b141f969cb91d2"
	},
	{
		"id": "8131994799d2",
		"ts": "2026-09-01T01:35:24.846Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1173865.14,
		"hash": "8131994799d2338a05fe9a4af40782a93395292c1fbe7dfa5df2a63cec55785d"
	},
	{
		"id": "89aa2ba451bb",
		"ts": "2026-09-01T01:35:25.053Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 826445.98,
		"hash": "89aa2ba451bbee097ad18ccd136dbd44edd2be1177ed372a6be7195946af85f7"
	},
	{
		"id": "5bb0a809d787",
		"ts": "2026-09-01T01:35:25.254Z",
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
		"liquidityUsd": 1688423.92,
		"hash": "5bb0a809d787ecfd0083b031ae37e3f5882b44892fb96e9bd69e36c338319c9c"
	},
	{
		"id": "b585210f0604",
		"ts": "2026-09-01T01:35:25.440Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 754844.98,
		"hash": "b585210f0604cb3215d4cbaf87b5a5f1834e366a939e105ee2b339a1ca5d288f"
	},
	{
		"id": "18c2b5b59b26",
		"ts": "2026-09-01T01:35:25.629Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1383461.18,
		"hash": "18c2b5b59b26f3ae4a2494ce05d2d2dcf3941b5441a3b46c0dd127e953a0e252"
	},
	{
		"id": "e25b203654ec",
		"ts": "2026-09-01T01:35:25.818Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 92185.01,
		"hash": "e25b203654eca3feea3e2cca5a6e1b856f160f60592e03e449b8b480fcd5bbea"
	},
	{
		"id": "beb3fc71113f",
		"ts": "2026-09-01T01:35:26.076Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 198988.85,
		"hash": "beb3fc71113fa9454d190c5b2e119387524114423e864630a04dce3539e8e45b"
	},
	{
		"id": "4361c7e9df2a",
		"ts": "2026-09-01T01:35:26.265Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 424057.71,
		"hash": "4361c7e9df2aba6063680c0cd9c00a6d070fe7b3dffdfa6bc9f53b989b03755a"
	},
	{
		"id": "6734373733ba",
		"ts": "2026-09-01T01:35:26.458Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4382142.83,
		"hash": "6734373733ba15d39cfa38d0cce484153775f7ca9290be1f4654e32bc8c9b890"
	},
	{
		"id": "dcbc2a8138c6",
		"ts": "2026-09-01T01:35:26.646Z",
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
		"liquidityUsd": 444207.77,
		"hash": "dcbc2a8138c68b5c24565df205709ab46826c8b2000b477606cc781e6732ce4d"
	},
	{
		"id": "f763a9b74094",
		"ts": "2026-09-01T01:35:26.839Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1823385.97,
		"hash": "f763a9b74094cbe3e494e5ba59abf7d2dd8308cb95ffc521f9d9a5f9f1448ed1"
	},
	{
		"id": "6e4cedd5730b",
		"ts": "2026-09-01T01:35:27.029Z",
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
		"liquidityUsd": 709369.31,
		"hash": "6e4cedd5730b5e4e277ed6ad26f4f9db550b503a5348d53b5b3e0ff66f6f27cd"
	},
	{
		"id": "16f309afb0aa",
		"ts": "2026-09-01T01:35:27.215Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1189664.5,
		"hash": "16f309afb0aa38cc7d79d1065991ee54f6e7db1f52999d7e6014dba443f50196"
	},
	{
		"id": "687805bf7b59",
		"ts": "2026-08-31T22:22:26.606Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115194556.14,
		"hash": "687805bf7b599282570f55ddeb6e677ae7f27b162ff9d32e73deafeca6eabe29"
	},
	{
		"id": "0c80856bcb25",
		"ts": "2026-08-31T22:22:26.812Z",
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
		"liquidityUsd": 18613703.99,
		"hash": "0c80856bcb2508b47d770c790e63db46a88512e55aa48a8ca107914873168e52"
	},
	{
		"id": "88cc80871133",
		"ts": "2026-08-31T22:22:27.007Z",
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
		"liquidityUsd": 966718.43,
		"hash": "88cc8087113373ea9c4f34792cfcb2c496b0e056be22c376db05ccae860d9f89"
	},
	{
		"id": "6c8f7bcfae8f",
		"ts": "2026-08-31T22:22:27.200Z",
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
		"liquidityUsd": 28652719.27,
		"hash": "6c8f7bcfae8f762170427bac7d04b25b7e77ccc073649b3959915fd15087bb49"
	},
	{
		"id": "8f2d5b83aebd",
		"ts": "2026-08-31T22:22:27.412Z",
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
		"liquidityUsd": 4193665.49,
		"hash": "8f2d5b83aebd59198c767397502ae347f72ea5561d39b72549d8725ca0bc7324"
	},
	{
		"id": "53107e6a06cd",
		"ts": "2026-08-31T22:22:27.604Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1173940.88,
		"hash": "53107e6a06cd91eb1d04cea4b20e42867db1ba94ccf29c601e939a3ba41b9996"
	},
	{
		"id": "2cc8c5f34637",
		"ts": "2026-08-31T22:22:27.796Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 830503.34,
		"hash": "2cc8c5f34637333a640e4ab93a9bb00be2a35fe1de69395d5a040c41bd487ddc"
	},
	{
		"id": "73acb52a1ecb",
		"ts": "2026-08-31T22:22:27.999Z",
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
		"liquidityUsd": 1695456.86,
		"hash": "73acb52a1ecb39189ec5ddcca6b05e3e643a8c0f7103ac562eca49e17c31cc50"
	},
	{
		"id": "4429461d5139",
		"ts": "2026-08-31T22:22:28.199Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 782571.6,
		"hash": "4429461d51398ef642374560fe2a3aaf388432f46862da6d5a5f42329323004e"
	},
	{
		"id": "784c11cab102",
		"ts": "2026-08-31T22:22:28.411Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1412762.9,
		"hash": "784c11cab1024b835cbcbb53616862fbad96f25729bb1667bb3fb025bfed23ae"
	},
	{
		"id": "8362a66e5b60",
		"ts": "2026-08-31T22:22:28.657Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 94167.46,
		"hash": "8362a66e5b60149a200601173bfd742691f03781506e60c9d016701e9a7679b9"
	},
	{
		"id": "7ce231aff3a9",
		"ts": "2026-08-31T22:22:28.850Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 441408.31,
		"hash": "7ce231aff3a94d5fb277a503ab7446ef7bf3f000f547a191b59d20cba586667c"
	},
	{
		"id": "470668ccc09e",
		"ts": "2026-08-31T22:22:29.032Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 206197.34,
		"hash": "470668ccc09e4cd946019d25ec4cfb16490c32b286187441b6d4c3164dc8c08b"
	},
	{
		"id": "f21cb1d166f9",
		"ts": "2026-08-31T22:22:29.230Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4708849.91,
		"hash": "f21cb1d166f9a923216b251004ecca883bd7f40d14cfcbedd90995e24a5f49d9"
	},
	{
		"id": "a057148869cc",
		"ts": "2026-08-31T22:22:29.428Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1196680.06,
		"hash": "a057148869cc30aebaa3fe627a8845365c44d5b36ebd548b3ffcd319c5954d50"
	},
	{
		"id": "127df8a5f032",
		"ts": "2026-08-31T22:22:29.637Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1842667.05,
		"hash": "127df8a5f032987be9ab413c85e45b6a638c66c928af30f2b4d7eec50ac9374a"
	},
	{
		"id": "bcc327b3301d",
		"ts": "2026-08-31T22:22:29.818Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 136888.63,
		"hash": "bcc327b3301d7aa5fe6e6ef0bff159ea660e220aae88d0a7a7b981c07a416b84"
	},
	{
		"id": "82b6a9f6583c",
		"ts": "2026-08-31T22:22:30.016Z",
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
		"liquidityUsd": 712183.99,
		"hash": "82b6a9f6583cc1ae7d3fc2e5749aca3f92dceecc3b00c777b568719e04c7fdf4"
	},
	{
		"id": "e1f78ba54755",
		"ts": "2026-08-31T17:50:20.473Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115072117.42,
		"hash": "e1f78ba54755ccdc012045f5adf844164bc4c294f2c04f516ad937301aa7b43f"
	},
	{
		"id": "539324050498",
		"ts": "2026-08-31T17:50:20.739Z",
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
		"liquidityUsd": 14664042.93,
		"hash": "53932405049807cac7940f235c4ac78916178088f13f8cae8bb56a62511faa67"
	},
	{
		"id": "7abee4334570",
		"ts": "2026-08-31T17:50:20.987Z",
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
		"liquidityUsd": 971889.5,
		"hash": "7abee4334570e74c85e6c9eeed5bb37c35e1721d854e16de6cfa270a54ee8e82"
	},
	{
		"id": "c4ab7c11dc82",
		"ts": "2026-08-31T17:50:21.209Z",
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
		"liquidityUsd": 28620135.03,
		"hash": "c4ab7c11dc8291bd355ab1cee4b31f47406d6c35aa709c8a0dd9136a570b2cf7"
	},
	{
		"id": "76a1c5975d01",
		"ts": "2026-08-31T17:50:21.597Z",
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
		"liquidityUsd": 4156989,
		"hash": "76a1c5975d01fbbb731302760bb9440cd8212a407fcab9e7a693ac11e43684e9"
	},
	{
		"id": "168998fdbcdb",
		"ts": "2026-08-31T17:50:21.808Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1160137.27,
		"hash": "168998fdbcdb0ca4b6f8a31faafe5c971a8426a0ba8aba33909b615f44b6e536"
	},
	{
		"id": "34bc81d76dbe",
		"ts": "2026-08-31T17:50:22.015Z",
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
		"liquidityUsd": 424860.34,
		"hash": "34bc81d76dbe7712218a8bed4f1d19904cb031a2e62d5d5910970c8e858b0942"
	},
	{
		"id": "d80f69e4b602",
		"ts": "2026-08-31T17:50:22.255Z",
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
		"liquidityUsd": 1695793.01,
		"hash": "d80f69e4b60299f9779c3e129a551067f0f5316ee47b35490085d9d676def39a"
	},
	{
		"id": "cfc69ceb3866",
		"ts": "2026-08-31T17:50:22.488Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 835631.66,
		"hash": "cfc69ceb38668ff02f904944c11cf54db381095a55812588a907f805bb1be1b1"
	},
	{
		"id": "dbc0e57d4a96",
		"ts": "2026-08-31T17:50:22.852Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1415801.7,
		"hash": "dbc0e57d4a961fe5f101aca9f8140846c059b3d6c7f5951896e1044f8195a193"
	},
	{
		"id": "71b921f6df9f",
		"ts": "2026-08-31T17:50:23.046Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 89887.55,
		"hash": "71b921f6df9f9e05717cfd0c8f21fcb35809b1c1befae56e70eaadca0d33ecb8"
	},
	{
		"id": "25d01ee969f3",
		"ts": "2026-08-31T17:50:23.251Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 501045.96,
		"hash": "25d01ee969f31f6056a8ecc4f413754e37389fbe3abd63cdbd0fe8f7903b3d6a"
	},
	{
		"id": "c282473181b4",
		"ts": "2026-08-31T17:50:23.454Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1196375.85,
		"hash": "c282473181b46b6a5cf108570b5f378f57b0418acff122c47ab075fb68ea0a8a"
	},
	{
		"id": "7f5e55f4694d",
		"ts": "2026-08-31T17:50:23.644Z",
		"symbol": "EVE",
		"token": "0xe7D192e52Fa418236d6EEcf7D5Eb38dA9Dd11ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 167691.64,
		"hash": "7f5e55f4694dc3cc0bb8a7833e46ad41e3f25911f72b3f757dd2239e934575a8"
	},
	{
		"id": "5bb453d6c1cd",
		"ts": "2026-08-31T17:50:23.853Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 12876938.12,
		"hash": "5bb453d6c1cd4c3febd9f13bbf5079ddce55983cacb799e2bf0f0cacd4cbb309"
	},
	{
		"id": "6ea4c5c7ba7f",
		"ts": "2026-08-31T17:50:24.048Z",
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
		"liquidityUsd": 699620.59,
		"hash": "6ea4c5c7ba7f84cb1e85f64b82fbc1a8e8af180e1836428602f8764cf4ea284f"
	},
	{
		"id": "6aec6c2ee48a",
		"ts": "2026-08-31T17:50:24.244Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1811725.37,
		"hash": "6aec6c2ee48ac05adbb58e28827a71e73e26fce4160170e0047532ed1fc02e4c"
	},
	{
		"id": "a24d68f8c56e",
		"ts": "2026-08-31T17:50:24.457Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 139757.28,
		"hash": "a24d68f8c56ef100889f000594fdfd41023ccecf85112aa3eb0c80fec03348e9"
	},
	{
		"id": "da6d2c0ae636",
		"ts": "2026-08-31T10:27:02.041Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114555617.24,
		"hash": "da6d2c0ae636c981981e8d0fd9dcaca921d968fa6a5164f5a15a6f5176cd3197"
	},
	{
		"id": "b51146d09d56",
		"ts": "2026-08-31T10:27:02.396Z",
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
		"liquidityUsd": 17990560.16,
		"hash": "b51146d09d56c1f8ce215247710ebed41f33737ab1fa40824a44dfa583177347"
	},
	{
		"id": "6df1a7b9233f",
		"ts": "2026-08-31T10:27:02.793Z",
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
		"liquidityUsd": 970619.94,
		"hash": "6df1a7b9233fd0cc1c23e798fcde582e5f486641d552377de27571975b85aac4"
	},
	{
		"id": "55ac63e267ca",
		"ts": "2026-08-31T10:27:02.991Z",
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
		"liquidityUsd": 28692039.9,
		"hash": "55ac63e267cacdd1c35ed877721e7d646c178eed136e631c44a22e5bf26840b1"
	},
	{
		"id": "ab6b4b26a57e",
		"ts": "2026-08-31T10:27:03.192Z",
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
		"liquidityUsd": 4061808.15,
		"hash": "ab6b4b26a57eb3d951aa1818de3c9619c78bb2992b573e12e164fc7cab3ba452"
	},
	{
		"id": "f087d65c7591",
		"ts": "2026-08-31T10:27:03.404Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1160150.1,
		"hash": "f087d65c75914600b5dd9bc31cc81bba05e7454fdc89fd23bc866c443e8c3d9c"
	},
	{
		"id": "a1aa3dc211fa",
		"ts": "2026-08-31T10:27:03.600Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28692039.9,
		"hash": "a1aa3dc211fa3de7d065f5e0ed44300bc86d94ad155fabccba3ce1048b109200"
	},
	{
		"id": "10dc494beb03",
		"ts": "2026-08-31T10:27:03.807Z",
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
		"liquidityUsd": 1678930.05,
		"hash": "10dc494beb0318402131bf74f0618fff23e3481111bcad12af5f52590068b11d"
	},
	{
		"id": "499e5a16e41b",
		"ts": "2026-08-31T10:27:04.031Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 872732.71,
		"hash": "499e5a16e41b479dbcbc7b44bcf68ade1f57a8b48644408bbc9f38f9c910192e"
	},
	{
		"id": "ef0345b11b90",
		"ts": "2026-08-31T10:27:04.227Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1476123.47,
		"hash": "ef0345b11b90d8927a7746ee799749a10022a73603b9b8a59c89a7effdf9327f"
	},
	{
		"id": "b76323acd39f",
		"ts": "2026-08-31T10:27:04.428Z",
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
		"liquidityUsd": 930413.72,
		"hash": "b76323acd39f01286d429e8efd2f1c5811c9cd4a1e963dc33a431e42f998da6b"
	},
	{
		"id": "291d5e7b94f9",
		"ts": "2026-08-31T10:27:04.651Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 87184.11,
		"hash": "291d5e7b94f9616e5cb7da191162d6d7dc4005731a6f4a4f4d43527230c920bb"
	},
	{
		"id": "c0c922998303",
		"ts": "2026-08-31T10:27:04.841Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 542768.7,
		"hash": "c0c922998303b3845085cd117050ff9373958a654a912de22ccc8d8bb5bc2e41"
	},
	{
		"id": "5750c9821e13",
		"ts": "2026-08-31T10:27:05.021Z",
		"symbol": "EVE",
		"token": "0xe7D192e52Fa418236d6EEcf7D5Eb38dA9Dd11ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 173490.26,
		"hash": "5750c9821e13d4c0dfef9444cd3dc4df03b89a638404787cdb91e1d388edede4"
	},
	{
		"id": "990a587c3e6a",
		"ts": "2026-08-31T10:27:05.265Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 128679.85,
		"hash": "990a587c3e6a70476d905d333f51547e3a7d2b6108b662d5bfbf85e15752a4f9"
	},
	{
		"id": "6f9a80dbf84d",
		"ts": "2026-08-31T10:27:05.460Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1256487.91,
		"hash": "6f9a80dbf84ded49fa033a7a5e21e3fed7dc82fbea1aca2410c91caa7a76a877"
	},
	{
		"id": "ad4618574dad",
		"ts": "2026-08-31T10:27:05.778Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1188812.92,
		"hash": "ad4618574dadd7a5777c188c40c8725e7e8b7c0778b19e2148cf75452649d2b1"
	},
	{
		"id": "f0508d5cd7f0",
		"ts": "2026-08-31T10:27:05.968Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3976882.56,
		"hash": "f0508d5cd7f08422e61c0e5e353bcf4f7836a162ff75242e3224b12f7cbdf9c3"
	},
	{
		"id": "9a38d37f7a16",
		"ts": "2026-08-31T10:27:06.164Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 153793.18,
		"hash": "9a38d37f7a160851b57c0f205f1ec5be8c79f8707e80be6e3f9d1d6d2ff4599c"
	},
	{
		"id": "39c95431df4d",
		"ts": "2026-08-31T03:20:32.470Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114712578.08,
		"hash": "39c95431df4deb093418f212aabf2e8fdc6648c1a8cf92090e480d80d4e477f2"
	},
	{
		"id": "dcdb821e4e69",
		"ts": "2026-08-31T03:20:32.729Z",
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
		"liquidityUsd": 18255273.95,
		"hash": "dcdb821e4e69585e3f915a526b078db35fb1eef2ff1fc406b8cb54d631b4a560"
	},
	{
		"id": "fabf3c333949",
		"ts": "2026-08-31T03:20:32.985Z",
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
		"liquidityUsd": 961899.32,
		"hash": "fabf3c333949e157ee8bba7b3c13ab9ada57dc4eda90bca182838dedca5bf8e9"
	},
	{
		"id": "11b32cbe665d",
		"ts": "2026-08-31T03:20:33.239Z",
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
		"liquidityUsd": 28567897.01,
		"hash": "11b32cbe665d2147cafe54730198aa86cd86ea299391af05c80811451af07643"
	},
	{
		"id": "5025e1a6df91",
		"ts": "2026-08-31T03:20:33.494Z",
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
		"liquidityUsd": 3970552.99,
		"hash": "5025e1a6df914947d34a914e50062634e6938e4d05f2133134a9ded7bf62bd59"
	},
	{
		"id": "7c281a334e15",
		"ts": "2026-08-31T03:20:33.778Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1129488.1,
		"hash": "7c281a334e1517435c285bbb008bf9d53f232b76185256e1a9ff0a898e65616a"
	},
	{
		"id": "dc7eb5d0844b",
		"ts": "2026-08-31T03:20:34.032Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28567897.01,
		"hash": "dc7eb5d0844bb106a8ef928150f6e86b07229e3a4fad32a0ea76f66afb429780"
	},
	{
		"id": "0d8497d3ca27",
		"ts": "2026-08-31T03:20:34.289Z",
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
		"liquidityUsd": 1747115.03,
		"hash": "0d8497d3ca278a1d83082352da973150fa34b42f38de4daf3f2feb3a7f5647c7"
	},
	{
		"id": "d99fdcf1a97f",
		"ts": "2026-08-31T03:20:34.549Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 812347.65,
		"hash": "d99fdcf1a97f8662b8cff1d82b246b9b73145d88036f353d7223f698b788ab82"
	},
	{
		"id": "0141cfe7a651",
		"ts": "2026-08-31T03:20:34.801Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 925325.37,
		"hash": "0141cfe7a65107cd19a896e689f6a67c9b59af565988e0d3b01157d8d78a6f90"
	},
	{
		"id": "d0928927dd22",
		"ts": "2026-08-31T03:20:35.038Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1458072.15,
		"hash": "d0928927dd22c0a434466731d3efe9b78c4053b2f4cd3f885f3ebf3cb28a4571"
	},
	{
		"id": "df8666ba0afd",
		"ts": "2026-08-31T03:20:35.275Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1276159.99,
		"hash": "df8666ba0afdfb2e12c5fe442768179c675ae68c932d68b4a84e4ddd38cdc2b1"
	},
	{
		"id": "08415126913a",
		"ts": "2026-08-31T03:20:35.513Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 145538.07,
		"hash": "08415126913ad933e0f3bf6d8966d77f56ed40e3c8b51d0612a8d0eb9f5656f6"
	},
	{
		"id": "afc602c00760",
		"ts": "2026-08-31T03:20:35.743Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3286668.1,
		"hash": "afc602c00760ca6a5a07b15ff0875fa79456b8c8bab3e5a530455b0735c457bb"
	},
	{
		"id": "a4f501361839",
		"ts": "2026-08-31T03:20:35.983Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 12003710.79,
		"hash": "a4f5013618390349215399da86cb70afa3b66e2906e4865472ca66791ef507cf"
	},
	{
		"id": "ef3a38692d03",
		"ts": "2026-08-31T03:20:36.220Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3956245.37,
		"hash": "ef3a38692d03433bd10f551b33f66a678454ffc0048e27a40182a75ec7b0a10a"
	},
	{
		"id": "df1e447821a0",
		"ts": "2026-08-31T03:20:36.453Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 133665.13,
		"hash": "df1e447821a0a2dfdabe217e5b53cc24776425e3e5e96907a70cccd10c3562a0"
	},
	{
		"id": "59ff4aae9e7d",
		"ts": "2026-08-31T03:20:36.691Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 469956.82,
		"hash": "59ff4aae9e7d2470252e16d0ba1e23008dddc32f9fded8df0ff716244c1470bd"
	},
	{
		"id": "39c4a1949a61",
		"ts": "2026-08-31T03:20:36.939Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 514994.23,
		"hash": "39c4a1949a614691b143d6725163bc4cf026ec47c51dae8b5963656eb59a4385"
	},
	{
		"id": "78db6d15183a",
		"ts": "2026-08-30T23:06:41.842Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116042498.03,
		"hash": "78db6d15183aa7e5c98f9602dc10d98bbf871564b2e684217d72ccc5b2808bca"
	},
	{
		"id": "34aecd49c920",
		"ts": "2026-08-30T23:06:42.232Z",
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
		"liquidityUsd": 19414641.7,
		"hash": "34aecd49c9201f73348eeee97833a5d728353df9598c554bd2f773a298bffe61"
	},
	{
		"id": "9faa9c7ef734",
		"ts": "2026-08-30T23:06:42.460Z",
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
		"liquidityUsd": 980875.38,
		"hash": "9faa9c7ef734cdcad4bdefffb7b8c89fb7e5362bbf3de3e9865d2d50ad595ad9"
	},
	{
		"id": "ce8d05607d3e",
		"ts": "2026-08-30T23:06:42.715Z",
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
		"liquidityUsd": 29116901.02,
		"hash": "ce8d05607d3e12a74a68914d70cc11833269c10237cba50ecf8b754338a93535"
	},
	{
		"id": "ade3d401812f",
		"ts": "2026-08-30T23:06:42.937Z",
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
		"liquidityUsd": 4091781.79,
		"hash": "ade3d401812f7f725bb75d87318ee46f4807f833a50ce638ecf264b69908fa2e"
	},
	{
		"id": "b0486e5ec476",
		"ts": "2026-08-30T23:06:43.164Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1153307.15,
		"hash": "b0486e5ec476bc2bf53fe8c9858408c25c9339e355c29c38b20d5e9fe3a2aa1b"
	},
	{
		"id": "749485649417",
		"ts": "2026-08-30T23:06:43.427Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29116894.22,
		"hash": "749485649417f2bbf847eaf0e19f1d321f3c421ff176f38e88a2aadabec99e88"
	},
	{
		"id": "46eba3a630b3",
		"ts": "2026-08-30T23:06:43.657Z",
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
		"liquidityUsd": 1783017.94,
		"hash": "46eba3a630b3c2c339426cbc075263bc777b6fa4228a3bad729f750598eb95f8"
	},
	{
		"id": "ccf7e40e67ad",
		"ts": "2026-08-30T23:06:44.387Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 942551.44,
		"hash": "ccf7e40e67adb0cf2b30c123a92c1d8a177da66e4d2d9f719bf4e43a2c3127ef"
	},
	{
		"id": "7e53a05c721e",
		"ts": "2026-08-30T23:06:44.623Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 960509.77,
		"hash": "7e53a05c721e499f11fd81b8afe86457d8a70ca8de877af23fd0145c3aab66ab"
	},
	{
		"id": "bde3acd43812",
		"ts": "2026-08-30T23:06:44.885Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1423628.64,
		"hash": "bde3acd438129f8615b05a867891044c5842a61861fbe3376405171e8cd49686"
	},
	{
		"id": "4987bff799ba",
		"ts": "2026-08-30T23:06:45.144Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1284752.86,
		"hash": "4987bff799ba9dbce8be3bb0b437c30fecc9a6b38943ab03b45e412ff701b69d"
	},
	{
		"id": "f594042bd688",
		"ts": "2026-08-30T23:06:45.341Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3358110.41,
		"hash": "f594042bd68811f60f5b934ebbee60dbe6e52d0b85ecf920110b01dfcfabf212"
	},
	{
		"id": "8ea20d53bc9b",
		"ts": "2026-08-30T23:06:45.562Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 148402.7,
		"hash": "8ea20d53bc9ba8fed4008877b6b88f3c563a910abe9787148155f4fa1027c558"
	},
	{
		"id": "daeb228a3704",
		"ts": "2026-08-30T23:06:45.767Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 12317602.69,
		"hash": "daeb228a370429e5be186fabf338475d55dbb33200c1befa199f273e3dd8119b"
	},
	{
		"id": "b40ff913da11",
		"ts": "2026-08-30T23:06:46.036Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4065091.27,
		"hash": "b40ff913da1163dda32034726d70090ffe582369e86c739e61cec08f1f0ca792"
	},
	{
		"id": "fbee64cd78fa",
		"ts": "2026-08-30T23:06:46.231Z",
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
		"liquidityUsd": 450445.56,
		"hash": "fbee64cd78fa68df81f9fd7df813a4a59420816b56ac1163a792da7ec16abcd7"
	},
	{
		"id": "7c87ad653d06",
		"ts": "2026-08-30T23:06:46.441Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 244390.95,
		"hash": "7c87ad653d068fbc2abca5e931955d141fec1c7b61a749d2e35f340d839f2c9b"
	},
	{
		"id": "51507f9f1dd7",
		"ts": "2026-08-30T23:06:46.672Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 535705.8,
		"hash": "51507f9f1dd79014e3769acbbb5bb56cfb0f9ffec5a0cbb504fe336e4b36ad97"
	},
	{
		"id": "8289fe02f525",
		"ts": "2026-08-30T20:29:16.331Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116610977.78,
		"hash": "8289fe02f52533eb254f16d3051e763b1bd86ac7601f5aef4f14e07068473b10"
	},
	{
		"id": "3c07a12bde0d",
		"ts": "2026-08-30T20:29:16.543Z",
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
		"liquidityUsd": 19530914.37,
		"hash": "3c07a12bde0de2494f428b4a0845c307dbc4b8a792b810ca9afef6a5ca61c806"
	},
	{
		"id": "ab0f76480586",
		"ts": "2026-08-30T20:29:16.735Z",
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
		"liquidityUsd": 1003140.14,
		"hash": "ab0f764805862c05a864ad63ef8757f774a20c0f4906c1c9fe60aec0a74bca92"
	},
	{
		"id": "091af225f6fa",
		"ts": "2026-08-30T20:29:16.931Z",
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
		"liquidityUsd": 29196324.63,
		"hash": "091af225f6fa182e0717c39491b4cc3d36a29a1f55f6a850971e6977a8020757"
	},
	{
		"id": "d47abc6271a1",
		"ts": "2026-08-30T20:29:17.128Z",
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
		"liquidityUsd": 4159615.37,
		"hash": "d47abc6271a1285b3c010cf546e08c34167cd80a5f086e3dbb695706d80c2a50"
	},
	{
		"id": "1816315e58fa",
		"ts": "2026-08-30T20:29:17.333Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1180213.7,
		"hash": "1816315e58fa19cc2dc485a3dcd5d96171a8d2a7db311632f70b64c6188b75e2"
	},
	{
		"id": "4f9dbf123e15",
		"ts": "2026-08-30T20:29:17.548Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29196324.63,
		"hash": "4f9dbf123e156d9b46ae4331b7c3fedba1ffcf3c3d33fc196fd83aa879614113"
	},
	{
		"id": "dc4492e51489",
		"ts": "2026-08-30T20:29:17.747Z",
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
		"liquidityUsd": 1813945.58,
		"hash": "dc4492e51489f6580fc41a8bb776f43f76cd23eabff5875ecc39dd25ad043a5f"
	},
	{
		"id": "19f363a2e903",
		"ts": "2026-08-30T20:29:17.951Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 975611.87,
		"hash": "19f363a2e903356678a4b8961f533c3eaaae13931004ceaee9e98e5afcb48667"
	},
	{
		"id": "9820bef056fb",
		"ts": "2026-08-30T20:29:18.164Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 716389.9,
		"hash": "9820bef056fb59f50e2ac36a11f53629054e358f185ef59e78b4e65721b54185"
	},
	{
		"id": "30d49cd1172b",
		"ts": "2026-08-30T20:29:18.341Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1396026.27,
		"hash": "30d49cd1172b70cf65857fe035cb632c28770cae507ffa3346f6aeb6d101b854"
	},
	{
		"id": "c4d6568a0228",
		"ts": "2026-08-30T20:29:18.537Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1304593.21,
		"hash": "c4d6568a02286dc47b6c222a279ab84e853e5990628698c132792f1ad56c374a"
	},
	{
		"id": "344568f6ba62",
		"ts": "2026-08-30T20:29:18.720Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3467538.5,
		"hash": "344568f6ba62af42750f66005eba238c8a12944b8c3c820d0490baaeed2f1443"
	},
	{
		"id": "3a673b91a704",
		"ts": "2026-08-30T20:29:18.919Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4124762.33,
		"hash": "3a673b91a7041862824b3ec3c92b406456a85dd902a7378dd072e578c27502c8"
	},
	{
		"id": "de98116cd8fc",
		"ts": "2026-08-30T20:29:19.098Z",
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
		"liquidityUsd": 433013.92,
		"hash": "de98116cd8fc08a51b767ee1ff129fb69ce15eace0b060d4581e72fafb5ec315"
	},
	{
		"id": "d0e649337c55",
		"ts": "2026-08-30T20:29:19.294Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 132159.11,
		"hash": "d0e649337c5560e745e303144c16a15c0af88c18412d78316e181926296c0f45"
	},
	{
		"id": "003fab9eb3b5",
		"ts": "2026-08-30T20:29:19.500Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 12568013.37,
		"hash": "003fab9eb3b51aea3878ef31e19f4cc4b11bbc43e090748492f957406ba47ef4"
	},
	{
		"id": "32641874801f",
		"ts": "2026-08-30T20:29:19.696Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1314272.24,
		"hash": "32641874801fa944d0210fcfff386d2b4a329ca50b8114c52e11a4b4b411327a"
	},
	{
		"id": "2eca10318811",
		"ts": "2026-08-30T20:29:19.875Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 172739.16,
		"hash": "2eca10318811be4ad7855ed56f1f7a0b125a65b358bde84a775af4ca01e86d98"
	},
	{
		"id": "8512f18927ed",
		"ts": "2026-08-30T20:29:20.081Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 768491.16,
		"hash": "8512f18927ed533269bcc540430d0adeecdc9d67b2308ad92a4860abcd0f46fa"
	},
	{
		"id": "5865caaa619f",
		"ts": "2026-08-30T17:10:41.111Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116952709.84,
		"hash": "5865caaa619fb67f5af74ed5383084f1899510318558d2c77735149c2314277f"
	},
	{
		"id": "b39e0f12911e",
		"ts": "2026-08-30T17:10:41.492Z",
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
		"liquidityUsd": 13661223.49,
		"hash": "b39e0f12911e1580a2d9627a5c52a8ac554f40f73fe2240ea081e25b29631ca7"
	},
	{
		"id": "f595ab9af3ee",
		"ts": "2026-08-30T17:10:41.707Z",
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
		"liquidityUsd": 996439.6,
		"hash": "f595ab9af3ee636938d87f44f24fad423311f405ce0753825098af0df86d05b3"
	},
	{
		"id": "6966eafd1a7a",
		"ts": "2026-08-30T17:10:41.921Z",
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
		"liquidityUsd": 29413109.87,
		"hash": "6966eafd1a7a90e7505361ae87139aed4405ac05b169974d747d31cbe84ae787"
	},
	{
		"id": "9aa0e5e2c6f8",
		"ts": "2026-08-30T17:10:42.114Z",
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
		"liquidityUsd": 4203110.18,
		"hash": "9aa0e5e2c6f8839e1832760aefd8641d7890ff12e00b7a0c9a921333fda18670"
	},
	{
		"id": "db7eb77a413b",
		"ts": "2026-08-30T17:10:42.334Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1198096.01,
		"hash": "db7eb77a413ba1b222ea4dddddfb4e4dc763aef203a95440432614f1a5470369"
	},
	{
		"id": "2fbfcfa176fe",
		"ts": "2026-08-30T17:10:42.546Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29413106.11,
		"hash": "2fbfcfa176fe050de3aa9751db6e2f44667e54ac01d27b8074f61f7b95fb2d09"
	},
	{
		"id": "f69eda94addc",
		"ts": "2026-08-30T17:10:42.751Z",
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
		"liquidityUsd": 3446042.56,
		"hash": "f69eda94addcc0776681085316653db7c5df4ce3bba0de0e08d128645178cd81"
	},
	{
		"id": "d6a48056e7a1",
		"ts": "2026-08-30T17:10:43.271Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 756662.65,
		"hash": "d6a48056e7a14996d76f5fc122f7564a73e0493e9a16d39146f6b730e075dce8"
	},
	{
		"id": "f62cf42521e9",
		"ts": "2026-08-30T17:10:43.474Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1001431.13,
		"hash": "f62cf42521e9b8b5efd9ec27c69fef651611572efc03eb298fba455f9734936d"
	},
	{
		"id": "aad45372c1e3",
		"ts": "2026-08-30T17:10:43.686Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1388560.44,
		"hash": "aad45372c1e3bb9574201120efe482d8dd64d0715d6420bde247c006f4f5fa8a"
	},
	{
		"id": "bb4ec3a91acb",
		"ts": "2026-08-30T17:10:43.883Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1325733.33,
		"hash": "bb4ec3a91acb57e14cf8b1c80c89eb6295cec829e279165f29f10586937c2a88"
	},
	{
		"id": "61ceb4e13e2b",
		"ts": "2026-08-30T17:10:44.073Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3530409.97,
		"hash": "61ceb4e13e2b514035e6075c4c13fd597d181317b7e7c6a0b410a2b36da11a68"
	},
	{
		"id": "921b09e15352",
		"ts": "2026-08-30T17:10:44.266Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 139385.14,
		"hash": "921b09e1535224254dcae2b5ff0d4e01ba68db838d85180ef72de170d09f9d44"
	},
	{
		"id": "fc99ea61cd43",
		"ts": "2026-08-30T17:10:44.466Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4162719.02,
		"hash": "fc99ea61cd43c2663e593abd74d60c0e736abdf6d0005c7c03ad36b1754da981"
	},
	{
		"id": "1a5a154a91c1",
		"ts": "2026-08-30T17:10:44.650Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 433169.14,
		"hash": "1a5a154a91c12853e0513694b545a2c818c47cb8908544c3d8bfda5edc06c2e7"
	},
	{
		"id": "322ebb759388",
		"ts": "2026-08-30T17:10:44.847Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11970712.29,
		"hash": "322ebb7593885bce6cf2f0acc192e3aedf0131bcd2ad92d5f196afff7a973a6b"
	},
	{
		"id": "0b9dbcd425ee",
		"ts": "2026-08-30T17:10:45.052Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 93541.41,
		"hash": "0b9dbcd425eed0e1e41213f8d33bca2d9b4afd02fa266bba18edc3766bc52a30"
	},
	{
		"id": "ab63269ede24",
		"ts": "2026-08-30T17:10:45.327Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 209809.13,
		"hash": "ab63269ede2470b14775141c5d5f04176551f429ae74f95a526513df12c17718"
	},
	{
		"id": "3a73533ed894",
		"ts": "2026-08-30T17:10:45.531Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1395548.66,
		"hash": "3a73533ed8945168a5343d14068e34af51e92e34df3fc00ff3643f4aa96d4e39"
	},
	{
		"id": "9ca53b7facbd",
		"ts": "2026-08-30T12:33:43.226Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115923296.99,
		"hash": "9ca53b7facbda0d70ee4f0cacd7d90f0e892cfcdc4b25ebd3455e0f0064c3ec7"
	},
	{
		"id": "09ac2f15b0ad",
		"ts": "2026-08-30T12:33:43.944Z",
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
		"liquidityUsd": 13449576.14,
		"hash": "09ac2f15b0add9d6589b53a302243b415d1fecec894b424e67928e7c9487da41"
	},
	{
		"id": "3a72b2ee8a62",
		"ts": "2026-08-30T12:33:44.260Z",
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
		"liquidityUsd": 962511.38,
		"hash": "3a72b2ee8a6299003c7f9736b84b9d5a7588a865f1beeefa7e49bcc5c10fb49f"
	},
	{
		"id": "a670cac8fd65",
		"ts": "2026-08-30T12:33:44.536Z",
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
		"liquidityUsd": 29006049.48,
		"hash": "a670cac8fd6548cdabeb1b9957985086abdc160f5d58de7503b33645a0a4b459"
	},
	{
		"id": "8dfdaa1b1fea",
		"ts": "2026-08-30T12:33:44.884Z",
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
		"liquidityUsd": 4113999.59,
		"hash": "8dfdaa1b1fea0dbdaf790bc3e1b79623f1d70dfb1afb142da00b58a9c7dcaef8"
	},
	{
		"id": "71a9fe220c50",
		"ts": "2026-08-30T12:33:45.176Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1156773.86,
		"hash": "71a9fe220c5071efa5dc9ecca12e7e34ac71a1f185648da3e5ba09cd49a98833"
	},
	{
		"id": "bef0d90a078f",
		"ts": "2026-08-30T12:33:45.424Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29006049.48,
		"hash": "bef0d90a078f9971738da911ad2f80d4147ebb218f1fef4d82cc73276f1dff26"
	},
	{
		"id": "5c132f3af3d2",
		"ts": "2026-08-30T12:33:45.719Z",
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
		"liquidityUsd": 3918549.14,
		"hash": "5c132f3af3d21491b55efe80e7d60d13af10fc5fd422a20830e2a3db3703a221"
	},
	{
		"id": "3e36df21f309",
		"ts": "2026-08-30T12:33:45.989Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 690162.21,
		"hash": "3e36df21f309d455aa3c65619434e9044b3b72f3c19c3e7684a603dfb012a974"
	},
	{
		"id": "d18df1101030",
		"ts": "2026-08-30T12:33:46.263Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1309869.79,
		"hash": "d18df110103008bf137a5537cf86197413d00d697ba851eeab721822f87aa3db"
	},
	{
		"id": "7e4ae96f67f9",
		"ts": "2026-08-30T12:33:46.496Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1370047.47,
		"hash": "7e4ae96f67f9ef0e6cbb3822fb7241494ad05eb354b2f7bb845941d2aaadc32b"
	},
	{
		"id": "3f1dd29b43d9",
		"ts": "2026-08-30T12:33:46.730Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 131719.1,
		"hash": "3f1dd29b43d9e99b4da75bfdf58def62825b803e2b52b7e7bddac939b593a9ad"
	},
	{
		"id": "4589f5773ead",
		"ts": "2026-08-30T12:33:46.962Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3495723.91,
		"hash": "4589f5773eaddeef7b5ba6baee64b9918d89927f8a751ad1159ad40f4fa5ae55"
	}
]
