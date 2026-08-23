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
	"updatedAt": "2026-08-23T15:18:21.021Z",
	"tokensScored": 13978,
	"verdictsIssued": 13978,
	"safe": 12034,
	"risky": 982,
	"likelyRug": 962,
	"ticks": 813
}

export const verdicts: AgentVerdict[] = [
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
	},
	{
		"id": "5c3dc6aa5c6b",
		"ts": "2026-08-23T11:17:08.049Z",
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
		"liquidityUsd": 3338748.35,
		"hash": "5c3dc6aa5c6b0db0e05077f8106437a88667e64ca36e6588d93dfcab2d6b9119"
	},
	{
		"id": "779b064922fd",
		"ts": "2026-08-23T11:17:08.310Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1162330.82,
		"hash": "779b064922fd7484d85f2dc1fa6ad1867f5d15971274febf047008af49d59ec0"
	},
	{
		"id": "1f1db28263b1",
		"ts": "2026-08-23T11:17:08.537Z",
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
		"liquidityUsd": 374798.45,
		"hash": "1f1db28263b1dae34a0b7ac18d21c819e71c459f0e91bbd480e0af3b305d079d"
	},
	{
		"id": "fb69ccc9e1e6",
		"ts": "2026-08-23T11:17:08.746Z",
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
		"liquidityUsd": 3382992.84,
		"hash": "fb69ccc9e1e6c75aab4108f9b7698aa2127120c449bb4a774d6399a5c529434b"
	},
	{
		"id": "9e4259de9257",
		"ts": "2026-08-23T11:17:08.951Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1263589.86,
		"hash": "9e4259de92579c166f1d7f2bb01a93b64f71827961ee6a970c770b60b8a3ccdd"
	},
	{
		"id": "b1f6ff20e848",
		"ts": "2026-08-23T11:17:09.449Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 793530.33,
		"hash": "b1f6ff20e84888db4dba15dd9e9c0a3c495022592d46c4862f742e47b85c8a5d"
	},
	{
		"id": "873a9a3ca01e",
		"ts": "2026-08-23T11:17:09.656Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 547538.12,
		"hash": "873a9a3ca01eecc6149e4841285079977ce6d33bacd5928b188b222bdc54b552"
	},
	{
		"id": "7dd887554da2",
		"ts": "2026-08-23T11:17:09.874Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 701031.17,
		"hash": "7dd887554da24ee52c159a7be35abc8f844bb14a768696326a26f5fd7b937889"
	},
	{
		"id": "27533d0bc72f",
		"ts": "2026-08-23T11:17:10.093Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11018315.18,
		"hash": "27533d0bc72fd20f48ca860391fd95d6f07bfc456f70b5e1dd9b6c049c64ab0a"
	},
	{
		"id": "805f7bf16ed5",
		"ts": "2026-08-23T11:17:10.364Z",
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
		"liquidityUsd": 132446.63,
		"hash": "805f7bf16ed561b33cb317a3f7a0c1b413256a59c208c786db510b90bfa3f1c8"
	},
	{
		"id": "7111527f1900",
		"ts": "2026-08-23T11:17:10.593Z",
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
		"liquidityUsd": 593224.35,
		"hash": "7111527f19001ba901b633d8ae46211150a2ecc775e82246c8d63ad80cfebc5f"
	},
	{
		"id": "e0ed0c69baad",
		"ts": "2026-08-23T11:17:10.817Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 851556.15,
		"hash": "e0ed0c69baad5cd838354f98bcecea34f66391cfa1366f0593c245364056bf44"
	},
	{
		"id": "5886c4bf2dd3",
		"ts": "2026-08-23T11:17:11.030Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3253553.71,
		"hash": "5886c4bf2dd35f675a9214c42a24810dc7a7c783df4cc7aa618f15201f52b6d6"
	},
	{
		"id": "f75fd52fca27",
		"ts": "2026-08-23T11:17:11.233Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4186425.9,
		"hash": "f75fd52fca277aeff4992cd5642bce819eace2406d0a372ca6ff7b9848ccb68d"
	},
	{
		"id": "28afb97c57f8",
		"ts": "2026-08-23T11:17:11.468Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1793161.42,
		"hash": "28afb97c57f859bec67913c8e5b426627edd588315917a96440f96909b92e5aa"
	},
	{
		"id": "d84ece767261",
		"ts": "2026-08-23T10:19:27.371Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109957317.88,
		"hash": "d84ece7672610804267cc101bb548682c6d007ce53cb967dbe53effc2fee0f21"
	},
	{
		"id": "4a5b00f6c2bc",
		"ts": "2026-08-23T10:19:27.816Z",
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
		"liquidityUsd": 17260505.62,
		"hash": "4a5b00f6c2bc479c3f46e65cc841e6eb1de9f635ab5f54caf70a9846aaa5a7f8"
	},
	{
		"id": "143fe85e6518",
		"ts": "2026-08-23T10:19:28.060Z",
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
		"liquidityUsd": 874354.7,
		"hash": "143fe85e6518a52f1ebbd916e278d7bbd96d27448e1bb7468fa72b44a737017a"
	},
	{
		"id": "ddd03c88c5ea",
		"ts": "2026-08-23T10:19:28.304Z",
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
		"liquidityUsd": 27780209.01,
		"hash": "ddd03c88c5eabd4577494b7d2363f830e7dae01be92c98c16b70ffbda7d192dc"
	},
	{
		"id": "9b2b91c893d2",
		"ts": "2026-08-23T10:19:28.543Z",
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
		"liquidityUsd": 3322218.92,
		"hash": "9b2b91c893d2f69d494b9362aa1d26ce92c2afa4e726868ab31449d7a9169657"
	},
	{
		"id": "bf459b3ab873",
		"ts": "2026-08-23T10:19:28.785Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1157853.29,
		"hash": "bf459b3ab873c3ec4e16e37b4e3be2e634372af099bbe6c39ff1b5e74d71bae2"
	},
	{
		"id": "c1939a44ceaf",
		"ts": "2026-08-23T10:19:29.024Z",
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
		"liquidityUsd": 378319.72,
		"hash": "c1939a44ceaf76d0b4a5bec432aa81bfdfb5ef02ff4c2c5318beda3add123f57"
	},
	{
		"id": "0c34919b610f",
		"ts": "2026-08-23T10:19:29.280Z",
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
		"liquidityUsd": 3378613.88,
		"hash": "0c34919b610f65780dd72131c15ad622e2c6e05202048f951296ff195583a682"
	},
	{
		"id": "c5e6883ef12e",
		"ts": "2026-08-23T10:19:29.544Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1266228.12,
		"hash": "c5e6883ef12e739dc8918a319196124d3754ab42ff0a901f70cc61ab6b4380a9"
	},
	{
		"id": "8bfe08c1d40c",
		"ts": "2026-08-23T10:19:29.863Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 787703.24,
		"hash": "8bfe08c1d40cf87fcef0701ca6dd45bea0feb699af8b18b69dcc7ee5232c9622"
	},
	{
		"id": "a2a249bfb7ba",
		"ts": "2026-08-23T10:19:30.087Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 511412.29,
		"hash": "a2a249bfb7bae357cc9b5222baaeb79b71a7236d032ba5778c8644d8e8a0ad9a"
	},
	{
		"id": "64b5bfae2d51",
		"ts": "2026-08-23T10:19:30.311Z",
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
		"liquidityUsd": 10982515.08,
		"hash": "64b5bfae2d513de0e896261654619482f0b25b748745e40076996b1161ad3a68"
	},
	{
		"id": "6b24ea47ef97",
		"ts": "2026-08-23T10:19:30.539Z",
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
		"liquidityUsd": 700756.53,
		"hash": "6b24ea47ef97c4a0018fbca2887eaea303e1214e3d9575aab0456eb0d084e09a"
	},
	{
		"id": "4eab970989f3",
		"ts": "2026-08-23T10:19:30.764Z",
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
		"liquidityUsd": 134205.96,
		"hash": "4eab970989f39d88f7e008a1f955308a7b3d7a1d131730bd843785c893564569"
	},
	{
		"id": "fb8b2d8e9c4a",
		"ts": "2026-08-23T10:19:30.987Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 863483.7,
		"hash": "fb8b2d8e9c4a869e3a0a93f248ffe266a828454054346e768bcb89cd0dd8774c"
	},
	{
		"id": "1fe0e7f2421c",
		"ts": "2026-08-23T10:19:31.211Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 618082.77,
		"hash": "1fe0e7f2421c32c12415e0bfda0b7b10e8d44757d0fe87f0ccc3d5a7bd82a371"
	},
	{
		"id": "b56791c4d03a",
		"ts": "2026-08-23T10:19:31.434Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3226624.37,
		"hash": "b56791c4d03a14ffc065d2788d6de07df59824630515930fd7dc0dc47062045f"
	},
	{
		"id": "07176804695f",
		"ts": "2026-08-23T10:19:31.659Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1793464.12,
		"hash": "07176804695f0b75be3e998e6c12175c5dc59475285e1a1df63126a8c60f5623"
	},
	{
		"id": "ba10eb718ed7",
		"ts": "2026-08-23T10:19:31.882Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4096065.58,
		"hash": "ba10eb718ed7944d480c06cdd71142353cd6a7f7a41043c4b83b008a25ee20d5"
	},
	{
		"id": "20c9a2f2a9df",
		"ts": "2026-08-23T09:23:10.216Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109874694.43,
		"hash": "20c9a2f2a9dfe1258547aef131b0cc013577ef51ea66652626fe98c76cbe2f24"
	},
	{
		"id": "1de425e84ceb",
		"ts": "2026-08-23T09:23:10.615Z",
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
		"liquidityUsd": 13211162.93,
		"hash": "1de425e84cebadb542df53de701783f75c57328e3e56d58aa334058fa08e1118"
	},
	{
		"id": "a355a9e4144f",
		"ts": "2026-08-23T09:23:10.802Z",
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
		"liquidityUsd": 865667.07,
		"hash": "a355a9e4144fab1bf2634183542f43d5c8125f90296737c9acc18e874c5c3001"
	},
	{
		"id": "b2cb00ea4f9b",
		"ts": "2026-08-23T09:23:11.012Z",
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
		"liquidityUsd": 27739085.86,
		"hash": "b2cb00ea4f9b0f5d9299d58f08f414a57d919faf4911449874acf808a3fad14f"
	},
	{
		"id": "29937442c8e7",
		"ts": "2026-08-23T09:23:11.209Z",
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
		"liquidityUsd": 3319639.13,
		"hash": "29937442c8e7c6c8785ef46265796738da2fe1762f4a5381cdc93e1a9518a710"
	},
	{
		"id": "6fb7d850409e",
		"ts": "2026-08-23T09:23:11.394Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1156595.29,
		"hash": "6fb7d850409e5e6c33cefdeecd29dd4583514c252c41f4f89b3fe718e80d0a0e"
	},
	{
		"id": "1fbb0d1dc947",
		"ts": "2026-08-23T09:23:11.609Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 938333.5,
		"hash": "1fbb0d1dc9477ccff83193c28a885d52e74d1f85b1b9f97279a5dd6366fc31cc"
	},
	{
		"id": "4b7cdb7e7054",
		"ts": "2026-08-23T09:23:11.874Z",
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
		"liquidityUsd": 3370541.56,
		"hash": "4b7cdb7e7054294378972d4142f8fc8d91d1dceefcd392425f4376e857773a0e"
	},
	{
		"id": "ad44c13b11fc",
		"ts": "2026-08-23T09:23:12.067Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1354843.17,
		"hash": "ad44c13b11fc2b1a7593a9871dfe27827d74e061733f63e942c6955ea6499040"
	},
	{
		"id": "99a1e168da9b",
		"ts": "2026-08-23T09:23:12.396Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 798158.95,
		"hash": "99a1e168da9b7096f91cadbeb2119c01e15d6a8cc6bd4a3a538ce368f4847e33"
	},
	{
		"id": "315bbccfb341",
		"ts": "2026-08-23T09:23:12.573Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 510770.6,
		"hash": "315bbccfb341c4f90376da74bffbcff4edb86f65a71803e1cb585de83c1fc5b3"
	},
	{
		"id": "f6a2a6d4906e",
		"ts": "2026-08-23T09:23:12.764Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 699161.39,
		"hash": "f6a2a6d4906e15a5b61c4bc0c862f6e3742451c7d25708e4c771fd7bc72804d9"
	},
	{
		"id": "5ab1a2017260",
		"ts": "2026-08-23T09:23:12.957Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10986780.53,
		"hash": "5ab1a20172604799c7a99a0bacd423fe17a23cebee890cc5d5146c9855b7dbeb"
	},
	{
		"id": "262af8a8953d",
		"ts": "2026-08-23T09:23:13.136Z",
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
		"liquidityUsd": 126776.17,
		"hash": "262af8a8953dc6de7b67a1569ba55404dec2be0c939972361f1c13b0ff2734a8"
	},
	{
		"id": "ac912c1f7562",
		"ts": "2026-08-23T09:23:13.355Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 852125.67,
		"hash": "ac912c1f75620d46a3a92f7e3bbcc7ee7f4223704d42fb8123cc6218f1c51aa9"
	},
	{
		"id": "eb29ba6e185e",
		"ts": "2026-08-23T09:23:13.532Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 613446.37,
		"hash": "eb29ba6e185e4529c840b9663aae49e5978cb7104694bafe054ff86e00cfca7d"
	},
	{
		"id": "2ec0ed678bf3",
		"ts": "2026-08-23T09:23:13.751Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3227677.06,
		"hash": "2ec0ed678bf303266bb9533f00bd1159d658a4105f1630335c6d375f04490f06"
	},
	{
		"id": "633e49d89195",
		"ts": "2026-08-23T09:23:13.926Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1790963.6,
		"hash": "633e49d89195ced99c8ddaef98dd720da3d7c1150665f40d11bfa125864f7e85"
	},
	{
		"id": "3307ccc73bbc",
		"ts": "2026-08-23T09:23:14.117Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3985360.91,
		"hash": "3307ccc73bbc6e86bdf2b43f7df1a434bb6d47f85f14953c6aee579f9392bb34"
	},
	{
		"id": "5c4d21b76399",
		"ts": "2026-08-23T08:24:23.689Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109798316.87,
		"hash": "5c4d21b763996b358b55a536c264c5c60aba517eb5f6ef3c4d4ea4f154a2916e"
	},
	{
		"id": "616f0d0ceccb",
		"ts": "2026-08-23T08:24:23.938Z",
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
		"liquidityUsd": 17653145.15,
		"hash": "616f0d0ceccbb6cc7cd1d5bae768788ec6dec012b073d2dc961704be06fdfa5b"
	},
	{
		"id": "eeb2ad26a292",
		"ts": "2026-08-23T08:24:24.154Z",
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
		"liquidityUsd": 865667.07,
		"hash": "eeb2ad26a292c9bbb360e2500737fff99cf07b4db8f9b4139261552ec3bfed10"
	},
	{
		"id": "064fc3a356d0",
		"ts": "2026-08-23T08:24:24.380Z",
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
		"liquidityUsd": 27652466.41,
		"hash": "064fc3a356d0e51237c51a7ce4a720635528f71a9134eb152a44a2e1bed34bef"
	},
	{
		"id": "21b88b3dcc5b",
		"ts": "2026-08-23T08:24:24.587Z",
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
		"liquidityUsd": 3300551.25,
		"hash": "21b88b3dcc5b65339cd877b01d48869347eb6e38201acdae04731d8616441ab6"
	},
	{
		"id": "58300ec4718b",
		"ts": "2026-08-23T08:24:24.828Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1147134.57,
		"hash": "58300ec4718bbcf562337b19d84db4c2398b97171f39cd0f7b98a3dc867175ac"
	},
	{
		"id": "9559205773fa",
		"ts": "2026-08-23T08:24:25.037Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1700734.96,
		"hash": "9559205773fae48b2322feb557afa1b6b7ef28a0babbf4d35f85136d2c391209"
	},
	{
		"id": "ef9bd0dc95d8",
		"ts": "2026-08-23T08:24:25.253Z",
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
		"liquidityUsd": 3365880.61,
		"hash": "ef9bd0dc95d858a390c03acd3ae7b1f610455c912f188cd926ad36b47b9a34d1"
	},
	{
		"id": "bb3914967f3d",
		"ts": "2026-08-23T08:24:25.457Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1338762.04,
		"hash": "bb3914967f3dc5d85d5f10f895a4d9bc96eaa1b8c63292cfa29cb070ad3a2a61"
	},
	{
		"id": "a252dcd2540d",
		"ts": "2026-08-23T08:24:25.668Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 804984.7,
		"hash": "a252dcd2540d257f81cd7310fbd8fae03cdff1f3cea4b2f8a82dbc64874215a5"
	},
	{
		"id": "32d4063db3fb",
		"ts": "2026-08-23T08:24:25.872Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 497928.83,
		"hash": "32d4063db3fb45ba36af4c675c579cf6a278a90f68097f27642d2b317eb6ea16"
	},
	{
		"id": "3dba4d90d7b8",
		"ts": "2026-08-23T08:24:26.135Z",
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
		"liquidityUsd": 131194.27,
		"hash": "3dba4d90d7b81158187c4a8516230ca4a186ce2c6feeeac9c6195ceb979daafd"
	},
	{
		"id": "5a418885f68d",
		"ts": "2026-08-23T08:24:26.329Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 692984.04,
		"hash": "5a418885f68d3d0eaf656fca6c74dc2c1971853a4723d72f82167ce2cc91beb6"
	},
	{
		"id": "529f6280d99c",
		"ts": "2026-08-23T08:24:26.566Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10967283.15,
		"hash": "529f6280d99c62985adc73b981d67e62381afcc89cdb77b8a0909a654d78a9ec"
	},
	{
		"id": "3986d23eea98",
		"ts": "2026-08-23T08:24:26.778Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 612003.37,
		"hash": "3986d23eea98482c1073006182a0ae5d545fb0eea506a8ffc67752353d3b3984"
	},
	{
		"id": "d345924395e9",
		"ts": "2026-08-23T08:24:26.987Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 864909.4,
		"hash": "d345924395e950a3d28e77ca30eae01cef751155bf52c960a4db83790fc374e2"
	},
	{
		"id": "c38a901c5ab9",
		"ts": "2026-08-23T08:24:27.195Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3191852.71,
		"hash": "c38a901c5ab9b7aefe3ef1c8043832e3409b86d34fbcde2e024db5d74c0fcd07"
	},
	{
		"id": "822346ebe328",
		"ts": "2026-08-23T08:24:27.404Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1783361.38,
		"hash": "822346ebe32876481fd292aaa0f9eaf064345383a95dea204a07a60b2cbd7645"
	},
	{
		"id": "98881f259f62",
		"ts": "2026-08-23T08:24:27.602Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3958706.27,
		"hash": "98881f259f62bd8d3ce9db65bac5c994d4804bc0625ed7c08a77e84ae08f26ac"
	},
	{
		"id": "50cecc3484f3",
		"ts": "2026-08-23T07:29:50.333Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109786592.58,
		"hash": "50cecc3484f34fa52ae52ee2da38cd235abe128c5e156023162f9019b8a9427a"
	},
	{
		"id": "3dd194e1c158",
		"ts": "2026-08-23T07:29:50.854Z",
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
		"liquidityUsd": 16679233.98,
		"hash": "3dd194e1c1587316598fdd45c5bb442f856880804514b68d881df03a57ce1c26"
	},
	{
		"id": "6c580d65b282",
		"ts": "2026-08-23T07:29:51.537Z",
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
		"liquidityUsd": 868314.4,
		"hash": "6c580d65b28287b26f09b58c70c1b3a424a5a276dbb3f1172411452a4d64f64a"
	},
	{
		"id": "74fb1731c3d2",
		"ts": "2026-08-23T07:29:51.783Z",
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
		"liquidityUsd": 27652926.12,
		"hash": "74fb1731c3d2a5cf12303e5a293118679597b0e7065899565fe1e300ce2120d9"
	},
	{
		"id": "e8991ab7dce4",
		"ts": "2026-08-23T07:29:52.055Z",
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
		"liquidityUsd": 3280236.56,
		"hash": "e8991ab7dce4f0e086acbf0f800725c40fdfd5cef258625dcd02af2edb630b80"
	},
	{
		"id": "f0d0b7ae3fe9",
		"ts": "2026-08-23T07:29:52.297Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1144175.29,
		"hash": "f0d0b7ae3fe9f80f5ea573e467359dfe08107945bdaee1cc440761d01ff4ec5d"
	},
	{
		"id": "ed98bb93abc3",
		"ts": "2026-08-23T07:29:52.556Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1518711.3,
		"hash": "ed98bb93abc3e45ac7276826f1339b61fd87965794b3ced0b6ef77b5e433738a"
	},
	{
		"id": "124c4475f03d",
		"ts": "2026-08-23T07:29:52.799Z",
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
		"liquidityUsd": 3348638.65,
		"hash": "124c4475f03d361e781c2c60fe0edfc8250cc82db82ec3a39351680e71e6a3a3"
	},
	{
		"id": "c645caccdd8c",
		"ts": "2026-08-23T07:29:53.048Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1362467.68,
		"hash": "c645caccdd8c176127747b179481b0489a970e9048a798d6531e260d1fdcee0d"
	},
	{
		"id": "ae555f6114a9",
		"ts": "2026-08-23T07:29:53.297Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 798694.87,
		"hash": "ae555f6114a91a0ee20a1174198ca30de5502eb2309f7d887eb79d68b13d09a0"
	},
	{
		"id": "fe32c5ede357",
		"ts": "2026-08-23T07:29:53.536Z",
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
		"liquidityUsd": 134115.46,
		"hash": "fe32c5ede357239679ff52eb9b626a7e33f8c865aced20ee91c6816f5daeb269"
	},
	{
		"id": "8883e23b7adc",
		"ts": "2026-08-23T07:29:53.766Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 493937.87,
		"hash": "8883e23b7adc933491cf1f9fbe14d7f1f0d761d6fa0a2f4e738a1e1ebed8acad"
	},
	{
		"id": "b06a25941c78",
		"ts": "2026-08-23T07:29:53.995Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 693140.37,
		"hash": "b06a25941c786f0d80be724827188e38fa10af653e223873a4dea7ecd05b446e"
	},
	{
		"id": "56c3931d3abb",
		"ts": "2026-08-23T07:29:54.222Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10959404.7,
		"hash": "56c3931d3abb9a521ab569227ad9dc009d77c0cabd9648f644dfed20d90f2299"
	},
	{
		"id": "10c17df09e53",
		"ts": "2026-08-23T07:29:54.450Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 588926.51,
		"hash": "10c17df09e530bb493635ebd7d7962e4be9c79e15a7f0604bcb815538d0da258"
	},
	{
		"id": "81347dd304d1",
		"ts": "2026-08-23T07:29:54.677Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 865532.52,
		"hash": "81347dd304d1536636b23137a4e0ac7136e39a5ace7f4475b66d9cfc3aa9e065"
	},
	{
		"id": "b14f92cd9f32",
		"ts": "2026-08-23T07:29:54.905Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3170073.81,
		"hash": "b14f92cd9f32847daad543625f6ff12b096b118ca62e2d77533889ffeb5edeb8"
	},
	{
		"id": "372d86b25002",
		"ts": "2026-08-23T07:29:55.130Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1783436.34,
		"hash": "372d86b2500250e77f6fe5295c5dbf5fff98b7206557faca6d2f54fc8f0e5933"
	},
	{
		"id": "317f09634ff9",
		"ts": "2026-08-23T07:29:55.358Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3930743.39,
		"hash": "317f09634ff965fde4b235fc9ac6c543247bb15633e3425704fc665b6d9e2d10"
	},
	{
		"id": "e27e121bb7d5",
		"ts": "2026-08-23T06:34:06.906Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109375720.25,
		"hash": "e27e121bb7d5097d52b907e2b8bc095f201636ec0890c67bb57518e1d2437b72"
	},
	{
		"id": "9a2844f93285",
		"ts": "2026-08-23T06:34:07.416Z",
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
		"liquidityUsd": 13194912.26,
		"hash": "9a2844f93285f159fba1dac30a7e0e9386cfa9bbb2261ae7867cc4c184addde6"
	},
	{
		"id": "4d5bd3ff8693",
		"ts": "2026-08-23T06:34:07.634Z",
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
		"liquidityUsd": 860106.92,
		"hash": "4d5bd3ff86931f01458badaaa117ec3abc2a9cc9e3e5a5edea89ddaf8eb90cfc"
	},
	{
		"id": "991e27c99dba",
		"ts": "2026-08-23T06:34:07.832Z",
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
		"liquidityUsd": 27598977.95,
		"hash": "991e27c99dbae3300e637a2234a45aae3a2afa9b6284c7d45fb7a2c1349c08ec"
	},
	{
		"id": "b2d5f6d86d47",
		"ts": "2026-08-23T06:34:08.139Z",
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
		"liquidityUsd": 3273136.42,
		"hash": "b2d5f6d86d47c3d5861b3ee3e8ca885bafe4df92e1cd951a7650b8f97b4b9e33"
	},
	{
		"id": "8182de04a70e",
		"ts": "2026-08-23T06:34:08.381Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1129276.96,
		"hash": "8182de04a70e510b65ad897328575f755800e6bebc44f9f22309cb3a421f1b75"
	},
	{
		"id": "e8d481b5c974",
		"ts": "2026-08-23T06:34:08.622Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 896219.71,
		"hash": "e8d481b5c974af38cd4291e1769a9d9cec93f0aa91a29e22e28cc1f4a33307a1"
	},
	{
		"id": "42b63cf4f2fe",
		"ts": "2026-08-23T06:34:08.842Z",
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
		"liquidityUsd": 3102551.33,
		"hash": "42b63cf4f2fe8732cd04728db8e3ac12968ccfb61ebe51b9c5f3696733b237aa"
	},
	{
		"id": "4411ef371d75",
		"ts": "2026-08-23T06:34:09.056Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1315672.4,
		"hash": "4411ef371d75bba9ce1b8a60c93bb2dcb313152a3d1b05ef2e44c6645f2e93a9"
	},
	{
		"id": "3ebf004abfaa",
		"ts": "2026-08-23T06:34:09.316Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 805413.73,
		"hash": "3ebf004abfaa5ee2dd45f8d2ec0c7ea22995797f83dc3ff2d8bcb3d2687b5d56"
	},
	{
		"id": "72d3ecd5e3d0",
		"ts": "2026-08-23T06:34:09.974Z",
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
		"liquidityUsd": 140089.28,
		"hash": "72d3ecd5e3d0cb86d814de23961f6001d597c2e97ef44cee942f3dda7d5d5c65"
	},
	{
		"id": "428ea12f557f",
		"ts": "2026-08-23T06:34:10.185Z",
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
		"liquidityUsd": 10880137.39,
		"hash": "428ea12f557fa55f2b59e89829cdf5ca92ebbf531368898dc319f157ce9045ee"
	},
	{
		"id": "3101625da834",
		"ts": "2026-08-23T06:34:10.392Z",
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
		"liquidityUsd": 690198.19,
		"hash": "3101625da83414d41436f001fe55902a5168b789d4d3bd4832d30eddb6b3d02c"
	},
	{
		"id": "998e6a6b3de3",
		"ts": "2026-08-23T06:34:10.601Z",
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
		"liquidityUsd": 587702.83,
		"hash": "998e6a6b3de3457d1987835da1d4306467ff12ab1a8e6048d52caa0e33afaaa7"
	},
	{
		"id": "72321847479e",
		"ts": "2026-08-23T06:34:10.839Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 865991.16,
		"hash": "72321847479e9c1b300c6c0d269ebeacee84792d696a6ad57bc0a384fba9a85e"
	},
	{
		"id": "2856dd4c7412",
		"ts": "2026-08-23T06:34:11.059Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3146425.44,
		"hash": "2856dd4c7412aa016811027dcf476e0b024688d17837c0276e911ab2d203cfd7"
	},
	{
		"id": "314e2e515f7a",
		"ts": "2026-08-23T06:34:11.303Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 509798.75,
		"hash": "314e2e515f7a5326efb35ef08be54ff27358ce469daad310b7f05a03af70f3f1"
	},
	{
		"id": "eac00e9e31be",
		"ts": "2026-08-23T06:34:11.507Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1780786.72,
		"hash": "eac00e9e31be6c88c7bd96bac6e995a56924dc070db9f2ef2309be54e2facefa"
	},
	{
		"id": "787a3117dd4a",
		"ts": "2026-08-23T06:34:11.700Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 94269.16,
		"hash": "787a3117dd4aafdf64ff9251acf74cf52e346c73bc4b4c1f19e345b2cb85a83b"
	},
	{
		"id": "44d69be30fdd",
		"ts": "2026-08-23T05:24:55.020Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 108981223.72,
		"hash": "44d69be30fddf6c58288b39838559ae67ce7a657ce890edf935af1e1dffdd426"
	},
	{
		"id": "e59c30634831",
		"ts": "2026-08-23T05:24:55.439Z",
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
		"liquidityUsd": 14272895.06,
		"hash": "e59c306348316db181f602cbfc76e8ef7c16ea577b0dd7c7f3b0c5a56d948d29"
	},
	{
		"id": "e4a2dba9cb8b",
		"ts": "2026-08-23T05:24:55.674Z",
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
		"liquidityUsd": 861064.97,
		"hash": "e4a2dba9cb8be05f66dabb03e80654bc7c1db352199a02fff4fabccbdfaec960"
	},
	{
		"id": "a9eeb92fd67e",
		"ts": "2026-08-23T05:24:55.903Z",
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
		"liquidityUsd": 27559307.37,
		"hash": "a9eeb92fd67e7e1ff10cdf2c79c853afdce357c680d0fe5e0f8f11adcf192418"
	},
	{
		"id": "f916f120aac6",
		"ts": "2026-08-23T05:24:56.207Z",
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
		"liquidityUsd": 3287083.32,
		"hash": "f916f120aac6bcb565e1f98a28e79d46fb18e8390c677fc920261336c882a2e6"
	},
	{
		"id": "9f3c9ae91da6",
		"ts": "2026-08-23T05:24:56.442Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1126535.28,
		"hash": "9f3c9ae91da6ed4f05c0205b92f252fe475b585c24577a177077552550ffaf6f"
	},
	{
		"id": "5ff64c12b37f",
		"ts": "2026-08-23T05:24:56.681Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 894810.49,
		"hash": "5ff64c12b37f7d56b007beed958ff8f5328364ebac5e62fdef482394c15f2cf6"
	},
	{
		"id": "0d6acce9c423",
		"ts": "2026-08-23T05:24:56.915Z",
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
		"liquidityUsd": 1770926.01,
		"hash": "0d6acce9c42342827fc14e05589d1d8b357b08195f6c399068f7edcb0e8d7085"
	},
	{
		"id": "604f99682c3c",
		"ts": "2026-08-23T05:24:57.149Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1327126.68,
		"hash": "604f99682c3c1151ba88b7b4d69ab4b71d274e5e72966b93a44ba3b47b74896f"
	},
	{
		"id": "85e7fc77265f",
		"ts": "2026-08-23T05:24:57.384Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 783288.51,
		"hash": "85e7fc77265f8db329160f563cdfa8d4cbdc76be9e7a1d2f0ccc324feda12ff2"
	}
]
