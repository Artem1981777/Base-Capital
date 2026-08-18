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
	"updatedAt": "2026-08-18T05:24:45.408Z",
	"tokensScored": 11610,
	"verdictsIssued": 11610,
	"safe": 10084,
	"risky": 855,
	"likelyRug": 671,
	"ticks": 688
}

export const verdicts: AgentVerdict[] = [
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
	},
	{
		"id": "d71021e9cf40",
		"ts": "2026-08-18T03:40:30.560Z",
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
		"liquidityUsd": 26778991.07,
		"hash": "d71021e9cf40652eda3954054ebbb58f86bc22f38021e6165f4d90f71da1e3cb"
	},
	{
		"id": "69dcaa55f8a4",
		"ts": "2026-08-18T03:40:30.813Z",
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
		"liquidityUsd": 4210454,
		"hash": "69dcaa55f8a47d8a25426392ba284049d47d7837eaf7901bd1246c95236d6d12"
	},
	{
		"id": "5fee0b84b358",
		"ts": "2026-08-18T03:40:31.068Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 876673.72,
		"hash": "5fee0b84b3585a927e69a4ecb49f2874ac317882440e4e872b58e714bbddda12"
	},
	{
		"id": "752d04d50393",
		"ts": "2026-08-18T03:40:31.345Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3768069.02,
		"hash": "752d04d50393bd465fbf461450df59b3bc82723d1cf6abf9596c86e7639fe87c"
	},
	{
		"id": "9cb8b1777a70",
		"ts": "2026-08-18T03:40:31.669Z",
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
		"liquidityUsd": 1514698.09,
		"hash": "9cb8b1777a707d3bb542459025ba4b54df722c773f2718666921c825e96df663"
	},
	{
		"id": "b95011677a9b",
		"ts": "2026-08-18T03:40:31.943Z",
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
		"liquidityUsd": 494872.88,
		"hash": "b95011677a9bb99ad0f84d56920beb69440619038d30f356c32b0da6d16c54ff"
	},
	{
		"id": "1140072f7b83",
		"ts": "2026-08-18T03:40:32.204Z",
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
		"liquidityUsd": 9729819.8,
		"hash": "1140072f7b8340b45fcd7e035960405632b54e28872f7ffb6a2f9ec16fd3ca7f"
	},
	{
		"id": "2c335521ee04",
		"ts": "2026-08-18T03:40:32.441Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 91176.64,
		"hash": "2c335521ee047e60755f3eae01067e527837e2ba8f584feb2d81f5f287137cab"
	},
	{
		"id": "ee84d0b67950",
		"ts": "2026-08-18T03:40:32.676Z",
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
		"hash": "ee84d0b679507d01bf7d05acc03e216135f73e032dceff6a1438a9b9fd412ce0"
	},
	{
		"id": "042cd3e79d8f",
		"ts": "2026-08-18T03:40:32.913Z",
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
		"liquidityUsd": 72871.57,
		"hash": "042cd3e79d8f8031caf22cd6acd292ef11931a9c7714ed6d830e7e9be94a0d1f"
	},
	{
		"id": "2bbf05df8f8e",
		"ts": "2026-08-18T03:40:33.148Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 384818.38,
		"hash": "2bbf05df8f8ea4ccc972bd53c0f39f2546e22e169edc54529eba998635369f68"
	},
	{
		"id": "9d6c35db2d60",
		"ts": "2026-08-18T03:40:33.385Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 247352.6,
		"hash": "9d6c35db2d601e0eaf069450e32943b44499499af4553c321291c79de4c44b33"
	},
	{
		"id": "367ebe22a9f8",
		"ts": "2026-08-18T03:40:33.620Z",
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
		"liquidityUsd": 34115.05,
		"hash": "367ebe22a9f8ba61a5f5d1d2d5362133adc9d6c8c1751a45c8d8c02b12d7eacc"
	},
	{
		"id": "49fddac6ddf2",
		"ts": "2026-08-18T03:40:33.859Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3768069.02,
		"hash": "49fddac6ddf2e5006c991c7479e0d4dc8301765c8f17e6d8b8b5e2640341fa6b"
	},
	{
		"id": "b638565f252d",
		"ts": "2026-08-18T03:40:34.100Z",
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
		"liquidityUsd": 75049.11,
		"hash": "b638565f252d9538f76ab3ac6476752790f6bdfb16f08dcf2e2b9adf25658733"
	},
	{
		"id": "26e6885cce46",
		"ts": "2026-08-18T03:40:34.338Z",
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
		"liquidityUsd": 52875.03,
		"hash": "26e6885cce46d2522b2f431f46656f9725c10872c80f31705b050d163801ae69"
	},
	{
		"id": "9dae78fb0480",
		"ts": "2026-08-18T02:18:22.232Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112675708.41,
		"hash": "9dae78fb048053c869563d1e72a148f2fde60724a3b0906f338e390c39c29883"
	},
	{
		"id": "f6151e40933e",
		"ts": "2026-08-18T02:18:22.725Z",
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
		"liquidityUsd": 13716523.26,
		"hash": "f6151e40933efbcbce7b5ea9ceaa01ab233e3c95a30ef2b40e139dddfe957f06"
	},
	{
		"id": "97009c1db501",
		"ts": "2026-08-18T02:18:23.102Z",
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
		"liquidityUsd": 786194.78,
		"hash": "97009c1db50133e3c0890d13ceaecacd73de43b4ff421fc5ed1ed215e078fbdd"
	},
	{
		"id": "a6a81679ef7a",
		"ts": "2026-08-18T02:18:23.448Z",
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
		"liquidityUsd": 26865380.47,
		"hash": "a6a81679ef7aa78e091d6fc8bb5765c0d6d75a889300bb2f424a04a34ed063e9"
	},
	{
		"id": "aa2d612bb12e",
		"ts": "2026-08-18T02:18:23.804Z",
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
		"liquidityUsd": 4239961.09,
		"hash": "aa2d612bb12e4338598b69fe7a8656f74cda8453ec6310ab2190eed85117a07d"
	},
	{
		"id": "3f01d6b286b4",
		"ts": "2026-08-18T02:18:24.026Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 886926.7,
		"hash": "3f01d6b286b4fc059c57fca947d5ae29278292b9e48da914bd854e119c6bf2c0"
	},
	{
		"id": "701d634b916a",
		"ts": "2026-08-18T02:18:24.230Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3801551.51,
		"hash": "701d634b916a8af38ea594007142af675efb5e420e6739fa622cdebd969f1cde"
	},
	{
		"id": "ec0e436bb06d",
		"ts": "2026-08-18T02:18:24.612Z",
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
		"liquidityUsd": 1521751.71,
		"hash": "ec0e436bb06dc9b0ebf314e52c680f91fc94c88b0ff0c0eeaca886f847d458ab"
	},
	{
		"id": "4980368e00c4",
		"ts": "2026-08-18T02:18:25.007Z",
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
		"liquidityUsd": 452182.89,
		"hash": "4980368e00c40d7ae02956ca5ee76f65627c2077eb01317c47752c5ae42aae16"
	},
	{
		"id": "97dbfe2255aa",
		"ts": "2026-08-18T02:18:25.231Z",
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
		"liquidityUsd": 9772795.64,
		"hash": "97dbfe2255aad39a193cccaab63b507043203b08ab3997bc0eb9e47feb043ad3"
	},
	{
		"id": "c27232548759",
		"ts": "2026-08-18T02:18:25.537Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 90112.49,
		"hash": "c272325487597c604a121b5043190ca0d19c92e7c8b0e7b2bf371c441fcfdb3a"
	},
	{
		"id": "e7848ab4d20f",
		"ts": "2026-08-18T02:18:25.735Z",
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
		"liquidityUsd": 540374.26,
		"hash": "e7848ab4d20fc072fb8dcd78ddd352e32ae83652f49936825db03f0bb0be4623"
	},
	{
		"id": "c31b64558165",
		"ts": "2026-08-18T02:18:26.095Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 385281.1,
		"hash": "c31b64558165a9e654a8ccd7c50df69784dce9a6ee9614e43a9fa38301614cc7"
	},
	{
		"id": "7a481c852d1b",
		"ts": "2026-08-18T02:18:28.740Z",
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
		"liquidityUsd": 56193.22,
		"hash": "7a481c852d1b83cfcc024f6387166243c3f849fd218a9fda18fcdf66a006e792"
	},
	{
		"id": "7e59df6e313d",
		"ts": "2026-08-18T02:18:28.967Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 247372.94,
		"hash": "7e59df6e313de53ddddeeaf26e47f13e328f6325094d8aa23b600f1db25e2ead"
	},
	{
		"id": "631ad939c51d",
		"ts": "2026-08-18T02:18:29.182Z",
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
		"liquidityUsd": 36693.48,
		"hash": "631ad939c51d9730f8f74b6b7f862ac1fd1ef2a3946d980c9adf316a6889c383"
	},
	{
		"id": "81613ea1fa76",
		"ts": "2026-08-18T02:18:29.390Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3801551.51,
		"hash": "81613ea1fa76821f9e8a0cf38fe790c297914086d12a01e20fbcc0833279011e"
	},
	{
		"id": "e52726766c8e",
		"ts": "2026-08-18T02:18:29.608Z",
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
		"liquidityUsd": 74459.4,
		"hash": "e52726766c8e4ef0314a78e5080fa7f6323e3aa2dd8b82c1278fab37210974dd"
	},
	{
		"id": "2ce0498d494b",
		"ts": "2026-08-18T02:18:29.820Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1499268.09,
		"hash": "2ce0498d494b088d32ce9f0bbd117717f9986facc9ff277c55d6275a7e5d3e4d"
	},
	{
		"id": "6fcab719394c",
		"ts": "2026-08-18T02:18:30.038Z",
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
		"liquidityUsd": 81043.61,
		"hash": "6fcab719394c648695751639b4cc3adaa955ee6586be82448a1ad90ea6c98fa4"
	},
	{
		"id": "cf04698cf7fa",
		"ts": "2026-08-18T00:59:57.319Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112992979.2,
		"hash": "cf04698cf7face3c2245e5881771e45e79cd47874fddbd77130cadb2d11db0ab"
	},
	{
		"id": "7811041955c5",
		"ts": "2026-08-18T00:59:57.657Z",
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
		"liquidityUsd": 16777479.77,
		"hash": "7811041955c52ae32acb631ced63d5f2379a1ec3edcbec6ba5aa70988e7e271c"
	},
	{
		"id": "b20590116831",
		"ts": "2026-08-18T00:59:57.901Z",
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
		"liquidityUsd": 787177.4,
		"hash": "b20590116831cf2856487f11c8ddc63b888f88d930c32725c5c086a87603a635"
	},
	{
		"id": "5448ef3d156a",
		"ts": "2026-08-18T00:59:58.100Z",
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
		"liquidityUsd": 26924599.87,
		"hash": "5448ef3d156a7c0680f47649ba2d5b05d6a0d24cc868b06f2b316374cebe5dc7"
	},
	{
		"id": "2a82793a69e5",
		"ts": "2026-08-18T00:59:58.290Z",
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
		"liquidityUsd": 4259227.67,
		"hash": "2a82793a69e5f13396ec55895ef2f8c9fed2a96c0aee106e604c51c2312f412d"
	},
	{
		"id": "debc8229abf2",
		"ts": "2026-08-18T00:59:58.485Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889216.77,
		"hash": "debc8229abf289dd92e9f9832eff9c23cf6f5d7147ce5ce243936cf32ff3ac77"
	},
	{
		"id": "2438c96e901f",
		"ts": "2026-08-18T00:59:58.677Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3914736.96,
		"hash": "2438c96e901fa294bf2f7ef45cf4679330760913c83bac6718ef4896a4cc430d"
	},
	{
		"id": "98932e3434c3",
		"ts": "2026-08-18T00:59:58.885Z",
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
		"liquidityUsd": 1529126.95,
		"hash": "98932e3434c3187bea9131986601fdbddfd83b195cd8ddc967e3ed234349ebb8"
	},
	{
		"id": "f2d3377d8af0",
		"ts": "2026-08-18T00:59:59.097Z",
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
		"liquidityUsd": 504902.05,
		"hash": "f2d3377d8af041ef04d50e5f2112da55e09c16475ee7afe7af2bb7988ec39b33"
	},
	{
		"id": "edad376cb907",
		"ts": "2026-08-18T00:59:59.306Z",
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
		"liquidityUsd": 9854925,
		"hash": "edad376cb9074a2cf2a3be4318c6c1560b59fe9042624a5e57b8a12f210d7be7"
	},
	{
		"id": "ce857b27ea1c",
		"ts": "2026-08-18T00:59:59.499Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 91386.65,
		"hash": "ce857b27ea1c9334b97988e2e7da0eb70099147ef7dad9cfe57ca0ed0f35d9d8"
	},
	{
		"id": "33a7980d9e77",
		"ts": "2026-08-18T00:59:59.686Z",
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
		"liquidityUsd": 547220.25,
		"hash": "33a7980d9e7737bbbaee205d3e7a2d1be0ed70a7438df0d41a95ce03e43f18ae"
	},
	{
		"id": "3a39d81661cb",
		"ts": "2026-08-18T00:59:59.865Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 387527.84,
		"hash": "3a39d81661cb6bdd18696855d43899f15d4cbb1015a916c96857b516b1cc9767"
	},
	{
		"id": "ce53251c8e6f",
		"ts": "2026-08-18T01:00:00.070Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 67198.54,
		"hash": "ce53251c8e6fb8e126d1abb6a5a73c3c6ee8897d64b9014635a7f37c9e77ec5e"
	},
	{
		"id": "0ef454be6826",
		"ts": "2026-08-18T01:00:00.267Z",
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
		"liquidityUsd": 247016.23,
		"hash": "0ef454be6826341ecf84d5b44840d51330554e76f928dce69af67b46a01d1587"
	},
	{
		"id": "212973419af6",
		"ts": "2026-08-18T01:00:00.456Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 38489.56,
		"hash": "212973419af6620872e2428084d6e2f5071fffcc624d1aa525fce695852b8e00"
	},
	{
		"id": "077699b6df93",
		"ts": "2026-08-18T01:00:00.663Z",
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
		"liquidityUsd": 3902613.18,
		"hash": "077699b6df937e04225f93f035f676d39d8208bc8545e0be551765500604827c"
	},
	{
		"id": "0a3dac82529c",
		"ts": "2026-08-18T01:00:01.016Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 74955.84,
		"hash": "0a3dac82529c60973bda7562e7e125a6392f7279e68137d9972eece3597a88c0"
	},
	{
		"id": "2f160077803f",
		"ts": "2026-08-18T01:00:01.348Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1001890.73,
		"hash": "2f160077803f0827cda0aa23728c8085b06217970f969354395cb5c2c3feda17"
	},
	{
		"id": "e63a44ce2ebc",
		"ts": "2026-08-18T01:00:01.574Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1501785.61,
		"hash": "e63a44ce2ebc5161a1b3d6ea07d874ea387fa520721ba2cf98f64a4545277f1a"
	},
	{
		"id": "d5edeecc064e",
		"ts": "2026-08-17T23:18:45.554Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112858605.75,
		"hash": "d5edeecc064ed322837a37fce2ee3159766afc18d45d73ead3a549853e561143"
	},
	{
		"id": "ab9845b703ff",
		"ts": "2026-08-17T23:18:46.017Z",
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
		"liquidityUsd": 18032603.77,
		"hash": "ab9845b703ffa959df306a7294b727e7d8af3a0ae776d3404fb0ee1d3ffb715a"
	},
	{
		"id": "e1e6d6a3050b",
		"ts": "2026-08-17T23:18:46.274Z",
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
		"liquidityUsd": 786711.48,
		"hash": "e1e6d6a3050b1efd78a34403291124cb077b13ca54ffcd40980c22d2fb7b79e1"
	},
	{
		"id": "a20a224f5d68",
		"ts": "2026-08-17T23:18:46.533Z",
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
		"liquidityUsd": 26905265.06,
		"hash": "a20a224f5d684b3d8cd07a9e4808719a405d1ba880ee2538ae305405e3f51898"
	},
	{
		"id": "389786e48299",
		"ts": "2026-08-17T23:18:46.790Z",
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
		"liquidityUsd": 4249589.34,
		"hash": "389786e482998817c29fa5388f91fd77fc7b880b01288fe75a3ee00e909177dc"
	},
	{
		"id": "d5dbf9afb9fa",
		"ts": "2026-08-17T23:18:47.043Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 884166.1,
		"hash": "d5dbf9afb9fa600d60627404ffa9fea3c8bbd055c13ad332234a0d3d49279b62"
	},
	{
		"id": "1b46ff315067",
		"ts": "2026-08-17T23:18:47.291Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3846725.97,
		"hash": "1b46ff3150675190695f05876e9cc534e802d8f17ad90989bd5b001240367efb"
	},
	{
		"id": "4e4541515466",
		"ts": "2026-08-17T23:18:47.545Z",
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
		"liquidityUsd": 1279389.82,
		"hash": "4e4541515466d30ddd636aa04b9da44f057789e9b01f6dd06672e6af8f30d471"
	},
	{
		"id": "50d72412e468",
		"ts": "2026-08-17T23:18:47.800Z",
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
		"liquidityUsd": 535313.06,
		"hash": "50d72412e468e3922c0182ce018cddf217ee78095d0029f58004b4583a27064e"
	},
	{
		"id": "4a5bef422e1a",
		"ts": "2026-08-17T23:18:48.099Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 82,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.64,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 86515.28,
		"hash": "4a5bef422e1a581ead81b9c099c73cae855eb10d22998d513ac675d68fe8527d"
	},
	{
		"id": "bdcc83063e28",
		"ts": "2026-08-17T23:18:48.333Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 393086.61,
		"hash": "bdcc83063e28a2077a205b368e284a754c3945fa228013996619fd628f7922d8"
	},
	{
		"id": "435eac92f8fc",
		"ts": "2026-08-17T23:18:48.567Z",
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
		"liquidityUsd": 515814.03,
		"hash": "435eac92f8fc018e44497d4b5779eaaf604dfa72e278a1a3c06d8d520af49289"
	},
	{
		"id": "3ce2593f37af",
		"ts": "2026-08-17T23:18:48.800Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9865626.35,
		"hash": "3ce2593f37af9a8ab5cfb9add5e4fcb1a94501c804d4b5e57b27854ca808503a"
	},
	{
		"id": "5431ca40d510",
		"ts": "2026-08-17T23:18:49.036Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 62748.24,
		"hash": "5431ca40d51031f4c96a65b7702b094b1f98f1f5365751d744a1db83fe6eeec7"
	},
	{
		"id": "dd699fcd0647",
		"ts": "2026-08-17T23:18:49.269Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 247314.48,
		"hash": "dd699fcd06475eafb72a76626caa8a1f139851ef70d047ebdf509d12919e4269"
	},
	{
		"id": "321a60c2c586",
		"ts": "2026-08-17T23:18:49.505Z",
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
		"liquidityUsd": 43749.41,
		"hash": "321a60c2c586098571055569c4d3fcb7f78a0f4930c3d0c2af9f326b438e1e84"
	},
	{
		"id": "b2785c0a29bb",
		"ts": "2026-08-17T23:18:49.738Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1005164.55,
		"hash": "b2785c0a29bb316bd244cfc702a007f156815e24ef26824bed7dd341423ab9a8"
	},
	{
		"id": "718f3410465f",
		"ts": "2026-08-17T23:18:49.974Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3846725.97,
		"hash": "718f3410465f0a68a2e04be903c0766a99b7245e5db72c8a842a4c6b53405c6e"
	},
	{
		"id": "0f8bbb7c6bcb",
		"ts": "2026-08-17T23:18:50.209Z",
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
		"liquidityUsd": 2554597.67,
		"hash": "0f8bbb7c6bcbf60d975688941c945123e733943ce299fda6fbb889c81464d665"
	},
	{
		"id": "5818b3a5fbb7",
		"ts": "2026-08-17T23:18:50.443Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1464428.95,
		"hash": "5818b3a5fbb7883867f516bfee11b5d036bce970cda3b8b3935127ea3b69256e"
	},
	{
		"id": "5912616f7e8c",
		"ts": "2026-08-17T22:19:40.514Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112830772.81,
		"hash": "5912616f7e8cbedef626ef7668960f916f27c76d4e62fee1cc432ad283185db0"
	},
	{
		"id": "1b049910f372",
		"ts": "2026-08-17T22:19:40.857Z",
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
		"liquidityUsd": 18391615.25,
		"hash": "1b049910f3727147313ae7a89e4d7c83d8ec7ab6fe95ef1f3e86276cdc2b1747"
	},
	{
		"id": "d9f43023d731",
		"ts": "2026-08-17T22:19:41.054Z",
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
		"liquidityUsd": 786711.48,
		"hash": "d9f43023d731d99a1a9bdcf39905f5bc861b9566527e38d595ab53bdf99506c3"
	},
	{
		"id": "505c3fda84fa",
		"ts": "2026-08-17T22:19:41.261Z",
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
		"liquidityUsd": 26939022.66,
		"hash": "505c3fda84fa064f7570a3e1c128fef04eb062171c4c19a4a852ce9b156f8814"
	},
	{
		"id": "862de5538865",
		"ts": "2026-08-17T22:19:41.456Z",
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
		"liquidityUsd": 4250231.92,
		"hash": "862de5538865e57111874818ee5d40390f8e6914ddbe0c09ce2803e737866dca"
	},
	{
		"id": "51fae9e73d72",
		"ts": "2026-08-17T22:19:41.702Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 884166.1,
		"hash": "51fae9e73d729685ceeba51bc3266d84a584784285babadf1e101caad5e66707"
	},
	{
		"id": "b02fee79570e",
		"ts": "2026-08-17T22:19:41.895Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3971999.88,
		"hash": "b02fee79570ee97a698a636f24bdb699cde7b6a1b593f8a5e06ebe9859c3d390"
	},
	{
		"id": "81dfb5e7857c",
		"ts": "2026-08-17T22:19:42.082Z",
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
		"liquidityUsd": 1270304.21,
		"hash": "81dfb5e7857cfda8c5673ea6c552651af86fe26d2db6b8aec8976935c4de4464"
	},
	{
		"id": "5a4ba500e9cc",
		"ts": "2026-08-17T22:19:42.288Z",
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
		"liquidityUsd": 516036.56,
		"hash": "5a4ba500e9cc16323e2c827bb6146ed32c62133f468562fb35919bca1d2e406d"
	},
	{
		"id": "786af463136c",
		"ts": "2026-08-17T22:19:42.484Z",
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
		"liquidityUsd": 391522.38,
		"hash": "786af463136c28133e7de2df085672b7612fb0ab0bf0179b088ae580f0a9f4b1"
	},
	{
		"id": "d98f4a6ff22d",
		"ts": "2026-08-17T22:19:42.674Z",
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
		"liquidityUsd": 526065.21,
		"hash": "d98f4a6ff22d29aa568a6459376211a0732acc32f7546f9200304aa1ef0381b0"
	},
	{
		"id": "8ac50cf7c379",
		"ts": "2026-08-17T22:19:42.887Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 90846.99,
		"hash": "8ac50cf7c3793c9d584dc1cb857c6ebbc76e6c6b01576e340aa09f6573e05fef"
	},
	{
		"id": "d9a434eb3fcd",
		"ts": "2026-08-17T22:19:43.088Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10041636.86,
		"hash": "d9a434eb3fcd983c1237514c6111f7b0c9e1d77055b83bec473ab766b478f462"
	},
	{
		"id": "ee9dce0a385c",
		"ts": "2026-08-17T22:19:43.290Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 81681.6,
		"hash": "ee9dce0a385c674c841d05f7d23cccbee7b7fd918eacfb836a6ad41a7d155838"
	},
	{
		"id": "4aff28323d75",
		"ts": "2026-08-17T22:19:43.489Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 246354.14,
		"hash": "4aff28323d75680de7b63ee4b178f7aba5c50f9d38da28480e4a413852ea0093"
	},
	{
		"id": "bd2c7d4a43ea",
		"ts": "2026-08-17T22:19:43.803Z",
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
		"liquidityUsd": 42772.14,
		"hash": "bd2c7d4a43ea6cbdce49d965ac8535c187007d9851bc1dabd58544a0387b1d77"
	},
	{
		"id": "cd16aa60a8d5",
		"ts": "2026-08-17T22:19:44.013Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1001171.45,
		"hash": "cd16aa60a8d5959741e858f04e714a6dbea0f4fa57df1f52cd07f55eb9153df2"
	},
	{
		"id": "34540973b5eb",
		"ts": "2026-08-17T22:19:44.210Z",
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
		"liquidityUsd": 89233.78,
		"hash": "34540973b5eb845c97dadee83717c2c66a0b9417d464f1c6e10dcfefd121e162"
	},
	{
		"id": "2e65a11d58fb",
		"ts": "2026-08-17T22:19:44.414Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2535012.21,
		"hash": "2e65a11d58fb4d2af2171dd131e523344a71c13e0ced54b54d7776a3d538944e"
	},
	{
		"id": "e82043ccb01a",
		"ts": "2026-08-17T22:19:44.608Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3968642.51,
		"hash": "e82043ccb01a6ecc4c22526dccbd96553620be0de68207489cc7cf0921e0a0f2"
	},
	{
		"id": "c8fcc5a1123f",
		"ts": "2026-08-17T21:21:30.415Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112834115.05,
		"hash": "c8fcc5a1123fd7a3238029c3d8e814d84ce8d802f783befa94ed85e7b39c4101"
	},
	{
		"id": "bf7bd28c2827",
		"ts": "2026-08-17T21:21:30.873Z",
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
		"liquidityUsd": 18415216.02,
		"hash": "bf7bd28c28271a74418f43b45de021ddcd34cf39e6dcc9a6d6283f4ddbcaba99"
	},
	{
		"id": "032e30ebfe4d",
		"ts": "2026-08-17T21:21:31.107Z",
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
		"liquidityUsd": 786363.69,
		"hash": "032e30ebfe4d4fe5db9c5f6c0ca071f3a41a826cb737e26ac2bbab8e09bbc6d2"
	},
	{
		"id": "e8da5c629746",
		"ts": "2026-08-17T21:21:31.384Z",
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
		"liquidityUsd": 26958407.12,
		"hash": "e8da5c62974616e415817b9c4f9aeb9457b146ef5c9044eeb974456401f4a79c"
	},
	{
		"id": "38dd8e6c8385",
		"ts": "2026-08-17T21:21:31.642Z",
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
		"liquidityUsd": 4257200.77,
		"hash": "38dd8e6c83858cf6f4717c68bbb1576e74b5af1a2f269bc6a505f2782ef985d0"
	},
	{
		"id": "c30da9d56533",
		"ts": "2026-08-17T21:21:31.874Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889564.2,
		"hash": "c30da9d565332ab3e51a930d40d135de0fdf1793ccace4ee0673f9b4efeed89d"
	},
	{
		"id": "5b10e073632d",
		"ts": "2026-08-17T21:21:32.120Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3997868.45,
		"hash": "5b10e073632d0af14682bc3c6f1b0d3204a0845f7fa36df417f8cd0640e5f34e"
	},
	{
		"id": "884dcc074dd3",
		"ts": "2026-08-17T21:21:32.366Z",
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
		"liquidityUsd": 1261692.87,
		"hash": "884dcc074dd32efe72db7352e9da9ee3b8e9b3c540d63a1e6aa3d8aea5016b7a"
	},
	{
		"id": "af66784a4952",
		"ts": "2026-08-17T21:21:32.802Z",
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
		"liquidityUsd": 499677.92,
		"hash": "af66784a49521d887b1814fe4270286d586b7bd164efdd5702a2ad7e91b9347c"
	},
	{
		"id": "143a95f18d16",
		"ts": "2026-08-17T21:21:33.048Z",
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
		"liquidityUsd": 527833.39,
		"hash": "143a95f18d16e6f4c9efe2ea030ecf69d77393715c4fae37598e9c44ee86e739"
	},
	{
		"id": "a1503965e006",
		"ts": "2026-08-17T21:21:33.278Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 95640.7,
		"hash": "a1503965e0065472160a3f28ce4bde0b0ca6aefe0174f36ab2a9562a0da1a16f"
	},
	{
		"id": "d6da32c74cef",
		"ts": "2026-08-17T21:21:33.499Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 389751.09,
		"hash": "d6da32c74cefffada8fdef6e92464e02c8ef6686072d98fe44f7513f9114834a"
	},
	{
		"id": "aa278cfc8c9e",
		"ts": "2026-08-17T21:21:33.726Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9994797.15,
		"hash": "aa278cfc8c9e91624f1555aff69a946ddc83a256b45dfdb10b07de4d7d5b174b"
	},
	{
		"id": "c8d42638eacf",
		"ts": "2026-08-17T21:21:33.954Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 245999.68,
		"hash": "c8d42638eacf0e46ad29542b957999782dea26a9dd2c6190e71c98f2b9c93805"
	},
	{
		"id": "4897104778b4",
		"ts": "2026-08-17T21:21:34.173Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 94396.62,
		"hash": "4897104778b4e0adf8f26c01bb3426df133c81329c1345f0d0ad57bea9b0b4d9"
	},
	{
		"id": "412c814f16be",
		"ts": "2026-08-17T21:21:34.400Z",
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
		"liquidityUsd": 44769.52,
		"hash": "412c814f16bee94a4397001a61f7be0695f45dd4ac2fec28087f4fedcc93c8fa"
	},
	{
		"id": "48fa5918d373",
		"ts": "2026-08-17T21:21:34.629Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1008668.72,
		"hash": "48fa5918d37329cdfe3c11ad5df11ebaed04ef65b48ea25d4ad18e923c762b9a"
	},
	{
		"id": "60f4115778fd",
		"ts": "2026-08-17T21:21:34.849Z",
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
		"liquidityUsd": 80363.85,
		"hash": "60f4115778fd0653ee467b906365d6967981559249d8127f411292eb1cb330c8"
	},
	{
		"id": "2f6390de2ca7",
		"ts": "2026-08-17T21:21:35.078Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2533130.6,
		"hash": "2f6390de2ca7a77691784e60cb3ee5bcadb183cb87fa3830817bde594ee6596d"
	},
	{
		"id": "4e5248fa2b18",
		"ts": "2026-08-17T21:21:35.307Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3997868.45,
		"hash": "4e5248fa2b18ec7e6365575642705ce0e29b2d491a212a6493ebc6b3b44114a6"
	},
	{
		"id": "5c56d773f15e",
		"ts": "2026-08-17T20:21:31.926Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112869476.04,
		"hash": "5c56d773f15e397cb0584b97a99e1d4437e075baa0a59e0bee33c2acae23b5b8"
	},
	{
		"id": "b22f65dd5f82",
		"ts": "2026-08-17T20:21:32.266Z",
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
		"liquidityUsd": 17657062.98,
		"hash": "b22f65dd5f82c320145ffb17bc81c4eb21a625c09db48c7c1aec86cd69664ecc"
	},
	{
		"id": "0bd81a8f337c",
		"ts": "2026-08-17T20:21:32.595Z",
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
		"liquidityUsd": 786363.69,
		"hash": "0bd81a8f337c8ca4d8d5e000a9c292fd33791182cd73abe2631d0f0671eb9ed5"
	},
	{
		"id": "cfed117aebd0",
		"ts": "2026-08-17T20:21:32.797Z",
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
		"liquidityUsd": 26938467.87,
		"hash": "cfed117aebd09a694d161baa93776ec2961cec222cdfaac160f499fcb6810b43"
	},
	{
		"id": "3aecde9b016b",
		"ts": "2026-08-17T20:21:33.006Z",
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
		"liquidityUsd": 4257684.34,
		"hash": "3aecde9b016b41564655eee346537f90bca1ae7a3ab8cda4a2895b39051d2ca3"
	},
	{
		"id": "c7f7b2b3b11b",
		"ts": "2026-08-17T20:21:33.197Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889564.2,
		"hash": "c7f7b2b3b11b551007c17d7602b6987ff9f8ee6570346650fb2432d5eba5242b"
	},
	{
		"id": "bd598da3141c",
		"ts": "2026-08-17T20:21:33.395Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3966827.78,
		"hash": "bd598da3141c8affb6666cc28508e359387d9ac3e9318365e03472d55eb19af7"
	},
	{
		"id": "eeac53e76fe0",
		"ts": "2026-08-17T20:21:33.595Z",
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
		"liquidityUsd": 1208459.78,
		"hash": "eeac53e76fe00058da75afe90fb3e5a8be3a71069cce1fc586ee6c475dc116bc"
	},
	{
		"id": "8f184de9dd41",
		"ts": "2026-08-17T20:21:33.927Z",
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
		"liquidityUsd": 486905.62,
		"hash": "8f184de9dd41ffbc6b08353b0f5ba3d9c5fac8d467db0bc72adfcc5a0f63f63f"
	},
	{
		"id": "726e45cbd950",
		"ts": "2026-08-17T20:21:34.116Z",
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
		"liquidityUsd": 402177.65,
		"hash": "726e45cbd950786c9221a5c5ff5f469dc497bd3ca1bf05e2c94ba2f01802f613"
	},
	{
		"id": "adeedaf486bc",
		"ts": "2026-08-17T20:21:34.311Z",
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
		"liquidityUsd": 526995.63,
		"hash": "adeedaf486bcf1806e2e6fab27728082a5ca97cbcafdf5c59f23787940118f08"
	},
	{
		"id": "48dc1bdc1eec",
		"ts": "2026-08-17T20:21:34.510Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 97548.24,
		"hash": "48dc1bdc1eec6353419148f60ea4849edf3ddd691ff8ada975c1a1b154a2c885"
	},
	{
		"id": "d47d2178a837",
		"ts": "2026-08-17T20:21:34.706Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9823839.57,
		"hash": "d47d2178a837d6d64143a1a4eb3ae043727df43c090254306e2647ed7f5ac916"
	},
	{
		"id": "c197be635a63",
		"ts": "2026-08-17T20:21:34.899Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 244710.07,
		"hash": "c197be635a63e80110039a5b0f471dd77f29c077370b8cb24d4f7915bccd53b9"
	},
	{
		"id": "7692061a2774",
		"ts": "2026-08-17T20:21:35.089Z",
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
		"liquidityUsd": 43802.85,
		"hash": "7692061a27742722a615163b5e33da12268277da01eebc20130d645cfc4ae064"
	},
	{
		"id": "3cf04d31f98f",
		"ts": "2026-08-17T20:21:35.287Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 77310.05,
		"hash": "3cf04d31f98fd1d4adf6f61217f36fa00f0d1fc141063468dc99e10eee860a49"
	},
	{
		"id": "d2a7681fbd57",
		"ts": "2026-08-17T20:21:35.487Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1009647.21,
		"hash": "d2a7681fbd57cc659b5271a5b1e5fd4bcea550d4d80212fdb3ef5a7bf4ee1d03"
	},
	{
		"id": "af28393c468b",
		"ts": "2026-08-17T20:21:35.685Z",
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
		"liquidityUsd": 93779.25,
		"hash": "af28393c468b8381bda16aef487dfe78ef83dc74c24df5d7e2ec1a453c464cb2"
	},
	{
		"id": "823e8a2cb7e0",
		"ts": "2026-08-17T20:21:35.881Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2533389.69,
		"hash": "823e8a2cb7e0c67622f14b69203b077c77357ee0246741780b365c0883c048f4"
	},
	{
		"id": "19890326c2ef",
		"ts": "2026-08-17T20:21:36.081Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3970051.88,
		"hash": "19890326c2ef7b0c125f431107ecc3b5df4e911b3709cca15b58c37bccdc2c1d"
	},
	{
		"id": "cbce9db83d1a",
		"ts": "2026-08-17T19:24:14.625Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112842831.38,
		"hash": "cbce9db83d1a91f57b6e9bb1ac621ba84dd647d80d02fd6aa7e02b8ed1b881ec"
	},
	{
		"id": "7ba4e99857fc",
		"ts": "2026-08-17T19:24:14.881Z",
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
		"liquidityUsd": 17915085.55,
		"hash": "7ba4e99857fc276827cb6205b69e5a74cec987fd74bed77f040946fcaa11719e"
	},
	{
		"id": "dc7d72efe0f8",
		"ts": "2026-08-17T19:24:15.252Z",
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
		"liquidityUsd": 786363.69,
		"hash": "dc7d72efe0f841da727c68c36b0db944d66e976dcafd511735db20d01a48aac2"
	},
	{
		"id": "b427aa4bfc70",
		"ts": "2026-08-17T19:24:15.461Z",
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
		"liquidityUsd": 26992639.01,
		"hash": "b427aa4bfc7043897ee9fc7b659684724fb369ad637f27e54b2bc0754c429937"
	},
	{
		"id": "97344650e0b6",
		"ts": "2026-08-17T19:24:15.666Z",
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
		"liquidityUsd": 4259531.73,
		"hash": "97344650e0b65a3d60ea7151d44c9a27a451c5d864b108f7c6c832476e064917"
	},
	{
		"id": "3a094a5123c4",
		"ts": "2026-08-17T19:24:15.884Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889564.2,
		"hash": "3a094a5123c44abb11146560496f4a5a68b876c9951f7d5cc079a77c3b747484"
	},
	{
		"id": "f86985551528",
		"ts": "2026-08-17T19:24:16.100Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4043456.2,
		"hash": "f869855515283a8966c7631883c0a290a8ec89610093e37b633fb733019878c8"
	},
	{
		"id": "6fde990d0462",
		"ts": "2026-08-17T19:24:16.309Z",
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
		"liquidityUsd": 1209134.63,
		"hash": "6fde990d04622c3936286392f0dd9e24f7f533a194eec1dc01ff768936555cfc"
	},
	{
		"id": "a9dedfd8c441",
		"ts": "2026-08-17T19:24:16.510Z",
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
		"liquidityUsd": 498086.76,
		"hash": "a9dedfd8c441671f26b5c7012836f20062d5b4686e7ab3e955462d9a85e67656"
	},
	{
		"id": "8fafd74aaa66",
		"ts": "2026-08-17T19:24:16.718Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 82,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.64,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118033.89,
		"hash": "8fafd74aaa663c2a671acde655665fe21e15d566c5c06dd4b7d01fc0a9901507"
	},
	{
		"id": "b980c9b188bf",
		"ts": "2026-08-17T19:24:16.941Z",
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
		"liquidityUsd": 526823.89,
		"hash": "b980c9b188bf2488a8b85f3ea05a3f00c4645a1f78018f7095242d71e93d829a"
	},
	{
		"id": "6e015303d6f4",
		"ts": "2026-08-17T19:24:17.131Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 415646.16,
		"hash": "6e015303d6f4cf19cb569161ebff9b065a818086431da1890825eca499188d1c"
	},
	{
		"id": "6881b2a10787",
		"ts": "2026-08-17T19:24:17.339Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9780468.94,
		"hash": "6881b2a10787d644e4feef539d63d33a9943df563c68057f724df1d6a06d71bc"
	},
	{
		"id": "f95f83d6c793",
		"ts": "2026-08-17T19:24:17.540Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 242294.07,
		"hash": "f95f83d6c79385ab9732c63e10776542f49b2684045a4e257959590635720007"
	},
	{
		"id": "7208c8ec8388",
		"ts": "2026-08-17T19:24:17.878Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1007938.3,
		"hash": "7208c8ec83883a867ab8c5daffd9ada95aa2345cbbf23d89108a8b551e945c1e"
	},
	{
		"id": "523d0a5fea6f",
		"ts": "2026-08-17T19:24:18.067Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 86038.58,
		"hash": "523d0a5fea6fc531a982f36cf789c27c4a97fba17677e74ec32ee01e3caa2858"
	},
	{
		"id": "b628675d513b",
		"ts": "2026-08-17T19:24:18.261Z",
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
		"liquidityUsd": 67769.42,
		"hash": "b628675d513b71e0c3dc8da2557b76ce4fa39d4e61596909c504d727fc123398"
	},
	{
		"id": "92eed6ad57f0",
		"ts": "2026-08-17T19:24:18.468Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2539393.99,
		"hash": "92eed6ad57f04b703d24ef43f7a4aa43494005a1184998ac0570ff94f1c609a2"
	},
	{
		"id": "53506ea6c8c3",
		"ts": "2026-08-17T19:24:18.658Z",
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
		"liquidityUsd": 39678.83,
		"hash": "53506ea6c8c3d7e37af1d5d4ede85e3dde166d062b11822e6c2dbdfa63fe5889"
	},
	{
		"id": "796ce071e939",
		"ts": "2026-08-17T19:24:18.855Z",
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
		"liquidityUsd": 587327.59,
		"hash": "796ce071e9399dc5ce1a4f069d99840e867b3f27368cd4fe81f1b0abdc4b8110"
	},
	{
		"id": "fc5b7db7d660",
		"ts": "2026-08-17T18:32:25.427Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112875116.05,
		"hash": "fc5b7db7d660820d1f3e7332e5103320d4119370415df9ce95d86fa7d26f5f78"
	},
	{
		"id": "b0f2afbf9268",
		"ts": "2026-08-17T18:32:25.666Z",
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
		"liquidityUsd": 13274050.85,
		"hash": "b0f2afbf9268d0d0c98f5f477c0ceada7009c497a8123cb95614d131c86b4342"
	},
	{
		"id": "b2154cd42dde",
		"ts": "2026-08-17T18:32:25.899Z",
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
		"liquidityUsd": 786363.69,
		"hash": "b2154cd42dde10988ee0cbdca7c434e0969e920038b340bfe72bb50ddcacdee8"
	}
]
