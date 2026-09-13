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
	"updatedAt": "2026-09-13T20:14:37.488Z",
	"tokensScored": 17311,
	"verdictsIssued": 17311,
	"safe": 14664,
	"risky": 1271,
	"likelyRug": 1376,
	"ticks": 989
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "d5feb74b92f9",
		"ts": "2026-09-13T20:14:33.589Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120727196.68,
		"hash": "d5feb74b92f9df87e5c8522352297d6d7acc801221e39b9c9f5b573bd4495cb5"
	},
	{
		"id": "a59f624ccd3a",
		"ts": "2026-09-13T20:14:33.807Z",
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
		"liquidityUsd": 16796579.82,
		"hash": "a59f624ccd3a2655a746b75dc0c8f6e21beb5fba3a245f60bf4ccd679276a687"
	},
	{
		"id": "0ca2f7ad9f4d",
		"ts": "2026-09-13T20:14:34.030Z",
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
		"liquidityUsd": 971456.83,
		"hash": "0ca2f7ad9f4d7f04880fde19546d6c78bb1dfaf0f339e9aa136df56ca2486c73"
	},
	{
		"id": "7b529d62ca85",
		"ts": "2026-09-13T20:14:34.254Z",
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
		"liquidityUsd": 34050608.73,
		"hash": "7b529d62ca85e6c9db5cb5676a41f035ff11b3bf72ffed4df1dd3638c30f6d81"
	},
	{
		"id": "0994590aaf1c",
		"ts": "2026-09-13T20:14:34.482Z",
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
		"liquidityUsd": 3939558.04,
		"hash": "0994590aaf1ce4621ecdbb0caeae665eb6d30da97c5ce340f9e74b20e7dcc913"
	},
	{
		"id": "556ecd92c964",
		"ts": "2026-09-13T20:14:34.755Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1180298.9,
		"hash": "556ecd92c9640f644dc6769e464769e869ccaa56552339d7813d03a88cb8a85f"
	},
	{
		"id": "db6b3b0eb9cf",
		"ts": "2026-09-13T20:14:34.977Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1594809.34,
		"hash": "db6b3b0eb9cffa1ae064380c6c92efd1163bef08228ea5b028055086f51feba9"
	},
	{
		"id": "d2e53fbeb193",
		"ts": "2026-09-13T20:14:35.199Z",
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
		"liquidityUsd": 1137434.44,
		"hash": "d2e53fbeb193bc44f2d69846700be7f914e38aef2f5e6c11969f0c9dac821a07"
	},
	{
		"id": "73c6b1da5cd3",
		"ts": "2026-09-13T20:14:35.411Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1594809.34,
		"hash": "73c6b1da5cd34415fa6c67fd80bc315eba28330489fd78637aff4f88ab3631d0"
	},
	{
		"id": "3b739bc9958f",
		"ts": "2026-09-13T20:14:35.639Z",
		"symbol": "LSK",
		"token": "0xac485391EB2d7D88253a7F1eF18C37f4242D1A24",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 406536.96,
		"hash": "3b739bc9958f855a0f7083a2d29ede065bd407fa7baedf5ad4a5fc611c09ddbc"
	},
	{
		"id": "81b410cbf35f",
		"ts": "2026-09-13T20:14:35.845Z",
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
		"liquidityUsd": 701887.86,
		"hash": "81b410cbf35fb80a85051f63d6e0fcb7fa4b73fadc6218f060c258d76736aa8c"
	},
	{
		"id": "fcc7b21ad67d",
		"ts": "2026-09-13T20:14:36.039Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1435135.34,
		"hash": "fcc7b21ad67dc5cbd861e4d2803a2aa1fa08f3247f7373b65a74db8dc1a60406"
	},
	{
		"id": "d30f194968b8",
		"ts": "2026-09-13T20:14:36.246Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 522583.52,
		"hash": "d30f194968b873f759fab8bf9172039cb034869698737c98650adec477984c4e"
	},
	{
		"id": "42687ae3f102",
		"ts": "2026-09-13T20:14:36.446Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13739453.28,
		"hash": "42687ae3f102e676c1c15e4cb152d63d00ed34b916e3cb0b7c8930cdc5b0e5a6"
	},
	{
		"id": "196f09d8e808",
		"ts": "2026-09-13T20:14:36.655Z",
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
		"liquidityUsd": 1562175.77,
		"hash": "196f09d8e8089469c94ddf0708b04effbb5e5923cf4c8e96752c09acc09b7dc0"
	},
	{
		"id": "8d9666320f97",
		"ts": "2026-09-13T20:14:36.859Z",
		"symbol": "STONX",
		"token": "0x89d8CB38067b55f820F29A9E12d0CE18682A2Bfc",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1414734.28,
		"hash": "8d9666320f9778f6a28e355b086835b5f5d9507bf0ba32e84eaaae40b395e304"
	},
	{
		"id": "3c7919626fe2",
		"ts": "2026-09-13T20:14:37.066Z",
		"symbol": "KAI",
		"token": "0xca18A528Ea897040f715edC92e6e4572780c5ca1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 285043.38,
		"hash": "3c7919626fe292ce5a83d9c1efc8bcb6e027a0ddcf3f29e5fe9ae971d039683a"
	},
	{
		"id": "b439e2c62829",
		"ts": "2026-09-13T20:14:37.260Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 410645.29,
		"hash": "b439e2c62829693c9a4d8b363b5980c6ed73ff50c7c50aa1866ba065307d6f83"
	},
	{
		"id": "f743bea8868a",
		"ts": "2026-09-13T20:14:37.487Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 739675.99,
		"hash": "f743bea8868a767ff5233765e4af2ef6d43fa3ed820f5314a08acbc7dfb6eab7"
	},
	{
		"id": "1c03ac4921af",
		"ts": "2026-09-13T17:13:02.192Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120523965.57,
		"hash": "1c03ac4921af0f533c7234bd49ee8b000b6dca19659e78393e028a76e5052f8a"
	},
	{
		"id": "e3c251b07f4b",
		"ts": "2026-09-13T17:13:02.691Z",
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
		"liquidityUsd": 12446139.9,
		"hash": "e3c251b07f4b98ab568071d3aba0217a0df871d937dd58d2e957a1c4126adc33"
	},
	{
		"id": "a7f4ed6a0c80",
		"ts": "2026-09-13T17:13:02.928Z",
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
		"liquidityUsd": 974133.32,
		"hash": "a7f4ed6a0c802a0c0a9c663de31f0bdfbb8ac302a68f2790f7ae24fd4b0c9e4f"
	},
	{
		"id": "284d1f4a4c49",
		"ts": "2026-09-13T17:13:03.179Z",
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
		"liquidityUsd": 34141583.36,
		"hash": "284d1f4a4c4979cb773605c088e04ed8b4d3d33ed7c45ae0fcb1968ee0f6549e"
	},
	{
		"id": "099c55cd0007",
		"ts": "2026-09-13T17:13:03.423Z",
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
		"liquidityUsd": 3946362.39,
		"hash": "099c55cd00079019ed15247283098665a64a6d6df05b55ce57fe8738ec7ff4e5"
	},
	{
		"id": "6555182dcbcb",
		"ts": "2026-09-13T17:13:03.668Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1180584.38,
		"hash": "6555182dcbcb1aa24b330cfaed83042d361a68b821b079cb608c912222381334"
	},
	{
		"id": "26413132a8b9",
		"ts": "2026-09-13T17:13:04.034Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1611446.45,
		"hash": "26413132a8b9bb483c9311b2c7f5d465d6ffe8fb921ab8963bbbeebed556f85a"
	},
	{
		"id": "1f04122caf32",
		"ts": "2026-09-13T17:13:04.295Z",
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
		"liquidityUsd": 1139052.43,
		"hash": "1f04122caf323be055af9602d09eb2b1bd5fb3b25fda27aee7f3fed75543524c"
	},
	{
		"id": "07eb3cffeeef",
		"ts": "2026-09-13T17:13:04.572Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1611446.45,
		"hash": "07eb3cffeeef568870a3b1bf6f75f749e0f66a0690e245eb7fe72f94526ea389"
	},
	{
		"id": "057d03e87f5b",
		"ts": "2026-09-13T17:13:04.813Z",
		"symbol": "LSK",
		"token": "0xac485391EB2d7D88253a7F1eF18C37f4242D1A24",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 352970.79,
		"hash": "057d03e87f5bd10f92bd7492a0bf0cb9b2b36f146c207e8c38df5f380948748a"
	},
	{
		"id": "49313016a991",
		"ts": "2026-09-13T17:13:05.033Z",
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
		"liquidityUsd": 707805.65,
		"hash": "49313016a991a35bfe16549a69ca5490fe9e9fbed452195dd2863cbc98ce31d6"
	},
	{
		"id": "d3bf79598555",
		"ts": "2026-09-13T17:13:05.256Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1463104.72,
		"hash": "d3bf7959855586c23f2da89f9246ccb3bb18a37e432c08708ffe913b7afc9b50"
	},
	{
		"id": "1b64487793dc",
		"ts": "2026-09-13T17:13:05.475Z",
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
		"liquidityUsd": 1564637.64,
		"hash": "1b64487793dce261220ffee3b0f35ebc39955f8b5b48fd10f2e56e17fc930bdb"
	},
	{
		"id": "b82bdf044719",
		"ts": "2026-09-13T17:13:05.691Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 465202.69,
		"hash": "b82bdf044719c8a7cc50dd3354f0986ec46db1183c1db53c8ab94d175107504e"
	},
	{
		"id": "393ab3ce9857",
		"ts": "2026-09-13T17:13:05.911Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 193833.78,
		"hash": "393ab3ce9857aa4026025f0d1657a0e29392fe427e446a7a0cec94f46664185b"
	},
	{
		"id": "aa6d58c46ea6",
		"ts": "2026-09-13T17:13:06.135Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13808856.73,
		"hash": "aa6d58c46ea6957199a2517bf254be42d653016a1ce9072bae2cd099d6aafc4d"
	},
	{
		"id": "5bed6d8006a5",
		"ts": "2026-09-13T17:13:06.354Z",
		"symbol": "STONX",
		"token": "0x89d8CB38067b55f820F29A9E12d0CE18682A2Bfc",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1180816.54,
		"hash": "5bed6d8006a5925ae78fbe3b4715a9cee9e98c6665747cb981f2a90e5872eca4"
	},
	{
		"id": "b9e25cd9c92e",
		"ts": "2026-09-13T17:13:06.576Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 725038.46,
		"hash": "b9e25cd9c92e053ad14a009941cf3cf710d20e6d49783be8dffd59a90c243121"
	},
	{
		"id": "e36fa030a480",
		"ts": "2026-09-13T17:13:06.799Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 426903.17,
		"hash": "e36fa030a4808bd4e670dade0a986b98e0d747fab4e7b24ba6c58976a86ccb95"
	},
	{
		"id": "3e94951b8427",
		"ts": "2026-09-13T13:16:36.364Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 119725934.79,
		"hash": "3e94951b8427a1c81e0eaaced39e8e2b9474074c38109aba46dec2a0cd61cd09"
	},
	{
		"id": "778ec7408a57",
		"ts": "2026-09-13T13:16:36.564Z",
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
		"liquidityUsd": 16128961.67,
		"hash": "778ec7408a57cefc5007d6239d67848d9937dc116f9003608a0330ddd02831d0"
	},
	{
		"id": "b2d3b7bb5611",
		"ts": "2026-09-13T13:16:36.762Z",
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
		"liquidityUsd": 964029.45,
		"hash": "b2d3b7bb56116924beb2be53c55593128a4c0a5cb17480f18747734b74c1e5f1"
	},
	{
		"id": "64789c91cddf",
		"ts": "2026-09-13T13:16:36.956Z",
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
		"liquidityUsd": 33909215.31,
		"hash": "64789c91cddfcde1b65a0e24802abb7e3118b3e34ac4ef447097b062ced582b0"
	},
	{
		"id": "dbfc3a869743",
		"ts": "2026-09-13T13:16:37.145Z",
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
		"liquidityUsd": 3888396.86,
		"hash": "dbfc3a86974331ec84364af54ecfc1f724b375ed6b27aa86444b306bb1b96604"
	},
	{
		"id": "557d1728a951",
		"ts": "2026-09-13T13:16:37.435Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1165017.26,
		"hash": "557d1728a951908ef9042536e85564455947caac004e64a7f6f63c589aa96e27"
	},
	{
		"id": "cac799a2ffac",
		"ts": "2026-09-13T13:16:37.624Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1624374.61,
		"hash": "cac799a2ffacd346fa2ee60f6de2cd4ee60915b97277023697f20191970bd312"
	},
	{
		"id": "bc68bd96fef2",
		"ts": "2026-09-13T13:16:37.823Z",
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
		"liquidityUsd": 1128791.56,
		"hash": "bc68bd96fef28fec9b8e1a30549501d57b83af346319a41d9fb5d003c6d2d03a"
	},
	{
		"id": "5fbc6b1e5ae6",
		"ts": "2026-09-13T13:16:38.017Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1624374.61,
		"hash": "5fbc6b1e5ae6b22e537e3aaef051289c9d40a7b2843ef3b2bd4b21b8a4cffed1"
	},
	{
		"id": "ab2ba8c40210",
		"ts": "2026-09-13T13:16:38.204Z",
		"symbol": "LSK",
		"token": "0xac485391EB2d7D88253a7F1eF18C37f4242D1A24",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 359809.34,
		"hash": "ab2ba8c402107084c56f5610ab6310d008869866c6ec851a776c23085b9d86df"
	},
	{
		"id": "33805d51f1c2",
		"ts": "2026-09-13T13:16:38.397Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1450673.78,
		"hash": "33805d51f1c20feac775b5fed10cb91899f9b9d8b617a09533acbf73d3b654e5"
	},
	{
		"id": "9292c8664171",
		"ts": "2026-09-13T13:16:38.581Z",
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
		"liquidityUsd": 715137.82,
		"hash": "9292c86641710792409a0e3c80e4c1f0b7d9de1e224b80ae41af3848e8fdf115"
	},
	{
		"id": "53bfab262481",
		"ts": "2026-09-13T13:16:38.772Z",
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
		"liquidityUsd": 1565780.01,
		"hash": "53bfab26248154cd7bb7d6131edc3ceab4673165102ea0c9b175b738c95c6e8f"
	},
	{
		"id": "a5a72817938d",
		"ts": "2026-09-13T13:16:38.973Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13817738.6,
		"hash": "a5a72817938db63c067dd44790187581ee469bc4f4ac703cf346aba663f88d98"
	},
	{
		"id": "0489fd0f8e54",
		"ts": "2026-09-13T13:16:39.200Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 199117.29,
		"hash": "0489fd0f8e54ebb22ab79ede4447fc38318e67b7aa7542546c2b16643475139f"
	},
	{
		"id": "eb7adc761507",
		"ts": "2026-09-13T13:16:39.399Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 496314.94,
		"hash": "eb7adc76150756a5ad25a6c1a55192a0f455bb0132d30907cd17b7785d7f70fc"
	},
	{
		"id": "a0ee0d38e31b",
		"ts": "2026-09-13T13:16:39.610Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 534735.99,
		"hash": "a0ee0d38e31b7f528fe2de2ac394209be8e0240c5bbde9fb9a4b15aaff5da41d"
	},
	{
		"id": "0ace99d535f7",
		"ts": "2026-09-13T13:16:39.794Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 394062.92,
		"hash": "0ace99d535f766077763733e84f1f079cd9feef0be24211d822b9343bc96e710"
	},
	{
		"id": "e9983c11a069",
		"ts": "2026-09-13T13:16:40.061Z",
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
		"liquidityUsd": 489731.17,
		"hash": "e9983c11a069fceff4545f1b0c8ea5bd0a5caf22464199454830abde600c9466"
	},
	{
		"id": "c4b2b4cbd95e",
		"ts": "2026-09-13T07:59:59.989Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120165473.53,
		"hash": "c4b2b4cbd95ef737300534c5076a92caa570dbd048a7e338f84c266c8bb030f3"
	},
	{
		"id": "7bbd2e7b21d1",
		"ts": "2026-09-13T08:00:00.243Z",
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
		"liquidityUsd": 15679159.38,
		"hash": "7bbd2e7b21d15ea8199d0724b2f92a6437f824e2afa828ec0e629301192a5337"
	},
	{
		"id": "f9980449634c",
		"ts": "2026-09-13T08:00:00.508Z",
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
		"liquidityUsd": 980907.04,
		"hash": "f9980449634c0f4eaba4e34b9e7e2e69766fc1035d89d23bfe1a50d33b5bc3a9"
	},
	{
		"id": "5c48d020d68b",
		"ts": "2026-09-13T08:00:00.781Z",
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
		"liquidityUsd": 34009891.95,
		"hash": "5c48d020d68bfa793f01cf2fbfb360bfcaca473cd0327fc5314d60238c637b83"
	},
	{
		"id": "79d7837d0ed7",
		"ts": "2026-09-13T08:00:01.081Z",
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
		"liquidityUsd": 3939191.08,
		"hash": "79d7837d0ed7ff954ad6dd50cae2306e2f52ef7f7ebf9a0301ab97a75c35c1b2"
	},
	{
		"id": "7b6537368b33",
		"ts": "2026-09-13T08:00:01.350Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1184461.36,
		"hash": "7b6537368b3306b61dadf3cf060dc1f72cc101c6aa5b6eaaaeb64e4409b204cb"
	},
	{
		"id": "5935a0e38b50",
		"ts": "2026-09-13T08:00:01.652Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1657399.61,
		"hash": "5935a0e38b501a36101fd5928e26f5de4ef785a40fe64d868c1ad26816270a59"
	},
	{
		"id": "64b331cca2ea",
		"ts": "2026-09-13T08:00:02.028Z",
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
		"liquidityUsd": 2329719.06,
		"hash": "64b331cca2eadc6df6a5a110a7168c483adaeccfef7c6953564338fddd758002"
	},
	{
		"id": "f5f8be744a0a",
		"ts": "2026-09-13T08:00:02.271Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1606513.71,
		"hash": "f5f8be744a0a321db809e96a07313d535854b9edeef5ddb8282b98bc89f10d24"
	},
	{
		"id": "91beef59117c",
		"ts": "2026-09-13T08:00:02.731Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1491926.37,
		"hash": "91beef59117c3b4c3ce2fba898fd0219cdd614acd36d8eeb15b1009b4311c5aa"
	},
	{
		"id": "1fd3467eafed",
		"ts": "2026-09-13T08:00:03.055Z",
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
		"liquidityUsd": 14155461.14,
		"hash": "1fd3467eafed1e90b1a689b6739fad13cb04825be13bdc0b5650db85b01498cd"
	},
	{
		"id": "223be87da943",
		"ts": "2026-09-13T08:00:03.281Z",
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
		"liquidityUsd": 1642247.73,
		"hash": "223be87da94354b9db4aca2474e1bbfb2c68d22cacc5b7832f278f9328e2660c"
	},
	{
		"id": "3f28b8d49d43",
		"ts": "2026-09-13T08:00:03.506Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 520695.39,
		"hash": "3f28b8d49d430f9ff3d40666f9ec22f57db6725e44f54536dc4a054a36a0d6c0"
	},
	{
		"id": "1b85c41a8cb5",
		"ts": "2026-09-13T08:00:03.722Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 580653.53,
		"hash": "1b85c41a8cb562bc87b33b5abf782540bcca8c8292d6a915ddfdc2686957149e"
	},
	{
		"id": "930ab8a473e9",
		"ts": "2026-09-13T08:00:03.948Z",
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
		"liquidityUsd": 740794.2,
		"hash": "930ab8a473e92219f9b056b756c3a49053b8bccb13dbdd9648206a1f1e0ba6a2"
	},
	{
		"id": "a25c91c59074",
		"ts": "2026-09-13T08:00:04.172Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 192031.46,
		"hash": "a25c91c59074fc32675e436c4ebdd412dbafb8e10625b2a8054c9528b5243ebe"
	},
	{
		"id": "d046950b8708",
		"ts": "2026-09-13T08:00:04.389Z",
		"symbol": "LSK",
		"token": "0xac485391EB2d7D88253a7F1eF18C37f4242D1A24",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 325573.57,
		"hash": "d046950b870862ba0fde6f7a3f05ae244d151e3cb4fea7e562c93c925a227509"
	},
	{
		"id": "dd9c52f141e9",
		"ts": "2026-09-13T08:00:04.615Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 246113.19,
		"hash": "dd9c52f141e970774aa007a49e76dcd125129f84d647080aa7f6935fd3ad9019"
	},
	{
		"id": "6cf1a7f6d82c",
		"ts": "2026-09-13T08:00:04.840Z",
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
		"liquidityUsd": 520883.59,
		"hash": "6cf1a7f6d82c3c88a38196bb5fa9ee684d8b26902b8c5ea08ef1c8cc62a47a6f"
	},
	{
		"id": "5db271f94b45",
		"ts": "2026-09-13T02:56:03.803Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120346135.52,
		"hash": "5db271f94b454e2d61ff115a5a5b3c6f4c99231a707cde77305bbb803b10caf6"
	},
	{
		"id": "179145e60fe1",
		"ts": "2026-09-13T02:56:04.068Z",
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
		"liquidityUsd": 12335709.93,
		"hash": "179145e60fe111bf2496868468bf43dd6f21300168cd5891e45e09b3372a1379"
	},
	{
		"id": "16de04f2bc59",
		"ts": "2026-09-13T02:56:04.297Z",
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
		"liquidityUsd": 984482.18,
		"hash": "16de04f2bc5940dac4242c0a15cb59c05b7a531759e6f3df428736306a3961f3"
	},
	{
		"id": "cbd82800bf5f",
		"ts": "2026-09-13T02:56:04.549Z",
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
		"liquidityUsd": 34016425.54,
		"hash": "cbd82800bf5f59e6918bf7eca3209a7e60db1c30192ba183cbd07233487b14c5"
	},
	{
		"id": "e12f6dfd5beb",
		"ts": "2026-09-13T02:56:04.788Z",
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
		"liquidityUsd": 3950627.73,
		"hash": "e12f6dfd5beb2a3e998f59ad7053d515a4659f9b8dc9c11b2794aa37950b546d"
	},
	{
		"id": "62df2f993031",
		"ts": "2026-09-13T02:56:05.039Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1184779.34,
		"hash": "62df2f993031f0399409b8bba352f21c6902b072d4eebe6693ccfd718c535212"
	},
	{
		"id": "789455e15e54",
		"ts": "2026-09-13T02:56:05.284Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1706412.24,
		"hash": "789455e15e54751572e754b50c36ddd47d80d7cf0d9c89e69f85d5ad72f76d8a"
	},
	{
		"id": "6c239246eb62",
		"ts": "2026-09-13T02:56:05.536Z",
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
		"liquidityUsd": 2334887.01,
		"hash": "6c239246eb62215b731fcdc01342c6aa5fbdb55a95e36098c80d2fe190efb085"
	},
	{
		"id": "b0423f29036e",
		"ts": "2026-09-13T02:56:05.766Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1624147.17,
		"hash": "b0423f29036e617267085dcca57f3a75ec45ff86de48f04b8fdb2eb7bb7fea33"
	},
	{
		"id": "ac969262c1f7",
		"ts": "2026-09-13T02:56:06.063Z",
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
		"liquidityUsd": 14437363.79,
		"hash": "ac969262c1f7b64e1fb55c8e994809b1fa23e25413a3cab50ece6638acda2338"
	},
	{
		"id": "d3cd4bccdbee",
		"ts": "2026-09-13T02:56:06.297Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 554145.33,
		"hash": "d3cd4bccdbeec1643f060cadf3885918724763bba3fc4c90cc2e9627e9ab9704"
	},
	{
		"id": "d58edf618364",
		"ts": "2026-09-13T02:56:06.532Z",
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
		"liquidityUsd": 1616149.67,
		"hash": "d58edf61836428c8035feab870a688bcee44d436ded065286e2975c03a4f6326"
	},
	{
		"id": "e6a7dd839606",
		"ts": "2026-09-13T02:56:06.752Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1521654.35,
		"hash": "e6a7dd839606ddeb56d7f1ae40ac9aad22e733a470eb4130a3f1b35ef519b8cb"
	},
	{
		"id": "75a47c16df48",
		"ts": "2026-09-13T02:56:07.002Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 565712.11,
		"hash": "75a47c16df483cb6f94420aa467830d58362f79a62ae5dd6b5585e219feafd40"
	},
	{
		"id": "9dfd63435177",
		"ts": "2026-09-13T02:56:07.218Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 263680.5,
		"hash": "9dfd63435177da148c6c0e4494d9581eed30132fcf687d4af0b6b5779a31b047"
	},
	{
		"id": "fd5f309ad714",
		"ts": "2026-09-13T02:56:07.440Z",
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
		"liquidityUsd": 748287.59,
		"hash": "fd5f309ad7148d07131f5b9e23a68c74b366a9a4ca1fbda045fd0c7141c1cf3f"
	},
	{
		"id": "509e40b17957",
		"ts": "2026-09-13T02:56:07.667Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 66465.27,
		"hash": "509e40b17957352c80159a5d6ff76a154ed86360597bc743dd223f6c81043fdf"
	},
	{
		"id": "fe020bb600be",
		"ts": "2026-09-13T02:56:07.940Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 197253.91,
		"hash": "fe020bb600beee002602eb2d93c2ad36fe194826c58f37d0c49cbf613ee14456"
	},
	{
		"id": "821eae37ef30",
		"ts": "2026-09-13T02:56:08.169Z",
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
		"liquidityUsd": 532205.33,
		"hash": "821eae37ef30529e3666ca4fd58c3f8cff0741306e824a90a4f96736fe83af9b"
	},
	{
		"id": "9e628ff47684",
		"ts": "2026-09-12T23:41:32.958Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120345386.55,
		"hash": "9e628ff476846cf9853493f93778ca55ffac1f4959dae8acc60e5c484ae9b081"
	},
	{
		"id": "8237cd0fca9a",
		"ts": "2026-09-12T23:41:33.418Z",
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
		"liquidityUsd": 16246462.65,
		"hash": "8237cd0fca9ac93cd232e97590ed5f3ac998cc460b5cf24e840734df601a6e4a"
	},
	{
		"id": "5e220e68746f",
		"ts": "2026-09-12T23:41:33.665Z",
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
		"liquidityUsd": 987150.78,
		"hash": "5e220e68746f241fcb36b3becb2d48aa84ee2c89d0c4500846d475618ac27d22"
	},
	{
		"id": "77727045bc7f",
		"ts": "2026-09-12T23:41:33.907Z",
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
		"liquidityUsd": 33953843.35,
		"hash": "77727045bc7f4371ad7333e20ef454fc7822d788d30c5a08664a9c0dca150b50"
	},
	{
		"id": "818b07c52203",
		"ts": "2026-09-12T23:41:34.147Z",
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
		"liquidityUsd": 3963765.52,
		"hash": "818b07c522031bc961449b6811a707fb9d5472f19e26536fb5e12c10fd4d59ac"
	},
	{
		"id": "d7d799657a86",
		"ts": "2026-09-12T23:41:34.391Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1184375.28,
		"hash": "d7d799657a866647de605f83979c685bc370f53f388255581d90774168d08520"
	},
	{
		"id": "b3f800c60c16",
		"ts": "2026-09-12T23:41:34.632Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1604853.15,
		"hash": "b3f800c60c1661d919ab6cfff81c30603ef5e06371bc2e5b3b0852ca69b5ddf5"
	},
	{
		"id": "5f96d7556641",
		"ts": "2026-09-12T23:41:34.872Z",
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
		"liquidityUsd": 1150528.87,
		"hash": "5f96d75566411cb46e2cbd0913b33614d6726c39aad5b1ed76a07e3511d11b61"
	},
	{
		"id": "5919865fac72",
		"ts": "2026-09-12T23:41:35.128Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1604853.15,
		"hash": "5919865fac72a17dd11be025f8f5ffd5986d309891f59790f1f93c81b05dc9eb"
	},
	{
		"id": "311d7be92a71",
		"ts": "2026-09-12T23:41:35.642Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 557849.16,
		"hash": "311d7be92a71519ddc2a9734f353a9f68fb191f13b709e3b3a2cfb643248388f"
	},
	{
		"id": "aeccfdddaeb3",
		"ts": "2026-09-12T23:41:35.868Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14503982.48,
		"hash": "aeccfdddaeb319ddffb1937878813977832b0d86b48b6a35a1fee97a4670aee1"
	},
	{
		"id": "ecc7f312cf90",
		"ts": "2026-09-12T23:41:36.098Z",
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
		"liquidityUsd": 1598716.66,
		"hash": "ecc7f312cf909163fae7bea79b11c6973f197562aa8e8630d48737ab3806e2df"
	},
	{
		"id": "71bff5ee0f27",
		"ts": "2026-09-12T23:41:36.323Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 259029.47,
		"hash": "71bff5ee0f27f278a43b7cacc5c92953c7973fc19091a9878163ac433d31a0c1"
	},
	{
		"id": "56ac4d43aea6",
		"ts": "2026-09-12T23:41:36.547Z",
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
		"liquidityUsd": 705267.37,
		"hash": "56ac4d43aea6843990a72de33b4ad209a18fd32ad68e0572121dea246121a7d1"
	},
	{
		"id": "bbec1aebf272",
		"ts": "2026-09-12T23:41:36.776Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 588664.77,
		"hash": "bbec1aebf272bed7804da1f01a112c3f90c796acd501a81264d0cc8f881e8ccb"
	},
	{
		"id": "08a7e78343ee",
		"ts": "2026-09-12T23:41:37.004Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1527446.84,
		"hash": "08a7e78343ee6118ac9643c600ca590e1e5f2ec6d89dad186892d5e1a3f3da81"
	},
	{
		"id": "f5c8bf4c35d7",
		"ts": "2026-09-12T23:41:37.227Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 64973.54,
		"hash": "f5c8bf4c35d7530785b090b6a7489f1cf463c0bd4c229641171971a97fa836da"
	},
	{
		"id": "f233750fa9ac",
		"ts": "2026-09-12T23:41:37.456Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 200010,
		"hash": "f233750fa9acfdbc82090ca9b25916561b2f57faf4e809b59e08af49d4b40938"
	},
	{
		"id": "e44c368b1571",
		"ts": "2026-09-12T23:41:37.680Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4855359.24,
		"hash": "e44c368b1571b8c08c8ac63e2a98c8580bbc3727e420750dab7f0a23bb172d16"
	},
	{
		"id": "2c46622ef99a",
		"ts": "2026-09-12T21:10:14.950Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120337825.6,
		"hash": "2c46622ef99a08740b73b85b7df4ed16d06fca545eb76fb84987f2dd19c1e065"
	},
	{
		"id": "00d6de3987bb",
		"ts": "2026-09-12T21:10:15.306Z",
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
		"liquidityUsd": 16241649.06,
		"hash": "00d6de3987bbc94e5637abe2c8e8d7990eab36efd2c7a2b34c753580a246c885"
	},
	{
		"id": "f477e2db7bb7",
		"ts": "2026-09-12T21:10:15.504Z",
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
		"liquidityUsd": 990066.28,
		"hash": "f477e2db7bb7e119e123c7e66b38e85744b667c45888466827342951f5f99b16"
	},
	{
		"id": "9cd0153cccdc",
		"ts": "2026-09-12T21:10:15.709Z",
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
		"liquidityUsd": 33736792.73,
		"hash": "9cd0153cccdc2c5ff8f004e1772310782899b1a4b69df380ed5dcc16891d7acb"
	},
	{
		"id": "21d8e707fb36",
		"ts": "2026-09-12T21:10:15.907Z",
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
		"liquidityUsd": 3980932.87,
		"hash": "21d8e707fb361c82800cc8b72be3cb38ab2ba3ed9cc23ee3f6c1f8ebb5b44320"
	},
	{
		"id": "d6ab29339e22",
		"ts": "2026-09-12T21:10:16.110Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1184046.29,
		"hash": "d6ab29339e227b2f850c9660209ff1b5d5aa7c9757eafd5042d4ee77abb29656"
	},
	{
		"id": "f9f0cbaba49e",
		"ts": "2026-09-12T21:10:16.304Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1537697.65,
		"hash": "f9f0cbaba49e9bf1e2ea048b8acdbd220a29fccc83d7ed61b90b563f05f0f653"
	},
	{
		"id": "5b8a3e9ae40d",
		"ts": "2026-09-12T21:10:16.523Z",
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
		"liquidityUsd": 1151360.61,
		"hash": "5b8a3e9ae40d2f80f12309cba4b5efc4bebffa06d33a69055b7e4292c97b637f"
	},
	{
		"id": "6c279f80f3b7",
		"ts": "2026-09-12T21:10:16.727Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1621148.4,
		"hash": "6c279f80f3b7fe4ec67ce9845c404b2047d3369ae761dffcca23221b698af9f8"
	},
	{
		"id": "b73ace8c5566",
		"ts": "2026-09-12T21:10:16.924Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 520671.9,
		"hash": "b73ace8c5566cf3355f3369c3ebe1d64b613fd20ed0ead716ec502fac793785e"
	},
	{
		"id": "674fd1ef1cce",
		"ts": "2026-09-12T21:10:17.113Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14427406.72,
		"hash": "674fd1ef1ccef439f3b43fa02d9c09aaaab2d2c20345f9619cf92bdb8c4a9771"
	},
	{
		"id": "481ec4fdef52",
		"ts": "2026-09-12T21:10:17.298Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 587176.08,
		"hash": "481ec4fdef52b5751999435b284d8506f0bfc6efee9b1bc83951f3ef0d35ef6f"
	},
	{
		"id": "facfda2e5a5c",
		"ts": "2026-09-12T21:10:17.487Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 266268.49,
		"hash": "facfda2e5a5c00a99e9b9a9e6b58b0d89378994e8b23286983c10be7fd71fbb2"
	},
	{
		"id": "6389ea3c4470",
		"ts": "2026-09-12T21:10:17.672Z",
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
		"liquidityUsd": 704335.44,
		"hash": "6389ea3c44705dde236d5c6c3978782542f3e50a84607888857d761c59ed1099"
	},
	{
		"id": "f6dddc5d62b5",
		"ts": "2026-09-12T21:10:17.862Z",
		"symbol": "ELON",
		"token": "0xA3d353743164972B37C8E5358fb1E76f0Be8abA3",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 119174.59,
		"hash": "f6dddc5d62b5f2a4ebe56dddb6f6b7a13d3f894267d967ff7a21fc617062de81"
	},
	{
		"id": "be5c56268421",
		"ts": "2026-09-12T21:10:18.046Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1509624.81,
		"hash": "be5c562684211fae3af912367aacbcd2b689823a85249528da1e0a85b4727e5a"
	},
	{
		"id": "ff273c72be81",
		"ts": "2026-09-12T21:10:18.236Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 69788.5,
		"hash": "ff273c72be814f8bf352c3ad905af1aa323dd4101e284611e15c310892f004b1"
	},
	{
		"id": "ddf571b96cc9",
		"ts": "2026-09-12T21:10:18.425Z",
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
		"liquidityUsd": 1537697.65,
		"hash": "ddf571b96cc9be24c13cc7d4a30733e8c2a90c9b65423dacb47b4150d5a8607a"
	},
	{
		"id": "f46034048582",
		"ts": "2026-09-12T21:10:18.622Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 199831.02,
		"hash": "f46034048582201468927f4889ffb4508918cae07944667911fb89422d2d14e3"
	},
	{
		"id": "34fa595b3be9",
		"ts": "2026-09-12T18:54:48.286Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120441596.88,
		"hash": "34fa595b3be98cdb5ba826085a50da4c0c4908d8f8c12e3505793ec67139c638"
	},
	{
		"id": "6f7196baa51c",
		"ts": "2026-09-12T18:54:48.536Z",
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
		"liquidityUsd": 12211697.71,
		"hash": "6f7196baa51c8681f69e718461b48965659616dbfb682e902a90207426be8b83"
	},
	{
		"id": "49c4582e8838",
		"ts": "2026-09-12T18:54:48.774Z",
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
		"liquidityUsd": 990177.26,
		"hash": "49c4582e88382e6cfc2a3548f1c1a26c0f51dae2a3bcd1989a70e7448535ee8c"
	},
	{
		"id": "f80d89ed131c",
		"ts": "2026-09-12T18:54:49.027Z",
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
		"liquidityUsd": 33648636.59,
		"hash": "f80d89ed131c5792b8e5e8d09696cb90b64acb7428366a72734239ad8f07b4ba"
	},
	{
		"id": "a96fd5664c1f",
		"ts": "2026-09-12T18:54:49.266Z",
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
		"liquidityUsd": 3979503.66,
		"hash": "a96fd5664c1f61deb1d8e2c9e0a7f422e80cf6374bfb8073d7a32195d0d7a222"
	},
	{
		"id": "13523892b953",
		"ts": "2026-09-12T18:54:49.519Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1184807.12,
		"hash": "13523892b95310f5d9a5247963dd61e4895959512fcca4a1a5ef4abd50798e63"
	},
	{
		"id": "34dcef07f73a",
		"ts": "2026-09-12T18:54:49.757Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1633491.3,
		"hash": "34dcef07f73a5bc28eef196a37b9f43a04cd4e731b227a8717f457c2ee1b9f88"
	},
	{
		"id": "342b95fcfb66",
		"ts": "2026-09-12T18:54:49.993Z",
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
		"liquidityUsd": 1149724.3,
		"hash": "342b95fcfb66a4b0680856bf96f32fd916c28980f9b1c191a5d74ce32e0ce04b"
	},
	{
		"id": "7d6a34d067ff",
		"ts": "2026-09-12T18:54:50.250Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1633491.3,
		"hash": "7d6a34d067ff6bb4615bb23739d2b87330a7dcd25989468f755e524cb86b58da"
	},
	{
		"id": "b27c35793b43",
		"ts": "2026-09-12T18:54:50.500Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 558458.51,
		"hash": "b27c35793b43a935b594fd2c786729a403453f1b7e18adb095945fac2f9c115c"
	},
	{
		"id": "3ad18b0fc583",
		"ts": "2026-09-12T18:54:50.727Z",
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
		"liquidityUsd": 14255233.04,
		"hash": "3ad18b0fc5832536f841496a975f9cd5f183e52e4235774698e85804dd71022c"
	},
	{
		"id": "6f6852f03eb5",
		"ts": "2026-09-12T18:54:50.944Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 574881.25,
		"hash": "6f6852f03eb5a4777092f24e02d26ca150caba8c51fdd85c04b97202ae9a8513"
	},
	{
		"id": "d9fe2c122fc8",
		"ts": "2026-09-12T18:54:51.176Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 271836.97,
		"hash": "d9fe2c122fc86b07037895021b4afd0044bb2c344013ad5b40997afce40ca727"
	},
	{
		"id": "2484b6d81a7d",
		"ts": "2026-09-12T18:54:51.397Z",
		"symbol": "ELON",
		"token": "0xA3d353743164972B37C8E5358fb1E76f0Be8abA3",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 93449.46,
		"hash": "2484b6d81a7dabd15e865d2b8a8088b8ae56db4e32e305a9a0e57708544f965e"
	},
	{
		"id": "9b283c082f70",
		"ts": "2026-09-12T18:54:51.628Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1544341.18,
		"hash": "9b283c082f70d4e1647ec3ea9395b790f4573d9d002cf742d9b75dd9cf3772d5"
	},
	{
		"id": "a08946133f02",
		"ts": "2026-09-12T18:54:51.854Z",
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
		"liquidityUsd": 711408.9,
		"hash": "a08946133f0205bd782d544a8c500e271f25a5a181027d1340427951f7b6e5a5"
	},
	{
		"id": "0c27c88fd5c6",
		"ts": "2026-09-12T18:54:52.076Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 73041.07,
		"hash": "0c27c88fd5c6791cc1a12938c94b96c57d43be5c3c23eedc9204533a18e8fafd"
	},
	{
		"id": "a35c75ec7bca",
		"ts": "2026-09-12T18:54:52.309Z",
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
		"liquidityUsd": 1522135.65,
		"hash": "a35c75ec7bca6b3ea1cfab2445e09edfce4bdc54eb351a2c01662f63a47be00f"
	},
	{
		"id": "a499612f8d0c",
		"ts": "2026-09-12T18:54:52.529Z",
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
		"liquidityUsd": 492077.54,
		"hash": "a499612f8d0c4f0df6889a10731cfa90d9b220af7ee332e08ffd4ef7894a57be"
	},
	{
		"id": "edc7c9aab945",
		"ts": "2026-09-12T16:42:42.257Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120650736.68,
		"hash": "edc7c9aab9452b7cc46c6d70f39d4e4d2ad944dfb4545b0f52fe445d8a21dd79"
	},
	{
		"id": "9424e29ba295",
		"ts": "2026-09-12T16:42:42.509Z",
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
		"liquidityUsd": 12518122.62,
		"hash": "9424e29ba29527ba1f1b02fd2add05e35e20597870cc97b8fc8e64be9953eba7"
	},
	{
		"id": "d533568ccc45",
		"ts": "2026-09-12T16:42:42.745Z",
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
		"liquidityUsd": 994890.49,
		"hash": "d533568ccc45159819c6cd9f6d3cdef3cdd41a8143ab9f7de616128280776768"
	},
	{
		"id": "245e0bac6e30",
		"ts": "2026-09-12T16:42:42.981Z",
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
		"liquidityUsd": 33811293.64,
		"hash": "245e0bac6e3058dd79328c857569c534a1c43a36ee03abbd31d1d2aa0e98a564"
	},
	{
		"id": "c9fe2ce3272d",
		"ts": "2026-09-12T16:42:43.230Z",
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
		"liquidityUsd": 4006766.71,
		"hash": "c9fe2ce3272d65a5ccfc2b2fbd58bc6b4b5c344e0b30854723d37855567dd48a"
	},
	{
		"id": "b79c2171e5f4",
		"ts": "2026-09-12T16:42:43.497Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1189839.15,
		"hash": "b79c2171e5f4e883db1380f8fda66f7afe161d1dd4f273a7cd3a9f82aaae6237"
	},
	{
		"id": "72fbc4b875d2",
		"ts": "2026-09-12T16:42:43.745Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1608326.85,
		"hash": "72fbc4b875d270a963340161144ec1041728acfed8da2e8a3d55536324505052"
	},
	{
		"id": "5a2472361fb1",
		"ts": "2026-09-12T16:42:44.040Z",
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
		"liquidityUsd": 1154002.21,
		"hash": "5a2472361fb1ac06236433131a18e24dbb08949d0f0001d478e85bfed3c9a181"
	},
	{
		"id": "793aa54650f2",
		"ts": "2026-09-12T16:42:44.281Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1608326.85,
		"hash": "793aa54650f28890dcff0b70979e1f19cd8a035c006b3c92c6543df9f4516970"
	},
	{
		"id": "0efdab2b4489",
		"ts": "2026-09-12T16:42:44.532Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 610293.32,
		"hash": "0efdab2b4489925936ffc3510c5b0250ce5960717666fd5d7cdd92491f326ed4"
	},
	{
		"id": "01f361d76823",
		"ts": "2026-09-12T16:42:44.754Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14243910.39,
		"hash": "01f361d768239b8ceb7a829d9a7514aabf0780e55e743c59b4800e91fd3b6384"
	},
	{
		"id": "d51dbb4772da",
		"ts": "2026-09-12T16:42:44.974Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 564414.73,
		"hash": "d51dbb4772dacc0132ade5d2451d2812021f8a68c491e56f42f53c2c54f44006"
	},
	{
		"id": "175d2f36d09c",
		"ts": "2026-09-12T16:42:45.685Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 266778.2,
		"hash": "175d2f36d09cd7ceb7fb0e2943d3ff06dbfd39502afccef487bc57334dc2a5b3"
	},
	{
		"id": "33bd1928b21a",
		"ts": "2026-09-12T16:42:45.911Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1566727.17,
		"hash": "33bd1928b21af94b0f7df8189367349dd2286cdfcbf87c05bec7381580510215"
	},
	{
		"id": "227244ba40df",
		"ts": "2026-09-12T16:42:46.145Z",
		"symbol": "ELON",
		"token": "0xA3d353743164972B37C8E5358fb1E76f0Be8abA3",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 89652.7,
		"hash": "227244ba40df818311d0863f557b18430fa9d22611e8a02eff29b1ed844bf454"
	},
	{
		"id": "11dbe6ca97da",
		"ts": "2026-09-12T16:42:46.365Z",
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
		"liquidityUsd": 716435.18,
		"hash": "11dbe6ca97dab2f8973451170957f30be43bc3acd752a3acfd953ad8f47b5f02"
	},
	{
		"id": "00106d9cc3ba",
		"ts": "2026-09-12T16:42:46.584Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 75908.5,
		"hash": "00106d9cc3baf9253a724eef4953c76503e6cc0ce3946e91baeaf523ca606926"
	},
	{
		"id": "48e4a3a0ba8d",
		"ts": "2026-09-12T16:42:46.815Z",
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
		"liquidityUsd": 503118.53,
		"hash": "48e4a3a0ba8d8198028f9dd061f2b86ee6f44637a6e4b27db2ecb63ae749a40f"
	},
	{
		"id": "329c6a7ed457",
		"ts": "2026-09-12T16:42:47.037Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 350281.2,
		"hash": "329c6a7ed457959c87f45a95a7f133e1cac7292af1e998e46dc656b98fc64fe9"
	},
	{
		"id": "a5d389a985c4",
		"ts": "2026-09-12T13:31:18.131Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120050242.14,
		"hash": "a5d389a985c488a1b22f6f489a316fcf25585fce86ada5bfbffae1c2eebe74a1"
	},
	{
		"id": "14f7dcb553ab",
		"ts": "2026-09-12T13:31:18.375Z",
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
		"liquidityUsd": 16115168.67,
		"hash": "14f7dcb553ab90972bfddc894273e32addc5e8dbb77dc61cd5552c63bda83bac"
	},
	{
		"id": "bc352cb8be28",
		"ts": "2026-09-12T13:31:18.617Z",
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
		"liquidityUsd": 999547.65,
		"hash": "bc352cb8be287f6a7465828494c8bdef39ef6cb5ea20b43f7ac55d9f8560da4d"
	},
	{
		"id": "4b0da0d4fbab",
		"ts": "2026-09-12T13:31:19.092Z",
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
		"liquidityUsd": 33939793.61,
		"hash": "4b0da0d4fbab9bab239f3a9c216fde469c78140fc224fac6e8fba8e1ea21cd54"
	},
	{
		"id": "27644dc0c8ad",
		"ts": "2026-09-12T13:31:19.559Z",
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
		"liquidityUsd": 4111814.34,
		"hash": "27644dc0c8adb65b7f3aee98d34c6c9a89dbc2bfb4c7a89a0e6aba6a6d9b5db2"
	},
	{
		"id": "ba36f5569aca",
		"ts": "2026-09-12T13:31:19.795Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1194783.76,
		"hash": "ba36f5569aca7ca8675f4e709f9aeed76ca629af9107481257432441e80b05eb"
	},
	{
		"id": "926a166b9243",
		"ts": "2026-09-12T13:31:20.029Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1638911.16,
		"hash": "926a166b9243d18cad849e3e5a831ee1d696809888ff5b8d085ce086981ff618"
	},
	{
		"id": "7b2517a88b06",
		"ts": "2026-09-12T13:31:20.266Z",
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
		"liquidityUsd": 2605938.52,
		"hash": "7b2517a88b062f6949dd143a5032428752e8d0ca7c715a4ea81f1db604d73324"
	},
	{
		"id": "91f7a4c9de18",
		"ts": "2026-09-12T13:31:20.504Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1638911.16,
		"hash": "91f7a4c9de18ec7a7394ad7bd30dd4164063d434b146e91a3ecb9164a7610e00"
	},
	{
		"id": "e44907f185a4",
		"ts": "2026-09-12T13:31:20.754Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 663862.73,
		"hash": "e44907f185a46d00667f8c40a28c6e23c1d57b32cfe996abe3d428249cc96f6d"
	},
	{
		"id": "cf3944c715cf",
		"ts": "2026-09-12T13:31:20.987Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14188510.34,
		"hash": "cf3944c715cfb8cc1dcec62ae3d72318052af9aebdf4b3fb21f3ef0f3f3d84be"
	},
	{
		"id": "53567df730f4",
		"ts": "2026-09-12T13:31:21.206Z",
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
		"liquidityUsd": 743085.09,
		"hash": "53567df730f49986a43a529aac6ae61caa065598d73ae081efe341eed311b7c6"
	},
	{
		"id": "ed7d1d10a61b",
		"ts": "2026-09-12T13:31:21.431Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 264585.41,
		"hash": "ed7d1d10a61b5ce7e81f8fd4be2ce35d62d3290d8a11445f689614f91c278437"
	},
	{
		"id": "fc1ff6dbdf03",
		"ts": "2026-09-12T13:31:21.651Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 559718.58,
		"hash": "fc1ff6dbdf037549e52b1719e903907826a9b3c005b5507b90f0db2505255e0f"
	},
	{
		"id": "1f807c52d5ef",
		"ts": "2026-09-12T13:31:21.870Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1527579.43,
		"hash": "1f807c52d5efbba5121fa390e318651c71cf1e741c7d6b6a2e3a1b09071298a5"
	},
	{
		"id": "16a8ba64b1c9",
		"ts": "2026-09-12T13:31:22.499Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 149847.97,
		"hash": "16a8ba64b1c93563f60f48aa0b8e0d5caa51706ad2e5aac6e4993bfbd1468fd6"
	},
	{
		"id": "8d75e8aa7931",
		"ts": "2026-09-12T13:31:22.720Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 90531.41,
		"hash": "8d75e8aa7931af806f78afcf4540b9cea6b4a6f1bcda61522e9064f5ce5106f0"
	},
	{
		"id": "53d231bfca46",
		"ts": "2026-09-12T13:31:22.972Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1808619,
		"hash": "53d231bfca4658150c35a99b97acf5cdc6a66ff4d2f006ecb411d0c24a5a35e0"
	},
	{
		"id": "7b3397f8be2d",
		"ts": "2026-09-12T13:31:23.278Z",
		"symbol": "ELON",
		"token": "0xA3d353743164972B37C8E5358fb1E76f0Be8abA3",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 123209.03,
		"hash": "7b3397f8be2df740b46439bfefd12efb288ac3d319539ea1e64a3c13c112e35a"
	},
	{
		"id": "92af01aeb3f5",
		"ts": "2026-09-12T13:31:23.497Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1173687.45,
		"hash": "92af01aeb3f5c4f677b61659e3069196ed1c2fe648e3326824f5cb98e09f5422"
	},
	{
		"id": "1c9c00e98556",
		"ts": "2026-09-12T10:00:12.061Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 119650780.78,
		"hash": "1c9c00e98556956ad5148f720c236b80e36a30fde6094522db1b2b7a60321703"
	},
	{
		"id": "658247ac1ca5",
		"ts": "2026-09-12T10:00:12.747Z",
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
		"liquidityUsd": 16047979.59,
		"hash": "658247ac1ca55d96ac9ae9935cd54fe23e204ff8851c1589a59f0de89f980a4a"
	},
	{
		"id": "edaa5edd9ca7",
		"ts": "2026-09-12T10:00:13.324Z",
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
		"liquidityUsd": 998805.62,
		"hash": "edaa5edd9ca7cdc53ec5869dfd765696680c4a0be24f8a9370889664c29a417d"
	},
	{
		"id": "65a001608d60",
		"ts": "2026-09-12T10:00:13.807Z",
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
		"liquidityUsd": 33898258.76,
		"hash": "65a001608d60120e08fd6dd773cce6f7be5d07c12ed4ec794a931a62de4c0c14"
	},
	{
		"id": "c9691f89bf2f",
		"ts": "2026-09-12T10:00:14.103Z",
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
		"liquidityUsd": 4095826.75,
		"hash": "c9691f89bf2f073c3d53dae897c4d363bdcf3559b91b6341fe56176f03c59532"
	},
	{
		"id": "a33664d9f579",
		"ts": "2026-09-12T10:00:14.385Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1192905.5,
		"hash": "a33664d9f57982722ea8de7b8ab8ae4dfb892f3d9167120b8d68a3472786ced7"
	},
	{
		"id": "503914343f4d",
		"ts": "2026-09-12T10:00:14.659Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1614996.51,
		"hash": "503914343f4d82405d0a5ba6f70fc620ef39dcd84025b30b35f2f6a4ac857c88"
	},
	{
		"id": "e503bc81c24e",
		"ts": "2026-09-12T10:00:15.123Z",
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
		"liquidityUsd": 1153296.11,
		"hash": "e503bc81c24e33d097c91535043543ad2752f973fbaaef2d6b0e3a21829f894f"
	},
	{
		"id": "efa26abc6b09",
		"ts": "2026-09-12T10:00:15.620Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1614996.51,
		"hash": "efa26abc6b0911dc868b02dcf9377f377e0094d9cfb57b0002aff843f4b6b6c4"
	}
]
