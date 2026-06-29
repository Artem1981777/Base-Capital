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
	"updatedAt": "2026-06-29T21:23:12.215Z",
	"tokensScored": 635,
	"verdictsIssued": 635,
	"safe": 563,
	"risky": 59,
	"likelyRug": 13,
	"ticks": 52
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "d47eef447ea9",
		"ts": "2026-06-29T21:23:06.970Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 96579893.08,
		"hash": "d47eef447ea994b781a73fc0b57c426a36b0b649ddbb897b79edd71ec575a9eb"
	},
	{
		"id": "306542986324",
		"ts": "2026-06-29T21:23:07.454Z",
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
		"liquidityUsd": 13185251.42,
		"hash": "30654298632408a172449d43ac960bca5aa97446af9ee0292875e41c2f6f0bd4"
	},
	{
		"id": "507facbf3842",
		"ts": "2026-06-29T21:23:07.952Z",
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
		"liquidityUsd": 1342806.34,
		"hash": "507facbf384226dca7a4c1c01c8e3d746f5103ea90394c8f2d52e5ccfce24e08"
	},
	{
		"id": "00fd0825963e",
		"ts": "2026-06-29T21:23:08.207Z",
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
		"liquidityUsd": 25699620.38,
		"hash": "00fd0825963ef1f106e08cfa7ab6454becbe885a27773b2cd467d2f729bd64bc"
	},
	{
		"id": "b0bc6ec8a046",
		"ts": "2026-06-29T21:23:08.530Z",
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
		"liquidityUsd": 4161115.75,
		"hash": "b0bc6ec8a046b369ed77ec8bbfeb52fd75eb61e47f4401df801d1900a5161226"
	},
	{
		"id": "756269e73437",
		"ts": "2026-06-29T21:23:08.787Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 937001.61,
		"hash": "756269e7343750566555af52a4564bca8250ba70ade3fcc3f3439e82947f280d"
	},
	{
		"id": "01cc13aa4216",
		"ts": "2026-06-29T21:23:09.045Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25699620.38,
		"hash": "01cc13aa42167b4636575724d13ab5815de3c1dd3cf91718c418380bdaa0a0de"
	},
	{
		"id": "0227a15852b2",
		"ts": "2026-06-29T21:23:09.297Z",
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
		"liquidityUsd": 2245849.95,
		"hash": "0227a15852b2b650ed0c729f64255d214fdb59190c01e5ed202fb1cc9278d8c4"
	},
	{
		"id": "bf8ae916e666",
		"ts": "2026-06-29T21:23:09.622Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 9145973.08,
		"hash": "bf8ae916e6664ce3b9a03b63a8076066f28282d7e08c223c487fcd39e8d6d98c"
	},
	{
		"id": "4f1738a01db5",
		"ts": "2026-06-29T21:23:10.109Z",
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
		"liquidityUsd": 4639439.37,
		"hash": "4f1738a01db599ac3ba5f280718e78e02942b94ccbf54059093c1c77eb4e0b9c"
	},
	{
		"id": "eca08e9da201",
		"ts": "2026-06-29T21:23:10.354Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1862206.19,
		"hash": "eca08e9da2019e143d6232437cc0f15bc7bf2342b664f91a0a85e33cfeef8b7a"
	},
	{
		"id": "c8525f3d5c02",
		"ts": "2026-06-29T21:23:10.591Z",
		"symbol": "Claude",
		"token": "0x0e7d4bDfe24aa679F9903F10414A25F56CBEBB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 688351.82,
		"hash": "c8525f3d5c023ff482b2f7c8dd3afc3bbb6b31fe37743b2f070c84fe30d637fb"
	},
	{
		"id": "29023ddce258",
		"ts": "2026-06-29T21:23:11.066Z",
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
		"liquidityUsd": 1325036.65,
		"hash": "29023ddce258d28ebf6e8d4d38d0b52b8161af0bd59815eedc57a34b614e6e04"
	},
	{
		"id": "cf385de879d1",
		"ts": "2026-06-29T21:23:11.307Z",
		"symbol": "HANDL",
		"token": "0x3BBCb624CB9A1f73163A886F460f47603E5E4425",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 93777.36,
		"hash": "cf385de879d1f868c161e01b54eb64640a5fb437f26caee735ac3a406f2fe494"
	},
	{
		"id": "52dc0684ca6e",
		"ts": "2026-06-29T21:23:11.739Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 210680.92,
		"hash": "52dc0684ca6ea7d3952d5871d3d94727da3cff7df2573eb3613b6935a309f986"
	},
	{
		"id": "94a0c1991f96",
		"ts": "2026-06-29T21:23:11.980Z",
		"symbol": "Claude",
		"token": "0x6db3cFe766818505e672f9D1ee7b812210B70B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 621134.07,
		"hash": "94a0c1991f9653493bb779200776974d9e838d9338f071ed9d5d5102d99a45e9"
	},
	{
		"id": "f68ffd6fa570",
		"ts": "2026-06-29T21:23:12.215Z",
		"symbol": "RAVE",
		"token": "0x1aA8fD5BCce2231C6100d55Bf8B377cff33Acfc3",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 314683.47,
		"hash": "f68ffd6fa57047bcd91b7e7632b85277b9ab73328f082db59fc05e78867859a1"
	},
	{
		"id": "063994e28cf9",
		"ts": "2026-06-29T19:52:07.444Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 96444768.78,
		"hash": "063994e28cf951e7ec6ae7aebc6ff06a6ccaf6fdabd370c8902ab0b9a08a36b2"
	},
	{
		"id": "0f54426b27d5",
		"ts": "2026-06-29T19:52:07.718Z",
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
		"liquidityUsd": 13295525.21,
		"hash": "0f54426b27d5d526d3f48c9dfc6626a90d15c6c4f379bb4ed485ca53d5914cb3"
	},
	{
		"id": "abd92b7765ce",
		"ts": "2026-06-29T19:52:07.976Z",
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
		"liquidityUsd": 1366804.93,
		"hash": "abd92b7765ceb857a309695f121293db1040c8e6255ece00e18d4d9212cd0726"
	},
	{
		"id": "eb61643b7f66",
		"ts": "2026-06-29T19:52:08.241Z",
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
		"liquidityUsd": 25836997.63,
		"hash": "eb61643b7f668a6d6fc6249d6012456306daa0895631c2115f5cc6bdec05ae04"
	},
	{
		"id": "c7a7a48583b7",
		"ts": "2026-06-29T19:52:08.991Z",
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
		"liquidityUsd": 4184032.14,
		"hash": "c7a7a48583b743101043d028b1c330246c4cadfdd95dd05a48ddd4c763fe3fd7"
	},
	{
		"id": "2f2c232f96db",
		"ts": "2026-06-29T19:52:09.256Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 941608.64,
		"hash": "2f2c232f96dbb6be2cca9a7ab2baaa2e0900cab6094f106224104c17f00f9218"
	},
	{
		"id": "7bb1284d1457",
		"ts": "2026-06-29T19:52:09.550Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25836997.63,
		"hash": "7bb1284d14572ea5dffae9b8944dcab1e52daad39e82699b8163d5b7d69bb706"
	},
	{
		"id": "fb97edc41eef",
		"ts": "2026-06-29T19:52:09.811Z",
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
		"liquidityUsd": 2309318.17,
		"hash": "fb97edc41eefa88cc9eeaa06ea5b91bc58a727691919cd6edfd01b5476138868"
	},
	{
		"id": "212251ee6ec7",
		"ts": "2026-06-29T19:52:10.065Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 9506396.97,
		"hash": "212251ee6ec77887a6e49af741e883972e71fc4d511eebc6a2fb0f8f05adc273"
	},
	{
		"id": "867d5d462af7",
		"ts": "2026-06-29T19:52:10.373Z",
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
		"liquidityUsd": 4635477.15,
		"hash": "867d5d462af75bcf6fd3a04f405af9fc422287a12cc59254901bb703e3d70376"
	},
	{
		"id": "632d622e7862",
		"ts": "2026-06-29T19:52:10.614Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1861715.89,
		"hash": "632d622e7862460f65407f5fcbcb9cbe494e8c9922cd1de13293dff3d2f30130"
	},
	{
		"id": "f287abed8e11",
		"ts": "2026-06-29T19:52:10.862Z",
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
		"liquidityUsd": 1330425.1,
		"hash": "f287abed8e11a4015a1d21dde27c18691d0041ccfff8b8f2e8cc1d8ba87dc4c2"
	},
	{
		"id": "075fa74d70fd",
		"ts": "2026-06-29T19:52:11.104Z",
		"symbol": "HANDL",
		"token": "0x3BBCb624CB9A1f73163A886F460f47603E5E4425",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 88133.6,
		"hash": "075fa74d70fdb4fd5a8314943b0243fa2511dbedbe41e6e2a7899afb2dac5b23"
	},
	{
		"id": "6550fcbf5485",
		"ts": "2026-06-29T19:52:11.348Z",
		"symbol": "Claude",
		"token": "0x6db3cFe766818505e672f9D1ee7b812210B70B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 621134.07,
		"hash": "6550fcbf54851207ef05c0e596ec85490761d8a9d3abae223f4577f2efaa174d"
	},
	{
		"id": "3e3ae4baa0fe",
		"ts": "2026-06-29T19:52:11.588Z",
		"symbol": "RAVE",
		"token": "0x1aA8fD5BCce2231C6100d55Bf8B377cff33Acfc3",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 311786.76,
		"hash": "3e3ae4baa0fe72cf611431dd1078a9f28fc2b404875f7d3192cfc57f6829216a"
	},
	{
		"id": "dcb7263bd65a",
		"ts": "2026-06-29T19:52:11.839Z",
		"symbol": "VU",
		"token": "0x511ef9Ad5E645E533D15DF605B4628e3D0d0Ff53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 106118.78,
		"hash": "dcb7263bd65a39a90d882565f8f26a2089b2dfed38137790db775bdaa38c0b2d"
	},
	{
		"id": "c18d55f94e5b",
		"ts": "2026-06-29T19:52:12.076Z",
		"symbol": "WOON",
		"token": "0x85EAC631c800af804476b140F87039f742c28BA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 221438.61,
		"hash": "c18d55f94e5bb12e89f5041b6a1124004741f06d204b95d1d0509b9317673557"
	},
	{
		"id": "446b4533720a",
		"ts": "2026-06-29T17:33:25.064Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 96554480.51,
		"hash": "446b4533720a48126319aa4614c0ee40a80b14df1ef4b1f88a117dda0a66e22d"
	},
	{
		"id": "99d90b1a2898",
		"ts": "2026-06-29T17:33:25.283Z",
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
		"liquidityUsd": 12921509.23,
		"hash": "99d90b1a28980d87fa3554b02e3a9b20b600c0c3197127945396022a5624d301"
	},
	{
		"id": "031410daa2d4",
		"ts": "2026-06-29T17:33:25.662Z",
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
		"liquidityUsd": 1352886.41,
		"hash": "031410daa2d4cf928aa18b3380559c7ced34e98ed50e4ed8253fcfc659e25212"
	},
	{
		"id": "f27ea49beb68",
		"ts": "2026-06-29T17:33:25.869Z",
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
		"liquidityUsd": 26085743.75,
		"hash": "f27ea49beb681644f95afce8dd130273761e3396006c68ca4838bce73f01af80"
	},
	{
		"id": "b5df28503860",
		"ts": "2026-06-29T17:33:26.075Z",
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
		"liquidityUsd": 4203608.88,
		"hash": "b5df2850386060d05effcab79e18822aa4bde03923b5e65a13d3c0f2d3f7ed2e"
	},
	{
		"id": "5d746894e4a8",
		"ts": "2026-06-29T17:33:26.291Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 944434.12,
		"hash": "5d746894e4a8e62d6ba93d891990414c2982bc0e99d63461be8d6c21bb0d647a"
	},
	{
		"id": "ad299e57f97a",
		"ts": "2026-06-29T17:33:26.499Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26085743.75,
		"hash": "ad299e57f97a0fd3ca91a154fd504fa36dfa6976f6a6c6f7fc5127996902a7a8"
	},
	{
		"id": "153c847b025e",
		"ts": "2026-06-29T17:33:26.709Z",
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
		"liquidityUsd": 2311060.49,
		"hash": "153c847b025e27bbcdb3db17790b6aa93a0fb7c9ab34e3cb3938ee98fef55cd0"
	},
	{
		"id": "cdeda005e8dd",
		"ts": "2026-06-29T17:33:26.928Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 9289161.25,
		"hash": "cdeda005e8dd87e45c20affd02b63bed28e83650bada83e095803509a24b1d98"
	},
	{
		"id": "2e8c9aba6b05",
		"ts": "2026-06-29T17:33:27.139Z",
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
		"liquidityUsd": 4639554.34,
		"hash": "2e8c9aba6b05e492916f8226f88355d261f09a4d30bc36ce3a97a51d3a03e941"
	},
	{
		"id": "c5c3872a267d",
		"ts": "2026-06-29T17:33:27.335Z",
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
		"liquidityUsd": 1345119.71,
		"hash": "c5c3872a267dc2e927665eec6c642cfe26ff700328d6726bf85649533f57d051"
	},
	{
		"id": "487c00ce2b2c",
		"ts": "2026-06-29T17:33:27.762Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1835353.31,
		"hash": "487c00ce2b2c4473b636c476ac047babf531b8419a9c5ba84f37b270a122ceb8"
	},
	{
		"id": "d93c7cbd9fa7",
		"ts": "2026-06-29T17:33:27.955Z",
		"symbol": "HANDL",
		"token": "0x3BBCb624CB9A1f73163A886F460f47603E5E4425",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 90242.71,
		"hash": "d93c7cbd9fa797a1680995b9c3d5c3d6255e93501afff7f2fb368777fdde386b"
	},
	{
		"id": "3bbaea573357",
		"ts": "2026-06-29T17:33:28.149Z",
		"symbol": "Claude",
		"token": "0x6db3cFe766818505e672f9D1ee7b812210B70B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 621541.11,
		"hash": "3bbaea573357bd044060e68c74f5de66a0ffa63892c2eb0184f2a4eddc93554c"
	},
	{
		"id": "a86bbbca6574",
		"ts": "2026-06-29T17:33:28.348Z",
		"symbol": "VU",
		"token": "0x511ef9Ad5E645E533D15DF605B4628e3D0d0Ff53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 109137.17,
		"hash": "a86bbbca657467a264e796ce8a37ae8f1c740e69b7ca94a90919c994e7627cfe"
	},
	{
		"id": "7dc3a0fe63f7",
		"ts": "2026-06-29T17:33:28.551Z",
		"symbol": "RAVE",
		"token": "0x1aA8fD5BCce2231C6100d55Bf8B377cff33Acfc3",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 315164.52,
		"hash": "7dc3a0fe63f781216067a8658fc116d4b9eb4caad7891ca15887488f0d1dd28c"
	},
	{
		"id": "4da5411259dc",
		"ts": "2026-06-29T17:33:28.750Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 429877.82,
		"hash": "4da5411259dc60180312f99d0a701738c1ad59cf0e29c70f573b722ca505c1ac"
	},
	{
		"id": "ebc378a8db69",
		"ts": "2026-06-29T14:49:16.715Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 94539551.95,
		"hash": "ebc378a8db69eb41e57c5ce41f425476010f319bb296b5508241d5bd0951e7e8"
	},
	{
		"id": "ae74d484cfe1",
		"ts": "2026-06-29T14:49:16.956Z",
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
		"liquidityUsd": 12768148.38,
		"hash": "ae74d484cfe13f886a9c1ec895b2a9369ee5d340ac04b140cd8d7d3e7e979b03"
	},
	{
		"id": "651e28d20dff",
		"ts": "2026-06-29T14:49:17.193Z",
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
		"liquidityUsd": 1311835,
		"hash": "651e28d20dff19c5e5613d3bf89c2c9e5a82af48e650c03d4bce15711adb38ba"
	},
	{
		"id": "77698cad4e7d",
		"ts": "2026-06-29T14:49:17.429Z",
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
		"liquidityUsd": 25660077.31,
		"hash": "77698cad4e7df19a6b73658f0d8d6a3c22be6ec39e9d5e913e5e9a0b82c0b81d"
	},
	{
		"id": "71f26b78c39a",
		"ts": "2026-06-29T14:49:17.730Z",
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
		"liquidityUsd": 4021695.58,
		"hash": "71f26b78c39a2e2ef350f0d0c8fd00d63f24f6720abc734a9ce8d6cc0f5cb8e2"
	},
	{
		"id": "9549a01ced20",
		"ts": "2026-06-29T14:49:17.966Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 914338.4,
		"hash": "9549a01ced200f65e11cc83b4f1062d5b6f581200a9eae410762e9065fcc19e2"
	},
	{
		"id": "af15e2031f76",
		"ts": "2026-06-29T14:49:18.198Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25660077.31,
		"hash": "af15e2031f76afab6d6729f8e788a5eee5758cbcdfe29fa8c9a3a4fda2645120"
	},
	{
		"id": "da0aae1f2a68",
		"ts": "2026-06-29T14:49:18.444Z",
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
		"liquidityUsd": 2160073.45,
		"hash": "da0aae1f2a68ebb25287777bda065b3041b422eb8845aedaaad132ceb3ddaba4"
	},
	{
		"id": "b9e47a1b42cc",
		"ts": "2026-06-29T14:49:18.678Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 9309251.42,
		"hash": "b9e47a1b42cc9d2b59cdc81a0b405fb8d1904be3147c6999592bcdd9f1b2cb17"
	},
	{
		"id": "31ab65304209",
		"ts": "2026-06-29T14:49:18.907Z",
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
		"liquidityUsd": 4422043.14,
		"hash": "31ab653042096a250239bebe9db11a4e5c47049af2cb7929593dd955a6e98c50"
	},
	{
		"id": "6908b8c4354b",
		"ts": "2026-06-29T14:49:19.124Z",
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
		"liquidityUsd": 1290136.13,
		"hash": "6908b8c4354bf228cad6edecdd93a1da2608e98addf7c52f856f181aefb1db9b"
	},
	{
		"id": "01a6f74c1953",
		"ts": "2026-06-29T14:49:19.344Z",
		"symbol": "Claude",
		"token": "0x6db3cFe766818505e672f9D1ee7b812210B70B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 621541.11,
		"hash": "01a6f74c1953edb599ec1b594f6899a4294c95687642b929944ec4156745940f"
	},
	{
		"id": "f57defb1374c",
		"ts": "2026-06-29T14:49:19.565Z",
		"symbol": "HANDL",
		"token": "0x3BBCb624CB9A1f73163A886F460f47603E5E4425",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 81459.51,
		"hash": "f57defb1374c0572273c9a099cafa0589c5b130c7b6ea9652dc5e2ba4a4dadff"
	},
	{
		"id": "c9ab7cec58b2",
		"ts": "2026-06-29T14:49:19.784Z",
		"symbol": "VU",
		"token": "0x511ef9Ad5E645E533D15DF605B4628e3D0d0Ff53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 101938.86,
		"hash": "c9ab7cec58b2921fa38b451543c5096c62f9f16eb1ff2e86074500b1c68da11b"
	},
	{
		"id": "55e10c760b5c",
		"ts": "2026-06-29T14:49:20.003Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4381380.97,
		"hash": "55e10c760b5c30ff7b6f1e0a11e8764b6f1c29b00a9a8dc6e870f4892030b6f3"
	},
	{
		"id": "c205fecfbac4",
		"ts": "2026-06-29T14:49:20.219Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 425810.68,
		"hash": "c205fecfbac44e33004ee992b6ce207f9e5e9ca7c9abd8b3dafe4c595cf0de8c"
	},
	{
		"id": "32408cc9319e",
		"ts": "2026-06-29T10:50:44.406Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 94800807.51,
		"hash": "32408cc9319e3f53589203fb8c768d20cc61d4d6bffb08ab040755e666891ff7"
	},
	{
		"id": "b63d698f8124",
		"ts": "2026-06-29T10:50:44.857Z",
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
		"liquidityUsd": 13289252.54,
		"hash": "b63d698f81247467a0e95469565c34eaf181e541346e9abf3e575f8f6f5c5cde"
	},
	{
		"id": "26347eae1664",
		"ts": "2026-06-29T10:50:45.202Z",
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
		"liquidityUsd": 1310813.42,
		"hash": "26347eae1664b7e2ba7e6d7a8f14895d440b33ee69570216506979caa1b87a8b"
	},
	{
		"id": "ca2196029159",
		"ts": "2026-06-29T10:50:45.423Z",
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
		"liquidityUsd": 25917047.14,
		"hash": "ca2196029159e94f7a6a31b3365158492796825497da6668a34ae0fc7966d339"
	},
	{
		"id": "44444c4df929",
		"ts": "2026-06-29T10:50:45.610Z",
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
		"liquidityUsd": 4060911.31,
		"hash": "44444c4df929045732fee568c814f245f53fe800f5772d78477246fd9ed70edf"
	},
	{
		"id": "dceaecf748c5",
		"ts": "2026-06-29T10:50:45.796Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 919749.49,
		"hash": "dceaecf748c5c69c03f597d01c42d642854976dc048fc3822ca2f3c01533c684"
	},
	{
		"id": "8c5094600ebf",
		"ts": "2026-06-29T10:50:46.101Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25917047.14,
		"hash": "8c5094600ebfcaf4af7811cb91945fa3d3adebb540925e72fe1169c1bdbcc8fe"
	},
	{
		"id": "3d946315a734",
		"ts": "2026-06-29T10:50:46.290Z",
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
		"liquidityUsd": 2123510.31,
		"hash": "3d946315a734593ea5acd3a5d6c737fcd59acb054c936f4873fe5a95c332848a"
	},
	{
		"id": "ad017a39951f",
		"ts": "2026-06-29T10:50:46.477Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 9328557.23,
		"hash": "ad017a39951f5af689a254518a9769d7f7f8e42f950a9f918817392c672163ee"
	},
	{
		"id": "7b3e2b4ffafc",
		"ts": "2026-06-29T10:50:46.843Z",
		"symbol": "Claude",
		"token": "0x6db3cFe766818505e672f9D1ee7b812210B70B07",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 623064.55,
		"hash": "7b3e2b4ffafca4da4dcb80c8c668b6533c0aa7a736746f4c619979bb4bcd7a3d"
	},
	{
		"id": "4cddaa0e8a15",
		"ts": "2026-06-29T10:50:47.023Z",
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
		"liquidityUsd": 1241865.98,
		"hash": "4cddaa0e8a1526069389fb8ea0049993ef364d0d90a5b32b4ab31ed84b609d26"
	},
	{
		"id": "3fb7690fcf44",
		"ts": "2026-06-29T10:50:47.199Z",
		"symbol": "HANDL",
		"token": "0x3BBCb624CB9A1f73163A886F460f47603E5E4425",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 86179.46,
		"hash": "3fb7690fcf44a80954b89d309643eb45844a380211c54651fd88ef0fe5cd9296"
	},
	{
		"id": "7e331d0bddba",
		"ts": "2026-06-29T10:50:47.378Z",
		"symbol": "RAVE",
		"token": "0x1aA8fD5BCce2231C6100d55Bf8B377cff33Acfc3",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 305428,
		"hash": "7e331d0bddba7d92deaf1cb7e7e7bdba2cfdcc86c9d13f7e56a56fbba494ae95"
	},
	{
		"id": "2dd6f624aeca",
		"ts": "2026-06-29T10:50:47.616Z",
		"symbol": "VU",
		"token": "0x511ef9Ad5E645E533D15DF605B4628e3D0d0Ff53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 108723.37,
		"hash": "2dd6f624aecaa4e8b01f3096f2c8aa797ea9864ac70821f61ed6f33f3ab5475b"
	},
	{
		"id": "521eecde79e4",
		"ts": "2026-06-29T10:50:47.797Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 437640.61,
		"hash": "521eecde79e430e2c3b6c6cd692ed4280d4ef0ade63e38aed850957d60d646cd"
	},
	{
		"id": "3b27d86786a3",
		"ts": "2026-06-29T10:50:47.972Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 104644.19,
		"hash": "3b27d86786a33e493a1170f352711d8ce933a9710fd94bf48d37f6226f7513a6"
	},
	{
		"id": "de8dada3dddc",
		"ts": "2026-06-29T10:50:48.153Z",
		"symbol": "TOSHI",
		"token": "0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 912923.76,
		"hash": "de8dada3dddc65a8d067a688f018aa60000163318b5bcd268f63b979f6b9a722"
	},
	{
		"id": "083d513a1464",
		"ts": "2026-06-29T10:50:48.334Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4210422.6,
		"hash": "083d513a1464a9919f9e3bfc101844a82b365dc72143f2afcd92cab89cff2a10"
	},
	{
		"id": "c6b19b30f6cb",
		"ts": "2026-06-29T05:28:02.559Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 93405187.49,
		"hash": "c6b19b30f6cb1e7c7bc740ffefccbe55b9e0dc7a51a25976a3bc8998c42e17e8"
	},
	{
		"id": "a7c50340201f",
		"ts": "2026-06-29T05:28:03.278Z",
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
		"liquidityUsd": 12968666.63,
		"hash": "a7c50340201f12700466061564e7a0e7fdc1cdc22f449147dadfd8b46f990b44"
	},
	{
		"id": "a1c2dae90b60",
		"ts": "2026-06-29T05:28:03.534Z",
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
		"liquidityUsd": 1304096.08,
		"hash": "a1c2dae90b601a6368495488713834d141fed7ce90978e34398ee5562be6f577"
	},
	{
		"id": "ac89f7b9dd2c",
		"ts": "2026-06-29T05:28:04.003Z",
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
		"liquidityUsd": 25869473.4,
		"hash": "ac89f7b9dd2ccb1d1e2caf32c60246061a12403df12bfa134ae6967395212211"
	},
	{
		"id": "108f809071cc",
		"ts": "2026-06-29T05:28:04.261Z",
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
		"liquidityUsd": 4028227.92,
		"hash": "108f809071cccf840ca79c3148ceef990c135f38ebe64871c19da4fc9b8e9bb8"
	},
	{
		"id": "f6265eee78c7",
		"ts": "2026-06-29T05:28:04.530Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 917988.53,
		"hash": "f6265eee78c784985991a2de3bae9b763dfb71b3f106b2fd7c3f1e2597c93db3"
	},
	{
		"id": "bb4240bc5064",
		"ts": "2026-06-29T05:28:04.786Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25869473.4,
		"hash": "bb4240bc5064cbdbfb03aa79c10a7cd7f503e6bddd0df7eed7313bb386917a15"
	},
	{
		"id": "37d3a89a3d61",
		"ts": "2026-06-29T05:28:05.042Z",
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
		"liquidityUsd": 2187021.84,
		"hash": "37d3a89a3d6167de3d68cdcbd621e22b79b09e7ccd2f931b6052b4735cc3ebb7"
	},
	{
		"id": "7a54c918aedd",
		"ts": "2026-06-29T05:28:05.299Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 9459851.94,
		"hash": "7a54c918aedd80aa24f8103ee08b57dc056e8908c7e56cd1ce7a743080ab30d1"
	},
	{
		"id": "e1239a94950c",
		"ts": "2026-06-29T05:28:05.577Z",
		"symbol": "Claude",
		"token": "0x6db3cFe766818505e672f9D1ee7b812210B70B07",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 686591.93,
		"hash": "e1239a94950cd1fd05e7d696a7ce91bd0460ff3a8cfa9f63b814fb9ad2a5fbfe"
	},
	{
		"id": "31be064496c2",
		"ts": "2026-06-29T05:28:05.815Z",
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
		"liquidityUsd": 1241785.94,
		"hash": "31be064496c24649fb43d6780e213d64a53e04d5f34da9c39ceffc49fe437790"
	},
	{
		"id": "351ec0d4d98a",
		"ts": "2026-06-29T05:28:06.054Z",
		"symbol": "Polymarket",
		"token": "0xC28f3000cfFB2ff633a21E4206359A906a5bfB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 493203.86,
		"hash": "351ec0d4d98abd99a33adc7ff610b7309b98f4d85f05994ce5c02d859a7e7108"
	},
	{
		"id": "c205fa6f2bfa",
		"ts": "2026-06-29T05:28:06.295Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 105935.4,
		"hash": "c205fa6f2bfa3c0f8179a538614d340d234c83048098debaff9c7d325db0710a"
	},
	{
		"id": "9e981004abf7",
		"ts": "2026-06-29T05:28:06.533Z",
		"symbol": "HANDL",
		"token": "0x3BBCb624CB9A1f73163A886F460f47603E5E4425",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 87301.97,
		"hash": "9e981004abf795552f730ca68ad5a4c90c6282992334435f93864c725f87be2b"
	},
	{
		"id": "af4a5cd3bfc9",
		"ts": "2026-06-29T05:28:06.770Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 435767.46,
		"hash": "af4a5cd3bfc97c3d1cf41749ca82e62b6f5257ee89afe2eb55c8e7685b3ccced"
	},
	{
		"id": "9e7ddb0e33b0",
		"ts": "2026-06-29T05:28:07.010Z",
		"symbol": "TOSHI",
		"token": "0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 922027.22,
		"hash": "9e7ddb0e33b0204428401ea0b89575d94b981dfc7164821e44b0cf8ab43cbff6"
	},
	{
		"id": "cd1a3da7c2c0",
		"ts": "2026-06-29T05:28:07.249Z",
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
		"liquidityUsd": 985464.28,
		"hash": "cd1a3da7c2c06ec7fc0b50673713560b6a96ae6ac70a99b40956fb372adfab3c"
	},
	{
		"id": "df347066ccd9",
		"ts": "2026-06-29T05:28:07.486Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 206838.51,
		"hash": "df347066ccd92b4b1d243d7ef1948c3ff85aec1e2c5ea7ec823140e437332195"
	},
	{
		"id": "dad15464c657",
		"ts": "2026-06-29T00:05:23.708Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 93717350.12,
		"hash": "dad15464c65747c8dbcea7ff85d8a5cd8f64c3f638dae41ea11f5ee388f30b43"
	},
	{
		"id": "cd29a9aca7d2",
		"ts": "2026-06-29T00:05:31.603Z",
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
		"liquidityUsd": 13391989.95,
		"hash": "cd29a9aca7d28dda7da73ba74b8374873e2156b5f6def6264a8b5000dc3bd4d5"
	},
	{
		"id": "13db1414e15b",
		"ts": "2026-06-29T00:05:32.055Z",
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
		"liquidityUsd": 1316796.75,
		"hash": "13db1414e15b181c4dcc3b5950c57de8f33496ba7f107f25bfb14c388d48f044"
	},
	{
		"id": "991413ac91b6",
		"ts": "2026-06-29T00:05:32.494Z",
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
		"liquidityUsd": 25991151.29,
		"hash": "991413ac91b6ae0d0c8859c8473bb143be8c0e80f84e3fa245e1c0654ab40c71"
	},
	{
		"id": "0cc5e6680647",
		"ts": "2026-06-29T00:05:32.930Z",
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
		"liquidityUsd": 4039129,
		"hash": "0cc5e66806473adc621b2b8cdc0d51c90366f82eff09a886eb9dab2293a893b0"
	},
	{
		"id": "2f2f0c12e2f0",
		"ts": "2026-06-29T00:05:33.166Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 915955.94,
		"hash": "2f2f0c12e2f0ee88b12bd88fc127d7b342315708f7151ef87e5eb0de89d43957"
	},
	{
		"id": "b19b9761d591",
		"ts": "2026-06-29T00:05:33.398Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25991151.51,
		"hash": "b19b9761d591ba859ebe5c1d55684c71e7e18a003ad9e37e734c1138d3f2e718"
	},
	{
		"id": "6549f51fb0ce",
		"ts": "2026-06-29T00:05:33.637Z",
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
		"liquidityUsd": 2154650.42,
		"hash": "6549f51fb0cedc9ba0af8bd39307f29b277794e39df37ab6ac4c5df635396c05"
	},
	{
		"id": "cc9e29802eaa",
		"ts": "2026-06-29T00:05:33.871Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 10407929.25,
		"hash": "cc9e29802eaa5173aa51331b7ff638a468e950615bb62965c639f2fdbe2c0a25"
	},
	{
		"id": "d4af492d3c40",
		"ts": "2026-06-29T00:05:34.109Z",
		"symbol": "Polymarket",
		"token": "0xC28f3000cfFB2ff633a21E4206359A906a5bfB07",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 493271.45,
		"hash": "d4af492d3c40624543a310ab8b07dc3eb49ab01fbdc690d4ce0cb3316c28f3ee"
	},
	{
		"id": "a2d72802710e",
		"ts": "2026-06-29T00:05:34.329Z",
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
		"liquidityUsd": 1248224.73,
		"hash": "a2d72802710e0a49dbf83198b8c8b407821ba7e408fe58bc74424e940c97baca"
	},
	{
		"id": "cf49bd216779",
		"ts": "2026-06-29T00:05:35.105Z",
		"symbol": "Sleuth",
		"token": "0x08512BC3570d2E9015a60866d1f6941A31576Ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 70565.18,
		"hash": "cf49bd21677904e9881a7fd2f968bc2d32de33bd362dd33a679cb224ae49a623"
	},
	{
		"id": "e84175b6dcda",
		"ts": "2026-06-29T00:05:35.326Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 101205.37,
		"hash": "e84175b6dcda3b4e954cd9562ee5fad08c9da2b61fabeeacdaa3566e2a94e48b"
	},
	{
		"id": "d572abe7fe77",
		"ts": "2026-06-29T00:05:35.544Z",
		"symbol": "TOSHI",
		"token": "0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 53038723.98,
		"hash": "d572abe7fe7751e4df40788c7747a1f79eb3f8cd7fe39b466fb49b237ad55f05"
	},
	{
		"id": "18b90eb763ca",
		"ts": "2026-06-29T00:05:35.762Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 435805.56,
		"hash": "18b90eb763ca1c900cdb846440846af2aa3af23d2333100dea9ff23b1bdb2d12"
	},
	{
		"id": "5d6f8c252824",
		"ts": "2026-06-29T00:05:35.980Z",
		"symbol": "PRXVT",
		"token": "0x4b5D32A07b8d3eC5D6928cAa30196f8dd6a7C5A9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 305480.87,
		"hash": "5d6f8c2528249a2bdeafaa92e1bb002ac0920cfae8c7565ce540961f784daf24"
	},
	{
		"id": "57d66b6a932b",
		"ts": "2026-06-29T00:05:36.200Z",
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
		"liquidityUsd": 1010551.45,
		"hash": "57d66b6a932bbca86288fe183eba577e088b1c1097c3adaabc6fa2399df39594"
	},
	{
		"id": "e54861ee2fcf",
		"ts": "2026-06-28T22:04:36.224Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 93273871.39,
		"hash": "e54861ee2fcfad062cdae57b9d05259730cd2dc3d338aa4330f2812132f78e9a"
	},
	{
		"id": "7a856121d9d0",
		"ts": "2026-06-28T22:04:36.480Z",
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
		"liquidityUsd": 12456295.51,
		"hash": "7a856121d9d0c19bebac2f0bb1af7a628f62e4a65029127db881653761c3bf48"
	},
	{
		"id": "1a6d17b98850",
		"ts": "2026-06-28T22:04:36.729Z",
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
		"liquidityUsd": 1312837.7,
		"hash": "1a6d17b988501ec6c1ca89589e59076b168fccf27b8e05cc09df9e8d78baab52"
	},
	{
		"id": "b9909b2bb7ff",
		"ts": "2026-06-28T22:04:36.975Z",
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
		"liquidityUsd": 25956973.69,
		"hash": "b9909b2bb7ff728664e94038817167076d1c68420f76b9939b947367ae7f97f7"
	},
	{
		"id": "520a8a93b35e",
		"ts": "2026-06-28T22:04:47.199Z",
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
		"liquidityUsd": 4028690.22,
		"hash": "520a8a93b35e47419a6faeaf09931ca1c546cbaba8aecfe8c613a7164182e69c"
	},
	{
		"id": "bccee222a572",
		"ts": "2026-06-28T22:04:47.490Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 911605.91,
		"hash": "bccee222a5724c290e3214010c80147c33c44d29b76193468010baa7e7b19a63"
	},
	{
		"id": "af906fe65c5d",
		"ts": "2026-06-28T22:04:47.732Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25956973.69,
		"hash": "af906fe65c5d67be48564e3d5dde444c565d087b26de64a36056c0189f33efbb"
	},
	{
		"id": "79ed300f325c",
		"ts": "2026-06-28T22:04:47.971Z",
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
		"liquidityUsd": 2164258.12,
		"hash": "79ed300f325cc0818e6f309c07310707f61ed1772b43ed4d26d82463442a7b86"
	},
	{
		"id": "bcc8f0a323cb",
		"ts": "2026-06-28T22:04:55.211Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 10263963.31,
		"hash": "bcc8f0a323cb8d589a92df33a941627ae508a28d6cf440386d11f57d3184a9b0"
	},
	{
		"id": "bbf32ffeb3c1",
		"ts": "2026-06-28T22:04:55.503Z",
		"symbol": "Polymarket",
		"token": "0xC28f3000cfFB2ff633a21E4206359A906a5bfB07",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 493229.02,
		"hash": "bbf32ffeb3c1234a07f33b17b1e3bbe1e71268f5aa69b9424668800529f9f9d0"
	},
	{
		"id": "2f6b619e63b8",
		"ts": "2026-06-28T22:04:55.735Z",
		"symbol": "Sleuth",
		"token": "0x08512BC3570d2E9015a60866d1f6941A31576Ba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 70795.26,
		"hash": "2f6b619e63b8d78061c484c7eef36815a3061c771eb8fd296740e45ac7440f55"
	},
	{
		"id": "38bb63e701db",
		"ts": "2026-06-28T22:04:55.965Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 104226.59,
		"hash": "38bb63e701db8a012d6f4bc499faeffaecb9fcf6a7167298d33a597cdbc04b42"
	},
	{
		"id": "b536b9ba0a6b",
		"ts": "2026-06-28T22:04:56.196Z",
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
		"liquidityUsd": 1251969.45,
		"hash": "b536b9ba0a6bebfda27dd42b83dc8a95ffe6ddf10efb788c426e7019e9e2b8d8"
	},
	{
		"id": "27ac268e3863",
		"ts": "2026-06-28T22:04:56.427Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 218551.95,
		"hash": "27ac268e3863d999b985e8b774a95550e435bdcde9b2ebc23c79b2c5069a3dff"
	},
	{
		"id": "32464101b2c4",
		"ts": "2026-06-28T22:04:56.657Z",
		"symbol": "TOSHI",
		"token": "0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 53038723.98,
		"hash": "32464101b2c42c3372b7256e5f6899ff366a021151d44bace628689076fa7412"
	},
	{
		"id": "d485b0648c8f",
		"ts": "2026-06-28T22:04:56.890Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 212309.93,
		"hash": "d485b0648c8f84e92a0502f65384c4edd3940df982c5bbd8b0ae9d77e3d2cf0e"
	},
	{
		"id": "129987d9aa22",
		"ts": "2026-06-28T22:04:57.119Z",
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
		"liquidityUsd": 1009953.25,
		"hash": "129987d9aa22de1ac4fc808b119163f52b90c9bd86ad29293c64e58917ccbd2d"
	},
	{
		"id": "1a564fa8840d",
		"ts": "2026-06-28T20:57:52.221Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 93472064.51,
		"hash": "1a564fa8840d535c1c89f6a80505c206ed14998cae39c705f0bcc5b62c4c724f"
	},
	{
		"id": "c1425eaaae87",
		"ts": "2026-06-28T20:57:52.699Z",
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
		"liquidityUsd": 12806006.36,
		"hash": "c1425eaaae8799d56c99580abcfa876a6e0b77da4b2711a248858901cc4fe98f"
	},
	{
		"id": "a0446800b802",
		"ts": "2026-06-28T20:57:52.944Z",
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
		"liquidityUsd": 1318324.4,
		"hash": "a0446800b80231d711e369563ade76186151679a69fe60d8965f1b9dc2de7b65"
	},
	{
		"id": "e4d071234be1",
		"ts": "2026-06-28T20:57:53.192Z",
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
		"liquidityUsd": 25927969.15,
		"hash": "e4d071234be15131a7c93eda5ceee5ef540662cd3d6db232d947d5a052ec38ce"
	},
	{
		"id": "ee8a959eab87",
		"ts": "2026-06-28T20:57:53.439Z",
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
		"liquidityUsd": 4001910.43,
		"hash": "ee8a959eab87183ae0dbd18ab98791662a083caec7da00e4f862586b8e1f2128"
	},
	{
		"id": "9a54fc9615c4",
		"ts": "2026-06-28T20:57:53.683Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 931278.76,
		"hash": "9a54fc9615c419f31452816cacb0bbbb1e147632169578333fb650694f120c4d"
	},
	{
		"id": "c299b6fdb97f",
		"ts": "2026-06-28T20:57:53.925Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25927969.15,
		"hash": "c299b6fdb97f34c5e72a01725fab048eb7e9696f7fac9c0253de3782eab18595"
	},
	{
		"id": "dfbeb2502beb",
		"ts": "2026-06-28T20:57:54.166Z",
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
		"liquidityUsd": 2154700.48,
		"hash": "dfbeb2502beb24cfa470d6d90e85bad5d67ca56c98342c79cac3491b5770900d"
	},
	{
		"id": "6fa8f0f2e9e9",
		"ts": "2026-06-28T20:57:54.409Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 9900552.64,
		"hash": "6fa8f0f2e9e9056392de68018c92608f01ccd4e86f36d364c28e6458b2828939"
	},
	{
		"id": "5e4aa9573890",
		"ts": "2026-06-28T20:57:54.652Z",
		"symbol": "Polymarket",
		"token": "0xC28f3000cfFB2ff633a21E4206359A906a5bfB07",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 493224.79,
		"hash": "5e4aa9573890e658541415d92a59b34bf823acba497a4cebe9e6a80bd6179a81"
	},
	{
		"id": "4f3a9253ec55",
		"ts": "2026-06-28T20:57:54.878Z",
		"symbol": "Sleuth",
		"token": "0x08512BC3570d2E9015a60866d1f6941A31576Ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 74921.7,
		"hash": "4f3a9253ec551046f7d167e814069d10c041e6d1e0244d0a5c0f1e6d062cadfa"
	},
	{
		"id": "0fef1b228286",
		"ts": "2026-06-28T20:57:55.104Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 106212.97,
		"hash": "0fef1b22828654789641fe5f0483341bfe2dc538174edfb41940983335516026"
	},
	{
		"id": "b2a3ddb950ef",
		"ts": "2026-06-28T20:57:55.330Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 217488.23,
		"hash": "b2a3ddb950efac0c80b137b4414cec24f6161df5c4977e530386056959678434"
	},
	{
		"id": "e6fac74aa989",
		"ts": "2026-06-28T20:57:55.557Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 190928.75,
		"hash": "e6fac74aa9896f6023046bb1aa2f31e1a6d96253eeddf98280b2bd1cf5ad244d"
	},
	{
		"id": "3d167ca363ee",
		"ts": "2026-06-28T20:57:55.783Z",
		"symbol": "TOSHI",
		"token": "0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 53038723.98,
		"hash": "3d167ca363ee61d21f1723ebbf924614de710971aa474137b2e25c68cb7c438e"
	},
	{
		"id": "ba77200380ad",
		"ts": "2026-06-28T20:57:56.009Z",
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
		"liquidityUsd": 1172473.49,
		"hash": "ba77200380ad251c795585b6b7047186b5c3d821fa8a72ed96cc47fcc535cc88"
	},
	{
		"id": "81408b11c4a1",
		"ts": "2026-06-28T20:57:56.306Z",
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
		"liquidityUsd": 1016892.98,
		"hash": "81408b11c4a1062778c341e720eccc2b245a897f3fe916b78e9c82b0e27f97e0"
	},
	{
		"id": "3ae8302d9963",
		"ts": "2026-06-28T19:14:11.565Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93403660.42,
		"hash": "3ae8302d996313ce2ac36f46cd6b3bde159d31d5b1daa873cd4edf7840ebe01e"
	},
	{
		"id": "f3183b099705",
		"ts": "2026-06-28T19:14:12.070Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13139490.4,
		"hash": "f3183b0997058b190b21273a62a8cc523c2a5b0f9afef7ebf57ad9b3b69010f6"
	},
	{
		"id": "398d769df422",
		"ts": "2026-06-28T19:14:12.641Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1315994.77,
		"hash": "398d769df42262967fb3b55c8169993822191d9669c4d0148322327d153b6971"
	},
	{
		"id": "dabab8cc222d",
		"ts": "2026-06-28T19:14:12.985Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 25930174.02,
		"hash": "dabab8cc222da2300fdbd9039f6a944875bc432a6b597446d40fbb2ad49fea6a"
	},
	{
		"id": "ddf837df25e6",
		"ts": "2026-06-28T19:14:13.175Z",
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
		"liquidityUsd": 4039681.77,
		"hash": "ddf837df25e66bc963bee92ee2f6cecfcb6bed2918a3c4543b34110fee8a2eaf"
	},
	{
		"id": "3442974f1a87",
		"ts": "2026-06-28T19:14:13.360Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 932444.8,
		"hash": "3442974f1a87e2d30b8fad122f1987c8c23d17843bb367788c002cac873590f1"
	},
	{
		"id": "2b7671acc4a0",
		"ts": "2026-06-28T19:14:13.547Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25930174.02,
		"hash": "2b7671acc4a03147502ee2a0d97e5495a799c880f68c8b97542c2ed2f804c5ad"
	},
	{
		"id": "d828c7e3a296",
		"ts": "2026-06-28T19:14:13.732Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2046445.06,
		"hash": "d828c7e3a296b73d002a3d4ccf08e5af563e0d9b8e8c41184ff5bb9d41b72566"
	},
	{
		"id": "a6885d71fe21",
		"ts": "2026-06-28T19:14:13.918Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 10158321.28,
		"hash": "a6885d71fe21cd4a857c81c29c04f9b737575c7edfc53527024d1ebca7c32fd8"
	},
	{
		"id": "4927865cb6af",
		"ts": "2026-06-28T19:14:14.105Z",
		"symbol": "Sleuth",
		"token": "0x08512BC3570d2E9015a60866d1f6941A31576Ba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 79436.76,
		"hash": "4927865cb6af05639799abeeaae41858aeb7efcfe102d108b836423ff632c09c"
	},
	{
		"id": "741ca8c23024",
		"ts": "2026-06-28T19:14:14.276Z",
		"symbol": "Polymarket",
		"token": "0xC28f3000cfFB2ff633a21E4206359A906a5bfB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 493169.77,
		"hash": "741ca8c230240b66985788b1fdf1d58aa85c3ef04b4cadc88f3b293097b47a93"
	},
	{
		"id": "538c5313c8dd",
		"ts": "2026-06-28T19:14:14.447Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 106777.53,
		"hash": "538c5313c8dd3d535ef5be03abbae64e883725a0df8848cea8f213c4379c1c7a"
	},
	{
		"id": "bb19ee8e04bd",
		"ts": "2026-06-28T19:14:14.619Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 221860.17,
		"hash": "bb19ee8e04bd89d8e4c56de19ceba9232a90ccbc98da3d7d21319ed72fd4605c"
	},
	{
		"id": "7f41048f965d",
		"ts": "2026-06-28T19:14:14.791Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1159360.84,
		"hash": "7f41048f965d3a62c3eb8994f1e4b9a4d21b0a7980e33d2f70c2bd41d6945c3f"
	},
	{
		"id": "6f142ad429d1",
		"ts": "2026-06-28T19:14:14.961Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 196327.59,
		"hash": "6f142ad429d14657dd4bff49bc43d6f4621986475024088612634f88e879e8c0"
	},
	{
		"id": "dcf5c2e20758",
		"ts": "2026-06-28T19:14:15.133Z",
		"symbol": "TOSHI",
		"token": "0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 53038723.98,
		"hash": "dcf5c2e207580a708f25a609be2b295e829215938c10f2686627dc51be801bc3"
	},
	{
		"id": "372bfff7e929",
		"ts": "2026-06-28T19:14:15.304Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4365824.37,
		"hash": "372bfff7e9290e93dc34a19f3021b71289bf1c2722025f2973dc76838b4cb56b"
	},
	{
		"id": "29650df5abc5",
		"ts": "2026-06-28T17:05:23.773Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93493134.71,
		"hash": "29650df5abc59f3f29aaed29c8e00bfb0246c738855d16377800360e5de7adf0"
	},
	{
		"id": "746f9c07a0a3",
		"ts": "2026-06-28T17:05:24.024Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13274355.29,
		"hash": "746f9c07a0a3e43ac91b91bf8e6ee6499955078dd650170695536e0f6b81891e"
	},
	{
		"id": "e8942c698114",
		"ts": "2026-06-28T17:05:24.262Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1334667.91,
		"hash": "e8942c698114f9e8779fca83e91a6a353e927aa4fbeb0ad3804aef96f319d204"
	},
	{
		"id": "3060ea0b402b",
		"ts": "2026-06-28T17:05:24.514Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 26155685.18,
		"hash": "3060ea0b402b8c9f8a319bc16f1a114fbfc22ce8205d096ec669ceb4e44fb15a"
	},
	{
		"id": "569c70a8b937",
		"ts": "2026-06-28T17:05:24.752Z",
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
		"liquidityUsd": 4043609.1,
		"hash": "569c70a8b937baac39692bfde31297967dafbc3ee0a7f230c6797a9c269c7dad"
	},
	{
		"id": "b5f114acac1a",
		"ts": "2026-06-28T17:05:25.000Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 932444.79,
		"hash": "b5f114acac1aeb90760a410d6eaaf4359c4b612ba9a23a3e5a1af60ffcc19d74"
	},
	{
		"id": "dd2a5c7a4ece",
		"ts": "2026-06-28T17:05:25.235Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26155684.49,
		"hash": "dd2a5c7a4eceaf8f8a734d317b955343d51027f55f8bc7cfe7171e386904a54c"
	},
	{
		"id": "e5488cbe332d",
		"ts": "2026-06-28T17:05:25.486Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2051209.28,
		"hash": "e5488cbe332d32316a55706ee29ec65b3075b58ffcf55fe0fcc577181b7365a4"
	},
	{
		"id": "61966f86843c",
		"ts": "2026-06-28T17:05:25.723Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 9765872.99,
		"hash": "61966f86843cf94f4e5c1e0546ec1aee70a5c75d9e7222bccfc68a3e80625b78"
	},
	{
		"id": "9128154fe040",
		"ts": "2026-06-28T17:05:26.000Z",
		"symbol": "Sleuth",
		"token": "0x08512BC3570d2E9015a60866d1f6941A31576Ba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 78321.17,
		"hash": "9128154fe040255d93dc8cb89dd1978f810dd42155575a71e47b62fccb2be39b"
	},
	{
		"id": "1fcec11b9127",
		"ts": "2026-06-28T17:05:26.316Z",
		"symbol": "Polymarket",
		"token": "0xC28f3000cfFB2ff633a21E4206359A906a5bfB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 493172.72,
		"hash": "1fcec11b9127e022c574936fb24fe2ae33ad9ee332c1fc58cbd6e918ff94a690"
	},
	{
		"id": "da5b021da7f9",
		"ts": "2026-06-28T17:05:26.547Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 103699.96,
		"hash": "da5b021da7f96fbaa1c7225210a9dc0e1ead3f366012ac6548c978cdd55c1f9d"
	},
	{
		"id": "fcdc2abd1632",
		"ts": "2026-06-28T17:05:26.770Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 219791.53,
		"hash": "fcdc2abd1632b06fc21dfaf60c357b257c51cd027ca1aa532a8bb958ed9880cc"
	},
	{
		"id": "1003847b69f6",
		"ts": "2026-06-28T17:05:27.001Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 196214.78,
		"hash": "1003847b69f6f85dbd1e73f21d6f7bc949a4eaf2fbfda91dbf1da07773c7894d"
	},
	{
		"id": "53f64ed5f1ea",
		"ts": "2026-06-28T17:05:27.222Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1266238.94,
		"hash": "53f64ed5f1ea0986ffdb78f15780115d7a8b4865212cfc2bb80f73fd4e5501ca"
	},
	{
		"id": "34557ea5668b",
		"ts": "2026-06-28T17:05:27.453Z",
		"symbol": "TOSHI",
		"token": "0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 53038723.98,
		"hash": "34557ea5668bb54a56536683759a975568e398f44246759a2f82b38a5857f746"
	},
	{
		"id": "015e609d95cb",
		"ts": "2026-06-28T17:05:27.675Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4399803.37,
		"hash": "015e609d95cbcd04d21de8876c3a3ade654b94f88ae18a2d8c6b76f3e081c672"
	},
	{
		"id": "8df450d1b0f5",
		"ts": "2026-06-28T15:15:42.643Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93840201.13,
		"hash": "8df450d1b0f5b2671f93660af1349db7a2952289d7721e94736b49e167785be7"
	},
	{
		"id": "965b8a7033e0",
		"ts": "2026-06-28T15:15:42.894Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13206650.79,
		"hash": "965b8a7033e0991c9b8c031d13116c839cd5a1500b76b642092376f0e97f5e01"
	},
	{
		"id": "e28c82d15ac6",
		"ts": "2026-06-28T15:15:43.155Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1340742.7,
		"hash": "e28c82d15ac68c9ae3b3c611d5668e063c6b8828aaba98b442723edbf1a84827"
	},
	{
		"id": "96df5154a502",
		"ts": "2026-06-28T15:15:43.411Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 26161267.15,
		"hash": "96df5154a502333ede6e93e002f1205a95cb409103f121820f4b59f9231da89c"
	},
	{
		"id": "27609d8e8145",
		"ts": "2026-06-28T15:15:43.882Z",
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
		"liquidityUsd": 4046971.32,
		"hash": "27609d8e8145ab38459c5cd70e81c4cea4df765c8bc654e2999ef7f0511bbcb3"
	},
	{
		"id": "46c824b32643",
		"ts": "2026-06-28T15:15:44.132Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 935453.67,
		"hash": "46c824b3264323bc4395032ce77f8a775f3ee2733f3770440ac69527ec863c27"
	},
	{
		"id": "9bf9c258e8c8",
		"ts": "2026-06-28T15:15:44.389Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26161267.32,
		"hash": "9bf9c258e8c81e5ff52df92f75c4438886fb3faf11f1377c4459004569613093"
	},
	{
		"id": "4e050972d7d8",
		"ts": "2026-06-28T15:15:44.645Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1502440.73,
		"hash": "4e050972d7d81251705990774f8becd77edaeb15e7ec314995b0c1b579894a93"
	},
	{
		"id": "520709909ab5",
		"ts": "2026-06-28T15:15:44.894Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 9815475.71,
		"hash": "520709909ab532e692cc06f8801eb8cc907b0aae81ad7569fe75fdfb5f477c08"
	},
	{
		"id": "ef849a0a8d83",
		"ts": "2026-06-28T15:15:45.139Z",
		"symbol": "Sleuth",
		"token": "0x08512BC3570d2E9015a60866d1f6941A31576Ba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 81563.91,
		"hash": "ef849a0a8d8379dc7551a1da8c55bc06b1696f7813f4b1edb0395b2ec49168b7"
	},
	{
		"id": "df22612fee88",
		"ts": "2026-06-28T15:15:45.381Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 222344.79,
		"hash": "df22612fee885194cfd009dc6fbeafc0ffff881d355c9cf5ec99782010e9c8ea"
	},
	{
		"id": "b4d143b9b6c4",
		"ts": "2026-06-28T15:15:45.623Z",
		"symbol": "Polymarket",
		"token": "0xC28f3000cfFB2ff633a21E4206359A906a5bfB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 493215.22,
		"hash": "b4d143b9b6c4f1f3f004d4f23f25f526d3c3ed644d75d9aac5bccec2bb8c2e6a"
	}
]
