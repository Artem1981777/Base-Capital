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
	"updatedAt": "2026-08-29T19:08:26.817Z",
	"tokensScored": 15480,
	"verdictsIssued": 15480,
	"safe": 13193,
	"risky": 1134,
	"likelyRug": 1153,
	"ticks": 892
}

export const verdicts: AgentVerdict[] = [
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
	},
	{
		"id": "8d752c2027c4",
		"ts": "2026-08-29T19:08:24.324Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1322007.38,
		"hash": "8d752c2027c4b751dcf728a123039c1663e96a0a32c39d8270e45571276571ca"
	},
	{
		"id": "11f54721e677",
		"ts": "2026-08-29T19:08:24.634Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 635525.04,
		"hash": "11f54721e6778f9bfa9c7cd56b4c1f23b20fd6b6f2e79cf14317d8b678a1ab9f"
	},
	{
		"id": "03fa9ebe9201",
		"ts": "2026-08-29T19:08:24.831Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 151498.33,
		"hash": "03fa9ebe92018ee4917cec6a1ed8ce35890cf6d032a62cc5d70a8526acc62d51"
	},
	{
		"id": "2733229f7907",
		"ts": "2026-08-29T19:08:25.028Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1340594.05,
		"hash": "2733229f7907415174bc6bdcecd763830ad7456604fa5d7b7944d6b761e1f6c7"
	},
	{
		"id": "af3adcbc6123",
		"ts": "2026-08-29T19:08:25.232Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 116173.5,
		"hash": "af3adcbc6123494fd9eaf20b15c965d9cd40ab011e75e566e1ebbf6ad797fe87"
	},
	{
		"id": "6261eb4ec175",
		"ts": "2026-08-29T19:08:25.437Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3612743.73,
		"hash": "6261eb4ec175a539f59151723be44a0d4287c624351edac8080e2e71bf21b5cd"
	},
	{
		"id": "196888ad0f54",
		"ts": "2026-08-29T19:08:25.617Z",
		"symbol": "GHST",
		"token": "0xcD2F22236DD9Dfe2356D7C543161D4d260FD9BcB",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 780182.43,
		"hash": "196888ad0f542a7346ab759bde77b00973ab54b6f882830f642e0a3c114527d9"
	},
	{
		"id": "95148ea24491",
		"ts": "2026-08-29T19:08:26.032Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4077469.98,
		"hash": "95148ea24491e44376d340df6ca6a545e9b7f325412e893c2ec2b30188a26341"
	},
	{
		"id": "a30f48fb3507",
		"ts": "2026-08-29T19:08:26.229Z",
		"symbol": "BASELINE",
		"token": "0xb20000000000000000000000c6f9024862C6fb01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 78342.16,
		"hash": "a30f48fb3507f5506ffa6d2df1975aeef199b5140de981c71a60df9eaf5a2ca4"
	},
	{
		"id": "55a4fc984740",
		"ts": "2026-08-29T19:08:26.423Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 368999.32,
		"hash": "55a4fc984740f665e2791b3d4fd183e5fafff6656b3773d90b3e2b2ec8b6d5c3"
	},
	{
		"id": "b5cee84acf15",
		"ts": "2026-08-29T19:08:26.628Z",
		"symbol": "PROMPT",
		"token": "0x30c7235866872213F68cb1F08c37Cb9eCCB93452",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 123013.6,
		"hash": "b5cee84acf1504f6e0bf3ae57ee931c8498cfbd02ae4e104c7a2c9dc978b9e95"
	},
	{
		"id": "a04fa28c20b4",
		"ts": "2026-08-29T19:08:26.817Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1820417.83,
		"hash": "a04fa28c20b47649ce6f59593e88d163225a4ff97ff73e573e6852bfdafddfb3"
	},
	{
		"id": "a1d8dbdc0848",
		"ts": "2026-08-29T15:26:48.291Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115962669.02,
		"hash": "a1d8dbdc084835194a8f052ee2b8dc820866f95706ce343a15847915bef6a3d8"
	},
	{
		"id": "762cad3f9543",
		"ts": "2026-08-29T15:26:48.892Z",
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
		"liquidityUsd": 18006079.96,
		"hash": "762cad3f95430766a98caa6078a17fec03927d78024aec0b9532492cbbdfd520"
	},
	{
		"id": "cd50c386e1c2",
		"ts": "2026-08-29T15:26:49.177Z",
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
		"liquidityUsd": 951856.73,
		"hash": "cd50c386e1c2a2651fe33d7fd4b6231445c9e4245752c2858070240c49da8646"
	},
	{
		"id": "93aa5217b265",
		"ts": "2026-08-29T15:26:49.438Z",
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
		"liquidityUsd": 28968613.49,
		"hash": "93aa5217b26525ae34c46215cb15e9a4e44c16eb08e2adf4314863c20f5b5678"
	},
	{
		"id": "484d90deb289",
		"ts": "2026-08-29T15:26:49.694Z",
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
		"liquidityUsd": 4073910.39,
		"hash": "484d90deb289e39cb043b9b72a96b5ae468ee9f2770573d7f0c1c86fe5e7e1af"
	},
	{
		"id": "f553d9c4d336",
		"ts": "2026-08-29T15:26:49.965Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1159316.84,
		"hash": "f553d9c4d3367063bd4162e179db90a4cf9b0d1d123cc6c1bac74774f8d1983c"
	},
	{
		"id": "bf0db0bea7b8",
		"ts": "2026-08-29T15:26:50.234Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28968613.49,
		"hash": "bf0db0bea7b88f5535803b199ae8b0baf5d90100c16f2134a6b3d6774f83754b"
	},
	{
		"id": "0224f65c801f",
		"ts": "2026-08-29T15:26:50.693Z",
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
		"liquidityUsd": 3922789.7,
		"hash": "0224f65c801fc7e93b88188d46e2241af044cbdd7d231d669fd2e2769ba0ea00"
	},
	{
		"id": "469e5671d2fc",
		"ts": "2026-08-29T15:26:50.960Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1357426.54,
		"hash": "469e5671d2fcf0d261cfe005d4114e293ff3f056242db084b557cf02d09f04af"
	},
	{
		"id": "a0651b1b1b39",
		"ts": "2026-08-29T15:26:51.253Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 634546.09,
		"hash": "a0651b1b1b39153b4c93002cf18b62b3e1685fbb7549e0e1d81cb186f6d5c0bb"
	},
	{
		"id": "4090b51513c0",
		"ts": "2026-08-29T15:26:51.488Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1347993.36,
		"hash": "4090b51513c0f113cd2cb095bcfa2a5125cb9e67dbd7dadb17af08113a7b823f"
	},
	{
		"id": "eda9cedb9bd8",
		"ts": "2026-08-29T15:26:51.723Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 127198.86,
		"hash": "eda9cedb9bd8a9897b2648da113f2a4e22f0e6912c49a519866aa1ebaa8aba2c"
	},
	{
		"id": "4eba982db7d3",
		"ts": "2026-08-29T15:26:51.959Z",
		"symbol": "BASELINE",
		"token": "0xb20000000000000000000000c6f9024862C6fb01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 86810.73,
		"hash": "4eba982db7d3eddb6c07c84c1bbaf801c494333b5cf08a82e14402d82b4addbb"
	},
	{
		"id": "6a285f8f1d2d",
		"ts": "2026-08-29T15:26:52.191Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3567441.91,
		"hash": "6a285f8f1d2dbfba28a5eb7887f08b259afab76d185970b2abdc0617717d54c5"
	},
	{
		"id": "d6407c79c26a",
		"ts": "2026-08-29T15:26:52.424Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 162337.97,
		"hash": "d6407c79c26ade92e8c369bceecbbbe1791d0de58c9f39cdaf80351da448ea2b"
	},
	{
		"id": "18ceaa2064d3",
		"ts": "2026-08-29T15:26:52.658Z",
		"symbol": "GHST",
		"token": "0xcD2F22236DD9Dfe2356D7C543161D4d260FD9BcB",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 836598.71,
		"hash": "18ceaa2064d34e7ff5b476fc9d71f8bd003458ec8c1c9dd01ad556fdc3559eed"
	},
	{
		"id": "41c0a10ddfc1",
		"ts": "2026-08-29T15:26:52.893Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4071497.37,
		"hash": "41c0a10ddfc1ad4241fd8cc127864fa8392b4f6b8d5861b69cbc3bf4c932db38"
	},
	{
		"id": "7d899a8786b3",
		"ts": "2026-08-29T15:26:53.128Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1787425.4,
		"hash": "7d899a8786b3e281c5387d6087526e0f38f08c2fe22ac2094d0765c5c9e8e2bf"
	},
	{
		"id": "2c5d4c142d37",
		"ts": "2026-08-29T15:26:53.362Z",
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
		"liquidityUsd": 887267.29,
		"hash": "2c5d4c142d37839668d1708b225a2a5db59ceb3e838635f48128d2b5f808ba25"
	},
	{
		"id": "a59dbbde49cd",
		"ts": "2026-08-29T15:26:53.596Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 382285.2,
		"hash": "a59dbbde49cdf57f55a967f5d09f373b254d914e114d35c2348e5029dbeb8a1e"
	},
	{
		"id": "9e565235864e",
		"ts": "2026-08-29T10:43:18.172Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115728423.29,
		"hash": "9e565235864e2de7c154a4bd4f103b816eadcafa1f7c53b548d2898a45478f94"
	},
	{
		"id": "7df623e27c8f",
		"ts": "2026-08-29T10:43:18.471Z",
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
		"liquidityUsd": 18780419.21,
		"hash": "7df623e27c8fc4a2148f88acad2020cbcc5813ca5baf0accac6a8053e0366a03"
	},
	{
		"id": "fae56bd9b50b",
		"ts": "2026-08-29T10:43:18.705Z",
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
		"liquidityUsd": 948519.56,
		"hash": "fae56bd9b50bb45c4f29b0e4d0f728ad5ef541ce68f92088b965c9ca791b0d7a"
	},
	{
		"id": "7c01e6573ee8",
		"ts": "2026-08-29T10:43:18.933Z",
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
		"liquidityUsd": 28815505.18,
		"hash": "7c01e6573ee8d09c3d4aad7f79aa7907bfb3eeaa5e762b479d3b6e6223c7f3a4"
	},
	{
		"id": "0e118fde5c24",
		"ts": "2026-08-29T10:43:19.139Z",
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
		"liquidityUsd": 4056491.01,
		"hash": "0e118fde5c24224ab03aad734f2f7bc1a7d437e48bb9f649563c185e31c0e80c"
	},
	{
		"id": "65ab665fb083",
		"ts": "2026-08-29T10:43:19.344Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1148294,
		"hash": "65ab665fb083773501ba0031544405bf66c002c3e2efb51c79382bcab963e985"
	},
	{
		"id": "7b2ef4e044ca",
		"ts": "2026-08-29T10:43:19.561Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28815505.18,
		"hash": "7b2ef4e044cad646891fd69562a2f52d701055a5f3c19cf80987fda2f9cd8ccb"
	},
	{
		"id": "1dd29df9c748",
		"ts": "2026-08-29T10:43:19.880Z",
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
		"liquidityUsd": 1780750.7,
		"hash": "1dd29df9c7480da96656b0b27c0521e044a887f1d3e06b4332523d940b910f8e"
	},
	{
		"id": "d4f9b9a4220c",
		"ts": "2026-08-29T10:43:20.123Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1383407.41,
		"hash": "d4f9b9a4220cc099efa42903e5823c7f6a599b8902650a3a8e755ddd89189913"
	},
	{
		"id": "dd80919c9f34",
		"ts": "2026-08-29T10:43:20.374Z",
		"symbol": "BASELINE",
		"token": "0xb20000000000000000000000c6f9024862C6fb01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 102867.27,
		"hash": "dd80919c9f34e64f5ac16fe9adbda4f1615a436cef60615426620af2cf6c9a20"
	},
	{
		"id": "05c8aa0acfed",
		"ts": "2026-08-29T10:43:20.577Z",
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
		"liquidityUsd": 649921,
		"hash": "05c8aa0acfed690f280b8ddba03149abb0ee832be24081c29026cde99dce6488"
	},
	{
		"id": "2c158ca53696",
		"ts": "2026-08-29T10:43:20.804Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 119190.08,
		"hash": "2c158ca53696eaec6ca1b9faaf25a7aeb32d02979c0cdef54421d77539efdf5b"
	},
	{
		"id": "d4a1f15c1c51",
		"ts": "2026-08-29T10:43:20.997Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3467220.64,
		"hash": "d4a1f15c1c517bbf827d47f9b50ddb6f8529735f19764f00c2e80421c6445f20"
	},
	{
		"id": "75b4fb79b509",
		"ts": "2026-08-29T10:43:21.187Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 156234.98,
		"hash": "75b4fb79b509ad315d358d43c76ad715b8bdf3ae5b5064a4327bd727c8a24754"
	},
	{
		"id": "a1e199881d21",
		"ts": "2026-08-29T10:43:21.377Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4049446.06,
		"hash": "a1e199881d2187ad926c2574d59d4b0346925b9422b7c8b0c6de8d5a73b79600"
	},
	{
		"id": "80f41ffa82a0",
		"ts": "2026-08-29T10:43:21.566Z",
		"symbol": "ElonRWA",
		"token": "0xAa6Cccdce193698D33deb9ffd4be74eAa74c4898",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 579869.74,
		"hash": "80f41ffa82a02850fd297536bf522dbde30accba01a63d634193b38ca42534a5"
	},
	{
		"id": "f64fc5443c87",
		"ts": "2026-08-29T10:43:21.757Z",
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
		"liquidityUsd": 860104.37,
		"hash": "f64fc5443c8755500834f39f9d29c0f85d4ac9225215fa75bf8eafa34d92f5ed"
	},
	{
		"id": "2e41724b2191",
		"ts": "2026-08-29T10:43:21.947Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1338972.82,
		"hash": "2e41724b21917342052787928078297603e44d6d836f228558c48544cc5b9e05"
	},
	{
		"id": "bf377cedbeb7",
		"ts": "2026-08-29T10:43:22.155Z",
		"symbol": "GHST",
		"token": "0xcD2F22236DD9Dfe2356D7C543161D4d260FD9BcB",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 849557.1,
		"hash": "bf377cedbeb7fd4415ae2030efa7e703b650ffb1118943e785c9ebb7e9cc649f"
	},
	{
		"id": "0dc493d1e323",
		"ts": "2026-08-29T10:43:22.360Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1780830.79,
		"hash": "0dc493d1e323fcee3f2a78a1930bc8c4506222abaf75ac39c4253ad92f57859e"
	},
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
	}
]
