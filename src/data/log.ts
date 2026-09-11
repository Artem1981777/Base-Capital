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
	"updatedAt": "2026-09-11T07:44:20.895Z",
	"tokensScored": 16986,
	"verdictsIssued": 16986,
	"safe": 14396,
	"risky": 1250,
	"likelyRug": 1340,
	"ticks": 972
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "f4ce1e7b402c",
		"ts": "2026-09-11T07:44:14.975Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117888260.85,
		"hash": "f4ce1e7b402c4d518997bafb8f4e76cefdca32f5d64bea0c61186b37c7c15c36"
	},
	{
		"id": "900e03f2601c",
		"ts": "2026-09-11T07:44:15.624Z",
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
		"liquidityUsd": 18049271.09,
		"hash": "900e03f2601ca649d57d1c532fa01a5bb5ff625fec2aaf3990be65ffdd72e731"
	},
	{
		"id": "e2bda2d8ebc8",
		"ts": "2026-09-11T07:44:16.078Z",
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
		"liquidityUsd": 992062.46,
		"hash": "e2bda2d8ebc854865f9c98abb962792903f2fc35a340e7a973ef84a01fdc1492"
	},
	{
		"id": "aee2e4228ce9",
		"ts": "2026-09-11T07:44:16.518Z",
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
		"liquidityUsd": 32897295.53,
		"hash": "aee2e4228ce9c489ff5405535d21228950b0902768e4d0ab00d8635b4157c3fb"
	},
	{
		"id": "769bb140469c",
		"ts": "2026-09-11T07:44:16.765Z",
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
		"liquidityUsd": 4048520.32,
		"hash": "769bb140469cdd308ebb37405f9a66a85b6af656d7dd44d4e0683c497c0eceb2"
	},
	{
		"id": "66da50a91c64",
		"ts": "2026-09-11T07:44:17.013Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1161552.79,
		"hash": "66da50a91c642612a3067e5caa95c567e280906cd970f817a70872dea38b11e7"
	},
	{
		"id": "d47cd5e8264f",
		"ts": "2026-09-11T07:44:17.261Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 32897295.53,
		"hash": "d47cd5e8264f43f81432608c37fdb63fc3b4e2fbe160671f2e80e459b4287959"
	},
	{
		"id": "32ecc60c6622",
		"ts": "2026-09-11T07:44:17.532Z",
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
		"liquidityUsd": 1123216.07,
		"hash": "32ecc60c6622bfdc9e052a8187cd710120f688fc8d2ecdf7b50b2b9db79d74be"
	},
	{
		"id": "0a5e47f50e4a",
		"ts": "2026-09-11T07:44:18.375Z",
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
		"liquidityUsd": 1544005.36,
		"hash": "0a5e47f50e4affc2f9ee4a5176f6c474be1fd8da74992bd285cbc2130976ecd3"
	},
	{
		"id": "20d3310c3640",
		"ts": "2026-09-11T07:44:18.618Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 551884.35,
		"hash": "20d3310c364028c4374d74d2f251d43c933e26045431215385c7b2f0390b9c45"
	},
	{
		"id": "022a9ebcbd24",
		"ts": "2026-09-11T07:44:18.845Z",
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
		"liquidityUsd": 791313.37,
		"hash": "022a9ebcbd24e05693197479563387fc6b0931fe9ad1e060821ecd4385b75433"
	},
	{
		"id": "088f7996e1df",
		"ts": "2026-09-11T07:44:19.072Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1636770.57,
		"hash": "088f7996e1df88cbdd7452ce1ddf4c333dcdae3493bef0df4f4b4f5b5a6464ff"
	},
	{
		"id": "2f10d1bc5492",
		"ts": "2026-09-11T07:44:19.305Z",
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
		"liquidityUsd": 524013.22,
		"hash": "2f10d1bc54928081a61f37de3f3955b86f4096cf52454c3b3ebc9f0ca8d22dde"
	},
	{
		"id": "9d4e7a09de18",
		"ts": "2026-09-11T07:44:19.533Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 241093.6,
		"hash": "9d4e7a09de188f9620ca6bf26b63505f8fd7ae9e819cdf055658b59604881624"
	},
	{
		"id": "5b93fdb9d7dd",
		"ts": "2026-09-11T07:44:19.761Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14350147.42,
		"hash": "5b93fdb9d7ddd2c49d780d213802f0edb54ca00fbda084594166e745c85750b1"
	},
	{
		"id": "f5853af07b0a",
		"ts": "2026-09-11T07:44:19.988Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 437894.17,
		"hash": "f5853af07b0ae6a8bfe2e0222fb91d1b170f82fb5dc4cba8b6709b6f222b3b8b"
	},
	{
		"id": "02a6d0a52cee",
		"ts": "2026-09-11T07:44:20.215Z",
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
		"liquidityUsd": 744425.63,
		"hash": "02a6d0a52cee726ee3dd44aa06736dc28969d4cef670f613d823a59c1b1de8fc"
	},
	{
		"id": "856f5e7825c0",
		"ts": "2026-09-11T07:44:20.442Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 251404.32,
		"hash": "856f5e7825c096f423e6e6108d5cf022e92b55ae5924e0b09125ffb93586667d"
	},
	{
		"id": "b256d32666c6",
		"ts": "2026-09-11T07:44:20.668Z",
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
		"liquidityUsd": 1351382.18,
		"hash": "b256d32666c677dc48e2aa4f82bc28c6b593bc819da7badca9925b6b5c63953e"
	},
	{
		"id": "7a8d81db5423",
		"ts": "2026-09-11T07:44:20.895Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 611126.08,
		"hash": "7a8d81db542365a3d16189b48f5e8138d15472ea514c6b6f3c6bce1da1906194"
	},
	{
		"id": "9e3dd91b7474",
		"ts": "2026-09-11T02:48:22.910Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117488636.43,
		"hash": "9e3dd91b7474aa1f3760db15202dd6b1386baf341cb0ab6b751f3890c014de33"
	},
	{
		"id": "b394fed8056a",
		"ts": "2026-09-11T02:48:23.334Z",
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
		"liquidityUsd": 16854677.76,
		"hash": "b394fed8056ac3834f8d80c7a0e28a7bfb33ad9c7f047a44b0de2f98ff3a1946"
	},
	{
		"id": "b67c10c5b8c4",
		"ts": "2026-09-11T02:48:23.593Z",
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
		"liquidityUsd": 984857.03,
		"hash": "b67c10c5b8c484b0a6d771259056be7299d0a0a3efaeb40f6c661230f358cf04"
	},
	{
		"id": "237156fbf52a",
		"ts": "2026-09-11T02:48:23.826Z",
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
		"liquidityUsd": 32496841.08,
		"hash": "237156fbf52a5aee11701150dc1bc3b034b2ba9e11de3e217ad8975e405ad68f"
	},
	{
		"id": "25a0cbafbe28",
		"ts": "2026-09-11T02:48:24.067Z",
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
		"liquidityUsd": 4015401.05,
		"hash": "25a0cbafbe28ac34600b0bd1f19598c1388d95f36fbd44f987b1b16b5c285d61"
	},
	{
		"id": "99d2424c7a4a",
		"ts": "2026-09-11T02:48:24.306Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1150217.72,
		"hash": "99d2424c7a4a63110758472c11e297559b25dc741746fb095c9e471f31873458"
	},
	{
		"id": "f788b5377a6c",
		"ts": "2026-09-11T02:48:24.551Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2419194.2,
		"hash": "f788b5377a6cc814d1c91b843cf48d7ea5736ef4a7c0aa9d723519110120af28"
	},
	{
		"id": "1e869e910794",
		"ts": "2026-09-11T02:48:24.788Z",
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
		"liquidityUsd": 1097187.11,
		"hash": "1e869e9107941fda975730eaa3be22f8c3ee7793737e11ebd737b72d78d0f5af"
	},
	{
		"id": "f5ff9ac61a31",
		"ts": "2026-09-11T02:48:25.034Z",
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
		"liquidityUsd": 1567966.49,
		"hash": "f5ff9ac61a31a9a128a09b63fd9fb0ee04f98eff11edff1d934ae3fa8d33e0b1"
	},
	{
		"id": "f360490a0d50",
		"ts": "2026-09-11T02:48:25.265Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 553567.77,
		"hash": "f360490a0d5064fd300f9d60c61853cfd010c855d00b16de3ef9d07178a74f68"
	},
	{
		"id": "c751c740b24b",
		"ts": "2026-09-11T02:48:25.485Z",
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
		"liquidityUsd": 517658.7,
		"hash": "c751c740b24bfdcad18eff2c2795395085c173489994f6ae4c07dee590918e10"
	},
	{
		"id": "05740fd3eeda",
		"ts": "2026-09-11T02:48:25.706Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1566592.89,
		"hash": "05740fd3eeda0a6952fa55741e47a7fe780c6539d923a31c2e89e5b40d2cce87"
	},
	{
		"id": "57408d2a9abe",
		"ts": "2026-09-11T02:48:25.930Z",
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
		"liquidityUsd": 779332.37,
		"hash": "57408d2a9abeb6dbd1a263e996bfae083d313e36e8bbece6163474fdf30c3958"
	},
	{
		"id": "36c9454f8d2d",
		"ts": "2026-09-11T02:48:26.143Z",
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
		"liquidityUsd": 762195.5,
		"hash": "36c9454f8d2d9b4fa647208a02ea7d9204c8093b46ed09a4ed0f3597b4712cf9"
	},
	{
		"id": "02b3d36a820e",
		"ts": "2026-09-11T02:48:26.360Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14087154.55,
		"hash": "02b3d36a820e62598db403c783dcd50eed20a8e935731c83631b244026bc7ff8"
	},
	{
		"id": "9d6aac57d3f9",
		"ts": "2026-09-11T02:48:26.581Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 330115.84,
		"hash": "9d6aac57d3f9364ca9d78afca2ed3a6855128cd412bd9bf91db28cc757590195"
	},
	{
		"id": "f31e4d506e25",
		"ts": "2026-09-11T02:48:26.796Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 250921.89,
		"hash": "f31e4d506e25c831a2d515bc9f5f39be69774ef94d61bbd2fd4baae74719e064"
	},
	{
		"id": "4a262b9be81a",
		"ts": "2026-09-11T02:48:27.007Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 211733.12,
		"hash": "4a262b9be81a5c5b96cdac721902e19edc64797907d19e1c6adc9cf2610b3d58"
	},
	{
		"id": "fdd2d3c27f41",
		"ts": "2026-09-11T02:48:27.235Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 997135.04,
		"hash": "fdd2d3c27f41e1d01a02c925d7642c8659b5dee3f138a9fb0ab90a9573fe9f5e"
	},
	{
		"id": "7c5f72b82124",
		"ts": "2026-09-11T02:48:27.453Z",
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
		"liquidityUsd": 1370052.28,
		"hash": "7c5f72b821244cc3269b222629bddc32d4c50656039b73294ce2e5d1d7c62dfc"
	},
	{
		"id": "8580a9859c54",
		"ts": "2026-09-10T23:40:00.104Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117366417.65,
		"hash": "8580a9859c547f0fba466998054e20ca93f7cb05ca8994ebc1c38f337b9a7342"
	},
	{
		"id": "4133ee932432",
		"ts": "2026-09-10T23:40:00.785Z",
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
		"liquidityUsd": 18291365.78,
		"hash": "4133ee9324327885c17df97842853941127776095b31fd0e24f506f86e292f68"
	},
	{
		"id": "835dd1d718a2",
		"ts": "2026-09-10T23:40:01.056Z",
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
		"liquidityUsd": 982251.6,
		"hash": "835dd1d718a26cf9bb0225104b124195159e74f4b86a51ef7d98c719bae5be73"
	},
	{
		"id": "c033355dc1a4",
		"ts": "2026-09-10T23:40:01.323Z",
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
		"liquidityUsd": 32593794.06,
		"hash": "c033355dc1a465579402a37cd77e4951890fc990af3a83096e2dcdc4f08188fe"
	},
	{
		"id": "73c887b60434",
		"ts": "2026-09-10T23:40:01.584Z",
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
		"liquidityUsd": 4014000.25,
		"hash": "73c887b604341ab342a3475fc926c2921bcd674a8cc469aaca16255534809078"
	},
	{
		"id": "71381ac8d32c",
		"ts": "2026-09-10T23:40:02.173Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1143446.5,
		"hash": "71381ac8d32c84d7698db602fcf7b5dd2a828ea3f4b7913d4e99bd7b49834edb"
	},
	{
		"id": "034355cbde49",
		"ts": "2026-09-10T23:40:02.464Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1725485.5,
		"hash": "034355cbde495c83dcdefdafca69660ae3c1d783f547977e03a4654d9037d221"
	},
	{
		"id": "e591f02984ae",
		"ts": "2026-09-10T23:40:02.732Z",
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
		"liquidityUsd": 1094718.63,
		"hash": "e591f02984ae4c6eee0e539bf45fe04d5c4c18abbab569cfdad39accfd9bc03a"
	},
	{
		"id": "bde03bc34f8e",
		"ts": "2026-09-10T23:40:03.216Z",
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
		"liquidityUsd": 1725485.5,
		"hash": "bde03bc34f8e843c977ed4d3c44e64bc7216b43eeb6450f79b4d4296203d3f3d"
	},
	{
		"id": "fb894441aea6",
		"ts": "2026-09-10T23:40:03.562Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 543963.06,
		"hash": "fb894441aea6cc04ef45c317c4febb6ef22eda2827b29fc1fd63b0a125bdacf9"
	},
	{
		"id": "0b285c56da5d",
		"ts": "2026-09-10T23:40:03.840Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 534971.94,
		"hash": "0b285c56da5d083ff8cd517faf1e6e182467080ca3dbc05c003181c9d89c7c79"
	},
	{
		"id": "0fc3e161c7f2",
		"ts": "2026-09-10T23:40:04.075Z",
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
		"liquidityUsd": 829815.18,
		"hash": "0fc3e161c7f2f8068aa7b11cd37f74c8b9fc07061b9a566e382cb397cc053c74"
	},
	{
		"id": "ecb4695d74fb",
		"ts": "2026-09-10T23:40:04.309Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1545312.48,
		"hash": "ecb4695d74fba813379302a515e354e4a0b9d42444b4a21c757196ad4d326110"
	},
	{
		"id": "ffeaec90f32f",
		"ts": "2026-09-10T23:40:04.544Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14410443.78,
		"hash": "ffeaec90f32f45b1a7171fa78d836a0b1e588d28e75b6342fad6d2b4a9727993"
	},
	{
		"id": "48c11b0dd672",
		"ts": "2026-09-10T23:40:04.784Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 335483.28,
		"hash": "48c11b0dd6727bc6081a28eb7a66478a52bcf195cd17b12a1f2b199fd22fece6"
	},
	{
		"id": "197202fcf753",
		"ts": "2026-09-10T23:40:05.022Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 247434.65,
		"hash": "197202fcf7539e1f1b00d693bb0697fd6d8d81a3634ea87b29d0ecec829fc2d9"
	},
	{
		"id": "1875b298e056",
		"ts": "2026-09-10T23:40:05.260Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 998343.93,
		"hash": "1875b298e0568bc25290bce2d468376c2eb322a344c5854a8182901030114992"
	},
	{
		"id": "f6c91981b710",
		"ts": "2026-09-10T23:40:05.497Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 220844.05,
		"hash": "f6c91981b71007690a52f82fee63f105780760cd895b4385e60df5c1c32c4def"
	},
	{
		"id": "c5ee974e2bf7",
		"ts": "2026-09-10T23:40:05.733Z",
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
		"liquidityUsd": 1272851.07,
		"hash": "c5ee974e2bf7ae18b4fd0b566e5e058e853d12a9be2625630b3212fc2e5c6342"
	},
	{
		"id": "e6d01129a868",
		"ts": "2026-09-10T23:40:05.972Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 603565.38,
		"hash": "e6d01129a868549bfd029a64bd40f813579d80d7afe2ca2b845788639aece987"
	},
	{
		"id": "f9024ff7e3d8",
		"ts": "2026-09-10T21:21:53.408Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117813651.93,
		"hash": "f9024ff7e3d8e8a7103202f77197fabe9cf95d102bdea1c45af7d1d53b23fcc3"
	},
	{
		"id": "52aa1688c3e1",
		"ts": "2026-09-10T21:21:53.668Z",
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
		"liquidityUsd": 17714279.23,
		"hash": "52aa1688c3e19694d35632bad243daaf31561e4f3396b3944aba22a3ab47259d"
	},
	{
		"id": "65bac7738389",
		"ts": "2026-09-10T21:21:53.919Z",
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
		"liquidityUsd": 989359.23,
		"hash": "65bac7738389265b13f2ccd4b7cb096d3706a0155826ad5e382a6a0ebcf9d2bf"
	},
	{
		"id": "3e8e2e8b47ac",
		"ts": "2026-09-10T21:21:54.170Z",
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
		"liquidityUsd": 32816310.74,
		"hash": "3e8e2e8b47ac424092b31e1fc308809a2ce5c331f55b0b63dadd5b8210513017"
	},
	{
		"id": "37abfc5b5de5",
		"ts": "2026-09-10T21:21:54.448Z",
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
		"liquidityUsd": 4039074.77,
		"hash": "37abfc5b5de54cf1c9410c3c60ee2b7207337269988df2c39edc34e4b2145b1c"
	},
	{
		"id": "efec0e22b294",
		"ts": "2026-09-10T21:21:54.728Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1151082.52,
		"hash": "efec0e22b294fbf5aa27937f1d63dc13aa62365f56e92cf9a52ee9f0ce0d7afa"
	},
	{
		"id": "4a9dd4828a70",
		"ts": "2026-09-10T21:21:54.992Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1727526.52,
		"hash": "4a9dd4828a7071d2be993c03452b63fd4282e9d5bc35c133a183122592e6a208"
	},
	{
		"id": "1caa948cf12d",
		"ts": "2026-09-10T21:21:55.251Z",
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
		"liquidityUsd": 1103075.25,
		"hash": "1caa948cf12db7f021c1874294bb553af93ab9aa0c04f682e009456a7f56c4d8"
	},
	{
		"id": "a108a9c438ee",
		"ts": "2026-09-10T21:21:55.516Z",
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
		"liquidityUsd": 1727526.52,
		"hash": "a108a9c438eea0936017aa1c9abc7b1cb7cb69782b5778e5d96dc9696a3ff0ad"
	},
	{
		"id": "c96c33e50b54",
		"ts": "2026-09-10T21:21:55.774Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 575344.56,
		"hash": "c96c33e50b5403ffc24123436a640bb9e5d9cc7cdbdc264687f5c0909feb8564"
	},
	{
		"id": "105bd20f6876",
		"ts": "2026-09-10T21:21:56.020Z",
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
		"liquidityUsd": 509438.64,
		"hash": "105bd20f6876b3fe3cac1bf4c154a102439406915c976f8d5e3bfffb5b174e10"
	},
	{
		"id": "d8e21b603547",
		"ts": "2026-09-10T21:21:56.257Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1577178.12,
		"hash": "d8e21b6035476653ccb1eadd1dcca21055228daf74368431f8f14dd654d67e53"
	},
	{
		"id": "3ee115406a87",
		"ts": "2026-09-10T21:21:56.496Z",
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
		"liquidityUsd": 870399.95,
		"hash": "3ee115406a87424986eb2f14c8bf179bf060e9614346d31e83b9ddfca6f30025"
	},
	{
		"id": "fd36d0dad3d5",
		"ts": "2026-09-10T21:21:56.734Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 338350.76,
		"hash": "fd36d0dad3d5ac02a65ab634a8c4e4b0ddde3f2928f2585df75a91011fdbd8a6"
	},
	{
		"id": "6f87b9b5f83b",
		"ts": "2026-09-10T21:21:56.979Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14338064.48,
		"hash": "6f87b9b5f83b203c6b5859bc775ce44ad47894da3e67be0b8cf41d7bce5fa6b7"
	},
	{
		"id": "f628f05bae8b",
		"ts": "2026-09-10T21:21:57.216Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 429269.86,
		"hash": "f628f05bae8ba7d0208d855eb06dc4b7df69d2e92ca139c8f1876e5cd95b59dc"
	},
	{
		"id": "b3a25c386160",
		"ts": "2026-09-10T21:21:57.456Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 244820.03,
		"hash": "b3a25c386160757fdd945c2349a685ef34358442b42da2b14647512ee088319c"
	},
	{
		"id": "cbc1b2027ace",
		"ts": "2026-09-10T21:21:57.694Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 225016.4,
		"hash": "cbc1b2027ace1efc2e5284bcb764f204fae24fcad4c67dc9b12fc6faf948aca3"
	},
	{
		"id": "bd94443bf041",
		"ts": "2026-09-10T21:21:57.934Z",
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
		"liquidityUsd": 773828.59,
		"hash": "bd94443bf04122202bdbf79d594e59e0dbe76fe1a02a10efcf32299369c3fce8"
	},
	{
		"id": "c3a7f799c192",
		"ts": "2026-09-10T21:21:58.172Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1004694.92,
		"hash": "c3a7f799c1922fbe169ca66faee9613a3d5247aa8ddd961debd8188771388314"
	},
	{
		"id": "a6e3eda9b4d7",
		"ts": "2026-09-10T18:02:23.020Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118082540.9,
		"hash": "a6e3eda9b4d7f1438c07a1b032e21511f7c57b454e1e284f5dfeb8b00b6f5443"
	},
	{
		"id": "a8fc1d6e27a7",
		"ts": "2026-09-10T18:02:23.500Z",
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
		"liquidityUsd": 17247331.4,
		"hash": "a8fc1d6e27a7f54f82f433e468adfe314b88d9d16b73ce1356d4c63cd21d1d09"
	},
	{
		"id": "c0ad3ff3fc01",
		"ts": "2026-09-10T18:02:23.961Z",
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
		"liquidityUsd": 993417.37,
		"hash": "c0ad3ff3fc01223ed5afaecc73db0d41e17099a9130b52ad58f7541f97e5a57f"
	},
	{
		"id": "4173fa5faf80",
		"ts": "2026-09-10T18:02:24.204Z",
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
		"liquidityUsd": 32879159.8,
		"hash": "4173fa5faf804c83dadb98dd6a1f92878dd0fdddd168e41be08e9f0d892eb0b7"
	},
	{
		"id": "b8d0ff5a1ea8",
		"ts": "2026-09-10T18:02:24.452Z",
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
		"liquidityUsd": 4086728.71,
		"hash": "b8d0ff5a1ea86deee188ed30dc69340324df06a388f4ad2479090f47508a4158"
	},
	{
		"id": "b12443328661",
		"ts": "2026-09-10T18:02:24.711Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1154586.73,
		"hash": "b12443328661cdaa6cdb3a41aaa869309b4549d419e5a43d6070ac72e7ddb5b5"
	},
	{
		"id": "8c8484937e0f",
		"ts": "2026-09-10T18:02:24.968Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1712893.22,
		"hash": "8c8484937e0f5c2a40886ef00471fdd2af8fbdcdfc6efd5d92e65679938c09ee"
	},
	{
		"id": "70e7cb222015",
		"ts": "2026-09-10T18:02:25.215Z",
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
		"liquidityUsd": 1104944.34,
		"hash": "70e7cb222015b881181a08a8f64370c44495a111a078eb3c2f7bb89f2b5e10fa"
	},
	{
		"id": "acbc4499b83f",
		"ts": "2026-09-10T18:02:25.676Z",
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
		"liquidityUsd": 1710076.65,
		"hash": "acbc4499b83f7521dc3b49827ac9c5b3522759380b0ed6bc39102c9a56be9efb"
	},
	{
		"id": "5a78b7d8b95a",
		"ts": "2026-09-10T18:02:25.923Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 498379.85,
		"hash": "5a78b7d8b95a6b0832871156d1809c6d9aa1b1d03314ecae75fc12bb07e5d222"
	},
	{
		"id": "834e4f1e85af",
		"ts": "2026-09-10T18:02:26.155Z",
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
		"liquidityUsd": 521980.01,
		"hash": "834e4f1e85afed03064c1add302e819c8be747bc09d0ae7d8649dacea5e96b32"
	},
	{
		"id": "68ecf24490ea",
		"ts": "2026-09-10T18:02:26.383Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1644727.45,
		"hash": "68ecf24490eac8d655ed1db17118f1ffba7d192b0342587b8d7a35cc175e5c39"
	},
	{
		"id": "07a94edaa352",
		"ts": "2026-09-10T18:02:26.611Z",
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
		"liquidityUsd": 803396.8,
		"hash": "07a94edaa352407502233b0094b54746b8fcecf2d9c58d8b23e43d8f77f5a0c7"
	},
	{
		"id": "23055f526717",
		"ts": "2026-09-10T18:02:26.842Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14524138.71,
		"hash": "23055f5267174b5c8f4ce126c3e5186086af05cee64156fd1a658280b1023acd"
	},
	{
		"id": "49acd29a767d",
		"ts": "2026-09-10T18:02:27.080Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 337950.14,
		"hash": "49acd29a767d377e6e1e742419b988c982f3bd16c00fb3bbcf25fd8dda1ff2b4"
	},
	{
		"id": "ceef7eb80428",
		"ts": "2026-09-10T18:02:27.306Z",
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
		"liquidityUsd": 1176909.47,
		"hash": "ceef7eb80428e26f82018c7fd87bfbd0991e9b6dbe3fb08b089226c45c690c0c"
	},
	{
		"id": "6f9f9e6fa7be",
		"ts": "2026-09-10T18:02:27.533Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 611239.79,
		"hash": "6f9f9e6fa7bef71d73226305f89df19988d3e1a9512d33429a11bf478bfe3e56"
	},
	{
		"id": "b43e747584cd",
		"ts": "2026-09-10T18:02:27.769Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 243077.04,
		"hash": "b43e747584cd9b62858fb88eae078c208b4711297d9a989c322a48c246f753d6"
	},
	{
		"id": "50031f967b6f",
		"ts": "2026-09-10T18:02:28.001Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 423318.97,
		"hash": "50031f967b6ffd91b4aa86be33724fedc54c3b7d5c4aa0baf67550a88b226deb"
	},
	{
		"id": "d2214824b3b1",
		"ts": "2026-09-10T14:46:20.166Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117489064.99,
		"hash": "d2214824b3b1654660016a24f22841ae46366a110507c62638b80fd42c62cd0f"
	},
	{
		"id": "4e0deced6be1",
		"ts": "2026-09-10T14:46:20.534Z",
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
		"liquidityUsd": 18718994.8,
		"hash": "4e0deced6be13d8821bc69041f03d659e1adcb9906e2d54130cb52c123faa47e"
	},
	{
		"id": "43197dd7ac4d",
		"ts": "2026-09-10T14:46:20.757Z",
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
		"liquidityUsd": 986006.41,
		"hash": "43197dd7ac4dee7edf42c6a1f56b53cddb90aac1c7cd91334a2dcae80999a7b5"
	},
	{
		"id": "b4a88e0b5da3",
		"ts": "2026-09-10T14:46:20.973Z",
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
		"liquidityUsd": 32714086.84,
		"hash": "b4a88e0b5da3658abb9b0967b617912881510059b9c0b1676258b37a4dd38494"
	},
	{
		"id": "232045a78eef",
		"ts": "2026-09-10T14:46:21.190Z",
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
		"liquidityUsd": 4065632.19,
		"hash": "232045a78eef51172474b14ada87c08a3ed3220e7b5cdbb14af43ade96778fd9"
	},
	{
		"id": "e7071f0463e7",
		"ts": "2026-09-10T14:46:21.400Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1148090.98,
		"hash": "e7071f0463e758139eab4a97c54bea84c64ea67885c4973b3277fb052efd8a60"
	},
	{
		"id": "9e64f21c32bc",
		"ts": "2026-09-10T14:46:21.616Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1673453.05,
		"hash": "9e64f21c32bcc8037ed9678854687480f7e6c6edbc4da8ad239448c62a015e51"
	},
	{
		"id": "54d1a11dd7f7",
		"ts": "2026-09-10T14:46:21.849Z",
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
		"liquidityUsd": 2504910.34,
		"hash": "54d1a11dd7f727bdbe7fa01c2637c3b3878657fbcdb6233c9db9cfaf58af1ebd"
	},
	{
		"id": "71ed855f33bc",
		"ts": "2026-09-10T14:46:22.243Z",
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
		"liquidityUsd": 1673453.05,
		"hash": "71ed855f33bc2787a5f93a7bab91c36e60c12396a76e7d4a2ab413dac4984d4a"
	},
	{
		"id": "aa78ed5504bb",
		"ts": "2026-09-10T14:46:22.470Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 531703.35,
		"hash": "aa78ed5504bb2335032ae49387fca89db97bfb08296355ec8c0dfc0e8e111791"
	},
	{
		"id": "0a7d6242df46",
		"ts": "2026-09-10T14:46:22.673Z",
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
		"liquidityUsd": 512510.17,
		"hash": "0a7d6242df46d38811f36d24e5f4eec8270c2b1d85a173a4e47d27b4cbd979f7"
	},
	{
		"id": "1fc93bcd81df",
		"ts": "2026-09-10T14:46:22.883Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13988811.66,
		"hash": "1fc93bcd81dfcf6eb07efd3c2a22a88e1210f827f254e3c50fe5999e15ca0f56"
	},
	{
		"id": "b6b21b0dc315",
		"ts": "2026-09-10T14:46:23.097Z",
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
		"liquidityUsd": 776644.17,
		"hash": "b6b21b0dc315f2d9bb36ef89bc58ef8dd185ceb7f779f69173854073d7e8ed6d"
	},
	{
		"id": "72ca461541b0",
		"ts": "2026-09-10T14:46:23.302Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 237708.75,
		"hash": "72ca461541b0b431b94cd26077e28f42814c2cef1f5772395c23d7ddd333b7b4"
	},
	{
		"id": "b41f645392ce",
		"ts": "2026-09-10T14:46:23.510Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1520839.49,
		"hash": "b41f645392cefb3f4a16891af08d4f0e758dc71a5633f4e33740920a7fe9a3b7"
	},
	{
		"id": "dbf597c1317b",
		"ts": "2026-09-10T14:46:23.707Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 338281.22,
		"hash": "dbf597c1317b4509f1902da08b515c0db1200d10a63bd2fc8eb1da504c1bb345"
	},
	{
		"id": "498b6d7f37c4",
		"ts": "2026-09-10T14:46:23.911Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 615425.86,
		"hash": "498b6d7f37c49f5594823e163bd79cb36211e0285b577b682dc665cf09d35cd6"
	},
	{
		"id": "6f3005f154a0",
		"ts": "2026-09-10T14:46:24.112Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 418155.54,
		"hash": "6f3005f154a0066cdc8e991b3a8321abfaeb45d398edc62dcaaddfd0b9663cd3"
	},
	{
		"id": "745727c9a9ef",
		"ts": "2026-09-10T14:46:24.321Z",
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
		"liquidityUsd": 1158953.96,
		"hash": "745727c9a9efd86136f798b8e25caec54bf2b53a3aa269ccc8c8ed5273a95ac9"
	},
	{
		"id": "ef24ca9b676f",
		"ts": "2026-09-10T10:31:04.800Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118416128.6,
		"hash": "ef24ca9b676f02b521e798a4d5e1c46f3b984a7927be9c47d38ec3f78648bbfa"
	},
	{
		"id": "12836e79f1f5",
		"ts": "2026-09-10T10:31:05.068Z",
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
		"liquidityUsd": 18083123.5,
		"hash": "12836e79f1f5edfbd40d79e8781b9a0905535ada20d6999abc6404dc6cddddd2"
	},
	{
		"id": "aa17c169bb76",
		"ts": "2026-09-10T10:31:05.316Z",
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
		"liquidityUsd": 1000555.17,
		"hash": "aa17c169bb76dc71f092b7ce880c47b54d0d37d12d426f72b806514131e655c1"
	},
	{
		"id": "4cd033510791",
		"ts": "2026-09-10T10:31:05.576Z",
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
		"liquidityUsd": 31659602.2,
		"hash": "4cd0335107918b09f35938b3a9117f3239c919853f6453c6d64f068d1f89e8a7"
	},
	{
		"id": "c031dcdfcb0a",
		"ts": "2026-09-10T10:31:05.839Z",
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
		"liquidityUsd": 4129712.69,
		"hash": "c031dcdfcb0aac735802db8551664e1af99a235da696e05060b20109e1f0e406"
	},
	{
		"id": "6c190f016cb3",
		"ts": "2026-09-10T10:31:06.099Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1167668.33,
		"hash": "6c190f016cb39d97091f157d1a27f41ed185521bff64dde80d38a85fb97bc2b3"
	},
	{
		"id": "9781b5d1242b",
		"ts": "2026-09-10T10:31:06.360Z",
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
		"liquidityUsd": 1718933.23,
		"hash": "9781b5d1242b2fa59ae958d0fc7ec556d872178da37e64caf0b331d136df8547"
	},
	{
		"id": "56a745bce291",
		"ts": "2026-09-10T10:31:06.622Z",
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
		"liquidityUsd": 2485344.33,
		"hash": "56a745bce291aa1c4c3b916ece73df49be2a626dbc7d659d0b3e1e16c6f94507"
	},
	{
		"id": "d33101b26996",
		"ts": "2026-09-10T10:31:06.903Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1719523.33,
		"hash": "d33101b26996872804ad9b4740e8a2e3a48667e5955fd762f99e19892d599737"
	},
	{
		"id": "88f2fca5ffd4",
		"ts": "2026-09-10T10:31:07.220Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 565801.26,
		"hash": "88f2fca5ffd4c126153219c9b39f56c29608a22a2e974f5626734e5a306e7eeb"
	},
	{
		"id": "112c37838f4c",
		"ts": "2026-09-10T10:31:07.452Z",
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
		"liquidityUsd": 537481.5,
		"hash": "112c37838f4c5c49193e29574250d8d62fbe01ba108d9a8e460cdd82db936204"
	},
	{
		"id": "eea9bbafd735",
		"ts": "2026-09-10T10:31:07.696Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14309211.29,
		"hash": "eea9bbafd735d706309722c08088c3a3006904b471bf55c325bd25dc3146f0e1"
	},
	{
		"id": "e50298f1b79e",
		"ts": "2026-09-10T10:31:07.928Z",
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
		"liquidityUsd": 800908.62,
		"hash": "e50298f1b79eaf07bb5eba938fb73818e787900fd1433c72f5181584cf52b927"
	},
	{
		"id": "4ca8e22b76f0",
		"ts": "2026-09-10T10:31:08.169Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1585309.29,
		"hash": "4ca8e22b76f0d65e8fb5a528287da3771cd5cf4b861139c9cfd1db49aa539f21"
	},
	{
		"id": "9a2d6b3bf405",
		"ts": "2026-09-10T10:31:08.400Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 239455.96,
		"hash": "9a2d6b3bf405f322f7f943cb4b0f7057a423bd94b786180197993c0b93605d14"
	},
	{
		"id": "1118e72b4e5b",
		"ts": "2026-09-10T10:31:08.644Z",
		"symbol": "KAI",
		"token": "0xca18A528Ea897040f715edC92e6e4572780c5ca1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 301807.98,
		"hash": "1118e72b4e5b2cdd682538f3d25a6000c08e8b8a1d22d98326057fbdf9c37d3e"
	},
	{
		"id": "5eb6306218a5",
		"ts": "2026-09-10T10:31:08.885Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 622764.74,
		"hash": "5eb6306218a57e14fb363a7d1c063a137f9c3f64b8a1c4c98cf6b9cea5d295c9"
	},
	{
		"id": "020a2b464e97",
		"ts": "2026-09-10T10:31:09.117Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 355707.81,
		"hash": "020a2b464e9719e1dfea42f24eed5618467d53166d3e98f3911e6f289b3d7dac"
	},
	{
		"id": "75e538657e30",
		"ts": "2026-09-10T10:31:09.364Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3268822.18,
		"hash": "75e538657e30ea0e9144ed01bff0e020f617a6679a9feb08ca37734e4d2b5890"
	},
	{
		"id": "ab1362f30c58",
		"ts": "2026-09-10T05:32:34.701Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118338024.86,
		"hash": "ab1362f30c58229373ae050972f30ce6d2c3b3bff48f9140fcf13edacbb55269"
	},
	{
		"id": "ee93314cdd13",
		"ts": "2026-09-10T05:32:35.019Z",
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
		"liquidityUsd": 18641223.8,
		"hash": "ee93314cdd13861a10c5bb060c80173ef0efda07b57fb69c6e141acf3e15cb21"
	},
	{
		"id": "a1cfe2d5238a",
		"ts": "2026-09-10T05:32:35.241Z",
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
		"liquidityUsd": 1003607.03,
		"hash": "a1cfe2d5238a11f7e0e1adcf330eb44f1603866baa51bc2825a4531ca97e0bf5"
	},
	{
		"id": "523a5527f57a",
		"ts": "2026-09-10T05:32:35.620Z",
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
		"liquidityUsd": 32050052.2,
		"hash": "523a5527f57aba760f28ccf1a090ac4ab3f628ae306e1f8652c3f4deadca0519"
	},
	{
		"id": "d9e92d7be6f5",
		"ts": "2026-09-10T05:32:35.838Z",
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
		"liquidityUsd": 4257480.92,
		"hash": "d9e92d7be6f5bee04578ffc3320424012575cdb4139151b3d37f6bb6e17ed2d9"
	},
	{
		"id": "63ebb434c806",
		"ts": "2026-09-10T05:32:36.051Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1176605.15,
		"hash": "63ebb434c80609d3abf7703f581eb5d73ab5af03213a95e55175fc91685d773c"
	},
	{
		"id": "417a8181a49f",
		"ts": "2026-09-10T05:32:36.277Z",
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
		"liquidityUsd": 1617091.31,
		"hash": "417a8181a49f434dda9d22e57d95f27ac9614a12c3f0447a9a2af60ca1b4937d"
	},
	{
		"id": "1501971660d2",
		"ts": "2026-09-10T05:32:36.665Z",
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
		"liquidityUsd": 1865787.99,
		"hash": "1501971660d22146c96c0a60e42c5bba94c15f2e247419ce107c609a630e11fa"
	},
	{
		"id": "1c524f3fdcae",
		"ts": "2026-09-10T05:32:36.902Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1617091.31,
		"hash": "1c524f3fdcaea5f2df2eb19f51413387fd79864adc688b9ae72032431bf1ff76"
	},
	{
		"id": "bb5695d9fdc3",
		"ts": "2026-09-10T05:32:37.112Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 592315.4,
		"hash": "bb5695d9fdc3c714bfa87bb3216747c9ecfd0804943d871484d1d0f8ec7bea02"
	},
	{
		"id": "644868071a10",
		"ts": "2026-09-10T05:32:37.325Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14537937.68,
		"hash": "644868071a10f53cea8bf396d116191f347b4df6fa74eac9c27442e59ef09ca8"
	},
	{
		"id": "cb504db50ab2",
		"ts": "2026-09-10T05:32:37.530Z",
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
		"liquidityUsd": 558337.66,
		"hash": "cb504db50ab2bba9eb8c31a6d2c5e6b3f6ea42f3c7ec7c3c8959c2fbe6af426c"
	},
	{
		"id": "0280344d9f22",
		"ts": "2026-09-10T05:32:37.749Z",
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
		"liquidityUsd": 849177.33,
		"hash": "0280344d9f2234d14101042b3df9a32821af3d87d76669b6a79b6ab51105cf97"
	},
	{
		"id": "09eec509836e",
		"ts": "2026-09-10T05:32:37.958Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1639035.26,
		"hash": "09eec509836ee1deb742989c473b9a540997508ae34c15e1907480b4bb7b3f53"
	},
	{
		"id": "52ffaae2318f",
		"ts": "2026-09-10T05:32:38.164Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 374206.19,
		"hash": "52ffaae2318f9608f94a8c3a5407712a015f2b599efb62972c7c0728a3f28eca"
	},
	{
		"id": "df1310174f6c",
		"ts": "2026-09-10T05:32:38.397Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 261340.46,
		"hash": "df1310174f6cbc2a48993f8ac2093f62378066daf800cc773b6083e2aa7b6b6a"
	},
	{
		"id": "2b899db5fae2",
		"ts": "2026-09-10T05:32:38.585Z",
		"symbol": "KAI",
		"token": "0xca18A528Ea897040f715edC92e6e4572780c5ca1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 307709.11,
		"hash": "2b899db5fae2c3cec46e304dd7641160a9dce4a88e63bd2fb72cbc8684dd9ad7"
	},
	{
		"id": "575257216b73",
		"ts": "2026-09-10T05:32:38.786Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 622452.72,
		"hash": "575257216b734e663558f5ac28f26517024ffc04ac042220a73155a1010f0888"
	},
	{
		"id": "d922cdfe2f66",
		"ts": "2026-09-10T05:32:39.008Z",
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
		"liquidityUsd": 694482.78,
		"hash": "d922cdfe2f6677aa85df67c4a6185623e91fb5694a5150f08bc22dfe2e985192"
	},
	{
		"id": "28c14a5993df",
		"ts": "2026-09-10T00:47:47.765Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118157969.63,
		"hash": "28c14a5993dfdc2f612ad8fc131894bbb539a70d4ba7b10f88e022f94d029a63"
	},
	{
		"id": "bbf1222ede29",
		"ts": "2026-09-10T00:47:48.255Z",
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
		"liquidityUsd": 19426441.49,
		"hash": "bbf1222ede290a37257b6cc1d86d07e5ea69474d3dd13c41bd98327fd8bfece9"
	},
	{
		"id": "fe1d23928bc6",
		"ts": "2026-09-10T00:47:48.551Z",
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
		"liquidityUsd": 1006474.63,
		"hash": "fe1d23928bc6fb57a22770698e47f7ef3c0205a85395c777ce2889dc890ed350"
	},
	{
		"id": "a3fd0a43168e",
		"ts": "2026-09-10T00:47:48.826Z",
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
		"liquidityUsd": 31929134.11,
		"hash": "a3fd0a43168e1be40b0f36101184462ee49ddad6150d802637db8ef2b4b27eda"
	},
	{
		"id": "7327776a42af",
		"ts": "2026-09-10T00:47:49.300Z",
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
		"liquidityUsd": 4249423.88,
		"hash": "7327776a42af924106787e6f611278843c35a8b6b4467e801613b56df59baf97"
	},
	{
		"id": "11744d31c166",
		"ts": "2026-09-10T00:47:49.579Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1182776.59,
		"hash": "11744d31c1667ac96cbc3cbcd81ac7a01c7e0350bac4af4eeaa8ba3719a6fee6"
	},
	{
		"id": "24a29309cc3b",
		"ts": "2026-09-10T00:47:49.888Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 232615.54,
		"hash": "24a29309cc3b41d2c371ab6a1e9b91bb4dc6d881937379b1087132087603f157"
	},
	{
		"id": "4dc88558665b",
		"ts": "2026-09-10T00:47:50.181Z",
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
		"liquidityUsd": 2586876.32,
		"hash": "4dc88558665b8dac136cf076bd7d01f75120b72f84db51f5ba990ae0301dace2"
	},
	{
		"id": "6638862af083",
		"ts": "2026-09-10T00:47:51.479Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1612772.61,
		"hash": "6638862af0831abcaff3325798dbed511d8a3f4d3dcb956847a30389e271b562"
	},
	{
		"id": "e8d4ee1c8572",
		"ts": "2026-09-10T00:47:51.757Z",
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
		"liquidityUsd": 14116314.81,
		"hash": "e8d4ee1c85720e4fd17e053207b0b38caabd98de119d5f69da43497414de9333"
	},
	{
		"id": "c0bea6738ccc",
		"ts": "2026-09-10T00:47:52.015Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 619925,
		"hash": "c0bea6738cccb4444f4583c9b56ba98dcee44a123e6df2243f16e901ada4cba4"
	},
	{
		"id": "aa4adcf7646b",
		"ts": "2026-09-10T00:47:52.274Z",
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
		"liquidityUsd": 585210.49,
		"hash": "aa4adcf7646be3c2e30db7e4b03ec540be560acf6fad68bfdf1417b5889962fc"
	},
	{
		"id": "692ebde2d80f",
		"ts": "2026-09-10T00:47:52.535Z",
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
		"liquidityUsd": 851126.38,
		"hash": "692ebde2d80f2d87513abc98b14187d991ffdab7b0e4dff796f94a93225166b2"
	},
	{
		"id": "a5bccf1af828",
		"ts": "2026-09-10T00:47:52.795Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1596420.89,
		"hash": "a5bccf1af82867639b72cad971a4caae517c5448fcc37ba1096ad0e9ab5742e4"
	},
	{
		"id": "51592d10b8eb",
		"ts": "2026-09-10T00:47:53.051Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 317288.26,
		"hash": "51592d10b8eb179f7fa055793ddc302a653d2da0a9fc3dbe67dfe6941eb5097c"
	},
	{
		"id": "60a3a2b8cde4",
		"ts": "2026-09-10T00:47:53.310Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 265359.15,
		"hash": "60a3a2b8cde40d9642cdd9928ab8049d7b0527e79205ce4dfbdef35704f9b55f"
	},
	{
		"id": "7948867ff476",
		"ts": "2026-09-10T00:47:53.571Z",
		"symbol": "KAI",
		"token": "0xca18A528Ea897040f715edC92e6e4572780c5ca1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 292914.15,
		"hash": "7948867ff47671c652be3d94c63d68423ebeeacab61be5927ec3d35c23e6e895"
	},
	{
		"id": "b3f6226f4d35",
		"ts": "2026-09-10T00:47:53.830Z",
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
		"liquidityUsd": 668664.53,
		"hash": "b3f6226f4d35222be07b407c4b2a143973e48414181ebd85d319a6e4d9cdab2e"
	},
	{
		"id": "e593963e71f1",
		"ts": "2026-09-09T22:13:36.988Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118013692.61,
		"hash": "e593963e71f14d425bbf82edf68d1d0e53ee87a46be12ba925bafe611e7d0735"
	},
	{
		"id": "0a391fe5e901",
		"ts": "2026-09-09T22:13:37.249Z",
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
		"liquidityUsd": 13989462,
		"hash": "0a391fe5e90125e00e958a106f8008959e2d3d3ecb4dd14a62b0c197123ae25d"
	},
	{
		"id": "0260b9241eed",
		"ts": "2026-09-09T22:13:37.538Z",
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
		"liquidityUsd": 1002455.41,
		"hash": "0260b9241eed806ab4cbd9a4782a72d5b0f8575cc1310a9100181f7eba5f97df"
	},
	{
		"id": "4f4b38bec33b",
		"ts": "2026-09-09T22:13:37.807Z",
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
		"liquidityUsd": 31755035.63,
		"hash": "4f4b38bec33bedd1b5be84d924dd32dbff393a413818efd96e70572fc0330e70"
	},
	{
		"id": "a80ff80a1828",
		"ts": "2026-09-09T22:13:38.060Z",
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
		"liquidityUsd": 4223064.76,
		"hash": "a80ff80a18285d78beafefa05601e4ce12ae38f5ec3fe63cc993eccf4b635269"
	},
	{
		"id": "bc213829d78f",
		"ts": "2026-09-09T22:13:38.343Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1169111.37,
		"hash": "bc213829d78f3e1a17e7ef60ed93c517829615712e0071324772cfbd08e79c1c"
	},
	{
		"id": "bdb4d36942be",
		"ts": "2026-09-09T22:13:38.605Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1454673.44,
		"hash": "bdb4d36942be9a2a3d15496e14b555be5306c110047fcb90feeedd10f26a6621"
	},
	{
		"id": "5fb9aedf7779",
		"ts": "2026-09-09T22:13:38.879Z",
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
		"liquidityUsd": 2574158.31,
		"hash": "5fb9aedf7779663f88af9a7fdf86a2cb6ba8a7a9e7395ccfde5b19fce6a76621"
	},
	{
		"id": "e1ed6be25dd9",
		"ts": "2026-09-09T22:13:39.152Z",
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
		"liquidityUsd": 1455844.4,
		"hash": "e1ed6be25dd9a0034db38d90e8dbeae540aa68555996bb0a9d7c3d88120704ca"
	},
	{
		"id": "4bf89446b399",
		"ts": "2026-09-09T22:13:39.420Z",
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
		"liquidityUsd": 13949944.35,
		"hash": "4bf89446b3992b4b999195ec65461ff90dc4e1239c1ac282cc57fea5ef955c49"
	},
	{
		"id": "29a06fe99f45",
		"ts": "2026-09-09T22:13:39.667Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 587559.61,
		"hash": "29a06fe99f45caf22bf8990daf602e35ae4f7bb80c1d005c53be1950d2122ab3"
	},
	{
		"id": "3ca34248a6ba",
		"ts": "2026-09-09T22:13:39.897Z",
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
		"liquidityUsd": 551102.6,
		"hash": "3ca34248a6ba556dcfd79082bb9fa011828cda66ef51ffb4c0a70ebe8456403a"
	},
	{
		"id": "9960b849e17f",
		"ts": "2026-09-09T22:13:40.133Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1618201.54,
		"hash": "9960b849e17fa6da9c026aba3ec615f8483d8a7d9f1b35861d7ee9b69c043274"
	},
	{
		"id": "011a725856d8",
		"ts": "2026-09-09T22:13:40.380Z",
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
		"liquidityUsd": 837479.37,
		"hash": "011a725856d8245b37fd19b7c0ab13f66ab4f2601eb8b4e8c55d0990e6d6196c"
	},
	{
		"id": "91456207457d",
		"ts": "2026-09-09T22:13:40.618Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 334206.98,
		"hash": "91456207457d73b58733beaf564886eab4e5b7a3aa76fd6a22b02e58b7c3fe70"
	},
	{
		"id": "351358e90e17",
		"ts": "2026-09-09T22:13:40.868Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 268722.55,
		"hash": "351358e90e176c7c6ebd5c4a40a6a9867d34e70f16057c3c23ce6e8a46ea6979"
	},
	{
		"id": "61e30e79b4d6",
		"ts": "2026-09-09T22:13:41.099Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 631910.4,
		"hash": "61e30e79b4d69db0978cf61000123fa810851971964c47011a059afaea61dce2"
	},
	{
		"id": "5af24ea69c77",
		"ts": "2026-09-09T22:13:41.338Z",
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
		"liquidityUsd": 662323.22,
		"hash": "5af24ea69c77f9448cddab90137591ce409b782ae3a45d6171bcaa7d551c1dd7"
	},
	{
		"id": "87304e745913",
		"ts": "2026-09-09T22:13:41.578Z",
		"symbol": "KAI",
		"token": "0xca18A528Ea897040f715edC92e6e4572780c5ca1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 279920.56,
		"hash": "87304e745913d910e5b6ae30178c033d418eb9fda7125ccec5bc78871fd32389"
	},
	{
		"id": "b739aada9bfe",
		"ts": "2026-09-09T19:40:58.154Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117942432.58,
		"hash": "b739aada9bfe0222da2de5d24a1cb2ec29768c2f38c3090aeddd820d8d28b71f"
	},
	{
		"id": "922a40a095b1",
		"ts": "2026-09-09T19:40:58.610Z",
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
		"liquidityUsd": 14549179.07,
		"hash": "922a40a095b17bec00bfe24870889812f8897e47f81642cb5d1365ca9ce36a3b"
	},
	{
		"id": "43ca09828648",
		"ts": "2026-09-09T19:40:58.880Z",
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
		"liquidityUsd": 1006387.61,
		"hash": "43ca09828648d8b409543fe68d23cc432a6cb866c630e71ca79f67ab03f0cf0b"
	},
	{
		"id": "61be097cc1d6",
		"ts": "2026-09-09T19:40:59.342Z",
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
		"liquidityUsd": 31986428.88,
		"hash": "61be097cc1d6e195bfb7edf5222cc63aabe872163eef0e48f183409c711cca5b"
	},
	{
		"id": "c2d5294155b3",
		"ts": "2026-09-09T19:40:59.592Z",
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
		"liquidityUsd": 4355014.99,
		"hash": "c2d5294155b3cd7332caaf0a77b631f2a4da67fdf1c8b4bfa77f5e56088e5262"
	},
	{
		"id": "7ec16ca0bec3",
		"ts": "2026-09-09T19:40:59.859Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1210540.51,
		"hash": "7ec16ca0bec3e80eede82140ba318436cff8fb77a93b9bd9279bc6fa4a50b7c6"
	},
	{
		"id": "957fd7c053d9",
		"ts": "2026-09-09T19:41:00.119Z",
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
		"liquidityUsd": 856099.47,
		"hash": "957fd7c053d95a3c149c2e9b1d9466928e57e23cbf12046f7a1e7c65ad9059c5"
	}
]
