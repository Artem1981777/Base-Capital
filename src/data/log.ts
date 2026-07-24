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
	"updatedAt": "2026-07-24T19:19:19.750Z",
	"tokensScored": 5337,
	"verdictsIssued": 5337,
	"safe": 4664,
	"risky": 428,
	"likelyRug": 245,
	"ticks": 325
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "bb7b15d289ff",
		"ts": "2026-07-24T19:19:15.505Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109682414.45,
		"hash": "bb7b15d289ffee087f3ef193c5571474774633798c135bc900b083a6ef4d08fa"
	},
	{
		"id": "4801db09be06",
		"ts": "2026-07-24T19:19:15.764Z",
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
		"liquidityUsd": 15318341.85,
		"hash": "4801db09be06b290d8916ed205f312d17423adc350fe8861f8c98ccd10eb3d1e"
	},
	{
		"id": "e940755ceb1a",
		"ts": "2026-07-24T19:19:16.229Z",
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
		"liquidityUsd": 825453.15,
		"hash": "e940755ceb1afe50c267ab4816a104ae690314818c9448d1e41f401982cd8b8f"
	},
	{
		"id": "cd3e4feb0b64",
		"ts": "2026-07-24T19:19:16.601Z",
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
		"liquidityUsd": 25422964.94,
		"hash": "cd3e4feb0b64de2d1462ed96344c21448944146bc3654ced7a0f36e0c372d3ef"
	},
	{
		"id": "8a51e306c122",
		"ts": "2026-07-24T19:19:17.097Z",
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
		"liquidityUsd": 4980762.02,
		"hash": "8a51e306c12210f8579bac61cf6275f6111ab71b18080d500a66250c280cee54"
	},
	{
		"id": "6fb936477411",
		"ts": "2026-07-24T19:19:17.345Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 934065.66,
		"hash": "6fb9364774112a5647b89808f6b9c052b5196105462893e5a57a71ac535bd28e"
	},
	{
		"id": "8bc8329ef9f5",
		"ts": "2026-07-24T19:19:17.580Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25422964.94,
		"hash": "8bc8329ef9f57af6b87e17175db4cf7caeb511916f9a38cef827e36c4f257c08"
	},
	{
		"id": "242f872b94fb",
		"ts": "2026-07-24T19:19:17.868Z",
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
		"liquidityUsd": 2359763.23,
		"hash": "242f872b94fbf99b26b67c263bd9d60c53e6f5c0034a544bfba6aef869d47ed4"
	},
	{
		"id": "562bd84e08e1",
		"ts": "2026-07-24T19:19:18.113Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3036083.89,
		"hash": "562bd84e08e13dc02f7a05ce12ae620e875bf7ed765b7f552acc926a1e9d8483"
	},
	{
		"id": "1269ee48183f",
		"ts": "2026-07-24T19:19:18.358Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 308450.12,
		"hash": "1269ee48183f8e81fed9318502da3d07d0917c09fe37f15d7e577fdb91f81104"
	},
	{
		"id": "081c5f102196",
		"ts": "2026-07-24T19:19:18.592Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 716265.41,
		"hash": "081c5f1021962160d75c999fb7bd5a917dc664789b8ad708f1c0e8a2e942dd97"
	},
	{
		"id": "a7344bd5cb1c",
		"ts": "2026-07-24T19:19:18.818Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 84738.8,
		"hash": "a7344bd5cb1c64e7d1a1bb8c60c06a170d843870c3a061c63c04d3d91c3b6334"
	},
	{
		"id": "18b47f0445b6",
		"ts": "2026-07-24T19:19:19.039Z",
		"symbol": "VBEEF",
		"token": "0x10d991B3F8f04d552597d95de80d86Fc29a77b07",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 75200.92,
		"hash": "18b47f0445b6f842b3389a4d8dac7813de8eae693b308dc33f1b15d92049d63e"
	},
	{
		"id": "037863d3efca",
		"ts": "2026-07-24T19:19:19.302Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1832478.76,
		"hash": "037863d3efcaaf6312cc25403ad0fc439efcda12ea4057beb8582f11aaa98ceb"
	},
	{
		"id": "5aac04f5dd19",
		"ts": "2026-07-24T19:19:19.528Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1184208.78,
		"hash": "5aac04f5dd19edb21dc411fab28e2e3649e3aa7328070bdd63dedab505821a6e"
	},
	{
		"id": "8e1dc651b014",
		"ts": "2026-07-24T19:19:19.750Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4648289.25,
		"hash": "8e1dc651b0140ac40fae030db84c0518bd743a36e3cd645598964302d795f905"
	},
	{
		"id": "39af1b8587e6",
		"ts": "2026-07-24T17:26:19.781Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109544965.33,
		"hash": "39af1b8587e654e8d93c5fa69cdff83d8f0d8b4e341255a4c29770602046bae1"
	},
	{
		"id": "4fbab5f75059",
		"ts": "2026-07-24T17:26:20.132Z",
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
		"liquidityUsd": 16940574.77,
		"hash": "4fbab5f750591ece02891c740ba2005def455d1b4f980e43ae8a6d9beda2c0fe"
	},
	{
		"id": "31aa41bb263d",
		"ts": "2026-07-24T17:26:20.343Z",
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
		"liquidityUsd": 827514.3,
		"hash": "31aa41bb263d14ad33b5f967da0c8a3a02df3c1528dce87cf8bcad5e54194c64"
	},
	{
		"id": "b9b467d6d468",
		"ts": "2026-07-24T17:26:20.542Z",
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
		"liquidityUsd": 25495937.95,
		"hash": "b9b467d6d4687a395ecffceb45934ce89bbc609f87dd53af585137d080395923"
	},
	{
		"id": "fd68ebf3565d",
		"ts": "2026-07-24T17:26:20.746Z",
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
		"liquidityUsd": 4980762.02,
		"hash": "fd68ebf3565d256fb9e76fbbdaed033ac8c0f6641877689e1eb9ebe0da7a2bf0"
	},
	{
		"id": "8e0e7b5d9716",
		"ts": "2026-07-24T17:26:20.950Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 929737.69,
		"hash": "8e0e7b5d971601b0a2ecff177a6c6e20926e1cc88d1b2e580e2c923916d599aa"
	},
	{
		"id": "f0aa629d609c",
		"ts": "2026-07-24T17:26:21.202Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25495937.95,
		"hash": "f0aa629d609cc9445afe5f432f677553a4dd756dfc078b9aca696ed2c1fc0382"
	},
	{
		"id": "68c9f2048ab3",
		"ts": "2026-07-24T17:26:21.430Z",
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
		"liquidityUsd": 2362942.39,
		"hash": "68c9f2048ab319e83575a9b3cf187e0e635122e1d79147daa508cfe36106dafa"
	},
	{
		"id": "2c925987cd85",
		"ts": "2026-07-24T17:26:21.649Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3116410.75,
		"hash": "2c925987cd85b52fd153ea1951f5e82f2f721526fdc3142c77dd994403545c3c"
	},
	{
		"id": "1532c65e4cd1",
		"ts": "2026-07-24T17:26:21.860Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 305662.76,
		"hash": "1532c65e4cd1a0b0411998bc4ae92257e772806b37d96a6dc469d4486dfc22a6"
	},
	{
		"id": "2bab3c79b70b",
		"ts": "2026-07-24T17:26:22.088Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 730933.3,
		"hash": "2bab3c79b70b5594918629c380f9806d152e8c63f08742e051581527d26a3910"
	},
	{
		"id": "da9e3c06ed84",
		"ts": "2026-07-24T17:26:22.278Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 82345.55,
		"hash": "da9e3c06ed84d9f8249a5ca01a89c0a3d8dc21319f0aff3f4ca36b9bb489abfa"
	},
	{
		"id": "d49826c46456",
		"ts": "2026-07-24T17:26:22.463Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1842423.69,
		"hash": "d49826c4645600292aee9a02e9db4b94b4757b91444c6c46fe20e44cbda77090"
	},
	{
		"id": "6bb2a166ca78",
		"ts": "2026-07-24T17:26:22.637Z",
		"symbol": "VBEEF",
		"token": "0x10d991B3F8f04d552597d95de80d86Fc29a77b07",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 77554.5,
		"hash": "6bb2a166ca783295b3438ca74c88da3ea160a3dcfab0bd3b4506b848b389f089"
	},
	{
		"id": "9b34afaee2b6",
		"ts": "2026-07-24T17:26:22.816Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9688348.02,
		"hash": "9b34afaee2b65e8a365d4f5636235f11b4d3fb6cb3f69ab49e0af7219e8f28e8"
	},
	{
		"id": "f38eb8c8de91",
		"ts": "2026-07-24T17:26:23.008Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1190582.74,
		"hash": "f38eb8c8de9161852d853edbdf145a048838f496a6b979a75e1589dea063d279"
	},
	{
		"id": "c8cd62f758c8",
		"ts": "2026-07-24T15:22:29.900Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109402883.47,
		"hash": "c8cd62f758c8efff1cbbf90b9fd7463791b01e416b9927738d9060d653001ac8"
	},
	{
		"id": "4ff58185040d",
		"ts": "2026-07-24T15:22:30.350Z",
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
		"liquidityUsd": 16330856.47,
		"hash": "4ff58185040de6c627c31965e976550d6d57c43ffbce39d8241904d7741800e3"
	},
	{
		"id": "6fa498f98e66",
		"ts": "2026-07-24T15:22:30.807Z",
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
		"liquidityUsd": 820829.7,
		"hash": "6fa498f98e66a1a8c3a3d51a3feb4409d8b0a5dc554d2f566c6bd86676075ed8"
	},
	{
		"id": "a4375ea2d1fb",
		"ts": "2026-07-24T15:22:31.280Z",
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
		"liquidityUsd": 25459406.4,
		"hash": "a4375ea2d1fb13c04f829452dcb038daba32407d2d15b2deca53cbdf2d0fe8b7"
	},
	{
		"id": "788af1c78b22",
		"ts": "2026-07-24T15:22:31.522Z",
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
		"liquidityUsd": 4946170.62,
		"hash": "788af1c78b224f59c7a2412ceca723a4e1552d8dabfb60684e35678ebdbc6632"
	},
	{
		"id": "f1a56c485305",
		"ts": "2026-07-24T15:22:31.768Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 927629.5,
		"hash": "f1a56c4853050d4a2c3c2808e80c0fd76277655ed3a1f774bead7262513aa681"
	},
	{
		"id": "3d182cdfcf66",
		"ts": "2026-07-24T15:22:32.016Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25459406.4,
		"hash": "3d182cdfcf6615eac9ce76fab10e3ce720e8886ca931a244e505d69ac3b50fb8"
	},
	{
		"id": "179c6d976af9",
		"ts": "2026-07-24T15:22:32.261Z",
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
		"liquidityUsd": 2363349.97,
		"hash": "179c6d976af9bf518ce8ac5adb1506952af409d94b8f60258c63f6cb205a1bb1"
	},
	{
		"id": "dc7b8522221a",
		"ts": "2026-07-24T15:22:32.511Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3116068.29,
		"hash": "dc7b8522221a4371dd4b005e87374b823900f4dcb14af0eaa28de714168810d9"
	},
	{
		"id": "570e071dd277",
		"ts": "2026-07-24T15:22:32.767Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 308816.42,
		"hash": "570e071dd27745025595ddd08ba822d3ccacb9da6a15642ecbe844398527ec3d"
	},
	{
		"id": "e781042be9c9",
		"ts": "2026-07-24T15:22:32.991Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 82365.24,
		"hash": "e781042be9c9dd421f9103eb2e2220bd0e74e6f47574e6209375efdaf08f805b"
	},
	{
		"id": "e5cc741feb0f",
		"ts": "2026-07-24T15:22:33.222Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 750588.81,
		"hash": "e5cc741feb0fdb0234941a26b45a121ad592d15c70c1bdb88e2322bf9399f21e"
	},
	{
		"id": "73ab40f821af",
		"ts": "2026-07-24T15:22:33.464Z",
		"symbol": "MOLT",
		"token": "0xB695559b26BB2c9703ef1935c37AeaE9526bab07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 996214.5,
		"hash": "73ab40f821af10b83ee2d5a762b49338663171247373d1748068dc299723f187"
	},
	{
		"id": "0524b6ee1781",
		"ts": "2026-07-24T15:22:33.691Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1857449.61,
		"hash": "0524b6ee1781390bf27cd9252193296b3c35cc9750ba1f360be6acab45f28118"
	},
	{
		"id": "aa1efdd77d15",
		"ts": "2026-07-24T15:22:33.923Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1967191.32,
		"hash": "aa1efdd77d15e4d38c8a6014910645abce1a61913104d1484e1c44f82b2a308b"
	},
	{
		"id": "6596a2458065",
		"ts": "2026-07-24T15:22:34.160Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 79373.8,
		"hash": "6596a24580659a658775c1e4e39b56607e18b4a3f9d1300dd4871bc01d1ddf2b"
	},
	{
		"id": "db0007e1e4b0",
		"ts": "2026-07-24T13:28:36.114Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109549864.01,
		"hash": "db0007e1e4b0ebe6d9163e9073f45c5fc0570809400537b5ebb5e12f81ac1396"
	},
	{
		"id": "53573ed577a8",
		"ts": "2026-07-24T13:28:36.555Z",
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
		"liquidityUsd": 16244388.42,
		"hash": "53573ed577a8a96b447b2266f5ac5560c3a395dcea1dd129ce11d447ab0fef1c"
	},
	{
		"id": "58fd7ced56d7",
		"ts": "2026-07-24T13:28:37.027Z",
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
		"liquidityUsd": 811757.74,
		"hash": "58fd7ced56d76588c6bfd1cae411a6ba51459c531131d9bc8ba996fea3160d58"
	},
	{
		"id": "50c1af24eefa",
		"ts": "2026-07-24T13:28:37.293Z",
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
		"liquidityUsd": 25631379.6,
		"hash": "50c1af24eefa0a5f74d1b283daaf7e388fbd84f08e5fbcb09012498db4150912"
	},
	{
		"id": "fcaed00faaba",
		"ts": "2026-07-24T13:28:37.535Z",
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
		"liquidityUsd": 5013131.3,
		"hash": "fcaed00faabae3bda7d60da35503966341b5990d0e236e2ddb3922983eec3d52"
	},
	{
		"id": "7b0c6c3059ed",
		"ts": "2026-07-24T13:28:37.784Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 937723.03,
		"hash": "7b0c6c3059ed576eb1a27e3f007f86721073575bd9c5f2e1a6866ce1a4004db1"
	},
	{
		"id": "b381de756ef0",
		"ts": "2026-07-24T13:28:38.023Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3195099.5,
		"hash": "b381de756ef0a852b2daebeb386df05ac336c169d32348837295b175aa47ad70"
	},
	{
		"id": "586c8d4db4b9",
		"ts": "2026-07-24T13:28:38.280Z",
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
		"liquidityUsd": 2443470.54,
		"hash": "586c8d4db4b939d115a4c7b4a26c3ff5af2ca2e744d12dd6ccf325a31807a656"
	},
	{
		"id": "ba020982b0cf",
		"ts": "2026-07-24T13:28:38.525Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3195099.5,
		"hash": "ba020982b0cf26221651d1085700258c8dfebe4327f1b22da098058664b979a5"
	},
	{
		"id": "d6fd22cd67b9",
		"ts": "2026-07-24T13:28:38.762Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 312072.07,
		"hash": "d6fd22cd67b9fbd7369f068f8000728f799b615718df116e0c33ec7806a4c223"
	},
	{
		"id": "e65ca7e88672",
		"ts": "2026-07-24T13:28:38.984Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 87245.77,
		"hash": "e65ca7e88672fb14ca64b574fa4c3ed09b3eb803471e4ba53f38e368889c9d39"
	},
	{
		"id": "0efbc7ec5ccf",
		"ts": "2026-07-24T13:28:39.234Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 756268.79,
		"hash": "0efbc7ec5ccfbbee7730488a72d0fe0162d00b5473752bb92b24cb8ec13d5b7b"
	},
	{
		"id": "ad238111c7b1",
		"ts": "2026-07-24T13:28:39.460Z",
		"symbol": "MOLT",
		"token": "0xB695559b26BB2c9703ef1935c37AeaE9526bab07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1004604.41,
		"hash": "ad238111c7b15f8b46de1480b047a39a47fef6cfd9b9e24fdaaa83007dff4df1"
	},
	{
		"id": "5a12316216b8",
		"ts": "2026-07-24T13:28:39.680Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1863346.55,
		"hash": "5a12316216b8b3abd4158e3e54fe53bbb50f0ac7cdbe17fe66c85251c1363d61"
	},
	{
		"id": "1d9a2c56326b",
		"ts": "2026-07-24T13:28:39.902Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4750492.3,
		"hash": "1d9a2c56326b6ac75438db1721e0d9d4f3c99777f97bcd05205a38f38a6931e2"
	},
	{
		"id": "6aabf539b7f9",
		"ts": "2026-07-24T13:28:40.122Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1951506.57,
		"hash": "6aabf539b7f993d72904d7b1e47bb8ba388a4321001ce64d08ee02bdee7059f0"
	},
	{
		"id": "4b238a0d78f0",
		"ts": "2026-07-24T11:02:08.887Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110123245.82,
		"hash": "4b238a0d78f04329a66692e6f370c3608d6a98776df55c8ab0bcef2e4678d345"
	},
	{
		"id": "7cad8dcb74bf",
		"ts": "2026-07-24T11:02:09.087Z",
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
		"liquidityUsd": 17183253.07,
		"hash": "7cad8dcb74bf39472c2ce1f6c079b15a9ce6ed25be9f3fda0f50e85c2609cee7"
	},
	{
		"id": "b941e56e7063",
		"ts": "2026-07-24T11:02:09.283Z",
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
		"liquidityUsd": 820081.82,
		"hash": "b941e56e7063fe1724de41234db92f17db0c35dde34f8cf13d17326b88a4b32e"
	},
	{
		"id": "0550b3b059ce",
		"ts": "2026-07-24T11:02:09.470Z",
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
		"liquidityUsd": 25783999.31,
		"hash": "0550b3b059ce9b4499130fb834ba9e59e89e0bd99bc98279f7e2f6acdaca9ff2"
	},
	{
		"id": "57870bb6b75f",
		"ts": "2026-07-24T11:02:09.669Z",
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
		"liquidityUsd": 5074980.81,
		"hash": "57870bb6b75f5865eecaac9bbccedc1ccfd52dd04e7f08522d059589c7612624"
	},
	{
		"id": "ed5f39f1d833",
		"ts": "2026-07-24T11:02:09.866Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 940514.37,
		"hash": "ed5f39f1d83376f7c943568ce5f4c43353119c4cf64b2775ed4839faa3a690bd"
	},
	{
		"id": "5abbc771631b",
		"ts": "2026-07-24T11:02:10.052Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3233274.54,
		"hash": "5abbc771631b1062d74c9c1a096df8413c67b121866e6c0b0e8128c5e1dd3e12"
	},
	{
		"id": "133aad7603a1",
		"ts": "2026-07-24T11:02:10.348Z",
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
		"liquidityUsd": 2464072.89,
		"hash": "133aad7603a1fe0d2fed809f41b8d8ed8eb047cdeb89f9c64704008744744449"
	},
	{
		"id": "fbb49ad4f792",
		"ts": "2026-07-24T11:02:10.539Z",
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
		"liquidityUsd": 3233274.63,
		"hash": "fbb49ad4f792cb344db09c51e963aa416b4e8d8014b0de6d7267c59630a09fae"
	},
	{
		"id": "f6a583038539",
		"ts": "2026-07-24T11:02:10.796Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 313071.63,
		"hash": "f6a583038539bf844266d1e8a806e66792d186bc0b475dd476eafd52968ee630"
	},
	{
		"id": "a7e09bd292e5",
		"ts": "2026-07-24T11:02:10.970Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1925905.54,
		"hash": "a7e09bd292e5690e3032ec7b2a8507030cc78da040879b0a94b31ae4d6f53277"
	},
	{
		"id": "504da54e145f",
		"ts": "2026-07-24T11:02:11.155Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 84998.34,
		"hash": "504da54e145f533e92fff0df53717c112a32945dad7b5b8a302c3e93205f975a"
	},
	{
		"id": "910bfc01e78d",
		"ts": "2026-07-24T11:02:11.330Z",
		"symbol": "MOLT",
		"token": "0xB695559b26BB2c9703ef1935c37AeaE9526bab07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1013753.48,
		"hash": "910bfc01e78d0bea91253ef78186f0220df1343ec6e8c1dba9f5983597b260e2"
	},
	{
		"id": "5399bee86448",
		"ts": "2026-07-24T11:02:11.677Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 717555.77,
		"hash": "5399bee8644824c04f00d77cc87e2b0c56c197699b653f80a0dc297ed010cdd5"
	},
	{
		"id": "f1e6073de526",
		"ts": "2026-07-24T11:02:11.854Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4794950.88,
		"hash": "f1e6073de526d3046b1dda8acb434b770bb7030b16b7306d83931ac37b27db50"
	},
	{
		"id": "38b9260c7bfe",
		"ts": "2026-07-24T11:02:12.035Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1989073.59,
		"hash": "38b9260c7bfe2099a9f97ec3ab8d04b4fab701bc4ce62406db37b5c8d53b1944"
	},
	{
		"id": "2c79284fcd5a",
		"ts": "2026-07-24T08:21:13.769Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110469131.3,
		"hash": "2c79284fcd5ab825e95723a6cb4ce351d260cfacf150adac7aa54c0e83ec0774"
	},
	{
		"id": "bf00bf168bfb",
		"ts": "2026-07-24T08:21:14.018Z",
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
		"liquidityUsd": 15849026.08,
		"hash": "bf00bf168bfbc6dc8e4519884aa3cd2ec7302a913eb9107443ab349c856bd641"
	},
	{
		"id": "aba8c2ea0ff9",
		"ts": "2026-07-24T08:21:14.489Z",
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
		"liquidityUsd": 815979.43,
		"hash": "aba8c2ea0ff9ff668b1a0cc42d563871ca9a258e7502ffc001d6a740fca2d5eb"
	},
	{
		"id": "5961b3880be4",
		"ts": "2026-07-24T08:21:14.727Z",
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
		"liquidityUsd": 26059444.49,
		"hash": "5961b3880be451a90994e76985b5abe6861eea54f9af4aae32b6e98a55739b19"
	},
	{
		"id": "08cf0326f74e",
		"ts": "2026-07-24T08:21:14.971Z",
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
		"liquidityUsd": 5111886.89,
		"hash": "08cf0326f74edef12bed55effc10b6eeabc6b9d892b7bd7dd59ddbd6c52abfdf"
	},
	{
		"id": "46ca9a2d4590",
		"ts": "2026-07-24T08:21:15.216Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 951440.82,
		"hash": "46ca9a2d4590dafa2d43b5fc111c89c314b7e14e8bf2544ced5fd0b1df4b5ce5"
	},
	{
		"id": "02bcb4fba66a",
		"ts": "2026-07-24T08:21:15.448Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3268098.66,
		"hash": "02bcb4fba66a9ced3d50e58807c3a6c9b4a54928c8367ac8c0f1b658a834c444"
	},
	{
		"id": "72bb7879c85e",
		"ts": "2026-07-24T08:21:15.692Z",
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
		"liquidityUsd": 3328928.51,
		"hash": "72bb7879c85e9ba679489bd0dcfd4a7b2532a2fc314fd168aae7e3fe3c12ebf9"
	},
	{
		"id": "be1629196f6c",
		"ts": "2026-07-24T08:21:15.932Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 312655.19,
		"hash": "be1629196f6cc0de8e9a7a5137a68cc0ff2665b44cb74064ed4d3814ca80b0b2"
	},
	{
		"id": "4cb3a659a707",
		"ts": "2026-07-24T08:21:16.167Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1947194.4,
		"hash": "4cb3a659a7079e014b7fe3c381deccf221f2422c4f06ba09137537b9ebb59424"
	},
	{
		"id": "37b5261fe925",
		"ts": "2026-07-24T08:21:16.393Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3268098.66,
		"hash": "37b5261fe925ca983d64f4e55d33448df4b819acc3c5c26ef1e907c3ec103a78"
	},
	{
		"id": "5bd61acb30b6",
		"ts": "2026-07-24T08:21:16.616Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 84244.13,
		"hash": "5bd61acb30b6fe31e4932fbc6af8f78ec550c7555a05bc7bc3522d00b79d4397"
	},
	{
		"id": "5b5ddf34f66e",
		"ts": "2026-07-24T08:21:16.833Z",
		"symbol": "MOLT",
		"token": "0xB695559b26BB2c9703ef1935c37AeaE9526bab07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1021364.62,
		"hash": "5b5ddf34f66e2d3f6dcdcce171dc46be37ecda291775397e2a16e4bbba15d86c"
	},
	{
		"id": "b1468ac31d52",
		"ts": "2026-07-24T08:21:17.059Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 715229.42,
		"hash": "b1468ac31d52ae34ee75af398eee591689707e27f3c859ab01fce56c01ff6265"
	},
	{
		"id": "c607008f657b",
		"ts": "2026-07-24T08:21:17.283Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4819524.46,
		"hash": "c607008f657bd50d0f14b1ecddd947920d0894c164a1a90ce8a2a9d4e0482345"
	},
	{
		"id": "90e3b9c44c0e",
		"ts": "2026-07-24T08:21:17.501Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2009514.81,
		"hash": "90e3b9c44c0e612992912d4754bcc44df88858a7fb7a96eae1d9b5fb2e2f9cf5"
	},
	{
		"id": "4f20c3799ff2",
		"ts": "2026-07-24T05:47:16.201Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109705472.82,
		"hash": "4f20c3799ff2590eade4097759b9d2cfb533c3d667ccd9474c4fcdb7b80b4bc6"
	},
	{
		"id": "6acb71ec7fa5",
		"ts": "2026-07-24T05:47:16.728Z",
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
		"liquidityUsd": 17425612.9,
		"hash": "6acb71ec7fa5cb551f71aff9f3ff91d9264a1ce6ad25f0d38e32839ce878b4be"
	},
	{
		"id": "896716d49f45",
		"ts": "2026-07-24T05:47:16.972Z",
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
		"liquidityUsd": 811762.19,
		"hash": "896716d49f457ccee196d14492e98db0d24ea21466d1aa8fd6206b735eed2871"
	},
	{
		"id": "76e6c8f4a675",
		"ts": "2026-07-24T05:47:17.215Z",
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
		"liquidityUsd": 26029845.81,
		"hash": "76e6c8f4a675bd020600ad3ec90d6a0d19d09ea841f83c8e50472a62495e663a"
	},
	{
		"id": "eedc3d4e94c4",
		"ts": "2026-07-24T05:47:17.456Z",
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
		"liquidityUsd": 5078398.43,
		"hash": "eedc3d4e94c450b2543737dcce3827c9cc7abb79fc1273e1774327c48508cd12"
	},
	{
		"id": "b210887334ab",
		"ts": "2026-07-24T05:47:17.701Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 952126.3,
		"hash": "b210887334ab7190262b8d573acb21901d108d71c1e3c5bec4a4c4de214a040b"
	},
	{
		"id": "c9c1eb720a75",
		"ts": "2026-07-24T05:47:17.939Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26029845.81,
		"hash": "c9c1eb720a756266c871631870f508926fedf87c6970aecdf012365a6662ce70"
	},
	{
		"id": "6b2b4d88c2c9",
		"ts": "2026-07-24T05:47:18.179Z",
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
		"liquidityUsd": 2465903.57,
		"hash": "6b2b4d88c2c93baf971b276667bcea750233e2b8b40cdb7c59f3b7a48f2a734e"
	},
	{
		"id": "4191197571b0",
		"ts": "2026-07-24T05:47:18.417Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1933789.87,
		"hash": "4191197571b0d3f33d76e5cd4469cc5ade0650ad22d7ad9ffab64a55311a0130"
	},
	{
		"id": "892730978da3",
		"ts": "2026-07-24T05:47:18.655Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 317140.39,
		"hash": "892730978da3e2e4193b61b35b1e38462fcb12ce21bf2451c3fdb26d963958fd"
	},
	{
		"id": "fe8fc230b186",
		"ts": "2026-07-24T05:47:18.879Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3082869.69,
		"hash": "fe8fc230b1869a6c80e5590e4949242ec503fa06847bd8732a17257071383b96"
	},
	{
		"id": "7861544dd354",
		"ts": "2026-07-24T05:47:19.102Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 89310.66,
		"hash": "7861544dd3541afe800ebeb22c35864ef259423cfce2d8f9f4aa15ebff572f23"
	},
	{
		"id": "d0e5df51c044",
		"ts": "2026-07-24T05:47:19.324Z",
		"symbol": "MOLT",
		"token": "0xB695559b26BB2c9703ef1935c37AeaE9526bab07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1014739.84,
		"hash": "d0e5df51c044e7b3936f977d24111d5a5eec567e1059d139e1b7364f54c1b2cb"
	},
	{
		"id": "2a661b73309b",
		"ts": "2026-07-24T05:47:19.548Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4768822.85,
		"hash": "2a661b73309bf293ce10fe1140fcc4874512e2e44f9c447ecd64423cb0ab7c0c"
	},
	{
		"id": "4cf6f095307f",
		"ts": "2026-07-24T05:47:19.773Z",
		"symbol": "CHECK",
		"token": "0x9126236476eFBA9Ad8aB77855c60eB5BF37586Eb",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 30728281.08,
		"hash": "4cf6f095307f9dd4f688868ff4879ee7d58a9903a5afb006ee35d7605b62e9c1"
	},
	{
		"id": "7e428225feb0",
		"ts": "2026-07-24T05:47:19.997Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1991429.81,
		"hash": "7e428225feb0011e52baccdd647c08886f941a89f63f03deb2ce4779d7d93ba7"
	},
	{
		"id": "d43976038fa1",
		"ts": "2026-07-24T02:41:34.889Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109552830.35,
		"hash": "d43976038fa143ff279f685cd36536eca8b29a3c81d6d338873a34d1212ed209"
	},
	{
		"id": "a175a6f4fda0",
		"ts": "2026-07-24T02:41:35.369Z",
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
		"liquidityUsd": 17352650.65,
		"hash": "a175a6f4fda0b792b489e7e50732d844839e52b49ac532761606c77a28ab0a0b"
	},
	{
		"id": "533f83b2238d",
		"ts": "2026-07-24T02:41:35.631Z",
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
		"liquidityUsd": 807554.23,
		"hash": "533f83b2238d1bca7987368366c2e4a52365fa0672956176713b1c0e908654e2"
	},
	{
		"id": "3081cd2b6998",
		"ts": "2026-07-24T02:41:36.096Z",
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
		"liquidityUsd": 26205382.29,
		"hash": "3081cd2b699817ff6245f8c90273419b50d7168bf30f7cd1e30df563408ee53e"
	},
	{
		"id": "51daf11b1aff",
		"ts": "2026-07-24T02:41:36.347Z",
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
		"liquidityUsd": 5057989.69,
		"hash": "51daf11b1aff5670d93a93728ad0b0e3e4cbad2d53775b767ba533c5134e4027"
	},
	{
		"id": "aa7851a11513",
		"ts": "2026-07-24T02:41:36.601Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 945331.8,
		"hash": "aa7851a115133a9ad18400ad36d18df77435e62a9d0201662449937354c9769b"
	},
	{
		"id": "7ffed645fec6",
		"ts": "2026-07-24T02:41:36.854Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26205382.29,
		"hash": "7ffed645fec64dae7f4298a8f2dcdddfaa96104552230139ab54785bbd90ec6f"
	},
	{
		"id": "632127f6328c",
		"ts": "2026-07-24T02:41:37.116Z",
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
		"liquidityUsd": 2541499.49,
		"hash": "632127f6328c72deb79126a77c06fea83d922e964c74f946eec451184b4e2044"
	},
	{
		"id": "e3c309ef4e62",
		"ts": "2026-07-24T02:41:37.372Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1961214.82,
		"hash": "e3c309ef4e62e27ce242424fb6e93ce333c4d926c94fae662e09f7822a6c1981"
	},
	{
		"id": "010485f8bfbc",
		"ts": "2026-07-24T02:41:37.627Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 304021.27,
		"hash": "010485f8bfbc39631b7779c636cedd6cdccf1b4e23b58fc64c81d9eb465fb8db"
	},
	{
		"id": "d6c03a70a05f",
		"ts": "2026-07-24T02:41:37.858Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 87957.95,
		"hash": "d6c03a70a05f26d147bbeab012ab1d28dd61baad2238bfa5544db4fd8a628f38"
	},
	{
		"id": "f418a5b1211b",
		"ts": "2026-07-24T02:41:38.097Z",
		"symbol": "MOLT",
		"token": "0xB695559b26BB2c9703ef1935c37AeaE9526bab07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1008682.36,
		"hash": "f418a5b1211b829eac8454f8c6ce44646fc61013927af6833d506ebbb5b3f2c8"
	},
	{
		"id": "3c1b13744324",
		"ts": "2026-07-24T02:41:38.463Z",
		"symbol": "CHECK",
		"token": "0x9126236476eFBA9Ad8aB77855c60eB5BF37586Eb",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 30728281.08,
		"hash": "3c1b137443249f9012a25f93133141cdd09c6a4c3117825707d48b72d0fb690c"
	},
	{
		"id": "6560c1389f67",
		"ts": "2026-07-24T02:41:38.693Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1987724.51,
		"hash": "6560c1389f6757a3ee782bc0ed206bd89f73ec4013490ec05278dea5302cf5eb"
	},
	{
		"id": "b747e176ec77",
		"ts": "2026-07-24T02:41:38.922Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4738443.38,
		"hash": "b747e176ec77f10e3b51013e0427318f223a71569ad6019239f7173d6cd7ac52"
	},
	{
		"id": "041e01912187",
		"ts": "2026-07-24T02:41:39.159Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 618500.15,
		"hash": "041e01912187f07ff5b24b3f587152dfeb964305b1e1589a25e143ec20bbe3fa"
	},
	{
		"id": "2d87f77d7d6d",
		"ts": "2026-07-23T23:56:52.263Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109838251.55,
		"hash": "2d87f77d7d6d10218a6dc10760714e23baca40bc5143dab455f9427f51abcf4f"
	},
	{
		"id": "d5c40e575dd9",
		"ts": "2026-07-23T23:56:52.505Z",
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
		"liquidityUsd": 13741959.18,
		"hash": "d5c40e575dd9063b77e4f18e3d0551769120144a0b2d4e6fae80dcc43050e022"
	},
	{
		"id": "0912fc725ed5",
		"ts": "2026-07-23T23:56:52.746Z",
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
		"liquidityUsd": 805503.22,
		"hash": "0912fc725ed57d14d24497a683b933007479a241beca36912b3447fa964ae4fd"
	},
	{
		"id": "5843994d411c",
		"ts": "2026-07-23T23:56:52.982Z",
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
		"liquidityUsd": 25814100.58,
		"hash": "5843994d411c72d9beaa2f1968830112ac21cd5441f4c6fd8a120dbf13a14450"
	},
	{
		"id": "2f1497702cc8",
		"ts": "2026-07-23T23:56:53.220Z",
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
		"liquidityUsd": 5086400.66,
		"hash": "2f1497702cc8872d099b263e53b12ea863e9b33df9c4ce23fc00b0b2a55d2e6a"
	},
	{
		"id": "4047fd51c8ff",
		"ts": "2026-07-23T23:56:53.456Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 945539.04,
		"hash": "4047fd51c8ffa1598e951a50bd83ca16d4f7238bf5a14d64eb104ae92a517961"
	},
	{
		"id": "2c236b46126b",
		"ts": "2026-07-23T23:56:53.689Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25814100.58,
		"hash": "2c236b46126b222142ffac976c40ca96eb1dda37d5af3ff6184ec02a6f5806a3"
	},
	{
		"id": "0bbf35827c0c",
		"ts": "2026-07-23T23:56:53.928Z",
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
		"liquidityUsd": 2551341.86,
		"hash": "0bbf35827c0c488849777ec91de3e6cd03b7359eb6c884d63cfd4d19e617e503"
	},
	{
		"id": "8b5d243925b8",
		"ts": "2026-07-23T23:56:54.164Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 302379.3,
		"hash": "8b5d243925b8f57fbcd1968bef09761ea47f9af22b8e3f1c36d5d060a5b44fbb"
	},
	{
		"id": "2226aa83c16d",
		"ts": "2026-07-23T23:56:54.400Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1984745.72,
		"hash": "2226aa83c16dad4e92053db13b995689de4007d5f605ccc7ddaf722dafaf8337"
	},
	{
		"id": "33a8fe9fbcd0",
		"ts": "2026-07-23T23:56:54.619Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 673036.46,
		"hash": "33a8fe9fbcd02c24f439ebcfef4293ee0fb9f7c6e4636fc435e14246e6f161db"
	},
	{
		"id": "cf94bab24fbb",
		"ts": "2026-07-23T23:56:54.839Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4781878.7,
		"hash": "cf94bab24fbb91ae04466b8057c43b0da70d47b5ef7d9efb2822d691d7753f39"
	},
	{
		"id": "0b522052fc2b",
		"ts": "2026-07-23T23:56:55.061Z",
		"symbol": "MOLT",
		"token": "0xB695559b26BB2c9703ef1935c37AeaE9526bab07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1004703.55,
		"hash": "0b522052fc2bf213af9a906e3440e9542cf68e28185095a1ceea2b40fb0c4e31"
	},
	{
		"id": "0c6fe2e0e677",
		"ts": "2026-07-23T23:56:55.282Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 85700.45,
		"hash": "0c6fe2e0e677e53898800ded338889c84d59121aca2268bf9a1e0a1942de6e89"
	},
	{
		"id": "0e8df98c259b",
		"ts": "2026-07-23T23:56:55.507Z",
		"symbol": "CHECK",
		"token": "0x9126236476eFBA9Ad8aB77855c60eB5BF37586Eb",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 35220675.9,
		"hash": "0e8df98c259bf1fac23c2e5101209e6442da7e1b24dce9f8a96e18714060b08d"
	},
	{
		"id": "67a5cbe7ccf9",
		"ts": "2026-07-23T23:56:55.727Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2002520.67,
		"hash": "67a5cbe7ccf991d83010ec1dc903efb72ce1c7f45488caa1869223a2f52c8221"
	},
	{
		"id": "0f494a90509e",
		"ts": "2026-07-23T23:56:55.947Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2033990.41,
		"hash": "0f494a90509e121decb62b2f2c56a99b069d7ef21f0830336926d8bfab0c9f85"
	},
	{
		"id": "1e631ab401ba",
		"ts": "2026-07-23T22:09:58.893Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109929319.2,
		"hash": "1e631ab401ba721b1c8b6ae6c986f6fa727f1d8c8ec7af3dd7e3499835313d58"
	},
	{
		"id": "1c0d75649e18",
		"ts": "2026-07-23T22:09:59.139Z",
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
		"liquidityUsd": 16248812.14,
		"hash": "1c0d75649e1838e3fee2532c4fa0c3a727d7a01c1c0fc689b7770dbe7e59316a"
	},
	{
		"id": "74a5eea1f96a",
		"ts": "2026-07-23T22:09:59.374Z",
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
		"liquidityUsd": 809363.54,
		"hash": "74a5eea1f96a06a63376cec43db2be2b7f7774792fb963d2562894b45b80d31f"
	},
	{
		"id": "262bb619abf6",
		"ts": "2026-07-23T22:09:59.614Z",
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
		"liquidityUsd": 25815638.66,
		"hash": "262bb619abf6e93eff1eef759c14bec0701577288aa8f83f7b78362c9ea3d61f"
	},
	{
		"id": "1f7b5aa95fab",
		"ts": "2026-07-23T22:09:59.850Z",
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
		"liquidityUsd": 5100827.13,
		"hash": "1f7b5aa95fab38c66b940bc40bf2ee7723a5fb636481b3af6e27beea4bb14b9e"
	},
	{
		"id": "17904f4b423f",
		"ts": "2026-07-23T22:10:00.092Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 946342.95,
		"hash": "17904f4b423f61c015a21833262e1cbe386c99dbf26c4dcdc5d57dfdca425e1c"
	},
	{
		"id": "497c85b56041",
		"ts": "2026-07-23T22:10:00.325Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25815638.66,
		"hash": "497c85b56041618275b88ca99815633355cc2b95fa2c485530b23e76b2da073c"
	},
	{
		"id": "d2ff4b5e49c2",
		"ts": "2026-07-23T22:10:00.577Z",
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
		"liquidityUsd": 2559171.47,
		"hash": "d2ff4b5e49c24145fc7e70728bae7d9ba0ce660c5794c1671d0b9904d8bb73dd"
	},
	{
		"id": "fd8ae9171ce9",
		"ts": "2026-07-23T22:10:00.819Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 359301.15,
		"hash": "fd8ae9171ce9d25ad0721159a6a4ae56620c30aae86b9c97a8717ccf326ce421"
	},
	{
		"id": "578919fddedc",
		"ts": "2026-07-23T22:10:01.064Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1942954.05,
		"hash": "578919fddedcea4370110b9c056130b28ae827e172f33a31b52c9f15794edacf"
	},
	{
		"id": "f464af64b0ce",
		"ts": "2026-07-23T22:10:01.297Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 679201.33,
		"hash": "f464af64b0ce6de23e6e4cbfb3566bde0c1c49d84d8e492ab595d07573735820"
	},
	{
		"id": "3d8fc8e1eb62",
		"ts": "2026-07-23T22:10:01.664Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4782782.58,
		"hash": "3d8fc8e1eb620c69eaac094b4c145faea58d42381a295f5a9f24cc84a586726c"
	},
	{
		"id": "1fa8f1a2d9a3",
		"ts": "2026-07-23T22:10:02.129Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1987095.87,
		"hash": "1fa8f1a2d9a35544624e03cf3832f6d0a43855cb0c8aee38e122fe7868fbf14c"
	},
	{
		"id": "b9b062954a0c",
		"ts": "2026-07-23T22:10:02.625Z",
		"symbol": "MOLT",
		"token": "0xB695559b26BB2c9703ef1935c37AeaE9526bab07",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1009772.1,
		"hash": "b9b062954a0c8a986a1a1a505441c1fa20f9785667787371f90154a1f0ec8547"
	},
	{
		"id": "cf1cab394370",
		"ts": "2026-07-23T22:10:02.959Z",
		"symbol": "CHECK",
		"token": "0x9126236476eFBA9Ad8aB77855c60eB5BF37586Eb",
		"score": 69,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.38,
		"flags": [
			"new_pair_under_24h",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 31748640.45,
		"hash": "cf1cab394370e8ac06c3da7bfa2152b9ebdf83521d1a7c890919f8e6c5c5afc9"
	},
	{
		"id": "c1a8405dea48",
		"ts": "2026-07-23T22:10:03.342Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 127034.21,
		"hash": "c1a8405dea48c9196aa2c614fad038fdb06f1c3ae2ef4468d8939eefb50a6368"
	},
	{
		"id": "aeef2f476618",
		"ts": "2026-07-23T22:10:03.561Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2071657.52,
		"hash": "aeef2f4766182140c6eb58b9dcd45e10d89c0c118c6e965f25c5741ecfad1a3c"
	},
	{
		"id": "28b1de8de53e",
		"ts": "2026-07-23T20:59:28.296Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109904238.12,
		"hash": "28b1de8de53e86797bbf89f5b2a00e7b218addc7fd2e049c879ae9c026eafa81"
	},
	{
		"id": "46b8b595dfc4",
		"ts": "2026-07-23T20:59:28.784Z",
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
		"liquidityUsd": 16804293.55,
		"hash": "46b8b595dfc42a497e131d2de1e71c125b9512e0e7587245121209952752879b"
	},
	{
		"id": "fc817d869c48",
		"ts": "2026-07-23T20:59:29.021Z",
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
		"liquidityUsd": 812137.19,
		"hash": "fc817d869c48437e3e99e01b929c6a44db26189ecb70389e82954a1487f5bc99"
	},
	{
		"id": "a3c75aea721e",
		"ts": "2026-07-23T20:59:29.270Z",
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
		"liquidityUsd": 25905830.01,
		"hash": "a3c75aea721e3630920392dbb7621e2e44d3c33bff8af3b22bcc4f451db3e0b3"
	},
	{
		"id": "98dd0b881002",
		"ts": "2026-07-23T20:59:29.521Z",
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
		"liquidityUsd": 5093468.35,
		"hash": "98dd0b881002da21c38bfa8a4931a3dbf7df22dc7c1b08afa136696a94442c31"
	},
	{
		"id": "426c045bff01",
		"ts": "2026-07-23T20:59:29.757Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 933184.64,
		"hash": "426c045bff019b3219580ea1591d9817b13b0e8d4b3b750074454a19a0dca565"
	},
	{
		"id": "9adaf2618b5c",
		"ts": "2026-07-23T20:59:30.002Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25905830.01,
		"hash": "9adaf2618b5c7b7672c429cb071d12add00c90a74c7c448b728613e8eb042e69"
	},
	{
		"id": "5685f982ec54",
		"ts": "2026-07-23T20:59:30.254Z",
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
		"liquidityUsd": 2562744.4,
		"hash": "5685f982ec54ac9a034850482e0728c04acebd4cd6b0749a3ee57c0dbd8783ed"
	},
	{
		"id": "1d275d7751ea",
		"ts": "2026-07-23T20:59:30.488Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 377205.58,
		"hash": "1d275d7751ea81eadc72e255185dfe12e403491db800224fc7ab19656e51544e"
	},
	{
		"id": "886daf84971c",
		"ts": "2026-07-23T20:59:30.739Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1950625.64,
		"hash": "886daf84971c7f1042754783bf65ccf933f1df3668fd0ef0f4bdbfe92b822597"
	},
	{
		"id": "f58270735c59",
		"ts": "2026-07-23T20:59:30.973Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 679888.82,
		"hash": "f58270735c59fe36178a66a17901ecb89edb15047d4c6154c1ed88ce9a9b5fb1"
	},
	{
		"id": "91f06e3dc2a4",
		"ts": "2026-07-23T20:59:31.190Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4763827.6,
		"hash": "91f06e3dc2a4c67738a08a53cec70dc34c5289e2eb22817056f7a28fee1315fc"
	},
	{
		"id": "ac73760b495b",
		"ts": "2026-07-23T20:59:31.422Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2001811.95,
		"hash": "ac73760b495bc5837e17e2e4a7fc4dfe4b1d33039353520028029a88f4f88994"
	},
	{
		"id": "7de610f6689e",
		"ts": "2026-07-23T20:59:31.656Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 117674.49,
		"hash": "7de610f6689e61d038d480fb1a2c17cb9e5463a9f4a9d942357f151b4ec1b42f"
	},
	{
		"id": "10a38b93d6b3",
		"ts": "2026-07-23T20:59:31.873Z",
		"symbol": "CHECK",
		"token": "0x9126236476eFBA9Ad8aB77855c60eB5BF37586Eb",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 31748640.45,
		"hash": "10a38b93d6b3d3fe73e958ec27654cd52ba0a195ca94b6c37adce25c3a6bab1b"
	},
	{
		"id": "c64327eb381a",
		"ts": "2026-07-23T20:59:32.105Z",
		"symbol": "MOLT",
		"token": "0xB695559b26BB2c9703ef1935c37AeaE9526bab07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1013550.46,
		"hash": "c64327eb381a0b6169ea9465260faa2491cd7b5a89103ddfbe68ac69e8772371"
	},
	{
		"id": "5ed4fd7a580d",
		"ts": "2026-07-23T20:59:32.338Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2050778.55,
		"hash": "5ed4fd7a580d772018596d5f3b50d60bf381c24f1b7357a1271c0138704eefd4"
	},
	{
		"id": "49b3affc24fa",
		"ts": "2026-07-23T19:09:49.170Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109873085.82,
		"hash": "49b3affc24fa2bda02ac730cfaec76e01a107fd3c6ee1c2f70decca7579f9860"
	},
	{
		"id": "716dbb80ed42",
		"ts": "2026-07-23T19:09:49.634Z",
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
		"liquidityUsd": 16022120.6,
		"hash": "716dbb80ed4204144e3ed64abe51956eb8d014244ff0871c5b8b48536062c385"
	},
	{
		"id": "ce512ecd69b6",
		"ts": "2026-07-23T19:09:49.889Z",
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
		"liquidityUsd": 810396.39,
		"hash": "ce512ecd69b60a7e79d3bbc8cfae1a011a55a671db0d15eca629d924125b23cf"
	},
	{
		"id": "127a6749c654",
		"ts": "2026-07-23T19:09:50.142Z",
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
		"liquidityUsd": 25708103.11,
		"hash": "127a6749c654952c57bc996774746a7378b005a04db0addf0b7ad480165346f7"
	},
	{
		"id": "22eb026fe93f",
		"ts": "2026-07-23T19:09:50.404Z",
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
		"liquidityUsd": 5067707.56,
		"hash": "22eb026fe93f52bd37686df6c689935e0a4f44fc475c61bff4f93ff574302c67"
	},
	{
		"id": "306015eed2b5",
		"ts": "2026-07-23T19:09:50.653Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 931702.84,
		"hash": "306015eed2b560e51e37fd6f84e47d6efb5d8efc672f1f1fc92c6d197deaddf2"
	},
	{
		"id": "3a538547806f",
		"ts": "2026-07-23T19:09:50.905Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25708103.11,
		"hash": "3a538547806f00b09769fe794e074379b9ef4425878e9cfefe1452c1e712b36b"
	},
	{
		"id": "69e00d34a272",
		"ts": "2026-07-23T19:09:51.158Z",
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
		"liquidityUsd": 2558602.59,
		"hash": "69e00d34a272321f74030814273f39a73a2ded4bd7c3aeed326de22fcb7cba5c"
	},
	{
		"id": "6b8bdf1c58a0",
		"ts": "2026-07-23T19:09:51.412Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 352680.61,
		"hash": "6b8bdf1c58a0a702495a53f64d5d68a5ac8e760782367447537bf8751e7c0665"
	},
	{
		"id": "c51c4081c143",
		"ts": "2026-07-23T19:09:51.669Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1949204,
		"hash": "c51c4081c1432d3d8074faecfabd4a926d0735c18c1f1e30d293863027ce8772"
	},
	{
		"id": "85877c9ff6dc",
		"ts": "2026-07-23T19:09:51.905Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 679923.04,
		"hash": "85877c9ff6dcfdefa43c9618dd8b55a6fb2e42495193bb56aad8e7ec04e4e782"
	},
	{
		"id": "6850bde1638f",
		"ts": "2026-07-23T19:09:52.140Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4778758.84,
		"hash": "6850bde1638f09667623a372025c24e8f3e95cd0bb336c8abb118b5e4518bd7e"
	},
	{
		"id": "1e067a3ff742",
		"ts": "2026-07-23T19:09:52.375Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2007862.7,
		"hash": "1e067a3ff7422b43124ffcca7011ef22982bdc5880b9f56570b682914dde7274"
	},
	{
		"id": "7e120bf9d7e2",
		"ts": "2026-07-23T19:09:52.612Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 125810.06,
		"hash": "7e120bf9d7e28f341803b12854c2ced0e44f52d6edd39e7b667a9e1e4e86902d"
	},
	{
		"id": "bda7b187ec14",
		"ts": "2026-07-23T19:09:52.934Z",
		"symbol": "CHECK",
		"token": "0x9126236476eFBA9Ad8aB77855c60eB5BF37586Eb",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 32937521.62,
		"hash": "bda7b187ec14416e618e58a53c128216c310eb16fcb10d8c4381bdde496a88a8"
	},
	{
		"id": "b19f8d814ac7",
		"ts": "2026-07-23T19:09:53.189Z",
		"symbol": "MOLT",
		"token": "0xB695559b26BB2c9703ef1935c37AeaE9526bab07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1011119.17,
		"hash": "b19f8d814ac79cf17191bbe85bfe8032b91d3593b1d45bfcf8303c1927074ce8"
	},
	{
		"id": "f9d77021ac8c",
		"ts": "2026-07-23T19:09:53.423Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2063423.16,
		"hash": "f9d77021ac8cab2a1445722a0a99acbbe0b3cd0251cc515723a6a76d4e17fee8"
	},
	{
		"id": "a874bcc59e8b",
		"ts": "2026-07-23T17:17:11.606Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110228467.74,
		"hash": "a874bcc59e8b321410bfb94693bb26535623e2f7f928825fe0286d638c95ead6"
	},
	{
		"id": "3e6760210832",
		"ts": "2026-07-23T17:17:12.088Z",
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
		"liquidityUsd": 15972071.31,
		"hash": "3e67602108329e7c80a255aecf7957a52874b02372ddf6400b7fac00204da41f"
	},
	{
		"id": "a5e95ddc38de",
		"ts": "2026-07-23T17:17:12.329Z",
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
		"liquidityUsd": 813194.33,
		"hash": "a5e95ddc38de013bde8938563be0a44441c60ff0138c1992ad07ba7545499d34"
	},
	{
		"id": "c25c2682bdaf",
		"ts": "2026-07-23T17:17:12.573Z",
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
		"liquidityUsd": 25799473.59,
		"hash": "c25c2682bdaf37ee6d59351479d25e2be5f055bbbac0ad307128b010e02a1c6d"
	}
]
