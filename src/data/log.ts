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
	"updatedAt": "2026-07-12T18:01:49.916Z",
	"tokensScored": 2881,
	"verdictsIssued": 2881,
	"safe": 2540,
	"risky": 254,
	"likelyRug": 87,
	"ticks": 182
}

export const verdicts: AgentVerdict[] = [
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
	},
	{
		"id": "596de9e791e2",
		"ts": "2026-07-12T16:58:06.439Z",
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
		"liquidityUsd": 4590995.93,
		"hash": "596de9e791e2e184716ee306c57e6f7d50901da6acf0c86f65873ca880eb7226"
	},
	{
		"id": "90e40c1b2552",
		"ts": "2026-07-12T16:58:06.656Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1001144.35,
		"hash": "90e40c1b2552d0dd07bd073c22dcbd1265ecfefc10daa982f2dc4b915b9807c0"
	},
	{
		"id": "3feac60079ed",
		"ts": "2026-07-12T16:58:06.886Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30758827.56,
		"hash": "3feac60079edc1859c0934b6e6ee804f76f428120c5e9dc9b5f1301799b95e40"
	},
	{
		"id": "1494d9254493",
		"ts": "2026-07-12T16:58:07.092Z",
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
		"liquidityUsd": 2489799.91,
		"hash": "1494d925449329d559023819c5f219b318119fa1f54806ba143ef3a652a6dc14"
	},
	{
		"id": "af5a96144719",
		"ts": "2026-07-12T16:58:07.297Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3542054.19,
		"hash": "af5a96144719c8b60b3b38f61166045cfd6bd43f7b1880dab77f987aa7d9f897"
	},
	{
		"id": "dd767c54edcd",
		"ts": "2026-07-12T16:58:07.631Z",
		"symbol": "CAPACITR",
		"token": "0x65F8152809Dd1fC0D5d8A345c9008d37B95f9ba3",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 104429.8,
		"hash": "dd767c54edcd2d99537e404119fe37c6697722b981ecc7ee4578c8193afff0cf"
	},
	{
		"id": "33f8600df92f",
		"ts": "2026-07-12T16:58:07.819Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2182322.13,
		"hash": "33f8600df92f51c60f1745c5f171f1b5d0de033c00a4d7f8d17e1ad90f3bd433"
	},
	{
		"id": "3f1f12841184",
		"ts": "2026-07-12T16:58:08.009Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 284501.36,
		"hash": "3f1f1284118411b124710e6b55a3b2b6afd7f04b250798347cdeeddea7976a4c"
	},
	{
		"id": "157f43b4c313",
		"ts": "2026-07-12T16:58:08.201Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8375816.51,
		"hash": "157f43b4c313254d19f6f22ce9cadf67d60e1ad378c081d33752fdfcaef549bb"
	},
	{
		"id": "14ea6e31e9ff",
		"ts": "2026-07-12T16:58:08.395Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 368086.45,
		"hash": "14ea6e31e9ff6feca6a5ae147aff8af0b438cbe476676a0700f5b2274e1b6e6d"
	},
	{
		"id": "a341c6f96970",
		"ts": "2026-07-12T16:58:08.584Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1581155.41,
		"hash": "a341c6f96970c636ea79eed23c6e03d19705d0cd92ea7da66d5f5616abbbcb32"
	},
	{
		"id": "ddb45c9f2d06",
		"ts": "2026-07-12T16:58:08.772Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 756765.36,
		"hash": "ddb45c9f2d06cc02831c186a5e2f9a916da95d099184809b1db204c2a66cc8f5"
	},
	{
		"id": "fa9fe60e13f7",
		"ts": "2026-07-12T16:58:08.979Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 519266.44,
		"hash": "fa9fe60e13f7e89760b9ebc0f95e6ead82dea36b133f043bc5485d5f6524bcd4"
	},
	{
		"id": "79422fb753d4",
		"ts": "2026-07-12T15:56:27.271Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106270418.2,
		"hash": "79422fb753d4ae01a8734fb113b4dde46412bf0dc25d861af227700a3433ee88"
	},
	{
		"id": "020fc74d8f57",
		"ts": "2026-07-12T15:56:27.721Z",
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
		"liquidityUsd": 16643209.58,
		"hash": "020fc74d8f577ea34dd197d6ca731565b47dc828d2fb1fbda68332982de4c447"
	},
	{
		"id": "ea5fe36f9ee0",
		"ts": "2026-07-12T15:56:27.970Z",
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
		"liquidityUsd": 1316928.04,
		"hash": "ea5fe36f9ee010ca392a9df64bd812bf529094a39e45357ed19574edd865c6e7"
	},
	{
		"id": "72d66267d1fc",
		"ts": "2026-07-12T15:56:28.215Z",
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
		"liquidityUsd": 30786027.27,
		"hash": "72d66267d1fc7c6350c0f8e528ad83210deae812f202edeb024f3939bbe06949"
	},
	{
		"id": "f26bdbc62832",
		"ts": "2026-07-12T15:56:28.464Z",
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
		"liquidityUsd": 4612070.26,
		"hash": "f26bdbc62832a68affaef9813306d54b2ed4ff49d0bbd55ed0e5fc9e2ae04c74"
	},
	{
		"id": "fd0dfb2cf870",
		"ts": "2026-07-12T15:56:28.711Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 992143.76,
		"hash": "fd0dfb2cf870179820f32c100c2db820c06329227bcc1e73acc8249c280a71bb"
	},
	{
		"id": "f232afc556a9",
		"ts": "2026-07-12T15:56:28.958Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30786027.27,
		"hash": "f232afc556a9937037c8fd139c0b9611fe94ac3b68fea56aeb0f7bbd059b0b90"
	},
	{
		"id": "b83b4747dc1f",
		"ts": "2026-07-12T15:56:29.203Z",
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
		"liquidityUsd": 2501653.39,
		"hash": "b83b4747dc1fde340a6835041c32227c2e4e5258124e454343eed2f82dc6fef4"
	},
	{
		"id": "e06a6f8eeaee",
		"ts": "2026-07-12T15:56:29.457Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3853119.09,
		"hash": "e06a6f8eeaee82ff389a40f52eabbf9e4637bcadcbac824a64636ca3346bc13f"
	},
	{
		"id": "dc24e72d5dc6",
		"ts": "2026-07-12T15:56:29.704Z",
		"symbol": "CAPACITR",
		"token": "0x65F8152809Dd1fC0D5d8A345c9008d37B95f9ba3",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 104796.04,
		"hash": "dc24e72d5dc6fcff75ced1cf1b60c6f396b286719e1fc78e5ce703b2f4988f0f"
	},
	{
		"id": "12a9d9d074cf",
		"ts": "2026-07-12T15:56:30.011Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2200889.88,
		"hash": "12a9d9d074cf150c380d7db904a6e741eaa98b758eefb75f3213bdf31c214ef6"
	},
	{
		"id": "33d32abaa901",
		"ts": "2026-07-12T15:56:30.243Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 268129.25,
		"hash": "33d32abaa901ee3c046138887a61c585b3cc32718faed0cd524d756d2b1323b4"
	},
	{
		"id": "9cfb7f9a11e3",
		"ts": "2026-07-12T15:56:30.476Z",
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
		"liquidityUsd": 1580396.6,
		"hash": "9cfb7f9a11e354e201d02cebf596659583116594b12604d4148aa6999eac5860"
	},
	{
		"id": "b8920470149c",
		"ts": "2026-07-12T15:56:30.712Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 760238.56,
		"hash": "b8920470149c98ebfd254fabdf27f93e6780e4eb70e4d37d01b32df937010e60"
	},
	{
		"id": "c6d0df95f842",
		"ts": "2026-07-12T15:56:30.944Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8398193.71,
		"hash": "c6d0df95f8428986a8841984b2e66042c9cb9a44d2d8d646f92fd724f07444de"
	},
	{
		"id": "8f3b9f02b7fa",
		"ts": "2026-07-12T15:56:31.177Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 366282.23,
		"hash": "8f3b9f02b7fa9e421c3203d82810d6d08fbb32a45debcc5db289d9f363a2cf0c"
	},
	{
		"id": "ebb4e2b9e947",
		"ts": "2026-07-12T15:56:31.409Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4657794.4,
		"hash": "ebb4e2b9e947b8de617c5175eeaa50d3f8722144f17ca6d7d7b961f0d681b3e2"
	},
	{
		"id": "b7e16dc3b0c6",
		"ts": "2026-07-12T14:52:59.983Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106058405.55,
		"hash": "b7e16dc3b0c6939db896202de282d4ca2b66c35a9dc434d05eeeb0418de1fc31"
	},
	{
		"id": "5c35e6da1ab2",
		"ts": "2026-07-12T14:53:00.709Z",
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
		"liquidityUsd": 16345661.87,
		"hash": "5c35e6da1ab25fb56a28e1ecd6ebf1c9ddfeba3f91e171a28c6c66d39be601ed"
	},
	{
		"id": "6b34f7ff882b",
		"ts": "2026-07-12T14:53:00.999Z",
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
		"liquidityUsd": 1312581.08,
		"hash": "6b34f7ff882ba516982c4e302c04288d6ab85ffa16945ecede04ec08fe9e792b"
	},
	{
		"id": "3bf0970f5fde",
		"ts": "2026-07-12T14:53:01.561Z",
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
		"liquidityUsd": 30739872.55,
		"hash": "3bf0970f5fdea4ea984de728a81a58f72a9e05ed182f832a6960c09ce61e5cc0"
	},
	{
		"id": "ddc820be744d",
		"ts": "2026-07-12T14:53:01.849Z",
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
		"liquidityUsd": 4581669.21,
		"hash": "ddc820be744d2ea8ea19b0467642cd79552203961b3fc35f12e582779dfa7da0"
	},
	{
		"id": "07ca828db749",
		"ts": "2026-07-12T14:53:02.166Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 992156.74,
		"hash": "07ca828db749debf007de22d09707b3d6b47df6d32fc1b706557bad81c009e90"
	},
	{
		"id": "12bc4fa51d54",
		"ts": "2026-07-12T14:53:02.454Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30739872.55,
		"hash": "12bc4fa51d5444f35d0300682e91e32c5804a90beff78e2fec4c2d412d26a7f1"
	},
	{
		"id": "ec011a15ad4b",
		"ts": "2026-07-12T14:53:02.742Z",
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
		"liquidityUsd": 2544704.62,
		"hash": "ec011a15ad4b723170b8864a51cc2ebe50f83e586f30bb8de8639e07576b4df8"
	},
	{
		"id": "527718f6bd9b",
		"ts": "2026-07-12T14:53:03.027Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3811227.62,
		"hash": "527718f6bd9bf8ab530cf24cb4ab822ca3a9441a81b5f7ed6284f428f1a9d274"
	},
	{
		"id": "c16b6e11b944",
		"ts": "2026-07-12T14:53:03.310Z",
		"symbol": "CAPACITR",
		"token": "0x65F8152809Dd1fC0D5d8A345c9008d37B95f9ba3",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 105022.97,
		"hash": "c16b6e11b94472c475d98c8fdc1924b5d47eea87fb49b55f0579569b4b18bc78"
	},
	{
		"id": "7e7740acea8e",
		"ts": "2026-07-12T14:53:03.597Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2204332.76,
		"hash": "7e7740acea8eb8141e4d25955dc0bfd2e6dc3b53dea482c15f92b5835190b075"
	},
	{
		"id": "f25f1f520e74",
		"ts": "2026-07-12T14:53:03.865Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 268389.03,
		"hash": "f25f1f520e74ae38188166140f3d7d574afaa12f97e213d8a3c9a5e7e4e83b51"
	},
	{
		"id": "b94aa4d6f4e1",
		"ts": "2026-07-12T14:53:04.134Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1578709.96,
		"hash": "b94aa4d6f4e15933b8b00e9772796007c129371b74d2992ffa6d860d61ad3915"
	},
	{
		"id": "c5176d3e34a9",
		"ts": "2026-07-12T14:53:04.795Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 758830.47,
		"hash": "c5176d3e34a918fcf8943decab43918f5c5108a2019222ed52cf1ea31660f470"
	},
	{
		"id": "66e744c4d356",
		"ts": "2026-07-12T14:53:05.066Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 369030.87,
		"hash": "66e744c4d3566078692849d8068f51374687596349f02ad0d0724ebcda872911"
	},
	{
		"id": "cedd8ddc4c82",
		"ts": "2026-07-12T14:53:05.335Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8379864.82,
		"hash": "cedd8ddc4c821d5e8840c5a0d2c58647f3e8c77d354c7f29034b7567de7ce40b"
	},
	{
		"id": "5d2c3fda3bed",
		"ts": "2026-07-12T14:53:05.602Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4653179.36,
		"hash": "5d2c3fda3bed5983bb55d74a149688bfcbdb1dd26437f793be66eb40446ea9b7"
	},
	{
		"id": "db079370d29a",
		"ts": "2026-07-12T13:18:32.829Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105735169.29,
		"hash": "db079370d29a941d08817eedf51cff5b42ee95b8c4a37320a911a64993296139"
	},
	{
		"id": "08201f2e19e0",
		"ts": "2026-07-12T13:18:33.200Z",
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
		"liquidityUsd": 16194075.4,
		"hash": "08201f2e19e067b054fc45ed78f838241079faa6477507e40d90b27fff7e479b"
	},
	{
		"id": "deee41d17152",
		"ts": "2026-07-12T13:18:33.566Z",
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
		"liquidityUsd": 1311645.87,
		"hash": "deee41d171526f3019687cc478d63a836d31ed6d6c4857874fe6a5a4499fb5d8"
	},
	{
		"id": "98b5adc41149",
		"ts": "2026-07-12T13:18:33.771Z",
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
		"liquidityUsd": 30686806.78,
		"hash": "98b5adc41149dc96da2388defcde10b8fb783ef795b368a20f1941ae9dc73b55"
	},
	{
		"id": "f169d19d4667",
		"ts": "2026-07-12T13:18:33.974Z",
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
		"liquidityUsd": 4576869.09,
		"hash": "f169d19d4667457f1c0f2d9c3c0955a734af5ac44c1eeb5ca09511a11c140d6e"
	},
	{
		"id": "9b46660543e1",
		"ts": "2026-07-12T13:18:34.177Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 992155.42,
		"hash": "9b46660543e14f4789d05d14d08aff45eac76f5e9030043126a8bfe77a55c175"
	},
	{
		"id": "e02ea23a789b",
		"ts": "2026-07-12T13:18:34.382Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30686806.78,
		"hash": "e02ea23a789bf9bd720a200f37b18ccef1872f18f3f1fc9438db664e69f4632e"
	},
	{
		"id": "abdbc29098b4",
		"ts": "2026-07-12T13:18:34.657Z",
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
		"liquidityUsd": 2597398.51,
		"hash": "abdbc29098b497c09e7d8c83252de2e44136309a24940351a35f34b0b3c0461f"
	},
	{
		"id": "8a3f970dbb4c",
		"ts": "2026-07-12T13:18:34.858Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3530090.31,
		"hash": "8a3f970dbb4c9bc10f87292d95a3098ad5f90242bdc61a79fb7bdcd5aed2899d"
	},
	{
		"id": "7df272abf744",
		"ts": "2026-07-12T13:18:35.060Z",
		"symbol": "CAPACITR",
		"token": "0x65F8152809Dd1fC0D5d8A345c9008d37B95f9ba3",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 105429.17,
		"hash": "7df272abf744ab56da6c6b5e22fc4b72f2e70013a51df1ea341fd5b23c9b0a7a"
	},
	{
		"id": "7eff97856e58",
		"ts": "2026-07-12T13:18:35.259Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2201579.38,
		"hash": "7eff97856e5822b04f76994376f52f79d8298f82baa44f219e999ff44fcd4d8e"
	},
	{
		"id": "1eae9195aacf",
		"ts": "2026-07-12T13:18:35.446Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 263142.84,
		"hash": "1eae9195aacf671eae4b0389a0fd322aa9bedf654bcea8d42ab270f22f9808c7"
	},
	{
		"id": "c80410767abf",
		"ts": "2026-07-12T13:18:35.638Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 783496.85,
		"hash": "c80410767abf9b129eb9931004afe4caa294e44bbf04b047b8a644718f737fc0"
	},
	{
		"id": "7f96c89d58c2",
		"ts": "2026-07-12T13:18:36.695Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1574361.11,
		"hash": "7f96c89d58c23b0aeab9ecba03b9c1c0e14b0ce4d5ffe51248f742016c7762a7"
	},
	{
		"id": "5342951b463d",
		"ts": "2026-07-12T13:18:36.888Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1937774.39,
		"hash": "5342951b463d78e8e8dae23b7b809aadc708babbd2879cd987cca3558c845a67"
	},
	{
		"id": "3e7c81540e04",
		"ts": "2026-07-12T13:18:37.092Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 373035.11,
		"hash": "3e7c81540e04db64d05a27bb7fab83c2c09b743fc5089beb51167c51bd7ee089"
	},
	{
		"id": "fa30fe542a51",
		"ts": "2026-07-12T11:56:33.508Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105685719.94,
		"hash": "fa30fe542a51eac16f068102ad518ef8e4a0733d852167985a2438fd60873a2c"
	},
	{
		"id": "b10bcdd0def5",
		"ts": "2026-07-12T11:56:33.723Z",
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
		"liquidityUsd": 16856748.43,
		"hash": "b10bcdd0def5b0f1262d3cf9f365325771b08b08093810a2453157e8f049cf08"
	},
	{
		"id": "d0e167bb0abb",
		"ts": "2026-07-12T11:56:33.923Z",
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
		"liquidityUsd": 1309228.65,
		"hash": "d0e167bb0abb9463e4fe70ad27fb855607b6b371bb587123b61e68e950248322"
	},
	{
		"id": "375c85aed379",
		"ts": "2026-07-12T11:56:34.296Z",
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
		"liquidityUsd": 30675599.16,
		"hash": "375c85aed37920c1ceae164e5f0ccfb41b4e592e8db7e9c96dda686c19e84e88"
	},
	{
		"id": "733e8dde0f69",
		"ts": "2026-07-12T11:56:34.499Z",
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
		"liquidityUsd": 4613169.31,
		"hash": "733e8dde0f6955b4dcd65887dbe2c868fc596d768528e016fcedd33b4094352e"
	},
	{
		"id": "f84a196d2fdb",
		"ts": "2026-07-12T11:56:34.703Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 992161.87,
		"hash": "f84a196d2fdb96190bc2549e1e2a05faf5e15f6db68ac08d8b727dc7a1c22af6"
	},
	{
		"id": "7ca9f13a0a9f",
		"ts": "2026-07-12T11:56:34.903Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30675599.16,
		"hash": "7ca9f13a0a9f1383b423df5b25aa74aa6b8ead14388d39d043688cf9c66ef954"
	},
	{
		"id": "69b8df90668f",
		"ts": "2026-07-12T11:56:35.271Z",
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
		"liquidityUsd": 2466145.06,
		"hash": "69b8df90668fc44e46f7dcda1527e235dc11f7c00aaa52b59cfb2729209b517c"
	},
	{
		"id": "f347984da03d",
		"ts": "2026-07-12T11:56:35.615Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3308109.96,
		"hash": "f347984da03d039c487b13b1c14526435e6b1e328c2af0777f7759a102f92c19"
	},
	{
		"id": "b407a60c553d",
		"ts": "2026-07-12T11:56:35.817Z",
		"symbol": "CAPACITR",
		"token": "0x65F8152809Dd1fC0D5d8A345c9008d37B95f9ba3",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 107706.04,
		"hash": "b407a60c553ded149104917d9303b3a8d048c57060d4368bf5ebf5126c4f08bb"
	},
	{
		"id": "19558cc36508",
		"ts": "2026-07-12T11:56:36.008Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2255452.45,
		"hash": "19558cc36508deef8881ed3af1db3112184b37de46cbc837a07fdedea2493c11"
	},
	{
		"id": "fc9db60488b7",
		"ts": "2026-07-12T11:56:36.196Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 270108.14,
		"hash": "fc9db60488b7f5ee74c4bb8277e5764cdd6483caf7247d0c85aabc502e556f60"
	},
	{
		"id": "9dd9ba956053",
		"ts": "2026-07-12T11:56:36.393Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 787615.57,
		"hash": "9dd9ba9560535e823d570dcaee26c84382267100f7a766472c000f1c4aa263de"
	},
	{
		"id": "9a140c608ca6",
		"ts": "2026-07-12T11:56:36.581Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1584653.7,
		"hash": "9a140c608ca68e300f3f0b9849d4a8d7cf09da4b42a4b88d7fbdbbfa4e15cd39"
	},
	{
		"id": "5d9d40b914fd",
		"ts": "2026-07-12T11:56:36.771Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 662046.47,
		"hash": "5d9d40b914fdc6b25a94f9d9c4a8275b91d0af2fad27205cf5842546adf7ed12"
	},
	{
		"id": "92dd8aefa8a0",
		"ts": "2026-07-12T11:56:36.959Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1928649.08,
		"hash": "92dd8aefa8a0100acdf19e80680ae0e001b28d8439c8ee050f199ca1c34e8964"
	},
	{
		"id": "9f35f4e06431",
		"ts": "2026-07-12T10:24:05.388Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105678268.25,
		"hash": "9f35f4e06431536fd95822f4272a5369ac27cd4c0865082c07817915dce4e694"
	},
	{
		"id": "c3df689c1202",
		"ts": "2026-07-12T10:24:05.763Z",
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
		"liquidityUsd": 17551775.03,
		"hash": "c3df689c120236132475497ffff001e1d37153e04691224825fe596f403a4b75"
	},
	{
		"id": "e1d49a92ece3",
		"ts": "2026-07-12T10:24:05.974Z",
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
		"liquidityUsd": 1315274.85,
		"hash": "e1d49a92ece31a22badff83a8413d52d547033a914a2661ae0e06f80e882d5e2"
	},
	{
		"id": "d447ee855282",
		"ts": "2026-07-12T10:24:06.192Z",
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
		"liquidityUsd": 30754205.61,
		"hash": "d447ee8552821d75793e6550301fd61d65b8911385e1144556dbb07c87bd40bd"
	},
	{
		"id": "c3034aa2423e",
		"ts": "2026-07-12T10:24:06.403Z",
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
		"liquidityUsd": 4619115.36,
		"hash": "c3034aa2423e192cc7f66419a65a504a334efa5f00c7de5850432031d5bf8ef7"
	},
	{
		"id": "703fa165195d",
		"ts": "2026-07-12T10:24:06.610Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 991450.53,
		"hash": "703fa165195ddbe3b6d209475a41931a975c8fa308a920a41fa3a7297b6c57c3"
	},
	{
		"id": "75b5f705796e",
		"ts": "2026-07-12T10:24:06.812Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30754205.61,
		"hash": "75b5f705796eb5711efb59ebb489adfe4d5f30ce24418563f37f1e5833155ee8"
	},
	{
		"id": "3ef9fac96f09",
		"ts": "2026-07-12T10:24:07.022Z",
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
		"liquidityUsd": 2462192.29,
		"hash": "3ef9fac96f0921af44fbf1a87a1e84df9262859c85d39ce7f2b42efe132fc080"
	},
	{
		"id": "089f4b1cdb60",
		"ts": "2026-07-12T10:24:07.312Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3196403.86,
		"hash": "089f4b1cdb60049c36b6917b674f6bdb2961646d926b4457f19f6ff818630ad7"
	},
	{
		"id": "93e2e76db8cc",
		"ts": "2026-07-12T10:24:07.547Z",
		"symbol": "CAPACITR",
		"token": "0x65F8152809Dd1fC0D5d8A345c9008d37B95f9ba3",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 106283.89,
		"hash": "93e2e76db8cc9f0e050cb500c27245be4c5ac320e00eeeefb9645a868a7ca673"
	},
	{
		"id": "756b17214c86",
		"ts": "2026-07-12T10:24:07.770Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2286505.59,
		"hash": "756b17214c8686e8401931af223fed66ba9074cda634c1e5aba8d662552c845f"
	},
	{
		"id": "1a2ebe2127d7",
		"ts": "2026-07-12T10:24:07.961Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 266996.39,
		"hash": "1a2ebe2127d7cc9234a3a6213ed86ab04073ab61efce93cf31a865d899d57792"
	},
	{
		"id": "8c2df7c82184",
		"ts": "2026-07-12T10:24:08.150Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1591116.06,
		"hash": "8c2df7c82184e1caf1a509b972d58688c610d44dffa0b8ff507891a80221ba29"
	},
	{
		"id": "dacf7cab0740",
		"ts": "2026-07-12T10:24:08.342Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 786248.36,
		"hash": "dacf7cab07403c0e295675dc1f7ef2585680eb6b7d07fd2dcf1f8e4c0cc36a77"
	},
	{
		"id": "04461358b636",
		"ts": "2026-07-12T10:24:08.541Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 658921.19,
		"hash": "04461358b6363badec93cb0516a347d316ea5c8d27fdc9687f0702bb8035a9be"
	},
	{
		"id": "1349e6c9b72f",
		"ts": "2026-07-12T10:24:08.751Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1927601.59,
		"hash": "1349e6c9b72fe2aca23367567eb9a72b923349ccf193de423d93a9400a9353f3"
	},
	{
		"id": "8ef3999a209e",
		"ts": "2026-07-12T10:24:08.945Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 395402.25,
		"hash": "8ef3999a209e2964af5e9e0536faf698e57aae38b59bf109b1e737c652802b60"
	},
	{
		"id": "daf214b3317a",
		"ts": "2026-07-12T08:11:02.373Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105700896.78,
		"hash": "daf214b3317a1a2101ed4d7e374164ad209fb935c097d991d9f219a91bad03d6"
	},
	{
		"id": "e81617039c3f",
		"ts": "2026-07-12T08:11:02.838Z",
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
		"liquidityUsd": 17585923.14,
		"hash": "e81617039c3f0ab7b5de7add369d5758e825060d718bb1ab51ffb129ebc71288"
	},
	{
		"id": "32b23d1860be",
		"ts": "2026-07-12T08:11:03.276Z",
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
		"liquidityUsd": 1359697.29,
		"hash": "32b23d1860be48d8a87d66a7689fb4172b57a7742f38531fde785d038bc31300"
	},
	{
		"id": "1cf473d7fc9b",
		"ts": "2026-07-12T08:11:03.512Z",
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
		"liquidityUsd": 30744089.71,
		"hash": "1cf473d7fc9b1dc814ab47384f06e647106dc6b2c6f4132eef2451f7983f43f5"
	},
	{
		"id": "4b9251f95f5b",
		"ts": "2026-07-12T08:11:04.415Z",
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
		"liquidityUsd": 4593313.51,
		"hash": "4b9251f95f5bbe7ebc3c2288212e7e795d16f9f607a8555194323a5acdd3ccc7"
	},
	{
		"id": "8f41c1e798bc",
		"ts": "2026-07-12T08:11:04.661Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 991582.67,
		"hash": "8f41c1e798bcb001f84554129321a68fd3305f8e4afc5312cf20631ae30398b5"
	},
	{
		"id": "6e6f9e79a5fe",
		"ts": "2026-07-12T08:11:04.902Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30744089.71,
		"hash": "6e6f9e79a5fe597b37018722c8be692ede0d4c581a1cd22775aa6f3e4c9b3f01"
	},
	{
		"id": "8fdcaea9a8c4",
		"ts": "2026-07-12T08:11:05.135Z",
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
		"liquidityUsd": 2470752.59,
		"hash": "8fdcaea9a8c48732406fa779b1f3ecc8dea507179a85c07d2740150774c3eb29"
	},
	{
		"id": "8ef454ca6402",
		"ts": "2026-07-12T08:11:05.488Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3175126.47,
		"hash": "8ef454ca64026c0852dd9d4a5248b6914886f7e8e41518f25fbfe9fefdd40e50"
	},
	{
		"id": "99ad541f92d7",
		"ts": "2026-07-12T08:11:05.869Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 276329.27,
		"hash": "99ad541f92d7b2c753e5c46c83b71afaaaa38525021d94a24bce800e9a9090ab"
	},
	{
		"id": "0c8f9891721f",
		"ts": "2026-07-12T08:11:06.086Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2223745.4,
		"hash": "0c8f9891721f73fe98d66008fdcba9f5b7cedb46ddafd99fa717a57e0c03160a"
	},
	{
		"id": "022fb625178d",
		"ts": "2026-07-12T08:11:06.305Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1626781.12,
		"hash": "022fb625178dc8edad4c1783dbc6ce7ce66e77ce8fe540447475f2924c8f8f1b"
	},
	{
		"id": "e67561f8244c",
		"ts": "2026-07-12T08:11:06.526Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 772694.75,
		"hash": "e67561f8244c0fb08e46c5c417b4009eda0053284f1fbff061a1dc68664856c2"
	},
	{
		"id": "206fa58d1eb2",
		"ts": "2026-07-12T08:11:06.746Z",
		"symbol": "CAPACITR",
		"token": "0x65F8152809Dd1fC0D5d8A345c9008d37B95f9ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 104867.56,
		"hash": "206fa58d1eb20885b5f013487ac56bfe3a5582d59f00ae61c5a0494a82ec6e5e"
	},
	{
		"id": "3d411d23772d",
		"ts": "2026-07-12T08:11:06.963Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 664030.51,
		"hash": "3d411d23772dcbe6725f881fc75dbd5b00590b77e9036f67f7ef8a0acc926989"
	},
	{
		"id": "42478306e6a4",
		"ts": "2026-07-12T08:11:07.181Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1930639.48,
		"hash": "42478306e6a4f06de93423a50a19331e34b929e551482f6bafbd95925b119cce"
	},
	{
		"id": "415c9ef36b78",
		"ts": "2026-07-12T05:54:02.627Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105735374.92,
		"hash": "415c9ef36b78d82f591b40f4d3aa040f6ec8c01a2b51c49a56b8225756af82ab"
	},
	{
		"id": "5a657820df42",
		"ts": "2026-07-12T05:54:03.095Z",
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
		"liquidityUsd": 16885351.69,
		"hash": "5a657820df4203e077251ef01f2b86c5d0264cba137d97453370dd35f14ab94c"
	},
	{
		"id": "0b5793c03918",
		"ts": "2026-07-12T05:54:03.341Z",
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
		"liquidityUsd": 1363133.82,
		"hash": "0b5793c03918aed3d4279bfc31ae71a668abbf01acc1a872246f16a99fa64ecb"
	},
	{
		"id": "f29a28106c21",
		"ts": "2026-07-12T05:54:03.613Z",
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
		"liquidityUsd": 30778129.44,
		"hash": "f29a28106c21db7bca0788d90c412c0894b4b3b2a9c3bbdf9454f32fe983e6af"
	},
	{
		"id": "e780d9082b0d",
		"ts": "2026-07-12T05:54:04.050Z",
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
		"liquidityUsd": 4608205.56,
		"hash": "e780d9082b0d7703e52d248811afa4ae885894a724b13c05f0072123d31281f4"
	},
	{
		"id": "d8bcfa7b5148",
		"ts": "2026-07-12T05:54:04.283Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 991456.48,
		"hash": "d8bcfa7b5148cc7c6d5324e2be9e725bf90c7cdc9ad397afc6c1dcecf2ec29f0"
	},
	{
		"id": "c5a85e8cd3ae",
		"ts": "2026-07-12T05:54:04.524Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30778128.68,
		"hash": "c5a85e8cd3ae0a247e8ede05325a4a4b4c8d165615047c04f72f73ad95439c68"
	},
	{
		"id": "dcdf5fcc50cf",
		"ts": "2026-07-12T05:54:04.759Z",
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
		"liquidityUsd": 2471441.11,
		"hash": "dcdf5fcc50cf186b6d0751f4f823a83909d9f73bffff76a2dc0aeb6b47369183"
	},
	{
		"id": "58e8ca048a72",
		"ts": "2026-07-12T02:25:20.045Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105569950.3,
		"hash": "58e8ca048a72a623a298a041b505af32b781223f0dd168eddfdf0fe683142f97"
	},
	{
		"id": "7b4e5695ba66",
		"ts": "2026-07-12T02:25:20.394Z",
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
		"liquidityUsd": 16259473.26,
		"hash": "7b4e5695ba66e350eaac83edd5954557f3e4a4a906ac38bd02a230ce026e9597"
	},
	{
		"id": "07f9cb538468",
		"ts": "2026-07-12T02:25:20.592Z",
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
		"liquidityUsd": 1364501.56,
		"hash": "07f9cb5384682b3f4be36f9ffb241bc6b4071a34eed8cacce63261b393d14bec"
	},
	{
		"id": "6bb09990e6e0",
		"ts": "2026-07-12T02:25:20.784Z",
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
		"liquidityUsd": 30793589.95,
		"hash": "6bb09990e6e06966eb5921e764a3519d8b95cba9eb5cfd7dafaaf39eaf64f1b8"
	},
	{
		"id": "aaed72f85a8e",
		"ts": "2026-07-12T02:25:20.973Z",
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
		"liquidityUsd": 4593650.65,
		"hash": "aaed72f85a8e8fa16f9683741fb73db0346bd94d58461fdd2f1062f1411e3914"
	},
	{
		"id": "c048bba74486",
		"ts": "2026-07-12T02:25:21.166Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 996786.67,
		"hash": "c048bba7448640241e8abfbdc253b11e89dcf570d68b46a9300cb77e53bd0338"
	},
	{
		"id": "13eded336ab1",
		"ts": "2026-07-12T02:25:21.360Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30793589.95,
		"hash": "13eded336ab17d7b1ca083a815b0efe132cc3cb6b7cc69922eeade4901fcc529"
	},
	{
		"id": "4d9ca71ae66b",
		"ts": "2026-07-12T02:25:21.550Z",
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
		"liquidityUsd": 2470789.59,
		"hash": "4d9ca71ae66b97f2cbe9eecf4be8535edb7f43c3b071841ecd1716d3b0d9c982"
	},
	{
		"id": "cc5fa3b8ec93",
		"ts": "2026-07-12T02:25:21.738Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2244094.45,
		"hash": "cc5fa3b8ec9317db46a0e9617c2f0ca9e2d035f696617fb81ca99dcd560993fc"
	},
	{
		"id": "c3bcba417b13",
		"ts": "2026-07-12T02:25:21.925Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 276590.79,
		"hash": "c3bcba417b1314e8291c641ecae811eb17d61d5c9f7c7f6c305be605a2cb8de6"
	},
	{
		"id": "14f7ecfc6e7d",
		"ts": "2026-07-12T02:25:22.111Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3135424.11,
		"hash": "14f7ecfc6e7dcf1223224edd47f930e3414bea922769c646f4722f1b203e7816"
	},
	{
		"id": "cddda27bebd3",
		"ts": "2026-07-12T02:25:22.298Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1593520.31,
		"hash": "cddda27bebd300e223a6d0df5b1a3f84ec79d6b3b57c96877629ce380a1e56d9"
	},
	{
		"id": "eb238ad18bf7",
		"ts": "2026-07-12T02:25:22.486Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 699609.96,
		"hash": "eb238ad18bf7d01a4a67e26f99b8060b0f11df87b62fe3ccab80215a08fb8d26"
	},
	{
		"id": "82a8552bfc34",
		"ts": "2026-07-12T02:25:22.675Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 783964.43,
		"hash": "82a8552bfc34b851a0abdf94f85ea42dfd110971a292d3fe42a1ac0fc16469b7"
	},
	{
		"id": "cff6dc1ae961",
		"ts": "2026-07-12T02:25:22.862Z",
		"symbol": "CAPACITR",
		"token": "0x65F8152809Dd1fC0D5d8A345c9008d37B95f9ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 113746.49,
		"hash": "cff6dc1ae961a7a357f8b3f0d52148701668f4c0b54e1b1ea975d9e2f95a96bc"
	},
	{
		"id": "2af95e4e6feb",
		"ts": "2026-07-12T02:25:23.053Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1940513.23,
		"hash": "2af95e4e6feb5e17a669228adedc44592bbd9b09f15e218e5e6d4869a4697d96"
	},
	{
		"id": "22a92bb6a4ee",
		"ts": "2026-07-12T02:25:23.239Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8374225.02,
		"hash": "22a92bb6a4ee284eafc4d86f78c1fa978ffe28f1a3d86bdceaf9002929630617"
	},
	{
		"id": "8e9b98cc0ffd",
		"ts": "2026-07-11T23:52:04.782Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105360757.32,
		"hash": "8e9b98cc0ffd92752aeaeecb66d1351bf638b4598ee8c41738af731ce6a6c637"
	},
	{
		"id": "c9e9f9a64d41",
		"ts": "2026-07-11T23:52:05.155Z",
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
		"liquidityUsd": 16047336.21,
		"hash": "c9e9f9a64d41e1b2d357ccc638076f59d384e040e0ac61ca0fb73a165bb2e800"
	},
	{
		"id": "6b1f236a01e5",
		"ts": "2026-07-11T23:52:05.351Z",
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
		"liquidityUsd": 1353565.82,
		"hash": "6b1f236a01e5e7931150cf45bfb8002db75f205f1420dd4e1e1623b3500eb317"
	},
	{
		"id": "9b44205db952",
		"ts": "2026-07-11T23:52:05.551Z",
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
		"liquidityUsd": 30842950.53,
		"hash": "9b44205db952ce4cadba9b4b4fab763f0db5ddc7a0c0a4f8688d3a05ceea1900"
	},
	{
		"id": "fdc84de5ca5c",
		"ts": "2026-07-11T23:52:05.760Z",
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
		"liquidityUsd": 4552565.38,
		"hash": "fdc84de5ca5ce46ea31c2d13956da141f1fb397359f372ae704abd5892d9da53"
	},
	{
		"id": "8906ca80e421",
		"ts": "2026-07-11T23:52:05.949Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 993425.57,
		"hash": "8906ca80e4219bf486211d67c5ffd73fad93f761393e38015d7968a7472c9b25"
	},
	{
		"id": "7f651308bb5c",
		"ts": "2026-07-11T23:52:06.147Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30842950.53,
		"hash": "7f651308bb5c54e686f8a377e82fab9675ed9cd6abd3cb33f1401cd1610a3c56"
	},
	{
		"id": "aac2e6543122",
		"ts": "2026-07-11T23:52:07.474Z",
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
		"liquidityUsd": 2542306.24,
		"hash": "aac2e65431223999df65de95707f7aa1c01c0939c4f96cacf1d5e3a1e7ab9959"
	},
	{
		"id": "7db4aeb1b36e",
		"ts": "2026-07-11T23:52:07.662Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2250697.83,
		"hash": "7db4aeb1b36e280f9066a70d1be6cdb646bc4ed621f86e389423850bd6077e9e"
	},
	{
		"id": "fbb082ae5654",
		"ts": "2026-07-11T23:52:09.053Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 265955.55,
		"hash": "fbb082ae5654aca1f32b59fa76a383de6cacbbfc9933857dd20e39411906ded8"
	},
	{
		"id": "6f96aad48b3c",
		"ts": "2026-07-11T23:52:09.245Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3181741.64,
		"hash": "6f96aad48b3c4fdc4cbc640039c578b07a9fe8d8eebb02e1b7bb801b54ae4b22"
	},
	{
		"id": "c88ad0de8892",
		"ts": "2026-07-11T23:52:09.431Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1589063.4,
		"hash": "c88ad0de889241d98df2bed5c9dc5e356df79ecebfcc0b5178e526c2cd68a83b"
	},
	{
		"id": "6ee3333aa3bf",
		"ts": "2026-07-11T23:52:09.622Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 695149.96,
		"hash": "6ee3333aa3bf5ec0785d1d10923f40209713d64dee28c77b6a5d2e4ade5fd8ad"
	},
	{
		"id": "5d1efd002560",
		"ts": "2026-07-11T23:52:09.799Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 778359.64,
		"hash": "5d1efd00256012b90b444c4a421a758b05a0e688e36cbb337bdae238976bc401"
	},
	{
		"id": "32f56a7567cb",
		"ts": "2026-07-11T23:52:09.983Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 332735.53,
		"hash": "32f56a7567cb2c99cd66b7097a488c018153e265261375e41f30c5c7be8f316e"
	},
	{
		"id": "dc248cf265ef",
		"ts": "2026-07-11T23:52:10.171Z",
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
		"liquidityUsd": 8236162.5,
		"hash": "dc248cf265ef002cc22c4c6912909c7dbda76486d4bd29245c040e09b188f9f6"
	},
	{
		"id": "108c6233b4a6",
		"ts": "2026-07-11T23:52:10.364Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4570837.75,
		"hash": "108c6233b4a66baafa223d1f1e6f1badc0c242e14a6225ac4c9704015c8cac36"
	},
	{
		"id": "b45dd124eecc",
		"ts": "2026-07-11T22:43:05.087Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105981870.53,
		"hash": "b45dd124eecc0c38fde76045e09b39c6db1681a010a34a9a7d6dded8c1f01cb0"
	},
	{
		"id": "642379da8002",
		"ts": "2026-07-11T22:43:05.348Z",
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
		"liquidityUsd": 17030962.55,
		"hash": "642379da8002c4383c792edd5ec6a339b5fab272c8a28f177500a18692319092"
	},
	{
		"id": "9b2cc27faa75",
		"ts": "2026-07-11T22:43:05.605Z",
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
		"liquidityUsd": 1378980.83,
		"hash": "9b2cc27faa75f15b6457ab5f0a6fe02a6087fad77bb0e45cfcf74db56417d944"
	},
	{
		"id": "6f2c4ad80f9a",
		"ts": "2026-07-11T22:43:06.055Z",
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
		"liquidityUsd": 31069038.97,
		"hash": "6f2c4ad80f9aa3e5d0913e506fd50f29d0e4da5ccbd0981581dc515a8b3b21e8"
	},
	{
		"id": "8eaff3f2494b",
		"ts": "2026-07-11T22:43:06.334Z",
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
		"liquidityUsd": 4614002.28,
		"hash": "8eaff3f2494b51840b4f958634748b6c4eeb34a01dc87a475cb7ad62a0758ccf"
	},
	{
		"id": "7ffde09d20d8",
		"ts": "2026-07-11T22:43:06.573Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1007708.02,
		"hash": "7ffde09d20d8659d9fc9be6ec70a8ee95be1ffbb0763f3e7bfb03b96a933b08e"
	},
	{
		"id": "cc756216d54a",
		"ts": "2026-07-11T22:43:06.825Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 31069038.97,
		"hash": "cc756216d54a4b5a37dc41acf2625de18f1ad11888f9c5e545a2506728f2ebeb"
	},
	{
		"id": "297f840cf555",
		"ts": "2026-07-11T22:43:07.062Z",
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
		"liquidityUsd": 2575633.7,
		"hash": "297f840cf55503e57bf34a8229992018a5273d85d9d03abcf27d8d54772ae156"
	},
	{
		"id": "48478796f03e",
		"ts": "2026-07-11T22:43:07.340Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2266302.04,
		"hash": "48478796f03edb1b447e1c59373905e52e8670f32494b4a5b40f72f66f36f050"
	},
	{
		"id": "66ce0f483cf7",
		"ts": "2026-07-11T22:43:07.584Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 273920.09,
		"hash": "66ce0f483cf7268937cfe8eb7c13366e0512b1444d77485a85b324863bbf66af"
	},
	{
		"id": "c1b3b7905cea",
		"ts": "2026-07-11T22:43:07.805Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3236058.59,
		"hash": "c1b3b7905cea628193a46d042e89e5422b6876fd13820d2bd535b604a40a51c3"
	},
	{
		"id": "ababf4a24ad0",
		"ts": "2026-07-11T22:43:08.039Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 699728.63,
		"hash": "ababf4a24ad0f0cf798c537e3ae7fff9343c0bbf303bcf031eaa1536fb5d4dc8"
	},
	{
		"id": "a76fae1e9d92",
		"ts": "2026-07-11T22:43:08.259Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1646664.03,
		"hash": "a76fae1e9d926eaf9d078e2bfad43edd3ed735dae8a8123ecde5063a3f72b206"
	},
	{
		"id": "7d6dfd914791",
		"ts": "2026-07-11T22:43:08.493Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 789640.16,
		"hash": "7d6dfd914791cea7ddbd28015e44342e59476d92b31436e0caca9c1ef78eceda"
	},
	{
		"id": "7c732cd24503",
		"ts": "2026-07-11T22:43:08.715Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1946141.34,
		"hash": "7c732cd24503eb2f8e72cebd81c5505ebd0e0a8128fc01147f3e172f996409c0"
	},
	{
		"id": "7b59df1936fb",
		"ts": "2026-07-11T22:43:08.951Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 322952.65,
		"hash": "7b59df1936fbd9acf83e361d97983a9b556a46fd5cae2bc25259a1f57f0882f1"
	},
	{
		"id": "95be4ad77ea4",
		"ts": "2026-07-11T22:43:09.173Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8301797.2,
		"hash": "95be4ad77ea42a04aadb50b5a798efcb6605e966746286975b190ec48f0d4dc1"
	},
	{
		"id": "1b38e47506b1",
		"ts": "2026-07-11T21:44:17.492Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106203050.19,
		"hash": "1b38e47506b141608182c664aab8afe1eef2461823c0ace7f2da110888341d30"
	},
	{
		"id": "d3676a3b318f",
		"ts": "2026-07-11T21:44:17.933Z",
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
		"liquidityUsd": 16730619.76,
		"hash": "d3676a3b318f5029b3f63b24dc8abf2416c55f628f08d9507fe1fc242d6933d9"
	},
	{
		"id": "65a04199c5fd",
		"ts": "2026-07-11T21:44:18.179Z",
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
		"liquidityUsd": 1381032.57,
		"hash": "65a04199c5fd0a76d34b59096d2a60ee6e6177d1c9f7b7bbe33be5d859c2f76d"
	},
	{
		"id": "1e8f7eb53d27",
		"ts": "2026-07-11T21:44:18.414Z",
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
		"liquidityUsd": 31203058.79,
		"hash": "1e8f7eb53d274f42234c5999ace28684c9331de49bd1156ef617b25f9f0367f1"
	},
	{
		"id": "8401f253d9c5",
		"ts": "2026-07-11T21:44:18.851Z",
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
		"liquidityUsd": 4631531.75,
		"hash": "8401f253d9c52c9ede1e93eed1c98739951623a262a61ef4494e19eb5eb3e91e"
	},
	{
		"id": "cc47f4d7debc",
		"ts": "2026-07-11T21:44:19.087Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1015428.79,
		"hash": "cc47f4d7debcc28669e1984dddbe68f58ddb5f4b3ad6a8ae0250e42250ebffde"
	},
	{
		"id": "094691324365",
		"ts": "2026-07-11T21:44:19.319Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 31203058.79,
		"hash": "0946913243655f453bf455015bd0862f185e3a6325efc076306c2d8d338fc0d9"
	},
	{
		"id": "9673ce0978f1",
		"ts": "2026-07-11T21:44:20.240Z",
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
		"liquidityUsd": 2450849.4,
		"hash": "9673ce0978f1c943a294595b9a53839701b138c9b44ef08c331c59f0de769d4d"
	},
	{
		"id": "6f49e1be7aad",
		"ts": "2026-07-11T21:44:20.474Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2303785.18,
		"hash": "6f49e1be7aadfa887ce26ccbf0eb46d5e7f36ef63dfd7ec3ec3f8af3bca595d7"
	}
]
