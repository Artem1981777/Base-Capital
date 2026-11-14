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
	"updatedAt": "2026-11-14T01:13:57.616Z",
	"tokensScored": 22816,
	"verdictsIssued": 22816,
	"safe": 19463,
	"risky": 1600,
	"likelyRug": 1753,
	"ticks": 1282
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "a6d5e3279a35",
		"ts": "2026-11-14T01:13:53.308Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 124717712.64,
		"hash": "a6d5e3279a3502c37d5c88c66ff1aadc44d814c871f83c97fe177ffea924b129"
	},
	{
		"id": "b0110bcd037d",
		"ts": "2026-11-14T01:13:53.573Z",
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
		"liquidityUsd": 13564139.28,
		"hash": "b0110bcd037d8d7a121c98e3434b888b4d29ca2b03cdc0fed67c4443cca7b74c"
	},
	{
		"id": "5ceb81707a10",
		"ts": "2026-11-14T01:13:53.822Z",
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
		"liquidityUsd": 215559.99,
		"hash": "5ceb81707a10a50c0c116e0e2ab70fe06f3f89694aeb16c518882d83d1e1f586"
	},
	{
		"id": "935e6618bea7",
		"ts": "2026-11-14T01:13:54.072Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3888589.04,
		"hash": "935e6618bea79ade7e0c925c772f7d364230b360213bb6eda6f5ac62693916fb"
	},
	{
		"id": "9e902e48fc77",
		"ts": "2026-11-14T01:13:54.313Z",
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
		"liquidityUsd": 1048166.76,
		"hash": "9e902e48fc77ef90d75a7a614b0e4d8a586e23b68c8722873853f548fc0df730"
	},
	{
		"id": "3a442aa4d831",
		"ts": "2026-11-14T01:13:54.598Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 897181.56,
		"hash": "3a442aa4d831e9ef6b194d613db54f6c532c4aa7f97948af12194db5c38ab476"
	},
	{
		"id": "557a822abd52",
		"ts": "2026-11-14T01:13:54.856Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3888589.04,
		"hash": "557a822abd52e649286502e04f0d0801c95cc4207b517113923269235367104a"
	},
	{
		"id": "c641e33292c7",
		"ts": "2026-11-14T01:13:55.104Z",
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
		"liquidityUsd": 1840003.46,
		"hash": "c641e33292c7304a5305403f8cf84249633468e906d8f68bc81e8179f03e43f0"
	},
	{
		"id": "65f70bd68d8e",
		"ts": "2026-11-14T01:13:55.355Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 12,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.76,
		"flags": [
			"volume_liquidity_anomaly",
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1454471.34,
		"hash": "65f70bd68d8ec38726dd02d6aba83e20ff84fb4c70c35fc8b5b0bfd6cd0f3b9d"
	},
	{
		"id": "a566c4cff10b",
		"ts": "2026-11-14T01:13:55.593Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 2061110.27,
		"hash": "a566c4cff10bee398aac0fe0fc88ce9a3797eab3b2a2e728bd74a0a2651a48f8"
	},
	{
		"id": "59958feb9fdd",
		"ts": "2026-11-14T01:13:55.814Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 756156.82,
		"hash": "59958feb9fdd03d7d50ccdc7998a87a7ee6c6006cf0633eb776c22e60f9be019"
	},
	{
		"id": "1a939c0c7c1b",
		"ts": "2026-11-14T01:13:56.042Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1449306.03,
		"hash": "1a939c0c7c1b24a65f2d7d3bfd914449868889bd238fb5bbe81071983c2571cb"
	},
	{
		"id": "b1bcd0804e0b",
		"ts": "2026-11-14T01:13:56.275Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3459582.48,
		"hash": "b1bcd0804e0bf02f182c45e2eab077c741268a644c43b80c224905ac065feefb"
	},
	{
		"id": "fb8c6a1e48e4",
		"ts": "2026-11-14T01:13:56.497Z",
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
		"liquidityUsd": 2353403.73,
		"hash": "fb8c6a1e48e4e0cc3923dfd0d202b0e8fda685430fa2a3176906d7c5745216d8"
	},
	{
		"id": "9c3a9f7d3753",
		"ts": "2026-11-14T01:13:56.716Z",
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
		"liquidityUsd": 761079.3,
		"hash": "9c3a9f7d3753ee76e69699afed1298a11502c15dd3b664abdefa39e6de44416e"
	},
	{
		"id": "855cac22bf75",
		"ts": "2026-11-14T01:13:56.945Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1660512.22,
		"hash": "855cac22bf750a4dba37afd11dc8e75faf961ff4ca15b772b6239d9e0a978201"
	},
	{
		"id": "9065b8a5805a",
		"ts": "2026-11-14T01:13:57.176Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3461946.96,
		"hash": "9065b8a5805a1e38a4e26223af10dbfff4fa1990ef0ec782940e2bf82c676fe0"
	},
	{
		"id": "37a562a906cb",
		"ts": "2026-11-14T01:13:57.394Z",
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
		"liquidityUsd": 311950.87,
		"hash": "37a562a906cb3567556676ac845b1005804dbc5c81d5ce9b7d0fe63de8199f07"
	},
	{
		"id": "b4175fcf3881",
		"ts": "2026-11-14T01:13:57.616Z",
		"symbol": "PONS",
		"token": "0x304B826A47a5E6CB2766aD9069f670651c9F847d",
		"score": 71,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.42,
		"flags": [
			"low_liquidity",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 0,
		"hash": "b4175fcf3881df15d403c420ef6b379506fca88ce5b3389abc5f94740a1ae75b"
	},
	{
		"id": "fabf4becb0f8",
		"ts": "2026-11-13T20:17:02.676Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 125852839.33,
		"hash": "fabf4becb0f89344d79dd775251387f1ecd78a5cdcabff73c36a5ee9328b3162"
	},
	{
		"id": "c64029e808cf",
		"ts": "2026-11-13T20:17:02.941Z",
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
		"liquidityUsd": 14823233.63,
		"hash": "c64029e808cf4962f560e8a1dac5092c4490996ebe42c3c7e9de9518ee7af4f6"
	},
	{
		"id": "4d7375e9227e",
		"ts": "2026-11-13T20:17:03.195Z",
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
		"liquidityUsd": 218117.75,
		"hash": "4d7375e9227e5d1c5f2034cc60de37318744c7cd1cdc9c525ac5dec61136ed86"
	},
	{
		"id": "9d5c110887cf",
		"ts": "2026-11-13T20:17:03.454Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3926200.65,
		"hash": "9d5c110887cf09ebf9a5397413501495264291fe65483227070aca7d73f178e2"
	},
	{
		"id": "c8f5e3f2e553",
		"ts": "2026-11-13T20:17:03.768Z",
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
		"liquidityUsd": 1069935.47,
		"hash": "c8f5e3f2e5537d92fc81211fdd5885f9c9ee47aa0fc1e3673b7bd01ed7a28fb0"
	},
	{
		"id": "97900744be58",
		"ts": "2026-11-13T20:17:04.022Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 913632.51,
		"hash": "97900744be580dbdc61ceac830290b9bcd992990fec918bbb00fc95f867b58c0"
	},
	{
		"id": "fc5ae0ac2609",
		"ts": "2026-11-13T20:17:04.277Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3926200.65,
		"hash": "fc5ae0ac2609a46eb0e7663b5991d4074246b693db17d4a3c92d351078e0d879"
	},
	{
		"id": "bd4e03dbdd73",
		"ts": "2026-11-13T20:17:04.622Z",
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
		"liquidityUsd": 1865528.5,
		"hash": "bd4e03dbdd734b7e7e887affe5c8a328f912639bff2f7abe16d0415d175a47bc"
	},
	{
		"id": "f2a96ca060b7",
		"ts": "2026-11-13T20:17:04.893Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 12,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.76,
		"flags": [
			"volume_liquidity_anomaly",
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1418665.28,
		"hash": "f2a96ca060b7a1a7447821f87142616114612145d446635e1da6d1bbfb2bef58"
	},
	{
		"id": "6baf5f6de269",
		"ts": "2026-11-13T20:17:05.146Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1980190.31,
		"hash": "6baf5f6de269e55be93d09d9b9a80f143ac551495dbe3a92e383198919cd7319"
	},
	{
		"id": "9ff1d3551b73",
		"ts": "2026-11-13T20:17:05.425Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 785767.87,
		"hash": "9ff1d3551b735ac8c8d3bc94873db176db19acf00cd7275c4c1b6e368d798d1f"
	},
	{
		"id": "8a1ded84ebdc",
		"ts": "2026-11-13T20:17:05.671Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1467580.35,
		"hash": "8a1ded84ebdc749da30c2e4bfd04a86aef32f71180f3b831e83d7fa685fc0b59"
	},
	{
		"id": "ebf08ef2189f",
		"ts": "2026-11-13T20:17:05.912Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3493895.98,
		"hash": "ebf08ef2189f40d665a78532503547bce65c8cf1ab9e3b5d87731d8141ef8a62"
	},
	{
		"id": "d751b401475d",
		"ts": "2026-11-13T20:17:06.153Z",
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
		"liquidityUsd": 2403331.16,
		"hash": "d751b401475dfe543c99bdf3214d17611dced7df311a78fcbe5b8f068336b30e"
	},
	{
		"id": "5c9fb7710d63",
		"ts": "2026-11-13T20:17:06.391Z",
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
		"liquidityUsd": 418831.81,
		"hash": "5c9fb7710d634e5d41b8a775a09c412231bd22ebacb0505ea4b2260c017151fa"
	},
	{
		"id": "9c1b34b95c71",
		"ts": "2026-11-13T20:17:06.629Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1682630.58,
		"hash": "9c1b34b95c71b5fe0a9ce87a2c77e4412c7ca7df6f9ba89ded9e819bb8d0033c"
	},
	{
		"id": "d0b9f9ab2c97",
		"ts": "2026-11-13T20:17:06.868Z",
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
		"liquidityUsd": 764384.88,
		"hash": "d0b9f9ab2c9777ec5c35a50bae27c5ae65094d818a736bb3c8df75d7eeec00c5"
	},
	{
		"id": "2e46688aaff9",
		"ts": "2026-11-13T20:17:07.112Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2759188.62,
		"hash": "2e46688aaff9b4196ff93e2b98be9346d931987ac558897547d1b539bb6ddc12"
	},
	{
		"id": "ec2d101ec620",
		"ts": "2026-11-13T20:17:07.350Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 180271.68,
		"hash": "ec2d101ec620ee812ef72dacdae957eab7412f844b20896f8c1433cee7421c07"
	},
	{
		"id": "495c888429f5",
		"ts": "2026-11-13T12:49:48.395Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 126699556.25,
		"hash": "495c888429f54690c18d53bec00453fdb97b736e732f8895ca1a3b51055f6a84"
	},
	{
		"id": "6504433f4135",
		"ts": "2026-11-13T12:49:48.871Z",
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
		"liquidityUsd": 15010633.45,
		"hash": "6504433f41352aa8fb44cd7434b735d77162a3fa7d409e45f226bc226e92c10d"
	},
	{
		"id": "fdd42c3b0a20",
		"ts": "2026-11-13T12:49:49.134Z",
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
		"liquidityUsd": 217059.6,
		"hash": "fdd42c3b0a20423c01bb4d7f76b4313bcca2db6159052eb37f290aaeec4397bd"
	},
	{
		"id": "e2f5bee77a49",
		"ts": "2026-11-13T12:49:49.387Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3962104.27,
		"hash": "e2f5bee77a497454db3dff8c77ed9c446bd0a674f8cff2aa21cdae2bfaaac32e"
	},
	{
		"id": "f9c7bdd4b02e",
		"ts": "2026-11-13T12:49:49.641Z",
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
		"liquidityUsd": 1060660.37,
		"hash": "f9c7bdd4b02eb6db510c2abff5f836054837fbcbd5690810202124131cda4c9a"
	},
	{
		"id": "44fbcf186770",
		"ts": "2026-11-13T12:49:49.883Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 905414.04,
		"hash": "44fbcf186770ca9b8b467cd25145ec1c72af97e924165b166dfb11274ef04cf2"
	},
	{
		"id": "0fed463fca99",
		"ts": "2026-11-13T12:49:50.134Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3962104.27,
		"hash": "0fed463fca99e6fe20458f7ad167655d4d6456b2919620a61223738c05703d98"
	},
	{
		"id": "c590ceb44336",
		"ts": "2026-11-13T12:49:50.396Z",
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
		"liquidityUsd": 1476892.21,
		"hash": "c590ceb44336c7c76419467b0169120776ba135a42bc0ad0e3eb1bb92274339e"
	},
	{
		"id": "7d73143091e0",
		"ts": "2026-11-13T12:49:50.639Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 58209.03,
		"hash": "7d73143091e0b8493aa93102682c07306bd91b4284781bb6510bd087d7dce47b"
	},
	{
		"id": "26edae168606",
		"ts": "2026-11-13T12:49:50.892Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 12,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.76,
		"flags": [
			"volume_liquidity_anomaly",
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1406393.4,
		"hash": "26edae168606e5527ec0ee3545ae84244dd1068c403d3578d64c994691c045d2"
	},
	{
		"id": "5f4d500b6bf5",
		"ts": "2026-11-13T12:49:51.125Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1927557.01,
		"hash": "5f4d500b6bf558e772063901b729d14cbc383e79eda0b2e9f243aa652923a99a"
	},
	{
		"id": "1bc16bde579e",
		"ts": "2026-11-13T12:49:51.356Z",
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
		"liquidityUsd": 2301573.3,
		"hash": "1bc16bde579e8f14f654e9ee5383ad95f3a256a0f4a1b47822313ac08312bbcb"
	},
	{
		"id": "5eb842583989",
		"ts": "2026-11-13T12:49:51.602Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 793743.13,
		"hash": "5eb842583989c7b9a7d67a65a33fa7307abc03a2faad0a1dad15f8d2a810f18c"
	},
	{
		"id": "1c85e07ab77a",
		"ts": "2026-11-13T12:49:51.827Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3512218.88,
		"hash": "1c85e07ab77af459bf237db33d69a7e658ed3481ace03050f1e4f700b8f0b5b3"
	},
	{
		"id": "8d830f3c6f26",
		"ts": "2026-11-13T12:49:52.065Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3457298.04,
		"hash": "8d830f3c6f26678a748e4639503b665558c1433c0843c770c4d244428ad9391a"
	},
	{
		"id": "1ec3c0691978",
		"ts": "2026-11-13T12:49:52.289Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 627084.86,
		"hash": "1ec3c0691978575dc59ee44e4088e727f02c46385cfe6d9d5d0223e0e3342e45"
	},
	{
		"id": "caca8be18252",
		"ts": "2026-11-13T12:49:52.518Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 602585.56,
		"hash": "caca8be18252238f008d538c6dc4fcdf171d0a02425bed38d0d223917adbca8f"
	},
	{
		"id": "2a8a34198e60",
		"ts": "2026-11-13T12:49:52.755Z",
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
		"liquidityUsd": 6628769.74,
		"hash": "2a8a34198e60385179088aac3fc2a9f0f33c72e695cf0816d90e23e61bcb49e9"
	},
	{
		"id": "d67d522a1821",
		"ts": "2026-11-13T12:49:52.979Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1473119.98,
		"hash": "d67d522a1821f7f8f812616dc41a0e04c0f0f6d955ac4d5365e6272748fe9352"
	},
	{
		"id": "fb81b873ad4b",
		"ts": "2026-11-13T04:53:10.440Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 126799064.78,
		"hash": "fb81b873ad4b2d991df2128972cf7360e26016089235e016b472d15dd732415d"
	},
	{
		"id": "a689b31ef39f",
		"ts": "2026-11-13T04:53:10.703Z",
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
		"liquidityUsd": 14729738.13,
		"hash": "a689b31ef39fa0c0b5b0a95f685814e7d74e1f71048a204aaabb4a682f79d0f1"
	},
	{
		"id": "87f44978dcaa",
		"ts": "2026-11-13T04:53:10.927Z",
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
		"liquidityUsd": 216180.25,
		"hash": "87f44978dcaa99a05351f810b29f9920ab0342ca3a041d85feab62c3bfc64c31"
	},
	{
		"id": "991e5721d9a1",
		"ts": "2026-11-13T04:53:11.177Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4025389.6,
		"hash": "991e5721d9a15d769d083dd9407dc55d1002a5d9a375231d289bd5c99c9f2b40"
	},
	{
		"id": "ee64c08f2247",
		"ts": "2026-11-13T04:53:11.430Z",
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
		"liquidityUsd": 1034673.14,
		"hash": "ee64c08f224756d6425ba96e2427dbfd388ec19953d83809afb10451120a2a99"
	},
	{
		"id": "4e8f4a766193",
		"ts": "2026-11-13T04:53:11.643Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 887582.63,
		"hash": "4e8f4a7661934535cd8d247c2ee64e0a8e98aa7748353e659bf176a0a899c078"
	},
	{
		"id": "1816acc5ae71",
		"ts": "2026-11-13T04:53:11.889Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 173760.53,
		"hash": "1816acc5ae7169aa8e5a20ad3bf2ce2215e2868c8f030fcd1fb1742e87a5ceb2"
	},
	{
		"id": "0f5fb069918f",
		"ts": "2026-11-13T04:53:12.113Z",
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
		"liquidityUsd": 1478507.87,
		"hash": "0f5fb069918f0690bd6ef3a3bb94f049fd0c79793e9eae9594d938a46ef83cc2"
	},
	{
		"id": "0e967bac6e6b",
		"ts": "2026-11-13T04:53:12.324Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1405005.24,
		"hash": "0e967bac6e6b2462fe15a6c6ad5a8b7d9d9f43954685cd0eb96ab7f5db06c527"
	},
	{
		"id": "f56435b94e62",
		"ts": "2026-11-13T04:53:12.619Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 58342.24,
		"hash": "f56435b94e6279d14c8fa1fce5be73c3344daf7446d81cfb8c25a2e065c54321"
	},
	{
		"id": "462f39c133c8",
		"ts": "2026-11-13T04:53:12.821Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 612471.49,
		"hash": "462f39c133c8ab2f2e7cb6b88763c24f30030c7b21726480374125a7829b9892"
	},
	{
		"id": "1572b1d64bc4",
		"ts": "2026-11-13T04:53:13.040Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2723848.63,
		"hash": "1572b1d64bc4a33834043e695fefb4b413d666a054328b28c66d4fab3c02df4c"
	},
	{
		"id": "d145724c54e5",
		"ts": "2026-11-13T04:53:13.231Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 769123.21,
		"hash": "d145724c54e5978a0725ecb5500d81739a0988e8f0a7fd998b4734b87c5b08b1"
	},
	{
		"id": "820a01433222",
		"ts": "2026-11-13T04:53:13.450Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1936513.37,
		"hash": "820a01433222502c549562150a2600273e938c9e84d37b6b63a8abfc4a014fab"
	},
	{
		"id": "67ad58622ddc",
		"ts": "2026-11-13T04:53:13.709Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1434104.66,
		"hash": "67ad58622ddc5675d741b803a6c9461514a2b1585bd09b9f004688c1b202eab7"
	},
	{
		"id": "c6b70145f221",
		"ts": "2026-11-13T04:53:13.936Z",
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
		"liquidityUsd": 2242063.93,
		"hash": "c6b70145f2217c8daeafd9a7baa9ffc324dcfdc054c95c3849a8e13e0804a3b4"
	},
	{
		"id": "cd01f9c40bad",
		"ts": "2026-11-13T04:53:14.164Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1630084.83,
		"hash": "cd01f9c40bad1df5a27e3797be15f70d59c751acf32272eb8e0f2d237b691c1b"
	},
	{
		"id": "bd4837438f91",
		"ts": "2026-11-13T04:53:14.365Z",
		"symbol": "Claude",
		"token": "0xAb35c8ec5E51E31A350AbA8fBFc9cA132bc05b07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10272205.91,
		"hash": "bd4837438f912bb230e3c262fb54910fa6893d1e49fe1a662781dd0dcbc4df18"
	},
	{
		"id": "5c96585ed523",
		"ts": "2026-11-13T04:53:14.592Z",
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
		"liquidityUsd": 6355201.48,
		"hash": "5c96585ed5233a3ed0dcba64bc8f8127b332ad4380997886ae2faecabbecce20"
	},
	{
		"id": "5cff348509a7",
		"ts": "2026-11-12T23:09:34.810Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 132566997.7,
		"hash": "5cff348509a7e3d0e09355bb1c247bfb985c0bef69cfd91fab17625bfb9f4e27"
	},
	{
		"id": "34e9e4e06508",
		"ts": "2026-11-12T23:09:35.481Z",
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
		"liquidityUsd": 15358742.63,
		"hash": "34e9e4e06508f42d5a8eb7b836f01a66acf22153a956d7f9154ed524ea972f87"
	},
	{
		"id": "361908276be7",
		"ts": "2026-11-12T23:09:35.745Z",
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
		"liquidityUsd": 222424.34,
		"hash": "361908276be7852a2414e4a81e8feef8ffc569e928211acf6489403119b8951f"
	},
	{
		"id": "dd4f9627ca40",
		"ts": "2026-11-12T23:09:36.012Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4140197.88,
		"hash": "dd4f9627ca404c8d2011870e9170009d8c7faa8674e5c00da76c3893c574d358"
	},
	{
		"id": "48ed6cac9294",
		"ts": "2026-11-12T23:09:36.310Z",
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
		"liquidityUsd": 1082324.33,
		"hash": "48ed6cac92946822e6cff385230fb5c17fb9a3881e87b05dd60a80694b46f69d"
	},
	{
		"id": "d8c3adc3ba91",
		"ts": "2026-11-12T23:09:36.570Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 922230.88,
		"hash": "d8c3adc3ba91d0968e5968faee4b3d862fca64a31a622284756a793658599726"
	},
	{
		"id": "aeeefafe0344",
		"ts": "2026-11-12T23:09:36.841Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 778517.15,
		"hash": "aeeefafe0344bb6e247669cce976e7f67e0e4c1974e7bcf4b2bcf25b034efd7d"
	},
	{
		"id": "9593ff950e81",
		"ts": "2026-11-12T23:09:37.157Z",
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
		"liquidityUsd": 1445691.11,
		"hash": "9593ff950e81f2b647cd3cc650ab8eeda1e9ae6fb931df564604221216efb4be"
	},
	{
		"id": "a4af2975a642",
		"ts": "2026-11-12T23:09:37.437Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1409330.47,
		"hash": "a4af2975a642a2080670a1ff0e33b4dada0fc934d0f97b1e11a08a4470914e63"
	},
	{
		"id": "72116f9a453f",
		"ts": "2026-11-12T23:09:37.700Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 649113.55,
		"hash": "72116f9a453f6d4c1e53c03442b0e11a25bccddb927cdda2568a3d89c45507fc"
	},
	{
		"id": "915df8f2d0fa",
		"ts": "2026-11-12T23:09:37.944Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 57939.57,
		"hash": "915df8f2d0faa4bb0e6bb61f14e2b6521d1ff17a26133d7297a66c8ea1efcd3d"
	},
	{
		"id": "58c69278fa4d",
		"ts": "2026-11-12T23:09:38.190Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 806912.23,
		"hash": "58c69278fa4d9c2971ea2fd275a93725a2b37263c7c5f346ed2deb69571ecb08"
	},
	{
		"id": "bdf6eb53d485",
		"ts": "2026-11-12T23:09:38.433Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1503674.4,
		"hash": "bdf6eb53d485cdd1ce8070e78136a63fbe4ca04366b9899e7ddd4308e027bda4"
	},
	{
		"id": "7998b4d4e37f",
		"ts": "2026-11-12T23:09:38.690Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3442267.86,
		"hash": "7998b4d4e37fdc2598f3255a4cd042bd65366bfd1488431adcb06a12c1e3b671"
	},
	{
		"id": "255831856b95",
		"ts": "2026-11-12T23:09:38.934Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1939999.89,
		"hash": "255831856b956556efc78f68062b3f18fb5dab4a60f7c0f700a4d109a367a2ce"
	},
	{
		"id": "90993f6b3306",
		"ts": "2026-11-12T23:09:39.194Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1645837.13,
		"hash": "90993f6b33064daa69789fe0e4fd8da1f2f8ed2fdde5a40821f321d105b3cedc"
	},
	{
		"id": "9704f74df47f",
		"ts": "2026-11-12T23:09:39.435Z",
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
		"liquidityUsd": 6683313.52,
		"hash": "9704f74df47f8da0864c5a57771eced3a714bbc594cef819284912dcca2adeb2"
	},
	{
		"id": "36064800eb96",
		"ts": "2026-11-12T23:09:39.685Z",
		"symbol": "TSLAc",
		"token": "0xb2000000000000000000001e800a7f5189430cD0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 488185.34,
		"hash": "36064800eb965672545a689ea326cd62ce0e9e75269f17bf5c270e797c94d22a"
	},
	{
		"id": "297d5ab6eb76",
		"ts": "2026-11-12T23:09:39.926Z",
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
		"liquidityUsd": 2284857.87,
		"hash": "297d5ab6eb76b14a7ce60b98c08065a6783d61af218009de9b419d138bdfecf1"
	},
	{
		"id": "43d8aba4b9dd",
		"ts": "2026-11-12T17:53:14.132Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 132744476.79,
		"hash": "43d8aba4b9dd16ddbcbbc9e2cc39678b42347f1ed2197c593eab6e6767bf4dfc"
	},
	{
		"id": "f82f39c8aa14",
		"ts": "2026-11-12T17:53:14.648Z",
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
		"liquidityUsd": 15278573.76,
		"hash": "f82f39c8aa14d29dc9d2d86adff613c5e7f6620d8341abfe1dd29e80549c9350"
	},
	{
		"id": "b9349b4e5239",
		"ts": "2026-11-12T17:53:14.906Z",
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
		"liquidityUsd": 219226.56,
		"hash": "b9349b4e5239da78bae85e5e3d686a772a2157d7b966920ee5738fe8b84ad234"
	},
	{
		"id": "77dab721d33b",
		"ts": "2026-11-12T17:53:15.164Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4163065.24,
		"hash": "77dab721d33be06d9ec2d1af273aa3ffa617b8dedb4b4a3c1bedea1ce5d51731"
	},
	{
		"id": "b6ea8e5149eb",
		"ts": "2026-11-12T17:53:15.469Z",
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
		"liquidityUsd": 1063027.25,
		"hash": "b6ea8e5149eb72f5d34af9f53cab33217d51b6b630f080f64ae1f87216449707"
	},
	{
		"id": "3878a96a1e09",
		"ts": "2026-11-12T17:53:15.762Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 926005.39,
		"hash": "3878a96a1e098f81d2d7329ba47a063adf7363c226d47b225f29c9b709bdad0c"
	},
	{
		"id": "3833c46a0d45",
		"ts": "2026-11-12T17:53:16.012Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1306248.05,
		"hash": "3833c46a0d4593e67543571dc8b224b20c7c1d03ed246823ea74b7d441a1d893"
	},
	{
		"id": "a8d458db450b",
		"ts": "2026-11-12T17:53:16.313Z",
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
		"liquidityUsd": 1441464.63,
		"hash": "a8d458db450b4d0118488bc5e656b33eda7a598a5516b24330b64649849f658b"
	},
	{
		"id": "bf659d9fd4d9",
		"ts": "2026-11-12T17:53:16.566Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1305876.03,
		"hash": "bf659d9fd4d967fcaad5d61e0112f3edc6411c9303a12453d0ec25132d5351cd"
	},
	{
		"id": "caac8b9a4976",
		"ts": "2026-11-12T17:53:16.818Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 648277.18,
		"hash": "caac8b9a497618387c79023332128de71ff91c77cc600d954874f2a7664516b3"
	},
	{
		"id": "461cb8795717",
		"ts": "2026-11-12T17:53:17.060Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1522286.37,
		"hash": "461cb8795717b297ac443633fdcb1fe0b2a4a7be49e0320b1d998963ab19197d"
	},
	{
		"id": "ed1003d76b46",
		"ts": "2026-11-12T17:53:17.297Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2175037.09,
		"hash": "ed1003d76b46609b986499f8b4e6f3cb17fd455dcc6aab89dc63b7f05e5338f9"
	},
	{
		"id": "d8c0bfc33257",
		"ts": "2026-11-12T17:53:17.537Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1914849.41,
		"hash": "d8c0bfc33257d5508ce3d2d697444ec5cdb0cb74e2922d77abdfedfed40d1644"
	},
	{
		"id": "7e07d0a30579",
		"ts": "2026-11-12T17:53:17.775Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 823594.95,
		"hash": "7e07d0a30579925bee5a541aa38b14f89cb7392a2e19a8a05e451f853f9102bb"
	},
	{
		"id": "402f2694cf0e",
		"ts": "2026-11-12T17:53:18.012Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 57225.47,
		"hash": "402f2694cf0e32a806385168664c07b7d31d4224a68d02603855f3470fdf2d53"
	},
	{
		"id": "2d19ed770881",
		"ts": "2026-11-12T17:53:18.257Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1649429.91,
		"hash": "2d19ed770881e3512b730aea1c50ddd5391f8b332446649266db3233df4a98bd"
	},
	{
		"id": "f29af4b96590",
		"ts": "2026-11-12T17:53:18.495Z",
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
		"liquidityUsd": 6669993.39,
		"hash": "f29af4b96590669fb21c73f66351867176ec740367ce3e4ad27648703944c0a6"
	},
	{
		"id": "e921c310e7cc",
		"ts": "2026-11-12T17:53:18.733Z",
		"symbol": "REVVY",
		"token": "0x3441e8fCdD380c4e7F5C7F55CCd599B2a2afCcCC",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 57981.74,
		"hash": "e921c310e7cc3cf81b9d3144562fe5d66b499356a3595204273f964650e2511f"
	},
	{
		"id": "52d5287fb322",
		"ts": "2026-11-12T17:53:18.970Z",
		"symbol": "TSLAc",
		"token": "0xb2000000000000000000001e800a7f5189430cD0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 468141.95,
		"hash": "52d5287fb32221b42fc908d540486fe479fcd75bae0bc2e39ba33e43355fcb91"
	},
	{
		"id": "42ad0384068c",
		"ts": "2026-11-12T09:12:21.364Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 133853867.55,
		"hash": "42ad0384068c0dd29164b09a01b4ca0a87c89d154d604b1f0471d9bbb47db9e4"
	},
	{
		"id": "ba7b1d631956",
		"ts": "2026-11-12T09:12:21.888Z",
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
		"liquidityUsd": 15394452.71,
		"hash": "ba7b1d631956f5d3192d47a35ca0b05fa534344b271202173b2e1de4cd046668"
	},
	{
		"id": "fc5b8eef4ca1",
		"ts": "2026-11-12T09:12:22.138Z",
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
		"liquidityUsd": 229102.56,
		"hash": "fc5b8eef4ca10d04620d31a456e4922c39f7758324fed684c69ccde8a0db344b"
	},
	{
		"id": "0f0f7d163f2a",
		"ts": "2026-11-12T09:12:22.426Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4209550.58,
		"hash": "0f0f7d163f2afd7785e1d702ad8f149c4826bac74293fd8a6b54c489734f95a9"
	},
	{
		"id": "567feed4d615",
		"ts": "2026-11-12T09:12:22.695Z",
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
		"liquidityUsd": 1188272.81,
		"hash": "567feed4d6159f6851e8df70c26a892262c5a751f54a0b178079ac9268174cfe"
	},
	{
		"id": "ffa9c9a0c746",
		"ts": "2026-11-12T09:12:22.939Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 931481.87,
		"hash": "ffa9c9a0c746826427552f61c1539f747e605590388bc2343f78d5d241bf1fa6"
	},
	{
		"id": "e0524b4ca4f3",
		"ts": "2026-11-12T09:12:23.205Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4209591.43,
		"hash": "e0524b4ca4f326f5dcd3b715a581535d99ce059c5f04a340b9145a1d0d94da21"
	},
	{
		"id": "1bc5b31203c9",
		"ts": "2026-11-12T09:12:23.484Z",
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
		"liquidityUsd": 1178674.21,
		"hash": "1bc5b31203c99febc8843746314207f71b480025a6f82cf2f132863e40d49678"
	},
	{
		"id": "daa345cb1a19",
		"ts": "2026-11-12T09:12:23.735Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1623777.47,
		"hash": "daa345cb1a190566f5013f01fc13c1d5afd7efa06b6cece61fea864f4fc93bd9"
	},
	{
		"id": "0fcf9455628e",
		"ts": "2026-11-12T09:12:24.029Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1559370.47,
		"hash": "0fcf9455628e9f86ab24d9b50fd67931c07cf9a793832316efc85bd13b7f24fa"
	},
	{
		"id": "d264bb60912d",
		"ts": "2026-11-12T09:12:24.270Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 852759.64,
		"hash": "d264bb60912d3b2432ca9a3727a84618fd2072d1d533866a1cd16fda2625a496"
	},
	{
		"id": "d96f5e29c672",
		"ts": "2026-11-12T09:12:24.506Z",
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
		"liquidityUsd": 1516702.6,
		"hash": "d96f5e29c6722ffb24cc40df1c55799f30658e0d46e0515d713cbcf2022778c2"
	},
	{
		"id": "95894aa78e3e",
		"ts": "2026-11-12T09:12:24.734Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1726701.68,
		"hash": "95894aa78e3e0e3f22561a0cae928a148c7b70def7d070c2baef5a920a438442"
	},
	{
		"id": "69a983d1cf90",
		"ts": "2026-11-12T09:12:24.984Z",
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
		"liquidityUsd": 2342460.27,
		"hash": "69a983d1cf9024a7d627427230bdaf5d5ae40651a34189d59f7f25cbc3539c08"
	},
	{
		"id": "10fa9149455a",
		"ts": "2026-11-12T09:12:25.215Z",
		"symbol": "RSC",
		"token": "0xFbB75A59193A3525a8825BeBe7D4b56899E2f7e1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 150415.09,
		"hash": "10fa9149455a0499d5977294a3e2bfb608da4211c9a1fa84f45a6b886b08a883"
	},
	{
		"id": "b2359eaa9321",
		"ts": "2026-11-12T09:12:25.469Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1831132.4,
		"hash": "b2359eaa93212a114d66204945c648f2bfb04dee904bbffbe0822dd1e3cf198a"
	},
	{
		"id": "4129970778b6",
		"ts": "2026-11-12T09:12:25.714Z",
		"symbol": "REVVY",
		"token": "0x3441e8fCdD380c4e7F5C7F55CCd599B2a2afCcCC",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 62416.8,
		"hash": "4129970778b6a19efb46e81c6bf8558c8f4862184eaca64f3a841c5e92b6191f"
	},
	{
		"id": "3a9df75c12f3",
		"ts": "2026-11-12T09:12:25.950Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 182890.55,
		"hash": "3a9df75c12f3587413ac20b8234c07f8eb2a4cf3b0fb8a9b0c7b2c1bd2d3a977"
	},
	{
		"id": "06677c3066a8",
		"ts": "2026-11-12T09:12:26.188Z",
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
		"liquidityUsd": 6859775.56,
		"hash": "06677c3066a8044530c0fb55176064f2f3af02b2f6b3b4f45b2a15567c075b81"
	},
	{
		"id": "5cac2c919d63",
		"ts": "2026-11-12T01:15:34.613Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 134375133.91,
		"hash": "5cac2c919d63526c4c84e3fed6d0e29363f8b49fc8cec755b3606ef67dedf87d"
	},
	{
		"id": "ba91545295df",
		"ts": "2026-11-12T01:15:34.870Z",
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
		"liquidityUsd": 15412927.16,
		"hash": "ba91545295dfded257e679df65f6f910b520a721a2a66098dfc60c26445f68d2"
	},
	{
		"id": "6d42c4a75b50",
		"ts": "2026-11-12T01:15:35.121Z",
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
		"liquidityUsd": 234048.44,
		"hash": "6d42c4a75b5055a307a20eb4a2480f9a25ee5550b32047ba6630be87d96e3235"
	},
	{
		"id": "1be98806cb35",
		"ts": "2026-11-12T01:15:35.386Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4244469.1,
		"hash": "1be98806cb356e8121579b6ba24b392b91cd34575fc450eb80c35154a22484ce"
	},
	{
		"id": "ee0d4ac05d2e",
		"ts": "2026-11-12T01:15:35.637Z",
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
		"liquidityUsd": 1137035.55,
		"hash": "ee0d4ac05d2e3974a5a574c09060b1f9f893ec5f23ed150d1c8aa1c2da94ba31"
	},
	{
		"id": "fa411446be3d",
		"ts": "2026-11-12T01:15:35.914Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 935899.25,
		"hash": "fa411446be3dd8a9bd247bbc5df06aea80ebb73c4fc17a0cdb6b3e4df5484665"
	},
	{
		"id": "6d9b3f324292",
		"ts": "2026-11-12T01:15:36.167Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4244469.1,
		"hash": "6d9b3f32429287f4eded433062d07acaf092244fdb9df8fbcfe4e92549f73e1a"
	},
	{
		"id": "2baca47a711c",
		"ts": "2026-11-12T01:15:36.433Z",
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
		"liquidityUsd": 1170608.63,
		"hash": "2baca47a711c6f366e82b2770a955fc4e506f8723a16402c58fb1dd386c90811"
	},
	{
		"id": "29fdd193a125",
		"ts": "2026-11-12T01:15:36.688Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 857221.99,
		"hash": "29fdd193a12559dc068b0e1753a6ed41aff55689caf7e8c8e273bf2043b33301"
	},
	{
		"id": "4d1bb9f7f92a",
		"ts": "2026-11-12T01:15:36.950Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1618354.39,
		"hash": "4d1bb9f7f92a9901eb94d5df3f9f2f21d7de989391d7d63cfd695e0cd05e9c61"
	},
	{
		"id": "c3bb5b9652ef",
		"ts": "2026-11-12T01:15:37.185Z",
		"symbol": "RSC",
		"token": "0xFbB75A59193A3525a8825BeBe7D4b56899E2f7e1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 153817.24,
		"hash": "c3bb5b9652ef097a0b73a03875c09c6ac9346f63fd8dcc6c3f3cd0f45ccca3af"
	},
	{
		"id": "91875e9e4d97",
		"ts": "2026-11-12T01:15:37.437Z",
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
		"liquidityUsd": 2385419.87,
		"hash": "91875e9e4d97472e15173ed809d7fd97555e73bbb18f7667a6f248537e26ec4d"
	},
	{
		"id": "5f34a3f98ce0",
		"ts": "2026-11-12T01:15:37.677Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1568916.13,
		"hash": "5f34a3f98ce09a20366a2111cd7995762458ddde66854d9833172092f51604f5"
	},
	{
		"id": "57937416af2d",
		"ts": "2026-11-12T01:15:37.927Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1788802.77,
		"hash": "57937416af2d9fb503e28c09809f0825f234c7400e6330c30d8ab43f4d1a0fb7"
	},
	{
		"id": "81e418821d19",
		"ts": "2026-11-12T01:15:38.164Z",
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
		"liquidityUsd": 1693712.78,
		"hash": "81e418821d19a6de7507700d9cc56c2069a07076d4a04d6096b58a5d665d9639"
	},
	{
		"id": "16c6479edfb7",
		"ts": "2026-11-12T01:15:38.414Z",
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
		"liquidityUsd": 6880880.28,
		"hash": "16c6479edfb76fbb5697212c00900bc3512bbad008140d4a9e7c52abd01ceaf1"
	},
	{
		"id": "ff53fbdffce9",
		"ts": "2026-11-12T01:15:38.649Z",
		"symbol": "REVVY",
		"token": "0x3441e8fCdD380c4e7F5C7F55CCd599B2a2afCcCC",
		"score": 65,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.3,
		"flags": [
			"medium_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 45990.1,
		"hash": "ff53fbdffce9342a29818eb6c37bc98dd260bc1f9a6336d5e79769a68a9f1765"
	},
	{
		"id": "9bec39f076fc",
		"ts": "2026-11-12T01:15:38.896Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3394112.9,
		"hash": "9bec39f076fc8469375d6d8477c7d82a04e0238b92cea858736c286b7281fed1"
	},
	{
		"id": "11001fab23d3",
		"ts": "2026-11-12T01:15:39.130Z",
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
		"liquidityUsd": 1166939.31,
		"hash": "11001fab23d3d5b5b96333f3f30df27ebded0485bffc30c59c4b7b5e0384a5e9"
	},
	{
		"id": "c27b8daa822c",
		"ts": "2026-11-11T18:19:10.218Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 135656095.9,
		"hash": "c27b8daa822c842a83976ec60f73cf84313a88bd4aae4eb926629a5d8f69c543"
	},
	{
		"id": "c6846de72f55",
		"ts": "2026-11-11T18:19:10.711Z",
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
		"liquidityUsd": 15646213.09,
		"hash": "c6846de72f5594fa1076006ba2368ce354e02679eb0ffa0f2a0a844471a2a558"
	},
	{
		"id": "220660fcf237",
		"ts": "2026-11-11T18:19:10.948Z",
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
		"liquidityUsd": 234737.31,
		"hash": "220660fcf2374e56bdb5e2f82a5a812e872dbb3d8e8a4d6f83c56b10581f6de4"
	},
	{
		"id": "349238d2e74a",
		"ts": "2026-11-11T18:19:11.206Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4313640.53,
		"hash": "349238d2e74a064606fcc49ac0da44e33088aa9871b77569d2938224eb7af21e"
	},
	{
		"id": "e66f25f922e0",
		"ts": "2026-11-11T18:19:11.448Z",
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
		"liquidityUsd": 1214457.51,
		"hash": "e66f25f922e0608f11452d79fa9abb524e153612d267a1db952742b686126144"
	},
	{
		"id": "5184cdfde411",
		"ts": "2026-11-11T18:19:11.694Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 957063.61,
		"hash": "5184cdfde41183835195b9860492ac7251fd3c87372e6f0eaae55eb1d5f6b326"
	},
	{
		"id": "f4e3225c71f1",
		"ts": "2026-11-11T18:19:11.941Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4313640.53,
		"hash": "f4e3225c71f1a832517f6f95f80b543f67f1394b570b21fc8eb2af9eb6138b1f"
	},
	{
		"id": "bea19b281076",
		"ts": "2026-11-11T18:19:12.194Z",
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
		"liquidityUsd": 1037448.28,
		"hash": "bea19b2810768b155f9fdb3a55dbf9339a93ed70519f04f3c4f7415c5ee45302"
	},
	{
		"id": "c2f0b8ef800c",
		"ts": "2026-11-11T18:19:12.434Z",
		"symbol": "RSC",
		"token": "0xFbB75A59193A3525a8825BeBe7D4b56899E2f7e1",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 145591.74,
		"hash": "c2f0b8ef800cb969797b721b59d5d81184b09b49ba5f9b964b640aff28b902ee"
	},
	{
		"id": "f94e44f7cb07",
		"ts": "2026-11-11T18:19:12.669Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1616144.24,
		"hash": "f94e44f7cb07cb838d5159e603876aff3b4bb576efe75ce87cc00edca1987b80"
	},
	{
		"id": "a85df102a2a9",
		"ts": "2026-11-11T18:19:12.893Z",
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
		"liquidityUsd": 2414158.44,
		"hash": "a85df102a2a9e15f84b671e8d0d15d0d220cc2112def5277987719e9e756e29f"
	},
	{
		"id": "06e6f461e380",
		"ts": "2026-11-11T18:19:13.112Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 868094.98,
		"hash": "06e6f461e380548efb1ced37ab985685c13c51e4929d47e11e009ec5b601fea0"
	},
	{
		"id": "eedaf71f0b22",
		"ts": "2026-11-11T18:19:13.338Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1767509.13,
		"hash": "eedaf71f0b229096fbf097c0581bcbc01536a9110c54e352a9da3fdb914f20e5"
	},
	{
		"id": "64d6a6fa6c26",
		"ts": "2026-11-11T18:19:13.557Z",
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
		"liquidityUsd": 7042657.55,
		"hash": "64d6a6fa6c26fbd620b6323fab3498ad5423916a6eaa9ca5783caf7940a27e7f"
	},
	{
		"id": "f0103bcf490b",
		"ts": "2026-11-11T18:19:13.792Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1572753.09,
		"hash": "f0103bcf490bf1a676622d55619e0427a1f648239c837dc173573f831056869a"
	},
	{
		"id": "155ce31c9139",
		"ts": "2026-11-11T18:19:14.013Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2378969.46,
		"hash": "155ce31c913974fa3c48b6b8f3980b83ef7d0eca2e6762984677f5391af4aca7"
	},
	{
		"id": "faef60715cb8",
		"ts": "2026-11-11T18:19:14.237Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 127094.66,
		"hash": "faef60715cb8fcef2d641c9afc54e5c3cf23d9dfdadf6863301964737fcbeb9c"
	},
	{
		"id": "e1a320f8a597",
		"ts": "2026-11-11T18:19:14.459Z",
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
		"liquidityUsd": 666446.91,
		"hash": "e1a320f8a5971c7e3e8ede3ddf73238c4a347042fb2da1a10e1678d416c9954a"
	},
	{
		"id": "5e46338bb064",
		"ts": "2026-11-11T18:19:14.684Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 641104.77,
		"hash": "5e46338bb06401c9fc57ca920e4d512601556ce6b6d7091bb71a7f0054bfa3c3"
	},
	{
		"id": "95aafc9a11b8",
		"ts": "2026-11-11T10:15:09.630Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 133795939.05,
		"hash": "95aafc9a11b86d58bcd1c59939e4c834f3c7ce101d6b19c9fd59ba7215ac6ea4"
	},
	{
		"id": "43acc10f534f",
		"ts": "2026-11-11T10:15:09.918Z",
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
		"liquidityUsd": 15443806.14,
		"hash": "43acc10f534f14c59de1f45b1ff24ddd4dbb3e3d1917d60abc04902cc20a2eae"
	},
	{
		"id": "e842ecd7ea76",
		"ts": "2026-11-11T10:15:10.217Z",
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
		"liquidityUsd": 232758.41,
		"hash": "e842ecd7ea76073e3d01575bb7e1153387847f4596c882df0b71152325eb9955"
	},
	{
		"id": "eb4022f8efa5",
		"ts": "2026-11-11T10:15:10.509Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4278046.22,
		"hash": "eb4022f8efa5908d80e93c116ac238ed058ad520233571d1e380008f476aebd7"
	},
	{
		"id": "cd1207a5d844",
		"ts": "2026-11-11T10:15:11.025Z",
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
		"liquidityUsd": 1356167.58,
		"hash": "cd1207a5d8442a67f3723bc3a499078016112dac7308cc99ae78cd19d57c6e81"
	},
	{
		"id": "d8f4e2f14c4e",
		"ts": "2026-11-11T10:15:11.341Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 942505.65,
		"hash": "d8f4e2f14c4e0e5cb3dfe44620204ac19f5493bd1347853bd0a030ebd243241f"
	},
	{
		"id": "6fd4abacd205",
		"ts": "2026-11-11T10:15:11.571Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 127783.81,
		"hash": "6fd4abacd20589dc295fefcda0018cdf9901499556e5bfbe215094cbff2aeebf"
	},
	{
		"id": "eaecce5e4136",
		"ts": "2026-11-11T10:15:11.841Z",
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
		"liquidityUsd": 1491212.02,
		"hash": "eaecce5e4136f5de8aba51059b08182f7173da0eee1f4ab43430700fca488a20"
	},
	{
		"id": "4d35e4dd9834",
		"ts": "2026-11-11T10:15:12.105Z",
		"symbol": "RSC",
		"token": "0xFbB75A59193A3525a8825BeBe7D4b56899E2f7e1",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 148164.46,
		"hash": "4d35e4dd9834ef4df98649366cc123aa63ede8e1dda42631289d0b34ffe6878b"
	},
	{
		"id": "1dc829f1828c",
		"ts": "2026-11-11T10:15:12.367Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1607685.92,
		"hash": "1dc829f1828cafa4994813d98970dde5b3df9c8553e671129bcc5c75e9087daa"
	},
	{
		"id": "1a4d2d3b0c31",
		"ts": "2026-11-11T10:15:12.593Z",
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
		"liquidityUsd": 6738870.9,
		"hash": "1a4d2d3b0c31e186a5e3a7d1a755e2ab213374fbc179ddba4eaf4e27aa03ced9"
	},
	{
		"id": "72a5c91986f0",
		"ts": "2026-11-11T10:15:12.821Z",
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
		"liquidityUsd": 2377912.35,
		"hash": "72a5c91986f000c495ef8ed4d59df287d0e21968928b8c534849fa42bf76a9b1"
	},
	{
		"id": "b992aac63f4c",
		"ts": "2026-11-11T10:15:13.035Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 875871.72,
		"hash": "b992aac63f4cc047edd7d3db8dbfe3604c97002e2efe2beeaadcfcaa87829cf9"
	},
	{
		"id": "8339a3f2c65b",
		"ts": "2026-11-11T10:15:13.260Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 127767.66,
		"hash": "8339a3f2c65b708b58f5018a85ba8c07be940ecacdbce3b64b40c82fe420cb27"
	},
	{
		"id": "3f6d0779353e",
		"ts": "2026-11-11T10:15:13.493Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1620063.25,
		"hash": "3f6d0779353e57cafef7ea60ab07a4da8d0ebaa16b8a216be5e4a131f88e0876"
	},
	{
		"id": "0f2b2f796ce9",
		"ts": "2026-11-11T10:15:13.728Z",
		"symbol": "MUc",
		"token": "0xb200000000000000000000Fd2f87532B90095211",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 553641.67,
		"hash": "0f2b2f796ce9905ef7a12a6d3df9a12b458415452810746aef95cf82ce8b1c71"
	},
	{
		"id": "117355032171",
		"ts": "2026-11-11T10:15:13.956Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1552588.35,
		"hash": "1173550321718eefbf0b1206ff52cf07564084bed1291217a1612e1eb71dec1e"
	},
	{
		"id": "c19d66e02dc0",
		"ts": "2026-11-11T10:15:14.182Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 397930.07,
		"hash": "c19d66e02dc01600a2b1cd35d585928a402d74a80a3698f6f705a054ef06fe76"
	},
	{
		"id": "5ceaf0a439c5",
		"ts": "2026-11-11T02:29:32.461Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 133751324.07,
		"hash": "5ceaf0a439c5928ceb14e1b3b85b827886048efc0cd1a0ea49c7b10eaa4159df"
	},
	{
		"id": "5d4ddd612dbb",
		"ts": "2026-11-11T02:29:32.747Z",
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
		"liquidityUsd": 15334361.55,
		"hash": "5d4ddd612dbbed7f13b81cefb665e492f4e227eebf90c53b8343f265422849e1"
	},
	{
		"id": "1c2fb79a51e7",
		"ts": "2026-11-11T02:29:32.993Z",
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
		"liquidityUsd": 231376.31,
		"hash": "1c2fb79a51e7d465c8542defd44f73c6b2f4254674586587aada4d1b35541bfa"
	},
	{
		"id": "7da54f167805",
		"ts": "2026-11-11T02:29:33.253Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4253645.42,
		"hash": "7da54f167805ba0141498bfa0b85adec9e961a1fafdd1f2c2d614bed50e08b38"
	},
	{
		"id": "375816576801",
		"ts": "2026-11-11T02:29:33.521Z",
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
		"liquidityUsd": 1290292.03,
		"hash": "3758165768015f1c5c82964d906605fd18dba127569aacb9900e52613736dee0"
	},
	{
		"id": "db43c2e64fc1",
		"ts": "2026-11-11T02:29:33.772Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 942557.97,
		"hash": "db43c2e64fc186c3ff4c54d1a13fdcae8ea356b1eb03ae47aaedad7068da59ee"
	},
	{
		"id": "71e6619dc0cc",
		"ts": "2026-11-11T02:29:34.101Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 127780.64,
		"hash": "71e6619dc0cc965f3efa971ac8454046fe4463c825b4f6c0c188135384738f44"
	},
	{
		"id": "2d6e41740fb5",
		"ts": "2026-11-11T02:29:34.357Z",
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
		"liquidityUsd": 1462729,
		"hash": "2d6e41740fb55368fa7e64be0df801b810a0b85592df1eb13d8fef1a45f9dcb9"
	},
	{
		"id": "cda6f0cfa9dc",
		"ts": "2026-11-11T02:29:34.601Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1611758.94,
		"hash": "cda6f0cfa9dc6925053337d9903765521441e42a2ffb6a955b864fc037fc59e3"
	},
	{
		"id": "be2b1bc575f8",
		"ts": "2026-11-11T02:29:34.894Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 402793.33,
		"hash": "be2b1bc575f8f5ae4d7cc8542162d99302a7111c30cc71db050246013c02942a"
	},
	{
		"id": "4b535408764d",
		"ts": "2026-11-11T02:29:35.170Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 861054.21,
		"hash": "4b535408764ddf87b37328d0975ab83a734acb569bd9fe8ba7c64657d3567efb"
	}
]
