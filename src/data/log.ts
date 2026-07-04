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
	"updatedAt": "2026-07-04T14:26:27.396Z",
	"tokensScored": 1353,
	"verdictsIssued": 1353,
	"safe": 1188,
	"risky": 129,
	"likelyRug": 36,
	"ticks": 94
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "db35cc99d7ff",
		"ts": "2026-07-04T14:26:23.693Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100705017.33,
		"hash": "db35cc99d7ffb01b3bc286ae584c881e3c3548b0260d8421063098f91f6b329c"
	},
	{
		"id": "5c65f0dc66f3",
		"ts": "2026-07-04T14:26:24.136Z",
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
		"liquidityUsd": 16493678.48,
		"hash": "5c65f0dc66f3c4f8a0a85db4036df9735849a52c893474dff7e4c88a0d243071"
	},
	{
		"id": "204fb776d3fe",
		"ts": "2026-07-04T14:26:24.376Z",
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
		"liquidityUsd": 1397995.27,
		"hash": "204fb776d3fe7c4cc7140972e9bf85d09983ced660a933bb12ab4d7c05e6bb79"
	},
	{
		"id": "069165f7399f",
		"ts": "2026-07-04T14:26:24.617Z",
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
		"liquidityUsd": 32338750.14,
		"hash": "069165f7399f33bb9d2d7b6f6d29afeb44d60561ac3d68db773821600855f69b"
	},
	{
		"id": "3cdfc0d7da1f",
		"ts": "2026-07-04T14:26:24.862Z",
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
		"liquidityUsd": 4167572.33,
		"hash": "3cdfc0d7da1fdb2cee8370510ca4db4d7f31b37a1aa8e4effde5531fd8e293e8"
	},
	{
		"id": "57bac050e4bf",
		"ts": "2026-07-04T14:26:25.107Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 999561.02,
		"hash": "57bac050e4bfd86950f5d3d894d9e2f7a1b8bda9fa73984d06e8439828e46139"
	},
	{
		"id": "01bfadeca763",
		"ts": "2026-07-04T14:26:25.343Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 32336694.43,
		"hash": "01bfadeca763452a5adcb4abb51849749979654f563dea6f29b70a88563b421c"
	},
	{
		"id": "ab7383258747",
		"ts": "2026-07-04T14:26:25.593Z",
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
		"liquidityUsd": 2459967.01,
		"hash": "ab7383258747bc613605a5eecb7b232836275d6fb871924e8caea6e9fd39f7f2"
	},
	{
		"id": "4ec99c383a69",
		"ts": "2026-07-04T14:26:25.830Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2323957.18,
		"hash": "4ec99c383a696e7d0588c41781062298252d957706ed78ad27f9b115d934eb74"
	},
	{
		"id": "98167f04d84a",
		"ts": "2026-07-04T14:26:26.067Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 368900.87,
		"hash": "98167f04d84ad74bdbd3e691ce248f237122f95602165fba188b68b0db49d4b5"
	},
	{
		"id": "f9470106220c",
		"ts": "2026-07-04T14:26:26.289Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3785689.91,
		"hash": "f9470106220c5cbf039364f910cc9cd83dce272d05037beb907d3556d10d8a0f"
	},
	{
		"id": "402f6ae59483",
		"ts": "2026-07-04T14:26:26.510Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7968124.08,
		"hash": "402f6ae59483d9bc232b00bcd5f90be970943348b7dc26bfdada2ff24bfe5da9"
	},
	{
		"id": "751da18d7bf4",
		"ts": "2026-07-04T14:26:26.729Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4938536.08,
		"hash": "751da18d7bf48a4ca41da4fc979506e1a30269ba1f2431ec7a1949c6cd3bca50"
	},
	{
		"id": "54f5bc63d3e1",
		"ts": "2026-07-04T14:26:26.955Z",
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
		"liquidityUsd": 1615897.5,
		"hash": "54f5bc63d3e1805e59dbec8fe367a41463f1cb707a7e56e63baa40503fb121b3"
	},
	{
		"id": "4195ab664a01",
		"ts": "2026-07-04T14:26:27.175Z",
		"symbol": "Claude",
		"token": "0x7F42440C1E87187F523aE48980E7386508804B07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 857531.57,
		"hash": "4195ab664a011615e3310219801a0cf0710c29cd72c0fe4a030776c9ace5a511"
	},
	{
		"id": "81857727f144",
		"ts": "2026-07-04T14:26:27.395Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2153512.62,
		"hash": "81857727f144d105ff315a701c7f805201f70e22e3a2b951e6916c07211718ea"
	},
	{
		"id": "00ffa28c2aa9",
		"ts": "2026-07-04T12:04:36.904Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100380468,
		"hash": "00ffa28c2aa9b9f4aa67c5e43d31410e400a9ecab3e0c2f042a0677e305ddbf6"
	},
	{
		"id": "b7823de3f51a",
		"ts": "2026-07-04T12:04:37.246Z",
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
		"liquidityUsd": 15987163.34,
		"hash": "b7823de3f51a1ef3b058d2bcb58f328dcbaadd03fc8b96c64309eb2fc18c7553"
	},
	{
		"id": "65669369cee6",
		"ts": "2026-07-04T12:04:37.440Z",
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
		"liquidityUsd": 1386357.42,
		"hash": "65669369cee678927be63341958571806b285a5823266af2bc36af64f4c026bb"
	},
	{
		"id": "f41f0a20bba3",
		"ts": "2026-07-04T12:04:37.641Z",
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
		"liquidityUsd": 31941529.18,
		"hash": "f41f0a20bba37c30cc6e3d946fe62b26b1f24dcda966a5393bbfeb4b5aac1503"
	},
	{
		"id": "fc240f34bab7",
		"ts": "2026-07-04T12:04:37.830Z",
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
		"liquidityUsd": 4139063.34,
		"hash": "fc240f34bab7a725e2997ab87e13c952589c1317c727306d6e90552b8f71721e"
	},
	{
		"id": "eb38f725a706",
		"ts": "2026-07-04T12:04:38.015Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1000290.58,
		"hash": "eb38f725a706b19c08dda310bb5ed5baa514fc071354ef10010ec58c82cb19b7"
	},
	{
		"id": "58d96c5942a0",
		"ts": "2026-07-04T12:04:38.226Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 31960619.86,
		"hash": "58d96c5942a0dde35287ff0d17374ec9a8db1c2bfcf740c11aaa250c87a8bcec"
	},
	{
		"id": "bd1880350113",
		"ts": "2026-07-04T12:04:38.416Z",
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
		"liquidityUsd": 2442891.53,
		"hash": "bd18803501131f83f409e01ae798e698162632ed7020523b27b6d8e76fa761b8"
	},
	{
		"id": "ebd128ce586a",
		"ts": "2026-07-04T12:04:38.603Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2276480.7,
		"hash": "ebd128ce586aaf21f94f93fc8f2de1917ffe9878a301968539abd404df296832"
	},
	{
		"id": "3c67cafbdc05",
		"ts": "2026-07-04T12:04:38.790Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 388803.09,
		"hash": "3c67cafbdc052029b69c05feeac9f52bf0cd8ecf194de927fc60ef9b0d780678"
	},
	{
		"id": "36d5a3861cee",
		"ts": "2026-07-04T12:04:38.974Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3934528.01,
		"hash": "36d5a3861ceeaed646f85b3b97254e3433818caf7e0df4d2130504a3ca552a50"
	},
	{
		"id": "d3719b1764a7",
		"ts": "2026-07-04T12:04:39.170Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4993467.51,
		"hash": "d3719b1764a7fe8db484c4ee7f42de15372847bb826d2ccaf5ec9d0f9a24a024"
	},
	{
		"id": "432cb531e91c",
		"ts": "2026-07-04T12:04:39.349Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7889859.53,
		"hash": "432cb531e91c489ee3334055fc90a14d8eb90ed2f3352dfe9ec31572524bf808"
	},
	{
		"id": "0ee3cf88c9e8",
		"ts": "2026-07-04T12:04:39.535Z",
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
		"liquidityUsd": 1624388.98,
		"hash": "0ee3cf88c9e831c73eaec01b5c76473a9b4a35bd028e0c3720d1da79dc4fbf04"
	},
	{
		"id": "c4b27dab180b",
		"ts": "2026-07-04T12:04:39.719Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2139185.82,
		"hash": "c4b27dab180b7222d86e023bab1459d1ce76339cf51d095765a06bd24a5b8bb3"
	},
	{
		"id": "0014d0421f0d",
		"ts": "2026-07-04T12:04:39.908Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 920490.64,
		"hash": "0014d0421f0ddda354325e5bf170fe42f51c86079d41fc900eec471c98a49424"
	},
	{
		"id": "d5b28394616a",
		"ts": "2026-07-04T10:05:53.713Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100353338.27,
		"hash": "d5b28394616a10a566b2e7f77f64b0ed4d91a0f27acc7c918e2279645c2d493f"
	},
	{
		"id": "d847fcdc29b1",
		"ts": "2026-07-04T10:05:54.097Z",
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
		"liquidityUsd": 16200862.79,
		"hash": "d847fcdc29b1e7436c203a4ee0c955209d021f2142cdb54b676fb58e36a40464"
	},
	{
		"id": "20856553fb31",
		"ts": "2026-07-04T10:05:54.299Z",
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
		"liquidityUsd": 1392597.85,
		"hash": "20856553fb317488a0a6e1b122ccd984df740a7860c5056c4be84f03c6fbaf94"
	},
	{
		"id": "12b657c89ca3",
		"ts": "2026-07-04T10:05:54.502Z",
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
		"liquidityUsd": 31695872.93,
		"hash": "12b657c89ca307f479824e4fd330c5fec88812ec1a589ad473682f8e96aa9a7e"
	},
	{
		"id": "0fc032e2c97a",
		"ts": "2026-07-04T10:05:54.721Z",
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
		"liquidityUsd": 4133467.43,
		"hash": "0fc032e2c97a40045defa78a25041a227552540992f7d788bf8b36554a56354b"
	},
	{
		"id": "c758ba3fd88f",
		"ts": "2026-07-04T10:05:54.925Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1000290.58,
		"hash": "c758ba3fd88fdeeda4170b59d081e075dce3f7ea55680ebeb6664c62e1209cfa"
	},
	{
		"id": "3447b97a1edb",
		"ts": "2026-07-04T10:05:55.152Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 31695872.93,
		"hash": "3447b97a1edb4ed5903f346d599e496b5c507cc2305029a73f031e30cfff5c6a"
	},
	{
		"id": "18e4c713d1c4",
		"ts": "2026-07-04T10:05:55.387Z",
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
		"liquidityUsd": 2419003.94,
		"hash": "18e4c713d1c4e8b00e124e712475456a878a67d903b774be5668720c320f777d"
	},
	{
		"id": "9f8432257296",
		"ts": "2026-07-04T10:05:55.589Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 390692.07,
		"hash": "9f8432257296c5b56d0a62a95fea6ac2f04285d1d8e267761d7857ab04cf8a4f"
	},
	{
		"id": "113846bf6fc0",
		"ts": "2026-07-04T10:05:55.792Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2256330.02,
		"hash": "113846bf6fc0c5c91d6e6461c3008368f2ce65162047dd714f9cf24d68a8c528"
	},
	{
		"id": "8c6e8197dab4",
		"ts": "2026-07-04T10:05:55.983Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3675865.13,
		"hash": "8c6e8197dab443e2be9dd45de81ef3ddef2ebbb800cb12bce4ca5ab848a2fdf4"
	},
	{
		"id": "1cac8e985118",
		"ts": "2026-07-04T10:05:56.173Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8011538.6,
		"hash": "1cac8e985118b30fa1cf1e34fa6fd4ebea9c54b90d53a16e14a4db6b736c6737"
	},
	{
		"id": "fe820dc634e8",
		"ts": "2026-07-04T10:05:56.365Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4957831.2,
		"hash": "fe820dc634e849b726f57bbf2083e1248ea0c7cb87a901752bd9cb65708616f7"
	},
	{
		"id": "c606eef807f4",
		"ts": "2026-07-04T10:05:57.174Z",
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
		"liquidityUsd": 1565653.9,
		"hash": "c606eef807f4af20398b4e79f0dfbae9f8effedde543c7949e08672b6f130bc1"
	},
	{
		"id": "eff11056dd2f",
		"ts": "2026-07-04T10:05:57.366Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2123752.78,
		"hash": "eff11056dd2f2b43a6c8092a912aec3f76e72506ec9a195984277f7e3b6a4ed3"
	},
	{
		"id": "7266ce9bc518",
		"ts": "2026-07-04T10:05:58.334Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1930207.8,
		"hash": "7266ce9bc518b51c5eae4161e672540079baf4664f6eff7c939e4be7fb55b92b"
	},
	{
		"id": "043e1e3d466b",
		"ts": "2026-07-04T07:42:47.809Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100180214.17,
		"hash": "043e1e3d466b7b9492eb3e75bf0e1b8e3f2f810f3e3c0386a69d1173eaaf8df8"
	},
	{
		"id": "5111c6a57023",
		"ts": "2026-07-04T07:42:48.199Z",
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
		"liquidityUsd": 15557033.56,
		"hash": "5111c6a5702367ef7874a004bcafa682e60d9bb0aa38bd1b5a7693f77cd16f60"
	},
	{
		"id": "21588f6875e3",
		"ts": "2026-07-04T07:42:48.394Z",
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
		"liquidityUsd": 1398103.81,
		"hash": "21588f6875e3d2ad7175faffddabd678f9fa40641c4522135914459f69edc71d"
	},
	{
		"id": "54435876b02d",
		"ts": "2026-07-04T07:42:48.587Z",
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
		"liquidityUsd": 31116251.57,
		"hash": "54435876b02deaa5257662ff522c4964e304ae29f7ca0d4345a8de7ff3c9dbc1"
	},
	{
		"id": "b31d1eb6e99d",
		"ts": "2026-07-04T07:42:48.778Z",
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
		"liquidityUsd": 4146811.21,
		"hash": "b31d1eb6e99d3d0d3c65fd9e6db979ba3d77e6ad449aae6a4da896135e94db76"
	},
	{
		"id": "e409792f995a",
		"ts": "2026-07-04T07:42:48.990Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 995697.7,
		"hash": "e409792f995a312a5bd7182ad3291c0e44480a8e86703936c5306581bb262299"
	},
	{
		"id": "53b7b102ac90",
		"ts": "2026-07-04T07:42:49.202Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 31116251.57,
		"hash": "53b7b102ac90f19b97026dc77de4f0548c77466c99efc029095b61821c23e6c8"
	},
	{
		"id": "f7d8f4680309",
		"ts": "2026-07-04T07:42:49.393Z",
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
		"liquidityUsd": 2411948.07,
		"hash": "f7d8f46803099e2972901d33de44a3db9554968e7a7977e1e758419e88f104f4"
	},
	{
		"id": "61e2ef84bd12",
		"ts": "2026-07-04T07:42:49.585Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 405579.2,
		"hash": "61e2ef84bd1216d83124cebd6c2d770515a595da1fcd24884187d45ea6aa5c52"
	},
	{
		"id": "3bcffed2dc77",
		"ts": "2026-07-04T07:42:49.780Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4161847.88,
		"hash": "3bcffed2dc77aa0183794805a32ef8e271f47f4484041f0d3615b9732534b20a"
	},
	{
		"id": "b98dfb2b0f6d",
		"ts": "2026-07-04T07:42:49.963Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2263295.61,
		"hash": "b98dfb2b0f6d412790686dfbb11aa2947df5525182de8215a6f4bf367e0dc919"
	},
	{
		"id": "920f992eb156",
		"ts": "2026-07-04T07:42:50.142Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4946502.97,
		"hash": "920f992eb1561b02d43421acb0599f66d11a81d865de387179762eff1ef98490"
	},
	{
		"id": "ef6c2d138404",
		"ts": "2026-07-04T07:42:50.329Z",
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
		"liquidityUsd": 8070792.3,
		"hash": "ef6c2d138404b33538d14c3bcbd44e8babc57984333fc1f6df6b3f128ede35ae"
	},
	{
		"id": "3012296efe50",
		"ts": "2026-07-04T07:42:50.507Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1935478.07,
		"hash": "3012296efe504f9004304286f5b14f3eb6831a1b4350c2ea346e524e193f63b4"
	},
	{
		"id": "f5b59c6b9ebb",
		"ts": "2026-07-04T07:42:50.682Z",
		"symbol": "OpenAI",
		"token": "0x454777B9a11EC75B23E809F1cE3d4b30De7fAB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 483101.23,
		"hash": "f5b59c6b9ebbe8c110706a78b27f93e123ec4a1488b9ad5cbc87068f01421bac"
	},
	{
		"id": "942240d7629f",
		"ts": "2026-07-04T07:42:51.541Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2110623.5,
		"hash": "942240d7629fedda591d9f2519ecf7caa352a08943d2747590d86d56a2e130a6"
	},
	{
		"id": "0e71bc419b9e",
		"ts": "2026-07-04T07:42:51.715Z",
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
		"liquidityUsd": 1444632.18,
		"hash": "0e71bc419b9eb7e93d0ad6708c4f63f721c00c7be7080cd2159753ea33738db3"
	},
	{
		"id": "cd995d8f553c",
		"ts": "2026-07-04T04:32:21.951Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 99962364.18,
		"hash": "cd995d8f553c1854004e545076d90fbf060a3dc5afcd5d890e7bcb29484f4a9d"
	},
	{
		"id": "c423d6b5e701",
		"ts": "2026-07-04T04:32:22.401Z",
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
		"liquidityUsd": 15853431.22,
		"hash": "c423d6b5e701a3c64efd36b50f90628699c54577d576509893fad0259dfff30e"
	},
	{
		"id": "d28817063ad2",
		"ts": "2026-07-04T04:32:22.861Z",
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
		"liquidityUsd": 1399784.75,
		"hash": "d28817063ad29c68389f2b845e6d712073a8706be0d17a106f7ddca1791ddec9"
	},
	{
		"id": "b38944586dd2",
		"ts": "2026-07-04T04:32:23.132Z",
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
		"liquidityUsd": 31138083.72,
		"hash": "b38944586dd2859445264c195e5790b069a7124ab5f7068937ea4588ba1a98ab"
	},
	{
		"id": "53389131c42a",
		"ts": "2026-07-04T04:32:23.375Z",
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
		"liquidityUsd": 4169139.59,
		"hash": "53389131c42a59aee3f54f02a9e33d33403b3572358146b9218a6fc9f7e6cf6d"
	},
	{
		"id": "e13e95e07696",
		"ts": "2026-07-04T04:32:23.619Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1002336.01,
		"hash": "e13e95e0769674d1f0d252717cf98714514b359853207e25bc5a32427aadbbd5"
	},
	{
		"id": "00dcbd5af52b",
		"ts": "2026-07-04T04:32:23.868Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 31138083.72,
		"hash": "00dcbd5af52b4c1a24ab0164c1f75b77b7feae0d7d69914a3862545e9115968e"
	},
	{
		"id": "51cbce5aef33",
		"ts": "2026-07-04T04:32:24.112Z",
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
		"liquidityUsd": 2428664.26,
		"hash": "51cbce5aef3356bafd24c7cfeda80ae877f9b1af3e17609e933a9176c1bacfdc"
	},
	{
		"id": "21f1b63bc858",
		"ts": "2026-07-04T04:32:24.357Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 403808.06,
		"hash": "21f1b63bc8584b31212e88900d44f8a8fd27dfb550a22aaec0741ac90210ae43"
	},
	{
		"id": "d276d13827bc",
		"ts": "2026-07-04T04:32:24.601Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3180207.83,
		"hash": "d276d13827bcdbc9347c58109550be73c87bfe1a3755ed82b87ecd559a076e90"
	},
	{
		"id": "e4190f893a7b",
		"ts": "2026-07-04T04:32:24.828Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2227637.26,
		"hash": "e4190f893a7b4950bd57eee776d69bcd8c7b671623a2af81b56b18ccb260164d"
	},
	{
		"id": "5b867ec1480f",
		"ts": "2026-07-04T04:32:25.055Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4986345.95,
		"hash": "5b867ec1480fb7e9e75068afab815994d80be5aa7159bde2bb23a62fc3964660"
	},
	{
		"id": "dd9bbacbbd95",
		"ts": "2026-07-04T04:32:25.411Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 243574.66,
		"hash": "dd9bbacbbd95253b41800da75f1eab3a511e721766b21b03e83fa7499c54a820"
	},
	{
		"id": "ba2119794c63",
		"ts": "2026-07-04T04:32:25.641Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7970257.36,
		"hash": "ba2119794c63e55f87ca4fd5ae9b0b784c76611393e711b8828c53e7c685b3f9"
	},
	{
		"id": "0121c01cca83",
		"ts": "2026-07-04T04:32:25.869Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1866903.4,
		"hash": "0121c01cca836cc442d14bb9455d34da282148bc318dc6c8b1ef64143240d823"
	},
	{
		"id": "dece3ebb0805",
		"ts": "2026-07-04T04:32:26.095Z",
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
		"liquidityUsd": 1393123.54,
		"hash": "dece3ebb080549600f42e27e75fed6b0d495b7644c070a6d856e0639e311e89b"
	},
	{
		"id": "e7492cdaeeb9",
		"ts": "2026-07-04T04:32:26.321Z",
		"symbol": "OpenAI",
		"token": "0x454777B9a11EC75B23E809F1cE3d4b30De7fAB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 489367.74,
		"hash": "e7492cdaeeb9f7af48620047a5f91be763827d94bda5cf54ad26394d37e79807"
	},
	{
		"id": "04d075d38a29",
		"ts": "2026-07-04T00:10:44.042Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100083157.58,
		"hash": "04d075d38a290cbdd60596292590bbad52119d90cec3f4a11d31694da41cfaad"
	},
	{
		"id": "6a4a803e13d7",
		"ts": "2026-07-04T00:10:44.597Z",
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
		"liquidityUsd": 15574912.21,
		"hash": "6a4a803e13d76eb2016fd608969def8ea15017a8e43b9b191f8489843860b713"
	},
	{
		"id": "b6c18bde9974",
		"ts": "2026-07-04T00:10:44.858Z",
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
		"liquidityUsd": 1411811.44,
		"hash": "b6c18bde9974f7dd57d75595e15db605b78ed3fc9f893fe97735a2d81bc549d9"
	},
	{
		"id": "1f711f943fa5",
		"ts": "2026-07-04T00:10:45.111Z",
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
		"liquidityUsd": 31234803.51,
		"hash": "1f711f943fa566cf2bb9de4994758ffb925b841367063e77ac00eac1fb11b7c8"
	},
	{
		"id": "7c8014ed6a62",
		"ts": "2026-07-04T00:10:45.464Z",
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
		"liquidityUsd": 4188295.37,
		"hash": "7c8014ed6a6260871959edc7e93fb48244f2c21806fd2261a2ef2e2dc2edefe5"
	},
	{
		"id": "a65ae45d48bf",
		"ts": "2026-07-04T00:10:45.750Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 991825.78,
		"hash": "a65ae45d48bfe42dac49c3d78d79ce9c7ff9e7db182d8ca5cc51e6777bb183b9"
	},
	{
		"id": "e9b5122fe27f",
		"ts": "2026-07-04T00:10:46.138Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 31234803.51,
		"hash": "e9b5122fe27f809f5e00023fdd7850a5c5976589a633483454e49dac39d1cb9e"
	},
	{
		"id": "89dd62e746d7",
		"ts": "2026-07-04T00:10:46.402Z",
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
		"liquidityUsd": 2402959.96,
		"hash": "89dd62e746d738d6eea18ec5941dd6dfe48ba41907ac5c10d4cdd404576c5d3c"
	},
	{
		"id": "57c095dc6f83",
		"ts": "2026-07-04T00:10:46.664Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3346518.57,
		"hash": "57c095dc6f8386b4a25d66e59ab3bb3de68b0610b1d30e3a5fc8bfe223684e7e"
	},
	{
		"id": "7236e1cb0521",
		"ts": "2026-07-04T00:10:47.876Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 391182.64,
		"hash": "7236e1cb052186e1d69328c1cbb7719661063d98848c9f85aa6ed45e8799ae48"
	},
	{
		"id": "c1802a3b0ff0",
		"ts": "2026-07-04T00:10:48.118Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2315431.11,
		"hash": "c1802a3b0ff0176991b8f67750d445c4c2e8ac236e809fe8e13ae5667372ddfd"
	},
	{
		"id": "b81bf10e1557",
		"ts": "2026-07-04T00:10:48.356Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5080043.98,
		"hash": "b81bf10e1557f4b264fe6fab52acba214432659a2fbad8e7d052e5a12df0af76"
	},
	{
		"id": "d7eeb0158ed1",
		"ts": "2026-07-04T00:10:48.605Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 965652.46,
		"hash": "d7eeb0158ed16b10b5b63604c97eae3f4440b4a5f778424118f78859be3ba0a3"
	},
	{
		"id": "700b42f1ae42",
		"ts": "2026-07-04T00:10:48.849Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 241581.76,
		"hash": "700b42f1ae4260e3694dc31492499a3d628d083d1cb487caf704ff4f7df0c6ba"
	},
	{
		"id": "8d4a6bbd5b0a",
		"ts": "2026-07-04T00:10:49.093Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8211181.81,
		"hash": "8d4a6bbd5b0a5bdf7f39cc9cbdd838dcfa05cf4cb82d1f9d0b43bbe64ccffc24"
	},
	{
		"id": "4f26457f1b43",
		"ts": "2026-07-04T00:10:49.327Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1952343.59,
		"hash": "4f26457f1b43798ac94f464795e5e77518b7b1b823291df4a332d0a58063fcb5"
	},
	{
		"id": "bd437a813646",
		"ts": "2026-07-04T00:10:49.573Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 447072.63,
		"hash": "bd437a813646a20e8ed2c1db61f24fae40de71a23a0786bd73b3d9e8a5761807"
	},
	{
		"id": "944edb923c33",
		"ts": "2026-07-04T00:10:49.816Z",
		"symbol": "OpenAI",
		"token": "0x06228bb02F0b9C8910889B4625ad578d8E811b07",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 608.89,
		"hash": "944edb923c333cbc29b935f31d7819e24442ad7ad72f218bc9530cae3032e40b"
	},
	{
		"id": "cf16d4edfc3c",
		"ts": "2026-07-03T22:58:47.995Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100115561.29,
		"hash": "cf16d4edfc3c6f48bce9cb7c223d074e53c4ac37b43deecca80592ccb281afe8"
	},
	{
		"id": "22d65ba740ba",
		"ts": "2026-07-03T22:58:48.440Z",
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
		"liquidityUsd": 15847123.32,
		"hash": "22d65ba740bab89636e557444f963fbdcfc6f5b01d1138bcff62227a8c3de29e"
	},
	{
		"id": "2d75d09b82b9",
		"ts": "2026-07-03T22:58:48.679Z",
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
		"liquidityUsd": 1411695,
		"hash": "2d75d09b82b921d0c9392d4feafd36bf0700b099a8fd16d8b493c18864a04c0c"
	},
	{
		"id": "5a2124e28698",
		"ts": "2026-07-03T22:58:48.915Z",
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
		"liquidityUsd": 30736466.59,
		"hash": "5a2124e28698ca8998d3852d042f60c3ce9d36234613d4ca683b3c9a5cea16cd"
	},
	{
		"id": "e628eaaeb1ee",
		"ts": "2026-07-03T22:58:49.161Z",
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
		"liquidityUsd": 4186258.45,
		"hash": "e628eaaeb1ee0ba5eb45932ee53c60075a76043d98b47fb9dde1645373129366"
	},
	{
		"id": "917dbc57e6e6",
		"ts": "2026-07-03T22:58:49.396Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 991892.44,
		"hash": "917dbc57e6e6525a33e745b0950d3baacbd954f40d13c2fdc55633ffd456e4be"
	},
	{
		"id": "aa82b648d50b",
		"ts": "2026-07-03T22:58:49.638Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30736466.4,
		"hash": "aa82b648d50b85aaed691a61e5b55cbed13db2aa7eef06159239c70861402119"
	},
	{
		"id": "ef2b35206b4d",
		"ts": "2026-07-03T22:58:49.875Z",
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
		"liquidityUsd": 2384675.91,
		"hash": "ef2b35206b4d6dc34b5eb51c5cbdf962bdca2c63d144da99f855c6a5df752e0b"
	},
	{
		"id": "b26cafd00e4b",
		"ts": "2026-07-03T22:58:50.111Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3205124.59,
		"hash": "b26cafd00e4b2b37149de8728f7b2961f608d5f518065680a0fd88a6d918af24"
	},
	{
		"id": "755e73ea7a39",
		"ts": "2026-07-03T22:58:50.346Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 367595.23,
		"hash": "755e73ea7a39d6bc39d889c1be082da8e0e6a40a2c361ff1633a815e8294354a"
	},
	{
		"id": "33c6d93c6f51",
		"ts": "2026-07-03T22:58:50.564Z",
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
		"liquidityUsd": 2319520.51,
		"hash": "33c6d93c6f5133e23a22d186c3401687efcd249394d1bb55fb4497f367e79f35"
	},
	{
		"id": "a20d5acfdb62",
		"ts": "2026-07-03T22:58:50.784Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5172853.61,
		"hash": "a20d5acfdb62697c647647e672a015242db0bad58a577db399801f4fbbd74155"
	},
	{
		"id": "c79ad64dc113",
		"ts": "2026-07-03T22:58:51.001Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 965440.87,
		"hash": "c79ad64dc113b854692a614f19a28d9f38352691774cc16ee7f149fdc904a0b7"
	},
	{
		"id": "2584220e3c92",
		"ts": "2026-07-03T22:58:51.220Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 261010.51,
		"hash": "2584220e3c9271d5e70f1e21f0053882c2b64eff9b96359a0fa2d513a761eb61"
	},
	{
		"id": "ce53267c47ce",
		"ts": "2026-07-03T22:58:51.439Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8164845.08,
		"hash": "ce53267c47ce01cc1006f157267120141b37d03ac271e5f81d129c43cc669812"
	},
	{
		"id": "684dcd54f119",
		"ts": "2026-07-03T22:58:51.657Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1926997.45,
		"hash": "684dcd54f119994ca956b8e001c310639f2d4cc3431076209eec5b7a70304598"
	},
	{
		"id": "37fecfdf560e",
		"ts": "2026-07-03T22:58:51.874Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 445362.28,
		"hash": "37fecfdf560ec9b43dfa917c91d1bd8e27903a39049d6e12d3d65cc5f2983de7"
	},
	{
		"id": "3e6a93ee498d",
		"ts": "2026-07-03T22:58:52.095Z",
		"symbol": "OpenAI",
		"token": "0x06228bb02F0b9C8910889B4625ad578d8E811b07",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 608.89,
		"hash": "3e6a93ee498dcfd4f4cd69ce2ec1735639f3e9710ea9540e4bdb54ded6f3f129"
	},
	{
		"id": "07a6d6f785ec",
		"ts": "2026-07-03T21:01:15.560Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 99839335.04,
		"hash": "07a6d6f785ec5151a88424654df357859f8ffe01f2bf18a02b750eee808c4ba3"
	},
	{
		"id": "5200f31ab0f0",
		"ts": "2026-07-03T21:01:15.821Z",
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
		"liquidityUsd": 16143905.59,
		"hash": "5200f31ab0f0ed27fe13cc54bf7ea24097b8a5df2422d7cf03f5dd891e14c42b"
	},
	{
		"id": "02695a136aa1",
		"ts": "2026-07-03T21:01:16.091Z",
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
		"liquidityUsd": 1418679.05,
		"hash": "02695a136aa1d155ac61e4fc711f721abd130e37b9becb72bf5bf0d1bd448742"
	},
	{
		"id": "15a8e69eed07",
		"ts": "2026-07-03T21:01:16.344Z",
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
		"liquidityUsd": 30668798.45,
		"hash": "15a8e69eed07202a1f47ac613631e9f44589919e01aec157f58e92d616efa86d"
	},
	{
		"id": "f82e647ec263",
		"ts": "2026-07-03T21:01:16.600Z",
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
		"liquidityUsd": 4216330.01,
		"hash": "f82e647ec2638ad4402e01a62857c5686db88b8f70e0f9343c3f7e3ced7c2ca6"
	},
	{
		"id": "ee8fe3c6a5f9",
		"ts": "2026-07-03T21:01:16.856Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 991892.44,
		"hash": "ee8fe3c6a5f94433017be4ec9c3493f5c179402c09831ab9547e49a77f589920"
	},
	{
		"id": "1f63e55d12f5",
		"ts": "2026-07-03T21:01:17.143Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30668798.45,
		"hash": "1f63e55d12f5f7f6cebb2c63dc65c760e8de31d5d0a4a6854bbbde0a1840dc89"
	},
	{
		"id": "b9440185bf79",
		"ts": "2026-07-03T21:01:17.393Z",
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
		"liquidityUsd": 2362385.93,
		"hash": "b9440185bf7977ac2c2ff9902fba1feea16d7f1f128cd1855edef15af82f7412"
	},
	{
		"id": "41aabe4051fb",
		"ts": "2026-07-03T21:01:17.649Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3287267.21,
		"hash": "41aabe4051fba94baa80f058ceb12bc71eafc5e912299b9126e1c8eeeca2b4e7"
	},
	{
		"id": "d233f6bc1689",
		"ts": "2026-07-03T21:01:17.899Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 393533.21,
		"hash": "d233f6bc16897fe40823893bf2186bd21ef8f4e6a86b4eb5c5a089e52866db9d"
	},
	{
		"id": "a5cbf72a23f3",
		"ts": "2026-07-03T21:01:18.142Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5283114.99,
		"hash": "a5cbf72a23f3738a848b9325263db1d02c81e19ece5692a7a7a87633b24cb9e8"
	},
	{
		"id": "46dc51a1c008",
		"ts": "2026-07-03T21:01:18.376Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2397847.59,
		"hash": "46dc51a1c008115b827566ed74c1ff7b40ef602986356980ca2fd4c568770fbe"
	},
	{
		"id": "bf86dad27631",
		"ts": "2026-07-03T21:01:18.615Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 969971.78,
		"hash": "bf86dad27631be3e276ff09f994b27f599b8460c5a9aa112660dd63102d692d4"
	},
	{
		"id": "7334b64aae1b",
		"ts": "2026-07-03T21:01:18.850Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 272111.29,
		"hash": "7334b64aae1b5e4900149408080e53dc986a1b0ede570b007e8ac5705f7774cb"
	},
	{
		"id": "fd0148e524bd",
		"ts": "2026-07-03T21:01:19.090Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8288610.88,
		"hash": "fd0148e524bde23d7ada53a403bf296604bc42449716d43dad70d1df269c9140"
	},
	{
		"id": "ade41b82ec58",
		"ts": "2026-07-03T21:01:19.326Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 446900.02,
		"hash": "ade41b82ec582c4f10b806b191b2d37454631c61e7d8d058a76e3aaa8a8dccd9"
	},
	{
		"id": "74509fdc7361",
		"ts": "2026-07-03T21:01:19.569Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2007843.57,
		"hash": "74509fdc7361158725cbba078029907ae4cc5d254b5beac1089afd3e4423a339"
	},
	{
		"id": "ff2a71c09f93",
		"ts": "2026-07-03T21:01:19.805Z",
		"symbol": "OpenAI",
		"token": "0x06228bb02F0b9C8910889B4625ad578d8E811b07",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 672.31,
		"hash": "ff2a71c09f939277e8ca9c4a8014b1a4e5208954dfb1e84edf014439fa528b7d"
	},
	{
		"id": "1ab1b0f4ff23",
		"ts": "2026-07-03T19:14:52.710Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 99153866.11,
		"hash": "1ab1b0f4ff23646b6fff333988a5bae9ac18e989b493e0d7370a2339711aaba3"
	},
	{
		"id": "2086c5d6ccbe",
		"ts": "2026-07-03T19:14:53.066Z",
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
		"liquidityUsd": 16112220.18,
		"hash": "2086c5d6ccbe2c4f241ccf9cea58cb81302871ce4ba96a5ff904a64e29d8412f"
	},
	{
		"id": "d0b72c907a76",
		"ts": "2026-07-03T19:14:53.263Z",
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
		"liquidityUsd": 1402450.82,
		"hash": "d0b72c907a76676767bdc8d0a30f68f906b1d42d3deddd4f92f854792c14c036"
	},
	{
		"id": "2ec641dc603a",
		"ts": "2026-07-03T19:14:53.462Z",
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
		"liquidityUsd": 30505630.19,
		"hash": "2ec641dc603a8fe163a0900d0c6eb9d6b4e50fd7030adf52b7a8d750b739f4d7"
	},
	{
		"id": "4971c0cff27b",
		"ts": "2026-07-03T19:14:53.656Z",
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
		"liquidityUsd": 4121710.11,
		"hash": "4971c0cff27b8dde7db2a6009f6325ec8584bb338104a1dafc2fb6da2acb9e4d"
	},
	{
		"id": "465256b4bcdf",
		"ts": "2026-07-03T19:14:53.865Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 986724.13,
		"hash": "465256b4bcdf98fd9b6e47af47a6ee9a1c66b36af1a93ba83dba360337c1e938"
	},
	{
		"id": "ada323affdc8",
		"ts": "2026-07-03T19:14:54.059Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30505630.19,
		"hash": "ada323affdc8400e6564b917e4cc90463dfb92a041387ce41c6cfee044b5e6c9"
	},
	{
		"id": "d1ab7b28fe65",
		"ts": "2026-07-03T19:14:54.247Z",
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
		"liquidityUsd": 2333825.72,
		"hash": "d1ab7b28fe65dd792a3414cf192c32773902d30ca99af26fe5aaf2bc9c9887c3"
	},
	{
		"id": "a80238351ccd",
		"ts": "2026-07-03T19:14:54.437Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3240335.58,
		"hash": "a80238351ccdce49a4ed45c942fd1b25450b50c99493a8e8f77258217ef270ba"
	},
	{
		"id": "8631619e8282",
		"ts": "2026-07-03T19:14:54.627Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 382937,
		"hash": "8631619e82825941cb59c76d35492967c3241013045d537bfe9f0cedb9b17e43"
	},
	{
		"id": "e6e3d4f2e7ca",
		"ts": "2026-07-03T19:14:54.811Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5042848.1,
		"hash": "e6e3d4f2e7ca567e3c49da28de89e09cb4463dfc65e763d66bb255e1062969e4"
	},
	{
		"id": "feb93a05abd7",
		"ts": "2026-07-03T19:14:54.992Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 967840.74,
		"hash": "feb93a05abd73e078b10b91e58f9264622c2d521510020a30d973941735b44cd"
	},
	{
		"id": "36d0494c5838",
		"ts": "2026-07-03T19:14:55.171Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2169397.18,
		"hash": "36d0494c5838b0bbdab73d2b615c6eef8844277bb04823025f88ba91941e69f9"
	},
	{
		"id": "b588d0686cb8",
		"ts": "2026-07-03T19:14:55.353Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 282008.35,
		"hash": "b588d0686cb81c0f802b4ab985b64baeb931ff51f24737f5f9127b8ccf8c4df3"
	},
	{
		"id": "2ad560390771",
		"ts": "2026-07-03T19:14:55.534Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8240741.55,
		"hash": "2ad5603907712a93f14adc85b1ad4adefeaf7efafe82cbdd3623c241f26194e9"
	},
	{
		"id": "c148508f8eec",
		"ts": "2026-07-03T19:14:55.715Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 440165.65,
		"hash": "c148508f8eec5bbe905ced460830737822f21c2c58a562cd83b2fab5653615b8"
	},
	{
		"id": "8ad4ec3135aa",
		"ts": "2026-07-03T19:14:55.890Z",
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
		"liquidityUsd": 1425379.66,
		"hash": "8ad4ec3135aa3118ae2051d18a2121d47bd6607c8ad19bc73ced861ed1989be5"
	},
	{
		"id": "6517672c82d0",
		"ts": "2026-07-03T19:14:56.083Z",
		"symbol": "RIZE",
		"token": "0x9818B6c09f5ECc843060927E8587c427C7C93583",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 56041.32,
		"hash": "6517672c82d0e4e44ce9d134da9d5a592fe2ea363525a85fc58716affc417030"
	},
	{
		"id": "13229e3d6246",
		"ts": "2026-07-03T17:21:40.272Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 99037438.71,
		"hash": "13229e3d6246d182f6f7f52c3efa8abcf2fb54bce5c25e69eeafddd204e82c25"
	},
	{
		"id": "516434aee401",
		"ts": "2026-07-03T17:21:41.264Z",
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
		"liquidityUsd": 15186255.84,
		"hash": "516434aee401da0849cc035fabcd539d2aa375dfd311257abd54f0348d5fc0cc"
	},
	{
		"id": "24c6b1d2f76c",
		"ts": "2026-07-03T17:21:41.758Z",
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
		"liquidityUsd": 1405597.22,
		"hash": "24c6b1d2f76cdf0191aa1cabf8b51e676c16f11f0294c0abc4237b53f600b849"
	},
	{
		"id": "82c26e116b9e",
		"ts": "2026-07-03T17:21:42.256Z",
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
		"liquidityUsd": 30247432.89,
		"hash": "82c26e116b9ecbcc87286cbd540b2c6fed410b43e2a113fc8b531ed0a56e78a3"
	},
	{
		"id": "68121b9f9bac",
		"ts": "2026-07-03T17:21:42.742Z",
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
		"liquidityUsd": 4103912.18,
		"hash": "68121b9f9bace7d2f301346f84505385ee8e2969798df9324dc968cc1e524124"
	},
	{
		"id": "e6619a55ab90",
		"ts": "2026-07-03T17:21:43.468Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 994250.87,
		"hash": "e6619a55ab90b78db5e715426272065fc852312198ee197108e0d2dd9f4b500e"
	},
	{
		"id": "8c9e30ec2c0e",
		"ts": "2026-07-03T17:21:43.726Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30252840.1,
		"hash": "8c9e30ec2c0ea5e619fcc83112f6e7b6bc1e6a41b1ec57e172dce66b35e5d2e1"
	},
	{
		"id": "b8a3e09d2309",
		"ts": "2026-07-03T17:21:43.994Z",
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
		"liquidityUsd": 2333058.85,
		"hash": "b8a3e09d230983d6154dcf30334b89be316b7f2c7724f74d954ecce7a85cfce6"
	},
	{
		"id": "7242e34bb147",
		"ts": "2026-07-03T17:21:45.047Z",
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
		"liquidityUsd": 3142591.63,
		"hash": "7242e34bb147b759b5777d26a2b46b5771816c198fc1cf2956fbcacc1cf0b682"
	},
	{
		"id": "8376d692733a",
		"ts": "2026-07-03T17:21:45.313Z",
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
		"liquidityUsd": 5316710.38,
		"hash": "8376d692733a1f92b9c44531d7ced8c93a4a9c3403e0f21517905c94f6ea8ed9"
	},
	{
		"id": "9e141c270c3e",
		"ts": "2026-07-03T17:21:45.565Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 379842.09,
		"hash": "9e141c270c3e7208cbfdc95d48defd047da4c1a3803074265d06cefa7f02ac7c"
	},
	{
		"id": "0d1f02d04e15",
		"ts": "2026-07-03T17:21:45.910Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 976348.68,
		"hash": "0d1f02d04e157e801ad249ad13d8f32dd1d47092a3ffcb9b0360ad6cb94e0ff9"
	},
	{
		"id": "ed57480b74e2",
		"ts": "2026-07-03T17:21:46.153Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 241945.53,
		"hash": "ed57480b74e2d9d2014ac763765c3ea31850724446f9b8628296675002d9e39e"
	},
	{
		"id": "80de4c674fe8",
		"ts": "2026-07-03T17:21:46.391Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2175974.9,
		"hash": "80de4c674fe88039f6a933679ea7c60cad86815abd97024e3a10ea6106366f1a"
	},
	{
		"id": "f50a743598cd",
		"ts": "2026-07-03T17:21:46.644Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8328031.61,
		"hash": "f50a743598cd9d60feb1dc4f362a095f10cf2170081fe8524f53a7056f527eb0"
	},
	{
		"id": "5be1f2dfd5d2",
		"ts": "2026-07-03T17:21:46.889Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 439344.51,
		"hash": "5be1f2dfd5d2b5e965e4e7644033426b61e1f79a7767703279e309f7f1d5a97b"
	},
	{
		"id": "c1e9006c78a1",
		"ts": "2026-07-03T17:21:47.350Z",
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
		"liquidityUsd": 1519263.31,
		"hash": "c1e9006c78a188d9ee41cc03bbb325ed3b9e74884581825015841ff7766c2db7"
	},
	{
		"id": "9431e3b9299f",
		"ts": "2026-07-03T17:21:47.595Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1958882.12,
		"hash": "9431e3b9299f063822981fcd4c0f81347bdce14bdcfe62a46c636d03945c0413"
	},
	{
		"id": "76d69b59b636",
		"ts": "2026-07-03T15:08:04.679Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 99081947.78,
		"hash": "76d69b59b6368cf6e0224b24f6211e2cfc350f26094947fa793b409e2267e998"
	},
	{
		"id": "908e654003cc",
		"ts": "2026-07-03T15:08:04.941Z",
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
		"liquidityUsd": 15545096.99,
		"hash": "908e654003cc5e18261f2574c795d500afecd7d8f8ff880a61dc7da5c7d810cc"
	},
	{
		"id": "97354c9cc30a",
		"ts": "2026-07-03T15:08:05.161Z",
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
		"liquidityUsd": 1415769.08,
		"hash": "97354c9cc30a7ec7db6dd149953746d5f59486d50760754c156d44e71dc97764"
	},
	{
		"id": "92b981790daa",
		"ts": "2026-07-03T15:08:05.350Z",
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
		"liquidityUsd": 30550359.28,
		"hash": "92b981790daa99c4e6bec4fe3171b1ad83216de04f18d63abb2b22a41960b877"
	},
	{
		"id": "bbd1a1daa4bf",
		"ts": "2026-07-03T15:08:05.540Z",
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
		"liquidityUsd": 4125907.59,
		"hash": "bbd1a1daa4bfc3b9d2368089dcc7a4b19d13d1415fec8ea5ab2bc0ade741421d"
	},
	{
		"id": "fa89905d53d9",
		"ts": "2026-07-03T15:08:05.729Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 988888.65,
		"hash": "fa89905d53d90be46ed2be0f766629e9fb7ae96312283f0b7b0f77e9e4656ded"
	},
	{
		"id": "aba6fe32ad71",
		"ts": "2026-07-03T15:08:05.917Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30550359.28,
		"hash": "aba6fe32ad7122099931acd8f31781608a31ae650ac64b2512caa9ee7c3e8c88"
	},
	{
		"id": "940ad30e83e3",
		"ts": "2026-07-03T15:08:06.142Z",
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
		"liquidityUsd": 2339528.62,
		"hash": "940ad30e83e30b32760d6824aa818da167df6ad53ef82f4a65258f1b4515ad36"
	},
	{
		"id": "65f5fb35a8dd",
		"ts": "2026-07-03T15:08:07.912Z",
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
		"liquidityUsd": 3015340.39,
		"hash": "65f5fb35a8dda732afb7e0b5baef20627da5370455c728f00eda9f70a555d7d7"
	},
	{
		"id": "f3174658320e",
		"ts": "2026-07-03T15:08:08.103Z",
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
		"liquidityUsd": 5368781.03,
		"hash": "f3174658320ed9696dd44c9f45744b7744afb87710ffe08a7ccd401603f1d263"
	},
	{
		"id": "28b46b38cd77",
		"ts": "2026-07-03T15:08:08.288Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 240574.86,
		"hash": "28b46b38cd7713d7dcdc23570aa6f27954ddfa0b263db6250eda1bcfcfd67228"
	},
	{
		"id": "246655590f40",
		"ts": "2026-07-03T15:08:09.269Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 984294.67,
		"hash": "246655590f4078df25e7ad74d1412991e1d8cab33289650757aed482d661b59a"
	},
	{
		"id": "996ae56e8e51",
		"ts": "2026-07-03T15:08:09.449Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1960038.03,
		"hash": "996ae56e8e51a8f0b4a7193c7f6ab347f8d940033f71c8886350dbd393d33b24"
	},
	{
		"id": "b6a417efc256",
		"ts": "2026-07-03T15:08:12.208Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 386809.54,
		"hash": "b6a417efc256a54c204124652560e38580d5fc8821dec67d8d1244353b1b401f"
	},
	{
		"id": "889cd9fcd3cd",
		"ts": "2026-07-03T15:08:12.484Z",
		"symbol": "BLOCKTRONICS",
		"token": "0x7afE438411ee3959C7De6f7fB76bf9C769320bA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 185122.64,
		"hash": "889cd9fcd3cd933a4ad3d10d124c54cafa65bde878c8a5fb31d6064b381c7e8a"
	},
	{
		"id": "f030fa6f8ee5",
		"ts": "2026-07-03T15:08:12.662Z",
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
		"liquidityUsd": 2020389.79,
		"hash": "f030fa6f8ee542916e8e26904a2226f564c3d20859a0799c90213010104cba6a"
	},
	{
		"id": "0b8904aa8139",
		"ts": "2026-07-03T15:08:12.849Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8355788.9,
		"hash": "0b8904aa813967186159896abc74dc1535d6a941a5474fb417801cc62c3a80a3"
	},
	{
		"id": "69ffc6c38896",
		"ts": "2026-07-03T12:06:43.884Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 99304789.43,
		"hash": "69ffc6c388961ec1a4ea53b7c5be1e3f2479dd55b03637c0936073c38d3c6d6a"
	},
	{
		"id": "c84a34bc4423",
		"ts": "2026-07-03T12:06:44.368Z",
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
		"liquidityUsd": 14415860.04,
		"hash": "c84a34bc4423437464f11c7b0d264744558d958c7099c54483acf25be02d1836"
	},
	{
		"id": "70c8fcc40cd3",
		"ts": "2026-07-03T12:06:44.624Z",
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
		"liquidityUsd": 1414273.03,
		"hash": "70c8fcc40cd38d46e70a7f9a9f0a3a15bc7210974d464018f3827febf9d0926c"
	},
	{
		"id": "6d826b852dbb",
		"ts": "2026-07-03T12:06:44.885Z",
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
		"liquidityUsd": 30369430.81,
		"hash": "6d826b852dbb327446e3cca43e0c4b90ae7a7510bb4746af62ce1f1726793f12"
	},
	{
		"id": "0df1ad8d6c70",
		"ts": "2026-07-03T12:06:45.360Z",
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
		"liquidityUsd": 4125353.81,
		"hash": "0df1ad8d6c708bc16fbebf741074fd63b5c9adcde082eb5cdbee88106d4aab48"
	},
	{
		"id": "654080ecf73a",
		"ts": "2026-07-03T12:06:45.614Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 990506,
		"hash": "654080ecf73aa55806d2268a7d64ed28c850d89f9019554d10b3b145314631c2"
	},
	{
		"id": "6b753c946c01",
		"ts": "2026-07-03T12:06:45.888Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30369430.81,
		"hash": "6b753c946c01ff47ac6a93b2fc595368581ea0757469dcfdceee821e803402e1"
	},
	{
		"id": "6fd2a8a7d76e",
		"ts": "2026-07-03T12:06:46.176Z",
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
		"liquidityUsd": 2305993.38,
		"hash": "6fd2a8a7d76ef1a665f970eff48f4bfff80ddbc2a2728e15f23de025453ee4f2"
	},
	{
		"id": "0288d324f8a3",
		"ts": "2026-07-03T12:06:46.437Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3077882.99,
		"hash": "0288d324f8a3df2f7f2bb28e2faa2ba961b37c1196d820f26aa5f63fdb58510c"
	},
	{
		"id": "ad9c20fed62d",
		"ts": "2026-07-03T12:06:46.691Z",
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
		"liquidityUsd": 5379272.52,
		"hash": "ad9c20fed62dfae23db31b93277917f91f0ad460a6830d4aff1fe742bd6060ed"
	},
	{
		"id": "654737e4b8df",
		"ts": "2026-07-03T12:06:46.939Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 239679.96,
		"hash": "654737e4b8df3cc39ad74252181f300c02473364b2dac3586d48ae4b86358ef2"
	}
]
