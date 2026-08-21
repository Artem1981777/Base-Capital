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
	"updatedAt": "2026-08-21T12:38:07.408Z",
	"tokensScored": 13049,
	"verdictsIssued": 13049,
	"safe": 11256,
	"risky": 932,
	"likelyRug": 861,
	"ticks": 764
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "805adcff47b4",
		"ts": "2026-08-21T12:38:01.115Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111742520.42,
		"hash": "805adcff47b4a97bcbbda7d01d8dea2aaf2d36464b6bad6086d44f3a22a5777f"
	},
	{
		"id": "cc15f26b6fd2",
		"ts": "2026-08-21T12:38:01.848Z",
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
		"liquidityUsd": 14727425.8,
		"hash": "cc15f26b6fd266fe970461803e49ca29036c8f20ee0e4499e4980e57d0445307"
	},
	{
		"id": "76b37e41d563",
		"ts": "2026-08-21T12:38:02.291Z",
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
		"liquidityUsd": 922510.58,
		"hash": "76b37e41d563b583802313ae6dcc61c04b41e138ab98e61fd761f509cf3f2e1c"
	},
	{
		"id": "1fcfe2b4adae",
		"ts": "2026-08-21T12:38:02.858Z",
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
		"liquidityUsd": 28292673.01,
		"hash": "1fcfe2b4adae59a8b9f71a8b3d9eeee88e975e245cc3364599234eb9bc1c51d9"
	},
	{
		"id": "2ddee30b2839",
		"ts": "2026-08-21T12:38:03.465Z",
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
		"liquidityUsd": 3292533.73,
		"hash": "2ddee30b2839dc34ebab0e0b649aff349fbdcf1ff62ac580139abb00d4b87d0b"
	},
	{
		"id": "afb2b160f3be",
		"ts": "2026-08-21T12:38:03.945Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1138465.08,
		"hash": "afb2b160f3bea8ff0440c68cb18f89c8947c72fff1441b9ccb1a9c26d01847db"
	},
	{
		"id": "884b754a7b8f",
		"ts": "2026-08-21T12:38:04.184Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28292673.01,
		"hash": "884b754a7b8f0e4335b655d10d86e58f1748beb564a474729f585db60872a457"
	},
	{
		"id": "e084a417ec4f",
		"ts": "2026-08-21T12:38:04.493Z",
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
		"liquidityUsd": 1639095.29,
		"hash": "e084a417ec4f27fd287d43e701c045801ff8585b4f68d7da3b65a4b16dcbd849"
	},
	{
		"id": "226d473d4bf4",
		"ts": "2026-08-21T12:38:04.890Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 967759.72,
		"hash": "226d473d4bf4e91dd96a598259bd09040683f1492379bff3cb967fab050d3643"
	},
	{
		"id": "ee33006e7572",
		"ts": "2026-08-21T12:38:05.318Z",
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
		"liquidityUsd": 11591354.54,
		"hash": "ee33006e7572b99b10d30b1c66897ed3bcbfb6c6ddc0bb7175ecfdb4f89f0370"
	},
	{
		"id": "427b1023894b",
		"ts": "2026-08-21T12:38:05.560Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 283015.59,
		"hash": "427b1023894bf2ec39cba6baa66583db992b709c0fd20f7099cbbe128338b072"
	},
	{
		"id": "68bf37754b97",
		"ts": "2026-08-21T12:38:05.790Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3178093.79,
		"hash": "68bf37754b971d01fcbf8be68e9f2516da5ff2e4dc16066f5d2ad2df40a3e7a1"
	},
	{
		"id": "0d28ad60c8bf",
		"ts": "2026-08-21T12:38:06.030Z",
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
		"liquidityUsd": 440328.73,
		"hash": "0d28ad60c8bf88c8e203ad6cad5effc961eb4e9ef62665f1de44d229954f25b4"
	},
	{
		"id": "94f10f1e9489",
		"ts": "2026-08-21T12:38:06.257Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 601510.81,
		"hash": "94f10f1e948952eed6e7ff095108de11fcddba4a4f053162be78cc39488aa3a0"
	},
	{
		"id": "dc7e95462df2",
		"ts": "2026-08-21T12:38:06.477Z",
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
		"liquidityUsd": 806875.35,
		"hash": "dc7e95462df2ec199c29a7fc4421622580a2326db844d3a7a49bc73bb7a2bd17"
	},
	{
		"id": "9f07213c35c4",
		"ts": "2026-08-21T12:38:06.716Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1758546.54,
		"hash": "9f07213c35c4112f2b48ed484598f218f204782dac1efb61091766c391fa4e4c"
	},
	{
		"id": "445e9e5a6143",
		"ts": "2026-08-21T12:38:06.946Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4234330.63,
		"hash": "445e9e5a614328087dd07c69a458f259f31acd896524d578a47db9a2e3f15001"
	},
	{
		"id": "d00cc24dbd5a",
		"ts": "2026-08-21T12:38:07.168Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4956056.27,
		"hash": "d00cc24dbd5ae8aa74a1325bbfe764315f11af80444a577cacf3fb002688cc57"
	},
	{
		"id": "62a8f533043f",
		"ts": "2026-08-21T12:38:07.408Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 987762.04,
		"hash": "62a8f533043f2b1fb6dcefc79d0b0ef95a894c5a89b64494f46d500102b7fe33"
	},
	{
		"id": "190e4bdcebf4",
		"ts": "2026-08-21T11:21:13.750Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111762567.15,
		"hash": "190e4bdcebf4f2535331c6138ba8c61e61f037f7c76dc0c5980df782ce9a8bac"
	},
	{
		"id": "78d2ff7e90fd",
		"ts": "2026-08-21T11:21:14.176Z",
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
		"liquidityUsd": 13498340.33,
		"hash": "78d2ff7e90fd8516cd21f33115a2ffef02b3f65a5d2d763310984d323afcad1c"
	},
	{
		"id": "92139d898d3e",
		"ts": "2026-08-21T11:21:14.422Z",
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
		"liquidityUsd": 921851.1,
		"hash": "92139d898d3e6b19412f27c87d014e62b60a4b119b93de9b2fe1ff4738ab642f"
	},
	{
		"id": "82b12230047e",
		"ts": "2026-08-21T11:21:14.652Z",
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
		"liquidityUsd": 28387972.45,
		"hash": "82b12230047eb98d9c9febd4262416404a6f3eb23f4847cac8bec9a565afbec6"
	},
	{
		"id": "4fc2b0959f5d",
		"ts": "2026-08-21T11:21:14.897Z",
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
		"liquidityUsd": 3276848.28,
		"hash": "4fc2b0959f5df58c959e04aa0d9445d86f6c84ab44c12a5784a83890c04936f5"
	},
	{
		"id": "5886e8d207ac",
		"ts": "2026-08-21T11:21:15.129Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1147280.9,
		"hash": "5886e8d207ac76d97277be7081aafe3917d0c72befcecb4a5faa0c2eb1de2a2a"
	},
	{
		"id": "3be1a7c4e0f0",
		"ts": "2026-08-21T11:21:15.484Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28387967.57,
		"hash": "3be1a7c4e0f0dc2aec15a3d9133d0c34986fb1c29f1f0008e6bbae3eb624ab90"
	},
	{
		"id": "d3be3503e3d0",
		"ts": "2026-08-21T11:21:15.714Z",
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
		"liquidityUsd": 1641112.89,
		"hash": "d3be3503e3d0894f767805c0d6f72fddc0bcc7c5e697be23ae51110e212ac9aa"
	},
	{
		"id": "7e486b29afed",
		"ts": "2026-08-21T11:21:16.870Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 889036.29,
		"hash": "7e486b29afed4e93711dc909259507e0124d073dcd229bc08fe449486df85a29"
	},
	{
		"id": "bdf438d567e8",
		"ts": "2026-08-21T11:21:17.116Z",
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
		"liquidityUsd": 11534398.96,
		"hash": "bdf438d567e89e860fdb0a1c496ac1089e021e51f35a5696db8b20ddfefde402"
	},
	{
		"id": "892021ff4609",
		"ts": "2026-08-21T11:21:17.329Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 259510.21,
		"hash": "892021ff4609c495ac7f2f9b6fe4f4b2f506ad050741a4278e6a8ff7f487d130"
	},
	{
		"id": "74ec05b15935",
		"ts": "2026-08-21T11:21:17.708Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3129668.01,
		"hash": "74ec05b15935d03e56fe8102e9f7a3631e4cb7805e97e345af37622cfe5b3500"
	},
	{
		"id": "46b35ebfcc58",
		"ts": "2026-08-21T11:21:17.920Z",
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
		"liquidityUsd": 452171.99,
		"hash": "46b35ebfcc58707d5144736cfdf10411440c821db15c01c16b69cc5d593f2fe8"
	},
	{
		"id": "28b52051bd43",
		"ts": "2026-08-21T11:21:18.145Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 605478.82,
		"hash": "28b52051bd43f3b5601583d4cb5a8a4338b8a2dcbf94ce9c2fc1a8b200a8555e"
	},
	{
		"id": "11d83e62a75e",
		"ts": "2026-08-21T11:21:18.356Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4948923.2,
		"hash": "11d83e62a75e387c56c950ea8dd8c20a81718000527d4e177cf6c3948f381850"
	},
	{
		"id": "40daf5c7f69f",
		"ts": "2026-08-21T11:21:18.583Z",
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
		"liquidityUsd": 830804.47,
		"hash": "40daf5c7f69f5739993f78d3126abbb8efad8760b4f983768ce28f975b4e71a4"
	},
	{
		"id": "704dcf989099",
		"ts": "2026-08-21T11:21:18.795Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1790607.11,
		"hash": "704dcf98909911a25b74a9972f2444dfa75f122dd61c1d3d29cdbd6944067922"
	},
	{
		"id": "d930f9066a82",
		"ts": "2026-08-21T11:21:19.020Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4203746.63,
		"hash": "d930f9066a82e4ec9383cde82e2ac6857505840f59218312efed79b86f2e01ff"
	},
	{
		"id": "de8d72264f04",
		"ts": "2026-08-21T11:21:19.232Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 989835.95,
		"hash": "de8d72264f046389545734c570aeaaf0f4e850a2bc320ba19baee756c59bec19"
	},
	{
		"id": "9523d12c2d29",
		"ts": "2026-08-21T10:25:34.452Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112142071.44,
		"hash": "9523d12c2d294d36c6473e0d6b46987a11fe45e46aa47755ff4c3e30b5f34eb1"
	},
	{
		"id": "59998bb7b7ea",
		"ts": "2026-08-21T10:25:34.925Z",
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
		"liquidityUsd": 19647136.76,
		"hash": "59998bb7b7eaa2082a43b93e529fa93221eaebd3124accee00c4ce016b9b9544"
	},
	{
		"id": "3c4247a9be9d",
		"ts": "2026-08-21T10:25:35.186Z",
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
		"liquidityUsd": 925168.95,
		"hash": "3c4247a9be9d5404aca36d7514c747fffd4a2932ae2b6521c5a8b9d80de6fb6c"
	},
	{
		"id": "dcdf1e7b46cc",
		"ts": "2026-08-21T10:25:35.443Z",
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
		"liquidityUsd": 28420479.67,
		"hash": "dcdf1e7b46ccbb1e0930f7ec30fbcbfc62ab900d96299e7ec91047933e310bc2"
	},
	{
		"id": "83b5d598751c",
		"ts": "2026-08-21T10:25:35.714Z",
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
		"liquidityUsd": 3269711.96,
		"hash": "83b5d598751c3dfe2fe75a717d73b38266cfef2188960db19a466c5614113c65"
	},
	{
		"id": "9d3102824c53",
		"ts": "2026-08-21T10:25:35.974Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1157872.83,
		"hash": "9d3102824c537a019bc4bbc5c19ef6721915fe944330bff99034dfb996464f08"
	},
	{
		"id": "7cd472a4df5f",
		"ts": "2026-08-21T10:25:36.229Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28420479.67,
		"hash": "7cd472a4df5fbff7d0bdafd4739ba2a5331687faebf1083a3e664ed745ab05df"
	},
	{
		"id": "948fb590a3f0",
		"ts": "2026-08-21T10:25:36.502Z",
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
		"liquidityUsd": 1661703.64,
		"hash": "948fb590a3f03f6aa432b48ddae5573dda9397172cb5a11b9f7c4c4752df365a"
	},
	{
		"id": "c4c29cff5925",
		"ts": "2026-08-21T10:25:36.883Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 941178.38,
		"hash": "c4c29cff5925d5f8b595146be63d876f93ecdea15a7ab1e071712f70a1389093"
	},
	{
		"id": "aa8ad0adc2ee",
		"ts": "2026-08-21T10:25:37.150Z",
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
		"liquidityUsd": 11702486.03,
		"hash": "aa8ad0adc2ee22258fe793844498606ee2fbe9d339de5ab90d8a3a6c0cb804ca"
	},
	{
		"id": "674fdd0c3810",
		"ts": "2026-08-21T10:25:37.389Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 256531.38,
		"hash": "674fdd0c3810cbb521d72dcc9619f2334535f86a5dbdecbb739af8537d8522a2"
	},
	{
		"id": "f8864088a169",
		"ts": "2026-08-21T10:25:37.630Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3179255.46,
		"hash": "f8864088a1693456f9a0e9ffe1b75262fae521cdfc839b524837ac591f93fe8d"
	},
	{
		"id": "77ad6ec0a368",
		"ts": "2026-08-21T10:25:37.868Z",
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
		"liquidityUsd": 444327.48,
		"hash": "77ad6ec0a36876ee70258d1c779349f855d6d1e570cab45eabcea54173a3434c"
	},
	{
		"id": "a975fd99a611",
		"ts": "2026-08-21T10:25:38.108Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 615302.22,
		"hash": "a975fd99a61193de7e25ec2de973ff3f2290142a70a1bb1030dccab3f782ce9f"
	},
	{
		"id": "163294f68a85",
		"ts": "2026-08-21T10:25:38.353Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4784480.4,
		"hash": "163294f68a851cd32a800f46de44064923b095246e2fe4f093835eef6e4f5dba"
	},
	{
		"id": "05c1809e538b",
		"ts": "2026-08-21T10:25:38.588Z",
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
		"liquidityUsd": 820051.74,
		"hash": "05c1809e538b49c7dd5cde51cd7922014cdafaecb0a2c26631c3217094bb8f2a"
	},
	{
		"id": "0ab99792cef6",
		"ts": "2026-08-21T10:25:38.825Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1807913.38,
		"hash": "0ab99792cef6f8acca3e3b223c667d9b24591c3b0a8d134ab6a9cc61edb97f03"
	},
	{
		"id": "4af9e7a580cf",
		"ts": "2026-08-21T10:25:39.064Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4242332.62,
		"hash": "4af9e7a580cf3198c0663a42deab15041b4c82c7df2ce140684d7e90c3ca3b29"
	},
	{
		"id": "093e7d7a111a",
		"ts": "2026-08-21T10:25:39.306Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1011314.2,
		"hash": "093e7d7a111aee8677f203205489e4583fed52af12115c8a9d8d0bb967cb826b"
	},
	{
		"id": "b7c388d84729",
		"ts": "2026-08-21T09:32:22.446Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112170279.96,
		"hash": "b7c388d8472940f60ec70baff1adcb9c27abe6e083f5f8ba8ddf8778efd696a9"
	},
	{
		"id": "c843b617c9e9",
		"ts": "2026-08-21T09:32:22.906Z",
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
		"liquidityUsd": 15332623.4,
		"hash": "c843b617c9e94d5996b9aa8621e966960ca619907bcdf2e0f38701721ed91494"
	},
	{
		"id": "7f72893722ac",
		"ts": "2026-08-21T09:32:23.167Z",
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
		"liquidityUsd": 928893.39,
		"hash": "7f72893722ac00a9953ba8db7750cc7fa36b0e4ebc39d727db34483708b6c85a"
	},
	{
		"id": "779e999ea7d0",
		"ts": "2026-08-21T09:32:23.423Z",
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
		"liquidityUsd": 28390419.4,
		"hash": "779e999ea7d05400b96f30448e26450438de9670b8bd96465ae6450be6c56cb8"
	},
	{
		"id": "caae6044c1f8",
		"ts": "2026-08-21T09:32:23.705Z",
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
		"liquidityUsd": 3241065.53,
		"hash": "caae6044c1f8b7b196671408d01f56716a256f67ed0042bee560c480ab064a3a"
	},
	{
		"id": "6497c2631a1e",
		"ts": "2026-08-21T09:32:23.959Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1133876.92,
		"hash": "6497c2631a1e7178bf4c98361219f719d0cfb603eb2663872669ec0d78adf86a"
	},
	{
		"id": "dde5fbd431b8",
		"ts": "2026-08-21T09:32:24.208Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28390419.47,
		"hash": "dde5fbd431b83668ce56172bf3d4f92e0214125c27b032d36bec7ae797aa0292"
	},
	{
		"id": "662b0afb4ed7",
		"ts": "2026-08-21T09:32:24.503Z",
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
		"liquidityUsd": 1650008.55,
		"hash": "662b0afb4ed7c86698badd6b6b01570155b4bddb2a693a533cc7279fbdbb6434"
	},
	{
		"id": "61abe0634ba9",
		"ts": "2026-08-21T09:32:24.748Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 918889.43,
		"hash": "61abe0634ba9441f75262c6a602fe8cdacd1927e0dad2b7161e20833a8f08749"
	},
	{
		"id": "e4bee6a2a7e3",
		"ts": "2026-08-21T09:32:25.016Z",
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
		"liquidityUsd": 11694926.95,
		"hash": "e4bee6a2a7e39ef34cbfb51ced99e2d8c1940e9a4a8fbbaad7aa812a6b9d597e"
	},
	{
		"id": "9a0306f3d906",
		"ts": "2026-08-21T09:32:25.249Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 255833.26,
		"hash": "9a0306f3d9060acb2e370f90f64d5ccafed9be593825551cbfa5347e68508555"
	},
	{
		"id": "f37f6c5db3bc",
		"ts": "2026-08-21T09:32:25.481Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3148952.61,
		"hash": "f37f6c5db3bc40dd96f073a63ca9972d92cee1b8fe6c0f7e8c153e6ded913ee7"
	},
	{
		"id": "bc855ad2591d",
		"ts": "2026-08-21T09:32:25.711Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 606279.66,
		"hash": "bc855ad2591d1dcb79a526d983eb37e3f1b990000927487c199179c6bf59ab57"
	},
	{
		"id": "f8834e390a8c",
		"ts": "2026-08-21T09:32:25.940Z",
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
		"liquidityUsd": 434868.84,
		"hash": "f8834e390a8cbd81dc1866d1ccf6b5805b85aa0ca5fca1cb415d9001bf5661d4"
	},
	{
		"id": "d5bd2144549d",
		"ts": "2026-08-21T09:32:26.168Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4488640.63,
		"hash": "d5bd2144549d6448e21b45fc7065cd8c69d5aa90eb15f7ef0d6bae077b371042"
	},
	{
		"id": "9e0f68eb97fd",
		"ts": "2026-08-21T09:32:26.749Z",
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
		"liquidityUsd": 816916.96,
		"hash": "9e0f68eb97fdf8f88c4dc937f413c2447af6fb44d9b271e1df6fd18e76925a4e"
	},
	{
		"id": "8456e7abffd3",
		"ts": "2026-08-21T09:32:26.984Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1813227.67,
		"hash": "8456e7abffd39e7df902b671d94a7593dc9e9575be389829b84db90929efaf7f"
	},
	{
		"id": "ffd0187da0f3",
		"ts": "2026-08-21T09:32:27.216Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4211859.6,
		"hash": "ffd0187da0f37759ab02ec4a5d1c9937de41d12ecbf956bf66c86e3f69c0420d"
	},
	{
		"id": "19989ac810da",
		"ts": "2026-08-21T09:32:27.447Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1010192.67,
		"hash": "19989ac810daec016ae5ae14cce71adb74ae28e96c5ca84c03644f3a56c22d6c"
	},
	{
		"id": "04ea492a9c40",
		"ts": "2026-08-21T08:35:35.572Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112300368.94,
		"hash": "04ea492a9c40efcfe567cdcd9a488b8d9f7d1405c132d6997275bf338f1a0b3d"
	},
	{
		"id": "33bf11a88b55",
		"ts": "2026-08-21T08:35:36.210Z",
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
		"liquidityUsd": 17017239.71,
		"hash": "33bf11a88b55a21e3cdb654b8f2c229b3c88f1312ecec58ee530c8416cf019ee"
	},
	{
		"id": "293183f644ff",
		"ts": "2026-08-21T08:35:36.645Z",
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
		"liquidityUsd": 919091.6,
		"hash": "293183f644ff58b8cec53b041b8a1fd419f4666618f2204f66dfa64cea2c7775"
	},
	{
		"id": "89183f742e94",
		"ts": "2026-08-21T08:35:37.202Z",
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
		"liquidityUsd": 28650250.85,
		"hash": "89183f742e949e8203b6495651fd57e987f526428b5d717786b54a453ad8c669"
	},
	{
		"id": "18dbdcaec6e3",
		"ts": "2026-08-21T08:35:37.663Z",
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
		"liquidityUsd": 3252024.21,
		"hash": "18dbdcaec6e3dfad355fac492d3a10e2adacde6f67870bb65bc5187153796c4f"
	},
	{
		"id": "1c6544b9dfcd",
		"ts": "2026-08-21T08:35:37.893Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1129008.04,
		"hash": "1c6544b9dfcd5a3a8e7027b6f4b3c15f7ce9d2615229a19c69b4d58e2ee3b277"
	},
	{
		"id": "f518b8eaeed3",
		"ts": "2026-08-21T08:35:38.146Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28650250.85,
		"hash": "f518b8eaeed310e3de265aa4afd97bd4d58e2f27e6dfebe5e17f38ec7fb82f1d"
	},
	{
		"id": "f1ce594c9b6c",
		"ts": "2026-08-21T08:35:38.415Z",
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
		"liquidityUsd": 1654925.27,
		"hash": "f1ce594c9b6c6649aa977dc6cd6c136f4dbcd6f8b5d82231fa6eaf983c4c55e3"
	},
	{
		"id": "47adb3af3479",
		"ts": "2026-08-21T08:35:38.670Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 937130.63,
		"hash": "47adb3af3479546254a833b0941626004ad3c32dfbd37b1e79a5df6aa2cbb9b5"
	},
	{
		"id": "8e2993ef40a8",
		"ts": "2026-08-21T08:35:39.097Z",
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
		"liquidityUsd": 11935291.69,
		"hash": "8e2993ef40a80406d319931291ef14c4f82cde1fb0a799e08cc0f35e2adb9dbe"
	},
	{
		"id": "ab620cf20713",
		"ts": "2026-08-21T08:35:39.314Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 259329.07,
		"hash": "ab620cf20713f8f78b7234a2807ecd13ae0f2b4021b1d8fbd8424f91d35b8bb7"
	},
	{
		"id": "695160963328",
		"ts": "2026-08-21T08:35:39.550Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3234267.54,
		"hash": "695160963328b938b09dddfa0dbacfb4953f22f609e731179f08f711b9fff95b"
	},
	{
		"id": "c21db920af35",
		"ts": "2026-08-21T08:35:39.774Z",
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
		"liquidityUsd": 443859.85,
		"hash": "c21db920af352e7bc951a49df460e48f0053cbd3628d11e33d0846dba3cd4293"
	},
	{
		"id": "a76404ae6571",
		"ts": "2026-08-21T08:35:39.986Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 606843.59,
		"hash": "a76404ae65716fe1f6376ccd35ddb678cf78d1ef24e96f3c3a81a0f9d0b04561"
	},
	{
		"id": "579d7c727f95",
		"ts": "2026-08-21T08:35:40.204Z",
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
		"liquidityUsd": 4509862.02,
		"hash": "579d7c727f955d2f26c50d81adb4a2a04660ef6ad2e03c3f4058f5d8c2c8dc6e"
	},
	{
		"id": "7592c6b4df7e",
		"ts": "2026-08-21T08:35:40.442Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1828362.16,
		"hash": "7592c6b4df7e5e62b6b94b41c587aec5a265803a49c1e2d771692b413b60efbe"
	},
	{
		"id": "176b40c0a5a0",
		"ts": "2026-08-21T08:35:40.812Z",
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
		"liquidityUsd": 840370.44,
		"hash": "176b40c0a5a0fc98e38371adbcc2b43766a826fc10132a7c4e92d59f69d93e2c"
	},
	{
		"id": "1d66296788cf",
		"ts": "2026-08-21T08:35:41.029Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4227791.15,
		"hash": "1d66296788cf8b16ce15564a838d47e5ad9e8e07fc4a32e33e5316bb3f9dc207"
	},
	{
		"id": "360abe8ee9e0",
		"ts": "2026-08-21T08:35:41.265Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1016696.47,
		"hash": "360abe8ee9e017f1d9bc097bc2fb502a5be358905b845cab3e3b74300054c5bc"
	},
	{
		"id": "b52f13df4498",
		"ts": "2026-08-21T07:39:14.594Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112106855.58,
		"hash": "b52f13df4498357cd574f528ef565252abb84f5ed4ce273083b5aaf575f735f8"
	},
	{
		"id": "5b980bfa0013",
		"ts": "2026-08-21T07:39:15.224Z",
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
		"liquidityUsd": 13801757.87,
		"hash": "5b980bfa00131a7ee7008deb1b0f5387a39904706869c715e11f64a66dcfc316"
	},
	{
		"id": "bf63c97c1a50",
		"ts": "2026-08-21T07:39:15.633Z",
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
		"liquidityUsd": 914641.02,
		"hash": "bf63c97c1a50c938532be810add8f8c6f7e05f22830f4f8f7067c2ec7239a58e"
	},
	{
		"id": "49a75fa90dfe",
		"ts": "2026-08-21T07:39:15.853Z",
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
		"liquidityUsd": 28486475.15,
		"hash": "49a75fa90dfe6ab5e6765b6ca06c152e35956b85f6366725e83af423f72cb833"
	},
	{
		"id": "c0410c5b77fe",
		"ts": "2026-08-21T07:39:16.082Z",
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
		"liquidityUsd": 3227836.6,
		"hash": "c0410c5b77feffed6c0ef64b988e52b480d752414ef1e6c5c2695c2b2a0f8d46"
	},
	{
		"id": "8f27579bcd9e",
		"ts": "2026-08-21T07:39:16.329Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1117989.9,
		"hash": "8f27579bcd9edb071d6b2dbc8c5c0b636425e774b5efe7e2f7e5205514a84ab7"
	},
	{
		"id": "7e0015c085b3",
		"ts": "2026-08-21T07:39:16.549Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28486475.15,
		"hash": "7e0015c085b3c70cb65a92ac1c491dc7d30a2bc8e11f133b35ef3951acbdd54d"
	},
	{
		"id": "6131c645e6a3",
		"ts": "2026-08-21T07:39:16.766Z",
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
		"liquidityUsd": 1640826.59,
		"hash": "6131c645e6a3b76ce464f8093e26947f98d7c56bcc711bf8a54d8636c6fd869f"
	},
	{
		"id": "825b5097acab",
		"ts": "2026-08-21T07:39:16.986Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 928698.69,
		"hash": "825b5097acaba4d2408886725de65afc24bbe92ac997bdcf540d57b5aed036bb"
	},
	{
		"id": "a954c2462011",
		"ts": "2026-08-21T07:39:17.419Z",
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
		"liquidityUsd": 11837374.76,
		"hash": "a954c2462011515fa2023bced82140a80d39413f3e792184a764eac221c3685a"
	},
	{
		"id": "a5a4a809c442",
		"ts": "2026-08-21T07:39:17.622Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 265212.22,
		"hash": "a5a4a809c4429028bb6b92a5396164b50394f5edab05141fde270241a3f6acce"
	},
	{
		"id": "d9dcafd56e05",
		"ts": "2026-08-21T07:39:17.827Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3229247.9,
		"hash": "d9dcafd56e05da5263ea93055387c88ce2f4a42a556b8e675c0f9a5ddd1fd53b"
	},
	{
		"id": "a271b5ce7adb",
		"ts": "2026-08-21T07:39:18.036Z",
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
		"liquidityUsd": 438342.02,
		"hash": "a271b5ce7adbe27f9ed204d3a16536f726fff4f2a6c0b6a488876ba8cdafdc74"
	},
	{
		"id": "84190f149e5f",
		"ts": "2026-08-21T07:39:18.240Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 609987.31,
		"hash": "84190f149e5fd9cca5d431b573adb4925a9babc9466a2cc44722df8dbffdbe7f"
	},
	{
		"id": "12ed22676178",
		"ts": "2026-08-21T07:39:18.918Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1802874.97,
		"hash": "12ed22676178560595982e128efc6226fed4a2ad66f902f541088f6bd94d9423"
	},
	{
		"id": "a551956f08fc",
		"ts": "2026-08-21T07:39:19.614Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4392579.14,
		"hash": "a551956f08fcebb9d7d943230f3df560c8c5782d5c6ba000a7e1f8419a14e8f4"
	},
	{
		"id": "8d95e2b75aeb",
		"ts": "2026-08-21T07:39:19.817Z",
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
		"liquidityUsd": 879639.03,
		"hash": "8d95e2b75aeb66151fd6d3c26026feb35130c17be4ca9836b91af9ac51009ffa"
	},
	{
		"id": "22ccf6643888",
		"ts": "2026-08-21T07:39:20.020Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 999003.95,
		"hash": "22ccf66438885ae7c39eab7abec91f32a5460258efeecd30eefdfb58e83f85ca"
	},
	{
		"id": "d5759af5f10c",
		"ts": "2026-08-21T07:39:20.223Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4198668.21,
		"hash": "d5759af5f10c576af3606b2c3c2d7676e2a1bc8596d552ae08640669ab35a7d3"
	},
	{
		"id": "87ecfab0b84c",
		"ts": "2026-08-21T06:38:42.950Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112072887.94,
		"hash": "87ecfab0b84c406f5bad200bb1ecae2c3357b146c1832a9d231bdf1e70b0e36d"
	},
	{
		"id": "bfabf89c80ee",
		"ts": "2026-08-21T06:38:43.173Z",
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
		"liquidityUsd": 18928150.62,
		"hash": "bfabf89c80eefef037886cdbfc6dfb20b62d4a2dee78331191bc9ec96ef2fbb9"
	},
	{
		"id": "3d126ecefff9",
		"ts": "2026-08-21T06:38:43.518Z",
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
		"liquidityUsd": 900499.06,
		"hash": "3d126ecefff92d3d1f7f0cc2e9ab499015c2a8588fffece7250af3e3318f1023"
	},
	{
		"id": "1433145a522f",
		"ts": "2026-08-21T06:38:43.738Z",
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
		"liquidityUsd": 28401414.07,
		"hash": "1433145a522fefafeeae69fe4603f1dca77e7917aa465ec6991cbae5fa29d658"
	},
	{
		"id": "9d2fe156843f",
		"ts": "2026-08-21T06:38:43.937Z",
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
		"liquidityUsd": 3205038.41,
		"hash": "9d2fe156843f0029cb0d350cc1544a4f011d594ecd222663d408be4ba95568f9"
	},
	{
		"id": "cc7a8b697f33",
		"ts": "2026-08-21T06:38:44.172Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1112209.43,
		"hash": "cc7a8b697f33fdb91b57b83b9a6004a700d80c8e9feb03cd9b79d9d4c995262d"
	},
	{
		"id": "10016601083b",
		"ts": "2026-08-21T06:38:44.389Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28401414.07,
		"hash": "10016601083b47fd26c5b34857fb760927a9919a9de07b482c75a709fe0d431b"
	},
	{
		"id": "507934a898cb",
		"ts": "2026-08-21T06:38:44.655Z",
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
		"liquidityUsd": 1638714.53,
		"hash": "507934a898cbd8c411fc426b51a300e9868440172ea6e4d6cb190366884ecf3f"
	},
	{
		"id": "ffefd328cc31",
		"ts": "2026-08-21T06:38:44.851Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 890071.04,
		"hash": "ffefd328cc31b0797561ad47b27e4a2750ba06da6294dc80cfeaed07f0e44bc0"
	},
	{
		"id": "17ab0622a39b",
		"ts": "2026-08-21T06:38:45.061Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3221826.69,
		"hash": "17ab0622a39b4d588ed542c5ae06c89506e898353a0a1853a166b725c80e2be2"
	},
	{
		"id": "16fdc1866493",
		"ts": "2026-08-21T06:38:45.263Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 290512.8,
		"hash": "16fdc18664935d494219c5a4496ad0d7f084623a91cb712d0648ab727b80d2a1"
	},
	{
		"id": "50f1c4fb96f1",
		"ts": "2026-08-21T06:38:45.463Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11649161.45,
		"hash": "50f1c4fb96f149cd0375aaae952a879a4a7c6e7d82bfb9b67f41c8c0247d6032"
	},
	{
		"id": "5fdae1daa94d",
		"ts": "2026-08-21T06:38:45.683Z",
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
		"liquidityUsd": 430695.77,
		"hash": "5fdae1daa94d5d21ed127f22dc4ed0b92b59710134d05952ca57fb21a22a0f23"
	},
	{
		"id": "3856976ca624",
		"ts": "2026-08-21T06:38:45.886Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 603728.73,
		"hash": "3856976ca624606bdd4aacb746a42cdcb3a3a6893d5ba62d06a1e25227cc8ef4"
	},
	{
		"id": "2497774b7f17",
		"ts": "2026-08-21T06:38:46.107Z",
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
		"liquidityUsd": 848037.8,
		"hash": "2497774b7f174abad3fe17a814145837a8ecf67b73c5df2ec9a3d01652178ca1"
	},
	{
		"id": "3bf30830de07",
		"ts": "2026-08-21T06:38:46.336Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1802718.1,
		"hash": "3bf30830de0706a51dfb61ca7a1c9c8e45db5d6148661b732a9b96d555b93a9c"
	},
	{
		"id": "af141f42c98e",
		"ts": "2026-08-21T06:38:47.098Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4350463.05,
		"hash": "af141f42c98e1ad36bd7e787ed7b8d81e130dbc4582bcb97a9ab59786631a29d"
	},
	{
		"id": "78d5f8556273",
		"ts": "2026-08-21T06:38:47.293Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4215131.26,
		"hash": "78d5f85562731ab86d55b3e615333c7c83acdb640373478e99e1547cb59be955"
	},
	{
		"id": "0c5347c5cf4e",
		"ts": "2026-08-21T06:38:47.500Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1000960.83,
		"hash": "0c5347c5cf4e202e074ae72edd036ae449dadc01be97443071dc707459d6c6d7"
	},
	{
		"id": "931d28962c0d",
		"ts": "2026-08-21T05:28:26.313Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111912559.86,
		"hash": "931d28962c0d98c12bf4af0b28e6103f243b5a42646e25a8bfc30b567a139531"
	},
	{
		"id": "1276a80b3d98",
		"ts": "2026-08-21T05:28:26.545Z",
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
		"liquidityUsd": 15760177.6,
		"hash": "1276a80b3d987aae61b3527981e5239b6466bc81aa5d86cbe511259cea5ee89f"
	},
	{
		"id": "f3b1cd946b43",
		"ts": "2026-08-21T05:28:26.742Z",
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
		"liquidityUsd": 891596.95,
		"hash": "f3b1cd946b43f3a18ee70dc80086611a3435ca2a89a09609de1d6128e155fd74"
	},
	{
		"id": "b7ee69d124aa",
		"ts": "2026-08-21T05:28:26.925Z",
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
		"liquidityUsd": 28375099.75,
		"hash": "b7ee69d124aa6d7280bea164d18910b65fc7f2f99454193485453c6112534103"
	},
	{
		"id": "3c2cfc9f0779",
		"ts": "2026-08-21T05:28:27.139Z",
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
		"liquidityUsd": 3186332.76,
		"hash": "3c2cfc9f0779989127d26365e8de2c369cc5c75a11782faa3db1bf5be79192e7"
	},
	{
		"id": "3e87fcd1ea0b",
		"ts": "2026-08-21T05:28:27.323Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1098270.89,
		"hash": "3e87fcd1ea0b3fd79a4d356047799b0c9bd9d59919c1d27861bebc7e073255ca"
	},
	{
		"id": "9957869ae838",
		"ts": "2026-08-21T05:28:27.517Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4312696.91,
		"hash": "9957869ae83851f764307589f0a1dfc8722247c0913c66eacd03eb55a333bb77"
	},
	{
		"id": "4247969bec81",
		"ts": "2026-08-21T05:28:27.713Z",
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
		"liquidityUsd": 1625982.19,
		"hash": "4247969bec81c19ce2147434a514eaf1bf773cb6eac9278b83ce8af9d5eda791"
	},
	{
		"id": "386f4037fdee",
		"ts": "2026-08-21T05:28:27.907Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 912337.51,
		"hash": "386f4037fdeef79578b8cdc510cbaeef0e9cfb6517fda10381be08ed16d9ca2e"
	},
	{
		"id": "fcfac5372749",
		"ts": "2026-08-21T05:28:28.094Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3202736.59,
		"hash": "fcfac537274970f83cfc086185f0a3892c18b261191eb960c3241d12befae942"
	},
	{
		"id": "4402a33edb3d",
		"ts": "2026-08-21T05:28:28.293Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 266302,
		"hash": "4402a33edb3d68e4b4a3fde6a32510b667a5584cb814a18901ea38b4d4f48d74"
	},
	{
		"id": "56490e8c9663",
		"ts": "2026-08-21T05:28:28.473Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11469924.43,
		"hash": "56490e8c9663ce96de98cf97b84ef97a66cc3b9ab58e96e18fef169f0dfece41"
	},
	{
		"id": "0bb75bfcc0f0",
		"ts": "2026-08-21T05:28:28.677Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 606686.96,
		"hash": "0bb75bfcc0f04431007a388636e035bd7876c276463d0c12be62c6ae2e8c5232"
	},
	{
		"id": "ed64313a1f3a",
		"ts": "2026-08-21T05:28:28.885Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1784953.67,
		"hash": "ed64313a1f3a61c6171a96565ff7e0891da140f8b51707175d602c508758b984"
	},
	{
		"id": "b91b65e0cbb2",
		"ts": "2026-08-21T05:28:29.417Z",
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
		"liquidityUsd": 430561.27,
		"hash": "b91b65e0cbb2f9ab131e0ff57157c8dddc62258803806929365b2e113e0f9680"
	},
	{
		"id": "cc97ef110e56",
		"ts": "2026-08-21T05:28:29.599Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4309558.28,
		"hash": "cc97ef110e562fffdb5690f8de8f9e62903a773956cc688092edb94709077cb6"
	},
	{
		"id": "b3c38f023e3e",
		"ts": "2026-08-21T05:28:29.815Z",
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
		"liquidityUsd": 853288.4,
		"hash": "b3c38f023e3e8fe1a410ec3bd07ef4899cf260623ee2cd4a60c19be99f8aee6f"
	},
	{
		"id": "bd695d5f9650",
		"ts": "2026-08-21T05:28:30.001Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4189899.19,
		"hash": "bd695d5f9650a037128d91fb658434eb92b3a8155bff5cbca9f216a7fde4728c"
	},
	{
		"id": "bd75610293bc",
		"ts": "2026-08-21T05:28:30.385Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 995805.17,
		"hash": "bd75610293bc1666875539f6faa67356d65add5598c2ad5cca0df5e91a5fc938"
	},
	{
		"id": "d5999b62886d",
		"ts": "2026-08-21T04:33:48.788Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111988459.65,
		"hash": "d5999b62886dbc72835d2ebc44c2c3ed57e7a6f803e02489e521cf5f55afef22"
	},
	{
		"id": "04b50ada5d31",
		"ts": "2026-08-21T04:33:49.002Z",
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
		"liquidityUsd": 18622131.54,
		"hash": "04b50ada5d31a80985484c33a1e59869268dc6606795ac7bb5b745fd54c6c3fc"
	},
	{
		"id": "f50ac3de3a15",
		"ts": "2026-08-21T04:33:49.210Z",
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
		"liquidityUsd": 887707.5,
		"hash": "f50ac3de3a15779e2f6ee000f67cca4f23a7bf9525beafd864a0b68d7028ae3e"
	},
	{
		"id": "708a918f3ac0",
		"ts": "2026-08-21T04:33:49.420Z",
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
		"liquidityUsd": 28354000.49,
		"hash": "708a918f3ac0c644ff56f7f44768f4c304ec43d6495c3b552ceac566ec60fcca"
	},
	{
		"id": "bcabd033e701",
		"ts": "2026-08-21T04:33:49.632Z",
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
		"liquidityUsd": 3173272.79,
		"hash": "bcabd033e701691a43845ad29c4307d821612cf8b59f8456524703f046565ca1"
	},
	{
		"id": "47a7d78a8e58",
		"ts": "2026-08-21T04:33:49.817Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1094196.72,
		"hash": "47a7d78a8e58a45c1b18d1193ad344a646a4d9283739ef5dc0211c3ee5f75dfc"
	},
	{
		"id": "38100eb26402",
		"ts": "2026-08-21T04:33:50.019Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 359684.22,
		"hash": "38100eb2640257af54445b12d6ceb5e885d44731ba1fe070ba2ce77427136ef4"
	},
	{
		"id": "f73ff9548374",
		"ts": "2026-08-21T04:33:50.301Z",
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
		"liquidityUsd": 1622030.23,
		"hash": "f73ff9548374832d298821d3c159d66661b4cde0fca9315c886243933a4015d8"
	},
	{
		"id": "01a17abc33ec",
		"ts": "2026-08-21T04:33:50.510Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 940903.92,
		"hash": "01a17abc33ec71fa239143bd2bf10f7a838648cd90a4d2c68354ffa75d3e6f0e"
	},
	{
		"id": "097066dc2873",
		"ts": "2026-08-21T04:33:50.698Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3163804.07,
		"hash": "097066dc2873a46f40bdf8f17d8c85d1edfbefda59985be42dad5ebf0b736553"
	},
	{
		"id": "0dd5259dfa68",
		"ts": "2026-08-21T04:33:50.890Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 265208.48,
		"hash": "0dd5259dfa68088f29be90f3f8c921d5ee98c739a4b9fd24c1927907179505f2"
	},
	{
		"id": "74788b739b3e",
		"ts": "2026-08-21T04:33:51.106Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11218532.29,
		"hash": "74788b739b3e8ce02e6819212f8a63e54ac407fed5831ec828a0a048c4e5bb79"
	},
	{
		"id": "2f1b38d6a354",
		"ts": "2026-08-21T04:33:51.312Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 606660.44,
		"hash": "2f1b38d6a354f0d78c44b36a71c7ccda393499a686630ce4048c8944e1da6e1f"
	},
	{
		"id": "74d265a08060",
		"ts": "2026-08-21T04:33:51.503Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1776018.49,
		"hash": "74d265a08060de43dedda58726f57ca14d2832d28660b71e90a61595c3ed4b94"
	},
	{
		"id": "6c9f71a1e4ea",
		"ts": "2026-08-21T04:33:51.703Z",
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
		"liquidityUsd": 446425.18,
		"hash": "6c9f71a1e4ea13780dd92473741a9c9ee12511f6ec30c642313ef506b2e7a30d"
	},
	{
		"id": "945f72c4e7df",
		"ts": "2026-08-21T04:33:51.907Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4354812.59,
		"hash": "945f72c4e7df9b791ea5d97de3dd7b45d4efeb508c49f7e73cd510a30bcb9624"
	},
	{
		"id": "2e42c9ce3db8",
		"ts": "2026-08-21T04:33:52.113Z",
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
		"liquidityUsd": 855417.36,
		"hash": "2e42c9ce3db8f3d95e83a62e3b7dc25b53083168aff33df8cbc2a72bc490c915"
	},
	{
		"id": "29069d598b64",
		"ts": "2026-08-21T04:33:52.295Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4131509.6,
		"hash": "29069d598b6425e2408af527c2512bd64a2822a3140c4ade7a2bd6b146102e52"
	},
	{
		"id": "7fbccb5f605b",
		"ts": "2026-08-21T04:33:52.521Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 986261.64,
		"hash": "7fbccb5f605b5daf6c00f187b86901e1360614d80df92a1adc7947a3c676ec62"
	},
	{
		"id": "73e010d842e5",
		"ts": "2026-08-21T03:53:29.796Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112179019.97,
		"hash": "73e010d842e51dde0d561eeb55f6a868b47a8f6760fc53ace6a64604ccdde548"
	},
	{
		"id": "d01faa213a97",
		"ts": "2026-08-21T03:53:30.469Z",
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
		"liquidityUsd": 18269763.43,
		"hash": "d01faa213a97f190212b7d70a4c5e0794484d9944fd9a1a71d5c0bbfdc6cfbf4"
	},
	{
		"id": "79c3963668ed",
		"ts": "2026-08-21T03:53:30.912Z",
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
		"liquidityUsd": 883082.22,
		"hash": "79c3963668ed711dcd86668ab87c098af6b44fe1ce96addefbe9d8a8f99755f2"
	},
	{
		"id": "4af4a9c64464",
		"ts": "2026-08-21T03:53:31.375Z",
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
		"liquidityUsd": 28367637.96,
		"hash": "4af4a9c6446489536ef4681632f8fbce6f1baff9fe63bbe4a5029b77da7557d4"
	},
	{
		"id": "bf097442824e",
		"ts": "2026-08-21T03:53:31.809Z",
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
		"liquidityUsd": 3169069.73,
		"hash": "bf097442824e5ef7424ba5aeb47f1963151df6146ffc5b4616875d2040e4480b"
	},
	{
		"id": "50074e3ab83d",
		"ts": "2026-08-21T03:53:32.058Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1090350.92,
		"hash": "50074e3ab83dbbed3c94769fa19e47944e5e250e58e1b1a4482ac76e375bfdd6"
	},
	{
		"id": "c83fbeda3296",
		"ts": "2026-08-21T03:53:32.289Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 357246.37,
		"hash": "c83fbeda32960131e3cc10323616f573dab4297b7b8adc57c3de01a5deffbe9b"
	},
	{
		"id": "45fdd24c2171",
		"ts": "2026-08-21T03:53:32.547Z",
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
		"liquidityUsd": 1626257.03,
		"hash": "45fdd24c2171133e4902c81250634709f1de0051643fc679673bf42514fdff34"
	},
	{
		"id": "169c7f366595",
		"ts": "2026-08-21T03:53:32.785Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 949449.18,
		"hash": "169c7f366595326355d758f60639808c0bdce1905963fd7f987b0e8cc5ec3f88"
	},
	{
		"id": "49e53c0c1781",
		"ts": "2026-08-21T03:53:33.036Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3179274.82,
		"hash": "49e53c0c1781d0e16eef57bdb9d75763db8ee6404477863e1fa80d22d5899417"
	},
	{
		"id": "921d0b89a753",
		"ts": "2026-08-21T03:53:33.253Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 260587.28,
		"hash": "921d0b89a75376f325df7dc4fa559f0dd12a2ab5e8eae8528f94540655f71cc9"
	},
	{
		"id": "9f215efc57a0",
		"ts": "2026-08-21T03:53:33.487Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11264622.19,
		"hash": "9f215efc57a015b8073332705daa819be159b3233c0670dcd7eb837e5b275efb"
	},
	{
		"id": "ce1f1bfa48b4",
		"ts": "2026-08-21T03:53:33.723Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 604516.33,
		"hash": "ce1f1bfa48b424cd7220e1aa84d7e769129f87a01f96c0840046877fecf4a84a"
	},
	{
		"id": "22f504cf14e3",
		"ts": "2026-08-21T03:53:33.959Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1782904.7,
		"hash": "22f504cf14e3fb6d190c619e3caa2164a541e21c4c92a9cf8e2f1f240bbc7eb0"
	},
	{
		"id": "676725c596e1",
		"ts": "2026-08-21T03:53:34.174Z",
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
		"liquidityUsd": 438314.11,
		"hash": "676725c596e1108367cd6e8b700bef478e7a5a14ac665d234818a0c79c5a0dab"
	},
	{
		"id": "cc4d073bbd77",
		"ts": "2026-08-21T03:53:34.408Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4343917.91,
		"hash": "cc4d073bbd7787945823235dbf92e23dd88cf9bbdab90c42164421fceb671c77"
	},
	{
		"id": "467d7d288e83",
		"ts": "2026-08-21T03:53:34.625Z",
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
		"liquidityUsd": 849438.88,
		"hash": "467d7d288e830fe65ac48ef70b8ac53eb594be04acd0c35f30bca5d79ec74a99"
	},
	{
		"id": "f512afc932ca",
		"ts": "2026-08-21T03:53:34.858Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4140689.23,
		"hash": "f512afc932ca45f6cb50ceccd2550bed693190e363e0bdd39fa36de60a77737c"
	},
	{
		"id": "3830bed89dd3",
		"ts": "2026-08-21T03:53:35.091Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 991705.1,
		"hash": "3830bed89dd3c06953cf54c2ae5122e000b274bc08ca28e9fee57a530c537b09"
	},
	{
		"id": "e8b3d91612a2",
		"ts": "2026-08-21T02:58:28.429Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112219015.07,
		"hash": "e8b3d91612a215c8c6dc07e6711b1f2e8036f6fe45a9e3a831abe5b6ed983978"
	},
	{
		"id": "097f7d1f9f57",
		"ts": "2026-08-21T02:58:29.044Z",
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
		"liquidityUsd": 17930503.36,
		"hash": "097f7d1f9f5763f38c8398060dbf3611eb53d2dba40e934d0dede65f33340b42"
	},
	{
		"id": "33a0ab0f6618",
		"ts": "2026-08-21T02:58:29.492Z",
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
		"liquidityUsd": 886731.95,
		"hash": "33a0ab0f661827c205cf95ede30d3c6a14383e178fa610918bbced2dae7dbb9a"
	},
	{
		"id": "d2af3e7f3278",
		"ts": "2026-08-21T02:58:29.913Z",
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
		"liquidityUsd": 28413282.87,
		"hash": "d2af3e7f3278dd17e124a87c10a800f3a0801ce6c4f6f481b4e26484fbcb76fe"
	},
	{
		"id": "57dfb600745b",
		"ts": "2026-08-21T02:58:30.407Z",
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
		"liquidityUsd": 3169069.73,
		"hash": "57dfb600745ba5b5bce0a905506b3df5a154036c7eb0c0780573e3c7a1614390"
	},
	{
		"id": "e0846e8a2a7b",
		"ts": "2026-08-21T02:58:30.643Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1101656.89,
		"hash": "e0846e8a2a7bd5bb48bb5e00369fc0d3f39a480c9b29c63510cd30a003d8b433"
	},
	{
		"id": "2e600816463c",
		"ts": "2026-08-21T02:58:30.881Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152696.9,
		"hash": "2e600816463cebd251c6e6385c4a8685dbb6c5c66525ac4dd42c231b80bfbf9a"
	},
	{
		"id": "ff757b8c0bab",
		"ts": "2026-08-21T02:58:31.113Z",
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
		"liquidityUsd": 1620447.12,
		"hash": "ff757b8c0baba30120292955acd634e66a0df168ac7212471bfc02ff95111922"
	},
	{
		"id": "3dc766b06d64",
		"ts": "2026-08-21T02:58:31.354Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 954102.15,
		"hash": "3dc766b06d64b0e36c150037b631a418c1428ee6621ee067f25da01e582f189b"
	},
	{
		"id": "25baf83c718c",
		"ts": "2026-08-21T02:58:31.588Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3176121.05,
		"hash": "25baf83c718ce67919c0706ca48f5bd8b1b8bbcb919ab54b90ed7009f9179973"
	}
]
