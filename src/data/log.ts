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
	"updatedAt": "2026-10-09T16:52:44.409Z",
	"tokensScored": 19783,
	"verdictsIssued": 19783,
	"safe": 16855,
	"risky": 1414,
	"likelyRug": 1514,
	"ticks": 1121
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "4f043b1ef46d",
		"ts": "2026-10-09T16:52:40.276Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 147899702.92,
		"hash": "4f043b1ef46d17d498627550427dc7195394e6c2a7280595fc30f970c71151a9"
	},
	{
		"id": "806c80f2fbc1",
		"ts": "2026-10-09T16:52:40.768Z",
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
		"liquidityUsd": 18084645.26,
		"hash": "806c80f2fbc14350d1556d305931309389d81de5cec3f13c2c334d64c68c4a08"
	},
	{
		"id": "bda5256fabed",
		"ts": "2026-10-09T16:52:40.973Z",
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
		"liquidityUsd": 803130.98,
		"hash": "bda5256fabedc2ae8b43d1808338f9f5dba39e8e22dcae839258157437e4620f"
	},
	{
		"id": "234d15380dcc",
		"ts": "2026-10-09T16:52:41.190Z",
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
		"liquidityUsd": 44056684.18,
		"hash": "234d15380dcc283dc55ac0a322578d17514bbf31657f3e02026281db74ec81d4"
	},
	{
		"id": "c135d282af8d",
		"ts": "2026-10-09T16:52:41.394Z",
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
		"liquidityUsd": 4789775.76,
		"hash": "c135d282af8de0a0b857c86e7ea1bd236edaac17ae2cde4be7983f92e4592437"
	},
	{
		"id": "0da777b7dccb",
		"ts": "2026-10-09T16:52:41.626Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1211881.37,
		"hash": "0da777b7dccb3de86ce0c6ed8c9bef26ce348d1c3a5d9b97eaf414d55fac52d9"
	},
	{
		"id": "dc3e33ce4279",
		"ts": "2026-10-09T16:52:41.842Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 44056684.18,
		"hash": "dc3e33ce42791413e989e9b5eb49f585abcc6ad603da5f44f4f121952dde690e"
	},
	{
		"id": "f2db4970abff",
		"ts": "2026-10-09T16:52:42.055Z",
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
		"liquidityUsd": 823840.53,
		"hash": "f2db4970abffac81ddb5f79ff24fdd36e369002c24a84d2719dd1c2b564f4884"
	},
	{
		"id": "639f672e1752",
		"ts": "2026-10-09T16:52:42.323Z",
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
		"liquidityUsd": 1900586.48,
		"hash": "639f672e17523bbb8f217dd6aba32d9d85ac48023aa83d37d8761cba676de1d4"
	},
	{
		"id": "a8f6008fb459",
		"ts": "2026-10-09T16:52:42.531Z",
		"symbol": "whuf",
		"token": "0xeeee77bC7e82c0d4166d52F58239D4c5Bf41eeee",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 311024.12,
		"hash": "a8f6008fb4595fe2caf819994d99e1041556021b45c2775042fa73bf10677cd1"
	},
	{
		"id": "1114998321f2",
		"ts": "2026-10-09T16:52:42.728Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 5644856.37,
		"hash": "1114998321f2c23e603e4578fa0a4b1ba940f75331c29f01639aa602fa562435"
	},
	{
		"id": "411adb199db7",
		"ts": "2026-10-09T16:52:42.942Z",
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
		"liquidityUsd": 15507147.26,
		"hash": "411adb199db7cbeba10492b7cc073cd3f4b5507d2b38ff4d13bb47e5a6653bd4"
	},
	{
		"id": "bd625e3a8145",
		"ts": "2026-10-09T16:52:43.130Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1537284.86,
		"hash": "bd625e3a8145d38515bd57b78899bce7e28c2b0313b0e595155dbb71597ff473"
	},
	{
		"id": "683b3029d85f",
		"ts": "2026-10-09T16:52:43.339Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1299123.78,
		"hash": "683b3029d85f964673830c7cd5ed3db248314b64826f2ac5cd7c6d9c963c3804"
	},
	{
		"id": "e55c51cecfdc",
		"ts": "2026-10-09T16:52:43.602Z",
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
		"liquidityUsd": 175848.75,
		"hash": "e55c51cecfdc574983b33b9b31f7291960f95dfd557c4bba301873b748ee6514"
	},
	{
		"id": "3d1eb25cadc1",
		"ts": "2026-10-09T16:52:43.841Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2162954.98,
		"hash": "3d1eb25cadc1fd00b0c4de0a191d042a0199a6fa663645a0b38dcd6bddce3b7e"
	},
	{
		"id": "7f418770e70f",
		"ts": "2026-10-09T16:52:44.019Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3996040.55,
		"hash": "7f418770e70f96831015c2f3d64760372ba6662a3942780df93d635f9b264044"
	},
	{
		"id": "cb75b4c05ab8",
		"ts": "2026-10-09T16:52:44.210Z",
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
		"liquidityUsd": 3392702.91,
		"hash": "cb75b4c05ab83799a148d056b2e12b87d55ebae258c5dac130539bfa9acb0c96"
	},
	{
		"id": "3e0571a9d7c1",
		"ts": "2026-10-09T16:52:44.409Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 359080.94,
		"hash": "3e0571a9d7c1821504718b17b373e16e0c8a0fa9add7ed88d190b1d2893e817b"
	},
	{
		"id": "dff1a45ae33c",
		"ts": "2026-10-09T09:58:05.786Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 147954134.59,
		"hash": "dff1a45ae33cbe1dc3893b267a5ba292a37a7af471fb5ec718b49184384a4dea"
	},
	{
		"id": "8cd100030c7e",
		"ts": "2026-10-09T09:58:06.040Z",
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
		"liquidityUsd": 15989312.07,
		"hash": "8cd100030c7e6ddc851dbd576caec293d5f6c85eaef96ed045bc0bf4c94ec336"
	},
	{
		"id": "2986f4c849fd",
		"ts": "2026-10-09T09:58:06.336Z",
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
		"liquidityUsd": 798089.36,
		"hash": "2986f4c849fd600000e1ecdad8a869535ab02cf0add92fb6e324caac9e0b9290"
	},
	{
		"id": "34e1a0ea65ec",
		"ts": "2026-10-09T09:58:06.586Z",
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
		"liquidityUsd": 44232445.95,
		"hash": "34e1a0ea65eccee8e7053f5d6ebef20f87f51b3631bd05f4ae1d5ea193e77891"
	},
	{
		"id": "1b876aa5a547",
		"ts": "2026-10-09T09:58:06.832Z",
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
		"liquidityUsd": 4812291.1,
		"hash": "1b876aa5a547c3ecbc05dc4e82900eb92a274be257eb0f9cb0dccd5dd520bb4c"
	},
	{
		"id": "5f4055ac9071",
		"ts": "2026-10-09T09:58:07.080Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1213515.42,
		"hash": "5f4055ac907109d9a7ca31957b65a77f008bdd4acfd6346e992010988dd7ff37"
	},
	{
		"id": "69f26bfc156a",
		"ts": "2026-10-09T09:58:07.329Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 143071.32,
		"hash": "69f26bfc156ae931191f1c8f64d06696a4b5228fec2d9b8fe97fb90dae7819d4"
	},
	{
		"id": "346f555c3edf",
		"ts": "2026-10-09T09:58:07.579Z",
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
		"liquidityUsd": 820746.78,
		"hash": "346f555c3edfc9cc6f6cef7ff7b122d800e7a93f48fe98abd232d59e2e78e1f8"
	},
	{
		"id": "f18366d2e319",
		"ts": "2026-10-09T09:58:07.828Z",
		"symbol": "whuf",
		"token": "0xeeee77bC7e82c0d4166d52F58239D4c5Bf41eeee",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 294731.38,
		"hash": "f18366d2e31988d15c62bd80f542ea5dfa61e70b21ea020148720d4085f4acff"
	},
	{
		"id": "45838d5816cf",
		"ts": "2026-10-09T09:58:08.076Z",
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
		"liquidityUsd": 15762575.2,
		"hash": "45838d5816cfb661d1771943f83f04855fb9b63a32fc7f725c1f3dc4a07f738b"
	},
	{
		"id": "323603548b3d",
		"ts": "2026-10-09T09:58:08.308Z",
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
		"liquidityUsd": 1862337.79,
		"hash": "323603548b3dbdb5e04d3edf0d1dd77342b6fe20f0f91cffbe8af84dbf6387ea"
	},
	{
		"id": "47d4d4df78b2",
		"ts": "2026-10-09T09:58:08.538Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1500860.99,
		"hash": "47d4d4df78b216de8c21a90f3b769ca136646add7a885d5aa3a645b460c04d9c"
	},
	{
		"id": "49f9ee3909a0",
		"ts": "2026-10-09T09:58:08.769Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 5477861.28,
		"hash": "49f9ee3909a07cd8397936c29eee40215cd3c62743a2faacd3e734a3fad446fe"
	},
	{
		"id": "9612ffd70f99",
		"ts": "2026-10-09T09:58:08.999Z",
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
		"liquidityUsd": 173638.66,
		"hash": "9612ffd70f99186654ac933e8c14b55c5df259c100a33bc9112ed19d7617048d"
	},
	{
		"id": "9413ef721492",
		"ts": "2026-10-09T09:58:09.229Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2221169.04,
		"hash": "9413ef7214927a570b10e1bab504bf4ec661aee136fe1856de5dd7e1035d164c"
	},
	{
		"id": "0f281c16ecbc",
		"ts": "2026-10-09T09:58:09.461Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1226098.05,
		"hash": "0f281c16ecbc7f971cf1336382674a6b6ee0a1940f77203b16e72e16b5af134e"
	},
	{
		"id": "08a6b1ba8db6",
		"ts": "2026-10-09T09:58:09.691Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3977279.17,
		"hash": "08a6b1ba8db619794423e6b42ac52a676846ebcbbc240235988f645ef7ff82f1"
	},
	{
		"id": "c6dca406e1c9",
		"ts": "2026-10-09T09:58:09.921Z",
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
		"liquidityUsd": 343590.74,
		"hash": "c6dca406e1c90c8ae83ebe1f7d4b463689d35495e7d9ceed982cfd9a975c4e3c"
	},
	{
		"id": "22f4f3e4cb30",
		"ts": "2026-10-09T09:58:10.151Z",
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
		"liquidityUsd": 3391327.83,
		"hash": "22f4f3e4cb30f65283a01995c8eb0afbba2b4cb9565d23459c83e1dd01009fe8"
	},
	{
		"id": "9c0feb84bf9e",
		"ts": "2026-10-09T02:43:46.191Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146931648.16,
		"hash": "9c0feb84bf9ed2f12b5aab7fb12021a502edcc30135674a275568ac5b646f85b"
	},
	{
		"id": "5cce214a56b9",
		"ts": "2026-10-09T02:43:46.462Z",
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
		"liquidityUsd": 15948588.5,
		"hash": "5cce214a56b9e9845769b5286345cbfc2a9ed583b48024d366b59eb7e67c1ede"
	},
	{
		"id": "45577929cdef",
		"ts": "2026-10-09T02:43:46.716Z",
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
		"liquidityUsd": 787331.17,
		"hash": "45577929cdef076180ff7ada4b49685ebeafdc811813cc3bb57fa3974db18304"
	},
	{
		"id": "a861f33d381f",
		"ts": "2026-10-09T02:43:46.977Z",
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
		"liquidityUsd": 45058486.97,
		"hash": "a861f33d381f0cb7f5fb5bc92c44db49c3ab83761ac11ff19b4ed8e6bd0d2112"
	},
	{
		"id": "92e6637da94d",
		"ts": "2026-10-09T02:43:47.416Z",
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
		"liquidityUsd": 4761450.36,
		"hash": "92e6637da94d93e428ad46c5438c93ec04e152e7f941496cc56bcbcaf04f3bf9"
	},
	{
		"id": "9aa56b989ea9",
		"ts": "2026-10-09T02:43:47.655Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1204571.65,
		"hash": "9aa56b989ea92bfa0fb52c0166d6c40c34c47d1e88b488df3064a905cf8edd04"
	},
	{
		"id": "7d6e6daaf810",
		"ts": "2026-10-09T02:43:47.899Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 143070.73,
		"hash": "7d6e6daaf810d704cf0a914ba013b713e648027db3f8dc47d0d4b0226809f677"
	},
	{
		"id": "9e5a76351b4e",
		"ts": "2026-10-09T02:43:48.152Z",
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
		"liquidityUsd": 757287.81,
		"hash": "9e5a76351b4e7baa3dbd62d94f28133c977c07e15e55694adcd9a2d0e87c8c4f"
	},
	{
		"id": "a99881a805bb",
		"ts": "2026-10-09T02:43:48.405Z",
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
		"liquidityUsd": 15681042.32,
		"hash": "a99881a805bb4092f895149e77d534f7aaf2489e6313168e58de1aa6f00810e3"
	},
	{
		"id": "064ae193d743",
		"ts": "2026-10-09T02:43:48.661Z",
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
		"liquidityUsd": 1761986,
		"hash": "064ae193d743505eb7e0a1de62bf9d87383efba89040f678ec3a6aba26ee5989"
	},
	{
		"id": "0c0512b55ebd",
		"ts": "2026-10-09T02:43:48.879Z",
		"symbol": "whuf",
		"token": "0xeeee77bC7e82c0d4166d52F58239D4c5Bf41eeee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 235246.85,
		"hash": "0c0512b55ebd1c910f792858c00bea10724af78c13659e218d447ce3764fab41"
	},
	{
		"id": "63bf3cb859db",
		"ts": "2026-10-09T02:43:49.106Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1477929.17,
		"hash": "63bf3cb859dbf788d68c2a0f06bfd0360bcdfce9527d45e1029571fcdf08aacd"
	},
	{
		"id": "2858da3f8553",
		"ts": "2026-10-09T02:43:49.327Z",
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
		"liquidityUsd": 173184.23,
		"hash": "2858da3f85535c66384e9c2db61f333a9e341b1d1e74193163eac85e687aa1f9"
	},
	{
		"id": "017e8290513e",
		"ts": "2026-10-09T02:43:49.556Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 5560780.07,
		"hash": "017e8290513ede41d61ee9dd5a55420fed07e7455ffbe2504acbeca7aef5d579"
	},
	{
		"id": "cce043292a15",
		"ts": "2026-10-09T02:43:49.793Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1202076.33,
		"hash": "cce043292a150008694d77b31ec5cb7e3ca6d8777e36327e28da78a5024439b6"
	},
	{
		"id": "acb5e69912e8",
		"ts": "2026-10-09T02:43:50.025Z",
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
		"liquidityUsd": 340477.8,
		"hash": "acb5e69912e85baee8946b48dff093f25bbc953fc0c05f36066afe8d97b100ff"
	},
	{
		"id": "21425fc72700",
		"ts": "2026-10-09T02:43:50.241Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2253525.88,
		"hash": "21425fc72700f55818abe6f724fccffb9813a81b96a7f94fd42b1174b9352931"
	},
	{
		"id": "bb704d2a1293",
		"ts": "2026-10-09T02:43:50.465Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3913612.26,
		"hash": "bb704d2a1293c7b2938e7bbe4679138ccddb27a00ef568cfad1af4ed18f1b070"
	},
	{
		"id": "9140dec20b9e",
		"ts": "2026-10-09T02:43:50.689Z",
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
		"liquidityUsd": 3319550.84,
		"hash": "9140dec20b9e3d551f0d20207ed63b166ce70d13a30f5da86d84e0a914e52de5"
	},
	{
		"id": "6b929062809e",
		"ts": "2026-10-08T22:49:34.025Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146809348.7,
		"hash": "6b929062809ebef180307664b3f405a393030e6e661a84a22c081ac277fa4f58"
	},
	{
		"id": "6b6f8a31cef0",
		"ts": "2026-10-08T22:49:34.268Z",
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
		"liquidityUsd": 15727209.21,
		"hash": "6b6f8a31cef0a9a8ecf118d940b82afa2463f6274507b614f0210ffe5608b2a6"
	},
	{
		"id": "5935858c9b87",
		"ts": "2026-10-08T22:49:34.531Z",
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
		"liquidityUsd": 787331.17,
		"hash": "5935858c9b87c694c10094fade89e519f542214b6a61cf17f610b92c0e453278"
	},
	{
		"id": "08da6928b35f",
		"ts": "2026-10-08T22:49:34.785Z",
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
		"liquidityUsd": 44513672.15,
		"hash": "08da6928b35f8aaaa019470b51b104bbf52f03c9197b0182a79fb96e7efb61cb"
	},
	{
		"id": "5ca0a7efd00f",
		"ts": "2026-10-08T22:49:35.037Z",
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
		"liquidityUsd": 4751785.26,
		"hash": "5ca0a7efd00f443a0e0da6198eba0251402639337f4718a9e627bab8bee44e08"
	},
	{
		"id": "417fa022df9e",
		"ts": "2026-10-08T22:49:35.276Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1197650.05,
		"hash": "417fa022df9ecb35d1c5af77102061334adb5e8beae5674c3b4c639319a98827"
	},
	{
		"id": "ee8e66d7c08d",
		"ts": "2026-10-08T22:49:35.534Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 143078.15,
		"hash": "ee8e66d7c08d17052ee5407175a73d6e33f5511e717f3c31ec800dd739f39831"
	},
	{
		"id": "c705f4696b6d",
		"ts": "2026-10-08T22:49:35.791Z",
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
		"liquidityUsd": 754087.32,
		"hash": "c705f4696b6d19e011d1a331e5326a73fafde1a526ec91b0df24281464885c7b"
	},
	{
		"id": "dbd31a48abef",
		"ts": "2026-10-08T22:49:36.046Z",
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
		"liquidityUsd": 1806506.69,
		"hash": "dbd31a48abefc632fb8938ebc9b78def4607f53442c2a8bb6aef815e72aa0d76"
	},
	{
		"id": "74bd2812b286",
		"ts": "2026-10-08T22:49:36.287Z",
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
		"liquidityUsd": 15759884.47,
		"hash": "74bd2812b286b210654f8bb6820eac6425db6c5d3d43002086dabdce9681af50"
	},
	{
		"id": "0355e827510c",
		"ts": "2026-10-08T22:49:36.531Z",
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
		"liquidityUsd": 153196.3,
		"hash": "0355e827510c8fe789f54157b7a18586e0d8442588ef1e751b9c85d98f7e74ea"
	},
	{
		"id": "85adf39432eb",
		"ts": "2026-10-08T22:49:36.765Z",
		"symbol": "whuf",
		"token": "0xeeee77bC7e82c0d4166d52F58239D4c5Bf41eeee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 233466.15,
		"hash": "85adf39432eb84aae7828ddfa75017c742f5456bade5d6ba52793268191f99f2"
	},
	{
		"id": "6ed78f208a9d",
		"ts": "2026-10-08T22:49:37.001Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1494153.66,
		"hash": "6ed78f208a9d999455b99eec72c8c1e6011a810c8224feb89b75385a240ebd8b"
	},
	{
		"id": "8bdf626b007d",
		"ts": "2026-10-08T22:49:37.226Z",
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
		"liquidityUsd": 342115.1,
		"hash": "8bdf626b007d303de2c84c16dede96401813c6a9d1b164cdc845b7d334e7efbe"
	},
	{
		"id": "1ad95acc390d",
		"ts": "2026-10-08T22:49:37.465Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 5426362.38,
		"hash": "1ad95acc390dd38b1cb37ddc57e8a965c2caaa6a7d019e912ff802709e7d6b20"
	},
	{
		"id": "f959e6a74ea6",
		"ts": "2026-10-08T22:49:37.703Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1189527,
		"hash": "f959e6a74ea6b5cb9b86af275dcf62aecf4df7f92deb21cc1e635a0965473e45"
	},
	{
		"id": "77dd9af66e76",
		"ts": "2026-10-08T22:49:37.998Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2252892.1,
		"hash": "77dd9af66e769d2ec9db4cb900a5721f152ae3b489e919438b4e9e199db6091c"
	},
	{
		"id": "9227557ffd70",
		"ts": "2026-10-08T22:49:38.219Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 522688.59,
		"hash": "9227557ffd7077deae8e8350b0b4bfbee9fdc197416f9b88ee41c2508f8a2f71"
	},
	{
		"id": "cd52ab3f7d15",
		"ts": "2026-10-08T22:49:38.461Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 1163375.43,
		"hash": "cd52ab3f7d156455cc03db021aad5ebf2bc80320c58522c8d21efd0b6782cd37"
	},
	{
		"id": "b42443b1efb2",
		"ts": "2026-10-08T17:09:36.631Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 145218644.1,
		"hash": "b42443b1efb2c5c926667e880405418b2fe970072ea9e11a95ea97e456cb7a2c"
	},
	{
		"id": "764a81137c38",
		"ts": "2026-10-08T17:09:37.259Z",
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
		"liquidityUsd": 14975579.08,
		"hash": "764a81137c38170e57a2d0443a4d1008492ba653d331715d23dea5c73da1cf52"
	},
	{
		"id": "2f7019a8f3d4",
		"ts": "2026-10-08T17:09:37.541Z",
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
		"liquidityUsd": 778950.27,
		"hash": "2f7019a8f3d41310941cc13b4d43cc0fcd6b977e56c4432776f0913e068a51df"
	},
	{
		"id": "bebc418cd17d",
		"ts": "2026-10-08T17:09:37.793Z",
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
		"liquidityUsd": 43485571.56,
		"hash": "bebc418cd17dcefb2678151572c4635eb8030f8587c811a94ae49e5fbfa14f18"
	},
	{
		"id": "2069b6b48a83",
		"ts": "2026-10-08T17:09:38.139Z",
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
		"liquidityUsd": 4653924.81,
		"hash": "2069b6b48a8364d47a50cf833374f62dfd306eec1c4439d01f30759daa95678d"
	},
	{
		"id": "da48563389e1",
		"ts": "2026-10-08T17:09:38.417Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1166243.77,
		"hash": "da48563389e15320388a5943997a584727cb981e74cae1dfe83b9f4c8a36d233"
	},
	{
		"id": "4765e6de3d67",
		"ts": "2026-10-08T17:09:38.622Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 143079.13,
		"hash": "4765e6de3d671f4d21ec1975f4749f6245660ed4f27e5c890fd9642fb8b711c7"
	},
	{
		"id": "b0cbbab57f76",
		"ts": "2026-10-08T17:09:38.940Z",
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
		"liquidityUsd": 2217675.54,
		"hash": "b0cbbab57f768824842ac1193722168d49d202b18bf005c5e5eebbaab543b138"
	},
	{
		"id": "b6df1f72f044",
		"ts": "2026-10-08T17:09:39.166Z",
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
		"liquidityUsd": 1726471.68,
		"hash": "b6df1f72f04435eea4dc407e97f20571c47b9e038671d6ba2b3790384bd9d538"
	},
	{
		"id": "2c54b52b5104",
		"ts": "2026-10-08T17:09:39.559Z",
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
		"liquidityUsd": 1220551.8,
		"hash": "2c54b52b510431965e5f84f7307fd2e37b4d9090507c18c6f805dd6e5b5a8a02"
	},
	{
		"id": "13f64f2d0d7f",
		"ts": "2026-10-08T17:09:39.777Z",
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
		"liquidityUsd": 15245347.88,
		"hash": "13f64f2d0d7f5b4826b297099076bf149815f30d47adb17cf65fd4f6df562656"
	},
	{
		"id": "016ff36d9121",
		"ts": "2026-10-08T17:09:40.007Z",
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
		"liquidityUsd": 146418.29,
		"hash": "016ff36d91210068e1fd7936bc2573b332f8f9f0fd1f9ab319cb843d1de65cd1"
	},
	{
		"id": "b68d35fd3f94",
		"ts": "2026-10-08T17:09:40.205Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1437745.67,
		"hash": "b68d35fd3f94d5e88f8baeb6bf355af331b79190870170850cb421571b937658"
	},
	{
		"id": "553c15fc24c6",
		"ts": "2026-10-08T17:09:40.394Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 5052728.08,
		"hash": "553c15fc24c6573daed22d55ec55d43c06b28039b24ba9860fae77d7c0c1f85f"
	},
	{
		"id": "e69e49f81a34",
		"ts": "2026-10-08T17:09:40.612Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1186775.35,
		"hash": "e69e49f81a34dba069a3dd4477736fac28c6621a96b40188a1cb4dd60a83f119"
	},
	{
		"id": "f7174b2fea59",
		"ts": "2026-10-08T17:09:40.807Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 477720.86,
		"hash": "f7174b2fea59678ae90feccf3d754112b18bc2b581b5b7fe30f915a5f413c2cf"
	},
	{
		"id": "a75a9a1bdc39",
		"ts": "2026-10-08T17:09:41.027Z",
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
		"liquidityUsd": 331565.77,
		"hash": "a75a9a1bdc39eeac1f1bbe8715181c235bb67b14e20588f7aafba8dca4e6c4cf"
	},
	{
		"id": "0cc3498658f0",
		"ts": "2026-10-08T17:09:41.223Z",
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
		"liquidityUsd": 3239366.5,
		"hash": "0cc3498658f07dcf68350b6e015120dbd178464b18a0e2c05c0c785dad2d39b4"
	},
	{
		"id": "84c978a220c8",
		"ts": "2026-10-08T17:09:41.427Z",
		"symbol": "1F916",
		"token": "0x9E00FC92493451EBA1c63DD3880D68b622037bA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 344743.51,
		"hash": "84c978a220c8d5982b6c59719d10104da6399009eed863e5a53977243b73ee57"
	},
	{
		"id": "cb00c032fb60",
		"ts": "2026-10-08T09:54:02.788Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156442772.5,
		"hash": "cb00c032fb60cf858a7758456117c48e36d78cd6f6f2b8c06f23146746b79afe"
	},
	{
		"id": "3ca446f405b9",
		"ts": "2026-10-08T09:54:03.289Z",
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
		"liquidityUsd": 15839110.51,
		"hash": "3ca446f405b90c27a730e264c79241d04843f93d9f89c709d8c7b3d5908cfb95"
	},
	{
		"id": "95fef88ec64f",
		"ts": "2026-10-08T09:54:03.535Z",
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
		"liquidityUsd": 816770.98,
		"hash": "95fef88ec64fcc0c9f4c7f2a55180f89960bbbd2750e8e04035938e3452ecada"
	},
	{
		"id": "6a52a782a1f6",
		"ts": "2026-10-08T09:54:04.006Z",
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
		"liquidityUsd": 43300980.08,
		"hash": "6a52a782a1f6b8083ba6a82ff2d618e4d1e372836c5cccb9b21cd1e9d83eb506"
	},
	{
		"id": "fb0d4dc39588",
		"ts": "2026-10-08T09:54:04.272Z",
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
		"liquidityUsd": 4457474.91,
		"hash": "fb0d4dc39588e8b821bc5ff98724fe43600df0cf37c246d24d1931c448e50ff7"
	},
	{
		"id": "1c6f0cbc9112",
		"ts": "2026-10-08T09:54:04.512Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1243379.73,
		"hash": "1c6f0cbc9112488d5fe5e0ff26512e329383c8d063a60b9219c107b29ee8a8eb"
	},
	{
		"id": "37e59e2a3563",
		"ts": "2026-10-08T09:54:04.756Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 143071.45,
		"hash": "37e59e2a3563ea3aac2612596108e058c6db2b22df85c69db9f3d56ef1659204"
	},
	{
		"id": "e92449353a8b",
		"ts": "2026-10-08T09:54:04.996Z",
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
		"liquidityUsd": 661358.56,
		"hash": "e92449353a8b20e75a6b2b44b72a000788b700fec91033824d6fc6fa3ba8612f"
	},
	{
		"id": "5ca398f1581e",
		"ts": "2026-10-08T09:54:05.236Z",
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
		"liquidityUsd": 1840461.18,
		"hash": "5ca398f1581e99577c314e5fead4d5c02487f1c8f65765d336778e175a15b51a"
	},
	{
		"id": "2fc721789d91",
		"ts": "2026-10-08T09:54:05.482Z",
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
		"liquidityUsd": 1088187.88,
		"hash": "2fc721789d912417731e4a565001683efdffa93a7a9a59a2af62a0ae93fc319e"
	},
	{
		"id": "8178a2301306",
		"ts": "2026-10-08T09:54:05.706Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 151426.26,
		"hash": "8178a23013062485d556dbeb57f507ab1a1865aa08c51b5185093de96b8eb400"
	},
	{
		"id": "1995c6043db3",
		"ts": "2026-10-08T09:54:05.932Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1245686.07,
		"hash": "1995c6043db33a5871c3b1fc96b29259a58fc5c0a074fef59b88a6d8afbb4fae"
	},
	{
		"id": "0740369176c9",
		"ts": "2026-10-08T09:54:06.155Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1550774.97,
		"hash": "0740369176c9f3678b5492a45fc219e477bdd6d6dc56835fb09fc6bb9aa247c6"
	},
	{
		"id": "273996aaae35",
		"ts": "2026-10-08T09:54:06.381Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 16661659.84,
		"hash": "273996aaae35fa9b55e158b70df2d9c230d16e07499e12906a9edd620324c080"
	},
	{
		"id": "ff7dd3d47272",
		"ts": "2026-10-08T09:54:06.602Z",
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
		"liquidityUsd": 1015770.47,
		"hash": "ff7dd3d4727225a8778fc3a4774e3f38ae8205ae48a1345166d86a2fdfa275cc"
	},
	{
		"id": "e96c578169c4",
		"ts": "2026-10-08T09:54:06.826Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3527627.82,
		"hash": "e96c578169c469e5cc0923ada8345790e790408d90b230d72528eecba45ad4e3"
	},
	{
		"id": "077f5a00dd21",
		"ts": "2026-10-08T09:54:07.048Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 534039.84,
		"hash": "077f5a00dd2170e21480343d216a8487b5392ca5dc4bf3449a5b059869034ff9"
	},
	{
		"id": "686b9d6cd1b9",
		"ts": "2026-10-08T09:54:07.268Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 212390.92,
		"hash": "686b9d6cd1b9e6f7182c1b1f9710215ecce23bdf372e94f242e9b408f88d0d9d"
	},
	{
		"id": "5661d5ea0078",
		"ts": "2026-10-08T09:54:07.491Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1044163.15,
		"hash": "5661d5ea00783c37e9d9c7a3951510ec648630ebe5083464fa22a9f48bfd2efc"
	},
	{
		"id": "c57a44009bd0",
		"ts": "2026-10-08T02:26:53.790Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156848860.03,
		"hash": "c57a44009bd06378994f6cdd8ac04e27b6bd208503a0fbbe3e9c3cc539eddfb5"
	},
	{
		"id": "884a2a4e4be8",
		"ts": "2026-10-08T02:26:54.173Z",
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
		"liquidityUsd": 15432744.77,
		"hash": "884a2a4e4be8e3bd198e693e9db1f47a5e96da40fceec56e6e58e909e2780b9b"
	},
	{
		"id": "3d7507aec4be",
		"ts": "2026-10-08T02:26:54.382Z",
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
		"liquidityUsd": 823028.3,
		"hash": "3d7507aec4bece33f798434e02e67420157a4381b2a89696cce4db6cdb12ce7f"
	},
	{
		"id": "62b1bca5e63b",
		"ts": "2026-10-08T02:26:54.601Z",
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
		"liquidityUsd": 43819089.43,
		"hash": "62b1bca5e63b5d920da459109cddb1a836ef4dec605abf16aca9383e1b6a65d7"
	},
	{
		"id": "69b5dc9a62ee",
		"ts": "2026-10-08T02:26:54.811Z",
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
		"liquidityUsd": 4422947.44,
		"hash": "69b5dc9a62ee430b8fd861cc577d11c5896de7212869391fd01f1a6a8aca6b67"
	},
	{
		"id": "89f1bc9b3df1",
		"ts": "2026-10-08T02:26:55.021Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1255490.72,
		"hash": "89f1bc9b3df13806146891f18472e31622b0d17ee3c9478c4cb1851b2c81564a"
	},
	{
		"id": "a39590ca255d",
		"ts": "2026-10-08T02:26:55.227Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 143053.37,
		"hash": "a39590ca255d9cf7d6a217eb535f42eff0d3c05da506577dd6da2047097d324e"
	},
	{
		"id": "70fd267963ad",
		"ts": "2026-10-08T02:26:55.456Z",
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
		"liquidityUsd": 691119.16,
		"hash": "70fd267963adf3244e12eef5e6359d92757b8cc378d058ed9edec0b2fdf9c354"
	},
	{
		"id": "730feb2b7e52",
		"ts": "2026-10-08T02:26:55.663Z",
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
		"liquidityUsd": 1764308.73,
		"hash": "730feb2b7e526d83675a1ce96ceeaebcf200ed6cd91fe0bfab2972048a59a1c0"
	},
	{
		"id": "3644cfec56e3",
		"ts": "2026-10-08T02:26:55.890Z",
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
		"liquidityUsd": 1169576.95,
		"hash": "3644cfec56e3fb1b078f19af409bdf9e00132fd0970a232c26a0b9a054f46286"
	},
	{
		"id": "550a6f8c9166",
		"ts": "2026-10-08T02:26:56.102Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1554981,
		"hash": "550a6f8c9166496cb94da1ae69388d86bb891d1c43fbdb51412a7bb73648a7b8"
	},
	{
		"id": "03ccb7a75bdb",
		"ts": "2026-10-08T02:26:56.313Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3550929.91,
		"hash": "03ccb7a75bdb00754798be3f125d6977e89acd85a7d74675144ae6f3174b4f08"
	},
	{
		"id": "4ddfc517a454",
		"ts": "2026-10-08T02:26:56.534Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 164371.42,
		"hash": "4ddfc517a454c55bac27856cf8ce55dd8dd92f35a9225a11be4fcd0d49609b70"
	},
	{
		"id": "df03f5c4ef4a",
		"ts": "2026-10-08T02:26:56.744Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1284680.54,
		"hash": "df03f5c4ef4ab332e2aa6b0a6411cd8dc78cd90cf23d15469fa1b680e661693e"
	},
	{
		"id": "face5f6e5918",
		"ts": "2026-10-08T02:26:56.961Z",
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
		"liquidityUsd": 1003209.78,
		"hash": "face5f6e5918f4a443ee9733e2b324f1f136e88c7ca5b0027ed4ae65f924d554"
	},
	{
		"id": "1b4aa653bd4c",
		"ts": "2026-10-08T02:26:57.155Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4007472.75,
		"hash": "1b4aa653bd4c36be8ce8e394efff13fbe67619c52dc855f13fc022b48fa9864d"
	},
	{
		"id": "34322154e80e",
		"ts": "2026-10-08T02:26:57.365Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4757828.16,
		"hash": "34322154e80eeabdaeaa6ee69ed2c82dca94ace9f1ae5a6622498af34d5e0bcd"
	},
	{
		"id": "ba96f5567c84",
		"ts": "2026-10-08T02:26:57.571Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 17033101.13,
		"hash": "ba96f5567c844bca758beb47236601fc0da2d270c51cbb8f9359f6922abbdc1a"
	},
	{
		"id": "917ddbf1cdb2",
		"ts": "2026-10-08T02:26:57.838Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 214501.18,
		"hash": "917ddbf1cdb27af349de2b7e69579410358c0512a90da86359dc118678bbb767"
	},
	{
		"id": "443c9d12204f",
		"ts": "2026-10-07T22:37:48.250Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156347286.65,
		"hash": "443c9d12204ff1c9f951714d0469f52877c95455a5de0e61868f4bc7c86e2b80"
	},
	{
		"id": "81a84ed6c5df",
		"ts": "2026-10-07T22:37:48.735Z",
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
		"liquidityUsd": 18352776.9,
		"hash": "81a84ed6c5dfae4c2943ebb623810553a132d02fdd2f3ee41bd7c04a6d343b4c"
	},
	{
		"id": "7f67e429db55",
		"ts": "2026-10-07T22:37:48.998Z",
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
		"liquidityUsd": 819856.85,
		"hash": "7f67e429db5536cc72d2b3beec7bd6b91b32072fedbf0dd6f83e30e54ab446bf"
	},
	{
		"id": "9c9fd7182408",
		"ts": "2026-10-07T22:37:49.264Z",
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
		"liquidityUsd": 43551386.46,
		"hash": "9c9fd7182408eb2d587634781261d97c401d75a4f00bffd7a16b78e0168b726e"
	},
	{
		"id": "1723d07514e9",
		"ts": "2026-10-07T22:37:49.526Z",
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
		"liquidityUsd": 4382895.53,
		"hash": "1723d07514e9c48311cdf653b00a28c628db6062a4baa4daf6ac58248ceca399"
	},
	{
		"id": "6a755271aa6e",
		"ts": "2026-10-07T22:37:49.782Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1244357.39,
		"hash": "6a755271aa6e7249bc1f129be4fc3f265c645d2958fae92185e6965be5c32c2b"
	},
	{
		"id": "2245191fe256",
		"ts": "2026-10-07T22:37:50.027Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 43551386.46,
		"hash": "2245191fe256e6b6430e8acaddd601d887a0856d9000630c8bad2c8ae7a6cafa"
	},
	{
		"id": "f270d98f3972",
		"ts": "2026-10-07T22:37:50.287Z",
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
		"liquidityUsd": 680911.81,
		"hash": "f270d98f397214d079a36d84c4ae29be792f5d05e7ead80483d9fe3965e583a6"
	},
	{
		"id": "edb79708cb86",
		"ts": "2026-10-07T22:37:50.541Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2279687.55,
		"hash": "edb79708cb8665e31831afe97b67d8e8e824d69e95360cb7992d4dea82b532df"
	},
	{
		"id": "962d3045d9c7",
		"ts": "2026-10-07T22:37:50.803Z",
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
		"liquidityUsd": 1228213.61,
		"hash": "962d3045d9c70fc87a7304dfa30444bf8c4081f3b37ef943cf54771b195144d4"
	},
	{
		"id": "f4da445b35e6",
		"ts": "2026-10-07T22:37:51.034Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3539279.95,
		"hash": "f4da445b35e69083810987112292e6a44bec84eec4789e3c53f876f90d65f2e8"
	},
	{
		"id": "c6cbad32806f",
		"ts": "2026-10-07T22:37:51.260Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1539099.45,
		"hash": "c6cbad32806fee51c0233b32c317f5d94a605d9b7d66c5f63dd43609543a4159"
	},
	{
		"id": "e6be4b907690",
		"ts": "2026-10-07T22:37:51.501Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1303777.69,
		"hash": "e6be4b907690c3d6e1f26105932836e15e6d03a5868bf5ca737d39031c11b5d2"
	},
	{
		"id": "99041e3b4369",
		"ts": "2026-10-07T22:37:51.739Z",
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
		"liquidityUsd": 1001125.97,
		"hash": "99041e3b43695ea73c754199044acd8d1559c2a2c898eef0c482b2b06baf32ec"
	},
	{
		"id": "83d526e74eb5",
		"ts": "2026-10-07T22:37:51.977Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 17054165.74,
		"hash": "83d526e74eb5318432be07a94f99c9969d231e21105a22b1ed6a318c1b5f2152"
	},
	{
		"id": "97c8cdd2132f",
		"ts": "2026-10-07T22:37:52.215Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4673570.22,
		"hash": "97c8cdd2132f12879a7fe667b29a0c3fae156f565e3105921aa41ce2c8e25e2e"
	},
	{
		"id": "47dba6db383c",
		"ts": "2026-10-07T22:37:52.443Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3990992.68,
		"hash": "47dba6db383c4a52820432db0605da60502c370770579e8c5b544ac6570d7bb0"
	},
	{
		"id": "b4f80a71da34",
		"ts": "2026-10-07T22:37:52.668Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 221956.8,
		"hash": "b4f80a71da34f1bcdb872a5314dffb95849cb08645d062383f36b1df2db91939"
	},
	{
		"id": "cb7e15f9d3d7",
		"ts": "2026-10-07T22:37:52.912Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1076183.36,
		"hash": "cb7e15f9d3d7257f6940fca8930241ab3280cf0e58edd2a1f826891a88ff66a9"
	},
	{
		"id": "bc482d47d063",
		"ts": "2026-10-07T17:12:04.667Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156375306.49,
		"hash": "bc482d47d063aa00294b771eac4368eb4a20827314147265d9d347a00c36c2ab"
	},
	{
		"id": "144fee645940",
		"ts": "2026-10-07T17:12:05.115Z",
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
		"liquidityUsd": 16543226.23,
		"hash": "144fee64594030b9696dc9ac97e4432b35c8581ea93ae72beb4b6459dfcd41ff"
	},
	{
		"id": "e1f6765b4a16",
		"ts": "2026-10-07T17:12:05.411Z",
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
		"liquidityUsd": 822322.34,
		"hash": "e1f6765b4a1629abae75d85ae162ae4b3e2f8b12a6f3252acf83f54331bbb320"
	},
	{
		"id": "cd6e01b1ad90",
		"ts": "2026-10-07T17:12:05.667Z",
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
		"liquidityUsd": 43545154.4,
		"hash": "cd6e01b1ad90edddf01f0059f696939bc6c6e346c93f76fb2dbe692874ebe1f8"
	},
	{
		"id": "8b8c53e1bd50",
		"ts": "2026-10-07T17:12:05.948Z",
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
		"liquidityUsd": 4382756.87,
		"hash": "8b8c53e1bd503eb6bcf67edfc4c53cea08f61309201d75d5beb7885c3273381c"
	},
	{
		"id": "7ec05a696a40",
		"ts": "2026-10-07T17:12:06.207Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1244351.07,
		"hash": "7ec05a696a40a08143fb416058dee1276e336cc264a689e2ce7b10f897409ed2"
	},
	{
		"id": "03e5355889f5",
		"ts": "2026-10-07T17:12:06.477Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 43545154.4,
		"hash": "03e5355889f5f39bb5350bdae3438a78ecc582b131659ee34458d98ef5334419"
	},
	{
		"id": "6dadfbf79a0b",
		"ts": "2026-10-07T17:12:06.736Z",
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
		"liquidityUsd": 533239.47,
		"hash": "6dadfbf79a0b77105f992368157f5056af2ec7df4a9d50ce3b22d14b4921ec79"
	},
	{
		"id": "377486e9d5f0",
		"ts": "2026-10-07T17:12:06.988Z",
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
		"liquidityUsd": 1791943.92,
		"hash": "377486e9d5f00a065723c304d8cc85e74ea6af04f2a3084750d841d6f32d7c6e"
	},
	{
		"id": "2d14e52750d3",
		"ts": "2026-10-07T17:12:07.246Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3510914.95,
		"hash": "2d14e52750d321653aa9ce8fd4c70373fee303daee252aae8810d23055e8a34a"
	},
	{
		"id": "e2cad5c425c2",
		"ts": "2026-10-07T17:12:07.481Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1541803.84,
		"hash": "e2cad5c425c20738e843ed373f52ac1538bd36921821b4ab87abb3d1c5be25b2"
	},
	{
		"id": "aadc25c1a3de",
		"ts": "2026-10-07T17:12:07.720Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 215492.54,
		"hash": "aadc25c1a3de33b9984169a8bdbdec9174817712f3eda00de699f491a57a7762"
	},
	{
		"id": "8a1fb218cff3",
		"ts": "2026-10-07T17:12:07.957Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2382288.75,
		"hash": "8a1fb218cff366c60cfc842dfa7c0cb7bd1d10be65f3c7d8eab98ed21650e5ee"
	},
	{
		"id": "38a5adfd55fe",
		"ts": "2026-10-07T17:12:08.208Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1318261.52,
		"hash": "38a5adfd55fed9fc9defca5b5bcdc2e956f67548c2032144173a02d8369b695d"
	},
	{
		"id": "2ba5618b56d6",
		"ts": "2026-10-07T17:12:08.442Z",
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
		"liquidityUsd": 1022801.89,
		"hash": "2ba5618b56d6da3d202bfd5faf58db7667651a0cb07970afdaaf45e648bbdc0e"
	},
	{
		"id": "31395955f9ba",
		"ts": "2026-10-07T17:12:08.679Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4753131.7,
		"hash": "31395955f9ba2dd5ce4cdfda51d3a0439ad9e6099c3396bf619e262abb82e8fb"
	},
	{
		"id": "399577cb8866",
		"ts": "2026-10-07T17:12:08.913Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1054220,
		"hash": "399577cb8866d79c0f20cde597eaa91c3698da06bb6d50e0144b18c7cfe7f9a5"
	},
	{
		"id": "a6f51d67a0dd",
		"ts": "2026-10-07T17:12:09.150Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 390692.17,
		"hash": "a6f51d67a0dd19b6041853bb4d51d48fbfaedf7c2126224a73d33b3b81033014"
	},
	{
		"id": "9724a9da3c84",
		"ts": "2026-10-07T17:12:09.418Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 152161.26,
		"hash": "9724a9da3c84d178cfcecd0b072f5f5d935a2c2b3ce3369f64813dc6c81c8e7b"
	},
	{
		"id": "d0df59e5e4a0",
		"ts": "2026-10-07T09:43:30.852Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 159038230.35,
		"hash": "d0df59e5e4a02d1f54caf9291a0d0eb2b7173bc4322629ddf1b1979cf6f1f869"
	},
	{
		"id": "47aced783c40",
		"ts": "2026-10-07T09:43:31.545Z",
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
		"liquidityUsd": 17104990.02,
		"hash": "47aced783c40e47951ae37cfaa4e399a2cf227cb72111a390468bee7463d6cc6"
	},
	{
		"id": "7e53abea51e5",
		"ts": "2026-10-07T09:43:31.820Z",
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
		"liquidityUsd": 833553.56,
		"hash": "7e53abea51e5f47d2368bc2e289393b6f62d3bbbc48dacc52e9b29a366d2c44e"
	},
	{
		"id": "7437c98db02d",
		"ts": "2026-10-07T09:43:32.093Z",
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
		"liquidityUsd": 43580433.73,
		"hash": "7437c98db02d834e3b62d82777b0ad66dca0d3c011af4a01ad2cc130908da17b"
	},
	{
		"id": "b5e8737315d1",
		"ts": "2026-10-07T09:43:32.350Z",
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
		"liquidityUsd": 4482006.66,
		"hash": "b5e8737315d1e641211b2ca91016f0388702a1a883e2c4fd9cd888642ced3ac6"
	},
	{
		"id": "fe327eeaf355",
		"ts": "2026-10-07T09:43:32.631Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1259290.04,
		"hash": "fe327eeaf355954746ef7f30285c8e7a81bf6a2c210babcd8432f3f4bbf0d1c3"
	},
	{
		"id": "0dca2205c61e",
		"ts": "2026-10-07T09:43:32.888Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 43580433.73,
		"hash": "0dca2205c61eaecb44a87e31f6a990c8c2600e0d798ee536cb9c9069e54d2839"
	},
	{
		"id": "b8d6dc212e34",
		"ts": "2026-10-07T09:43:33.143Z",
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
		"liquidityUsd": 584569.63,
		"hash": "b8d6dc212e34b2dadd0c38911fcfbce3b84e63035162cb8833d1cd624dd88726"
	},
	{
		"id": "39daee8564d1",
		"ts": "2026-10-07T09:43:33.397Z",
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
		"liquidityUsd": 1769601.23,
		"hash": "39daee8564d1795e63e55e6b04b444fd13a453419df1b3e702666f52846a5069"
	},
	{
		"id": "443fc693e1ba",
		"ts": "2026-10-07T09:43:33.661Z",
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
		"liquidityUsd": 183162.79,
		"hash": "443fc693e1baf938efbe2907e2adb50f485396bcf17216084d90385f47a70271"
	},
	{
		"id": "b4f58a93e013",
		"ts": "2026-10-07T09:43:33.901Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 211514.6,
		"hash": "b4f58a93e013b8bb81f8c23ee5b6bf084911b0cf8d324c7ff0492ede469860cc"
	},
	{
		"id": "5c0bea12d460",
		"ts": "2026-10-07T09:43:34.138Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3651234.22,
		"hash": "5c0bea12d460f0fc7c045ee36b494b2d4e65d0548478757774ea4f82c4673211"
	},
	{
		"id": "f9e46d86c886",
		"ts": "2026-10-07T09:43:34.375Z",
		"symbol": "ZEN",
		"token": "0xf43eB8De897Fbc7F2502483B2Bef7Bb9EA179229",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2661325.66,
		"hash": "f9e46d86c8862fd00617772a3f1a63d5ff9d041e809cb303f492ae222cb62d81"
	},
	{
		"id": "798e127c12db",
		"ts": "2026-10-07T09:43:34.619Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1333303.85,
		"hash": "798e127c12db45aeb72d91ff2a97e347a027457c83be434d984d6ad5b395cc41"
	},
	{
		"id": "e59c7190035f",
		"ts": "2026-10-07T09:43:34.858Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1583980.18,
		"hash": "e59c7190035ffb1c64500aa1ef9337f2a634bb90ae5d698f0c0eb14bd5584ae2"
	},
	{
		"id": "5621f95a3e42",
		"ts": "2026-10-07T09:43:35.138Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5291872.03,
		"hash": "5621f95a3e42ff77663c297aa0b3d1b394ead9efefa8606f441a87310c324094"
	},
	{
		"id": "ac93c00fe3c5",
		"ts": "2026-10-07T09:43:35.380Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2428253.88,
		"hash": "ac93c00fe3c5ba7ebdd5e3280c5582d0c3fa6f77f3116674c4330bb731ba27f9"
	},
	{
		"id": "20172dfbf25f",
		"ts": "2026-10-07T09:43:35.620Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 388423.05,
		"hash": "20172dfbf25f57c56e4e2c1176a423998ccdac4f6a0fbf69bf0be261334a2696"
	},
	{
		"id": "b957a6a0e816",
		"ts": "2026-10-07T09:43:35.867Z",
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
		"liquidityUsd": 1209402.63,
		"hash": "b957a6a0e816f8a0e0c7693477d64947556639cdd926623c93a07964f46a609f"
	},
	{
		"id": "8cd808c78ae4",
		"ts": "2026-10-07T02:02:02.311Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 162362820.66,
		"hash": "8cd808c78ae4952616b37280a0dc4e2ab43a7bf770c308df2e2fb57aa2002c8a"
	},
	{
		"id": "ccbac085a2b9",
		"ts": "2026-10-07T02:02:02.576Z",
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
		"liquidityUsd": 14060317.09,
		"hash": "ccbac085a2b99cae1b89c6eadf684edd8797cd2163cc5eb51edb4a7ffe7e146f"
	},
	{
		"id": "0133aa2e0be9",
		"ts": "2026-10-07T02:02:03.022Z",
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
		"liquidityUsd": 852982.01,
		"hash": "0133aa2e0be907444389eb2bf0652e2809c8caa2bedab1b77c9686dff8e7c004"
	},
	{
		"id": "fc9b4bdfdcc8",
		"ts": "2026-10-07T02:02:03.273Z",
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
		"liquidityUsd": 43657099.99,
		"hash": "fc9b4bdfdcc85bf3200169347c8cb7f9979a536ce377ed9acac07c8e164d92cb"
	},
	{
		"id": "784144a882f7",
		"ts": "2026-10-07T02:02:03.738Z",
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
		"liquidityUsd": 4568038.76,
		"hash": "784144a882f7f72f75a6d596d9391f39229fb5381503a53f3ab33fa9214620e8"
	},
	{
		"id": "235d17d88379",
		"ts": "2026-10-07T02:02:03.979Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1312005.22,
		"hash": "235d17d883793ace1aa4ef567f71481e6cd729303e148ec43937765bea02059f"
	},
	{
		"id": "a229987c351d",
		"ts": "2026-10-07T02:02:04.227Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 43657099.99,
		"hash": "a229987c351d1720a9c83970c045f31d15d3a975808977b614c34f20347d3dfb"
	},
	{
		"id": "a1733cb69873",
		"ts": "2026-10-07T02:02:04.478Z",
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
		"liquidityUsd": 2436508.4,
		"hash": "a1733cb698731a60abd2b2d038cc59b76be618ce1790c08225600a4ce0282a79"
	},
	{
		"id": "8c78241ddb5a",
		"ts": "2026-10-07T02:02:04.721Z",
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
		"liquidityUsd": 1852385.3,
		"hash": "8c78241ddb5a83a26ce64120b26346b8a452339bc991a7c756fe95388ba77c86"
	},
	{
		"id": "d54033136710",
		"ts": "2026-10-07T02:02:04.961Z",
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
		"liquidityUsd": 138936.6,
		"hash": "d540331367104334715943a1c1f1c36b380637d30a73fe57ef12587924dc7e41"
	}
]
