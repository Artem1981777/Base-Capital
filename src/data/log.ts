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
	"updatedAt": "2026-06-28T13:29:23.443Z",
	"tokensScored": 430,
	"verdictsIssued": 430,
	"safe": 392,
	"risky": 38,
	"likelyRug": 0,
	"ticks": 40
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "2f5e6d1820a6",
		"ts": "2026-06-28T13:29:20.317Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93727877.72,
		"hash": "2f5e6d1820a62e294d4f191ea6d4f06986b1e053f7c2d01f5891a1c3a308dc13"
	},
	{
		"id": "82af01091e23",
		"ts": "2026-06-28T13:29:20.513Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12952665.37,
		"hash": "82af01091e23b4bdc1fd223f5f3a1bb47b9697a67bad557e6707ed3803e66a7a"
	},
	{
		"id": "d8df5b3b3551",
		"ts": "2026-06-28T13:29:20.705Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1342897.31,
		"hash": "d8df5b3b355119e84df1220f24a4cc598fddc77d34f7815397fb2e398732e7da"
	},
	{
		"id": "6b9ada2e19cb",
		"ts": "2026-06-28T13:29:20.899Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 25588577.21,
		"hash": "6b9ada2e19cb112be3aa4986c09b662544dd44ff9d3919ebb2c1482211a24d8a"
	},
	{
		"id": "fa04cf840356",
		"ts": "2026-06-28T13:29:21.092Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 4051586.73,
		"hash": "fa04cf84035684f12914d0a0f127e15589909b4d53034890e05945ee6da2cd62"
	},
	{
		"id": "0f5ad70fdea5",
		"ts": "2026-06-28T13:29:21.282Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 927273.26,
		"hash": "0f5ad70fdea564cd49c75a8af11d90cfb93b250f0cb24cdab622000d25a26e5e"
	},
	{
		"id": "123695e2b582",
		"ts": "2026-06-28T13:29:21.471Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25588577.21,
		"hash": "123695e2b582e1e355ce78b1c6109a3cc0a88200dcb60b1473c07c65a7a1458f"
	},
	{
		"id": "595881170f6a",
		"ts": "2026-06-28T13:29:21.664Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2146440.85,
		"hash": "595881170f6a65f6c46a6b42e80b56a3da81a93ab41470ef78131f771223cf00"
	},
	{
		"id": "98f56a7307a8",
		"ts": "2026-06-28T13:29:21.854Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 9705218.92,
		"hash": "98f56a7307a865e56bd3dfe9dcb1ce1719d192e9f1dfb71e8531f704ec44133a"
	},
	{
		"id": "459b25896782",
		"ts": "2026-06-28T13:29:22.044Z",
		"symbol": "Sleuth",
		"token": "0x08512BC3570d2E9015a60866d1f6941A31576Ba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 78188.81,
		"hash": "459b258967820bf830625ea9981cd086b9f94d8fb9d2f77bc4b420027aebc587"
	},
	{
		"id": "615215856bfa",
		"ts": "2026-06-28T13:29:22.222Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 113767.67,
		"hash": "615215856bfacc22abc7bfa2adf84828bb7ca13bce6295c9aedf6c89271ebf42"
	},
	{
		"id": "2593a0a3dcda",
		"ts": "2026-06-28T13:29:22.396Z",
		"symbol": "Polymarket",
		"token": "0xC28f3000cfFB2ff633a21E4206359A906a5bfB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 493395.34,
		"hash": "2593a0a3dcdae7b7a9c345f69bc611e466f94b1be5ac314ca077f226177346e6"
	},
	{
		"id": "8ed83bf94c05",
		"ts": "2026-06-28T13:29:22.570Z",
		"symbol": "HARBOR",
		"token": "0x4972e029F2E1831D205b20D05833CC771FEB2BA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 62633.66,
		"hash": "8ed83bf94c0587317080c5874fe310d113e04fde7ac33ca6d3cf117404cb44ad"
	},
	{
		"id": "e0856a8892dd",
		"ts": "2026-06-28T13:29:22.746Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 189431.28,
		"hash": "e0856a8892dd8fcd6f82c9b9ab10e1a4cdc9741ff1db8b33cbdb0a2f314c3e6b"
	},
	{
		"id": "97ef46c2a0ec",
		"ts": "2026-06-28T13:29:22.920Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 231259.85,
		"hash": "97ef46c2a0ec733fb8277b449e04d68118714cbd404d019cb48c4fd1600b9ab2"
	},
	{
		"id": "9560e3876a3f",
		"ts": "2026-06-28T13:29:23.093Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1329998.91,
		"hash": "9560e3876a3fbf8e293a537ad0576cd86813e27bafd9a8ce1ae973623593a2c9"
	},
	{
		"id": "784b6ed21d1d",
		"ts": "2026-06-28T13:29:23.266Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7961534.82,
		"hash": "784b6ed21d1dda81c56c57f31538cf5ce5afc72664767cbb2c50625a37d6283f"
	},
	{
		"id": "956717cc324f",
		"ts": "2026-06-28T13:29:23.443Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4359645.2,
		"hash": "956717cc324f00e318a6cad4d3ca29b28b0741a2d74b8f07a378233e704cb315"
	},
	{
		"id": "a3f3b4be1899",
		"ts": "2026-06-28T11:04:39.006Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93670438.3,
		"hash": "a3f3b4be1899fcf1e349b9e6c99687665b500bd7325c72d28966068c4fe693d7"
	},
	{
		"id": "a76d9588ded5",
		"ts": "2026-06-28T11:04:39.491Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13271494.78,
		"hash": "a76d9588ded55c611da04296d9941bb72d28bd39f2664688588dee514b5aa856"
	},
	{
		"id": "3221ceb6a90b",
		"ts": "2026-06-28T11:04:39.972Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1341412.9,
		"hash": "3221ceb6a90b068574518a25f7a6643ed897e65405816a6b303b893a07658d69"
	},
	{
		"id": "a78188affdcd",
		"ts": "2026-06-28T11:04:40.464Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 25129251.79,
		"hash": "a78188affdcd1771fe4c65046394260f4c067319e4f8dc831f5576c8f02f5ecf"
	},
	{
		"id": "ef0b3f5ac042",
		"ts": "2026-06-28T11:04:40.999Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 4032994.9,
		"hash": "ef0b3f5ac042eb00a6e81e22c0324b29b7fe65013a21ecba1eaf6bf570f1f72c"
	},
	{
		"id": "d5964e587014",
		"ts": "2026-06-28T11:04:41.257Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 911551.07,
		"hash": "d5964e5870140fb2d4c315e44d577b81ced546dfe458d77905022221968c3e01"
	},
	{
		"id": "03eba3274d21",
		"ts": "2026-06-28T11:04:41.535Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25129251.79,
		"hash": "03eba3274d215d9dff917262e439f6e64e12b6ef73a6b7ee6a8cb7ce0664df7f"
	},
	{
		"id": "0425f7285960",
		"ts": "2026-06-28T11:04:42.045Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2039959.44,
		"hash": "0425f7285960e3cddebe65c88ca630b5010a554a0633827bbde8a21207232ef9"
	},
	{
		"id": "d1883ee0c6c2",
		"ts": "2026-06-28T11:04:42.316Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 8703279.89,
		"hash": "d1883ee0c6c2617f0ae3b84ab52c733d943980a51a9298bb58acb19bade649fc"
	},
	{
		"id": "1437f670b53e",
		"ts": "2026-06-28T11:04:42.572Z",
		"symbol": "Claud",
		"token": "0xe6bf58F378a8cf6b171986D7dF11caE96F216b07",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 492313.04,
		"hash": "1437f670b53eda2c3b8a1558f1dd0f7cd90ef2ebd00f4c86085b083d64ff269f"
	},
	{
		"id": "ebc038fb7e52",
		"ts": "2026-06-28T11:04:42.816Z",
		"symbol": "Sleuth",
		"token": "0x08512BC3570d2E9015a60866d1f6941A31576Ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 75457.4,
		"hash": "ebc038fb7e52f09b9e4f8ae3fae73ea61b0d2fd1226446c77eebd24001ac8ee0"
	},
	{
		"id": "48eca87971de",
		"ts": "2026-06-28T11:04:43.062Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 193860.76,
		"hash": "48eca87971de9b3166d6d8ab68add6759d38ddb9244128e8594f3c7b3b43d595"
	},
	{
		"id": "76107f53fd73",
		"ts": "2026-06-28T11:04:43.318Z",
		"symbol": "Polymarket",
		"token": "0xC28f3000cfFB2ff633a21E4206359A906a5bfB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 493119.68,
		"hash": "76107f53fd73f0761bc7a406f116a9838cd75f176296163db36a106f246f9d1b"
	},
	{
		"id": "c8a2979639af",
		"ts": "2026-06-28T11:04:43.558Z",
		"symbol": "HARBOR",
		"token": "0x4972e029F2E1831D205b20D05833CC771FEB2BA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 67458.94,
		"hash": "c8a2979639afe7a83b3107b174c7d2abc5963660caac0a912e8275153e312a73"
	},
	{
		"id": "5c73dc437404",
		"ts": "2026-06-28T11:04:43.802Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 227656.53,
		"hash": "5c73dc437404bc8be7ffe8f9a91deda6ebc8fcb78f5d4992487c88ebff38a8ed"
	},
	{
		"id": "8a5367374557",
		"ts": "2026-06-28T11:04:44.050Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 796495.02,
		"hash": "8a5367374557b18421faf2efa93f4ca0467fd110500efb8b659c03ad8c776172"
	},
	{
		"id": "ab2b0448fbd3",
		"ts": "2026-06-28T11:04:44.312Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1293568.45,
		"hash": "ab2b0448fbd35e4695e98574dc5693dbb0f291b76d4773bb724a6577a4c7e652"
	},
	{
		"id": "5b545fe56a7f",
		"ts": "2026-06-28T11:04:44.553Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7985470.84,
		"hash": "5b545fe56a7f1f82b9645612a3b013bd4c2cbe33fb1108eda66a03e03a0e4f58"
	},
	{
		"id": "8694aa549dde",
		"ts": "2026-06-28T08:19:00.605Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93475462.78,
		"hash": "8694aa549dded66a4dd89a735a573f48707518c19b7ffd3c3955b595c3deb76a"
	},
	{
		"id": "6cbc6a1179a6",
		"ts": "2026-06-28T08:19:00.952Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12944852.23,
		"hash": "6cbc6a1179a651fc55b6b33ed629364ba0b1c486e35966b5c1e38c03507a0c84"
	},
	{
		"id": "69b9f0817fa3",
		"ts": "2026-06-28T08:19:01.292Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1340761.38,
		"hash": "69b9f0817fa36016cd6827ca7899039e5987e616009c0cfa2b76640c10fa9a69"
	},
	{
		"id": "94f5f69655b3",
		"ts": "2026-06-28T08:19:01.482Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 25106508.25,
		"hash": "94f5f69655b3d03a972fda69945930662d48de56253c4adb13cad7ba28398cd1"
	},
	{
		"id": "52893d9ba2ff",
		"ts": "2026-06-28T08:19:01.814Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 4034555.85,
		"hash": "52893d9ba2ffc5a7a1f71ba6cc818a4f1b091371c556871798beb62c3cca6718"
	},
	{
		"id": "c4faf2544eea",
		"ts": "2026-06-28T08:19:02.005Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 911556.04,
		"hash": "c4faf2544eea10ef96484189c24e1b034e07605dffb1240d286e046776bd5664"
	},
	{
		"id": "d14aa38e4cf4",
		"ts": "2026-06-28T08:19:02.333Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25106508.25,
		"hash": "d14aa38e4cf4f7983b63665ee43bb006cf6cab92458558f172947b210e4ef8a7"
	},
	{
		"id": "30aec4091020",
		"ts": "2026-06-28T08:19:02.583Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2020745.2,
		"hash": "30aec4091020abee7bc081aa5bd4797fce7cfa0a4c0c52352434b8f030ef3939"
	},
	{
		"id": "5f3612fe0597",
		"ts": "2026-06-28T08:19:02.772Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 8854265.02,
		"hash": "5f3612fe0597b067cb66265dac5243f900adbe959a546d5d86e5df7883cf3d40"
	},
	{
		"id": "0d2617ce44ff",
		"ts": "2026-06-28T08:19:02.989Z",
		"symbol": "Claud",
		"token": "0xe6bf58F378a8cf6b171986D7dF11caE96F216b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 492313.05,
		"hash": "0d2617ce44ff9cb60e2c1398babc2683cd0839ee65d65db530bf19fa94e86327"
	},
	{
		"id": "7129db1fdd84",
		"ts": "2026-06-28T08:19:03.160Z",
		"symbol": "Sleuth",
		"token": "0x08512BC3570d2E9015a60866d1f6941A31576Ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 71894.75,
		"hash": "7129db1fdd8472c0c7cafc28946fd1932ad66a21eb6c61013b7266a0192b7eeb"
	},
	{
		"id": "9553c1ee7514",
		"ts": "2026-06-28T08:19:03.333Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 211912.04,
		"hash": "9553c1ee75140f786b854659274cac31bb6d4794774ecb7b8acd23a51525d499"
	},
	{
		"id": "9f7fafc4dd3c",
		"ts": "2026-06-28T08:19:03.504Z",
		"symbol": "HARBOR",
		"token": "0x4972e029F2E1831D205b20D05833CC771FEB2BA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 66541.47,
		"hash": "9f7fafc4dd3cb8feae93b9b8f6615979cf65e686585783e16fc3702e686bcb67"
	},
	{
		"id": "ac69561eefd3",
		"ts": "2026-06-28T08:19:03.675Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 228687.99,
		"hash": "ac69561eefd3c6cf17cbac3e4ad7abc32c72039c95cacda9e82a9288918a62cc"
	},
	{
		"id": "def984355cd3",
		"ts": "2026-06-28T08:19:03.846Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 116971.54,
		"hash": "def984355cd3f749b1b13fcc89efa8d5756d63b4b96024c04e0a6ad0af088fef"
	},
	{
		"id": "80a0eeb9699f",
		"ts": "2026-06-28T08:19:04.018Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 801898.02,
		"hash": "80a0eeb9699fbf880450bc58b18399ad57b427e6e2eded7accd0c4c4e29c5c2b"
	},
	{
		"id": "85b85d76f4bf",
		"ts": "2026-06-28T08:19:04.189Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1304698.31,
		"hash": "85b85d76f4bf1ac28bdddcc082bc9ceacc7594a7ced4a78b6dc7858d9d2d0449"
	},
	{
		"id": "a2e15dc7e390",
		"ts": "2026-06-28T08:19:04.360Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7853203.82,
		"hash": "a2e15dc7e39080dbcb8f80ea234b14f6318a8d981f71f92fd090fc90466dab2b"
	},
	{
		"id": "d660249caef5",
		"ts": "2026-06-28T08:19:04.530Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4338485.45,
		"hash": "d660249caef5931a18b7c2c8de3ad58ee5003524e2a77cee13455cfa3525faf6"
	},
	{
		"id": "9920c699405b",
		"ts": "2026-06-28T04:22:37.087Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93423865.6,
		"hash": "9920c699405b35452d65c6d301011642b158cb823cca9a891ad382e8374492ff"
	},
	{
		"id": "b7796a5fc609",
		"ts": "2026-06-28T04:22:37.339Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12900108.51,
		"hash": "b7796a5fc609610e17b112baf6d9fd74e2c9c57cc7a9efd551084308dc097fc6"
	},
	{
		"id": "4807d699595e",
		"ts": "2026-06-28T04:22:37.780Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1337596.65,
		"hash": "4807d699595ee4d31d451f3c6f0510e5bf51110ed9f0f9151910f61d5d489d3c"
	},
	{
		"id": "3aea7e0a1b07",
		"ts": "2026-06-28T04:22:38.013Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24966888.12,
		"hash": "3aea7e0a1b0746e0927aa7529c20cc37adc4ef21d3486db3cc889d568ad882fd"
	},
	{
		"id": "aa2304c30e4f",
		"ts": "2026-06-28T04:22:38.263Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 4024991.67,
		"hash": "aa2304c30e4f9ce023193ce0ae51c1b98c59d2ab59b70bf0786ec7e1e8494c81"
	},
	{
		"id": "7b4b08a119fb",
		"ts": "2026-06-28T04:22:38.526Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 913612.78,
		"hash": "7b4b08a119fb8142720b3a521f5858b3644601583ece2a6c4dce8cd1ebf22747"
	},
	{
		"id": "f7097f64270a",
		"ts": "2026-06-28T04:22:38.757Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24966888.12,
		"hash": "f7097f64270a7466462f61586170a894feb4ff3ed6015a9be5a0f1b9d9a187e4"
	},
	{
		"id": "0012337a7690",
		"ts": "2026-06-28T04:22:39.081Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2018921.32,
		"hash": "0012337a769087910b534b938d67875fd2cb502d262d8ea7ee38c850c0c873d5"
	},
	{
		"id": "06b27b4ac854",
		"ts": "2026-06-28T04:22:39.311Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 8599488.76,
		"hash": "06b27b4ac85449e4f12d7fdba633617bec68cb8c5db00a2b66a353d84cbf6bef"
	},
	{
		"id": "9c85f872463f",
		"ts": "2026-06-28T04:22:39.546Z",
		"symbol": "Claud",
		"token": "0xe6bf58F378a8cf6b171986D7dF11caE96F216b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 492313.06,
		"hash": "9c85f872463fd9ecc0406635dbd39c6f293e4b913bce888bd13e1ffec1497981"
	},
	{
		"id": "8036ac61693d",
		"ts": "2026-06-28T04:22:39.778Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 119174.71,
		"hash": "8036ac61693d6f3e5c2a703487b20d1386e8c84c82022381038c28a29515e4b0"
	},
	{
		"id": "1d4988fed026",
		"ts": "2026-06-28T04:22:39.995Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 211912.14,
		"hash": "1d4988fed02655e77fb1d837e8b2cd114533a8a7c77b672fc4f3fd74e02b9c35"
	},
	{
		"id": "65610f5faea8",
		"ts": "2026-06-28T04:22:40.214Z",
		"symbol": "Sleuth",
		"token": "0x08512BC3570d2E9015a60866d1f6941A31576Ba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 74626.02,
		"hash": "65610f5faea81fe292e0dd229cfed21e45355ac82e5ec3840e0c0c5917d72a88"
	},
	{
		"id": "5d6615bf481a",
		"ts": "2026-06-28T04:22:40.448Z",
		"symbol": "HARBOR",
		"token": "0x4972e029F2E1831D205b20D05833CC771FEB2BA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 67708.67,
		"hash": "5d6615bf481a1d5c87f57e9d9b19219c0e12e1d06a262382c7e1601b62331a83"
	},
	{
		"id": "f7d36ecba063",
		"ts": "2026-06-28T04:22:40.666Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 230520.13,
		"hash": "f7d36ecba063b594e853d1ac7e7bf36a415f04c1bf0dc7d2431c7955c3894f91"
	},
	{
		"id": "e2989800b906",
		"ts": "2026-06-28T04:22:40.885Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7865493.79,
		"hash": "e2989800b9068ab26565ee0fc52b6f8a387b8b7048e8a80e5686cf9ff818fe69"
	},
	{
		"id": "dbe26f6a339f",
		"ts": "2026-06-28T04:22:41.118Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 813987.4,
		"hash": "dbe26f6a339f11ec742393963af36e453a493fbe9a539763a67f32ee3ec17126"
	},
	{
		"id": "f7b9629a273e",
		"ts": "2026-06-28T04:22:41.335Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1447878.59,
		"hash": "f7b9629a273e74e27f410b671b3c6e4254419c1cac3034cfd982c6d55bfa8cd1"
	},
	{
		"id": "6c736ddc3960",
		"ts": "2026-06-27T23:58:49.312Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93462439.46,
		"hash": "6c736ddc3960765de4c17505aef4eef13a3057d2909e027cf4fa45af7433b948"
	},
	{
		"id": "ee98dbedc963",
		"ts": "2026-06-27T23:58:49.552Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12990804.21,
		"hash": "ee98dbedc9631613a44b314035f3de298a0de23079e79ee8a67ac94341c8936d"
	},
	{
		"id": "8b074f04cc71",
		"ts": "2026-06-27T23:58:49.793Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1346987.34,
		"hash": "8b074f04cc717d14ed38f534860c41829fd10b7d42621bd1a87430da4a3af772"
	},
	{
		"id": "a7c1276cc14a",
		"ts": "2026-06-27T23:58:50.089Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24897976.03,
		"hash": "a7c1276cc14a9d5caf22498bd4edf54b629fd7819bca071e64089a4eeac21a2b"
	},
	{
		"id": "3e87e36319e9",
		"ts": "2026-06-27T23:58:50.325Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 4025992.81,
		"hash": "3e87e36319e946279bd10d067841f3d6625e57d9eb2546f752cb834dbe03cf8f"
	},
	{
		"id": "0f85b4b8b2a9",
		"ts": "2026-06-27T23:58:50.557Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 917182.33,
		"hash": "0f85b4b8b2a9b0049ca7b1f7f7574c339e941aa60ae5c41d1fefd364b75778b0"
	},
	{
		"id": "e4ff9f502fa2",
		"ts": "2026-06-27T23:58:50.790Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24897976.03,
		"hash": "e4ff9f502fa276094c76dddcd7a94b6bd35457d819030d598017fb8dbf7539c0"
	},
	{
		"id": "b1dd8a73aec3",
		"ts": "2026-06-27T23:58:51.023Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2019954.26,
		"hash": "b1dd8a73aec32167560cda367e1bfe0edca140fc8d7a5a89b4ef293f417d540b"
	},
	{
		"id": "4da0f8eca4dd",
		"ts": "2026-06-27T23:58:51.253Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 8670052.81,
		"hash": "4da0f8eca4ddc36e45d4fd3c87bfde84c20055449d9047531669e157b8e9b8ad"
	},
	{
		"id": "fe8249fa331b",
		"ts": "2026-06-27T23:58:51.487Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 112436.59,
		"hash": "fe8249fa331b288f51bed1fbe349a4246c4eef134f628d3e956ff91e93cf8e82"
	},
	{
		"id": "81ba4c0eb524",
		"ts": "2026-06-27T23:58:51.706Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 213210.14,
		"hash": "81ba4c0eb52488f522314c016bb2938aa6ca7c0bf85193b960e4919726037e85"
	},
	{
		"id": "f454f2bfeb8f",
		"ts": "2026-06-27T23:58:51.925Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 233239.05,
		"hash": "f454f2bfeb8f65b27d71876fb8005f163c83f122af385408ac86e4b641b2e071"
	},
	{
		"id": "90f72da55f46",
		"ts": "2026-06-27T23:58:52.144Z",
		"symbol": "Sleuth",
		"token": "0x08512BC3570d2E9015a60866d1f6941A31576Ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 78743.73,
		"hash": "90f72da55f466ebdd86978f8e9488483dfe1a7f8c796ce9d262018f7bd0bded4"
	},
	{
		"id": "fcffbebce302",
		"ts": "2026-06-27T23:58:52.362Z",
		"symbol": "Claud",
		"token": "0xe6bf58F378a8cf6b171986D7dF11caE96F216b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 492264.5,
		"hash": "fcffbebce3027ab8a4bf1ba35e4216c82f5614c16fabb284e7ddd9b2878a9a76"
	},
	{
		"id": "ad8dd6eae172",
		"ts": "2026-06-27T23:58:52.578Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 817984.93,
		"hash": "ad8dd6eae172e7763fcde22c29a6e2e8d4a39542af3259def9f4367264c996fe"
	},
	{
		"id": "23f0d4d6d68b",
		"ts": "2026-06-27T23:58:52.797Z",
		"symbol": "HARBOR",
		"token": "0x4972e029F2E1831D205b20D05833CC771FEB2BA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 69214.34,
		"hash": "23f0d4d6d68bedb7c059f86dbeba2b8a5552ec1682ba4cc873680b758dda01e4"
	},
	{
		"id": "fa2d0aa19743",
		"ts": "2026-06-27T23:58:53.015Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7915125.48,
		"hash": "fa2d0aa19743cd27f5a9fc7253f8c26817269f0419f43cf81af02e2045dc92cf"
	},
	{
		"id": "cc69a44b5c70",
		"ts": "2026-06-27T23:58:53.233Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1448306.7,
		"hash": "cc69a44b5c70d4e85b5e2e5a44d55380b62513f56b9ed8bcc8ca7ad3ce71aeea"
	},
	{
		"id": "8314a2e7aa3d",
		"ts": "2026-06-27T23:58:53.450Z",
		"symbol": "BLOOM",
		"token": "0xF53A3b2cf482494eEc4CA096af4b107A6c3b759B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55124.76,
		"hash": "8314a2e7aa3dda76a1d2058e6ceed86ff2258c23f93209d8eb814b65351397cc"
	},
	{
		"id": "2e194e0d226e",
		"ts": "2026-06-27T22:09:59.089Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93485685.62,
		"hash": "2e194e0d226e41f9f024d7eeb70dbc3a567cd02a9cfec792aad754e2c970e6b0"
	},
	{
		"id": "8881d36441f6",
		"ts": "2026-06-27T22:09:59.568Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13051261.77,
		"hash": "8881d36441f6554e8bb8732ce0f89eb147ca59f0207cb6a496dd6c4d2f9ec601"
	},
	{
		"id": "e1d9ab3ebb7e",
		"ts": "2026-06-27T22:10:00.049Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1333671.55,
		"hash": "e1d9ab3ebb7e4fda02c8638c20217f9606dc1414ebf799b182c5523c8a146abc"
	},
	{
		"id": "3f313e0d6093",
		"ts": "2026-06-27T22:10:00.324Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 25007973.99,
		"hash": "3f313e0d6093a78afd41d62e15f497789b1468676558f77f88287d443fecebc5"
	},
	{
		"id": "bb4d02318113",
		"ts": "2026-06-27T22:10:01.122Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 4052830.18,
		"hash": "bb4d02318113ca36b4de68d7ca4af163fba85956814423e772aa32cce53ebb6c"
	},
	{
		"id": "4816e96a2922",
		"ts": "2026-06-27T22:10:01.539Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 915634.51,
		"hash": "4816e96a29222dd8c709ac470fa0f6bffd23b0a8904de7c556c6de5a9d1b05ac"
	},
	{
		"id": "4427afca0c3d",
		"ts": "2026-06-27T22:10:01.890Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25007973.99,
		"hash": "4427afca0c3da928138f1980e004f3739233cf22dbf7e92c04dfc67643e7228d"
	},
	{
		"id": "3e4e7c0de6f2",
		"ts": "2026-06-27T22:10:02.171Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2018464.61,
		"hash": "3e4e7c0de6f23a0469646a30cb564cfe1ffb8bcaecfe0976b4e3831de32f1eef"
	},
	{
		"id": "936c4dc1a2b9",
		"ts": "2026-06-27T22:10:02.440Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 7985428.51,
		"hash": "936c4dc1a2b91695800720cde4609cf4ca701f66a7b6af857d714a60d380169a"
	},
	{
		"id": "98fb156d3588",
		"ts": "2026-06-27T22:10:02.732Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 112755.89,
		"hash": "98fb156d35889d8289b7a8cadc969062f29e1f6234ecab5ada51db945eceec83"
	},
	{
		"id": "7532ae8371a2",
		"ts": "2026-06-27T22:10:03.010Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 235973.3,
		"hash": "7532ae8371a2733c1edd21bb2c7d390f4ca66dd89b5ddb32341d7cdcbacd1abb"
	},
	{
		"id": "3fc745ab630d",
		"ts": "2026-06-27T22:10:03.330Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced"
		],
		"liquidityUsd": 213210.14,
		"hash": "3fc745ab630ddbff0d8e17b11825f3719ab9db3378c8ad72eb9abd63d8d79db4"
	},
	{
		"id": "63c32ed005a2",
		"ts": "2026-06-27T22:10:03.624Z",
		"symbol": "Claud",
		"token": "0xe6bf58F378a8cf6b171986D7dF11caE96F216b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 492265.75,
		"hash": "63c32ed005a2405ccc19deecbd921d6d78146d9f38141c946c2cdd4e2df5ee24"
	},
	{
		"id": "3cc5e5ddcc34",
		"ts": "2026-06-27T22:10:03.874Z",
		"symbol": "BLOOM",
		"token": "0xF53A3b2cf482494eEc4CA096af4b107A6c3b759B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 64164.44,
		"hash": "3cc5e5ddcc34b41ba2383ba3b52d3108b0384dfb2145836f43f65022669d7760"
	},
	{
		"id": "5ed912cfe985",
		"ts": "2026-06-27T22:10:04.125Z",
		"symbol": "VU",
		"token": "0x511ef9Ad5E645E533D15DF605B4628e3D0d0Ff53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 94846.11,
		"hash": "5ed912cfe98569b44966b8682a02b8a6f64d68f328ebc3c8f1386486fd0f5316"
	},
	{
		"id": "706551596ee5",
		"ts": "2026-06-27T22:10:04.362Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 278394.86,
		"hash": "706551596ee5bac4890b36a3b699868ad3ed79bc709f0e90205a065aa2852cd8"
	},
	{
		"id": "2fb14fd92de8",
		"ts": "2026-06-27T22:10:04.599Z",
		"symbol": "HARBOR",
		"token": "0x4972e029F2E1831D205b20D05833CC771FEB2BA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 68188.4,
		"hash": "2fb14fd92de80fd9d8d0540f14ca9f3d0b59059b74893e91f008faec3be8c945"
	},
	{
		"id": "f01777117cf5",
		"ts": "2026-06-27T22:10:04.849Z",
		"symbol": "RIZE",
		"token": "0x9818B6c09f5ECc843060927E8587c427C7C93583",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 63042.32,
		"hash": "f01777117cf589df4793c055cb97c3128e1129099be424baf4e7bca74f1a75f4"
	},
	{
		"id": "a366e2921cfc",
		"ts": "2026-06-27T20:59:17.417Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93541578.81,
		"hash": "a366e2921cfc1c9c1ce64b06bbf2f33b319c6a998d054e0de5e3604ff52543e9"
	},
	{
		"id": "f46cc012aed5",
		"ts": "2026-06-27T20:59:17.677Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13149644.08,
		"hash": "f46cc012aed506ea1ddaee2d90e71dea7ec412a224133a3b35d0f71914e47e65"
	},
	{
		"id": "756baaee6946",
		"ts": "2026-06-27T20:59:17.933Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1340570.95,
		"hash": "756baaee69465836a47a57e65404acb2256f99f34211cd2dc4a2b2ea3473dd10"
	},
	{
		"id": "142fad8d605a",
		"ts": "2026-06-27T20:59:18.194Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 25092959.67,
		"hash": "142fad8d605ad27f7ca206ef5054b0abbcf0fc99448a9e1c351324603ebd92fb"
	},
	{
		"id": "fd3afab64539",
		"ts": "2026-06-27T20:59:18.450Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 4051383.3,
		"hash": "fd3afab645399c0ee7a870296a77b110e302a636822f01251f844d81f1c497fd"
	},
	{
		"id": "1d6c9e8834f7",
		"ts": "2026-06-27T20:59:18.705Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 918671.75,
		"hash": "1d6c9e8834f7a4a982f060b1d4e41168297123cd9b74e63d468b8d1f624070b1"
	},
	{
		"id": "992c3a0230ae",
		"ts": "2026-06-27T20:59:18.962Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25092959.67,
		"hash": "992c3a0230aed1cba4af76c4a15b10e0f0c71981d78571d0768ac4e312dfcfc8"
	},
	{
		"id": "dd089b38ce4a",
		"ts": "2026-06-27T20:59:19.220Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2025828.69,
		"hash": "dd089b38ce4a367b7ccc0db3943b2972541bc86659689734622efad38c3a4b19"
	},
	{
		"id": "da09db20e438",
		"ts": "2026-06-27T20:59:19.481Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 7746200.74,
		"hash": "da09db20e438605d7c5910ac67dd3bc0affef2f838a88c462a7651723565cae2"
	},
	{
		"id": "e5a29a9c0328",
		"ts": "2026-06-27T20:59:19.735Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 113892.01,
		"hash": "e5a29a9c03283af524ca58f11e8e94f34646928c546b1dbe8b48a4ad864e7e4d"
	},
	{
		"id": "c97a0aed705c",
		"ts": "2026-06-27T20:59:19.975Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 226585.03,
		"hash": "c97a0aed705c5f32330d318279d4589a1641f5f74bdd0793a77c2c2bd91b6385"
	},
	{
		"id": "168663f5a1be",
		"ts": "2026-06-27T20:59:20.218Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 213210.14,
		"hash": "168663f5a1be759dbf27b4f5011ee6563c005d361d1c4dd30a1c6917ee315b5d"
	},
	{
		"id": "d77f48f0a859",
		"ts": "2026-06-27T20:59:20.458Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 1724638.95,
		"hash": "d77f48f0a85965c355f7269d16d215ed0fd5227d8ca7469b44e30de69f52da76"
	},
	{
		"id": "10bfd0dea5c2",
		"ts": "2026-06-27T20:59:20.699Z",
		"symbol": "BLOOM",
		"token": "0xF53A3b2cf482494eEc4CA096af4b107A6c3b759B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 64595.72,
		"hash": "10bfd0dea5c2e411da68441cfd10cfb1fb566faadcc75af612f0847616760ca0"
	},
	{
		"id": "f7239745c456",
		"ts": "2026-06-27T20:59:20.944Z",
		"symbol": "VU",
		"token": "0x511ef9Ad5E645E533D15DF605B4628e3D0d0Ff53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 94957.02,
		"hash": "f7239745c45696464920aa33a1b12495954fe3c3a6fdb8f3afee12e9e5643f46"
	},
	{
		"id": "87cf674de7b3",
		"ts": "2026-06-27T20:59:21.256Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 280040.71,
		"hash": "87cf674de7b312619b09cce3bd508fc709e064a9156549ec0ef7422cd6beb9a0"
	},
	{
		"id": "a6fcbfb5050d",
		"ts": "2026-06-27T20:59:21.495Z",
		"symbol": "Sleuth",
		"token": "0x08512BC3570d2E9015a60866d1f6941A31576Ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 73009.41,
		"hash": "a6fcbfb5050d57deaae276198bc4bc74770a05bca5047b32a477971c25d865f5"
	},
	{
		"id": "ac1664bc06c2",
		"ts": "2026-06-27T20:59:21.739Z",
		"symbol": "RIZE",
		"token": "0x9818B6c09f5ECc843060927E8587c427C7C93583",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 63471.45,
		"hash": "ac1664bc06c2a4bc11d2540033cf7e0d3da287d0f28b5db8ec8baefc027cd28f"
	},
	{
		"id": "a8cf624bd7e7",
		"ts": "2026-06-27T19:39:25.285Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93527165.43,
		"hash": "a8cf624bd7e747428dc7b3fe3a0a32510423d22c35c9b6f76635fbd5b8074f2b"
	},
	{
		"id": "d6d2a54607ed",
		"ts": "2026-06-27T19:39:25.554Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12330397.29,
		"hash": "d6d2a54607ed889295d4db0b757350246d1840d05ed6be0dd26b2876a03fc175"
	},
	{
		"id": "39c5c80db41f",
		"ts": "2026-06-27T19:39:25.803Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1337099.27,
		"hash": "39c5c80db41f96e7ff1fd1b2f55463214224265024799a8d61af50b2623f20f9"
	},
	{
		"id": "33b32e3557de",
		"ts": "2026-06-27T19:39:26.068Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 25036954.64,
		"hash": "33b32e3557def214fa9a9d6562d1f53bc81c188eaf5e130353c2a61dc9d9581d"
	},
	{
		"id": "762bf99782a0",
		"ts": "2026-06-27T19:39:26.380Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 4072562.54,
		"hash": "762bf99782a065bd9c11f1486f520fdd3027d083117777f2a4fe3e9635955be6"
	},
	{
		"id": "8ad4eda07790",
		"ts": "2026-06-27T19:39:26.627Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 917532.68,
		"hash": "8ad4eda077904332a5a8db667692db21c7b492897746df3a82ea2d99dee356ee"
	},
	{
		"id": "b6777be6a582",
		"ts": "2026-06-27T19:39:26.906Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25036954.64,
		"hash": "b6777be6a582beb0b248accccc32d979544b3cad7dd7e87274b4d78d740107c0"
	},
	{
		"id": "4c9fab03495c",
		"ts": "2026-06-27T19:39:27.207Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2019226.83,
		"hash": "4c9fab03495c3818a7fb70aee1ba560bff9c56f58b51536ab8eba500b4d2b7ee"
	},
	{
		"id": "ed771ce8c301",
		"ts": "2026-06-27T19:39:27.453Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 7792544,
		"hash": "ed771ce8c3016ad79e1fd4ba9ebefbd8851e7c9e08f7250b62049b63be6c2486"
	},
	{
		"id": "d9440142b8d2",
		"ts": "2026-06-27T19:39:27.717Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 113531.35,
		"hash": "d9440142b8d2140080fbd8e1da7258ddbf08d6b040dd8e25d871d0fdcefbe58e"
	},
	{
		"id": "ff006cdf1693",
		"ts": "2026-06-27T19:39:27.948Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 228715.86,
		"hash": "ff006cdf169391f4de98f00fdcfdda63eeea0a15710316cc03ae33dc61602ff7"
	},
	{
		"id": "c637ab49ca1f",
		"ts": "2026-06-27T19:39:28.194Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 213214.43,
		"hash": "c637ab49ca1f9b6f598a5c74e2fcfe547130f754c1ee225eb95fc9ad28617dcd"
	},
	{
		"id": "3b557a9e9f5d",
		"ts": "2026-06-27T19:39:28.426Z",
		"symbol": "BLOOM",
		"token": "0xF53A3b2cf482494eEc4CA096af4b107A6c3b759B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 63834.67,
		"hash": "3b557a9e9f5d9887c97c6687f9e0d551953df9490a473e3e5552a97f42816911"
	},
	{
		"id": "744c4d85cc5e",
		"ts": "2026-06-27T19:39:28.676Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1743692.78,
		"hash": "744c4d85cc5e2e88b690df2c181e4611a7f305c47d62c9194e7ba7081d1f98ee"
	},
	{
		"id": "e841cfab6fe9",
		"ts": "2026-06-27T19:39:28.921Z",
		"symbol": "VU",
		"token": "0x511ef9Ad5E645E533D15DF605B4628e3D0d0Ff53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 96154.28,
		"hash": "e841cfab6fe9361bfb5ece0d8484007dec72830d9444004b18387a11fb8f96b8"
	},
	{
		"id": "4e8fd8902788",
		"ts": "2026-06-27T19:39:29.154Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 278884.66,
		"hash": "4e8fd8902788d41316487fc7a6257398b08101df27f6ed0cdf174eae94873526"
	},
	{
		"id": "2b127958042c",
		"ts": "2026-06-27T19:39:29.404Z",
		"symbol": "RIZE",
		"token": "0x9818B6c09f5ECc843060927E8587c427C7C93583",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 63942.01,
		"hash": "2b127958042c72d8dca5235e07b6981f5f121764b57c1b613233953fe96a431a"
	},
	{
		"id": "13792f5db3dc",
		"ts": "2026-06-27T19:39:29.649Z",
		"symbol": "Sleuth",
		"token": "0x08512BC3570d2E9015a60866d1f6941A31576Ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 70559.25,
		"hash": "13792f5db3dcb0537dae5e3c2f4edd02e3dff4593bd49f655c63d30d9c36f9c9"
	},
	{
		"id": "5e21baaa14e0",
		"ts": "2026-06-27T17:59:17.718Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 94053126.07,
		"hash": "5e21baaa14e0eb35990b5d270e25717bea9969fb637a8b0edbc64a05a5b24a5c"
	},
	{
		"id": "fc28fddecbf3",
		"ts": "2026-06-27T17:59:18.096Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12847157.47,
		"hash": "fc28fddecbf342efabb115f508d38752f0cca0c66c18e76923b2e92f5207fbd0"
	},
	{
		"id": "fa420c8d7ef4",
		"ts": "2026-06-27T17:59:18.498Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1362659.8,
		"hash": "fa420c8d7ef4e2abe769cf94e1d898de2ff7d0ba1784f5e9d8b31d142f474944"
	},
	{
		"id": "84f6643b560f",
		"ts": "2026-06-27T17:59:18.711Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 25149790.07,
		"hash": "84f6643b560f67418ab482ac1c435e2c93e399432ab3ada7c4cf8c7ccf09f66a"
	},
	{
		"id": "8f4ef8a351cc",
		"ts": "2026-06-27T17:59:18.946Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 4129414.9,
		"hash": "8f4ef8a351ccc2c42d546e70464a9e53807bd4dfd0708d5621484fe5485f4705"
	},
	{
		"id": "e8adf16a18f4",
		"ts": "2026-06-27T17:59:19.168Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 931410.31,
		"hash": "e8adf16a18f484e8635918db7f3fa938c940110fb15700dc73de54e42d55a24a"
	},
	{
		"id": "074a86250cec",
		"ts": "2026-06-27T17:59:19.390Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25149790.07,
		"hash": "074a86250cec1346cc250d4b232c2abe4e008e15138500d58b696367ea962d6e"
	},
	{
		"id": "45af6fb78329",
		"ts": "2026-06-27T17:59:19.615Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2043285.41,
		"hash": "45af6fb78329195339772778b9fdb9d264a211ea6c166b1331682f9118747652"
	},
	{
		"id": "50a93074366f",
		"ts": "2026-06-27T17:59:19.826Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 7657506.83,
		"hash": "50a93074366f45521c901643cf6e9c4a0c292407c96ac1e412ae039d31948af5"
	},
	{
		"id": "ba7e365f85a9",
		"ts": "2026-06-27T17:59:20.047Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 118237.44,
		"hash": "ba7e365f85a91c8c69aa66c02a792a98214b7328d088e3863d99258cce48b46b"
	},
	{
		"id": "d9138730492e",
		"ts": "2026-06-27T17:59:20.244Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 223455.38,
		"hash": "d9138730492e0756597013f4b0b6f40d3abd39a9ff59ea066bd4afbac7071248"
	},
	{
		"id": "6418b95f8061",
		"ts": "2026-06-27T17:59:20.447Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 213214.43,
		"hash": "6418b95f8061631a89535cc95f2bbcf5de9b96541500fd4d0299a06476e7fb1f"
	},
	{
		"id": "cba3e6ff10d8",
		"ts": "2026-06-27T17:59:20.673Z",
		"symbol": "BLOOM",
		"token": "0xF53A3b2cf482494eEc4CA096af4b107A6c3b759B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 63339.5,
		"hash": "cba3e6ff10d83e80ec74a9f723265bbf9134d46f56c70069eedeb95d483486d3"
	},
	{
		"id": "6071c1bd10b6",
		"ts": "2026-06-27T17:59:20.879Z",
		"symbol": "RIZE",
		"token": "0x9818B6c09f5ECc843060927E8587c427C7C93583",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 63344.18,
		"hash": "6071c1bd10b69841f254d3cb20651ba3113adada2956980624f3166746ba8662"
	},
	{
		"id": "5c0e31571f52",
		"ts": "2026-06-27T17:59:21.083Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1648405.79,
		"hash": "5c0e31571f52b77b54727091dde48728d9f78db34a09fe31685ed7d5c843c3eb"
	},
	{
		"id": "8377905665c9",
		"ts": "2026-06-27T17:59:21.278Z",
		"symbol": "VU",
		"token": "0x511ef9Ad5E645E533D15DF605B4628e3D0d0Ff53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 95453.35,
		"hash": "8377905665c9130b346a04c1329046c34a30cc59a841ccb510c9c6a1e335ac6a"
	},
	{
		"id": "118a2bcb110c",
		"ts": "2026-06-27T17:59:21.476Z",
		"symbol": "YAPPR",
		"token": "0x8C3E96713977E61C4180a5f0a6B02Fab86fb5bA3",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 60835.7,
		"hash": "118a2bcb110c556bd1beeed24ea3600586e489cd874cc9e80e34810b68b52ba1"
	},
	{
		"id": "bb32a28c7b6a",
		"ts": "2026-06-27T17:59:21.672Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 271601.24,
		"hash": "bb32a28c7b6a1a093bdca852732ba1bca52e00e4e730753c24f43c69e8d2fbad"
	},
	{
		"id": "ccac4601ecfa",
		"ts": "2026-06-27T16:02:23.899Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 94375396,
		"hash": "ccac4601ecfa97df35af95d52a91ee3e6b1105a7c1d88977bafa0c99812bd6c2"
	},
	{
		"id": "ed6503a41b7d",
		"ts": "2026-06-27T16:02:24.138Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13104134.09,
		"hash": "ed6503a41b7db2ea33a6d16704886ca2b7d05c87b69db0826850d11329a14fc4"
	},
	{
		"id": "ada60e99512a",
		"ts": "2026-06-27T16:02:25.065Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1374784.33,
		"hash": "ada60e99512ab5e1cb927f635d036432738497dc31aaa405d7f8ad10eaceb8ae"
	},
	{
		"id": "293f15557ef8",
		"ts": "2026-06-27T16:02:25.304Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 25354533.26,
		"hash": "293f15557ef8725258d6f504282ee1aff7cc7142856d465986833a8e00d2fc68"
	},
	{
		"id": "6db0c95cab84",
		"ts": "2026-06-27T16:02:25.538Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 4154314.66,
		"hash": "6db0c95cab84b28a934aa905f30a6e2b3eb3cf2bda3378b26710b736d36a9685"
	},
	{
		"id": "0a6947af097b",
		"ts": "2026-06-27T16:02:25.775Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 931248.89,
		"hash": "0a6947af097b6a1867c46657543effa1ec43afe74d4f6dea17ccd8f0c921ac8f"
	},
	{
		"id": "63c9a6d27eac",
		"ts": "2026-06-27T16:02:26.010Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25354533.26,
		"hash": "63c9a6d27eac6d8d2512f22f925ebd9c8b5ee6c5e1c1e12a61461d90bff1877e"
	},
	{
		"id": "26d536686132",
		"ts": "2026-06-27T16:02:26.865Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2208437.38,
		"hash": "26d5366861324e007036286c1d3e2ee8aa3a43a7da85b9a7a7cdf776df152979"
	},
	{
		"id": "f2650b8db494",
		"ts": "2026-06-27T16:02:27.101Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 8245025.9,
		"hash": "f2650b8db494d8e874ce9ec77b3472cdd14958356045c79596cc63d98200bd9d"
	},
	{
		"id": "2e6de5e2826b",
		"ts": "2026-06-27T16:02:27.333Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 120296,
		"hash": "2e6de5e2826badef635b53b716269b255582da9de2e76516463651cf7eb5ecfc"
	},
	{
		"id": "14cd0a422ab6",
		"ts": "2026-06-27T16:02:27.552Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 213214.43,
		"hash": "14cd0a422ab6beb18486d5bf5e9112a1ce7ad3bdc9e977f37a7fa74a40e78a05"
	},
	{
		"id": "a949029ac99e",
		"ts": "2026-06-27T16:02:27.802Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 228138.5,
		"hash": "a949029ac99ecedd19a66bcdccd5d24872d7369337f6007b329c5a343746ef30"
	},
	{
		"id": "ac1bb6b11767",
		"ts": "2026-06-27T16:02:28.848Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 1655543.6,
		"hash": "ac1bb6b117678c343c2ac9f732f96f5d64cd74a260eb63f721fa2f2b03fc45db"
	},
	{
		"id": "c70c2aa39ef7",
		"ts": "2026-06-27T16:02:29.065Z",
		"symbol": "BLOOM",
		"token": "0xF53A3b2cf482494eEc4CA096af4b107A6c3b759B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 60278.6,
		"hash": "c70c2aa39ef7456d840c63a598c967a4f53be7f09e12cfb3e457a8d9607cc388"
	},
	{
		"id": "19215ec07c8c",
		"ts": "2026-06-27T16:02:29.283Z",
		"symbol": "VU",
		"token": "0x511ef9Ad5E645E533D15DF605B4628e3D0d0Ff53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 96876.34,
		"hash": "19215ec07c8cf74d974f3bd8476307eb22bff8c4d328fcbbf8516b8967540753"
	},
	{
		"id": "39a2f43adeee",
		"ts": "2026-06-27T16:02:29.502Z",
		"symbol": "YAPPR",
		"token": "0x8C3E96713977E61C4180a5f0a6B02Fab86fb5bA3",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 59953.3,
		"hash": "39a2f43adeee9e3c3f1dd893dd6f4045b6f9a1b17f1be9b0c5a15b0dbf6a7e8c"
	},
	{
		"id": "2c316025c75f",
		"ts": "2026-06-27T16:02:29.722Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 275382.72,
		"hash": "2c316025c75f541fcdf04a27bdfa62139b5cb50505ec8e27e58d6c5b0eb41f41"
	},
	{
		"id": "0b0c1c74908c",
		"ts": "2026-06-27T14:26:55.315Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93949310.9,
		"hash": "0b0c1c74908c8034320ede67e417f0c956bee7a6a794bd3ca4bde49b145b82ed"
	},
	{
		"id": "94db63147316",
		"ts": "2026-06-27T14:26:55.559Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12979176.74,
		"hash": "94db6314731638579a1037ec4ab7dfe6ce55fe4de04e62c493fcc111a7c4dfaa"
	},
	{
		"id": "70a905e928ec",
		"ts": "2026-06-27T14:26:56.196Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1368201.84,
		"hash": "70a905e928ec1a0ddb1fe13e0118d06c85f53e3012e67ff95f413801550dafad"
	},
	{
		"id": "cb5457f2b274",
		"ts": "2026-06-27T14:26:56.437Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 25183415.7,
		"hash": "cb5457f2b274b0fd5b69ef967e75b448fe5ee2a3042f7e28e092d6716d17a5a4"
	},
	{
		"id": "a177db3903ea",
		"ts": "2026-06-27T14:26:56.678Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 4100156.82,
		"hash": "a177db3903ea97bffabecfe8c8b17bbeda3df920796fd6532585abac6500a873"
	},
	{
		"id": "752cb7c38da1",
		"ts": "2026-06-27T14:26:56.915Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 931108.67,
		"hash": "752cb7c38da19ddd261b927219edfb05b72d8e5ddf0fe1807260d4da6df05ea8"
	},
	{
		"id": "89b4dc3ea6e0",
		"ts": "2026-06-27T14:26:57.148Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25183415.7,
		"hash": "89b4dc3ea6e0463c3803b55b161ceb14f768b3997b4ebafab7ac314cec7de0de"
	},
	{
		"id": "ce8d17f41958",
		"ts": "2026-06-27T14:26:57.429Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2042349.32,
		"hash": "ce8d17f419589937d937015ac7628e2e28982b297beced351d88e0bcfed94f5c"
	},
	{
		"id": "ee35a2e03eb4",
		"ts": "2026-06-27T14:26:57.662Z",
		"symbol": "Claude",
		"token": "0x30EC37E22FF8865e2E439d84E7d2ffD58296DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 489284.45,
		"hash": "ee35a2e03eb42bd78255cc342d5cf6fb153991b3fa4605d3c3c2377dc4597acf"
	},
	{
		"id": "0f05a26b304e",
		"ts": "2026-06-27T14:26:57.911Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 7915930.17,
		"hash": "0f05a26b304e95977e08517debe9559b0287649f9ad51609b645b71332a1af8e"
	},
	{
		"id": "c94ada00df5b",
		"ts": "2026-06-27T14:26:58.131Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 121815.08,
		"hash": "c94ada00df5b36de48e856d438eef326432eefd8137c1277601cdf3ce75f4216"
	},
	{
		"id": "dcda7f6e8336",
		"ts": "2026-06-27T14:26:58.351Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 213287.96,
		"hash": "dcda7f6e83362375a736a9c1e56195703e090d145cc07d5c43d198668d7024cc"
	},
	{
		"id": "3c583c5b7d02",
		"ts": "2026-06-27T14:26:58.573Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 524114.93,
		"hash": "3c583c5b7d02302fa30c1ed0df41a4e10a465340378606d0307f067d27e7fd34"
	},
	{
		"id": "d35e0942cea2",
		"ts": "2026-06-27T14:26:58.793Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1630885.8,
		"hash": "d35e0942cea2d6fcb66213157ac7c1680c341abc5c3f33fca7affe356324a9a7"
	},
	{
		"id": "05b9a59e76b1",
		"ts": "2026-06-27T14:26:59.012Z",
		"symbol": "YAPPR",
		"token": "0x8C3E96713977E61C4180a5f0a6B02Fab86fb5bA3",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 65167.03,
		"hash": "05b9a59e76b1806da6568b2668c476943d8071168f368e3a74be196809620af2"
	},
	{
		"id": "35e5a222f990",
		"ts": "2026-06-27T14:26:59.231Z",
		"symbol": "VU",
		"token": "0x511ef9Ad5E645E533D15DF605B4628e3D0d0Ff53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 95813.02,
		"hash": "35e5a222f990e9c7a43708c1b4439a4043ab2ab5a9aaa62f8b3042d11ac1bfcf"
	},
	{
		"id": "ae395d42623e",
		"ts": "2026-06-27T14:26:59.449Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1310672.06,
		"hash": "ae395d42623e129fe19408530213056137329cd2c6370fb5f8f2ce6cf38edcac"
	},
	{
		"id": "9229792cf0d7",
		"ts": "2026-06-27T12:07:15.812Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93561704.49,
		"hash": "9229792cf0d71207605300ba194d885dc72abdcc875299b45068774014816c93"
	},
	{
		"id": "1c9c7b88f118",
		"ts": "2026-06-27T12:07:16.258Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13013710.31,
		"hash": "1c9c7b88f118e69b463a773a91bde76238e24f54e1d3607154da02e4bab0b1c2"
	}
]
