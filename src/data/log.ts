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
	"updatedAt": "2026-08-22T14:17:19.409Z",
	"tokensScored": 13526,
	"verdictsIssued": 13526,
	"safe": 11657,
	"risky": 958,
	"likelyRug": 911,
	"ticks": 789
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "6ec4c68e3291",
		"ts": "2026-08-22T14:17:15.600Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109494330.72,
		"hash": "6ec4c68e3291b05202b3dd20334e6afa9cd76fca1a5958e1a9e31293e1e763cf"
	},
	{
		"id": "5f0eb7cab1fc",
		"ts": "2026-08-22T14:17:15.934Z",
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
		"liquidityUsd": 17623680.4,
		"hash": "5f0eb7cab1fc68de1096eacbdf1d9424fc8c3d753d89d97a0a4c896b024ad2fc"
	},
	{
		"id": "75007ae80b4d",
		"ts": "2026-08-22T14:17:16.136Z",
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
		"liquidityUsd": 891034.67,
		"hash": "75007ae80b4dd929bc9b619a320fabe7ee6ebdcf29e69ad93d9101e6eeb9fee4"
	},
	{
		"id": "fc7ad3a5ea8b",
		"ts": "2026-08-22T14:17:16.330Z",
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
		"liquidityUsd": 28207703.35,
		"hash": "fc7ad3a5ea8b2499783c2c48f767cc22f5e2903a21776d41bf81c0752833015d"
	},
	{
		"id": "14afcc6a3905",
		"ts": "2026-08-22T14:17:16.528Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "14afcc6a390514f7dd196365cc6c3bc520cc8aee2d63c608f3c6f526de0b15ff"
	},
	{
		"id": "64717dad774f",
		"ts": "2026-08-22T14:17:16.826Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1180236.05,
		"hash": "64717dad774ff38b6a5c3041ee5040c35a1316bc6328bf6bc892965ae8066828"
	},
	{
		"id": "9a6ddd2d2502",
		"ts": "2026-08-22T14:17:17.016Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152762.94,
		"hash": "9a6ddd2d250219df21cf746df88a1a80665d537a3ca66a47c7bd27bec8cc5ba6"
	},
	{
		"id": "c0d5aa3dce36",
		"ts": "2026-08-22T14:17:17.211Z",
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
		"liquidityUsd": 3181090.76,
		"hash": "c0d5aa3dce361bc74ac232f91f1faf62dbbbde347dc51b856f88f8da5c3ca477"
	},
	{
		"id": "a4cd17452c17",
		"ts": "2026-08-22T14:17:17.411Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 847750.15,
		"hash": "a4cd17452c174db67a712425be1bc8fb062b678b73ae41a033bc5c5629765fb5"
	},
	{
		"id": "fe0a5ea0ddcc",
		"ts": "2026-08-22T14:17:17.597Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1343108.71,
		"hash": "fe0a5ea0ddcc3f40577942c98b3f92bc3c1da02b4533af6decca086f7797a597"
	},
	{
		"id": "4ad6159d351d",
		"ts": "2026-08-22T14:17:17.802Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1874856.98,
		"hash": "4ad6159d351d539c3166caebfa07e8f2b8caf29a1b0f4bf8bccf514cf9e000a0"
	},
	{
		"id": "9a19ae1bfbaa",
		"ts": "2026-08-22T14:17:17.999Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11718374.14,
		"hash": "9a19ae1bfbaa44449c2a9d479b45dcecdb1745e1ed70f03d9ea4892be6985d40"
	},
	{
		"id": "e87ca4bef5c0",
		"ts": "2026-08-22T14:17:18.257Z",
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
		"liquidityUsd": 115778.38,
		"hash": "e87ca4bef5c065803bd8c7af0b067eb6f9fd47a02f05325d3cf3071253059ee2"
	},
	{
		"id": "136fc8e490c9",
		"ts": "2026-08-22T14:17:18.446Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 545383.19,
		"hash": "136fc8e490c9fbde750019746156fe4218390c0f6d352293c54361e970bf9056"
	},
	{
		"id": "7b8f6bd05e99",
		"ts": "2026-08-22T14:17:18.636Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 657809.11,
		"hash": "7b8f6bd05e999018db107905dcf26898bc66bd2b283ea5c91693a5747cd28b17"
	},
	{
		"id": "963819e59fd8",
		"ts": "2026-08-22T14:17:18.825Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 590931.76,
		"hash": "963819e59fd82b475027737db1aa77fd2afcf211203b783823daf382a5dba223"
	},
	{
		"id": "1f0219a94fd6",
		"ts": "2026-08-22T14:17:19.035Z",
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
		"liquidityUsd": 622020.2,
		"hash": "1f0219a94fd60acd0f54dbad20945a2b025d7541be29a109565f29df45afedc2"
	},
	{
		"id": "529a9787ee23",
		"ts": "2026-08-22T14:17:19.218Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3816881.26,
		"hash": "529a9787ee2377c52d3131f862bf533dd4467023debc34b3f0f98612064cdb83"
	},
	{
		"id": "f27bb727c7a4",
		"ts": "2026-08-22T14:17:19.408Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3279564.66,
		"hash": "f27bb727c7a471deac5b1b732560da253547710acf7bb4b9e62f8f9341d6bee9"
	},
	{
		"id": "51b80914533f",
		"ts": "2026-08-22T13:28:03.208Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109918362.69,
		"hash": "51b80914533f8aae0318801273b452eda5bc563a4be0a0e0f631a577c2a5afaf"
	},
	{
		"id": "37809b4ddf2c",
		"ts": "2026-08-22T13:28:03.447Z",
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
		"liquidityUsd": 16910455.75,
		"hash": "37809b4ddf2ce9212ba13f30ce51bbbc27c9fb0766c3db68223ccb0dcd3aa96a"
	},
	{
		"id": "85d57b22896c",
		"ts": "2026-08-22T13:28:03.634Z",
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
		"liquidityUsd": 890628.07,
		"hash": "85d57b22896c51b8eadbe9c1f2f7cd127db2ddb59ea86e66601da6ac96cb51c8"
	},
	{
		"id": "f0538b0e5eeb",
		"ts": "2026-08-22T13:28:03.871Z",
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
		"liquidityUsd": 28275295.25,
		"hash": "f0538b0e5eebbcb44be3c7363062e05f093fa6bac9277622c455ec81e46855d7"
	},
	{
		"id": "14d1b1770e09",
		"ts": "2026-08-22T13:28:04.058Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "14d1b1770e09b5d56fc6ac05ffa002d5f934e08a5dbebecc62e81d201ed34f19"
	},
	{
		"id": "d1e0db6bda79",
		"ts": "2026-08-22T13:28:04.283Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1183028.94,
		"hash": "d1e0db6bda7971b077c68dfcfef6cbd942cd2d876513a747a738b39ea59614ba"
	},
	{
		"id": "9ba559f39f52",
		"ts": "2026-08-22T13:28:04.512Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152762.96,
		"hash": "9ba559f39f52dbc2d5960b951b8007334ef2359d0978b81b96cfc7f023ae882f"
	},
	{
		"id": "e75975788e62",
		"ts": "2026-08-22T13:28:04.783Z",
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
		"liquidityUsd": 3196114.26,
		"hash": "e75975788e62cea1edda90de68104f2359ad15588c154f145d78c14c3c660ef9"
	},
	{
		"id": "74402b51c0ea",
		"ts": "2026-08-22T13:28:04.977Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 862796.17,
		"hash": "74402b51c0eac45f7330c868f128afb263e8155ed42f7aae483455a5c74be52c"
	},
	{
		"id": "6becf51bc943",
		"ts": "2026-08-22T13:28:05.771Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1301495.17,
		"hash": "6becf51bc94329fe5ef854f136796c41b0c3bfca6a02adab2aef675c31388ab4"
	},
	{
		"id": "e4c7cb8f9534",
		"ts": "2026-08-22T13:28:05.969Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1867932.93,
		"hash": "e4c7cb8f9534fe08dbd9c33ff6f38a58312ef5c6549c9cba8b9f8b1321a8d215"
	},
	{
		"id": "adcf92205b4c",
		"ts": "2026-08-22T13:28:06.196Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 12018850.85,
		"hash": "adcf92205b4cdc76e1357fa8ede3c334e2bc71a8936b8467cb999c0e4d4971e4"
	},
	{
		"id": "44369c254cda",
		"ts": "2026-08-22T13:28:06.452Z",
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
		"liquidityUsd": 123113.31,
		"hash": "44369c254cda35ff9f02f2987d89ff08c0d3b772520a1280d410fd6d8990e35d"
	},
	{
		"id": "2c89c3302ef2",
		"ts": "2026-08-22T13:28:06.651Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 526441.98,
		"hash": "2c89c3302ef2f7bbdb00ba54208bfc9111aadcba1779026c33b210b5a1b838bf"
	},
	{
		"id": "5d8554eb1bdc",
		"ts": "2026-08-22T13:28:06.873Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 656653.08,
		"hash": "5d8554eb1bdccaa4e56b34e4c6a9e74200d32d60bebbe16b9888583356c11955"
	},
	{
		"id": "13d602369ad1",
		"ts": "2026-08-22T13:28:07.154Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 85167.15,
		"hash": "13d602369ad16123fc19a13560d43040ef0a3f007d95825029314d86eecaeeb7"
	},
	{
		"id": "00d2611abc2c",
		"ts": "2026-08-22T13:28:07.672Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3307729.78,
		"hash": "00d2611abc2c8930b9361022ea179765b32321bcbd837660ab60ff194457cf76"
	},
	{
		"id": "f37268509b88",
		"ts": "2026-08-22T13:28:07.875Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3762241.71,
		"hash": "f37268509b88ea2fa6495c098887bcd532fedbd9064f592ea7cc2cdc8988073e"
	},
	{
		"id": "fd6e79a76f10",
		"ts": "2026-08-22T13:28:08.085Z",
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
		"liquidityUsd": 616363.12,
		"hash": "fd6e79a76f102e7bcaa726e065e4c4568dc1cfcb38ae38e8ba99957fb611b920"
	},
	{
		"id": "7202e8527f2d",
		"ts": "2026-08-22T12:30:42.978Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109979209.87,
		"hash": "7202e8527f2d10bf3a29f78d07000017a2fa27c3987519f045053d71b96e3171"
	},
	{
		"id": "9f76600ddf6b",
		"ts": "2026-08-22T12:30:43.741Z",
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
		"liquidityUsd": 17665412.53,
		"hash": "9f76600ddf6b90671319575400f36e6bfc2543f8305bc49fda863d74c21e2e15"
	},
	{
		"id": "0ce41b1151aa",
		"ts": "2026-08-22T12:30:44.009Z",
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
		"liquidityUsd": 891400.5,
		"hash": "0ce41b1151aa1a8525cc742499d3322a3c9acf12c85cd853b8465dcf4f79c31b"
	},
	{
		"id": "9fa630823b49",
		"ts": "2026-08-22T12:30:44.274Z",
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
		"liquidityUsd": 28230576.09,
		"hash": "9fa630823b49b4dd47572c7558c1f6cb52a58757b6f11c377732b321a465999a"
	},
	{
		"id": "fef7126de0fa",
		"ts": "2026-08-22T12:30:44.553Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "fef7126de0fa9b971b04099683826027d8008b15ace2aee761b7a13235e77abe"
	},
	{
		"id": "60db3134217f",
		"ts": "2026-08-22T12:30:44.814Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1167578.92,
		"hash": "60db3134217f2be9983c0d0020c36bd863ff5017ba44f1d275d34c8dd071b736"
	},
	{
		"id": "4f4d6aa9c9d2",
		"ts": "2026-08-22T12:30:45.083Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152763.19,
		"hash": "4f4d6aa9c9d2612a8a49d59831dbec02a434d540e6e9abcb57a899bc6857f3c3"
	},
	{
		"id": "0e491dd721b5",
		"ts": "2026-08-22T12:30:45.348Z",
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
		"liquidityUsd": 3206792.71,
		"hash": "0e491dd721b599139821f1a0d029e0db08258e1dcf492d4737581a638c3e488c"
	},
	{
		"id": "e59acecafe85",
		"ts": "2026-08-22T12:30:45.626Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 887846.01,
		"hash": "e59acecafe854251d1f97b073064541300e88bbcdf84110d984915bb6556dc04"
	},
	{
		"id": "0687df3ccb39",
		"ts": "2026-08-22T12:30:45.884Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1271553.54,
		"hash": "0687df3ccb39e2887896b81bec426327c60be511752ad52904d2b61d775dff37"
	},
	{
		"id": "7c6357435b27",
		"ts": "2026-08-22T12:30:46.125Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1875804.15,
		"hash": "7c6357435b2709dd6dbe5f9114792639feb8199cf9ebdc1c5162d892c3156470"
	},
	{
		"id": "82c8c1272459",
		"ts": "2026-08-22T12:30:46.366Z",
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
		"liquidityUsd": 125581.47,
		"hash": "82c8c12724595caeb859a1d32ebdd5c482fadd8cfc55a4a6a3822b01de2b47ee"
	},
	{
		"id": "92c1428cef33",
		"ts": "2026-08-22T12:30:46.612Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 86071.35,
		"hash": "92c1428cef335aed64c6d199d8d757da171e92aca3eb5fa81580b222665b3a11"
	},
	{
		"id": "daabf6f39346",
		"ts": "2026-08-22T12:30:46.872Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 657990.12,
		"hash": "daabf6f3934698e89ae664ee1c3222b2ca237b37e0ff13d3d0c65f87e78f5108"
	},
	{
		"id": "13f01782c873",
		"ts": "2026-08-22T12:30:47.119Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11972218.74,
		"hash": "13f01782c8735f455695e871e8ab77b9cb21ee55c61591b7f2e41d9e52592eff"
	},
	{
		"id": "53a8cb0e5f5b",
		"ts": "2026-08-22T12:30:47.356Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 517978.03,
		"hash": "53a8cb0e5f5b66eb287bd9eb98f11260314f675ab816ba14962a201ba3ad0303"
	},
	{
		"id": "e8cabf737d93",
		"ts": "2026-08-22T12:30:47.599Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3330192.02,
		"hash": "e8cabf737d9332d4604e431e69ed1b25a31adb475adeb720b29f6de6a3695341"
	},
	{
		"id": "380d5278ceea",
		"ts": "2026-08-22T12:30:47.846Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 542365.03,
		"hash": "380d5278ceeaca14d3fdd7ba6720001b2ee48df5d6b37b99d63412030314045d"
	},
	{
		"id": "926eea14f6b8",
		"ts": "2026-08-22T12:30:48.087Z",
		"symbol": "VEIL",
		"token": "0x767A739D1A152639e9Ea1D8c1BD55FDC5B217D7f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 608608.27,
		"hash": "926eea14f6b8b1f909e28587e3fed1537f6d430bb0ba5e838512a0e3ef591e1d"
	},
	{
		"id": "21ba58429463",
		"ts": "2026-08-22T11:17:13.834Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109543658.51,
		"hash": "21ba58429463c360f4288a64215e19b26a06f9d5a1b71f26800407ad1913bafa"
	},
	{
		"id": "cb47e1b0a926",
		"ts": "2026-08-22T11:17:14.088Z",
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
		"liquidityUsd": 16964208.85,
		"hash": "cb47e1b0a92661dbfbd562e74127cdcfeee9c382355b40842e814f7e22cb9ff0"
	},
	{
		"id": "0d14ea1432a2",
		"ts": "2026-08-22T11:17:14.321Z",
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
		"liquidityUsd": 887884.13,
		"hash": "0d14ea1432a2330eb7b364036fc2a890cfee259048b5169f9a2d14a05d901a21"
	},
	{
		"id": "16ada1016ccc",
		"ts": "2026-08-22T11:17:14.574Z",
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
		"liquidityUsd": 28027290.25,
		"hash": "16ada1016ccccad3591240f581ba0901fca8bda4b2e2d7459d1e98cf558fa31b"
	},
	{
		"id": "3f49689fd382",
		"ts": "2026-08-22T11:17:14.810Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "3f49689fd382a12ad52bf1bbad63d88d4bf4832b2a4188a0bf3f7557beef08a6"
	},
	{
		"id": "2cf42091bc33",
		"ts": "2026-08-22T11:17:15.066Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1160755.34,
		"hash": "2cf42091bc3325b465e5641b8539d25e84b28483edd6c865aa0558b48d891cda"
	},
	{
		"id": "eb1bb4864386",
		"ts": "2026-08-22T11:17:15.299Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152762.37,
		"hash": "eb1bb4864386841f8459e1ae1e6e7806e4062a66e2ac051064ae8283a69a627d"
	},
	{
		"id": "6052c799f82e",
		"ts": "2026-08-22T11:17:15.537Z",
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
		"liquidityUsd": 3175032.42,
		"hash": "6052c799f82e291e4201310c5a9e30558441a0d90e0fc5b021c6977dd34359cc"
	},
	{
		"id": "9969e2d9b607",
		"ts": "2026-08-22T11:17:15.776Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 835595.86,
		"hash": "9969e2d9b6072e6ed4ee28313dbe4a63fac65134c37bb74f22f9289828ec4e7f"
	},
	{
		"id": "b187f6f60305",
		"ts": "2026-08-22T11:17:16.018Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1280982.15,
		"hash": "b187f6f6030568c1cb20e86d634b61f12f2aeadd40a08e72d91c34ad6b25330e"
	},
	{
		"id": "691afe51c932",
		"ts": "2026-08-22T11:17:16.233Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1856939.45,
		"hash": "691afe51c9323307e78332b896f036c49cbd64f7609f7592e880cfa99892090f"
	},
	{
		"id": "54f534058d46",
		"ts": "2026-08-22T11:17:16.440Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 87172.66,
		"hash": "54f534058d460fd74ab90bb79c669192ef391d77cd00175e3846de72edd5151f"
	},
	{
		"id": "f60076d5c826",
		"ts": "2026-08-22T11:17:16.660Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11661596.84,
		"hash": "f60076d5c8261bb8c9d05fedb16304ff295ba2095d978df13c82e5dec2fb7ac7"
	},
	{
		"id": "92c9e5cd7622",
		"ts": "2026-08-22T11:17:16.887Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 516935.86,
		"hash": "92c9e5cd76224bff6136029c4be2d020c5e9c97ea6574f8f32170579ffebc272"
	},
	{
		"id": "d5f9af0c935b",
		"ts": "2026-08-22T11:17:17.110Z",
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
		"liquidityUsd": 130768.92,
		"hash": "d5f9af0c935bcbb8d77c234b4a8a64ad76394a514bc21987a295b8818c4771a5"
	},
	{
		"id": "93276ed73983",
		"ts": "2026-08-22T11:17:17.320Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3252583.11,
		"hash": "93276ed73983fc1c33b9bd3231966dd5802bdf0c25429bccb9ace3d6b5abb943"
	},
	{
		"id": "c0fa2eafef28",
		"ts": "2026-08-22T11:17:17.540Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 646146.58,
		"hash": "c0fa2eafef286b93b1750071ff0bbf9af8fb5623159444f4715c97569eb168fa"
	},
	{
		"id": "debb2e58ff44",
		"ts": "2026-08-22T11:17:17.767Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 532916.86,
		"hash": "debb2e58ff44ebb158994f5a401b5a87bf001353cecda06a7a3a7230ec957d77"
	},
	{
		"id": "d37ebc1b9f1e",
		"ts": "2026-08-22T11:17:18.180Z",
		"symbol": "VEIL",
		"token": "0x767A739D1A152639e9Ea1D8c1BD55FDC5B217D7f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 579618.29,
		"hash": "d37ebc1b9f1e3b3d0373d8e9327a4dc51512045f14562aae4406dfe78714b191"
	},
	{
		"id": "8fc19e476a2c",
		"ts": "2026-08-22T10:18:26.334Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109451008.28,
		"hash": "8fc19e476a2cd32618f93a6b08678661d2feffec672d2a010bdd9b05ad5e7b0c"
	},
	{
		"id": "72758b1c0cfb",
		"ts": "2026-08-22T10:18:26.595Z",
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
		"liquidityUsd": 16799928.05,
		"hash": "72758b1c0cfb9f14b610b8afc984889b397580e4d7406bb32c551c3e2ebecb7e"
	},
	{
		"id": "aa4cabe1b1d3",
		"ts": "2026-08-22T10:18:26.832Z",
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
		"liquidityUsd": 888262.62,
		"hash": "aa4cabe1b1d3d9897a69745b58625e6eda2013c0fceed9d1be84f455da668132"
	},
	{
		"id": "ee94192fc319",
		"ts": "2026-08-22T10:18:27.071Z",
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
		"liquidityUsd": 28024959.86,
		"hash": "ee94192fc319dc65f6c5a10914ca4b690484ac87dfe2aec2d5b07089a9546f37"
	},
	{
		"id": "60f9a08722b1",
		"ts": "2026-08-22T10:18:27.305Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "60f9a08722b144dff5d38810b39804845ce727ef13de7a9df0706f241ac79b24"
	},
	{
		"id": "f053bbfce528",
		"ts": "2026-08-22T10:18:27.543Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1162871.2,
		"hash": "f053bbfce52853f9b3691d2238334dce782a118759ac690f364417a5393aa449"
	},
	{
		"id": "e7a4a3f50436",
		"ts": "2026-08-22T10:18:27.766Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152761.95,
		"hash": "e7a4a3f504365c494f3397978e2f062274aff7a7c7a345b7b49c8fafc434fa44"
	},
	{
		"id": "7211fc0b8f3f",
		"ts": "2026-08-22T10:18:28.023Z",
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
		"liquidityUsd": 3556462.99,
		"hash": "7211fc0b8f3f0df8cf58c871a115232ff2aa75ddc1e5ea0b7bbfa191e3ad8f5f"
	},
	{
		"id": "60e768accb72",
		"ts": "2026-08-22T10:18:28.481Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 846483.84,
		"hash": "60e768accb72823ae32c544dda1529b1f8d11d4100a96e59a535e62d672cf4bb"
	},
	{
		"id": "d6e76445392c",
		"ts": "2026-08-22T10:18:28.746Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1255189.29,
		"hash": "d6e76445392c81c56faffa9148cd4096b8eecd9217f8e5773916209ad716619d"
	},
	{
		"id": "fdc544fbe6ad",
		"ts": "2026-08-22T10:18:28.959Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1860871.58,
		"hash": "fdc544fbe6ad55f6f468f7ae8003e7f11b61548eaafef4f94a56ea3fc5aaebcf"
	},
	{
		"id": "1f19c1972824",
		"ts": "2026-08-22T10:18:29.179Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 76041.54,
		"hash": "1f19c19728249c3f3aeb26163e9078962d5308aa7bfff0c48a16d38a4d3cf1b6"
	},
	{
		"id": "a20e782d93f8",
		"ts": "2026-08-22T10:18:29.389Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11662374.05,
		"hash": "a20e782d93f86b66fa6b39394d7337c6ac62d12fc3627244c547d0176b6f6245"
	},
	{
		"id": "6beb6b8b5ec6",
		"ts": "2026-08-22T10:18:29.609Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 521500.66,
		"hash": "6beb6b8b5ec63358d31b105a205c7c7c0464d09f3f9c08b97592bc67180e8c72"
	},
	{
		"id": "a6dbd58a020f",
		"ts": "2026-08-22T10:18:29.820Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3194242.95,
		"hash": "a6dbd58a020fa2b23604dd5cf7cc2a881f04822fd43af2d8c176c33fe6c85de4"
	},
	{
		"id": "3fc3616431ab",
		"ts": "2026-08-22T10:18:30.037Z",
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
		"liquidityUsd": 118136.21,
		"hash": "3fc3616431ab54acc1249b518725bab7d21b162ec70d3697d6f1ac31dddecdb5"
	},
	{
		"id": "c52e96151d7d",
		"ts": "2026-08-22T10:18:30.248Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 654096.35,
		"hash": "c52e96151d7dce50bee2d1c206af413cd2fb48f30479615d6704edd402908cf3"
	},
	{
		"id": "0a6d475de19f",
		"ts": "2026-08-22T10:18:30.466Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 533219.4,
		"hash": "0a6d475de19f39026eb92874cf3a77483cfa49f9e5f6ec035b996c842fc888f1"
	},
	{
		"id": "6b37ae50697e",
		"ts": "2026-08-22T10:18:30.899Z",
		"symbol": "VEIL",
		"token": "0x767A739D1A152639e9Ea1D8c1BD55FDC5B217D7f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 583589.73,
		"hash": "6b37ae50697ebff7fe9a8ae499d39743b41a5e34ee4a5b3a75337efad398b89d"
	},
	{
		"id": "cf4e2149d644",
		"ts": "2026-08-22T09:22:45.004Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109760597.33,
		"hash": "cf4e2149d6443142029c9fe503ca975bc49e3e206741064ca0a303e80c3be8de"
	},
	{
		"id": "caa2b82ddf7e",
		"ts": "2026-08-22T09:22:45.245Z",
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
		"liquidityUsd": 17361691.69,
		"hash": "caa2b82ddf7e987d5450dc3fc571a023c33bc1732bef2b4caa8106d48f9c2cf4"
	},
	{
		"id": "8306fa6ec7d0",
		"ts": "2026-08-22T09:22:45.480Z",
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
		"liquidityUsd": 895754.26,
		"hash": "8306fa6ec7d0d8724e54bd7662250facef3d7305849177a03a1b56744b7f5b57"
	},
	{
		"id": "90092485777d",
		"ts": "2026-08-22T09:22:45.775Z",
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
		"liquidityUsd": 28280873.57,
		"hash": "90092485777df99c3c4e4b0afa8165bb2f9f4cd6a9d7cefdf4f00daa619fda81"
	},
	{
		"id": "bc9a9b0ce123",
		"ts": "2026-08-22T09:22:46.010Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "bc9a9b0ce123b8884009b5c753b2d83a7b5f2ab81d1118962e6846df18e45d9a"
	},
	{
		"id": "2895d306667c",
		"ts": "2026-08-22T09:22:46.244Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1184767.98,
		"hash": "2895d306667cdf7e9785e5a8ea136bbd00fb421224836fba8d73cf2b6af18060"
	},
	{
		"id": "ef610615f40b",
		"ts": "2026-08-22T09:22:46.476Z",
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
		"liquidityUsd": 380004.42,
		"hash": "ef610615f40ba4218ca7d52c61d3786c1e474e9629e0c2e0f0641eef276e6b4d"
	},
	{
		"id": "b7683ec05c5a",
		"ts": "2026-08-22T09:22:46.711Z",
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
		"liquidityUsd": 3587708.76,
		"hash": "b7683ec05c5a1ec25d29598f92978769adb2fa6df2ce25b1918e5bfafb4c3ea3"
	},
	{
		"id": "dd7161ed5056",
		"ts": "2026-08-22T09:22:46.943Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 824227.14,
		"hash": "dd7161ed5056e2e68e43f2043a5891315a8aed84f21e37607ef6a7db64f9d3b4"
	},
	{
		"id": "79b71ea439bf",
		"ts": "2026-08-22T09:22:47.524Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1282571.49,
		"hash": "79b71ea439bff965c1bc1a01de624c74cde64fe88b29e90dec6be8e28eb571e5"
	},
	{
		"id": "e67c0cf699bd",
		"ts": "2026-08-22T09:22:47.738Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1887309.14,
		"hash": "e67c0cf699bd1aa49e777a584f39271de8c9b7a110f679e9eb827f0a6d0c35d9"
	},
	{
		"id": "2e6922ff54d1",
		"ts": "2026-08-22T09:22:47.952Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 77055.85,
		"hash": "2e6922ff54d159bc2579f5f427e875849da9181451218a8411ce23adb7abbd25"
	},
	{
		"id": "27e0023e792c",
		"ts": "2026-08-22T09:22:48.169Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11732518.81,
		"hash": "27e0023e792c0d8a7257f0d5c3cccb0c99543c3c9680133c05a77b029334f2cd"
	},
	{
		"id": "3c25da6d03b6",
		"ts": "2026-08-22T09:22:48.383Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 519114.36,
		"hash": "3c25da6d03b6e0a8d961c0b79a3771ba2ae089ce9c61fffdfe447f36d154cef9"
	},
	{
		"id": "baf53dd60cc2",
		"ts": "2026-08-22T09:22:48.673Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3267529.57,
		"hash": "baf53dd60cc2928a1440b18fd31418d92f6c469a3709297a7f70f328d769121b"
	},
	{
		"id": "7f459f4d43c5",
		"ts": "2026-08-22T09:22:49.467Z",
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
		"liquidityUsd": 114933.39,
		"hash": "7f459f4d43c50152f3e905b8bc905f7c5d59343685f60093b054120a341c5e5a"
	},
	{
		"id": "8c8ee3ac6155",
		"ts": "2026-08-22T09:22:49.681Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 656210.32,
		"hash": "8c8ee3ac6155da484e4d702fe35c83a1198ad2d5fcd9108dbab8da7206d6e9dc"
	},
	{
		"id": "a40d8c36ed40",
		"ts": "2026-08-22T09:22:49.898Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 537770.71,
		"hash": "a40d8c36ed40f6fe1349c2cc4b1629d4f26bf3f91f44ffde1d15c8fb37821bc4"
	},
	{
		"id": "9e6a513d71b9",
		"ts": "2026-08-22T09:22:50.266Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 754504.92,
		"hash": "9e6a513d71b9ac3b4ff7dc9e3e9e023791e4d2688ca75edd5486ed8bb914a20f"
	},
	{
		"id": "a00451d2c06a",
		"ts": "2026-08-22T08:24:03.600Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109883411.15,
		"hash": "a00451d2c06a90b3d36832fb52b1cd657e74b9484114a747a6ba92a6e13c34ef"
	},
	{
		"id": "5591d6f5c6cd",
		"ts": "2026-08-22T08:24:04.203Z",
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
		"liquidityUsd": 18119191.49,
		"hash": "5591d6f5c6cdb3449f1fdf99eeade91ef06ec58017fa32f44a15e5734928fc36"
	},
	{
		"id": "ad67e5f9d893",
		"ts": "2026-08-22T08:24:04.624Z",
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
		"liquidityUsd": 902392.76,
		"hash": "ad67e5f9d89399fdc31e348dda9bf9da3e023509a447d25610b54b99d7420b3e"
	},
	{
		"id": "6c05a3cb21ef",
		"ts": "2026-08-22T08:24:05.146Z",
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
		"liquidityUsd": 27890024.73,
		"hash": "6c05a3cb21ef5b18f1dadfe7336ea37473a76115b12764756f6544d7ad52bf89"
	},
	{
		"id": "a042d3d4d040",
		"ts": "2026-08-22T08:24:05.605Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "a042d3d4d0405b8c546756b005d1578deda0b7d9fee18d352c0ea8a9325f8cc3"
	},
	{
		"id": "1c5aeb93ede6",
		"ts": "2026-08-22T08:24:05.833Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1194174.24,
		"hash": "1c5aeb93ede61788b92b3eeb889c0cad4e07f6c922ab8a4fdb9553c27110f663"
	},
	{
		"id": "b6c876c0a8af",
		"ts": "2026-08-22T08:24:06.100Z",
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
		"liquidityUsd": 379414.01,
		"hash": "b6c876c0a8afbbbe1f4140488fdf1e0146a3253ef3d8e7b7079aa5ea02b1f80a"
	},
	{
		"id": "1c1f110595e4",
		"ts": "2026-08-22T08:24:06.340Z",
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
		"liquidityUsd": 3599847.12,
		"hash": "1c1f110595e4ed19ccd78922106d02674d662e094a78ea3cd6fc5e9c3df70343"
	},
	{
		"id": "0d0a94bb3f11",
		"ts": "2026-08-22T08:24:06.694Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1238225.56,
		"hash": "0d0a94bb3f1152facb2d0756f1c2867a7910437474a25a3569c49cafce24621f"
	},
	{
		"id": "b17ddafb9b2e",
		"ts": "2026-08-22T08:24:07.317Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 845239.73,
		"hash": "b17ddafb9b2e92343151e6f8c069636e926a0e36891a5b3607c75b719a355909"
	},
	{
		"id": "0193b7cec0f6",
		"ts": "2026-08-22T08:24:07.532Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1891779.25,
		"hash": "0193b7cec0f6465e639bad5a13eaac7bb960a5fe96fbb7e17bb756963f4e8118"
	},
	{
		"id": "9db5926e6270",
		"ts": "2026-08-22T08:24:07.747Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11739340.51,
		"hash": "9db5926e6270150e7252607362e402c6d9d10863a736a926ade8e78ef296e82d"
	},
	{
		"id": "d0f9368a0e1a",
		"ts": "2026-08-22T08:24:07.960Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 77596.93,
		"hash": "d0f9368a0e1a59f184d61ea9d87c3490e5b633c56e6fb748d958b5be2e2421dc"
	},
	{
		"id": "07a1c0e4eda8",
		"ts": "2026-08-22T08:24:08.175Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 529134.34,
		"hash": "07a1c0e4eda86328a4ecf8945bc8e95390f46d2b509cfc4cfe711673f9612f3e"
	},
	{
		"id": "1231aec1e605",
		"ts": "2026-08-22T08:24:08.390Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3314608.02,
		"hash": "1231aec1e6058809fe1c1b5ea95342cb3d839d30468ef38a3534fbf3ac834dea"
	},
	{
		"id": "e218717743fe",
		"ts": "2026-08-22T08:24:08.737Z",
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
		"liquidityUsd": 120479.02,
		"hash": "e218717743feb0f05aafd958afde8e6f3d21f757df4a4e3ffca8403aaea35ac4"
	},
	{
		"id": "f881f41e754f",
		"ts": "2026-08-22T08:24:08.952Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 655694.77,
		"hash": "f881f41e754fdf387e8cded6dc14a8e9f0a3db8f9761ef0989cb1fe2eb86cedc"
	},
	{
		"id": "8b595261c046",
		"ts": "2026-08-22T08:24:09.166Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 550445.35,
		"hash": "8b595261c0468c469032f21a16bd39ce089971a5a949c2feec30d510a746467a"
	},
	{
		"id": "64c0fef2c5db",
		"ts": "2026-08-22T08:24:09.381Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 746450.66,
		"hash": "64c0fef2c5db43dd452406f773cb8a5ad21205bdac363d9e36d0495cb48dbb0d"
	},
	{
		"id": "04c186b735f0",
		"ts": "2026-08-22T07:27:59.907Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109811050.93,
		"hash": "04c186b735f02adc50a3f2ec938857b43049e17a647b2c59efb3d0334a8da838"
	},
	{
		"id": "5615e36135d5",
		"ts": "2026-08-22T07:28:00.339Z",
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
		"liquidityUsd": 16967081.15,
		"hash": "5615e36135d5fd194cf8fd50525deae5ce79f0fcdcb9e9f5cc84745ab2d30fc0"
	},
	{
		"id": "f29d65cff2cc",
		"ts": "2026-08-22T07:28:00.664Z",
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
		"liquidityUsd": 900686.69,
		"hash": "f29d65cff2ccd060e563936d92bd7c845d25c6a6fedca95d51039c0bb479f511"
	},
	{
		"id": "d112c23eb1e1",
		"ts": "2026-08-22T07:28:00.942Z",
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
		"liquidityUsd": 27846961.71,
		"hash": "d112c23eb1e18f330d9723c32c8ff4de96c696a6406f1f8a0d934dc452a2a9d9"
	},
	{
		"id": "ac2c3ce649b7",
		"ts": "2026-08-22T07:28:01.339Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "ac2c3ce649b76e1de5f3919412b93d9efac7680eab0a3df63b87ac7e77e0b232"
	},
	{
		"id": "56c6f56337ea",
		"ts": "2026-08-22T07:28:01.569Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1195547.42,
		"hash": "56c6f56337ea8008d9c94ad671366c8e7dd8498fbe4a0aa527562a869e7451c2"
	},
	{
		"id": "b7d401f2ea72",
		"ts": "2026-08-22T07:28:01.798Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152757.73,
		"hash": "b7d401f2ea72d87e0dfdd2ee79c8ab5b648fb761598e377a6027add90a416b9c"
	},
	{
		"id": "926a69f21c24",
		"ts": "2026-08-22T07:28:02.256Z",
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
		"liquidityUsd": 3606203.31,
		"hash": "926a69f21c249689f558821ef13eea1c291d4b833db5b5b262f0f660712551af"
	},
	{
		"id": "4fac4c2ef83e",
		"ts": "2026-08-22T07:28:02.596Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1243756.41,
		"hash": "4fac4c2ef83eb21fab69feef549be4dcd96a000dbbab233edf8783f8f3760ba2"
	},
	{
		"id": "8fb521d34a8b",
		"ts": "2026-08-22T07:28:02.863Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 838255.34,
		"hash": "8fb521d34a8b6ed1128756ad6fbef2adffded73c4f1bbc6f9d1f2fd41278c86e"
	},
	{
		"id": "c1470277ed8a",
		"ts": "2026-08-22T07:28:03.293Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1903057.23,
		"hash": "c1470277ed8a3c37ceef9b54958437d676f0a54680be3d1f3197c05a33c0d216"
	},
	{
		"id": "873f0ba06aa3",
		"ts": "2026-08-22T07:28:03.609Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11638968.54,
		"hash": "873f0ba06aa3bc731e4c435fa945c7ecc35a62008c4835d26cdc07f9c8c6dd7b"
	},
	{
		"id": "fc81d5fc861d",
		"ts": "2026-08-22T07:28:03.839Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 77553.64,
		"hash": "fc81d5fc861d10471e1ad65e8c6b73394c594ea75f92ae31e598cc3092bca1d9"
	},
	{
		"id": "687852cd406c",
		"ts": "2026-08-22T07:28:04.056Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3352966.17,
		"hash": "687852cd406c7b3d7827780141e779d6c3210424ba4ea26e44702b8b136f02dc"
	},
	{
		"id": "cf0814e803ba",
		"ts": "2026-08-22T07:28:04.270Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 536574.33,
		"hash": "cf0814e803ba1abdd362161330f44a9a05cee7eaee61a046fc274877d3e7d8bd"
	},
	{
		"id": "24061644c9de",
		"ts": "2026-08-22T07:28:04.488Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 371242.72,
		"hash": "24061644c9de7c289c56c259c0608240a7160b24285431d8eb15e751a85a96d6"
	},
	{
		"id": "61c78d4832c6",
		"ts": "2026-08-22T07:28:04.703Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 549735.51,
		"hash": "61c78d4832c684a9727fdc122cb50488e13168e35c808ae3831203024096a1ca"
	},
	{
		"id": "711229277055",
		"ts": "2026-08-22T07:28:04.919Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 660427.03,
		"hash": "7112292770556a0fbebc6a24fc0fb6e9597826fc74a8c29febc5e2fcce152381"
	},
	{
		"id": "f4cdcd884e39",
		"ts": "2026-08-22T07:28:05.747Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 738202.61,
		"hash": "f4cdcd884e394a5c30f8b2c1b0d086503989cc7213efcba4da80c5956804b0fe"
	},
	{
		"id": "99ff1f7184bc",
		"ts": "2026-08-22T06:32:41.842Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109743954.11,
		"hash": "99ff1f7184bc8e092e8c1f2c2e8501216630026687e7cb0adbb146200d70542c"
	},
	{
		"id": "933fbdb3dd8b",
		"ts": "2026-08-22T06:32:42.088Z",
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
		"liquidityUsd": 13565180.43,
		"hash": "933fbdb3dd8b2588346c2ed13b81ab749cf689b98a84778b248da7a09c7e8981"
	},
	{
		"id": "f4f612b10c25",
		"ts": "2026-08-22T06:32:42.353Z",
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
		"liquidityUsd": 902282.56,
		"hash": "f4f612b10c25ad02dfc67c6553bd9a327fbb89f52148a1c3879c44cfda217992"
	},
	{
		"id": "b151c8a6cdbe",
		"ts": "2026-08-22T06:32:42.590Z",
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
		"liquidityUsd": 27797285.27,
		"hash": "b151c8a6cdbeb0ea90f64665efdc93eaee4ba074422c19b7ccf7ef9fcf488af8"
	},
	{
		"id": "a9e27c57be9b",
		"ts": "2026-08-22T06:32:42.823Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "a9e27c57be9baab547d92e58ece6429f6f16016be501fbebfc1b7d22eb4024cc"
	},
	{
		"id": "f69316fd4bb3",
		"ts": "2026-08-22T06:32:43.085Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1178370.11,
		"hash": "f69316fd4bb3090bccd49ca9cae01480e29327214093d392c075dea010ed451d"
	},
	{
		"id": "c8e861976f5e",
		"ts": "2026-08-22T06:32:43.373Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152755.51,
		"hash": "c8e861976f5ed8909040ff87ef24851edd96eead972366aabca36c4f312b8a6d"
	},
	{
		"id": "01f8333d497d",
		"ts": "2026-08-22T06:32:43.610Z",
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
		"liquidityUsd": 3593499.19,
		"hash": "01f8333d497d848bc56511d40412a0382d4e086fd73cd596e2f480878a9f9364"
	},
	{
		"id": "0fe4f9f14fe1",
		"ts": "2026-08-22T06:32:43.855Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1237995.03,
		"hash": "0fe4f9f14fe1cdb5dafc18fe04b066a3a50115e77af70267cfa5e13313a4d060"
	},
	{
		"id": "f9f004e5e7a8",
		"ts": "2026-08-22T06:32:44.099Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 829346.45,
		"hash": "f9f004e5e7a85f3ee0d6269420bba03796c3e47e0742a757e808d74c8141f327"
	},
	{
		"id": "7ff6fc9752b9",
		"ts": "2026-08-22T06:32:44.324Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1886277.51,
		"hash": "7ff6fc9752b94bb78f774237e5d9650f011ca26688eb7476df4553fb21d57c18"
	},
	{
		"id": "268194449b79",
		"ts": "2026-08-22T06:32:44.540Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11540604.52,
		"hash": "268194449b79a26d3b12bf3bcdc1860743f3268b162d0eae2c8761f462f26b3f"
	},
	{
		"id": "ce78bb814277",
		"ts": "2026-08-22T06:32:44.766Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 87718.07,
		"hash": "ce78bb814277851096fea38672ce08d48d121caba2572473463eb088da1f4b1d"
	},
	{
		"id": "0ae53e733e83",
		"ts": "2026-08-22T06:32:45.054Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 537667.37,
		"hash": "0ae53e733e83147a31eb96ae09834e71d8fb167a0a0b80028fbb2d48c62120d5"
	},
	{
		"id": "b0558c3f6a0b",
		"ts": "2026-08-22T06:32:45.481Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3380993.84,
		"hash": "b0558c3f6a0bb29f4b4d87325eed69740b38f7d6b3ec8b78d6e5c24b8223f6c1"
	},
	{
		"id": "981f527f15da",
		"ts": "2026-08-22T06:32:45.697Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 366881.5,
		"hash": "981f527f15da8087c58f8483d50802aa937f5d8bd9e33266c2f4e764cdb60e5c"
	},
	{
		"id": "cfe8775f082a",
		"ts": "2026-08-22T06:32:45.923Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 656670.68,
		"hash": "cfe8775f082ae0118294416487307730b8ed1edf13c91606fa4b4619fc19b5ab"
	},
	{
		"id": "1acda44439ca",
		"ts": "2026-08-22T06:32:46.147Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 542657.96,
		"hash": "1acda44439caf6ae5bf2d44cef7744a702b3548d0b5333812739f084d854b469"
	},
	{
		"id": "b271d1c5e4f0",
		"ts": "2026-08-22T06:32:46.363Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 738420.45,
		"hash": "b271d1c5e4f09b88ead0a4aa9110d1aa69e9efc49948871a2ac33fca950c4490"
	},
	{
		"id": "b4e8e0fac13d",
		"ts": "2026-08-22T05:22:25.978Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109401757.03,
		"hash": "b4e8e0fac13d961782f908bf77ae843e0ef85918403cbb0a9dc5593273e0a501"
	},
	{
		"id": "1fc40565258a",
		"ts": "2026-08-22T05:22:26.398Z",
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
		"liquidityUsd": 13596170.26,
		"hash": "1fc40565258a59859861383b1c66d4e7d0bff18cc8d090dfc4692e4f4c993780"
	},
	{
		"id": "eaed28d11147",
		"ts": "2026-08-22T05:22:26.602Z",
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
		"liquidityUsd": 910257.33,
		"hash": "eaed28d111474b2ba5a3b3b717a84a5acf308b8237c1183f36339f69a3f94789"
	},
	{
		"id": "faaddc6b3b45",
		"ts": "2026-08-22T05:22:26.791Z",
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
		"liquidityUsd": 27928707.94,
		"hash": "faaddc6b3b4581191a7c64b81728b4d9ef73f666a58b0f6fba3b932ef273e1d1"
	},
	{
		"id": "e8a6635bd64a",
		"ts": "2026-08-22T05:22:26.981Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "e8a6635bd64a028b912885bcdc3b4ffe0fd1637050ec01ea433b90216749dd2e"
	},
	{
		"id": "239b608b9245",
		"ts": "2026-08-22T05:22:27.179Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1176985.36,
		"hash": "239b608b9245b3354f633dea306bd494bc23d5340a87e07028202fbaa1da29ff"
	},
	{
		"id": "ce7b16940608",
		"ts": "2026-08-22T05:22:27.368Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152748.25,
		"hash": "ce7b169406080584767dbcf4eb89473afc3d8f9af31acf6a831d5524d0d0c421"
	},
	{
		"id": "4ecd0365833c",
		"ts": "2026-08-22T05:22:27.714Z",
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
		"liquidityUsd": 3611768.56,
		"hash": "4ecd0365833c4b0bdfb23ea87d5625d929c94b35535f991e03727b2bf370332e"
	},
	{
		"id": "0a163b5504f3",
		"ts": "2026-08-22T05:22:27.899Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1164199.11,
		"hash": "0a163b5504f33aeca19d6d162082107e5932553b1b9c22a84321e17a248be869"
	},
	{
		"id": "28e5d6042bb1",
		"ts": "2026-08-22T05:22:28.091Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 809503.33,
		"hash": "28e5d6042bb139eb719bbc2cc223214ffa072dfd40119b25a9d4677255235dc6"
	},
	{
		"id": "0b99dccc6e8f",
		"ts": "2026-08-22T05:22:28.275Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1857752.11,
		"hash": "0b99dccc6e8f2cf5dfd53fddc989dc4bb51715240aeab4348cbcd023c9ae3b5c"
	},
	{
		"id": "e1e4c22a7a76",
		"ts": "2026-08-22T05:22:28.463Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11592438.78,
		"hash": "e1e4c22a7a76ee5277235b27b05c97fdcde15c5c7a0815e2bc4b94ded889e0b5"
	},
	{
		"id": "bc6571373b83",
		"ts": "2026-08-22T05:22:28.805Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3318044.42,
		"hash": "bc6571373b83e7df7c2f45a9f73d4673a03ab7566d1ceab877105abb5892bf73"
	},
	{
		"id": "5d001c74acbd",
		"ts": "2026-08-22T05:22:28.991Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 76484.46,
		"hash": "5d001c74acbd3928afd5d65142eafc634e513fbe7ca56664690becdeee4cc0ce"
	},
	{
		"id": "aefac1db07ab",
		"ts": "2026-08-22T05:22:29.195Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 520931.91,
		"hash": "aefac1db07ab7b903b769e1535534f85bc25495b02ddb19426e7eaac7e3ebb85"
	},
	{
		"id": "6ef221eb9d26",
		"ts": "2026-08-22T05:22:29.402Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 368929,
		"hash": "6ef221eb9d264bc3213ffd5801965c6b3ff00a83fe73bf583e2df4be1832a404"
	},
	{
		"id": "9fa421b7bf8a",
		"ts": "2026-08-22T05:22:29.599Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 659522.42,
		"hash": "9fa421b7bf8a90e5b85fd22bdc5195a37420ddaaeb6f21595fcffdb42687e0c0"
	},
	{
		"id": "7095411ebd19",
		"ts": "2026-08-22T05:22:30.112Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 742113.21,
		"hash": "7095411ebd19639d94def7072d612c7b1d5b591477c4afed7339ba2fa02e8ab7"
	},
	{
		"id": "c2f587f01ae9",
		"ts": "2026-08-22T05:22:30.664Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 423997.06,
		"hash": "c2f587f01ae9d0ea97dda67fbc78d21d5fce8e07d8fd178239bd0986d9043b2a"
	},
	{
		"id": "62fdf147d581",
		"ts": "2026-08-22T04:28:26.380Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110620040.93,
		"hash": "62fdf147d5810b6446761c631bce6019e20638b5ebfa9f6e51af9e149f48d5da"
	},
	{
		"id": "887dabf9b67f",
		"ts": "2026-08-22T04:28:26.647Z",
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
		"liquidityUsd": 13970857.76,
		"hash": "887dabf9b67f8f6c308cc3ccf30787676f0017c78a1afea52322b5208771343e"
	},
	{
		"id": "dfb6a4fd03d4",
		"ts": "2026-08-22T04:28:27.106Z",
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
		"liquidityUsd": 944764.55,
		"hash": "dfb6a4fd03d485a85780e38c6ebee2a1a3048b4c37a0fdc2bcb66dfaae11ab0e"
	},
	{
		"id": "162662c828c5",
		"ts": "2026-08-22T04:28:27.338Z",
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
		"liquidityUsd": 28521784.88,
		"hash": "162662c828c558bea44444d00361f7a5f156ee2c5656f2127a8457bd4146364e"
	},
	{
		"id": "7a1e47dad242",
		"ts": "2026-08-22T04:28:27.587Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "7a1e47dad24205813270dcb8759f6be779c55e34c407560f8c008fdb03c4934f"
	},
	{
		"id": "908ae3f1d2d9",
		"ts": "2026-08-22T04:28:27.822Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1248954.68,
		"hash": "908ae3f1d2d9c4fa4aa19b013501870ff249ca37d4c5f0d8d0245e03ba902bb0"
	},
	{
		"id": "a318c5deb0d4",
		"ts": "2026-08-22T04:28:28.067Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152749.2,
		"hash": "a318c5deb0d4dba599ababc9cd059b83bbce78f27b4cbd5bd53ae1284a4546bf"
	},
	{
		"id": "43e9ff7b5810",
		"ts": "2026-08-22T04:28:28.310Z",
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
		"liquidityUsd": 3721369.94,
		"hash": "43e9ff7b58107a15c895c3fc2ed36c133c2f2a6c1adc93644765d051a0297a62"
	},
	{
		"id": "89a2da346e37",
		"ts": "2026-08-22T04:28:28.548Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 861485.9,
		"hash": "89a2da346e37543b194ac61406113eef489d693a5d8eebad8e22c83f609122ab"
	},
	{
		"id": "39dc8a6f543d",
		"ts": "2026-08-22T04:28:29.545Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1236117.94,
		"hash": "39dc8a6f543dbbc5e70cffce4c7f4a0cbb1a9208a4a219c140eb3c2ce9eb77a4"
	}
]
