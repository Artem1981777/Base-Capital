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
	"updatedAt": "2026-09-16T23:30:51.962Z",
	"tokensScored": 17639,
	"verdictsIssued": 17639,
	"safe": 14936,
	"risky": 1292,
	"likelyRug": 1411,
	"ticks": 1007
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "6a9b55682c64",
		"ts": "2026-09-16T23:30:47.506Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 125681206.84,
		"hash": "6a9b55682c64ed9cbce3dd764c03c0acc517b6a2e3b4871eaefcf5810952b5ae"
	},
	{
		"id": "c36d579b05d6",
		"ts": "2026-09-16T23:30:47.763Z",
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
		"liquidityUsd": 12609596.9,
		"hash": "c36d579b05d6f4d65342534a69d85042086aaa0c2f2a77e16f66c98e74e83de1"
	},
	{
		"id": "4b56862d8707",
		"ts": "2026-09-16T23:30:48.008Z",
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
		"liquidityUsd": 924887.71,
		"hash": "4b56862d870755f2939396cc796bf50555d83f261069e83a9c632bb40425a03c"
	},
	{
		"id": "006dfa964e12",
		"ts": "2026-09-16T23:30:48.277Z",
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
		"liquidityUsd": 33715453.45,
		"hash": "006dfa964e121b71ab6a3b8a653d783b221309858fd7ae8170c25ed173075a7f"
	},
	{
		"id": "9359161eae66",
		"ts": "2026-09-16T23:30:48.536Z",
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
		"liquidityUsd": 3821139.98,
		"hash": "9359161eae66abca97d95c334a91193a7a6171e262d865e16fc2faecb59c60bb"
	},
	{
		"id": "ba00f82ee17b",
		"ts": "2026-09-16T23:30:48.790Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1146560.44,
		"hash": "ba00f82ee17b7c5b79a332e21efef73993829368888fcc3d3236ab7b8027f252"
	},
	{
		"id": "bcfa646dbf8f",
		"ts": "2026-09-16T23:30:49.056Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2336127.37,
		"hash": "bcfa646dbf8f071545e0c4a838f5d29b9cf47b43ac29e636df26993cdca97363"
	},
	{
		"id": "4a5e475ca747",
		"ts": "2026-09-16T23:30:49.335Z",
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
		"liquidityUsd": 1063977.6,
		"hash": "4a5e475ca7476d55c8d24c5afd7ba9128a70d60503aaa6305fa0e9951893b374"
	},
	{
		"id": "e32074257efe",
		"ts": "2026-09-16T23:30:49.597Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1010242.48,
		"hash": "e32074257efe56c38174252849fe39c12fb0761914ce28b986158b49df9fad11"
	},
	{
		"id": "828acdc598b0",
		"ts": "2026-09-16T23:30:49.862Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 500315.05,
		"hash": "828acdc598b087fbfe3c03181c51d795e8b594ec1b100b6f811bd78015f66b57"
	},
	{
		"id": "dfc1e9fc82a0",
		"ts": "2026-09-16T23:30:50.095Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1517576.77,
		"hash": "dfc1e9fc82a0117b7a05fcfe42d7c64332179396de20dec1d86ea3fdbb81ee4d"
	},
	{
		"id": "aedff46ed299",
		"ts": "2026-09-16T23:30:50.317Z",
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
		"liquidityUsd": 2907793.11,
		"hash": "aedff46ed299ee99bd9922061b667490e36567e9ca22410f61b6654d20f8aaae"
	},
	{
		"id": "61bb73a21634",
		"ts": "2026-09-16T23:30:50.550Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 245687.95,
		"hash": "61bb73a2163441f9ead568d806bdfc189fe2867517984d99653a7ba6f417bec2"
	},
	{
		"id": "2da79d3c9098",
		"ts": "2026-09-16T23:30:50.785Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1789560.06,
		"hash": "2da79d3c909877101819b984056401f73a4033aaec9f15ee6a966a5f4497af1d"
	},
	{
		"id": "33fa74a9d152",
		"ts": "2026-09-16T23:30:51.021Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1314621.29,
		"hash": "33fa74a9d152d2827e0cfe87aed58e9adac19abe2a33cebdc211b89fb4f13ef5"
	},
	{
		"id": "deed208ea7b9",
		"ts": "2026-09-16T23:30:51.254Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1396104.2,
		"hash": "deed208ea7b9e3fe686ad5e9243cf519c04b6cf8ef603f5903c1b6e8044b1048"
	},
	{
		"id": "3f9387af3c77",
		"ts": "2026-09-16T23:30:51.487Z",
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
		"liquidityUsd": 585432.78,
		"hash": "3f9387af3c7756903e1eabb40a7d31d625ee0e298b4c652f76a728bc0e350608"
	},
	{
		"id": "f94a320175a9",
		"ts": "2026-09-16T23:30:51.725Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14014722.2,
		"hash": "f94a320175a91ab6f4616e8fc916957ed2ecf30cad66badffb01edc416fbaf70"
	},
	{
		"id": "8e728f5f03e9",
		"ts": "2026-09-16T23:30:51.961Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2835548.44,
		"hash": "8e728f5f03e925c14732967f25fe418a4af69fc764ae8a61672c6db05f80e4ab"
	},
	{
		"id": "0dce5b3ada6f",
		"ts": "2026-09-16T20:51:10.765Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 125808619.47,
		"hash": "0dce5b3ada6f5fae54f5a9edf965a5865f78c00316731300d1214828c224f809"
	},
	{
		"id": "bed2a57ec852",
		"ts": "2026-09-16T20:51:11.009Z",
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
		"liquidityUsd": 14309550.29,
		"hash": "bed2a57ec852a416682b89079d0e35ee45199f9180d2afee531d4dbbe17f6d68"
	},
	{
		"id": "dbce6c6dd9ff",
		"ts": "2026-09-16T20:51:11.230Z",
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
		"liquidityUsd": 922019.04,
		"hash": "dbce6c6dd9ffa103abb546fd0a9e353f5d6626f121ca4c6787c7a237f3c62563"
	},
	{
		"id": "4bb7d72132f2",
		"ts": "2026-09-16T20:51:11.446Z",
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
		"liquidityUsd": 33389470.67,
		"hash": "4bb7d72132f26670de7e29fa3e1b38254a2d7de2b301168a5167f966e2260721"
	},
	{
		"id": "26009f04a52c",
		"ts": "2026-09-16T20:51:11.659Z",
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
		"liquidityUsd": 3809696.72,
		"hash": "26009f04a52c7ef7561dcf9f40e503239b69cd6173b759bbacc763db8523e862"
	},
	{
		"id": "9c5d24590fd6",
		"ts": "2026-09-16T20:51:11.884Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1127033.02,
		"hash": "9c5d24590fd64c0439894f3f20f34716673e158ab349c925df4e38a77a2b0643"
	},
	{
		"id": "f84dbadd3f37",
		"ts": "2026-09-16T20:51:12.104Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1560936.75,
		"hash": "f84dbadd3f37804dc12f5fcf27677d00613a98851b7b093fc0340a68d92d9d46"
	},
	{
		"id": "f3d4fae89cde",
		"ts": "2026-09-16T20:51:12.332Z",
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
		"liquidityUsd": 1212115.18,
		"hash": "f3d4fae89cde0a72bff09e44321f4e8d823989bdeb4838bd16722925538bdaa3"
	},
	{
		"id": "424510e63ed4",
		"ts": "2026-09-16T20:51:12.567Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1017033.71,
		"hash": "424510e63ed45470c219b64eecf5664212de7da40e24ed42e498e8dbc4cc7c29"
	},
	{
		"id": "32c10b8d57a5",
		"ts": "2026-09-16T20:51:12.803Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 478939.65,
		"hash": "32c10b8d57a58d1b8b52eee52d5559256cbeb2c5535c9ae64d76f80f52ade59d"
	},
	{
		"id": "fc819b0c8b9c",
		"ts": "2026-09-16T20:51:12.999Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1560936.75,
		"hash": "fc819b0c8b9cd5daa4d215485f3cb4155a9d7a702988fe9d555948553d618fcc"
	},
	{
		"id": "fc6f9d80a5b2",
		"ts": "2026-09-16T20:51:13.196Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2898806.07,
		"hash": "fc6f9d80a5b2de25a41ecb29b864260a9fc57fe16d3b64350cef6c3aec7a995a"
	},
	{
		"id": "87e860f61edf",
		"ts": "2026-09-16T20:51:13.394Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 245966.84,
		"hash": "87e860f61edfb34a030d53b3db44b278b928ad08e2c4359d22eb69761612daba"
	},
	{
		"id": "0292faf2ac09",
		"ts": "2026-09-16T20:51:13.598Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 760627.62,
		"hash": "0292faf2ac095729de56c478d9ab464ac6ce4d47c505bdaa23ae064facb2d7d0"
	},
	{
		"id": "ef7e28d4b008",
		"ts": "2026-09-16T20:51:13.790Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1330719.02,
		"hash": "ef7e28d4b0086d77735bc5a36593aea2db866d1b7a74eda9a61afcecf3223d97"
	},
	{
		"id": "4eac07a761a4",
		"ts": "2026-09-16T20:51:13.986Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1357315.25,
		"hash": "4eac07a761a463dbad7f1ebfb5536eb330513bdc388188a1e5c3d5901ff42cf7"
	},
	{
		"id": "5781d8ea5ab5",
		"ts": "2026-09-16T20:51:14.186Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14020235.1,
		"hash": "5781d8ea5ab5551b40f39d11ff977a9e9f9758f873fdff24141f989ca8cd2d99"
	},
	{
		"id": "c92755f74080",
		"ts": "2026-09-16T20:51:14.386Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1118660.66,
		"hash": "c92755f74080e9697c25dc0044c757bdb25166a0eb3a4f164c50f99f6d42871f"
	},
	{
		"id": "d3fc1843a110",
		"ts": "2026-09-16T20:51:14.600Z",
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
		"liquidityUsd": 591081.36,
		"hash": "d3fc1843a110520da9326bf0b740ecb3e906a98a724fca3af47ef10446ae896a"
	},
	{
		"id": "7e0b1338078a",
		"ts": "2026-09-16T17:55:41.286Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 123684328.92,
		"hash": "7e0b1338078a918a294e90b1baf2c7d61a56e2d95583d763a05a4ef12548dfdf"
	},
	{
		"id": "04d9d3cc9532",
		"ts": "2026-09-16T17:55:41.582Z",
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
		"liquidityUsd": 12380681.47,
		"hash": "04d9d3cc9532263850144ec2f1c412ca9bb0072d568e83d9bca326cf17b1435a"
	},
	{
		"id": "52f76e80b036",
		"ts": "2026-09-16T17:55:41.910Z",
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
		"liquidityUsd": 909291.5,
		"hash": "52f76e80b03682b5e708feebc569723c9754c9c4997f620e1c0e77f1399c7726"
	},
	{
		"id": "d3c0bc0ceef4",
		"ts": "2026-09-16T17:55:42.206Z",
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
		"liquidityUsd": 33062523.58,
		"hash": "d3c0bc0ceef414f2f73c360855ba688acc89f2d440ea4a9cdd17d023a9872c0b"
	},
	{
		"id": "38a709bf5694",
		"ts": "2026-09-16T17:55:42.492Z",
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
		"liquidityUsd": 3695848.29,
		"hash": "38a709bf56947195692a095aec1f68eb9f5b4e8a212685cb2961edc7b7879d6f"
	},
	{
		"id": "1211d38dfc40",
		"ts": "2026-09-16T17:55:42.783Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1111090.9,
		"hash": "1211d38dfc406d3ee6b951b5492c5269b19cf9c474667e50220a0b4a138d50f3"
	},
	{
		"id": "e242817485b5",
		"ts": "2026-09-16T17:55:43.106Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1652961.18,
		"hash": "e242817485b553e4c271411a77a910860f4e3e6700127dc05e666a9d8bb6e07c"
	},
	{
		"id": "3738b14eff6a",
		"ts": "2026-09-16T17:55:43.386Z",
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
		"liquidityUsd": 1255808.74,
		"hash": "3738b14eff6a7e447cf79d1d5366bf0bf3ed51e548f9671ee642c295a66720c8"
	},
	{
		"id": "ae4e212710ce",
		"ts": "2026-09-16T17:55:43.687Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 992033.09,
		"hash": "ae4e212710ce82521c2d923b881bf85721faa5da2d579e95fdf061738f059373"
	},
	{
		"id": "22a1971d1f73",
		"ts": "2026-09-16T17:55:43.978Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1652961.18,
		"hash": "22a1971d1f7386cadaef5fe85fda5cc729d071452c337a86feb5896df593cd5f"
	},
	{
		"id": "bbb1ce4ea387",
		"ts": "2026-09-16T17:55:44.261Z",
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
		"liquidityUsd": 495492.2,
		"hash": "bbb1ce4ea387f4656eb2186fb6ebaaca35d33fda91374f23c659e265100cfa52"
	},
	{
		"id": "2bab2d9b8f6c",
		"ts": "2026-09-16T17:55:44.533Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 755108.41,
		"hash": "2bab2d9b8f6c2f98cdf4c70d2e5a7be2db8f42fd6b613c47f24395b3eb0958aa"
	},
	{
		"id": "393cecffbe78",
		"ts": "2026-09-16T17:55:44.804Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2783536.02,
		"hash": "393cecffbe78ef2510a17b5474310ec037b8afd9c5c073ce674563449f4a61ad"
	},
	{
		"id": "7e0c4e69434e",
		"ts": "2026-09-16T17:55:45.080Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 244896.92,
		"hash": "7e0c4e69434ebbf6da51a8c5b4c6d20359d439042ed44fe31ae1b389e860589d"
	},
	{
		"id": "573eb462f88d",
		"ts": "2026-09-16T17:55:45.343Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1315741.28,
		"hash": "573eb462f88d46622ca5f84121871431700cd5620836f0c58ed9320137f22225"
	},
	{
		"id": "60d8d585df3a",
		"ts": "2026-09-16T17:55:45.611Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1786892.16,
		"hash": "60d8d585df3a8534d8a21c3863940fa36ec2cf2e4c82f4a11c91e8f9762737fa"
	},
	{
		"id": "1e3adbb060cc",
		"ts": "2026-09-16T17:55:45.898Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 478140.86,
		"hash": "1e3adbb060cc7a00ad6a565f7e17a869101e581e681b4e34483b615ba152bd4a"
	},
	{
		"id": "d1403275b23c",
		"ts": "2026-09-16T17:55:46.165Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1332268,
		"hash": "d1403275b23c7e5563b0352cedcd128304da5e8f58fd361987c6395d76e45c30"
	},
	{
		"id": "08140ad15e60",
		"ts": "2026-09-16T17:55:46.434Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 455760.36,
		"hash": "08140ad15e600e6ee78d5c592ce762424f37b398cdc0f90fcd5049417a1b6b34"
	},
	{
		"id": "ce194adde7da",
		"ts": "2026-09-16T13:03:54.775Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 124363715.36,
		"hash": "ce194adde7da963574271e7602535e77fabc2934756f8be4ea38ac1a926d3246"
	},
	{
		"id": "85d1b3e19a47",
		"ts": "2026-09-16T13:03:55.623Z",
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
		"liquidityUsd": 12561062.43,
		"hash": "85d1b3e19a474b33ab6e5f9c6516da1e0ad9699f07523d30510d1f6ecd3e6559"
	},
	{
		"id": "5350fcd30415",
		"ts": "2026-09-16T13:03:55.916Z",
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
		"liquidityUsd": 923178.39,
		"hash": "5350fcd304154a52db18cb7beb61c3b706da4b5b7723503c7591f182daf34743"
	},
	{
		"id": "facdcaa7dc6e",
		"ts": "2026-09-16T13:03:56.214Z",
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
		"liquidityUsd": 33076988.54,
		"hash": "facdcaa7dc6e43dfb161f70136902cb07aeeb3820431e6c3b81a06fce72e503c"
	},
	{
		"id": "3aa971ba89de",
		"ts": "2026-09-16T13:03:56.504Z",
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
		"liquidityUsd": 3759732.02,
		"hash": "3aa971ba89de349fd8a33c15b36f3cbed07bd6703f27d3536c734bf7c6f1c018"
	},
	{
		"id": "f2504bcc1532",
		"ts": "2026-09-16T13:03:56.785Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1130155.64,
		"hash": "f2504bcc1532bd5a58d3e454a2f92afa28a080be56f84e8c7fd9d145942cea91"
	},
	{
		"id": "87882139f6ba",
		"ts": "2026-09-16T13:03:57.082Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1619212.11,
		"hash": "87882139f6ba845b6de61d8d0ffab6b48b05ac3efe6cdec0e8f8a58e5bfe1c28"
	},
	{
		"id": "73be45bdd54d",
		"ts": "2026-09-16T13:03:57.379Z",
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
		"liquidityUsd": 1271341.73,
		"hash": "73be45bdd54d8dc4ac616b99d52e3a86f3b31ef9e425d379d396b4877574cf9c"
	},
	{
		"id": "051439bc5f37",
		"ts": "2026-09-16T13:03:57.688Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1018652.05,
		"hash": "051439bc5f373c4af4fb4b6a5a283cf2d7e12759882b0864ead594cd09b6e106"
	},
	{
		"id": "68577e47ca26",
		"ts": "2026-09-16T13:03:57.976Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 749408.47,
		"hash": "68577e47ca260f038f213aed318b9861c657feaa1d4198ff4329e3e6d112d4b1"
	},
	{
		"id": "a6cce946daa6",
		"ts": "2026-09-16T13:03:58.242Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1619212.11,
		"hash": "a6cce946daa6c5c3ce6327212b701eeb90301bb01ca15ada3d6efdaa0751cb46"
	},
	{
		"id": "73394450f3a3",
		"ts": "2026-09-16T13:03:58.509Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1413400.98,
		"hash": "73394450f3a3aea6ebf12548893b7573890af649f2eebcdd0d865f4c3a41a965"
	},
	{
		"id": "bb2758c3691c",
		"ts": "2026-09-16T13:03:58.777Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1799925.52,
		"hash": "bb2758c3691cd551226363f44c92d9fc3d60e9f37130e75958f77a7bf83e8d25"
	},
	{
		"id": "e8a46e4cfc24",
		"ts": "2026-09-16T13:03:59.045Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 492794.49,
		"hash": "e8a46e4cfc240d19e1e979b2ef8883fc3863cb440f77d8ba4da06d7599006e20"
	},
	{
		"id": "6c9f0e24acac",
		"ts": "2026-09-16T13:03:59.311Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2805884.18,
		"hash": "6c9f0e24acac7ddc83520ad67e59e47bf72a0278abc90f372a553a8c81bdc516"
	},
	{
		"id": "4f4da38bae58",
		"ts": "2026-09-16T13:03:59.575Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 241727.4,
		"hash": "4f4da38bae5807c9d66be6ebe3d73106ab2f5104f7d071ba04f9c3f0bd03c910"
	},
	{
		"id": "07bdc4ec4578",
		"ts": "2026-09-16T13:03:59.843Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4355730.6,
		"hash": "07bdc4ec4578d1a9cca35ee3bb0d742366d191a32e2a89b25d380f93bad62015"
	},
	{
		"id": "7fddcddbc6c9",
		"ts": "2026-09-16T13:04:00.110Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1103709.77,
		"hash": "7fddcddbc6c9d0deff35ee03b991a34e9f72a642c6943a1eaa2b4f0c41f518e9"
	},
	{
		"id": "68a2e7b9df5f",
		"ts": "2026-09-16T07:09:12.698Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 124619821.08,
		"hash": "68a2e7b9df5f3fce29cea2ed3a27d849a41c5e0dd44362379978ebfab90d1a75"
	},
	{
		"id": "bdfc68526291",
		"ts": "2026-09-16T07:09:12.920Z",
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
		"liquidityUsd": 15532160.25,
		"hash": "bdfc685262910b86229a979b7ac6be17cfad8206e796be2faee95f5dcea0229f"
	},
	{
		"id": "5e074662ce2e",
		"ts": "2026-09-16T07:09:13.150Z",
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
		"liquidityUsd": 922394.03,
		"hash": "5e074662ce2e81d10fcca0ea007d2b16f31a8643ecc16fc93a9c8f09e33e5d60"
	},
	{
		"id": "7a516784955a",
		"ts": "2026-09-16T07:09:13.358Z",
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
		"liquidityUsd": 33225098.46,
		"hash": "7a516784955a56ad285c0dce12348dcb9332a9ada82b3df8a5fa296f19c64079"
	},
	{
		"id": "c44b850bec7a",
		"ts": "2026-09-16T07:09:13.564Z",
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
		"liquidityUsd": 3759936.66,
		"hash": "c44b850bec7af876fa19f560c51390db3d9492c31ad8ce62739d467eb76446d5"
	},
	{
		"id": "9cf55c1b20da",
		"ts": "2026-09-16T07:09:13.781Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1131463.17,
		"hash": "9cf55c1b20daca1aa3c13d25f1289a2442bb60c0e10b46b37b82fa12e4393ed8"
	},
	{
		"id": "4cf55f8ce026",
		"ts": "2026-09-16T07:09:14.006Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2221146.98,
		"hash": "4cf55f8ce02696aa92ff12300782664ec0a85c7c3bdec282782dae8a0cfe0b59"
	},
	{
		"id": "deb79463f5b7",
		"ts": "2026-09-16T07:09:14.228Z",
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
		"liquidityUsd": 1219797.12,
		"hash": "deb79463f5b7338c4617c0ebdc57e8d7ce8194565d766511348c7c4d77b4c9d4"
	},
	{
		"id": "7d38831ed6a7",
		"ts": "2026-09-16T07:09:14.439Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1016920.25,
		"hash": "7d38831ed6a7de9326f232dc7d93ab621593227d1d0cc0196733ed876eee94be"
	},
	{
		"id": "8a3cb4f496d9",
		"ts": "2026-09-16T07:09:14.654Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1420102.57,
		"hash": "8a3cb4f496d9c1cc9f21d493242e695f02fec33930e6d3f6e2db001d2561fbcc"
	},
	{
		"id": "ae68fa1122b7",
		"ts": "2026-09-16T07:09:14.860Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 775617.84,
		"hash": "ae68fa1122b7470e7bd19ccd71a925e4cee099c205ef7b4731632e61a821a8e1"
	},
	{
		"id": "8d8d86190040",
		"ts": "2026-09-16T07:09:15.059Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1340341.93,
		"hash": "8d8d86190040ea59a1fa4e666e1f0f04126988353f44cbb2663359d9274960dd"
	},
	{
		"id": "430d7adca2c0",
		"ts": "2026-09-16T07:09:15.265Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13629714.06,
		"hash": "430d7adca2c0d7dc9403a509509c7ae8a7e651b031d952cf20ccfd0802fe1d40"
	},
	{
		"id": "92a61c969763",
		"ts": "2026-09-16T07:09:15.459Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2833536.25,
		"hash": "92a61c96976390dbdb85aa5020813fb8a357b498b5724a08f355dad2ad82132c"
	},
	{
		"id": "8e94cd6a20d0",
		"ts": "2026-09-16T07:09:15.665Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1643440,
		"hash": "8e94cd6a20d02deffddf9c799112c1e4de7eb5307e58f19584c270f2a23e48d0"
	},
	{
		"id": "66091ac005f7",
		"ts": "2026-09-16T07:09:15.862Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4278773.48,
		"hash": "66091ac005f750db84634170248ac9a128fc999ae0bea124c9a984cc63d54443"
	},
	{
		"id": "bffa0ce722e3",
		"ts": "2026-09-16T07:09:16.067Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 441944.82,
		"hash": "bffa0ce722e353605dbba2654d69bc5b03ba4646dbfdbba6b5e56d2753aceb45"
	},
	{
		"id": "26de85784746",
		"ts": "2026-09-16T07:09:16.260Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1104939.59,
		"hash": "26de85784746b988272b687d47d541ae036c704df855541c3624874edfd4e130"
	},
	{
		"id": "608a0ed556db",
		"ts": "2026-09-16T01:01:50.716Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 124027463.34,
		"hash": "608a0ed556db7bbb55210e34ab9a945cb8913475ccd0b5eaf15a3fbb67525ca8"
	},
	{
		"id": "56789a30c91e",
		"ts": "2026-09-16T01:01:50.953Z",
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
		"liquidityUsd": 15958919.9,
		"hash": "56789a30c91ea7c8adc5f1ce7d117bca8ab30bd25a49bf81112eb21f63ce6910"
	},
	{
		"id": "cac9f42ea8af",
		"ts": "2026-09-16T01:01:51.165Z",
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
		"liquidityUsd": 921211.37,
		"hash": "cac9f42ea8af371a8e5a55545d0b281ff3f135be1b5d09c3325e7106ec33b178"
	},
	{
		"id": "86f8a0b7cc2b",
		"ts": "2026-09-16T01:01:51.586Z",
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
		"liquidityUsd": 33080143.3,
		"hash": "86f8a0b7cc2bbd98487d8d6d9f19ece759c26ef6772d567bb0b4b983393cbfcd"
	},
	{
		"id": "8930e7b0f138",
		"ts": "2026-09-16T01:01:51.833Z",
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
		"liquidityUsd": 3744719.15,
		"hash": "8930e7b0f1380853dd86c5a588678fa9d68620cd34e57c1ed2740e29b23235de"
	},
	{
		"id": "e96cd8eff13a",
		"ts": "2026-09-16T01:01:52.066Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1126192.58,
		"hash": "e96cd8eff13af5c4eb3fe691623cfaec7acef683ea946061f0db7f99f3ec3c1d"
	},
	{
		"id": "ffacbaa22be6",
		"ts": "2026-09-16T01:01:52.305Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1634100.24,
		"hash": "ffacbaa22be6676e0e33b7ad41d20a64079c4467bd618a6f30bba465f735ec2f"
	},
	{
		"id": "a11f190a2d4a",
		"ts": "2026-09-16T01:01:52.540Z",
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
		"liquidityUsd": 2592515.28,
		"hash": "a11f190a2d4a28ff726645688a4a18e853b0ef6327a6266287f7fb9a6221a803"
	},
	{
		"id": "99fc20e4cf17",
		"ts": "2026-09-16T01:01:52.825Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 956091.01,
		"hash": "99fc20e4cf178d9d652f13db54d362fa79ebe86f833cf1979d4f1a6b1ab6f076"
	},
	{
		"id": "77b111153eb8",
		"ts": "2026-09-16T01:01:53.041Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1634100.24,
		"hash": "77b111153eb8e0e52abcc298aebc614d170dfef87171268b26cf161ecaae2c2f"
	},
	{
		"id": "59e1796386e3",
		"ts": "2026-09-16T01:01:53.255Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 806557.11,
		"hash": "59e1796386e3992c2391a793e8a0bd54837e4a6f64e2964ba18705aee012833f"
	},
	{
		"id": "2596e2b72f36",
		"ts": "2026-09-16T01:01:53.453Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1340745.53,
		"hash": "2596e2b72f36939ff7340fe173dd4859a03510aa438dd99c3ced9851e3da21ce"
	},
	{
		"id": "9d199ec4873c",
		"ts": "2026-09-16T01:01:53.647Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2819984.53,
		"hash": "9d199ec4873c4655e0a1903e20d0eaacffe61d980faf843cf9b070c9a81cbce5"
	},
	{
		"id": "cca7e0b4ef07",
		"ts": "2026-09-16T01:01:53.893Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 587399.07,
		"hash": "cca7e0b4ef07b53d5a28fb890504a9f59763ba8aed10615e8efdc76590b4569b"
	},
	{
		"id": "46f537ab710b",
		"ts": "2026-09-16T01:01:54.084Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 557507.21,
		"hash": "46f537ab710b5cd4dbf58d88c4a891b27032648cd7a969c9f374dc0a3dcd4138"
	},
	{
		"id": "473a550697cd",
		"ts": "2026-09-16T01:01:54.308Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13430656.38,
		"hash": "473a550697cd416aed97e3d599815c7422686da421354f45939d319dfe4d874a"
	},
	{
		"id": "1e3ef4b1baef",
		"ts": "2026-09-16T01:01:54.515Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 464344.22,
		"hash": "1e3ef4b1baef35a4daeab5949b5e3e542ef03b293d8d63a698d854c24d85fea7"
	},
	{
		"id": "678fa9a810cd",
		"ts": "2026-09-16T01:01:54.730Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4269557.95,
		"hash": "678fa9a810cd2e2fda773acb02897808fc658892eaaf4b987fa684f16b806f67"
	},
	{
		"id": "9691a33a373d",
		"ts": "2026-09-15T22:41:16.179Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 123716227.16,
		"hash": "9691a33a373d7ee19c1643a12680439338ad0dade60b7ef6d2a33920705b381f"
	},
	{
		"id": "b00897c69020",
		"ts": "2026-09-15T22:41:16.493Z",
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
		"liquidityUsd": 12121033.86,
		"hash": "b00897c690201fac964dcec202b976528fa069b9509649a2edc956aaf61288b9"
	},
	{
		"id": "42c8e59eb974",
		"ts": "2026-09-15T22:41:16.773Z",
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
		"liquidityUsd": 922992.82,
		"hash": "42c8e59eb974631e4ab4d5bc31f506e4997e4075b82457869ff69e4e4f5a151a"
	},
	{
		"id": "a79dc986bc2c",
		"ts": "2026-09-15T22:41:16.986Z",
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
		"liquidityUsd": 33042911.39,
		"hash": "a79dc986bc2c254855c81466b79ecf88099d9bb69186cfc630cdf86bc77f3314"
	},
	{
		"id": "d65fb5e8fff2",
		"ts": "2026-09-15T22:41:17.208Z",
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
		"liquidityUsd": 3734350.3,
		"hash": "d65fb5e8fff2a4d130046ae7b179bf1c8548b5491831d95d8c962b3084493af4"
	},
	{
		"id": "36e837c43bd1",
		"ts": "2026-09-15T22:41:17.418Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1120040.3,
		"hash": "36e837c43bd13fcdcb65fa7e7cdf259ac7a5af85f910224b90e37256a9941db7"
	},
	{
		"id": "ec24c04b3e8c",
		"ts": "2026-09-15T22:41:17.627Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1597222.29,
		"hash": "ec24c04b3e8c9b6da46f03f23607677fe1807ef55d5066ab11c2c6f135fe3e02"
	},
	{
		"id": "d86ca78f156a",
		"ts": "2026-09-15T22:41:17.826Z",
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
		"liquidityUsd": 2588514.39,
		"hash": "d86ca78f156af5ab4340748aa1e6fb47ef1b0c8960ba87378725620bafcb35d0"
	},
	{
		"id": "dfa1976fe99e",
		"ts": "2026-09-15T22:41:18.020Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 920157.31,
		"hash": "dfa1976fe99e7e7470544efb3dd96a92cf4b3cf200f24558aa3ae1af9cf771df"
	},
	{
		"id": "1df13b674664",
		"ts": "2026-09-15T22:41:18.227Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1597222.29,
		"hash": "1df13b674664ff096680a859857189ded42461033f7bf5cae8e89420192474ca"
	},
	{
		"id": "6c0ac25f2421",
		"ts": "2026-09-15T22:41:18.436Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 809364.01,
		"hash": "6c0ac25f242138f2fc642ddbf988ef64e120124ea311f4701a4cd8e08f1714d8"
	},
	{
		"id": "cf4fe849ae4b",
		"ts": "2026-09-15T22:41:18.625Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1366017.65,
		"hash": "cf4fe849ae4b30b945cc6ff95b6ef8a45574bbde262f76b697ba490c4de679a0"
	},
	{
		"id": "4965e9d52e38",
		"ts": "2026-09-15T22:41:18.817Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2834308.02,
		"hash": "4965e9d52e3840d291262e9b2cafb5c4c33951112df0bad8bf5b50c346422242"
	},
	{
		"id": "7c75f12153e5",
		"ts": "2026-09-15T22:41:19.018Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 455319.47,
		"hash": "7c75f12153e59a59eb30be818851fd9dbc12beea575a2565860a727d70f05945"
	},
	{
		"id": "da57b661c4fb",
		"ts": "2026-09-15T22:41:19.208Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13415971.51,
		"hash": "da57b661c4fb3f89c6456edef757e24d472c97332566a8c1b4d2caa67ddca3ec"
	},
	{
		"id": "63efb7f04677",
		"ts": "2026-09-15T22:41:19.468Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 581449.64,
		"hash": "63efb7f04677b2aa1a4aaf3e950b3d8200cbc03a7977af5ebcdd5180375d817c"
	},
	{
		"id": "05eb9d8a13ba",
		"ts": "2026-09-15T22:41:19.649Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 557350.95,
		"hash": "05eb9d8a13bac90813a3b313e5c40dbfad248f581710263ba5539b3ab9de7db8"
	},
	{
		"id": "04ef985d840a",
		"ts": "2026-09-15T22:41:19.830Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1679468.22,
		"hash": "04ef985d840a48d994ec1567d0ce02a474b83d890aaa8405159af06e6bdf7520"
	},
	{
		"id": "5947fbc82e0a",
		"ts": "2026-09-15T19:29:44.179Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 124410306.15,
		"hash": "5947fbc82e0aac255924fe9c918a18ffdadac2fb2de405a42ee2acfaaa8e56ad"
	},
	{
		"id": "dd842fabf060",
		"ts": "2026-09-15T19:29:44.529Z",
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
		"liquidityUsd": 14095088.42,
		"hash": "dd842fabf0606803a6c68ff42bee56a6431b7b789f78e1e0ef518a7d311a46eb"
	},
	{
		"id": "a8936647e142",
		"ts": "2026-09-15T19:29:44.721Z",
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
		"liquidityUsd": 929150.04,
		"hash": "a8936647e142a59b87df1c6814dff2123dc885b7aaa89f1b5fa4908117723029"
	},
	{
		"id": "609548ef3225",
		"ts": "2026-09-15T19:29:44.915Z",
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
		"liquidityUsd": 33170896.31,
		"hash": "609548ef3225ae417f9cc86300da0700b5002c3b233c2184f3b06df3a488c368"
	},
	{
		"id": "111220873796",
		"ts": "2026-09-15T19:29:45.115Z",
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
		"liquidityUsd": 3774141.63,
		"hash": "111220873796c1bcc974b7e3d4fa01732be503b3134160afaefd896f413b1af3"
	},
	{
		"id": "35a430fd6d47",
		"ts": "2026-09-15T19:29:45.324Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1130316.22,
		"hash": "35a430fd6d4758b11efc13ce688a777c1ccb3833332fbafe49e4c5594b77e787"
	},
	{
		"id": "7bbb501bfb3a",
		"ts": "2026-09-15T19:29:45.515Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2290868.79,
		"hash": "7bbb501bfb3a43fac5a4b32bc98e24907e2f3c31c492ff21dccbb6933918e7f9"
	},
	{
		"id": "71df07b80db3",
		"ts": "2026-09-15T19:29:45.707Z",
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
		"liquidityUsd": 2711071.39,
		"hash": "71df07b80db3ad46ca1d8beb0fb29e706f4dc77898cc8209a7844263ece67ea6"
	},
	{
		"id": "2786d4c64100",
		"ts": "2026-09-15T19:29:45.908Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 979032.86,
		"hash": "2786d4c64100ad4fedcc9c12c0169b86b5cc80f6dfca35557510b0c1b8ddb19e"
	},
	{
		"id": "d1248aaf5ed0",
		"ts": "2026-09-15T19:29:46.104Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1612786.36,
		"hash": "d1248aaf5ed0ca49490dbd9182432772d334237f598632ac2980c9084e4f7974"
	},
	{
		"id": "2219805ed10b",
		"ts": "2026-09-15T19:29:46.287Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1390525.39,
		"hash": "2219805ed10ba77d227d3364456322649bd8365187db82b735f572476982b0f3"
	},
	{
		"id": "b8324b33c758",
		"ts": "2026-09-15T19:29:46.485Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2929519.54,
		"hash": "b8324b33c75893543c0c337344271bd9d73616e721ae8f85967cfa5a87cdd04f"
	},
	{
		"id": "5516a4e21e50",
		"ts": "2026-09-15T19:29:46.662Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 437257.34,
		"hash": "5516a4e21e50dfc91a471d901c732edadcd7c17a0c5ffac65fd370aa3476c398"
	},
	{
		"id": "9c9cd094cd50",
		"ts": "2026-09-15T19:29:46.853Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13692625.43,
		"hash": "9c9cd094cd50934038dd821e0770c16200e467c53fd45e30d6fc168851e1e35e"
	},
	{
		"id": "b56784c79a2b",
		"ts": "2026-09-15T19:29:47.039Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 784768.07,
		"hash": "b56784c79a2bd83a59e9e06f3c4ea72879196e9d096654b792fb2d220dcfa181"
	},
	{
		"id": "c22554579903",
		"ts": "2026-09-15T19:29:47.233Z",
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
		"liquidityUsd": 644226.19,
		"hash": "c22554579903ac3cb9e92b1eb695fccb01275eefa899dd8127578c33fa8af659"
	},
	{
		"id": "88bbe4c5624f",
		"ts": "2026-09-15T19:29:47.415Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 551151.05,
		"hash": "88bbe4c5624fab389e5e4ac04e43cc424822d4788e3ee1ba6da66844c3948ac1"
	},
	{
		"id": "2e086c37e7bc",
		"ts": "2026-09-15T19:29:47.619Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 581511.48,
		"hash": "2e086c37e7bc7e374257ae1fbeb533c6d76d6299901189c036abf898c50cbf98"
	},
	{
		"id": "6ac01e2edf58",
		"ts": "2026-09-15T15:29:18.204Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118718291.2,
		"hash": "6ac01e2edf58a5111714bf01b8140ce2c969cdebad58aee69d79bd7b150a6c2f"
	},
	{
		"id": "3490bc4827cb",
		"ts": "2026-09-15T15:29:18.486Z",
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
		"liquidityUsd": 13979532.01,
		"hash": "3490bc4827cb8c57e69739567ee3eda171bb19070c08bde01b63fdf4ef565655"
	},
	{
		"id": "5146343de38f",
		"ts": "2026-09-15T15:29:18.791Z",
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
		"liquidityUsd": 924761.04,
		"hash": "5146343de38f57cb8672afdb454b8d70dbb190f26bd7b5594b32f8f65378fccb"
	},
	{
		"id": "d7a4c1490e36",
		"ts": "2026-09-15T15:29:19.101Z",
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
		"liquidityUsd": 33591516.35,
		"hash": "d7a4c1490e3652a4a44f503e136603d5cf3275a304bf6e169f01e6e6fc440dcf"
	},
	{
		"id": "6a085ea1978d",
		"ts": "2026-09-15T15:29:19.625Z",
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
		"liquidityUsd": 3812958.12,
		"hash": "6a085ea1978d57167679ce851f56de23e3e38a1a2783766384f7ba91d695aa53"
	},
	{
		"id": "53ebb16f3057",
		"ts": "2026-09-15T15:29:19.928Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1138408.77,
		"hash": "53ebb16f30578e9e34028e2c52994d02d3f1cb30b6bbdaea4afcc7b10bf7b340"
	},
	{
		"id": "6534e2e272cd",
		"ts": "2026-09-15T15:29:20.208Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1411275.47,
		"hash": "6534e2e272cdbec8860b4ce8f52770a5db57b7210f10f90e32305a5225186317"
	},
	{
		"id": "887fe97641db",
		"ts": "2026-09-15T15:29:20.490Z",
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
		"liquidityUsd": 1121254.82,
		"hash": "887fe97641dba0a6fe7db44a8f30761393890f8dc0f74715a70ec9061ffd17c5"
	},
	{
		"id": "f6664c351e07",
		"ts": "2026-09-15T15:29:20.816Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 861250.46,
		"hash": "f6664c351e07cc2b2d641ed4ad795897a97dc24e20d849dad6ae5fc379014d94"
	},
	{
		"id": "328408c375b4",
		"ts": "2026-09-15T15:29:21.103Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1411275.47,
		"hash": "328408c375b4a65d4c38ec33e57a76c999c7f0e8c743e098b75e852a30057dfc"
	},
	{
		"id": "e83ec8a815d2",
		"ts": "2026-09-15T15:29:21.373Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2999746.02,
		"hash": "e83ec8a815d20628489e1cc71d980b8d4c82ae3a7488ea23e52c1a8a8bcce7a1"
	},
	{
		"id": "11576e76fd32",
		"ts": "2026-09-15T15:29:21.635Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1385466.74,
		"hash": "11576e76fd32111de2720e79f8e16653b9625b17cd825af8d299a157bce91b65"
	},
	{
		"id": "b7834ec5a283",
		"ts": "2026-09-15T15:29:21.901Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 454399.11,
		"hash": "b7834ec5a28333cf4c6ef0187d46ce7e948c2f996754644f6629b84327993965"
	},
	{
		"id": "2899ae467186",
		"ts": "2026-09-15T15:29:22.168Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13730849.68,
		"hash": "2899ae467186977644da55e4fd60badcfb20b765a35d705cd564b8a60c58c274"
	},
	{
		"id": "ab2403cf362b",
		"ts": "2026-09-15T15:29:22.432Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 288447.26,
		"hash": "ab2403cf362b4e97dadb34fa3cfbca029c9ac69e16a5fb5810e54a561703e2f9"
	},
	{
		"id": "4a9decefb8a0",
		"ts": "2026-09-15T15:29:22.723Z",
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
		"liquidityUsd": 657101.13,
		"hash": "4a9decefb8a0619429902261f7281b0253716bdf2a7451110019adb7e57ffae3"
	},
	{
		"id": "1dcd1db6f11b",
		"ts": "2026-09-15T15:29:22.994Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 553194.01,
		"hash": "1dcd1db6f11bde64f7b4da368ceac27263d8c9df5b3f737168bee37123b6290d"
	},
	{
		"id": "40c1356beaa1",
		"ts": "2026-09-15T15:29:23.259Z",
		"symbol": "AAPL",
		"token": "0xb200000000000000000000C2e324d24d7eEcd1fb",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1196818.28,
		"hash": "40c1356beaa19c9243affa4f4992503fc6f990bec4218006a2c8a1823b8853f3"
	},
	{
		"id": "5dad214a1988",
		"ts": "2026-09-15T10:58:26.508Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120950250.06,
		"hash": "5dad214a1988e46c96ca1c8b62777c398e576fa2589001ff5d8c5a07d756acc7"
	},
	{
		"id": "6ad97990dcc2",
		"ts": "2026-09-15T10:58:26.733Z",
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
		"liquidityUsd": 13853498.22,
		"hash": "6ad97990dcc2ca400521f917195d32fe74f35ae0fe23b5ed9cb792264a8456a6"
	},
	{
		"id": "f63296ff6d39",
		"ts": "2026-09-15T10:58:26.943Z",
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
		"liquidityUsd": 946486.98,
		"hash": "f63296ff6d39bc94f698b50f7b15f1c5f385dd8d4db9297c25fee69f668333aa"
	},
	{
		"id": "9babc9e989a0",
		"ts": "2026-09-15T10:58:27.151Z",
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
		"liquidityUsd": 33762984.39,
		"hash": "9babc9e989a05cb8b1b0867281da6f807a0e5f7a7c4ffd2b1ae90ab25f105e8c"
	},
	{
		"id": "c5ca8dea0067",
		"ts": "2026-09-15T10:58:27.368Z",
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
		"liquidityUsd": 3874536.47,
		"hash": "c5ca8dea0067304a2d2eecfc121db833edcdd08a6b3a6c76461e0f9532c3f7a2"
	},
	{
		"id": "a4209396bfbb",
		"ts": "2026-09-15T10:58:27.576Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1163831.04,
		"hash": "a4209396bfbb43b2c7e7b9d0855139c8ea0f64b6ba781a69dceac122f14031db"
	},
	{
		"id": "c9e006c65ae3",
		"ts": "2026-09-15T10:58:27.792Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1622066.19,
		"hash": "c9e006c65ae3217fd72dffbfc709ceacc4d3173c36701f46795458fab62c073f"
	},
	{
		"id": "e19cd2294c1d",
		"ts": "2026-09-15T10:58:28.021Z",
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
		"liquidityUsd": 1147738.7,
		"hash": "e19cd2294c1de383874eabea8f6bbfda2fb8a8d1a25fdff35e6a84b6f7b87396"
	},
	{
		"id": "864044902c21",
		"ts": "2026-09-15T10:58:28.232Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1622066.19,
		"hash": "864044902c212e07113479c9d5520a53482fc651b3fd585e702e93d99632ec63"
	},
	{
		"id": "b4a625a4f196",
		"ts": "2026-09-15T10:58:28.442Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 856219.59,
		"hash": "b4a625a4f196cd3e84df26c661e40bf4301fe926933daefd3f7e70d99c606450"
	},
	{
		"id": "3906c905b591",
		"ts": "2026-09-15T10:58:28.645Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2986994.82,
		"hash": "3906c905b591f2ae2ce9d1a1f9871ff89b44f01dfb54dcc90712cb7a24ec26d2"
	},
	{
		"id": "3a17b21aad71",
		"ts": "2026-09-15T10:58:28.861Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13909697.09,
		"hash": "3a17b21aad7111a877375d55575b6e1e8b357e04e56f5f028f8809d6be2f1418"
	},
	{
		"id": "1f398d3f00e6",
		"ts": "2026-09-15T10:58:29.063Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 450746.14,
		"hash": "1f398d3f00e6f6631a6a437248538f80b1d956e64f61649f78cd3368b6c34958"
	},
	{
		"id": "e0fe59441294",
		"ts": "2026-09-15T10:58:29.272Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1435895.68,
		"hash": "e0fe594412945f1bd4dccda94765b0c105143a0cb53f51254a0645f4c5767df5"
	},
	{
		"id": "ef10202728a9",
		"ts": "2026-09-15T10:58:29.465Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 297171.94,
		"hash": "ef10202728a9028ebd78d49f393cceb2b5310d429145c711f526058805850e79"
	},
	{
		"id": "675ca56bda97",
		"ts": "2026-09-15T10:58:29.667Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 551496.26,
		"hash": "675ca56bda970222dbf22b1cf21dbf951589a48bff99fff6123a490e7646ddac"
	},
	{
		"id": "4df7b41c0284",
		"ts": "2026-09-15T10:58:29.899Z",
		"symbol": "AAPL",
		"token": "0xb200000000000000000000C2e324d24d7eEcd1fb",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1196482.72,
		"hash": "4df7b41c02844fffa7c38550491bb4f40c8a1bc3c86cd2e6dde9782ef7ac2bf6"
	},
	{
		"id": "79b5a59c675c",
		"ts": "2026-09-15T05:45:02.858Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120903172.3,
		"hash": "79b5a59c675cd096c9815cf05900249d20bafbbc58df3dc1d13bc2648d9ca9bb"
	},
	{
		"id": "fb0940b5a53e",
		"ts": "2026-09-15T05:45:03.112Z",
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
		"liquidityUsd": 14773440.49,
		"hash": "fb0940b5a53e81fed1f5c9153472d6420cc6d06674577c7040d638d741e6b9da"
	},
	{
		"id": "7b765a0a7e82",
		"ts": "2026-09-15T05:45:03.361Z",
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
		"liquidityUsd": 946853.5,
		"hash": "7b765a0a7e82e0218922b01daf182f2a08d5e02baf8008063fce6d153aa6b816"
	},
	{
		"id": "5a88aade3073",
		"ts": "2026-09-15T05:45:03.839Z",
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
		"liquidityUsd": 33773775.14,
		"hash": "5a88aade3073acb88dec648fb448ee428eec6746cf8469043ae895d6aae625e6"
	},
	{
		"id": "d7b1079751ee",
		"ts": "2026-09-15T05:45:04.341Z",
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
		"liquidityUsd": 3889705.23,
		"hash": "d7b1079751ee0695e9dde20abd57530722ba4e3c0f78fb181fab4410432534d8"
	},
	{
		"id": "c1b03ade1983",
		"ts": "2026-09-15T05:45:04.578Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1167799.76,
		"hash": "c1b03ade19830928786d8ec930bbf0c72e4c6e63cde8c98ac135e08752d2c86b"
	},
	{
		"id": "017fc016f4dc",
		"ts": "2026-09-15T05:45:04.837Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1583092.74,
		"hash": "017fc016f4dc383d6c8c4a72dfcab5cad4a26cd73d6f578598a508877b90e202"
	},
	{
		"id": "df7377ef19f2",
		"ts": "2026-09-15T05:45:05.092Z",
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
		"liquidityUsd": 1150437.42,
		"hash": "df7377ef19f264d05e6a5ecf2cc019c870ab9caeecc0d6097daf7067c77c8c0c"
	},
	{
		"id": "015d50ea7048",
		"ts": "2026-09-15T05:45:05.368Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3031444.91,
		"hash": "015d50ea7048fd92d98a0ee2e6578d0d8100e6d6983e802dcfc02701149097ad"
	},
	{
		"id": "739f7d09154f",
		"ts": "2026-09-15T05:45:05.649Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1583010.83,
		"hash": "739f7d09154f6418bb419e143527acb9e02ad95f3f1d17765bec009b78c8fe3a"
	},
	{
		"id": "9db6003772f7",
		"ts": "2026-09-15T05:45:05.866Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 842733.18,
		"hash": "9db6003772f7c55a62a6ab93853eef5ad7e4c251ca22e00e54fd21045ac98c90"
	},
	{
		"id": "9693954aa806",
		"ts": "2026-09-15T05:45:06.099Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 365443.04,
		"hash": "9693954aa806ed7da856b3216e8bfed98d8240e60d77e7ee010225c72df8f029"
	},
	{
		"id": "10774ee6bcad",
		"ts": "2026-09-15T05:45:06.330Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1413793.04,
		"hash": "10774ee6bcadcaa5cb7aef596d18275b80fbdf9390fd1c7c7e9a7998834efacc"
	},
	{
		"id": "565d24a1a90b",
		"ts": "2026-09-15T05:45:06.563Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13863885.5,
		"hash": "565d24a1a90bce5cad8f1de7275d752540de07e0917b32dcf4f6c8a1ae553d96"
	},
	{
		"id": "101bebc0286f",
		"ts": "2026-09-15T05:45:06.795Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 289169.1,
		"hash": "101bebc0286ff52ac2c3e1db1d3bec168e69126efd670eea521a6cf68e91f31e"
	},
	{
		"id": "fb44a2c05ab9",
		"ts": "2026-09-15T05:45:07.012Z",
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
		"liquidityUsd": 668473.26,
		"hash": "fb44a2c05ab9ec516c73bf42f0bfd561ee523e7f33b4e99a3b3c28f44864d781"
	},
	{
		"id": "e20b795deffc",
		"ts": "2026-09-15T05:45:07.248Z",
		"symbol": "AAPL",
		"token": "0xb200000000000000000000C2e324d24d7eEcd1fb",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1562424.3,
		"hash": "e20b795deffcb6bc219e5a611b3862397919fa4935bc360b18ee8662dbfbee86"
	},
	{
		"id": "5949c42d610f",
		"ts": "2026-09-15T00:13:10.798Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 121773810.41,
		"hash": "5949c42d610ffc5f010cc2d9612545ed959ae7a4aed766edcab827a7c2b03dc9"
	}
]
