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
	"updatedAt": "2026-08-16T02:56:25.928Z",
	"tokensScored": 10647,
	"verdictsIssued": 10647,
	"safe": 9270,
	"risky": 803,
	"likelyRug": 574,
	"ticks": 639
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "e8f24d908243",
		"ts": "2026-08-16T02:56:20.415Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111356474.09,
		"hash": "e8f24d908243d199c0233e8b4000cc79c827b1d520d84dab37e8191617773a38"
	},
	{
		"id": "7b168b2781ca",
		"ts": "2026-08-16T02:56:20.931Z",
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
		"liquidityUsd": 17523807.93,
		"hash": "7b168b2781ca69253397a273c5ffa1f694e4dcd08d889a6473a255640119b0c9"
	},
	{
		"id": "3b9ac6fca8a3",
		"ts": "2026-08-16T02:56:21.213Z",
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
		"liquidityUsd": 804850.35,
		"hash": "3b9ac6fca8a3d7481414763153975a4e26595779c832bc2bd88c2a9a11bdc73a"
	},
	{
		"id": "d1ced3747463",
		"ts": "2026-08-16T02:56:21.507Z",
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
		"liquidityUsd": 26560475.45,
		"hash": "d1ced3747463c3124fb7ee586e9c82007a013a9770e89ac28b367228fd6f0cdc"
	},
	{
		"id": "3d81409ff7ba",
		"ts": "2026-08-16T02:56:22.015Z",
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
		"liquidityUsd": 4154841.88,
		"hash": "3d81409ff7ba6bb7aab75f4061baedd583bc6ed135b36cabf1769c03235af43e"
	},
	{
		"id": "c3bfad38b107",
		"ts": "2026-08-16T02:56:22.287Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 890331.1,
		"hash": "c3bfad38b107b32a12d4a9ea93931163d5202b45ae8ed49552f73ba9b5ecbdc1"
	},
	{
		"id": "aab8b8193f1b",
		"ts": "2026-08-16T02:56:22.597Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26560475.45,
		"hash": "aab8b8193f1b9157135646d35d93327190770ccb00c849002a34e6003502a5bd"
	},
	{
		"id": "1aa5018b67ed",
		"ts": "2026-08-16T02:56:22.890Z",
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
		"liquidityUsd": 4037313.49,
		"hash": "1aa5018b67ed7f9ca49e9cea1fa0395725b2299b23067e769b4f17c0d9b8fe76"
	},
	{
		"id": "fb80955b47b1",
		"ts": "2026-08-16T02:56:23.193Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2582919.9,
		"hash": "fb80955b47b1ad26f1fd69b8be129121fabdc4a414993c885cd21e807d39e9f5"
	},
	{
		"id": "13e154c3caef",
		"ts": "2026-08-16T02:56:23.579Z",
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
		"liquidityUsd": 278223.29,
		"hash": "13e154c3caef14329c572403a79dae6b975399950748f0b70ceadc1268770869"
	},
	{
		"id": "7627f1d60d83",
		"ts": "2026-08-16T02:56:23.844Z",
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
		"liquidityUsd": 912678.35,
		"hash": "7627f1d60d83f71d675bb474f064600413d0cb89bf510d42db5d6b41e1e70583"
	},
	{
		"id": "8ff8aec3a693",
		"ts": "2026-08-16T02:56:24.101Z",
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
		"liquidityUsd": 112932.51,
		"hash": "8ff8aec3a6933bb922a40abdc48a2731ddeec6f193bd552e6da4f3c364abe09a"
	},
	{
		"id": "ab77a77570bf",
		"ts": "2026-08-16T02:56:24.365Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5046763.28,
		"hash": "ab77a77570bf26a611a401918db8084e10ad6afe467c088c79e39d69e2fab067"
	},
	{
		"id": "a0b7f2740a17",
		"ts": "2026-08-16T02:56:24.621Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9485077.5,
		"hash": "a0b7f2740a17a94a6780f05a9cac8dad6251696a651479077a4346a2112417a4"
	},
	{
		"id": "4a27a85c8d32",
		"ts": "2026-08-16T02:56:24.887Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 384358.32,
		"hash": "4a27a85c8d325a19927d42c164a5ef22d95970b8504138ba2f4c33b7a203866a"
	},
	{
		"id": "8e51bdf69e2c",
		"ts": "2026-08-16T02:56:25.143Z",
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
		"liquidityUsd": 631181.82,
		"hash": "8e51bdf69e2c2b4d99220d1d61d87507cd5200b999b5a68c94895324527cac6d"
	},
	{
		"id": "e1187005e3fa",
		"ts": "2026-08-16T02:56:25.408Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 632285.63,
		"hash": "e1187005e3fa59b9a069c2f13e39cdea44bc1d8f1027c7afc84f55e55e6f1fb6"
	},
	{
		"id": "4034f4aa19b6",
		"ts": "2026-08-16T02:56:25.663Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"low_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "4034f4aa19b6f571122e21e380baea56665d1998a118e5df428fe53a3fecb216"
	},
	{
		"id": "e310ac0a3de8",
		"ts": "2026-08-16T02:56:25.927Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 368080.42,
		"hash": "e310ac0a3de850fa105cc6f8d6313f78557fbe38a938f3448171dc824d0e96b1"
	},
	{
		"id": "111b7e6af9b1",
		"ts": "2026-08-16T01:04:17.017Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111394678.73,
		"hash": "111b7e6af9b18562b4048f4d84849225e2cd369cbe84934b8100eb75ac635065"
	},
	{
		"id": "16e11557083e",
		"ts": "2026-08-16T01:04:17.275Z",
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
		"liquidityUsd": 17078330.41,
		"hash": "16e11557083ee75bd6d3748bd299321ea0f601d1d7599244b0da69b93a1d8fbf"
	},
	{
		"id": "f26204d5681f",
		"ts": "2026-08-16T01:04:17.545Z",
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
		"liquidityUsd": 808906.43,
		"hash": "f26204d5681f348e84d18b7d6f565be985387a57b83ac4b933cdac9f3c628cf2"
	},
	{
		"id": "7cf542c1a3f8",
		"ts": "2026-08-16T01:04:17.872Z",
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
		"liquidityUsd": 26583993.66,
		"hash": "7cf542c1a3f8743a9a2db52a6d8e0800f841b2886b5b9840ef802dac2ca0b6e7"
	},
	{
		"id": "c816c624efa2",
		"ts": "2026-08-16T01:04:18.113Z",
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
		"liquidityUsd": 4161029.92,
		"hash": "c816c624efa2050acd64275a63ace5b5bcea01587e18c68a5d776d374c34f79c"
	},
	{
		"id": "1008a621e50e",
		"ts": "2026-08-16T01:04:18.373Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 892033.24,
		"hash": "1008a621e50ee376491847dce70e13e94efbc5b381c57779aff94d8daca39d63"
	},
	{
		"id": "6f48a170e09a",
		"ts": "2026-08-16T01:04:18.608Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26583993.66,
		"hash": "6f48a170e09a9a2224d3d297dd8ed0aeefb39b9d04cffa070ef480e062e81257"
	},
	{
		"id": "6e8e2c9c4ae7",
		"ts": "2026-08-16T01:04:18.873Z",
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
		"liquidityUsd": 4041776.08,
		"hash": "6e8e2c9c4ae7cf1b427be917e557ccd0d12893b10e8ec8d10f5badb8f161180f"
	},
	{
		"id": "bbdabc017fc3",
		"ts": "2026-08-16T01:04:19.107Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2567531.68,
		"hash": "bbdabc017fc35fa31325ac4cacc274c91ac1211dabd8284cdd273f14d4608cf3"
	},
	{
		"id": "a6fed562e346",
		"ts": "2026-08-16T01:04:19.346Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 5209816.02,
		"hash": "a6fed562e346dab2f9b523844321649b34fd6f23119a49e99c1692bb07459019"
	},
	{
		"id": "6c7a2a713c6d",
		"ts": "2026-08-16T01:04:19.563Z",
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
		"liquidityUsd": 887362.44,
		"hash": "6c7a2a713c6dbc6455a042e5d6286cee6a43a277d544627d751d0cef97cd7eea"
	},
	{
		"id": "6f6215c05e04",
		"ts": "2026-08-16T01:04:19.783Z",
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
		"liquidityUsd": 106041.7,
		"hash": "6f6215c05e045016ace852a9c95bdc416c808e1b3d2b145372398868da11b46d"
	},
	{
		"id": "7505e232e585",
		"ts": "2026-08-16T01:04:20.005Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 278159.12,
		"hash": "7505e232e585d0e51c9b1869c200eea2aaf7b706a211b0c1bd029e9d3bcdb515"
	},
	{
		"id": "720d7208f747",
		"ts": "2026-08-16T01:04:20.225Z",
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
		"liquidityUsd": 9462032.02,
		"hash": "720d7208f747ddee4fe98ae5eb76eeccc4a3bd0d02a0f3b4ae3b4cb587c01aab"
	},
	{
		"id": "3de13838461a",
		"ts": "2026-08-16T01:04:20.447Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 384260.95,
		"hash": "3de13838461a4b463ccf89c6d524bee9a5c04ef3cf2e8ec8865d964ccd7be6f4"
	},
	{
		"id": "08ec4a90636f",
		"ts": "2026-08-16T01:04:20.670Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"low_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "08ec4a90636f2d5b459356908fb3f287d20aa09a5adc99660f53727b5b1b97c7"
	},
	{
		"id": "f7ed7dda7876",
		"ts": "2026-08-16T01:04:20.888Z",
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
		"liquidityUsd": 640016.03,
		"hash": "f7ed7dda7876ff76e36fa74933d9a78c14c95de1f7d6a4e80993da42ee4652cc"
	},
	{
		"id": "d393f1cdb755",
		"ts": "2026-08-16T01:04:21.108Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 628973.12,
		"hash": "d393f1cdb7559da5081ec5546612fb8d3ffeac14dd7b1b802ea3f6085e47ce7a"
	},
	{
		"id": "a9e9fb38889b",
		"ts": "2026-08-16T01:04:21.329Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 365280.01,
		"hash": "a9e9fb38889be8c6fd082fce5e9ec09d01717e322c2ff6dbc4c59321c9682229"
	},
	{
		"id": "3842a661d4b0",
		"ts": "2026-08-15T23:16:25.180Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111393569.59,
		"hash": "3842a661d4b09f124fc697f689bef79aaa216a2a9205177e72ee39f2f89594bc"
	},
	{
		"id": "33d74adfd54e",
		"ts": "2026-08-15T23:16:25.439Z",
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
		"liquidityUsd": 18223298.53,
		"hash": "33d74adfd54e701a876e04e7f088ac1daab992f777e8b83ecb94512213e4e70a"
	},
	{
		"id": "27d48cd401b6",
		"ts": "2026-08-15T23:16:25.669Z",
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
		"liquidityUsd": 813182.84,
		"hash": "27d48cd401b691506be8ce5544e2685c1156949f8f645e50cb8392b801b4bb23"
	},
	{
		"id": "4b5b9cd27994",
		"ts": "2026-08-15T23:16:25.912Z",
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
		"liquidityUsd": 26624996.96,
		"hash": "4b5b9cd2799450415335848133e4cbb9a9d937cc36e1e8cca37a8afc3b0da566"
	},
	{
		"id": "5bc30de8577a",
		"ts": "2026-08-15T23:16:26.151Z",
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
		"liquidityUsd": 4168311.94,
		"hash": "5bc30de8577aa3690c91c4dcaedd66f0d39129791b464a3f595b7f1bd7fbea8f"
	},
	{
		"id": "317251b30bef",
		"ts": "2026-08-15T23:16:26.412Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 891957.92,
		"hash": "317251b30bef018f9c1cdeccdb0f4b7b461caf1ca0bcd9ac8cdf8c677d1126ef"
	},
	{
		"id": "2ee4bc6e9c51",
		"ts": "2026-08-15T23:16:26.740Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26624996.96,
		"hash": "2ee4bc6e9c51c1a6557dbf589c9a1f9e53f394230643cf65e9bdd866ce971f85"
	},
	{
		"id": "a2a6f6f51abb",
		"ts": "2026-08-15T23:16:27.010Z",
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
		"liquidityUsd": 4044493.34,
		"hash": "a2a6f6f51abb54c1219df53629c497e450f75ebe8c90957a7600253d10d67811"
	},
	{
		"id": "3874df25c710",
		"ts": "2026-08-15T23:16:27.480Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2557770.44,
		"hash": "3874df25c7109a64d96ca60a81e2eaf8be8b6841bed74fcede9e5dbca30ccf4a"
	},
	{
		"id": "033e49fad481",
		"ts": "2026-08-15T23:16:27.711Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 5127859.37,
		"hash": "033e49fad481870012c86933cfc96baf75c61ab74eafb06b2890fc06e5958267"
	},
	{
		"id": "54439bf0e434",
		"ts": "2026-08-15T23:16:27.927Z",
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
		"liquidityUsd": 892301.83,
		"hash": "54439bf0e434fcc27f3f9d5cf25126033a833439b9ee89fa931f3963d8e38e6e"
	},
	{
		"id": "974e3048e396",
		"ts": "2026-08-15T23:16:28.140Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 127353.09,
		"hash": "974e3048e3966a34d655f721647e91d003e976571c8a7ac1da7badaaa332a168"
	},
	{
		"id": "2e2b265ba131",
		"ts": "2026-08-15T23:16:28.360Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 278016.86,
		"hash": "2e2b265ba13125594befee1a8442bcb1456c74e18c9264a34a1b824fc20fb8ba"
	},
	{
		"id": "86d2d2ec64a2",
		"ts": "2026-08-15T23:16:28.577Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"low_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "86d2d2ec64a2800d8e252ecb870a384814d06886ca01ea42bae2e901073c7d12"
	},
	{
		"id": "ca60ad18f4df",
		"ts": "2026-08-15T23:16:28.824Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9550877.28,
		"hash": "ca60ad18f4dff45acdcdaed7e9d418030d4842c25ce6e66adfcd7f4183aa0fbb"
	},
	{
		"id": "41c6207f850d",
		"ts": "2026-08-15T23:16:29.043Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 384676.58,
		"hash": "41c6207f850de7743e5e8969010c1b81bf408627c2186a95aaf8034c22d12166"
	},
	{
		"id": "b35fe3f8ab81",
		"ts": "2026-08-15T23:16:29.259Z",
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
		"liquidityUsd": 641983.22,
		"hash": "b35fe3f8ab810d970c4f8e8fc39a7999a3afba2dbd48dbd433da1a6a641ec1d7"
	},
	{
		"id": "bfa195fd75dc",
		"ts": "2026-08-15T23:16:29.472Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 629047.53,
		"hash": "bfa195fd75dc12787323e4f96867d1e46459292e3865175087141827e953239b"
	},
	{
		"id": "bbd65b51cfb2",
		"ts": "2026-08-15T23:16:29.690Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1487720.32,
		"hash": "bbd65b51cfb2063c77ca107f39cf0eb3751a06a2b8aacf6e2651f129006de7df"
	},
	{
		"id": "150214941c52",
		"ts": "2026-08-15T22:17:00.491Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111401719.03,
		"hash": "150214941c52df470890d33fbbab24ecd83a1dee127256c1296168a81ac31bf3"
	},
	{
		"id": "187c8b3e5c1a",
		"ts": "2026-08-15T22:17:00.699Z",
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
		"liquidityUsd": 17098732.39,
		"hash": "187c8b3e5c1aba55f66764d63a9990f75f30cd83236a1a222685fe6fb4d08b52"
	},
	{
		"id": "295640bb4e58",
		"ts": "2026-08-15T22:17:01.005Z",
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
		"liquidityUsd": 813596.19,
		"hash": "295640bb4e5848289392bcc170b38f7ca9a713be2a9e31ad3d0931b0623ce990"
	},
	{
		"id": "4aebdf77ac3f",
		"ts": "2026-08-15T22:17:01.203Z",
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
		"liquidityUsd": 26638990.07,
		"hash": "4aebdf77ac3f6aa25b2e285c35b79a0621bae46d7804dd623bbc0b308ca80629"
	},
	{
		"id": "9d999d7605dc",
		"ts": "2026-08-15T22:17:01.435Z",
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
		"liquidityUsd": 4168311.94,
		"hash": "9d999d7605dc620dc3fa931b0d105e43a64f4827fd38d0b5e0aaeddbd84fc4cc"
	},
	{
		"id": "de1da093abdd",
		"ts": "2026-08-15T22:17:01.659Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 896981.25,
		"hash": "de1da093abddc88c0ffa814fa8fe5d9286ebe65c132accc29e489dbea910558b"
	},
	{
		"id": "1ceaf5e9147f",
		"ts": "2026-08-15T22:17:01.888Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26638990.07,
		"hash": "1ceaf5e9147f4e5b097c7de1344e1f13260c01ef9f2ed4e3d6024d591c9c471e"
	},
	{
		"id": "9b9bd20c133c",
		"ts": "2026-08-15T22:17:02.087Z",
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
		"liquidityUsd": 4059059.17,
		"hash": "9b9bd20c133c2cdc52c9f03736d2b5bd55c3056b5b8f374e506631e4a02b9c38"
	},
	{
		"id": "0821f6a626e0",
		"ts": "2026-08-15T22:17:02.325Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2552491.52,
		"hash": "0821f6a626e0f8deb06246312898441efa1cc0926524a162ea3e6294ea0be5e9"
	},
	{
		"id": "d1efe9abba24",
		"ts": "2026-08-15T22:17:02.530Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 5159797.71,
		"hash": "d1efe9abba24912b9b6b55c81f7122910f5ce95c7b9988d46d6a0740ef5264ff"
	},
	{
		"id": "f0b5cfe7f2a2",
		"ts": "2026-08-15T22:17:02.716Z",
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
		"liquidityUsd": 893702.66,
		"hash": "f0b5cfe7f2a296d3562760c0b5573fe40cd26baf41f3e8312498e8c32fe6a559"
	},
	{
		"id": "fde41a81b613",
		"ts": "2026-08-15T22:17:02.927Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 278081.21,
		"hash": "fde41a81b6136fb3a945205575f9087161bc74fdf19749c13e9a2194d01751f3"
	},
	{
		"id": "d7505d6f8336",
		"ts": "2026-08-15T22:17:03.105Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 128250.84,
		"hash": "d7505d6f8336e9771aa2c3f9af61fe12e4a3512bdad7e1730a4d1762f23f6b39"
	},
	{
		"id": "bdb0df01d3bb",
		"ts": "2026-08-15T22:17:03.298Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "bdb0df01d3bb9aae26bb2034a8b29b92fde356ff02d7a2543d1dd1f24b5464fa"
	},
	{
		"id": "ff821895ca68",
		"ts": "2026-08-15T22:17:03.486Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9507783.14,
		"hash": "ff821895ca68e550ceb70f40ef7d33793ac1a44c99c8e06b9ce0cdb080a3e8df"
	},
	{
		"id": "620a93cbe80f",
		"ts": "2026-08-15T22:17:03.704Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 384019.97,
		"hash": "620a93cbe80f491ba0b21a704d144db534ae43eca1b27fbd5d729b06d59e0b81"
	},
	{
		"id": "e44e9ed65f26",
		"ts": "2026-08-15T22:17:03.907Z",
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
		"liquidityUsd": 643401.56,
		"hash": "e44e9ed65f261d499ab5624351ff5c73268330029cc94de8ed7c94c6673cf1b7"
	},
	{
		"id": "9f6af03b50dd",
		"ts": "2026-08-15T22:17:04.106Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 628580.25,
		"hash": "9f6af03b50dd3fed70cf8b8224ce9956e7cc5ab4866060d0cde171a1816a814f"
	},
	{
		"id": "53139de393fd",
		"ts": "2026-08-15T22:17:04.292Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1483983.71,
		"hash": "53139de393fd374a738643a4167937bb3b98a051a299441f9b610bc05f84d9d3"
	},
	{
		"id": "fd3caf00a089",
		"ts": "2026-08-15T21:16:59.964Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111423145.41,
		"hash": "fd3caf00a089a55b0e0aa355898ef70b62a0792a6affc21126c7f3488401605d"
	},
	{
		"id": "9a96b748106b",
		"ts": "2026-08-15T21:17:00.666Z",
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
		"liquidityUsd": 15910190.58,
		"hash": "9a96b748106b426c7931f6c10d468d4b7b8a7fbc49774974001c9b1ac3ceabf9"
	},
	{
		"id": "159b66e87fe6",
		"ts": "2026-08-15T21:17:01.325Z",
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
		"liquidityUsd": 813220.62,
		"hash": "159b66e87fe6fa336a197dc9a358285b8c94bb4769bd740d20d218c59338a175"
	},
	{
		"id": "6df532be9ee1",
		"ts": "2026-08-15T21:17:01.750Z",
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
		"liquidityUsd": 26630897.09,
		"hash": "6df532be9ee1cd559e45969f57ba519f75ac60819a155cc617ae52210a6bd564"
	},
	{
		"id": "d23d6b630093",
		"ts": "2026-08-15T21:17:02.192Z",
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
		"liquidityUsd": 4167911.81,
		"hash": "d23d6b630093c503501a694e830efa555535bceba4d83f94594b225d41cb08ba"
	},
	{
		"id": "cefa723440ef",
		"ts": "2026-08-15T21:17:02.470Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 896981.25,
		"hash": "cefa723440eff5ef1fe73aadbc698fc001ba1477785732395654c7d25deab0c6"
	},
	{
		"id": "c705ff2a211a",
		"ts": "2026-08-15T21:17:02.770Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26630897.09,
		"hash": "c705ff2a211a86860f7ff64b05ab7aa799eecd97e438df5ae222eb99672998c0"
	},
	{
		"id": "19606219f5f7",
		"ts": "2026-08-15T21:17:03.002Z",
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
		"liquidityUsd": 4056029.9,
		"hash": "19606219f5f7785496dc6ef756fd554d51a42276c381dd4320a26c4e818ef65e"
	},
	{
		"id": "bedb08c286f2",
		"ts": "2026-08-15T21:17:03.298Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2550211.5,
		"hash": "bedb08c286f2b22e6964a99b000e03c4d243fc37b2b0bcb93de08dfc27e08f6f"
	},
	{
		"id": "e190d095dfa4",
		"ts": "2026-08-15T21:17:03.530Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 5324418.78,
		"hash": "e190d095dfa4fd0c058896183dcac3788d5986feb01751c8f1ab6ee845ea520a"
	},
	{
		"id": "2abf3e0ad933",
		"ts": "2026-08-15T21:17:03.791Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 892765.61,
		"hash": "2abf3e0ad9333b8522150acc28e8257370694ab51299aaf313053cb7eddf38cf"
	},
	{
		"id": "b81d1544caf0",
		"ts": "2026-08-15T21:17:04.007Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 273245.01,
		"hash": "b81d1544caf0bf0c4a9d2f479619f2f661cc0fc36c6a3e93cf3bdaeae0840742"
	},
	{
		"id": "4cd006fdb7dd",
		"ts": "2026-08-15T21:17:04.221Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "4cd006fdb7dde31d8884f1988962fc6801075b72d3daa00a093e0b2f04c75489"
	},
	{
		"id": "757a59191191",
		"ts": "2026-08-15T21:17:04.437Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9509372.51,
		"hash": "757a591911918fbddeb3704657ed0850762ee52c0180464d3d19dc4d63fe907c"
	},
	{
		"id": "501aedaf1927",
		"ts": "2026-08-15T21:17:04.654Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 384438.23,
		"hash": "501aedaf1927c61608c04cdab3cfaaf482a16b67dccbb32354d0c451b153eedc"
	},
	{
		"id": "31b924ccbe44",
		"ts": "2026-08-15T21:17:04.867Z",
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
		"liquidityUsd": 641915.29,
		"hash": "31b924ccbe44033b6a29b9e30766265dbe9b40bcacba6eed36e7217350eb0aaa"
	},
	{
		"id": "68822bf4a37a",
		"ts": "2026-08-15T21:17:05.087Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 632287.71,
		"hash": "68822bf4a37a827a72007c00cf8e2fd2335d538218d5fdc1e118d777cf86dcc9"
	},
	{
		"id": "5d714be57d02",
		"ts": "2026-08-15T21:17:05.303Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 127016.02,
		"hash": "5d714be57d022d7b7eb1085b669466033f286d74d8be579dddae0c6d05e84825"
	},
	{
		"id": "418e6e1302bc",
		"ts": "2026-08-15T21:17:05.519Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1483202.96,
		"hash": "418e6e1302bc1605373e10179cc7c9247d400f7ece17b9f7906d5da7758cd8f1"
	},
	{
		"id": "8d350f49362e",
		"ts": "2026-08-15T20:17:25.064Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111407388.64,
		"hash": "8d350f49362ea04831c997250848c8e5357658d08eaef2b1bb6ff3b2eadb93e8"
	},
	{
		"id": "1b199b869c8d",
		"ts": "2026-08-15T20:17:25.300Z",
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
		"liquidityUsd": 15914301.12,
		"hash": "1b199b869c8d2eabea2506b4b427331189c94650a6c3ba9c8c16584ec4bfff5d"
	},
	{
		"id": "218a4a2aa111",
		"ts": "2026-08-15T20:17:25.647Z",
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
		"liquidityUsd": 813220.62,
		"hash": "218a4a2aa1112b75f27133dbb226e5b46d847aeea15a152aa19dab61cb72aeff"
	},
	{
		"id": "a23c1aabf34f",
		"ts": "2026-08-15T20:17:25.881Z",
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
		"liquidityUsd": 26630598.71,
		"hash": "a23c1aabf34f6644a53d6765307a218c84797d99c04fd65f435d019e5d2a9ff7"
	},
	{
		"id": "16aa8cc7ce3b",
		"ts": "2026-08-15T20:17:26.110Z",
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
		"liquidityUsd": 4167911.81,
		"hash": "16aa8cc7ce3b991a59fdc599a1a2c6ed19c5b6bf4ec25d480fc513bacc546f02"
	},
	{
		"id": "96f1d6ca2b25",
		"ts": "2026-08-15T20:17:26.340Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 896981.25,
		"hash": "96f1d6ca2b25e384fcc1cd72557aa12f140d6031e8ba828c82582e4e5aebea8c"
	},
	{
		"id": "814407190d68",
		"ts": "2026-08-15T20:17:26.596Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26630598.38,
		"hash": "814407190d6863b18675e12c14b51ba0a94d9d61b75c9cc317fc7914a998f3c3"
	},
	{
		"id": "931bcecc0707",
		"ts": "2026-08-15T20:17:26.826Z",
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
		"liquidityUsd": 4348042.79,
		"hash": "931bcecc070778d9bd83d097565a02de8d417dda7095867a1b1fadea9145581e"
	},
	{
		"id": "0194bedf92e9",
		"ts": "2026-08-15T20:17:27.056Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2551195.84,
		"hash": "0194bedf92e9579603d783a02cc0059b31d5bc502de71dbb80ddfd513e752abf"
	},
	{
		"id": "8064d6c681e5",
		"ts": "2026-08-15T20:17:27.289Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 5332209.46,
		"hash": "8064d6c681e5ae60e2da9324899da05c710db788663cb1a27c8660a2ada45227"
	},
	{
		"id": "ca3b91ecbb0f",
		"ts": "2026-08-15T20:17:27.503Z",
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
		"liquidityUsd": 896279.87,
		"hash": "ca3b91ecbb0f359cb37fbc29721bf1b1c8857ddc44e761206ec4d426ef501113"
	},
	{
		"id": "4cdcb5e0867c",
		"ts": "2026-08-15T20:17:27.719Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 272629.57,
		"hash": "4cdcb5e0867cbd12ff9c96fad758398cd88013f315378368436220702411ad97"
	},
	{
		"id": "b0a558ab82d0",
		"ts": "2026-08-15T20:17:27.934Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "b0a558ab82d0447e88e80600edfd2508b5fac253acf853f0c6d2654f62c83bfc"
	},
	{
		"id": "b62fb4db032e",
		"ts": "2026-08-15T20:17:28.152Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9490028.61,
		"hash": "b62fb4db032e8d48080a4141a94f40b770b07dbd9539c3fe3212f5664565d3dc"
	},
	{
		"id": "ef04383609dd",
		"ts": "2026-08-15T20:17:28.367Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 387523.09,
		"hash": "ef04383609ddcb4f41f6a80375ff1e7235dbdfc2e9dadc05caf573df0465d69d"
	},
	{
		"id": "d2f78d902487",
		"ts": "2026-08-15T20:17:28.581Z",
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
		"liquidityUsd": 641936.91,
		"hash": "d2f78d902487780101dfc80444cc323c107e2ce40502c7d201a8d3931f7be700"
	},
	{
		"id": "4716fd060180",
		"ts": "2026-08-15T20:17:28.797Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 628718.89,
		"hash": "4716fd0601802c69b6334a374dcdb6b5b6255469f9ef475792cedf196dd04031"
	},
	{
		"id": "2f03631d8fb8",
		"ts": "2026-08-15T20:17:29.010Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 134135.5,
		"hash": "2f03631d8fb8f900f2f5f45a64e2a183069b6b8451f7a354be23d6606c3ca139"
	},
	{
		"id": "2c7b845626df",
		"ts": "2026-08-15T20:17:29.227Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1491715.27,
		"hash": "2c7b845626df2bd6c2147f12853546957bed539da2d4d6fbd20a9aa5b677462e"
	},
	{
		"id": "d98a59387ac0",
		"ts": "2026-08-15T19:19:04.917Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111416903.68,
		"hash": "d98a59387ac05b9d2b022eb776b2ee087d92db40db5e7d5fc5e76c5999451b90"
	},
	{
		"id": "030d0773e242",
		"ts": "2026-08-15T19:19:05.176Z",
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
		"liquidityUsd": 15908041.06,
		"hash": "030d0773e242e913018032d4772ed244c5017fb41e341b9f513f315143e0ae5e"
	},
	{
		"id": "1efaf953ce08",
		"ts": "2026-08-15T19:19:05.418Z",
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
		"liquidityUsd": 813220.62,
		"hash": "1efaf953ce08972ae903d1b3bf5aa2a161541becbaa93ef9a6146e761fc8c525"
	},
	{
		"id": "2296f04a2a10",
		"ts": "2026-08-15T19:19:05.661Z",
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
		"liquidityUsd": 26618699.05,
		"hash": "2296f04a2a103984127d9dcfe26d9857da8a983a97148f95cf690714bd139c2d"
	},
	{
		"id": "7e432ea787d2",
		"ts": "2026-08-15T19:19:05.870Z",
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
		"liquidityUsd": 4167911.81,
		"hash": "7e432ea787d221996f38dd6bfeae99d4497ccff7d8a5039129e754967c8a3ab0"
	},
	{
		"id": "384099fbf6dc",
		"ts": "2026-08-15T19:19:06.079Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 896981.25,
		"hash": "384099fbf6dcd054e3fe3cd9444ac26df3c2fa0174c724b1e50f64c26b612438"
	},
	{
		"id": "1145c2f9032f",
		"ts": "2026-08-15T19:19:06.265Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26618699.05,
		"hash": "1145c2f9032f3d6a8ac0e534df1681aed534466dc8afebb2f5bf2a1f453feeee"
	},
	{
		"id": "e9f595e221da",
		"ts": "2026-08-15T19:19:06.484Z",
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
		"liquidityUsd": 4345066.25,
		"hash": "e9f595e221dafa488292cbaf0a3c838260e3cbcdfb80cbf7e52c0444f8846dad"
	},
	{
		"id": "bf4de147c4c6",
		"ts": "2026-08-15T19:19:06.684Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2557767.1,
		"hash": "bf4de147c4c63ea3bb5916668df39bc2c8677b2e0eb899da4c185e0c86b863e6"
	},
	{
		"id": "5868819bc8c3",
		"ts": "2026-08-15T19:19:06.888Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 5142951.44,
		"hash": "5868819bc8c38edc4b06bf22f7ec0b08bfe7c0fb761826e4e14f4b52b50cda3c"
	},
	{
		"id": "157294728fcf",
		"ts": "2026-08-15T19:19:07.069Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 272816.32,
		"hash": "157294728fcf1e55fbac27c8ca6c01451e9fe99642e8abc61d44d4a90d3edff1"
	},
	{
		"id": "0f2e85806aa9",
		"ts": "2026-08-15T19:19:07.288Z",
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
		"liquidityUsd": 895812.04,
		"hash": "0f2e85806aa9a2f079bc49bac2141ce1f52d8aecf48420018a2b6a1ed867fdfc"
	},
	{
		"id": "69279ea02b7b",
		"ts": "2026-08-15T19:19:07.522Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "69279ea02b7bad0cba96cb0eb56715d85dc91f91fb46beadc76319363d5d88d0"
	},
	{
		"id": "187f26b299f7",
		"ts": "2026-08-15T19:19:07.708Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 386014.28,
		"hash": "187f26b299f71d14450381e58319f072d20ddd6c7746b34974552717e0d6a7b2"
	},
	{
		"id": "6b4acce8c760",
		"ts": "2026-08-15T19:19:07.912Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9496663.45,
		"hash": "6b4acce8c76023095a16e6242ebbe384754a825b7f1045005df1adb61bf5c481"
	},
	{
		"id": "b454dde68147",
		"ts": "2026-08-15T19:19:08.106Z",
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
		"liquidityUsd": 641295.03,
		"hash": "b454dde68147eeef35497ecd79ef90b4d0e2dc1af25d31cb286c86a0571811b5"
	},
	{
		"id": "5393640b137a",
		"ts": "2026-08-15T19:19:08.293Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 626198.54,
		"hash": "5393640b137a3b93550c5e35697063de963a439767228692e2485a39183e4b1d"
	},
	{
		"id": "8ebc86e31366",
		"ts": "2026-08-15T19:19:08.484Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1491142.8,
		"hash": "8ebc86e313665a5ac44dce7587531ac061020036d5a740c2baa305dfefbb66fe"
	},
	{
		"id": "2ef25ba94b7e",
		"ts": "2026-08-15T19:19:08.689Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4196368.5,
		"hash": "2ef25ba94b7e2ba47852279d97edba9c5222cd50696778f198c45d905bdd2505"
	},
	{
		"id": "699706bbd7b8",
		"ts": "2026-08-15T18:22:27.393Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111418638.71,
		"hash": "699706bbd7b8e81698e1dd001e1f2fe038372756dc1a31824059d7edb9e8d343"
	},
	{
		"id": "124f9529509b",
		"ts": "2026-08-15T18:22:27.639Z",
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
		"liquidityUsd": 15825061.21,
		"hash": "124f9529509bb9b29465b74c4e15665a2ffe1964ad1319fd4066f28d3a61aaef"
	},
	{
		"id": "ccd2041d8470",
		"ts": "2026-08-15T18:22:27.921Z",
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
		"liquidityUsd": 811923.65,
		"hash": "ccd2041d8470b867da04247b241b9713511945ff8b1cf5153f30f4b3634f1717"
	},
	{
		"id": "52328d9fb3b9",
		"ts": "2026-08-15T18:22:28.175Z",
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
		"liquidityUsd": 26629963.19,
		"hash": "52328d9fb3b9a79b617ac5d62d296990a8b5f3bb5e59fe1fba7278ffeb0ab465"
	},
	{
		"id": "82c66d21b6d2",
		"ts": "2026-08-15T18:22:28.418Z",
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
		"liquidityUsd": 4167911.81,
		"hash": "82c66d21b6d2c9e6cc0a170fbd29789d093b774a22780c158e785311938f5e88"
	},
	{
		"id": "fd4d32b77633",
		"ts": "2026-08-15T18:22:28.679Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 896981.25,
		"hash": "fd4d32b77633ebaa1e319bd4d7a0c2fc2884720aa51de0ba9a2d062094d5a9a4"
	},
	{
		"id": "775b1b461c74",
		"ts": "2026-08-15T18:22:28.918Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26629963.19,
		"hash": "775b1b461c74447d42d2db64cc7857024cd293917ee2bdb7c9a156776d0a62cd"
	},
	{
		"id": "7a26383e6813",
		"ts": "2026-08-15T18:22:29.192Z",
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
		"liquidityUsd": 4348536.45,
		"hash": "7a26383e6813e3155fb51e039983057b2d2d3031d69a1af7e6c9030f9dfa1d6e"
	},
	{
		"id": "662f2bca10d6",
		"ts": "2026-08-15T18:22:29.422Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2580554.32,
		"hash": "662f2bca10d6e539ad188bd20c3a54e96e069ff6c1372ad14eb3a0deda613555"
	},
	{
		"id": "2fd301171ffd",
		"ts": "2026-08-15T18:22:29.662Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 5434122.11,
		"hash": "2fd301171ffdc9358eaceed1f83cc4f725124d498dd398d752c12254ed398775"
	},
	{
		"id": "e31cbc282ac0",
		"ts": "2026-08-15T18:22:29.917Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 272765.72,
		"hash": "e31cbc282ac0e6e7dd28da839c7b2a239a5dbc4f581954f51437f11fc18c400d"
	},
	{
		"id": "c0c47f513737",
		"ts": "2026-08-15T18:22:30.136Z",
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
		"liquidityUsd": 895910.37,
		"hash": "c0c47f513737c094de4724b83129f2bdedbafe57f4632abfafeee095b0a2cd12"
	},
	{
		"id": "da2c9611d17c",
		"ts": "2026-08-15T18:22:30.360Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "da2c9611d17cd96efcb05776ef8da4742840f5c9a56fe96c61dff803038a1497"
	},
	{
		"id": "a9fbff11ef71",
		"ts": "2026-08-15T18:22:30.579Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 389901.36,
		"hash": "a9fbff11ef71c001090299c6bd182fb7806debc10584d4dd94bfc5d7b22cc012"
	},
	{
		"id": "15d280866880",
		"ts": "2026-08-15T18:22:30.806Z",
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
		"liquidityUsd": 641058.98,
		"hash": "15d280866880999803ae763170eabe64666e5f73eedd229cd214ecf2f51f2eb2"
	},
	{
		"id": "4cebab357be0",
		"ts": "2026-08-15T18:22:31.033Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9492656.97,
		"hash": "4cebab357be0b443694bc6a00159e9db00db1b6d724549f4212e14acaa3ebc73"
	},
	{
		"id": "8df72ea5bd2a",
		"ts": "2026-08-15T18:22:31.252Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 622439.46,
		"hash": "8df72ea5bd2aa2b64dbe6502059c34a4a481df8550f221fffd3f5a25b5c61aa9"
	},
	{
		"id": "22f8cc427f74",
		"ts": "2026-08-15T18:22:31.483Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1496126.12,
		"hash": "22f8cc427f74f7bb861a5b91fecce0cd030087f06d0df9cdff1adbe5c87d3739"
	},
	{
		"id": "4588150e9134",
		"ts": "2026-08-15T18:22:31.698Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4210945.62,
		"hash": "4588150e91348750577f71bfcec3b080f5fd2e7dabdefc32eaed484fe4f393c1"
	},
	{
		"id": "9c3bf94d53e1",
		"ts": "2026-08-15T17:17:08.041Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111436465.95,
		"hash": "9c3bf94d53e1adcb017ef13cce559899a5d9da73e9cea9e9b1a166b619319f56"
	},
	{
		"id": "29bf2c79b5af",
		"ts": "2026-08-15T17:17:08.409Z",
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
		"liquidityUsd": 15721767.59,
		"hash": "29bf2c79b5afcb296a178f181bedbb83d81b6f5d0b4794a793c8ee15caa54c0c"
	},
	{
		"id": "b0434934b9a4",
		"ts": "2026-08-15T17:17:08.740Z",
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
		"liquidityUsd": 807943.57,
		"hash": "b0434934b9a4eb27324774c0789180cfb7f28ecf0defe6ce98d6f6d052b01672"
	},
	{
		"id": "8b80bbe0b4e4",
		"ts": "2026-08-15T17:17:09.054Z",
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
		"liquidityUsd": 26562958.48,
		"hash": "8b80bbe0b4e4c0725b31b285274df5cb20be492986741114aba9a9643d29d817"
	},
	{
		"id": "5a2204ca3cc2",
		"ts": "2026-08-15T17:17:09.243Z",
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
		"liquidityUsd": 4166685.24,
		"hash": "5a2204ca3cc25590645b45cc230885bce3913a494971ac01634a832a8894d3e3"
	},
	{
		"id": "cacbdd61ec37",
		"ts": "2026-08-15T17:17:09.445Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 896981.25,
		"hash": "cacbdd61ec3715949e4b992598c5f896416ca6baa284ce5696ae04baa2d1bc79"
	},
	{
		"id": "d42db649450b",
		"ts": "2026-08-15T17:17:09.647Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26562958.48,
		"hash": "d42db649450b62f12a24cc2ae093bb22206f95f0935d877e2ec9f5dff96c3490"
	},
	{
		"id": "c8bc67ca6cb3",
		"ts": "2026-08-15T17:17:09.868Z",
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
		"liquidityUsd": 4350968.44,
		"hash": "c8bc67ca6cb3fd7d2f3e96add28e8dcc7e9ed701c76c3cd7378eea63ee4e92b9"
	},
	{
		"id": "34ae325819ca",
		"ts": "2026-08-15T17:17:10.054Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2643787.53,
		"hash": "34ae325819ca3def87f44cf7b0adc53c4b3ab981f64da18805891de7327337a4"
	},
	{
		"id": "75e155b61077",
		"ts": "2026-08-15T17:17:10.240Z",
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
		"liquidityUsd": 5345327.85,
		"hash": "75e155b610776b00b16691f7c7d3e8c6078fa660f096d91c0b89e44a433ec469"
	},
	{
		"id": "c9fbeb2e3f97",
		"ts": "2026-08-15T17:17:10.434Z",
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
		"liquidityUsd": 271734.19,
		"hash": "c9fbeb2e3f972492f19677ecc210b7aca4c11cb4f020a28994eb21114612a0ce"
	},
	{
		"id": "1a2d80e73de1",
		"ts": "2026-08-15T17:17:10.644Z",
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
		"liquidityUsd": 896532.3,
		"hash": "1a2d80e73de1e1a78ce7d8bb066e7beee6d1d402e754fd15cec7af8652f26d85"
	},
	{
		"id": "83d51e5012ae",
		"ts": "2026-08-15T17:17:10.819Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "83d51e5012ae7ca7d520e731fcf2a7f6104ec622b50d98727b5b132e1fdb7529"
	},
	{
		"id": "eaa784d0f90b",
		"ts": "2026-08-15T17:17:11.042Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 384166.68,
		"hash": "eaa784d0f90bcad031b06ab4f14137628d8adec51e2b62d7aaa827d062241201"
	},
	{
		"id": "f7f95fd33b99",
		"ts": "2026-08-15T17:17:11.241Z",
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
		"liquidityUsd": 639963.05,
		"hash": "f7f95fd33b9952f85b313fff31713a1312ac6ee425bbfadf87bafcc24ebea6f8"
	},
	{
		"id": "e9ff04377a9f",
		"ts": "2026-08-15T17:17:11.465Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9500618.22,
		"hash": "e9ff04377a9fe402eca88818d4575e55be80afe60bf794588dd9e90406bee50d"
	},
	{
		"id": "872bb8f17342",
		"ts": "2026-08-15T17:17:11.657Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1497119.34,
		"hash": "872bb8f17342228eb1a79c6c1048f3e781cbc2a136ed0d6e7f4b6622f97ac3b8"
	},
	{
		"id": "5870a5fdf210",
		"ts": "2026-08-15T17:17:11.846Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4193328.31,
		"hash": "5870a5fdf210553f1ee34fbee624434db4fc9f48cff21c4864b4147a54e41bb7"
	},
	{
		"id": "3df52746fc81",
		"ts": "2026-08-15T16:18:54.749Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111532630.85,
		"hash": "3df52746fc8177788d0ddeae55ce2ffff4afe563540c6418dcf41499527affa1"
	},
	{
		"id": "ea5786b218a8",
		"ts": "2026-08-15T16:18:55.198Z",
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
		"liquidityUsd": 15831815.26,
		"hash": "ea5786b218a841f70a7a479d6714a1fa504c28c1ae3cc759739406a0623b1930"
	},
	{
		"id": "451940d29d23",
		"ts": "2026-08-15T16:18:55.507Z",
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
		"liquidityUsd": 803239.12,
		"hash": "451940d29d238af0238f825521a63b70bd8b64f7a579d2be57240cdde80375aa"
	},
	{
		"id": "195ce6cd408f",
		"ts": "2026-08-15T16:18:55.690Z",
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
		"liquidityUsd": 26562654.18,
		"hash": "195ce6cd408f26d9027c1cc0b45d7ff04b991b8e877e4f953e7165efcf9c4e74"
	},
	{
		"id": "e27b48daacbb",
		"ts": "2026-08-15T16:18:55.899Z",
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
		"liquidityUsd": 4156751.26,
		"hash": "e27b48daacbb35dc1461b6e8101d6ca06c3e665fe699767a37243af83567c0a2"
	},
	{
		"id": "8004b390220a",
		"ts": "2026-08-15T16:18:56.122Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 895826.69,
		"hash": "8004b390220a80eddc7f16ddd822ba524fb00dd87cc6542989e3d8e676b38291"
	},
	{
		"id": "c363f017c42e",
		"ts": "2026-08-15T16:18:56.318Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26562654.18,
		"hash": "c363f017c42e5360d7c21d7cc2bf125a36a80697986888499c9f786a8223acdc"
	},
	{
		"id": "225c5ac7e0a8",
		"ts": "2026-08-15T16:18:56.530Z",
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
		"liquidityUsd": 4348706.56,
		"hash": "225c5ac7e0a81f381dba9928d88becdea0328c8fc20b5ba84687f6690ad5eb09"
	},
	{
		"id": "b5bbb3ff3d73",
		"ts": "2026-08-15T16:18:56.720Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2591283.16,
		"hash": "b5bbb3ff3d73d2c0cd2d9dc53ca20b9e15dcb01747a373572ddbd76e26662fff"
	},
	{
		"id": "bba377075ec2",
		"ts": "2026-08-15T16:18:56.906Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 5472921.9,
		"hash": "bba377075ec20e977a6410d14338722b7b510b70682c5eb0770a262544be6e0b"
	},
	{
		"id": "f37c25bcbae3",
		"ts": "2026-08-15T16:18:57.097Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 268426.2,
		"hash": "f37c25bcbae3818fbab0555795369c92ffd5a8df417b29787c11b2c89a53d567"
	},
	{
		"id": "b45b822a51e7",
		"ts": "2026-08-15T16:18:57.289Z",
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
		"liquidityUsd": 895825.81,
		"hash": "b45b822a51e7b4ce3f806519b4da5bee19739567af982b428c59cffaa215658e"
	},
	{
		"id": "f7829f01481d",
		"ts": "2026-08-15T16:18:57.475Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "f7829f01481d6f7b26763acb1cfca03ce33e45d5cf5aafab9da442deef5845df"
	},
	{
		"id": "88e54db53488",
		"ts": "2026-08-15T16:18:57.676Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 378238.96,
		"hash": "88e54db534881c3304338fcaa60e57faa638eb0196e476aa62e896f94550b8e3"
	},
	{
		"id": "48b6933d0e08",
		"ts": "2026-08-15T16:18:57.866Z",
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
		"liquidityUsd": 639864.29,
		"hash": "48b6933d0e0874bf9ccc730635218c49671eeca775ace4890e13575719ffdf80"
	},
	{
		"id": "7d03ed56ffcc",
		"ts": "2026-08-15T16:18:58.050Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9487436.61,
		"hash": "7d03ed56ffcc72e4577e44041852d484757aaaedc5ed7bbace21ea7cd6de306d"
	},
	{
		"id": "d25a91afe1d2",
		"ts": "2026-08-15T16:18:58.237Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1496689.14,
		"hash": "d25a91afe1d2eac08e10c5acbaa0316f2ad747458679477735fa9128da69c620"
	},
	{
		"id": "9932d16757f4",
		"ts": "2026-08-15T16:18:58.456Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 852084.43,
		"hash": "9932d16757f44a24d1b5ad349735a834eb3184005be6ccc50b04084b5e097303"
	},
	{
		"id": "730442712406",
		"ts": "2026-08-15T15:16:08.047Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111512934.31,
		"hash": "730442712406a6ba17c8176b26464a57e96d23858831d4a2c220bcea8ddf697f"
	},
	{
		"id": "f1cd0e582e25",
		"ts": "2026-08-15T15:16:08.288Z",
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
		"liquidityUsd": 15800328.13,
		"hash": "f1cd0e582e25551d0ee0a727d6a98f361e4637f3506040efa8b82233ef2ee58d"
	},
	{
		"id": "c532901f4932",
		"ts": "2026-08-15T15:16:08.522Z",
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
		"liquidityUsd": 798767.04,
		"hash": "c532901f4932cb61ccef453f41a4ffa8136de52d0d2ed94e49e290eb1b6924ca"
	},
	{
		"id": "3e2d4d615284",
		"ts": "2026-08-15T15:16:08.749Z",
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
		"liquidityUsd": 26486962.41,
		"hash": "3e2d4d61528484956de5fb22957c0454def7dc31305c1386808cb94e8e9b933a"
	},
	{
		"id": "ae7f5e39e140",
		"ts": "2026-08-15T15:16:08.985Z",
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
		"liquidityUsd": 4155192.14,
		"hash": "ae7f5e39e140c8b9171dae089bc69c97626fb729d9df1b8682c5da6b42252df6"
	},
	{
		"id": "d011068b7114",
		"ts": "2026-08-15T15:16:09.213Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 894594.44,
		"hash": "d011068b7114a9719c907003ef793d26eda3c47a8aff8379d2fa862a0125f7b5"
	},
	{
		"id": "998cccf6c4f4",
		"ts": "2026-08-15T15:16:09.444Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26487962.41,
		"hash": "998cccf6c4f42a756ca0b5ea48309d074722cc3782193000ea83a9d57bd1cf79"
	},
	{
		"id": "9b906134602a",
		"ts": "2026-08-15T15:16:09.674Z",
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
		"liquidityUsd": 3798348.86,
		"hash": "9b906134602a726cb3992d8af903712cdf605d0b9f2b3215fe46ece1c7caf8a2"
	},
	{
		"id": "895d85fb8e1e",
		"ts": "2026-08-15T15:16:09.906Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2567350.64,
		"hash": "895d85fb8e1ee68390cd9491e8c515af6bccfdfc5ef071c735a06399304b48db"
	},
	{
		"id": "89b0fa162705",
		"ts": "2026-08-15T15:16:10.140Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 6442501.52,
		"hash": "89b0fa162705bfc8613bfb1edcdd26575ecfaea0bc4dfa5208a8b4997791cf96"
	},
	{
		"id": "cc99d629f2c6",
		"ts": "2026-08-15T15:16:10.353Z",
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
		"liquidityUsd": 273775.77,
		"hash": "cc99d629f2c687b4ca37f2a285b60347ed6504feeca9943837f66748b1e35170"
	},
	{
		"id": "d92ca0ba46e7",
		"ts": "2026-08-15T15:16:10.571Z",
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
		"liquidityUsd": 893261.63,
		"hash": "d92ca0ba46e7dfe7c293e3c05d5f7583f950a400741de61132cc199096d1e162"
	}
]
