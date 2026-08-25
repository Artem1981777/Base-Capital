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
	"updatedAt": "2026-08-25T22:22:06.147Z",
	"tokensScored": 14994,
	"verdictsIssued": 14994,
	"safe": 12794,
	"risky": 1107,
	"likelyRug": 1093,
	"ticks": 866
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "f016f0ff9aca",
		"ts": "2026-08-25T22:22:01.522Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114542485.98,
		"hash": "f016f0ff9aca5362d2525c745e78b97e35ef59a30f46f02d7092b17201b1f548"
	},
	{
		"id": "dd9940637c13",
		"ts": "2026-08-25T22:22:02.002Z",
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
		"liquidityUsd": 17544999.26,
		"hash": "dd9940637c13cfc09fc5da42790be6ffa3e4da5df0524315c006de2a3939cf02"
	},
	{
		"id": "bbc575031a01",
		"ts": "2026-08-25T22:22:02.257Z",
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
		"liquidityUsd": 970561.96,
		"hash": "bbc575031a01bf5555a557253d41f8aa1266b834490b6404b6d08387712752f4"
	},
	{
		"id": "6e03a2dbe6ab",
		"ts": "2026-08-25T22:22:02.521Z",
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
		"liquidityUsd": 29798587.88,
		"hash": "6e03a2dbe6ab1bcc263d170653f5020c04d152c2e55adf84ad3add59fa0498f5"
	},
	{
		"id": "35ca0729aa11",
		"ts": "2026-08-25T22:22:02.765Z",
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
		"liquidityUsd": 4624339.8,
		"hash": "35ca0729aa1189e2d876e7c444012687ee538201a8aec4bc5488000ca71df75c"
	},
	{
		"id": "24289cde5c39",
		"ts": "2026-08-25T22:22:03.035Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1175591.65,
		"hash": "24289cde5c39f98e8e1b79b641b7a46aaffb36279c29cdc52176873c2bba81a7"
	},
	{
		"id": "18a1927be820",
		"ts": "2026-08-25T22:22:03.277Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1310007.66,
		"hash": "18a1927be820dbd94f9c0a5803eaf9e399f6d36e1f33f7c7769090a45ba93e7b"
	},
	{
		"id": "36bd1738db57",
		"ts": "2026-08-25T22:22:03.558Z",
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
		"liquidityUsd": 1901386.06,
		"hash": "36bd1738db57cd96c8eb2a4c77e4e82f22bb38f6b7a70bcf04792d24257e3311"
	},
	{
		"id": "485d40e26ca5",
		"ts": "2026-08-25T22:22:03.829Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1502810.21,
		"hash": "485d40e26ca58ce74678e25759ed1321fc1679363c7763e2de3aa872f03a830b"
	},
	{
		"id": "a9f46bab094f",
		"ts": "2026-08-25T22:22:04.083Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 777371.98,
		"hash": "a9f46bab094f48bca8d74e8bbd5e991c1ed1139ed2db898f4e9e920034429827"
	},
	{
		"id": "07fd09aaf84f",
		"ts": "2026-08-25T22:22:04.303Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1257963.65,
		"hash": "07fd09aaf84fa9c180699f560a1299c97e1e0e7b9f3bf464f585e95dd88a4df6"
	},
	{
		"id": "8d3b4256b971",
		"ts": "2026-08-25T22:22:04.534Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 529727.95,
		"hash": "8d3b4256b9717af64bbaa3882626a7d807c5eed8fa4cd94f2af9d594aeb2ee59"
	},
	{
		"id": "758d9ba7e778",
		"ts": "2026-08-25T22:22:04.754Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1310011.05,
		"hash": "758d9ba7e7783a9292d8e3eb5f1d1f0c4bdabd902e1492da46d36ffab4fca5fc"
	},
	{
		"id": "32f326db6f42",
		"ts": "2026-08-25T22:22:04.984Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4042358.92,
		"hash": "32f326db6f420efe9a042f8785d768c4f746d1e39112a545728b263e480605aa"
	},
	{
		"id": "1f9d61d76a8a",
		"ts": "2026-08-25T22:22:05.211Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11552664.77,
		"hash": "1f9d61d76a8a846e1a21d096af3cb8ddb42e56e711544438886b50fc1c5e76c0"
	},
	{
		"id": "ee1ba9af184b",
		"ts": "2026-08-25T22:22:05.436Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 89619.47,
		"hash": "ee1ba9af184b68aa3f87de0cd31f340647eacfd659b7b78c283977415f2af6c2"
	},
	{
		"id": "5e445d590bd0",
		"ts": "2026-08-25T22:22:05.678Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3351626.72,
		"hash": "5e445d590bd092be6def81042416ffbc1e73af39cd2b0ff7a340e23f759cf6c3"
	},
	{
		"id": "16cb8cf97505",
		"ts": "2026-08-25T22:22:05.917Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1872021.96,
		"hash": "16cb8cf9750592ea3e8af596d13b11d0f7fc902b1f2d5aafeb28a3aadbde09cb"
	},
	{
		"id": "5ae37a18f70e",
		"ts": "2026-08-25T22:22:06.146Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 560461.36,
		"hash": "5ae37a18f70e670cdb3ad5c56fe50e7ecdea51f6928fb787fe29eaac6a98d8fe"
	},
	{
		"id": "e394ba72cb27",
		"ts": "2026-08-25T21:23:33.589Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114169894.33,
		"hash": "e394ba72cb27bd3b36069b3636ccd0a078e28beee721b964b358c1983bedde21"
	},
	{
		"id": "4e319f3a24db",
		"ts": "2026-08-25T21:23:34.195Z",
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
		"liquidityUsd": 13455856.88,
		"hash": "4e319f3a24db6fb1c9d367142b2befa80da5f2dbb6e65ed53adfee773c9f6ed2"
	},
	{
		"id": "bc96cd8e2527",
		"ts": "2026-08-25T21:23:34.466Z",
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
		"liquidityUsd": 962168.55,
		"hash": "bc96cd8e25273fa784abd08a7da3dc00597b71a0c409a41bdc58ca083c28bc0c"
	},
	{
		"id": "267b25b5f5bc",
		"ts": "2026-08-25T21:23:34.740Z",
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
		"liquidityUsd": 28684501.02,
		"hash": "267b25b5f5bc14e5334c3098068c079c6787003b82d8804505fe6db15e5977d3"
	},
	{
		"id": "47586b0a8cc4",
		"ts": "2026-08-25T21:23:34.991Z",
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
		"liquidityUsd": 4576137.68,
		"hash": "47586b0a8cc4ba797862d231faca08be1c5388798610a272d32ceab93e5943e1"
	},
	{
		"id": "e93a9c377d75",
		"ts": "2026-08-25T21:23:35.237Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1162540.56,
		"hash": "e93a9c377d759c4da31a0bae2062e479c391ecbcf02f12ea3cad2da7578bb036"
	},
	{
		"id": "d7dbbee1c200",
		"ts": "2026-08-25T21:23:35.530Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1331092.6,
		"hash": "d7dbbee1c200dc426088c7ce79091d48f40b1740517761705b082059c984feca"
	},
	{
		"id": "52f4348d5df2",
		"ts": "2026-08-25T21:23:35.778Z",
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
		"liquidityUsd": 1883946.63,
		"hash": "52f4348d5df2dd0fc102ba2d178fab1d4af4c66fc6b7776c815be3a6b04a5f1b"
	},
	{
		"id": "77d65608cc51",
		"ts": "2026-08-25T21:23:36.037Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1526251.47,
		"hash": "77d65608cc51a1f1083a2266d6cb5d1ae74ac92731af9c1c6bdf44b8d87061b7"
	},
	{
		"id": "e0d143d9218e",
		"ts": "2026-08-25T21:23:36.350Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 788382.45,
		"hash": "e0d143d9218eb460e9d04722bc0acca5389e6e0a7c6a19a93379b955f39035d7"
	},
	{
		"id": "7c37c46b10c9",
		"ts": "2026-08-25T21:23:36.631Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1237136.44,
		"hash": "7c37c46b10c9ce966615394179471f6af6a8e4032db07930e12b8531e227ed15"
	},
	{
		"id": "cb2117e4271c",
		"ts": "2026-08-25T21:23:36.859Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1330090.9,
		"hash": "cb2117e4271cc6263ae8a7b95f1b68bcf7926f5ac23bbf47b0892b2022158acd"
	},
	{
		"id": "6708f49c313c",
		"ts": "2026-08-25T21:23:37.116Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4004544.64,
		"hash": "6708f49c313cb570c81ac627dc7573b2ffb2d88d8606d814796e0aee45ff1d21"
	},
	{
		"id": "fa13769c19e3",
		"ts": "2026-08-25T21:23:37.379Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 91268.76,
		"hash": "fa13769c19e3d1711b2538d20f2e912c9f81394949db0ae403d307e7f2b15518"
	},
	{
		"id": "5e1394f31543",
		"ts": "2026-08-25T21:23:37.614Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 476908.94,
		"hash": "5e1394f31543c6bc04187ad1397bd61d092e05d3b786dfa53ca88782f9b03462"
	},
	{
		"id": "4592aa2dd9dd",
		"ts": "2026-08-25T21:23:37.849Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11379922.33,
		"hash": "4592aa2dd9ddc836b63b140625ed9c5b0d85af566a469e542af25dfe5651a515"
	},
	{
		"id": "807692c5703b",
		"ts": "2026-08-25T21:23:38.074Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3300952.99,
		"hash": "807692c5703bfcf9e902992d2e225af56b56336c44a8f36818f7c972cffec1d0"
	},
	{
		"id": "b4c53cbc3740",
		"ts": "2026-08-25T21:23:38.303Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1843720.95,
		"hash": "b4c53cbc37407534d631fb7064533f47b866ac18120fcc37957b08b8c6b8b998"
	},
	{
		"id": "1d786d431340",
		"ts": "2026-08-25T21:23:38.546Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 545747.59,
		"hash": "1d786d431340a27cf222bc0e86ebc3a538cdb2f1f87e517e07e9d56d6bb153b1"
	},
	{
		"id": "83d0a1a2e59b",
		"ts": "2026-08-25T20:23:57.080Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114741246.49,
		"hash": "83d0a1a2e59bd68a7afc980acfd0f82acf3087b915d156ab3e5eda905f50c15e"
	},
	{
		"id": "a7c388b7b94e",
		"ts": "2026-08-25T20:23:57.336Z",
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
		"liquidityUsd": 18255206.81,
		"hash": "a7c388b7b94e393f0d6ce0e35432b75f310d70fdd6366599e802a79280da7fbe"
	},
	{
		"id": "26b6e97a086d",
		"ts": "2026-08-25T20:23:57.550Z",
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
		"liquidityUsd": 973943.18,
		"hash": "26b6e97a086df51232357486eb7e8a53900241ad036306936f9d72864abf46f8"
	},
	{
		"id": "5beb8704d166",
		"ts": "2026-08-25T20:23:57.762Z",
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
		"liquidityUsd": 29683168.35,
		"hash": "5beb8704d1669870d597b4a4eec44f57efa97256466f16618a8a0dddceac646c"
	},
	{
		"id": "99ab1dd84296",
		"ts": "2026-08-25T20:23:57.969Z",
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
		"liquidityUsd": 4654879.62,
		"hash": "99ab1dd84296412c934a0d1e2a3ac80d1d0cd57dce9b54695c7a1c8926a09348"
	},
	{
		"id": "cd07ca4f3274",
		"ts": "2026-08-25T20:23:58.193Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1180577.78,
		"hash": "cd07ca4f3274f9c10544d744b62c93310d997a36377530126025a4fa6c885489"
	},
	{
		"id": "687e7ecdb5ef",
		"ts": "2026-08-25T20:23:58.407Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29683168.35,
		"hash": "687e7ecdb5efe67024a2d3c05d02ab631fa09fee91ec1f6a2160c4ac96cb3c2e"
	},
	{
		"id": "08acf8bb52b9",
		"ts": "2026-08-25T20:23:58.629Z",
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
		"liquidityUsd": 1907419.67,
		"hash": "08acf8bb52b92874a1534b3185416913a26158d394d4ac918693c126c4c3c154"
	},
	{
		"id": "880de4c52209",
		"ts": "2026-08-25T20:23:58.841Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1509852.73,
		"hash": "880de4c5220993fbb695fe501b83877de4d05a03c0bcd17a9198754df76ff1b7"
	},
	{
		"id": "b707f6e12939",
		"ts": "2026-08-25T20:23:59.053Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 805787.86,
		"hash": "b707f6e12939903edbf3646b5c7d718a68b1934d417cf9e676361b02b6fbad31"
	},
	{
		"id": "9d35e4651a0b",
		"ts": "2026-08-25T20:23:59.260Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1218860.42,
		"hash": "9d35e4651a0b8ee8217970851372dd52fc10147ffa4f66bd24bec91f0bfaed34"
	},
	{
		"id": "4359f38afb2b",
		"ts": "2026-08-25T20:23:59.643Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11646114.63,
		"hash": "4359f38afb2b4ed7ada0829512f0919317e4abb89bf6fb13dde09f2d2d8da6f7"
	},
	{
		"id": "7387bd12bf1b",
		"ts": "2026-08-25T20:23:59.847Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1298360.24,
		"hash": "7387bd12bf1bdffaac98d683da90e1dcf7ac89e6c4c6e928afde745de4abd3b6"
	},
	{
		"id": "497e5ae04e78",
		"ts": "2026-08-25T20:24:00.062Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4222151.34,
		"hash": "497e5ae04e786ed2a56925414f364c01c7a9e4542e61855d2347da5914f7a41a"
	},
	{
		"id": "75cfc7427d66",
		"ts": "2026-08-25T20:24:00.269Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 85448.7,
		"hash": "75cfc7427d66727d1614058e48e662e81fe5a94845bb9991badb8a4550c4a909"
	},
	{
		"id": "0858f759489c",
		"ts": "2026-08-25T20:24:00.569Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1873069.41,
		"hash": "0858f759489ce1ef8ae870f65d58f6695e40817c5e1b702b6b7e35995aac40b3"
	},
	{
		"id": "088a6d97a70b",
		"ts": "2026-08-25T20:24:01.038Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3385108.23,
		"hash": "088a6d97a70b0bc13c3c5a4d6d87d216955a152822cbe96296adc7e5954fce6b"
	},
	{
		"id": "6aa0c4106a40",
		"ts": "2026-08-25T20:24:01.280Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 553228.33,
		"hash": "6aa0c4106a40471b138e72eadb43805019c6eb06b53670dd4c5c042db0184b93"
	},
	{
		"id": "402614539f2b",
		"ts": "2026-08-25T20:24:01.490Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 874413.37,
		"hash": "402614539f2b1db0732028da8ff153ffcc476fb49eb302800015fde4461e36c5"
	},
	{
		"id": "66132c1123c8",
		"ts": "2026-08-25T19:27:44.937Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114869420.54,
		"hash": "66132c1123c8b22b74f1a3e075b5c9cdeead12cab2fa561341d7c7994e120fbd"
	},
	{
		"id": "1c29dcc9b510",
		"ts": "2026-08-25T19:27:45.220Z",
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
		"liquidityUsd": 18950791.18,
		"hash": "1c29dcc9b51025725c0a03b39e873addec3bd3c500909de7bcc198bcdd9bbaad"
	},
	{
		"id": "03eb4f31e658",
		"ts": "2026-08-25T19:27:45.496Z",
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
		"liquidityUsd": 976753.38,
		"hash": "03eb4f31e658a19b91eae6403c06f0d97bc2f4884476ca42a0a005853d98c87e"
	},
	{
		"id": "72e9ea61dff4",
		"ts": "2026-08-25T19:27:45.781Z",
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
		"liquidityUsd": 30159313.3,
		"hash": "72e9ea61dff420e12f1906c410917ea75b18d4349ab249ff91a04990aa4e28f6"
	},
	{
		"id": "cf19580471d0",
		"ts": "2026-08-25T19:27:46.055Z",
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
		"liquidityUsd": 4674329.9,
		"hash": "cf19580471d0b3cdeabdca923112406d68ecaa31e042c09ae1143f93c15db7f5"
	},
	{
		"id": "fe7207dca33e",
		"ts": "2026-08-25T19:27:46.335Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1187972.02,
		"hash": "fe7207dca33ee4388fc1d57ddbbc1a2a11fa0e8ab45ffb13057755fec921bb6f"
	},
	{
		"id": "bd3d4b1dec76",
		"ts": "2026-08-25T19:27:46.603Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1265819.36,
		"hash": "bd3d4b1dec76cb74c886ce37a0330deb3e9b61eae135fd8317526d3174486998"
	},
	{
		"id": "e64063e61efc",
		"ts": "2026-08-25T19:27:46.874Z",
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
		"liquidityUsd": 1915696.61,
		"hash": "e64063e61efca230b1204235f0dec15ac092371d6d773fc840f68263107305e8"
	},
	{
		"id": "2770d3f80e5f",
		"ts": "2026-08-25T19:27:47.168Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1491859.37,
		"hash": "2770d3f80e5fe9a771e78007912cd68564b397679a204760a48e9c9cbed4e981"
	},
	{
		"id": "9ea333078e63",
		"ts": "2026-08-25T19:27:47.470Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 775125.97,
		"hash": "9ea333078e636b3260d1864f736cb88ee4515884e141f2c9abc57cf2dc761370"
	},
	{
		"id": "8732f51a5132",
		"ts": "2026-08-25T19:27:47.724Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1223744.02,
		"hash": "8732f51a51320402cdebc3bdb6299301644318eb59987c2cf49fe1c393a252cd"
	},
	{
		"id": "5af0e8cc806f",
		"ts": "2026-08-25T19:27:47.975Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11754817.15,
		"hash": "5af0e8cc806f9d7fc1fe33ece01a95e631f68330f837c14b7406721d60b14172"
	},
	{
		"id": "acab1cd87653",
		"ts": "2026-08-25T19:27:48.231Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1271044,
		"hash": "acab1cd87653bea0801ea1f99983e52c8f146ec13dae2937da1ae0a3c44f9f51"
	},
	{
		"id": "4bcea2a05044",
		"ts": "2026-08-25T19:27:48.483Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4228387.86,
		"hash": "4bcea2a050442e843f869e160a868631c00fa87fc08a1ab068d74e6625388e26"
	},
	{
		"id": "0bfdc7fdaf78",
		"ts": "2026-08-25T19:27:48.744Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1884592.03,
		"hash": "0bfdc7fdaf78ed7e154a793a20a1c1725b39af906fa1c7f9e6f7d6a38a42c3b4"
	},
	{
		"id": "855e04d81502",
		"ts": "2026-08-25T19:27:49.009Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 873767.49,
		"hash": "855e04d81502a6e95c1d89dac864e125ca2bac0b126bd5c6a2b0a7698e149eab"
	},
	{
		"id": "b6c82220c5e1",
		"ts": "2026-08-25T19:27:49.280Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3413268.95,
		"hash": "b6c82220c5e13eeb7ea9c1302456bdfbaca93cc4f1f53fe2ea14da0f28b10402"
	},
	{
		"id": "ec5d492c144d",
		"ts": "2026-08-25T19:27:49.530Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 557614.6,
		"hash": "ec5d492c144dffd47c1f2be31c3051c27a748b0ffddc490951810d299d91d0e4"
	},
	{
		"id": "21c4428c93cb",
		"ts": "2026-08-25T18:34:13.945Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114262413.31,
		"hash": "21c4428c93cb12d27ddfe8b216068e0c126337cba940909096becdb6128c051d"
	},
	{
		"id": "5666320c1aa5",
		"ts": "2026-08-25T18:34:14.306Z",
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
		"liquidityUsd": 17585146.7,
		"hash": "5666320c1aa59f1cc1380de764f82076b2b79aee6318403ee87884a8aa29121a"
	},
	{
		"id": "7674fc6d43e3",
		"ts": "2026-08-25T18:34:14.652Z",
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
		"liquidityUsd": 977336.04,
		"hash": "7674fc6d43e3c8374da87c29c82ea04657b27c4d22dff284b434068fa29e0fb2"
	},
	{
		"id": "3ac8ef304176",
		"ts": "2026-08-25T18:34:14.861Z",
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
		"liquidityUsd": 30403863.3,
		"hash": "3ac8ef304176a0cc7a41ded137330f133f57c90e75d59ef2b3721c2103016510"
	},
	{
		"id": "f24d65fce3c5",
		"ts": "2026-08-25T18:34:15.060Z",
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
		"liquidityUsd": 4686967.38,
		"hash": "f24d65fce3c5bb6dc2fde5a5500b717e1f2aa2a33baaacc0cf9317e4879fba8a"
	},
	{
		"id": "1f8f8da40de6",
		"ts": "2026-08-25T18:34:15.273Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1187972.02,
		"hash": "1f8f8da40de65b6fbb4d7a207eef71352b671adcaa218036f273c10e8cff29f4"
	},
	{
		"id": "f9914fe222dd",
		"ts": "2026-08-25T18:34:15.460Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1208864.05,
		"hash": "f9914fe222dded7134ba1617e057d8ac0abc4e20fed0e3249c584c356c079fea"
	},
	{
		"id": "24892293a6d9",
		"ts": "2026-08-25T18:34:15.720Z",
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
		"liquidityUsd": 1919678.48,
		"hash": "24892293a6d980ab6dec0f34d8747d6880313a52ecfe081115b4df2d1cdc2f00"
	},
	{
		"id": "d3300daa1be9",
		"ts": "2026-08-25T18:34:15.927Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 796816.17,
		"hash": "d3300daa1be9006502dc0645c0c9ab489be2eded83e21964f7c3f4b8e6787952"
	},
	{
		"id": "425dd9237503",
		"ts": "2026-08-25T18:34:16.118Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1235249.61,
		"hash": "425dd9237503b71b963c38f2fba6eecefd6e4db4dd198e414550446644b273eb"
	},
	{
		"id": "741c90882376",
		"ts": "2026-08-25T18:34:16.293Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1520506.05,
		"hash": "741c908823764f4a9fab2b0132bb2583f28e44d68a3f2a674f567a0a391f084e"
	},
	{
		"id": "34f121f090fd",
		"ts": "2026-08-25T18:34:16.489Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11761450.84,
		"hash": "34f121f090fd5ca9b46071317fb9ec7b4e2ae71438dcb746221872362725190e"
	},
	{
		"id": "69109585b0e4",
		"ts": "2026-08-25T18:34:16.852Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1209004.17,
		"hash": "69109585b0e4f57cab7d4baecd2bed9f53a7ecbc85a10b65d302e675a4f7d62b"
	},
	{
		"id": "ac6d5901ad74",
		"ts": "2026-08-25T18:34:17.043Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 877901.72,
		"hash": "ac6d5901ad747f8b8d48a213b51365041d9530a1ae0db91a94d9b5dc17fad598"
	},
	{
		"id": "16cab6cd4ea8",
		"ts": "2026-08-25T18:34:17.225Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4212991,
		"hash": "16cab6cd4ea809c5ae0c26144196dace5f3c7a6181e73158a4c1bb38ded116d6"
	},
	{
		"id": "f3c22f6e0ae2",
		"ts": "2026-08-25T18:34:17.413Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1888667.49,
		"hash": "f3c22f6e0ae2d51307e4854a87bf5aac5b4ff54786761967bb1d9df8c6f03505"
	},
	{
		"id": "78adddd41303",
		"ts": "2026-08-25T18:34:17.619Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 559920.39,
		"hash": "78adddd4130369f034060dbd46a31d23ebbde713b6d3a0cc9acd076a9543f2be"
	},
	{
		"id": "94460785bba8",
		"ts": "2026-08-25T18:34:17.806Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3414094.1,
		"hash": "94460785bba807fd0b3e79f092cbe289faed1a6c70cd47b3754f6d4b094d2ae6"
	},
	{
		"id": "31768478add1",
		"ts": "2026-08-25T18:34:18.013Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1041448.11,
		"hash": "31768478add1b54fc645b9480c820b3a974505898a69f908c8ef7e34e21dc9e5"
	},
	{
		"id": "4f59fb508162",
		"ts": "2026-08-25T17:27:48.016Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114154831.69,
		"hash": "4f59fb5081628c33bad5be4569d857ff1472fc15e4386692e5d1b5f6f1875a53"
	},
	{
		"id": "936cd145707d",
		"ts": "2026-08-25T17:27:48.329Z",
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
		"liquidityUsd": 16324822.58,
		"hash": "936cd145707df13dbc432b6b9d5af08934f4b514431066f52de01095782ed9f8"
	},
	{
		"id": "1d3ba696f711",
		"ts": "2026-08-25T17:27:48.521Z",
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
		"liquidityUsd": 973468.81,
		"hash": "1d3ba696f711ca8ac8b2b4f0570de9b6c43601488898df339fece31d919a94ba"
	},
	{
		"id": "b9bf06e66c89",
		"ts": "2026-08-25T17:27:48.740Z",
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
		"liquidityUsd": 30325719.55,
		"hash": "b9bf06e66c8967db62ade478fcdff7cdda988c8fa661eea5540644a904eae5d9"
	},
	{
		"id": "c2b73d9a3a07",
		"ts": "2026-08-25T17:27:48.955Z",
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
		"liquidityUsd": 4669533.82,
		"hash": "c2b73d9a3a07b0be93438a07d7bc0ae07b2f27881ab853fe08be7a9c440da758"
	},
	{
		"id": "83afe8ef7722",
		"ts": "2026-08-25T17:27:49.144Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1187972.02,
		"hash": "83afe8ef77229cebb3ea105e7ca650a4b87ed333312881cee805bac14c237a4a"
	},
	{
		"id": "27102fc778b3",
		"ts": "2026-08-25T17:27:49.355Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30325719.55,
		"hash": "27102fc778b3fb8bc1a841b5df8583d5d8c4c0fc59871d6366dab5a05eed2bf4"
	},
	{
		"id": "9eee05d90d54",
		"ts": "2026-08-25T17:27:49.578Z",
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
		"liquidityUsd": 1910088.66,
		"hash": "9eee05d90d54ae46d4a0c0e24da90b4fcf5b4bce8e9aa6ff11fb35b5c1601032"
	},
	{
		"id": "17e0630f117c",
		"ts": "2026-08-25T17:27:49.769Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 797221.67,
		"hash": "17e0630f117cddf9f6421e23882fa02890d1b96d55a5cb981a87ab0133fc8cdc"
	},
	{
		"id": "fbada52d1482",
		"ts": "2026-08-25T17:27:49.970Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1248541.83,
		"hash": "fbada52d1482541cf19d08e44d9b4b9183fff84a2ec24d4bd5e28b1ed0ab826b"
	},
	{
		"id": "1e32f118abda",
		"ts": "2026-08-25T17:27:50.181Z",
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
		"liquidityUsd": 1507493.5,
		"hash": "1e32f118abda03be9a32053ca985b31ac5cc0ead04e17a8d3a18837bc357cc67"
	},
	{
		"id": "b3da834e9329",
		"ts": "2026-08-25T17:27:50.379Z",
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
		"liquidityUsd": 11702813.64,
		"hash": "b3da834e932907c582aa9b6410b23580b551e2282713dca2860e2b06378b7cda"
	},
	{
		"id": "bd42b33be884",
		"ts": "2026-08-25T17:27:50.596Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1179477.5,
		"hash": "bd42b33be8844cb68f1364eb358a49e3240f306a6eda0cd9e2288c126409c36e"
	},
	{
		"id": "b906d82526bf",
		"ts": "2026-08-25T17:27:50.827Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 876376.66,
		"hash": "b906d82526bf986c8676b58a7fbc0033c6a931ba54d10518cfe4a674ee7d67fc"
	},
	{
		"id": "faef86eddb5f",
		"ts": "2026-08-25T17:27:51.029Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4225751.09,
		"hash": "faef86eddb5f5ebdd26e6bc79d55e39e89dba6e1f836eb56abb1b78d63f5732e"
	},
	{
		"id": "165968f85490",
		"ts": "2026-08-25T17:27:51.233Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1877281.74,
		"hash": "165968f8549028192865a7ce66f981eecb43b0d79b1e85655cc9b54ffc30b097"
	},
	{
		"id": "18b8b459151c",
		"ts": "2026-08-25T17:27:51.425Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 561598.15,
		"hash": "18b8b459151cd5552cb67731afe6e6120e6a96fec108ef5c70eb0347b2869bd6"
	},
	{
		"id": "46639cb17087",
		"ts": "2026-08-25T17:27:51.627Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1030254.42,
		"hash": "46639cb170879b12ccbfa4242af17d1e5a3fe87b937ddca0d2a40d17c9803939"
	},
	{
		"id": "b6ae8827634d",
		"ts": "2026-08-25T17:27:51.845Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3428455.34,
		"hash": "b6ae8827634d3dd6945704987fda4b9fec1db4fada64c37018b878f0be403d3c"
	},
	{
		"id": "6af75dd1b41e",
		"ts": "2026-08-25T16:32:11.616Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113990402.93,
		"hash": "6af75dd1b41e639b635674864fcc29aeb55c4e38847425662b2d37e067fdbc80"
	},
	{
		"id": "077ebf26dad6",
		"ts": "2026-08-25T16:32:12.283Z",
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
		"liquidityUsd": 18376427.62,
		"hash": "077ebf26dad60465d79ea1b06aeb391e13b3351334972390228f2cb8945ed5dd"
	},
	{
		"id": "3bebc8dd34a0",
		"ts": "2026-08-25T16:32:12.745Z",
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
		"liquidityUsd": 976613.24,
		"hash": "3bebc8dd34a0479a8ae512e87fb56558cd3f4d969d7b145c144ef26015439506"
	},
	{
		"id": "9ced00b3c990",
		"ts": "2026-08-25T16:32:13.191Z",
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
		"liquidityUsd": 30467902.71,
		"hash": "9ced00b3c990ca37f9454c687816b2cda81205576f35a02779d6c9097cc02a15"
	},
	{
		"id": "29672eed8dd2",
		"ts": "2026-08-25T16:32:13.672Z",
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
		"liquidityUsd": 4702123.14,
		"hash": "29672eed8dd2ecbc327c9943d0b541de8d620759f790a19b16d1eb095a28c2ac"
	},
	{
		"id": "4b8b535bca2e",
		"ts": "2026-08-25T16:32:13.952Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1192320.14,
		"hash": "4b8b535bca2e6a7021ebd7ebf2c6ee252f9585b2632b28870c6e29d6e77598b1"
	},
	{
		"id": "e8933aa0c45f",
		"ts": "2026-08-25T16:32:14.210Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1152559.25,
		"hash": "e8933aa0c45fe15e0f64add35a9d971bb39e761c04a4b3401a950a688818aec2"
	},
	{
		"id": "c5be37ca456b",
		"ts": "2026-08-25T16:32:14.474Z",
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
		"liquidityUsd": 1919469.56,
		"hash": "c5be37ca456b270c5fd3ceffa1b3e8353fb0d694e4d4876bf04a17432befc78a"
	},
	{
		"id": "dd3af8a525a2",
		"ts": "2026-08-25T16:32:14.764Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1271814.53,
		"hash": "dd3af8a525a2f745715f2156c9ce40d5baca4966c9d70b60356f7f059b20ab3b"
	},
	{
		"id": "657d26ba775b",
		"ts": "2026-08-25T16:32:15.418Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 804784.54,
		"hash": "657d26ba775bee59dd114cadaf9d6671cbee8fd6a9470bef2ff230d3400605cb"
	},
	{
		"id": "2fdaf641b77b",
		"ts": "2026-08-25T16:32:15.657Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1533619.06,
		"hash": "2fdaf641b77b4e6b74066b9ef202fdec8496f288f5d575e3e69d7b84aeba92a7"
	},
	{
		"id": "121d3dd58bf9",
		"ts": "2026-08-25T16:32:15.888Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1871680.36,
		"hash": "121d3dd58bf92081151489fcdeba4756555529583b256e22a10ba826264329b2"
	},
	{
		"id": "0d9cc620b552",
		"ts": "2026-08-25T16:32:16.123Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1152911.19,
		"hash": "0d9cc620b5522367495b9d75f44479af7be9dfa40c84b53ac7b4275f77b7c4fe"
	},
	{
		"id": "dc50900c3200",
		"ts": "2026-08-25T16:32:16.362Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 885872.8,
		"hash": "dc50900c3200c71b310ac53c5bba3ff824a3932ba2e39232a96e7ef5636ebdfb"
	},
	{
		"id": "640992449848",
		"ts": "2026-08-25T16:32:16.592Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11843809.01,
		"hash": "640992449848afa48e2c345b0c10bc3576ecbc6162e5b5168ca89f31d817ca44"
	},
	{
		"id": "7d2231ccba81",
		"ts": "2026-08-25T16:32:16.826Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4234855.51,
		"hash": "7d2231ccba812d388124fd85604a7016ace8aff51421a38d883f453f6f9abbe6"
	},
	{
		"id": "6a330322c2f6",
		"ts": "2026-08-25T16:32:17.058Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 562339.3,
		"hash": "6a330322c2f6b8a25091ddcc0b39c7e7ce57edc26b660a7e0e0630cf09aad3d9"
	},
	{
		"id": "a6a17ec6bb3a",
		"ts": "2026-08-25T16:32:17.290Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3400155.09,
		"hash": "a6a17ec6bb3a332c3158c725db10eb7cf8f5bf4678a183687cc3081d34569c46"
	},
	{
		"id": "daae5f6cc039",
		"ts": "2026-08-25T16:32:17.525Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 549478.5,
		"hash": "daae5f6cc0392bf231471c119fdc890eab6a414c8c112077686aae28e34754d4"
	},
	{
		"id": "06f4e9daa6b0",
		"ts": "2026-08-25T15:38:05.701Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113968628.56,
		"hash": "06f4e9daa6b036f85e8158220883573b3db72adb09be581ed313a940718340f0"
	},
	{
		"id": "328917e102ac",
		"ts": "2026-08-25T15:38:06.221Z",
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
		"liquidityUsd": 14350740.38,
		"hash": "328917e102ace6c15c47a384796381b2f346220eaf1e181e211e2d1b12a38329"
	},
	{
		"id": "a4453e3f9795",
		"ts": "2026-08-25T15:38:06.545Z",
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
		"liquidityUsd": 978493.74,
		"hash": "a4453e3f9795ad9fcb7886f136b9a77d234be1f03dd19812e69fd77166c32511"
	},
	{
		"id": "ee0e9e27b4a9",
		"ts": "2026-08-25T15:38:06.877Z",
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
		"liquidityUsd": 30276699.36,
		"hash": "ee0e9e27b4a98ed089774d2fcc0be71616fb34fbe8b0d1b1f512942f15be8e78"
	},
	{
		"id": "9ab6d9c4d35a",
		"ts": "2026-08-25T15:38:07.151Z",
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
		"liquidityUsd": 4711241.09,
		"hash": "9ab6d9c4d35a146f2cd2f92d798242a4689f53147463f028a26e885ddaf31496"
	},
	{
		"id": "2cc03a583c88",
		"ts": "2026-08-25T15:38:07.495Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1185291.27,
		"hash": "2cc03a583c887aba11e6762973b05944d66016b9dfb0a812f5fc5b66013f3035"
	},
	{
		"id": "ef7a0dd5de1e",
		"ts": "2026-08-25T15:38:07.799Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1150966.21,
		"hash": "ef7a0dd5de1ee8e28f03259aa7deb8f691a918be4cc62b68e0ac2bf2b12b1199"
	},
	{
		"id": "4ace42c13dff",
		"ts": "2026-08-25T15:38:08.168Z",
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
		"liquidityUsd": 1919439.84,
		"hash": "4ace42c13dff76b616a6b860f59f3d35b628e8f18b81f10171700b19c6c9fa89"
	},
	{
		"id": "7d4acf78c3ed",
		"ts": "2026-08-25T15:38:08.470Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1265459.07,
		"hash": "7d4acf78c3ed152d38698fed3d47015df496358a3387cc1390d9bc73c063cd08"
	},
	{
		"id": "a19dd977d066",
		"ts": "2026-08-25T15:38:08.769Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 805532.19,
		"hash": "a19dd977d066a13a25392b2a4942bbbdfeac48e43cc003cfd9922ef580be4dba"
	},
	{
		"id": "ad47d01cff7e",
		"ts": "2026-08-25T15:38:09.058Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1546885.08,
		"hash": "ad47d01cff7e30edf7a0fa2da9fb13564cacbd8a13f6329a6f07d0a159a66f02"
	},
	{
		"id": "53a94137c2c5",
		"ts": "2026-08-25T15:38:09.326Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 881609.41,
		"hash": "53a94137c2c5750cfe4fa1c862d0372854084d4042522c7f25d14a47c85a8bc1"
	},
	{
		"id": "85e157e4a9a5",
		"ts": "2026-08-25T15:38:09.610Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1864844.18,
		"hash": "85e157e4a9a567b8270b52586940703dd2bd2155f772a6b0fc97490cdc3486c7"
	},
	{
		"id": "749f3250e482",
		"ts": "2026-08-25T15:38:09.914Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1150966.21,
		"hash": "749f3250e4820327b4ca356dd62bad9bc27d4d9d06dde94dc2d9bef7a23f8edf"
	},
	{
		"id": "cc2fc07f51c9",
		"ts": "2026-08-25T15:38:10.275Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11836624.43,
		"hash": "cc2fc07f51c917e1cc6a86ed14438c2b7a45550e76f5614748abc2409b0b5e72"
	},
	{
		"id": "0e8b6ac81d04",
		"ts": "2026-08-25T15:38:10.553Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 560704.15,
		"hash": "0e8b6ac81d049a30ddcdb21979d762b7e8c8d9f096eac3f4e638db3cb8aadbec"
	},
	{
		"id": "03c578bd6a0b",
		"ts": "2026-08-25T15:38:10.824Z",
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
		"liquidityUsd": 3430117.75,
		"hash": "03c578bd6a0b1e53613a2a8716fce96f523ea8029280bd0695cc771e1cc0c52f"
	},
	{
		"id": "276a0981a29c",
		"ts": "2026-08-25T15:38:11.096Z",
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
		"liquidityUsd": 533717.26,
		"hash": "276a0981a29c4ac1ffcfce005a4c1bf394eb75fc3bd1c7e2edc58ca8e0a2a204"
	},
	{
		"id": "f72ba44da599",
		"ts": "2026-08-25T15:38:11.402Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4139116.9,
		"hash": "f72ba44da5993f73245236c945442b86270a0a3213388acd75045a276752d066"
	},
	{
		"id": "6d09be99b60b",
		"ts": "2026-08-25T14:40:30.559Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113993218.46,
		"hash": "6d09be99b60b15ec6abaf1343e4db2eb9d085ea41c8aabd1b7d7974d447c49eb"
	},
	{
		"id": "0f777382a9ed",
		"ts": "2026-08-25T14:40:30.816Z",
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
		"liquidityUsd": 16876796.44,
		"hash": "0f777382a9ed156ce7161c5422e2a999202516b8541bf7769376b7d3c4720405"
	},
	{
		"id": "e75ff4581fb8",
		"ts": "2026-08-25T14:40:31.066Z",
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
		"liquidityUsd": 989386.05,
		"hash": "e75ff4581fb89ee58b0cf516f46ed4e4cc3b5e0356f174794a3db66e2c2c2494"
	},
	{
		"id": "6ff5bb01e866",
		"ts": "2026-08-25T14:40:31.330Z",
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
		"liquidityUsd": 30218453.87,
		"hash": "6ff5bb01e866838aa23842cd21c237b7b4179e56509000e25be49688edc7b9b7"
	},
	{
		"id": "de2729f4287d",
		"ts": "2026-08-25T14:40:31.574Z",
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
		"liquidityUsd": 4709505.11,
		"hash": "de2729f4287d7d014bd4c82d589f3e5dfe46f93d7209acea0f1d77fb2a900745"
	},
	{
		"id": "55588c71640a",
		"ts": "2026-08-25T14:40:31.856Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1185291.27,
		"hash": "55588c71640a4ee4651f0b9280103a307e3731cdfc3642c3999adc026d60b1c8"
	},
	{
		"id": "cf41104189e3",
		"ts": "2026-08-25T14:40:32.108Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1117728.92,
		"hash": "cf41104189e399994d083eaeb0a492ae89a9b78a69f7a6d8b9fca61651868031"
	},
	{
		"id": "8beb380a92bf",
		"ts": "2026-08-25T14:40:32.372Z",
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
		"liquidityUsd": 1923298.01,
		"hash": "8beb380a92bf6dc1ffb06e653455b693112d9b57bc7992a88e965ed6cf26e5ad"
	},
	{
		"id": "25a6db8a3f49",
		"ts": "2026-08-25T14:40:32.650Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 781762.18,
		"hash": "25a6db8a3f496c2e5eaf9926a559a412918e64ba588480e605419434dd760864"
	},
	{
		"id": "a7f063e4a393",
		"ts": "2026-08-25T14:40:32.898Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1296258.22,
		"hash": "a7f063e4a3936a2a0ce070f1e7ae6b791cf554feefbd27ee13935960901ad267"
	},
	{
		"id": "209215ee2811",
		"ts": "2026-08-25T14:40:33.131Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1584550.7,
		"hash": "209215ee2811072af8415184b2b3d7ad0028f2dc76a1310ef373fd04abbe0e7e"
	},
	{
		"id": "c1d60e8e787b",
		"ts": "2026-08-25T14:40:33.370Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 888294.03,
		"hash": "c1d60e8e787b501a52e92021f3e0c9cd681ec44b7cf8070da151bc86dfdc6f56"
	},
	{
		"id": "71b86ea3ca6f",
		"ts": "2026-08-25T14:40:33.803Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1866722.5,
		"hash": "71b86ea3ca6f12bfff449522b8b303c70744f2870bef55cd6e53660b1c14056e"
	},
	{
		"id": "9ff95fb2b59e",
		"ts": "2026-08-25T14:40:34.035Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 561537.7,
		"hash": "9ff95fb2b59e96957b7e70ef3796fce3dc5095e2e95cbdc1727719d051b89d4a"
	},
	{
		"id": "747d156348f4",
		"ts": "2026-08-25T14:40:34.276Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 95234.11,
		"hash": "747d156348f4e4a7870eab9168f582ee3927a8628555a3a41d644667840532c5"
	},
	{
		"id": "50621f19de59",
		"ts": "2026-08-25T14:40:34.507Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3444647.94,
		"hash": "50621f19de59861df360dd274e1bea34349512a463f9f644709dd0d740aebf88"
	},
	{
		"id": "cf7b6b96c85d",
		"ts": "2026-08-25T14:40:34.741Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1117683.9,
		"hash": "cf7b6b96c85df076689a6a2b9235096c44351fe753d01b558496a24130ac6d22"
	},
	{
		"id": "a53a5c5cf240",
		"ts": "2026-08-25T14:40:34.979Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 540060.1,
		"hash": "a53a5c5cf240f41d7c83aaf8a5c3ae261b23bfa9942bff3dfa650c11094c5c49"
	},
	{
		"id": "7c6be9598d0a",
		"ts": "2026-08-25T14:40:35.205Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4112334.34,
		"hash": "7c6be9598d0ab32f69c13afa5c611907e8a30e65c449cdd13aa852caefd1616d"
	},
	{
		"id": "34625d1b32f2",
		"ts": "2026-08-25T13:50:29.974Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113637885,
		"hash": "34625d1b32f27692e463b983a6ed38198d21c3af638b2c86dcb885e3cb489e1a"
	},
	{
		"id": "6ecbc85f42b9",
		"ts": "2026-08-25T13:50:30.182Z",
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
		"liquidityUsd": 15390069.45,
		"hash": "6ecbc85f42b96107e9dd529586081fa1294994bbcbf8897fd133091fb98a5de9"
	},
	{
		"id": "4eb27945de27",
		"ts": "2026-08-25T13:50:30.395Z",
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
		"liquidityUsd": 987610.01,
		"hash": "4eb27945de27c4741c433b32250e3af2cda1689b1d0dd4896ca7cb5f8ea7ccf3"
	},
	{
		"id": "8ab638ded48a",
		"ts": "2026-08-25T13:50:30.594Z",
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
		"liquidityUsd": 30014651.27,
		"hash": "8ab638ded48abce6016d3ff35dec183e17e469568ea33f79323942dafddd4ece"
	},
	{
		"id": "90b8432b119e",
		"ts": "2026-08-25T13:50:30.808Z",
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
		"liquidityUsd": 4682428.94,
		"hash": "90b8432b119e43e3f48276e723147e03d8a9e7502444bb6f57f8ad8e47cf5d28"
	},
	{
		"id": "014f2b69ea37",
		"ts": "2026-08-25T13:50:31.013Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1198491.92,
		"hash": "014f2b69ea3770d5041a6d0292bb4dec9bbdf58bf6e68a8e638799c83c1a110a"
	},
	{
		"id": "c11dc4506caf",
		"ts": "2026-08-25T13:50:31.217Z",
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
		"liquidityUsd": 544460.11,
		"hash": "c11dc4506caf662f4103203eb246762e5c4523274bbc00dbc44bac42b965440e"
	},
	{
		"id": "3630cabf0123",
		"ts": "2026-08-25T13:50:31.441Z",
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
		"liquidityUsd": 1910407.71,
		"hash": "3630cabf0123b08866c1413826b048bdb144062b6d3e0286cbd89e85b6830f02"
	},
	{
		"id": "a6b95429a643",
		"ts": "2026-08-25T13:50:31.658Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 760658.44,
		"hash": "a6b95429a643c4cf3b2a045d8da70f723aa433a20eb639232d766afdbad28a0f"
	},
	{
		"id": "a735c90fb4b7",
		"ts": "2026-08-25T13:50:31.858Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1239605.92,
		"hash": "a735c90fb4b7cc00c6b37cd28161c8a4bcf5b53143587028c42b08e09a5031b9"
	},
	{
		"id": "4831f033935e",
		"ts": "2026-08-25T13:50:32.195Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1629581.57,
		"hash": "4831f033935e47b00a340a904b52e18b4dca266a617cd6c510f6cef085661487"
	},
	{
		"id": "e2fcfd76d8ac",
		"ts": "2026-08-25T13:50:32.389Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 889997.85,
		"hash": "e2fcfd76d8ac35ec67676c7e87ba25f2e2aa972cd25e6c91976d6bd7abc748f0"
	},
	{
		"id": "510523aa113a",
		"ts": "2026-08-25T13:50:32.576Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 556332.39,
		"hash": "510523aa113aeec57d1fb03841cbb5e492c9d73823c31567b92f473f40fb45f0"
	},
	{
		"id": "bb4ac707f2ab",
		"ts": "2026-08-25T13:50:32.770Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1863494.98,
		"hash": "bb4ac707f2abfc757301183a2b9469e583cd0e440908915e2e3eee80d8abe355"
	},
	{
		"id": "e7d871b69fbe",
		"ts": "2026-08-25T13:50:32.956Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 97702.73,
		"hash": "e7d871b69fbe2b87958f47a58350af90a787508420f2d986f28b641775c2cdb3"
	},
	{
		"id": "02c06499eabc",
		"ts": "2026-08-25T13:50:33.151Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3385451.33,
		"hash": "02c06499eabc8e98d43f52e538f87721a6737653b1965485ea4c00bca7c32cf3"
	},
	{
		"id": "129d81805e24",
		"ts": "2026-08-25T13:50:33.344Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11543646.58,
		"hash": "129d81805e24c376c341a9dfdedc2758e72ccbb7aaa80f7654223deee4cf3ecd"
	},
	{
		"id": "8e2750a077ad",
		"ts": "2026-08-25T13:50:33.643Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1120723.43,
		"hash": "8e2750a077adae778cb876f4ec10f6fc9352c960e2f1d534cb7942a28fff77c8"
	},
	{
		"id": "db88dcab79de",
		"ts": "2026-08-25T13:50:33.848Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 513738.4,
		"hash": "db88dcab79dec19234790700608181703c7ec1fe3c1c2b17451af8000e7fde70"
	},
	{
		"id": "14b58e5af6ac",
		"ts": "2026-08-25T12:39:21.844Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113527046.05,
		"hash": "14b58e5af6ac1028b7cbab40b048f7e1978333bed3f05186b0613f2b6faac22d"
	},
	{
		"id": "3a498a6b38ed",
		"ts": "2026-08-25T12:39:22.048Z",
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
		"liquidityUsd": 17613899.21,
		"hash": "3a498a6b38edc9d5775b397ae2d720318b62885c2add8f70c6fff68f3ba8576b"
	},
	{
		"id": "fd35a35c15d3",
		"ts": "2026-08-25T12:39:22.248Z",
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
		"liquidityUsd": 1002548.66,
		"hash": "fd35a35c15d3f1b2f8cc64a21c8dc2cb04023c061afa609dbd6db8d4b3e3289d"
	},
	{
		"id": "37cd7a886570",
		"ts": "2026-08-25T12:39:22.597Z",
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
		"liquidityUsd": 30029889.33,
		"hash": "37cd7a88657014953ba95279db54fc4a30944bc0872472355959340d9e5c3e98"
	},
	{
		"id": "dd31363c15ce",
		"ts": "2026-08-25T12:39:22.806Z",
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
		"liquidityUsd": 4770720.27,
		"hash": "dd31363c15ce7aea06b8ea9d31fda05201c26818b5bfbd7be3a1ffdc4e2b46da"
	},
	{
		"id": "21fa6a98485f",
		"ts": "2026-08-25T12:39:23.001Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1198245.78,
		"hash": "21fa6a98485f47505b4fcf4c6427ed0a3fd40c39c2a304fdc1470a247a817ee2"
	},
	{
		"id": "f9f1e92a581a",
		"ts": "2026-08-25T12:39:23.208Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1109581.09,
		"hash": "f9f1e92a581a18ff408834ae9694957b969507f5b87b24e5dfc5cf55efcd52aa"
	},
	{
		"id": "ae556332b6bc",
		"ts": "2026-08-25T12:39:23.415Z",
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
		"liquidityUsd": 1915120.35,
		"hash": "ae556332b6bc2bb61ec6a97f315142fdd0cf728738ff14c0c51a8cca9dcc4992"
	},
	{
		"id": "119772e05b6f",
		"ts": "2026-08-25T12:39:24.165Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 769220,
		"hash": "119772e05b6f437c690cc4a062c071d522a00e96e6bc191fb6aefdcd43da5432"
	},
	{
		"id": "d91966b2453f",
		"ts": "2026-08-25T12:39:24.353Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1576105.97,
		"hash": "d91966b2453fdc9bf22be95cb17d644be4542b803c5480cc99f291e4d1cc904b"
	},
	{
		"id": "e207f5fb3265",
		"ts": "2026-08-25T12:39:24.529Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1194296.91,
		"hash": "e207f5fb3265d273ca98c3b346a7af32cd69781e9a4ee50ef0a2ca0850ac2fbe"
	}
]
