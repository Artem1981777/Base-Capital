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
	"updatedAt": "2026-09-25T20:12:57.291Z",
	"tokensScored": 18587,
	"verdictsIssued": 18587,
	"safe": 15787,
	"risky": 1343,
	"likelyRug": 1457,
	"ticks": 1058
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "567ee5da9b0f",
		"ts": "2026-09-25T20:12:52.397Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 154185920.93,
		"hash": "567ee5da9b0f721c9a0291bf52070c8e5cc2f016b4ad265751827198e49fef69"
	},
	{
		"id": "ed4df2aca68c",
		"ts": "2026-09-25T20:12:52.695Z",
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
		"liquidityUsd": 16340307.1,
		"hash": "ed4df2aca68cc02875249fdde4583998b31f7af2a62e020d1d093b71ce26d4ce"
	},
	{
		"id": "e2c163ff786e",
		"ts": "2026-09-25T20:12:52.988Z",
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
		"liquidityUsd": 868467.09,
		"hash": "e2c163ff786e66d54983f525108ecca20188942c77750e8c41c388059b55f35c"
	},
	{
		"id": "061769b28b75",
		"ts": "2026-09-25T20:12:53.259Z",
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
		"liquidityUsd": 38805960.1,
		"hash": "061769b28b75753390ed1248d40aace95ed01a1f4549729d1446224e8f182e92"
	},
	{
		"id": "199cef5850c1",
		"ts": "2026-09-25T20:12:53.573Z",
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
		"liquidityUsd": 4537481.62,
		"hash": "199cef5850c131d67368aa01ab8289f10c36b35fe2239678b90375b7f0591513"
	},
	{
		"id": "996839f5908d",
		"ts": "2026-09-25T20:12:53.854Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1305471.04,
		"hash": "996839f5908d71e8212483c76f0f8f7d9661e604d4594e411b094473ce870113"
	},
	{
		"id": "bd79979f4134",
		"ts": "2026-09-25T20:12:54.123Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 38806040.04,
		"hash": "bd79979f413429fedacff1f28df2e29889065f0e258c1a6af88b9c27c174bbe3"
	},
	{
		"id": "9325aac46b90",
		"ts": "2026-09-25T20:12:54.423Z",
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
		"liquidityUsd": 1398124.41,
		"hash": "9325aac46b9049cc85a1a027bf54f3813e8e953c70e201413a03561a61c0d377"
	},
	{
		"id": "4bb2a1584e84",
		"ts": "2026-09-25T20:12:54.695Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 3000089.56,
		"hash": "4bb2a1584e8465ad1b357979b8f3f1b84e33884c5c137a0bcd79e6af3ae8d57e"
	},
	{
		"id": "13b306cbe2c1",
		"ts": "2026-09-25T20:12:54.976Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3719111.7,
		"hash": "13b306cbe2c10d15f2a91ca05e1c71f7840887f6e9c2346dabab898084838e05"
	},
	{
		"id": "747e9c5f3a72",
		"ts": "2026-09-25T20:12:55.235Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 856639.72,
		"hash": "747e9c5f3a7215f4c245c9dbd6458904dd9bce093c82d4d4c0f64ab7f1d29b6f"
	},
	{
		"id": "72317fec7cbf",
		"ts": "2026-09-25T20:12:55.487Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18870066.65,
		"hash": "72317fec7cbf712253e6181bfa48bdb926680491ba3a603115ddb1ec09a0fd35"
	},
	{
		"id": "31b3e3adcc2a",
		"ts": "2026-09-25T20:12:55.753Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1565729.97,
		"hash": "31b3e3adcc2a108a6f3349d4f8206e5b4f9643f4304f9ab1e7a3d1d5a68773e0"
	},
	{
		"id": "d8c29c0eb802",
		"ts": "2026-09-25T20:12:56.018Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 506969.95,
		"hash": "d8c29c0eb802d25c17cc40f0fa4e614c296543ea705de1fabd9d5297fdc40966"
	},
	{
		"id": "85373cc1d5d7",
		"ts": "2026-09-25T20:12:56.269Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1591131.95,
		"hash": "85373cc1d5d7c900ab1f4c502e1f2fb354328c5fe2373dbd100948d20be2715a"
	},
	{
		"id": "88a7ac68bb26",
		"ts": "2026-09-25T20:12:56.523Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 814265.14,
		"hash": "88a7ac68bb26f6affa45259e3af6dede9fe041a272b8f596fa0add1dffdbf942"
	},
	{
		"id": "5bc433e20a0a",
		"ts": "2026-09-25T20:12:56.777Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1139670.65,
		"hash": "5bc433e20a0ae74f7257ac8a315a449967c1cf93ef2cb798dc8b293945599657"
	},
	{
		"id": "04972905bdd5",
		"ts": "2026-09-25T20:12:57.029Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 121719.35,
		"hash": "04972905bdd52f9c272b891affa2a0c3b208a48bf7d5c737c848c784e67c126a"
	},
	{
		"id": "2963aff10571",
		"ts": "2026-09-25T20:12:57.291Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 954920.67,
		"hash": "2963aff10571471f990f4f4d7156ed9aa1c36e7835cf879d1883908d7e9d7890"
	},
	{
		"id": "1ddbfb1f9d35",
		"ts": "2026-09-25T16:26:03.698Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 154046568.35,
		"hash": "1ddbfb1f9d35046776dece1b1e088e1096f5b8a70e0b19520aee98edec6f2121"
	},
	{
		"id": "ee90320a65a3",
		"ts": "2026-09-25T16:26:03.963Z",
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
		"liquidityUsd": 16438231.04,
		"hash": "ee90320a65a3138103c606ba7f60d6ecbeee8f652e4c6ed83c39e1a36aebdb4f"
	},
	{
		"id": "48241f4216dd",
		"ts": "2026-09-25T16:26:04.207Z",
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
		"liquidityUsd": 872388.31,
		"hash": "48241f4216dd0153b395d4b1e736276293ba6024b0c29faa141478a326c53a25"
	},
	{
		"id": "36baf74f79bd",
		"ts": "2026-09-25T16:26:04.457Z",
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
		"liquidityUsd": 38353685.9,
		"hash": "36baf74f79bd8a6f9cd748ed4b11760685bf5bf3b7b7ded408cb908f9fa03f4f"
	},
	{
		"id": "766b9e99c0ad",
		"ts": "2026-09-25T16:26:04.724Z",
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
		"liquidityUsd": 4524544.63,
		"hash": "766b9e99c0adc08aa624215520fb5b745262374cb813fc3875210aa3ca44a96f"
	},
	{
		"id": "314b56a1ba91",
		"ts": "2026-09-25T16:26:04.994Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1305009.76,
		"hash": "314b56a1ba9197a1cc16aca82a49acf804a48faa7d5211337ba50f15814ab2c2"
	},
	{
		"id": "26fd93a9634d",
		"ts": "2026-09-25T16:26:05.258Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 38353693.08,
		"hash": "26fd93a9634d88d4248e5961af02a6ef804d229382b65efedde5b5f69d67e115"
	},
	{
		"id": "b983c9e2867b",
		"ts": "2026-09-25T16:26:05.506Z",
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
		"liquidityUsd": 1302146.39,
		"hash": "b983c9e2867b6e014146f1678f68518be8b2ca4c1590d40091e9524bb119930a"
	},
	{
		"id": "777a232c7906",
		"ts": "2026-09-25T16:26:05.770Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2982550.15,
		"hash": "777a232c79065aa31788d041b1fd060c4b972253cabc0de76218c1c4304543f0"
	},
	{
		"id": "c28050321735",
		"ts": "2026-09-25T16:26:06.018Z",
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
		"liquidityUsd": 18913677.81,
		"hash": "c28050321735ebb609430f3245fb05494e00f7e70b4f390e7c791aef694bc13e"
	},
	{
		"id": "9b8a93bfea0c",
		"ts": "2026-09-25T16:26:06.243Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3747048.99,
		"hash": "9b8a93bfea0c61747283beb098e264c6f14ac02cd3c6addc1cda72374663b579"
	},
	{
		"id": "c1724ed6f029",
		"ts": "2026-09-25T16:26:06.482Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 851890.09,
		"hash": "c1724ed6f029ca05f2416da07b86b3ba8d96766818ba5fe2245f792c942529ee"
	},
	{
		"id": "0e1816f33529",
		"ts": "2026-09-25T16:26:06.718Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 520027.19,
		"hash": "0e1816f335299e2128a261811adf5e3c89a915dc880321ba3d175d151a0abacd"
	},
	{
		"id": "fea22e187a2c",
		"ts": "2026-09-25T16:26:06.955Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 133125.24,
		"hash": "fea22e187a2c495934ab0160a490ff1de8f43751b54ca9e6449778ed4b4a3409"
	},
	{
		"id": "5a10cfa266a0",
		"ts": "2026-09-25T16:26:07.185Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 824598.75,
		"hash": "5a10cfa266a0329a9e74c98d088715aff2fe139501f5d9599ae8c8d0d4a7f050"
	},
	{
		"id": "14365c1c95e6",
		"ts": "2026-09-25T16:26:07.422Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1533432.26,
		"hash": "14365c1c95e65a6660d12daeb2669ed54d023cee206390c2d7d68933a5565d38"
	},
	{
		"id": "03cee7539a80",
		"ts": "2026-09-25T16:26:07.648Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1582592.57,
		"hash": "03cee7539a80c8655cf482b48258dd47318f16504c04e3ae32153fad19fdf75a"
	},
	{
		"id": "9e1a245c14f3",
		"ts": "2026-09-25T16:26:07.882Z",
		"symbol": "EDGE",
		"token": "0xED6E000dEF95780fb89734c07EE2ce9F6dcAf110",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 658205.68,
		"hash": "9e1a245c14f37f1060118ba17d6805686894e34969f077942aaa7baf3e58113b"
	},
	{
		"id": "c0c267a3a3c2",
		"ts": "2026-09-25T16:26:08.121Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4573324.63,
		"hash": "c0c267a3a3c2893e26456113a2fa7f88ad7994d1901f50d9dd75cca457d6821f"
	},
	{
		"id": "67524480009f",
		"ts": "2026-09-25T11:02:41.609Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 154261845.93,
		"hash": "67524480009fee1fbf7c94814d5a164782206a30c0011ba487133306012a06e9"
	},
	{
		"id": "e31764819d72",
		"ts": "2026-09-25T11:02:41.879Z",
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
		"liquidityUsd": 13818891.01,
		"hash": "e31764819d726a88c6b71aa2f04db42c6f563e52f253ac1ffa4304101e12baac"
	},
	{
		"id": "20e206e2e8e0",
		"ts": "2026-09-25T11:02:42.146Z",
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
		"liquidityUsd": 880659.12,
		"hash": "20e206e2e8e0a2fc5947c0ba1dc0d14b78346324d7ec81d7c299c5564b51fa25"
	},
	{
		"id": "f907846fd977",
		"ts": "2026-09-25T11:02:42.389Z",
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
		"liquidityUsd": 38850724.57,
		"hash": "f907846fd9772ba2fa429002a1b2bdf0989eff4e782d4691987036c9abb057b2"
	},
	{
		"id": "67177efbafd5",
		"ts": "2026-09-25T11:02:42.642Z",
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
		"liquidityUsd": 4659450.45,
		"hash": "67177efbafd525674ac8d823d0f98e294d28840488bb0bc217f49350244ba541"
	},
	{
		"id": "b17130b2ee0a",
		"ts": "2026-09-25T11:02:42.885Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1307802.98,
		"hash": "b17130b2ee0aba7486a9357e4d779b86cfa553aa73861e0569537ee055cb39fe"
	},
	{
		"id": "f50233d60f52",
		"ts": "2026-09-25T11:02:43.145Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 38850724.57,
		"hash": "f50233d60f52106ecd980eee35e3ea1b5092078dccb4f2b8256ed0a2ce46c216"
	},
	{
		"id": "57e5c63bfea8",
		"ts": "2026-09-25T11:02:43.387Z",
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
		"liquidityUsd": 2065529.36,
		"hash": "57e5c63bfea8a3cf52c6b8586d1f011ed73d69e348bc22f1cebc1f4cfc51abd8"
	},
	{
		"id": "281e6d2e7414",
		"ts": "2026-09-25T11:02:43.631Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2953748.46,
		"hash": "281e6d2e74144dc0076f0e5f8637bbbeedb2c0c685d5f28222fdbc6ade7e94af"
	},
	{
		"id": "2c263f106424",
		"ts": "2026-09-25T11:02:43.909Z",
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
		"liquidityUsd": 19476962.5,
		"hash": "2c263f106424fb2c12081f3ec19be15a19cdd013b71adc6ff2af84b2ad62f342"
	},
	{
		"id": "77b3703f7f20",
		"ts": "2026-09-25T11:02:44.132Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 142127.37,
		"hash": "77b3703f7f20605dda9a03b872418e302e2e044b48aae56e830895278090f30e"
	},
	{
		"id": "9bdbc6bfc256",
		"ts": "2026-09-25T11:02:44.359Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 868286.98,
		"hash": "9bdbc6bfc25619f2f3427decd84f996cd75a5b357478753b75f2b4ddd0186573"
	},
	{
		"id": "375bc75ee4fe",
		"ts": "2026-09-25T11:02:44.585Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3783271.06,
		"hash": "375bc75ee4fefaf656b44cef8fc37f4fb083bb50948a82b7483fc17744729330"
	},
	{
		"id": "46a6a9980aa8",
		"ts": "2026-09-25T11:02:44.808Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 821675.49,
		"hash": "46a6a9980aa844e6ddb6517ab8d0d3a616ad685aada00ff59761abdf8271985b"
	},
	{
		"id": "048dc219edcb",
		"ts": "2026-09-25T11:02:45.033Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1179065.72,
		"hash": "048dc219edcbd5b982fbb9fe24db98f4db2555d835f1d25d5583b5b3e421bfc7"
	},
	{
		"id": "a70d25abafc5",
		"ts": "2026-09-25T11:02:45.258Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1537866.05,
		"hash": "a70d25abafc560e64f62ba0cf3b277d24d7b3e2ebed50c1c3d3d7f1e8905b09b"
	},
	{
		"id": "ef8855bd7445",
		"ts": "2026-09-25T11:02:45.483Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3364244.51,
		"hash": "ef8855bd74454f8c9757afe4d176c447699696e6ab4147d432b3c9c125ccdc06"
	},
	{
		"id": "53912703b76e",
		"ts": "2026-09-25T11:02:45.707Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 578070.31,
		"hash": "53912703b76e887608f902809db4998afaaff2de0c7557b2d69f67c640ca281b"
	},
	{
		"id": "34b554a280a9",
		"ts": "2026-09-25T11:02:45.932Z",
		"symbol": "EDGE",
		"token": "0xED6E000dEF95780fb89734c07EE2ce9F6dcAf110",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 656245.3,
		"hash": "34b554a280a97dc562445ac68e30ff5066ae13f688c130319f910b2cf55daeb1"
	},
	{
		"id": "4c289749ff07",
		"ts": "2026-09-25T05:44:34.592Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 153270800.85,
		"hash": "4c289749ff07547ff96d8c60e72e3556b520e15b4f0784df396464413c319b0f"
	},
	{
		"id": "292dca3bbe6f",
		"ts": "2026-09-25T05:44:35.265Z",
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
		"liquidityUsd": 17130253.67,
		"hash": "292dca3bbe6faf17e196ca21034dd83bab428f292db89d9eb77d7a0dc4226057"
	},
	{
		"id": "2d8753f4856a",
		"ts": "2026-09-25T05:44:35.540Z",
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
		"liquidityUsd": 861348.25,
		"hash": "2d8753f4856aaaa14eb4d585b18e12bb262b48373506c17e80ac62873174d762"
	},
	{
		"id": "34544f8f4dc8",
		"ts": "2026-09-25T05:44:35.803Z",
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
		"liquidityUsd": 36997411.97,
		"hash": "34544f8f4dc8477fbbaa7bdb22c9e387b0af84a001fb32e6b78db2c42189b6c1"
	},
	{
		"id": "24a9be58baf0",
		"ts": "2026-09-25T05:44:36.071Z",
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
		"liquidityUsd": 4577116.49,
		"hash": "24a9be58baf013d86efb4ec7a044346bfa77602d1b23fe995ef9f6973e3bc778"
	},
	{
		"id": "f980b7f8886c",
		"ts": "2026-09-25T05:44:36.331Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1299274.13,
		"hash": "f980b7f8886c0827c66dc4ae539dd3ffeef3579f0dbfdc293b0da4c1accfdaf1"
	},
	{
		"id": "5e890b31f175",
		"ts": "2026-09-25T05:44:36.615Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36997411.97,
		"hash": "5e890b31f17511933f999e41daebee3586bf509335947db68be9365473b2a6cb"
	},
	{
		"id": "b43a6c8cc24e",
		"ts": "2026-09-25T05:44:36.881Z",
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
		"liquidityUsd": 2291831.43,
		"hash": "b43a6c8cc24e6467a78033102109e8cfd324c380dc6f6f523fab4c07310525ac"
	},
	{
		"id": "0ea5a059f059",
		"ts": "2026-09-25T05:44:37.134Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2894231.75,
		"hash": "0ea5a059f059f6fd31ae2708b32df5d1c72daabeb84cb180af3abd671a1aa8d3"
	},
	{
		"id": "8fb1c544c6fc",
		"ts": "2026-09-25T05:44:37.402Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 137613.2,
		"hash": "8fb1c544c6fcb886e7e464acec37b847e3d4cf1fee25059bd11f7acc7b9c2bfa"
	},
	{
		"id": "ac1c4cc9ac0d",
		"ts": "2026-09-25T05:44:37.633Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 19170356.56,
		"hash": "ac1c4cc9ac0d23f6cc3cdd2ba33eb636b8d1207c841b52c9a75f54e2c1772c72"
	},
	{
		"id": "ce5a151e9d06",
		"ts": "2026-09-25T05:44:37.886Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 812992.76,
		"hash": "ce5a151e9d06c9fba1a11c44ffe0e4b46022e703b261757064e7a22592f02eae"
	},
	{
		"id": "865a89444b16",
		"ts": "2026-09-25T05:44:38.121Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 889320.69,
		"hash": "865a89444b16dcd5dea18a49cd3d4aa26929277cd9a8e0388064bb2dafffa6bf"
	},
	{
		"id": "17401cf3ae73",
		"ts": "2026-09-25T05:44:38.352Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3695951.09,
		"hash": "17401cf3ae7314adca4e7bbaa487f32b7ed7a60c6628d2572464b1e27cbbf23c"
	},
	{
		"id": "52198476c8a5",
		"ts": "2026-09-25T05:44:38.585Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1349369.44,
		"hash": "52198476c8a5dedcb8feb3352cdbb1d865aa3e6bab4816df50da7d393b8954e0"
	},
	{
		"id": "981891375c78",
		"ts": "2026-09-25T05:44:38.815Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1632151.74,
		"hash": "981891375c787dde41f3dc48cbea18a6bc1b4c80a7c98b2f20a1e060eb6c8123"
	},
	{
		"id": "d8103b280b1b",
		"ts": "2026-09-25T05:44:39.050Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1514359.55,
		"hash": "d8103b280b1b3d91dd2c6b3076a1c758de7158ff8ed332fff9dbd352e1b5a713"
	},
	{
		"id": "421ef637ce93",
		"ts": "2026-09-25T05:44:39.297Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 159863.94,
		"hash": "421ef637ce931aeee6b9b0879b1772598c254d59ad0e99e42b3a1094de7d6ae1"
	},
	{
		"id": "f2b0e22225f5",
		"ts": "2026-09-25T05:44:39.542Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3313127.2,
		"hash": "f2b0e22225f57713b1bc3fb8c29a4c8c29210e0860380a4105a5418670f6a275"
	},
	{
		"id": "b6f652ba93d1",
		"ts": "2026-09-25T00:15:53.726Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 153591123.63,
		"hash": "b6f652ba93d1a53f4fbf701b97a1262f518d86af4d7b725cdff74e3bd52edb75"
	},
	{
		"id": "648c936783ba",
		"ts": "2026-09-25T00:15:54.423Z",
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
		"liquidityUsd": 16995708.54,
		"hash": "648c936783ba53760535df2b7569f9f48c52a130fb159ac71a6dd5e47a9dce53"
	},
	{
		"id": "ce51e155a7f5",
		"ts": "2026-09-25T00:15:54.674Z",
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
		"liquidityUsd": 868765.83,
		"hash": "ce51e155a7f5b490fe2352fd66604f700eafb0ca76c7c533de09155e6a7ab477"
	},
	{
		"id": "096cd99767e2",
		"ts": "2026-09-25T00:15:54.935Z",
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
		"liquidityUsd": 36591810.54,
		"hash": "096cd99767e201e0cf96802813e2109cd1913084220ef2c9318dc98b680e7923"
	},
	{
		"id": "9a5d60a65d16",
		"ts": "2026-09-25T00:15:55.184Z",
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
		"liquidityUsd": 4557022.62,
		"hash": "9a5d60a65d163a4b3e6c1af426388bb04678b521614a3fab535471339e2c2e28"
	},
	{
		"id": "621e14e08525",
		"ts": "2026-09-25T00:15:55.441Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1301564.18,
		"hash": "621e14e08525fed52d64d7996c770a985bf3e63ac0bd3a28d121529a47ececa4"
	},
	{
		"id": "1f80f49a5f68",
		"ts": "2026-09-25T00:15:55.686Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36591810.64,
		"hash": "1f80f49a5f6888b9d1190a4e25a64e18a673a046709b79326de89e6db5aae965"
	},
	{
		"id": "ae7f6ac3d41a",
		"ts": "2026-09-25T00:15:55.943Z",
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
		"liquidityUsd": 2302744.52,
		"hash": "ae7f6ac3d41a9d08dcd70913e9c1985ff137973cc482b8536ecf675c6bfc1e39"
	},
	{
		"id": "b63d54abdd3e",
		"ts": "2026-09-25T00:15:56.193Z",
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
		"liquidityUsd": 19081748.8,
		"hash": "b63d54abdd3e346ad99f87b0abfb89afa337d0f96d169eac341c3a8d5e63e760"
	},
	{
		"id": "bd53e5388d76",
		"ts": "2026-09-25T00:15:56.448Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 137684.43,
		"hash": "bd53e5388d7682a40c71e6e05857125e3624109bc06b149fee5ca05ad82a40c3"
	},
	{
		"id": "c7f110bf847c",
		"ts": "2026-09-25T00:15:56.675Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2919434.55,
		"hash": "c7f110bf847cf38a938e3c1648eae7e68ea66c570b88c07de1a7f64fcdfd511b"
	},
	{
		"id": "4ba4a87f8f0a",
		"ts": "2026-09-25T00:15:56.911Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 491378.31,
		"hash": "4ba4a87f8f0a4f10be3e0e4e8742e3bcd59509addd065b4391f513b2bc0c29af"
	},
	{
		"id": "1f87f83ebdb8",
		"ts": "2026-09-25T00:15:57.141Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3565050.11,
		"hash": "1f87f83ebdb8965de64697c108b5f2981c8e58e27fbceaffb2014be7e90110d5"
	},
	{
		"id": "3900bc14edaa",
		"ts": "2026-09-25T00:15:57.380Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1528192.17,
		"hash": "3900bc14edaa834fbb33022c716b46fa88c968ff832ac30bf5ee2f7f71893edd"
	},
	{
		"id": "e27ffe5cfe78",
		"ts": "2026-09-25T00:15:57.607Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 818852.31,
		"hash": "e27ffe5cfe78a7a41ee310ce92a83f66b8e554800aa7062c2ede967298d586d2"
	},
	{
		"id": "6a6fae577702",
		"ts": "2026-09-25T00:15:57.845Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1876973.95,
		"hash": "6a6fae577702a97b03a60583211f5f9c4a11ac5f48603ef5f432685a958a418a"
	},
	{
		"id": "df216e1a8faf",
		"ts": "2026-09-25T00:15:58.071Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1254636.18,
		"hash": "df216e1a8faf3fd16c5aed8003ef0b1206d4d86d370bf2f1309fee1424a8b7c6"
	},
	{
		"id": "9dedffdddc63",
		"ts": "2026-09-25T00:15:58.310Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 153599.61,
		"hash": "9dedffdddc630c6351a8f495af64d00b0c33b8c6a656748239de415aa4076814"
	},
	{
		"id": "301ad6edebbf",
		"ts": "2026-09-25T00:15:58.536Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3336695.06,
		"hash": "301ad6edebbf561d8c6d3cb502efcde3ca79a214c1d17982044b6ec450b94911"
	},
	{
		"id": "e7c8ce9ba1d3",
		"ts": "2026-09-24T21:55:53.511Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 153687094.04,
		"hash": "e7c8ce9ba1d35e92f377039b02fa2722cf9d47ad9a929f909a93f7ce06584c41"
	},
	{
		"id": "475037c2e7fc",
		"ts": "2026-09-24T21:55:54.186Z",
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
		"liquidityUsd": 17004085.04,
		"hash": "475037c2e7fc17af6b108eae47e90af21f1f78f1754dab1b4bd9486ca71ad65b"
	},
	{
		"id": "f20474183395",
		"ts": "2026-09-24T21:55:54.666Z",
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
		"liquidityUsd": 867628.64,
		"hash": "f20474183395c17af2f9ab64794d4fb6f608a6635452461a9607701eab25163a"
	},
	{
		"id": "d5fd14eaefaf",
		"ts": "2026-09-24T21:55:55.149Z",
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
		"liquidityUsd": 36645290.13,
		"hash": "d5fd14eaefaf84fa7d250d3e38da681ca910d2910afbc75a2afe47e4d11a2e4a"
	},
	{
		"id": "96e13964414c",
		"ts": "2026-09-24T21:55:55.627Z",
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
		"liquidityUsd": 4542802.93,
		"hash": "96e13964414c637ce0413d2d26328b2064c526a32ff324c9fbe2ea44a33a9dfb"
	},
	{
		"id": "7c200771aa18",
		"ts": "2026-09-24T21:55:55.915Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1302911.68,
		"hash": "7c200771aa183b957f38acaa50840b9055f400ab3dc4d0eb3eb63c9fa998d063"
	},
	{
		"id": "cb78fcd92584",
		"ts": "2026-09-24T21:55:56.203Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36639604.64,
		"hash": "cb78fcd925849f2bbaf2589834c664b02b844ab607c971b6bdab9a6a2f0b9064"
	},
	{
		"id": "54556559ce49",
		"ts": "2026-09-24T21:55:56.707Z",
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
		"liquidityUsd": 1453175.29,
		"hash": "54556559ce49f02ff758a1cb935147f45ffae2af2f0038faad615e2818a881dd"
	},
	{
		"id": "e255993c6aaa",
		"ts": "2026-09-24T21:55:56.986Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 114524.77,
		"hash": "e255993c6aaa4599e265414359faa866f204395956f60a203c10a4a9ce079430"
	},
	{
		"id": "f637cdd0ada6",
		"ts": "2026-09-24T21:55:57.466Z",
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
		"liquidityUsd": 19088968.58,
		"hash": "f637cdd0ada633d419428bec4607dd7371f25b1b06bd3babe9d2d829d60b12f5"
	},
	{
		"id": "8d99047773fa",
		"ts": "2026-09-24T21:55:57.765Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2973585.04,
		"hash": "8d99047773fa135aadd3fcefd46beaa84242afa07a5c2a3720eb0bad82de3a0b"
	},
	{
		"id": "16509f594648",
		"ts": "2026-09-24T21:55:58.028Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1533626.24,
		"hash": "16509f59464863b56155d2fd888d5e50fc4ab6ccbf271ee79de22237b4893958"
	},
	{
		"id": "2441eac201b6",
		"ts": "2026-09-24T21:55:58.291Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 477215.16,
		"hash": "2441eac201b6eb54ce27308c979d8d4600c651a57c6e5da4277033b6527595b5"
	},
	{
		"id": "c31700a5de91",
		"ts": "2026-09-24T21:55:58.556Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3466592.65,
		"hash": "c31700a5de9195e6b216504c629df35bd3aada06f54da272c08fb28f7abd0763"
	},
	{
		"id": "76c95ba75522",
		"ts": "2026-09-24T21:55:58.819Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 819530.53,
		"hash": "76c95ba75522a4b1a2bf55183b0484a6892af1e7237a58ffd96553974aa2a225"
	},
	{
		"id": "94f225df5965",
		"ts": "2026-09-24T21:55:59.083Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 162153.07,
		"hash": "94f225df59659dfe4a2b99d283ef3d23965cadad44a93debe9f64f6291b31a69"
	},
	{
		"id": "e10351610704",
		"ts": "2026-09-24T21:55:59.345Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2823177.94,
		"hash": "e103516107044da03f36c6b1c6473a347074d3dac70fc2a1d64bdb3350ad8170"
	},
	{
		"id": "abadca215e89",
		"ts": "2026-09-24T21:55:59.608Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 560946.9,
		"hash": "abadca215e896638a1510f880f45a952981a7be51725dd2b8a4ef3367762bb1e"
	},
	{
		"id": "278b680259c8",
		"ts": "2026-09-24T21:55:59.873Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1119221.64,
		"hash": "278b680259c8bc871c89b0160fe2e30276f63c50afca1720e47b0735e85b8761"
	},
	{
		"id": "2802c22e1df5",
		"ts": "2026-09-24T18:07:43.284Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 152867881.74,
		"hash": "2802c22e1df5ecf83bd401dea836687e4788f682449b30b0910d0b889e1708a7"
	},
	{
		"id": "a20190ed4678",
		"ts": "2026-09-24T18:07:43.657Z",
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
		"liquidityUsd": 13960095.1,
		"hash": "a20190ed4678c63de9622e4d1ca14fd7526c74420f0f3eba42b90fe524cbae0c"
	},
	{
		"id": "ad17f6a4fecb",
		"ts": "2026-09-24T18:07:43.860Z",
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
		"liquidityUsd": 860696.72,
		"hash": "ad17f6a4fecbe839c53537ebf83d56c8c23ded5a28f9c34d778959085b005a77"
	},
	{
		"id": "4d368f40e4b9",
		"ts": "2026-09-24T18:07:44.057Z",
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
		"liquidityUsd": 36566754.05,
		"hash": "4d368f40e4b9dfa70ca7fc7204ae65dce8069326848b74c0adab46d91094bc51"
	},
	{
		"id": "d6f1c277fb72",
		"ts": "2026-09-24T18:07:44.254Z",
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
		"liquidityUsd": 4512964.39,
		"hash": "d6f1c277fb72cc181392c20a9b169f8b225be1b6bde6fdeb9a84adcce9470848"
	},
	{
		"id": "f7b15b303f18",
		"ts": "2026-09-24T18:07:44.502Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1292512.77,
		"hash": "f7b15b303f18d758dd619f14797f7c9110dbc57c88df3e2a83e13b17841a28f2"
	},
	{
		"id": "f39f2869e12b",
		"ts": "2026-09-24T18:07:44.698Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36566754.05,
		"hash": "f39f2869e12b2457868bb196c3104dc33e40b30654e4d3e49b5c74d17b00b573"
	},
	{
		"id": "d57b50c7df49",
		"ts": "2026-09-24T18:07:44.908Z",
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
		"liquidityUsd": 1437561.34,
		"hash": "d57b50c7df49bd70f4e56a31bb5f0aa1c375d5cd40c25131e08ff46e3c369b7b"
	},
	{
		"id": "4a6d7643d8e2",
		"ts": "2026-09-24T18:07:45.109Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 141506.41,
		"hash": "4a6d7643d8e24e1984ffa8a65a6d5c21b85309f0d9ce341f3a6f58913198846a"
	},
	{
		"id": "8493a83c136f",
		"ts": "2026-09-24T18:07:45.304Z",
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
		"liquidityUsd": 18659754.94,
		"hash": "8493a83c136fc6aef1ab4f1419859e5d3e414534333990b6f808e57a2fcaa382"
	},
	{
		"id": "366d94b61019",
		"ts": "2026-09-24T18:07:45.527Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2935505.27,
		"hash": "366d94b610197a61564c172ef56da7ea60cc63845010759fe4d6ad92f3d1b137"
	},
	{
		"id": "ddc014678756",
		"ts": "2026-09-24T18:07:45.715Z",
		"symbol": "CATALYST",
		"token": "0xcA7A1E31b36779cf32acb18714Ab26982CF36B05",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1122031.6,
		"hash": "ddc014678756da153478244bacd425767827e825d82acc6e86d8b8551b5dc043"
	},
	{
		"id": "354309a70467",
		"ts": "2026-09-24T18:07:45.895Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1527750.86,
		"hash": "354309a70467920e32fb0648228f3e5cfd3167b8cea91cdb851377ccd2fef23c"
	},
	{
		"id": "660a40f4d0c2",
		"ts": "2026-09-24T18:07:46.092Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 483821.98,
		"hash": "660a40f4d0c2e72b52030fdc20323ab0a79fdb3580fd3d16df419b867e61455c"
	},
	{
		"id": "3f8f63773559",
		"ts": "2026-09-24T18:07:46.282Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3415773.79,
		"hash": "3f8f637735598c1224f2db645593bad67d739a9a194489226062958e18a324fb"
	},
	{
		"id": "ad5448dfa6b3",
		"ts": "2026-09-24T18:07:46.463Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 824919.59,
		"hash": "ad5448dfa6b30aa65a78ee69e3eec3edf8c89f9b720b800128a36a4d0a4b0bca"
	},
	{
		"id": "9cef5a5ba1a8",
		"ts": "2026-09-24T18:07:46.655Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 611696.98,
		"hash": "9cef5a5ba1a867f84b2c1b5bfceb9995762568ef7b22a32803a63f5ad32310e2"
	},
	{
		"id": "35ac403fba4a",
		"ts": "2026-09-24T18:07:46.854Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 149758.63,
		"hash": "35ac403fba4af8847bb3a5f42dbdeeeb8bd5d4d236609e3d3dfd76f0e7a67793"
	},
	{
		"id": "e70fe1bb6eae",
		"ts": "2026-09-24T18:07:47.050Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1214834.25,
		"hash": "e70fe1bb6eaefcc1284266270e3b4cc618008a34a3b17ed0b306f5b093a2a580"
	},
	{
		"id": "4bc4cbec49f8",
		"ts": "2026-09-24T13:07:51.148Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 151626100.07,
		"hash": "4bc4cbec49f82287c92959e235008b70f522cfaad29f8886447840a0a329fb5f"
	},
	{
		"id": "43819347b10a",
		"ts": "2026-09-24T13:07:51.446Z",
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
		"liquidityUsd": 17267215.62,
		"hash": "43819347b10a7b9ed82d90a5a3e5e1aaa2c17928638c42d56009dda49c9da77d"
	},
	{
		"id": "bbc9b61b349f",
		"ts": "2026-09-24T13:07:51.708Z",
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
		"liquidityUsd": 866418.43,
		"hash": "bbc9b61b349f6a80115e60532653e431a6b16cc84302361c948fd7654dad9073"
	},
	{
		"id": "e80d2943eab7",
		"ts": "2026-09-24T13:07:51.972Z",
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
		"liquidityUsd": 36028926.45,
		"hash": "e80d2943eab78ab898e16fad706795d24c95a07ba8e628e26c1adf69d16184ce"
	},
	{
		"id": "ab3751eeb7e7",
		"ts": "2026-09-24T13:07:52.238Z",
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
		"liquidityUsd": 4380578.51,
		"hash": "ab3751eeb7e7bf2995d8d72d91410ec17178bfaab6954c87da997bcff54d0a4d"
	},
	{
		"id": "52b8c303f312",
		"ts": "2026-09-24T13:07:52.501Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1262549.22,
		"hash": "52b8c303f312963789abd619122086d45c595bdc4cf93f256e45fe9ad8600c98"
	},
	{
		"id": "a0904fe9dbdb",
		"ts": "2026-09-24T13:07:52.763Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36028926.45,
		"hash": "a0904fe9dbdbbeefc7f00e1d5832953a6937307e343fdd7bc622257f80fae60e"
	},
	{
		"id": "f3decff26606",
		"ts": "2026-09-24T13:07:53.039Z",
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
		"liquidityUsd": 2661060.5,
		"hash": "f3decff266061896356599a9535f4dec49438ad8ad82fcd87be4d3809abe9463"
	},
	{
		"id": "74a19ddbce07",
		"ts": "2026-09-24T13:07:53.300Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 209071.16,
		"hash": "74a19ddbce07807483ffa472fef78a08abdc089f8065987cad9351d25ee3bf08"
	},
	{
		"id": "3999689d519c",
		"ts": "2026-09-24T13:07:53.565Z",
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
		"liquidityUsd": 18032392.1,
		"hash": "3999689d519ce2667de55cb3ed1a625e83e4d67ec778d9afedabe5c395bcf86b"
	},
	{
		"id": "385023242618",
		"ts": "2026-09-24T13:07:53.812Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2750808.56,
		"hash": "3850232426187ec92b75e8b98d92369584f61009ee3be4d2cb2af8ef2ae5c75e"
	},
	{
		"id": "358e721c2c21",
		"ts": "2026-09-24T13:07:54.056Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1509183.72,
		"hash": "358e721c2c21b5495a68de10137d8ba310ad03c7b80913701c3cf02097a83721"
	},
	{
		"id": "7f77846ca7de",
		"ts": "2026-09-24T13:07:54.295Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 465680.9,
		"hash": "7f77846ca7de53de01ccee97aaee5f13e679ce7047ba1523831f66d2b4bedc3a"
	},
	{
		"id": "a2323cb2a270",
		"ts": "2026-09-24T13:07:54.540Z",
		"symbol": "CATALYST",
		"token": "0xcA7A1E31b36779cf32acb18714Ab26982CF36B05",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1132746.79,
		"hash": "a2323cb2a27096ee2e9aab6d301f2d90736e449105a2d66b926eea7271ad778e"
	},
	{
		"id": "d4f89e65a036",
		"ts": "2026-09-24T13:07:54.778Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 603647.01,
		"hash": "d4f89e65a036673c00158622b3b0b6828cfe08681294cb06f88c82259493eceb"
	},
	{
		"id": "1a6884c54d89",
		"ts": "2026-09-24T13:07:55.025Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 782428.95,
		"hash": "1a6884c54d8911c3771bbba4d6417ca8e758f8dc1675c6d41cd186ab87341f28"
	},
	{
		"id": "d806039d2721",
		"ts": "2026-09-24T13:07:55.269Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3389745.46,
		"hash": "d806039d27211c6ef25838763408e1d4bf51dbaae82ca531573a5e7eab60e62a"
	},
	{
		"id": "1fa8be730c44",
		"ts": "2026-09-24T13:07:55.510Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4193056.38,
		"hash": "1fa8be730c444d48cb3e14b834dc68a72fa27ae41a90354f9ce386ef759c6b6f"
	},
	{
		"id": "f16f2d61dfd9",
		"ts": "2026-09-24T13:07:55.754Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1066172.4,
		"hash": "f16f2d61dfd9869ae320de8d8653427185960a9a0eae76b8c285de734eeca91f"
	},
	{
		"id": "08a6d33a44fc",
		"ts": "2026-09-24T07:06:32.069Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 152464158.8,
		"hash": "08a6d33a44fcb61854bb16f4a52f62d8f24d769b38b91c5f6dbb9f2eb4d5fec9"
	},
	{
		"id": "4ebff9e9692b",
		"ts": "2026-09-24T07:06:32.344Z",
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
		"liquidityUsd": 16079008.8,
		"hash": "4ebff9e9692beaac0c699741e15fc11dad56e25aa828afd6d0b3b5e2063b356e"
	},
	{
		"id": "1da174672fdc",
		"ts": "2026-09-24T07:06:32.588Z",
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
		"liquidityUsd": 879973.95,
		"hash": "1da174672fdcc72e0e8183fa647ddb713db8c2b36976b92c81736e90f72ceea6"
	},
	{
		"id": "d94b5709b605",
		"ts": "2026-09-24T07:06:32.845Z",
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
		"liquidityUsd": 36045793.47,
		"hash": "d94b5709b605eb386812dc05c30ac7672e9eb30c75e8d14039bd95e58d71b6c1"
	},
	{
		"id": "08399c8cc71a",
		"ts": "2026-09-24T07:06:33.087Z",
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
		"liquidityUsd": 4458745.45,
		"hash": "08399c8cc71a61f724f70dfc72df6e6f6603c40f85661e65c13c7f5dbdefbdad"
	},
	{
		"id": "089b5c651457",
		"ts": "2026-09-24T07:06:33.343Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1273739.92,
		"hash": "089b5c6514576439d202c880b29a83dc4f02e8e31d21dc2b9d16d8c351533cf9"
	},
	{
		"id": "2dc74dfaff98",
		"ts": "2026-09-24T07:06:33.600Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36045788.77,
		"hash": "2dc74dfaff986be0806ec9b5aa91735a24decb5b15681b3990970519173bcc53"
	},
	{
		"id": "58b1a6df1992",
		"ts": "2026-09-24T07:06:33.846Z",
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
		"liquidityUsd": 1448361.68,
		"hash": "58b1a6df1992cbe401f129e31b3b0eeb52c5ad64d904176408d94468a9de8125"
	},
	{
		"id": "1ac93ed70891",
		"ts": "2026-09-24T07:06:34.105Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2825149.63,
		"hash": "1ac93ed708910603b6be53c62555da87732e06c787066e1adc6516f4c77d562e"
	},
	{
		"id": "22cde507fb11",
		"ts": "2026-09-24T07:06:34.363Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 224142.47,
		"hash": "22cde507fb1142fa84c5d7849454027729f0fd835ebd8acbba61358b88488ccf"
	},
	{
		"id": "9b3b4c3908b7",
		"ts": "2026-09-24T07:06:34.601Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1530246.93,
		"hash": "9b3b4c3908b7737799f8301182dab6cdbab82e77a32389026bc60064318b4d7f"
	},
	{
		"id": "39bf98f2341b",
		"ts": "2026-09-24T07:06:34.836Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18586904.29,
		"hash": "39bf98f2341b18c43b655fe503347ba8c5e34a120e034331dff5286e44e800fd"
	},
	{
		"id": "1cdc8507f8f9",
		"ts": "2026-09-24T07:06:35.071Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3448805.59,
		"hash": "1cdc8507f8f9a8e7d354a1177fdde4a4500cd33b00cb09d2a158344d61a1a461"
	},
	{
		"id": "939e60b0cfb0",
		"ts": "2026-09-24T07:06:35.306Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 588495.74,
		"hash": "939e60b0cfb0cabf67e4ff2d2ef6972e19bbafeb88e63aa3639cfcc2b73304c2"
	},
	{
		"id": "5a325356eb68",
		"ts": "2026-09-24T07:06:35.528Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 459942.37,
		"hash": "5a325356eb685ed2d0fe5df622fd1fcccef4a8da98566734eee7e2b56fd36cbf"
	},
	{
		"id": "069a83163d49",
		"ts": "2026-09-24T07:06:35.764Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 755148.94,
		"hash": "069a83163d49b47e9214b9426d8bbc0b9fdd73c10e1b3d1a6d9dd84264b0b850"
	},
	{
		"id": "fe80853db260",
		"ts": "2026-09-24T07:06:35.997Z",
		"symbol": "CATALYST",
		"token": "0xcA7A1E31b36779cf32acb18714Ab26982CF36B05",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 1104490.94,
		"hash": "fe80853db260214c9e8af612f8d77034df25a7a21644a17b13eeea10e7955b0e"
	},
	{
		"id": "52fdd23406f7",
		"ts": "2026-09-24T07:06:36.221Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1077739.97,
		"hash": "52fdd23406f7e85572eb0a9c5b4caafd5aeb2d93f936bce05f3f9282711500ab"
	},
	{
		"id": "7b36f9706bea",
		"ts": "2026-09-24T07:06:36.455Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3640667.3,
		"hash": "7b36f9706bea4f011be1378d788903fe86d96c0b3146cd2890b21bc465b93809"
	},
	{
		"id": "1726d3c24479",
		"ts": "2026-09-24T01:01:04.376Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 152209908.73,
		"hash": "1726d3c24479fe524aea17eab3f8c5847cd586d5f67a55ef0a5a0a5127943541"
	},
	{
		"id": "526df76e3b09",
		"ts": "2026-09-24T01:01:04.645Z",
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
		"liquidityUsd": 17444635.41,
		"hash": "526df76e3b09c9603dc55d17dc63a9686ed156fa072f1988d58b3f356dc8da30"
	},
	{
		"id": "82cdf42fc7e7",
		"ts": "2026-09-24T01:01:04.901Z",
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
		"liquidityUsd": 878840.96,
		"hash": "82cdf42fc7e78494525e677d9cb181c7b70845ededc0b61582c69aa760662aa9"
	},
	{
		"id": "84f5dadbf0df",
		"ts": "2026-09-24T01:01:05.213Z",
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
		"liquidityUsd": 35884684.36,
		"hash": "84f5dadbf0df5d0de401d4b15b8ac67ea453d51370a6c8ead94a60edbea3b513"
	},
	{
		"id": "6b8a274a9fe6",
		"ts": "2026-09-24T01:01:05.498Z",
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
		"liquidityUsd": 4454925.34,
		"hash": "6b8a274a9fe6716c9aca8fe60f14bb4e2a91410891500cf4ee1305dc12fc6efa"
	},
	{
		"id": "926b29594655",
		"ts": "2026-09-24T01:01:05.760Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1253553.81,
		"hash": "926b295946552c3726b5c8396c800d7a8ab55ffbc2a4f4709e787bf1adeb6959"
	},
	{
		"id": "666c77fd3722",
		"ts": "2026-09-24T01:01:06.046Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 35884684.36,
		"hash": "666c77fd3722fc4e1538601cf0bd8892ff4b66a1d71a079427940640a35c750b"
	},
	{
		"id": "fb58eea05302",
		"ts": "2026-09-24T01:01:06.347Z",
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
		"liquidityUsd": 1364366.67,
		"hash": "fb58eea05302e5398c6fe92acf11ac17015dce14b3244406fdb91f4fc36eee75"
	},
	{
		"id": "6f43d53ee1ec",
		"ts": "2026-09-24T01:01:06.598Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2824707.43,
		"hash": "6f43d53ee1ec79609c5950838e5eebf0f378240e13d783fe194825e62de04207"
	},
	{
		"id": "69df6e08ca27",
		"ts": "2026-09-24T01:01:06.992Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1530508.61,
		"hash": "69df6e08ca27db8eb03c768f1e57c3f7edc2f96f0402af63b4a7fd910de26494"
	},
	{
		"id": "ffc748e3d3a3",
		"ts": "2026-09-24T01:01:07.240Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 656986.49,
		"hash": "ffc748e3d3a3338569fd147aa5c96393f2a27055d06d0e3475840a5ad35bd37e"
	},
	{
		"id": "ab04f0c5f6d6",
		"ts": "2026-09-24T01:01:07.486Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18419404.68,
		"hash": "ab04f0c5f6d6155abd8da06f0c86ec538aa0414b253084e1dbddb4d20b0f6ac0"
	},
	{
		"id": "b834927b9159",
		"ts": "2026-09-24T01:01:07.739Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 211190.45,
		"hash": "b834927b9159f0bbe249a56bba4387fac5db81f022d8cdb2e48d88d4936658a3"
	},
	{
		"id": "72e0bd7c2f04",
		"ts": "2026-09-24T01:01:07.982Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3381425.79,
		"hash": "72e0bd7c2f04d943607f3c306dc7780e705188e312b11624b0ae65f9a2759070"
	},
	{
		"id": "2123cc7602eb",
		"ts": "2026-09-24T01:01:08.213Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 757321.55,
		"hash": "2123cc7602ebbf755cde435da937ad292b460831bdb84750be24a9317ba2ecd6"
	},
	{
		"id": "014e6f9aa7ee",
		"ts": "2026-09-24T01:01:08.456Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 750068.46,
		"hash": "014e6f9aa7ee345abcc991f97cfe0aa713c67c6821b0bb5a6f0dff745a5f5807"
	},
	{
		"id": "063d890a4eb5",
		"ts": "2026-09-24T01:01:08.685Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1095798.78,
		"hash": "063d890a4eb5dbb50e9e58d1aa4fb8e3d02eef19b1196ecaa8af625182258895"
	},
	{
		"id": "d237036a6233",
		"ts": "2026-09-24T01:01:08.913Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1946472.01,
		"hash": "d237036a6233ae7bf87fa6b90f31ad6a8a0219051e963df8003730f2f6f376ff"
	},
	{
		"id": "4a2280be719d",
		"ts": "2026-09-24T01:01:09.155Z",
		"symbol": "CATALYST",
		"token": "0xcA7A1E31b36779cf32acb18714Ab26982CF36B05",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 1171695.9,
		"hash": "4a2280be719d126c49a576f7cc40a121eacbb8c682c92e03c7813e5ea9a58c2b"
	},
	{
		"id": "4531970967a9",
		"ts": "2026-09-23T22:00:39.118Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 151676829.14,
		"hash": "4531970967a921b578c384f8875a52a98994baba37880aff833b4c7ea856b071"
	},
	{
		"id": "b0c892dec613",
		"ts": "2026-09-23T22:00:39.498Z",
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
		"liquidityUsd": 12993722.58,
		"hash": "b0c892dec613bb68978d9fb78d7833651493af2e938636092af1ff5b6326d963"
	},
	{
		"id": "41fd43ec40d5",
		"ts": "2026-09-23T22:00:39.747Z",
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
		"liquidityUsd": 879063.55,
		"hash": "41fd43ec40d5483d80b7ca43eb285415e9519951d96ac88e95568a2049d1e61b"
	},
	{
		"id": "3ae107f9b56d",
		"ts": "2026-09-23T22:00:40.014Z",
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
		"liquidityUsd": 35845951.78,
		"hash": "3ae107f9b56d268754bd26dbc0466861fc51fb8b4d169b732cbceca3a90efca4"
	},
	{
		"id": "aa14b87f6cb9",
		"ts": "2026-09-23T22:00:40.312Z",
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
		"liquidityUsd": 4432394.82,
		"hash": "aa14b87f6cb9ba10ca6cb94b7279e72a56111ccce6a4d6141306412741b0c541"
	},
	{
		"id": "b0343e5a2a4f",
		"ts": "2026-09-23T22:00:40.574Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1252461.9,
		"hash": "b0343e5a2a4f154c17907e8cf2fd61115f39c60a39826f012dd0f4759db4ae2d"
	},
	{
		"id": "ffc1b136bc0c",
		"ts": "2026-09-23T22:00:40.890Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 35845951.78,
		"hash": "ffc1b136bc0c5dff98ba31546c9bff3184d7be6bd5b9783f2f961b2bccfd0219"
	},
	{
		"id": "098c4b35e162",
		"ts": "2026-09-23T22:00:41.194Z",
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
		"liquidityUsd": 1362577.42,
		"hash": "098c4b35e162d3f41da4fc9b949c4deed403b0b5544a0d9376da459f4d137c18"
	},
	{
		"id": "e2f2cf4a0908",
		"ts": "2026-09-23T22:00:41.464Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2802482.97,
		"hash": "e2f2cf4a09084e082108d206da41fc9ef98d9cf05d8994e4624c685756befd99"
	},
	{
		"id": "993e503de516",
		"ts": "2026-09-23T22:00:41.734Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1579407,
		"hash": "993e503de51608f6cf3329e7ea4858792b32964f4e0250deb77e153167c88997"
	}
]
