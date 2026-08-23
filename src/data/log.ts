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
	"updatedAt": "2026-08-23T12:31:31.892Z",
	"tokensScored": 13921,
	"verdictsIssued": 13921,
	"safe": 11986,
	"risky": 979,
	"likelyRug": 956,
	"ticks": 810
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "3ce21a75839b",
		"ts": "2026-08-23T12:31:27.479Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110280315.94,
		"hash": "3ce21a75839be2da873eb16382f84eed6c98f499b627e5514d8669b1b20bff56"
	},
	{
		"id": "a8b8ce1b5267",
		"ts": "2026-08-23T12:31:27.703Z",
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
		"liquidityUsd": 18659080.87,
		"hash": "a8b8ce1b52674b94d0f148b9a323b1825e76cb0899d8b472f0a5907825cf2019"
	},
	{
		"id": "d30feadb67c5",
		"ts": "2026-08-23T12:31:27.919Z",
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
		"liquidityUsd": 879101.11,
		"hash": "d30feadb67c56801a47bc2d60b247a8e7ba9691f16ad2746d1184b0c292051ec"
	},
	{
		"id": "5cc62fa33f1b",
		"ts": "2026-08-23T12:31:28.134Z",
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
		"liquidityUsd": 27864188.92,
		"hash": "5cc62fa33f1b9938b3d4ceb4c56802812c099e8a8c3dcb09d6e705046d835dac"
	},
	{
		"id": "0d459acd796d",
		"ts": "2026-08-23T12:31:28.426Z",
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
		"liquidityUsd": 3352329.88,
		"hash": "0d459acd796db655f42bde3bab0bf8f31a88c436b0942fe55670c8bffeecc0a3"
	},
	{
		"id": "e90349d0f1eb",
		"ts": "2026-08-23T12:31:28.632Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1167021.38,
		"hash": "e90349d0f1eb1c7c2d2e31dd90e277515e218e9afae50413ad845e85223aa981"
	},
	{
		"id": "d516ee4335c4",
		"ts": "2026-08-23T12:31:29.075Z",
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
		"liquidityUsd": 371463.36,
		"hash": "d516ee4335c48ba5e95d9d6f03017fb88f42a653ce6b972d301cea51e222b070"
	},
	{
		"id": "fdc498503b4e",
		"ts": "2026-08-23T12:31:29.282Z",
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
		"liquidityUsd": 1809828.94,
		"hash": "fdc498503b4ecbe82c61442bbe74f4c525e12e97b99226179bbd919cc9f7e353"
	},
	{
		"id": "36a0d22b7d79",
		"ts": "2026-08-23T12:31:29.496Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1279250.64,
		"hash": "36a0d22b7d79886fca6e9bfd3f01fefe7687c2a68f6cea12033ca8515df3973a"
	},
	{
		"id": "4ce6b5254e6e",
		"ts": "2026-08-23T12:31:29.693Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 583571.31,
		"hash": "4ce6b5254e6e8ade9d42072ca98e4bb10e7428b988ff75e7866091ebe7e9f49c"
	},
	{
		"id": "858411ee6db8",
		"ts": "2026-08-23T12:31:29.919Z",
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
		"liquidityUsd": 822330.55,
		"hash": "858411ee6db8ea47f64b3589dda37c594219e0471005d24da555ecdfd0aba312"
	},
	{
		"id": "115a2c00dec1",
		"ts": "2026-08-23T12:31:30.149Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11000491.09,
		"hash": "115a2c00dec1569748565bdc23ea5baeaa2a61451b60363230590d5944c3290d"
	},
	{
		"id": "a4b7afa92ab0",
		"ts": "2026-08-23T12:31:30.345Z",
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
		"liquidityUsd": 700445.66,
		"hash": "a4b7afa92ab0ccc0120f5c1cd521059dc714ca73d059bbd6f34a94964d378c0f"
	},
	{
		"id": "86db5d9708b4",
		"ts": "2026-08-23T12:31:30.561Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 601035.57,
		"hash": "86db5d9708b4ef7d667e8ae4aa5cb49e53541a533cdcc939f40c3b5d714a9d83"
	},
	{
		"id": "8a825356b631",
		"ts": "2026-08-23T12:31:30.759Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4197525.44,
		"hash": "8a825356b631f2771f7cf509c9d37ba169ffb40217967cd922a2e307ef552164"
	},
	{
		"id": "d5a67c2fdfc7",
		"ts": "2026-08-23T12:31:31.117Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 849546.86,
		"hash": "d5a67c2fdfc78d46505b48d2b1eb24c0021fd84f7e812341742ee6b83e051a68"
	},
	{
		"id": "941963f0f55c",
		"ts": "2026-08-23T12:31:31.466Z",
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
		"liquidityUsd": 137204.04,
		"hash": "941963f0f55c42218a3021184c1732096340a0e0584f74e97a6a1f22d06cac59"
	},
	{
		"id": "ddb2a7914bd0",
		"ts": "2026-08-23T12:31:31.677Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3257716.1,
		"hash": "ddb2a7914bd09273842f71e7a704f12aff6513df15a72d851e82d178a086b4c1"
	},
	{
		"id": "9c3088e72c96",
		"ts": "2026-08-23T12:31:31.891Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1820654.02,
		"hash": "9c3088e72c96d0bb439c5c42ce965e695c7a0b2d32f7dc0612f149d5d3643815"
	},
	{
		"id": "c97978fa411b",
		"ts": "2026-08-23T11:17:07.156Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110028002.3,
		"hash": "c97978fa411bee7ea7b8aa3bc38f1c3f13f0ba8e09dcfb6b94558ef5618d57f9"
	},
	{
		"id": "5a383d6fb4ea",
		"ts": "2026-08-23T11:17:07.425Z",
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
		"liquidityUsd": 19315540.4,
		"hash": "5a383d6fb4eacb2c00bae96bd1d1284a3cdbbe9e78021e73d60c2e95618e5fd7"
	},
	{
		"id": "81c6a98245fb",
		"ts": "2026-08-23T11:17:07.637Z",
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
		"liquidityUsd": 876580.74,
		"hash": "81c6a98245fb5e1d9098aaa3872f97dce51783b3f7f660c0cebdc36e16c8ee5a"
	},
	{
		"id": "98d2290a2e60",
		"ts": "2026-08-23T11:17:07.843Z",
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
		"liquidityUsd": 27816056.92,
		"hash": "98d2290a2e60ee9c58fe768f5be33ffa314764b4927a78a2d7ea56a35fb34840"
	},
	{
		"id": "5c3dc6aa5c6b",
		"ts": "2026-08-23T11:17:08.049Z",
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
		"liquidityUsd": 3338748.35,
		"hash": "5c3dc6aa5c6b0db0e05077f8106437a88667e64ca36e6588d93dfcab2d6b9119"
	},
	{
		"id": "779b064922fd",
		"ts": "2026-08-23T11:17:08.310Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1162330.82,
		"hash": "779b064922fd7484d85f2dc1fa6ad1867f5d15971274febf047008af49d59ec0"
	},
	{
		"id": "1f1db28263b1",
		"ts": "2026-08-23T11:17:08.537Z",
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
		"liquidityUsd": 374798.45,
		"hash": "1f1db28263b1dae34a0b7ac18d21c819e71c459f0e91bbd480e0af3b305d079d"
	},
	{
		"id": "fb69ccc9e1e6",
		"ts": "2026-08-23T11:17:08.746Z",
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
		"liquidityUsd": 3382992.84,
		"hash": "fb69ccc9e1e6c75aab4108f9b7698aa2127120c449bb4a774d6399a5c529434b"
	},
	{
		"id": "9e4259de9257",
		"ts": "2026-08-23T11:17:08.951Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1263589.86,
		"hash": "9e4259de92579c166f1d7f2bb01a93b64f71827961ee6a970c770b60b8a3ccdd"
	},
	{
		"id": "b1f6ff20e848",
		"ts": "2026-08-23T11:17:09.449Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 793530.33,
		"hash": "b1f6ff20e84888db4dba15dd9e9c0a3c495022592d46c4862f742e47b85c8a5d"
	},
	{
		"id": "873a9a3ca01e",
		"ts": "2026-08-23T11:17:09.656Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 547538.12,
		"hash": "873a9a3ca01eecc6149e4841285079977ce6d33bacd5928b188b222bdc54b552"
	},
	{
		"id": "7dd887554da2",
		"ts": "2026-08-23T11:17:09.874Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 701031.17,
		"hash": "7dd887554da24ee52c159a7be35abc8f844bb14a768696326a26f5fd7b937889"
	},
	{
		"id": "27533d0bc72f",
		"ts": "2026-08-23T11:17:10.093Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11018315.18,
		"hash": "27533d0bc72fd20f48ca860391fd95d6f07bfc456f70b5e1dd9b6c049c64ab0a"
	},
	{
		"id": "805f7bf16ed5",
		"ts": "2026-08-23T11:17:10.364Z",
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
		"liquidityUsd": 132446.63,
		"hash": "805f7bf16ed561b33cb317a3f7a0c1b413256a59c208c786db510b90bfa3f1c8"
	},
	{
		"id": "7111527f1900",
		"ts": "2026-08-23T11:17:10.593Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 593224.35,
		"hash": "7111527f19001ba901b633d8ae46211150a2ecc775e82246c8d63ad80cfebc5f"
	},
	{
		"id": "e0ed0c69baad",
		"ts": "2026-08-23T11:17:10.817Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 851556.15,
		"hash": "e0ed0c69baad5cd838354f98bcecea34f66391cfa1366f0593c245364056bf44"
	},
	{
		"id": "5886c4bf2dd3",
		"ts": "2026-08-23T11:17:11.030Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3253553.71,
		"hash": "5886c4bf2dd35f675a9214c42a24810dc7a7c783df4cc7aa618f15201f52b6d6"
	},
	{
		"id": "f75fd52fca27",
		"ts": "2026-08-23T11:17:11.233Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4186425.9,
		"hash": "f75fd52fca277aeff4992cd5642bce819eace2406d0a372ca6ff7b9848ccb68d"
	},
	{
		"id": "28afb97c57f8",
		"ts": "2026-08-23T11:17:11.468Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1793161.42,
		"hash": "28afb97c57f859bec67913c8e5b426627edd588315917a96440f96909b92e5aa"
	},
	{
		"id": "d84ece767261",
		"ts": "2026-08-23T10:19:27.371Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109957317.88,
		"hash": "d84ece7672610804267cc101bb548682c6d007ce53cb967dbe53effc2fee0f21"
	},
	{
		"id": "4a5b00f6c2bc",
		"ts": "2026-08-23T10:19:27.816Z",
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
		"liquidityUsd": 17260505.62,
		"hash": "4a5b00f6c2bc479c3f46e65cc841e6eb1de9f635ab5f54caf70a9846aaa5a7f8"
	},
	{
		"id": "143fe85e6518",
		"ts": "2026-08-23T10:19:28.060Z",
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
		"liquidityUsd": 874354.7,
		"hash": "143fe85e6518a52f1ebbd916e278d7bbd96d27448e1bb7468fa72b44a737017a"
	},
	{
		"id": "ddd03c88c5ea",
		"ts": "2026-08-23T10:19:28.304Z",
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
		"liquidityUsd": 27780209.01,
		"hash": "ddd03c88c5eabd4577494b7d2363f830e7dae01be92c98c16b70ffbda7d192dc"
	},
	{
		"id": "9b2b91c893d2",
		"ts": "2026-08-23T10:19:28.543Z",
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
		"liquidityUsd": 3322218.92,
		"hash": "9b2b91c893d2f69d494b9362aa1d26ce92c2afa4e726868ab31449d7a9169657"
	},
	{
		"id": "bf459b3ab873",
		"ts": "2026-08-23T10:19:28.785Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1157853.29,
		"hash": "bf459b3ab873c3ec4e16e37b4e3be2e634372af099bbe6c39ff1b5e74d71bae2"
	},
	{
		"id": "c1939a44ceaf",
		"ts": "2026-08-23T10:19:29.024Z",
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
		"liquidityUsd": 378319.72,
		"hash": "c1939a44ceaf76d0b4a5bec432aa81bfdfb5ef02ff4c2c5318beda3add123f57"
	},
	{
		"id": "0c34919b610f",
		"ts": "2026-08-23T10:19:29.280Z",
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
		"liquidityUsd": 3378613.88,
		"hash": "0c34919b610f65780dd72131c15ad622e2c6e05202048f951296ff195583a682"
	},
	{
		"id": "c5e6883ef12e",
		"ts": "2026-08-23T10:19:29.544Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1266228.12,
		"hash": "c5e6883ef12e739dc8918a319196124d3754ab42ff0a901f70cc61ab6b4380a9"
	},
	{
		"id": "8bfe08c1d40c",
		"ts": "2026-08-23T10:19:29.863Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 787703.24,
		"hash": "8bfe08c1d40cf87fcef0701ca6dd45bea0feb699af8b18b69dcc7ee5232c9622"
	},
	{
		"id": "a2a249bfb7ba",
		"ts": "2026-08-23T10:19:30.087Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 511412.29,
		"hash": "a2a249bfb7bae357cc9b5222baaeb79b71a7236d032ba5778c8644d8e8a0ad9a"
	},
	{
		"id": "64b5bfae2d51",
		"ts": "2026-08-23T10:19:30.311Z",
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
		"liquidityUsd": 10982515.08,
		"hash": "64b5bfae2d513de0e896261654619482f0b25b748745e40076996b1161ad3a68"
	},
	{
		"id": "6b24ea47ef97",
		"ts": "2026-08-23T10:19:30.539Z",
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
		"liquidityUsd": 700756.53,
		"hash": "6b24ea47ef97c4a0018fbca2887eaea303e1214e3d9575aab0456eb0d084e09a"
	},
	{
		"id": "4eab970989f3",
		"ts": "2026-08-23T10:19:30.764Z",
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
		"liquidityUsd": 134205.96,
		"hash": "4eab970989f39d88f7e008a1f955308a7b3d7a1d131730bd843785c893564569"
	},
	{
		"id": "fb8b2d8e9c4a",
		"ts": "2026-08-23T10:19:30.987Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 863483.7,
		"hash": "fb8b2d8e9c4a869e3a0a93f248ffe266a828454054346e768bcb89cd0dd8774c"
	},
	{
		"id": "1fe0e7f2421c",
		"ts": "2026-08-23T10:19:31.211Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 618082.77,
		"hash": "1fe0e7f2421c32c12415e0bfda0b7b10e8d44757d0fe87f0ccc3d5a7bd82a371"
	},
	{
		"id": "b56791c4d03a",
		"ts": "2026-08-23T10:19:31.434Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3226624.37,
		"hash": "b56791c4d03a14ffc065d2788d6de07df59824630515930fd7dc0dc47062045f"
	},
	{
		"id": "07176804695f",
		"ts": "2026-08-23T10:19:31.659Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1793464.12,
		"hash": "07176804695f0b75be3e998e6c12175c5dc59475285e1a1df63126a8c60f5623"
	},
	{
		"id": "ba10eb718ed7",
		"ts": "2026-08-23T10:19:31.882Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4096065.58,
		"hash": "ba10eb718ed7944d480c06cdd71142353cd6a7f7a41043c4b83b008a25ee20d5"
	},
	{
		"id": "20c9a2f2a9df",
		"ts": "2026-08-23T09:23:10.216Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109874694.43,
		"hash": "20c9a2f2a9dfe1258547aef131b0cc013577ef51ea66652626fe98c76cbe2f24"
	},
	{
		"id": "1de425e84ceb",
		"ts": "2026-08-23T09:23:10.615Z",
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
		"liquidityUsd": 13211162.93,
		"hash": "1de425e84cebadb542df53de701783f75c57328e3e56d58aa334058fa08e1118"
	},
	{
		"id": "a355a9e4144f",
		"ts": "2026-08-23T09:23:10.802Z",
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
		"liquidityUsd": 865667.07,
		"hash": "a355a9e4144fab1bf2634183542f43d5c8125f90296737c9acc18e874c5c3001"
	},
	{
		"id": "b2cb00ea4f9b",
		"ts": "2026-08-23T09:23:11.012Z",
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
		"liquidityUsd": 27739085.86,
		"hash": "b2cb00ea4f9b0f5d9299d58f08f414a57d919faf4911449874acf808a3fad14f"
	},
	{
		"id": "29937442c8e7",
		"ts": "2026-08-23T09:23:11.209Z",
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
		"liquidityUsd": 3319639.13,
		"hash": "29937442c8e7c6c8785ef46265796738da2fe1762f4a5381cdc93e1a9518a710"
	},
	{
		"id": "6fb7d850409e",
		"ts": "2026-08-23T09:23:11.394Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1156595.29,
		"hash": "6fb7d850409e5e6c33cefdeecd29dd4583514c252c41f4f89b3fe718e80d0a0e"
	},
	{
		"id": "1fbb0d1dc947",
		"ts": "2026-08-23T09:23:11.609Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 938333.5,
		"hash": "1fbb0d1dc9477ccff83193c28a885d52e74d1f85b1b9f97279a5dd6366fc31cc"
	},
	{
		"id": "4b7cdb7e7054",
		"ts": "2026-08-23T09:23:11.874Z",
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
		"liquidityUsd": 3370541.56,
		"hash": "4b7cdb7e7054294378972d4142f8fc8d91d1dceefcd392425f4376e857773a0e"
	},
	{
		"id": "ad44c13b11fc",
		"ts": "2026-08-23T09:23:12.067Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1354843.17,
		"hash": "ad44c13b11fc2b1a7593a9871dfe27827d74e061733f63e942c6955ea6499040"
	},
	{
		"id": "99a1e168da9b",
		"ts": "2026-08-23T09:23:12.396Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 798158.95,
		"hash": "99a1e168da9b7096f91cadbeb2119c01e15d6a8cc6bd4a3a538ce368f4847e33"
	},
	{
		"id": "315bbccfb341",
		"ts": "2026-08-23T09:23:12.573Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 510770.6,
		"hash": "315bbccfb341c4f90376da74bffbcff4edb86f65a71803e1cb585de83c1fc5b3"
	},
	{
		"id": "f6a2a6d4906e",
		"ts": "2026-08-23T09:23:12.764Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 699161.39,
		"hash": "f6a2a6d4906e15a5b61c4bc0c862f6e3742451c7d25708e4c771fd7bc72804d9"
	},
	{
		"id": "5ab1a2017260",
		"ts": "2026-08-23T09:23:12.957Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10986780.53,
		"hash": "5ab1a20172604799c7a99a0bacd423fe17a23cebee890cc5d5146c9855b7dbeb"
	},
	{
		"id": "262af8a8953d",
		"ts": "2026-08-23T09:23:13.136Z",
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
		"liquidityUsd": 126776.17,
		"hash": "262af8a8953dc6de7b67a1569ba55404dec2be0c939972361f1c13b0ff2734a8"
	},
	{
		"id": "ac912c1f7562",
		"ts": "2026-08-23T09:23:13.355Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 852125.67,
		"hash": "ac912c1f75620d46a3a92f7e3bbcc7ee7f4223704d42fb8123cc6218f1c51aa9"
	},
	{
		"id": "eb29ba6e185e",
		"ts": "2026-08-23T09:23:13.532Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 613446.37,
		"hash": "eb29ba6e185e4529c840b9663aae49e5978cb7104694bafe054ff86e00cfca7d"
	},
	{
		"id": "2ec0ed678bf3",
		"ts": "2026-08-23T09:23:13.751Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3227677.06,
		"hash": "2ec0ed678bf303266bb9533f00bd1159d658a4105f1630335c6d375f04490f06"
	},
	{
		"id": "633e49d89195",
		"ts": "2026-08-23T09:23:13.926Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1790963.6,
		"hash": "633e49d89195ced99c8ddaef98dd720da3d7c1150665f40d11bfa125864f7e85"
	},
	{
		"id": "3307ccc73bbc",
		"ts": "2026-08-23T09:23:14.117Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3985360.91,
		"hash": "3307ccc73bbc6e86bdf2b43f7df1a434bb6d47f85f14953c6aee579f9392bb34"
	},
	{
		"id": "5c4d21b76399",
		"ts": "2026-08-23T08:24:23.689Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109798316.87,
		"hash": "5c4d21b763996b358b55a536c264c5c60aba517eb5f6ef3c4d4ea4f154a2916e"
	},
	{
		"id": "616f0d0ceccb",
		"ts": "2026-08-23T08:24:23.938Z",
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
		"liquidityUsd": 17653145.15,
		"hash": "616f0d0ceccbb6cc7cd1d5bae768788ec6dec012b073d2dc961704be06fdfa5b"
	},
	{
		"id": "eeb2ad26a292",
		"ts": "2026-08-23T08:24:24.154Z",
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
		"liquidityUsd": 865667.07,
		"hash": "eeb2ad26a292c9bbb360e2500737fff99cf07b4db8f9b4139261552ec3bfed10"
	},
	{
		"id": "064fc3a356d0",
		"ts": "2026-08-23T08:24:24.380Z",
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
		"liquidityUsd": 27652466.41,
		"hash": "064fc3a356d0e51237c51a7ce4a720635528f71a9134eb152a44a2e1bed34bef"
	},
	{
		"id": "21b88b3dcc5b",
		"ts": "2026-08-23T08:24:24.587Z",
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
		"liquidityUsd": 3300551.25,
		"hash": "21b88b3dcc5b65339cd877b01d48869347eb6e38201acdae04731d8616441ab6"
	},
	{
		"id": "58300ec4718b",
		"ts": "2026-08-23T08:24:24.828Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1147134.57,
		"hash": "58300ec4718bbcf562337b19d84db4c2398b97171f39cd0f7b98a3dc867175ac"
	},
	{
		"id": "9559205773fa",
		"ts": "2026-08-23T08:24:25.037Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1700734.96,
		"hash": "9559205773fae48b2322feb557afa1b6b7ef28a0babbf4d35f85136d2c391209"
	},
	{
		"id": "ef9bd0dc95d8",
		"ts": "2026-08-23T08:24:25.253Z",
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
		"liquidityUsd": 3365880.61,
		"hash": "ef9bd0dc95d858a390c03acd3ae7b1f610455c912f188cd926ad36b47b9a34d1"
	},
	{
		"id": "bb3914967f3d",
		"ts": "2026-08-23T08:24:25.457Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1338762.04,
		"hash": "bb3914967f3dc5d85d5f10f895a4d9bc96eaa1b8c63292cfa29cb070ad3a2a61"
	},
	{
		"id": "a252dcd2540d",
		"ts": "2026-08-23T08:24:25.668Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 804984.7,
		"hash": "a252dcd2540d257f81cd7310fbd8fae03cdff1f3cea4b2f8a82dbc64874215a5"
	},
	{
		"id": "32d4063db3fb",
		"ts": "2026-08-23T08:24:25.872Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 497928.83,
		"hash": "32d4063db3fb45ba36af4c675c579cf6a278a90f68097f27642d2b317eb6ea16"
	},
	{
		"id": "3dba4d90d7b8",
		"ts": "2026-08-23T08:24:26.135Z",
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
		"liquidityUsd": 131194.27,
		"hash": "3dba4d90d7b81158187c4a8516230ca4a186ce2c6feeeac9c6195ceb979daafd"
	},
	{
		"id": "5a418885f68d",
		"ts": "2026-08-23T08:24:26.329Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 692984.04,
		"hash": "5a418885f68d3d0eaf656fca6c74dc2c1971853a4723d72f82167ce2cc91beb6"
	},
	{
		"id": "529f6280d99c",
		"ts": "2026-08-23T08:24:26.566Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10967283.15,
		"hash": "529f6280d99c62985adc73b981d67e62381afcc89cdb77b8a0909a654d78a9ec"
	},
	{
		"id": "3986d23eea98",
		"ts": "2026-08-23T08:24:26.778Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 612003.37,
		"hash": "3986d23eea98482c1073006182a0ae5d545fb0eea506a8ffc67752353d3b3984"
	},
	{
		"id": "d345924395e9",
		"ts": "2026-08-23T08:24:26.987Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 864909.4,
		"hash": "d345924395e950a3d28e77ca30eae01cef751155bf52c960a4db83790fc374e2"
	},
	{
		"id": "c38a901c5ab9",
		"ts": "2026-08-23T08:24:27.195Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3191852.71,
		"hash": "c38a901c5ab9b7aefe3ef1c8043832e3409b86d34fbcde2e024db5d74c0fcd07"
	},
	{
		"id": "822346ebe328",
		"ts": "2026-08-23T08:24:27.404Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1783361.38,
		"hash": "822346ebe32876481fd292aaa0f9eaf064345383a95dea204a07a60b2cbd7645"
	},
	{
		"id": "98881f259f62",
		"ts": "2026-08-23T08:24:27.602Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3958706.27,
		"hash": "98881f259f62bd8d3ce9db65bac5c994d4804bc0625ed7c08a77e84ae08f26ac"
	},
	{
		"id": "50cecc3484f3",
		"ts": "2026-08-23T07:29:50.333Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109786592.58,
		"hash": "50cecc3484f34fa52ae52ee2da38cd235abe128c5e156023162f9019b8a9427a"
	},
	{
		"id": "3dd194e1c158",
		"ts": "2026-08-23T07:29:50.854Z",
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
		"liquidityUsd": 16679233.98,
		"hash": "3dd194e1c1587316598fdd45c5bb442f856880804514b68d881df03a57ce1c26"
	},
	{
		"id": "6c580d65b282",
		"ts": "2026-08-23T07:29:51.537Z",
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
		"liquidityUsd": 868314.4,
		"hash": "6c580d65b28287b26f09b58c70c1b3a424a5a276dbb3f1172411452a4d64f64a"
	},
	{
		"id": "74fb1731c3d2",
		"ts": "2026-08-23T07:29:51.783Z",
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
		"liquidityUsd": 27652926.12,
		"hash": "74fb1731c3d2a5cf12303e5a293118679597b0e7065899565fe1e300ce2120d9"
	},
	{
		"id": "e8991ab7dce4",
		"ts": "2026-08-23T07:29:52.055Z",
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
		"liquidityUsd": 3280236.56,
		"hash": "e8991ab7dce4f0e086acbf0f800725c40fdfd5cef258625dcd02af2edb630b80"
	},
	{
		"id": "f0d0b7ae3fe9",
		"ts": "2026-08-23T07:29:52.297Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1144175.29,
		"hash": "f0d0b7ae3fe9f80f5ea573e467359dfe08107945bdaee1cc440761d01ff4ec5d"
	},
	{
		"id": "ed98bb93abc3",
		"ts": "2026-08-23T07:29:52.556Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1518711.3,
		"hash": "ed98bb93abc3e45ac7276826f1339b61fd87965794b3ced0b6ef77b5e433738a"
	},
	{
		"id": "124c4475f03d",
		"ts": "2026-08-23T07:29:52.799Z",
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
		"liquidityUsd": 3348638.65,
		"hash": "124c4475f03d361e781c2c60fe0edfc8250cc82db82ec3a39351680e71e6a3a3"
	},
	{
		"id": "c645caccdd8c",
		"ts": "2026-08-23T07:29:53.048Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1362467.68,
		"hash": "c645caccdd8c176127747b179481b0489a970e9048a798d6531e260d1fdcee0d"
	},
	{
		"id": "ae555f6114a9",
		"ts": "2026-08-23T07:29:53.297Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 798694.87,
		"hash": "ae555f6114a91a0ee20a1174198ca30de5502eb2309f7d887eb79d68b13d09a0"
	},
	{
		"id": "fe32c5ede357",
		"ts": "2026-08-23T07:29:53.536Z",
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
		"liquidityUsd": 134115.46,
		"hash": "fe32c5ede357239679ff52eb9b626a7e33f8c865aced20ee91c6816f5daeb269"
	},
	{
		"id": "8883e23b7adc",
		"ts": "2026-08-23T07:29:53.766Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 493937.87,
		"hash": "8883e23b7adc933491cf1f9fbe14d7f1f0d761d6fa0a2f4e738a1e1ebed8acad"
	},
	{
		"id": "b06a25941c78",
		"ts": "2026-08-23T07:29:53.995Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 693140.37,
		"hash": "b06a25941c786f0d80be724827188e38fa10af653e223873a4dea7ecd05b446e"
	},
	{
		"id": "56c3931d3abb",
		"ts": "2026-08-23T07:29:54.222Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10959404.7,
		"hash": "56c3931d3abb9a521ab569227ad9dc009d77c0cabd9648f644dfed20d90f2299"
	},
	{
		"id": "10c17df09e53",
		"ts": "2026-08-23T07:29:54.450Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 588926.51,
		"hash": "10c17df09e530bb493635ebd7d7962e4be9c79e15a7f0604bcb815538d0da258"
	},
	{
		"id": "81347dd304d1",
		"ts": "2026-08-23T07:29:54.677Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 865532.52,
		"hash": "81347dd304d1536636b23137a4e0ac7136e39a5ace7f4475b66d9cfc3aa9e065"
	},
	{
		"id": "b14f92cd9f32",
		"ts": "2026-08-23T07:29:54.905Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3170073.81,
		"hash": "b14f92cd9f32847daad543625f6ff12b096b118ca62e2d77533889ffeb5edeb8"
	},
	{
		"id": "372d86b25002",
		"ts": "2026-08-23T07:29:55.130Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1783436.34,
		"hash": "372d86b2500250e77f6fe5295c5dbf5fff98b7206557faca6d2f54fc8f0e5933"
	},
	{
		"id": "317f09634ff9",
		"ts": "2026-08-23T07:29:55.358Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3930743.39,
		"hash": "317f09634ff965fde4b235fc9ac6c543247bb15633e3425704fc665b6d9e2d10"
	},
	{
		"id": "e27e121bb7d5",
		"ts": "2026-08-23T06:34:06.906Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109375720.25,
		"hash": "e27e121bb7d5097d52b907e2b8bc095f201636ec0890c67bb57518e1d2437b72"
	},
	{
		"id": "9a2844f93285",
		"ts": "2026-08-23T06:34:07.416Z",
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
		"liquidityUsd": 13194912.26,
		"hash": "9a2844f93285f159fba1dac30a7e0e9386cfa9bbb2261ae7867cc4c184addde6"
	},
	{
		"id": "4d5bd3ff8693",
		"ts": "2026-08-23T06:34:07.634Z",
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
		"liquidityUsd": 860106.92,
		"hash": "4d5bd3ff86931f01458badaaa117ec3abc2a9cc9e3e5a5edea89ddaf8eb90cfc"
	},
	{
		"id": "991e27c99dba",
		"ts": "2026-08-23T06:34:07.832Z",
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
		"liquidityUsd": 27598977.95,
		"hash": "991e27c99dbae3300e637a2234a45aae3a2afa9b6284c7d45fb7a2c1349c08ec"
	},
	{
		"id": "b2d5f6d86d47",
		"ts": "2026-08-23T06:34:08.139Z",
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
		"liquidityUsd": 3273136.42,
		"hash": "b2d5f6d86d47c3d5861b3ee3e8ca885bafe4df92e1cd951a7650b8f97b4b9e33"
	},
	{
		"id": "8182de04a70e",
		"ts": "2026-08-23T06:34:08.381Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1129276.96,
		"hash": "8182de04a70e510b65ad897328575f755800e6bebc44f9f22309cb3a421f1b75"
	},
	{
		"id": "e8d481b5c974",
		"ts": "2026-08-23T06:34:08.622Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 896219.71,
		"hash": "e8d481b5c974af38cd4291e1769a9d9cec93f0aa91a29e22e28cc1f4a33307a1"
	},
	{
		"id": "42b63cf4f2fe",
		"ts": "2026-08-23T06:34:08.842Z",
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
		"liquidityUsd": 3102551.33,
		"hash": "42b63cf4f2fe8732cd04728db8e3ac12968ccfb61ebe51b9c5f3696733b237aa"
	},
	{
		"id": "4411ef371d75",
		"ts": "2026-08-23T06:34:09.056Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1315672.4,
		"hash": "4411ef371d75bba9ce1b8a60c93bb2dcb313152a3d1b05ef2e44c6645f2e93a9"
	},
	{
		"id": "3ebf004abfaa",
		"ts": "2026-08-23T06:34:09.316Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 805413.73,
		"hash": "3ebf004abfaa5ee2dd45f8d2ec0c7ea22995797f83dc3ff2d8bcb3d2687b5d56"
	},
	{
		"id": "72d3ecd5e3d0",
		"ts": "2026-08-23T06:34:09.974Z",
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
		"liquidityUsd": 140089.28,
		"hash": "72d3ecd5e3d0cb86d814de23961f6001d597c2e97ef44cee942f3dda7d5d5c65"
	},
	{
		"id": "428ea12f557f",
		"ts": "2026-08-23T06:34:10.185Z",
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
		"liquidityUsd": 10880137.39,
		"hash": "428ea12f557fa55f2b59e89829cdf5ca92ebbf531368898dc319f157ce9045ee"
	},
	{
		"id": "3101625da834",
		"ts": "2026-08-23T06:34:10.392Z",
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
		"liquidityUsd": 690198.19,
		"hash": "3101625da83414d41436f001fe55902a5168b789d4d3bd4832d30eddb6b3d02c"
	},
	{
		"id": "998e6a6b3de3",
		"ts": "2026-08-23T06:34:10.601Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 587702.83,
		"hash": "998e6a6b3de3457d1987835da1d4306467ff12ab1a8e6048d52caa0e33afaaa7"
	},
	{
		"id": "72321847479e",
		"ts": "2026-08-23T06:34:10.839Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 865991.16,
		"hash": "72321847479e9c1b300c6c0d269ebeacee84792d696a6ad57bc0a384fba9a85e"
	},
	{
		"id": "2856dd4c7412",
		"ts": "2026-08-23T06:34:11.059Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3146425.44,
		"hash": "2856dd4c7412aa016811027dcf476e0b024688d17837c0276e911ab2d203cfd7"
	},
	{
		"id": "314e2e515f7a",
		"ts": "2026-08-23T06:34:11.303Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 509798.75,
		"hash": "314e2e515f7a5326efb35ef08be54ff27358ce469daad310b7f05a03af70f3f1"
	},
	{
		"id": "eac00e9e31be",
		"ts": "2026-08-23T06:34:11.507Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1780786.72,
		"hash": "eac00e9e31be6c88c7bd96bac6e995a56924dc070db9f2ef2309be54e2facefa"
	},
	{
		"id": "787a3117dd4a",
		"ts": "2026-08-23T06:34:11.700Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 94269.16,
		"hash": "787a3117dd4aafdf64ff9251acf74cf52e346c73bc4b4c1f19e345b2cb85a83b"
	},
	{
		"id": "44d69be30fdd",
		"ts": "2026-08-23T05:24:55.020Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 108981223.72,
		"hash": "44d69be30fddf6c58288b39838559ae67ce7a657ce890edf935af1e1dffdd426"
	},
	{
		"id": "e59c30634831",
		"ts": "2026-08-23T05:24:55.439Z",
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
		"liquidityUsd": 14272895.06,
		"hash": "e59c306348316db181f602cbfc76e8ef7c16ea577b0dd7c7f3b0c5a56d948d29"
	},
	{
		"id": "e4a2dba9cb8b",
		"ts": "2026-08-23T05:24:55.674Z",
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
		"liquidityUsd": 861064.97,
		"hash": "e4a2dba9cb8be05f66dabb03e80654bc7c1db352199a02fff4fabccbdfaec960"
	},
	{
		"id": "a9eeb92fd67e",
		"ts": "2026-08-23T05:24:55.903Z",
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
		"liquidityUsd": 27559307.37,
		"hash": "a9eeb92fd67e7e1ff10cdf2c79c853afdce357c680d0fe5e0f8f11adcf192418"
	},
	{
		"id": "f916f120aac6",
		"ts": "2026-08-23T05:24:56.207Z",
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
		"liquidityUsd": 3287083.32,
		"hash": "f916f120aac6bcb565e1f98a28e79d46fb18e8390c677fc920261336c882a2e6"
	},
	{
		"id": "9f3c9ae91da6",
		"ts": "2026-08-23T05:24:56.442Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1126535.28,
		"hash": "9f3c9ae91da6ed4f05c0205b92f252fe475b585c24577a177077552550ffaf6f"
	},
	{
		"id": "5ff64c12b37f",
		"ts": "2026-08-23T05:24:56.681Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 894810.49,
		"hash": "5ff64c12b37f7d56b007beed958ff8f5328364ebac5e62fdef482394c15f2cf6"
	},
	{
		"id": "0d6acce9c423",
		"ts": "2026-08-23T05:24:56.915Z",
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
		"liquidityUsd": 1770926.01,
		"hash": "0d6acce9c42342827fc14e05589d1d8b357b08195f6c399068f7edcb0e8d7085"
	},
	{
		"id": "604f99682c3c",
		"ts": "2026-08-23T05:24:57.149Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1327126.68,
		"hash": "604f99682c3c1151ba88b7b4d69ab4b71d274e5e72966b93a44ba3b47b74896f"
	},
	{
		"id": "85e7fc77265f",
		"ts": "2026-08-23T05:24:57.384Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 783288.51,
		"hash": "85e7fc77265f8db329160f563cdfa8d4cbdc76be9e7a1d2f0ccc324feda12ff2"
	},
	{
		"id": "ffad9bf6de6a",
		"ts": "2026-08-23T05:24:57.616Z",
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
		"liquidityUsd": 127786.91,
		"hash": "ffad9bf6de6a2de19a6f5f63f186264422216d61619352ccbd734a062847f0bd"
	},
	{
		"id": "3892e651d9cf",
		"ts": "2026-08-23T05:24:57.835Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 688859.36,
		"hash": "3892e651d9cfe4ea4f3835afbc08bf1ae31541439422335a44786fe606eb3690"
	},
	{
		"id": "292b0e95ea24",
		"ts": "2026-08-23T05:24:58.047Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10864379.59,
		"hash": "292b0e95ea244020e86cc98362ff0863a6aa66ed1311988f99c1647f15e407fe"
	},
	{
		"id": "67a80231184f",
		"ts": "2026-08-23T05:24:58.261Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 879290.6,
		"hash": "67a80231184fc30bd0aa6a870681d4da3f675e883fb46ece2d524ed2d8c0c5aa"
	},
	{
		"id": "5df584b7dbf6",
		"ts": "2026-08-23T05:24:58.475Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3140091.25,
		"hash": "5df584b7dbf6fd200ec7abbe4ee66bdd24ccfa48ce7fd575dcbb6e05a399b249"
	},
	{
		"id": "a885bbf7fb15",
		"ts": "2026-08-23T05:24:58.761Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 581444.99,
		"hash": "a885bbf7fb15fadc54a3f4fbfa75295afec9f3d7aeb59b5f4a4399e41156ff6a"
	},
	{
		"id": "499964577531",
		"ts": "2026-08-23T05:24:59.024Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 518876.13,
		"hash": "49996457753131a0a02cdf9de73f04c907a5883df1e0c2de2369b3f49e7aea42"
	},
	{
		"id": "d7af1b7c5a63",
		"ts": "2026-08-23T05:24:59.255Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1769999.39,
		"hash": "d7af1b7c5a631e9fdc4f7ec48a54f2a0176d265cd24e3b1c45dc56d3b4850f07"
	},
	{
		"id": "367b53fa6414",
		"ts": "2026-08-23T05:25:00.135Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3887682.22,
		"hash": "367b53fa6414b7c7ec1b13656694ad6cec6278c0f22862e9d6fbeaac227b72fb"
	},
	{
		"id": "214886f173f6",
		"ts": "2026-08-23T04:32:19.203Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109768347.95,
		"hash": "214886f173f6461f107a9700b2b14e3d3cc4a4c2c848caa09125ef807ec24ba7"
	},
	{
		"id": "2717d218d705",
		"ts": "2026-08-23T04:32:19.697Z",
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
		"liquidityUsd": 18379161.42,
		"hash": "2717d218d705bcd74889e367130a0c89d9a8ebe69f8ce2cfed544809704b8679"
	},
	{
		"id": "b5ab1f8a61f9",
		"ts": "2026-08-23T04:32:19.937Z",
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
		"liquidityUsd": 875020.95,
		"hash": "b5ab1f8a61f9b0c83eee9d84df53eaffcb0cbe1bdb5443e801297b69d3307c72"
	},
	{
		"id": "2b1c9fa11e34",
		"ts": "2026-08-23T04:32:20.221Z",
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
		"liquidityUsd": 27814257.06,
		"hash": "2b1c9fa11e347b3399f082d9de3a875c2540e8798cbbfa2ba38354823d0d5cfe"
	},
	{
		"id": "a7ba18079a8b",
		"ts": "2026-08-23T04:32:20.466Z",
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
		"liquidityUsd": 3316266.43,
		"hash": "a7ba18079a8b66be5df0f3c8b7beb1adb422ac6e9931053b20b1148e64596b44"
	},
	{
		"id": "01d860ade059",
		"ts": "2026-08-23T04:32:20.723Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1141592.25,
		"hash": "01d860ade059d08b9321be7cf3e8b0ab13880e9e1f736219d0e248c3557853b7"
	},
	{
		"id": "191cdea3530a",
		"ts": "2026-08-23T04:32:20.979Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 905533.25,
		"hash": "191cdea3530ae5848ec4789c8abcb6b47fecd3e5fb0aa070dd1a0ffa8483383b"
	},
	{
		"id": "9e7baa572400",
		"ts": "2026-08-23T04:32:21.288Z",
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
		"liquidityUsd": 1793156.09,
		"hash": "9e7baa57240039b7b4343ac3c26f00bf11bb920c566eee789cf503042070a856"
	},
	{
		"id": "6c7bb00b3cb5",
		"ts": "2026-08-23T04:32:21.559Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1453782.41,
		"hash": "6c7bb00b3cb5404717d0a5bc07b248131d6092ef432dc32b93e485e57fc15b4d"
	},
	{
		"id": "196267128a2d",
		"ts": "2026-08-23T04:32:21.991Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 779612.14,
		"hash": "196267128a2da27a609ed475c3b19c5ebbce5d3d237a5b9cc072cd04b1846991"
	},
	{
		"id": "434804d08968",
		"ts": "2026-08-23T04:32:22.211Z",
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
		"liquidityUsd": 127199.64,
		"hash": "434804d089681a9b4d1d4903a070e6181906a285a38276b7ad0e95ce272ea24c"
	},
	{
		"id": "61af751f0693",
		"ts": "2026-08-23T04:32:22.451Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 724008.93,
		"hash": "61af751f06936ed38f6fc5171766c90b2966d20b0f00e49dc833b08de1e11865"
	},
	{
		"id": "b543350406f0",
		"ts": "2026-08-23T04:32:22.669Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10839997.19,
		"hash": "b543350406f0560834ac408a73304675ad926d3e276129ed1f7e41ff741f8fbb"
	},
	{
		"id": "dcf3f41614a6",
		"ts": "2026-08-23T04:32:22.908Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3208885.7,
		"hash": "dcf3f41614a62ea314440b400dccbe7f38ab5e56526a2c7a5aca164390bcab77"
	},
	{
		"id": "26bb37d9dc96",
		"ts": "2026-08-23T04:32:23.127Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 892213.98,
		"hash": "26bb37d9dc9626fd685bf18e9fb0da7227e8bb2cc5b1b345219020dbae99f46b"
	},
	{
		"id": "c81807edf7a4",
		"ts": "2026-08-23T04:32:23.367Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 589874.02,
		"hash": "c81807edf7a4d7da9e565ddb8231fa460193e7c241b1dde65d56cbe73ff80e94"
	},
	{
		"id": "cd8e6e31cf10",
		"ts": "2026-08-23T04:32:23.607Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1790934.33,
		"hash": "cd8e6e31cf10313be9fd626188ed0ba6717e25c31336d3777d314425c8bf263a"
	},
	{
		"id": "05e108622db1",
		"ts": "2026-08-23T04:32:23.825Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 521010.46,
		"hash": "05e108622db18b9e88b214bc0fc2ef15da3e2bb85677c19c9bd673697ef849b0"
	},
	{
		"id": "e3f8347d4460",
		"ts": "2026-08-23T04:32:24.066Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3960805.76,
		"hash": "e3f8347d4460e7b7725a0a8040b51c4f1b7078afbf06ebb306489eb4a0a8f073"
	},
	{
		"id": "74e288f6ad8f",
		"ts": "2026-08-23T03:53:47.080Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109867382.43,
		"hash": "74e288f6ad8fb154cc6ab0fd2c2d21584400bce36094de838b8ed0744ad5cb50"
	},
	{
		"id": "9ddc62250f21",
		"ts": "2026-08-23T03:53:47.686Z",
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
		"liquidityUsd": 17554694.6,
		"hash": "9ddc62250f21d94b08c89cf3e35db187bf2cfc3fe5e7f835b74730064a1caf7c"
	},
	{
		"id": "a4b2bbece5de",
		"ts": "2026-08-23T03:53:48.106Z",
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
		"liquidityUsd": 877519.41,
		"hash": "a4b2bbece5de8c5e104d5c619ae9636d2173389d2073622c83833f4f47df94b3"
	},
	{
		"id": "1d667c839825",
		"ts": "2026-08-23T03:53:48.531Z",
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
		"liquidityUsd": 27880248.58,
		"hash": "1d667c839825fa3e274c2ad000ccb185b03f0a94b8d2477f7bec1b7ec6c6104b"
	},
	{
		"id": "eff28864a280",
		"ts": "2026-08-23T03:53:48.765Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "eff28864a280f4910993693ca40f6c22454e8e32087818a96947e8bb6e8c11b3"
	},
	{
		"id": "b5fcc8f8f5ea",
		"ts": "2026-08-23T03:53:49.000Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1145297.47,
		"hash": "b5fcc8f8f5ea166e644ffeab1c38a9b613bcd0cd2002af20b87df54530862917"
	},
	{
		"id": "8bd1f9494888",
		"ts": "2026-08-23T03:53:49.239Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 906291.98,
		"hash": "8bd1f9494888ee94f466873e0490618c45d23b9d4a755ba35e2a5209fec1a72f"
	},
	{
		"id": "04eb8c1b57a7",
		"ts": "2026-08-23T03:53:49.472Z",
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
		"liquidityUsd": 1794265.2,
		"hash": "04eb8c1b57a7acede458a79004e148a56b10bd000752ca5194e0f57d48f38f65"
	},
	{
		"id": "fa030b22cedc",
		"ts": "2026-08-23T03:53:49.703Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1429802.33,
		"hash": "fa030b22cedc92a45aa98871648bc62dba6a5ddd9954858d2576af39790c9968"
	},
	{
		"id": "8e383599617e",
		"ts": "2026-08-23T03:53:50.131Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 791686.81,
		"hash": "8e383599617e831f5703efc6e4af5a99fb5f1e60a3c90aecc203285bfd03206d"
	},
	{
		"id": "fdc4f6956ef4",
		"ts": "2026-08-23T03:53:50.347Z",
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
		"liquidityUsd": 124022.81,
		"hash": "fdc4f6956ef4994c4f3e281149115f740ef9c18ed0e0ec4db554cafd1617caf1"
	},
	{
		"id": "e578552c8109",
		"ts": "2026-08-23T03:53:50.562Z",
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
		"liquidityUsd": 727197.25,
		"hash": "e578552c8109cf79713ee57bc296ec60b95782e4a154d0d0f972b94d9072d462"
	},
	{
		"id": "64939bf94c23",
		"ts": "2026-08-23T03:53:50.777Z",
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
		"liquidityUsd": 10894759.02,
		"hash": "64939bf94c23fe3cfc5df0e793c3d4ab7e94a1cda494af7bdb6035ddb6246281"
	},
	{
		"id": "c912d87154c7",
		"ts": "2026-08-23T03:53:50.993Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 584593.53,
		"hash": "c912d87154c7e5ddf0a428b1cda1084a1d5ce2a4935ae4bec18fe1f01f5d2ba3"
	},
	{
		"id": "4b457416dba9",
		"ts": "2026-08-23T03:53:51.209Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3229717.2,
		"hash": "4b457416dba9973385f7672e01a46cad8c5104f74b1b1a62d9aa00f937259e8d"
	},
	{
		"id": "8d15fa725fc5",
		"ts": "2026-08-23T03:53:51.424Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 882277.43,
		"hash": "8d15fa725fc5475fe86ac6f10d17f9acc4b84931164294cde67776104a515788"
	},
	{
		"id": "93c00b16e99f",
		"ts": "2026-08-23T03:53:51.638Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1801831.96,
		"hash": "93c00b16e99f69c5166c40492013edd90b1b4f41fa57ff0183688b80c65327b8"
	},
	{
		"id": "ec9eabdfcf4f",
		"ts": "2026-08-23T03:53:51.852Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 529307.44,
		"hash": "ec9eabdfcf4f32bb693ae7e9385f6e49af22b17ceb3f3602fa47291a2069a5e1"
	},
	{
		"id": "a8572a36bae3",
		"ts": "2026-08-23T03:53:52.069Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3956006.8,
		"hash": "a8572a36bae3c7b747aa7d12f06d8a06238c0921c6b60c364f64edfa4fb518d3"
	},
	{
		"id": "7a9a585a81a5",
		"ts": "2026-08-23T02:58:27.718Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109759421.25,
		"hash": "7a9a585a81a55fe9055d635016d48e25b0622befe1ab6564e84e365595cd8b8a"
	},
	{
		"id": "3c0adea393fa",
		"ts": "2026-08-23T02:58:28.394Z",
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
		"liquidityUsd": 16398976.07,
		"hash": "3c0adea393fa0654ec0414cd05fc09f9bfa79856792e2c3da0e6577b0e780223"
	},
	{
		"id": "01fcb582126a",
		"ts": "2026-08-23T02:58:28.889Z",
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
		"liquidityUsd": 885226.6,
		"hash": "01fcb582126abd2d4655f2bbcebeb76b83ddf917c0a8c5a384227a1c39b7edfd"
	},
	{
		"id": "e058259b113c",
		"ts": "2026-08-23T02:58:29.358Z",
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
		"liquidityUsd": 28009405.38,
		"hash": "e058259b113c68edc2fdb050c96bebc3e25be611db4c9be175ea8429318efa0a"
	},
	{
		"id": "5170a840bacc",
		"ts": "2026-08-23T02:58:29.614Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "5170a840bacca0ffb7556082a7f881f8516601d882cf853f06b905766b922ec6"
	},
	{
		"id": "1b80957015b3",
		"ts": "2026-08-23T02:58:29.872Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1152448.06,
		"hash": "1b80957015b30a8a093fb6c80722c592dd7ed0c4d99cd4acb8827ffce72ebc31"
	},
	{
		"id": "6d29714a1a19",
		"ts": "2026-08-23T02:58:30.125Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 903318.99,
		"hash": "6d29714a1a197108a466a4863a9818c0539cb5203c60c3b60823a4cda3a3eed8"
	},
	{
		"id": "be70eea4dfea",
		"ts": "2026-08-23T02:58:30.379Z",
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
		"liquidityUsd": 1798248.96,
		"hash": "be70eea4dfead27020f94e7666305fd58b0bdad0f6a27f9ffd85e59d2f7474e8"
	},
	{
		"id": "ab52a004741a",
		"ts": "2026-08-23T02:58:30.648Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1414393.31,
		"hash": "ab52a004741a61fc8649f06e901476ebf6fc6a50d619a8dc4d7e5faf06d1a48f"
	},
	{
		"id": "401900801727",
		"ts": "2026-08-23T02:58:31.339Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 787130.61,
		"hash": "401900801727a8fc3e1b2dd0f3b12eae7fef8aed850feb6fa9859702fb0ad4f8"
	}
]
