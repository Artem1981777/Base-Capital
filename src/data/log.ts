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
	"updatedAt": "2026-08-20T05:25:37.207Z",
	"tokensScored": 12498,
	"verdictsIssued": 12498,
	"safe": 10814,
	"risky": 902,
	"likelyRug": 782,
	"ticks": 734
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "27e609effa09",
		"ts": "2026-08-20T05:25:33.263Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111046290.01,
		"hash": "27e609effa098d37364c7f5c2b5a228c46deda3745fa4c5a0fa6e702a3b166cf"
	},
	{
		"id": "72aecfc6d29c",
		"ts": "2026-08-20T05:25:33.496Z",
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
		"liquidityUsd": 16876753.51,
		"hash": "72aecfc6d29ca901816b032be587acf6bf9dc18852f475d339b82c7cfb20c81d"
	},
	{
		"id": "1bc1d1ecb3f3",
		"ts": "2026-08-20T05:25:33.767Z",
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
		"liquidityUsd": 856634.66,
		"hash": "1bc1d1ecb3f32f72121626ad4acae0c150387aed8dc2e3d6c3c83b030ac71b1e"
	},
	{
		"id": "36e71746c8d6",
		"ts": "2026-08-20T05:25:34.000Z",
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
		"liquidityUsd": 27204194.28,
		"hash": "36e71746c8d6127ea5443fdcea6f83c654b30ed061e3fa92a9a87a318a86bd31"
	},
	{
		"id": "8d400a0afb2e",
		"ts": "2026-08-20T05:25:34.237Z",
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
		"liquidityUsd": 2966315.19,
		"hash": "8d400a0afb2e6f2f70a2650842e563f7dd9a3776717facda23461156767d863e"
	},
	{
		"id": "18555dbd01b3",
		"ts": "2026-08-20T05:25:34.475Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1016306.18,
		"hash": "18555dbd01b359f4e5ce502de1c9fa622764b41ea8b8bc228b9cb53150e857d5"
	},
	{
		"id": "7ef50ac63dab",
		"ts": "2026-08-20T05:25:34.707Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152689.1,
		"hash": "7ef50ac63dabb1662e3b74dafc04e8ad1a46b7463a9f7c972a233e52c5aa40d8"
	},
	{
		"id": "5dd1fddcd6a5",
		"ts": "2026-08-20T05:25:34.941Z",
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
		"liquidityUsd": 3986607.66,
		"hash": "5dd1fddcd6a568dda4a6721978d8443725ea9df70b40c484c495f4a511ac509b"
	},
	{
		"id": "45fc40c3a19a",
		"ts": "2026-08-20T05:25:35.231Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2983104.36,
		"hash": "45fc40c3a19aba8fd4c6a1d23ac94bbf4a76d89bd0dded39ecd533333e5c7393"
	},
	{
		"id": "882a551aea22",
		"ts": "2026-08-20T05:25:35.468Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4021572.08,
		"hash": "882a551aea2285f1e5b291d2b3dcb02b7186479555621a77e71765ae288d59f6"
	},
	{
		"id": "92772529635b",
		"ts": "2026-08-20T05:25:35.686Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4385513.57,
		"hash": "92772529635b755f3873dcb6deae93f09b4c5d5d019fc66d076f36bd35caeada"
	},
	{
		"id": "d2e570b63c40",
		"ts": "2026-08-20T05:25:35.903Z",
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
		"liquidityUsd": 471214.87,
		"hash": "d2e570b63c4058632c8173d9fd66be83d31db19a4b499e888ca80697966474cf"
	},
	{
		"id": "0e3e408ae19c",
		"ts": "2026-08-20T05:25:36.113Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 569579.96,
		"hash": "0e3e408ae19ce841f1c2669561ee3712f07ce033a592fb80ba442441247ac348"
	},
	{
		"id": "4c48e145a4e3",
		"ts": "2026-08-20T05:25:36.335Z",
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
		"liquidityUsd": 523623.23,
		"hash": "4c48e145a4e3b3737e3b8bfaf6fc91700bbb81205bab852018af3e97901dd22d"
	},
	{
		"id": "38bdff8d886d",
		"ts": "2026-08-20T05:25:36.552Z",
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
		"liquidityUsd": 707794.21,
		"hash": "38bdff8d886dbba23523201380f0bfb624649f9f772ad47f0a9b56460817f68c"
	},
	{
		"id": "83346a112e92",
		"ts": "2026-08-20T05:25:36.771Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 890280.55,
		"hash": "83346a112e922953e604d3e9b844ae2e20aa92cd37649cd242a1ed491bf8ffb1"
	},
	{
		"id": "c53fcbb2b573",
		"ts": "2026-08-20T05:25:36.982Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1675684.74,
		"hash": "c53fcbb2b57306001bb4a23473e63b64e918f4c583c6d77f8dcbc3c784fcc616"
	},
	{
		"id": "2dc5781fa16e",
		"ts": "2026-08-20T05:25:37.206Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 69162.04,
		"hash": "2dc5781fa16e1bde2015472b8ef63257dc5d87ffe8f9050eb188a5f8561abd72"
	},
	{
		"id": "84999634a275",
		"ts": "2026-08-20T04:32:57.871Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111114498.7,
		"hash": "84999634a2752a8de50a14895f514f40696b3ca8f598f75f217f4adcb6970da2"
	},
	{
		"id": "15d46cf2c0d5",
		"ts": "2026-08-20T04:32:58.329Z",
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
		"liquidityUsd": 16238233.61,
		"hash": "15d46cf2c0d5fba88159bce1a30789dcf1976952fe5e35f64751fff62761dbee"
	},
	{
		"id": "b812422a8969",
		"ts": "2026-08-20T04:32:58.767Z",
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
		"liquidityUsd": 858019.44,
		"hash": "b812422a8969845ab2afa9bdb988e13bb73ef3dc766f0ef1929cdc85a0a65f53"
	},
	{
		"id": "12276efb7bcb",
		"ts": "2026-08-20T04:32:59.008Z",
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
		"liquidityUsd": 27226817.89,
		"hash": "12276efb7bcb8e5a59d33e85d511e8fec2a08d69bfe483d2d26f9ceafbcd9272"
	},
	{
		"id": "a479f030951d",
		"ts": "2026-08-20T04:32:59.262Z",
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
		"liquidityUsd": 2921457.1,
		"hash": "a479f030951dbc43a182bb03f2ed461039e180afe104ed98ad8d2775a3e4df0a"
	},
	{
		"id": "035ac158bd66",
		"ts": "2026-08-20T04:32:59.498Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1018656.81,
		"hash": "035ac158bd66c93bcca1f7c71ca108a577c2fb061a2c5a60617e16798fe7ad3b"
	},
	{
		"id": "a1e5d9d94bb0",
		"ts": "2026-08-20T04:32:59.730Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152683.53,
		"hash": "a1e5d9d94bb0862cea2b2188d3a1b76a196155bf0ed7f8b913b0f0017e546f05"
	},
	{
		"id": "0f7973089d59",
		"ts": "2026-08-20T04:33:00.185Z",
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
		"liquidityUsd": 3986207.93,
		"hash": "0f7973089d59117d674f891abe550e1398d7c7f025ded608c2bee6e05f1b4f71"
	},
	{
		"id": "07075ab9658f",
		"ts": "2026-08-20T04:33:00.422Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4033806.04,
		"hash": "07075ab9658f9edf934c7c63b28529f151fb3b3f519080ce7c3d71a78f7ddcf3"
	},
	{
		"id": "e9dbd191818d",
		"ts": "2026-08-20T04:33:00.886Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2985812.67,
		"hash": "e9dbd191818d2bc0e00149fd09a3092629c50ce076fd7d00007fe769024cbf53"
	},
	{
		"id": "80311385fd72",
		"ts": "2026-08-20T04:33:01.124Z",
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
		"liquidityUsd": 4378480.47,
		"hash": "80311385fd721e01c00c500c21032786dd08f7282cfc92b616831e4a2565896c"
	},
	{
		"id": "1d53d2c6f9e2",
		"ts": "2026-08-20T04:33:01.572Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 472501.07,
		"hash": "1d53d2c6f9e2ebb8ea16d7f76d7af135dcfbe93d4cfd9e23c45abfba4aab66ba"
	},
	{
		"id": "b67b27545ae3",
		"ts": "2026-08-20T04:33:02.015Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 571406.36,
		"hash": "b67b27545ae35bf3fab2c1c3ad494439384702bccd6210fe52df71b4678628c6"
	},
	{
		"id": "d1ad768ba134",
		"ts": "2026-08-20T04:33:02.258Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 526152.29,
		"hash": "d1ad768ba13478fb582ed81f77162fcc79e30a760e5d337bc39e7f8bad6909a3"
	},
	{
		"id": "4c383ab4de18",
		"ts": "2026-08-20T04:33:02.489Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 885917.23,
		"hash": "4c383ab4de18e48dba5d4acf9bd2a471caf2541449c24d80aa5781043d8083d9"
	},
	{
		"id": "e588bca30a65",
		"ts": "2026-08-20T04:33:03.065Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 70270.03,
		"hash": "e588bca30a65b9ec39b4d54b99faadd12e3cfa4e446041e854ff1f952ebc7ede"
	},
	{
		"id": "49192ec1fac8",
		"ts": "2026-08-20T04:33:03.301Z",
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
		"liquidityUsd": 11197863.49,
		"hash": "49192ec1fac87c63e267b8845e49bfc058c650653e987566ace5384ce7451890"
	},
	{
		"id": "c2f47b617740",
		"ts": "2026-08-20T04:33:03.535Z",
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
		"liquidityUsd": 705122.91,
		"hash": "c2f47b617740f3a4084dc3d5419804bc7e9a7b11c3dd9471d6b2add58c8fbd24"
	},
	{
		"id": "fdafb0653b82",
		"ts": "2026-08-20T03:42:42.392Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110980899.01,
		"hash": "fdafb0653b82c0f019f4cfc5be196a4107fdb6146637e7ac74cfd08a4e761984"
	},
	{
		"id": "85792e6b09b4",
		"ts": "2026-08-20T03:42:42.844Z",
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
		"liquidityUsd": 13112724.07,
		"hash": "85792e6b09b492093028ecffa845cb850a2ab21e0f29747d806493a7e21448e7"
	},
	{
		"id": "c90cede76129",
		"ts": "2026-08-20T03:42:43.314Z",
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
		"liquidityUsd": 858733.13,
		"hash": "c90cede76129747d63e8f43c61449f128c4f1120b9444ac76030912cbb35b202"
	},
	{
		"id": "8333f1a6f4ea",
		"ts": "2026-08-20T03:42:43.576Z",
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
		"liquidityUsd": 27110170.84,
		"hash": "8333f1a6f4ea18245c6ed00402fb6836e296f56eb655e5ebde3e329c32c969aa"
	},
	{
		"id": "2e153b25e1e7",
		"ts": "2026-08-20T03:42:43.832Z",
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
		"liquidityUsd": 2915831.39,
		"hash": "2e153b25e1e782a0f3893be8d3bb1740b56d2251cc2bff501a487496a4a00078"
	},
	{
		"id": "8a5e0dfd03f2",
		"ts": "2026-08-20T03:42:44.099Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1015638.55,
		"hash": "8a5e0dfd03f2dc89885903ffdf00a570c252a7e0518b7ea13b2b125400bab94b"
	},
	{
		"id": "8c80d0233af3",
		"ts": "2026-08-20T03:42:44.356Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152683.74,
		"hash": "8c80d0233af33d6374242c9260911b1bedbad327fa42c0026b6c3a87009948a7"
	},
	{
		"id": "439650671705",
		"ts": "2026-08-20T03:42:44.613Z",
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
		"liquidityUsd": 1550025.1,
		"hash": "43965067170564133d940f76e3592d4f8ad744e3a5a6d80d6fb5ca4ed2a4898f"
	},
	{
		"id": "4cba4c8aecb4",
		"ts": "2026-08-20T03:42:44.878Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4006976.99,
		"hash": "4cba4c8aecb459688486d46985da507cb22e7678e6ad99ff61e8548cf7db87bf"
	},
	{
		"id": "254a14ed2c6b",
		"ts": "2026-08-20T03:42:45.140Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2991060.28,
		"hash": "254a14ed2c6b1f4e7d07531408747766fa71fd4678b0605b00c15aa6bb47a5ad"
	},
	{
		"id": "12ce0a5c7e16",
		"ts": "2026-08-20T03:42:45.379Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4422841.75,
		"hash": "12ce0a5c7e16066b576a8826fe77a9677fdd274495e851c0331af1548e00ecf8"
	},
	{
		"id": "ab0409a30962",
		"ts": "2026-08-20T03:42:45.630Z",
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
		"liquidityUsd": 438976.24,
		"hash": "ab0409a30962092fc10400d51d1d9595f4896afc85896688513d8799e875febd"
	},
	{
		"id": "e7638a1d5b16",
		"ts": "2026-08-20T03:42:45.877Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 571351.64,
		"hash": "e7638a1d5b16635cb9205df36ccdd6730722078908ecbcf50f272db853d6e249"
	},
	{
		"id": "5602d59bf5ca",
		"ts": "2026-08-20T03:42:46.116Z",
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
		"liquidityUsd": 519844.77,
		"hash": "5602d59bf5caecf0457762e474f99ebdc920102c05b0497e5a8b631e5c7deae6"
	},
	{
		"id": "7c04063ec14e",
		"ts": "2026-08-20T03:42:46.365Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 886452.72,
		"hash": "7c04063ec14e0524726b4cdbe522c84f21167ee8c3594850580bced806e66036"
	},
	{
		"id": "9d240a01cb2d",
		"ts": "2026-08-20T03:42:46.609Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11188631.64,
		"hash": "9d240a01cb2da1a0147dbc055cce19528050ef182b51c814fcf180f1d8247504"
	},
	{
		"id": "3cdb73539b49",
		"ts": "2026-08-20T03:42:46.850Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 74008.59,
		"hash": "3cdb73539b493c53fe0adfbb62717d7c0e526f073254f02fce3b7bb478e32b91"
	},
	{
		"id": "6fcbc78c7458",
		"ts": "2026-08-20T03:42:47.101Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 327340.22,
		"hash": "6fcbc78c7458db6c80d9fe1ab734f907f16a17c26535bb6166084f6dd69d5d64"
	},
	{
		"id": "de19a6517ef6",
		"ts": "2026-08-20T03:42:47.345Z",
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
		"liquidityUsd": 690538.93,
		"hash": "de19a6517ef6179d337d730ecc07925362aad0141a6eaa93c4f22137d7eb40d0"
	},
	{
		"id": "50f44763778b",
		"ts": "2026-08-20T02:20:19.250Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111410668.35,
		"hash": "50f44763778b03829a42128a0f26540634bb93ce2ff522ca43e3b1d178034e0d"
	},
	{
		"id": "724c2eee7360",
		"ts": "2026-08-20T02:20:19.688Z",
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
		"liquidityUsd": 15879633.9,
		"hash": "724c2eee73604aea30910b94859c6b4c3678524bada9b8fb4adf361109f0aeac"
	},
	{
		"id": "9f07367e1b5d",
		"ts": "2026-08-20T02:20:20.118Z",
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
		"liquidityUsd": 882124.3,
		"hash": "9f07367e1b5d67821234a342a69c74e35d5a29bd72932d3781cb4f248d33972b"
	},
	{
		"id": "df4dfb509adc",
		"ts": "2026-08-20T02:20:20.349Z",
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
		"liquidityUsd": 27790000.07,
		"hash": "df4dfb509adc1a362a5c333a274975b0d1aed808c5eb5396726b5d9701963769"
	},
	{
		"id": "0b9f4650ec1a",
		"ts": "2026-08-20T02:20:20.575Z",
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
		"liquidityUsd": 2466018.75,
		"hash": "0b9f4650ec1a7e291700c79470f7e78ed72a04a8079fdb4717088019533dd04a"
	},
	{
		"id": "3ba6f6d4ac13",
		"ts": "2026-08-20T02:20:20.808Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1028616.19,
		"hash": "3ba6f6d4ac13044828d6e90c5fc256e27e2f714b199288ad3d1a850858989e0c"
	},
	{
		"id": "2b3ec490ca23",
		"ts": "2026-08-20T02:20:21.038Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152679.78,
		"hash": "2b3ec490ca23c9629931e9bdf1af212b940f476808c98dd22a8e1c8e685546c7"
	},
	{
		"id": "fd8b07e65917",
		"ts": "2026-08-20T02:20:21.268Z",
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
		"liquidityUsd": 1563788.84,
		"hash": "fd8b07e659174493084c2227e74ddc93eed66f7d9a0e9a2e76d00e7c5261a7ab"
	},
	{
		"id": "18ca3b54f495",
		"ts": "2026-08-20T02:20:21.494Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4078157.45,
		"hash": "18ca3b54f49576a9508a4cc72d252238ccbcf7b164b5503c745c39a8aa27fa53"
	},
	{
		"id": "51c8ebe39e2f",
		"ts": "2026-08-20T02:20:21.724Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3164803.7,
		"hash": "51c8ebe39e2f7f9447a64c953ced80897f7ccbfbb2341d3b75372a75258c91eb"
	},
	{
		"id": "7ee2d508f177",
		"ts": "2026-08-20T02:20:21.939Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4476380.06,
		"hash": "7ee2d508f1778347d66ccf394d5a928f3fbb372f19658520d3be6046a85dc2af"
	},
	{
		"id": "b360175b7ca7",
		"ts": "2026-08-20T02:20:22.149Z",
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
		"liquidityUsd": 454986.48,
		"hash": "b360175b7ca713c07aaac77a493fc09043e2ad6ec8a42cfe2318d89cc71b5004"
	},
	{
		"id": "3409e5b75774",
		"ts": "2026-08-20T02:20:22.365Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 567257.96,
		"hash": "3409e5b757741ee1f5e6cf449993278aba8a234973c905830af0821dd4302710"
	},
	{
		"id": "03d48eeaccd5",
		"ts": "2026-08-20T02:20:22.578Z",
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
		"liquidityUsd": 524096.24,
		"hash": "03d48eeaccd5d9059c87b1778b2e525feb302a1d7cdb4519799e863804e895be"
	},
	{
		"id": "8439f16d3cbd",
		"ts": "2026-08-20T02:20:22.795Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 886796.29,
		"hash": "8439f16d3cbd8204dd3faa825d6e8625996dd1998a8f551237042c3ee159d9da"
	},
	{
		"id": "fb6c486d1784",
		"ts": "2026-08-20T02:20:23.003Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11293935.91,
		"hash": "fb6c486d1784300c15377138fd56e5c540bb3415e1c80997a4dff972f0e87d94"
	},
	{
		"id": "b9a78114c3df",
		"ts": "2026-08-20T02:20:23.233Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 66323.93,
		"hash": "b9a78114c3dfce384ef5ce5c3cec479ee645d59351e05298390c850b2be6afeb"
	},
	{
		"id": "d9ede7e463a8",
		"ts": "2026-08-20T02:20:23.448Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 330461.86,
		"hash": "d9ede7e463a8b197854c6101541b2cf05251dca6a3a723fa66645ed51d609ebe"
	},
	{
		"id": "efe9f3db5765",
		"ts": "2026-08-20T02:20:23.664Z",
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
		"liquidityUsd": 693030.44,
		"hash": "efe9f3db576541c8f2378c98eaf3777dd313e08e3f248907c955449efd27ce11"
	},
	{
		"id": "edf30dc5a997",
		"ts": "2026-08-20T01:00:21.259Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111819730.42,
		"hash": "edf30dc5a9973be4a5da70d87f1d6d527f0d6e1f822318b6b6cd0de4c7c9be6d"
	},
	{
		"id": "8bf4a8295038",
		"ts": "2026-08-20T01:00:21.611Z",
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
		"liquidityUsd": 14168826.33,
		"hash": "8bf4a8295038443a51a7e55b0996e36240fb4b714efb15f965b1f48e288ef72d"
	},
	{
		"id": "5e665c545384",
		"ts": "2026-08-20T01:00:21.801Z",
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
		"liquidityUsd": 866066.32,
		"hash": "5e665c5453844aea96c67df1d451c56aa577f1b0e8e3c2786bf0bd6645da84cc"
	},
	{
		"id": "154928f7ea74",
		"ts": "2026-08-20T01:00:21.988Z",
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
		"liquidityUsd": 27686553.54,
		"hash": "154928f7ea749e32140f3d1af8b99c6bd2929110d8a7e1158f4187f89662cb28"
	},
	{
		"id": "b13affda4d50",
		"ts": "2026-08-20T01:00:22.185Z",
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
		"liquidityUsd": 2451205.12,
		"hash": "b13affda4d504a86b0aa53c87c8db0821955c9af6dabf551c8f6aa8acb031db1"
	},
	{
		"id": "ca9a14bff16f",
		"ts": "2026-08-20T01:00:22.396Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1028019.7,
		"hash": "ca9a14bff16f9e6696750ac1d2a525161e0b05b7f757425a8066eb868a6393c7"
	},
	{
		"id": "ac29d6abd200",
		"ts": "2026-08-20T01:00:22.582Z",
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
		"liquidityUsd": 383880.42,
		"hash": "ac29d6abd200ac2dffd0bf8bac623fdf08de4569983a15f73cc94d17aa137758"
	},
	{
		"id": "2bdcb78af981",
		"ts": "2026-08-20T01:00:22.777Z",
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
		"liquidityUsd": 1562955.37,
		"hash": "2bdcb78af9815b620545aa5bd0c2ba3cc8570f36f7b4fb9b03a32fb5af660ba9"
	},
	{
		"id": "c6aa88d9c172",
		"ts": "2026-08-20T01:00:22.966Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4101553.22,
		"hash": "c6aa88d9c172827ecef575addb92b2fbd1b22fa0c7901c4d868cb8d0e9805d33"
	},
	{
		"id": "6f363d95a99a",
		"ts": "2026-08-20T01:00:23.158Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3035749.43,
		"hash": "6f363d95a99a8936a689163e58dda8e5a5751499371be449ef835cbbf922b871"
	},
	{
		"id": "df54147c625b",
		"ts": "2026-08-20T01:00:28.461Z",
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
		"liquidityUsd": 431355.28,
		"hash": "df54147c625be476e0659d34f7e461fa3f6d89435239f66cf44d4f470629f864"
	},
	{
		"id": "163cbdb16df8",
		"ts": "2026-08-20T01:00:28.808Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4550341.98,
		"hash": "163cbdb16df8f16d08a9263f356e42c7951436362cbaa9d9d56d0157e59a5e33"
	},
	{
		"id": "23abdb26caf3",
		"ts": "2026-08-20T01:00:28.983Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 572806.79,
		"hash": "23abdb26caf3acf8db7e3047f38295f2eb9f30f97479643b62f39a8f7659494d"
	},
	{
		"id": "4664b1ca1f39",
		"ts": "2026-08-20T01:00:29.186Z",
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
		"liquidityUsd": 525266.52,
		"hash": "4664b1ca1f3912a3e95fd4919f5273d9ff1b0752ce347f15555e6557aa9327b5"
	},
	{
		"id": "66cdbaa740c1",
		"ts": "2026-08-20T01:00:29.549Z",
		"symbol": "evo",
		"token": "0x721B072dbb616F29eEA73ac004e03Fd4E884bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 152396.34,
		"hash": "66cdbaa740c1e991463a6d772f0cd1c5e1a6e4068611239ca3de715dfb1a66f7"
	},
	{
		"id": "8c390c80681b",
		"ts": "2026-08-20T01:00:29.853Z",
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
		"liquidityUsd": 886067.42,
		"hash": "8c390c80681b798610f406f287d14959aede2e602661badb33a369454d6bc98a"
	},
	{
		"id": "6d0484ddd84d",
		"ts": "2026-08-20T01:00:30.038Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11395489.53,
		"hash": "6d0484ddd84d25f455fba0fbfa06adce668cb5bdb0d1fae146c1bdaa655d9c79"
	},
	{
		"id": "02e6b2551a8d",
		"ts": "2026-08-20T01:00:30.256Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 69295.55,
		"hash": "02e6b2551a8db8d112808b95269f60bb9e8c01bcc7618a74968b9e25c8ee5ef6"
	},
	{
		"id": "306823af8785",
		"ts": "2026-08-20T01:00:30.442Z",
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
		"liquidityUsd": 692816.37,
		"hash": "306823af87854cd064e14ec35a2277df3d2a3c01db251e6c892be65559203428"
	},
	{
		"id": "c033ef649c69",
		"ts": "2026-08-19T23:19:03.356Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112515202.4,
		"hash": "c033ef649c69fb7e7f2f15ba74b3d1577a0a0523d681ad26bbbba5a54aebdb5e"
	},
	{
		"id": "2a4e78fbbbdb",
		"ts": "2026-08-19T23:19:03.618Z",
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
		"liquidityUsd": 13188635.77,
		"hash": "2a4e78fbbbdb711d6429bd07e040d6e7425856d14cafef081dd4547291eeb219"
	},
	{
		"id": "4c5584f7a2d3",
		"ts": "2026-08-19T23:19:03.943Z",
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
		"liquidityUsd": 864876.58,
		"hash": "4c5584f7a2d3b574dbccbd3f0dd814f016e75ef6ea77cf8cbeb3c2df0e0c0080"
	},
	{
		"id": "a4f48ef314f4",
		"ts": "2026-08-19T23:19:04.139Z",
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
		"liquidityUsd": 27190204.2,
		"hash": "a4f48ef314f4a88df548641681462778183a08b78543ea9417e310e0c4c6177a"
	},
	{
		"id": "6d4144f2f351",
		"ts": "2026-08-19T23:19:04.463Z",
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
		"liquidityUsd": 2429600.58,
		"hash": "6d4144f2f351f3327684db118f5e0f8174039a560d891ce174f65595a0f3f025"
	},
	{
		"id": "d2c16ad78fa2",
		"ts": "2026-08-19T23:19:04.729Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1027997.96,
		"hash": "d2c16ad78fa2a955ebb6af33d88b03e1602a5bc9ec115a48d15a7055f0165764"
	},
	{
		"id": "c806d39d9f07",
		"ts": "2026-08-19T23:19:04.923Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4175861.2,
		"hash": "c806d39d9f07ab4e9e0078180ee8441edd2183b5b1c5d5bb78bbf657f82a49da"
	},
	{
		"id": "8ec13c0b29c6",
		"ts": "2026-08-19T23:19:05.114Z",
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
		"liquidityUsd": 1551435.98,
		"hash": "8ec13c0b29c6ed88532c415bde9ef114f127865a2d92015caec959cfe3e1de58"
	},
	{
		"id": "48565d731c17",
		"ts": "2026-08-19T23:19:05.535Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4038670.78,
		"hash": "48565d731c177424b405517bb7f596b8b7185812fe3e6b0f4702e177cc6b64e4"
	},
	{
		"id": "d6b1f1243349",
		"ts": "2026-08-19T23:19:05.731Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3008572.14,
		"hash": "d6b1f12433496271565af03f0dccb63a2d5917d8d57953c3b1aad5e3bf2c4792"
	},
	{
		"id": "8e59a5032f23",
		"ts": "2026-08-19T23:19:05.920Z",
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
		"liquidityUsd": 415702.9,
		"hash": "8e59a5032f23ce435d8eb1346f688012766e4681d74aeafe414eed19ff6a28a7"
	},
	{
		"id": "c2e49b3acd41",
		"ts": "2026-08-19T23:19:06.380Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 566255.57,
		"hash": "c2e49b3acd41672f78e2e8ab78c897dc8d19e113efe853d566e6b35f128c7758"
	},
	{
		"id": "175396f5ae1c",
		"ts": "2026-08-19T23:19:06.576Z",
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
		"liquidityUsd": 524187.55,
		"hash": "175396f5ae1c8293aa137c945036e2de6951c6f3653c425213d6b06c7225ce7d"
	},
	{
		"id": "5143738482bb",
		"ts": "2026-08-19T23:19:06.764Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4175053.67,
		"hash": "5143738482bb1625a856c425698f8af432d200762b136d18e021265eb24664d4"
	},
	{
		"id": "c1490d927b3f",
		"ts": "2026-08-19T23:19:07.446Z",
		"symbol": "evo",
		"token": "0x721B072dbb616F29eEA73ac004e03Fd4E884bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 161434.93,
		"hash": "c1490d927b3f994ca8edbfcc41523910478dded619f190d8f3ec29f5095c00a6"
	},
	{
		"id": "28529261cd23",
		"ts": "2026-08-19T23:19:07.642Z",
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
		"liquidityUsd": 875188.76,
		"hash": "28529261cd23eaa0e650bf4a1ced286953c26c622c14074ebb82ebd091780f8a"
	},
	{
		"id": "4fbae6096644",
		"ts": "2026-08-19T23:19:07.831Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11174825.5,
		"hash": "4fbae6096644087cc6fe1cccc8ec14a04fc90fd8ec775b271fac29cd12eded53"
	},
	{
		"id": "0a87e128fe0e",
		"ts": "2026-08-19T23:19:08.034Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 59049.29,
		"hash": "0a87e128fe0eee2746df55673bafd1bbe09573f512930291f90733efee02dcd7"
	},
	{
		"id": "0a384ba453c7",
		"ts": "2026-08-19T23:19:08.221Z",
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
		"liquidityUsd": 699517.47,
		"hash": "0a384ba453c7cd848fa3be4f103361cd312f056cae5324b37587945fc5346501"
	},
	{
		"id": "43a938b1639b",
		"ts": "2026-08-19T23:19:08.415Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1701190.85,
		"hash": "43a938b1639bc3a7ae921ae435ad6d707fb5c31f7cac66318f55be7c76e8f545"
	},
	{
		"id": "167ddabac0cc",
		"ts": "2026-08-19T22:20:03.116Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112768925.42,
		"hash": "167ddabac0cc788a852b1ab1aa023b1ca05215fa8966d43b4be3a9657f4de807"
	},
	{
		"id": "2a82ef06e6d9",
		"ts": "2026-08-19T22:20:03.417Z",
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
		"liquidityUsd": 15732860.11,
		"hash": "2a82ef06e6d9acf879583bebd214785cc8b7cadc27df6e8cf4071846f37b494f"
	},
	{
		"id": "7e4525048111",
		"ts": "2026-08-19T22:20:03.669Z",
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
		"liquidityUsd": 876174.59,
		"hash": "7e4525048111651e41225302409bd73e78ede043f9b1f3d164cf91acea9a30e2"
	},
	{
		"id": "3aefdf905164",
		"ts": "2026-08-19T22:20:03.970Z",
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
		"liquidityUsd": 27173397.93,
		"hash": "3aefdf9051649c21ccabb107cf3edc8f14b111b8315ca368de686d400afb4f2e"
	},
	{
		"id": "2f7851c8194b",
		"ts": "2026-08-19T22:20:04.335Z",
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
		"liquidityUsd": 2453358.27,
		"hash": "2f7851c8194bd68b3eb6022eb4a63391824aeb2219903f001aa96db62c77e0c5"
	},
	{
		"id": "38b78a689922",
		"ts": "2026-08-19T22:20:04.645Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1044822,
		"hash": "38b78a689922fe68f65c55be69da151f5a5e7ae162d4b9c5e865e2136ed19978"
	},
	{
		"id": "0cd0b5445784",
		"ts": "2026-08-19T22:20:04.832Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4111091.9,
		"hash": "0cd0b54457849722a054f24a9a025b1563c32155ecb8ad987eff10c5c568e331"
	},
	{
		"id": "875ee57d9ed7",
		"ts": "2026-08-19T22:20:05.537Z",
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
		"liquidityUsd": 1570511.75,
		"hash": "875ee57d9ed707649ecac06f378ea7c11847c4421717a70ee476dbe8f16ce9ae"
	},
	{
		"id": "7ca63709920e",
		"ts": "2026-08-19T22:20:05.843Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4101035.92,
		"hash": "7ca63709920ebad7a7a71690b1b379eda7687f690c2e1d12a6dcf5bbd18a1422"
	},
	{
		"id": "7199ac46406b",
		"ts": "2026-08-19T22:20:06.152Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3034199.74,
		"hash": "7199ac46406baec41a3e2fa01549df28a7d03a7259811e9c59cde84e84db8fb0"
	},
	{
		"id": "e9728b21a2ca",
		"ts": "2026-08-19T22:20:06.348Z",
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
		"liquidityUsd": 440276.41,
		"hash": "e9728b21a2ca8ea1c90781ca9ba9aed4b101e658b475431bd3b1ab47e2e3c9f2"
	},
	{
		"id": "b9c64762ee9a",
		"ts": "2026-08-19T22:20:06.548Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 571727.22,
		"hash": "b9c64762ee9a044db0d377ac2e0cf0a43fcc3e998c495ba6a50a9716f7d717a8"
	},
	{
		"id": "2323a4962388",
		"ts": "2026-08-19T22:20:06.729Z",
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
		"liquidityUsd": 572861.04,
		"hash": "2323a496238890af28f21618a4361f574bd409175059652ee910a81dc17c3849"
	},
	{
		"id": "77242e27bcec",
		"ts": "2026-08-19T22:20:06.925Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4113086.08,
		"hash": "77242e27bceccc6cb813ae33e1615d653c44688d18118c6259439a916ddf6c51"
	},
	{
		"id": "8fa6346071eb",
		"ts": "2026-08-19T22:20:07.107Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 66591.84,
		"hash": "8fa6346071ebaab31bb75ff10f861e3f07d9ea5bb59a01f629a0cf824bb453b2"
	},
	{
		"id": "6e9c27ad06be",
		"ts": "2026-08-19T22:20:07.789Z",
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
		"liquidityUsd": 868517.45,
		"hash": "6e9c27ad06be2b4dd576934d674de27c1dfd640c18fdbb516a9c7e28d48e67b2"
	},
	{
		"id": "48d9af0278ca",
		"ts": "2026-08-19T22:20:07.969Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11194510.02,
		"hash": "48d9af0278caba884bab4b23124d741d9120623fcb8f45d422dd29fc3f9e149e"
	},
	{
		"id": "741160eec791",
		"ts": "2026-08-19T22:20:08.279Z",
		"symbol": "evo",
		"token": "0x721B072dbb616F29eEA73ac004e03Fd4E884bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 163247.55,
		"hash": "741160eec791e55f15baf47bc3d8e6f60fef56a273a7fe0a9a3fe39bced180b3"
	},
	{
		"id": "2540d15b0f04",
		"ts": "2026-08-19T22:20:08.459Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 642236.47,
		"hash": "2540d15b0f0458e0a8e2e392ce98fad13693fd10373a8c0921824a1f708f1644"
	},
	{
		"id": "62edd841d2e5",
		"ts": "2026-08-19T22:20:08.652Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1725668.37,
		"hash": "62edd841d2e53a28da79e781e079c77c6bfc7c51605cb4db1ddb42151d26b020"
	},
	{
		"id": "6bd157d0ba6c",
		"ts": "2026-08-19T21:21:02.749Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113042860.56,
		"hash": "6bd157d0ba6cf168226a3f2f0d20856913ec1f0d437cd27a1f7d300d51f495b7"
	},
	{
		"id": "4d11e890e765",
		"ts": "2026-08-19T21:21:03.298Z",
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
		"liquidityUsd": 13254858.52,
		"hash": "4d11e890e7653c88b31f76096d3a5f3069483edb77fcea2b2a08155aa4a4eb55"
	},
	{
		"id": "9f569ddb16f2",
		"ts": "2026-08-19T21:21:03.871Z",
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
		"liquidityUsd": 875635.95,
		"hash": "9f569ddb16f2556f8d3e6358c12bc7753b3ea8ba794b9c9145645df83e925848"
	},
	{
		"id": "04ea746e6ea5",
		"ts": "2026-08-19T21:21:04.220Z",
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
		"liquidityUsd": 27256958.51,
		"hash": "04ea746e6ea5f821ed4323caddfbb7740f2a642a39b58c7f8e9d0af89dd79f54"
	},
	{
		"id": "ac21b8f779ed",
		"ts": "2026-08-19T21:21:04.556Z",
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
		"liquidityUsd": 2446099.91,
		"hash": "ac21b8f779ed794f8dc6743208daf6943ff6c832395fd919189038d7e124296f"
	},
	{
		"id": "6607a621431b",
		"ts": "2026-08-19T21:21:05.165Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1042595.6,
		"hash": "6607a621431b49ff9d830a3739f4926a519107e08fdd47902f2875e571b7a4a1"
	},
	{
		"id": "7670181356e7",
		"ts": "2026-08-19T21:21:05.401Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4106341.73,
		"hash": "7670181356e79812622efe1bc73b198f5eb0011a43aad27872e262cf562d3da8"
	},
	{
		"id": "069b17968085",
		"ts": "2026-08-19T21:21:06.034Z",
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
		"liquidityUsd": 1568091.52,
		"hash": "069b1796808510bd5a4a936a03b8d4af7f2116db316c5d35e3db4476a0678c26"
	},
	{
		"id": "7c281d5990a7",
		"ts": "2026-08-19T21:21:06.303Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4076881.04,
		"hash": "7c281d5990a7ca7388bebd041bc2ada0023cbb1149b63f5a2005271ba8102b88"
	},
	{
		"id": "f7ffb3705fa0",
		"ts": "2026-08-19T21:21:06.533Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3081903.98,
		"hash": "f7ffb3705fa0c3499d56c6e3e03c28f2eff9bfc7c7c2ec85200657de55ef235e"
	},
	{
		"id": "e11dc7c66a19",
		"ts": "2026-08-19T21:21:06.758Z",
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
		"liquidityUsd": 469478.06,
		"hash": "e11dc7c66a1925112fd53238b7072c0a36d6e74cd0954cb2325552a8d8058ed8"
	},
	{
		"id": "28393800cc3f",
		"ts": "2026-08-19T21:21:06.985Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 576748.77,
		"hash": "28393800cc3f4c24f3d66f054b94b95feb866e18ee326cb71ee21eb79c89ad0e"
	},
	{
		"id": "4371425c762b",
		"ts": "2026-08-19T21:21:07.208Z",
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
		"liquidityUsd": 574112.8,
		"hash": "4371425c762bfdab8eba34eacb81e193c57bcfc52b9fb93a5054cfd5ad235d64"
	},
	{
		"id": "613bb0a4e3ef",
		"ts": "2026-08-19T21:21:07.421Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4106341.73,
		"hash": "613bb0a4e3ef1d45646fdf8d8b436335a6289dbf2f58c3dc0f6b134d42f9f26c"
	},
	{
		"id": "8667a0e6b845",
		"ts": "2026-08-19T21:21:07.650Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 72825.39,
		"hash": "8667a0e6b845171ea027175844f599414d14c4cc57a80cf7c877fd75b4a3230c"
	},
	{
		"id": "b8eec7479c9b",
		"ts": "2026-08-19T21:21:07.879Z",
		"symbol": "evo",
		"token": "0x721B072dbb616F29eEA73ac004e03Fd4E884bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 160312.57,
		"hash": "b8eec7479c9baf09cab923279408f7fa6e4c547644fdabe14555dc8cc96387dd"
	},
	{
		"id": "6395049cd1ad",
		"ts": "2026-08-19T21:21:08.105Z",
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
		"liquidityUsd": 866701.94,
		"hash": "6395049cd1ad6a2a5cf0c0822753cc1d89a7f6d3941f3b2db7f4886d77044c13"
	},
	{
		"id": "e940cd3befc0",
		"ts": "2026-08-19T21:21:08.321Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11381636.76,
		"hash": "e940cd3befc09b396ff1736087acbf597122e22e61b5ed44a42bb51e19ceb6a5"
	},
	{
		"id": "f6b1f4d14bb5",
		"ts": "2026-08-19T21:21:08.571Z",
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
		"liquidityUsd": 736039.87,
		"hash": "f6b1f4d14bb5018bcf284464ff0552869af725610f279c5b020f3f52b1053c22"
	},
	{
		"id": "0459d62b02d1",
		"ts": "2026-08-19T21:21:08.843Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 654819.08,
		"hash": "0459d62b02d18fad4847f08a87d632d0567031cdc0e2f29f9ecf0a05d2a0e84c"
	},
	{
		"id": "7f5b670f0c47",
		"ts": "2026-08-19T20:21:44.616Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111947267.75,
		"hash": "7f5b670f0c47114fa54a309fa5a2847942f0413292109a66bbf908471d9fdc5a"
	},
	{
		"id": "4018a7b08e50",
		"ts": "2026-08-19T20:21:45.253Z",
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
		"liquidityUsd": 13002458.11,
		"hash": "4018a7b08e50a08af9330381b0425ec59597256e011a9c40d6559c9670593cb8"
	},
	{
		"id": "f2d2577f7939",
		"ts": "2026-08-19T20:21:45.490Z",
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
		"liquidityUsd": 835998.82,
		"hash": "f2d2577f7939681c249dd7460020052b78b3e667fea9fe8d66aba0f1830b5c75"
	},
	{
		"id": "f6189c20d13e",
		"ts": "2026-08-19T20:21:45.936Z",
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
		"liquidityUsd": 27477314,
		"hash": "f6189c20d13ee70d5cdaec8fee7e75f4b8bc1c96b8d9886c8f5a08173162520e"
	},
	{
		"id": "ef9c3105a54d",
		"ts": "2026-08-19T20:21:46.176Z",
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
		"liquidityUsd": 2325740.3,
		"hash": "ef9c3105a54d4d7a0e581b62a6ce087ee0406ff0bb572a0c23590c2ab3deb360"
	},
	{
		"id": "f916c492e638",
		"ts": "2026-08-19T20:21:46.480Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 966436.91,
		"hash": "f916c492e63899b74c47c9326550200918d1468d11daf823128fe58d05bffcd8"
	},
	{
		"id": "aa2269f68dfe",
		"ts": "2026-08-19T20:21:46.711Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4164385.5,
		"hash": "aa2269f68dfe6909baf61a1e8fbeb8af9fc8739dd414ef0a48f41549338ea861"
	},
	{
		"id": "763ad26e9201",
		"ts": "2026-08-19T20:21:46.954Z",
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
		"liquidityUsd": 1592352.27,
		"hash": "763ad26e920188b00a83c158edc9cb9e180322b7dbc2df4e46796380ec72ed85"
	},
	{
		"id": "1ee9fb66ad8b",
		"ts": "2026-08-19T20:21:47.188Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3798697.07,
		"hash": "1ee9fb66ad8bf574ead7885c34984799c6752c999913a9c8dbf248d26977508b"
	},
	{
		"id": "c3bf810ac20a",
		"ts": "2026-08-19T20:21:47.433Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2995432.53,
		"hash": "c3bf810ac20ace310b90d87dba98d0bced1ab00a606633e7648c32ce34cf3778"
	},
	{
		"id": "fb054880cfd9",
		"ts": "2026-08-19T20:21:47.650Z",
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
		"liquidityUsd": 418167.59,
		"hash": "fb054880cfd9c02fe6ae3e2329e905c0c44e761fa5f2e4a921f6e78ad4f360af"
	},
	{
		"id": "a752688482bb",
		"ts": "2026-08-19T20:21:47.873Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 542991.66,
		"hash": "a752688482bb49f65ab4c6236c56ac6b0d255cd4fe22b237304a1d7f1508ae16"
	},
	{
		"id": "4f9287c3aea4",
		"ts": "2026-08-19T20:21:48.089Z",
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
		"liquidityUsd": 554036.47,
		"hash": "4f9287c3aea402213f2f605fb70292c9fa309db1970ac910825a867c65d93f3f"
	},
	{
		"id": "e90965c8e5ac",
		"ts": "2026-08-19T20:21:48.314Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4160985.35,
		"hash": "e90965c8e5ac7d50d49c62b48833da4c3f0347bcde29d68453a23a4bed7cb396"
	},
	{
		"id": "d7d6954cb219",
		"ts": "2026-08-19T20:21:48.530Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 58785.93,
		"hash": "d7d6954cb219fcc9974cb3f9204e26eb48a06b6151ced2cdda6c45f099a42d4a"
	},
	{
		"id": "5742a4eb11a4",
		"ts": "2026-08-19T20:21:48.753Z",
		"symbol": "evo",
		"token": "0x721B072dbb616F29eEA73ac004e03Fd4E884bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 153241.91,
		"hash": "5742a4eb11a49f7cbf8ede11f3d6a6156d5e1249311fc82d7020b96b83ef28d3"
	},
	{
		"id": "b5eb4c2be97e",
		"ts": "2026-08-19T20:21:48.970Z",
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
		"liquidityUsd": 864838.36,
		"hash": "b5eb4c2be97e92d4152876ff4385e7c82840c6bfe09f0ab22fc3647d63f3f71b"
	},
	{
		"id": "a970c9b02c85",
		"ts": "2026-08-19T20:21:49.194Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10863379.08,
		"hash": "a970c9b02c85acdbed20cce7919d836446b5c6b78f004a16abf969984b2f6871"
	},
	{
		"id": "acefaeb285b8",
		"ts": "2026-08-19T20:21:49.412Z",
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
		"liquidityUsd": 740827.35,
		"hash": "acefaeb285b8f03832207096294dd41166dbe1cfb66f472effef129924c40ff9"
	},
	{
		"id": "f62f8cb26580",
		"ts": "2026-08-19T20:21:49.643Z",
		"symbol": "dogue",
		"token": "0xb2000000000000000000003779298b7eB3D8d501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 76449.84,
		"hash": "f62f8cb2658084e16314d360ee8db88f1c5834925be20d1e26b300aa04f74080"
	},
	{
		"id": "e2665a0f611f",
		"ts": "2026-08-19T19:21:24.584Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112023275.16,
		"hash": "e2665a0f611f1c2953a18a3a882c32fa54c409bd3ca7ffa0c7d6b5b1873c0663"
	},
	{
		"id": "5437a57221ca",
		"ts": "2026-08-19T19:21:25.115Z",
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
		"liquidityUsd": 12958461.65,
		"hash": "5437a57221caf855bac16f1f952b8390bb65c97c8fc828df82c145d7713ca77c"
	},
	{
		"id": "9a15a16ebd61",
		"ts": "2026-08-19T19:21:25.316Z",
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
		"liquidityUsd": 839926.56,
		"hash": "9a15a16ebd618fd376af48f7626eab116fb3f64e6a8fab53537e7adaca305c8e"
	},
	{
		"id": "9afaf4452e6c",
		"ts": "2026-08-19T19:21:25.666Z",
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
		"liquidityUsd": 27403042.6,
		"hash": "9afaf4452e6c524dc606d5d51dc50df29e5f72fc2b63e8c6de443df39f403cac"
	},
	{
		"id": "971494cd531f",
		"ts": "2026-08-19T19:21:25.902Z",
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
		"liquidityUsd": 2310483.46,
		"hash": "971494cd531fe806d5d1e08b6c781084e5001353f05c3c232238415e5bd053aa"
	},
	{
		"id": "31294dcacc3a",
		"ts": "2026-08-19T19:21:26.112Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 966529.87,
		"hash": "31294dcacc3a57e1de79f1a2a086ec22d60675663b26d3798146de02ec560a89"
	},
	{
		"id": "793a21221770",
		"ts": "2026-08-19T19:21:26.311Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27403042.6,
		"hash": "793a212217700511782996c68c52fd9fbebded05e06019f972118a5973e57c1d"
	},
	{
		"id": "3eca072e1ffc",
		"ts": "2026-08-19T19:21:26.516Z",
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
		"liquidityUsd": 1580577.33,
		"hash": "3eca072e1ffc65a588487c39e7b58c2e44e962a4c32e5a60b85fcf46b18560ae"
	},
	{
		"id": "746c6fb7b142",
		"ts": "2026-08-19T19:21:26.725Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3028770.41,
		"hash": "746c6fb7b1422e052c006fcc5bc71499268f6a89963496fc16b8c77773f721be"
	},
	{
		"id": "785d891c340f",
		"ts": "2026-08-19T19:21:27.034Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3718503.63,
		"hash": "785d891c340f6c58d21b8f251dec455f5d19add164f47260bdf8f9ba5b6cbb80"
	},
	{
		"id": "fa2e4353ab04",
		"ts": "2026-08-19T19:21:27.244Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 567315.25,
		"hash": "fa2e4353ab044dc7d63dc09d9f2501cf997898a324ebe7833a7770b7830c240d"
	},
	{
		"id": "100ca231f9ee",
		"ts": "2026-08-19T19:21:27.441Z",
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
		"liquidityUsd": 441991.44,
		"hash": "100ca231f9eebe6494ff8a6f2ec2da7b8b48638c310db95c859075d151899c9b"
	},
	{
		"id": "11f362f065f8",
		"ts": "2026-08-19T19:21:27.642Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4100579.3,
		"hash": "11f362f065f8a95c279745bb492a1fafb9d6d6e0aff3b8f36f7afdc260313499"
	},
	{
		"id": "1905068f18cd",
		"ts": "2026-08-19T19:21:27.838Z",
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
		"liquidityUsd": 531697.12,
		"hash": "1905068f18cdf0272ffb1a3b495a656df15e6a3b75aea3e715c5bbbbff75cb08"
	},
	{
		"id": "c0e6a99054cf",
		"ts": "2026-08-19T19:21:28.168Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 63586.09,
		"hash": "c0e6a99054cfe6422e07132925561a84ebbacdc1ae12296df1323da6a21cd295"
	},
	{
		"id": "c284c31b4559",
		"ts": "2026-08-19T19:21:28.353Z",
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
		"liquidityUsd": 864618.36,
		"hash": "c284c31b4559ebb0f575b1df70b36b910a22f45a7917c3891e2dc09b863855e6"
	},
	{
		"id": "5792712c9832",
		"ts": "2026-08-19T19:21:28.553Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10806062.11,
		"hash": "5792712c983242bb9e5eb278fe09dc40e3c9fce4bc62782d55350261e840be3e"
	},
	{
		"id": "cc5c07138389",
		"ts": "2026-08-19T19:21:28.735Z",
		"symbol": "evo",
		"token": "0x721B072dbb616F29eEA73ac004e03Fd4E884bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 149917.12,
		"hash": "cc5c07138389f8609fce5b9418febe4d0f348f01120a59bb1ee08fa2feed910f"
	},
	{
		"id": "27cfa88651eb",
		"ts": "2026-08-19T19:21:28.919Z",
		"symbol": "dogue",
		"token": "0xb2000000000000000000003779298b7eB3D8d501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 77059.83,
		"hash": "27cfa88651eb17812e180cba5798622d8b97a040983423347d96efe0f5f6d3b8"
	},
	{
		"id": "19caebc6aff6",
		"ts": "2026-08-19T19:21:29.132Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 566554.39,
		"hash": "19caebc6aff602b21578180b9b01d5342bd3ed3988d5e4f3a156a4b2e841de41"
	},
	{
		"id": "bcc98de23cd9",
		"ts": "2026-08-19T18:28:53.780Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112185231.81,
		"hash": "bcc98de23cd93d47664a682e3805a7534f9e481ac29b6bbff8d96ce10254f169"
	},
	{
		"id": "35d879782054",
		"ts": "2026-08-19T18:28:54.113Z",
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
		"liquidityUsd": 16724100.7,
		"hash": "35d879782054ff8383c37ece6a5e686c07843ffa39ebb9eeb5819d52b725e6f9"
	},
	{
		"id": "5601c4ec7a9b",
		"ts": "2026-08-19T18:28:54.310Z",
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
		"liquidityUsd": 839210.02,
		"hash": "5601c4ec7a9bba40305d498c69ed1cbb31f4bd99a7ed389510c5f48ab0d84170"
	},
	{
		"id": "9a52049fce77",
		"ts": "2026-08-19T18:28:54.513Z",
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
		"liquidityUsd": 27301707.73,
		"hash": "9a52049fce778d9666a11e7ea4ab66db2764fd6cb737a01c816232088a595115"
	},
	{
		"id": "106c5d12f2d0",
		"ts": "2026-08-19T18:28:54.698Z",
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
		"liquidityUsd": 2303082.68,
		"hash": "106c5d12f2d01558efa1e2e4f6455d9b4f794786f5311d6505621ce995c1c2c7"
	},
	{
		"id": "5f95f4f991db",
		"ts": "2026-08-19T18:28:54.881Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 953342.08,
		"hash": "5f95f4f991db116802ca3f387960659dda223ce6ace9fb875c6f6523ad39ee02"
	},
	{
		"id": "73a726864377",
		"ts": "2026-08-19T18:28:55.073Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4199069.22,
		"hash": "73a726864377cc9f5b037b9298228a3a69ca35929958e422a23c4dd9cc850cc9"
	}
]
