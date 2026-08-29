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
	"updatedAt": "2026-08-29T03:03:18.659Z",
	"tokensScored": 15420,
	"verdictsIssued": 15420,
	"safe": 13144,
	"risky": 1131,
	"likelyRug": 1145,
	"ticks": 889
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "176f7385424f",
		"ts": "2026-08-29T03:03:13.970Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116256039.08,
		"hash": "176f7385424fcf3b37db20b1c33b918bd584d102139f3820cf85b360bc443398"
	},
	{
		"id": "67c314b4d16f",
		"ts": "2026-08-29T03:03:14.363Z",
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
		"liquidityUsd": 17644139.08,
		"hash": "67c314b4d16fdf059a4c7604034cf315d75868b8cba962e94f9495adf6c58b60"
	},
	{
		"id": "006d219d987f",
		"ts": "2026-08-29T03:03:14.712Z",
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
		"liquidityUsd": 952829.01,
		"hash": "006d219d987f8fc1d9bfba092943f5d0e133cce80aff962341fdcc0bac13b57a"
	},
	{
		"id": "7ad69133de61",
		"ts": "2026-08-29T03:03:14.910Z",
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
		"liquidityUsd": 28944430.23,
		"hash": "7ad69133de6128644130b60850b02f251ceacbddc803af2368c588600c90915e"
	},
	{
		"id": "68219670b37c",
		"ts": "2026-08-29T03:03:15.113Z",
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
		"liquidityUsd": 4069212.26,
		"hash": "68219670b37cb77cef890a8e4f066cff69d13fcc99f3a7fe0eba7cf1b29415dc"
	},
	{
		"id": "671f6159ca66",
		"ts": "2026-08-29T03:03:15.321Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1152345.2,
		"hash": "671f6159ca662b15293fd714cf97377c4e280a3c198c969e616ca2866502eb51"
	},
	{
		"id": "c31b3682aea0",
		"ts": "2026-08-29T03:03:15.530Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1889233.6,
		"hash": "c31b3682aea01d2da797566c54635c6b6a37eb732242757a1a89027aeabcc9f6"
	},
	{
		"id": "f7a8bb0f9aaa",
		"ts": "2026-08-29T03:03:15.727Z",
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
		"liquidityUsd": 1781761.01,
		"hash": "f7a8bb0f9aaa0825dbe11b1571dbca0a8b16c95c00607a6bd4ad4981c3ffaf59"
	},
	{
		"id": "98fa2656fa7d",
		"ts": "2026-08-29T03:03:15.927Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1312068.58,
		"hash": "98fa2656fa7d17e4ffbf1173dc01e9fa76300674feae746832d7de9d53487d1b"
	},
	{
		"id": "d1dcf449b22e",
		"ts": "2026-08-29T03:03:16.156Z",
		"symbol": "BASELINE",
		"token": "0xb20000000000000000000000c6f9024862C6fb01",
		"score": 5,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.9,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 133061.2,
		"hash": "d1dcf449b22e7b988c8bbc04eff4fde7b8cba340f1ce4f6ee43b340195b12be2"
	},
	{
		"id": "3ab940d6e23a",
		"ts": "2026-08-29T03:03:16.370Z",
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
		"liquidityUsd": 642808.07,
		"hash": "3ab940d6e23ae2620485b1dd85a5614d9cc584be302faf01790434d68727b9a9"
	},
	{
		"id": "eceee8b073a7",
		"ts": "2026-08-29T03:03:16.570Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 151809.86,
		"hash": "eceee8b073a7649a957e39a5853ffb59b2aec647dcb0f16930421eb382dc1b7e"
	},
	{
		"id": "d4e9ec1d6cf0",
		"ts": "2026-08-29T03:03:16.763Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 105502.78,
		"hash": "d4e9ec1d6cf0b59a622cd62892212879bd975a3e2a384b91f36b9ded48588a3a"
	},
	{
		"id": "e100af6c8a39",
		"ts": "2026-08-29T03:03:16.965Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3605433.25,
		"hash": "e100af6c8a39bba0682cf58ec85cd8bae8d4e0daf83649118d70d98715d62a70"
	},
	{
		"id": "1ffd0f8061bb",
		"ts": "2026-08-29T03:03:17.639Z",
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
		"liquidityUsd": 853380.8,
		"hash": "1ffd0f8061bb1a89cf643a40de01631f4995685d6a70fcdd05553390f5c32258"
	},
	{
		"id": "33f5ca6979cd",
		"ts": "2026-08-29T03:03:17.826Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4124389.65,
		"hash": "33f5ca6979cd63c5e373394fdb1cdb169a401a83a48f0014e9cff61620d20992"
	},
	{
		"id": "29492dacc920",
		"ts": "2026-08-29T03:03:18.019Z",
		"symbol": "ElonRWA",
		"token": "0xAa6Cccdce193698D33deb9ffd4be74eAa74c4898",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 616586.99,
		"hash": "29492dacc920ba7f641436e0b88d6855ba9925000ee92ef8998c29403696743f"
	},
	{
		"id": "3d0aaa498057",
		"ts": "2026-08-29T03:03:18.202Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1310352.77,
		"hash": "3d0aaa4980574488eb963dfce629b5c89082c13f08b666944aca780629577714"
	},
	{
		"id": "278383787c54",
		"ts": "2026-08-29T03:03:18.393Z",
		"symbol": "ROBA",
		"token": "0xE88419A3fc78364cfe3dE88080eE4853fAb754C6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 110485.51,
		"hash": "278383787c5402f3b313fb97cabb8424c08a9ff7228a326566c63fca63bc9a00"
	},
	{
		"id": "dec55474dfbf",
		"ts": "2026-08-29T03:03:18.659Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 512452.85,
		"hash": "dec55474dfbf61ff39bff3732a2bfbb72fdfac552ed31a9aa8ec51d13636b754"
	},
	{
		"id": "d980e9908e70",
		"ts": "2026-08-28T20:39:57.644Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116064096.83,
		"hash": "d980e9908e70e9d07214e9106deced4fdaae45dde9f8db3e78eb19835358f1ce"
	},
	{
		"id": "0b509f23422d",
		"ts": "2026-08-28T20:39:58.088Z",
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
		"liquidityUsd": 18511722.42,
		"hash": "0b509f23422da5661a54884f83fdafe741476b41053107a5b805f3b9f9018707"
	},
	{
		"id": "228a0fa52b73",
		"ts": "2026-08-28T20:39:58.543Z",
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
		"liquidityUsd": 946384.98,
		"hash": "228a0fa52b730f47a15b3857304a173a00651105d694c233216d1bb43099dc0b"
	},
	{
		"id": "95d68e3e5f37",
		"ts": "2026-08-28T20:39:58.795Z",
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
		"liquidityUsd": 28658890.58,
		"hash": "95d68e3e5f37609d605478edeb7aa72223eaa307f21c6a20cc73a0bc0d162a6d"
	},
	{
		"id": "207fdaf94f87",
		"ts": "2026-08-28T20:39:59.042Z",
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
		"liquidityUsd": 4073676.74,
		"hash": "207fdaf94f8734157d679986db3a73b1762c99fc3e184d61940aff32a49a83ca"
	},
	{
		"id": "899926f83808",
		"ts": "2026-08-28T20:39:59.298Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1146932.6,
		"hash": "899926f83808dc6258829b03532f4c899f29e8c40eb37fa89dc7bc9744b37e6b"
	},
	{
		"id": "99c5490bd202",
		"ts": "2026-08-28T20:39:59.557Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1815416.27,
		"hash": "99c5490bd202c3dcbbfc05777cb4cd99b6785ab1e86ff30995590b4eee9576f7"
	},
	{
		"id": "870ed723e100",
		"ts": "2026-08-28T20:39:59.812Z",
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
		"liquidityUsd": 1810851.73,
		"hash": "870ed723e100d28255fd2be0f4a3294137b282431192f47045b51e9d0430685a"
	},
	{
		"id": "69f1065a925f",
		"ts": "2026-08-28T20:40:00.059Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1313532.31,
		"hash": "69f1065a925fccb3340f83973b3bfa8e39df6c9b8384c4274653756e98d5e72b"
	},
	{
		"id": "02ae11309968",
		"ts": "2026-08-28T20:40:00.319Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 644664.42,
		"hash": "02ae1130996861c7cb6a421e03b419e2b130774263482abbb29196faf2fe28dd"
	},
	{
		"id": "0054c3a0bae3",
		"ts": "2026-08-28T20:40:00.559Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3606916.61,
		"hash": "0054c3a0bae3c5fbe70ce05df3dd36b2a5b6ba9efcc501a808789570a70f45d1"
	},
	{
		"id": "4ab24a3b9c61",
		"ts": "2026-08-28T20:40:00.801Z",
		"symbol": "BASELINE",
		"token": "0xb20000000000000000000000c6f9024862C6fb01",
		"score": 5,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.9,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 106330.45,
		"hash": "4ab24a3b9c611db23fd85d28573e96e31d00b6225336accbe2de5c1c9b3cb456"
	},
	{
		"id": "297cdac6b0ad",
		"ts": "2026-08-28T20:40:01.065Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 97885.02,
		"hash": "297cdac6b0ad0da2f80a2adcfe7ec1b5173ea1d275764975e2c4241081c5e4b6"
	},
	{
		"id": "9b8b17b8c081",
		"ts": "2026-08-28T20:40:01.322Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1301695.67,
		"hash": "9b8b17b8c08112b14b13a6f57f69e998fb546d7603c66c9429fb8e69b4efa245"
	},
	{
		"id": "fba99d5bf298",
		"ts": "2026-08-28T20:40:01.570Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 113622.58,
		"hash": "fba99d5bf2989aca72320238834b77a8c5bdc2249d8170704368f8c63b037d5d"
	},
	{
		"id": "41a0d5e35f7a",
		"ts": "2026-08-28T20:40:01.845Z",
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
		"liquidityUsd": 881027.51,
		"hash": "41a0d5e35f7ae8c74ae997d8317176d605e5a527e4e432c20d5f0927cb1d8fa6"
	},
	{
		"id": "f36acba1ea37",
		"ts": "2026-08-28T20:40:02.102Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4060466.06,
		"hash": "f36acba1ea3713b5792d9fa32084b917356fd8dbf10daff5a83f9c732411cd47"
	},
	{
		"id": "338056507ac5",
		"ts": "2026-08-28T20:40:02.498Z",
		"symbol": "ElonRWA",
		"token": "0xAa6Cccdce193698D33deb9ffd4be74eAa74c4898",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 580118.65,
		"hash": "338056507ac5dba45998d245fb5abb0db52c23f608b274ee6d00bf5731bd15f8"
	},
	{
		"id": "3ba248af7852",
		"ts": "2026-08-28T08:50:56.154Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116117083,
		"hash": "3ba248af7852c41368a57760c20bb95ee3adc79219f6a57b467265adf1c73d03"
	},
	{
		"id": "3841815094a7",
		"ts": "2026-08-28T08:50:56.657Z",
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
		"liquidityUsd": 18382254.44,
		"hash": "3841815094a71be20c7da7ea4389fac71a04ba2d059526ffcbd9e9885f3c9e65"
	},
	{
		"id": "bc04e588801f",
		"ts": "2026-08-28T08:50:56.915Z",
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
		"liquidityUsd": 974734.66,
		"hash": "bc04e588801fe2aa06effc27d8b021d84fa186f6894bc0bd9eb9be92ab88e542"
	},
	{
		"id": "08df1d90ec6d",
		"ts": "2026-08-28T08:50:57.153Z",
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
		"liquidityUsd": 29183018.66,
		"hash": "08df1d90ec6d85445b883aac4a810a2a397c6743c2a9e8ee68199b8ed92dec34"
	},
	{
		"id": "dc5e4dfab0d7",
		"ts": "2026-08-28T08:50:57.388Z",
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
		"liquidityUsd": 4192359.38,
		"hash": "dc5e4dfab0d7a371a4172b4b2aba655f9d2cec2687f2f187570d3b35a1a5ef00"
	},
	{
		"id": "8621d62563e3",
		"ts": "2026-08-28T08:50:57.634Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1184704.06,
		"hash": "8621d62563e3192fe7847f09a61d1ad7fd9785ddbc38d54a4e44dd10251d4ee5"
	},
	{
		"id": "480b7c75a4ad",
		"ts": "2026-08-28T08:50:57.892Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1626680.94,
		"hash": "480b7c75a4ad2a7521ff7ea5f1875eaa2ea9ad9a88f77497519ddfd525741541"
	},
	{
		"id": "3e37ec56b495",
		"ts": "2026-08-28T08:50:58.156Z",
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
		"liquidityUsd": 1892515.19,
		"hash": "3e37ec56b49513e2460adfb4321792ba443f7836e4849083bbb262a4df03a9b1"
	},
	{
		"id": "d718b4f0f371",
		"ts": "2026-08-28T08:50:58.415Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1363658.36,
		"hash": "d718b4f0f3710144ab10152cb19e5aa6cef787e81c39a054f1513723a8bda902"
	},
	{
		"id": "6f21452ef2d0",
		"ts": "2026-08-28T08:50:58.654Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 728112.16,
		"hash": "6f21452ef2d04cf05fbd3c9ff3d25196357c8aad362fafe59a6c38c5fade4030"
	},
	{
		"id": "26d3a681d3b2",
		"ts": "2026-08-28T08:50:58.869Z",
		"symbol": "MAMO",
		"token": "0x7300B37DfdfAb110d83290A29DfB31B1740219fE",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 441962.83,
		"hash": "26d3a681d3b2932b73a66a1f3df41c0107fefc20e507502b5b0a447199c79504"
	},
	{
		"id": "d8ded8a2458f",
		"ts": "2026-08-28T08:50:59.101Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3682928.49,
		"hash": "d8ded8a2458f7320fcacda3917826b4fd59cb60a08a63db90fa9fa70143d41cb"
	},
	{
		"id": "14523eff7e2f",
		"ts": "2026-08-28T08:50:59.332Z",
		"symbol": "FRIEND",
		"token": "0x0bD4887f7D41B35CD75DFF9FfeE2856106f86670",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 260598.12,
		"hash": "14523eff7e2f54cc3c7a0db64649d2ea4d1293f78318924c611f3565f164ee54"
	},
	{
		"id": "3432c57f192c",
		"ts": "2026-08-28T08:50:59.553Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 613301.66,
		"hash": "3432c57f192c044f6c7aa5b2a1636408b05b74310eff12ce1ebd46d3c980df98"
	},
	{
		"id": "be0ba1fc332d",
		"ts": "2026-08-28T08:50:59.773Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 192732.72,
		"hash": "be0ba1fc332dd002094fc22c804eaf47281c951b9ef80b394d84152da1b2cbe8"
	},
	{
		"id": "57b116d29b2b",
		"ts": "2026-08-28T08:50:59.990Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 105156.21,
		"hash": "57b116d29b2b8fc0c2080830dc0e399a046eee930f6a02f616218fb5cbb7a5fb"
	},
	{
		"id": "57c971190832",
		"ts": "2026-08-28T08:51:01.149Z",
		"symbol": "BASED10",
		"token": "0x9f8529DBeEf9fEb94d9084790DA3AE49aD03ab07",
		"score": 53,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.06,
		"flags": [
			"medium_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 32657,
		"hash": "57c97119083261b710d04713dabdaa5136f013d78c1db4eb6e6b55f685b562d3"
	},
	{
		"id": "87a9a69a6202",
		"ts": "2026-08-28T08:51:01.395Z",
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
		"liquidityUsd": 1338211.13,
		"hash": "87a9a69a62020f865b54a21443af26ef3515b0175047fd2408164b6458333398"
	},
	{
		"id": "0b04cc4d34ff",
		"ts": "2026-08-28T08:51:01.693Z",
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
		"liquidityUsd": 633528.36,
		"hash": "0b04cc4d34ff80b8870355571a9bf2d80ea38f8da2dae0218f2c8c3dfa6678a9"
	},
	{
		"id": "da3e03e5c861",
		"ts": "2026-08-27T23:32:07.771Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115950050.62,
		"hash": "da3e03e5c861685ec97e60868598640a8e04b0e41c89ebf869eab2374f5d08ff"
	},
	{
		"id": "996e0a6e0cf5",
		"ts": "2026-08-27T23:32:08.225Z",
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
		"liquidityUsd": 17691959.5,
		"hash": "996e0a6e0cf548fdf0b4f27379190d461b5059de012cb70650fcb75813b1d29e"
	},
	{
		"id": "0f4e3d275e5c",
		"ts": "2026-08-27T23:32:08.471Z",
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
		"liquidityUsd": 993750.82,
		"hash": "0f4e3d275e5c0f87cfb2b2acb7cbdf0e0571889fa685690f159f3dd92be6e84d"
	},
	{
		"id": "2b77c72a7f02",
		"ts": "2026-08-27T23:32:08.731Z",
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
		"liquidityUsd": 29654458.9,
		"hash": "2b77c72a7f02ad19eef862b8d869791cecdc91efc58122d57d40c42e6f17647e"
	},
	{
		"id": "3db1f5ca17c9",
		"ts": "2026-08-27T23:32:08.986Z",
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
		"liquidityUsd": 4261878.75,
		"hash": "3db1f5ca17c93fa1eb0887089a4189b64aa4bfb919e9531dae617bc1b97a76ba"
	},
	{
		"id": "044e7c71bc71",
		"ts": "2026-08-27T23:32:09.233Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1199464.2,
		"hash": "044e7c71bc719570ac46734e608720975b62fd646258d0a7b174875a8bcc2ce0"
	},
	{
		"id": "5a96af0f469b",
		"ts": "2026-08-27T23:32:09.586Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1366492.27,
		"hash": "5a96af0f469bc7794a8b9060cc2549ead23bce32fac0a642d25e6fa0508b739a"
	},
	{
		"id": "67845f62d463",
		"ts": "2026-08-27T23:32:09.838Z",
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
		"liquidityUsd": 1904225.6,
		"hash": "67845f62d463e4963aba0da359c2636acb15ac3a5ffc8351345bb410807cbc63"
	},
	{
		"id": "43f4ed72ba30",
		"ts": "2026-08-27T23:32:10.108Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 711205.86,
		"hash": "43f4ed72ba3052306020246184ad2c80a09f44b00374815617254ad6975f1d9d"
	},
	{
		"id": "6c7a346f0eca",
		"ts": "2026-08-27T23:32:10.373Z",
		"symbol": "FRIEND",
		"token": "0x0bD4887f7D41B35CD75DFF9FfeE2856106f86670",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"hidden_owner",
			"mintable",
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 226909.28,
		"hash": "6c7a346f0ecaf8f36c7d6536ad94c2028da46ec13c4ebad8dcd3e514ca436655"
	},
	{
		"id": "42d5a1a180a9",
		"ts": "2026-08-27T23:32:10.601Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1606699.41,
		"hash": "42d5a1a180a94d601ff69ab2ffaadfe189685efa292ce8a7b0834d2abc4eae0a"
	},
	{
		"id": "d037a437dda6",
		"ts": "2026-08-27T23:32:10.929Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 617234.97,
		"hash": "d037a437dda63b3a7bee425e76a1d2a5926d2767e72186fe3e646abaa4b6b50a"
	},
	{
		"id": "c02db521e785",
		"ts": "2026-08-27T23:32:11.158Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 187315.98,
		"hash": "c02db521e7856462cf62e340e10572552be95f32e77461fd2d6e058fbbd233b4"
	},
	{
		"id": "d405997ce1ea",
		"ts": "2026-08-27T23:32:11.388Z",
		"symbol": "MAMO",
		"token": "0x7300B37DfdfAb110d83290A29DfB31B1740219fE",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 447149.47,
		"hash": "d405997ce1ea0fe6152dffb9e067d9d6fe57d07c8d3ea6e7dd6fb2d33144336d"
	},
	{
		"id": "82e477956575",
		"ts": "2026-08-27T23:32:11.615Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3591793.13,
		"hash": "82e47795657541879bee0071724f6bc1af6f2a9344f3c97046993fb9da7bc9c8"
	},
	{
		"id": "2c8bccf26661",
		"ts": "2026-08-27T23:32:11.845Z",
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
		"liquidityUsd": 929222.8,
		"hash": "2c8bccf2666109f4c43db12c368c241039bced397aa716a5adde3041265b0309"
	},
	{
		"id": "cff978f7f3cb",
		"ts": "2026-08-27T23:32:12.078Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 108616.28,
		"hash": "cff978f7f3cba2d74960f899ceed029e7f93a12fd264acfdf9f141b03ef9925c"
	},
	{
		"id": "b87aa3ed088e",
		"ts": "2026-08-27T23:32:12.312Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1149788.61,
		"hash": "b87aa3ed088e3d353aa0233fca918dedaa3abe2c3a2d498e7454d1a0c7494c1c"
	},
	{
		"id": "337cd3d7d79d",
		"ts": "2026-08-27T13:41:45.925Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115722075.83,
		"hash": "337cd3d7d79d116a262588901429126ec611203e0d94a9ce20fccfb3a7d6304f"
	},
	{
		"id": "d11e85fe17ae",
		"ts": "2026-08-27T13:41:46.184Z",
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
		"liquidityUsd": 17045076.07,
		"hash": "d11e85fe17aef9e5c1fa585f61c82656a3b45183a67ad858fb18e70916b18fb3"
	},
	{
		"id": "702cca969c31",
		"ts": "2026-08-27T13:41:46.427Z",
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
		"liquidityUsd": 989103.88,
		"hash": "702cca969c316cb8ef7ca04bcd541862bc782f05d412b26bd047e96f455715fb"
	},
	{
		"id": "201d8a69fe9a",
		"ts": "2026-08-27T13:41:46.688Z",
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
		"liquidityUsd": 29443217.28,
		"hash": "201d8a69fe9a93b65e8a98be3262488784ab58b27f8b480fd3b8daa39fc48a3d"
	},
	{
		"id": "e6cfef501a90",
		"ts": "2026-08-27T13:41:46.951Z",
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
		"liquidityUsd": 4254811.59,
		"hash": "e6cfef501a90f0d44565cc43795bc8eaec23bd304539081a7b068f90cb4e9896"
	},
	{
		"id": "07a1c7c6a7cc",
		"ts": "2026-08-27T13:41:47.220Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1191709.52,
		"hash": "07a1c7c6a7ccbf1dd5daf31b025591eca62bf616185d854b08f5d82fa61f5142"
	},
	{
		"id": "9530d66532c5",
		"ts": "2026-08-27T13:41:47.500Z",
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
		"liquidityUsd": 1429433.11,
		"hash": "9530d66532c5ed85d71d7384926e22f786ae1a1efe4f4cfcbf26c1b348ed7ad2"
	},
	{
		"id": "379eafc0f7ab",
		"ts": "2026-08-27T13:41:47.777Z",
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
		"liquidityUsd": 4144287.73,
		"hash": "379eafc0f7ab2c7baaa6227b27ee9af0c570945985c938d9618ef7d1cb65c184"
	},
	{
		"id": "bb6d81d09362",
		"ts": "2026-08-27T13:41:48.065Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 189079.39,
		"hash": "bb6d81d09362211206db70bbd2a8258096630c1d1318df02341741f2729f73f6"
	},
	{
		"id": "2c8fb16cb1dc",
		"ts": "2026-08-27T13:41:48.317Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1264856.24,
		"hash": "2c8fb16cb1dc4982bb080810c2cf42f978a603a92e9636479105821c62a023d5"
	},
	{
		"id": "0c0908fe4ac7",
		"ts": "2026-08-27T13:41:48.554Z",
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
		"liquidityUsd": 738981.21,
		"hash": "0c0908fe4ac7aa80c50de526179051255b42c2e3aa2456e0373051b15fd8964d"
	},
	{
		"id": "48a82067a305",
		"ts": "2026-08-27T13:41:48.778Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 762735.4,
		"hash": "48a82067a305c0c2e8b8ecadf3371e124e33d1bd36ef016d2f79d278039ea51a"
	},
	{
		"id": "7f9b31fd6a9b",
		"ts": "2026-08-27T13:41:49.013Z",
		"symbol": "CAPACITR",
		"token": "0x65F8152809Dd1fC0D5d8A345c9008d37B95f9ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 264779.53,
		"hash": "7f9b31fd6a9b66c7ee595d3bf6f11a744f58cc528f79632203828550fe1171cf"
	},
	{
		"id": "a8a30c3ab56c",
		"ts": "2026-08-27T13:41:49.251Z",
		"symbol": "FRIEND",
		"token": "0x0bD4887f7D41B35CD75DFF9FfeE2856106f86670",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 344579.59,
		"hash": "a8a30c3ab56c631c3eb0f5e0a1ea038c2eb1f64b6397f451be5689edfcda4f31"
	},
	{
		"id": "92a3c61ad417",
		"ts": "2026-08-27T13:41:49.474Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3497242.24,
		"hash": "92a3c61ad417b8142ac458584c4ae275c76dab94eb1bc90aee672260d06c0310"
	},
	{
		"id": "2c636b9200c9",
		"ts": "2026-08-27T13:41:49.710Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1350251.18,
		"hash": "2c636b9200c923bc9cfcd0040dbed134ec47b79025573e109595775e4dea1fb5"
	},
	{
		"id": "a306fa0e6dfa",
		"ts": "2026-08-27T13:41:49.945Z",
		"symbol": "MAMO",
		"token": "0x7300B37DfdfAb110d83290A29DfB31B1740219fE",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 491772.73,
		"hash": "a306fa0e6dfa2919a5170ff7af32908dfd182c7c9013600b76b9bbbab58d9fd0"
	},
	{
		"id": "10bd984b4573",
		"ts": "2026-08-27T13:41:50.169Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1129374.72,
		"hash": "10bd984b45732cba3fa60642cf145663b4fb2cd5c6a9a8c8ed7c6689418f9fae"
	},
	{
		"id": "8019e3ed7d72",
		"ts": "2026-08-27T13:41:50.408Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1430060.54,
		"hash": "8019e3ed7d72d9bace5e8337f78e3a51800ba727a0d81e04cdc89b27e89d9b19"
	},
	{
		"id": "fc3eb9e9e8b9",
		"ts": "2026-08-27T02:51:15.918Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115713097.48,
		"hash": "fc3eb9e9e8b9cb262560e36b7b4121c9f6b15e17d4e3215cb38aab55fc2e0f5e"
	},
	{
		"id": "d75fe2281ca2",
		"ts": "2026-08-27T02:51:16.381Z",
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
		"liquidityUsd": 17376731.16,
		"hash": "d75fe2281ca260e19c89099a6a0e2aca33510109bae6412f88538f93e14e33ff"
	},
	{
		"id": "952b6e5d27e5",
		"ts": "2026-08-27T02:51:16.636Z",
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
		"liquidityUsd": 984912.55,
		"hash": "952b6e5d27e5411b947fc1dbc12a8cba1dde10ed7b12e451f96a66fc30b12368"
	},
	{
		"id": "8e45ae23e500",
		"ts": "2026-08-27T02:51:16.889Z",
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
		"liquidityUsd": 29481894.92,
		"hash": "8e45ae23e500553fd61a26657f6fa9304800a23b9675369eec54a0f850ca0234"
	},
	{
		"id": "f357a385d293",
		"ts": "2026-08-27T02:51:17.144Z",
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
		"liquidityUsd": 4313810.14,
		"hash": "f357a385d29309eb6b1733fc8cbcc9860c4f91e4f3dbf17d36f74de79763427e"
	},
	{
		"id": "2c3e56e2d7e6",
		"ts": "2026-08-27T02:51:17.408Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1192563.02,
		"hash": "2c3e56e2d7e672cf8dabc34a303c99d5e0b71b1dd0bd51ff711bf9061db6ab3c"
	},
	{
		"id": "2813b14aa75d",
		"ts": "2026-08-27T02:51:17.661Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29481894.92,
		"hash": "2813b14aa75dc297d08139a55d16565a4f2fee484abc3567afd40aa3c99b4f9e"
	},
	{
		"id": "85ebd48b4623",
		"ts": "2026-08-27T02:51:17.930Z",
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
		"liquidityUsd": 3671779.37,
		"hash": "85ebd48b46239f76d407353368cc7e6415f9f83436c1121f705a6e954fb26330"
	},
	{
		"id": "19ca8ed454f1",
		"ts": "2026-08-27T02:51:18.183Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 176527.44,
		"hash": "19ca8ed454f10fd20c1ff24c2607db656d0af441e8cda9b73e750b8269a6015c"
	},
	{
		"id": "de77b75a9a5f",
		"ts": "2026-08-27T02:51:18.439Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1193293.01,
		"hash": "de77b75a9a5f0720f08d6ae27227c74225df8e3005f189c4994712e6a15721c7"
	},
	{
		"id": "3863abb8ba50",
		"ts": "2026-08-27T02:51:18.675Z",
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
		"liquidityUsd": 774246.43,
		"hash": "3863abb8ba50b3cae520c8b83a35aa71670c1cb9ffbb02a5464bba6d81509737"
	},
	{
		"id": "5308cb2984da",
		"ts": "2026-08-27T02:51:18.960Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1379674.77,
		"hash": "5308cb2984da821d084a57c533344773cb514c7a448aba77850ef18fdb766ba8"
	},
	{
		"id": "e6f9cf160ff2",
		"ts": "2026-08-27T02:51:19.191Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1427267.29,
		"hash": "e6f9cf160ff26c1ca84ce48cd5c6b4919aa13151135adea23a1315ca12b5d91b"
	},
	{
		"id": "3a2ec66ddb3f",
		"ts": "2026-08-27T02:51:19.422Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3487465.37,
		"hash": "3a2ec66ddb3fc47268dd4059f69b6651b43c45534811180e6611e10180627609"
	},
	{
		"id": "b1d7a758cdb9",
		"ts": "2026-08-27T02:51:19.665Z",
		"symbol": "CAPACITR",
		"token": "0x65F8152809Dd1fC0D5d8A345c9008d37B95f9ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 268296.4,
		"hash": "b1d7a758cdb962e1e465452d7610ddfd6a1df447e4edcfe41c448c8cf7151d21"
	},
	{
		"id": "45754f3585da",
		"ts": "2026-08-27T02:51:19.898Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1073646.58,
		"hash": "45754f3585da4b5153edf574730627ac960f6cd6ff7067bde8241dc3471236bb"
	},
	{
		"id": "d8402248cbf2",
		"ts": "2026-08-27T02:51:20.132Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 689744.3,
		"hash": "d8402248cbf21c94a9d7c202f80f7ed1eabb217c7f2cd295fa6f2234ba9d9d1d"
	},
	{
		"id": "521daac891d2",
		"ts": "2026-08-27T02:51:20.364Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4187282.83,
		"hash": "521daac891d28a3f70766a7109c52fed5a7b36492a60571ec80696fcbf127b42"
	},
	{
		"id": "f77ec44a0e19",
		"ts": "2026-08-27T02:51:20.600Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 84815.07,
		"hash": "f77ec44a0e1956cec7b324bfcfcb6f0a19a41dea625a58a6d2168328fe57e8ee"
	},
	{
		"id": "3c6037dc17ac",
		"ts": "2026-08-26T21:38:31.103Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115868104.49,
		"hash": "3c6037dc17aca9d83497fe6e70e77da2e0461a179d61e13057a08a5cdf371f0b"
	},
	{
		"id": "0eccc430ad51",
		"ts": "2026-08-26T21:38:31.499Z",
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
		"liquidityUsd": 15815264.33,
		"hash": "0eccc430ad51775a0e51a58f00efc2c3b8e8d7114514dbbda169d27b1e13e4d1"
	},
	{
		"id": "310fc33bf1dd",
		"ts": "2026-08-26T21:38:31.735Z",
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
		"liquidityUsd": 987870.59,
		"hash": "310fc33bf1dd652eb47c02521f58f14ecfc771b29299a46e365e96b0431013c1"
	},
	{
		"id": "d644ce95a5f4",
		"ts": "2026-08-26T21:38:32.086Z",
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
		"liquidityUsd": 29420986.18,
		"hash": "d644ce95a5f4739b2779c729f9ffe004f72b95f8b80f01d3aaad0460740ea2ad"
	},
	{
		"id": "7bfb952d7071",
		"ts": "2026-08-26T21:38:32.279Z",
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
		"liquidityUsd": 4633629.02,
		"hash": "7bfb952d70719bf7141663612ca098b7503a636a1df62eaa53cc7d2cc24f5bef"
	},
	{
		"id": "9de95e4c80ed",
		"ts": "2026-08-26T21:38:32.484Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1169814.61,
		"hash": "9de95e4c80ed9fbc8d9c4853e7cd8485032c1ddffe7d52b0412c4728d957a751"
	},
	{
		"id": "1bea0daf9c35",
		"ts": "2026-08-26T21:38:32.699Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29420986.18,
		"hash": "1bea0daf9c3537ad4d35dcdfcfca121e0adc0fa38f4bce1828575e17c4cfda7b"
	},
	{
		"id": "3aca1b37db4c",
		"ts": "2026-08-26T21:38:32.919Z",
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
		"liquidityUsd": 3682948.68,
		"hash": "3aca1b37db4c1a8def29d97c1551c168fd8b4eaca3d30c78f3bd62c3deacdd91"
	},
	{
		"id": "e14d74d2bac2",
		"ts": "2026-08-26T21:38:33.177Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1195351.46,
		"hash": "e14d74d2bac2fd4fd65517efd59609ae30c7dea63ea69ea2e5b81b32a238f2ee"
	},
	{
		"id": "51bca5f4008d",
		"ts": "2026-08-26T21:38:33.550Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 763487.05,
		"hash": "51bca5f4008d9eba81f28111a2dadbc292c13918134f398fdc6959071ea243e8"
	},
	{
		"id": "fa59b9bc9df2",
		"ts": "2026-08-26T21:38:33.737Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 182581.28,
		"hash": "fa59b9bc9df25aeb38b044b2c4c3e963c08641f76305fc13106dc3372d6ecd92"
	},
	{
		"id": "c5a988d0e054",
		"ts": "2026-08-26T21:38:33.970Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1412255.23,
		"hash": "c5a988d0e054261ea1df59d42edad5de7c4534bbc0ef9ca9b1cd6fc769ebfdcd"
	},
	{
		"id": "86cd4130473e",
		"ts": "2026-08-26T21:38:34.173Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1441660.69,
		"hash": "86cd4130473e9757beb40abe3707bf739227d8ddaf72e22c6735d19173537c33"
	},
	{
		"id": "594084b5fd51",
		"ts": "2026-08-26T21:38:34.363Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3447900.24,
		"hash": "594084b5fd51b2f0ad8e5e7e56d5cdbe864a9cd6e9463cc6643e1051f05803a3"
	},
	{
		"id": "951e3421b128",
		"ts": "2026-08-26T21:38:34.544Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4214864.49,
		"hash": "951e3421b1289b20b394b0aa49f3860f70db2e088cccb5b6c7537093bd9acd0e"
	},
	{
		"id": "418896b5fd28",
		"ts": "2026-08-26T21:38:34.724Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1003536.01,
		"hash": "418896b5fd28ed0cbd3c78b657a1f0e80fd4ea4b44a5e3f18753789d4bbfdb61"
	},
	{
		"id": "02fc02e47327",
		"ts": "2026-08-26T21:38:34.917Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 71666.41,
		"hash": "02fc02e47327e2d35b2a38532a43d3eea5a1d9c23b2050301c202d96f5ecea65"
	},
	{
		"id": "71a65b5bdb84",
		"ts": "2026-08-26T21:38:35.137Z",
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
		"liquidityUsd": 1049633.99,
		"hash": "71a65b5bdb84afcc2bd791c9759fbd43a6eca11470464c2534e75c02065e788c"
	},
	{
		"id": "74f4feafb78c",
		"ts": "2026-08-26T18:56:21.915Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115398377.81,
		"hash": "74f4feafb78c08eb8543ae9970ea9a601a6b8b3e55378f23ac30dc0145524a41"
	},
	{
		"id": "333fa0c08e7d",
		"ts": "2026-08-26T18:56:22.290Z",
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
		"liquidityUsd": 13840429.38,
		"hash": "333fa0c08e7d3b18637eeb28ee98cdd1a50dc1db3442d6e24a8a78b5c35b4793"
	},
	{
		"id": "ba86e1418de1",
		"ts": "2026-08-26T18:56:22.517Z",
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
		"liquidityUsd": 979703.28,
		"hash": "ba86e1418de11cb6edb2aecad1f52998606a5f3b5377f2204c983996b5b0d92d"
	},
	{
		"id": "9c805463d793",
		"ts": "2026-08-26T18:56:22.728Z",
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
		"liquidityUsd": 29635175.98,
		"hash": "9c805463d793e7523fc5c20bd6ad0d62d0b516ce5524087ecdc4d74922c755b5"
	},
	{
		"id": "dd4d39368273",
		"ts": "2026-08-26T18:56:22.941Z",
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
		"liquidityUsd": 4589560.23,
		"hash": "dd4d39368273a05cba5428683417ac623ea4488753b3e0dbb6beec091e4429e8"
	},
	{
		"id": "c5b56e98f551",
		"ts": "2026-08-26T18:56:23.155Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1164378.27,
		"hash": "c5b56e98f551ae9614c17168898693fd6f276f7de0ab7cc540ab27cd7e8806c6"
	},
	{
		"id": "aefa446f998b",
		"ts": "2026-08-26T18:56:23.361Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29635175.98,
		"hash": "aefa446f998bb1ead357b5d3fe5077f68368f4824a7b5987a8413e55fb8266f6"
	},
	{
		"id": "3872c531528c",
		"ts": "2026-08-26T18:56:23.568Z",
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
		"liquidityUsd": 3635467.09,
		"hash": "3872c531528c00f64cb129bfcd564ede2ae0bba846392254321db50f9ec32c5c"
	},
	{
		"id": "295a9e67c453",
		"ts": "2026-08-26T18:56:23.771Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1226876.05,
		"hash": "295a9e67c4534f58721e8534c59fc32db387c1c0eb7a83125e89a09b0c92ad91"
	},
	{
		"id": "cc41a0d2fd5b",
		"ts": "2026-08-26T18:56:23.982Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 725419.65,
		"hash": "cc41a0d2fd5b3e80e4b08c748655012cbd8dcafc1af8b9c7bcf199af9315724b"
	},
	{
		"id": "7a451d21cab0",
		"ts": "2026-08-26T18:56:24.172Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1418011.23,
		"hash": "7a451d21cab0abcda7ac34bb96e1ee652b144035b6cb82cbe4212ce2dd92e71e"
	},
	{
		"id": "29ee55ca5149",
		"ts": "2026-08-26T18:56:24.367Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 182374.27,
		"hash": "29ee55ca514979128d203d232de52292395ec01a06e674eaeffd148372048aa9"
	},
	{
		"id": "501bc4047709",
		"ts": "2026-08-26T18:56:24.561Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4181090.15,
		"hash": "501bc4047709e301c98587043ab3de6b5578c79363dd075e043ce57138f1d75f"
	},
	{
		"id": "c88b695ca066",
		"ts": "2026-08-26T18:56:24.748Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1386112.95,
		"hash": "c88b695ca06659a7b96ca4a53eb43e374dfd51b74e2c1eb3fc548035266c5056"
	},
	{
		"id": "76e00b3fef3f",
		"ts": "2026-08-26T18:56:24.940Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3393304.78,
		"hash": "76e00b3fef3f61a5788dbcae25986a4da343d28931bcc5973e4ca473fd484cad"
	},
	{
		"id": "3143559d03e4",
		"ts": "2026-08-26T18:56:25.133Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 78985.58,
		"hash": "3143559d03e422f68b4bdf1128476ed8fc5b08b341c817865f14fd24ae93f50a"
	},
	{
		"id": "3d720288bb99",
		"ts": "2026-08-26T18:56:25.322Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 995327.45,
		"hash": "3d720288bb99de7e5f716052fe7154a05c7a56d5e0af6d90afc0cb0827953c8f"
	},
	{
		"id": "13415c41c8e0",
		"ts": "2026-08-26T18:56:25.512Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 522221.32,
		"hash": "13415c41c8e0cc305a99a2bc425dd3b7b2258efb908f0093b01d2ed199f89bfe"
	},
	{
		"id": "c52d2fd942fa",
		"ts": "2026-08-26T16:14:44.214Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114992197.94,
		"hash": "c52d2fd942fac543c5922abce6eeead6ae0cb067b1f60f3df7cc3b52bdc33b16"
	},
	{
		"id": "14018484a21b",
		"ts": "2026-08-26T16:14:44.688Z",
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
		"liquidityUsd": 13454978.72,
		"hash": "14018484a21b266189dd3c906e84e273f2f59f5954efa849707b16d774986630"
	},
	{
		"id": "7c4f4ae6ee6c",
		"ts": "2026-08-26T16:14:44.936Z",
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
		"liquidityUsd": 970066.21,
		"hash": "7c4f4ae6ee6c89a053402edd1f7b80e73668919671b58d1611891b2c50ed2993"
	},
	{
		"id": "d891df5b0166",
		"ts": "2026-08-26T16:14:45.190Z",
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
		"liquidityUsd": 29555291.53,
		"hash": "d891df5b01662ec828083e5a127ed86b67f9889bff3ab01e30c94d2a38fca571"
	},
	{
		"id": "b7dbe9388890",
		"ts": "2026-08-26T16:14:45.441Z",
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
		"liquidityUsd": 4590464.03,
		"hash": "b7dbe9388890816962e17fec573d4108275eb8a13352d029c74877177786186f"
	},
	{
		"id": "39a2dad43471",
		"ts": "2026-08-26T16:14:45.712Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1164353.38,
		"hash": "39a2dad434714fc0e41cf74a1af8054556cdc51cf6c2107608bd37785f9ac9b5"
	},
	{
		"id": "d79d170825f4",
		"ts": "2026-08-26T16:14:45.989Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29555291.53,
		"hash": "d79d170825f4353b441f961bf5f89cf957c5d346354e0cfb22ab3f468ecc4e5a"
	},
	{
		"id": "38035f296a17",
		"ts": "2026-08-26T16:14:46.242Z",
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
		"liquidityUsd": 3609324.94,
		"hash": "38035f296a17b653fc6df403a68ace958ad410655fc20599bc6be024334902ad"
	},
	{
		"id": "c2a944e84f25",
		"ts": "2026-08-26T16:14:46.548Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 743773.5,
		"hash": "c2a944e84f25136014dff9fb63139e02aa84dae53015dd92d96de13901e43b60"
	},
	{
		"id": "b89e92724020",
		"ts": "2026-08-26T16:14:46.807Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1385193.72,
		"hash": "b89e9272402039ceba80c566b4bc128902c3e3f8b4651d1b0077cef773492d4f"
	},
	{
		"id": "e2a0411ccb8d",
		"ts": "2026-08-26T16:14:47.045Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 83408.78,
		"hash": "e2a0411ccb8db46ce4a8a2fe21597e1e5dea052e094d8b030547d8ba7e66109c"
	},
	{
		"id": "9dffbc81ea92",
		"ts": "2026-08-26T16:14:47.278Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1134639.08,
		"hash": "9dffbc81ea92cd1d8e60d6623a76c8311849fe9cdc6d89e08fc2f11fc096ad92"
	},
	{
		"id": "65e18067b1b3",
		"ts": "2026-08-26T16:14:47.501Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4075158.15,
		"hash": "65e18067b1b309bce6cf46e2d6d356548727b906e48e6d6cb8e8ebdb3add90a2"
	},
	{
		"id": "00077a1be936",
		"ts": "2026-08-26T16:14:47.738Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1445283.25,
		"hash": "00077a1be9360d5fa82b12b39ed631475b02d849903c801f3d8278253ef71ead"
	},
	{
		"id": "26080dddb499",
		"ts": "2026-08-26T16:14:47.972Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3368113.36,
		"hash": "26080dddb499d7c65964ed507af124c9344862c260a79327b17dc60b536938de"
	},
	{
		"id": "f1dee7d20772",
		"ts": "2026-08-26T16:14:48.197Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 522814.01,
		"hash": "f1dee7d20772ee6e10825b78dfe0954430de77660e2bb0cbacb2392ca1441a67"
	},
	{
		"id": "38b86e2e8789",
		"ts": "2026-08-26T16:14:48.438Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11321592.41,
		"hash": "38b86e2e8789158cfa513a19c258a861aef4f81ae84129f0ad6457a7a2e81541"
	},
	{
		"id": "a5384f764503",
		"ts": "2026-08-26T16:14:48.674Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 139844.21,
		"hash": "a5384f764503a5007ba111680b93e95bae680fb0517d2a643bf5c18dadf07636"
	},
	{
		"id": "d34e18ada0ca",
		"ts": "2026-08-26T14:39:50.916Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115086027.91,
		"hash": "d34e18ada0ca6b8b5daf2056f876459418004439b283508aacef4aff6c5cad69"
	},
	{
		"id": "6cc962b85f1e",
		"ts": "2026-08-26T14:39:51.346Z",
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
		"liquidityUsd": 17183280.04,
		"hash": "6cc962b85f1e9bcebee68db5f20d250308d8ca5dcd0f80238bac6119ab65ff77"
	},
	{
		"id": "51a9d7bee31b",
		"ts": "2026-08-26T14:39:51.544Z",
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
		"liquidityUsd": 960433.34,
		"hash": "51a9d7bee31b7c33c342163201c657843a87b461954b536db3f058dac50aece1"
	},
	{
		"id": "584394e52da2",
		"ts": "2026-08-26T14:39:51.758Z",
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
		"liquidityUsd": 29754036.21,
		"hash": "584394e52da2a21cfba12c484f1379913e487d20c6050ccbbdf564e683002402"
	},
	{
		"id": "92beec4081bb",
		"ts": "2026-08-26T14:39:51.979Z",
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
		"liquidityUsd": 4633570.59,
		"hash": "92beec4081bb6befd90e1ab85e7c85f5bdc715d0aac135d1d15efc50efecf561"
	},
	{
		"id": "98ca0cd36c46",
		"ts": "2026-08-26T14:39:52.182Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1168901.31,
		"hash": "98ca0cd36c469cfcc2b362d5bcac42046804858a8e02b856b1d2326ba802bebd"
	},
	{
		"id": "d7297013baf6",
		"ts": "2026-08-26T14:39:52.379Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29754036.21,
		"hash": "d7297013baf6bd7629cea18e52e91c8dc56853778ea52a5c0d857e50fd3cbd19"
	},
	{
		"id": "0819306aeea4",
		"ts": "2026-08-26T14:39:52.597Z",
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
		"liquidityUsd": 1899992.98,
		"hash": "0819306aeea4f61eb6993070ab19655696e32f56661cffe280bbb70a50c0bdde"
	},
	{
		"id": "37441b60bb2d",
		"ts": "2026-08-26T14:39:52.800Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 718916.3,
		"hash": "37441b60bb2d77288fb720ce4ea23cdb194977893eac2b16e01dae45d8fc3f60"
	},
	{
		"id": "7896d22abafb",
		"ts": "2026-08-26T14:39:52.990Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1385997.38,
		"hash": "7896d22abafb21d28a3f6d908fc65e24a591cb7131e0958a973641064dabdba9"
	},
	{
		"id": "a0d1b20ee32e",
		"ts": "2026-08-26T14:39:53.182Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1124068.47,
		"hash": "a0d1b20ee32e7b382ff5813724799eff69b9cadb69906cf96092ea5bf3bc5ed1"
	},
	{
		"id": "97165384023d",
		"ts": "2026-08-26T14:39:53.386Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 91240.16,
		"hash": "97165384023d8ad45d99b523f380da052b561a4877b10e5fe1b3f909520ec948"
	},
	{
		"id": "0581e56a6882",
		"ts": "2026-08-26T14:39:53.568Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4077701.37,
		"hash": "0581e56a688223a1b21f006ac79eab08fb474b4c56fcb497fdb318fcf87308c6"
	},
	{
		"id": "330d51f30e45",
		"ts": "2026-08-26T14:39:53.769Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1450118.75,
		"hash": "330d51f30e4599864d3b33b964613864b1d6760b163c5327f38b0479cbe8d0b0"
	},
	{
		"id": "8a97f340875c",
		"ts": "2026-08-26T14:39:53.962Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3374085.81,
		"hash": "8a97f340875c569981559514ecc9a8ab074f74df9471a43ce9afd23af5147cc9"
	},
	{
		"id": "f3d3e24cfb55",
		"ts": "2026-08-26T14:39:54.187Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11338967.63,
		"hash": "f3d3e24cfb55e8c4d3ad9b2c276e41f004443fa5cd2a4ec27b71933af4593bca"
	},
	{
		"id": "edbf6d6d1ca5",
		"ts": "2026-08-26T14:39:54.375Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 560423.93,
		"hash": "edbf6d6d1ca5f284e247e9d13ad33b8274ceb729e023361e52c31150dbf32e8f"
	},
	{
		"id": "b181afaa6395",
		"ts": "2026-08-26T14:39:54.576Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 532107.59,
		"hash": "b181afaa63953107406dc7227ee273392ab5e9d612428d2829b8ee75748d3293"
	},
	{
		"id": "f617f885da75",
		"ts": "2026-08-26T13:51:42.119Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115322474.49,
		"hash": "f617f885da75ca3f0f76dbb139c27e6bad92caae40542a41e8a3151078a2db0e"
	},
	{
		"id": "c2ecbe9fddc9",
		"ts": "2026-08-26T13:51:42.436Z",
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
		"liquidityUsd": 17252491.26,
		"hash": "c2ecbe9fddc9f98b13b7f1004c00719ce09f5caea775e31d5ca6cbdc6c9e7105"
	},
	{
		"id": "190bcea9a067",
		"ts": "2026-08-26T13:51:42.619Z",
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
		"liquidityUsd": 961905.99,
		"hash": "190bcea9a067f3f2907ad32648ecfb674e154df7fc907b8b8aa2a0bb84664400"
	},
	{
		"id": "ce616a8d05f2",
		"ts": "2026-08-26T13:51:42.859Z",
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
		"liquidityUsd": 29933580.86,
		"hash": "ce616a8d05f21e33207769337e871a8ef8c94dd3344a917c5647e58a2d343845"
	},
	{
		"id": "13f8c5655da9",
		"ts": "2026-08-26T13:51:43.053Z",
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
		"liquidityUsd": 4665670.43,
		"hash": "13f8c5655da99b59d3a18f2b6b258fd8da3be8dfb275caad2a90b64aab811439"
	},
	{
		"id": "b4d686c28393",
		"ts": "2026-08-26T13:51:43.259Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1172690.3,
		"hash": "b4d686c2839376cbe56e591723cca4f1dc51335b7090929288e901ea5bb8a79f"
	},
	{
		"id": "33d97f92f397",
		"ts": "2026-08-26T13:51:43.448Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29933580.86,
		"hash": "33d97f92f397d689207c194c7fa873a0662123a7de7296c169d989eff4339bbf"
	},
	{
		"id": "3f99bc4d841f",
		"ts": "2026-08-26T13:51:43.667Z",
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
		"liquidityUsd": 1906255.3,
		"hash": "3f99bc4d841fd7c2b5969c1153d0aed96c9cc7923d973718cf919b59cdfd0f09"
	},
	{
		"id": "271e0ccf8b05",
		"ts": "2026-08-26T13:51:43.853Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 702388,
		"hash": "271e0ccf8b05c5e949c886c55f1add30739f7c1d060ab70dabe19bd629d720e4"
	},
	{
		"id": "371a7731c0ed",
		"ts": "2026-08-26T13:51:44.045Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1407430.55,
		"hash": "371a7731c0ede2e5f7b90f2f629bbc5fea30f78e006e52e8c510725103a9f219"
	},
	{
		"id": "19e59528fb5d",
		"ts": "2026-08-26T13:51:44.234Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1122972.5,
		"hash": "19e59528fb5da5df3fd4b6316989479b6d2d5851553a54a74fc9872ec13e3c4a"
	},
	{
		"id": "3cdcc1eebccf",
		"ts": "2026-08-26T13:51:44.416Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 83857.29,
		"hash": "3cdcc1eebccffa394039a703481766ae0ac24fe40662e0cf0eeac89fb8b2a46d"
	},
	{
		"id": "5790c13ff15a",
		"ts": "2026-08-26T13:51:44.602Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4104444.31,
		"hash": "5790c13ff15a2e036fdcae781617f05d97837b8fd94adba99f6fe9a37d1aa0c7"
	},
	{
		"id": "8c223c17f4af",
		"ts": "2026-08-26T13:51:44.788Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1387320.42,
		"hash": "8c223c17f4af05c56c43f997e6461cb1d2cf15b2b2347f589a7101f37db35c21"
	},
	{
		"id": "e0f0934fbf2f",
		"ts": "2026-08-26T13:51:45.036Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3399731.85,
		"hash": "e0f0934fbf2f8f251a2d5fb926a27f7894ab9d695d79b44873d96a8c032d73b1"
	}
]
