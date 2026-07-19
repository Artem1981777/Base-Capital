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
	"updatedAt": "2026-07-19T16:54:31.447Z",
	"tokensScored": 4399,
	"verdictsIssued": 4399,
	"safe": 3881,
	"risky": 351,
	"likelyRug": 167,
	"ticks": 269
}

export const verdicts: AgentVerdict[] = [
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
	},
	{
		"id": "16e375417e48",
		"ts": "2026-07-19T08:10:15.734Z",
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
		"liquidityUsd": 24930615.8,
		"hash": "16e375417e48f0343b7287ba164931740655d363a45361d87e1370c796752813"
	},
	{
		"id": "79d7a4ab2c02",
		"ts": "2026-07-19T08:10:15.970Z",
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
		"liquidityUsd": 5054717.66,
		"hash": "79d7a4ab2c02e79edfcbaf44482988205d35b3e3a34a9e39535ae7483b25f60c"
	},
	{
		"id": "969bce89b757",
		"ts": "2026-07-19T08:10:16.207Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1004482.2,
		"hash": "969bce89b75752b730418e97b47637ebf065d7fc43f5e657d4a58aa4ae487b97"
	},
	{
		"id": "c3ac1bb7994f",
		"ts": "2026-07-19T08:10:16.483Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24930615.8,
		"hash": "c3ac1bb7994f00ed9a9406040bce66d76881078ec3890797156b8cc1f20ff521"
	},
	{
		"id": "c1214d3ed54d",
		"ts": "2026-07-19T08:10:16.717Z",
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
		"liquidityUsd": 2975460.26,
		"hash": "c1214d3ed54d4a847c1d835cf6e32c312835d6fccb8b95d12b0486fd271f0c2e"
	},
	{
		"id": "59164843c49a",
		"ts": "2026-07-19T08:10:16.955Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 181240.95,
		"hash": "59164843c49a1417b3023d70604cf021d7d403bb0f72c44bda9c89adb8883f67"
	},
	{
		"id": "1eddd657141d",
		"ts": "2026-07-19T08:10:17.187Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 51042.69,
		"hash": "1eddd657141d2d0e57ab2dedcdd2e4b639d467b4728e0220bac63ece330b7881"
	},
	{
		"id": "b36f11d4c8dc",
		"ts": "2026-07-19T08:10:17.410Z",
		"symbol": "OpenAI",
		"token": "0x5399592239C030Da026b58E4A0a45918895c6b07",
		"score": 65,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.3,
		"flags": [
			"medium_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 19964.6,
		"hash": "b36f11d4c8dcbcbf54aac833698d33f351c3727b5ced7e695f02a9828f73f999"
	},
	{
		"id": "b6ca46c71cf7",
		"ts": "2026-07-19T08:10:17.627Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1308011.46,
		"hash": "b6ca46c71cf7c2e0f13e480f31c286d20bd2bca765b026e01c92bbe7fc9e3351"
	},
	{
		"id": "7d82dfad56be",
		"ts": "2026-07-19T08:10:17.846Z",
		"symbol": "TOSHI",
		"token": "0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 972061.74,
		"hash": "7d82dfad56be813c179941edcce19a6738b5d69015fb51fae3092bb3fc1b6a7e"
	},
	{
		"id": "8f7de202f0d6",
		"ts": "2026-07-19T08:10:18.067Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 437163.85,
		"hash": "8f7de202f0d6c70aef5e689caad221b1d66038fa90a0d8669233d381cb30e16a"
	},
	{
		"id": "8760838152f5",
		"ts": "2026-07-19T08:10:18.284Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1868865.78,
		"hash": "8760838152f5c8adb277bfb81c307bc06d49c90818e8c6819c8456f52b372100"
	},
	{
		"id": "114d7ec37c65",
		"ts": "2026-07-19T08:10:18.708Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 139111.37,
		"hash": "114d7ec37c65a626aee8d003bafc31062c22f4f6e6ea08b96d4570b6e293c70e"
	},
	{
		"id": "a7d1012f6ff2",
		"ts": "2026-07-19T08:10:18.922Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9368810.34,
		"hash": "a7d1012f6ff25382838012914c9225fd7823550b21e73d4bba2ba681548e0e5a"
	},
	{
		"id": "319a45b3dd2a",
		"ts": "2026-07-19T05:48:25.600Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107875736.2,
		"hash": "319a45b3dd2abb22ec7201d5b004cbbffdd55d87bc8fa2ae93748d8742aad7b0"
	},
	{
		"id": "8223a4aefc3e",
		"ts": "2026-07-19T05:48:26.035Z",
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
		"liquidityUsd": 15168064.98,
		"hash": "8223a4aefc3edb5abca3c69b00dbe7580319e2488827f78d60bdea2ba2ce7cfb"
	},
	{
		"id": "6206a3c2345a",
		"ts": "2026-07-19T05:48:26.289Z",
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
		"liquidityUsd": 906528.21,
		"hash": "6206a3c2345ac7442b3d3a1872b5a2f99d78a1174ef0154875856a33433b7a88"
	},
	{
		"id": "aabf8648528b",
		"ts": "2026-07-19T05:48:26.522Z",
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
		"liquidityUsd": 25088444.08,
		"hash": "aabf8648528be39f28a937ce913cd92f5ae9073f069e803b0cac9095d31e1cc1"
	},
	{
		"id": "73bcb1b08247",
		"ts": "2026-07-19T05:48:26.773Z",
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
		"liquidityUsd": 5056258.71,
		"hash": "73bcb1b0824706954b82934140fde2df8a72f9c515c2b6bc88938db129a7b9d3"
	},
	{
		"id": "a6b985cd4822",
		"ts": "2026-07-19T05:48:27.007Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1004077.82,
		"hash": "a6b985cd4822d159e35295212261adc78122834056231033f21f4fd8aaeb9961"
	},
	{
		"id": "07e483f52809",
		"ts": "2026-07-19T05:48:27.238Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25088444.08,
		"hash": "07e483f5280992176cbb2e354b7be7b4a73d6aa8a8016723ecc56be8b498e406"
	},
	{
		"id": "fb8f590a4f94",
		"ts": "2026-07-19T05:48:27.489Z",
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
		"liquidityUsd": 2971445.72,
		"hash": "fb8f590a4f948bccc6bf52537de2d60194425721968ed2b7f7637a6835dfceea"
	},
	{
		"id": "f62a63fcba21",
		"ts": "2026-07-19T05:48:27.727Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 175382.43,
		"hash": "f62a63fcba21590f471737c19c46f775961946549fbe20356db6e6b9febf8666"
	},
	{
		"id": "be242bb9cf4f",
		"ts": "2026-07-19T05:48:27.961Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 51298.58,
		"hash": "be242bb9cf4f10a14d8c295a159b16bc0c2fc0d3642cfabb706ad3dd2e24b6ba"
	},
	{
		"id": "7568b84572a6",
		"ts": "2026-07-19T05:48:28.195Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9299888.76,
		"hash": "7568b84572a6e82db4d389f27c34619847721972c2c97df2e3806ad586ee97e6"
	},
	{
		"id": "13f5c470b7bc",
		"ts": "2026-07-19T05:48:28.411Z",
		"symbol": "TOSHI",
		"token": "0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 969238.38,
		"hash": "13f5c470b7bc633d8bae58854c1fb899dce66e79f1d9d80005025782475bfd85"
	},
	{
		"id": "1774002839d3",
		"ts": "2026-07-19T05:48:28.626Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1287840.83,
		"hash": "1774002839d3213c52a7661077deb5088886cad54df913a2409c4e944907d5c7"
	},
	{
		"id": "4f506af2952f",
		"ts": "2026-07-19T05:48:28.859Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 439768.09,
		"hash": "4f506af2952f64dc941ff722590c34ba48ce40ec10a7324763cf0a19546ae58b"
	},
	{
		"id": "32c487888393",
		"ts": "2026-07-19T05:48:29.075Z",
		"symbol": "OpenAI",
		"token": "0x5399592239C030Da026b58E4A0a45918895c6b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 75077.98,
		"hash": "32c48788839332d31fd649b0fe02152c4e190699e0466680fe467f4560b9f7ac"
	},
	{
		"id": "826a8330ace7",
		"ts": "2026-07-19T05:48:29.290Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 509632.51,
		"hash": "826a8330ace723f012ecf0395f7429504ae0a791eada4894e23988f18e51aebf"
	},
	{
		"id": "a7df21071768",
		"ts": "2026-07-19T05:48:29.524Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5417040.54,
		"hash": "a7df21071768d2e8013297cdbf1d000ff0400b2d64346b8f9cb11f8cda498cfe"
	},
	{
		"id": "99ae639075f0",
		"ts": "2026-07-19T02:22:30.532Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107655312.81,
		"hash": "99ae639075f02812f1d35bc32bc258821d2f5457d13016a76e639414f8fd0c15"
	},
	{
		"id": "91f8370264d1",
		"ts": "2026-07-19T02:22:30.943Z",
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
		"liquidityUsd": 15985672.55,
		"hash": "91f8370264d18facfc79bf5000fe6973c27a7ce99b0ff576ff50c91f587b5d78"
	},
	{
		"id": "48c524f3aa47",
		"ts": "2026-07-19T02:22:31.409Z",
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
		"liquidityUsd": 876268.21,
		"hash": "48c524f3aa475f25d897d7b54e30986161897511997032dc9df4ddac21a26a1f"
	},
	{
		"id": "1e9fd6b4086e",
		"ts": "2026-07-19T02:22:31.670Z",
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
		"liquidityUsd": 25023814.73,
		"hash": "1e9fd6b4086e674aacf4eed518bf4a5b7d8d34e1c11c3a6a1dcfd74c38484496"
	},
	{
		"id": "ab4e8d2cd8ba",
		"ts": "2026-07-19T02:22:31.910Z",
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
		"liquidityUsd": 5064165.01,
		"hash": "ab4e8d2cd8ba0369d2d69722786a34b0cffeac5b7b09895a3c4354e8635a0698"
	},
	{
		"id": "d28a9fc8c99d",
		"ts": "2026-07-19T02:22:32.149Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 999195.57,
		"hash": "d28a9fc8c99d2ca176a53f14c8b34bf207e6fce032a2d5a0bc4a4d1be80cfe80"
	},
	{
		"id": "bce48f791b6a",
		"ts": "2026-07-19T02:22:32.386Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25023814.73,
		"hash": "bce48f791b6a09845a3881ff95722a65e5b9d0853bcdcb4203d91fb7d7848a44"
	},
	{
		"id": "0cea28cee675",
		"ts": "2026-07-19T02:22:32.630Z",
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
		"liquidityUsd": 2971252.64,
		"hash": "0cea28cee6757acfab546eac419a0a58869ef79df5fb9f9eb6d18da4602455a4"
	},
	{
		"id": "3613360ff5a9",
		"ts": "2026-07-19T02:22:32.870Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 202175.18,
		"hash": "3613360ff5a9b327edcc08a09103912b98fcacb8e5944b0652bfa0cc67f01171"
	},
	{
		"id": "9b5d27469c4c",
		"ts": "2026-07-19T02:22:33.106Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 54060.5,
		"hash": "9b5d27469c4ce426620374dd1c1d8a16cb7b4105d20fccc141d3e80aa5e6e8b0"
	},
	{
		"id": "74a871ade858",
		"ts": "2026-07-19T02:22:33.329Z",
		"symbol": "TOSHI",
		"token": "0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 977465.66,
		"hash": "74a871ade8585689ca7385dc1802d301a4eff923f7bb8965a0dd57723aef57dd"
	},
	{
		"id": "b0ebd1cb1b2c",
		"ts": "2026-07-19T02:22:33.553Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9361279.68,
		"hash": "b0ebd1cb1b2c4db02099a7d600d514dd57f0c4a65e83623f229d866334ad256b"
	},
	{
		"id": "427d81f85346",
		"ts": "2026-07-19T02:22:33.777Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1294460.17,
		"hash": "427d81f8534637065a219e9586acdae86889e0e8d59c3bc7d18e1345cb0434b0"
	},
	{
		"id": "22ffbd3bf229",
		"ts": "2026-07-19T02:22:33.998Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 442431.19,
		"hash": "22ffbd3bf229f5105c2b3b12e11c786146530f6256acbca6a6170c82c06cd2b2"
	},
	{
		"id": "387cb4d4696f",
		"ts": "2026-07-19T02:22:34.220Z",
		"symbol": "OpenAI",
		"token": "0x5399592239C030Da026b58E4A0a45918895c6b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 190490.89,
		"hash": "387cb4d4696f66ba1636a0e5c72a480de6a0dea89f76996908e565336a0cba0d"
	},
	{
		"id": "1ff8973e7af7",
		"ts": "2026-07-19T02:22:34.443Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 509237.83,
		"hash": "1ff8973e7af7a14082769cc98ad09a3f364de99fe213f52b37c034cd493b4107"
	},
	{
		"id": "bb7a6e986d48",
		"ts": "2026-07-19T02:22:34.666Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4657108.94,
		"hash": "bb7a6e986d48926d4a533187db610ea630e9c85b93e8526254f6d443d381a86c"
	},
	{
		"id": "d318774b50d4",
		"ts": "2026-07-18T23:50:55.931Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107397391.84,
		"hash": "d318774b50d47724cf1e46b0fff290cad8ebe4ebf76d9f3d8a3ce128fdf8f7a2"
	},
	{
		"id": "ca9b118c0b7b",
		"ts": "2026-07-18T23:50:56.124Z",
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
		"liquidityUsd": 15602381.91,
		"hash": "ca9b118c0b7ba2dfef50a3e592d12ca4a14d29ceba9b93e5c743703999101c3e"
	},
	{
		"id": "6eb96b35826a",
		"ts": "2026-07-18T23:50:56.314Z",
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
		"liquidityUsd": 845745.95,
		"hash": "6eb96b35826acf9fa39f6f6473e51fd39af3fd35b0267c2fce47cadc08c36688"
	},
	{
		"id": "57519a5b9004",
		"ts": "2026-07-18T23:50:56.513Z",
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
		"liquidityUsd": 24855082.77,
		"hash": "57519a5b90048e4cf33bb466e3506df63ed117dc5b2d9314c7b4d2c47484f90e"
	},
	{
		"id": "638f2cc04d57",
		"ts": "2026-07-18T23:50:56.718Z",
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
		"liquidityUsd": 5052395.05,
		"hash": "638f2cc04d57ba272af0efda04356cf115056bd4212ad77a001e7ee1463b96e2"
	},
	{
		"id": "4e27e4a55eb6",
		"ts": "2026-07-18T23:50:56.916Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 997050.94,
		"hash": "4e27e4a55eb6b1d93711b3a30dcf26c64b78927c33ce425cbcdd70d4ec049823"
	},
	{
		"id": "d583833640ae",
		"ts": "2026-07-18T23:50:57.099Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24855082.77,
		"hash": "d583833640ae16c561fc5ba87a6eb6790b4f7849a3d3b25e5a29359d9413e92e"
	},
	{
		"id": "fbec2c642a70",
		"ts": "2026-07-18T23:50:57.290Z",
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
		"liquidityUsd": 2498030.62,
		"hash": "fbec2c642a700fac3709af0aa7fc45e6ed8a238159d85c2fd71ef3effd5de2ee"
	},
	{
		"id": "78f24e1e28d4",
		"ts": "2026-07-18T23:50:57.491Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 166203.48,
		"hash": "78f24e1e28d42e69f01c38ab7a98729a79a911abb2b1a113de58ca03bf600f85"
	},
	{
		"id": "f3436a736bd1",
		"ts": "2026-07-18T23:50:57.688Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 58192.9,
		"hash": "f3436a736bd17e87bdedeec7edb67e86c8e7a7e223fc031598f684125945e9ae"
	},
	{
		"id": "124705be9855",
		"ts": "2026-07-18T23:50:57.915Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9293325.8,
		"hash": "124705be98556039b68ea3b053a107186907efea4c6b9cbe6c4d4222e3367050"
	},
	{
		"id": "2517919f7d48",
		"ts": "2026-07-18T23:50:58.112Z",
		"symbol": "TOSHI",
		"token": "0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1001991.53,
		"hash": "2517919f7d486eb7c31b0ef05daa31daf10e0cb58b2386d0233929092aa0f4ca"
	},
	{
		"id": "3b9219c614cb",
		"ts": "2026-07-18T23:50:58.300Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 448408.32,
		"hash": "3b9219c614cbe7a1a4aa9acd3c5403fed020832fc6e004b2f2dee6fd317d4a84"
	},
	{
		"id": "854c0c35469e",
		"ts": "2026-07-18T23:50:58.513Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1301435.31,
		"hash": "854c0c35469e22b93d99faaa31b6fdb5b00785d3af3aa1fb578e67029c6bf933"
	},
	{
		"id": "9656eb8793d0",
		"ts": "2026-07-18T23:50:58.694Z",
		"symbol": "OpenAI",
		"token": "0x5399592239C030Da026b58E4A0a45918895c6b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 190827.2,
		"hash": "9656eb8793d0433c17df75f1985028a22d7d5cf14ad2a476ccf9cbc23a394fb4"
	},
	{
		"id": "e65821a5276d",
		"ts": "2026-07-18T23:50:58.893Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 603346.19,
		"hash": "e65821a5276d34a244928175c6706717534cc325a4785f37c73a490a82e132b5"
	},
	{
		"id": "a7dd8e6df216",
		"ts": "2026-07-18T23:50:59.267Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 508321.68,
		"hash": "a7dd8e6df2162de288147ad43db80ba65abedb00a3a1c7cd2c047b7cd710f989"
	},
	{
		"id": "b45edf805e32",
		"ts": "2026-07-18T22:44:02.731Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107389023.96,
		"hash": "b45edf805e32cde5bff1ef85c6576181c68bf42cb506b5ddeb5e67dc566e755a"
	},
	{
		"id": "b0704330bbf1",
		"ts": "2026-07-18T22:44:02.965Z",
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
		"liquidityUsd": 15687146.38,
		"hash": "b0704330bbf1f635b57fe02da29293bc92a5d7200181f9489a7d7a277f967242"
	},
	{
		"id": "d9329fa88360",
		"ts": "2026-07-18T22:44:03.200Z",
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
		"liquidityUsd": 847729.58,
		"hash": "d9329fa8836007631686c2fb15e105ade2e8108c40635b886c1b9fb5ea1eae72"
	},
	{
		"id": "129bd39b2b76",
		"ts": "2026-07-18T22:44:03.439Z",
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
		"liquidityUsd": 24822927.92,
		"hash": "129bd39b2b764ea91d9e68cb618d2aac49680c186960dc22f8eb6712042eec10"
	},
	{
		"id": "85e5e155c9be",
		"ts": "2026-07-18T22:44:03.676Z",
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
		"liquidityUsd": 5049448.33,
		"hash": "85e5e155c9be47fe84e3f47d59d4de1e704190e6fdd8b26e10a5eb467deb1e5b"
	},
	{
		"id": "7037ee09540c",
		"ts": "2026-07-18T22:44:03.910Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 998275.46,
		"hash": "7037ee09540c252f2bcc660f992fcb23e0a41ae4123c3ea9b44e2a3b2bdcd2ce"
	},
	{
		"id": "b27c2d1b8ee3",
		"ts": "2026-07-18T22:44:04.143Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24822927.92,
		"hash": "b27c2d1b8ee3fda18a6f28a8112fab85966d24b7f26429efd8ede85a3e9b9520"
	},
	{
		"id": "79145a702b50",
		"ts": "2026-07-18T22:44:04.384Z",
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
		"liquidityUsd": 2514236.84,
		"hash": "79145a702b502754f2bf49d8b71b8ca0a9cb513d9e7bc9040a3bdcf25ec98ca8"
	},
	{
		"id": "6021e261712a",
		"ts": "2026-07-18T22:44:04.619Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 168133.75,
		"hash": "6021e261712ae255ee49d96d853c794ea18cc87226490cb689c3ebbfa0721a63"
	},
	{
		"id": "c2ece80790f0",
		"ts": "2026-07-18T22:44:04.849Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 65701.8,
		"hash": "c2ece80790f06854f782c5091e873012cf608bc724c0267191075c87b5474664"
	},
	{
		"id": "25e8f3d8d870",
		"ts": "2026-07-18T22:44:05.068Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9301704.1,
		"hash": "25e8f3d8d870660ef6082b056ee45b8da587f20bd2f993340dd9fc17041aef51"
	},
	{
		"id": "184517663a38",
		"ts": "2026-07-18T22:44:05.285Z",
		"symbol": "TOSHI",
		"token": "0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1006493.26,
		"hash": "184517663a38c723cb14b3b194d193c379fd93fb5eef92aebc94f3f3a0d02385"
	},
	{
		"id": "79010f47c28d",
		"ts": "2026-07-18T22:44:05.501Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 445347.34,
		"hash": "79010f47c28d19d142b7e64514ec0950743526ef0cca57d74d954fb5d83635c5"
	},
	{
		"id": "79789c67c369",
		"ts": "2026-07-18T22:44:05.721Z",
		"symbol": "OpenAI",
		"token": "0x5399592239C030Da026b58E4A0a45918895c6b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 190814.63,
		"hash": "79789c67c36992fc49a7d8680283a2824661563dbc1544b6a01f98d58a15fe32"
	},
	{
		"id": "962556c82430",
		"ts": "2026-07-18T22:44:05.940Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 250997.71,
		"hash": "962556c8243010336962e7e98cb93d7abd5d891620bc6cbd71ed726e2ef6fb96"
	},
	{
		"id": "9c5df76f3b7f",
		"ts": "2026-07-18T22:44:06.156Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 592144.75,
		"hash": "9c5df76f3b7fbcf1ba60ca84db94a2a73ca5588649678613242ca3c5675d5d5c"
	},
	{
		"id": "24c49fc4f89f",
		"ts": "2026-07-18T22:44:06.375Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 510328.27,
		"hash": "24c49fc4f89f52f6184cced0e12eac4c4d5350ce61335d04e5a1a2b1f90d738d"
	},
	{
		"id": "a79a8cc2f6d9",
		"ts": "2026-07-18T21:46:22.914Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107393047.33,
		"hash": "a79a8cc2f6d9a3241397a2ba26c3704e4f8b48774fbc93a68115080a17cea3cd"
	},
	{
		"id": "5d79d1cbba63",
		"ts": "2026-07-18T21:46:23.177Z",
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
		"liquidityUsd": 16488038.23,
		"hash": "5d79d1cbba63b2b9d79b20132294038e3385925f962eb1504e2271d3a368aef9"
	},
	{
		"id": "abccfb544c53",
		"ts": "2026-07-18T21:46:23.434Z",
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
		"liquidityUsd": 850157.05,
		"hash": "abccfb544c53c7bad85564ad7af39a91a2a245a3950688ac6c161dcea3052c4e"
	},
	{
		"id": "d47c938ba065",
		"ts": "2026-07-18T21:46:23.679Z",
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
		"liquidityUsd": 24744584.75,
		"hash": "d47c938ba065edb358bade83e53264095bddec97be6ac8aad349630cbbbfa924"
	},
	{
		"id": "4831d982b369",
		"ts": "2026-07-18T21:46:23.921Z",
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
		"liquidityUsd": 5037435.49,
		"hash": "4831d982b369d5f6685b58695b5b3e14e3597490e71a3893c71462ce9d145f8f"
	},
	{
		"id": "3768043ba05f",
		"ts": "2026-07-18T21:46:24.165Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 996273.4,
		"hash": "3768043ba05f6a525f05be6669e14deda7c1de8c3e188cb6b25773ae825e58e2"
	},
	{
		"id": "efa070a508b8",
		"ts": "2026-07-18T21:46:24.409Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24744584.75,
		"hash": "efa070a508b83493bdf4830de019b86804c612af1df365eb24815c2158d28c85"
	},
	{
		"id": "603472c1bd80",
		"ts": "2026-07-18T21:46:24.656Z",
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
		"liquidityUsd": 2503283.46,
		"hash": "603472c1bd806b6ab24350700e802ee31cb31da225311d5d966d4ca9b1d2dd29"
	},
	{
		"id": "1e12be18aac4",
		"ts": "2026-07-18T21:46:24.905Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 170457.7,
		"hash": "1e12be18aac41633f6bfefa5bd89f30b65f3823d30867252ec9920131a41602f"
	},
	{
		"id": "cad9ee50b674",
		"ts": "2026-07-18T21:46:25.149Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 54358.44,
		"hash": "cad9ee50b674c449ce6b32aea6a0b619c474e6bb14ef5cfedfd8e5a38f0bad58"
	},
	{
		"id": "419d0582d467",
		"ts": "2026-07-18T21:46:25.372Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9282732.82,
		"hash": "419d0582d46766b104d226c56b3606d0091c48d0ea26d4ae5d52632fbe1b4f41"
	},
	{
		"id": "7806d893434c",
		"ts": "2026-07-18T21:46:25.596Z",
		"symbol": "TOSHI",
		"token": "0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1011609.43,
		"hash": "7806d893434c6b0263b5728dab5a0caa70c1ae46fcabbbd600600b53113aeedd"
	},
	{
		"id": "43f23ff72989",
		"ts": "2026-07-18T21:46:25.822Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 439664.27,
		"hash": "43f23ff7298995f7f3e007646fd10c4395540c71cd9d6d4ffebd2d3241ff9d97"
	},
	{
		"id": "c942e2968bef",
		"ts": "2026-07-18T21:46:26.048Z",
		"symbol": "OpenAI",
		"token": "0x5399592239C030Da026b58E4A0a45918895c6b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 190656.84,
		"hash": "c942e2968befa84724cfadc43e5ab1153a8e07c873bbd1836652d036fb7c156c"
	},
	{
		"id": "f892f88dce23",
		"ts": "2026-07-18T21:46:26.272Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 244953.45,
		"hash": "f892f88dce238dbfe183257ccfca6ce70263a7d597f2ad1c6ff55c3019724d98"
	},
	{
		"id": "86c4862db66d",
		"ts": "2026-07-18T21:46:26.496Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 592547.07,
		"hash": "86c4862db66dd623ca18bf437e1a9c61f9ee2560877ea6ee91efac9e8348dc17"
	}
]
