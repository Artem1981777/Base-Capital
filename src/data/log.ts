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
	"updatedAt": "2026-07-04T07:42:51.715Z",
	"tokensScored": 1305,
	"verdictsIssued": 1305,
	"safe": 1146,
	"risky": 126,
	"likelyRug": 33,
	"ticks": 91
}

export const verdicts: AgentVerdict[] = [
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
	},
	{
		"id": "cd4ad91e56e6",
		"ts": "2026-07-03T12:06:47.178Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1954983.26,
		"hash": "cd4ad91e56e65bb8e86bf89df86bc07a6ddac3b48393e3632ab6f61513fe1297"
	},
	{
		"id": "8f2a50a5e457",
		"ts": "2026-07-03T12:06:47.420Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 990263.31,
		"hash": "8f2a50a5e457ec6bf2e09b44f546ba658364bfbadb2ee726ff4e3fe39b48f0e2"
	},
	{
		"id": "221a6bb79761",
		"ts": "2026-07-03T12:06:47.663Z",
		"symbol": "BLOCKTRONICS",
		"token": "0x7afE438411ee3959C7De6f7fB76bf9C769320bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 186923.96,
		"hash": "221a6bb797617873d73e41d9272c8f19e7541a2223aae08ae7b9ecade6d84b41"
	},
	{
		"id": "0308abcd495a",
		"ts": "2026-07-03T12:06:47.902Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2001411.75,
		"hash": "0308abcd495aeb076ce57880a2d3baa2bc46202e7900422078a501b407bcd911"
	},
	{
		"id": "14c5844a6d60",
		"ts": "2026-07-03T12:06:48.144Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8372123.69,
		"hash": "14c5844a6d60de75d2d634c62af08bcdf0d147e7fc557cef1b29c5d4040872ed"
	},
	{
		"id": "8de12eacbac8",
		"ts": "2026-07-03T12:06:48.383Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2100631.46,
		"hash": "8de12eacbac83fc147bc6f9961eff62dceb2ada988e4d69a361439e390698332"
	},
	{
		"id": "9107b3197246",
		"ts": "2026-07-03T09:54:27.874Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 99027750.57,
		"hash": "9107b3197246dd6a07af0202806d1c7c086191ab7a654375b642270396a7e0d9"
	},
	{
		"id": "55fb4b879b29",
		"ts": "2026-07-03T09:54:28.141Z",
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
		"liquidityUsd": 14787026.05,
		"hash": "55fb4b879b29012a551ce70b393db0a1a613ac00d0d6c6add331084d2f2eecf3"
	},
	{
		"id": "6acf00d670db",
		"ts": "2026-07-03T09:54:28.491Z",
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
		"liquidityUsd": 1403336.54,
		"hash": "6acf00d670db3d0309e3901b4610d4060aaa875cfac53e37591eda23b8adb0c5"
	},
	{
		"id": "1bffbacf1892",
		"ts": "2026-07-03T09:54:28.765Z",
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
		"liquidityUsd": 29531864.55,
		"hash": "1bffbacf18921d8d2a6ff3a75890e39d47e1853495e76bc7e4dbfea200c2c368"
	},
	{
		"id": "5ab8479a4a1f",
		"ts": "2026-07-03T09:54:29.024Z",
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
		"liquidityUsd": 4083468.72,
		"hash": "5ab8479a4a1f9f7457cf369b301230de70e629f788f69ac767ec608d90361b3c"
	},
	{
		"id": "5f9175d77d35",
		"ts": "2026-07-03T09:54:29.283Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 977718.9,
		"hash": "5f9175d77d3541318b64d52cb5f9ec25ffe51f05777a2db4f91555d3f726d430"
	},
	{
		"id": "5ee9f7917b6d",
		"ts": "2026-07-03T09:54:29.541Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29531864.55,
		"hash": "5ee9f7917b6de8ba0373943f8ebda9839ac231eeaeab80aad77941567fcc1a20"
	},
	{
		"id": "fa0b28126018",
		"ts": "2026-07-03T09:54:29.796Z",
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
		"liquidityUsd": 2322633.33,
		"hash": "fa0b2812601841f0795b49c5ae8222b329778848798fb6a19e5b5ce8a030495c"
	},
	{
		"id": "875a50fd1117",
		"ts": "2026-07-03T09:54:30.056Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3109262.27,
		"hash": "875a50fd11171eb69f7fc2645d9e319196d7e52b89adfd029601a3486d22b395"
	},
	{
		"id": "1369f0e143a9",
		"ts": "2026-07-03T09:54:30.315Z",
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
		"liquidityUsd": 5308179.67,
		"hash": "1369f0e143a978d3ab03433fbacf3ff44d79e4df6048efb5122d8a7575c11071"
	},
	{
		"id": "63cdd27b6a83",
		"ts": "2026-07-03T09:54:31.108Z",
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
		"liquidityUsd": 296210.55,
		"hash": "63cdd27b6a83dd85e1ab0f18dee811e28aaa3f3272137d76b062cae6ed553a3f"
	},
	{
		"id": "e07c57ce671e",
		"ts": "2026-07-03T09:54:31.347Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1941477.13,
		"hash": "e07c57ce671ef53f7e2da09d18a77d9eefb7f4dc0be1cc1729f021ac87f48224"
	},
	{
		"id": "ab65a182dc36",
		"ts": "2026-07-03T09:54:31.586Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 988948.78,
		"hash": "ab65a182dc36b5ac3087b401d1a5423798a28be35812b6c711b351977698dd96"
	},
	{
		"id": "cef82f32ec76",
		"ts": "2026-07-03T09:54:31.830Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2082342.86,
		"hash": "cef82f32ec7646bd37568dd5571d0a4608f0308bf8a6d6bd1c938183dda494ed"
	},
	{
		"id": "22f26e8c0ffe",
		"ts": "2026-07-03T09:54:32.074Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 197897.4,
		"hash": "22f26e8c0ffeefa8327f152c5166d2a57491e7e85801d34a3a63a86e692c6e16"
	},
	{
		"id": "455a381c34f2",
		"ts": "2026-07-03T09:54:32.311Z",
		"symbol": "BLOCKTRONICS",
		"token": "0x7afE438411ee3959C7De6f7fB76bf9C769320bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 184811.1,
		"hash": "455a381c34f28a7b350471308d6ae9ee97c7d96e8be58721231bb9664cd14216"
	},
	{
		"id": "e034ca032106",
		"ts": "2026-07-03T06:28:28.273Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 98727152.47,
		"hash": "e034ca032106f0c55a65b12dd599866d0fc702093ff2e979f638f3cdd25085fc"
	},
	{
		"id": "b31700588406",
		"ts": "2026-07-03T06:28:28.470Z",
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
		"liquidityUsd": 14608613.29,
		"hash": "b31700588406366c349b4f686fcb23fc895c019555b2e1a6da480eef0f9705b1"
	},
	{
		"id": "aee084bc331a",
		"ts": "2026-07-03T06:28:28.680Z",
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
		"liquidityUsd": 1394912.28,
		"hash": "aee084bc331af08998edcf11ae4480b26b70a9e992359488bbd16e78bde8f894"
	},
	{
		"id": "573c2f81dcca",
		"ts": "2026-07-03T06:28:28.868Z",
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
		"liquidityUsd": 29428823.2,
		"hash": "573c2f81dcca7fd73903b8ec10355a472a68f22f7a15503e1c241ee098834541"
	},
	{
		"id": "b6533ad67a5d",
		"ts": "2026-07-03T06:28:29.076Z",
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
		"liquidityUsd": 4063752.81,
		"hash": "b6533ad67a5dbae637fc26417d7f9c4f6ff4b3dde7d16c02d6208dfb76fee492"
	},
	{
		"id": "f17b44f33a82",
		"ts": "2026-07-03T06:28:29.272Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 971053.68,
		"hash": "f17b44f33a82f1104e8bb3125083a0a568af35a9b2c8da170c6aba1176c7c641"
	},
	{
		"id": "b847305c116f",
		"ts": "2026-07-03T06:28:29.474Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29428823.2,
		"hash": "b847305c116ff5f1b3c8601008f5af34a928e2bf0f3ec3af0a156c7b9405abb1"
	},
	{
		"id": "033b68c9f91e",
		"ts": "2026-07-03T06:28:29.677Z",
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
		"liquidityUsd": 2478343.19,
		"hash": "033b68c9f91e3b401ba9f791be88b2f218371afcb005b3cfaf84dfeefd97ae59"
	},
	{
		"id": "f9c88ec38a83",
		"ts": "2026-07-03T06:28:29.881Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3312776.29,
		"hash": "f9c88ec38a838bc98e0bdb6b4b5dabb47b464e53d6582a3a208d5baf76e17422"
	},
	{
		"id": "2463e3054308",
		"ts": "2026-07-03T06:28:30.069Z",
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
		"liquidityUsd": 5026752.58,
		"hash": "2463e3054308688f76eb2983013187520829dc605cea70b0bf094431063de02a"
	},
	{
		"id": "93b6e23613b5",
		"ts": "2026-07-03T06:28:30.278Z",
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
		"liquidityUsd": 360229.75,
		"hash": "93b6e23613b57ee814f8ca61ff5c084c0fed98dad27abf7f0d3211e52a1fe3ce"
	},
	{
		"id": "f71ed82f4381",
		"ts": "2026-07-03T06:28:30.475Z",
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
		"liquidityUsd": 183942.26,
		"hash": "f71ed82f43813cdc862c8d26b96c1375fd64aee148223a6695c6ebff20b5a4e6"
	},
	{
		"id": "3dfbe59137ff",
		"ts": "2026-07-03T06:28:30.685Z",
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
		"liquidityUsd": 1463608.39,
		"hash": "3dfbe59137ff6a6e502a67d8d769847b70f69a5068498de89ed7112d28089f3f"
	},
	{
		"id": "624f972e11fb",
		"ts": "2026-07-03T06:28:30.862Z",
		"symbol": "OpenAI",
		"token": "0x43D6e8F4e413028365E9cf83D1e6c2181e8e3b07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 306572.65,
		"hash": "624f972e11fb1e7fe7ed63498f2f7f9f13f3788148de4e2b9966f6d81fa7d73b"
	},
	{
		"id": "eb5ab8ad6e26",
		"ts": "2026-07-03T06:28:31.073Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1944937.93,
		"hash": "eb5ab8ad6e26f41da15707d5ed1bc5a42787e8b8b570226cfa0d9746895d72ec"
	},
	{
		"id": "895e265eecd4",
		"ts": "2026-07-03T06:28:31.254Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8315715.25,
		"hash": "895e265eecd4b8ace2d462f00247a8cc08f0a7d91dd968991708464b27e3eee4"
	},
	{
		"id": "2bb16f5f5ad9",
		"ts": "2026-07-03T02:37:02.448Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 97931521.57,
		"hash": "2bb16f5f5ad92807cc28b9caac8d57463f27498d46cd49f8ae319773088bf9ac"
	},
	{
		"id": "f05d10611e24",
		"ts": "2026-07-03T02:37:02.978Z",
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
		"liquidityUsd": 13638102.08,
		"hash": "f05d10611e24cb4004cc489c8c75ce82b124b656e9a3b5ecbf2c2edc08f7812d"
	},
	{
		"id": "ab73e1129a1e",
		"ts": "2026-07-03T02:37:03.261Z",
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
		"liquidityUsd": 1390245.38,
		"hash": "ab73e1129a1e713309cd5417478b3f64e8b1dc40a267931e579aa344049ed0fc"
	},
	{
		"id": "9781789fb555",
		"ts": "2026-07-03T02:37:03.537Z",
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
		"liquidityUsd": 29328377.98,
		"hash": "9781789fb5556981b3b747c0e4760d17bd8e3b154e89441bbf32b6cd20a74e6d"
	},
	{
		"id": "18a11b92b7bd",
		"ts": "2026-07-03T02:37:03.825Z",
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
		"liquidityUsd": 4047487.51,
		"hash": "18a11b92b7bd0e2b05c7ff9bf290747bf8e4a70f2c46a3a988b695c9f1b6e6df"
	},
	{
		"id": "5d2de2d5eabc",
		"ts": "2026-07-03T02:37:04.114Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 973125.83,
		"hash": "5d2de2d5eabc7876d2e4921628bba296ef654d946b2dd86b354a9a682a7a3330"
	},
	{
		"id": "ee44bb42d7af",
		"ts": "2026-07-03T02:37:04.397Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29328377.98,
		"hash": "ee44bb42d7af0faa9e8a24915aadf8bdf2c6aaaa3d422c990feb69a00ffbb8bb"
	},
	{
		"id": "c14b8c9bc77a",
		"ts": "2026-07-03T02:37:04.680Z",
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
		"liquidityUsd": 2470003.58,
		"hash": "c14b8c9bc77a8566c4d36d05b81fc38378ce3063ced45be900f5ea3b59a966dc"
	},
	{
		"id": "561a32048623",
		"ts": "2026-07-03T02:37:04.960Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3384347.03,
		"hash": "561a3204862335dbcefee703923c928ca5532011f999d2da0e192d25d39e24b9"
	},
	{
		"id": "c5336124df82",
		"ts": "2026-07-03T02:37:05.314Z",
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
		"liquidityUsd": 4888951.01,
		"hash": "c5336124df82baf9721561e95485fb4171f7a10035c93d386a445e5d85db4520"
	}
]
