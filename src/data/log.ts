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
	"updatedAt": "2026-08-31T17:50:24.457Z",
	"tokensScored": 15672,
	"verdictsIssued": 15672,
	"safe": 13336,
	"risky": 1161,
	"likelyRug": 1175,
	"ticks": 902
}

export const verdicts: AgentVerdict[] = [
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
	},
	{
		"id": "4d1ad06e8d57",
		"ts": "2026-08-30T12:33:47.192Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 131488.62,
		"hash": "4d1ad06e8d57cb19725242ad4c3d37dbe7e36546043a10bf3262e77e3f1de3e6"
	},
	{
		"id": "0475bb52ca7d",
		"ts": "2026-08-30T12:33:47.423Z",
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
		"liquidityUsd": 1010263.7,
		"hash": "0475bb52ca7d8d504a11105349c91eef3bde51bf8f206e89dc14afd35c434186"
	},
	{
		"id": "c98c775aa541",
		"ts": "2026-08-30T12:33:47.654Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 408742.95,
		"hash": "c98c775aa541ee2e5c715026b1ed29e0a2783b9742210b581a72dd9739c66e8e"
	},
	{
		"id": "7eb869c9144d",
		"ts": "2026-08-30T12:33:47.884Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4020752,
		"hash": "7eb869c9144d22a904081d39baa360e7f784cc413d710795bec81ed8abb5876a"
	},
	{
		"id": "ac1b2c139bd4",
		"ts": "2026-08-30T12:33:48.117Z",
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
		"liquidityUsd": 1413008.23,
		"hash": "ac1b2c139bd4591a16cb409d620a87a06066ee28c772e6a65fb85c06dcdb8d3d"
	},
	{
		"id": "cf320f72ca26",
		"ts": "2026-08-30T12:33:48.347Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11726304.12,
		"hash": "cf320f72ca26faea62b0f42310479c2055f5079e167246e98c876c744feb7968"
	},
	{
		"id": "88c08e1b421b",
		"ts": "2026-08-30T12:33:48.578Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 454677.51,
		"hash": "88c08e1b421b61f1ae39cbb489b80fa5e8276b3199ae1f80649df695e70c8541"
	},
	{
		"id": "1f0e505e1377",
		"ts": "2026-08-30T06:27:13.816Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115971708.78,
		"hash": "1f0e505e137767b7252210bac6314128a831b792255233c77fde3bdabee34bdf"
	},
	{
		"id": "d4ea44c69c41",
		"ts": "2026-08-30T06:27:14.283Z",
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
		"liquidityUsd": 19068784.55,
		"hash": "d4ea44c69c414f4392904b69b838ab0f5c5f36f5a0cbcaf9122e0d087a075752"
	},
	{
		"id": "7a8e348f46fd",
		"ts": "2026-08-30T06:27:14.529Z",
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
		"liquidityUsd": 957313.42,
		"hash": "7a8e348f46fd74b6d525c12768fb9c5caa7c77bb5aa0b06a5703f3b315dd82cd"
	},
	{
		"id": "0a92897f14dd",
		"ts": "2026-08-30T06:27:14.806Z",
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
		"liquidityUsd": 28850283.49,
		"hash": "0a92897f14dd5cd0804b9e56a66b85d32a652a3ebaf57393704b72667b7f8d7e"
	},
	{
		"id": "51277f3dfc7d",
		"ts": "2026-08-30T06:27:15.062Z",
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
		"liquidityUsd": 4102463.92,
		"hash": "51277f3dfc7d7763c7056c2299f25fc5a44c8f3c2d0d1041a20eac804d65895a"
	},
	{
		"id": "50f42b471371",
		"ts": "2026-08-30T06:27:15.330Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1158841.09,
		"hash": "50f42b471371a75fc129849bcb1818eed2d1b438c382383cb43949bc5e81ddca"
	},
	{
		"id": "3345b65ca828",
		"ts": "2026-08-30T06:27:15.570Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28850283.49,
		"hash": "3345b65ca8281235ef07c977bf11b46063919523d33a0ccfab2190eeb3d84141"
	},
	{
		"id": "6b7adf9e88b2",
		"ts": "2026-08-30T06:27:15.821Z",
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
		"liquidityUsd": 3905706.97,
		"hash": "6b7adf9e88b2108180ab4cccd5f4799ab5afcfceb2c264c207d9d243618694b8"
	},
	{
		"id": "5a8691cb9f34",
		"ts": "2026-08-30T06:27:16.100Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 684165.23,
		"hash": "5a8691cb9f343a025ea080b18ef2e14155f12ae0fee9d901d20243942f5c8ccf"
	},
	{
		"id": "68cd8791f7d4",
		"ts": "2026-08-30T06:27:16.358Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1331442.21,
		"hash": "68cd8791f7d472882fd5031a049f3fb8a919ef0e10ca7a95e32d410d69025eb9"
	},
	{
		"id": "7359ded03b49",
		"ts": "2026-08-30T06:27:16.579Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1310450.79,
		"hash": "7359ded03b49ed13a6e21aa019b03bd921c732a0e24991659a524809020924fd"
	},
	{
		"id": "2a6ca14e7e24",
		"ts": "2026-08-30T06:27:16.802Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 409791.01,
		"hash": "2a6ca14e7e241a716c5666204feb6bcf5aa2d0fa4a621ea11f4e0e936cc1c544"
	},
	{
		"id": "2a717aef33c8",
		"ts": "2026-08-30T06:27:17.032Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 141055.43,
		"hash": "2a717aef33c8010dec598880c5702b2e32722450727c3bbdb85aa8df7339d055"
	},
	{
		"id": "a53a366bcca9",
		"ts": "2026-08-30T06:27:17.261Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3560129.01,
		"hash": "a53a366bcca9063b479b364c735fa8fef7289c61784aea5f7433a851481bfd93"
	},
	{
		"id": "c317f9334237",
		"ts": "2026-08-30T06:27:17.480Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 124211.09,
		"hash": "c317f93342375a07276319199181c04610896abe14b2f74fbbf33c1ecfd66259"
	},
	{
		"id": "932d91c071b9",
		"ts": "2026-08-30T06:27:17.703Z",
		"symbol": "PROMPT",
		"token": "0x30c7235866872213F68cb1F08c37Cb9eCCB93452",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 122051.22,
		"hash": "932d91c071b98f8d690f5ef049a998eaa86e005dbba0833cf0cb5bb19ad06dc4"
	},
	{
		"id": "0fc7219fe029",
		"ts": "2026-08-30T06:27:18.028Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 456951.32,
		"hash": "0fc7219fe0291f9ca96a12321cad7e982715812696c2f26dbeef247e3964dc85"
	},
	{
		"id": "d2356b15023b",
		"ts": "2026-08-30T06:27:18.248Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4048347.85,
		"hash": "d2356b15023bda51f55b16b547d5048ea897ce22139533707a3f4eae92868c36"
	},
	{
		"id": "2b24cb277809",
		"ts": "2026-08-30T06:27:18.471Z",
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
		"liquidityUsd": 571915.09,
		"hash": "2b24cb2778096c31a56dccddf7eaf7965af348521ab60d8ace714b64e9ca8660"
	},
	{
		"id": "74900b7e4a59",
		"ts": "2026-08-30T00:59:41.584Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 56,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "74900b7e4a594d0c89bc14feb4c8f89fc3d13899c9b146c27908a6f7bb8ad573"
	},
	{
		"id": "4576e22d46dd",
		"ts": "2026-08-30T01:00:00.302Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 44,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "4576e22d46dd9ab1ac3e6b5faaea8e40765468bbefed27009bd60e46d0d75266"
	},
	{
		"id": "ad5e6cea5751",
		"ts": "2026-08-30T01:00:18.917Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 48,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.04,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "ad5e6cea575129ac9bb738df5214f00c82c066718a06975c80db395d080458de"
	},
	{
		"id": "052ea55ccad6",
		"ts": "2026-08-30T01:00:37.685Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 48,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.04,
		"flags": [
			"no_dex_pair",
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "052ea55ccad6b1b2ea6dfc240861d3973b34dd90fa9a08125903be0d67e9f888"
	},
	{
		"id": "0286f320a795",
		"ts": "2026-08-30T01:00:37.991Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "0286f320a7956e1a79442ed3315e38859fe34c85b4bdba549caebdf4c0651c34"
	},
	{
		"id": "cb199336ee95",
		"ts": "2026-08-30T01:00:38.270Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"no_dex_pair",
			"modifiable_tax"
		],
		"liquidityUsd": 0,
		"hash": "cb199336ee95fad2e37a4d435285415be94ac1a910764ad57b728692927dc24e"
	},
	{
		"id": "16cca0719b4e",
		"ts": "2026-08-30T01:00:38.540Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 56,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced"
		],
		"liquidityUsd": 0,
		"hash": "16cca0719b4ed42c66e9187fc5694da7b59f4bbb8ba203f4567b3efd6cd2f032"
	},
	{
		"id": "7e835305d522",
		"ts": "2026-08-30T01:00:38.812Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 44,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "7e835305d5225b4d0e08a7c7781d080d21831d14774adb1e20803b8daa60cf12"
	},
	{
		"id": "68da0539b6a7",
		"ts": "2026-08-30T01:00:39.284Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"no_dex_pair",
			"sim_honeypot"
		],
		"liquidityUsd": 0,
		"hash": "68da0539b6a7b31e46919b8be91a466401434e8252f92261c074857c1c6561e0"
	},
	{
		"id": "6b3a7dfb1289",
		"ts": "2026-08-30T01:00:39.569Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair"
		],
		"liquidityUsd": 0,
		"hash": "6b3a7dfb1289dbfca79ad9f8d4049dc029335ab6af6942634b3c3294cbe44a3d"
	},
	{
		"id": "52b66d53c055",
		"ts": "2026-08-30T01:00:39.833Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 52,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.04,
		"flags": [
			"no_dex_pair",
			"high_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "52b66d53c055a8fc4faf10e01d1615a7c5824c5699cffc0b2bc907a7d3b305eb"
	},
	{
		"id": "50d9eb42d7d2",
		"ts": "2026-08-30T01:00:40.086Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 56,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced"
		],
		"liquidityUsd": 0,
		"hash": "50d9eb42d7d24044d51efb9533ee8668b010026b70c2ee3edb400beccfba1a03"
	},
	{
		"id": "09789abcc629",
		"ts": "2026-08-30T01:00:40.327Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "09789abcc62964a9ea8cc9679b520e4a192d3346e35bce64831255a75ab04b9b"
	},
	{
		"id": "b24334506d50",
		"ts": "2026-08-30T01:00:40.562Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "b24334506d50a8f59448cf9d1f60fa6ec57cc2c7c56cc99baa1d35fc06cc56ed"
	},
	{
		"id": "d2c447a7cc35",
		"ts": "2026-08-30T01:00:40.798Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "d2c447a7cc35bbba17d19b7771ee73224543559308bd94d58d5bb1244ccf3ea2"
	},
	{
		"id": "1c7e40c63a14",
		"ts": "2026-08-30T01:00:41.087Z",
		"symbol": "GHST",
		"token": "0xcD2F22236DD9Dfe2356D7C543161D4d260FD9BcB",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "1c7e40c63a1408ffee798d508a80583fe46ac0204e92a1eb7a8f341be0f760bc"
	},
	{
		"id": "2ec36f3ba421",
		"ts": "2026-08-30T01:00:41.324Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "2ec36f3ba421c15f13b422a7e5f6e5178f2ed969af869db87bea5dca15112571"
	},
	{
		"id": "5d6f7c298dd5",
		"ts": "2026-08-30T01:00:41.558Z",
		"symbol": "PROMPT",
		"token": "0x30c7235866872213F68cb1F08c37Cb9eCCB93452",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "5d6f7c298dd516decc141016923951d35ebceb15392bd16fa64159d55c059f8a"
	},
	{
		"id": "a6f582e4f3a5",
		"ts": "2026-08-30T01:00:41.793Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "a6f582e4f3a52843ac8dc6472b9c97a595841a7a7ba046c6e66d78f8481ebb38"
	},
	{
		"id": "d54aff0bde6d",
		"ts": "2026-08-29T22:16:49.868Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116067992.18,
		"hash": "d54aff0bde6dc33146c3517694b2ce88392a83aa164090f6bda0ce418e52cab4"
	},
	{
		"id": "72edc4ee57a8",
		"ts": "2026-08-29T22:16:50.352Z",
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
		"liquidityUsd": 18634042.4,
		"hash": "72edc4ee57a8db51c93d07c8a6467fb3dec4ec6730aa0bf02f76e5ba76bf2d1e"
	},
	{
		"id": "ceafb497c103",
		"ts": "2026-08-29T22:16:50.638Z",
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
		"liquidityUsd": 953538.84,
		"hash": "ceafb497c1031e2020e841917fc1cd6642c8dee23661073e82ccddc095cba8f8"
	},
	{
		"id": "eadbeac5351c",
		"ts": "2026-08-29T22:16:50.891Z",
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
		"liquidityUsd": 29007814.59,
		"hash": "eadbeac5351c4b75b1103165f9ce3378eeaebd7ac0ce61ee600088be0f3f86f5"
	},
	{
		"id": "17664c07a0b4",
		"ts": "2026-08-29T22:16:51.152Z",
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
		"liquidityUsd": 4095108.39,
		"hash": "17664c07a0b4b2ff5800e20343381a93b1f72aac71771c19c51ee4df274db283"
	},
	{
		"id": "576ca6944ff5",
		"ts": "2026-08-29T22:16:51.398Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1156633.04,
		"hash": "576ca6944ff518bc9ab48b0977579a5c9920803e57cd285c3686b621728290a4"
	},
	{
		"id": "5d53e564e591",
		"ts": "2026-08-29T22:16:51.655Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29007814.59,
		"hash": "5d53e564e591695722a1961fe64886797698cb87217302f913f2174fafcdb694"
	},
	{
		"id": "9fc913efb901",
		"ts": "2026-08-29T22:16:51.898Z",
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
		"liquidityUsd": 3897384.19,
		"hash": "9fc913efb901a6962a5fe9a61b62b1c0d0076bf1892ef3888bbe0b17d2d88f78"
	},
	{
		"id": "d03f2a0ca18e",
		"ts": "2026-08-29T22:16:52.153Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1346619.33,
		"hash": "d03f2a0ca18eeafe8446134e97d4cc0320c9c1b4af9284d796eb3b7eaa18f338"
	},
	{
		"id": "0f42c3070d10",
		"ts": "2026-08-29T22:16:52.424Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 633311.65,
		"hash": "0f42c3070d10033f90a6d2b910c49fc7571b541d6b56df24566f663a23ca2690"
	},
	{
		"id": "37bb5c5d4ec3",
		"ts": "2026-08-29T22:16:52.654Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1330613.1,
		"hash": "37bb5c5d4ec3c9c9e7217135fda1702c1fc4694b546c508b8e518e3ee92805b9"
	},
	{
		"id": "eeb5eb3dc1e1",
		"ts": "2026-08-29T22:16:52.882Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 136247.27,
		"hash": "eeb5eb3dc1e1e9b4ac5f3593db958ce3e3128854b973dfdbeb7c6496bdaa7ef2"
	},
	{
		"id": "9f7e829dbd8b",
		"ts": "2026-08-29T22:16:53.110Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3571848.73,
		"hash": "9f7e829dbd8bf69a5c2050cc84b774e17fefa03ba68803b70d78e4ee8e509b90"
	},
	{
		"id": "ad7b3edc17c3",
		"ts": "2026-08-29T22:16:53.338Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 122714.58,
		"hash": "ad7b3edc17c382e3fca584fb3db0eb2dc20904d8564135b0ef531356ba76354b"
	},
	{
		"id": "c00086155c01",
		"ts": "2026-08-29T22:16:53.610Z",
		"symbol": "GHST",
		"token": "0xcD2F22236DD9Dfe2356D7C543161D4d260FD9BcB",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 781671.46,
		"hash": "c00086155c01002589d4781703c63ab8d083eaa773160c46c40ace027db69b0b"
	},
	{
		"id": "bf2541bc5f3a",
		"ts": "2026-08-29T22:16:53.838Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 413303.02,
		"hash": "bf2541bc5f3ae8d76933edd6887303d743f5945c37e4ddd0cfbdd15c5d1c190c"
	},
	{
		"id": "c3779d3889c5",
		"ts": "2026-08-29T22:16:54.067Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4071931.47,
		"hash": "c3779d3889c5a0dc4cfa0e4b621a710c5202a504049defc8da6010977cad4226"
	},
	{
		"id": "32673941f38b",
		"ts": "2026-08-29T22:16:54.293Z",
		"symbol": "PROMPT",
		"token": "0x30c7235866872213F68cb1F08c37Cb9eCCB93452",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 122583.16,
		"hash": "32673941f38b3571e3ca5b2def7a8eeda96f69706cba58989875be24e9b69eb8"
	},
	{
		"id": "629146c281a2",
		"ts": "2026-08-29T22:16:54.521Z",
		"symbol": "BASELINE",
		"token": "0xb20000000000000000000000c6f9024862C6fb01",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 74156.21,
		"hash": "629146c281a2215dc42ab153b7f863f9bdac34320887258fd7dbe9fb6671bda7"
	},
	{
		"id": "30442f169d41",
		"ts": "2026-08-29T19:08:22.418Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116061581.29,
		"hash": "30442f169d41c45c2b310ced8bdbea9230db446ad87167de3eb6296afd52c6b1"
	},
	{
		"id": "36879059f271",
		"ts": "2026-08-29T19:08:22.765Z",
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
		"liquidityUsd": 18445813.08,
		"hash": "36879059f27172f26fb9c778458f1252a5906ef7fe5f255a18ef750590ba1a00"
	},
	{
		"id": "3bcab1d3abcf",
		"ts": "2026-08-29T19:08:23.086Z",
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
		"liquidityUsd": 955251.5,
		"hash": "3bcab1d3abcfc614a121b53aa90f531c8ad0cc94ca9e88ca36c3701237af7c0d"
	},
	{
		"id": "5272f09ba75d",
		"ts": "2026-08-29T19:08:23.289Z",
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
		"liquidityUsd": 29053128.11,
		"hash": "5272f09ba75d9c42caacf9e26aa584f890fd774c8172be931c11ee971945f56a"
	},
	{
		"id": "82421df7d32d",
		"ts": "2026-08-29T19:08:23.487Z",
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
		"liquidityUsd": 4105039.34,
		"hash": "82421df7d32d792bdd16b5ebe560f8e003ecb4383a5d850e2e652f841ea31b77"
	},
	{
		"id": "8f7c440cf193",
		"ts": "2026-08-29T19:08:23.694Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1155334.26,
		"hash": "8f7c440cf19324bb4c1a9c02bf8d4eb29b96aaa6f3ac5ebef70895f7c6f6a2ee"
	},
	{
		"id": "001a5aebce2f",
		"ts": "2026-08-29T19:08:23.926Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29053128.11,
		"hash": "001a5aebce2fa019f3ea6337cb48144861df9fd3ebb64000c6c15972da0fd1cc"
	},
	{
		"id": "93288ec44002",
		"ts": "2026-08-29T19:08:24.133Z",
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
		"liquidityUsd": 3899860,
		"hash": "93288ec440026e63967f96e4d2978a14de5522374da4a76a57f24fa5a193e161"
	}
]
