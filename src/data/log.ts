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
	"updatedAt": "2026-08-30T23:06:46.672Z",
	"tokensScored": 15616,
	"verdictsIssued": 15616,
	"safe": 13289,
	"risky": 1158,
	"likelyRug": 1169,
	"ticks": 899
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "78db6d15183a",
		"ts": "2026-08-30T23:06:41.842Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116042498.03,
		"hash": "78db6d15183aa7e5c98f9602dc10d98bbf871564b2e684217d72ccc5b2808bca"
	},
	{
		"id": "34aecd49c920",
		"ts": "2026-08-30T23:06:42.232Z",
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
		"liquidityUsd": 19414641.7,
		"hash": "34aecd49c9201f73348eeee97833a5d728353df9598c554bd2f773a298bffe61"
	},
	{
		"id": "9faa9c7ef734",
		"ts": "2026-08-30T23:06:42.460Z",
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
		"liquidityUsd": 980875.38,
		"hash": "9faa9c7ef734cdcad4bdefffb7b8c89fb7e5362bbf3de3e9865d2d50ad595ad9"
	},
	{
		"id": "ce8d05607d3e",
		"ts": "2026-08-30T23:06:42.715Z",
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
		"liquidityUsd": 29116901.02,
		"hash": "ce8d05607d3e12a74a68914d70cc11833269c10237cba50ecf8b754338a93535"
	},
	{
		"id": "ade3d401812f",
		"ts": "2026-08-30T23:06:42.937Z",
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
		"liquidityUsd": 4091781.79,
		"hash": "ade3d401812f7f725bb75d87318ee46f4807f833a50ce638ecf264b69908fa2e"
	},
	{
		"id": "b0486e5ec476",
		"ts": "2026-08-30T23:06:43.164Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1153307.15,
		"hash": "b0486e5ec476bc2bf53fe8c9858408c25c9339e355c29c38b20d5e9fe3a2aa1b"
	},
	{
		"id": "749485649417",
		"ts": "2026-08-30T23:06:43.427Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29116894.22,
		"hash": "749485649417f2bbf847eaf0e19f1d321f3c421ff176f38e88a2aadabec99e88"
	},
	{
		"id": "46eba3a630b3",
		"ts": "2026-08-30T23:06:43.657Z",
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
		"liquidityUsd": 1783017.94,
		"hash": "46eba3a630b3c2c339426cbc075263bc777b6fa4228a3bad729f750598eb95f8"
	},
	{
		"id": "ccf7e40e67ad",
		"ts": "2026-08-30T23:06:44.387Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 942551.44,
		"hash": "ccf7e40e67adb0cf2b30c123a92c1d8a177da66e4d2d9f719bf4e43a2c3127ef"
	},
	{
		"id": "7e53a05c721e",
		"ts": "2026-08-30T23:06:44.623Z",
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
		"liquidityUsd": 960509.77,
		"hash": "7e53a05c721e499f11fd81b8afe86457d8a70ca8de877af23fd0145c3aab66ab"
	},
	{
		"id": "bde3acd43812",
		"ts": "2026-08-30T23:06:44.885Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1423628.64,
		"hash": "bde3acd438129f8615b05a867891044c5842a61861fbe3376405171e8cd49686"
	},
	{
		"id": "4987bff799ba",
		"ts": "2026-08-30T23:06:45.144Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1284752.86,
		"hash": "4987bff799ba9dbce8be3bb0b437c30fecc9a6b38943ab03b45e412ff701b69d"
	},
	{
		"id": "f594042bd688",
		"ts": "2026-08-30T23:06:45.341Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3358110.41,
		"hash": "f594042bd68811f60f5b934ebbee60dbe6e52d0b85ecf920110b01dfcfabf212"
	},
	{
		"id": "8ea20d53bc9b",
		"ts": "2026-08-30T23:06:45.562Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 148402.7,
		"hash": "8ea20d53bc9ba8fed4008877b6b88f3c563a910abe9787148155f4fa1027c558"
	},
	{
		"id": "daeb228a3704",
		"ts": "2026-08-30T23:06:45.767Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 12317602.69,
		"hash": "daeb228a370429e5be186fabf338475d55dbb33200c1befa199f273e3dd8119b"
	},
	{
		"id": "b40ff913da11",
		"ts": "2026-08-30T23:06:46.036Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4065091.27,
		"hash": "b40ff913da1163dda32034726d70090ffe582369e86c739e61cec08f1f0ca792"
	},
	{
		"id": "fbee64cd78fa",
		"ts": "2026-08-30T23:06:46.231Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 450445.56,
		"hash": "fbee64cd78fa68df81f9fd7df813a4a59420816b56ac1163a792da7ec16abcd7"
	},
	{
		"id": "7c87ad653d06",
		"ts": "2026-08-30T23:06:46.441Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 244390.95,
		"hash": "7c87ad653d068fbc2abca5e931955d141fec1c7b61a749d2e35f340d839f2c9b"
	},
	{
		"id": "51507f9f1dd7",
		"ts": "2026-08-30T23:06:46.672Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 535705.8,
		"hash": "51507f9f1dd79014e3769acbbb5bb56cfb0f9ffec5a0cbb504fe336e4b36ad97"
	},
	{
		"id": "8289fe02f525",
		"ts": "2026-08-30T20:29:16.331Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116610977.78,
		"hash": "8289fe02f52533eb254f16d3051e763b1bd86ac7601f5aef4f14e07068473b10"
	},
	{
		"id": "3c07a12bde0d",
		"ts": "2026-08-30T20:29:16.543Z",
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
		"liquidityUsd": 19530914.37,
		"hash": "3c07a12bde0de2494f428b4a0845c307dbc4b8a792b810ca9afef6a5ca61c806"
	},
	{
		"id": "ab0f76480586",
		"ts": "2026-08-30T20:29:16.735Z",
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
		"liquidityUsd": 1003140.14,
		"hash": "ab0f764805862c05a864ad63ef8757f774a20c0f4906c1c9fe60aec0a74bca92"
	},
	{
		"id": "091af225f6fa",
		"ts": "2026-08-30T20:29:16.931Z",
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
		"liquidityUsd": 29196324.63,
		"hash": "091af225f6fa182e0717c39491b4cc3d36a29a1f55f6a850971e6977a8020757"
	},
	{
		"id": "d47abc6271a1",
		"ts": "2026-08-30T20:29:17.128Z",
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
		"liquidityUsd": 4159615.37,
		"hash": "d47abc6271a1285b3c010cf546e08c34167cd80a5f086e3dbb695706d80c2a50"
	},
	{
		"id": "1816315e58fa",
		"ts": "2026-08-30T20:29:17.333Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1180213.7,
		"hash": "1816315e58fa19cc2dc485a3dcd5d96171a8d2a7db311632f70b64c6188b75e2"
	},
	{
		"id": "4f9dbf123e15",
		"ts": "2026-08-30T20:29:17.548Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29196324.63,
		"hash": "4f9dbf123e156d9b46ae4331b7c3fedba1ffcf3c3d33fc196fd83aa879614113"
	},
	{
		"id": "dc4492e51489",
		"ts": "2026-08-30T20:29:17.747Z",
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
		"liquidityUsd": 1813945.58,
		"hash": "dc4492e51489f6580fc41a8bb776f43f76cd23eabff5875ecc39dd25ad043a5f"
	},
	{
		"id": "19f363a2e903",
		"ts": "2026-08-30T20:29:17.951Z",
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
		"liquidityUsd": 975611.87,
		"hash": "19f363a2e903356678a4b8961f533c3eaaae13931004ceaee9e98e5afcb48667"
	},
	{
		"id": "9820bef056fb",
		"ts": "2026-08-30T20:29:18.164Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 716389.9,
		"hash": "9820bef056fb59f50e2ac36a11f53629054e358f185ef59e78b4e65721b54185"
	},
	{
		"id": "30d49cd1172b",
		"ts": "2026-08-30T20:29:18.341Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1396026.27,
		"hash": "30d49cd1172b70cf65857fe035cb632c28770cae507ffa3346f6aeb6d101b854"
	},
	{
		"id": "c4d6568a0228",
		"ts": "2026-08-30T20:29:18.537Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1304593.21,
		"hash": "c4d6568a02286dc47b6c222a279ab84e853e5990628698c132792f1ad56c374a"
	},
	{
		"id": "344568f6ba62",
		"ts": "2026-08-30T20:29:18.720Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3467538.5,
		"hash": "344568f6ba62af42750f66005eba238c8a12944b8c3c820d0490baaeed2f1443"
	},
	{
		"id": "3a673b91a704",
		"ts": "2026-08-30T20:29:18.919Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4124762.33,
		"hash": "3a673b91a7041862824b3ec3c92b406456a85dd902a7378dd072e578c27502c8"
	},
	{
		"id": "de98116cd8fc",
		"ts": "2026-08-30T20:29:19.098Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 433013.92,
		"hash": "de98116cd8fc08a51b767ee1ff129fb69ce15eace0b060d4581e72fafb5ec315"
	},
	{
		"id": "d0e649337c55",
		"ts": "2026-08-30T20:29:19.294Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 132159.11,
		"hash": "d0e649337c5560e745e303144c16a15c0af88c18412d78316e181926296c0f45"
	},
	{
		"id": "003fab9eb3b5",
		"ts": "2026-08-30T20:29:19.500Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 12568013.37,
		"hash": "003fab9eb3b51aea3878ef31e19f4cc4b11bbc43e090748492f957406ba47ef4"
	},
	{
		"id": "32641874801f",
		"ts": "2026-08-30T20:29:19.696Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1314272.24,
		"hash": "32641874801fa944d0210fcfff386d2b4a329ca50b8114c52e11a4b4b411327a"
	},
	{
		"id": "2eca10318811",
		"ts": "2026-08-30T20:29:19.875Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 172739.16,
		"hash": "2eca10318811be4ad7855ed56f1f7a0b125a65b358bde84a775af4ca01e86d98"
	},
	{
		"id": "8512f18927ed",
		"ts": "2026-08-30T20:29:20.081Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 768491.16,
		"hash": "8512f18927ed533269bcc540430d0adeecdc9d67b2308ad92a4860abcd0f46fa"
	},
	{
		"id": "5865caaa619f",
		"ts": "2026-08-30T17:10:41.111Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116952709.84,
		"hash": "5865caaa619fb67f5af74ed5383084f1899510318558d2c77735149c2314277f"
	},
	{
		"id": "b39e0f12911e",
		"ts": "2026-08-30T17:10:41.492Z",
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
		"liquidityUsd": 13661223.49,
		"hash": "b39e0f12911e1580a2d9627a5c52a8ac554f40f73fe2240ea081e25b29631ca7"
	},
	{
		"id": "f595ab9af3ee",
		"ts": "2026-08-30T17:10:41.707Z",
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
		"liquidityUsd": 996439.6,
		"hash": "f595ab9af3ee636938d87f44f24fad423311f405ce0753825098af0df86d05b3"
	},
	{
		"id": "6966eafd1a7a",
		"ts": "2026-08-30T17:10:41.921Z",
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
		"liquidityUsd": 29413109.87,
		"hash": "6966eafd1a7a90e7505361ae87139aed4405ac05b169974d747d31cbe84ae787"
	},
	{
		"id": "9aa0e5e2c6f8",
		"ts": "2026-08-30T17:10:42.114Z",
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
		"liquidityUsd": 4203110.18,
		"hash": "9aa0e5e2c6f8839e1832760aefd8641d7890ff12e00b7a0c9a921333fda18670"
	},
	{
		"id": "db7eb77a413b",
		"ts": "2026-08-30T17:10:42.334Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1198096.01,
		"hash": "db7eb77a413ba1b222ea4dddddfb4e4dc763aef203a95440432614f1a5470369"
	},
	{
		"id": "2fbfcfa176fe",
		"ts": "2026-08-30T17:10:42.546Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29413106.11,
		"hash": "2fbfcfa176fe050de3aa9751db6e2f44667e54ac01d27b8074f61f7b95fb2d09"
	},
	{
		"id": "f69eda94addc",
		"ts": "2026-08-30T17:10:42.751Z",
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
		"liquidityUsd": 3446042.56,
		"hash": "f69eda94addcc0776681085316653db7c5df4ce3bba0de0e08d128645178cd81"
	},
	{
		"id": "d6a48056e7a1",
		"ts": "2026-08-30T17:10:43.271Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 756662.65,
		"hash": "d6a48056e7a14996d76f5fc122f7564a73e0493e9a16d39146f6b730e075dce8"
	},
	{
		"id": "f62cf42521e9",
		"ts": "2026-08-30T17:10:43.474Z",
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
		"liquidityUsd": 1001431.13,
		"hash": "f62cf42521e9b8b5efd9ec27c69fef651611572efc03eb298fba455f9734936d"
	},
	{
		"id": "aad45372c1e3",
		"ts": "2026-08-30T17:10:43.686Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1388560.44,
		"hash": "aad45372c1e3bb9574201120efe482d8dd64d0715d6420bde247c006f4f5fa8a"
	},
	{
		"id": "bb4ec3a91acb",
		"ts": "2026-08-30T17:10:43.883Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1325733.33,
		"hash": "bb4ec3a91acb57e14cf8b1c80c89eb6295cec829e279165f29f10586937c2a88"
	},
	{
		"id": "61ceb4e13e2b",
		"ts": "2026-08-30T17:10:44.073Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3530409.97,
		"hash": "61ceb4e13e2b514035e6075c4c13fd597d181317b7e7c6a0b410a2b36da11a68"
	},
	{
		"id": "921b09e15352",
		"ts": "2026-08-30T17:10:44.266Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 139385.14,
		"hash": "921b09e1535224254dcae2b5ff0d4e01ba68db838d85180ef72de170d09f9d44"
	},
	{
		"id": "fc99ea61cd43",
		"ts": "2026-08-30T17:10:44.466Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4162719.02,
		"hash": "fc99ea61cd43c2663e593abd74d60c0e736abdf6d0005c7c03ad36b1754da981"
	},
	{
		"id": "1a5a154a91c1",
		"ts": "2026-08-30T17:10:44.650Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 433169.14,
		"hash": "1a5a154a91c12853e0513694b545a2c818c47cb8908544c3d8bfda5edc06c2e7"
	},
	{
		"id": "322ebb759388",
		"ts": "2026-08-30T17:10:44.847Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11970712.29,
		"hash": "322ebb7593885bce6cf2f0acc192e3aedf0131bcd2ad92d5f196afff7a973a6b"
	},
	{
		"id": "0b9dbcd425ee",
		"ts": "2026-08-30T17:10:45.052Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 93541.41,
		"hash": "0b9dbcd425eed0e1e41213f8d33bca2d9b4afd02fa266bba18edc3766bc52a30"
	},
	{
		"id": "ab63269ede24",
		"ts": "2026-08-30T17:10:45.327Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 209809.13,
		"hash": "ab63269ede2470b14775141c5d5f04176551f429ae74f95a526513df12c17718"
	},
	{
		"id": "3a73533ed894",
		"ts": "2026-08-30T17:10:45.531Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1395548.66,
		"hash": "3a73533ed8945168a5343d14068e34af51e92e34df3fc00ff3643f4aa96d4e39"
	},
	{
		"id": "9ca53b7facbd",
		"ts": "2026-08-30T12:33:43.226Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115923296.99,
		"hash": "9ca53b7facbda0d70ee4f0cacd7d90f0e892cfcdc4b25ebd3455e0f0064c3ec7"
	},
	{
		"id": "09ac2f15b0ad",
		"ts": "2026-08-30T12:33:43.944Z",
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
		"liquidityUsd": 13449576.14,
		"hash": "09ac2f15b0add9d6589b53a302243b415d1fecec894b424e67928e7c9487da41"
	},
	{
		"id": "3a72b2ee8a62",
		"ts": "2026-08-30T12:33:44.260Z",
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
		"liquidityUsd": 962511.38,
		"hash": "3a72b2ee8a6299003c7f9736b84b9d5a7588a865f1beeefa7e49bcc5c10fb49f"
	},
	{
		"id": "a670cac8fd65",
		"ts": "2026-08-30T12:33:44.536Z",
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
		"liquidityUsd": 29006049.48,
		"hash": "a670cac8fd6548cdabeb1b9957985086abdc160f5d58de7503b33645a0a4b459"
	},
	{
		"id": "8dfdaa1b1fea",
		"ts": "2026-08-30T12:33:44.884Z",
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
		"liquidityUsd": 4113999.59,
		"hash": "8dfdaa1b1fea0dbdaf790bc3e1b79623f1d70dfb1afb142da00b58a9c7dcaef8"
	},
	{
		"id": "71a9fe220c50",
		"ts": "2026-08-30T12:33:45.176Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1156773.86,
		"hash": "71a9fe220c5071efa5dc9ecca12e7e34ac71a1f185648da3e5ba09cd49a98833"
	},
	{
		"id": "bef0d90a078f",
		"ts": "2026-08-30T12:33:45.424Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29006049.48,
		"hash": "bef0d90a078f9971738da911ad2f80d4147ebb218f1fef4d82cc73276f1dff26"
	},
	{
		"id": "5c132f3af3d2",
		"ts": "2026-08-30T12:33:45.719Z",
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
		"liquidityUsd": 3918549.14,
		"hash": "5c132f3af3d21491b55efe80e7d60d13af10fc5fd422a20830e2a3db3703a221"
	},
	{
		"id": "3e36df21f309",
		"ts": "2026-08-30T12:33:45.989Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 690162.21,
		"hash": "3e36df21f309d455aa3c65619434e9044b3b72f3c19c3e7684a603dfb012a974"
	},
	{
		"id": "d18df1101030",
		"ts": "2026-08-30T12:33:46.263Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1309869.79,
		"hash": "d18df110103008bf137a5537cf86197413d00d697ba851eeab721822f87aa3db"
	},
	{
		"id": "7e4ae96f67f9",
		"ts": "2026-08-30T12:33:46.496Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1370047.47,
		"hash": "7e4ae96f67f9ef0e6cbb3822fb7241494ad05eb354b2f7bb845941d2aaadc32b"
	},
	{
		"id": "3f1dd29b43d9",
		"ts": "2026-08-30T12:33:46.730Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 131719.1,
		"hash": "3f1dd29b43d9e99b4da75bfdf58def62825b803e2b52b7e7bddac939b593a9ad"
	},
	{
		"id": "4589f5773ead",
		"ts": "2026-08-30T12:33:46.962Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3495723.91,
		"hash": "4589f5773eaddeef7b5ba6baee64b9918d89927f8a751ad1159ad40f4fa5ae55"
	},
	{
		"id": "4d1ad06e8d57",
		"ts": "2026-08-30T12:33:47.192Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 131488.62,
		"hash": "4d1ad06e8d57cb19725242ad4c3d37dbe7e36546043a10bf3262e77e3f1de3e6"
	},
	{
		"id": "0475bb52ca7d",
		"ts": "2026-08-30T12:33:47.423Z",
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
		"liquidityUsd": 1010263.7,
		"hash": "0475bb52ca7d8d504a11105349c91eef3bde51bf8f206e89dc14afd35c434186"
	},
	{
		"id": "c98c775aa541",
		"ts": "2026-08-30T12:33:47.654Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 408742.95,
		"hash": "c98c775aa541ee2e5c715026b1ed29e0a2783b9742210b581a72dd9739c66e8e"
	},
	{
		"id": "7eb869c9144d",
		"ts": "2026-08-30T12:33:47.884Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4020752,
		"hash": "7eb869c9144d22a904081d39baa360e7f784cc413d710795bec81ed8abb5876a"
	},
	{
		"id": "ac1b2c139bd4",
		"ts": "2026-08-30T12:33:48.117Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1413008.23,
		"hash": "ac1b2c139bd4591a16cb409d620a87a06066ee28c772e6a65fb85c06dcdb8d3d"
	},
	{
		"id": "cf320f72ca26",
		"ts": "2026-08-30T12:33:48.347Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11726304.12,
		"hash": "cf320f72ca26faea62b0f42310479c2055f5079e167246e98c876c744feb7968"
	},
	{
		"id": "88c08e1b421b",
		"ts": "2026-08-30T12:33:48.578Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 454677.51,
		"hash": "88c08e1b421b61f1ae39cbb489b80fa5e8276b3199ae1f80649df695e70c8541"
	},
	{
		"id": "1f0e505e1377",
		"ts": "2026-08-30T06:27:13.816Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115971708.78,
		"hash": "1f0e505e137767b7252210bac6314128a831b792255233c77fde3bdabee34bdf"
	},
	{
		"id": "d4ea44c69c41",
		"ts": "2026-08-30T06:27:14.283Z",
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
		"liquidityUsd": 19068784.55,
		"hash": "d4ea44c69c414f4392904b69b838ab0f5c5f36f5a0cbcaf9122e0d087a075752"
	},
	{
		"id": "7a8e348f46fd",
		"ts": "2026-08-30T06:27:14.529Z",
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
		"liquidityUsd": 957313.42,
		"hash": "7a8e348f46fd74b6d525c12768fb9c5caa7c77bb5aa0b06a5703f3b315dd82cd"
	},
	{
		"id": "0a92897f14dd",
		"ts": "2026-08-30T06:27:14.806Z",
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
		"liquidityUsd": 28850283.49,
		"hash": "0a92897f14dd5cd0804b9e56a66b85d32a652a3ebaf57393704b72667b7f8d7e"
	},
	{
		"id": "51277f3dfc7d",
		"ts": "2026-08-30T06:27:15.062Z",
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
		"liquidityUsd": 4102463.92,
		"hash": "51277f3dfc7d7763c7056c2299f25fc5a44c8f3c2d0d1041a20eac804d65895a"
	},
	{
		"id": "50f42b471371",
		"ts": "2026-08-30T06:27:15.330Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1158841.09,
		"hash": "50f42b471371a75fc129849bcb1818eed2d1b438c382383cb43949bc5e81ddca"
	},
	{
		"id": "3345b65ca828",
		"ts": "2026-08-30T06:27:15.570Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28850283.49,
		"hash": "3345b65ca8281235ef07c977bf11b46063919523d33a0ccfab2190eeb3d84141"
	},
	{
		"id": "6b7adf9e88b2",
		"ts": "2026-08-30T06:27:15.821Z",
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
		"liquidityUsd": 3905706.97,
		"hash": "6b7adf9e88b2108180ab4cccd5f4799ab5afcfceb2c264c207d9d243618694b8"
	},
	{
		"id": "5a8691cb9f34",
		"ts": "2026-08-30T06:27:16.100Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 684165.23,
		"hash": "5a8691cb9f343a025ea080b18ef2e14155f12ae0fee9d901d20243942f5c8ccf"
	},
	{
		"id": "68cd8791f7d4",
		"ts": "2026-08-30T06:27:16.358Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1331442.21,
		"hash": "68cd8791f7d472882fd5031a049f3fb8a919ef0e10ca7a95e32d410d69025eb9"
	},
	{
		"id": "7359ded03b49",
		"ts": "2026-08-30T06:27:16.579Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1310450.79,
		"hash": "7359ded03b49ed13a6e21aa019b03bd921c732a0e24991659a524809020924fd"
	},
	{
		"id": "2a6ca14e7e24",
		"ts": "2026-08-30T06:27:16.802Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 409791.01,
		"hash": "2a6ca14e7e241a716c5666204feb6bcf5aa2d0fa4a621ea11f4e0e936cc1c544"
	},
	{
		"id": "2a717aef33c8",
		"ts": "2026-08-30T06:27:17.032Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 141055.43,
		"hash": "2a717aef33c8010dec598880c5702b2e32722450727c3bbdb85aa8df7339d055"
	},
	{
		"id": "a53a366bcca9",
		"ts": "2026-08-30T06:27:17.261Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3560129.01,
		"hash": "a53a366bcca9063b479b364c735fa8fef7289c61784aea5f7433a851481bfd93"
	},
	{
		"id": "c317f9334237",
		"ts": "2026-08-30T06:27:17.480Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 124211.09,
		"hash": "c317f93342375a07276319199181c04610896abe14b2f74fbbf33c1ecfd66259"
	},
	{
		"id": "932d91c071b9",
		"ts": "2026-08-30T06:27:17.703Z",
		"symbol": "PROMPT",
		"token": "0x30c7235866872213F68cb1F08c37Cb9eCCB93452",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 122051.22,
		"hash": "932d91c071b98f8d690f5ef049a998eaa86e005dbba0833cf0cb5bb19ad06dc4"
	},
	{
		"id": "0fc7219fe029",
		"ts": "2026-08-30T06:27:18.028Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 456951.32,
		"hash": "0fc7219fe0291f9ca96a12321cad7e982715812696c2f26dbeef247e3964dc85"
	},
	{
		"id": "d2356b15023b",
		"ts": "2026-08-30T06:27:18.248Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4048347.85,
		"hash": "d2356b15023bda51f55b16b547d5048ea897ce22139533707a3f4eae92868c36"
	},
	{
		"id": "2b24cb277809",
		"ts": "2026-08-30T06:27:18.471Z",
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
		"liquidityUsd": 571915.09,
		"hash": "2b24cb2778096c31a56dccddf7eaf7965af348521ab60d8ace714b64e9ca8660"
	},
	{
		"id": "74900b7e4a59",
		"ts": "2026-08-30T00:59:41.584Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 56,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "74900b7e4a594d0c89bc14feb4c8f89fc3d13899c9b146c27908a6f7bb8ad573"
	},
	{
		"id": "4576e22d46dd",
		"ts": "2026-08-30T01:00:00.302Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 44,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "4576e22d46dd9ab1ac3e6b5faaea8e40765468bbefed27009bd60e46d0d75266"
	},
	{
		"id": "ad5e6cea5751",
		"ts": "2026-08-30T01:00:18.917Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 48,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.04,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "ad5e6cea575129ac9bb738df5214f00c82c066718a06975c80db395d080458de"
	},
	{
		"id": "052ea55ccad6",
		"ts": "2026-08-30T01:00:37.685Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 48,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.04,
		"flags": [
			"no_dex_pair",
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "052ea55ccad6b1b2ea6dfc240861d3973b34dd90fa9a08125903be0d67e9f888"
	},
	{
		"id": "0286f320a795",
		"ts": "2026-08-30T01:00:37.991Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "0286f320a7956e1a79442ed3315e38859fe34c85b4bdba549caebdf4c0651c34"
	},
	{
		"id": "cb199336ee95",
		"ts": "2026-08-30T01:00:38.270Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"no_dex_pair",
			"modifiable_tax"
		],
		"liquidityUsd": 0,
		"hash": "cb199336ee95fad2e37a4d435285415be94ac1a910764ad57b728692927dc24e"
	},
	{
		"id": "16cca0719b4e",
		"ts": "2026-08-30T01:00:38.540Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 56,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced"
		],
		"liquidityUsd": 0,
		"hash": "16cca0719b4ed42c66e9187fc5694da7b59f4bbb8ba203f4567b3efd6cd2f032"
	},
	{
		"id": "7e835305d522",
		"ts": "2026-08-30T01:00:38.812Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 44,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "7e835305d5225b4d0e08a7c7781d080d21831d14774adb1e20803b8daa60cf12"
	},
	{
		"id": "68da0539b6a7",
		"ts": "2026-08-30T01:00:39.284Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"no_dex_pair",
			"sim_honeypot"
		],
		"liquidityUsd": 0,
		"hash": "68da0539b6a7b31e46919b8be91a466401434e8252f92261c074857c1c6561e0"
	},
	{
		"id": "6b3a7dfb1289",
		"ts": "2026-08-30T01:00:39.569Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair"
		],
		"liquidityUsd": 0,
		"hash": "6b3a7dfb1289dbfca79ad9f8d4049dc029335ab6af6942634b3c3294cbe44a3d"
	},
	{
		"id": "52b66d53c055",
		"ts": "2026-08-30T01:00:39.833Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 52,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.04,
		"flags": [
			"no_dex_pair",
			"high_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "52b66d53c055a8fc4faf10e01d1615a7c5824c5699cffc0b2bc907a7d3b305eb"
	},
	{
		"id": "50d9eb42d7d2",
		"ts": "2026-08-30T01:00:40.086Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 56,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced"
		],
		"liquidityUsd": 0,
		"hash": "50d9eb42d7d24044d51efb9533ee8668b010026b70c2ee3edb400beccfba1a03"
	},
	{
		"id": "09789abcc629",
		"ts": "2026-08-30T01:00:40.327Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "09789abcc62964a9ea8cc9679b520e4a192d3346e35bce64831255a75ab04b9b"
	},
	{
		"id": "b24334506d50",
		"ts": "2026-08-30T01:00:40.562Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "b24334506d50a8f59448cf9d1f60fa6ec57cc2c7c56cc99baa1d35fc06cc56ed"
	},
	{
		"id": "d2c447a7cc35",
		"ts": "2026-08-30T01:00:40.798Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "d2c447a7cc35bbba17d19b7771ee73224543559308bd94d58d5bb1244ccf3ea2"
	},
	{
		"id": "1c7e40c63a14",
		"ts": "2026-08-30T01:00:41.087Z",
		"symbol": "GHST",
		"token": "0xcD2F22236DD9Dfe2356D7C543161D4d260FD9BcB",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "1c7e40c63a1408ffee798d508a80583fe46ac0204e92a1eb7a8f341be0f760bc"
	},
	{
		"id": "2ec36f3ba421",
		"ts": "2026-08-30T01:00:41.324Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "2ec36f3ba421c15f13b422a7e5f6e5178f2ed969af869db87bea5dca15112571"
	},
	{
		"id": "5d6f7c298dd5",
		"ts": "2026-08-30T01:00:41.558Z",
		"symbol": "PROMPT",
		"token": "0x30c7235866872213F68cb1F08c37Cb9eCCB93452",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "5d6f7c298dd516decc141016923951d35ebceb15392bd16fa64159d55c059f8a"
	},
	{
		"id": "a6f582e4f3a5",
		"ts": "2026-08-30T01:00:41.793Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "a6f582e4f3a52843ac8dc6472b9c97a595841a7a7ba046c6e66d78f8481ebb38"
	},
	{
		"id": "d54aff0bde6d",
		"ts": "2026-08-29T22:16:49.868Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116067992.18,
		"hash": "d54aff0bde6dc33146c3517694b2ce88392a83aa164090f6bda0ce418e52cab4"
	},
	{
		"id": "72edc4ee57a8",
		"ts": "2026-08-29T22:16:50.352Z",
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
		"liquidityUsd": 18634042.4,
		"hash": "72edc4ee57a8db51c93d07c8a6467fb3dec4ec6730aa0bf02f76e5ba76bf2d1e"
	},
	{
		"id": "ceafb497c103",
		"ts": "2026-08-29T22:16:50.638Z",
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
		"liquidityUsd": 953538.84,
		"hash": "ceafb497c1031e2020e841917fc1cd6642c8dee23661073e82ccddc095cba8f8"
	},
	{
		"id": "eadbeac5351c",
		"ts": "2026-08-29T22:16:50.891Z",
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
		"liquidityUsd": 29007814.59,
		"hash": "eadbeac5351c4b75b1103165f9ce3378eeaebd7ac0ce61ee600088be0f3f86f5"
	},
	{
		"id": "17664c07a0b4",
		"ts": "2026-08-29T22:16:51.152Z",
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
		"liquidityUsd": 4095108.39,
		"hash": "17664c07a0b4b2ff5800e20343381a93b1f72aac71771c19c51ee4df274db283"
	},
	{
		"id": "576ca6944ff5",
		"ts": "2026-08-29T22:16:51.398Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1156633.04,
		"hash": "576ca6944ff518bc9ab48b0977579a5c9920803e57cd285c3686b621728290a4"
	},
	{
		"id": "5d53e564e591",
		"ts": "2026-08-29T22:16:51.655Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29007814.59,
		"hash": "5d53e564e591695722a1961fe64886797698cb87217302f913f2174fafcdb694"
	},
	{
		"id": "9fc913efb901",
		"ts": "2026-08-29T22:16:51.898Z",
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
		"liquidityUsd": 3897384.19,
		"hash": "9fc913efb901a6962a5fe9a61b62b1c0d0076bf1892ef3888bbe0b17d2d88f78"
	},
	{
		"id": "d03f2a0ca18e",
		"ts": "2026-08-29T22:16:52.153Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1346619.33,
		"hash": "d03f2a0ca18eeafe8446134e97d4cc0320c9c1b4af9284d796eb3b7eaa18f338"
	},
	{
		"id": "0f42c3070d10",
		"ts": "2026-08-29T22:16:52.424Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 633311.65,
		"hash": "0f42c3070d10033f90a6d2b910c49fc7571b541d6b56df24566f663a23ca2690"
	},
	{
		"id": "37bb5c5d4ec3",
		"ts": "2026-08-29T22:16:52.654Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1330613.1,
		"hash": "37bb5c5d4ec3c9c9e7217135fda1702c1fc4694b546c508b8e518e3ee92805b9"
	},
	{
		"id": "eeb5eb3dc1e1",
		"ts": "2026-08-29T22:16:52.882Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 136247.27,
		"hash": "eeb5eb3dc1e1e9b4ac5f3593db958ce3e3128854b973dfdbeb7c6496bdaa7ef2"
	},
	{
		"id": "9f7e829dbd8b",
		"ts": "2026-08-29T22:16:53.110Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3571848.73,
		"hash": "9f7e829dbd8bf69a5c2050cc84b774e17fefa03ba68803b70d78e4ee8e509b90"
	},
	{
		"id": "ad7b3edc17c3",
		"ts": "2026-08-29T22:16:53.338Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 122714.58,
		"hash": "ad7b3edc17c382e3fca584fb3db0eb2dc20904d8564135b0ef531356ba76354b"
	},
	{
		"id": "c00086155c01",
		"ts": "2026-08-29T22:16:53.610Z",
		"symbol": "GHST",
		"token": "0xcD2F22236DD9Dfe2356D7C543161D4d260FD9BcB",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 781671.46,
		"hash": "c00086155c01002589d4781703c63ab8d083eaa773160c46c40ace027db69b0b"
	},
	{
		"id": "bf2541bc5f3a",
		"ts": "2026-08-29T22:16:53.838Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 413303.02,
		"hash": "bf2541bc5f3ae8d76933edd6887303d743f5945c37e4ddd0cfbdd15c5d1c190c"
	},
	{
		"id": "c3779d3889c5",
		"ts": "2026-08-29T22:16:54.067Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4071931.47,
		"hash": "c3779d3889c5a0dc4cfa0e4b621a710c5202a504049defc8da6010977cad4226"
	},
	{
		"id": "32673941f38b",
		"ts": "2026-08-29T22:16:54.293Z",
		"symbol": "PROMPT",
		"token": "0x30c7235866872213F68cb1F08c37Cb9eCCB93452",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 122583.16,
		"hash": "32673941f38b3571e3ca5b2def7a8eeda96f69706cba58989875be24e9b69eb8"
	},
	{
		"id": "629146c281a2",
		"ts": "2026-08-29T22:16:54.521Z",
		"symbol": "BASELINE",
		"token": "0xb20000000000000000000000c6f9024862C6fb01",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 74156.21,
		"hash": "629146c281a2215dc42ab153b7f863f9bdac34320887258fd7dbe9fb6671bda7"
	},
	{
		"id": "30442f169d41",
		"ts": "2026-08-29T19:08:22.418Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116061581.29,
		"hash": "30442f169d41c45c2b310ced8bdbea9230db446ad87167de3eb6296afd52c6b1"
	},
	{
		"id": "36879059f271",
		"ts": "2026-08-29T19:08:22.765Z",
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
		"liquidityUsd": 18445813.08,
		"hash": "36879059f27172f26fb9c778458f1252a5906ef7fe5f255a18ef750590ba1a00"
	},
	{
		"id": "3bcab1d3abcf",
		"ts": "2026-08-29T19:08:23.086Z",
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
		"liquidityUsd": 955251.5,
		"hash": "3bcab1d3abcfc614a121b53aa90f531c8ad0cc94ca9e88ca36c3701237af7c0d"
	},
	{
		"id": "5272f09ba75d",
		"ts": "2026-08-29T19:08:23.289Z",
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
		"liquidityUsd": 29053128.11,
		"hash": "5272f09ba75d9c42caacf9e26aa584f890fd774c8172be931c11ee971945f56a"
	},
	{
		"id": "82421df7d32d",
		"ts": "2026-08-29T19:08:23.487Z",
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
		"liquidityUsd": 4105039.34,
		"hash": "82421df7d32d792bdd16b5ebe560f8e003ecb4383a5d850e2e652f841ea31b77"
	},
	{
		"id": "8f7c440cf193",
		"ts": "2026-08-29T19:08:23.694Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1155334.26,
		"hash": "8f7c440cf19324bb4c1a9c02bf8d4eb29b96aaa6f3ac5ebef70895f7c6f6a2ee"
	},
	{
		"id": "001a5aebce2f",
		"ts": "2026-08-29T19:08:23.926Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29053128.11,
		"hash": "001a5aebce2fa019f3ea6337cb48144861df9fd3ebb64000c6c15972da0fd1cc"
	},
	{
		"id": "93288ec44002",
		"ts": "2026-08-29T19:08:24.133Z",
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
		"liquidityUsd": 3899860,
		"hash": "93288ec440026e63967f96e4d2978a14de5522374da4a76a57f24fa5a193e161"
	},
	{
		"id": "8d752c2027c4",
		"ts": "2026-08-29T19:08:24.324Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1322007.38,
		"hash": "8d752c2027c4b751dcf728a123039c1663e96a0a32c39d8270e45571276571ca"
	},
	{
		"id": "11f54721e677",
		"ts": "2026-08-29T19:08:24.634Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 635525.04,
		"hash": "11f54721e6778f9bfa9c7cd56b4c1f23b20fd6b6f2e79cf14317d8b678a1ab9f"
	},
	{
		"id": "03fa9ebe9201",
		"ts": "2026-08-29T19:08:24.831Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 151498.33,
		"hash": "03fa9ebe92018ee4917cec6a1ed8ce35890cf6d032a62cc5d70a8526acc62d51"
	},
	{
		"id": "2733229f7907",
		"ts": "2026-08-29T19:08:25.028Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1340594.05,
		"hash": "2733229f7907415174bc6bdcecd763830ad7456604fa5d7b7944d6b761e1f6c7"
	},
	{
		"id": "af3adcbc6123",
		"ts": "2026-08-29T19:08:25.232Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 116173.5,
		"hash": "af3adcbc6123494fd9eaf20b15c965d9cd40ab011e75e566e1ebbf6ad797fe87"
	},
	{
		"id": "6261eb4ec175",
		"ts": "2026-08-29T19:08:25.437Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3612743.73,
		"hash": "6261eb4ec175a539f59151723be44a0d4287c624351edac8080e2e71bf21b5cd"
	},
	{
		"id": "196888ad0f54",
		"ts": "2026-08-29T19:08:25.617Z",
		"symbol": "GHST",
		"token": "0xcD2F22236DD9Dfe2356D7C543161D4d260FD9BcB",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 780182.43,
		"hash": "196888ad0f542a7346ab759bde77b00973ab54b6f882830f642e0a3c114527d9"
	},
	{
		"id": "95148ea24491",
		"ts": "2026-08-29T19:08:26.032Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4077469.98,
		"hash": "95148ea24491e44376d340df6ca6a545e9b7f325412e893c2ec2b30188a26341"
	},
	{
		"id": "a30f48fb3507",
		"ts": "2026-08-29T19:08:26.229Z",
		"symbol": "BASELINE",
		"token": "0xb20000000000000000000000c6f9024862C6fb01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 78342.16,
		"hash": "a30f48fb3507f5506ffa6d2df1975aeef199b5140de981c71a60df9eaf5a2ca4"
	},
	{
		"id": "55a4fc984740",
		"ts": "2026-08-29T19:08:26.423Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 368999.32,
		"hash": "55a4fc984740f665e2791b3d4fd183e5fafff6656b3773d90b3e2b2ec8b6d5c3"
	},
	{
		"id": "b5cee84acf15",
		"ts": "2026-08-29T19:08:26.628Z",
		"symbol": "PROMPT",
		"token": "0x30c7235866872213F68cb1F08c37Cb9eCCB93452",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 123013.6,
		"hash": "b5cee84acf1504f6e0bf3ae57ee931c8498cfbd02ae4e104c7a2c9dc978b9e95"
	},
	{
		"id": "a04fa28c20b4",
		"ts": "2026-08-29T19:08:26.817Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1820417.83,
		"hash": "a04fa28c20b47649ce6f59593e88d163225a4ff97ff73e573e6852bfdafddfb3"
	},
	{
		"id": "a1d8dbdc0848",
		"ts": "2026-08-29T15:26:48.291Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115962669.02,
		"hash": "a1d8dbdc084835194a8f052ee2b8dc820866f95706ce343a15847915bef6a3d8"
	},
	{
		"id": "762cad3f9543",
		"ts": "2026-08-29T15:26:48.892Z",
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
		"liquidityUsd": 18006079.96,
		"hash": "762cad3f95430766a98caa6078a17fec03927d78024aec0b9532492cbbdfd520"
	},
	{
		"id": "cd50c386e1c2",
		"ts": "2026-08-29T15:26:49.177Z",
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
		"liquidityUsd": 951856.73,
		"hash": "cd50c386e1c2a2651fe33d7fd4b6231445c9e4245752c2858070240c49da8646"
	},
	{
		"id": "93aa5217b265",
		"ts": "2026-08-29T15:26:49.438Z",
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
		"liquidityUsd": 28968613.49,
		"hash": "93aa5217b26525ae34c46215cb15e9a4e44c16eb08e2adf4314863c20f5b5678"
	},
	{
		"id": "484d90deb289",
		"ts": "2026-08-29T15:26:49.694Z",
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
		"liquidityUsd": 4073910.39,
		"hash": "484d90deb289e39cb043b9b72a96b5ae468ee9f2770573d7f0c1c86fe5e7e1af"
	},
	{
		"id": "f553d9c4d336",
		"ts": "2026-08-29T15:26:49.965Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1159316.84,
		"hash": "f553d9c4d3367063bd4162e179db90a4cf9b0d1d123cc6c1bac74774f8d1983c"
	},
	{
		"id": "bf0db0bea7b8",
		"ts": "2026-08-29T15:26:50.234Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28968613.49,
		"hash": "bf0db0bea7b88f5535803b199ae8b0baf5d90100c16f2134a6b3d6774f83754b"
	},
	{
		"id": "0224f65c801f",
		"ts": "2026-08-29T15:26:50.693Z",
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
		"liquidityUsd": 3922789.7,
		"hash": "0224f65c801fc7e93b88188d46e2241af044cbdd7d231d669fd2e2769ba0ea00"
	},
	{
		"id": "469e5671d2fc",
		"ts": "2026-08-29T15:26:50.960Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1357426.54,
		"hash": "469e5671d2fcf0d261cfe005d4114e293ff3f056242db084b557cf02d09f04af"
	},
	{
		"id": "a0651b1b1b39",
		"ts": "2026-08-29T15:26:51.253Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 634546.09,
		"hash": "a0651b1b1b39153b4c93002cf18b62b3e1685fbb7549e0e1d81cb186f6d5c0bb"
	},
	{
		"id": "4090b51513c0",
		"ts": "2026-08-29T15:26:51.488Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1347993.36,
		"hash": "4090b51513c0f113cd2cb095bcfa2a5125cb9e67dbd7dadb17af08113a7b823f"
	},
	{
		"id": "eda9cedb9bd8",
		"ts": "2026-08-29T15:26:51.723Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 127198.86,
		"hash": "eda9cedb9bd8a9897b2648da113f2a4e22f0e6912c49a519866aa1ebaa8aba2c"
	},
	{
		"id": "4eba982db7d3",
		"ts": "2026-08-29T15:26:51.959Z",
		"symbol": "BASELINE",
		"token": "0xb20000000000000000000000c6f9024862C6fb01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 86810.73,
		"hash": "4eba982db7d3eddb6c07c84c1bbaf801c494333b5cf08a82e14402d82b4addbb"
	},
	{
		"id": "6a285f8f1d2d",
		"ts": "2026-08-29T15:26:52.191Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3567441.91,
		"hash": "6a285f8f1d2dbfba28a5eb7887f08b259afab76d185970b2abdc0617717d54c5"
	},
	{
		"id": "d6407c79c26a",
		"ts": "2026-08-29T15:26:52.424Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 162337.97,
		"hash": "d6407c79c26ade92e8c369bceecbbbe1791d0de58c9f39cdaf80351da448ea2b"
	},
	{
		"id": "18ceaa2064d3",
		"ts": "2026-08-29T15:26:52.658Z",
		"symbol": "GHST",
		"token": "0xcD2F22236DD9Dfe2356D7C543161D4d260FD9BcB",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 836598.71,
		"hash": "18ceaa2064d34e7ff5b476fc9d71f8bd003458ec8c1c9dd01ad556fdc3559eed"
	},
	{
		"id": "41c0a10ddfc1",
		"ts": "2026-08-29T15:26:52.893Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4071497.37,
		"hash": "41c0a10ddfc1ad4241fd8cc127864fa8392b4f6b8d5861b69cbc3bf4c932db38"
	},
	{
		"id": "7d899a8786b3",
		"ts": "2026-08-29T15:26:53.128Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1787425.4,
		"hash": "7d899a8786b3e281c5387d6087526e0f38f08c2fe22ac2094d0765c5c9e8e2bf"
	},
	{
		"id": "2c5d4c142d37",
		"ts": "2026-08-29T15:26:53.362Z",
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
		"liquidityUsd": 887267.29,
		"hash": "2c5d4c142d37839668d1708b225a2a5db59ceb3e838635f48128d2b5f808ba25"
	},
	{
		"id": "a59dbbde49cd",
		"ts": "2026-08-29T15:26:53.596Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 382285.2,
		"hash": "a59dbbde49cdf57f55a967f5d09f373b254d914e114d35c2348e5029dbeb8a1e"
	},
	{
		"id": "9e565235864e",
		"ts": "2026-08-29T10:43:18.172Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115728423.29,
		"hash": "9e565235864e2de7c154a4bd4f103b816eadcafa1f7c53b548d2898a45478f94"
	},
	{
		"id": "7df623e27c8f",
		"ts": "2026-08-29T10:43:18.471Z",
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
		"liquidityUsd": 18780419.21,
		"hash": "7df623e27c8fc4a2148f88acad2020cbcc5813ca5baf0accac6a8053e0366a03"
	},
	{
		"id": "fae56bd9b50b",
		"ts": "2026-08-29T10:43:18.705Z",
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
		"liquidityUsd": 948519.56,
		"hash": "fae56bd9b50bb45c4f29b0e4d0f728ad5ef541ce68f92088b965c9ca791b0d7a"
	},
	{
		"id": "7c01e6573ee8",
		"ts": "2026-08-29T10:43:18.933Z",
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
		"liquidityUsd": 28815505.18,
		"hash": "7c01e6573ee8d09c3d4aad7f79aa7907bfb3eeaa5e762b479d3b6e6223c7f3a4"
	},
	{
		"id": "0e118fde5c24",
		"ts": "2026-08-29T10:43:19.139Z",
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
		"liquidityUsd": 4056491.01,
		"hash": "0e118fde5c24224ab03aad734f2f7bc1a7d437e48bb9f649563c185e31c0e80c"
	},
	{
		"id": "65ab665fb083",
		"ts": "2026-08-29T10:43:19.344Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1148294,
		"hash": "65ab665fb083773501ba0031544405bf66c002c3e2efb51c79382bcab963e985"
	},
	{
		"id": "7b2ef4e044ca",
		"ts": "2026-08-29T10:43:19.561Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28815505.18,
		"hash": "7b2ef4e044cad646891fd69562a2f52d701055a5f3c19cf80987fda2f9cd8ccb"
	},
	{
		"id": "1dd29df9c748",
		"ts": "2026-08-29T10:43:19.880Z",
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
		"liquidityUsd": 1780750.7,
		"hash": "1dd29df9c7480da96656b0b27c0521e044a887f1d3e06b4332523d940b910f8e"
	},
	{
		"id": "d4f9b9a4220c",
		"ts": "2026-08-29T10:43:20.123Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1383407.41,
		"hash": "d4f9b9a4220cc099efa42903e5823c7f6a599b8902650a3a8e755ddd89189913"
	},
	{
		"id": "dd80919c9f34",
		"ts": "2026-08-29T10:43:20.374Z",
		"symbol": "BASELINE",
		"token": "0xb20000000000000000000000c6f9024862C6fb01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 102867.27,
		"hash": "dd80919c9f34e64f5ac16fe9adbda4f1615a436cef60615426620af2cf6c9a20"
	},
	{
		"id": "05c8aa0acfed",
		"ts": "2026-08-29T10:43:20.577Z",
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
		"liquidityUsd": 649921,
		"hash": "05c8aa0acfed690f280b8ddba03149abb0ee832be24081c29026cde99dce6488"
	},
	{
		"id": "2c158ca53696",
		"ts": "2026-08-29T10:43:20.804Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 119190.08,
		"hash": "2c158ca53696eaec6ca1b9faaf25a7aeb32d02979c0cdef54421d77539efdf5b"
	},
	{
		"id": "d4a1f15c1c51",
		"ts": "2026-08-29T10:43:20.997Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3467220.64,
		"hash": "d4a1f15c1c517bbf827d47f9b50ddb6f8529735f19764f00c2e80421c6445f20"
	},
	{
		"id": "75b4fb79b509",
		"ts": "2026-08-29T10:43:21.187Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 156234.98,
		"hash": "75b4fb79b509ad315d358d43c76ad715b8bdf3ae5b5064a4327bd727c8a24754"
	},
	{
		"id": "a1e199881d21",
		"ts": "2026-08-29T10:43:21.377Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4049446.06,
		"hash": "a1e199881d2187ad926c2574d59d4b0346925b9422b7c8b0c6de8d5a73b79600"
	},
	{
		"id": "80f41ffa82a0",
		"ts": "2026-08-29T10:43:21.566Z",
		"symbol": "ElonRWA",
		"token": "0xAa6Cccdce193698D33deb9ffd4be74eAa74c4898",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 579869.74,
		"hash": "80f41ffa82a02850fd297536bf522dbde30accba01a63d634193b38ca42534a5"
	},
	{
		"id": "f64fc5443c87",
		"ts": "2026-08-29T10:43:21.757Z",
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
		"liquidityUsd": 860104.37,
		"hash": "f64fc5443c8755500834f39f9d29c0f85d4ac9225215fa75bf8eafa34d92f5ed"
	},
	{
		"id": "2e41724b2191",
		"ts": "2026-08-29T10:43:21.947Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1338972.82,
		"hash": "2e41724b21917342052787928078297603e44d6d836f228558c48544cc5b9e05"
	},
	{
		"id": "bf377cedbeb7",
		"ts": "2026-08-29T10:43:22.155Z",
		"symbol": "GHST",
		"token": "0xcD2F22236DD9Dfe2356D7C543161D4d260FD9BcB",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 849557.1,
		"hash": "bf377cedbeb7fd4415ae2030efa7e703b650ffb1118943e785c9ebb7e9cc649f"
	},
	{
		"id": "0dc493d1e323",
		"ts": "2026-08-29T10:43:22.360Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1780830.79,
		"hash": "0dc493d1e323fcee3f2a78a1930bc8c4506222abaf75ac39c4253ad92f57859e"
	},
	{
		"id": "176f7385424f",
		"ts": "2026-08-29T03:03:13.970Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116256039.08,
		"hash": "176f7385424fcf3b37db20b1c33b918bd584d102139f3820cf85b360bc443398"
	},
	{
		"id": "67c314b4d16f",
		"ts": "2026-08-29T03:03:14.363Z",
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
		"liquidityUsd": 17644139.08,
		"hash": "67c314b4d16fdf059a4c7604034cf315d75868b8cba962e94f9495adf6c58b60"
	},
	{
		"id": "006d219d987f",
		"ts": "2026-08-29T03:03:14.712Z",
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
		"liquidityUsd": 952829.01,
		"hash": "006d219d987f8fc1d9bfba092943f5d0e133cce80aff962341fdcc0bac13b57a"
	},
	{
		"id": "7ad69133de61",
		"ts": "2026-08-29T03:03:14.910Z",
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
		"liquidityUsd": 28944430.23,
		"hash": "7ad69133de6128644130b60850b02f251ceacbddc803af2368c588600c90915e"
	}
]
