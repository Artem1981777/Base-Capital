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
	"updatedAt": "2026-08-08T18:31:26.211Z",
	"tokensScored": 8250,
	"verdictsIssued": 8250,
	"safe": 7209,
	"risky": 625,
	"likelyRug": 416,
	"ticks": 502
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "26c41ae5167c",
		"ts": "2026-08-08T18:31:23.375Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115497668.29,
		"hash": "26c41ae5167c0b53fd552cfd26e35282ad114de4af2296cc7732c3ea4fc5ba15"
	},
	{
		"id": "f5c1572cfb01",
		"ts": "2026-08-08T18:31:23.568Z",
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
		"liquidityUsd": 16979425.27,
		"hash": "f5c1572cfb0181a71bc3450e3719b99e6c6b1fcc2cafa968b7b35ad5cc1aeea7"
	},
	{
		"id": "902d5d7ef4dd",
		"ts": "2026-08-08T18:31:23.793Z",
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
		"liquidityUsd": 1050505.81,
		"hash": "902d5d7ef4ddf74d4bf4a2f8ba830df60d822b13930ac338a24be81860ca8cf1"
	},
	{
		"id": "08fcac324ffd",
		"ts": "2026-08-08T18:31:23.987Z",
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
		"liquidityUsd": 27339366.78,
		"hash": "08fcac324ffdfa78d6b118bfe72c13df5592135096c5afce74cab0f976d0ad2d"
	},
	{
		"id": "87681fc719dc",
		"ts": "2026-08-08T18:31:24.184Z",
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
		"liquidityUsd": 4435779.31,
		"hash": "87681fc719dc91cf6516fd3f8f3401858b111d35b76c4d20bbcd626009af47ac"
	},
	{
		"id": "4a689d859ab4",
		"ts": "2026-08-08T18:31:24.377Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 943011.1,
		"hash": "4a689d859ab49140edf29bdfe311206f52353d54399e91ea0b3b45d9f3b10538"
	},
	{
		"id": "24510bc7393b",
		"ts": "2026-08-08T18:31:24.589Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27339366.78,
		"hash": "24510bc7393bde2d65050003b0a7a7acc10e8858c641e4e7ca4751f23670bca0"
	},
	{
		"id": "5348c8f138a9",
		"ts": "2026-08-08T18:31:24.785Z",
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
		"liquidityUsd": 4880158.51,
		"hash": "5348c8f138a9adbd50dbdf118b8f0b3ba86d1d56dad0bc88f13014b2c66dcf7b"
	},
	{
		"id": "b45c69f15529",
		"ts": "2026-08-08T18:31:24.985Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 982518.76,
		"hash": "b45c69f15529a489d288c7d27c0d2516fb04c9e620c9a9214e363cfa1edcf592"
	},
	{
		"id": "fe504c5e1c0d",
		"ts": "2026-08-08T18:31:25.181Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 504507.96,
		"hash": "fe504c5e1c0dee23061b60aae5c116a923a9cb83625f9c92f4976fd6f3e55ec5"
	},
	{
		"id": "0ab48b85735b",
		"ts": "2026-08-08T18:31:25.386Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4076846.56,
		"hash": "0ab48b85735bac956e1622841db0366425be6d41fba5d813dbec5474c1d63949"
	},
	{
		"id": "fbf883a9c51f",
		"ts": "2026-08-08T18:31:25.586Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 351337.77,
		"hash": "fbf883a9c51fe195e2a52824c1fbcba4e1cc2cc3e707a221b4f56ba02e1e5da1"
	},
	{
		"id": "0f102b704e67",
		"ts": "2026-08-08T18:31:25.788Z",
		"symbol": "AURA",
		"token": "0xdCaA5E062b2be18E52eA6ED7ba232538621dDC10",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 54945.05,
		"hash": "0f102b704e6742c6d689a9f43497c37386ca4099bcd18046a18041e05d091c09"
	},
	{
		"id": "0d0195412180",
		"ts": "2026-08-08T18:31:25.990Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1925100.28,
		"hash": "0d0195412180f2c802ba448e5e27f5f586695399ec25f3f936a2616a4bed1fcb"
	},
	{
		"id": "6c1de42c1500",
		"ts": "2026-08-08T18:31:26.211Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9316747.85,
		"hash": "6c1de42c1500c35c479997c31466fd3d8013d047e03fd9391fa06c218bcc6618"
	},
	{
		"id": "b295cc2ff92b",
		"ts": "2026-08-08T17:25:36.469Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115530213.43,
		"hash": "b295cc2ff92b33bf48aadeb5be078532ef165725c6a083a988d0ae1972db488d"
	},
	{
		"id": "ee0a6e9c68d8",
		"ts": "2026-08-08T17:25:36.704Z",
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
		"liquidityUsd": 16114357.87,
		"hash": "ee0a6e9c68d81f07a8794a415ca0e8a5dff7904a459b7cdce1bd61c8c226f03f"
	},
	{
		"id": "d221b4f1b6be",
		"ts": "2026-08-08T17:25:36.971Z",
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
		"liquidityUsd": 1050270.01,
		"hash": "d221b4f1b6be8637c3066a7c8cdb4fbd43a4bc6ba79476f7739bc6e777adb75f"
	},
	{
		"id": "200f28c9d0dd",
		"ts": "2026-08-08T17:25:37.206Z",
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
		"liquidityUsd": 27358636.54,
		"hash": "200f28c9d0ddfdc8b82ea2b72f4d189559906a3805b3230caa4944357501a15f"
	},
	{
		"id": "01e66eb95769",
		"ts": "2026-08-08T17:25:37.441Z",
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
		"liquidityUsd": 4438525.87,
		"hash": "01e66eb95769a1f2ff049b2896bf2f4db9ed72c80521be4a5461da1fc7f07031"
	},
	{
		"id": "ec93b120d0bb",
		"ts": "2026-08-08T17:25:37.686Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 942851.5,
		"hash": "ec93b120d0bb7c569def9d669ed5228c0e205e4c8cfb84d5beb21074d78c96c5"
	},
	{
		"id": "27f20391fde1",
		"ts": "2026-08-08T17:25:37.912Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27358636.54,
		"hash": "27f20391fde1fabcf7924a967e0bd0b0bc3b0c084570bc485f41267c2c0a87cd"
	},
	{
		"id": "2501c68d6f39",
		"ts": "2026-08-08T17:25:38.143Z",
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
		"liquidityUsd": 4885695.32,
		"hash": "2501c68d6f39509fc636de44ce9d548e6a40ecfa201ff01a2b0ffaaf45da1703"
	},
	{
		"id": "999060e6f83b",
		"ts": "2026-08-08T17:25:38.380Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 981883.65,
		"hash": "999060e6f83bf95f6a307f9f72996d1a95e7dd93f4128cb43f96ba32559784bf"
	},
	{
		"id": "edc204ef1469",
		"ts": "2026-08-08T17:25:38.612Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 533654.71,
		"hash": "edc204ef1469398d0d25ebf43dea14bb97146b5f4a5807ebee91f824a0318abd"
	},
	{
		"id": "8b31a5562b09",
		"ts": "2026-08-08T17:25:38.837Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 348385.02,
		"hash": "8b31a5562b096c0132b78fa699efddfc7ce498f260d9ae676776574e3db327d9"
	},
	{
		"id": "58b372b4cf9d",
		"ts": "2026-08-08T17:25:39.049Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4074948.4,
		"hash": "58b372b4cf9d32545831669f0c27aa2602489e0732c9670b3bce78a3fe9bc712"
	},
	{
		"id": "fd651bfe1403",
		"ts": "2026-08-08T17:25:39.259Z",
		"symbol": "AURA",
		"token": "0xdCaA5E062b2be18E52eA6ED7ba232538621dDC10",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55189.62,
		"hash": "fd651bfe1403c771f5e3ac73cb70d26539ad93690c1a1b57e98d658808b58b7a"
	},
	{
		"id": "67211f4700a5",
		"ts": "2026-08-08T17:25:39.482Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1929879.47,
		"hash": "67211f4700a5b1de1e2a899e5eb73d5cbc950ba2f196fe0de07ba74346fb9611"
	},
	{
		"id": "4e58fd5651ec",
		"ts": "2026-08-08T17:25:39.705Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9300234.74,
		"hash": "4e58fd5651ec85af03dfd5ff6ae02f0cbc97a6169f5e828395feedb76d3ec872"
	},
	{
		"id": "ccf4e9b74bc9",
		"ts": "2026-08-08T17:25:39.916Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 707990.95,
		"hash": "ccf4e9b74bc9e010efa70cef26c78527a6f8c3e8cfd922c644fb0a7960963b83"
	},
	{
		"id": "5510ed7f3802",
		"ts": "2026-08-08T16:28:14.859Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115575583.07,
		"hash": "5510ed7f3802fdf798dcc65b356a19672a9b0587e49c6222e641cc6599675f49"
	},
	{
		"id": "fa6bb7a107c0",
		"ts": "2026-08-08T16:28:15.228Z",
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
		"liquidityUsd": 17080740.57,
		"hash": "fa6bb7a107c0039c07888cd71feb0d0250849ab25390361d2ae0c51bd2c79ea2"
	},
	{
		"id": "a766ea2d7541",
		"ts": "2026-08-08T16:28:15.554Z",
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
		"liquidityUsd": 1050270.01,
		"hash": "a766ea2d7541e5d0f83c329a106b3e2000095992907f25a428f469f3d0481080"
	},
	{
		"id": "e08289400472",
		"ts": "2026-08-08T16:28:15.759Z",
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
		"liquidityUsd": 27359100.92,
		"hash": "e08289400472b9c595332879d792c3d5353b1e38b5fafca1b16b5adfa9e728cf"
	},
	{
		"id": "6fec34e1697e",
		"ts": "2026-08-08T16:28:15.974Z",
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
		"liquidityUsd": 4440927.41,
		"hash": "6fec34e1697ec1ecfe5cdec2963f7b3fc526e26778b66695f031c23a2158e5be"
	},
	{
		"id": "5a9e3ca1dd92",
		"ts": "2026-08-08T16:28:16.179Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 942851.5,
		"hash": "5a9e3ca1dd92e7c1330719cf808629911b26a9609ac4f3f2537374a6109efe6d"
	},
	{
		"id": "ae09be67c9e2",
		"ts": "2026-08-08T16:28:16.372Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27359100.92,
		"hash": "ae09be67c9e219050a5c4b3a6ba45508003bd6cb6fe3dfa0ae83d7ce69d51ee2"
	},
	{
		"id": "cb41032139a2",
		"ts": "2026-08-08T16:28:16.630Z",
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
		"liquidityUsd": 4887039.5,
		"hash": "cb41032139a2806255f5f4716ab0ae44dcbface4d5430a7c1a1967ef32d43afd"
	},
	{
		"id": "6be30039df9d",
		"ts": "2026-08-08T16:28:16.834Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 982535.92,
		"hash": "6be30039df9d45d128cec63e141389881061bb48ee64829f4c889d1df9d8fe81"
	},
	{
		"id": "7ef96196eefb",
		"ts": "2026-08-08T16:28:17.020Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 503959.03,
		"hash": "7ef96196eefbbe1134220b842ccae571c6fd7f778c1238a736359132e22aa477"
	},
	{
		"id": "4f4a1a0261c9",
		"ts": "2026-08-08T16:28:17.196Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 348746.6,
		"hash": "4f4a1a0261c93e0b7e47bc856c2d98475ee4b0a68b8217d89131d56ecb5fce50"
	},
	{
		"id": "b8b5d6b8eaf3",
		"ts": "2026-08-08T16:28:17.384Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4067975.64,
		"hash": "b8b5d6b8eaf38ada7253fc81290a9f84862b4eff024b02c2f65f422b6da477f5"
	},
	{
		"id": "3479673e4ebf",
		"ts": "2026-08-08T16:28:17.562Z",
		"symbol": "AURA",
		"token": "0xdCaA5E062b2be18E52eA6ED7ba232538621dDC10",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 56096.15,
		"hash": "3479673e4ebff4a0c7c0610be678df76e57b26d95df7ddbb135b6ebb865c24ba"
	},
	{
		"id": "57c7f67cfb56",
		"ts": "2026-08-08T16:28:17.770Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1931035.34,
		"hash": "57c7f67cfb567fd33c657ec9b3200ccbe9cfc20aa67d41c7c2a99870db815db1"
	},
	{
		"id": "37b06a34b690",
		"ts": "2026-08-08T16:28:17.948Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9273617.22,
		"hash": "37b06a34b690f79b513abdce9eaa657639abb1ca1490cf09d16ac3bf14f58e42"
	},
	{
		"id": "88698d33186e",
		"ts": "2026-08-08T16:28:18.140Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2127378.16,
		"hash": "88698d33186e8f6c606363232fc850833d3aa7c1865320a0c2c5225d043f71bd"
	},
	{
		"id": "916d99048922",
		"ts": "2026-08-08T15:25:22.311Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115585058.57,
		"hash": "916d99048922cc7e6b57efc29e54495f1d2f63949014ff3160ae1178cb2be1c4"
	},
	{
		"id": "bfb4ad63058b",
		"ts": "2026-08-08T15:25:22.732Z",
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
		"liquidityUsd": 17243144.54,
		"hash": "bfb4ad63058be4cf73c9a1038ec6893f1e15d89a8f053c949efc91a7195e5a40"
	},
	{
		"id": "88383c828097",
		"ts": "2026-08-08T15:25:22.964Z",
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
		"liquidityUsd": 1050210.71,
		"hash": "88383c828097a379711e279b454229a6912a3daa46c67778fefd34d77166706e"
	},
	{
		"id": "196727be0160",
		"ts": "2026-08-08T15:25:23.407Z",
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
		"liquidityUsd": 27359287.11,
		"hash": "196727be01606f1c6a5aeba79079b893c61428b38929d08fb21189f923edb9da"
	},
	{
		"id": "705faa577a3f",
		"ts": "2026-08-08T15:25:23.634Z",
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
		"liquidityUsd": 4440709.98,
		"hash": "705faa577a3f574f021dc2a1a9b5faea10ddd143220a49df63cb90745a0e0258"
	},
	{
		"id": "6d0d40585f48",
		"ts": "2026-08-08T15:25:23.864Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 933747.09,
		"hash": "6d0d40585f48eb3cf448b5b99c24c44025c87b68fa95f503998836e424b2652e"
	},
	{
		"id": "cb054cf0f326",
		"ts": "2026-08-08T15:25:24.099Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27359287.11,
		"hash": "cb054cf0f3260d3fe5d7dc85becd051f6648ce168ad606af7845f76586e7addb"
	},
	{
		"id": "8d70545c4923",
		"ts": "2026-08-08T15:25:24.330Z",
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
		"liquidityUsd": 4886277.24,
		"hash": "8d70545c4923bf25df7dd3950999b3047dc349f58110d59d80a9c1e2c3130af8"
	},
	{
		"id": "0e9d2a6cc0bf",
		"ts": "2026-08-08T15:25:24.568Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 986021.15,
		"hash": "0e9d2a6cc0bfc52aee3b4b2be3b3809d8b0dab475f574433b0363dddd24ac021"
	},
	{
		"id": "c18573b7f6d4",
		"ts": "2026-08-08T15:25:24.805Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 525388.36,
		"hash": "c18573b7f6d4fd89c1f6b31ec400663f034a925260dd84d3ac05dd6d151aae37"
	},
	{
		"id": "070928e1474d",
		"ts": "2026-08-08T15:25:25.014Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 348902.8,
		"hash": "070928e1474debd8fbfc75eb6e903c5453fa369133553087b0b2c876f6041114"
	},
	{
		"id": "19cfb33ca91a",
		"ts": "2026-08-08T15:25:25.227Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4068218.26,
		"hash": "19cfb33ca91a74a0a88a46c58bd2f25dd879588052ff54032cd7a6a914eabf48"
	},
	{
		"id": "e842b027aae8",
		"ts": "2026-08-08T15:25:25.448Z",
		"symbol": "AURA",
		"token": "0xdCaA5E062b2be18E52eA6ED7ba232538621dDC10",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 56699.99,
		"hash": "e842b027aae83924905030966a5ad8a6716743cd10c2eed8799615117df70c22"
	},
	{
		"id": "8050898b2fd5",
		"ts": "2026-08-08T15:25:25.656Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9308246.86,
		"hash": "8050898b2fd5272844bc823c844d6609e2f90e4b6e8ab880f79a085157f287e3"
	},
	{
		"id": "205c2bb88d9e",
		"ts": "2026-08-08T15:25:25.867Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2134516.64,
		"hash": "205c2bb88d9eac26d6a747cc002126101f65e6127604214482d1d96fb941633b"
	},
	{
		"id": "92f96ebfcaf5",
		"ts": "2026-08-08T15:25:26.089Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1933903.28,
		"hash": "92f96ebfcaf52911a97f49a8c0876403cec7bb8f048e9b54a1c01efc58918ccf"
	},
	{
		"id": "aac7777ef4d3",
		"ts": "2026-08-08T15:25:26.299Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 688796.16,
		"hash": "aac7777ef4d355cbd79bef7d8149c6ed652ec26b4164b7298dd68971a26fc3a8"
	},
	{
		"id": "b350f0088eca",
		"ts": "2026-08-08T14:28:06.721Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115499361.52,
		"hash": "b350f0088eca9c57670c1ab681536a5118c0bdbc3dad379d78beb74cc50fd979"
	},
	{
		"id": "6a35c0ee4f87",
		"ts": "2026-08-08T14:28:07.086Z",
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
		"liquidityUsd": 17689515.73,
		"hash": "6a35c0ee4f87724ea24c8753f039860d502b26677f9662c591bc3bb0fded5fa5"
	},
	{
		"id": "71a8ce80d59c",
		"ts": "2026-08-08T14:28:07.415Z",
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
		"liquidityUsd": 1050210.71,
		"hash": "71a8ce80d59ca0444c8001a2311a57aa5f5e19fb2929aabc2a48450f39070cb0"
	},
	{
		"id": "cf50373d9157",
		"ts": "2026-08-08T14:28:07.748Z",
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
		"liquidityUsd": 27367815.89,
		"hash": "cf50373d91577958b44b1acd2a057bc50b46b795631864eb751e3d093b9b46ed"
	},
	{
		"id": "674ef0218078",
		"ts": "2026-08-08T14:28:07.939Z",
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
		"liquidityUsd": 4431746.43,
		"hash": "674ef0218078341db53a3fcb3961fee44f473d6ff68ae72c3040e8851c814e2a"
	},
	{
		"id": "cadbf10e1c8f",
		"ts": "2026-08-08T14:28:08.125Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 941410.46,
		"hash": "cadbf10e1c8f12f455b4b69209fad48494dc199708de31032a60fa71e79e76be"
	},
	{
		"id": "dfa666ead8c8",
		"ts": "2026-08-08T14:28:08.316Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27367815.89,
		"hash": "dfa666ead8c83f5a811194bc3f4dc3490fe1d323e8e330a25d687538288ee245"
	},
	{
		"id": "9492cc199ff9",
		"ts": "2026-08-08T14:28:08.500Z",
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
		"liquidityUsd": 4888309.41,
		"hash": "9492cc199ff9f6ef39856c914af533f539e29a6eda58495c0c3c8f457af88045"
	},
	{
		"id": "e8fa091cd487",
		"ts": "2026-08-08T14:28:08.690Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 988064.96,
		"hash": "e8fa091cd487e0704fe67bb84a6920bc0a644557095a4ed944f8106abbb9f169"
	},
	{
		"id": "f452a9069453",
		"ts": "2026-08-08T14:28:08.874Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 505071.18,
		"hash": "f452a9069453b5b99af6f89245487c541a5bace3613ed5469a1ef85142863560"
	},
	{
		"id": "f6ec57bb6d64",
		"ts": "2026-08-08T14:28:09.058Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 348908.62,
		"hash": "f6ec57bb6d640248d61a4aff7830b9d5ade11e5662731406ced7a282b51f6b4b"
	},
	{
		"id": "a3c7b772642b",
		"ts": "2026-08-08T14:28:09.410Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4058242.37,
		"hash": "a3c7b772642be407c0e3f3afcb7b97eed4ae7a3563d713d207a41655ae66fa7c"
	},
	{
		"id": "1c5020a43dd9",
		"ts": "2026-08-08T14:28:09.596Z",
		"symbol": "AURA",
		"token": "0xdCaA5E062b2be18E52eA6ED7ba232538621dDC10",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 59200.9,
		"hash": "1c5020a43dd9d74bbed3ff2b4e73f98009368d70795fa8a14977e8f820faaea2"
	},
	{
		"id": "76e9fe0c874c",
		"ts": "2026-08-08T14:28:09.784Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9303775.76,
		"hash": "76e9fe0c874c627929957f742674f30820c8f230b78cba68712d2fed92b32b64"
	},
	{
		"id": "3554a65d3bcf",
		"ts": "2026-08-08T14:28:09.965Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2132001.6,
		"hash": "3554a65d3bcf0ba1b9b234e735bde525d72dbcedbc61587972565099a8f846e9"
	},
	{
		"id": "ff8861edf45f",
		"ts": "2026-08-08T14:28:10.148Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 73943.39,
		"hash": "ff8861edf45f7870329be4dd882f5627f64c294324f96b1120356e395b96cd1a"
	},
	{
		"id": "0ee16785f8de",
		"ts": "2026-08-08T14:28:10.330Z",
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
		"liquidityUsd": 682241.38,
		"hash": "0ee16785f8defe34934ecfe4e15732d0f80767efc167fc8d30be9fd6143d7812"
	},
	{
		"id": "f3079261fd25",
		"ts": "2026-08-08T13:41:47.209Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115607054.67,
		"hash": "f3079261fd25174688f13f79037b29979b56b7aa3d3a5f1457b5b03db8284a56"
	},
	{
		"id": "794f1fb2e890",
		"ts": "2026-08-08T13:41:47.539Z",
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
		"liquidityUsd": 17391005.1,
		"hash": "794f1fb2e8901eac6d0b4f015a7abf5c694029375f3bcc1b950d7659ecfea9e6"
	},
	{
		"id": "7f6098c99189",
		"ts": "2026-08-08T13:41:47.728Z",
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
		"liquidityUsd": 1049933.91,
		"hash": "7f6098c991895bcc68d59671a67c511220a69bb6ddcb69ef5fa2d57a603dfca8"
	},
	{
		"id": "7967714925be",
		"ts": "2026-08-08T13:41:47.905Z",
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
		"liquidityUsd": 27367791.21,
		"hash": "7967714925be63d785aacf5a68d286929e96a81d344424e5555dd46761a0788a"
	},
	{
		"id": "e7d242a3c480",
		"ts": "2026-08-08T13:41:48.092Z",
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
		"liquidityUsd": 4431746.43,
		"hash": "e7d242a3c480b7a0790ded57e979d2aaf9ec696fbc614129daf4b41990543be5"
	},
	{
		"id": "a1714db445f8",
		"ts": "2026-08-08T13:41:48.279Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 939873.99,
		"hash": "a1714db445f8136d3cc01e92ec842e59b278a448bd29e92a57c6ecb751a6803b"
	},
	{
		"id": "23719a650874",
		"ts": "2026-08-08T13:41:48.471Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27367791.21,
		"hash": "23719a650874a9b20cd853587f14937ed0f18059deaf97f24987fbc3dd6097f0"
	},
	{
		"id": "e76f456eb9da",
		"ts": "2026-08-08T13:41:48.647Z",
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
		"liquidityUsd": 4875706.77,
		"hash": "e76f456eb9da0496affcb951e80ba03c28d9ce59179e6074b2def706d10a6bd2"
	},
	{
		"id": "f18fb7925920",
		"ts": "2026-08-08T13:41:48.833Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 989894.73,
		"hash": "f18fb79259201d44d116bc18c3437c180a40154b53fe62748d62863207fa32c7"
	},
	{
		"id": "9f2832f66502",
		"ts": "2026-08-08T13:41:49.121Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 515045.47,
		"hash": "9f2832f665028f75196898ddacc58b7fee24acc63c5c94be94a4ef34a737f480"
	},
	{
		"id": "b5db3f4ea103",
		"ts": "2026-08-08T13:41:49.307Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 348492.37,
		"hash": "b5db3f4ea103949da32cb50a81683e105baaeb34a9b0090fdbbdbf55a1d6845c"
	},
	{
		"id": "36f58da4f7a9",
		"ts": "2026-08-08T13:41:49.480Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4057662.09,
		"hash": "36f58da4f7a9b97a88e32bc502a9a27506d05a66c86a98eefbbfdbd4e2ef41b6"
	},
	{
		"id": "a5936beb4c63",
		"ts": "2026-08-08T13:41:49.667Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2130302.23,
		"hash": "a5936beb4c632ee72114589ef375bc586a6a988a518743e96fe9642c02445f9e"
	},
	{
		"id": "0ca2048a13ce",
		"ts": "2026-08-08T13:41:49.866Z",
		"symbol": "AURA",
		"token": "0xdCaA5E062b2be18E52eA6ED7ba232538621dDC10",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 58830.11,
		"hash": "0ca2048a13cef14dae12163e9fb8ee83bd9a788e6d9cd5507ca919eb224677c8"
	},
	{
		"id": "d50e588560eb",
		"ts": "2026-08-08T13:41:50.080Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 545659.44,
		"hash": "d50e588560eb88e6e0de405aaae2710124c4b21830009605c80dbafe69862a59"
	},
	{
		"id": "d7b0d65ee9eb",
		"ts": "2026-08-08T13:41:50.272Z",
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
		"liquidityUsd": 9272557.71,
		"hash": "d7b0d65ee9eb856e6f2c0004c21e1c956c298459db6b00683e4c52da1ed3e972"
	},
	{
		"id": "775beccc67fa",
		"ts": "2026-08-08T13:41:50.510Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 73915.23,
		"hash": "775beccc67fad8a68f6869223f49414b71cb3f152bdad869fe6eb440fc96d55e"
	},
	{
		"id": "8ced17eb7009",
		"ts": "2026-08-08T12:39:01.980Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115601179.67,
		"hash": "8ced17eb7009f44c1b87f4fba0054b145563913dc73836de46ef86c1dfaae39c"
	},
	{
		"id": "d01e76a32ca2",
		"ts": "2026-08-08T12:39:02.235Z",
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
		"liquidityUsd": 16939826.14,
		"hash": "d01e76a32ca20a0e3332602a83597530c7bbd9af8b5612ffbf15db262bc822f7"
	},
	{
		"id": "4a24ff3267ae",
		"ts": "2026-08-08T12:39:02.473Z",
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
		"liquidityUsd": 1049933.91,
		"hash": "4a24ff3267ae57aff7efae41cfd90f654f317b6d2d77678676fdce559e204192"
	},
	{
		"id": "a3d1e9a10c25",
		"ts": "2026-08-08T12:39:02.701Z",
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
		"liquidityUsd": 27367971.34,
		"hash": "a3d1e9a10c2590f5867b03c2ba3075ef4f8c66c6f9a89738ba8ebae612d2ec18"
	},
	{
		"id": "7a7bc18d7bb3",
		"ts": "2026-08-08T12:39:02.928Z",
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
		"liquidityUsd": 4432679.06,
		"hash": "7a7bc18d7bb3c409b71c4fd021bdf9f953379ac0c0688955b4538d4d564c0f79"
	},
	{
		"id": "7ca102b2df91",
		"ts": "2026-08-08T12:39:03.154Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 934823.41,
		"hash": "7ca102b2df912f08c16d872dd79226c7bf98f14c56c668f877f71a488e6e4bc2"
	},
	{
		"id": "f21cb4e2cadd",
		"ts": "2026-08-08T12:39:03.418Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27367971.34,
		"hash": "f21cb4e2cadd7b6c74da14544cc706ca57708a05e6f74b3ad4948948667550a4"
	},
	{
		"id": "0f9ee557faac",
		"ts": "2026-08-08T12:39:03.644Z",
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
		"liquidityUsd": 4878459.18,
		"hash": "0f9ee557faac86b8396b278f09b7034202c9e871e0509a3cb19ea7d854c001dd"
	},
	{
		"id": "5902b2b0e048",
		"ts": "2026-08-08T12:39:03.868Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 999500.04,
		"hash": "5902b2b0e048f7c1775d37a5738523220ec4278aefb6ae3d4c0dbdc9acd3fb38"
	},
	{
		"id": "7b25e3ffa2df",
		"ts": "2026-08-08T12:39:04.093Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 508253.25,
		"hash": "7b25e3ffa2dfd4a581347fce3249f535e92954319ec7fee206f7cfde704c7492"
	},
	{
		"id": "2ed63be810f6",
		"ts": "2026-08-08T12:39:04.308Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 348034.58,
		"hash": "2ed63be810f610b6bdcfd70a78e0d659848cf2b1727a466a66df8cf8a7c4172c"
	},
	{
		"id": "f840f8e4de77",
		"ts": "2026-08-08T12:39:04.522Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4058994.74,
		"hash": "f840f8e4de77dbc7561d87e06022d5086a929c49554e34d4eba74315e463fbfc"
	},
	{
		"id": "ab30689b9286",
		"ts": "2026-08-08T12:39:04.734Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2132356.57,
		"hash": "ab30689b9286a93f9c258c5870947c0f9f75d65b9d0cab3164bec2f7c4df99de"
	},
	{
		"id": "c90a8b6828ea",
		"ts": "2026-08-08T12:39:04.943Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1800759.53,
		"hash": "c90a8b6828ea2879a4963c01d46eb2ee365f2825a45e9955dbbf4bc87eeb963a"
	},
	{
		"id": "c146279e68ec",
		"ts": "2026-08-08T12:39:05.155Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9275547.52,
		"hash": "c146279e68ec99f01d8be47ea074dc045388416aaeecb371be63aa9ed6e50d28"
	},
	{
		"id": "02b752c2eee0",
		"ts": "2026-08-08T12:39:05.364Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 691334.47,
		"hash": "02b752c2eee04f94ba7ae9e851981b67c9e931953b73a068f5d2fad2df0f9cac"
	},
	{
		"id": "26e8197c61dd",
		"ts": "2026-08-08T12:39:05.574Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 544187.5,
		"hash": "26e8197c61ddf33207d78b40a4f21789bc2d7021a1555f8d9cf0f0c5f1091a3e"
	},
	{
		"id": "9bba2ff1e35f",
		"ts": "2026-08-08T11:24:03.763Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115537840.22,
		"hash": "9bba2ff1e35f20763448757258efb4abde61b24908ee8834ad9790c08e39238e"
	},
	{
		"id": "45013377a886",
		"ts": "2026-08-08T11:24:03.974Z",
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
		"liquidityUsd": 16115824.69,
		"hash": "45013377a886bb6bb6b6785b23dc66f8a97541a98e31f9bab36cfb15dd5dd322"
	},
	{
		"id": "74c519e4d129",
		"ts": "2026-08-08T11:24:04.168Z",
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
		"liquidityUsd": 1050366.49,
		"hash": "74c519e4d129a14d9ef511db8fd5f1cac8a90968595a7546cd41198bc92afe37"
	},
	{
		"id": "7e1c3ccc75f0",
		"ts": "2026-08-08T11:24:04.362Z",
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
		"liquidityUsd": 27365103.2,
		"hash": "7e1c3ccc75f06e9e4ba4eaf7311df69fdecd8814b1d7f87f00316cc6c5e48e78"
	},
	{
		"id": "0a1befca3829",
		"ts": "2026-08-08T11:24:04.693Z",
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
		"liquidityUsd": 4432679.06,
		"hash": "0a1befca38296bac41995269ad3493a31116488ceed9d67be432b2d608c8de81"
	},
	{
		"id": "41cee9f56489",
		"ts": "2026-08-08T11:24:04.909Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 927249.71,
		"hash": "41cee9f5648968c92c87be3564b57645ed80651f58d6823458a422b1adc0abc8"
	},
	{
		"id": "c27f1047da20",
		"ts": "2026-08-08T11:24:05.127Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27365103.47,
		"hash": "c27f1047da20be93f02e15ed01117a616ba93fd6d87fa8e8c2798209028a5f0a"
	},
	{
		"id": "a3da667ec387",
		"ts": "2026-08-08T11:24:05.321Z",
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
		"liquidityUsd": 4878559.28,
		"hash": "a3da667ec387e0e09d2ecfb43d19468f2f66eb4881bd6d78f2d6dddabed1ef59"
	},
	{
		"id": "2a8213ac8f5d",
		"ts": "2026-08-08T11:24:05.516Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 984224.97,
		"hash": "2a8213ac8f5d9063573f941864fe48c9f452e22395397e38ebf2fd7093651d28"
	},
	{
		"id": "6e4455d48494",
		"ts": "2026-08-08T11:24:05.862Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 527622.06,
		"hash": "6e4455d4849498f0e496bcd36ae52bdd94353bb6f445819fc0ec2aec837dc5cf"
	},
	{
		"id": "7e9a5570e187",
		"ts": "2026-08-08T11:24:06.054Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 347551.46,
		"hash": "7e9a5570e1872e8a15c2fceed1f0081c3e4d97dbf4b93da983b2cb1f62d41e5d"
	},
	{
		"id": "e1f955d1b04b",
		"ts": "2026-08-08T11:24:06.334Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4067200.91,
		"hash": "e1f955d1b04b2ec92c0701e58c8754610000930e973c5de647e233152fa9d064"
	},
	{
		"id": "cfafb14bbd91",
		"ts": "2026-08-08T11:24:06.526Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2143338.92,
		"hash": "cfafb14bbd9130dc9c1d6e7e9451232fb8ff9d7a3ca5feaa4f93f32e169c70a1"
	},
	{
		"id": "dfc62e31b6c5",
		"ts": "2026-08-08T11:24:06.847Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1801275.45,
		"hash": "dfc62e31b6c5e9537a7979bac1d07d508cf3b88f6324bd2d2f424a515b2768e5"
	},
	{
		"id": "c5a12090c199",
		"ts": "2026-08-08T11:24:07.040Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9304720.35,
		"hash": "c5a12090c199ad75be40a079238454280062f3cb06bc354bf200b2ae1e6c0297"
	},
	{
		"id": "f1cd449b0ca1",
		"ts": "2026-08-08T11:24:07.258Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 677069.44,
		"hash": "f1cd449b0ca1ce439f245da2c01207cbeb79a6c56a6474f7a601f52cab8b8303"
	},
	{
		"id": "25cc68b4b918",
		"ts": "2026-08-08T11:24:07.451Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 546663.52,
		"hash": "25cc68b4b9180f65cf0c7ec050df96445aad6e9eb9a937e2baf0ac760795d637"
	},
	{
		"id": "ebc89b22af82",
		"ts": "2026-08-08T10:27:26.854Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115535064.5,
		"hash": "ebc89b22af82ab96e11ef7cd70b71b91355e28e994afa90bce83fb854f7cd1cf"
	},
	{
		"id": "0e447acbb416",
		"ts": "2026-08-08T10:27:27.320Z",
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
		"liquidityUsd": 16344535.81,
		"hash": "0e447acbb416d23045a89058c954f5fd28b94086795764ef564e25e720c5eec2"
	},
	{
		"id": "f2a88de8f6ec",
		"ts": "2026-08-08T10:27:27.812Z",
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
		"liquidityUsd": 1049474.14,
		"hash": "f2a88de8f6ec98d66915afc55c26fcafde68accb82a2fba4a4a752fcef560faa"
	},
	{
		"id": "9ee9e3714cff",
		"ts": "2026-08-08T10:27:28.257Z",
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
		"liquidityUsd": 27365871.45,
		"hash": "9ee9e3714cfff767ecd7633e557dac51d1c2c33fe5452e184c4d443e10c44787"
	},
	{
		"id": "94697f25f3dd",
		"ts": "2026-08-08T10:27:28.493Z",
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
		"liquidityUsd": 4430490.52,
		"hash": "94697f25f3dde3d0052e031576b4804c824d89673890c28f6a688d1bbda0f6f8"
	},
	{
		"id": "4c409c6bb0ca",
		"ts": "2026-08-08T10:27:28.771Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 927249.71,
		"hash": "4c409c6bb0ca1025a298926a24fc36778dc1103dc7e0f99a959ae2792369a7e5"
	},
	{
		"id": "02adcd37e71c",
		"ts": "2026-08-08T10:27:29.002Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27365871.45,
		"hash": "02adcd37e71cda6f697433d77dbc2b988efd847889894a2d16a366b7f7df49e1"
	},
	{
		"id": "8c5b68296075",
		"ts": "2026-08-08T10:27:29.243Z",
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
		"liquidityUsd": 4879626.24,
		"hash": "8c5b682960754ae1f48ad4c81612b38aba4d36d145893e25e58e4a86534d1ebe"
	},
	{
		"id": "483c38df3746",
		"ts": "2026-08-08T10:27:29.486Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 987489.78,
		"hash": "483c38df37462d9ee3908a06b662629f5425356d7b6ef1cc0be5411f964b50aa"
	},
	{
		"id": "49a5da6d6cc6",
		"ts": "2026-08-08T10:27:29.759Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 541720.36,
		"hash": "49a5da6d6cc6057cd053e88d9b5d96f9fe63458524b3d0f7982fcdd19ab57d26"
	},
	{
		"id": "49d6bfa17b91",
		"ts": "2026-08-08T10:27:29.975Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 348869.55,
		"hash": "49d6bfa17b910bf71a2bdc6308b5e9dee646ba4cce7ab785d278a62b5e19dbee"
	},
	{
		"id": "c6f8f614ff63",
		"ts": "2026-08-08T10:27:30.193Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4060384.28,
		"hash": "c6f8f614ff6307e7bf71430f1d12ddd9a5c2387c6479f6bc68dd624942532d55"
	},
	{
		"id": "f77d737e14f5",
		"ts": "2026-08-08T10:27:30.423Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2144403.22,
		"hash": "f77d737e14f58c2ba6368938440a8642d2be1db3392f6f7912ab8337b3b8a0be"
	},
	{
		"id": "1b17148206a8",
		"ts": "2026-08-08T10:27:30.650Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1799184.12,
		"hash": "1b17148206a80ae0f873aca3032dad0083cce2c97bd145bc8b318a39e9e6f001"
	},
	{
		"id": "d5b7f8d4d72b",
		"ts": "2026-08-08T10:27:30.865Z",
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
		"liquidityUsd": 9293392.23,
		"hash": "d5b7f8d4d72b5f21f7851fd5e28dd3687c662227a0c1bb047e9efb3d5e40bffc"
	},
	{
		"id": "9732d2ab4227",
		"ts": "2026-08-08T10:27:31.084Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 676247.14,
		"hash": "9732d2ab4227409b9f06fe7bb0413ac5670ea257933fbc6ceae533bf42dc069f"
	},
	{
		"id": "252cd34ea565",
		"ts": "2026-08-08T10:27:31.313Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 540419.32,
		"hash": "252cd34ea5655ff100122ff378d8bce1bc15d8b818f97d64c47bc817d1aefea8"
	},
	{
		"id": "b1401b0fdb76",
		"ts": "2026-08-08T09:33:28.027Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115531806.5,
		"hash": "b1401b0fdb76d098f0204ad065a9f836f3d5047e26ea2d6bae31916a76cb6d45"
	},
	{
		"id": "4bf15c10300d",
		"ts": "2026-08-08T09:33:28.447Z",
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
		"liquidityUsd": 17590878.18,
		"hash": "4bf15c10300daa8e09838a4759eca9dfce06a6a7e2862950d6a7d27d2d433ca4"
	},
	{
		"id": "84cb119a0082",
		"ts": "2026-08-08T09:33:28.679Z",
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
		"liquidityUsd": 1048216.29,
		"hash": "84cb119a0082b6dbc3ed04cbe1e1d2c46f74b1fcf47d7c84d238b13219b4c224"
	},
	{
		"id": "8248faaffc36",
		"ts": "2026-08-08T09:33:28.908Z",
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
		"liquidityUsd": 27370565.36,
		"hash": "8248faaffc366eb49167e5ba488b3eeec6416d393c5165dcac60a91d01d174d8"
	},
	{
		"id": "3828815913f8",
		"ts": "2026-08-08T09:33:29.148Z",
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
		"liquidityUsd": 4435293.77,
		"hash": "3828815913f8091a901edb3daeafbf8984e85a666a51eb94afc8e00d6e0bc97a"
	},
	{
		"id": "fb44dffdf1f0",
		"ts": "2026-08-08T09:33:29.368Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 927249.71,
		"hash": "fb44dffdf1f0868dd9dbfef802673700a7edbc5604740315ae405a0497557285"
	},
	{
		"id": "29fff59d92a4",
		"ts": "2026-08-08T09:33:29.594Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27370565.36,
		"hash": "29fff59d92a49cec589d74ee184c2273499ba4c516e3c414a524d65bd3f5806e"
	},
	{
		"id": "c32f3f7ffb7f",
		"ts": "2026-08-08T09:33:29.823Z",
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
		"liquidityUsd": 4871200.78,
		"hash": "c32f3f7ffb7f0ceed9b0bc02c6d033644351c7d0f14e84d8f9912a4660c1eeeb"
	},
	{
		"id": "660209c835d3",
		"ts": "2026-08-08T09:33:30.058Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 8,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.84,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 992618.46,
		"hash": "660209c835d3fc05afe8227ee7ea51da9f9591c689d37c9087697d25296b2874"
	},
	{
		"id": "1a6d221cdb1e",
		"ts": "2026-08-08T09:33:30.279Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 600896.27,
		"hash": "1a6d221cdb1e86096d6a95debea755f934d9e3c7d786f1b8e41d6605ca1278d2"
	},
	{
		"id": "2f923dd0bdf1",
		"ts": "2026-08-08T09:33:30.493Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1796888.1,
		"hash": "2f923dd0bdf1d35a1ad7df3a7682e457400e42ef036352123594a320c7cdd17b"
	},
	{
		"id": "f3c29818e20b",
		"ts": "2026-08-08T09:33:30.708Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4043071.54,
		"hash": "f3c29818e20babd4b0dda5d2fcb6137277f5e254e66dcaafd5c04ba90c97ffa8"
	},
	{
		"id": "8481a5046975",
		"ts": "2026-08-08T09:33:30.925Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2145737.63,
		"hash": "8481a5046975125ea15ccb099750936e0c7956476be043e2845e20c9c164e91c"
	},
	{
		"id": "20f7a9ef1ec4",
		"ts": "2026-08-08T09:33:31.133Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9288569.49,
		"hash": "20f7a9ef1ec4a623fae5b59505ddd14b3ab5f98581b4e25a57f6eaa9ba0381ad"
	},
	{
		"id": "1529afa39099",
		"ts": "2026-08-08T09:33:31.349Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 672289.24,
		"hash": "1529afa3909942e9daf6522d4a227504858944639b4713bb6184d2a4bddbb9aa"
	},
	{
		"id": "597fecbaa805",
		"ts": "2026-08-08T08:35:38.501Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115497022.05,
		"hash": "597fecbaa805c4530439b7b365b667264e0ef6b3a63dda5d012f9a156e12bd96"
	},
	{
		"id": "2285204a075b",
		"ts": "2026-08-08T08:35:38.717Z",
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
		"liquidityUsd": 16616171.18,
		"hash": "2285204a075be40cc84d61d8074997c4bfba14260c87215303c7238aad4b3a6f"
	},
	{
		"id": "5ebc232cb65d",
		"ts": "2026-08-08T08:35:38.925Z",
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
		"liquidityUsd": 1048216.29,
		"hash": "5ebc232cb65dab36e9b03ef36bcce50edfe63a60a8654c15e5cadf0d3f569d9d"
	},
	{
		"id": "5334f1e2d981",
		"ts": "2026-08-08T08:35:39.128Z",
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
		"liquidityUsd": 27370770.91,
		"hash": "5334f1e2d9817404cb59d46bc5bb32d0deba31aa1510f9ccc96c15bf9f9f1e4e"
	},
	{
		"id": "e21f64d632b8",
		"ts": "2026-08-08T08:35:39.324Z",
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
		"liquidityUsd": 4416896.84,
		"hash": "e21f64d632b8156f2d520a3215a11b6eccc61c3510a3db199eb2071c441b97c1"
	},
	{
		"id": "fdf75fcd9278",
		"ts": "2026-08-08T08:35:39.519Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 927249.71,
		"hash": "fdf75fcd9278b8148115a407941b0928396548f357c77c42197e2a2febfde0f5"
	},
	{
		"id": "fabc7d599c15",
		"ts": "2026-08-08T08:35:39.753Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27370770.91,
		"hash": "fabc7d599c15e483b7d53946c6ae2eea795dd24d6eec6b1291d1fa27ca95fe19"
	},
	{
		"id": "180185ef2ea4",
		"ts": "2026-08-08T08:35:39.955Z",
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
		"liquidityUsd": 4861888.39,
		"hash": "180185ef2ea4446dbeb70083efd13e0fc367b69a8ed5ac3b6abb503339a2ebb4"
	},
	{
		"id": "fdba4152892c",
		"ts": "2026-08-08T08:35:40.152Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 984125.8,
		"hash": "fdba4152892c2c789301d112b81d0a1a21fcc1beb603155126b03214ebfbf073"
	},
	{
		"id": "2ee501f4b0cc",
		"ts": "2026-08-08T08:35:40.366Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 504340.17,
		"hash": "2ee501f4b0ccce516b08fa5d55dcf8db0daf62e34c7ad0d469f7ec5d2ea4cd2f"
	},
	{
		"id": "01f097594caa",
		"ts": "2026-08-08T08:35:40.561Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1795436.85,
		"hash": "01f097594caad8aa3e5eb437c39a4a49bc9bb60c3e0028dc2878d7bf4f1672d2"
	},
	{
		"id": "262d4a01d9c9",
		"ts": "2026-08-08T08:35:40.751Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4051801.06,
		"hash": "262d4a01d9c91bf05ef6e11ae3ae7074d7564f88e46d3048737500765b479288"
	},
	{
		"id": "beeba939c0c5",
		"ts": "2026-08-08T08:35:40.935Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2139334.5,
		"hash": "beeba939c0c55e1ae976014ee1242862ec62267f5fe420779e37c759938ded39"
	},
	{
		"id": "dfb33a7eccd7",
		"ts": "2026-08-08T08:35:41.126Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 675850.75,
		"hash": "dfb33a7eccd7df3c33bd02bca69a4f6ffabc991101cf36b82145e8754c5d375c"
	},
	{
		"id": "4adcc6bb490e",
		"ts": "2026-08-08T08:35:41.317Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9283893.07,
		"hash": "4adcc6bb490e6f2578011e0f1f661f553b31379de362926b891a24e63aacc623"
	},
	{
		"id": "22157e0492bc",
		"ts": "2026-08-08T07:44:58.588Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115501684.32,
		"hash": "22157e0492bca2695050808cda372f99435fd209373ebe6f7092eb84ae1edc11"
	},
	{
		"id": "d22f1dff08b0",
		"ts": "2026-08-08T07:44:59.011Z",
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
		"liquidityUsd": 16596039.7,
		"hash": "d22f1dff08b00dcabb750c0cbe79f120c71b62b07e96e5ed146d82b484526026"
	},
	{
		"id": "4284cf64df4e",
		"ts": "2026-08-08T07:44:59.509Z",
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
		"liquidityUsd": 1048216.29,
		"hash": "4284cf64df4e782be87a5b99f089f9f44dd6c65bf42dbe8330e0379fb6e23dcb"
	},
	{
		"id": "49ecf371417c",
		"ts": "2026-08-08T07:44:59.771Z",
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
		"liquidityUsd": 27388429.42,
		"hash": "49ecf371417ca389aaab8033c1b3098529a689b1f44fa734f1426dd706464580"
	},
	{
		"id": "2b21885d2447",
		"ts": "2026-08-08T07:45:00.003Z",
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
		"liquidityUsd": 4405414,
		"hash": "2b21885d2447a21bf33e8fdea674d284237269701989373dd968b8ae8c2f2c54"
	},
	{
		"id": "13fa91b62928",
		"ts": "2026-08-08T07:45:00.235Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 927249.71,
		"hash": "13fa91b62928faf862bfc3b07ce8564ea3fac0cf723f89e06ede58f980fdfaba"
	},
	{
		"id": "df022902a25f",
		"ts": "2026-08-08T07:45:00.450Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27388429.42,
		"hash": "df022902a25fc4cf0248b57d62d9d55a86b67d3d02091840299d392d5eb4267c"
	},
	{
		"id": "0c7de29cdf80",
		"ts": "2026-08-08T07:45:00.671Z",
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
		"liquidityUsd": 4804403.59,
		"hash": "0c7de29cdf801ed0e27921e2f41de7ee48f01e33e60891d3391fa8a78ff3c5dc"
	},
	{
		"id": "5c931c619f84",
		"ts": "2026-08-08T07:45:00.894Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 982889.52,
		"hash": "5c931c619f84408ee7dfebba94b4c3c8d8548ed15339b54d266c9a757b369eed"
	},
	{
		"id": "b347177ac81e",
		"ts": "2026-08-08T07:45:01.245Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 511114.21,
		"hash": "b347177ac81e8dbc0decd51a82f432911afc236782be30f4bc46e24354668888"
	},
	{
		"id": "2698eca33641",
		"ts": "2026-08-08T07:45:01.476Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1796170.52,
		"hash": "2698eca3364112fa1ac503a46e723800a28b208dd54c007267fb2b5fe1dbb931"
	},
	{
		"id": "15eac27334fe",
		"ts": "2026-08-08T07:45:01.697Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4047880.06,
		"hash": "15eac27334fe01ea6123671cff76308ced937f20e4bed4f4f4ef81a6c45254e0"
	},
	{
		"id": "7e628ddbe73f",
		"ts": "2026-08-08T07:45:02.082Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2139089.12,
		"hash": "7e628ddbe73f0333c0f3bc000a6119bae072c76b177c37e27bb8eb16907dc05a"
	},
	{
		"id": "ac940d543e5b",
		"ts": "2026-08-08T07:45:02.347Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 677961.27,
		"hash": "ac940d543e5b6ea6be387ee8e70d3906c158d7c9a067d96ff88e3552551f6dec"
	},
	{
		"id": "e04fe090428d",
		"ts": "2026-08-08T07:45:02.599Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1210502.45,
		"hash": "e04fe090428d9536a631770cd64c3ad0aad24e39a343539a15f7494ec9610aae"
	},
	{
		"id": "9fa7fa6668ca",
		"ts": "2026-08-08T07:45:02.803Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9273152.36,
		"hash": "9fa7fa6668caa03e584455af56fb509ceb33e0946ffbf5ccf25ee2f483f0e1f9"
	},
	{
		"id": "072359835843",
		"ts": "2026-08-08T06:44:03.718Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115439764.05,
		"hash": "0723598358439be724d00f7497c06b016ad59d2dcf28c19448e4c557f19c0306"
	},
	{
		"id": "95c692c08ab8",
		"ts": "2026-08-08T06:44:04.165Z",
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
		"liquidityUsd": 16921285.37,
		"hash": "95c692c08ab8e73ada89f033f0577b2fbbae2283be0b776c599154c3e211608e"
	},
	{
		"id": "2cf33f601f32",
		"ts": "2026-08-08T06:44:04.431Z",
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
		"liquidityUsd": 1048216.29,
		"hash": "2cf33f601f32593c9dbdb143ffc63224ce4063e527440a7c9763af31f73ac0f8"
	},
	{
		"id": "345fe8ce75fe",
		"ts": "2026-08-08T06:44:04.855Z",
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
		"liquidityUsd": 27429880.98,
		"hash": "345fe8ce75fe392152281611aad33a44c6361dadbcd092cc8419ffe49df6d466"
	},
	{
		"id": "16616df18e9a",
		"ts": "2026-08-08T06:44:05.094Z",
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
		"liquidityUsd": 4405414,
		"hash": "16616df18e9a565b8d3ff466c63cced90d9ad3f7f640877ccd294c541ff51be5"
	}
]
