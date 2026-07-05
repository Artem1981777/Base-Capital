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
	"updatedAt": "2026-07-05T12:13:20.120Z",
	"tokensScored": 1538,
	"verdictsIssued": 1538,
	"safe": 1351,
	"risky": 142,
	"likelyRug": 45,
	"ticks": 105
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "07ada9faa9cd",
		"ts": "2026-07-05T12:13:16.281Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100300125.97,
		"hash": "07ada9faa9cd5b5fd36f2d76792af46f4ef4c29e6ccb737f93a58ddec6c78607"
	},
	{
		"id": "6cb6720f1f01",
		"ts": "2026-07-05T12:13:16.627Z",
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
		"liquidityUsd": 15430367.98,
		"hash": "6cb6720f1f017d2fc3f5ba126ec59e37bb30f6c8f2997adbb9f17e15a41cb109"
	},
	{
		"id": "8114a807d637",
		"ts": "2026-07-05T12:13:17.002Z",
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
		"liquidityUsd": 1346834.27,
		"hash": "8114a807d637b7b0a450ff96c53fbd268ce6568ef2e98f9f2816844f634c086e"
	},
	{
		"id": "f0059b0555e7",
		"ts": "2026-07-05T12:13:17.188Z",
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
		"liquidityUsd": 32939690.63,
		"hash": "f0059b0555e7699f1f9d378bad2b5d894853bce69f3069f4a805f420b499136b"
	},
	{
		"id": "4c68fb2bc690",
		"ts": "2026-07-05T12:13:17.378Z",
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
		"liquidityUsd": 4113590.71,
		"hash": "4c68fb2bc690ea79ec2323ae9394e5a1f35cc529c7b465bde8617a6956a3d1f6"
	},
	{
		"id": "ee1ce7b6bb30",
		"ts": "2026-07-05T12:13:17.564Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 989883.42,
		"hash": "ee1ce7b6bb30b57d71b45695cbfdb6566736474bfafbda5fe367f468a234461d"
	},
	{
		"id": "b75883ed2cee",
		"ts": "2026-07-05T12:13:17.749Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 32939690.63,
		"hash": "b75883ed2cee7b4bb2859e6606393bda6a169a5c1a13d94db28b22e8762f57df"
	},
	{
		"id": "c6b3dc75c5b8",
		"ts": "2026-07-05T12:13:18.007Z",
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
		"liquidityUsd": 2425292.25,
		"hash": "c6b3dc75c5b8d4c586981c617e72b0ab94000513885a86eeefc87d1514941db9"
	},
	{
		"id": "ab4d06abe0f4",
		"ts": "2026-07-05T12:13:18.199Z",
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
		"liquidityUsd": 7775774.69,
		"hash": "ab4d06abe0f4816c45e0e74b75543b96bad04dbe47b000ba7b72260ff05a4c32"
	},
	{
		"id": "8a501b8ca0a4",
		"ts": "2026-07-05T12:13:18.387Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 675152.72,
		"hash": "8a501b8ca0a494bc5fc2b584d3bbdfad3fc7e090a2fc76d36c911dcae1d529d6"
	},
	{
		"id": "5236a82d24d3",
		"ts": "2026-07-05T12:13:18.847Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3321211.03,
		"hash": "5236a82d24d347764009fec41037af1390eb2178050d080509d6a704a97be43d"
	},
	{
		"id": "66b5774b2352",
		"ts": "2026-07-05T12:13:19.019Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 377174.95,
		"hash": "66b5774b2352b2b987a3bc14e3170d49295dd2aced306381c77435b6461738b4"
	},
	{
		"id": "3c8ebacfa2d1",
		"ts": "2026-07-05T12:13:19.190Z",
		"symbol": "Claude",
		"token": "0x7F42440C1E87187F523aE48980E7386508804B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 823433.88,
		"hash": "3c8ebacfa2d19bb060b5f2fbfe0646285328917345dee8ad24778f49f63ba00f"
	},
	{
		"id": "84da3de85086",
		"ts": "2026-07-05T12:13:19.378Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 96391.92,
		"hash": "84da3de8508632243b5dfb1e5a1b4580714fab1f9bca1432328c370d4b3a804e"
	},
	{
		"id": "63429883f35d",
		"ts": "2026-07-05T12:13:19.570Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 579242.81,
		"hash": "63429883f35d3c8a9846001b93fba9d289f5254d982adcd3f881843a98bd61a3"
	},
	{
		"id": "265300b52239",
		"ts": "2026-07-05T12:13:19.741Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4749674.43,
		"hash": "265300b52239108517bccdc5c4dd23cf78867362123dc32ff043657e9320543b"
	},
	{
		"id": "8c44df078de8",
		"ts": "2026-07-05T12:13:19.945Z",
		"symbol": "AMETA",
		"token": "0x90eC58EF4cc9F37B96DE1e203b65bD4e6E79580E",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 115369.08,
		"hash": "8c44df078de8305afeace84c25c84ed0a8a57153faff09c40c11945b6b9415a0"
	},
	{
		"id": "173ab82272ee",
		"ts": "2026-07-05T12:13:20.119Z",
		"symbol": "OpenAI",
		"token": "0x006b340bEE30F8425cf65f064712F57B2BC0bB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 517210.25,
		"hash": "173ab82272ee7711a33d41b9f958030fb2a51a7fcaa888781347fd5460e49c5a"
	},
	{
		"id": "58eb91e6c795",
		"ts": "2026-07-05T10:08:33.438Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 99959176.39,
		"hash": "58eb91e6c7956e9d4d5df06e6428adcc58b56e4a6b6c18dacec9381c09ec709f"
	},
	{
		"id": "f60dfa0bb2a2",
		"ts": "2026-07-05T10:08:33.689Z",
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
		"liquidityUsd": 15991273.48,
		"hash": "f60dfa0bb2a21a1df51d1645ab11a57dd33bc7526fac1f33d8721cf362e19cc4"
	},
	{
		"id": "52a790c3bae4",
		"ts": "2026-07-05T10:08:33.961Z",
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
		"liquidityUsd": 1348588.87,
		"hash": "52a790c3bae427b1a33bf3f4e9d752cfd31f4ea39fa8b1816d0be7a5b4e1723e"
	},
	{
		"id": "332af2d1540b",
		"ts": "2026-07-05T10:08:34.206Z",
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
		"liquidityUsd": 32822473.66,
		"hash": "332af2d1540baacad5f87e3e9781970c579544134977604357e042e5f3136497"
	},
	{
		"id": "e81024eaa0cf",
		"ts": "2026-07-05T10:08:34.450Z",
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
		"liquidityUsd": 4113115.36,
		"hash": "e81024eaa0cf37cd2671f2931d042a8a921f71114c5f1fafcce83b504508c525"
	},
	{
		"id": "c9e3dd3f1832",
		"ts": "2026-07-05T10:08:34.697Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 989822.99,
		"hash": "c9e3dd3f183205e155063798463d2a9091595a464113c2d2501a79a8ab521c28"
	},
	{
		"id": "060bf0080dbb",
		"ts": "2026-07-05T10:08:34.941Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 32822473.66,
		"hash": "060bf0080dbbe5116acfc08725dd58dc71f14677abc36d93ad46dd859be50681"
	},
	{
		"id": "1bda646f4400",
		"ts": "2026-07-05T10:08:35.187Z",
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
		"liquidityUsd": 2450062.75,
		"hash": "1bda646f44001fdd252d68b960d054524e4414e85ddeba985a7cf1a345612c36"
	},
	{
		"id": "a5da89a36964",
		"ts": "2026-07-05T10:08:35.436Z",
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
		"liquidityUsd": 7769448.76,
		"hash": "a5da89a36964b4cdf97ac995e713090b09cf759cc922cd3783e1504050baa94f"
	},
	{
		"id": "80a04b6a2af8",
		"ts": "2026-07-05T10:08:35.680Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3434107.72,
		"hash": "80a04b6a2af8a9ff5e183bae1ec88e62d501d7399288b30da9676d967c72e93b"
	},
	{
		"id": "10b577ca8162",
		"ts": "2026-07-05T10:08:35.910Z",
		"symbol": "Claude",
		"token": "0x7F42440C1E87187F523aE48980E7386508804B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 825747.87,
		"hash": "10b577ca8162be168c3da6e916820fb9c44f6f65d5868a81e7ddd2875f623884"
	},
	{
		"id": "37ffdc081a0a",
		"ts": "2026-07-05T10:08:36.138Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 369588.23,
		"hash": "37ffdc081a0a55d04c9236d2668945afe5313ad7de4203c1d11dc4187e5a7c6f"
	},
	{
		"id": "e6f294601a57",
		"ts": "2026-07-05T10:08:36.365Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 761019.54,
		"hash": "e6f294601a57bcbd14dfcc9798c122e04d2d450c56fff56baf572f73ef501dc9"
	},
	{
		"id": "df71867323ce",
		"ts": "2026-07-05T10:08:36.595Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2042404.33,
		"hash": "df71867323cee9ae7da96f1cf2f4cb12fb024844119fd961fe6247011bcf777b"
	},
	{
		"id": "2b759b46a847",
		"ts": "2026-07-05T10:08:36.823Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 577392.03,
		"hash": "2b759b46a847995ca51a3406fdc87710401a3a16ff55ad2aae58f545ea129c0f"
	},
	{
		"id": "eb29b8ee681a",
		"ts": "2026-07-05T10:08:37.050Z",
		"symbol": "AMETA",
		"token": "0x90eC58EF4cc9F37B96DE1e203b65bD4e6E79580E",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 115843.06,
		"hash": "eb29b8ee681a7a1a9045aa9a560756f1b935cf88458349c985e8bde042054d50"
	},
	{
		"id": "378ac981a6fa",
		"ts": "2026-07-05T10:08:37.278Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2071769.68,
		"hash": "378ac981a6fa70a12f9034d0e53d1424d86af1c6b20c9b8b35385a145041cab8"
	},
	{
		"id": "a927145b2ded",
		"ts": "2026-07-05T10:08:37.507Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 958900.2,
		"hash": "a927145b2ded828c1246ba5b7bab7779c566d2cb6e425a6c6d7f07e87f5c2571"
	},
	{
		"id": "021c294069c7",
		"ts": "2026-07-05T07:53:56.780Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100300961.55,
		"hash": "021c294069c7029e5c0c4035b41439d09657dceddcaf38666b9c11afccc6366e"
	},
	{
		"id": "2b432990888b",
		"ts": "2026-07-05T07:53:57.026Z",
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
		"liquidityUsd": 16474788.99,
		"hash": "2b432990888b72895e7149776781bb40befc7081b9f840fe6ec8ad6a4911f187"
	},
	{
		"id": "ef427eee9f74",
		"ts": "2026-07-05T07:53:58.201Z",
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
		"liquidityUsd": 1358838.72,
		"hash": "ef427eee9f741b7f4350840dd1645ad673a0b3e8d52249a07699e8a8118adc26"
	},
	{
		"id": "ac7c3ef06c12",
		"ts": "2026-07-05T07:53:58.437Z",
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
		"liquidityUsd": 33176052.67,
		"hash": "ac7c3ef06c128ef7b390b328f2f8a862bdd4cfd23f6363db62ff09b51cbfe8a0"
	},
	{
		"id": "e9374c3a4edd",
		"ts": "2026-07-05T07:53:58.677Z",
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
		"liquidityUsd": 4130008.34,
		"hash": "e9374c3a4edd8cd25b42cf09dd0b241add49fe0e7563fb29c9f8af31bc44e209"
	},
	{
		"id": "cedf4b73a2d1",
		"ts": "2026-07-05T07:53:58.921Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 988865.56,
		"hash": "cedf4b73a2d1733e828be22c160bdc780314eff1fb273bb8fe45da113f461bc2"
	},
	{
		"id": "e8cf26265a6f",
		"ts": "2026-07-05T07:53:59.561Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33176052.67,
		"hash": "e8cf26265a6fa60fd620299a0c85b489173f702461dfbc8974a9d64199fb85be"
	},
	{
		"id": "a35e09fbade7",
		"ts": "2026-07-05T07:54:00.210Z",
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
		"liquidityUsd": 2454603.54,
		"hash": "a35e09fbade74e9fb89e020b740474f2de40b890cdffbce7d18f7aa844a6e19c"
	},
	{
		"id": "fe9603b8c119",
		"ts": "2026-07-05T07:54:00.444Z",
		"symbol": "Claude",
		"token": "0x7F42440C1E87187F523aE48980E7386508804B07",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 857644.39,
		"hash": "fe9603b8c11975e2e1801552c382d5e0d53cd2922cc4a15b60a726f58db080d8"
	},
	{
		"id": "146d040ac39b",
		"ts": "2026-07-05T07:54:00.684Z",
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
		"liquidityUsd": 3475941.73,
		"hash": "146d040ac39b1156a588555172c15cc10981d2cdc93d9ffdc1788db5840c3d3e"
	},
	{
		"id": "5e8d3c137b54",
		"ts": "2026-07-05T07:54:00.931Z",
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
		"liquidityUsd": 7746080.1,
		"hash": "5e8d3c137b5492e28e56003c96ceeff6fae60517154ae82b503002fa98979226"
	},
	{
		"id": "c873fcd48956",
		"ts": "2026-07-05T07:54:01.168Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 360152.57,
		"hash": "c873fcd489567e81c970414727486b59f245dab848f24312a93de3cd27fde009"
	},
	{
		"id": "5dcc4a14b17b",
		"ts": "2026-07-05T07:54:01.404Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 582930.52,
		"hash": "5dcc4a14b17bc2c38b2d4c60f1c0eaefc46a29c8f1e6a5180cf051edf0348890"
	},
	{
		"id": "d55f0b05c8b6",
		"ts": "2026-07-05T07:54:01.641Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2070531.52,
		"hash": "d55f0b05c8b6b4a3917745d60a805d303d4ef96f03121598410dd1545735ac28"
	},
	{
		"id": "27a3d7edc5b9",
		"ts": "2026-07-05T07:54:01.916Z",
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
		"liquidityUsd": 1530675.34,
		"hash": "27a3d7edc5b9e0667a3bb6d659f47b9bcd38d7c122dce9b5ca46146ee07fa46b"
	},
	{
		"id": "dea93ef24a63",
		"ts": "2026-07-05T07:54:02.194Z",
		"symbol": "PLAY",
		"token": "0x853a7c99227499DbA9dB8C3A02aA691aFDeBf841",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 438522.05,
		"hash": "dea93ef24a632622d9ecdb69f31fe5723b5c268f85c1a165af367fb7341cd4e7"
	},
	{
		"id": "d7a0a60c4fcc",
		"ts": "2026-07-05T07:54:02.442Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2080568.41,
		"hash": "d7a0a60c4fcc0ce0f14d319bbedc8bec1965074490b24d6bd198d16d43bca7f2"
	},
	{
		"id": "fd273b805fd0",
		"ts": "2026-07-05T04:53:50.608Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100320311.51,
		"hash": "fd273b805fd0bca977c080e04923c62e19565e43f6c37e532e8d88cb432416db"
	},
	{
		"id": "59c653f99492",
		"ts": "2026-07-05T04:53:50.871Z",
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
		"liquidityUsd": 16026580.46,
		"hash": "59c653f994922f38a296724736474e3d094b453f6ccc3a83a64ea719e6d006fc"
	},
	{
		"id": "f3894d042b2b",
		"ts": "2026-07-05T04:53:51.138Z",
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
		"liquidityUsd": 1366559.92,
		"hash": "f3894d042b2b4c54ff02153eb4c5f337349a002d3149313fbb7a0a9af96fc9e9"
	},
	{
		"id": "082aa815b811",
		"ts": "2026-07-05T04:53:51.406Z",
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
		"liquidityUsd": 33418600.15,
		"hash": "082aa815b811edd7975fcee7a0c6f5c5a2ffd74af3fc29a52da01d3930f59c11"
	},
	{
		"id": "1f6432eeca0a",
		"ts": "2026-07-05T04:53:51.673Z",
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
		"liquidityUsd": 4137301.16,
		"hash": "1f6432eeca0a04ffab0288a51be7941961b8748023ab8288967b740c49cec836"
	},
	{
		"id": "7a2097cf1bc6",
		"ts": "2026-07-05T04:53:51.931Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 996363.77,
		"hash": "7a2097cf1bc6dd747c68ac807272e07c3aa0bdcc2546546f9c8daf82d830dcc6"
	},
	{
		"id": "017c3f6b890c",
		"ts": "2026-07-05T04:53:52.203Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33418600.15,
		"hash": "017c3f6b890c905d10a66b6832b418e9dc427802a8c02e71822280bdedda462f"
	},
	{
		"id": "bbf697b9e28f",
		"ts": "2026-07-05T04:53:52.468Z",
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
		"liquidityUsd": 2348219.61,
		"hash": "bbf697b9e28fc69e01333029f70ebb0cda00a6a1875859ddbf08b13be7bcbc58"
	},
	{
		"id": "107daae742e3",
		"ts": "2026-07-05T04:53:52.733Z",
		"symbol": "Claude",
		"token": "0x7F42440C1E87187F523aE48980E7386508804B07",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 857584.17,
		"hash": "107daae742e3c81d025b87b8f1773ff65262f2a2718e1ecb542ad7413b90e269"
	},
	{
		"id": "09d28946661a",
		"ts": "2026-07-05T04:53:52.999Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3801206.82,
		"hash": "09d28946661a9ebaa9ddc103c3de37b9f44c51ca22de250c404ea16b4d70f98b"
	},
	{
		"id": "14a52bb70206",
		"ts": "2026-07-05T04:53:53.243Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7740399.73,
		"hash": "14a52bb702064e09dc4319ef58ffbf6771d43a2b6557c9499f0b9c6437b05c13"
	},
	{
		"id": "c22856d7fbcc",
		"ts": "2026-07-05T04:53:53.478Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 375400.6,
		"hash": "c22856d7fbcc4fe6b7854e413442fd16a2156bebef2dc54dee8f94299169f401"
	},
	{
		"id": "eefc083b8be6",
		"ts": "2026-07-05T04:53:53.724Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2107645.51,
		"hash": "eefc083b8be6d05d06e27657920962a8f1b5cf53a92318ed582c8208185d8127"
	},
	{
		"id": "8ac78e333b96",
		"ts": "2026-07-05T04:53:53.976Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 583043.97,
		"hash": "8ac78e333b96bd9c41c04c3c301b220b8e0dfbadc76e66186f247f4f8efa7acd"
	},
	{
		"id": "d885b2aba731",
		"ts": "2026-07-05T04:53:54.227Z",
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
		"liquidityUsd": 1451768.13,
		"hash": "d885b2aba7311f6eb6a85acf4c168ca2835f35d83f849eac40e2fc3458346d56"
	},
	{
		"id": "f51a5f05c91f",
		"ts": "2026-07-05T04:53:54.463Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2089239.1,
		"hash": "f51a5f05c91f99796ee94cb609c42ca9cfa9d437d3448fa61be7564a689d7c7f"
	},
	{
		"id": "6547b2a372b0",
		"ts": "2026-07-05T04:53:54.714Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 980595.03,
		"hash": "6547b2a372b0df9a2875415092fdbe02ce3c15bc9d456ae259b9e34ca5e362d2"
	},
	{
		"id": "7b65e49b2fd0",
		"ts": "2026-07-05T00:01:53.446Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100638643.96,
		"hash": "7b65e49b2fd09ed4603b7c1872facb8928472805d94804b51bc5cc402010de22"
	},
	{
		"id": "a58defc85a98",
		"ts": "2026-07-05T00:01:53.954Z",
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
		"liquidityUsd": 16588408.01,
		"hash": "a58defc85a98cc2f28f65649da73e7fab3e48ff04eff5854f7e9f24bc65520cc"
	},
	{
		"id": "822c4adbc7eb",
		"ts": "2026-07-05T00:01:54.216Z",
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
		"liquidityUsd": 1380935.47,
		"hash": "822c4adbc7eb06d34aa38d66e559909a3209c501d62ac389101f9746ff958a4e"
	},
	{
		"id": "4ce515aeb4e7",
		"ts": "2026-07-05T00:01:54.491Z",
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
		"liquidityUsd": 33570690.86,
		"hash": "4ce515aeb4e79205704acfcc05d392a970ef7b96dda5d97205d9cc54f600510f"
	},
	{
		"id": "912f41205dc2",
		"ts": "2026-07-05T00:01:54.765Z",
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
		"liquidityUsd": 4167599.89,
		"hash": "912f41205dc295ae6ce9e4cdbe31d4ee1d6775b0830be9b93630a94708ac8545"
	},
	{
		"id": "23786de7749a",
		"ts": "2026-07-05T00:01:55.034Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1009188.36,
		"hash": "23786de7749aa4332fc2d00b72476ab52144a21c578fff6a29735d63b3917ad1"
	},
	{
		"id": "b619171a002e",
		"ts": "2026-07-05T00:01:55.295Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33570690.86,
		"hash": "b619171a002e65109af68eb7b0d56212b09c2d86d12748f473619c0208f27f5a"
	},
	{
		"id": "3a416f328084",
		"ts": "2026-07-05T00:01:55.564Z",
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
		"liquidityUsd": 2438344.76,
		"hash": "3a416f3280840dfc3580deee50f48f7063647c88af0b5f754a815056504e4f08"
	},
	{
		"id": "beaf080d2645",
		"ts": "2026-07-05T00:01:55.819Z",
		"symbol": "Claude",
		"token": "0x7F42440C1E87187F523aE48980E7386508804B07",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 857690.79,
		"hash": "beaf080d2645d13ce537194a8eed037599611171cb0f333fb0bdd43d7d831421"
	},
	{
		"id": "3c22c0fa6f1d",
		"ts": "2026-07-05T00:01:56.089Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2198046.37,
		"hash": "3c22c0fa6f1d490d61a6d5fadbe3bf8199fdf409f56ef90a5fe8855555a73c2a"
	},
	{
		"id": "2b9ee1f990e6",
		"ts": "2026-07-05T00:01:56.331Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 372706.44,
		"hash": "2b9ee1f990e6a5154b37d99206e7beee30bda298c40d104e0b178253f7db8eab"
	},
	{
		"id": "18995f7a2033",
		"ts": "2026-07-05T00:01:56.582Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3646996.22,
		"hash": "18995f7a2033a97cea806dba4c08b92f5e2bb03db5dd10eaa7e725ed35cf3794"
	},
	{
		"id": "58165ad633ae",
		"ts": "2026-07-05T00:01:56.825Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7985095.54,
		"hash": "58165ad633ae6b2c669a23e8d3bae12f388df478ebbe80519728bede349ca483"
	},
	{
		"id": "a6b8a10a90f6",
		"ts": "2026-07-05T00:01:57.078Z",
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
		"liquidityUsd": 1487529.66,
		"hash": "a6b8a10a90f6901364c805ae9ac1997c558e2963d376e3671c8b7e27ee071d1b"
	},
	{
		"id": "627712e7bdf6",
		"ts": "2026-07-05T00:01:57.320Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4642126.96,
		"hash": "627712e7bdf6a28883cccc136c5ba9a17797298e47f847315aab15a4c256075e"
	},
	{
		"id": "fe88b46da99d",
		"ts": "2026-07-05T00:01:57.573Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2106909.72,
		"hash": "fe88b46da99d67b4093cff15c190a0e315e56353498438df4e5d6bcf7a8377ea"
	},
	{
		"id": "b2757d1c24e7",
		"ts": "2026-07-05T00:01:57.814Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2040811.11,
		"hash": "b2757d1c24e780ef334a9fe62f27453bcb7279c55066beadc5635440377cd586"
	},
	{
		"id": "545525b37808",
		"ts": "2026-07-04T22:56:49.162Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100832589.76,
		"hash": "545525b37808ca803f4dd5c29996660c8aa280a3c3aec0ae55481bf7968a470a"
	},
	{
		"id": "605c81cee5c7",
		"ts": "2026-07-04T22:56:49.659Z",
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
		"liquidityUsd": 15878721.2,
		"hash": "605c81cee5c79652a8318cbbe8c29b078ee2a682f7975f238662a0752e2f86e3"
	},
	{
		"id": "5cc77a9a4751",
		"ts": "2026-07-04T22:56:49.922Z",
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
		"liquidityUsd": 1381911.71,
		"hash": "5cc77a9a4751bee4fd9af0476717d55c0fac4637f6acce05202ab0559ae8cb56"
	},
	{
		"id": "4be7a08f6ebf",
		"ts": "2026-07-04T22:56:50.190Z",
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
		"liquidityUsd": 33540582.02,
		"hash": "4be7a08f6ebf5f91ab2d7b46bc0fe86cfb40abc253219962d12dc63cef8ae303"
	},
	{
		"id": "c7afbe390529",
		"ts": "2026-07-04T22:56:50.458Z",
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
		"liquidityUsd": 4174472.49,
		"hash": "c7afbe390529fe227485e51bd52dc90fa1cce499b94a2cb6150cc16b0501add9"
	},
	{
		"id": "e8038f871fa6",
		"ts": "2026-07-04T22:56:50.722Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1009188.36,
		"hash": "e8038f871fa606d76818128b6b00329738de034d08306470a993c1b2a5ca00f2"
	},
	{
		"id": "55b198ba3178",
		"ts": "2026-07-04T22:56:50.983Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33540582.02,
		"hash": "55b198ba31787dc3424fd471d1f3f5df65d0ab7ca2bcb050ae0a1166b41e819c"
	},
	{
		"id": "ad27c1f04440",
		"ts": "2026-07-04T22:56:51.250Z",
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
		"liquidityUsd": 2443751.57,
		"hash": "ad27c1f044409b2492e63086623ac2de1ba3f8791084ca90e3acb72f430e2c48"
	},
	{
		"id": "7e26ac8b2915",
		"ts": "2026-07-04T22:56:51.513Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2206747.18,
		"hash": "7e26ac8b29155965b88f0c42413cf94a970b977f7f0e5206301b51fa82b765fe"
	},
	{
		"id": "6571a0d3d267",
		"ts": "2026-07-04T22:56:51.780Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 377439.08,
		"hash": "6571a0d3d2673fa5809973d90e4035f11405f827031d856ee6cfc0de09e753e5"
	},
	{
		"id": "15f67f654a93",
		"ts": "2026-07-04T22:56:52.024Z",
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
		"liquidityUsd": 857669.15,
		"hash": "15f67f654a934d5b2e62a720fac3cd1571dc92c7350d8b372015d8f91405401a"
	},
	{
		"id": "30c2dd6e270d",
		"ts": "2026-07-04T22:56:52.272Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3603644.73,
		"hash": "30c2dd6e270d6cda4d1570741089d644105bd042acc284626d9431bb1937c540"
	},
	{
		"id": "122fb17a42c8",
		"ts": "2026-07-04T22:56:52.515Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8028498.32,
		"hash": "122fb17a42c883b2508e66135f5b4d214bcb69cecb41ce9268c48d8c81fac4b6"
	},
	{
		"id": "391c2fa6f361",
		"ts": "2026-07-04T22:56:52.764Z",
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
		"liquidityUsd": 1515894.93,
		"hash": "391c2fa6f361fbfe1d1c6a79be92b96ebe14dddb844566a6ff181ace5c6de76e"
	},
	{
		"id": "9dbb20602427",
		"ts": "2026-07-04T22:56:53.007Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4769861.08,
		"hash": "9dbb20602427f8b0468407b65b708227f7d4e31fcd8b533cb29508e9ed7b8757"
	},
	{
		"id": "a7f8acf1d335",
		"ts": "2026-07-04T22:56:53.256Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2088631.58,
		"hash": "a7f8acf1d3356bec6fd3379ea714d6b4f5801be4cb7939f29471f8e0941c07c4"
	},
	{
		"id": "0570b4b141e2",
		"ts": "2026-07-04T22:56:53.502Z",
		"symbol": "AMETA",
		"token": "0x90eC58EF4cc9F37B96DE1e203b65bD4e6E79580E",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 118390.05,
		"hash": "0570b4b141e29e49b507f737620f738ddeec8300cf808f8c9bc9f1fd61cfd78c"
	},
	{
		"id": "be5b78bb286e",
		"ts": "2026-07-04T21:56:03.955Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100841594.53,
		"hash": "be5b78bb286e42280ce7c6d5d86e7c7b19a503c283e78f5ac2ba22d5c7f84a96"
	},
	{
		"id": "c4a6b2cdb105",
		"ts": "2026-07-04T21:56:04.294Z",
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
		"liquidityUsd": 16306328.49,
		"hash": "c4a6b2cdb105e88ffb5d45c36267d50b8224dfa2d156394f250ff875edd7f007"
	},
	{
		"id": "6ef1e3730a6f",
		"ts": "2026-07-04T21:56:04.479Z",
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
		"liquidityUsd": 1388665.71,
		"hash": "6ef1e3730a6ff34d9ffde313382ac6f8183136ee7267b2500a5e85e2e764e66a"
	},
	{
		"id": "b78a6978b857",
		"ts": "2026-07-04T21:56:04.667Z",
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
		"liquidityUsd": 33577725.19,
		"hash": "b78a6978b8571404d71485830ffa687447198c37ba17f85a42e8d3599118615e"
	},
	{
		"id": "7a7e32002619",
		"ts": "2026-07-04T21:56:04.852Z",
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
		"liquidityUsd": 4190148.85,
		"hash": "7a7e3200261959dbc7182b40e458ef59b3985815d6b2d206f3feea8aaa990bac"
	},
	{
		"id": "34438f5c7075",
		"ts": "2026-07-04T21:56:05.037Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1010114.89,
		"hash": "34438f5c70759e7feaf81ce9831ff78f3b8e6cf517778f7163e87ecc94a15315"
	},
	{
		"id": "3388b2c1ff7f",
		"ts": "2026-07-04T21:56:05.231Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33577725.19,
		"hash": "3388b2c1ff7fbf5aeaabb029a8ff064ffb212ca756fb0d44f3a888e8470bc558"
	},
	{
		"id": "bca10388250c",
		"ts": "2026-07-04T21:56:05.415Z",
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
		"liquidityUsd": 2449524.52,
		"hash": "bca10388250c81bc4df134e4fe69033e22d2f35e7bf2cdb266089ffc57345e9d"
	},
	{
		"id": "3b6ec1361045",
		"ts": "2026-07-04T21:56:05.600Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2245167.34,
		"hash": "3b6ec1361045cc388a1a99c1d072f75d88ab5d579c744eeb40f3688f296bb153"
	},
	{
		"id": "06ba0fa8e5ca",
		"ts": "2026-07-04T21:56:05.789Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 384836.33,
		"hash": "06ba0fa8e5ca4efd020a69e78fd840c3d80bd1a1cf97fc9ef525764c177c4adb"
	},
	{
		"id": "e10eae68a570",
		"ts": "2026-07-04T21:56:05.964Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3672388.98,
		"hash": "e10eae68a570ed3deefb51e12439155590a02a1bf35f8e9376c180e39cb5a979"
	},
	{
		"id": "228d22d3b874",
		"ts": "2026-07-04T21:56:06.136Z",
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
		"liquidityUsd": 857611.65,
		"hash": "228d22d3b874ec29dcd186a7e4fe45d8f526c923642553ac17eea1ad95865240"
	},
	{
		"id": "c04c5f7a3fb9",
		"ts": "2026-07-04T21:56:06.312Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8041400.45,
		"hash": "c04c5f7a3fb9e9967dfea4753f3a688ade539c1fa88e497ae70b21bea6334db3"
	},
	{
		"id": "10c7b6af0c04",
		"ts": "2026-07-04T21:56:06.487Z",
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
		"liquidityUsd": 1562210.44,
		"hash": "10c7b6af0c04e798b3c192d412353661bfbbd2db690d2aa9d1e1416beca6aa0d"
	},
	{
		"id": "a7e45253404d",
		"ts": "2026-07-04T21:56:06.659Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4798595.03,
		"hash": "a7e45253404def115b44fa275be823619128a1dc3286cc444b624dc12c1c877e"
	},
	{
		"id": "7919ab2d7c5d",
		"ts": "2026-07-04T21:56:06.828Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2125794.96,
		"hash": "7919ab2d7c5dc85c4395d559cc605a6c6b604620fe6244783560a299dc2ea501"
	},
	{
		"id": "61f9b6983e48",
		"ts": "2026-07-04T21:56:07.018Z",
		"symbol": "AMETA",
		"token": "0x90eC58EF4cc9F37B96DE1e203b65bD4e6E79580E",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 117053.24,
		"hash": "61f9b6983e480ccdd6b63422f456febc47b404ab8707f678c6cd4471d88dc6a5"
	},
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
	}
]
