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
	"updatedAt": "2026-07-25T06:13:51.747Z",
	"tokensScored": 5417,
	"verdictsIssued": 5417,
	"safe": 4734,
	"risky": 434,
	"likelyRug": 249,
	"ticks": 330
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "01a8d8b14f77",
		"ts": "2026-07-25T06:13:48.411Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109575267.67,
		"hash": "01a8d8b14f775b35e2c5029e6e5319ed12af40311e75f334f20312b5338f1f5e"
	},
	{
		"id": "9852b72370b2",
		"ts": "2026-07-25T06:13:48.767Z",
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
		"liquidityUsd": 16901223.12,
		"hash": "9852b72370b2dad8550ab253b40850c4f4c85026252fff674df501a28e6ce363"
	},
	{
		"id": "342dc234ff02",
		"ts": "2026-07-25T06:13:48.966Z",
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
		"liquidityUsd": 808381.58,
		"hash": "342dc234ff02f82b9281197a58e0b8b48d5f0aa291dbd4a775f75ade21c751d7"
	},
	{
		"id": "485e9ce7388f",
		"ts": "2026-07-25T06:13:49.314Z",
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
		"liquidityUsd": 25722394.42,
		"hash": "485e9ce7388fb0d074d68df1afc83e9c831468962511f9aa30646bd2b1770250"
	},
	{
		"id": "1236e22f7516",
		"ts": "2026-07-25T06:13:49.512Z",
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
		"liquidityUsd": 4926916.75,
		"hash": "1236e22f7516feafb0420b738f10fbb3fc0f8ae138bd10aa14c5d98682ab1e6d"
	},
	{
		"id": "88149a2824a9",
		"ts": "2026-07-25T06:13:49.706Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 932720.15,
		"hash": "88149a2824a96e3f3316a54eed73bda649e0f17e6338e4d2aa4a56de634f8c54"
	},
	{
		"id": "1ba0c15055aa",
		"ts": "2026-07-25T06:13:49.918Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25722394.51,
		"hash": "1ba0c15055aae44ab5ddd162b498c1de3af2648025a1e4b5fda9e86b8bbbb99f"
	},
	{
		"id": "ce4f4b125ff5",
		"ts": "2026-07-25T06:13:50.126Z",
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
		"liquidityUsd": 2345552.2,
		"hash": "ce4f4b125ff53b0933dd9bfbaaa281ce5265c8f5edec8da50bd4c5ba182aa4ee"
	},
	{
		"id": "b91507cc1e1d",
		"ts": "2026-07-25T06:13:50.340Z",
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
		"liquidityUsd": 3238448.54,
		"hash": "b91507cc1e1d6ebf86e037ef334e4683d6c574d0afd16b9f32735d77e4594432"
	},
	{
		"id": "74a5781195b9",
		"ts": "2026-07-25T06:13:50.535Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 696848.24,
		"hash": "74a5781195b91f4c01b41133d197f41b71d6d1c2283ec5ead95fc93519ad41e1"
	},
	{
		"id": "ac19ca3e8503",
		"ts": "2026-07-25T06:13:50.727Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4574262.62,
		"hash": "ac19ca3e8503e9f67035d36f15ad7b4d3ec552ccf81070347fc677397a77b4ac"
	},
	{
		"id": "b3fb3e97df3a",
		"ts": "2026-07-25T06:13:50.925Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 186149.65,
		"hash": "b3fb3e97df3abfe48d878fbe418f98bb2ac4f90d3705242b75e7d107dd84c1cf"
	},
	{
		"id": "c75a115c1eac",
		"ts": "2026-07-25T06:13:51.114Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 305705.84,
		"hash": "c75a115c1eacf9f3ceb73965cfb8d6ba0545f0b5aab4af6945118908886da823"
	},
	{
		"id": "06842289e014",
		"ts": "2026-07-25T06:13:51.360Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 81043.43,
		"hash": "06842289e014de2a0a82ecb9987e110446b0de7704f4fce613ff66c774fe7872"
	},
	{
		"id": "7cbc57aa2e17",
		"ts": "2026-07-25T06:13:51.551Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9761031.2,
		"hash": "7cbc57aa2e1724c80398c330acac3a79027baec5769e1343007de2750279f64f"
	},
	{
		"id": "d7d6e9ce7daa",
		"ts": "2026-07-25T06:13:51.747Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1837537.37,
		"hash": "d7d6e9ce7daae4d2125a023d9d7dbf9d68d87ee05d71ce0eed90e7e0a74ba043"
	},
	{
		"id": "5e2194b3a195",
		"ts": "2026-07-25T03:30:52.824Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109572199.33,
		"hash": "5e2194b3a195aed376603e6e71cba878076ea7939ee1fd94b9c6c5e86e689b06"
	},
	{
		"id": "e16bde04befb",
		"ts": "2026-07-25T03:30:53.280Z",
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
		"liquidityUsd": 16123808.8,
		"hash": "e16bde04befb9ea8d3f8922adafca6cc667257b5dd0906a772d78cdddb5f229a"
	},
	{
		"id": "42c5cc56d553",
		"ts": "2026-07-25T03:30:53.731Z",
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
		"liquidityUsd": 811122.66,
		"hash": "42c5cc56d5535e1e223ca0dd281cd5f716874e0fe5d26bd3ccb966d53ec018b6"
	},
	{
		"id": "ef7035d67f35",
		"ts": "2026-07-25T03:30:53.980Z",
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
		"liquidityUsd": 25565575.01,
		"hash": "ef7035d67f358e79f48aa4aa18f74c4e68050e0961edeb66a93a3146fdfce5ba"
	},
	{
		"id": "de60d2154a3d",
		"ts": "2026-07-25T03:30:54.225Z",
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
		"liquidityUsd": 4949463.01,
		"hash": "de60d2154a3d6cf365a772ec84dcad2bea968e2880f8802cd185f60f09be32ea"
	},
	{
		"id": "18655f04c958",
		"ts": "2026-07-25T03:30:54.467Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 932690.24,
		"hash": "18655f04c958d1d2975516da4bd93dd93ed62f2bb371b6a913ead21769686695"
	},
	{
		"id": "9695f9e5d2e5",
		"ts": "2026-07-25T03:30:54.708Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25565575.01,
		"hash": "9695f9e5d2e5c87a61b808285a1e8080d27075f283305399bd59bfce5e40a371"
	},
	{
		"id": "7abefbdc903d",
		"ts": "2026-07-25T03:30:54.953Z",
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
		"liquidityUsd": 2346309.64,
		"hash": "7abefbdc903de759bb401e796478dcd2eb00638750fea2cea71cb8a2e1cb79ec"
	},
	{
		"id": "1f6f7cf0c6f2",
		"ts": "2026-07-25T03:30:55.198Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3227567.78,
		"hash": "1f6f7cf0c6f2ffacd72e55bbfa420cfdf2b4320919b5dc113227a100b71fb958"
	},
	{
		"id": "48ec7e78e138",
		"ts": "2026-07-25T03:30:55.440Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 705574.73,
		"hash": "48ec7e78e138ad7f5e13ff9cd4e578e28b862e602f4323d11ab710e9450ce040"
	},
	{
		"id": "28633e016165",
		"ts": "2026-07-25T03:30:55.667Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4587026.11,
		"hash": "28633e016165d113daf6fedc0374699802ff7e6c24e918f91c2f0b18a2b9800c"
	},
	{
		"id": "f8fd11b9dd52",
		"ts": "2026-07-25T03:30:55.893Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 186191.81,
		"hash": "f8fd11b9dd52a1c0f1eb60b8a4733ccc5fbc9ed97593d2d52ae4f039ade4f43d"
	},
	{
		"id": "3d19ee8206e4",
		"ts": "2026-07-25T03:30:56.118Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 305428.75,
		"hash": "3d19ee8206e4f91e7246a441647cda4349e2bbb452822e1f4ed7df2f3a67f8c3"
	},
	{
		"id": "8c9e40e54f9c",
		"ts": "2026-07-25T03:30:56.346Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1936864.8,
		"hash": "8c9e40e54f9cd2b09f01824bb1cb924a6b54240d71e0be313553267486a0c66b"
	},
	{
		"id": "e6ca9a2c368a",
		"ts": "2026-07-25T03:30:56.571Z",
		"symbol": "AUTONO",
		"token": "0xB3D7e0c3C39A1D3F1B304663065A2F83Ddf56d8e",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 685376.66,
		"hash": "e6ca9a2c368a330ae534f73ab65e0af82c7bb4eb386b1339d245c304b0e7cd83"
	},
	{
		"id": "fafef59ea618",
		"ts": "2026-07-25T03:30:56.797Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9757678.06,
		"hash": "fafef59ea6187b4e73ec087b3e5e5e0750b2e9a875fab3d5519c991ea3c2929b"
	},
	{
		"id": "f8e7274f4cb6",
		"ts": "2026-07-25T00:00:00.473Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109705987.84,
		"hash": "f8e7274f4cb62b57dea46083092b796d26d5b3f8a844e44c30f724289d327e5b"
	},
	{
		"id": "ff403d425e1b",
		"ts": "2026-07-25T00:00:00.924Z",
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
		"liquidityUsd": 16082979.67,
		"hash": "ff403d425e1b78b29bfd6ae4f197c989c788f139ffe81b23f5e063ec1de04810"
	},
	{
		"id": "622d1e2623a3",
		"ts": "2026-07-25T00:00:01.442Z",
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
		"liquidityUsd": 824025.45,
		"hash": "622d1e2623a3c00aac8e2bb35fc34fdfac98a6a210b1745a43610977e52e82db"
	},
	{
		"id": "6ab7aeefc49c",
		"ts": "2026-07-25T00:00:01.846Z",
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
		"liquidityUsd": 25448879.78,
		"hash": "6ab7aeefc49cb1a329e0747a9f5edd5a945dfbbeedc8daa9ec0ade082cf9f092"
	},
	{
		"id": "ce81dc744b4b",
		"ts": "2026-07-25T00:00:02.296Z",
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
		"liquidityUsd": 4951165.77,
		"hash": "ce81dc744b4b5661171b7dd92df2ec8d59182a39e4370c5bd5af66540b0c8b80"
	},
	{
		"id": "fa5f2abd2c3e",
		"ts": "2026-07-25T00:00:02.560Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 928427.81,
		"hash": "fa5f2abd2c3e87302140865031bee94b2daf5f55cda05686b9abd7bb4cabbebf"
	},
	{
		"id": "ccb05d49f4b1",
		"ts": "2026-07-25T00:00:02.873Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25448879.78,
		"hash": "ccb05d49f4b104fdf5afdb4179836c995899a28b90f31ea5f6ddfc7f7bc44c5b"
	},
	{
		"id": "5fb120d9f833",
		"ts": "2026-07-25T00:00:03.163Z",
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
		"liquidityUsd": 2258977.24,
		"hash": "5fb120d9f83336daf39646c42ff251b5d703cb1f4c1efff037480586ee1128d0"
	},
	{
		"id": "c2bc4ce9cc3b",
		"ts": "2026-07-25T00:00:03.415Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3192848.71,
		"hash": "c2bc4ce9cc3b17d4b74e6277848c77a1e339b895b7463afb98c2f3b0e4135396"
	},
	{
		"id": "a6dbc9be7c44",
		"ts": "2026-07-25T00:00:03.651Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 716204.11,
		"hash": "a6dbc9be7c440b5b2efa64cd4a6331654dd766d75af84b6ce037c3fe91710e17"
	},
	{
		"id": "e0601b278f5a",
		"ts": "2026-07-25T00:00:03.885Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 308258.18,
		"hash": "e0601b278f5a04e475165403867d4580af741d882d59eaee51ef550873583a90"
	},
	{
		"id": "cf0d809b0789",
		"ts": "2026-07-25T00:00:04.110Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4602453.69,
		"hash": "cf0d809b07893c3467bd0bfe9fec0f2fd8c43cb9be5513f0192081c95631f877"
	},
	{
		"id": "fc1d74ae0215",
		"ts": "2026-07-25T00:00:04.342Z",
		"symbol": "AUTONO",
		"token": "0xB3D7e0c3C39A1D3F1B304663065A2F83Ddf56d8e",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 670040.41,
		"hash": "fc1d74ae0215fbe633cced14242944741f420866385da0944395245e63e5eb10"
	},
	{
		"id": "4a25ffae5491",
		"ts": "2026-07-25T00:00:04.571Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 80414.19,
		"hash": "4a25ffae5491498367062240eb9c8fc606c830222c6108bb6651133f9dfec9b4"
	},
	{
		"id": "0715e11264e0",
		"ts": "2026-07-25T00:00:04.806Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 496778.85,
		"hash": "0715e11264e06facbb6cc8553582ebc099410ca659f43f62b66ccff6b16c3773"
	},
	{
		"id": "e7f237ad8f9b",
		"ts": "2026-07-25T00:00:05.036Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1810398.18,
		"hash": "e7f237ad8f9b646e9465b1c2e2f6bc4703e1c66e4f8f4feb2c413c81ade50d72"
	},
	{
		"id": "c3a21dd1aeda",
		"ts": "2026-07-24T22:09:40.735Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109662259.56,
		"hash": "c3a21dd1aeda309df16b26878c1f22691b71f88f70989fb67176a64b836bdea1"
	},
	{
		"id": "7103fca39abe",
		"ts": "2026-07-24T22:09:41.085Z",
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
		"liquidityUsd": 16732847.03,
		"hash": "7103fca39abecdc27f35266032f8dbb9fe8cb73998f5d4db116e1186bdef5e8d"
	},
	{
		"id": "d3a971f0fb84",
		"ts": "2026-07-24T22:09:41.284Z",
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
		"liquidityUsd": 823119.66,
		"hash": "d3a971f0fb84231b546bcb74d45d8d5c5d7670436cebf8c95cad0ffe4ceae6da"
	},
	{
		"id": "a479f1e1921e",
		"ts": "2026-07-24T22:09:41.489Z",
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
		"liquidityUsd": 25387927.27,
		"hash": "a479f1e1921e50b967306d9f08848c650bff0a6e227253847b39ab00b6ac13f0"
	},
	{
		"id": "fd1015df7ef1",
		"ts": "2026-07-24T22:09:41.855Z",
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
		"liquidityUsd": 4957713.19,
		"hash": "fd1015df7ef12d9c48317087dcdadc5a6f12c25dc633015dffbe1b19028d0167"
	},
	{
		"id": "a3a125b04330",
		"ts": "2026-07-24T22:09:42.070Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 928427.81,
		"hash": "a3a125b04330db0de0441c73b44fc53b10163a0e32e9e7c3ada39eb01b3936c8"
	},
	{
		"id": "031b91b87175",
		"ts": "2026-07-24T22:09:42.262Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25387927.27,
		"hash": "031b91b87175d1528f37d9f104904aceb257581ad0b58e101c7d7a265701b28b"
	},
	{
		"id": "29131d72d0b6",
		"ts": "2026-07-24T22:09:42.458Z",
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
		"liquidityUsd": 2361167.96,
		"hash": "29131d72d0b65e2afd36d587a80c3e09492b915bbca548927802127a6a973d4c"
	},
	{
		"id": "3dd36418ba05",
		"ts": "2026-07-24T22:09:42.653Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3113360.58,
		"hash": "3dd36418ba059e6b55154270b86f2a5f08f673274c95554d201fa519659d3b97"
	},
	{
		"id": "7db2ac23e1ed",
		"ts": "2026-07-24T22:09:42.864Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 715935.91,
		"hash": "7db2ac23e1edf0899bd5864715c0d296ae41a9ff49fe25bab2863655fcd4f4e5"
	},
	{
		"id": "694c2d94b3c6",
		"ts": "2026-07-24T22:09:43.070Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 315048.28,
		"hash": "694c2d94b3c6a6400af69085bad01a2d5015e5c8c1673e063ef63dc01c4be914"
	},
	{
		"id": "4029d11e839d",
		"ts": "2026-07-24T22:09:43.309Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 85468.86,
		"hash": "4029d11e839dc1290796b83bd40a658fad3ffde85e982167171c1dafb1aeb026"
	},
	{
		"id": "53eced76ea95",
		"ts": "2026-07-24T22:09:43.507Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4621447.71,
		"hash": "53eced76ea95a168331879df82c675f15ab3aa0b3a9f0410d27d1603005d9f82"
	},
	{
		"id": "a6bfab91c762",
		"ts": "2026-07-24T22:09:43.743Z",
		"symbol": "AUTONO",
		"token": "0xB3D7e0c3C39A1D3F1B304663065A2F83Ddf56d8e",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 661599.72,
		"hash": "a6bfab91c7628e0dd78c8e3b31b15a826c0ff4fc2515cebc2141f8c394650fe9"
	},
	{
		"id": "d9fe97368f4a",
		"ts": "2026-07-24T22:09:43.956Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 496712.07,
		"hash": "d9fe97368f4ae22dc6bbb13c430d21bd1785c781c9e755d4c5bf418897a121db"
	},
	{
		"id": "45dd5feeeb12",
		"ts": "2026-07-24T22:09:44.138Z",
		"symbol": "VBEEF",
		"token": "0x10d991B3F8f04d552597d95de80d86Fc29a77b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 58344.63,
		"hash": "45dd5feeeb125e30631cd166f7d9d901bffa7079f240100fde140e4c3ace053d"
	},
	{
		"id": "f8df1d822342",
		"ts": "2026-07-24T20:58:33.847Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109654990.52,
		"hash": "f8df1d8223425068593a1d93966c6ccc0c1d568f1f67c179e62e0abaae851b97"
	},
	{
		"id": "9ef3df6a1181",
		"ts": "2026-07-24T20:58:34.344Z",
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
		"liquidityUsd": 16918966.69,
		"hash": "9ef3df6a11818af30ab4859f9c62414de30e1d2ff3ece42c177cc149e0eba222"
	},
	{
		"id": "9c7ab3b55944",
		"ts": "2026-07-24T20:58:34.603Z",
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
		"liquidityUsd": 825540.32,
		"hash": "9c7ab3b55944c5b816f1b788b02fcb909eef9b7c0cc8754ff48fb258eb0c1e29"
	},
	{
		"id": "3b8b3272c04d",
		"ts": "2026-07-24T20:58:34.855Z",
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
		"liquidityUsd": 25476673.67,
		"hash": "3b8b3272c04dd04c547e5fbf2a60f4d34107ac59b5f1b21371f119cae2ac3c5a"
	},
	{
		"id": "e779a64fdda7",
		"ts": "2026-07-24T20:58:35.118Z",
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
		"liquidityUsd": 4974320.99,
		"hash": "e779a64fdda783e7a27bc2c79e62381b1e014642d66471b233050762916046c4"
	},
	{
		"id": "dd8c9409a37a",
		"ts": "2026-07-24T20:58:35.381Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 935908.93,
		"hash": "dd8c9409a37acb60c327f9ee96b53f1688168ec60d6d2e3f0c532df5174a28d9"
	},
	{
		"id": "4428d33e6f96",
		"ts": "2026-07-24T20:58:35.638Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25476673.67,
		"hash": "4428d33e6f9686cdaade521e99e0428578eddd88157e01df05025a86f71c4783"
	},
	{
		"id": "34350a92e4f8",
		"ts": "2026-07-24T20:58:35.886Z",
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
		"liquidityUsd": 2363982.67,
		"hash": "34350a92e4f8d8e72f78de56cd6c8d1f46fde29a84f0289077034197d0d261af"
	},
	{
		"id": "9ccec0847e0e",
		"ts": "2026-07-24T20:58:36.135Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3040767.94,
		"hash": "9ccec0847e0e76f040625238a46e6cc27e38840583554a83b84c7458b2b2ae70"
	},
	{
		"id": "cb068d3ea38c",
		"ts": "2026-07-24T20:58:36.386Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 308552.4,
		"hash": "cb068d3ea38ce91c607d7969b4e6c8da9a2af6aee47f2a24f1f72b6ce3ae2c00"
	},
	{
		"id": "33a6c39bb8bf",
		"ts": "2026-07-24T20:58:36.619Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 717313.39,
		"hash": "33a6c39bb8bfc03335ecf53bfbd9f70621898b7b8796320f4a9b154097b5305d"
	},
	{
		"id": "c508a22bf2c8",
		"ts": "2026-07-24T20:58:36.850Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 82670.02,
		"hash": "c508a22bf2c8f2ea3ac469bf97a2630a948235315260023f9eabacfc2e97669b"
	},
	{
		"id": "4fa59b6e76ba",
		"ts": "2026-07-24T20:58:37.081Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1043980.81,
		"hash": "4fa59b6e76ba34f1e1db86e72499a93b944e86a32f5097f4d0ee41aab2e523cc"
	},
	{
		"id": "5beace0d961f",
		"ts": "2026-07-24T20:58:37.312Z",
		"symbol": "AUTONO",
		"token": "0xB3D7e0c3C39A1D3F1B304663065A2F83Ddf56d8e",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 661796.53,
		"hash": "5beace0d961f69cf8a4bea08acf5a269b816096fc72c2b8a47f6ee317ef58312"
	},
	{
		"id": "1a685f7061b9",
		"ts": "2026-07-24T20:58:37.544Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 497689.19,
		"hash": "1a685f7061b9418c526eac83a4d9f3001584b6828878e5facc9480127be87141"
	},
	{
		"id": "17c336e258ff",
		"ts": "2026-07-24T20:58:37.776Z",
		"symbol": "VBEEF",
		"token": "0x10d991B3F8f04d552597d95de80d86Fc29a77b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 58729.66,
		"hash": "17c336e258ff007dd0757db8e85e5012e0c5f2708b14555c6c0628db739afa3d"
	},
	{
		"id": "bb7b15d289ff",
		"ts": "2026-07-24T19:19:15.505Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109682414.45,
		"hash": "bb7b15d289ffee087f3ef193c5571474774633798c135bc900b083a6ef4d08fa"
	},
	{
		"id": "4801db09be06",
		"ts": "2026-07-24T19:19:15.764Z",
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
		"liquidityUsd": 15318341.85,
		"hash": "4801db09be06b290d8916ed205f312d17423adc350fe8861f8c98ccd10eb3d1e"
	},
	{
		"id": "e940755ceb1a",
		"ts": "2026-07-24T19:19:16.229Z",
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
		"liquidityUsd": 825453.15,
		"hash": "e940755ceb1afe50c267ab4816a104ae690314818c9448d1e41f401982cd8b8f"
	},
	{
		"id": "cd3e4feb0b64",
		"ts": "2026-07-24T19:19:16.601Z",
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
		"liquidityUsd": 25422964.94,
		"hash": "cd3e4feb0b64de2d1462ed96344c21448944146bc3654ced7a0f36e0c372d3ef"
	},
	{
		"id": "8a51e306c122",
		"ts": "2026-07-24T19:19:17.097Z",
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
		"liquidityUsd": 4980762.02,
		"hash": "8a51e306c12210f8579bac61cf6275f6111ab71b18080d500a66250c280cee54"
	},
	{
		"id": "6fb936477411",
		"ts": "2026-07-24T19:19:17.345Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 934065.66,
		"hash": "6fb9364774112a5647b89808f6b9c052b5196105462893e5a57a71ac535bd28e"
	},
	{
		"id": "8bc8329ef9f5",
		"ts": "2026-07-24T19:19:17.580Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25422964.94,
		"hash": "8bc8329ef9f57af6b87e17175db4cf7caeb511916f9a38cef827e36c4f257c08"
	},
	{
		"id": "242f872b94fb",
		"ts": "2026-07-24T19:19:17.868Z",
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
		"liquidityUsd": 2359763.23,
		"hash": "242f872b94fbf99b26b67c263bd9d60c53e6f5c0034a544bfba6aef869d47ed4"
	},
	{
		"id": "562bd84e08e1",
		"ts": "2026-07-24T19:19:18.113Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3036083.89,
		"hash": "562bd84e08e13dc02f7a05ce12ae620e875bf7ed765b7f552acc926a1e9d8483"
	},
	{
		"id": "1269ee48183f",
		"ts": "2026-07-24T19:19:18.358Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 308450.12,
		"hash": "1269ee48183f8e81fed9318502da3d07d0917c09fe37f15d7e577fdb91f81104"
	},
	{
		"id": "081c5f102196",
		"ts": "2026-07-24T19:19:18.592Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 716265.41,
		"hash": "081c5f1021962160d75c999fb7bd5a917dc664789b8ad708f1c0e8a2e942dd97"
	},
	{
		"id": "a7344bd5cb1c",
		"ts": "2026-07-24T19:19:18.818Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 84738.8,
		"hash": "a7344bd5cb1c64e7d1a1bb8c60c06a170d843870c3a061c63c04d3d91c3b6334"
	},
	{
		"id": "18b47f0445b6",
		"ts": "2026-07-24T19:19:19.039Z",
		"symbol": "VBEEF",
		"token": "0x10d991B3F8f04d552597d95de80d86Fc29a77b07",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 75200.92,
		"hash": "18b47f0445b6f842b3389a4d8dac7813de8eae693b308dc33f1b15d92049d63e"
	},
	{
		"id": "037863d3efca",
		"ts": "2026-07-24T19:19:19.302Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1832478.76,
		"hash": "037863d3efcaaf6312cc25403ad0fc439efcda12ea4057beb8582f11aaa98ceb"
	},
	{
		"id": "5aac04f5dd19",
		"ts": "2026-07-24T19:19:19.528Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1184208.78,
		"hash": "5aac04f5dd19edb21dc411fab28e2e3649e3aa7328070bdd63dedab505821a6e"
	},
	{
		"id": "8e1dc651b014",
		"ts": "2026-07-24T19:19:19.750Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4648289.25,
		"hash": "8e1dc651b0140ac40fae030db84c0518bd743a36e3cd645598964302d795f905"
	},
	{
		"id": "39af1b8587e6",
		"ts": "2026-07-24T17:26:19.781Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109544965.33,
		"hash": "39af1b8587e654e8d93c5fa69cdff83d8f0d8b4e341255a4c29770602046bae1"
	},
	{
		"id": "4fbab5f75059",
		"ts": "2026-07-24T17:26:20.132Z",
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
		"liquidityUsd": 16940574.77,
		"hash": "4fbab5f750591ece02891c740ba2005def455d1b4f980e43ae8a6d9beda2c0fe"
	},
	{
		"id": "31aa41bb263d",
		"ts": "2026-07-24T17:26:20.343Z",
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
		"liquidityUsd": 827514.3,
		"hash": "31aa41bb263d14ad33b5f967da0c8a3a02df3c1528dce87cf8bcad5e54194c64"
	},
	{
		"id": "b9b467d6d468",
		"ts": "2026-07-24T17:26:20.542Z",
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
		"liquidityUsd": 25495937.95,
		"hash": "b9b467d6d4687a395ecffceb45934ce89bbc609f87dd53af585137d080395923"
	},
	{
		"id": "fd68ebf3565d",
		"ts": "2026-07-24T17:26:20.746Z",
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
		"liquidityUsd": 4980762.02,
		"hash": "fd68ebf3565d256fb9e76fbbdaed033ac8c0f6641877689e1eb9ebe0da7a2bf0"
	},
	{
		"id": "8e0e7b5d9716",
		"ts": "2026-07-24T17:26:20.950Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 929737.69,
		"hash": "8e0e7b5d971601b0a2ecff177a6c6e20926e1cc88d1b2e580e2c923916d599aa"
	},
	{
		"id": "f0aa629d609c",
		"ts": "2026-07-24T17:26:21.202Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25495937.95,
		"hash": "f0aa629d609cc9445afe5f432f677553a4dd756dfc078b9aca696ed2c1fc0382"
	},
	{
		"id": "68c9f2048ab3",
		"ts": "2026-07-24T17:26:21.430Z",
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
		"liquidityUsd": 2362942.39,
		"hash": "68c9f2048ab319e83575a9b3cf187e0e635122e1d79147daa508cfe36106dafa"
	},
	{
		"id": "2c925987cd85",
		"ts": "2026-07-24T17:26:21.649Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3116410.75,
		"hash": "2c925987cd85b52fd153ea1951f5e82f2f721526fdc3142c77dd994403545c3c"
	},
	{
		"id": "1532c65e4cd1",
		"ts": "2026-07-24T17:26:21.860Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 305662.76,
		"hash": "1532c65e4cd1a0b0411998bc4ae92257e772806b37d96a6dc469d4486dfc22a6"
	},
	{
		"id": "2bab3c79b70b",
		"ts": "2026-07-24T17:26:22.088Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 730933.3,
		"hash": "2bab3c79b70b5594918629c380f9806d152e8c63f08742e051581527d26a3910"
	},
	{
		"id": "da9e3c06ed84",
		"ts": "2026-07-24T17:26:22.278Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 82345.55,
		"hash": "da9e3c06ed84d9f8249a5ca01a89c0a3d8dc21319f0aff3f4ca36b9bb489abfa"
	},
	{
		"id": "d49826c46456",
		"ts": "2026-07-24T17:26:22.463Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1842423.69,
		"hash": "d49826c4645600292aee9a02e9db4b94b4757b91444c6c46fe20e44cbda77090"
	},
	{
		"id": "6bb2a166ca78",
		"ts": "2026-07-24T17:26:22.637Z",
		"symbol": "VBEEF",
		"token": "0x10d991B3F8f04d552597d95de80d86Fc29a77b07",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 77554.5,
		"hash": "6bb2a166ca783295b3438ca74c88da3ea160a3dcfab0bd3b4506b848b389f089"
	},
	{
		"id": "9b34afaee2b6",
		"ts": "2026-07-24T17:26:22.816Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9688348.02,
		"hash": "9b34afaee2b65e8a365d4f5636235f11b4d3fb6cb3f69ab49e0af7219e8f28e8"
	},
	{
		"id": "f38eb8c8de91",
		"ts": "2026-07-24T17:26:23.008Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1190582.74,
		"hash": "f38eb8c8de9161852d853edbdf145a048838f496a6b979a75e1589dea063d279"
	},
	{
		"id": "c8cd62f758c8",
		"ts": "2026-07-24T15:22:29.900Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109402883.47,
		"hash": "c8cd62f758c8efff1cbbf90b9fd7463791b01e416b9927738d9060d653001ac8"
	},
	{
		"id": "4ff58185040d",
		"ts": "2026-07-24T15:22:30.350Z",
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
		"liquidityUsd": 16330856.47,
		"hash": "4ff58185040de6c627c31965e976550d6d57c43ffbce39d8241904d7741800e3"
	},
	{
		"id": "6fa498f98e66",
		"ts": "2026-07-24T15:22:30.807Z",
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
		"liquidityUsd": 820829.7,
		"hash": "6fa498f98e66a1a8c3a3d51a3feb4409d8b0a5dc554d2f566c6bd86676075ed8"
	},
	{
		"id": "a4375ea2d1fb",
		"ts": "2026-07-24T15:22:31.280Z",
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
		"liquidityUsd": 25459406.4,
		"hash": "a4375ea2d1fb13c04f829452dcb038daba32407d2d15b2deca53cbdf2d0fe8b7"
	},
	{
		"id": "788af1c78b22",
		"ts": "2026-07-24T15:22:31.522Z",
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
		"liquidityUsd": 4946170.62,
		"hash": "788af1c78b224f59c7a2412ceca723a4e1552d8dabfb60684e35678ebdbc6632"
	},
	{
		"id": "f1a56c485305",
		"ts": "2026-07-24T15:22:31.768Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 927629.5,
		"hash": "f1a56c4853050d4a2c3c2808e80c0fd76277655ed3a1f774bead7262513aa681"
	},
	{
		"id": "3d182cdfcf66",
		"ts": "2026-07-24T15:22:32.016Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25459406.4,
		"hash": "3d182cdfcf6615eac9ce76fab10e3ce720e8886ca931a244e505d69ac3b50fb8"
	},
	{
		"id": "179c6d976af9",
		"ts": "2026-07-24T15:22:32.261Z",
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
		"liquidityUsd": 2363349.97,
		"hash": "179c6d976af9bf518ce8ac5adb1506952af409d94b8f60258c63f6cb205a1bb1"
	},
	{
		"id": "dc7b8522221a",
		"ts": "2026-07-24T15:22:32.511Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3116068.29,
		"hash": "dc7b8522221a4371dd4b005e87374b823900f4dcb14af0eaa28de714168810d9"
	},
	{
		"id": "570e071dd277",
		"ts": "2026-07-24T15:22:32.767Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 308816.42,
		"hash": "570e071dd27745025595ddd08ba822d3ccacb9da6a15642ecbe844398527ec3d"
	},
	{
		"id": "e781042be9c9",
		"ts": "2026-07-24T15:22:32.991Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 82365.24,
		"hash": "e781042be9c9dd421f9103eb2e2220bd0e74e6f47574e6209375efdaf08f805b"
	},
	{
		"id": "e5cc741feb0f",
		"ts": "2026-07-24T15:22:33.222Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 750588.81,
		"hash": "e5cc741feb0fdb0234941a26b45a121ad592d15c70c1bdb88e2322bf9399f21e"
	},
	{
		"id": "73ab40f821af",
		"ts": "2026-07-24T15:22:33.464Z",
		"symbol": "MOLT",
		"token": "0xB695559b26BB2c9703ef1935c37AeaE9526bab07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 996214.5,
		"hash": "73ab40f821af10b83ee2d5a762b49338663171247373d1748068dc299723f187"
	},
	{
		"id": "0524b6ee1781",
		"ts": "2026-07-24T15:22:33.691Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1857449.61,
		"hash": "0524b6ee1781390bf27cd9252193296b3c35cc9750ba1f360be6acab45f28118"
	},
	{
		"id": "aa1efdd77d15",
		"ts": "2026-07-24T15:22:33.923Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1967191.32,
		"hash": "aa1efdd77d15e4d38c8a6014910645abce1a61913104d1484e1c44f82b2a308b"
	},
	{
		"id": "6596a2458065",
		"ts": "2026-07-24T15:22:34.160Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 79373.8,
		"hash": "6596a24580659a658775c1e4e39b56607e18b4a3f9d1300dd4871bc01d1ddf2b"
	},
	{
		"id": "db0007e1e4b0",
		"ts": "2026-07-24T13:28:36.114Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109549864.01,
		"hash": "db0007e1e4b0ebe6d9163e9073f45c5fc0570809400537b5ebb5e12f81ac1396"
	},
	{
		"id": "53573ed577a8",
		"ts": "2026-07-24T13:28:36.555Z",
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
		"liquidityUsd": 16244388.42,
		"hash": "53573ed577a8a96b447b2266f5ac5560c3a395dcea1dd129ce11d447ab0fef1c"
	},
	{
		"id": "58fd7ced56d7",
		"ts": "2026-07-24T13:28:37.027Z",
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
		"liquidityUsd": 811757.74,
		"hash": "58fd7ced56d76588c6bfd1cae411a6ba51459c531131d9bc8ba996fea3160d58"
	},
	{
		"id": "50c1af24eefa",
		"ts": "2026-07-24T13:28:37.293Z",
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
		"liquidityUsd": 25631379.6,
		"hash": "50c1af24eefa0a5f74d1b283daaf7e388fbd84f08e5fbcb09012498db4150912"
	},
	{
		"id": "fcaed00faaba",
		"ts": "2026-07-24T13:28:37.535Z",
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
		"liquidityUsd": 5013131.3,
		"hash": "fcaed00faabae3bda7d60da35503966341b5990d0e236e2ddb3922983eec3d52"
	},
	{
		"id": "7b0c6c3059ed",
		"ts": "2026-07-24T13:28:37.784Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 937723.03,
		"hash": "7b0c6c3059ed576eb1a27e3f007f86721073575bd9c5f2e1a6866ce1a4004db1"
	},
	{
		"id": "b381de756ef0",
		"ts": "2026-07-24T13:28:38.023Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3195099.5,
		"hash": "b381de756ef0a852b2daebeb386df05ac336c169d32348837295b175aa47ad70"
	},
	{
		"id": "586c8d4db4b9",
		"ts": "2026-07-24T13:28:38.280Z",
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
		"liquidityUsd": 2443470.54,
		"hash": "586c8d4db4b939d115a4c7b4a26c3ff5af2ca2e744d12dd6ccf325a31807a656"
	},
	{
		"id": "ba020982b0cf",
		"ts": "2026-07-24T13:28:38.525Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3195099.5,
		"hash": "ba020982b0cf26221651d1085700258c8dfebe4327f1b22da098058664b979a5"
	},
	{
		"id": "d6fd22cd67b9",
		"ts": "2026-07-24T13:28:38.762Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 312072.07,
		"hash": "d6fd22cd67b9fbd7369f068f8000728f799b615718df116e0c33ec7806a4c223"
	},
	{
		"id": "e65ca7e88672",
		"ts": "2026-07-24T13:28:38.984Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 87245.77,
		"hash": "e65ca7e88672fb14ca64b574fa4c3ed09b3eb803471e4ba53f38e368889c9d39"
	},
	{
		"id": "0efbc7ec5ccf",
		"ts": "2026-07-24T13:28:39.234Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 756268.79,
		"hash": "0efbc7ec5ccfbbee7730488a72d0fe0162d00b5473752bb92b24cb8ec13d5b7b"
	},
	{
		"id": "ad238111c7b1",
		"ts": "2026-07-24T13:28:39.460Z",
		"symbol": "MOLT",
		"token": "0xB695559b26BB2c9703ef1935c37AeaE9526bab07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1004604.41,
		"hash": "ad238111c7b15f8b46de1480b047a39a47fef6cfd9b9e24fdaaa83007dff4df1"
	},
	{
		"id": "5a12316216b8",
		"ts": "2026-07-24T13:28:39.680Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1863346.55,
		"hash": "5a12316216b8b3abd4158e3e54fe53bbb50f0ac7cdbe17fe66c85251c1363d61"
	},
	{
		"id": "1d9a2c56326b",
		"ts": "2026-07-24T13:28:39.902Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4750492.3,
		"hash": "1d9a2c56326b6ac75438db1721e0d9d4f3c99777f97bcd05205a38f38a6931e2"
	},
	{
		"id": "6aabf539b7f9",
		"ts": "2026-07-24T13:28:40.122Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1951506.57,
		"hash": "6aabf539b7f993d72904d7b1e47bb8ba388a4321001ce64d08ee02bdee7059f0"
	},
	{
		"id": "4b238a0d78f0",
		"ts": "2026-07-24T11:02:08.887Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110123245.82,
		"hash": "4b238a0d78f04329a66692e6f370c3608d6a98776df55c8ab0bcef2e4678d345"
	},
	{
		"id": "7cad8dcb74bf",
		"ts": "2026-07-24T11:02:09.087Z",
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
		"liquidityUsd": 17183253.07,
		"hash": "7cad8dcb74bf39472c2ce1f6c079b15a9ce6ed25be9f3fda0f50e85c2609cee7"
	},
	{
		"id": "b941e56e7063",
		"ts": "2026-07-24T11:02:09.283Z",
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
		"liquidityUsd": 820081.82,
		"hash": "b941e56e7063fe1724de41234db92f17db0c35dde34f8cf13d17326b88a4b32e"
	},
	{
		"id": "0550b3b059ce",
		"ts": "2026-07-24T11:02:09.470Z",
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
		"liquidityUsd": 25783999.31,
		"hash": "0550b3b059ce9b4499130fb834ba9e59e89e0bd99bc98279f7e2f6acdaca9ff2"
	},
	{
		"id": "57870bb6b75f",
		"ts": "2026-07-24T11:02:09.669Z",
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
		"liquidityUsd": 5074980.81,
		"hash": "57870bb6b75f5865eecaac9bbccedc1ccfd52dd04e7f08522d059589c7612624"
	},
	{
		"id": "ed5f39f1d833",
		"ts": "2026-07-24T11:02:09.866Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 940514.37,
		"hash": "ed5f39f1d83376f7c943568ce5f4c43353119c4cf64b2775ed4839faa3a690bd"
	},
	{
		"id": "5abbc771631b",
		"ts": "2026-07-24T11:02:10.052Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3233274.54,
		"hash": "5abbc771631b1062d74c9c1a096df8413c67b121866e6c0b0e8128c5e1dd3e12"
	},
	{
		"id": "133aad7603a1",
		"ts": "2026-07-24T11:02:10.348Z",
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
		"liquidityUsd": 2464072.89,
		"hash": "133aad7603a1fe0d2fed809f41b8d8ed8eb047cdeb89f9c64704008744744449"
	},
	{
		"id": "fbb49ad4f792",
		"ts": "2026-07-24T11:02:10.539Z",
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
		"liquidityUsd": 3233274.63,
		"hash": "fbb49ad4f792cb344db09c51e963aa416b4e8d8014b0de6d7267c59630a09fae"
	},
	{
		"id": "f6a583038539",
		"ts": "2026-07-24T11:02:10.796Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 313071.63,
		"hash": "f6a583038539bf844266d1e8a806e66792d186bc0b475dd476eafd52968ee630"
	},
	{
		"id": "a7e09bd292e5",
		"ts": "2026-07-24T11:02:10.970Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1925905.54,
		"hash": "a7e09bd292e5690e3032ec7b2a8507030cc78da040879b0a94b31ae4d6f53277"
	},
	{
		"id": "504da54e145f",
		"ts": "2026-07-24T11:02:11.155Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 84998.34,
		"hash": "504da54e145f533e92fff0df53717c112a32945dad7b5b8a302c3e93205f975a"
	},
	{
		"id": "910bfc01e78d",
		"ts": "2026-07-24T11:02:11.330Z",
		"symbol": "MOLT",
		"token": "0xB695559b26BB2c9703ef1935c37AeaE9526bab07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1013753.48,
		"hash": "910bfc01e78d0bea91253ef78186f0220df1343ec6e8c1dba9f5983597b260e2"
	},
	{
		"id": "5399bee86448",
		"ts": "2026-07-24T11:02:11.677Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 717555.77,
		"hash": "5399bee8644824c04f00d77cc87e2b0c56c197699b653f80a0dc297ed010cdd5"
	},
	{
		"id": "f1e6073de526",
		"ts": "2026-07-24T11:02:11.854Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4794950.88,
		"hash": "f1e6073de526d3046b1dda8acb434b770bb7030b16b7306d83931ac37b27db50"
	},
	{
		"id": "38b9260c7bfe",
		"ts": "2026-07-24T11:02:12.035Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1989073.59,
		"hash": "38b9260c7bfe2099a9f97ec3ab8d04b4fab701bc4ce62406db37b5c8d53b1944"
	},
	{
		"id": "2c79284fcd5a",
		"ts": "2026-07-24T08:21:13.769Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110469131.3,
		"hash": "2c79284fcd5ab825e95723a6cb4ce351d260cfacf150adac7aa54c0e83ec0774"
	},
	{
		"id": "bf00bf168bfb",
		"ts": "2026-07-24T08:21:14.018Z",
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
		"liquidityUsd": 15849026.08,
		"hash": "bf00bf168bfbc6dc8e4519884aa3cd2ec7302a913eb9107443ab349c856bd641"
	},
	{
		"id": "aba8c2ea0ff9",
		"ts": "2026-07-24T08:21:14.489Z",
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
		"liquidityUsd": 815979.43,
		"hash": "aba8c2ea0ff9ff668b1a0cc42d563871ca9a258e7502ffc001d6a740fca2d5eb"
	},
	{
		"id": "5961b3880be4",
		"ts": "2026-07-24T08:21:14.727Z",
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
		"liquidityUsd": 26059444.49,
		"hash": "5961b3880be451a90994e76985b5abe6861eea54f9af4aae32b6e98a55739b19"
	},
	{
		"id": "08cf0326f74e",
		"ts": "2026-07-24T08:21:14.971Z",
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
		"liquidityUsd": 5111886.89,
		"hash": "08cf0326f74edef12bed55effc10b6eeabc6b9d892b7bd7dd59ddbd6c52abfdf"
	},
	{
		"id": "46ca9a2d4590",
		"ts": "2026-07-24T08:21:15.216Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 951440.82,
		"hash": "46ca9a2d4590dafa2d43b5fc111c89c314b7e14e8bf2544ced5fd0b1df4b5ce5"
	},
	{
		"id": "02bcb4fba66a",
		"ts": "2026-07-24T08:21:15.448Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3268098.66,
		"hash": "02bcb4fba66a9ced3d50e58807c3a6c9b4a54928c8367ac8c0f1b658a834c444"
	},
	{
		"id": "72bb7879c85e",
		"ts": "2026-07-24T08:21:15.692Z",
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
		"liquidityUsd": 3328928.51,
		"hash": "72bb7879c85e9ba679489bd0dcfd4a7b2532a2fc314fd168aae7e3fe3c12ebf9"
	},
	{
		"id": "be1629196f6c",
		"ts": "2026-07-24T08:21:15.932Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 312655.19,
		"hash": "be1629196f6cc0de8e9a7a5137a68cc0ff2665b44cb74064ed4d3814ca80b0b2"
	},
	{
		"id": "4cb3a659a707",
		"ts": "2026-07-24T08:21:16.167Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1947194.4,
		"hash": "4cb3a659a7079e014b7fe3c381deccf221f2422c4f06ba09137537b9ebb59424"
	},
	{
		"id": "37b5261fe925",
		"ts": "2026-07-24T08:21:16.393Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3268098.66,
		"hash": "37b5261fe925ca983d64f4e55d33448df4b819acc3c5c26ef1e907c3ec103a78"
	},
	{
		"id": "5bd61acb30b6",
		"ts": "2026-07-24T08:21:16.616Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 84244.13,
		"hash": "5bd61acb30b6fe31e4932fbc6af8f78ec550c7555a05bc7bc3522d00b79d4397"
	},
	{
		"id": "5b5ddf34f66e",
		"ts": "2026-07-24T08:21:16.833Z",
		"symbol": "MOLT",
		"token": "0xB695559b26BB2c9703ef1935c37AeaE9526bab07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1021364.62,
		"hash": "5b5ddf34f66e2d3f6dcdcce171dc46be37ecda291775397e2a16e4bbba15d86c"
	},
	{
		"id": "b1468ac31d52",
		"ts": "2026-07-24T08:21:17.059Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 715229.42,
		"hash": "b1468ac31d52ae34ee75af398eee591689707e27f3c859ab01fce56c01ff6265"
	},
	{
		"id": "c607008f657b",
		"ts": "2026-07-24T08:21:17.283Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4819524.46,
		"hash": "c607008f657bd50d0f14b1ecddd947920d0894c164a1a90ce8a2a9d4e0482345"
	},
	{
		"id": "90e3b9c44c0e",
		"ts": "2026-07-24T08:21:17.501Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2009514.81,
		"hash": "90e3b9c44c0e612992912d4754bcc44df88858a7fb7a96eae1d9b5fb2e2f9cf5"
	},
	{
		"id": "4f20c3799ff2",
		"ts": "2026-07-24T05:47:16.201Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109705472.82,
		"hash": "4f20c3799ff2590eade4097759b9d2cfb533c3d667ccd9474c4fcdb7b80b4bc6"
	},
	{
		"id": "6acb71ec7fa5",
		"ts": "2026-07-24T05:47:16.728Z",
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
		"liquidityUsd": 17425612.9,
		"hash": "6acb71ec7fa5cb551f71aff9f3ff91d9264a1ce6ad25f0d38e32839ce878b4be"
	},
	{
		"id": "896716d49f45",
		"ts": "2026-07-24T05:47:16.972Z",
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
		"liquidityUsd": 811762.19,
		"hash": "896716d49f457ccee196d14492e98db0d24ea21466d1aa8fd6206b735eed2871"
	},
	{
		"id": "76e6c8f4a675",
		"ts": "2026-07-24T05:47:17.215Z",
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
		"liquidityUsd": 26029845.81,
		"hash": "76e6c8f4a675bd020600ad3ec90d6a0d19d09ea841f83c8e50472a62495e663a"
	},
	{
		"id": "eedc3d4e94c4",
		"ts": "2026-07-24T05:47:17.456Z",
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
		"liquidityUsd": 5078398.43,
		"hash": "eedc3d4e94c450b2543737dcce3827c9cc7abb79fc1273e1774327c48508cd12"
	},
	{
		"id": "b210887334ab",
		"ts": "2026-07-24T05:47:17.701Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 952126.3,
		"hash": "b210887334ab7190262b8d573acb21901d108d71c1e3c5bec4a4c4de214a040b"
	},
	{
		"id": "c9c1eb720a75",
		"ts": "2026-07-24T05:47:17.939Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26029845.81,
		"hash": "c9c1eb720a756266c871631870f508926fedf87c6970aecdf012365a6662ce70"
	},
	{
		"id": "6b2b4d88c2c9",
		"ts": "2026-07-24T05:47:18.179Z",
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
		"liquidityUsd": 2465903.57,
		"hash": "6b2b4d88c2c93baf971b276667bcea750233e2b8b40cdb7c59f3b7a48f2a734e"
	},
	{
		"id": "4191197571b0",
		"ts": "2026-07-24T05:47:18.417Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1933789.87,
		"hash": "4191197571b0d3f33d76e5cd4469cc5ade0650ad22d7ad9ffab64a55311a0130"
	},
	{
		"id": "892730978da3",
		"ts": "2026-07-24T05:47:18.655Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 317140.39,
		"hash": "892730978da3e2e4193b61b35b1e38462fcb12ce21bf2451c3fdb26d963958fd"
	},
	{
		"id": "fe8fc230b186",
		"ts": "2026-07-24T05:47:18.879Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3082869.69,
		"hash": "fe8fc230b1869a6c80e5590e4949242ec503fa06847bd8732a17257071383b96"
	},
	{
		"id": "7861544dd354",
		"ts": "2026-07-24T05:47:19.102Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 89310.66,
		"hash": "7861544dd3541afe800ebeb22c35864ef259423cfce2d8f9f4aa15ebff572f23"
	},
	{
		"id": "d0e5df51c044",
		"ts": "2026-07-24T05:47:19.324Z",
		"symbol": "MOLT",
		"token": "0xB695559b26BB2c9703ef1935c37AeaE9526bab07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1014739.84,
		"hash": "d0e5df51c044e7b3936f977d24111d5a5eec567e1059d139e1b7364f54c1b2cb"
	},
	{
		"id": "2a661b73309b",
		"ts": "2026-07-24T05:47:19.548Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4768822.85,
		"hash": "2a661b73309bf293ce10fe1140fcc4874512e2e44f9c447ecd64423cb0ab7c0c"
	},
	{
		"id": "4cf6f095307f",
		"ts": "2026-07-24T05:47:19.773Z",
		"symbol": "CHECK",
		"token": "0x9126236476eFBA9Ad8aB77855c60eB5BF37586Eb",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 30728281.08,
		"hash": "4cf6f095307f9dd4f688868ff4879ee7d58a9903a5afb006ee35d7605b62e9c1"
	},
	{
		"id": "7e428225feb0",
		"ts": "2026-07-24T05:47:19.997Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1991429.81,
		"hash": "7e428225feb0011e52baccdd647c08886f941a89f63f03deb2ce4779d7d93ba7"
	},
	{
		"id": "d43976038fa1",
		"ts": "2026-07-24T02:41:34.889Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109552830.35,
		"hash": "d43976038fa143ff279f685cd36536eca8b29a3c81d6d338873a34d1212ed209"
	},
	{
		"id": "a175a6f4fda0",
		"ts": "2026-07-24T02:41:35.369Z",
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
		"liquidityUsd": 17352650.65,
		"hash": "a175a6f4fda0b792b489e7e50732d844839e52b49ac532761606c77a28ab0a0b"
	},
	{
		"id": "533f83b2238d",
		"ts": "2026-07-24T02:41:35.631Z",
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
		"liquidityUsd": 807554.23,
		"hash": "533f83b2238d1bca7987368366c2e4a52365fa0672956176713b1c0e908654e2"
	},
	{
		"id": "3081cd2b6998",
		"ts": "2026-07-24T02:41:36.096Z",
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
		"liquidityUsd": 26205382.29,
		"hash": "3081cd2b699817ff6245f8c90273419b50d7168bf30f7cd1e30df563408ee53e"
	},
	{
		"id": "51daf11b1aff",
		"ts": "2026-07-24T02:41:36.347Z",
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
		"liquidityUsd": 5057989.69,
		"hash": "51daf11b1aff5670d93a93728ad0b0e3e4cbad2d53775b767ba533c5134e4027"
	},
	{
		"id": "aa7851a11513",
		"ts": "2026-07-24T02:41:36.601Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 945331.8,
		"hash": "aa7851a115133a9ad18400ad36d18df77435e62a9d0201662449937354c9769b"
	},
	{
		"id": "7ffed645fec6",
		"ts": "2026-07-24T02:41:36.854Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26205382.29,
		"hash": "7ffed645fec64dae7f4298a8f2dcdddfaa96104552230139ab54785bbd90ec6f"
	},
	{
		"id": "632127f6328c",
		"ts": "2026-07-24T02:41:37.116Z",
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
		"liquidityUsd": 2541499.49,
		"hash": "632127f6328c72deb79126a77c06fea83d922e964c74f946eec451184b4e2044"
	}
]
