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
	"updatedAt": "2026-09-22T00:33:10.840Z",
	"tokensScored": 18208,
	"verdictsIssued": 18208,
	"safe": 15437,
	"risky": 1323,
	"likelyRug": 1448,
	"ticks": 1038
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "f5b6bf680920",
		"ts": "2026-09-22T00:33:07.303Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 145442540.59,
		"hash": "f5b6bf6809207c191ab7c3d8f5a23458e31512259ef049a3615823084f2a5efb"
	},
	{
		"id": "dc31abf1e70b",
		"ts": "2026-09-22T00:33:07.563Z",
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
		"liquidityUsd": 17551213.3,
		"hash": "dc31abf1e70b0f8e1ca3d764d414f01bd7b77fa9e8887cc65cf4cc652550e5f2"
	},
	{
		"id": "8b2edfb12d01",
		"ts": "2026-09-22T00:33:07.778Z",
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
		"liquidityUsd": 918130.75,
		"hash": "8b2edfb12d016d4234cd7c8b261a8c74752714cc85790292661b2ce2c53d85fc"
	},
	{
		"id": "1512bf767227",
		"ts": "2026-09-22T00:33:07.988Z",
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
		"liquidityUsd": 36348494.62,
		"hash": "1512bf767227b67aaa10bd3486048cf21b52487e1e3513c7e3b3edcfdcbbfc22"
	},
	{
		"id": "9cd12d29385b",
		"ts": "2026-09-22T00:33:08.199Z",
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
		"liquidityUsd": 4708867.65,
		"hash": "9cd12d29385bc0b842ca789ad579decb2624fd013a55f7c9ec09139d6e877ec7"
	},
	{
		"id": "01bb1646bc4e",
		"ts": "2026-09-22T00:33:08.410Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1334960.46,
		"hash": "01bb1646bc4e7511d5f751cded8ce29fe04cdd83967535ce079aa135a149ecf8"
	},
	{
		"id": "7bcbeea1df35",
		"ts": "2026-09-22T00:33:08.627Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36348494.62,
		"hash": "7bcbeea1df35147d9d9e653bd01ff9a93ffc61e5e7332586c2708e14ebeb91c1"
	},
	{
		"id": "951179878fc9",
		"ts": "2026-09-22T00:33:08.839Z",
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
		"liquidityUsd": 1321525.99,
		"hash": "951179878fc9d68225c80eae3d564b7656eb587baf31381586b48dbcc3ffd957"
	},
	{
		"id": "6f1181a602bd",
		"ts": "2026-09-22T00:33:09.049Z",
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
		"liquidityUsd": 18927480,
		"hash": "6f1181a602bdeebbb437358e571ea1f3f33260927d7a322a52f373d26c54f0c4"
	},
	{
		"id": "0f5ccd489b63",
		"ts": "2026-09-22T00:33:09.256Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1157918.64,
		"hash": "0f5ccd489b635a7f523c0e5bc0281fa8ef69d859106d4c1f6f7a79c52dacec6b"
	},
	{
		"id": "324199f2abdb",
		"ts": "2026-09-22T00:33:09.455Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1593039,
		"hash": "324199f2abdb4764f70a76e1c3f828835abd40ba9b0eb69de0420a3561fbd7cb"
	},
	{
		"id": "2c8ebe292c5b",
		"ts": "2026-09-22T00:33:09.655Z",
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
		"liquidityUsd": 956836.92,
		"hash": "2c8ebe292c5bf3fa79bdf723753a1bf8219e263f16721768d61f8bf11747c733"
	},
	{
		"id": "8b0023973aab",
		"ts": "2026-09-22T00:33:09.855Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2274317.78,
		"hash": "8b0023973aab547ae5a45f0e154af32fe9ceb97db1f24098396829b2adf321b4"
	},
	{
		"id": "4fc5c7822954",
		"ts": "2026-09-22T00:33:10.051Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 556893.42,
		"hash": "4fc5c782295400e21026683b5827a9b6ba2d29b12eb7cae6cff37baf9cd20d61"
	},
	{
		"id": "1a70ad751c73",
		"ts": "2026-09-22T00:33:10.253Z",
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
		"liquidityUsd": 3552908.63,
		"hash": "1a70ad751c737bd457b89636450e91128f02535c5d0b0a4ecffa07a712aa78fd"
	},
	{
		"id": "edc88bfb1375",
		"ts": "2026-09-22T00:33:10.448Z",
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
		"liquidityUsd": 879667.17,
		"hash": "edc88bfb137520cd9b378b45226a1b2770cf607c8e05ab5927e0d3c11b9a1ca4"
	},
	{
		"id": "33b6b3529061",
		"ts": "2026-09-22T00:33:10.638Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 555565.64,
		"hash": "33b6b35290616feb2d0145629e78322a75b4936d22c814f476a2de9499070547"
	},
	{
		"id": "39cdc2ae74e9",
		"ts": "2026-09-22T00:33:10.840Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4810195.08,
		"hash": "39cdc2ae74e9fbb3c2669c70dc173687b4c4f84aecf7f7ad57a1b3059bc3bc31"
	},
	{
		"id": "b44ab4431782",
		"ts": "2026-09-21T21:39:16.692Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 145911974.15,
		"hash": "b44ab4431782ffed7564ac23fd1ff97ce12d068767b0ea6771c70c62b31fe556"
	},
	{
		"id": "6f5fc5d321d9",
		"ts": "2026-09-21T21:39:16.894Z",
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
		"liquidityUsd": 13801510.61,
		"hash": "6f5fc5d321d92c3a4f9e5c70bef308f1099bba089e101e1d860bdf4ca61d1896"
	},
	{
		"id": "a5d94c4128a1",
		"ts": "2026-09-21T21:39:17.255Z",
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
		"liquidityUsd": 922165.6,
		"hash": "a5d94c4128a1001796bfae5d626c67ac37320589300f79d02379b482402023f2"
	},
	{
		"id": "f40d6483341b",
		"ts": "2026-09-21T21:39:17.448Z",
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
		"liquidityUsd": 36125985.1,
		"hash": "f40d6483341b6e23284b6a9cc13aaaaa93ebb46e38004714cbdf77eff5b19336"
	},
	{
		"id": "4aad2f857976",
		"ts": "2026-09-21T21:39:17.647Z",
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
		"liquidityUsd": 4651887.29,
		"hash": "4aad2f857976f15ed84b11c090f19994b171aa881a2e27c8f5ae9a8ae919f71d"
	},
	{
		"id": "556eb9fc799a",
		"ts": "2026-09-21T21:39:17.841Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1333119.7,
		"hash": "556eb9fc799aeb8af624feab23a56bca0f0183f190ffd75b113b6873106e25e4"
	},
	{
		"id": "d87d68f3962a",
		"ts": "2026-09-21T21:39:18.034Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36125985.1,
		"hash": "d87d68f3962a97ea18b41c86917decb35d9f4c0710d6ec78e9360bafd3635a9c"
	},
	{
		"id": "c019a791a7c1",
		"ts": "2026-09-21T21:39:18.231Z",
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
		"liquidityUsd": 1327154.35,
		"hash": "c019a791a7c1f945cf7de15bed23bf28aa988c16cae5ad54ef1028243e75eb96"
	},
	{
		"id": "2acd1951c715",
		"ts": "2026-09-21T21:39:18.432Z",
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
		"liquidityUsd": 18919810.43,
		"hash": "2acd1951c715f8d23d371b158888a471a1856f9a67f0ae6b49ce14c40eff4d55"
	},
	{
		"id": "653e230d07ec",
		"ts": "2026-09-21T21:39:18.625Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1662010.43,
		"hash": "653e230d07ec47e6a30e4735c9fa60878f975a80514ee21871f6311b4b0074bd"
	},
	{
		"id": "af892a5c9084",
		"ts": "2026-09-21T21:39:18.811Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1173648.04,
		"hash": "af892a5c90842f84ebc4e7fca76b6e63b89300e23c886ba38039fc1f0b7b3ab1"
	},
	{
		"id": "76842e7ed2d7",
		"ts": "2026-09-21T21:39:19.011Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 555018.08,
		"hash": "76842e7ed2d779ba2de19a74ba4aa5d0b4d129906c473e4f80f873be8d19125e"
	},
	{
		"id": "1faf5fe0f56f",
		"ts": "2026-09-21T21:39:19.249Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3468491.41,
		"hash": "1faf5fe0f56f74876816a377f071c6a71e3a66741c6b25e7ddbd2542f2e10d72"
	},
	{
		"id": "4c2cc04b582a",
		"ts": "2026-09-21T21:39:19.438Z",
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
		"liquidityUsd": 1044452.81,
		"hash": "4c2cc04b582a13930a451dfe17a35d4ffde3434cbbb63ae2fa5af42acc7698ed"
	},
	{
		"id": "200095779393",
		"ts": "2026-09-21T21:39:19.632Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 765403.27,
		"hash": "200095779393f022c3605146144c187ff053f0637d3417121185ff8e801173da"
	},
	{
		"id": "f8ad6c9cae9f",
		"ts": "2026-09-21T21:39:19.827Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2168250.85,
		"hash": "f8ad6c9cae9f0d22b94004ec04b719a40369fc3974374b983e433bf38634fa64"
	},
	{
		"id": "b3925cc57232",
		"ts": "2026-09-21T21:39:20.019Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4727395.71,
		"hash": "b3925cc5723244e1f70efc20242577d0421fe107fa1ef5338e794451c9fb0a31"
	},
	{
		"id": "4f347862381e",
		"ts": "2026-09-21T21:39:20.216Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 2699676.14,
		"hash": "4f347862381efc4c00170314b1a90ac3855f38d8b0e63549fcfd042ad56adf70"
	},
	{
		"id": "2399954e4bac",
		"ts": "2026-09-21T17:47:43.540Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146260056.62,
		"hash": "2399954e4bace0a1af882ecbacfa43790ad5407cf5a9e19538d19d38c909898a"
	},
	{
		"id": "43c7a65b7380",
		"ts": "2026-09-21T17:47:43.803Z",
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
		"liquidityUsd": 13248419.36,
		"hash": "43c7a65b7380243fc77715e88a1e5ebb144b1e5ce10cff6ef1c2d51e2c001512"
	},
	{
		"id": "00dbc1f9af16",
		"ts": "2026-09-21T17:47:44.069Z",
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
		"liquidityUsd": 918062.58,
		"hash": "00dbc1f9af16f66e853cde77867c362ea831bdacd96a153c7d497375f12e429b"
	},
	{
		"id": "6afcb80741cd",
		"ts": "2026-09-21T17:47:44.335Z",
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
		"liquidityUsd": 36043112.07,
		"hash": "6afcb80741cd48553775d33722e0b341722da127576fb65e274cb425f18ab38c"
	},
	{
		"id": "016397e0d66b",
		"ts": "2026-09-21T17:47:44.597Z",
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
		"liquidityUsd": 4607411.87,
		"hash": "016397e0d66b0c4ba9627e4871ae5d6676eea43eac0da1b4eae9e1dc51d27a76"
	},
	{
		"id": "c0b7c7cb6584",
		"ts": "2026-09-21T17:47:44.857Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1334476.33,
		"hash": "c0b7c7cb6584ad7bd265b9a0fbca4d535147330c71b75aa748ac88082006c418"
	},
	{
		"id": "24a4cb8e33f7",
		"ts": "2026-09-21T17:47:45.111Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36043112.07,
		"hash": "24a4cb8e33f785ee78d89ac42f870a59d2fa8f1b427ded7a72759bd5db2763f4"
	},
	{
		"id": "c5c749ba7c93",
		"ts": "2026-09-21T17:47:45.370Z",
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
		"liquidityUsd": 1193276.27,
		"hash": "c5c749ba7c930e1213f7dc316384ae7d2f8963c396c652429282a2bcc0714c31"
	},
	{
		"id": "3162251b5203",
		"ts": "2026-09-21T17:47:45.622Z",
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
		"liquidityUsd": 18521510.97,
		"hash": "3162251b52035c24bfc71f21a186b177bd498c60b6ef4d2c9d819ba5a3370d83"
	},
	{
		"id": "b741efca1222",
		"ts": "2026-09-21T17:47:45.886Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1171816.21,
		"hash": "b741efca122230a3b51f45dfe95310498d74a6e5f89cb9c3fd6cf7962ba2d523"
	},
	{
		"id": "2bdd2d3f3d9d",
		"ts": "2026-09-21T17:47:46.126Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1678661.95,
		"hash": "2bdd2d3f3d9d7670ca3ad2ca4e67114d5033335dfd2b44a3f7b56c74db44b876"
	},
	{
		"id": "1aba02a825d2",
		"ts": "2026-09-21T17:47:46.367Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 756688.81,
		"hash": "1aba02a825d263f425c0f9d79bfe14d7774da6d84a1819b98a7d8fc6e45e1548"
	},
	{
		"id": "99d85f11d643",
		"ts": "2026-09-21T17:47:46.606Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 561189.25,
		"hash": "99d85f11d643b3cdf383000f4c9ab8ee7add2a7081a900865c82cbbb47fef4e6"
	},
	{
		"id": "86265c0dd932",
		"ts": "2026-09-21T17:47:46.847Z",
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
		"liquidityUsd": 908982.28,
		"hash": "86265c0dd932ccc271ec989b13a33dec1372c2fa60ec416159372202d2907713"
	},
	{
		"id": "756f2b9b74f8",
		"ts": "2026-09-21T17:47:47.088Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3390473.55,
		"hash": "756f2b9b74f831a3756d8bbca0ebc250c4d79c0ef9aa3bfb205b30ebc6339084"
	},
	{
		"id": "e3257f2d389f",
		"ts": "2026-09-21T17:47:47.326Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4699630.49,
		"hash": "e3257f2d389f4b1a0dc829c90761a11b51e1727066432aca193e7dbcf94940b9"
	},
	{
		"id": "e70bfe42c94e",
		"ts": "2026-09-21T17:47:47.566Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 516784.7,
		"hash": "e70bfe42c94e2fc497bd27f19cdd85e2e6b93312affd6e416644da94defa69ec"
	},
	{
		"id": "5c149acfc0aa",
		"ts": "2026-09-21T17:47:47.805Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1228169.08,
		"hash": "5c149acfc0aac9d43de5bcc2aa311987b38e1cbc46a55b928b8f016aecab41d0"
	},
	{
		"id": "e68f571e2c54",
		"ts": "2026-09-21T11:53:01.374Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 128892116.38,
		"hash": "e68f571e2c54133520a069bd1b18c62a01b8395dd7e5483cce608d3754e27b7a"
	},
	{
		"id": "7890724ae1a3",
		"ts": "2026-09-21T11:53:01.858Z",
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
		"liquidityUsd": 13615427.64,
		"hash": "7890724ae1a38c2b9dda2e42185100820e557dbdcc77fdf37d0363fe5e94c6ab"
	},
	{
		"id": "b2ce34041a4d",
		"ts": "2026-09-21T11:53:02.126Z",
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
		"liquidityUsd": 902729.1,
		"hash": "b2ce34041a4dd188a77868b1151231d32f6c652e05201abb019765140b2c9b15"
	},
	{
		"id": "18fc7f42a3e6",
		"ts": "2026-09-21T11:53:02.604Z",
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
		"liquidityUsd": 36139382.32,
		"hash": "18fc7f42a3e69065c9750832b326adfa01e4ae19eab3c13e7777fdae56505c4b"
	},
	{
		"id": "dc89537cf608",
		"ts": "2026-09-21T11:53:02.856Z",
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
		"liquidityUsd": 4589831.39,
		"hash": "dc89537cf6084c6e4c18a98fb85f6ad8ca112304eff0feaaf36792151d056472"
	},
	{
		"id": "5c59a3fe8671",
		"ts": "2026-09-21T11:53:03.126Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1308282.38,
		"hash": "5c59a3fe86712f0d695ff121e997b263cb934582bf0537a011cd74f98d326859"
	},
	{
		"id": "e3719e40f365",
		"ts": "2026-09-21T11:53:03.389Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36139382.32,
		"hash": "e3719e40f365d4a112db4893bd895a3e8bbccacd5712a5268b182d449d2f41e7"
	},
	{
		"id": "e1abb5fbe157",
		"ts": "2026-09-21T11:53:03.643Z",
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
		"liquidityUsd": 1140160.25,
		"hash": "e1abb5fbe15791bc05569a1babd5159333e0e51a207a2ff4c86259a3a1e5dd96"
	},
	{
		"id": "c80cc305bb0b",
		"ts": "2026-09-21T11:53:03.956Z",
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
		"liquidityUsd": 19300970.7,
		"hash": "c80cc305bb0b6cba73d1934a515d2c93de76352448fb98230ae14bbca2da70de"
	},
	{
		"id": "55aef8d058fc",
		"ts": "2026-09-21T11:53:04.302Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"mintable",
			"owner_not_renounced"
		],
		"liquidityUsd": 822253.21,
		"hash": "55aef8d058fc703453d8665f7c056eb36bb6ff55accc341b95af8d7b55a88380"
	},
	{
		"id": "a8bedbd0c991",
		"ts": "2026-09-21T11:53:04.541Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1134956.18,
		"hash": "a8bedbd0c991daa57678719accad8fe96bc5415f7cae9f90c9e85aba5d93b62a"
	},
	{
		"id": "042cc57f2165",
		"ts": "2026-09-21T11:53:04.775Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1665364.78,
		"hash": "042cc57f2165cdd0565425c6f775bf7d9784792f432a6437af951750aaf968c0"
	},
	{
		"id": "b5324f3cee31",
		"ts": "2026-09-21T11:53:05.010Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 546854.7,
		"hash": "b5324f3cee316a1da74a7a582b5f78c5899aefa9c91074a9b0fcc2e882f00d63"
	},
	{
		"id": "0009dec6540b",
		"ts": "2026-09-21T11:53:05.247Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3378731.43,
		"hash": "0009dec6540bb43652e1a6b842a438f5a1e4736091e7c2a15186d612efd33454"
	},
	{
		"id": "7b2030082132",
		"ts": "2026-09-21T11:53:05.483Z",
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
		"liquidityUsd": 1073382.5,
		"hash": "7b2030082132b62268272cdecb339abd67e7bafd980ca32b33b2520f718ba8ee"
	},
	{
		"id": "a82e77d06e8b",
		"ts": "2026-09-21T11:53:05.715Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1057453.13,
		"hash": "a82e77d06e8b8f10a32d6915032bd1f2a43212b53dd029505befbbcca92de21e"
	},
	{
		"id": "da2914d381b4",
		"ts": "2026-09-21T11:53:05.949Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1529744.38,
		"hash": "da2914d381b4ed1eac1c623825efd4fa2420778a209d3a70f9f5396a7beb51fd"
	},
	{
		"id": "feaabf03153f",
		"ts": "2026-09-21T11:53:06.184Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4772763.67,
		"hash": "feaabf03153f0161a915368577f58ec9cfb56f372b1494784577747df642ded7"
	},
	{
		"id": "bb50a6a2b989",
		"ts": "2026-09-21T05:50:52.410Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129431433.69,
		"hash": "bb50a6a2b9890509bf2527881cf7f051eabeac535c7cd9071387a803f7ce01e2"
	},
	{
		"id": "21179500a6a7",
		"ts": "2026-09-21T05:50:52.676Z",
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
		"liquidityUsd": 17172347.29,
		"hash": "21179500a6a7539f88a6950a107bce85ed49b33de9d470c31e29bb7daebbf1c6"
	},
	{
		"id": "58aea040a5f3",
		"ts": "2026-09-21T05:50:52.934Z",
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
		"liquidityUsd": 879680.18,
		"hash": "58aea040a5f396c5bbf8df303f9c431f478697efd53294abfcf3d89ff609753b"
	},
	{
		"id": "967247929a51",
		"ts": "2026-09-21T05:50:53.195Z",
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
		"liquidityUsd": 34908303.89,
		"hash": "967247929a5186c7a09ac12796fb2e228fa90a704dc665ab9010f29a111af3b6"
	},
	{
		"id": "8a3991a274fa",
		"ts": "2026-09-21T05:50:53.445Z",
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
		"liquidityUsd": 4463730.08,
		"hash": "8a3991a274fa1a0a348e3d8802a86e531970f88b7904f8bf4097421c44f95585"
	},
	{
		"id": "5be314c34c41",
		"ts": "2026-09-21T05:50:53.698Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1277154.19,
		"hash": "5be314c34c41042e6d77f95dcc49aba804d797d906ef87ebf05d85a38753bf1e"
	},
	{
		"id": "006a82252422",
		"ts": "2026-09-21T05:50:53.946Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34908302.66,
		"hash": "006a822524221f12138e2180bca56fa1f53d1f724e4de43f797264b67c7a4efb"
	},
	{
		"id": "b6e22221d032",
		"ts": "2026-09-21T05:50:54.199Z",
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
		"liquidityUsd": 1129702.13,
		"hash": "b6e22221d03209893645819a01dd3663e1c6d3b0ef7dc9a8e2076ca25ee480c4"
	},
	{
		"id": "2ef7b780cf12",
		"ts": "2026-09-21T05:50:54.454Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"mintable",
			"owner_not_renounced"
		],
		"liquidityUsd": 785861.35,
		"hash": "2ef7b780cf12e4f72fd9e07daf97998358ae5d51235bfdee05926332706b67fc"
	},
	{
		"id": "e6efb3e6abe5",
		"ts": "2026-09-21T05:50:54.716Z",
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
		"liquidityUsd": 18730146.32,
		"hash": "e6efb3e6abe5a6c45ca223540b40ea87125549665f335f50a75a1065d203c18b"
	},
	{
		"id": "fa2fd00ad77f",
		"ts": "2026-09-21T05:50:54.949Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1105846.35,
		"hash": "fa2fd00ad77f05b0b49b140174241981dc91b8b23d702c042ac46a456c2c46fb"
	},
	{
		"id": "8afd8c60b9ae",
		"ts": "2026-09-21T05:50:55.187Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 547337.75,
		"hash": "8afd8c60b9ae6e9398454c7c82bbeb23d846011fdd98ef7d0fbc466e6be3f9dc"
	},
	{
		"id": "d274d7b253f0",
		"ts": "2026-09-21T05:50:55.418Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1590305.45,
		"hash": "d274d7b253f018903c164e8829b6677a2696a62acc1f7b257ef13e5dd6fe47e4"
	},
	{
		"id": "8c7ff9c76022",
		"ts": "2026-09-21T05:50:55.652Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1006725.2,
		"hash": "8c7ff9c76022c4d99e7ab230b4ac257fa3bc7535d8657338946fb09d2a0ae1f1"
	},
	{
		"id": "36d55008c6a0",
		"ts": "2026-09-21T05:50:55.888Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3268782.53,
		"hash": "36d55008c6a0264f6555ee8eaebffda8f9d7b955fca52930a1440faf06619a17"
	},
	{
		"id": "8d43294e7f8c",
		"ts": "2026-09-21T05:50:56.121Z",
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
		"liquidityUsd": 647379.56,
		"hash": "8d43294e7f8c72ed376ca636c6da6e9cc0f499cea2f184ccca50004e68054907"
	},
	{
		"id": "148fa2b06e73",
		"ts": "2026-09-21T05:50:56.355Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1461734.55,
		"hash": "148fa2b06e7343116039decbd2d4c5fb770efa49a409d1983592f030bf7ba8eb"
	},
	{
		"id": "35f3565a55a0",
		"ts": "2026-09-21T05:50:56.592Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 518376.84,
		"hash": "35f3565a55a07239ee7f7a13b666ae5712afc100acdc08f9e53dd29c3f947118"
	},
	{
		"id": "5a26d7690c87",
		"ts": "2026-09-21T00:49:42.388Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129776491.71,
		"hash": "5a26d7690c870c18dd82757cd85e1319d73aea43c19b1a3d8dbe5a0e23077c45"
	},
	{
		"id": "3fb1c371c518",
		"ts": "2026-09-21T00:49:42.842Z",
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
		"liquidityUsd": 12692393.93,
		"hash": "3fb1c371c5186279fd4d9362aaf15b937d4bcd3fbecd9a47b132a053115a37f4"
	},
	{
		"id": "1dcafbc52c0e",
		"ts": "2026-09-21T00:49:43.135Z",
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
		"liquidityUsd": 886553.85,
		"hash": "1dcafbc52c0e7170476a4edf50ae276297281ea18003af27b8173dcd92c22614"
	},
	{
		"id": "2d01eb41764b",
		"ts": "2026-09-21T00:49:43.382Z",
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
		"liquidityUsd": 35284991.46,
		"hash": "2d01eb41764bec37a44f33449e20177a84b1c07af95aea025c5c0588290cc4d6"
	},
	{
		"id": "d98a1317c205",
		"ts": "2026-09-21T00:49:43.634Z",
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
		"liquidityUsd": 4505035.18,
		"hash": "d98a1317c2058a403f47fee3bbe0c7fa7ba4276ffda70b40381be808f94aa85f"
	},
	{
		"id": "691c593ee205",
		"ts": "2026-09-21T00:49:43.882Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1284341.62,
		"hash": "691c593ee205f88020e5f1e761a74beb4f9a16f25a8dfd89384d1b28bf48a21e"
	},
	{
		"id": "d221d1ea9099",
		"ts": "2026-09-21T00:49:44.127Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1627935.68,
		"hash": "d221d1ea9099e3e66522cca95464ab92e4d915a11e0cc59bb8940659275211cb"
	},
	{
		"id": "0bd46905aa08",
		"ts": "2026-09-21T00:49:44.386Z",
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
		"liquidityUsd": 1143895.37,
		"hash": "0bd46905aa081cfeefb66dec8bca480d7b16bf729dc30ac6f5cef3ca058c1708"
	},
	{
		"id": "9330f6d44001",
		"ts": "2026-09-21T00:49:44.642Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"mintable",
			"owner_not_renounced"
		],
		"liquidityUsd": 804036.87,
		"hash": "9330f6d4400177d8995b9a574c11db636cd905507804c36510603adf4f912e88"
	},
	{
		"id": "b4e58ee62b93",
		"ts": "2026-09-21T00:49:44.892Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 566783.97,
		"hash": "b4e58ee62b934008fef66308453206808bfb0c4929cdb9b2c997ea2d8e657762"
	},
	{
		"id": "edc4844563cd",
		"ts": "2026-09-21T00:49:45.122Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1562593.03,
		"hash": "edc4844563cd05a605f7617a935b176aec346a5a885013a6c5e3c414d00720ab"
	},
	{
		"id": "7fa41926c962",
		"ts": "2026-09-21T00:49:45.354Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18056241.86,
		"hash": "7fa41926c962b6b6d733b4cb98750c54d976eca5bc645d8f949a8411abb80f76"
	},
	{
		"id": "3458d933f290",
		"ts": "2026-09-21T00:49:45.581Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1146177.67,
		"hash": "3458d933f290875f699474b178c0ffdf4dc41e9d487a8c1c308b17caf1c57e31"
	},
	{
		"id": "9c33074d97f5",
		"ts": "2026-09-21T00:49:45.811Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1127715.13,
		"hash": "9c33074d97f534cb145d8993e62dec13787dafb958fd961423ddd6bd343408a7"
	},
	{
		"id": "2b16270c52c5",
		"ts": "2026-09-21T00:49:46.042Z",
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
		"liquidityUsd": 651931.74,
		"hash": "2b16270c52c5801faa2e63c97c6181086138e1ae45db8bddc679bb891525feb9"
	},
	{
		"id": "aeea36f09863",
		"ts": "2026-09-21T00:49:46.274Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3266035.7,
		"hash": "aeea36f098634aa6f938260852bede183591a57d105a533b9fefaf4858fab61c"
	},
	{
		"id": "036a486e72eb",
		"ts": "2026-09-21T00:49:46.519Z",
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
		"liquidityUsd": 471110.47,
		"hash": "036a486e72ebb698e4db431728a0706f071a9ff96ce91820dcd57aaf42d40c06"
	},
	{
		"id": "3a8cd788997e",
		"ts": "2026-09-21T00:49:46.843Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1474170.34,
		"hash": "3a8cd788997eb1f0867df3b69ad727b715619e30445193540988afdd9f790daa"
	},
	{
		"id": "805ac4a324d3",
		"ts": "2026-09-20T22:55:52.340Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129751749.51,
		"hash": "805ac4a324d30fa2f50ffbb9f4eb7c0df7178cd9d6fb1961a98143973a34eb49"
	},
	{
		"id": "db68b600862d",
		"ts": "2026-09-20T22:55:52.885Z",
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
		"liquidityUsd": 16398859.85,
		"hash": "db68b600862db7bfa2873fbe4ff71cfa41590f43956ce8861949596dacf1638d"
	},
	{
		"id": "7ff12858c04e",
		"ts": "2026-09-20T22:55:53.096Z",
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
		"liquidityUsd": 873198.1,
		"hash": "7ff12858c04eacd6b414d935cbb80e89ab6aae7341ed953d6bf33fc513b57ef5"
	},
	{
		"id": "3f461126129f",
		"ts": "2026-09-20T22:55:53.303Z",
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
		"liquidityUsd": 34408759.59,
		"hash": "3f461126129f60742ac8d3f94afc0c252fac01441f2d3852fbd7d8ddfdef0e94"
	},
	{
		"id": "af720af89b5a",
		"ts": "2026-09-20T22:55:53.514Z",
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
		"liquidityUsd": 4406029.55,
		"hash": "af720af89b5ab6738b0d9675cb608c3708582af6c90ebc1fb819daa7f21f37ed"
	},
	{
		"id": "bb29d736d000",
		"ts": "2026-09-20T22:55:53.724Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1260262.99,
		"hash": "bb29d736d0008fab910443d5283f6f8578810d4a1fe873548aa02bc738bd225c"
	},
	{
		"id": "c82bdd27fbfc",
		"ts": "2026-09-20T22:55:53.935Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1690286.82,
		"hash": "c82bdd27fbfcf57ef6d14c32b1f5749537484c5373f0c3c8d1d6ffbe6aaeff17"
	},
	{
		"id": "2274ec1f2d8d",
		"ts": "2026-09-20T22:55:54.148Z",
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
		"liquidityUsd": 1118215.14,
		"hash": "2274ec1f2d8d677057247a822c040471b56eece9c29eb1c1cd81a2441142b8b5"
	},
	{
		"id": "260926ebdde1",
		"ts": "2026-09-20T22:55:54.371Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"mintable",
			"owner_not_renounced"
		],
		"liquidityUsd": 786874.56,
		"hash": "260926ebdde1de0476f15c7c7660382e9bdb94f66a3fd03959f05aab7fd5756a"
	},
	{
		"id": "21178a298b15",
		"ts": "2026-09-20T22:55:54.581Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 556356.98,
		"hash": "21178a298b15d6d270f8671e973a64c37fc97435669b1d512a4f1aeb02b4055d"
	},
	{
		"id": "35348c908087",
		"ts": "2026-09-20T22:55:54.781Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1512265.17,
		"hash": "35348c908087b923899d13287385ae5dcba84efb08a07abdf438210ed884b0e1"
	},
	{
		"id": "f1c57a66848c",
		"ts": "2026-09-20T22:55:54.986Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 17494556.75,
		"hash": "f1c57a66848ced8eede6c43d3e0a964ba719ac59b6f04c4f3eb86391196ad0fc"
	},
	{
		"id": "845b48068e9e",
		"ts": "2026-09-20T22:55:55.182Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1075731.95,
		"hash": "845b48068e9e4a354cba88065d6c364503ee9e3663ade3d5a7fb50262aa637c2"
	},
	{
		"id": "ddf685657132",
		"ts": "2026-09-20T22:55:55.399Z",
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
		"liquidityUsd": 626953.4,
		"hash": "ddf685657132150d761e4f00c58060e2b2e1144b009bcdd1bc7ba6de460bcaa5"
	},
	{
		"id": "3c22cc926daf",
		"ts": "2026-09-20T22:55:55.591Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1085150.87,
		"hash": "3c22cc926daf0317849ad5f2ab3309ad12601e166524944638cbfe45f26a3d30"
	},
	{
		"id": "eac77fe5c784",
		"ts": "2026-09-20T22:55:55.783Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3198771.33,
		"hash": "eac77fe5c784531669cbde87ec2f9cd1d4b05c964e6da7d3f07ec0a97adad400"
	},
	{
		"id": "1c77e478e244",
		"ts": "2026-09-20T22:55:56.044Z",
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
		"liquidityUsd": 460663.62,
		"hash": "1c77e478e244b26eae363884aa585edb0237dee276b6d8c24ef1fa93a7f45c6b"
	},
	{
		"id": "38b2357bb938",
		"ts": "2026-09-20T22:55:56.239Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1439675.19,
		"hash": "38b2357bb938aec303bba941a3e404517e094b37ad1a4ac321dae9c61ad81fff"
	},
	{
		"id": "41d064cbeee6",
		"ts": "2026-09-20T20:15:34.130Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129483992.92,
		"hash": "41d064cbeee60bfd2b702f4b1b273cd3646aa6a4838cb3a21928fc3a2cc15f4b"
	},
	{
		"id": "43eafdbad291",
		"ts": "2026-09-20T20:15:34.392Z",
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
		"liquidityUsd": 13158586.55,
		"hash": "43eafdbad2915e0b4ebe15c5b0964a1eebf24d3fe8b52a37cbbdc2a6ed38dd61"
	},
	{
		"id": "20f170875292",
		"ts": "2026-09-20T20:15:34.643Z",
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
		"liquidityUsd": 871426.37,
		"hash": "20f170875292b66df0f638f47bfd39d8da4b761484faf7f8690d1a29fcfe660e"
	},
	{
		"id": "4a082432a8b4",
		"ts": "2026-09-20T20:15:34.896Z",
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
		"liquidityUsd": 34528480.7,
		"hash": "4a082432a8b47c8cfec454124fa4f8b4621da25e992c6306737350088f9146bd"
	},
	{
		"id": "d4985109f4f4",
		"ts": "2026-09-20T20:15:35.146Z",
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
		"liquidityUsd": 4399517.13,
		"hash": "d4985109f4f48c114929a60c1db1ba1f3812fc8e6ae13a198d399d5e891282bd"
	},
	{
		"id": "5109e56f78ca",
		"ts": "2026-09-20T20:15:35.395Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1257979.34,
		"hash": "5109e56f78ca6e01cb9366b72bedaa474ac4a380222f496bab5a7950b0943a1b"
	},
	{
		"id": "e97d2d0b0ecf",
		"ts": "2026-09-20T20:15:35.656Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34528480.7,
		"hash": "e97d2d0b0ecfc780d825834021b67712884bdf8ba3d5d6873d28deb79520f2f9"
	},
	{
		"id": "56042cbb8092",
		"ts": "2026-09-20T20:15:35.949Z",
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
		"liquidityUsd": 1114400.51,
		"hash": "56042cbb80920a4759f9aeeb6cc49a8d41f2d8cd6adecc2d38885369455b0a98"
	},
	{
		"id": "5699f927c592",
		"ts": "2026-09-20T20:15:36.208Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"mintable",
			"owner_not_renounced"
		],
		"liquidityUsd": 809660.33,
		"hash": "5699f927c59230117736b586480030311fef592a47a3d5c251a13f30f94be0dc"
	},
	{
		"id": "76383460bf9b",
		"ts": "2026-09-20T20:15:36.456Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 593034.09,
		"hash": "76383460bf9b840c05de62ec4789088ecf0b903625d66080b0df218eec589f3b"
	},
	{
		"id": "e48b52ae8ce3",
		"ts": "2026-09-20T20:15:36.691Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 17431782.26,
		"hash": "e48b52ae8ce34c30d49e01789717430c41a96bdab43e68c450833cd310425e38"
	},
	{
		"id": "3c908f91ddbb",
		"ts": "2026-09-20T20:15:36.924Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1578882.06,
		"hash": "3c908f91ddbba31f7e2713cef9a0682d24bd08eba30fe1e54e2618050ddbee77"
	},
	{
		"id": "43b5057d2985",
		"ts": "2026-09-20T20:15:37.159Z",
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
		"liquidityUsd": 637842.65,
		"hash": "43b5057d2985f69cf6b2e554e699883f92cf9acbb217291e722e73ab57ea92d0"
	},
	{
		"id": "ced938adec97",
		"ts": "2026-09-20T20:15:37.391Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1110650.33,
		"hash": "ced938adec97ae9d89d6b50a4c2b1d4f7712ae4b1945eb892d474ab5f6606fac"
	},
	{
		"id": "24c740a6f592",
		"ts": "2026-09-20T20:15:37.624Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1028508.39,
		"hash": "24c740a6f59284e807f7b230aee1c884244684da5cc34d521f225221543c476a"
	},
	{
		"id": "00b647eb99d6",
		"ts": "2026-09-20T20:15:37.855Z",
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
		"liquidityUsd": 456170.17,
		"hash": "00b647eb99d6142cf46a7c97aec04756b1e92805bfe616ece7d132042e923154"
	},
	{
		"id": "acd568f7eefb",
		"ts": "2026-09-20T20:15:38.089Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3135535.02,
		"hash": "acd568f7eefbf26ea8956839fe4230f24c27dfe3228eeec7b2f06bbf1e8506aa"
	},
	{
		"id": "fe70b7602308",
		"ts": "2026-09-20T20:15:38.320Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4665622.86,
		"hash": "fe70b76023082d5867262d203fad15b69d920ad2a4f95f80b152177da6e68c49"
	},
	{
		"id": "c3655de1bb9a",
		"ts": "2026-09-20T17:15:59.972Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129512870.27,
		"hash": "c3655de1bb9a944a77235e9de2d7239be70a0590f65d93943be690d36a56f145"
	},
	{
		"id": "a95b9f9efc9a",
		"ts": "2026-09-20T17:16:00.235Z",
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
		"liquidityUsd": 15691062.73,
		"hash": "a95b9f9efc9acaf9e143cadd21e00285ee46e8d22880b4b4cda2ed8b37add37c"
	},
	{
		"id": "5b380706b1df",
		"ts": "2026-09-20T17:16:00.507Z",
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
		"liquidityUsd": 870729.88,
		"hash": "5b380706b1dfe1e074070c76773e75164353093207675e57084c147babce8b11"
	},
	{
		"id": "c14f59a32e32",
		"ts": "2026-09-20T17:16:00.783Z",
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
		"liquidityUsd": 34617690.9,
		"hash": "c14f59a32e32f968afe6e802a6feb406299cfc71fc74f8ecae905fb900423eed"
	},
	{
		"id": "0ea8b085977d",
		"ts": "2026-09-20T17:16:01.041Z",
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
		"liquidityUsd": 4402903.73,
		"hash": "0ea8b085977d31b881b3d6e629a05f19019a9a938dfbd2d16a7f4f0c595f74ca"
	},
	{
		"id": "1d8f46f7b3ef",
		"ts": "2026-09-20T17:16:01.478Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1258543.42,
		"hash": "1d8f46f7b3efac08d805f5d607a969e15e65b3678e26cad0808125189aaa1fe3"
	},
	{
		"id": "6bd0cd9516d8",
		"ts": "2026-09-20T17:16:01.730Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34617690.9,
		"hash": "6bd0cd9516d84d93eb0d2f4da5a019ccb69977e36a6d956beca874602811d40b"
	},
	{
		"id": "69137cfa625a",
		"ts": "2026-09-20T17:16:02.002Z",
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
		"liquidityUsd": 2033514.62,
		"hash": "69137cfa625a2a2b3637a4d02b25789f1a0dd20a77cca5353d683c9eb552db5c"
	},
	{
		"id": "cd56b709d566",
		"ts": "2026-09-20T17:16:02.261Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"mintable",
			"owner_not_renounced"
		],
		"liquidityUsd": 745107.36,
		"hash": "cd56b709d566a15459d17e488b30258e39928aeb79e7c3fa46756cdb85b17b5e"
	},
	{
		"id": "0a3f33722a82",
		"ts": "2026-09-20T17:16:02.518Z",
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
		"liquidityUsd": 17222548.46,
		"hash": "0a3f33722a828152655bf868e0eafc9c9818b3cede069442d419795032a4a04b"
	},
	{
		"id": "0a8d5052f042",
		"ts": "2026-09-20T17:16:02.776Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 609192.87,
		"hash": "0a8d5052f042a476e6682e81472a4450a032e7b55f62fbb2c1d16d4f0824d851"
	},
	{
		"id": "c53c99ecc5d9",
		"ts": "2026-09-20T17:16:03.015Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1587093.39,
		"hash": "c53c99ecc5d9d8ba8b6b694ca91713811fc3f7f015ececd5fef5f381800c9a4a"
	},
	{
		"id": "4f62fdf84afd",
		"ts": "2026-09-20T17:16:03.254Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1142480.23,
		"hash": "4f62fdf84afd00ad4250a93a24ee9535a4d2f74b0439accdf9c5e38fb758ac75"
	},
	{
		"id": "46788cf818f9",
		"ts": "2026-09-20T17:16:03.495Z",
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
		"liquidityUsd": 665401.26,
		"hash": "46788cf818f9badab160cf350a69517b252f0fea1ff480d6cf23b246a88646ec"
	},
	{
		"id": "ce29d98b2a86",
		"ts": "2026-09-20T17:16:03.736Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4648507.1,
		"hash": "ce29d98b2a863376d7e38616319174c14bd42870515e2b97161aa81518a65221"
	},
	{
		"id": "b5c953a39e77",
		"ts": "2026-09-20T17:16:03.972Z",
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
		"liquidityUsd": 461193.93,
		"hash": "b5c953a39e77a9997beb79ec5392e630c796deea31cac4f84c1ac3e7f4bdc030"
	},
	{
		"id": "3df8c5205723",
		"ts": "2026-09-20T17:16:04.212Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1435130.69,
		"hash": "3df8c5205723881ecbd10fdc5d8d80b2e2c8cdb5b2cd6a6f8b5877cb6580ef94"
	},
	{
		"id": "e8127c1a5578",
		"ts": "2026-09-20T17:16:04.451Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1906023.06,
		"hash": "e8127c1a557894ff5f94dcb6e5c14af6b3cfa38e424cf0f3f12df7fed8468f32"
	},
	{
		"id": "fbe858bad072",
		"ts": "2026-09-20T13:54:54.015Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 128925663.37,
		"hash": "fbe858bad0724ab9ab3b59ec679ca8553383accbfc20a0a9fafcbd14177da995"
	},
	{
		"id": "6dc147b8f890",
		"ts": "2026-09-20T13:54:54.277Z",
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
		"liquidityUsd": 16809759.45,
		"hash": "6dc147b8f8909f5a8c839c329734b3cf01ba6139730b8ea8e042803ec716aae1"
	},
	{
		"id": "42ae7d8a509d",
		"ts": "2026-09-20T13:54:54.533Z",
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
		"liquidityUsd": 852274.4,
		"hash": "42ae7d8a509d2d3b5c5180ea045afdca7c8b0b2ef4eefa951168c5905ac2ccf9"
	},
	{
		"id": "696af54bb21c",
		"ts": "2026-09-20T13:54:55.005Z",
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
		"liquidityUsd": 34308449.11,
		"hash": "696af54bb21c4a716df928b7b73c6c6e0eca48b533570facaddf0938d1e49b19"
	},
	{
		"id": "a9e4a99e164c",
		"ts": "2026-09-20T13:54:55.267Z",
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
		"liquidityUsd": 4268311.01,
		"hash": "a9e4a99e164cdf553b22c181c93964e02d59ca40a4bd3fc410d83c5ef5d202a5"
	},
	{
		"id": "60ae98b7644f",
		"ts": "2026-09-20T13:54:55.530Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1217911.55,
		"hash": "60ae98b7644fde888631bceb789749e82ad7d17eee0f6976a798d92fae2b83fd"
	},
	{
		"id": "a78ff92fb07b",
		"ts": "2026-09-20T13:54:55.783Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34308449.11,
		"hash": "a78ff92fb07bc47331da31e1a2a2fd3a19869e7f35ee7dc000882d7ae8e2aa4c"
	},
	{
		"id": "a793f1b654aa",
		"ts": "2026-09-20T13:54:56.042Z",
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
		"liquidityUsd": 1072385.76,
		"hash": "a793f1b654aa417c753daff4e2fc5fe3439a438c5762f32d4672efe52d88521b"
	},
	{
		"id": "0a3f259d880d",
		"ts": "2026-09-20T13:54:56.306Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 620095.12,
		"hash": "0a3f259d880dfc381ed6ce22de019229510b58dce9705a1fa4f4710ebec112c7"
	},
	{
		"id": "a0fe9aa94e1a",
		"ts": "2026-09-20T13:54:56.569Z",
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
		"liquidityUsd": 17274030.14,
		"hash": "a0fe9aa94e1ae568127e2e7589175e94427638eb9545eb5406dc8700f808a050"
	},
	{
		"id": "c4826ed99536",
		"ts": "2026-09-20T13:54:56.809Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1530679.61,
		"hash": "c4826ed99536567f0beae17537140608d9887806dab79e7f6a698565f95bcfa8"
	},
	{
		"id": "6d223d42d155",
		"ts": "2026-09-20T13:54:57.048Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 808020.17,
		"hash": "6d223d42d155ff12897c8843980c5b937f649ca37e33dd07a143e7f2c1ebdaed"
	},
	{
		"id": "e7e5e758d1d8",
		"ts": "2026-09-20T13:54:57.285Z",
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
		"liquidityUsd": 627691.32,
		"hash": "e7e5e758d1d8f27fbdceca1f04f9ecdc599fec71482cda5f4874f6f37a925910"
	},
	{
		"id": "7f3f41aa8044",
		"ts": "2026-09-20T13:54:57.529Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1200112.06,
		"hash": "7f3f41aa804442e197e97c805b14d0f8638c846a90da3a1d7c1fa2378e78d10d"
	},
	{
		"id": "91f803b3e36d",
		"ts": "2026-09-20T13:54:57.768Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4507635.38,
		"hash": "91f803b3e36dd2444205e22e59d7d26085e090c03a19bed9870a33da7e251c43"
	},
	{
		"id": "db87c5e9eac4",
		"ts": "2026-09-20T13:54:58.006Z",
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
		"liquidityUsd": 450642.64,
		"hash": "db87c5e9eac470b0bbfe46fd131200468ca5dd2385d0cac989fc1c1902915498"
	},
	{
		"id": "dc4a36749ba0",
		"ts": "2026-09-20T13:54:58.243Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1861582.9,
		"hash": "dc4a36749ba0f0e727c5776555440578b3765b040713d50a22d65f1f469a3a22"
	},
	{
		"id": "e0cbe7eaa426",
		"ts": "2026-09-20T13:54:58.483Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3211856.39,
		"hash": "e0cbe7eaa426479df367aaef415925d05ce8890ede1ab5054398666f03ce1b04"
	},
	{
		"id": "004833e9c107",
		"ts": "2026-09-20T09:01:03.084Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 128797581.89,
		"hash": "004833e9c107c63fc6b64aa75caf3aa984caee9923d8a47b100dc386ebefd837"
	},
	{
		"id": "a6a325ba8028",
		"ts": "2026-09-20T09:01:03.387Z",
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
		"liquidityUsd": 16777428.68,
		"hash": "a6a325ba8028a3d47b0fd69bca022c4b95dadd3e2afdc2544bfd79c96246710f"
	},
	{
		"id": "853fd1dd8e46",
		"ts": "2026-09-20T09:01:03.647Z",
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
		"liquidityUsd": 850772.59,
		"hash": "853fd1dd8e46b2fda0d9c94c465e3e2697b6a9f3bf40f2c7e31284f39ac2d1cc"
	},
	{
		"id": "67ec884b6f85",
		"ts": "2026-09-20T09:01:03.974Z",
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
		"liquidityUsd": 34205452.89,
		"hash": "67ec884b6f85c876414585fb8065132176bc4431826a7d7fdfea443f89a0d0d0"
	},
	{
		"id": "523373b00bd8",
		"ts": "2026-09-20T09:01:04.278Z",
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
		"liquidityUsd": 4261199.3,
		"hash": "523373b00bd88fb9fa832e903db29bcff4bc58f4ab543840bf635d4a33e8bf2d"
	},
	{
		"id": "5a0f747c0f00",
		"ts": "2026-09-20T09:01:04.536Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1221393.05,
		"hash": "5a0f747c0f0014db751b141f14ac64560937f6e53cca6a064e1d51f0c242cd00"
	},
	{
		"id": "a45e91bcb833",
		"ts": "2026-09-20T09:01:04.800Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34205454.18,
		"hash": "a45e91bcb8333c46ac0819e2cecc1e1120b43b45285fa23e37a3002bbde1b935"
	},
	{
		"id": "bcd223fe2353",
		"ts": "2026-09-20T09:01:05.049Z",
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
		"liquidityUsd": 1068522,
		"hash": "bcd223fe2353e02cb0e206d20402a503f6bc022e1c454b459f4c99ac22c0ff5f"
	},
	{
		"id": "5f8c64542638",
		"ts": "2026-09-20T09:01:05.301Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 617973.56,
		"hash": "5f8c64542638204e6e431f1b9c5034b1b5d2c6d8b2e194b687f8865a9ebee27e"
	},
	{
		"id": "9b6a25cb6b1d",
		"ts": "2026-09-20T09:01:05.553Z",
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
		"liquidityUsd": 17107748.46,
		"hash": "9b6a25cb6b1d70ace49029ff64d15b9ace63d2ba7a12c490f539355329d6e0ae"
	},
	{
		"id": "1af06308bf6e",
		"ts": "2026-09-20T09:01:05.787Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1540217.79,
		"hash": "1af06308bf6e51a85cc454a3594ee8ee51adc4cc0151352e49f8bd2f5281b797"
	},
	{
		"id": "ac1e3604f408",
		"ts": "2026-09-20T09:01:06.024Z",
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
		"liquidityUsd": 630594.33,
		"hash": "ac1e3604f408c86ae98c799554834c67228595ec7a5f226b30c3d7a8454a4552"
	},
	{
		"id": "be32237eb1b5",
		"ts": "2026-09-20T09:01:06.261Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 646899.62,
		"hash": "be32237eb1b541c97f9e621db8c760dcfc8fd366d5294515971d7e13f9306327"
	},
	{
		"id": "a7af09e0a600",
		"ts": "2026-09-20T09:01:06.494Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1564438.91,
		"hash": "a7af09e0a600f76f05afaa33f2c3500bd98a57d52d93b9b9474737b39b0bb226"
	},
	{
		"id": "d916977d2280",
		"ts": "2026-09-20T09:01:06.731Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3239031.25,
		"hash": "d916977d2280b9c8059d9fd831ed0e218109e4efc18e2eba097bbc2299bec525"
	},
	{
		"id": "053fb64916e6",
		"ts": "2026-09-20T09:01:06.965Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4481041.76,
		"hash": "053fb64916e6e566c71011b00c63e69eee2d896f8849d034e6a2f393a96f1829"
	},
	{
		"id": "ac00c845e7a5",
		"ts": "2026-09-20T09:01:07.202Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1880246.79,
		"hash": "ac00c845e7a5039ea6e0339fb3b54a5c26b282eb95daeb6d2788b87aaf2f14a4"
	},
	{
		"id": "fa346558fb26",
		"ts": "2026-09-20T09:01:07.443Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 980836.53,
		"hash": "fa346558fb2634d453f42bb6ca022854abaacf6ec3d2baf8ca4fac6c7a9074da"
	},
	{
		"id": "24aaf5ac05f4",
		"ts": "2026-09-20T03:10:54.744Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 128007277.79,
		"hash": "24aaf5ac05f449dcdab357f1a5859dbe696e2bb34c76b42b7539e969bad45d55"
	},
	{
		"id": "ad0e9d71adbe",
		"ts": "2026-09-20T03:10:55.120Z",
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
		"liquidityUsd": 16451741.53,
		"hash": "ad0e9d71adbedeef3d082e44eea3039ae257077b081380931c607210cd4f7822"
	}
]
