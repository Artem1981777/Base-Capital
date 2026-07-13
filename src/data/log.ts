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
	"updatedAt": "2026-07-13T20:11:48.877Z",
	"tokensScored": 3061,
	"verdictsIssued": 3061,
	"safe": 2706,
	"risky": 265,
	"likelyRug": 90,
	"ticks": 193
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "6f560b21f76f",
		"ts": "2026-07-13T20:11:44.290Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106762174.31,
		"hash": "6f560b21f76f66a4bc89246b0d4f6eb85449e4f8f6aab26eef819ad8645d4ecd"
	},
	{
		"id": "828f2ded1228",
		"ts": "2026-07-13T20:11:44.733Z",
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
		"liquidityUsd": 16250582.57,
		"hash": "828f2ded1228d94677a725db866ce7edcebe5c66e113984eb4d083805262ee01"
	},
	{
		"id": "5323841782ad",
		"ts": "2026-07-13T20:11:44.995Z",
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
		"liquidityUsd": 1190042.18,
		"hash": "5323841782ad80582e5672c6d14d75fa049221c733f4291d1959fa36b5aa0e89"
	},
	{
		"id": "c03e22f6c255",
		"ts": "2026-07-13T20:11:45.441Z",
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
		"liquidityUsd": 29720566.51,
		"hash": "c03e22f6c255d9ceb9ebf3b0f80d325046710eecd6b6a4c1987843b3c35fc67a"
	},
	{
		"id": "0178b9ae8b2c",
		"ts": "2026-07-13T20:11:45.879Z",
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
		"liquidityUsd": 4365670.81,
		"hash": "0178b9ae8b2c15ea71ec0def9efb3967838d2e68a7e1d6fa39f4731ad18efe14"
	},
	{
		"id": "0b3f38674329",
		"ts": "2026-07-13T20:11:46.118Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 950193.99,
		"hash": "0b3f38674329a005f7d851a702e2c0811c0ab641a9a8078d16d26dd5f28013a5"
	},
	{
		"id": "1055e45bfc23",
		"ts": "2026-07-13T20:11:46.358Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29720620.44,
		"hash": "1055e45bfc23344524f473f4cd6e15f274fa66fb8bb77769d97ec1fc3108c16a"
	},
	{
		"id": "e2d8050b698d",
		"ts": "2026-07-13T20:11:46.597Z",
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
		"liquidityUsd": 2579668.08,
		"hash": "e2d8050b698de63b7e8bf542cef1ae3135a7379e6c4011dec494eac0e4ab48ec"
	},
	{
		"id": "0d3c635c0ea2",
		"ts": "2026-07-13T20:11:46.833Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4033292.39,
		"hash": "0d3c635c0ea2c91a38c36c3155db56b550ffe337c67e2acb6f5707d56b9ad7f1"
	},
	{
		"id": "9a6c5002c4e9",
		"ts": "2026-07-13T20:11:47.295Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1547886.21,
		"hash": "9a6c5002c4e901e1a3d9327c35f6ba3e5cdb68eaa12e86f67356e5f48b7bdd5e"
	},
	{
		"id": "4cf4acb7c4ea",
		"ts": "2026-07-13T20:11:47.519Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1855733.59,
		"hash": "4cf4acb7c4ea6f9bb04482b6ab0999cb7927567c8e4e43be7544e43d6133c9d5"
	},
	{
		"id": "b7d64dea9335",
		"ts": "2026-07-13T20:11:47.747Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1976922.41,
		"hash": "b7d64dea9335fedb90caf297ec8dd76b8488ec657456f49c176c1cc9e57fb004"
	},
	{
		"id": "58b246a0b74b",
		"ts": "2026-07-13T20:11:47.972Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1868482.95,
		"hash": "58b246a0b74b030b7a250cb46baf19edabf08591a1f9f9c096bfe4962c540ee2"
	},
	{
		"id": "6dc2745203ef",
		"ts": "2026-07-13T20:11:48.198Z",
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
		"liquidityUsd": 1108525.17,
		"hash": "6dc2745203ef2ebff73e52d1f22ef7349baab402b46bda670f95acec6a3c1869"
	},
	{
		"id": "fcc693d0e010",
		"ts": "2026-07-13T20:11:48.427Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 260247.09,
		"hash": "fcc693d0e0107ff848e048fad2be65cbe598e0924975b69abc33f485083770d9"
	},
	{
		"id": "348c4d67df48",
		"ts": "2026-07-13T20:11:48.653Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 507834.2,
		"hash": "348c4d67df4866941db43999f5365edcfd6e7bcd997ab9fb88c7088b36ef235f"
	},
	{
		"id": "b9df869b73ad",
		"ts": "2026-07-13T20:11:48.877Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8444070.23,
		"hash": "b9df869b73ad02f0a8f71c3ddcd3801a35a9195605dde8dfa93d5d795d5f6cac"
	},
	{
		"id": "d3ff93bcc85e",
		"ts": "2026-07-13T18:41:18.664Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106131355.99,
		"hash": "d3ff93bcc85e813988a1472586212818b6fb177f23f699fd14434f3c7661ce74"
	},
	{
		"id": "38d6377dfd4d",
		"ts": "2026-07-13T18:41:19.048Z",
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
		"liquidityUsd": 16469001.36,
		"hash": "38d6377dfd4d90a778d7a1cb9c4be681335d8f808b2cc069bf4cbf362b2c47ce"
	},
	{
		"id": "b1010938316a",
		"ts": "2026-07-13T18:41:19.259Z",
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
		"liquidityUsd": 1199286.14,
		"hash": "b1010938316a9a28f04a384cc3d37212e2e375a70e8f13268cd9f3ddce9e8eff"
	},
	{
		"id": "f24b7634712d",
		"ts": "2026-07-13T18:41:19.471Z",
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
		"liquidityUsd": 29721054.74,
		"hash": "f24b7634712d8a0935dedf4d282888e4060d11faac200823bc6b7e10b89c0b90"
	},
	{
		"id": "aaff7500aae8",
		"ts": "2026-07-13T18:41:19.703Z",
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
		"liquidityUsd": 4336913.19,
		"hash": "aaff7500aae8764cdfdbf8c56fc91d54fdf342327b04e76b9ac01cbad8cb3071"
	},
	{
		"id": "2dc10cb9c580",
		"ts": "2026-07-13T18:41:19.947Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 952143.87,
		"hash": "2dc10cb9c5803419b88ba769a8d8f25e44e9130950d94b8e219167bcaf125a22"
	},
	{
		"id": "f9c4ed90eb07",
		"ts": "2026-07-13T18:41:20.283Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29721054.74,
		"hash": "f9c4ed90eb07b222192effca32f401c6362b63eb826b9f404c031e7f076e2aad"
	},
	{
		"id": "92647ace1981",
		"ts": "2026-07-13T18:41:20.502Z",
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
		"liquidityUsd": 2562817.07,
		"hash": "92647ace19818ae81bfdfdd759fd8938639f3a2401803b8bc9769f7a019b2544"
	},
	{
		"id": "5441d8db1502",
		"ts": "2026-07-13T18:41:20.717Z",
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
		"liquidityUsd": 3956719.87,
		"hash": "5441d8db15028b9ac24191188b6080050c87bb3be3c2eebcb7c3141f1a107e73"
	},
	{
		"id": "8574193febd3",
		"ts": "2026-07-13T18:41:20.939Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1516952.73,
		"hash": "8574193febd3a0b69d7b7acb2ad802f9d18916b05527237fa3c11552e4cbcbed"
	},
	{
		"id": "35019eee6b76",
		"ts": "2026-07-13T18:41:21.138Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1841030.87,
		"hash": "35019eee6b76e34e5f0b73276f383b2c051f8d5306a91a7a40e62fb2efb563a1"
	},
	{
		"id": "e26acbb8ecd4",
		"ts": "2026-07-13T18:41:21.333Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1965077.59,
		"hash": "e26acbb8ecd4e6685dbb1225c1efc0342d51ca8b29d8d8bdef5ba6e0bfe1ba64"
	},
	{
		"id": "209a90834155",
		"ts": "2026-07-13T18:41:21.527Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1895609.81,
		"hash": "209a908341551f90ac4745ab5732bf1c2df96a19db65985fe0416da99707a205"
	},
	{
		"id": "eb4ddef13a32",
		"ts": "2026-07-13T18:41:21.722Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 503258.01,
		"hash": "eb4ddef13a32d454fc4459e5c15f6e5a4921ded193cad478abc1d0c902ae143e"
	},
	{
		"id": "1f8ecf7b4625",
		"ts": "2026-07-13T18:41:21.911Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 240901.19,
		"hash": "1f8ecf7b4625f7ca7afa79e5a548b9578742c9cb7ecdc2a8f1a216dd0e673111"
	},
	{
		"id": "97e07274663f",
		"ts": "2026-07-13T18:41:22.101Z",
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
		"liquidityUsd": 1157092.35,
		"hash": "97e07274663f421ad1b2ea0018366b3a71e1ce6399423a11f7cbe226ec9f3f22"
	},
	{
		"id": "c8ae7eb8a63b",
		"ts": "2026-07-13T18:41:22.293Z",
		"symbol": "SOSO",
		"token": "0x624e2e7fDc8903165F64891672267AB0FCB98831",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 261441.96,
		"hash": "c8ae7eb8a63be54c309f378ee51f6a6273637dd814fc53617c16ba924820b7cd"
	},
	{
		"id": "54f324ee198a",
		"ts": "2026-07-13T16:29:02.464Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106864838.04,
		"hash": "54f324ee198ad66f9f30bd9139fab321d6b2cb4eabb7d3984e48b163906ae5d5"
	},
	{
		"id": "5b93984dbdc5",
		"ts": "2026-07-13T16:29:03.110Z",
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
		"liquidityUsd": 16961216.65,
		"hash": "5b93984dbdc5969a04536c2817ddae62aac8a8f63390a2395f87293fb4cfd466"
	},
	{
		"id": "6a518f56792a",
		"ts": "2026-07-13T16:29:03.487Z",
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
		"liquidityUsd": 1211865.71,
		"hash": "6a518f56792ae84973fa423e449ee020761f84f88347f0d5ba173b095d04fe86"
	},
	{
		"id": "317e53c896f7",
		"ts": "2026-07-13T16:29:03.916Z",
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
		"liquidityUsd": 29816702.73,
		"hash": "317e53c896f7e6d90c07b9cb6905f67966403d05532e99d868daed772b83e03a"
	},
	{
		"id": "a42412f96745",
		"ts": "2026-07-13T16:29:04.156Z",
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
		"liquidityUsd": 4390026.38,
		"hash": "a42412f96745c815fb2472d52d91b5a4bb5167992c87b79e27eeab6936653942"
	},
	{
		"id": "99f2bb31642c",
		"ts": "2026-07-13T16:29:04.432Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 967746.66,
		"hash": "99f2bb31642ce3c2cd47b8d3ece407b2d09edca7299a5ab6db1f2e856bbe4e33"
	},
	{
		"id": "8307e6267d2c",
		"ts": "2026-07-13T16:29:04.697Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29816702.73,
		"hash": "8307e6267d2cb7c96a929663c0b121e2bccbbf2b4f629746959cbcfb1c050ffb"
	},
	{
		"id": "41c82dea66f8",
		"ts": "2026-07-13T16:29:04.938Z",
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
		"liquidityUsd": 2535872.36,
		"hash": "41c82dea66f8e5982b190d047241229aa1b0d7acf4a1969fc4de9bcc8ec72799"
	},
	{
		"id": "e06343aefdf9",
		"ts": "2026-07-13T16:29:05.174Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3869398.52,
		"hash": "e06343aefdf91a10fb77b313646205898e798a2638e5b8556ff7d976292089f8"
	},
	{
		"id": "bc7be17a6a3c",
		"ts": "2026-07-13T16:29:05.418Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1552781.1,
		"hash": "bc7be17a6a3cb70d05d284cb8300f7506432ef439749f997f9b7aeb9bd724be3"
	},
	{
		"id": "78ef7be718c1",
		"ts": "2026-07-13T16:29:05.641Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1874855.81,
		"hash": "78ef7be718c1caeda960e40bd582e9d988efac7b49ecd7cc038ea6e512081305"
	},
	{
		"id": "bfee409e29eb",
		"ts": "2026-07-13T16:29:05.859Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2017547.25,
		"hash": "bfee409e29ebb194c31eddc67d53f071d4181b88ad9fda431615710187739c58"
	},
	{
		"id": "2ca2bdb381fe",
		"ts": "2026-07-13T16:29:06.082Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2007454.66,
		"hash": "2ca2bdb381fe6ad9d4ca65c269efeb0a2c4a15a1f4532db39d5f87963ee0d8f2"
	},
	{
		"id": "e63d60ee3099",
		"ts": "2026-07-13T16:29:06.305Z",
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
		"liquidityUsd": 1158971.21,
		"hash": "e63d60ee3099068fd2cc813f8a58daa131a11987285cd038f04fdb3205325d0e"
	},
	{
		"id": "0cac9d67abf9",
		"ts": "2026-07-13T16:29:06.529Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 268070.02,
		"hash": "0cac9d67abf971a6470ed48813acae7ca09bcb85ea060e2ecdb6c6a621b105f7"
	},
	{
		"id": "af4de4f01f31",
		"ts": "2026-07-13T16:29:06.750Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8469726.71,
		"hash": "af4de4f01f31e199d42f752f9299ed50f68fce04d8357e871e11a6813cf28b71"
	},
	{
		"id": "e3f8c0366153",
		"ts": "2026-07-13T13:20:33.616Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106084787.02,
		"hash": "e3f8c036615331ca1a3f54f9b8d373af96d48c10b17a962313ec19c9a35de957"
	},
	{
		"id": "e8bc2ed06b99",
		"ts": "2026-07-13T13:20:33.974Z",
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
		"liquidityUsd": 16726640.93,
		"hash": "e8bc2ed06b9996ba7a4ad952496a0fcdd3c9f77b454a1f1048aa8f9e7fb22f7c"
	},
	{
		"id": "e0618964a0e1",
		"ts": "2026-07-13T13:20:35.209Z",
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
		"liquidityUsd": 1257293.14,
		"hash": "e0618964a0e1a8c51e0b2f982fe50cac52be23814eae96bddd602bc013ca17ca"
	},
	{
		"id": "a0bed1b77b6a",
		"ts": "2026-07-13T13:20:35.405Z",
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
		"liquidityUsd": 29818426.65,
		"hash": "a0bed1b77b6a7685cbfd05f2c0fb2bcfc5ae2a5ad038342f2bce29277467adfd"
	},
	{
		"id": "a59b6cc03cbe",
		"ts": "2026-07-13T13:20:35.599Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 4368750.54,
		"hash": "a59b6cc03cbe097b8897ea7cf61899a3caf40cfa70cf1cb66902fd4e2d308ef4"
	},
	{
		"id": "09e62469fd61",
		"ts": "2026-07-13T13:20:35.827Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 963427.69,
		"hash": "09e62469fd61882665f5e7a4dfa63ac6c51018db0d9407af94eec5574aa8a5a9"
	},
	{
		"id": "56afa8c373ce",
		"ts": "2026-07-13T13:20:36.025Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29818426.65,
		"hash": "56afa8c373ce0becd5776f15de3cebdfe8c7aa4406f264909ea2c659e6e986c1"
	},
	{
		"id": "645dc22a7ae4",
		"ts": "2026-07-13T13:20:36.219Z",
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
		"liquidityUsd": 2556701.68,
		"hash": "645dc22a7ae4a8e77290f824f18eaa5c26f72f6cc80c7eece9d009d19c82a1c9"
	},
	{
		"id": "3a39616e1bf7",
		"ts": "2026-07-13T13:20:36.410Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3999083.45,
		"hash": "3a39616e1bf7208bf3c2afb2849a3d86e7a1f6430efff84c5dcde3b1742f308e"
	},
	{
		"id": "ea27f22a1ffc",
		"ts": "2026-07-13T13:20:36.602Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1514232.16,
		"hash": "ea27f22a1ffc98d67211c96e3180b2b860e960738abe27e4684b4bbb7781b044"
	},
	{
		"id": "e7e80d326be2",
		"ts": "2026-07-13T13:20:36.787Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1850451.82,
		"hash": "e7e80d326be2f9adb5555aa3edeb7a66c6686b4611058beb9ab4da062a3cb9c2"
	},
	{
		"id": "73ce7cffb47c",
		"ts": "2026-07-13T13:20:36.969Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2005107.85,
		"hash": "73ce7cffb47c4f6aa32d3fd0aa8c95e9e6e7350e6372da835d4d5083eda40370"
	},
	{
		"id": "f989e1360d71",
		"ts": "2026-07-13T13:20:37.152Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8383988.37,
		"hash": "f989e1360d712d086a65ae25449c3812beaf87fce2e91f488afdb448527db320"
	},
	{
		"id": "f875e7afced6",
		"ts": "2026-07-13T13:20:37.337Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 266331.2,
		"hash": "f875e7afced6a14160f9782fde5108e9e0e4f2c059dff9b268e313b3d054f10d"
	},
	{
		"id": "1d81f817d531",
		"ts": "2026-07-13T13:20:37.764Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4525867.89,
		"hash": "1d81f817d531c9c81fad11ba6a2639a79e116dc2a93e3946b678555e223c584d"
	},
	{
		"id": "89e63ce9c758",
		"ts": "2026-07-13T13:20:37.949Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 309315.24,
		"hash": "89e63ce9c7581877e98d0b68621928a154b838ce5921a7a594567776729ed4d6"
	},
	{
		"id": "37a370147184",
		"ts": "2026-07-13T10:21:55.466Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105959350.65,
		"hash": "37a3701471842914d59c1d7b0519907a2ca11df9aea87f102b9b39489e598a84"
	},
	{
		"id": "f334ac521928",
		"ts": "2026-07-13T10:21:55.811Z",
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
		"liquidityUsd": 16747952.83,
		"hash": "f334ac521928a9e33bc0c78d1a0c4af8d9258be11b44a448e048be26acf58d24"
	},
	{
		"id": "230f41cbe011",
		"ts": "2026-07-13T10:21:56.006Z",
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
		"liquidityUsd": 1271468,
		"hash": "230f41cbe011e1daf1888cba694615b3d9b618a6ae5ec340e45b1391453321f2"
	},
	{
		"id": "e994af8e6b23",
		"ts": "2026-07-13T10:21:56.904Z",
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
		"liquidityUsd": 30010132.08,
		"hash": "e994af8e6b2357053067e79f4c4b92b3e9379632cd72b412c3c2edcdd3644f80"
	},
	{
		"id": "7c83196af96c",
		"ts": "2026-07-13T10:21:57.094Z",
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
		"liquidityUsd": 4404496.44,
		"hash": "7c83196af96cd5f0db89306e05b0c9be7045ee6b0aa0c63f89c86792fd4ee5ec"
	},
	{
		"id": "94734617478e",
		"ts": "2026-07-13T10:21:57.329Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 977839.04,
		"hash": "94734617478e38551490b0d8280cb53f298bb4b866fd269c9ff437cd6e0b5e32"
	},
	{
		"id": "974a6bf8ecc5",
		"ts": "2026-07-13T10:21:57.517Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30010132.08,
		"hash": "974a6bf8ecc52ed358f62c26e021f574012d60307c87af2545231d85e335821d"
	},
	{
		"id": "2a4895ff5a86",
		"ts": "2026-07-13T10:21:57.722Z",
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
		"liquidityUsd": 2580450.79,
		"hash": "2a4895ff5a8647d20595fef9f2ab419dc3bff9219ea112f55071955128a7e0b6"
	},
	{
		"id": "f2f2608d5610",
		"ts": "2026-07-13T10:21:57.911Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1551454.86,
		"hash": "f2f2608d56108ee9170658b2dd27038091a1ea8242e5d35164cbbcbf5de8c5c1"
	},
	{
		"id": "a07c9148acbb",
		"ts": "2026-07-13T10:21:58.100Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1880382.79,
		"hash": "a07c9148acbbe844a4d6330c08c60b5e4810ffeee483a1f184a0d7a6fb2755ea"
	},
	{
		"id": "5037da69fabc",
		"ts": "2026-07-13T10:21:58.286Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2016402.21,
		"hash": "5037da69fabc0aacb48a18a0ddfeff2636b5dafd1fb04e0ffcdf5dc144666478"
	},
	{
		"id": "c5300224b66a",
		"ts": "2026-07-13T10:21:58.469Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4062396.3,
		"hash": "c5300224b66a892d9346f69f554faabd28e8ffb7e5ba8e2038de4fa937f10467"
	},
	{
		"id": "edbc24021932",
		"ts": "2026-07-13T10:21:58.696Z",
		"symbol": "Base",
		"token": "0x3Fa0587dE2DF913Ad4F0b5726a1434A4955fFb07",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 385966.11,
		"hash": "edbc24021932b728c760a40c04c1b1a3cc83b2545cedf3f68d6a745c05e0f3c7"
	},
	{
		"id": "fffa781cb85d",
		"ts": "2026-07-13T10:21:58.877Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8406267.67,
		"hash": "fffa781cb85d171300aff9fd9a02f495cc15acc1442ddd569473eb43e2dbfc64"
	},
	{
		"id": "8e66c9973d72",
		"ts": "2026-07-13T10:21:59.068Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 275883.33,
		"hash": "8e66c9973d72c0c345fdfe0f79a84ed4eb817fdce5aac7053dcb4456fda8f50b"
	},
	{
		"id": "7c9a297553b6",
		"ts": "2026-07-13T10:21:59.251Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 396618.41,
		"hash": "7c9a297553b6d2d956ec04b7f94955da365aa90116af781c6b2c107d4c3ecc93"
	},
	{
		"id": "720965197076",
		"ts": "2026-07-13T06:13:10.294Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105532059.65,
		"hash": "7209651970766726d17066ba675d49315442499c87b154bfdcb7cc61fb576f1e"
	},
	{
		"id": "202ddb6bdb0e",
		"ts": "2026-07-13T06:13:10.689Z",
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
		"liquidityUsd": 17313497.49,
		"hash": "202ddb6bdb0efc9ea7b1bccc90c6f76e555930652edd2702c95f9020aab13e72"
	},
	{
		"id": "efa32edca95a",
		"ts": "2026-07-13T06:13:11.000Z",
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
		"liquidityUsd": 1267259.5,
		"hash": "efa32edca95a3de085306d80cd83a9cfc332677d52faa603ebad4f509e478cb2"
	},
	{
		"id": "f762cdd55186",
		"ts": "2026-07-13T06:13:11.216Z",
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
		"liquidityUsd": 30131604.83,
		"hash": "f762cdd55186ac46b6eb0726342ff3e62f57c0949772b89ea39dc7a444e4d824"
	},
	{
		"id": "a98880587226",
		"ts": "2026-07-13T06:13:11.517Z",
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
		"liquidityUsd": 4388997.91,
		"hash": "a988805872262a58b388fe46479505cfe58134a346e7b0991b6d7e3b6e227a1d"
	},
	{
		"id": "9dfb125fb8c7",
		"ts": "2026-07-13T06:13:11.789Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 977911.06,
		"hash": "9dfb125fb8c7e499d442e8d5c2f82c4147999c713eb872098a7fa38f859c0784"
	},
	{
		"id": "4271e4b3a950",
		"ts": "2026-07-13T06:13:12.190Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30131604.83,
		"hash": "4271e4b3a950c2f2d5b532fa325821eb91a57d0b4696be2e4bbcbe0af8f45d89"
	},
	{
		"id": "107c5bc2df6b",
		"ts": "2026-07-13T06:13:12.425Z",
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
		"liquidityUsd": 2422948.17,
		"hash": "107c5bc2df6b45ab6661a476fd610d2b5fdc9c91ce8fce534394f6de10794c55"
	},
	{
		"id": "a587ef342c03",
		"ts": "2026-07-13T06:13:12.628Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2011889.77,
		"hash": "a587ef342c0361560c279d66b0c113c73a2af2e2b9136d35196c157665b1c8a4"
	},
	{
		"id": "545408f244b9",
		"ts": "2026-07-13T06:13:12.919Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3770940.24,
		"hash": "545408f244b93732f274d902c94e754f9a6fec53e153555d8adfddac23db2669"
	},
	{
		"id": "cf720734f8bd",
		"ts": "2026-07-13T06:13:14.203Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1885478.61,
		"hash": "cf720734f8bd03a152f93fa31bc515c16dfc29d8370ffe44a8023a98d13ab720"
	},
	{
		"id": "b27e950dedec",
		"ts": "2026-07-13T06:13:14.417Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1616080.59,
		"hash": "b27e950dedec6e0c3bd75db6153a4b25318356882ed85f6a01a861627683374b"
	},
	{
		"id": "213119560f0e",
		"ts": "2026-07-13T06:13:14.604Z",
		"symbol": "Base",
		"token": "0x3Fa0587dE2DF913Ad4F0b5726a1434A4955fFb07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 432134.01,
		"hash": "213119560f0e457e5d2d50b9bd815626a5925c589e42741fe7a9d4cb35706b56"
	},
	{
		"id": "c432244fb66f",
		"ts": "2026-07-13T06:13:14.806Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8342284.44,
		"hash": "c432244fb66f876569ff7ffb5a8552384ecc1b9fd7b679c5db5b2a9786ab2370"
	},
	{
		"id": "b3b13252c410",
		"ts": "2026-07-13T06:13:14.999Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 279604.73,
		"hash": "b3b13252c41017dca66dd9190a440e8575813f0de4b39d951bca8b9fcd93f466"
	},
	{
		"id": "98c2430bece6",
		"ts": "2026-07-13T06:13:15.195Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 324134.65,
		"hash": "98c2430bece67b00b0a2cd3ae71e044903ca8faa6b6e6fadfdf0bd35a8fc831f"
	},
	{
		"id": "2021d88dddca",
		"ts": "2026-07-13T02:26:55.220Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106061724.82,
		"hash": "2021d88dddca329b9dab729990d72570bc9bbe12da59a049445020e95bbcabe3"
	},
	{
		"id": "7927354970d7",
		"ts": "2026-07-13T02:26:55.432Z",
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
		"liquidityUsd": 17319443.4,
		"hash": "7927354970d7888564fbd533e6a5fd175f880d28bf4cf720f40de39cf739c594"
	},
	{
		"id": "fbebf991dbfe",
		"ts": "2026-07-13T02:26:55.825Z",
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
		"liquidityUsd": 1283185.96,
		"hash": "fbebf991dbfebb85ad2a23a32640b3eba5a42b109ae6da5cc8b7931874697c02"
	},
	{
		"id": "5868e380ed0f",
		"ts": "2026-07-13T02:26:56.021Z",
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
		"liquidityUsd": 30295399.9,
		"hash": "5868e380ed0f5885436f81e1c942506764896e7d7cfbcb76493bfbdc24ea3cfd"
	},
	{
		"id": "3c2ea64a4a05",
		"ts": "2026-07-13T02:26:56.209Z",
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
		"liquidityUsd": 4465227.06,
		"hash": "3c2ea64a4a055babe4dcdf4102e1c465fa9f7abbd94de849bfd238e56866980e"
	},
	{
		"id": "c5792738dc93",
		"ts": "2026-07-13T02:26:56.401Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 978196.02,
		"hash": "c5792738dc9319fdbd61168d3e440815afbc1cb3667058517190245bee7931ef"
	},
	{
		"id": "edfce1b604d2",
		"ts": "2026-07-13T02:26:56.605Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30295399.9,
		"hash": "edfce1b604d265f79422d37b6e6ec1187a602b311c4231f7afbef9f2176aed81"
	},
	{
		"id": "a9ea25d2ef35",
		"ts": "2026-07-13T02:26:56.819Z",
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
		"liquidityUsd": 2489924.86,
		"hash": "a9ea25d2ef35e5b8974846c092d9c9d1a774a7377dcaf4bd479e68602a046e98"
	},
	{
		"id": "d2052edd7795",
		"ts": "2026-07-13T02:26:57.004Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3590748.53,
		"hash": "d2052edd779577c13c05ff08852e9e6885b843527ebf5ab35cd41c04312d1b38"
	},
	{
		"id": "9fb9fc7b3625",
		"ts": "2026-07-13T02:26:57.197Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2075425.92,
		"hash": "9fb9fc7b362559603b2bcda3047fb22e42706aba60d2ec59546b866273af7c75"
	},
	{
		"id": "21933db19d46",
		"ts": "2026-07-13T02:26:57.398Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1913170.14,
		"hash": "21933db19d46e525bc8584bdc28e1248a42c9629a2e5e481eedb2f6a7adb8d6a"
	},
	{
		"id": "2953f6c9ca34",
		"ts": "2026-07-13T02:26:57.593Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1646934.4,
		"hash": "2953f6c9ca34eb973374aeeb653c46584c81513a1639c86705ab5a8f72f05e0f"
	},
	{
		"id": "3f3f09357501",
		"ts": "2026-07-13T02:26:57.764Z",
		"symbol": "Base",
		"token": "0x3Fa0587dE2DF913Ad4F0b5726a1434A4955fFb07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 424541.06,
		"hash": "3f3f0935750134f34dd139cd5707bd684f7d9cae716c36e6c1482f4c87c1f766"
	},
	{
		"id": "82b6fa984c6e",
		"ts": "2026-07-13T02:26:57.990Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 262959.13,
		"hash": "82b6fa984c6ed9ac6270b111eb80bb03bfd12c09d579506ed19fd97620cb68ab"
	},
	{
		"id": "2852482d00bf",
		"ts": "2026-07-13T02:26:58.215Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8436265.63,
		"hash": "2852482d00bfab60eeaa5d778fdae1df23df88c3b7957f68d95b09cffd957bd7"
	},
	{
		"id": "8c6d0de22fcd",
		"ts": "2026-07-13T02:26:58.427Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 308581.46,
		"hash": "8c6d0de22fcd6cd6a3cc8acea7fa3516eea94cc4834fc5008f31ebdf6f3529aa"
	},
	{
		"id": "b275e108d326",
		"ts": "2026-07-13T02:26:58.628Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 512477.93,
		"hash": "b275e108d326afd7470db068ba248bf9270bf42d78638fbf768fe6a48b84a7d3"
	},
	{
		"id": "03d5e413c5a5",
		"ts": "2026-07-12T23:50:19.588Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105987960.03,
		"hash": "03d5e413c5a5188b237ec9a38d1e1e5e952469f338ff69f74c69b00a635a48e0"
	},
	{
		"id": "6d7c50073500",
		"ts": "2026-07-12T23:50:20.052Z",
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
		"liquidityUsd": 17272721.58,
		"hash": "6d7c50073500b2a9991fdf10da1110cd51e2e5575084820a1a23cc75c692da20"
	},
	{
		"id": "53e17e664569",
		"ts": "2026-07-12T23:50:20.310Z",
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
		"liquidityUsd": 1297366,
		"hash": "53e17e664569714f42e3b620568f72fc792b8baff154f2bf1e6dad1c0c398ba0"
	},
	{
		"id": "a266479acb2d",
		"ts": "2026-07-12T23:50:20.566Z",
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
		"liquidityUsd": 30401749,
		"hash": "a266479acb2d28488201da9bed8158338c6ffdd0c0018d3f8673e994e27083d1"
	},
	{
		"id": "ffd423282f66",
		"ts": "2026-07-12T23:50:20.823Z",
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
		"liquidityUsd": 4502761.9,
		"hash": "ffd423282f66f86f4cfcb34bbc14d8fd10f9ee56129a5f222056da933f4d720c"
	},
	{
		"id": "61b23314487f",
		"ts": "2026-07-12T23:50:21.077Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 984973.08,
		"hash": "61b23314487f92f86f6b99624b131048997c3949a6b4454022b0db5002d55594"
	},
	{
		"id": "8a89534aeeee",
		"ts": "2026-07-12T23:50:21.330Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30401749,
		"hash": "8a89534aeeeec976c3624e631c8ed85aa5406b89eff2cefb0064f11c11a86e23"
	},
	{
		"id": "4b8a9494fdb0",
		"ts": "2026-07-12T23:50:21.589Z",
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
		"liquidityUsd": 2491574.87,
		"hash": "4b8a9494fdb032dd2ce5bf115952d416398a87e1f825b1f08f09f7dc127db43e"
	},
	{
		"id": "b36c79e274bf",
		"ts": "2026-07-12T23:50:21.845Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2102074.77,
		"hash": "b36c79e274bfc6befd04e3a0ef0ab3d4a33afe357fe322b2e09b8dcc390630fb"
	},
	{
		"id": "3611e3732735",
		"ts": "2026-07-12T23:50:22.099Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3377752.88,
		"hash": "3611e3732735b46131dd2b3c8f1aba373d01fd1976f07f77b4e129ef2dda3c1e"
	},
	{
		"id": "feea13c4aed7",
		"ts": "2026-07-12T23:50:22.337Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1947481.63,
		"hash": "feea13c4aed706c3d3d72436d921af7ffb9a184f3040f68a75b399958bcb9c30"
	},
	{
		"id": "3f5fefa34b07",
		"ts": "2026-07-12T23:50:22.798Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8424694.93,
		"hash": "3f5fefa34b07e2faca962455227ad846e5bdf964d4187287d9c0e48123924151"
	},
	{
		"id": "68f6d4b38dde",
		"ts": "2026-07-12T23:50:23.042Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 271861.91,
		"hash": "68f6d4b38dde65dffebc7ae8b18ebd54883eb7eb18c926b2790c1f8d003b29ad"
	},
	{
		"id": "b6d6ffe43df6",
		"ts": "2026-07-12T23:50:23.285Z",
		"symbol": "Base",
		"token": "0x3Fa0587dE2DF913Ad4F0b5726a1434A4955fFb07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 730376.62,
		"hash": "b6d6ffe43df656f13827edf00a8d4d21bd5a31974150a77e3ae1ce056721aacf"
	},
	{
		"id": "7776a88d5017",
		"ts": "2026-07-12T23:50:23.529Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 515385.48,
		"hash": "7776a88d5017ea002e619573ca88235b2af7b995be683d50ea65c4886fbe20ce"
	},
	{
		"id": "b34611e3a521",
		"ts": "2026-07-12T23:50:23.772Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 449265.89,
		"hash": "b34611e3a521c17df7cad45b93e13b05eca9029f10ac5b4c8cca49c3a75cc283"
	},
	{
		"id": "b28e9c487899",
		"ts": "2026-07-12T22:42:55.689Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105972715.2,
		"hash": "b28e9c4878997c08b48963840d63fcd10d5ca56cddc8b65c81b46ad2b6703722"
	},
	{
		"id": "628e7eb761e2",
		"ts": "2026-07-12T22:42:56.136Z",
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
		"liquidityUsd": 17041614.13,
		"hash": "628e7eb761e2b860cb415d41b525da1c059b3d556924802e23ebed5f690f5998"
	},
	{
		"id": "fb3448ad4d88",
		"ts": "2026-07-12T22:42:56.579Z",
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
		"liquidityUsd": 1297106.23,
		"hash": "fb3448ad4d883818bbc2a7a224090f1e69f1e8183ab23be2e6245172eb77a173"
	},
	{
		"id": "199fba9e3182",
		"ts": "2026-07-12T22:42:56.817Z",
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
		"liquidityUsd": 30427593.44,
		"hash": "199fba9e3182f1a3b62219cf5730895ef424f27303d8309b09b12bfcc37f9726"
	},
	{
		"id": "4a5e9433c99f",
		"ts": "2026-07-12T22:42:57.055Z",
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
		"liquidityUsd": 4496048.71,
		"hash": "4a5e9433c99fe04b4723a2e25db426e5ea7c12bc4516381addb832b0942f4a56"
	},
	{
		"id": "f3ed63ef211a",
		"ts": "2026-07-12T22:42:57.292Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 982534.41,
		"hash": "f3ed63ef211abe42d69a678e0d83bf9121aeea491af13ea04bb2499050300292"
	},
	{
		"id": "da82ae7ae699",
		"ts": "2026-07-12T22:42:57.564Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30427593.44,
		"hash": "da82ae7ae699fcdba7911f845bd63d835dd53ce93ee8c960ad7df06170c400a9"
	},
	{
		"id": "a3b322142e3f",
		"ts": "2026-07-12T22:42:57.803Z",
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
		"liquidityUsd": 2483175.22,
		"hash": "a3b322142e3ff44390d51b0bef9c541ec6ff1aa34f720c331de22f83a55cdc74"
	},
	{
		"id": "fcb3d154e5e2",
		"ts": "2026-07-12T22:42:58.081Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2099879.42,
		"hash": "fcb3d154e5e2b45f9cef30ff0a597078a64b9eef193960b7a261ba1d543ac985"
	},
	{
		"id": "f252ed013985",
		"ts": "2026-07-12T22:42:58.320Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3355080.32,
		"hash": "f252ed0139859d8cfb96e4fc0458c601cf2aa0cff730aa28ddd1c175a511f549"
	},
	{
		"id": "ba544ce51bd5",
		"ts": "2026-07-12T22:42:58.544Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8403868.31,
		"hash": "ba544ce51bd5671e573c811ce6d3063960bc534c0633bf6c0586515f6227b24a"
	},
	{
		"id": "f7c1ddcf3529",
		"ts": "2026-07-12T22:42:58.769Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1925879.1,
		"hash": "f7c1ddcf3529fa03e955f6ffbafa7f397885b240c133ba31e6b149200eb81c4c"
	},
	{
		"id": "5f70b5db1f72",
		"ts": "2026-07-12T22:42:58.990Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 260022.21,
		"hash": "5f70b5db1f7250fbf1e72f32527542d85cc7bec207db25695598a16df1f487e2"
	},
	{
		"id": "27bd12b51039",
		"ts": "2026-07-12T22:42:59.211Z",
		"symbol": "Base",
		"token": "0x3Fa0587dE2DF913Ad4F0b5726a1434A4955fFb07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 729786.24,
		"hash": "27bd12b510399fc8c5a37ae27a25a68bb3b2a35b48c9d7674675d72ebf576bb4"
	},
	{
		"id": "063056c12cfe",
		"ts": "2026-07-12T22:42:59.433Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 515083.16,
		"hash": "063056c12cfe6f7681457477c96f8e6b4f7c4e276acd53947a5ec97d582eb1d7"
	},
	{
		"id": "b895ec9f6293",
		"ts": "2026-07-12T22:42:59.658Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 304733.93,
		"hash": "b895ec9f6293c509f550023f56d5c93f0a9c532e53c8d1d5800b6cbeb6a60f08"
	},
	{
		"id": "42ead6f9d66e",
		"ts": "2026-07-12T21:44:40.017Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106370455.08,
		"hash": "42ead6f9d66eb3a7d5c65766eb5485d00adde5b772c842b6ff8c481f7a1225bc"
	},
	{
		"id": "034a729d393b",
		"ts": "2026-07-12T21:44:40.261Z",
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
		"liquidityUsd": 16317308.98,
		"hash": "034a729d393b64c915bb344dfe54a46bec583334f86498d0e9a4b08b53516ff6"
	},
	{
		"id": "a34896262d7d",
		"ts": "2026-07-12T21:44:40.505Z",
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
		"liquidityUsd": 1303224.71,
		"hash": "a34896262d7de1e23c72f646f9c7ac2b75a9c01e3ce152323813083819e61930"
	},
	{
		"id": "c9342f8f77a6",
		"ts": "2026-07-12T21:44:40.748Z",
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
		"liquidityUsd": 30564025.22,
		"hash": "c9342f8f77a6511ad5f384a146ff1a1ed969c465b5df7e5320516689a581f34c"
	},
	{
		"id": "794a918c61ea",
		"ts": "2026-07-12T21:44:40.993Z",
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
		"liquidityUsd": 4557797.03,
		"hash": "794a918c61eaead4a10a071f7285190dc684e30fe93d10b5a8dbc36ed923a6c5"
	},
	{
		"id": "f37f1b58cd01",
		"ts": "2026-07-12T21:44:41.233Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 994185.43,
		"hash": "f37f1b58cd010133f5250a2768c6de9e0b1464dc345f47d86635c7e37d547147"
	},
	{
		"id": "b206a96aa9d0",
		"ts": "2026-07-12T21:44:41.471Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30564025.22,
		"hash": "b206a96aa9d0cb2ca9a9645434e8667dff1871dd93f897ddf19602f62dee18e9"
	},
	{
		"id": "9b1398a0f61b",
		"ts": "2026-07-12T21:44:41.712Z",
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
		"liquidityUsd": 2499866.73,
		"hash": "9b1398a0f61b5cc833e3ca4c93b824bc598a22bea11e496fbc6526e00ed955c5"
	},
	{
		"id": "f4fec489678e",
		"ts": "2026-07-12T21:44:41.951Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3364975.28,
		"hash": "f4fec489678e1438c909b9d136c91054d1329a5fe7667a91f71e160b7251be29"
	},
	{
		"id": "4b5f2445ce83",
		"ts": "2026-07-12T21:44:42.192Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2139790.01,
		"hash": "4b5f2445ce838ee744d9159f600ffebe96aabc8bf7f72d32b4abd19023116ffd"
	},
	{
		"id": "c1f32c5e5e39",
		"ts": "2026-07-12T21:44:42.417Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 263054.77,
		"hash": "c1f32c5e5e399a77587cd8c25de78a5ebd8ecdcea1df055dd943daeb5a564ce4"
	},
	{
		"id": "0825d6707e40",
		"ts": "2026-07-12T21:44:42.641Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8469846.52,
		"hash": "0825d6707e405d2d14646de806c0e810541852608542c8e8e08ef3babebbe7ad"
	},
	{
		"id": "46c935f91081",
		"ts": "2026-07-12T21:44:42.865Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1899448.98,
		"hash": "46c935f9108163ee7d2c55db3e2c557284dad1baf8f70038955cd7a6d662776c"
	},
	{
		"id": "2ddae97cbc7f",
		"ts": "2026-07-12T21:44:43.089Z",
		"symbol": "Base",
		"token": "0x3Fa0587dE2DF913Ad4F0b5726a1434A4955fFb07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 730760.38,
		"hash": "2ddae97cbc7f39868cf744461fd9cb31526d17c1a716d7815094e3e3f96de339"
	},
	{
		"id": "3880e3a5b986",
		"ts": "2026-07-12T21:44:43.316Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 517767.24,
		"hash": "3880e3a5b98643fc49b52e85f0e3694e1bf028e095dac2bf735ee704c4850fb6"
	},
	{
		"id": "e84c616e9c51",
		"ts": "2026-07-12T21:44:43.539Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 373403.73,
		"hash": "e84c616e9c517eea1e369b4725316e02e1528254dbefd73608cb9a1245b4a4a5"
	},
	{
		"id": "34220424eae8",
		"ts": "2026-07-12T20:04:38.648Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106207341.51,
		"hash": "34220424eae83ab9cf5c5cbaa093fc1ea50edf718dd7fc3fda01ff108deda37d"
	},
	{
		"id": "dc382545d7fa",
		"ts": "2026-07-12T20:04:38.999Z",
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
		"liquidityUsd": 16442786.67,
		"hash": "dc382545d7faf5aa8d4a9e916333c5c13fac1094f2e4b8f00b9a113bc060448b"
	},
	{
		"id": "c8795d580dba",
		"ts": "2026-07-12T20:04:39.195Z",
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
		"liquidityUsd": 1309189.83,
		"hash": "c8795d580dba3eac8dc0f9a0455b9c74e1a989ee5dbdcc0466dd358da4b9eea0"
	},
	{
		"id": "57eca6b26ca3",
		"ts": "2026-07-12T20:04:39.388Z",
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
		"liquidityUsd": 30682064.91,
		"hash": "57eca6b26ca36f65c8b8bedbd19e321732fa86801893895391ff9a6f7fa2be73"
	},
	{
		"id": "e92583dce278",
		"ts": "2026-07-12T20:04:39.581Z",
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
		"liquidityUsd": 4575187.81,
		"hash": "e92583dce278b83c9947d3762065bbc39572601712884c6aa2483aa412566b50"
	},
	{
		"id": "ca3f83092386",
		"ts": "2026-07-12T20:04:39.771Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1000436.98,
		"hash": "ca3f8309238616ea6dfb1c3175dd30ce7c26839918510e0df9d4d9ac3fca7cdb"
	},
	{
		"id": "8028d385ac86",
		"ts": "2026-07-12T20:04:39.968Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30682064.91,
		"hash": "8028d385ac8620d94da80c56f03983d366194490d43de2e0690f5e6732f730c2"
	},
	{
		"id": "7533c784a294",
		"ts": "2026-07-12T20:04:40.990Z",
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
		"liquidityUsd": 2489296.81,
		"hash": "7533c784a2940a1ac2d800ecacf5c264b6a26ab67bfa65dbcbbed9a0d63beb11"
	},
	{
		"id": "99b9df95c452",
		"ts": "2026-07-12T20:04:41.179Z",
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
		"liquidityUsd": 3447889.28,
		"hash": "99b9df95c452041fa5b1428d9969332fb944eab10076928ff893454ecd8bf192"
	},
	{
		"id": "c7f892b5afca",
		"ts": "2026-07-12T20:04:41.370Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2163181.77,
		"hash": "c7f892b5afcaca54d9682b3ca7c8e68a9c5cc3208beb089057647ad036d83ef5"
	},
	{
		"id": "2eea0d4bf2b8",
		"ts": "2026-07-12T20:04:41.564Z",
		"symbol": "CAPACITR",
		"token": "0x65F8152809Dd1fC0D5d8A345c9008d37B95f9ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 104188.17,
		"hash": "2eea0d4bf2b89c8a92c41b734243c08c7f27c6ea2d37cb80e3dc405dff838f55"
	},
	{
		"id": "e2ce064eeea2",
		"ts": "2026-07-12T20:04:41.739Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 264553.19,
		"hash": "e2ce064eeea27dbe35cae5b9a05f36d2da3480ca92c011193d06b454b8e03682"
	},
	{
		"id": "5491a469d30f",
		"ts": "2026-07-12T20:04:41.929Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8427314.98,
		"hash": "5491a469d30ff50e41bce93dc910306762b86b062470ebbd3bec4ee20a26e696"
	},
	{
		"id": "de2c7bad0baf",
		"ts": "2026-07-12T20:04:42.952Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4661948.35,
		"hash": "de2c7bad0bafde1d4ebb8afac6f732436c7a6f7feeb4b628add95c3d57a31ecd"
	},
	{
		"id": "8249d24b3244",
		"ts": "2026-07-12T20:04:43.137Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 520121.11,
		"hash": "8249d24b32442876e996955bcfc418181e44ab1e48d592b533b9f475ccc78ffd"
	},
	{
		"id": "424d276d2d60",
		"ts": "2026-07-12T20:04:43.316Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 751942.83,
		"hash": "424d276d2d609c0a16c06494c0a191bf58c259d5f4a6384aac5b74bc5e3773b4"
	},
	{
		"id": "02f5f156c583",
		"ts": "2026-07-12T20:04:43.519Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 369448.25,
		"hash": "02f5f156c5832a90b2a4111f53cf3b1ce946b74c343e769004ebaef7eabc52f2"
	},
	{
		"id": "49ea67ccfe8b",
		"ts": "2026-07-12T18:01:46.202Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106195632.85,
		"hash": "49ea67ccfe8b434811f26aac37dadeb5496b135b14fa98525d72280d61ef9f60"
	},
	{
		"id": "4a7314be739a",
		"ts": "2026-07-12T18:01:46.550Z",
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
		"liquidityUsd": 17146188.74,
		"hash": "4a7314be739adc2dcbe2a220ace16d982ceaac1e69a24886c3b9d7de6c972424"
	},
	{
		"id": "f61cd806c9c4",
		"ts": "2026-07-12T18:01:46.898Z",
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
		"liquidityUsd": 1310606.8,
		"hash": "f61cd806c9c44dd48a25f2a0283d12c06ae07eed5e7e8eba391cfa971483f1db"
	},
	{
		"id": "c20593232a30",
		"ts": "2026-07-12T18:01:47.087Z",
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
		"liquidityUsd": 30699454.77,
		"hash": "c20593232a3042c84e97c1029390e87a38278d7f4087a201b06ddac8e583f047"
	},
	{
		"id": "4e4d6f2c993c",
		"ts": "2026-07-12T18:01:47.274Z",
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
		"liquidityUsd": 4578890.67,
		"hash": "4e4d6f2c993cfbf3565549528c81cb59ce194e1560b466b494bc73856847b69a"
	},
	{
		"id": "1d5c36e7e9bb",
		"ts": "2026-07-12T18:01:47.463Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 999698.65,
		"hash": "1d5c36e7e9bbb6e36cafcf56d403ddbce696ccbcaa518571a26ec5e1e990f8f6"
	},
	{
		"id": "6001e9752f6d",
		"ts": "2026-07-12T18:01:47.650Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30699454.77,
		"hash": "6001e9752f6d13d6430a2d796f76087c00fb9cf17e4ff7ccfcf789ba936f2021"
	},
	{
		"id": "6d2316130814",
		"ts": "2026-07-12T18:01:47.863Z",
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
		"liquidityUsd": 2487957.09,
		"hash": "6d231613081415f8eff3fc0d2f1b22c8c5fcd0898dd01a3eafe6d28b9c759567"
	},
	{
		"id": "9b29811de254",
		"ts": "2026-07-12T18:01:48.063Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3465083.87,
		"hash": "9b29811de2543dcd8d65868b7f8f1f3a374b461608b5d0d865b43ddb8ed7f4c6"
	},
	{
		"id": "17e08d8b5ae3",
		"ts": "2026-07-12T18:01:48.278Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2161907.19,
		"hash": "17e08d8b5ae3ad049598051393484f93c37d12650b03f20ff8f4add051c67751"
	},
	{
		"id": "d78f82f84649",
		"ts": "2026-07-12T18:01:48.469Z",
		"symbol": "CAPACITR",
		"token": "0x65F8152809Dd1fC0D5d8A345c9008d37B95f9ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 105214.21,
		"hash": "d78f82f84649656fa3dfdae9d973f3846b81caa48ea58de4b057475ad5f97ae4"
	},
	{
		"id": "1d1a5ee6220e",
		"ts": "2026-07-12T18:01:48.640Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 262621.99,
		"hash": "1d1a5ee6220ed7b5a5aa386fcbc4915492ff9d0db5ce3ef92fab830b8d3ff569"
	},
	{
		"id": "489620605af9",
		"ts": "2026-07-12T18:01:48.828Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8377403.37,
		"hash": "489620605af954f6507494acf74f678ce987a9e63b601a0681f3a4e15475c537"
	},
	{
		"id": "d76af571d448",
		"ts": "2026-07-12T18:01:49.145Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 750189.38,
		"hash": "d76af571d448198646740ab9019828c1a748c0144441e9accecd52b0e91d00ce"
	},
	{
		"id": "e9ec2b07a581",
		"ts": "2026-07-12T18:01:49.735Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4633473.48,
		"hash": "e9ec2b07a581c049e75ab008ccbf0028d707ccd9bdfb34618243201b595b0f19"
	},
	{
		"id": "37a78fe6aa6b",
		"ts": "2026-07-12T18:01:49.915Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 518102.76,
		"hash": "37a78fe6aa6b246b74d94d2eca84cfaf83a0d0302b4b865dc177b5d38065ebd1"
	},
	{
		"id": "ed1100cd4816",
		"ts": "2026-07-12T16:58:04.918Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106278617.4,
		"hash": "ed1100cd48163354b4e6725c07cddce549dc8f7a279fcd2dd879a7951c889902"
	},
	{
		"id": "6cf312c91da4",
		"ts": "2026-07-12T16:58:05.462Z",
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
		"liquidityUsd": 17429973.09,
		"hash": "6cf312c91da4c36c074c01d40fb873671025068939391e560959231dc3c617e4"
	},
	{
		"id": "d3a0949aca64",
		"ts": "2026-07-12T16:58:05.836Z",
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
		"liquidityUsd": 1313799.44,
		"hash": "d3a0949aca64bfdea37734e83ddc2ff7cc4b2407f8c2bd7f17b81922a3481c68"
	},
	{
		"id": "1fbdc4523bc1",
		"ts": "2026-07-12T16:58:06.051Z",
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
		"liquidityUsd": 30758827.56,
		"hash": "1fbdc4523bc1f8521751e4d0a97d1a1edd1660405b5627229c46fd6979bd4af6"
	}
]
