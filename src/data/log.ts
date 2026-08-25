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
	"updatedAt": "2026-08-25T18:34:18.014Z",
	"tokensScored": 14919,
	"verdictsIssued": 14919,
	"safe": 12733,
	"risky": 1103,
	"likelyRug": 1083,
	"ticks": 862
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "21c4428c93cb",
		"ts": "2026-08-25T18:34:13.945Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114262413.31,
		"hash": "21c4428c93cb12d27ddfe8b216068e0c126337cba940909096becdb6128c051d"
	},
	{
		"id": "5666320c1aa5",
		"ts": "2026-08-25T18:34:14.306Z",
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
		"liquidityUsd": 17585146.7,
		"hash": "5666320c1aa59f1cc1380de764f82076b2b79aee6318403ee87884a8aa29121a"
	},
	{
		"id": "7674fc6d43e3",
		"ts": "2026-08-25T18:34:14.652Z",
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
		"liquidityUsd": 977336.04,
		"hash": "7674fc6d43e3c8374da87c29c82ea04657b27c4d22dff284b434068fa29e0fb2"
	},
	{
		"id": "3ac8ef304176",
		"ts": "2026-08-25T18:34:14.861Z",
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
		"liquidityUsd": 30403863.3,
		"hash": "3ac8ef304176a0cc7a41ded137330f133f57c90e75d59ef2b3721c2103016510"
	},
	{
		"id": "f24d65fce3c5",
		"ts": "2026-08-25T18:34:15.060Z",
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
		"liquidityUsd": 4686967.38,
		"hash": "f24d65fce3c5bb6dc2fde5a5500b717e1f2aa2a33baaacc0cf9317e4879fba8a"
	},
	{
		"id": "1f8f8da40de6",
		"ts": "2026-08-25T18:34:15.273Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1187972.02,
		"hash": "1f8f8da40de65b6fbb4d7a207eef71352b671adcaa218036f273c10e8cff29f4"
	},
	{
		"id": "f9914fe222dd",
		"ts": "2026-08-25T18:34:15.460Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1208864.05,
		"hash": "f9914fe222dded7134ba1617e057d8ac0abc4e20fed0e3249c584c356c079fea"
	},
	{
		"id": "24892293a6d9",
		"ts": "2026-08-25T18:34:15.720Z",
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
		"liquidityUsd": 1919678.48,
		"hash": "24892293a6d980ab6dec0f34d8747d6880313a52ecfe081115b4df2d1cdc2f00"
	},
	{
		"id": "d3300daa1be9",
		"ts": "2026-08-25T18:34:15.927Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 796816.17,
		"hash": "d3300daa1be9006502dc0645c0c9ab489be2eded83e21964f7c3f4b8e6787952"
	},
	{
		"id": "425dd9237503",
		"ts": "2026-08-25T18:34:16.118Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1235249.61,
		"hash": "425dd9237503b71b963c38f2fba6eecefd6e4db4dd198e414550446644b273eb"
	},
	{
		"id": "741c90882376",
		"ts": "2026-08-25T18:34:16.293Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1520506.05,
		"hash": "741c908823764f4a9fab2b0132bb2583f28e44d68a3f2a674f567a0a391f084e"
	},
	{
		"id": "34f121f090fd",
		"ts": "2026-08-25T18:34:16.489Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11761450.84,
		"hash": "34f121f090fd5ca9b46071317fb9ec7b4e2ae71438dcb746221872362725190e"
	},
	{
		"id": "69109585b0e4",
		"ts": "2026-08-25T18:34:16.852Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1209004.17,
		"hash": "69109585b0e4f57cab7d4baecd2bed9f53a7ecbc85a10b65d302e675a4f7d62b"
	},
	{
		"id": "ac6d5901ad74",
		"ts": "2026-08-25T18:34:17.043Z",
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
		"liquidityUsd": 877901.72,
		"hash": "ac6d5901ad747f8b8d48a213b51365041d9530a1ae0db91a94d9b5dc17fad598"
	},
	{
		"id": "16cab6cd4ea8",
		"ts": "2026-08-25T18:34:17.225Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4212991,
		"hash": "16cab6cd4ea809c5ae0c26144196dace5f3c7a6181e73158a4c1bb38ded116d6"
	},
	{
		"id": "f3c22f6e0ae2",
		"ts": "2026-08-25T18:34:17.413Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1888667.49,
		"hash": "f3c22f6e0ae2d51307e4854a87bf5aac5b4ff54786761967bb1d9df8c6f03505"
	},
	{
		"id": "78adddd41303",
		"ts": "2026-08-25T18:34:17.619Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 559920.39,
		"hash": "78adddd4130369f034060dbd46a31d23ebbde713b6d3a0cc9acd076a9543f2be"
	},
	{
		"id": "94460785bba8",
		"ts": "2026-08-25T18:34:17.806Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3414094.1,
		"hash": "94460785bba807fd0b3e79f092cbe289faed1a6c70cd47b3754f6d4b094d2ae6"
	},
	{
		"id": "31768478add1",
		"ts": "2026-08-25T18:34:18.013Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1041448.11,
		"hash": "31768478add1b54fc645b9480c820b3a974505898a69f908c8ef7e34e21dc9e5"
	},
	{
		"id": "4f59fb508162",
		"ts": "2026-08-25T17:27:48.016Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114154831.69,
		"hash": "4f59fb5081628c33bad5be4569d857ff1472fc15e4386692e5d1b5f6f1875a53"
	},
	{
		"id": "936cd145707d",
		"ts": "2026-08-25T17:27:48.329Z",
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
		"liquidityUsd": 16324822.58,
		"hash": "936cd145707df13dbc432b6b9d5af08934f4b514431066f52de01095782ed9f8"
	},
	{
		"id": "1d3ba696f711",
		"ts": "2026-08-25T17:27:48.521Z",
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
		"liquidityUsd": 973468.81,
		"hash": "1d3ba696f711ca8ac8b2b4f0570de9b6c43601488898df339fece31d919a94ba"
	},
	{
		"id": "b9bf06e66c89",
		"ts": "2026-08-25T17:27:48.740Z",
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
		"liquidityUsd": 30325719.55,
		"hash": "b9bf06e66c8967db62ade478fcdff7cdda988c8fa661eea5540644a904eae5d9"
	},
	{
		"id": "c2b73d9a3a07",
		"ts": "2026-08-25T17:27:48.955Z",
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
		"liquidityUsd": 4669533.82,
		"hash": "c2b73d9a3a07b0be93438a07d7bc0ae07b2f27881ab853fe08be7a9c440da758"
	},
	{
		"id": "83afe8ef7722",
		"ts": "2026-08-25T17:27:49.144Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1187972.02,
		"hash": "83afe8ef77229cebb3ea105e7ca650a4b87ed333312881cee805bac14c237a4a"
	},
	{
		"id": "27102fc778b3",
		"ts": "2026-08-25T17:27:49.355Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30325719.55,
		"hash": "27102fc778b3fb8bc1a841b5df8583d5d8c4c0fc59871d6366dab5a05eed2bf4"
	},
	{
		"id": "9eee05d90d54",
		"ts": "2026-08-25T17:27:49.578Z",
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
		"liquidityUsd": 1910088.66,
		"hash": "9eee05d90d54ae46d4a0c0e24da90b4fcf5b4bce8e9aa6ff11fb35b5c1601032"
	},
	{
		"id": "17e0630f117c",
		"ts": "2026-08-25T17:27:49.769Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 797221.67,
		"hash": "17e0630f117cddf9f6421e23882fa02890d1b96d55a5cb981a87ab0133fc8cdc"
	},
	{
		"id": "fbada52d1482",
		"ts": "2026-08-25T17:27:49.970Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1248541.83,
		"hash": "fbada52d1482541cf19d08e44d9b4b9183fff84a2ec24d4bd5e28b1ed0ab826b"
	},
	{
		"id": "1e32f118abda",
		"ts": "2026-08-25T17:27:50.181Z",
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
		"liquidityUsd": 1507493.5,
		"hash": "1e32f118abda03be9a32053ca985b31ac5cc0ead04e17a8d3a18837bc357cc67"
	},
	{
		"id": "b3da834e9329",
		"ts": "2026-08-25T17:27:50.379Z",
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
		"liquidityUsd": 11702813.64,
		"hash": "b3da834e932907c582aa9b6410b23580b551e2282713dca2860e2b06378b7cda"
	},
	{
		"id": "bd42b33be884",
		"ts": "2026-08-25T17:27:50.596Z",
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
		"liquidityUsd": 1179477.5,
		"hash": "bd42b33be8844cb68f1364eb358a49e3240f306a6eda0cd9e2288c126409c36e"
	},
	{
		"id": "b906d82526bf",
		"ts": "2026-08-25T17:27:50.827Z",
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
		"liquidityUsd": 876376.66,
		"hash": "b906d82526bf986c8676b58a7fbc0033c6a931ba54d10518cfe4a674ee7d67fc"
	},
	{
		"id": "faef86eddb5f",
		"ts": "2026-08-25T17:27:51.029Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4225751.09,
		"hash": "faef86eddb5f5ebdd26e6bc79d55e39e89dba6e1f836eb56abb1b78d63f5732e"
	},
	{
		"id": "165968f85490",
		"ts": "2026-08-25T17:27:51.233Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1877281.74,
		"hash": "165968f8549028192865a7ce66f981eecb43b0d79b1e85655cc9b54ffc30b097"
	},
	{
		"id": "18b8b459151c",
		"ts": "2026-08-25T17:27:51.425Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 561598.15,
		"hash": "18b8b459151cd5552cb67731afe6e6120e6a96fec108ef5c70eb0347b2869bd6"
	},
	{
		"id": "46639cb17087",
		"ts": "2026-08-25T17:27:51.627Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1030254.42,
		"hash": "46639cb170879b12ccbfa4242af17d1e5a3fe87b937ddca0d2a40d17c9803939"
	},
	{
		"id": "b6ae8827634d",
		"ts": "2026-08-25T17:27:51.845Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3428455.34,
		"hash": "b6ae8827634d3dd6945704987fda4b9fec1db4fada64c37018b878f0be403d3c"
	},
	{
		"id": "6af75dd1b41e",
		"ts": "2026-08-25T16:32:11.616Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113990402.93,
		"hash": "6af75dd1b41e639b635674864fcc29aeb55c4e38847425662b2d37e067fdbc80"
	},
	{
		"id": "077ebf26dad6",
		"ts": "2026-08-25T16:32:12.283Z",
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
		"liquidityUsd": 18376427.62,
		"hash": "077ebf26dad60465d79ea1b06aeb391e13b3351334972390228f2cb8945ed5dd"
	},
	{
		"id": "3bebc8dd34a0",
		"ts": "2026-08-25T16:32:12.745Z",
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
		"liquidityUsd": 976613.24,
		"hash": "3bebc8dd34a0479a8ae512e87fb56558cd3f4d969d7b145c144ef26015439506"
	},
	{
		"id": "9ced00b3c990",
		"ts": "2026-08-25T16:32:13.191Z",
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
		"liquidityUsd": 30467902.71,
		"hash": "9ced00b3c990ca37f9454c687816b2cda81205576f35a02779d6c9097cc02a15"
	},
	{
		"id": "29672eed8dd2",
		"ts": "2026-08-25T16:32:13.672Z",
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
		"liquidityUsd": 4702123.14,
		"hash": "29672eed8dd2ecbc327c9943d0b541de8d620759f790a19b16d1eb095a28c2ac"
	},
	{
		"id": "4b8b535bca2e",
		"ts": "2026-08-25T16:32:13.952Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1192320.14,
		"hash": "4b8b535bca2e6a7021ebd7ebf2c6ee252f9585b2632b28870c6e29d6e77598b1"
	},
	{
		"id": "e8933aa0c45f",
		"ts": "2026-08-25T16:32:14.210Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1152559.25,
		"hash": "e8933aa0c45fe15e0f64add35a9d971bb39e761c04a4b3401a950a688818aec2"
	},
	{
		"id": "c5be37ca456b",
		"ts": "2026-08-25T16:32:14.474Z",
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
		"liquidityUsd": 1919469.56,
		"hash": "c5be37ca456b270c5fd3ceffa1b3e8353fb0d694e4d4876bf04a17432befc78a"
	},
	{
		"id": "dd3af8a525a2",
		"ts": "2026-08-25T16:32:14.764Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1271814.53,
		"hash": "dd3af8a525a2f745715f2156c9ce40d5baca4966c9d70b60356f7f059b20ab3b"
	},
	{
		"id": "657d26ba775b",
		"ts": "2026-08-25T16:32:15.418Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 804784.54,
		"hash": "657d26ba775bee59dd114cadaf9d6671cbee8fd6a9470bef2ff230d3400605cb"
	},
	{
		"id": "2fdaf641b77b",
		"ts": "2026-08-25T16:32:15.657Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1533619.06,
		"hash": "2fdaf641b77b4e6b74066b9ef202fdec8496f288f5d575e3e69d7b84aeba92a7"
	},
	{
		"id": "121d3dd58bf9",
		"ts": "2026-08-25T16:32:15.888Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1871680.36,
		"hash": "121d3dd58bf92081151489fcdeba4756555529583b256e22a10ba826264329b2"
	},
	{
		"id": "0d9cc620b552",
		"ts": "2026-08-25T16:32:16.123Z",
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
		"liquidityUsd": 1152911.19,
		"hash": "0d9cc620b5522367495b9d75f44479af7be9dfa40c84b53ac7b4275f77b7c4fe"
	},
	{
		"id": "dc50900c3200",
		"ts": "2026-08-25T16:32:16.362Z",
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
		"liquidityUsd": 885872.8,
		"hash": "dc50900c3200c71b310ac53c5bba3ff824a3932ba2e39232a96e7ef5636ebdfb"
	},
	{
		"id": "640992449848",
		"ts": "2026-08-25T16:32:16.592Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11843809.01,
		"hash": "640992449848afa48e2c345b0c10bc3576ecbc6162e5b5168ca89f31d817ca44"
	},
	{
		"id": "7d2231ccba81",
		"ts": "2026-08-25T16:32:16.826Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4234855.51,
		"hash": "7d2231ccba812d388124fd85604a7016ace8aff51421a38d883f453f6f9abbe6"
	},
	{
		"id": "6a330322c2f6",
		"ts": "2026-08-25T16:32:17.058Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 562339.3,
		"hash": "6a330322c2f6b8a25091ddcc0b39c7e7ce57edc26b660a7e0e0630cf09aad3d9"
	},
	{
		"id": "a6a17ec6bb3a",
		"ts": "2026-08-25T16:32:17.290Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3400155.09,
		"hash": "a6a17ec6bb3a332c3158c725db10eb7cf8f5bf4678a183687cc3081d34569c46"
	},
	{
		"id": "daae5f6cc039",
		"ts": "2026-08-25T16:32:17.525Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 549478.5,
		"hash": "daae5f6cc0392bf231471c119fdc890eab6a414c8c112077686aae28e34754d4"
	},
	{
		"id": "06f4e9daa6b0",
		"ts": "2026-08-25T15:38:05.701Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113968628.56,
		"hash": "06f4e9daa6b036f85e8158220883573b3db72adb09be581ed313a940718340f0"
	},
	{
		"id": "328917e102ac",
		"ts": "2026-08-25T15:38:06.221Z",
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
		"liquidityUsd": 14350740.38,
		"hash": "328917e102ace6c15c47a384796381b2f346220eaf1e181e211e2d1b12a38329"
	},
	{
		"id": "a4453e3f9795",
		"ts": "2026-08-25T15:38:06.545Z",
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
		"liquidityUsd": 978493.74,
		"hash": "a4453e3f9795ad9fcb7886f136b9a77d234be1f03dd19812e69fd77166c32511"
	},
	{
		"id": "ee0e9e27b4a9",
		"ts": "2026-08-25T15:38:06.877Z",
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
		"liquidityUsd": 30276699.36,
		"hash": "ee0e9e27b4a98ed089774d2fcc0be71616fb34fbe8b0d1b1f512942f15be8e78"
	},
	{
		"id": "9ab6d9c4d35a",
		"ts": "2026-08-25T15:38:07.151Z",
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
		"liquidityUsd": 4711241.09,
		"hash": "9ab6d9c4d35a146f2cd2f92d798242a4689f53147463f028a26e885ddaf31496"
	},
	{
		"id": "2cc03a583c88",
		"ts": "2026-08-25T15:38:07.495Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1185291.27,
		"hash": "2cc03a583c887aba11e6762973b05944d66016b9dfb0a812f5fc5b66013f3035"
	},
	{
		"id": "ef7a0dd5de1e",
		"ts": "2026-08-25T15:38:07.799Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1150966.21,
		"hash": "ef7a0dd5de1ee8e28f03259aa7deb8f691a918be4cc62b68e0ac2bf2b12b1199"
	},
	{
		"id": "4ace42c13dff",
		"ts": "2026-08-25T15:38:08.168Z",
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
		"liquidityUsd": 1919439.84,
		"hash": "4ace42c13dff76b616a6b860f59f3d35b628e8f18b81f10171700b19c6c9fa89"
	},
	{
		"id": "7d4acf78c3ed",
		"ts": "2026-08-25T15:38:08.470Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1265459.07,
		"hash": "7d4acf78c3ed152d38698fed3d47015df496358a3387cc1390d9bc73c063cd08"
	},
	{
		"id": "a19dd977d066",
		"ts": "2026-08-25T15:38:08.769Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 805532.19,
		"hash": "a19dd977d066a13a25392b2a4942bbbdfeac48e43cc003cfd9922ef580be4dba"
	},
	{
		"id": "ad47d01cff7e",
		"ts": "2026-08-25T15:38:09.058Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1546885.08,
		"hash": "ad47d01cff7e30edf7a0fa2da9fb13564cacbd8a13f6329a6f07d0a159a66f02"
	},
	{
		"id": "53a94137c2c5",
		"ts": "2026-08-25T15:38:09.326Z",
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
		"liquidityUsd": 881609.41,
		"hash": "53a94137c2c5750cfe4fa1c862d0372854084d4042522c7f25d14a47c85a8bc1"
	},
	{
		"id": "85e157e4a9a5",
		"ts": "2026-08-25T15:38:09.610Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1864844.18,
		"hash": "85e157e4a9a567b8270b52586940703dd2bd2155f772a6b0fc97490cdc3486c7"
	},
	{
		"id": "749f3250e482",
		"ts": "2026-08-25T15:38:09.914Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1150966.21,
		"hash": "749f3250e4820327b4ca356dd62bad9bc27d4d9d06dde94dc2d9bef7a23f8edf"
	},
	{
		"id": "cc2fc07f51c9",
		"ts": "2026-08-25T15:38:10.275Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11836624.43,
		"hash": "cc2fc07f51c917e1cc6a86ed14438c2b7a45550e76f5614748abc2409b0b5e72"
	},
	{
		"id": "0e8b6ac81d04",
		"ts": "2026-08-25T15:38:10.553Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 560704.15,
		"hash": "0e8b6ac81d049a30ddcdb21979d762b7e8c8d9f096eac3f4e638db3cb8aadbec"
	},
	{
		"id": "03c578bd6a0b",
		"ts": "2026-08-25T15:38:10.824Z",
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
		"liquidityUsd": 3430117.75,
		"hash": "03c578bd6a0b1e53613a2a8716fce96f523ea8029280bd0695cc771e1cc0c52f"
	},
	{
		"id": "276a0981a29c",
		"ts": "2026-08-25T15:38:11.096Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 533717.26,
		"hash": "276a0981a29c4ac1ffcfce005a4c1bf394eb75fc3bd1c7e2edc58ca8e0a2a204"
	},
	{
		"id": "f72ba44da599",
		"ts": "2026-08-25T15:38:11.402Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4139116.9,
		"hash": "f72ba44da5993f73245236c945442b86270a0a3213388acd75045a276752d066"
	},
	{
		"id": "6d09be99b60b",
		"ts": "2026-08-25T14:40:30.559Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113993218.46,
		"hash": "6d09be99b60b15ec6abaf1343e4db2eb9d085ea41c8aabd1b7d7974d447c49eb"
	},
	{
		"id": "0f777382a9ed",
		"ts": "2026-08-25T14:40:30.816Z",
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
		"liquidityUsd": 16876796.44,
		"hash": "0f777382a9ed156ce7161c5422e2a999202516b8541bf7769376b7d3c4720405"
	},
	{
		"id": "e75ff4581fb8",
		"ts": "2026-08-25T14:40:31.066Z",
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
		"liquidityUsd": 989386.05,
		"hash": "e75ff4581fb89ee58b0cf516f46ed4e4cc3b5e0356f174794a3db66e2c2c2494"
	},
	{
		"id": "6ff5bb01e866",
		"ts": "2026-08-25T14:40:31.330Z",
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
		"liquidityUsd": 30218453.87,
		"hash": "6ff5bb01e866838aa23842cd21c237b7b4179e56509000e25be49688edc7b9b7"
	},
	{
		"id": "de2729f4287d",
		"ts": "2026-08-25T14:40:31.574Z",
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
		"liquidityUsd": 4709505.11,
		"hash": "de2729f4287d7d014bd4c82d589f3e5dfe46f93d7209acea0f1d77fb2a900745"
	},
	{
		"id": "55588c71640a",
		"ts": "2026-08-25T14:40:31.856Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1185291.27,
		"hash": "55588c71640a4ee4651f0b9280103a307e3731cdfc3642c3999adc026d60b1c8"
	},
	{
		"id": "cf41104189e3",
		"ts": "2026-08-25T14:40:32.108Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1117728.92,
		"hash": "cf41104189e399994d083eaeb0a492ae89a9b78a69f7a6d8b9fca61651868031"
	},
	{
		"id": "8beb380a92bf",
		"ts": "2026-08-25T14:40:32.372Z",
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
		"liquidityUsd": 1923298.01,
		"hash": "8beb380a92bf6dc1ffb06e653455b693112d9b57bc7992a88e965ed6cf26e5ad"
	},
	{
		"id": "25a6db8a3f49",
		"ts": "2026-08-25T14:40:32.650Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 781762.18,
		"hash": "25a6db8a3f496c2e5eaf9926a559a412918e64ba588480e605419434dd760864"
	},
	{
		"id": "a7f063e4a393",
		"ts": "2026-08-25T14:40:32.898Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1296258.22,
		"hash": "a7f063e4a3936a2a0ce070f1e7ae6b791cf554feefbd27ee13935960901ad267"
	},
	{
		"id": "209215ee2811",
		"ts": "2026-08-25T14:40:33.131Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1584550.7,
		"hash": "209215ee2811072af8415184b2b3d7ad0028f2dc76a1310ef373fd04abbe0e7e"
	},
	{
		"id": "c1d60e8e787b",
		"ts": "2026-08-25T14:40:33.370Z",
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
		"liquidityUsd": 888294.03,
		"hash": "c1d60e8e787b501a52e92021f3e0c9cd681ec44b7cf8070da151bc86dfdc6f56"
	},
	{
		"id": "71b86ea3ca6f",
		"ts": "2026-08-25T14:40:33.803Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1866722.5,
		"hash": "71b86ea3ca6f12bfff449522b8b303c70744f2870bef55cd6e53660b1c14056e"
	},
	{
		"id": "9ff95fb2b59e",
		"ts": "2026-08-25T14:40:34.035Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 561537.7,
		"hash": "9ff95fb2b59e96957b7e70ef3796fce3dc5095e2e95cbdc1727719d051b89d4a"
	},
	{
		"id": "747d156348f4",
		"ts": "2026-08-25T14:40:34.276Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 95234.11,
		"hash": "747d156348f4e4a7870eab9168f582ee3927a8628555a3a41d644667840532c5"
	},
	{
		"id": "50621f19de59",
		"ts": "2026-08-25T14:40:34.507Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3444647.94,
		"hash": "50621f19de59861df360dd274e1bea34349512a463f9f644709dd0d740aebf88"
	},
	{
		"id": "cf7b6b96c85d",
		"ts": "2026-08-25T14:40:34.741Z",
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
		"liquidityUsd": 1117683.9,
		"hash": "cf7b6b96c85df076689a6a2b9235096c44351fe753d01b558496a24130ac6d22"
	},
	{
		"id": "a53a5c5cf240",
		"ts": "2026-08-25T14:40:34.979Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 540060.1,
		"hash": "a53a5c5cf240f41d7c83aaf8a5c3ae261b23bfa9942bff3dfa650c11094c5c49"
	},
	{
		"id": "7c6be9598d0a",
		"ts": "2026-08-25T14:40:35.205Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4112334.34,
		"hash": "7c6be9598d0ab32f69c13afa5c611907e8a30e65c449cdd13aa852caefd1616d"
	},
	{
		"id": "34625d1b32f2",
		"ts": "2026-08-25T13:50:29.974Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113637885,
		"hash": "34625d1b32f27692e463b983a6ed38198d21c3af638b2c86dcb885e3cb489e1a"
	},
	{
		"id": "6ecbc85f42b9",
		"ts": "2026-08-25T13:50:30.182Z",
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
		"liquidityUsd": 15390069.45,
		"hash": "6ecbc85f42b96107e9dd529586081fa1294994bbcbf8897fd133091fb98a5de9"
	},
	{
		"id": "4eb27945de27",
		"ts": "2026-08-25T13:50:30.395Z",
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
		"liquidityUsd": 987610.01,
		"hash": "4eb27945de27c4741c433b32250e3af2cda1689b1d0dd4896ca7cb5f8ea7ccf3"
	},
	{
		"id": "8ab638ded48a",
		"ts": "2026-08-25T13:50:30.594Z",
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
		"liquidityUsd": 30014651.27,
		"hash": "8ab638ded48abce6016d3ff35dec183e17e469568ea33f79323942dafddd4ece"
	},
	{
		"id": "90b8432b119e",
		"ts": "2026-08-25T13:50:30.808Z",
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
		"liquidityUsd": 4682428.94,
		"hash": "90b8432b119e43e3f48276e723147e03d8a9e7502444bb6f57f8ad8e47cf5d28"
	},
	{
		"id": "014f2b69ea37",
		"ts": "2026-08-25T13:50:31.013Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1198491.92,
		"hash": "014f2b69ea3770d5041a6d0292bb4dec9bbdf58bf6e68a8e638799c83c1a110a"
	},
	{
		"id": "c11dc4506caf",
		"ts": "2026-08-25T13:50:31.217Z",
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
		"liquidityUsd": 544460.11,
		"hash": "c11dc4506caf662f4103203eb246762e5c4523274bbc00dbc44bac42b965440e"
	},
	{
		"id": "3630cabf0123",
		"ts": "2026-08-25T13:50:31.441Z",
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
		"liquidityUsd": 1910407.71,
		"hash": "3630cabf0123b08866c1413826b048bdb144062b6d3e0286cbd89e85b6830f02"
	},
	{
		"id": "a6b95429a643",
		"ts": "2026-08-25T13:50:31.658Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 760658.44,
		"hash": "a6b95429a643c4cf3b2a045d8da70f723aa433a20eb639232d766afdbad28a0f"
	},
	{
		"id": "a735c90fb4b7",
		"ts": "2026-08-25T13:50:31.858Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1239605.92,
		"hash": "a735c90fb4b7cc00c6b37cd28161c8a4bcf5b53143587028c42b08e09a5031b9"
	},
	{
		"id": "4831f033935e",
		"ts": "2026-08-25T13:50:32.195Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1629581.57,
		"hash": "4831f033935e47b00a340a904b52e18b4dca266a617cd6c510f6cef085661487"
	},
	{
		"id": "e2fcfd76d8ac",
		"ts": "2026-08-25T13:50:32.389Z",
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
		"liquidityUsd": 889997.85,
		"hash": "e2fcfd76d8ac35ec67676c7e87ba25f2e2aa972cd25e6c91976d6bd7abc748f0"
	},
	{
		"id": "510523aa113a",
		"ts": "2026-08-25T13:50:32.576Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 556332.39,
		"hash": "510523aa113aeec57d1fb03841cbb5e492c9d73823c31567b92f473f40fb45f0"
	},
	{
		"id": "bb4ac707f2ab",
		"ts": "2026-08-25T13:50:32.770Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1863494.98,
		"hash": "bb4ac707f2abfc757301183a2b9469e583cd0e440908915e2e3eee80d8abe355"
	},
	{
		"id": "e7d871b69fbe",
		"ts": "2026-08-25T13:50:32.956Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 97702.73,
		"hash": "e7d871b69fbe2b87958f47a58350af90a787508420f2d986f28b641775c2cdb3"
	},
	{
		"id": "02c06499eabc",
		"ts": "2026-08-25T13:50:33.151Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3385451.33,
		"hash": "02c06499eabc8e98d43f52e538f87721a6737653b1965485ea4c00bca7c32cf3"
	},
	{
		"id": "129d81805e24",
		"ts": "2026-08-25T13:50:33.344Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11543646.58,
		"hash": "129d81805e24c376c341a9dfdedc2758e72ccbb7aaa80f7654223deee4cf3ecd"
	},
	{
		"id": "8e2750a077ad",
		"ts": "2026-08-25T13:50:33.643Z",
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
		"liquidityUsd": 1120723.43,
		"hash": "8e2750a077adae778cb876f4ec10f6fc9352c960e2f1d534cb7942a28fff77c8"
	},
	{
		"id": "db88dcab79de",
		"ts": "2026-08-25T13:50:33.848Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 513738.4,
		"hash": "db88dcab79dec19234790700608181703c7ec1fe3c1c2b17451af8000e7fde70"
	},
	{
		"id": "14b58e5af6ac",
		"ts": "2026-08-25T12:39:21.844Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113527046.05,
		"hash": "14b58e5af6ac1028b7cbab40b048f7e1978333bed3f05186b0613f2b6faac22d"
	},
	{
		"id": "3a498a6b38ed",
		"ts": "2026-08-25T12:39:22.048Z",
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
		"liquidityUsd": 17613899.21,
		"hash": "3a498a6b38edc9d5775b397ae2d720318b62885c2add8f70c6fff68f3ba8576b"
	},
	{
		"id": "fd35a35c15d3",
		"ts": "2026-08-25T12:39:22.248Z",
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
		"liquidityUsd": 1002548.66,
		"hash": "fd35a35c15d3f1b2f8cc64a21c8dc2cb04023c061afa609dbd6db8d4b3e3289d"
	},
	{
		"id": "37cd7a886570",
		"ts": "2026-08-25T12:39:22.597Z",
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
		"liquidityUsd": 30029889.33,
		"hash": "37cd7a88657014953ba95279db54fc4a30944bc0872472355959340d9e5c3e98"
	},
	{
		"id": "dd31363c15ce",
		"ts": "2026-08-25T12:39:22.806Z",
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
		"liquidityUsd": 4770720.27,
		"hash": "dd31363c15ce7aea06b8ea9d31fda05201c26818b5bfbd7be3a1ffdc4e2b46da"
	},
	{
		"id": "21fa6a98485f",
		"ts": "2026-08-25T12:39:23.001Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1198245.78,
		"hash": "21fa6a98485f47505b4fcf4c6427ed0a3fd40c39c2a304fdc1470a247a817ee2"
	},
	{
		"id": "f9f1e92a581a",
		"ts": "2026-08-25T12:39:23.208Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1109581.09,
		"hash": "f9f1e92a581a18ff408834ae9694957b969507f5b87b24e5dfc5cf55efcd52aa"
	},
	{
		"id": "ae556332b6bc",
		"ts": "2026-08-25T12:39:23.415Z",
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
		"liquidityUsd": 1915120.35,
		"hash": "ae556332b6bc2bb61ec6a97f315142fdd0cf728738ff14c0c51a8cca9dcc4992"
	},
	{
		"id": "119772e05b6f",
		"ts": "2026-08-25T12:39:24.165Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 769220,
		"hash": "119772e05b6f437c690cc4a062c071d522a00e96e6bc191fb6aefdcd43da5432"
	},
	{
		"id": "d91966b2453f",
		"ts": "2026-08-25T12:39:24.353Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1576105.97,
		"hash": "d91966b2453fdc9bf22be95cb17d644be4542b803c5480cc99f291e4d1cc904b"
	},
	{
		"id": "e207f5fb3265",
		"ts": "2026-08-25T12:39:24.529Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1194296.91,
		"hash": "e207f5fb3265d273ca98c3b346a7af32cd69781e9a4ee50ef0a2ca0850ac2fbe"
	},
	{
		"id": "e0ad3bd505f4",
		"ts": "2026-08-25T12:39:24.725Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1884465.46,
		"hash": "e0ad3bd505f4e1421440080ab8c973a5ba2b112dd82bae8fc41b7b778027ebea"
	},
	{
		"id": "cc52d90664a3",
		"ts": "2026-08-25T12:39:24.909Z",
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
		"liquidityUsd": 900083.56,
		"hash": "cc52d90664a3d0d3e2a8dd70c0d34d81304f4dbeadfea18d01cde6911c231c92"
	},
	{
		"id": "9a1592b52393",
		"ts": "2026-08-25T12:39:25.101Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 102621.78,
		"hash": "9a1592b5239353b29146998e566a832cbc00d10f4b5c8bb62d190cc8aa9a69af"
	},
	{
		"id": "8e488e2a9d00",
		"ts": "2026-08-25T12:39:25.281Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 554447.77,
		"hash": "8e488e2a9d00e90266dccf3b6833a92badbca62913504708ca01606f8b2b2122"
	},
	{
		"id": "5fbf377fac60",
		"ts": "2026-08-25T12:39:25.517Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3464385.03,
		"hash": "5fbf377fac60ac4b14cd50531d348b8ea7f98dab78f760055cc0b411d769d8c3"
	},
	{
		"id": "99fbb0ad790b",
		"ts": "2026-08-25T12:39:25.694Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11538693.13,
		"hash": "99fbb0ad790baf860ac520d165eb6e1ed16d4c8d1d0b4449a7891df06b64b394"
	},
	{
		"id": "8a5e28418082",
		"ts": "2026-08-25T12:39:25.889Z",
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
		"liquidityUsd": 1109581.09,
		"hash": "8a5e28418082162c2e326e7ed69a69f874c1cbec0f606b0b79d2f3a9da4eb5e4"
	},
	{
		"id": "ae2717001705",
		"ts": "2026-08-25T11:23:01.626Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113606093.51,
		"hash": "ae27170017059544f00819607a4348b79ef5c3166b117d985afd489082254733"
	},
	{
		"id": "c9f628f9c34a",
		"ts": "2026-08-25T11:23:01.886Z",
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
		"liquidityUsd": 18074763.37,
		"hash": "c9f628f9c34a868e681484ca20c59256d3faa3c2545c2c1eb9a39359c367bf5c"
	},
	{
		"id": "aea9e86c360e",
		"ts": "2026-08-25T11:23:02.152Z",
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
		"liquidityUsd": 1008826.91,
		"hash": "aea9e86c360e29d918743365d51a0b5b319d50238d398304121f71563252682c"
	},
	{
		"id": "063a4c5014f4",
		"ts": "2026-08-25T11:23:02.402Z",
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
		"liquidityUsd": 30319379.43,
		"hash": "063a4c5014f47e4daa591fa9a515bf29c01b3405099c3222b5828cda0e7e04f5"
	},
	{
		"id": "4a67b3ed7178",
		"ts": "2026-08-25T11:23:02.636Z",
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
		"liquidityUsd": 4808163.81,
		"hash": "4a67b3ed7178da55e465ac84fadd08004098a03d7049fac3781c678de9dbc656"
	},
	{
		"id": "8e13d400a090",
		"ts": "2026-08-25T11:23:02.885Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1208507.55,
		"hash": "8e13d400a09027d2a1dde02ad110fa3226c67f84101fdd59e442dd1366e0014f"
	},
	{
		"id": "df7fb7518495",
		"ts": "2026-08-25T11:23:03.141Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2222809.24,
		"hash": "df7fb75184959596f9d51fd1e65ad4386e0435b1a4c549caa8c1c9e48b8c8ef3"
	},
	{
		"id": "f84ec6a7dc95",
		"ts": "2026-08-25T11:23:03.383Z",
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
		"liquidityUsd": 1922239.07,
		"hash": "f84ec6a7dc95483784a4e1dbb189af45175be818094e0e0402691ceac34ef411"
	},
	{
		"id": "f3e81611bb69",
		"ts": "2026-08-25T11:23:03.642Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 771717,
		"hash": "f3e81611bb69c7317b5316811cfa1844dce0077f78df13dd6152a6eaaacae764"
	},
	{
		"id": "5748cfcf6ef2",
		"ts": "2026-08-25T11:23:03.875Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1236304.21,
		"hash": "5748cfcf6ef268d4ea7a400557fe107395a1ff1efba262f9b81be2d2efb52fcd"
	},
	{
		"id": "853dd25aad13",
		"ts": "2026-08-25T11:23:04.108Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2222811.26,
		"hash": "853dd25aad13b4951320552a79c6313fb9cdd415ea1a92ba7b4c4df945c9605c"
	},
	{
		"id": "0e511dcd067d",
		"ts": "2026-08-25T11:23:04.331Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 107257.14,
		"hash": "0e511dcd067d8b03cc07f97c6c560fccb1a2525e549c932c39cc26f36d931e98"
	},
	{
		"id": "14ea249ce489",
		"ts": "2026-08-25T11:23:04.554Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 561947.04,
		"hash": "14ea249ce4899bb63bff1005832a5f17b48753852bb45b2d966bff61d5f43a65"
	},
	{
		"id": "6ce8c7a69a26",
		"ts": "2026-08-25T11:23:04.783Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1878256.71,
		"hash": "6ce8c7a69a262189ea02922534e85ed1f3f4aee88cade08cc2e1582c0d537cc3"
	},
	{
		"id": "8ff3420e620e",
		"ts": "2026-08-25T11:23:05.001Z",
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
		"liquidityUsd": 928140.58,
		"hash": "8ff3420e620e62994bb585f797af61e8c8baa14d1da8c8473ad62361fee91b45"
	},
	{
		"id": "d52b823aef57",
		"ts": "2026-08-25T11:23:05.233Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3521227.81,
		"hash": "d52b823aef57b809da581815e3d8d149b7a4724f2c3070cb120f68be2b17318e"
	},
	{
		"id": "8ab8b9080535",
		"ts": "2026-08-25T11:23:05.460Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11448741.26,
		"hash": "8ab8b90805355f32413d88d56331fd4c08595500cabdea58990a45703ddb8080"
	},
	{
		"id": "f254a69ac20c",
		"ts": "2026-08-25T11:23:05.683Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 549992.59,
		"hash": "f254a69ac20c95ba3b4708230ab4fb6a8304b9e1a75a4627903558acb3efe617"
	},
	{
		"id": "c57789ccfff4",
		"ts": "2026-08-25T10:27:15.928Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113377224.36,
		"hash": "c57789ccfff4df2227273f7114ae1d21b416755016d8f263fd8718790c2bf43a"
	},
	{
		"id": "833a85aead39",
		"ts": "2026-08-25T10:27:16.462Z",
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
		"liquidityUsd": 18453095.95,
		"hash": "833a85aead39b15c60f4f474a4b8c426401f011b0d617a67872b350d7e0ca7e7"
	},
	{
		"id": "ca8328536049",
		"ts": "2026-08-25T10:27:16.825Z",
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
		"liquidityUsd": 1008925.81,
		"hash": "ca8328536049972d25e0f8f9ed03c9c6845033f08b618f12d0e31f5dd283343f"
	},
	{
		"id": "61b9aed8c07a",
		"ts": "2026-08-25T10:27:17.200Z",
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
		"liquidityUsd": 30429686.59,
		"hash": "61b9aed8c07aff8ade15eaf47f89186d0e8b6dd8e9d218cb754dea37134f8aaa"
	},
	{
		"id": "7a38596186aa",
		"ts": "2026-08-25T10:27:17.579Z",
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
		"liquidityUsd": 4803830.56,
		"hash": "7a38596186aa961c7ad8f810dbe5788d69a4a6a867aa81c081beb1dfa5fe4197"
	},
	{
		"id": "8ff221675114",
		"ts": "2026-08-25T10:27:17.800Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1208507.55,
		"hash": "8ff221675114013c255c9042814b399f83b28195d20d511c4b4c757cca1757cd"
	},
	{
		"id": "3a0cd4685520",
		"ts": "2026-08-25T10:27:18.037Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2214146.34,
		"hash": "3a0cd468552062f8636cbe442ce23c5c5a6d7d666e79a5847c738104e7ad2439"
	},
	{
		"id": "faed09eb6ac0",
		"ts": "2026-08-25T10:27:18.267Z",
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
		"liquidityUsd": 1924474.46,
		"hash": "faed09eb6ac0de334265f1e7c4ff7904f46d80f2b6dd69b5167ea142911b3d9d"
	},
	{
		"id": "230e9073a330",
		"ts": "2026-08-25T10:27:18.798Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 752761.96,
		"hash": "230e9073a330f49c28559d9670218a976447d7614cd796ee1efb3109bb8d4d55"
	},
	{
		"id": "4adb18d95f41",
		"ts": "2026-08-25T10:27:19.015Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1205883.72,
		"hash": "4adb18d95f41994e5028b93d7e20d900e216874c6900e900438d8293d7c0cf3e"
	},
	{
		"id": "3b27881607fa",
		"ts": "2026-08-25T10:27:19.236Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2209329.61,
		"hash": "3b27881607fadc0838733fc8b8af31ca38e034effb04b630b646559cba24120e"
	},
	{
		"id": "2e7c6136192f",
		"ts": "2026-08-25T10:27:19.464Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 108403.62,
		"hash": "2e7c6136192f412786251c9519ec7e79f1ca57555378545e8734aa20470df6d7"
	},
	{
		"id": "b6b548de687e",
		"ts": "2026-08-25T10:27:19.677Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 563724.65,
		"hash": "b6b548de687e1b9134d256610ac51696d2636231e8db94a3dafdbd763f217fe8"
	},
	{
		"id": "ed6c2305f7ae",
		"ts": "2026-08-25T10:27:19.954Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1889068.91,
		"hash": "ed6c2305f7aed373f63e007cd473f24acd1d89a01ee076832e41b052a1ce4e82"
	},
	{
		"id": "71a080420e5a",
		"ts": "2026-08-25T10:27:20.182Z",
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
		"liquidityUsd": 923192.52,
		"hash": "71a080420e5a70f4a97946da899b925e7df67d5f4ab016901b5601e9664ba4f3"
	},
	{
		"id": "d90970644d7e",
		"ts": "2026-08-25T10:27:20.399Z",
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
		"liquidityUsd": 3518971.36,
		"hash": "d90970644d7e258605d4e50f18a1914b6b5ed4308743e5dbd1d58dc085d92234"
	},
	{
		"id": "cf56273bbe75",
		"ts": "2026-08-25T10:27:20.631Z",
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
		"liquidityUsd": 11454738.65,
		"hash": "cf56273bbe7576ac2565162cc9e4e8eb86b5a8ce8f777b79209d82dd80c33a57"
	},
	{
		"id": "fa5c82feea31",
		"ts": "2026-08-25T10:27:20.866Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 549591.9,
		"hash": "fa5c82feea31d4f85b51f5c7d36ffffa20363b4a54070322502973f46496aff1"
	},
	{
		"id": "32aa00058070",
		"ts": "2026-08-25T09:31:16.482Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113658022.72,
		"hash": "32aa00058070694135edc2359e28432b1d61832fb0151ee4dd75a8805a17bd37"
	},
	{
		"id": "c83dd0fb1a96",
		"ts": "2026-08-25T09:31:16.957Z",
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
		"liquidityUsd": 15329325.56,
		"hash": "c83dd0fb1a96fed791262fc5a942630da4853e0e1b3015649b230242bb042e29"
	},
	{
		"id": "3b72f71cc140",
		"ts": "2026-08-25T09:31:17.225Z",
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
		"liquidityUsd": 1013852.75,
		"hash": "3b72f71cc14005c29cb39102625d51479da92b3dae1e9e9f77b5bea823a100de"
	},
	{
		"id": "be3ebdc500b4",
		"ts": "2026-08-25T09:31:17.481Z",
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
		"liquidityUsd": 30526110.67,
		"hash": "be3ebdc500b4b913ad0d75158d087557fb9faa5507aa550ebdc95e6b1704366c"
	},
	{
		"id": "1e22132ed1c6",
		"ts": "2026-08-25T09:31:17.732Z",
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
		"liquidityUsd": 4821804.87,
		"hash": "1e22132ed1c66016b70da2b9206dd4a6e8e6550d909385278bfbaa9ee42cc3a8"
	},
	{
		"id": "159994b14cff",
		"ts": "2026-08-25T09:31:17.979Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1221723.04,
		"hash": "159994b14cffd8710e1d3b8e064ab39c7d424dd2879bb19270551a83af1f1cbf"
	},
	{
		"id": "01d536b8d7f2",
		"ts": "2026-08-25T09:31:18.239Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2313321.81,
		"hash": "01d536b8d7f2d642b3be9690f2a22f5ed6f3cac85b8d95cdb1031aa8d5041545"
	},
	{
		"id": "cabfc6369256",
		"ts": "2026-08-25T09:31:18.488Z",
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
		"liquidityUsd": 1928898.81,
		"hash": "cabfc636925607ab62cdc90327c4d7b1b87f5dc3ff0156fbd84601d1583253a0"
	},
	{
		"id": "818f4d2556f7",
		"ts": "2026-08-25T09:31:18.765Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 794624.03,
		"hash": "818f4d2556f7311c80b4a3febe5bdf6124eb6321fd33dbc24ee4a4ad11ea56cc"
	},
	{
		"id": "1f277529e11b",
		"ts": "2026-08-25T09:31:19.015Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 2320575.93,
		"hash": "1f277529e11bb8da0d0abf1e5858387cdfb316494d8ce7c6b32cba47edc40572"
	},
	{
		"id": "64a6cbb4ec7b",
		"ts": "2026-08-25T09:31:19.252Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1299418.28,
		"hash": "64a6cbb4ec7b3cf4f7f86310a8af793b772e077b7d9f35fc731910a8fb2c4748"
	},
	{
		"id": "a814c245dfe1",
		"ts": "2026-08-25T09:31:19.487Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 108872.93,
		"hash": "a814c245dfe19e00f88481b2366b3fa8e9903a67d2d94c26d35c9200156e9bff"
	},
	{
		"id": "e90735070fda",
		"ts": "2026-08-25T09:31:19.720Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 577053.23,
		"hash": "e90735070fdaee2258017d718eae3573be1799f496bf1a6dcd9556191d71fd6a"
	},
	{
		"id": "abee46a9bb84",
		"ts": "2026-08-25T09:31:19.953Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1066247.32,
		"hash": "abee46a9bb84c04a33e71525b7bccc6c561b87aa06f78d3b4cb0d61a536a2f50"
	},
	{
		"id": "00b1c9fb5099",
		"ts": "2026-08-25T09:31:20.194Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1894176.89,
		"hash": "00b1c9fb50998ac69cedc4947cb44207af2abc208645073129d367fa582b30da"
	},
	{
		"id": "8ea3bcf1a737",
		"ts": "2026-08-25T09:31:20.429Z",
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
		"liquidityUsd": 932653.37,
		"hash": "8ea3bcf1a737f2a254c75994a166dc9ebe55233cfdd7b4aee39d6ddb704675a4"
	},
	{
		"id": "9970e792e903",
		"ts": "2026-08-25T09:31:20.666Z",
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
		"liquidityUsd": 3541611.19,
		"hash": "9970e792e903deb09b4fb3c5e08559b61bdb70d56cc756f74b27a8b24c85de23"
	},
	{
		"id": "ef92a06886c5",
		"ts": "2026-08-25T09:31:20.898Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11488917.37,
		"hash": "ef92a06886c552834b4d4ad64083b89517ec72f0f223c4ad282b7dfd522179e8"
	},
	{
		"id": "8b6cd1e9a416",
		"ts": "2026-08-25T08:36:54.246Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113666483.94,
		"hash": "8b6cd1e9a416f4bfd6a9e438e0f0557f274cd05308f1321c25be50233c22caf6"
	},
	{
		"id": "daa3ee18ce51",
		"ts": "2026-08-25T08:36:54.493Z",
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
		"liquidityUsd": 18689676.67,
		"hash": "daa3ee18ce51d9686834a62130ca5d9910f18a391c1aa3da0e4d622098e571dc"
	},
	{
		"id": "7c73e22bf298",
		"ts": "2026-08-25T08:36:54.770Z",
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
		"liquidityUsd": 1015337.81,
		"hash": "7c73e22bf298f112ee3dc7f76503ca31ec1aa6c39f985a506a1496ebdb93b456"
	},
	{
		"id": "7dcea0a33213",
		"ts": "2026-08-25T08:36:55.034Z",
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
		"liquidityUsd": 30558866.99,
		"hash": "7dcea0a33213a0427b573c175a5529865469dfd22028f7fb5ce7647ef0499ff3"
	},
	{
		"id": "5a0826bb68d9",
		"ts": "2026-08-25T08:36:55.272Z",
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
		"liquidityUsd": 4834484.94,
		"hash": "5a0826bb68d9b2aaacc06013b301b99099c05ca234ec343a760e1d138ee38b5b"
	},
	{
		"id": "9be7cc6489ae",
		"ts": "2026-08-25T08:36:55.545Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1216190.86,
		"hash": "9be7cc6489aeca42505d40555ddaa2590ea2a311474752a8d2862215e8e02bfc"
	},
	{
		"id": "0eb2c80d87d4",
		"ts": "2026-08-25T08:36:55.802Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2348520.6,
		"hash": "0eb2c80d87d493face7c806f86bbff36fdef80d574c51f1b55ff16e11ec6379a"
	},
	{
		"id": "75d89d80daeb",
		"ts": "2026-08-25T08:36:56.047Z",
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
		"liquidityUsd": 1936130.67,
		"hash": "75d89d80daebc2ec8fb3bd8389ee75cdb94def478d2ecb45a74c214d9d324a33"
	},
	{
		"id": "7c4fc6e4330a",
		"ts": "2026-08-25T08:36:56.297Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 810163.52,
		"hash": "7c4fc6e4330a8ef32ab03f1eacbbe3046350be67e8aff6a175227a536d53613e"
	},
	{
		"id": "f2435c8d916f",
		"ts": "2026-08-25T08:36:56.547Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1314934.68,
		"hash": "f2435c8d916ffa343767e108db34cc0b0635b87e6f4cee7415601ee91901128c"
	},
	{
		"id": "fd183665f44c",
		"ts": "2026-08-25T08:36:56.778Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2347574.75,
		"hash": "fd183665f44cf4a518394459477cf05d0973af9e5ddd8868e98675579a36c337"
	},
	{
		"id": "8d1dc846c285",
		"ts": "2026-08-25T08:36:57.008Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1908574.02,
		"hash": "8d1dc846c28545946d700ec129eba345abc46da93db10206c5890a8761fd4d0d"
	},
	{
		"id": "450ec985dc36",
		"ts": "2026-08-25T08:36:57.238Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 579601.68,
		"hash": "450ec985dc36fdd06a6963a7dfd043ada72164ab23097048fe89e16b77956604"
	},
	{
		"id": "a38f73afe7d3",
		"ts": "2026-08-25T08:36:57.469Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1074561.03,
		"hash": "a38f73afe7d37f9a16b0c190b8e3971a7a6639740c5c78eb83105181ab8dfd32"
	}
]
