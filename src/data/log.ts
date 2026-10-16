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
	"updatedAt": "2026-10-16T22:27:37.645Z",
	"tokensScored": 20422,
	"verdictsIssued": 20422,
	"safe": 17405,
	"risky": 1452,
	"likelyRug": 1565,
	"ticks": 1155
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "ff0d144ae100",
		"ts": "2026-10-16T22:27:33.086Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146304939.39,
		"hash": "ff0d144ae100287c112d4570fade1c7fb8e7d07439f0751bc4d96fae6f71f4a3"
	},
	{
		"id": "39e4a2078b44",
		"ts": "2026-10-16T22:27:33.347Z",
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
		"liquidityUsd": 20512250.6,
		"hash": "39e4a2078b44b7874dd581367d94d9321a1eaf24609b3ec6eb17fc98697d0b2f"
	},
	{
		"id": "5314096df566",
		"ts": "2026-10-16T22:27:33.590Z",
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
		"liquidityUsd": 767996.63,
		"hash": "5314096df56635f12e4ec234d50a3cfdbf5defbc243012637391dbe5453976ce"
	},
	{
		"id": "fb5f3558476c",
		"ts": "2026-10-16T22:27:33.842Z",
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
		"liquidityUsd": 46095659.27,
		"hash": "fb5f3558476ca02d1afb72bf9efb24f64f347789b27a9b53df425a504a193299"
	},
	{
		"id": "01e7db467c00",
		"ts": "2026-10-16T22:27:34.093Z",
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
		"liquidityUsd": 4685224.26,
		"hash": "01e7db467c007d955440d061bbfd924a5eee79dd9b40ba83451c6d698364782b"
	},
	{
		"id": "73bbb756c068",
		"ts": "2026-10-16T22:27:34.341Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1142346.27,
		"hash": "73bbb756c068430b0e167908f750027a4024f790396eef0f8ad36b6878fef40e"
	},
	{
		"id": "d46899ff2044",
		"ts": "2026-10-16T22:27:34.594Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 46095659.27,
		"hash": "d46899ff2044cc884020192c397f510ba6073be6ccae81664cbed8e568e4ca97"
	},
	{
		"id": "af217e1741b3",
		"ts": "2026-10-16T22:27:34.842Z",
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
		"liquidityUsd": 3002018.97,
		"hash": "af217e1741b398ae2181fe3be0678457cb38ff31f4f711589959deded4db6f6f"
	},
	{
		"id": "27784a39909b",
		"ts": "2026-10-16T22:27:35.107Z",
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
		"liquidityUsd": 1792577.41,
		"hash": "27784a39909b154c8b7354fb95bf7c5cde2bfb71c1a7f83314f6d85dd6ecd755"
	},
	{
		"id": "94aa171c9366",
		"ts": "2026-10-16T22:27:35.365Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3338925.86,
		"hash": "94aa171c936605ea5c1127bd713c8f34b7ce65087084701533e75ee30d0a4b10"
	},
	{
		"id": "ee67f489e0fc",
		"ts": "2026-10-16T22:27:35.677Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1355754.57,
		"hash": "ee67f489e0fcbdba14a2e1281e982b8b116a4e034c9df4afac36d701cea9bc86"
	},
	{
		"id": "153b80bebb9f",
		"ts": "2026-10-16T22:27:36.033Z",
		"symbol": "Paper",
		"token": "0x8b996930FCdE8260145fb0C0445DB5a9E8293B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10202524.1,
		"hash": "153b80bebb9f8479f5a48d0f45cf3939d1682e2fe6794ad0272df6bacf22ad88"
	},
	{
		"id": "19337da2d89f",
		"ts": "2026-10-16T22:27:36.257Z",
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
		"liquidityUsd": 197271.27,
		"hash": "19337da2d89ff49c1c8ade9b632e93c725454bd0e2e235508de63fb0975366c2"
	},
	{
		"id": "de099653b0cc",
		"ts": "2026-10-16T22:27:36.478Z",
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
		"liquidityUsd": 15994046.83,
		"hash": "de099653b0cce36668d6a8798c8692cb7ed04f41d699ffc82e7004430023bf73"
	},
	{
		"id": "a0f3f6cda696",
		"ts": "2026-10-16T22:27:36.717Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4033164.07,
		"hash": "a0f3f6cda6964b4f3a8a295b4888fc7b21bb87dbf81d36a9ea79cd0f18b65f90"
	},
	{
		"id": "65227b857ae1",
		"ts": "2026-10-16T22:27:36.958Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1101114.76,
		"hash": "65227b857ae129727cbebdbfef0588b74d0563959d85278d668804859e3dd5da"
	},
	{
		"id": "085f62cd7932",
		"ts": "2026-10-16T22:27:37.186Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5032965.88,
		"hash": "085f62cd7932568d546e6592e17fe67adeaede064b642a75e88059c529cdd82d"
	},
	{
		"id": "32262aaa7c45",
		"ts": "2026-10-16T22:27:37.421Z",
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
		"liquidityUsd": 4258649.16,
		"hash": "32262aaa7c4555f75902df62c01f234e8a3a3ba3caa379e2a17359955f4f9115"
	},
	{
		"id": "47fcc22f351c",
		"ts": "2026-10-16T22:27:37.645Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 504814.06,
		"hash": "47fcc22f351cd60d47d616718a4fd06df273e219991061ce3a5427393cc66be2"
	},
	{
		"id": "2588d5df7267",
		"ts": "2026-10-16T19:15:05.878Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 145914600.65,
		"hash": "2588d5df7267d23e0a3ef3f6b014eb49225f9d5d00fe27e440bf5746c227db36"
	},
	{
		"id": "7f20c65553d5",
		"ts": "2026-10-16T19:15:06.195Z",
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
		"liquidityUsd": 18140495.27,
		"hash": "7f20c65553d521d9a19a51b58332922c696093b59c631bd2188e6386cbcfd41d"
	},
	{
		"id": "b37bae18f7e1",
		"ts": "2026-10-16T19:15:06.480Z",
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
		"liquidityUsd": 779330.07,
		"hash": "b37bae18f7e117fd24bb8859bd9ed20c8555e8f6a208f132cdec0d87657e1c83"
	},
	{
		"id": "94bb35a0725b",
		"ts": "2026-10-16T19:15:06.762Z",
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
		"liquidityUsd": 45670843.15,
		"hash": "94bb35a0725bf00f62456623f69186bb8dbcb50887e9bcc2d897963524a03edb"
	},
	{
		"id": "d7519281eb59",
		"ts": "2026-10-16T19:15:06.994Z",
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
		"liquidityUsd": 4642304.14,
		"hash": "d7519281eb59753737c192eef04080ad9e8f43b98cf0972b52fe2dedb48aa61a"
	},
	{
		"id": "c9c3d968fb9f",
		"ts": "2026-10-16T19:15:07.271Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1139729.29,
		"hash": "c9c3d968fb9f3922ac45fc42e0e4c9650431fa234efd149a36263650eae4887d"
	},
	{
		"id": "5c75e78322f8",
		"ts": "2026-10-16T19:15:07.527Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 45607885.28,
		"hash": "5c75e78322f8af7584f394a96719fbb599683c6052bd50d95185bf128807e540"
	},
	{
		"id": "5656801ca60b",
		"ts": "2026-10-16T19:15:07.760Z",
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
		"liquidityUsd": 2976267.03,
		"hash": "5656801ca60bebec66a9c0749e06544d57f35e89599d713b2aab2c920567447c"
	},
	{
		"id": "6515315289ec",
		"ts": "2026-10-16T19:15:08.059Z",
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
		"liquidityUsd": 1760738.38,
		"hash": "6515315289ecf59869420dfc16062b90198315a17b85adcf35a15f3441d5a8a3"
	},
	{
		"id": "f35c2223d044",
		"ts": "2026-10-16T19:15:08.329Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3309969.7,
		"hash": "f35c2223d044bb397c30a5441fe39225a94c8f7cea5d665bb5a88c5f1a5731f4"
	},
	{
		"id": "eb70e031d7e1",
		"ts": "2026-10-16T19:15:08.542Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1342398.9,
		"hash": "eb70e031d7e1a60a058bf7ddbb151d1d0bd72a16ef08605f1b83f9926ad3232c"
	},
	{
		"id": "79afbbd0f648",
		"ts": "2026-10-16T19:15:08.752Z",
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
		"liquidityUsd": 195112.14,
		"hash": "79afbbd0f6481425f2548e3491f2e42a2c7d01907d915add641afc8d316bf9d0"
	},
	{
		"id": "aec6058d56ff",
		"ts": "2026-10-16T19:15:08.952Z",
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
		"liquidityUsd": 15871923.33,
		"hash": "aec6058d56fffb253c56660b62bb4833a97a6c900db9c995dff78f9839e78958"
	},
	{
		"id": "f5cd5e356928",
		"ts": "2026-10-16T19:15:09.173Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4979530.02,
		"hash": "f5cd5e356928f8c36d36d648e655ae3c9f6dd29dd2266ea3634e6c7854aeec48"
	},
	{
		"id": "00864d6cbe11",
		"ts": "2026-10-16T19:15:09.365Z",
		"symbol": "Paper",
		"token": "0x8b996930FCdE8260145fb0C0445DB5a9E8293B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10202128.58,
		"hash": "00864d6cbe11e74bec1d16d6e151db8d85473d6bc246b1be9ffd594c1324e69d"
	},
	{
		"id": "4370646f7a7a",
		"ts": "2026-10-16T19:15:09.555Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3994029.5,
		"hash": "4370646f7a7a49b6bb8896beb555a189f3608c7e4b6dea9e80f7e676fb692ebc"
	},
	{
		"id": "0dc3d6493c18",
		"ts": "2026-10-16T19:15:09.744Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1086057.14,
		"hash": "0dc3d6493c18c9f857bdf71e50e5f1786b71b9c0ee7dd10216344cf359782b1e"
	},
	{
		"id": "6f7ec45d5686",
		"ts": "2026-10-16T19:15:09.952Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 490042.44,
		"hash": "6f7ec45d5686703448a4f18e2c11bd7c18e91d9d9ef9209bf236af4f02e2435e"
	},
	{
		"id": "cba7cfd0f50f",
		"ts": "2026-10-16T19:15:10.289Z",
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
		"liquidityUsd": 1477127.49,
		"hash": "cba7cfd0f50ff0eeb41e3c09708442f625d4a0af68d10cce57d94c450c983c3c"
	},
	{
		"id": "0742c011a79d",
		"ts": "2026-10-16T15:09:26.072Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 147091505.93,
		"hash": "0742c011a79d1d86a43c27dc58abe8519754ebc2e29c16915027d9c1ebefe24a"
	},
	{
		"id": "cab2878482cb",
		"ts": "2026-10-16T15:09:26.356Z",
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
		"liquidityUsd": 18538516.38,
		"hash": "cab2878482cbbe47ace3ac758b7d3d31f0157171605ce30de766e3b36ba6d0b5"
	},
	{
		"id": "07547d01ea6a",
		"ts": "2026-10-16T15:09:26.582Z",
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
		"liquidityUsd": 779330.07,
		"hash": "07547d01ea6aff06bd7bc2f1cfe7199206907ba61d8f9afe8f7f0047c46fec15"
	},
	{
		"id": "156f6d390dbe",
		"ts": "2026-10-16T15:09:26.804Z",
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
		"liquidityUsd": 46218797.6,
		"hash": "156f6d390dbecc005f62bca4f02883d3909fcf3b3e3a5687768d1d842c68fe98"
	},
	{
		"id": "8d7022e11cba",
		"ts": "2026-10-16T15:09:27.014Z",
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
		"liquidityUsd": 4734568.28,
		"hash": "8d7022e11cba10c7a537400ba8c6c5aae459306a11242b091c7dca322a08fac9"
	},
	{
		"id": "b3ed29c68b07",
		"ts": "2026-10-16T15:09:27.227Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1171878.69,
		"hash": "b3ed29c68b079dddb3473a1e12bdd9639d7895e7767147d3ae20df2e169ec5fd"
	},
	{
		"id": "8cc66e893b58",
		"ts": "2026-10-16T15:09:27.444Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 46218797.6,
		"hash": "8cc66e893b585264b6e34563c3acecdeb5dfc27019fb5dab39be73733d25ed64"
	},
	{
		"id": "52c166a64abb",
		"ts": "2026-10-16T15:09:27.650Z",
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
		"liquidityUsd": 3042914.37,
		"hash": "52c166a64abb07f6e4a35905c3faa2be1dd8d8f0c548e67c79eb54f948a1eadd"
	},
	{
		"id": "f6b9e451095b",
		"ts": "2026-10-16T15:09:27.857Z",
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
		"liquidityUsd": 1763124.01,
		"hash": "f6b9e451095bb6f104ba3bb2942e0c24ab6c6e39f1f621e70a8d65f8a1cf930a"
	},
	{
		"id": "2d47f8a89362",
		"ts": "2026-10-16T15:09:28.061Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1378967.65,
		"hash": "2d47f8a893624cac120ff5c669d9016143541174f49b5bfdbe581a95ac596e77"
	},
	{
		"id": "2d8f270a4dd4",
		"ts": "2026-10-16T15:09:28.248Z",
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
		"liquidityUsd": 3386585.14,
		"hash": "2d8f270a4dd442fd0391abae96012dc3a73b04b2381e523dd2dec673f005bc29"
	},
	{
		"id": "5cb1816297be",
		"ts": "2026-10-16T15:09:28.452Z",
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
		"liquidityUsd": 164803.55,
		"hash": "5cb1816297be838f83a1873feafa74abcd04ea69ea82214291a16499bae1787e"
	},
	{
		"id": "735d2a76b9bc",
		"ts": "2026-10-16T15:09:28.645Z",
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
		"liquidityUsd": 16263990.57,
		"hash": "735d2a76b9bc41f4664bcdf724a507243303858bdcfea1d9ce8026c5b5d5232c"
	},
	{
		"id": "98d710566e8b",
		"ts": "2026-10-16T15:09:28.834Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4036683.61,
		"hash": "98d710566e8ba597d9931343370c88ed01001a91163daed5381a000326ac72ed"
	},
	{
		"id": "e4e73754ab9d",
		"ts": "2026-10-16T15:09:29.067Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 508305.65,
		"hash": "e4e73754ab9db8cba7b3229db094958c1060c6087646ac60e9f23277704e1790"
	},
	{
		"id": "fd6bcd7c48ac",
		"ts": "2026-10-16T15:09:29.301Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1101992.83,
		"hash": "fd6bcd7c48accda7877350923c67bd16801e45e2fe3a77b34f3d9b9c41fba5d5"
	},
	{
		"id": "fed4a9abe245",
		"ts": "2026-10-16T15:09:29.489Z",
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
		"liquidityUsd": 1981791.42,
		"hash": "fed4a9abe2459a4ccca67087da603bae7a5406e2e73bb32844a9f7988a01d9ea"
	},
	{
		"id": "2c376dd874c9",
		"ts": "2026-10-16T15:09:29.677Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5046009.41,
		"hash": "2c376dd874c931f767a789aa1720b007004e9985d5afad9465a45aa99d0d7ab1"
	},
	{
		"id": "ce3c2c5c424b",
		"ts": "2026-10-16T15:09:29.869Z",
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
		"liquidityUsd": 4724651.57,
		"hash": "ce3c2c5c424bb3b6425e2f5a41df3999d21e7d3aac1e9d5ba864b1d6ece159f2"
	},
	{
		"id": "6b1e91fb7977",
		"ts": "2026-10-16T10:36:34.108Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 147376384.26,
		"hash": "6b1e91fb79778df0f8b16ccf90aac73f47bea1d6a19714f7635b91d6a7e41b64"
	},
	{
		"id": "2c579d2d9fd4",
		"ts": "2026-10-16T10:36:34.370Z",
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
		"liquidityUsd": 18504452.37,
		"hash": "2c579d2d9fd48849b0211da7673828191f3bcf911e2ab25d97bdc1487605cedd"
	},
	{
		"id": "e5b0f9872fbc",
		"ts": "2026-10-16T10:36:34.586Z",
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
		"liquidityUsd": 779330.07,
		"hash": "e5b0f9872fbc07bab4bbf601ea8d3b56041b5c2cacaa7832ec8a8060ce4e4dd9"
	},
	{
		"id": "dc9d685588e5",
		"ts": "2026-10-16T10:36:34.800Z",
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
		"liquidityUsd": 47037099.48,
		"hash": "dc9d685588e562f4b4402e8ea518ae11a8f7f007a92f5415dfcac5710b758d62"
	},
	{
		"id": "a4410e0b27bd",
		"ts": "2026-10-16T10:36:35.024Z",
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
		"liquidityUsd": 4761160.8,
		"hash": "a4410e0b27bda6eae5dd2a78a07ae50fe8bc1c0273e1eb17b5da53232cbd4a9c"
	},
	{
		"id": "d501eec9c707",
		"ts": "2026-10-16T10:36:35.270Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1174300.57,
		"hash": "d501eec9c707547f15117a15600ad974b18f898f1324c00fbb0249312975247d"
	},
	{
		"id": "ea6214505f2a",
		"ts": "2026-10-16T10:36:35.487Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 47037099.48,
		"hash": "ea6214505f2a8d170e90196b9ba0d79dca8d30efaedde417628bac9fa8619bfc"
	},
	{
		"id": "57d50fc82484",
		"ts": "2026-10-16T10:36:35.718Z",
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
		"liquidityUsd": 2362905.23,
		"hash": "57d50fc82484920cb3d70ae45173936a35f86751f259453d21200321e91cfcf0"
	},
	{
		"id": "97f3cc708b10",
		"ts": "2026-10-16T10:36:36.032Z",
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
		"liquidityUsd": 1786059.99,
		"hash": "97f3cc708b108084f980c17240a2794b41c6374925ef5ae28ec8596be58d89dc"
	},
	{
		"id": "ab64e51ffbd6",
		"ts": "2026-10-16T10:36:36.242Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1373171.53,
		"hash": "ab64e51ffbd666202c2c0112a6d8c0ca3ed6a12e71448042e0384b5bc606820a"
	},
	{
		"id": "05e8241ae78a",
		"ts": "2026-10-16T10:36:36.457Z",
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
		"liquidityUsd": 176906.58,
		"hash": "05e8241ae78a2ac95681d251c770cb0013ae246d5bb21cfe97c516d064034261"
	},
	{
		"id": "b5c09ef7167b",
		"ts": "2026-10-16T10:36:36.665Z",
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
		"liquidityUsd": 3078472.9,
		"hash": "b5c09ef7167b8ed79ee135b0fb85521615a41ecc4b58e3255cae7cb33fe52717"
	},
	{
		"id": "72e67fe066a6",
		"ts": "2026-10-16T10:36:36.862Z",
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
		"liquidityUsd": 16589236.94,
		"hash": "72e67fe066a68bee404094de316b93575f8c626d55adc1464e0d1f4de1532e09"
	},
	{
		"id": "cf38fcf9a471",
		"ts": "2026-10-16T10:36:37.058Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 176524.35,
		"hash": "cf38fcf9a4714eb3b3458d95efcad071a6a0b3b68fd5ebb5bce3c6aef6d5e731"
	},
	{
		"id": "2a7abd8d234e",
		"ts": "2026-10-16T10:36:37.263Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1117900.59,
		"hash": "2a7abd8d234ed72ad3145ae908a541e031953c7bc8afca9c3c95cf783fc63723"
	},
	{
		"id": "6965c388d2db",
		"ts": "2026-10-16T10:36:37.468Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4072127.36,
		"hash": "6965c388d2db2e27a5aec9d0a2e388a70b4cf317532efcf43ff6571babded56d"
	},
	{
		"id": "8d1b08c10366",
		"ts": "2026-10-16T10:36:37.658Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2110097.13,
		"hash": "8d1b08c103669b18c51de840174af170dc6c98f153bc9a1e5d928c3368ec4120"
	},
	{
		"id": "507dcc0d80a9",
		"ts": "2026-10-16T10:36:37.852Z",
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
		"liquidityUsd": 4572965.19,
		"hash": "507dcc0d80a9005c60047441be2b7bb8f4e3547f745ad8f970b1d4390b2460f9"
	},
	{
		"id": "5cddb0d576cc",
		"ts": "2026-10-16T10:36:38.062Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5110254.8,
		"hash": "5cddb0d576cc409660a3845de894c3daa582af5c98cf6ae1037c2a31f41cfe5f"
	},
	{
		"id": "1de0a8801b6e",
		"ts": "2026-10-16T05:23:18.755Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146897245.63,
		"hash": "1de0a8801b6e35adf951aaa254a849136714d86e8994c93adc5d437e2f010ebe"
	},
	{
		"id": "2a75a4971989",
		"ts": "2026-10-16T05:23:18.999Z",
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
		"liquidityUsd": 18499519.78,
		"hash": "2a75a4971989e23935384ddb22691cbfc4f1525097329308dda39b94365fb546"
	},
	{
		"id": "ee287501e28f",
		"ts": "2026-10-16T05:23:19.218Z",
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
		"liquidityUsd": 775496.35,
		"hash": "ee287501e28f165246226ae2c1e78a9f90165ec3def2ca9e182a45f1f37071a6"
	},
	{
		"id": "9723747827dd",
		"ts": "2026-10-16T05:23:19.473Z",
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
		"liquidityUsd": 47449897.2,
		"hash": "9723747827ddb495f371911ace3175673503f69aa2644441004f3851b671d372"
	},
	{
		"id": "951308dd7fff",
		"ts": "2026-10-16T05:23:19.692Z",
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
		"liquidityUsd": 4763873,
		"hash": "951308dd7fff9cf273e1936ec16a8a09698ad9da06ff32a7a16c30127ac6e75e"
	},
	{
		"id": "52810655b215",
		"ts": "2026-10-16T05:23:19.896Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1174784.27,
		"hash": "52810655b21510dd3bd78b6029128da1e3728401ae78bf2b4cb87d3475f9bf13"
	},
	{
		"id": "e7280c09dceb",
		"ts": "2026-10-16T05:23:20.110Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 47449897.2,
		"hash": "e7280c09dceb055d3a8add26d0b193719bf22642b4c1b05d5d7af0e07ddea895"
	},
	{
		"id": "4ee9e43562f7",
		"ts": "2026-10-16T05:23:20.335Z",
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
		"liquidityUsd": 3043956.49,
		"hash": "4ee9e43562f75d09481f23bd506e8a831fed9a99adb402b66179b32d1800aad8"
	},
	{
		"id": "0464a5e0158d",
		"ts": "2026-10-16T05:23:20.561Z",
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
		"liquidityUsd": 1805450.31,
		"hash": "0464a5e0158de1b91e0eb47870b83f5fc30dcce7f19cdfaabdfcad20ff3e622c"
	},
	{
		"id": "7cbdcdf92b74",
		"ts": "2026-10-16T05:23:20.784Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1374977.76,
		"hash": "7cbdcdf92b746a9beef83a7d663526eaf0a2849e6cf669a6bb7767609829c94c"
	},
	{
		"id": "b8a901544c44",
		"ts": "2026-10-16T05:23:21.003Z",
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
		"liquidityUsd": 206757.64,
		"hash": "b8a901544c44acf53482ddd66e418147dd862fa7f2c83ba09bd66f861fb2136b"
	},
	{
		"id": "5eb226f85095",
		"ts": "2026-10-16T05:23:21.200Z",
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
		"liquidityUsd": 3077294.79,
		"hash": "5eb226f85095d138428fc4b7fa26359e4572dffb93e8b720eaa77fe6514342c2"
	},
	{
		"id": "ff0c147d135a",
		"ts": "2026-10-16T05:23:21.397Z",
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
		"liquidityUsd": 16587064.69,
		"hash": "ff0c147d135a0d3830bcac5640748819986a34394734c88353c8b728df31004e"
	},
	{
		"id": "70f5e8e7a9b1",
		"ts": "2026-10-16T05:23:21.585Z",
		"symbol": "Paper",
		"token": "0x503fdcc939Ed5c10aCfB495209Fa9d36c5988B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10199551.91,
		"hash": "70f5e8e7a9b1126b84b328174204a9586ae8989f9db0b49759f04c9ae802fadc"
	},
	{
		"id": "8fda869d9777",
		"ts": "2026-10-16T05:23:21.810Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 174339.73,
		"hash": "8fda869d9777453d08a105edc51e6b554c615b0f7ea01f4cbdfc1e21e3761d15"
	},
	{
		"id": "e9c0f6ea1a80",
		"ts": "2026-10-16T05:23:21.995Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2105710.01,
		"hash": "e9c0f6ea1a809ce3ae1843faa7c521b7bf8250389aa252926944d54433b789c7"
	},
	{
		"id": "a6a1c9128b78",
		"ts": "2026-10-16T05:23:22.199Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1115690.73,
		"hash": "a6a1c9128b782b39bb5a40b02ffcebfa04b71b54f88ba293deb4b6dcf58ac3b6"
	},
	{
		"id": "a11e65cedb1f",
		"ts": "2026-10-16T05:23:22.388Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4068385.52,
		"hash": "a11e65cedb1fe77b9a1c7f8bdd6253877b5de15cd082d03d5d2fa059cf224cfc"
	},
	{
		"id": "a74dc91396f7",
		"ts": "2026-10-16T05:23:22.584Z",
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
		"liquidityUsd": 4588254.65,
		"hash": "a74dc91396f7ad9b740a9912f42ec0a57db14f64e8cc283978711b75cde88465"
	},
	{
		"id": "22b7af496896",
		"ts": "2026-10-16T00:02:42.929Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146545015.29,
		"hash": "22b7af4968966dd9ce7be3cf557e4d6ac123b92c3544bed02eafdd70ccba9e1a"
	},
	{
		"id": "64a16bd3e0b2",
		"ts": "2026-10-16T00:02:43.486Z",
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
		"liquidityUsd": 18468293.71,
		"hash": "64a16bd3e0b289be3c7e5d0e4ef940b3f004b5c92b9d8cf8b4411448ac0a12a4"
	},
	{
		"id": "76ea99a3a9f9",
		"ts": "2026-10-16T00:02:43.782Z",
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
		"liquidityUsd": 777032.98,
		"hash": "76ea99a3a9f9ff04608e5acbe381c9c7fd03c4cd04889937026486fb22c216e0"
	},
	{
		"id": "06cd451d4ff7",
		"ts": "2026-10-16T00:02:44.074Z",
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
		"liquidityUsd": 46602839.41,
		"hash": "06cd451d4ff7bc1567044ad4a667314bfb057dc67e54bdfe8a14224b663c99a0"
	},
	{
		"id": "5eb0267806cb",
		"ts": "2026-10-16T00:02:44.386Z",
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
		"liquidityUsd": 4737024.85,
		"hash": "5eb0267806cbd6de45e5f1043ae7448d9d19078258188c593f92668c5bc83770"
	},
	{
		"id": "3099a3833ba3",
		"ts": "2026-10-16T00:02:44.672Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1162969.42,
		"hash": "3099a3833ba3be59154a163aa2b6553ee892d01c5a81323230390eb48709aa7b"
	},
	{
		"id": "7b24d46302ae",
		"ts": "2026-10-16T00:02:44.978Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 140026.23,
		"hash": "7b24d46302aeea583b3b5e26f4b123ff17825acbd7f25d6906f11352992d2590"
	},
	{
		"id": "17254f8fc49e",
		"ts": "2026-10-16T00:02:45.725Z",
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
		"liquidityUsd": 2384586.98,
		"hash": "17254f8fc49e6c073b61593cee7367413bb058f4ffd9c9ffa16191bfc3262407"
	},
	{
		"id": "d38b13cae7f4",
		"ts": "2026-10-16T00:02:46.015Z",
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
		"liquidityUsd": 1801325.39,
		"hash": "d38b13cae7f45681a1b01fc867f5733de6850ce8c17059fc3378909d63e0a63f"
	},
	{
		"id": "3564292e5c73",
		"ts": "2026-10-16T00:02:46.321Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1351421.98,
		"hash": "3564292e5c734d6253f05984a45c1f201dee9445351f5708fad18c44c0f67c8d"
	},
	{
		"id": "176353078097",
		"ts": "2026-10-16T00:02:46.600Z",
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
		"liquidityUsd": 16656824.78,
		"hash": "1763530780978e4c333ef1e5b0c68f0be476b0a8473f477a9f950321e778b56c"
	},
	{
		"id": "f05af8e81dd1",
		"ts": "2026-10-16T00:02:46.872Z",
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
		"liquidityUsd": 201228.67,
		"hash": "f05af8e81dd18adfb8b00493555739c01a51ecaa89c0eb7705f2a4c46ad05a63"
	},
	{
		"id": "9e3addf70a1f",
		"ts": "2026-10-16T00:02:47.160Z",
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
		"liquidityUsd": 3038530.37,
		"hash": "9e3addf70a1f5bc39895fb824935fb577f325dfb6d3df768f029d420366672a2"
	},
	{
		"id": "d9d29b1a9a3c",
		"ts": "2026-10-16T00:02:47.439Z",
		"symbol": "Paper",
		"token": "0x503fdcc939Ed5c10aCfB495209Fa9d36c5988B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10199550.98,
		"hash": "d9d29b1a9a3c0624531e8f4e5ff00f005d0e4d39f9ff9acd040c7022a10be9dd"
	},
	{
		"id": "d9ae5614c62c",
		"ts": "2026-10-16T00:02:47.712Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1108450.42,
		"hash": "d9ae5614c62c5011e058a05b57634f78f483a89b366f4af6f13dc3b83be4e168"
	},
	{
		"id": "fd553c1a7ade",
		"ts": "2026-10-16T00:02:47.999Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2098496.66,
		"hash": "fd553c1a7ade06e1131671439dede39d3dda9873a928cf9138b3114e691ec925"
	},
	{
		"id": "c54c7aed3493",
		"ts": "2026-10-16T00:02:48.284Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1117804.19,
		"hash": "c54c7aed349331d39ad41308b4c30662f6b799998ea58959129f0d8fe266ce8e"
	},
	{
		"id": "86bbd88e7ec3",
		"ts": "2026-10-16T00:02:48.556Z",
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
		"liquidityUsd": 4558077.87,
		"hash": "86bbd88e7ec327878c3a71f2033a7e2a634b54afc97d4e4a1de2f121750a770d"
	},
	{
		"id": "f4d1316cb4f2",
		"ts": "2026-10-16T00:02:48.843Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4030866.55,
		"hash": "f4d1316cb4f248d77fc004b0ba3693335bd65bc31402f558ff8337775fa09bec"
	},
	{
		"id": "5aff608488df",
		"ts": "2026-10-15T21:08:05.800Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146866561.16,
		"hash": "5aff608488df5f72f3c79cba33a848b28c721e0e6ff129f6cfea50624367de26"
	},
	{
		"id": "aca65df99a67",
		"ts": "2026-10-15T21:08:06.307Z",
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
		"liquidityUsd": 18458009.27,
		"hash": "aca65df99a67a33e7e99d3d283665c5561dc2c4788ea10b27a0d80e3f0f94d2b"
	},
	{
		"id": "33abd1f415fe",
		"ts": "2026-10-15T21:08:06.592Z",
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
		"liquidityUsd": 777032.98,
		"hash": "33abd1f415fe689df7bcca5542a710176ae5c460f3921e7430e55a018cf29416"
	},
	{
		"id": "878dd50f0761",
		"ts": "2026-10-15T21:08:06.862Z",
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
		"liquidityUsd": 45539994.41,
		"hash": "878dd50f0761ce0c1aef9dfb5ade726f1bf2516481eb277a133cbf04df82db84"
	},
	{
		"id": "19f90e7a9414",
		"ts": "2026-10-15T21:08:07.167Z",
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
		"liquidityUsd": 4759144.41,
		"hash": "19f90e7a94148d82092f8b8208a6208801bc6f739c2b5480cf9d6bd9913ca587"
	},
	{
		"id": "9160611cbd75",
		"ts": "2026-10-15T21:08:07.421Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1172131.27,
		"hash": "9160611cbd7519270b6a92e6b2003c4bc07b511a4d3740c1e0654760cfda127b"
	},
	{
		"id": "efaa05142d56",
		"ts": "2026-10-15T21:08:07.711Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 140026.22,
		"hash": "efaa05142d56ce94f72084510fe521030046c55242651a67f9dfd0e3118fd388"
	},
	{
		"id": "dbfd617a7625",
		"ts": "2026-10-15T21:08:08.013Z",
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
		"liquidityUsd": 2552971.19,
		"hash": "dbfd617a76251774f3a8f3695313b41a323b9e3e8de48c8bdc20bd94a7b8cdbf"
	},
	{
		"id": "57c0e5f26ff5",
		"ts": "2026-10-15T21:08:08.305Z",
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
		"liquidityUsd": 1789184.87,
		"hash": "57c0e5f26ff5a351cfccece30e79817f33df7e252db476fa4185833680bbe830"
	},
	{
		"id": "838305a45709",
		"ts": "2026-10-15T21:08:08.597Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3042069.07,
		"hash": "838305a45709d30f84d4ca6b5747f17991d156f77cba8cb9d6ba64cfaa6763e3"
	},
	{
		"id": "b8d54215b8a4",
		"ts": "2026-10-15T21:08:08.839Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1391826.81,
		"hash": "b8d54215b8a418168206915207d442c39ce6c536d39b2f8f718ff9d93a2caa36"
	},
	{
		"id": "d7203e6dbbff",
		"ts": "2026-10-15T21:08:09.079Z",
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
		"liquidityUsd": 16737377.48,
		"hash": "d7203e6dbbff8c9e91d93d4059205180c1093228f303904a042dbe2b57028449"
	},
	{
		"id": "c870b0fc54f5",
		"ts": "2026-10-15T21:08:09.348Z",
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
		"liquidityUsd": 199696.18,
		"hash": "c870b0fc54f58426d0c73459cb591bdcedb01e2723cf799933995d65210ee29b"
	},
	{
		"id": "a19301fcfefd",
		"ts": "2026-10-15T21:08:09.628Z",
		"symbol": "Paper",
		"token": "0x503fdcc939Ed5c10aCfB495209Fa9d36c5988B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10199596.35,
		"hash": "a19301fcfefd8216a68a4539d5ea9f11f17913f475f5d4b28c12e55b6a7ea711"
	},
	{
		"id": "7393be6019fd",
		"ts": "2026-10-15T21:08:09.879Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1111152.09,
		"hash": "7393be6019fda336deaf0b671937bf3befd5998fc940c5890f6e8249bd62acf3"
	},
	{
		"id": "a98d22bdf3a5",
		"ts": "2026-10-15T21:08:10.113Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2080038.85,
		"hash": "a98d22bdf3a545a1e01544ae8059250d51159b50fd0aca6262cb4ff13f41e825"
	},
	{
		"id": "283dafc3fda8",
		"ts": "2026-10-15T21:08:10.353Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1125743.87,
		"hash": "283dafc3fda882f62df882d3195881d017e0f23429555d35628ff5c7cd885d65"
	},
	{
		"id": "4ce83faf97d4",
		"ts": "2026-10-15T21:08:10.591Z",
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
		"liquidityUsd": 4658763.43,
		"hash": "4ce83faf97d47d1663a44abc187aede38bf81a3f4384240aef5cf80a8c6f84d3"
	},
	{
		"id": "f13d2b043212",
		"ts": "2026-10-15T17:58:32.466Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146642909.49,
		"hash": "f13d2b04321279526f201f38a1171dfc7d3c8998281049bcb2add69e7082ce93"
	},
	{
		"id": "c66b8b631b62",
		"ts": "2026-10-15T17:58:32.722Z",
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
		"liquidityUsd": 18429056.48,
		"hash": "c66b8b631b6219ae94399d08a7f89a9090053365732b936cd9c342a6c24db6f4"
	},
	{
		"id": "85c4b29c4ba0",
		"ts": "2026-10-15T17:58:32.969Z",
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
		"liquidityUsd": 778133.59,
		"hash": "85c4b29c4ba0a054db5ac1be87dd340cfd2fa21a319189ba581c56bd2ac0be65"
	},
	{
		"id": "dda58194667f",
		"ts": "2026-10-15T17:58:33.188Z",
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
		"liquidityUsd": 45189762.68,
		"hash": "dda58194667fff15bf29b988bd49832a1d08ba2a81ff1213dffbcd85bb531200"
	},
	{
		"id": "61a4158aea6d",
		"ts": "2026-10-15T17:58:33.424Z",
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
		"liquidityUsd": 4725518.14,
		"hash": "61a4158aea6d87305a21d086e2a33a05ecf2ea6b6f7ec5a1c7792be2f6c18137"
	},
	{
		"id": "d087a0cb3a64",
		"ts": "2026-10-15T17:58:33.639Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1169763.78,
		"hash": "d087a0cb3a642befaec07227806c41046d3b86d4ec54b24e17fb79ef36efbc6a"
	},
	{
		"id": "8d244ab6e9b3",
		"ts": "2026-10-15T17:58:33.853Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 140025.66,
		"hash": "8d244ab6e9b3869b670d7cbe44f9fbef5c8e4bc4aff4a6452c272b9e64486de7"
	},
	{
		"id": "5406196cfe2c",
		"ts": "2026-10-15T17:58:34.057Z",
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
		"liquidityUsd": 2553213.84,
		"hash": "5406196cfe2c45166a00752c9e62251bef70985b4c98afb2e16ea52897ca5166"
	},
	{
		"id": "ba8640d7f671",
		"ts": "2026-10-15T17:58:34.360Z",
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
		"liquidityUsd": 1788912.4,
		"hash": "ba8640d7f671c1f0ee3359330f59430a79bb2a3d103953d9cf7d93cf9183156f"
	},
	{
		"id": "d89d19af6cf7",
		"ts": "2026-10-15T17:58:34.583Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2975854.26,
		"hash": "d89d19af6cf7f1a225a160a6f3bc215cc4e2a101d9e3b26ee8af297b21c96eee"
	},
	{
		"id": "510102afeb9c",
		"ts": "2026-10-15T17:58:34.783Z",
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
		"liquidityUsd": 16860529.52,
		"hash": "510102afeb9c0c1c9364f4bad4a74dab5d1cd990018238bc4d25e9602ee59a13"
	},
	{
		"id": "49a1208063d6",
		"ts": "2026-10-15T17:58:34.980Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1386084.01,
		"hash": "49a1208063d68dc3c24d1e59575a9c3cfd92bb21d9d72e47c1e83bed28d74803"
	},
	{
		"id": "9e8c17724247",
		"ts": "2026-10-15T17:58:35.202Z",
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
		"liquidityUsd": 224860.04,
		"hash": "9e8c177242479690c95269b1bfcbeff0d3f308762bff376157ec82d03b2b1a9e"
	},
	{
		"id": "2101174bfe1e",
		"ts": "2026-10-15T17:58:35.408Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2079659.2,
		"hash": "2101174bfe1ec0996c5c940f491538048d4baf0d0c0a4617b78df78540c4dd70"
	},
	{
		"id": "5da858f62061",
		"ts": "2026-10-15T17:58:35.604Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3990223.18,
		"hash": "5da858f62061ec67ed03a20e78a4a14f07753b6f309645117767fe5fa1519f66"
	},
	{
		"id": "105b03d841ec",
		"ts": "2026-10-15T17:58:35.819Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1114634.81,
		"hash": "105b03d841ecd0c0c06d80499c6378db445db664a9f30ca03fa2606ad981d6f4"
	},
	{
		"id": "ecbf70e234d9",
		"ts": "2026-10-15T17:58:36.015Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1109477.62,
		"hash": "ecbf70e234d988004edfb600f7ec8a5e560f9484f4a365a7558a82378fc1b92a"
	},
	{
		"id": "fa48601f2c19",
		"ts": "2026-10-15T17:58:36.199Z",
		"symbol": "Paper",
		"token": "0x503fdcc939Ed5c10aCfB495209Fa9d36c5988B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10199551.62,
		"hash": "fa48601f2c191d8e3875dead1b697c1d5e34b84859f14ce63a41fa3492901910"
	},
	{
		"id": "f1c1d2e33dc3",
		"ts": "2026-10-15T13:53:55.432Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 141928861.62,
		"hash": "f1c1d2e33dc32a99918e0f700ce22885e5e49a68bf09be89ddf6390fd3aac977"
	},
	{
		"id": "ed88e5ce14a0",
		"ts": "2026-10-15T13:53:56.008Z",
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
		"liquidityUsd": 17667591.52,
		"hash": "ed88e5ce14a046c99de1c314b8435bc94415978829017b78515b124eb3292bc3"
	},
	{
		"id": "8c0c870818d2",
		"ts": "2026-10-15T13:53:56.246Z",
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
		"liquidityUsd": 755434.97,
		"hash": "8c0c870818d2d99ed29d77d8ebe74597ccf812218e5787b1f50128c61dbcab6f"
	},
	{
		"id": "17683797fc49",
		"ts": "2026-10-15T13:53:56.624Z",
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
		"liquidityUsd": 44044252,
		"hash": "17683797fc4929ac0876238af62c88a5678732fe500d4c43d540a91d932a85fe"
	},
	{
		"id": "b42192a2ffb6",
		"ts": "2026-10-15T13:53:56.851Z",
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
		"liquidityUsd": 4518449.7,
		"hash": "b42192a2ffb6f89b1a0a7fb1d2001add7f46f91024be91bed1cd6c713b7d7bdd"
	},
	{
		"id": "c6c9db0cff26",
		"ts": "2026-10-15T13:53:57.091Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1113509.88,
		"hash": "c6c9db0cff2601cd90a123127076d8b1cfb05df0b767a04e20bda7e63f1a5697"
	},
	{
		"id": "914dd1e1cefe",
		"ts": "2026-10-15T13:53:57.354Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 140024.7,
		"hash": "914dd1e1cefe2a61ecdd84a282ca9a2effff175e3f09fa0b851b0efbcff25c57"
	},
	{
		"id": "f99c4d4a3ab0",
		"ts": "2026-10-15T13:53:57.615Z",
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
		"liquidityUsd": 2445235.33,
		"hash": "f99c4d4a3ab02b3788e593304c73a6fb431734568abc5ec743af5b1d98096a4f"
	},
	{
		"id": "5c2d2469dc00",
		"ts": "2026-10-15T13:53:57.946Z",
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
		"liquidityUsd": 1755598,
		"hash": "5c2d2469dc006d8cb989b45412e27e54ae7d06924722ea38658ad236d5f80738"
	},
	{
		"id": "2080033379af",
		"ts": "2026-10-15T13:53:58.188Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2770170.05,
		"hash": "2080033379afefcbbebd9d55f18dd7af3368cceefca4eaf127659f8d440f0860"
	},
	{
		"id": "436bfea66525",
		"ts": "2026-10-15T13:53:58.410Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1327719.39,
		"hash": "436bfea66525fa92592b855ca48d005301a862585d87c918df87f1cbe8399206"
	},
	{
		"id": "8895744871d6",
		"ts": "2026-10-15T13:53:58.623Z",
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
		"liquidityUsd": 15612019.88,
		"hash": "8895744871d64921e7ce32e49a074a032e3cda8ce0a98dbd628e8d4d71cfbe03"
	},
	{
		"id": "add063378294",
		"ts": "2026-10-15T13:53:58.846Z",
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
		"liquidityUsd": 296257.58,
		"hash": "add06337829426b3eeb79d39d5a55cba56bc69e41dd39e623b1914bbe831610d"
	},
	{
		"id": "5e939c3bcf37",
		"ts": "2026-10-15T13:53:59.083Z",
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
		"liquidityUsd": 175559.6,
		"hash": "5e939c3bcf37ea2d51028ea5fe4d7d12eb3049a0ef43de4574d73c1b1bdaae2f"
	},
	{
		"id": "e5e8a88b9c25",
		"ts": "2026-10-15T13:53:59.274Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1067801.62,
		"hash": "e5e8a88b9c258f4c346d5862a996237dea87c131d97371b06b1455c33407ae36"
	},
	{
		"id": "33946ffd751f",
		"ts": "2026-10-15T13:53:59.845Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1948933.99,
		"hash": "33946ffd751f5ba4ba20454eb9704df872963dea30ed57e904237371b93884ba"
	},
	{
		"id": "2bfbba5a9d14",
		"ts": "2026-10-15T13:54:00.064Z",
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
		"liquidityUsd": 1058667,
		"hash": "2bfbba5a9d14e84890c682973a82b79a5a5899dd48f6f869c0a5af2f114da4d6"
	},
	{
		"id": "014a2f7dea3a",
		"ts": "2026-10-15T13:54:00.285Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1104658.91,
		"hash": "014a2f7dea3a659dcf727b4562c1bd6f5f0216b307e29230d8db5408440bf0f7"
	},
	{
		"id": "988e96b3fec1",
		"ts": "2026-10-15T13:54:00.498Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 441981.37,
		"hash": "988e96b3fec1309435e8fc8e0137084c7bf23fc7ff84655bb01c53734302a91e"
	},
	{
		"id": "f766d283bb04",
		"ts": "2026-10-15T08:47:32.494Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 143693140.57,
		"hash": "f766d283bb04fd81e085c8d351735bda7939cbfc1a666b381fe46d2c35432b2c"
	},
	{
		"id": "409ec7903dd1",
		"ts": "2026-10-15T08:47:32.752Z",
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
		"liquidityUsd": 17855259.11,
		"hash": "409ec7903dd17f693d717c90fa985de1b775bdc65056bb5ada757f7064548ae8"
	},
	{
		"id": "e3399b0eb775",
		"ts": "2026-10-15T08:47:33.205Z",
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
		"liquidityUsd": 755434.97,
		"hash": "e3399b0eb775188aefefbf678b5cfd4dc22fe2e94920eaea65b1aadb2d17cfa4"
	},
	{
		"id": "7ccb160ebc42",
		"ts": "2026-10-15T08:47:33.450Z",
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
		"liquidityUsd": 44121524.54,
		"hash": "7ccb160ebc42759906cb3f1f1f7b3f572726f6fcb4f49ee2e32505c41baf2817"
	},
	{
		"id": "160afa581ab1",
		"ts": "2026-10-15T08:47:33.702Z",
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
		"liquidityUsd": 4364442.13,
		"hash": "160afa581ab15b05f90a7cd82a4f55e4e0debcffb4f82b104ee9298cefd03af7"
	},
	{
		"id": "62e473800a07",
		"ts": "2026-10-15T08:47:33.953Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1111381.98,
		"hash": "62e473800a078e1fef7b34da56b81673c5fb0e3de2968f09fc2de620a6fff57e"
	},
	{
		"id": "7a9de4d36cfe",
		"ts": "2026-10-15T08:47:34.229Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 140018.41,
		"hash": "7a9de4d36cfec501927ff390bf4ffd08a0a27e3c79c0df63452db1b5f34cf543"
	},
	{
		"id": "27a42f94c85f",
		"ts": "2026-10-15T08:47:34.532Z",
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
		"liquidityUsd": 2475825.62,
		"hash": "27a42f94c85f601c80d9f081ecb21f3f1506c281a84ba92f3169d7ee3bbbdb43"
	},
	{
		"id": "ce382e27e083",
		"ts": "2026-10-15T08:47:34.797Z",
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
		"liquidityUsd": 1767974.59,
		"hash": "ce382e27e08312658aaafa653ea75299625227d8574c1c45334756e000f81b78"
	},
	{
		"id": "440aa29a4454",
		"ts": "2026-10-15T08:47:35.039Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2828644.65,
		"hash": "440aa29a4454c07a980fdb2ab37669bb898786af5b23a7634792749c83754f6a"
	},
	{
		"id": "15d1885387a1",
		"ts": "2026-10-15T08:47:35.258Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1328179.01,
		"hash": "15d1885387a1923fd246883d892c6dce2a8655b38f93eacac699314a381182e9"
	},
	{
		"id": "ceb9cd40f0de",
		"ts": "2026-10-15T08:47:35.480Z",
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
		"liquidityUsd": 15720679.86,
		"hash": "ceb9cd40f0deb19a88b2b82460bb1b2db3c19ac13372a83bae5747149edceb77"
	},
	{
		"id": "36b2993d7c9c",
		"ts": "2026-10-15T08:47:35.699Z",
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
		"liquidityUsd": 1080079.26,
		"hash": "36b2993d7c9c44ce1719ddf4127ce1698007bc889dd56b808f5194ea5654afb7"
	},
	{
		"id": "92824dd2e42e",
		"ts": "2026-10-15T08:47:35.920Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1057887.18,
		"hash": "92824dd2e42eaf8d26941d14b9bcf4fbda53a3c8083e71e89bbc970ac50d4e1d"
	},
	{
		"id": "9f114cd99854",
		"ts": "2026-10-15T08:47:36.138Z",
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
		"liquidityUsd": 301851,
		"hash": "9f114cd998542b41e466db0446fc52d2c3081757af6a2c3731b5f4f97d35e424"
	},
	{
		"id": "d14221ec4369",
		"ts": "2026-10-15T08:47:36.358Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1126152.76,
		"hash": "d14221ec4369d27887570d2f11f690786a4cb020e2755746f7750b73a56d3c65"
	},
	{
		"id": "056458f1fdb0",
		"ts": "2026-10-15T08:47:36.573Z",
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
		"liquidityUsd": 4275945.61,
		"hash": "056458f1fdb0cf381945e99bc4785ab5b8992aa286c54198ef3331adf9d22197"
	},
	{
		"id": "ab4b7d8cd6d9",
		"ts": "2026-10-15T08:47:36.791Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3885883.14,
		"hash": "ab4b7d8cd6d9c1a92406c983d55d74cee50363d98cc9f981f0d9b9680de269dc"
	},
	{
		"id": "7d468e8fcbda",
		"ts": "2026-10-15T08:47:37.010Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2020380.05,
		"hash": "7d468e8fcbdad641d48b5ad4989f6e08fd307165ed6dc39eb1d8c4ac9d8d8a17"
	},
	{
		"id": "505f224dfc6d",
		"ts": "2026-10-15T03:00:21.233Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 144992976.08,
		"hash": "505f224dfc6d064acb25be60abad5f9543bdf5aaf5100ec4826d5c065fff87dc"
	},
	{
		"id": "94a79ed18f60",
		"ts": "2026-10-15T03:00:21.890Z",
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
		"liquidityUsd": 17486965.44,
		"hash": "94a79ed18f60eccb76fd3fd04c5b6dd99a7a58f11b5d5b5bd42d5c9099380082"
	},
	{
		"id": "a0f67c6e87fb",
		"ts": "2026-10-15T03:00:22.135Z",
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
		"liquidityUsd": 759117.66,
		"hash": "a0f67c6e87fbcda038885611a1bf25b8d4a28fd4771e59c8b33bafe94c44926c"
	},
	{
		"id": "201139b0917f",
		"ts": "2026-10-15T03:00:22.593Z",
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
		"liquidityUsd": 44793831.34,
		"hash": "201139b0917fbbb3adc98809ad5437b1b47198c64accd1c0856bc8e2a04c8085"
	},
	{
		"id": "5ff8dddf9f28",
		"ts": "2026-10-15T03:00:22.838Z",
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
		"liquidityUsd": 4468222.48,
		"hash": "5ff8dddf9f289e843a126039ad46206530f6b70d441ba9658188c12ada1bc402"
	},
	{
		"id": "adf049209a36",
		"ts": "2026-10-15T03:00:23.088Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1126992.63,
		"hash": "adf049209a362676b1f7828abeb945d432864068fef6ca5c57ebd39dd87fb93a"
	},
	{
		"id": "0d6228612e42",
		"ts": "2026-10-15T03:00:23.326Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 140129.93,
		"hash": "0d6228612e42ebe43cf439d81f25861f01682e55a08d5acc15c6b0cff702bb2c"
	},
	{
		"id": "e0e1eed0ff37",
		"ts": "2026-10-15T03:00:23.577Z",
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
		"liquidityUsd": 2526737.33,
		"hash": "e0e1eed0ff37e7369a36ea55241d63262c7441f1e3890d47838b36a3ed3a3929"
	},
	{
		"id": "25c63c3a796d",
		"ts": "2026-10-15T03:00:23.825Z",
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
		"liquidityUsd": 1803075.64,
		"hash": "25c63c3a796db56f6501a65bae6ff9716453e4eba632ab29095988fea8fb10ad"
	},
	{
		"id": "f7d991622ebf",
		"ts": "2026-10-15T03:00:24.088Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1334252.51,
		"hash": "f7d991622ebf049a2b388176fff2378426e581c154213aedc3e8fe43405d3d3f"
	},
	{
		"id": "19d54c93e293",
		"ts": "2026-10-15T03:00:24.324Z",
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
		"liquidityUsd": 1097015.76,
		"hash": "19d54c93e293f19aac26d004f56cb5b2cfe0c32eac3ae18a024feda5ff064857"
	},
	{
		"id": "576063e7c8fc",
		"ts": "2026-10-15T03:00:24.550Z",
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
		"liquidityUsd": 2828625.91,
		"hash": "576063e7c8fc8927dd1ab8974bbac63d4839d1e4722be600622aa2da765dfd44"
	}
]
