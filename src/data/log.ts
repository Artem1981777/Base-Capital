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
	"updatedAt": "2026-07-12T02:25:23.240Z",
	"tokensScored": 2741,
	"verdictsIssued": 2741,
	"safe": 2409,
	"risky": 245,
	"likelyRug": 87,
	"ticks": 173
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "58e8ca048a72",
		"ts": "2026-07-12T02:25:20.045Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105569950.3,
		"hash": "58e8ca048a72a623a298a041b505af32b781223f0dd168eddfdf0fe683142f97"
	},
	{
		"id": "7b4e5695ba66",
		"ts": "2026-07-12T02:25:20.394Z",
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
		"liquidityUsd": 16259473.26,
		"hash": "7b4e5695ba66e350eaac83edd5954557f3e4a4a906ac38bd02a230ce026e9597"
	},
	{
		"id": "07f9cb538468",
		"ts": "2026-07-12T02:25:20.592Z",
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
		"liquidityUsd": 1364501.56,
		"hash": "07f9cb5384682b3f4be36f9ffb241bc6b4071a34eed8cacce63261b393d14bec"
	},
	{
		"id": "6bb09990e6e0",
		"ts": "2026-07-12T02:25:20.784Z",
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
		"liquidityUsd": 30793589.95,
		"hash": "6bb09990e6e06966eb5921e764a3519d8b95cba9eb5cfd7dafaaf39eaf64f1b8"
	},
	{
		"id": "aaed72f85a8e",
		"ts": "2026-07-12T02:25:20.973Z",
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
		"liquidityUsd": 4593650.65,
		"hash": "aaed72f85a8e8fa16f9683741fb73db0346bd94d58461fdd2f1062f1411e3914"
	},
	{
		"id": "c048bba74486",
		"ts": "2026-07-12T02:25:21.166Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 996786.67,
		"hash": "c048bba7448640241e8abfbdc253b11e89dcf570d68b46a9300cb77e53bd0338"
	},
	{
		"id": "13eded336ab1",
		"ts": "2026-07-12T02:25:21.360Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30793589.95,
		"hash": "13eded336ab17d7b1ca083a815b0efe132cc3cb6b7cc69922eeade4901fcc529"
	},
	{
		"id": "4d9ca71ae66b",
		"ts": "2026-07-12T02:25:21.550Z",
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
		"liquidityUsd": 2470789.59,
		"hash": "4d9ca71ae66b97f2cbe9eecf4be8535edb7f43c3b071841ecd1716d3b0d9c982"
	},
	{
		"id": "cc5fa3b8ec93",
		"ts": "2026-07-12T02:25:21.738Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2244094.45,
		"hash": "cc5fa3b8ec9317db46a0e9617c2f0ca9e2d035f696617fb81ca99dcd560993fc"
	},
	{
		"id": "c3bcba417b13",
		"ts": "2026-07-12T02:25:21.925Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 276590.79,
		"hash": "c3bcba417b1314e8291c641ecae811eb17d61d5c9f7c7f6c305be605a2cb8de6"
	},
	{
		"id": "14f7ecfc6e7d",
		"ts": "2026-07-12T02:25:22.111Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3135424.11,
		"hash": "14f7ecfc6e7dcf1223224edd47f930e3414bea922769c646f4722f1b203e7816"
	},
	{
		"id": "cddda27bebd3",
		"ts": "2026-07-12T02:25:22.298Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1593520.31,
		"hash": "cddda27bebd300e223a6d0df5b1a3f84ec79d6b3b57c96877629ce380a1e56d9"
	},
	{
		"id": "eb238ad18bf7",
		"ts": "2026-07-12T02:25:22.486Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 699609.96,
		"hash": "eb238ad18bf7d01a4a67e26f99b8060b0f11df87b62fe3ccab80215a08fb8d26"
	},
	{
		"id": "82a8552bfc34",
		"ts": "2026-07-12T02:25:22.675Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 783964.43,
		"hash": "82a8552bfc34b851a0abdf94f85ea42dfd110971a292d3fe42a1ac0fc16469b7"
	},
	{
		"id": "cff6dc1ae961",
		"ts": "2026-07-12T02:25:22.862Z",
		"symbol": "CAPACITR",
		"token": "0x65F8152809Dd1fC0D5d8A345c9008d37B95f9ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 113746.49,
		"hash": "cff6dc1ae961a7a357f8b3f0d52148701668f4c0b54e1b1ea975d9e2f95a96bc"
	},
	{
		"id": "2af95e4e6feb",
		"ts": "2026-07-12T02:25:23.053Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1940513.23,
		"hash": "2af95e4e6feb5e17a669228adedc44592bbd9b09f15e218e5e6d4869a4697d96"
	},
	{
		"id": "22a92bb6a4ee",
		"ts": "2026-07-12T02:25:23.239Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8374225.02,
		"hash": "22a92bb6a4ee284eafc4d86f78c1fa978ffe28f1a3d86bdceaf9002929630617"
	},
	{
		"id": "8e9b98cc0ffd",
		"ts": "2026-07-11T23:52:04.782Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105360757.32,
		"hash": "8e9b98cc0ffd92752aeaeecb66d1351bf638b4598ee8c41738af731ce6a6c637"
	},
	{
		"id": "c9e9f9a64d41",
		"ts": "2026-07-11T23:52:05.155Z",
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
		"liquidityUsd": 16047336.21,
		"hash": "c9e9f9a64d41e1b2d357ccc638076f59d384e040e0ac61ca0fb73a165bb2e800"
	},
	{
		"id": "6b1f236a01e5",
		"ts": "2026-07-11T23:52:05.351Z",
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
		"liquidityUsd": 1353565.82,
		"hash": "6b1f236a01e5e7931150cf45bfb8002db75f205f1420dd4e1e1623b3500eb317"
	},
	{
		"id": "9b44205db952",
		"ts": "2026-07-11T23:52:05.551Z",
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
		"liquidityUsd": 30842950.53,
		"hash": "9b44205db952ce4cadba9b4b4fab763f0db5ddc7a0c0a4f8688d3a05ceea1900"
	},
	{
		"id": "fdc84de5ca5c",
		"ts": "2026-07-11T23:52:05.760Z",
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
		"liquidityUsd": 4552565.38,
		"hash": "fdc84de5ca5ce46ea31c2d13956da141f1fb397359f372ae704abd5892d9da53"
	},
	{
		"id": "8906ca80e421",
		"ts": "2026-07-11T23:52:05.949Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 993425.57,
		"hash": "8906ca80e4219bf486211d67c5ffd73fad93f761393e38015d7968a7472c9b25"
	},
	{
		"id": "7f651308bb5c",
		"ts": "2026-07-11T23:52:06.147Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30842950.53,
		"hash": "7f651308bb5c54e686f8a377e82fab9675ed9cd6abd3cb33f1401cd1610a3c56"
	},
	{
		"id": "aac2e6543122",
		"ts": "2026-07-11T23:52:07.474Z",
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
		"liquidityUsd": 2542306.24,
		"hash": "aac2e65431223999df65de95707f7aa1c01c0939c4f96cacf1d5e3a1e7ab9959"
	},
	{
		"id": "7db4aeb1b36e",
		"ts": "2026-07-11T23:52:07.662Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2250697.83,
		"hash": "7db4aeb1b36e280f9066a70d1be6cdb646bc4ed621f86e389423850bd6077e9e"
	},
	{
		"id": "fbb082ae5654",
		"ts": "2026-07-11T23:52:09.053Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 265955.55,
		"hash": "fbb082ae5654aca1f32b59fa76a383de6cacbbfc9933857dd20e39411906ded8"
	},
	{
		"id": "6f96aad48b3c",
		"ts": "2026-07-11T23:52:09.245Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3181741.64,
		"hash": "6f96aad48b3c4fdc4cbc640039c578b07a9fe8d8eebb02e1b7bb801b54ae4b22"
	},
	{
		"id": "c88ad0de8892",
		"ts": "2026-07-11T23:52:09.431Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1589063.4,
		"hash": "c88ad0de889241d98df2bed5c9dc5e356df79ecebfcc0b5178e526c2cd68a83b"
	},
	{
		"id": "6ee3333aa3bf",
		"ts": "2026-07-11T23:52:09.622Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 695149.96,
		"hash": "6ee3333aa3bf5ec0785d1d10923f40209713d64dee28c77b6a5d2e4ade5fd8ad"
	},
	{
		"id": "5d1efd002560",
		"ts": "2026-07-11T23:52:09.799Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 778359.64,
		"hash": "5d1efd00256012b90b444c4a421a758b05a0e688e36cbb337bdae238976bc401"
	},
	{
		"id": "32f56a7567cb",
		"ts": "2026-07-11T23:52:09.983Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 332735.53,
		"hash": "32f56a7567cb2c99cd66b7097a488c018153e265261375e41f30c5c7be8f316e"
	},
	{
		"id": "dc248cf265ef",
		"ts": "2026-07-11T23:52:10.171Z",
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
		"liquidityUsd": 8236162.5,
		"hash": "dc248cf265ef002cc22c4c6912909c7dbda76486d4bd29245c040e09b188f9f6"
	},
	{
		"id": "108c6233b4a6",
		"ts": "2026-07-11T23:52:10.364Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4570837.75,
		"hash": "108c6233b4a66baafa223d1f1e6f1badc0c242e14a6225ac4c9704015c8cac36"
	},
	{
		"id": "b45dd124eecc",
		"ts": "2026-07-11T22:43:05.087Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105981870.53,
		"hash": "b45dd124eecc0c38fde76045e09b39c6db1681a010a34a9a7d6dded8c1f01cb0"
	},
	{
		"id": "642379da8002",
		"ts": "2026-07-11T22:43:05.348Z",
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
		"liquidityUsd": 17030962.55,
		"hash": "642379da8002c4383c792edd5ec6a339b5fab272c8a28f177500a18692319092"
	},
	{
		"id": "9b2cc27faa75",
		"ts": "2026-07-11T22:43:05.605Z",
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
		"liquidityUsd": 1378980.83,
		"hash": "9b2cc27faa75f15b6457ab5f0a6fe02a6087fad77bb0e45cfcf74db56417d944"
	},
	{
		"id": "6f2c4ad80f9a",
		"ts": "2026-07-11T22:43:06.055Z",
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
		"liquidityUsd": 31069038.97,
		"hash": "6f2c4ad80f9aa3e5d0913e506fd50f29d0e4da5ccbd0981581dc515a8b3b21e8"
	},
	{
		"id": "8eaff3f2494b",
		"ts": "2026-07-11T22:43:06.334Z",
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
		"liquidityUsd": 4614002.28,
		"hash": "8eaff3f2494b51840b4f958634748b6c4eeb34a01dc87a475cb7ad62a0758ccf"
	},
	{
		"id": "7ffde09d20d8",
		"ts": "2026-07-11T22:43:06.573Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1007708.02,
		"hash": "7ffde09d20d8659d9fc9be6ec70a8ee95be1ffbb0763f3e7bfb03b96a933b08e"
	},
	{
		"id": "cc756216d54a",
		"ts": "2026-07-11T22:43:06.825Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 31069038.97,
		"hash": "cc756216d54a4b5a37dc41acf2625de18f1ad11888f9c5e545a2506728f2ebeb"
	},
	{
		"id": "297f840cf555",
		"ts": "2026-07-11T22:43:07.062Z",
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
		"liquidityUsd": 2575633.7,
		"hash": "297f840cf55503e57bf34a8229992018a5273d85d9d03abcf27d8d54772ae156"
	},
	{
		"id": "48478796f03e",
		"ts": "2026-07-11T22:43:07.340Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2266302.04,
		"hash": "48478796f03edb1b447e1c59373905e52e8670f32494b4a5b40f72f66f36f050"
	},
	{
		"id": "66ce0f483cf7",
		"ts": "2026-07-11T22:43:07.584Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 273920.09,
		"hash": "66ce0f483cf7268937cfe8eb7c13366e0512b1444d77485a85b324863bbf66af"
	},
	{
		"id": "c1b3b7905cea",
		"ts": "2026-07-11T22:43:07.805Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3236058.59,
		"hash": "c1b3b7905cea628193a46d042e89e5422b6876fd13820d2bd535b604a40a51c3"
	},
	{
		"id": "ababf4a24ad0",
		"ts": "2026-07-11T22:43:08.039Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 699728.63,
		"hash": "ababf4a24ad0f0cf798c537e3ae7fff9343c0bbf303bcf031eaa1536fb5d4dc8"
	},
	{
		"id": "a76fae1e9d92",
		"ts": "2026-07-11T22:43:08.259Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1646664.03,
		"hash": "a76fae1e9d926eaf9d078e2bfad43edd3ed735dae8a8123ecde5063a3f72b206"
	},
	{
		"id": "7d6dfd914791",
		"ts": "2026-07-11T22:43:08.493Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 789640.16,
		"hash": "7d6dfd914791cea7ddbd28015e44342e59476d92b31436e0caca9c1ef78eceda"
	},
	{
		"id": "7c732cd24503",
		"ts": "2026-07-11T22:43:08.715Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1946141.34,
		"hash": "7c732cd24503eb2f8e72cebd81c5505ebd0e0a8128fc01147f3e172f996409c0"
	},
	{
		"id": "7b59df1936fb",
		"ts": "2026-07-11T22:43:08.951Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 322952.65,
		"hash": "7b59df1936fbd9acf83e361d97983a9b556a46fd5cae2bc25259a1f57f0882f1"
	},
	{
		"id": "95be4ad77ea4",
		"ts": "2026-07-11T22:43:09.173Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8301797.2,
		"hash": "95be4ad77ea42a04aadb50b5a798efcb6605e966746286975b190ec48f0d4dc1"
	},
	{
		"id": "1b38e47506b1",
		"ts": "2026-07-11T21:44:17.492Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106203050.19,
		"hash": "1b38e47506b141608182c664aab8afe1eef2461823c0ace7f2da110888341d30"
	},
	{
		"id": "d3676a3b318f",
		"ts": "2026-07-11T21:44:17.933Z",
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
		"liquidityUsd": 16730619.76,
		"hash": "d3676a3b318f5029b3f63b24dc8abf2416c55f628f08d9507fe1fc242d6933d9"
	},
	{
		"id": "65a04199c5fd",
		"ts": "2026-07-11T21:44:18.179Z",
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
		"liquidityUsd": 1381032.57,
		"hash": "65a04199c5fd0a76d34b59096d2a60ee6e6177d1c9f7b7bbe33be5d859c2f76d"
	},
	{
		"id": "1e8f7eb53d27",
		"ts": "2026-07-11T21:44:18.414Z",
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
		"liquidityUsd": 31203058.79,
		"hash": "1e8f7eb53d274f42234c5999ace28684c9331de49bd1156ef617b25f9f0367f1"
	},
	{
		"id": "8401f253d9c5",
		"ts": "2026-07-11T21:44:18.851Z",
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
		"liquidityUsd": 4631531.75,
		"hash": "8401f253d9c52c9ede1e93eed1c98739951623a262a61ef4494e19eb5eb3e91e"
	},
	{
		"id": "cc47f4d7debc",
		"ts": "2026-07-11T21:44:19.087Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1015428.79,
		"hash": "cc47f4d7debcc28669e1984dddbe68f58ddb5f4b3ad6a8ae0250e42250ebffde"
	},
	{
		"id": "094691324365",
		"ts": "2026-07-11T21:44:19.319Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 31203058.79,
		"hash": "0946913243655f453bf455015bd0862f185e3a6325efc076306c2d8d338fc0d9"
	},
	{
		"id": "9673ce0978f1",
		"ts": "2026-07-11T21:44:20.240Z",
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
		"liquidityUsd": 2450849.4,
		"hash": "9673ce0978f1c943a294595b9a53839701b138c9b44ef08c331c59f0de769d4d"
	},
	{
		"id": "6f49e1be7aad",
		"ts": "2026-07-11T21:44:20.474Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2303785.18,
		"hash": "6f49e1be7aadfa887ce26ccbf0eb46d5e7f36ef63dfd7ec3ec3f8af3bca595d7"
	},
	{
		"id": "3248e3d374ec",
		"ts": "2026-07-11T21:44:20.708Z",
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
		"liquidityUsd": 3212033.51,
		"hash": "3248e3d374ecd0e402c14516a43304cec14966543e09142bbf1ed395c2c189de"
	},
	{
		"id": "a6c0f9c0ea2b",
		"ts": "2026-07-11T21:44:20.927Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 269791.94,
		"hash": "a6c0f9c0ea2bdab323b0a7ba065af22ca305c5d00189b533363f8562422def5d"
	},
	{
		"id": "47637a43e05b",
		"ts": "2026-07-11T21:44:21.148Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1655265.28,
		"hash": "47637a43e05b6e2f7ad2398fd33ec15e94d1dc51697b3e12a25156cefa905b93"
	},
	{
		"id": "02b9d39548ef",
		"ts": "2026-07-11T21:44:21.365Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 703946.96,
		"hash": "02b9d39548efb6d1c81bb7455ea152a362144db72f99deeb78f8a65aa7eebf33"
	},
	{
		"id": "b6faf886fd56",
		"ts": "2026-07-11T21:44:21.586Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 321341.07,
		"hash": "b6faf886fd563066c931f0301689720876e11225eedef0c4af4f3f1ef226be62"
	},
	{
		"id": "2771dec3a9d0",
		"ts": "2026-07-11T21:44:22.895Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1955955.45,
		"hash": "2771dec3a9d0053b1532b2286510498300e7e598de3432f067acd52f8ed9a76e"
	},
	{
		"id": "aed16f1af0e7",
		"ts": "2026-07-11T21:44:23.114Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8353527.58,
		"hash": "aed16f1af0e7613c98c49f888cb53b49d2e0843d1c7409f8694d81b77af76432"
	},
	{
		"id": "8a34b75aea01",
		"ts": "2026-07-11T21:44:23.333Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 986380.22,
		"hash": "8a34b75aea0130e6a967d11cb4ae0b1fe33653bc9301a32607462a03921182ec"
	},
	{
		"id": "17f07c220384",
		"ts": "2026-07-11T20:05:57.272Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105978358.06,
		"hash": "17f07c220384fcb0d6583d369eeb20721f93a2ec8962f21492e5f1f5cfcd91e7"
	},
	{
		"id": "797c5e80b7b6",
		"ts": "2026-07-11T20:05:57.618Z",
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
		"liquidityUsd": 16605149.34,
		"hash": "797c5e80b7b6a8ea884b6c890d35661794a021dc4af18c73f74076dfd4c84178"
	},
	{
		"id": "c00cf16caf0c",
		"ts": "2026-07-11T20:05:58.691Z",
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
		"liquidityUsd": 1379071.38,
		"hash": "c00cf16caf0c6b6f1f6a1e678275cf071d1dcbf6bf7f6f0baa2435afc1433f06"
	},
	{
		"id": "c6e2d8f58b6b",
		"ts": "2026-07-11T20:05:59.302Z",
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
		"liquidityUsd": 31142573.54,
		"hash": "c6e2d8f58b6b5d012b7a82e851e41ca64c2d56c6a3f0e3f18313f9b6747cf097"
	},
	{
		"id": "6ae78f97180d",
		"ts": "2026-07-11T20:05:59.487Z",
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
		"liquidityUsd": 4625800.48,
		"hash": "6ae78f97180d84b671749b1f5457f9d9e3daf8e961efa3b4b17ea74634a9760c"
	},
	{
		"id": "808338d69b88",
		"ts": "2026-07-11T20:05:59.688Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1016305.16,
		"hash": "808338d69b8848437328e522a95db3c86abd799143ea901d594c86b23738e0cd"
	},
	{
		"id": "a8ae06afc773",
		"ts": "2026-07-11T20:05:59.879Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 31142573.54,
		"hash": "a8ae06afc77330c221ed33d4690f471007a1215ea4a64bdc3271d171d79d087b"
	},
	{
		"id": "a740d7970f01",
		"ts": "2026-07-11T20:06:00.066Z",
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
		"liquidityUsd": 2453639.65,
		"hash": "a740d7970f01b30ae886f0e3a43bd618c00fced80e8b49cf65d8087e13b04560"
	},
	{
		"id": "132975c49fa0",
		"ts": "2026-07-11T20:06:00.365Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2326963.53,
		"hash": "132975c49fa0d698bcb64e464a43f030147b39d0376d962299ef0e42ca0bcb26"
	},
	{
		"id": "4e4d8c01a1b1",
		"ts": "2026-07-11T20:06:01.026Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 264009.82,
		"hash": "4e4d8c01a1b1236d20ea398585f8458aedb83aa7225b6df079bffa4ceea24de4"
	},
	{
		"id": "c72a3f30a3a9",
		"ts": "2026-07-11T20:06:01.384Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3252391.9,
		"hash": "c72a3f30a3a911868bcd6be22d7e5bc41e37c3fd42b4dc2ecaeabd18b0b3414d"
	},
	{
		"id": "b825aa22885d",
		"ts": "2026-07-11T20:06:01.611Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1651681.38,
		"hash": "b825aa22885d29c497b3c4626278b20092c3ccc939c6dc5f78d159f27dca31fe"
	},
	{
		"id": "aef0b2934844",
		"ts": "2026-07-11T20:06:01.975Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 702616.43,
		"hash": "aef0b29348445171ccdd14ccbf65392e87e24c02c678ec8d368e69ad67c9d0c6"
	},
	{
		"id": "04e805fa8f4c",
		"ts": "2026-07-11T20:06:02.233Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 524843.09,
		"hash": "04e805fa8f4cba55c5c46190de5345f21f46a75e14dd4de05816a43dbd0786dc"
	},
	{
		"id": "818c873b1c76",
		"ts": "2026-07-11T20:06:02.470Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 379604.36,
		"hash": "818c873b1c7641b513b953fc582f9b96c822e7d21336ebbb3e2a0c22ea54e65d"
	},
	{
		"id": "61e08060c5a7",
		"ts": "2026-07-11T20:06:02.668Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1946986.54,
		"hash": "61e08060c5a737eb0830d84d4885b5ef5a39973cafc3453d7a94b65c51a185e5"
	},
	{
		"id": "ba1d8a7a160d",
		"ts": "2026-07-11T20:06:02.865Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 991122.66,
		"hash": "ba1d8a7a160dd0300bd50b97d935856c9caa8976e6bd9cddbf1fe7080fe5fd6a"
	},
	{
		"id": "44bd5c2b8535",
		"ts": "2026-07-11T20:06:03.051Z",
		"symbol": "EUR",
		"token": "0x832BCceD5bD431b31663576490344EA1c0Bea295",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 83787.16,
		"hash": "44bd5c2b8535d0ca844e657e65bc4cfc30e529f2abd9d7157af779e51caa0fe7"
	},
	{
		"id": "22cf694cfbe8",
		"ts": "2026-07-11T18:56:53.917Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105952044.79,
		"hash": "22cf694cfbe823cbf667c73b1e03841761a075ce32bd3404e160b4d642e1eb47"
	},
	{
		"id": "1f87a6f5e3e6",
		"ts": "2026-07-11T18:56:54.359Z",
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
		"liquidityUsd": 16389679.26,
		"hash": "1f87a6f5e3e6a09c91525d2659a0e276a7224e678c449dba9b0adb63d23ece18"
	},
	{
		"id": "e0da22a8bec0",
		"ts": "2026-07-11T18:56:54.610Z",
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
		"liquidityUsd": 1381877.14,
		"hash": "e0da22a8bec0a2a04ba43a630117ddceeed081a23a50828f676c2d3bdc74544c"
	},
	{
		"id": "164238466c08",
		"ts": "2026-07-11T18:56:54.843Z",
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
		"liquidityUsd": 31209583.51,
		"hash": "164238466c08fd647729c7d57ebf7f9e7e23e6c01b6dffdb12da835a19501bcb"
	},
	{
		"id": "4ebd884bf5a1",
		"ts": "2026-07-11T18:56:55.076Z",
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
		"liquidityUsd": 4630392.52,
		"hash": "4ebd884bf5a1814ae6b1b0b928e431bab67a3e172285c698ab58122515102a15"
	},
	{
		"id": "7aedb9142d85",
		"ts": "2026-07-11T18:56:55.321Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1010624.17,
		"hash": "7aedb9142d852520ba41b773be8a381b5e20110bab2c25378ab6f845fec8b565"
	},
	{
		"id": "ceeebc77539c",
		"ts": "2026-07-11T18:56:55.592Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 31209583.51,
		"hash": "ceeebc77539c42e2d07b11f4cc634ab04228039e7a8682fe77e0e87376e0ba8a"
	},
	{
		"id": "2a04092dd14a",
		"ts": "2026-07-11T18:56:55.824Z",
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
		"liquidityUsd": 2451547.13,
		"hash": "2a04092dd14affea68ef319aad2c708a2dbf80b87cfc27669d8597fb7337fa0b"
	},
	{
		"id": "40d967c6c7fd",
		"ts": "2026-07-11T18:56:56.071Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2317515.69,
		"hash": "40d967c6c7fd1660468644accdd1bbd3aa89db96a09cd7e06045452d41be61fb"
	},
	{
		"id": "7791eab54fca",
		"ts": "2026-07-11T18:56:56.305Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 299196.4,
		"hash": "7791eab54fcabac27ffe382c7f0f2869624be5ee84e84f409362e43621d755fd"
	},
	{
		"id": "7a69ccfe5b49",
		"ts": "2026-07-11T18:56:56.523Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1653421.1,
		"hash": "7a69ccfe5b49a64d309cc7fcbce407807674067dc773c58a88a54e3e377b65ff"
	},
	{
		"id": "e3a232e5e4b0",
		"ts": "2026-07-11T18:56:56.742Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 706970.36,
		"hash": "e3a232e5e4b01a4e7cc13a8cf2d1a6487e00e9d9bc34c880dfe3089415869273"
	},
	{
		"id": "2b1523266be9",
		"ts": "2026-07-11T18:56:56.975Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 442252.63,
		"hash": "2b1523266be95cfcec94fd90abc8027bde67038bf18b9031fd2377b2fb599ba3"
	},
	{
		"id": "fe84aff3ca47",
		"ts": "2026-07-11T18:56:57.192Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3203187.92,
		"hash": "fe84aff3ca47e6ca7d08394b3598166012296afdbcb1882a1380ee519ba07671"
	},
	{
		"id": "3cb0a8e4a421",
		"ts": "2026-07-11T18:56:57.411Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 524829.16,
		"hash": "3cb0a8e4a4211a6e739723a24af20d09baf9b786feb1aae41c57a1c117a00136"
	},
	{
		"id": "04261f6ecac0",
		"ts": "2026-07-11T18:56:57.643Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 982016.1,
		"hash": "04261f6ecac0b186a7de5ee4f9a69c9f024249f4b0aa6f6da51b031c123f05ad"
	},
	{
		"id": "9d368bc0906e",
		"ts": "2026-07-11T17:52:58.132Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105800109.76,
		"hash": "9d368bc0906e859460b11a0313b1dc6da7615270060f8837de80428f0dab8d51"
	},
	{
		"id": "f4128ac3aef0",
		"ts": "2026-07-11T17:52:59.179Z",
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
		"liquidityUsd": 16486060.2,
		"hash": "f4128ac3aef0f0492d189acea612751dc9b142a8c18f8e30309718c2be936e66"
	},
	{
		"id": "9f56a32b1b86",
		"ts": "2026-07-11T17:52:59.520Z",
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
		"liquidityUsd": 1381696.11,
		"hash": "9f56a32b1b86d1da5410ee1cc2b3bc8ee26d69e2988d8511337ad3cde1d1c85a"
	},
	{
		"id": "9091f6f88aa1",
		"ts": "2026-07-11T17:52:59.861Z",
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
		"liquidityUsd": 31292777.88,
		"hash": "9091f6f88aa194ea8cf08e7adf1affdf8860e704da5bb5460a912f78313b5e6d"
	},
	{
		"id": "2d15ffd23d52",
		"ts": "2026-07-11T17:53:00.048Z",
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
		"liquidityUsd": 4638623.69,
		"hash": "2d15ffd23d5287695b5e8371a3efe86658e2ebc1f1800d24ea3e22036a724557"
	},
	{
		"id": "a177fbc468b0",
		"ts": "2026-07-11T17:53:00.367Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1009523.23,
		"hash": "a177fbc468b08ba4512309dfa9f86ff07db00ff2c1dd2483489a86a91a564d30"
	},
	{
		"id": "89479748d07f",
		"ts": "2026-07-11T17:53:00.555Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 31292777.88,
		"hash": "89479748d07f3f8e0c39720cc1d4f72c7227b4546306b87c81d7c7976aba3b23"
	},
	{
		"id": "17b8bff3d8ee",
		"ts": "2026-07-11T17:53:00.750Z",
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
		"liquidityUsd": 2450357.21,
		"hash": "17b8bff3d8ee0c079f1e17a79fe51eb970887180b9e29408dc703a06f2f5a713"
	},
	{
		"id": "ff0f83d3e211",
		"ts": "2026-07-11T17:53:00.948Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2349226.24,
		"hash": "ff0f83d3e2116ae89fbc67efac987b264b9d9ab5e062c3126a74e224142beafe"
	},
	{
		"id": "c008052fa77b",
		"ts": "2026-07-11T17:53:01.189Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 315467.83,
		"hash": "c008052fa77bb1247635affabaf154720198077cc5be6ecfc74c895d4f5fd2d9"
	},
	{
		"id": "f600f11f4603",
		"ts": "2026-07-11T17:53:01.541Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1660257.12,
		"hash": "f600f11f4603fbba02eb936c709420642cb04ac6153674972383815d534c349a"
	},
	{
		"id": "aa91620a993b",
		"ts": "2026-07-11T17:53:01.781Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 719992.85,
		"hash": "aa91620a993bfacfeb992ebf32f8787e1712ad28489b3fba815ffdd6aec5b614"
	},
	{
		"id": "66e7071dc592",
		"ts": "2026-07-11T17:53:01.983Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 320134.58,
		"hash": "66e7071dc5920f67c58f3599ff831bdc36167e65fd1f8321f06e391129961328"
	},
	{
		"id": "d3bea7d3b821",
		"ts": "2026-07-11T17:53:02.178Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3139147.64,
		"hash": "d3bea7d3b821c8c29bb1cf4a3216b3cd9879ddcec2907c885ef559b65aa88505"
	},
	{
		"id": "6b9a8294ea9f",
		"ts": "2026-07-11T17:53:02.388Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1940566.03,
		"hash": "6b9a8294ea9fb6171f8c809093bf6a187b577546f2d614deb58b3a0ca0d7b027"
	},
	{
		"id": "4b421b282513",
		"ts": "2026-07-11T17:53:02.593Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 521846.93,
		"hash": "4b421b282513eb1bd4f100b0d208365d722794c04c8b01372d93fdc8be23087b"
	},
	{
		"id": "2f16a6886db1",
		"ts": "2026-07-11T16:53:27.606Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105790896.82,
		"hash": "2f16a6886db120c80c909bf63ef97a94c3a736d2625c56d040a2b6423fc13327"
	},
	{
		"id": "e93cbd0c7695",
		"ts": "2026-07-11T16:53:28.064Z",
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
		"liquidityUsd": 16604402.05,
		"hash": "e93cbd0c7695049c53d31e64afa32ee4ceaaae142e97421fe5e4db372e51b044"
	},
	{
		"id": "46d21a4b1e09",
		"ts": "2026-07-11T16:53:28.314Z",
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
		"liquidityUsd": 1379125.32,
		"hash": "46d21a4b1e09529961ecc05391b9c68affe15eb977a743e187b7841176fab3b4"
	},
	{
		"id": "8daa27a52141",
		"ts": "2026-07-11T16:53:28.638Z",
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
		"liquidityUsd": 31132643.33,
		"hash": "8daa27a52141fe3e1a6f30a050768723582947947dee109511bd0dc299361134"
	},
	{
		"id": "0a8cf4f5ff64",
		"ts": "2026-07-11T16:53:28.894Z",
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
		"liquidityUsd": 4622967.15,
		"hash": "0a8cf4f5ff645cc189c9e2427a7fbe7793ef90247d05e66fd411b23fb6b6d65f"
	},
	{
		"id": "104f25a94c2d",
		"ts": "2026-07-11T16:53:29.143Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1009523.23,
		"hash": "104f25a94c2d3f338d23573dd102e866852926630966e318045b75f4ff5a109a"
	},
	{
		"id": "6a51bb5751a0",
		"ts": "2026-07-11T16:53:29.403Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 31132643.55,
		"hash": "6a51bb5751a005adabfa83739542de374d0ba400d34d06ce8253b786a7046e4a"
	},
	{
		"id": "7cca4b7296df",
		"ts": "2026-07-11T16:53:29.650Z",
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
		"liquidityUsd": 2445359.08,
		"hash": "7cca4b7296df4f07783346a6d1dee83c3d4c9cfd1e41fc11c214aafb90327da6"
	},
	{
		"id": "5da69193c5e4",
		"ts": "2026-07-11T16:53:29.928Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2352626.29,
		"hash": "5da69193c5e47bbda957d40cd3257293c2002637cb181bb4b3cdc745dab04991"
	},
	{
		"id": "c82fff19180f",
		"ts": "2026-07-11T16:53:30.179Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 289054.28,
		"hash": "c82fff19180fe5778d1460728394463c4fea62f86e797961220b768a8df8c07e"
	},
	{
		"id": "c44b2b508679",
		"ts": "2026-07-11T16:53:30.408Z",
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
		"liquidityUsd": 1618053.06,
		"hash": "c44b2b50867973e72670c4f2bbdc827e92f17cde6daca3a456eb55e685fd183e"
	},
	{
		"id": "a3c385566c0e",
		"ts": "2026-07-11T16:53:30.640Z",
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
		"liquidityUsd": 726143.52,
		"hash": "a3c385566c0ed2f41f6a937b945a1392159e4bc6f0e96e69ce56a9cf35308d94"
	},
	{
		"id": "880b8ce2b32b",
		"ts": "2026-07-11T16:53:30.870Z",
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
		"liquidityUsd": 354410.97,
		"hash": "880b8ce2b32b1c172a2188852034ce83bafe3a41ddaa08eda2d143905e68c195"
	},
	{
		"id": "7d350122632d",
		"ts": "2026-07-11T16:53:31.103Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3150007.08,
		"hash": "7d350122632d16dc4ffb8d952a0cac525f7931da67af6afb58db20756cea9c30"
	},
	{
		"id": "bf2320ddd651",
		"ts": "2026-07-11T16:53:31.336Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1929329.61,
		"hash": "bf2320ddd651b95cc3352f108a89fd7a8c78398bdd0b0e3d0d39f110a3a7ae36"
	},
	{
		"id": "d268846bcfee",
		"ts": "2026-07-11T16:53:31.567Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 119276.18,
		"hash": "d268846bcfee87013630fb619ebe9c86b3b7233c87bc8ee9d5c5a55bffab4afd"
	},
	{
		"id": "c5c509bf7b73",
		"ts": "2026-07-11T15:52:28.811Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105583979.31,
		"hash": "c5c509bf7b73b1730052b491f7767fcccac7f54ed3a2368aed9c9e11b51b5ca2"
	},
	{
		"id": "829e6bb853a4",
		"ts": "2026-07-11T15:52:29.018Z",
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
		"liquidityUsd": 16541677.25,
		"hash": "829e6bb853a42f8c54745b2c8817ac4a77268b0c9058b0423f1968c9bd0cbd5c"
	},
	{
		"id": "8b243ab97826",
		"ts": "2026-07-11T15:52:29.224Z",
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
		"liquidityUsd": 1375418,
		"hash": "8b243ab97826be091c6d59e1bbc8349dde0897cd5a05a2484a53d3d825d80103"
	},
	{
		"id": "76dd777e5d65",
		"ts": "2026-07-11T15:52:29.421Z",
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
		"liquidityUsd": 31182966.16,
		"hash": "76dd777e5d65323d131e468dc11f8fdb5ffd0ab6d6f07b790e17f5f003187986"
	},
	{
		"id": "e1390a0b364b",
		"ts": "2026-07-11T15:52:29.616Z",
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
		"liquidityUsd": 4655569.27,
		"hash": "e1390a0b364bc58a843a1e4bcbae14132a251323e18f013fbf407be4db27b7c6"
	},
	{
		"id": "40cb06745322",
		"ts": "2026-07-11T15:52:29.808Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1009523.23,
		"hash": "40cb06745322fef38d68a85dad9c5ecffacf709d6a3e26c256a7b3095f473b52"
	},
	{
		"id": "bc32768e9780",
		"ts": "2026-07-11T15:52:30.005Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3181521.91,
		"hash": "bc32768e9780e56a8db786e9258e6a26ca7d082f990d3c8e70475adbefa66aaf"
	},
	{
		"id": "e530987daf98",
		"ts": "2026-07-11T15:52:30.237Z",
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
		"liquidityUsd": 2430189.15,
		"hash": "e530987daf987df8eff82921b89d1c08169aab573182c3700ec3721c633477ec"
	},
	{
		"id": "a5140e765fd6",
		"ts": "2026-07-11T15:52:30.430Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 288030.67,
		"hash": "a5140e765fd6efa11d935856668882b357870516f94f5f86e4aa6d352fdd5b80"
	},
	{
		"id": "7456091ca067",
		"ts": "2026-07-11T15:52:30.629Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2369098.08,
		"hash": "7456091ca067a0041ffb2c237cf8513b093c2306526869bcb361610aed0b7691"
	},
	{
		"id": "abcf37074b24",
		"ts": "2026-07-11T15:52:30.825Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1776162.69,
		"hash": "abcf37074b2426da90ebbe187d2a6e1fe311cb56607edf1491e7c0d335c47b0a"
	},
	{
		"id": "3663c326d479",
		"ts": "2026-07-11T15:52:31.032Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 323540.59,
		"hash": "3663c326d47972369316cd80d7646140f8593ffa6e2e89cf7fa395fdcad81667"
	},
	{
		"id": "3dfc00edfa53",
		"ts": "2026-07-11T15:52:31.235Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 721577.7,
		"hash": "3dfc00edfa53bd28967e51ae017ab88af75bb800c8e6e790d05294f701c6d491"
	},
	{
		"id": "20a8664f1736",
		"ts": "2026-07-11T15:52:31.423Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3181521.57,
		"hash": "20a8664f17367f85371c53f5de8ba3f191af293786e0c7eaacdc22fea8c64fd8"
	},
	{
		"id": "639af0693f5c",
		"ts": "2026-07-11T15:52:31.620Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1920545.17,
		"hash": "639af0693f5c5ee8b9577cafa7eeb9f652b9547d81d3bfef82853cde0e2d717e"
	},
	{
		"id": "9582250b7c70",
		"ts": "2026-07-11T15:52:31.864Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 88009.11,
		"hash": "9582250b7c70c0716c9a04604f83d70af4a3c9f35c4f2cbcc0c6cd4de7de8d70"
	},
	{
		"id": "5c4813318b9c",
		"ts": "2026-07-11T14:49:21.464Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105601256.58,
		"hash": "5c4813318b9c31a7e3ab0da4f3e7604493a28a392e96882489fc0fac5edaba5c"
	},
	{
		"id": "c7e99378b4ac",
		"ts": "2026-07-11T14:49:21.709Z",
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
		"liquidityUsd": 16692530.03,
		"hash": "c7e99378b4ace45aa4d61d43a0ce51c4ad290b9a2dea01fd3f841f30db0c5f91"
	},
	{
		"id": "3165533c90fd",
		"ts": "2026-07-11T14:49:21.984Z",
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
		"liquidityUsd": 1369491.07,
		"hash": "3165533c90fd00eb7facd38732e46b157ea283a613b0bbaa0965e5b4942abd56"
	},
	{
		"id": "4e72a94903f8",
		"ts": "2026-07-11T14:49:22.226Z",
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
		"liquidityUsd": 31209858.03,
		"hash": "4e72a94903f87963c048136996f0446f20d39fc15ac2226d4adaceb0864d7ac9"
	},
	{
		"id": "e967a11bc007",
		"ts": "2026-07-11T14:49:22.473Z",
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
		"liquidityUsd": 4664127.2,
		"hash": "e967a11bc007ee6e883af82f163153dc5d1b1eff996717a416a281c5a706a6ee"
	},
	{
		"id": "3914fbc69344",
		"ts": "2026-07-11T14:49:22.711Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1009531.39,
		"hash": "3914fbc6934492b680af24dfb09d82c2efe6978102077cae8707f91c8fc39f17"
	},
	{
		"id": "1b8557789b7a",
		"ts": "2026-07-11T14:49:22.950Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3129507.18,
		"hash": "1b8557789b7ac5dcceaa220e7907100083c2fc9bb71db9bf2ef72788e30b662f"
	},
	{
		"id": "3486f70c9641",
		"ts": "2026-07-11T14:49:23.189Z",
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
		"liquidityUsd": 2470846.84,
		"hash": "3486f70c9641c0cdaa9f576834973b5bf459b2ff9e26326885e43a38a8a80ac4"
	},
	{
		"id": "59ba8df56b62",
		"ts": "2026-07-11T14:49:23.423Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2374242.25,
		"hash": "59ba8df56b6216b5d041cc9bcf359070330c3375df62970b3882333f0e18c9d5"
	},
	{
		"id": "2ae68923de02",
		"ts": "2026-07-11T14:49:23.668Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 274064.8,
		"hash": "2ae68923de029e864c006cb857a8534c964990e8645af7de1e1dd7d66ffa2cac"
	},
	{
		"id": "a9899cc626ba",
		"ts": "2026-07-11T14:49:23.890Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 302989.57,
		"hash": "a9899cc626ba992c954879f2da0b087872cee6fed343b24306e985dceab10612"
	},
	{
		"id": "eef132dd37a6",
		"ts": "2026-07-11T14:49:24.110Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3128582.14,
		"hash": "eef132dd37a6521fa37a46834a7ac239b6e104ad847e58e0855813de3b5eb987"
	},
	{
		"id": "8fc209639850",
		"ts": "2026-07-11T14:49:24.333Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 719779.97,
		"hash": "8fc209639850b08ca03ac961d67387c75e7b2015d077c22331e8f97bf12f3d8d"
	},
	{
		"id": "12880969715e",
		"ts": "2026-07-11T14:49:24.556Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1759044.13,
		"hash": "12880969715e2b4e368bd4d9b4bd22d41038beadfcd105f5ddcb7c5e497fff3c"
	},
	{
		"id": "8fe0b994160d",
		"ts": "2026-07-11T14:49:24.776Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 88237.79,
		"hash": "8fe0b994160d0051e1d039d39c686a7d9d4342318b98317b0482fd10257c0925"
	},
	{
		"id": "d2c15cf73ded",
		"ts": "2026-07-11T14:49:24.999Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1939814.92,
		"hash": "d2c15cf73ded4374f70e40e5c16818643375b499716ed8628e52485178dc97f9"
	},
	{
		"id": "92d0e79d6789",
		"ts": "2026-07-11T13:10:21.273Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105246183.19,
		"hash": "92d0e79d67890b95807b537418ae191fb22d89b8cf994b47507192156b660c0a"
	},
	{
		"id": "c34835f44ea5",
		"ts": "2026-07-11T13:10:21.752Z",
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
		"liquidityUsd": 16454068.77,
		"hash": "c34835f44ea58503af383fa4dae46931bd0dd335a79d0b96734eff07aa0fa653"
	},
	{
		"id": "a54f7fa818b0",
		"ts": "2026-07-11T13:10:22.250Z",
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
		"liquidityUsd": 1367247.01,
		"hash": "a54f7fa818b007436350efaf8873360d6d172011d5e92a15069223033fb780ba"
	},
	{
		"id": "1db1e83761c9",
		"ts": "2026-07-11T13:10:22.929Z",
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
		"liquidityUsd": 31073410.03,
		"hash": "1db1e83761c96918a83ad445b6c0bcfa58e7178cdb6e78e8f5d0bf537427a1b6"
	},
	{
		"id": "7c41f3c3129d",
		"ts": "2026-07-11T13:10:23.207Z",
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
		"liquidityUsd": 4646355.44,
		"hash": "7c41f3c3129d2151def3fe262011da980107b3aa27e793853eeb5159bd3245d6"
	},
	{
		"id": "08bad86d4eeb",
		"ts": "2026-07-11T13:10:23.469Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 996801.98,
		"hash": "08bad86d4eebb37d2d41afd7f47a9f1c3fd3e4430e97f6ce9b52441061d3036c"
	},
	{
		"id": "104ad812e219",
		"ts": "2026-07-11T13:10:23.719Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3149955.87,
		"hash": "104ad812e2199bed16531a40e572b148228f0d2d7dd6be5072bc4a16b8ba65a2"
	},
	{
		"id": "ed89965c8295",
		"ts": "2026-07-11T13:10:24.678Z",
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
		"liquidityUsd": 2433160.19,
		"hash": "ed89965c8295141b53ea1a9f04b917d4c13ce887e4ae9d5bddf70aa5ca1e072c"
	},
	{
		"id": "9a583705bab4",
		"ts": "2026-07-11T13:10:24.939Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2380795.22,
		"hash": "9a583705bab4e21f777476df84c78793c1a8891903d250ce937a8edd5d1db4cf"
	},
	{
		"id": "e22c354de70f",
		"ts": "2026-07-11T13:10:25.193Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 255704.99,
		"hash": "e22c354de70f304b802d98a5e2f21ee9a3c72bf7d8b1c5815bb8d8a2a7c416bb"
	},
	{
		"id": "ccb68aa10909",
		"ts": "2026-07-11T13:10:25.437Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3149955.87,
		"hash": "ccb68aa109090b61e61fca1c85f05e4e863bec0ea60503b70fc3723673db9ab1"
	},
	{
		"id": "b3d683995030",
		"ts": "2026-07-11T13:10:25.684Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 397428.37,
		"hash": "b3d683995030e5b76c5f1196221084da732d556d3db826ec2ab19b2f3d224ebf"
	},
	{
		"id": "0bfbe52d131c",
		"ts": "2026-07-11T13:10:25.920Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1807371.9,
		"hash": "0bfbe52d131c1ec859878e824d36b31185e1a28f484e8fb5658c3c5b71a9c956"
	},
	{
		"id": "63ef4bfc4ab9",
		"ts": "2026-07-11T13:10:26.163Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 697493.33,
		"hash": "63ef4bfc4ab945e081b036b68834b4c97cc1331c73d478ddffa2079c8bc2ccd9"
	},
	{
		"id": "b925dbf17750",
		"ts": "2026-07-11T13:10:26.409Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 94330.06,
		"hash": "b925dbf17750e38bc06215a97ae48ca4afa8de91988d05f52279400f7c89dd82"
	},
	{
		"id": "b8a0f7756c22",
		"ts": "2026-07-11T13:10:26.647Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 74151.98,
		"hash": "b8a0f7756c2279716f481ba10f801b046b7c98cc1b21c65e259fbc0a21471b97"
	},
	{
		"id": "d3f2bfa78608",
		"ts": "2026-07-11T13:10:26.889Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1152849.89,
		"hash": "d3f2bfa78608a5a36e0144682a1683d2645f3ba8eb1da91569ac55a04529bdc9"
	},
	{
		"id": "0b4c467b3ed5",
		"ts": "2026-07-11T11:01:31.043Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105184951.54,
		"hash": "0b4c467b3ed55259994c50b7926894005b76358bc1fef565a82aa9fa428ccf9b"
	},
	{
		"id": "e70c9c68f48d",
		"ts": "2026-07-11T11:01:31.489Z",
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
		"liquidityUsd": 16744219.16,
		"hash": "e70c9c68f48d851684c0c9c6462333e838ecb0367cb192c76970d4e3c62da289"
	},
	{
		"id": "f904e558e5fd",
		"ts": "2026-07-11T11:01:31.947Z",
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
		"liquidityUsd": 1364528.12,
		"hash": "f904e558e5fd55b1b47ec295542918f4e7cdb201efd52c8513419b5d5bc7337d"
	},
	{
		"id": "f84246fa273a",
		"ts": "2026-07-11T11:01:32.192Z",
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
		"liquidityUsd": 30945344.12,
		"hash": "f84246fa273aa52b27b272c81d0bc91c85febbc0d1952bc99a5d27e64f16acd2"
	},
	{
		"id": "5ccc1e277f45",
		"ts": "2026-07-11T11:01:32.438Z",
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
		"liquidityUsd": 4625435.22,
		"hash": "5ccc1e277f45f812da7d1c2b25062e5e496d9f027991823cc7da424e1f670f6e"
	},
	{
		"id": "c38494b1ab2f",
		"ts": "2026-07-11T11:01:34.030Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 999269.83,
		"hash": "c38494b1ab2f50a6041dda87996a3a5daf28f3dcf38de12164b626c8f3887906"
	},
	{
		"id": "21fd8ddd0215",
		"ts": "2026-07-11T11:01:34.271Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3150482.73,
		"hash": "21fd8ddd02151c90dea439805b1ac68e96243a6e8cbafce6bd8eefc4a94eacb9"
	},
	{
		"id": "dd00a7dcc1cd",
		"ts": "2026-07-11T11:01:34.511Z",
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
		"liquidityUsd": 2446098.88,
		"hash": "dd00a7dcc1cd8f146d9da5dbef39a71a972dfa273a47f8d8c24c265266098ad6"
	},
	{
		"id": "52b7b87bc350",
		"ts": "2026-07-11T11:01:34.758Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2365661.86,
		"hash": "52b7b87bc350a907aa9bc32c5babc19dc86a03861047f1d51b5ed2f76d90de6a"
	},
	{
		"id": "5df57e2c7c77",
		"ts": "2026-07-11T11:01:35.601Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 253137.69,
		"hash": "5df57e2c7c777f26f40ad26d9d35d542807ecd2bbfee872a85b5c78099be88ce"
	},
	{
		"id": "6e6fc28ef42f",
		"ts": "2026-07-11T11:01:35.846Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3150482.73,
		"hash": "6e6fc28ef42f7e472a3bbdd051ee4e252e5ae450810026e424063dd1c3d50833"
	},
	{
		"id": "941f33e35e63",
		"ts": "2026-07-11T11:01:36.074Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 316333.12,
		"hash": "941f33e35e6338cf9d593628dff0a0e1fbe7c26c90602652fafa89eae59b0435"
	},
	{
		"id": "eaa3b28b5509",
		"ts": "2026-07-11T11:01:36.294Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1811062.23,
		"hash": "eaa3b28b55099fe1183de551b42bdf539f3691cf546f4b6d3818a6ec6320d277"
	},
	{
		"id": "80f8e822b273",
		"ts": "2026-07-11T11:01:36.520Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 87289.18,
		"hash": "80f8e822b273835be50be33e1c22eb09248874821858ca95c4f2577cbff9a692"
	},
	{
		"id": "8e3b660f77f1",
		"ts": "2026-07-11T11:01:36.741Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 686987.03,
		"hash": "8e3b660f77f1212b3d7ce15e9da0d23a1468609b5eac29b00960d4f85838e9c7"
	},
	{
		"id": "24a1f20473ff",
		"ts": "2026-07-11T11:01:36.969Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 812764.89,
		"hash": "24a1f20473ff1a9ddf9e46fc960a36ecdfae5a9a08eb2a6a93705a17f9821d81"
	},
	{
		"id": "a4dbd777ea82",
		"ts": "2026-07-11T11:01:37.190Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 72944.38,
		"hash": "a4dbd777ea829977a7b882427cbdac40318d0166245b3c4421ec98ce69800375"
	}
]
