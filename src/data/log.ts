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
	"updatedAt": "2026-10-08T17:09:41.427Z",
	"tokensScored": 19707,
	"verdictsIssued": 19707,
	"safe": 16786,
	"risky": 1410,
	"likelyRug": 1511,
	"ticks": 1117
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "b42443b1efb2",
		"ts": "2026-10-08T17:09:36.631Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 145218644.1,
		"hash": "b42443b1efb2c5c926667e880405418b2fe970072ea9e11a95ea97e456cb7a2c"
	},
	{
		"id": "764a81137c38",
		"ts": "2026-10-08T17:09:37.259Z",
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
		"liquidityUsd": 14975579.08,
		"hash": "764a81137c38170e57a2d0443a4d1008492ba653d331715d23dea5c73da1cf52"
	},
	{
		"id": "2f7019a8f3d4",
		"ts": "2026-10-08T17:09:37.541Z",
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
		"liquidityUsd": 778950.27,
		"hash": "2f7019a8f3d41310941cc13b4d43cc0fcd6b977e56c4432776f0913e068a51df"
	},
	{
		"id": "bebc418cd17d",
		"ts": "2026-10-08T17:09:37.793Z",
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
		"liquidityUsd": 43485571.56,
		"hash": "bebc418cd17dcefb2678151572c4635eb8030f8587c811a94ae49e5fbfa14f18"
	},
	{
		"id": "2069b6b48a83",
		"ts": "2026-10-08T17:09:38.139Z",
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
		"liquidityUsd": 4653924.81,
		"hash": "2069b6b48a8364d47a50cf833374f62dfd306eec1c4439d01f30759daa95678d"
	},
	{
		"id": "da48563389e1",
		"ts": "2026-10-08T17:09:38.417Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1166243.77,
		"hash": "da48563389e15320388a5943997a584727cb981e74cae1dfe83b9f4c8a36d233"
	},
	{
		"id": "4765e6de3d67",
		"ts": "2026-10-08T17:09:38.622Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 143079.13,
		"hash": "4765e6de3d671f4d21ec1975f4749f6245660ed4f27e5c890fd9642fb8b711c7"
	},
	{
		"id": "b0cbbab57f76",
		"ts": "2026-10-08T17:09:38.940Z",
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
		"liquidityUsd": 2217675.54,
		"hash": "b0cbbab57f768824842ac1193722168d49d202b18bf005c5e5eebbaab543b138"
	},
	{
		"id": "b6df1f72f044",
		"ts": "2026-10-08T17:09:39.166Z",
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
		"liquidityUsd": 1726471.68,
		"hash": "b6df1f72f04435eea4dc407e97f20571c47b9e038671d6ba2b3790384bd9d538"
	},
	{
		"id": "2c54b52b5104",
		"ts": "2026-10-08T17:09:39.559Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1220551.8,
		"hash": "2c54b52b510431965e5f84f7307fd2e37b4d9090507c18c6f805dd6e5b5a8a02"
	},
	{
		"id": "13f64f2d0d7f",
		"ts": "2026-10-08T17:09:39.777Z",
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
		"liquidityUsd": 15245347.88,
		"hash": "13f64f2d0d7f5b4826b297099076bf149815f30d47adb17cf65fd4f6df562656"
	},
	{
		"id": "016ff36d9121",
		"ts": "2026-10-08T17:09:40.007Z",
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
		"liquidityUsd": 146418.29,
		"hash": "016ff36d91210068e1fd7936bc2573b332f8f9f0fd1f9ab319cb843d1de65cd1"
	},
	{
		"id": "b68d35fd3f94",
		"ts": "2026-10-08T17:09:40.205Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1437745.67,
		"hash": "b68d35fd3f94d5e88f8baeb6bf355af331b79190870170850cb421571b937658"
	},
	{
		"id": "553c15fc24c6",
		"ts": "2026-10-08T17:09:40.394Z",
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
		"liquidityUsd": 5052728.08,
		"hash": "553c15fc24c6573daed22d55ec55d43c06b28039b24ba9860fae77d7c0c1f85f"
	},
	{
		"id": "e69e49f81a34",
		"ts": "2026-10-08T17:09:40.612Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1186775.35,
		"hash": "e69e49f81a34dba069a3dd4477736fac28c6621a96b40188a1cb4dd60a83f119"
	},
	{
		"id": "f7174b2fea59",
		"ts": "2026-10-08T17:09:40.807Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 477720.86,
		"hash": "f7174b2fea59678ae90feccf3d754112b18bc2b581b5b7fe30f915a5f413c2cf"
	},
	{
		"id": "a75a9a1bdc39",
		"ts": "2026-10-08T17:09:41.027Z",
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
		"liquidityUsd": 331565.77,
		"hash": "a75a9a1bdc39eeac1f1bbe8715181c235bb67b14e20588f7aafba8dca4e6c4cf"
	},
	{
		"id": "0cc3498658f0",
		"ts": "2026-10-08T17:09:41.223Z",
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
		"liquidityUsd": 3239366.5,
		"hash": "0cc3498658f07dcf68350b6e015120dbd178464b18a0e2c05c0c785dad2d39b4"
	},
	{
		"id": "84c978a220c8",
		"ts": "2026-10-08T17:09:41.427Z",
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
		"liquidityUsd": 344743.51,
		"hash": "84c978a220c8d5982b6c59719d10104da6399009eed863e5a53977243b73ee57"
	},
	{
		"id": "cb00c032fb60",
		"ts": "2026-10-08T09:54:02.788Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156442772.5,
		"hash": "cb00c032fb60cf858a7758456117c48e36d78cd6f6f2b8c06f23146746b79afe"
	},
	{
		"id": "3ca446f405b9",
		"ts": "2026-10-08T09:54:03.289Z",
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
		"liquidityUsd": 15839110.51,
		"hash": "3ca446f405b90c27a730e264c79241d04843f93d9f89c709d8c7b3d5908cfb95"
	},
	{
		"id": "95fef88ec64f",
		"ts": "2026-10-08T09:54:03.535Z",
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
		"liquidityUsd": 816770.98,
		"hash": "95fef88ec64fcc0c9f4c7f2a55180f89960bbbd2750e8e04035938e3452ecada"
	},
	{
		"id": "6a52a782a1f6",
		"ts": "2026-10-08T09:54:04.006Z",
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
		"liquidityUsd": 43300980.08,
		"hash": "6a52a782a1f6b8083ba6a82ff2d618e4d1e372836c5cccb9b21cd1e9d83eb506"
	},
	{
		"id": "fb0d4dc39588",
		"ts": "2026-10-08T09:54:04.272Z",
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
		"liquidityUsd": 4457474.91,
		"hash": "fb0d4dc39588e8b821bc5ff98724fe43600df0cf37c246d24d1931c448e50ff7"
	},
	{
		"id": "1c6f0cbc9112",
		"ts": "2026-10-08T09:54:04.512Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1243379.73,
		"hash": "1c6f0cbc9112488d5fe5e0ff26512e329383c8d063a60b9219c107b29ee8a8eb"
	},
	{
		"id": "37e59e2a3563",
		"ts": "2026-10-08T09:54:04.756Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 143071.45,
		"hash": "37e59e2a3563ea3aac2612596108e058c6db2b22df85c69db9f3d56ef1659204"
	},
	{
		"id": "e92449353a8b",
		"ts": "2026-10-08T09:54:04.996Z",
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
		"liquidityUsd": 661358.56,
		"hash": "e92449353a8b20e75a6b2b44b72a000788b700fec91033824d6fc6fa3ba8612f"
	},
	{
		"id": "5ca398f1581e",
		"ts": "2026-10-08T09:54:05.236Z",
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
		"liquidityUsd": 1840461.18,
		"hash": "5ca398f1581e99577c314e5fead4d5c02487f1c8f65765d336778e175a15b51a"
	},
	{
		"id": "2fc721789d91",
		"ts": "2026-10-08T09:54:05.482Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1088187.88,
		"hash": "2fc721789d912417731e4a565001683efdffa93a7a9a59a2af62a0ae93fc319e"
	},
	{
		"id": "8178a2301306",
		"ts": "2026-10-08T09:54:05.706Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 151426.26,
		"hash": "8178a23013062485d556dbeb57f507ab1a1865aa08c51b5185093de96b8eb400"
	},
	{
		"id": "1995c6043db3",
		"ts": "2026-10-08T09:54:05.932Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1245686.07,
		"hash": "1995c6043db33a5871c3b1fc96b29259a58fc5c0a074fef59b88a6d8afbb4fae"
	},
	{
		"id": "0740369176c9",
		"ts": "2026-10-08T09:54:06.155Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1550774.97,
		"hash": "0740369176c9f3678b5492a45fc219e477bdd6d6dc56835fb09fc6bb9aa247c6"
	},
	{
		"id": "273996aaae35",
		"ts": "2026-10-08T09:54:06.381Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 16661659.84,
		"hash": "273996aaae35fa9b55e158b70df2d9c230d16e07499e12906a9edd620324c080"
	},
	{
		"id": "ff7dd3d47272",
		"ts": "2026-10-08T09:54:06.602Z",
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
		"liquidityUsd": 1015770.47,
		"hash": "ff7dd3d4727225a8778fc3a4774e3f38ae8205ae48a1345166d86a2fdfa275cc"
	},
	{
		"id": "e96c578169c4",
		"ts": "2026-10-08T09:54:06.826Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3527627.82,
		"hash": "e96c578169c469e5cc0923ada8345790e790408d90b230d72528eecba45ad4e3"
	},
	{
		"id": "077f5a00dd21",
		"ts": "2026-10-08T09:54:07.048Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 534039.84,
		"hash": "077f5a00dd2170e21480343d216a8487b5392ca5dc4bf3449a5b059869034ff9"
	},
	{
		"id": "686b9d6cd1b9",
		"ts": "2026-10-08T09:54:07.268Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 212390.92,
		"hash": "686b9d6cd1b9e6f7182c1b1f9710215ecce23bdf372e94f242e9b408f88d0d9d"
	},
	{
		"id": "5661d5ea0078",
		"ts": "2026-10-08T09:54:07.491Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1044163.15,
		"hash": "5661d5ea00783c37e9d9c7a3951510ec648630ebe5083464fa22a9f48bfd2efc"
	},
	{
		"id": "c57a44009bd0",
		"ts": "2026-10-08T02:26:53.790Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156848860.03,
		"hash": "c57a44009bd06378994f6cdd8ac04e27b6bd208503a0fbbe3e9c3cc539eddfb5"
	},
	{
		"id": "884a2a4e4be8",
		"ts": "2026-10-08T02:26:54.173Z",
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
		"liquidityUsd": 15432744.77,
		"hash": "884a2a4e4be8e3bd198e693e9db1f47a5e96da40fceec56e6e58e909e2780b9b"
	},
	{
		"id": "3d7507aec4be",
		"ts": "2026-10-08T02:26:54.382Z",
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
		"liquidityUsd": 823028.3,
		"hash": "3d7507aec4bece33f798434e02e67420157a4381b2a89696cce4db6cdb12ce7f"
	},
	{
		"id": "62b1bca5e63b",
		"ts": "2026-10-08T02:26:54.601Z",
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
		"liquidityUsd": 43819089.43,
		"hash": "62b1bca5e63b5d920da459109cddb1a836ef4dec605abf16aca9383e1b6a65d7"
	},
	{
		"id": "69b5dc9a62ee",
		"ts": "2026-10-08T02:26:54.811Z",
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
		"liquidityUsd": 4422947.44,
		"hash": "69b5dc9a62ee430b8fd861cc577d11c5896de7212869391fd01f1a6a8aca6b67"
	},
	{
		"id": "89f1bc9b3df1",
		"ts": "2026-10-08T02:26:55.021Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1255490.72,
		"hash": "89f1bc9b3df13806146891f18472e31622b0d17ee3c9478c4cb1851b2c81564a"
	},
	{
		"id": "a39590ca255d",
		"ts": "2026-10-08T02:26:55.227Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 143053.37,
		"hash": "a39590ca255d9cf7d6a217eb535f42eff0d3c05da506577dd6da2047097d324e"
	},
	{
		"id": "70fd267963ad",
		"ts": "2026-10-08T02:26:55.456Z",
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
		"liquidityUsd": 691119.16,
		"hash": "70fd267963adf3244e12eef5e6359d92757b8cc378d058ed9edec0b2fdf9c354"
	},
	{
		"id": "730feb2b7e52",
		"ts": "2026-10-08T02:26:55.663Z",
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
		"liquidityUsd": 1764308.73,
		"hash": "730feb2b7e526d83675a1ce96ceeaebcf200ed6cd91fe0bfab2972048a59a1c0"
	},
	{
		"id": "3644cfec56e3",
		"ts": "2026-10-08T02:26:55.890Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1169576.95,
		"hash": "3644cfec56e3fb1b078f19af409bdf9e00132fd0970a232c26a0b9a054f46286"
	},
	{
		"id": "550a6f8c9166",
		"ts": "2026-10-08T02:26:56.102Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1554981,
		"hash": "550a6f8c9166496cb94da1ae69388d86bb891d1c43fbdb51412a7bb73648a7b8"
	},
	{
		"id": "03ccb7a75bdb",
		"ts": "2026-10-08T02:26:56.313Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3550929.91,
		"hash": "03ccb7a75bdb00754798be3f125d6977e89acd85a7d74675144ae6f3174b4f08"
	},
	{
		"id": "4ddfc517a454",
		"ts": "2026-10-08T02:26:56.534Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 164371.42,
		"hash": "4ddfc517a454c55bac27856cf8ce55dd8dd92f35a9225a11be4fcd0d49609b70"
	},
	{
		"id": "df03f5c4ef4a",
		"ts": "2026-10-08T02:26:56.744Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1284680.54,
		"hash": "df03f5c4ef4ab332e2aa6b0a6411cd8dc78cd90cf23d15469fa1b680e661693e"
	},
	{
		"id": "face5f6e5918",
		"ts": "2026-10-08T02:26:56.961Z",
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
		"liquidityUsd": 1003209.78,
		"hash": "face5f6e5918f4a443ee9733e2b324f1f136e88c7ca5b0027ed4ae65f924d554"
	},
	{
		"id": "1b4aa653bd4c",
		"ts": "2026-10-08T02:26:57.155Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4007472.75,
		"hash": "1b4aa653bd4c36be8ce8e394efff13fbe67619c52dc855f13fc022b48fa9864d"
	},
	{
		"id": "34322154e80e",
		"ts": "2026-10-08T02:26:57.365Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4757828.16,
		"hash": "34322154e80eeabdaeaa6ee69ed2c82dca94ace9f1ae5a6622498af34d5e0bcd"
	},
	{
		"id": "ba96f5567c84",
		"ts": "2026-10-08T02:26:57.571Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 17033101.13,
		"hash": "ba96f5567c844bca758beb47236601fc0da2d270c51cbb8f9359f6922abbdc1a"
	},
	{
		"id": "917ddbf1cdb2",
		"ts": "2026-10-08T02:26:57.838Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 214501.18,
		"hash": "917ddbf1cdb27af349de2b7e69579410358c0512a90da86359dc118678bbb767"
	},
	{
		"id": "443c9d12204f",
		"ts": "2026-10-07T22:37:48.250Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156347286.65,
		"hash": "443c9d12204ff1c9f951714d0469f52877c95455a5de0e61868f4bc7c86e2b80"
	},
	{
		"id": "81a84ed6c5df",
		"ts": "2026-10-07T22:37:48.735Z",
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
		"liquidityUsd": 18352776.9,
		"hash": "81a84ed6c5dfae4c2943ebb623810553a132d02fdd2f3ee41bd7c04a6d343b4c"
	},
	{
		"id": "7f67e429db55",
		"ts": "2026-10-07T22:37:48.998Z",
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
		"liquidityUsd": 819856.85,
		"hash": "7f67e429db5536cc72d2b3beec7bd6b91b32072fedbf0dd6f83e30e54ab446bf"
	},
	{
		"id": "9c9fd7182408",
		"ts": "2026-10-07T22:37:49.264Z",
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
		"liquidityUsd": 43551386.46,
		"hash": "9c9fd7182408eb2d587634781261d97c401d75a4f00bffd7a16b78e0168b726e"
	},
	{
		"id": "1723d07514e9",
		"ts": "2026-10-07T22:37:49.526Z",
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
		"liquidityUsd": 4382895.53,
		"hash": "1723d07514e9c48311cdf653b00a28c628db6062a4baa4daf6ac58248ceca399"
	},
	{
		"id": "6a755271aa6e",
		"ts": "2026-10-07T22:37:49.782Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1244357.39,
		"hash": "6a755271aa6e7249bc1f129be4fc3f265c645d2958fae92185e6965be5c32c2b"
	},
	{
		"id": "2245191fe256",
		"ts": "2026-10-07T22:37:50.027Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 43551386.46,
		"hash": "2245191fe256e6b6430e8acaddd601d887a0856d9000630c8bad2c8ae7a6cafa"
	},
	{
		"id": "f270d98f3972",
		"ts": "2026-10-07T22:37:50.287Z",
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
		"liquidityUsd": 680911.81,
		"hash": "f270d98f397214d079a36d84c4ae29be792f5d05e7ead80483d9fe3965e583a6"
	},
	{
		"id": "edb79708cb86",
		"ts": "2026-10-07T22:37:50.541Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2279687.55,
		"hash": "edb79708cb8665e31831afe97b67d8e8e824d69e95360cb7992d4dea82b532df"
	},
	{
		"id": "962d3045d9c7",
		"ts": "2026-10-07T22:37:50.803Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1228213.61,
		"hash": "962d3045d9c70fc87a7304dfa30444bf8c4081f3b37ef943cf54771b195144d4"
	},
	{
		"id": "f4da445b35e6",
		"ts": "2026-10-07T22:37:51.034Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3539279.95,
		"hash": "f4da445b35e69083810987112292e6a44bec84eec4789e3c53f876f90d65f2e8"
	},
	{
		"id": "c6cbad32806f",
		"ts": "2026-10-07T22:37:51.260Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1539099.45,
		"hash": "c6cbad32806fee51c0233b32c317f5d94a605d9b7d66c5f63dd43609543a4159"
	},
	{
		"id": "e6be4b907690",
		"ts": "2026-10-07T22:37:51.501Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1303777.69,
		"hash": "e6be4b907690c3d6e1f26105932836e15e6d03a5868bf5ca737d39031c11b5d2"
	},
	{
		"id": "99041e3b4369",
		"ts": "2026-10-07T22:37:51.739Z",
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
		"liquidityUsd": 1001125.97,
		"hash": "99041e3b43695ea73c754199044acd8d1559c2a2c898eef0c482b2b06baf32ec"
	},
	{
		"id": "83d526e74eb5",
		"ts": "2026-10-07T22:37:51.977Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 17054165.74,
		"hash": "83d526e74eb5318432be07a94f99c9969d231e21105a22b1ed6a318c1b5f2152"
	},
	{
		"id": "97c8cdd2132f",
		"ts": "2026-10-07T22:37:52.215Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4673570.22,
		"hash": "97c8cdd2132f12879a7fe667b29a0c3fae156f565e3105921aa41ce2c8e25e2e"
	},
	{
		"id": "47dba6db383c",
		"ts": "2026-10-07T22:37:52.443Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3990992.68,
		"hash": "47dba6db383c4a52820432db0605da60502c370770579e8c5b544ac6570d7bb0"
	},
	{
		"id": "b4f80a71da34",
		"ts": "2026-10-07T22:37:52.668Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 221956.8,
		"hash": "b4f80a71da34f1bcdb872a5314dffb95849cb08645d062383f36b1df2db91939"
	},
	{
		"id": "cb7e15f9d3d7",
		"ts": "2026-10-07T22:37:52.912Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1076183.36,
		"hash": "cb7e15f9d3d7257f6940fca8930241ab3280cf0e58edd2a1f826891a88ff66a9"
	},
	{
		"id": "bc482d47d063",
		"ts": "2026-10-07T17:12:04.667Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156375306.49,
		"hash": "bc482d47d063aa00294b771eac4368eb4a20827314147265d9d347a00c36c2ab"
	},
	{
		"id": "144fee645940",
		"ts": "2026-10-07T17:12:05.115Z",
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
		"liquidityUsd": 16543226.23,
		"hash": "144fee64594030b9696dc9ac97e4432b35c8581ea93ae72beb4b6459dfcd41ff"
	},
	{
		"id": "e1f6765b4a16",
		"ts": "2026-10-07T17:12:05.411Z",
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
		"liquidityUsd": 822322.34,
		"hash": "e1f6765b4a1629abae75d85ae162ae4b3e2f8b12a6f3252acf83f54331bbb320"
	},
	{
		"id": "cd6e01b1ad90",
		"ts": "2026-10-07T17:12:05.667Z",
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
		"liquidityUsd": 43545154.4,
		"hash": "cd6e01b1ad90edddf01f0059f696939bc6c6e346c93f76fb2dbe692874ebe1f8"
	},
	{
		"id": "8b8c53e1bd50",
		"ts": "2026-10-07T17:12:05.948Z",
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
		"liquidityUsd": 4382756.87,
		"hash": "8b8c53e1bd503eb6bcf67edfc4c53cea08f61309201d75d5beb7885c3273381c"
	},
	{
		"id": "7ec05a696a40",
		"ts": "2026-10-07T17:12:06.207Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1244351.07,
		"hash": "7ec05a696a40a08143fb416058dee1276e336cc264a689e2ce7b10f897409ed2"
	},
	{
		"id": "03e5355889f5",
		"ts": "2026-10-07T17:12:06.477Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 43545154.4,
		"hash": "03e5355889f5f39bb5350bdae3438a78ecc582b131659ee34458d98ef5334419"
	},
	{
		"id": "6dadfbf79a0b",
		"ts": "2026-10-07T17:12:06.736Z",
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
		"liquidityUsd": 533239.47,
		"hash": "6dadfbf79a0b77105f992368157f5056af2ec7df4a9d50ce3b22d14b4921ec79"
	},
	{
		"id": "377486e9d5f0",
		"ts": "2026-10-07T17:12:06.988Z",
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
		"liquidityUsd": 1791943.92,
		"hash": "377486e9d5f00a065723c304d8cc85e74ea6af04f2a3084750d841d6f32d7c6e"
	},
	{
		"id": "2d14e52750d3",
		"ts": "2026-10-07T17:12:07.246Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3510914.95,
		"hash": "2d14e52750d321653aa9ce8fd4c70373fee303daee252aae8810d23055e8a34a"
	},
	{
		"id": "e2cad5c425c2",
		"ts": "2026-10-07T17:12:07.481Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1541803.84,
		"hash": "e2cad5c425c20738e843ed373f52ac1538bd36921821b4ab87abb3d1c5be25b2"
	},
	{
		"id": "aadc25c1a3de",
		"ts": "2026-10-07T17:12:07.720Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 215492.54,
		"hash": "aadc25c1a3de33b9984169a8bdbdec9174817712f3eda00de699f491a57a7762"
	},
	{
		"id": "8a1fb218cff3",
		"ts": "2026-10-07T17:12:07.957Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2382288.75,
		"hash": "8a1fb218cff366c60cfc842dfa7c0cb7bd1d10be65f3c7d8eab98ed21650e5ee"
	},
	{
		"id": "38a5adfd55fe",
		"ts": "2026-10-07T17:12:08.208Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1318261.52,
		"hash": "38a5adfd55fed9fc9defca5b5bcdc2e956f67548c2032144173a02d8369b695d"
	},
	{
		"id": "2ba5618b56d6",
		"ts": "2026-10-07T17:12:08.442Z",
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
		"liquidityUsd": 1022801.89,
		"hash": "2ba5618b56d6da3d202bfd5faf58db7667651a0cb07970afdaaf45e648bbdc0e"
	},
	{
		"id": "31395955f9ba",
		"ts": "2026-10-07T17:12:08.679Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4753131.7,
		"hash": "31395955f9ba2dd5ce4cdfda51d3a0439ad9e6099c3396bf619e262abb82e8fb"
	},
	{
		"id": "399577cb8866",
		"ts": "2026-10-07T17:12:08.913Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1054220,
		"hash": "399577cb8866d79c0f20cde597eaa91c3698da06bb6d50e0144b18c7cfe7f9a5"
	},
	{
		"id": "a6f51d67a0dd",
		"ts": "2026-10-07T17:12:09.150Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 390692.17,
		"hash": "a6f51d67a0dd19b6041853bb4d51d48fbfaedf7c2126224a73d33b3b81033014"
	},
	{
		"id": "9724a9da3c84",
		"ts": "2026-10-07T17:12:09.418Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 152161.26,
		"hash": "9724a9da3c84d178cfcecd0b072f5f5d935a2c2b3ce3369f64813dc6c81c8e7b"
	},
	{
		"id": "d0df59e5e4a0",
		"ts": "2026-10-07T09:43:30.852Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 159038230.35,
		"hash": "d0df59e5e4a02d1f54caf9291a0d0eb2b7173bc4322629ddf1b1979cf6f1f869"
	},
	{
		"id": "47aced783c40",
		"ts": "2026-10-07T09:43:31.545Z",
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
		"liquidityUsd": 17104990.02,
		"hash": "47aced783c40e47951ae37cfaa4e399a2cf227cb72111a390468bee7463d6cc6"
	},
	{
		"id": "7e53abea51e5",
		"ts": "2026-10-07T09:43:31.820Z",
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
		"liquidityUsd": 833553.56,
		"hash": "7e53abea51e5f47d2368bc2e289393b6f62d3bbbc48dacc52e9b29a366d2c44e"
	},
	{
		"id": "7437c98db02d",
		"ts": "2026-10-07T09:43:32.093Z",
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
		"liquidityUsd": 43580433.73,
		"hash": "7437c98db02d834e3b62d82777b0ad66dca0d3c011af4a01ad2cc130908da17b"
	},
	{
		"id": "b5e8737315d1",
		"ts": "2026-10-07T09:43:32.350Z",
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
		"liquidityUsd": 4482006.66,
		"hash": "b5e8737315d1e641211b2ca91016f0388702a1a883e2c4fd9cd888642ced3ac6"
	},
	{
		"id": "fe327eeaf355",
		"ts": "2026-10-07T09:43:32.631Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1259290.04,
		"hash": "fe327eeaf355954746ef7f30285c8e7a81bf6a2c210babcd8432f3f4bbf0d1c3"
	},
	{
		"id": "0dca2205c61e",
		"ts": "2026-10-07T09:43:32.888Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 43580433.73,
		"hash": "0dca2205c61eaecb44a87e31f6a990c8c2600e0d798ee536cb9c9069e54d2839"
	},
	{
		"id": "b8d6dc212e34",
		"ts": "2026-10-07T09:43:33.143Z",
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
		"liquidityUsd": 584569.63,
		"hash": "b8d6dc212e34b2dadd0c38911fcfbce3b84e63035162cb8833d1cd624dd88726"
	},
	{
		"id": "39daee8564d1",
		"ts": "2026-10-07T09:43:33.397Z",
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
		"liquidityUsd": 1769601.23,
		"hash": "39daee8564d1795e63e55e6b04b444fd13a453419df1b3e702666f52846a5069"
	},
	{
		"id": "443fc693e1ba",
		"ts": "2026-10-07T09:43:33.661Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 183162.79,
		"hash": "443fc693e1baf938efbe2907e2adb50f485396bcf17216084d90385f47a70271"
	},
	{
		"id": "b4f58a93e013",
		"ts": "2026-10-07T09:43:33.901Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 211514.6,
		"hash": "b4f58a93e013b8bb81f8c23ee5b6bf084911b0cf8d324c7ff0492ede469860cc"
	},
	{
		"id": "5c0bea12d460",
		"ts": "2026-10-07T09:43:34.138Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3651234.22,
		"hash": "5c0bea12d460f0fc7c045ee36b494b2d4e65d0548478757774ea4f82c4673211"
	},
	{
		"id": "f9e46d86c886",
		"ts": "2026-10-07T09:43:34.375Z",
		"symbol": "ZEN",
		"token": "0xf43eB8De897Fbc7F2502483B2Bef7Bb9EA179229",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2661325.66,
		"hash": "f9e46d86c8862fd00617772a3f1a63d5ff9d041e809cb303f492ae222cb62d81"
	},
	{
		"id": "798e127c12db",
		"ts": "2026-10-07T09:43:34.619Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1333303.85,
		"hash": "798e127c12db45aeb72d91ff2a97e347a027457c83be434d984d6ad5b395cc41"
	},
	{
		"id": "e59c7190035f",
		"ts": "2026-10-07T09:43:34.858Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1583980.18,
		"hash": "e59c7190035ffb1c64500aa1ef9337f2a634bb90ae5d698f0c0eb14bd5584ae2"
	},
	{
		"id": "5621f95a3e42",
		"ts": "2026-10-07T09:43:35.138Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5291872.03,
		"hash": "5621f95a3e42ff77663c297aa0b3d1b394ead9efefa8606f441a87310c324094"
	},
	{
		"id": "ac93c00fe3c5",
		"ts": "2026-10-07T09:43:35.380Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2428253.88,
		"hash": "ac93c00fe3c5ba7ebdd5e3280c5582d0c3fa6f77f3116674c4330bb731ba27f9"
	},
	{
		"id": "20172dfbf25f",
		"ts": "2026-10-07T09:43:35.620Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 388423.05,
		"hash": "20172dfbf25f57c56e4e2c1176a423998ccdac4f6a0fbf69bf0be261334a2696"
	},
	{
		"id": "b957a6a0e816",
		"ts": "2026-10-07T09:43:35.867Z",
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
		"liquidityUsd": 1209402.63,
		"hash": "b957a6a0e816f8a0e0c7693477d64947556639cdd926623c93a07964f46a609f"
	},
	{
		"id": "8cd808c78ae4",
		"ts": "2026-10-07T02:02:02.311Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 162362820.66,
		"hash": "8cd808c78ae4952616b37280a0dc4e2ab43a7bf770c308df2e2fb57aa2002c8a"
	},
	{
		"id": "ccbac085a2b9",
		"ts": "2026-10-07T02:02:02.576Z",
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
		"liquidityUsd": 14060317.09,
		"hash": "ccbac085a2b99cae1b89c6eadf684edd8797cd2163cc5eb51edb4a7ffe7e146f"
	},
	{
		"id": "0133aa2e0be9",
		"ts": "2026-10-07T02:02:03.022Z",
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
		"liquidityUsd": 852982.01,
		"hash": "0133aa2e0be907444389eb2bf0652e2809c8caa2bedab1b77c9686dff8e7c004"
	},
	{
		"id": "fc9b4bdfdcc8",
		"ts": "2026-10-07T02:02:03.273Z",
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
		"liquidityUsd": 43657099.99,
		"hash": "fc9b4bdfdcc85bf3200169347c8cb7f9979a536ce377ed9acac07c8e164d92cb"
	},
	{
		"id": "784144a882f7",
		"ts": "2026-10-07T02:02:03.738Z",
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
		"liquidityUsd": 4568038.76,
		"hash": "784144a882f7f72f75a6d596d9391f39229fb5381503a53f3ab33fa9214620e8"
	},
	{
		"id": "235d17d88379",
		"ts": "2026-10-07T02:02:03.979Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1312005.22,
		"hash": "235d17d883793ace1aa4ef567f71481e6cd729303e148ec43937765bea02059f"
	},
	{
		"id": "a229987c351d",
		"ts": "2026-10-07T02:02:04.227Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 43657099.99,
		"hash": "a229987c351d1720a9c83970c045f31d15d3a975808977b614c34f20347d3dfb"
	},
	{
		"id": "a1733cb69873",
		"ts": "2026-10-07T02:02:04.478Z",
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
		"liquidityUsd": 2436508.4,
		"hash": "a1733cb698731a60abd2b2d038cc59b76be618ce1790c08225600a4ce0282a79"
	},
	{
		"id": "8c78241ddb5a",
		"ts": "2026-10-07T02:02:04.721Z",
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
		"liquidityUsd": 1852385.3,
		"hash": "8c78241ddb5a83a26ce64120b26346b8a452339bc991a7c756fe95388ba77c86"
	},
	{
		"id": "d54033136710",
		"ts": "2026-10-07T02:02:04.961Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 138936.6,
		"hash": "d540331367104334715943a1c1f1c36b380637d30a73fe57ef12587924dc7e41"
	},
	{
		"id": "beaf52f13e83",
		"ts": "2026-10-07T02:02:05.196Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3718560.36,
		"hash": "beaf52f13e834f031a35aa48e92f8fa4ee868982dfb3eadc60c6d21c575d0ef4"
	},
	{
		"id": "ef213cbee01c",
		"ts": "2026-10-07T02:02:05.433Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5532881.76,
		"hash": "ef213cbee01c18fbfa31b9b64fe7aaeb02fe2969d95e9c4507a4e75c4e9ff79d"
	},
	{
		"id": "d28ab469c8ab",
		"ts": "2026-10-07T02:02:05.656Z",
		"symbol": "ZEN",
		"token": "0xf43eB8De897Fbc7F2502483B2Bef7Bb9EA179229",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2529927.2,
		"hash": "d28ab469c8ab1283ea9eeb7d5f07694c816b2034d81aa347d73c3e391fbf89c6"
	},
	{
		"id": "f93caf0a9067",
		"ts": "2026-10-07T02:02:05.894Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1656903.76,
		"hash": "f93caf0a90677a277db5ea0278353e1cc87a5f42dc8bc554ed477743cb6f17b9"
	},
	{
		"id": "2ca66bff6342",
		"ts": "2026-10-07T02:02:06.130Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 230928.58,
		"hash": "2ca66bff6342f7601957d90704a390ab77d3e8db659cd5e5f49228ac3cbe6f56"
	},
	{
		"id": "e6e7e5121d61",
		"ts": "2026-10-07T02:02:06.364Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 400041.88,
		"hash": "e6e7e5121d61ad575002878960a72194d6962ce7dc9bc44f803bc5f794f9deab"
	},
	{
		"id": "a302adfd01ae",
		"ts": "2026-10-07T02:02:06.594Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1447658.99,
		"hash": "a302adfd01ae54dfaaeb5c8dbb640a1cd8662eb9add882a700b5cd1de0a79d6f"
	},
	{
		"id": "04b3637dba55",
		"ts": "2026-10-07T02:02:06.818Z",
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
		"liquidityUsd": 1218088.94,
		"hash": "04b3637dba55275cb02e89e71f5616b9a4beaf3294682ea4b57a4d78d006ed5b"
	},
	{
		"id": "a1946c5918b8",
		"ts": "2026-10-07T02:02:07.057Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18152658.67,
		"hash": "a1946c5918b80c9380ce2ab5fff9caf0023d15fc29752a4071371d7e5b8290aa"
	},
	{
		"id": "de112d871f14",
		"ts": "2026-10-06T22:15:36.386Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 163642268.77,
		"hash": "de112d871f14068008c9309dd576b5df8f55a230a02eea427689550bf82ae6e2"
	},
	{
		"id": "ed4eb02e5d19",
		"ts": "2026-10-06T22:15:36.627Z",
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
		"liquidityUsd": 17243614.94,
		"hash": "ed4eb02e5d19cc08b14885234dd083d0b6963c893b3db959f363b4639209ba45"
	},
	{
		"id": "35969cdacf75",
		"ts": "2026-10-06T22:15:36.830Z",
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
		"liquidityUsd": 852972.94,
		"hash": "35969cdacf75b52ef994864515460006c9a0ee12b876b0423359ae9a7ae0492d"
	},
	{
		"id": "73ac20ef8b2c",
		"ts": "2026-10-06T22:15:37.023Z",
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
		"liquidityUsd": 43903229.32,
		"hash": "73ac20ef8b2caf3b04ca0c301ab78efcf6c03ec53b33e92f2706bd0387f2176e"
	},
	{
		"id": "0581ed8c2f66",
		"ts": "2026-10-06T22:15:37.220Z",
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
		"liquidityUsd": 4643672.06,
		"hash": "0581ed8c2f662d8f2f53c324e88d6ba38f6653d196cbde80f4df091f36b23e6b"
	},
	{
		"id": "8370a8544593",
		"ts": "2026-10-06T22:15:37.416Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1332314.09,
		"hash": "8370a8544593ffb88057d8d9df7f6942413b5ef7004e933c13d947b2f9b05057"
	},
	{
		"id": "b4815ebf3965",
		"ts": "2026-10-06T22:15:37.607Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 43903229.32,
		"hash": "b4815ebf3965cfbd204f2897c0533664afb529e89c0c91a389018e2287ceb71a"
	},
	{
		"id": "62be274487fc",
		"ts": "2026-10-06T22:15:37.817Z",
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
		"liquidityUsd": 2453041.94,
		"hash": "62be274487fc706b5ac81c04b32b863b87da5dcf58868d7d0f7902ed94d587ab"
	},
	{
		"id": "ea4dd5d73201",
		"ts": "2026-10-06T22:15:38.013Z",
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
		"liquidityUsd": 1800187.43,
		"hash": "ea4dd5d73201e1b39a6a55132f08983be44cfbe31ec6a4717be926cf8b5e4cf4"
	},
	{
		"id": "f01bcff4017d",
		"ts": "2026-10-06T22:15:38.208Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 175640.87,
		"hash": "f01bcff4017dea87a996dbd58bfe8ef1ee6bd4ba05669ca54ffa61e15609b56e"
	},
	{
		"id": "4662b5518305",
		"ts": "2026-10-06T22:15:38.397Z",
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
		"liquidityUsd": 1249288.64,
		"hash": "4662b55183055a0cc03fa6bd041c1f94da7627f0c41ea429f37985891b01ae38"
	},
	{
		"id": "49ff08336c4c",
		"ts": "2026-10-06T22:15:38.586Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3787457.05,
		"hash": "49ff08336c4caf246366891e38de256d3a6993ed45088edafa62c8f3900129de"
	},
	{
		"id": "2a592fa6fd98",
		"ts": "2026-10-06T22:15:38.767Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5537211.18,
		"hash": "2a592fa6fd9876f3ad8872d5aaf425e6cd045e096136b82edcb73761af630f5d"
	},
	{
		"id": "7de4300701da",
		"ts": "2026-10-06T22:15:38.947Z",
		"symbol": "ZEN",
		"token": "0xf43eB8De897Fbc7F2502483B2Bef7Bb9EA179229",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2825936.37,
		"hash": "7de4300701da87f23db1ad0f865e63725cc5deea48522394dedca20258043d5d"
	},
	{
		"id": "6a5484ad8177",
		"ts": "2026-10-06T22:15:39.155Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2504802.68,
		"hash": "6a5484ad8177006b45426ab070fb2848cb8e73eaddeefb5d8aa80f9dc78ce9c2"
	},
	{
		"id": "a95ac43e197f",
		"ts": "2026-10-06T22:15:39.339Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1678541.11,
		"hash": "a95ac43e197f59bfe4ec94703a0843977b1d09cf9f1f167b5c824d4958461181"
	},
	{
		"id": "ed4b1c6b20da",
		"ts": "2026-10-06T22:15:39.526Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1470453.25,
		"hash": "ed4b1c6b20da5069227650be843abd18cf7420ff000a8f5b99a85caed059a684"
	},
	{
		"id": "593d8ab9661c",
		"ts": "2026-10-06T22:15:39.714Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 235827.77,
		"hash": "593d8ab9661cecc230a2fef49a7a9b78684d5b5a37ef8b488249e60966733bdc"
	},
	{
		"id": "8dec74bccc24",
		"ts": "2026-10-06T22:15:39.892Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 385492.11,
		"hash": "8dec74bccc243923ac00d1139cc4478e4fa8ba15099ab94f57b2e3a6b0f5ae64"
	},
	{
		"id": "de42c2717353",
		"ts": "2026-10-06T17:51:21.701Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 163568653.31,
		"hash": "de42c271735348d443342a2bc90615ef83e514aa29163af19f82f30168957d49"
	},
	{
		"id": "78d643d158a6",
		"ts": "2026-10-06T17:51:21.983Z",
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
		"liquidityUsd": 17045564.22,
		"hash": "78d643d158a6dac5317752a53104eca57dacc2f47ec1e6788061050ede8bf22c"
	},
	{
		"id": "a8ef4933f2d2",
		"ts": "2026-10-06T17:51:22.262Z",
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
		"liquidityUsd": 854435.63,
		"hash": "a8ef4933f2d29441feab3849ba2dbec139d6bf60caf647d43b6339a31a3b162f"
	},
	{
		"id": "009b4b68b74e",
		"ts": "2026-10-06T17:51:22.536Z",
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
		"liquidityUsd": 43613961.82,
		"hash": "009b4b68b74e005670a651562fe8aa3f6f48946e12ed6d7f1407131381c4646f"
	},
	{
		"id": "21370adab0ff",
		"ts": "2026-10-06T17:51:22.811Z",
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
		"liquidityUsd": 4668599.53,
		"hash": "21370adab0ff969482f6a8626bd05ec30b864c2b889723172be3c5451e778c5e"
	},
	{
		"id": "dce9f7079856",
		"ts": "2026-10-06T17:51:23.080Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1342147.6,
		"hash": "dce9f7079856e9a607b8853db654a2ebb7ee9a8eacb8c740200f447f03638e1e"
	},
	{
		"id": "029fbb02e459",
		"ts": "2026-10-06T17:51:23.361Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 43613961.82,
		"hash": "029fbb02e4592ae70d71497447f8598fad5accddb1a7af186f25b266389aec64"
	},
	{
		"id": "bcd43a8b638b",
		"ts": "2026-10-06T17:51:23.641Z",
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
		"liquidityUsd": 2449870.27,
		"hash": "bcd43a8b638bf6704a02b781602a44d7df97c6e3f20bc0c6316d125df9b8de4e"
	},
	{
		"id": "1bc5fbb1001f",
		"ts": "2026-10-06T17:51:23.917Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1258641.99,
		"hash": "1bc5fbb1001f3117b003c88319edd8be4f39091ea3ce8887b94044fb40c31b48"
	},
	{
		"id": "6680df2d84d9",
		"ts": "2026-10-06T17:51:24.187Z",
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
		"liquidityUsd": 1771888.55,
		"hash": "6680df2d84d9f3253f142664d719553568f2cdef2489dc6676c77a4d93ac4f74"
	},
	{
		"id": "8f242c04abd8",
		"ts": "2026-10-06T17:51:24.440Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 174984.15,
		"hash": "8f242c04abd82c129e73a217c6f0e70c30a648869748e2bfca13e1ff2618acc3"
	},
	{
		"id": "6c17681b0072",
		"ts": "2026-10-06T17:51:24.690Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4154910.65,
		"hash": "6c17681b0072274cf15d539377c07a6a1ac572dc005a04fe639425a346d630a7"
	},
	{
		"id": "f02c0e2c6646",
		"ts": "2026-10-06T17:51:24.938Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1135670.26,
		"hash": "f02c0e2c6646c09ba97c20b49a203c594e045e55b40b238369964247b668bd75"
	},
	{
		"id": "71e24032c6aa",
		"ts": "2026-10-06T17:51:25.194Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 257906.85,
		"hash": "71e24032c6aa8ea78e7b9ff9254ceff9df7cf5dd3a2a8bb58617f507cec47366"
	},
	{
		"id": "66ed08a48264",
		"ts": "2026-10-06T17:51:25.448Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5657152.78,
		"hash": "66ed08a48264ee87d36d8c9b51b4f38a5712c5bf052517a0bd25f3a92922d7b9"
	},
	{
		"id": "963b98153f89",
		"ts": "2026-10-06T17:51:25.709Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3791526.34,
		"hash": "963b98153f890b936711ef4321326640ac2eda303e3c67a2c9e8a89348c45c3a"
	},
	{
		"id": "de3d86608196",
		"ts": "2026-10-06T17:51:25.966Z",
		"symbol": "ZEN",
		"token": "0xf43eB8De897Fbc7F2502483B2Bef7Bb9EA179229",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2595078.15,
		"hash": "de3d8660819675af7c4643597f0342dac8b047d673801dea983cf9d16e876afb"
	},
	{
		"id": "bd3590f69074",
		"ts": "2026-10-06T17:51:26.227Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1688692.72,
		"hash": "bd3590f69074a2ab382a39c7d101be03984d792cf485f12f79b9b86865919840"
	},
	{
		"id": "8dd6081eea2a",
		"ts": "2026-10-06T17:51:26.479Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1457012.06,
		"hash": "8dd6081eea2a072904e1363eabaa4221554c400f6c2bd35d19f970c797f28000"
	},
	{
		"id": "1c34e279102c",
		"ts": "2026-10-06T11:44:15.568Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 163133169.5,
		"hash": "1c34e279102ca8a2f66f40d179a4a3440ffcd727f90ecdfe192f517878001736"
	},
	{
		"id": "2e547ee7278d",
		"ts": "2026-10-06T11:44:16.072Z",
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
		"liquidityUsd": 17152466.38,
		"hash": "2e547ee7278deec899895954e50a3dfb83096df21eec00b7658dbfafd15faaac"
	},
	{
		"id": "e797342760a9",
		"ts": "2026-10-06T11:44:16.516Z",
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
		"liquidityUsd": 859224.7,
		"hash": "e797342760a9eb260d93e3d39ada51f5c4e5dcc8f83ffce13ba392da538c1cb8"
	},
	{
		"id": "05ae7b6a9333",
		"ts": "2026-10-06T11:44:16.767Z",
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
		"liquidityUsd": 44679318.32,
		"hash": "05ae7b6a9333f98345aa43e361017a93b0482a98d8f11df2ee430986d444baf6"
	},
	{
		"id": "eeff63f20776",
		"ts": "2026-10-06T11:44:17.007Z",
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
		"liquidityUsd": 4761984.54,
		"hash": "eeff63f207763f34fb6c4ef6782df0a7bf286f58ce2df38e352f696408917d3e"
	},
	{
		"id": "111a52fd224d",
		"ts": "2026-10-06T11:44:17.261Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1328861.26,
		"hash": "111a52fd224da589ff01f09f2bc105d47194c03ed04f71fa77ff3171f5477136"
	},
	{
		"id": "0edb3e6cb01a",
		"ts": "2026-10-06T11:44:17.499Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 44679318.32,
		"hash": "0edb3e6cb01a4df7a3a763b165a5b5cde85f116bdc1e2969617e039f4dafe7d9"
	},
	{
		"id": "61f4f06ba8eb",
		"ts": "2026-10-06T11:44:17.752Z",
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
		"liquidityUsd": 2468638.85,
		"hash": "61f4f06ba8eb5b22db59b567c17df234a309382bda9417fdbb21a29cf746594e"
	},
	{
		"id": "11dd26165210",
		"ts": "2026-10-06T11:44:17.995Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1316169.48,
		"hash": "11dd261652104d220a0e16399bc5350314bf9796a4e002253a18d1eb4831ca81"
	},
	{
		"id": "1a9a245ba562",
		"ts": "2026-10-06T11:44:18.247Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2677911.94,
		"hash": "1a9a245ba56230c24e8e00778e5537bdaf497d552856b4b6ee9f519405641bdc"
	},
	{
		"id": "a5dcbf8186f8",
		"ts": "2026-10-06T11:44:18.467Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 173313.3,
		"hash": "a5dcbf8186f8406fe72d3a5b82e79d2cf8f667f44f5371c8fcadd2aa99aaf588"
	},
	{
		"id": "786f77df3105",
		"ts": "2026-10-06T11:44:18.705Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4177801.87,
		"hash": "786f77df31059055ca93d3c9b3492bf85c59b52c7055c5255014cb5c26b73724"
	},
	{
		"id": "669bfa532f70",
		"ts": "2026-10-06T11:44:18.925Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1716150.31,
		"hash": "669bfa532f705a8bb773cc904cbde3dda0791f97b533318e2eb0a9bac1a25e3b"
	},
	{
		"id": "e8060995ccec",
		"ts": "2026-10-06T11:44:19.162Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 270205.1,
		"hash": "e8060995ccec82b197d15e2a223ca7f4cb153e1c36abeebc83c186c7e80aea95"
	},
	{
		"id": "91be665b99ec",
		"ts": "2026-10-06T11:44:19.383Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1153838.13,
		"hash": "91be665b99ecd0248558b36b6688f6a6fef7f6476dbe95b8610903ce64b2b8b6"
	},
	{
		"id": "11081b0263d5",
		"ts": "2026-10-06T11:44:19.616Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3881251.34,
		"hash": "11081b0263d5b9c262fe52dd18e58deeca4f3515563ba174e2e52017782cbff8"
	},
	{
		"id": "2ccdc7a79fd3",
		"ts": "2026-10-06T11:44:19.839Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5837380.25,
		"hash": "2ccdc7a79fd3334ee5fcab4c27b4ff87a800a47af25d0409c0dec208c19fdc8b"
	},
	{
		"id": "2f177f6b358b",
		"ts": "2026-10-06T11:44:20.073Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1507185.97,
		"hash": "2f177f6b358b2e61f5f2ac706d9529edd29af03f42d997dc2d1757a87fe42051"
	},
	{
		"id": "2f2df03ccc0b",
		"ts": "2026-10-06T11:44:20.296Z",
		"symbol": "ICP",
		"token": "0x00f3C42833C3170159af4E92dbb451Fb3F708917",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 735051.11,
		"hash": "2f2df03ccc0be6a8e58de68d2717e6b1040f9ee3b41ac2c6eb6f096b9ccbb45c"
	},
	{
		"id": "4d8679fb6f3d",
		"ts": "2026-10-06T04:39:32.697Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 162343350.09,
		"hash": "4d8679fb6f3deed0393f10fdd575cc97f44bbdad96febbd1a6d012e78189aa4d"
	},
	{
		"id": "2031c2589ef8",
		"ts": "2026-10-06T04:39:32.898Z",
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
		"liquidityUsd": 15676719.13,
		"hash": "2031c2589ef8a8c6436ce76bd065dd7a4eaeefc14766ca00657ef35afc3b7824"
	},
	{
		"id": "e47162842f57",
		"ts": "2026-10-06T04:39:33.097Z",
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
		"liquidityUsd": 857810.1,
		"hash": "e47162842f575cb69679b646c42418ba6c431b48280e1440c1bf80bed528b6d9"
	},
	{
		"id": "4053529a9eb5",
		"ts": "2026-10-06T04:39:33.292Z",
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
		"liquidityUsd": 44831317.84,
		"hash": "4053529a9eb5dfd6e6bf1ef5bd2061871e305b41a4a37fa98c5081f729c746cf"
	},
	{
		"id": "e0e7e44f09ee",
		"ts": "2026-10-06T04:39:33.493Z",
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
		"liquidityUsd": 4761101.05,
		"hash": "e0e7e44f09ee10839e9ad073c3fb78406cdbe4e4919b411d9543ad863f453b6a"
	},
	{
		"id": "e24ef501f8b4",
		"ts": "2026-10-06T04:39:33.698Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1313430.03,
		"hash": "e24ef501f8b4830e8fcd51b1820baefefb8fe3311447f7321a6e2729556ec594"
	},
	{
		"id": "72688d2a3d7c",
		"ts": "2026-10-06T04:39:33.901Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 44831317.84,
		"hash": "72688d2a3d7c1890cf1a7699f73752bb387749c04378bd6d7b27675c0b90d5b0"
	},
	{
		"id": "de551bbec49a",
		"ts": "2026-10-06T04:39:34.108Z",
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
		"liquidityUsd": 559064.49,
		"hash": "de551bbec49a416e91c89fb249aaeec8340f7b5a7899122eb2797e513fda4ca0"
	},
	{
		"id": "3ea15b729701",
		"ts": "2026-10-06T04:39:34.298Z",
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
		"liquidityUsd": 1897826.02,
		"hash": "3ea15b729701fbc011e877cc259a81ad66a6d1b3539d4f42cf0ba27b6e8c011b"
	},
	{
		"id": "558d92746f10",
		"ts": "2026-10-06T04:39:34.496Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1334272.31,
		"hash": "558d92746f10c82a7ca81eb44042e8b4b641cbdc70da381b51d4f63a75233f6d"
	}
]
