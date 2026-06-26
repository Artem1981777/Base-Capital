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
	"updatedAt": "2026-06-26T18:29:20.776Z",
	"tokensScored": 176,
	"verdictsIssued": 176,
	"safe": 156,
	"risky": 20,
	"likelyRug": 0,
	"ticks": 22
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "206d36a98007",
		"ts": "2026-06-26T18:29:18.611Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93272751.4,
		"hash": "206d36a98007cdc68b9341069eac3578eed59fcedba867cdf52cd390acc156ce"
	},
	{
		"id": "d7ee9300e3aa",
		"ts": "2026-06-26T18:29:19.063Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13220872.67,
		"hash": "d7ee9300e3aafb7885ab0dd54a53ee576e0c5499efaaebfa9aa06f53cc4e388e"
	},
	{
		"id": "59338cb54ead",
		"ts": "2026-06-26T18:29:19.317Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1350538.63,
		"hash": "59338cb54ead6d21d35be5c74e4bc6220cb1f368393511a582049aae33372915"
	},
	{
		"id": "517f9b7cf3be",
		"ts": "2026-06-26T18:29:19.569Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24768895.28,
		"hash": "517f9b7cf3be6dd3749da1d7b0a5e77547584f8dbe60cf6590cbb0b94060e211"
	},
	{
		"id": "373660b1c53c",
		"ts": "2026-06-26T18:29:19.822Z",
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
		"liquidityUsd": 3760087.35,
		"hash": "373660b1c53c06ebc23dd0cab6fdcfb8c867be88b1b61872892676d35bf8b9a4"
	},
	{
		"id": "9b247d26a91e",
		"ts": "2026-06-26T18:29:20.083Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 919458.92,
		"hash": "9b247d26a91e0e8ae4d25042c44a7fa999c67e9962ea941617be8c5b06f1a1f4"
	},
	{
		"id": "2a03a2087189",
		"ts": "2026-06-26T18:29:20.331Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24768895.28,
		"hash": "2a03a208718953750143d8b41c7f3a35d84bb4822ce96921b23ddf094c243f32"
	},
	{
		"id": "b002a8397213",
		"ts": "2026-06-26T18:29:20.776Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2070431.81,
		"hash": "b002a8397213bd955c3de7352e8474f73193052627aae5e31ed552aac3994a36"
	},
	{
		"id": "aa3b295dc12e",
		"ts": "2026-06-26T16:13:24.104Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93292276.57,
		"hash": "aa3b295dc12e4aa2e4eaf85d21140981ecaaad9ae2db935e320fb5c5a900f138"
	},
	{
		"id": "fbc56a22b0c4",
		"ts": "2026-06-26T16:13:24.553Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12390025.37,
		"hash": "fbc56a22b0c4673f9993f55e64b43e6031c67f07d44c345addca8b8876c4c2fc"
	},
	{
		"id": "99063f830563",
		"ts": "2026-06-26T16:13:24.791Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1343568.39,
		"hash": "99063f830563321a49b530c9ac9a4586b43ec87bbc357f6e3b2065afff35076e"
	},
	{
		"id": "18d00b88f548",
		"ts": "2026-06-26T16:13:25.028Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 25326940.39,
		"hash": "18d00b88f548d540006f64b451d2a9fe3909b1938a6229763f10ce5d65c953c2"
	},
	{
		"id": "6fe61599d948",
		"ts": "2026-06-26T16:13:25.268Z",
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
		"liquidityUsd": 3727488.52,
		"hash": "6fe61599d94890a3e0dcfbf21a039fe8b8baf0b2831d177aea88129c92d7a1a7"
	},
	{
		"id": "d92babb94463",
		"ts": "2026-06-26T16:13:25.522Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 900108.19,
		"hash": "d92babb94463499ae169aaa66fe6ce8f5de908150865d724aea28fadb1e9ff0a"
	},
	{
		"id": "fab3bbda68bb",
		"ts": "2026-06-26T16:13:25.756Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25326940.39,
		"hash": "fab3bbda68bb2b9504e22f1a95bff3a98ffc68faaa5e032286e5b20400d5ae13"
	},
	{
		"id": "1900be65f37e",
		"ts": "2026-06-26T16:13:25.991Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2024804.6,
		"hash": "1900be65f37ea732064ec464c7fae987a0a30247a3d4767a52baf9a1d99cb650"
	},
	{
		"id": "549e27f0ae50",
		"ts": "2026-06-26T13:08:47.222Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 91161670.47,
		"hash": "549e27f0ae50c713846fdfd490cd53c19920e7f29463e6290d5f7d3a7e48b7d2"
	},
	{
		"id": "67aa655ab170",
		"ts": "2026-06-26T13:08:47.570Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12548310.79,
		"hash": "67aa655ab17082790f899cdc3d2e600312082c401eb793420e014990abd1f88c"
	},
	{
		"id": "13c56a9317a2",
		"ts": "2026-06-26T13:08:47.757Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1314105.74,
		"hash": "13c56a9317a2177e9d9cb34564965f624b136186b2b96d753a31cf31470c57bb"
	},
	{
		"id": "308ce12fdf18",
		"ts": "2026-06-26T13:08:47.946Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24462878.5,
		"hash": "308ce12fdf1882c8b453790da4ae17ceba437c3bd129e9e1cf12a13abca21b38"
	},
	{
		"id": "03c49b5d0aca",
		"ts": "2026-06-26T13:08:48.138Z",
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
		"liquidityUsd": 3664619.89,
		"hash": "03c49b5d0aca54c7d2d5948210743ed78954475dfcbd91ad2fe2affe22c136db"
	},
	{
		"id": "b379335b3f1f",
		"ts": "2026-06-26T13:08:48.326Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 890158.97,
		"hash": "b379335b3f1fe40f672cbc7b83de6078f87cd9d526f2b0b44463b323bcb50700"
	},
	{
		"id": "51e6bcd9b73c",
		"ts": "2026-06-26T13:08:48.510Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24462878.5,
		"hash": "51e6bcd9b73cddea9cc8ed5d915232d186ce43752a164983ad0eaa49d31ad4ea"
	},
	{
		"id": "3c2e519aa011",
		"ts": "2026-06-26T13:08:48.723Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1995876.72,
		"hash": "3c2e519aa01117a209d1fed9276541dd9a837498f67c739cf81e418f1221a18b"
	},
	{
		"id": "bbbe36c9187b",
		"ts": "2026-06-26T10:25:56.967Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 91754590.73,
		"hash": "bbbe36c9187bb6f19a59ba76f9353769ce5e9568bda9aec5c06b0991325aff9d"
	},
	{
		"id": "0bd856eb59fb",
		"ts": "2026-06-26T10:25:57.599Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13205814.02,
		"hash": "0bd856eb59fbec7319a484fc13f359ce429bbd7f1b8dc6228fe0993265f77523"
	},
	{
		"id": "f9a888e6851c",
		"ts": "2026-06-26T10:25:58.034Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1347854.09,
		"hash": "f9a888e6851c536900854a12a242691af6555c1851774f049d48cf6b67b012ca"
	},
	{
		"id": "1731f6e3eb50",
		"ts": "2026-06-26T10:25:58.509Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24531675.64,
		"hash": "1731f6e3eb50fef2c64ab9c3912afd1dfe6e63e896047a0cf36917bd2e76d78a"
	},
	{
		"id": "0e17ade44631",
		"ts": "2026-06-26T10:25:58.936Z",
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
		"liquidityUsd": 3710213.54,
		"hash": "0e17ade4463116117384e8a2ce5070297104472f7108ab21918f610cc3ceb3de"
	},
	{
		"id": "ba59962c062e",
		"ts": "2026-06-26T10:25:59.167Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 906092.13,
		"hash": "ba59962c062e54758c48347f4c97172a484ebc62c373b1c66f4bf3c4fad0312c"
	},
	{
		"id": "3bd32c27b6ff",
		"ts": "2026-06-26T10:25:59.405Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24531675.64,
		"hash": "3bd32c27b6ff18a7fe9b352c872918d17346bf4c1ea27ef052a7ba2ce7647a52"
	},
	{
		"id": "fcd52b9bfe4b",
		"ts": "2026-06-26T10:26:00.279Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1994329.48,
		"hash": "fcd52b9bfe4be5a0d1eec7e606a466eeb369302855b060f60421d63194629e1f"
	},
	{
		"id": "02f4cbf28509",
		"ts": "2026-06-26T06:58:50.099Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 91934558.6,
		"hash": "02f4cbf28509628a88e61fb34e2ed7c8fd591fb9da488ac4f2b093f1b2574ef6"
	},
	{
		"id": "ecc60e1c9bea",
		"ts": "2026-06-26T06:58:50.314Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12962198.94,
		"hash": "ecc60e1c9beac9b893913dff6ddbe24415793b2370112b03020a56447edd5b19"
	},
	{
		"id": "4422311139ea",
		"ts": "2026-06-26T06:58:50.537Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1349089.76,
		"hash": "4422311139eaec9e392ae9bb51718eb227f8f6cc7de16039826640e6dcb422bb"
	},
	{
		"id": "b1ae904ac4cf",
		"ts": "2026-06-26T06:58:50.743Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24802001.59,
		"hash": "b1ae904ac4cfc1a128b6c14c2654e0b11a54cab46853f1db4c63fd3313ad4b48"
	},
	{
		"id": "c8b50de605ad",
		"ts": "2026-06-26T06:58:50.947Z",
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
		"liquidityUsd": 3730987.88,
		"hash": "c8b50de605ad3528f2f580b696164032f2700bc7d1994169ce5a7b6604d8592e"
	},
	{
		"id": "e5850534c52b",
		"ts": "2026-06-26T06:58:51.158Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 891452.46,
		"hash": "e5850534c52be92554ff09f4e2f82212e36997080221b605e40ac941a863df61"
	},
	{
		"id": "54e708ba9eac",
		"ts": "2026-06-26T06:58:51.384Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24802001.59,
		"hash": "54e708ba9eacf63ba933f348d919208da6cce30c34f629c1b1accbfc7b5a9085"
	},
	{
		"id": "a2f15c88740c",
		"ts": "2026-06-26T06:58:51.593Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2016739.94,
		"hash": "a2f15c88740c0f8adb6dcd462d61fa3a969a59238aed2fe1456d67a433c65e39"
	},
	{
		"id": "7979b51dfee5",
		"ts": "2026-06-26T02:58:28.808Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 89984283.94,
		"hash": "7979b51dfee5b780faa7b19847c36eeeea231fc310090ca0926f19ae6de740c5"
	},
	{
		"id": "b23091f2e7a4",
		"ts": "2026-06-26T02:58:29.009Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12572403.36,
		"hash": "b23091f2e7a401ae46823e90857a781b58ad0918f0c03e1f7fab1eb7706d487e"
	},
	{
		"id": "a6bc0d3c1b66",
		"ts": "2026-06-26T02:58:29.198Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1293266.96,
		"hash": "a6bc0d3c1b669ff61b003a3d9de2661db15b3b29529b59026d885ca085fbe422"
	},
	{
		"id": "75120b822589",
		"ts": "2026-06-26T02:58:29.389Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24478830.5,
		"hash": "75120b8225894876f59293911181c2692f79e8df054344233dabdaa31e8698bb"
	},
	{
		"id": "fdb7d3ca5424",
		"ts": "2026-06-26T02:58:29.578Z",
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
		"liquidityUsd": 3620058.34,
		"hash": "fdb7d3ca54249f66418b5b696ca71b9a99288f53d990708679ec3df4cd025947"
	},
	{
		"id": "6f4b3386f749",
		"ts": "2026-06-26T02:58:29.763Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 867239.45,
		"hash": "6f4b3386f749546317abeaac91cbc45a98331d93c1dcdb2d8cfd87cc9d8899f7"
	},
	{
		"id": "f28d70a5bab3",
		"ts": "2026-06-26T02:58:29.967Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24478830.5,
		"hash": "f28d70a5bab341f97330da1936003354435b151af4c74f95e53a2fd1337204a2"
	},
	{
		"id": "0c59ad5bcf4e",
		"ts": "2026-06-26T02:58:30.157Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1956342.21,
		"hash": "0c59ad5bcf4e154c1295851d099045c19683e66311510c65830be275396dbb88"
	},
	{
		"id": "19c1be7a1860",
		"ts": "2026-06-25T23:14:56.575Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 91755058.68,
		"hash": "19c1be7a1860ddf51c5105a43dba9c248943873b32931dffeb6dd9c2e545e67d"
	},
	{
		"id": "2aadb8bce8dc",
		"ts": "2026-06-25T23:14:57.268Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13119943.71,
		"hash": "2aadb8bce8dcfae89a25bfa421ba92e3836b89b94f9078a6171f144aaed957fb"
	},
	{
		"id": "8aee3834ffc8",
		"ts": "2026-06-25T23:14:57.739Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1333191.52,
		"hash": "8aee3834ffc8f10b81fd0fca0364a1fa45b86d5ea5317508413b6a948dbe0da7"
	},
	{
		"id": "1bfd9d12059a",
		"ts": "2026-06-25T23:14:58.230Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24753095.02,
		"hash": "1bfd9d12059af3698ce38e0312b86e0bb9828b664b3788b5793e3be3071f89e2"
	},
	{
		"id": "5ea219623da1",
		"ts": "2026-06-25T23:14:59.181Z",
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
		"liquidityUsd": 3720381.98,
		"hash": "5ea219623da19569966c222a928e18669443515a569995a876faf4ad3c5ab08f"
	},
	{
		"id": "b68fd3ad0a48",
		"ts": "2026-06-25T23:14:59.435Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 901022.61,
		"hash": "b68fd3ad0a4882eb445f35803130b585b03de0a8c3cc23725898b4772149bec5"
	},
	{
		"id": "f57df64719e6",
		"ts": "2026-06-25T23:14:59.708Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24753095.02,
		"hash": "f57df64719e6e71be685959574774d9d9877e1d379ba0d70b59e08ce30d41ad1"
	},
	{
		"id": "83cb850f7aad",
		"ts": "2026-06-25T23:14:59.993Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2016350.45,
		"hash": "83cb850f7aad1517f3ce433b46e12a35ad651403dcf4a7d4c0308ab85a6b8c2d"
	},
	{
		"id": "b6128c3c091a",
		"ts": "2026-06-25T21:29:21.217Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 91317264.33,
		"hash": "b6128c3c091aaed12f65bd6917074d86692b59e6fcb9e5d15b16ae71d26d7f17"
	},
	{
		"id": "ccfbd8ca5c6f",
		"ts": "2026-06-25T21:29:21.903Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13211206.14,
		"hash": "ccfbd8ca5c6fada7b65dac34af11f9ec954c89f79f53000ecbbdd55b724f03e0"
	},
	{
		"id": "d2ce3e702c0a",
		"ts": "2026-06-25T21:29:22.622Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1332824.46,
		"hash": "d2ce3e702c0aec057251fd9092266680b4a78d9ed52e74fd0e53f5b7e5ba8f3e"
	},
	{
		"id": "523423273b6e",
		"ts": "2026-06-25T21:29:22.882Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24656459.4,
		"hash": "523423273b6eddcb7ef559c9ce4675fa4417343806891ecf08d293012f827c90"
	},
	{
		"id": "727f74f621af",
		"ts": "2026-06-25T21:29:23.356Z",
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
		"liquidityUsd": 3713220.53,
		"hash": "727f74f621af478b5b710aa08933574bd637a958cb127cc316f2af22912cc808"
	},
	{
		"id": "a644d766372a",
		"ts": "2026-06-25T21:29:23.843Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 892713.16,
		"hash": "a644d766372a74ac240e2dfebe0be63281040870c85fb1a6ea66e6c3f0676f70"
	},
	{
		"id": "1dbfa6387694",
		"ts": "2026-06-25T21:29:24.101Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24656458.71,
		"hash": "1dbfa63876941bcaa7677c9910474c29947296d989e06375d60234583eecf812"
	},
	{
		"id": "53770969a458",
		"ts": "2026-06-25T21:29:24.358Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2011417.23,
		"hash": "53770969a4581512e18cf930ee4a8b64d1bb31bf526e2ab2b5f8d45c77103e01"
	},
	{
		"id": "2e297517b928",
		"ts": "2026-06-25T19:04:07.287Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 91791984.4,
		"hash": "2e297517b928172ac9898a832c929e0d0a6a34fc9c226889f400082a4122252e"
	},
	{
		"id": "ce74e51dde97",
		"ts": "2026-06-25T19:04:08.566Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12585000.72,
		"hash": "ce74e51dde97d178c71ade8b426a90fdd1a957e0daa76749851e131177c7f61b"
	},
	{
		"id": "213d079b2831",
		"ts": "2026-06-25T19:04:08.811Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1331548.99,
		"hash": "213d079b2831cdee5100418bd664888e09b0ee32f067d5b9b9a918c5f87aa765"
	},
	{
		"id": "27ecd2600ea0",
		"ts": "2026-06-25T19:04:09.061Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24297343.66,
		"hash": "27ecd2600ea033ec296edccef69feee94c6b301993f2a7de8210d4d89199202f"
	},
	{
		"id": "695dad33abc9",
		"ts": "2026-06-25T19:04:09.310Z",
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
		"liquidityUsd": 3692528.61,
		"hash": "695dad33abc90b05d843e47d99d8eeb220f22c22f33747b93f7ee655e8d59001"
	},
	{
		"id": "edad7ecd3f98",
		"ts": "2026-06-25T19:04:09.557Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 888286.65,
		"hash": "edad7ecd3f98c75b8d36d8a73dece2fbbdd82e441fda3af7b9408c4cbf55aedc"
	},
	{
		"id": "80ee0d247f08",
		"ts": "2026-06-25T19:04:09.806Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24297343.66,
		"hash": "80ee0d247f088070aa63e6941ed08e20b6fd4f537b48d40e134d2b1b6450e4ac"
	},
	{
		"id": "e3fcc77c31fc",
		"ts": "2026-06-25T19:04:10.058Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2011206.78,
		"hash": "e3fcc77c31fccf713f6b4b932e425810e866d5f59b71bd8b8f6c83281e32d121"
	},
	{
		"id": "b5f838b523dc",
		"ts": "2026-06-25T16:21:30.864Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 92294211.32,
		"hash": "b5f838b523dcdb00ee51fb99d5bbb0087be8dce3e3110cdad1f7024d0e917b2c"
	},
	{
		"id": "2cee59db98d7",
		"ts": "2026-06-25T16:21:31.236Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13215211.58,
		"hash": "2cee59db98d785c2de6a23b8ace24777df6b0c71f43189f1a7e397ddf0f12563"
	},
	{
		"id": "5067530fbf39",
		"ts": "2026-06-25T16:21:31.442Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1330226.85,
		"hash": "5067530fbf399b004e23d20add2f75c5a2b6fc4c477823c330aa3bf2a57523f4"
	},
	{
		"id": "d64d1ef40141",
		"ts": "2026-06-25T16:21:31.654Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24404717.47,
		"hash": "d64d1ef4014184c7a0ce6e484ef4b2bfe8926c9958a022987bec7ae138dc3ccd"
	},
	{
		"id": "942c077b4ef7",
		"ts": "2026-06-25T16:21:31.866Z",
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
		"liquidityUsd": 3684879.3,
		"hash": "942c077b4ef7a266011693c617bf7b4a67a84a375a56388c99d369417d954733"
	},
	{
		"id": "6b7877c49e86",
		"ts": "2026-06-25T16:21:32.092Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 888286.65,
		"hash": "6b7877c49e86a2634df6f70ea9ad7a1c4932663773b8370ba422dd221e3f88b2"
	},
	{
		"id": "f83806551708",
		"ts": "2026-06-25T16:21:32.311Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24404717.47,
		"hash": "f83806551708887c688eed03e9766463fde49f04f4f41193c1ecd533f9292834"
	},
	{
		"id": "48019886a786",
		"ts": "2026-06-25T16:21:32.522Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2004159.07,
		"hash": "48019886a7864a8add59d0f401d12ca872356f33c509d578f6cff69a27c06787"
	},
	{
		"id": "863feb800932",
		"ts": "2026-06-25T13:14:22.051Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 96446824.04,
		"hash": "863feb800932899c3e11fe9a9832c184f3a67fe7afb6adca1f5df13d167a4455"
	},
	{
		"id": "e824f4cdc157",
		"ts": "2026-06-25T13:14:22.429Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13504464.79,
		"hash": "e824f4cdc157c37e0aded534b333895bc5ffda3d3abc571a3c84d57391216d2b"
	},
	{
		"id": "9c89703bf268",
		"ts": "2026-06-25T13:14:22.640Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1420562.25,
		"hash": "9c89703bf268c9536c3a640d047353c0dfdfd5404c24b9425768963901d1e55f"
	},
	{
		"id": "7b622ea2b023",
		"ts": "2026-06-25T13:14:22.853Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 25577966.78,
		"hash": "7b622ea2b02389f000fd47e21dde896230160a95e63f1cd8b60903046aa325f6"
	},
	{
		"id": "6f7ba0a959a6",
		"ts": "2026-06-25T13:14:23.060Z",
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
		"liquidityUsd": 3881789.83,
		"hash": "6f7ba0a959a669dba142d3f194a8247ac1d6590c74974fb8100a84ffd521b3ab"
	},
	{
		"id": "dbecff89b196",
		"ts": "2026-06-25T13:14:23.269Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 922773.39,
		"hash": "dbecff89b196f58305302f884c90d2beca2cc03f0bd070e1d144f1b5b168b44d"
	},
	{
		"id": "0e7a70b4850d",
		"ts": "2026-06-25T13:14:23.496Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25577966.09,
		"hash": "0e7a70b4850d5699bdecca00e1afcc45bfe94f73dbade935540aed40c17e0e13"
	},
	{
		"id": "43d4d5bcfa78",
		"ts": "2026-06-25T13:14:23.706Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2047112.82,
		"hash": "43d4d5bcfa782e4ef4b9b3a369cc2d23776ef4788cbc6f5aa4e62ed1de4f7ddd"
	},
	{
		"id": "a22308bc1051",
		"ts": "2026-06-25T10:13:57.916Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 96653407.26,
		"hash": "a22308bc10513d97b071a6fd8d59f79ea49b061644389c37c1cd4309b02bd1d6"
	},
	{
		"id": "326637362df0",
		"ts": "2026-06-25T10:13:58.402Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13389321.69,
		"hash": "326637362df04d8474e57d4b4c868f6259eb9c017667f821b8d26130451fb35b"
	},
	{
		"id": "7057e5380182",
		"ts": "2026-06-25T10:13:58.657Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1429679.12,
		"hash": "7057e5380182f9968a5e8b886e4c0adec1d5a96342d785d916b290f12b1a610c"
	},
	{
		"id": "e012c562d5bd",
		"ts": "2026-06-25T10:13:58.907Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 26004827.32,
		"hash": "e012c562d5bd44f64353f6f9457adce7b3996015cd5ef7ae0a77a9788b282324"
	},
	{
		"id": "18277d11e3c1",
		"ts": "2026-06-25T10:13:59.169Z",
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
		"liquidityUsd": 3947591.59,
		"hash": "18277d11e3c1fcf3fa22e756f8e5b921df7c5d83a6020ccf96112e7534c54d54"
	},
	{
		"id": "7c87b340b781",
		"ts": "2026-06-25T10:13:59.425Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 935075.67,
		"hash": "7c87b340b7811b7822cb83a596657ff0cad842681d7f26f8be369cf96cc022b1"
	},
	{
		"id": "287cb52744c8",
		"ts": "2026-06-25T10:13:59.681Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26004827.32,
		"hash": "287cb52744c82a776fc67a0038e3f932b407a18920ca8a5ea19f43a76780f29d"
	},
	{
		"id": "e056df7c72be",
		"ts": "2026-06-25T10:13:59.946Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2060153.79,
		"hash": "e056df7c72be823af411d07d4c22abee3bc6efd4c8ce59f3db49946daa29362c"
	},
	{
		"id": "4ad5973e6cd6",
		"ts": "2026-06-25T06:45:29.682Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 96367159.26,
		"hash": "4ad5973e6cd6bdd4ade79e3423a6259d1609e7ce60835a276f69a7da0d5a603b"
	},
	{
		"id": "af352cbd5c5e",
		"ts": "2026-06-25T06:45:32.998Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13093157,
		"hash": "af352cbd5c5ea6cd2fa65e60ce64bbe7782c96b5560ac14f545d95a4b1d2da58"
	},
	{
		"id": "9d81c4734765",
		"ts": "2026-06-25T06:45:33.470Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1447768.01,
		"hash": "9d81c4734765135f060852a33276d2750576dee5cad68489fe7c4af419317b3d"
	},
	{
		"id": "6c7b859791bb",
		"ts": "2026-06-25T06:45:33.952Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 25539109.64,
		"hash": "6c7b859791bbb12f0bf701ed7ab6e948df3d60a925455a4dc306bd7f43117c1a"
	},
	{
		"id": "bb7af4e95f69",
		"ts": "2026-06-25T06:45:34.440Z",
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
		"liquidityUsd": 3977589.4,
		"hash": "bb7af4e95f691c3fc5c342b64abb1541f9c0dc314944c6b0337419fe347c34cb"
	},
	{
		"id": "49cd5e8f8927",
		"ts": "2026-06-25T06:45:34.708Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 920814.82,
		"hash": "49cd5e8f89276657e5fbcdae9ebcd3d55c502fb65b93e2beeca6d263e0eb250d"
	},
	{
		"id": "5c09c3a9cd06",
		"ts": "2026-06-25T06:45:34.957Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25550445.86,
		"hash": "5c09c3a9cd069ac62e93050eb0e7bd3574da1609d740e462282499788af13b5c"
	},
	{
		"id": "283c35b0124a",
		"ts": "2026-06-25T06:45:35.213Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2068093.84,
		"hash": "283c35b0124ab0bb8674d299c61062c6b87f267489383e5162391c611dfed28a"
	},
	{
		"id": "43b292722913",
		"ts": "2026-06-25T02:52:45.581Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 95109701.53,
		"hash": "43b292722913897cd14134daf3ed14dd436bdbd3b95270bb03f385a6a2fa39f1"
	},
	{
		"id": "7e5307df3456",
		"ts": "2026-06-25T02:52:45.828Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13035215.25,
		"hash": "7e5307df34568254205f389d356f3bf587122f2e68c3adba211c01d75599e91d"
	},
	{
		"id": "34c17dd2cddd",
		"ts": "2026-06-25T02:52:46.070Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1449144.93,
		"hash": "34c17dd2cddddf440983bf9db35f8e143fe37a633ba4f0d87345a65c5a20c891"
	},
	{
		"id": "9bb5283c6867",
		"ts": "2026-06-25T02:52:46.313Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24759513.07,
		"hash": "9bb5283c68678997404dd8be4cb9e309c03d4e39c22759f702bf92f0232e0e72"
	},
	{
		"id": "0f5697f65990",
		"ts": "2026-06-25T02:52:46.554Z",
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
		"liquidityUsd": 3908813.65,
		"hash": "0f5697f659902f8911a0d0c6dd45a1fa1b7fcfa05b168fd4b353536967605564"
	},
	{
		"id": "a31744fe2637",
		"ts": "2026-06-25T02:52:46.800Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 922898.43,
		"hash": "a31744fe263769af150d39582bc431216acc6e391b914f573ddd2e6f7cd77a71"
	},
	{
		"id": "7318d9b067e7",
		"ts": "2026-06-25T02:52:47.038Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24759513.07,
		"hash": "7318d9b067e75d11d392b28c5eafb2ca854df5532d82fb5b6d9b5b6aa96addc6"
	},
	{
		"id": "f812ad434682",
		"ts": "2026-06-25T02:52:47.279Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2020906.33,
		"hash": "f812ad4346829045b3b48ea9fcb312dd7148e1c5c805ad9532ed11aa7389c660"
	},
	{
		"id": "1ed05cc49f02",
		"ts": "2026-06-24T23:01:54.696Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 95153650.56,
		"hash": "1ed05cc49f0276158701318c1711a1cda2e8da6e5f4e57f86d800ef0725cc01c"
	},
	{
		"id": "5a803e07a115",
		"ts": "2026-06-24T23:01:55.040Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13356739.22,
		"hash": "5a803e07a11564daaaec09eea7bc9832bae57a39d45d59d2314c59dbba43c6c4"
	},
	{
		"id": "3064f23b2af5",
		"ts": "2026-06-24T23:01:55.242Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1426027.43,
		"hash": "3064f23b2af5ce78bf4a371abba82c2c3f71e6bf7dd68e67da7c61159b8e045b"
	},
	{
		"id": "889d448df508",
		"ts": "2026-06-24T23:01:55.439Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24978521.5,
		"hash": "889d448df5080816000c7039afdab925615202e38f3c4da94b4aede946060f8a"
	},
	{
		"id": "f7048e8e0683",
		"ts": "2026-06-24T23:01:55.628Z",
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
		"liquidityUsd": 3926271.49,
		"hash": "f7048e8e068340b8dd22df1e601f400d824e021ea75c05f9dd40a23d5273715e"
	},
	{
		"id": "447120e66fd6",
		"ts": "2026-06-24T23:01:55.823Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 924013.53,
		"hash": "447120e66fd6a827e143cd8e8c69825a3544cb8e57f4a1021f6b62c4f2ad47e1"
	},
	{
		"id": "12d3fa3996c3",
		"ts": "2026-06-24T23:01:56.014Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24978521.5,
		"hash": "12d3fa3996c3d0a648b8828c29449d10a575e88d0de998a82c75f1e577d148d1"
	},
	{
		"id": "06f3c92edf42",
		"ts": "2026-06-24T23:01:56.209Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2168056.12,
		"hash": "06f3c92edf42821fac702263f671d6a386372bffbd2ac59d63ba6ef97a95c7d3"
	},
	{
		"id": "34550cfc50da",
		"ts": "2026-06-24T21:20:35.068Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 95034049.96,
		"hash": "34550cfc50da414c83c9c9c28c5962cb592acbb94af29544c2d31801be967070"
	},
	{
		"id": "491e16113fc2",
		"ts": "2026-06-24T21:20:35.447Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12779282.82,
		"hash": "491e16113fc207a2e75a60b79a9329dfac84dfbc0a394ce6d9259a1d7ae41f5f"
	},
	{
		"id": "fa06fb6d9d80",
		"ts": "2026-06-24T21:20:35.826Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1409635.61,
		"hash": "fa06fb6d9d80b8bbfd38a4c443dceb0d782c3719faf7c0c653f2fa3fb9c5daa6"
	},
	{
		"id": "fb2646692ef2",
		"ts": "2026-06-24T21:20:36.218Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24847919.86,
		"hash": "fb2646692ef27063b230a040dbf377da2fb5ddb1bb2f6056ad5f8adae89d6fd5"
	},
	{
		"id": "d68d3298fc72",
		"ts": "2026-06-24T21:20:36.433Z",
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
		"liquidityUsd": 3901502.61,
		"hash": "d68d3298fc7257f918b2381203789c6d2a7a0b519c3ef501b853e3945e17768e"
	},
	{
		"id": "135f17452564",
		"ts": "2026-06-24T21:20:36.650Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 905262.48,
		"hash": "135f17452564c9e9d077abfaeafdef2735259f96d44af4b287f334cceeeadb7e"
	},
	{
		"id": "58ec7ebd40e4",
		"ts": "2026-06-24T21:20:36.869Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24847919.86,
		"hash": "58ec7ebd40e49e332336d1d2b157a48918b0e929a346d55e3ec99478f8621171"
	},
	{
		"id": "bcd0476946e7",
		"ts": "2026-06-24T21:20:37.078Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2160806.85,
		"hash": "bcd0476946e78fcfaf3c0cdc2ade8ceba9c3078d28fbc3a0441eb0c637b11f20"
	},
	{
		"id": "dcf3b5b669c3",
		"ts": "2026-06-24T19:42:00.936Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93691361.32,
		"hash": "dcf3b5b669c38f988b4cc13cfca77c7ddcf2dff0a697b342925d14746a065cf6"
	},
	{
		"id": "0fc717fca156",
		"ts": "2026-06-24T19:42:01.949Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12728415.3,
		"hash": "0fc717fca1566a083831efa7cfaf5fd184645f6acbf9ebdee393a84f2cc950e7"
	},
	{
		"id": "b6707b196d2b",
		"ts": "2026-06-24T19:42:02.437Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1405145.81,
		"hash": "b6707b196d2b6fcd23263a11c22ac05754df8f0f50081e674a0e88f08bb1ed70"
	},
	{
		"id": "fe947c3cbafe",
		"ts": "2026-06-24T19:42:02.713Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24151995.51,
		"hash": "fe947c3cbafe384d97bc128ddaf237d8de7ff026839b03e33f3d8621374961cb"
	},
	{
		"id": "be6e757f7456",
		"ts": "2026-06-24T19:42:03.200Z",
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
		"liquidityUsd": 3800616.92,
		"hash": "be6e757f7456cae4f9579e2a675d17fd0a99b659037c2cbc550ad589798d664a"
	},
	{
		"id": "4e065929d63f",
		"ts": "2026-06-24T19:42:03.467Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 890119.34,
		"hash": "4e065929d63fb896aed475330efbc33596fa023f01200e1dc2be7b2693bfb4f8"
	},
	{
		"id": "c8c9c9ebe246",
		"ts": "2026-06-24T19:42:03.729Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24151996.77,
		"hash": "c8c9c9ebe2468d0436d9f6a785222d4d93257a2bbc3e8690a58f6da7115a77c9"
	},
	{
		"id": "320c0c6452ac",
		"ts": "2026-06-24T19:42:03.993Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2114106.36,
		"hash": "320c0c6452ac2489e4de44fb8c0361296cf8b945185ee10259b67e7610899e16"
	},
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
