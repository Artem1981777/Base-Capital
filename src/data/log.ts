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
	"updatedAt": "2026-08-24T09:42:16.924Z",
	"tokensScored": 14318,
	"verdictsIssued": 14318,
	"safe": 12310,
	"risky": 1002,
	"likelyRug": 1006,
	"ticks": 830
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "3eddd1469323",
		"ts": "2026-08-24T09:42:10.058Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111648713.59,
		"hash": "3eddd1469323bb03cd66fdeef431786952ea2dbc476f125566c05ee7b3b23a4a"
	},
	{
		"id": "157bb8dc7763",
		"ts": "2026-08-24T09:42:10.299Z",
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
		"liquidityUsd": 18849517.42,
		"hash": "157bb8dc7763c22ed006a7370168934d694ecb086ae1b15db094b2a187e9d976"
	},
	{
		"id": "a9468729601f",
		"ts": "2026-08-24T09:42:10.547Z",
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
		"liquidityUsd": 918999.13,
		"hash": "a9468729601f019658f5cf837cdf6eec1040f33617c4d2ae0961bad3df1243f6"
	},
	{
		"id": "bc69c55d9d17",
		"ts": "2026-08-24T09:42:10.795Z",
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
		"liquidityUsd": 29334222.03,
		"hash": "bc69c55d9d1712aa10b6814c916ce06c1043d9d9fc49ab3e8abd17a22586a4ba"
	},
	{
		"id": "a01ed6345d27",
		"ts": "2026-08-24T09:42:11.025Z",
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
		"liquidityUsd": 3488976.79,
		"hash": "a01ed6345d275b97bc9f65f19a1120280f75625bca6561229b3f68d61cda2a09"
	},
	{
		"id": "9e1ce3f9cae5",
		"ts": "2026-08-24T09:42:11.263Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1171293.33,
		"hash": "9e1ce3f9cae50316125d6120833dd0a31617be9a3be042e9f8029dccd5e8a8a0"
	},
	{
		"id": "46a629483f91",
		"ts": "2026-08-24T09:42:11.505Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152797.38,
		"hash": "46a629483f91e4cd8beec957a2325916a7d76e9feda0f7df4e4a0562747e0a13"
	},
	{
		"id": "f3b5db35ed9c",
		"ts": "2026-08-24T09:42:12.265Z",
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
		"liquidityUsd": 1891647.31,
		"hash": "f3b5db35ed9c6454b5b5daec0f6370d2d8c57615cd5bd551dd359a896d4316dc"
	},
	{
		"id": "cdb89f2988ca",
		"ts": "2026-08-24T09:42:12.501Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 595031.38,
		"hash": "cdb89f2988cabea887253fa6d5f2ee852204492383c91090743f30928a52bc33"
	},
	{
		"id": "ff14ea891aae",
		"ts": "2026-08-24T09:42:12.765Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 883713.14,
		"hash": "ff14ea891aaee18995ffe5ec097fd92a5fde2eab5113ac6ce5dce8235b4fe73a"
	},
	{
		"id": "b304d5845722",
		"ts": "2026-08-24T09:42:13.002Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1407708.71,
		"hash": "b304d584572292df5e7996d0b1ec501b2ec792f144f224950386437f19c53c9f"
	},
	{
		"id": "ae351333c894",
		"ts": "2026-08-24T09:42:13.833Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 640585.45,
		"hash": "ae351333c894260bded9fbffc8ecb1711fe3a9692deea2018e8265d9930f2005"
	},
	{
		"id": "66899be05d4c",
		"ts": "2026-08-24T09:42:14.307Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 94881.83,
		"hash": "66899be05d4c202ec9d88198c6e7a3b5110b637ea1f304c3fd03e6637bfa97d7"
	},
	{
		"id": "1d10c4646c81",
		"ts": "2026-08-24T09:42:14.536Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 118989.33,
		"hash": "1d10c4646c8134b570795f63d722431732b2e3bf2fd4396cc18d99bf398bfcf8"
	},
	{
		"id": "38a7145a3a5a",
		"ts": "2026-08-24T09:42:14.785Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4137009.84,
		"hash": "38a7145a3a5a7c871384127f50e4458333bc17b884c8dc0a5f002323f2c298d2"
	},
	{
		"id": "13ca30bf9977",
		"ts": "2026-08-24T09:42:14.995Z",
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
		"liquidityUsd": 669891.47,
		"hash": "13ca30bf9977f1d1c4f61160aed764a256b0b8566a7e6eb20e6cf5b7d575aa5f"
	},
	{
		"id": "efcc6bda0792",
		"ts": "2026-08-24T09:42:15.986Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 254630.77,
		"hash": "efcc6bda07927f649e29951e728bb4906a93bb35ae95dad137004a2421b7678e"
	},
	{
		"id": "3b1523637bca",
		"ts": "2026-08-24T09:42:16.495Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 417792.77,
		"hash": "3b1523637bca0e0299f9bf93abc4889c0aa5bbc5b9d204e0ed5637d21443df36"
	},
	{
		"id": "da3aa22c2418",
		"ts": "2026-08-24T09:42:16.703Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11175678.31,
		"hash": "da3aa22c2418c4f98c7a05dcff69524b1225f503955f5cec3816bdbc5b657cc7"
	},
	{
		"id": "6944a4d37453",
		"ts": "2026-08-24T09:42:16.924Z",
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
		"liquidityUsd": 862099.58,
		"hash": "6944a4d374530e7822e99e3e49ad76314088c8115ab7e3c713c2a3d45f6a1aad"
	},
	{
		"id": "9c45400c81bc",
		"ts": "2026-08-24T08:42:47.258Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111401783.18,
		"hash": "9c45400c81bcaba82b923b1338ae14a7fa4ff81795e9f998b1e81de095062d63"
	},
	{
		"id": "63ceaf1a0d17",
		"ts": "2026-08-24T08:42:47.698Z",
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
		"liquidityUsd": 19939192.16,
		"hash": "63ceaf1a0d17f97f46b3f95fb956e34ecfc2dc71bb21eae8222bea1d9131c885"
	},
	{
		"id": "6dd7338b5c6d",
		"ts": "2026-08-24T08:42:47.938Z",
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
		"liquidityUsd": 915076.33,
		"hash": "6dd7338b5c6daa0140c5e6a3422eeacb010f64489cb35c69fe492b90139ccdb8"
	},
	{
		"id": "8282a3430982",
		"ts": "2026-08-24T08:42:48.208Z",
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
		"liquidityUsd": 29158586.11,
		"hash": "8282a3430982cce0a03aed7b40a93fae594bbae0cdf8765201b89f1a650bd9e0"
	},
	{
		"id": "29a5f9145e8e",
		"ts": "2026-08-24T08:42:48.443Z",
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
		"liquidityUsd": 3436551.7,
		"hash": "29a5f9145e8e39c973a5626d215b95fa835355ccc72d251ee99ba29fac5f0831"
	},
	{
		"id": "ccf53d2dc883",
		"ts": "2026-08-24T08:42:48.687Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1171293.33,
		"hash": "ccf53d2dc883bd42a8bf28aa80c649127bceff72a8e4e32e7bc9ae5742688c0b"
	},
	{
		"id": "be098ddb0ef4",
		"ts": "2026-08-24T08:42:48.919Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152797.13,
		"hash": "be098ddb0ef43153470040a170775c150e326b6b0b813682221d406a96b56394"
	},
	{
		"id": "06fec6b6a645",
		"ts": "2026-08-24T08:42:49.159Z",
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
		"liquidityUsd": 1878620.89,
		"hash": "06fec6b6a6455527512694081916e4cd8e2961a11192bfe478466cff2c4db31d"
	},
	{
		"id": "3159d3c94b9f",
		"ts": "2026-08-24T08:42:49.394Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 614063.06,
		"hash": "3159d3c94b9f4647ddabbc8bb4560f0850724c17edd67c0e52dd2fc46af09bb8"
	},
	{
		"id": "c552ffb7b4d4",
		"ts": "2026-08-24T08:42:49.627Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1455828.27,
		"hash": "c552ffb7b4d45dbee7c2c5fe93bae3b38746a119bf6f9b30d2d103c90e34e19a"
	},
	{
		"id": "280f1d740a5b",
		"ts": "2026-08-24T08:42:49.850Z",
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
		"liquidityUsd": 881732.18,
		"hash": "280f1d740a5bb6e0cbcfba9bfa905ddca85f199f680e14371f1d8e1805c2cee8"
	},
	{
		"id": "d60c42a9e0cd",
		"ts": "2026-08-24T08:42:50.069Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 628823.64,
		"hash": "d60c42a9e0cd8cf11276386697c6cdb3d61f7b20da2ce83598bfc352dcf68f54"
	},
	{
		"id": "4da420feeedb",
		"ts": "2026-08-24T08:42:50.306Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 93703.84,
		"hash": "4da420feeedb5ed04c04e05304b395c92ef1097470f7c1d5acbf71d325e701a0"
	},
	{
		"id": "04db5c7f141c",
		"ts": "2026-08-24T08:42:50.528Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 117146.53,
		"hash": "04db5c7f141c1349e31fb87c52d26bc7c1c3e7a015c17215a53e8183bcfe62d4"
	},
	{
		"id": "e29e939bcb8e",
		"ts": "2026-08-24T08:42:50.746Z",
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
		"liquidityUsd": 11115426.6,
		"hash": "e29e939bcb8ee4d98151a5e705f86305676e3da354f26ae6a8832bd17e807d7a"
	},
	{
		"id": "32b8c619d954",
		"ts": "2026-08-24T08:42:50.965Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4111673.45,
		"hash": "32b8c619d95420e5682b9683611ae4c16a88fabb354d6d33d24ec147aedf9459"
	},
	{
		"id": "d1670be66195",
		"ts": "2026-08-24T08:42:51.184Z",
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
		"liquidityUsd": 660419.3,
		"hash": "d1670be66195bbcbd8b1d1ba7e0a4dc2cf394ccaa2de9ae48408147a3ec659c9"
	},
	{
		"id": "d4ebcb8451b2",
		"ts": "2026-08-24T08:42:51.403Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 249072.6,
		"hash": "d4ebcb8451b20fd80ae40d7ed08dc268cdf8da78e94b342f335d0e54883a2c5c"
	},
	{
		"id": "a2646d63b6c9",
		"ts": "2026-08-24T08:42:51.622Z",
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
		"liquidityUsd": 853169.65,
		"hash": "a2646d63b6c9c20d0e2967bbacf1ecaf3dbd9cf1bdb8fcca5aca52b730398c1c"
	},
	{
		"id": "eec8a9901402",
		"ts": "2026-08-24T08:42:52.001Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4225689.43,
		"hash": "eec8a990140215e2b3f8804cf64481afbd83c9e2c07e6f3cda7d8fae80020be4"
	},
	{
		"id": "3a3307f69398",
		"ts": "2026-08-24T07:54:28.790Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111965457.09,
		"hash": "3a3307f69398a8fddf3774889f5528cd42b2fab800a378e7489754e05099352b"
	},
	{
		"id": "8524b5c6f432",
		"ts": "2026-08-24T07:54:29.024Z",
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
		"liquidityUsd": 13679177.65,
		"hash": "8524b5c6f43225396e91f98227d3453cd71992fb4915e286132703b703cfdf5a"
	},
	{
		"id": "e2c40bebfe1a",
		"ts": "2026-08-24T07:54:29.276Z",
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
		"liquidityUsd": 914605.61,
		"hash": "e2c40bebfe1a28ff848d9bc3f04b699a695fbecea3978007b464be003a79b3fd"
	},
	{
		"id": "119904fd0a4f",
		"ts": "2026-08-24T07:54:29.510Z",
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
		"liquidityUsd": 29398275.5,
		"hash": "119904fd0a4f5a9a446523fbfe9ac56ae34a7c7e254e7ec522f0eafc3bb9e110"
	},
	{
		"id": "3591d50e73a9",
		"ts": "2026-08-24T07:54:29.753Z",
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
		"liquidityUsd": 3445947.58,
		"hash": "3591d50e73a902538e4838621aea59dfabd8b06d10015df1f81b8053b19eed73"
	},
	{
		"id": "c07a6a91aaf3",
		"ts": "2026-08-24T07:54:29.995Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1177279.34,
		"hash": "c07a6a91aaf3bc7b9364c34502b742811d1ac88f7e44bf7ef68ec00e9604f912"
	},
	{
		"id": "c8dfb655a708",
		"ts": "2026-08-24T07:54:30.224Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152797.13,
		"hash": "c8dfb655a708552412189c2225368c7bb71a53a50b78e0bf3a21fa62b7d05c72"
	},
	{
		"id": "77548891e32e",
		"ts": "2026-08-24T07:54:30.755Z",
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
		"liquidityUsd": 1887345.2,
		"hash": "77548891e32efe6fafcfbc126b78d2fdf6e7dd03276008d7240e40b96033733b"
	},
	{
		"id": "c67f4883ac84",
		"ts": "2026-08-24T07:54:31.385Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 622933.55,
		"hash": "c67f4883ac84cfb9bd20309628bd7bddf638c79ee61a200dde8a99b70c6f93ff"
	},
	{
		"id": "37f61e57986e",
		"ts": "2026-08-24T07:54:31.628Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1456096.22,
		"hash": "37f61e57986ed247ffb45bc192de8da048f9f22be95aec541804515bae83d293"
	},
	{
		"id": "3f38e5547ae1",
		"ts": "2026-08-24T07:54:31.852Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 631746.18,
		"hash": "3f38e5547ae1200a57770a39f71762a56a7f06b4f252eae5d7a212834a676c78"
	},
	{
		"id": "5e3ed1703a1b",
		"ts": "2026-08-24T07:54:32.113Z",
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
		"liquidityUsd": 899712.49,
		"hash": "5e3ed1703a1bb0afd167aa856e88122c6f13c906ce83a183e10d1b13524141ae"
	},
	{
		"id": "c874ef4056c0",
		"ts": "2026-08-24T07:54:32.340Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 95223.52,
		"hash": "c874ef4056c009c2538b416b814e30abc726068196c46346c05808e2e62bfd41"
	},
	{
		"id": "e4772e2dcbe8",
		"ts": "2026-08-24T07:54:32.563Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 119889.82,
		"hash": "e4772e2dcbe8ee1dbdcc4cf2cd090ed6de251398d4750f0856a54154bc6982ff"
	},
	{
		"id": "dc7853e51d90",
		"ts": "2026-08-24T07:54:32.792Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11167593.23,
		"hash": "dc7853e51d90d958b3753cd791f2b5c6d7066554810ceb469d02ce164ccd9b6e"
	},
	{
		"id": "8cfe29293127",
		"ts": "2026-08-24T07:54:33.006Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4126365.9,
		"hash": "8cfe29293127405d1613f9b48abb43890faf52721bfd8569be4af34634912fa4"
	},
	{
		"id": "ba5bfa341f61",
		"ts": "2026-08-24T07:54:33.233Z",
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
		"liquidityUsd": 660249.18,
		"hash": "ba5bfa341f6146bd80969b64910c3afdff578a03a5ecc48c58538bbccda090e1"
	},
	{
		"id": "e1dd1561e0bd",
		"ts": "2026-08-24T07:54:33.455Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 250086.9,
		"hash": "e1dd1561e0bd5795204252a01e6686a6ea3303c377d533d11a5aa80aec6a18e1"
	},
	{
		"id": "6b1d4b555335",
		"ts": "2026-08-24T07:54:33.669Z",
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
		"liquidityUsd": 861818.67,
		"hash": "6b1d4b555335a35b12240fb78c0a93c0e5c7a4e2a48454420a82cbb9bd7d1547"
	},
	{
		"id": "b1dcbc631a22",
		"ts": "2026-08-24T07:54:33.892Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4257403.34,
		"hash": "b1dcbc631a22ca6b48ef055f5060cefb9297e0699bf2396081ec831de45715a7"
	},
	{
		"id": "de7c79cda4eb",
		"ts": "2026-08-24T06:50:19.327Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111830074.63,
		"hash": "de7c79cda4eb5ab9dfabd7483f1ddcfc95a2c0eb55361284508b73890bee8316"
	},
	{
		"id": "1bb6f340563f",
		"ts": "2026-08-24T06:50:19.779Z",
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
		"liquidityUsd": 17585438.55,
		"hash": "1bb6f340563f88fa8f4be9853926bc8b5a0e38894b961e26b7cf700963144052"
	},
	{
		"id": "04c981f87930",
		"ts": "2026-08-24T06:50:20.007Z",
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
		"liquidityUsd": 911153.06,
		"hash": "04c981f8793087f52e517b1098a37cd59ce356d33517832a4e52d36b41b3f978"
	},
	{
		"id": "5ca79adfba86",
		"ts": "2026-08-24T06:50:20.235Z",
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
		"liquidityUsd": 29163591.15,
		"hash": "5ca79adfba865d259cb3bb916851d3058b4453fa8247302af9bef29fa4483d56"
	},
	{
		"id": "4de35c1b2548",
		"ts": "2026-08-24T06:50:20.478Z",
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
		"liquidityUsd": 3437632.96,
		"hash": "4de35c1b25487947c0227b26cf75201ec5440eab92243c28b7336822347912d0"
	},
	{
		"id": "05f41e1271d1",
		"ts": "2026-08-24T06:50:20.722Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1177279.97,
		"hash": "05f41e1271d11f35d063486172d30b1bf3d7cf8c63f29987df2d881f78a9a318"
	},
	{
		"id": "712f175fda29",
		"ts": "2026-08-24T06:50:20.967Z",
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
		"liquidityUsd": 502218.85,
		"hash": "712f175fda2988fbf5b76bb6000c21e0239974bf21b078c7c3f0a4a4c6bf3c08"
	},
	{
		"id": "d649ff901076",
		"ts": "2026-08-24T06:50:21.207Z",
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
		"liquidityUsd": 1883672.48,
		"hash": "d649ff901076d8b40202a5ba828a7d6d380e126b3bcfb7975786243ad74dbe8e"
	},
	{
		"id": "6016ded6b528",
		"ts": "2026-08-24T06:50:21.476Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 623705.78,
		"hash": "6016ded6b528ab05925226c5cbd8135688486cd00c3ff0b41521322b0b94157f"
	},
	{
		"id": "0c647773199e",
		"ts": "2026-08-24T06:50:21.702Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1430008.11,
		"hash": "0c647773199e00f6f285c3ff220567710899c3722ec2678af4c37d0b0f19d48e"
	},
	{
		"id": "8b6894b5e510",
		"ts": "2026-08-24T06:50:21.909Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 623252.79,
		"hash": "8b6894b5e51000a6db273a47f2a4e6bad6c8f1705cb91d30129b45a7c254ef41"
	},
	{
		"id": "f9a6b0d4a4a0",
		"ts": "2026-08-24T06:50:22.132Z",
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
		"liquidityUsd": 873113.86,
		"hash": "f9a6b0d4a4a0ca4a74754178ee6e98f564ca86a539343b654513adb83a804952"
	},
	{
		"id": "e3d202ef00d7",
		"ts": "2026-08-24T06:50:22.339Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 127191.49,
		"hash": "e3d202ef00d7c263745467ef53335326d7dd448eca81ab75c03f521c41dd64f8"
	},
	{
		"id": "b46329df48fc",
		"ts": "2026-08-24T06:50:22.941Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 94494.21,
		"hash": "b46329df48fc98f06b83cc17f264346d4a63bf34877e47600670b72aa14f1cc1"
	},
	{
		"id": "36bf147cbb13",
		"ts": "2026-08-24T06:50:23.148Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11158539.88,
		"hash": "36bf147cbb13a8185bc3e6a74a08306ddbc87371b93b277467afa6c058b375f9"
	},
	{
		"id": "4404b96ffa99",
		"ts": "2026-08-24T06:50:23.362Z",
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
		"liquidityUsd": 654602.28,
		"hash": "4404b96ffa99e7e8ba7e981538a63267cd73c95dc9c80ee73b42fecff7df0005"
	},
	{
		"id": "e24131d5a4ea",
		"ts": "2026-08-24T06:50:23.586Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4120935.47,
		"hash": "e24131d5a4ea702ad048d69f0eb89dbd25546bd97c83d837a541c2e11a01bfe5"
	},
	{
		"id": "ebc89177013e",
		"ts": "2026-08-24T06:50:23.793Z",
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
		"liquidityUsd": 857334.96,
		"hash": "ebc89177013e1551b1e54f1d01318b8c1ba66354d76fac21fd95314921af5eaf"
	},
	{
		"id": "583c3678762c",
		"ts": "2026-08-24T06:50:24.017Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 259090.05,
		"hash": "583c3678762c52ece5936b890e22de897e7ae92b2f97dc9f509af3283a9af36f"
	},
	{
		"id": "a6414e031c01",
		"ts": "2026-08-24T06:50:24.229Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4236319.79,
		"hash": "a6414e031c01a4abfea381fb9563dc4eb42162a21e182426d2e00000e73f2256"
	},
	{
		"id": "6bd9141f5aa9",
		"ts": "2026-08-24T05:34:15.302Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111621085.88,
		"hash": "6bd9141f5aa96f748984436a1bf887c3bd6abfafb9fbda6898b332ce188f4074"
	},
	{
		"id": "9df2a348cebb",
		"ts": "2026-08-24T05:34:15.753Z",
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
		"liquidityUsd": 17505725.78,
		"hash": "9df2a348cebb85ec2dfc87c67d14eabbd3d061344d5a508eab9d4ae617112104"
	},
	{
		"id": "8cbbfdc77041",
		"ts": "2026-08-24T05:34:16.191Z",
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
		"liquidityUsd": 906016.88,
		"hash": "8cbbfdc7704162e6059af1a74de51f4fa6501ad7ae699cb4bbc9aa3d7ed1b52b"
	},
	{
		"id": "0f631ece259b",
		"ts": "2026-08-24T05:34:16.426Z",
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
		"liquidityUsd": 28724309.76,
		"hash": "0f631ece259b41fc863cbe9bd10618736c014ace658516e860736c549cd6f633"
	},
	{
		"id": "4818e32fd896",
		"ts": "2026-08-24T05:34:16.675Z",
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
		"liquidityUsd": 3435421.7,
		"hash": "4818e32fd8967316c4ed48dc158f241aabfff1d13fdca2039dd8e4efc64c0e83"
	},
	{
		"id": "b0ca99b34c3d",
		"ts": "2026-08-24T05:34:16.903Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1176371.53,
		"hash": "b0ca99b34c3d6da74097598c1ea7cf2825c45bdc24e5e49c330bb080985a87cb"
	},
	{
		"id": "32716f82e6b4",
		"ts": "2026-08-24T05:34:17.130Z",
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
		"liquidityUsd": 500571.31,
		"hash": "32716f82e6b48ba007ff9b61a0c07e5b1c1aab68faf95c364df66eb23f106092"
	},
	{
		"id": "3666bbc36199",
		"ts": "2026-08-24T05:34:17.367Z",
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
		"liquidityUsd": 1917765.33,
		"hash": "3666bbc36199588601b5feb8929bb631ebf5f301f553261e8c116c798fcca447"
	},
	{
		"id": "2f155b0486db",
		"ts": "2026-08-24T05:34:17.594Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 652570.94,
		"hash": "2f155b0486db4b05d490217bfae6f123a893c02fb18669c79f7cf4fdd4eb44a1"
	},
	{
		"id": "8e8f87096d24",
		"ts": "2026-08-24T05:34:17.829Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1403653.84,
		"hash": "8e8f87096d24eb661d82dbbab48eb926394e0189c6b2e2d6b4be33e57bfece9d"
	},
	{
		"id": "40a7e844f2a3",
		"ts": "2026-08-24T05:34:18.050Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 642235.52,
		"hash": "40a7e844f2a3fcc217a9b6a93309ee04fe2ac785de8219121f0c078f34391ce6"
	},
	{
		"id": "d65e5f183dcb",
		"ts": "2026-08-24T05:34:18.263Z",
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
		"liquidityUsd": 863594.51,
		"hash": "d65e5f183dcb7febb94b1c8347bc3423093cd96ba60d49432ad23b4c3769fb13"
	},
	{
		"id": "87eb3b32b5f4",
		"ts": "2026-08-24T05:34:18.480Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 119826.45,
		"hash": "87eb3b32b5f48e015b2ad4d0af0717398bb6e370b98b1990c095a02ec7180bfb"
	},
	{
		"id": "984aad9ef4d4",
		"ts": "2026-08-24T05:34:18.703Z",
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
		"liquidityUsd": 653516.11,
		"hash": "984aad9ef4d42823c5e4d90c9b2587e7333f5a4dfaffeca8e1ffa3a4e389df49"
	},
	{
		"id": "eac49f9fe888",
		"ts": "2026-08-24T05:34:18.919Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4126302.34,
		"hash": "eac49f9fe888b60b51fc797a7c05f4cc6963b35a793638eff76245cfcc89e216"
	},
	{
		"id": "b86d0b137154",
		"ts": "2026-08-24T05:34:19.135Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11144363.81,
		"hash": "b86d0b13715469eb323b882811c0611902d5e78ebb46c25bc7cffdf82dfc1b8e"
	},
	{
		"id": "cfc443c2190f",
		"ts": "2026-08-24T05:34:19.598Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 96585.19,
		"hash": "cfc443c2190f0d249e6dccda95e6aff818ed7a4b9adf1e5fdadb048ecbf35010"
	},
	{
		"id": "f6fbbdd6760f",
		"ts": "2026-08-24T05:34:19.811Z",
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
		"liquidityUsd": 871219.8,
		"hash": "f6fbbdd6760fc3c4a5cd38a860eb688f542fc282166835dce9f4b94329d59bdd"
	},
	{
		"id": "7d4227085c0d",
		"ts": "2026-08-24T05:34:20.136Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 257576.63,
		"hash": "7d4227085c0d7b8a170e3211d5acad0a6ae4b6d08c6dc149d8878a61ca60a0ad"
	},
	{
		"id": "77f1b7fe96d8",
		"ts": "2026-08-24T05:34:20.359Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4250549.57,
		"hash": "77f1b7fe96d8801e0b2a0d54498c8f65bf940f300570b24424f94939e14228fe"
	},
	{
		"id": "8278ec0caf17",
		"ts": "2026-08-24T04:52:06.169Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111448233.07,
		"hash": "8278ec0caf17dcfea7b82c683a9de749fdc457c5347fafe5a46151da6131a64a"
	},
	{
		"id": "7b6ca097ab6c",
		"ts": "2026-08-24T04:52:06.602Z",
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
		"liquidityUsd": 16479579.59,
		"hash": "7b6ca097ab6cd437a182533c2aa941762532ecfab28742b77a3e50dfb237742c"
	},
	{
		"id": "377d534557ae",
		"ts": "2026-08-24T04:52:06.848Z",
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
		"liquidityUsd": 901669.12,
		"hash": "377d534557ae417b8a4849066cf833387cf54faace53f7ec3be2d2170ec0d3dc"
	},
	{
		"id": "67a38e692245",
		"ts": "2026-08-24T04:52:07.079Z",
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
		"liquidityUsd": 28654146.16,
		"hash": "67a38e692245b47a933d8811ef498b4e2eda438859bdbc984f3ac7037a47807a"
	},
	{
		"id": "aa63ccf37cdb",
		"ts": "2026-08-24T04:52:07.319Z",
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
		"liquidityUsd": 3418733.82,
		"hash": "aa63ccf37cdb5e690379b480f4ca10b898ca520623703848e08f874786270158"
	},
	{
		"id": "4378c0f7c2bf",
		"ts": "2026-08-24T04:52:07.556Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1175154.82,
		"hash": "4378c0f7c2bf9bbc651a1bf703eab06a27a5587337fcf9aed83ade4b0b2bbe6b"
	},
	{
		"id": "27ed6b58167b",
		"ts": "2026-08-24T04:52:07.785Z",
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
		"liquidityUsd": 500441.13,
		"hash": "27ed6b58167b7c35ec0ea7fb02df40f8b97667c6c9e129cb93c68ebe2929b5eb"
	},
	{
		"id": "b90ddab8ab27",
		"ts": "2026-08-24T04:52:08.061Z",
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
		"liquidityUsd": 1916653.7,
		"hash": "b90ddab8ab273400d8b7fbe0b2567f89f5446d76eb5702a1dfef68dac47152fe"
	},
	{
		"id": "f40ede0c5abf",
		"ts": "2026-08-24T04:52:08.297Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 640996.16,
		"hash": "f40ede0c5abf168620c49d5b20044261e16e978ea706d60561aecea4559dc1a0"
	},
	{
		"id": "098c56dcf31c",
		"ts": "2026-08-24T04:52:08.613Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1397414.18,
		"hash": "098c56dcf31c5dcbe5266eefffcc49ed33bd649c613ff984a9f4812845cb2a59"
	},
	{
		"id": "286d68e2d8a2",
		"ts": "2026-08-24T04:52:08.832Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 637553.26,
		"hash": "286d68e2d8a2ba4e37c8d4197eb5487e47b4bbc1d8c221a7ea542dff950f3583"
	},
	{
		"id": "20c7efa30ab1",
		"ts": "2026-08-24T04:52:10.915Z",
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
		"liquidityUsd": 874833.44,
		"hash": "20c7efa30ab1572a0c947083171f028859004d2725808c0faa34754cf64ace90"
	},
	{
		"id": "49e76382b264",
		"ts": "2026-08-24T04:52:11.131Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4107767.27,
		"hash": "49e76382b264cca7875ec51010a644409fd9edad90b67a3bfd04ec2c105eee0e"
	},
	{
		"id": "5b3311b2fded",
		"ts": "2026-08-24T04:52:11.348Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 119486.51,
		"hash": "5b3311b2fdeddd16564cb297c861eb4bfae60ef029f4c77cb68899d3d5d322e0"
	},
	{
		"id": "f88897f969cd",
		"ts": "2026-08-24T04:52:11.617Z",
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
		"liquidityUsd": 648154.64,
		"hash": "f88897f969cdc0feba6c5465a6394402ae616e66f300055afd61202d563611f3"
	},
	{
		"id": "4bc9501fe32a",
		"ts": "2026-08-24T04:52:11.841Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11072674.55,
		"hash": "4bc9501fe32abe18fdde50f418c1bd082a71f466f6af14e1ee39937089aab948"
	},
	{
		"id": "877dda28a38c",
		"ts": "2026-08-24T04:52:12.060Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 93917.02,
		"hash": "877dda28a38ca37a2e12c7213c49bb3188bb98b0384fa81ce98a147008d89beb"
	},
	{
		"id": "c2e47552ae07",
		"ts": "2026-08-24T04:52:12.279Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 258081.62,
		"hash": "c2e47552ae07f6a98322150aa7564e6af03901855ddb8391ef0a4a0ca6dd36d6"
	},
	{
		"id": "53ff38afea9e",
		"ts": "2026-08-24T04:52:12.535Z",
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
		"liquidityUsd": 866145.29,
		"hash": "53ff38afea9e11c19169e8363ca0b212faed99590941d60389f4b6da81b5a754"
	},
	{
		"id": "73d3f4ff0e9a",
		"ts": "2026-08-24T04:52:12.793Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4226363.3,
		"hash": "73d3f4ff0e9acb79baefad8bbc120065e216bb0a4f7464b4462ce80b0c1231f2"
	},
	{
		"id": "184deed9899a",
		"ts": "2026-08-24T03:58:58.004Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111370718.68,
		"hash": "184deed9899a9406d907bea94998b2bbdb1d59336d28a581e5f7fee325df8367"
	},
	{
		"id": "2f8707b7a73a",
		"ts": "2026-08-24T03:58:58.456Z",
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
		"liquidityUsd": 16748572.58,
		"hash": "2f8707b7a73a485e79d4e270cc8f8b8a551f5e6b915dfcafa76ae544497671b7"
	},
	{
		"id": "f1b845d75f71",
		"ts": "2026-08-24T03:58:58.988Z",
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
		"liquidityUsd": 898864.15,
		"hash": "f1b845d75f716d1b8da4752ca7e85927bd26246584e64f88253aac2425e57fd3"
	},
	{
		"id": "5fc7b1309d7e",
		"ts": "2026-08-24T03:58:59.230Z",
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
		"liquidityUsd": 28471624.31,
		"hash": "5fc7b1309d7eb96efbce290a48e1f6a229b40df0fc31cadaee3e6a80fe327129"
	},
	{
		"id": "ee0c0699baba",
		"ts": "2026-08-24T03:58:59.504Z",
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
		"liquidityUsd": 3414809.56,
		"hash": "ee0c0699baba7901d6ee85bb66ade54647f90a2f150e746d9fc8f8bdf6b6109d"
	},
	{
		"id": "51ddb763c2e1",
		"ts": "2026-08-24T03:58:59.750Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1169298.11,
		"hash": "51ddb763c2e1e427ba4595889343a1db228d0fcbfb7f127c2cf4ee8d1c3174bb"
	},
	{
		"id": "8d12a4f6dbd8",
		"ts": "2026-08-24T03:58:59.985Z",
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
		"liquidityUsd": 498978.73,
		"hash": "8d12a4f6dbd85e28b28ea50f9e704f756cadb6c6372189e53f67efcd412aaa09"
	},
	{
		"id": "26086442e6a0",
		"ts": "2026-08-24T03:59:00.245Z",
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
		"liquidityUsd": 1908139.36,
		"hash": "26086442e6a0d480daf768189ef4987ea27529a9ddb7f1b9df24a75273054fd2"
	},
	{
		"id": "99aeac038524",
		"ts": "2026-08-24T03:59:00.493Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 624589.56,
		"hash": "99aeac038524ea5120ca6260e7a223bacb7c1a477653c37316e736aa2f6460ba"
	},
	{
		"id": "f11bded9371b",
		"ts": "2026-08-24T03:59:00.999Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1352649,
		"hash": "f11bded9371bdd53e6b7f911493d8bc57b02314c724c4d06c619590c648168e0"
	},
	{
		"id": "5632d61b02f8",
		"ts": "2026-08-24T03:59:01.251Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 640199.59,
		"hash": "5632d61b02f853b5ee3dd320ed452a4f315496c63b010908544cb3179ee07f40"
	},
	{
		"id": "1c5ae4ef548c",
		"ts": "2026-08-24T03:59:01.510Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 877415.18,
		"hash": "1c5ae4ef548c418aaf5acaeccd6ced1f848bb1b770600193c2f1c15c9146b553"
	},
	{
		"id": "16c7553b4229",
		"ts": "2026-08-24T03:59:01.750Z",
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
		"liquidityUsd": 4106179.41,
		"hash": "16c7553b42295a2364756f23968554585e3b31d36a42a30e2e1f153835e1c405"
	},
	{
		"id": "948eced65dfb",
		"ts": "2026-08-24T03:59:02.062Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 646724.67,
		"hash": "948eced65dfbc1813d868143092d87d7504047eb9f19480e387b6675d2ef9ee9"
	},
	{
		"id": "3211cb69a133",
		"ts": "2026-08-24T03:59:02.309Z",
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
		"liquidityUsd": 10996466.33,
		"hash": "3211cb69a133514ec92042623a9ed3e569773166817f76066a50daa85fb07bf0"
	},
	{
		"id": "0e31ec861fd3",
		"ts": "2026-08-24T03:59:02.543Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 99440.57,
		"hash": "0e31ec861fd38e156bee29946240859ab29fcc8545b83bba4f03b1e5e48e6915"
	},
	{
		"id": "1ca1d41ed716",
		"ts": "2026-08-24T03:59:02.785Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 112903.42,
		"hash": "1ca1d41ed716bb5a705f961183d01c2decdbc8d6ec3e355237e1d812dca22a25"
	},
	{
		"id": "fa7b93e96bdf",
		"ts": "2026-08-24T03:59:03.016Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 264912.54,
		"hash": "fa7b93e96bdf47f13b0da60aa2e6244fcc85d30c4efe723e28d1a90142ca1cc7"
	},
	{
		"id": "c929c9188a96",
		"ts": "2026-08-24T03:59:03.234Z",
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
		"liquidityUsd": 831381.55,
		"hash": "c929c9188a9655f97a5c94db9b71ef4c273be43685ae22bff5cf087b9fd81ab3"
	},
	{
		"id": "412468df1701",
		"ts": "2026-08-24T03:59:03.459Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4210915.71,
		"hash": "412468df170159603b6bed4fc09ef8b534cecf9546db84ad6d1a444d40c13b5c"
	},
	{
		"id": "58dbc2fb729e",
		"ts": "2026-08-24T02:58:58.669Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111543584.2,
		"hash": "58dbc2fb729eb4ed6f865c425d5b6b24d99172e3d7ed3f6e76b53217570b5ad0"
	},
	{
		"id": "1514a6716650",
		"ts": "2026-08-24T02:58:59.119Z",
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
		"liquidityUsd": 14708299.64,
		"hash": "1514a6716650f13dbb3754131d177b1a217d18a7952bd62fb96b92f481df4722"
	},
	{
		"id": "013fc74e5837",
		"ts": "2026-08-24T02:58:59.559Z",
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
		"liquidityUsd": 900981.94,
		"hash": "013fc74e583724a631d9a6b25de8ec1ae81ee8e5caa9e98bc2904e59c7dcee91"
	},
	{
		"id": "d8b69ba9e488",
		"ts": "2026-08-24T02:58:59.801Z",
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
		"liquidityUsd": 28535290.12,
		"hash": "d8b69ba9e488f3f15384778da006b808ef02f742a9913916429bbf5dcf1bfda5"
	},
	{
		"id": "fabacf91ae34",
		"ts": "2026-08-24T02:59:00.042Z",
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
		"liquidityUsd": 3423374.74,
		"hash": "fabacf91ae3431fdac86b4a0adda11e2dc7bdd211f48e4a8619e83ec76af5a34"
	},
	{
		"id": "819628ab7d39",
		"ts": "2026-08-24T02:59:00.294Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1182902.15,
		"hash": "819628ab7d39b37055e091ec5c4802d7cb6dafb1571a91e7dde0babd34268fa3"
	},
	{
		"id": "0677b4ec0b63",
		"ts": "2026-08-24T02:59:00.532Z",
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
		"liquidityUsd": 500278.95,
		"hash": "0677b4ec0b63eec8ab7fd6bb97bf1fdb3f6583120769499f2cc95259eadefd12"
	},
	{
		"id": "fbedb59e25f2",
		"ts": "2026-08-24T02:59:00.788Z",
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
		"liquidityUsd": 1913313.42,
		"hash": "fbedb59e25f2506059a5b9313be22e5a8c1c5e2cdde8c72b532d14cc06f7ea31"
	},
	{
		"id": "c1c94d2d1784",
		"ts": "2026-08-24T02:59:01.152Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 597021.95,
		"hash": "c1c94d2d1784a4abb50200360234a5939d6949393da1a7595bb7a88553817532"
	},
	{
		"id": "905660c8dd7e",
		"ts": "2026-08-24T02:59:01.405Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1335281.21,
		"hash": "905660c8dd7e5e2ab1bdb584c890f5a926052371d167e3f8fa16159e5cf9d496"
	},
	{
		"id": "4e1db06a3ae7",
		"ts": "2026-08-24T02:59:01.684Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 648620.27,
		"hash": "4e1db06a3ae70f8c99d49bf463a8ea9731a00ce385bc4e9d715162d069d91350"
	},
	{
		"id": "0a537ac61553",
		"ts": "2026-08-24T02:59:02.154Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 835842.02,
		"hash": "0a537ac61553ace4b38809842a9769e2ae9b11bd818c0de0b59c79fec08b8349"
	},
	{
		"id": "f816cf9db458",
		"ts": "2026-08-24T02:59:02.390Z",
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
		"liquidityUsd": 4110144.84,
		"hash": "f816cf9db45839eb2ca615d3ab2cd24cb39975d0b1f77cf7166f4f8538867511"
	},
	{
		"id": "37a86e7681ce",
		"ts": "2026-08-24T02:59:02.879Z",
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
		"liquidityUsd": 11090124.67,
		"hash": "37a86e7681ce1eb7173b767bde84996b05ac3c2fb0589cb84227d34048abc598"
	},
	{
		"id": "5a74c2c540a7",
		"ts": "2026-08-24T02:59:03.170Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 647522.64,
		"hash": "5a74c2c540a7242ffbcc3cf408b5a32fe8100451772814e244080e2cb01ce013"
	},
	{
		"id": "b66dac959abe",
		"ts": "2026-08-24T02:59:03.389Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 296254.54,
		"hash": "b66dac959abede68bc07e8cfdf5db96a57d06d771bd5da31336212dee65d7481"
	},
	{
		"id": "4daf879c55c9",
		"ts": "2026-08-24T02:59:03.609Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 115221.06,
		"hash": "4daf879c55c96e5d8c1c6e49e431fd2c37349a73131feb470503b308ccfaac2f"
	},
	{
		"id": "d13780c1e9e5",
		"ts": "2026-08-24T02:59:03.830Z",
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
		"liquidityUsd": 809261.94,
		"hash": "d13780c1e9e571bd44e07f15c4a36152e4663eb0a237070d723af5fb59adf304"
	},
	{
		"id": "515dcc1653ab",
		"ts": "2026-08-24T02:59:04.075Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 100178.52,
		"hash": "515dcc1653ab2581e08414bb8187089262871b178e9c456a9e419bd8423129eb"
	},
	{
		"id": "c62199e8fdd1",
		"ts": "2026-08-24T02:59:04.296Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4226851.26,
		"hash": "c62199e8fdd17a149e7db711ef8639da946c6ac8f7b4037cac0efa7b824a9c8c"
	},
	{
		"id": "53b678410163",
		"ts": "2026-08-24T01:02:59.352Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111664990.96,
		"hash": "53b678410163a2b48952157763312fc4467933165564ac60de28182e109f9074"
	},
	{
		"id": "b2ea89e1f7b1",
		"ts": "2026-08-24T01:02:59.800Z",
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
		"liquidityUsd": 18964360.37,
		"hash": "b2ea89e1f7b109b24cf6b4eaef025ca0e15180f33a0650d33c522a7d115bc028"
	},
	{
		"id": "23b18c7c9517",
		"ts": "2026-08-24T01:03:00.054Z",
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
		"liquidityUsd": 894754.72,
		"hash": "23b18c7c9517db23c7aa910d3a0e6efd41f5b29efd09f5f2d163791b3eb9a676"
	},
	{
		"id": "85cdbb945d94",
		"ts": "2026-08-24T01:03:00.531Z",
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
		"liquidityUsd": 28604106.85,
		"hash": "85cdbb945d948e661de2c197cdadd47026bc9d226c27f3a57b2261aecd5f16e7"
	},
	{
		"id": "8fc799b0a688",
		"ts": "2026-08-24T01:03:00.981Z",
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
		"liquidityUsd": 3480839.84,
		"hash": "8fc799b0a688d9a49ed167ecceb9d5bf8d79e09bc164103a7094142998b8af78"
	},
	{
		"id": "fc932ccb01b4",
		"ts": "2026-08-24T01:03:01.424Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1194377.22,
		"hash": "fc932ccb01b420809e4e267973daff7051dea152d9890ade34039f79b4ec7e80"
	},
	{
		"id": "289e9b5967e4",
		"ts": "2026-08-24T01:03:01.690Z",
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
		"liquidityUsd": 500783.86,
		"hash": "289e9b5967e43d2d981b90052af2c00d77bd0242fd66e7294ad2f658d5581864"
	},
	{
		"id": "436aa12a5c4e",
		"ts": "2026-08-24T01:03:01.974Z",
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
		"liquidityUsd": 1930559.74,
		"hash": "436aa12a5c4eb4190c21b7ff1b38eaf8989ca05bfc9b584c215664caf7b8a546"
	},
	{
		"id": "f28571f06feb",
		"ts": "2026-08-24T01:03:02.222Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 602125.3,
		"hash": "f28571f06feb59fccf425238adb517312b6b6a88449147bdabc394ea04dae3c5"
	},
	{
		"id": "277f681f9a6a",
		"ts": "2026-08-24T01:03:02.513Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1337525.41,
		"hash": "277f681f9a6a36a45764312cf271bd80a7f430f686278349b608c887ccff16dd"
	},
	{
		"id": "28d2d97cbffc",
		"ts": "2026-08-24T01:03:02.787Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 655758.07,
		"hash": "28d2d97cbffc52b467eadfa4f25074e9acce6b494701fa4e8fe2a681da29fd46"
	},
	{
		"id": "a0c260a7d353",
		"ts": "2026-08-24T01:03:03.028Z",
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
		"liquidityUsd": 4133930.95,
		"hash": "a0c260a7d35394619a6d2dcbc922eebcec8c13a69e7d4d19ab9000a8c6aae46d"
	},
	{
		"id": "9324999c4c53",
		"ts": "2026-08-24T01:03:03.550Z",
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
		"liquidityUsd": 11097206.5,
		"hash": "9324999c4c53b01127ed026ebdd707d50fea87e2940d490ec67a4f18502e96fb"
	},
	{
		"id": "ce0bc0e3a99f",
		"ts": "2026-08-24T01:03:03.790Z",
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
		"liquidityUsd": 838682.22,
		"hash": "ce0bc0e3a99fa29905e2c51e7b6edd66dad79fc2aa46b16a4bd1d9a2cbd88e00"
	},
	{
		"id": "350ab6a7934e",
		"ts": "2026-08-24T01:03:04.023Z",
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
		"liquidityUsd": 675609.14,
		"hash": "350ab6a7934e45d9c6978b8ec1d788eb17e57a356973882af0a6b2eaf0e275d3"
	},
	{
		"id": "d5099ae7e014",
		"ts": "2026-08-24T01:03:04.270Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3418705.85,
		"hash": "d5099ae7e014ae278a9e50fb54aadbf91248f89b1119408f612145aa6d87b7bb"
	},
	{
		"id": "c1ed7fa5eb2c",
		"ts": "2026-08-24T01:03:04.500Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 264746.73,
		"hash": "c1ed7fa5eb2cd973b37eb6b15c94847da35e39479ba92fbdbbca7634d904b38a"
	},
	{
		"id": "8eda8b6121fc",
		"ts": "2026-08-24T01:03:04.738Z",
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
		"liquidityUsd": 832423.23,
		"hash": "8eda8b6121fca1efedfe462ed7de54783f38fcf5ec4549ceeb1d19fe7fe41631"
	},
	{
		"id": "d608aa5d46f2",
		"ts": "2026-08-24T01:03:04.975Z",
		"symbol": "GAME",
		"token": "0x1C4CcA7C5DB003824208aDDA61Bd749e55F463a3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2897127.21,
		"hash": "d608aa5d46f22358faf2843ade194af4b3a39ab5951e5027638e63531401741c"
	},
	{
		"id": "e5896d30fdd8",
		"ts": "2026-08-24T01:03:05.907Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 121530.87,
		"hash": "e5896d30fdd8b5e0b406cb1780173be38a188fb14c7e6c7f8a14336d3da40b4d"
	},
	{
		"id": "6699185ed75d",
		"ts": "2026-08-23T23:16:55.137Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111491437.08,
		"hash": "6699185ed75dcf800dbfd7dd1b25aa95014984f0530dc12e598a676a555f525b"
	},
	{
		"id": "57ef43fe9711",
		"ts": "2026-08-23T23:16:55.370Z",
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
		"liquidityUsd": 16642243.02,
		"hash": "57ef43fe97112138ee6daa7f1993c9eba9833893297f4a5d9fe87832071a8130"
	},
	{
		"id": "c27fef0b2d2a",
		"ts": "2026-08-23T23:16:55.818Z",
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
		"liquidityUsd": 891768.43,
		"hash": "c27fef0b2d2ac7906c7e51162ef6d187dcc30e6a5db30c56fbb3f99985024e82"
	},
	{
		"id": "b312cd6e09db",
		"ts": "2026-08-23T23:16:56.048Z",
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
		"liquidityUsd": 28683347.23,
		"hash": "b312cd6e09dbd80a834830d6b01dac775a7ca9dac18550d73a55eb4dd2d2c2bb"
	},
	{
		"id": "b1119f234b10",
		"ts": "2026-08-23T23:16:56.288Z",
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
		"liquidityUsd": 3482466.49,
		"hash": "b1119f234b1022612b4a54f2b40272426d1f9d305f9db92e1a6fbcd8b39f0e8d"
	},
	{
		"id": "7786ae4074fb",
		"ts": "2026-08-23T23:16:56.523Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1220626.15,
		"hash": "7786ae4074fb258b9ab035a4cb2857116973c2423320cabef62f7fea65b0eeba"
	},
	{
		"id": "382a6f1614c3",
		"ts": "2026-08-23T23:16:56.781Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 910779.64,
		"hash": "382a6f1614c3827b5f061e4c5de1809465d6879859121295a3c9039844476f83"
	},
	{
		"id": "82ced0566968",
		"ts": "2026-08-23T23:16:57.015Z",
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
		"liquidityUsd": 1921129.59,
		"hash": "82ced0566968ecd4e8a675a17fab9b0cbc394059f5fdf83c5430d106c91baafa"
	},
	{
		"id": "76471be435ab",
		"ts": "2026-08-23T23:16:57.242Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1316757.59,
		"hash": "76471be435ab08e79bba2e3bdec5454381e7402a01f4e075cff8ea12be2cb1ae"
	},
	{
		"id": "2d6ac8a9c755",
		"ts": "2026-08-23T23:16:57.478Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 640188.05,
		"hash": "2d6ac8a9c75516537890ffda9aa5ca2be9a60fa0e02d0df3955f65b43d8fbd5a"
	},
	{
		"id": "7774cac5888c",
		"ts": "2026-08-23T23:16:57.687Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 654795.64,
		"hash": "7774cac5888c00037cac7634ed207e14dd2b6c9dcdcb39bd309806c2a3d8935f"
	},
	{
		"id": "7926f2fc555c",
		"ts": "2026-08-23T23:16:57.910Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4106701.27,
		"hash": "7926f2fc555c04e58e26bfe15047586432be5a4d32f446788593d8c56e78bd06"
	},
	{
		"id": "b265e3990891",
		"ts": "2026-08-23T23:16:58.125Z",
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
		"liquidityUsd": 882908.8,
		"hash": "b265e399089173d729a6f88a92d80fccd2dc78a486d2700a7556b7b2d23a37b9"
	},
	{
		"id": "12f721e27365",
		"ts": "2026-08-23T23:16:58.341Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11062362.62,
		"hash": "12f721e2736519dfb88e14fc3b3acaf7ef9f9ed25f0e359cdc5b3d1851db1b1a"
	},
	{
		"id": "01c8ead8d4ea",
		"ts": "2026-08-23T23:16:58.559Z",
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
		"liquidityUsd": 685298.86,
		"hash": "01c8ead8d4ea4549b30707c6940de28ef5f81e3d60bf223404394200cd6b2f3f"
	},
	{
		"id": "a09e4385bf36",
		"ts": "2026-08-23T23:16:58.771Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3480578.98,
		"hash": "a09e4385bf369cb7e49490869ecd7fb64a7bbd6333bfc0a6cbab5c3c8ff5fdd2"
	},
	{
		"id": "ec8198532142",
		"ts": "2026-08-23T23:16:58.989Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 270918.1,
		"hash": "ec8198532142871002c949dcea921038b5e38c219dbd2cb02335814dba9073f4"
	},
	{
		"id": "9e0d5e8f4e1d",
		"ts": "2026-08-23T23:16:59.211Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 117287.18,
		"hash": "9e0d5e8f4e1d01dd2a4e80608e366f1dcfbb98bc71addfe611ebc287dbc639b6"
	},
	{
		"id": "31d8b9d51dea",
		"ts": "2026-08-23T23:16:59.437Z",
		"symbol": "GAME",
		"token": "0x1C4CcA7C5DB003824208aDDA61Bd749e55F463a3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2939570.56,
		"hash": "31d8b9d51dea17668dc2bb05733d93bef2ee6a025146ca46f4e056fd215e1e3d"
	},
	{
		"id": "5ca4646c90ed",
		"ts": "2026-08-23T23:16:59.654Z",
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
		"liquidityUsd": 853444.71,
		"hash": "5ca4646c90edccf8840aff5d4529f15da4dd18589e35e1ce0e1829a3a97fe178"
	}
]
