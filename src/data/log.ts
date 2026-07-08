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
	"updatedAt": "2026-07-08T20:18:05.839Z",
	"tokensScored": 2136,
	"verdictsIssued": 2136,
	"safe": 1874,
	"risky": 203,
	"likelyRug": 59,
	"ticks": 138
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "5fc686507b9f",
		"ts": "2026-07-08T20:18:02.390Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102050475.86,
		"hash": "5fc686507b9f69d1c916dea804d4ab18a2bb7697939477229213c7a863ee6c21"
	},
	{
		"id": "ea4f8a91c46f",
		"ts": "2026-07-08T20:18:02.584Z",
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
		"liquidityUsd": 16248625.46,
		"hash": "ea4f8a91c46fe92b12790dad3bbb1bcce5a57f4d23c4e8cc67174c4f7480d23a"
	},
	{
		"id": "8e1fefc3e99e",
		"ts": "2026-07-08T20:18:02.776Z",
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
		"liquidityUsd": 1344027.61,
		"hash": "8e1fefc3e99e00603f9eeaee9baf1d0b3831bf54d403e08d548b8ef90bda46bc"
	},
	{
		"id": "f63de01d5255",
		"ts": "2026-07-08T20:18:02.971Z",
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
		"liquidityUsd": 33359605.61,
		"hash": "f63de01d5255b45e1e1276ea8f9e312839cac6fd6d34aa387ccf90e01620b610"
	},
	{
		"id": "b08a36120347",
		"ts": "2026-07-08T20:18:03.160Z",
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
		"liquidityUsd": 3916966.26,
		"hash": "b08a361203479c0119cc6f10310964195158c3be7ae9afbecf35ef6a6ced316c"
	},
	{
		"id": "610bb420727c",
		"ts": "2026-07-08T20:18:03.381Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 961254.71,
		"hash": "610bb420727ce785002d01f175f269b61a0dfc20fb20ce6f87a9499dc2a88776"
	},
	{
		"id": "d85bf20ed87a",
		"ts": "2026-07-08T20:18:03.568Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33359605.61,
		"hash": "d85bf20ed87a13d77194b2b2a2577d0295324477ba2efb42b6fa4bfb9636109d"
	},
	{
		"id": "d995a45ae7cf",
		"ts": "2026-07-08T20:18:03.757Z",
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
		"liquidityUsd": 2564803.24,
		"hash": "d995a45ae7cfeb004f8b5ea1e1de94edab2cc54c3401afe8e9e319529531d739"
	},
	{
		"id": "90d4615c5547",
		"ts": "2026-07-08T20:18:03.946Z",
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
		"liquidityUsd": 615483.69,
		"hash": "90d4615c5547dada58743e60e80b9ed6ad4db8cf6e5115f5921dc721a4cf3f43"
	},
	{
		"id": "d7d878e5612d",
		"ts": "2026-07-08T20:18:04.150Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 333042.26,
		"hash": "d7d878e5612dde10df0f36cba838f4b53519972d1b1c56c027cfccb4fe708b3a"
	},
	{
		"id": "7961f5283a7a",
		"ts": "2026-07-08T20:18:04.323Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3063910.06,
		"hash": "7961f5283a7a2b22bf0870f5458f429f057eaf2b2fe9237574c72be3454b0f51"
	},
	{
		"id": "ab91c3b52895",
		"ts": "2026-07-08T20:18:04.509Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 955580.69,
		"hash": "ab91c3b52895ad776c7174e81542bd4eefdf4c963a937b04c1b99223d353913a"
	},
	{
		"id": "ad53bb36f60f",
		"ts": "2026-07-08T20:18:04.709Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 54913.76,
		"hash": "ad53bb36f60f7422af57fca246726909ac26717b72914957c1d2589326eb0142"
	},
	{
		"id": "8444c6f779ad",
		"ts": "2026-07-08T20:18:04.913Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1606358.03,
		"hash": "8444c6f779ad951c4f73d4012946441140adab9a116252f9fa0b4d6c5eb545f1"
	},
	{
		"id": "70932d7bf717",
		"ts": "2026-07-08T20:18:05.113Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1878717.13,
		"hash": "70932d7bf717aa06270401cdf6d9bcae920bbad100012069f711194afb663b4d"
	},
	{
		"id": "bb5d07399c78",
		"ts": "2026-07-08T20:18:05.453Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 410421.86,
		"hash": "bb5d07399c78bdf8c8be05036dc5823f353c2f178d8ae1c16dee1f17a86947ac"
	},
	{
		"id": "295451f8ae9d",
		"ts": "2026-07-08T20:18:05.650Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 323768.27,
		"hash": "295451f8ae9db9378f63e52ce28ebf98c46d0875a26ae6b9160776064f23531e"
	},
	{
		"id": "7c5ffc67587e",
		"ts": "2026-07-08T20:18:05.838Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4858777.71,
		"hash": "7c5ffc67587ebeca03c25cecceb50a95426c065e3085eec98dccbc7eeea3a6e4"
	},
	{
		"id": "85f404e06727",
		"ts": "2026-07-08T18:15:21.285Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 101839508.59,
		"hash": "85f404e06727466dbaeaa05b579938e5f913ce8b88ee66411e5d5fa3a1a66d13"
	},
	{
		"id": "c3d5b0413a3a",
		"ts": "2026-07-08T18:15:22.005Z",
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
		"liquidityUsd": 16130611.81,
		"hash": "c3d5b0413a3a38b970fd90c328e75df5cc0f6b113e8394f0da8a968b639bb712"
	},
	{
		"id": "adb042feffe8",
		"ts": "2026-07-08T18:15:22.489Z",
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
		"liquidityUsd": 1343516.63,
		"hash": "adb042feffe87e4cbe96c59c7b9715af2c26da6454f3da88fc98aa77cf0aaf2e"
	},
	{
		"id": "a93fa7dff5c0",
		"ts": "2026-07-08T18:15:22.967Z",
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
		"liquidityUsd": 33439724.07,
		"hash": "a93fa7dff5c05783378370d75a6ee545d8cece2e30f6696b869a81ddbf27d96f"
	},
	{
		"id": "eae73f4fe8f1",
		"ts": "2026-07-08T18:15:23.474Z",
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
		"liquidityUsd": 3915186.07,
		"hash": "eae73f4fe8f12d2e6c5fb2aa19bb66ff4228f138fdea65621f32d068f090183d"
	},
	{
		"id": "c143d44c754b",
		"ts": "2026-07-08T18:15:23.811Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 962474.43,
		"hash": "c143d44c754ba1d2c5539beb195f416b20e7aade27858aa6ea3ab015e9ce66e1"
	},
	{
		"id": "83dc07ed7d1f",
		"ts": "2026-07-08T18:15:24.106Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33439724.07,
		"hash": "83dc07ed7d1ffa4ce691fa705000d8ae0665dede43853f902609e3ae83aeb65b"
	},
	{
		"id": "e3f83e5981bd",
		"ts": "2026-07-08T18:15:24.380Z",
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
		"liquidityUsd": 2566423.55,
		"hash": "e3f83e5981bd7280f63c0122f182ed844ebddc65aa7f18c0a35c680270b8f00b"
	},
	{
		"id": "c4fcbabc20fe",
		"ts": "2026-07-08T18:15:24.869Z",
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
		"liquidityUsd": 631517,
		"hash": "c4fcbabc20fef49bbc349573462f52c4daf8c6a346c26c72e89f252a0993ad53"
	},
	{
		"id": "1cb63c458271",
		"ts": "2026-07-08T18:15:25.163Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 329523.13,
		"hash": "1cb63c458271cc9ab6d04a31026fd1960cfe553c32a7fab62c2756fc6feea03f"
	},
	{
		"id": "a5de72179231",
		"ts": "2026-07-08T18:15:35.373Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 53262.64,
		"hash": "a5de7217923130326d3252d0f00a94bd204e55400a27da6dff7e8949467ccd98"
	},
	{
		"id": "9435a18f9148",
		"ts": "2026-07-08T18:15:35.653Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 941876.37,
		"hash": "9435a18f9148092ceea4c6cc3d099e99b3c94b114aa71a937fde2f0477e25bc0"
	},
	{
		"id": "ad5e8d69cf2e",
		"ts": "2026-07-08T18:15:35.903Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 3073399.55,
		"hash": "ad5e8d69cf2ed38de9aacd721796de46c3a9d25bed94f52dc20cbb8ea8b520d1"
	},
	{
		"id": "763647a02d6e",
		"ts": "2026-07-08T18:15:36.142Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1604296.25,
		"hash": "763647a02d6e1ff248e9ff55fc11643c3ab174232d862ce3bb20b3b46990b306"
	},
	{
		"id": "e407bd7fef68",
		"ts": "2026-07-08T18:15:36.388Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4850687.15,
		"hash": "e407bd7fef684c6098333b2b44d8aafca53def34ddb57ef7812047a4af5dba5a"
	},
	{
		"id": "db2fd7ea41b6",
		"ts": "2026-07-08T18:15:36.638Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1858324.27,
		"hash": "db2fd7ea41b6e7cb0fe0ab420a8bf97dc44c801cff13f07ca5098feb8c425992"
	},
	{
		"id": "9c57b9f3fdea",
		"ts": "2026-07-08T18:15:36.875Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 375740.66,
		"hash": "9c57b9f3fdeaa60d64771afe42616cbfe1efcb47f194204e771085d62ef0655d"
	},
	{
		"id": "e288c186c9a0",
		"ts": "2026-07-08T18:15:37.118Z",
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
		"liquidityUsd": 1370024.68,
		"hash": "e288c186c9a070e6e2c722ab8c0a97238e9fce6fe16d972fa0fc204e7c49b73d"
	},
	{
		"id": "2692b7210bb9",
		"ts": "2026-07-08T16:00:52.394Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100852875.29,
		"hash": "2692b7210bb9cabd978ddacb2253f92f2445a03798ff353bd23c17664f737019"
	},
	{
		"id": "08df3f2c8ec8",
		"ts": "2026-07-08T16:00:52.898Z",
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
		"liquidityUsd": 16115273.96,
		"hash": "08df3f2c8ec8075bcb3a1674cbf6aa3ee46c43269f73c613f8d418a2ab393620"
	},
	{
		"id": "b5b14f7182d5",
		"ts": "2026-07-08T16:00:53.196Z",
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
		"liquidityUsd": 1332874.91,
		"hash": "b5b14f7182d58292a3a0f2303437b78b00c3ff1a018d97c3be62a13d3d793fe8"
	},
	{
		"id": "fd6d3dffcbb0",
		"ts": "2026-07-08T16:00:53.483Z",
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
		"liquidityUsd": 33032597.89,
		"hash": "fd6d3dffcbb0d64839cc1a0540c44cb421a7c898cf7d0c0c43896ff6394379e4"
	},
	{
		"id": "646ece833081",
		"ts": "2026-07-08T16:00:53.746Z",
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
		"liquidityUsd": 3876411.07,
		"hash": "646ece8330818dd7c78e80cd78f46762fc727ab9623489d6863ad22c79b49215"
	},
	{
		"id": "54c4aec63c24",
		"ts": "2026-07-08T16:00:54.009Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 940189.86,
		"hash": "54c4aec63c245dedaecfc7243c0b3a9bcf20bb6b7042f5675344f979f47059cd"
	},
	{
		"id": "537d162509bd",
		"ts": "2026-07-08T16:00:54.283Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33032597.89,
		"hash": "537d162509bd1c0edf95753fcf9b1106723809aae4156923a4cd852f857b6850"
	},
	{
		"id": "09f8924676af",
		"ts": "2026-07-08T16:00:54.552Z",
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
		"liquidityUsd": 2582130.7,
		"hash": "09f8924676affe600fb7c07d81aa678992fa62d761b8d45a2bd2059eeff3d956"
	},
	{
		"id": "0999dd99fc9a",
		"ts": "2026-07-08T16:00:54.827Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 52864.34,
		"hash": "0999dd99fc9a2ab92da7fce6ef0614aa03766ca57e512fb6009ee9195def8162"
	},
	{
		"id": "bf572f2a550e",
		"ts": "2026-07-08T16:00:55.091Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 943882.88,
		"hash": "bf572f2a550ed9e4100b89d57acce1fcf9035f1bcb56b4f3fa6e21b321593622"
	},
	{
		"id": "0f72824b8667",
		"ts": "2026-07-08T16:00:55.337Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 341797.1,
		"hash": "0f72824b866733a7f5e52ec8140926d9ef94ffe413501fcb5d507a26cee146f5"
	},
	{
		"id": "39e144675cd2",
		"ts": "2026-07-08T16:00:55.592Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4757328.73,
		"hash": "39e144675cd2808a4c1a53daaf82f8317fa6626c8e16f0fbe5af13617ef59a2a"
	},
	{
		"id": "4b20c055afe1",
		"ts": "2026-07-08T16:00:55.838Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2974173.45,
		"hash": "4b20c055afe1a8649a77f05f1dda2aada780d005f2ff770a8e07334869cc6152"
	},
	{
		"id": "b92ce2aadf6d",
		"ts": "2026-07-08T16:00:56.088Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1591044.98,
		"hash": "b92ce2aadf6d446232b5539c24ae8a13c6c2d226c5b9e7b216f605cacf5609d2"
	},
	{
		"id": "16b5aa027743",
		"ts": "2026-07-08T16:00:56.337Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 370763.77,
		"hash": "16b5aa027743f57fb75945f52dff86dd3640006a0c189dfb80de9220843f2be9"
	},
	{
		"id": "08f130d3df55",
		"ts": "2026-07-08T16:00:56.576Z",
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
		"liquidityUsd": 1292119.77,
		"hash": "08f130d3df550335a7cd83e9bde9c117e8e67d3281d5043ebff726ae4b443796"
	},
	{
		"id": "435cecb8044a",
		"ts": "2026-07-08T16:01:02.528Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1887399.54,
		"hash": "435cecb8044a6ac712e9c150e6a0b734f415412f03a3603136b34d4934b25d2a"
	},
	{
		"id": "2c47236b89d0",
		"ts": "2026-07-08T16:01:02.820Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4446044.13,
		"hash": "2c47236b89d05156ae2f2fef7ac4bc42811ea6fe7cd7f4fd85bbbe2952f34db1"
	},
	{
		"id": "52b08bbb4d44",
		"ts": "2026-07-08T13:54:58.638Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 101828549.21,
		"hash": "52b08bbb4d4455017e0d1a831e03150668cb91e2b9cdf68d3adc3391963c9734"
	},
	{
		"id": "1d90c4f063fe",
		"ts": "2026-07-08T13:54:59.081Z",
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
		"liquidityUsd": 15660005.44,
		"hash": "1d90c4f063fe6b76f0c3de3ba9c421f7aff03e97d0cdd88fed94c9ee392608c5"
	},
	{
		"id": "549145914be1",
		"ts": "2026-07-08T13:54:59.328Z",
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
		"liquidityUsd": 1348975.01,
		"hash": "549145914be121420175c29bf8440d8995faf13f0bbfc701dad083025812c0e3"
	},
	{
		"id": "bf90b7879fb2",
		"ts": "2026-07-08T13:54:59.575Z",
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
		"liquidityUsd": 33045156.23,
		"hash": "bf90b7879fb2046e32928cffb435ab646273b95823fdf8e70695e0f2c5bb9e9b"
	},
	{
		"id": "a2b10dea83d5",
		"ts": "2026-07-08T13:54:59.820Z",
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
		"liquidityUsd": 3885419.23,
		"hash": "a2b10dea83d5f05ddee399b96256d745f628832a1c1d90256e77432d9886e283"
	},
	{
		"id": "77dc658ab8ba",
		"ts": "2026-07-08T13:55:00.066Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 953251.41,
		"hash": "77dc658ab8bafb012c55828b772c77af4489e45f962ce855fc44b5baa20f456e"
	},
	{
		"id": "93c212eceaed",
		"ts": "2026-07-08T13:55:00.307Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33045156.23,
		"hash": "93c212eceaed934a8d91948896a716cd94f2c62a722098239e105e7cd9c93ff7"
	},
	{
		"id": "a114d433a00f",
		"ts": "2026-07-08T13:55:00.579Z",
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
		"liquidityUsd": 2609070.38,
		"hash": "a114d433a00f7c001a0c94f5d500d48bddea9a94255bf88bdbba2f06f2454cb7"
	},
	{
		"id": "f3d730123ed1",
		"ts": "2026-07-08T13:55:00.821Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 55497.89,
		"hash": "f3d730123ed1c79eb932539909709dfd5d03a55a2ef1bede80218ba902212e83"
	},
	{
		"id": "e162b98daa9f",
		"ts": "2026-07-08T13:55:01.065Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 382591.27,
		"hash": "e162b98daa9f061af66bb58e7cb9870062ec5fd89451e765d008248641c02f67"
	},
	{
		"id": "4bf36744e793",
		"ts": "2026-07-08T13:55:01.307Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 955198,
		"hash": "4bf36744e7938139a828e5fb7fbc5df9a39b93eb84dcdab89a6b3f35f9dbbb26"
	},
	{
		"id": "5a17e009b089",
		"ts": "2026-07-08T13:55:01.550Z",
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
		"liquidityUsd": 4908135.31,
		"hash": "5a17e009b089d41e69ca8e71e59a1dd2b434b3c3e40cbf5378334c4ce7154352"
	},
	{
		"id": "f7b3e9f8cc59",
		"ts": "2026-07-08T13:55:01.795Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3146279.36,
		"hash": "f7b3e9f8cc598e3b92302d162acc5c9fe7f43278ed30aab206f109d74e2658a0"
	},
	{
		"id": "85ce6cc1e0a9",
		"ts": "2026-07-08T13:55:02.041Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1886531.29,
		"hash": "85ce6cc1e0a9ef44d28e816d84b99beaad690984ab7fad3ec430200bcef68a1b"
	},
	{
		"id": "f5f69ebde114",
		"ts": "2026-07-08T13:55:02.288Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4476879.06,
		"hash": "f5f69ebde1147e0bfc5372427034f5cceaa8d94624abc9546c7f42bf701d7cb4"
	},
	{
		"id": "a97a3f8cb1d9",
		"ts": "2026-07-08T13:55:02.534Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1560524.33,
		"hash": "a97a3f8cb1d914ea55c482280a77f91ee495b20fe7a490f0a6f468b4f4605ebd"
	},
	{
		"id": "2a7f4948e5e1",
		"ts": "2026-07-08T13:55:02.762Z",
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
		"liquidityUsd": 1318237.3,
		"hash": "2a7f4948e5e1ec1c95c4f765f8e61ff12541e25832631e45ffdada72b5534a62"
	},
	{
		"id": "cb64688ea783",
		"ts": "2026-07-08T13:55:02.989Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 259317.37,
		"hash": "cb64688ea783b1052b1f1baa41ffeb0a54bbb7c830c14ef4ed007292ec291b27"
	},
	{
		"id": "99eb1247c4ef",
		"ts": "2026-07-08T11:44:46.723Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 101829028.01,
		"hash": "99eb1247c4ef9d1bd1486cd6746c68844e13c76cbac316a4cb7e56b88301bbcc"
	},
	{
		"id": "b4e7c7fc68d2",
		"ts": "2026-07-08T11:44:47.441Z",
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
		"liquidityUsd": 15949100.13,
		"hash": "b4e7c7fc68d224397ca4e170daca09182350d0c5f88b2d6c49abbbcdb34bd56f"
	},
	{
		"id": "79561cad9d41",
		"ts": "2026-07-08T11:44:47.920Z",
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
		"liquidityUsd": 1347106.25,
		"hash": "79561cad9d41a4123e4a2087bb9f5d198252cf98d5104ba906ac6302aabec109"
	},
	{
		"id": "38850021ef4e",
		"ts": "2026-07-08T11:44:48.404Z",
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
		"liquidityUsd": 32465561.23,
		"hash": "38850021ef4e1eed5d67402d7642dab167127c5f60f50ab9866a63baa9ef1c7b"
	},
	{
		"id": "06ba362c4195",
		"ts": "2026-07-08T11:44:48.882Z",
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
		"liquidityUsd": 3908844.48,
		"hash": "06ba362c4195804debad3a80cb9b3a1526b9fe6f2e267f18509511241517effc"
	},
	{
		"id": "54f9cf73a744",
		"ts": "2026-07-08T11:44:49.138Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 953370.22,
		"hash": "54f9cf73a7444aa643a96b3ceee5d02cdc404387fcc112f1b8bcb1c3c642c333"
	},
	{
		"id": "484cc658cad9",
		"ts": "2026-07-08T11:44:49.393Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 32472796.81,
		"hash": "484cc658cad9a79c01f7c73323b1aa622f51224d4c7a28004e0d1ffbcf511864"
	},
	{
		"id": "18cc3c673302",
		"ts": "2026-07-08T11:44:49.650Z",
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
		"liquidityUsd": 2640135.32,
		"hash": "18cc3c673302439fffffd88e0bb7ded18491176c469a12fb0707783c13589d99"
	},
	{
		"id": "1d65b82dee6f",
		"ts": "2026-07-08T11:44:50.126Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 57373.1,
		"hash": "1d65b82dee6f9edb59d865aef0ede9f702ab4a374878981be21e969d6b1f6b41"
	},
	{
		"id": "5568c59358a2",
		"ts": "2026-07-08T11:44:50.384Z",
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
		"liquidityUsd": 4905872.45,
		"hash": "5568c59358a2e4cff92a3c0e51babface75041bbd4ab67e0e8e139e53f9d18e9"
	},
	{
		"id": "010ec85ac847",
		"ts": "2026-07-08T11:44:50.626Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 920569.53,
		"hash": "010ec85ac8472c341c9d60a388565f692f536d53f987b4f4fd970766e432ee7d"
	},
	{
		"id": "5b9d9283926c",
		"ts": "2026-07-08T11:44:50.864Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 378480.47,
		"hash": "5b9d9283926c5a4e36b336f857bc91263ff8385d6219d454c05d101a47f80d08"
	},
	{
		"id": "1ec31286d4a3",
		"ts": "2026-07-08T11:44:51.106Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3049853.06,
		"hash": "1ec31286d4a30073401b6267a43b6670d78c47b883b849574c471148713609c7"
	},
	{
		"id": "fe453411753b",
		"ts": "2026-07-08T11:44:51.347Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1868952.05,
		"hash": "fe453411753b7cfc43c05628bfb5c1a5d0d82d6bf5944576bab5b8e4a00b88a0"
	},
	{
		"id": "007949bdd335",
		"ts": "2026-07-08T11:44:51.587Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1608433.08,
		"hash": "007949bdd335bdd210be6f179475d9600a7e9ff8cca1c5ea9e4a10525faf600c"
	},
	{
		"id": "71444e11ea38",
		"ts": "2026-07-08T11:44:51.830Z",
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
		"liquidityUsd": 1245799.35,
		"hash": "71444e11ea385b9e28726f2f1d4ebd1dcd8e43badf0eff32c0c681cd48614828"
	},
	{
		"id": "1347fb3a4cc3",
		"ts": "2026-07-08T11:44:52.680Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4481033.87,
		"hash": "1347fb3a4cc3bcae7aa08a767c15446f17a4ce6ae7a54b66068f554880f81e9b"
	},
	{
		"id": "b25c779c4365",
		"ts": "2026-07-08T11:44:52.918Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7262008.12,
		"hash": "b25c779c436570648ccdc7ef6fd21957b74b663906d52d875a10d6e2da158294"
	},
	{
		"id": "daad8771a740",
		"ts": "2026-07-08T09:24:01.001Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 101703866.2,
		"hash": "daad8771a740a1b4671cebcda8f8a0a5d7a1d03a87bd051d9e23ce066041fac1"
	},
	{
		"id": "428e91185f65",
		"ts": "2026-07-08T09:24:01.576Z",
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
		"liquidityUsd": 15750187.85,
		"hash": "428e91185f65fe7ca859bec2b29da230b3bed2551ecbc3a7ffbc22c879d9e958"
	},
	{
		"id": "b1e6371265d1",
		"ts": "2026-07-08T09:24:01.819Z",
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
		"liquidityUsd": 1358383.69,
		"hash": "b1e6371265d1fbe71664747ebf34d46be2695b759ce15b7968f715b4a2f7d838"
	},
	{
		"id": "9909dfbf730f",
		"ts": "2026-07-08T09:24:02.066Z",
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
		"liquidityUsd": 33287219.69,
		"hash": "9909dfbf730f9cbc715aac1c4ec88e591055be0b948c887d7c18d132ff029084"
	},
	{
		"id": "6ac3b332c846",
		"ts": "2026-07-08T09:24:02.309Z",
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
		"liquidityUsd": 3905531.26,
		"hash": "6ac3b332c84642210c1b1a0d22e0176eaeacd7e4077472722695205df344db1e"
	},
	{
		"id": "6c223413085a",
		"ts": "2026-07-08T09:24:02.552Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 967813.39,
		"hash": "6c223413085acbc38789373f89b60297576a260ea9b736f673c6957be4263deb"
	},
	{
		"id": "70e2b6fb5fa0",
		"ts": "2026-07-08T09:24:02.796Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33287219.69,
		"hash": "70e2b6fb5fa0f14bae88b5b40a209f5d34d4559d5e1d50308b1347f6d9417ec6"
	},
	{
		"id": "4feac1b5f96e",
		"ts": "2026-07-08T09:24:03.052Z",
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
		"liquidityUsd": 2453407.23,
		"hash": "4feac1b5f96eabbc007d6ffee78d6c0107f20f3f25d5ee5a6052766b38438030"
	},
	{
		"id": "a9b3f20f469e",
		"ts": "2026-07-08T09:24:03.295Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 50861.13,
		"hash": "a9b3f20f469e4fc24b76e77f929ea8179041efcc863c5c2b9f2cc060ef39e047"
	},
	{
		"id": "79202d7dbb63",
		"ts": "2026-07-08T09:24:03.536Z",
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
		"liquidityUsd": 4773887.76,
		"hash": "79202d7dbb631e628030c376b7f519d6bb10f1ff6e046c9ee29e27748d5ece2a"
	},
	{
		"id": "44d52c683423",
		"ts": "2026-07-08T09:24:03.763Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1846331.6,
		"hash": "44d52c6834232e43ff542907048e4f32f70ec58655f39c337804f1fd3f7926a5"
	},
	{
		"id": "96e009aecf7d",
		"ts": "2026-07-08T09:24:03.990Z",
		"symbol": "Claude",
		"token": "0xeF34d1ba20131f0e6Ea93a8C3E9397a871Ab7B07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 689166.1,
		"hash": "96e009aecf7d7349be9f062024319e0f0daca5a5c2897cb7c7c2ed8f57744460"
	},
	{
		"id": "c6855f1f940a",
		"ts": "2026-07-08T09:24:04.215Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 901139.38,
		"hash": "c6855f1f940a6b3ead88140ddff05c12d1c98e218c5e281d15b63834a5c78337"
	},
	{
		"id": "f3968222126d",
		"ts": "2026-07-08T09:24:04.442Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2926529.9,
		"hash": "f3968222126d83903c6bd64a5d3d76def1667ec0490ab24ce0096e323ed7728b"
	},
	{
		"id": "6ed76c690047",
		"ts": "2026-07-08T09:24:04.668Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1597360.04,
		"hash": "6ed76c6900477e869490b773af3ed07f09ac7885ccaba84759a9da8fade57f97"
	},
	{
		"id": "d49a2bb9ec6f",
		"ts": "2026-07-08T09:24:04.896Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 381077.4,
		"hash": "d49a2bb9ec6fa9ed38dd48b06353d52b49c99174ce957e33b2b6d47988d96789"
	},
	{
		"id": "c98c82a336ce",
		"ts": "2026-07-08T09:24:05.612Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 112577.11,
		"hash": "c98c82a336ce709bbcf0ad4b4a6ad203b9272f836680098dbadc3dce589e66bf"
	},
	{
		"id": "b13122f323fe",
		"ts": "2026-07-08T09:24:05.837Z",
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
		"liquidityUsd": 1320506.19,
		"hash": "b13122f323feb62ec4a4113567d9306fa378bb462a7e8d86c1d666cca8aa67e4"
	},
	{
		"id": "6917b99df7bb",
		"ts": "2026-07-08T06:25:09.971Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102268080.43,
		"hash": "6917b99df7bbc67e3a34f637feb3d31d4e7f8c81829956fa4f87f18654a90c72"
	},
	{
		"id": "cb20ec06c141",
		"ts": "2026-07-08T06:25:10.500Z",
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
		"liquidityUsd": 15966488.52,
		"hash": "cb20ec06c14113c7592c1adcd5c4bb1a33815e9d8e86e04d635914b758d467cb"
	},
	{
		"id": "c50804986281",
		"ts": "2026-07-08T06:25:10.760Z",
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
		"liquidityUsd": 1371530.96,
		"hash": "c508049862816ad2b062397f284f661e6f017c374893cb40e99969c641dece0c"
	},
	{
		"id": "0e078cad7197",
		"ts": "2026-07-08T06:25:11.013Z",
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
		"liquidityUsd": 33828993.01,
		"hash": "0e078cad719761393244b6b8616a3406c901be15b64b40d721c0a2da079f4551"
	},
	{
		"id": "3a0a713d2273",
		"ts": "2026-07-08T06:25:11.270Z",
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
		"liquidityUsd": 3963947.64,
		"hash": "3a0a713d227382af8c19619ceb4d86db132f768934717772d120d61b4f88d38d"
	},
	{
		"id": "168a9fab3de8",
		"ts": "2026-07-08T06:25:13.221Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 968346.66,
		"hash": "168a9fab3de897505389ca40f0e03de88fdc80eca0c1ec59cc470cb6a2690389"
	},
	{
		"id": "72ded0e9a80a",
		"ts": "2026-07-08T06:25:13.472Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33828993.01,
		"hash": "72ded0e9a80a6cd75f9a0483ae68e63bf82c4b4c30b40c3b83d296117fd9599d"
	},
	{
		"id": "9512b7dfe006",
		"ts": "2026-07-08T06:25:13.725Z",
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
		"liquidityUsd": 2486944.75,
		"hash": "9512b7dfe0066dbc981e530a81d99fe997255044a31f162ebda9e19c93f01dcc"
	},
	{
		"id": "2366127ae0a9",
		"ts": "2026-07-08T06:25:13.974Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115305.91,
		"hash": "2366127ae0a9cc78ed9443e61ca39df0beb1a8f34d59c0a4f7ae8f657bd1e4ae"
	},
	{
		"id": "fb468e8d9003",
		"ts": "2026-07-08T06:25:14.226Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 54293.19,
		"hash": "fb468e8d9003f7a34ca56447a68d5360f89837f780363911c03b27c783660531"
	},
	{
		"id": "b0ac97fe2be5",
		"ts": "2026-07-08T06:25:14.463Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4911798.31,
		"hash": "b0ac97fe2be50d7e2b5cfa48bd5e0b9b313e7125ccb6c2b6b7298fd1114c88bc"
	},
	{
		"id": "81a643a7ff5d",
		"ts": "2026-07-08T06:25:14.700Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1883254.12,
		"hash": "81a643a7ff5da47a0e6fdd3f0a56a0deaedf7b0e09b733ac4728c9fbed8dfaca"
	},
	{
		"id": "3053b40289f7",
		"ts": "2026-07-08T06:25:14.938Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2989560.68,
		"hash": "3053b40289f7df08e6d65cac19c4178a38dd87bea6dd18627281827d83f74386"
	},
	{
		"id": "d3828583d626",
		"ts": "2026-07-08T06:25:15.174Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 534153.5,
		"hash": "d3828583d626d639cdd4cf34a93594eed5baba5518e1848df40f96ac17db9267"
	},
	{
		"id": "2d95937cc787",
		"ts": "2026-07-08T06:25:16.681Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 810875.25,
		"hash": "2d95937cc787994be2444d21f63c4713f1ef4f76ff4d8a084d6d99e098776529"
	},
	{
		"id": "77ebb0e3bd0d",
		"ts": "2026-07-08T06:25:19.462Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4529752.95,
		"hash": "77ebb0e3bd0d4ec1c7ad9c4edcc6f1f9c03324f99743f8e9308d41604c99c232"
	},
	{
		"id": "4a907aa813b9",
		"ts": "2026-07-08T06:25:19.698Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 150761.73,
		"hash": "4a907aa813b9464450d9d9188f2d739c381dbc3c32e416d3538bcda64d6ddf25"
	},
	{
		"id": "a0e97dcda267",
		"ts": "2026-07-08T06:25:20.558Z",
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
		"liquidityUsd": 1224177.47,
		"hash": "a0e97dcda267d29964fabcebc007d71f4958431cc2e6303647802bf64bcc49af"
	},
	{
		"id": "962799212369",
		"ts": "2026-07-08T06:25:20.796Z",
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
		"liquidityUsd": 7413249.25,
		"hash": "962799212369c34d6b40f267a5c1cfe9317cdfbfd6934a99ef4c462eb0b4239c"
	},
	{
		"id": "1b32f1e4ec45",
		"ts": "2026-07-08T03:32:13.205Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102201069.86,
		"hash": "1b32f1e4ec45e745d1c4b1a669f8507e230f9ec99ab50d02e567812b75f63b53"
	},
	{
		"id": "12a160e915e2",
		"ts": "2026-07-08T03:32:13.572Z",
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
		"liquidityUsd": 15653685.91,
		"hash": "12a160e915e260e16af070ebc58e373539b820ee253b7d9c4700f06b7bda5139"
	},
	{
		"id": "e1f085416166",
		"ts": "2026-07-08T03:32:13.787Z",
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
		"liquidityUsd": 1392702.16,
		"hash": "e1f0854161663f69dcc80a4e4789966c42c34334d1b7b0d88807f006f2f575c0"
	},
	{
		"id": "f1af0bb632c8",
		"ts": "2026-07-08T03:32:14.803Z",
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
		"liquidityUsd": 34407441.45,
		"hash": "f1af0bb632c8a927b273f2a8e3b96e1e2b274800935609383cfc79290d2d3bc5"
	},
	{
		"id": "846a129b0f1a",
		"ts": "2026-07-08T03:32:15.012Z",
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
		"liquidityUsd": 3991220.43,
		"hash": "846a129b0f1a30dabfc15405ae84e3eb03ac3fce4d7eb3d7d551ff66e80f6178"
	},
	{
		"id": "57b3a761b9bc",
		"ts": "2026-07-08T03:32:15.237Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 972088.63,
		"hash": "57b3a761b9bc52d4ec937b17992ea012ed9ce907ec234e1b0e9d75228df08b16"
	},
	{
		"id": "bc6a5db7c6eb",
		"ts": "2026-07-08T03:32:15.591Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34407441.45,
		"hash": "bc6a5db7c6eb3c325f997b80539a2d78df447bacd130ac57a4296a1377e8feef"
	},
	{
		"id": "bb76207ce611",
		"ts": "2026-07-08T03:32:16.592Z",
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
		"liquidityUsd": 2502210.35,
		"hash": "bb76207ce6110c7c1eb8fc3ee52ea91f8d2db3a4abb4c6eece49aa49af4cbe57"
	},
	{
		"id": "4624409da039",
		"ts": "2026-07-08T03:32:16.800Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 108380.53,
		"hash": "4624409da03941bcc955dd8cd624926c5b34d85d67768f5f47984222d90ce3bf"
	},
	{
		"id": "6870218569f0",
		"ts": "2026-07-08T03:32:17.008Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 63079.53,
		"hash": "6870218569f0baa104a1d2435d4d406e0f0a5e99a76df7f1c09d8b8a2d6cef07"
	},
	{
		"id": "0b79eb42b0b7",
		"ts": "2026-07-08T03:32:17.205Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1974409.52,
		"hash": "0b79eb42b0b7d0325fbeb8c3f51f20d7b7b20f56a2756ca3b0f6a4518c1af0f7"
	},
	{
		"id": "6904a72eed5d",
		"ts": "2026-07-08T03:32:17.399Z",
		"symbol": "hTEA",
		"token": "0xa1A0B2E02B0E6830aD5A4A7211691200945d8919",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 171633.27,
		"hash": "6904a72eed5d5f3a8f77bd205330ed02facdbbdcb87dc073de372a04e659409e"
	},
	{
		"id": "a22c63a732d0",
		"ts": "2026-07-08T03:32:17.597Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5110749.35,
		"hash": "a22c63a732d01cf1f220276228988b3d422d45b92ccf213fc7c25c35c7071d29"
	},
	{
		"id": "243187c627a3",
		"ts": "2026-07-08T03:32:17.791Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 549363.83,
		"hash": "243187c627a339a858c2dfa4ef850bf0813ecb41b058854beb037ce855d7384f"
	},
	{
		"id": "2d3e8aca32c4",
		"ts": "2026-07-08T03:32:17.994Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2961574.71,
		"hash": "2d3e8aca32c484ee9d83c98d8eee5904d65bcdb3c1d6e8efb9a537914dcd2b4e"
	},
	{
		"id": "3e170418f3e3",
		"ts": "2026-07-08T03:32:18.208Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 166117.5,
		"hash": "3e170418f3e337f28b1b9fe159363816b1cc1b5d8b8e71444505dec04e9e4c67"
	},
	{
		"id": "c3dffd36799d",
		"ts": "2026-07-08T03:32:18.406Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4600148.52,
		"hash": "c3dffd36799d0d2068715ab624b1b8a1d1775c800c6fae3d80a4dd447ec79f6f"
	},
	{
		"id": "d8feb24190af",
		"ts": "2026-07-08T03:32:18.609Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1012060.08,
		"hash": "d8feb24190af95800e50db4527e2dd106e048d70b982794251e5d03844feee9d"
	},
	{
		"id": "1ab6c9c3f1db",
		"ts": "2026-07-07T23:59:26.935Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102215332.8,
		"hash": "1ab6c9c3f1dbe514eeddeb163bb91f1ef60913925ca3aff6ab77a209a5a64769"
	},
	{
		"id": "4173b92065d7",
		"ts": "2026-07-07T23:59:27.287Z",
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
		"liquidityUsd": 16018922.57,
		"hash": "4173b92065d729ee3ecabd18c82e9c282d22d746f8495e7b75115359b4ec1c2a"
	},
	{
		"id": "b1d76e22da6e",
		"ts": "2026-07-07T23:59:27.516Z",
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
		"liquidityUsd": 1403557.06,
		"hash": "b1d76e22da6e5a17827cb41b49e8bc53b28cc2420ec64aeec1f3da7c7a2ca323"
	},
	{
		"id": "b3714284d245",
		"ts": "2026-07-07T23:59:27.711Z",
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
		"liquidityUsd": 34281576.39,
		"hash": "b3714284d24536c87457b6f2760481d97c46e5f5724af8f55faefcf9b90dac2d"
	},
	{
		"id": "05b59c129cae",
		"ts": "2026-07-07T23:59:27.904Z",
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
		"liquidityUsd": 4011452.65,
		"hash": "05b59c129caed32a43692c66ab1eb9e6b05069928be6633b10e1b16319979c74"
	},
	{
		"id": "5e866ddd0e22",
		"ts": "2026-07-07T23:59:28.125Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 984261.05,
		"hash": "5e866ddd0e22a9f1137dca9454d160cf9ded1a76351dd6ff39be713913e0cce5"
	},
	{
		"id": "a36478392811",
		"ts": "2026-07-07T23:59:28.314Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34281576.39,
		"hash": "a3647839281162d9ed77580e663f53f8936e27f659f85865d8728732004986bc"
	},
	{
		"id": "a5aa75199050",
		"ts": "2026-07-07T23:59:28.553Z",
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
		"liquidityUsd": 2553302.55,
		"hash": "a5aa751990509af8389f8c3cee899d9e5b5f4f56ddc743f88677d84eea029c97"
	},
	{
		"id": "5b2d944856d3",
		"ts": "2026-07-07T23:59:28.743Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 119386.1,
		"hash": "5b2d944856d31e226aff5db7ee2b86854eecad823c6de5faaa67b39c085847df"
	},
	{
		"id": "c8d1956aeb29",
		"ts": "2026-07-07T23:59:28.935Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 66360.24,
		"hash": "c8d1956aeb29d195a9bee87205d3b1c23db402fdd63a43bfe67d2655d2b6a974"
	},
	{
		"id": "ba3146ea61a2",
		"ts": "2026-07-07T23:59:29.120Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 174029.9,
		"hash": "ba3146ea61a27b5bbec78a2fde1831a05db24b7247f1c9397cc1ff251941a159"
	},
	{
		"id": "8d37a5f61575",
		"ts": "2026-07-07T23:59:29.308Z",
		"symbol": "hTEA",
		"token": "0xa1A0B2E02B0E6830aD5A4A7211691200945d8919",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 192939.02,
		"hash": "8d37a5f615753778f6e636f371b82b375296d71c3e826a681ab41bc43113d08d"
	},
	{
		"id": "e28f2abab656",
		"ts": "2026-07-07T23:59:29.490Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3039919.58,
		"hash": "e28f2abab65617a2ba8c5ed3b848b7300ac474fa24ba430218d10d12d208ec8d"
	},
	{
		"id": "db23ede89d6b",
		"ts": "2026-07-07T23:59:29.666Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5245225,
		"hash": "db23ede89d6b9339f5db774b2043861da8d761a427c333dcb0135cc6bd9570bd"
	},
	{
		"id": "1b8853a74fb4",
		"ts": "2026-07-07T23:59:30.564Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2055333.61,
		"hash": "1b8853a74fb4760300de69f28c57faaad19e5c5f2b3779300968fc2048210e59"
	},
	{
		"id": "1850cd807222",
		"ts": "2026-07-07T23:59:30.746Z",
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
		"liquidityUsd": 7385933.74,
		"hash": "1850cd807222e118a384199ea101ee863fd08e6562865aa7dc8883ca69b4722d"
	},
	{
		"id": "f8d591925dc6",
		"ts": "2026-07-07T23:59:30.923Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 1868387.63,
		"hash": "f8d591925dc61af994c673231a3ed6e5a4b8aabd9bb7d169da889a869b57bfaf"
	},
	{
		"id": "8c351800fba0",
		"ts": "2026-07-07T23:59:31.102Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1024413.69,
		"hash": "8c351800fba09ab04f227e5c29855f7f215b9cf60bb6eb457ffcd28e86ab258c"
	},
	{
		"id": "1c0426d1e34f",
		"ts": "2026-07-07T22:57:39.361Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102172088.04,
		"hash": "1c0426d1e34fa35220ec88db30996585a3e4098e7833da02d89113856e92818f"
	},
	{
		"id": "ba84feb30c6d",
		"ts": "2026-07-07T22:57:39.639Z",
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
		"liquidityUsd": 16044647.84,
		"hash": "ba84feb30c6db7c364e74affb7ffa2eb72d19507e75e597d2738ec41cd0c6fcd"
	},
	{
		"id": "a844e9d382d0",
		"ts": "2026-07-07T22:57:39.921Z",
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
		"liquidityUsd": 1406631.27,
		"hash": "a844e9d382d0c826a5d32b8674283645b7c76a0203646ffc8fb04c118224fcb2"
	},
	{
		"id": "f35d43932e9d",
		"ts": "2026-07-07T22:57:40.423Z",
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
		"liquidityUsd": 34436071.82,
		"hash": "f35d43932e9d96260e0bfbaf11a09cb37c77e90e6d349ee35eba878e3da23196"
	},
	{
		"id": "f2e348f55a2d",
		"ts": "2026-07-07T22:57:40.689Z",
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
		"liquidityUsd": 4027586.59,
		"hash": "f2e348f55a2de6b223ba405df089598d0b411ccd411d13d1cbc0908edf22ad04"
	},
	{
		"id": "097849fc4bef",
		"ts": "2026-07-07T22:57:40.962Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 986833.68,
		"hash": "097849fc4bef15b9dd28b285653b6cf448350707a6f318cf7e05943a34bab83a"
	},
	{
		"id": "1b4cc83c056c",
		"ts": "2026-07-07T22:57:41.212Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34436071.82,
		"hash": "1b4cc83c056c35b89bd81d7328ddea2f7f3a0d4eaaa16597ec56fc005a1ea48f"
	},
	{
		"id": "115b6d317846",
		"ts": "2026-07-07T22:57:41.482Z",
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
		"liquidityUsd": 2562170.3,
		"hash": "115b6d3178468b2fe76b8e4edfd9b46568d3d6fb362059ce06d09587063a0c49"
	},
	{
		"id": "8bd4a88fbefa",
		"ts": "2026-07-07T22:57:41.733Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118135.52,
		"hash": "8bd4a88fbefae31c23fd67951646e1edf82f99da2fdca7df0156778e634b62cc"
	},
	{
		"id": "0da3fc45192f",
		"ts": "2026-07-07T22:57:42.006Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 67296.57,
		"hash": "0da3fc45192fd93f424d084e9e8099c3569b5d720f7ce19f3be96e82ddb0e8fd"
	},
	{
		"id": "4cf675c42e3a",
		"ts": "2026-07-07T22:57:42.245Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 176052.23,
		"hash": "4cf675c42e3ac8be6c2d47114f8715330c2b01693064d8a932c9fb44f14c9131"
	},
	{
		"id": "881aa57e7fec",
		"ts": "2026-07-07T22:57:42.501Z",
		"symbol": "hTEA",
		"token": "0xa1A0B2E02B0E6830aD5A4A7211691200945d8919",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 182389.71,
		"hash": "881aa57e7fec83ce16dbb0e9f4e7001088ca8fb4064ba74f640192f35d1b242b"
	},
	{
		"id": "2225809e7412",
		"ts": "2026-07-07T22:57:42.741Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3038057.27,
		"hash": "2225809e7412731fd3585b73b20399eaf6e78601b6019d54392388329b1d3e86"
	},
	{
		"id": "67ff463c2628",
		"ts": "2026-07-07T22:57:42.996Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2058811.52,
		"hash": "67ff463c26289334427114f6333919fc231b18cfa4763017dbdaf9224dc95f46"
	},
	{
		"id": "44236aa6478a",
		"ts": "2026-07-07T22:57:43.234Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5232420.94,
		"hash": "44236aa6478a93d976a59046f22c32317bf295d1589b9af1ce1d9394da26a7ed"
	},
	{
		"id": "1bce91c7b53b",
		"ts": "2026-07-07T22:57:43.488Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7449396.99,
		"hash": "1bce91c7b53b7ab8601a22b1ddf949dacf767df7f7cd4ad8e30460991bdc39f8"
	},
	{
		"id": "b105ab6433a1",
		"ts": "2026-07-07T22:57:43.724Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1871200.16,
		"hash": "b105ab6433a1ffecdde2cdc2d8584d79f714ffa72095e7b166ca4b258ee92e0b"
	},
	{
		"id": "8005bf00afa6",
		"ts": "2026-07-07T22:57:43.979Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1033335.15,
		"hash": "8005bf00afa6995333ed87ceb74d556e9f18321f09cdf2c5208ed968e0ab063d"
	},
	{
		"id": "301e3d0a2acf",
		"ts": "2026-07-07T21:20:50.873Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102419300.89,
		"hash": "301e3d0a2acf72fd727d4af4171094cbdf5156367ea9f25c76fa14dd631d881b"
	},
	{
		"id": "bbfb511ac400",
		"ts": "2026-07-07T21:20:51.146Z",
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
		"liquidityUsd": 15328534.44,
		"hash": "bbfb511ac4006b8ab4dce6045fe510b02860169b97236d5a7f06a728f5e96d72"
	},
	{
		"id": "1aa0fb4841b5",
		"ts": "2026-07-07T21:20:51.653Z",
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
		"liquidityUsd": 1410253.78,
		"hash": "1aa0fb4841b505519fa2646e54fb98dfd752dcc7f8274bf012cfbacd73b24c8f"
	},
	{
		"id": "789d54df83b9",
		"ts": "2026-07-07T21:20:51.911Z",
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
		"liquidityUsd": 34714634.63,
		"hash": "789d54df83b9efc3a0e9527bbc1deb5aeca09eb40bd21e67ba85a51b772f33a6"
	},
	{
		"id": "f4f9bdc727cc",
		"ts": "2026-07-07T21:20:52.170Z",
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
		"liquidityUsd": 4034554.13,
		"hash": "f4f9bdc727ccd2863d7e3ecbc308187be35116384e43c205c5bb977723f4f1d8"
	},
	{
		"id": "ee503e892713",
		"ts": "2026-07-07T21:20:52.459Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 995433.05,
		"hash": "ee503e89271324dae9e06e974cabc775c3ecc7f7a88899e8a5220d142e30024e"
	},
	{
		"id": "d041e7899ee9",
		"ts": "2026-07-07T21:20:52.741Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34714634.63,
		"hash": "d041e7899ee9f920538478847d7ef11c1014312e060a0cf2dd18b8385cf68d47"
	},
	{
		"id": "7958fd0d50e9",
		"ts": "2026-07-07T21:20:53.037Z",
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
		"liquidityUsd": 2572349.1,
		"hash": "7958fd0d50e94a63af44481d8ff59fd64bdda3023d134290a44e971c5c20193a"
	},
	{
		"id": "381bc6c9a492",
		"ts": "2026-07-07T21:20:53.322Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113975.25,
		"hash": "381bc6c9a492a8b732f9345b27a156b3c1ebd8e979ec8bfa2ce669345eea4d84"
	},
	{
		"id": "f3f8f9cc1771",
		"ts": "2026-07-07T21:20:53.601Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 69683.72,
		"hash": "f3f8f9cc17716cb3a799cce766db85d26360075de419ee8e379dc7c1c62368d9"
	},
	{
		"id": "4c7597b91db4",
		"ts": "2026-07-07T21:20:53.850Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 176665.88,
		"hash": "4c7597b91db4fd95d75d13db2d7d6145dcf5e38893b274aca1733cdfba6cd40c"
	},
	{
		"id": "e8701778e8c5",
		"ts": "2026-07-07T21:20:54.107Z",
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
		"liquidityUsd": 1373913.05,
		"hash": "e8701778e8c5637ca3d839cad550273e229c766014ae6c0a064b5019edbcd1f8"
	},
	{
		"id": "daa5eaa4fe90",
		"ts": "2026-07-07T21:20:54.347Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7492297.97,
		"hash": "daa5eaa4fe9072c11a1cfd35fcebbe71499fe19fd6f135d21cf3247d74888ca5"
	},
	{
		"id": "e0a9587ce49b",
		"ts": "2026-07-07T21:20:54.592Z",
		"symbol": "hTEA",
		"token": "0xa1A0B2E02B0E6830aD5A4A7211691200945d8919",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 171364.71,
		"hash": "e0a9587ce49b334c21d4eb0eb56572cff20c6eb95ebba8f89961a6ffe8ef5c38"
	},
	{
		"id": "983466a3cbeb",
		"ts": "2026-07-07T21:20:54.848Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2889423.06,
		"hash": "983466a3cbeb009f3a6d604eff8e9b34c3c88be699e3fb985a2d5c2cd08ca818"
	},
	{
		"id": "e26fe50700fe",
		"ts": "2026-07-07T21:20:55.087Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2072258.04,
		"hash": "e26fe50700fe0a1dd210a9329459d79193d26029ee0fc70bbdccb04dae6571a3"
	},
	{
		"id": "91bb347d14ea",
		"ts": "2026-07-07T21:20:55.330Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5133351.74,
		"hash": "91bb347d14ea9fa29fba079b2e16779637eab6bd768e4f07548c7640a4dbeb3d"
	},
	{
		"id": "83d45b54812a",
		"ts": "2026-07-07T21:20:55.583Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 567139.11,
		"hash": "83d45b54812ac9d5271f96138a7a3a5ee039f980237eaa26695dffffdde3cc6d"
	},
	{
		"id": "69cf567223c9",
		"ts": "2026-07-07T19:50:14.090Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102569036.54,
		"hash": "69cf567223c9226db53f2778d6ff5305ffd140bbcf69fa05bbef9fc0e089deef"
	}
]
