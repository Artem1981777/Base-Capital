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
	"updatedAt": "2026-07-17T02:24:32.755Z",
	"tokensScored": 3776,
	"verdictsIssued": 3776,
	"safe": 3347,
	"risky": 311,
	"likelyRug": 118,
	"ticks": 233
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "f2b690c44f28",
		"ts": "2026-07-17T02:24:28.206Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105396062.15,
		"hash": "f2b690c44f285b2d30931e070ff89d466ebcf0ab35d77376af4003c9d5ed4b4d"
	},
	{
		"id": "4ce98c3d171b",
		"ts": "2026-07-17T02:24:28.672Z",
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
		"liquidityUsd": 15288823.61,
		"hash": "4ce98c3d171b954c65160b08894c1616f2a2933a3cabfe1c1137b228f0274fec"
	},
	{
		"id": "cd7d6a33c77f",
		"ts": "2026-07-17T02:24:28.911Z",
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
		"liquidityUsd": 1129788.51,
		"hash": "cd7d6a33c77f5eddfce66c2ed98992b97624e83903fd6492a6524436f8ca6e29"
	},
	{
		"id": "8f77518297e7",
		"ts": "2026-07-17T02:24:29.168Z",
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
		"liquidityUsd": 29276327.03,
		"hash": "8f77518297e706e8aaf49f366e8e87da6f9bd7c7fc9d9b26b1c2c1ae237468d5"
	},
	{
		"id": "be437ee4fd2d",
		"ts": "2026-07-17T02:24:29.406Z",
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
		"liquidityUsd": 4682409.87,
		"hash": "be437ee4fd2d62e6584947faf88b97a629633d7582dffb3f4d1985cec304d2c5"
	},
	{
		"id": "2d6d3dabaa5b",
		"ts": "2026-07-17T02:24:29.656Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 996208.28,
		"hash": "2d6d3dabaa5b69db9d24096938e70b84823c1f7fced41a3f74dd374e08e62f0c"
	},
	{
		"id": "7096d5a7679e",
		"ts": "2026-07-17T02:24:29.897Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29276327.03,
		"hash": "7096d5a7679e96d7205e4d6c703c0f695f172bb480ad9eee7882eac8716eeea0"
	},
	{
		"id": "1b525f212499",
		"ts": "2026-07-17T02:24:30.145Z",
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
		"liquidityUsd": 2471298.03,
		"hash": "1b525f212499f74121331c1466355f23c5f454bc2edb4b4e1d8f2e76f927f352"
	},
	{
		"id": "a6294a3f5ed6",
		"ts": "2026-07-17T02:24:30.394Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 918197.52,
		"hash": "a6294a3f5ed63993e4865ffcf957c3ef66b589a56955b765c5b0c6a65f90bcce"
	},
	{
		"id": "b1332beb3d3b",
		"ts": "2026-07-17T02:24:30.855Z",
		"symbol": "doji",
		"token": "0x693B8De886712f0039EEf578bbE5aC7ea3B598CE",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 130217.97,
		"hash": "b1332beb3d3b8c68dda0bf0318cde8dd42091d72c5f9cfbc5c3380dcd4586391"
	},
	{
		"id": "1953b408edcb",
		"ts": "2026-07-17T02:24:31.166Z",
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
		"liquidityUsd": 611225.24,
		"hash": "1953b408edcbd05b1f9be709e825523013f61de700de1ea928de6c34c7c4840f"
	},
	{
		"id": "12c348e2a058",
		"ts": "2026-07-17T02:24:31.400Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 96082.58,
		"hash": "12c348e2a0583ff5708167d071e3a4a6ac2125b28f96340bf3801525586daccd"
	},
	{
		"id": "5a3e685fb709",
		"ts": "2026-07-17T02:24:31.622Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 374430.49,
		"hash": "5a3e685fb7099a2b4e03f39888855be7364d171d818bf15fbb1795e6a191531f"
	},
	{
		"id": "ffe83ffafa70",
		"ts": "2026-07-17T02:24:31.854Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 88557.78,
		"hash": "ffe83ffafa70f80d3630f4e9fe3386e6e5f103673f0b12ed4eb47b63eadcbef2"
	},
	{
		"id": "7f3a9a7979e0",
		"ts": "2026-07-17T02:24:32.072Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 741962.45,
		"hash": "7f3a9a7979e0a54f5709913ca24cc770e87325afd85697dee41036b23173ccfa"
	},
	{
		"id": "800223fb8e67",
		"ts": "2026-07-17T02:24:32.304Z",
		"symbol": "$COBIE",
		"token": "0x199084f1390B58493096Ff73Ec74c68164ba8453",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 77258.62,
		"hash": "800223fb8e67bb8ea7b68f1a05a57e28e21aaa66b1cfbdddd7a2c6412675a23a"
	},
	{
		"id": "5232bf082216",
		"ts": "2026-07-17T02:24:32.522Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 459697.95,
		"hash": "5232bf0822163b15f2acc7fd557a0d67876d4c0d370c56c0047f627206831a3e"
	},
	{
		"id": "c6676e9f6c3a",
		"ts": "2026-07-17T02:24:32.755Z",
		"symbol": "BASEMATE",
		"token": "0x07E61D8a4e197dfC269e90D7ECe1dF0D26702bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 156005.31,
		"hash": "c6676e9f6c3a77e21b89ee7d5f28f9a9d694ac45ea5dd9271501158c30677627"
	},
	{
		"id": "8b52a0b615f0",
		"ts": "2026-07-16T23:55:35.218Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105947247.75,
		"hash": "8b52a0b615f0cf297a2c1391ec09e86ed5b27d8c504a46841092a6a6a94bc54e"
	},
	{
		"id": "5ef4eb5846ed",
		"ts": "2026-07-16T23:55:35.467Z",
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
		"liquidityUsd": 15396424.79,
		"hash": "5ef4eb5846ed1c82f4fd8aa38c0829622cd225cdbfe3bfa74482541c6e804d82"
	},
	{
		"id": "bd705de9a4bb",
		"ts": "2026-07-16T23:55:35.713Z",
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
		"liquidityUsd": 1136376.21,
		"hash": "bd705de9a4bb1d4f5fa664f3cb42af2c829dadadd52b4143b1c8950bcd20bc91"
	},
	{
		"id": "06767079be85",
		"ts": "2026-07-16T23:55:35.960Z",
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
		"liquidityUsd": 29308026.09,
		"hash": "06767079be854e94034a67cbb3fbc8ebd980ee13981f9267e132b618eeeceddd"
	},
	{
		"id": "a956ab1c51ed",
		"ts": "2026-07-16T23:55:36.206Z",
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
		"liquidityUsd": 4749234.04,
		"hash": "a956ab1c51edf1009dcae743f68d745fe06856df42d1a1e8254e113471322a9e"
	},
	{
		"id": "370f72af8ac4",
		"ts": "2026-07-16T23:55:36.452Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 996345.89,
		"hash": "370f72af8ac4462df168d78190274a219a5aa91c6def18ca033280198941824c"
	},
	{
		"id": "e5e1c0f8e80d",
		"ts": "2026-07-16T23:55:36.693Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29308026.09,
		"hash": "e5e1c0f8e80d7ce431d37ab80e0eb029e052eababd8077ab91d1210a2b1561d9"
	},
	{
		"id": "1d639966bf69",
		"ts": "2026-07-16T23:55:57.367Z",
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
		"liquidityUsd": 2485820.95,
		"hash": "1d639966bf6959b384c98d82aab3f812472e18c2b5d565a5d83ab42b93e7e1fe"
	},
	{
		"id": "d85b0cf60d32",
		"ts": "2026-07-16T23:55:57.660Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 840369.71,
		"hash": "d85b0cf60d3262e148547a9a377c22d16080d962c05c0cbcbcbe48017770fba7"
	},
	{
		"id": "1709c53a22b7",
		"ts": "2026-07-16T23:55:57.911Z",
		"symbol": "doji",
		"token": "0x693B8De886712f0039EEf578bbE5aC7ea3B598CE",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 160598.19,
		"hash": "1709c53a22b771eae1027cff3f95d27a5d2cfa64d92ee46b15c51a7f1296ffeb"
	},
	{
		"id": "e70414b31d4d",
		"ts": "2026-07-16T23:55:58.143Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 62510.81,
		"hash": "e70414b31d4d0af9c958b79ece85e46215f6a66773968bc4a6a5271541e298a0"
	},
	{
		"id": "15c9f69d1944",
		"ts": "2026-07-16T23:55:58.447Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 84531.92,
		"hash": "15c9f69d194416bcf119dc374ff2986ce7f8774cbae0242482a491dd29eb7df7"
	},
	{
		"id": "25607df1d977",
		"ts": "2026-07-16T23:55:58.679Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 425862.31,
		"hash": "25607df1d977772e8d83895b865a66a18ce7f7c321814c1bd72279839b9868f9"
	},
	{
		"id": "9e184af8eab8",
		"ts": "2026-07-16T23:56:07.565Z",
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
		"liquidityUsd": 2159526.12,
		"hash": "9e184af8eab8160a495d2ad2317b03eb30c8aaf8b3a7913ab07f21d0dc18f39a"
	},
	{
		"id": "1aa6d9dc57d7",
		"ts": "2026-07-16T23:56:08.097Z",
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
		"liquidityUsd": 696542.49,
		"hash": "1aa6d9dc57d71d2f9a8520535b9b1afcdda702a2a3125f9e8976609bd3ea9c0d"
	},
	{
		"id": "c64677a5bd49",
		"ts": "2026-07-16T23:56:10.090Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 263472.27,
		"hash": "c64677a5bd4936019fc4d258e55fb8c06863082191add3db32fb8c13665edba3"
	},
	{
		"id": "4d9281fad5b4",
		"ts": "2026-07-16T23:56:10.352Z",
		"symbol": "$COBIE",
		"token": "0x199084f1390B58493096Ff73Ec74c68164ba8453",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 70426.24,
		"hash": "4d9281fad5b49bc8d8700255c7c762d292185d5050f868dd4cf8f14e9d773e90"
	},
	{
		"id": "193716a0dfd2",
		"ts": "2026-07-16T22:00:31.923Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106311613.85,
		"hash": "193716a0dfd270bebc16d36254f7ad6f16eac365522358778559b84d4538dc84"
	},
	{
		"id": "24adb36ada5f",
		"ts": "2026-07-16T22:00:32.273Z",
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
		"liquidityUsd": 13755572.34,
		"hash": "24adb36ada5f0411f629313ad68a71de33966bcf9ec70751ae88b1a7de2e7205"
	},
	{
		"id": "d7c390a802bd",
		"ts": "2026-07-16T22:00:32.469Z",
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
		"liquidityUsd": 1149062.11,
		"hash": "d7c390a802bd8ac8bd7032502580001f8ac22136f5effbcbf1ca6bbf193eaf4a"
	},
	{
		"id": "080640c0131d",
		"ts": "2026-07-16T22:00:33.536Z",
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
		"liquidityUsd": 29748284.91,
		"hash": "080640c0131d578a725d89416b6d3a6b537e71fb06659152cfe053e9fec4e665"
	},
	{
		"id": "acc06f121e00",
		"ts": "2026-07-16T22:00:33.882Z",
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
		"liquidityUsd": 4820763.1,
		"hash": "acc06f121e00581e77a281294d055c85cdbea6d630ce8105cdd59572bcdbd542"
	},
	{
		"id": "a7500713f321",
		"ts": "2026-07-16T22:00:34.277Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 996330.63,
		"hash": "a7500713f32118ccae0d83e70babb4d8ad8e5b73bd5f466ecd068fa523416b15"
	},
	{
		"id": "8396320d7f7e",
		"ts": "2026-07-16T22:00:34.466Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29748284.91,
		"hash": "8396320d7f7e9f1c023a612cf8116e12c6d8b51e47b3ff587490a7a0937359d1"
	},
	{
		"id": "83e4b1303db3",
		"ts": "2026-07-16T22:00:34.679Z",
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
		"liquidityUsd": 2503550.94,
		"hash": "83e4b1303db39c0251a3f92b9c7e9f213100ee9e5397a39e473f48934ebba271"
	},
	{
		"id": "dc5878b395c0",
		"ts": "2026-07-16T22:00:34.866Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 852232.68,
		"hash": "dc5878b395c03f302a60ff7c6253b12672358dd7ebe73c6a8e5b5c5ed79e7b4b"
	},
	{
		"id": "3c5d4c59637c",
		"ts": "2026-07-16T22:00:35.053Z",
		"symbol": "doji",
		"token": "0x693B8De886712f0039EEf578bbE5aC7ea3B598CE",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 147563.67,
		"hash": "3c5d4c59637cff654b60e6eb45e95f0e2e9c8b104d0721517c42ccdd6ff3e8b1"
	},
	{
		"id": "3ded00e6c789",
		"ts": "2026-07-16T22:00:35.225Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 52920.06,
		"hash": "3ded00e6c78932498389b0adb52fa142a043d7dc8e4c9ecd5e00b61e21860843"
	},
	{
		"id": "499f9328127e",
		"ts": "2026-07-16T22:00:35.510Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 96696.46,
		"hash": "499f9328127e8d3dcdc0761d1b6a3fa1da428a7e2bccbe48b7e63c5ed9a2c6bb"
	},
	{
		"id": "72ee2bfed7ed",
		"ts": "2026-07-16T22:00:35.696Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 418475.68,
		"hash": "72ee2bfed7ed518067a7f877dba1ed5a1d232224084442458ce4a49e2ee06b7f"
	},
	{
		"id": "45ef658e57f3",
		"ts": "2026-07-16T22:00:35.924Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2227740.42,
		"hash": "45ef658e57f35994f8cc9c154f41848385638b7df43fae4f9faa2ef71f88acd3"
	},
	{
		"id": "89d0d4987b60",
		"ts": "2026-07-16T22:00:36.216Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3707902.42,
		"hash": "89d0d4987b6043d8b3a2211d82e82e7f12f385e48602502c3264cf1d31f3c254"
	},
	{
		"id": "17c5f1326513",
		"ts": "2026-07-16T22:00:36.398Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 274312.57,
		"hash": "17c5f13265139111bc46fd3020ca730f99acec3dc38c7aef85b895bf8b03343e"
	},
	{
		"id": "823eeb6329a4",
		"ts": "2026-07-16T22:00:36.594Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 675138.32,
		"hash": "823eeb6329a45ac2a4529bea5f475d6fade305f18a6adaa568f95ca406edaacf"
	},
	{
		"id": "4dd1c943eee8",
		"ts": "2026-07-16T20:53:58.249Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106243328.36,
		"hash": "4dd1c943eee8e32e803c50a0dda9305e7c448d1003fd121d8f544a5b142eada2"
	},
	{
		"id": "98cd4241ffa9",
		"ts": "2026-07-16T20:53:58.906Z",
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
		"liquidityUsd": 15619575.4,
		"hash": "98cd4241ffa974e2026a7622e824ca90fbf957c6def35815a1a2d97122d46f6b"
	},
	{
		"id": "bb25c5525536",
		"ts": "2026-07-16T20:53:59.354Z",
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
		"liquidityUsd": 1145188.17,
		"hash": "bb25c55255363fa0042f82caa2e1484992abb5853e7dcbed342a719bf4da14f1"
	},
	{
		"id": "e2cbd6c55ace",
		"ts": "2026-07-16T20:53:59.814Z",
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
		"liquidityUsd": 29705758.86,
		"hash": "e2cbd6c55ace193de4f2b2cd2ad4ac04bc0032a4145b8f2472b46832d343ee4e"
	},
	{
		"id": "875553400998",
		"ts": "2026-07-16T20:54:00.265Z",
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
		"liquidityUsd": 4795295.26,
		"hash": "875553400998c7fd0b54bde059db8584a1f05d95c5da9dfacb8575d3ffc8bcd5"
	},
	{
		"id": "98334644d2cb",
		"ts": "2026-07-16T20:54:03.188Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 996314.62,
		"hash": "98334644d2cbbf7ba487310f03974d3878aa79e82e16847e6dabe350e355813e"
	},
	{
		"id": "d1188ee57f24",
		"ts": "2026-07-16T20:54:03.582Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29705758.86,
		"hash": "d1188ee57f242ab7151f8fe9df306af699e0de26a80044b7d75da8c0e97a1f43"
	},
	{
		"id": "5efb6abf116a",
		"ts": "2026-07-16T20:54:03.864Z",
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
		"liquidityUsd": 2495532.66,
		"hash": "5efb6abf116a3ce87facb942b81170980e62cad9a54b2d8e25fd1015f8d04678"
	},
	{
		"id": "76e50b3c396a",
		"ts": "2026-07-16T20:54:04.107Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 904356.47,
		"hash": "76e50b3c396a9a1da00ca302d1298c57d0d1c8bc16568a3f8bdefb4b840a574a"
	},
	{
		"id": "9005b977a7d0",
		"ts": "2026-07-16T20:54:04.409Z",
		"symbol": "doji",
		"token": "0x693B8De886712f0039EEf578bbE5aC7ea3B598CE",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 177631.61,
		"hash": "9005b977a7d0204b408b3e78a16f37191ff98269dd5bd0d765e99464c8d4c840"
	},
	{
		"id": "77fe2e69d107",
		"ts": "2026-07-16T20:54:04.869Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 415491.04,
		"hash": "77fe2e69d107eda48aa6273222bbd06962356bd0288e246d4eb888d336058084"
	},
	{
		"id": "aa2acfbc7ef0",
		"ts": "2026-07-16T20:54:05.380Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 62427.28,
		"hash": "aa2acfbc7ef00489a6246c3e694320dbb2ac21a62780b3de61bfbf9db2c49ecb"
	},
	{
		"id": "c669c20e09c7",
		"ts": "2026-07-16T20:54:05.747Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 66,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.32,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 97951.56,
		"hash": "c669c20e09c777340207813ee03192f63f678a38bafa4c597017cea65a9c5662"
	},
	{
		"id": "3e643ccb1636",
		"ts": "2026-07-16T20:54:06.009Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2220341.74,
		"hash": "3e643ccb163631cb8713cbf60a33d20ca37c17f2219d38d0ace2bc5d11e6892f"
	},
	{
		"id": "cb656efcf191",
		"ts": "2026-07-16T20:54:06.255Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3554777.58,
		"hash": "cb656efcf1913baec23477a56b0bffa6d55c2c09366a8f354c85dcbdaae9864d"
	},
	{
		"id": "8c0ee80f8096",
		"ts": "2026-07-16T20:54:06.482Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 262793.02,
		"hash": "8c0ee80f809684be350f47492c4b97313b027a70c872e5d858fe7d39e607c4b7"
	},
	{
		"id": "23eb47fde3db",
		"ts": "2026-07-16T20:54:06.706Z",
		"symbol": "BASEMATE",
		"token": "0x07E61D8a4e197dfC269e90D7ECe1dF0D26702bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 148324.24,
		"hash": "23eb47fde3dbcd0f5766bf3077d59362a2bc015b2288956d9bc734d55977be6c"
	},
	{
		"id": "8c07cbbe77ec",
		"ts": "2026-07-16T19:03:56.709Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105745571.16,
		"hash": "8c07cbbe77ec28597bf63c680da41cc871997f9756a2c3a4cf698ad9aff2b62e"
	},
	{
		"id": "8c4762d8df0d",
		"ts": "2026-07-16T19:03:57.160Z",
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
		"liquidityUsd": 14986895.75,
		"hash": "8c4762d8df0d5b96b221cb0f508cf97848ac669a15b508fcb3494948d2ecc962"
	},
	{
		"id": "3b210be8c5aa",
		"ts": "2026-07-16T19:03:57.607Z",
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
		"liquidityUsd": 1149932.23,
		"hash": "3b210be8c5aabbdb1b5d20467375f4202f0dc10965d69b665b35dd90a610e580"
	},
	{
		"id": "8bb0fc8b4b6c",
		"ts": "2026-07-16T19:03:57.845Z",
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
		"liquidityUsd": 29825192.94,
		"hash": "8bb0fc8b4b6c5134d979151d77185aac64af35b48f53ad263c0f4fd02363f278"
	},
	{
		"id": "319d0e88fa4c",
		"ts": "2026-07-16T19:03:58.078Z",
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
		"liquidityUsd": 4825266.57,
		"hash": "319d0e88fa4ce55719478c31193f361583c46d51c8c9ef90ce227e409d275106"
	},
	{
		"id": "e44cd71a4b1c",
		"ts": "2026-07-16T19:03:58.366Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 995879.33,
		"hash": "e44cd71a4b1ca10b01fc6e8339a060693ae3023afa265485ab825bb9e7d7b552"
	},
	{
		"id": "5de492d8116a",
		"ts": "2026-07-16T19:03:58.651Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29825192.97,
		"hash": "5de492d8116a8ef32a9809d3d98edaeb4c8db66e5a16389ae643de09f8c16b4f"
	},
	{
		"id": "b7ac399a2475",
		"ts": "2026-07-16T19:03:58.891Z",
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
		"liquidityUsd": 2501885.85,
		"hash": "b7ac399a24755ff86e71299b8424a1270e476c0c85225370724ba6530623a2fa"
	},
	{
		"id": "29e7161d1292",
		"ts": "2026-07-16T19:03:59.137Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 877036.34,
		"hash": "29e7161d1292595338027f38c61ac29e520bb487d4e04ee4199ab00d1847548a"
	},
	{
		"id": "80ec0a8cef9c",
		"ts": "2026-07-16T19:03:59.376Z",
		"symbol": "doji",
		"token": "0x693B8De886712f0039EEf578bbE5aC7ea3B598CE",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 182723.67,
		"hash": "80ec0a8cef9caa22f3e1b6fb36bdaaca13e6301c17f0464626de58685b666b73"
	},
	{
		"id": "a62e5608d5ca",
		"ts": "2026-07-16T19:03:59.600Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 429106.03,
		"hash": "a62e5608d5ca2e6b8b54583dfadcc8184dea40b7a7ecfb9d58f81ada559153fd"
	},
	{
		"id": "e8b569937f01",
		"ts": "2026-07-16T19:03:59.819Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 76896.7,
		"hash": "e8b569937f010c01b07a26aa7403912de8b04987564e5ee69dc322b9493e5b43"
	},
	{
		"id": "78105ca53599",
		"ts": "2026-07-16T19:04:00.045Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 94417.01,
		"hash": "78105ca53599fcda6566ac3971aa487a056115ccd8c9330ec9a6b870d2477817"
	},
	{
		"id": "2112870a64cc",
		"ts": "2026-07-16T19:04:00.285Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2203559.82,
		"hash": "2112870a64ccbcc9770fdb240e6155df2aed03e05be00b55b79e8c06d068586e"
	},
	{
		"id": "9d001d923651",
		"ts": "2026-07-16T19:04:00.529Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 272823.01,
		"hash": "9d001d92365144bd3405de2cd14ae7e9684af1aa426204fbcaab21f9c84294f6"
	},
	{
		"id": "7c6323bc93e2",
		"ts": "2026-07-16T19:04:00.970Z",
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
		"liquidityUsd": 539125.02,
		"hash": "7c6323bc93e2cb3ab34472bf5b41060a1126acdce1e5f6b6ab01b534f4ffec34"
	},
	{
		"id": "54d24550989f",
		"ts": "2026-07-16T19:04:01.300Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1344418.48,
		"hash": "54d24550989ff00c4240156370eac88620389ec11611462f5043d98bcdd166a0"
	},
	{
		"id": "0bfba20f15b9",
		"ts": "2026-07-16T17:11:42.377Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 105834586.61,
		"hash": "0bfba20f15b9f1d06f3b451f8c1b6b056afe4fc6504fe53c4b66f875654670e4"
	},
	{
		"id": "b6db2c16b140",
		"ts": "2026-07-16T17:11:42.763Z",
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
		"liquidityUsd": 15901258.42,
		"hash": "b6db2c16b140850e4b3dd0c403ccced1d13be2c30df55de6a3ac41a74f5ef417"
	},
	{
		"id": "c9abe399af92",
		"ts": "2026-07-16T17:11:43.020Z",
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
		"liquidityUsd": 1147093.44,
		"hash": "c9abe399af92a61360d754d53976f75f2eb09939e5cac1c63aad8e8e17889951"
	},
	{
		"id": "8cbeccb8a55b",
		"ts": "2026-07-16T17:11:43.394Z",
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
		"liquidityUsd": 30311140.66,
		"hash": "8cbeccb8a55bb8467d90c4e0c27ba139b8aa7dd72452060fbd2b5a8298b92ecd"
	},
	{
		"id": "aeae32fef770",
		"ts": "2026-07-16T17:11:43.607Z",
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
		"liquidityUsd": 4851613.9,
		"hash": "aeae32fef77014a209f6d76e6066be973e87ee176ad537e52a38f410fe48e109"
	},
	{
		"id": "1d9d185d8d28",
		"ts": "2026-07-16T17:11:43.827Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1004621.85,
		"hash": "1d9d185d8d281f3020f6cb7e3abcc4b6365faa3065d9e2d5a3c1524bab49545d"
	},
	{
		"id": "18fe84d0446c",
		"ts": "2026-07-16T17:11:44.036Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30311140.16,
		"hash": "18fe84d0446c5fbc44156ff1e516678b3c1de36a3434157a62fe71b9d5bcfc9e"
	},
	{
		"id": "7f1672bc9d3e",
		"ts": "2026-07-16T17:11:44.246Z",
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
		"liquidityUsd": 2495642.15,
		"hash": "7f1672bc9d3e86d0aae89a86ba3612761868b3cbef75a3196d20cdb4e01cc29b"
	},
	{
		"id": "d5220c919588",
		"ts": "2026-07-16T17:11:44.495Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 952296.89,
		"hash": "d5220c919588e86bd9702c127171cbc8ef6a4971a1c00c6d50f80e89f1ce819d"
	},
	{
		"id": "eea645023413",
		"ts": "2026-07-16T17:11:44.859Z",
		"symbol": "doji",
		"token": "0x693B8De886712f0039EEf578bbE5aC7ea3B598CE",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 160483.6,
		"hash": "eea645023413c2b1548da525151729eed396e24e2992e26bd2a8b0b3dd54eb4e"
	},
	{
		"id": "f4429adfceb5",
		"ts": "2026-07-16T17:11:45.196Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 429507.35,
		"hash": "f4429adfceb5c34ddd278eea043f3447208aecbc7e8058ee24748f8e9eb8d709"
	},
	{
		"id": "54330fd041dd",
		"ts": "2026-07-16T17:11:45.387Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 77165.95,
		"hash": "54330fd041dd4e478cdca5aaf39e97df2de44f177dd404e72f8cff4a4b554d7b"
	},
	{
		"id": "2a2324b2e248",
		"ts": "2026-07-16T17:11:45.585Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 121160.02,
		"hash": "2a2324b2e248fd902b7d3bf38dc8aefd6abf91479ba9de81c1899b1cde91155e"
	},
	{
		"id": "90066de1ccfd",
		"ts": "2026-07-16T17:11:45.777Z",
		"symbol": "$COBIE",
		"token": "0x199084f1390B58493096Ff73Ec74c68164ba8453",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 65416.01,
		"hash": "90066de1ccfd22df5de5c0675c3f2601b84e2d9e0e42b50c361464980ce2518b"
	},
	{
		"id": "b3d06953a2c8",
		"ts": "2026-07-16T17:11:45.971Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 279552.01,
		"hash": "b3d06953a2c8bd369f4191c0cf0a21eced8db5b5bc999f8d4c82765acd9d6007"
	},
	{
		"id": "945b260d5454",
		"ts": "2026-07-16T17:11:46.187Z",
		"symbol": "SLEDGEHAMMER",
		"token": "0x1C0961F4a919026aac1c6dFB86af69A78588114F",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 32141,
		"hash": "945b260d5454c5cbc4379b3d31a3a565006fb1836228b0fba0d10cf93ca868a6"
	},
	{
		"id": "a231515bbede",
		"ts": "2026-07-16T17:11:46.381Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 82354.23,
		"hash": "a231515bbede1a0041652b1422d57f3deab93978925dedd64bd75c6861637a80"
	},
	{
		"id": "08f329134ea0",
		"ts": "2026-07-16T17:11:46.567Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 783520.35,
		"hash": "08f329134ea04bc656c09ffad5a08050de918a89ef6710145b9343d1db0851ac"
	},
	{
		"id": "f97ae164ee87",
		"ts": "2026-07-16T15:36:47.728Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106079440.28,
		"hash": "f97ae164ee8732076cd6bb46f31c28939b8bece4ff3e63df333740a675aba49b"
	},
	{
		"id": "8a5e4d170180",
		"ts": "2026-07-16T15:36:48.114Z",
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
		"liquidityUsd": 15404628.77,
		"hash": "8a5e4d170180b27309268229875c9ddf0ae1a18c1fd2e64fd23922fba97fcd4e"
	},
	{
		"id": "f9e4ee682822",
		"ts": "2026-07-16T15:36:48.358Z",
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
		"liquidityUsd": 1160868.42,
		"hash": "f9e4ee682822c000e16ec5380be236f0bd11b9b114fb45c6de42bff9313efdf2"
	},
	{
		"id": "dd54ca72f337",
		"ts": "2026-07-16T15:36:48.569Z",
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
		"liquidityUsd": 30247810.14,
		"hash": "dd54ca72f3374aee0190a110ce0e2979f2323739fb3ffca73200d8fa3e891650"
	},
	{
		"id": "13dd23acc5ae",
		"ts": "2026-07-16T15:36:48.784Z",
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
		"liquidityUsd": 4860183.81,
		"hash": "13dd23acc5aef9be9a7c299cb7c19befb3dd5a29fc990257ef56b4a6f3512687"
	},
	{
		"id": "39647ea15565",
		"ts": "2026-07-16T15:36:49.015Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1007645.91,
		"hash": "39647ea1556570f2f7d03c5f85e1390d7bbadd99263dff07e92126d9970aa508"
	},
	{
		"id": "3369bde41216",
		"ts": "2026-07-16T15:36:49.261Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30247810.14,
		"hash": "3369bde4121666d8bf1e4d2275cd9706600020cc109cfb5a67478916cca8209a"
	},
	{
		"id": "b8e442a5b746",
		"ts": "2026-07-16T15:36:49.474Z",
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
		"liquidityUsd": 2515747.6,
		"hash": "b8e442a5b74615a62fe54f6bf19a41a9ecf87cd1d8b67aa41a2d7ba3930b48e2"
	},
	{
		"id": "a6255ce34922",
		"ts": "2026-07-16T15:36:49.678Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 968652.08,
		"hash": "a6255ce34922889a737b60fd3a08030af4bfea18aced9ed05db49edd977886e4"
	},
	{
		"id": "e8894e5ae712",
		"ts": "2026-07-16T15:36:49.913Z",
		"symbol": "doji",
		"token": "0x693B8De886712f0039EEf578bbE5aC7ea3B598CE",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 132197.17,
		"hash": "e8894e5ae712959b682b5d45ceb7d8dd9098d386955483bdbf4857d442ab8e39"
	},
	{
		"id": "61c113f9e044",
		"ts": "2026-07-16T15:36:50.128Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 434238.18,
		"hash": "61c113f9e044a2c87966b94dd102cb5ed9a19705c2cb37b92db0efd5c6159e59"
	},
	{
		"id": "a411a71cf8c4",
		"ts": "2026-07-16T15:36:50.323Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 117500.49,
		"hash": "a411a71cf8c4b58bf63910dfd573496413b32d3f904da9e7ff94aab70572c57c"
	},
	{
		"id": "0e45cee2844c",
		"ts": "2026-07-16T15:36:50.528Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 121160.02,
		"hash": "0e45cee2844c6b37294b16a883ada0fddabe0290ee207428123cad020749bbcc"
	},
	{
		"id": "e5d205b73bb5",
		"ts": "2026-07-16T15:36:50.724Z",
		"symbol": "$COBIE",
		"token": "0x199084f1390B58493096Ff73Ec74c68164ba8453",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 63191.43,
		"hash": "e5d205b73bb5cb0420afefa1d13280a197606290c910d72f7f31bee654fd0a2f"
	},
	{
		"id": "b1d0f4581420",
		"ts": "2026-07-16T15:36:50.915Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 786248.58,
		"hash": "b1d0f4581420695993ed5b26b5573a35d2abc6050a0f746c3d01b6fd4e3eddc7"
	},
	{
		"id": "6dd9573dc502",
		"ts": "2026-07-16T15:36:51.106Z",
		"symbol": "SLEDGEHAMMER",
		"token": "0x1C0961F4a919026aac1c6dFB86af69A78588114F",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 33787.4,
		"hash": "6dd9573dc502e26ebfe4085eb6bd4c876ff9e772f92a456d13496bd9f32a6a54"
	},
	{
		"id": "d6a0dd973fbb",
		"ts": "2026-07-16T15:36:51.296Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 100194.08,
		"hash": "d6a0dd973fbb462fe788278dd7def8402bc9e69cddca6f53b7999482d219439d"
	},
	{
		"id": "90ebbc6c9624",
		"ts": "2026-07-16T15:36:51.555Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 487796.55,
		"hash": "90ebbc6c962420fbac470bf94f470e3b3648f74ccf8959649fe24399d3829247"
	},
	{
		"id": "912d060758d4",
		"ts": "2026-07-16T13:42:11.240Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105852085.87,
		"hash": "912d060758d41302fd582ac2d1f45411885444ecf110b8fa4ea8ab137517914f"
	},
	{
		"id": "15ab1cf05cd8",
		"ts": "2026-07-16T13:42:11.495Z",
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
		"liquidityUsd": 16145902.75,
		"hash": "15ab1cf05cd8b5f75d00240b8a978dca22093a1c48f92772bc3bf64fb7dd23b0"
	},
	{
		"id": "557aade1adf0",
		"ts": "2026-07-16T13:42:11.749Z",
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
		"liquidityUsd": 1155857.7,
		"hash": "557aade1adf009261f00d7efdce1945d2ac8d79364850eaa7fa6e38073df4a38"
	},
	{
		"id": "00f98c1bedc6",
		"ts": "2026-07-16T13:42:11.993Z",
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
		"liquidityUsd": 29732843.64,
		"hash": "00f98c1bedc6dd6f07590731740c4736631e5bae99d682ab086b221b1e05e079"
	},
	{
		"id": "56949081d658",
		"ts": "2026-07-16T13:42:12.238Z",
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
		"liquidityUsd": 4808314.45,
		"hash": "56949081d65876f9e933511fd2d19878093627c7ebf649ae0b233536830072f2"
	},
	{
		"id": "1dac8fec9fc7",
		"ts": "2026-07-16T13:42:12.491Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1005623.35,
		"hash": "1dac8fec9fc7c7c4b89fb8b7b802061d6d545e523a77ee0366bce0590be26839"
	},
	{
		"id": "cd0d76bf566b",
		"ts": "2026-07-16T13:42:12.734Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29732843.64,
		"hash": "cd0d76bf566bb5a05d319a6b62b0d1efbdd881c88bf82e37fb19c6466c554e0a"
	},
	{
		"id": "af312fcbf158",
		"ts": "2026-07-16T13:42:12.976Z",
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
		"liquidityUsd": 2513229.79,
		"hash": "af312fcbf1583c6f0653fa15bda5e44b20f5f1374f53edfed64af5064ac30644"
	},
	{
		"id": "503667d36c4f",
		"ts": "2026-07-16T13:42:13.220Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 933817.55,
		"hash": "503667d36c4f5e42776a37d47790c0db4937e74f465714dd13f05dfd5a8dc4f4"
	},
	{
		"id": "76e08d3bd7e8",
		"ts": "2026-07-16T13:42:13.470Z",
		"symbol": "doji",
		"token": "0x693B8De886712f0039EEf578bbE5aC7ea3B598CE",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 147628.28,
		"hash": "76e08d3bd7e820ee641b80b6604edb1e68fb0f95cdb82613c7da0828b36bc59c"
	},
	{
		"id": "242cf5b8dcb5",
		"ts": "2026-07-16T13:42:13.703Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 425080.74,
		"hash": "242cf5b8dcb53d038cab740baf20ebb3ae16bf22fcee177d1dedf283cabf0402"
	},
	{
		"id": "29540be9ab17",
		"ts": "2026-07-16T13:42:13.925Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 121160.02,
		"hash": "29540be9ab175529ecc445449665b7f7ad6921ec56bb83eb809c21e393c8da19"
	},
	{
		"id": "22a8dc0df6d3",
		"ts": "2026-07-16T13:42:14.152Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 147228.03,
		"hash": "22a8dc0df6d31415dbfa4e4c5a7fdbc1f3cb55d7a5b147bb39126996ad787517"
	},
	{
		"id": "52dc46d09da3",
		"ts": "2026-07-16T13:42:14.385Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 796098.22,
		"hash": "52dc46d09da354a464a674f08b272f886bf0acc2656b2b96ecd1ee070c71cae7"
	},
	{
		"id": "dcbf44d2bf60",
		"ts": "2026-07-16T13:42:14.610Z",
		"symbol": "SLEDGEHAMMER",
		"token": "0x1C0961F4a919026aac1c6dFB86af69A78588114F",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 35567.65,
		"hash": "dcbf44d2bf60bc13e502b6e241b82981d57d1cc171d945e11b42e965d1c72bc6"
	},
	{
		"id": "bac60c86b940",
		"ts": "2026-07-16T13:42:14.834Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 108240.49,
		"hash": "bac60c86b94031e1fcfddcce12e5f2875f9fbc3243a2282b7da68b1e6e53f7f6"
	},
	{
		"id": "a644f7f5bbb2",
		"ts": "2026-07-16T13:42:15.061Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2181938.53,
		"hash": "a644f7f5bbb2fc9dcb60fb6a0e30f3fbe31a2681f4f0c94facd53d8fe832ed42"
	},
	{
		"id": "7a30369b5fdf",
		"ts": "2026-07-16T13:42:15.294Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 542307.77,
		"hash": "7a30369b5fdf65ac50a2eb4ca47ca31bb835324ff56135429fa17141cb211bcc"
	},
	{
		"id": "861763012656",
		"ts": "2026-07-16T11:36:57.555Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105831810.68,
		"hash": "8617630126564ebcd6776f4876a0322d683f7410fc69cbbb0344943ed6c5b724"
	},
	{
		"id": "fddbed68de74",
		"ts": "2026-07-16T11:36:58.005Z",
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
		"liquidityUsd": 13874984.19,
		"hash": "fddbed68de74bdcf23cd5434516514a39d1c9990afe3b9ea52be11d730030a02"
	},
	{
		"id": "66a77800cba5",
		"ts": "2026-07-16T11:36:58.480Z",
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
		"liquidityUsd": 1158128.73,
		"hash": "66a77800cba577f46c417ccdb5efd0c4f9a3772a5cb4a2ad3f63fa09f1eb6aff"
	},
	{
		"id": "b8ac47ad9a3b",
		"ts": "2026-07-16T11:36:58.724Z",
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
		"liquidityUsd": 29891151.67,
		"hash": "b8ac47ad9a3b7b3271ec3aba48347ed6013bc19d8841ed854f09f9bb318382da"
	},
	{
		"id": "0b9fcf2e5767",
		"ts": "2026-07-16T11:36:58.975Z",
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
		"liquidityUsd": 4788482.87,
		"hash": "0b9fcf2e5767eecfb6063d021b4f55eb2708a26dd68f8116fa0c4a67f2c4c896"
	},
	{
		"id": "d9bef036a974",
		"ts": "2026-07-16T11:36:59.218Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1010534,
		"hash": "d9bef036a9742cd5751c0ea2ce2c2ae4d2147681d02c4b71f4371d01c00ee30c"
	},
	{
		"id": "9f4b64d07381",
		"ts": "2026-07-16T11:36:59.462Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29891151.67,
		"hash": "9f4b64d07381212192df6b94c13d4a9fe8140e7d173b2cc7f3a1855e52e5c468"
	},
	{
		"id": "cce70667f128",
		"ts": "2026-07-16T11:36:59.716Z",
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
		"liquidityUsd": 2508565.98,
		"hash": "cce70667f1288fe02399ed69ac69d6e5fe4f7125ad2222052d2a83587f06811c"
	},
	{
		"id": "3be938eabe30",
		"ts": "2026-07-16T11:36:59.954Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 900921.01,
		"hash": "3be938eabe3060e94e9dfab452e4d0e9522bb7313679be5403e235f478c881ff"
	},
	{
		"id": "21c6c8d3c61a",
		"ts": "2026-07-16T11:37:00.202Z",
		"symbol": "doji",
		"token": "0x693B8De886712f0039EEf578bbE5aC7ea3B598CE",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 169552.99,
		"hash": "21c6c8d3c61a7f9160245291d2b258ad87730ff7c26287c81d956b9407e6b919"
	},
	{
		"id": "4906af9a29d9",
		"ts": "2026-07-16T11:37:00.444Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 442642.79,
		"hash": "4906af9a29d98b431b746e8b252c589f059df1c7029d031742951ea8b14f789d"
	},
	{
		"id": "7fae2221cb56",
		"ts": "2026-07-16T11:37:00.699Z",
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
		"liquidityUsd": 794520.22,
		"hash": "7fae2221cb56534de3f8ff77ee5c815a1dca9253c5a3060283bc8d7b2349e565"
	},
	{
		"id": "066e3c1bb559",
		"ts": "2026-07-16T11:37:01.234Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 164991.95,
		"hash": "066e3c1bb559618f6c1897c022af987b0979d99055d345ca49d03578a34a53f3"
	},
	{
		"id": "7db76c21f3e0",
		"ts": "2026-07-16T11:37:01.479Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 66,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.32,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 121160.02,
		"hash": "7db76c21f3e09a36de37b3c7b207352266e59d34ddea83e026964a5c1e534567"
	},
	{
		"id": "953121686ad1",
		"ts": "2026-07-16T11:37:01.717Z",
		"symbol": "SLEDGEHAMMER",
		"token": "0x1C0961F4a919026aac1c6dFB86af69A78588114F",
		"score": 76,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.52,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 42074.36,
		"hash": "953121686ad1adeb4f0c74a2bba65887f4acc026211b4cfecb333bb3e86ac8bf"
	},
	{
		"id": "7bed64c96730",
		"ts": "2026-07-16T11:37:01.960Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 96326.44,
		"hash": "7bed64c96730897aeed96c1fb5ea220b44487661dc68534cd13b38adf7594bac"
	},
	{
		"id": "64e2be3db886",
		"ts": "2026-07-16T11:37:02.219Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 285691.57,
		"hash": "64e2be3db886c19ba418a17f8d632eed4e249abd36789f5dad4b645730f6b9a2"
	},
	{
		"id": "900bb05b4cdb",
		"ts": "2026-07-16T11:37:02.460Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1429875.89,
		"hash": "900bb05b4cdbd12c275f7af5f3600b7aaec5f1b6b316297ce38ba19f7e253801"
	},
	{
		"id": "764f13f93403",
		"ts": "2026-07-16T09:10:40.554Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105723080.02,
		"hash": "764f13f934039f1d1f048707411e948111033c5e2ec908fb6b8a39f03f2b0716"
	},
	{
		"id": "d420a5c55bf2",
		"ts": "2026-07-16T09:10:41.021Z",
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
		"liquidityUsd": 15146356.3,
		"hash": "d420a5c55bf2812343c212bcc2ec082eafcf390c6c4cd27f47b72f6f02e780bf"
	},
	{
		"id": "a744b2981515",
		"ts": "2026-07-16T09:10:41.321Z",
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
		"liquidityUsd": 1166756.45,
		"hash": "a744b29815155350d9d92104685dfb0dc99c5a12846210626bb558fe7ec7eaf2"
	},
	{
		"id": "048eb62fb2f3",
		"ts": "2026-07-16T09:10:41.572Z",
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
		"liquidityUsd": 29811279.61,
		"hash": "048eb62fb2f3a78c737271b4c248e658801e8d64b2ef9618444820a2f18db63a"
	},
	{
		"id": "413db9bbce7f",
		"ts": "2026-07-16T09:10:41.822Z",
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
		"liquidityUsd": 4721602.12,
		"hash": "413db9bbce7f8aa745ce3a711cb02eb4df4d8969ec9a4700e15e9b4f3040d22e"
	},
	{
		"id": "2d9d00c52da2",
		"ts": "2026-07-16T09:10:42.783Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1011071.3,
		"hash": "2d9d00c52da2cfdbbf9ebffb28af53c7bd7bee9d253dbae0853ebf1028a81883"
	},
	{
		"id": "b8ed1b3aaee2",
		"ts": "2026-07-16T09:10:43.549Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29811279.61,
		"hash": "b8ed1b3aaee256a77e31f5289ac1ca18e8318200ae96144b96b4e9fa7ef5d3b8"
	},
	{
		"id": "e189b8d16ec7",
		"ts": "2026-07-16T09:10:44.063Z",
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
		"liquidityUsd": 2513084.84,
		"hash": "e189b8d16ec74fbab7807461c382ff07c437e5eefcba518133e5970fb2557ba0"
	},
	{
		"id": "41d331be7dc4",
		"ts": "2026-07-16T09:10:44.312Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 935639.62,
		"hash": "41d331be7dc4fe75b65c13ff7a8f0782adf1fd568b14ca6b14bbbc2a9237ce7a"
	},
	{
		"id": "94fcb6f8f1bc",
		"ts": "2026-07-16T09:10:44.563Z",
		"symbol": "doji",
		"token": "0x693B8De886712f0039EEf578bbE5aC7ea3B598CE",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 120395.88,
		"hash": "94fcb6f8f1bc8165e58a9bebbe81ac6ad3ac477d8482ebcf985ca3ac4a6c9b7f"
	},
	{
		"id": "599cbcbc3074",
		"ts": "2026-07-16T09:10:44.795Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 433420.42,
		"hash": "599cbcbc307486ff5fdc74ef67a270ab6d51754bde786fd4c2120d5c11704e97"
	},
	{
		"id": "6740532750a3",
		"ts": "2026-07-16T09:10:45.027Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 793486.7,
		"hash": "6740532750a3a8057abcdbe9e83044df079f41535d320bdec22724bb1b1fef5c"
	},
	{
		"id": "03c55c027c1b",
		"ts": "2026-07-16T09:10:45.260Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 182581.09,
		"hash": "03c55c027c1b2052c10d55e6a61b5348416c862f2a3fecc93f7eba71ddbaba42"
	},
	{
		"id": "35649961b954",
		"ts": "2026-07-16T09:10:45.980Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 121160.02,
		"hash": "35649961b9546a10d6af4fd69a0e32bd6f44ccc9181164a870821852e3084123"
	},
	{
		"id": "07603c9a40c6",
		"ts": "2026-07-16T09:10:46.215Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 496620.28,
		"hash": "07603c9a40c60c105133d59148a0683992d192e3aa80b9b6fe3078ceffb6dee4"
	},
	{
		"id": "15603fdbc001",
		"ts": "2026-07-16T09:10:46.449Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 93524.49,
		"hash": "15603fdbc0017f66d129c2d9c844c93a78fcb2a1fff89f59ceec5c9072654cba"
	},
	{
		"id": "dff54a832a0b",
		"ts": "2026-07-16T09:10:46.682Z",
		"symbol": "SLEDGEHAMMER",
		"token": "0x1C0961F4a919026aac1c6dFB86af69A78588114F",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 30052.92,
		"hash": "dff54a832a0b0a786a17da828025a84d82da29e46e86e6c37af9dbe93cd9b1ab"
	},
	{
		"id": "8949a9414936",
		"ts": "2026-07-16T09:10:46.915Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1442888.12,
		"hash": "8949a9414936d680af6fa714a0ab626bfe3fe7ec950632bca194905d21ab746d"
	},
	{
		"id": "90e9d1cce212",
		"ts": "2026-07-16T06:13:58.076Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106354323.28,
		"hash": "90e9d1cce212871fd0b6490fc001cf7f9239c9cece66c8f3e7c6dbadb93b698a"
	},
	{
		"id": "6565f1118b30",
		"ts": "2026-07-16T06:13:58.739Z",
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
		"liquidityUsd": 16118031.9,
		"hash": "6565f1118b302b24259fe418af0730688e346c5333838656096e770fdf99985d"
	},
	{
		"id": "1a369cb07a91",
		"ts": "2026-07-16T06:13:59.205Z",
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
		"liquidityUsd": 1182564.96,
		"hash": "1a369cb07a91a361d8d55a592deb89fa5deea76c6013d6c01e808854c81205f1"
	},
	{
		"id": "579cc280ce89",
		"ts": "2026-07-16T06:13:59.669Z",
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
		"liquidityUsd": 30159237.18,
		"hash": "579cc280ce8922251897fc460c170cdb660308837e45e64d1c01a2dc433ab3dc"
	},
	{
		"id": "9662bd5769f2",
		"ts": "2026-07-16T06:14:00.134Z",
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
		"liquidityUsd": 4813876.17,
		"hash": "9662bd5769f2b2442a74e1cccef3d10567654b9fcc13f4bbd552138f7313cc91"
	},
	{
		"id": "2f858a15b249",
		"ts": "2026-07-16T06:14:00.389Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1022299.12,
		"hash": "2f858a15b24989d89d2c8a7249618020bf5c4951ff1c6c25153a7d9c6ca91063"
	},
	{
		"id": "7f41eadc7498",
		"ts": "2026-07-16T06:14:00.646Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30159237.18,
		"hash": "7f41eadc749871c0c55ccca4a157e814b555167d996bf9910b37203bb4719372"
	},
	{
		"id": "2fb7061fbf1c",
		"ts": "2026-07-16T06:14:01.238Z",
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
		"liquidityUsd": 2567702.21,
		"hash": "2fb7061fbf1c7c8345f98fb587a48ccc23fa2bf4c4bbd60c12554521c734aa70"
	},
	{
		"id": "52a09c984780",
		"ts": "2026-07-16T06:14:01.666Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 970014.52,
		"hash": "52a09c984780c5f457991f3bff6494fdc5b59847e925dae0d490949d57eb833c"
	},
	{
		"id": "3226c294ae03",
		"ts": "2026-07-16T06:14:01.992Z",
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
		"liquidityUsd": 821362.82,
		"hash": "3226c294ae03d43d40c6c8897ea07b4ff2791e73a2e4902d3c5c9c1c79d6f430"
	},
	{
		"id": "5f204194cc08",
		"ts": "2026-07-16T06:14:02.362Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 458290.94,
		"hash": "5f204194cc08307f17195625c4fd97c05f121708997512072f5389c2fafaa992"
	},
	{
		"id": "04f0a086762c",
		"ts": "2026-07-16T06:14:02.619Z",
		"symbol": "doji",
		"token": "0x693B8De886712f0039EEf578bbE5aC7ea3B598CE",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 99256.22,
		"hash": "04f0a086762cff3224e3093fc3c73af81a7955ba833ece9f2f98cf455f350530"
	},
	{
		"id": "e003678c4fa9",
		"ts": "2026-07-16T06:14:02.868Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 170478.04,
		"hash": "e003678c4fa9930cb7e6b81d3b923e54741dbe23c55603e3cb9f0f46cd2c0d2f"
	},
	{
		"id": "23c67fa19d9c",
		"ts": "2026-07-16T06:14:03.099Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 66,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.32,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 121160.02,
		"hash": "23c67fa19d9c6772289ee6d880e25314f0ca71e8c7b172d21acdc8158d77f230"
	},
	{
		"id": "8d5074eddf87",
		"ts": "2026-07-16T06:14:03.754Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 508615.38,
		"hash": "8d5074eddf87de9b290114f687315d7ce892dc76a6fac5aca73a8d867712fae2"
	},
	{
		"id": "576cebe7ce0d",
		"ts": "2026-07-16T06:14:03.986Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 95894.75,
		"hash": "576cebe7ce0d4f1e38f5f2a9923e874fd304731f38f5017448b59e35e368bcdd"
	},
	{
		"id": "9e4bb7b4eb0e",
		"ts": "2026-07-16T06:14:04.220Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 272103.28,
		"hash": "9e4bb7b4eb0e72e2e3ed5f9a299d8cc69253efce48b5a10c270eafae87e7079d"
	},
	{
		"id": "a2fb2e01f64b",
		"ts": "2026-07-16T06:14:04.441Z",
		"symbol": "SLEDGEHAMMER",
		"token": "0x1C0961F4a919026aac1c6dFB86af69A78588114F",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 27135.88,
		"hash": "a2fb2e01f64b7aae17ba50f728b420324a6dca2383866f6eeb917d3ecf029cb9"
	},
	{
		"id": "fb456b007819",
		"ts": "2026-07-16T03:27:24.963Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105994087.27,
		"hash": "fb456b00781937a267a89eb94f0e5b428cbf7be5dd53c5ae803e9cefdead2a6c"
	},
	{
		"id": "f9abd280dc80",
		"ts": "2026-07-16T03:27:25.311Z",
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
		"liquidityUsd": 15407779.98,
		"hash": "f9abd280dc807c993734e1a6fd978d72048d2e1ac8995e8c18267b56184aaca3"
	},
	{
		"id": "94419d9fc969",
		"ts": "2026-07-16T03:27:25.656Z",
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
		"liquidityUsd": 1183346.31,
		"hash": "94419d9fc9690abde839124fd6adc4cb320325e9eacd05bd2ce6dd28f985e9c0"
	},
	{
		"id": "0d98b190fde2",
		"ts": "2026-07-16T03:27:26.004Z",
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
		"liquidityUsd": 30221931.12,
		"hash": "0d98b190fde27238901fc9ec46caba851409e5ef82a50fe977fca9e6f62847e8"
	},
	{
		"id": "202046ff28ec",
		"ts": "2026-07-16T03:27:26.195Z",
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
		"liquidityUsd": 4821267.04,
		"hash": "202046ff28ecb8769cc1d646f2ce500ed716cb73c93127164494410f73a3b91d"
	},
	{
		"id": "6c1d2f7fcbcc",
		"ts": "2026-07-16T03:27:26.390Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1024986.59,
		"hash": "6c1d2f7fcbcceaf9fea59eb100e41d0ac12f6965bda0dc3ec0ddd3714a321131"
	}
]
