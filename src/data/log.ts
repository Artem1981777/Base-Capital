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
	"updatedAt": "2026-08-26T14:39:54.576Z",
	"tokensScored": 15253,
	"verdictsIssued": 15253,
	"safe": 13011,
	"risky": 1121,
	"likelyRug": 1121,
	"ticks": 880
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "d34e18ada0ca",
		"ts": "2026-08-26T14:39:50.916Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115086027.91,
		"hash": "d34e18ada0ca6b8b5daf2056f876459418004439b283508aacef4aff6c5cad69"
	},
	{
		"id": "6cc962b85f1e",
		"ts": "2026-08-26T14:39:51.346Z",
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
		"liquidityUsd": 17183280.04,
		"hash": "6cc962b85f1e9bcebee68db5f20d250308d8ca5dcd0f80238bac6119ab65ff77"
	},
	{
		"id": "51a9d7bee31b",
		"ts": "2026-08-26T14:39:51.544Z",
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
		"liquidityUsd": 960433.34,
		"hash": "51a9d7bee31b7c33c342163201c657843a87b461954b536db3f058dac50aece1"
	},
	{
		"id": "584394e52da2",
		"ts": "2026-08-26T14:39:51.758Z",
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
		"liquidityUsd": 29754036.21,
		"hash": "584394e52da2a21cfba12c484f1379913e487d20c6050ccbbdf564e683002402"
	},
	{
		"id": "92beec4081bb",
		"ts": "2026-08-26T14:39:51.979Z",
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
		"liquidityUsd": 4633570.59,
		"hash": "92beec4081bb6befd90e1ab85e7c85f5bdc715d0aac135d1d15efc50efecf561"
	},
	{
		"id": "98ca0cd36c46",
		"ts": "2026-08-26T14:39:52.182Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1168901.31,
		"hash": "98ca0cd36c469cfcc2b362d5bcac42046804858a8e02b856b1d2326ba802bebd"
	},
	{
		"id": "d7297013baf6",
		"ts": "2026-08-26T14:39:52.379Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29754036.21,
		"hash": "d7297013baf6bd7629cea18e52e91c8dc56853778ea52a5c0d857e50fd3cbd19"
	},
	{
		"id": "0819306aeea4",
		"ts": "2026-08-26T14:39:52.597Z",
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
		"liquidityUsd": 1899992.98,
		"hash": "0819306aeea4f61eb6993070ab19655696e32f56661cffe280bbb70a50c0bdde"
	},
	{
		"id": "37441b60bb2d",
		"ts": "2026-08-26T14:39:52.800Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 718916.3,
		"hash": "37441b60bb2d77288fb720ce4ea23cdb194977893eac2b16e01dae45d8fc3f60"
	},
	{
		"id": "7896d22abafb",
		"ts": "2026-08-26T14:39:52.990Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1385997.38,
		"hash": "7896d22abafb21d28a3f6d908fc65e24a591cb7131e0958a973641064dabdba9"
	},
	{
		"id": "a0d1b20ee32e",
		"ts": "2026-08-26T14:39:53.182Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1124068.47,
		"hash": "a0d1b20ee32e7b382ff5813724799eff69b9cadb69906cf96092ea5bf3bc5ed1"
	},
	{
		"id": "97165384023d",
		"ts": "2026-08-26T14:39:53.386Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 91240.16,
		"hash": "97165384023d8ad45d99b523f380da052b561a4877b10e5fe1b3f909520ec948"
	},
	{
		"id": "0581e56a6882",
		"ts": "2026-08-26T14:39:53.568Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4077701.37,
		"hash": "0581e56a688223a1b21f006ac79eab08fb474b4c56fcb497fdb318fcf87308c6"
	},
	{
		"id": "330d51f30e45",
		"ts": "2026-08-26T14:39:53.769Z",
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
		"liquidityUsd": 1450118.75,
		"hash": "330d51f30e4599864d3b33b964613864b1d6760b163c5327f38b0479cbe8d0b0"
	},
	{
		"id": "8a97f340875c",
		"ts": "2026-08-26T14:39:53.962Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3374085.81,
		"hash": "8a97f340875c569981559514ecc9a8ab074f74df9471a43ce9afd23af5147cc9"
	},
	{
		"id": "f3d3e24cfb55",
		"ts": "2026-08-26T14:39:54.187Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11338967.63,
		"hash": "f3d3e24cfb55e8c4d3ad9b2c276e41f004443fa5cd2a4ec27b71933af4593bca"
	},
	{
		"id": "edbf6d6d1ca5",
		"ts": "2026-08-26T14:39:54.375Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 560423.93,
		"hash": "edbf6d6d1ca5f284e247e9d13ad33b8274ceb729e023361e52c31150dbf32e8f"
	},
	{
		"id": "b181afaa6395",
		"ts": "2026-08-26T14:39:54.576Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 532107.59,
		"hash": "b181afaa63953107406dc7227ee273392ab5e9d612428d2829b8ee75748d3293"
	},
	{
		"id": "f617f885da75",
		"ts": "2026-08-26T13:51:42.119Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115322474.49,
		"hash": "f617f885da75ca3f0f76dbb139c27e6bad92caae40542a41e8a3151078a2db0e"
	},
	{
		"id": "c2ecbe9fddc9",
		"ts": "2026-08-26T13:51:42.436Z",
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
		"liquidityUsd": 17252491.26,
		"hash": "c2ecbe9fddc9f98b13b7f1004c00719ce09f5caea775e31d5ca6cbdc6c9e7105"
	},
	{
		"id": "190bcea9a067",
		"ts": "2026-08-26T13:51:42.619Z",
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
		"liquidityUsd": 961905.99,
		"hash": "190bcea9a067f3f2907ad32648ecfb674e154df7fc907b8b8aa2a0bb84664400"
	},
	{
		"id": "ce616a8d05f2",
		"ts": "2026-08-26T13:51:42.859Z",
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
		"liquidityUsd": 29933580.86,
		"hash": "ce616a8d05f21e33207769337e871a8ef8c94dd3344a917c5647e58a2d343845"
	},
	{
		"id": "13f8c5655da9",
		"ts": "2026-08-26T13:51:43.053Z",
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
		"liquidityUsd": 4665670.43,
		"hash": "13f8c5655da99b59d3a18f2b6b258fd8da3be8dfb275caad2a90b64aab811439"
	},
	{
		"id": "b4d686c28393",
		"ts": "2026-08-26T13:51:43.259Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1172690.3,
		"hash": "b4d686c2839376cbe56e591723cca4f1dc51335b7090929288e901ea5bb8a79f"
	},
	{
		"id": "33d97f92f397",
		"ts": "2026-08-26T13:51:43.448Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29933580.86,
		"hash": "33d97f92f397d689207c194c7fa873a0662123a7de7296c169d989eff4339bbf"
	},
	{
		"id": "3f99bc4d841f",
		"ts": "2026-08-26T13:51:43.667Z",
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
		"liquidityUsd": 1906255.3,
		"hash": "3f99bc4d841fd7c2b5969c1153d0aed96c9cc7923d973718cf919b59cdfd0f09"
	},
	{
		"id": "271e0ccf8b05",
		"ts": "2026-08-26T13:51:43.853Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 702388,
		"hash": "271e0ccf8b05c5e949c886c55f1add30739f7c1d060ab70dabe19bd629d720e4"
	},
	{
		"id": "371a7731c0ed",
		"ts": "2026-08-26T13:51:44.045Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1407430.55,
		"hash": "371a7731c0ede2e5f7b90f2f629bbc5fea30f78e006e52e8c510725103a9f219"
	},
	{
		"id": "19e59528fb5d",
		"ts": "2026-08-26T13:51:44.234Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1122972.5,
		"hash": "19e59528fb5da5df3fd4b6316989479b6d2d5851553a54a74fc9872ec13e3c4a"
	},
	{
		"id": "3cdcc1eebccf",
		"ts": "2026-08-26T13:51:44.416Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 83857.29,
		"hash": "3cdcc1eebccffa394039a703481766ae0ac24fe40662e0cf0eeac89fb8b2a46d"
	},
	{
		"id": "5790c13ff15a",
		"ts": "2026-08-26T13:51:44.602Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4104444.31,
		"hash": "5790c13ff15a2e036fdcae781617f05d97837b8fd94adba99f6fe9a37d1aa0c7"
	},
	{
		"id": "8c223c17f4af",
		"ts": "2026-08-26T13:51:44.788Z",
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
		"liquidityUsd": 1387320.42,
		"hash": "8c223c17f4af05c56c43f997e6461cb1d2cf15b2b2347f589a7101f37db35c21"
	},
	{
		"id": "e0f0934fbf2f",
		"ts": "2026-08-26T13:51:45.036Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3399731.85,
		"hash": "e0f0934fbf2f8f251a2d5fb926a27f7894ab9d695d79b44873d96a8c032d73b1"
	},
	{
		"id": "86d057d913ae",
		"ts": "2026-08-26T13:51:45.222Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11426460.81,
		"hash": "86d057d913ae0fbfb110d13504d83a38db2e14f9a97f8d7a024cbc5e511cd8f3"
	},
	{
		"id": "74c4b5579b15",
		"ts": "2026-08-26T13:51:45.418Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 549620.44,
		"hash": "74c4b5579b155c3308daaee8d6c7a334a6ff3fdca56d577fc7dea3c7baf978c8"
	},
	{
		"id": "4204decda12e",
		"ts": "2026-08-26T13:51:45.653Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 534572.34,
		"hash": "4204decda12ef721692d2413699adf0f491d7f08db511ac8fdde02b14362d2af"
	},
	{
		"id": "394fb4811952",
		"ts": "2026-08-26T12:42:46.904Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115303634.12,
		"hash": "394fb4811952c74b3b359cea153c1a1f4d06590b3c484dae93a901688ece49d2"
	},
	{
		"id": "ba12a75a74d0",
		"ts": "2026-08-26T12:42:47.196Z",
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
		"liquidityUsd": 16124767.03,
		"hash": "ba12a75a74d0a296420af8f1242e9025aa9b96cc2a4f1d7334feab5e717a0518"
	},
	{
		"id": "d119eaa3dd25",
		"ts": "2026-08-26T12:42:47.458Z",
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
		"liquidityUsd": 962569.85,
		"hash": "d119eaa3dd255891ea876f3563e50722b16f5b2c157754e68aad10cdfee1d5bb"
	},
	{
		"id": "469b6fc3dab4",
		"ts": "2026-08-26T12:42:47.730Z",
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
		"liquidityUsd": 29971605.91,
		"hash": "469b6fc3dab4d033395ea53958ba386d1c1d321957dc12cc64d14f6617b51fb5"
	},
	{
		"id": "6b84ee11505c",
		"ts": "2026-08-26T12:42:47.998Z",
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
		"liquidityUsd": 4675742.16,
		"hash": "6b84ee11505c630f219d279a67c1c2f35a43f8d434573d8fc6218f216386f04b"
	},
	{
		"id": "f3c68e2ab73d",
		"ts": "2026-08-26T12:42:48.263Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1184008.63,
		"hash": "f3c68e2ab73dc1333e75638fb2b1c641c3cf05ff01347d137affe718caeec90a"
	},
	{
		"id": "ebe421430191",
		"ts": "2026-08-26T12:42:48.530Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1378974,
		"hash": "ebe4214301914c79fa4cae6864fd554a9251485dc7b2d70af647b35be50ea462"
	},
	{
		"id": "cb5efeb619ce",
		"ts": "2026-08-26T12:42:48.798Z",
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
		"liquidityUsd": 1905255.18,
		"hash": "cb5efeb619ce497a7594611969396143d355580ac5ba5a28da1510564d3dd117"
	},
	{
		"id": "6e40753fe463",
		"ts": "2026-08-26T12:42:49.096Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 714475.51,
		"hash": "6e40753fe4633a738d4d3644aa985f027d963065cb495133f4083e7a1d81dfc3"
	},
	{
		"id": "db7b64838d96",
		"ts": "2026-08-26T12:42:49.360Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1427055.26,
		"hash": "db7b64838d96caa2caecd694b111ca71a160bbb4b020ecb8667150a99a639ce5"
	},
	{
		"id": "3515ee6dab00",
		"ts": "2026-08-26T12:42:49.609Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1169905.45,
		"hash": "3515ee6dab0084b44fcfbb7dd0a1fbf5474da6f8d968334c4cd0c341c2a17dce"
	},
	{
		"id": "5c1f52eb479b",
		"ts": "2026-08-26T12:42:49.853Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4105143.52,
		"hash": "5c1f52eb479b1bd2592fbcd6b5803998d054017bd8ebeaddc2aa9a5a87d12980"
	},
	{
		"id": "881995b4cbd0",
		"ts": "2026-08-26T12:42:50.095Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 84896.42,
		"hash": "881995b4cbd04ab73ea52c5ca117bd0f2be9837b5b797be907ed00dac1773588"
	},
	{
		"id": "07386bb4829d",
		"ts": "2026-08-26T12:42:50.337Z",
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
		"liquidityUsd": 1384701.89,
		"hash": "07386bb4829d1742661ef24ac37066470dd60ca169df1aebd4da990808c3db2f"
	},
	{
		"id": "efb1d496816c",
		"ts": "2026-08-26T12:42:50.580Z",
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
		"liquidityUsd": 3455352.37,
		"hash": "efb1d496816cff5637e3fda3c5519deb2ea5b35f24cd19227e97441f5d22b4f9"
	},
	{
		"id": "71634c279955",
		"ts": "2026-08-26T12:42:50.823Z",
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
		"liquidityUsd": 11464084.44,
		"hash": "71634c2799552123b0f2a35fcfbbc4db8f9858949bfb0d5671fe9f91545e8614"
	},
	{
		"id": "524144729253",
		"ts": "2026-08-26T12:42:51.067Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 530215.72,
		"hash": "52414472925332d8791c65c663a219e71bd7bdae6d797bbad9dac8d7cf85b806"
	},
	{
		"id": "eb285dd67154",
		"ts": "2026-08-26T12:42:51.312Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 555641.41,
		"hash": "eb285dd6715424579a5909e6bc3ab8393f33e2b8592a2a5b58c82ecf8ab8761d"
	},
	{
		"id": "4b25805b951d",
		"ts": "2026-08-26T11:25:06.804Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115468922.71,
		"hash": "4b25805b951dbd4d64d908bf6ece615a2ac260a384b325c4cb9da943c2d48242"
	},
	{
		"id": "73eca45f41c7",
		"ts": "2026-08-26T11:25:07.049Z",
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
		"liquidityUsd": 17372896.19,
		"hash": "73eca45f41c7504f9377bb62fc2b80b9e2b2b6ae1ef1a2eca22e4aafcf9d440e"
	},
	{
		"id": "21e7c300da00",
		"ts": "2026-08-26T11:25:07.301Z",
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
		"liquidityUsd": 967676.92,
		"hash": "21e7c300da00204f3182fb894ada48f37f4cc13f0e0d931d1f34a40e79190724"
	},
	{
		"id": "dabd6f2cc59d",
		"ts": "2026-08-26T11:25:07.557Z",
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
		"liquidityUsd": 30024233.63,
		"hash": "dabd6f2cc59d7cda9accf1a7b4c4a50eebc9620bb8b6e142691be0780b54a83d"
	},
	{
		"id": "0d8f51b8089f",
		"ts": "2026-08-26T11:25:07.806Z",
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
		"liquidityUsd": 4713883.15,
		"hash": "0d8f51b8089f1208175c87459477b9d443efb7c5517f6691dc17eedd068d2ba5"
	},
	{
		"id": "d9a161ab12b3",
		"ts": "2026-08-26T11:25:08.065Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1179530.84,
		"hash": "d9a161ab12b3d747fe858e40e7ee8be18dd1e30a44c005373129ec1321bdc74a"
	},
	{
		"id": "2db2788944c2",
		"ts": "2026-08-26T11:25:08.315Z",
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
		"liquidityUsd": 456192.87,
		"hash": "2db2788944c28f9975cb9a849e0684b335f3ab47eb09ed8637fc8290535a635c"
	},
	{
		"id": "d41932986a5f",
		"ts": "2026-08-26T11:25:08.773Z",
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
		"liquidityUsd": 1914520.6,
		"hash": "d41932986a5f967c3dcf18b1df756fd28951e312e2acf6c759efca69e495b82e"
	},
	{
		"id": "7d080dcea629",
		"ts": "2026-08-26T11:25:09.016Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1410208.77,
		"hash": "7d080dcea629b5dd99fab76552461a2bf2f526ec3c5b160620cf419887a95ad9"
	},
	{
		"id": "a80001b9cc5c",
		"ts": "2026-08-26T11:25:09.271Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 737196.31,
		"hash": "a80001b9cc5cfae9d9d269b7527b3eef23cfb79f39abd45a2346a0db2e2ea52f"
	},
	{
		"id": "a224ac2a9585",
		"ts": "2026-08-26T11:25:09.500Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1199350.95,
		"hash": "a224ac2a9585b30b44d76fb2b78f6bfd086c99cc6d9647bc296cb7b782879983"
	},
	{
		"id": "93e7955b7a19",
		"ts": "2026-08-26T11:25:09.733Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 98342.97,
		"hash": "93e7955b7a1964b1cc60f8b4939b86d5112ec5c01d15d9ff32a56be1441a13a0"
	},
	{
		"id": "60868bc205d5",
		"ts": "2026-08-26T11:25:09.957Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4127774.74,
		"hash": "60868bc205d5319c733a6511630c37834d4a23080697bab38fb4d5380064ac1e"
	},
	{
		"id": "c49215fcb580",
		"ts": "2026-08-26T11:25:10.191Z",
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
		"liquidityUsd": 1384182.74,
		"hash": "c49215fcb5806c119d7c0f3477aeb99d2949279f192f9478163a9baf9a85a30f"
	},
	{
		"id": "001ed572ba9e",
		"ts": "2026-08-26T11:25:10.421Z",
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
		"liquidityUsd": 532946.75,
		"hash": "001ed572ba9e3ab8382c4ca089f9e32239da9d7fe82c53dd5d8bb64ab92ce1d0"
	},
	{
		"id": "edcee5eb9b0b",
		"ts": "2026-08-26T11:25:10.653Z",
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
		"liquidityUsd": 3475397.64,
		"hash": "edcee5eb9b0b2f8e9ec8418b8528b7ccd5cb4741456eb694816bb7fe68c95cf6"
	},
	{
		"id": "f126fc8dfad3",
		"ts": "2026-08-26T11:25:10.877Z",
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
		"liquidityUsd": 11487793.18,
		"hash": "f126fc8dfad3efa53dcd183341c284f83e96b589bb7fce3e2e20cef16bb3c820"
	},
	{
		"id": "622227dbe2c6",
		"ts": "2026-08-26T11:25:11.114Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 554528.28,
		"hash": "622227dbe2c6891ababe1a9b2e76b5ace9d9eba6e84ccb8a1b96d9afd7fdafe2"
	},
	{
		"id": "9b5edf3a722a",
		"ts": "2026-08-26T10:31:00.414Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115241961.07,
		"hash": "9b5edf3a722a6a8af935159a5b733d15880f87a25b9daaa4f5e7d03c50d878b7"
	},
	{
		"id": "446159c67ab4",
		"ts": "2026-08-26T10:31:00.884Z",
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
		"liquidityUsd": 19126786.28,
		"hash": "446159c67ab47697dc3121850d4d9f66ac1be8092510961536ce8be718e6dbb0"
	},
	{
		"id": "268e2f87ed46",
		"ts": "2026-08-26T10:31:01.268Z",
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
		"liquidityUsd": 964991.89,
		"hash": "268e2f87ed46d890e7381b2e14272bb5eac65f4bd97a022afc2f2313ff8a3439"
	},
	{
		"id": "d4a764bae99d",
		"ts": "2026-08-26T10:31:01.533Z",
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
		"liquidityUsd": 29854738.02,
		"hash": "d4a764bae99dfdf1f2e53762a2eff6ba37ad4ebf70a69f08f7dfd54fc9a6b3eb"
	},
	{
		"id": "044197bab3dd",
		"ts": "2026-08-26T10:31:01.839Z",
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
		"liquidityUsd": 4685289.44,
		"hash": "044197bab3dd9be15b315c41fa697ce9633e38c990f5d4d5e15119f8aace3fa3"
	},
	{
		"id": "6783d18868c7",
		"ts": "2026-08-26T10:31:02.103Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1183502.85,
		"hash": "6783d18868c7a5d58e18f7f2b00247fe0382cc09e14e7750ad888a4cd1cd2b35"
	},
	{
		"id": "b3f63d81c408",
		"ts": "2026-08-26T10:31:02.358Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152989.88,
		"hash": "b3f63d81c4087bec4676244ff68aad3255d94b2f9ad194ff0d542a933d79221b"
	},
	{
		"id": "daf97e938265",
		"ts": "2026-08-26T10:31:02.672Z",
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
		"liquidityUsd": 1907020.24,
		"hash": "daf97e9382656dfa00a7b479e83175f86965d25a96d5d7ae619ad81583307bfd"
	},
	{
		"id": "a714d55a98f3",
		"ts": "2026-08-26T10:31:02.914Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1394182.84,
		"hash": "a714d55a98f343a3b681e8ac515486e40c954bb5cc70feabc9299e58eb02ab1e"
	},
	{
		"id": "151a761e7764",
		"ts": "2026-08-26T10:31:03.193Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 743794.98,
		"hash": "151a761e77643d2589c667dcae786f8f200fbf8d0169fd341566c3a78f9a058f"
	},
	{
		"id": "12989e24f054",
		"ts": "2026-08-26T10:31:03.431Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1207565.33,
		"hash": "12989e24f054607ea3641cead204c15d499d69224214d657669a1c8427f5ccba"
	},
	{
		"id": "f309c90bea88",
		"ts": "2026-08-26T10:31:03.664Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 102310.8,
		"hash": "f309c90bea882af60cac8db72a254e1013eee845c2dec0f1d0eeba9bbeef1f94"
	},
	{
		"id": "e863721491e5",
		"ts": "2026-08-26T10:31:03.888Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4102550.01,
		"hash": "e863721491e558aedfe2af148504c1c2a798837b81d16e699e244d7857d94790"
	},
	{
		"id": "92efc155c8df",
		"ts": "2026-08-26T10:31:04.118Z",
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
		"liquidityUsd": 1406368.96,
		"hash": "92efc155c8df7a2c979ce8a1155511a5e871946851293e547ef984e951dca23e"
	},
	{
		"id": "68e88ffba709",
		"ts": "2026-08-26T10:31:04.353Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 535206.3,
		"hash": "68e88ffba7097ef9966a856ef7ef70628c257f69929d153e7323c51b14fb74be"
	},
	{
		"id": "170d607b5815",
		"ts": "2026-08-26T10:31:04.584Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3478103.63,
		"hash": "170d607b5815a60db451ad543852e7a26e905db2e13cb39cd203147b5da59e99"
	},
	{
		"id": "46c05a97ade2",
		"ts": "2026-08-26T10:31:04.804Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11418630.69,
		"hash": "46c05a97ade2afc216dbaade965f2d827f6869fa7f1ab260aa3913759b155c93"
	},
	{
		"id": "ee6ca7907012",
		"ts": "2026-08-26T10:31:05.036Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1833348.71,
		"hash": "ee6ca7907012528d7c1fe589f4a6fb010faf89a7bc753113124833c9139ff055"
	},
	{
		"id": "626f71df1406",
		"ts": "2026-08-26T09:36:24.643Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115029200.03,
		"hash": "626f71df14069e4f98604a4ebf5cfd9a3c89b0d5b58f2fefaa4975192f2838a8"
	},
	{
		"id": "2e7236768848",
		"ts": "2026-08-26T09:36:25.202Z",
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
		"liquidityUsd": 19256338.42,
		"hash": "2e7236768848c0031422624497a3d5318740da22e1aa28798ee2a5031def899c"
	},
	{
		"id": "712b9901a3c1",
		"ts": "2026-08-26T09:36:25.537Z",
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
		"liquidityUsd": 964587.31,
		"hash": "712b9901a3c189a459a9fbf75c120c28b8670823852a38c5180962f23abecd1f"
	},
	{
		"id": "ffc257d6b1b7",
		"ts": "2026-08-26T09:36:25.869Z",
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
		"liquidityUsd": 29712941.31,
		"hash": "ffc257d6b1b70aec1d0a69f1d560d79fb0a9e20ddc880c5c5ab342bf09ed1860"
	},
	{
		"id": "d5ac4a3f641f",
		"ts": "2026-08-26T09:36:26.199Z",
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
		"liquidityUsd": 4680120.99,
		"hash": "d5ac4a3f641f7064ae01125306c29cf84e8a9890b173a17b937834337d0f4ae5"
	},
	{
		"id": "18e415237df8",
		"ts": "2026-08-26T09:36:26.525Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1179370.28,
		"hash": "18e415237df870cd3a87262cd58562adf69110964bd799d35650f1ea5f37b415"
	},
	{
		"id": "a46b13de3766",
		"ts": "2026-08-26T09:36:26.849Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152885.2,
		"hash": "a46b13de376601b03103dd9c5de37de022aac1b9f3d3c63332930b6dbcb5d6ac"
	},
	{
		"id": "1370aa55cc2c",
		"ts": "2026-08-26T09:36:27.189Z",
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
		"liquidityUsd": 1902693.99,
		"hash": "1370aa55cc2cd53819ca601a1ffb2b9e202e32cef742854f3aab611240e4a7ca"
	},
	{
		"id": "deff5d8123bc",
		"ts": "2026-08-26T09:36:27.515Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1465841.33,
		"hash": "deff5d8123bc46c16c7b032b64336d4286fa0638acdc6b5b3feeea8fff40d8e4"
	},
	{
		"id": "32336d0bfc3a",
		"ts": "2026-08-26T09:36:28.099Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 732091.2,
		"hash": "32336d0bfc3a74efe4dfae765362bff5a88dfdba55e07ce66024bcb5a9ba001f"
	},
	{
		"id": "87f57aedc972",
		"ts": "2026-08-26T09:36:28.410Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1213810.23,
		"hash": "87f57aedc97248a0982a63cae58c6b73db019d3344e2cafa451ba321d17ab181"
	},
	{
		"id": "082f11b2ef5e",
		"ts": "2026-08-26T09:36:28.733Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 100648.99,
		"hash": "082f11b2ef5ec42d5f2d94985e74695649e8609de35843135bb48106f05eb5bf"
	},
	{
		"id": "2bbb274b29e3",
		"ts": "2026-08-26T09:36:29.057Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4102500.05,
		"hash": "2bbb274b29e3a94da816d568f2753a1b7d1b18aaaf6aff237081f7eff3bd1908"
	},
	{
		"id": "90fd7270269d",
		"ts": "2026-08-26T09:36:29.370Z",
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
		"liquidityUsd": 1376107.47,
		"hash": "90fd7270269da513731b9cec6c7effb6ba2b5434e16776f2fdb752eafaa0102f"
	},
	{
		"id": "84d99fa52673",
		"ts": "2026-08-26T09:36:29.694Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3428431.72,
		"hash": "84d99fa526734b85fe2ba4589ced8e4af0762205bc9906187acf271c1cea1dbf"
	},
	{
		"id": "a0ee7c9987c0",
		"ts": "2026-08-26T09:36:30.006Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 539009.49,
		"hash": "a0ee7c9987c0880b7bf441debc71df402d09a64f3d46c6727251879f24a8d799"
	},
	{
		"id": "5fbe176082be",
		"ts": "2026-08-26T09:36:30.328Z",
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
		"liquidityUsd": 11392708.59,
		"hash": "5fbe176082be39975c09337f6b8da71d6d24c87d3843d5f3dd3f0ea43a03d536"
	},
	{
		"id": "441496ea30ad",
		"ts": "2026-08-26T09:36:30.641Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1841005.91,
		"hash": "441496ea30ade9f5b6bda1e9324ef3f9c3e698207727540b81ac4a25cf5afbf4"
	},
	{
		"id": "109714f256e7",
		"ts": "2026-08-26T08:38:01.745Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115071283.66,
		"hash": "109714f256e74107d29ffc7051da14014bf23ce1589b361b878c18803cfe9dfb"
	},
	{
		"id": "99d3ed7ebb9c",
		"ts": "2026-08-26T08:38:02.260Z",
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
		"liquidityUsd": 19209538.24,
		"hash": "99d3ed7ebb9c2d60636252718b5bf7d7a18416011444aec03bd236490aaaeea3"
	},
	{
		"id": "b7d8692d5a8c",
		"ts": "2026-08-26T08:38:02.608Z",
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
		"liquidityUsd": 971564.81,
		"hash": "b7d8692d5a8c66df98bda5cde532eb2975b403c965f25c11c438aa3bd9e1a243"
	},
	{
		"id": "821ef4ffb52c",
		"ts": "2026-08-26T08:38:02.954Z",
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
		"liquidityUsd": 29789892.56,
		"hash": "821ef4ffb52c7357a76ca92cfe9357aa71f048624906ca560386eebd7da59248"
	},
	{
		"id": "7ecd1acb1ae8",
		"ts": "2026-08-26T08:38:03.151Z",
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
		"liquidityUsd": 4694286.89,
		"hash": "7ecd1acb1ae8afa0ad9ad2ad739af9c8b3eeb62db777238227c34cec53a3d765"
	},
	{
		"id": "200c941e18b9",
		"ts": "2026-08-26T08:38:03.339Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1192767.42,
		"hash": "200c941e18b90d4a9d724ade8e030fbf298a7eedd45b253312499d85f22e6099"
	},
	{
		"id": "86823b76ec67",
		"ts": "2026-08-26T08:38:03.562Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152676.76,
		"hash": "86823b76ec678a822ea5194a66b2374e26605b8f0531a859ba5d18bbefea5e73"
	},
	{
		"id": "a045ab46ddac",
		"ts": "2026-08-26T08:38:03.759Z",
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
		"liquidityUsd": 1911434.79,
		"hash": "a045ab46ddacddc2d87becc21dc6d42137bcf1e62cf124d3ad5f1e2877ad62e4"
	},
	{
		"id": "55d455811687",
		"ts": "2026-08-26T08:38:03.955Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1450939.23,
		"hash": "55d4558116873e51485cf3e898be946acfd11e44509b886eae0a78ecf11357b1"
	},
	{
		"id": "e191ee09dbd0",
		"ts": "2026-08-26T08:38:04.150Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1215778.6,
		"hash": "e191ee09dbd06763fc35cd7bf0f0f86325a4f8b41ece5f197bfaddf9b2d5c2db"
	},
	{
		"id": "b0ac4d042859",
		"ts": "2026-08-26T08:38:04.337Z",
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
		"liquidityUsd": 728570.86,
		"hash": "b0ac4d04285936319f870c64ac5623a85a98b3ea4788d00f59b6ddd60c268381"
	},
	{
		"id": "ebdc7ba29c7d",
		"ts": "2026-08-26T08:38:04.532Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 98420.66,
		"hash": "ebdc7ba29c7d0c76d04827a44e3bf5df65705c18f359c233016a5a1adb1c2608"
	},
	{
		"id": "5633e2f3a9e1",
		"ts": "2026-08-26T08:38:04.709Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4140371.81,
		"hash": "5633e2f3a9e1d2889dd8441ecd91adf644f20993575335b18c7523f52831477f"
	},
	{
		"id": "b2085381701c",
		"ts": "2026-08-26T08:38:04.905Z",
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
		"liquidityUsd": 1424108.67,
		"hash": "b2085381701c77d5fea789ec31297608c503ad6e56e5a51fd3e6e45d1c03c2fd"
	},
	{
		"id": "96c1ae34f2d6",
		"ts": "2026-08-26T08:38:05.096Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3460174.82,
		"hash": "96c1ae34f2d62f5d6196b8eb57c34219b302bdcb2c60138c30ee161d3697c342"
	},
	{
		"id": "c191ebc3ad87",
		"ts": "2026-08-26T08:38:05.301Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 541987.52,
		"hash": "c191ebc3ad879851060d3a61d5134cca52660addd13d22070ecd5530f81fcf6c"
	},
	{
		"id": "300151d1cfb1",
		"ts": "2026-08-26T08:38:05.480Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11492354.62,
		"hash": "300151d1cfb122c23f06b17bd81463c67b3e573f15e7a5ce466b869b6f081449"
	},
	{
		"id": "63dad1ea2d4c",
		"ts": "2026-08-26T08:38:05.676Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1853121.75,
		"hash": "63dad1ea2d4cfbd612688433626925dee4a155ff0f489440cd12d46c70d28fa6"
	},
	{
		"id": "83cf1f60a8e0",
		"ts": "2026-08-26T07:41:48.126Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115082696.98,
		"hash": "83cf1f60a8e0185b244ad38ad880496e051a9e7b407adcbacbe1a9d1a64838a9"
	},
	{
		"id": "8f69f2263d3a",
		"ts": "2026-08-26T07:41:48.647Z",
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
		"liquidityUsd": 19389299.08,
		"hash": "8f69f2263d3ac1fe8e78a061e46115422c95bb00c60d7f18949f41e262b92532"
	},
	{
		"id": "91fe56a9deac",
		"ts": "2026-08-26T07:41:49.013Z",
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
		"liquidityUsd": 972453.91,
		"hash": "91fe56a9deac9c46798f3fb3151c4c8792ad9f9a47bc279e1d62f582d0b34f23"
	},
	{
		"id": "a91e72089cab",
		"ts": "2026-08-26T07:41:49.362Z",
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
		"liquidityUsd": 29826213.82,
		"hash": "a91e72089cababe6c2fd300f73f8ae0342f1dab3150fecaff025240c774bc847"
	},
	{
		"id": "153a5c1401e0",
		"ts": "2026-08-26T07:41:49.710Z",
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
		"liquidityUsd": 4698301.44,
		"hash": "153a5c1401e0fe763a7663f450f9e77c699cda1cec4e38616f52da51359e4ca1"
	},
	{
		"id": "1a5662f7361b",
		"ts": "2026-08-26T07:41:49.924Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1192795.73,
		"hash": "1a5662f7361b8ada09579da1e3f1aaac10bef4e985364bf5fbc60e89e6c77ac0"
	},
	{
		"id": "5f4849e933d3",
		"ts": "2026-08-26T07:41:50.151Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152676.75,
		"hash": "5f4849e933d3c6873e7d794e4d492f152a6e9a5b57177d8dc7ce50aa0b800092"
	},
	{
		"id": "44c994af430d",
		"ts": "2026-08-26T07:41:50.366Z",
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
		"liquidityUsd": 1914051.65,
		"hash": "44c994af430dcd7dc9c7a9b98277eddc1c54596e1ad8ffe42ad00467da7474d7"
	},
	{
		"id": "e66d0c00969b",
		"ts": "2026-08-26T07:41:50.555Z",
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
		"liquidityUsd": 1496868.79,
		"hash": "e66d0c00969bb88be4de15f87d6f996f679df85f286c19fbfa1ab996cf8260de"
	},
	{
		"id": "9c95e9d66ffc",
		"ts": "2026-08-26T07:41:50.742Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1222479.86,
		"hash": "9c95e9d66ffcfdb432479481b874a6645b19f3402e0f35f347b370a1520e4f8a"
	},
	{
		"id": "46883f826b21",
		"ts": "2026-08-26T07:41:50.920Z",
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
		"liquidityUsd": 748555.29,
		"hash": "46883f826b21a94399ba7c2efdb5de0bd7f1c00ede515fd0422269e06c8048f3"
	},
	{
		"id": "04d6f98446bc",
		"ts": "2026-08-26T07:41:51.100Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4136609.58,
		"hash": "04d6f98446bc0eceb8f107f09623f0b08a8e33e7e699f60c75ec7b305af4f62b"
	},
	{
		"id": "70c4fbce1e00",
		"ts": "2026-08-26T07:41:51.276Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 97427.58,
		"hash": "70c4fbce1e00019956a25137462c18aa55516a846e95172173423157bf69da95"
	},
	{
		"id": "19394576ccd2",
		"ts": "2026-08-26T07:41:51.474Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 544095.68,
		"hash": "19394576ccd29acb655a2874a97a3a97232535feefab0e197a7af147bd704ce5"
	},
	{
		"id": "f4ef4502bb2a",
		"ts": "2026-08-26T07:41:51.658Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3436780.07,
		"hash": "f4ef4502bb2a11e0315f8d58a1f687e73bc6867f97536d71bfa7392a84228ef3"
	},
	{
		"id": "a37517661809",
		"ts": "2026-08-26T07:41:51.838Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 545631.78,
		"hash": "a3751766180979cc0100b4115bee5ef156bb1b64c0afd959fd57bfb572b43f70"
	},
	{
		"id": "2e812323bb2f",
		"ts": "2026-08-26T07:41:52.021Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11578361.24,
		"hash": "2e812323bb2fcb61258c33ad336a43b9ae70cb23e964a5dfd50b9bf7a5820a1d"
	},
	{
		"id": "c1a59a26f244",
		"ts": "2026-08-26T07:41:52.235Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1855928.15,
		"hash": "c1a59a26f2449138bb929b2cdef582159687d457de0c92d696feb7a31d36802b"
	},
	{
		"id": "3b470824c206",
		"ts": "2026-08-26T07:41:52.477Z",
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
		"liquidityUsd": 848509.74,
		"hash": "3b470824c206509909974f5a5d388c2296ee52e8365d540601f88169d47d1f87"
	},
	{
		"id": "54a2b2dea05c",
		"ts": "2026-08-26T06:40:47.285Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115064386.7,
		"hash": "54a2b2dea05cf575686fd62fc89a844ac176690189511c5e5efde1637109674f"
	},
	{
		"id": "c356e8f591bc",
		"ts": "2026-08-26T06:40:47.759Z",
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
		"liquidityUsd": 19470450.21,
		"hash": "c356e8f591bc36ad2fab29799509c95916f575b47027afa479dc984ecae76df1"
	},
	{
		"id": "84b5560e206e",
		"ts": "2026-08-26T06:40:48.032Z",
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
		"liquidityUsd": 966557.61,
		"hash": "84b5560e206e9dc113e9ca6d2779145bc264c9c753fe41dc7657485e2682d1be"
	},
	{
		"id": "30f5a9fe3e7a",
		"ts": "2026-08-26T06:40:48.357Z",
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
		"liquidityUsd": 29784841.32,
		"hash": "30f5a9fe3e7a147f13066682343ddaddba3ca42dc0393bc83285e018dd93c1fc"
	},
	{
		"id": "440ba6c16101",
		"ts": "2026-08-26T06:40:48.603Z",
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
		"liquidityUsd": 4678282.48,
		"hash": "440ba6c16101338f8606d0562d30294768cd14a86de5d935d5a0b6009d46aa1b"
	},
	{
		"id": "f85244aa74d2",
		"ts": "2026-08-26T06:40:48.853Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1192795.73,
		"hash": "f85244aa74d2ec8cd4d48fad05fe673a649e59ad26fd7faeb62c514bb5546c78"
	},
	{
		"id": "e1a7c5fc7c33",
		"ts": "2026-08-26T06:40:49.102Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152676.48,
		"hash": "e1a7c5fc7c33c06e281214e85c3865a03b90f229f653ba2fe454023fdd1d13f0"
	},
	{
		"id": "ce6e536cd19b",
		"ts": "2026-08-26T06:40:49.360Z",
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
		"liquidityUsd": 1907021.77,
		"hash": "ce6e536cd19b9df4ea9714ef3448c366922f7a73b893f904a8f7853c02ff2a79"
	},
	{
		"id": "4273941cf284",
		"ts": "2026-08-26T06:40:49.592Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1468223.94,
		"hash": "4273941cf2845b139562674c65bde15704686e29a1936a43aee4e6e20e7cfac4"
	},
	{
		"id": "e90b464a521a",
		"ts": "2026-08-26T06:40:49.841Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1210778.57,
		"hash": "e90b464a521ac6e983af294ecf5b0bc32fc25db8eecbbae6742eb6dc6cfa9ac8"
	},
	{
		"id": "5a26e596f622",
		"ts": "2026-08-26T06:40:50.076Z",
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
		"liquidityUsd": 745503.36,
		"hash": "5a26e596f6220056b4ca4af505f1149698169d185ff9b869408acab072221f4d"
	},
	{
		"id": "9b8348f4fe17",
		"ts": "2026-08-26T06:40:50.307Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4123197.45,
		"hash": "9b8348f4fe1703908ea5bea1fb4a44f0dcc445e3b70e755a73ec3e933ad78c15"
	},
	{
		"id": "056a310f6536",
		"ts": "2026-08-26T06:40:50.527Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 91647.83,
		"hash": "056a310f6536b98233e4867a783d48e430b3361590767ac2f8e112810d6fb031"
	},
	{
		"id": "127276c3624b",
		"ts": "2026-08-26T06:40:50.744Z",
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
		"liquidityUsd": 542011.22,
		"hash": "127276c3624bf928f1098b284cea55cdc772b6986061ea116148f1eec07b8cd1"
	},
	{
		"id": "77d4294c5ecd",
		"ts": "2026-08-26T06:40:50.974Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3419802.28,
		"hash": "77d4294c5ecdd1c16863a1e672a16119d6d50178cf5d818f6f673e9e712e1311"
	},
	{
		"id": "20b8d46f0410",
		"ts": "2026-08-26T06:40:51.205Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 544470.85,
		"hash": "20b8d46f041046a5b49e8087372ccf40bc6d4bb418f85a30713ce53b9ff9e531"
	},
	{
		"id": "dab2fa73e3b1",
		"ts": "2026-08-26T06:40:51.437Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11434925.44,
		"hash": "dab2fa73e3b1e27c976fc616703ec9cca4905ce3c777acc82c99d4c9781e779d"
	},
	{
		"id": "0fb958d96af9",
		"ts": "2026-08-26T06:40:51.668Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1858522.34,
		"hash": "0fb958d96af93d0c7730a5f71d9c1790efbe6eb1f3365b0aa54cd763d7f1131b"
	},
	{
		"id": "59a3680bc122",
		"ts": "2026-08-26T06:40:51.889Z",
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
		"liquidityUsd": 859242.23,
		"hash": "59a3680bc1222445b7facfdcd49e09733e88beae45c7aea473e447ac52b67b96"
	},
	{
		"id": "563ce21a0cf8",
		"ts": "2026-08-26T05:30:08.808Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114968133.08,
		"hash": "563ce21a0cf85f5d28de9c982903397c455eb4351180e2de4a2ab6a1d6741449"
	},
	{
		"id": "8270b9ae0c45",
		"ts": "2026-08-26T05:30:09.216Z",
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
		"liquidityUsd": 18728627.1,
		"hash": "8270b9ae0c458b62c595eb74435c8a640c1a37fd98ffd46d8e90394375263103"
	},
	{
		"id": "78bcb331b5c0",
		"ts": "2026-08-26T05:30:09.426Z",
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
		"liquidityUsd": 967190.83,
		"hash": "78bcb331b5c02e85e75be6d1819aa18785e16ea29f579d9ff8cee99d639c127b"
	},
	{
		"id": "2f4ef5563064",
		"ts": "2026-08-26T05:30:09.605Z",
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
		"liquidityUsd": 29787938.67,
		"hash": "2f4ef5563064be0317a2733c92bdaba5d489cf892a8a531d8070779ddc57b730"
	},
	{
		"id": "cc54b46c709a",
		"ts": "2026-08-26T05:30:09.804Z",
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
		"liquidityUsd": 4684394.09,
		"hash": "cc54b46c709a026fd527cdc83a781ec2be2db8f5780ace4f7eac85570a526733"
	},
	{
		"id": "9a8fbf3dffa3",
		"ts": "2026-08-26T05:30:09.999Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1192138.63,
		"hash": "9a8fbf3dffa310c14f628bafd814de77063ca58a16b885c43c822ab38b0179c1"
	},
	{
		"id": "20c219ed5c80",
		"ts": "2026-08-26T05:30:10.204Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152676.45,
		"hash": "20c219ed5c80c71f0c1a642c75662591f7fea0e7eba9d2f0eea921e882ec09e4"
	},
	{
		"id": "5145a650865a",
		"ts": "2026-08-26T05:30:10.423Z",
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
		"liquidityUsd": 1908001.56,
		"hash": "5145a650865abbc2b2556c19b55c3f61122fcf892025179bf4fa1cd3706f52f2"
	},
	{
		"id": "02727890a9cb",
		"ts": "2026-08-26T05:30:10.709Z",
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
		"liquidityUsd": 1471335.57,
		"hash": "02727890a9cbd10487858b266f69e3c0a135868fb34a3f778901d473bb6db51e"
	},
	{
		"id": "a3aee1060f67",
		"ts": "2026-08-26T05:30:10.903Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1211197.66,
		"hash": "a3aee1060f675bd5c316fca13e02240a2f1d744b47a7b4b107dcbe29613f306a"
	},
	{
		"id": "843dbe9604fe",
		"ts": "2026-08-26T05:30:11.081Z",
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
		"liquidityUsd": 728785.58,
		"hash": "843dbe9604feede49a0a92165166d57d7cfc5114f9ab866ad544d900270dd2ae"
	},
	{
		"id": "6b383a83f756",
		"ts": "2026-08-26T05:30:11.280Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4129430,
		"hash": "6b383a83f756e025d8d070e8de3cef01e723e8663c23a931e1690673fc3fdd98"
	},
	{
		"id": "f32851291436",
		"ts": "2026-08-26T05:30:11.471Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 98213.14,
		"hash": "f32851291436c0dae6c93c9c6ede48a1836c4a6b27787ffd5b95768894cae1ba"
	},
	{
		"id": "aa4c3677f743",
		"ts": "2026-08-26T05:30:11.669Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 542462.1,
		"hash": "aa4c3677f743704e1f1ac42b57573cb2432ad00db132b9dadf731a20adb26f72"
	},
	{
		"id": "dbd5c3807fdf",
		"ts": "2026-08-26T05:30:11.846Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1847674.87,
		"hash": "dbd5c3807fdfcc0db35db74e8b26bc144f0467d106bf7e8c19efd3015665cafa"
	},
	{
		"id": "44231df6975c",
		"ts": "2026-08-26T05:30:12.044Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3388316.59,
		"hash": "44231df6975c7dcd2ca3665dae5382f5cb43dbe89780034424c2e0f05f9d46fc"
	},
	{
		"id": "535d8100d955",
		"ts": "2026-08-26T05:30:12.234Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 546781.2,
		"hash": "535d8100d9553988943894ed3e6aa23d71a2f0e973c1eae1f8841530f1efd91e"
	},
	{
		"id": "896f4fe5b4ec",
		"ts": "2026-08-26T05:30:12.513Z",
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
		"liquidityUsd": 851686.65,
		"hash": "896f4fe5b4ec35f3191b4a6d305e41a0065fd5ec1d2191f9cacc1c832248596d"
	},
	{
		"id": "3940c1a56eb9",
		"ts": "2026-08-26T05:30:12.728Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11481242.49,
		"hash": "3940c1a56eb966d7ffddae860d58c17742a2c650c76390ca55af8f540f0d7f44"
	},
	{
		"id": "d2a4609ab203",
		"ts": "2026-08-26T04:35:25.376Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115055991.21,
		"hash": "d2a4609ab20396620d262541166683821a7027e5c8ecae861ebb5e850522ba99"
	},
	{
		"id": "ca443d34cdcb",
		"ts": "2026-08-26T04:35:25.648Z",
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
		"liquidityUsd": 16837998.29,
		"hash": "ca443d34cdcb83c1e62e4f62dbfdb17af0dc235096c1489c57f3351df2c32c36"
	},
	{
		"id": "fb24663e13b7",
		"ts": "2026-08-26T04:35:25.903Z",
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
		"liquidityUsd": 969781.75,
		"hash": "fb24663e13b7db18c3b363a78d6fe8a2e87641e5e7286c5adafaf49b30a63ab6"
	},
	{
		"id": "0cf2ccd99307",
		"ts": "2026-08-26T04:35:26.152Z",
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
		"liquidityUsd": 29867819.03,
		"hash": "0cf2ccd9930708a84d2cc8146434533477f0346f44157a2a3fd62324ef06b3ec"
	},
	{
		"id": "2d9789be08be",
		"ts": "2026-08-26T04:35:26.431Z",
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
		"liquidityUsd": 4689179.64,
		"hash": "2d9789be08bee0c74df40575b7c788df8ed921e6bf16c0134af55cbfcc83cd76"
	},
	{
		"id": "3507b04927d4",
		"ts": "2026-08-26T04:35:26.775Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1192138.63,
		"hash": "3507b04927d43617f34bf136a91d5b509663dcd55ce1c5eeacb16f7948f90702"
	},
	{
		"id": "a5f8087bd556",
		"ts": "2026-08-26T04:35:27.024Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152676.44,
		"hash": "a5f8087bd5563c67e48c37d4614eb2298d32a699864df8b71626d66a9ac6d5bd"
	},
	{
		"id": "142536f137f7",
		"ts": "2026-08-26T04:35:27.280Z",
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
		"liquidityUsd": 1915330.45,
		"hash": "142536f137f709e59d73bcc6aa75d84a52bbf52aa82141f7637b26ca0979bb02"
	},
	{
		"id": "a4f5bc456ffb",
		"ts": "2026-08-26T04:35:27.532Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1477320.53,
		"hash": "a4f5bc456ffbc456d0c1a1bd3bb5b7487bd882997a3039099a36422c6a21fa53"
	},
	{
		"id": "c1b6cff5a002",
		"ts": "2026-08-26T04:35:27.781Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1204596.24,
		"hash": "c1b6cff5a00269c44ecede6775d3f68ab365df6753e1d0019ab63b5eb97a2f5d"
	},
	{
		"id": "0666073ad534",
		"ts": "2026-08-26T04:35:28.012Z",
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
		"liquidityUsd": 729805.99,
		"hash": "0666073ad534a787c22335e7f7269d096d4bc3f5c94fffe331a0ef33b5ce7d32"
	},
	{
		"id": "27069fe04bb3",
		"ts": "2026-08-26T04:35:28.242Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4144996.76,
		"hash": "27069fe04bb33f9c94383f2db68280e73f6d4018762083ff2a3121c66ac3c698"
	},
	{
		"id": "701463a6817a",
		"ts": "2026-08-26T04:35:28.475Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 93805.72,
		"hash": "701463a6817acc4a49933089c2e1a7bfb1b9a95bc22b9bf15399bc9aba918613"
	},
	{
		"id": "18d403df205d",
		"ts": "2026-08-26T04:35:28.707Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 544222.13,
		"hash": "18d403df205d7a93ac72afb8b3fadcbc2f7e82f505c228d2fc1e21b76aae90e6"
	},
	{
		"id": "397f24699911",
		"ts": "2026-08-26T04:35:28.939Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1866870.86,
		"hash": "397f24699911f9fa6f54dc7a5bf151d72f2d1b04b05d0fa36211e05ae80711c3"
	},
	{
		"id": "4fcecbbd3df5",
		"ts": "2026-08-26T04:35:29.173Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 551704.33,
		"hash": "4fcecbbd3df5b9b2f7a6452fe51e7c1e4407c6c5fe1230c5469be2c700caa3df"
	},
	{
		"id": "420aeb72cf74",
		"ts": "2026-08-26T04:35:29.405Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3396756.94,
		"hash": "420aeb72cf741e5c71e6cd869ac934abe1398938e92cd4cb74af925a50e15af4"
	}
]
