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
	"updatedAt": "2026-10-26T09:38:09.646Z",
	"tokensScored": 21480,
	"verdictsIssued": 21480,
	"safe": 18312,
	"risky": 1510,
	"likelyRug": 1658,
	"ticks": 1211
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "34d9ee666071",
		"ts": "2026-10-26T09:38:04.415Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 157726876.16,
		"hash": "34d9ee66607195b90df984212c0d2629655550880a55348e3802c71a6c390c25"
	},
	{
		"id": "5c763e61d673",
		"ts": "2026-10-26T09:38:05.137Z",
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
		"liquidityUsd": 17521562.7,
		"hash": "5c763e61d6737ece1dc66bf17708adb08d20c71a411063fd60ea86e64e4c45f8"
	},
	{
		"id": "78a31bffcb37",
		"ts": "2026-10-26T09:38:05.468Z",
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
		"liquidityUsd": 256314.01,
		"hash": "78a31bffcb37764a4fb78714668bbc61be125bb474d1528a5ff068c8e360b23c"
	},
	{
		"id": "e9df78c49f10",
		"ts": "2026-10-26T09:38:05.735Z",
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
		"liquidityUsd": 7136841.63,
		"hash": "e9df78c49f10df0b88c13bdcc0031a12678586774313de5f7002a7c71e56630d"
	},
	{
		"id": "7f4a1460ef1a",
		"ts": "2026-10-26T09:38:06.017Z",
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
		"liquidityUsd": 2095894.74,
		"hash": "7f4a1460ef1abc69f3780bd009a2d6e18ca665a8d0584d3436a91f6a7d58e76f"
	},
	{
		"id": "9c3ce7212a04",
		"ts": "2026-10-26T09:38:06.287Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1110596.83,
		"hash": "9c3ce7212a04472d0da18f63af60aad6fa65356ce99dbb543c2e939333b2d954"
	},
	{
		"id": "65598aaf762a",
		"ts": "2026-10-26T09:38:06.558Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 7136841.63,
		"hash": "65598aaf762a1d4bd5f229dc81dafb38ee0040b7be5f8b883db32bfb8e8d4951"
	},
	{
		"id": "4a4843ed52a8",
		"ts": "2026-10-26T09:38:06.857Z",
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
		"liquidityUsd": 2201150.89,
		"hash": "4a4843ed52a83ec27f5429d03d3b0494ec921b1bff646cab02f312a0767bd677"
	},
	{
		"id": "5dee47688387",
		"ts": "2026-10-26T09:38:07.130Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2467759.74,
		"hash": "5dee476883875cf9380abfe6189614fcc80758c1ff05bf5be33ea9a7ab8717f3"
	},
	{
		"id": "e7b7bd349ab4",
		"ts": "2026-10-26T09:38:07.393Z",
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
		"liquidityUsd": 1839719.19,
		"hash": "e7b7bd349ab4d50f690bf3d8ac2928396e49d61b5fad6de9293437dc058fedd9"
	},
	{
		"id": "839fed3fe967",
		"ts": "2026-10-26T09:38:07.645Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1161669.8,
		"hash": "839fed3fe967fecece7283cffcac6e79d8f0ab3e3fb8e9ff331526b9969b43a6"
	},
	{
		"id": "170aa56e8d2b",
		"ts": "2026-10-26T09:38:07.895Z",
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
		"liquidityUsd": 8890460.48,
		"hash": "170aa56e8d2b9aadfd3d80ce62b19a9e29df72aee88ef226264e8993ce8c95d7"
	},
	{
		"id": "f01c936f9307",
		"ts": "2026-10-26T09:38:08.142Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 56958.54,
		"hash": "f01c936f930716e7c429199147bf7e38d4a4e381f1ad94837ebd6877736f8f99"
	},
	{
		"id": "3cd5245c4579",
		"ts": "2026-10-26T09:38:08.391Z",
		"symbol": "PANGEA",
		"token": "0xA551dEF8a44ea423CaA58DA45b3F5764004286Ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 158351.99,
		"hash": "3cd5245c457960f1e64acd8483794e17c130fd1beed12c058cda767ed5d3754a"
	},
	{
		"id": "a75c467248f9",
		"ts": "2026-10-26T09:38:08.647Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 513839.22,
		"hash": "a75c467248f99234a908c13c1c184f1048687897c07be4c83eace1313e9974d8"
	},
	{
		"id": "30a45730b8a3",
		"ts": "2026-10-26T09:38:08.905Z",
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
		"liquidityUsd": 1067341.56,
		"hash": "30a45730b8a3747920433903c73c87f7fa36b151553d83e4daa551b6e1dc5733"
	},
	{
		"id": "913cdb86bdf7",
		"ts": "2026-10-26T09:38:09.151Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 674740.16,
		"hash": "913cdb86bdf768855a3f91798837679a60813899a35ad37c29e94131e8b1f34e"
	},
	{
		"id": "b0b9a5e8fca7",
		"ts": "2026-10-26T09:38:09.399Z",
		"symbol": "GULD",
		"token": "0x14D6C649292c5c9790c5196D1a9EA039307947a1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1061360.6,
		"hash": "b0b9a5e8fca72fbe3eab757d8c18a632acd6d9c6b52873c19ec31fa7bfaddc65"
	},
	{
		"id": "f107d172ecd3",
		"ts": "2026-10-26T09:38:09.646Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 207162.48,
		"hash": "f107d172ecd3f7a134c1f2cc6b86fd4867a3d8c485a13c30ee13634f218fd235"
	},
	{
		"id": "8e3a459c3b87",
		"ts": "2026-10-26T03:00:40.416Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 156348177.4,
		"hash": "8e3a459c3b87258423f3156d4fb38d0a930ec35f206e5f53eee261f9fa4acbec"
	},
	{
		"id": "7f9cb999467f",
		"ts": "2026-10-26T03:00:40.639Z",
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
		"liquidityUsd": 17201609.78,
		"hash": "7f9cb999467f2ed3186342822c6c00fd268855f5ef6799878719b3b2b36b0b77"
	},
	{
		"id": "ec30b00d143c",
		"ts": "2026-10-26T03:00:40.864Z",
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
		"liquidityUsd": 253959.28,
		"hash": "ec30b00d143cc50b3f50cb2e85755e035307806dadbe8be44e19b178bf83949b"
	},
	{
		"id": "bb93b8742595",
		"ts": "2026-10-26T03:00:41.061Z",
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
		"liquidityUsd": 7194621.39,
		"hash": "bb93b8742595d5b2ce0b5d42eff948cb3c008c038fe8a6690484a6f52dffa5cc"
	},
	{
		"id": "a2f85abaac83",
		"ts": "2026-10-26T03:00:41.256Z",
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
		"liquidityUsd": 2033399.24,
		"hash": "a2f85abaac83a0113725923ef5693604fb3427353ae29b7d39d89678589cc66b"
	},
	{
		"id": "65e51fd092d5",
		"ts": "2026-10-26T03:00:41.472Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1104585.72,
		"hash": "65e51fd092d544713230f09a04705f39c06fae303e5fe28386a7ea4160cfa1c0"
	},
	{
		"id": "225631ec5254",
		"ts": "2026-10-26T03:00:41.668Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 7194621.62,
		"hash": "225631ec5254882cfe12aed9aad64ded7ee056372ada0ef0dc3edc21b3cbc929"
	},
	{
		"id": "fbdb413d3717",
		"ts": "2026-10-26T03:00:41.885Z",
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
		"liquidityUsd": 2087230.77,
		"hash": "fbdb413d3717dc7d0152dec342c393fcea9fa43b7c702746ea17229256fba674"
	},
	{
		"id": "f37a465fc803",
		"ts": "2026-10-26T03:00:42.097Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2467962.04,
		"hash": "f37a465fc8039d0b74176369f0f3cc46340797a215f4fb77fd50c28facc8e261"
	},
	{
		"id": "787271c5253f",
		"ts": "2026-10-26T03:00:42.296Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1144501.93,
		"hash": "787271c5253f585e8f4b644cdaf6ff873ff0e35fbf6d787b6e95590f9038cd1f"
	},
	{
		"id": "3ade827c2cf5",
		"ts": "2026-10-26T03:00:42.491Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 1778792.44,
		"hash": "3ade827c2cf5bb4bb9cc8d36f342043eff292585beade60002888c3f32901763"
	},
	{
		"id": "42b9960a2e83",
		"ts": "2026-10-26T03:00:42.679Z",
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
		"liquidityUsd": 8753195.48,
		"hash": "42b9960a2e83feed081b76a50c147c49c5b50bd238a3dae6b4236c4217115f94"
	},
	{
		"id": "727e264e1ee4",
		"ts": "2026-10-26T03:00:42.949Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 58456.15,
		"hash": "727e264e1ee42be316e59dde8e25f320dd8291859e974dd95558c10bd746bc3c"
	},
	{
		"id": "ba35749bbe82",
		"ts": "2026-10-26T03:00:43.142Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 500061.83,
		"hash": "ba35749bbe826b27e7c561b14a42215d90096e3135bd41b8e2b9ae9ea9e19346"
	},
	{
		"id": "910d0c041538",
		"ts": "2026-10-26T03:00:43.346Z",
		"symbol": "PANGEA",
		"token": "0xA551dEF8a44ea423CaA58DA45b3F5764004286Ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 151327.94,
		"hash": "910d0c0415380105ba81c5f579a55e97c1eab05d48b0eb756a1c7f36b6779748"
	},
	{
		"id": "d414bc593681",
		"ts": "2026-10-26T03:00:43.557Z",
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
		"liquidityUsd": 1264108.26,
		"hash": "d414bc5936815702a8dc20a06a10f4ee56450554c1f51b6e492e6d6f25a8ce04"
	},
	{
		"id": "215319367b35",
		"ts": "2026-10-26T03:00:43.768Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 204402.89,
		"hash": "215319367b35892ca37d884da94fda710f22612de218f1999930e879cafb096b"
	},
	{
		"id": "d6e2e8712b9d",
		"ts": "2026-10-26T03:00:43.958Z",
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
		"liquidityUsd": 1083552.95,
		"hash": "d6e2e8712b9dbbff818403031006838173ae11520a8fadd4436035d844c055e4"
	},
	{
		"id": "27fa78eff9ea",
		"ts": "2026-10-26T03:00:44.156Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 654358.58,
		"hash": "27fa78eff9eab5c686bb43b028b557f06a0a943ea59a8d65151ba77269764685"
	},
	{
		"id": "8a342b2c32f0",
		"ts": "2026-10-25T23:45:25.303Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 157813434.43,
		"hash": "8a342b2c32f00b26f432b777f7e383c7a74a799be7e9a4202ce6342031ea0377"
	},
	{
		"id": "520a9aa183a9",
		"ts": "2026-10-25T23:45:26.032Z",
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
		"liquidityUsd": 17443908.9,
		"hash": "520a9aa183a991fa266dcf83b8808ae1c96198a6d5276e1364243d5ee71f02b3"
	},
	{
		"id": "2eab7e89fa3e",
		"ts": "2026-10-25T23:45:26.335Z",
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
		"liquidityUsd": 256404.13,
		"hash": "2eab7e89fa3e087cba3d8c93fd851649a066af490c53f7daad53e682394758a1"
	},
	{
		"id": "208f3fa9a5db",
		"ts": "2026-10-25T23:45:26.611Z",
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
		"liquidityUsd": 7434961.9,
		"hash": "208f3fa9a5db4a1e27aeea83a0ffa54b36c3c4d2ad42a00ad0f0d9afce1f960b"
	},
	{
		"id": "4672d2857fea",
		"ts": "2026-10-25T23:45:26.882Z",
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
		"liquidityUsd": 2064849.97,
		"hash": "4672d2857fea7f7689d6ef38d6e649be2e20ba5c1f17774e7a52658b1ceb98c4"
	},
	{
		"id": "2111c3ff8010",
		"ts": "2026-10-25T23:45:27.160Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1114669.37,
		"hash": "2111c3ff80104f03a298a019706f9cd0739e7cb138f99dab681d4276616eabd1"
	},
	{
		"id": "ecd6bbedd9d0",
		"ts": "2026-10-25T23:45:27.414Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 7434961.9,
		"hash": "ecd6bbedd9d08f0ee7b4c978a205e52461b2fb63aae3ec7f3541783a6e2c5fba"
	},
	{
		"id": "55a512c6fa96",
		"ts": "2026-10-25T23:45:27.681Z",
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
		"liquidityUsd": 2111634.48,
		"hash": "55a512c6fa96ab38e1ec06e91cc78635625ca8475aef57bc2bbea3e0c624b250"
	},
	{
		"id": "68191e98bf4f",
		"ts": "2026-10-25T23:45:27.943Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2469293.67,
		"hash": "68191e98bf4fe49a43208477db4d6cb4baf2aaed03829ad272dee64e1ac3a18d"
	},
	{
		"id": "a4b9a058e5e1",
		"ts": "2026-10-25T23:45:28.215Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1158496.52,
		"hash": "a4b9a058e5e1217b1989c127b6d02c43389ccf5870ba8608ad4e8ad725ca014c"
	},
	{
		"id": "f2e7087e8451",
		"ts": "2026-10-25T23:45:28.462Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 1792186.84,
		"hash": "f2e7087e8451e9c608bbdaebf65f31559a191ef09f80eaaa087fe5329e64dda4"
	},
	{
		"id": "3f20c973fbb5",
		"ts": "2026-10-25T23:45:28.705Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 515429.65,
		"hash": "3f20c973fbb5abacf8c27c74e846404f4c7d58c3a910574ded0479788054890e"
	},
	{
		"id": "06f31ac50dbf",
		"ts": "2026-10-25T23:45:28.949Z",
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
		"liquidityUsd": 8904949.14,
		"hash": "06f31ac50dbfa986dacb737636c9b5deadb798effb9b41191151b77e2a61f528"
	},
	{
		"id": "eb7c287ed021",
		"ts": "2026-10-25T23:45:29.188Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 58269.41,
		"hash": "eb7c287ed0218dc7b5fe072ceff67fbb46642e2a952c77dd3d49669d31ac0389"
	},
	{
		"id": "6ef0aec90a14",
		"ts": "2026-10-25T23:45:29.444Z",
		"symbol": "PANGEA",
		"token": "0xA551dEF8a44ea423CaA58DA45b3F5764004286Ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 156176.83,
		"hash": "6ef0aec90a14d98bf57cd1fef832b8f77720ad8aad51e8b60839a0d5fe1cfb1d"
	},
	{
		"id": "608a0b38abf4",
		"ts": "2026-10-25T23:45:29.693Z",
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
		"liquidityUsd": 1289944.41,
		"hash": "608a0b38abf4c6e875963be1c7b32b4e830981160deb7da13a252306b663cc58"
	},
	{
		"id": "cd8a9a6ec96a",
		"ts": "2026-10-25T23:45:29.941Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3813694.58,
		"hash": "cd8a9a6ec96ab323fceeb9d0fa2e03d3234ae731b30a6cda3b317b56aa9b5a31"
	},
	{
		"id": "b030f969a576",
		"ts": "2026-10-25T23:45:30.185Z",
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
		"liquidityUsd": 1087563.72,
		"hash": "b030f969a5761cb61008095cb5208a8a42c511f917b0382f84ad977d15067a71"
	},
	{
		"id": "82d3ba286556",
		"ts": "2026-10-25T23:45:30.429Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 656693.33,
		"hash": "82d3ba286556c115ceef4e7e28ae4ee040907d28a0f7b18c8cce75bc7d496011"
	},
	{
		"id": "92883cc57c49",
		"ts": "2026-10-25T21:23:08.304Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 158755593.42,
		"hash": "92883cc57c492d8f11de124523e1f2c01ef04fddbd379ba5f397555adb6862f6"
	},
	{
		"id": "48467f4d7a2a",
		"ts": "2026-10-25T21:23:08.713Z",
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
		"liquidityUsd": 17499815.67,
		"hash": "48467f4d7a2a51b3bf02fa25fcea634aa23f16563cd6b94cfd10b5a4095da489"
	},
	{
		"id": "719ec145e4f9",
		"ts": "2026-10-25T21:23:08.939Z",
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
		"liquidityUsd": 257855.15,
		"hash": "719ec145e4f9b5fc8efdb2dd7426d1735508e59955cbd0ad5e0513a96d80f473"
	},
	{
		"id": "b7031e73b069",
		"ts": "2026-10-25T21:23:09.154Z",
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
		"liquidityUsd": 7493378.98,
		"hash": "b7031e73b069a3402d744da5e99662088ea809576799d059dc92fcce70554dbb"
	},
	{
		"id": "38fdfb449c6a",
		"ts": "2026-10-25T21:23:09.372Z",
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
		"liquidityUsd": 2097610.35,
		"hash": "38fdfb449c6ae89c59852ca8f6b9421e48695bbaf35099c221ecb1ef0df18532"
	},
	{
		"id": "15f87c3232fe",
		"ts": "2026-10-25T21:23:09.590Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1125552.43,
		"hash": "15f87c3232fe22565e06fe0d9c512b8440cb9bed687437a8e44197fca4a09dbc"
	},
	{
		"id": "a98b5e52c0aa",
		"ts": "2026-10-25T21:23:09.941Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 7494475.57,
		"hash": "a98b5e52c0aae052d127f6779734dfb9733fe34c2a76774fe21520ee8b821daa"
	},
	{
		"id": "003544d2bb17",
		"ts": "2026-10-25T21:23:10.151Z",
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
		"liquidityUsd": 2128352.39,
		"hash": "003544d2bb176fdacf4ffa2f9f5fd502a2aba7f5abdfc0e84b41529d698d53d7"
	},
	{
		"id": "081852437f27",
		"ts": "2026-10-25T21:23:10.363Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2467426.79,
		"hash": "081852437f27e310f0b5806f62bd6aebbae1a37c13d8173c4eb9ec33fc1a969e"
	},
	{
		"id": "96a1cafda08e",
		"ts": "2026-10-25T21:23:10.565Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1163612.93,
		"hash": "96a1cafda08e6bcca62a4096e226230b93f07c36210acf6bd24f0680b0378d33"
	},
	{
		"id": "09286f742bf5",
		"ts": "2026-10-25T21:23:10.775Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 1792057.42,
		"hash": "09286f742bf5a70f5b6d90a7913e7edc1d09e795cf6e3ce0ede26fd30a2ea27c"
	},
	{
		"id": "d8cfb247f32c",
		"ts": "2026-10-25T21:23:10.982Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 514741.21,
		"hash": "d8cfb247f32ce864ff29886f8f68461120591b5191cb89a759a76600b072b924"
	},
	{
		"id": "eed97c6dedc2",
		"ts": "2026-10-25T21:23:11.159Z",
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
		"liquidityUsd": 8990653.31,
		"hash": "eed97c6dedc22c51e3aabac2300412bad8e1f62cb333db5d458852b65946abd3"
	},
	{
		"id": "57b492847747",
		"ts": "2026-10-25T21:23:11.426Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 58213.81,
		"hash": "57b492847747024a598faa2c1568ce6bf75495239efd683fe34df71d8018af38"
	},
	{
		"id": "900ea97b57a4",
		"ts": "2026-10-25T21:23:11.630Z",
		"symbol": "PANGEA",
		"token": "0xA551dEF8a44ea423CaA58DA45b3F5764004286Ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 180424.22,
		"hash": "900ea97b57a4bd412b0953dcfe1f1a624a8372a6ab840ace9d8381738259edf3"
	},
	{
		"id": "a501e4ff3994",
		"ts": "2026-10-25T21:23:11.845Z",
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
		"liquidityUsd": 1338262.62,
		"hash": "a501e4ff39948f02b6233cc7ae127e002be1381ebc915b2f711dea221b1bf2c5"
	},
	{
		"id": "4dcf4b4707fb",
		"ts": "2026-10-25T21:23:12.043Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 657041.75,
		"hash": "4dcf4b4707fb98d21bbe7aa6000f5b2a8eefe5a32c84df178cd78f54447b2da9"
	},
	{
		"id": "921cc7b0366f",
		"ts": "2026-10-25T21:23:12.238Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3837933.76,
		"hash": "921cc7b0366ff475e9b9c9f1fe95f9ff2658cc5289c222dd4e0df5bb3c198b7f"
	},
	{
		"id": "522fdae226e9",
		"ts": "2026-10-25T21:23:12.434Z",
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
		"liquidityUsd": 1093759.47,
		"hash": "522fdae226e9a6dd18640ef00a55fcc857a2ad5e5117187208790d8fb544bd2a"
	},
	{
		"id": "e0008b9bb42a",
		"ts": "2026-10-25T18:04:25.320Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 159255507.31,
		"hash": "e0008b9bb42a2f338633342c37f9a8667c99fae4ad50226341a61c9d8a6f8e0e"
	},
	{
		"id": "cff617fbb4a2",
		"ts": "2026-10-25T18:04:25.799Z",
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
		"liquidityUsd": 17591285.16,
		"hash": "cff617fbb4a2d3b66446e2184cd14f120b3c52cb09c42c9824aa87417c4b7634"
	},
	{
		"id": "283907a0e87c",
		"ts": "2026-10-25T18:04:26.299Z",
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
		"liquidityUsd": 258727.99,
		"hash": "283907a0e87c20499f7e99f2fd1e66511991ed4456dd70bbbda9c1d845f49608"
	},
	{
		"id": "8b4cb0f58ffe",
		"ts": "2026-10-25T18:04:26.557Z",
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
		"liquidityUsd": 7586627.52,
		"hash": "8b4cb0f58ffe1257a22b0bb2606863ded64e5d3fc3fe77de80e494f7870b4fb3"
	},
	{
		"id": "9d3af16b5f3a",
		"ts": "2026-10-25T18:04:26.809Z",
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
		"liquidityUsd": 2089223.75,
		"hash": "9d3af16b5f3a5801f9ea25b7c4cddddcbfe2a8c93bfe53d45cd18b9cdf949885"
	},
	{
		"id": "1d8d6be6a339",
		"ts": "2026-10-25T18:04:27.061Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1130890.98,
		"hash": "1d8d6be6a339aaea56742bd6dbea745c8b44b8388ea0b397bd9895288bb61928"
	},
	{
		"id": "7de1caf589f9",
		"ts": "2026-10-25T18:04:27.313Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 7591047.06,
		"hash": "7de1caf589f9267d8530f58b337e8bf597b2d0c7d0a345bf26bce72702c6eb19"
	},
	{
		"id": "8a303d28ff24",
		"ts": "2026-10-25T18:04:27.563Z",
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
		"liquidityUsd": 2138784.68,
		"hash": "8a303d28ff24d7e10748787f4eab283f34047e5e229fd6272480768ce45581ae"
	},
	{
		"id": "4e90c0f472e3",
		"ts": "2026-10-25T18:04:27.816Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1152800.1,
		"hash": "4e90c0f472e331bb7147fac160a7f440a9153b165738efe535faa8ea134f7a02"
	},
	{
		"id": "e08e8a214613",
		"ts": "2026-10-25T18:04:28.052Z",
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
		"liquidityUsd": 1794301.88,
		"hash": "e08e8a21461391ecd506bc06ecd663b8bee3e9003af000ca5b31eca9fbe75023"
	},
	{
		"id": "a2707384cf63",
		"ts": "2026-10-25T18:04:28.274Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 2467286.2,
		"hash": "a2707384cf632ebeaa3d3cccf11b1fc642e428b5f457eb627b9f363f6446104c"
	},
	{
		"id": "927e6ab2a475",
		"ts": "2026-10-25T18:04:28.509Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 514267.66,
		"hash": "927e6ab2a47598ceb5d90a2eeda856840f5bf933508416b1654db58e4e2bfbf7"
	},
	{
		"id": "2c5a55132387",
		"ts": "2026-10-25T18:04:28.742Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 57483.29,
		"hash": "2c5a55132387c3f9f852eb9c50e3571219739b860f0c6cb81f72142d3d4783c3"
	},
	{
		"id": "570b0ddb66cc",
		"ts": "2026-10-25T18:04:28.974Z",
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
		"liquidityUsd": 9008794.42,
		"hash": "570b0ddb66cccfded759cb4a508b6cbbfc038f178fdc6c2acdc0fee14efdc437"
	},
	{
		"id": "5628153deaf2",
		"ts": "2026-10-25T18:04:29.199Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 665489.91,
		"hash": "5628153deaf298db1db471ff44084659d89071e5564e38cccb34789c0f146b4d"
	},
	{
		"id": "0351f6b56ff0",
		"ts": "2026-10-25T18:04:29.422Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2439530.04,
		"hash": "0351f6b56ff0f29992f9b29074a7ea70dd0d816be952dd69ca643254cfa78c42"
	},
	{
		"id": "0ba819c9cc3c",
		"ts": "2026-10-25T18:04:29.657Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 180451.75,
		"hash": "0ba819c9cc3cac623cdc54887c3054b67f0b2530929c2d60b9d9ce646d4717a9"
	},
	{
		"id": "e30dac5ac890",
		"ts": "2026-10-25T18:04:29.893Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3852417.83,
		"hash": "e30dac5ac8907c0c8c2420acf2485bdd0f1ba28b9bb28af15f69a80940fd7546"
	},
	{
		"id": "92afd3b47cda",
		"ts": "2026-10-25T18:04:30.116Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4060712.98,
		"hash": "92afd3b47cda3b99ca42c42d6c8c3003b1acc8a03b853a8a0ad619a7db157104"
	},
	{
		"id": "4306109a9d51",
		"ts": "2026-10-25T14:45:27.612Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 158057308.95,
		"hash": "4306109a9d517930bd0ddc8343d5503bd7222ca11cd39b6d89e49789fdc1c743"
	},
	{
		"id": "a2a1468ee928",
		"ts": "2026-10-25T14:45:28.102Z",
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
		"liquidityUsd": 17413469.12,
		"hash": "a2a1468ee928fd57d6269a250252ca04f3c818563c70de811c8342ceb6e54247"
	},
	{
		"id": "07d7e8c9c489",
		"ts": "2026-10-25T14:45:28.377Z",
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
		"liquidityUsd": 256212.67,
		"hash": "07d7e8c9c489ef0fdc78fbb3d2303615b1bb744af8bbeb0a898520cae6f56cec"
	},
	{
		"id": "82f93006b106",
		"ts": "2026-10-25T14:45:28.669Z",
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
		"liquidityUsd": 7611076.17,
		"hash": "82f93006b106233302ccb9d6ca8679453df3450d7e8e32a41fa36a8cb41a87cd"
	},
	{
		"id": "7ed00d59f949",
		"ts": "2026-10-25T14:45:28.949Z",
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
		"liquidityUsd": 2065459.34,
		"hash": "7ed00d59f949595e3ff2982db05b041a2ca1dd09f7e1de0f34b80e8d08182f55"
	},
	{
		"id": "7690de4bd10b",
		"ts": "2026-10-25T14:45:29.218Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1119130.4,
		"hash": "7690de4bd10b9ac6ca9fcecdc4445d88ddd84bf0b3fb1adfface7ecfbed0041c"
	},
	{
		"id": "07532d25f1a5",
		"ts": "2026-10-25T14:45:29.488Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 7611076.17,
		"hash": "07532d25f1a53c847c6f8ef4f347579f90725bd507121ad75396d8ef96cf7118"
	},
	{
		"id": "9e3a953c2a66",
		"ts": "2026-10-25T14:45:29.747Z",
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
		"liquidityUsd": 2115512.81,
		"hash": "9e3a953c2a66e7fea7c72231eec0242f07e14e353586b68bfda7f6b5e4846baf"
	},
	{
		"id": "3103c995ac88",
		"ts": "2026-10-25T14:45:30.016Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1145352.63,
		"hash": "3103c995ac88fac95cb46d23ce1f0f0ab8805560dbc6f22edc2c5f9ab84a56e4"
	},
	{
		"id": "e981f9f13af8",
		"ts": "2026-10-25T14:45:30.276Z",
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
		"liquidityUsd": 1771352.17,
		"hash": "e981f9f13af83ae7714d26b2ebea013484abc5554305bce6fa60bc80538c060d"
	},
	{
		"id": "46e1a75765de",
		"ts": "2026-10-25T14:45:30.517Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 2467851.79,
		"hash": "46e1a75765de67eb47b54398c54c64c07536babd624478991ac340a487306ae6"
	},
	{
		"id": "a249db576422",
		"ts": "2026-10-25T14:45:30.756Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 509035.33,
		"hash": "a249db5764221c5d6db4f3db011e8dcfdaefe61749545a8801be7aa01ed8bd97"
	},
	{
		"id": "56b99b06238b",
		"ts": "2026-10-25T14:45:31.008Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 59917.73,
		"hash": "56b99b06238bdd546400d0219364bdc01f62162f4e764bd51751be0929ad665f"
	},
	{
		"id": "b95cf215b411",
		"ts": "2026-10-25T14:45:31.262Z",
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
		"liquidityUsd": 8910689.97,
		"hash": "b95cf215b411ba533cef20974b756088dd2815f07efba0f6fe6085a1b4e17947"
	},
	{
		"id": "fec3e3ea8765",
		"ts": "2026-10-25T14:45:31.506Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 724192.61,
		"hash": "fec3e3ea876589041d98369bcc61177f7171595e6b3d66e131c5e117ccf46a11"
	},
	{
		"id": "39101854b704",
		"ts": "2026-10-25T14:45:31.766Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 669054.1,
		"hash": "39101854b7042407a43bec19b497e44ccbdd14e546b95dc9f1056b517b1c5f70"
	},
	{
		"id": "91c27e3c6a30",
		"ts": "2026-10-25T14:45:32.009Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3821910.2,
		"hash": "91c27e3c6a3003bd0b17a84f36a44c5117c40fa41f69951889afb618cd197597"
	},
	{
		"id": "f3938c796abb",
		"ts": "2026-10-25T14:45:32.267Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 190464.18,
		"hash": "f3938c796abb132d21febb3ba23158a078f7fa9f0a16bf268b8df10129038cef"
	},
	{
		"id": "e23cccecd10d",
		"ts": "2026-10-25T14:45:32.513Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4479247.38,
		"hash": "e23cccecd10d0b664fa813ab714ffc84ef4a116c3a88cc24d0e0bc0d3f8f960a"
	},
	{
		"id": "9ed6dbba8e15",
		"ts": "2026-10-25T10:38:00.329Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 157589215.28,
		"hash": "9ed6dbba8e154cdb25c055eb8ae0cfaa7d88b7b47336137b25e26fb62206e2fe"
	},
	{
		"id": "d7ed7768eff7",
		"ts": "2026-10-25T10:38:00.625Z",
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
		"liquidityUsd": 17173302.35,
		"hash": "d7ed7768eff75f60dd31e4e12e5d9aa131e517a0918962488ea73f3c2a9e6c1f"
	},
	{
		"id": "eabbbaabb84a",
		"ts": "2026-10-25T10:38:01.040Z",
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
		"liquidityUsd": 255668.91,
		"hash": "eabbbaabb84a89b59a5f71a7b8c441b6053d12a5e6c40a725caa2138ad3fa327"
	},
	{
		"id": "50b10db6ce48",
		"ts": "2026-10-25T10:38:01.302Z",
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
		"liquidityUsd": 7570592.1,
		"hash": "50b10db6ce48349427f94827e09c5df8483506d7230478bd4bf03c9641ce66d2"
	},
	{
		"id": "c256b0ba648d",
		"ts": "2026-10-25T10:38:01.551Z",
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
		"liquidityUsd": 2057747.75,
		"hash": "c256b0ba648d67a44b5888ff587c6874e3ff76d3cc0ec76f2555c9aed7900146"
	},
	{
		"id": "07169c3be298",
		"ts": "2026-10-25T10:38:01.794Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1116274.5,
		"hash": "07169c3be29873876cd5157e06df95631af222a61a37c5cff0679e242292e680"
	},
	{
		"id": "91b94d2780df",
		"ts": "2026-10-25T10:38:02.046Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 7570592.1,
		"hash": "91b94d2780dff31fda9e34b214bc42968191925c1c8afca63ba3b51ca1578f47"
	},
	{
		"id": "0798e1af5973",
		"ts": "2026-10-25T10:38:02.301Z",
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
		"liquidityUsd": 2110772.56,
		"hash": "0798e1af597333fa5c5f6c5fc70c57e63b79ebeee9f1b4c957696fc188fa7e45"
	},
	{
		"id": "3e755b20e2bd",
		"ts": "2026-10-25T10:38:02.545Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1152332.88,
		"hash": "3e755b20e2bda41c759a923beacd291e4372c404dc79af12589ff1bda443aaf8"
	},
	{
		"id": "e43c771d26f9",
		"ts": "2026-10-25T10:38:02.812Z",
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
		"liquidityUsd": 1775190.05,
		"hash": "e43c771d26f976e97bc6d1d9a5efe2cb2503ad2dc911aa6ca811f5b7ec614f3b"
	},
	{
		"id": "39d2e965e411",
		"ts": "2026-10-25T10:38:03.052Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 503984.94,
		"hash": "39d2e965e41176ac42aa34938d433219cc5001e0a182c1ae495dc8dd25a7abdb"
	},
	{
		"id": "b4ea965c1e2b",
		"ts": "2026-10-25T10:38:03.277Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 2466055.21,
		"hash": "b4ea965c1e2b640b55c65d8f53505b02f7b335f5700c360515b69c3efa212d21"
	},
	{
		"id": "fd8995c6d65a",
		"ts": "2026-10-25T10:38:03.513Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 58906.09,
		"hash": "fd8995c6d65a6652e313b0b1af70c1a0b066e2300137ba69a4386d706d619702"
	},
	{
		"id": "b1a40449b8c2",
		"ts": "2026-10-25T10:38:03.751Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 673147.22,
		"hash": "b1a40449b8c2aba1dd29c1572eebc35821c14e6608ec60fdccdfa668cefc5b7b"
	},
	{
		"id": "222b173db8c6",
		"ts": "2026-10-25T10:38:03.976Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 723887.87,
		"hash": "222b173db8c651224040ce4678d98593c49d8bdecfb919f29e6cebd250df17be"
	},
	{
		"id": "6c7ed68a6596",
		"ts": "2026-10-25T10:38:04.210Z",
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
		"liquidityUsd": 8850466.94,
		"hash": "6c7ed68a65969f80206572f46994310d854fbaa1d3de22f2632cfadf6fca8140"
	},
	{
		"id": "35d977c13470",
		"ts": "2026-10-25T10:38:04.438Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3850599.35,
		"hash": "35d977c134704eb036d85f902ef6eafb5594e5b4e1fc01e2d81f283764dcc67c"
	},
	{
		"id": "339fac5e3592",
		"ts": "2026-10-25T10:38:04.666Z",
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
		"liquidityUsd": 1310396.37,
		"hash": "339fac5e359206808230b6d31837078898c381594f0a26634eaef835da3b222c"
	},
	{
		"id": "769c1a68343e",
		"ts": "2026-10-25T10:38:04.902Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 195708.97,
		"hash": "769c1a68343e708d1e1e455e86923cfd264ef5b1839c46b1a28d01105dd87338"
	},
	{
		"id": "203ba0958e81",
		"ts": "2026-10-25T05:37:37.156Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 159354508.68,
		"hash": "203ba0958e81e8f3e0008b8c2600e2c90bfc50d21163da8143a90ed376ac9ab4"
	},
	{
		"id": "573bc303f606",
		"ts": "2026-10-25T05:37:37.657Z",
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
		"liquidityUsd": 17372689.92,
		"hash": "573bc303f6066dc5e9b472ce902684e19c3f40abce6163854ccc233aeab08973"
	},
	{
		"id": "6485a9bd0cd4",
		"ts": "2026-10-25T05:37:37.881Z",
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
		"liquidityUsd": 259596.72,
		"hash": "6485a9bd0cd4cbf8fdb6a6b721e55e28fb75cbee42380648001c1c8a2140aa8d"
	},
	{
		"id": "adb57b2bac47",
		"ts": "2026-10-25T05:37:38.116Z",
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
		"liquidityUsd": 7710137.1,
		"hash": "adb57b2bac47b5bceee7f9ab9a3817828f02de10932da7956e6e076ebcb3187c"
	},
	{
		"id": "c30a7b41f67c",
		"ts": "2026-10-25T05:37:38.325Z",
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
		"liquidityUsd": 2111250.16,
		"hash": "c30a7b41f67c8f3388ad1fe8f86b7cc935d900ade14263cb1346ea6f0ed4cfb4"
	},
	{
		"id": "ff956025593e",
		"ts": "2026-10-25T05:37:38.527Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1134713.38,
		"hash": "ff956025593e26cc9df1cccdd5ab3f352b0100a503cccc6bd755f9cccbeb3c99"
	},
	{
		"id": "0d126a307ab2",
		"ts": "2026-10-25T05:37:38.727Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 7710137.1,
		"hash": "0d126a307ab27512618f4cc3f40c78acfcdb653f51aa0ce6f356692ae861a5ee"
	},
	{
		"id": "9bc2bfac2074",
		"ts": "2026-10-25T05:37:38.936Z",
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
		"liquidityUsd": 2219715.84,
		"hash": "9bc2bfac207483aeb4a3368930c4e7abdfd8b19ab1beb0d7268c4aadb7ea46eb"
	},
	{
		"id": "629e03705dac",
		"ts": "2026-10-25T05:37:39.144Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1201680.38,
		"hash": "629e03705dac9a42af01b75bf3020362e9d053ae68c63865d1029603d9decd50"
	},
	{
		"id": "7abb3f151e24",
		"ts": "2026-10-25T05:37:39.344Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 493225.11,
		"hash": "7abb3f151e240eb1587dd09987b2df75a34ecb2c9f3011166d6307cadf96708c"
	},
	{
		"id": "2955bdb02de6",
		"ts": "2026-10-25T05:37:39.536Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 1789777.19,
		"hash": "2955bdb02de633f827c3c64d3ef90c2790f390163195a3615779d271847c89fa"
	},
	{
		"id": "2a0d45aea550",
		"ts": "2026-10-25T05:37:39.721Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 2465059.36,
		"hash": "2a0d45aea5501ae1d51087e5dc6e041286fffbdbfa8792a6f9105df11c1143ab"
	},
	{
		"id": "831e979c3c04",
		"ts": "2026-10-25T05:37:39.959Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 676683.26,
		"hash": "831e979c3c04d7c47f11f33f8b776a3acec60ebc7ddb1bbf7a434edeefb3974e"
	},
	{
		"id": "5b0b207825a0",
		"ts": "2026-10-25T05:37:40.158Z",
		"symbol": "SLC",
		"token": "0x6Bd83ABC39391Af1E24826E90237C4BD3468b5D2",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 168028.57,
		"hash": "5b0b207825a002e8511cf7e190e712e8ca927c8fe5dab41401aa0ad34c9c04d3"
	},
	{
		"id": "249c8167dfdd",
		"ts": "2026-10-25T05:37:40.349Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 738273.93,
		"hash": "249c8167dfdd87edc84579f95bf742187d4dfa1c50e5ad77c46595235b4ffffb"
	},
	{
		"id": "524abe5dd4a5",
		"ts": "2026-10-25T05:37:40.544Z",
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
		"liquidityUsd": 9021594.29,
		"hash": "524abe5dd4a5a1ed6aa628b32c6fc7060d52e7fa3a5d95a6c8eb1d9ebd171764"
	},
	{
		"id": "ca06a935808d",
		"ts": "2026-10-25T05:37:40.743Z",
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
		"liquidityUsd": 3091728.1,
		"hash": "ca06a935808d362b3ac34fbcd93f4a7a46a0fc81fea5e3db8ee769183fedff38"
	},
	{
		"id": "c97ca88d5f9b",
		"ts": "2026-10-25T05:37:40.943Z",
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
		"liquidityUsd": 1313755.32,
		"hash": "c97ca88d5f9b5249b897de133e12dd168a7fae78df2be42ffc2935394a115ef3"
	},
	{
		"id": "b672bf728804",
		"ts": "2026-10-25T05:37:41.133Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3910453.21,
		"hash": "b672bf72880443316111ae3df74f390df1047525b806a8dcac6e281a423d5a16"
	},
	{
		"id": "7f58c245cc8b",
		"ts": "2026-10-25T00:46:29.180Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 158914756.54,
		"hash": "7f58c245cc8beeeb8645c9b387206a5b04fda4723fbad1109d73714c81769904"
	},
	{
		"id": "af86229b6819",
		"ts": "2026-10-25T00:46:29.545Z",
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
		"liquidityUsd": 17355108.26,
		"hash": "af86229b68199a9c9802cbdcc62b45bc2919f7df6c8951d320d073dcb722a43b"
	},
	{
		"id": "8bf879ad2607",
		"ts": "2026-10-25T00:46:29.769Z",
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
		"liquidityUsd": 255609.39,
		"hash": "8bf879ad26079687004d88cc37791f119d19147d623b7d6333ea8f21083b3bb1"
	},
	{
		"id": "b565d4dd0909",
		"ts": "2026-10-25T00:46:29.976Z",
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
		"liquidityUsd": 8029695.18,
		"hash": "b565d4dd09093c00e9cb9b46635974affe085827eb3054a44cbdf0aec9544aee"
	},
	{
		"id": "bd554c095aa9",
		"ts": "2026-10-25T00:46:30.181Z",
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
		"liquidityUsd": 2142826.81,
		"hash": "bd554c095aa943833325618e921bdfb54c2be6a85baa15be1f098bd4975e6c58"
	},
	{
		"id": "54ff4740953a",
		"ts": "2026-10-25T00:46:30.407Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1126664.57,
		"hash": "54ff4740953a1496d1a84d68904ed5a3f5ba48fd932ba337cd720d576e30f378"
	},
	{
		"id": "dc7fdfb10845",
		"ts": "2026-10-25T00:46:30.618Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2466288.49,
		"hash": "dc7fdfb10845d71497821dc028693bcc61704d7348ee98f37c298590b4cb9c0a"
	},
	{
		"id": "9f0a69a0fcf7",
		"ts": "2026-10-25T00:46:30.824Z",
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
		"liquidityUsd": 2219589.85,
		"hash": "9f0a69a0fcf78123912913a0aa3eb66426d3a57060a5c6814d0e2e3814343da0"
	},
	{
		"id": "a808fcfbd61c",
		"ts": "2026-10-25T00:46:31.024Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1198764.23,
		"hash": "a808fcfbd61c26023076cd99301c4021a3c487759181f900ca208946b28a21dc"
	},
	{
		"id": "3928b3dc2660",
		"ts": "2026-10-25T00:46:31.221Z",
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
		"liquidityUsd": 1800602.26,
		"hash": "3928b3dc2660ee0a26452c48e42192f47699e7c5a682b23103fb9e68d268ad24"
	},
	{
		"id": "133cc74f2573",
		"ts": "2026-10-25T00:46:31.412Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 476183.85,
		"hash": "133cc74f25731dc354a80283832c16a0e50aed5cd7adf5ab22fefd2a70e82663"
	},
	{
		"id": "552b53381e3d",
		"ts": "2026-10-25T00:46:31.595Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 2466288.49,
		"hash": "552b53381e3dbc92d2fe1c3f92b8deb87fbe599bd5b363248def1993018fc6c9"
	},
	{
		"id": "83d3f3dd286f",
		"ts": "2026-10-25T00:46:31.782Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 669863.35,
		"hash": "83d3f3dd286f7478676eaa9a835d0de54123fb4513f66536ad059a2de3c3bb8b"
	},
	{
		"id": "c9a60887213d",
		"ts": "2026-10-25T00:46:32.013Z",
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
		"liquidityUsd": 950261.97,
		"hash": "c9a60887213d101f08c5ba6cb22e09351115f11957803baf1625031b7ef773e3"
	},
	{
		"id": "b30392933702",
		"ts": "2026-10-25T00:46:32.203Z",
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
		"liquidityUsd": 9000294.57,
		"hash": "b30392933702e8bde159ee6b000e86cdadd52c30b46764e54258ee3216882a27"
	},
	{
		"id": "fcf46c44d4f2",
		"ts": "2026-10-25T00:46:32.391Z",
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
		"liquidityUsd": 3119068.71,
		"hash": "fcf46c44d4f2044aec23b74c7404534fbcada06a9223aef8cab1fb5239fa68b4"
	},
	{
		"id": "81b28045eb69",
		"ts": "2026-10-25T00:46:32.626Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 963263.03,
		"hash": "81b28045eb69bfcd2dccca8e763c7cd6988486302692feafd97a3aba590c4c63"
	},
	{
		"id": "b114940ebf94",
		"ts": "2026-10-25T00:46:32.812Z",
		"symbol": "UP",
		"token": "0x5b2193fDc451C1f847bE09CA9d13A4Bf60f8c86B",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 565519.44,
		"hash": "b114940ebf94ae8f09d8c9cf446b3d61b2341970f97772b44c6a3caedcbe0ba2"
	},
	{
		"id": "43927cb5d92a",
		"ts": "2026-10-25T00:46:32.994Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 514417.78,
		"hash": "43927cb5d92adfddc52a21057c08e9c4ca1397561cebded2923c5253c953d9d2"
	},
	{
		"id": "34d9eeea3cfb",
		"ts": "2026-10-24T22:51:10.484Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 158336492.05,
		"hash": "34d9eeea3cfbd1167659b0b239c856b4a4b19bfc67b095d4976a7a65a732d3c4"
	},
	{
		"id": "27dd29a44764",
		"ts": "2026-10-24T22:51:10.755Z",
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
		"liquidityUsd": 17235097.98,
		"hash": "27dd29a44764c073ec798d39b547ddc20422d61b914240926d02ccd216ac2087"
	},
	{
		"id": "dbf154360c6a",
		"ts": "2026-10-24T22:51:11.225Z",
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
		"liquidityUsd": 259000.44,
		"hash": "dbf154360c6aa35c3de5c1feabb314836f3d2b62332b14dfb35322c2f96c0aeb"
	},
	{
		"id": "eb7eaf16ef06",
		"ts": "2026-10-24T22:51:11.490Z",
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
		"liquidityUsd": 8012965.91,
		"hash": "eb7eaf16ef06dc4c3bb3ce8cdbea06969261b3487047d1c1dc1b907ab6ba665f"
	},
	{
		"id": "2aaf4e8aa191",
		"ts": "2026-10-24T22:51:11.766Z",
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
		"liquidityUsd": 2123100.89,
		"hash": "2aaf4e8aa191c3385b1a33787584c7e33e4731c16846e8c4445190abbdd98fca"
	},
	{
		"id": "1a2960c3f3a3",
		"ts": "2026-10-24T22:51:12.048Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1116306.05,
		"hash": "1a2960c3f3a3bf8c544c481cc99f07d69aa17f938a22a5ce3d5dc59419a300da"
	},
	{
		"id": "44e854b7fde8",
		"ts": "2026-10-24T22:51:12.326Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2470677.06,
		"hash": "44e854b7fde836ee3534330823efdc5a808dc7e091e1dcdf8aec77e806033dbf"
	},
	{
		"id": "0a650b8cd709",
		"ts": "2026-10-24T22:51:12.603Z",
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
		"liquidityUsd": 2202923.52,
		"hash": "0a650b8cd709d5c247848f28b533f2b05121db4627ff062f3983274e7415a2ad"
	},
	{
		"id": "9241fde2970e",
		"ts": "2026-10-24T22:51:12.876Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1199560.98,
		"hash": "9241fde2970e82c4bfd85b58b64b2fbe47972a6b9e335298c067b7c777fddc66"
	},
	{
		"id": "f462209e390e",
		"ts": "2026-10-24T22:51:13.157Z",
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
		"liquidityUsd": 1795207.78,
		"hash": "f462209e390e266c1c0a7dc3bd718433ae51fb85f8a22413840bae5e4f62651d"
	},
	{
		"id": "93b76102c897",
		"ts": "2026-10-24T22:51:13.392Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 505439.93,
		"hash": "93b76102c8977bd9dac7520933e1e4ad30483a34b227c80c8120f3bca81d05e2"
	},
	{
		"id": "0003c90d6348",
		"ts": "2026-10-24T22:51:13.640Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 2470677.06,
		"hash": "0003c90d6348e599b7177ebeec9c42de30621402131fe24c93af0700fa144bb8"
	},
	{
		"id": "513aa8a2eb9e",
		"ts": "2026-10-24T22:51:13.876Z",
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
		"liquidityUsd": 956690.72,
		"hash": "513aa8a2eb9efafe2b5be5a012ab54d4787e0aa0dd1eef1a6294319874913344"
	},
	{
		"id": "278525824108",
		"ts": "2026-10-24T22:51:14.124Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 670152.72,
		"hash": "2785258241082801cadab76da1591c6b8f6168f53a6cb5e9e83ca70aa29ae899"
	},
	{
		"id": "6be9fa4efaee",
		"ts": "2026-10-24T22:51:14.366Z",
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
		"liquidityUsd": 8897001.25,
		"hash": "6be9fa4efaee07446a42dbc1a49c33536ee47cf5456aa9a38ba1a6b80aab0505"
	},
	{
		"id": "57abb612a5b0",
		"ts": "2026-10-24T22:51:14.607Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 955997.2,
		"hash": "57abb612a5b003ff6f49faa8663784b2668a12c979f23c0f4db6f735f03a533c"
	},
	{
		"id": "c2e5f51964f3",
		"ts": "2026-10-24T22:51:14.845Z",
		"symbol": "UP",
		"token": "0x5b2193fDc451C1f847bE09CA9d13A4Bf60f8c86B",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 616396.89,
		"hash": "c2e5f51964f394581d64cd8e7d051c0d1babbd2bd6a6e11ed7bf4469f141f0d9"
	},
	{
		"id": "2ffea4c09956",
		"ts": "2026-10-24T22:51:15.089Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 511890.54,
		"hash": "2ffea4c09956175cf60d626b670633c3590a0927fa7244a1ba5198659d6bdcc5"
	},
	{
		"id": "e5279111cb8e",
		"ts": "2026-10-24T22:51:15.324Z",
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
		"liquidityUsd": 3082869.44,
		"hash": "e5279111cb8eefd69942777a48a2083f16c203a0bf816ab636530f13f96afb40"
	},
	{
		"id": "60767f4a28a1",
		"ts": "2026-10-24T20:08:30.710Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 155357768.02,
		"hash": "60767f4a28a1ef8f7549386c041769e63ad2aedf5f639a1fd4f25b6f2eaf2b9a"
	},
	{
		"id": "b2e449777ec4",
		"ts": "2026-10-24T20:08:30.942Z",
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
		"liquidityUsd": 17293130.67,
		"hash": "b2e449777ec43844e8d67da95fe651f70cd1c6ddd3a6c3bd4676922619862304"
	},
	{
		"id": "68253858e2cb",
		"ts": "2026-10-24T20:08:31.176Z",
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
		"liquidityUsd": 259378.97,
		"hash": "68253858e2cbf69fdc585edfcd115d6ed0275246e01c5ad8448571d8f30d41d0"
	},
	{
		"id": "f4c4c5436e80",
		"ts": "2026-10-24T20:08:31.379Z",
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
		"liquidityUsd": 8759039.02,
		"hash": "f4c4c5436e80ff517dfc927e2fbee92635afef60a2cebdeb09c65aebbcfd6b0d"
	},
	{
		"id": "07542722a34f",
		"ts": "2026-10-24T20:08:31.593Z",
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
		"liquidityUsd": 2107017.2,
		"hash": "07542722a34fb39720407eaaa617f1209f25a768bf24a6a3690662196c21b947"
	},
	{
		"id": "b4b611e2e5b2",
		"ts": "2026-10-24T20:08:31.811Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1109612.88,
		"hash": "b4b611e2e5b2f7558a2a6eb4e7118730795dc7cf771c1ea1652c23fd3513b631"
	},
	{
		"id": "81c8e9875006",
		"ts": "2026-10-24T20:08:32.065Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2469284.94,
		"hash": "81c8e987500682cce94fbbd6128d51779d032c0ad16e83d4b4818636d5f7486e"
	},
	{
		"id": "fd4e4d28a254",
		"ts": "2026-10-24T20:08:32.280Z",
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
		"liquidityUsd": 2205707.94,
		"hash": "fd4e4d28a2542ce77dcfb5fe3621b2991b00e6ea4d8f8c9ed18f58921fcd64bd"
	},
	{
		"id": "9ce0bcbd45b7",
		"ts": "2026-10-24T20:08:32.492Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1204783.37,
		"hash": "9ce0bcbd45b75830ad1d999bff52a0e4a3e3ca39da5fbc8ab4b21f370846a6ae"
	},
	{
		"id": "46cf12812254",
		"ts": "2026-10-24T20:08:32.745Z",
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
		"liquidityUsd": 1797138.89,
		"hash": "46cf12812254867ca9c83a603a5398e7992730a3366518404033569bba503ff4"
	}
]
