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
	"updatedAt": "2026-07-30T15:49:30.467Z",
	"tokensScored": 6419,
	"verdictsIssued": 6419,
	"safe": 5605,
	"risky": 496,
	"likelyRug": 318,
	"ticks": 391
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "ffe9f66a2731",
		"ts": "2026-07-30T15:49:27.624Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112280811.15,
		"hash": "ffe9f66a2731bb328c2d06a1030916172c0934714d55d6597e60ebbfeaae4c45"
	},
	{
		"id": "f1a3db9b3723",
		"ts": "2026-07-30T15:49:27.934Z",
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
		"liquidityUsd": 16965123.13,
		"hash": "f1a3db9b372345536f0715275f6781a5cd495fcd1968ddc10a88ffd6e6d8e01f"
	},
	{
		"id": "b529fcba472a",
		"ts": "2026-07-30T15:49:28.129Z",
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
		"liquidityUsd": 1144225.9,
		"hash": "b529fcba472a6dcd0736dcd6ae98cfbcb868b8be12a114785463e89d6eef8aa1"
	},
	{
		"id": "a52bbdb85f8b",
		"ts": "2026-07-30T15:49:28.320Z",
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
		"liquidityUsd": 25962503.5,
		"hash": "a52bbdb85f8b6e7b73f5fc2a1dc4550ec3eb9c48b130e6053227759c55c53003"
	},
	{
		"id": "1e65a5fdefd0",
		"ts": "2026-07-30T15:49:28.510Z",
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
		"liquidityUsd": 4910205.82,
		"hash": "1e65a5fdefd01d8c48d31df7b51316771f694d9665f275f906c31f12c4a64466"
	},
	{
		"id": "bede0073ab64",
		"ts": "2026-07-30T15:49:28.716Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 909087.25,
		"hash": "bede0073ab64083b497d4fd1b3559d0871e2c4f07f5d5db1ff491ea212fc668e"
	},
	{
		"id": "4b851bdd6f11",
		"ts": "2026-07-30T15:49:28.906Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25962503.5,
		"hash": "4b851bdd6f11c20d3cea3288bf4d4875ae9379f5d3620b3cc33d0c67e34dc3ae"
	},
	{
		"id": "03769e1b63ed",
		"ts": "2026-07-30T15:49:29.111Z",
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
		"liquidityUsd": 2406458.94,
		"hash": "03769e1b63edb60d4df25be871680044cbbf592e6a4d938b2b1a98c21e76077f"
	},
	{
		"id": "6ecd333a313a",
		"ts": "2026-07-30T15:49:29.301Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"modifiable_tax",
			"has_blacklist",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 706892.48,
		"hash": "6ecd333a313a1cdeafcc7d7da326650dc8e183e3c5f36b51aeb24c29dc923b51"
	},
	{
		"id": "b221da6acf1e",
		"ts": "2026-07-30T15:49:29.488Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1790078.55,
		"hash": "b221da6acf1e0e57284878af2e482f4ab058b7d9442cbc7465b5f837659f0ad7"
	},
	{
		"id": "93700acc1464",
		"ts": "2026-07-30T15:49:29.683Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1980426.15,
		"hash": "93700acc1464f2efc01cd1ad5973164c664c7b7976e1c9797fc7a6c9dfe6a76c"
	},
	{
		"id": "97224648de32",
		"ts": "2026-07-30T15:49:29.885Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7633256.96,
		"hash": "97224648de32cb7ef0c079e1216745cd1d7d1f839a5a9d564fb8641351fd9a45"
	},
	{
		"id": "588fb5c43a3a",
		"ts": "2026-07-30T15:49:30.083Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4570239.43,
		"hash": "588fb5c43a3a8285b9391725b4b5dafcd14b5cee92233aaf5571baf6c6b40f48"
	},
	{
		"id": "c4d7d38ddb08",
		"ts": "2026-07-30T15:49:30.279Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 744095.97,
		"hash": "c4d7d38ddb081ee218ff9d63bc9fd591879a9b0a960759bbd2295a2f78a43cbf"
	},
	{
		"id": "877ac1dcaafa",
		"ts": "2026-07-30T15:49:30.467Z",
		"symbol": "msETH",
		"token": "0x7Ba6F01772924a82D9626c126347A28299E98c98",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 17371134.61,
		"hash": "877ac1dcaafa2a0d601fbc3b9d56976bd1d22eb6871924c3b6a5e0c569b064a8"
	},
	{
		"id": "a525c0ddcc65",
		"ts": "2026-07-30T13:50:31.466Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112550716.58,
		"hash": "a525c0ddcc65155445e2e074328e4dc7960c6fdcf49978c65d0f859cfcf2ba7c"
	},
	{
		"id": "d40d6be5b9ee",
		"ts": "2026-07-30T13:50:31.912Z",
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
		"liquidityUsd": 14660314.61,
		"hash": "d40d6be5b9ee3551a6f0a4112f855388db8b056c92f548d718351b1d2f625357"
	},
	{
		"id": "499f0fe72e5a",
		"ts": "2026-07-30T13:50:32.163Z",
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
		"liquidityUsd": 1150043.01,
		"hash": "499f0fe72e5a20b8d3eac40f1d0745b969f43ca62a55ebaf54c14b07f5f784d0"
	},
	{
		"id": "120e5420e182",
		"ts": "2026-07-30T13:50:32.405Z",
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
		"liquidityUsd": 26070681.35,
		"hash": "120e5420e182bf3e27e013cca44ea4a6e297717e7e1bdab33a7d59e22233aa10"
	},
	{
		"id": "983a24ea1207",
		"ts": "2026-07-30T13:50:32.642Z",
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
		"liquidityUsd": 4946183.39,
		"hash": "983a24ea1207affdc068f3497725eabd3d781139cffbd31558b6080dd7454aa7"
	},
	{
		"id": "96a132dfd544",
		"ts": "2026-07-30T13:50:32.883Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 911816.31,
		"hash": "96a132dfd5447c0c7b2eb61cb33521b2ce2e490bb121f2e48e2dbfba40743f49"
	},
	{
		"id": "fc8c5a9e2b0d",
		"ts": "2026-07-30T13:50:33.148Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26070682.72,
		"hash": "fc8c5a9e2b0dd2e8f9774a31d8ddb574c7c8188903bb3e235621bf6aa578c683"
	},
	{
		"id": "88c63bd907e0",
		"ts": "2026-07-30T13:50:33.393Z",
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
		"liquidityUsd": 2463046.46,
		"hash": "88c63bd907e0e74e3cdd1974b09e84cbb879e19bafd118f68500d2c7c977465f"
	},
	{
		"id": "b023bc73700b",
		"ts": "2026-07-30T13:50:33.625Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1791109.62,
		"hash": "b023bc73700b1a988871174f60076a0e785119425ea81c561fcea699995c8671"
	},
	{
		"id": "7cd6df20398e",
		"ts": "2026-07-30T13:50:33.863Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1985813.67,
		"hash": "7cd6df20398e7c403c205ee66d206a1db3f7628bedc4aa3b12a99d2de6188dcf"
	},
	{
		"id": "16bc8bb50e98",
		"ts": "2026-07-30T13:50:34.089Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 554162.84,
		"hash": "16bc8bb50e98dc585950325f645b32f94a7999da9d76962f49394130737626b8"
	},
	{
		"id": "50b0731d3c92",
		"ts": "2026-07-30T13:50:34.306Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8354765.45,
		"hash": "50b0731d3c922ce3c4a8b198098299159da7d1d218b1c4791982fe43ee06ce53"
	},
	{
		"id": "7a137d63c409",
		"ts": "2026-07-30T13:50:34.523Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4607221.99,
		"hash": "7a137d63c409685c8b151e339748c06e0d826150ef957f42e69a78ac8bec6e14"
	},
	{
		"id": "94425154ac6e",
		"ts": "2026-07-30T13:50:34.741Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 742970.97,
		"hash": "94425154ac6ec1ed4ad1d643ee75f4c6ab8745ecc48f89e0e31fb384e9af3dbb"
	},
	{
		"id": "37aee912e4ba",
		"ts": "2026-07-30T13:50:34.965Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3025663.3,
		"hash": "37aee912e4ba72350df04eed167e2b2e80199159c66abccc81dc60a9aec0ed24"
	},
	{
		"id": "2add67013c7a",
		"ts": "2026-07-30T11:49:05.738Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112317273.78,
		"hash": "2add67013c7a0171629be2d7884d52f0e584124e61af89de1bfe8fbec9e6e867"
	},
	{
		"id": "66ba0d1a8fb5",
		"ts": "2026-07-30T11:49:06.437Z",
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
		"liquidityUsd": 14503852.43,
		"hash": "66ba0d1a8fb58394770bb61e6709e5b181b87e4e81b5fd95867343dff5f0017d"
	},
	{
		"id": "5e689feb4fd5",
		"ts": "2026-07-30T11:49:06.891Z",
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
		"liquidityUsd": 1145897.39,
		"hash": "5e689feb4fd571e411f48b3f2559c437dc2fbac54c71c7e5c5ce1c22d2e9c846"
	},
	{
		"id": "ef7394998c06",
		"ts": "2026-07-30T11:49:07.343Z",
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
		"liquidityUsd": 26134486.18,
		"hash": "ef7394998c06fbf032f81c0f009d996744d87c9bb2831a6d19c7ae124f60463c"
	},
	{
		"id": "5715bdd6983e",
		"ts": "2026-07-30T11:49:07.786Z",
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
		"liquidityUsd": 4930184.43,
		"hash": "5715bdd6983e0374ac159ffb3b4fe9f22917267a092c582d1fe20b5a26db4d55"
	},
	{
		"id": "5e55156ac028",
		"ts": "2026-07-30T11:49:08.026Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 911816.31,
		"hash": "5e55156ac0287638259d703240b08ffd0859d4eefa22a5106d6e20f67bcc654f"
	},
	{
		"id": "419739c5363c",
		"ts": "2026-07-30T11:49:08.299Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26134486.18,
		"hash": "419739c5363cfd241115459efb07935e9354cbda3087196b1320e645d78ca2be"
	},
	{
		"id": "c34361e03c73",
		"ts": "2026-07-30T11:49:08.741Z",
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
		"liquidityUsd": 3347460.7,
		"hash": "c34361e03c7302163782e120761db69249d1aed8dc679141784a25e2d579ce29"
	},
	{
		"id": "343cb21d9840",
		"ts": "2026-07-30T11:49:09.190Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1803121.55,
		"hash": "343cb21d9840b9a77174afe9796be6737b5fed909a25707373ea41cf5cfe99c6"
	},
	{
		"id": "5afba28bc61b",
		"ts": "2026-07-30T11:49:09.425Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1967494.06,
		"hash": "5afba28bc61b7655fcb8063abbd055dcb48ab24f0d8f27f5bc7612361b9331b8"
	},
	{
		"id": "1233c92a1893",
		"ts": "2026-07-30T11:49:09.652Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 547706.84,
		"hash": "1233c92a1893a361ccae52a3a46c6a3001ed0c61b609b77ef1d71f56edd361e1"
	},
	{
		"id": "7c7c3181270c",
		"ts": "2026-07-30T11:49:09.871Z",
		"symbol": "Totem",
		"token": "0x0F8ac22B85076F9BfE0b93Cc49FB6426CB150F88",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 85565.19,
		"hash": "7c7c3181270c43a1599967c0e96469e9587e1cc8aa46d8841d1e7161d95b0d84"
	},
	{
		"id": "ef8262f71ef6",
		"ts": "2026-07-30T11:49:10.091Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8713355.53,
		"hash": "ef8262f71ef6c1c9c32dc513c6d4c127009271c4b7ea864cc7ee32f85991ddf3"
	},
	{
		"id": "a2ffa3885864",
		"ts": "2026-07-30T11:49:10.313Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 644102.61,
		"hash": "a2ffa3885864a47cddc6c361bae9f814ba77862e3259ed19a1fc9d6e9a0224ea"
	},
	{
		"id": "dfcd94512092",
		"ts": "2026-07-30T11:49:10.531Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4604421.79,
		"hash": "dfcd945120927fc8cf426e2e2153098e83cede87612c723dc05272e971efb9c7"
	},
	{
		"id": "7e54db1161a2",
		"ts": "2026-07-30T11:49:10.756Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 758493.85,
		"hash": "7e54db1161a2dea73f1ea98ac60b42b7b9031773a860bdbdc8168c64cb0c2e32"
	},
	{
		"id": "102c8a5e0172",
		"ts": "2026-07-30T09:27:58.306Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112082388.63,
		"hash": "102c8a5e0172adc8eb499864da0053e056904f6f511b0151ebb2d64ccf94a0d9"
	},
	{
		"id": "233502f8ae91",
		"ts": "2026-07-30T09:27:58.632Z",
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
		"liquidityUsd": 15237797.27,
		"hash": "233502f8ae91b2612c39e11dc6f66d9cdc3d900ca61199de553e99795d00054c"
	},
	{
		"id": "df30e6cbdba0",
		"ts": "2026-07-30T09:27:58.822Z",
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
		"liquidityUsd": 1148431.3,
		"hash": "df30e6cbdba00c249170e65cdfe12f8babeb78c35061662d4b130a843ca8367f"
	},
	{
		"id": "ec2130d6215f",
		"ts": "2026-07-30T09:27:59.009Z",
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
		"liquidityUsd": 26044326.26,
		"hash": "ec2130d6215ff3873e5cb536267300e78b667e31dae3c3fa7a70e80f33a821fe"
	},
	{
		"id": "b752b538d961",
		"ts": "2026-07-30T09:27:59.198Z",
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
		"liquidityUsd": 4874496.13,
		"hash": "b752b538d9615c9b7698da92ea9876d9e96a3f31b9ff32eb32eca68d7d5a0700"
	},
	{
		"id": "d9d9bd241be7",
		"ts": "2026-07-30T09:27:59.397Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 909838.64,
		"hash": "d9d9bd241be761abc64414e550bd9a34c0818b68c1fb33d1c5887f0fc37ea80e"
	},
	{
		"id": "40d5afd495d9",
		"ts": "2026-07-30T09:27:59.590Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26044326.26,
		"hash": "40d5afd495d95dc8164dee591f630c136bd2ca6773b34d0fcb34bb1e9b6d84b4"
	},
	{
		"id": "15193eec9ad4",
		"ts": "2026-07-30T09:27:59.779Z",
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
		"liquidityUsd": 2445383.73,
		"hash": "15193eec9ad40e2700778517496586fdd11d329e676d596e5e259ba0444977c5"
	},
	{
		"id": "457875c533af",
		"ts": "2026-07-30T09:27:59.971Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1799160.42,
		"hash": "457875c533af1438666e91f703aa57fdc2309245e78d7eeb3d0ef0f25aa04cd7"
	},
	{
		"id": "c76a7d22bc0f",
		"ts": "2026-07-30T09:28:00.168Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 643804.31,
		"hash": "c76a7d22bc0f3332d16d7cfcfc19fc428954dbf36e6442c4816637f3afdb06dd"
	},
	{
		"id": "e3dcec2a4fdd",
		"ts": "2026-07-30T09:28:00.358Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1939518.64,
		"hash": "e3dcec2a4fddefffc40c984883f4e83f89416a01785c5f3b7d7a7ad5939cb2d3"
	},
	{
		"id": "3419f2fdc3b3",
		"ts": "2026-07-30T09:28:00.547Z",
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
		"liquidityUsd": 744556.56,
		"hash": "3419f2fdc3b32858f664202e9518b9779ed7ddba9ae2410c788b5bacd38a5350"
	},
	{
		"id": "3a32ec8bf054",
		"ts": "2026-07-30T09:28:00.806Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"modifiable_tax",
			"has_blacklist",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 544308.07,
		"hash": "3a32ec8bf0540789b46a9e237f39dc5722f886a9f5ca4129d715b158f0d3bdca"
	},
	{
		"id": "340f3d6e6679",
		"ts": "2026-07-30T09:28:01.014Z",
		"symbol": "Totem",
		"token": "0x0F8ac22B85076F9BfE0b93Cc49FB6426CB150F88",
		"score": 82,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.64,
		"flags": [
			"modifiable_tax",
			"external_call"
		],
		"liquidityUsd": 85382.75,
		"hash": "340f3d6e6679d6109a6eb40ea029f7e6d015d752147f49a38331e6f9c7303eb9"
	},
	{
		"id": "d2fb79419f63",
		"ts": "2026-07-30T09:28:01.204Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 7788052.69,
		"hash": "d2fb79419f6329c98379bc831e4e76588ba8bd9077f9d89c927d8d5a94c29fbb"
	},
	{
		"id": "9076c620ac8f",
		"ts": "2026-07-30T06:24:05.767Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111712456,
		"hash": "9076c620ac8fe367ca96236342191242657232f3d4491e1732fcfbada813a701"
	},
	{
		"id": "ec2e541aa7a9",
		"ts": "2026-07-30T06:24:06.534Z",
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
		"liquidityUsd": 15244476.4,
		"hash": "ec2e541aa7a9557231f9a83d25b928b531283ce61aac772e5770635bdd3a1d50"
	},
	{
		"id": "21426bc1e2cb",
		"ts": "2026-07-30T06:24:07.014Z",
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
		"liquidityUsd": 1144058.04,
		"hash": "21426bc1e2cb7c26d7afa706b1f19b3cb1e2baeae5711e934500746f7e92712a"
	},
	{
		"id": "617104f4916e",
		"ts": "2026-07-30T06:24:07.466Z",
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
		"liquidityUsd": 25747483.65,
		"hash": "617104f4916e4335dd02b9c8c55acacc01d93df1aaf5d83957b19b9ef92245af"
	},
	{
		"id": "f8a9784edbc9",
		"ts": "2026-07-30T06:24:07.914Z",
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
		"liquidityUsd": 4876110.65,
		"hash": "f8a9784edbc9e1748deb10f2a51cd3442d855c8569c8cb739f84f96e78b2850b"
	},
	{
		"id": "bc5e19a2b896",
		"ts": "2026-07-30T06:24:08.159Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 897452.12,
		"hash": "bc5e19a2b896189787075cb7e9ad91944d0cce4c653d5d70a5acb2a6ddc9f45b"
	},
	{
		"id": "094b6cc985e6",
		"ts": "2026-07-30T06:24:08.385Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25747483.93,
		"hash": "094b6cc985e6a5201b33b96af89aa6cac05771ab49f8a46fb2f8eddf9add478c"
	},
	{
		"id": "39f5bb24bed6",
		"ts": "2026-07-30T06:24:08.818Z",
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
		"liquidityUsd": 2423809.21,
		"hash": "39f5bb24bed6fa0024417e4e05874172ba0f44660a034f140e51cb33099f4d24"
	},
	{
		"id": "00ee412f0806",
		"ts": "2026-07-30T06:24:09.045Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 639889.72,
		"hash": "00ee412f0806db9cfb1b74893b8032eeafa889294a7120537e94caae4a71f00c"
	},
	{
		"id": "88d7aea5cfe8",
		"ts": "2026-07-30T06:24:09.296Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1923635.95,
		"hash": "88d7aea5cfe81d7eb041cd8ab8bb1300b17355b24082fd9e98f64f515936a460"
	},
	{
		"id": "442ca1d87225",
		"ts": "2026-07-30T06:24:09.518Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 775323.06,
		"hash": "442ca1d87225cb2fca562612b891928b8c4f6e9342021c509868d621e06d6991"
	},
	{
		"id": "1b75c72acd17",
		"ts": "2026-07-30T06:24:09.740Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1795665.68,
		"hash": "1b75c72acd17631202911e1c66c05245644a60afd74728ed43ff2abbbc04621b"
	},
	{
		"id": "3746e3963958",
		"ts": "2026-07-30T06:24:09.983Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 497061.62,
		"hash": "3746e3963958a3c84c9429f808d7ffea994c9ba7cb94abd7f6dd2939f48dfab3"
	},
	{
		"id": "1bbffbd4c609",
		"ts": "2026-07-30T06:24:10.227Z",
		"symbol": "Totem",
		"token": "0x0F8ac22B85076F9BfE0b93Cc49FB6426CB150F88",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 85446.92,
		"hash": "1bbffbd4c6094f638ef0bc4ddcc17513107b577584f19e263e3461bbb1d05592"
	},
	{
		"id": "3a02926e82fe",
		"ts": "2026-07-30T06:24:10.456Z",
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
		"liquidityUsd": 1306051.15,
		"hash": "3a02926e82fe3f543c8ea69af1b6b05d71f8a5aafefd8c6135fb81c96c46abf7"
	},
	{
		"id": "bf0869339cca",
		"ts": "2026-07-30T06:24:10.677Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4424989.9,
		"hash": "bf0869339cca26a500e46de7792055ee7044a48e8c8dfef3c67a34a0e079a004"
	},
	{
		"id": "036322bcb8a2",
		"ts": "2026-07-30T03:54:01.129Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111842126.41,
		"hash": "036322bcb8a248b5dacc287d5363593793f70a4805a80d50719173d288876bb7"
	},
	{
		"id": "dad81ab264bf",
		"ts": "2026-07-30T03:54:01.575Z",
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
		"liquidityUsd": 15784323.71,
		"hash": "dad81ab264bf39492bcfaaaa7be24fb02ce51e2f17f8961fb88ea877b4e358e2"
	},
	{
		"id": "dd304b5bf361",
		"ts": "2026-07-30T03:54:01.830Z",
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
		"liquidityUsd": 1127792.96,
		"hash": "dd304b5bf36124a8b1ca228db8a310e5260ba8b4a412af5796119ca392e8f8bc"
	},
	{
		"id": "9ec0cd7de69a",
		"ts": "2026-07-30T03:54:02.296Z",
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
		"liquidityUsd": 25629290.87,
		"hash": "9ec0cd7de69a3b1dc9c455a4eec11cd0e2d91ebbaecef5985d53d40cf9cf19ef"
	},
	{
		"id": "703c2516b40f",
		"ts": "2026-07-30T03:54:02.542Z",
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
		"liquidityUsd": 4876110.65,
		"hash": "703c2516b40faf0671747437dab68fd6e1a72ce9f0a57fca16e1a93d4fc29835"
	},
	{
		"id": "36ebeb00cccb",
		"ts": "2026-07-30T03:54:02.775Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 919556.08,
		"hash": "36ebeb00cccb87804ed9af6a13574288f606e438e10dcf6e1283ea873038de80"
	},
	{
		"id": "b1aba7dc06a9",
		"ts": "2026-07-30T03:54:03.007Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25629290.87,
		"hash": "b1aba7dc06a9f9a03e833da5cacd0d73a61ee295720fc0ef23f98b076675f12b"
	},
	{
		"id": "37f3d24cda0f",
		"ts": "2026-07-30T03:54:03.291Z",
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
		"liquidityUsd": 2438833,
		"hash": "37f3d24cda0fa274ed549c5768cd97f78ac3bdf5d374614511740c570fa390db"
	},
	{
		"id": "42355664b1ca",
		"ts": "2026-07-30T03:54:03.530Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1928319.57,
		"hash": "42355664b1ca9675e81b6b1f8b049f777848bfe1c90ec6a45f833d4b17fde01c"
	},
	{
		"id": "542d2c6d394b",
		"ts": "2026-07-30T03:54:03.777Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 641628.49,
		"hash": "542d2c6d394bef5ed27fa01728a0a115169450141857bec7b516d70984048b28"
	},
	{
		"id": "85ae0d6603f0",
		"ts": "2026-07-30T03:54:04.003Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1798139.49,
		"hash": "85ae0d6603f0bff778c05f7b49f31e58c9d2a4fdaaa97886c29630292abb2403"
	},
	{
		"id": "39f5670f6dae",
		"ts": "2026-07-30T03:54:04.223Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 702486.53,
		"hash": "39f5670f6dae11334460bf723673e462d4f9bfb2b93e00bbac8eab6c28f35e9d"
	},
	{
		"id": "6c0b2b93a806",
		"ts": "2026-07-30T03:54:04.443Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4435176.49,
		"hash": "6c0b2b93a806a4e9055618aa5525b9e5d9fa69e1a55f3b15f83e2fbfa683bcaa"
	},
	{
		"id": "a922ddcd1a2d",
		"ts": "2026-07-30T03:54:04.664Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 463719.87,
		"hash": "a922ddcd1a2d1149e721c3c76866e6b8e9d55cc6bef29d041b3a7d601ded3ba4"
	},
	{
		"id": "f2da82f77377",
		"ts": "2026-07-30T03:54:04.893Z",
		"symbol": "Totem",
		"token": "0x0F8ac22B85076F9BfE0b93Cc49FB6426CB150F88",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 86478.14,
		"hash": "f2da82f7737724240ec180983b3c69aede350660d4cb1617692e1447279b3026"
	},
	{
		"id": "4b272f8005e8",
		"ts": "2026-07-30T03:54:05.123Z",
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
		"liquidityUsd": 1300513.71,
		"hash": "4b272f8005e8ce41c54b077fc700e00b28298ffea40a6e74d76adc7517dacfd8"
	},
	{
		"id": "ad8d43d8dbf4",
		"ts": "2026-07-30T00:05:41.079Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111832965.78,
		"hash": "ad8d43d8dbf4d842695dff2808f40e8a75172cd8adb68f3433260215b41a4446"
	},
	{
		"id": "696217f6c483",
		"ts": "2026-07-30T00:05:41.552Z",
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
		"liquidityUsd": 15773294.22,
		"hash": "696217f6c483c2ad15df4fd60b88b805b47342062f7e6d2bb2a29e34cbb09817"
	},
	{
		"id": "b0e9c88ed1a8",
		"ts": "2026-07-30T00:05:41.800Z",
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
		"liquidityUsd": 1105725.29,
		"hash": "b0e9c88ed1a8ff03e279860bab01ac37eb3d4d92261518a490c5a5027186219f"
	},
	{
		"id": "43b819a07663",
		"ts": "2026-07-30T00:05:42.040Z",
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
		"liquidityUsd": 25236659.54,
		"hash": "43b819a07663ac848536258e87dce53f869764b7a5454dfc3621129cde37cd9f"
	},
	{
		"id": "5da676f6c57a",
		"ts": "2026-07-30T00:05:42.278Z",
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
		"liquidityUsd": 4911588.58,
		"hash": "5da676f6c57a7ce10f6303edfe7f9006f6dfbd897aa1c06e90af23f727ced8b1"
	},
	{
		"id": "1305ce44eef2",
		"ts": "2026-07-30T00:05:42.521Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 908892.61,
		"hash": "1305ce44eef292c03518f865f17263a3e7409eaf29be0dab79e4f07def642a82"
	},
	{
		"id": "db011fe04019",
		"ts": "2026-07-30T00:05:42.761Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25236659.54,
		"hash": "db011fe0401951647dccc7dc28005184cc00542db629c34f826d1a717d559a1c"
	},
	{
		"id": "c0420beef9ff",
		"ts": "2026-07-30T00:05:42.997Z",
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
		"liquidityUsd": 2423852.36,
		"hash": "c0420beef9ff87f4f6e58bd801338bb3ec36caf372f3ffcb87a74b6c5c6bf272"
	},
	{
		"id": "74aeea368414",
		"ts": "2026-07-30T00:05:43.257Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1816176.34,
		"hash": "74aeea36841439e87afbda1c46cd7e8043dc1abd184124a6c8f3545c082fcce3"
	},
	{
		"id": "b0ce36cb4f01",
		"ts": "2026-07-30T00:05:43.499Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 641061.49,
		"hash": "b0ce36cb4f013bfe8958565ada18eac27751c3327c1f23e2a3787685d7a8dde5"
	},
	{
		"id": "0f78346bbbb6",
		"ts": "2026-07-30T00:05:43.716Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1924654.84,
		"hash": "0f78346bbbb6aa4c5f13cf22c348ed4d7e845668debeace89bd726ff31481ea3"
	},
	{
		"id": "178aea4adffa",
		"ts": "2026-07-30T00:05:43.936Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 698948.59,
		"hash": "178aea4adffa6c435e6d5a4b8ca1906362d8dd3e456b5493b253f115b8c5aa03"
	},
	{
		"id": "a4b7d2432a51",
		"ts": "2026-07-30T00:05:44.151Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 464777.69,
		"hash": "a4b7d2432a51fba84c0e8fce0d3e2b7acf2d6e51e870ae30724c4b396e163674"
	},
	{
		"id": "4d7a9e78dae9",
		"ts": "2026-07-30T00:05:44.373Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4401184.15,
		"hash": "4d7a9e78dae975cf1296f1563a7ab8687052270fd08c567df000226bab34bcb8"
	},
	{
		"id": "2ef48e8ceb5d",
		"ts": "2026-07-30T00:05:44.591Z",
		"symbol": "Totem",
		"token": "0x0F8ac22B85076F9BfE0b93Cc49FB6426CB150F88",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 86258.13,
		"hash": "2ef48e8ceb5d5ca04fd6b32861d8705be099c72a94dd678344e38a7ae6c73926"
	},
	{
		"id": "101837cae90f",
		"ts": "2026-07-30T00:05:44.812Z",
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
		"liquidityUsd": 1300274.73,
		"hash": "101837cae90f9c94c49db768b2add790f21739cdf33ef3392e4851c600457267"
	},
	{
		"id": "dae1d4c2222e",
		"ts": "2026-07-30T00:05:45.028Z",
		"symbol": "PIPEDOG",
		"token": "0xde2b3D68B593C1c9e0Cb6E55Cbf289CdF5a5CB07",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "dae1d4c2222ef614acded821a6dc81d972e9c50e26ee5c21fde36584f2af6132"
	},
	{
		"id": "827e2f82f910",
		"ts": "2026-07-29T22:59:45.042Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111552509.13,
		"hash": "827e2f82f91065e66fd73d8de518e7a3911325c355715f13a41a88285e3b7a54"
	},
	{
		"id": "246bc46a4166",
		"ts": "2026-07-29T22:59:45.486Z",
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
		"liquidityUsd": 14792034.67,
		"hash": "246bc46a416680bf3e4f5b8605af151a2aa02f6b5b37f58189dea16a38a3ef0f"
	},
	{
		"id": "e5917ee22649",
		"ts": "2026-07-29T22:59:45.955Z",
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
		"liquidityUsd": 1112941.99,
		"hash": "e5917ee22649b0b8b37cbcb5c04b46db1210425bce756b42e9d9303554c94d39"
	},
	{
		"id": "2848612eebc3",
		"ts": "2026-07-29T22:59:46.229Z",
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
		"liquidityUsd": 25435959.45,
		"hash": "2848612eebc3defe3ba1511a91fd623eeb84c30e21fec8e73af76ed9ed4ce1cd"
	},
	{
		"id": "7e69dd9c9029",
		"ts": "2026-07-29T22:59:46.471Z",
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
		"liquidityUsd": 4903440.02,
		"hash": "7e69dd9c9029ed5b27db37e6f827c272cca31eb247c2b01348a6bdfcc09daf99"
	},
	{
		"id": "66e75e077f94",
		"ts": "2026-07-29T22:59:46.709Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 903565.58,
		"hash": "66e75e077f94a3f776edca9dd2eb79e14656339e21daf945678aaa45bea5899e"
	},
	{
		"id": "f31f38920572",
		"ts": "2026-07-29T22:59:46.949Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25435959.45,
		"hash": "f31f389205723a2cc4aed55cc9b6cba1b3f5316d4d1b8cf164e0fc2eadd9f659"
	},
	{
		"id": "9bd56566c94f",
		"ts": "2026-07-29T22:59:47.200Z",
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
		"liquidityUsd": 2420910.21,
		"hash": "9bd56566c94f3e8261163deef6b150d61b8c44006906e27d2f48a0e466d11899"
	},
	{
		"id": "fc67d8068bd7",
		"ts": "2026-07-29T22:59:47.436Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1828425.45,
		"hash": "fc67d8068bd777d842878f6b45322e49ef331c11b7f0919faf083b48eca59c2d"
	},
	{
		"id": "00a98cf8b9e9",
		"ts": "2026-07-29T22:59:47.675Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1922588.88,
		"hash": "00a98cf8b9e93f8eaf121bc8235108b15905e4bfacfc4e56103b6b0459f3a751"
	},
	{
		"id": "784dd6445f0f",
		"ts": "2026-07-29T22:59:47.900Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 640099.37,
		"hash": "784dd6445f0fb41f9f7aa0ae04c56d42be0139e4954522ee52bd8324abb165d5"
	},
	{
		"id": "448c2f455eb8",
		"ts": "2026-07-29T22:59:48.122Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 702261.78,
		"hash": "448c2f455eb8d9524a1dbad21726ef5b7d202e3780f7dd68ed9015224161e8c5"
	},
	{
		"id": "11558c8be618",
		"ts": "2026-07-29T22:59:48.345Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4395705.34,
		"hash": "11558c8be6181bded5a4b8fd686ffc39973e3d8dcbb02af011bdc601287c4cbd"
	},
	{
		"id": "11155163c65e",
		"ts": "2026-07-29T22:59:48.569Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 417695.95,
		"hash": "11155163c65ecd10fda666425142f0f672965593aca9ba1e25a04317d435cbfb"
	},
	{
		"id": "e4b584e42276",
		"ts": "2026-07-29T22:59:48.791Z",
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
		"liquidityUsd": 1313979.54,
		"hash": "e4b584e4227652b041997c191bc75f0d0cccba940499b90a57329a73ca3df205"
	},
	{
		"id": "4d5440e633a8",
		"ts": "2026-07-29T22:59:49.014Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 527370.75,
		"hash": "4d5440e633a8760d64bdc581b624d7ac3a6d7eb1a1431299811f9c0d546dd146"
	},
	{
		"id": "0d06d7f1dc92",
		"ts": "2026-07-29T21:57:23.980Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111002692.43,
		"hash": "0d06d7f1dc92f4872edf3a21f43365457f6d678fe1cdf6c94d68b1b3ea8ab30f"
	},
	{
		"id": "2075a4143086",
		"ts": "2026-07-29T21:57:24.522Z",
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
		"liquidityUsd": 16863926.16,
		"hash": "2075a41430866dc185a17e8e3cd452b7ec7162ec4b83d502541222f8ceea3810"
	},
	{
		"id": "f6bea9a1fc88",
		"ts": "2026-07-29T21:57:24.894Z",
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
		"liquidityUsd": 1112741.08,
		"hash": "f6bea9a1fc883647266054a2085fdfdaac9f48ae2d1734f8770bc727efb26ff6"
	},
	{
		"id": "1c9a0d95b7aa",
		"ts": "2026-07-29T21:57:25.273Z",
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
		"liquidityUsd": 25262940.51,
		"hash": "1c9a0d95b7aa1f25874ace3739a0919cb6b8b7126064fcbe77f8dae4a814380e"
	},
	{
		"id": "2412860af47f",
		"ts": "2026-07-29T21:57:25.645Z",
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
		"liquidityUsd": 4843623.73,
		"hash": "2412860af47feabb9c6d0298ca038c9a880b79e4b79a2b9bc032017e3a7964c7"
	},
	{
		"id": "363946b9ac68",
		"ts": "2026-07-29T21:57:25.861Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 904192.51,
		"hash": "363946b9ac68b1223c6deeba48bac227739289ab269c17f921445b99634e95bf"
	},
	{
		"id": "eee9ffb92182",
		"ts": "2026-07-29T21:57:26.068Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25262940.51,
		"hash": "eee9ffb92182d4f29eb7ccf99744290ba216d8e4325b78b4ec418a1ee823b800"
	},
	{
		"id": "1dd15ee4d000",
		"ts": "2026-07-29T21:57:26.446Z",
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
		"liquidityUsd": 2421075.38,
		"hash": "1dd15ee4d000a3a00b4cb1365d73e590f6206756f7d3c8d4289d6bc8faa4529a"
	},
	{
		"id": "1da5f924ca60",
		"ts": "2026-07-29T21:57:26.818Z",
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
		"liquidityUsd": 687083.72,
		"hash": "1da5f924ca600751e81b2d760fbcbee5adf38e5588f116e65805c6f781fa777a"
	},
	{
		"id": "1392ece5a017",
		"ts": "2026-07-29T21:57:27.023Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1898394.22,
		"hash": "1392ece5a017d6528080b0118a6cbcc30e9c02b8cf8ee6f46f9953a92de81ea2"
	},
	{
		"id": "f53f5e97861e",
		"ts": "2026-07-29T21:57:27.236Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1816884.94,
		"hash": "f53f5e97861eaec54e4bd4ea9512b4cdc20dd339d12fe35ab3f55d1ed7101919"
	},
	{
		"id": "b827660eb26b",
		"ts": "2026-07-29T21:57:27.442Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 635467.41,
		"hash": "b827660eb26bc4174202ca6c6cc03e3f357dfee71fb2ef73bdd6bccb65f21ca0"
	},
	{
		"id": "89db2c72e762",
		"ts": "2026-07-29T21:57:27.650Z",
		"symbol": "MOLT",
		"token": "0xB695559b26BB2c9703ef1935c37AeaE9526bab07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1035953.91,
		"hash": "89db2c72e762c664c2660a07eccf8cd4fb76830f7e8ad6f9d229a856989fb262"
	},
	{
		"id": "19d9c8accada",
		"ts": "2026-07-29T21:57:27.859Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 414528.8,
		"hash": "19d9c8accada53ddb269679d3cfd24a45429e215381a555bd15f93867c91206e"
	},
	{
		"id": "3fceef69ade1",
		"ts": "2026-07-29T21:57:28.277Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4371459.82,
		"hash": "3fceef69ade1efbd1234890fe40a7e17125f910abfd423da72597649c4982879"
	},
	{
		"id": "3465a55dadb5",
		"ts": "2026-07-29T21:57:28.487Z",
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
		"liquidityUsd": 1283969.48,
		"hash": "3465a55dadb5583b41ad5226d69754f06915cdd5861058c5771b43a0302c6c10"
	},
	{
		"id": "b1a031aeec88",
		"ts": "2026-07-29T20:09:48.862Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111141827.43,
		"hash": "b1a031aeec883ffc4a149054a4d7f9125fe12d5b7bebba30c531cad06d6251c6"
	},
	{
		"id": "b284fa2b0111",
		"ts": "2026-07-29T20:09:49.107Z",
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
		"liquidityUsd": 16458994.72,
		"hash": "b284fa2b01119ca88807a9c25060bc7214ade1a4f38faa8ea59ad3d995eac208"
	},
	{
		"id": "aacc6c07595a",
		"ts": "2026-07-29T20:09:49.344Z",
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
		"liquidityUsd": 1109413.17,
		"hash": "aacc6c07595a26649d2454d6b62f35d43fc1d4c15e2ee866cfe4e5af9e5517ba"
	},
	{
		"id": "9384fa209fe8",
		"ts": "2026-07-29T20:09:49.585Z",
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
		"liquidityUsd": 25349956.46,
		"hash": "9384fa209fe8e27babff7b1e64d53d4309c47311c67df7505dac1c594bd2e43a"
	},
	{
		"id": "70676a3c01f4",
		"ts": "2026-07-29T20:09:50.031Z",
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
		"liquidityUsd": 4897786.13,
		"hash": "70676a3c01f4548be3f2b2d85673530ed08209ae4e7118a52e02338e88406cc4"
	},
	{
		"id": "aa00a6909e33",
		"ts": "2026-07-29T20:09:50.269Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 902610.18,
		"hash": "aa00a6909e33db841ec5e65a64f2f942965b09e6dc0208da14d4a4a677ad7ca3"
	},
	{
		"id": "6a8a0167fa31",
		"ts": "2026-07-29T20:09:50.530Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25349956.46,
		"hash": "6a8a0167fa31c72f42e61d7ec69d575d33b11bc91782007580b326a5a875ef83"
	},
	{
		"id": "a21896773285",
		"ts": "2026-07-29T20:09:50.769Z",
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
		"liquidityUsd": 2407313.48,
		"hash": "a21896773285322980f6a0d3fed79e10a74ab49c538b271e480c298b7fb81715"
	},
	{
		"id": "77910471a0ea",
		"ts": "2026-07-29T20:09:51.000Z",
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
		"liquidityUsd": 672537.21,
		"hash": "77910471a0ea9a4f845c5103515da80c0b938df52d8350b69314d13d923f4dc1"
	},
	{
		"id": "3d60efd8f020",
		"ts": "2026-07-29T20:09:51.238Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"modifiable_tax",
			"has_blacklist",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 441282.83,
		"hash": "3d60efd8f020da287aed9922a219f6d6f485a4da9e12c3113e12e83cb9a9b50a"
	},
	{
		"id": "b28d873fa428",
		"ts": "2026-07-29T20:09:51.460Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1808716.83,
		"hash": "b28d873fa42856d5b6d36c5b29f67b34d73002bc4233e79fb61de1126790db75"
	},
	{
		"id": "66eca6d54529",
		"ts": "2026-07-29T20:09:51.679Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 632472.08,
		"hash": "66eca6d545291e3924537a8f6b7ff05b033d478bad1bcd8ff2247d9f91316f6f"
	},
	{
		"id": "214780038a86",
		"ts": "2026-07-29T20:09:51.902Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1893066.47,
		"hash": "214780038a86fc482c85de51e505e2af6adf5427e8698fabfe50f5cfc8182bf8"
	},
	{
		"id": "ef673fdbf40e",
		"ts": "2026-07-29T20:09:52.122Z",
		"symbol": "MOLT",
		"token": "0xB695559b26BB2c9703ef1935c37AeaE9526bab07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1041323.51,
		"hash": "ef673fdbf40e67daecb7c3dece45fa7fbeb336f6488354869fbc997ea3ed3eed"
	},
	{
		"id": "44a1759bf8a9",
		"ts": "2026-07-29T20:09:52.344Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4354600.89,
		"hash": "44a1759bf8a9b17285d087056ac21920caf92d9473c2f4045b38d542be9ed743"
	},
	{
		"id": "7527b4e4326b",
		"ts": "2026-07-29T18:04:05.489Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112272074.15,
		"hash": "7527b4e4326b7039273059645cdbcf71ece8df04de86ef2d68707889e370c356"
	},
	{
		"id": "6c0625fcbb68",
		"ts": "2026-07-29T18:04:05.781Z",
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
		"liquidityUsd": 13371317.07,
		"hash": "6c0625fcbb681b89bd5bdba939510a0c8769a20b2f6890d14048bc4caccca40d"
	},
	{
		"id": "4f2d84d46038",
		"ts": "2026-07-29T18:04:06.029Z",
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
		"liquidityUsd": 1136436.12,
		"hash": "4f2d84d460386796c75597a7c08229dafd9b782dbcc0ac8ab0071944f83a20ff"
	},
	{
		"id": "1041e45d8d0d",
		"ts": "2026-07-29T18:04:06.271Z",
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
		"liquidityUsd": 25697591.82,
		"hash": "1041e45d8d0d18502c16243a7440c734b19dc1553637e77501f4c5ebbdea8788"
	},
	{
		"id": "49a0974fec7d",
		"ts": "2026-07-29T18:04:06.512Z",
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
		"liquidityUsd": 4884725.94,
		"hash": "49a0974fec7d77e2ca724cd3e2a447ba841801dba4f4f6ec3c63fb97bca197b3"
	},
	{
		"id": "72b7724db30e",
		"ts": "2026-07-29T18:04:06.751Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 928301.23,
		"hash": "72b7724db30e6c76984cc618641a64555377f3333a1b703d92c0282d629820e7"
	},
	{
		"id": "fc9b938dc4e5",
		"ts": "2026-07-29T18:04:07.014Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25697591.82,
		"hash": "fc9b938dc4e5632a9e17154c25ca837353ba3349af0f1716dbd8acc94d98b6c4"
	},
	{
		"id": "cfaf8b54432e",
		"ts": "2026-07-29T18:04:07.256Z",
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
		"liquidityUsd": 2460482.4,
		"hash": "cfaf8b54432e18add0c31c25353190fc339e7d6f9ed6a304617aa67a0ff30d43"
	},
	{
		"id": "c184bf7b9070",
		"ts": "2026-07-29T18:04:07.497Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1844112.63,
		"hash": "c184bf7b90705bb8fb5a04e034c2dd4ab0cef4963c3d31be65c0b36d117e00d5"
	},
	{
		"id": "5134124a11cf",
		"ts": "2026-07-29T18:04:07.728Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 523723.9,
		"hash": "5134124a11cfa6c8c26ee60cba950972786aabf39366cb129c922b4d64106175"
	},
	{
		"id": "b3e8ea63aacc",
		"ts": "2026-07-29T18:04:07.951Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 677931.54,
		"hash": "b3e8ea63aacc1df88d2eccc49a2151925f424140f62be80f860d16a24dc8d2b6"
	},
	{
		"id": "a9cf7193808d",
		"ts": "2026-07-29T18:04:08.220Z",
		"symbol": "MOLT",
		"token": "0xB695559b26BB2c9703ef1935c37AeaE9526bab07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1054589.93,
		"hash": "a9cf7193808d607e45a4fa234088afcb67779d5b830c7a417ea38cc1917e7f31"
	},
	{
		"id": "c206d8b3ab30",
		"ts": "2026-07-29T18:04:08.443Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 644477.37,
		"hash": "c206d8b3ab3040a028d8736b06a15346ece258036002d2873f3875b4aadf9185"
	},
	{
		"id": "faecb85968a9",
		"ts": "2026-07-29T18:04:08.666Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 439186.44,
		"hash": "faecb85968a90af007c78f1b333b0645dcf04337f8225b41c3882a24506455f3"
	},
	{
		"id": "2cc1077936f4",
		"ts": "2026-07-29T18:04:08.886Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9899549.17,
		"hash": "2cc1077936f41808c4e11bbd9b871b8b578b2e84752c34508c36ee6b503de1c4"
	},
	{
		"id": "9761a4eb78a2",
		"ts": "2026-07-29T16:18:28.695Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111212611.94,
		"hash": "9761a4eb78a22d375950f0756fdca0c22a08be59fd586cee895e93c8a2040dae"
	},
	{
		"id": "99b170ec479e",
		"ts": "2026-07-29T16:18:29.019Z",
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
		"liquidityUsd": 16841863,
		"hash": "99b170ec479e21a9d5f5266bf15998f1a7beb85220793c712ac3fbc170a937ab"
	},
	{
		"id": "90ee3b7e258e",
		"ts": "2026-07-29T16:18:29.258Z",
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
		"liquidityUsd": 1102290.05,
		"hash": "90ee3b7e258e43225d7ccc85a83c5d5331adf3844862206a483a40855a91aa47"
	},
	{
		"id": "fc934bff07f0",
		"ts": "2026-07-29T16:18:29.492Z",
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
		"liquidityUsd": 25428538.17,
		"hash": "fc934bff07f0a73ad5b504eeb475ef3f88f154f2c61fc111a3052d38dedfa234"
	},
	{
		"id": "5bdb52c26a78",
		"ts": "2026-07-29T16:18:29.728Z",
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
		"liquidityUsd": 4878022.61,
		"hash": "5bdb52c26a7862d762e66c1b8dc6b1b791fe2044b237968a6f5b20061fa11bb7"
	},
	{
		"id": "179261fa8e54",
		"ts": "2026-07-29T16:18:29.962Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 908904.94,
		"hash": "179261fa8e5472db897e97e1581c274c938c106cb5c3290d3234a63de5bacf1c"
	},
	{
		"id": "d6e2f439a07c",
		"ts": "2026-07-29T16:18:30.194Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25428538.17,
		"hash": "d6e2f439a07c25b345590ccfeaa34f14a3ebb19bc896c1379e714ff068d9e8c6"
	},
	{
		"id": "893cb613f9e6",
		"ts": "2026-07-29T16:18:30.432Z",
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
		"liquidityUsd": 2403085.49,
		"hash": "893cb613f9e63b7257409cc251ad18669e9092aad556a2cf45bda50c71936c0e"
	},
	{
		"id": "6ecceee763d9",
		"ts": "2026-07-29T16:18:30.675Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1825507.26,
		"hash": "6ecceee763d9178cf8a3640e3af95e684744c8d59b31819b78a1efba45a57719"
	},
	{
		"id": "450b04db80cb",
		"ts": "2026-07-29T16:18:30.912Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 518853.14,
		"hash": "450b04db80cb057f8bd4af26d1b8ab44f541474117878da64c8541b9975f8b68"
	},
	{
		"id": "f4e5e91e3039",
		"ts": "2026-07-29T16:18:31.133Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 643016.92,
		"hash": "f4e5e91e3039cc26446f85287a7227b0bb22a92202a051b83d408749fa507c10"
	},
	{
		"id": "bdae1b47b3cb",
		"ts": "2026-07-29T16:18:31.354Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 635765.2,
		"hash": "bdae1b47b3cb3eaa5aca8558a1ecc43ba959d7ac97d8b20f85cb06cd1f627877"
	},
	{
		"id": "cc2f9357ec42",
		"ts": "2026-07-29T16:18:31.577Z",
		"symbol": "MOLT",
		"token": "0xB695559b26BB2c9703ef1935c37AeaE9526bab07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1042820.24,
		"hash": "cc2f9357ec424425fdf6651a46939aedecfb3e73e3a7226f56b36198138f62c7"
	},
	{
		"id": "dbbf18be9f50",
		"ts": "2026-07-29T16:18:31.798Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9735311.35,
		"hash": "dbbf18be9f5000056e6ba0b3c6098907ea1afeb8299d92cfe4bda156c9427771"
	},
	{
		"id": "0d13c214ecd2",
		"ts": "2026-07-29T16:18:32.018Z",
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
		"liquidityUsd": 1373598.38,
		"hash": "0d13c214ecd2606fd3afaf06024b84423e30f7654b68a51af25efbd4f9ac2b6d"
	},
	{
		"id": "2153239c4c59",
		"ts": "2026-07-29T16:18:32.238Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4455653.71,
		"hash": "2153239c4c599fda2d9d6a11293a97348b9aca44ed60c1aaa1575b0da0c6e70b"
	},
	{
		"id": "7d11eac0286a",
		"ts": "2026-07-29T14:01:33.938Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111828503.97,
		"hash": "7d11eac0286ac097ca17426d066cdc0df67474ef90c75b6ce5147d92cf1a776d"
	},
	{
		"id": "d4cbf6a9fea5",
		"ts": "2026-07-29T14:01:34.398Z",
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
		"liquidityUsd": 15995417.01,
		"hash": "d4cbf6a9fea55594b974ead1ef5453d2e716d5b9058795857b37cee299515171"
	},
	{
		"id": "0d6344306bb8",
		"ts": "2026-07-29T14:01:34.728Z",
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
		"liquidityUsd": 1107398.82,
		"hash": "0d6344306bb8396abff6c572bd962ccda22a1a066cb26909cdba60844f775150"
	},
	{
		"id": "b06d1354fc7a",
		"ts": "2026-07-29T14:01:34.970Z",
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
		"liquidityUsd": 25473877.73,
		"hash": "b06d1354fc7a7d18e912f6fce8ffd6ff042d7c33d128524a0d9d86dc62e8ad3b"
	},
	{
		"id": "ed287076d2cd",
		"ts": "2026-07-29T14:01:35.212Z",
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
		"liquidityUsd": 4904904.53,
		"hash": "ed287076d2cd0ec9042e3ceae5ff3f62954e8f49d9ca4bc93ed1e4a51785d33d"
	},
	{
		"id": "015ef333142d",
		"ts": "2026-07-29T14:01:35.453Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 913851.87,
		"hash": "015ef333142ddc11a47f0d5069f30f0245eb2691598ba7383271e02e380031d2"
	},
	{
		"id": "2c09e2fa9a48",
		"ts": "2026-07-29T14:01:35.694Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25473877.73,
		"hash": "2c09e2fa9a482cd5fd7c90e70334dc525c2789d50a74489fa85de9a00e804ae8"
	},
	{
		"id": "1824e965fc1c",
		"ts": "2026-07-29T14:01:35.963Z",
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
		"liquidityUsd": 2363472.46,
		"hash": "1824e965fc1c178bf7d10a957d3930cef596d13d86d9b920f40133a615109fe1"
	},
	{
		"id": "3442cf6f1e16",
		"ts": "2026-07-29T14:01:36.203Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 516269.98,
		"hash": "3442cf6f1e16f40b48766ef91b84c368d3577d13e7350d3497b9f93970648a5a"
	},
	{
		"id": "a92dd15da117",
		"ts": "2026-07-29T14:01:36.446Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1797582.55,
		"hash": "a92dd15da1176a0ecc2d2a0939993f0f35b1b8dbb4867d5a72a18fae3c7cabdc"
	},
	{
		"id": "98197d3de7fd",
		"ts": "2026-07-29T14:01:36.669Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 642004.54,
		"hash": "98197d3de7fdfa0594edbad9052626d7f258705ee7ae92ce0b9a2167a8df76d9"
	},
	{
		"id": "c1ed0a776a78",
		"ts": "2026-07-29T14:01:36.894Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 671451.4,
		"hash": "c1ed0a776a78d6e0693c9fb03fa0dbab59c64969ea86d4307ea34d4d77f43c54"
	}
]
