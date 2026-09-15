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
	"updatedAt": "2026-09-15T10:58:29.899Z",
	"tokensScored": 17474,
	"verdictsIssued": 17474,
	"safe": 14795,
	"risky": 1283,
	"likelyRug": 1396,
	"ticks": 998
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "5dad214a1988",
		"ts": "2026-09-15T10:58:26.508Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120950250.06,
		"hash": "5dad214a1988e46c96ca1c8b62777c398e576fa2589001ff5d8c5a07d756acc7"
	},
	{
		"id": "6ad97990dcc2",
		"ts": "2026-09-15T10:58:26.733Z",
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
		"liquidityUsd": 13853498.22,
		"hash": "6ad97990dcc2ca400521f917195d32fe74f35ae0fe23b5ed9cb792264a8456a6"
	},
	{
		"id": "f63296ff6d39",
		"ts": "2026-09-15T10:58:26.943Z",
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
		"liquidityUsd": 946486.98,
		"hash": "f63296ff6d39bc94f698b50f7b15f1c5f385dd8d4db9297c25fee69f668333aa"
	},
	{
		"id": "9babc9e989a0",
		"ts": "2026-09-15T10:58:27.151Z",
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
		"liquidityUsd": 33762984.39,
		"hash": "9babc9e989a05cb8b1b0867281da6f807a0e5f7a7c4ffd2b1ae90ab25f105e8c"
	},
	{
		"id": "c5ca8dea0067",
		"ts": "2026-09-15T10:58:27.368Z",
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
		"liquidityUsd": 3874536.47,
		"hash": "c5ca8dea0067304a2d2eecfc121db833edcdd08a6b3a6c76461e0f9532c3f7a2"
	},
	{
		"id": "a4209396bfbb",
		"ts": "2026-09-15T10:58:27.576Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1163831.04,
		"hash": "a4209396bfbb43b2c7e7b9d0855139c8ea0f64b6ba781a69dceac122f14031db"
	},
	{
		"id": "c9e006c65ae3",
		"ts": "2026-09-15T10:58:27.792Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1622066.19,
		"hash": "c9e006c65ae3217fd72dffbfc709ceacc4d3173c36701f46795458fab62c073f"
	},
	{
		"id": "e19cd2294c1d",
		"ts": "2026-09-15T10:58:28.021Z",
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
		"liquidityUsd": 1147738.7,
		"hash": "e19cd2294c1de383874eabea8f6bbfda2fb8a8d1a25fdff35e6a84b6f7b87396"
	},
	{
		"id": "864044902c21",
		"ts": "2026-09-15T10:58:28.232Z",
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
		"liquidityUsd": 1622066.19,
		"hash": "864044902c212e07113479c9d5520a53482fc651b3fd585e702e93d99632ec63"
	},
	{
		"id": "b4a625a4f196",
		"ts": "2026-09-15T10:58:28.442Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 856219.59,
		"hash": "b4a625a4f196cd3e84df26c661e40bf4301fe926933daefd3f7e70d99c606450"
	},
	{
		"id": "3906c905b591",
		"ts": "2026-09-15T10:58:28.645Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2986994.82,
		"hash": "3906c905b591f2ae2ce9d1a1f9871ff89b44f01dfb54dcc90712cb7a24ec26d2"
	},
	{
		"id": "3a17b21aad71",
		"ts": "2026-09-15T10:58:28.861Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13909697.09,
		"hash": "3a17b21aad7111a877375d55575b6e1e8b357e04e56f5f028f8809d6be2f1418"
	},
	{
		"id": "1f398d3f00e6",
		"ts": "2026-09-15T10:58:29.063Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 450746.14,
		"hash": "1f398d3f00e6f6631a6a437248538f80b1d956e64f61649f78cd3368b6c34958"
	},
	{
		"id": "e0fe59441294",
		"ts": "2026-09-15T10:58:29.272Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1435895.68,
		"hash": "e0fe594412945f1bd4dccda94765b0c105143a0cb53f51254a0645f4c5767df5"
	},
	{
		"id": "ef10202728a9",
		"ts": "2026-09-15T10:58:29.465Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 297171.94,
		"hash": "ef10202728a9028ebd78d49f393cceb2b5310d429145c711f526058805850e79"
	},
	{
		"id": "675ca56bda97",
		"ts": "2026-09-15T10:58:29.667Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 551496.26,
		"hash": "675ca56bda970222dbf22b1cf21dbf951589a48bff99fff6123a490e7646ddac"
	},
	{
		"id": "4df7b41c0284",
		"ts": "2026-09-15T10:58:29.899Z",
		"symbol": "AAPL",
		"token": "0xb200000000000000000000C2e324d24d7eEcd1fb",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1196482.72,
		"hash": "4df7b41c02844fffa7c38550491bb4f40c8a1bc3c86cd2e6dde9782ef7ac2bf6"
	},
	{
		"id": "79b5a59c675c",
		"ts": "2026-09-15T05:45:02.858Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120903172.3,
		"hash": "79b5a59c675cd096c9815cf05900249d20bafbbc58df3dc1d13bc2648d9ca9bb"
	},
	{
		"id": "fb0940b5a53e",
		"ts": "2026-09-15T05:45:03.112Z",
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
		"liquidityUsd": 14773440.49,
		"hash": "fb0940b5a53e81fed1f5c9153472d6420cc6d06674577c7040d638d741e6b9da"
	},
	{
		"id": "7b765a0a7e82",
		"ts": "2026-09-15T05:45:03.361Z",
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
		"liquidityUsd": 946853.5,
		"hash": "7b765a0a7e82e0218922b01daf182f2a08d5e02baf8008063fce6d153aa6b816"
	},
	{
		"id": "5a88aade3073",
		"ts": "2026-09-15T05:45:03.839Z",
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
		"liquidityUsd": 33773775.14,
		"hash": "5a88aade3073acb88dec648fb448ee428eec6746cf8469043ae895d6aae625e6"
	},
	{
		"id": "d7b1079751ee",
		"ts": "2026-09-15T05:45:04.341Z",
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
		"liquidityUsd": 3889705.23,
		"hash": "d7b1079751ee0695e9dde20abd57530722ba4e3c0f78fb181fab4410432534d8"
	},
	{
		"id": "c1b03ade1983",
		"ts": "2026-09-15T05:45:04.578Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1167799.76,
		"hash": "c1b03ade19830928786d8ec930bbf0c72e4c6e63cde8c98ac135e08752d2c86b"
	},
	{
		"id": "017fc016f4dc",
		"ts": "2026-09-15T05:45:04.837Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1583092.74,
		"hash": "017fc016f4dc383d6c8c4a72dfcab5cad4a26cd73d6f578598a508877b90e202"
	},
	{
		"id": "df7377ef19f2",
		"ts": "2026-09-15T05:45:05.092Z",
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
		"liquidityUsd": 1150437.42,
		"hash": "df7377ef19f264d05e6a5ecf2cc019c870ab9caeecc0d6097daf7067c77c8c0c"
	},
	{
		"id": "015d50ea7048",
		"ts": "2026-09-15T05:45:05.368Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3031444.91,
		"hash": "015d50ea7048fd92d98a0ee2e6578d0d8100e6d6983e802dcfc02701149097ad"
	},
	{
		"id": "739f7d09154f",
		"ts": "2026-09-15T05:45:05.649Z",
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
		"liquidityUsd": 1583010.83,
		"hash": "739f7d09154f6418bb419e143527acb9e02ad95f3f1d17765bec009b78c8fe3a"
	},
	{
		"id": "9db6003772f7",
		"ts": "2026-09-15T05:45:05.866Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 842733.18,
		"hash": "9db6003772f7c55a62a6ab93853eef5ad7e4c251ca22e00e54fd21045ac98c90"
	},
	{
		"id": "9693954aa806",
		"ts": "2026-09-15T05:45:06.099Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 365443.04,
		"hash": "9693954aa806ed7da856b3216e8bfed98d8240e60d77e7ee010225c72df8f029"
	},
	{
		"id": "10774ee6bcad",
		"ts": "2026-09-15T05:45:06.330Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1413793.04,
		"hash": "10774ee6bcadcaa5cb7aef596d18275b80fbdf9390fd1c7c7e9a7998834efacc"
	},
	{
		"id": "565d24a1a90b",
		"ts": "2026-09-15T05:45:06.563Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13863885.5,
		"hash": "565d24a1a90bce5cad8f1de7275d752540de07e0917b32dcf4f6c8a1ae553d96"
	},
	{
		"id": "101bebc0286f",
		"ts": "2026-09-15T05:45:06.795Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 289169.1,
		"hash": "101bebc0286ff52ac2c3e1db1d3bec168e69126efd670eea521a6cf68e91f31e"
	},
	{
		"id": "fb44a2c05ab9",
		"ts": "2026-09-15T05:45:07.012Z",
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
		"liquidityUsd": 668473.26,
		"hash": "fb44a2c05ab9ec516c73bf42f0bfd561ee523e7f33b4e99a3b3c28f44864d781"
	},
	{
		"id": "e20b795deffc",
		"ts": "2026-09-15T05:45:07.248Z",
		"symbol": "AAPL",
		"token": "0xb200000000000000000000C2e324d24d7eEcd1fb",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1562424.3,
		"hash": "e20b795deffcb6bc219e5a611b3862397919fa4935bc360b18ee8662dbfbee86"
	},
	{
		"id": "5949c42d610f",
		"ts": "2026-09-15T00:13:10.798Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 121773810.41,
		"hash": "5949c42d610ffc5f010cc2d9612545ed959ae7a4aed766edcab827a7c2b03dc9"
	},
	{
		"id": "4c21299b9326",
		"ts": "2026-09-15T00:13:11.448Z",
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
		"liquidityUsd": 13075217.73,
		"hash": "4c21299b93260786a326c146734cac80b4956605ab6e824c7e8a50b5dd112627"
	},
	{
		"id": "20b0bdd5ee0e",
		"ts": "2026-09-15T00:13:11.726Z",
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
		"liquidityUsd": 955983.91,
		"hash": "20b0bdd5ee0e49d1d1aa6ee6561c17d3cc8c150b1cc926f11d44dca6abaeb24b"
	},
	{
		"id": "eb85cb3e551a",
		"ts": "2026-09-15T00:13:12.170Z",
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
		"liquidityUsd": 34290032.23,
		"hash": "eb85cb3e551a796f2dc463cf7ded0ea269319866a02243ab46a0d55bfe9ed767"
	},
	{
		"id": "96163ce17a9c",
		"ts": "2026-09-15T00:13:12.418Z",
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
		"liquidityUsd": 3941061.4,
		"hash": "96163ce17a9ced4e104d3da7034be0eb614c28e231bdbceac4e951b165363c09"
	},
	{
		"id": "9b29e51470e7",
		"ts": "2026-09-15T00:13:12.681Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1182410.69,
		"hash": "9b29e51470e7142bd58a188a66a49ca4e1268d76bb2b29bce9c3571344f5c348"
	},
	{
		"id": "43634dface76",
		"ts": "2026-09-15T00:13:12.945Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1579288.9,
		"hash": "43634dface76cfe6a205b89875bbe62a5e6b4075c2e8f609b9a6925c5e52b817"
	},
	{
		"id": "75a1960e4be9",
		"ts": "2026-09-15T00:13:13.214Z",
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
		"liquidityUsd": 1162084.34,
		"hash": "75a1960e4be971cab6cb2f15d823b1dc0a115ca1b784f93215fbb49075d8f5c2"
	},
	{
		"id": "015bb8516702",
		"ts": "2026-09-15T00:13:13.488Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3118964.88,
		"hash": "015bb8516702feca347077505481a73929479db7fd621f2f80b5b064a3fc6e58"
	},
	{
		"id": "41f547d4d423",
		"ts": "2026-09-15T00:13:13.736Z",
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
		"liquidityUsd": 1579288.9,
		"hash": "41f547d4d423545a86ce9147a948739bf3233ae6067169ab2fb8c5d051d1768d"
	},
	{
		"id": "60c8cbdaf1ed",
		"ts": "2026-09-15T00:13:13.968Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 458732.09,
		"hash": "60c8cbdaf1ed392d8439c3a72894dba1dedb52051bfbd56f9058810086213d0a"
	},
	{
		"id": "7f87d2d65fa6",
		"ts": "2026-09-15T00:13:14.201Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14260713.95,
		"hash": "7f87d2d65fa6327a19daab5132ff4144fc6616f571af1e11b75e2365d8a55dee"
	},
	{
		"id": "ad933b214710",
		"ts": "2026-09-15T00:13:14.433Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1437335.56,
		"hash": "ad933b2147103ed774dd76b373fa946f328903be2741ad1f9794c6bbc9dfea3e"
	},
	{
		"id": "44fb79c353ae",
		"ts": "2026-09-15T00:13:14.663Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 277734.56,
		"hash": "44fb79c353ae30a3652c1f58e0d552160232cf54296d7d49efefbf4350482187"
	},
	{
		"id": "8ed9b2423fb5",
		"ts": "2026-09-15T00:13:14.895Z",
		"symbol": "AAPL",
		"token": "0xb200000000000000000000C2e324d24d7eEcd1fb",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1449054.85,
		"hash": "8ed9b2423fb5f59ac422f4768ddb868465bd959d18fed4a45eb5bc774dab9fa4"
	},
	{
		"id": "271d7ca3305e",
		"ts": "2026-09-15T00:13:15.126Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 652895.48,
		"hash": "271d7ca3305ee25b226a05f73b627fddc798e316ede9bdaade596b492e7bb235"
	},
	{
		"id": "dea4e23af548",
		"ts": "2026-09-15T00:13:15.355Z",
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
		"liquidityUsd": 690192.63,
		"hash": "dea4e23af5488050157a47312f4258a7b4d067eb84fcd5e9a9bf851f0c31ba7c"
	},
	{
		"id": "a7776017dd68",
		"ts": "2026-09-14T21:23:48.611Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 122436232.55,
		"hash": "a7776017dd681d959e9b88fa3246caa5fbf155c5b694b7b85a1edb951f070983"
	},
	{
		"id": "5c495995c7aa",
		"ts": "2026-09-14T21:23:49.077Z",
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
		"liquidityUsd": 14741910.07,
		"hash": "5c495995c7aa77cb9c40e699f67ff9f676962333dd2287c9ebd0334025c4ab01"
	},
	{
		"id": "3a6e20353f49",
		"ts": "2026-09-14T21:23:49.467Z",
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
		"liquidityUsd": 970851.43,
		"hash": "3a6e20353f49fc821011171f009c237426121678e2df53b713763902c77df88a"
	},
	{
		"id": "fb1da9cd6c4d",
		"ts": "2026-09-14T21:23:49.774Z",
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
		"liquidityUsd": 34381159.28,
		"hash": "fb1da9cd6c4d30987e3e8925b81be7ca017d7216b4b48a06dfda7b29d7b943c6"
	},
	{
		"id": "e546971aea64",
		"ts": "2026-09-14T21:23:50.033Z",
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
		"liquidityUsd": 4010121.71,
		"hash": "e546971aea642c272e23093149baa4e84fbb466a80562be9dbedace3ab89622e"
	},
	{
		"id": "1753ece90a21",
		"ts": "2026-09-14T21:23:50.275Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1208979.69,
		"hash": "1753ece90a2164b1e0d0b564bd1148286f5feb2034d611375dc5c8f7a46ebcd1"
	},
	{
		"id": "1127a3a684b3",
		"ts": "2026-09-14T21:23:50.546Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1589354.94,
		"hash": "1127a3a684b35a63343aa9790009d31356ee5d7549685b4a449d5e940adf8857"
	},
	{
		"id": "f35fded8b9ea",
		"ts": "2026-09-14T21:23:50.795Z",
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
		"liquidityUsd": 1181437.67,
		"hash": "f35fded8b9eafd0a873e9d12abc142b10e261430324b343a8dcc941bb21595af"
	},
	{
		"id": "ced0a93569ce",
		"ts": "2026-09-14T21:23:51.043Z",
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
		"liquidityUsd": 1589354.94,
		"hash": "ced0a93569ce3ef26efbd010f3be9043b652a5c83e13cd39649c359e981d58d3"
	},
	{
		"id": "7ced82adcd61",
		"ts": "2026-09-14T21:23:51.303Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3228951.05,
		"hash": "7ced82adcd615d09ea371c65d5787dca36401d2d5c7c738f36ae2241cd77fd01"
	},
	{
		"id": "e81adaa0621d",
		"ts": "2026-09-14T21:23:51.539Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 453967.89,
		"hash": "e81adaa0621d4b6bc2bf4e61ea16d59a46be4c1727c9facb8672be2bc82d3a01"
	},
	{
		"id": "240b455f1860",
		"ts": "2026-09-14T21:23:51.774Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14166601.54,
		"hash": "240b455f18603e6573de86907b10e603e6a64925e4fc7c5c50371cf1f7f8d0d6"
	},
	{
		"id": "7e72032550e0",
		"ts": "2026-09-14T21:23:52.011Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 267280.66,
		"hash": "7e72032550e09d813375664439d6750f1b4a299ca1150b01aa6521c62f54a4e5"
	},
	{
		"id": "d34a276105fc",
		"ts": "2026-09-14T21:23:52.238Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1562813.26,
		"hash": "d34a276105fca5f351ae0404e9cc2f6f55cd79c0661aff88b58610c15d1a3f76"
	},
	{
		"id": "0743145b13ff",
		"ts": "2026-09-14T21:23:52.472Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 665915.38,
		"hash": "0743145b13fff3b6a8fb56abc0416bffa6ba7a4eea7db530279077df978c2f76"
	},
	{
		"id": "a24289e2b780",
		"ts": "2026-09-14T21:23:52.719Z",
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
		"liquidityUsd": 728193.83,
		"hash": "a24289e2b7803ae0f1291e6ca87ead831e7674968de698241b13702408a5a271"
	},
	{
		"id": "847345033c67",
		"ts": "2026-09-14T21:23:52.957Z",
		"symbol": "AAPL",
		"token": "0xb200000000000000000000C2e324d24d7eEcd1fb",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1560884.57,
		"hash": "847345033c67f64e9689e32d4c19f6e1dab768c9d5ee4ec98a3d41d2a65da663"
	},
	{
		"id": "7acccfa39bb1",
		"ts": "2026-09-14T21:23:53.194Z",
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
		"liquidityUsd": 1441952.22,
		"hash": "7acccfa39bb1146a7152be4e9d5c11f3d64084dddb8cbf5d20ecaee0ee48b41c"
	},
	{
		"id": "df2518ddfd43",
		"ts": "2026-09-14T17:34:48.012Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 121845593.09,
		"hash": "df2518ddfd436aaec103942d2dc8577541a187678fcd819e7d238183772ee92f"
	},
	{
		"id": "dcfe83d9707c",
		"ts": "2026-09-14T17:34:48.222Z",
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
		"liquidityUsd": 18504626.93,
		"hash": "dcfe83d9707c04cad97d619435ac3b3b4a2cf194bc8fd589371b70dc1d18602c"
	},
	{
		"id": "57aa80c017e9",
		"ts": "2026-09-14T17:34:48.432Z",
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
		"liquidityUsd": 962134.87,
		"hash": "57aa80c017e9cb5f791ecfcad313e2329c2ccc43c05fbe00f0507b308c29261a"
	},
	{
		"id": "551cba0a8642",
		"ts": "2026-09-14T17:34:48.645Z",
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
		"liquidityUsd": 34413703.76,
		"hash": "551cba0a8642363060ed8ea2906c1ce6588bf68fc9d9bfac868b69809c548ba2"
	},
	{
		"id": "be0cd0210ea6",
		"ts": "2026-09-14T17:34:48.851Z",
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
		"liquidityUsd": 3962293.07,
		"hash": "be0cd0210ea6c0c761fc7c845bca24dfdab182975e2498fb1c7d16e278f38c04"
	},
	{
		"id": "81e464ca3fbf",
		"ts": "2026-09-14T17:34:49.093Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1196234.07,
		"hash": "81e464ca3fbfdf2f9687a5645ed8fee0c598136d1a8f2c2b068ad523461f12f0"
	},
	{
		"id": "cddceedfd357",
		"ts": "2026-09-14T17:34:49.294Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1429452.76,
		"hash": "cddceedfd3579fa4ac736a42ab137c6592a96bd9fa5a4a45518c0071fbd02578"
	},
	{
		"id": "9891f75419b5",
		"ts": "2026-09-14T17:34:49.511Z",
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
		"liquidityUsd": 1109694.17,
		"hash": "9891f75419b5a11fc5710398d4df3b3835961d011738aca661ec41506f83c037"
	},
	{
		"id": "88e110cc70a1",
		"ts": "2026-09-14T17:34:49.724Z",
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
		"liquidityUsd": 1361053.25,
		"hash": "88e110cc70a1f673e1da40f16e6ed195371d37ca4394221cf7daf71c226e473b"
	},
	{
		"id": "5dff40e21b37",
		"ts": "2026-09-14T17:34:49.931Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3277849.21,
		"hash": "5dff40e21b37f4f7c815b29ea33d219915ea880975bf10c52c365a06eef01870"
	},
	{
		"id": "4de1e872a1bf",
		"ts": "2026-09-14T17:34:50.142Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14054360.87,
		"hash": "4de1e872a1bfbb90b33506dea42688d32e2970c4448aab0ee7c9e5324c19b1bd"
	},
	{
		"id": "bfa7e9a77165",
		"ts": "2026-09-14T17:34:50.331Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 445408.64,
		"hash": "bfa7e9a771656dcb488812430d6dfe9783b8d1f8b8806c5020b1d02caa9ed039"
	},
	{
		"id": "bdba134f66ce",
		"ts": "2026-09-14T17:34:50.530Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 685749.64,
		"hash": "bdba134f66ce6b341e4e728b8f5675adc125673a4aa0b92a3cf45c1e5d66e88d"
	},
	{
		"id": "2a27841f5889",
		"ts": "2026-09-14T17:34:50.718Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1487099.33,
		"hash": "2a27841f588949385fc69d538cdf94b93a25e9d28f595ded83f6cb7e2778c43b"
	},
	{
		"id": "a6c355ae8cf4",
		"ts": "2026-09-14T17:34:51.039Z",
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
		"liquidityUsd": 670047.73,
		"hash": "a6c355ae8cf4665605a15db77c7c9337c915054801ae38201a99fd863b375615"
	},
	{
		"id": "6e0346032cd9",
		"ts": "2026-09-14T17:34:51.254Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 269802.73,
		"hash": "6e0346032cd98b6313016c67ff908c2e116017880d003c43492d6c08922f5cf0"
	},
	{
		"id": "5624d6529f3e",
		"ts": "2026-09-14T17:34:51.475Z",
		"symbol": "AAPL",
		"token": "0xb200000000000000000000C2e324d24d7eEcd1fb",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1374785.24,
		"hash": "5624d6529f3e5d69b436cb9fe1275af68539975b8b470b3f69c6a7fe7632b046"
	},
	{
		"id": "a794286308f2",
		"ts": "2026-09-14T17:34:51.675Z",
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
		"liquidityUsd": 1429452.76,
		"hash": "a794286308f24ff1f0eac0789576dd9678f8582e9b26523d9a6fa794feab5878"
	},
	{
		"id": "23f493bf0d5a",
		"ts": "2026-09-14T11:40:07.649Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 121160919.18,
		"hash": "23f493bf0d5adb17cc584921434df385862655063aa3d18a0ae05cb49a3a4de0"
	},
	{
		"id": "fc9613938da9",
		"ts": "2026-09-14T11:40:07.937Z",
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
		"liquidityUsd": 16855430.17,
		"hash": "fc9613938da9f8c2ab04511337639ebb298f44c8c1273d0784680cc3ab781cd0"
	},
	{
		"id": "17494df42d6b",
		"ts": "2026-09-14T11:40:08.391Z",
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
		"liquidityUsd": 967227.56,
		"hash": "17494df42d6bc05af09ce22009327a21916c3d303558f80d2f51d27b1dc09d81"
	},
	{
		"id": "ccaf5e222df2",
		"ts": "2026-09-14T11:40:08.731Z",
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
		"liquidityUsd": 34363540.43,
		"hash": "ccaf5e222df29c7519efc00f6d9d0abe1214b581dd68afd58d2eb92eda02f50e"
	},
	{
		"id": "7043457f0ef0",
		"ts": "2026-09-14T11:40:09.207Z",
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
		"liquidityUsd": 3935142.83,
		"hash": "7043457f0ef0bb2612db06a0212b4ddb3eccb05d2f8c6a42ddf8f97283b4a884"
	},
	{
		"id": "8508ad158dbb",
		"ts": "2026-09-14T11:40:09.498Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1184787.24,
		"hash": "8508ad158dbbbd9e24d2602dd1121c7ae532b685a6f05359be3c30826422612c"
	},
	{
		"id": "991861d2d4de",
		"ts": "2026-09-14T11:40:09.784Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1543197,
		"hash": "991861d2d4de422be0d5399063ec3c77f3e02074af7921aad15f304d789ddaf6"
	},
	{
		"id": "ca64e8c171c2",
		"ts": "2026-09-14T11:40:10.051Z",
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
		"liquidityUsd": 1102456.8,
		"hash": "ca64e8c171c2f29d44d2a31e9b52d84a6fee2117e0ea16b07c2060e25c4ffdd0"
	},
	{
		"id": "7445ffeff21e",
		"ts": "2026-09-14T11:40:10.420Z",
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
		"liquidityUsd": 1543197,
		"hash": "7445ffeff21ee832023c336e280a874c8599d4d2d9c1c94e8c2d436064d2e15c"
	},
	{
		"id": "8be00c829a05",
		"ts": "2026-09-14T11:40:10.669Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 473437.69,
		"hash": "8be00c829a054f5fe3f479fbce427ac8a9ca8703ab2e90df65397c9f42ed86cc"
	},
	{
		"id": "08a376920f0d",
		"ts": "2026-09-14T11:40:10.892Z",
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
		"liquidityUsd": 3129622.91,
		"hash": "08a376920f0d30dd9d0d9f35aac76c7539f3de9343d609499e63291ecc81a2c1"
	},
	{
		"id": "8df458405349",
		"ts": "2026-09-14T11:40:11.128Z",
		"symbol": "LSK",
		"token": "0xac485391EB2d7D88253a7F1eF18C37f4242D1A24",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 343865.33,
		"hash": "8df45840534921d962199af029f025e4867a193fb06942c25a44d83b8f0d8236"
	},
	{
		"id": "11fb14fc08b0",
		"ts": "2026-09-14T11:40:11.405Z",
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
		"liquidityUsd": 691417.13,
		"hash": "11fb14fc08b0d82797136b490f5387edee9c2a70b54e7db40f3695cf46df06a3"
	},
	{
		"id": "f2f1fdbba86f",
		"ts": "2026-09-14T11:40:11.638Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14176917.64,
		"hash": "f2f1fdbba86ff9a187b42fe8c54660b5a2a05153a6ef001d25646f9059aa7b53"
	},
	{
		"id": "365699574a0a",
		"ts": "2026-09-14T11:40:11.858Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1485035.31,
		"hash": "365699574a0ac9e2eec09d02cd666093d4b6cb4b78196613dbd2df573c0e5a49"
	},
	{
		"id": "ea17d7bb32c3",
		"ts": "2026-09-14T11:40:12.077Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 671278.79,
		"hash": "ea17d7bb32c38c9e7a64730fb1e460a530b8d98918b9bcc6d7ccffdaeadf5cec"
	},
	{
		"id": "90d7dbba3e7d",
		"ts": "2026-09-14T11:40:12.301Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 284637.94,
		"hash": "90d7dbba3e7da440de63b88a10637aa5882af63b044df75291344378c5739917"
	},
	{
		"id": "23a46e5a1ea2",
		"ts": "2026-09-14T11:40:12.614Z",
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
		"liquidityUsd": 1536745.04,
		"hash": "23a46e5a1ea257f1b8d0932ebc3be8a5bc599bbdb493a2e81b8a4f9113a95026"
	},
	{
		"id": "c01d44ee534a",
		"ts": "2026-09-14T11:40:12.844Z",
		"symbol": "STONX",
		"token": "0x89d8CB38067b55f820F29A9E12d0CE18682A2Bfc",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 938641.19,
		"hash": "c01d44ee534aa72d5959a461cd00d2058d972186ee14e2df5769a83f33b20064"
	},
	{
		"id": "914069296d09",
		"ts": "2026-09-14T05:43:36.234Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120947876.53,
		"hash": "914069296d09ec709e712e8d18128c0b44711fb265df4c8c3be0e64684f96ef8"
	},
	{
		"id": "5826a3b98ff7",
		"ts": "2026-09-14T05:43:36.680Z",
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
		"liquidityUsd": 15081827.35,
		"hash": "5826a3b98ff7639968fc7be9d7cbcb3e1596e611481cc9158e2e0f97fb495449"
	},
	{
		"id": "d1318fa30c7b",
		"ts": "2026-09-14T05:43:36.924Z",
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
		"liquidityUsd": 971288.96,
		"hash": "d1318fa30c7bc254c61b0dd802304da8022598b5d250223fc1bf5b116efa05a7"
	},
	{
		"id": "0963e685a7be",
		"ts": "2026-09-14T05:43:37.168Z",
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
		"liquidityUsd": 34254719.83,
		"hash": "0963e685a7be540b64cceb506da22fcd4306875186d756b476ca098400c18704"
	},
	{
		"id": "0a43cd021633",
		"ts": "2026-09-14T05:43:37.415Z",
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
		"liquidityUsd": 3938452.99,
		"hash": "0a43cd02163357251c389a160485b2cacc643f528e8ad7dcb7c5afbf92a132dd"
	},
	{
		"id": "3bef1208672f",
		"ts": "2026-09-14T05:43:37.657Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1181991.2,
		"hash": "3bef1208672ffedd483420483be06cc85a4d0d4b6f7f29d591e90c5007ac72fb"
	},
	{
		"id": "1979e928b379",
		"ts": "2026-09-14T05:43:37.902Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1550006.38,
		"hash": "1979e928b379c056efbb0d59792012c73341816a1a42e863c49b8922a0643035"
	},
	{
		"id": "a2496b2078a2",
		"ts": "2026-09-14T05:43:38.169Z",
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
		"liquidityUsd": 1135257.88,
		"hash": "a2496b2078a2032983e5dcdfc795b08ea9a8255ece796d260f9a72679ca84bea"
	},
	{
		"id": "ac6b90e74764",
		"ts": "2026-09-14T05:43:38.419Z",
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
		"liquidityUsd": 1550006.38,
		"hash": "ac6b90e74764699914b1b20b545302d3cbad4b2e50c19d629c599c060f99c07a"
	},
	{
		"id": "8a6d4832ecf6",
		"ts": "2026-09-14T05:43:38.678Z",
		"symbol": "LSK",
		"token": "0xac485391EB2d7D88253a7F1eF18C37f4242D1A24",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 376384.65,
		"hash": "8a6d4832ecf65b646bb57fa5c57492809fd1191e6c275205e33deacce02eaa86"
	},
	{
		"id": "290c07dff573",
		"ts": "2026-09-14T05:43:38.900Z",
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
		"liquidityUsd": 702351.9,
		"hash": "290c07dff573cf59d914a40255aa32b2a0c0fdaf37b4ca47b7d237068869ea34"
	},
	{
		"id": "5c9166a7592c",
		"ts": "2026-09-14T05:43:39.127Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1440093.32,
		"hash": "5c9166a7592ce37f1b52525e90ccf6925fa280480b4cff6bb0ad50cfa583b0d4"
	},
	{
		"id": "5446e46d6ba4",
		"ts": "2026-09-14T05:43:39.350Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 477443.71,
		"hash": "5446e46d6ba49ba1ebabce4f1cd7686ff9d50bc4fd0bc0fec5b8439137465927"
	},
	{
		"id": "a0b828544722",
		"ts": "2026-09-14T05:43:39.572Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14011044.07,
		"hash": "a0b828544722a1aa71e8dbfb529f38d2ee11ce9d61e273652a76eb75f21e5c0f"
	},
	{
		"id": "bf95a889be0f",
		"ts": "2026-09-14T05:43:39.803Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 726299.94,
		"hash": "bf95a889be0f76a321d21ab659d36493f778a41720f3b344d712c8f53b26aab3"
	},
	{
		"id": "a4897eb3ebf0",
		"ts": "2026-09-14T05:43:40.026Z",
		"symbol": "STONX",
		"token": "0x89d8CB38067b55f820F29A9E12d0CE18682A2Bfc",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1152951.33,
		"hash": "a4897eb3ebf009fd10e67336787ceab9511f8504899218f7eca9713f0547dba7"
	},
	{
		"id": "faaafcab2c29",
		"ts": "2026-09-14T05:43:40.250Z",
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
		"liquidityUsd": 3175218.2,
		"hash": "faaafcab2c2947a8361494c16dd2c50a4c260134be3b54c1d8dce676ddb0b306"
	},
	{
		"id": "3b6cde248014",
		"ts": "2026-09-14T05:43:40.477Z",
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
		"liquidityUsd": 1456363.71,
		"hash": "3b6cde2480147ab3b9bbbc2be2b07fdbadf13cd4f10117cb1a9f62fe67cb1d4a"
	},
	{
		"id": "a8facc6d2269",
		"ts": "2026-09-14T05:43:40.700Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 276933.71,
		"hash": "a8facc6d2269990bc8681c9597e09c4cf1cec83442c5f16bf60224e776eefc2a"
	},
	{
		"id": "0790bc7ec617",
		"ts": "2026-09-14T00:39:50.418Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120094687.91,
		"hash": "0790bc7ec6175285a78b558c37d023445489d7d420f27e1716e9854849c1199d"
	},
	{
		"id": "e1efe37b44ce",
		"ts": "2026-09-14T00:39:50.894Z",
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
		"liquidityUsd": 15058665.79,
		"hash": "e1efe37b44ce17393c940f18869d14d09a3469e183b499a23549b1ae6f2590b3"
	},
	{
		"id": "950085bc66b6",
		"ts": "2026-09-14T00:39:51.138Z",
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
		"liquidityUsd": 961142.2,
		"hash": "950085bc66b669ef3b9fa1196e87c6f9a9abd8bdb4a5f4b5da9b1e579402d876"
	},
	{
		"id": "b709236e979e",
		"ts": "2026-09-14T00:39:51.386Z",
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
		"liquidityUsd": 33797028.06,
		"hash": "b709236e979eff980aaa9abf806f5a419eb53e523506ec54d42d64a72b6d9c53"
	},
	{
		"id": "745d1d33a583",
		"ts": "2026-09-14T00:39:51.630Z",
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
		"liquidityUsd": 3881682.35,
		"hash": "745d1d33a58384f804ac53e2522cb1863507a5548fde67db766fef4476fe7f3b"
	},
	{
		"id": "0f7d43a13513",
		"ts": "2026-09-14T00:39:51.871Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1166815.33,
		"hash": "0f7d43a1351302ab9e13b7510e0e6ba6cf2b8692eebf0ced0fb5eec1dc7947a4"
	},
	{
		"id": "fb9284fdfdf7",
		"ts": "2026-09-14T00:39:52.112Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1622872.3,
		"hash": "fb9284fdfdf71bbe575723da6684b29c9544cf0d99a29fa2ad3f558ed3272899"
	},
	{
		"id": "2219c58050d1",
		"ts": "2026-09-14T00:39:52.356Z",
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
		"liquidityUsd": 1120885.67,
		"hash": "2219c58050d1853a744bee4b2a2204d41735cdbb9856c5b37aab5be97a0f7022"
	},
	{
		"id": "63e33f2a55e0",
		"ts": "2026-09-14T00:39:52.797Z",
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
		"liquidityUsd": 1593090.51,
		"hash": "63e33f2a55e0f8422e1437a161916f55836b6e12ed3db4cc9f70b9443c625e8f"
	},
	{
		"id": "7eb3aeb02e88",
		"ts": "2026-09-14T00:39:53.037Z",
		"symbol": "LSK",
		"token": "0xac485391EB2d7D88253a7F1eF18C37f4242D1A24",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 381908.74,
		"hash": "7eb3aeb02e88a24351690966c0839be480e3212ca8c1488a389b91334e16a1a4"
	},
	{
		"id": "31c397d38f16",
		"ts": "2026-09-14T00:39:53.264Z",
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
		"liquidityUsd": 685631.16,
		"hash": "31c397d38f16f9447d2439d19f8d9048208829eab44b2b849e13d4872f2811ca"
	},
	{
		"id": "72e8b77ef912",
		"ts": "2026-09-14T00:39:53.488Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1424244.16,
		"hash": "72e8b77ef912db1833a7d7db40d3a04b218a1b1379c4eea540e6d8d4febc21a1"
	},
	{
		"id": "3a9987f9e9d2",
		"ts": "2026-09-14T00:39:53.713Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 508517.85,
		"hash": "3a9987f9e9d25226cbf2ee30c86e4af41e494cea47d7b1946470dbbe1f109b8c"
	},
	{
		"id": "dee96f2d196b",
		"ts": "2026-09-14T00:39:53.991Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13551011.04,
		"hash": "dee96f2d196bd4813d9041cac1804b115e17a1aa4f996ff8717837d1ffffe3be"
	},
	{
		"id": "cfbc3fb32ee1",
		"ts": "2026-09-14T00:39:54.222Z",
		"symbol": "STONX",
		"token": "0x89d8CB38067b55f820F29A9E12d0CE18682A2Bfc",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1186216.13,
		"hash": "cfbc3fb32ee1b714060c8334f529d440b09b4623496505fa97d308a190d39de1"
	},
	{
		"id": "11832c59f698",
		"ts": "2026-09-14T00:39:54.450Z",
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
		"liquidityUsd": 1622570.87,
		"hash": "11832c59f698f6ae1a7f6408871c7e3b9490b5f783cc4b27391120b64f738c2f"
	},
	{
		"id": "f049d665c86b",
		"ts": "2026-09-14T00:39:54.674Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 736544.46,
		"hash": "f049d665c86b0bd2aed30aaec90748970f03937fcd6cd56663129623df490141"
	},
	{
		"id": "44776e96b368",
		"ts": "2026-09-14T00:39:54.910Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 290252.21,
		"hash": "44776e96b3682f343ff37e3ca6da49eee38e52c61012e07f9666a7155d530c4b"
	},
	{
		"id": "6328016b2caf",
		"ts": "2026-09-14T00:39:55.144Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 395332.07,
		"hash": "6328016b2caf7ab54268af05b7aca650c4af24159181ae9d9c301a33b487c777"
	},
	{
		"id": "dbe259b6e886",
		"ts": "2026-09-13T22:50:07.869Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120109581.73,
		"hash": "dbe259b6e8864d2c7dee01639d99e07d26f5a6912fd5eb5bcb666448de29fabc"
	},
	{
		"id": "8b116d59c80d",
		"ts": "2026-09-13T22:50:08.214Z",
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
		"liquidityUsd": 13089247.95,
		"hash": "8b116d59c80dc9429aa25b59081a91770c4cbe1dcc53dc0eea1a1fd43cae6894"
	},
	{
		"id": "70495d2c3733",
		"ts": "2026-09-13T22:50:08.511Z",
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
		"liquidityUsd": 958270.99,
		"hash": "70495d2c37331fc4085bdf88e38ecee4ebd16839a446b9a74f5133a4b4528c1d"
	},
	{
		"id": "acf7bb3a5605",
		"ts": "2026-09-13T22:50:08.775Z",
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
		"liquidityUsd": 33811065.89,
		"hash": "acf7bb3a5605feb0730571e0e9cea525210046499c72fc4b8ca38607bde1694c"
	},
	{
		"id": "bfdcc67cbd10",
		"ts": "2026-09-13T22:50:09.235Z",
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
		"liquidityUsd": 3878660.48,
		"hash": "bfdcc67cbd103bd29632ccbb6782e0cc2e5b3a07d23711d99ee0b759f8a78a8e"
	},
	{
		"id": "397b337dad9e",
		"ts": "2026-09-13T22:50:09.485Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1160439.03,
		"hash": "397b337dad9e2baa5d49404a10c13ce778ee6b88905c8649863ce74962339361"
	},
	{
		"id": "8a914f13902b",
		"ts": "2026-09-13T22:50:09.751Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1615454.79,
		"hash": "8a914f13902b341cff3e852e96b05bff715a879d96996058fe2cb067afaa34a3"
	},
	{
		"id": "b9fcdf806b0d",
		"ts": "2026-09-13T22:50:10.053Z",
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
		"liquidityUsd": 1124648.52,
		"hash": "b9fcdf806b0dbd9b4701a9e45afd52fbb0fc502087be78faab542d6fb23b7302"
	},
	{
		"id": "ada8612201ec",
		"ts": "2026-09-13T22:50:10.395Z",
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
		"liquidityUsd": 1600011.2,
		"hash": "ada8612201ec8af2c99fd6220691d01d4f93e7db478c7729b265899b270fdbfd"
	},
	{
		"id": "3155cc8da5fd",
		"ts": "2026-09-13T22:50:10.669Z",
		"symbol": "LSK",
		"token": "0xac485391EB2d7D88253a7F1eF18C37f4242D1A24",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 396197.55,
		"hash": "3155cc8da5fd5690ec59b4ab456a7349ef21d658a298175934db0911e1ed30c5"
	},
	{
		"id": "ed3c25fbe352",
		"ts": "2026-09-13T22:50:10.909Z",
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
		"liquidityUsd": 700807.18,
		"hash": "ed3c25fbe35284fbcdefd7b29f27561793130655eb7f8a0ecad076f9c9679d61"
	},
	{
		"id": "8289e98d44e3",
		"ts": "2026-09-13T22:50:11.136Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1396582.97,
		"hash": "8289e98d44e3cd2b687f7ce248d8d73ef6d84b65f897de79ad9c3c7923e841de"
	},
	{
		"id": "b4bfd8898dd8",
		"ts": "2026-09-13T22:50:11.366Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 496586.3,
		"hash": "b4bfd8898dd8d9805ef0c3d4b1f1d790ae36235bb121c618808344b025fdf25b"
	},
	{
		"id": "f9c68ed849ad",
		"ts": "2026-09-13T22:50:11.620Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13539581.73,
		"hash": "f9c68ed849ad3065bea8a1845f02202a3cb3d80703091d51f19daa7c641f8b53"
	},
	{
		"id": "29a34a366a6b",
		"ts": "2026-09-13T22:50:11.868Z",
		"symbol": "STONX",
		"token": "0x89d8CB38067b55f820F29A9E12d0CE18682A2Bfc",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1265098.22,
		"hash": "29a34a366a6b98f96b4b5fe17b93e53847bae3cc8ec73f77c10a53c1db77f341"
	},
	{
		"id": "b7e3dc0ecdfa",
		"ts": "2026-09-13T22:50:12.109Z",
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
		"liquidityUsd": 1615454.79,
		"hash": "b7e3dc0ecdfa71131a809633ce5283bfccfd6d66dff369dc68947311f21cd364"
	},
	{
		"id": "24908782137b",
		"ts": "2026-09-13T22:50:12.343Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 696447.27,
		"hash": "24908782137bbe6056c079849b21be73d04c7b98599c6066c0260f589ab9a254"
	},
	{
		"id": "5c91f3567141",
		"ts": "2026-09-13T22:50:12.584Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 734757.41,
		"hash": "5c91f3567141ec9ba72af10ab96491bbf89f48ef7d58458c2eb7ca98493a5db6"
	},
	{
		"id": "5cb70ab4063d",
		"ts": "2026-09-13T22:50:12.827Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 402320.22,
		"hash": "5cb70ab4063de77ab0a5b64649d589f5ae13521e827b662699798ac8e4a4241d"
	},
	{
		"id": "d5feb74b92f9",
		"ts": "2026-09-13T20:14:33.589Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120727196.68,
		"hash": "d5feb74b92f9df87e5c8522352297d6d7acc801221e39b9c9f5b573bd4495cb5"
	},
	{
		"id": "a59f624ccd3a",
		"ts": "2026-09-13T20:14:33.807Z",
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
		"liquidityUsd": 16796579.82,
		"hash": "a59f624ccd3a2655a746b75dc0c8f6e21beb5fba3a245f60bf4ccd679276a687"
	},
	{
		"id": "0ca2f7ad9f4d",
		"ts": "2026-09-13T20:14:34.030Z",
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
		"liquidityUsd": 971456.83,
		"hash": "0ca2f7ad9f4d7f04880fde19546d6c78bb1dfaf0f339e9aa136df56ca2486c73"
	},
	{
		"id": "7b529d62ca85",
		"ts": "2026-09-13T20:14:34.254Z",
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
		"liquidityUsd": 34050608.73,
		"hash": "7b529d62ca85e6c9db5cb5676a41f035ff11b3bf72ffed4df1dd3638c30f6d81"
	},
	{
		"id": "0994590aaf1c",
		"ts": "2026-09-13T20:14:34.482Z",
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
		"liquidityUsd": 3939558.04,
		"hash": "0994590aaf1ce4621ecdbb0caeae665eb6d30da97c5ce340f9e74b20e7dcc913"
	},
	{
		"id": "556ecd92c964",
		"ts": "2026-09-13T20:14:34.755Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1180298.9,
		"hash": "556ecd92c9640f644dc6769e464769e869ccaa56552339d7813d03a88cb8a85f"
	},
	{
		"id": "db6b3b0eb9cf",
		"ts": "2026-09-13T20:14:34.977Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1594809.34,
		"hash": "db6b3b0eb9cffa1ae064380c6c92efd1163bef08228ea5b028055086f51feba9"
	},
	{
		"id": "d2e53fbeb193",
		"ts": "2026-09-13T20:14:35.199Z",
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
		"liquidityUsd": 1137434.44,
		"hash": "d2e53fbeb193bc44f2d69846700be7f914e38aef2f5e6c11969f0c9dac821a07"
	},
	{
		"id": "73c6b1da5cd3",
		"ts": "2026-09-13T20:14:35.411Z",
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
		"liquidityUsd": 1594809.34,
		"hash": "73c6b1da5cd34415fa6c67fd80bc315eba28330489fd78637aff4f88ab3631d0"
	},
	{
		"id": "3b739bc9958f",
		"ts": "2026-09-13T20:14:35.639Z",
		"symbol": "LSK",
		"token": "0xac485391EB2d7D88253a7F1eF18C37f4242D1A24",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 406536.96,
		"hash": "3b739bc9958f855a0f7083a2d29ede065bd407fa7baedf5ad4a5fc611c09ddbc"
	},
	{
		"id": "81b410cbf35f",
		"ts": "2026-09-13T20:14:35.845Z",
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
		"liquidityUsd": 701887.86,
		"hash": "81b410cbf35fb80a85051f63d6e0fcb7fa4b73fadc6218f060c258d76736aa8c"
	},
	{
		"id": "fcc7b21ad67d",
		"ts": "2026-09-13T20:14:36.039Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1435135.34,
		"hash": "fcc7b21ad67dc5cbd861e4d2803a2aa1fa08f3247f7373b65a74db8dc1a60406"
	},
	{
		"id": "d30f194968b8",
		"ts": "2026-09-13T20:14:36.246Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 522583.52,
		"hash": "d30f194968b873f759fab8bf9172039cb034869698737c98650adec477984c4e"
	},
	{
		"id": "42687ae3f102",
		"ts": "2026-09-13T20:14:36.446Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13739453.28,
		"hash": "42687ae3f102e676c1c15e4cb152d63d00ed34b916e3cb0b7c8930cdc5b0e5a6"
	},
	{
		"id": "196f09d8e808",
		"ts": "2026-09-13T20:14:36.655Z",
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
		"liquidityUsd": 1562175.77,
		"hash": "196f09d8e8089469c94ddf0708b04effbb5e5923cf4c8e96752c09acc09b7dc0"
	},
	{
		"id": "8d9666320f97",
		"ts": "2026-09-13T20:14:36.859Z",
		"symbol": "STONX",
		"token": "0x89d8CB38067b55f820F29A9E12d0CE18682A2Bfc",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1414734.28,
		"hash": "8d9666320f9778f6a28e355b086835b5f5d9507bf0ba32e84eaaae40b395e304"
	},
	{
		"id": "3c7919626fe2",
		"ts": "2026-09-13T20:14:37.066Z",
		"symbol": "KAI",
		"token": "0xca18A528Ea897040f715edC92e6e4572780c5ca1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 285043.38,
		"hash": "3c7919626fe292ce5a83d9c1efc8bcb6e027a0ddcf3f29e5fe9ae971d039683a"
	},
	{
		"id": "b439e2c62829",
		"ts": "2026-09-13T20:14:37.260Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 410645.29,
		"hash": "b439e2c62829693c9a4d8b363b5980c6ed73ff50c7c50aa1866ba065307d6f83"
	},
	{
		"id": "f743bea8868a",
		"ts": "2026-09-13T20:14:37.487Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 739675.99,
		"hash": "f743bea8868a767ff5233765e4af2ef6d43fa3ed820f5314a08acbc7dfb6eab7"
	},
	{
		"id": "1c03ac4921af",
		"ts": "2026-09-13T17:13:02.192Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120523965.57,
		"hash": "1c03ac4921af0f533c7234bd49ee8b000b6dca19659e78393e028a76e5052f8a"
	},
	{
		"id": "e3c251b07f4b",
		"ts": "2026-09-13T17:13:02.691Z",
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
		"liquidityUsd": 12446139.9,
		"hash": "e3c251b07f4b98ab568071d3aba0217a0df871d937dd58d2e957a1c4126adc33"
	},
	{
		"id": "a7f4ed6a0c80",
		"ts": "2026-09-13T17:13:02.928Z",
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
		"liquidityUsd": 974133.32,
		"hash": "a7f4ed6a0c802a0c0a9c663de31f0bdfbb8ac302a68f2790f7ae24fd4b0c9e4f"
	},
	{
		"id": "284d1f4a4c49",
		"ts": "2026-09-13T17:13:03.179Z",
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
		"liquidityUsd": 34141583.36,
		"hash": "284d1f4a4c4979cb773605c088e04ed8b4d3d33ed7c45ae0fcb1968ee0f6549e"
	},
	{
		"id": "099c55cd0007",
		"ts": "2026-09-13T17:13:03.423Z",
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
		"liquidityUsd": 3946362.39,
		"hash": "099c55cd00079019ed15247283098665a64a6d6df05b55ce57fe8738ec7ff4e5"
	},
	{
		"id": "6555182dcbcb",
		"ts": "2026-09-13T17:13:03.668Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1180584.38,
		"hash": "6555182dcbcb1aa24b330cfaed83042d361a68b821b079cb608c912222381334"
	},
	{
		"id": "26413132a8b9",
		"ts": "2026-09-13T17:13:04.034Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1611446.45,
		"hash": "26413132a8b9bb483c9311b2c7f5d465d6ffe8fb921ab8963bbbeebed556f85a"
	},
	{
		"id": "1f04122caf32",
		"ts": "2026-09-13T17:13:04.295Z",
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
		"liquidityUsd": 1139052.43,
		"hash": "1f04122caf323be055af9602d09eb2b1bd5fb3b25fda27aee7f3fed75543524c"
	},
	{
		"id": "07eb3cffeeef",
		"ts": "2026-09-13T17:13:04.572Z",
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
		"liquidityUsd": 1611446.45,
		"hash": "07eb3cffeeef568870a3b1bf6f75f749e0f66a0690e245eb7fe72f94526ea389"
	},
	{
		"id": "057d03e87f5b",
		"ts": "2026-09-13T17:13:04.813Z",
		"symbol": "LSK",
		"token": "0xac485391EB2d7D88253a7F1eF18C37f4242D1A24",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 352970.79,
		"hash": "057d03e87f5bd10f92bd7492a0bf0cb9b2b36f146c207e8c38df5f380948748a"
	},
	{
		"id": "49313016a991",
		"ts": "2026-09-13T17:13:05.033Z",
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
		"liquidityUsd": 707805.65,
		"hash": "49313016a991a35bfe16549a69ca5490fe9e9fbed452195dd2863cbc98ce31d6"
	},
	{
		"id": "d3bf79598555",
		"ts": "2026-09-13T17:13:05.256Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1463104.72,
		"hash": "d3bf7959855586c23f2da89f9246ccb3bb18a37e432c08708ffe913b7afc9b50"
	},
	{
		"id": "1b64487793dc",
		"ts": "2026-09-13T17:13:05.475Z",
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
		"liquidityUsd": 1564637.64,
		"hash": "1b64487793dce261220ffee3b0f35ebc39955f8b5b48fd10f2e56e17fc930bdb"
	},
	{
		"id": "b82bdf044719",
		"ts": "2026-09-13T17:13:05.691Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 465202.69,
		"hash": "b82bdf044719c8a7cc50dd3354f0986ec46db1183c1db53c8ab94d175107504e"
	},
	{
		"id": "393ab3ce9857",
		"ts": "2026-09-13T17:13:05.911Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 193833.78,
		"hash": "393ab3ce9857aa4026025f0d1657a0e29392fe427e446a7a0cec94f46664185b"
	},
	{
		"id": "aa6d58c46ea6",
		"ts": "2026-09-13T17:13:06.135Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13808856.73,
		"hash": "aa6d58c46ea6957199a2517bf254be42d653016a1ce9072bae2cd099d6aafc4d"
	},
	{
		"id": "5bed6d8006a5",
		"ts": "2026-09-13T17:13:06.354Z",
		"symbol": "STONX",
		"token": "0x89d8CB38067b55f820F29A9E12d0CE18682A2Bfc",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1180816.54,
		"hash": "5bed6d8006a5925ae78fbe3b4715a9cee9e98c6665747cb981f2a90e5872eca4"
	},
	{
		"id": "b9e25cd9c92e",
		"ts": "2026-09-13T17:13:06.576Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 725038.46,
		"hash": "b9e25cd9c92e053ad14a009941cf3cf710d20e6d49783be8dffd59a90c243121"
	}
]
