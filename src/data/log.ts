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
	"updatedAt": "2026-08-21T18:30:57.425Z",
	"tokensScored": 13165,
	"verdictsIssued": 13165,
	"safe": 11351,
	"risky": 939,
	"likelyRug": 875,
	"ticks": 770
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "0ab8218524a3",
		"ts": "2026-08-21T18:30:50.696Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111072775.45,
		"hash": "0ab8218524a36e9e3535a2bcd686779a2831525bf5668d74882f0bdbe749cbb7"
	},
	{
		"id": "f49467c1c47a",
		"ts": "2026-08-21T18:30:51.361Z",
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
		"liquidityUsd": 17165059.37,
		"hash": "f49467c1c47a46be3bde083b583b34160b7cf33da07ef9cbf68d5072d93d94fd"
	},
	{
		"id": "b977002540aa",
		"ts": "2026-08-21T18:30:51.799Z",
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
		"liquidityUsd": 920881.93,
		"hash": "b977002540aa86f7866ef80c74e7affb7ff402601a3b3c7cbe710d75a27925e8"
	},
	{
		"id": "4fb02708f9b4",
		"ts": "2026-08-21T18:30:52.228Z",
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
		"liquidityUsd": 27961780.63,
		"hash": "4fb02708f9b42f933247c92441f0b96384b0594fae6fb2021c72dfd527698df3"
	},
	{
		"id": "b9aaaede7794",
		"ts": "2026-08-21T18:30:52.664Z",
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
		"liquidityUsd": 3412796.8,
		"hash": "b9aaaede7794fcaaad855bf10e39b10a2aa480d085379e474c52a3577d5d1f50"
	},
	{
		"id": "b5b48a45d33f",
		"ts": "2026-08-21T18:30:52.904Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1172689.81,
		"hash": "b5b48a45d33fdbbd92fea2dec3c7e9cf12fa039265a1eedecee8ea061cb96ef3"
	},
	{
		"id": "2c11ef156db1",
		"ts": "2026-08-21T18:30:53.134Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4747361.33,
		"hash": "2c11ef156db1e2435f415374ffe57ff78f3f0da0ae20962bcddbc1a7bc0f53d9"
	},
	{
		"id": "15ba4b98bf12",
		"ts": "2026-08-21T18:30:54.007Z",
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
		"liquidityUsd": 1674482.94,
		"hash": "15ba4b98bf122b896f6b679e56fd1a29ecbff22a182f807aa26c5b0f3229ec16"
	},
	{
		"id": "61337daa9944",
		"ts": "2026-08-21T18:30:54.239Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 938881.21,
		"hash": "61337daa9944e5b3a45079ffbb29fff313bd5f8506eba033a86b04210df71ed8"
	},
	{
		"id": "1fd62f38115f",
		"ts": "2026-08-21T18:30:54.472Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 275715.02,
		"hash": "1fd62f38115f3cfc057c90f9e98cdc2b221bb1c3082b4e7e96fb902ca568474d"
	},
	{
		"id": "12a88f33004a",
		"ts": "2026-08-21T18:30:54.690Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11645042.5,
		"hash": "12a88f33004a7e543ec277e320f602276d79800659b115bf985bc055ced6acb8"
	},
	{
		"id": "2e83b6df209f",
		"ts": "2026-08-21T18:30:54.905Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3296542.2,
		"hash": "2e83b6df209f9d65f58b652ed280059cc63dd01135fcc4f27b0c3e34890c44ad"
	},
	{
		"id": "c6c11fc007dd",
		"ts": "2026-08-21T18:30:55.120Z",
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
		"liquidityUsd": 434896.96,
		"hash": "c6c11fc007ddbb13d28033bd1b8eb66b20e297159f998b66bb6b468d2a1f2cd3"
	},
	{
		"id": "9ef69c62311f",
		"ts": "2026-08-21T18:30:55.332Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 602221.84,
		"hash": "9ef69c62311f72d5a2727b99830041fe218e7917d682ac8c29a1aa7c584142df"
	},
	{
		"id": "2349efafae5b",
		"ts": "2026-08-21T18:30:55.550Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 393302.85,
		"hash": "2349efafae5b1c014daf9490b25e1cd8107bb9ebe0c243a45fd28d12921efcbe"
	},
	{
		"id": "79597ffe669b",
		"ts": "2026-08-21T18:30:55.764Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 75032.5,
		"hash": "79597ffe669b91ad105930d5671bfff7878a8060a8304e5fb21464b98601343e"
	},
	{
		"id": "bad808e0a125",
		"ts": "2026-08-21T18:30:55.983Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1794271.06,
		"hash": "bad808e0a1254031b490ddd8e24d64381b7471c60f1467b0578d9d8f744b44f4"
	},
	{
		"id": "de88f4544834",
		"ts": "2026-08-21T18:30:56.998Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1002819.06,
		"hash": "de88f454483425e2ca3375cbd23e7404f698161332beeb2f0aa8006677071ad1"
	},
	{
		"id": "1dc617c782c9",
		"ts": "2026-08-21T18:30:57.425Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4398586.07,
		"hash": "1dc617c782c981d8b172c5609c39b42e4c79a6ef9ad10594fb70c4fc47cab994"
	},
	{
		"id": "2f79fd6ebb83",
		"ts": "2026-08-21T17:24:19.716Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111803446.89,
		"hash": "2f79fd6ebb83779a0527f05915acd91efe10dbe2c85052a7e0eb21ced207052d"
	},
	{
		"id": "28c38b6861a4",
		"ts": "2026-08-21T17:24:20.065Z",
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
		"liquidityUsd": 13608584.74,
		"hash": "28c38b6861a46798e82704aba054f6230132755102c196d3042f5d3ae552e28b"
	},
	{
		"id": "9c2db4bff920",
		"ts": "2026-08-21T17:24:20.377Z",
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
		"liquidityUsd": 919835.95,
		"hash": "9c2db4bff920e49a6813a95a65ea2c8e1d137877718200b2501df8025a7fbaef"
	},
	{
		"id": "dd35eb0a9721",
		"ts": "2026-08-21T17:24:20.576Z",
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
		"liquidityUsd": 28119714.75,
		"hash": "dd35eb0a9721cdb6d119c44f7867e95a7798e1161619be70fb3ee212c4e3cf41"
	},
	{
		"id": "165efad0a272",
		"ts": "2026-08-21T17:24:20.763Z",
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
		"liquidityUsd": 3395154.72,
		"hash": "165efad0a27205d21ee472dc3436bff7957a1600b963cf1bf97bce12fe67c2c1"
	},
	{
		"id": "6155eb9b7498",
		"ts": "2026-08-21T17:24:20.980Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1164814.31,
		"hash": "6155eb9b749882c09c24cb35ffcd61600a18ee4eeecf7a75ca9356a9b1e15699"
	},
	{
		"id": "682c9e4b9707",
		"ts": "2026-08-21T17:24:21.195Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28119714.75,
		"hash": "682c9e4b9707c07a00a58308b123b70d44c65e05838d8a16710f9d4a140154b4"
	},
	{
		"id": "c4297e4ac73e",
		"ts": "2026-08-21T17:24:21.408Z",
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
		"liquidityUsd": 1661162.08,
		"hash": "c4297e4ac73ef592a7f006d94a5d9ed0ff1d5a01c50bad23e2f6f94c7a47333d"
	},
	{
		"id": "03f61f0d04e3",
		"ts": "2026-08-21T17:24:22.071Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 974197.72,
		"hash": "03f61f0d04e3157e70fedd5e03ab6e736c7ab6a4153a31226604c1563d110352"
	},
	{
		"id": "54bb2365300d",
		"ts": "2026-08-21T17:24:22.280Z",
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
		"liquidityUsd": 11574355.02,
		"hash": "54bb2365300d7035a3a713f45f94b57852dbdfbf148f34c793473bbc8094a7ef"
	},
	{
		"id": "d591fb93401c",
		"ts": "2026-08-21T17:24:22.486Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 280650.46,
		"hash": "d591fb93401c1be55e51a5bbe549388bbda23c0084b7a20ce248f9c80ca24961"
	},
	{
		"id": "b7d9f5a8d991",
		"ts": "2026-08-21T17:24:22.684Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3233096.98,
		"hash": "b7d9f5a8d991f4e5759b1fc5fcab8f5074982f4c95136213f8135df6d5301436"
	},
	{
		"id": "bdbef23bea2b",
		"ts": "2026-08-21T17:24:22.899Z",
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
		"liquidityUsd": 440927.96,
		"hash": "bdbef23bea2bdbf1351a123ed889077faa157ce67d6ad97074a9fe354172de67"
	},
	{
		"id": "48f040611a99",
		"ts": "2026-08-21T17:24:23.089Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 599855.53,
		"hash": "48f040611a996432ec7937b9b9f2ff88b8b0573045f8f4f46c7919a7dd1422dd"
	},
	{
		"id": "0f787c3729ef",
		"ts": "2026-08-21T17:24:23.278Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4375980.9,
		"hash": "0f787c3729efe3a78ca95ed2f1c3971817a7c4daa3b72894859b638d3c9bed7b"
	},
	{
		"id": "3fbd610f1745",
		"ts": "2026-08-21T17:24:23.479Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1793906.08,
		"hash": "3fbd610f1745defd1aa16b3a91efa1e3a81779a226cdc19ed2d45c9f3b30592a"
	},
	{
		"id": "c3f6f07fee28",
		"ts": "2026-08-21T17:24:23.679Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4744443.98,
		"hash": "c3f6f07fee28519c21916d1ce9be58d8984ad02fccaf5ac3c91ee80ff71c464e"
	},
	{
		"id": "99458c53f76c",
		"ts": "2026-08-21T17:24:23.950Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 76107.93,
		"hash": "99458c53f76c3b3f1dccef9cd3fc6d7bf4faec604f6deb4a493ae9d7286f7c34"
	},
	{
		"id": "796e9f2798bf",
		"ts": "2026-08-21T17:24:24.148Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 384701.52,
		"hash": "796e9f2798bfe33fbffee0aa6b939787c4e6b2b986e12a315b2238ece64263c4"
	},
	{
		"id": "8ff055145784",
		"ts": "2026-08-21T16:28:27.222Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111804724.72,
		"hash": "8ff0551457845e8cf77c3f4c2e813c5797a9355197790749d318220f68a54447"
	},
	{
		"id": "19be84c16ac6",
		"ts": "2026-08-21T16:28:27.666Z",
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
		"liquidityUsd": 16274656.35,
		"hash": "19be84c16ac616edfb38572c91473882750f9b8363110901e6ecee0113f96ed2"
	},
	{
		"id": "31c96ab207e3",
		"ts": "2026-08-21T16:28:28.097Z",
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
		"liquidityUsd": 916589.87,
		"hash": "31c96ab207e32199fdaa05f1cf6dd6838665935d527a0c73f7fbbbb3efa2f22d"
	},
	{
		"id": "f4a82b7f1eeb",
		"ts": "2026-08-21T16:28:28.336Z",
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
		"liquidityUsd": 28250801.67,
		"hash": "f4a82b7f1eebc07fbb3d7ef167b84f9ca81206cd4bf12b9da1b0864f1dbbcd00"
	},
	{
		"id": "e407fa7dbfba",
		"ts": "2026-08-21T16:28:28.584Z",
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
		"liquidityUsd": 3342239.4,
		"hash": "e407fa7dbfba7cf1623e0171ebc8554cbeacee1afa490ef62e17e52dce527d0f"
	},
	{
		"id": "8e7c230e47c1",
		"ts": "2026-08-21T16:28:28.825Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1158903.89,
		"hash": "8e7c230e47c1ca43d47b4ae902cee5dbdad85d4c23e333cde647bf537493547d"
	},
	{
		"id": "0a074ef1464f",
		"ts": "2026-08-21T16:28:29.065Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28250801.67,
		"hash": "0a074ef1464f294db1382b133df8f84496fa1b08e7f280eca1eb861eab0df4f5"
	},
	{
		"id": "57d14c7090da",
		"ts": "2026-08-21T16:28:29.299Z",
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
		"liquidityUsd": 1651982.23,
		"hash": "57d14c7090da027b2f131985c943cd45dd5549d7aeda44b3d5852c25af50f1c2"
	},
	{
		"id": "d3486a1cb583",
		"ts": "2026-08-21T16:28:29.540Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 992624.58,
		"hash": "d3486a1cb5838c6f721a872ea7815b13da5303fbf198ac44c1965f236ba3f658"
	},
	{
		"id": "6ebd2fb250f6",
		"ts": "2026-08-21T16:28:29.787Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 279034.99,
		"hash": "6ebd2fb250f6987b475bc3ea73fb682aaac8ba16a51ae95bc70ed2cacc3854db"
	},
	{
		"id": "0f3db36181f6",
		"ts": "2026-08-21T16:28:30.008Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11652526.35,
		"hash": "0f3db36181f600d8035921b2c441c6a6e9f223931bd0ebe9d5a28eb8fc631aa6"
	},
	{
		"id": "4e53dd987bfe",
		"ts": "2026-08-21T16:28:30.230Z",
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
		"liquidityUsd": 3216829.8,
		"hash": "4e53dd987bfe970f448f3d4f410967a0234faed4a6976af64a1549342f566daf"
	},
	{
		"id": "732b8ba00c63",
		"ts": "2026-08-21T16:28:30.453Z",
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
		"liquidityUsd": 597857.36,
		"hash": "732b8ba00c631335db25b78655aff5310dc4adb5be4dff61d0062c3aca185141"
	},
	{
		"id": "84f49c68dc2e",
		"ts": "2026-08-21T16:28:30.673Z",
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
		"liquidityUsd": 438257.01,
		"hash": "84f49c68dc2edcaefc9cd6841844cb49d8e1da4c72aaac38a93a23429ff48d4f"
	},
	{
		"id": "b9770165b7ae",
		"ts": "2026-08-21T16:28:30.894Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4383350.15,
		"hash": "b9770165b7ae1fd469605d267ab3dedd2c59de8a2b7c07124bb53decd6df9425"
	},
	{
		"id": "182ff64f985a",
		"ts": "2026-08-21T16:28:31.121Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1785442.77,
		"hash": "182ff64f985acee0c3d6f9c8512a7097e92803b5b265bdf4164f7246603c603a"
	},
	{
		"id": "2a9f445ae780",
		"ts": "2026-08-21T16:28:31.343Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4776134.72,
		"hash": "2a9f445ae780119ce23f3018c01c066dcacd54f8bd8650f62e9b0b69d55f307b"
	},
	{
		"id": "ba17c75c6585",
		"ts": "2026-08-21T16:28:31.567Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 383815.96,
		"hash": "ba17c75c6585eb6e48ab88bd11329ea3a11398ea4618d7c645c86f7ecfa9a8d6"
	},
	{
		"id": "f9b1c542edf3",
		"ts": "2026-08-21T16:28:31.964Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 77093.23,
		"hash": "f9b1c542edf3299742f70709a174c6ebddb4a2edb53175a03fd393bce93e9b44"
	},
	{
		"id": "a83f000d1db4",
		"ts": "2026-08-21T15:28:24.897Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111734803.47,
		"hash": "a83f000d1db45734465b42bd167d73ff0e8fe4a4011bb1364b7c1699783e14ea"
	},
	{
		"id": "c298ce822188",
		"ts": "2026-08-21T15:28:25.229Z",
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
		"liquidityUsd": 16931271.31,
		"hash": "c298ce8221884f8195eff9508e316266a3fea01a5483592f389ee70db24bf901"
	},
	{
		"id": "59e6a30fe657",
		"ts": "2026-08-21T15:28:25.577Z",
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
		"liquidityUsd": 921059.78,
		"hash": "59e6a30fe657b0adf63f4b567816f2fc0db3439edc50db6198d8690f805b1c9e"
	},
	{
		"id": "a6c3b954cff9",
		"ts": "2026-08-21T15:28:25.776Z",
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
		"liquidityUsd": 28482796.28,
		"hash": "a6c3b954cff9c3c2daf8df50ea95b491114d1c0880448e2b561791a8cddbc890"
	},
	{
		"id": "f08c1e90ffb8",
		"ts": "2026-08-21T15:28:26.287Z",
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
		"liquidityUsd": 3369554.16,
		"hash": "f08c1e90ffb8c0b60f958083cce20ba1b74d9ad5fcc76fb0f5278fc337d5e716"
	},
	{
		"id": "9725386518b9",
		"ts": "2026-08-21T15:28:26.486Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1165434.33,
		"hash": "9725386518b999d091ec49a868cd6c93c70c4ad662a1632085cb4ad38b890a1b"
	},
	{
		"id": "1396c8dffb91",
		"ts": "2026-08-21T15:28:26.691Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28482796.28,
		"hash": "1396c8dffb91fe404c887477bf6cc1098ef0e97154e730bc2dd66e9f31e86fc8"
	},
	{
		"id": "fcfb51715608",
		"ts": "2026-08-21T15:28:26.889Z",
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
		"liquidityUsd": 1406410.88,
		"hash": "fcfb517156089813053b0c018241f148bc1f947c5693554f1487011a9904cb29"
	},
	{
		"id": "fa2477766160",
		"ts": "2026-08-21T15:28:27.106Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1027507.43,
		"hash": "fa247776616042f3d52c26d6b9881dfc9428e81796a8b0e7e44835eedbc88acd"
	},
	{
		"id": "40592c2fc548",
		"ts": "2026-08-21T15:28:27.309Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 284961.04,
		"hash": "40592c2fc548c2c3a5011b02bee30fea4de1437a3d19e3a5b86d537dc46bdbce"
	},
	{
		"id": "5dc54efc27b4",
		"ts": "2026-08-21T15:28:27.519Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11725046.17,
		"hash": "5dc54efc27b4938beabf9a0d5c0a6f530365592ffd730d72f6d53a5ab1a91108"
	},
	{
		"id": "17664bfd9678",
		"ts": "2026-08-21T15:28:27.740Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3234592.88,
		"hash": "17664bfd96785aa9f9455dace9ee8607a65f35cc5307d9375dac226cb12e4777"
	},
	{
		"id": "3286051f3962",
		"ts": "2026-08-21T15:28:27.936Z",
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
		"liquidityUsd": 428903.61,
		"hash": "3286051f3962e1669937f65377e1281d93c7f5169bf8a6c4f42ccce4d068fec9"
	},
	{
		"id": "f95a976de1a6",
		"ts": "2026-08-21T15:28:28.336Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 598515.61,
		"hash": "f95a976de1a6e983c0cfcb5a070a78da8c0591cfe01531f8bfb0e9eed6c0cf3e"
	},
	{
		"id": "52ddb4c3a385",
		"ts": "2026-08-21T15:28:28.979Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4369851.2,
		"hash": "52ddb4c3a38555564a9a39d87888e5f26498da45d6b4152c1f0fb19d8cc06c00"
	},
	{
		"id": "278561983d3e",
		"ts": "2026-08-21T15:28:29.645Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1795709.85,
		"hash": "278561983d3e629d88d3c06453754b49d7db0fae9c554dd84bcb0fa6b60c5124"
	},
	{
		"id": "673b6bd20972",
		"ts": "2026-08-21T15:28:30.199Z",
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
		"liquidityUsd": 820160.95,
		"hash": "673b6bd209729b16d494ad3218754b1c79a1e59e138a8a296a9b8a04a8291a34"
	},
	{
		"id": "fb564347f1f1",
		"ts": "2026-08-21T15:28:30.656Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 4770210.53,
		"hash": "fb564347f1f18b9306c63613ee08a3140e28b26e364d24dd697d93cf4770a8be"
	},
	{
		"id": "f7c8bbaf0cac",
		"ts": "2026-08-21T15:28:30.863Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 389417.81,
		"hash": "f7c8bbaf0cacea55112cb83fe52eb98964387c48d5f0f5920d697b773fa3b28e"
	},
	{
		"id": "ac8e4dc04391",
		"ts": "2026-08-21T14:30:43.456Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111567145.2,
		"hash": "ac8e4dc043911d12da7d209c54b3cdbc915f787723ef2e74b515e13203668dc0"
	},
	{
		"id": "cb8678d72811",
		"ts": "2026-08-21T14:30:43.786Z",
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
		"liquidityUsd": 14036150.47,
		"hash": "cb8678d728114c05cf06d6b5fb7154d7d637d10f883ffb04dcb545b62b1e93fc"
	},
	{
		"id": "c445f8e7bb3d",
		"ts": "2026-08-21T14:30:43.973Z",
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
		"liquidityUsd": 918386.64,
		"hash": "c445f8e7bb3d7b2eb9b50618333f8e875a246a05aca5dbc35b13461be8624bd9"
	},
	{
		"id": "f2dda8391098",
		"ts": "2026-08-21T14:30:44.167Z",
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
		"liquidityUsd": 28291586.82,
		"hash": "f2dda8391098dc033bc24d515ca55c25ad391a01c3c824a2946ce8c1fef487a5"
	},
	{
		"id": "c8f5071d3eab",
		"ts": "2026-08-21T14:30:44.404Z",
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
		"liquidityUsd": 3367016.44,
		"hash": "c8f5071d3eab8c773ec2faccf1debf55e17f7ed18f67cd3ef6725a72b46e2f3c"
	},
	{
		"id": "6c313170172d",
		"ts": "2026-08-21T14:30:44.630Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1157273.07,
		"hash": "6c313170172d0af0ce6796e55fe108ecfafcd50896b84f001c79ce37268aa0cd"
	},
	{
		"id": "833947166d50",
		"ts": "2026-08-21T14:30:44.828Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28307705.95,
		"hash": "833947166d50076835bfd14cec399933aaa29e8ccb7cb7ccb65517dc2077d884"
	},
	{
		"id": "75bf892d764b",
		"ts": "2026-08-21T14:30:45.019Z",
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
		"liquidityUsd": 1588333.99,
		"hash": "75bf892d764b3f77538c32c32c0f4f7b66149a00887b88eb62710f9d07150fa0"
	},
	{
		"id": "e43621ac1089",
		"ts": "2026-08-21T14:30:45.213Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1005435.3,
		"hash": "e43621ac1089c701a581ffc563192429f59dc44b83c7a0142e2d29daadd6056a"
	},
	{
		"id": "67acedc1c4a8",
		"ts": "2026-08-21T14:30:45.402Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 286643.42,
		"hash": "67acedc1c4a8971f99839a7efe3cfcb5367b7a9253adbcfe4946fe57e67fe567"
	},
	{
		"id": "1f3c2ff1e6d8",
		"ts": "2026-08-21T14:30:45.583Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11666945.01,
		"hash": "1f3c2ff1e6d8391222946687f52a2b690b14c5deb162be56c1bb37ea77f6b3e4"
	},
	{
		"id": "c688104264c8",
		"ts": "2026-08-21T14:30:45.896Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3215406.17,
		"hash": "c688104264c8f59f58fe733de3722200b62e3900afbc0bb90981e0ba95f61d6c"
	},
	{
		"id": "f3e843a5a3b0",
		"ts": "2026-08-21T14:30:46.073Z",
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
		"liquidityUsd": 429963.07,
		"hash": "f3e843a5a3b05f242d07a7c5ee58580448a7c7b17e2a5ea3414634e38a10037c"
	},
	{
		"id": "636ca921b931",
		"ts": "2026-08-21T14:30:46.452Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 595773.86,
		"hash": "636ca921b931e326ef1bccdb44ffb76c712815c090e7b6c9b3b43b4e0ea38eeb"
	},
	{
		"id": "d42066d4e708",
		"ts": "2026-08-21T14:30:46.634Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4239826.55,
		"hash": "d42066d4e7085419da6d6bf1adafd38b01845bff6d0383712ceed4ee40c02503"
	},
	{
		"id": "04e97651cb64",
		"ts": "2026-08-21T14:30:46.843Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1779881.22,
		"hash": "04e97651cb64653499aec462fcc02962749bbba5001ac00a8e8503639610ef3d"
	},
	{
		"id": "d855ed73d9f7",
		"ts": "2026-08-21T14:30:47.204Z",
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
		"liquidityUsd": 815248.56,
		"hash": "d855ed73d9f7830bbe3db6a2d3437f4c2abeade92bb61d85f47d87e14c1bef0a"
	},
	{
		"id": "90c3087c415a",
		"ts": "2026-08-21T14:30:47.825Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4893967.32,
		"hash": "90c3087c415a539c2013ac3ef019fcaa896ce09e1bdcec48e3353a4d98f1d034"
	},
	{
		"id": "16439aafdbad",
		"ts": "2026-08-21T14:30:48.013Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 386193.51,
		"hash": "16439aafdbad9c49c6ea435efea61c9c27c71c55b1f0a67f0f2975fb80114976"
	},
	{
		"id": "f30c748c61c9",
		"ts": "2026-08-21T14:30:48.224Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 995525.61,
		"hash": "f30c748c61c930413c75e0fc42e8e6eb961154ca40254c83b1be28c65d0172af"
	},
	{
		"id": "b05ad231d573",
		"ts": "2026-08-21T13:41:39.938Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110883740.69,
		"hash": "b05ad231d573b0c41d38b3e737b189f2c81cf53207101a3d6f75a18ef66ce986"
	},
	{
		"id": "6e736ec1dbd4",
		"ts": "2026-08-21T13:41:40.363Z",
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
		"liquidityUsd": 14925696.93,
		"hash": "6e736ec1dbd4e12a866bdbb539146050f46526ade155055b3647d318e50656ee"
	},
	{
		"id": "bcc7de1bfc12",
		"ts": "2026-08-21T13:41:40.623Z",
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
		"liquidityUsd": 919776,
		"hash": "bcc7de1bfc12969537b2689ed69c350faf7e6b291863cb0680eb1d5493e71b24"
	},
	{
		"id": "c864788ae4f2",
		"ts": "2026-08-21T13:41:40.868Z",
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
		"liquidityUsd": 28240546.14,
		"hash": "c864788ae4f23e62d216e72d30cf3ba140e0375e8eac05e9ea2fe490bc348a17"
	},
	{
		"id": "40597b66ea7b",
		"ts": "2026-08-21T13:41:41.117Z",
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
		"liquidityUsd": 3306916.71,
		"hash": "40597b66ea7be2f958e637acea6b4309934b3697442781b6868223b7ddb86037"
	},
	{
		"id": "1cc7b75792b2",
		"ts": "2026-08-21T13:41:41.381Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1152242.58,
		"hash": "1cc7b75792b22a43198cee603a1f7b3ff8a17243050758968abcc93fa25bcfb4"
	},
	{
		"id": "7e0a34ff3925",
		"ts": "2026-08-21T13:41:41.773Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28252377.49,
		"hash": "7e0a34ff39257abac91111989adc79e591345f488b2e3041f88ddfcccb16c25b"
	},
	{
		"id": "3c63d01a76bb",
		"ts": "2026-08-21T13:41:42.070Z",
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
		"liquidityUsd": 1570821.62,
		"hash": "3c63d01a76bb7641f7d7710d14f070403935466db2dd38df07020c698e49facb"
	},
	{
		"id": "93366a44ec0e",
		"ts": "2026-08-21T13:41:42.315Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 956622.14,
		"hash": "93366a44ec0eb686d6e82b14b5b616a36792a5b28db915da25a7568ece2a3930"
	},
	{
		"id": "888b62eb0232",
		"ts": "2026-08-21T13:41:42.774Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
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
		"liquidityUsd": 284437.76,
		"hash": "888b62eb0232e0a2afc2b938f884ca33679de3c4261c32626efe44e1cef5166b"
	},
	{
		"id": "48b22c6c44cf",
		"ts": "2026-08-21T13:41:43.000Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11684740.46,
		"hash": "48b22c6c44cfb553df58c3c66accbed289ba533bae53870cc0504d458529abf5"
	},
	{
		"id": "6f9b14aaa2d7",
		"ts": "2026-08-21T13:41:43.227Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3092885.91,
		"hash": "6f9b14aaa2d77cd02fe607fd8a46962f2f71ef7d36a0b27c7d98caed86b32975"
	},
	{
		"id": "f012e8601bbf",
		"ts": "2026-08-21T13:41:43.455Z",
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
		"liquidityUsd": 433555.72,
		"hash": "f012e8601bbfb65af368ebed0f9dcda29f1882816f620f309e2f12a81ff249b3"
	},
	{
		"id": "b116a30458bd",
		"ts": "2026-08-21T13:41:43.683Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 602493.9,
		"hash": "b116a30458bd0337281eef87c27435eb5c57bba9f977b087cfb48ac98aa85316"
	},
	{
		"id": "7698f21c0c72",
		"ts": "2026-08-21T13:41:44.400Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4244574.42,
		"hash": "7698f21c0c7282a2bac2568b09581db091fd5006e3020b6db74f8b94f832fbab"
	},
	{
		"id": "0a33bcb7c19c",
		"ts": "2026-08-21T13:41:44.658Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1759030.31,
		"hash": "0a33bcb7c19c7457882693d0d9a3234ebccf2fcdca9485a6bfdc878efb86c018"
	},
	{
		"id": "51b082a26cc8",
		"ts": "2026-08-21T13:41:45.186Z",
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
		"liquidityUsd": 803775.95,
		"hash": "51b082a26cc8544d13fc78d6cc6d52a8903a1b716ffce999f3fc9f1d4ab36d49"
	},
	{
		"id": "44e2d5f437f9",
		"ts": "2026-08-21T13:41:45.413Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 990890.23,
		"hash": "44e2d5f437f96c940e574aa96d857ed366217dda36faff6c581defa607dd9132"
	},
	{
		"id": "54c160f7eebd",
		"ts": "2026-08-21T13:41:45.880Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 380715.41,
		"hash": "54c160f7eebdb85a6a33b421da61bc363644bc96a67758dce3dd6f5270a3774d"
	},
	{
		"id": "e9ab8e9a1731",
		"ts": "2026-08-21T13:41:46.105Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4841168.26,
		"hash": "e9ab8e9a1731636b9cf97bdc21644dd3736b6acae50253aab7e3530d76fdc367"
	},
	{
		"id": "805adcff47b4",
		"ts": "2026-08-21T12:38:01.115Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111742520.42,
		"hash": "805adcff47b4a97bcbbda7d01d8dea2aaf2d36464b6bad6086d44f3a22a5777f"
	},
	{
		"id": "cc15f26b6fd2",
		"ts": "2026-08-21T12:38:01.848Z",
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
		"liquidityUsd": 14727425.8,
		"hash": "cc15f26b6fd266fe970461803e49ca29036c8f20ee0e4499e4980e57d0445307"
	},
	{
		"id": "76b37e41d563",
		"ts": "2026-08-21T12:38:02.291Z",
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
		"liquidityUsd": 922510.58,
		"hash": "76b37e41d563b583802313ae6dcc61c04b41e138ab98e61fd761f509cf3f2e1c"
	},
	{
		"id": "1fcfe2b4adae",
		"ts": "2026-08-21T12:38:02.858Z",
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
		"liquidityUsd": 28292673.01,
		"hash": "1fcfe2b4adae59a8b9f71a8b3d9eeee88e975e245cc3364599234eb9bc1c51d9"
	},
	{
		"id": "2ddee30b2839",
		"ts": "2026-08-21T12:38:03.465Z",
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
		"liquidityUsd": 3292533.73,
		"hash": "2ddee30b2839dc34ebab0e0b649aff349fbdcf1ff62ac580139abb00d4b87d0b"
	},
	{
		"id": "afb2b160f3be",
		"ts": "2026-08-21T12:38:03.945Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1138465.08,
		"hash": "afb2b160f3bea8ff0440c68cb18f89c8947c72fff1441b9ccb1a9c26d01847db"
	},
	{
		"id": "884b754a7b8f",
		"ts": "2026-08-21T12:38:04.184Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28292673.01,
		"hash": "884b754a7b8f0e4335b655d10d86e58f1748beb564a474729f585db60872a457"
	},
	{
		"id": "e084a417ec4f",
		"ts": "2026-08-21T12:38:04.493Z",
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
		"liquidityUsd": 1639095.29,
		"hash": "e084a417ec4f27fd287d43e701c045801ff8585b4f68d7da3b65a4b16dcbd849"
	},
	{
		"id": "226d473d4bf4",
		"ts": "2026-08-21T12:38:04.890Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 967759.72,
		"hash": "226d473d4bf4e91dd96a598259bd09040683f1492379bff3cb967fab050d3643"
	},
	{
		"id": "ee33006e7572",
		"ts": "2026-08-21T12:38:05.318Z",
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
		"liquidityUsd": 11591354.54,
		"hash": "ee33006e7572b99b10d30b1c66897ed3bcbfb6c6ddc0bb7175ecfdb4f89f0370"
	},
	{
		"id": "427b1023894b",
		"ts": "2026-08-21T12:38:05.560Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 283015.59,
		"hash": "427b1023894bf2ec39cba6baa66583db992b709c0fd20f7099cbbe128338b072"
	},
	{
		"id": "68bf37754b97",
		"ts": "2026-08-21T12:38:05.790Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3178093.79,
		"hash": "68bf37754b971d01fcbf8be68e9f2516da5ff2e4dc16066f5d2ad2df40a3e7a1"
	},
	{
		"id": "0d28ad60c8bf",
		"ts": "2026-08-21T12:38:06.030Z",
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
		"liquidityUsd": 440328.73,
		"hash": "0d28ad60c8bf88c8e203ad6cad5effc961eb4e9ef62665f1de44d229954f25b4"
	},
	{
		"id": "94f10f1e9489",
		"ts": "2026-08-21T12:38:06.257Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 601510.81,
		"hash": "94f10f1e948952eed6e7ff095108de11fcddba4a4f053162be78cc39488aa3a0"
	},
	{
		"id": "dc7e95462df2",
		"ts": "2026-08-21T12:38:06.477Z",
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
		"liquidityUsd": 806875.35,
		"hash": "dc7e95462df2ec199c29a7fc4421622580a2326db844d3a7a49bc73bb7a2bd17"
	},
	{
		"id": "9f07213c35c4",
		"ts": "2026-08-21T12:38:06.716Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1758546.54,
		"hash": "9f07213c35c4112f2b48ed484598f218f204782dac1efb61091766c391fa4e4c"
	},
	{
		"id": "445e9e5a6143",
		"ts": "2026-08-21T12:38:06.946Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4234330.63,
		"hash": "445e9e5a614328087dd07c69a458f259f31acd896524d578a47db9a2e3f15001"
	},
	{
		"id": "d00cc24dbd5a",
		"ts": "2026-08-21T12:38:07.168Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4956056.27,
		"hash": "d00cc24dbd5ae8aa74a1325bbfe764315f11af80444a577cacf3fb002688cc57"
	},
	{
		"id": "62a8f533043f",
		"ts": "2026-08-21T12:38:07.408Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 987762.04,
		"hash": "62a8f533043f2b1fb6dcefc79d0b0ef95a894c5a89b64494f46d500102b7fe33"
	},
	{
		"id": "190e4bdcebf4",
		"ts": "2026-08-21T11:21:13.750Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111762567.15,
		"hash": "190e4bdcebf4f2535331c6138ba8c61e61f037f7c76dc0c5980df782ce9a8bac"
	},
	{
		"id": "78d2ff7e90fd",
		"ts": "2026-08-21T11:21:14.176Z",
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
		"liquidityUsd": 13498340.33,
		"hash": "78d2ff7e90fd8516cd21f33115a2ffef02b3f65a5d2d763310984d323afcad1c"
	},
	{
		"id": "92139d898d3e",
		"ts": "2026-08-21T11:21:14.422Z",
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
		"liquidityUsd": 921851.1,
		"hash": "92139d898d3e6b19412f27c87d014e62b60a4b119b93de9b2fe1ff4738ab642f"
	},
	{
		"id": "82b12230047e",
		"ts": "2026-08-21T11:21:14.652Z",
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
		"liquidityUsd": 28387972.45,
		"hash": "82b12230047eb98d9c9febd4262416404a6f3eb23f4847cac8bec9a565afbec6"
	},
	{
		"id": "4fc2b0959f5d",
		"ts": "2026-08-21T11:21:14.897Z",
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
		"liquidityUsd": 3276848.28,
		"hash": "4fc2b0959f5df58c959e04aa0d9445d86f6c84ab44c12a5784a83890c04936f5"
	},
	{
		"id": "5886e8d207ac",
		"ts": "2026-08-21T11:21:15.129Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1147280.9,
		"hash": "5886e8d207ac76d97277be7081aafe3917d0c72befcecb4a5faa0c2eb1de2a2a"
	},
	{
		"id": "3be1a7c4e0f0",
		"ts": "2026-08-21T11:21:15.484Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28387967.57,
		"hash": "3be1a7c4e0f0dc2aec15a3d9133d0c34986fb1c29f1f0008e6bbae3eb624ab90"
	},
	{
		"id": "d3be3503e3d0",
		"ts": "2026-08-21T11:21:15.714Z",
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
		"liquidityUsd": 1641112.89,
		"hash": "d3be3503e3d0894f767805c0d6f72fddc0bcc7c5e697be23ae51110e212ac9aa"
	},
	{
		"id": "7e486b29afed",
		"ts": "2026-08-21T11:21:16.870Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 889036.29,
		"hash": "7e486b29afed4e93711dc909259507e0124d073dcd229bc08fe449486df85a29"
	},
	{
		"id": "bdf438d567e8",
		"ts": "2026-08-21T11:21:17.116Z",
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
		"liquidityUsd": 11534398.96,
		"hash": "bdf438d567e89e860fdb0a1c496ac1089e021e51f35a5696db8b20ddfefde402"
	},
	{
		"id": "892021ff4609",
		"ts": "2026-08-21T11:21:17.329Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 259510.21,
		"hash": "892021ff4609c495ac7f2f9b6fe4f4b2f506ad050741a4278e6a8ff7f487d130"
	},
	{
		"id": "74ec05b15935",
		"ts": "2026-08-21T11:21:17.708Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3129668.01,
		"hash": "74ec05b15935d03e56fe8102e9f7a3631e4cb7805e97e345af37622cfe5b3500"
	},
	{
		"id": "46b35ebfcc58",
		"ts": "2026-08-21T11:21:17.920Z",
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
		"liquidityUsd": 452171.99,
		"hash": "46b35ebfcc58707d5144736cfdf10411440c821db15c01c16b69cc5d593f2fe8"
	},
	{
		"id": "28b52051bd43",
		"ts": "2026-08-21T11:21:18.145Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 605478.82,
		"hash": "28b52051bd43f3b5601583d4cb5a8a4338b8a2dcbf94ce9c2fc1a8b200a8555e"
	},
	{
		"id": "11d83e62a75e",
		"ts": "2026-08-21T11:21:18.356Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4948923.2,
		"hash": "11d83e62a75e387c56c950ea8dd8c20a81718000527d4e177cf6c3948f381850"
	},
	{
		"id": "40daf5c7f69f",
		"ts": "2026-08-21T11:21:18.583Z",
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
		"liquidityUsd": 830804.47,
		"hash": "40daf5c7f69f5739993f78d3126abbb8efad8760b4f983768ce28f975b4e71a4"
	},
	{
		"id": "704dcf989099",
		"ts": "2026-08-21T11:21:18.795Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1790607.11,
		"hash": "704dcf98909911a25b74a9972f2444dfa75f122dd61c1d3d29cdbd6944067922"
	},
	{
		"id": "d930f9066a82",
		"ts": "2026-08-21T11:21:19.020Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4203746.63,
		"hash": "d930f9066a82e4ec9383cde82e2ac6857505840f59218312efed79b86f2e01ff"
	},
	{
		"id": "de8d72264f04",
		"ts": "2026-08-21T11:21:19.232Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 989835.95,
		"hash": "de8d72264f046389545734c570aeaaf0f4e850a2bc320ba19baee756c59bec19"
	},
	{
		"id": "9523d12c2d29",
		"ts": "2026-08-21T10:25:34.452Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112142071.44,
		"hash": "9523d12c2d294d36c6473e0d6b46987a11fe45e46aa47755ff4c3e30b5f34eb1"
	},
	{
		"id": "59998bb7b7ea",
		"ts": "2026-08-21T10:25:34.925Z",
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
		"liquidityUsd": 19647136.76,
		"hash": "59998bb7b7eaa2082a43b93e529fa93221eaebd3124accee00c4ce016b9b9544"
	},
	{
		"id": "3c4247a9be9d",
		"ts": "2026-08-21T10:25:35.186Z",
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
		"liquidityUsd": 925168.95,
		"hash": "3c4247a9be9d5404aca36d7514c747fffd4a2932ae2b6521c5a8b9d80de6fb6c"
	},
	{
		"id": "dcdf1e7b46cc",
		"ts": "2026-08-21T10:25:35.443Z",
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
		"liquidityUsd": 28420479.67,
		"hash": "dcdf1e7b46ccbb1e0930f7ec30fbcbfc62ab900d96299e7ec91047933e310bc2"
	},
	{
		"id": "83b5d598751c",
		"ts": "2026-08-21T10:25:35.714Z",
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
		"liquidityUsd": 3269711.96,
		"hash": "83b5d598751c3dfe2fe75a717d73b38266cfef2188960db19a466c5614113c65"
	},
	{
		"id": "9d3102824c53",
		"ts": "2026-08-21T10:25:35.974Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1157872.83,
		"hash": "9d3102824c537a019bc4bbc5c19ef6721915fe944330bff99034dfb996464f08"
	},
	{
		"id": "7cd472a4df5f",
		"ts": "2026-08-21T10:25:36.229Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28420479.67,
		"hash": "7cd472a4df5fbff7d0bdafd4739ba2a5331687faebf1083a3e664ed745ab05df"
	},
	{
		"id": "948fb590a3f0",
		"ts": "2026-08-21T10:25:36.502Z",
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
		"liquidityUsd": 1661703.64,
		"hash": "948fb590a3f03f6aa432b48ddae5573dda9397172cb5a11b9f7c4c4752df365a"
	},
	{
		"id": "c4c29cff5925",
		"ts": "2026-08-21T10:25:36.883Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 941178.38,
		"hash": "c4c29cff5925d5f8b595146be63d876f93ecdea15a7ab1e071712f70a1389093"
	},
	{
		"id": "aa8ad0adc2ee",
		"ts": "2026-08-21T10:25:37.150Z",
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
		"liquidityUsd": 11702486.03,
		"hash": "aa8ad0adc2ee22258fe793844498606ee2fbe9d339de5ab90d8a3a6c0cb804ca"
	},
	{
		"id": "674fdd0c3810",
		"ts": "2026-08-21T10:25:37.389Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 256531.38,
		"hash": "674fdd0c3810cbb521d72dcc9619f2334535f86a5dbdecbb739af8537d8522a2"
	},
	{
		"id": "f8864088a169",
		"ts": "2026-08-21T10:25:37.630Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3179255.46,
		"hash": "f8864088a1693456f9a0e9ffe1b75262fae521cdfc839b524837ac591f93fe8d"
	},
	{
		"id": "77ad6ec0a368",
		"ts": "2026-08-21T10:25:37.868Z",
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
		"liquidityUsd": 444327.48,
		"hash": "77ad6ec0a36876ee70258d1c779349f855d6d1e570cab45eabcea54173a3434c"
	},
	{
		"id": "a975fd99a611",
		"ts": "2026-08-21T10:25:38.108Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 615302.22,
		"hash": "a975fd99a61193de7e25ec2de973ff3f2290142a70a1bb1030dccab3f782ce9f"
	},
	{
		"id": "163294f68a85",
		"ts": "2026-08-21T10:25:38.353Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4784480.4,
		"hash": "163294f68a851cd32a800f46de44064923b095246e2fe4f093835eef6e4f5dba"
	},
	{
		"id": "05c1809e538b",
		"ts": "2026-08-21T10:25:38.588Z",
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
		"liquidityUsd": 820051.74,
		"hash": "05c1809e538b49c7dd5cde51cd7922014cdafaecb0a2c26631c3217094bb8f2a"
	},
	{
		"id": "0ab99792cef6",
		"ts": "2026-08-21T10:25:38.825Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1807913.38,
		"hash": "0ab99792cef6f8acca3e3b223c667d9b24591c3b0a8d134ab6a9cc61edb97f03"
	},
	{
		"id": "4af9e7a580cf",
		"ts": "2026-08-21T10:25:39.064Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4242332.62,
		"hash": "4af9e7a580cf3198c0663a42deab15041b4c82c7df2ce140684d7e90c3ca3b29"
	},
	{
		"id": "093e7d7a111a",
		"ts": "2026-08-21T10:25:39.306Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1011314.2,
		"hash": "093e7d7a111aee8677f203205489e4583fed52af12115c8a9d8d0bb967cb826b"
	},
	{
		"id": "b7c388d84729",
		"ts": "2026-08-21T09:32:22.446Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112170279.96,
		"hash": "b7c388d8472940f60ec70baff1adcb9c27abe6e083f5f8ba8ddf8778efd696a9"
	},
	{
		"id": "c843b617c9e9",
		"ts": "2026-08-21T09:32:22.906Z",
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
		"liquidityUsd": 15332623.4,
		"hash": "c843b617c9e94d5996b9aa8621e966960ca619907bcdf2e0f38701721ed91494"
	},
	{
		"id": "7f72893722ac",
		"ts": "2026-08-21T09:32:23.167Z",
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
		"liquidityUsd": 928893.39,
		"hash": "7f72893722ac00a9953ba8db7750cc7fa36b0e4ebc39d727db34483708b6c85a"
	},
	{
		"id": "779e999ea7d0",
		"ts": "2026-08-21T09:32:23.423Z",
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
		"liquidityUsd": 28390419.4,
		"hash": "779e999ea7d05400b96f30448e26450438de9670b8bd96465ae6450be6c56cb8"
	},
	{
		"id": "caae6044c1f8",
		"ts": "2026-08-21T09:32:23.705Z",
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
		"liquidityUsd": 3241065.53,
		"hash": "caae6044c1f8b7b196671408d01f56716a256f67ed0042bee560c480ab064a3a"
	},
	{
		"id": "6497c2631a1e",
		"ts": "2026-08-21T09:32:23.959Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1133876.92,
		"hash": "6497c2631a1e7178bf4c98361219f719d0cfb603eb2663872669ec0d78adf86a"
	},
	{
		"id": "dde5fbd431b8",
		"ts": "2026-08-21T09:32:24.208Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28390419.47,
		"hash": "dde5fbd431b83668ce56172bf3d4f92e0214125c27b032d36bec7ae797aa0292"
	},
	{
		"id": "662b0afb4ed7",
		"ts": "2026-08-21T09:32:24.503Z",
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
		"liquidityUsd": 1650008.55,
		"hash": "662b0afb4ed7c86698badd6b6b01570155b4bddb2a693a533cc7279fbdbb6434"
	},
	{
		"id": "61abe0634ba9",
		"ts": "2026-08-21T09:32:24.748Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 918889.43,
		"hash": "61abe0634ba9441f75262c6a602fe8cdacd1927e0dad2b7161e20833a8f08749"
	},
	{
		"id": "e4bee6a2a7e3",
		"ts": "2026-08-21T09:32:25.016Z",
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
		"liquidityUsd": 11694926.95,
		"hash": "e4bee6a2a7e39ef34cbfb51ced99e2d8c1940e9a4a8fbbaad7aa812a6b9d597e"
	},
	{
		"id": "9a0306f3d906",
		"ts": "2026-08-21T09:32:25.249Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 255833.26,
		"hash": "9a0306f3d9060acb2e370f90f64d5ccafed9be593825551cbfa5347e68508555"
	},
	{
		"id": "f37f6c5db3bc",
		"ts": "2026-08-21T09:32:25.481Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3148952.61,
		"hash": "f37f6c5db3bc40dd96f073a63ca9972d92cee1b8fe6c0f7e8c153e6ded913ee7"
	},
	{
		"id": "bc855ad2591d",
		"ts": "2026-08-21T09:32:25.711Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 606279.66,
		"hash": "bc855ad2591d1dcb79a526d983eb37e3f1b990000927487c199179c6bf59ab57"
	},
	{
		"id": "f8834e390a8c",
		"ts": "2026-08-21T09:32:25.940Z",
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
		"liquidityUsd": 434868.84,
		"hash": "f8834e390a8cbd81dc1866d1ccf6b5805b85aa0ca5fca1cb415d9001bf5661d4"
	},
	{
		"id": "d5bd2144549d",
		"ts": "2026-08-21T09:32:26.168Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4488640.63,
		"hash": "d5bd2144549d6448e21b45fc7065cd8c69d5aa90eb15f7ef0d6bae077b371042"
	},
	{
		"id": "9e0f68eb97fd",
		"ts": "2026-08-21T09:32:26.749Z",
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
		"liquidityUsd": 816916.96,
		"hash": "9e0f68eb97fdf8f88c4dc937f413c2447af6fb44d9b271e1df6fd18e76925a4e"
	},
	{
		"id": "8456e7abffd3",
		"ts": "2026-08-21T09:32:26.984Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1813227.67,
		"hash": "8456e7abffd39e7df902b671d94a7593dc9e9575be389829b84db90929efaf7f"
	},
	{
		"id": "ffd0187da0f3",
		"ts": "2026-08-21T09:32:27.216Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4211859.6,
		"hash": "ffd0187da0f37759ab02ec4a5d1c9937de41d12ecbf956bf66c86e3f69c0420d"
	},
	{
		"id": "19989ac810da",
		"ts": "2026-08-21T09:32:27.447Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1010192.67,
		"hash": "19989ac810daec016ae5ae14cce71adb74ae28e96c5ca84c03644f3a56c22d6c"
	},
	{
		"id": "04ea492a9c40",
		"ts": "2026-08-21T08:35:35.572Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112300368.94,
		"hash": "04ea492a9c40efcfe567cdcd9a488b8d9f7d1405c132d6997275bf338f1a0b3d"
	},
	{
		"id": "33bf11a88b55",
		"ts": "2026-08-21T08:35:36.210Z",
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
		"liquidityUsd": 17017239.71,
		"hash": "33bf11a88b55a21e3cdb654b8f2c229b3c88f1312ecec58ee530c8416cf019ee"
	},
	{
		"id": "293183f644ff",
		"ts": "2026-08-21T08:35:36.645Z",
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
		"liquidityUsd": 919091.6,
		"hash": "293183f644ff58b8cec53b041b8a1fd419f4666618f2204f66dfa64cea2c7775"
	},
	{
		"id": "89183f742e94",
		"ts": "2026-08-21T08:35:37.202Z",
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
		"liquidityUsd": 28650250.85,
		"hash": "89183f742e949e8203b6495651fd57e987f526428b5d717786b54a453ad8c669"
	},
	{
		"id": "18dbdcaec6e3",
		"ts": "2026-08-21T08:35:37.663Z",
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
		"liquidityUsd": 3252024.21,
		"hash": "18dbdcaec6e3dfad355fac492d3a10e2adacde6f67870bb65bc5187153796c4f"
	},
	{
		"id": "1c6544b9dfcd",
		"ts": "2026-08-21T08:35:37.893Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1129008.04,
		"hash": "1c6544b9dfcd5a3a8e7027b6f4b3c15f7ce9d2615229a19c69b4d58e2ee3b277"
	},
	{
		"id": "f518b8eaeed3",
		"ts": "2026-08-21T08:35:38.146Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28650250.85,
		"hash": "f518b8eaeed310e3de265aa4afd97bd4d58e2f27e6dfebe5e17f38ec7fb82f1d"
	},
	{
		"id": "f1ce594c9b6c",
		"ts": "2026-08-21T08:35:38.415Z",
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
		"liquidityUsd": 1654925.27,
		"hash": "f1ce594c9b6c6649aa977dc6cd6c136f4dbcd6f8b5d82231fa6eaf983c4c55e3"
	}
]
