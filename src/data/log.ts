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
	"updatedAt": "2026-08-18T13:38:45.813Z",
	"tokensScored": 11769,
	"verdictsIssued": 11769,
	"safe": 10214,
	"risky": 863,
	"likelyRug": 692,
	"ticks": 696
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "98569ac46dc0",
		"ts": "2026-08-18T13:38:41.459Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112423428.58,
		"hash": "98569ac46dc07189c1165b457af86a6e8604d9b7765260e018736e1187fc38ad"
	},
	{
		"id": "2bec77d2d1d3",
		"ts": "2026-08-18T13:38:41.941Z",
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
		"liquidityUsd": 16929407.86,
		"hash": "2bec77d2d1d36da30b5c171c324453ec75612ad6698c79c995b85f599987ebc9"
	},
	{
		"id": "32ce58293ab4",
		"ts": "2026-08-18T13:38:42.129Z",
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
		"liquidityUsd": 744572.16,
		"hash": "32ce58293ab49c5bbb01dd25fbb0d8889854bc4b0fe0e8b58f9f7ddb9bffa7ca"
	},
	{
		"id": "63c9a99f787a",
		"ts": "2026-08-18T13:38:42.461Z",
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
		"liquidityUsd": 26726142.05,
		"hash": "63c9a99f787a6ada003a3394b47b684e888434ac6fb835d577ed0b5149f3c2ed"
	},
	{
		"id": "f880def2b9c4",
		"ts": "2026-08-18T13:38:42.639Z",
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
		"liquidityUsd": 4246555.35,
		"hash": "f880def2b9c44672ff0ef72b4a78b31eb6de41cf206f2647bab78ba771ba833f"
	},
	{
		"id": "00666ed4ce95",
		"ts": "2026-08-18T13:38:42.821Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 875959.71,
		"hash": "00666ed4ce9531f39c83310ed8385c3ebd235c07ef7cfaab0bf65f7ba2ceefca"
	},
	{
		"id": "40ecc9ed1156",
		"ts": "2026-08-18T13:38:43.013Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4174658.79,
		"hash": "40ecc9ed11566c7182377177346cc784df495db7ff2a3a62a8cf9e00495c89b6"
	},
	{
		"id": "de3589d9139b",
		"ts": "2026-08-18T13:38:43.343Z",
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
		"liquidityUsd": 3334048.23,
		"hash": "de3589d9139b871b77d265009df65411a088f369469b20c174cc7a817eae14e0"
	},
	{
		"id": "f212b011c99b",
		"ts": "2026-08-18T13:38:43.526Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 439471.17,
		"hash": "f212b011c99b9365601490e414d0a871a592d437d21d1b6108f2b64a37628589"
	},
	{
		"id": "767ed8dda7c0",
		"ts": "2026-08-18T13:38:43.728Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4174659.99,
		"hash": "767ed8dda7c0a46d51369e82d61c0d5091711e3f5897ac05e484ff162b53feb3"
	},
	{
		"id": "250ffaf122be",
		"ts": "2026-08-18T13:38:43.974Z",
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
		"liquidityUsd": 437271.12,
		"hash": "250ffaf122be4e6d6d3c30ed321b6cb6a2ab73cb88cd84b37fcd4e846fdf2a5a"
	},
	{
		"id": "75d503cb633a",
		"ts": "2026-08-18T13:38:44.529Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 37825.92,
		"hash": "75d503cb633a2c1b125cba58a65f3827df7f7a404c3962585fa46d67c208ee50"
	},
	{
		"id": "85f660696afb",
		"ts": "2026-08-18T13:38:44.706Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 54206.52,
		"hash": "85f660696afbf1fe13392de3ba3d3507cad811d268039c7644d78c6d9caf99a4"
	},
	{
		"id": "d89915b11cb7",
		"ts": "2026-08-18T13:38:44.882Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 243424.72,
		"hash": "d89915b11cb78cb17d93c6d322f696e4b83d8e017e3e4deb7c97b46445a1ec24"
	},
	{
		"id": "dea77a63f4ba",
		"ts": "2026-08-18T13:38:45.060Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9477344.34,
		"hash": "dea77a63f4bac00cb613372fb69f3f5bd269544c95ff926c61d7713882e34b81"
	},
	{
		"id": "f8a166b3bd92",
		"ts": "2026-08-18T13:38:45.242Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 59369.67,
		"hash": "f8a166b3bd9283b180809fc96a595d5652eca959edcf3792ee0623e660b9d606"
	},
	{
		"id": "584459d7ab2e",
		"ts": "2026-08-18T13:38:45.420Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 845191.52,
		"hash": "584459d7ab2eff2ab7e4b48e391cbbf936d2de5d668e21b0d3b2868820c1f18f"
	},
	{
		"id": "8337bfb0441f",
		"ts": "2026-08-18T13:38:45.619Z",
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
		"liquidityUsd": 596965.2,
		"hash": "8337bfb0441f69352cf74453b2bad7b1eea9a4d387be250002f8f26c4adc344d"
	},
	{
		"id": "e0d383540cfd",
		"ts": "2026-08-18T13:38:45.812Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 339846.9,
		"hash": "e0d383540cfdfd7bb0f8a707977e527832fcf68b1ee99ae92f5d8601db0cfdd6"
	},
	{
		"id": "86df19bac20f",
		"ts": "2026-08-18T12:36:57.194Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112450950.04,
		"hash": "86df19bac20f193cbf0c25aee66d8428b4735ba4270fc0964c403ed75792b10c"
	},
	{
		"id": "4015c539077c",
		"ts": "2026-08-18T12:36:57.429Z",
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
		"liquidityUsd": 16982100.44,
		"hash": "4015c539077c08bd7aeed26a4b44c8b18622fccc94dd2fdd544a462b84f96aec"
	},
	{
		"id": "382c5e36644b",
		"ts": "2026-08-18T12:36:57.678Z",
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
		"liquidityUsd": 750103.53,
		"hash": "382c5e36644b0c97142bdec6fe60d20615aca3f70a3fd628c3fc8f3923c0d1df"
	},
	{
		"id": "14757f932853",
		"ts": "2026-08-18T12:36:57.909Z",
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
		"liquidityUsd": 26771643.19,
		"hash": "14757f93285312ac7678c6193160458f354b98ad3430ff027a4424d09455b6ea"
	},
	{
		"id": "9625611e8bbb",
		"ts": "2026-08-18T12:36:58.147Z",
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
		"liquidityUsd": 4254925.42,
		"hash": "9625611e8bbb82c336df75d54cf8e4f6b88d873573e3948abc1297ba7203655a"
	},
	{
		"id": "4f6a69559a7a",
		"ts": "2026-08-18T12:36:58.375Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 878263.3,
		"hash": "4f6a69559a7a436c1f4dba88696778cf7ae7d7ae0aed969e30b45a16323fb726"
	},
	{
		"id": "93ed18a333f6",
		"ts": "2026-08-18T12:36:58.613Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4141996.24,
		"hash": "93ed18a333f641069804a798431fb7293454589dece07adb9b896e95fa28ba6b"
	},
	{
		"id": "e46873231ff5",
		"ts": "2026-08-18T12:36:58.844Z",
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
		"liquidityUsd": 3347477.54,
		"hash": "e46873231ff5412fc855aa04c0b8c1ceada1b6ef5d1f09b8ab01636f0a336255"
	},
	{
		"id": "bca37c8f906c",
		"ts": "2026-08-18T12:36:59.090Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 460447.83,
		"hash": "bca37c8f906c305f153866820bffc43dc7d8c8a5b9f73dc109fb9228c51d7601"
	},
	{
		"id": "034c3dcaae68",
		"ts": "2026-08-18T12:36:59.320Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 241847.22,
		"hash": "034c3dcaae68d7a71cd77df7e6efd0eff5c45b2bba5e8b30da2c59790fa94b89"
	},
	{
		"id": "ce1a044522a3",
		"ts": "2026-08-18T12:36:59.540Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 38051.98,
		"hash": "ce1a044522a3c8be8d5824141c47c3cfdc099c58097ea35077474566e3421b60"
	},
	{
		"id": "7b52bfbdfb8e",
		"ts": "2026-08-18T12:36:59.752Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 51515.67,
		"hash": "7b52bfbdfb8e84580ffba37a1f148675008cf5c60590b5618ec76784b08562f3"
	},
	{
		"id": "0e7da45d0ed2",
		"ts": "2026-08-18T12:36:59.980Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4141996.24,
		"hash": "0e7da45d0ed20e01e77af98f0c8d0208d58dc7e02dfe7f1a556574fdec2184de"
	},
	{
		"id": "e20e72b9d7a3",
		"ts": "2026-08-18T12:37:00.213Z",
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
		"liquidityUsd": 9511447.53,
		"hash": "e20e72b9d7a3a717f83cbdd41f7ec39055ec5164dd358533551e408837948373"
	},
	{
		"id": "0f3fb901bbd8",
		"ts": "2026-08-18T12:37:00.452Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 56494.32,
		"hash": "0f3fb901bbd8d510d670ffcadddf0823b157220e8d459af2c859e3b8a7efb9dd"
	},
	{
		"id": "6d3bcc0cabb8",
		"ts": "2026-08-18T12:37:00.682Z",
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
		"liquidityUsd": 852520.69,
		"hash": "6d3bcc0cabb8c71e00a287e95bf6de6e1a4d32bf42e0d2a3acb02994d6c6e331"
	},
	{
		"id": "2fdf58efeea4",
		"ts": "2026-08-18T12:37:01.146Z",
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
		"liquidityUsd": 473018.8,
		"hash": "2fdf58efeea47da26aa7bd59e854965a795ea27a086752ae77eff8855020f6eb"
	},
	{
		"id": "b3d72f385d5b",
		"ts": "2026-08-18T12:37:01.381Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 80611.38,
		"hash": "b3d72f385d5b6c4e7a9f5d1291c1cd7ed9175b29dc4db7d12480f09679912151"
	},
	{
		"id": "4d1ed97cb6a8",
		"ts": "2026-08-18T12:37:01.616Z",
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
		"liquidityUsd": 599745.42,
		"hash": "4d1ed97cb6a824ef282c200dc49e9e247fd8776c83cfe009ef3aa468f04aa4cf"
	},
	{
		"id": "9c6540ae64a4",
		"ts": "2026-08-18T12:37:01.851Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 338316.26,
		"hash": "9c6540ae64a4f730f4b80adf104006b82d83d4c972a7ada091f64a2cf57dfffd"
	},
	{
		"id": "95e650eb512a",
		"ts": "2026-08-18T11:21:09.937Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112438950.37,
		"hash": "95e650eb512a899a660d87c4e4d6dbd44e8fcc31d65e02381276c1827e3d8c3d"
	},
	{
		"id": "e1de2faccd0a",
		"ts": "2026-08-18T11:21:10.383Z",
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
		"liquidityUsd": 16941739.94,
		"hash": "e1de2faccd0ac2939a4cc0059b6984cb903631fab19b0d02c007f34f76965edc"
	},
	{
		"id": "7327f1bc2b6b",
		"ts": "2026-08-18T11:21:10.624Z",
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
		"liquidityUsd": 741731.31,
		"hash": "7327f1bc2b6b7a598aaec86c514a544027699351530a6fa0045f4b53931b74cc"
	},
	{
		"id": "c60df9ce9e72",
		"ts": "2026-08-18T11:21:10.865Z",
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
		"liquidityUsd": 26760023.65,
		"hash": "c60df9ce9e722c6fcd05ddf16057b044523edc461d751d3735e483cf21dd7dfb"
	},
	{
		"id": "ca15a8dc48d3",
		"ts": "2026-08-18T11:21:11.309Z",
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
		"liquidityUsd": 4245563.11,
		"hash": "ca15a8dc48d3f0f43d0a71590483f3e9fc0a9ca6f6ae52ca381d0d813d23d366"
	},
	{
		"id": "e5c95fb1d7a8",
		"ts": "2026-08-18T11:21:11.549Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 875805.8,
		"hash": "e5c95fb1d7a8a0875e1517e3bbf806f5a83bc70854dd490877a8d0fbac4970c7"
	},
	{
		"id": "a199a781600e",
		"ts": "2026-08-18T11:21:11.788Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3668519.77,
		"hash": "a199a781600ed5dc4c9f2b9e99236e7e911e83e42fb84659250e5817b99ec854"
	},
	{
		"id": "d37b50478a71",
		"ts": "2026-08-18T11:21:12.028Z",
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
		"liquidityUsd": 3383660.35,
		"hash": "d37b50478a71e157eadba82b3aecb2d92146347ba28a727c3bb749f01186cdea"
	},
	{
		"id": "968a78f86ee3",
		"ts": "2026-08-18T11:21:12.478Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 477938.31,
		"hash": "968a78f86ee31253706abd13d9609c815f2301d88f7c456425a56f16138e939b"
	},
	{
		"id": "d05aa7107890",
		"ts": "2026-08-18T11:21:12.718Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 61019.73,
		"hash": "d05aa7107890d41437e9687264a7c81109760fafaa6ae750eb50181e983cc123"
	},
	{
		"id": "1443c32d8335",
		"ts": "2026-08-18T11:21:12.941Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 242468.66,
		"hash": "1443c32d8335cda0bd64b6e049c530672fcade894a3d435821c8b04afd5c3200"
	},
	{
		"id": "cea71d1fefcd",
		"ts": "2026-08-18T11:21:13.187Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 35453.64,
		"hash": "cea71d1fefcde020ee7565ebd7f60c439c69a27f487ffc12cec049b1f88afc9c"
	},
	{
		"id": "1828529faf22",
		"ts": "2026-08-18T11:21:13.413Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3668519.5,
		"hash": "1828529faf2293ab24802ceee69f1fbe58d3d32e85a0b1bc46eee14fbe0211bb"
	},
	{
		"id": "31f75e54d686",
		"ts": "2026-08-18T11:21:13.636Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 60365,
		"hash": "31f75e54d6864385ea17b9e3c790750dd90d3b98a199192c6c5fc667feadc5df"
	},
	{
		"id": "d701b358dcc6",
		"ts": "2026-08-18T11:21:13.860Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9608349.06,
		"hash": "d701b358dcc6a2934315ccb4afad06ea112986372b199604a7f8ecb7af749646"
	},
	{
		"id": "997d40f6b770",
		"ts": "2026-08-18T11:21:14.143Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 83269,
		"hash": "997d40f6b77007f3c636f66852646ea60a2a5a28a82ea4e3314603275ddf83a9"
	},
	{
		"id": "c7febf057923",
		"ts": "2026-08-18T11:21:14.369Z",
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
		"liquidityUsd": 475294.73,
		"hash": "c7febf057923d848b066139809df979c55be051973ef85eb71ee80000234ed5f"
	},
	{
		"id": "f881a6d1d209",
		"ts": "2026-08-18T11:21:14.595Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 856195.95,
		"hash": "f881a6d1d2092a4c619746e0826babebac2d4bdccf2b6e1cc2847e519ab85dab"
	},
	{
		"id": "da75ffa4c534",
		"ts": "2026-08-18T11:21:14.821Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 386869.88,
		"hash": "da75ffa4c53428ec6ce387144d5cf53c4be0e868c455202d46191d3ff9bf80ba"
	},
	{
		"id": "57a723066013",
		"ts": "2026-08-18T11:21:15.042Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 338443.16,
		"hash": "57a723066013e25f3480383fe3336ad7dcdf5a26248f300e45c43636beb92a71"
	},
	{
		"id": "1980a1185905",
		"ts": "2026-08-18T10:23:35.247Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112432370.16,
		"hash": "1980a11859059234c9fa74c061b21eeb6ca1c503bda9d11e3972f660275ef8cb"
	},
	{
		"id": "b08325d9ac01",
		"ts": "2026-08-18T10:23:35.721Z",
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
		"liquidityUsd": 17221689.37,
		"hash": "b08325d9ac01d507519cdc008e73240956973a11e6aad6c68685e48551dd93e4"
	},
	{
		"id": "e147e59a871b",
		"ts": "2026-08-18T10:23:35.983Z",
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
		"liquidityUsd": 738663.82,
		"hash": "e147e59a871b6fc9501710d479e2c2f8b1db1503e4699107692510caa074452b"
	},
	{
		"id": "90a9b3b62952",
		"ts": "2026-08-18T10:23:36.240Z",
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
		"liquidityUsd": 26722878.96,
		"hash": "90a9b3b62952fd02cc7f6358eae9e4cc0232201a57e2622a076560cf9c7b602a"
	},
	{
		"id": "1b8d468e0f87",
		"ts": "2026-08-18T10:23:36.496Z",
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
		"liquidityUsd": 4223602.13,
		"hash": "1b8d468e0f87cb833b47fd7c1e9bcc734ee1ca39c8fff7a904db9e2b46d75b33"
	},
	{
		"id": "21935c25aead",
		"ts": "2026-08-18T10:23:36.748Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 875805.8,
		"hash": "21935c25aead130d92d66cebeba17ecd366c8c75dac904f21ec30e5b0a14a125"
	},
	{
		"id": "f62b8a860ea9",
		"ts": "2026-08-18T10:23:37.003Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3529609.51,
		"hash": "f62b8a860ea9243eb019a043139cdaca6a6ea262a2f742294be997f0eda1729d"
	},
	{
		"id": "90c02071d595",
		"ts": "2026-08-18T10:23:37.260Z",
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
		"liquidityUsd": 3363494.54,
		"hash": "90c02071d5950697dd25e97e90f6435b8a730ede9c1d64ff6a97463f9e3d075c"
	},
	{
		"id": "4c7a464a16b8",
		"ts": "2026-08-18T10:23:37.517Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 472666.59,
		"hash": "4c7a464a16b8762875893d14bd3bdf5877e73420cc504cb1f2052e0a96317f6b"
	},
	{
		"id": "8d31c43172b9",
		"ts": "2026-08-18T10:23:37.769Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 66200.66,
		"hash": "8d31c43172b9ede3494f5345168c7f03953b2ea2865078def79f9cf6980b21fe"
	},
	{
		"id": "4c89dcf117d8",
		"ts": "2026-08-18T10:23:38.007Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 87607.18,
		"hash": "4c89dcf117d8ba0e987f8b989efa9ac1cb2ff5ab028ca53136421a6b11fdae9e"
	},
	{
		"id": "74954f236222",
		"ts": "2026-08-18T10:23:38.248Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 242620.83,
		"hash": "74954f236222abfa658645677775af970e70553bb8fa2656ba022effcb129e5a"
	},
	{
		"id": "a1cf9b3c029d",
		"ts": "2026-08-18T10:23:38.483Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 384146.79,
		"hash": "a1cf9b3c029d7f95d25f5a2830464cfe190ad39bf383e3b89f605d7a72320b10"
	},
	{
		"id": "5d5ecc65ba87",
		"ts": "2026-08-18T10:23:38.721Z",
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
		"liquidityUsd": 458329.94,
		"hash": "5d5ecc65ba87b815a44c375ed4ad151638340f9028a90b3f372333f7b8ac4337"
	},
	{
		"id": "cad4d3ac57d9",
		"ts": "2026-08-18T10:23:38.958Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 35854.03,
		"hash": "cad4d3ac57d93a080854fb919853df192261b5d4f5505b0cd1c624bc093f2070"
	},
	{
		"id": "4c928f478787",
		"ts": "2026-08-18T10:23:39.221Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3516790.08,
		"hash": "4c928f478787654211ceb1ed89627ba9e3db543063db80f7413c5e76e0a0fc06"
	},
	{
		"id": "3896d8ddf4b3",
		"ts": "2026-08-18T10:23:39.458Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 68855.41,
		"hash": "3896d8ddf4b3e6f8ef7e0e2b9573575c27c49b27d9dc919cb208931f1ca9fc6d"
	},
	{
		"id": "d2b9d5f25555",
		"ts": "2026-08-18T10:23:39.695Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9562344.93,
		"hash": "d2b9d5f2555561760f5d14f690ac981f3b597151cef6c5dc5a9aba5ed8d5fca7"
	},
	{
		"id": "5bc53413958b",
		"ts": "2026-08-18T10:23:39.932Z",
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
		"liquidityUsd": 597106.79,
		"hash": "5bc53413958b41ae702b6e9ec31afdf6feb7cbfda0daf872d35d9c8b1f5b40fa"
	},
	{
		"id": "0b755d01cdae",
		"ts": "2026-08-18T10:23:40.171Z",
		"symbol": "wtCOIN",
		"token": "0x5cDa0E1CA4ce2af96315f7F8963C85399c172204",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 509622,
		"hash": "0b755d01cdae9ca2678f75bc57ad693b941e1933fcaca3137d3fb71ca0b10164"
	},
	{
		"id": "19ef102d018b",
		"ts": "2026-08-18T09:28:07.660Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112434537.84,
		"hash": "19ef102d018b9615b4316b88a1feb1659ddb97553e47213d48d0b3d94c4a1907"
	},
	{
		"id": "4439ac490ea5",
		"ts": "2026-08-18T09:28:07.998Z",
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
		"liquidityUsd": 17478991.52,
		"hash": "4439ac490ea509f0ccd0b47c0526de574a56a8469f192021f78f60ecdca07883"
	},
	{
		"id": "5b4a750892f8",
		"ts": "2026-08-18T09:28:08.195Z",
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
		"liquidityUsd": 747169.2,
		"hash": "5b4a750892f8fae563802a2aa32b9036cbaec079491c9e64d164f1326879a216"
	},
	{
		"id": "1a7b0310f097",
		"ts": "2026-08-18T09:28:08.391Z",
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
		"liquidityUsd": 26728430.38,
		"hash": "1a7b0310f0971089218615821a79f49c985c5fe01b9664e936c375a934986493"
	},
	{
		"id": "ce948c192938",
		"ts": "2026-08-18T09:28:08.583Z",
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
		"liquidityUsd": 4220433.98,
		"hash": "ce948c19293867375e5f1d788ea91f59185b0ab18a002135511461cdda92cc14"
	},
	{
		"id": "91928b93e90e",
		"ts": "2026-08-18T09:28:08.780Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 876623.23,
		"hash": "91928b93e90e8a86497fc01a634992acd527742de40e57e1c6c421d2efaf83ce"
	},
	{
		"id": "7b8db605d3b9",
		"ts": "2026-08-18T09:28:08.984Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3572052.65,
		"hash": "7b8db605d3b927b779e823aecafc6d13918554d90313fb8e5fb4293a6dc34f4d"
	},
	{
		"id": "d5f59f4bd373",
		"ts": "2026-08-18T09:28:09.170Z",
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
		"liquidityUsd": 3216054.12,
		"hash": "d5f59f4bd373f4f35266d05ca105a14e8e6cc05bb4a91d72eb8759b59136c963"
	},
	{
		"id": "8ff5bc328f12",
		"ts": "2026-08-18T09:28:09.362Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 490779.01,
		"hash": "8ff5bc328f125757b8dd2c219f4545fabcd773f85e4805d4af3dfdc5026650bd"
	},
	{
		"id": "6956d1444937",
		"ts": "2026-08-18T09:28:09.577Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 73868.05,
		"hash": "6956d1444937665c7d28625a4f93287693ac820077ff6caf1820636ee57ee6c0"
	},
	{
		"id": "e59d906be552",
		"ts": "2026-08-18T09:28:09.770Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 94588.79,
		"hash": "e59d906be552bee099b5de7baba0f6c7415000eed247f0d5659d96eab123cb94"
	},
	{
		"id": "167a70bf7ede",
		"ts": "2026-08-18T09:28:09.992Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 242641.52,
		"hash": "167a70bf7edebcc1b05c6ec9bc27b8bdf62a1aaa96fa3d102892420065709dab"
	},
	{
		"id": "0f568b20a34d",
		"ts": "2026-08-18T09:28:10.196Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 384186.06,
		"hash": "0f568b20a34d83f60dcce5f3a86021d18f1280000ad22d016c9373a5f7606e6a"
	},
	{
		"id": "ca86500561af",
		"ts": "2026-08-18T09:28:10.378Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 35303.58,
		"hash": "ca86500561afbabb1018917e3c1ea4d9484b8e2b00adc41b82185005b616b335"
	},
	{
		"id": "ffbdb9afaeab",
		"ts": "2026-08-18T09:28:10.641Z",
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
		"liquidityUsd": 441580.18,
		"hash": "ffbdb9afaeab151b85377a395a847d7920aa0649d176aa89ca8abad5d34b4b9d"
	},
	{
		"id": "ec875bdd75e7",
		"ts": "2026-08-18T09:28:10.833Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3572052.65,
		"hash": "ec875bdd75e7445ed102141ac6fe6d3e5b8793005e5c415a5d54a6d6e24d696d"
	},
	{
		"id": "3e40d0dec0a8",
		"ts": "2026-08-18T09:28:11.021Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 72432.91,
		"hash": "3e40d0dec0a85ac7ec8e104d9543c897fa1d21b9c45653c35743d7cc94d32422"
	},
	{
		"id": "4d0aa90c2e12",
		"ts": "2026-08-18T09:28:11.246Z",
		"symbol": "wtCOIN",
		"token": "0x5cDa0E1CA4ce2af96315f7F8963C85399c172204",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 509622,
		"hash": "4d0aa90c2e12915c25dd471168d4e7725d47e74589b50dedbcd3ea5e3c6b77fa"
	},
	{
		"id": "25f78692efd8",
		"ts": "2026-08-18T09:28:11.440Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9497102.9,
		"hash": "25f78692efd8d8dba1e5f90a41e927266988e246f97f20256a64171359f6385f"
	},
	{
		"id": "89fa34ad3301",
		"ts": "2026-08-18T09:28:11.621Z",
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
		"liquidityUsd": 588530.41,
		"hash": "89fa34ad3301766d3915aab0fef00d880e9c1a756ac69971aa935250ecb547b1"
	},
	{
		"id": "04d24b3678e0",
		"ts": "2026-08-18T08:31:15.608Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112438975.82,
		"hash": "04d24b3678e015a79e80fb3cbc216c51f34c363af093159272c77ca16837efb6"
	},
	{
		"id": "801528438798",
		"ts": "2026-08-18T08:31:15.852Z",
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
		"liquidityUsd": 16746014.87,
		"hash": "801528438798c577126ed55bc0dc1895b0ba09a1f4da8a942022a2ee4c1631f7"
	},
	{
		"id": "f268f6118c67",
		"ts": "2026-08-18T08:31:16.077Z",
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
		"liquidityUsd": 753451.6,
		"hash": "f268f6118c673b85d63f6c93d23a34a7483976107cc7353c92c56aef7f661330"
	},
	{
		"id": "1ba9283b83db",
		"ts": "2026-08-18T08:31:16.318Z",
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
		"liquidityUsd": 26725583.27,
		"hash": "1ba9283b83db1afa460dbe7fd7e115fe0e94f2a0c034a03ee9b70cdcae03a308"
	},
	{
		"id": "8d36f2003f48",
		"ts": "2026-08-18T08:31:16.592Z",
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
		"liquidityUsd": 4224003.43,
		"hash": "8d36f2003f48c9a8fba08ad2daab504b560619061f1b9cd1a0d95e343ed114bd"
	},
	{
		"id": "74ba323c0d95",
		"ts": "2026-08-18T08:31:16.816Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 876623.23,
		"hash": "74ba323c0d9518b0790e9482f92c0268fdb6c82b61329f396521b28cae671369"
	},
	{
		"id": "a2eb38cd88d1",
		"ts": "2026-08-18T08:31:17.050Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3370226.37,
		"hash": "a2eb38cd88d1055bd7ddc10301860ac7f58f87d0a262276b68cb7e89fb72bb99"
	},
	{
		"id": "f1435fd0a8d2",
		"ts": "2026-08-18T08:31:17.311Z",
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
		"liquidityUsd": 3411147.31,
		"hash": "f1435fd0a8d254c3edbb9e132fbf2354bc41350da0616d5364fba283ab9b2725"
	},
	{
		"id": "b021fc10ae43",
		"ts": "2026-08-18T08:31:17.553Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 488942.42,
		"hash": "b021fc10ae43ace00974fa4f26f3808dc1f4d86366aabf91516c907545b7360b"
	},
	{
		"id": "6d7d8200433b",
		"ts": "2026-08-18T08:31:17.789Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 99146.3,
		"hash": "6d7d8200433b2dc6ad44244f935a4c0ed06205025939af69b46e73cf542a2a87"
	},
	{
		"id": "2e640a77474d",
		"ts": "2026-08-18T08:31:18.012Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 72545.97,
		"hash": "2e640a77474d0c858377322c28adefe3e165fad03260cc3c57e69363ed5b0580"
	},
	{
		"id": "ca40a2fe2e24",
		"ts": "2026-08-18T08:31:18.222Z",
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
		"liquidityUsd": 462146.16,
		"hash": "ca40a2fe2e24059341efd80031b615a028dd3b66cdc3fe7c3d8411a2a9118ea7"
	},
	{
		"id": "653661a288e2",
		"ts": "2026-08-18T08:31:18.428Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 242415.92,
		"hash": "653661a288e26be4421691677b467125e3a0fd46a34bdbb3f37e23a6bbc4220e"
	},
	{
		"id": "5d1740cdf714",
		"ts": "2026-08-18T08:31:18.648Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 387997.13,
		"hash": "5d1740cdf714e19a11b742dc1f8f861d46a10fd24bb79b96fa7633896d56b30b"
	},
	{
		"id": "5ba56a9935e6",
		"ts": "2026-08-18T08:31:18.857Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 36378.63,
		"hash": "5ba56a9935e6f0286110518d8079a19e95ba33e13c023a882a5932ea92a6e772"
	},
	{
		"id": "95cd804559d2",
		"ts": "2026-08-18T08:31:19.064Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3369703.97,
		"hash": "95cd804559d2aa87f9752037a1075cf4313ba6e8ef6ae9734b1e244fd85889c0"
	},
	{
		"id": "0c6a449adb30",
		"ts": "2026-08-18T08:31:19.284Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 70899.44,
		"hash": "0c6a449adb30cae154eb53c2683f63ab8cff70e5cdfa58e98594db06d6b94850"
	},
	{
		"id": "380092aafda7",
		"ts": "2026-08-18T08:31:19.492Z",
		"symbol": "wtCOIN",
		"token": "0x5cDa0E1CA4ce2af96315f7F8963C85399c172204",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 509622,
		"hash": "380092aafda700e32301a67723d364e080f9dd268359d35990647207c0c5d928"
	},
	{
		"id": "9ee0b006f4a6",
		"ts": "2026-08-18T08:31:19.715Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10025997.75,
		"hash": "9ee0b006f4a6eea319b9ff7548cfd799ba4c726582ead7b168192208c9cfa118"
	},
	{
		"id": "89a509f63f5a",
		"ts": "2026-08-18T08:31:19.922Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2580575.63,
		"hash": "89a509f63f5aa9c19b0f3e912f2a7bc7cf1f5f0e0a2bd70a4370688d4366f0ac"
	},
	{
		"id": "d40f3d5ae317",
		"ts": "2026-08-18T07:34:27.582Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112469936.87,
		"hash": "d40f3d5ae317c02f712bbd1cd68ff70bac99cb6d3eafb3849acbfa6b55d6f6de"
	},
	{
		"id": "4fe36b98066d",
		"ts": "2026-08-18T07:34:27.790Z",
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
		"liquidityUsd": 16733430.52,
		"hash": "4fe36b98066d0658c2a70a697c9e02d9e59c56160cfd4a5debb5e397b62aa910"
	},
	{
		"id": "23a20a2bc2aa",
		"ts": "2026-08-18T07:34:27.987Z",
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
		"liquidityUsd": 766196.6,
		"hash": "23a20a2bc2aa82488f8ea5a3ddac9877846fb93fe392070e99d2985e96076bdf"
	},
	{
		"id": "12aefa43734b",
		"ts": "2026-08-18T07:34:28.182Z",
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
		"liquidityUsd": 26824019.8,
		"hash": "12aefa43734b2cbf7b4a4bd28afa072c5151528e62c43c9befb05f3fee72e1b9"
	},
	{
		"id": "07a2ae28f505",
		"ts": "2026-08-18T07:34:28.383Z",
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
		"liquidityUsd": 4224003.43,
		"hash": "07a2ae28f5059a590cad56ceb59f51913cbf6a5c27a170c33300662e9bf46818"
	},
	{
		"id": "70d15fc4a6b7",
		"ts": "2026-08-18T07:34:28.596Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 876623.23,
		"hash": "70d15fc4a6b76a47669b3b7ec201360c8d66b99033189613555e3a28796f5572"
	},
	{
		"id": "e274e6fcc5aa",
		"ts": "2026-08-18T07:34:28.783Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3425363.51,
		"hash": "e274e6fcc5aac3b5bd8bce32c75ba84ee3e837a42a6faa1fe9d562fcf93e34a8"
	},
	{
		"id": "71977ba8d842",
		"ts": "2026-08-18T07:34:29.017Z",
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
		"liquidityUsd": 3416016.87,
		"hash": "71977ba8d8429c97990e447e85a8e4b7ef56e43fd32ae04a1d765a163ea37087"
	},
	{
		"id": "1a029751a3e6",
		"ts": "2026-08-18T07:34:29.221Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 490342.68,
		"hash": "1a029751a3e6a055475be43a8042ecfd52f785c9d382ad0878a88577c06fab81"
	},
	{
		"id": "bd3ca59f2b92",
		"ts": "2026-08-18T07:34:29.410Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 97638.36,
		"hash": "bd3ca59f2b92254e73515bc9aeca74cb142f461a8533347ef3ef33205ca8de88"
	},
	{
		"id": "d473a8012306",
		"ts": "2026-08-18T07:34:29.600Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 70649.48,
		"hash": "d473a801230699655a0b7e8ed8e3ef90f41a4bc8bdaa9b43165468d17a26e132"
	},
	{
		"id": "1f9f57b83ea5",
		"ts": "2026-08-18T07:34:29.782Z",
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
		"liquidityUsd": 475664.99,
		"hash": "1f9f57b83ea5c86f6d2ba5b0aaaa0700d0a0d3fdd0b9dccb5879625334c662cb"
	},
	{
		"id": "3cded7408a42",
		"ts": "2026-08-18T07:34:29.970Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 242368.17,
		"hash": "3cded7408a420137243a7286af916fdca0839120ed41ead3579936d77ba37299"
	},
	{
		"id": "6a96e235d673",
		"ts": "2026-08-18T07:34:30.171Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 391043.62,
		"hash": "6a96e235d673d44fea38f6097048aba3c2a171690dc09cb060431782381e6345"
	},
	{
		"id": "82732e0cb5bb",
		"ts": "2026-08-18T07:34:30.358Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 34189.82,
		"hash": "82732e0cb5bbe2f93f3e16dbb7e5c810846c5fe98a6a0c0b1de7a48f3e1f92f4"
	},
	{
		"id": "f63913f46a28",
		"ts": "2026-08-18T07:34:30.553Z",
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
		"liquidityUsd": 9995694.59,
		"hash": "f63913f46a285f028282a8d1a113a1203d3049fb7f80c31e2d01c0f3183c4b84"
	},
	{
		"id": "00440bb1606c",
		"ts": "2026-08-18T07:34:30.737Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3425363.14,
		"hash": "00440bb1606ccf5fc8080a5c12b6830c5ad44151ebe64610bc5612d40cc4d682"
	},
	{
		"id": "b41533c227ce",
		"ts": "2026-08-18T07:34:30.928Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 75764.56,
		"hash": "b41533c227ce8e098df1911d4fc8d0e800b0684b0ae263de781d37b3832652ae"
	},
	{
		"id": "eed260c518a6",
		"ts": "2026-08-18T07:34:31.123Z",
		"symbol": "wtCOIN",
		"token": "0x5cDa0E1CA4ce2af96315f7F8963C85399c172204",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 51445.42,
		"hash": "eed260c518a6f1c3d4263c1966975c760ebd2aa0d5be97ce6d8ef3fcd4ae2cef"
	},
	{
		"id": "94cc3534dbfd",
		"ts": "2026-08-18T07:34:31.305Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2587052.23,
		"hash": "94cc3534dbfda15571359104315f34182f62d877b0d390632f7fc5a198cc54d7"
	},
	{
		"id": "801310f27f2f",
		"ts": "2026-08-18T06:35:55.142Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112354311.2,
		"hash": "801310f27f2f4181fad41a15b7dd05b291d033c4892d46dc0c16ae28300a477a"
	},
	{
		"id": "5c44ede4d4af",
		"ts": "2026-08-18T06:35:55.373Z",
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
		"liquidityUsd": 16683630.7,
		"hash": "5c44ede4d4af564529a04990655a4f618ebab0d746b6a74b7add2d00d623cc97"
	},
	{
		"id": "1f63ea53a804",
		"ts": "2026-08-18T06:35:55.615Z",
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
		"liquidityUsd": 766196.6,
		"hash": "1f63ea53a804957436ca86d9310113cd07a632b9dc8addb9bc4987305596a330"
	},
	{
		"id": "d6981e6b6c54",
		"ts": "2026-08-18T06:35:55.847Z",
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
		"liquidityUsd": 26815813.97,
		"hash": "d6981e6b6c54ae8699071a249c0144230a885aa36ad0fe6dee12030731999bd3"
	},
	{
		"id": "3c0501470536",
		"ts": "2026-08-18T06:35:56.076Z",
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
		"liquidityUsd": 4224003.43,
		"hash": "3c0501470536d208032d9836eadc9cad5fbf675bcedf85061cecb3373f2c7e48"
	},
	{
		"id": "eff3dba61b6c",
		"ts": "2026-08-18T06:35:56.301Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 876623.23,
		"hash": "eff3dba61b6cbb4de3a0e5fd965f38dafb986a6bb77389bab073a7c23614343a"
	},
	{
		"id": "3dc989867864",
		"ts": "2026-08-18T06:35:56.544Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3434815.82,
		"hash": "3dc98986786426906e03c3379a1f54c862551e184b754e94ba93eec475b0cd37"
	},
	{
		"id": "e7fdfa9eef61",
		"ts": "2026-08-18T06:35:56.769Z",
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
		"liquidityUsd": 1522935.99,
		"hash": "e7fdfa9eef61568f6b080f91df532302b3f4e491c29a8ab814aac007ce2811ae"
	},
	{
		"id": "d4b0b1cfb119",
		"ts": "2026-08-18T06:35:56.999Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 462674.83,
		"hash": "d4b0b1cfb119f699976ae62d69d4a0bcdd9044b9a0a91ac41669f00556800111"
	},
	{
		"id": "0c71dedb36a5",
		"ts": "2026-08-18T06:35:57.226Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 93813.78,
		"hash": "0c71dedb36a5aaa0a022dd1f90959d450f5a826e86dc4c97c51874ba1c21c0c5"
	},
	{
		"id": "c5daec693c4d",
		"ts": "2026-08-18T06:35:57.436Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 67095.99,
		"hash": "c5daec693c4dad6b288de3856e7ec00d8fb3661186b9e7efc37596631bb10314"
	},
	{
		"id": "5e48553b1ec1",
		"ts": "2026-08-18T06:35:57.648Z",
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
		"liquidityUsd": 463229.35,
		"hash": "5e48553b1ec1ae3b2ce7c55afd471ec70d738f0e7e7d0b6bf2d5b5342ce7b10c"
	},
	{
		"id": "887923324654",
		"ts": "2026-08-18T06:35:57.857Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 243830.07,
		"hash": "887923324654dbd3b2a602aaac58e1be52b19f88beb4e3348266abbd8c364fd5"
	},
	{
		"id": "5d073a84db98",
		"ts": "2026-08-18T06:35:58.068Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 390245.48,
		"hash": "5d073a84db9872c6b066a8f3a18f2f2d959de54d64e5725f19034bc49babb8d8"
	},
	{
		"id": "6a5f6a164b36",
		"ts": "2026-08-18T06:35:58.279Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 34385.36,
		"hash": "6a5f6a164b36af6689bf04846eeed44bde460271ab3a862818a837b741054bf8"
	},
	{
		"id": "e227abfc89b2",
		"ts": "2026-08-18T06:35:58.526Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10000840.9,
		"hash": "e227abfc89b2193bffd1bd318a3749d0e292902aff54468411d82baf31584979"
	},
	{
		"id": "5481711b4c8b",
		"ts": "2026-08-18T06:35:58.736Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3430501.52,
		"hash": "5481711b4c8bb6159b21142d4060a23cecf5e4eb98a326df282716ed77450630"
	},
	{
		"id": "30d5e42e1ad6",
		"ts": "2026-08-18T06:35:58.946Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 69396.43,
		"hash": "30d5e42e1ad6297eefca440f647071281dabfb79bc482fa93b0c8d3f9941acae"
	},
	{
		"id": "13fdc3b5187f",
		"ts": "2026-08-18T06:35:59.156Z",
		"symbol": "wtCOIN",
		"token": "0x5cDa0E1CA4ce2af96315f7F8963C85399c172204",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 58129.26,
		"hash": "13fdc3b5187f2439d42f9f4d1961445ad14fb852d8a4c2f02bdfdaa14b45ca1a"
	},
	{
		"id": "d79796e832d7",
		"ts": "2026-08-18T06:35:59.367Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2523862.71,
		"hash": "d79796e832d779c2839b1bc9369c2b02dd220d4d0ad4f78c08d76d4cd0f2879c"
	},
	{
		"id": "77044fd4979f",
		"ts": "2026-08-18T05:24:39.513Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112215696.55,
		"hash": "77044fd4979f1e8c7921b702810d32427baa890d4c5a12195ea113f81ae013d8"
	},
	{
		"id": "402c52f7ee6d",
		"ts": "2026-08-18T05:24:40.291Z",
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
		"liquidityUsd": 16627335.22,
		"hash": "402c52f7ee6db407f09acf3b83977d3719ba2ab3b3a74e1054e8031b00b937e6"
	},
	{
		"id": "cd8fb66d65d7",
		"ts": "2026-08-18T05:24:40.691Z",
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
		"liquidityUsd": 773309.03,
		"hash": "cd8fb66d65d75722097c456096fac6485020ad73e8f8c840a6bceb08cf02bb50"
	},
	{
		"id": "8e0f19aa11d1",
		"ts": "2026-08-18T05:24:41.092Z",
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
		"liquidityUsd": 26802818.58,
		"hash": "8e0f19aa11d15721b54b2a6e68728a79a9129db8d7ce43d15712d78d9714e0ea"
	},
	{
		"id": "793f5ba806ef",
		"ts": "2026-08-18T05:24:41.489Z",
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
		"liquidityUsd": 4223491.23,
		"hash": "793f5ba806ef31261d2a14ebd9cb7e6c425c1d589c32518a0c86af1a345476dc"
	},
	{
		"id": "753c959e4a1c",
		"ts": "2026-08-18T05:24:41.886Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 876623.23,
		"hash": "753c959e4a1ca44150d9e5fd0f69574701f795c30e27c1671a7558e8ce893b2e"
	},
	{
		"id": "e4f0fad0ed6f",
		"ts": "2026-08-18T05:24:42.097Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3574405.44,
		"hash": "e4f0fad0ed6fd3a101306acf8e1ee21f62c15539979a327f24f9a3228cb4ef1d"
	},
	{
		"id": "4b8001942e1c",
		"ts": "2026-08-18T05:24:42.499Z",
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
		"liquidityUsd": 1519139.18,
		"hash": "4b8001942e1ccabc2fcae6a2eeff20709cdfdf4ed287c49364dd8ffc78574419"
	},
	{
		"id": "db51d948d3e8",
		"ts": "2026-08-18T05:24:42.958Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 466791.96,
		"hash": "db51d948d3e85d61d09bea431628bafce129715ee967b65afcfb4d1754c98eb8"
	},
	{
		"id": "380306d9baa8",
		"ts": "2026-08-18T05:24:43.356Z",
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
		"liquidityUsd": 9894624.45,
		"hash": "380306d9baa8a61eafbff489f9e14aed83b5514ae01a4a601682215cf49c4cf4"
	},
	{
		"id": "476e61e4e177",
		"ts": "2026-08-18T05:24:43.555Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 95300.67,
		"hash": "476e61e4e17761d149b3241a2b5b05b7135704ac4a5728540463aa6e02df0ee2"
	},
	{
		"id": "476808e901a4",
		"ts": "2026-08-18T05:24:43.755Z",
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
		"liquidityUsd": 519855.9,
		"hash": "476808e901a4c70e2ae8680f86c7be0713a8f127a860126f54e165a1d25e97b3"
	},
	{
		"id": "4469176ab5db",
		"ts": "2026-08-18T05:24:43.954Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 66155.98,
		"hash": "4469176ab5db1100b77df5ea57b994b46779b1679b0924c28b7be424cce472ea"
	},
	{
		"id": "a9f9806e319d",
		"ts": "2026-08-18T05:24:44.416Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 244938.76,
		"hash": "a9f9806e319d3ea1612e95bd22138fe71881c0017aa8583bfc87d577c156c9d9"
	},
	{
		"id": "ce78eef81aa0",
		"ts": "2026-08-18T05:24:44.614Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 388918.51,
		"hash": "ce78eef81aa0cfc33365d0902341106cffc7a1c8fa202964b4d8430eee517f89"
	},
	{
		"id": "66a382893068",
		"ts": "2026-08-18T05:24:44.811Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 31951.76,
		"hash": "66a382893068826fa5e4960bb2f75b4e4823efb27bc25fc4643a5522b3591b92"
	},
	{
		"id": "8f96f8867fa4",
		"ts": "2026-08-18T05:24:45.010Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3568556.59,
		"hash": "8f96f8867fa46eebb764439fc34f8facbd36952bc06660c754dfabb8e72a3714"
	},
	{
		"id": "754ba00d6016",
		"ts": "2026-08-18T05:24:45.210Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 73278.95,
		"hash": "754ba00d601683295de7d74327ff415f0546aaae374a7dcc4060fcf3e9b5f842"
	},
	{
		"id": "d16ab221a322",
		"ts": "2026-08-18T05:24:45.408Z",
		"symbol": "wtCOIN",
		"token": "0x5cDa0E1CA4ce2af96315f7F8963C85399c172204",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 57801.39,
		"hash": "d16ab221a322a368648887bbc8f1faf5192f8cacd0dea76a444a45c073071ff9"
	},
	{
		"id": "075447eb5c4e",
		"ts": "2026-08-18T04:31:40.820Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112195091.32,
		"hash": "075447eb5c4e7dc612cfc40c29c8dc5281a4a0026feca712b61b2268cb1e0272"
	},
	{
		"id": "51cc8b377004",
		"ts": "2026-08-18T04:31:41.242Z",
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
		"liquidityUsd": 17207203.31,
		"hash": "51cc8b377004c7397375d0a9ce0f656c4aa1f6bea517ef477f4a3e6f4dee7a0b"
	},
	{
		"id": "2d038e91b97f",
		"ts": "2026-08-18T04:31:41.522Z",
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
		"liquidityUsd": 772237.59,
		"hash": "2d038e91b97f380d2c76ad89d26301335c6768b5972b0a4fa6fa3bf780d49e53"
	},
	{
		"id": "a7bd8d4554b5",
		"ts": "2026-08-18T04:31:41.753Z",
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
		"liquidityUsd": 26803128.02,
		"hash": "a7bd8d4554b5a22192522ddf4568430c96e10c4eee140453204ffcd2d8293872"
	},
	{
		"id": "c3b3c5a13aae",
		"ts": "2026-08-18T04:31:41.997Z",
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
		"liquidityUsd": 4217668.45,
		"hash": "c3b3c5a13aaeed032115b8c50bbce80c10794b7973f1f7c80ae59cba59df06e7"
	},
	{
		"id": "2891b221ce8d",
		"ts": "2026-08-18T04:31:42.244Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 876623.39,
		"hash": "2891b221ce8dbde5f616187203a90d5c680e2a34846ce8c3b6b1ac8074ea974d"
	},
	{
		"id": "16e07977c0e8",
		"ts": "2026-08-18T04:31:42.476Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3728060.33,
		"hash": "16e07977c0e84aabad2332cfbe0c9db79c9a1915ddc324eff4305d3bcaea0539"
	},
	{
		"id": "03641383bc32",
		"ts": "2026-08-18T04:31:42.732Z",
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
		"liquidityUsd": 1516737.73,
		"hash": "03641383bc32ce0a7eb4a7756dff5b63f63a120ff757c8054a67b9ebd5d8a77a"
	},
	{
		"id": "b6850cae06e9",
		"ts": "2026-08-18T04:31:42.972Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 494088.51,
		"hash": "b6850cae06e9d665685500d50243c856eb1c36d5c96f45e53c4d09b8503873b2"
	},
	{
		"id": "46dc5f715189",
		"ts": "2026-08-18T04:31:43.205Z",
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
		"liquidityUsd": 9849132.19,
		"hash": "46dc5f715189dab804a940f6576172062adfab615d8bbf96fd02802a4278b5b4"
	},
	{
		"id": "ae5a82029ee7",
		"ts": "2026-08-18T04:31:43.420Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 93529.74,
		"hash": "ae5a82029ee724b951e33fd05e6ddc36e6aa773f954656ec00006201715ead84"
	},
	{
		"id": "06ca4d383840",
		"ts": "2026-08-18T04:31:43.635Z",
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
		"liquidityUsd": 519855.9,
		"hash": "06ca4d383840f7181e2d580b76696613c1a00c9c61594711454521aa10e858fd"
	},
	{
		"id": "237ee2d38041",
		"ts": "2026-08-18T04:31:43.848Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 68545.64,
		"hash": "237ee2d38041a030331cbc000ec20fbfee7a628388165b81e26b19a957fbbe11"
	},
	{
		"id": "cc044644abd9",
		"ts": "2026-08-18T04:31:44.063Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 245247.83,
		"hash": "cc044644abd94eb2d3526842fff72981fc500d730615db56271f44fdeb1f6340"
	},
	{
		"id": "75bc58409b3a",
		"ts": "2026-08-18T04:31:44.275Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 388169.06,
		"hash": "75bc58409b3a034beee70f8d0d79b8ed233863114c9d768336578dc9c8cfb09e"
	},
	{
		"id": "7e1efffc991b",
		"ts": "2026-08-18T04:31:44.487Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 34122.49,
		"hash": "7e1efffc991bc24daad6583c41cf754d8625d3f4b6a2c85ab6f575e4dd53d499"
	},
	{
		"id": "522965de4c86",
		"ts": "2026-08-18T04:31:44.699Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3728060.39,
		"hash": "522965de4c869664dacfc8339b6eaf74c3fa3e9d2aad2c5d59609b21b3c538e9"
	},
	{
		"id": "2829a4a997dc",
		"ts": "2026-08-18T04:31:44.913Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 80465.02,
		"hash": "2829a4a997dc475ed0105844787d1ef72578835912b8c3f9b4d7a308d0b3bbdc"
	},
	{
		"id": "9be2af67d91b",
		"ts": "2026-08-18T04:31:45.126Z",
		"symbol": "wtCOIN",
		"token": "0x5cDa0E1CA4ce2af96315f7F8963C85399c172204",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 56243.91,
		"hash": "9be2af67d91b21d1c730e03d246dc19ae70eeed5a505731b0a29a154b1e250b3"
	},
	{
		"id": "35beb0433373",
		"ts": "2026-08-18T03:40:29.573Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112182512.09,
		"hash": "35beb043337313ef9e7d17f059008d76384510fee6a041641fe20a7ffce3bb50"
	},
	{
		"id": "4273dc7453a2",
		"ts": "2026-08-18T03:40:30.025Z",
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
		"liquidityUsd": 16564582.7,
		"hash": "4273dc7453a238988987bea339a15a279d09eb0b50953f1f022a82f68e5bfe6a"
	},
	{
		"id": "27de4d548318",
		"ts": "2026-08-18T03:40:30.301Z",
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
		"liquidityUsd": 775285.8,
		"hash": "27de4d5483182b4631afe33ef8ee3a14843a81e195a191c1e5397224b5538680"
	}
]
