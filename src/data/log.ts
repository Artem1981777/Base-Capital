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
	"updatedAt": "2026-08-16T19:18:17.888Z",
	"tokensScored": 10975,
	"verdictsIssued": 10975,
	"safe": 9560,
	"risky": 824,
	"likelyRug": 591,
	"ticks": 656
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "feb2bd33757f",
		"ts": "2026-08-16T19:18:13.638Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111502951.75,
		"hash": "feb2bd33757f4b3ffa85beb140fff231e3656e67112395fc9792c8fef5e6fee4"
	},
	{
		"id": "619d2bfb7d47",
		"ts": "2026-08-16T19:18:13.948Z",
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
		"liquidityUsd": 17019207.87,
		"hash": "619d2bfb7d47bb025c09f19a8d844c0e709a2c6e842a52e6f965c80541fcbcf2"
	},
	{
		"id": "07a588d62234",
		"ts": "2026-08-16T19:18:14.158Z",
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
		"liquidityUsd": 800682.26,
		"hash": "07a588d62234c5bade72a3df085164c5d96d6b9a95199fc9f8cc151e736c1484"
	},
	{
		"id": "08a540bf2001",
		"ts": "2026-08-16T19:18:14.564Z",
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
		"liquidityUsd": 26840138.61,
		"hash": "08a540bf2001bfb1a25ddb718fcdc06247bb3b533560eafc7e0141c9ad3dd467"
	},
	{
		"id": "8ae470759463",
		"ts": "2026-08-16T19:18:14.768Z",
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
		"liquidityUsd": 4160385.02,
		"hash": "8ae4707594631ffec229e99e5a35fe9aed17afea1f1d863d5fee989e8a7fca15"
	},
	{
		"id": "7a986a51e993",
		"ts": "2026-08-16T19:18:14.977Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 888375.78,
		"hash": "7a986a51e99351aa887f8958c8406a578ca99806c3f945d48588ae06944417dc"
	},
	{
		"id": "a9f60178d3bf",
		"ts": "2026-08-16T19:18:15.195Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6199365.94,
		"hash": "a9f60178d3bf37cf7484c9a359da24a707d5d11877430226c8cedc32e4162ef0"
	},
	{
		"id": "d4c556e3270c",
		"ts": "2026-08-16T19:18:15.395Z",
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
		"liquidityUsd": 3646440.21,
		"hash": "d4c556e3270cc6770122c6a33db333bb66973f98bf511bc17d7d957f14bdfc0f"
	},
	{
		"id": "8510abc71137",
		"ts": "2026-08-16T19:18:15.595Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 97903.77,
		"hash": "8510abc711374167693bca234a354889d062c6c51df577f665469b7e4d32c81d"
	},
	{
		"id": "f90e7db3a26f",
		"ts": "2026-08-16T19:18:15.945Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 48.28,
		"hash": "f90e7db3a26f7b98a3fb57e408b95b949606cec9f48b7176b2a7e337d759242d"
	},
	{
		"id": "4aaa9100fd1b",
		"ts": "2026-08-16T19:18:16.150Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 270897.68,
		"hash": "4aaa9100fd1bba8c32d8b46516e434568c5141993aa1c6c3a7609eae1afb56b5"
	},
	{
		"id": "c8aea9e62a24",
		"ts": "2026-08-16T19:18:16.334Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6206206.01,
		"hash": "c8aea9e62a24d9fbe3c75ea17c9f1cad1eb61cea9d8b68271a52f905f106d284"
	},
	{
		"id": "b65d9e49b62a",
		"ts": "2026-08-16T19:18:16.540Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1021229.92,
		"hash": "b65d9e49b62a025f1aea1e2e5cd13e108af76da576f36c485299843c550b9985"
	},
	{
		"id": "c761a2e53295",
		"ts": "2026-08-16T19:18:16.727Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2465420.4,
		"hash": "c761a2e532956570665718054e33ca8f539bb04ef2bbdf3824b8aebf17652796"
	},
	{
		"id": "e6fb7558768a",
		"ts": "2026-08-16T19:18:16.924Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 245904.63,
		"hash": "e6fb7558768afeb6eb750e94124df7ce6ed9fbac99137b178a6effdb64238fde"
	},
	{
		"id": "ae59af45fef4",
		"ts": "2026-08-16T19:18:17.110Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 349007.14,
		"hash": "ae59af45fef4bf649373a746f11c327284915eb23e6dcf7f49edcff77f6c041e"
	},
	{
		"id": "9f7c956c7578",
		"ts": "2026-08-16T19:18:17.313Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 69974.49,
		"hash": "9f7c956c7578b975b0b40fb9e763ceb163b93cb875fc893c19732ed10406c83d"
	},
	{
		"id": "47eb1a3eb65c",
		"ts": "2026-08-16T19:18:17.498Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 895704.36,
		"hash": "47eb1a3eb65cffdb635758dbce771c30862f8345d4650f95136dfed273071c0a"
	},
	{
		"id": "89e0de5dcc93",
		"ts": "2026-08-16T19:18:17.701Z",
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
		"liquidityUsd": 602254.65,
		"hash": "89e0de5dcc931dae9c4d27bcb82930bfca8f3aba2b7ff2b5edbd4dcef7b90bc6"
	},
	{
		"id": "f108654842c1",
		"ts": "2026-08-16T19:18:17.888Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 632632.8,
		"hash": "f108654842c1c6f68fe68b5fd2aad1a723241ee041c41e955ef1447ec2252a35"
	},
	{
		"id": "aa383210754d",
		"ts": "2026-08-16T18:22:20.072Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111502563.52,
		"hash": "aa383210754d6ffd9e12f6d31e5232067da408e3861c0eb361aa74eb25fe2e4e"
	},
	{
		"id": "504417ddae4d",
		"ts": "2026-08-16T18:22:20.447Z",
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
		"liquidityUsd": 17745730.93,
		"hash": "504417ddae4d8a4438d07e2307b45fdfa3cdfaa344332a6d7b4794f2dc076b36"
	},
	{
		"id": "94475f958f19",
		"ts": "2026-08-16T18:22:20.678Z",
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
		"liquidityUsd": 800682.26,
		"hash": "94475f958f1958f9ee5a4b50e23fbb2a134691b5cd41914e891e533e709ab82b"
	},
	{
		"id": "fd08dd6d9346",
		"ts": "2026-08-16T18:22:20.869Z",
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
		"liquidityUsd": 26831997.97,
		"hash": "fd08dd6d93461ff2ff927331d4af34fb488ab29d313cbb05e8c7f398b9c3096a"
	},
	{
		"id": "a7c9a9c3ac62",
		"ts": "2026-08-16T18:22:21.068Z",
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
		"liquidityUsd": 4160376.27,
		"hash": "a7c9a9c3ac629fa9ae6146c664fbf735894fc9d146c9694d8d130758f9841e02"
	},
	{
		"id": "8839b2507a5a",
		"ts": "2026-08-16T18:22:21.261Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 888460.6,
		"hash": "8839b2507a5ab862b87941d33341791945bf0e18d4b40fa97f1e65b2a9b2e628"
	},
	{
		"id": "f6b579dc61c4",
		"ts": "2026-08-16T18:22:21.462Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6160292.11,
		"hash": "f6b579dc61c4c8ae9e64dfca3533dcaa5adc481f4f9666c809d1cd40387424a9"
	},
	{
		"id": "a54daff1b852",
		"ts": "2026-08-16T18:22:21.667Z",
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
		"liquidityUsd": 3645009.97,
		"hash": "a54daff1b8524bc21df38aa76a40967d3d6dea5e7c4cb7a26ef9a5f64438e567"
	},
	{
		"id": "70409454c588",
		"ts": "2026-08-16T18:22:21.871Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 114953.31,
		"hash": "70409454c58808588e938b104006447a6b9add406d8fe2d1d0708bc889083ce3"
	},
	{
		"id": "45a6250143ea",
		"ts": "2026-08-16T18:22:22.052Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 56.7,
		"hash": "45a6250143ea2e6ed163bf5e8c5cbb8a8d21e501c99e18c03d458c6ae9933770"
	},
	{
		"id": "086c0c31e089",
		"ts": "2026-08-16T18:22:22.245Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 273396.89,
		"hash": "086c0c31e089a699bac7180417d928a2dc97bc77b95c640f55c0cc152abbc11c"
	},
	{
		"id": "61996e6d9a11",
		"ts": "2026-08-16T18:22:22.433Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6160292.11,
		"hash": "61996e6d9a1125043472da899d693355503874223ffe3fbdabb2e85e97d69f34"
	},
	{
		"id": "e444015df0e0",
		"ts": "2026-08-16T18:22:22.635Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1026097.09,
		"hash": "e444015df0e028263b3a2907fdfc9562cca619f65f2df517a4f842e3a105ac17"
	},
	{
		"id": "5a3da7206281",
		"ts": "2026-08-16T18:22:22.822Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2475247.8,
		"hash": "5a3da720628178e375b2543090e761a137bea67cdaa480317e403e4cb50bf6fe"
	},
	{
		"id": "ad6470b54284",
		"ts": "2026-08-16T18:22:23.026Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 350795.66,
		"hash": "ad6470b54284a9b4b94e7effc3ad6dc0d927e6b1194355c09b85aaadc9cc301c"
	},
	{
		"id": "97032d47d1fc",
		"ts": "2026-08-16T18:22:23.203Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 261609.94,
		"hash": "97032d47d1fc346c1a1c4d4fffe65821f2244ece5d16d892114ba5f54dce18b1"
	},
	{
		"id": "bcb08a35d2ab",
		"ts": "2026-08-16T18:22:23.414Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 894803.82,
		"hash": "bcb08a35d2ab9a85bccca21d5c8ab672ffb8a1cd1c3c779bbe5b72b68a85dabe"
	},
	{
		"id": "5ef7bba76473",
		"ts": "2026-08-16T18:22:23.621Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 86514.35,
		"hash": "5ef7bba76473680baf9dbad6be0104d852f1a1a3ba7a37597d5789ab82f9198d"
	},
	{
		"id": "ea696da72158",
		"ts": "2026-08-16T18:22:23.829Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9475561.22,
		"hash": "ea696da72158203698676ca10245fcecf9168e33285bd799aeacb0d10c058113"
	},
	{
		"id": "231f9aeaf359",
		"ts": "2026-08-16T18:22:24.022Z",
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
		"liquidityUsd": 590677.83,
		"hash": "231f9aeaf359744e476171eb1592f16c8f165e366df328a2b4af1a25535a2da5"
	},
	{
		"id": "d656398a98c6",
		"ts": "2026-08-16T17:15:42.533Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111503546.92,
		"hash": "d656398a98c6eafc98aee7171b7b1d0d14e5c6704e7deec7363637f3efa4a09d"
	},
	{
		"id": "4e21773c6f7b",
		"ts": "2026-08-16T17:15:42.733Z",
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
		"liquidityUsd": 17083126.4,
		"hash": "4e21773c6f7b91727303e17ced81a28083fec2f754231e2152c7b14429c876bd"
	},
	{
		"id": "4dcb3036269c",
		"ts": "2026-08-16T17:15:42.928Z",
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
		"liquidityUsd": 800682.26,
		"hash": "4dcb3036269c44be6733e741b9936d2da6006473ce2185ca46c237ac820768b1"
	},
	{
		"id": "92153ec44f16",
		"ts": "2026-08-16T17:15:43.123Z",
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
		"liquidityUsd": 26845175.72,
		"hash": "92153ec44f166d513bd1395ffa060cbfa8846056ea02d780f412010d6b2c39e8"
	},
	{
		"id": "8fd6eb2061fa",
		"ts": "2026-08-16T17:15:43.321Z",
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
		"liquidityUsd": 4165934.22,
		"hash": "8fd6eb2061fa644f0b0d0005d32d7a5dc7878e33c4d1e8e7c8f76f625d4341fa"
	},
	{
		"id": "786cd4684fc5",
		"ts": "2026-08-16T17:15:43.514Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 888460.6,
		"hash": "786cd4684fc52e450d30a468f35091908c4ff92eb281fa86fb3a203b6f02e534"
	},
	{
		"id": "ac040fcb5373",
		"ts": "2026-08-16T17:15:43.708Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5990185.09,
		"hash": "ac040fcb53737fd113a1c622c2a72f3722f4acc558080da442cc600fafe102f5"
	},
	{
		"id": "94afe4cd4ccf",
		"ts": "2026-08-16T17:15:43.908Z",
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
		"liquidityUsd": 3649579.85,
		"hash": "94afe4cd4ccf00bfc9e22c6fcc84a1b7d2ddd1435352c872107be0991fb091be"
	},
	{
		"id": "abf3b3441462",
		"ts": "2026-08-16T17:15:44.281Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 75009.91,
		"hash": "abf3b3441462c6dd5148084faadad04340166fac5eb9dae6008c9783f9198709"
	},
	{
		"id": "1c3e8b42f3fb",
		"ts": "2026-08-16T17:15:44.473Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 267991.34,
		"hash": "1c3e8b42f3fb923b18bebe1ffc6cfcdf0c8c3a82454a28eaf3f20d4b00395dd9"
	},
	{
		"id": "6659680f62d9",
		"ts": "2026-08-16T17:15:44.653Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 9.15,
		"hash": "6659680f62d906f7e855f0a4a375e29fb41e17ecbf331755ffa1da55cf266bfe"
	},
	{
		"id": "230d03fba534",
		"ts": "2026-08-16T17:15:44.831Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2501487.92,
		"hash": "230d03fba534d4afba497ad47cd9769dd481abe7e824ce0ab4d8ba086ac9ea95"
	},
	{
		"id": "1d6e8425e0bd",
		"ts": "2026-08-16T17:15:45.014Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5990185.09,
		"hash": "1d6e8425e0bd60d05e038ea66eb29ad2b8aa7ca04b1509f49699742622f1bdeb"
	},
	{
		"id": "9c8c8cd23fbd",
		"ts": "2026-08-16T17:15:45.192Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1026254.72,
		"hash": "9c8c8cd23fbdbba134647a9c7af6ea5600ed3fa1e9b505250d59abfba619ee89"
	},
	{
		"id": "ff2992a79e14",
		"ts": "2026-08-16T17:15:45.371Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 260251.3,
		"hash": "ff2992a79e14f0c6b6ed96414f567486de227135ae06a171bf96d85f237ec79c"
	},
	{
		"id": "80c7abc2adbc",
		"ts": "2026-08-16T17:15:45.553Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 895263.8,
		"hash": "80c7abc2adbc4c1d957ddaebc075edc0986d3375fc204a185de9ca333a150364"
	},
	{
		"id": "6015bc413e93",
		"ts": "2026-08-16T17:15:45.735Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 349199.4,
		"hash": "6015bc413e935e38f7c74668382c7f26d4f58cf54e9c2dcb3595fa91d030db5f"
	},
	{
		"id": "5ba07ee99f80",
		"ts": "2026-08-16T17:15:45.918Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 68339.37,
		"hash": "5ba07ee99f800cf62ec9e5c5ad82053fb0e29092ec3de0d2c8d766ed232a98fd"
	},
	{
		"id": "8ede86f9c6d1",
		"ts": "2026-08-16T17:15:46.098Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9486186.76,
		"hash": "8ede86f9c6d1590c9012d1e330574e7a7b60fc8c4244c7f98b8051a354480e29"
	},
	{
		"id": "b27700b98691",
		"ts": "2026-08-16T17:15:46.281Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 624095.67,
		"hash": "b27700b986918ae84dc7a6861e92c60131b380767905959d2680c00d6ed46260"
	},
	{
		"id": "d3ee6173f2d9",
		"ts": "2026-08-16T16:19:04.420Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111386474.45,
		"hash": "d3ee6173f2d9c4c03e102516936a690821d315742dddd505ea11bb36c445c835"
	},
	{
		"id": "8013b4a3b531",
		"ts": "2026-08-16T16:19:04.872Z",
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
		"liquidityUsd": 17048040.73,
		"hash": "8013b4a3b531b6d22760b955caf0ac9d66181e4a4f843a7442e9c4cae91e36b0"
	},
	{
		"id": "8f6cf3bbd438",
		"ts": "2026-08-16T16:19:05.187Z",
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
		"liquidityUsd": 800682.26,
		"hash": "8f6cf3bbd438f88bd0c5d7857c7305091f2901f0f447029c1f06cf532d6d605e"
	},
	{
		"id": "bc195b537f33",
		"ts": "2026-08-16T16:19:05.472Z",
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
		"liquidityUsd": 26791430.34,
		"hash": "bc195b537f337eb54f9a9b558e37f53ab4c2c421ee7858390f770dc0e8c197cb"
	},
	{
		"id": "98dd337632a8",
		"ts": "2026-08-16T16:19:05.785Z",
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
		"liquidityUsd": 4148872.8,
		"hash": "98dd337632a8ebacf6fd6059f6b384f8bd43dad8971cdfffaf07697b1b81d263"
	},
	{
		"id": "b83359614da6",
		"ts": "2026-08-16T16:19:06.046Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 888460.6,
		"hash": "b83359614da68b539e97264bd485d649e0dcf965860c71dd49ed89b3020fbd41"
	},
	{
		"id": "f34aea6e6655",
		"ts": "2026-08-16T16:19:06.350Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6108267.01,
		"hash": "f34aea6e66555a109b96b6160213407b471a18668011dd2ad40b36d8ad8949c2"
	},
	{
		"id": "08703770847b",
		"ts": "2026-08-16T16:19:06.622Z",
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
		"liquidityUsd": 3643664.62,
		"hash": "08703770847b55d5d7186d7697743f528462158845eb4acf259ece33743702da"
	},
	{
		"id": "a47240f3f95a",
		"ts": "2026-08-16T16:19:06.868Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 268568.22,
		"hash": "a47240f3f95aab41e92c5ac39031aca8e6aca4a4acbdaaaa993df0452533558f"
	},
	{
		"id": "a46ed37969e1",
		"ts": "2026-08-16T16:19:07.110Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 7.97,
		"hash": "a46ed37969e117b5d28d8008d6ae3aedc27daebd4380f8e3453cbca632450a7b"
	},
	{
		"id": "cbcbbb992f27",
		"ts": "2026-08-16T16:19:07.323Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 95741.33,
		"hash": "cbcbbb992f27f0e6eeee985760b5401a191b1c8127cf9b91393053f8387aa1df"
	},
	{
		"id": "68f657424d8c",
		"ts": "2026-08-16T16:19:07.534Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2492937.19,
		"hash": "68f657424d8c8573070d0620748221c51e334d20d6979b7679e9835a21ddd0d2"
	},
	{
		"id": "7b75f86e857a",
		"ts": "2026-08-16T16:19:07.766Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 177803.01,
		"hash": "7b75f86e857a1be4b28c0ab7d56dd8b94534f4def2a801d5126fc0f9dcb20478"
	},
	{
		"id": "6ce45f8d5dd1",
		"ts": "2026-08-16T16:19:07.993Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1034871.95,
		"hash": "6ce45f8d5dd1421b9091d40b62250540cdbd414fcde7f1e8fade3db300e99e7b"
	},
	{
		"id": "5ac37e0813c6",
		"ts": "2026-08-16T16:19:08.205Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6108267.01,
		"hash": "5ac37e0813c6efbe1be147e5ba0183b39aa585d9a3d588795fb037691a79f8d1"
	},
	{
		"id": "d845f6e2f568",
		"ts": "2026-08-16T16:19:08.415Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 894222.88,
		"hash": "d845f6e2f56810ce61acbf22f6fcfe079dd58164fde02f7deddbe1edd272c16a"
	},
	{
		"id": "fcd8d2542f94",
		"ts": "2026-08-16T16:19:08.645Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 353939.01,
		"hash": "fcd8d2542f945fc1a1d11dde852b7ee31c64ac5e706ad7cbe40fa6fae358be8d"
	},
	{
		"id": "f6f0ee9fa65e",
		"ts": "2026-08-16T16:19:08.871Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 74575,
		"hash": "f6f0ee9fa65ecc37f1202f2ece04182d4ebaffa9d4d739b9cc6c05c08f095368"
	},
	{
		"id": "ed711474c5ab",
		"ts": "2026-08-16T16:19:09.087Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9483695.94,
		"hash": "ed711474c5ab2adf95c1f2d685c7f0452e757e08cdcd5f70013257859b0c25ff"
	},
	{
		"id": "6f29209df774",
		"ts": "2026-08-16T16:19:09.296Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 622030.1,
		"hash": "6f29209df774381f6d30da1e00578d4a41aa3f79d31148ea4a51a6bcdddcd430"
	},
	{
		"id": "19c3884b4484",
		"ts": "2026-08-16T15:17:26.145Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111302996.01,
		"hash": "19c3884b448402a7e46b4c15aae11d379f98248f9d60a24d9eecd61486787164"
	},
	{
		"id": "d60ec680d5ba",
		"ts": "2026-08-16T15:17:26.982Z",
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
		"liquidityUsd": 17029050.18,
		"hash": "d60ec680d5bae126ae02ac2ae4914c8c1345e57cbaa401c652ed859d695e8b68"
	},
	{
		"id": "5e8bd026bafa",
		"ts": "2026-08-16T15:17:27.444Z",
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
		"liquidityUsd": 800682.26,
		"hash": "5e8bd026bafabd00af25feb02141ede0e9e190941c72ffdfc93e550706c18e20"
	},
	{
		"id": "05d565c45029",
		"ts": "2026-08-16T15:17:27.893Z",
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
		"liquidityUsd": 26683675.87,
		"hash": "05d565c4502999779322756cceef112f52c84902946fc9d989012258f42338b5"
	},
	{
		"id": "71cd1a03e9b2",
		"ts": "2026-08-16T15:17:28.332Z",
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
		"liquidityUsd": 4148872.8,
		"hash": "71cd1a03e9b2c5a52c96a471148c7e352727d2a1e2877db3bca898e813aeef86"
	},
	{
		"id": "b84c1a5fea57",
		"ts": "2026-08-16T15:17:28.594Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 888460.6,
		"hash": "b84c1a5fea57385a1f53b93b29b121359683f0d7b6119372da30bcdaa1e46b58"
	},
	{
		"id": "dff7d108dd1f",
		"ts": "2026-08-16T15:17:28.844Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6150530.53,
		"hash": "dff7d108dd1fc6620af2605a05cce31e066c146d9e406fc28b817d66f464a0ca"
	},
	{
		"id": "c1b7abaa3e90",
		"ts": "2026-08-16T15:17:29.302Z",
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
		"liquidityUsd": 3611165.18,
		"hash": "c1b7abaa3e9003d5e9401d4dc8a896d255b01c93eeae513857838db6534e9f43"
	},
	{
		"id": "c01f3915f265",
		"ts": "2026-08-16T15:17:29.550Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 267551.87,
		"hash": "c01f3915f26503a0c0ba3b11739f3b27a907ce2dd3eb9105aec0bf8263965f73"
	},
	{
		"id": "deb0f1e8bb3c",
		"ts": "2026-08-16T15:17:29.997Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 7.02,
		"hash": "deb0f1e8bb3c688eac3862f326f7d52b6fb15e96ef39e7a7aac37f9afa4a8c1e"
	},
	{
		"id": "ad5b2263bc30",
		"ts": "2026-08-16T15:17:30.222Z",
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
		"liquidityUsd": 2522407.13,
		"hash": "ad5b2263bc30d526ff6a35a7ed85b5824644cd7e708ebe837018935688b74867"
	},
	{
		"id": "1c18e543fa79",
		"ts": "2026-08-16T15:17:30.451Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 162085.11,
		"hash": "1c18e543fa79d75086dbb16c9167b6795fadf4c4da1c52bf00a7ff06a7ca5c40"
	},
	{
		"id": "450ecb278149",
		"ts": "2026-08-16T15:17:30.682Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 57246.79,
		"hash": "450ecb27814950893174589e3e215f6d8a4b553ba1cdbe904d3f3a8adb5046ae"
	},
	{
		"id": "5b76cc051df3",
		"ts": "2026-08-16T15:17:30.911Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6157255.16,
		"hash": "5b76cc051df3c1e756d97f4a029aed644dd129844b28e28439c0a84b1730deb9"
	},
	{
		"id": "ae93cb719ae2",
		"ts": "2026-08-16T15:17:31.142Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 890280.68,
		"hash": "ae93cb719ae2b7a730b9e0f03dea1b56cf076a06ba1f2a72f344af2631c2194f"
	},
	{
		"id": "c1745713dced",
		"ts": "2026-08-16T15:17:31.373Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1057300.81,
		"hash": "c1745713dced1599f20d10d8252b0aa755115a0e468048dc5f56fd7fd9c48494"
	},
	{
		"id": "3357f671b0f3",
		"ts": "2026-08-16T15:17:31.606Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 347313.17,
		"hash": "3357f671b0f3c521c1245ac7f320556227ca0d5084e70ea25ae2e439d8fcc48d"
	},
	{
		"id": "3257edc3114c",
		"ts": "2026-08-16T15:17:31.837Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 136797.33,
		"hash": "3257edc3114cd69ce10994f37135f90b823d586dcba830eaf8f6b3b1e742a34a"
	},
	{
		"id": "b92f1c8f0f2b",
		"ts": "2026-08-16T15:17:32.149Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9468121.1,
		"hash": "b92f1c8f0f2bf7cc813721b26fb63304e0e3356c4f91a66f32d2e4ead338369a"
	},
	{
		"id": "dea7eafdb0d3",
		"ts": "2026-08-16T15:17:32.377Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 621255.27,
		"hash": "dea7eafdb0d3f4959851b2f8b1074a397a6e96329bc3369866c5e9acad403993"
	},
	{
		"id": "0f89f137c2f2",
		"ts": "2026-08-16T14:17:57.880Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111311996.2,
		"hash": "0f89f137c2f24c159e1a26b3c537cc00ff517d754085b7080b31436d3bcb6a1b"
	},
	{
		"id": "ed5e17547424",
		"ts": "2026-08-16T14:17:58.410Z",
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
		"liquidityUsd": 17004638.19,
		"hash": "ed5e17547424e62a55b86725dd1c06ac5f2c73c5a6920bddc29c9a1e9b6307f9"
	},
	{
		"id": "cfafcb7c5ed1",
		"ts": "2026-08-16T14:17:58.624Z",
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
		"liquidityUsd": 800682.26,
		"hash": "cfafcb7c5ed143acd7852602f27557957f15d683fb14e4b606fba5cb9ce5d5c7"
	},
	{
		"id": "88e111c5f6d2",
		"ts": "2026-08-16T14:17:59.010Z",
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
		"liquidityUsd": 26669282.3,
		"hash": "88e111c5f6d2c4026d165dd386f2a93c4e387117862099835a2d0483bc859fdc"
	},
	{
		"id": "03d790723e78",
		"ts": "2026-08-16T14:17:59.374Z",
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
		"liquidityUsd": 4148514.01,
		"hash": "03d790723e78bc286262208e82db54572b0d3625ef646e27a27d16a76958e55e"
	},
	{
		"id": "88fc07f5485a",
		"ts": "2026-08-16T14:17:59.586Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 887055.07,
		"hash": "88fc07f5485a46b558e79432abe884cd2a2e7a7e3b9f8ef549e012f3228597ec"
	},
	{
		"id": "0bfa04f6fc8d",
		"ts": "2026-08-16T14:17:59.791Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6003511.48,
		"hash": "0bfa04f6fc8d1f60197713c9dbe229e6f798976c8f10377a42ae1c80e668fd32"
	},
	{
		"id": "af41ac785ed1",
		"ts": "2026-08-16T14:18:00.171Z",
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
		"liquidityUsd": 3608882.24,
		"hash": "af41ac785ed14faa063a45f81e42826fe0d4b76b6a244e59203b3c0867d33548"
	},
	{
		"id": "305875be5cdf",
		"ts": "2026-08-16T14:18:00.387Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 266764.05,
		"hash": "305875be5cdf831ff5a142d50d1e06022404858b972a62e3f132779ce0b0584a"
	},
	{
		"id": "c446ba51f373",
		"ts": "2026-08-16T14:18:00.593Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2531874.12,
		"hash": "c446ba51f3732305a69f64bae464f4286ac55db1024ff0fce6b4da9475895ba1"
	},
	{
		"id": "d085869e85e4",
		"ts": "2026-08-16T14:18:01.371Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 7.25,
		"hash": "d085869e85e4523d80ba506244fbb687aaa0f0bbb09b9191a48319dec4f54fb6"
	},
	{
		"id": "eb325a6c9fe9",
		"ts": "2026-08-16T14:18:01.568Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 149442.33,
		"hash": "eb325a6c9fe93b62a116cb3e94bcb7431c58616c0b9ad32e8e118b367d159262"
	},
	{
		"id": "3c5758ff955f",
		"ts": "2026-08-16T14:18:01.764Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 6017874.4,
		"hash": "3c5758ff955f1f7a11a6887e5610e0ee1d008c87505c60e39d096212ca241aa0"
	},
	{
		"id": "5511b0d19640",
		"ts": "2026-08-16T14:18:02.385Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 55762.93,
		"hash": "5511b0d19640e7693e46afa4d2fa5565b657b572697ed0759119ad7b6113bdb8"
	},
	{
		"id": "08ce0dc441cc",
		"ts": "2026-08-16T14:18:02.591Z",
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
		"liquidityUsd": 890434.38,
		"hash": "08ce0dc441cc3b5fa04805647bd733fee136d1234e2dd0619a95b77dfdd9c377"
	},
	{
		"id": "156b89634f3b",
		"ts": "2026-08-16T14:18:02.808Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1043228.96,
		"hash": "156b89634f3ba8c5670b0bb6424d32a599df09174c36776eca92c6eaed45f5ff"
	},
	{
		"id": "6bee055999d5",
		"ts": "2026-08-16T14:18:03.019Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 362529.22,
		"hash": "6bee055999d5287ae471388c452dc1131d4b5a3638921fc6eccb99297540d534"
	},
	{
		"id": "b4be4674da3b",
		"ts": "2026-08-16T14:18:03.442Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 103690.69,
		"hash": "b4be4674da3bd1d5e4be509210a278910fa27a1f7c225231241dcca0dc6b9d09"
	},
	{
		"id": "e39082f365a4",
		"ts": "2026-08-16T14:18:03.645Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9449085.96,
		"hash": "e39082f365a42495367471da8fafd6621fa4f401e0ee3d4f6d2a70b7fbabbb62"
	},
	{
		"id": "d6ce2a9da4f0",
		"ts": "2026-08-16T13:27:38.529Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111315751.87,
		"hash": "d6ce2a9da4f0e0b72a2b2185157b8cc4bc45e3a1553badb259a345646be4073e"
	},
	{
		"id": "bfd65df8b29e",
		"ts": "2026-08-16T13:27:39.041Z",
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
		"liquidityUsd": 16990743.12,
		"hash": "bfd65df8b29e526d61f31ba93c8e393a2f43d1754220eebb1182b01ba79cc27b"
	},
	{
		"id": "f34fc184c62a",
		"ts": "2026-08-16T13:27:39.246Z",
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
		"liquidityUsd": 800682.26,
		"hash": "f34fc184c62adbd620d78aef7c62ba2193a790c1b7baa1b3b6b66fc4f9c6726b"
	},
	{
		"id": "bd4e41731c35",
		"ts": "2026-08-16T13:27:39.438Z",
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
		"liquidityUsd": 26635028.92,
		"hash": "bd4e41731c35ab4934b3ad3dcbb26b7a29cafd547f0ed8d04a163a6fa81c6354"
	},
	{
		"id": "0597d82db951",
		"ts": "2026-08-16T13:27:39.629Z",
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
		"liquidityUsd": 4148675.02,
		"hash": "0597d82db9517e162688d82cd6599c7bc09566b852078d51c463d49962022005"
	},
	{
		"id": "7b9757f4ad18",
		"ts": "2026-08-16T13:27:39.820Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 887055.07,
		"hash": "7b9757f4ad18aa75fda6af3abfab962c1a00acf7e618aac4dbc02001101cdff1"
	},
	{
		"id": "5eef4f25f50b",
		"ts": "2026-08-16T13:27:40.016Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6216043.4,
		"hash": "5eef4f25f50b67478e1af6df2b751c43ad432959ecb9269662ff5f69b2ce9b76"
	},
	{
		"id": "fc30cfb6c3f1",
		"ts": "2026-08-16T13:27:40.212Z",
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
		"liquidityUsd": 3557304.17,
		"hash": "fc30cfb6c3f17b6ded8eac5671d15a6cfb586a2f88044e0b2cbec74ea1943883"
	},
	{
		"id": "caa39c8089bc",
		"ts": "2026-08-16T13:27:40.411Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 266648.39,
		"hash": "caa39c8089bc7d04e731cf61a758e10a9b335b5885d463aeb0ce837261c8f381"
	},
	{
		"id": "b6fa23b2c6fd",
		"ts": "2026-08-16T13:27:40.611Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2534033.06,
		"hash": "b6fa23b2c6fdf721e4eeff22cac2fc57687bd238c68b05d3efe2879e669592ab"
	},
	{
		"id": "70c070e9e881",
		"ts": "2026-08-16T13:27:40.790Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 8.58,
		"hash": "70c070e9e8819f34169aa47ab504d507469d7d4f16eeddb9571ddce06332e04f"
	},
	{
		"id": "50c9b47a65dd",
		"ts": "2026-08-16T13:27:40.967Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6225330.64,
		"hash": "50c9b47a65dd05f72fd0df03b23e68fc540697efe3cd2e692fcd5514e86aa510"
	},
	{
		"id": "924457a50e3e",
		"ts": "2026-08-16T13:27:41.142Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 157904.69,
		"hash": "924457a50e3eb47b72c58947d111e24b93f1783c05011fc9927529c4e3e6a0dc"
	},
	{
		"id": "d09333cd1d77",
		"ts": "2026-08-16T13:27:41.324Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 58999.31,
		"hash": "d09333cd1d772771c2d3612a0519b071e80903c8e216e571b62ec8f205a891a5"
	},
	{
		"id": "9cf6fd15e6ac",
		"ts": "2026-08-16T13:27:41.505Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 890949.11,
		"hash": "9cf6fd15e6ac915a187f1004531ba889cc9de9e54fbadabc2c1c00b83a2fc9e4"
	},
	{
		"id": "67ab13e18e36",
		"ts": "2026-08-16T13:27:41.691Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1043963.69,
		"hash": "67ab13e18e36c231c4b71f4ce1cc717356465ecfd2283db5d82d2ccf037767b0"
	},
	{
		"id": "c08770118a03",
		"ts": "2026-08-16T13:27:41.887Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 363152.68,
		"hash": "c08770118a03f62963dbd51d196a2c16debc40e1b604615e7a817a335b35a1ca"
	},
	{
		"id": "a92d0943e916",
		"ts": "2026-08-16T13:27:42.072Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 87983.86,
		"hash": "a92d0943e916f0404c14d04ad16fa90ed63d9feee1e5f49902c86e3f3081b3d8"
	},
	{
		"id": "fb7a08546608",
		"ts": "2026-08-16T13:27:42.255Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9433003.18,
		"hash": "fb7a08546608b1e281ff1639b7d82b8b77d83e21320cbaa220c01b178811a2b8"
	},
	{
		"id": "2f6151d28884",
		"ts": "2026-08-16T12:31:01.257Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111338187.27,
		"hash": "2f6151d288840c1e4a57b0be3702d86b4ebe7b5b12072a9d7f2f3092ba0b496a"
	},
	{
		"id": "1ed258108e65",
		"ts": "2026-08-16T12:31:01.700Z",
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
		"liquidityUsd": 16983539.35,
		"hash": "1ed258108e656ca751627742844cb3e9942103183a56594bb163188a7d872743"
	},
	{
		"id": "9249846f8f8b",
		"ts": "2026-08-16T12:31:02.237Z",
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
		"liquidityUsd": 800682.26,
		"hash": "9249846f8f8b5d96210b6f193e693567a3f8218395308e4531dd20503e5ee309"
	},
	{
		"id": "49524729d78e",
		"ts": "2026-08-16T12:31:02.487Z",
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
		"liquidityUsd": 26619975.8,
		"hash": "49524729d78e71c34c5e16c006ca5e39c6499436220209b0f4ca8cefa676b9db"
	},
	{
		"id": "c4582f4fb0d9",
		"ts": "2026-08-16T12:31:02.742Z",
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
		"liquidityUsd": 4148675.02,
		"hash": "c4582f4fb0d9995c9b81b81d6befcb39bf2d404a928ebeb8b25a939627d472f7"
	},
	{
		"id": "5bd4055caede",
		"ts": "2026-08-16T12:31:02.971Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 887120.85,
		"hash": "5bd4055caede0dd5df88ccdb9d398608ce7adbbf9f26228aabaad334d6b495cf"
	},
	{
		"id": "65a776bb1fa6",
		"ts": "2026-08-16T12:31:03.223Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6133056.33,
		"hash": "65a776bb1fa6e542a5360c98a4768421cdc375d970e37ec518c2d3c647e93360"
	},
	{
		"id": "03bc90f39c78",
		"ts": "2026-08-16T12:31:03.519Z",
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
		"liquidityUsd": 3556850.05,
		"hash": "03bc90f39c789532976f9544059bb5dd279ddcdcc31374f25173fd2e4a981cf4"
	},
	{
		"id": "6fcb63aa9a0c",
		"ts": "2026-08-16T12:31:03.831Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 266317.65,
		"hash": "6fcb63aa9a0c9ad89f5c5f4127e1fae2daefa7e909c8e4288e7b6fe2f16d62b1"
	},
	{
		"id": "79bf79e7ba1c",
		"ts": "2026-08-16T12:31:04.101Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2575857.72,
		"hash": "79bf79e7ba1cb84f911ce576105fd5c8c61e284033c20341f2cbce791a46bdbb"
	},
	{
		"id": "91d782d5555a",
		"ts": "2026-08-16T12:31:04.311Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 8.51,
		"hash": "91d782d5555a195d3b8940fd17a1a4748ad107d1704a17f58a9d9fb5a5f940c3"
	},
	{
		"id": "c8db0a61e821",
		"ts": "2026-08-16T12:31:04.518Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 173236.02,
		"hash": "c8db0a61e82178e2ab703c4837783eb452b5950d349bfc14ef15d59af84fba9e"
	},
	{
		"id": "4d7e831afb4f",
		"ts": "2026-08-16T12:31:04.728Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6160991.7,
		"hash": "4d7e831afb4f66c13dfa9b068367385640b42ec8eaac577cfa461e25932b7055"
	},
	{
		"id": "3fd8d36165c3",
		"ts": "2026-08-16T12:31:04.952Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 75295.25,
		"hash": "3fd8d36165c3b3f7e4e8e366db28458adbc6c76eb60be4dd6b1e3c8e78ec1d4e"
	},
	{
		"id": "5dbd66771550",
		"ts": "2026-08-16T12:31:05.174Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 895186.32,
		"hash": "5dbd6677155042077719d05a6e82246f3a42547e987bda8af55757e70850896c"
	},
	{
		"id": "42fc11290bae",
		"ts": "2026-08-16T12:31:05.388Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1032769.58,
		"hash": "42fc11290bae08dc8aabe0525b5499b2455e4eb50bea0a32e99b891c7524ccfe"
	},
	{
		"id": "b2ab9d0c8c4e",
		"ts": "2026-08-16T12:31:05.596Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 367435.53,
		"hash": "b2ab9d0c8c4e6d679cf785f0f8e1ba1dc8936105a273ac8b80548dd6027a8058"
	},
	{
		"id": "dbf7f71f12ab",
		"ts": "2026-08-16T12:31:05.805Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 75184.17,
		"hash": "dbf7f71f12abc2a0d42bb561cc8cf77caf3e98494b7503350c0b7c6edc2d5f28"
	},
	{
		"id": "bcda5f2bc345",
		"ts": "2026-08-16T12:31:06.016Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9430803.72,
		"hash": "bcda5f2bc345556294695ab8d782e8b6ea9026797e4577f6014b90a46e1ba567"
	},
	{
		"id": "5f8bddf3925d",
		"ts": "2026-08-16T11:16:21.486Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111335310.53,
		"hash": "5f8bddf3925da7f653981a2bc42b6126c1f69ee70083ad704a15585f30838788"
	},
	{
		"id": "56d40644d662",
		"ts": "2026-08-16T11:16:21.958Z",
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
		"liquidityUsd": 16994191.45,
		"hash": "56d40644d66276a9cd354675bcce1c5b9b01e9aeacc86d34beca7fe8ae624516"
	},
	{
		"id": "47d26073e2cb",
		"ts": "2026-08-16T11:16:22.254Z",
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
		"liquidityUsd": 803901.89,
		"hash": "47d26073e2cb49b706989f4ea19c70c40e787fd4b819240e7e1c4d87e1e8f73f"
	},
	{
		"id": "6b0aef20edde",
		"ts": "2026-08-16T11:16:22.507Z",
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
		"liquidityUsd": 26620336.65,
		"hash": "6b0aef20edde7f5a8bd648ab2883532f546c96ede9328bec13881d218de425c5"
	},
	{
		"id": "068048cdee29",
		"ts": "2026-08-16T11:16:22.785Z",
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
		"liquidityUsd": 4148675.02,
		"hash": "068048cdee29d7695dd00ed42bcb6784fe0efc80742ae63ee719f5fe5f49abd7"
	},
	{
		"id": "7af044c41f6c",
		"ts": "2026-08-16T11:16:23.062Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 887120.85,
		"hash": "7af044c41f6c3a81074341c2ada026e853a404ce06400e5d1e3d300ca4c58da6"
	},
	{
		"id": "e1fee48f363d",
		"ts": "2026-08-16T11:16:23.316Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6172217.99,
		"hash": "e1fee48f363db42ab1f0a40f3053ba13371c88ecd9e4980eede70209846d2aca"
	},
	{
		"id": "9f6c6ecbc693",
		"ts": "2026-08-16T11:16:23.561Z",
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
		"liquidityUsd": 3557247.01,
		"hash": "9f6c6ecbc6936951e62d37acbaf17831b61e4ef09d4cd34df0c194cabac0a160"
	},
	{
		"id": "5accc803e0a9",
		"ts": "2026-08-16T11:16:23.809Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2568012,
		"hash": "5accc803e0a9ab7caef5cd5d215b5e685d334840d466ca727b968a473b2847b6"
	},
	{
		"id": "dc0c6b5a25b4",
		"ts": "2026-08-16T11:16:24.062Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 265775.1,
		"hash": "dc0c6b5a25b474b0b4fb37e06b0a157b3ae474bafcbf5a338171a5f84e37c0b0"
	},
	{
		"id": "bce4367b062b",
		"ts": "2026-08-16T11:16:24.294Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 168426.67,
		"hash": "bce4367b062b1667a0f68fa38089cdb57445dddecfbc9110ebcf909e7defa4a1"
	},
	{
		"id": "b41d7253c558",
		"ts": "2026-08-16T11:16:24.525Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 894509.25,
		"hash": "b41d7253c5582ca870fa62b4387ba307266cfb04cf72f9ddfad7574ae225fc9b"
	},
	{
		"id": "810915e82484",
		"ts": "2026-08-16T11:16:24.758Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6168427.66,
		"hash": "810915e82484ede9227fc66f886bde35be2884c7fd7be7639606d706f0525437"
	},
	{
		"id": "a4e421516189",
		"ts": "2026-08-16T11:16:24.989Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 8.23,
		"hash": "a4e421516189c42d8a7588a633468bf8826893281ed0f5e49af8314f7057d96f"
	},
	{
		"id": "ad8bdfb3e8d0",
		"ts": "2026-08-16T11:16:25.220Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1014006.37,
		"hash": "ad8bdfb3e8d09fbfcaf229e6a53578d81ae8352af53eafd49ba209917165c4c3"
	},
	{
		"id": "2f8838b505ca",
		"ts": "2026-08-16T11:16:25.452Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 93309.69,
		"hash": "2f8838b505ca163f110ce0b189adcf9151598e6f0fb15e74366ec3f1ca55e790"
	},
	{
		"id": "a6ca830691d8",
		"ts": "2026-08-16T11:16:25.682Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 369063.69,
		"hash": "a6ca830691d8f31bb6f5de1e450c586cb9e793e1ed1ab2ec991450aae9d05392"
	},
	{
		"id": "ed9c131ca51f",
		"ts": "2026-08-16T11:16:25.915Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 77691.93,
		"hash": "ed9c131ca51f37a0de673154442bcf2b16de474e1c096afc875aacbddb9f908c"
	},
	{
		"id": "3fef16c04c4d",
		"ts": "2026-08-16T11:16:26.147Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9442019.1,
		"hash": "3fef16c04c4d336646802aea7cecfa580dc8703a9372ab0ea2209224825c9e0b"
	},
	{
		"id": "16a85a6bf9ba",
		"ts": "2026-08-16T10:19:04.079Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111395114.33,
		"hash": "16a85a6bf9ba6561d181bb3ac2460a4bb3db57afe09ff5ad752c3842324f97f4"
	},
	{
		"id": "f9dd7daafee4",
		"ts": "2026-08-16T10:19:04.590Z",
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
		"liquidityUsd": 16986159.22,
		"hash": "f9dd7daafee43de7f838617ed870eb447f7db11344345a02d227c5b63a9f9145"
	},
	{
		"id": "3b88fc0c6e1c",
		"ts": "2026-08-16T10:19:04.847Z",
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
		"liquidityUsd": 806073.68,
		"hash": "3b88fc0c6e1c950b83ecd1c140abc6e5898bcf308b6d47a6d6edd85b621210bb"
	},
	{
		"id": "8e4eaeb275f5",
		"ts": "2026-08-16T10:19:05.140Z",
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
		"liquidityUsd": 26620286.53,
		"hash": "8e4eaeb275f5d352cb0900675a6fd42400a439427b46fd0329aaac5f829fcca1"
	},
	{
		"id": "416258c5b097",
		"ts": "2026-08-16T10:19:05.368Z",
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
		"liquidityUsd": 4150679.59,
		"hash": "416258c5b09729f0753b21ac72cb64ed293040d4d4885acd6493a82b5a4ee6c4"
	},
	{
		"id": "da93054f8eae",
		"ts": "2026-08-16T10:19:05.710Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 887120.85,
		"hash": "da93054f8eae45b24a3e8d1057b53f866b5c4d16c87c2ee5d91d7c6f6b25f5e1"
	},
	{
		"id": "f6d809777485",
		"ts": "2026-08-16T10:19:05.969Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6206819.33,
		"hash": "f6d8097774850d9abdd46177f8d06faeb1164b54505cb314a21b6218fda253e9"
	},
	{
		"id": "f211666e928f",
		"ts": "2026-08-16T10:19:06.205Z",
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
		"liquidityUsd": 3555298.84,
		"hash": "f211666e928f6d6d2cf9b92423be19e9c808cbd56d572c3e7fc75a541f058aea"
	},
	{
		"id": "6cee0a1fc362",
		"ts": "2026-08-16T10:19:06.431Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2569736.77,
		"hash": "6cee0a1fc3629578db8f3218848106db0fc7eeb2eeacedfb7f9b64f572e94422"
	},
	{
		"id": "a7afff919797",
		"ts": "2026-08-16T10:19:06.662Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 264236.93,
		"hash": "a7afff9197978363c214feb3bf6d8f4f7d3ed90bae491f330033a6a023b4ba17"
	},
	{
		"id": "40f49953c0fa",
		"ts": "2026-08-16T10:19:06.875Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 148341.51,
		"hash": "40f49953c0fa62ecb28b22e8f2820912ab7d1c65c417446f8ce084dcf8be2ef2"
	},
	{
		"id": "542a56ef6b04",
		"ts": "2026-08-16T10:19:07.087Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 894227.13,
		"hash": "542a56ef6b0413a81d34525c1dc5d5db0ff4689f22762650f6013682795456c9"
	},
	{
		"id": "81f73c36cc3e",
		"ts": "2026-08-16T10:19:07.304Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6207331.49,
		"hash": "81f73c36cc3e5f95427b67ebca74e7c534516beddcad540d8989310d6716c934"
	},
	{
		"id": "24539a19fb56",
		"ts": "2026-08-16T10:19:07.517Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 8.32,
		"hash": "24539a19fb56c0801ad3b663c7d3485d7f9c70c96f7ae8c1c05c43a459d9fe8e"
	},
	{
		"id": "f5b379c05584",
		"ts": "2026-08-16T10:19:07.729Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1026155.89,
		"hash": "f5b379c055845ced08a80aef72f398a354953f05d4b975563eacc9483f64dbe8"
	},
	{
		"id": "ddd1aa1f383c",
		"ts": "2026-08-16T10:19:07.945Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 367401.48,
		"hash": "ddd1aa1f383c5de50c9b77369b4cd2d7c2b7104a8973752e536e6f18dddf781e"
	},
	{
		"id": "d6a773826aff",
		"ts": "2026-08-16T10:19:08.178Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 81105.98,
		"hash": "d6a773826affa0ef7b3cbba395a9cfd2972584d88c01a6ad776543844d8d6f2f"
	},
	{
		"id": "f04e17e93557",
		"ts": "2026-08-16T10:19:08.391Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9435914.35,
		"hash": "f04e17e935576dd0bdae2e8514d0bc72989a4a0be514e12ca8d25cd5992146ac"
	},
	{
		"id": "b06ed54699b3",
		"ts": "2026-08-16T10:19:08.604Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 89569.89,
		"hash": "b06ed54699b3d5ed66ba460c5624b2eebc63ccbe1e2254242eac793cf882267d"
	},
	{
		"id": "c1a9088df69f",
		"ts": "2026-08-16T09:23:17.570Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111438319.95,
		"hash": "c1a9088df69fedd23171cd16840b41e2adef6d8099699375a28f5b9b159a6acd"
	},
	{
		"id": "4d4c229adf4c",
		"ts": "2026-08-16T09:23:18.247Z",
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
		"liquidityUsd": 17004167.27,
		"hash": "4d4c229adf4cd2db76c0f38392f17089371317e9ecf8ff6837e7fe95105108a8"
	},
	{
		"id": "c142aad22836",
		"ts": "2026-08-16T09:23:18.670Z",
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
		"liquidityUsd": 804850.35,
		"hash": "c142aad2283683f0cd87e9b17aad6077fa71d4732a10dd7dfaf31718f93ff885"
	},
	{
		"id": "219259d73d46",
		"ts": "2026-08-16T09:23:19.133Z",
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
		"liquidityUsd": 26620450.43,
		"hash": "219259d73d46820c02419a7635c12264a5a11812459442ed5c329e785282f1f6"
	},
	{
		"id": "25c0a42617fd",
		"ts": "2026-08-16T09:23:19.556Z",
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
		"liquidityUsd": 4149806.87,
		"hash": "25c0a42617fdf7be26549dabff6aad8b86b8b26c944f323af3a62bf3ef184b0a"
	}
]
