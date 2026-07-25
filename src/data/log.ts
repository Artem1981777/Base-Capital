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
	"updatedAt": "2026-07-25T19:03:39.740Z",
	"tokensScored": 5533,
	"verdictsIssued": 5533,
	"safe": 4840,
	"risky": 441,
	"likelyRug": 252,
	"ticks": 337
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "b336a86acd68",
		"ts": "2026-07-25T19:03:35.964Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109861647.06,
		"hash": "b336a86acd68046125ad992e30a3013318d5ef895cdae2d6bb3d21c01be97be4"
	},
	{
		"id": "a8ea84383ce5",
		"ts": "2026-07-25T19:03:36.210Z",
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
		"liquidityUsd": 16926242.38,
		"hash": "a8ea84383ce5cbfaa669846f26f688e93b5cda76ab1be60f1b8290457fb90a5c"
	},
	{
		"id": "21a78868ea99",
		"ts": "2026-07-25T19:03:36.461Z",
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
		"liquidityUsd": 811732.9,
		"hash": "21a78868ea993820de098714e89c59e68272ce68c6309c06554755f056ec3c88"
	},
	{
		"id": "9dacd3268e7b",
		"ts": "2026-07-25T19:03:36.706Z",
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
		"liquidityUsd": 25413321.74,
		"hash": "9dacd3268e7bce3f9e10be1ab400ad979f5fdf22b39a4db56b2acd49d454ad91"
	},
	{
		"id": "13454d60a2e6",
		"ts": "2026-07-25T19:03:36.948Z",
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
		"liquidityUsd": 4939060.09,
		"hash": "13454d60a2e64d07c77c2083f42326e637ad273d8c15cc897c262bfa0e923577"
	},
	{
		"id": "987eb32cb0d3",
		"ts": "2026-07-25T19:03:37.195Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 944282.35,
		"hash": "987eb32cb0d350237618623dbabffbfa2813104f0d7412ce1cf583c409227c8c"
	},
	{
		"id": "038b972a059c",
		"ts": "2026-07-25T19:03:37.435Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25413320.82,
		"hash": "038b972a059cac6c44a104cb3bc7da997d3ba29dc706528d901099ee087da533"
	},
	{
		"id": "82b42dddd26f",
		"ts": "2026-07-25T19:03:37.673Z",
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
		"liquidityUsd": 3408909.69,
		"hash": "82b42dddd26fb1419f8b8f851a2f842cf07d078528ef23b8af956a1aa81b0074"
	},
	{
		"id": "f19c024c5efa",
		"ts": "2026-07-25T19:03:37.915Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 77637.25,
		"hash": "f19c024c5efa0a517252c700cfa1ee8fbbcdf75d16ae5e44e2725838c143e313"
	},
	{
		"id": "0f9799068595",
		"ts": "2026-07-25T19:03:38.157Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 185650.05,
		"hash": "0f97990685952a52d9864d8ea5b50c00221dc2f647fe5a0081c38673efece5a0"
	},
	{
		"id": "c4672907b32a",
		"ts": "2026-07-25T19:03:38.385Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1904215.94,
		"hash": "c4672907b32a5c82c734f769aeb97abb2cbd22f4a2aa4b53a1cb1a1a68dcad52"
	},
	{
		"id": "cad907adf1cd",
		"ts": "2026-07-25T19:03:38.613Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3221768.46,
		"hash": "cad907adf1cd6689da322d0fa54c061a2e41093314b77bce01ef265535924223"
	},
	{
		"id": "7c318982e36a",
		"ts": "2026-07-25T19:03:38.838Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10194101.04,
		"hash": "7c318982e36ae8d4aba42412720df161b5ead6fc6bc71b7b93973c817b080043"
	},
	{
		"id": "0078c350f875",
		"ts": "2026-07-25T19:03:39.063Z",
		"symbol": "AUTONO",
		"token": "0xB3D7e0c3C39A1D3F1B304663065A2F83Ddf56d8e",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 748360.64,
		"hash": "0078c350f875624b9ffd70df29591052918c6badf117c21f3e21aad1261de71d"
	},
	{
		"id": "501ceba9e75a",
		"ts": "2026-07-25T19:03:39.291Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1824873.21,
		"hash": "501ceba9e75abdc93820ad4369f8bd53cbaae0f8b2e1b68db3f405a716ec50b3"
	},
	{
		"id": "f9482dad3c6e",
		"ts": "2026-07-25T19:03:39.515Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 15583965.96,
		"hash": "f9482dad3c6ecbc192825f64361186a79238d20bc47d606465c5e0305e7c0f31"
	},
	{
		"id": "365fa015491f",
		"ts": "2026-07-25T19:03:39.740Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1911591.17,
		"hash": "365fa015491f1c7ab7bf0d0fbcab8f5470afeea8fd8163987f6e85932606b99c"
	},
	{
		"id": "762a31b0a1c7",
		"ts": "2026-07-25T17:55:56.250Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109803465.88,
		"hash": "762a31b0a1c76f9ccf3af81fa7455957175f265ccbe8675f2e611e6c23c5f32e"
	},
	{
		"id": "ed82cea0ebf6",
		"ts": "2026-07-25T17:55:56.759Z",
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
		"liquidityUsd": 16765226.26,
		"hash": "ed82cea0ebf6f8690ee773a3f76047e7badc2a6dff0e175830e8daaa36d73fb5"
	},
	{
		"id": "699af543409c",
		"ts": "2026-07-25T17:55:56.956Z",
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
		"liquidityUsd": 810162.71,
		"hash": "699af543409c26b63ded04ded71a68c8ac149256736340656aeb2c3a96fa06c2"
	},
	{
		"id": "06002fe06e73",
		"ts": "2026-07-25T17:55:57.301Z",
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
		"liquidityUsd": 25304216.77,
		"hash": "06002fe06e739ed6839d5b2eda5d121c538e6b9154fd905eef169dc181503575"
	},
	{
		"id": "3d0fed7ff830",
		"ts": "2026-07-25T17:55:57.521Z",
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
		"liquidityUsd": 4921197.86,
		"hash": "3d0fed7ff830b1c5f831fa3336dc0061caecfc3d516679c032d37e3d14dc00d8"
	},
	{
		"id": "f106130cb604",
		"ts": "2026-07-25T17:55:57.714Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 944282.35,
		"hash": "f106130cb60495ac6c891dfde945d4b7d914319b0aec422478db131818d0d6fb"
	},
	{
		"id": "8a82a0fceeaa",
		"ts": "2026-07-25T17:55:57.903Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25304216.77,
		"hash": "8a82a0fceeaaa8fc3a9b1ce0877722deadf566c0a0300f21b50100319dd4ef5d"
	},
	{
		"id": "bf3004378b9f",
		"ts": "2026-07-25T17:55:58.105Z",
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
		"liquidityUsd": 3403541.58,
		"hash": "bf3004378b9fba4e875bf9a115cb4197a11846529c11ea667ec24a529479636c"
	},
	{
		"id": "fca8ed118a76",
		"ts": "2026-07-25T17:55:58.454Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 75729.17,
		"hash": "fca8ed118a763a273d4014bd5c08f12a3966bee313752ec1d787e4fdea5cea2d"
	},
	{
		"id": "c9aa436ca028",
		"ts": "2026-07-25T17:55:58.642Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 185590.33,
		"hash": "c9aa436ca028117cd9f73155108ec4712a02f8ff70e36cee5c4d4089d530bca6"
	},
	{
		"id": "8f2850869146",
		"ts": "2026-07-25T17:55:58.828Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10124431.21,
		"hash": "8f285086914617da44616809b74af57554387ccc99ca5b5c78c6926c975bf30d"
	},
	{
		"id": "e5c9ae186103",
		"ts": "2026-07-25T17:55:59.021Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1885655.42,
		"hash": "e5c9ae1861039eca29f7200ed7409bafeec6f335c392686ef0ecb779109a03e6"
	},
	{
		"id": "19e99777bcbd",
		"ts": "2026-07-25T17:55:59.246Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3194698.23,
		"hash": "19e99777bcbda707e03536c48c8a1ecf3b7842e1ea2129dbcf1a71bc014b309a"
	},
	{
		"id": "620343ed44bd",
		"ts": "2026-07-25T17:55:59.432Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1913721.18,
		"hash": "620343ed44bd0529abcdddb8ccf582a13efaa683155abfd7352f18d4f13eab12"
	},
	{
		"id": "6fc78080c287",
		"ts": "2026-07-25T17:55:59.623Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1817195.34,
		"hash": "6fc78080c28750e5adefad99031da117593e0eac07833d1cc0ff9932bee94ea0"
	},
	{
		"id": "537bbe73c4bf",
		"ts": "2026-07-25T17:55:59.802Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4599230.38,
		"hash": "537bbe73c4bff052aa25cef67e3eaf62712edfd5b6e8f8124c973559f46a7b39"
	},
	{
		"id": "59d819d1a570",
		"ts": "2026-07-25T17:56:00.001Z",
		"symbol": "SOSO",
		"token": "0x624e2e7fDc8903165F64891672267AB0FCB98831",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 304361.98,
		"hash": "59d819d1a570fbc6550dbd48bfef41eb634d919e13db59397aed9351853c5192"
	},
	{
		"id": "bd2e8d804248",
		"ts": "2026-07-25T16:01:37.948Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109821507.1,
		"hash": "bd2e8d804248bea862da0aba66b080b3881ed3898bcb3500b6ffa2a265f55b8e"
	},
	{
		"id": "a95647877cce",
		"ts": "2026-07-25T16:01:38.206Z",
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
		"liquidityUsd": 16787398.68,
		"hash": "a95647877cce970c70317b7ad34f86d5b676cbe6328aec1eb27d8c7d2f26c8a9"
	},
	{
		"id": "592c4e2ba1a4",
		"ts": "2026-07-25T16:01:38.445Z",
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
		"liquidityUsd": 808952.57,
		"hash": "592c4e2ba1a4abcbe8071124efbf20fb74671a1a51315bc40ce7bb409ae9c9c2"
	},
	{
		"id": "4bb7e7b57160",
		"ts": "2026-07-25T16:01:38.662Z",
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
		"liquidityUsd": 25413711.82,
		"hash": "4bb7e7b57160f2e93766502962b20bb1f4697e5c12191e179f808afe8d8efe88"
	},
	{
		"id": "03033fe9b2a3",
		"ts": "2026-07-25T16:01:38.873Z",
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
		"liquidityUsd": 4921197.86,
		"hash": "03033fe9b2a3289781d6c51b9fb8baecf97a780e481a5f9bef89bd34662fb458"
	},
	{
		"id": "69d28d41be76",
		"ts": "2026-07-25T16:01:39.093Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 940721.39,
		"hash": "69d28d41be7609a57822947ae22d830d414bb7ceda0942749b988f7a37548746"
	},
	{
		"id": "83dcb992f701",
		"ts": "2026-07-25T16:01:39.399Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25413711.82,
		"hash": "83dcb992f70132f327820bdf64ec15538cbb875117d809c5fd078fb1f86a8b33"
	},
	{
		"id": "74b8474f3172",
		"ts": "2026-07-25T16:01:39.681Z",
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
		"liquidityUsd": 3394671.12,
		"hash": "74b8474f31729b08187cd0ad9f6d59c9ea1795c95f3e353b7771f1e31f9d2c53"
	},
	{
		"id": "773462185c82",
		"ts": "2026-07-25T16:01:39.926Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4602733.35,
		"hash": "773462185c822490b83b59b46491ebefb8c8c4ec39b3e3ff453d3b7d63a25b64"
	},
	{
		"id": "b9c812bb65b0",
		"ts": "2026-07-25T16:01:40.173Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 185719.65,
		"hash": "b9c812bb65b008bf094d2666f736197ef84c9140f16ba023f643c7961a51e97e"
	},
	{
		"id": "47c0bc49c3f8",
		"ts": "2026-07-25T16:01:40.409Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 77986.14,
		"hash": "47c0bc49c3f8f53f53f38451dce7163975d5c2c4111b4d806e9371abaf5884b9"
	},
	{
		"id": "8236759cf998",
		"ts": "2026-07-25T16:01:40.622Z",
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
		"liquidityUsd": 10067324.19,
		"hash": "8236759cf9985719380d193cc232574c9abd1cf44b8d4a2fb47764199da64067"
	},
	{
		"id": "029e2bcc8d0b",
		"ts": "2026-07-25T16:01:40.835Z",
		"symbol": "AUTONO",
		"token": "0xB3D7e0c3C39A1D3F1B304663065A2F83Ddf56d8e",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 724313.83,
		"hash": "029e2bcc8d0bf123a2234dede7111b93ff73c517c1d301f57b6a0925d1ea0352"
	},
	{
		"id": "52ccb1ddb734",
		"ts": "2026-07-25T16:01:41.034Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3116446.33,
		"hash": "52ccb1ddb734334eb8ed68942e6008005dcfdfc37e02964166e82e8bc68dd884"
	},
	{
		"id": "7210196423da",
		"ts": "2026-07-25T16:01:41.237Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1832558.18,
		"hash": "7210196423daf724659b8f7007f3f68df5c13f2a60d0d59b589d82a85011ba6d"
	},
	{
		"id": "1c944f1dc838",
		"ts": "2026-07-25T16:01:41.439Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1831440.65,
		"hash": "1c944f1dc838d1b154a5b1b0c8ca06b03370b2ea7c555ea93abb8ef04faf2829"
	},
	{
		"id": "e66e9b777e45",
		"ts": "2026-07-25T16:01:41.637Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1908187.49,
		"hash": "e66e9b777e452256a9f6e1a685a9699e457488d256685952d7447273187ebae0"
	},
	{
		"id": "b6d4218b127a",
		"ts": "2026-07-25T14:28:22.790Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109823919.03,
		"hash": "b6d4218b127aa387dbb44ddd92ee49eba80bec8026118ed1e6663b88f2d65723"
	},
	{
		"id": "efb0b4d3367e",
		"ts": "2026-07-25T14:28:23.172Z",
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
		"liquidityUsd": 17286863.52,
		"hash": "efb0b4d3367e460d688a330401b0cf3e6b72748d3c318d90b24f2ece01ea4815"
	},
	{
		"id": "5587197060ce",
		"ts": "2026-07-25T14:28:23.388Z",
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
		"liquidityUsd": 809057.65,
		"hash": "5587197060cece028b4e1550450518d1cafcb4a9984a36a04c308d2ee356866d"
	},
	{
		"id": "eb73c28617c4",
		"ts": "2026-07-25T14:28:23.640Z",
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
		"liquidityUsd": 25504261.95,
		"hash": "eb73c28617c45cb3b92f983985c0905f10d9840b06a4dee41b1933ee707c04d9"
	},
	{
		"id": "48b3ff654173",
		"ts": "2026-07-25T14:28:23.847Z",
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
		"liquidityUsd": 4931486.6,
		"hash": "48b3ff654173a768560a41510a8891b329b42e0c2d149ff8bbaa993b400045c9"
	},
	{
		"id": "547a4121e88b",
		"ts": "2026-07-25T14:28:24.060Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 929179.82,
		"hash": "547a4121e88bc252cb3411fb586caaa50b96bcdc91492d7a1e7d0c61cd4cb00d"
	},
	{
		"id": "6b2cb97eedd3",
		"ts": "2026-07-25T14:28:24.267Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25504261.95,
		"hash": "6b2cb97eedd3ff3ac0c71cce34f07884a7309f7947d7e64d4f778f2159390a5d"
	},
	{
		"id": "b9c2fc5001b1",
		"ts": "2026-07-25T14:28:24.477Z",
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
		"liquidityUsd": 2443989.39,
		"hash": "b9c2fc5001b1f3e0d0185749588d36ee2ca2119cb64afe353f8ecdab9cc31744"
	},
	{
		"id": "6fc622595060",
		"ts": "2026-07-25T14:28:24.681Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 185705.35,
		"hash": "6fc622595060790fe9c31b81dc1f921c2b5adcf68e22879baf28b2584717f605"
	},
	{
		"id": "7a7ae81cddd4",
		"ts": "2026-07-25T14:28:24.889Z",
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
		"liquidityUsd": 10109126.34,
		"hash": "7a7ae81cddd44e04546adc1c3092fc4d2e4d9489fe371301dfeb3aa1810fd368"
	},
	{
		"id": "396c9405b5af",
		"ts": "2026-07-25T14:28:25.094Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4603721.35,
		"hash": "396c9405b5aff2a363a1d6cce92203e736fa25fc3cb16502d72079006962e11d"
	},
	{
		"id": "ee9405be805a",
		"ts": "2026-07-25T14:28:25.289Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3086336.88,
		"hash": "ee9405be805a99a94ad6c149038f45514c7b746dd856111952340d119b305561"
	},
	{
		"id": "4f242935e601",
		"ts": "2026-07-25T14:28:25.490Z",
		"symbol": "AUTONO",
		"token": "0xB3D7e0c3C39A1D3F1B304663065A2F83Ddf56d8e",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 721991.2,
		"hash": "4f242935e6016b920b66ec335adadeffab91bee1e4ead1665e01bd6b09876aff"
	},
	{
		"id": "88f6254f6581",
		"ts": "2026-07-25T14:28:25.684Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1837873.74,
		"hash": "88f6254f6581d0d4c061abc7e32bd1e16b2f096003eb090a8df11fcdd55605be"
	},
	{
		"id": "15d9126f520b",
		"ts": "2026-07-25T14:28:25.877Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1835143.07,
		"hash": "15d9126f520b8c8eb8d3fa2dd13235557dbbc759a64857a13ecf808b8ce808bf"
	},
	{
		"id": "1962dd7f9c2f",
		"ts": "2026-07-25T14:28:26.085Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1919292.15,
		"hash": "1962dd7f9c2ff15bdbec9778c4aacaf7cef469c2099fbf93e371d4895097559a"
	},
	{
		"id": "d17ab7ce641c",
		"ts": "2026-07-25T14:28:26.283Z",
		"symbol": "SOSO",
		"token": "0x624e2e7fDc8903165F64891672267AB0FCB98831",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 294875.53,
		"hash": "d17ab7ce641cb4baaec028e9709a2404d0c16b69d2a82f8d0ae8e50519f88ecb"
	},
	{
		"id": "87bb3acce9ea",
		"ts": "2026-07-25T12:02:10.393Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109442858.2,
		"hash": "87bb3acce9eaf0861c702cff1952ccf426aa893831681c384bd301c922d0c77c"
	},
	{
		"id": "ef59194e6bae",
		"ts": "2026-07-25T12:02:10.847Z",
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
		"liquidityUsd": 16621680.93,
		"hash": "ef59194e6baef3121732f9a9d6844ee29062970837a19d3fb176bd965d1a9c02"
	},
	{
		"id": "9a71e5eaf608",
		"ts": "2026-07-25T12:02:11.095Z",
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
		"liquidityUsd": 805009.26,
		"hash": "9a71e5eaf608e38b0b9ee48b5cbd1e67628c76e5e6cc72c31f8a559e1f56d2ae"
	},
	{
		"id": "694ff28dba20",
		"ts": "2026-07-25T12:02:11.356Z",
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
		"liquidityUsd": 25475206.76,
		"hash": "694ff28dba206a96156a45111ee17f8e55b2565583d35697f805b6eab13ae6b0"
	},
	{
		"id": "52f3c2fe476e",
		"ts": "2026-07-25T12:02:11.602Z",
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
		"liquidityUsd": 4921114.13,
		"hash": "52f3c2fe476e3496eeb6d6e3c3b5a4d4da8f6fe3a351e5fce95ac117fa6699d4"
	},
	{
		"id": "71f96f39aae2",
		"ts": "2026-07-25T12:02:11.842Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 929179.82,
		"hash": "71f96f39aae23ccd69002fd7411702da5dae40a17f03ea3ba90c78f1f5e715ba"
	},
	{
		"id": "607d328e4d2a",
		"ts": "2026-07-25T12:02:12.085Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25475206.76,
		"hash": "607d328e4d2aaa67d0cd58a0a3e22ba7c97e7a9f9ab30b6adaa19414ab562221"
	},
	{
		"id": "006cd07f7f27",
		"ts": "2026-07-25T12:02:12.330Z",
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
		"liquidityUsd": 2433608.72,
		"hash": "006cd07f7f2719d7e1f02144fde3edf79b626b47479d562d16fa7ef0e19bd6fe"
	},
	{
		"id": "5ae90211d5f1",
		"ts": "2026-07-25T12:02:12.569Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3144852.72,
		"hash": "5ae90211d5f121043478afdb83624a2e2d4e89fbb43d7fe0405b47ad7f23edc5"
	},
	{
		"id": "1d53e58b7de5",
		"ts": "2026-07-25T12:02:12.818Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 186162.36,
		"hash": "1d53e58b7de5e11c883ed8f825e9ad748200510c4ad6d57d4dd21aefa2bf5e69"
	},
	{
		"id": "ecb77f0d8543",
		"ts": "2026-07-25T12:02:13.042Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4528469,
		"hash": "ecb77f0d85437a89df1f79e21c10185c21f6582f14ff109b3cabda9f977f2b8b"
	},
	{
		"id": "41481825d376",
		"ts": "2026-07-25T12:02:13.268Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9887074.58,
		"hash": "41481825d37687ab0a7dadf5ccd8bf0a43fc75854c302410437eaed2b0a2d42b"
	},
	{
		"id": "35b07880a475",
		"ts": "2026-07-25T12:02:13.497Z",
		"symbol": "AUTONO",
		"token": "0xB3D7e0c3C39A1D3F1B304663065A2F83Ddf56d8e",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 703980.5,
		"hash": "35b07880a4755d08c8c4dd2a2897a2e747d5e7acc95a86052d42cd0ad29868dc"
	},
	{
		"id": "a2ed01082f07",
		"ts": "2026-07-25T12:02:13.722Z",
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
		"liquidityUsd": 76550.57,
		"hash": "a2ed01082f07905844c059d92df681200df5d50776d91585c1170d4c8e9835e3"
	},
	{
		"id": "e65fdab50253",
		"ts": "2026-07-25T12:02:13.949Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1821908.97,
		"hash": "e65fdab502530429ae72a6b85beaa1317a15eccfef65a6c257d557bc07c0d546"
	},
	{
		"id": "a9042d1b9485",
		"ts": "2026-07-25T12:02:14.176Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 301885.82,
		"hash": "a9042d1b948547850c64ee1a8fe7c84af7f72ba8b09d20bc1948e7b760af955a"
	},
	{
		"id": "b67e6592c3d2",
		"ts": "2026-07-25T10:37:37.687Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109433895.6,
		"hash": "b67e6592c3d279fd8dceda9e68b857fff7df124a828233efb3c90f1d430868df"
	},
	{
		"id": "e9ed7d1cf6c4",
		"ts": "2026-07-25T10:37:38.081Z",
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
		"liquidityUsd": 16587426.72,
		"hash": "e9ed7d1cf6c44b748eddf117b6538156afb2eee7bd48c1af32935f450b769846"
	},
	{
		"id": "5fbc21a74be4",
		"ts": "2026-07-25T10:37:38.303Z",
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
		"liquidityUsd": 804584.5,
		"hash": "5fbc21a74be4c3d8d92434bd163cb4de728c1fcbf8f4608b5cea7cb310afd873"
	},
	{
		"id": "73b6a65df27c",
		"ts": "2026-07-25T10:37:38.507Z",
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
		"liquidityUsd": 25462825.56,
		"hash": "73b6a65df27cfa3a0f4d8ff1195b4b3189b35193f1c18f0f3d6228ac0b40e6e9"
	},
	{
		"id": "755b1009c5f0",
		"ts": "2026-07-25T10:37:38.696Z",
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
		"liquidityUsd": 4921112.54,
		"hash": "755b1009c5f0d61956a55d566677b679b36fdca168c42d781d3384099591ddd5"
	},
	{
		"id": "c04947089a58",
		"ts": "2026-07-25T10:37:38.923Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 929179.82,
		"hash": "c04947089a58257c77431726038a53b0a731e28c88c71366edba98f8c0384c31"
	},
	{
		"id": "31cc6e4289e6",
		"ts": "2026-07-25T10:37:39.131Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25462825.56,
		"hash": "31cc6e4289e620604d02fde7cdbff2f50f734c348d3ca30dbe902b8cc8449729"
	},
	{
		"id": "09a7345fb18f",
		"ts": "2026-07-25T10:37:39.339Z",
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
		"liquidityUsd": 2432614.61,
		"hash": "09a7345fb18f774d80312efd7a6cfb4432c2dc4fd9b943d19a970d03b4819cba"
	},
	{
		"id": "8af1f7f05e2e",
		"ts": "2026-07-25T10:37:39.527Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3176502.67,
		"hash": "8af1f7f05e2e6df0b1efaad0d14df8fa0db92692dbed5b1d54c3cb6a2a484787"
	},
	{
		"id": "8edd338f166d",
		"ts": "2026-07-25T10:37:39.752Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 186105.16,
		"hash": "8edd338f166d00a019772d707fb8d2f3f47aa98555c17b7924fb74fd10959941"
	},
	{
		"id": "75fb8cfb17bc",
		"ts": "2026-07-25T10:37:39.959Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9859935.71,
		"hash": "75fb8cfb17bc5cb662b34132cdca9fe1dc5366e83e7c19063e7755093cb4097e"
	},
	{
		"id": "31f20d5058d9",
		"ts": "2026-07-25T10:37:40.160Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4542647.84,
		"hash": "31f20d5058d9809802f37be717d78f19b18176d7ae7c12acf12da45b21681a09"
	},
	{
		"id": "ad1532e82736",
		"ts": "2026-07-25T10:37:40.350Z",
		"symbol": "AUTONO",
		"token": "0xB3D7e0c3C39A1D3F1B304663065A2F83Ddf56d8e",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 712138.93,
		"hash": "ad1532e82736c555786056f2909cb4651aa5862beae854d19bd3259fa95f3a65"
	},
	{
		"id": "9e0b8111a316",
		"ts": "2026-07-25T10:37:40.544Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1802298.95,
		"hash": "9e0b8111a31609032a6cc7e0c5781c87ec8e0a14ce9d5236daae730edff0c1a4"
	},
	{
		"id": "f0908d225f48",
		"ts": "2026-07-25T10:37:40.760Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 680694.43,
		"hash": "f0908d225f48784e0c76399d09710425f3f61051be99d32dabba40a6f3e2661a"
	},
	{
		"id": "9a9fae7b7f2a",
		"ts": "2026-07-25T10:37:41.016Z",
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
		"liquidityUsd": 79730.3,
		"hash": "9a9fae7b7f2a66d7a23b50be4c9677b57062597f598200373132ac3b390f38b8"
	},
	{
		"id": "e2fa4da9b57f",
		"ts": "2026-07-25T08:59:33.466Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109485237.48,
		"hash": "e2fa4da9b57ff0057b2cafab7370ff1cb0955281bc9434021be97ea0c70fc438"
	},
	{
		"id": "6f9b78984689",
		"ts": "2026-07-25T08:59:33.906Z",
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
		"liquidityUsd": 15934180.78,
		"hash": "6f9b78984689c874d33c4b56798891b70679078121b8b84af6f46ba157769c44"
	},
	{
		"id": "78a1f434a79f",
		"ts": "2026-07-25T08:59:34.138Z",
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
		"liquidityUsd": 804321.12,
		"hash": "78a1f434a79ff38990ff2acbbb6788ea3c2f52d3238bfa9ee91ac86f3bd1db84"
	},
	{
		"id": "2b19d1f39952",
		"ts": "2026-07-25T08:59:34.377Z",
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
		"liquidityUsd": 25615595.54,
		"hash": "2b19d1f39952521eb84590a73b3802279bcd7debf58c1e05b60dcd69a50eb3ae"
	},
	{
		"id": "965eeef4f06e",
		"ts": "2026-07-25T08:59:34.611Z",
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
		"liquidityUsd": 4913874.53,
		"hash": "965eeef4f06e2376fd02310314b08364ecfd34be01ebc75f8c2ceb0ad373b881"
	},
	{
		"id": "5cf87c958ee8",
		"ts": "2026-07-25T08:59:34.845Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 929179.82,
		"hash": "5cf87c958ee85fee5629c88a9ce1ce7daeecf120f88a0af915987e1f7c5cf183"
	},
	{
		"id": "4a8400fa8cfa",
		"ts": "2026-07-25T08:59:35.075Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25616984.26,
		"hash": "4a8400fa8cfa5b8a861fa6aa2320be51e3b0f4fe775cdbe869a65d6d10d44822"
	},
	{
		"id": "7a72a14de8d0",
		"ts": "2026-07-25T08:59:35.313Z",
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
		"liquidityUsd": 2425889.85,
		"hash": "7a72a14de8d02501b55687269aaba0eacc6d1e3f6b8f3250043c42ed0babb075"
	},
	{
		"id": "0fc7f357528a",
		"ts": "2026-07-25T08:59:35.547Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3098945.32,
		"hash": "0fc7f357528aac99c4e70a6e070381833d9c6ded1d269b80aeec275f5ac1e2a8"
	},
	{
		"id": "30e4f90760b0",
		"ts": "2026-07-25T08:59:35.780Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4554790.42,
		"hash": "30e4f90760b03e070aaf793e6c6f30b643005beb70f3433f4134a41afa994f2d"
	},
	{
		"id": "dd6e8aab2b6c",
		"ts": "2026-07-25T08:59:35.996Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 185949.94,
		"hash": "dd6e8aab2b6cbc35ca7057ca394edf26c4e97b7441b544fe460a76c54393fe18"
	},
	{
		"id": "b6a6cfe8832f",
		"ts": "2026-07-25T08:59:36.214Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9841768.81,
		"hash": "b6a6cfe8832fdd6d6c58a9280f56810950f267f1f97ac1d91ab1cc275e01cb58"
	},
	{
		"id": "bc7e78c010c6",
		"ts": "2026-07-25T08:59:36.430Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 685219.3,
		"hash": "bc7e78c010c6baa90ef2f50a2f9bcd77a825ec9fea0f39ab81a12fc89fc3e1ea"
	},
	{
		"id": "094bc06a2356",
		"ts": "2026-07-25T08:59:36.646Z",
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
		"liquidityUsd": 80866,
		"hash": "094bc06a2356eb3e184e7f0790162fb9b4469be6618c25cdc511270da2ac0c5d"
	},
	{
		"id": "f21aef8ab1d4",
		"ts": "2026-07-25T08:59:36.866Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1822596.22,
		"hash": "f21aef8ab1d40a190cb8011ca0baa1c6fdbe03219b85b344717fec6b845cb69c"
	},
	{
		"id": "faa31a188368",
		"ts": "2026-07-25T08:59:37.085Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 77014.35,
		"hash": "faa31a188368aa50c78d32b16a11de735f9d46b147083b896f876e02b1a2f106"
	},
	{
		"id": "01a8d8b14f77",
		"ts": "2026-07-25T06:13:48.411Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109575267.67,
		"hash": "01a8d8b14f775b35e2c5029e6e5319ed12af40311e75f334f20312b5338f1f5e"
	},
	{
		"id": "9852b72370b2",
		"ts": "2026-07-25T06:13:48.767Z",
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
		"liquidityUsd": 16901223.12,
		"hash": "9852b72370b2dad8550ab253b40850c4f4c85026252fff674df501a28e6ce363"
	},
	{
		"id": "342dc234ff02",
		"ts": "2026-07-25T06:13:48.966Z",
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
		"liquidityUsd": 808381.58,
		"hash": "342dc234ff02f82b9281197a58e0b8b48d5f0aa291dbd4a775f75ade21c751d7"
	},
	{
		"id": "485e9ce7388f",
		"ts": "2026-07-25T06:13:49.314Z",
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
		"liquidityUsd": 25722394.42,
		"hash": "485e9ce7388fb0d074d68df1afc83e9c831468962511f9aa30646bd2b1770250"
	},
	{
		"id": "1236e22f7516",
		"ts": "2026-07-25T06:13:49.512Z",
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
		"liquidityUsd": 4926916.75,
		"hash": "1236e22f7516feafb0420b738f10fbb3fc0f8ae138bd10aa14c5d98682ab1e6d"
	},
	{
		"id": "88149a2824a9",
		"ts": "2026-07-25T06:13:49.706Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 932720.15,
		"hash": "88149a2824a96e3f3316a54eed73bda649e0f17e6338e4d2aa4a56de634f8c54"
	},
	{
		"id": "1ba0c15055aa",
		"ts": "2026-07-25T06:13:49.918Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25722394.51,
		"hash": "1ba0c15055aae44ab5ddd162b498c1de3af2648025a1e4b5fda9e86b8bbbb99f"
	},
	{
		"id": "ce4f4b125ff5",
		"ts": "2026-07-25T06:13:50.126Z",
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
		"liquidityUsd": 2345552.2,
		"hash": "ce4f4b125ff53b0933dd9bfbaaa281ce5265c8f5edec8da50bd4c5ba182aa4ee"
	},
	{
		"id": "b91507cc1e1d",
		"ts": "2026-07-25T06:13:50.340Z",
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
		"liquidityUsd": 3238448.54,
		"hash": "b91507cc1e1d6ebf86e037ef334e4683d6c574d0afd16b9f32735d77e4594432"
	},
	{
		"id": "74a5781195b9",
		"ts": "2026-07-25T06:13:50.535Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 696848.24,
		"hash": "74a5781195b91f4c01b41133d197f41b71d6d1c2283ec5ead95fc93519ad41e1"
	},
	{
		"id": "ac19ca3e8503",
		"ts": "2026-07-25T06:13:50.727Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4574262.62,
		"hash": "ac19ca3e8503e9f67035d36f15ad7b4d3ec552ccf81070347fc677397a77b4ac"
	},
	{
		"id": "b3fb3e97df3a",
		"ts": "2026-07-25T06:13:50.925Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 186149.65,
		"hash": "b3fb3e97df3abfe48d878fbe418f98bb2ac4f90d3705242b75e7d107dd84c1cf"
	},
	{
		"id": "c75a115c1eac",
		"ts": "2026-07-25T06:13:51.114Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 305705.84,
		"hash": "c75a115c1eacf9f3ceb73965cfb8d6ba0545f0b5aab4af6945118908886da823"
	},
	{
		"id": "06842289e014",
		"ts": "2026-07-25T06:13:51.360Z",
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
		"liquidityUsd": 81043.43,
		"hash": "06842289e014de2a0a82ecb9987e110446b0de7704f4fce613ff66c774fe7872"
	},
	{
		"id": "7cbc57aa2e17",
		"ts": "2026-07-25T06:13:51.551Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9761031.2,
		"hash": "7cbc57aa2e1724c80398c330acac3a79027baec5769e1343007de2750279f64f"
	},
	{
		"id": "d7d6e9ce7daa",
		"ts": "2026-07-25T06:13:51.747Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1837537.37,
		"hash": "d7d6e9ce7daae4d2125a023d9d7dbf9d68d87ee05d71ce0eed90e7e0a74ba043"
	},
	{
		"id": "5e2194b3a195",
		"ts": "2026-07-25T03:30:52.824Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109572199.33,
		"hash": "5e2194b3a195aed376603e6e71cba878076ea7939ee1fd94b9c6c5e86e689b06"
	},
	{
		"id": "e16bde04befb",
		"ts": "2026-07-25T03:30:53.280Z",
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
		"liquidityUsd": 16123808.8,
		"hash": "e16bde04befb9ea8d3f8922adafca6cc667257b5dd0906a772d78cdddb5f229a"
	},
	{
		"id": "42c5cc56d553",
		"ts": "2026-07-25T03:30:53.731Z",
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
		"liquidityUsd": 811122.66,
		"hash": "42c5cc56d5535e1e223ca0dd281cd5f716874e0fe5d26bd3ccb966d53ec018b6"
	},
	{
		"id": "ef7035d67f35",
		"ts": "2026-07-25T03:30:53.980Z",
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
		"liquidityUsd": 25565575.01,
		"hash": "ef7035d67f358e79f48aa4aa18f74c4e68050e0961edeb66a93a3146fdfce5ba"
	},
	{
		"id": "de60d2154a3d",
		"ts": "2026-07-25T03:30:54.225Z",
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
		"liquidityUsd": 4949463.01,
		"hash": "de60d2154a3d6cf365a772ec84dcad2bea968e2880f8802cd185f60f09be32ea"
	},
	{
		"id": "18655f04c958",
		"ts": "2026-07-25T03:30:54.467Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 932690.24,
		"hash": "18655f04c958d1d2975516da4bd93dd93ed62f2bb371b6a913ead21769686695"
	},
	{
		"id": "9695f9e5d2e5",
		"ts": "2026-07-25T03:30:54.708Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25565575.01,
		"hash": "9695f9e5d2e5c87a61b808285a1e8080d27075f283305399bd59bfce5e40a371"
	},
	{
		"id": "7abefbdc903d",
		"ts": "2026-07-25T03:30:54.953Z",
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
		"liquidityUsd": 2346309.64,
		"hash": "7abefbdc903de759bb401e796478dcd2eb00638750fea2cea71cb8a2e1cb79ec"
	},
	{
		"id": "1f6f7cf0c6f2",
		"ts": "2026-07-25T03:30:55.198Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3227567.78,
		"hash": "1f6f7cf0c6f2ffacd72e55bbfa420cfdf2b4320919b5dc113227a100b71fb958"
	},
	{
		"id": "48ec7e78e138",
		"ts": "2026-07-25T03:30:55.440Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 705574.73,
		"hash": "48ec7e78e138ad7f5e13ff9cd4e578e28b862e602f4323d11ab710e9450ce040"
	},
	{
		"id": "28633e016165",
		"ts": "2026-07-25T03:30:55.667Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4587026.11,
		"hash": "28633e016165d113daf6fedc0374699802ff7e6c24e918f91c2f0b18a2b9800c"
	},
	{
		"id": "f8fd11b9dd52",
		"ts": "2026-07-25T03:30:55.893Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 186191.81,
		"hash": "f8fd11b9dd52a1c0f1eb60b8a4733ccc5fbc9ed97593d2d52ae4f039ade4f43d"
	},
	{
		"id": "3d19ee8206e4",
		"ts": "2026-07-25T03:30:56.118Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 305428.75,
		"hash": "3d19ee8206e4f91e7246a441647cda4349e2bbb452822e1f4ed7df2f3a67f8c3"
	},
	{
		"id": "8c9e40e54f9c",
		"ts": "2026-07-25T03:30:56.346Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1936864.8,
		"hash": "8c9e40e54f9cd2b09f01824bb1cb924a6b54240d71e0be313553267486a0c66b"
	},
	{
		"id": "e6ca9a2c368a",
		"ts": "2026-07-25T03:30:56.571Z",
		"symbol": "AUTONO",
		"token": "0xB3D7e0c3C39A1D3F1B304663065A2F83Ddf56d8e",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 685376.66,
		"hash": "e6ca9a2c368a330ae534f73ab65e0af82c7bb4eb386b1339d245c304b0e7cd83"
	},
	{
		"id": "fafef59ea618",
		"ts": "2026-07-25T03:30:56.797Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9757678.06,
		"hash": "fafef59ea6187b4e73ec087b3e5e5e0750b2e9a875fab3d5519c991ea3c2929b"
	},
	{
		"id": "f8e7274f4cb6",
		"ts": "2026-07-25T00:00:00.473Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109705987.84,
		"hash": "f8e7274f4cb62b57dea46083092b796d26d5b3f8a844e44c30f724289d327e5b"
	},
	{
		"id": "ff403d425e1b",
		"ts": "2026-07-25T00:00:00.924Z",
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
		"liquidityUsd": 16082979.67,
		"hash": "ff403d425e1b78b29bfd6ae4f197c989c788f139ffe81b23f5e063ec1de04810"
	},
	{
		"id": "622d1e2623a3",
		"ts": "2026-07-25T00:00:01.442Z",
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
		"liquidityUsd": 824025.45,
		"hash": "622d1e2623a3c00aac8e2bb35fc34fdfac98a6a210b1745a43610977e52e82db"
	},
	{
		"id": "6ab7aeefc49c",
		"ts": "2026-07-25T00:00:01.846Z",
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
		"liquidityUsd": 25448879.78,
		"hash": "6ab7aeefc49cb1a329e0747a9f5edd5a945dfbbeedc8daa9ec0ade082cf9f092"
	},
	{
		"id": "ce81dc744b4b",
		"ts": "2026-07-25T00:00:02.296Z",
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
		"liquidityUsd": 4951165.77,
		"hash": "ce81dc744b4b5661171b7dd92df2ec8d59182a39e4370c5bd5af66540b0c8b80"
	},
	{
		"id": "fa5f2abd2c3e",
		"ts": "2026-07-25T00:00:02.560Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 928427.81,
		"hash": "fa5f2abd2c3e87302140865031bee94b2daf5f55cda05686b9abd7bb4cabbebf"
	},
	{
		"id": "ccb05d49f4b1",
		"ts": "2026-07-25T00:00:02.873Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25448879.78,
		"hash": "ccb05d49f4b104fdf5afdb4179836c995899a28b90f31ea5f6ddfc7f7bc44c5b"
	},
	{
		"id": "5fb120d9f833",
		"ts": "2026-07-25T00:00:03.163Z",
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
		"liquidityUsd": 2258977.24,
		"hash": "5fb120d9f83336daf39646c42ff251b5d703cb1f4c1efff037480586ee1128d0"
	},
	{
		"id": "c2bc4ce9cc3b",
		"ts": "2026-07-25T00:00:03.415Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3192848.71,
		"hash": "c2bc4ce9cc3b17d4b74e6277848c77a1e339b895b7463afb98c2f3b0e4135396"
	},
	{
		"id": "a6dbc9be7c44",
		"ts": "2026-07-25T00:00:03.651Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 716204.11,
		"hash": "a6dbc9be7c440b5b2efa64cd4a6331654dd766d75af84b6ce037c3fe91710e17"
	},
	{
		"id": "e0601b278f5a",
		"ts": "2026-07-25T00:00:03.885Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 308258.18,
		"hash": "e0601b278f5a04e475165403867d4580af741d882d59eaee51ef550873583a90"
	},
	{
		"id": "cf0d809b0789",
		"ts": "2026-07-25T00:00:04.110Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4602453.69,
		"hash": "cf0d809b07893c3467bd0bfe9fec0f2fd8c43cb9be5513f0192081c95631f877"
	},
	{
		"id": "fc1d74ae0215",
		"ts": "2026-07-25T00:00:04.342Z",
		"symbol": "AUTONO",
		"token": "0xB3D7e0c3C39A1D3F1B304663065A2F83Ddf56d8e",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 670040.41,
		"hash": "fc1d74ae0215fbe633cced14242944741f420866385da0944395245e63e5eb10"
	},
	{
		"id": "4a25ffae5491",
		"ts": "2026-07-25T00:00:04.571Z",
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
		"liquidityUsd": 80414.19,
		"hash": "4a25ffae5491498367062240eb9c8fc606c830222c6108bb6651133f9dfec9b4"
	},
	{
		"id": "0715e11264e0",
		"ts": "2026-07-25T00:00:04.806Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 496778.85,
		"hash": "0715e11264e06facbb6cc8553582ebc099410ca659f43f62b66ccff6b16c3773"
	},
	{
		"id": "e7f237ad8f9b",
		"ts": "2026-07-25T00:00:05.036Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1810398.18,
		"hash": "e7f237ad8f9b646e9465b1c2e2f6bc4703e1c66e4f8f4feb2c413c81ade50d72"
	},
	{
		"id": "c3a21dd1aeda",
		"ts": "2026-07-24T22:09:40.735Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109662259.56,
		"hash": "c3a21dd1aeda309df16b26878c1f22691b71f88f70989fb67176a64b836bdea1"
	},
	{
		"id": "7103fca39abe",
		"ts": "2026-07-24T22:09:41.085Z",
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
		"liquidityUsd": 16732847.03,
		"hash": "7103fca39abecdc27f35266032f8dbb9fe8cb73998f5d4db116e1186bdef5e8d"
	},
	{
		"id": "d3a971f0fb84",
		"ts": "2026-07-24T22:09:41.284Z",
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
		"liquidityUsd": 823119.66,
		"hash": "d3a971f0fb84231b546bcb74d45d8d5c5d7670436cebf8c95cad0ffe4ceae6da"
	},
	{
		"id": "a479f1e1921e",
		"ts": "2026-07-24T22:09:41.489Z",
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
		"liquidityUsd": 25387927.27,
		"hash": "a479f1e1921e50b967306d9f08848c650bff0a6e227253847b39ab00b6ac13f0"
	},
	{
		"id": "fd1015df7ef1",
		"ts": "2026-07-24T22:09:41.855Z",
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
		"liquidityUsd": 4957713.19,
		"hash": "fd1015df7ef12d9c48317087dcdadc5a6f12c25dc633015dffbe1b19028d0167"
	},
	{
		"id": "a3a125b04330",
		"ts": "2026-07-24T22:09:42.070Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 928427.81,
		"hash": "a3a125b04330db0de0441c73b44fc53b10163a0e32e9e7c3ada39eb01b3936c8"
	},
	{
		"id": "031b91b87175",
		"ts": "2026-07-24T22:09:42.262Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25387927.27,
		"hash": "031b91b87175d1528f37d9f104904aceb257581ad0b58e101c7d7a265701b28b"
	},
	{
		"id": "29131d72d0b6",
		"ts": "2026-07-24T22:09:42.458Z",
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
		"liquidityUsd": 2361167.96,
		"hash": "29131d72d0b65e2afd36d587a80c3e09492b915bbca548927802127a6a973d4c"
	},
	{
		"id": "3dd36418ba05",
		"ts": "2026-07-24T22:09:42.653Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3113360.58,
		"hash": "3dd36418ba059e6b55154270b86f2a5f08f673274c95554d201fa519659d3b97"
	},
	{
		"id": "7db2ac23e1ed",
		"ts": "2026-07-24T22:09:42.864Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 715935.91,
		"hash": "7db2ac23e1edf0899bd5864715c0d296ae41a9ff49fe25bab2863655fcd4f4e5"
	},
	{
		"id": "694c2d94b3c6",
		"ts": "2026-07-24T22:09:43.070Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 315048.28,
		"hash": "694c2d94b3c6a6400af69085bad01a2d5015e5c8c1673e063ef63dc01c4be914"
	},
	{
		"id": "4029d11e839d",
		"ts": "2026-07-24T22:09:43.309Z",
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
		"liquidityUsd": 85468.86,
		"hash": "4029d11e839dc1290796b83bd40a658fad3ffde85e982167171c1dafb1aeb026"
	},
	{
		"id": "53eced76ea95",
		"ts": "2026-07-24T22:09:43.507Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4621447.71,
		"hash": "53eced76ea95a168331879df82c675f15ab3aa0b3a9f0410d27d1603005d9f82"
	},
	{
		"id": "a6bfab91c762",
		"ts": "2026-07-24T22:09:43.743Z",
		"symbol": "AUTONO",
		"token": "0xB3D7e0c3C39A1D3F1B304663065A2F83Ddf56d8e",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 661599.72,
		"hash": "a6bfab91c7628e0dd78c8e3b31b15a826c0ff4fc2515cebc2141f8c394650fe9"
	},
	{
		"id": "d9fe97368f4a",
		"ts": "2026-07-24T22:09:43.956Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 496712.07,
		"hash": "d9fe97368f4ae22dc6bbb13c430d21bd1785c781c9e755d4c5bf418897a121db"
	},
	{
		"id": "45dd5feeeb12",
		"ts": "2026-07-24T22:09:44.138Z",
		"symbol": "VBEEF",
		"token": "0x10d991B3F8f04d552597d95de80d86Fc29a77b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 58344.63,
		"hash": "45dd5feeeb125e30631cd166f7d9d901bffa7079f240100fde140e4c3ace053d"
	},
	{
		"id": "f8df1d822342",
		"ts": "2026-07-24T20:58:33.847Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109654990.52,
		"hash": "f8df1d8223425068593a1d93966c6ccc0c1d568f1f67c179e62e0abaae851b97"
	},
	{
		"id": "9ef3df6a1181",
		"ts": "2026-07-24T20:58:34.344Z",
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
		"liquidityUsd": 16918966.69,
		"hash": "9ef3df6a11818af30ab4859f9c62414de30e1d2ff3ece42c177cc149e0eba222"
	},
	{
		"id": "9c7ab3b55944",
		"ts": "2026-07-24T20:58:34.603Z",
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
		"liquidityUsd": 825540.32,
		"hash": "9c7ab3b55944c5b816f1b788b02fcb909eef9b7c0cc8754ff48fb258eb0c1e29"
	},
	{
		"id": "3b8b3272c04d",
		"ts": "2026-07-24T20:58:34.855Z",
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
		"liquidityUsd": 25476673.67,
		"hash": "3b8b3272c04dd04c547e5fbf2a60f4d34107ac59b5f1b21371f119cae2ac3c5a"
	},
	{
		"id": "e779a64fdda7",
		"ts": "2026-07-24T20:58:35.118Z",
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
		"liquidityUsd": 4974320.99,
		"hash": "e779a64fdda783e7a27bc2c79e62381b1e014642d66471b233050762916046c4"
	},
	{
		"id": "dd8c9409a37a",
		"ts": "2026-07-24T20:58:35.381Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 935908.93,
		"hash": "dd8c9409a37acb60c327f9ee96b53f1688168ec60d6d2e3f0c532df5174a28d9"
	},
	{
		"id": "4428d33e6f96",
		"ts": "2026-07-24T20:58:35.638Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25476673.67,
		"hash": "4428d33e6f9686cdaade521e99e0428578eddd88157e01df05025a86f71c4783"
	},
	{
		"id": "34350a92e4f8",
		"ts": "2026-07-24T20:58:35.886Z",
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
		"liquidityUsd": 2363982.67,
		"hash": "34350a92e4f8d8e72f78de56cd6c8d1f46fde29a84f0289077034197d0d261af"
	},
	{
		"id": "9ccec0847e0e",
		"ts": "2026-07-24T20:58:36.135Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3040767.94,
		"hash": "9ccec0847e0e76f040625238a46e6cc27e38840583554a83b84c7458b2b2ae70"
	},
	{
		"id": "cb068d3ea38c",
		"ts": "2026-07-24T20:58:36.386Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 308552.4,
		"hash": "cb068d3ea38ce91c607d7969b4e6c8da9a2af6aee47f2a24f1f72b6ce3ae2c00"
	},
	{
		"id": "33a6c39bb8bf",
		"ts": "2026-07-24T20:58:36.619Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 717313.39,
		"hash": "33a6c39bb8bfc03335ecf53bfbd9f70621898b7b8796320f4a9b154097b5305d"
	},
	{
		"id": "c508a22bf2c8",
		"ts": "2026-07-24T20:58:36.850Z",
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
		"liquidityUsd": 82670.02,
		"hash": "c508a22bf2c8f2ea3ac469bf97a2630a948235315260023f9eabacfc2e97669b"
	},
	{
		"id": "4fa59b6e76ba",
		"ts": "2026-07-24T20:58:37.081Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1043980.81,
		"hash": "4fa59b6e76ba34f1e1db86e72499a93b944e86a32f5097f4d0ee41aab2e523cc"
	},
	{
		"id": "5beace0d961f",
		"ts": "2026-07-24T20:58:37.312Z",
		"symbol": "AUTONO",
		"token": "0xB3D7e0c3C39A1D3F1B304663065A2F83Ddf56d8e",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 661796.53,
		"hash": "5beace0d961f69cf8a4bea08acf5a269b816096fc72c2b8a47f6ee317ef58312"
	},
	{
		"id": "1a685f7061b9",
		"ts": "2026-07-24T20:58:37.544Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 497689.19,
		"hash": "1a685f7061b9418c526eac83a4d9f3001584b6828878e5facc9480127be87141"
	},
	{
		"id": "17c336e258ff",
		"ts": "2026-07-24T20:58:37.776Z",
		"symbol": "VBEEF",
		"token": "0x10d991B3F8f04d552597d95de80d86Fc29a77b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 58729.66,
		"hash": "17c336e258ff007dd0757db8e85e5012e0c5f2708b14555c6c0628db739afa3d"
	},
	{
		"id": "bb7b15d289ff",
		"ts": "2026-07-24T19:19:15.505Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109682414.45,
		"hash": "bb7b15d289ffee087f3ef193c5571474774633798c135bc900b083a6ef4d08fa"
	},
	{
		"id": "4801db09be06",
		"ts": "2026-07-24T19:19:15.764Z",
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
		"liquidityUsd": 15318341.85,
		"hash": "4801db09be06b290d8916ed205f312d17423adc350fe8861f8c98ccd10eb3d1e"
	},
	{
		"id": "e940755ceb1a",
		"ts": "2026-07-24T19:19:16.229Z",
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
		"liquidityUsd": 825453.15,
		"hash": "e940755ceb1afe50c267ab4816a104ae690314818c9448d1e41f401982cd8b8f"
	},
	{
		"id": "cd3e4feb0b64",
		"ts": "2026-07-24T19:19:16.601Z",
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
		"liquidityUsd": 25422964.94,
		"hash": "cd3e4feb0b64de2d1462ed96344c21448944146bc3654ced7a0f36e0c372d3ef"
	}
]
