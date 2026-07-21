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
	"updatedAt": "2026-07-21T19:15:13.269Z",
	"tokensScored": 4800,
	"verdictsIssued": 4800,
	"safe": 4221,
	"risky": 375,
	"likelyRug": 204,
	"ticks": 293
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "f66f4fba5236",
		"ts": "2026-07-21T19:15:08.941Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110636819.57,
		"hash": "f66f4fba5236526fdb965453a309bfb4378076d753ff68968633a013fe8d69c7"
	},
	{
		"id": "2eeeac267b60",
		"ts": "2026-07-21T19:15:09.261Z",
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
		"liquidityUsd": 15948710.23,
		"hash": "2eeeac267b6054a8ad2a16916894683c09d9fb6a11a88968a6f12ea244db3d26"
	},
	{
		"id": "1f2bf00c2583",
		"ts": "2026-07-21T19:15:09.552Z",
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
		"liquidityUsd": 847413.58,
		"hash": "1f2bf00c2583975905a689b8442c0b76ecc84445a58c2232189fa7dff73ed6de"
	},
	{
		"id": "4775b8a29d02",
		"ts": "2026-07-21T19:15:09.815Z",
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
		"liquidityUsd": 25783160.73,
		"hash": "4775b8a29d0234f9a19736a86d3dbb1d9df04eafa48b888e1019ea4bc8a6af41"
	},
	{
		"id": "ff0e7393c404",
		"ts": "2026-07-21T19:15:10.090Z",
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
		"liquidityUsd": 5335586.74,
		"hash": "ff0e7393c40421d5c0743ec2068867531fff093b5471159576cec51fde57568c"
	},
	{
		"id": "09c857d8c08a",
		"ts": "2026-07-21T19:15:10.335Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1016320.97,
		"hash": "09c857d8c08ac59faef163594a4cdf3babcef5f7c1268c65f7234055a917b3ff"
	},
	{
		"id": "c16b30199f6f",
		"ts": "2026-07-21T19:15:10.587Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25783160.73,
		"hash": "c16b30199f6fa5c08b566e23469f0eee3a3e0ed74713a840bb146d45a309d1e6"
	},
	{
		"id": "898e9dbb3a0b",
		"ts": "2026-07-21T19:15:10.841Z",
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
		"liquidityUsd": 2567129.59,
		"hash": "898e9dbb3a0b0fa7616bee9a56b372f9ff3af525c56aa5e69a583999c825564a"
	},
	{
		"id": "a677cc87dfdc",
		"ts": "2026-07-21T19:15:11.090Z",
		"symbol": "ROLL",
		"token": "0xAb6363dA0C80cEF3Ae105Bd6241E30872355d021",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1608970.02,
		"hash": "a677cc87dfdc3ace8c26f1bbb99a9832ea29021773c87cf9f698ea806e1ccbd8"
	},
	{
		"id": "e426d1af1486",
		"ts": "2026-07-21T19:15:11.374Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2117717.61,
		"hash": "e426d1af1486d7684c74b84168526c920c8f87e62fcc03eac358e8156ce8b6ec"
	},
	{
		"id": "62f2558c3019",
		"ts": "2026-07-21T19:15:11.603Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9824930.06,
		"hash": "62f2558c3019a072ba4c754ed157ef02fe6cf8ce5033297a5e615c416f7134c1"
	},
	{
		"id": "6e453d541db9",
		"ts": "2026-07-21T19:15:11.836Z",
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
		"liquidityUsd": 85822.14,
		"hash": "6e453d541db9c278401c359e1d64338c3d6860eeb40b4e8c72eb43b2faba5da6"
	},
	{
		"id": "60be1b3d4220",
		"ts": "2026-07-21T19:15:12.073Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 146548.25,
		"hash": "60be1b3d4220328ee06a420964cef69bc3c9045c31f5932abd6a4bc66fc76c92"
	},
	{
		"id": "1f86fc69a9fa",
		"ts": "2026-07-21T19:15:12.304Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3673063.29,
		"hash": "1f86fc69a9faa4254faeedfc087e6e4cafdbfab92d2d54cc239427d62ce4e3d5"
	},
	{
		"id": "21f5baad937f",
		"ts": "2026-07-21T19:15:12.539Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 286314.29,
		"hash": "21f5baad937f86dcf04d1455bd4557488d674846cf36e6aad51762ca863e9bd1"
	},
	{
		"id": "e7ab013e52f8",
		"ts": "2026-07-21T19:15:12.775Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1829236.95,
		"hash": "e7ab013e52f8cbaaaefb6039c1986502ae59252a39f205fd9161b564ca9f6126"
	},
	{
		"id": "022f41a87180",
		"ts": "2026-07-21T19:15:13.033Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 191643.78,
		"hash": "022f41a871808d076728846b09bd14a09fc26863d1e9ae18fba6bd3646d6741f"
	},
	{
		"id": "e84988863a54",
		"ts": "2026-07-21T19:15:13.269Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 43480.99,
		"hash": "e84988863a54dd47bd0b75b469f77a5d4d4b9952c87d48aef9acb6267f814fe2"
	},
	{
		"id": "307164508ed9",
		"ts": "2026-07-21T17:13:52.956Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110891262.26,
		"hash": "307164508ed9cbdce269b95afd4155066548874fb0f2c69bdfaf65adf6c8c8ca"
	},
	{
		"id": "7df75d741c27",
		"ts": "2026-07-21T17:13:53.389Z",
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
		"liquidityUsd": 14925972.39,
		"hash": "7df75d741c270a1a342be3cb20f55aef610c2b7d35c4c4d16891decbb268842d"
	},
	{
		"id": "0e07863b8678",
		"ts": "2026-07-21T17:13:53.579Z",
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
		"liquidityUsd": 850599.6,
		"hash": "0e07863b8678bbf6a6c7945a6b79b54ae0fa580317ffb3a00ff611fafac5de01"
	},
	{
		"id": "176461a8a218",
		"ts": "2026-07-21T17:13:53.767Z",
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
		"liquidityUsd": 26022261.62,
		"hash": "176461a8a2181af6617811ef9c634f036d06324a0bf804b099217c1ce82b596e"
	},
	{
		"id": "4b6cc27dd985",
		"ts": "2026-07-21T17:13:53.993Z",
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
		"liquidityUsd": 5355142.71,
		"hash": "4b6cc27dd98551812c935e885a6aac0765e76e2e79d6dafa083c3540d305aec3"
	},
	{
		"id": "744855a1794e",
		"ts": "2026-07-21T17:13:54.185Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1026482.87,
		"hash": "744855a1794e228484350c2adfcd444bb9854e79b83897b6926f3a403e0344a8"
	},
	{
		"id": "4053d60071fb",
		"ts": "2026-07-21T17:13:54.373Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26043899.02,
		"hash": "4053d60071fbe9eb39e8767b94d375c28688c06dda005a5886016358c40bff30"
	},
	{
		"id": "8bf0483ca544",
		"ts": "2026-07-21T17:13:54.579Z",
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
		"liquidityUsd": 2574641.85,
		"hash": "8bf0483ca54499403aff9e08616c61555b7f2386e2444953cd510b1374f7ad17"
	},
	{
		"id": "24f64c31641a",
		"ts": "2026-07-21T17:13:54.774Z",
		"symbol": "ROLL",
		"token": "0xAb6363dA0C80cEF3Ae105Bd6241E30872355d021",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1591472.26,
		"hash": "24f64c31641a6cf6b07f7c689f7b2b3bc925f143c61caa0b8f4c892adcb768f3"
	},
	{
		"id": "2a5994bab9d6",
		"ts": "2026-07-21T17:13:54.974Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 78177.91,
		"hash": "2a5994bab9d6fe3f669be52804fc34f22c434db66c9e1f2c3c703a41d903a066"
	},
	{
		"id": "073ba747e07e",
		"ts": "2026-07-21T17:13:55.163Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2120690.74,
		"hash": "073ba747e07eae991da08e5f65dba293fca80c3e9c8c9b7a77a8bfa5b961bc24"
	},
	{
		"id": "f851e81fbdbf",
		"ts": "2026-07-21T17:13:55.382Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3646930.8,
		"hash": "f851e81fbdbf356de725ce75b120af8fff515ef162ecd0510fd29d45ec2c2cec"
	},
	{
		"id": "6c36704ab6f4",
		"ts": "2026-07-21T17:13:55.569Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 152279.2,
		"hash": "6c36704ab6f4288fcfc9025b33e326775da9f62af9b96c6deca3592ae84c7308"
	},
	{
		"id": "346b46a22c73",
		"ts": "2026-07-21T17:13:55.766Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 287302.66,
		"hash": "346b46a22c73dd524111951ea9f09bfd91064ba3651964020edb5cef98a5e928"
	},
	{
		"id": "56c579e45df4",
		"ts": "2026-07-21T17:13:55.975Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9829568.37,
		"hash": "56c579e45df4fd88290ed9096b97c2ac5e644555ec5f0fc474565c48a0afcab4"
	},
	{
		"id": "d8ce56688547",
		"ts": "2026-07-21T17:13:56.174Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1830760.98,
		"hash": "d8ce566885470b8b424e26681b7ce38b1885241a7777c02f45a9d1104860dafd"
	},
	{
		"id": "db1f183d7a61",
		"ts": "2026-07-21T17:13:56.407Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 42681.51,
		"hash": "db1f183d7a61caf9674b03f07b026b52cbf51ecf8940ebd61e08578dcc9dd411"
	},
	{
		"id": "3e3ab5a11cfd",
		"ts": "2026-07-21T15:40:23.264Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110652045.94,
		"hash": "3e3ab5a11cfd9a85357a728407579806431db7233e1449a57f4ca6e51c5e4a0a"
	},
	{
		"id": "680f8c8e1673",
		"ts": "2026-07-21T15:40:23.487Z",
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
		"liquidityUsd": 16271315.83,
		"hash": "680f8c8e16735c9461a2fbc739dd4431e4d5f95242ae372a7d43f061189e1922"
	},
	{
		"id": "25b4dac28630",
		"ts": "2026-07-21T15:40:23.678Z",
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
		"liquidityUsd": 847131.06,
		"hash": "25b4dac28630a861806594aa4c8557326d73d848f919cc1a3852ce9a52eec917"
	},
	{
		"id": "27428d48fff1",
		"ts": "2026-07-21T15:40:23.870Z",
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
		"liquidityUsd": 25715026.39,
		"hash": "27428d48fff10ae8930d75d7eb1187187378fe66b641e73f379c9651b658ff04"
	},
	{
		"id": "41bcf99c0119",
		"ts": "2026-07-21T15:40:24.058Z",
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
		"liquidityUsd": 5373395.68,
		"hash": "41bcf99c01193e225019e79ea5181c15685221941b19127195c44df683880174"
	},
	{
		"id": "929cd6b4262e",
		"ts": "2026-07-21T15:40:24.249Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1026517.79,
		"hash": "929cd6b4262ea65b515d02e03f2dc2d7213cf3ee3623dc72d0e1472212a2e81b"
	},
	{
		"id": "4b424120633a",
		"ts": "2026-07-21T15:40:24.458Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25715026.39,
		"hash": "4b424120633ae51ad0f798765d158bb41f11756c82b8ff52df04893f12551bc8"
	},
	{
		"id": "9f195d0aab62",
		"ts": "2026-07-21T15:40:24.644Z",
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
		"liquidityUsd": 2575312.79,
		"hash": "9f195d0aab626183bfbfe10d0d197df22a8ca02db28511757d8e2f1689de001d"
	},
	{
		"id": "4c08af5b54a0",
		"ts": "2026-07-21T15:40:24.829Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 82237.41,
		"hash": "4c08af5b54a0af5d6b5be2ccff0848a0a0a8dd7089e4d44adc84d6bb425d0ad5"
	},
	{
		"id": "86d12ee05989",
		"ts": "2026-07-21T15:40:25.023Z",
		"symbol": "ROLL",
		"token": "0xAb6363dA0C80cEF3Ae105Bd6241E30872355d021",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1580880.63,
		"hash": "86d12ee059897c4dad542051d70e232da7face19f7b964906ada738bc8d5fddd"
	},
	{
		"id": "711e85cd5a5b",
		"ts": "2026-07-21T15:40:25.206Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3678854.8,
		"hash": "711e85cd5a5b0c0afbdb4c962d6d09de243547477c7732a2f316b93ef0749bb9"
	},
	{
		"id": "8945759f2193",
		"ts": "2026-07-21T15:40:25.393Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2134594.97,
		"hash": "8945759f219375cc959de870769c4e8a4f4e5beb4be3996d3ddd5e1497c34132"
	},
	{
		"id": "546ba5f00edb",
		"ts": "2026-07-21T15:40:25.602Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 153143.84,
		"hash": "546ba5f00edbd1280c2f6ae72227aaa079801643c3475c6dc79a88d8744742e6"
	},
	{
		"id": "9cedc0cecf30",
		"ts": "2026-07-21T15:40:25.799Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 290082.59,
		"hash": "9cedc0cecf30c073a22a6ebcc52e04bd4f35749e73e3df66f6b0d5725c987528"
	},
	{
		"id": "a255cca66fbb",
		"ts": "2026-07-21T15:40:25.984Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 42394.07,
		"hash": "a255cca66fbb2a8b34852e996a28efa062405aa10b62eae11edfe17318c1a172"
	},
	{
		"id": "db61585c9578",
		"ts": "2026-07-21T15:40:26.174Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 687582.55,
		"hash": "db61585c957877a8e619a3f763c19b2bfb07e7d4c1c793c68fbac10d7a7f2ba6"
	},
	{
		"id": "ef1a12515736",
		"ts": "2026-07-21T15:40:26.358Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9898291.4,
		"hash": "ef1a12515736aed394c175b9c00715aea7431109352e2141498512ae2e6e9557"
	},
	{
		"id": "4dbea965c631",
		"ts": "2026-07-21T13:39:59.503Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110612453.04,
		"hash": "4dbea965c6310ad01bf410721dd6d93b4f26d9cdd821caf0da5000f6c7b0fc66"
	},
	{
		"id": "5d83b881e634",
		"ts": "2026-07-21T13:39:59.781Z",
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
		"liquidityUsd": 14089584.58,
		"hash": "5d83b881e634b68d64588be26fcc1beaaf8d688c7e694d75572870c454dc6167"
	},
	{
		"id": "04664e3318e2",
		"ts": "2026-07-21T13:40:00.017Z",
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
		"liquidityUsd": 844097.55,
		"hash": "04664e3318e22be39f5447531defdcba3973d83d3b09e9fcc8758049214ae7ba"
	},
	{
		"id": "543cd81a72bc",
		"ts": "2026-07-21T13:40:00.259Z",
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
		"liquidityUsd": 25710996.05,
		"hash": "543cd81a72bc9e747fba0d52fc199e7f5954968a1a07a4ac54f7f0005c2869a8"
	},
	{
		"id": "b35074ccf0e9",
		"ts": "2026-07-21T13:40:00.494Z",
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
		"liquidityUsd": 5355237.16,
		"hash": "b35074ccf0e9cc275a4c53e673b8175f1f2528d59a1e0a95e96987a95741ec47"
	},
	{
		"id": "1407812be9de",
		"ts": "2026-07-21T13:40:00.725Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1034562.02,
		"hash": "1407812be9de81872c86aa396dcdccc1ce44ff782b91bc45f6f2400735a248a1"
	},
	{
		"id": "e663ccdc491e",
		"ts": "2026-07-21T13:40:00.982Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25710996.05,
		"hash": "e663ccdc491e37e0734b4ff5e4754d67003cee76c5fd7ee009ccfbd933055f87"
	},
	{
		"id": "9db46b35fb35",
		"ts": "2026-07-21T13:40:01.346Z",
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
		"liquidityUsd": 2584719.38,
		"hash": "9db46b35fb357db7f735292355def6f670f50a585da552296d451c2e52f7467e"
	},
	{
		"id": "5d5c1284bb53",
		"ts": "2026-07-21T13:40:01.838Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 89614.08,
		"hash": "5d5c1284bb535f62df6fae1da3bb117fc1e904ba4d67aa10e73cec8f4a842bf4"
	},
	{
		"id": "e953c2d23acb",
		"ts": "2026-07-21T13:40:02.100Z",
		"symbol": "ROLL",
		"token": "0xAb6363dA0C80cEF3Ae105Bd6241E30872355d021",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1683160.94,
		"hash": "e953c2d23acb5715b7f828a21a38487434b4e8360ff67dc61d79f82e28bf2c11"
	},
	{
		"id": "5d32db2e0e1b",
		"ts": "2026-07-21T13:40:02.382Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2146772.89,
		"hash": "5d32db2e0e1b68c5c838ac3ab80c3d91ab615a4e3a65ec89db9280aa76df04bd"
	},
	{
		"id": "083461b67178",
		"ts": "2026-07-21T13:40:02.616Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3654400.69,
		"hash": "083461b67178c807a8401bce98d1e65cdb3c871d796b89711f9eaf0292bb8c96"
	},
	{
		"id": "445d12ca34b9",
		"ts": "2026-07-21T13:40:02.891Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity"
		],
		"liquidityUsd": 46780.4,
		"hash": "445d12ca34b901f6ce3441402cb8f2f63c5736f599a2eb265030cfe5835756a1"
	},
	{
		"id": "f6c8a36c9498",
		"ts": "2026-07-21T13:40:03.110Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 146348.37,
		"hash": "f6c8a36c9498f8680a8f135f2643b7c3d4ebfb247c9bfff6cc4ce82c86d19dfb"
	},
	{
		"id": "ca72207d7484",
		"ts": "2026-07-21T13:40:03.387Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 287848.11,
		"hash": "ca72207d7484cb969e210ecd9cffe642c64d3ac3fbe6d4e1df984b1722a17404"
	},
	{
		"id": "3837751dfbb4",
		"ts": "2026-07-21T13:40:03.604Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10079781.66,
		"hash": "3837751dfbb47f1f4deaa8194c1cbbdc9e1bf6adcd2e7aecee9c7d1208febabf"
	},
	{
		"id": "f4f8f2ad611f",
		"ts": "2026-07-21T13:40:03.822Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 691403.38,
		"hash": "f4f8f2ad611f11ede5ea4276850efb05ce46324e9ec040ec1ac663e842cc5d6e"
	},
	{
		"id": "bdb93b5e4744",
		"ts": "2026-07-21T11:04:40.070Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110457341.59,
		"hash": "bdb93b5e474497f7e43f0bf9a5cc5a669734e84e45c772e91863339a6bae8e7d"
	},
	{
		"id": "65dac623ed93",
		"ts": "2026-07-21T11:04:40.315Z",
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
		"liquidityUsd": 16396451.28,
		"hash": "65dac623ed93844b566816232737969a1793d1ccc333668362f963567bc79faf"
	},
	{
		"id": "526bc0bf3948",
		"ts": "2026-07-21T11:04:40.557Z",
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
		"liquidityUsd": 848651.9,
		"hash": "526bc0bf39484e5772f4760f20ac00f29954119ec7e9009eb2834fd7099bd32e"
	},
	{
		"id": "5a7bf7c6e3d4",
		"ts": "2026-07-21T11:04:40.797Z",
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
		"liquidityUsd": 25653446.57,
		"hash": "5a7bf7c6e3d43d5b8a9dd0eaeeda2f9c2d8a814014347af352fa5b8caea3778a"
	},
	{
		"id": "75f1a978df56",
		"ts": "2026-07-21T11:04:41.038Z",
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
		"liquidityUsd": 5371280.86,
		"hash": "75f1a978df562158506c8c25c9be60281b0e1fd4715a330d92d362567373f039"
	},
	{
		"id": "094b919cac3f",
		"ts": "2026-07-21T11:04:41.278Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1034594.36,
		"hash": "094b919cac3f2e5befaedfde4ec6213d39539fda404cc2fc9d333e3d7f3ff81c"
	},
	{
		"id": "8ecd0dec0255",
		"ts": "2026-07-21T11:04:41.515Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25653446.57,
		"hash": "8ecd0dec02550a1a91b667019a6774b8e2fe42ba35bf3b43899fe89b7a64216b"
	},
	{
		"id": "e17707d78f5a",
		"ts": "2026-07-21T11:04:41.758Z",
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
		"liquidityUsd": 2582802.7,
		"hash": "e17707d78f5a26118ab761e93f9500760f21c549a3d3101bcbebd4b97b1f5cda"
	},
	{
		"id": "597dca279d0a",
		"ts": "2026-07-21T11:04:42.000Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 94356.21,
		"hash": "597dca279d0a1286e6e30578d556a65f6dbf1e55118f2adbbde0a06057b75a03"
	},
	{
		"id": "7ed8beae90a7",
		"ts": "2026-07-21T11:04:42.239Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2168692.45,
		"hash": "7ed8beae90a7819e20e1c3d963eb2137d0cecefeadfadfd895a977ee92f66df5"
	},
	{
		"id": "2dc75f6a21c4",
		"ts": "2026-07-21T11:04:42.463Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9923891.33,
		"hash": "2dc75f6a21c4284d20d2fc9864d2d7d844afd4c4f35fa9f298f4d1e23a7af56b"
	},
	{
		"id": "49d1b31da13a",
		"ts": "2026-07-21T11:04:42.689Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3626393.17,
		"hash": "49d1b31da13a461e08f6364b7ae98a83d994efc80ffb388991be1e548daaec8c"
	},
	{
		"id": "7ad9f9344766",
		"ts": "2026-07-21T11:04:42.912Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 45617.64,
		"hash": "7ad9f934476675cf5e2db87eb6377acc827c2350f535a0e03033052ad8dd1fcb"
	},
	{
		"id": "6bf9cc2260c9",
		"ts": "2026-07-21T11:04:43.135Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 145911.19,
		"hash": "6bf9cc2260c966af5615d835c69cd76c21ad12d3ef87d12e8611e84fd6079efc"
	},
	{
		"id": "33a9004e6b37",
		"ts": "2026-07-21T11:04:43.361Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 285769.63,
		"hash": "33a9004e6b37cf39ff3f4b7823599aab4cc9ff7f73a77453804194bd189c1e39"
	},
	{
		"id": "6535d372a182",
		"ts": "2026-07-21T11:04:43.584Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 689354.38,
		"hash": "6535d372a182dcb0488869d27e2044a82f7d7928a2d32504e05c6e3b0721b9ea"
	},
	{
		"id": "275d761cd0dd",
		"ts": "2026-07-21T11:04:43.810Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2222444.12,
		"hash": "275d761cd0ddc9f00bea5dbee5e9f56ea507352ac00d664b52575c9b9e4d0ca7"
	},
	{
		"id": "bc5bc78a9838",
		"ts": "2026-07-21T08:22:02.398Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110159916.68,
		"hash": "bc5bc78a983833b7e0d6151aaf49a6b8d1602909e8e079f26dbf672869582e31"
	},
	{
		"id": "bff3219727a7",
		"ts": "2026-07-21T08:22:02.652Z",
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
		"liquidityUsd": 14194619.62,
		"hash": "bff3219727a79babdd9ba625c3cf55af2a60fe97d6692741c78ee2518617aa50"
	},
	{
		"id": "7be1b66e170c",
		"ts": "2026-07-21T08:22:02.916Z",
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
		"liquidityUsd": 858802.12,
		"hash": "7be1b66e170c4c5246d8d1e99633f0c45aa41deea037322948136c6dc3431b88"
	},
	{
		"id": "8de9efc70e32",
		"ts": "2026-07-21T08:22:03.159Z",
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
		"liquidityUsd": 25254074.81,
		"hash": "8de9efc70e32132dcbf0790f233db659e6ccb3d667c9eb3b2483fa6691c9a2b3"
	},
	{
		"id": "fa7ea0fffe60",
		"ts": "2026-07-21T08:22:03.393Z",
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
		"liquidityUsd": 5318829.37,
		"hash": "fa7ea0fffe608def7a9b1676678d64ba9cfe0c8b388a709387f9944693d62659"
	},
	{
		"id": "51979c5ffcc9",
		"ts": "2026-07-21T08:22:03.630Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1031163.2,
		"hash": "51979c5ffcc96bb220c9f980daba83e9cf65fcafecc934ff5aa7b44bb0120eb3"
	},
	{
		"id": "5a03c1221c77",
		"ts": "2026-07-21T08:22:03.864Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25254074.81,
		"hash": "5a03c1221c777ee6e41e2af5880315063bc4b363c17792928a13da3a0f35fad0"
	},
	{
		"id": "ff6174ab95f2",
		"ts": "2026-07-21T08:22:04.107Z",
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
		"liquidityUsd": 2598523.31,
		"hash": "ff6174ab95f2e9d9a1ccce8e252a754049179f554348bd178ffc2272a7207735"
	},
	{
		"id": "47a5dc471bad",
		"ts": "2026-07-21T08:22:04.350Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 94297.78,
		"hash": "47a5dc471bad2c676360c68c6807569447d630265c5a9071e4c5ad75df5e97fa"
	},
	{
		"id": "6e46de8f0e20",
		"ts": "2026-07-21T08:22:04.606Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2142532.67,
		"hash": "6e46de8f0e200f894410b23543baa076ee9c5c21c1427f20fd4da09546ab7c82"
	},
	{
		"id": "8c2321744693",
		"ts": "2026-07-21T08:22:04.828Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9909388.28,
		"hash": "8c2321744693de49e2a91de266e91aac25ae4888f51ec4e71c6cfc570412b0bb"
	},
	{
		"id": "531ea104a5bd",
		"ts": "2026-07-21T08:22:05.054Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3522297.98,
		"hash": "531ea104a5bd5d13bdd1d60c95a616bf096865903fcb5675a893b2856ab3c014"
	},
	{
		"id": "26dfd44050f4",
		"ts": "2026-07-21T08:22:05.278Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 45466.29,
		"hash": "26dfd44050f42a431b4021fca8f523a5c8c5c4ba7fb30db58ead2dc2b4d9792c"
	},
	{
		"id": "857c92c30868",
		"ts": "2026-07-21T08:22:05.509Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 146152.8,
		"hash": "857c92c3086853103a13f4e1a6b42db1e1133522fd3cf26c333af2ba494ca61a"
	},
	{
		"id": "28f179f67c99",
		"ts": "2026-07-21T08:22:05.730Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 287184.15,
		"hash": "28f179f67c9966854572bc31635c425573d31d8be1e93367218be28d8da3c776"
	},
	{
		"id": "4cc16518cead",
		"ts": "2026-07-21T08:22:05.950Z",
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
		"liquidityUsd": 755917.34,
		"hash": "4cc16518cead2dfa3402ab62f1277e7e0c27296f339bfa6bdffaf7fbba1de1e9"
	},
	{
		"id": "17c58b23ddfe",
		"ts": "2026-07-21T08:22:06.176Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1138838.76,
		"hash": "17c58b23ddfedf57a7c319b9b0c523dc38acdc2bb6e9b9f72b01752b564eec6f"
	},
	{
		"id": "0f8b660d8ac9",
		"ts": "2026-07-21T05:47:09.429Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109764182.68,
		"hash": "0f8b660d8ac90b942e350041f5f2920d71ec2dd06dc6ce61efeff5ebb470645e"
	},
	{
		"id": "8b5e0e7af586",
		"ts": "2026-07-21T05:47:09.810Z",
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
		"liquidityUsd": 16234867.08,
		"hash": "8b5e0e7af586c53decc2d54885d37f4b81674562869b125b0bbee5ca9baabf89"
	},
	{
		"id": "fcf3c25a20b7",
		"ts": "2026-07-21T05:47:10.023Z",
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
		"liquidityUsd": 854687.67,
		"hash": "fcf3c25a20b7b093e6c1c156f2a620d24626ca72f5fe17ababa4dac5ff8443f5"
	},
	{
		"id": "368261fb8bc6",
		"ts": "2026-07-21T05:47:10.231Z",
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
		"liquidityUsd": 25183278.03,
		"hash": "368261fb8bc69df062c884554472908ac112821efd00d722773e928e87d5425f"
	},
	{
		"id": "afe90a749af6",
		"ts": "2026-07-21T05:47:10.445Z",
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
		"liquidityUsd": 5290335.47,
		"hash": "afe90a749af6864a20cb7ee718c30593fac46aeb17ba3e12cf84a9e141836f37"
	},
	{
		"id": "12dc3db4be03",
		"ts": "2026-07-21T05:47:10.655Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1026351.56,
		"hash": "12dc3db4be03ea59ebec6e0bb72070afe98b455caa790f287219b8df724a27a7"
	},
	{
		"id": "2cb588d5d8cb",
		"ts": "2026-07-21T05:47:10.859Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25183278.03,
		"hash": "2cb588d5d8cb84b80a3e7442910c8aadfe9c58d882c7c7cafa9e2a7db5962f6e"
	},
	{
		"id": "6515f359c301",
		"ts": "2026-07-21T05:47:11.065Z",
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
		"liquidityUsd": 2573737.5,
		"hash": "6515f359c301c5ca2ad6b0a81221d9cc869bc01de0a05adb86bb85a94c0c0f16"
	},
	{
		"id": "779f5585e0b3",
		"ts": "2026-07-21T05:47:11.305Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 99425.24,
		"hash": "779f5585e0b3254823bdc19822b5c29e178b059e24045206e111d5100ebc0dc7"
	},
	{
		"id": "b2d8c174e328",
		"ts": "2026-07-21T05:47:11.521Z",
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
		"liquidityUsd": 9867848.32,
		"hash": "b2d8c174e3282d5b7bda4a2bd3b70c2d5a9998316c6dd5472b5cf1977e496841"
	},
	{
		"id": "15ba92a49ebd",
		"ts": "2026-07-21T05:47:11.723Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3609762.61,
		"hash": "15ba92a49ebd489daf40dabec4d9fcfb8ffa24408b3e44b887b2a54ddc76ed05"
	},
	{
		"id": "c4b2b5f68c66",
		"ts": "2026-07-21T05:47:11.914Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2154951.02,
		"hash": "c4b2b5f68c662bb1da77158aab4f6879d9235d1dff55721a568a4a8bd03158ec"
	},
	{
		"id": "c9f3291f7b7e",
		"ts": "2026-07-21T05:47:12.107Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1242688.31,
		"hash": "c9f3291f7b7e50835a5887941558f297623a30b3485d41d6848124fcac49a297"
	},
	{
		"id": "305260df58b4",
		"ts": "2026-07-21T05:47:12.298Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 51178.72,
		"hash": "305260df58b4275edfeaad105a296f9c5c2c1672de2fc364fce9c79a635a7bf5"
	},
	{
		"id": "ab8db8b730c3",
		"ts": "2026-07-21T05:47:12.499Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 284354.08,
		"hash": "ab8db8b730c3291953eecf2cd9eab984b53228d8cc2733da7b4d86c167382e6c"
	},
	{
		"id": "e33a648a2162",
		"ts": "2026-07-21T05:47:12.717Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 692097.02,
		"hash": "e33a648a2162ddffd0c98bd3a3a80d44c2dc142f68909d1fddb9e78d2df7224f"
	},
	{
		"id": "b47f66540c2b",
		"ts": "2026-07-21T05:47:12.906Z",
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
		"liquidityUsd": 763757.35,
		"hash": "b47f66540c2ba55c56b012266786f67fed35d8da0252329358521944cf137ce2"
	},
	{
		"id": "bc14e2b28021",
		"ts": "2026-07-21T02:35:24.487Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109464467.63,
		"hash": "bc14e2b28021063e54a7ea9b6c2765f401b5e64adbb49791b8ac054e10b054c9"
	},
	{
		"id": "f6a95f69ddd4",
		"ts": "2026-07-21T02:35:24.731Z",
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
		"liquidityUsd": 14768921.75,
		"hash": "f6a95f69ddd41e5a0cfd3718a9469a68591ea3abce83f0fc0b72d37e370c73fb"
	},
	{
		"id": "ef587fa6a9a4",
		"ts": "2026-07-21T02:35:25.012Z",
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
		"liquidityUsd": 853816.09,
		"hash": "ef587fa6a9a43ee0cbab6da5e1b1dc56a2cd0116f3b8d8e1dd166cca768dc511"
	},
	{
		"id": "fb8ea9879580",
		"ts": "2026-07-21T02:35:25.252Z",
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
		"liquidityUsd": 25275600.29,
		"hash": "fb8ea9879580caf783c22c3bbb1dcd1a6183cc1652abfd9f5ed63cf02aeb6b86"
	},
	{
		"id": "e6a8431ce88d",
		"ts": "2026-07-21T02:35:25.492Z",
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
		"liquidityUsd": 5238127.04,
		"hash": "e6a8431ce88d73fadc64e903e312db3e45c697c2e341c2db4ab76aabd7a10d4c"
	},
	{
		"id": "5a345cfb0d7e",
		"ts": "2026-07-21T02:35:25.729Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1013977.34,
		"hash": "5a345cfb0d7edc49e0f32538bf237ec47454ab25b0ecfc929974cfc33441ba52"
	},
	{
		"id": "71152b639fbd",
		"ts": "2026-07-21T02:35:25.960Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25275600.29,
		"hash": "71152b639fbdda3c401cf1ab995440aad69c77dba50d6ef60c9bde00efbc656f"
	},
	{
		"id": "0f4f8bd8bf06",
		"ts": "2026-07-21T02:35:26.196Z",
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
		"liquidityUsd": 2552117.3,
		"hash": "0f4f8bd8bf068f9d1d06708a611a1042ed980820fb8c4c20f8786215ae3814d7"
	},
	{
		"id": "83ba81df7845",
		"ts": "2026-07-21T02:35:26.436Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 101506.93,
		"hash": "83ba81df7845aed6c5a8dbafba6a10f67fec65852bf9c36acda5307e2db4d176"
	},
	{
		"id": "f5ea7f7bec88",
		"ts": "2026-07-21T02:35:26.670Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3577767.05,
		"hash": "f5ea7f7bec8812524f1bc5530975da72d38d5f463264236ae4496a56d8297345"
	},
	{
		"id": "b4ca3a1d776e",
		"ts": "2026-07-21T02:35:26.891Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9564040.54,
		"hash": "b4ca3a1d776e742ad9012c7ac037f3ad57fe3107ec736eb9e86316046180088f"
	},
	{
		"id": "46224e2afcaa",
		"ts": "2026-07-21T02:35:27.110Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1253324.13,
		"hash": "46224e2afcaa90d4092c4bb3ec94f230149a1864eeec55343cd218a33f4ddaed"
	},
	{
		"id": "7fc365e0ea82",
		"ts": "2026-07-21T02:35:27.330Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2129868.39,
		"hash": "7fc365e0ea82233933897673b04f30d8d250531416059c4a7b67ec8351e4a6f5"
	},
	{
		"id": "4e49102be21c",
		"ts": "2026-07-21T02:35:27.551Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 51117.81,
		"hash": "4e49102be21c7434c56492fbb51c30e661e0849462de0ecd58b670d79c31ec26"
	},
	{
		"id": "1e7893ecb78c",
		"ts": "2026-07-21T02:35:27.769Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 294047.39,
		"hash": "1e7893ecb78c4090a74b3c163213fecd9d8231a6b0be784d506985623b7e5c9d"
	},
	{
		"id": "2517b3e62520",
		"ts": "2026-07-21T02:35:27.987Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 686347.49,
		"hash": "2517b3e625204ed486cbdad8d0eb94d0c5573d19876999daab5e9be79b478b79"
	},
	{
		"id": "ad7c7b9166e1",
		"ts": "2026-07-21T02:35:28.209Z",
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
		"liquidityUsd": 1291375.45,
		"hash": "ad7c7b9166e160bd352c78883e163f0729cd03faea8fa9ff2c59e76f14d48758"
	},
	{
		"id": "9c5431329c47",
		"ts": "2026-07-20T23:56:24.571Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109305872.25,
		"hash": "9c5431329c47eb12e76aba5860bc2bc16317a57736c4fa1d07f802e233d22279"
	},
	{
		"id": "d6d646aefa57",
		"ts": "2026-07-20T23:56:24.790Z",
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
		"liquidityUsd": 15218687.52,
		"hash": "d6d646aefa576aed4554fc6d8c84c279b72cbd6e73d1d49cef83be13f574f462"
	},
	{
		"id": "de3135937f13",
		"ts": "2026-07-20T23:56:25.008Z",
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
		"liquidityUsd": 854610.67,
		"hash": "de3135937f13076d47ca2b40dec4ba7a6dc96055730403ad67622067d0534278"
	},
	{
		"id": "0c4ac22301c5",
		"ts": "2026-07-20T23:56:25.221Z",
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
		"liquidityUsd": 25124057.16,
		"hash": "0c4ac22301c5fe4f99115d476c6e16ca6494ea62e494e00774fd43907782c363"
	},
	{
		"id": "07da0f4dba24",
		"ts": "2026-07-20T23:56:25.440Z",
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
		"liquidityUsd": 5206949.98,
		"hash": "07da0f4dba24ba459cf8d66e7ef86de47c3a1f82122c60bf8fc7a3542753ddf6"
	},
	{
		"id": "01bd27dc0c94",
		"ts": "2026-07-20T23:56:25.652Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1011644.96,
		"hash": "01bd27dc0c94b3d919309713a52c2156c06c3e85bd41d7f03621573cd3206d95"
	},
	{
		"id": "19631bff56ae",
		"ts": "2026-07-20T23:56:25.888Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25124057.16,
		"hash": "19631bff56ae9ddb08ae9d5d7be0e75da7e23f6863e17c25c44bf7473380eb60"
	},
	{
		"id": "7a6aa3fc5c25",
		"ts": "2026-07-20T23:56:26.105Z",
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
		"liquidityUsd": 2539770.76,
		"hash": "7a6aa3fc5c256d2b79f68ed9f452fd1debd5248976a254827f83e632aed77acf"
	},
	{
		"id": "5e38974e6304",
		"ts": "2026-07-20T23:56:26.315Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 98852.35,
		"hash": "5e38974e630454c30415063074f5f1ed7f0d036c24e143b20cead82c36e72381"
	},
	{
		"id": "aca91f7fa62c",
		"ts": "2026-07-20T23:56:26.524Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2115169.94,
		"hash": "aca91f7fa62cc9441577c6d9eb757dba2342a71123fa74f8bf6dc61facbd5d4b"
	},
	{
		"id": "9f57c5c4b716",
		"ts": "2026-07-20T23:56:26.720Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9450744.18,
		"hash": "9f57c5c4b7161066cd74e580d51c31d197e8d29500bb8765f301fe8bfbf27402"
	},
	{
		"id": "860db56ca7d7",
		"ts": "2026-07-20T23:56:26.916Z",
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
		"liquidityUsd": 1274825.64,
		"hash": "860db56ca7d71f35b7af3f1441f4895d4678474063f3b6b4059fbe7424496d50"
	},
	{
		"id": "d04466103a3c",
		"ts": "2026-07-20T23:56:27.117Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1256384.21,
		"hash": "d04466103a3c17883ac0f26752058de6379b7aff26e23f69aef91a4aa9d5a859"
	},
	{
		"id": "83db307a707a",
		"ts": "2026-07-20T23:56:27.315Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 686079.23,
		"hash": "83db307a707a0af1acacda06a178f30bd941b17e9d9784dd568735eda51f0377"
	},
	{
		"id": "ea5b37b42339",
		"ts": "2026-07-20T23:56:27.518Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 291527.15,
		"hash": "ea5b37b42339eb342ae234a1f9a9592dfdd8fb21f6a980e2f0645cb2036eb80e"
	},
	{
		"id": "f309dda050f6",
		"ts": "2026-07-20T23:56:27.724Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 49253.83,
		"hash": "f309dda050f61f75e1ed097dce2e8114adfedb85adfd1b859281588306be9e5b"
	},
	{
		"id": "3b6f1a00263d",
		"ts": "2026-07-20T23:56:27.918Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3694670.58,
		"hash": "3b6f1a00263d15a75dd30fc2b62e13382f6823d0ee9d13649fef63c6e4f48320"
	},
	{
		"id": "0c80ecca488d",
		"ts": "2026-07-20T22:56:45.183Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109315344.06,
		"hash": "0c80ecca488d64db4dde561c49be0974948bb0991fb728c4c53b59f359494c7d"
	},
	{
		"id": "212153de0d0c",
		"ts": "2026-07-20T22:56:45.569Z",
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
		"liquidityUsd": 15527763.87,
		"hash": "212153de0d0c9d93d99707361a67b3d23f8d1155e1d5c69514aa5159a38d1e09"
	},
	{
		"id": "ed1210fc1696",
		"ts": "2026-07-20T22:56:45.789Z",
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
		"liquidityUsd": 854439.62,
		"hash": "ed1210fc1696095fb525035d965359ae577eee00e2c83eff813506e9eef788d7"
	},
	{
		"id": "88148f1cf3bc",
		"ts": "2026-07-20T22:56:46.010Z",
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
		"liquidityUsd": 25072292.59,
		"hash": "88148f1cf3bc4531a1a6e09ebdaeebbf8223fa52e6a2cc17fe992ecf85e7f95b"
	},
	{
		"id": "56722bac6ab7",
		"ts": "2026-07-20T22:56:46.225Z",
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
		"liquidityUsd": 5205913.47,
		"hash": "56722bac6ab7c733572d0f85452813c1a91fbd49a13757bc64ec812c5b767d3c"
	},
	{
		"id": "63e1c4d47694",
		"ts": "2026-07-20T22:56:46.433Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1009256.9,
		"hash": "63e1c4d476945f3bdc87e38c23b33e9efac7897fee3069bdb1a437d6077037e1"
	},
	{
		"id": "9342e7baa805",
		"ts": "2026-07-20T22:56:46.641Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25072292.59,
		"hash": "9342e7baa805af7bc214f78752824b375bbccee51e2cb7a6c6c086b33046ae00"
	},
	{
		"id": "8c372b6d0fbb",
		"ts": "2026-07-20T22:56:46.886Z",
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
		"liquidityUsd": 2532094.46,
		"hash": "8c372b6d0fbb7be8cd5dd76df680feb3afd69c48ea7550125f84571a89c90b45"
	},
	{
		"id": "447a8a355b6a",
		"ts": "2026-07-20T22:56:47.097Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 101678.6,
		"hash": "447a8a355b6a674f83518d5b2575f20d5faf99f4adb3777c245d8f36763c01bd"
	},
	{
		"id": "fd94d543ec49",
		"ts": "2026-07-20T22:56:47.313Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2101598.68,
		"hash": "fd94d543ec496a543b6a713240fd8aaa61209e59c359ce3d4983688fe5f25b8c"
	},
	{
		"id": "6a7829255aa8",
		"ts": "2026-07-20T22:56:47.537Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1250223.39,
		"hash": "6a7829255aa81ae3d8aedecaf0170f16e6122421e41c7aa319462cbc5aff35b7"
	},
	{
		"id": "3bd5750fe2ae",
		"ts": "2026-07-20T22:56:47.729Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 683841.4,
		"hash": "3bd5750fe2aeeb6f9d340e09e904bd6d76dc50dfa442169a402dcdd9bc95ddcf"
	},
	{
		"id": "4b536b9125d6",
		"ts": "2026-07-20T22:56:48.093Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 52282.08,
		"hash": "4b536b9125d6792ef49374976914dbb8888c12788ec0e83389e885b9c2ac26c6"
	},
	{
		"id": "977b1ed56582",
		"ts": "2026-07-20T22:56:48.288Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3679383.02,
		"hash": "977b1ed565823d8c99c2b3aa02c185ff45117e675e4a0c503bfa2fcddd3ec476"
	},
	{
		"id": "faef92db9679",
		"ts": "2026-07-20T22:56:48.503Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9399839.16,
		"hash": "faef92db967965cf3dc4163f2a6bcb0bc18589f66cca3a1cdc154a771b87489f"
	},
	{
		"id": "7cc2fd4dae27",
		"ts": "2026-07-20T22:56:48.702Z",
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
		"liquidityUsd": 1263075.93,
		"hash": "7cc2fd4dae27a7ffaa79046f18f6f636530081cdef440e2a7dff41305b0cf49f"
	},
	{
		"id": "0823f0dd7948",
		"ts": "2026-07-20T22:56:48.899Z",
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
		"liquidityUsd": 792758.61,
		"hash": "0823f0dd79488cea5c374b47e6d70f852df9d9f57e6034396dcefe1bfa88ad4b"
	},
	{
		"id": "93b06da817dc",
		"ts": "2026-07-20T21:08:29.776Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109039690.76,
		"hash": "93b06da817dc26a7de61ab15a9326a127bab59fd767875625a8afbebe694a2bb"
	},
	{
		"id": "92448b1e2a32",
		"ts": "2026-07-20T21:08:30.135Z",
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
		"liquidityUsd": 15289912.02,
		"hash": "92448b1e2a323874913d28da244710936199fc7d74f9fce8e57159f86c8df5e7"
	},
	{
		"id": "9433aa893837",
		"ts": "2026-07-20T21:08:30.353Z",
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
		"liquidityUsd": 861506.9,
		"hash": "9433aa893837bf7396bd749d81c37a585e1e8561f1aa5583e812cfdc4467e6a1"
	},
	{
		"id": "1cced60e3f05",
		"ts": "2026-07-20T21:08:30.568Z",
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
		"liquidityUsd": 25238029.88,
		"hash": "1cced60e3f0500a08fbb581aac15f691ca6b7f09bb7b8fc3de21957d1520e6b4"
	},
	{
		"id": "0d5e982c3c7d",
		"ts": "2026-07-20T21:08:30.770Z",
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
		"liquidityUsd": 5233121.67,
		"hash": "0d5e982c3c7d2e2c609c6f0de4f7189c4622f1e7666fc088c663a7b2a54a9211"
	},
	{
		"id": "157a58147a97",
		"ts": "2026-07-20T21:08:30.976Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1011632.72,
		"hash": "157a58147a975dc95d90e89213b4d1d853377c54d2a6506207cc23526ab99bba"
	},
	{
		"id": "4043ec40d855",
		"ts": "2026-07-20T21:08:31.176Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25238029.89,
		"hash": "4043ec40d85566e042f086affd1933c3dd2be16b070dae3f1f3ca7e575f0c0d5"
	},
	{
		"id": "c468c835354e",
		"ts": "2026-07-20T21:08:31.369Z",
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
		"liquidityUsd": 2546567.88,
		"hash": "c468c835354e6c2036d92b53e4ffecde696d4576a71037fc94cb98c7ee9466e4"
	},
	{
		"id": "5b407ba8a47b",
		"ts": "2026-07-20T21:08:31.566Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 99304.31,
		"hash": "5b407ba8a47b580e813220d970d7a21de4001e31c78e4ad8bd603b5866fe77a4"
	},
	{
		"id": "47e5caacbca1",
		"ts": "2026-07-20T21:08:31.875Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2122517.65,
		"hash": "47e5caacbca139062f215d42215a01a0cbd247ce642a521c7043c1f6a41a0429"
	},
	{
		"id": "23e7d66b2061",
		"ts": "2026-07-20T21:08:32.065Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9514607.14,
		"hash": "23e7d66b2061636bb1f3a8f9034fbeb33a9aa80467d5af0426915716dfc9f994"
	},
	{
		"id": "0845b35e457e",
		"ts": "2026-07-20T21:08:32.257Z",
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
		"liquidityUsd": 1230320.68,
		"hash": "0845b35e457ea1f00f30a3eb671ed51a66c591855149dd753aa674fc890a0861"
	},
	{
		"id": "b9e9c890756c",
		"ts": "2026-07-20T21:08:32.455Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3733301.78,
		"hash": "b9e9c890756c5405ab41bb2e4256e22aa66b8396828f85fd3d041146386dbcda"
	},
	{
		"id": "e75bf24a3b6c",
		"ts": "2026-07-20T21:08:32.644Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 687812.79,
		"hash": "e75bf24a3b6c3c6a72dc3592173c458a607053949a80d71799df1c0316dd43b8"
	},
	{
		"id": "fcb39817c418",
		"ts": "2026-07-20T21:08:32.833Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 292146.8,
		"hash": "fcb39817c418781cee5202bec860fbc85792af24227dd4a2cf4636bcfb2bff12"
	},
	{
		"id": "70d8e99d61e2",
		"ts": "2026-07-20T21:08:33.024Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 48873.66,
		"hash": "70d8e99d61e2ea96fc6ffd5125352de80e2bbb92a09e9faf020d01910d8d0b12"
	},
	{
		"id": "fa450492a6ea",
		"ts": "2026-07-20T21:08:33.225Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5260891.02,
		"hash": "fa450492a6ea1b9fa1aa88f25ffdbeb4e97ade5e9a50cfdbf62f6a622eb304bf"
	},
	{
		"id": "080c58b6ef9b",
		"ts": "2026-07-20T19:47:34.697Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 108870486.79,
		"hash": "080c58b6ef9bc3572244d6eb127403cd08d253a831db0c00515b13f7f689b71f"
	},
	{
		"id": "a2edba903886",
		"ts": "2026-07-20T19:47:35.080Z",
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
		"liquidityUsd": 15723919.95,
		"hash": "a2edba903886fdfaac0d97a5f73264a067bc6898548687590b72395dc6ea9154"
	},
	{
		"id": "e7513777c2d9",
		"ts": "2026-07-20T19:47:35.298Z",
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
		"liquidityUsd": 859033.9,
		"hash": "e7513777c2d949da7911eff048ea768e7b8af7225a3de3ea433a95f972e21e13"
	},
	{
		"id": "11e49dc2217b",
		"ts": "2026-07-20T19:47:35.521Z",
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
		"liquidityUsd": 25215801.39,
		"hash": "11e49dc2217b8feb0e08e84e548a0a95cba3db67028ceeec70e6a56dd2810bd4"
	},
	{
		"id": "c1ea836bcb15",
		"ts": "2026-07-20T19:47:35.756Z",
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
		"liquidityUsd": 5231734.7,
		"hash": "c1ea836bcb151de2c575e4d5ae2dfc6e7269e6f1f1b27cb42f4ba3f425a698c4"
	},
	{
		"id": "28f6b623b9ce",
		"ts": "2026-07-20T19:47:35.999Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1011174.65,
		"hash": "28f6b623b9cea01f65ab7910e72bbb8ef7389b89b367efe8d5f8f1a25b91a71d"
	},
	{
		"id": "5e1a298a64ee",
		"ts": "2026-07-20T19:47:36.212Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25215801.39,
		"hash": "5e1a298a64eedb605ce397e72bd911880196df45c2986ceef741f40f0a22969d"
	},
	{
		"id": "cf0cacf2b7ec",
		"ts": "2026-07-20T19:47:36.438Z",
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
		"liquidityUsd": 2529432.64,
		"hash": "cf0cacf2b7ecbd29f3eb7130d058e8fb12fd8f173d1755bd434efb8c1abb6412"
	},
	{
		"id": "ec8d621fddd0",
		"ts": "2026-07-20T19:47:36.659Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 104477.8,
		"hash": "ec8d621fddd0add6a660c70835fdc4c0e311eda80d93f9361b8a86c01f553a5f"
	},
	{
		"id": "ade2f2e9ad73",
		"ts": "2026-07-20T19:47:36.899Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2133482.97,
		"hash": "ade2f2e9ad73790d20d9fef1902033aabcb58f90e83f26a3fd2a112847417ece"
	},
	{
		"id": "d405422017d2",
		"ts": "2026-07-20T19:47:37.107Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9424185.5,
		"hash": "d405422017d2c9af9e5ac22d6d3d99ca842c89d4a02344d73d18c4cbdaee36aa"
	},
	{
		"id": "90b55946824c",
		"ts": "2026-07-20T19:47:37.309Z",
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
		"liquidityUsd": 1279181.21,
		"hash": "90b55946824cf4991917101d426d88d2a2a734c438d6a1d68e139fe817ce2042"
	}
]
