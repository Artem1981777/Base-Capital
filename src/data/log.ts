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
	"updatedAt": "2026-08-05T06:29:21.285Z",
	"tokensScored": 7444,
	"verdictsIssued": 7444,
	"safe": 6460,
	"risky": 573,
	"likelyRug": 411,
	"ticks": 453
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "ff5b676c394d",
		"ts": "2026-08-05T06:29:16.390Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112911458.66,
		"hash": "ff5b676c394d2d4cc3b7cd4ff44807d0c2a782ea999cfffeb55c1c8a6c001bcf"
	},
	{
		"id": "3c126d8ebeae",
		"ts": "2026-08-05T06:29:16.897Z",
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
		"liquidityUsd": 17228104.84,
		"hash": "3c126d8ebeaee72257ecb913dde55343c610355192d41d7b7209721c0cdd8bba"
	},
	{
		"id": "3a31fa6af00f",
		"ts": "2026-08-05T06:29:17.388Z",
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
		"liquidityUsd": 1024234.24,
		"hash": "3a31fa6af00fe2b9aaaa2f991b7507e017e3df61f96d7ba08faeed843d77f8b1"
	},
	{
		"id": "b2ad44fc9997",
		"ts": "2026-08-05T06:29:17.655Z",
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
		"liquidityUsd": 25333155.13,
		"hash": "b2ad44fc999756290f70feffff317e5a55d4beb5987eff9fd8e300baf5cff089"
	},
	{
		"id": "d568f8931528",
		"ts": "2026-08-05T06:29:18.155Z",
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
		"liquidityUsd": 4394798.78,
		"hash": "d568f8931528a018134498f1a322980506c998fc4e18e7402900c87da50467f4"
	},
	{
		"id": "1b588922163e",
		"ts": "2026-08-05T06:29:18.424Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 925141.04,
		"hash": "1b588922163e0c629e4b35eec3787cf20f3e88abfb22c52e53a9f51026f8e830"
	},
	{
		"id": "1de74004ba50",
		"ts": "2026-08-05T06:29:18.690Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25333155.13,
		"hash": "1de74004ba507b55e3e91d3b68a0e7d70da6ba3613ab4baa3afd141d3bb25d8b"
	},
	{
		"id": "2ad9b064f85f",
		"ts": "2026-08-05T06:29:18.975Z",
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
		"liquidityUsd": 3467666.09,
		"hash": "2ad9b064f85fa1d94685fe507f5748b51decc1fcfdd3129835ac844b99c8cb2e"
	},
	{
		"id": "33e84d0fbdb1",
		"ts": "2026-08-05T06:29:19.250Z",
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
		"liquidityUsd": 1053420.33,
		"hash": "33e84d0fbdb1a1a0301478a9938da247bac8188cce8ddf1973fbfe87ec3af022"
	},
	{
		"id": "88dea84e6cbc",
		"ts": "2026-08-05T06:29:19.537Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 71541.79,
		"hash": "88dea84e6cbc13d9ffaec9c4e1e25bc15f39d35024f04322975311694af777e5"
	},
	{
		"id": "fc633aa9deca",
		"ts": "2026-08-05T06:29:19.788Z",
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
		"liquidityUsd": 283405.22,
		"hash": "fc633aa9deca141f98f62f1ab17ada942a9585acbada15b3914bdb5608cbb016"
	},
	{
		"id": "b43688c85985",
		"ts": "2026-08-05T06:29:20.040Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 888934.56,
		"hash": "b43688c85985da287e31a8519736b6251b0ca9c899a5c046bffb12435f498aae"
	},
	{
		"id": "62ebe582f7fa",
		"ts": "2026-08-05T06:29:20.289Z",
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
		"liquidityUsd": 1929107.19,
		"hash": "62ebe582f7fad86516822415d1ae8d37c1e106fde465df05f48227bedc64c66d"
	},
	{
		"id": "a905e269ea71",
		"ts": "2026-08-05T06:29:20.542Z",
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
		"liquidityUsd": 1450838.11,
		"hash": "a905e269ea71671c14aecaca9de725b19114b0da2fedf3de59bcabc16fbce0e3"
	},
	{
		"id": "5826c9b37ad0",
		"ts": "2026-08-05T06:29:20.791Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4266988.12,
		"hash": "5826c9b37ad07be6916659d3a20d880154f2de7257c45b1c2fb1580db2f997bd"
	},
	{
		"id": "40ce6e02b041",
		"ts": "2026-08-05T06:29:21.041Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1914058.06,
		"hash": "40ce6e02b0417fafaa9e00f8849dab26958e39fe9b309c18e72ab97a835c9d41"
	},
	{
		"id": "cb4e29fd5a63",
		"ts": "2026-08-05T06:29:21.285Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 456460.09,
		"hash": "cb4e29fd5a635a8d07a01c919b634488df47a9acb8370898bd1f2102a72f31cb"
	},
	{
		"id": "934a64c1c8e6",
		"ts": "2026-08-05T03:57:19.843Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112756838.18,
		"hash": "934a64c1c8e6815f37214b9d712357601918d180006bf99d619d23e24c66f2d6"
	},
	{
		"id": "05dc918be429",
		"ts": "2026-08-05T03:57:20.344Z",
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
		"liquidityUsd": 16815441.21,
		"hash": "05dc918be429fee3da2eb5304e877dc5c6b08ebde4a1d5fa7bbd615e6af0d2c2"
	},
	{
		"id": "26efd6a393c5",
		"ts": "2026-08-05T03:57:20.624Z",
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
		"liquidityUsd": 1023756.33,
		"hash": "26efd6a393c5b6d6514a730ac07db81b52f51e87cca6379ec61728ee493610bf"
	},
	{
		"id": "575c414085af",
		"ts": "2026-08-05T03:57:20.887Z",
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
		"liquidityUsd": 25135692.49,
		"hash": "575c414085afec1377dbb1ecb764ae581fd56782106af7af43cad3479bbb6a52"
	},
	{
		"id": "a3c25ca6603d",
		"ts": "2026-08-05T03:57:21.163Z",
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
		"liquidityUsd": 4364794.67,
		"hash": "a3c25ca6603d15f1ae1cd3b82f8d3ca86c4c767c6d9ea10793a4b59bc1db9c32"
	},
	{
		"id": "f23609815ece",
		"ts": "2026-08-05T03:57:21.426Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 907442.74,
		"hash": "f23609815ece6742042062eac018c2599fecf2cbc1c36679757717cb3876fd47"
	},
	{
		"id": "d8d4d34aebf1",
		"ts": "2026-08-05T03:57:21.687Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25135692.49,
		"hash": "d8d4d34aebf17cfb8944556e08284eaad2e2729c169b46cd731957ebcdf6333a"
	},
	{
		"id": "73b5afe2c690",
		"ts": "2026-08-05T03:57:21.954Z",
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
		"liquidityUsd": 3462955.33,
		"hash": "73b5afe2c6909c2f9078c5b6ff3ab078217384d5bb10646cb63cb1f6bab552e3"
	},
	{
		"id": "8cecdfe09752",
		"ts": "2026-08-05T03:57:22.216Z",
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
		"liquidityUsd": 1063338.82,
		"hash": "8cecdfe097529fc44047078ea5377bdd3181d3495b689ab490399020eec484ad"
	},
	{
		"id": "0b2ef8c77ba7",
		"ts": "2026-08-05T03:57:22.477Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 73698.61,
		"hash": "0b2ef8c77ba78e8b72268a7c433965de7c2ad5626f367ed6ccd51f516cc7bef6"
	},
	{
		"id": "f490c4772d39",
		"ts": "2026-08-05T03:57:22.725Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1908588.77,
		"hash": "f490c4772d398a0129b88d4d59ed8782a7786061009b1521675a0c97e6e1079a"
	},
	{
		"id": "cf6957756ffe",
		"ts": "2026-08-05T03:57:22.971Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 280668.95,
		"hash": "cf6957756ffefc5fc67d6680b860dac77f8a7d523d8b55c3d2f1de8ded58acb7"
	},
	{
		"id": "1fe17b848202",
		"ts": "2026-08-05T03:57:23.216Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1943743.46,
		"hash": "1fe17b848202b1cd9ca75ea34ed391cbf5fd28239a32532db7e43b48396e45c0"
	},
	{
		"id": "2ddf4abfaef5",
		"ts": "2026-08-05T03:57:23.463Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4262409.12,
		"hash": "2ddf4abfaef57532ed08290ea283b1238295897a548e4c27c89a4d6fe36a8231"
	},
	{
		"id": "afefb84779b4",
		"ts": "2026-08-05T03:57:23.707Z",
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
		"liquidityUsd": 1493450.42,
		"hash": "afefb84779b44a09bf4fe6156a40aecf2ba868da4b0fa92614dd110a64e4413a"
	},
	{
		"id": "18054d8a9731",
		"ts": "2026-08-05T03:57:23.955Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3214147.36,
		"hash": "18054d8a9731244a049eb4dc474bc6d5f191757704cdd102b698462a1942b3ff"
	},
	{
		"id": "ed9a30801a62",
		"ts": "2026-08-05T03:57:24.203Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 457259.37,
		"hash": "ed9a30801a62aedebda92b95a1425fe959f47007de15a7912fce2ef42788694b"
	},
	{
		"id": "bb3c6be562bf",
		"ts": "2026-08-05T00:11:12.219Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112920340.26,
		"hash": "bb3c6be562bf71184e1d2745ba38dddd6e4d22849cd0b2480f7e24933accbbe6"
	},
	{
		"id": "a52cc9a0b6d3",
		"ts": "2026-08-05T00:11:12.623Z",
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
		"liquidityUsd": 17807128.72,
		"hash": "a52cc9a0b6d38de69a84eb88e11a2e4ff8b12d3586df008c5a607e91981bc507"
	},
	{
		"id": "6b0a3a77bf24",
		"ts": "2026-08-05T00:11:13.008Z",
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
		"liquidityUsd": 1029420.85,
		"hash": "6b0a3a77bf245b005fc7cfb794928cb6c6768223f340be6bf222766aa6483b3c"
	},
	{
		"id": "0a9df6f56fe7",
		"ts": "2026-08-05T00:11:13.402Z",
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
		"liquidityUsd": 25180546.6,
		"hash": "0a9df6f56fe710a2d7318184c7af8bc2059ecbe0ac98a120ce79a1845f617044"
	},
	{
		"id": "2449a3c072fe",
		"ts": "2026-08-05T00:11:13.787Z",
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
		"liquidityUsd": 4387190.62,
		"hash": "2449a3c072fe611c4b28f8070f4e1ed48f6216316a85dea12a84564c7d388146"
	},
	{
		"id": "66f8dca72f4b",
		"ts": "2026-08-05T00:11:14.005Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 916611.1,
		"hash": "66f8dca72f4bb7b662069f7b551f587b3cfd0bf9801d1c912e77576562bbd929"
	},
	{
		"id": "f457bd5e55e6",
		"ts": "2026-08-05T00:11:14.230Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25180546.6,
		"hash": "f457bd5e55e66b6421f78459bb8e9e6ffd978d023fb80cf1482ee93e9a5ef5be"
	},
	{
		"id": "fcddce93768d",
		"ts": "2026-08-05T00:11:14.465Z",
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
		"liquidityUsd": 3464521.79,
		"hash": "fcddce93768d2d6645a6acdf6f7f8397500e570d07e3c480af0e84e5412c08fa"
	},
	{
		"id": "a24ed42dec68",
		"ts": "2026-08-05T00:11:14.723Z",
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
		"liquidityUsd": 1110325.98,
		"hash": "a24ed42dec68477b079f6d936c92f12b53b3bde4a12adff5fcac0f2ffa132d68"
	},
	{
		"id": "8f19ec350b9b",
		"ts": "2026-08-05T00:11:14.966Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 77844.84,
		"hash": "8f19ec350b9b3e3340173051d0f4137fda57ec5284869f19be0d5bfb7011014b"
	},
	{
		"id": "f6d036051188",
		"ts": "2026-08-05T00:11:15.194Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 280572.01,
		"hash": "f6d036051188bfbc99d016be6a375b90b3f0f508947ab7046c5800d37d845220"
	},
	{
		"id": "7f0f2c636bd9",
		"ts": "2026-08-05T00:11:15.423Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1897390.75,
		"hash": "7f0f2c636bd98234b7b54249feb25e528e402fc00220128587fc198c444396e2"
	},
	{
		"id": "50aa3568257d",
		"ts": "2026-08-05T00:11:15.672Z",
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
		"liquidityUsd": 1499848.65,
		"hash": "50aa3568257dfcf2adeec0b67e03888c2d161377230d3b651e2109dce7c0a891"
	},
	{
		"id": "e16eea7e0e25",
		"ts": "2026-08-05T00:11:15.878Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2001248.27,
		"hash": "e16eea7e0e25bb3881cf08825faa314c9ae2074491015298db9548209072afdc"
	},
	{
		"id": "8426b2df2303",
		"ts": "2026-08-05T00:11:16.088Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4296229.59,
		"hash": "8426b2df2303d38134f7f6d5d026dcb2d19f042b154e4603e18ac0f218bbb440"
	},
	{
		"id": "78a812ca269d",
		"ts": "2026-08-05T00:11:16.310Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3130078.94,
		"hash": "78a812ca269df1787ddf2b3cdd90251cebeea77674067221ab40ac80bf1815ad"
	},
	{
		"id": "e7cb4d5d4a17",
		"ts": "2026-08-05T00:11:16.529Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9309727.49,
		"hash": "e7cb4d5d4a1735a6c3e8e2042a9c34d3170129eea4bbd5c016c82d1b302802de"
	},
	{
		"id": "c98b9a3dc84f",
		"ts": "2026-08-04T22:59:35.747Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112936481.61,
		"hash": "c98b9a3dc84f18216ae6f94e6d89bec0fa4440cef9a9bd7d4428bbbc38f61659"
	},
	{
		"id": "e31f54c470f7",
		"ts": "2026-08-04T22:59:36.023Z",
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
		"liquidityUsd": 17481708.29,
		"hash": "e31f54c470f749251bb2551d3b2e331ee2bbe4167cf0f2ed007f463cfb717af1"
	},
	{
		"id": "644ef1bc5eec",
		"ts": "2026-08-04T22:59:36.296Z",
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
		"liquidityUsd": 1031562.72,
		"hash": "644ef1bc5eec969484d2ee44301a509cbee8e2f7f092eaa8bb509f9e98a87353"
	},
	{
		"id": "844d3250df45",
		"ts": "2026-08-04T22:59:36.586Z",
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
		"liquidityUsd": 25239472.08,
		"hash": "844d3250df4551bb0c3c61d7c02d79a27435f92b403de2bb5cff012b68542d6b"
	},
	{
		"id": "ccbb76ef7717",
		"ts": "2026-08-04T22:59:36.852Z",
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
		"liquidityUsd": 4387190.62,
		"hash": "ccbb76ef7717c145104f1dde3bbff0f4b4801605beb2857d846c360478be1d1b"
	},
	{
		"id": "85368f0d5323",
		"ts": "2026-08-04T22:59:37.122Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 921697.89,
		"hash": "85368f0d53238547812dc433998a86905df7358119fc430be79d6dc3c46a37a3"
	},
	{
		"id": "78d3e02a081f",
		"ts": "2026-08-04T22:59:37.385Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25239472.08,
		"hash": "78d3e02a081ffed385dd1e0fadaca1843b7758cc4d72d4ba788f2b232deea91a"
	},
	{
		"id": "18896d8e53d2",
		"ts": "2026-08-04T22:59:37.658Z",
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
		"liquidityUsd": 3477257.34,
		"hash": "18896d8e53d22a33034b13c531311055cccf7366c8c48fafb2e9958eae24f9e3"
	},
	{
		"id": "d5bf5bdf18b6",
		"ts": "2026-08-04T22:59:37.930Z",
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
		"liquidityUsd": 1108778.39,
		"hash": "d5bf5bdf18b6f24a4f0fc9fd32e77b2a8e1f65c896543b5c1abf386308207047"
	},
	{
		"id": "c16d5d4d3811",
		"ts": "2026-08-04T22:59:38.207Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 79127.43,
		"hash": "c16d5d4d38119afc94cbfa0e5d91c069910e85003cce8843e75b9f69d5a31f68"
	},
	{
		"id": "dfb62574af60",
		"ts": "2026-08-04T22:59:38.455Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 278323.78,
		"hash": "dfb62574af608fe2a5fd0c28484a4c396e3932d94f33caafd390d3020e89e417"
	},
	{
		"id": "fc12762d1b87",
		"ts": "2026-08-04T22:59:38.704Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1912365.5,
		"hash": "fc12762d1b879ef741d0ab659823f20db8facabf362ff8c9a8a2bd254a772f76"
	},
	{
		"id": "e22f464cd4dd",
		"ts": "2026-08-04T22:59:38.957Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 963645.8,
		"hash": "e22f464cd4dded2e1287a3179c2f2f0bf92f13af303f98caaf71558afb5cb4fb"
	},
	{
		"id": "3eda84a32fba",
		"ts": "2026-08-04T22:59:39.212Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2120412.54,
		"hash": "3eda84a32fba3560610932d1cff21928e7b8a67dc7b5b55e0e6722891ea59164"
	},
	{
		"id": "549099a2b575",
		"ts": "2026-08-04T22:59:39.463Z",
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
		"liquidityUsd": 1468893.77,
		"hash": "549099a2b5751b5abb5f6ee84e4a9b3673623129164f84105797f5975a197b5b"
	},
	{
		"id": "e955014b885b",
		"ts": "2026-08-04T22:59:39.714Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3131521.62,
		"hash": "e955014b885b4095cacc7184857b52d3d50e5aa245bdc6cac47793be9eb864b6"
	},
	{
		"id": "18e8028f7574",
		"ts": "2026-08-04T22:59:39.964Z",
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
		"liquidityUsd": 693988.18,
		"hash": "18e8028f7574cab495f0cb4c5177dd726af8d9c2b9b344c5aca28450d0f6b1d1"
	},
	{
		"id": "1206583e2ed9",
		"ts": "2026-08-04T21:08:12.543Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112927754.36,
		"hash": "1206583e2ed9ddeb3412c97e30dd6654c1af7c44a6b749493e200299fb1775f2"
	},
	{
		"id": "d7655aa4abbd",
		"ts": "2026-08-04T21:08:12.896Z",
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
		"liquidityUsd": 15561021.68,
		"hash": "d7655aa4abbd1823b4524d2500934ffa5d49006ec841c5e3c0e03083db1714bd"
	},
	{
		"id": "70da9d5d4b18",
		"ts": "2026-08-04T21:08:13.106Z",
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
		"liquidityUsd": 1031562.72,
		"hash": "70da9d5d4b188ef0b70323343edbe871a4eb7b581cdbbfa1db04acc274d0f384"
	},
	{
		"id": "f9a1b7b78529",
		"ts": "2026-08-04T21:08:13.307Z",
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
		"liquidityUsd": 25236699.01,
		"hash": "f9a1b7b78529263451263c208f326a520da9788661afff4397ac91aaaafae072"
	},
	{
		"id": "a8e140e949bb",
		"ts": "2026-08-04T21:08:13.518Z",
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
		"liquidityUsd": 4383011.59,
		"hash": "a8e140e949bbb3bdf05cfe7a820c98f8523a94463efa6aacd247595b7098fd46"
	},
	{
		"id": "833cf1fb6b1c",
		"ts": "2026-08-04T21:08:13.835Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 921697.89,
		"hash": "833cf1fb6b1c7c7e107304d406aa43d4c9b93b86592fef0bdba7e4f0a716d0bf"
	},
	{
		"id": "15b96846437d",
		"ts": "2026-08-04T21:08:14.034Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25236699.01,
		"hash": "15b96846437d4c1645dbe08ca83d46ff925115805eac08dbd8b129b627c35fee"
	},
	{
		"id": "44bf23215e21",
		"ts": "2026-08-04T21:08:14.253Z",
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
		"liquidityUsd": 3479146.83,
		"hash": "44bf23215e21f0c1f29d41180d212ba161204a67201bdff25b0756dec627026f"
	},
	{
		"id": "9fede506f972",
		"ts": "2026-08-04T21:08:14.454Z",
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
		"liquidityUsd": 1076888.74,
		"hash": "9fede506f9729729ea59fc3f788449755d31cff56fab2681288bae63191439a6"
	},
	{
		"id": "870ca622b4bf",
		"ts": "2026-08-04T21:08:14.652Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 79823.65,
		"hash": "870ca622b4bf6e5be05d83c3178630f2c2583b95300170733693d676f63ca8d9"
	},
	{
		"id": "b5c11222f945",
		"ts": "2026-08-04T21:08:15.001Z",
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
		"liquidityUsd": 283287.61,
		"hash": "b5c11222f94583a3a85e4793fc5133e927708758f4061772701d7dbedb8d17c1"
	},
	{
		"id": "d98524fc016d",
		"ts": "2026-08-04T21:08:15.202Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1891825.61,
		"hash": "d98524fc016d633f60caf09471656f38636a5fc1c6144f53184574a7e4002331"
	},
	{
		"id": "9a5e3f565f16",
		"ts": "2026-08-04T21:08:15.411Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 990648.34,
		"hash": "9a5e3f565f1617598d445fe3dfc55a8bf17e9f16bccdd198c87a9a28a4ccecf8"
	},
	{
		"id": "e1626956ce26",
		"ts": "2026-08-04T21:08:15.606Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2083045.79,
		"hash": "e1626956ce268bc28c45aa1a396406134d1efc4cf44532e937a41e1e736f8b33"
	},
	{
		"id": "270467e5b36e",
		"ts": "2026-08-04T21:08:15.802Z",
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
		"liquidityUsd": 1447527.95,
		"hash": "270467e5b36e6bfa5b11e0ce2f6c297f4c612c319554ed7e054fccf8e7d1eb2d"
	},
	{
		"id": "d36545e92f40",
		"ts": "2026-08-04T21:08:16.278Z",
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
		"liquidityUsd": 689663.74,
		"hash": "d36545e92f40760b8df9c50fb295ad49b43f7f2b13b227d82096b3afeb9c9a62"
	},
	{
		"id": "598dd012aa0a",
		"ts": "2026-08-04T21:08:16.488Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3140532.21,
		"hash": "598dd012aa0aea353df14641c350cb343ca2058dc610a60d38c5e599ddc5304b"
	},
	{
		"id": "b952efb4ed80",
		"ts": "2026-08-04T19:26:22.566Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112976163.59,
		"hash": "b952efb4ed8074f64b318633f883e7aab9eb151584e9463c34a9891cc27952bb"
	},
	{
		"id": "8d21f6d0ccab",
		"ts": "2026-08-04T19:26:22.838Z",
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
		"liquidityUsd": 17016433.18,
		"hash": "8d21f6d0ccab9cbf51bc5a1677562ecc9dcc7d34c596dc34560e1f2ec292caf0"
	},
	{
		"id": "fcf6c9c689e3",
		"ts": "2026-08-04T19:26:23.332Z",
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
		"liquidityUsd": 1031562.72,
		"hash": "fcf6c9c689e35b0d7b0a9246b8c702217190c6c3034796106328ee6e2d32296b"
	},
	{
		"id": "13b1979a70ff",
		"ts": "2026-08-04T19:26:23.614Z",
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
		"liquidityUsd": 25185190.91,
		"hash": "13b1979a70ff43e69e9718e82d5ea3b5df242e1da275c41693797d72544563e9"
	},
	{
		"id": "287757020c33",
		"ts": "2026-08-04T19:26:23.875Z",
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
		"liquidityUsd": 4397196.76,
		"hash": "287757020c33859baac1323aae04cd72c15aa63fc3241af27b36f01f562b3dc7"
	},
	{
		"id": "fe3a0b2dae05",
		"ts": "2026-08-04T19:26:24.139Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 915470.11,
		"hash": "fe3a0b2dae05d02e4041f162f84aaa0b763104d162cb4afc32de64618951ff6e"
	},
	{
		"id": "d9108283f2d5",
		"ts": "2026-08-04T19:26:24.407Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25185190.91,
		"hash": "d9108283f2d5d2e64025ec479d027e06c5c79b2baa4df7b03e6797845e19d9de"
	},
	{
		"id": "4a9337f6f3a8",
		"ts": "2026-08-04T19:26:24.669Z",
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
		"liquidityUsd": 3481623.04,
		"hash": "4a9337f6f3a8ed3ac6fd13a15112b8b9f35ec3dedf73738ccc2c94777a3e1a99"
	},
	{
		"id": "70f7bc4da954",
		"ts": "2026-08-04T19:26:24.934Z",
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
		"liquidityUsd": 1068454.74,
		"hash": "70f7bc4da954d49ef3347e3c579c7b385593bee11b6a8cba23367b50f6749f48"
	},
	{
		"id": "65644e3bb9c3",
		"ts": "2026-08-04T19:26:25.198Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 80221.68,
		"hash": "65644e3bb9c3448fc0d063bf59a8c4b527e76b35b4b7cefc541353de8ef66319"
	},
	{
		"id": "1268bfa48dda",
		"ts": "2026-08-04T19:26:25.447Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 970206.55,
		"hash": "1268bfa48ddada8d07884ae4abbfe3dd095dd06b8bd5f88563856e80b17e9502"
	},
	{
		"id": "3c903ae9f0d1",
		"ts": "2026-08-04T19:26:25.698Z",
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
		"liquidityUsd": 284756.85,
		"hash": "3c903ae9f0d10432102f0d64ecc45b9aaaa7c2ac06b9109c539a2e3b5aae8f44"
	},
	{
		"id": "76f57c9d5d74",
		"ts": "2026-08-04T19:26:25.943Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1890372.86,
		"hash": "76f57c9d5d74b5c2c379880614200414444108bdae574120c8b8da8c1d96aaef"
	},
	{
		"id": "0cd5317bf950",
		"ts": "2026-08-04T19:26:26.192Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1959788.92,
		"hash": "0cd5317bf950592b570f1cc094d5fd5e2c1d3a762640876851803c6eacc5ad17"
	},
	{
		"id": "7a5512f57ef2",
		"ts": "2026-08-04T19:26:26.776Z",
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
		"liquidityUsd": 1450861.06,
		"hash": "7a5512f57ef28ccbc1492ff74eff10012a970967a6d9270c9408077e7fc9c435"
	},
	{
		"id": "d7a414ab3e5b",
		"ts": "2026-08-04T19:26:27.019Z",
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
		"liquidityUsd": 688340.08,
		"hash": "d7a414ab3e5b72939c5a0c61d03df29bd6726778debf161f8e538819f27ff454"
	},
	{
		"id": "f0b76d7242b1",
		"ts": "2026-08-04T19:26:27.265Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1688713.03,
		"hash": "f0b76d7242b1383da0507aca07866c5010457cdd89a7a74b3cf82f1fdb226a79"
	},
	{
		"id": "b6c2f124722e",
		"ts": "2026-08-04T19:26:27.512Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3186864.59,
		"hash": "b6c2f124722ecac2c25723e6d7ee024f81734343b18385ffb6cf775edf10cffe"
	},
	{
		"id": "1f5db0270d2f",
		"ts": "2026-08-04T17:43:31.081Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112832209.45,
		"hash": "1f5db0270d2f21f3bdc88a13b97b448994fc6f02bd26451d1424fc63189343df"
	},
	{
		"id": "b7914b8617f2",
		"ts": "2026-08-04T17:43:31.357Z",
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
		"liquidityUsd": 16843584.64,
		"hash": "b7914b8617f2caf7a7edc241993c5b58426d57d0934857c8dc8186a0571c7588"
	},
	{
		"id": "49760a997772",
		"ts": "2026-08-04T17:43:31.622Z",
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
		"liquidityUsd": 807505.77,
		"hash": "49760a997772d2eeee163cb942a2fd55dd5f23338f5aed2e586114808ada3524"
	},
	{
		"id": "3bbbccfd8593",
		"ts": "2026-08-04T17:43:31.881Z",
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
		"liquidityUsd": 25073026.13,
		"hash": "3bbbccfd8593887f20b4be50c92bc7f16d62244246e7d387701cc672101133be"
	},
	{
		"id": "7d682dadb0b3",
		"ts": "2026-08-04T17:43:32.146Z",
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
		"liquidityUsd": 4378593.48,
		"hash": "7d682dadb0b394e2a4e529f7751229760297cf2b800fc1a634a9095e4c3c1f2d"
	},
	{
		"id": "e65a8db082ff",
		"ts": "2026-08-04T17:43:32.407Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 906486.78,
		"hash": "e65a8db082ff854911e150606a62693d0656d468d5758dfd1e27514289541b27"
	},
	{
		"id": "c91dfe7039c4",
		"ts": "2026-08-04T17:43:32.679Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25073026.13,
		"hash": "c91dfe7039c4102221a7763946d35034dcefb8b2c98fdecf42d836c2ed1609e1"
	},
	{
		"id": "53eac2f3dd09",
		"ts": "2026-08-04T17:43:32.956Z",
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
		"liquidityUsd": 3477949.1,
		"hash": "53eac2f3dd090cf6b93c20ef5c3de6b88997fcd95be010de30565ca5d0416b1f"
	},
	{
		"id": "6969c1714133",
		"ts": "2026-08-04T17:43:33.212Z",
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
		"liquidityUsd": 1081690.07,
		"hash": "6969c17141333818adcf8814671d9e0b4bd31f2aad079415134f0ed12889e065"
	},
	{
		"id": "c5e7c5568b59",
		"ts": "2026-08-04T17:43:33.474Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 951518.56,
		"hash": "c5e7c5568b596099c51e35461c10652ab78dbcb0520846a7b5e96b605b1b813c"
	},
	{
		"id": "202b2397650c",
		"ts": "2026-08-04T17:43:33.715Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 80959.69,
		"hash": "202b2397650cf73057f425fad730cd48607dec6906bc66af2e27564f5dd26c58"
	},
	{
		"id": "745a36d3b101",
		"ts": "2026-08-04T17:43:33.959Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 284844.43,
		"hash": "745a36d3b10145483c672d863a327bae50f7bd976cb752a0253356462293af4d"
	},
	{
		"id": "870fe57bd113",
		"ts": "2026-08-04T17:43:34.204Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1869092.53,
		"hash": "870fe57bd113a01b305fd1a64b58aa9a2722ce53b3e05881cfe473d4bcb49fd0"
	},
	{
		"id": "60a1aab609ec",
		"ts": "2026-08-04T17:43:34.447Z",
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
		"liquidityUsd": 1473925.47,
		"hash": "60a1aab609ec45d2576ee0175e7a1ff95f719761d1210fcad866bbc170166892"
	},
	{
		"id": "0a0348b44b57",
		"ts": "2026-08-04T17:43:34.709Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1914725.65,
		"hash": "0a0348b44b5718e76cf3c6aab4ba5f1c699b2349a356f4eece4397a26ee9a7ad"
	},
	{
		"id": "dcd1d14b65ef",
		"ts": "2026-08-04T17:43:35.283Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1687163.28,
		"hash": "dcd1d14b65ef701d6b962c613a691f8f5925bc6f78c0b4528472c99888a7e1e6"
	},
	{
		"id": "2f41d2b20c00",
		"ts": "2026-08-04T17:43:35.697Z",
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
		"liquidityUsd": 691312.8,
		"hash": "2f41d2b20c000f49e6544b5eecf750bc3286f6b3d6ba35e6030818199ded4ee5"
	},
	{
		"id": "b14a2c13e703",
		"ts": "2026-08-04T15:26:33.097Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112730129.01,
		"hash": "b14a2c13e703dfa81a4339b58bd4281b73cee4640ca42aa2b8f5919c436645ed"
	},
	{
		"id": "6e1b11ce5f43",
		"ts": "2026-08-04T15:26:33.374Z",
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
		"liquidityUsd": 14090105.66,
		"hash": "6e1b11ce5f43514af1b2debbafec53180ea8b0a092601cfe2aea5297f4da76c4"
	},
	{
		"id": "59734c322b4e",
		"ts": "2026-08-04T15:26:33.666Z",
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
		"liquidityUsd": 343343.56,
		"hash": "59734c322b4ee9735af47792488ff6fce2ce5b56c22a30e166c0bf9f1c8155aa"
	},
	{
		"id": "21db97121e34",
		"ts": "2026-08-04T15:26:33.954Z",
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
		"liquidityUsd": 25047917.1,
		"hash": "21db97121e349e9b6e27ead38499a6e6a5e95cd23e09c480d633818c71b0e2ba"
	},
	{
		"id": "22120eda3476",
		"ts": "2026-08-04T15:26:34.256Z",
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
		"liquidityUsd": 4372573.63,
		"hash": "22120eda3476d2f1bd672db5bd548d98f56803999c38617cf939fa01fd2f6da8"
	},
	{
		"id": "82d8340ba3ff",
		"ts": "2026-08-04T15:26:34.527Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 902319.18,
		"hash": "82d8340ba3ff9beec8227597af70a5e321a76001f545301f8bbb007ded32046d"
	},
	{
		"id": "63651582282c",
		"ts": "2026-08-04T15:26:34.831Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25047917.1,
		"hash": "63651582282c1eaf8ea1af6a3e3be0a5e45ed2719a538ba30399ddbb95bf1663"
	},
	{
		"id": "86bfc0bd074f",
		"ts": "2026-08-04T15:26:35.204Z",
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
		"liquidityUsd": 3463188.29,
		"hash": "86bfc0bd074f1505d940dfedf14c9b0a9e11b22fd38d25fb6354f2cf4f0d6728"
	},
	{
		"id": "7117badba835",
		"ts": "2026-08-04T15:26:35.500Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1095939.26,
		"hash": "7117badba835fc53d061579e8051f14a9cfaf4503a40496e99b977b24f5559c2"
	},
	{
		"id": "ccd15b7ea7b0",
		"ts": "2026-08-04T15:26:35.822Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 975924.32,
		"hash": "ccd15b7ea7b0abbd31bf9afee84654f0123753f833255238cd2eff265e727b80"
	},
	{
		"id": "9c3e3bb47540",
		"ts": "2026-08-04T15:26:36.070Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 286737.8,
		"hash": "9c3e3bb47540a2db2c59e378e7e80ca79c7ef7cbdf4fcbe3e2db899ecd3ecf97"
	},
	{
		"id": "5c8fa7c7d095",
		"ts": "2026-08-04T15:26:36.320Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 85045.2,
		"hash": "5c8fa7c7d095ceb02543bdfa0e8aa13bd0ec6bab1e4327d6a72698e38bea6ec2"
	},
	{
		"id": "8723a3d06e64",
		"ts": "2026-08-04T15:26:36.571Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1911061.18,
		"hash": "8723a3d06e64fff6cbaf9c5b41f6562e7abfbcbfa137754973eaaf65e663a125"
	},
	{
		"id": "0f4d30f74470",
		"ts": "2026-08-04T15:26:36.822Z",
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
		"liquidityUsd": 1431564.32,
		"hash": "0f4d30f744708a336dc4de75f919cea043a72f381347eb1170be0874bde44a9c"
	},
	{
		"id": "ab10bb825aa7",
		"ts": "2026-08-04T15:26:37.075Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1679205.08,
		"hash": "ab10bb825aa71950a469200ae2f39227661a3e3c351c4c1824746e88914de785"
	},
	{
		"id": "666fb47113c5",
		"ts": "2026-08-04T15:26:37.327Z",
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
		"liquidityUsd": 692621.52,
		"hash": "666fb47113c509a12038a5b06bcb4159c1269069b9c3a656d58ab89d39d24d9f"
	},
	{
		"id": "d9eea876c4a5",
		"ts": "2026-08-04T15:26:37.573Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3155478.59,
		"hash": "d9eea876c4a5f644fc42fbe6e90622639899e22418861588d9a1975e3ae09439"
	},
	{
		"id": "15690ab89222",
		"ts": "2026-08-04T15:26:37.822Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1898418.45,
		"hash": "15690ab8922209a4d0bf6fbfbc989838c5033d80ad97815bae0687f324a54e29"
	},
	{
		"id": "867bfa522bcf",
		"ts": "2026-08-04T12:58:30.507Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112827428.2,
		"hash": "867bfa522bcf1855419991443ced6c9c0d05ac262068880db9d63770e5ec77e3"
	},
	{
		"id": "b2a5f83b84a5",
		"ts": "2026-08-04T12:58:30.978Z",
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
		"liquidityUsd": 18284852.1,
		"hash": "b2a5f83b84a58a33b1fe8cecb514fc595a77e047a8b7565db5cd9fa3aa0e11e4"
	},
	{
		"id": "9e1716011609",
		"ts": "2026-08-04T12:58:31.321Z",
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
		"liquidityUsd": 1117918.32,
		"hash": "9e171601160957667580f49d6f479681593cdeec5a252f87cb73b0274d231b57"
	},
	{
		"id": "e960b82f58e8",
		"ts": "2026-08-04T12:58:31.758Z",
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
		"liquidityUsd": 25107078.19,
		"hash": "e960b82f58e8ccc46f7c9882b9c2029c72a102a2a81e35b9bb8101e70bbf6da8"
	},
	{
		"id": "797f2dbff5f9",
		"ts": "2026-08-04T12:58:32.099Z",
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
		"liquidityUsd": 4397201.27,
		"hash": "797f2dbff5f9c0d39178fd017f739fb015521b7c1a3575978e2ed061345f9567"
	},
	{
		"id": "703c8f76f565",
		"ts": "2026-08-04T12:58:32.331Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 897279.83,
		"hash": "703c8f76f56565714b9eb551ebbe30eeeb28705f483e200a1ac783c37f3bdfc9"
	},
	{
		"id": "bc4569a46c81",
		"ts": "2026-08-04T12:58:32.570Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25107078.19,
		"hash": "bc4569a46c819d1292a7d52883e435bb5492f66ef9d514671b9db5afbdc3bedf"
	},
	{
		"id": "f82dccf755a0",
		"ts": "2026-08-04T12:58:32.811Z",
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
		"liquidityUsd": 3430722.09,
		"hash": "f82dccf755a0d3bb188873e21b43e9fdc590082c8b942875ed384e270b87cbdd"
	},
	{
		"id": "2d9851914011",
		"ts": "2026-08-04T12:58:33.053Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 836269.11,
		"hash": "2d985191401106fd51fa631dda579da60262148e9f604e300997b5a4b82812e4"
	},
	{
		"id": "3090a79ba7eb",
		"ts": "2026-08-04T12:58:33.290Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 14,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.72,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 286689.03,
		"hash": "3090a79ba7ebe2d634346e2f8a1c01a4036306d4f9406c4efac777816fbd360f"
	},
	{
		"id": "60384503812a",
		"ts": "2026-08-04T12:58:33.512Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1910136.34,
		"hash": "60384503812af10948cc820a69540b4631d1747a9179e536a8d08f786f024822"
	},
	{
		"id": "1a814007a249",
		"ts": "2026-08-04T12:58:33.743Z",
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
		"liquidityUsd": 1441083.93,
		"hash": "1a814007a249991c7c8e323f601fc509c18aa21240605ea0099c8a207144e5e7"
	},
	{
		"id": "6d58becabd19",
		"ts": "2026-08-04T12:58:33.961Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 84516.77,
		"hash": "6d58becabd192317661a011161b5a22951384fbb84837a40ee6e28683394b771"
	},
	{
		"id": "d39ea9aeaa52",
		"ts": "2026-08-04T12:58:34.187Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1675934.59,
		"hash": "d39ea9aeaa523679672a39f0ae1815ca217b52d2edbef170b40782ba472de9ab"
	},
	{
		"id": "50fe80e61c56",
		"ts": "2026-08-04T12:58:34.403Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3120654.51,
		"hash": "50fe80e61c5676023eaf7d05991ae788a989d40e7054267831a715cc5d7737fe"
	},
	{
		"id": "f31bdbf5611e",
		"ts": "2026-08-04T12:58:34.627Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1210043.73,
		"hash": "f31bdbf5611eb9ae8af9125b716c7f653f7bfcc78e69857afc3eb50164698193"
	},
	{
		"id": "525416e58042",
		"ts": "2026-08-04T12:58:34.844Z",
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
		"liquidityUsd": 689460.85,
		"hash": "525416e5804261bf2ad500adb20826b8fca65239cae76a680d2b92c13c6aff35"
	},
	{
		"id": "6f62ddef5ec3",
		"ts": "2026-08-04T12:58:35.070Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9505848.52,
		"hash": "6f62ddef5ec3a9e91b8310a39b1e4fe5e6b5fc558ee5aef6d98ea2ef865d15ab"
	},
	{
		"id": "69e8cf74befc",
		"ts": "2026-08-04T10:34:03.036Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112075680.98,
		"hash": "69e8cf74befc2c887a1cd107668e57bbdc80b21c4766c086aada2c0cd43d99da"
	},
	{
		"id": "2e4f85fb5ee2",
		"ts": "2026-08-04T10:34:03.644Z",
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
		"liquidityUsd": 16446566.02,
		"hash": "2e4f85fb5ee2cb1daa30773367b0445a414cfc4249223107e955cf4bc10e69ce"
	},
	{
		"id": "7d8fe48c538f",
		"ts": "2026-08-04T10:34:03.967Z",
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
		"liquidityUsd": 1114158.98,
		"hash": "7d8fe48c538fb29ceaa4c97278d49330ede2084a62387bfde567ee25dd380e3b"
	},
	{
		"id": "8135d359ca2d",
		"ts": "2026-08-04T10:34:04.276Z",
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
		"liquidityUsd": 24991035.2,
		"hash": "8135d359ca2d401c23a438345448c50e308d0f2d222aa4eec4494b7d718d795d"
	},
	{
		"id": "266bed7763d6",
		"ts": "2026-08-04T10:34:04.596Z",
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
		"liquidityUsd": 4386367.74,
		"hash": "266bed7763d63ce113517dc3ef48eeebfbb406920c56fbe7958f4a5eb3c77551"
	},
	{
		"id": "53ee2b1ebe86",
		"ts": "2026-08-04T10:34:04.888Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 897438.93,
		"hash": "53ee2b1ebe864b94490b51d9c4edcfc14b2335395b1005a74cd65191e69f789e"
	},
	{
		"id": "b20f7eeafce5",
		"ts": "2026-08-04T10:34:05.188Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24991035.2,
		"hash": "b20f7eeafce5328bc5cdbaa7f3a189667a6c18012a2211e0401b8923ce408db7"
	},
	{
		"id": "077259caca29",
		"ts": "2026-08-04T10:34:05.458Z",
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
		"liquidityUsd": 3393330.24,
		"hash": "077259caca2918400e43abcdc33cb9e58dddbb996d927936eecb350a1424421b"
	},
	{
		"id": "74b17363d668",
		"ts": "2026-08-04T10:34:05.730Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 281904.64,
		"hash": "74b17363d6687ece59d71b4536ea3c753c8af51ce372c94c5d965ae6f7d5d210"
	},
	{
		"id": "48a20832a8ba",
		"ts": "2026-08-04T10:34:06.233Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 841115.88,
		"hash": "48a20832a8ba8002e79dd6d8cb71feaf50bd304848d912254088c408d3df8f3b"
	},
	{
		"id": "09b02c8f1135",
		"ts": "2026-08-04T10:34:06.480Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1899125.23,
		"hash": "09b02c8f11358524d76357e29d4797786763befc843df7fe3113f401a573f758"
	},
	{
		"id": "ee116e64e730",
		"ts": "2026-08-04T10:34:06.724Z",
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
		"liquidityUsd": 1424849.73,
		"hash": "ee116e64e73027e566517473a3805c77efc40b590e7e0c664b34b2f5c992f705"
	},
	{
		"id": "2e55ceb574e2",
		"ts": "2026-08-04T10:34:06.973Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1658068.53,
		"hash": "2e55ceb574e27942d097b7e498333a9578771c85dfd99648dde56fe853355204"
	},
	{
		"id": "cdfc17fdd012",
		"ts": "2026-08-04T10:34:07.233Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 62071.41,
		"hash": "cdfc17fdd012dfdf3b5b4b5fe7484f3d7d269db493c51d45ecef22c344e17842"
	},
	{
		"id": "30cb035e3fec",
		"ts": "2026-08-04T10:34:07.477Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1192633.73,
		"hash": "30cb035e3feca84a4e34f05cf2c613e11fc39268cd941a21b88488e257717fc3"
	},
	{
		"id": "b089d1cc7ecf",
		"ts": "2026-08-04T10:34:07.728Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3142204.98,
		"hash": "b089d1cc7ecfa3cbee5f14a3ec8fe01ab87dff2014f34e7586b80ce2024ae186"
	},
	{
		"id": "56aeca93fa93",
		"ts": "2026-08-04T10:34:07.977Z",
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
		"liquidityUsd": 692216.98,
		"hash": "56aeca93fa933b38d7cfbf269213f56adcb96b4842ba7f38c4e375cdc4e861e2"
	},
	{
		"id": "b4153bd46762",
		"ts": "2026-08-04T10:34:08.228Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9423939.24,
		"hash": "b4153bd46762e7705a498d3aa53276e13637b3d4048e8aee9a08242f43ed2f51"
	},
	{
		"id": "6303e2069fb4",
		"ts": "2026-08-04T07:35:19.917Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112146562.09,
		"hash": "6303e2069fb455c3cf3d0be067787ebae1d50654187f7e8e2d4f131ef47aa8bf"
	},
	{
		"id": "3e3bbd1afe86",
		"ts": "2026-08-04T07:35:20.367Z",
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
		"liquidityUsd": 17310524.3,
		"hash": "3e3bbd1afe86158b474466816d0413479daaa976adaaf86dd956cc4bf73fe054"
	},
	{
		"id": "492624c2a774",
		"ts": "2026-08-04T07:35:20.622Z",
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
		"liquidityUsd": 1114556.39,
		"hash": "492624c2a774274529260adb20dce77439cfa57ada1c114bdebd6fe9128e67c3"
	},
	{
		"id": "905c09d89706",
		"ts": "2026-08-04T07:35:21.076Z",
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
		"liquidityUsd": 24985864.18,
		"hash": "905c09d89706069493bf6e6f5e6ae21e97069a1b79faa4089ea6b32b68002ed7"
	},
	{
		"id": "38fcd4d993fd",
		"ts": "2026-08-04T07:35:21.535Z",
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
		"liquidityUsd": 4397086.43,
		"hash": "38fcd4d993fd977af146fdcb471bfa83111b350c54046208b78301f70df52320"
	},
	{
		"id": "978d346cc10f",
		"ts": "2026-08-04T07:35:21.774Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 897430.9,
		"hash": "978d346cc10f95087874090759b4947ef0cd24ed3520f5ec71bac0620ca8c784"
	},
	{
		"id": "eb1ce967cab0",
		"ts": "2026-08-04T07:35:22.019Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24985864.18,
		"hash": "eb1ce967cab0c0d6abaeb99b8554e06b1c9da4a17491e8423fb298ab0ca8042b"
	},
	{
		"id": "857c8d925217",
		"ts": "2026-08-04T07:35:22.266Z",
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
		"liquidityUsd": 3408338.82,
		"hash": "857c8d925217471b41df3e1b5ba0899ffae558c9acb0005f3c959b39522a2a7f"
	},
	{
		"id": "dc600be87cb6",
		"ts": "2026-08-04T07:35:22.508Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 14,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.72,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 286534.97,
		"hash": "dc600be87cb6c30b8c72c5ab7b645b50119d503974ac919c4fb5bda389b6a4af"
	},
	{
		"id": "6a109e33080c",
		"ts": "2026-08-04T07:35:22.749Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 902402.92,
		"hash": "6a109e33080cd58c48e8eae979e23a7a451e68b806e088c7181f88234db2a027"
	},
	{
		"id": "9a7bf963c5cb",
		"ts": "2026-08-04T07:35:22.973Z",
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
		"liquidityUsd": 1492940.97,
		"hash": "9a7bf963c5cb54c456609bc39d86bd96ff3a2a0f472162e578947bbc9f0f53a0"
	},
	{
		"id": "00eb45b425cd",
		"ts": "2026-08-04T07:35:23.210Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1881010.08,
		"hash": "00eb45b425cdfcb21cae8ff1215821369cd8a3d4d27f0cd7159a3167c16b4fd3"
	},
	{
		"id": "b6a095b95769",
		"ts": "2026-08-04T07:35:23.433Z",
		"symbol": "MiroShark",
		"token": "0xd7bc6a05a56655FB2052F742B012d1DFD66e1BA3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 248040.13,
		"hash": "b6a095b9576901ca695759c126d684814bf9f3301e3dd03c2fb6e5d592fd100c"
	},
	{
		"id": "ecc477938939",
		"ts": "2026-08-04T07:35:23.655Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1659740.07,
		"hash": "ecc477938939f9cc9b94f513c7340f607ad433bde8ff443ee5facf717a3909c2"
	},
	{
		"id": "abd5ca6e2ec0",
		"ts": "2026-08-04T07:35:23.888Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1205988.24,
		"hash": "abd5ca6e2ec03b6e72c9df897a82938addefb6809ea142e507bd9c214862fdff"
	},
	{
		"id": "76066a912a45",
		"ts": "2026-08-04T07:35:24.124Z",
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
		"liquidityUsd": 697141.71,
		"hash": "76066a912a4559c6b598332cde30d5f34303564f04b4fed97d7399c6e855e9ec"
	},
	{
		"id": "087959061a33",
		"ts": "2026-08-04T07:35:24.346Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3082621.64,
		"hash": "087959061a333976fe28bf889433628696b22eea8aa907eb02f878d10a78d15a"
	},
	{
		"id": "a120959fcea2",
		"ts": "2026-08-04T07:35:24.573Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 365640.94,
		"hash": "a120959fcea238b22cc9bc5c7f4fa4682e30fe162e5ec1c0dbcbb15976ebb6c8"
	},
	{
		"id": "4faf4af98cae",
		"ts": "2026-08-04T04:09:50.396Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112161966.16,
		"hash": "4faf4af98caeb3953fc5cb16c038a92dca73a0d2d5905d455f15908726ec12a1"
	},
	{
		"id": "c8cc43ee6859",
		"ts": "2026-08-04T04:09:50.833Z",
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
		"liquidityUsd": 17311738.11,
		"hash": "c8cc43ee685925de162dfebe88df8c6e9758c57889265ea1bcd314addaa5a3f2"
	},
	{
		"id": "2f09834ffef1",
		"ts": "2026-08-04T04:09:51.069Z",
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
		"liquidityUsd": 1118785.58,
		"hash": "2f09834ffef153941068ee9fd222e89e34d4bc51b8bc6c2af8eb827cfc26e7ab"
	},
	{
		"id": "88f8133394df",
		"ts": "2026-08-04T04:09:51.507Z",
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
		"liquidityUsd": 25064212.62,
		"hash": "88f8133394df71fc0ff6b6d095798341f4fd210dd88d780f811a008e38304191"
	},
	{
		"id": "e52db9ca10e5",
		"ts": "2026-08-04T04:09:51.741Z",
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
		"liquidityUsd": 4396409.67,
		"hash": "e52db9ca10e5f04d19c71341fd18dfd6f6d2f3fe9fe61e4eb2d5dcd24d5029bd"
	},
	{
		"id": "2141353d4428",
		"ts": "2026-08-04T04:09:51.994Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 895167.65,
		"hash": "2141353d44287565d61b004a81e4b2b80b407e7d90a3ecbf8c7b61b9cfe35407"
	},
	{
		"id": "0cf2f65a6746",
		"ts": "2026-08-04T04:09:52.223Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25058551.34,
		"hash": "0cf2f65a67465ab737cdeea2db11e588656ecbef5837345058e74ee8c37ee14b"
	},
	{
		"id": "89eeab73140b",
		"ts": "2026-08-04T04:09:52.463Z",
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
		"liquidityUsd": 3405991.56,
		"hash": "89eeab73140b5ae8dd478f3545dd1694170d2de398273ff98348ce1fd4814f9c"
	}
]
