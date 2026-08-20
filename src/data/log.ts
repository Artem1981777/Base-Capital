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
	"updatedAt": "2026-08-20T01:00:30.442Z",
	"tokensScored": 12424,
	"verdictsIssued": 12424,
	"safe": 10756,
	"risky": 898,
	"likelyRug": 770,
	"ticks": 730
}

export const verdicts: AgentVerdict[] = [
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
	},
	{
		"id": "e0ff57ccfa85",
		"ts": "2026-08-19T18:28:55.268Z",
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
		"liquidityUsd": 1572856.56,
		"hash": "e0ff57ccfa85046af0ac8181eda0fcc6ccf00a477bd24c1d6cbe532ab4c9a142"
	},
	{
		"id": "2475fc5a6eb4",
		"ts": "2026-08-19T18:28:55.451Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3018489,
		"hash": "2475fc5a6eb490bc4644490ad6faa322ddd6ad36133967ee6928361f61c26b05"
	},
	{
		"id": "2e8b08f9bf68",
		"ts": "2026-08-19T18:28:55.830Z",
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
		"liquidityUsd": 571060.24,
		"hash": "2e8b08f9bf68da9662625d57ac3abc4e86aa80e1afbfa82d3ec6b58c535b59c1"
	},
	{
		"id": "348cbd9afce4",
		"ts": "2026-08-19T18:28:56.011Z",
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
		"liquidityUsd": 431353.8,
		"hash": "348cbd9afce4fba30f15bdddf41b51a37a07595ef33b7e280c490061a93a1ad0"
	},
	{
		"id": "4aa6c74ed73a",
		"ts": "2026-08-19T18:28:56.412Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3711265.86,
		"hash": "4aa6c74ed73ad834a103c3c192bb5478474ba0973d6f47544670a04237a88c36"
	},
	{
		"id": "ab42b59ba7f6",
		"ts": "2026-08-19T18:28:56.770Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4207776.21,
		"hash": "ab42b59ba7f66841f7fbfbf28c959b1670e5f94a24b45d0b197c028cd93cef04"
	},
	{
		"id": "ec8a5d4ccb2b",
		"ts": "2026-08-19T18:28:57.079Z",
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
		"liquidityUsd": 527795.3,
		"hash": "ec8a5d4ccb2bfcf9657d4beb5e4dd170c409748388e21d03b18ed807fd7da81c"
	},
	{
		"id": "1c5456857340",
		"ts": "2026-08-19T18:28:57.263Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55339.92,
		"hash": "1c5456857340e4bb43d182e9c85cc477e369fc9c0fc44ee7b7250cf6b579cd81"
	},
	{
		"id": "a3b840035666",
		"ts": "2026-08-19T18:28:57.447Z",
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
		"liquidityUsd": 868102.48,
		"hash": "a3b840035666686a878032b2fcfba647772726653fc71f89b805c3235957ab8e"
	},
	{
		"id": "499c562dba83",
		"ts": "2026-08-19T18:28:57.630Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10754289.32,
		"hash": "499c562dba834374eea864b25e0b5ecf0b57762e8039d2fe66d043e1faf45ad7"
	},
	{
		"id": "598597a0ce55",
		"ts": "2026-08-19T18:28:57.927Z",
		"symbol": "evo",
		"token": "0x721B072dbb616F29eEA73ac004e03Fd4E884bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 149363.43,
		"hash": "598597a0ce55aef16bdbf41949463a291724fefd70c7e6cc065126dfa1ae824e"
	},
	{
		"id": "0b7fb62cf2d1",
		"ts": "2026-08-19T18:28:58.104Z",
		"symbol": "dogue",
		"token": "0xb2000000000000000000003779298b7eB3D8d501",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 35891.82,
		"hash": "0b7fb62cf2d1b1d04b46ed95b168d73ea19de28d8dfef884b3592770c51ef16b"
	},
	{
		"id": "356457979fe8",
		"ts": "2026-08-19T18:28:58.287Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 563734.98,
		"hash": "356457979fe898a8e5850e79d65488d9bd858e2b00ac922cd833214e8d2e94d3"
	},
	{
		"id": "b78e2b25dcd4",
		"ts": "2026-08-19T17:22:41.526Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112302003.23,
		"hash": "b78e2b25dcd4673790fc7f14dcb4f267895b4fc5b82774ae9f2bebb3ae6a2ffc"
	},
	{
		"id": "b0323a9a43c5",
		"ts": "2026-08-19T17:22:42.168Z",
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
		"liquidityUsd": 17426010.46,
		"hash": "b0323a9a43c5e73d092bf59da27f3be1652ff8f3af6c347c3d60990541c9e94f"
	},
	{
		"id": "6d371ea9d8e6",
		"ts": "2026-08-19T17:22:42.512Z",
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
		"liquidityUsd": 846351.58,
		"hash": "6d371ea9d8e6c88bc7e608b1b435315ed4d18d56b58597b081c298fafe345dd5"
	},
	{
		"id": "09d6e7e35035",
		"ts": "2026-08-19T17:22:42.851Z",
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
		"liquidityUsd": 26744634.38,
		"hash": "09d6e7e35035becdcdacfc012e90b8bc82d5011cd3850cdec90b00e6f7888980"
	},
	{
		"id": "f192cfa16988",
		"ts": "2026-08-19T17:22:43.187Z",
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
		"liquidityUsd": 2305144.35,
		"hash": "f192cfa1698869676d56e32a09de4d86207d9b249cdb732fc7ffcc2f69cc7f89"
	},
	{
		"id": "f869be303c70",
		"ts": "2026-08-19T17:22:43.410Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 950789.17,
		"hash": "f869be303c701cff6b819e8be65f9b157a82bb4cb43a0a71b4b115d489eaafc3"
	},
	{
		"id": "7bc1ba7ab586",
		"ts": "2026-08-19T17:22:43.667Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4202943.14,
		"hash": "7bc1ba7ab58643b7efe4cc2b19eafaf972195da5f9e35297347d7d3ae32bf91e"
	},
	{
		"id": "93529093c9f2",
		"ts": "2026-08-19T17:22:44.025Z",
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
		"liquidityUsd": 1564675.16,
		"hash": "93529093c9f2f4a18507fae7ed5b3e3fadedc0ee4aac8b61f4e1b7eab947a929"
	},
	{
		"id": "111ff38a8042",
		"ts": "2026-08-19T17:22:44.233Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2991632.55,
		"hash": "111ff38a804292309af6b7b8cf14fa9d549bd1ad3ed3826ddb624e52f116ecbc"
	},
	{
		"id": "669e8b075397",
		"ts": "2026-08-19T17:22:44.602Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 387861.67,
		"hash": "669e8b075397c28229f72e708d4bff6871b9b362f8f879a1ef0053df0a6b8b2e"
	},
	{
		"id": "c7e529df6034",
		"ts": "2026-08-19T17:22:44.808Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 573398.75,
		"hash": "c7e529df603468e75979b79bad081fb1fa89709c1a4bfff2dd8581a5f311aa04"
	},
	{
		"id": "f463ca76dda7",
		"ts": "2026-08-19T17:22:45.016Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3700330,
		"hash": "f463ca76dda7e5bc1c901432f043bb1a2f7d2e3635cc17b52ab0246ea2829ae1"
	},
	{
		"id": "031ec7bb9b3b",
		"ts": "2026-08-19T17:22:45.219Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4208321.54,
		"hash": "031ec7bb9b3b49124e676943974b8e08b5025e4c6cbb2b13a8273de6d6bfadbd"
	},
	{
		"id": "6a172c2f47a7",
		"ts": "2026-08-19T17:22:45.435Z",
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
		"liquidityUsd": 534202.08,
		"hash": "6a172c2f47a744580e76ad452fe01d0af11121d20c127ba3e008dc240ddd813a"
	},
	{
		"id": "7d4cedafac61",
		"ts": "2026-08-19T17:22:45.679Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55737.79,
		"hash": "7d4cedafac61f8399e07e3bc4fa8e3516b1f334af028d13319abc866070b998d"
	},
	{
		"id": "a414e1e3fe6b",
		"ts": "2026-08-19T17:22:45.890Z",
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
		"liquidityUsd": 856906.91,
		"hash": "a414e1e3fe6b33cd9180f23628e3c61afbec87efca63f9fd7a1baabd73e329c0"
	},
	{
		"id": "4feaf85659d0",
		"ts": "2026-08-19T17:22:46.100Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10621899.87,
		"hash": "4feaf85659d011f90cf6a8cff1852453dd4f35fc1130cd080afcbda616e19a81"
	},
	{
		"id": "f464d686cf51",
		"ts": "2026-08-19T17:22:46.397Z",
		"symbol": "evo",
		"token": "0x721B072dbb616F29eEA73ac004e03Fd4E884bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 149350.88,
		"hash": "f464d686cf51ae40dd2ef0ecc0170f2b0a883e3fa4c98fc1d5b7f34a769dfe62"
	},
	{
		"id": "5cbb1b335c8f",
		"ts": "2026-08-19T17:22:46.980Z",
		"symbol": "dogue",
		"token": "0xb2000000000000000000003779298b7eB3D8d501",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 34869.63,
		"hash": "5cbb1b335c8fbd3f5e2ea78282ea261e31080d30633214bf1d04434a7844c699"
	},
	{
		"id": "f93d232cca08",
		"ts": "2026-08-19T17:22:47.186Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3149031.25,
		"hash": "f93d232cca083b6839e7302239524945c9c302882956b99c87110c06f2c66185"
	},
	{
		"id": "702cfb35b61c",
		"ts": "2026-08-19T16:26:21.983Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113119599.07,
		"hash": "702cfb35b61ca074442792405889d1be0a26298b20291fd0832a6560b487d849"
	},
	{
		"id": "ed296a71c385",
		"ts": "2026-08-19T16:26:22.650Z",
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
		"liquidityUsd": 14043706.55,
		"hash": "ed296a71c385991560e2040f57a7da959bd8f51455507ff8a6a1155c9bd6b135"
	},
	{
		"id": "599aeec9af9a",
		"ts": "2026-08-19T16:26:23.060Z",
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
		"liquidityUsd": 805467.21,
		"hash": "599aeec9af9a1f2b1a01321185566c00b96e7d91f71d1ec3f925a30877e12191"
	},
	{
		"id": "92f9df522b90",
		"ts": "2026-08-19T16:26:23.567Z",
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
		"liquidityUsd": 26860048.48,
		"hash": "92f9df522b908832c7733e96e8bb248083469e0276cc16a5a6c89f661ace546f"
	},
	{
		"id": "cc349442f1d4",
		"ts": "2026-08-19T16:26:23.969Z",
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
		"liquidityUsd": 2309298.74,
		"hash": "cc349442f1d45eab2fce746552fc07a91c2f238c66c1fe6af65d0275cdc5e3ea"
	},
	{
		"id": "a71d2de57a11",
		"ts": "2026-08-19T16:26:24.214Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 957441.06,
		"hash": "a71d2de57a118cf3732bf36026ea9038ed1ce364a66319cc9b3504b681aac9af"
	},
	{
		"id": "7bde1ed8be59",
		"ts": "2026-08-19T16:26:24.430Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4118554.79,
		"hash": "7bde1ed8be597d860ac6d5d2d834ff2da78d36a313e7d3413312e1909cab961c"
	},
	{
		"id": "e5e9bb9df5fd",
		"ts": "2026-08-19T16:26:24.679Z",
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
		"liquidityUsd": 1580099.84,
		"hash": "e5e9bb9df5fd9c3eb2422ea519abb8238a737c5bfecc2853f2b30d708f5566f0"
	},
	{
		"id": "e469058d4cd4",
		"ts": "2026-08-19T16:26:24.899Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3011464.75,
		"hash": "e469058d4cd44f8181af6d14a6ff05fe3662a81c0ea82deee52470d7d234411b"
	},
	{
		"id": "54e433ac8d9e",
		"ts": "2026-08-19T16:26:25.355Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 388271.31,
		"hash": "54e433ac8d9e800b227dc9adff9d6f91c178f385aeaa1ebf77e710b8dfa0c368"
	},
	{
		"id": "3376d857e5ee",
		"ts": "2026-08-19T16:26:25.562Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 584926.14,
		"hash": "3376d857e5ee0ec942fdd7f943e6da4c841c24ade3faa2163f683587a26024bd"
	},
	{
		"id": "9b6cbd6a5a8b",
		"ts": "2026-08-19T16:26:25.789Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3730472.64,
		"hash": "9b6cbd6a5a8baefc091bf4e22e3e65f7b752280ad0e8d5c9816175eaa5597af6"
	},
	{
		"id": "ddc05b2b84eb",
		"ts": "2026-08-19T16:26:25.990Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4133504.99,
		"hash": "ddc05b2b84ebe05ce43cbd07b2a48963fab6af4e811c58b2bce7a363e179ecf0"
	},
	{
		"id": "92d376e2ced2",
		"ts": "2026-08-19T16:26:26.220Z",
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
		"liquidityUsd": 526052.98,
		"hash": "92d376e2ced26848d12d541a8324f0d2614016d1a1b87ce0d9a4f19546e05bd0"
	},
	{
		"id": "08556c6216ab",
		"ts": "2026-08-19T16:26:26.425Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10827822.7,
		"hash": "08556c6216ab207475039e8bb3dabe55343334ca8fcd6e164ed056a02de088a9"
	},
	{
		"id": "84a3745a79a4",
		"ts": "2026-08-19T16:26:26.659Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 45297.02,
		"hash": "84a3745a79a4214208e00f8fdd6ea8e4902a2fcaca6aca8024c3d52d0d169f11"
	},
	{
		"id": "2c321302fc19",
		"ts": "2026-08-19T16:26:26.860Z",
		"symbol": "dogue",
		"token": "0xb2000000000000000000003779298b7eB3D8d501",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 40103.14,
		"hash": "2c321302fc1947ee8a8818899614efaaebbb4fed6925003277a4c7772ebb4345"
	},
	{
		"id": "ca15227e3f46",
		"ts": "2026-08-19T16:26:27.097Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3175601.76,
		"hash": "ca15227e3f468d51ae2475025ae714c209c92ae0617b5ece1ebdb4fa4920582d"
	},
	{
		"id": "bdde8917c264",
		"ts": "2026-08-19T16:26:27.318Z",
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
		"liquidityUsd": 857036.26,
		"hash": "bdde8917c2647cd494ee46211a27692e9d73272185586c47a9480005cb5d8302"
	},
	{
		"id": "b7f646b620a4",
		"ts": "2026-08-19T15:26:42.019Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113678172.85,
		"hash": "b7f646b620a42b7c4fa021e70cd1ae2249dc8bbce9b4ad9e1c90aa102c804d88"
	},
	{
		"id": "4a0dc580c18f",
		"ts": "2026-08-19T15:26:42.637Z",
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
		"liquidityUsd": 12746117.37,
		"hash": "4a0dc580c18f8f3161369307115507c8bc149f920a41f2ea2064403797bf1dcd"
	},
	{
		"id": "ef0e752cfe88",
		"ts": "2026-08-19T15:26:43.066Z",
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
		"liquidityUsd": 772258.91,
		"hash": "ef0e752cfe88b6b6a5c30557e84e8029b00a1f1aaaa71aae76ee1e634650a859"
	},
	{
		"id": "748bd60e0a29",
		"ts": "2026-08-19T15:26:43.523Z",
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
		"liquidityUsd": 27254881.48,
		"hash": "748bd60e0a29bb4b5290749d4d6d01424afecf4c6f15c64d88b70eaf9493f684"
	},
	{
		"id": "4abc56af6152",
		"ts": "2026-08-19T15:26:43.977Z",
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
		"liquidityUsd": 2278715.8,
		"hash": "4abc56af6152fc564311ed974715558c4860738841de4065bb711f9c7f54a12c"
	},
	{
		"id": "caede6f9548e",
		"ts": "2026-08-19T15:26:44.231Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 908651.99,
		"hash": "caede6f9548ebd1102054a9a71b92e9dbcae0aaa573dcac288ec57f359042e96"
	},
	{
		"id": "42a725b1d78e",
		"ts": "2026-08-19T15:26:44.479Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4379375.42,
		"hash": "42a725b1d78e0da85d4f7aff2f94fd6f263ff3b9faf8cda77f81e8cee541d3f0"
	},
	{
		"id": "06692ac9d6ba",
		"ts": "2026-08-19T15:26:44.889Z",
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
		"liquidityUsd": 1529456.14,
		"hash": "06692ac9d6bab6fa872682cbf7e5d07d1c48383cb611f9f02bbdb4ab4be8e26e"
	},
	{
		"id": "bbbb0fd47708",
		"ts": "2026-08-19T15:26:45.122Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3007418.73,
		"hash": "bbbb0fd477081cff4e1c6f9f5cb134f75c52bc0ba79f731cd246bc9031bf83b8"
	},
	{
		"id": "3cdb8425c0d0",
		"ts": "2026-08-19T15:26:45.579Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 395236.34,
		"hash": "3cdb8425c0d02537a16e5b745cdb120575f7b76bf4393fbc9aef82a1db6507d6"
	},
	{
		"id": "d3fe17a79060",
		"ts": "2026-08-19T15:26:45.805Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 560364.82,
		"hash": "d3fe17a790601c4657039f87aa9a583e5201deb8846cb8735a60b39ce83937e8"
	},
	{
		"id": "458dbf8ed074",
		"ts": "2026-08-19T15:26:46.126Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3705359.85,
		"hash": "458dbf8ed074179739652e9990646d59f3156494ef86e35845ea8bbe0e8b33ab"
	},
	{
		"id": "99c8e35c6331",
		"ts": "2026-08-19T15:26:46.357Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4379375.42,
		"hash": "99c8e35c6331714cebe9a96c7851be701c4bc6b20efb38fadfbc00efdf62edb8"
	},
	{
		"id": "94887b531ab5",
		"ts": "2026-08-19T15:26:46.590Z",
		"symbol": "dogue",
		"token": "0xb2000000000000000000003779298b7eB3D8d501",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 34685.65,
		"hash": "94887b531ab5a20204998f260cc8ca82c6c67486c23850f461d2f18e3dd3d491"
	},
	{
		"id": "904a0b17fbc2",
		"ts": "2026-08-19T15:26:46.809Z",
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
		"liquidityUsd": 508952.6,
		"hash": "904a0b17fbc2580523d7a49583c72ac4896d685d856c29787cb00ab161893be6"
	},
	{
		"id": "712cef50246e",
		"ts": "2026-08-19T15:26:47.021Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10691566.58,
		"hash": "712cef50246e1f2575d115624fef34dd45526b862e7674352dcb3b22721fd7b6"
	},
	{
		"id": "2fb283ff63f2",
		"ts": "2026-08-19T15:26:47.329Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 52702.39,
		"hash": "2fb283ff63f27b2907f5ed7d62aade97397ac7046ad03df7d433bac69ff1c667"
	},
	{
		"id": "97669dbafe21",
		"ts": "2026-08-19T15:26:47.545Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3059359.1,
		"hash": "97669dbafe2112ed9b8f9e23664533dde878fd4b43ac4e7b8956e1793d1df0d1"
	},
	{
		"id": "95322ea5c6cc",
		"ts": "2026-08-19T15:26:47.768Z",
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
		"liquidityUsd": 860406.39,
		"hash": "95322ea5c6cc7912f35822c7e8e6e8640ee0b79b973f70740b044a3fd50d92d3"
	},
	{
		"id": "5f55253710f8",
		"ts": "2026-08-19T15:26:48.004Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 608535.79,
		"hash": "5f55253710f8dc02d92a80ebcf5d00c7124f28c2aaea36cb6546ca83256a6302"
	},
	{
		"id": "6e40f46404e0",
		"ts": "2026-08-19T14:28:44.067Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112398952.42,
		"hash": "6e40f46404e0179750f4231e46e90572c084cb257dfffcfd21ab1fc8bab89498"
	},
	{
		"id": "9003d4e27bd7",
		"ts": "2026-08-19T14:28:44.707Z",
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
		"liquidityUsd": 13422088.55,
		"hash": "9003d4e27bd791683cfb883e20f7977b54f6063d819dbd5d3c9a9405018c1a98"
	}
]
