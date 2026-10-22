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
	"updatedAt": "2026-10-22T16:33:29.934Z",
	"tokensScored": 21043,
	"verdictsIssued": 21043,
	"safe": 17935,
	"risky": 1487,
	"likelyRug": 1621,
	"ticks": 1188
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "8532d4797db6",
		"ts": "2026-10-22T16:33:24.571Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 155956190.24,
		"hash": "8532d4797db640912f92e5fa06ea3892b929b5557034cbe6ac106f6686bd36ac"
	},
	{
		"id": "e3b8bba9edb2",
		"ts": "2026-10-22T16:33:25.037Z",
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
		"liquidityUsd": 16248609.5,
		"hash": "e3b8bba9edb2fc2b10480aa8d96bf9eecb4632786926d9062ab881c5cebc7830"
	},
	{
		"id": "df5a1e350c77",
		"ts": "2026-10-22T16:33:25.316Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 266908.8,
		"hash": "df5a1e350c772c077d91c673e6141a7c1b3bf5cabcdb1e392fb62b903fb1cd73"
	},
	{
		"id": "5a8751492de2",
		"ts": "2026-10-22T16:33:25.571Z",
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
		"liquidityUsd": 18196947.11,
		"hash": "5a8751492de20eb4ef25931eb5e772b9e04be249d54322d53fc5c117ec4183ae"
	},
	{
		"id": "1742aee620d0",
		"ts": "2026-10-22T16:33:25.853Z",
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
		"liquidityUsd": 3472138.17,
		"hash": "1742aee620d02bf6940310a6c78b973c8fcfadd75615da15599a1fe87ae69bb7"
	},
	{
		"id": "85f46042e0cf",
		"ts": "2026-10-22T16:33:26.130Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1144230.87,
		"hash": "85f46042e0cf067627a5ddc9bc9ed52f0357117ab644b260f3e4d652a4a256bc"
	},
	{
		"id": "4b87dc59a8ab",
		"ts": "2026-10-22T16:33:26.734Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 18196947.11,
		"hash": "4b87dc59a8ab91618e195b73294ac25dff98858bfb9eb7e8594df7ef1feb5f1a"
	},
	{
		"id": "2a8ed8472ef0",
		"ts": "2026-10-22T16:33:26.997Z",
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
		"liquidityUsd": 1160291.94,
		"hash": "2a8ed8472ef0b90855ef0764d3b74f326823d5652949539d275eb7aba9abe809"
	},
	{
		"id": "60175b00fdee",
		"ts": "2026-10-22T16:33:27.290Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2469823.18,
		"hash": "60175b00fdeecded54139d95debd8cb475d4f12391b939916d2a5caa4762d9db"
	},
	{
		"id": "b177d573ce1e",
		"ts": "2026-10-22T16:33:27.577Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1278663.54,
		"hash": "b177d573ce1eb19852ab46a15f25c0dfcd56702dff5ea94151edd161c0781265"
	},
	{
		"id": "b33ffaa8fb9f",
		"ts": "2026-10-22T16:33:27.816Z",
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
		"liquidityUsd": 15421141.61,
		"hash": "b33ffaa8fb9fc00cfea77b895bd79fbdd15c22e47844c69889e74da28006afea"
	},
	{
		"id": "599b5ede5336",
		"ts": "2026-10-22T16:33:28.050Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 57901.8,
		"hash": "599b5ede5336590874e04bbe07c2342472700c771ba2a9a05ee5c1efc9ddc965"
	},
	{
		"id": "f94e4cf3b466",
		"ts": "2026-10-22T16:33:28.343Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 1803627.25,
		"hash": "f94e4cf3b4663eb52ed114393a18444dd0ec7597713e17ccaf9c4775e7c99749"
	},
	{
		"id": "31bc1ab64031",
		"ts": "2026-10-22T16:33:28.580Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 96990.98,
		"hash": "31bc1ab64031bf9963077508bb8304ec68660fe0e34c38ecb18838cd29f565d9"
	},
	{
		"id": "f40896ca5c5f",
		"ts": "2026-10-22T16:33:28.815Z",
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
		"liquidityUsd": 3261566.9,
		"hash": "f40896ca5c5fbd0838604591320dfb3df5c0f41b5de50c7b180e991674c63b22"
	},
	{
		"id": "3d2fc091c2cc",
		"ts": "2026-10-22T16:33:29.047Z",
		"symbol": "PANGEA",
		"token": "0xA551dEF8a44ea423CaA58DA45b3F5764004286Ea",
		"score": 71,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.42,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 134912.47,
		"hash": "3d2fc091c2cc90658939dd8cc47860dcf6a43e52f03a93f072d6019f91bb5f40"
	},
	{
		"id": "4ba11ffd674d",
		"ts": "2026-10-22T16:33:29.284Z",
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
		"liquidityUsd": 262890.31,
		"hash": "4ba11ffd674d522626b0161e200104761f22b078f509bf355ca08499280e738d"
	},
	{
		"id": "98b9794727e2",
		"ts": "2026-10-22T16:33:29.520Z",
		"symbol": "MSTRc",
		"token": "0xb2000000000000000000004884b426556b92883d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1499445.81,
		"hash": "98b9794727e281d8c821ef1c407b0e39b41338875e04eaff9ec7071c7d4786fd"
	},
	{
		"id": "6a5b2a37c7b9",
		"ts": "2026-10-22T16:33:29.933Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3950534.82,
		"hash": "6a5b2a37c7b97f83c9485c1cac0af8e77afafd1dc811d522471f447fef09aed6"
	},
	{
		"id": "a1e96b97c78c",
		"ts": "2026-10-22T11:04:59.467Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 155482444.78,
		"hash": "a1e96b97c78c877256a9ac867f967a1712d367aac6e5e00e3dd9ce5e21825ba8"
	},
	{
		"id": "f401f491ad75",
		"ts": "2026-10-22T11:05:00.203Z",
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
		"liquidityUsd": 16283801.51,
		"hash": "f401f491ad75f6b071cd40973fc7a23a18a12134d6c6acf1afa86ec1de997cee"
	},
	{
		"id": "5ce8ba756eb1",
		"ts": "2026-10-22T11:05:00.501Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 266086.31,
		"hash": "5ce8ba756eb1e82e1e3614e2c5055469fdeeec72b7db6f8a246af36258ceb11e"
	},
	{
		"id": "a8600a504310",
		"ts": "2026-10-22T11:05:01.090Z",
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
		"liquidityUsd": 21354131.02,
		"hash": "a8600a504310f183a2138b026615f6bcd78615b9e1e320952a99c6f919b495da"
	},
	{
		"id": "40c169c21f18",
		"ts": "2026-10-22T11:05:01.371Z",
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
		"liquidityUsd": 3943040.18,
		"hash": "40c169c21f189efa621f5d82f35fd71ca6ea50f9146aac72279ffdf2a413d82a"
	},
	{
		"id": "388de5c6c4f0",
		"ts": "2026-10-22T11:05:01.651Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1145468.75,
		"hash": "388de5c6c4f021e84bc8a821dcd4b1bf4eec3ca292757103bd0c4942975e9ea0"
	},
	{
		"id": "4db62cc4120f",
		"ts": "2026-10-22T11:05:01.918Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 21354131.02,
		"hash": "4db62cc4120fc9d83eabde223718a163dfe2ab149e8d11b550bc6a533125a4b2"
	},
	{
		"id": "299bb9d5f4d2",
		"ts": "2026-10-22T11:05:02.198Z",
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
		"liquidityUsd": 1317160.54,
		"hash": "299bb9d5f4d249e44a52116d58c12ab8b4d6ef2849adc2d4b52d60bf32e1a92e"
	},
	{
		"id": "fa566d584d39",
		"ts": "2026-10-22T11:05:02.467Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2470591.43,
		"hash": "fa566d584d394d2aa311d5c0bc1e665449cc3d276a4da86b0cd6fe7962c42e3b"
	},
	{
		"id": "b01d5f897222",
		"ts": "2026-10-22T11:05:02.735Z",
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
		"liquidityUsd": 16092402.84,
		"hash": "b01d5f897222c1edd58dae87dfe757899908ddf9a1339534e8b6a67fa92318dc"
	},
	{
		"id": "0a114811273f",
		"ts": "2026-10-22T11:05:03.011Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 59885.38,
		"hash": "0a114811273f8f6943600375e89fab74aa38b4fe62e3b5fb78883e86f14858cc"
	},
	{
		"id": "8100a0f51c38",
		"ts": "2026-10-22T11:05:03.276Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1284946.17,
		"hash": "8100a0f51c38e062df39c103491094e5f575c0791d997a0510f13a3cad38ba37"
	},
	{
		"id": "3e75551dec86",
		"ts": "2026-10-22T11:05:03.526Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 1801157.85,
		"hash": "3e75551dec861934e73643a3d42cb0ae71f7b3482df460b3da5b6d5cfec7de8c"
	},
	{
		"id": "0d6e860a2431",
		"ts": "2026-10-22T11:05:03.772Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 106250.97,
		"hash": "0d6e860a2431d50eece1dfc83042b7917a416cddc127e9f085c35a35b6edd850"
	},
	{
		"id": "b64e8fbdb28f",
		"ts": "2026-10-22T11:05:04.019Z",
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
		"liquidityUsd": 3326071.01,
		"hash": "b64e8fbdb28f4b88d7cc1bf3f40a924387d1589653b5e78fa99dc193fb681d72"
	},
	{
		"id": "40e769da343f",
		"ts": "2026-10-22T11:05:04.267Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 306617.52,
		"hash": "40e769da343f832c1f63d680ff924aa1843df227cf7ee06b8aeaa8795a2b25a2"
	},
	{
		"id": "5ab9672b8a03",
		"ts": "2026-10-22T11:05:04.513Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1129807.31,
		"hash": "5ab9672b8a03d3511c82d1a3cdef7c12409e9fda4c48f2665430c8c26986804c"
	},
	{
		"id": "1e0711a5ce77",
		"ts": "2026-10-22T11:05:04.768Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 471573.16,
		"hash": "1e0711a5ce77da1de28382b89757081c5db070980a514439431fe00b10306dd9"
	},
	{
		"id": "1f491e7159a0",
		"ts": "2026-10-22T11:05:05.017Z",
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
		"liquidityUsd": 262447.22,
		"hash": "1f491e7159a063e8643b7dc570f7175370233bb14aa5e72c8bd0b3de98f90865"
	},
	{
		"id": "fa3766ee8378",
		"ts": "2026-10-22T05:43:11.441Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156592016.53,
		"hash": "fa3766ee83780aeda15e5d4318a50a13e3e91b17c15f90c1171ce0739d323450"
	},
	{
		"id": "6eeb8cc58877",
		"ts": "2026-10-22T05:43:11.897Z",
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
		"liquidityUsd": 16400479.31,
		"hash": "6eeb8cc588778aeffde1eb6b9f3278258086482880acbd26ea613a20a76d3ed1"
	},
	{
		"id": "ac465d446cba",
		"ts": "2026-10-22T05:43:12.159Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 272238.1,
		"hash": "ac465d446cba38500f41e992b21a9b2288df5497fcea5c276d1d11b2b6f599a3"
	},
	{
		"id": "7570054667b8",
		"ts": "2026-10-22T05:43:12.423Z",
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
		"liquidityUsd": 24767855.58,
		"hash": "7570054667b8aa156723b07bb96d96a038ca778579afa1eefb43e0dbd7744f02"
	},
	{
		"id": "16578a15f06f",
		"ts": "2026-10-22T05:43:12.678Z",
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
		"liquidityUsd": 4074439.86,
		"hash": "16578a15f06f1b4fe334abd132def1c4f29d1f9a3cb5035dbce906f23577a32e"
	},
	{
		"id": "ba42c89494ed",
		"ts": "2026-10-22T05:43:12.935Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1165194.82,
		"hash": "ba42c89494ed9c92020b4a033db84d34cf738145947b632275bd79e4b51aeafe"
	},
	{
		"id": "cb25ff90c46c",
		"ts": "2026-10-22T05:43:13.201Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24767855.58,
		"hash": "cb25ff90c46cfdda37535d557dc4db4526935bc8e8704653b84351e36162aa77"
	},
	{
		"id": "7ceba2c890cd",
		"ts": "2026-10-22T05:43:13.461Z",
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
		"liquidityUsd": 766808.12,
		"hash": "7ceba2c890cdfee9e0fb0cce3039fc690bbc12b8ad7361acaf6a81884357d827"
	},
	{
		"id": "1e38ac1ba5a7",
		"ts": "2026-10-22T05:43:13.740Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2471259.16,
		"hash": "1e38ac1ba5a7e04f26fce5d39ba3b1ed6bb40a2bd5b3e3f8c0159de6eb64f28e"
	},
	{
		"id": "82f5eb0efae5",
		"ts": "2026-10-22T05:43:13.996Z",
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
		"liquidityUsd": 16752952.58,
		"hash": "82f5eb0efae57aa7dd2e4e0eed7f6e27bea004339a9bf83030b57c351e70ef62"
	},
	{
		"id": "e7a014679004",
		"ts": "2026-10-22T05:43:14.235Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 1793998.73,
		"hash": "e7a014679004202a8ff74c86f78d60da23d523df1321d7f6c12ae9a961d5bf4f"
	},
	{
		"id": "2b027c5689c5",
		"ts": "2026-10-22T05:43:14.457Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 310867.96,
		"hash": "2b027c5689c5c925aa6f0428705c4b627aa753762569a54cd42f63fcb7e24bdf"
	},
	{
		"id": "81c702c60dc1",
		"ts": "2026-10-22T05:43:14.682Z",
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
		"liquidityUsd": 3430877.89,
		"hash": "81c702c60dc174e159190ca16ab03b06d350ef570bd825efa1b3997f4763ae25"
	},
	{
		"id": "b54eff09f065",
		"ts": "2026-10-22T05:43:14.906Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 63180.58,
		"hash": "b54eff09f06524a0f14d16561fe599976c45bf16bc04dde2272d93407cd703b0"
	},
	{
		"id": "0c3c14e4e686",
		"ts": "2026-10-22T05:43:15.141Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1186489.82,
		"hash": "0c3c14e4e6860211228cbf3feef3ded2827329fe3ffe9c533d34c0bb4451b772"
	},
	{
		"id": "c7ecd82d8b6a",
		"ts": "2026-10-22T05:43:15.378Z",
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
		"liquidityUsd": 1297754.46,
		"hash": "c7ecd82d8b6adb1eef2dbda66a96dc6c23eee92461fc5a73293f7962628e9706"
	},
	{
		"id": "aa2d755e836e",
		"ts": "2026-10-22T05:43:15.600Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 158667.4,
		"hash": "aa2d755e836ef620ba75b381002d1253fa37d22b8f17a02e43834e7b0646bcb3"
	},
	{
		"id": "b0f83f88b564",
		"ts": "2026-10-22T05:43:15.825Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 637789.48,
		"hash": "b0f83f88b564ace0923c19d4bb510785e51d3a7bfee6cd2a79988aa11fe168d5"
	},
	{
		"id": "d67a78000248",
		"ts": "2026-10-22T05:43:16.060Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1156570.52,
		"hash": "d67a78000248a6d8381d149315f92da89d0cf969b4b7e6e5dc25c1cb99d890e9"
	},
	{
		"id": "b24863b12443",
		"ts": "2026-10-22T00:24:08.177Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 157581269.79,
		"hash": "b24863b12443dba3b11e06e40923e339936507bd86f7b3a34c32d5b9cbb97a01"
	},
	{
		"id": "a99858db6357",
		"ts": "2026-10-22T00:24:08.648Z",
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
		"liquidityUsd": 16634105.75,
		"hash": "a99858db6357ef3805b6e5c0f3c4a6184230f5773b5984706ba2b1b2a99cb227"
	},
	{
		"id": "309ae42d98fc",
		"ts": "2026-10-22T00:24:08.924Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 275655.95,
		"hash": "309ae42d98fc29427aec76bcb0e1cc07b1e941680d32abe42e1774328fba3b55"
	},
	{
		"id": "fb64c1ab8c3f",
		"ts": "2026-10-22T00:24:09.220Z",
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
		"liquidityUsd": 28229071.47,
		"hash": "fb64c1ab8c3fc5e3d393a5a4c1fc6b443d9da458391caf4df68412ae3fac0e75"
	},
	{
		"id": "20f1c03df4ec",
		"ts": "2026-10-22T00:24:09.517Z",
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
		"liquidityUsd": 4221926.26,
		"hash": "20f1c03df4ecabcde8bdcf507652585df83555b0704f3d98ffb7d0661e29b65e"
	},
	{
		"id": "6be3a0e5176c",
		"ts": "2026-10-22T00:24:09.803Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1195282.16,
		"hash": "6be3a0e5176cffad8b40da2ffe4f19bb2809129a3ed5ac5c7ba98ed793f46fb9"
	},
	{
		"id": "e87607e76ec4",
		"ts": "2026-10-22T00:24:10.135Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28222253.39,
		"hash": "e87607e76ec435e8f85b83fde60dc4b6d4ff617dc092dcf212ef8ccc718c536e"
	},
	{
		"id": "70349af680b6",
		"ts": "2026-10-22T00:24:10.515Z",
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
		"liquidityUsd": 1315757.78,
		"hash": "70349af680b6dd6835edf00ea60655cf63f37812a6b5940521475bbcb03a0a87"
	},
	{
		"id": "3b3d7c8fa521",
		"ts": "2026-10-22T00:24:10.806Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2467144.31,
		"hash": "3b3d7c8fa521e936a813ba190ef0a1d7fbfd4b309790b723ef3bc68d6848b435"
	},
	{
		"id": "e1716ac29ef2",
		"ts": "2026-10-22T00:24:11.074Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 321049.89,
		"hash": "e1716ac29ef2c39783893144dbfe390edd884b160b6aeed41b00bfa546cccb7f"
	},
	{
		"id": "7923ed3aa635",
		"ts": "2026-10-22T00:24:11.316Z",
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
		"liquidityUsd": 3540844.72,
		"hash": "7923ed3aa63585febf852bb0eee03f6d6234760005a230421f595a9df378108e"
	},
	{
		"id": "a789c8b46a9b",
		"ts": "2026-10-22T00:24:11.547Z",
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
		"liquidityUsd": 17358078.14,
		"hash": "a789c8b46a9bd3ab3166e28c82c1a0ae0eb5c2df13467c18b890a7293f7a72a4"
	},
	{
		"id": "08987bd3c59d",
		"ts": "2026-10-22T00:24:11.798Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 1808233.95,
		"hash": "08987bd3c59d23a4eb2d8b5e47752697cd55a1682776d9c3e9bda755acc7c464"
	},
	{
		"id": "caf8a85f500f",
		"ts": "2026-10-22T00:24:12.107Z",
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
		"liquidityUsd": 1356626.14,
		"hash": "caf8a85f500f23f9d8a5eb9e8120bf6adcd0e88ca4074922a0ed2011cc6e439c"
	},
	{
		"id": "0495ee0aa13f",
		"ts": "2026-10-22T00:24:12.371Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1194790.53,
		"hash": "0495ee0aa13f57bd2e2ce5b78daedc51ae405079b7d0b66c35d017f74abff33f"
	},
	{
		"id": "9ef990aeaf6d",
		"ts": "2026-10-22T00:24:12.608Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1383026.41,
		"hash": "9ef990aeaf6d372583a9fcad1c735776af14a894f466d1ffcac503f735dfdb25"
	},
	{
		"id": "293f11e98e23",
		"ts": "2026-10-22T00:24:12.858Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 64047.48,
		"hash": "293f11e98e2309a801ea81fd214518518f0e819b30fe352fa0abe9ed42d3083b"
	},
	{
		"id": "2149d58201f4",
		"ts": "2026-10-22T00:24:13.102Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 636023.77,
		"hash": "2149d58201f4691ebcdb300ab7633da50102fef355b0ad2c4c3f0886eff75544"
	},
	{
		"id": "d1d5ffaefc1f",
		"ts": "2026-10-22T00:24:13.338Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1206206.63,
		"hash": "d1d5ffaefc1f98a3519da8da96f762054bb62daaa329ef3d2a223e8c68559c03"
	},
	{
		"id": "b052e94ea00b",
		"ts": "2026-10-21T21:11:49.019Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 158030177.88,
		"hash": "b052e94ea00b1cbdb0eadbd5ebc21d261692b5cf2d1de09a5a1cd93ac06e219c"
	},
	{
		"id": "3a15f6f4e9c6",
		"ts": "2026-10-21T21:11:49.708Z",
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
		"liquidityUsd": 16721847.79,
		"hash": "3a15f6f4e9c6356149617249d895ccd76560c1e05d53d66c3f55404825c61b50"
	},
	{
		"id": "f429ddd8a10d",
		"ts": "2026-10-21T21:11:50.169Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 276633.89,
		"hash": "f429ddd8a10d33e008c618f7763f63caa01d44aa1f6be9bd83f4b48e0c263b43"
	},
	{
		"id": "b09acfec73c4",
		"ts": "2026-10-21T21:11:50.644Z",
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
		"liquidityUsd": 34699236.48,
		"hash": "b09acfec73c41a2cc39d8349fffa2d1fe777815c9a7522d7e0ab9a64d70cd021"
	},
	{
		"id": "299bb68eba67",
		"ts": "2026-10-21T21:11:50.891Z",
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
		"liquidityUsd": 4259218.24,
		"hash": "299bb68eba67c7b73c750afcce174c07405b0d1463ef797e11a0cf3fe5348245"
	},
	{
		"id": "267dc5f12f6d",
		"ts": "2026-10-21T21:11:51.181Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1205590.99,
		"hash": "267dc5f12f6df4e1600e739ab46be71fa2bf5b7bafcf2b415943d158378d0e66"
	},
	{
		"id": "5f47a723faff",
		"ts": "2026-10-21T21:11:51.448Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34699237.22,
		"hash": "5f47a723faff18da364677b20b3b1ebf236ca5f8f75b26d960f13a0416e378f8"
	},
	{
		"id": "25d7debcc282",
		"ts": "2026-10-21T21:11:51.707Z",
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
		"liquidityUsd": 1570499.27,
		"hash": "25d7debcc282d99ec7f2022728af47c0c2946d30130feb4cb0418aa08d1cb374"
	},
	{
		"id": "3d958f130810",
		"ts": "2026-10-21T21:11:52.191Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2466439.46,
		"hash": "3d958f13081075bce80989000408c5a0aaf2edc5953beef9cf5eb95cb135d800"
	},
	{
		"id": "073a04ead78d",
		"ts": "2026-10-21T21:11:52.450Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3579933.26,
		"hash": "073a04ead78db125bde449be71dec4050a119d9cc3dc31ff7b42a812c3599e69"
	},
	{
		"id": "33b7c0e7dfa3",
		"ts": "2026-10-21T21:11:52.688Z",
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
		"liquidityUsd": 1414889.88,
		"hash": "33b7c0e7dfa39020bca568f9eeb927a66f1b05dc429f05d2e7335c64ebf93104"
	},
	{
		"id": "7283e2c5fb3a",
		"ts": "2026-10-21T21:11:52.914Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 326721.13,
		"hash": "7283e2c5fb3a14e5ebf0fdf2d6dd7c34c1a5e193c71538ec2582a07690f87016"
	},
	{
		"id": "36ddd61253e6",
		"ts": "2026-10-21T21:11:53.146Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 1827639.4,
		"hash": "36ddd61253e6a8d066d297b0d4774ab95fd7b4496d2cee3f7cc45e2319f55f74"
	},
	{
		"id": "e77eca1c56af",
		"ts": "2026-10-21T21:11:53.372Z",
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
		"liquidityUsd": 18044623.74,
		"hash": "e77eca1c56af5f25ef32b570cc3db94063e2c4febf18da1461c9002476aa416a"
	},
	{
		"id": "0e2dc773dd1e",
		"ts": "2026-10-21T21:11:53.602Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1245754.74,
		"hash": "0e2dc773dd1eef16eade6bc165936a8f778ac9fa797dbdb6278f2feb63b25db2"
	},
	{
		"id": "454295e667cc",
		"ts": "2026-10-21T21:11:53.828Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 67936.2,
		"hash": "454295e667cc57fa2e7d8104fb2be4aacc51e6110e4f5ef02b7a3264cfb8d736"
	},
	{
		"id": "e036166cf71b",
		"ts": "2026-10-21T21:11:54.055Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 16,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.68,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 631267.5,
		"hash": "e036166cf71b884b6a2005e0165cbc03c30bfd71e721fbf66ff0ffab7f3ccf74"
	},
	{
		"id": "9533ac643f12",
		"ts": "2026-10-21T21:11:54.288Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 559619.12,
		"hash": "9533ac643f12b942468f1616b48accb7a9b0916d94581ee729fa0dced4bab027"
	},
	{
		"id": "4af024185c18",
		"ts": "2026-10-21T21:11:54.526Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1384813.35,
		"hash": "4af024185c181e63ca52c62de530ea61defa3fcc3e125ce24d72590a96a8fd6a"
	},
	{
		"id": "9c2cf1ce5d06",
		"ts": "2026-10-21T17:52:40.805Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 158762035.08,
		"hash": "9c2cf1ce5d06a9637b253cbdb0fdf3fed8a4b148e56547b27e2ce9a0de9bd6d5"
	},
	{
		"id": "9aa5b15e5a7c",
		"ts": "2026-10-21T17:52:41.266Z",
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
		"liquidityUsd": 16854012.23,
		"hash": "9aa5b15e5a7cdd421f8381dd8c709304ccf5b93032750a93e7417096b67473b3"
	},
	{
		"id": "831f16db4d40",
		"ts": "2026-10-21T17:52:41.533Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 279603.03,
		"hash": "831f16db4d40a3fd10c1fe550aa68fa600d1aac43ff1d6bebe9ce25e04a23a51"
	},
	{
		"id": "5a59e9268549",
		"ts": "2026-10-21T17:52:41.805Z",
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
		"liquidityUsd": 38142569.42,
		"hash": "5a59e9268549c26a26321f4a2fd912065e68ac58ccc1fe55821fef965b7fc59f"
	},
	{
		"id": "416da9f406de",
		"ts": "2026-10-21T17:52:42.064Z",
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
		"liquidityUsd": 4285496.6,
		"hash": "416da9f406de851c3a0ba5207b8c1ad1fc2143199a9cf36d7e924202db1cd8ba"
	},
	{
		"id": "a9132c4e6f55",
		"ts": "2026-10-21T17:52:42.313Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1211631,
		"hash": "a9132c4e6f55bcd7cda8dd61280cb770640c52645bfc1629581736b3757c213e"
	},
	{
		"id": "c61c390ca138",
		"ts": "2026-10-21T17:52:42.588Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 38142573.71,
		"hash": "c61c390ca13829397f568a514d2cf39015cce6ad5c1192c58a9e8a8761e97093"
	},
	{
		"id": "f48adeaca638",
		"ts": "2026-10-21T17:52:42.841Z",
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
		"liquidityUsd": 1862307.36,
		"hash": "f48adeaca638120435f9ae65bb476824f94e6729d67ee91419e401d676efb224"
	},
	{
		"id": "02ac08fd0ae4",
		"ts": "2026-10-21T17:52:43.111Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2466908.4,
		"hash": "02ac08fd0ae434739672abe7f9ecb93f43ad0f10947629405dff8df002d37e3c"
	},
	{
		"id": "4aebfff48a60",
		"ts": "2026-10-21T17:52:43.424Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"mintable",
			"pausable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1420239.87,
		"hash": "4aebfff48a608d0232abe2154a155a39d698837665dd2cb3fdca3f17a00fbfb4"
	},
	{
		"id": "540e154fc260",
		"ts": "2026-10-21T17:52:43.658Z",
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
		"liquidityUsd": 3637882.9,
		"hash": "540e154fc260f4b758616b01d35842ec906e2877c95accbfcae71388abd79e85"
	},
	{
		"id": "5ad593b0d154",
		"ts": "2026-10-21T17:52:43.890Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 326639.11,
		"hash": "5ad593b0d15491a8e7d19f722fddf07e2e097d6a238f03a056ac0bea074a91bd"
	},
	{
		"id": "151b57d3f79d",
		"ts": "2026-10-21T17:52:44.124Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 1815464.16,
		"hash": "151b57d3f79d7337d7bde781776fe862615d87bf4ece74a0c07a8d6d69e6172f"
	},
	{
		"id": "2cab349ccfa2",
		"ts": "2026-10-21T17:52:44.359Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1978127.73,
		"hash": "2cab349ccfa2525be0d8aca05ce27cd47564ec840690a7d4d2e8b81568f42906"
	},
	{
		"id": "3220a174aad7",
		"ts": "2026-10-21T17:52:44.591Z",
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
		"liquidityUsd": 18144598.18,
		"hash": "3220a174aad7398eea36ec5250e68643526bc7662b85172fdcf744604a093832"
	},
	{
		"id": "a8fde8a4015f",
		"ts": "2026-10-21T17:52:44.826Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1390560.55,
		"hash": "a8fde8a4015f081a2091c9656fa5cb065a7658b9da20f2a59818649d8f2d47f0"
	},
	{
		"id": "76a65d76962d",
		"ts": "2026-10-21T17:52:45.057Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 585893.25,
		"hash": "76a65d76962d9e1fdd34900b1b1197757f0e88ebb0133de67e15d5618b538fd8"
	},
	{
		"id": "bab4748a2cb7",
		"ts": "2026-10-21T17:52:45.393Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 16,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.68,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 635701.24,
		"hash": "bab4748a2cb7c45dad9ca70802df806cc25d54c4256bf317465edb01d0d36a45"
	},
	{
		"id": "303a2aea3e0a",
		"ts": "2026-10-21T17:52:45.625Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1196882.33,
		"hash": "303a2aea3e0a057dcecd866f1e269c6ae76b83e37d2a2e455e6d723388cff9ce"
	},
	{
		"id": "647ab42aa64d",
		"ts": "2026-10-21T12:49:56.945Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 149584220.03,
		"hash": "647ab42aa64d20b7aa947147178a95059cfb2699cacd1e6bf1632c2f236aa6fc"
	},
	{
		"id": "f26dad0e111b",
		"ts": "2026-10-21T12:49:57.319Z",
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
		"liquidityUsd": 18454249.16,
		"hash": "f26dad0e111bd95df9f0ece4eb07686630c08f0a1ac9ee36d135ee3290fcbb4f"
	},
	{
		"id": "fe15e28b7baf",
		"ts": "2026-10-21T12:49:57.551Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 276327.68,
		"hash": "fe15e28b7baf9cf3d8458ba50a3297257669bc4f7d4ac095b99bbb6790a4b195"
	},
	{
		"id": "bb4561e4e197",
		"ts": "2026-10-21T12:49:57.774Z",
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
		"liquidityUsd": 38398085.6,
		"hash": "bb4561e4e1974b5380d7d426ed24f3c0ce642edacbc5f39077a4e9eea142dedc"
	},
	{
		"id": "42f6a756e90a",
		"ts": "2026-10-21T12:49:57.998Z",
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
		"liquidityUsd": 4287014.48,
		"hash": "42f6a756e90a3696f3beccd459187c6858dc3fbf906a8fb613f785fb4e393a16"
	},
	{
		"id": "d08999b02627",
		"ts": "2026-10-21T12:49:58.215Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1189241.06,
		"hash": "d08999b026275fd67ecce85326956dae8631caf76c1d55027cecb4dec6d027e8"
	},
	{
		"id": "6c6666bd0405",
		"ts": "2026-10-21T12:49:58.430Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 38398085.6,
		"hash": "6c6666bd04054c17ea5cd11073ef8e2913b9ff048569615e88c5fb2e17680865"
	},
	{
		"id": "cba756d38322",
		"ts": "2026-10-21T12:49:58.664Z",
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
		"liquidityUsd": 2551408.56,
		"hash": "cba756d3832203a023f2996b1ed0afdeabc0d197ee372a53950612589e7ba5e9"
	},
	{
		"id": "21c2aac0c931",
		"ts": "2026-10-21T12:49:58.899Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2481135.08,
		"hash": "21c2aac0c9319cb2f113061fdeed297f383288af4d61fd6c3cf994a9af73d64d"
	},
	{
		"id": "dfcf865f3526",
		"ts": "2026-10-21T12:49:59.105Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"mintable",
			"pausable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1358523.11,
		"hash": "dfcf865f35265ba8a297ef4859270c95110fbff3190bc1f5813119c27b6e0d53"
	},
	{
		"id": "f6b1ee48f2ae",
		"ts": "2026-10-21T12:49:59.308Z",
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
		"liquidityUsd": 3506316.17,
		"hash": "f6b1ee48f2ae75d6c36e12cb58faa34a6ba32687fbf4fddc6e31bcef2720dee5"
	},
	{
		"id": "f12fe0ea08d1",
		"ts": "2026-10-21T12:49:59.636Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 1807688.79,
		"hash": "f12fe0ea08d17d6c8a8fd365db41413ef3240ec48b42894a8d2a482eb63f7b76"
	},
	{
		"id": "7d85d784fbc7",
		"ts": "2026-10-21T12:49:59.825Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1334932.78,
		"hash": "7d85d784fbc73cd6d7957529f3ffafc07ff2ce7ebfa0f9ecf038b148274e5d29"
	},
	{
		"id": "cbbb58cf7ca9",
		"ts": "2026-10-21T12:50:00.047Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1965201.08,
		"hash": "cbbb58cf7ca90f148a0e962703c651f401eb74513ff63974ba91f89e274767ba"
	},
	{
		"id": "7484648c62ce",
		"ts": "2026-10-21T12:50:00.284Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 348431.06,
		"hash": "7484648c62ce07879dafe5f6004c29f3e2f42fe2d7e7ac6dfa1c13c84b3a24b7"
	},
	{
		"id": "223d5339aef3",
		"ts": "2026-10-21T12:50:00.540Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 579504.85,
		"hash": "223d5339aef3112e76a1ab20e1be834e8c4e3a3fc5a495bd9805c86a8ed867ce"
	},
	{
		"id": "dbf50c216b35",
		"ts": "2026-10-21T12:50:00.766Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 4,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.92,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 653464.07,
		"hash": "dbf50c216b355ed28eb3cbc8b0f2d86ce22253a5456cda4472f2b8c91cab3007"
	},
	{
		"id": "dc356b404f8e",
		"ts": "2026-10-21T12:50:00.985Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 208235.47,
		"hash": "dc356b404f8ee506f017fc838bc6f9ae615541f48e8a00d8014a85a5631bd894"
	},
	{
		"id": "1c5252746e7a",
		"ts": "2026-10-21T12:50:01.242Z",
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
		"liquidityUsd": 18034011.35,
		"hash": "1c5252746e7a88a5358fbc434c7bd67797a21435a5cbd910f32d1fee07d3f325"
	},
	{
		"id": "8b9146beb6a5",
		"ts": "2026-10-21T06:58:56.951Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 148435216.66,
		"hash": "8b9146beb6a559bf85a2bdf2bf8e7e88bb5fed8ad203f3d1d3e7962b7139a473"
	},
	{
		"id": "975f9e926d5a",
		"ts": "2026-10-21T06:58:57.332Z",
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
		"liquidityUsd": 16442842.12,
		"hash": "975f9e926d5a7e7d486eb1da46b5361a76f59372633e67b2b4ad1c5bea229ded"
	},
	{
		"id": "4011d4317c4a",
		"ts": "2026-10-21T06:58:57.562Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 271533.49,
		"hash": "4011d4317c4a039ab9f01d1632ebeb4498b4253d4b37bf398d012d64fe21bc6c"
	},
	{
		"id": "3ee0a1d80ebc",
		"ts": "2026-10-21T06:58:57.779Z",
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
		"liquidityUsd": 38470599.14,
		"hash": "3ee0a1d80ebc740ea3934bfa75baf51c8b14d9db46dee815b05446b714b258e5"
	},
	{
		"id": "d68a856a02ba",
		"ts": "2026-10-21T06:58:57.990Z",
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
		"liquidityUsd": 4689311,
		"hash": "d68a856a02bae420d3842e9022d88e6ae6dc14603ea420cb5615b49a7c3a837b"
	},
	{
		"id": "1783a47c5468",
		"ts": "2026-10-21T06:58:58.227Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1178659.19,
		"hash": "1783a47c546895a168ed21e01c72ed1db35199a4b642828eb22e35274f485b04"
	},
	{
		"id": "aa6b7ebc5eb8",
		"ts": "2026-10-21T06:58:58.461Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 38470599.39,
		"hash": "aa6b7ebc5eb8945e40c096f0de8c9450026bcf8ef0e6a4235e5bad339906bac2"
	},
	{
		"id": "76d28b6261ca",
		"ts": "2026-10-21T06:58:58.718Z",
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
		"liquidityUsd": 2526145.85,
		"hash": "76d28b6261ca899de05976227b783bd1401594224cd018d5265ab7a4185d4c7b"
	},
	{
		"id": "b9af790046a4",
		"ts": "2026-10-21T06:58:58.975Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"mintable",
			"pausable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1418827.88,
		"hash": "b9af790046a49170d2914d98e19c9edf631d08eb6a8b624fc66a263cae161e25"
	},
	{
		"id": "99b7c59eb052",
		"ts": "2026-10-21T06:58:59.235Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 356488.52,
		"hash": "99b7c59eb052e6b779750e45a2b15f865a589ad854b0f1c7705d8f5db781ec77"
	},
	{
		"id": "17916614085c",
		"ts": "2026-10-21T06:58:59.541Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 1858741.51,
		"hash": "17916614085c93301df78285ca8703a646260c9242317a3899f8e81b0f19b1a0"
	},
	{
		"id": "0276e995d414",
		"ts": "2026-10-21T06:58:59.971Z",
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
		"liquidityUsd": 3461523.03,
		"hash": "0276e995d414f09310e832184d778e43e55da54e8b1b771e74682af6fe631a83"
	},
	{
		"id": "51f8ebf2db18",
		"ts": "2026-10-21T06:59:00.218Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1322908.32,
		"hash": "51f8ebf2db18573f5008fd157f42652171069bd2c634a5cef47e8045fc830d12"
	},
	{
		"id": "f59f63133c76",
		"ts": "2026-10-21T06:59:01.088Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1943102.4,
		"hash": "f59f63133c76aae50c58f2b7da3b04e06c15948dcd8149dd8e60a7fb4d2f57f3"
	},
	{
		"id": "39e8b9fff6ae",
		"ts": "2026-10-21T06:59:01.308Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 4,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.92,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 692637.67,
		"hash": "39e8b9fff6aeee9e1d7aa665f4af8ea27df5f629a137aeee450e734e6a9f3f8c"
	},
	{
		"id": "f0c4ade768a9",
		"ts": "2026-10-21T06:59:01.534Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 557667.12,
		"hash": "f0c4ade768a9d6dc971c6cbd2131c2109077e6a00026e4512baae01d3cc0f800"
	},
	{
		"id": "b9078ca7572a",
		"ts": "2026-10-21T06:59:01.837Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 205606.39,
		"hash": "b9078ca7572afca2f7690533533083525f2de177717dbc77ff9804713f3b6ad3"
	},
	{
		"id": "0616acc3d2e3",
		"ts": "2026-10-21T06:59:02.203Z",
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
		"liquidityUsd": 17981161.33,
		"hash": "0616acc3d2e3efef6875dd900c6ee952101fd6b9a1127fa8ffcac30819d910e0"
	},
	{
		"id": "b4e78089df2b",
		"ts": "2026-10-21T06:59:02.411Z",
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
		"liquidityUsd": 4897580.63,
		"hash": "b4e78089df2b310d9da7399f382471e9bb0277ac036e151402ca133b49e842ae"
	},
	{
		"id": "4434c1ed161c",
		"ts": "2026-10-21T01:14:03.503Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 148514266.87,
		"hash": "4434c1ed161cce60591dcc92580cfde8604a223c32c8595d7d7e10b7f3e71518"
	},
	{
		"id": "18df0cec4136",
		"ts": "2026-10-21T01:14:03.974Z",
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
		"liquidityUsd": 16445931.96,
		"hash": "18df0cec4136d91517212e977cb1cc6a2d1c8d1ee04a8840c75d1a1260e2dc79"
	},
	{
		"id": "dff1d335cd39",
		"ts": "2026-10-21T01:14:04.259Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 270935.58,
		"hash": "dff1d335cd3903716b28c0072237a3a3311725ba7ed3eb37d96babf6c7b4256b"
	},
	{
		"id": "1a974d6f6265",
		"ts": "2026-10-21T01:14:04.549Z",
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
		"liquidityUsd": 39681046.48,
		"hash": "1a974d6f6265ddeb6585c9395718c5d4ce8b0dd577dc6f065342b8bcd2a874ea"
	},
	{
		"id": "c40df3fd5f56",
		"ts": "2026-10-21T01:14:04.844Z",
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
		"liquidityUsd": 4742704.23,
		"hash": "c40df3fd5f564105edbc954e6938685c85154dc0819278f5ff62e2d555ae5a79"
	},
	{
		"id": "11d06fe8592f",
		"ts": "2026-10-21T01:14:05.117Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1172936.38,
		"hash": "11d06fe8592f464d596ea7a707d352324e789c9b511b10a352da6eb6bf0476e0"
	},
	{
		"id": "ca9fdb9a79ce",
		"ts": "2026-10-21T01:14:05.395Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 39681051.77,
		"hash": "ca9fdb9a79ce24c51e889351e829f17b6e55f61c7e9ed8f0ecfbdd55efd35169"
	},
	{
		"id": "c4195753d6e2",
		"ts": "2026-10-21T01:14:05.715Z",
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
		"liquidityUsd": 2534079.39,
		"hash": "c4195753d6e26d25ba6241f71031f73500d0dfb5ddc1a5d6055fc11799b43a94"
	},
	{
		"id": "92a2071f6224",
		"ts": "2026-10-21T01:14:06.018Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"mintable",
			"pausable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1440285.44,
		"hash": "92a2071f62241bb258203546aed7ca26d31ed0484b251522763d57639567f52f"
	},
	{
		"id": "7539e99ef4da",
		"ts": "2026-10-21T01:14:06.296Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 378465.51,
		"hash": "7539e99ef4dade45c2092e98c969cc484e78278d2d8a0ab607c90c0a2ecc849d"
	},
	{
		"id": "d6a2d3578df3",
		"ts": "2026-10-21T01:14:06.526Z",
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
		"liquidityUsd": 3416114.44,
		"hash": "d6a2d3578df3655ccb3a191c07eea83fcaba14cce7633716bab5d0a5e608695b"
	},
	{
		"id": "0ec296441699",
		"ts": "2026-10-21T01:14:06.771Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1940723.24,
		"hash": "0ec296441699853a95f4cdafdd84ca6e15a246319dc2d101a46f096ae231f37c"
	},
	{
		"id": "6beac1307522",
		"ts": "2026-10-21T01:14:07.025Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 1819502.99,
		"hash": "6beac1307522ab0c3c2daaa93f35f4e83000365ab34c4071fdeea73f40531534"
	},
	{
		"id": "53fd763e6038",
		"ts": "2026-10-21T01:14:07.262Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1347042.71,
		"hash": "53fd763e6038252e9dcdab7ac0cb2d329acecfe516f5a0855c3081acca34626c"
	},
	{
		"id": "142cdbb42841",
		"ts": "2026-10-21T01:14:07.484Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 16,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.68,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 685798.45,
		"hash": "142cdbb4284195aebedd0105b0abdc2a9a6c597b61106575d1c7a8b2630435ce"
	},
	{
		"id": "2712177f4c46",
		"ts": "2026-10-21T01:14:07.718Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4999035.4,
		"hash": "2712177f4c46941785ff2db5685446d7183aa4168ef8fae1adf710d0789ebd50"
	},
	{
		"id": "5a43b09f0443",
		"ts": "2026-10-21T01:14:07.966Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 195466.17,
		"hash": "5a43b09f044333dd7550278d4a3d30612562f4ef5056793b348576933bc42977"
	},
	{
		"id": "8bd8c2df03c8",
		"ts": "2026-10-21T01:14:08.201Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 209117.09,
		"hash": "8bd8c2df03c804703b3384100b72f19434aafc6ce0d45626d95aba43310d92f8"
	},
	{
		"id": "798df9d7176d",
		"ts": "2026-10-20T22:03:03.549Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 148506970.97,
		"hash": "798df9d7176de932d975e57be781e05f89190e635e04a00b2a538c842010cd28"
	},
	{
		"id": "b1d462d6ce70",
		"ts": "2026-10-20T22:03:03.869Z",
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
		"liquidityUsd": 16434071.08,
		"hash": "b1d462d6ce70621353c85615adae91d6993bb0ab6572ad4f462ce39c56cbfd22"
	},
	{
		"id": "99a4fc6b4629",
		"ts": "2026-10-20T22:03:04.129Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 271069.94,
		"hash": "99a4fc6b4629cd53e31c0a2e560d8b5163718d0926d9f6c6667639f5b1a87e2d"
	},
	{
		"id": "fc22b0311b7f",
		"ts": "2026-10-20T22:03:04.402Z",
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
		"liquidityUsd": 40863574.06,
		"hash": "fc22b0311b7ffea672a1c7280446c9b809e2ccc959dcec19316056d5783ac20f"
	},
	{
		"id": "d5c902ce68e9",
		"ts": "2026-10-20T22:03:04.648Z",
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
		"liquidityUsd": 4744468.67,
		"hash": "d5c902ce68e97ebe2ce7f3c6c4aa7a79fa9327be63dcf9d30a64fe5ab3db64be"
	},
	{
		"id": "23f8688ed32b",
		"ts": "2026-10-20T22:03:04.902Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1170516.91,
		"hash": "23f8688ed32bb66b54b11ed9aae19aac48ff24637ce469c1f8037ba5182d9f27"
	},
	{
		"id": "fff23f632d9f",
		"ts": "2026-10-20T22:03:05.140Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 40863574.06,
		"hash": "fff23f632d9f3ae09b0a11061bbaf5719dd107343d226734e60c8c03a876eb2b"
	},
	{
		"id": "035eb3cb1026",
		"ts": "2026-10-20T22:03:05.384Z",
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
		"liquidityUsd": 2542540.47,
		"hash": "035eb3cb102614f9c64810dfdef1e46398c214c6a535187430622a91f4c7e720"
	},
	{
		"id": "5a9040330b73",
		"ts": "2026-10-20T22:03:05.624Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"mintable",
			"pausable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1460288.6,
		"hash": "5a9040330b7333623c6ae3288b7d26e2ad4fe9bf9e0aef71e4b2f7cad3ad2996"
	},
	{
		"id": "18caef6aa37c",
		"ts": "2026-10-20T22:03:05.882Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 376854.29,
		"hash": "18caef6aa37cc44c24b415fec43ebbe8b8cc40ea0761cc70c554b04992f6c5f1"
	},
	{
		"id": "6baa0b7b8971",
		"ts": "2026-10-20T22:03:06.110Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 1816719.97,
		"hash": "6baa0b7b897171c29fb9d990fb1317006d7ee655ae107298d68406de2e65c152"
	},
	{
		"id": "5ab4a3ebcd10",
		"ts": "2026-10-20T22:03:06.332Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1967890.17,
		"hash": "5ab4a3ebcd10b2aacfbe4aac1c5e71b407c23318dcd97adfa0ed0e6b49b7c165"
	},
	{
		"id": "736ff17222e9",
		"ts": "2026-10-20T22:03:06.583Z",
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
		"liquidityUsd": 3426605.22,
		"hash": "736ff17222e94d62b6832898420a04db639922e28ecc8d2a11cc82f9f34beb61"
	},
	{
		"id": "982344391f5f",
		"ts": "2026-10-20T22:03:06.805Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1348482.67,
		"hash": "982344391f5f5af9d2e37a9113f3df68b4e5684a24db2c183bca5cf2ab9dc5bf"
	},
	{
		"id": "38dc45597b91",
		"ts": "2026-10-20T22:03:07.029Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 16,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.68,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 675893.33,
		"hash": "38dc45597b91442d1894d959c4b026708aee3a2d6c3fd2af97cad5a71006b96b"
	},
	{
		"id": "eb87f414cb66",
		"ts": "2026-10-20T22:03:07.256Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 447316.41,
		"hash": "eb87f414cb66569df5e63510aa1aac56b297bf401f66ebf8f93dba09c2848dd3"
	},
	{
		"id": "711720493521",
		"ts": "2026-10-20T22:03:07.479Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 195577.55,
		"hash": "711720493521f3911b25c4a3c8ab690828235194427e0913182ef37702f7ea5b"
	},
	{
		"id": "a305769e831f",
		"ts": "2026-10-20T22:03:07.705Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4970477.44,
		"hash": "a305769e831f4b7681e6251ec080e9a30327c9f1c04b010348bbb184188c5cf0"
	},
	{
		"id": "cfacd7394a31",
		"ts": "2026-10-20T22:03:07.994Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 201584.35,
		"hash": "cfacd7394a31350407328b8a148006e6c6586c37a241d540c004f21f5738481a"
	},
	{
		"id": "47c1ee9f04fc",
		"ts": "2026-10-20T18:17:36.460Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 148545761.6,
		"hash": "47c1ee9f04fc931cc92f394d1ceee8d27faa6a1ed0cd90b1925a04fb539f4acf"
	},
	{
		"id": "55d9e9563a2a",
		"ts": "2026-10-20T18:17:36.767Z",
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
		"liquidityUsd": 16354335.54,
		"hash": "55d9e9563a2a833c2687daff1c50ebc7cd0fe6cdb95d274fefe5ebbbf8c7735b"
	},
	{
		"id": "bbaaeb0463e4",
		"ts": "2026-10-20T18:17:37.020Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 270222.33,
		"hash": "bbaaeb0463e4e281b804f070a5c0b65c3e0262bca4af8186a340d761ccbcbeb3"
	},
	{
		"id": "f8bf5ef895b0",
		"ts": "2026-10-20T18:17:37.508Z",
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
		"liquidityUsd": 40073105.54,
		"hash": "f8bf5ef895b0c3d84d4a4532f0d4d25604987135c7d77702762a3416cfd1aee4"
	},
	{
		"id": "5b9f1f5fe81b",
		"ts": "2026-10-20T18:17:37.815Z",
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
		"liquidityUsd": 4722802.81,
		"hash": "5b9f1f5fe81b348e0d691f8eb3c62035616d0e686711eead8cb9ff512a49d7d8"
	},
	{
		"id": "6406184d4a3a",
		"ts": "2026-10-20T18:17:38.091Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1163416.18,
		"hash": "6406184d4a3a7b69dd2e258d4b41661ebdb38279f1fa08c75d3521398ecaf454"
	},
	{
		"id": "d0f464e3d99b",
		"ts": "2026-10-20T18:17:38.343Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 40073105.54,
		"hash": "d0f464e3d99bfa1460bb11f2a08460aa4ca70327c7d3b08c267b5a994a545ca5"
	},
	{
		"id": "3903a899ca93",
		"ts": "2026-10-20T18:17:38.585Z",
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
		"liquidityUsd": 2976623.24,
		"hash": "3903a899ca931077c164c54b2b486a85394824270f50439fc0d08afade161920"
	},
	{
		"id": "99d49677d1c0",
		"ts": "2026-10-20T18:17:38.842Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"mintable",
			"pausable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1462937.89,
		"hash": "99d49677d1c0e8ae0e9406a3492e40a25152fe89715ff57089fc997eb5bd20cf"
	},
	{
		"id": "f6e93e40d8a8",
		"ts": "2026-10-20T18:17:39.118Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1816262.97,
		"hash": "f6e93e40d8a89ccf46cd156e8a463397faa8a94a86cbc72448c287fbc5acdbfe"
	},
	{
		"id": "8d6c78f03ffe",
		"ts": "2026-10-20T18:17:39.333Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 372277.74,
		"hash": "8d6c78f03ffec1b25e2c5e0e47fa23870bd3cbac9b25b024aac26e5851fc3e16"
	}
]
