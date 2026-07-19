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
	"updatedAt": "2026-07-19T23:53:58.290Z",
	"tokensScored": 4497,
	"verdictsIssued": 4497,
	"safe": 3967,
	"risky": 357,
	"likelyRug": 173,
	"ticks": 275
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "3dc5f404dcef",
		"ts": "2026-07-19T23:53:54.215Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 108143512.85,
		"hash": "3dc5f404dcefff8dcaee89c79b300565cd4d144301bc51bc6d1d440abbc647bf"
	},
	{
		"id": "3199e7a0ddc3",
		"ts": "2026-07-19T23:53:54.661Z",
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
		"liquidityUsd": 15436143.72,
		"hash": "3199e7a0ddc348cc3ac6d92a63b0229f6186eb42df7c80027a4bb3dde09032d4"
	},
	{
		"id": "aa4d239ef8af",
		"ts": "2026-07-19T23:53:55.098Z",
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
		"liquidityUsd": 864294.19,
		"hash": "aa4d239ef8af47e4b4facea5bea68f9085a6ec9d8cbe640cd88d77cd4706cfd7"
	},
	{
		"id": "aca6d93c9df3",
		"ts": "2026-07-19T23:53:55.334Z",
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
		"liquidityUsd": 25576149.95,
		"hash": "aca6d93c9df34c2b3e2cbecc8312fe99fa981d364038249c19dbfc49c865ad81"
	},
	{
		"id": "7aaff5e82619",
		"ts": "2026-07-19T23:53:55.570Z",
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
		"liquidityUsd": 5050110.52,
		"hash": "7aaff5e82619806433f97ae0bbc330f957ea210fc06681b7be5c485ffac5db02"
	},
	{
		"id": "2d716308969a",
		"ts": "2026-07-19T23:53:55.809Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 991379.68,
		"hash": "2d716308969a8ba4058abf2cc75fd18cb8634a3467e949f37dcff9f48c6ee46a"
	},
	{
		"id": "b7c7bfe99311",
		"ts": "2026-07-19T23:53:56.041Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25576149.95,
		"hash": "b7c7bfe99311a52051a513e050ee796c48c1f791722a6a37959f02699272fe18"
	},
	{
		"id": "f7a4dda41331",
		"ts": "2026-07-19T23:53:56.274Z",
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
		"liquidityUsd": 2502238.42,
		"hash": "f7a4dda4133195e05b5ebe986deb8b48ba43253ae65ce12135d9d1e6ff261a8c"
	},
	{
		"id": "930dedb1af8d",
		"ts": "2026-07-19T23:53:56.519Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 148464.85,
		"hash": "930dedb1af8d017cca58de960717f7285ef247d18fc2146be462b9f04d68f394"
	},
	{
		"id": "90e68b9d8793",
		"ts": "2026-07-19T23:53:56.754Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity"
		],
		"liquidityUsd": 47833.35,
		"hash": "90e68b9d8793fdff6c26bfa10099230d1891e3ebb4256d92edfa8502bd329736"
	},
	{
		"id": "6d6f12a5eb61",
		"ts": "2026-07-19T23:53:56.973Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2066618.39,
		"hash": "6d6f12a5eb615a3ad5cfb59c3c880ec0f707246dc927eddcf219ac2bcda4f3ed"
	},
	{
		"id": "2539c9b28dad",
		"ts": "2026-07-19T23:53:57.191Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1266009.86,
		"hash": "2539c9b28dadb745504586aaba41bf9abac13a088e13c4efda864ee3eda6df29"
	},
	{
		"id": "21ff9a77e370",
		"ts": "2026-07-19T23:53:57.411Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 199888.15,
		"hash": "21ff9a77e370820f8fdf010372e13ed5a1019c5fa71e151cf52a7b203d05a701"
	},
	{
		"id": "186c39ebd37f",
		"ts": "2026-07-19T23:53:57.630Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 437473.4,
		"hash": "186c39ebd37ff0d7870a7597a37bfcbf9e2e10919dc87ac26f5c0b196dd908a5"
	},
	{
		"id": "047c281b6a90",
		"ts": "2026-07-19T23:53:57.849Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1210727.37,
		"hash": "047c281b6a90cb6ff7f65092b1f08a6d14a4c5e458f02f48ed0518c9dad16c19"
	},
	{
		"id": "af271a7ebaa1",
		"ts": "2026-07-19T23:53:58.069Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 620185.76,
		"hash": "af271a7ebaa1e82726d4f17985e27765cca698aa9fe2d64346555ceeb40388d8"
	},
	{
		"id": "9cc69cae83dd",
		"ts": "2026-07-19T23:53:58.289Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 532049.65,
		"hash": "9cc69cae83dd78ead4f09ddea6f394c9066f1ae98151169a4d22e65df38b882c"
	},
	{
		"id": "96d3ceb46341",
		"ts": "2026-07-19T22:47:14.859Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 108138427.41,
		"hash": "96d3ceb46341ee1651159daef19dc5c3f2057b285dca1eb60ed668612a3d753f"
	},
	{
		"id": "1b262f684469",
		"ts": "2026-07-19T22:47:15.068Z",
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
		"liquidityUsd": 15312347.09,
		"hash": "1b262f684469630120058505ea6efebc2d6dd49433bab0188987582a82cb3a52"
	},
	{
		"id": "046029f513da",
		"ts": "2026-07-19T22:47:15.272Z",
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
		"liquidityUsd": 864864.55,
		"hash": "046029f513da6908ad530b986890dfde867eafe2f25041fff258fae380a39a08"
	},
	{
		"id": "4f4bc5eb220e",
		"ts": "2026-07-19T22:47:15.465Z",
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
		"liquidityUsd": 25621004.87,
		"hash": "4f4bc5eb220e7539e7833dfc2f27e4ac57a54d963d0247bc8e33e8e0531e48fd"
	},
	{
		"id": "f7e077c61f02",
		"ts": "2026-07-19T22:47:15.657Z",
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
		"liquidityUsd": 5034705.36,
		"hash": "f7e077c61f0284fffa3dce2ee16d132f84d3f3fa6491edad45e04193fa6679b9"
	},
	{
		"id": "7fcdeebb7491",
		"ts": "2026-07-19T22:47:15.855Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 993833.38,
		"hash": "7fcdeebb74916a82c0cc7655e39791a142b70fe81ec5bdde0f7cd86c1308c4d0"
	},
	{
		"id": "c57c246cfb15",
		"ts": "2026-07-19T22:47:16.048Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25621004.87,
		"hash": "c57c246cfb15a27870aa3759c4afcd1b9643347b973866ab26500bec414ad9d4"
	},
	{
		"id": "96c9f9c39989",
		"ts": "2026-07-19T22:47:16.253Z",
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
		"liquidityUsd": 2504418.49,
		"hash": "96c9f9c39989802f20f2e28af111cdbc790e3aaa70f79e1d8ad8cc845a3105af"
	},
	{
		"id": "cd1efe83aaab",
		"ts": "2026-07-19T22:47:16.450Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 154266.87,
		"hash": "cd1efe83aaab9daf6383eef70924afa8bf4314dfe8c36e369c835a67b722a88b"
	},
	{
		"id": "dcf6de36c237",
		"ts": "2026-07-19T22:47:16.645Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity"
		],
		"liquidityUsd": 47606.91,
		"hash": "dcf6de36c23705183f774abe96ca8f3180afb89b894a281a8c20cea7393bc0dd"
	},
	{
		"id": "f1c955911227",
		"ts": "2026-07-19T22:47:16.834Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2069854.82,
		"hash": "f1c95591122770945a8990d625a5648544afdd2ac52d42705628b1b45b5160dd"
	},
	{
		"id": "78364eba028c",
		"ts": "2026-07-19T22:47:17.017Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 201030.86,
		"hash": "78364eba028c3ea87bab4e4819b1d9b5f220dd727d83bcd35870486c56ac646f"
	},
	{
		"id": "80f8551f1136",
		"ts": "2026-07-19T22:47:17.215Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1244522.82,
		"hash": "80f8551f1136e78f629bcb09da89cbc43296152b95b124cc509b5dc3bf489565"
	},
	{
		"id": "0d9755d02bc2",
		"ts": "2026-07-19T22:47:17.398Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1855450.06,
		"hash": "0d9755d02bc2c3862d1734ee0e028ffe380672d6d50ebc02e8cf7cda7d0e43aa"
	},
	{
		"id": "fcb59f12ca8a",
		"ts": "2026-07-19T22:47:17.583Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1210521.67,
		"hash": "fcb59f12ca8a3ffd5ac5bec9d994f6af89f6ca53b0da0526be42894d1a586ea6"
	},
	{
		"id": "e5db6b186938",
		"ts": "2026-07-19T22:47:17.805Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 83438.93,
		"hash": "e5db6b186938ac2d74818b81a98ef9dee670811e83e8e10174c22d49fd72e693"
	},
	{
		"id": "d99e61445311",
		"ts": "2026-07-19T22:47:18.007Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 435728,
		"hash": "d99e61445311aeadceb3b1cf17c1dbccd83dd4d41a48c252bda46ab761678628"
	},
	{
		"id": "7d2a427a2303",
		"ts": "2026-07-19T21:48:22.755Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107853348.54,
		"hash": "7d2a427a2303d685ab497c096a35a732cfad540bc5fe699768dd46c3f10bf63a"
	},
	{
		"id": "beb79a154e58",
		"ts": "2026-07-19T21:48:23.106Z",
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
		"liquidityUsd": 14876406.16,
		"hash": "beb79a154e58faeb0e483c273935a08b61c45a9c77518a7c68e789f0a24535e8"
	},
	{
		"id": "3a31469fdc7b",
		"ts": "2026-07-19T21:48:23.296Z",
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
		"liquidityUsd": 862845.88,
		"hash": "3a31469fdc7b2bdf745e77e5dffda63d6d61e125504e73b7ff73d9072a6bede7"
	},
	{
		"id": "cfacb7f8de52",
		"ts": "2026-07-19T21:48:23.484Z",
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
		"liquidityUsd": 25414111.74,
		"hash": "cfacb7f8de527e3fdc3282aeb5be9b757ae061133aee358d86b675baef11d872"
	},
	{
		"id": "616286d3b294",
		"ts": "2026-07-19T21:48:23.673Z",
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
		"liquidityUsd": 5034705.36,
		"hash": "616286d3b2944c9d6ae667e8838005fdc66f28e15900e0fc7440e5c842bd252b"
	},
	{
		"id": "2a1d28bd3b04",
		"ts": "2026-07-19T21:48:23.863Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 990439.6,
		"hash": "2a1d28bd3b049855b951af09bbaee211df01b4aac449679be8e74b6a4ee9785b"
	},
	{
		"id": "01d4bad55b09",
		"ts": "2026-07-19T21:48:24.050Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25414111.74,
		"hash": "01d4bad55b094cac8d82311023d105c61eb661382610b9c9db05e7dab1100da5"
	},
	{
		"id": "075d820e816d",
		"ts": "2026-07-19T21:48:24.262Z",
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
		"liquidityUsd": 2485357.49,
		"hash": "075d820e816d652486ebf040f5844c5ff90a111c185b762fe446d0d61505a654"
	},
	{
		"id": "642d7de47935",
		"ts": "2026-07-19T21:48:24.454Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 152915.63,
		"hash": "642d7de4793588e949959daba91a4886abcf9d5d8869fd8c512878e179f2adfa"
	},
	{
		"id": "99ad10812de3",
		"ts": "2026-07-19T21:48:24.639Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity"
		],
		"liquidityUsd": 45357.84,
		"hash": "99ad10812de30f011992d46f7f4134aa9c24c9fd16925a3bd59e25ff7a05dbc7"
	},
	{
		"id": "c3a5934d3080",
		"ts": "2026-07-19T21:48:24.818Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2066108.93,
		"hash": "c3a5934d308053fa1c4ac893f1d4ed0dabccfee610d81ef937910fc9cfa100a9"
	},
	{
		"id": "7241baa2a571",
		"ts": "2026-07-19T21:48:24.995Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1270611.64,
		"hash": "7241baa2a571d8c65b77d768342857a35f7dceb9fe4c00529df313df105f72d0"
	},
	{
		"id": "aec159c203e1",
		"ts": "2026-07-19T21:48:25.173Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 200320.36,
		"hash": "aec159c203e1792bbeb96129c673122a9c61e635ba0a57102cf4f2151cf30c51"
	},
	{
		"id": "e6525ebe40bd",
		"ts": "2026-07-19T21:48:25.354Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1847952.74,
		"hash": "e6525ebe40bdb5d0a17eef08d06760fb9849c985d7157db01e691193f488d31e"
	},
	{
		"id": "881cfbdf8e41",
		"ts": "2026-07-19T21:48:25.542Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 431088.03,
		"hash": "881cfbdf8e4132cb808447452b7e100860908ea9f561b5da9a0947e9ebd5a37a"
	},
	{
		"id": "2d4cbea2124b",
		"ts": "2026-07-19T21:48:25.730Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1210554.95,
		"hash": "2d4cbea2124b6588211df05a24ec777138ef541551212731378777652bbc6e12"
	},
	{
		"id": "0a61149840c8",
		"ts": "2026-07-19T20:41:43.016Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107789968.48,
		"hash": "0a61149840c842ffdbdad3fe11fc8490585c4708926efe38f6ecfd9ffd45830b"
	},
	{
		"id": "a4931d3d1c3f",
		"ts": "2026-07-19T20:41:43.464Z",
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
		"liquidityUsd": 14555940.28,
		"hash": "a4931d3d1c3f46f02a71981a2e3c79685a6a0e9d3b73e831bc896c740d08e4f7"
	},
	{
		"id": "4e916d3481d6",
		"ts": "2026-07-19T20:41:43.711Z",
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
		"liquidityUsd": 870087.16,
		"hash": "4e916d3481d6e14156b296cd29dc0f579d986836f5608da66734d48d80e464a1"
	},
	{
		"id": "7a682b207eca",
		"ts": "2026-07-19T20:41:43.954Z",
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
		"liquidityUsd": 25426294.49,
		"hash": "7a682b207ecafe4150c352e442df62c80982d38084e01204f45b1008f5b78330"
	},
	{
		"id": "36cc386c21b6",
		"ts": "2026-07-19T20:41:44.208Z",
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
		"liquidityUsd": 5028338.1,
		"hash": "36cc386c21b667a4a193bee04f9cc0e6cf266cabc640f60969bf6a2c391e0136"
	},
	{
		"id": "aa3a087f0be4",
		"ts": "2026-07-19T20:41:44.453Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 990439.6,
		"hash": "aa3a087f0be46ad783f2fa1a87b5a1875fb20c2bd821e3080e7f916de441bb67"
	},
	{
		"id": "b3333f262dca",
		"ts": "2026-07-19T20:41:44.694Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25426294.49,
		"hash": "b3333f262dca0be9ea0a1384c93067cbae8ac2e0df696847e081f1bc0323157a"
	},
	{
		"id": "e1cd0e160fa9",
		"ts": "2026-07-19T20:41:44.972Z",
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
		"liquidityUsd": 2492569.82,
		"hash": "e1cd0e160fa990ea07d5095582222cb27dad8f6858a23c6f4f7430c4d4ce0fcf"
	},
	{
		"id": "5d6d35cbdd31",
		"ts": "2026-07-19T20:41:45.213Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 162868.47,
		"hash": "5d6d35cbdd319767073bc27651313a0cc2def7c4db4abf350763d2a188171919"
	},
	{
		"id": "ad126f507934",
		"ts": "2026-07-19T20:41:45.456Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity"
		],
		"liquidityUsd": 46821.64,
		"hash": "ad126f507934214e8d740ade51013a0e4e7f0d15bd50c8125c36b444be8fd192"
	},
	{
		"id": "86771d38dac9",
		"ts": "2026-07-19T20:41:45.684Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2076663.68,
		"hash": "86771d38dac96ba707c1083d9774c3eec32cc8c3d2ee268e7edf328a94fdd31f"
	},
	{
		"id": "875309eb827b",
		"ts": "2026-07-19T20:41:45.912Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1844844.37,
		"hash": "875309eb827b79542fd74145170e0cd1aa4ffc4b7ad6a6f8bb69c32bd1847eff"
	},
	{
		"id": "902484af03f4",
		"ts": "2026-07-19T20:41:46.141Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 205165.56,
		"hash": "902484af03f44ae5ac2220fef7a122a9c87cc0d346ae3af8c23b86d99e035fa6"
	},
	{
		"id": "c1f55602ea86",
		"ts": "2026-07-19T20:41:46.374Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1280279.76,
		"hash": "c1f55602ea86d7cf94d0eaf2fbe2d34ad509c7328927c298e12b628a189ed9aa"
	},
	{
		"id": "069289809631",
		"ts": "2026-07-19T20:41:46.602Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 432047.56,
		"hash": "069289809631509784fddc408bff77f0b4110151c9a14645dde6e3c7746db5a5"
	},
	{
		"id": "b75a670c88af",
		"ts": "2026-07-19T20:41:46.829Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 529771.86,
		"hash": "b75a670c88af706dc0973ccda4c2d8439e818fb22d331b49d083d6cdcdb46c09"
	},
	{
		"id": "1c176c9c2efd",
		"ts": "2026-07-19T19:02:54.879Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107737354.69,
		"hash": "1c176c9c2efd52fd4cc6d4465ecd19c4da6ad6b878300a9f5884828259ed366a"
	},
	{
		"id": "2b95f40bb9c4",
		"ts": "2026-07-19T19:02:55.332Z",
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
		"liquidityUsd": 15307407.79,
		"hash": "2b95f40bb9c4d2776019b32e47597e96dd6b59dfdea7789c18657d2dc21bd8bc"
	},
	{
		"id": "64212b92ffb2",
		"ts": "2026-07-19T19:02:55.568Z",
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
		"liquidityUsd": 869947.48,
		"hash": "64212b92ffb21f2c74aaf4548847c01f2a626038eb26393d787c388ce74c7244"
	},
	{
		"id": "e117ef32b59f",
		"ts": "2026-07-19T19:02:55.820Z",
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
		"liquidityUsd": 25344714.19,
		"hash": "e117ef32b59fa04a5d83027cf2fe91b2fee53f94aaa6fa9ad4928b9685410120"
	},
	{
		"id": "b16b994aa44a",
		"ts": "2026-07-19T19:02:56.055Z",
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
		"liquidityUsd": 5002159.9,
		"hash": "b16b994aa44a601f22871fed98d9fab3301e2f565255e570a743c1549cf181ec"
	},
	{
		"id": "03cee21d47da",
		"ts": "2026-07-19T19:02:56.304Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 996548.87,
		"hash": "03cee21d47dad13f40be1aab6e57318cd4552068258cef560c75ff7d44045f3f"
	},
	{
		"id": "386c20f82665",
		"ts": "2026-07-19T19:02:56.532Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25344714.19,
		"hash": "386c20f82665df3217dd7621d043d60fb8a72af2161d27c6885d088ac74c71e6"
	},
	{
		"id": "3b4735d75260",
		"ts": "2026-07-19T19:02:56.782Z",
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
		"liquidityUsd": 2942327.34,
		"hash": "3b4735d752604e5f0634820c75e1690fa26e69c9c4cfac39f3f5fdc24b056047"
	},
	{
		"id": "6ca096defc67",
		"ts": "2026-07-19T19:02:57.018Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 166701.9,
		"hash": "6ca096defc674de203622db72aba51e6a0d67f0630989c233e717c4669492397"
	},
	{
		"id": "eb684f9fa57d",
		"ts": "2026-07-19T19:02:57.263Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity"
		],
		"liquidityUsd": 49276.18,
		"hash": "eb684f9fa57df29beb1fe0934af53af6328a2fbb7d83c773bfbc187dbe10afc4"
	},
	{
		"id": "a6b053838711",
		"ts": "2026-07-19T19:02:57.482Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1843053.68,
		"hash": "a6b0538387114db791582e06c2def1f97f9f26698e56a5aabcc077c73446a1b4"
	},
	{
		"id": "978b0a946db7",
		"ts": "2026-07-19T19:02:57.702Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1281334.4,
		"hash": "978b0a946db7336ef0537f45592d9d98530feb1681e243961e036425f98728fe"
	},
	{
		"id": "cd56909ad1d1",
		"ts": "2026-07-19T19:02:57.920Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 196030.88,
		"hash": "cd56909ad1d1fec6a6ec53eb6323f5694de2f58e18c98b9da1d38cadf126cc1e"
	},
	{
		"id": "99152f3f3a5b",
		"ts": "2026-07-19T19:02:58.145Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 429741.5,
		"hash": "99152f3f3a5b2b2e84661ab38e5193269c45f16d58d753787a035b66a5ecf4b4"
	},
	{
		"id": "33c9494a8ebd",
		"ts": "2026-07-19T19:02:58.363Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 618616.82,
		"hash": "33c9494a8ebd8658dd8d02c8f811105a26b4709344362f51b9c76eaa31370ea3"
	},
	{
		"id": "31ab6709596a",
		"ts": "2026-07-19T19:02:58.578Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2141939.98,
		"hash": "31ab6709596ae21085fcf578e276fdf8c56a1602c9045cf0dcfe7bfc8c92a8ed"
	},
	{
		"id": "327d7f6bc770",
		"ts": "2026-07-19T17:55:56.095Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107916823.35,
		"hash": "327d7f6bc7704c247364a2fa4a8885f2db23d965ba95a1e55b0e1c3da338159d"
	},
	{
		"id": "49ef76f7ed61",
		"ts": "2026-07-19T17:55:56.343Z",
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
		"liquidityUsd": 15118895.22,
		"hash": "49ef76f7ed61eac92e8c27c7b7a08308073fb8c10f1f30b06f59c54ee5ab5986"
	},
	{
		"id": "19a92dac1104",
		"ts": "2026-07-19T17:55:56.584Z",
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
		"liquidityUsd": 872092.42,
		"hash": "19a92dac1104257f645ef4a2d9d4923ebebd0efd312d3d40ab7794430191e693"
	},
	{
		"id": "4baa37d4dbf6",
		"ts": "2026-07-19T17:55:56.828Z",
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
		"liquidityUsd": 25446869.87,
		"hash": "4baa37d4dbf613d947bcef06b470b65d3502fb8ba92e1b56c7f0386ffaa9df75"
	},
	{
		"id": "d6fa2aff8f88",
		"ts": "2026-07-19T17:55:57.073Z",
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
		"liquidityUsd": 5023096.69,
		"hash": "d6fa2aff8f8890e7e7686230b2c2d0375cbea08fb37d7bbb5dd5039c3eef98f7"
	},
	{
		"id": "1860e216c586",
		"ts": "2026-07-19T17:55:57.312Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 993965.57,
		"hash": "1860e216c5867dd57aa80ece8b6f77d2bfa79121a0c13be642151a26e0c4fde8"
	},
	{
		"id": "e0a3d5249739",
		"ts": "2026-07-19T17:55:57.554Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25446869.87,
		"hash": "e0a3d524973962b1113aa8bf13c9a34aef1b6fd553ea23a93d5142b2a5bf345c"
	},
	{
		"id": "6e7f40860053",
		"ts": "2026-07-19T17:55:57.801Z",
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
		"liquidityUsd": 2957637.9,
		"hash": "6e7f408600534f4055e8d22ab4e23c691fd14d9bdfa5d3f7578fe35beee68d33"
	},
	{
		"id": "63baf36de2f0",
		"ts": "2026-07-19T17:55:58.059Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 160634.14,
		"hash": "63baf36de2f0cfdc067a87320c33d0eb8cda9e4c605ba5858efdf857d204c9d2"
	},
	{
		"id": "b936d50bf31e",
		"ts": "2026-07-19T17:55:58.301Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 54542.48,
		"hash": "b936d50bf31edcbdc715f669cdeb5228f5bfb2e7cc01f75193b89d093eadfd0d"
	},
	{
		"id": "2a265b3e6389",
		"ts": "2026-07-19T17:55:58.524Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1845963.29,
		"hash": "2a265b3e6389fb1c9089024c1b15e31e713b6b7450a804a4a8bb7a6a46654782"
	},
	{
		"id": "7079fce71fd9",
		"ts": "2026-07-19T17:55:58.750Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1304862.48,
		"hash": "7079fce71fd9961f2f49e97889f1a32d9a2eb4726aee4dd4da22459e815518d2"
	},
	{
		"id": "795988023c88",
		"ts": "2026-07-19T17:55:58.976Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 431307.7,
		"hash": "795988023c88e99e18488f37e08846d2d1118cde274dc66468c3d23fcbe3d32d"
	},
	{
		"id": "f8032b0c95f3",
		"ts": "2026-07-19T17:55:59.199Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 197038.13,
		"hash": "f8032b0c95f3ccaa668b6435e7ed98c3d6553593c5fc61e6533f4b90d22055a0"
	},
	{
		"id": "38bd4ca66828",
		"ts": "2026-07-19T17:55:59.424Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 529697.12,
		"hash": "38bd4ca6682833f235cc034ec3856a1a90bbd3982a6c497a5100c139e803d056"
	},
	{
		"id": "141a88dc0b3e",
		"ts": "2026-07-19T17:55:59.654Z",
		"symbol": "HANDL",
		"token": "0x3BBCb624CB9A1f73163A886F460f47603E5E4425",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 66043.75,
		"hash": "141a88dc0b3e3273b26fb96b81f773d23b843c09d77255185b15ce53a87684ac"
	},
	{
		"id": "bd5404b6953a",
		"ts": "2026-07-19T16:54:27.935Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107970165.72,
		"hash": "bd5404b6953abe747570c997bfecd905a84daed23c0af5e9ddeb0e2a4cc91847"
	},
	{
		"id": "3d4403f99813",
		"ts": "2026-07-19T16:54:28.347Z",
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
		"liquidityUsd": 15100831.03,
		"hash": "3d4403f99813687b7d163cd8e6b580ecb1275b8d1793caa3f614ab8cd024eaa9"
	},
	{
		"id": "8714d56d9969",
		"ts": "2026-07-19T16:54:28.740Z",
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
		"liquidityUsd": 871104.79,
		"hash": "8714d56d99691cde37496a400cb0321046b05bd79027615d5e216c35b32378f5"
	},
	{
		"id": "bc5a5a24b8f7",
		"ts": "2026-07-19T16:54:28.967Z",
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
		"liquidityUsd": 25392217.09,
		"hash": "bc5a5a24b8f7c4d52ac8a05ba0a930214e3d2a5c333dc280bea83de55e02f94e"
	},
	{
		"id": "c9e1d0de8512",
		"ts": "2026-07-19T16:54:29.187Z",
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
		"liquidityUsd": 5030697.4,
		"hash": "c9e1d0de8512ac8027c97cb4a3e6844a6b56cb340a91c0d279d64eada02d11f9"
	},
	{
		"id": "11bbf77cbb92",
		"ts": "2026-07-19T16:54:29.402Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 994298.22,
		"hash": "11bbf77cbb928a9543ce43e59b2bbe422cdfbf6e1d0783bebc697242ac4ddb73"
	},
	{
		"id": "a7fc5ecedc79",
		"ts": "2026-07-19T16:54:29.612Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25392217.09,
		"hash": "a7fc5ecedc79315b8aa1c846ecc75dea4a842091de968de23c85bc82fbc567ae"
	},
	{
		"id": "1078cc42335d",
		"ts": "2026-07-19T16:54:29.844Z",
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
		"liquidityUsd": 2954562.58,
		"hash": "1078cc42335d3f448515bf5902317a71447682b927bb4968ed3dfebf3a83401d"
	},
	{
		"id": "63aed4beee9e",
		"ts": "2026-07-19T16:54:30.062Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 167257.61,
		"hash": "63aed4beee9ef2ac9ae47b35bef7358688376dedfc8676f88487c97dc0a78711"
	},
	{
		"id": "16af843e25b3",
		"ts": "2026-07-19T16:54:30.276Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 53213.05,
		"hash": "16af843e25b32ded9275d9d3cfcd7d5a94032f6c62ccf5e37e090d30021ca1ee"
	},
	{
		"id": "b159e77dbfd5",
		"ts": "2026-07-19T16:54:30.471Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1848602.9,
		"hash": "b159e77dbfd577dc7c9a8eaa65f291f41bd5e4a7eeccba70c755924a0abd6351"
	},
	{
		"id": "b5ee97411941",
		"ts": "2026-07-19T16:54:30.664Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1309783.27,
		"hash": "b5ee974119418d2e313758e52ec623820e7fcf8bd05443e469e3da9245ba5d96"
	},
	{
		"id": "2ce9a320f826",
		"ts": "2026-07-19T16:54:30.858Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 437235.49,
		"hash": "2ce9a320f8263ca3df48ed4573564da0a74bd4b02401ef2061b9f0c4ee2983da"
	},
	{
		"id": "3d4579dc9f1a",
		"ts": "2026-07-19T16:54:31.055Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 196821.13,
		"hash": "3d4579dc9f1ad35b967471cfd229a59d729eb13d403fe1d5a96cfe4f4e7e41b4"
	},
	{
		"id": "38a33968f701",
		"ts": "2026-07-19T16:54:31.249Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 529264.89,
		"hash": "38a33968f701de19177adaa73f6978fd8d8118f0bd6e79774afeb54b5c8e4eda"
	},
	{
		"id": "057190b264c5",
		"ts": "2026-07-19T16:54:31.446Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2131988.89,
		"hash": "057190b264c5e77943779a588e8a6ca62d74f41a4f7d71599aa54f9525914344"
	},
	{
		"id": "292e753e57c4",
		"ts": "2026-07-19T15:54:22.562Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107974645.57,
		"hash": "292e753e57c41286dcee9ca10a085687570225aa249e207840134d4a5c5d8f6a"
	},
	{
		"id": "5cb5b9131fe2",
		"ts": "2026-07-19T15:54:23.047Z",
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
		"liquidityUsd": 16138747.07,
		"hash": "5cb5b9131fe2e8513be91fda259d4c490f9e74ae3757b6f7cbc44c77a8a537d5"
	},
	{
		"id": "cc93332e24f4",
		"ts": "2026-07-19T15:54:23.324Z",
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
		"liquidityUsd": 847561.19,
		"hash": "cc93332e24f40e4024dc6577545274ed27958fca6738e872468b81595a3fa9e6"
	},
	{
		"id": "4882eeee68aa",
		"ts": "2026-07-19T15:54:23.616Z",
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
		"liquidityUsd": 25466436.32,
		"hash": "4882eeee68aaee46c55980b65eff80cc8ea353488d096f8a0c8aa39f0b42723d"
	},
	{
		"id": "4cab6a779414",
		"ts": "2026-07-19T15:54:23.874Z",
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
		"liquidityUsd": 5039331.43,
		"hash": "4cab6a779414d3db684bc8869053c26fdbafdc4a86734ee93da119699701e7d4"
	},
	{
		"id": "63fee9c03c14",
		"ts": "2026-07-19T15:54:24.135Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 999197.41,
		"hash": "63fee9c03c14eec2d6d96646a9da2deaf504b58d9c13f960152801828da65698"
	},
	{
		"id": "687255f143ea",
		"ts": "2026-07-19T15:54:24.384Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25466436.32,
		"hash": "687255f143eac03389c8241324b0089eece70706b5caf2558abbcb34dbf459f7"
	},
	{
		"id": "9795a2ee9274",
		"ts": "2026-07-19T15:54:24.650Z",
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
		"liquidityUsd": 2959557.5,
		"hash": "9795a2ee92746ca2bb9756aa7bbd87c2d184fbcb2fab3fbe0f527554c3fa8565"
	},
	{
		"id": "b1461d24097d",
		"ts": "2026-07-19T15:54:24.935Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 167304.95,
		"hash": "b1461d24097d0b2b4a32f4b5a48266a9580a742530f7a54d5648d244576ef445"
	},
	{
		"id": "6e9480b12347",
		"ts": "2026-07-19T15:54:25.217Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 57425.02,
		"hash": "6e9480b12347916b2a52f23ff3c1684ba5ad1803f4f7f295d9f87455a43ef346"
	},
	{
		"id": "87a0372f33c3",
		"ts": "2026-07-19T15:54:25.451Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1870974.65,
		"hash": "87a0372f33c3769687ea5ae5ec539fdf12e641c4063941c32a692a2c11de3132"
	},
	{
		"id": "e4a1a01b8025",
		"ts": "2026-07-19T15:54:25.697Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 439189.02,
		"hash": "e4a1a01b80256c67e9d659d4e9b46841e61410c53ada065fea8c1244cf4fa9f0"
	},
	{
		"id": "cd7b06a961fe",
		"ts": "2026-07-19T15:54:25.929Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1307775.22,
		"hash": "cd7b06a961fef2c97515415d6eb16d7bb563e5453570594a7eb827bd12b2478a"
	},
	{
		"id": "0c4beb31fa74",
		"ts": "2026-07-19T15:54:26.178Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 194421,
		"hash": "0c4beb31fa74c063b509c13df77bcb1e11bf9b59a2c0f841d61238f5a792ecb1"
	},
	{
		"id": "26495d6dd54d",
		"ts": "2026-07-19T15:54:26.410Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 133166.55,
		"hash": "26495d6dd54dc353185cde06ba00145971798588add4e993f1c72968c31cd077"
	},
	{
		"id": "cefea0188bf0",
		"ts": "2026-07-19T15:54:26.641Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 531050.61,
		"hash": "cefea0188bf0a281ec0756f13554154051fcd3e7a51a294a79e2ce1240af92c1"
	},
	{
		"id": "84a87d536e45",
		"ts": "2026-07-19T15:54:26.888Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 616598.36,
		"hash": "84a87d536e458984ca434741fcfbf17ce875f6ede5a4905ecb5d7e64b7f181bd"
	},
	{
		"id": "b41e31bc12be",
		"ts": "2026-07-19T14:51:53.444Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107996284.21,
		"hash": "b41e31bc12bebc1b709ffd9de88fb893963bba2f562ed54be086eb0df98b949c"
	},
	{
		"id": "946286c05063",
		"ts": "2026-07-19T14:51:53.703Z",
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
		"liquidityUsd": 16333396.23,
		"hash": "946286c0506379d4685e85b0715eb77e2bc8eef5a8cb5a2c77a0f6da1939e8d5"
	},
	{
		"id": "afa839c5729e",
		"ts": "2026-07-19T14:51:53.944Z",
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
		"liquidityUsd": 855792.98,
		"hash": "afa839c5729e3f2872e306fc3c2d24b31f80bf9aa9f8ba5ac7e1a9ec26867284"
	},
	{
		"id": "f942de65c816",
		"ts": "2026-07-19T14:51:54.186Z",
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
		"liquidityUsd": 25483011.5,
		"hash": "f942de65c816e3975fa593efd6540c851c10984cadd36e8f1f188959815a6c06"
	},
	{
		"id": "2aad9835db4e",
		"ts": "2026-07-19T14:51:54.424Z",
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
		"liquidityUsd": 5045568.04,
		"hash": "2aad9835db4e1a8333b6a968174b06be025eea90e79317c2a05d3bd9bd20de83"
	},
	{
		"id": "73b1721cefd8",
		"ts": "2026-07-19T14:51:54.658Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 999190.7,
		"hash": "73b1721cefd8bb62e88ec4e4d504a99b86f159f15cfa70b90c47393dbf71bde5"
	},
	{
		"id": "57a31179ec68",
		"ts": "2026-07-19T14:51:54.895Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25483011.5,
		"hash": "57a31179ec68afdaa6d460d6081227ee98e00053c1db4a0a552ee9ef918c4956"
	},
	{
		"id": "bcd4d9a6fe0a",
		"ts": "2026-07-19T14:51:55.132Z",
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
		"liquidityUsd": 2969441.38,
		"hash": "bcd4d9a6fe0a54ca96c0acf737b4894d3098e77cce82bdc05401fb0dd53e1212"
	},
	{
		"id": "712c695ab11b",
		"ts": "2026-07-19T14:51:55.395Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 151914.32,
		"hash": "712c695ab11b3256e0e8d14e841a293f3d372ff60d06c984b1b8807bbc07447a"
	},
	{
		"id": "3fff15b2e69d",
		"ts": "2026-07-19T14:51:55.638Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 55302.89,
		"hash": "3fff15b2e69d183aef4e9b167dd72d64d4bcd523f1da47714d0599962aa0c432"
	},
	{
		"id": "7db0aca08907",
		"ts": "2026-07-19T14:51:55.863Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1871952.63,
		"hash": "7db0aca089077cf49b209478e705b196474499b68ad8711a88efdc15ddb8fbaa"
	},
	{
		"id": "f606cc206270",
		"ts": "2026-07-19T14:51:56.086Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 438127.3,
		"hash": "f606cc206270543e06d3c3c47e87e3218dc10e3f03427d37a4351ec67bf3d786"
	},
	{
		"id": "7ba2c4b3694c",
		"ts": "2026-07-19T14:51:56.314Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 199112.06,
		"hash": "7ba2c4b3694c80108d95a40185a3bb8021c4981272962b88652d7f78d73bb2d7"
	},
	{
		"id": "f0e675796a17",
		"ts": "2026-07-19T14:51:56.537Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1311934.4,
		"hash": "f0e675796a177d9ab763042e7cb84a62105b506659dca1b51aaeb16be18089ff"
	},
	{
		"id": "7b77479397cc",
		"ts": "2026-07-19T14:51:56.760Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 533686.95,
		"hash": "7b77479397cc5b87f96245c43c5de7db51f51d2ca9c7482d9abad393e6639292"
	},
	{
		"id": "2a3cddc06fe3",
		"ts": "2026-07-19T14:51:56.987Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 119737.28,
		"hash": "2a3cddc06fe3ce0282e593e218262a51f20903b9efafd16acdc227c9e6bc083b"
	},
	{
		"id": "e57ffbc0899a",
		"ts": "2026-07-19T13:09:31.657Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107909073.72,
		"hash": "e57ffbc0899a18072d9a85d54861dbe7f1d8954213034605f3f4ad04e773bb5c"
	},
	{
		"id": "249dcbe1371b",
		"ts": "2026-07-19T13:09:32.117Z",
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
		"liquidityUsd": 15229766.11,
		"hash": "249dcbe1371b71bc296c8b87a7b9cc64915e9b401426c8852332c01b0311322b"
	},
	{
		"id": "5ca67a722585",
		"ts": "2026-07-19T13:09:32.374Z",
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
		"liquidityUsd": 870413.29,
		"hash": "5ca67a72258522a5463bb5d84d22a13a85b584837aba9fedf0b8bce4d013fe88"
	},
	{
		"id": "9c99d1532764",
		"ts": "2026-07-19T13:09:32.617Z",
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
		"liquidityUsd": 25414267.69,
		"hash": "9c99d1532764a1afe83dabc1926f836aeff61fec805b7bf008860937b67b5907"
	},
	{
		"id": "0d548f72fd5b",
		"ts": "2026-07-19T13:09:32.860Z",
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
		"liquidityUsd": 5049852.96,
		"hash": "0d548f72fd5b77ad2b313e3fe541ebef5126297179b2973a1fdb72e85fa6234b"
	},
	{
		"id": "b40868957c0f",
		"ts": "2026-07-19T13:09:33.114Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 997396.04,
		"hash": "b40868957c0fa79b84ffc2e0d88e7c5c6cda7661bdf8aed64605288fe09acfda"
	},
	{
		"id": "80c690a7dcea",
		"ts": "2026-07-19T13:09:33.358Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25414267.69,
		"hash": "80c690a7dcea898619a1f231d393c61d118b69b038bdf5b5d7435179401f045f"
	},
	{
		"id": "bd8a95dc8f4a",
		"ts": "2026-07-19T13:09:33.620Z",
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
		"liquidityUsd": 2972633.43,
		"hash": "bd8a95dc8f4afd32078e3705ec1d8be2ec349b9df36054eaf9c2740e8ce24de7"
	},
	{
		"id": "6ee9a38e6c55",
		"ts": "2026-07-19T13:09:33.885Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 174292.86,
		"hash": "6ee9a38e6c55c892e03794a0dd28c4c207f13d460e89dd47525235c1253e84c6"
	},
	{
		"id": "c68b5fb69207",
		"ts": "2026-07-19T13:09:34.128Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 59389.44,
		"hash": "c68b5fb69207776fcf15d49117139467ef2c2514503e1bdc8bfcfeb20d59f4d2"
	},
	{
		"id": "99a69c5d7b3f",
		"ts": "2026-07-19T13:09:34.359Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1328166.07,
		"hash": "99a69c5d7b3f94bc72a1607e19691c26b3584f42a34ba5323fb944b67594fefb"
	},
	{
		"id": "d46a3eb66635",
		"ts": "2026-07-19T13:09:34.582Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1866887.26,
		"hash": "d46a3eb66635c0367a7e34178204af66de4b5facf35cc2fd1d1d3e4369561418"
	},
	{
		"id": "19739d429c76",
		"ts": "2026-07-19T13:09:34.809Z",
		"symbol": "TOSHI",
		"token": "0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 60843767.65,
		"hash": "19739d429c76a00976dd2a85ba15edbd514e78deace42cc4e197834412ffa4c4"
	},
	{
		"id": "5354bf71f6a6",
		"ts": "2026-07-19T13:09:35.036Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 443686.73,
		"hash": "5354bf71f6a65bceaa92e5ff9ee68698deafad4d016b1c11900382f2fedcc41f"
	},
	{
		"id": "d7910c4d3063",
		"ts": "2026-07-19T13:09:35.262Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 617022.28,
		"hash": "d7910c4d3063b75a38c80523a787105190d6718cd28db64202fa44d1327a5308"
	},
	{
		"id": "70e03cccc267",
		"ts": "2026-07-19T13:09:35.485Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 529203.93,
		"hash": "70e03cccc267c5106036ade7d24a17f1a24089a7de6438eae315f3da4fc8d319"
	},
	{
		"id": "70fc7875739b",
		"ts": "2026-07-19T11:54:20.697Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 108036385.53,
		"hash": "70fc7875739ba318b66b07f3fdfab2441c23c47d3b83b8d18b97d61c1aa82a50"
	},
	{
		"id": "7eb75ca48368",
		"ts": "2026-07-19T11:54:21.045Z",
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
		"liquidityUsd": 16096138.87,
		"hash": "7eb75ca48368fb06c99be1e83d06bfb82db0eb9329660550765cbd81927a242f"
	},
	{
		"id": "555064e33f42",
		"ts": "2026-07-19T11:54:21.242Z",
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
		"liquidityUsd": 878609.93,
		"hash": "555064e33f42d075ddfb1652c08f5ff5e7567658cc4459af40347410aedd95f5"
	},
	{
		"id": "15926db9dc14",
		"ts": "2026-07-19T11:54:21.445Z",
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
		"liquidityUsd": 25404854.99,
		"hash": "15926db9dc1426df09af9100fcccaba022443272e97f87842911c05dee566c35"
	},
	{
		"id": "4e4eb1841807",
		"ts": "2026-07-19T11:54:21.645Z",
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
		"liquidityUsd": 5060234.62,
		"hash": "4e4eb1841807e9990aa0498f071ec9e4ccb6dee10197fe2bda5924b9ab941bc9"
	},
	{
		"id": "25c3500b5844",
		"ts": "2026-07-19T11:54:21.832Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 999277.78,
		"hash": "25c3500b5844b329c619a90ee57c0e84d5079cd1801947234ab47db7edcb22cf"
	},
	{
		"id": "094ae56ddb94",
		"ts": "2026-07-19T11:54:22.039Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25404854.99,
		"hash": "094ae56ddb943cd99396c8c0cd3506ab1f9d59d62dbdbbaf4e9ceca7c629a9c9"
	},
	{
		"id": "7df1cb3c935c",
		"ts": "2026-07-19T11:54:22.230Z",
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
		"liquidityUsd": 2979886.25,
		"hash": "7df1cb3c935c9a75a3e39856dbd477d43310af748178df87c342ef6d87768f4b"
	},
	{
		"id": "5f7c5194c3f3",
		"ts": "2026-07-19T11:54:22.423Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 179867.44,
		"hash": "5f7c5194c3f3c419e47031816ea5954258ff7019bce443bc3c583a7d5294209f"
	},
	{
		"id": "911b82c01472",
		"ts": "2026-07-19T11:54:22.610Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 52479.24,
		"hash": "911b82c01472a448f600980cb83e011adc615108ebabb89b5ee48c9846a0e077"
	},
	{
		"id": "01cd98ac48b2",
		"ts": "2026-07-19T11:54:22.802Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1310938.56,
		"hash": "01cd98ac48b2b072d1d03ab5ce7b9069218d81ade1dd649ae0c12c21304473e7"
	},
	{
		"id": "cd9b4e88e2dd",
		"ts": "2026-07-19T11:54:22.986Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 430475.7,
		"hash": "cd9b4e88e2dd9ca5d36807415b592145ad5f005761f6f46e9970b5e672a0112b"
	},
	{
		"id": "a42cb2f3bf31",
		"ts": "2026-07-19T11:54:23.179Z",
		"symbol": "TOSHI",
		"token": "0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 963869.43,
		"hash": "a42cb2f3bf31c58abe7c61abf6b06cb9854f3bf4f018c8ce2302fb2b9fdbbd09"
	},
	{
		"id": "508bbe59acf5",
		"ts": "2026-07-19T11:54:23.354Z",
		"symbol": "OpenAI",
		"token": "0x5399592239C030Da026b58E4A0a45918895c6b07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55616.08,
		"hash": "508bbe59acf53d7d59bd453098c15cd37b979881ad9e6e3f3e32c9699563c47d"
	},
	{
		"id": "cd50ee7ca487",
		"ts": "2026-07-19T11:54:23.546Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 631415.25,
		"hash": "cd50ee7ca4870fb4966b63407e8726d0e6fec6b4933ab75ddde877c2892cb621"
	},
	{
		"id": "e55240b392a8",
		"ts": "2026-07-19T11:54:23.737Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1874888.61,
		"hash": "e55240b392a829a311f70311c6ddbad2cb528fe6413c619c07b54a910b6a243f"
	},
	{
		"id": "52f9333ebf9d",
		"ts": "2026-07-19T11:54:23.944Z",
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
		"liquidityUsd": 1279894.14,
		"hash": "52f9333ebf9dfa424c1b7a304aa8a396d414a0b63063f43a40f378e467d383c0"
	},
	{
		"id": "73f6d04d4ab0",
		"ts": "2026-07-19T10:24:20.913Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107901676.71,
		"hash": "73f6d04d4ab08418fb18bf6bcaff15665d8b64571b61860084641af7dc5e007f"
	},
	{
		"id": "492be3a8d8ae",
		"ts": "2026-07-19T10:24:21.409Z",
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
		"liquidityUsd": 15088048.76,
		"hash": "492be3a8d8aeccc1c736615c28dee4a737b237463c50a27fc702798ad9a31bbe"
	},
	{
		"id": "f864199d12c5",
		"ts": "2026-07-19T10:24:21.675Z",
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
		"liquidityUsd": 871148.05,
		"hash": "f864199d12c5dcd82ed7b9f25cf81b819776290be364274faa3fbb41088fda60"
	},
	{
		"id": "2981b7d72857",
		"ts": "2026-07-19T10:24:21.931Z",
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
		"liquidityUsd": 24874421.15,
		"hash": "2981b7d728577b163f0cdd08c475c1bcae19130be50398711e22da35c618aa59"
	},
	{
		"id": "b1725677fb54",
		"ts": "2026-07-19T10:24:22.191Z",
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
		"liquidityUsd": 5043746.21,
		"hash": "b1725677fb5416e267b2d5bf46508e4d6caed1afd94cfdf13ff46983b38afc59"
	},
	{
		"id": "d48713aaa775",
		"ts": "2026-07-19T10:24:22.470Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 996525.45,
		"hash": "d48713aaa77583dee490cd20e3cbbb60c4f227be24d323281c6ea748927bb130"
	},
	{
		"id": "4c3acf8c8f7e",
		"ts": "2026-07-19T10:24:22.733Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24874421.15,
		"hash": "4c3acf8c8f7e81eacfff17204bd31498b4e9fb219a92149e5806ac7592ded256"
	},
	{
		"id": "fd1c30730c5e",
		"ts": "2026-07-19T10:24:22.993Z",
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
		"liquidityUsd": 2969337.09,
		"hash": "fd1c30730c5e41f62f1df8f4a5ff7dc33fd80d46566c304998edcfaf1dc5d7c9"
	},
	{
		"id": "2a96dac9043e",
		"ts": "2026-07-19T10:24:23.250Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 173513.66,
		"hash": "2a96dac9043e25a50dbe5cc17ed5f2c5d733d8ab28ddc27420e088ea59cf346c"
	},
	{
		"id": "1906a2078e1f",
		"ts": "2026-07-19T10:24:23.502Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 54954.78,
		"hash": "1906a2078e1f7e759397edfe58fba86f94bd71f95c969503948530027a7cb965"
	},
	{
		"id": "f8f1b06be0fd",
		"ts": "2026-07-19T10:24:23.744Z",
		"symbol": "OpenAI",
		"token": "0x5399592239C030Da026b58E4A0a45918895c6b07",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 59529.52,
		"hash": "f8f1b06be0fd864b717e8c86223c66ceca5ee64c7c2d8e10b772ac99669a815e"
	},
	{
		"id": "e6324221f74c",
		"ts": "2026-07-19T10:24:23.986Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1307840.73,
		"hash": "e6324221f74c1918c63af2e4aad6c9d24c9f09250e14eb04522ca91e9d2acbe0"
	},
	{
		"id": "bad5e6c022ec",
		"ts": "2026-07-19T10:24:24.227Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 433401.13,
		"hash": "bad5e6c022ecaf26f49ec76bbeae6f9228c2b649216ab93ea8bef89029c7bd04"
	},
	{
		"id": "2c728713a035",
		"ts": "2026-07-19T10:24:24.468Z",
		"symbol": "TOSHI",
		"token": "0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 967901.24,
		"hash": "2c728713a03566520562e0a1ea22e5a4b6c42eb5a5158627aee5089df04e25be"
	},
	{
		"id": "2ab8db60c95e",
		"ts": "2026-07-19T10:24:24.709Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1866462.96,
		"hash": "2ab8db60c95e3ef341bee1ccbbdd7937500353604d353caf2cf82518cd0f713e"
	},
	{
		"id": "5731155b1fdc",
		"ts": "2026-07-19T10:24:24.950Z",
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
		"liquidityUsd": 1269965.58,
		"hash": "5731155b1fdc1ec1cf2734bd903b2efe5e37aa716eba7784eef23c555fd3a541"
	},
	{
		"id": "026aa4eb7796",
		"ts": "2026-07-19T10:24:25.190Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 124509.2,
		"hash": "026aa4eb7796c9e31b95a85409ef1ef2145a47e223fc5e427721d4f64d77ded8"
	},
	{
		"id": "bf92bc2b5095",
		"ts": "2026-07-19T08:10:14.809Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107972535.51,
		"hash": "bf92bc2b5095e65dd0133df352b2c4cdc8dd57de93f9aad33889a78dcbbfe7f8"
	},
	{
		"id": "8f5c16144ed4",
		"ts": "2026-07-19T08:10:15.049Z",
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
		"liquidityUsd": 15316536.85,
		"hash": "8f5c16144ed4345fca662c78860f340f7eb26e42f568e1cce2f22c71edd274cd"
	},
	{
		"id": "a72ded7379bc",
		"ts": "2026-07-19T08:10:15.291Z",
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
		"liquidityUsd": 921439.02,
		"hash": "a72ded7379bc7204cf01911339a093e3c5039e6e1f5dfe93774658bd4ce7adbe"
	}
]
