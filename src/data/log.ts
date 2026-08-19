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
	"updatedAt": "2026-08-19T12:38:26.643Z",
	"tokensScored": 12187,
	"verdictsIssued": 12187,
	"safe": 10559,
	"risky": 886,
	"likelyRug": 742,
	"ticks": 718
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "edb16effd9dc",
		"ts": "2026-08-19T12:38:21.238Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111891478.85,
		"hash": "edb16effd9dc36722e90833cef700a1e0d461794b3eb803be6c513e2e472c048"
	},
	{
		"id": "924d9439adc7",
		"ts": "2026-08-19T12:38:21.459Z",
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
		"liquidityUsd": 16952213.22,
		"hash": "924d9439adc78150d905395b9cce83abc94a77eb8cc3035d5d9bfb20fc4a6729"
	},
	{
		"id": "f7c9a6b4d9e5",
		"ts": "2026-08-19T12:38:21.822Z",
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
		"liquidityUsd": 746509.56,
		"hash": "f7c9a6b4d9e5bd3bdc8be1bf4b42bfcc29bd56c718f302fda503247820af0e66"
	},
	{
		"id": "0c9b1f8fef7d",
		"ts": "2026-08-19T12:38:22.026Z",
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
		"liquidityUsd": 26737286.74,
		"hash": "0c9b1f8fef7d91c6278291e57b9a0c589da1cbe2ebe10d1e7d7e1457677a8dbd"
	},
	{
		"id": "fa92cd75470d",
		"ts": "2026-08-19T12:38:22.222Z",
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
		"liquidityUsd": 4260685.37,
		"hash": "fa92cd75470de36c0ed8be4c2c4a1be7f664a4303cd6bf768c2adfa059ac10b5"
	},
	{
		"id": "06801e4892a2",
		"ts": "2026-08-19T12:38:22.432Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 900709.99,
		"hash": "06801e4892a26b68eae50e6d0033d52267a733e2fcf2532e4e5a25e728db772c"
	},
	{
		"id": "960052b703cc",
		"ts": "2026-08-19T12:38:22.777Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4363933.87,
		"hash": "960052b703cc66cc4e473853389168109fe61cfba04b14b11ff5b3ca3476c215"
	},
	{
		"id": "b2d71d24c14a",
		"ts": "2026-08-19T12:38:22.985Z",
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
		"liquidityUsd": 3366250.74,
		"hash": "b2d71d24c14a8d8eaf5826c920711ab375aef4db20550e32d759126e86924ef7"
	},
	{
		"id": "73880cec5bc0",
		"ts": "2026-08-19T12:38:23.178Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2961880.42,
		"hash": "73880cec5bc0ca90e841b4e8e6f9611304816d5513a1d5220f8d834a017350a8"
	},
	{
		"id": "90f65070ad0b",
		"ts": "2026-08-19T12:38:23.367Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 392834.42,
		"hash": "90f65070ad0b2bba89fe00afef837c546e4551d873c398f4a392961fbb54796e"
	},
	{
		"id": "4b200a2b632a",
		"ts": "2026-08-19T12:38:23.554Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4371369.6,
		"hash": "4b200a2b632a974002e96e828f1a086d0a706a0d9c8e3182dc444372b6bed9b2"
	},
	{
		"id": "83301ae83baf",
		"ts": "2026-08-19T12:38:23.736Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3586273.13,
		"hash": "83301ae83bafce4ef56002140d0bc0ad321a21b2a07406462248cb4b3cf11860"
	},
	{
		"id": "bb41d777b48e",
		"ts": "2026-08-19T12:38:23.931Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 536820.14,
		"hash": "bb41d777b48e65ed609ebf371c12f58b8fb1664f29e1db8551f3e2c0cbbb3ad0"
	},
	{
		"id": "c849d51a2cfd",
		"ts": "2026-08-19T12:38:25.742Z",
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
		"liquidityUsd": 490483.72,
		"hash": "c849d51a2cfd4fd286a442ca8aa2ef2627b78a5f8c72559cfaf8552fd3d73026"
	},
	{
		"id": "910d21072e02",
		"ts": "2026-08-19T12:38:25.917Z",
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
		"liquidityUsd": 60840.13,
		"hash": "910d21072e02a5802a50adeef24c5a0828900fcae327c0643ddc502d969569a1"
	},
	{
		"id": "0dc410538dfc",
		"ts": "2026-08-19T12:38:26.099Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 53143.62,
		"hash": "0dc410538dfc15bb509e7611b49cd5a9858f0ccbd52b1a0747a64301a6069e84"
	},
	{
		"id": "29c56c19a007",
		"ts": "2026-08-19T12:38:26.280Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10321516.23,
		"hash": "29c56c19a0073a688de9d2848f9d0119f7660229baf4db74678da6b159fba8db"
	},
	{
		"id": "d9ca9421b72f",
		"ts": "2026-08-19T12:38:26.458Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2931328.94,
		"hash": "d9ca9421b72f742e8dd7ece4c23fe61827e15b46f7d1230990d634728e4f094f"
	},
	{
		"id": "b36326f5dc52",
		"ts": "2026-08-19T12:38:26.643Z",
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
		"liquidityUsd": 865640.23,
		"hash": "b36326f5dc52f97153091c2a9e6a40c2fd450b2b3bd13dbd0908b322d8b3b7fc"
	},
	{
		"id": "ceb1c2871e4f",
		"ts": "2026-08-19T11:20:55.001Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111914402.71,
		"hash": "ceb1c2871e4f1645472c826d01647633b8a908b3152642615d1e8b1454fbca17"
	},
	{
		"id": "e10792ad7c7c",
		"ts": "2026-08-19T11:20:55.666Z",
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
		"liquidityUsd": 16422266.49,
		"hash": "e10792ad7c7c5ba307871de88b741948c9aa3f0d52255eeead0fb84c6a20e941"
	},
	{
		"id": "d69bced9cc02",
		"ts": "2026-08-19T11:20:56.143Z",
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
		"liquidityUsd": 745705.93,
		"hash": "d69bced9cc02b69b321ba00cab70b8b659f4848c2b07c09501739385d3862faf"
	},
	{
		"id": "1354617727ac",
		"ts": "2026-08-19T11:20:56.597Z",
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
		"liquidityUsd": 26761573.85,
		"hash": "1354617727ac067ebb6cf610d57be0cd0ed44d0bbe771394f53c9f9b3a20bb23"
	},
	{
		"id": "765898598263",
		"ts": "2026-08-19T11:20:56.854Z",
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
		"liquidityUsd": 4258054.94,
		"hash": "7658985982636738af07f2e68f5bb89ab612c5ab965fd701f5d374731e16bb65"
	},
	{
		"id": "73466b093a79",
		"ts": "2026-08-19T11:20:57.102Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 900709.99,
		"hash": "73466b093a794e5aa95be51da082fc381862ba29e3ee29b5dbdb3060248f80ff"
	},
	{
		"id": "3ce7af43b36e",
		"ts": "2026-08-19T11:20:57.406Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4280417.27,
		"hash": "3ce7af43b36e3965ac573c424777fa7d7294aab272bdc9be063df41c2207aea8"
	},
	{
		"id": "8ec9a09a6a77",
		"ts": "2026-08-19T11:20:57.853Z",
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
		"liquidityUsd": 3361000.95,
		"hash": "8ec9a09a6a7781b5a2452457a1c6f942176582791007b0d2aa043aa9092fa17e"
	},
	{
		"id": "5c26841d4390",
		"ts": "2026-08-19T11:20:58.322Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 396831.82,
		"hash": "5c26841d439006113a50d6fd1d2a728f1ab7ab4e7b7bffe684590e7c5f1e89aa"
	},
	{
		"id": "1616367e3db7",
		"ts": "2026-08-19T11:20:58.570Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2931287.62,
		"hash": "1616367e3db7439fafc529f51357f50729219665adf543f53930d56948427741"
	},
	{
		"id": "ecdb9409500d",
		"ts": "2026-08-19T11:20:58.812Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3555183.47,
		"hash": "ecdb9409500d174467b7298c12ec91734e32de7471ed117aa163de7c13b7423a"
	},
	{
		"id": "2cc381d4649e",
		"ts": "2026-08-19T11:20:59.040Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 545502,
		"hash": "2cc381d4649e90057df77cc35482c69e669909d6cebc26e971c5ebfe6248a2b4"
	},
	{
		"id": "93423afa682d",
		"ts": "2026-08-19T11:20:59.277Z",
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
		"liquidityUsd": 488991.11,
		"hash": "93423afa682d03305de2058ce238ba128f847694370c9198df4d9dc5e5be246a"
	},
	{
		"id": "2e14a3009c8b",
		"ts": "2026-08-19T11:20:59.516Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4280417.27,
		"hash": "2e14a3009c8bc3100b254b8e685534ae939812a1f70000b002a5ff6001a23f7e"
	},
	{
		"id": "7f3f3e433d1c",
		"ts": "2026-08-19T11:20:59.746Z",
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
		"liquidityUsd": 67725.22,
		"hash": "7f3f3e433d1cad2f01fdc82effa93bbd8f9a274fe23480bd62bf6acc8b6abc02"
	},
	{
		"id": "5af6e2769bf2",
		"ts": "2026-08-19T11:20:59.982Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 57406.59,
		"hash": "5af6e2769bf256b5245cd892f7be985cbe1dd8ef23227473ae57d7d7d17ee4f9"
	},
	{
		"id": "a402817100ac",
		"ts": "2026-08-19T11:21:00.323Z",
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
		"liquidityUsd": 10296575.46,
		"hash": "a402817100ac511dc47684db8b8a84905d675d39c9587bf7727b9f1b0f4eecb4"
	},
	{
		"id": "e873ea6d5833",
		"ts": "2026-08-19T11:21:00.673Z",
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
		"liquidityUsd": 2926221.32,
		"hash": "e873ea6d58333c28dd97f6ea9914a7bcfe183d9b74e3d0ac911065ef8c01caf3"
	},
	{
		"id": "4bd8b8e57cda",
		"ts": "2026-08-19T11:21:00.969Z",
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
		"liquidityUsd": 869102.71,
		"hash": "4bd8b8e57cdafe892c114340d3ff3e0b4dbb4f01e14d124f3a7fd8b0b6dd6771"
	},
	{
		"id": "50be8b7c3936",
		"ts": "2026-08-19T10:23:26.313Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111942935.6,
		"hash": "50be8b7c3936a3e4015003bfcdc999be389dbc360ff5cbb6216d12c9d1a3b887"
	},
	{
		"id": "e75a5098a100",
		"ts": "2026-08-19T10:23:26.662Z",
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
		"liquidityUsd": 16902665.97,
		"hash": "e75a5098a100aff0133e6be41835b68e6e730e3513dda06d7974c008e48124eb"
	},
	{
		"id": "390282f33f7a",
		"ts": "2026-08-19T10:23:26.848Z",
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
		"liquidityUsd": 744864.22,
		"hash": "390282f33f7a6d56054a7104ca6ceb149dcb1e2ae9f569a9b46208168ff901f5"
	},
	{
		"id": "a3d686f26914",
		"ts": "2026-08-19T10:23:27.221Z",
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
		"liquidityUsd": 26779012.78,
		"hash": "a3d686f26914d4b60e6d5f4583b4570c10d182a6452f80228a2e6294c56276a4"
	},
	{
		"id": "b26175806a50",
		"ts": "2026-08-19T10:23:27.435Z",
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
		"liquidityUsd": 4247986.16,
		"hash": "b26175806a50ccee7708fad2daac5ea29bfc2a1d0fa5c58440b83bd27c1dcec3"
	},
	{
		"id": "0cf0b91f702e",
		"ts": "2026-08-19T10:23:27.669Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 900653.75,
		"hash": "0cf0b91f702ee406f302e039442e6bb9c62fc0b5037782b793d34117f7a0112b"
	},
	{
		"id": "ab168e86bdcc",
		"ts": "2026-08-19T10:23:27.861Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4229992.91,
		"hash": "ab168e86bdcc17dc0979712a02989e8042a2795d6b3e30fa85b832f87978ece3"
	},
	{
		"id": "f265fffaf265",
		"ts": "2026-08-19T10:23:28.053Z",
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
		"liquidityUsd": 3358357.28,
		"hash": "f265fffaf265104cdebbcc547b0552639b011f1136481e96699b5a1ebcc30309"
	},
	{
		"id": "a68fb1d69bd6",
		"ts": "2026-08-19T10:23:28.233Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 395932.32,
		"hash": "a68fb1d69bd6eba916835f08cd098bfa637d312c478b14bae5a8846c28990876"
	},
	{
		"id": "8da30168d1e2",
		"ts": "2026-08-19T10:23:28.429Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2965766.86,
		"hash": "8da30168d1e28d440ed20290702c7ff95836f722e5ce42661eaeb53617df4372"
	},
	{
		"id": "30cc33f297e2",
		"ts": "2026-08-19T10:23:28.616Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3543392.34,
		"hash": "30cc33f297e2ae7a199aaf58780e3e9eb524ccac100b7c5927f69d36e0b65242"
	},
	{
		"id": "c0263df73488",
		"ts": "2026-08-19T10:23:28.811Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 546049.53,
		"hash": "c0263df73488f105af74d96dc4aced6284d619f0ff0e0756d867268afe23cda7"
	},
	{
		"id": "64ac93b8c37c",
		"ts": "2026-08-19T10:23:29.006Z",
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
		"liquidityUsd": 489341.34,
		"hash": "64ac93b8c37c04d214efd2ad6a18dff1e6e4e9eee8de37553638e4d5637e8142"
	},
	{
		"id": "e78551a38ffe",
		"ts": "2026-08-19T10:23:29.185Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4229992.91,
		"hash": "e78551a38ffe2bd0d8bd3d5c2c95272fe1076b1af4ab9dceb2242e72b2702b6f"
	},
	{
		"id": "c38caf22915d",
		"ts": "2026-08-19T10:23:29.352Z",
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
		"liquidityUsd": 81201.44,
		"hash": "c38caf22915d6e25648cd341d5a8b783beb588aa2f0a20ebb05e75d781d56e5c"
	},
	{
		"id": "98e1a72a21d3",
		"ts": "2026-08-19T10:23:29.609Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9939621.56,
		"hash": "98e1a72a21d37699804488b375dc27636191573c0e4a1a042f3ada721810e0e2"
	},
	{
		"id": "5a965fd71cc1",
		"ts": "2026-08-19T10:23:29.797Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 57858.46,
		"hash": "5a965fd71cc1ce086dc9b5e8f6aefbd9b00a0d67731dbfdcf9f538c19e1923c9"
	},
	{
		"id": "0a4996190c81",
		"ts": "2026-08-19T10:23:29.987Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2925913.55,
		"hash": "0a4996190c81b19bcdbdb486d7f8acbef568874c2f21d6a0deded08f88af7d90"
	},
	{
		"id": "ad4c3ad29ad5",
		"ts": "2026-08-19T10:23:30.171Z",
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
		"liquidityUsd": 875668.89,
		"hash": "ad4c3ad29ad528fd12fc21b6c0ec0f94e5312f5c3300eff77bb99a9eea61ccd6"
	},
	{
		"id": "887b2699a814",
		"ts": "2026-08-19T09:29:00.350Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111953735.58,
		"hash": "887b2699a8146754ada940187bf71adc1963ae5d5f9d02b175fc74640f294f1b"
	},
	{
		"id": "417e7261b780",
		"ts": "2026-08-19T09:29:00.566Z",
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
		"liquidityUsd": 16292459.31,
		"hash": "417e7261b78013fc010068ff85d79496ba2e3a2002811c0305f1f43fe9e7ddf9"
	},
	{
		"id": "e9cae17ce6b8",
		"ts": "2026-08-19T09:29:00.928Z",
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
		"liquidityUsd": 744493.06,
		"hash": "e9cae17ce6b8d38b97bc6eb69aff962ee8e654f65742981fafd76a423cccb0bc"
	},
	{
		"id": "3ca90c60af61",
		"ts": "2026-08-19T09:29:01.139Z",
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
		"liquidityUsd": 26787778.8,
		"hash": "3ca90c60af6182c8c493c972293a2d8dc1c23c5e22786f912d1e84c27bd96654"
	},
	{
		"id": "558a6c5d2581",
		"ts": "2026-08-19T09:29:01.344Z",
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
		"liquidityUsd": 4255266.84,
		"hash": "558a6c5d2581668c513032dc944c54e6417e2e8652cd364979d85cf146078bab"
	},
	{
		"id": "b86c654c447f",
		"ts": "2026-08-19T09:29:01.653Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 900653.75,
		"hash": "b86c654c447f2b4f96a77c1cba02ea8aec8e33b18a2b3f6b2ac75aea84cf45ad"
	},
	{
		"id": "e099eb141bb5",
		"ts": "2026-08-19T09:29:01.924Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4373559.1,
		"hash": "e099eb141bb566fcc890a3ee740979d45eb5d2320fd9827afe42554d00b95afd"
	},
	{
		"id": "57592d991f23",
		"ts": "2026-08-19T09:29:02.123Z",
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
		"liquidityUsd": 3364107.05,
		"hash": "57592d991f23757e62cd045148c2c4fc9def40c4ab07b4644d7ee1ff5db5e397"
	},
	{
		"id": "062dac5ad23f",
		"ts": "2026-08-19T09:29:02.390Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 412389.73,
		"hash": "062dac5ad23f0d2265afdbbcad6c15da5e87ffd406b342af37e192741a214c69"
	},
	{
		"id": "fcb93740b54e",
		"ts": "2026-08-19T09:29:02.583Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2970343.81,
		"hash": "fcb93740b54ec4b1fad16a50e263e220c1e6cd98fac43b8c3d20f0ffaefc5c52"
	},
	{
		"id": "debf43d11202",
		"ts": "2026-08-19T09:29:02.769Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3538778.7,
		"hash": "debf43d112023b03c55ddfc1b417cf46e4bbe39f7cb0d6a6683ad65f42ae4fff"
	},
	{
		"id": "0138bdef6226",
		"ts": "2026-08-19T09:29:02.951Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 548421.78,
		"hash": "0138bdef6226598f92ef4300ed498f642a4468616e5a4709865d8c43c33828c4"
	},
	{
		"id": "13530f440691",
		"ts": "2026-08-19T09:29:03.132Z",
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
		"liquidityUsd": 490716.2,
		"hash": "13530f440691841e76df9abce1e8d6f78d12907cc3f85a374991a3101b8474f6"
	},
	{
		"id": "0dabc7728bce",
		"ts": "2026-08-19T09:29:03.316Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4373559.1,
		"hash": "0dabc7728bce7f59172bb20c661f37b9e6aea1503b7bfa2375588dc072130d01"
	},
	{
		"id": "2c5097e745e2",
		"ts": "2026-08-19T09:29:03.501Z",
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
		"liquidityUsd": 77186.16,
		"hash": "2c5097e745e21114dd1a26b5192ef2343cdb984e7baf5987b92d3efd6d7f7ae5"
	},
	{
		"id": "b496113eca04",
		"ts": "2026-08-19T09:29:03.824Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9954897.86,
		"hash": "b496113eca0443070837de46ca7e9d18ad4121b17cf23e64195eae849cfc6bf1"
	},
	{
		"id": "b956e5de96f6",
		"ts": "2026-08-19T09:29:04.011Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 56412.82,
		"hash": "b956e5de96f6190c66a9840665cf096e2c981968a021dd63f30a72213086db4a"
	},
	{
		"id": "1e7858f5cc5b",
		"ts": "2026-08-19T09:29:04.198Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2917110.9,
		"hash": "1e7858f5cc5b177f1b6719f4ddae6ecda8054e59b3c87c6258eb391b96fcdf7a"
	},
	{
		"id": "c9ffa92865c0",
		"ts": "2026-08-19T09:29:04.379Z",
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
		"liquidityUsd": 870767.64,
		"hash": "c9ffa92865c09088e54b54948c61919cc6d0ca546e06b8afd9cf69c18b2d050d"
	},
	{
		"id": "7a233aca3699",
		"ts": "2026-08-19T08:32:31.902Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111749896.56,
		"hash": "7a233aca369962ea16b8fc6d24b89acd316003fddd248ce00c07bb9748af3cc1"
	},
	{
		"id": "a6d44a737499",
		"ts": "2026-08-19T08:32:32.231Z",
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
		"liquidityUsd": 15406896.62,
		"hash": "a6d44a73749922c20b5c4fde4781cc31e921733cb4a5ca4a960b5947baa02a4a"
	},
	{
		"id": "801c956db930",
		"ts": "2026-08-19T08:32:32.444Z",
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
		"liquidityUsd": 739045.04,
		"hash": "801c956db93075403c45f6fde9dd0452119cff5541892e1e492674b159cffe70"
	},
	{
		"id": "2ec045f76377",
		"ts": "2026-08-19T08:32:32.641Z",
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
		"liquidityUsd": 26744906.82,
		"hash": "2ec045f763775d1cac352f13491e7876abc38a45208d499c4e956ae92a355a60"
	},
	{
		"id": "f6e54f16f164",
		"ts": "2026-08-19T08:32:32.824Z",
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
		"liquidityUsd": 4255266.84,
		"hash": "f6e54f16f164309ae41d3a7ec508c276a0dbf8564fc13b6faa2f90210a96ea2f"
	},
	{
		"id": "41bc592c8f87",
		"ts": "2026-08-19T08:32:33.024Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 881490.76,
		"hash": "41bc592c8f870dbb04a913132d1f8ed26565e5b392e953ede8bc1d01e643ae80"
	},
	{
		"id": "9466e38b7da4",
		"ts": "2026-08-19T08:32:33.216Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4205009.84,
		"hash": "9466e38b7da473b61db41c868a47b5d42c15082a79afb19c9591cb2619c8b82a"
	},
	{
		"id": "74e3e050a372",
		"ts": "2026-08-19T08:32:33.430Z",
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
		"liquidityUsd": 3355934.89,
		"hash": "74e3e050a372c8e0631bf5dec72cd066c2356391bbfef569576be4187af0a41e"
	},
	{
		"id": "e867241bf164",
		"ts": "2026-08-19T08:32:33.622Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 380040.43,
		"hash": "e867241bf16489dda50d78cb1c331304b8f3893484f2441e08a4e9912e928125"
	},
	{
		"id": "ef27cd02db0b",
		"ts": "2026-08-19T08:32:33.806Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2910944.22,
		"hash": "ef27cd02db0bcecb4e00a39cea8489b676baa2c3083984d7ab586756e1dbaeba"
	},
	{
		"id": "b75634c058b6",
		"ts": "2026-08-19T08:32:34.006Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3570684.1,
		"hash": "b75634c058b6f5538be7d923538a71b28c04493875a7877284786730905990c3"
	},
	{
		"id": "5ba116bfa0de",
		"ts": "2026-08-19T08:32:34.192Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 549175.37,
		"hash": "5ba116bfa0de77333894c5e96fde25c45855e4e973a0ba6b255294971746ed60"
	},
	{
		"id": "3fa2b32f7e37",
		"ts": "2026-08-19T08:32:34.390Z",
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
		"liquidityUsd": 488998.97,
		"hash": "3fa2b32f7e370232fc698da592ff2ed4beee94e2ccd0fa4f6ca83e82fd9bdca1"
	},
	{
		"id": "52d63165623e",
		"ts": "2026-08-19T08:32:34.577Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4205009.84,
		"hash": "52d63165623e38b347dff52117c441bf940d77ed68932344c1015d3b428e460c"
	},
	{
		"id": "716571286468",
		"ts": "2026-08-19T08:32:34.802Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9953785.63,
		"hash": "716571286468e3c7b5ec61ba0f93b07d437f6f76a5bebd123455fce6174fe627"
	},
	{
		"id": "07a4e0ce6c8e",
		"ts": "2026-08-19T08:32:34.991Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2919232.53,
		"hash": "07a4e0ce6c8eb7b0ef5437dfd3b5b981ca8eeb26fd432c5fc3243bed00148c05"
	},
	{
		"id": "2545975ad6e7",
		"ts": "2026-08-19T08:32:35.191Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 59887.48,
		"hash": "2545975ad6e7f3263bd513430b9d8b7ada002db3e21b02937fbd0207c8a998f3"
	},
	{
		"id": "07c431c6a00a",
		"ts": "2026-08-19T08:32:35.373Z",
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
		"liquidityUsd": 870814.83,
		"hash": "07c431c6a00acc166d3a91592180af7ad2050558c50a794edb4abd704485fa04"
	},
	{
		"id": "76f689941800",
		"ts": "2026-08-19T08:32:35.563Z",
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
		"liquidityUsd": 74430.9,
		"hash": "76f689941800df6ccc5dc064a0b8e3094a6af773e0c0480cdad4c6bc34b09942"
	},
	{
		"id": "da7a1f486d79",
		"ts": "2026-08-19T07:34:09.211Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111738538.69,
		"hash": "da7a1f486d79da350b590d76c172e6cd12621753734d73ca9d34f8b668830c6f"
	},
	{
		"id": "2e32b22dc219",
		"ts": "2026-08-19T07:34:09.640Z",
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
		"liquidityUsd": 15415134.84,
		"hash": "2e32b22dc219a2d9cdfde3fd6daa2b3b0ecfebb06f5a595b29f1ac095162576e"
	},
	{
		"id": "e7d13d7c0ed4",
		"ts": "2026-08-19T07:34:10.089Z",
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
		"liquidityUsd": 739045.04,
		"hash": "e7d13d7c0ed45b05c22da2eeb3f07278386e49bed2b625c135dc624f296c4067"
	},
	{
		"id": "1b6c6d21e10d",
		"ts": "2026-08-19T07:34:10.517Z",
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
		"liquidityUsd": 26704810.44,
		"hash": "1b6c6d21e10d8a544be82cfc27b2fadb64a07b5942f415dc280126c3794321e3"
	},
	{
		"id": "cb32d3b842c6",
		"ts": "2026-08-19T07:34:10.784Z",
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
		"liquidityUsd": 4255872.91,
		"hash": "cb32d3b842c64f53a5c1f99bea657c7946e54b911c75b25286bcb4f69fc04720"
	},
	{
		"id": "b9bc5986da33",
		"ts": "2026-08-19T07:34:11.031Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 891945.82,
		"hash": "b9bc5986da33c0906cf58935a78a770f668cd60649e31f9225638cac657c9dd2"
	},
	{
		"id": "5e6d82f1cb84",
		"ts": "2026-08-19T07:34:11.265Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4281069.33,
		"hash": "5e6d82f1cb84a866b25b98850d454d4d74056d0ef3ff53560efebe7de4a34d37"
	},
	{
		"id": "6198b9670088",
		"ts": "2026-08-19T07:34:11.497Z",
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
		"liquidityUsd": 3555778.48,
		"hash": "6198b96700881f7d59af42d19e18b9ac17229c4758aa7c74cb25df0ecaa3bd26"
	},
	{
		"id": "a29a98eeefa5",
		"ts": "2026-08-19T07:34:11.742Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 399230.57,
		"hash": "a29a98eeefa52cbf12a5bb89efd4a2a018cbc046cebba5dc0f033c3c9ba0f6fa"
	},
	{
		"id": "fc56ab1868de",
		"ts": "2026-08-19T07:34:11.988Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3544658.84,
		"hash": "fc56ab1868de954f9d0e390074db8db7bd801d7b303d6b3d1fe0abb81a6824ed"
	},
	{
		"id": "dbca3e336e53",
		"ts": "2026-08-19T07:34:12.203Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2894358.13,
		"hash": "dbca3e336e539c6bae06b21d17b48a834b632d281645a5ecd44140aa93e96b7e"
	},
	{
		"id": "e9760291bbf9",
		"ts": "2026-08-19T07:34:12.427Z",
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
		"liquidityUsd": 492209.89,
		"hash": "e9760291bbf9d554c3fd2edb9dca0578efb7f4d595800fbb6a5b2d50eac0a082"
	},
	{
		"id": "d60875f5aef1",
		"ts": "2026-08-19T07:34:12.640Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 544675.36,
		"hash": "d60875f5aef1cc7bd953d1339f857901f2e95cbec70e348c02013a6406adc3f8"
	},
	{
		"id": "cefdf3241f26",
		"ts": "2026-08-19T07:34:12.854Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4281068.77,
		"hash": "cefdf3241f260b9594698bd43eca25b835a7dbe7f3cd6507520294b23e3f1fac"
	},
	{
		"id": "c8c790b66719",
		"ts": "2026-08-19T07:34:13.081Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9881655.94,
		"hash": "c8c790b6671951f70363fd2ed26fd30a7bdc6cb46b4ef25c63d21518347212cf"
	},
	{
		"id": "6ce5b6afe497",
		"ts": "2026-08-19T07:34:13.295Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2924362.44,
		"hash": "6ce5b6afe49722344287b7ccf9dab6a7d0c9205eda75b68cc6817274229d9ebb"
	},
	{
		"id": "ee4f11a3001a",
		"ts": "2026-08-19T07:34:13.508Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 60488.83,
		"hash": "ee4f11a3001a4dd4630d480e03d670b25703df0de05f2d4181c709435b219534"
	},
	{
		"id": "ad65014a59b7",
		"ts": "2026-08-19T07:34:13.734Z",
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
		"liquidityUsd": 867332.49,
		"hash": "ad65014a59b75f3b7f7e30182c9b7da066df9d2bffa31e18b42290443882db85"
	},
	{
		"id": "3abd8b05a78b",
		"ts": "2026-08-19T07:34:13.948Z",
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
		"liquidityUsd": 69233.25,
		"hash": "3abd8b05a78bc6561a078e24e2577a300f086434e14d065ddd8fd27864d7210d"
	},
	{
		"id": "e63c7a91f139",
		"ts": "2026-08-19T06:36:40.432Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111722408.97,
		"hash": "e63c7a91f139550bd3c4f06ed02b4f72d11bf80c275b8ca04aef8eb44cf6ab28"
	},
	{
		"id": "7f00232e6e6e",
		"ts": "2026-08-19T06:36:40.675Z",
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
		"liquidityUsd": 16950992.02,
		"hash": "7f00232e6e6e12956ee0b7efab1376e9b0c0c62252ebbd26090ae73bcf77d08e"
	},
	{
		"id": "4f75479c7b8f",
		"ts": "2026-08-19T06:36:40.918Z",
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
		"liquidityUsd": 739045.04,
		"hash": "4f75479c7b8f1dca1f9c793cb4f82b0efce0da86308321b1d3a2fd27a4ec546b"
	},
	{
		"id": "fa25b4ddaa2f",
		"ts": "2026-08-19T06:36:41.163Z",
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
		"liquidityUsd": 26635215.78,
		"hash": "fa25b4ddaa2f87287457a8be0c15c9923ee36655282a79a0f75761b198594fc5"
	},
	{
		"id": "33345314694d",
		"ts": "2026-08-19T06:36:41.401Z",
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
		"liquidityUsd": 4237754.78,
		"hash": "33345314694d90befb45858083dffa495ebfce757baec32223fa127fbe8a5d20"
	},
	{
		"id": "bc3f46b968ec",
		"ts": "2026-08-19T06:36:41.660Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 891945.82,
		"hash": "bc3f46b968ec499dc895c6895ab6f4490212fbc12ff66200f482fee127127617"
	},
	{
		"id": "0c0eac6f7ba3",
		"ts": "2026-08-19T06:36:41.894Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4191042.05,
		"hash": "0c0eac6f7ba3632be199f5a689ac28b9cc39d6910424dab6b9c7a38964b7be2a"
	},
	{
		"id": "f69ca32c9755",
		"ts": "2026-08-19T06:36:42.130Z",
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
		"liquidityUsd": 3543660.52,
		"hash": "f69ca32c97559b0727d2495f41dbb6a471b053b53149ae3584e02173ca15bb3e"
	},
	{
		"id": "c273beecd44e",
		"ts": "2026-08-19T06:36:42.383Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 386201.53,
		"hash": "c273beecd44e89b6e3662b4a0f26c6d7e9a077e59f8aec3fb10cce5f9d73421f"
	},
	{
		"id": "f254f459a072",
		"ts": "2026-08-19T06:36:42.636Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3442303.28,
		"hash": "f254f459a072d7d46296e3d817c3a3b5951243ad6e7763ac77639d109d289202"
	},
	{
		"id": "61f7144802d0",
		"ts": "2026-08-19T06:36:42.857Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2865851.05,
		"hash": "61f7144802d09a18b38c0b927218eec1c46a94bc744707d4213dcad4937f7a5b"
	},
	{
		"id": "e0d5689c0c4d",
		"ts": "2026-08-19T06:36:43.075Z",
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
		"liquidityUsd": 491831.29,
		"hash": "e0d5689c0c4dbaf9f31afe359381cc4a74495367ddf0042a4317288009467aab"
	},
	{
		"id": "b2610b0479a5",
		"ts": "2026-08-19T06:36:43.295Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 516731.07,
		"hash": "b2610b0479a5fcd7ba6a209836aaef15bf01460f6dea183b32d7d571d523da95"
	},
	{
		"id": "2135a0661b94",
		"ts": "2026-08-19T06:36:43.512Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4191042.05,
		"hash": "2135a0661b94b240540ec389dadf040d3ca8c10a923fed261fef8bbabc093d49"
	},
	{
		"id": "47365ec73493",
		"ts": "2026-08-19T06:36:43.733Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9594446.43,
		"hash": "47365ec7349309979a8f6ef6622360c92de7270f0f11debd0bb312a0ce1ceb0f"
	},
	{
		"id": "e8e8ec75e929",
		"ts": "2026-08-19T06:36:43.950Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 62524.56,
		"hash": "e8e8ec75e929cad0106e5d0af6d6aecfb5374c31b49e5d2f48c0e5b24695f4cd"
	},
	{
		"id": "c56761f8ef11",
		"ts": "2026-08-19T06:36:44.174Z",
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
		"liquidityUsd": 861452.31,
		"hash": "c56761f8ef118c6cbb3acb7af62a6c17b2be671ed5377a4637606a8ad440d1fe"
	},
	{
		"id": "1dd24b467065",
		"ts": "2026-08-19T06:36:44.392Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2941326.53,
		"hash": "1dd24b4670656082d3bc8e0b879d1b5fc68beb05d628c7176ea9db9372c1080f"
	},
	{
		"id": "5ad58b7da51f",
		"ts": "2026-08-19T06:36:44.614Z",
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
		"liquidityUsd": 65976.37,
		"hash": "5ad58b7da51f8e4b63531a64cb6e64e25aa7921582563317b12e5d0639a7663a"
	},
	{
		"id": "15b316055686",
		"ts": "2026-08-19T05:25:14.668Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111728307.45,
		"hash": "15b316055686701b8ab85c5348771a8350e4fdbadbbd833012d328097dce53d7"
	},
	{
		"id": "070eef6fbc07",
		"ts": "2026-08-19T05:25:15.314Z",
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
		"liquidityUsd": 16999317.06,
		"hash": "070eef6fbc07ab6572af1d36fd1750aa9906f5c5fecc8d31fcf23acb95dcd44b"
	},
	{
		"id": "4fbc266f6475",
		"ts": "2026-08-19T05:25:15.777Z",
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
		"liquidityUsd": 743196.6,
		"hash": "4fbc266f64752fdbebd8ba8e0da55cdfe48e27f0e26a97c1960d22f837f0a4c9"
	},
	{
		"id": "b3fc5e71813e",
		"ts": "2026-08-19T05:25:16.207Z",
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
		"liquidityUsd": 26635419.68,
		"hash": "b3fc5e71813eebd9605b72bb4756c35a3f6251daf4bb44edfaaf597f1fa3141e"
	},
	{
		"id": "97e3970823ac",
		"ts": "2026-08-19T05:25:16.643Z",
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
		"liquidityUsd": 4245815.75,
		"hash": "97e3970823acda02fca9fb454d8ba3be23101e0d1251ae6633747151be714fa1"
	},
	{
		"id": "15d634c0ce08",
		"ts": "2026-08-19T05:25:16.887Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 891945.82,
		"hash": "15d634c0ce0869449cc515575dd04ed695c7121811cfc4c3cd021f2a89f6126d"
	},
	{
		"id": "85e94647dc3e",
		"ts": "2026-08-19T05:25:17.209Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4220587.96,
		"hash": "85e94647dc3ea74280d9d85ce9ec4524631a79778a82fb2c407ae87ea429d658"
	},
	{
		"id": "023ac3f307b9",
		"ts": "2026-08-19T05:25:17.625Z",
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
		"liquidityUsd": 3542491.36,
		"hash": "023ac3f307b9514eb3c64aaf8bc577dd2b2579296d40a4a54e4406c95e4e7314"
	},
	{
		"id": "b54dacc772f7",
		"ts": "2026-08-19T05:25:18.291Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 385095.93,
		"hash": "b54dacc772f702ca1a958bf790de7014218b2c87f91ffacf5da4116f35763900"
	},
	{
		"id": "c43a7bfdf09a",
		"ts": "2026-08-19T05:25:18.535Z",
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
		"liquidityUsd": 483421.93,
		"hash": "c43a7bfdf09afb3f7dcff6d059e2066b7d47b8e6331ebe92b522bd3d3289de78"
	},
	{
		"id": "8b3fa676a483",
		"ts": "2026-08-19T05:25:18.764Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3385533.46,
		"hash": "8b3fa676a483da3758966a61f324b85227d95817b057bb418d6a1153fdab051f"
	},
	{
		"id": "273215d9b280",
		"ts": "2026-08-19T05:25:18.983Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2855591.43,
		"hash": "273215d9b280e10780d909c2c505a9e527cb6ab72e1f70abd9ac04632a1281a9"
	},
	{
		"id": "fe0340f3cc0a",
		"ts": "2026-08-19T05:25:19.212Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4218989.72,
		"hash": "fe0340f3cc0a2d45aceb31907699d404d36ae277cf6b1245952d88841d14a8e2"
	},
	{
		"id": "638779552344",
		"ts": "2026-08-19T05:25:19.429Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 525798.03,
		"hash": "63877955234483ca7ea2086916221107a09a0963939cb4e93aafb9e38d83cad0"
	},
	{
		"id": "508dd7110b70",
		"ts": "2026-08-19T05:25:19.663Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9196845.63,
		"hash": "508dd7110b70ec7a5ce6149e6ade83d6e53ab30ef4e49d2c32b53434b93342ae"
	},
	{
		"id": "d338d30e02c7",
		"ts": "2026-08-19T05:25:19.884Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 51825.9,
		"hash": "d338d30e02c73596f54b72cfe42713f97c410bc9759a9acf36ee3f650650e6c3"
	},
	{
		"id": "972ad47f6dd7",
		"ts": "2026-08-19T05:25:20.106Z",
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
		"liquidityUsd": 871959.98,
		"hash": "972ad47f6dd78b598ad715c9ae69a8ddd8c4f0c9361961086e0ad1afad98fbbe"
	},
	{
		"id": "7ef7e611357c",
		"ts": "2026-08-19T05:25:20.333Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2944508.61,
		"hash": "7ef7e611357cd7a2893fc6cb59df11c7b20449a1658a6c0a4bc585dedaced4f1"
	},
	{
		"id": "2ebb534101ce",
		"ts": "2026-08-19T05:25:20.561Z",
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
		"liquidityUsd": 68668.22,
		"hash": "2ebb534101ce5f07250d71715d65bf19f656bb44fea01fca33e334e7438b34d4"
	},
	{
		"id": "a540aec3f33b",
		"ts": "2026-08-19T04:32:46.081Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111798685.1,
		"hash": "a540aec3f33b7d1d78354023b1178dd4a069dbb37c65fa80bf89dc188e77e6fc"
	},
	{
		"id": "4e013b0ba327",
		"ts": "2026-08-19T04:32:46.628Z",
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
		"liquidityUsd": 16450015.37,
		"hash": "4e013b0ba327a4ae1df09a7c2cb93a49287b5ff52b477d658ac4b2a0e8cd7f4e"
	},
	{
		"id": "66a16a0e69e5",
		"ts": "2026-08-19T04:32:46.880Z",
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
		"liquidityUsd": 743196.6,
		"hash": "66a16a0e69e522b99b2b3564cb58a0589ffa44ccebbc2ec87cac9c671ee2fc44"
	},
	{
		"id": "3cf2c492de92",
		"ts": "2026-08-19T04:32:47.127Z",
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
		"liquidityUsd": 26635654.55,
		"hash": "3cf2c492de9208d5739224bf02a96f940242070d6af2742907e7bfaf6d7a37a7"
	},
	{
		"id": "877e298098a0",
		"ts": "2026-08-19T04:32:47.373Z",
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
		"liquidityUsd": 4245119.76,
		"hash": "877e298098a04770cd80f45860fa28ab23e8c4ed155b7e641d37ce9b4a79f7e0"
	},
	{
		"id": "b39cd6a0a9bb",
		"ts": "2026-08-19T04:32:47.667Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 893639.78,
		"hash": "b39cd6a0a9bb16f0a679074ee93d767e6245162513f2feebfa46a7b5ccacb29b"
	},
	{
		"id": "6f9024501115",
		"ts": "2026-08-19T04:32:47.913Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4188169.53,
		"hash": "6f9024501115ef340a3075fd1bb56ee13ec39ea246915711e4e804a9b0df4d56"
	},
	{
		"id": "94e43f3ae1fa",
		"ts": "2026-08-19T04:32:48.164Z",
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
		"liquidityUsd": 3543399.27,
		"hash": "94e43f3ae1fa882af9d531543511c9e74fa7fefead59b2ee32f6c8774a4b77d6"
	},
	{
		"id": "3c895f7b5199",
		"ts": "2026-08-19T04:32:48.413Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 368619.99,
		"hash": "3c895f7b51996735789235461575c010e6180ce1450782d1204838f518b48f08"
	},
	{
		"id": "8e0cf6fa8b62",
		"ts": "2026-08-19T04:32:48.662Z",
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
		"liquidityUsd": 484003.44,
		"hash": "8e0cf6fa8b62896b1ff88acc5f8ddc284791f87e61795294d587234787b60a88"
	},
	{
		"id": "09227f2d47a0",
		"ts": "2026-08-19T04:32:48.895Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3329662.41,
		"hash": "09227f2d47a07935dd78a68ff167335dcce7bb1ad10c0c83fb16c9bb39b9f92b"
	},
	{
		"id": "e387fa5a7fc3",
		"ts": "2026-08-19T04:32:49.125Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2952000.98,
		"hash": "e387fa5a7fc3fae8135bbd9ecd6f539f3cad9b4f23226891d63e15565e72c311"
	},
	{
		"id": "f2c14734fc90",
		"ts": "2026-08-19T04:32:49.357Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4188169.53,
		"hash": "f2c14734fc9048712d1da0c40382e8d064add6c57ef18f3dce921e0107938ecf"
	},
	{
		"id": "03bbcb242285",
		"ts": "2026-08-19T04:32:49.591Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 530891.39,
		"hash": "03bbcb242285dc0be103d56693215f4625d535f4f1e07110c49047eee0b2b5b0"
	},
	{
		"id": "f8fabc90bdd9",
		"ts": "2026-08-19T04:32:49.820Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9278858.29,
		"hash": "f8fabc90bdd9259f3c2e7a99734f775bdd8c92003cacbfb2de6aa0918f84a212"
	},
	{
		"id": "89b85aaf2caf",
		"ts": "2026-08-19T04:32:50.052Z",
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
		"liquidityUsd": 873446.44,
		"hash": "89b85aaf2caf7ad0d035dd596f83b2ac5699b2fd5cb10154817f3cc03b3c29be"
	},
	{
		"id": "db7647b411c4",
		"ts": "2026-08-19T04:32:50.302Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55179.57,
		"hash": "db7647b411c4283f95bcabc5858ebedb46be9a17f842d77e8aba62dd6be6a45f"
	},
	{
		"id": "1afe0bd75935",
		"ts": "2026-08-19T04:32:50.535Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2945605.07,
		"hash": "1afe0bd75935e2d7b80a72a1e56e8e4d21785bb4094917f5078950d7310fd6cb"
	},
	{
		"id": "cfd039f31756",
		"ts": "2026-08-19T04:32:50.770Z",
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
		"liquidityUsd": 64049.88,
		"hash": "cfd039f3175693fa35283f78afa5706aeef9cefb38e18a5aa7dd126eb2344327"
	},
	{
		"id": "3d3e697f5bb1",
		"ts": "2026-08-19T03:42:24.603Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111807604.09,
		"hash": "3d3e697f5bb19647df4f886d92a37a78bce53446855e74bbe9fc2af1812bcd89"
	},
	{
		"id": "e49a33c5035e",
		"ts": "2026-08-19T03:42:25.106Z",
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
		"liquidityUsd": 17295211.87,
		"hash": "e49a33c5035ea3dbbafb70198e081d47fb4d1d7f7de88668f85a56b46ffe9a3a"
	},
	{
		"id": "3667d1f4d06b",
		"ts": "2026-08-19T03:42:25.362Z",
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
		"liquidityUsd": 744971.28,
		"hash": "3667d1f4d06b9d73a823cdf1691749e868c4a74f9d905f9663fe351bd42d10cb"
	},
	{
		"id": "a4d721b9929d",
		"ts": "2026-08-19T03:42:25.632Z",
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
		"liquidityUsd": 26635748.96,
		"hash": "a4d721b9929d0853778f71b93257b9200402676e23054e52cc5f2c78fbfc478e"
	},
	{
		"id": "ef13baac6e07",
		"ts": "2026-08-19T03:42:25.881Z",
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
		"liquidityUsd": 4248708.19,
		"hash": "ef13baac6e072732c2bdd3e3b221f64641794b1bbb7346c06261bc0b09941f8d"
	},
	{
		"id": "ddba1ef089bb",
		"ts": "2026-08-19T03:42:26.153Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 893639.78,
		"hash": "ddba1ef089bbe46ab7c5f1345bbf3f93fa42649d764497c07a9dbe2efbad1560"
	},
	{
		"id": "0bceb35e0c0c",
		"ts": "2026-08-19T03:42:26.420Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4216993.82,
		"hash": "0bceb35e0c0c617480d3d223ece7a922086b5828c5ca46d654049b737adbca8a"
	},
	{
		"id": "90ce7a5510f1",
		"ts": "2026-08-19T03:42:26.674Z",
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
		"liquidityUsd": 3540779.99,
		"hash": "90ce7a5510f1d65f696db2a557157a00b85954d0ce2fca5ce5b2586d958ff828"
	},
	{
		"id": "f49870ebce05",
		"ts": "2026-08-19T03:42:27.195Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 369400.24,
		"hash": "f49870ebce05534c8e4e0ec05487f8485d6c00f980c71ad6fddae9b265f743be"
	},
	{
		"id": "6665225677c3",
		"ts": "2026-08-19T03:42:27.448Z",
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
		"liquidityUsd": 473685.91,
		"hash": "6665225677c3d50010dff9572d6bf1729486c629bbf470195b422d645c24c648"
	},
	{
		"id": "964d3749930c",
		"ts": "2026-08-19T03:42:27.700Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3492603.3,
		"hash": "964d3749930cf775f7a37cc2c629b5b0a886be4970d4b4d56d9e56ecc270211e"
	},
	{
		"id": "b42b9ff096dc",
		"ts": "2026-08-19T03:42:27.935Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2882660.53,
		"hash": "b42b9ff096dc97f42f4a54920a92612c217abc45a755a8a017548906223dc6fe"
	},
	{
		"id": "ed2c2ff4b076",
		"ts": "2026-08-19T03:42:28.183Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 533059.89,
		"hash": "ed2c2ff4b076d52ffeed3125999b52efeed2bfb1a95a4f2a862c8c9760c823b4"
	},
	{
		"id": "8971dfe42f27",
		"ts": "2026-08-19T03:42:28.418Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4216993.82,
		"hash": "8971dfe42f27a6007b7a8ae22a387196538f482e7bf2c99bfd59881a03c32da0"
	},
	{
		"id": "e011539b0d19",
		"ts": "2026-08-19T03:42:28.667Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9313624.68,
		"hash": "e011539b0d19b994a572ba34645ac995dbf556d2ceea9e085316e913b8ba952b"
	},
	{
		"id": "586e89c19977",
		"ts": "2026-08-19T03:42:28.904Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 54096.39,
		"hash": "586e89c19977004ee96d19ab01f997f6bff2c30a908a395620fe7f845926fbe5"
	},
	{
		"id": "3aaa0894d0d8",
		"ts": "2026-08-19T03:42:29.154Z",
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
		"liquidityUsd": 872014.52,
		"hash": "3aaa0894d0d84674adcd8d7147bdceec6af5feb39ee4aa7bcd5c510ccc1ffcf6"
	},
	{
		"id": "332f1c60dc43",
		"ts": "2026-08-19T03:42:29.403Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2939473.36,
		"hash": "332f1c60dc43b891e79f7542f6e9765654c50bdbb7725a04e284f549316b0fda"
	},
	{
		"id": "92c86a2d3016",
		"ts": "2026-08-19T03:42:29.638Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 244291.62,
		"hash": "92c86a2d3016c7d075717a1d4f37a9bee66a358b8e2a788e892d4fb4b1139976"
	},
	{
		"id": "c667d6ed5102",
		"ts": "2026-08-19T02:21:30.782Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112755937.42,
		"hash": "c667d6ed510236a019a0e54d69025f77edc0ef16fe5f0150ce6cb7f155d0b6e0"
	},
	{
		"id": "39ac49eb2cd2",
		"ts": "2026-08-19T02:21:31.308Z",
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
		"liquidityUsd": 18358309.44,
		"hash": "39ac49eb2cd2b579d3d584dba413bcad80cad754e4a64f88e9965f2a00ed6f0c"
	},
	{
		"id": "e726b33f058e",
		"ts": "2026-08-19T02:21:31.806Z",
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
		"liquidityUsd": 743612.63,
		"hash": "e726b33f058e17d3aaf95dc46dc3e0edab0c0137524160dbbf0482c6d2a16c32"
	},
	{
		"id": "0b5e0ed280ad",
		"ts": "2026-08-19T02:21:32.078Z",
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
		"liquidityUsd": 26635124.05,
		"hash": "0b5e0ed280add6825f1228ff1ea06d8e18d0c4f4017adff94379a9dc3f840034"
	},
	{
		"id": "04b4a527475b",
		"ts": "2026-08-19T02:21:32.352Z",
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
		"liquidityUsd": 4241320.22,
		"hash": "04b4a527475bb8b97a3285ca75de9aedf8d48658ef331b1d8b24d7e2a55bd45c"
	},
	{
		"id": "380ed8dcfd31",
		"ts": "2026-08-19T02:21:32.625Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 891561.12,
		"hash": "380ed8dcfd31b5f2ee9a848b6d8d376984558659d7f179827943a465b7a400c6"
	},
	{
		"id": "96c996dd3f2c",
		"ts": "2026-08-19T02:21:32.897Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4196666.7,
		"hash": "96c996dd3f2c84dd6de21a18f51bf7f8291b2f048e003dbe44be441e2a7d8a6b"
	},
	{
		"id": "4beee87e2671",
		"ts": "2026-08-19T02:21:33.170Z",
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
		"liquidityUsd": 3536610.54,
		"hash": "4beee87e2671bef35836b0282811912a6e466f8f6a259683f11d22442fea75bb"
	},
	{
		"id": "ddf041b6e337",
		"ts": "2026-08-19T02:21:33.666Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 368196.74,
		"hash": "ddf041b6e3379622076dd95a424a44f228fc07867762462292ffb3a12afa16dd"
	},
	{
		"id": "3b96f3cbdee7",
		"ts": "2026-08-19T02:21:34.020Z",
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
		"liquidityUsd": 474991.23,
		"hash": "3b96f3cbdee77d44a0730749ab284e4315bb8bb0a246796cb9e55c9962964f56"
	}
]
