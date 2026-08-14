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
	"updatedAt": "2026-08-14T10:56:50.628Z",
	"tokensScored": 9991,
	"verdictsIssued": 9991,
	"safe": 8699,
	"risky": 737,
	"likelyRug": 555,
	"ticks": 602
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "ddcc03c42249",
		"ts": "2026-08-14T10:56:46.533Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111221207.38,
		"hash": "ddcc03c422496891305ea47d3e7f9a1066bd1ae4ecdc320283025df521da6a93"
	},
	{
		"id": "63104eded064",
		"ts": "2026-08-14T10:56:46.771Z",
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
		"liquidityUsd": 13455467.56,
		"hash": "63104eded0641005b269401c2e128afa2280742ec18c3fab2e89e439a4ad5602"
	},
	{
		"id": "6f7f316ee77c",
		"ts": "2026-08-14T10:56:47.216Z",
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
		"liquidityUsd": 813939.28,
		"hash": "6f7f316ee77c902f1550a9713e0175adb5e77da4a288e342dddcc099c3850a19"
	},
	{
		"id": "3d70f0ce2288",
		"ts": "2026-08-14T10:56:47.447Z",
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
		"liquidityUsd": 26585706.62,
		"hash": "3d70f0ce22885f32c2ea0fd39aac231d40f71e1ad5ed537b08803158fa74922e"
	},
	{
		"id": "736b91bbc870",
		"ts": "2026-08-14T10:56:47.696Z",
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
		"liquidityUsd": 4178824.67,
		"hash": "736b91bbc8700919541d9aea756c842e3d841ac3d5bc2df30a963b291bac52e3"
	},
	{
		"id": "3d1863178b10",
		"ts": "2026-08-14T10:56:47.927Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 890670.96,
		"hash": "3d1863178b102220c52cc372d01a05b4f708f97a94b1b64a7c994d3c2406e721"
	},
	{
		"id": "9e5a88d64db6",
		"ts": "2026-08-14T10:56:48.156Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5987061.33,
		"hash": "9e5a88d64db6e8f74f3aa12c574ad5f793bb45341b4ec6d826115c0ed356d3db"
	},
	{
		"id": "ca6d9f8cc738",
		"ts": "2026-08-14T10:56:48.396Z",
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
		"liquidityUsd": 3949922.86,
		"hash": "ca6d9f8cc7380b9c9e050eb0bebb8f241fadb10d633b6a76210c19e6d80c1f26"
	},
	{
		"id": "af3fb252644c",
		"ts": "2026-08-14T10:56:48.631Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"has_blacklist",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 620558.75,
		"hash": "af3fb252644c0393edfdbdac0f96aea6ff1ff0bbe775c0b558ac3791b4f4c2d8"
	},
	{
		"id": "735ef6b955b3",
		"ts": "2026-08-14T10:56:48.868Z",
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
		"liquidityUsd": 888606.85,
		"hash": "735ef6b955b36ae122a2840a7912cb52515c11856b28ac4f90a70654e708fe43"
	},
	{
		"id": "144a4d0658ad",
		"ts": "2026-08-14T10:56:49.084Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2303645.37,
		"hash": "144a4d0658adb116c18d5b07387f6ff0427df051f75c1c88fc57330cc9dd0b1c"
	},
	{
		"id": "f64c292ec42c",
		"ts": "2026-08-14T10:56:49.309Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 257880.05,
		"hash": "f64c292ec42c318b93e73954418b5c2fd81aa390ccc01d8dd2966d40c2feb7fe"
	},
	{
		"id": "82b139e86f3f",
		"ts": "2026-08-14T10:56:49.523Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1520863.71,
		"hash": "82b139e86f3fe97351b03050766d3da30cb53dffde67c4c98377860bb234f156"
	},
	{
		"id": "306500c3ed1e",
		"ts": "2026-08-14T10:56:49.748Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5987061.33,
		"hash": "306500c3ed1efd03bbfd86d12350acae340c5678a6c7e7c3bedd365c073ca785"
	},
	{
		"id": "f77f51f0dd60",
		"ts": "2026-08-14T10:56:49.963Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 726288,
		"hash": "f77f51f0dd607351cd3de64f101edb9ac8a264a61e1f5b9df2d076ccd18d75ec"
	},
	{
		"id": "b14ff3935f39",
		"ts": "2026-08-14T10:56:50.189Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9101776.64,
		"hash": "b14ff3935f392abf440130b38149bb6ea35c6c27da88d7a33ac53c7f5483a03e"
	},
	{
		"id": "6e71a39f5c1b",
		"ts": "2026-08-14T10:56:50.403Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 87766.89,
		"hash": "6e71a39f5c1bc6de5d350941a96ba70cf9d8d3f4ee430723dac3d2c19dfc5581"
	},
	{
		"id": "1d14b3f482a5",
		"ts": "2026-08-14T10:56:50.627Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 578995.13,
		"hash": "1d14b3f482a579993d024b88183e39a7a19dc459665988aea457442c71ac18c8"
	},
	{
		"id": "7c3e1e43b50e",
		"ts": "2026-08-14T09:56:25.730Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111327848.68,
		"hash": "7c3e1e43b50ea0cc6535a65309dc7262cf19dc3b52a366ba2be5f25188864161"
	},
	{
		"id": "a931e273dd10",
		"ts": "2026-08-14T09:56:26.057Z",
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
		"liquidityUsd": 16810416.19,
		"hash": "a931e273dd1000c876fdff09b785d61ba06949fd9e8e4f55239deffef1e077b2"
	},
	{
		"id": "f519ca696039",
		"ts": "2026-08-14T09:56:26.262Z",
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
		"liquidityUsd": 812015.55,
		"hash": "f519ca6960397a711f85258c20eefda4213775ae2e5ee72eede747b02706d867"
	},
	{
		"id": "4ecdedb0b078",
		"ts": "2026-08-14T09:56:26.462Z",
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
		"liquidityUsd": 26561920.29,
		"hash": "4ecdedb0b078daa836ba1ec0883189012df10713f8408924935d34c67de2061f"
	},
	{
		"id": "e596e9b6a1ba",
		"ts": "2026-08-14T09:56:26.663Z",
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
		"liquidityUsd": 4169751.6,
		"hash": "e596e9b6a1bad9817efc294225229cacc3f8ff365ffb825fc4c86af6f76e58ac"
	},
	{
		"id": "b2c10e1290fc",
		"ts": "2026-08-14T09:56:26.853Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 891885.07,
		"hash": "b2c10e1290fcfda61f62d55e6a62a8a59da744d1f8388fa4021fe11b01dfe1fc"
	},
	{
		"id": "bda2a57faf35",
		"ts": "2026-08-14T09:56:27.051Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5630262.34,
		"hash": "bda2a57faf35dcd7bf5dda8116d22080eb351aa98a1e09071a278454293cf301"
	},
	{
		"id": "18d67c821704",
		"ts": "2026-08-14T09:56:27.258Z",
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
		"liquidityUsd": 3955505.08,
		"hash": "18d67c82170415d51e6419ae0693d87a7e9a4725171704ba172f21a28b57d91e"
	},
	{
		"id": "bfeecd63b307",
		"ts": "2026-08-14T09:56:27.474Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"has_blacklist",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 619012.25,
		"hash": "bfeecd63b307eb55ed28a61980a27c79c2deaaf63ec5fa9c220d11b2fe94351e"
	},
	{
		"id": "9cdbdf7d9e3a",
		"ts": "2026-08-14T09:56:27.657Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 8,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.84,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 879381.2,
		"hash": "9cdbdf7d9e3abc902a2f97c7f6b3239dcb10de9924dc47c07a91490447755c25"
	},
	{
		"id": "f448216ed8f3",
		"ts": "2026-08-14T09:56:27.858Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2337469.66,
		"hash": "f448216ed8f349a0e85201fb87f9ed261c0b47571688c5f3c252e5e96e8f3e77"
	},
	{
		"id": "02d72b66715c",
		"ts": "2026-08-14T09:56:28.050Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 255984.31,
		"hash": "02d72b66715cc507a1708512db0b43e8a3804e58f7e244f459421cb62de9977d"
	},
	{
		"id": "0e2a7de577e3",
		"ts": "2026-08-14T09:56:28.276Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1515756.07,
		"hash": "0e2a7de577e390229ed763f604a1359034a190db2eda37123dad12e85ccca1d7"
	},
	{
		"id": "45f4e89a61f2",
		"ts": "2026-08-14T09:56:28.470Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5630262.34,
		"hash": "45f4e89a61f20433c31e43a25cc9f1d54a2e002fdd4d8df519c19404aec40455"
	},
	{
		"id": "956b4a98a05e",
		"ts": "2026-08-14T09:56:28.652Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 726288,
		"hash": "956b4a98a05e379f75da1d906718a9d03056a2a8db280f06918048f8cb534a61"
	},
	{
		"id": "c62a0ee6832e",
		"ts": "2026-08-14T09:56:28.862Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 89926.32,
		"hash": "c62a0ee6832e5a612792284783b08abcb9e1c0c7fa9ad77b4db747aa86b5b9e3"
	},
	{
		"id": "7ec406557e6a",
		"ts": "2026-08-14T09:56:29.043Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9076532.63,
		"hash": "7ec406557e6a9c0573fa5ece5744f3a46fbca69225414041692844061beb86ed"
	},
	{
		"id": "7a934df30875",
		"ts": "2026-08-14T09:56:29.259Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 577763.53,
		"hash": "7a934df3087530dfb443720e1eb9d5c3d76bcf69e672dc3cb8c0794add658e79"
	},
	{
		"id": "917841f6a339",
		"ts": "2026-08-14T08:12:01.464Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111467225.92,
		"hash": "917841f6a339dad9f99a63148506a28993839aac30b6e6dc336b6e5169dcbc80"
	},
	{
		"id": "1ffa22760498",
		"ts": "2026-08-14T08:12:01.760Z",
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
		"liquidityUsd": 16084563.66,
		"hash": "1ffa227604987f30a3328508bec830a05574e92762e6112d997c253ae791a008"
	},
	{
		"id": "eeb906ece59d",
		"ts": "2026-08-14T08:12:02.016Z",
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
		"liquidityUsd": 813070.37,
		"hash": "eeb906ece59dd29ea542d59b84db0e7ca7d46f3f254dd3edfba2e9367f0aac03"
	},
	{
		"id": "5314d9df912f",
		"ts": "2026-08-14T08:12:02.293Z",
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
		"liquidityUsd": 26690107.48,
		"hash": "5314d9df912f78a53635dd809d7065b489c3bd775ca41099c0d945c3febd2c4b"
	},
	{
		"id": "da9d83abd905",
		"ts": "2026-08-14T08:12:02.692Z",
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
		"liquidityUsd": 4192313.78,
		"hash": "da9d83abd905c9e733efd9b8b39011580ea32d6b4dec608571b9be3523df6be9"
	},
	{
		"id": "a40065bc4fcf",
		"ts": "2026-08-14T08:12:02.950Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 891885.07,
		"hash": "a40065bc4fcf8353d4ed339c5696ccd1ca883d3cd6729e8d135c4457333a03ac"
	},
	{
		"id": "021a2bf1ab21",
		"ts": "2026-08-14T08:12:03.277Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5829617.53,
		"hash": "021a2bf1ab212223b246e56171af4f93f943b90c5a235018c5fac9872c7e979e"
	},
	{
		"id": "a04754500716",
		"ts": "2026-08-14T08:12:03.488Z",
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
		"liquidityUsd": 3968905.92,
		"hash": "a04754500716b2ad0fcb7297e776834caf76afd222d9a027d6934e095faf5f7a"
	},
	{
		"id": "e16c24cc2d3c",
		"ts": "2026-08-14T08:12:03.702Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"has_blacklist",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 619680,
		"hash": "e16c24cc2d3cc70a592711b59b20862a2be4ed2c8bc72a8c0a606bc74038ee43"
	},
	{
		"id": "75bd78f5246b",
		"ts": "2026-08-14T08:12:03.932Z",
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
		"liquidityUsd": 877386.46,
		"hash": "75bd78f5246bd47da2ad07838ff6d983daa13f3fe5429dc5b707a994c5d1d7ff"
	},
	{
		"id": "4f856f669e4a",
		"ts": "2026-08-14T08:12:04.127Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2330791.49,
		"hash": "4f856f669e4ab8dd93ca23da483b00a4dfe6e7bdae702dffcb4c9da02879b77d"
	},
	{
		"id": "bd9feab7fe7a",
		"ts": "2026-08-14T08:12:04.366Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 254031.66,
		"hash": "bd9feab7fe7ae2392673de02d7212b22833a0c422cc56aa1603d551b80a6a295"
	},
	{
		"id": "f98260a5ea80",
		"ts": "2026-08-14T08:12:04.558Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1501791.29,
		"hash": "f98260a5ea80f179ea30c1f7eca301fb20d7f4c757485d3cb5cd8e3108a36be7"
	},
	{
		"id": "b8e1211a684d",
		"ts": "2026-08-14T08:12:04.745Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5784879.73,
		"hash": "b8e1211a684dd651ddd30476326802f0fdd1ca46e75ecf014bbaaba404bb653d"
	},
	{
		"id": "929b796b16cc",
		"ts": "2026-08-14T08:12:04.954Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 727835.69,
		"hash": "929b796b16cc2c9eb22fd6be720ec44472937ac14b14882d26d139b66c053557"
	},
	{
		"id": "e84218889cf4",
		"ts": "2026-08-14T08:12:05.143Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 88670.08,
		"hash": "e84218889cf41d32dd0e643b7434dd7c1ba570ee49d424e138a0958219416450"
	},
	{
		"id": "9f1c9ce2308d",
		"ts": "2026-08-14T08:12:05.335Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9068887.23,
		"hash": "9f1c9ce2308ddbf74641e33e5c80442c5f0e039bd4e753b22344531d3c688d24"
	},
	{
		"id": "d3d70d9a8b26",
		"ts": "2026-08-14T08:12:05.555Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 565661.64,
		"hash": "d3d70d9a8b26371884e6780f8f0f491ddc7dd735db1dba7b9f843cbe6ab26937"
	},
	{
		"id": "fbea008ede83",
		"ts": "2026-08-14T06:10:13.693Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111755728.56,
		"hash": "fbea008ede83a5569b20287f216392a9fedcb332a7d17379fe1ef50e27332bbe"
	},
	{
		"id": "6ab3bd46416d",
		"ts": "2026-08-14T06:10:14.077Z",
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
		"liquidityUsd": 17696819.83,
		"hash": "6ab3bd46416d9939275f20a72502c4f029f3f1640444595426c8e7c490eaec04"
	},
	{
		"id": "dca6afc12055",
		"ts": "2026-08-14T06:10:14.326Z",
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
		"liquidityUsd": 813038.64,
		"hash": "dca6afc12055e80f94c20bc26820370ea9d41ac3613c3de4854a5167a3ca9e6d"
	},
	{
		"id": "f1f40848319f",
		"ts": "2026-08-14T06:10:14.530Z",
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
		"liquidityUsd": 26808228.43,
		"hash": "f1f40848319fd9eea98dc6f38934c7880b76b2092bbc27a48ffd5ee18b6d788f"
	},
	{
		"id": "eb4ed019fec0",
		"ts": "2026-08-14T06:10:14.733Z",
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
		"liquidityUsd": 4220276.23,
		"hash": "eb4ed019fec0a3bdff0b0c7d91f6087aa6f5b885a13bfb9efe34787c050ad85d"
	},
	{
		"id": "76d2229bd67d",
		"ts": "2026-08-14T06:10:14.947Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 888062.26,
		"hash": "76d2229bd67d11ea3fe1f6e052311b5798bc9b5221203de2a001685de43e8e8b"
	},
	{
		"id": "625df9f32fad",
		"ts": "2026-08-14T06:10:15.153Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5272846.84,
		"hash": "625df9f32fadf9121e8752c8ee0995836c0d95b44a86ca5ff41316ddd4082889"
	},
	{
		"id": "20a624921d64",
		"ts": "2026-08-14T06:10:15.384Z",
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
		"liquidityUsd": 3961567.01,
		"hash": "20a624921d6466ffe784fe13fbfc5dde445bc4aed9a13fed8692690a7e747c1a"
	},
	{
		"id": "6cae59ac238b",
		"ts": "2026-08-14T06:10:15.592Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"has_blacklist",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 623570.09,
		"hash": "6cae59ac238bb8cd32bc5f275a98386c7bd04778f0d56372ad89c5b0be766205"
	},
	{
		"id": "5c61803c13a3",
		"ts": "2026-08-14T06:10:15.793Z",
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
		"liquidityUsd": 876884.63,
		"hash": "5c61803c13a334a8ee19e4e16ae2824ecc4f58cd8dafde8d1c1a8a0c3ae3fa4b"
	},
	{
		"id": "8dca8b0196d8",
		"ts": "2026-08-14T06:10:16.000Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2341544.67,
		"hash": "8dca8b0196d87597270001ffdb8bb86dd03dee79ea4d59d33e76c7246f70b0c2"
	},
	{
		"id": "832aefbd5983",
		"ts": "2026-08-14T06:10:16.203Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 253679.57,
		"hash": "832aefbd59830547632f8731e3fb3ea5ac2349cebf7ecbc23191316f4e5927ab"
	},
	{
		"id": "f15719f0fb6b",
		"ts": "2026-08-14T06:10:16.409Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1538137.25,
		"hash": "f15719f0fb6ba9e1ce8738f06b0dac6b431191f676ea0cea9dcf2aa7f8b67447"
	},
	{
		"id": "212592a3afe7",
		"ts": "2026-08-14T06:10:16.612Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 736052.81,
		"hash": "212592a3afe7635586a3ddfe84c6a151345fa91a973a544c7101c1390ae61cbf"
	},
	{
		"id": "ae3432896ee4",
		"ts": "2026-08-14T06:10:16.944Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5272844.57,
		"hash": "ae3432896ee48440b3ba2131fa3e1c48f646cc945ba07ccc3cab5425edb1c5b5"
	},
	{
		"id": "964adc9134a8",
		"ts": "2026-08-14T06:10:17.151Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 88213.78,
		"hash": "964adc9134a888f96d6c2c5cb0c4ec4bad575210622a1dc143e64c9f3570ec66"
	},
	{
		"id": "7fe4580eb4e6",
		"ts": "2026-08-14T06:10:17.360Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9225316.46,
		"hash": "7fe4580eb4e6feeab2b1c45804d6e41c2bb40d55ebdf88814001d324619a7472"
	},
	{
		"id": "943871a49972",
		"ts": "2026-08-14T04:04:16.087Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111761603.89,
		"hash": "943871a49972b3f9013c312862194227010f86b59d099e0cf4bed38a1cae3551"
	},
	{
		"id": "cab50ef2ee03",
		"ts": "2026-08-14T04:04:16.432Z",
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
		"liquidityUsd": 17561931.93,
		"hash": "cab50ef2ee03e26d3ddc0a40f2fcb2808f1a3efc197e009e8c82a57659a415fd"
	},
	{
		"id": "a4fe20654513",
		"ts": "2026-08-14T04:04:16.767Z",
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
		"liquidityUsd": 815462.7,
		"hash": "a4fe20654513a7b49a241c5b76ba9daadba5a6867e4039f3aab3969d192fb923"
	},
	{
		"id": "8c217b1f2cda",
		"ts": "2026-08-14T04:04:17.104Z",
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
		"liquidityUsd": 26857433.68,
		"hash": "8c217b1f2cdaa7c33df8aadadcaf4bfc72b04c172fff12e9042ba763b736bf35"
	},
	{
		"id": "ceb30fa6f777",
		"ts": "2026-08-14T04:04:17.447Z",
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
		"liquidityUsd": 4220276.23,
		"hash": "ceb30fa6f7770d7dcbb03033e45e36a447242ae8246b294a93aeed518f63ff15"
	},
	{
		"id": "0ed3ace2f1cc",
		"ts": "2026-08-14T04:04:17.643Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 893647.46,
		"hash": "0ed3ace2f1ccb7a32e133c83329c2c071e2a8d1c41be9afc6b664dfb11156320"
	},
	{
		"id": "e27b0015ab97",
		"ts": "2026-08-14T04:04:17.835Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4417515.95,
		"hash": "e27b0015ab9791e107bd6a71d23e600726adbbd2cc77092dd2cea075290fc69b"
	},
	{
		"id": "a86cf5f3d6ca",
		"ts": "2026-08-14T04:04:18.036Z",
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
		"liquidityUsd": 4010145.59,
		"hash": "a86cf5f3d6cad92c2b53818c81003726aa0b3fb911589931367ab4a7b4ce56f9"
	},
	{
		"id": "94091ba456ae",
		"ts": "2026-08-14T04:04:18.226Z",
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
		"liquidityUsd": 876578.74,
		"hash": "94091ba456aecb13b72f404fd2805ae0e04103d76e14761d3fb1c64414744cbd"
	},
	{
		"id": "151aafa658f0",
		"ts": "2026-08-14T04:04:18.551Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2309086.81,
		"hash": "151aafa658f0b880b022d29b2813f88c65daf935ff4ec61b524b52919783037a"
	},
	{
		"id": "4a0d19d81282",
		"ts": "2026-08-14T04:04:18.847Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 648008.07,
		"hash": "4a0d19d81282e389a5bc5c1d1b436cc440fbf9be1a48e4c6d80aae5ae954de0a"
	},
	{
		"id": "de787ecf1ee8",
		"ts": "2026-08-14T04:04:19.078Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 248101.44,
		"hash": "de787ecf1ee87dff89f4496775158468fd0bf72bfc4a1afcf0b943ae8f39782b"
	},
	{
		"id": "31b12e254299",
		"ts": "2026-08-14T04:04:19.300Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 736253.35,
		"hash": "31b12e254299f03e5588677826263b25a856938db228c13d39940cddffd3f321"
	},
	{
		"id": "39515e9d3d39",
		"ts": "2026-08-14T04:04:19.499Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1560336.85,
		"hash": "39515e9d3d394ab859573de01bfbfce75504b07a9ee706a240b4f781647eae81"
	},
	{
		"id": "48112b5435d9",
		"ts": "2026-08-14T04:04:19.676Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4417515.95,
		"hash": "48112b5435d9eeead648b08efd88bfcf300f49a61e856d52acad2a4f84517332"
	},
	{
		"id": "9188d6378824",
		"ts": "2026-08-14T04:04:19.891Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 87417.45,
		"hash": "9188d6378824e218b24ddf6365221f0bb677be689f5f5cd67cdc3f5c8b173daa"
	},
	{
		"id": "f5a83bee4d54",
		"ts": "2026-08-14T04:04:20.105Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 478606.1,
		"hash": "f5a83bee4d541851b091d29504ddc710ac21fe9d5fe6b0cfea2dec0501068b80"
	},
	{
		"id": "f9379f3d27d9",
		"ts": "2026-08-14T04:04:20.319Z",
		"symbol": "KellyClaude",
		"token": "0x50D2280441372486BeecdD328c1854743EBaCb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 765004.27,
		"hash": "f9379f3d27d919fc7f4976b27cf22317e462cbdc363d13f0879f250a0523a4d2"
	},
	{
		"id": "f0d32ea04b37",
		"ts": "2026-08-14T01:38:49.142Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111827650.59,
		"hash": "f0d32ea04b3793bdf6d19573fba2b97ad5d6c50354afb1194f68dc73ca853b4a"
	},
	{
		"id": "4a36d754393d",
		"ts": "2026-08-14T01:38:49.369Z",
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
		"liquidityUsd": 17609443.51,
		"hash": "4a36d754393d420d672226fe3edffe9e45c01502bbbf04979d0d34101863b7ae"
	},
	{
		"id": "6d47eb3f3cd3",
		"ts": "2026-08-14T01:38:49.596Z",
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
		"liquidityUsd": 815663.77,
		"hash": "6d47eb3f3cd30fcb9c27351a6f71c625986fa6df2dbf51022e78ff4921eff95c"
	},
	{
		"id": "c7845f4c7435",
		"ts": "2026-08-14T01:38:49.821Z",
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
		"liquidityUsd": 26874186.8,
		"hash": "c7845f4c7435111973a328ba57b526ddb790c2b7496bc44f8d2079a6b1f84ee4"
	},
	{
		"id": "1e36cdb96470",
		"ts": "2026-08-14T01:38:50.024Z",
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
		"liquidityUsd": 4241113.74,
		"hash": "1e36cdb96470cf64820d31baa6eedb1bdfffdd85dc61a4890748a73cae7645eb"
	},
	{
		"id": "ead1c35acece",
		"ts": "2026-08-14T01:38:50.242Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 897321.66,
		"hash": "ead1c35acece97c8c02bd36565eceba400eed4aa1289c38b8a4f6e8bfcec0ebb"
	},
	{
		"id": "7c9711617337",
		"ts": "2026-08-14T01:38:50.480Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4525160.71,
		"hash": "7c9711617337c3b8c1e0aa02495a7fd93757981f85d587737f8cc159cbf1ff57"
	},
	{
		"id": "c633c220f066",
		"ts": "2026-08-14T01:38:50.698Z",
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
		"liquidityUsd": 4066115.94,
		"hash": "c633c220f066e8bf395c053a5b4e143ee80ecdf6b9621ea07af0415e41abf4d5"
	},
	{
		"id": "f973c1c0a071",
		"ts": "2026-08-14T01:38:50.892Z",
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
		"liquidityUsd": 919395.26,
		"hash": "f973c1c0a07154d668821a6d1bbedb7a86fae2e026b070b8a318c0c0bcfd4204"
	},
	{
		"id": "c6bd5124129b",
		"ts": "2026-08-14T01:38:51.091Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"has_blacklist",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 644118.2,
		"hash": "c6bd5124129bffe8022c909c59306669830fd4f358e1a0bb83f4bc94fbd2b4e1"
	},
	{
		"id": "0a7ca71d5423",
		"ts": "2026-08-14T01:38:51.282Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 251587.54,
		"hash": "0a7ca71d5423d3fef0e2a67517cf7a36df908fa02e8ebefd0a2e9738f2247474"
	},
	{
		"id": "e6bb391f6518",
		"ts": "2026-08-14T01:38:51.472Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 739898.92,
		"hash": "e6bb391f6518ea7645b264e8bb68eaf295b37de08cccc65efc514092fbedfaec"
	},
	{
		"id": "810819db72a1",
		"ts": "2026-08-14T01:38:51.682Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1560897.46,
		"hash": "810819db72a15635537cb2987600f9fabd01c112b3968ade17b5f98e0cc8b77e"
	},
	{
		"id": "242d02f4ff37",
		"ts": "2026-08-14T01:38:51.864Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4525160.71,
		"hash": "242d02f4ff37dbe5bb9ffa51bd328f958a947567bbe21f1fe7968cea5b58249f"
	},
	{
		"id": "f0869f26e097",
		"ts": "2026-08-14T01:38:52.072Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2313236.76,
		"hash": "f0869f26e097e0a43d7a5101b71b0caa4ca2bef84b3fe8df7fd5aaeaaba72404"
	},
	{
		"id": "c8e742ec0c25",
		"ts": "2026-08-14T01:38:52.257Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 86761.12,
		"hash": "c8e742ec0c25443dd86e8d5b887310b51613ee7b5dc5f73e081923b97feb929b"
	},
	{
		"id": "d92138f062cd",
		"ts": "2026-08-14T01:38:52.459Z",
		"symbol": "SR",
		"token": "0x10c56F005a379f8eAfc88ff5c3f40d30F0031AC9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 101427.18,
		"hash": "d92138f062cd5737bb070d4a79042f49537d14d4b3d25f5ea8e2540f19a9f93e"
	},
	{
		"id": "b90126f8987c",
		"ts": "2026-08-14T01:38:52.666Z",
		"symbol": "KellyClaude",
		"token": "0x50D2280441372486BeecdD328c1854743EBaCb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 769648.83,
		"hash": "b90126f8987ce910bfc7a8f3d190b0dd1cd547707d9f444b38214404384c42d3"
	},
	{
		"id": "ef62da883bce",
		"ts": "2026-08-13T23:37:17.231Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111812509.68,
		"hash": "ef62da883bce203d07b43ad806164eaab3ae439df82db0b96d0450ee05f15161"
	},
	{
		"id": "58680195fed3",
		"ts": "2026-08-13T23:37:17.570Z",
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
		"liquidityUsd": 17496644.51,
		"hash": "58680195fed320a725431aaea5c7cd53cfd48da08af829729e4d300c06dccdd8"
	},
	{
		"id": "6c7150dbed62",
		"ts": "2026-08-13T23:37:17.770Z",
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
		"liquidityUsd": 814732.47,
		"hash": "6c7150dbed62b00a588f2e8c73ab418183215e47291c138b6e82a62d0f81dc31"
	},
	{
		"id": "6b2c04848291",
		"ts": "2026-08-13T23:37:17.975Z",
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
		"liquidityUsd": 26846350.8,
		"hash": "6b2c04848291108f1fde6a8603c9daeba4f8b56828e4ca2245359c6d87054458"
	},
	{
		"id": "28b7799e93da",
		"ts": "2026-08-13T23:37:18.172Z",
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
		"liquidityUsd": 4217325.47,
		"hash": "28b7799e93dae13aed9875b39ca66f0074b07fb893e42801681d26ab2d03be7f"
	},
	{
		"id": "f64066c91ad9",
		"ts": "2026-08-13T23:37:18.376Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 900115.7,
		"hash": "f64066c91ad941c8695be27ff4eff5197443161d4ab7ba4dabc4e5826a6466df"
	},
	{
		"id": "198fc2010f26",
		"ts": "2026-08-13T23:37:18.592Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4530587.68,
		"hash": "198fc2010f26e4967e608b33137e1440554a5271ca5288b1c4fb39902aa686e6"
	},
	{
		"id": "6baa1a63159f",
		"ts": "2026-08-13T23:37:18.780Z",
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
		"liquidityUsd": 4106846.18,
		"hash": "6baa1a63159f84860679cb34c8225822902a05973f8ddc3c39af94b85b148de5"
	},
	{
		"id": "314477192211",
		"ts": "2026-08-13T23:37:18.977Z",
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
		"liquidityUsd": 914267.99,
		"hash": "314477192211d52f68fea04ba9314af2959b74e59610e49ede9951155993f0ed"
	},
	{
		"id": "385ba5bcb5b0",
		"ts": "2026-08-13T23:37:19.164Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"has_blacklist",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 650848.21,
		"hash": "385ba5bcb5b023a8298a6aabd38cca57610727959e33b4e8781205fbea216427"
	},
	{
		"id": "44d95f477447",
		"ts": "2026-08-13T23:37:19.371Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 248930.73,
		"hash": "44d95f47744799fbe4dee69c91a0cfc165125355f15c9cc61ca78d382dcaa531"
	},
	{
		"id": "c7185c1b9798",
		"ts": "2026-08-13T23:37:19.600Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 730111.35,
		"hash": "c7185c1b9798976c2cf4ba4822d4cdfb98ecd25cf9d8d11ea16b31922acf991b"
	},
	{
		"id": "09aea73697ca",
		"ts": "2026-08-13T23:37:19.797Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4538704.56,
		"hash": "09aea73697ca227a7dc6aee94705226c534bc1c65e67505d485c2dbdf54764e2"
	},
	{
		"id": "6ed73640cf5b",
		"ts": "2026-08-13T23:37:19.979Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1583189.24,
		"hash": "6ed73640cf5b97b13c87e5073d4b7f72f5abc556757d604d8bdca475011ac2ce"
	},
	{
		"id": "2cfb5fb785fc",
		"ts": "2026-08-13T23:37:20.217Z",
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
		"liquidityUsd": 2341386.81,
		"hash": "2cfb5fb785fced0d1de7a41cbc5c52219e64a76c9104b55321c1d0e9a7dc76dd"
	},
	{
		"id": "fedaae1604c4",
		"ts": "2026-08-13T23:37:20.403Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 83354.48,
		"hash": "fedaae1604c4f57e6e8bbd6f3e4fb6acf8d1c417cade98a9ce0b71f8776b4b2f"
	},
	{
		"id": "94fa09ec6fd4",
		"ts": "2026-08-13T23:37:20.601Z",
		"symbol": "SR",
		"token": "0x10c56F005a379f8eAfc88ff5c3f40d30F0031AC9",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 100871.57,
		"hash": "94fa09ec6fd4821c673192f35d77c1b4165d7dc9fe19fb7f7ac7d9acd2ff4dc7"
	},
	{
		"id": "4d32936f72a9",
		"ts": "2026-08-13T23:37:20.799Z",
		"symbol": "KellyClaude",
		"token": "0x50D2280441372486BeecdD328c1854743EBaCb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 768716.62,
		"hash": "4d32936f72a9a7e91465055006010eaccd1dbe2464eacbbc7319c5fae3a5b792"
	},
	{
		"id": "5b7348334b38",
		"ts": "2026-08-13T22:37:02.746Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111810905.34,
		"hash": "5b7348334b38da66ec559f4e2d1ca31647525055e30c3ab2e6d11bca00276fe6"
	},
	{
		"id": "8d15d3c9ce80",
		"ts": "2026-08-13T22:37:03.143Z",
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
		"liquidityUsd": 17530135.57,
		"hash": "8d15d3c9ce801b3219917fac9411ff5af5442a13beb6bfc1c47c2c630435dab1"
	},
	{
		"id": "b60904a5fb02",
		"ts": "2026-08-13T22:37:03.357Z",
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
		"liquidityUsd": 814498.05,
		"hash": "b60904a5fb023a91307563996fc2706a81af3bf87cb3f42e6329a2fe3524f6b0"
	},
	{
		"id": "3a509cca1450",
		"ts": "2026-08-13T22:37:03.573Z",
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
		"liquidityUsd": 26877448.65,
		"hash": "3a509cca14508bf83be5527b143175e861ee02a299af9b0baa37e10fb4b4a9b8"
	},
	{
		"id": "8766531ab56b",
		"ts": "2026-08-13T22:37:03.804Z",
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
		"liquidityUsd": 4207222.8,
		"hash": "8766531ab56b007e25664a1e80f6c55caa90183646812946dc32e531b79a6775"
	},
	{
		"id": "679ede670fe0",
		"ts": "2026-08-13T22:37:04.029Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 900115.7,
		"hash": "679ede670fe0583a00b98fc213cc8645be504202be1f25ff1f29a16b9f6f99c6"
	},
	{
		"id": "4212f194ec0a",
		"ts": "2026-08-13T22:37:04.240Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26877448.65,
		"hash": "4212f194ec0a4adf6930a62bc2f3494c5365443f00cb9d346b2c441ab98de784"
	},
	{
		"id": "5747f717a56a",
		"ts": "2026-08-13T22:37:04.731Z",
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
		"liquidityUsd": 4104145.06,
		"hash": "5747f717a56adc3d182947c43b5f40d72be46ec249789335112f5de0493fc0d4"
	},
	{
		"id": "df70bc803a74",
		"ts": "2026-08-13T22:37:04.969Z",
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
		"liquidityUsd": 914793.65,
		"hash": "df70bc803a74d713f6169c6dd486c5a0bc67724e096c803b577c2418ffc3d9a1"
	},
	{
		"id": "dc8dcbb4311c",
		"ts": "2026-08-13T22:37:05.200Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"has_blacklist",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 653868.83,
		"hash": "dc8dcbb4311c29f3d26334f83abc21a1d26b339afe0f8034a9e083b84f7ad08b"
	},
	{
		"id": "6e6a6d2373da",
		"ts": "2026-08-13T22:37:05.482Z",
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
		"liquidityUsd": 248282.14,
		"hash": "6e6a6d2373da7d31b38f43206aca185fd7166545e3b78877291bbe2a870de09c"
	},
	{
		"id": "61d0cec5a3ec",
		"ts": "2026-08-13T22:37:05.698Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 730111.35,
		"hash": "61d0cec5a3ec728f8531551243b7ea99a030f49dcc0fea756bdcc48858fe5c0c"
	},
	{
		"id": "af1b2f98058e",
		"ts": "2026-08-13T22:37:05.900Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4550368.67,
		"hash": "af1b2f98058e1f62a267d2397979598b8115a6c8b33550572f077baf6a1a90d7"
	},
	{
		"id": "ac2be94fb278",
		"ts": "2026-08-13T22:37:06.103Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1602191.71,
		"hash": "ac2be94fb278e528bd3d119ebd223da8783bc776ad904684366579dc59d06914"
	},
	{
		"id": "d4e843e9bfa7",
		"ts": "2026-08-13T22:37:06.311Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2319618.2,
		"hash": "d4e843e9bfa7139097c6e49f06eef45e95bc75436140c3241092c6e384033413"
	},
	{
		"id": "9feb70a582f8",
		"ts": "2026-08-13T22:37:06.510Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 82687.4,
		"hash": "9feb70a582f83cec506561ea5c74071c53591915070011c52a8c5d1a38ef86bd"
	},
	{
		"id": "01eacbd3c134",
		"ts": "2026-08-13T22:37:06.721Z",
		"symbol": "SR",
		"token": "0x10c56F005a379f8eAfc88ff5c3f40d30F0031AC9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 100948.8,
		"hash": "01eacbd3c134323048197f472ae72f1be65e024dfcdf9179ecb60060fcbee803"
	},
	{
		"id": "8ba205ab1b6a",
		"ts": "2026-08-13T22:37:06.935Z",
		"symbol": "KellyClaude",
		"token": "0x50D2280441372486BeecdD328c1854743EBaCb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 769797.69,
		"hash": "8ba205ab1b6aaadbda55780e0c3a3dd45c415278369e0dbbca89d156b9343af9"
	},
	{
		"id": "cbae4b60449e",
		"ts": "2026-08-13T21:40:43.442Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111712955.21,
		"hash": "cbae4b60449e23a1f8f80dea3839db73f935d2ba4c9dad1df8196769a1f4f8a7"
	},
	{
		"id": "3eac0e410b7c",
		"ts": "2026-08-13T21:40:43.771Z",
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
		"liquidityUsd": 17509565.24,
		"hash": "3eac0e410b7c3bdbf331facd17abbf9acac396c187b9800a60200f63544fa5dd"
	},
	{
		"id": "305fc11428f2",
		"ts": "2026-08-13T21:40:44.210Z",
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
		"liquidityUsd": 814498.05,
		"hash": "305fc11428f2b36ef489acd5054ea83afc2f0edd7172fafd10530dae40879c48"
	},
	{
		"id": "685718242d5b",
		"ts": "2026-08-13T21:40:44.401Z",
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
		"liquidityUsd": 26908985.68,
		"hash": "685718242d5bf22aa5d6e5e99f572bd9e02567937147006b90e18a733bfdb47d"
	},
	{
		"id": "3c98fd3c2449",
		"ts": "2026-08-13T21:40:44.595Z",
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
		"liquidityUsd": 4207222.8,
		"hash": "3c98fd3c24496a696ada1e9fb7bb8eae53326424b6b9377cee8ecc00be290d34"
	},
	{
		"id": "885293693467",
		"ts": "2026-08-13T21:40:44.799Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 899586.65,
		"hash": "8852936934678e663b4f587c6ee0b7fa171cd6b7070689143023333d5b7b484d"
	},
	{
		"id": "a4c59f65d356",
		"ts": "2026-08-13T21:40:44.998Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26908985.68,
		"hash": "a4c59f65d356748d73fc3a4cd717ff44a2b58a6ef55081ad90abef65ef392e29"
	},
	{
		"id": "03bd4707fa91",
		"ts": "2026-08-13T21:40:45.204Z",
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
		"liquidityUsd": 4102880.23,
		"hash": "03bd4707fa91eec56387f5f8c77cbcafe25e6b6fcd71fdd8de68af83bbd1f0c7"
	},
	{
		"id": "c0ba5acb13d3",
		"ts": "2026-08-13T21:40:45.424Z",
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
		"liquidityUsd": 913944.6,
		"hash": "c0ba5acb13d381a9bc6e51233fed7fdf48460223f937b505afc2fda2fddb18dc"
	},
	{
		"id": "92bef5b12b93",
		"ts": "2026-08-13T21:40:45.632Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"has_blacklist",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 656094.04,
		"hash": "92bef5b12b93b9af10ceeba3aa8fa14602c341f24925f57e6f52cb0a8375f15e"
	},
	{
		"id": "b14abfa7bd25",
		"ts": "2026-08-13T21:40:45.832Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 247839.29,
		"hash": "b14abfa7bd2595f9977b925d23a401a24a3303240ea3196b06270f471e94b821"
	},
	{
		"id": "86eabea334c5",
		"ts": "2026-08-13T21:40:46.022Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 728572.67,
		"hash": "86eabea334c572b661567561de6557a91d0fa5d227ee9a7e66ba434ef7e1f1ae"
	},
	{
		"id": "061c67dca829",
		"ts": "2026-08-13T21:40:46.211Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4546185.24,
		"hash": "061c67dca829321af50f4171c911d2512434289d03d28055c2d6e91f4c3456bd"
	},
	{
		"id": "297ee63cab9c",
		"ts": "2026-08-13T21:40:46.420Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2315953.94,
		"hash": "297ee63cab9c5c480b551c55f4ddc94d1e1560d8a87f1bdd661fcb1785806050"
	},
	{
		"id": "74ba8285eabc",
		"ts": "2026-08-13T21:40:46.631Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1616995.25,
		"hash": "74ba8285eabc4ce5533da71e237a16ad6c1b825c4e54431edded7ad61e108620"
	},
	{
		"id": "123ccd02b3e1",
		"ts": "2026-08-13T21:40:46.824Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 84980.19,
		"hash": "123ccd02b3e1bf373afc73560439f9b305f576c9c0146b58cf641c01fae78730"
	},
	{
		"id": "b9ba32e73ba1",
		"ts": "2026-08-13T21:40:47.030Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9347578.17,
		"hash": "b9ba32e73ba118c1241bd4c5a6b94bd5e246747ddc54ef877e08333d3b80711c"
	},
	{
		"id": "23ea264117f8",
		"ts": "2026-08-13T21:40:47.219Z",
		"symbol": "SR",
		"token": "0x10c56F005a379f8eAfc88ff5c3f40d30F0031AC9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 100948.8,
		"hash": "23ea264117f8d9f12591861e214ab68209017ed250bc7e70e1bad11c5bcfb38c"
	},
	{
		"id": "ac83b5a6a445",
		"ts": "2026-08-13T20:42:17.511Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111711601.5,
		"hash": "ac83b5a6a445f5c4c71b73c07c9ac30388489ea237de2f62cd79b5aa12e2409a"
	},
	{
		"id": "069e7f3e8d21",
		"ts": "2026-08-13T20:42:17.839Z",
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
		"liquidityUsd": 17427595.71,
		"hash": "069e7f3e8d219569d998ccbceb3248636612d0751d389730bd668e95b6607bb7"
	},
	{
		"id": "900cd30c0a56",
		"ts": "2026-08-13T20:42:18.037Z",
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
		"liquidityUsd": 813832.41,
		"hash": "900cd30c0a569f3fc25198c26011270514ea9113e51e7d114e769528b9084f06"
	},
	{
		"id": "05b6deed616d",
		"ts": "2026-08-13T20:42:18.420Z",
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
		"liquidityUsd": 26895600.11,
		"hash": "05b6deed616df8e093c7267cc3d73aaea724d3f49d77244b7648120a3ebd88c8"
	},
	{
		"id": "48e2c3e2f7d8",
		"ts": "2026-08-13T20:42:18.617Z",
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
		"liquidityUsd": 4218598.46,
		"hash": "48e2c3e2f7d8fefefb50e1357af66ea2a045d3ba23bfe025b16a4b7e34455d9f"
	},
	{
		"id": "9c0226e32a43",
		"ts": "2026-08-13T20:42:18.811Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 896794.23,
		"hash": "9c0226e32a437166d65028bbaca29fd3d8cb98947120d1f6c574254a1e03f27f"
	},
	{
		"id": "7c9d43167611",
		"ts": "2026-08-13T20:42:19.008Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26895600.11,
		"hash": "7c9d4316761196431ffa3c325e63a2bcf4c724979a3c96e8c6175a5b1307b5a5"
	},
	{
		"id": "89a91d099a91",
		"ts": "2026-08-13T20:42:19.219Z",
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
		"liquidityUsd": 4090203.54,
		"hash": "89a91d099a91a73a80ef2e002234382217341b9579a74f2d2090e3a914036ea7"
	},
	{
		"id": "e1f71eeb181f",
		"ts": "2026-08-13T20:42:19.420Z",
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
		"liquidityUsd": 909504.17,
		"hash": "e1f71eeb181f6b91afa53650da925959b297eca14acd2da85e7633e1bbc74f6f"
	},
	{
		"id": "66ca8a2930c6",
		"ts": "2026-08-13T20:42:19.601Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"has_blacklist",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 654441.45,
		"hash": "66ca8a2930c68f40c4f038410f5186c83b284da10df2a04d5a2859ccc5984a44"
	},
	{
		"id": "46291ec55772",
		"ts": "2026-08-13T20:42:19.804Z",
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
		"liquidityUsd": 247368.18,
		"hash": "46291ec5577276f58cf9df6c625ea7625c43947953e4efded8844c70cd36458f"
	},
	{
		"id": "197253add7e7",
		"ts": "2026-08-13T20:42:20.002Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 730064.71,
		"hash": "197253add7e770d8e40664bc80c7a040a39df49cb29584ee4857a075cfe4fedc"
	},
	{
		"id": "14482bf7861c",
		"ts": "2026-08-13T20:42:20.209Z",
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
		"liquidityUsd": 4478185.11,
		"hash": "14482bf7861cce5381094472c719904c1fca3f35ac128b3014f553f3ed02d70e"
	},
	{
		"id": "458a66d52109",
		"ts": "2026-08-13T20:42:20.461Z",
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
		"liquidityUsd": 2316551.09,
		"hash": "458a66d5210937cc0cf1799dabdb6ed35d0bf7fd7a7f4921d39b5ca0a1411022"
	},
	{
		"id": "9ba77f37f1f6",
		"ts": "2026-08-13T20:42:20.659Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1624628.42,
		"hash": "9ba77f37f1f6ad0b5d3976178e584e7d9aebb5c00d9d0cc0b04bb230062e8406"
	},
	{
		"id": "5118318cd951",
		"ts": "2026-08-13T20:42:20.838Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 85522.47,
		"hash": "5118318cd95168318e34699f2532c6eb253de1cdd034b6003873ef8464af6ca1"
	},
	{
		"id": "949bd2497620",
		"ts": "2026-08-13T20:42:21.037Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9345784.22,
		"hash": "949bd2497620d23e2b12a22f2c3c55da27f9046634ea93356ec44bd0c7972976"
	},
	{
		"id": "3e67646b012d",
		"ts": "2026-08-13T20:42:21.233Z",
		"symbol": "SR",
		"token": "0x10c56F005a379f8eAfc88ff5c3f40d30F0031AC9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 100983.31,
		"hash": "3e67646b012d43d5c24fee575517b0715273069be006d87995a3c31744bef6d6"
	},
	{
		"id": "e22db644de09",
		"ts": "2026-08-13T20:42:21.428Z",
		"symbol": "KellyClaude",
		"token": "0x50D2280441372486BeecdD328c1854743EBaCb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 778744.89,
		"hash": "e22db644de099e20ea6c6e33a4ae182be35be65d0407d9dd784b2b2090ce45a1"
	},
	{
		"id": "07b161918921",
		"ts": "2026-08-13T19:56:45.027Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111706411.82,
		"hash": "07b161918921b9cb9a18e9839e129c9e369aaee2f70903851c622579558c6c60"
	},
	{
		"id": "87ddab77f673",
		"ts": "2026-08-13T19:56:45.445Z",
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
		"liquidityUsd": 17173062.99,
		"hash": "87ddab77f67314f67f73b4260dc997c9a34e54019a2c02feaf03971b2a650089"
	},
	{
		"id": "3ce41995f892",
		"ts": "2026-08-13T19:56:45.678Z",
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
		"liquidityUsd": 810311.55,
		"hash": "3ce41995f89216a53c0cc894a3a52467ed2ba00fc9432053ef660b9cae32b581"
	},
	{
		"id": "71a1f75bc31e",
		"ts": "2026-08-13T19:56:45.906Z",
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
		"liquidityUsd": 26848190.22,
		"hash": "71a1f75bc31e2fd3fee48582442e9d09c572c62c47bfb75f2dbed3270f0969dd"
	},
	{
		"id": "3a98de7a8060",
		"ts": "2026-08-13T19:56:46.132Z",
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
		"liquidityUsd": 4218598.46,
		"hash": "3a98de7a806030845461a4efe8252c8e186ecffd8601396d9e62ff6102d059d3"
	},
	{
		"id": "f86106298d38",
		"ts": "2026-08-13T19:56:46.356Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 899587.87,
		"hash": "f86106298d3822e0450b75b873d344a30a0445735fa910baa739ab9f0958e51a"
	},
	{
		"id": "21ac5ff51ad9",
		"ts": "2026-08-13T19:56:46.643Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4441689.49,
		"hash": "21ac5ff51ad9ba4d45c7be791fc5c833194972b64b08b3bab9526767d3c670dc"
	},
	{
		"id": "9ae864be77d9",
		"ts": "2026-08-13T19:56:46.869Z",
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
		"liquidityUsd": 3792890.91,
		"hash": "9ae864be77d95e4f285cf7dc023b6d3e5333a2625bda38a0d5b0cdfb818e891c"
	},
	{
		"id": "5c76b76bf389",
		"ts": "2026-08-13T19:56:47.099Z",
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
		"liquidityUsd": 909685.05,
		"hash": "5c76b76bf3892888a6491828bbb8476534cfaebfb3da5f4d91397a14e4f0be68"
	},
	{
		"id": "666b3b9daa17",
		"ts": "2026-08-13T19:56:47.323Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4441689.49,
		"hash": "666b3b9daa17646c4b5309c5739df3b4fb17371f6d93363e5b966d927ee47fed"
	},
	{
		"id": "5facd1f30de1",
		"ts": "2026-08-13T19:56:47.537Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 647805.96,
		"hash": "5facd1f30de115b88d5ae51a92cd0cf857226bf02d0124cee0f3596b76092b58"
	},
	{
		"id": "c70793e52b5e",
		"ts": "2026-08-13T19:56:47.745Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 738392.92,
		"hash": "c70793e52b5e725917e6af8459608961fd28762ea320e788402d9b208af5c43e"
	},
	{
		"id": "9edab16e2c80",
		"ts": "2026-08-13T19:56:47.956Z",
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
		"liquidityUsd": 246760.31,
		"hash": "9edab16e2c805ca06c13ba00c5149f887f70af6947d2131909beb5b2f474b795"
	},
	{
		"id": "5e82a19f695f",
		"ts": "2026-08-13T19:56:48.164Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1628225.86,
		"hash": "5e82a19f695fe7092e98a387136d77435a16d03e188f8842389c5f287f445dde"
	},
	{
		"id": "ec4258a2696c",
		"ts": "2026-08-13T19:56:48.374Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2305205.94,
		"hash": "ec4258a2696c3f947b85261140b0e0ebc362b9548a9da7f4813fea35fab2c4ec"
	},
	{
		"id": "dcdc28feb7b3",
		"ts": "2026-08-13T19:56:48.584Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 87113.26,
		"hash": "dcdc28feb7b353bee966abb8e33492845792ef6684f7e1310c9ca8ff46f4dbd5"
	},
	{
		"id": "a98aa553b03c",
		"ts": "2026-08-13T19:56:48.793Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9307167.19,
		"hash": "a98aa553b03c61896829061a40266eeaae3302923a988e240b1fe31109f40326"
	},
	{
		"id": "0d0befc5081f",
		"ts": "2026-08-13T19:56:49.002Z",
		"symbol": "SR",
		"token": "0x10c56F005a379f8eAfc88ff5c3f40d30F0031AC9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 100983.31,
		"hash": "0d0befc5081f897b9f41111ac32fea0806b3f369c37cf9cccb318fe80e2aa777"
	},
	{
		"id": "8e979809d245",
		"ts": "2026-08-13T19:56:49.208Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 478777.07,
		"hash": "8e979809d24505d4614160d498aca55f5fc96300a4657f7524e8637baae9e82d"
	},
	{
		"id": "dc5ec526eb9f",
		"ts": "2026-08-13T18:58:21.327Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111468099.56,
		"hash": "dc5ec526eb9f4f2ceccdfe0aa43548e1a5796dec3a0bc993c7eaa27098fc5f6d"
	}
]
