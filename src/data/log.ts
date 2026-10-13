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
	"updatedAt": "2026-10-13T05:16:53.985Z",
	"tokensScored": 20063,
	"verdictsIssued": 20063,
	"safe": 17095,
	"risky": 1431,
	"likelyRug": 1537,
	"ticks": 1136
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "468c42bc55c7",
		"ts": "2026-10-13T05:16:49.357Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 150046721.9,
		"hash": "468c42bc55c796ebdea728ed7a8741b549b0b75a4b84bb6dbb4bfed80bb3fdea"
	},
	{
		"id": "72ec65ebdc67",
		"ts": "2026-10-13T05:16:49.628Z",
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
		"liquidityUsd": 18265339.88,
		"hash": "72ec65ebdc67110c2b564fc018b7c8d8ca47fb122d47d063da59f17411e401ef"
	},
	{
		"id": "c3007edcbe7d",
		"ts": "2026-10-13T05:16:49.875Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 806557.86,
		"hash": "c3007edcbe7d24854d74744d2ffb35d68ce055d90259dde6c8c1c45ffcb1cadd"
	},
	{
		"id": "f59a733cd768",
		"ts": "2026-10-13T05:16:50.186Z",
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
		"liquidityUsd": 41224533.21,
		"hash": "f59a733cd76870b107d4542bb699766c513be057a081d182fa92466f237c6487"
	},
	{
		"id": "5b7402619d6f",
		"ts": "2026-10-13T05:16:50.451Z",
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
		"liquidityUsd": 4804475.14,
		"hash": "5b7402619d6f45b2be72faf25de7136ca0269f7defa3958f729afcab58fef32c"
	},
	{
		"id": "687b66230f9f",
		"ts": "2026-10-13T05:16:50.711Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1218231.64,
		"hash": "687b66230f9f11b9293fe42cd99624490884f8a41027ff5a74bfacd8e47801ab"
	},
	{
		"id": "5ccd74469fea",
		"ts": "2026-10-13T05:16:50.983Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41224533.21,
		"hash": "5ccd74469fea564738ff3970df00473631fb31dad79c5d1b2ace92dcb791f0aa"
	},
	{
		"id": "8c3e88972695",
		"ts": "2026-10-13T05:16:51.262Z",
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
		"liquidityUsd": 3277950.22,
		"hash": "8c3e889726956998110c256456479de87d6884dcfd1c82d12cc3d361a5f3814d"
	},
	{
		"id": "cb06347b35f3",
		"ts": "2026-10-13T05:16:51.518Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1879884.32,
		"hash": "cb06347b35f33e663c2390225c1e62ad6c4221537ec4856f53f713592da8e539"
	},
	{
		"id": "7475ef833b4d",
		"ts": "2026-10-13T05:16:51.895Z",
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
		"liquidityUsd": 5076577.18,
		"hash": "7475ef833b4dc61d79f11b52c21a1d1fd19468935e04763f74049d860ca73239"
	},
	{
		"id": "72a4d3bfa9b7",
		"ts": "2026-10-13T05:16:52.127Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 182383.13,
		"hash": "72a4d3bfa9b757dce7e79e58ee45dacba13cb35e7f48da69ce5face5e5253463"
	},
	{
		"id": "582c4d071f7d",
		"ts": "2026-10-13T05:16:52.355Z",
		"symbol": "THEO",
		"token": "0xebE516a20238F79DC20b07eaD6768e08891Ed309",
		"score": 76,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.52,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 45332.16,
		"hash": "582c4d071f7d78ada34fcba57dbbdf3959030711c69a9299f4526f8536c847df"
	},
	{
		"id": "f758ff064ccf",
		"ts": "2026-10-13T05:16:52.590Z",
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
		"liquidityUsd": 15860762.58,
		"hash": "f758ff064ccf01075532f8f7b246a5436164d64002ba66d18354737c209b35b3"
	},
	{
		"id": "87a1f3027860",
		"ts": "2026-10-13T05:16:52.827Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1197773.06,
		"hash": "87a1f3027860c04d7d5261142e7f7cabcd114d9a43275e644ce6ad9ab42fe2df"
	},
	{
		"id": "b2b969309229",
		"ts": "2026-10-13T05:16:53.055Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 4723325.91,
		"hash": "b2b969309229fafddde683b82ae6a817fed446afa0dbbf0713a1c0e21379e4ad"
	},
	{
		"id": "0eefb7ec3049",
		"ts": "2026-10-13T05:16:53.292Z",
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
		"liquidityUsd": 324590.59,
		"hash": "0eefb7ec30496b826132e9e45c8f5bd205f54003a520d024af562d31555629ac"
	},
	{
		"id": "11f12b690ff0",
		"ts": "2026-10-13T05:16:53.525Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1492681.98,
		"hash": "11f12b690ff07381a4d6f6a9180ae810a1878c43d1e91098ce950fb5c46177c6"
	},
	{
		"id": "a99840e27938",
		"ts": "2026-10-13T05:16:53.749Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2192684.34,
		"hash": "a99840e279385130a9d12eed9e096b69502a42d238142e85f46228ef20fc6a5c"
	},
	{
		"id": "f19e8a5a775f",
		"ts": "2026-10-13T05:16:53.985Z",
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
		"liquidityUsd": 1122178.39,
		"hash": "f19e8a5a775f595b4b5c39b389bfcc7ecd954a5510105c9a133a760b8f9633a1"
	},
	{
		"id": "c9b9bb71b647",
		"ts": "2026-10-12T23:27:01.783Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 148286914.2,
		"hash": "c9b9bb71b6473506a7de61718e53be1e5bd66af36bf8fa2d431b9295ff6ba835"
	},
	{
		"id": "b1d76ed09be3",
		"ts": "2026-10-12T23:27:02.251Z",
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
		"liquidityUsd": 17964237.32,
		"hash": "b1d76ed09be3f3297b81295b35cca71953baf60a3f10d78f7a022bb69c9d04af"
	},
	{
		"id": "296571f414dd",
		"ts": "2026-10-12T23:27:02.498Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 794125.89,
		"hash": "296571f414dd8d2848feb106e53467d8f5f56c541ff539f52e97173c26f126be"
	},
	{
		"id": "28e61f194daf",
		"ts": "2026-10-12T23:27:02.745Z",
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
		"liquidityUsd": 40731849.15,
		"hash": "28e61f194daf9f17fab8963de33b47f017b12941f36d2fffe0cb158522fc0c67"
	},
	{
		"id": "08fcc12c68a7",
		"ts": "2026-10-12T23:27:03.025Z",
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
		"liquidityUsd": 4719764.08,
		"hash": "08fcc12c68a798558a46c8b1abfcc9184f4d2194d9f89bd2184deafe97118cf4"
	},
	{
		"id": "cd3733e75cdf",
		"ts": "2026-10-12T23:27:03.302Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1227144.82,
		"hash": "cd3733e75cdf0510e788a6edd965221e079d625b545529dabb946410f8d3d7ff"
	},
	{
		"id": "fd3410e1adb7",
		"ts": "2026-10-12T23:27:03.609Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 40731853.46,
		"hash": "fd3410e1adb7f8c851a22157751566e863f9b2b7600c12b990711a576dd49aee"
	},
	{
		"id": "643ae574d9b8",
		"ts": "2026-10-12T23:27:03.859Z",
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
		"liquidityUsd": 641972.79,
		"hash": "643ae574d9b86ec6a986d14d90172d09556d6f352f7a2a92365d973af17a9673"
	},
	{
		"id": "5cd18a1eb770",
		"ts": "2026-10-12T23:27:04.101Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1885236.49,
		"hash": "5cd18a1eb7705d127a4611a2cc399480540242ecc11387ef4d074f46ebf3a817"
	},
	{
		"id": "38a24012ace8",
		"ts": "2026-10-12T23:27:04.348Z",
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
		"liquidityUsd": 5083953.51,
		"hash": "38a24012ace8da13f5989d9cf068e890646c2c2df801143d8b5417e430d005cb"
	},
	{
		"id": "4bebb55ba69d",
		"ts": "2026-10-12T23:27:04.579Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 174320.53,
		"hash": "4bebb55ba69df17659940e66b1d5e3964754811c00cd1bd30cc78ec1f4e6fbef"
	},
	{
		"id": "4f33d9b82674",
		"ts": "2026-10-12T23:27:04.812Z",
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
		"liquidityUsd": 15478475.6,
		"hash": "4f33d9b8267496cdbd45d2a02a5fd5c4029b2bfdbdff2996448e5e3f962a9e29"
	},
	{
		"id": "aeb72f265676",
		"ts": "2026-10-12T23:27:05.039Z",
		"symbol": "THEO",
		"token": "0xebE516a20238F79DC20b07eaD6768e08891Ed309",
		"score": 76,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.52,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 44693.18,
		"hash": "aeb72f265676a77fe10032ca148ca105ffc483a6afb40a774b6943c93aa5ec7b"
	},
	{
		"id": "e300a41a9ff2",
		"ts": "2026-10-12T23:27:05.276Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1116574.85,
		"hash": "e300a41a9ff2974479d125beea8f632fc87c56ca5d999f7f5e2e016b2698976d"
	},
	{
		"id": "6681de35d53b",
		"ts": "2026-10-12T23:27:05.501Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1474701.39,
		"hash": "6681de35d53bf89a6f825495d78e1c1d2416d2dee3ef8e300d804599a0300816"
	},
	{
		"id": "7e21c17ee6be",
		"ts": "2026-10-12T23:27:05.735Z",
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
		"liquidityUsd": 546747.2,
		"hash": "7e21c17ee6be6a4a11bb7db599e6e1bcea5ae2256d0ac4ffa214d5ce61fa1544"
	},
	{
		"id": "d751821922c4",
		"ts": "2026-10-12T23:27:05.959Z",
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
		"liquidityUsd": 332430.39,
		"hash": "d751821922c4041a5008ec63c9d09465b73157fd713818a987be6af75c12099d"
	},
	{
		"id": "1cd9063e7948",
		"ts": "2026-10-12T23:27:06.188Z",
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
		"liquidityUsd": 1119673.78,
		"hash": "1cd9063e79484e8044d15173e66ab83e23c2f12e16b338f53fc63674eeec04b5"
	},
	{
		"id": "553708955ebc",
		"ts": "2026-10-12T23:27:06.411Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2141131.41,
		"hash": "553708955ebcbeeabe39b0267d32643d15d762bc872d66bc3773ae2c44836388"
	},
	{
		"id": "8d76cb2b2eb7",
		"ts": "2026-10-12T16:27:01.514Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 150661180.11,
		"hash": "8d76cb2b2eb7e01764f295748c040b4e6c535ed62d682fc0daffd1ddd0508339"
	},
	{
		"id": "c1ee56d0fce4",
		"ts": "2026-10-12T16:27:01.748Z",
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
		"liquidityUsd": 18365207.3,
		"hash": "c1ee56d0fce4546534b5620d31ab18c82854ddb1421de434cd764ea56d34bcb8"
	},
	{
		"id": "225e043c5065",
		"ts": "2026-10-12T16:27:02.005Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 808855.87,
		"hash": "225e043c5065c8707b8b8939b22e6c5363f5deebb0498c59243309b50012c1bb"
	},
	{
		"id": "3219bece3edb",
		"ts": "2026-10-12T16:27:02.241Z",
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
		"liquidityUsd": 41173321.8,
		"hash": "3219bece3edb1e16a07f5ef81e0ec066f583a59c36371f0e9020606974f08cd6"
	},
	{
		"id": "0b6c9d9a97d2",
		"ts": "2026-10-12T16:27:02.508Z",
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
		"liquidityUsd": 4889927.26,
		"hash": "0b6c9d9a97d23977aa43ed4d319b1f6b46b371a3ed5625e643053feec05551f9"
	},
	{
		"id": "5978c186777f",
		"ts": "2026-10-12T16:27:02.751Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1239097.99,
		"hash": "5978c186777f160fb1028e3bc9a88600388a0c7f09a4c71a463812b68276c898"
	},
	{
		"id": "0c54313197df",
		"ts": "2026-10-12T16:27:03.002Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41173321.8,
		"hash": "0c54313197dfb08def0e9d5bf57453e6d99a20b412fe61d23ba64983236f9ce5"
	},
	{
		"id": "b9e2f6f013f1",
		"ts": "2026-10-12T16:27:03.306Z",
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
		"liquidityUsd": 601932.78,
		"hash": "b9e2f6f013f187bc291b970f5b9188ddb6b4441845c2ad4bad2035d8da268bc6"
	},
	{
		"id": "53cf4b3cde1a",
		"ts": "2026-10-12T16:27:03.543Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1876632.31,
		"hash": "53cf4b3cde1a36a2937c305c02c3fe813f9e591f819122f494f660f56e572117"
	},
	{
		"id": "db118408e305",
		"ts": "2026-10-12T16:27:03.798Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 560059.63,
		"hash": "db118408e3051f712d5b640240a323f2f4c64f97ef83ccb0b1b3496f4291f9d0"
	},
	{
		"id": "d80e0bd45050",
		"ts": "2026-10-12T16:27:04.009Z",
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
		"liquidityUsd": 16067029.84,
		"hash": "d80e0bd45050e0b91336b8886b45eaf4f78f594960667dbc421822ed95ee3994"
	},
	{
		"id": "c0c71612c6c8",
		"ts": "2026-10-12T16:27:04.221Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5067364.42,
		"hash": "c0c71612c6c8a98456746d5c1e19fd6dff605bff84c7f87193a2638f3621e025"
	},
	{
		"id": "2137c38904ae",
		"ts": "2026-10-12T16:27:04.441Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 203463.74,
		"hash": "2137c38904ae5226e2c3544b8257630873a7274e1b9c0d1ea397894f1b6f1523"
	},
	{
		"id": "2a90c723d309",
		"ts": "2026-10-12T16:27:04.715Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1146180.56,
		"hash": "2a90c723d30984d39045e1453405860795ffb18423bf5cb8ef05791f2abd499d"
	},
	{
		"id": "318c80a14f9f",
		"ts": "2026-10-12T16:27:04.929Z",
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
		"liquidityUsd": 331040.75,
		"hash": "318c80a14f9f435ac5102703b191ff0a2d23862447b67472f06e4114f4d229b0"
	},
	{
		"id": "14daf946dcef",
		"ts": "2026-10-12T16:27:05.136Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1555530.61,
		"hash": "14daf946dcef5f35f44f22cd7d222bbf9cf55580a64ce41259a18ecbce372c00"
	},
	{
		"id": "73bba0be994f",
		"ts": "2026-10-12T16:27:05.343Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 230938.89,
		"hash": "73bba0be994f614764c4541bf0eb02487460dcc878605c863245a9d445694dad"
	},
	{
		"id": "090ca926e04d",
		"ts": "2026-10-12T16:27:05.556Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 105326.57,
		"hash": "090ca926e04db73f896114abb193d2eb517814db025978bc4c42d1a539ec0b35"
	},
	{
		"id": "58408550c82e",
		"ts": "2026-10-12T16:27:05.775Z",
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
		"liquidityUsd": 3208345.87,
		"hash": "58408550c82ee5461e142f3c680d36dd2575865d1a45f7022b73bc38a9cb4ce3"
	},
	{
		"id": "bdf04a7f3070",
		"ts": "2026-10-12T06:54:41.661Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 150672549.8,
		"hash": "bdf04a7f307089dcf6b321b49e73b091532c2dae8e3b8552697e9e39333fd224"
	},
	{
		"id": "10282f0a0369",
		"ts": "2026-10-12T06:54:41.894Z",
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
		"liquidityUsd": 18601621.23,
		"hash": "10282f0a0369a26e69a36955e4280561eee171000bb2e20522bf9a837ba11d99"
	},
	{
		"id": "4603f1b1fc2b",
		"ts": "2026-10-12T06:54:42.107Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 814578.99,
		"hash": "4603f1b1fc2b952969b8a03effaccec2952dd3893de2a1e2cbc437ac2fe1e75a"
	},
	{
		"id": "8dd3a382458b",
		"ts": "2026-10-12T06:54:42.351Z",
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
		"liquidityUsd": 42931524.92,
		"hash": "8dd3a382458b165422e1dbd6acc717aaf0e03b1fdebf25feced1db76c9d2ba10"
	},
	{
		"id": "ba82702111cc",
		"ts": "2026-10-12T06:54:42.552Z",
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
		"liquidityUsd": 4990127.72,
		"hash": "ba82702111cc1ee3c9a692e51d885140e01304a97a6188bb0d4c844dc5108da6"
	},
	{
		"id": "1100c5c5235d",
		"ts": "2026-10-12T06:54:42.846Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1270195.98,
		"hash": "1100c5c5235d2a599d17b615586285cdddb3f066cb3d2f23776180d6a9e48f92"
	},
	{
		"id": "06d46f60a099",
		"ts": "2026-10-12T06:54:43.051Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42931525.92,
		"hash": "06d46f60a099ba5a9d52987d61be9316fcf52bb221c4a3785bd76bc166111e36"
	},
	{
		"id": "4f9eb51a0cfa",
		"ts": "2026-10-12T06:54:43.249Z",
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
		"liquidityUsd": 815227.89,
		"hash": "4f9eb51a0cfa7ce23d897fe045ec8f7af3127b02c6bd2371026b8867a29d4e9b"
	},
	{
		"id": "5661bad5a4ae",
		"ts": "2026-10-12T06:54:43.477Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1907243.39,
		"hash": "5661bad5a4aea2ed51b800135fec61b61f5e3703d477672ddce5571d6d69a3db"
	},
	{
		"id": "bb81d2e2d72d",
		"ts": "2026-10-12T06:54:43.713Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 586554.4,
		"hash": "bb81d2e2d72db24c7e34e8a0ea34393fb3ef435f5c2448b7d35f608c06e0e0dd"
	},
	{
		"id": "4e818ef94515",
		"ts": "2026-10-12T06:54:43.926Z",
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
		"liquidityUsd": 16617640.79,
		"hash": "4e818ef945156971d3956bef5a4c605e55c6378758dedf41d8c7e57bf9c828fb"
	},
	{
		"id": "4d349c6c1616",
		"ts": "2026-10-12T06:54:44.121Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2284151.23,
		"hash": "4d349c6c1616efb538010deb3c274533bd1aa7c4748ad46ad74912d3b8476059"
	},
	{
		"id": "4071f15863d8",
		"ts": "2026-10-12T06:54:44.322Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5385741.92,
		"hash": "4071f15863d8356ade689c63df96ef0aa3070b006eedce62c35384ec9b7b4385"
	},
	{
		"id": "d40e69a618ec",
		"ts": "2026-10-12T06:54:44.581Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 111868.12,
		"hash": "d40e69a618ec5eea41ff7020b527c74e3c10e0aaf7bc45d88e25ebde970f6ce6"
	},
	{
		"id": "3337dbe431aa",
		"ts": "2026-10-12T06:54:44.779Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 744545.78,
		"hash": "3337dbe431aafb3730badaf16c602d890e20d6ef696daaf5eadde8364159e38c"
	},
	{
		"id": "47ac236af781",
		"ts": "2026-10-12T06:54:44.978Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 219150.71,
		"hash": "47ac236af7811113afb5565461a98d62d34dc2b4ed91674bc7b6276ebdeda1d3"
	},
	{
		"id": "83f3a6b70510",
		"ts": "2026-10-12T06:54:45.188Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 5035858.42,
		"hash": "83f3a6b70510e8411ae3bed745c043eecbff032054e4ea90f05ad24dbc90bb9e"
	},
	{
		"id": "446dde53b441",
		"ts": "2026-10-12T06:54:45.397Z",
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
		"liquidityUsd": 3297759.27,
		"hash": "446dde53b4414baa2324164f25e8c41165469ac0202c1c8d6f451c8b0b21ef10"
	},
	{
		"id": "c9579e03ada7",
		"ts": "2026-10-12T06:54:45.610Z",
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
		"liquidityUsd": 348393.2,
		"hash": "c9579e03ada7cad04ca6d66efa6105def3ac630b17a2ef700dd577292294702d"
	},
	{
		"id": "964d0de40fc1",
		"ts": "2026-10-12T00:10:34.986Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 149457172.33,
		"hash": "964d0de40fc1c121cd5a104440d2eb915daa7ea38f4813cb3927ebb1bf176c06"
	},
	{
		"id": "91e2706bf19e",
		"ts": "2026-10-12T00:10:35.260Z",
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
		"liquidityUsd": 18479811.83,
		"hash": "91e2706bf19e351104ac1f8ac54dd856d34acc9aa7e3740098df13b7c29c1613"
	},
	{
		"id": "608fd4499126",
		"ts": "2026-10-12T00:10:35.514Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 813497.48,
		"hash": "608fd449912604d5b7b59c1a3b8016b08c63cc5efbaa694f7a17bcc127266d2e"
	},
	{
		"id": "00fccc116fe7",
		"ts": "2026-10-12T00:10:35.776Z",
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
		"liquidityUsd": 42942594.46,
		"hash": "00fccc116fe716412b0a3ae4216faa69ae2d1ddca36ad1fb0e713bbc401f17b8"
	},
	{
		"id": "0823c3d48d99",
		"ts": "2026-10-12T00:10:36.024Z",
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
		"liquidityUsd": 4968073.62,
		"hash": "0823c3d48d99a5bba0b400ce3cd188ad27854cfcc28a84182ed8829043c21d48"
	},
	{
		"id": "85a2ceb768bf",
		"ts": "2026-10-12T00:10:36.276Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1267174.1,
		"hash": "85a2ceb768bf9520ef8cca2f4ddd6f4ffa23e43f965880ad47eb3b7cc53fb820"
	},
	{
		"id": "224f56f4eb9d",
		"ts": "2026-10-12T00:10:36.523Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42942594.46,
		"hash": "224f56f4eb9d05054fef072f4e08e3cec47fef99cd1f751ceca1bd2bcf6e4c61"
	},
	{
		"id": "60fba233b2ff",
		"ts": "2026-10-12T00:10:36.773Z",
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
		"liquidityUsd": 2300926.48,
		"hash": "60fba233b2ffb9fe9f8b99645a7d53dfbf9d8e3325509818c33e127f76e736b8"
	},
	{
		"id": "135922d635e1",
		"ts": "2026-10-12T00:10:37.021Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1950936.82,
		"hash": "135922d635e162a5dc8926e60fe1f25a2d48e1ba3a9f370507114f6b564d413e"
	},
	{
		"id": "863ad370e4ec",
		"ts": "2026-10-12T00:10:37.275Z",
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
		"liquidityUsd": 16460832.87,
		"hash": "863ad370e4eca3aee6f7cefb15a9ee0319e12e0759dd273bdb988e86129a0c5e"
	},
	{
		"id": "0f79c88ae81e",
		"ts": "2026-10-12T00:10:37.509Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2277288.96,
		"hash": "0f79c88ae81e04b735bf6c121a4681d4e251feb1b5116485f4c535399e067bc3"
	},
	{
		"id": "6c4c0404ab97",
		"ts": "2026-10-12T00:10:37.742Z",
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
		"liquidityUsd": 609163.53,
		"hash": "6c4c0404ab97aa3f9fce04a3b41caffbddd256a7415c0616704f7e9d53d089ae"
	},
	{
		"id": "374fc4218f32",
		"ts": "2026-10-12T00:10:37.980Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 5354032.08,
		"hash": "374fc4218f324c68c09df0a0e5257edeff56b78171ff9ba07e34b276e2516523"
	},
	{
		"id": "b02d510f95ea",
		"ts": "2026-10-12T00:10:38.215Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 593284.47,
		"hash": "b02d510f95eaef338cd58bc4a152a93a7be19e1a587d93231db046474205c3e3"
	},
	{
		"id": "1013f74bf25d",
		"ts": "2026-10-12T00:10:38.505Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 118734.38,
		"hash": "1013f74bf25d86dc55b0831dd87948387d0518607f300e7666c699629a8c0db1"
	},
	{
		"id": "a6c02e577194",
		"ts": "2026-10-12T00:10:38.767Z",
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
		"liquidityUsd": 3306381.43,
		"hash": "a6c02e577194caa429a043de454df5aab8a748fea8fb152681329120030af951"
	},
	{
		"id": "d3e9e2effec0",
		"ts": "2026-10-12T00:10:39.000Z",
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
		"liquidityUsd": 368387.35,
		"hash": "d3e9e2effec044664200da5d41695749fcc06a25d0703fc1eef13109c7596bce"
	},
	{
		"id": "52769ed3209b",
		"ts": "2026-10-12T00:10:39.232Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 402658.07,
		"hash": "52769ed3209b124fd2fe0c166ee225e6944d9e8f00e45f595785ff45fa0951bd"
	},
	{
		"id": "5c68174b5867",
		"ts": "2026-10-12T00:10:39.464Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 195774.11,
		"hash": "5c68174b5867b45ad9af29172bb1b4b37b867f5a366c21625b60e0cdd235448e"
	},
	{
		"id": "f7d0764fac9c",
		"ts": "2026-10-11T20:45:50.596Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 149647745.33,
		"hash": "f7d0764fac9c88edd0fdf363d7498c6bf0072ee5d136a6716fa280ffd63d55c5"
	},
	{
		"id": "52f58a6af170",
		"ts": "2026-10-11T20:45:51.398Z",
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
		"liquidityUsd": 18496198.49,
		"hash": "52f58a6af170affe7742407ad18b3f3be4f5aa9abda8f98e27135030a0d27d53"
	},
	{
		"id": "ec3d5bab2e17",
		"ts": "2026-10-11T20:45:51.748Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 814198.53,
		"hash": "ec3d5bab2e17fd698a82410f418eb1de7fc200c6cde9f96bcf1710cf2236e31f"
	},
	{
		"id": "f9d9cf17cf3f",
		"ts": "2026-10-11T20:45:52.047Z",
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
		"liquidityUsd": 42821796.15,
		"hash": "f9d9cf17cf3f685ad6ada048fd7fbfef17fca2c8ae1f07b370eb7108f36f8624"
	},
	{
		"id": "cfdcf3df2435",
		"ts": "2026-10-11T20:45:52.347Z",
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
		"liquidityUsd": 4970720.72,
		"hash": "cfdcf3df2435f0ad2d7e236d16c11441a9b9da5adafcc9aa4adc5f736a0b8350"
	},
	{
		"id": "431a1d333628",
		"ts": "2026-10-11T20:45:52.652Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1271098.36,
		"hash": "431a1d3336282a4569f520e9afff14b1b0e8691665bbdd2fe6ecdcc1b364ff93"
	},
	{
		"id": "7f04c07ea2d5",
		"ts": "2026-10-11T20:45:52.946Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42821796.15,
		"hash": "7f04c07ea2d5fa29c861d27bd404259ed3ed8cf82dd88effa4b12dc37f94e165"
	},
	{
		"id": "da4862d6ad74",
		"ts": "2026-10-11T20:45:53.270Z",
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
		"liquidityUsd": 2300844.95,
		"hash": "da4862d6ad74cbaad9a11376010e7bb11e5a56b4994e48c33fb2e803887515a6"
	},
	{
		"id": "c680129c601d",
		"ts": "2026-10-11T20:45:53.575Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1952461.78,
		"hash": "c680129c601d1f4b94984647b2d5d2da7b2a163eb7c51c20f4e54a15bb771f4a"
	},
	{
		"id": "87b043812df5",
		"ts": "2026-10-11T20:45:53.874Z",
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
		"liquidityUsd": 16355782.53,
		"hash": "87b043812df5e05ab121dcdfa2b010b813a5d86598e75e13af90e5129be6a8f1"
	},
	{
		"id": "d6c8014c096b",
		"ts": "2026-10-11T20:45:54.170Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2274819.37,
		"hash": "d6c8014c096bad97382c768eeb44c7c06a84693d17912ca66150cdae4b3382e5"
	},
	{
		"id": "56ad8d391704",
		"ts": "2026-10-11T20:45:54.466Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 5341147.63,
		"hash": "56ad8d39170400f8cd3f49ed341d6d723f59f861f6964e79c448f541c50557f7"
	},
	{
		"id": "39ee2a3c6619",
		"ts": "2026-10-11T20:45:54.746Z",
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
		"liquidityUsd": 597775,
		"hash": "39ee2a3c66190b31573ed860a0eb6a891c6ecf5cb49f3632540fa71074deb07b"
	},
	{
		"id": "a269709062ef",
		"ts": "2026-10-11T20:45:55.031Z",
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
		"liquidityUsd": 354869.31,
		"hash": "a269709062efc6ef2eb200ffa9bc1dff990e2ff6fbe0ea34c3f5d604c624b24c"
	},
	{
		"id": "dca0d3d46b19",
		"ts": "2026-10-11T20:45:55.311Z",
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
		"liquidityUsd": 3327742.92,
		"hash": "dca0d3d46b19a5ff96678604afbc1c9e08e7b7427e50618694d8af95f26346bc"
	},
	{
		"id": "96291db97ae5",
		"ts": "2026-10-11T20:45:55.591Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 193311.19,
		"hash": "96291db97ae592e8c5a1b8e0e816c3d336f7de8b0b342a445c7febcd97dd915f"
	},
	{
		"id": "94ba96cdddde",
		"ts": "2026-10-11T20:45:55.823Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 592907.26,
		"hash": "94ba96cdddded8c60fcf0c0d1aa89dab67306826b9a32100086c6b03df962f51"
	},
	{
		"id": "8f1be3cfdd4f",
		"ts": "2026-10-11T20:45:56.102Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1575808.1,
		"hash": "8f1be3cfdd4f1cca225aa44e1ae35c2f807cce3f7cc5bb408e86a09e2bc1e57b"
	},
	{
		"id": "f210b17f6222",
		"ts": "2026-10-11T16:30:42.728Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 149762163.66,
		"hash": "f210b17f6222660057b9d82afa1ff2dfc6c69d737616e7a20dc12b7c08b9d1cb"
	},
	{
		"id": "f39b005dfcdc",
		"ts": "2026-10-11T16:30:42.999Z",
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
		"liquidityUsd": 18457715.62,
		"hash": "f39b005dfcdcad464a14afe22bdea4dae49d1cfae4b9c3f849edb01153de4df4"
	},
	{
		"id": "915cbcb205c3",
		"ts": "2026-10-11T16:30:43.264Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 814949.96,
		"hash": "915cbcb205c3f79d88e3f6bda8b55e1361bdf7a5a98ce93c3e08738242604d47"
	},
	{
		"id": "dcdc2f7f4aba",
		"ts": "2026-10-11T16:30:43.752Z",
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
		"liquidityUsd": 44316413.87,
		"hash": "dcdc2f7f4aba3294ea678f0eee2906eb523aed7d969525941d2e1f1e350c3104"
	},
	{
		"id": "87dd5c24f478",
		"ts": "2026-10-11T16:30:44.032Z",
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
		"liquidityUsd": 4989540.12,
		"hash": "87dd5c24f4786e9340dca12e58b2a096f229e505657f91d28ebdeee9b2fe268b"
	},
	{
		"id": "019558ed76f8",
		"ts": "2026-10-11T16:30:44.291Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1280111.96,
		"hash": "019558ed76f8e7a9db94179ce7a3dab6d8fc99edfafb40e14992bee74a182661"
	},
	{
		"id": "b60c076866cd",
		"ts": "2026-10-11T16:30:44.545Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 44316413.87,
		"hash": "b60c076866cd09d51cace936b56a8937ac9009964a663cde344c3e268f086015"
	},
	{
		"id": "b5680c97f2e3",
		"ts": "2026-10-11T16:30:44.823Z",
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
		"liquidityUsd": 2298832.6,
		"hash": "b5680c97f2e313c5a1e668605c15ed3f18142998b421eabfabfa817b72a82a08"
	},
	{
		"id": "54a64e9bb36c",
		"ts": "2026-10-11T16:30:45.104Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1980197.14,
		"hash": "54a64e9bb36cd8b6cb597d11f73508e08dce20f578835d798fca9d45a75f2081"
	},
	{
		"id": "0fb4e6466dcf",
		"ts": "2026-10-11T16:30:45.372Z",
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
		"liquidityUsd": 16225258.79,
		"hash": "0fb4e6466dcf26c745f0cdeeaa206399efb00bbf691622509619bb5492362955"
	},
	{
		"id": "ce0af345b917",
		"ts": "2026-10-11T16:30:45.615Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 5282159.63,
		"hash": "ce0af345b91755239d158f347ae752393a8e99133f607752063c019ffbe57890"
	},
	{
		"id": "a72a9fff444a",
		"ts": "2026-10-11T16:30:45.862Z",
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
		"liquidityUsd": 600931.86,
		"hash": "a72a9fff444a19f00afc9d9490f3c1911b22cf56ea2c293c6205bc66ec28027c"
	},
	{
		"id": "5038c70d1d91",
		"ts": "2026-10-11T16:30:46.113Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4010845.21,
		"hash": "5038c70d1d911c1f4c64701457454d771776c72f7dcced53398a9bc7f2f707f0"
	},
	{
		"id": "44d6c342eda1",
		"ts": "2026-10-11T16:30:46.372Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1292820.82,
		"hash": "44d6c342eda1d35e6e3fab139a65d46c0b04c1e4fe7e373496e7ef9949a7da8f"
	},
	{
		"id": "54545619130d",
		"ts": "2026-10-11T16:30:46.615Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 589943.77,
		"hash": "54545619130d9201d168895fae392219fa1df6da36ce603399a61d1efab34e31"
	},
	{
		"id": "d9293fc04557",
		"ts": "2026-10-11T16:30:46.855Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 150971.33,
		"hash": "d9293fc04557805f904428a8a6f08d221e8ef19750eb55aa820020628fc3abb5"
	},
	{
		"id": "9472a131568e",
		"ts": "2026-10-11T16:30:47.094Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2261396.18,
		"hash": "9472a131568ef3e7516771fe7c2f5c1931a13dab8742116b3752b1ab07d69007"
	},
	{
		"id": "10e40bb09afb",
		"ts": "2026-10-11T16:30:47.333Z",
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
		"liquidityUsd": 378190.63,
		"hash": "10e40bb09afb7656c8edfe469f5c2f70f212986e8c652c55d8c08467d55ab08c"
	},
	{
		"id": "32aa6ef953bf",
		"ts": "2026-10-11T10:33:22.013Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 148651118.2,
		"hash": "32aa6ef953bf92a0510ed78cf5b409868a1427c8a64ae0de6efc62e886582684"
	},
	{
		"id": "5c7776d396a9",
		"ts": "2026-10-11T10:33:22.652Z",
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
		"liquidityUsd": 18236706.22,
		"hash": "5c7776d396a988f4f953cab99c094787c51708fb874db41a417153664f34213d"
	},
	{
		"id": "70e89d710902",
		"ts": "2026-10-11T10:33:22.898Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 807023.9,
		"hash": "70e89d7109020e8d82835a03ed04afb06bcead0e7bdfa52a904a74e66b17cfb1"
	},
	{
		"id": "4ed583013319",
		"ts": "2026-10-11T10:33:23.137Z",
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
		"liquidityUsd": 44024520.12,
		"hash": "4ed5830133191854cfbc9b5e29cac8302cd42bc780e93334789ffd8baf0cfe9b"
	},
	{
		"id": "47f05f72d7cd",
		"ts": "2026-10-11T10:33:23.569Z",
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
		"liquidityUsd": 4885735.83,
		"hash": "47f05f72d7cdfd9d92ddd38ca9f5eeed5de4761e970b25724c22d5a784d62ea0"
	},
	{
		"id": "9636b8ff29ce",
		"ts": "2026-10-11T10:33:23.815Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1256262.77,
		"hash": "9636b8ff29ce16ea8d09dcca060d940c75e5a4cba61f3017ba6167c0e7006223"
	},
	{
		"id": "1ed12b98fd7e",
		"ts": "2026-10-11T10:33:24.052Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 44024520.12,
		"hash": "1ed12b98fd7e29d2a4556c8dff2bde369311d266624431cb273eca46e19993a6"
	},
	{
		"id": "a2bdf0a75af8",
		"ts": "2026-10-11T10:33:24.289Z",
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
		"liquidityUsd": 2324933.71,
		"hash": "a2bdf0a75af80144c245177312bd2a2b54927e1b182e3fa6abce7a59b95ce7ff"
	},
	{
		"id": "c8d2b0f6dd51",
		"ts": "2026-10-11T10:33:24.526Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2020337.75,
		"hash": "c8d2b0f6dd5188c87cedf26ae240dd7de888f1c118e5358580eed64e480a84bd"
	},
	{
		"id": "020c8bda4871",
		"ts": "2026-10-11T10:33:24.813Z",
		"symbol": "Paper",
		"token": "0x5F8FC6a725De67e74ec489819D8848C1545aAb07",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 7072091.13,
		"hash": "020c8bda4871c2f0dbab262dfe7d22a756307f80366d42883835fb358184e924"
	},
	{
		"id": "bd1d13ae6e07",
		"ts": "2026-10-11T10:33:25.053Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1253921.14,
		"hash": "bd1d13ae6e07465eecaeede30e57106b7f3432faf4d24e2ce9cb6b3baa086ed3"
	},
	{
		"id": "75cc5829215e",
		"ts": "2026-10-11T10:33:25.275Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 5239039.22,
		"hash": "75cc5829215ebbc4da27fd6055b3d38a5d8f4447322aa7f8b61bb2c5005414c7"
	},
	{
		"id": "7055e2c81e06",
		"ts": "2026-10-11T10:33:25.504Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4039019.97,
		"hash": "7055e2c81e0601a8f65f84cfda4eeb90964d9e36d14be3af2a3fc4d7e5b7b6f4"
	},
	{
		"id": "ff9605efd458",
		"ts": "2026-10-11T10:33:25.726Z",
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
		"liquidityUsd": 15461562.36,
		"hash": "ff9605efd458eff6d4064b2d79df5fbe641b4b1c4c6dfb6bd605a2b6e6029eee"
	},
	{
		"id": "ddfdce35d654",
		"ts": "2026-10-11T10:33:25.948Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 583970.79,
		"hash": "ddfdce35d654372f55f90b0a1c230f3bcd0be1314d3027ff9e2770da79d16b07"
	},
	{
		"id": "0a00014c3d96",
		"ts": "2026-10-11T10:33:26.173Z",
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
		"liquidityUsd": 544421.2,
		"hash": "0a00014c3d96f1948c75b210a81a2bf26984c888f923207d6bbb8883934e91ce"
	},
	{
		"id": "23dc2d24c03a",
		"ts": "2026-10-11T10:33:26.394Z",
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
		"liquidityUsd": 352484.42,
		"hash": "23dc2d24c03a522d70d38bf134ddd52fc63c0bdcbdbcb3bd6fa977ee461062aa"
	},
	{
		"id": "f0f98f7be4be",
		"ts": "2026-10-11T10:33:26.617Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 151545.35,
		"hash": "f0f98f7be4bea7e4f1209e51f4f5545afe32990001241e155616f785e79e44d5"
	},
	{
		"id": "0cd9523b3b3b",
		"ts": "2026-10-11T03:44:54.067Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 148684950.07,
		"hash": "0cd9523b3b3b3f61b573f9fdd153a46eb49eaf6ada6871efce32d06e7798242f"
	},
	{
		"id": "138a78e92d29",
		"ts": "2026-10-11T03:44:54.295Z",
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
		"liquidityUsd": 18244478.51,
		"hash": "138a78e92d29de9a73fed84818ccc54358bb87d63c3ecc31189b036d5e6ada56"
	},
	{
		"id": "c1b3b673e147",
		"ts": "2026-10-11T03:44:54.504Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 810918.47,
		"hash": "c1b3b673e147a928162de03921bd9c15f32b0d58925a13b81a83b8e64f1665fb"
	},
	{
		"id": "3a5346b81e7b",
		"ts": "2026-10-11T03:44:54.713Z",
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
		"liquidityUsd": 48118433.58,
		"hash": "3a5346b81e7b7dc6b88b2978397b443f24801b3af536d48c4e6394aa486380f9"
	},
	{
		"id": "87d76e7a8004",
		"ts": "2026-10-11T03:44:54.919Z",
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
		"liquidityUsd": 4896485.22,
		"hash": "87d76e7a80045518716104a727eaf968daba1c4a536fc3620557ba9c80f4a0b1"
	},
	{
		"id": "7a436c1c5043",
		"ts": "2026-10-11T03:44:55.122Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1268450.98,
		"hash": "7a436c1c5043cf9d0584fc6d9484565c861a5ba5e1d4ab5cae4ebb7bd9f30947"
	},
	{
		"id": "22ee98edc245",
		"ts": "2026-10-11T03:44:55.339Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 48118432.84,
		"hash": "22ee98edc2453baf661f4e7f43462b3e38d64a186b32d32c62a307bfcf453a2d"
	},
	{
		"id": "2c2e91b49035",
		"ts": "2026-10-11T03:44:55.556Z",
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
		"liquidityUsd": 2302778.98,
		"hash": "2c2e91b490351d207a5eb925b907b7e214bd39518df91f297baff99f37022bd1"
	},
	{
		"id": "05b30da746ab",
		"ts": "2026-10-11T03:44:55.763Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2060625.56,
		"hash": "05b30da746aba2e045a74845dc1682ec578e356c047085f4cc1131562faad95a"
	},
	{
		"id": "b7be879798bb",
		"ts": "2026-10-11T03:44:55.969Z",
		"symbol": "Paper",
		"token": "0x5F8FC6a725De67e74ec489819D8848C1545aAb07",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 7072090.95,
		"hash": "b7be879798bbd82556c20361e1cb6d855341838d1a0a1bd30c3371096f0e54f6"
	},
	{
		"id": "e7abf242e7ed",
		"ts": "2026-10-11T03:44:56.166Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4051379.3,
		"hash": "e7abf242e7ed3c67caa5cce564b658fd63133573d02c628907cb9e9e289277f8"
	},
	{
		"id": "19a87607eb3a",
		"ts": "2026-10-11T03:44:56.365Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1269071.16,
		"hash": "19a87607eb3a1593f9ea040934b7ec03325cc29ead38eb63fbbee17baa55b314"
	},
	{
		"id": "f2d9794d611a",
		"ts": "2026-10-11T03:44:56.556Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 5337951.03,
		"hash": "f2d9794d611aedec9a8edec468ee85418e3694689eabcc57af8c09961916afa2"
	},
	{
		"id": "43087f117ddd",
		"ts": "2026-10-11T03:44:56.773Z",
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
		"liquidityUsd": 353414.08,
		"hash": "43087f117ddd66c9fc93e1045e9b56b009e27e33571d30457cc2053443d6ad67"
	},
	{
		"id": "4cbe645abd4a",
		"ts": "2026-10-11T03:44:56.963Z",
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
		"liquidityUsd": 15537934.77,
		"hash": "4cbe645abd4a26357b9a2f63d56d87aa3e2cd21a310de4dd1cd1150eb43f6a30"
	},
	{
		"id": "b9c25dfbe40a",
		"ts": "2026-10-11T03:44:57.171Z",
		"symbol": "1F916",
		"token": "0x9E00FC92493451EBA1c63DD3880D68b622037bA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 406068.78,
		"hash": "b9c25dfbe40afd3a30689fa7ff49460d0210eaf6cbca58f581236c1471b84c46"
	},
	{
		"id": "a29b6f1dd174",
		"ts": "2026-10-11T03:44:57.363Z",
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
		"liquidityUsd": 3341256.76,
		"hash": "a29b6f1dd174533ec8ec013ea1d3491e1bfbb6f8c3dbd21a83a24e62ca5806ee"
	},
	{
		"id": "311f74ff19fb",
		"ts": "2026-10-11T03:44:57.583Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 154446.38,
		"hash": "311f74ff19fb77a24f5ee21724fc26d2cce30418375d204a0c6e95c8e9032e8c"
	},
	{
		"id": "a5f4eb5bd0f7",
		"ts": "2026-10-10T23:10:31.131Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 148538613.3,
		"hash": "a5f4eb5bd0f75b32f8e25b839879633e8cc48b36d503d2b963c484ef224ee009"
	},
	{
		"id": "879b06ff2d74",
		"ts": "2026-10-10T23:10:31.338Z",
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
		"liquidityUsd": 18255618.38,
		"hash": "879b06ff2d74ed9dec9c3440f1978560a61d99194f95c7fffe629c90fdb3e40f"
	},
	{
		"id": "a4abc6b85cdf",
		"ts": "2026-10-10T23:10:31.535Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 810927.11,
		"hash": "a4abc6b85cdf2dd9c76db84f30d950c587d0d3a9462f9de084b8eff886be5a06"
	},
	{
		"id": "0f61021a5bff",
		"ts": "2026-10-10T23:10:31.757Z",
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
		"liquidityUsd": 48072556.25,
		"hash": "0f61021a5bff8f3489727f72e48f9c1ba893c80adccb1e768829fccad0c202ea"
	},
	{
		"id": "578e65b2dba0",
		"ts": "2026-10-10T23:10:31.948Z",
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
		"liquidityUsd": 4919722.6,
		"hash": "578e65b2dba030d6dd6366e468dfa0b2273315add4e7a03f2714c5278587b1ca"
	},
	{
		"id": "aa9a61ea9d19",
		"ts": "2026-10-10T23:10:32.141Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1296090.72,
		"hash": "aa9a61ea9d19a6aa2e47d9f0173482e5da8e403dfa49ac9df3194f3ffe60bb12"
	},
	{
		"id": "0d6c626f2988",
		"ts": "2026-10-10T23:10:32.336Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 48072556.25,
		"hash": "0d6c626f29888a1b18a4ce14d47492798988274ccc0c7d86e6f1136352585225"
	},
	{
		"id": "bae376f5a779",
		"ts": "2026-10-10T23:10:32.530Z",
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
		"liquidityUsd": 2303189.59,
		"hash": "bae376f5a779e508f6d6783f9f8d38fd66ff9c06c01004f7e270b74969953ccb"
	},
	{
		"id": "9a7ff5671dec",
		"ts": "2026-10-10T23:10:32.724Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2044673.7,
		"hash": "9a7ff5671dec8cf0f8029afdbd07ebe45ec36ccc0b843066fe6622985f4e9e29"
	},
	{
		"id": "0e27d38a923c",
		"ts": "2026-10-10T23:10:32.951Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4076669.09,
		"hash": "0e27d38a923c1b2af876ada9462a4f1c54e4cec113cfbe85aaea9e6b534afcf2"
	},
	{
		"id": "c97fa045fa36",
		"ts": "2026-10-10T23:10:33.144Z",
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
		"liquidityUsd": 3387665.76,
		"hash": "c97fa045fa36ea8272928a7418d2bb855dcf7d48deff3c9147511ae132635d0b"
	},
	{
		"id": "cb25a99d2f8a",
		"ts": "2026-10-10T23:10:33.330Z",
		"symbol": "Paper",
		"token": "0x5F8FC6a725De67e74ec489819D8848C1545aAb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7231593.53,
		"hash": "cb25a99d2f8a33eb37367d03b7253979a34b79f31faebb3f754cd3e8b08a5951"
	},
	{
		"id": "8bc7fb1d996e",
		"ts": "2026-10-10T23:10:33.563Z",
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
		"liquidityUsd": 15600366.91,
		"hash": "8bc7fb1d996ecbf913d4d9f182efe9d1eaab5f0e583e76343a8e65d7617aaf70"
	},
	{
		"id": "a4d9528bff74",
		"ts": "2026-10-10T23:10:33.752Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 5545587.63,
		"hash": "a4d9528bff7432f846a9d3c7fa4382a6bb47495a44fb528b022b933b700ea10b"
	},
	{
		"id": "4ee3208a711c",
		"ts": "2026-10-10T23:10:33.937Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1324200.33,
		"hash": "4ee3208a711cbddbbd01fcd87987ba27c287bf94292e0917c206556eb2af2373"
	},
	{
		"id": "c8390110ab3f",
		"ts": "2026-10-10T23:10:34.126Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2209946.88,
		"hash": "c8390110ab3f40a894b5115da45efabe6d129ddfb6ab2fd050dded500083ce93"
	},
	{
		"id": "1c30337edb0f",
		"ts": "2026-10-10T23:10:34.338Z",
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
		"liquidityUsd": 352940.77,
		"hash": "1c30337edb0fc5a67848a0066d6af5704e8bb5e8b08fc24517454008c5f18202"
	},
	{
		"id": "6c93874729d5",
		"ts": "2026-10-10T23:10:34.535Z",
		"symbol": "1F916",
		"token": "0x9E00FC92493451EBA1c63DD3880D68b622037bA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 424096.09,
		"hash": "6c93874729d59f7eca728f24a882d2781d4232ab3f0de558f02cfd5aae86f4b3"
	},
	{
		"id": "62a667510292",
		"ts": "2026-10-10T19:13:21.144Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 148486302.03,
		"hash": "62a667510292cfdf46dd4bce4445658340141d06955c0cf8bb9e7885edfcbdcf"
	},
	{
		"id": "6b69c1322723",
		"ts": "2026-10-10T19:13:21.401Z",
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
		"liquidityUsd": 18261920.42,
		"hash": "6b69c1322723b884aed432554828c2ada2dc91a468aa3895a8a4399cd6b6a9de"
	},
	{
		"id": "1ac7d6415222",
		"ts": "2026-10-10T19:13:21.650Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 111480.69,
		"hash": "1ac7d6415222c2f032141bfbf7df79f6f8a96b75a413e24cc93507a05fa87af1"
	},
	{
		"id": "0b5a2227bbed",
		"ts": "2026-10-10T19:13:21.906Z",
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
		"liquidityUsd": 47075839.89,
		"hash": "0b5a2227bbedf8425d2996a79eeed0f293e10f955c40ea20ea2429a550e6fe1d"
	},
	{
		"id": "02a78bee2b2a",
		"ts": "2026-10-10T19:13:22.156Z",
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
		"liquidityUsd": 4931092.41,
		"hash": "02a78bee2b2a153546883abb15a59ca93f1d0c40d620ab94d3d0f992b6303896"
	},
	{
		"id": "43c024bacfdf",
		"ts": "2026-10-10T19:13:22.401Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1241460.11,
		"hash": "43c024bacfdf69227519491f59995716af244f4066f471b6b51cd541465d5d0b"
	},
	{
		"id": "5a70be6de079",
		"ts": "2026-10-10T19:13:22.646Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 47075839.89,
		"hash": "5a70be6de079734735dde73cc57b1e6115138514adb930785c1fd2cc5d513e50"
	},
	{
		"id": "82673d2b9c91",
		"ts": "2026-10-10T19:13:22.902Z",
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
		"liquidityUsd": 2305714.68,
		"hash": "82673d2b9c91ac6ad7f51da8eb55645b31e44e25b4e21c8c72c9515478b7c36e"
	},
	{
		"id": "6e90feede9ea",
		"ts": "2026-10-10T19:13:23.156Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1954043.37,
		"hash": "6e90feede9ea62a449522a0ed2b94c960bf98b5af22b3ea36936fce065165456"
	},
	{
		"id": "0846fc662b2d",
		"ts": "2026-10-10T19:13:23.413Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 5583410.83,
		"hash": "0846fc662b2dc499a0d18566036432282bba918f61966102d227def033da8a8e"
	},
	{
		"id": "351dd8699572",
		"ts": "2026-10-10T19:13:23.640Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4096507.06,
		"hash": "351dd8699572ee4fe94de7647286bfd1ed925fe748542f972da310851fe92d85"
	},
	{
		"id": "78e7e74f5e39",
		"ts": "2026-10-10T19:13:23.873Z",
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
		"liquidityUsd": 15525495.72,
		"hash": "78e7e74f5e39fb007062f147d189a1a9ec9c2f569c033ed8a29ff4f7e79c07af"
	},
	{
		"id": "13d207800106",
		"ts": "2026-10-10T19:13:24.102Z",
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
		"liquidityUsd": 3391633.83,
		"hash": "13d207800106b25629e8a6c47a603ff046c185cd24a09a499ab38b1932394e2a"
	},
	{
		"id": "75a28ef377db",
		"ts": "2026-10-10T19:13:24.336Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2207024.19,
		"hash": "75a28ef377db3c0878d235305d33f0869f1d562eb49682cb2eed3a0d62e3cc07"
	},
	{
		"id": "05255ceade1f",
		"ts": "2026-10-10T19:13:24.568Z",
		"symbol": "MAGIC",
		"token": "0xF1572d1Da5c3CcE14eE5a1c9327d17e9ff0E3f43",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 387927.64,
		"hash": "05255ceade1f8815e089fd8e6c601c5d61dcf2be9e6ee9fc265e6556ebb47f6c"
	}
]
