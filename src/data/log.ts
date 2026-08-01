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
	"updatedAt": "2026-08-01T17:57:08.001Z",
	"tokensScored": 6765,
	"verdictsIssued": 6765,
	"safe": 5909,
	"risky": 524,
	"likelyRug": 332,
	"ticks": 413
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "1f0b6a3ffff0",
		"ts": "2026-08-01T17:57:03.825Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111753100.5,
		"hash": "1f0b6a3ffff008fb003b0c519e32206be801281e50dd86de42eaab13d38db449"
	},
	{
		"id": "dfdb08670175",
		"ts": "2026-08-01T17:57:04.118Z",
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
		"liquidityUsd": 18153448.67,
		"hash": "dfdb08670175a64188d98631e9463d88852c0c979dead646b934d2067a47290b"
	},
	{
		"id": "1b7c47339825",
		"ts": "2026-08-01T17:57:04.412Z",
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
		"liquidityUsd": 1120441.74,
		"hash": "1b7c4733982537c272a81aed11b54086c015a642c2ef7926259568cdd20d435d"
	},
	{
		"id": "1da1df8fd31c",
		"ts": "2026-08-01T17:57:04.669Z",
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
		"liquidityUsd": 25218763.24,
		"hash": "1da1df8fd31c855bc60f8e1a2e61cb9d642ae4ffbfe90525cef770b1cd54beda"
	},
	{
		"id": "1f128686c31a",
		"ts": "2026-08-01T17:57:04.934Z",
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
		"liquidityUsd": 4350159.08,
		"hash": "1f128686c31a8b794f45fd27752bb6c427ad6b309d4c2ae6a7ca8d38294336e8"
	},
	{
		"id": "dae12281c5e1",
		"ts": "2026-08-01T17:57:05.364Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 905335.96,
		"hash": "dae12281c5e1288000fd59342c3cc1c204cec3a0175a50d20b11973b7e928ebb"
	},
	{
		"id": "04aacc131d17",
		"ts": "2026-08-01T17:57:05.723Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25218763.24,
		"hash": "04aacc131d172e073b7b55bad72f2357034c14bc678a7db334be33e818657c38"
	},
	{
		"id": "5515cadec219",
		"ts": "2026-08-01T17:57:05.963Z",
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
		"liquidityUsd": 4199506.35,
		"hash": "5515cadec21948a8f1a14c2c45f3994e4ed21ed2ba8bb2927aabff7d82877848"
	},
	{
		"id": "176b7d39d746",
		"ts": "2026-08-01T17:57:06.210Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 489417.51,
		"hash": "176b7d39d74639c95af5cb76db4e2c50445d0c976b385dbe21d1ae2922144790"
	},
	{
		"id": "4eb067e1ae3a",
		"ts": "2026-08-01T17:57:06.473Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1832141.42,
		"hash": "4eb067e1ae3a32376d733b0cd750ac2b21c4772c64a6805455ccdbbd3622f253"
	},
	{
		"id": "9744e8574ba4",
		"ts": "2026-08-01T17:57:06.691Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1071027.75,
		"hash": "9744e8574ba40814bc88f2a33bb111470f120169e9529f6e2e127467b82201c4"
	},
	{
		"id": "a8172f94e34f",
		"ts": "2026-08-01T17:57:06.909Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9414595.34,
		"hash": "a8172f94e34fa836a6396d2eb33dfad5f7e854a240681c71e84542b4b5f99b03"
	},
	{
		"id": "047af0a63402",
		"ts": "2026-08-01T17:57:07.129Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4295374.38,
		"hash": "047af0a63402b33d33259245f541d45ae47d18cbb668110f19d1be2f60d0b0f5"
	},
	{
		"id": "8525827b99ec",
		"ts": "2026-08-01T17:57:07.348Z",
		"symbol": "OMI",
		"token": "0x3792DBDD07e87413247DF995e692806aa13D3299",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 250020.45,
		"hash": "8525827b99ecd2d6c8c2164fba7c137bdcb286219ab31194537be6f042e01597"
	},
	{
		"id": "efec297c2e4b",
		"ts": "2026-08-01T17:57:07.565Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1737794.19,
		"hash": "efec297c2e4bf53e42733fb0fed6a5d80846b073310cf57f4ea499880f0b2327"
	},
	{
		"id": "ecc245b253ac",
		"ts": "2026-08-01T17:57:07.783Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 741814.02,
		"hash": "ecc245b253acff562d93f7f321952df7b58d28c9cfe749a0f1694acf3d06c62d"
	},
	{
		"id": "20e5fdbaae9d",
		"ts": "2026-08-01T17:57:08.000Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 144960.74,
		"hash": "20e5fdbaae9db0188ffc62cf7b9fdcad3fc80872900afa7855f3ecb0e1f5bb48"
	},
	{
		"id": "7770608de352",
		"ts": "2026-08-01T16:01:21.862Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111978247.82,
		"hash": "7770608de35206d25ba89ff19528d11afce9164144dcf4ad941565c492ff7ff4"
	},
	{
		"id": "d7480b10070f",
		"ts": "2026-08-01T16:01:40.540Z",
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
		"liquidityUsd": 14123067.01,
		"hash": "d7480b10070f3c90b0a1346a031423f62a2ff64e97e9064c48c19411c63cc943"
	},
	{
		"id": "6ef74f54d839",
		"ts": "2026-08-01T16:01:59.281Z",
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
		"liquidityUsd": 1123451.29,
		"hash": "6ef74f54d839539f032f402c29d7f2bf65246a8e579f92c226e655289ae1ea5c"
	},
	{
		"id": "98f7178bf3d7",
		"ts": "2026-08-01T16:02:18.038Z",
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
		"liquidityUsd": 25318519.95,
		"hash": "98f7178bf3d7feac6260f63584650f3aa60523f6cbac11d3464e763657e1ad24"
	},
	{
		"id": "aa4e11338227",
		"ts": "2026-08-01T16:02:18.338Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 37,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.26,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 4353885.53,
		"hash": "aa4e11338227dc3d4c11b58f6953c08a6f2e942988e620958c2200e41122664b"
	},
	{
		"id": "c362d97b0004",
		"ts": "2026-08-01T16:02:18.598Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 903076.65,
		"hash": "c362d97b0004803ed5cf67c02a9a30b7d3cdbd9e3c9dc239b7b661d129b3ee4f"
	},
	{
		"id": "55ee88ba99e4",
		"ts": "2026-08-01T16:02:18.844Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25318519.95,
		"hash": "55ee88ba99e44298997928caded15625dfb7ffec9287adfe585ec77bf1d4de06"
	},
	{
		"id": "2f4cb055e04f",
		"ts": "2026-08-01T16:02:19.141Z",
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
		"liquidityUsd": 4218288.46,
		"hash": "2f4cb055e04f3ae88a008fdb4a2b3b1e4057ab5f853521fc68d2407b40285c26"
	},
	{
		"id": "3c6bf94e5eb2",
		"ts": "2026-08-01T16:02:19.402Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 492894.37,
		"hash": "3c6bf94e5eb2bdd2b4332a1c6a62310c1df0ddbfc3e8708697a2b9b43b11eb60"
	},
	{
		"id": "f5d5a2055afa",
		"ts": "2026-08-01T16:02:19.649Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1827251.47,
		"hash": "f5d5a2055afa3741709da50a8718ac1a895068d4bb07795a419ec34ef2d26c24"
	},
	{
		"id": "2a51cfd08419",
		"ts": "2026-08-01T16:02:19.910Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1082531.08,
		"hash": "2a51cfd08419d4dd756de6385632408d7937cc8952eddcd64d0aa86d45485c56"
	},
	{
		"id": "8e18859ed690",
		"ts": "2026-08-01T16:02:20.183Z",
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
		"liquidityUsd": 9403391.98,
		"hash": "8e18859ed690cb50b5f45bd70082417a3826382154cce6ee4e796efdb004ad22"
	},
	{
		"id": "4fd43a32d89f",
		"ts": "2026-08-01T16:02:20.432Z",
		"symbol": "OMI",
		"token": "0x3792DBDD07e87413247DF995e692806aa13D3299",
		"score": 62,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.24,
		"flags": [
			"owner_can_change_balance",
			"mintable",
			"owner_not_renounced"
		],
		"liquidityUsd": 252122.65,
		"hash": "4fd43a32d89f071bbbecab5fbfd00d95c808d1603e17fd1b2733ed31c401158d"
	},
	{
		"id": "36c3df26dce8",
		"ts": "2026-08-01T16:02:20.706Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1743229.47,
		"hash": "36c3df26dce844157abd8e6ec4f05e605dc9f256113c87f6c27d4d39bf2b7a92"
	},
	{
		"id": "989a511cbc43",
		"ts": "2026-08-01T16:02:20.941Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4776567.25,
		"hash": "989a511cbc43da41b962c9d5d20c0dd727d3de20bec159d9521bf8dc3f6fb6e0"
	},
	{
		"id": "17f64a28d153",
		"ts": "2026-08-01T16:02:21.184Z",
		"symbol": "CLANKER",
		"token": "0x1bc0c42215582d5A085795f4baDbaC3ff36d1Bcb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1402042.5,
		"hash": "17f64a28d153b2e8262433a263c458f00593f6bfaaa972bbccc9641cf288bbbb"
	},
	{
		"id": "6dce49c9fabc",
		"ts": "2026-08-01T16:02:21.431Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4397650.5,
		"hash": "6dce49c9fabc0b8675f63dde526c4f0334b59d16d905c69b28e5644d1cd7f9a9"
	},
	{
		"id": "3b6bdc28f6f3",
		"ts": "2026-08-01T14:57:08.837Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111946291.14,
		"hash": "3b6bdc28f6f35ebcc8051017b8f5d34576c1219c957c8a7bc63ef0a3b986a8ff"
	},
	{
		"id": "b105bed881d3",
		"ts": "2026-08-01T14:57:09.087Z",
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
		"liquidityUsd": 16220414.47,
		"hash": "b105bed881d39a5323b6b69aa7f8f4ae3d6978ecdaef0f66f0f2b373b6b999c6"
	},
	{
		"id": "a6215cb1f699",
		"ts": "2026-08-01T14:57:09.338Z",
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
		"liquidityUsd": 1125962.8,
		"hash": "a6215cb1f699d24611c6469dd3d211e938187819f6928d3f911de1b31de57d0d"
	},
	{
		"id": "f13b3574e249",
		"ts": "2026-08-01T14:57:09.580Z",
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
		"liquidityUsd": 25324770.44,
		"hash": "f13b3574e2490d671d3ff34f1fd21532f40a906b4bb959afb5986d433e8d3f56"
	},
	{
		"id": "396d8d5ed1dd",
		"ts": "2026-08-01T14:57:09.829Z",
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
		"liquidityUsd": 4353885.53,
		"hash": "396d8d5ed1dd2b81e09deede03e60e8c33025854a92dd294293618efe22fcafa"
	},
	{
		"id": "4a32d8a8246c",
		"ts": "2026-08-01T14:57:10.082Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 904147.91,
		"hash": "4a32d8a8246c027a32ecc777fbc3b8430fe8d55c229848a2bf3bb06165e28ac1"
	},
	{
		"id": "02fc9fe81538",
		"ts": "2026-08-01T14:57:10.329Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25324770.44,
		"hash": "02fc9fe81538280270df540a18ab2402b93922d788d48b6ef8a726fa3ded9ac2"
	},
	{
		"id": "8e4e2e46233d",
		"ts": "2026-08-01T14:57:10.612Z",
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
		"liquidityUsd": 4221783.34,
		"hash": "8e4e2e46233d9a501e20d45410daa6440fcf2cea13c8ddaad2ca0d0e9b24422c"
	},
	{
		"id": "87cca675a320",
		"ts": "2026-08-01T14:57:10.855Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 508261.98,
		"hash": "87cca675a320d62f015a8c592f6e4e908299af5ec8e78975354c53a3b9c24269"
	},
	{
		"id": "970ef5fddd20",
		"ts": "2026-08-01T14:57:11.097Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1832605.13,
		"hash": "970ef5fddd20fcecda71bbc5da09641ec9eebf87336b293716789577b7447eea"
	},
	{
		"id": "0a0d8dffa11a",
		"ts": "2026-08-01T14:57:11.325Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1082707.91,
		"hash": "0a0d8dffa11a05591af5707fc7b97dcbc8583b69a3a1bd2220969d25d8da5c17"
	},
	{
		"id": "81edb3847c14",
		"ts": "2026-08-01T14:57:11.550Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1740779.02,
		"hash": "81edb3847c147f736198fe0816f93432ad2daa9391de028bf31a9f668009b4b3"
	},
	{
		"id": "961d182f77e7",
		"ts": "2026-08-01T14:57:11.777Z",
		"symbol": "OMI",
		"token": "0x3792DBDD07e87413247DF995e692806aa13D3299",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 254497.79,
		"hash": "961d182f77e73447f62b3b6046e191b04f5a4f91eeadc8d143c17d2617806f85"
	},
	{
		"id": "495c0a5dce18",
		"ts": "2026-08-01T14:57:12.004Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4782352.05,
		"hash": "495c0a5dce1871ad3be43151cc4284bfa7f700601f38c2fc4ee51bc61422c4e4"
	},
	{
		"id": "16161a47572e",
		"ts": "2026-08-01T14:57:12.233Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4392132.63,
		"hash": "16161a47572e0b86e395ffd190544350aa9d295ffbf4ebb5a7f4b82ad4b3c7b8"
	},
	{
		"id": "ebbebd6d2e84",
		"ts": "2026-08-01T13:10:51.318Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111907781.22,
		"hash": "ebbebd6d2e84bc4adbb713ea04e82060ef29131a22727156f780fe60140ae455"
	},
	{
		"id": "0a7b71c4d1f6",
		"ts": "2026-08-01T13:10:51.636Z",
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
		"liquidityUsd": 17017071.31,
		"hash": "0a7b71c4d1f6032f163d671ef968dd586e664ede2fce262b738cbb3faf09ecee"
	},
	{
		"id": "ce5f1c4a8f2a",
		"ts": "2026-08-01T13:10:52.110Z",
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
		"liquidityUsd": 1123128.21,
		"hash": "ce5f1c4a8f2ae8fef59d2b59c731cc1bff65b53a0c8e88747bfb44cacf239e07"
	},
	{
		"id": "5b92133f6d61",
		"ts": "2026-08-01T13:10:52.338Z",
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
		"liquidityUsd": 25386399.16,
		"hash": "5b92133f6d61b0ffcaf3ee151f097e4d237c400bb9a6350e120e56754330fbd2"
	},
	{
		"id": "0f7ae5cfcecb",
		"ts": "2026-08-01T13:10:52.566Z",
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
		"liquidityUsd": 4381180.18,
		"hash": "0f7ae5cfcecb9da5d00f0dd5b586a7ac9c3881d0d537660d12da1c720176e2c3"
	},
	{
		"id": "a1865d091a20",
		"ts": "2026-08-01T13:10:52.858Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 902874.48,
		"hash": "a1865d091a20b9a52fccc91d257c21629bdd40a5f399657374f88de5bd6a498d"
	},
	{
		"id": "d69fe1b4da1c",
		"ts": "2026-08-01T13:10:53.083Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25386399.16,
		"hash": "d69fe1b4da1c2cf4668501bf6e05b25efb8d0afedc605486a138d5b4fea58eb9"
	},
	{
		"id": "e127b8c39348",
		"ts": "2026-08-01T13:10:53.314Z",
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
		"liquidityUsd": 4066853.89,
		"hash": "e127b8c39348f82db8d0c06bdd14623f75b2e0769f1757d620fbedeca1823e5c"
	},
	{
		"id": "38f037ced20e",
		"ts": "2026-08-01T13:10:53.548Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 514549.66,
		"hash": "38f037ced20ed054cdc10eaccd1a2b992a012211e8890f84508aeb737a4aa9dc"
	},
	{
		"id": "35bce0aac2a6",
		"ts": "2026-08-01T13:10:53.795Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1840409.17,
		"hash": "35bce0aac2a6e8eeb28ac12064853a63671757166c804013e713e463583c9f96"
	},
	{
		"id": "d35daedf11ff",
		"ts": "2026-08-01T13:10:54.009Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1073465.66,
		"hash": "d35daedf11ff345df9c83841548d35e580eb460b67e6b656a0e7f65e844dd945"
	},
	{
		"id": "191d939d2d8a",
		"ts": "2026-08-01T13:10:54.227Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1738535.16,
		"hash": "191d939d2d8afb0737ed7d7c661afa3aea5d98c8f178d937fa7a283e8b312bde"
	},
	{
		"id": "3d553c147850",
		"ts": "2026-08-01T13:10:54.441Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4384676.42,
		"hash": "3d553c1478509f637f9ac64a5e1500cc37c8d365a7457f830c734a9f06fe457d"
	},
	{
		"id": "4e36509ad85b",
		"ts": "2026-08-01T13:10:54.659Z",
		"symbol": "CLANKER",
		"token": "0x1bc0c42215582d5A085795f4baDbaC3ff36d1Bcb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1397575.82,
		"hash": "4e36509ad85b5d7ac9ac937d18234f53108ecd82a36f7a8b8d42cd300d6f5593"
	},
	{
		"id": "abaf07226395",
		"ts": "2026-08-01T13:10:54.873Z",
		"symbol": "OMI",
		"token": "0x3792DBDD07e87413247DF995e692806aa13D3299",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 260890.62,
		"hash": "abaf07226395136b12675ac7d7755353ebed1ca5160c2a579c80998ffd6af9f8"
	},
	{
		"id": "015cdc9514c7",
		"ts": "2026-08-01T11:13:31.224Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111873707.64,
		"hash": "015cdc9514c7ced7d0cac6c90ed369179cc1ff71137f8ec8c7f03828d01b5560"
	},
	{
		"id": "8727e60f1fdb",
		"ts": "2026-08-01T11:13:31.712Z",
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
		"liquidityUsd": 16996042.05,
		"hash": "8727e60f1fdb7933cfb7b5fd49f425e350180a17875aa2dc568e8cd2339a9248"
	},
	{
		"id": "deeb796b6ee0",
		"ts": "2026-08-01T11:13:31.978Z",
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
		"liquidityUsd": 1130927.79,
		"hash": "deeb796b6ee0cb6ccf67af1ceea522c4bbaad9fc295220b6d1084e8b1bde6b79"
	},
	{
		"id": "f8d4ccf05aa5",
		"ts": "2026-08-01T11:13:32.320Z",
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
		"liquidityUsd": 25457529.18,
		"hash": "f8d4ccf05aa5512918876f3fd32e67439f5e2df2de692baaa20fbf7b456ff596"
	},
	{
		"id": "21ac9462bedd",
		"ts": "2026-08-01T11:13:32.580Z",
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
		"liquidityUsd": 4381508.59,
		"hash": "21ac9462bedd5631b6e96f2a0a4c9432667df89a0ca7397633b20a7eff11100a"
	},
	{
		"id": "b81e194e6aa4",
		"ts": "2026-08-01T11:13:32.843Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 905527.29,
		"hash": "b81e194e6aa49df811919899d26d6981f48fcc4b4ed3f32c30b4ab836ad1a55c"
	},
	{
		"id": "fd14c5f6d864",
		"ts": "2026-08-01T11:13:33.111Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25457529.18,
		"hash": "fd14c5f6d86459a77e8d9496690f4374a8632045268ec2f28c3d9eb41adc8b64"
	},
	{
		"id": "4777ea01fe65",
		"ts": "2026-08-01T11:13:33.458Z",
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
		"liquidityUsd": 2107918.62,
		"hash": "4777ea01fe659c6749071c33f4480654b1fd74e9ab24a7891dbc4e307416e04f"
	},
	{
		"id": "915cd292a164",
		"ts": "2026-08-01T11:13:33.721Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 519240.68,
		"hash": "915cd292a164c971ad48886ea03b14d7b4f35083869806bdb02585f1f163b6b0"
	},
	{
		"id": "63bcf62ddafb",
		"ts": "2026-08-01T11:13:33.979Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1073546.89,
		"hash": "63bcf62ddafb126869d69f8f3bc96c0bb3af47f27dc3df1ab9a5f80f2c8d001a"
	},
	{
		"id": "07831a193e50",
		"ts": "2026-08-01T11:13:34.227Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1849899.4,
		"hash": "07831a193e50c4ac04a660406a52dcb43a5da9d9caaf6cdea15f3907ad08a30a"
	},
	{
		"id": "452e7c683110",
		"ts": "2026-08-01T11:13:34.475Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4380252,
		"hash": "452e7c6831102da8b4167ba275d4288b0609ad12694e2a51a4b50f8a734d55d1"
	},
	{
		"id": "55990aa3dbdf",
		"ts": "2026-08-01T11:13:34.723Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1735957.11,
		"hash": "55990aa3dbdf6fafa95546c21008b618181282391f42346fca3d636c5b38e67d"
	},
	{
		"id": "c64bc7df84e9",
		"ts": "2026-08-01T11:13:34.972Z",
		"symbol": "CLANKER",
		"token": "0x1bc0c42215582d5A085795f4baDbaC3ff36d1Bcb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1410131.62,
		"hash": "c64bc7df84e9b68e511bdab002974382550e45f415c03c192522e0185990aad4"
	},
	{
		"id": "25eddff8522e",
		"ts": "2026-08-01T11:13:35.219Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5378994.44,
		"hash": "25eddff8522e453001aa5c04ba4ee657204f3d48b8889dbe6516647acb69ac9b"
	},
	{
		"id": "dc0914437e58",
		"ts": "2026-08-01T09:02:42.167Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111883072.52,
		"hash": "dc0914437e58f9a625899cce93292103885d505bb320053bbb0cc663a34c2180"
	},
	{
		"id": "5edaafbb8a7b",
		"ts": "2026-08-01T09:02:42.482Z",
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
		"liquidityUsd": 17009095.55,
		"hash": "5edaafbb8a7bfdb6482b67fb4edb5d52def335191994be0fe60c72a6faf31836"
	},
	{
		"id": "e99c8a71ef72",
		"ts": "2026-08-01T09:02:42.678Z",
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
		"liquidityUsd": 1136242.28,
		"hash": "e99c8a71ef72c1865b43116aa4237400736066956ab52b904ca9c1e9bade76c9"
	},
	{
		"id": "7bb4c023d6db",
		"ts": "2026-08-01T09:02:42.874Z",
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
		"liquidityUsd": 25551249.14,
		"hash": "7bb4c023d6dbf6fdda7eb09eee613c65192bca649abe553901ed2d6820d31d5b"
	},
	{
		"id": "2a1e769aaab2",
		"ts": "2026-08-01T09:02:43.064Z",
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
		"liquidityUsd": 4395369.43,
		"hash": "2a1e769aaab2d6044571ecccb8242b9bb5909018e7030d23c2692e7122028ff2"
	},
	{
		"id": "92c74dab9fb5",
		"ts": "2026-08-01T09:02:43.249Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 905575.74,
		"hash": "92c74dab9fb5127c08cc7282fd4a4e26a719669858452bd20f946c72459c8af8"
	},
	{
		"id": "cec999f97607",
		"ts": "2026-08-01T09:02:43.442Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25551249.14,
		"hash": "cec999f9760758b15f58f17eb1d9c993bd10ae1772d80c1607b95495284aca1a"
	},
	{
		"id": "5d8494fcdca6",
		"ts": "2026-08-01T09:02:43.632Z",
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
		"liquidityUsd": 2111021.33,
		"hash": "5d8494fcdca60bd09b6c0500ff69ff0df7864d95cee8930f4e5eb52c3dd5a676"
	},
	{
		"id": "c80a1f830ec9",
		"ts": "2026-08-01T09:02:43.825Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1074604.58,
		"hash": "c80a1f830ec9cb39a523b37cdcd99a8d60878cae5cf84e4ef8e28d7c32c3fc40"
	},
	{
		"id": "7ab1403046eb",
		"ts": "2026-08-01T09:02:44.021Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 512023.46,
		"hash": "7ab1403046eb0941edd1a9ad387f63990f716438588ac47d9dde90ef3053c983"
	},
	{
		"id": "fffd91aec5ff",
		"ts": "2026-08-01T09:02:44.211Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1824734.04,
		"hash": "fffd91aec5ff2efee8be084e71d4601f42379daa4675a940a2654e6afe002884"
	},
	{
		"id": "fa5c13357366",
		"ts": "2026-08-01T09:02:44.414Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1739695.94,
		"hash": "fa5c13357366dec397b354ff5c071f6f0d6f7a199cd8e33e12f3e891f128cfdc"
	},
	{
		"id": "9aa115f38545",
		"ts": "2026-08-01T09:02:44.609Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4386082.45,
		"hash": "9aa115f38545e6daf2a0df90f25860f354b2e17a9af74cd9e2d67257662dfac6"
	},
	{
		"id": "77800935560e",
		"ts": "2026-08-01T09:02:44.805Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 732335.83,
		"hash": "77800935560efb85a549ae91ee5f3715375256350345db3f658d20ab4523864b"
	},
	{
		"id": "4f71e285dce6",
		"ts": "2026-08-01T09:02:45.026Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5382160.13,
		"hash": "4f71e285dce6536335a514090ed4b53f826b0154853dfcda2af11febbcfc2ab3"
	},
	{
		"id": "585117c750ab",
		"ts": "2026-08-01T06:25:15.685Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111784955.03,
		"hash": "585117c750abb5f366ae6bc2fab6e505bc2ef6088304ed20db3ac81afcffc1e2"
	},
	{
		"id": "d62e3948a1e9",
		"ts": "2026-08-01T06:25:16.190Z",
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
		"liquidityUsd": 16991839.48,
		"hash": "d62e3948a1e9840e38be9752a225d3257ab286dd54b2784ce16d2fa8f87e4b68"
	},
	{
		"id": "1ca9c91ec402",
		"ts": "2026-08-01T06:25:16.458Z",
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
		"liquidityUsd": 1132964.52,
		"hash": "1ca9c91ec402f7ada0e9d4de44e129fd1a90e9c84932598941dc1709e9df055f"
	},
	{
		"id": "980d72c8c527",
		"ts": "2026-08-01T06:25:16.733Z",
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
		"liquidityUsd": 25526845.18,
		"hash": "980d72c8c527ba32a04e0958ff817efc31c03613896cd427074f9765d81b2e2c"
	},
	{
		"id": "518914e861d5",
		"ts": "2026-08-01T06:25:17.002Z",
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
		"liquidityUsd": 4385060.54,
		"hash": "518914e861d5a9d09d65be7e06e1b0bf3e61295403e9c71ecc12d7b47e9cda0e"
	},
	{
		"id": "ddaf28648e2d",
		"ts": "2026-08-01T06:25:17.270Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 897902.9,
		"hash": "ddaf28648e2d73029cef8e433dffe21f9536c60b635d44aa05f176cbaf633f9f"
	},
	{
		"id": "5cc9252c9dac",
		"ts": "2026-08-01T06:25:17.537Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25526845.18,
		"hash": "5cc9252c9dac2382f32e5fd3121ca6d3e299454b9b9aa60e4a4542c37f6cc3ef"
	},
	{
		"id": "c1411a534ae3",
		"ts": "2026-08-01T06:25:17.811Z",
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
		"liquidityUsd": 2370005.7,
		"hash": "c1411a534ae3b2dd81484f999254fc0eff69b2972d5a62af93409567824b11fd"
	},
	{
		"id": "e94beeefdc00",
		"ts": "2026-08-01T06:25:18.080Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1079912.77,
		"hash": "e94beeefdc00932f5fec1f0b0d6a17b2dcbad462bc8427f977004dad8a856387"
	},
	{
		"id": "74c30a1c831f",
		"ts": "2026-08-01T06:25:18.346Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1833439.27,
		"hash": "74c30a1c831f8e6faec85ad889e8b11d1cb0bda588d935be5bcb42ccecab2836"
	},
	{
		"id": "2faeec6c2cb2",
		"ts": "2026-08-01T06:25:18.594Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1737224.18,
		"hash": "2faeec6c2cb2d79f1cc280c3e9222e9a6710804de2686a31bb4f3ed17286b84d"
	},
	{
		"id": "f78bd622ac8f",
		"ts": "2026-08-01T06:25:18.842Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4392045.65,
		"hash": "f78bd622ac8f87ceec94398910da9a4781fe60fb7c0e7f65822ecd48aead97b8"
	},
	{
		"id": "e221103c89b7",
		"ts": "2026-08-01T06:25:19.095Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5376304.79,
		"hash": "e221103c89b79be5575649e3b32f5c5fb2d8b42306929a785aad58283257ee94"
	},
	{
		"id": "1ea367c0284b",
		"ts": "2026-08-01T06:25:19.345Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 727673.73,
		"hash": "1ea367c0284b24f79399eb05abe9e566172c1ea98ebe9f4acf862295d04fb583"
	},
	{
		"id": "26c9206882af",
		"ts": "2026-08-01T06:25:19.599Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4754078.44,
		"hash": "26c9206882af5a134bfcbbf7439693902d94616422fd6d3259af45383b5bb170"
	},
	{
		"id": "fc497273560f",
		"ts": "2026-08-01T03:26:32.012Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111678589.02,
		"hash": "fc497273560f4ade592c7d804b58368b2b7d984a8acb8074f528a5e7b37b06bc"
	},
	{
		"id": "31461fe5ac92",
		"ts": "2026-08-01T03:26:32.379Z",
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
		"liquidityUsd": 16880732.43,
		"hash": "31461fe5ac9229cfee7128b405db5e94f5cbbc30d1c7b424f81b6908c22a34ee"
	},
	{
		"id": "26cf932b5e39",
		"ts": "2026-08-01T03:26:32.565Z",
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
		"liquidityUsd": 1124130.35,
		"hash": "26cf932b5e391fa29cf102ee8cbb1b6b54796046882ece8d6b44baf5abfd62f7"
	},
	{
		"id": "3580788d1278",
		"ts": "2026-08-01T03:26:32.798Z",
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
		"liquidityUsd": 25536380.04,
		"hash": "3580788d12782f07b7cc8b37c869fad653b07cb323f881017289a599e4a19379"
	},
	{
		"id": "6cfe5d17130d",
		"ts": "2026-08-01T03:26:32.986Z",
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
		"liquidityUsd": 4388997.86,
		"hash": "6cfe5d17130d197824c0fe856f79c93e07c076b91d0c2f41c3121cc289ce5ea9"
	},
	{
		"id": "d1b4199dbe25",
		"ts": "2026-08-01T03:26:33.207Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 895446.45,
		"hash": "d1b4199dbe25ee328f5e7a996988a05876fbb8c285279dd8a071c0b57c461d88"
	},
	{
		"id": "f6805671c9cd",
		"ts": "2026-08-01T03:26:33.411Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25536380.04,
		"hash": "f6805671c9cd092f75f9453ff2b28b5e08d90283d264bf847641bd743ee4c725"
	},
	{
		"id": "54e8cfee6465",
		"ts": "2026-08-01T03:26:33.625Z",
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
		"liquidityUsd": 2367354.16,
		"hash": "54e8cfee64653b0616420675146c73fc252db6c6a3633f147a1d88802dbd3ea3"
	},
	{
		"id": "842ebcfbd2c8",
		"ts": "2026-08-01T03:26:33.838Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5380266.37,
		"hash": "842ebcfbd2c8a0ec7d422236edee42e36a756936c87ff2c6ffee098488aae8b9"
	},
	{
		"id": "8bc5cd1d562e",
		"ts": "2026-08-01T03:26:34.022Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1086309.87,
		"hash": "8bc5cd1d562e10f9dc5a6aac84348dd0219dc085ec71dd101f6a3601f7d623d2"
	},
	{
		"id": "4a1ba7026d09",
		"ts": "2026-08-01T03:26:34.207Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1749691.96,
		"hash": "4a1ba7026d09ee5faaa1e3ddb59885f9f3057244db97802fdec94b297ee7419b"
	},
	{
		"id": "624240544849",
		"ts": "2026-08-01T03:26:34.410Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4394819.21,
		"hash": "6242405448496feae8c33f2d9daed9f2c5e64f892dafe9429081b644d059cf75"
	},
	{
		"id": "9ea71e97767d",
		"ts": "2026-08-01T03:26:34.599Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1848669.07,
		"hash": "9ea71e97767d8f73f5efae1e91ec9e749f7e544d1b5846308e8b8f37fe1367ab"
	},
	{
		"id": "ae8dcd9b0b81",
		"ts": "2026-08-01T03:26:34.803Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 176944.24,
		"hash": "ae8dcd9b0b818aa5291b92503acb307dd1b4226103f80ff3890754eafc146c9c"
	},
	{
		"id": "11f1ddab2e90",
		"ts": "2026-08-01T03:26:34.998Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4781248.15,
		"hash": "11f1ddab2e90759b430bb883146984abe6dbc40f4d43ac6eb4129d3df6b92893"
	},
	{
		"id": "040b574634f7",
		"ts": "2026-08-01T03:26:35.214Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 728989.65,
		"hash": "040b574634f7ce756e993e175b2a512ca9de3876f8f587a471397c362585fccd"
	},
	{
		"id": "2169872abf21",
		"ts": "2026-07-31T23:58:32.410Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111707638.29,
		"hash": "2169872abf2189cfb839e30fc69c661922daa0f629aca5a8060e3057388f798e"
	},
	{
		"id": "d3aaf4cb9de8",
		"ts": "2026-07-31T23:58:32.855Z",
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
		"liquidityUsd": 16921616.95,
		"hash": "d3aaf4cb9de8459e5a86db59f667be5552ffd43104e993a1378b0176f5ba8ad8"
	},
	{
		"id": "f891331b59b2",
		"ts": "2026-07-31T23:58:33.096Z",
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
		"liquidityUsd": 1121041.69,
		"hash": "f891331b59b294270ad0e6e84c58a8065bfcf7c2434b4cf8d79b468cac9484f1"
	},
	{
		"id": "7d6c8b9247a4",
		"ts": "2026-07-31T23:58:33.330Z",
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
		"liquidityUsd": 25444982.73,
		"hash": "7d6c8b9247a40208588c586e89f67e62f250f1b6fbaa8b670f1f901e19817ab5"
	},
	{
		"id": "899309df11e9",
		"ts": "2026-07-31T23:58:33.562Z",
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
		"liquidityUsd": 4642850.53,
		"hash": "899309df11e9a326c2fa0f8401f8f8f91442baf47b3eb498e7d4cd2fa090fef8"
	},
	{
		"id": "047104f72c41",
		"ts": "2026-07-31T23:58:33.795Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 892247.93,
		"hash": "047104f72c413dfa095320edf564b16026aebedea2385af5fed6480f4070f5e3"
	},
	{
		"id": "59a45ac553cc",
		"ts": "2026-07-31T23:58:34.046Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25444982.73,
		"hash": "59a45ac553cc56d4e00ba9b6138cb0a40ad6578efcdf3d046a421f92eccb91fc"
	},
	{
		"id": "f40fc90f5d63",
		"ts": "2026-07-31T23:58:34.278Z",
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
		"liquidityUsd": 2360843.84,
		"hash": "f40fc90f5d63a583a69c32f382c5ee66830afc380984ee6fee39d079d97a2b87"
	},
	{
		"id": "29b9fd4ba829",
		"ts": "2026-07-31T23:58:34.513Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5397450.32,
		"hash": "29b9fd4ba8293b00a83036a5cace1f3f2dcf3127d27e5ad88b1686baf428b50e"
	},
	{
		"id": "3ba18162b860",
		"ts": "2026-07-31T23:58:34.773Z",
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
		"liquidityUsd": 9349943.12,
		"hash": "3ba18162b86078e71e5e831dc93bc61c4d9fdcf4bac7a03da88f43b026dc7335"
	},
	{
		"id": "1c4317cc7316",
		"ts": "2026-07-31T23:58:34.992Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1094317.41,
		"hash": "1c4317cc731620d37d7e1109e1ef8af223ef9effbad35a0ebdcd3b6202440df6"
	},
	{
		"id": "fbfc1cbdd8e8",
		"ts": "2026-07-31T23:58:35.209Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1756665.65,
		"hash": "fbfc1cbdd8e83dfcbb1e1325227e093d471e2b86810da16b0ceedade8194ac48"
	},
	{
		"id": "7a058138e22b",
		"ts": "2026-07-31T23:58:35.427Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4333041.07,
		"hash": "7a058138e22b5d61c3e0b7f38397b77cff5bc041472d6d1ca42c618c37a36486"
	},
	{
		"id": "2845445665c2",
		"ts": "2026-07-31T23:58:35.642Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1825494.26,
		"hash": "2845445665c29fb4404b2099e86422ab64d96d324f518d72d63941046e17470e"
	},
	{
		"id": "38580019d64a",
		"ts": "2026-07-31T23:58:35.860Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4731216.18,
		"hash": "38580019d64aa198536a4a85204f2245ae8740f023098eae807cd0289f192336"
	},
	{
		"id": "f83741164f47",
		"ts": "2026-07-31T23:58:36.077Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 733713.66,
		"hash": "f83741164f47edd268413a331ffae562713765e5b447b5d23d906c57b375d1d6"
	},
	{
		"id": "6000321cdc63",
		"ts": "2026-07-31T22:00:57.730Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110860956.1,
		"hash": "6000321cdc63395f85b0e4abcb3ed4ea022f197ce3dba4d0e167da98fc007b94"
	},
	{
		"id": "a08b1d159e86",
		"ts": "2026-07-31T22:00:57.976Z",
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
		"liquidityUsd": 17247265.4,
		"hash": "a08b1d159e86dbc1942fa263e43409b2dc87c3485571b4f346cc3c468d476a9c"
	},
	{
		"id": "771878102063",
		"ts": "2026-07-31T22:00:58.419Z",
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
		"liquidityUsd": 1116023.76,
		"hash": "7718781020630a8dc5fcf709ebe4bd84cc0cbffe9a8be70082f7a3cf4e395f48"
	},
	{
		"id": "099fb8ddd107",
		"ts": "2026-07-31T22:00:58.653Z",
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
		"liquidityUsd": 25461031.1,
		"hash": "099fb8ddd107de28fa34ff66017bd439b049dc227d14fcc5c8d3a31de6d23140"
	},
	{
		"id": "fe8ce7f9b9af",
		"ts": "2026-07-31T22:00:58.889Z",
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
		"liquidityUsd": 4621248.26,
		"hash": "fe8ce7f9b9af9a813c0f9e9eb8417d741a83daba0016a7d7177f81c8576180b7"
	},
	{
		"id": "9f343a6f9d2e",
		"ts": "2026-07-31T22:00:59.134Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 891830.65,
		"hash": "9f343a6f9d2ec9b12c076151cc276ce89cc29c1bbf09dbf1a7cb3442c3387987"
	},
	{
		"id": "38846c0aad6e",
		"ts": "2026-07-31T22:00:59.363Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25461031.1,
		"hash": "38846c0aad6edceff255ed5a5d27d976ec922e0fe1ff8ba0effe6f93efd36314"
	},
	{
		"id": "abc708ef820c",
		"ts": "2026-07-31T22:00:59.627Z",
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
		"liquidityUsd": 4107897.01,
		"hash": "abc708ef820c269f8673fdd727ae60f2003fd03d8732062ba39c320fc03989c1"
	},
	{
		"id": "1f734ad435b8",
		"ts": "2026-07-31T22:00:59.869Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5409346.86,
		"hash": "1f734ad435b8097661a6c69120c214a77d832d5e9a9f2026cf2eec4b6ebf299a"
	},
	{
		"id": "8fa4443ca681",
		"ts": "2026-07-31T22:01:00.316Z",
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
		"liquidityUsd": 9303700.45,
		"hash": "8fa4443ca681ebe6503b88b21a127555d4c17948e9b7501562673790d2ce2807"
	},
	{
		"id": "6ed591d49539",
		"ts": "2026-07-31T22:01:00.782Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1089711.98,
		"hash": "6ed591d4953982d1d460be19c774ac44fb1b4c5d38cc1d99dfdab46a5956c27f"
	},
	{
		"id": "70eddb3ad077",
		"ts": "2026-07-31T22:01:01.190Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4322254.42,
		"hash": "70eddb3ad0771607f4e21c215f2315165e63cf5ef4bc1f74330eaed15e9980ff"
	},
	{
		"id": "70bc27b43579",
		"ts": "2026-07-31T22:01:01.669Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 10,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.8,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 730105.6,
		"hash": "70bc27b435792a9c1846d2e761e0aeebb9ab7f599921bf34b604723d5cc44593"
	},
	{
		"id": "82ffb02db347",
		"ts": "2026-07-31T22:01:01.905Z",
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
		"liquidityUsd": 4740767.76,
		"hash": "82ffb02db347bb156b13b26a634094d44b4f158a2be235ab5d4f3b2347c422ac"
	},
	{
		"id": "98e6f4229856",
		"ts": "2026-07-31T22:01:02.181Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 178855.29,
		"hash": "98e6f422985664f3693369233a4b60e80c69bf4dd73dd028ab498f963ae64734"
	},
	{
		"id": "c0ff02764c88",
		"ts": "2026-07-31T20:16:58.768Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110969817.71,
		"hash": "c0ff02764c88696f250fc515e82a5c56c4b926bea4bacb9271fdfab755b1b74a"
	},
	{
		"id": "e989fd67ac9c",
		"ts": "2026-07-31T20:16:59.407Z",
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
		"liquidityUsd": 16990591.63,
		"hash": "e989fd67ac9c5c47c57f19a43fc7e703eb7d0dfdc81fff2bb50065dc21a72e6d"
	},
	{
		"id": "5e6d2d15756f",
		"ts": "2026-07-31T20:16:59.641Z",
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
		"liquidityUsd": 1118568.02,
		"hash": "5e6d2d15756f3f6e54fd47a52f6f5d88c044d5f74a365662bd15cb9c10c5f112"
	},
	{
		"id": "4825290e36e6",
		"ts": "2026-07-31T20:16:59.878Z",
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
		"liquidityUsd": 25490248.69,
		"hash": "4825290e36e6adfceb79cea4a9fb23fa32f0f71d833b444a6aaf0b5015bedd7a"
	},
	{
		"id": "dee2f5a641fd",
		"ts": "2026-07-31T20:17:00.112Z",
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
		"liquidityUsd": 4646654,
		"hash": "dee2f5a641fdaa5db1d7bdc85badfa89e2466a5a31b9ace7503a8343a35aa53c"
	},
	{
		"id": "d8ecbc13ff77",
		"ts": "2026-07-31T20:17:00.348Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 894018.71,
		"hash": "d8ecbc13ff778dbeef9ae20f7a06ddbc5cb6ef8f4e33ed8e080d963b24e27103"
	},
	{
		"id": "200100ad06b1",
		"ts": "2026-07-31T20:17:00.588Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25490248.69,
		"hash": "200100ad06b11168c1d01599468bb9179d109efb7931be13a2e20587b63f68f0"
	},
	{
		"id": "57e037ae9fec",
		"ts": "2026-07-31T20:17:00.920Z",
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
		"liquidityUsd": 4119691.95,
		"hash": "57e037ae9fece93084d42de81a2582ff01ea6798b96de04d0e262b0d1332c5ac"
	},
	{
		"id": "f33dda891447",
		"ts": "2026-07-31T20:17:01.156Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5414343.34,
		"hash": "f33dda891447b6a76116f417ab24a640b562fe1ac86c3ef9d8e55b52aa9d401e"
	},
	{
		"id": "25cfe5da4ec6",
		"ts": "2026-07-31T20:17:01.388Z",
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
		"liquidityUsd": 9351936.52,
		"hash": "25cfe5da4ec6ced86d7659288d65194a6c54ae4477d943ef0c78dcf30bf2460b"
	},
	{
		"id": "bac4f2a86f34",
		"ts": "2026-07-31T20:17:01.622Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1116936.79,
		"hash": "bac4f2a86f3491212ceebeae298824fc4e7eadfbdb25d66e54a8b83112aa2e28"
	},
	{
		"id": "22fb0cf43ffb",
		"ts": "2026-07-31T20:17:01.858Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4333199.78,
		"hash": "22fb0cf43ffb9869fc158dfb888c075f08923591d3ee773e792f920790b5a59d"
	},
	{
		"id": "ac55f8f99d36",
		"ts": "2026-07-31T20:17:02.097Z",
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
		"liquidityUsd": 4840563.74,
		"hash": "ac55f8f99d362b6c5009468ee4aacfa5370d1fe524a4690208dcd26daaf930b8"
	},
	{
		"id": "86a715183e27",
		"ts": "2026-07-31T20:17:02.367Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 181548.02,
		"hash": "86a715183e2759cd2849c64a588a577e19ed027c9a5b5e41977fc383595bbb25"
	},
	{
		"id": "fdf63eda30d3",
		"ts": "2026-07-31T20:17:02.586Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 730962.75,
		"hash": "fdf63eda30d3ea259824f0b0e0510d8d8a5d78667a358e7fb56e5de02697dd7d"
	},
	{
		"id": "d1d963b3004a",
		"ts": "2026-07-31T18:17:24.177Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111232523.83,
		"hash": "d1d963b3004a463041d4dcaed78a66a7d92cbc60bd8f62a4594d124d771764e7"
	},
	{
		"id": "b6d402db384f",
		"ts": "2026-07-31T18:17:24.631Z",
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
		"liquidityUsd": 14236531.07,
		"hash": "b6d402db384f493548b6dfecff4b712612e61c64a9e56b4f511dab26fa338742"
	},
	{
		"id": "50a94e100190",
		"ts": "2026-07-31T18:17:24.877Z",
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
		"liquidityUsd": 1126941.36,
		"hash": "50a94e100190ca7fe81600d4e9c555767564c1ec66fa3fa969b37f3001cc61c2"
	},
	{
		"id": "7ed8d50e408d",
		"ts": "2026-07-31T18:17:25.132Z",
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
		"liquidityUsd": 25508128.62,
		"hash": "7ed8d50e408d554139368bb1cde8af2f7d20ad9ee8ca9fe2ed246d3eda68fe36"
	},
	{
		"id": "6bdcb8b17d7c",
		"ts": "2026-07-31T18:17:25.586Z",
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
		"liquidityUsd": 4693597.3,
		"hash": "6bdcb8b17d7c0fe889fbabe6fcec8c425de4f2d0650a89287d6826cb111dcbad"
	},
	{
		"id": "daa8f8620182",
		"ts": "2026-07-31T18:17:25.840Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 894304.26,
		"hash": "daa8f86201827b23bc89b6e33717011e5cc9d4d4cdcb967859f247dba62bb7a5"
	},
	{
		"id": "8963a560790b",
		"ts": "2026-07-31T18:17:26.087Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25508128.62,
		"hash": "8963a560790b3d226538b615a52216c72501f2e298250b8da385d9a915446285"
	},
	{
		"id": "cb135288702b",
		"ts": "2026-07-31T18:17:26.344Z",
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
		"liquidityUsd": 4127439.27,
		"hash": "cb135288702b9dff87b1849baa3515ac9439127e24605283a986d06d2320b828"
	},
	{
		"id": "443ef8f2928b",
		"ts": "2026-07-31T18:17:26.588Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5293246.21,
		"hash": "443ef8f2928b051f1a3ec814f081c55ce31e8babf315a918763f57f168a8f107"
	},
	{
		"id": "e146e7d2aa5e",
		"ts": "2026-07-31T18:17:26.839Z",
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
		"liquidityUsd": 9399873.83,
		"hash": "e146e7d2aa5ee08cbd0f6dab6970f6e512e6941cbf0bf3dfd57768452afb62bf"
	},
	{
		"id": "bce142eca6d3",
		"ts": "2026-07-31T18:17:27.068Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4350235.51,
		"hash": "bce142eca6d3e14f0575bdd69db9bffae3204eb087d834e41b6cd4b9219cd34c"
	},
	{
		"id": "1e638117f1c7",
		"ts": "2026-07-31T18:17:27.295Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 709650.6,
		"hash": "1e638117f1c7dd44207c5584167ab8568066594a4a991c24b79fa10d9e5dc52a"
	},
	{
		"id": "dc06097f3138",
		"ts": "2026-07-31T18:17:27.525Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4845023.81,
		"hash": "dc06097f313809f93db7fdfd4fea98ebfc04e51a97a74a0bdb2cd6bbc80cff7e"
	},
	{
		"id": "46220d96f254",
		"ts": "2026-07-31T18:17:27.755Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 185472.43,
		"hash": "46220d96f254beee376af89613781a493e81490f79acc4f0b2232489212fa0cd"
	},
	{
		"id": "d7487ba0140c",
		"ts": "2026-07-31T18:17:27.983Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 721630.35,
		"hash": "d7487ba0140c36921d6d9d0e5a2c5c298c9d419fced7734f783d73d527a18bcf"
	},
	{
		"id": "0ccd28ff4528",
		"ts": "2026-07-31T18:17:28.219Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 974366.16,
		"hash": "0ccd28ff452836b762f9170350b5ddb0b95a5a7d57045708c94805ec59e6a1f3"
	},
	{
		"id": "b4e8d10d46e1",
		"ts": "2026-07-31T18:17:28.451Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 548681.31,
		"hash": "b4e8d10d46e1c95e140328dd658402ef965e4d4630d3d03f08019383aa332507"
	},
	{
		"id": "f5da6ca2c3d4",
		"ts": "2026-07-31T16:42:54.078Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110644714.85,
		"hash": "f5da6ca2c3d4ea480e56c21a1bfd7759e452aabe5230939d95d2edf44f5fe5cf"
	},
	{
		"id": "f49005a64db7",
		"ts": "2026-07-31T16:42:54.334Z",
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
		"liquidityUsd": 15497786.14,
		"hash": "f49005a64db7243f9233761b71457346a4de2ccd3a2e700ecc2f89d4badbcd9b"
	},
	{
		"id": "5551b8f20aed",
		"ts": "2026-07-31T16:42:54.590Z",
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
		"liquidityUsd": 1133152.88,
		"hash": "5551b8f20aedf125903293061908a8c41d12b5eb89ce26574711afa8fe8adc16"
	},
	{
		"id": "f30e0bd3ca2a",
		"ts": "2026-07-31T16:42:54.844Z",
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
		"liquidityUsd": 25512246.16,
		"hash": "f30e0bd3ca2ab61e1e39050bee0ea3583a54f90688b8198d16eb3a4760ebccf4"
	},
	{
		"id": "09ae8db2c048",
		"ts": "2026-07-31T16:42:55.090Z",
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
		"liquidityUsd": 4665052.25,
		"hash": "09ae8db2c04828647f7a0cc1be8fbe8842778bb0497cb40e048b7b1a75f954b3"
	},
	{
		"id": "c7d2332b4da7",
		"ts": "2026-07-31T16:42:55.352Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 893148.3,
		"hash": "c7d2332b4da7eac82521e27c963eda4574a83dc91a8c55547251f34896cb7ac7"
	},
	{
		"id": "a3e1f89430bf",
		"ts": "2026-07-31T16:42:55.592Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25512246.16,
		"hash": "a3e1f89430bf35b8c66b04e2958c430b6b5ea5c08be2684007e40bca4b9212ce"
	},
	{
		"id": "e6140b1018a9",
		"ts": "2026-07-31T16:42:55.834Z",
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
		"liquidityUsd": 4107019.57,
		"hash": "e6140b1018a9e25878c959ea42ed1bedf9bb10bfc47e7a1ae58948c7acba57d5"
	},
	{
		"id": "ba0d137ddca8",
		"ts": "2026-07-31T16:42:56.087Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5284949.91,
		"hash": "ba0d137ddca88d2be03fd28a7b09791cd2250d235ee5057174600f199048e687"
	},
	{
		"id": "ac2eb71c8528",
		"ts": "2026-07-31T16:42:56.331Z",
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
		"liquidityUsd": 9331563.27,
		"hash": "ac2eb71c85283ee0da3f446f89a4f78c0e8f9c8b9b6e8bab63b1a73ebdd762b1"
	},
	{
		"id": "5b53d116edf9",
		"ts": "2026-07-31T16:42:56.571Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 703504.86,
		"hash": "5b53d116edf93d3dea5cd5a04df4e99c4c107ac69fdb8981d169aa0f16045e92"
	},
	{
		"id": "3329a18cdfd5",
		"ts": "2026-07-31T16:42:56.799Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 538285.16,
		"hash": "3329a18cdfd5db965e2eb0dc92c2dcfcdb1d64d2c3ed102e563979f02650a17d"
	}
]
