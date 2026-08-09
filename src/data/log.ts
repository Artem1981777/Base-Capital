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
	"updatedAt": "2026-08-09T17:27:21.678Z",
	"tokensScored": 8596,
	"verdictsIssued": 8596,
	"safe": 7516,
	"risky": 645,
	"likelyRug": 435,
	"ticks": 522
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "1f61e7295d23",
		"ts": "2026-08-09T17:27:17.937Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115035012.83,
		"hash": "1f61e7295d23bd5fc22594a7009ad920742932a459d4caf9ea200d2fbc7b50ea"
	},
	{
		"id": "36f5dfbb3b2e",
		"ts": "2026-08-09T17:27:18.177Z",
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
		"liquidityUsd": 17874230.95,
		"hash": "36f5dfbb3b2ef57355cf739714fa4e3cda8189893b055a608017dce40d7d5457"
	},
	{
		"id": "7d1f449e66a7",
		"ts": "2026-08-09T17:27:18.383Z",
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
		"liquidityUsd": 1045026.27,
		"hash": "7d1f449e66a73cee82b2563966140be3225530bf7246f5e8b065d12e84817fdb"
	},
	{
		"id": "f454d3c3dc64",
		"ts": "2026-08-09T17:27:18.583Z",
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
		"liquidityUsd": 26966630.59,
		"hash": "f454d3c3dc647cf817138d431f74db4f9a258aafe25784cb040d9766173b7ff2"
	},
	{
		"id": "0f0358dabea6",
		"ts": "2026-08-09T17:27:18.775Z",
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
		"liquidityUsd": 4420114.94,
		"hash": "0f0358dabea61a1eb3105d0bd8e2accb32c69dab4bb2d0dd72791b6e33b9d8b0"
	},
	{
		"id": "687d3f2c6276",
		"ts": "2026-08-09T17:27:18.983Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 951120.12,
		"hash": "687d3f2c62768650435c31d5efedb9ebd5216a25b42d20362c9a4dc8c73c82d5"
	},
	{
		"id": "249921e2be8f",
		"ts": "2026-08-09T17:27:19.174Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26966630.59,
		"hash": "249921e2be8f9d7a4e6cd5923be667ce1ab9412b1f4e991ccd72ee042c6c3c29"
	},
	{
		"id": "3f5fdd556d2d",
		"ts": "2026-08-09T17:27:19.368Z",
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
		"liquidityUsd": 4837389.27,
		"hash": "3f5fdd556d2d49a5e16ffee37c3c3831373162f760b8dba2acf3d4c1962314a4"
	},
	{
		"id": "854bf124592e",
		"ts": "2026-08-09T17:27:19.571Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 71043.71,
		"hash": "854bf124592e5b119e67a53b4dab573ed74d7068ea7ff5410841b65f355c9fb9"
	},
	{
		"id": "6be8cb4369f3",
		"ts": "2026-08-09T17:27:19.768Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4227544.77,
		"hash": "6be8cb4369f34ba4293b3cb019f4d70de487821bbbb1f73a3c0cc77ad436dd8c"
	},
	{
		"id": "345deb09e790",
		"ts": "2026-08-09T17:27:20.361Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 290927.36,
		"hash": "345deb09e790f23c7fe61990e37ca2756bff0319e5d968b045404e75a45d1cdc"
	},
	{
		"id": "32571033dde0",
		"ts": "2026-08-09T17:27:20.541Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 974489.52,
		"hash": "32571033dde0401af66d407d238122ef4bc719fb0b9f868b89696b4cc2509051"
	},
	{
		"id": "14f0217b130b",
		"ts": "2026-08-09T17:27:20.729Z",
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
		"liquidityUsd": 9471581.04,
		"hash": "14f0217b130bfba3594434b44ce46394bab4cbfd47b8ccfbd0f3d89ac0881943"
	},
	{
		"id": "d2df0a69c769",
		"ts": "2026-08-09T17:27:20.922Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 80960.39,
		"hash": "d2df0a69c769d735ae48f5aac92d0b4b407c63baac9b4f4b3c54ad1fff6be764"
	},
	{
		"id": "4839b0c195c9",
		"ts": "2026-08-09T17:27:21.109Z",
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
		"liquidityUsd": 1438461.73,
		"hash": "4839b0c195c9a0c4b0054e80b5c60a3b98e307a56e59b0b92e0a107bf5cedc1d"
	},
	{
		"id": "e6a3980f6cbc",
		"ts": "2026-08-09T17:27:21.307Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1737794.83,
		"hash": "e6a3980f6cbc7c9ae96ddc52a5e4902d4c8cc3cc561712664d3b2ea5e6a0dd3d"
	},
	{
		"id": "552f9630df76",
		"ts": "2026-08-09T17:27:21.487Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 339477.16,
		"hash": "552f9630df76eea196ee8d6b4b1a8dd0398a071693d9f13c8306e5d26841fe3e"
	},
	{
		"id": "8d6ed147172a",
		"ts": "2026-08-09T17:27:21.678Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 72480.09,
		"hash": "8d6ed147172aa648e264b0acd26f30edf8a73849e57d638efada13111a5f12eb"
	},
	{
		"id": "6a5fee78170f",
		"ts": "2026-08-09T16:29:27.574Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114973726.97,
		"hash": "6a5fee78170f28747b07b7c928ed830da20f94c88eb5c8ffdf6ffcc1f93026c8"
	},
	{
		"id": "fd5454e3b791",
		"ts": "2026-08-09T16:29:27.940Z",
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
		"liquidityUsd": 15444435.74,
		"hash": "fd5454e3b7919f4b6ddb74de77ad0d91246c41d79dcda81de904719c743ebe03"
	},
	{
		"id": "ebbe44af4176",
		"ts": "2026-08-09T16:29:28.121Z",
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
		"liquidityUsd": 1045026.27,
		"hash": "ebbe44af4176b58120346a9b8fc98d7e8bd060f44034f72d098fdfe12bd136ad"
	},
	{
		"id": "6037ae0f114b",
		"ts": "2026-08-09T16:29:28.307Z",
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
		"liquidityUsd": 26994105.89,
		"hash": "6037ae0f114beccc619ad44e088f5b9099c38a8362b6239c12724ed890e79f75"
	},
	{
		"id": "04a69204f0da",
		"ts": "2026-08-09T16:29:28.488Z",
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
		"liquidityUsd": 4429136.39,
		"hash": "04a69204f0dae235271fa53129e29d8de24308f8ce847bbb0518e76cdd03a9f5"
	},
	{
		"id": "18a7b24bc8f0",
		"ts": "2026-08-09T16:29:28.675Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 932958.47,
		"hash": "18a7b24bc8f0fee9ad602a42b62ce7b8905b57e0896c76aabbf22095e00bb445"
	},
	{
		"id": "faba0241bace",
		"ts": "2026-08-09T16:29:28.858Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26994105.89,
		"hash": "faba0241bace325d220a1756be53e75503fe9823efa1326f719937e4b965de91"
	},
	{
		"id": "6d05c5287198",
		"ts": "2026-08-09T16:29:29.043Z",
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
		"liquidityUsd": 4830150.17,
		"hash": "6d05c528719894b11d8974733d59768145507ea3c14152a67da00f1203553597"
	},
	{
		"id": "c4a1c17446db",
		"ts": "2026-08-09T16:29:29.227Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 69749.56,
		"hash": "c4a1c17446db63d56701c73f48de8816502dd988078b30bd4d8a22f95d4a3a8b"
	},
	{
		"id": "34e3aa6d065d",
		"ts": "2026-08-09T16:29:29.410Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4230755.38,
		"hash": "34e3aa6d065d1167e1ccafbdd4399604a9a06380606f5f5898033044e24ef818"
	},
	{
		"id": "82bd968c0fdf",
		"ts": "2026-08-09T16:29:29.594Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 291717.51,
		"hash": "82bd968c0fdf5e499cd52178a1acc7483fba305b71fd0bf00c12cfe73f56fc97"
	},
	{
		"id": "30f09a95270f",
		"ts": "2026-08-09T16:29:29.787Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 974249.86,
		"hash": "30f09a95270f0ef977a498bedae519986f9f3e99e1e83175003b84d8c5b6e370"
	},
	{
		"id": "42b35b8f6e75",
		"ts": "2026-08-09T16:29:29.972Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9501321.74,
		"hash": "42b35b8f6e75b80adecfe73e4c657cbd6ee53026f836a8250f3fc8b32bc5e754"
	},
	{
		"id": "90013cf09307",
		"ts": "2026-08-09T16:29:30.217Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 81361.33,
		"hash": "90013cf093075266b8b14ef5c57df596b712a61e4b28f8d3b65da0f6ed654f80"
	},
	{
		"id": "ce5fd0007c03",
		"ts": "2026-08-09T16:29:30.403Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1739002.81,
		"hash": "ce5fd0007c036ddb22af31587f1b78b68a53a1bd7c9b0f1d74505be2af4b7ba0"
	},
	{
		"id": "336d5aaa9e47",
		"ts": "2026-08-09T16:29:30.594Z",
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
		"liquidityUsd": 1432388.64,
		"hash": "336d5aaa9e473ee167f9ab9160ee5d620d5a1132f5362894c9bf23186c95ebab"
	},
	{
		"id": "20c5c87155e5",
		"ts": "2026-08-09T16:29:30.769Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 345030.67,
		"hash": "20c5c87155e525442370d2c2c1bc560a460ab0df6a013c847ac629ad48d88233"
	},
	{
		"id": "fe0ce940d209",
		"ts": "2026-08-09T16:29:30.960Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 72585.45,
		"hash": "fe0ce940d209926414f35db26daed31fe36627b3db4a78eff357289cbceb6ee9"
	},
	{
		"id": "0c8d94e87f05",
		"ts": "2026-08-09T15:26:48.520Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115175783.98,
		"hash": "0c8d94e87f0522ac8263b6e289160853fb1adfde635e5f68a881f68c399e3da4"
	},
	{
		"id": "c015c2dd8d03",
		"ts": "2026-08-09T15:26:48.762Z",
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
		"liquidityUsd": 16583517.62,
		"hash": "c015c2dd8d03c464760fccba18f81a4e5d25d57b5ba2db838e2a2d115feee650"
	},
	{
		"id": "2b75577e37d9",
		"ts": "2026-08-09T15:26:49.239Z",
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
		"liquidityUsd": 1045026.27,
		"hash": "2b75577e37d99d74e60d43eb0bea52b5db4c73ac40a5000ba0ed34dff247f06e"
	},
	{
		"id": "b725b0c402e2",
		"ts": "2026-08-09T15:26:49.427Z",
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
		"liquidityUsd": 26994686.37,
		"hash": "b725b0c402e276e33e37b769febd9ef55021b15d6eab48ebbfeb19c3dc02f674"
	},
	{
		"id": "ac46e3910575",
		"ts": "2026-08-09T15:26:49.603Z",
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
		"liquidityUsd": 4422851.34,
		"hash": "ac46e3910575f340c062c14cde11a2d3a9b493e5bc087d0058e4feca64eea416"
	},
	{
		"id": "4d6681bbf63b",
		"ts": "2026-08-09T15:26:49.815Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 928924.01,
		"hash": "4d6681bbf63b52a3088da89ffb5055638a317b88ac308ea02da05b0d9ed990a8"
	},
	{
		"id": "1cf57c93270c",
		"ts": "2026-08-09T15:26:50.000Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26994686.37,
		"hash": "1cf57c93270ce7218d2a5ea3b04366c1d3c6096a8dc61c9391e15ab0efb5c419"
	},
	{
		"id": "75edce6c4ad4",
		"ts": "2026-08-09T15:26:50.187Z",
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
		"liquidityUsd": 4843747.25,
		"hash": "75edce6c4ad43fd9c3ee4372a2be6ec345be1c7880592c7df256ada0c81bbe6e"
	},
	{
		"id": "53e18aa5e012",
		"ts": "2026-08-09T15:26:50.368Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 69570.29,
		"hash": "53e18aa5e01249a5077660d23c14a9cce3698245968cb41869413bad8e68a15e"
	},
	{
		"id": "27b50c9369f6",
		"ts": "2026-08-09T15:26:50.557Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4229864.66,
		"hash": "27b50c9369f6239b4f528708365fda175c681e308a6f450295254d6055e5a7e9"
	},
	{
		"id": "343658c9def4",
		"ts": "2026-08-09T15:26:50.750Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 294401.69,
		"hash": "343658c9def420c9a5d232c24cbef1ac3510d6774a1e80a24a480bc3c112f9fc"
	},
	{
		"id": "863aa5470f09",
		"ts": "2026-08-09T15:26:50.938Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 974790.26,
		"hash": "863aa5470f091d48febdff96271e0fdf304b7681e4582ac2e749cece2cffcecd"
	},
	{
		"id": "beae8a832e8b",
		"ts": "2026-08-09T15:26:51.133Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9417319.82,
		"hash": "beae8a832e8b34b8d78fc52c4df956271d3bd1edd92b22357f5f96817422d3c6"
	},
	{
		"id": "7cc6aec6e626",
		"ts": "2026-08-09T15:26:51.324Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 88513.36,
		"hash": "7cc6aec6e626348fea701b8ad841a07ad781b453c06d75d65401e4a6e29a67a6"
	},
	{
		"id": "ed077c2bcebd",
		"ts": "2026-08-09T15:26:51.499Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1739394.58,
		"hash": "ed077c2bcebd753062c67030ba47d17285de0ee12a392a26448fed289f28645b"
	},
	{
		"id": "60e83bc6392a",
		"ts": "2026-08-09T15:26:51.694Z",
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
		"liquidityUsd": 1450254.49,
		"hash": "60e83bc6392a6087824891750f62134be0e95e7cf47dfa7ac1d5739f9845c9b1"
	},
	{
		"id": "f238a017b87d",
		"ts": "2026-08-09T15:26:51.964Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 320161.13,
		"hash": "f238a017b87d4cc3df8e3fa94012b929628e2c15f3a318bc49b471224fc2c1e8"
	},
	{
		"id": "b4cddeef651a",
		"ts": "2026-08-09T15:26:52.221Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 72162.04,
		"hash": "b4cddeef651a7549b5b56506caca2f06bd1321de3e697052ebcb31feb12776d3"
	},
	{
		"id": "ee568d7384ad",
		"ts": "2026-08-09T14:30:29.772Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115219231.78,
		"hash": "ee568d7384ad5d51f8c984d9b5a5352fe97f169f34c1f36b04a33660353730b6"
	},
	{
		"id": "872bae616a65",
		"ts": "2026-08-09T14:30:30.077Z",
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
		"liquidityUsd": 17597210.1,
		"hash": "872bae616a65a7e71ea326500436bc2453d3fa41c242d1496c508a028a5988b7"
	},
	{
		"id": "4dc42b59e182",
		"ts": "2026-08-09T14:30:30.321Z",
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
		"liquidityUsd": 1045026.27,
		"hash": "4dc42b59e182378d7ba049c5dd8efb66de5eb93be60bb0150de04927aa181c37"
	},
	{
		"id": "a1ac2d28068b",
		"ts": "2026-08-09T14:30:30.585Z",
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
		"liquidityUsd": 26955898.53,
		"hash": "a1ac2d28068be78cc72ec5f6bf74cc142b5dc8d48e2881854adfdbc8aa3ae11c"
	},
	{
		"id": "52e684c60e18",
		"ts": "2026-08-09T14:30:30.821Z",
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
		"liquidityUsd": 4408915.56,
		"hash": "52e684c60e1844137304dddb15fc32ae44f95a3d57dd987573e7b839a546604b"
	},
	{
		"id": "43459cabc754",
		"ts": "2026-08-09T14:30:31.061Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 933073.72,
		"hash": "43459cabc754f4ee1d210597f5f3280b08b36e09a81fbc557385480703645467"
	},
	{
		"id": "b9470ef44f75",
		"ts": "2026-08-09T14:30:31.313Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26955898.53,
		"hash": "b9470ef44f756e1b00a004745020da68cb797acfd06e52e39550f415201f0442"
	},
	{
		"id": "771eba7a4a3c",
		"ts": "2026-08-09T14:30:31.551Z",
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
		"liquidityUsd": 4834671.26,
		"hash": "771eba7a4a3c195b1d308eb01bead7edd5c577691c700688d25c08bb1be14273"
	},
	{
		"id": "071592ddee55",
		"ts": "2026-08-09T14:30:31.790Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 976762.2,
		"hash": "071592ddee552567f8f57009d05124bf104b22d841aa411dfbf88dcb2d7c99f3"
	},
	{
		"id": "e0579505cfda",
		"ts": "2026-08-09T14:30:32.070Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 70067.46,
		"hash": "e0579505cfda2a52637deb0060d10a23fa6adf45b4525493c1c3ed0735831938"
	},
	{
		"id": "105411999a40",
		"ts": "2026-08-09T14:30:32.287Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4217473.57,
		"hash": "105411999a40db45815fa49d2ced5b11a0e74b6633023ff20e74f8c41cad2590"
	},
	{
		"id": "42355be1f71e",
		"ts": "2026-08-09T14:30:32.509Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9427497.8,
		"hash": "42355be1f71e54a882e0dab34d38f8a8c6e59787fb3b815b54b9d92437572f23"
	},
	{
		"id": "527edaf21d13",
		"ts": "2026-08-09T14:30:32.748Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 294272.13,
		"hash": "527edaf21d13d3293f0cf05875994368d1f78ba10f1813add9b1d26ca883f19e"
	},
	{
		"id": "07ef920485c3",
		"ts": "2026-08-09T14:30:32.965Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 67573.63,
		"hash": "07ef920485c33044705db95e05e7f675f2b76f9bcdbf221d270f4603c53f594a"
	},
	{
		"id": "444a4102fc5c",
		"ts": "2026-08-09T14:30:33.186Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1730728.32,
		"hash": "444a4102fc5c0d070d096f18b2502d93d0f3180ea24117bf1da8bff620df2254"
	},
	{
		"id": "2f579803d7b1",
		"ts": "2026-08-09T14:30:33.424Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 317663.06,
		"hash": "2f579803d7b158cb367a71e81eef298ec4f0509f2cbd0d43b1a1c7571f07624f"
	},
	{
		"id": "0f49362d2a17",
		"ts": "2026-08-09T14:30:33.639Z",
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
		"liquidityUsd": 1449819.26,
		"hash": "0f49362d2a174c4ffdd462d86ffd76d73fb4ea34ca3d916d58adf44622423db7"
	},
	{
		"id": "2f72596fa2a3",
		"ts": "2026-08-09T14:30:33.861Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1908360.05,
		"hash": "2f72596fa2a3327b266a4494001db4032b392a3debf37c85c35cbb0df7b8fae9"
	},
	{
		"id": "f6b6355d572f",
		"ts": "2026-08-09T13:45:39.463Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115229891.9,
		"hash": "f6b6355d572f9bf0c68a72d615117fcd5d3643b605e900a052c6f09a4264f785"
	},
	{
		"id": "12d60a25e770",
		"ts": "2026-08-09T13:45:39.911Z",
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
		"liquidityUsd": 15317482.53,
		"hash": "12d60a25e770b6b552cb740345c2f85707cb033a12f6e4f77c6178c154f350e9"
	},
	{
		"id": "1ec4164de532",
		"ts": "2026-08-09T13:45:40.151Z",
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
		"liquidityUsd": 1045026.27,
		"hash": "1ec4164de532fd29554daeff38766370669a6f3bed1cfa8324e5fd13b53ef34b"
	},
	{
		"id": "13c32dc4abf9",
		"ts": "2026-08-09T13:45:40.395Z",
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
		"liquidityUsd": 26958926.52,
		"hash": "13c32dc4abf9eae7a1c38c3f4678e77e6dfee458f04c902b2d1955e120c3395e"
	},
	{
		"id": "e0cbd918b92e",
		"ts": "2026-08-09T13:45:40.634Z",
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
		"liquidityUsd": 4408915.56,
		"hash": "e0cbd918b92ec03c36ae97bdcf18e03ed91fc999b11c886ee883f8ae6d9f815f"
	},
	{
		"id": "4d8e789bc03f",
		"ts": "2026-08-09T13:45:40.874Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 932091.2,
		"hash": "4d8e789bc03f7e9e17172127e72ed5f51d7241d2f607c7475435cd8148587259"
	},
	{
		"id": "c8e016a77a44",
		"ts": "2026-08-09T13:45:41.112Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26958926.38,
		"hash": "c8e016a77a4499bbec07587ebdf4fb72b198e32180bc769c4091a2f573ee4491"
	},
	{
		"id": "f77b6a1e049f",
		"ts": "2026-08-09T13:45:41.355Z",
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
		"liquidityUsd": 4831652.82,
		"hash": "f77b6a1e049fba31b0fd50347a8c9a0fc668f02c1e03d5450ef1e5fd01dc4bfe"
	},
	{
		"id": "553d5f1d22cb",
		"ts": "2026-08-09T13:45:41.593Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 976802.71,
		"hash": "553d5f1d22cb10427193a16f60859389e77b7f5bbe805b9f91dee5e995e54915"
	},
	{
		"id": "17850c646925",
		"ts": "2026-08-09T13:45:41.836Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4217755.15,
		"hash": "17850c6469251ae426fb186975811950b87b9ea4f36f60458467861a7f7185e5"
	},
	{
		"id": "75a1d57bc1ea",
		"ts": "2026-08-09T13:45:42.060Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 70463.14,
		"hash": "75a1d57bc1eae8367fa66dd97fc1e9b4a72648ccca80a45cb8afdfdf882cf0ac"
	},
	{
		"id": "d259d30c6c29",
		"ts": "2026-08-09T13:45:42.287Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9430516.6,
		"hash": "d259d30c6c29b54d283e8a6f9176a36f07bbe5d8d3058f0ce190069d7bba4dc4"
	},
	{
		"id": "cd5fe16907cf",
		"ts": "2026-08-09T13:45:42.509Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 294643.04,
		"hash": "cd5fe16907cf0214931fb28895cb49e97f87f82e623b353a6be1e19eb2e8262b"
	},
	{
		"id": "3a8aa38efa69",
		"ts": "2026-08-09T13:45:42.736Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 75149.9,
		"hash": "3a8aa38efa69bc5569c6460f553bbe9a3a425929b18c86b8b935b64baf9b72cf"
	},
	{
		"id": "7a6b21329cf6",
		"ts": "2026-08-09T13:45:42.960Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1729394.42,
		"hash": "7a6b21329cf66edd4a5d366bfa1347d481e67b915f5f2fbb1b2abd3b70c818fa"
	},
	{
		"id": "30a8d56ce481",
		"ts": "2026-08-09T13:45:43.187Z",
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
		"liquidityUsd": 1491257.51,
		"hash": "30a8d56ce481f70d6b8999fa8a1eeba852f4ab4678f0e62c5241b00671dddc3b"
	},
	{
		"id": "6e5ea5769a8f",
		"ts": "2026-08-09T13:45:43.614Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 320110.28,
		"hash": "6e5ea5769a8f0f9038e5853b2c3f595dd7e8706c2cc94f8140c93a84ca8b3a4a"
	},
	{
		"id": "e021fa58636a",
		"ts": "2026-08-09T13:45:43.841Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1904295.53,
		"hash": "e021fa58636a2cbcd1658413962d0bfc120156035a368baf7b032462dc439dc2"
	},
	{
		"id": "580cdf6ecb41",
		"ts": "2026-08-09T12:41:35.895Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115212263.09,
		"hash": "580cdf6ecb414a4b64019a6f15e8bbd83feffcd8b3f7acea0bf5751f999fdd22"
	},
	{
		"id": "122580596f13",
		"ts": "2026-08-09T12:41:36.229Z",
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
		"liquidityUsd": 18099813.31,
		"hash": "122580596f13ad50b2c4eb5bb82c3f36d69bc5458e83d8b7d888b227200756fe"
	},
	{
		"id": "7bbe58977c9f",
		"ts": "2026-08-09T12:41:36.428Z",
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
		"liquidityUsd": 1045026.27,
		"hash": "7bbe58977c9fa16f199c5d8a78a4ab41b8718f04470cb6792d2e32d9e5aa72e2"
	},
	{
		"id": "9af9fcad555f",
		"ts": "2026-08-09T12:41:36.614Z",
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
		"liquidityUsd": 26915938.66,
		"hash": "9af9fcad555fc0f0e4c8e6d0615bdb955b148073d8c446136424077529616b10"
	},
	{
		"id": "2319c1b6fe9b",
		"ts": "2026-08-09T12:41:36.805Z",
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
		"liquidityUsd": 4410363.15,
		"hash": "2319c1b6fe9b10ee8789ba97ffe9ee779260816149044e6d1355e84b056da52a"
	},
	{
		"id": "175e3f953648",
		"ts": "2026-08-09T12:41:37.000Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 930792.26,
		"hash": "175e3f9536484372ed1c0c54cf918246e768a638442910662a90e2ccc2215c0e"
	},
	{
		"id": "70a1d9bfbf2c",
		"ts": "2026-08-09T12:41:37.183Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26915938.66,
		"hash": "70a1d9bfbf2c992839137973be1f4ec4d63498edb6fa7732455dfa479d23d314"
	},
	{
		"id": "8b48e6e94524",
		"ts": "2026-08-09T12:41:37.377Z",
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
		"liquidityUsd": 4821847.36,
		"hash": "8b48e6e94524dae2b5c0972e77831ab8195a181b3667790077e136e4c92adaf3"
	},
	{
		"id": "22602e706b96",
		"ts": "2026-08-09T12:41:37.563Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4193229.16,
		"hash": "22602e706b9679f3232e96ac9a5d1d443d50c96407441ac077c4e6cb6ddd5fa6"
	},
	{
		"id": "014fa37080be",
		"ts": "2026-08-09T12:41:37.758Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 978285.04,
		"hash": "014fa37080beacdd5c1d5f3b25a47049fcc8009e1423aab91eb7730d2c522528"
	},
	{
		"id": "acf49ca4be4c",
		"ts": "2026-08-09T12:41:37.944Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 71507.97,
		"hash": "acf49ca4be4cf3265fd2d3f27d557a298c3b1f013f6bcf1e3e870e907348472c"
	},
	{
		"id": "d444582bd7f8",
		"ts": "2026-08-09T12:41:38.127Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9392054.63,
		"hash": "d444582bd7f8e8807bb44c6032aa79605b49cfda6d9563f03a257cafd98def9d"
	},
	{
		"id": "9daa21826b77",
		"ts": "2026-08-09T12:41:38.315Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 290870.9,
		"hash": "9daa21826b775edf155532fa23056c148d5d4bcd64ae0dc98905d4d5cb786d6a"
	},
	{
		"id": "2aa2a1c12c1e",
		"ts": "2026-08-09T12:41:38.499Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1903355.22,
		"hash": "2aa2a1c12c1e4bbab3f19675ad84b2262e0a16f25be360cf1731750bd815539d"
	},
	{
		"id": "9917a688adf7",
		"ts": "2026-08-09T12:41:38.686Z",
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
		"liquidityUsd": 1495801.33,
		"hash": "9917a688adf769c994fc84e63432ebb645abab8307dcc7adfaa2ada4e03f9565"
	},
	{
		"id": "96937ae02a3d",
		"ts": "2026-08-09T12:41:38.865Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1724516.16,
		"hash": "96937ae02a3dfe78632ce8e330ea8defd35b30e70afb879ed34214d05cef8851"
	},
	{
		"id": "4e536fccf802",
		"ts": "2026-08-09T12:41:39.045Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 299562.43,
		"hash": "4e536fccf802703afe7bd377100f839957037424538a855acd90686ed41f03de"
	},
	{
		"id": "798ccc1bed5e",
		"ts": "2026-08-09T12:41:39.235Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 540393.14,
		"hash": "798ccc1bed5e5c0234dc308e6eb9d41b56670ac5b812a47407c4bf1f349c6978"
	},
	{
		"id": "ff452ef62932",
		"ts": "2026-08-09T11:24:47.166Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115219466.1,
		"hash": "ff452ef629328263b3a74b02bc1ca3bb6293dcd664190eec4cebe5dfb9f3ab8b"
	},
	{
		"id": "f7914d82e654",
		"ts": "2026-08-09T11:24:47.585Z",
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
		"liquidityUsd": 17757509.65,
		"hash": "f7914d82e65457e71a20f24281c0a63bfac8d9a8e051497084fe3a8ed29b5df0"
	},
	{
		"id": "e08b75c0cf03",
		"ts": "2026-08-09T11:24:47.817Z",
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
		"liquidityUsd": 1045026.27,
		"hash": "e08b75c0cf030f34aa0d46438616d33eeb553843a27f633b77ac208fc20a0728"
	},
	{
		"id": "fef30565c9e9",
		"ts": "2026-08-09T11:24:48.062Z",
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
		"liquidityUsd": 26916833.01,
		"hash": "fef30565c9e940dbc3dfd0683ebadbb4e207046578d9da8fe20460bf2b2cbda5"
	},
	{
		"id": "1606c1f9f583",
		"ts": "2026-08-09T11:24:48.293Z",
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
		"liquidityUsd": 4420098.13,
		"hash": "1606c1f9f5834a2093948121a7b1ac5e0e89010d50aa02a97abe88db96e894c7"
	},
	{
		"id": "477ea3765fe3",
		"ts": "2026-08-09T11:24:48.523Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 931089.13,
		"hash": "477ea3765fe3b75407b592095a3b5429c7bc496291cf2b0569c1077fbe6ed31b"
	},
	{
		"id": "f6bd2ea45adc",
		"ts": "2026-08-09T11:24:48.761Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26916833.01,
		"hash": "f6bd2ea45adc59fd8e08e587ed12170c8adbd963a22cbd53a457c4b18cc44867"
	},
	{
		"id": "3def4e394757",
		"ts": "2026-08-09T11:24:48.991Z",
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
		"liquidityUsd": 4827778.12,
		"hash": "3def4e3947577c4e0769f9b994dc26436845d719a01fd2b5be0cd7554331ab62"
	},
	{
		"id": "751debbcdf79",
		"ts": "2026-08-09T11:24:49.231Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4213239.6,
		"hash": "751debbcdf79c6665b3cd6c8d268cb5889dc22d62843e552c09d570127197f28"
	},
	{
		"id": "3b8abe3407fc",
		"ts": "2026-08-09T11:24:49.459Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 979133.29,
		"hash": "3b8abe3407fc7a4c2d1c71631aa49b72d9dea10ed1da8496862dc59648dd4ad9"
	},
	{
		"id": "462263dfec96",
		"ts": "2026-08-09T11:24:49.674Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 71957.5,
		"hash": "462263dfec96fa13892515a15dba7763529348c19f0fc01d09fddaf1458f22e4"
	},
	{
		"id": "d65b8c90a6f2",
		"ts": "2026-08-09T11:24:49.890Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9423321.65,
		"hash": "d65b8c90a6f25aece25bb775b58995b21a9574c37892c2d5197d0a1639e7b856"
	},
	{
		"id": "9b3f2515b29c",
		"ts": "2026-08-09T11:24:50.106Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 290787.02,
		"hash": "9b3f2515b29c4a25f8ac579c9f533c229cbd55f07c8023c960b12544dff61b8c"
	},
	{
		"id": "4dec02efe7c8",
		"ts": "2026-08-09T11:24:50.322Z",
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
		"liquidityUsd": 1910984.2,
		"hash": "4dec02efe7c8eeb0a3c98b07fb38f6480f96c8b69d580a154f951858fdb50d77"
	},
	{
		"id": "8621068308c9",
		"ts": "2026-08-09T11:24:50.538Z",
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
		"liquidityUsd": 1497619.28,
		"hash": "8621068308c934c8f9bd80709411c8f0cdda6e674fba4d8fd09ccff5a123f6f6"
	},
	{
		"id": "3f2c49ca467f",
		"ts": "2026-08-09T11:24:50.754Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1729949.87,
		"hash": "3f2c49ca467f388f3383d007484a7dc2872931de759688da30a83fc2d4d67ef1"
	},
	{
		"id": "da2c24bd0a12",
		"ts": "2026-08-09T11:24:50.970Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 299798.66,
		"hash": "da2c24bd0a12e8d8dc84e6e373e16e3b89bfce92c43e9034f870e118f8b9ebfa"
	},
	{
		"id": "87be4f42a7c2",
		"ts": "2026-08-09T11:24:51.187Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 541278.56,
		"hash": "87be4f42a7c29605f64f9cd890aa02564999b4fa769e744d76a22bfb7f602921"
	},
	{
		"id": "058200b39123",
		"ts": "2026-08-09T10:30:05.196Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115215352.07,
		"hash": "058200b39123a57dcdf54f8fdcd86a6c7a08212d7656ab916e23836816856b63"
	},
	{
		"id": "458de95607c7",
		"ts": "2026-08-09T10:30:05.433Z",
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
		"liquidityUsd": 18134775.64,
		"hash": "458de95607c74576a6ee2187141ae60e96231ea926505d213aafe1ffe0a64e90"
	},
	{
		"id": "4c095a2e3dd2",
		"ts": "2026-08-09T10:30:05.675Z",
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
		"liquidityUsd": 1045026.27,
		"hash": "4c095a2e3dd2f9a341336d36f6d3614a0f2dbc39e532b5d31716ff3a764fc4ba"
	},
	{
		"id": "d3d085017e72",
		"ts": "2026-08-09T10:30:05.905Z",
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
		"liquidityUsd": 26918804.83,
		"hash": "d3d085017e72e4448d4937d07d4c8322f8ae8577a61a797105911f27c7629a91"
	},
	{
		"id": "87d847e9f1a1",
		"ts": "2026-08-09T10:30:06.140Z",
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
		"liquidityUsd": 4422034.87,
		"hash": "87d847e9f1a1966500003df4044fd400b299338b3ceb3a3c4235d60da8ec384b"
	},
	{
		"id": "ce9f21dd95fb",
		"ts": "2026-08-09T10:30:06.379Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 931529.09,
		"hash": "ce9f21dd95fbad8a519eaf3a4520bd2310ba0a50497496d8f122c50d375f97b1"
	},
	{
		"id": "28944ba9f95c",
		"ts": "2026-08-09T10:30:06.627Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26918804.83,
		"hash": "28944ba9f95c3b185d9ff1b1359e2a3f50605474bd02048e33355b22ec84a908"
	},
	{
		"id": "1d89519aefc0",
		"ts": "2026-08-09T10:30:06.896Z",
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
		"liquidityUsd": 4827928.93,
		"hash": "1d89519aefc064684325a0f050847d0765613aca44adae46a4957189b2874d92"
	},
	{
		"id": "372001329ccb",
		"ts": "2026-08-09T10:30:07.155Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 976784.02,
		"hash": "372001329ccb8194b4692658350500a09ed484ccb839594f027b8d086321d300"
	},
	{
		"id": "e32f0bc7305a",
		"ts": "2026-08-09T10:30:07.382Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4219780.62,
		"hash": "e32f0bc7305a045c01dc34080d261cadff603b83fdfc13f8852bcb4bf3917ddb"
	},
	{
		"id": "7e18241d8dc1",
		"ts": "2026-08-09T10:30:07.593Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 71404.35,
		"hash": "7e18241d8dc1b3199b6ea36926740e1f4eab886f4dc402218752caf6fc6f41c7"
	},
	{
		"id": "f4298a80b46b",
		"ts": "2026-08-09T10:30:07.802Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9292612.9,
		"hash": "f4298a80b46b5bcb2cfb0bdb92d3a56ca57d5f54de76b9b482ccaeeb1bc60e99"
	},
	{
		"id": "dbb36701914f",
		"ts": "2026-08-09T10:30:08.016Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 292805.75,
		"hash": "dbb36701914f9e39df65e50709aaf00dbe58d05eb32da65d77dcfd773653c3a3"
	},
	{
		"id": "b798e06df52f",
		"ts": "2026-08-09T10:30:08.229Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 81128.43,
		"hash": "b798e06df52f27129d5ff612b06e6a4820f7a755c54da8c822cab5aa37ec4ac2"
	},
	{
		"id": "4ccb2cd941e3",
		"ts": "2026-08-09T10:30:08.438Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1910790.9,
		"hash": "4ccb2cd941e31efddb61f2b64bc9f59e1df6aa65b250bf421b26f22a45570dec"
	},
	{
		"id": "e52b696e4ccf",
		"ts": "2026-08-09T10:30:08.646Z",
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
		"liquidityUsd": 1497324.72,
		"hash": "e52b696e4ccf0bdb5cd6cb53d5f47289f11c4e2657259ac9b67fff73ea301dbc"
	},
	{
		"id": "dbe1a5584b8c",
		"ts": "2026-08-09T10:30:08.861Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 300106.26,
		"hash": "dbe1a5584b8c4908928a8cba2bb2868d7fefa6a20985b47b5c2f5be3f388567a"
	},
	{
		"id": "039020ea0a07",
		"ts": "2026-08-09T09:35:09.622Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115227848.19,
		"hash": "039020ea0a0782a915884e067631d9267cf10b71f01f5aeb61ec6d3235bcad04"
	},
	{
		"id": "36ef32cfc99e",
		"ts": "2026-08-09T09:35:09.862Z",
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
		"liquidityUsd": 18239773.36,
		"hash": "36ef32cfc99eba0cd93368edb4d8b7785c94d324cf4006b806312c31e651483c"
	},
	{
		"id": "21ddcfc1a6da",
		"ts": "2026-08-09T09:35:10.092Z",
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
		"liquidityUsd": 1044764.45,
		"hash": "21ddcfc1a6da62e7b47e44a3c2cf7505baf8eebb6669c9629375cec9e279cd70"
	},
	{
		"id": "ecb622763b4b",
		"ts": "2026-08-09T09:35:10.334Z",
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
		"liquidityUsd": 26940713.79,
		"hash": "ecb622763b4b3e051cb8534913e8be1e570b66ffb52b0b283d9dce2d51938f83"
	},
	{
		"id": "ad9651c69dfb",
		"ts": "2026-08-09T09:35:10.560Z",
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
		"liquidityUsd": 4413898.93,
		"hash": "ad9651c69dfb7e9504e867b54d03dbf892c608df059be41aff64638583c49e87"
	},
	{
		"id": "cf24f3a3de70",
		"ts": "2026-08-09T09:35:10.800Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 930656.63,
		"hash": "cf24f3a3de708923d29cc0bb37c385ff4fce030c6f2ab48b10cd549a97dce285"
	},
	{
		"id": "b52baad238a3",
		"ts": "2026-08-09T09:35:11.026Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26940713.79,
		"hash": "b52baad238a3a1fbd08ff842f0a8fed36c745b28918e80be23e1323e312a305a"
	},
	{
		"id": "f14d2bd2d192",
		"ts": "2026-08-09T09:35:11.265Z",
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
		"liquidityUsd": 4812067.85,
		"hash": "f14d2bd2d1925476b2f0502321ce8b0b521bebebd0b4c8bb6a03491ce433cedc"
	},
	{
		"id": "525d81c917e5",
		"ts": "2026-08-09T09:35:11.493Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 971846.09,
		"hash": "525d81c917e5a81298094afdc959b5f45d4bfc05e7d3e376d8ffbcbf2b772a99"
	},
	{
		"id": "4328719b5570",
		"ts": "2026-08-09T09:35:11.731Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4242612.07,
		"hash": "4328719b5570e1fc200e509b154ec6f39b2dd05c89030c618901283754f8adb0"
	},
	{
		"id": "99c28453a80f",
		"ts": "2026-08-09T09:35:11.955Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 68475.26,
		"hash": "99c28453a80f4ad4ef86d6bb28a4159f8505ca6d6cf2749b07e1b7be6b837fb7"
	},
	{
		"id": "a04b07882eec",
		"ts": "2026-08-09T09:35:12.170Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9249497.16,
		"hash": "a04b07882eec35be4edde150b7c0cfa59910f4f4083e9438335534017d6b150c"
	},
	{
		"id": "1806f9a1e316",
		"ts": "2026-08-09T09:35:12.455Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 293289.61,
		"hash": "1806f9a1e3165f2a31ed4ab691fd412c8debaa1f2e8faa1051ed7dc7bb5ef3a3"
	},
	{
		"id": "37181497b04d",
		"ts": "2026-08-09T09:35:12.693Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1908481.66,
		"hash": "37181497b04dbc6f8c86b06eb5dc6ad76983b013e23fe392477eb84fc1b0abf2"
	},
	{
		"id": "0fdf14fe84fd",
		"ts": "2026-08-09T09:35:12.917Z",
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
		"liquidityUsd": 1497608.28,
		"hash": "0fdf14fe84fd66c042137ea1677ce96fae6d6e66686588aded4ec0bd0114e5ca"
	},
	{
		"id": "41f1a41687ff",
		"ts": "2026-08-09T09:35:13.132Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 299954.82,
		"hash": "41f1a41687ffd14bde83611d7b25a886fcd5137c7b5645d61e069bb93564861c"
	},
	{
		"id": "696206f078dd",
		"ts": "2026-08-09T08:37:24.237Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115224263.51,
		"hash": "696206f078dda5d1dd4e124fd0cae7852db819fbf8f7e4e271583b6e65d4e506"
	},
	{
		"id": "7ee26bd49e8c",
		"ts": "2026-08-09T08:37:24.487Z",
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
		"liquidityUsd": 17423874.61,
		"hash": "7ee26bd49e8c42629344a5d93945b93bc0f61fcc6eea6f2c7a1f1b0087e04a0c"
	},
	{
		"id": "3e0c1a14e1b8",
		"ts": "2026-08-09T08:37:24.904Z",
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
		"liquidityUsd": 1044764.45,
		"hash": "3e0c1a14e1b8ea840fe839bb5be319cf95c4ad294bf4b6d7b2acceaf3e75fb47"
	},
	{
		"id": "a45ba2abe86d",
		"ts": "2026-08-09T08:37:25.132Z",
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
		"liquidityUsd": 27190784.19,
		"hash": "a45ba2abe86d1f56f67a56650d44a81684fa0f31f0b93228377ba0dfdefa79f6"
	},
	{
		"id": "d78a1551e3fa",
		"ts": "2026-08-09T08:37:25.371Z",
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
		"liquidityUsd": 4431463.11,
		"hash": "d78a1551e3fab2970d7871a79f3eb01c9608ec03cc6550df716e1bf68bb00726"
	},
	{
		"id": "8cdd5c34fe94",
		"ts": "2026-08-09T08:37:25.598Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 927088.22,
		"hash": "8cdd5c34fe941d2ff555a151a72fc63923823e1be400c83ef846253956625388"
	},
	{
		"id": "1ca062a52e45",
		"ts": "2026-08-09T08:37:25.823Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27190784.19,
		"hash": "1ca062a52e4583b7f32b0d2649d11edb7dd76acfc025a954e3a8693715c8c31c"
	},
	{
		"id": "fe9bc83a26c1",
		"ts": "2026-08-09T08:37:26.062Z",
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
		"liquidityUsd": 4829963.12,
		"hash": "fe9bc83a26c1ea16f4d7c8ca65dea6694cd2b4428837029524e45e9b2abc9134"
	},
	{
		"id": "3406366d99c9",
		"ts": "2026-08-09T08:37:26.288Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 981511.64,
		"hash": "3406366d99c9d0e88d2545abcc559444ac6ccc4406e2c18a39e73692749fa130"
	},
	{
		"id": "2124bd96a55a",
		"ts": "2026-08-09T08:37:26.518Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4264193.35,
		"hash": "2124bd96a55a3e2c7918c66dc22de261c6b685a609b4798ce6426f91477cd44c"
	},
	{
		"id": "98977cd454a5",
		"ts": "2026-08-09T08:37:26.744Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 68366.39,
		"hash": "98977cd454a59977ed386db7b1da8199d14529f230802456ae4dd91dd55ea0dd"
	},
	{
		"id": "450864111b27",
		"ts": "2026-08-09T08:37:26.954Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9282169.34,
		"hash": "450864111b27b26af9eeebab40b0ca3d8b5c88c981a47c94fbfff970c8e89014"
	},
	{
		"id": "987128cfe1c8",
		"ts": "2026-08-09T08:37:27.166Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 292927.01,
		"hash": "987128cfe1c83fa1aa4cc1029d76b96ce0b50245cefc590c928fc2d8cf8b3918"
	},
	{
		"id": "23a6c9927b7f",
		"ts": "2026-08-09T08:37:27.390Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1911268.11,
		"hash": "23a6c9927b7f0c57ed1b13add403896f559c976b60166f57c99c51b4a024d45c"
	},
	{
		"id": "539d66db2a2d",
		"ts": "2026-08-09T08:37:27.603Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 301212.76,
		"hash": "539d66db2a2d53a533bb17501daf3eb0ec3e55cac74745119f1b92c7aa68c23c"
	},
	{
		"id": "ec7d21dbf40f",
		"ts": "2026-08-09T08:37:27.826Z",
		"symbol": "AURA",
		"token": "0xdCaA5E062b2be18E52eA6ED7ba232538621dDC10",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 48451.81,
		"hash": "ec7d21dbf40f219949f722f6df54c7977464b19317275d4c292325cbd783ffdc"
	},
	{
		"id": "ca7d9c4cc10a",
		"ts": "2026-08-09T08:37:28.037Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 536775.17,
		"hash": "ca7d9c4cc10a8ceb0dffdd7d3170edab317d3395489c300e326ca6a42eab5603"
	},
	{
		"id": "e2b124b2c28a",
		"ts": "2026-08-09T08:37:28.260Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 73388.37,
		"hash": "e2b124b2c28aa80179b29da9d1370954c3d8fd5a4336829ab24efd11dbf8750f"
	},
	{
		"id": "37abe430231d",
		"ts": "2026-08-09T07:51:09.255Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115156784.99,
		"hash": "37abe430231deab839728eddd35a0483544e8463d5008697b98474952b401564"
	},
	{
		"id": "5a2e3ccefd91",
		"ts": "2026-08-09T07:51:09.482Z",
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
		"liquidityUsd": 17359020.92,
		"hash": "5a2e3ccefd91ccb6b799ad5b20ce6de3baeb85df2dc341f4dbdd6c4a04ebc190"
	},
	{
		"id": "64f144814397",
		"ts": "2026-08-09T07:51:09.689Z",
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
		"liquidityUsd": 1044764.45,
		"hash": "64f14481439786fa734ea08797727c747f3df4572ab5f75f93333e0ab08b91c2"
	},
	{
		"id": "fdf5aab21230",
		"ts": "2026-08-09T07:51:09.892Z",
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
		"liquidityUsd": 27190924.14,
		"hash": "fdf5aab21230d4937b840f07ee775fcc446968c69c1b06161b3c68a986c60952"
	},
	{
		"id": "950d9b5d43e0",
		"ts": "2026-08-09T07:51:10.107Z",
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
		"liquidityUsd": 4422553.91,
		"hash": "950d9b5d43e069dc212d571894b6e078587e35120f6fca783ac8dbfbc17ed7b7"
	},
	{
		"id": "58e6c16cf62c",
		"ts": "2026-08-09T07:51:10.316Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 927147.72,
		"hash": "58e6c16cf62cbae2f187be7aed0ceaba6f088127a2675e789279540df3929354"
	},
	{
		"id": "5734624c7c47",
		"ts": "2026-08-09T07:51:10.523Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27190924.14,
		"hash": "5734624c7c4733b0aa63cf85d67b278feb7c13de40e1ddc69ef3e4239b422734"
	},
	{
		"id": "a5409e60709a",
		"ts": "2026-08-09T07:51:10.734Z",
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
		"liquidityUsd": 4820838.25,
		"hash": "a5409e60709a1501d22f0b668534d7e5d5d31d0d5ed995520711a9643e619056"
	},
	{
		"id": "59ab5ee0227d",
		"ts": "2026-08-09T07:51:10.953Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4257680.94,
		"hash": "59ab5ee0227d30cee5eba7e5774f4d3e13be5a71c78da099bb79e52b4a9f7e13"
	},
	{
		"id": "d50a51199b2d",
		"ts": "2026-08-09T07:51:11.151Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 986805.28,
		"hash": "d50a51199b2ddb039e3e257d8c024e4aecc153b7fb6caa6ad0a766eeae7dd29d"
	},
	{
		"id": "b1539fdad20c",
		"ts": "2026-08-09T07:51:11.341Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 67665.96,
		"hash": "b1539fdad20c73de988db63cc5b0ce24e6edbe99e80707f339bcda36d8ce0456"
	},
	{
		"id": "9cd30106ef88",
		"ts": "2026-08-09T07:51:11.525Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9260497.67,
		"hash": "9cd30106ef886aa07c2c870c92c49de0ee3828fe803d40dd2009ed1594052c3d"
	},
	{
		"id": "895dbe10f76e",
		"ts": "2026-08-09T07:51:11.716Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 290610.58,
		"hash": "895dbe10f76eda2ac5932076074968915a239e4330c931ed270754660a40f5f0"
	},
	{
		"id": "0af055699fb5",
		"ts": "2026-08-09T07:51:11.899Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 300700.09,
		"hash": "0af055699fb52c73ca1039f5d4acb3abe3235883e6986462b6c637afded8299d"
	},
	{
		"id": "ef8a1f2f4025",
		"ts": "2026-08-09T07:51:12.090Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1912038.47,
		"hash": "ef8a1f2f40257685b51f4953eefce1777265675ff59617244ab77b0df18e48dd"
	},
	{
		"id": "4799be890957",
		"ts": "2026-08-09T07:51:12.289Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 535201.4,
		"hash": "4799be8909574809a37776e1c8a2e8476feefc6ed12440d87a9ef6de187c2155"
	},
	{
		"id": "1ec01faa98d1",
		"ts": "2026-08-09T07:51:12.542Z",
		"symbol": "AURA",
		"token": "0xdCaA5E062b2be18E52eA6ED7ba232538621dDC10",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 48451.71,
		"hash": "1ec01faa98d1d3b660ae75a3a214f10fa57de8e1e2d838940b48de82402e5a75"
	},
	{
		"id": "041ed9c5a829",
		"ts": "2026-08-09T07:51:12.723Z",
		"symbol": "OpenAI",
		"token": "0x6B458b475695121b78b7ef8Fa88a73973c6bCb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4340826.34,
		"hash": "041ed9c5a8290835ada28f04237b389981075a66ce5fa281566718571f6ef9ea"
	},
	{
		"id": "284a5231f97d",
		"ts": "2026-08-09T06:49:59.757Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115128123.61,
		"hash": "284a5231f97d2bde6d0cae3aa1e6102a228541e152b0689730fda85e43212bc4"
	},
	{
		"id": "cfa2ce68e723",
		"ts": "2026-08-09T06:50:00.188Z",
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
		"liquidityUsd": 15117458.04,
		"hash": "cfa2ce68e723e84b894e6526ffa2edc0736ef0097292bed26da26ac57b1ab045"
	},
	{
		"id": "b0704b7d34b0",
		"ts": "2026-08-09T06:50:00.425Z",
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
		"liquidityUsd": 1045945.06,
		"hash": "b0704b7d34b0b804f6e47c3e4b0f103409bea2ef6ee4acc5f9c4b49a1c0e25ee"
	},
	{
		"id": "09e51bea35d2",
		"ts": "2026-08-09T06:50:00.658Z",
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
		"liquidityUsd": 27196932.91,
		"hash": "09e51bea35d2e4c3c7fe09c4cd520f4bb711d0f325532b47fe765a80c7b07278"
	},
	{
		"id": "09b4db1032b1",
		"ts": "2026-08-09T06:50:00.889Z",
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
		"liquidityUsd": 4410310.12,
		"hash": "09b4db1032b1a2635512c37b94478d94bb20354e1d529906aff77b9a21119d65"
	}
]
