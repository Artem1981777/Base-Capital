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
	"updatedAt": "2026-08-20T12:39:26.857Z",
	"tokensScored": 12620,
	"verdictsIssued": 12620,
	"safe": 10908,
	"risky": 909,
	"likelyRug": 803,
	"ticks": 741
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "96481732bb41",
		"ts": "2026-08-20T12:39:21.415Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111183162.72,
		"hash": "96481732bb4186283f73886a81b4ba6eb75ad94189df728ed2d6eece5db3f876"
	},
	{
		"id": "993a1218b6d9",
		"ts": "2026-08-20T12:39:22.135Z",
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
		"liquidityUsd": 16825338.04,
		"hash": "993a1218b6d9360d91d98398ec39b3bcdc8d84cea7a88f81cad7b1dcd2bbab91"
	},
	{
		"id": "9581602db603",
		"ts": "2026-08-20T12:39:22.610Z",
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
		"liquidityUsd": 849553.51,
		"hash": "9581602db603c5ac19fd8f40a91b1cbdc8f33f906f1ac4c9d7bda238380238c5"
	},
	{
		"id": "2f9b0d4f3179",
		"ts": "2026-08-20T12:39:23.088Z",
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
		"liquidityUsd": 28190296.96,
		"hash": "2f9b0d4f31799dfc93bdc8699be6ec9072e03f64c1cca7cae97b715a98dd0e8e"
	},
	{
		"id": "f6c7c26825be",
		"ts": "2026-08-20T12:39:23.347Z",
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
		"liquidityUsd": 3202850.1,
		"hash": "f6c7c26825be86db51eef6a2de18d14900395b55f45853a79dd94f99593e6540"
	},
	{
		"id": "08be4109360f",
		"ts": "2026-08-20T12:39:23.609Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1065834.77,
		"hash": "08be4109360fcf229a45d3bfaaffaba4bcabfc86f14e40a291ab04f46411512d"
	},
	{
		"id": "17882bb4a0dd",
		"ts": "2026-08-20T12:39:23.893Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152699.6,
		"hash": "17882bb4a0dd33fc4c06479d681a859f4f48859f56085cda009922f392b7bf0d"
	},
	{
		"id": "d33fd33bd3ff",
		"ts": "2026-08-20T12:39:24.168Z",
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
		"liquidityUsd": 3727075.97,
		"hash": "d33fd33bd3ff155a7324e35bbdb1c9b15e1f662e898b1391219bcbb0c9d1a200"
	},
	{
		"id": "5c909a550d70",
		"ts": "2026-08-20T12:39:24.433Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4074123.73,
		"hash": "5c909a550d704b3b36200c60bebef838391d64bb6f0a2e747b9af131f07803b4"
	},
	{
		"id": "62602b582993",
		"ts": "2026-08-20T12:39:24.697Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3163536.38,
		"hash": "62602b58299369532c682fcb9e26f95c0c8b065145046fda2963b9b929113fdc"
	},
	{
		"id": "d8b248442d09",
		"ts": "2026-08-20T12:39:24.942Z",
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
		"liquidityUsd": 429770.9,
		"hash": "d8b248442d099682811905b4931d03c0ebe3be8f8b496369b5cc2ee2cdf1afba"
	},
	{
		"id": "0e8fb016001c",
		"ts": "2026-08-20T12:39:25.192Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 722619.33,
		"hash": "0e8fb016001cbe21b934a10bab8715f7ab12dce3893a9fe173700de7b900e87d"
	},
	{
		"id": "b752b64d1643",
		"ts": "2026-08-20T12:39:25.440Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4186308.87,
		"hash": "b752b64d1643a44a120b020db2ed242fcb737e8333a48cb4c43fb47c8ae0bd1a"
	},
	{
		"id": "e5a878d7bfbd",
		"ts": "2026-08-20T12:39:25.689Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 547017.79,
		"hash": "e5a878d7bfbdae06452f7f200c752a4d49dc16bf097d1a068fd2afdbf29593ad"
	},
	{
		"id": "f978e376be0f",
		"ts": "2026-08-20T12:39:25.935Z",
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
		"liquidityUsd": 533834.08,
		"hash": "f978e376be0fd1d375e1a94bcb6c7201d59a15bf6877d6ba18907619e98eab14"
	},
	{
		"id": "a59414bb4178",
		"ts": "2026-08-20T12:39:26.181Z",
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
		"liquidityUsd": 679942.63,
		"hash": "a59414bb41786f5ed6f7de8a8bc35e995f2c15bed626f28142c906e4d710e9ea"
	},
	{
		"id": "67fb5c2af650",
		"ts": "2026-08-20T12:39:26.613Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1662743.81,
		"hash": "67fb5c2af650f9c85d750b495303e429a0f05acaea84f0edd6d60d441f170752"
	},
	{
		"id": "b2d51d6b8b3f",
		"ts": "2026-08-20T12:39:26.856Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 327187.84,
		"hash": "b2d51d6b8b3f5ae1d44418124c9470da913877cfc68cf51b37a1af40822646df"
	},
	{
		"id": "eb3549afda52",
		"ts": "2026-08-20T11:22:26.746Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112094208.82,
		"hash": "eb3549afda521ebdd16ed3841ca890682b37190cc823f4f82f618bc4cccf7e32"
	},
	{
		"id": "bbaf37824e0a",
		"ts": "2026-08-20T11:22:26.997Z",
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
		"liquidityUsd": 16632334.56,
		"hash": "bbaf37824e0a619bb66dc5743b161c55f2adbb83d7696f38414e043d6cc79c46"
	},
	{
		"id": "c62efbb02d9b",
		"ts": "2026-08-20T11:22:27.248Z",
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
		"liquidityUsd": 857447.66,
		"hash": "c62efbb02d9bc1310d4e2a339a67b14782f997dcc03a1d28b7d16b01202ac032"
	},
	{
		"id": "967c4b502e94",
		"ts": "2026-08-20T11:22:27.573Z",
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
		"liquidityUsd": 27993062.88,
		"hash": "967c4b502e9469fff0cccacab8880e07e52db42f6993e9555f8ec33e65455201"
	},
	{
		"id": "7595aac1d9c7",
		"ts": "2026-08-20T11:22:27.814Z",
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
		"liquidityUsd": 3227423.14,
		"hash": "7595aac1d9c7fa096ba750a04b326eddee11c23be57d0bbc5b5b802353bca560"
	},
	{
		"id": "bb9faedefc7b",
		"ts": "2026-08-20T11:22:28.386Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1065409.01,
		"hash": "bb9faedefc7b2ba7532c7a9f7acc3d601a48eeb56d8195b92142ba2b6efe0fae"
	},
	{
		"id": "9f810c186f8c",
		"ts": "2026-08-20T11:22:28.625Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152699.44,
		"hash": "9f810c186f8c0cc935ba1020c2076fb9be7d82ec0080d0b5d7d7ff19192e67ec"
	},
	{
		"id": "3c419b33f0f8",
		"ts": "2026-08-20T11:22:28.868Z",
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
		"liquidityUsd": 3749107.31,
		"hash": "3c419b33f0f89f1f0f588e4fd4e2c17d494a00932ac7d306a7e9495dae605ad7"
	},
	{
		"id": "3368eff0b2b3",
		"ts": "2026-08-20T11:22:29.115Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3209969.72,
		"hash": "3368eff0b2b3cf18c586303aae4d9b9f9b75b82e49b33242d601eb5e8f995e46"
	},
	{
		"id": "342c579234bf",
		"ts": "2026-08-20T11:22:29.353Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4087305.44,
		"hash": "342c579234bf94047fa13feffff0baa7ac21b783ad4ca580ed4df4d6ef28cc82"
	},
	{
		"id": "7985d900eb9d",
		"ts": "2026-08-20T11:22:29.978Z",
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
		"liquidityUsd": 448992.44,
		"hash": "7985d900eb9d90a4ef308ece1da0deebebfc09c8efaa3271b809b8a967e47df3"
	},
	{
		"id": "99cc5d696867",
		"ts": "2026-08-20T11:22:30.204Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 547095.37,
		"hash": "99cc5d69686721e47360f0011a3758bf6880511564940d7dc9171f2282095800"
	},
	{
		"id": "877fa87b5256",
		"ts": "2026-08-20T11:22:30.427Z",
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
		"liquidityUsd": 4254722.64,
		"hash": "877fa87b5256f177ef718f9ceb9a6d4bf9acd34fa016b007275ffdf144975370"
	},
	{
		"id": "8a6f40c88ef7",
		"ts": "2026-08-20T11:22:30.653Z",
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
		"liquidityUsd": 543947.95,
		"hash": "8a6f40c88ef7c59924f2d25dfbb2790b09e4ec615936ac3a0122938041d6390e"
	},
	{
		"id": "dc15a86aba2c",
		"ts": "2026-08-20T11:22:30.880Z",
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
		"liquidityUsd": 685535.74,
		"hash": "dc15a86aba2c89a556c9ce4aa53f24bf051897419353f0ab6a3d9bd63b913ef3"
	},
	{
		"id": "ea438d68a5a1",
		"ts": "2026-08-20T11:22:31.106Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1670337.3,
		"hash": "ea438d68a5a1a70b9d73a7b511af67dede74025ad52bada15583301f3ff0b54e"
	},
	{
		"id": "d5df97de6e23",
		"ts": "2026-08-20T11:22:31.330Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 883827.69,
		"hash": "d5df97de6e231649077c1c5905b501695aedb832272ae235ab407c4976cf62b8"
	},
	{
		"id": "9a145b7a6747",
		"ts": "2026-08-20T10:25:18.578Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111899442.03,
		"hash": "9a145b7a6747d467d69f8f3e91e1f844bd959c529f33e35e105ec43b42f14275"
	},
	{
		"id": "c45ba495ef6f",
		"ts": "2026-08-20T10:25:19.414Z",
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
		"liquidityUsd": 13275967.04,
		"hash": "c45ba495ef6fb746806bf53d1fa28b2ce666659a5466be7646324d6a8b24edbc"
	},
	{
		"id": "039149a43086",
		"ts": "2026-08-20T10:25:19.652Z",
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
		"liquidityUsd": 853346.39,
		"hash": "039149a4308623da5ad0e50c209df850cc9a143a84ea29b62a8eebc48cf84335"
	},
	{
		"id": "1537be55d9d7",
		"ts": "2026-08-20T10:25:19.883Z",
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
		"liquidityUsd": 27348198.42,
		"hash": "1537be55d9d7648eb3b1d9decbdf6e3a285452bfdb1c2deb1a55f87f52a6e8ca"
	},
	{
		"id": "bff295c4b543",
		"ts": "2026-08-20T10:25:20.114Z",
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
		"liquidityUsd": 3250458.34,
		"hash": "bff295c4b543af33c4c956ab368dac4820b5669133647623b06bf3b4bed7c995"
	},
	{
		"id": "3f81322cf7c0",
		"ts": "2026-08-20T10:25:20.353Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1057231.1,
		"hash": "3f81322cf7c0ccadd46b9822b87863d42cc723e1b6feb29cc4250616b10727ca"
	},
	{
		"id": "c252f343dedb",
		"ts": "2026-08-20T10:25:20.596Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152699.19,
		"hash": "c252f343dedbdafbe1989e5672f1af99b81e47d4ebd2e50de2b5553d53590d13"
	},
	{
		"id": "02312abd4376",
		"ts": "2026-08-20T10:25:20.821Z",
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
		"liquidityUsd": 3744417.18,
		"hash": "02312abd43768e21bf18be60bbaecf034662a4a2114600fad7258bbdb330e233"
	},
	{
		"id": "e2edddb1dcb9",
		"ts": "2026-08-20T10:25:21.178Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3239306.78,
		"hash": "e2edddb1dcb9b42a9e177d0a2af9976e202d7c3286767a349ab96226a7dfa547"
	},
	{
		"id": "e00b747f0b7b",
		"ts": "2026-08-20T10:25:21.413Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4055468,
		"hash": "e00b747f0b7be372452673990f012709a6986d97e1c7c3508d871a4dbacf2bcc"
	},
	{
		"id": "fd2fd39eb952",
		"ts": "2026-08-20T10:25:21.633Z",
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
		"liquidityUsd": 444143.74,
		"hash": "fd2fd39eb952875c89329114b686c6a325a5c79ae46163949f0875db836295d2"
	},
	{
		"id": "660a113c4756",
		"ts": "2026-08-20T10:25:21.844Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 541393.94,
		"hash": "660a113c4756d6b4a7f8fd4ffa080a9f0728335fc094098d881fcc62b1c967a0"
	},
	{
		"id": "1559254a9ad2",
		"ts": "2026-08-20T10:25:22.137Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4311393.49,
		"hash": "1559254a9ad27f1cf6d976546e6521a59cfe32e7f25db8f27431dc046080378e"
	},
	{
		"id": "93cbd228e4bd",
		"ts": "2026-08-20T10:25:22.348Z",
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
		"liquidityUsd": 574462.8,
		"hash": "93cbd228e4bd71c8608fd2e6f4041b8cf941f2545e7a5ef0d7900256c33dbdf3"
	},
	{
		"id": "47d989ff32fa",
		"ts": "2026-08-20T10:25:22.567Z",
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
		"liquidityUsd": 702123.81,
		"hash": "47d989ff32fa1da1bc5f21aa31dceab5402e74e9fd27fc5e86e1617394c1a165"
	},
	{
		"id": "9dea2ea78194",
		"ts": "2026-08-20T10:25:22.787Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1672894.55,
		"hash": "9dea2ea78194ef6e58ac33ce30d168e27b0e09d0fc88fe095e4d6d3a3b85d69b"
	},
	{
		"id": "6ebb097874f5",
		"ts": "2026-08-20T10:25:22.996Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 884991.52,
		"hash": "6ebb097874f5928ba7b8f565fb6fc9240e5bc8bbb7703a2aad663aef003ea0e9"
	},
	{
		"id": "f369e3e2416c",
		"ts": "2026-08-20T09:29:39.333Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111823195.74,
		"hash": "f369e3e2416c93472e5cf6ceb5dc2b9ca421cad034bee6cfe7cfe616b8d7d1af"
	},
	{
		"id": "f34fa2174e51",
		"ts": "2026-08-20T09:29:39.772Z",
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
		"liquidityUsd": 16117826.99,
		"hash": "f34fa2174e51cc27f824f49a9f0470411e9f69e5300152a04c851c2c3d67c9b5"
	},
	{
		"id": "8683b30090e6",
		"ts": "2026-08-20T09:29:40.026Z",
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
		"liquidityUsd": 849631.36,
		"hash": "8683b30090e6f7d10ca46ea23fed05f04e60aa4d6f12956135900a9685eb4ca4"
	},
	{
		"id": "1731ee2a1934",
		"ts": "2026-08-20T09:29:40.285Z",
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
		"liquidityUsd": 27423660.3,
		"hash": "1731ee2a1934e295a5010eed25de75747e9c4ff9b2319fa01cfe9fb38d602243"
	},
	{
		"id": "1ade2013208e",
		"ts": "2026-08-20T09:29:40.542Z",
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
		"liquidityUsd": 3162718.13,
		"hash": "1ade2013208eb4818d0d84bbe6562c200c620c856f2a85896eb86d75c0205c0d"
	},
	{
		"id": "ef47ebafa7e0",
		"ts": "2026-08-20T09:29:40.798Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1062075.61,
		"hash": "ef47ebafa7e0333ddf561d86b716d6cf571807d719939255aeaad5ff88f36480"
	},
	{
		"id": "c278f2daaf5c",
		"ts": "2026-08-20T09:29:41.048Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152694.8,
		"hash": "c278f2daaf5c4fb0d89b7f5ef2725e8015c5faa666a5412be0f7e4caff4f5a6c"
	},
	{
		"id": "f1389b04d625",
		"ts": "2026-08-20T09:29:41.299Z",
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
		"liquidityUsd": 3751626.83,
		"hash": "f1389b04d625c25beae1603b66984562ceac0f5822e210ac0119223a07d25c3e"
	},
	{
		"id": "22401fa4135f",
		"ts": "2026-08-20T09:29:41.551Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3130410.69,
		"hash": "22401fa4135f685379cd4258e2dbca9d592d1bf772074dcb556f1322598eed4d"
	},
	{
		"id": "d793859b5bd5",
		"ts": "2026-08-20T09:29:41.808Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4055811.55,
		"hash": "d793859b5bd5838119432533f230078c97ad0dd5733599cd2ee66bb937192e2a"
	},
	{
		"id": "d071516a5b5e",
		"ts": "2026-08-20T09:29:42.041Z",
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
		"liquidityUsd": 452121.02,
		"hash": "d071516a5b5ecf0119cb5a0887a296b90ad9f37bb249366d64e9f62339fe9273"
	},
	{
		"id": "0308a7574b17",
		"ts": "2026-08-20T09:29:42.274Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4286102.36,
		"hash": "0308a7574b1743826791386fe521b8d602c003df99a694990f72587400a6deb2"
	},
	{
		"id": "859539309079",
		"ts": "2026-08-20T09:29:42.506Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 533212.64,
		"hash": "859539309079c4c870da155a7226794c4f2c10efffc05dea5cfd28a1cd4542e9"
	},
	{
		"id": "c29c9d559745",
		"ts": "2026-08-20T09:29:42.740Z",
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
		"liquidityUsd": 573763.43,
		"hash": "c29c9d5597456b52f412db64c991d463f9a7b1ab121e2a60c465c90dcc8acec3"
	},
	{
		"id": "de3aef32e76b",
		"ts": "2026-08-20T09:29:43.025Z",
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
		"liquidityUsd": 706383.11,
		"hash": "de3aef32e76b439dcbeed129157baa3976ebfd4354883d4b790c7577cc900fdd"
	},
	{
		"id": "6ed21087509a",
		"ts": "2026-08-20T09:29:43.278Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1679163.25,
		"hash": "6ed21087509a820053ce0a423bc1f2ac6c070fc8fe7eb3733c7da3b769b3211e"
	},
	{
		"id": "91680f995736",
		"ts": "2026-08-20T09:29:43.518Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 885348.23,
		"hash": "91680f995736085ecf1ce0f00f0f7cd180549d5202714c3e00c796156d136363"
	},
	{
		"id": "47be841e5a30",
		"ts": "2026-08-20T08:33:24.158Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111812673.33,
		"hash": "47be841e5a305aec3f87c78d3567a505bc73fbb089f0ed4759a2d48d4ac34f77"
	},
	{
		"id": "5f1754c01040",
		"ts": "2026-08-20T08:33:24.604Z",
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
		"liquidityUsd": 13149932.12,
		"hash": "5f1754c010402bd7feca1a5a46a2d1ed09c743d635dc2559fde6a7f3440107b9"
	},
	{
		"id": "b79e439abb4b",
		"ts": "2026-08-20T08:33:24.850Z",
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
		"liquidityUsd": 845551.68,
		"hash": "b79e439abb4b5c68473b9f14a8d9442629c0908b15e92186315c5028e4a08d10"
	},
	{
		"id": "a658d8c66ff1",
		"ts": "2026-08-20T08:33:25.095Z",
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
		"liquidityUsd": 27500289.05,
		"hash": "a658d8c66ff10a84ca9e12cea5c5c4d4e1ff299372ce0ad6207b0f75869c30bf"
	},
	{
		"id": "7ab78177d831",
		"ts": "2026-08-20T08:33:25.335Z",
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
		"liquidityUsd": 3038899.49,
		"hash": "7ab78177d83163ef9946485f82c2c59fb37645739ec0c2a53905e51296b24d5e"
	},
	{
		"id": "b9bf8c35dea2",
		"ts": "2026-08-20T08:33:25.572Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1046106.99,
		"hash": "b9bf8c35dea2e1e49502479c5e89135916b5d60326bbd0bad7739f417ff1a1f3"
	},
	{
		"id": "e81a56644c18",
		"ts": "2026-08-20T08:33:25.815Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152693.38,
		"hash": "e81a56644c185c83879f5363417b42cfe1f4b02a0242557ec265ac58a8530c93"
	},
	{
		"id": "84b6f2ce9174",
		"ts": "2026-08-20T08:33:26.054Z",
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
		"liquidityUsd": 3720123.26,
		"hash": "84b6f2ce9174ee3c6ded43874aac3f86718d4ed3b75ca21fba0e12ead9e60b66"
	},
	{
		"id": "5222095f98b4",
		"ts": "2026-08-20T08:33:26.300Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3079332.4,
		"hash": "5222095f98b42db76360005013bacfac8ab810b44ef75de598f6be29722283d2"
	},
	{
		"id": "ea5c941dd1d2",
		"ts": "2026-08-20T08:33:26.540Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4036146.97,
		"hash": "ea5c941dd1d222252597977df6ae154d6dbc3efa9d45def433d04860c6c2cfe2"
	},
	{
		"id": "27cc5409807b",
		"ts": "2026-08-20T08:33:26.770Z",
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
		"liquidityUsd": 449134.38,
		"hash": "27cc5409807b783d423558b6b81ef34b15145559b4094d05faec36b1606a845c"
	},
	{
		"id": "59ec25f2cfd5",
		"ts": "2026-08-20T08:33:26.997Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4238031.09,
		"hash": "59ec25f2cfd51ecabf8b3242252ce54914522b43d5129e82b9a7110e02f6d256"
	},
	{
		"id": "9f8219516127",
		"ts": "2026-08-20T08:33:27.408Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 566339.45,
		"hash": "9f8219516127b9c2b35f286d9662d090c1911bc95ecc6f6a7870a0043d32bf1a"
	},
	{
		"id": "ab5079f9fc32",
		"ts": "2026-08-20T08:33:27.766Z",
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
		"liquidityUsd": 576783.7,
		"hash": "ab5079f9fc32cfc094e777f9a3e0ee1f66e17ae9f5174117b22e15ce36649983"
	},
	{
		"id": "092e9594e240",
		"ts": "2026-08-20T08:33:27.990Z",
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
		"liquidityUsd": 705594.15,
		"hash": "092e9594e2400fd86c7b8f33a5f969509c626879e2efcd65b5e7d01522b6f1b9"
	},
	{
		"id": "f03cf049b7cb",
		"ts": "2026-08-20T08:33:28.270Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1673174.48,
		"hash": "f03cf049b7cbb68d2105aa51ba4c4bcbbff7a2b46fa01866b00e1322b15809c4"
	},
	{
		"id": "6ee075d5dd23",
		"ts": "2026-08-20T08:33:28.497Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 882953.28,
		"hash": "6ee075d5dd23e476806e3353a9742425c9200636f2cc7659a0d8fced4e3fbdce"
	},
	{
		"id": "864fc7863031",
		"ts": "2026-08-20T07:37:22.324Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111092605.91,
		"hash": "864fc7863031af6de4c3b583f29dadc1c899da7cb77cefc70074378578801f28"
	},
	{
		"id": "8a6ab632c4ef",
		"ts": "2026-08-20T07:37:22.749Z",
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
		"liquidityUsd": 16822047.98,
		"hash": "8a6ab632c4ef46b7f3337e246d1def562801914a8af9ea4eb46dd03f1745c1d9"
	},
	{
		"id": "4eb71d6493a7",
		"ts": "2026-08-20T07:37:23.197Z",
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
		"liquidityUsd": 837049.61,
		"hash": "4eb71d6493a7779f6286b5ab873542791884193c98b730ae9fb9b97ee1bfe37b"
	},
	{
		"id": "91b108cf9517",
		"ts": "2026-08-20T07:37:23.442Z",
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
		"liquidityUsd": 27210127.36,
		"hash": "91b108cf95178a3db6beebd314c08baac1a8e75a404f3dc30b0a789abbbad1b8"
	},
	{
		"id": "c13f70c6abdf",
		"ts": "2026-08-20T07:37:23.667Z",
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
		"liquidityUsd": 3006625.93,
		"hash": "c13f70c6abdffca16850fb8bfbc508db7a41e8fe4b57b714737c2efc7635fa3d"
	},
	{
		"id": "66c917aa1f16",
		"ts": "2026-08-20T07:37:23.902Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1032780.71,
		"hash": "66c917aa1f162ef6b9e2bbe5beff484f8ab6056113517b47efeaa266558c0852"
	},
	{
		"id": "e866bce2714d",
		"ts": "2026-08-20T07:37:24.138Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152689.16,
		"hash": "e866bce2714d3d5c935cbfbd1c22e68d7338697201c4fa87fe80e21a7d1365eb"
	},
	{
		"id": "12579be6dc78",
		"ts": "2026-08-20T07:37:24.364Z",
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
		"liquidityUsd": 3725621.11,
		"hash": "12579be6dc7869d27f58773f11df58e2b0c3a2118cd451869cc8ce03a5f73a43"
	},
	{
		"id": "490102bb04df",
		"ts": "2026-08-20T07:37:24.600Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3047494.31,
		"hash": "490102bb04df2d95c2b163673df23040350c015bd0bf9b5131ac37d6c65a75e7"
	},
	{
		"id": "34fe50d0c7f5",
		"ts": "2026-08-20T07:37:24.837Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3986160.83,
		"hash": "34fe50d0c7f574bfe9028382029584ce4b12efa7df6ac97e735b4467968bed96"
	},
	{
		"id": "be8922bb560f",
		"ts": "2026-08-20T07:37:25.048Z",
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
		"liquidityUsd": 456315.17,
		"hash": "be8922bb560f1d5070fd90f5d977f7076502c763d47807fc36e7e1d793c1a0a9"
	},
	{
		"id": "aab96bc5b53f",
		"ts": "2026-08-20T07:37:25.267Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4269327.65,
		"hash": "aab96bc5b53f1c82cf9439fa88a29fe77ccd2b39429a46969cbf9c0416fdcfa0"
	},
	{
		"id": "99f92a637c92",
		"ts": "2026-08-20T07:37:25.487Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 570367.33,
		"hash": "99f92a637c92d69f4fd1c001122df8fb348c22ecaebf3ce22e53286bbe377843"
	},
	{
		"id": "edc58d3ad24c",
		"ts": "2026-08-20T07:37:25.697Z",
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
		"liquidityUsd": 571648.67,
		"hash": "edc58d3ad24cde9efa058c846cb7c6622e1e3b9b479fde49c59ddc2bf0afa1a3"
	},
	{
		"id": "60c93c5c6126",
		"ts": "2026-08-20T07:37:25.917Z",
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
		"liquidityUsd": 699062.8,
		"hash": "60c93c5c61268ab4bc96fca8581354e45ac6825f6e4eaf349ddbc9da3837d0fb"
	},
	{
		"id": "0d6f2b9e29a7",
		"ts": "2026-08-20T07:37:26.135Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1683570.86,
		"hash": "0d6f2b9e29a74eb165336a6597e8131701d9ca940ebb59b7ad3a8cbf045f8e5c"
	},
	{
		"id": "3b2921302ce3",
		"ts": "2026-08-20T07:37:26.345Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 885204.89,
		"hash": "3b2921302ce3ba5191ab8b68d580863d33b33319ed377059f236cfde2e634a01"
	},
	{
		"id": "a36f47c1015b",
		"ts": "2026-08-20T07:37:26.563Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 66697.8,
		"hash": "a36f47c1015bab8bcca247840e6a0152f795a7695e04ff1dfab9f55ca504a185"
	},
	{
		"id": "1e11a07e8a22",
		"ts": "2026-08-20T06:38:44.298Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111071442.33,
		"hash": "1e11a07e8a22e540246e1a88f174ebc1b0b47a04581d115530c9f2bd35c6a025"
	},
	{
		"id": "c76acc65ff24",
		"ts": "2026-08-20T06:38:44.630Z",
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
		"liquidityUsd": 16885047.54,
		"hash": "c76acc65ff24366008d40ef4284c566045d4dc4c10d4527b82dfaa98af43f0ca"
	},
	{
		"id": "f85189f56047",
		"ts": "2026-08-20T06:38:44.964Z",
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
		"liquidityUsd": 859237.62,
		"hash": "f85189f56047acc3a97fdc68e246067a5169e4a928f6d4ab4075d93b117f0639"
	},
	{
		"id": "fabf32a615e5",
		"ts": "2026-08-20T06:38:45.247Z",
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
		"liquidityUsd": 27271522.05,
		"hash": "fabf32a615e54ed68778c91891bb86053a23d2d16b240e04a45406b1e6199e80"
	},
	{
		"id": "782760e390f0",
		"ts": "2026-08-20T06:38:45.433Z",
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
		"liquidityUsd": 3017318.82,
		"hash": "782760e390f057f7c050da2ec87244000b41faaa75ec7c8c976c56fe2761063a"
	},
	{
		"id": "ac931f3b7e6e",
		"ts": "2026-08-20T06:38:45.652Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1018860.53,
		"hash": "ac931f3b7e6e58526250d5a8d979153e09820fae52b17fe57874222d34ca2b8d"
	},
	{
		"id": "88fe42634eed",
		"ts": "2026-08-20T06:38:45.853Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152680.83,
		"hash": "88fe42634eed612047b97f197628a68335b28e93b65a7f5fa3e36842e6dccb84"
	},
	{
		"id": "4c52fc25e411",
		"ts": "2026-08-20T06:38:46.037Z",
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
		"liquidityUsd": 3993274.68,
		"hash": "4c52fc25e411a3adc33a67b26d7cd918f20595c50b4cf9945fd907d361f9f9de"
	},
	{
		"id": "b1155771af37",
		"ts": "2026-08-20T06:38:46.221Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3983695.01,
		"hash": "b1155771af37ebec31cf860746439ce3e240b4708f2827ac94caa52cbfc16927"
	},
	{
		"id": "047acdf989e1",
		"ts": "2026-08-20T06:38:46.409Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3037628.82,
		"hash": "047acdf989e10ba25bab1526ee7fee4140f38c367d5d1004f709639abff88bbd"
	},
	{
		"id": "428696ce5118",
		"ts": "2026-08-20T06:38:46.598Z",
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
		"liquidityUsd": 458292.71,
		"hash": "428696ce5118a7a0f8ea63ef9c99b4e5122a7091b142ae85eb1cf143164d253d"
	},
	{
		"id": "795dbb85254b",
		"ts": "2026-08-20T06:38:46.786Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4330800.35,
		"hash": "795dbb85254bfcdefeb7ede40e436f0a5a5f0cb587c17a16ac3dfe93f2dc04cb"
	},
	{
		"id": "9c3383a4bb67",
		"ts": "2026-08-20T06:38:46.968Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 571716.63,
		"hash": "9c3383a4bb67dd77d47d1cc8ad5b9556aca3ddbee2c665312fa7e52328340f80"
	},
	{
		"id": "2a706cf2989a",
		"ts": "2026-08-20T06:38:47.151Z",
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
		"liquidityUsd": 541288.16,
		"hash": "2a706cf2989af3fa85d4621b53688285b66aa81f02c13c5fa6eb643621f870d9"
	},
	{
		"id": "91c822507cb4",
		"ts": "2026-08-20T06:38:47.339Z",
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
		"liquidityUsd": 704691.81,
		"hash": "91c822507cb465198d40c3689b9f15e0f81a04e3716da1a703615a7f91264a36"
	},
	{
		"id": "af67f9235337",
		"ts": "2026-08-20T06:38:47.527Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 887024.84,
		"hash": "af67f9235337218a5569e1d556863415599430a2ebc02990c2eb5f642b99b56b"
	},
	{
		"id": "d3c92f861017",
		"ts": "2026-08-20T06:38:47.711Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1676882.94,
		"hash": "d3c92f861017d555875c88b81f5b8ce586550c4d4eeaa1f4e91e9136798ea01d"
	},
	{
		"id": "b7c117242f44",
		"ts": "2026-08-20T06:38:47.920Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 66659.89,
		"hash": "b7c117242f448e653150aa2cb2bc83fb8b29c784bee481927004739e4050669b"
	},
	{
		"id": "27e609effa09",
		"ts": "2026-08-20T05:25:33.263Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111046290.01,
		"hash": "27e609effa098d37364c7f5c2b5a228c46deda3745fa4c5a0fa6e702a3b166cf"
	},
	{
		"id": "72aecfc6d29c",
		"ts": "2026-08-20T05:25:33.496Z",
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
		"liquidityUsd": 16876753.51,
		"hash": "72aecfc6d29ca901816b032be587acf6bf9dc18852f475d339b82c7cfb20c81d"
	},
	{
		"id": "1bc1d1ecb3f3",
		"ts": "2026-08-20T05:25:33.767Z",
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
		"liquidityUsd": 856634.66,
		"hash": "1bc1d1ecb3f32f72121626ad4acae0c150387aed8dc2e3d6c3c83b030ac71b1e"
	},
	{
		"id": "36e71746c8d6",
		"ts": "2026-08-20T05:25:34.000Z",
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
		"liquidityUsd": 27204194.28,
		"hash": "36e71746c8d6127ea5443fdcea6f83c654b30ed061e3fa92a9a87a318a86bd31"
	},
	{
		"id": "8d400a0afb2e",
		"ts": "2026-08-20T05:25:34.237Z",
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
		"liquidityUsd": 2966315.19,
		"hash": "8d400a0afb2e6f2f70a2650842e563f7dd9a3776717facda23461156767d863e"
	},
	{
		"id": "18555dbd01b3",
		"ts": "2026-08-20T05:25:34.475Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1016306.18,
		"hash": "18555dbd01b359f4e5ce502de1c9fa622764b41ea8b8bc228b9cb53150e857d5"
	},
	{
		"id": "7ef50ac63dab",
		"ts": "2026-08-20T05:25:34.707Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152689.1,
		"hash": "7ef50ac63dabb1662e3b74dafc04e8ad1a46b7463a9f7c972a233e52c5aa40d8"
	},
	{
		"id": "5dd1fddcd6a5",
		"ts": "2026-08-20T05:25:34.941Z",
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
		"liquidityUsd": 3986607.66,
		"hash": "5dd1fddcd6a568dda4a6721978d8443725ea9df70b40c484c495f4a511ac509b"
	},
	{
		"id": "45fc40c3a19a",
		"ts": "2026-08-20T05:25:35.231Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2983104.36,
		"hash": "45fc40c3a19aba8fd4c6a1d23ac94bbf4a76d89bd0dded39ecd533333e5c7393"
	},
	{
		"id": "882a551aea22",
		"ts": "2026-08-20T05:25:35.468Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4021572.08,
		"hash": "882a551aea2285f1e5b291d2b3dcb02b7186479555621a77e71765ae288d59f6"
	},
	{
		"id": "92772529635b",
		"ts": "2026-08-20T05:25:35.686Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4385513.57,
		"hash": "92772529635b755f3873dcb6deae93f09b4c5d5d019fc66d076f36bd35caeada"
	},
	{
		"id": "d2e570b63c40",
		"ts": "2026-08-20T05:25:35.903Z",
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
		"liquidityUsd": 471214.87,
		"hash": "d2e570b63c4058632c8173d9fd66be83d31db19a4b499e888ca80697966474cf"
	},
	{
		"id": "0e3e408ae19c",
		"ts": "2026-08-20T05:25:36.113Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 569579.96,
		"hash": "0e3e408ae19ce841f1c2669561ee3712f07ce033a592fb80ba442441247ac348"
	},
	{
		"id": "4c48e145a4e3",
		"ts": "2026-08-20T05:25:36.335Z",
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
		"liquidityUsd": 523623.23,
		"hash": "4c48e145a4e3b3737e3b8bfaf6fc91700bbb81205bab852018af3e97901dd22d"
	},
	{
		"id": "38bdff8d886d",
		"ts": "2026-08-20T05:25:36.552Z",
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
		"liquidityUsd": 707794.21,
		"hash": "38bdff8d886dbba23523201380f0bfb624649f9f772ad47f0a9b56460817f68c"
	},
	{
		"id": "83346a112e92",
		"ts": "2026-08-20T05:25:36.771Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 890280.55,
		"hash": "83346a112e922953e604d3e9b844ae2e20aa92cd37649cd242a1ed491bf8ffb1"
	},
	{
		"id": "c53fcbb2b573",
		"ts": "2026-08-20T05:25:36.982Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1675684.74,
		"hash": "c53fcbb2b57306001bb4a23473e63b64e918f4c583c6d77f8dcbc3c784fcc616"
	},
	{
		"id": "2dc5781fa16e",
		"ts": "2026-08-20T05:25:37.206Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 69162.04,
		"hash": "2dc5781fa16e1bde2015472b8ef63257dc5d87ffe8f9050eb188a5f8561abd72"
	},
	{
		"id": "84999634a275",
		"ts": "2026-08-20T04:32:57.871Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111114498.7,
		"hash": "84999634a2752a8de50a14895f514f40696b3ca8f598f75f217f4adcb6970da2"
	},
	{
		"id": "15d46cf2c0d5",
		"ts": "2026-08-20T04:32:58.329Z",
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
		"liquidityUsd": 16238233.61,
		"hash": "15d46cf2c0d5fba88159bce1a30789dcf1976952fe5e35f64751fff62761dbee"
	},
	{
		"id": "b812422a8969",
		"ts": "2026-08-20T04:32:58.767Z",
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
		"liquidityUsd": 858019.44,
		"hash": "b812422a8969845ab2afa9bdb988e13bb73ef3dc766f0ef1929cdc85a0a65f53"
	},
	{
		"id": "12276efb7bcb",
		"ts": "2026-08-20T04:32:59.008Z",
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
		"liquidityUsd": 27226817.89,
		"hash": "12276efb7bcb8e5a59d33e85d511e8fec2a08d69bfe483d2d26f9ceafbcd9272"
	},
	{
		"id": "a479f030951d",
		"ts": "2026-08-20T04:32:59.262Z",
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
		"liquidityUsd": 2921457.1,
		"hash": "a479f030951dbc43a182bb03f2ed461039e180afe104ed98ad8d2775a3e4df0a"
	},
	{
		"id": "035ac158bd66",
		"ts": "2026-08-20T04:32:59.498Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1018656.81,
		"hash": "035ac158bd66c93bcca1f7c71ca108a577c2fb061a2c5a60617e16798fe7ad3b"
	},
	{
		"id": "a1e5d9d94bb0",
		"ts": "2026-08-20T04:32:59.730Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152683.53,
		"hash": "a1e5d9d94bb0862cea2b2188d3a1b76a196155bf0ed7f8b913b0f0017e546f05"
	},
	{
		"id": "0f7973089d59",
		"ts": "2026-08-20T04:33:00.185Z",
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
		"liquidityUsd": 3986207.93,
		"hash": "0f7973089d59117d674f891abe550e1398d7c7f025ded608c2bee6e05f1b4f71"
	},
	{
		"id": "07075ab9658f",
		"ts": "2026-08-20T04:33:00.422Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4033806.04,
		"hash": "07075ab9658f9edf934c7c63b28529f151fb3b3f519080ce7c3d71a78f7ddcf3"
	},
	{
		"id": "e9dbd191818d",
		"ts": "2026-08-20T04:33:00.886Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2985812.67,
		"hash": "e9dbd191818d2bc0e00149fd09a3092629c50ce076fd7d00007fe769024cbf53"
	},
	{
		"id": "80311385fd72",
		"ts": "2026-08-20T04:33:01.124Z",
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
		"liquidityUsd": 4378480.47,
		"hash": "80311385fd721e01c00c500c21032786dd08f7282cfc92b616831e4a2565896c"
	},
	{
		"id": "1d53d2c6f9e2",
		"ts": "2026-08-20T04:33:01.572Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 472501.07,
		"hash": "1d53d2c6f9e2ebb8ea16d7f76d7af135dcfbe93d4cfd9e23c45abfba4aab66ba"
	},
	{
		"id": "b67b27545ae3",
		"ts": "2026-08-20T04:33:02.015Z",
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
		"liquidityUsd": 571406.36,
		"hash": "b67b27545ae35bf3fab2c1c3ad494439384702bccd6210fe52df71b4678628c6"
	},
	{
		"id": "d1ad768ba134",
		"ts": "2026-08-20T04:33:02.258Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 526152.29,
		"hash": "d1ad768ba13478fb582ed81f77162fcc79e30a760e5d337bc39e7f8bad6909a3"
	},
	{
		"id": "4c383ab4de18",
		"ts": "2026-08-20T04:33:02.489Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 885917.23,
		"hash": "4c383ab4de18e48dba5d4acf9bd2a471caf2541449c24d80aa5781043d8083d9"
	},
	{
		"id": "e588bca30a65",
		"ts": "2026-08-20T04:33:03.065Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 70270.03,
		"hash": "e588bca30a65b9ec39b4d54b99faadd12e3cfa4e446041e854ff1f952ebc7ede"
	},
	{
		"id": "49192ec1fac8",
		"ts": "2026-08-20T04:33:03.301Z",
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
		"liquidityUsd": 11197863.49,
		"hash": "49192ec1fac87c63e267b8845e49bfc058c650653e987566ace5384ce7451890"
	},
	{
		"id": "c2f47b617740",
		"ts": "2026-08-20T04:33:03.535Z",
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
		"liquidityUsd": 705122.91,
		"hash": "c2f47b617740f3a4084dc3d5419804bc7e9a7b11c3dd9471d6b2add58c8fbd24"
	},
	{
		"id": "fdafb0653b82",
		"ts": "2026-08-20T03:42:42.392Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110980899.01,
		"hash": "fdafb0653b82c0f019f4cfc5be196a4107fdb6146637e7ac74cfd08a4e761984"
	},
	{
		"id": "85792e6b09b4",
		"ts": "2026-08-20T03:42:42.844Z",
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
		"liquidityUsd": 13112724.07,
		"hash": "85792e6b09b492093028ecffa845cb850a2ab21e0f29747d806493a7e21448e7"
	},
	{
		"id": "c90cede76129",
		"ts": "2026-08-20T03:42:43.314Z",
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
		"liquidityUsd": 858733.13,
		"hash": "c90cede76129747d63e8f43c61449f128c4f1120b9444ac76030912cbb35b202"
	},
	{
		"id": "8333f1a6f4ea",
		"ts": "2026-08-20T03:42:43.576Z",
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
		"liquidityUsd": 27110170.84,
		"hash": "8333f1a6f4ea18245c6ed00402fb6836e296f56eb655e5ebde3e329c32c969aa"
	},
	{
		"id": "2e153b25e1e7",
		"ts": "2026-08-20T03:42:43.832Z",
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
		"liquidityUsd": 2915831.39,
		"hash": "2e153b25e1e782a0f3893be8d3bb1740b56d2251cc2bff501a487496a4a00078"
	},
	{
		"id": "8a5e0dfd03f2",
		"ts": "2026-08-20T03:42:44.099Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1015638.55,
		"hash": "8a5e0dfd03f2dc89885903ffdf00a570c252a7e0518b7ea13b2b125400bab94b"
	},
	{
		"id": "8c80d0233af3",
		"ts": "2026-08-20T03:42:44.356Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152683.74,
		"hash": "8c80d0233af33d6374242c9260911b1bedbad327fa42c0026b6c3a87009948a7"
	},
	{
		"id": "439650671705",
		"ts": "2026-08-20T03:42:44.613Z",
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
		"liquidityUsd": 1550025.1,
		"hash": "43965067170564133d940f76e3592d4f8ad744e3a5a6d80d6fb5ca4ed2a4898f"
	},
	{
		"id": "4cba4c8aecb4",
		"ts": "2026-08-20T03:42:44.878Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4006976.99,
		"hash": "4cba4c8aecb459688486d46985da507cb22e7678e6ad99ff61e8548cf7db87bf"
	},
	{
		"id": "254a14ed2c6b",
		"ts": "2026-08-20T03:42:45.140Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2991060.28,
		"hash": "254a14ed2c6b1f4e7d07531408747766fa71fd4678b0605b00c15aa6bb47a5ad"
	},
	{
		"id": "12ce0a5c7e16",
		"ts": "2026-08-20T03:42:45.379Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4422841.75,
		"hash": "12ce0a5c7e16066b576a8826fe77a9677fdd274495e851c0331af1548e00ecf8"
	},
	{
		"id": "ab0409a30962",
		"ts": "2026-08-20T03:42:45.630Z",
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
		"liquidityUsd": 438976.24,
		"hash": "ab0409a30962092fc10400d51d1d9595f4896afc85896688513d8799e875febd"
	},
	{
		"id": "e7638a1d5b16",
		"ts": "2026-08-20T03:42:45.877Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 571351.64,
		"hash": "e7638a1d5b16635cb9205df36ccdd6730722078908ecbcf50f272db853d6e249"
	},
	{
		"id": "5602d59bf5ca",
		"ts": "2026-08-20T03:42:46.116Z",
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
		"liquidityUsd": 519844.77,
		"hash": "5602d59bf5caecf0457762e474f99ebdc920102c05b0497e5a8b631e5c7deae6"
	},
	{
		"id": "7c04063ec14e",
		"ts": "2026-08-20T03:42:46.365Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 886452.72,
		"hash": "7c04063ec14e0524726b4cdbe522c84f21167ee8c3594850580bced806e66036"
	},
	{
		"id": "9d240a01cb2d",
		"ts": "2026-08-20T03:42:46.609Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11188631.64,
		"hash": "9d240a01cb2da1a0147dbc055cce19528050ef182b51c814fcf180f1d8247504"
	},
	{
		"id": "3cdb73539b49",
		"ts": "2026-08-20T03:42:46.850Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 74008.59,
		"hash": "3cdb73539b493c53fe0adfbb62717d7c0e526f073254f02fce3b7bb478e32b91"
	},
	{
		"id": "6fcbc78c7458",
		"ts": "2026-08-20T03:42:47.101Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 327340.22,
		"hash": "6fcbc78c7458db6c80d9fe1ab734f907f16a17c26535bb6166084f6dd69d5d64"
	},
	{
		"id": "de19a6517ef6",
		"ts": "2026-08-20T03:42:47.345Z",
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
		"liquidityUsd": 690538.93,
		"hash": "de19a6517ef6179d337d730ecc07925362aad0141a6eaa93c4f22137d7eb40d0"
	},
	{
		"id": "50f44763778b",
		"ts": "2026-08-20T02:20:19.250Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111410668.35,
		"hash": "50f44763778b03829a42128a0f26540634bb93ce2ff522ca43e3b1d178034e0d"
	},
	{
		"id": "724c2eee7360",
		"ts": "2026-08-20T02:20:19.688Z",
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
		"liquidityUsd": 15879633.9,
		"hash": "724c2eee73604aea30910b94859c6b4c3678524bada9b8fb4adf361109f0aeac"
	},
	{
		"id": "9f07367e1b5d",
		"ts": "2026-08-20T02:20:20.118Z",
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
		"liquidityUsd": 882124.3,
		"hash": "9f07367e1b5d67821234a342a69c74e35d5a29bd72932d3781cb4f248d33972b"
	},
	{
		"id": "df4dfb509adc",
		"ts": "2026-08-20T02:20:20.349Z",
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
		"liquidityUsd": 27790000.07,
		"hash": "df4dfb509adc1a362a5c333a274975b0d1aed808c5eb5396726b5d9701963769"
	},
	{
		"id": "0b9f4650ec1a",
		"ts": "2026-08-20T02:20:20.575Z",
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
		"liquidityUsd": 2466018.75,
		"hash": "0b9f4650ec1a7e291700c79470f7e78ed72a04a8079fdb4717088019533dd04a"
	},
	{
		"id": "3ba6f6d4ac13",
		"ts": "2026-08-20T02:20:20.808Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1028616.19,
		"hash": "3ba6f6d4ac13044828d6e90c5fc256e27e2f714b199288ad3d1a850858989e0c"
	},
	{
		"id": "2b3ec490ca23",
		"ts": "2026-08-20T02:20:21.038Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152679.78,
		"hash": "2b3ec490ca23c9629931e9bdf1af212b940f476808c98dd22a8e1c8e685546c7"
	},
	{
		"id": "fd8b07e65917",
		"ts": "2026-08-20T02:20:21.268Z",
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
		"liquidityUsd": 1563788.84,
		"hash": "fd8b07e659174493084c2227e74ddc93eed66f7d9a0e9a2e76d00e7c5261a7ab"
	},
	{
		"id": "18ca3b54f495",
		"ts": "2026-08-20T02:20:21.494Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4078157.45,
		"hash": "18ca3b54f49576a9508a4cc72d252238ccbcf7b164b5503c745c39a8aa27fa53"
	},
	{
		"id": "51c8ebe39e2f",
		"ts": "2026-08-20T02:20:21.724Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3164803.7,
		"hash": "51c8ebe39e2f7f9447a64c953ced80897f7ccbfbb2341d3b75372a75258c91eb"
	},
	{
		"id": "7ee2d508f177",
		"ts": "2026-08-20T02:20:21.939Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4476380.06,
		"hash": "7ee2d508f1778347d66ccf394d5a928f3fbb372f19658520d3be6046a85dc2af"
	},
	{
		"id": "b360175b7ca7",
		"ts": "2026-08-20T02:20:22.149Z",
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
		"liquidityUsd": 454986.48,
		"hash": "b360175b7ca713c07aaac77a493fc09043e2ad6ec8a42cfe2318d89cc71b5004"
	},
	{
		"id": "3409e5b75774",
		"ts": "2026-08-20T02:20:22.365Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 567257.96,
		"hash": "3409e5b757741ee1f5e6cf449993278aba8a234973c905830af0821dd4302710"
	},
	{
		"id": "03d48eeaccd5",
		"ts": "2026-08-20T02:20:22.578Z",
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
		"liquidityUsd": 524096.24,
		"hash": "03d48eeaccd5d9059c87b1778b2e525feb302a1d7cdb4519799e863804e895be"
	},
	{
		"id": "8439f16d3cbd",
		"ts": "2026-08-20T02:20:22.795Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 886796.29,
		"hash": "8439f16d3cbd8204dd3faa825d6e8625996dd1998a8f551237042c3ee159d9da"
	},
	{
		"id": "fb6c486d1784",
		"ts": "2026-08-20T02:20:23.003Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11293935.91,
		"hash": "fb6c486d1784300c15377138fd56e5c540bb3415e1c80997a4dff972f0e87d94"
	},
	{
		"id": "b9a78114c3df",
		"ts": "2026-08-20T02:20:23.233Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 66323.93,
		"hash": "b9a78114c3dfce384ef5ce5c3cec479ee645d59351e05298390c850b2be6afeb"
	},
	{
		"id": "d9ede7e463a8",
		"ts": "2026-08-20T02:20:23.448Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 330461.86,
		"hash": "d9ede7e463a8b197854c6101541b2cf05251dca6a3a723fa66645ed51d609ebe"
	},
	{
		"id": "efe9f3db5765",
		"ts": "2026-08-20T02:20:23.664Z",
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
		"liquidityUsd": 693030.44,
		"hash": "efe9f3db576541c8f2378c98eaf3777dd313e08e3f248907c955449efd27ce11"
	},
	{
		"id": "edf30dc5a997",
		"ts": "2026-08-20T01:00:21.259Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111819730.42,
		"hash": "edf30dc5a9973be4a5da70d87f1d6d527f0d6e1f822318b6b6cd0de4c7c9be6d"
	},
	{
		"id": "8bf4a8295038",
		"ts": "2026-08-20T01:00:21.611Z",
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
		"liquidityUsd": 14168826.33,
		"hash": "8bf4a8295038443a51a7e55b0996e36240fb4b714efb15f965b1f48e288ef72d"
	},
	{
		"id": "5e665c545384",
		"ts": "2026-08-20T01:00:21.801Z",
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
		"liquidityUsd": 866066.32,
		"hash": "5e665c5453844aea96c67df1d451c56aa577f1b0e8e3c2786bf0bd6645da84cc"
	},
	{
		"id": "154928f7ea74",
		"ts": "2026-08-20T01:00:21.988Z",
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
		"liquidityUsd": 27686553.54,
		"hash": "154928f7ea749e32140f3d1af8b99c6bd2929110d8a7e1158f4187f89662cb28"
	}
]
