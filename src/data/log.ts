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
	"updatedAt": "2026-07-04T20:52:54.816Z",
	"tokensScored": 1417,
	"verdictsIssued": 1417,
	"safe": 1244,
	"risky": 133,
	"likelyRug": 40,
	"ticks": 98
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "2bec554f4d9c",
		"ts": "2026-07-04T20:52:51.765Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100853296.49,
		"hash": "2bec554f4d9ca042de2da7fbac3e43bd78e4fa000c23463cd52c9fdac3e90b2e"
	},
	{
		"id": "d6cddb81a2e7",
		"ts": "2026-07-04T20:52:51.978Z",
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
		"liquidityUsd": 15625333.69,
		"hash": "d6cddb81a2e7495910b2849d917a42ff0d09e6facce461cd1224042adcc38c4b"
	},
	{
		"id": "8f3ff350eb9d",
		"ts": "2026-07-04T20:52:52.166Z",
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
		"liquidityUsd": 1390773.25,
		"hash": "8f3ff350eb9dad5d6ef3449a0536b89508b822dc3cb0e0ec916dc143b9e9077e"
	},
	{
		"id": "0ea250c070cb",
		"ts": "2026-07-04T20:52:52.352Z",
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
		"liquidityUsd": 33503202.12,
		"hash": "0ea250c070cb17ff6ebd83b96103a6d216942248531b7d73598f0d125e476bad"
	},
	{
		"id": "0497126b6a9f",
		"ts": "2026-07-04T20:52:52.540Z",
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
		"liquidityUsd": 4188732.43,
		"hash": "0497126b6a9fbf10f6329195b69be173a2425e885a06ff9b8b57a2bcc3771c54"
	},
	{
		"id": "a7346fba5f20",
		"ts": "2026-07-04T20:52:52.725Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1010371.42,
		"hash": "a7346fba5f20089876c2ea3396c67294a493f82bc3474ed6cdd3ba0a84a9da6a"
	},
	{
		"id": "e10b559b4990",
		"ts": "2026-07-04T20:52:52.911Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33503202.12,
		"hash": "e10b559b49900a91f3504995505f6eb9b943eb662e816c53bc1e14c2ac13b733"
	},
	{
		"id": "90e0042e93b9",
		"ts": "2026-07-04T20:52:53.098Z",
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
		"liquidityUsd": 2449647.15,
		"hash": "90e0042e93b95f2c1bd4790df8c2b24e2b42140588b1002e3cc7439f8a0bbe32"
	},
	{
		"id": "76f7d5da6b51",
		"ts": "2026-07-04T20:52:53.353Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2247432.09,
		"hash": "76f7d5da6b51bd3f37286bc5695f7cb7e4bcfe657dfcabf53f9c16bb3e13c7fe"
	},
	{
		"id": "1655f103ff38",
		"ts": "2026-07-04T20:52:53.539Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 392724.2,
		"hash": "1655f103ff389f874ab3a720767aebb7b0278cab2886d205c05cdd5a5cc3cfac"
	},
	{
		"id": "fc40ebdf629a",
		"ts": "2026-07-04T20:52:53.716Z",
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
		"liquidityUsd": 857567.64,
		"hash": "fc40ebdf629a83b4e6144ef58935f4d70dd36c0c7cf6e9f1de2736d0a830538a"
	},
	{
		"id": "8e51c1428de0",
		"ts": "2026-07-04T20:52:53.902Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3803280.69,
		"hash": "8e51c1428de04bc0e0a863d8d4550093c5628e75f55b9bd9c222aa0dfd069c16"
	},
	{
		"id": "825a104199c3",
		"ts": "2026-07-04T20:52:54.087Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7997331.53,
		"hash": "825a104199c32b437e637baf7453ece6a04c3c8c091a2803f05da9ed8a4a2be3"
	},
	{
		"id": "34be16864614",
		"ts": "2026-07-04T20:52:54.268Z",
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
		"liquidityUsd": 1570301.51,
		"hash": "34be168646149bd5b92b3418451e98b9371a710af74b6ee30770b903f80d83ff"
	},
	{
		"id": "4c8727ae5303",
		"ts": "2026-07-04T20:52:54.624Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4827174.73,
		"hash": "4c8727ae530350f8532c2ab48d43278e294dc4bdaedc840c9665a60b41642210"
	},
	{
		"id": "f59f1b0a9947",
		"ts": "2026-07-04T20:52:54.816Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2125209.24,
		"hash": "f59f1b0a9947b919f424ec9fc125b6dccf01e4cac38238a92196db93622aefa7"
	},
	{
		"id": "2ba08d9673ca",
		"ts": "2026-07-04T19:05:38.986Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 101039410.68,
		"hash": "2ba08d9673ca8b0522c7d23123ab9bac1bd4527e4ff069ef269d6d430b455394"
	},
	{
		"id": "f876d0274db6",
		"ts": "2026-07-04T19:05:39.335Z",
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
		"liquidityUsd": 16331689.95,
		"hash": "f876d0274db686d3c0c256ea3f8aacf2dbae49f324a0c408fa3415eb4c5189fe"
	},
	{
		"id": "81e100984612",
		"ts": "2026-07-04T19:05:39.531Z",
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
		"liquidityUsd": 1398371.37,
		"hash": "81e10098461285ed26c7403fc365ed7341b624df8417b5c2d3f48d46359a17dc"
	},
	{
		"id": "0961c69701a0",
		"ts": "2026-07-04T19:05:39.727Z",
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
		"liquidityUsd": 33392457.31,
		"hash": "0961c69701a01efe3d3b5ef751d971f7086df0e38cf158b511bdc359432f523c"
	},
	{
		"id": "2d49d2821cd9",
		"ts": "2026-07-04T19:05:39.920Z",
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
		"liquidityUsd": 4216921.33,
		"hash": "2d49d2821cd9fad1ad46ffc619c6df1a4a88026687df6527a148da6bd7ccc0d8"
	},
	{
		"id": "a4e91327a584",
		"ts": "2026-07-04T19:05:40.111Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1005692.31,
		"hash": "a4e91327a5848e1c35f9906ceaa0611306e432a00188a8de531f0a7fdef5b7b8"
	},
	{
		"id": "2caad275e8cc",
		"ts": "2026-07-04T19:05:40.301Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33392457.31,
		"hash": "2caad275e8cc9296e05bb8922bcf0640e083fd587f6b009464baacafe936ec1d"
	},
	{
		"id": "a56d0d91ee00",
		"ts": "2026-07-04T19:05:40.493Z",
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
		"liquidityUsd": 2456628.82,
		"hash": "a56d0d91ee007802603e628f953ad1a4b8293f5d2efb04048145315c6506e9a9"
	},
	{
		"id": "c95b82a9bfd4",
		"ts": "2026-07-04T19:05:40.694Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2298213.32,
		"hash": "c95b82a9bfd4da86d2f54dce790902c414cf81b983062c7f46e5796e95ca3733"
	},
	{
		"id": "d9cc1a6623cd",
		"ts": "2026-07-04T19:05:40.886Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 379341.37,
		"hash": "d9cc1a6623cdf7187c259c5c306bb57f1975d4bf267e53d644c343c61d3f6270"
	},
	{
		"id": "486b785dd94f",
		"ts": "2026-07-04T19:05:41.064Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3718766.61,
		"hash": "486b785dd94f29f2e524d9cbcbe84e47e5f821d54faec0f15d7927ef0b0601bf"
	},
	{
		"id": "838e3b16e36c",
		"ts": "2026-07-04T19:05:41.243Z",
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
		"liquidityUsd": 857597.29,
		"hash": "838e3b16e36c60c1b485298c458e43a61afd2d271328c9af20adc6221f2bdea9"
	},
	{
		"id": "1e459d6a0f11",
		"ts": "2026-07-04T19:05:41.420Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8054959.62,
		"hash": "1e459d6a0f11e3026a9d526721567b20e0e25f60942e05230e19cfda7eb4d192"
	},
	{
		"id": "5586983bfe70",
		"ts": "2026-07-04T19:05:41.596Z",
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
		"liquidityUsd": 1544653.9,
		"hash": "5586983bfe70d80f4214537b505e9825829c368902ed84cf3127a79941718aea"
	},
	{
		"id": "01f8f4add849",
		"ts": "2026-07-04T19:05:41.772Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4874803.21,
		"hash": "01f8f4add8494d1284806dfa5b859398ac3807789f6bda3fcd5f7eb80b7cf4df"
	},
	{
		"id": "9bcfb250526f",
		"ts": "2026-07-04T19:05:41.956Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2147824.51,
		"hash": "9bcfb250526f0fe3a1e7d1883396b47ecadb9cc3bbd51c4e704e32a1dbcf221c"
	},
	{
		"id": "26d74c83ee51",
		"ts": "2026-07-04T17:13:21.702Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100842802.6,
		"hash": "26d74c83ee518c77ce98564deb34fb52152ea0d41cb8a6975d9799a413080e0e"
	},
	{
		"id": "5341d34675e1",
		"ts": "2026-07-04T17:13:22.443Z",
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
		"liquidityUsd": 16160326.04,
		"hash": "5341d34675e1d93257b50a231b553241d36e91a3a1877856f0a81a93970ababc"
	},
	{
		"id": "7f0b8a4af4d6",
		"ts": "2026-07-04T17:13:22.954Z",
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
		"liquidityUsd": 1396065.9,
		"hash": "7f0b8a4af4d64199f3302a395ec201832759ca44978bca635e75b8b46cd3d556"
	},
	{
		"id": "7fffea664320",
		"ts": "2026-07-04T17:13:23.438Z",
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
		"liquidityUsd": 32311799.78,
		"hash": "7fffea66432013dd97e752d24b4e455146b5c8965d1e0ace91e0b8bc1670264e"
	},
	{
		"id": "65cfb40c7f04",
		"ts": "2026-07-04T17:13:23.915Z",
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
		"liquidityUsd": 4186512.62,
		"hash": "65cfb40c7f047806094f5213a12e6589e13c0e2d41bccaeefd61b562c6445c18"
	},
	{
		"id": "209973e41b0e",
		"ts": "2026-07-04T17:13:24.173Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1005692.31,
		"hash": "209973e41b0ede6d195141a1a4774b986a4e7cdcb55640c0acdf161e76b9d337"
	},
	{
		"id": "d53306a0d735",
		"ts": "2026-07-04T17:13:25.007Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 32311799.78,
		"hash": "d53306a0d735a6cdcde1dc666fb86ba410991dc880ae7044696a4576cc097447"
	},
	{
		"id": "75e709616f13",
		"ts": "2026-07-04T17:13:25.505Z",
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
		"liquidityUsd": 2484829.44,
		"hash": "75e709616f139a617af8e4a487eda59aca7c6f5bc764ef30ecb0407187200c77"
	},
	{
		"id": "1ead8aa3c508",
		"ts": "2026-07-04T17:13:25.982Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2287241.02,
		"hash": "1ead8aa3c508a953f4a2b5463e0a375106c54c79b77176fe79bd2780a62a95d6"
	},
	{
		"id": "397abece30d3",
		"ts": "2026-07-04T17:13:26.240Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 371793.51,
		"hash": "397abece30d3f7a372f5580b0355ca9c1fcd6a28dc96fe3d79bdc752057f8362"
	},
	{
		"id": "715711c15fa8",
		"ts": "2026-07-04T17:13:26.495Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3728470.31,
		"hash": "715711c15fa8a2415089c9f006191f24b5ec663e2e2566233ec33f279c05c1fc"
	},
	{
		"id": "398b55b102a4",
		"ts": "2026-07-04T17:13:26.745Z",
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
		"liquidityUsd": 854086.24,
		"hash": "398b55b102a42c507c9cd52146be8afd129a9d01aa3073ad0278b39060abbd22"
	},
	{
		"id": "6d7da0f8b2b2",
		"ts": "2026-07-04T17:13:27.484Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7914451.4,
		"hash": "6d7da0f8b2b2a6a874166d47c74227c304f1b5c89cf02a30c4a36aeb85de989b"
	},
	{
		"id": "855938167a11",
		"ts": "2026-07-04T17:13:27.722Z",
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
		"liquidityUsd": 1601388.76,
		"hash": "855938167a11aa6cde446939e8f69fd59b5043bc281b1dba1514010fba581796"
	},
	{
		"id": "f5bd85cb18d0",
		"ts": "2026-07-04T17:13:27.958Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4868503.45,
		"hash": "f5bd85cb18d02b55e580d56a23979563d916e00c43c7480af234a130eb333b24"
	},
	{
		"id": "da08ccc2b95f",
		"ts": "2026-07-04T17:13:28.197Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2120392.09,
		"hash": "da08ccc2b95f5fd657426ed2e7dda2d223ab71a3e02cede465e1c7c3af1e8a10"
	},
	{
		"id": "61812b02967f",
		"ts": "2026-07-04T15:58:43.392Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 101218397.02,
		"hash": "61812b02967f7f8c50c6154f4c7b25dedb9a0bf1ffe5cbe26e78c2d4dea3b0ab"
	},
	{
		"id": "01ab8defed20",
		"ts": "2026-07-04T15:58:44.040Z",
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
		"liquidityUsd": 16725890.67,
		"hash": "01ab8defed2074ae653dfbf935a1cde3b0f8834e8c03fbb67452a3115f88c395"
	},
	{
		"id": "13d7300fbb70",
		"ts": "2026-07-04T15:58:44.481Z",
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
		"liquidityUsd": 1411769.12,
		"hash": "13d7300fbb70869f8e1aa97bae744d88c1ef5d9c789ef8f0f7432f19c320234e"
	},
	{
		"id": "4411c1e4a83d",
		"ts": "2026-07-04T15:58:44.714Z",
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
		"liquidityUsd": 32278368.38,
		"hash": "4411c1e4a83d2aee51928f19a5e92abf133a60a4b46033f963291ee9d219a36c"
	},
	{
		"id": "8b8e405a5c3b",
		"ts": "2026-07-04T15:58:44.952Z",
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
		"liquidityUsd": 4212168.8,
		"hash": "8b8e405a5c3b5688a7b7d7880556681b2055109cb0cbef625c7de4bd96c37690"
	},
	{
		"id": "6d640601bd63",
		"ts": "2026-07-04T15:58:45.189Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1005692.31,
		"hash": "6d640601bd6377bd81aa002f27efbbac68d7297398e2f78558293f32a0aa71dd"
	},
	{
		"id": "0faaa87dff55",
		"ts": "2026-07-04T15:58:45.446Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 32278368.38,
		"hash": "0faaa87dff5572c6a6a26329b5d5be76324e8f2b2a5790ceffa33e047cc0527c"
	},
	{
		"id": "b3bbf4588f6e",
		"ts": "2026-07-04T15:58:45.693Z",
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
		"liquidityUsd": 2498438.56,
		"hash": "b3bbf4588f6e0bc11be22e00c8f21458789971118ab0f530026f3177cac4420d"
	},
	{
		"id": "70299b0ee191",
		"ts": "2026-07-04T15:58:45.931Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2299370.35,
		"hash": "70299b0ee1915db15a938fcc306ba512c0b1d1b6dc0fc1d0d3c69eee4f4f9387"
	},
	{
		"id": "70d1e13e4ee3",
		"ts": "2026-07-04T15:58:46.168Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 384355.89,
		"hash": "70d1e13e4ee3ff191af8ead912069fded4e3940110d9c54c986da5edbedc1401"
	},
	{
		"id": "11e8ecb0817d",
		"ts": "2026-07-04T15:58:46.390Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3603652.33,
		"hash": "11e8ecb0817d34f764049cd6c4f5dada3c118017ab52a7a663c6bf3e562498bb"
	},
	{
		"id": "e102706b9acb",
		"ts": "2026-07-04T15:58:46.612Z",
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
		"liquidityUsd": 857584.18,
		"hash": "e102706b9acb5792de016a9290ce626655a4028a92a3a5edcc46c82997235665"
	},
	{
		"id": "fe01ff6ff114",
		"ts": "2026-07-04T15:58:46.833Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8013558.04,
		"hash": "fe01ff6ff114df7e8a9670e6181db5e0f5b2b59a354f20196a214c9f16364077"
	},
	{
		"id": "cc80b0891a84",
		"ts": "2026-07-04T15:58:47.055Z",
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
		"liquidityUsd": 1628366.36,
		"hash": "cc80b0891a84db2711c4dbc2ed71ce2f15c14b2bfcdb085bc0af42a65ff1719a"
	},
	{
		"id": "0e664b84ef59",
		"ts": "2026-07-04T15:58:47.275Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4997067.09,
		"hash": "0e664b84ef599a290c7bbac71f6b4db14a69f105fc234a5bb73eea245d1bea35"
	},
	{
		"id": "2269ee9c0cb2",
		"ts": "2026-07-04T15:58:47.494Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2151095.84,
		"hash": "2269ee9c0cb292346de14cf3c10675945072b6626de4d81f4d32299d0a0b1f8e"
	},
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
	}
]
