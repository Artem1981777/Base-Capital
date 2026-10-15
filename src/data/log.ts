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
	"updatedAt": "2026-10-15T03:00:26.179Z",
	"tokensScored": 20234,
	"verdictsIssued": 20234,
	"safe": 17233,
	"risky": 1442,
	"likelyRug": 1559,
	"ticks": 1145
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "505f224dfc6d",
		"ts": "2026-10-15T03:00:21.233Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 144992976.08,
		"hash": "505f224dfc6d064acb25be60abad5f9543bdf5aaf5100ec4826d5c065fff87dc"
	},
	{
		"id": "94a79ed18f60",
		"ts": "2026-10-15T03:00:21.890Z",
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
		"liquidityUsd": 17486965.44,
		"hash": "94a79ed18f60eccb76fd3fd04c5b6dd99a7a58f11b5d5b5bd42d5c9099380082"
	},
	{
		"id": "a0f67c6e87fb",
		"ts": "2026-10-15T03:00:22.135Z",
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
		"liquidityUsd": 759117.66,
		"hash": "a0f67c6e87fbcda038885611a1bf25b8d4a28fd4771e59c8b33bafe94c44926c"
	},
	{
		"id": "201139b0917f",
		"ts": "2026-10-15T03:00:22.593Z",
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
		"liquidityUsd": 44793831.34,
		"hash": "201139b0917fbbb3adc98809ad5437b1b47198c64accd1c0856bc8e2a04c8085"
	},
	{
		"id": "5ff8dddf9f28",
		"ts": "2026-10-15T03:00:22.838Z",
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
		"liquidityUsd": 4468222.48,
		"hash": "5ff8dddf9f289e843a126039ad46206530f6b70d441ba9658188c12ada1bc402"
	},
	{
		"id": "adf049209a36",
		"ts": "2026-10-15T03:00:23.088Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1126992.63,
		"hash": "adf049209a362676b1f7828abeb945d432864068fef6ca5c57ebd39dd87fb93a"
	},
	{
		"id": "0d6228612e42",
		"ts": "2026-10-15T03:00:23.326Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 140129.93,
		"hash": "0d6228612e42ebe43cf439d81f25861f01682e55a08d5acc15c6b0cff702bb2c"
	},
	{
		"id": "e0e1eed0ff37",
		"ts": "2026-10-15T03:00:23.577Z",
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
		"liquidityUsd": 2526737.33,
		"hash": "e0e1eed0ff37e7369a36ea55241d63262c7441f1e3890d47838b36a3ed3a3929"
	},
	{
		"id": "25c63c3a796d",
		"ts": "2026-10-15T03:00:23.825Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1803075.64,
		"hash": "25c63c3a796db56f6501a65bae6ff9716453e4eba632ab29095988fea8fb10ad"
	},
	{
		"id": "f7d991622ebf",
		"ts": "2026-10-15T03:00:24.088Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1334252.51,
		"hash": "f7d991622ebf049a2b388176fff2378426e581c154213aedc3e8fe43405d3d3f"
	},
	{
		"id": "19d54c93e293",
		"ts": "2026-10-15T03:00:24.324Z",
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
		"liquidityUsd": 1097015.76,
		"hash": "19d54c93e293f19aac26d004f56cb5b2cfe0c32eac3ae18a024feda5ff064857"
	},
	{
		"id": "576063e7c8fc",
		"ts": "2026-10-15T03:00:24.550Z",
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
		"liquidityUsd": 2828625.91,
		"hash": "576063e7c8fc8927dd1ab8974bbac63d4839d1e4722be600622aa2da765dfd44"
	},
	{
		"id": "fcdd28c685ae",
		"ts": "2026-10-15T03:00:24.778Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1063706.07,
		"hash": "fcdd28c685ae9637a7b519f8a0c63a2573d552506ade1ff64bce7a1582fbe2f8"
	},
	{
		"id": "d7f4ecbb179e",
		"ts": "2026-10-15T03:00:25.005Z",
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
		"liquidityUsd": 303020.03,
		"hash": "d7f4ecbb179e22d77faac1f59442554390740e579b747d2c6e2590e26f5f2b69"
	},
	{
		"id": "78790321f2d9",
		"ts": "2026-10-15T03:00:25.247Z",
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
		"liquidityUsd": 15476840.09,
		"hash": "78790321f2d9f062d8d1722b8c95e472cf87f228a3e0bb507de5158e1bb66be8"
	},
	{
		"id": "6cd6e5e2915b",
		"ts": "2026-10-15T03:00:25.482Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2031796.79,
		"hash": "6cd6e5e2915b3d973614f2a1feda51d2dbbba90307ec71be21be8a00593da9ed"
	},
	{
		"id": "0e5d7d8a9f13",
		"ts": "2026-10-15T03:00:25.713Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5276929.34,
		"hash": "0e5d7d8a9f13060f719f90a2f6d06ad7c303dd16a24bd2997890715bce221d80"
	},
	{
		"id": "06b8e4fbbacd",
		"ts": "2026-10-15T03:00:25.948Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3942227.35,
		"hash": "06b8e4fbbacde9cddea4c1139c10f6fe75ff4c6be43c30921fefeb1453bc32a2"
	},
	{
		"id": "b55541228828",
		"ts": "2026-10-15T03:00:26.179Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 4356623.79,
		"hash": "b555412288283346db9b88989e3c69f6180cf93bd2bb4bcdf3da4dfae77c9e3b"
	},
	{
		"id": "db4879817a06",
		"ts": "2026-10-14T23:38:09.648Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146624562.96,
		"hash": "db4879817a0664bc1b970722e32d566e25b69ea8cb31930b66f430b824d35fee"
	},
	{
		"id": "3886d5f4b474",
		"ts": "2026-10-14T23:38:10.321Z",
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
		"liquidityUsd": 17818945.22,
		"hash": "3886d5f4b474314b413c438afbd4ea6fe09ec8555cfd450ae78efcb48e2bae06"
	},
	{
		"id": "b5d3ef712138",
		"ts": "2026-10-14T23:38:10.589Z",
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
		"liquidityUsd": 802999.6,
		"hash": "b5d3ef712138e804cd8a7bb95a376a27c05da1367bb9194561576fa124bfcaea"
	},
	{
		"id": "9a58c1a4c846",
		"ts": "2026-10-14T23:38:10.846Z",
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
		"liquidityUsd": 45540046.4,
		"hash": "9a58c1a4c846141c7148899020cb36bc3013bbc58cfc47563cdc951f7288f422"
	},
	{
		"id": "b70bc2584467",
		"ts": "2026-10-14T23:38:11.093Z",
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
		"liquidityUsd": 4593465.9,
		"hash": "b70bc2584467767bb44b17e2047da325e0ce434ac90baeb76ca10516fc4050d6"
	},
	{
		"id": "19d54b741912",
		"ts": "2026-10-14T23:38:11.344Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1161079.32,
		"hash": "19d54b7419128121f924ba07533fe32387db867d396b7c80aac4eb1d8987fc2e"
	},
	{
		"id": "25ca7fcd6ef0",
		"ts": "2026-10-14T23:38:11.611Z",
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
		"liquidityUsd": 1780753.45,
		"hash": "25ca7fcd6ef0fa7b7d27adae6c4f7bf6e589d1e1ade768402970b16a965f80d8"
	},
	{
		"id": "d6a8b56854ff",
		"ts": "2026-10-14T23:38:11.881Z",
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
		"liquidityUsd": 2570012.33,
		"hash": "d6a8b56854ff3020b69f1f264155fb899a47ded322b79581f987091254c094c1"
	},
	{
		"id": "15ecb34d3e8b",
		"ts": "2026-10-14T23:38:12.128Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1780752.24,
		"hash": "15ecb34d3e8b7661c2c3c8771d4ecfe65253073b99ef6466bd96c347958e15ae"
	},
	{
		"id": "101a1a7d1ef1",
		"ts": "2026-10-14T23:38:12.387Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1127355.8,
		"hash": "101a1a7d1ef1243f46ead814b48ed6e6f6320529c0d8f3f7cddc70371d5b7d97"
	},
	{
		"id": "1c1064ffacc7",
		"ts": "2026-10-14T23:38:12.618Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1371676.27,
		"hash": "1c1064ffacc7a013aa88a61ef77ca626c00f838f75ec3928e4bc22685cfcda99"
	},
	{
		"id": "efd6715de80d",
		"ts": "2026-10-14T23:38:12.858Z",
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
		"liquidityUsd": 2912231.04,
		"hash": "efd6715de80d47e8312d3caa7bba1b185977849a8bbbfe545e81862543b78db6"
	},
	{
		"id": "e2ba5dd12667",
		"ts": "2026-10-14T23:38:13.089Z",
		"symbol": "Paper",
		"token": "0xC54a9e149d964a8e8620f685bE8a09e0acbf0b07",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 5218853.88,
		"hash": "e2ba5dd1266705e0b6e675571bb193e6343072252002143658fc032c179dd983"
	},
	{
		"id": "d9136b739bc8",
		"ts": "2026-10-14T23:38:13.323Z",
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
		"liquidityUsd": 313730.77,
		"hash": "d9136b739bc83b5c2f1a542ee8cdc2b30186417a890c02743b7bf06f2f8466dc"
	},
	{
		"id": "d9c61d98e459",
		"ts": "2026-10-14T23:38:13.555Z",
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
		"liquidityUsd": 16078253.49,
		"hash": "d9c61d98e459d00b59dd1c34954b858133604b0273a65abe26e52e14db86e648"
	},
	{
		"id": "7254cf061b58",
		"ts": "2026-10-14T23:38:13.787Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 4591695.21,
		"hash": "7254cf061b58197521dbfee880d97dcd062daf0f9396f96e1219f7231e382c17"
	},
	{
		"id": "ad14cceb391d",
		"ts": "2026-10-14T23:38:14.016Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1071053.3,
		"hash": "ad14cceb391d8cb73f76306bdd68e965eaf386ad2749230325c3b719ad88ed4c"
	},
	{
		"id": "9645ee19cad5",
		"ts": "2026-10-14T23:38:14.255Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5237468.71,
		"hash": "9645ee19cad5c239c03bbd24a68a01f9eb9338c3edbc35b54197cb4b2924bbe0"
	},
	{
		"id": "dccc6ad42a8c",
		"ts": "2026-10-14T23:38:14.486Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2061545.35,
		"hash": "dccc6ad42a8cf950a0234c0d9d13fd4b652d8c78d2748d9d5e74c3fe8abe4130"
	},
	{
		"id": "b3b784cde495",
		"ts": "2026-10-14T20:24:46.689Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 147329210.26,
		"hash": "b3b784cde495280df083f6b2075281ea134aacea042833891bf3b16717755858"
	},
	{
		"id": "eb1942593194",
		"ts": "2026-10-14T20:24:47.395Z",
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
		"liquidityUsd": 17866912.88,
		"hash": "eb19425931942e9de135234f52ab2a8221e8c18284ce6041935bf0f887792eaa"
	},
	{
		"id": "7c60c549485a",
		"ts": "2026-10-14T20:24:47.839Z",
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
		"liquidityUsd": 802999.6,
		"hash": "7c60c549485acbd2f2ba688cf62975b7f21078512a03719c42e1598fef02221c"
	},
	{
		"id": "e8fcb1010c24",
		"ts": "2026-10-14T20:24:48.115Z",
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
		"liquidityUsd": 45130463.56,
		"hash": "e8fcb1010c247a6d94745b87176013d5d5796139137cacd36de0a5b5da0e7dbd"
	},
	{
		"id": "31b94cc9d2bb",
		"ts": "2026-10-14T20:24:48.377Z",
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
		"liquidityUsd": 4630360.86,
		"hash": "31b94cc9d2bbe48c5a7f725148f61d9b1d554a6aff5936812d87263c9ba2de47"
	},
	{
		"id": "5bc6f9fbc655",
		"ts": "2026-10-14T20:24:48.630Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1164384.72,
		"hash": "5bc6f9fbc655e689139cb5359ec4bf3b5a8e76b18e8833b426794bf2f189ff85"
	},
	{
		"id": "cb753b8911e5",
		"ts": "2026-10-14T20:24:48.901Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 45130463.56,
		"hash": "cb753b8911e52ec2935babb769e9bd5ba261c0bce957b8a297eccb837eabc918"
	},
	{
		"id": "55b9ccc9707d",
		"ts": "2026-10-14T20:24:49.155Z",
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
		"liquidityUsd": 2586513.09,
		"hash": "55b9ccc9707d837f1573fbe37ee03956acf36ed85ef8f9c6f269b5269b6f57fe"
	},
	{
		"id": "fa3029b82f30",
		"ts": "2026-10-14T20:24:49.422Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1804672.64,
		"hash": "fa3029b82f3029ff395e789247d38800f58d6cccfb9237ea80ad8033f5cc13dd"
	},
	{
		"id": "debb5c5a450a",
		"ts": "2026-10-14T20:24:49.785Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1136165.14,
		"hash": "debb5c5a450adeece8f0268433e758c3e5a03574adb781847cef8d016589a0de"
	},
	{
		"id": "48ab94aefec0",
		"ts": "2026-10-14T20:24:50.020Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1378021.56,
		"hash": "48ab94aefec0681ebf0097e7e2418b36a5e3e49205a3569b49bfb8084b6cf48e"
	},
	{
		"id": "a43b10db34d1",
		"ts": "2026-10-14T20:24:50.254Z",
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
		"liquidityUsd": 2941278.08,
		"hash": "a43b10db34d1977a645adc578163de7e710698d985d80ed92a87964f45383846"
	},
	{
		"id": "402116b603f4",
		"ts": "2026-10-14T20:24:50.503Z",
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
		"liquidityUsd": 314831.86,
		"hash": "402116b603f489886a887b6eef5220a3e3924667ea69b51f1ba28e70ae4fe3c7"
	},
	{
		"id": "1eb2701cb579",
		"ts": "2026-10-14T20:24:50.737Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 4553768.97,
		"hash": "1eb2701cb57947b7beeb47890bf3ccc736dcd4ce0cbd3eab774c74b29e0a6516"
	},
	{
		"id": "aef2ea46fb12",
		"ts": "2026-10-14T20:24:50.988Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1072067.74,
		"hash": "aef2ea46fb1287bd010d8c392f6d0c78506ca7d7ad17d523afd184e5a0be3e75"
	},
	{
		"id": "318bf047c1ef",
		"ts": "2026-10-14T20:24:51.236Z",
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
		"liquidityUsd": 16264263.03,
		"hash": "318bf047c1ef79c4df3992db439a1e6c499046837f60e51a6adf2e467a64e309"
	},
	{
		"id": "bc09ae12851e",
		"ts": "2026-10-14T20:24:51.467Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2074101.13,
		"hash": "bc09ae12851ea77cf7d549fd925658ba2aff8de2cc47be7e9d8fc699f81492c4"
	},
	{
		"id": "485d12b5549c",
		"ts": "2026-10-14T20:24:51.714Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4003487.89,
		"hash": "485d12b5549c059811109a207572995f17c8f8102f72d356ea3bc9136c4f16a5"
	},
	{
		"id": "89b9c384703a",
		"ts": "2026-10-14T20:24:51.962Z",
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
		"liquidityUsd": 1152795.42,
		"hash": "89b9c384703a4442e755c33f809f539355a8a2f046b0cbb4c09bb856ba8c51f4"
	},
	{
		"id": "107e4005c6cd",
		"ts": "2026-10-14T16:26:23.162Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 147757271.35,
		"hash": "107e4005c6cd7f1e8d1fa78bdc6981f0fa0792a731297d8eeb6972999910bcb2"
	},
	{
		"id": "d0df3cb9bcdb",
		"ts": "2026-10-14T16:26:23.454Z",
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
		"liquidityUsd": 17831343.35,
		"hash": "d0df3cb9bcdb98c853c3c1a550cc4b2f44f4f4820247f5e42e4718b44a59c477"
	},
	{
		"id": "541d4a26aa58",
		"ts": "2026-10-14T16:26:23.733Z",
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
		"liquidityUsd": 802999.6,
		"hash": "541d4a26aa58c12d31c91a8e339490208bc8faa5b0258af5a46ed82146c9cabc"
	},
	{
		"id": "03a243ce795b",
		"ts": "2026-10-14T16:26:24.035Z",
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
		"liquidityUsd": 44329657.05,
		"hash": "03a243ce795b202213533804a163e9002157a3f2197ec920b28baf15d6548987"
	},
	{
		"id": "2d87e8ae7254",
		"ts": "2026-10-14T16:26:24.302Z",
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
		"liquidityUsd": 4619491.82,
		"hash": "2d87e8ae7254d85ff22d944061ad350e8ea90af9f877e9262df7397a29d77d61"
	},
	{
		"id": "a6ebeba1782f",
		"ts": "2026-10-14T16:26:24.559Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1162836.11,
		"hash": "a6ebeba1782f104f0024ddb93bdcbadf2034309da1407961f9bec2fc65fabe7f"
	},
	{
		"id": "8534e02e4db1",
		"ts": "2026-10-14T16:26:24.811Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 44329657.05,
		"hash": "8534e02e4db1e275160df20c3b5b03e341e6f0a88be9e177e60cc194bc27752b"
	},
	{
		"id": "6d29dda36f8d",
		"ts": "2026-10-14T16:26:25.081Z",
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
		"liquidityUsd": 2935742.65,
		"hash": "6d29dda36f8d93d1ad2c4d14c76326ea5a1ac2e0111fdb647a4599c4b5a31310"
	},
	{
		"id": "094d66c88040",
		"ts": "2026-10-14T16:26:25.357Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1773500.68,
		"hash": "094d66c88040cfa6a0497de7d4c54e3cc3a1662297e7cc00f6a5b73a16969c1b"
	},
	{
		"id": "082a3988c783",
		"ts": "2026-10-14T16:26:25.617Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 319223.98,
		"hash": "082a3988c783212343f818d6492758ee305f2b59ec55dc571d7989644d84be80"
	},
	{
		"id": "6d96c9c42609",
		"ts": "2026-10-14T16:26:25.883Z",
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
		"liquidityUsd": 1170814.16,
		"hash": "6d96c9c42609bdf5b9f9abc3afd456ae41cd979aca01e65acb70192417ea4180"
	},
	{
		"id": "c6fbcc7787eb",
		"ts": "2026-10-14T16:26:26.141Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 4545882.49,
		"hash": "c6fbcc7787eb82b3ef102058d7e6a9c501d0f234de174d14a06b78742b3c3519"
	},
	{
		"id": "83291eb0c5a1",
		"ts": "2026-10-14T16:26:26.382Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1341203.54,
		"hash": "83291eb0c5a1f1c9ed6ef5a2144eebb659f5728434fa0cde03674cb7ede0c0f7"
	},
	{
		"id": "781c865aedb3",
		"ts": "2026-10-14T16:26:26.628Z",
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
		"liquidityUsd": 15851442.52,
		"hash": "781c865aedb32effda8815c6541484f2ecf9adc4728c113fb0ea571c56655dc9"
	},
	{
		"id": "2dec65bc8bfd",
		"ts": "2026-10-14T16:26:26.867Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1066183.8,
		"hash": "2dec65bc8bfd2811dd15d3ba693898b0883c30a351fe8dd7299ff38666d3175e"
	},
	{
		"id": "f902d1a93c3b",
		"ts": "2026-10-14T16:26:27.093Z",
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
		"liquidityUsd": 2911849.17,
		"hash": "f902d1a93c3ba0b16d726471db5071bf0e17f17e13626c206020ce7a1f9a4d39"
	},
	{
		"id": "b45672289a98",
		"ts": "2026-10-14T16:26:27.339Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4000289.07,
		"hash": "b45672289a9877cd6f021c3b1f548feb5fbab180438925519a0bee5ab704ebf3"
	},
	{
		"id": "69efec216873",
		"ts": "2026-10-14T16:26:27.581Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5228866.75,
		"hash": "69efec216873538a195a7edaec495dd077bf17e112dd3f0860620a081a876199"
	},
	{
		"id": "0e5d4fc3fa7b",
		"ts": "2026-10-14T16:26:27.813Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 605098.07,
		"hash": "0e5d4fc3fa7ba3dcb111b3d8a45fb2ce88fdd37b9a1668bbc9553a35da840249"
	},
	{
		"id": "f18aaf86003b",
		"ts": "2026-10-14T11:05:58.831Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 149691851.92,
		"hash": "f18aaf86003b98e6f762a6eee3e9603135c7b76734f6e8fbc7c7a4a97b212a52"
	},
	{
		"id": "6349b877d912",
		"ts": "2026-10-14T11:05:59.168Z",
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
		"liquidityUsd": 18286019.22,
		"hash": "6349b877d912754e301259bdb2f7656941d105b35cc3d015490b40b6e8aafb0b"
	},
	{
		"id": "0edb71340273",
		"ts": "2026-10-14T11:05:59.476Z",
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
		"liquidityUsd": 798146.82,
		"hash": "0edb71340273537c6edf1c91069a3c9bd65179423171ccd775b21683776994ce"
	},
	{
		"id": "1e9ad59daa21",
		"ts": "2026-10-14T11:05:59.771Z",
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
		"liquidityUsd": 41756430.98,
		"hash": "1e9ad59daa2108a9122e1423815eed5afff112da76ffbc5d173bb319d3163fbb"
	},
	{
		"id": "4b394d9bbf61",
		"ts": "2026-10-14T11:06:00.067Z",
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
		"liquidityUsd": 4774178.76,
		"hash": "4b394d9bbf61a0b7b30a7f1e077421945fc7d5819afc3ad1a249e8cce8ecc4ea"
	},
	{
		"id": "ea8c68bb754f",
		"ts": "2026-10-14T11:06:00.365Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1212524.64,
		"hash": "ea8c68bb754f5bb2b00fc72b097e7437768b2d2b9ed2927e360c21195ff01f6d"
	},
	{
		"id": "a9188b335616",
		"ts": "2026-10-14T11:06:00.675Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41756431.04,
		"hash": "a9188b335616b683e826c674f8e9ef579a9b6320aee6d61179228a994ded1ed2"
	},
	{
		"id": "e282334c2180",
		"ts": "2026-10-14T11:06:00.972Z",
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
		"liquidityUsd": 3023411.42,
		"hash": "e282334c2180b6a2cd2e02322d15c05e13e2e6ff60d2d47bf448d39ff926b848"
	},
	{
		"id": "d3cfb0e7a6d7",
		"ts": "2026-10-14T11:06:01.268Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1800844.24,
		"hash": "d3cfb0e7a6d7124fe11e57ec693500f20b62d3a82cfe49877a26ab33c4e87164"
	},
	{
		"id": "e761966bc120",
		"ts": "2026-10-14T11:06:01.827Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 326950.32,
		"hash": "e761966bc1207a63f10d10f2d7da4b967d2d34a8fc17181997db4ea7c57b0c1a"
	},
	{
		"id": "13eca91160b6",
		"ts": "2026-10-14T11:06:02.119Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 4748082.38,
		"hash": "13eca91160b6240f3b21f5cac41c9725e85e2b91ef26bbe8ba0aaa1094575e66"
	},
	{
		"id": "db6ba0d930b2",
		"ts": "2026-10-14T11:06:02.415Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1282587.51,
		"hash": "db6ba0d930b23bf21a9e02fdfb0749f63e2f37d26b61e9580857cc4f8ada7d09"
	},
	{
		"id": "69fbef72d425",
		"ts": "2026-10-14T11:06:02.721Z",
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
		"liquidityUsd": 16268860.49,
		"hash": "69fbef72d425782491ba0e1e6c6e53c772301399e400a9a0d36921ff1689858c"
	},
	{
		"id": "ce9a4d6552b1",
		"ts": "2026-10-14T11:06:03.212Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5285657.52,
		"hash": "ce9a4d6552b1b001a429f7177f886737caabcf04c7890bf9de0b93a1a67c7c22"
	},
	{
		"id": "9727f28a8fac",
		"ts": "2026-10-14T11:06:03.606Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 600069.9,
		"hash": "9727f28a8fac44712b0a168b5548854be1519ab36ec22e26b8ac7b973c09dae3"
	},
	{
		"id": "33bf2de17086",
		"ts": "2026-10-14T11:06:03.869Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4174175.8,
		"hash": "33bf2de17086224bda4fbacb89a02196e4af6367ceb1778a84e5e9e708594386"
	},
	{
		"id": "218e1e64cd60",
		"ts": "2026-10-14T11:06:04.123Z",
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
		"liquidityUsd": 1146633.74,
		"hash": "218e1e64cd6062e3d5b677bd328abff85978eb15698a2747a393b3b447e03cb6"
	},
	{
		"id": "9da7564253ed",
		"ts": "2026-10-14T11:06:04.376Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1455078.82,
		"hash": "9da7564253edb5108d764a943656e6fcdf6caeb69731d93a4407641beacc9017"
	},
	{
		"id": "d0bdfafa481d",
		"ts": "2026-10-14T11:06:04.624Z",
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
		"liquidityUsd": 3039988.4,
		"hash": "d0bdfafa481dc633a5e50d41bd6b42e07a2c44570557f84e459adb64de8256fd"
	},
	{
		"id": "db3e09954721",
		"ts": "2026-10-14T05:45:18.391Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 150513738.12,
		"hash": "db3e09954721916802676991ac52f2b55e1b5c06be748491dab3649d13024fd9"
	},
	{
		"id": "7f4144af133b",
		"ts": "2026-10-14T05:45:18.700Z",
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
		"liquidityUsd": 18325178.04,
		"hash": "7f4144af133b686911b3603040692a3e47532d96c849aa6ee58d624a5cfceca3"
	},
	{
		"id": "e62b44302cff",
		"ts": "2026-10-14T05:45:18.969Z",
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
		"liquidityUsd": 799274.96,
		"hash": "e62b44302cff63bcdaad55e9506a45172d299b9dc1b32258e11e9979a3e989bb"
	},
	{
		"id": "b2bd540c2d16",
		"ts": "2026-10-14T05:45:19.224Z",
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
		"liquidityUsd": 41900140.15,
		"hash": "b2bd540c2d16e125e545a93f37ca35ef8df569c958b0774ddb12ff43649f8d6e"
	},
	{
		"id": "025257020a50",
		"ts": "2026-10-14T05:45:19.480Z",
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
		"liquidityUsd": 4782639.11,
		"hash": "025257020a50bb8d9fc74d34ab5102edaf519ac91e598a5ec110c397170788e1"
	},
	{
		"id": "327470e29a01",
		"ts": "2026-10-14T05:45:19.736Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1212514.46,
		"hash": "327470e29a012334515f4ff05c09d64e8b355d42b0460918b8623c768ed3845a"
	},
	{
		"id": "8af2c09704a6",
		"ts": "2026-10-14T05:45:20.001Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41900140.15,
		"hash": "8af2c09704a6a6addbe4d036affacb70ca6ba822e8a4a20da055b0651771da06"
	},
	{
		"id": "f86d75259d61",
		"ts": "2026-10-14T05:45:20.248Z",
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
		"liquidityUsd": 3037157.4,
		"hash": "f86d75259d613c04bf8d79a5f072ba7dc5018c947026c5b605407ad6393e85b1"
	},
	{
		"id": "d9185dd1e82c",
		"ts": "2026-10-14T05:45:20.505Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1890613.45,
		"hash": "d9185dd1e82cf7158c5bea68c9ec5e7b837cfbffd2831d34816cb600213c014f"
	},
	{
		"id": "b5c8b86d3420",
		"ts": "2026-10-14T05:45:20.756Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 331899.94,
		"hash": "b5c8b86d342083b6b5f766126ec01ffb8982315f50bcd53e65da8e785277faa4"
	},
	{
		"id": "8e5ab7419f17",
		"ts": "2026-10-14T05:45:20.994Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5200136.32,
		"hash": "8e5ab7419f1720766db7c9cc2d052e0901e6f7eec4b3afcc014ccc91919b975d"
	},
	{
		"id": "afe17b7ea4b0",
		"ts": "2026-10-14T05:45:21.241Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 4896017.67,
		"hash": "afe17b7ea4b0cd165e9e365771bd3e95de2c62c99c8e05be77aeabc6fed38a37"
	},
	{
		"id": "a283fc59704f",
		"ts": "2026-10-14T05:45:21.482Z",
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
		"liquidityUsd": 15906834.81,
		"hash": "a283fc59704ff65aa24f34ab76e76461fdf6bd861a100fd7848eb340e7481568"
	},
	{
		"id": "182a59dbb29a",
		"ts": "2026-10-14T05:45:21.714Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1127875.59,
		"hash": "182a59dbb29a03f7e2a6f699b7510ba319f6cd40de32e8106d814e2034122ae4"
	},
	{
		"id": "8b12388bac5f",
		"ts": "2026-10-14T05:45:21.958Z",
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
		"liquidityUsd": 3050602.52,
		"hash": "8b12388bac5fbf33a6554d0a34dea1ffc0f040423da91683d6721970cfd65bd8"
	},
	{
		"id": "79b892493239",
		"ts": "2026-10-14T05:45:22.202Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4069294.34,
		"hash": "79b89249323937f4ec19d5c5e802d1706f2b633df2990ec3c32b607c7e86a5a6"
	},
	{
		"id": "14a56a5397ae",
		"ts": "2026-10-14T05:45:22.429Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 613100.25,
		"hash": "14a56a5397ae77db2c2d2c46ea83762f188ed3840da1575f053ca9937518d103"
	},
	{
		"id": "af61d9d1d791",
		"ts": "2026-10-14T05:45:22.690Z",
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
		"liquidityUsd": 1174695.13,
		"hash": "af61d9d1d791199496d978299d59e8b16b475b866213b237f6143fb64a67268c"
	},
	{
		"id": "b8e55b6a7350",
		"ts": "2026-10-14T05:45:22.926Z",
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
		"liquidityUsd": 1185606.16,
		"hash": "b8e55b6a735078f241f9002ecd63f48320ba62d7a04488953ff80417759dc1b2"
	},
	{
		"id": "46439fc642c0",
		"ts": "2026-10-14T00:06:22.110Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 150314585.92,
		"hash": "46439fc642c0c41221f2d9022ee4d012e3a01bf261445cd355a208aa6e9e0823"
	},
	{
		"id": "9cc83df5ee8c",
		"ts": "2026-10-14T00:06:22.433Z",
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
		"liquidityUsd": 18193976.04,
		"hash": "9cc83df5ee8c818126c947d515ae7ec4e6c76019f668f525fc7b78ac57878f0b"
	},
	{
		"id": "36a10f1a21ac",
		"ts": "2026-10-14T00:06:22.746Z",
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
		"liquidityUsd": 802468.86,
		"hash": "36a10f1a21ac7fcd337cc254d900325e670aaea7b8ace24c1911755c1016c0f2"
	},
	{
		"id": "e0759da1164c",
		"ts": "2026-10-14T00:06:23.058Z",
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
		"liquidityUsd": 41950861.08,
		"hash": "e0759da1164c3043304dce6825d41315282dafa18a5f2f28e867deb673fa20e2"
	},
	{
		"id": "545516be0820",
		"ts": "2026-10-14T00:06:23.368Z",
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
		"liquidityUsd": 4762798.38,
		"hash": "545516be0820f76c0f9ae313d38bb9baca07bcf19723932e4bd6e43fae1c5904"
	},
	{
		"id": "b55b9de12975",
		"ts": "2026-10-14T00:06:23.678Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1208305.89,
		"hash": "b55b9de12975e81af69086ea11ac821ca446b1cc949dd58e8da2cb2b3347bc93"
	},
	{
		"id": "d299c638eb41",
		"ts": "2026-10-14T00:06:23.987Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41950861.08,
		"hash": "d299c638eb411af22b6b4b843c4ba98159b4d69e76d71078390ed921d83ce1fb"
	},
	{
		"id": "027d0791fa32",
		"ts": "2026-10-14T00:06:24.310Z",
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
		"liquidityUsd": 929443.36,
		"hash": "027d0791fa32e9b38b82c19f58131e7c298e370418b4a7aa6625c0983ff291e1"
	},
	{
		"id": "e1d681d5f174",
		"ts": "2026-10-14T00:06:24.621Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1909032.38,
		"hash": "e1d681d5f17425cff728d29e4d3a6b853450d21662d5c22fabe9be9781db4037"
	},
	{
		"id": "64ffca6886fb",
		"ts": "2026-10-14T00:06:24.924Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 318259.72,
		"hash": "64ffca6886fbf556504ee1e5ac80313b7bc1816738d7eb741b0fe07761a5241f"
	},
	{
		"id": "1e8306a0aeea",
		"ts": "2026-10-14T00:06:25.213Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 5094678.39,
		"hash": "1e8306a0aeeae70def10b5f97f9d16e12a03dbbf5136cd285c1c0d379bb31060"
	},
	{
		"id": "8b1bcdc2deae",
		"ts": "2026-10-14T00:06:25.507Z",
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
		"liquidityUsd": 15765452.09,
		"hash": "8b1bcdc2deae1852ea988c855010d48d1269fbddaa413feaa0238c54e1e67fa3"
	},
	{
		"id": "91c0196ee4a3",
		"ts": "2026-10-14T00:06:25.798Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1123733.54,
		"hash": "91c0196ee4a3ce2cf021c4baf8d71d2f540d9664db3efb6e43771e994398744e"
	},
	{
		"id": "74ee078fc335",
		"ts": "2026-10-14T00:06:26.089Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4078118.5,
		"hash": "74ee078fc335831027cf90888b8e7dc6f9965580567dcaae9fe8d6e7b6cbbb8d"
	},
	{
		"id": "fc8dca4edfb4",
		"ts": "2026-10-14T00:06:26.378Z",
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
		"liquidityUsd": 3088432.27,
		"hash": "fc8dca4edfb43317bfef2420c032df1d5ab570d75ecbc6f4307f98d567b3f657"
	},
	{
		"id": "89b8ead4fadf",
		"ts": "2026-10-14T00:06:26.670Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 623089.67,
		"hash": "89b8ead4fadf115d6f0af30af21072e1544533253cec435b553b1b7aac0c4165"
	},
	{
		"id": "1c92e036cd07",
		"ts": "2026-10-14T00:06:26.963Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 448617.11,
		"hash": "1c92e036cd074e931f2f8674f6a22756b6ad25a82b632cd36814ce586d0e1ffd"
	},
	{
		"id": "5363045427cf",
		"ts": "2026-10-14T00:06:27.251Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 197587.14,
		"hash": "5363045427cfce2d352555fc5d692dbb715853d077ac2ae5c41c5cd44a625d86"
	},
	{
		"id": "6a8657527542",
		"ts": "2026-10-14T00:06:27.540Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5158759.72,
		"hash": "6a86575275429496b78344a62b5c6f9247a1ca601f67b52048e6b57fc9da68de"
	},
	{
		"id": "334deda56350",
		"ts": "2026-10-13T20:02:37.615Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 150494459.46,
		"hash": "334deda563503b5f2c3f05b24c03510542114a0e6400f4f6c30770fc511cae70"
	},
	{
		"id": "80be976d0a7e",
		"ts": "2026-10-13T20:02:38.142Z",
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
		"liquidityUsd": 18275383.57,
		"hash": "80be976d0a7e6b6f2d126d26d7d123db8522ea7d05d16cd3d4c4de0ca1c4b6e2"
	},
	{
		"id": "4ce33acd818f",
		"ts": "2026-10-13T20:02:38.444Z",
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
		"liquidityUsd": 800872.5,
		"hash": "4ce33acd818fa06f2024c6432ad0a805a5a2597a1aa20aef2398327ca55448bd"
	},
	{
		"id": "9870044bb39e",
		"ts": "2026-10-13T20:02:38.745Z",
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
		"liquidityUsd": 42013803.89,
		"hash": "9870044bb39e2a1921882d8565228ce033f4388885ab261b17a29c56abc2187e"
	},
	{
		"id": "e0f4b7d3344f",
		"ts": "2026-10-13T20:02:39.042Z",
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
		"liquidityUsd": 4775686.43,
		"hash": "e0f4b7d3344fc06c8393b62645b396269c4b42940f76b37f3c1ef65874c6c439"
	},
	{
		"id": "913519fcf6db",
		"ts": "2026-10-13T20:02:39.382Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1208240.4,
		"hash": "913519fcf6db183a24f198594f9d9ce70ce0c4a179bc816cc384b1bec858116c"
	},
	{
		"id": "4e3702e5c1ac",
		"ts": "2026-10-13T20:02:39.677Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42013803.89,
		"hash": "4e3702e5c1acb03013c283d9d274b389c081432b09351ee52452bf6ba8bf35c0"
	},
	{
		"id": "20c4c277c687",
		"ts": "2026-10-13T20:02:39.976Z",
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
		"liquidityUsd": 932976.26,
		"hash": "20c4c277c6872a31a502c99b621c75e566b3806ce1c300bb5acf3866a0fabfc4"
	},
	{
		"id": "8760c4ccdee3",
		"ts": "2026-10-13T20:02:40.264Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1885988.3,
		"hash": "8760c4ccdee3edb3bc4c360199ab1c117763177f2f098980a293423aa14c0611"
	},
	{
		"id": "b73f632bb696",
		"ts": "2026-10-13T20:02:40.562Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 325390.41,
		"hash": "b73f632bb6962d97e5a7f4b02bd66b45bf5738fa12e03896e20db966abbb24ec"
	},
	{
		"id": "b599f08c1f68",
		"ts": "2026-10-13T20:02:40.833Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5106168.08,
		"hash": "b599f08c1f68fbfe10003b7be19789879b6f4c85e11647d2d811a7af6478df5f"
	},
	{
		"id": "fd1349e7d56c",
		"ts": "2026-10-13T20:02:41.113Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 4817184.14,
		"hash": "fd1349e7d56cf951bddac25f6b5b09a39fe37fac1a9eab8cb86af4fe19b02bae"
	},
	{
		"id": "c86ceb9b79ed",
		"ts": "2026-10-13T20:02:41.388Z",
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
		"liquidityUsd": 15489655.04,
		"hash": "c86ceb9b79eddded35120ae53110cbe85c4845905e605fce468883c4f1036b5d"
	},
	{
		"id": "79b8cdbe642d",
		"ts": "2026-10-13T20:02:41.669Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1130554.06,
		"hash": "79b8cdbe642d8dc2fe69f5f941797a222fb93538c1b73d601affb0b0e5c827e0"
	},
	{
		"id": "707636e7fcd6",
		"ts": "2026-10-13T20:02:41.945Z",
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
		"liquidityUsd": 3098457.92,
		"hash": "707636e7fcd60a4caf80a6a925ab733622240cda2cbf5927891b38f7455aa26f"
	},
	{
		"id": "3393d63db469",
		"ts": "2026-10-13T20:02:42.228Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 456415.2,
		"hash": "3393d63db46957b84a0fc702178a00a46a7fb3149f4dddb9fd0848e8ee91af66"
	},
	{
		"id": "ae7fd428f83c",
		"ts": "2026-10-13T20:02:42.502Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2146659.82,
		"hash": "ae7fd428f83cf88a0a2505d541a9f75401c2f9355c62a03acd3e618dbe1b5873"
	},
	{
		"id": "aa9fda89c63e",
		"ts": "2026-10-13T20:02:42.778Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 197819.4,
		"hash": "aa9fda89c63ee442548995b37552aeb7cdb62b443ed85ebd7a8209cef2faf219"
	},
	{
		"id": "6ab4a6692c80",
		"ts": "2026-10-13T20:02:43.053Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3940048.12,
		"hash": "6ab4a6692c80d7074b9059f05758383cbd08c5ff53ee32e9c225d18c770e2cdd"
	},
	{
		"id": "fcf5992ce1bf",
		"ts": "2026-10-13T13:28:11.896Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 150067717.04,
		"hash": "fcf5992ce1bfa7be4894effc625ad42802ee50f7ce3a3b27c95c33c57cb3a806"
	},
	{
		"id": "8ec25219dbaa",
		"ts": "2026-10-13T13:28:12.411Z",
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
		"liquidityUsd": 18202629.91,
		"hash": "8ec25219dbaa0901edd7da9233357d90f2660e48587c929890667933763ed4e3"
	},
	{
		"id": "4ffc350174f4",
		"ts": "2026-10-13T13:28:12.687Z",
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
		"liquidityUsd": 802071.29,
		"hash": "4ffc350174f42bf587adf3f5a1e90f4b702763f80dc6f805f97bb86efa5016e0"
	},
	{
		"id": "637b23fd9b94",
		"ts": "2026-10-13T13:28:12.963Z",
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
		"liquidityUsd": 40714270.67,
		"hash": "637b23fd9b9492dbf8984d024c0d227870264407c198ad3cd98add6fa79fb5de"
	},
	{
		"id": "e487bc050432",
		"ts": "2026-10-13T13:28:13.246Z",
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
		"liquidityUsd": 4745133.93,
		"hash": "e487bc05043217e9428758e6f57696171f09f1c1b3d5648a07738afbab1cde9b"
	},
	{
		"id": "7e7fc174901d",
		"ts": "2026-10-13T13:28:13.521Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1199448.97,
		"hash": "7e7fc174901d6b698efe1a630171f07b4e8752e651497bc139cdf765cd93f30b"
	},
	{
		"id": "051416f1f51c",
		"ts": "2026-10-13T13:28:13.794Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 40714270.67,
		"hash": "051416f1f51cd5008eaeeedea619d255187c54c01f8cf9ed69e2baca53b46ea8"
	},
	{
		"id": "7b96192c6346",
		"ts": "2026-10-13T13:28:14.303Z",
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
		"liquidityUsd": 3031299.76,
		"hash": "7b96192c6346956e2be4ba71a5f37cec1130533ebe965082b2b4685d87cf496a"
	},
	{
		"id": "55e44ea4cd41",
		"ts": "2026-10-13T13:28:14.566Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1877515.85,
		"hash": "55e44ea4cd41b6ef29ebc19f318d086dd942c81fa40616813c8208d751f15795"
	},
	{
		"id": "17007d21667c",
		"ts": "2026-10-13T13:28:14.839Z",
		"symbol": "THEO",
		"token": "0xebE516a20238F79DC20b07eaD6768e08891Ed309",
		"score": 68,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.36,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 45873.61,
		"hash": "17007d21667cae5a42bb25c7da4ffa16c344960250098a5aa834e31599c5966f"
	},
	{
		"id": "432b29397dff",
		"ts": "2026-10-13T13:28:15.090Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 192513.09,
		"hash": "432b29397dff702090e1fa9a7ec8bd41e0a19913d39f955bd94735dd8fc10317"
	},
	{
		"id": "09bc05990529",
		"ts": "2026-10-13T13:28:15.353Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 4684779.94,
		"hash": "09bc0599052924f7da25ce7eadbe7f2bb6aff26cd6f30a5a992e4bdc5fd76148"
	},
	{
		"id": "348dfd4326e6",
		"ts": "2026-10-13T13:28:15.608Z",
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
		"liquidityUsd": 15518278.65,
		"hash": "348dfd4326e6c58412428fd3906b2862aedcd921a429263ccd8b746d18f812c2"
	},
	{
		"id": "2ba399da1b05",
		"ts": "2026-10-13T13:28:15.860Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5126562.79,
		"hash": "2ba399da1b050166417bcc66a6c2b3bf300a294daef8805b6465f3aa8289ca4e"
	},
	{
		"id": "3569207b7ae6",
		"ts": "2026-10-13T13:28:16.122Z",
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
		"liquidityUsd": 313258.84,
		"hash": "3569207b7ae6f07e3fa28d093e355f595f717046061bde02e37c4d90fe852d53"
	},
	{
		"id": "e055af8634a8",
		"ts": "2026-10-13T13:28:16.391Z",
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
		"liquidityUsd": 3083837.76,
		"hash": "e055af8634a81baba26d27b8759054730b156168ebdf2cbed30ce15a3387dc02"
	},
	{
		"id": "6af840761ab4",
		"ts": "2026-10-13T13:28:16.649Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1123649.89,
		"hash": "6af840761ab46a061478793601d87eda5df2ce17c37eb3cc4bf65e6df91aa184"
	},
	{
		"id": "df5fcf61ace3",
		"ts": "2026-10-13T13:28:16.903Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1494133.46,
		"hash": "df5fcf61ace38010a29957cc006fd57308ef1dd0cba9835c0797fc82fa68a514"
	},
	{
		"id": "44a15f49fce1",
		"ts": "2026-10-13T13:28:17.161Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4046025.65,
		"hash": "44a15f49fce1c815c9983530ebdce160b30ab8d53ba3ea0a56fb942b409a6313"
	},
	{
		"id": "468c42bc55c7",
		"ts": "2026-10-13T05:16:49.357Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 150046721.9,
		"hash": "468c42bc55c796ebdea728ed7a8741b549b0b75a4b84bb6dbb4bfed80bb3fdea"
	},
	{
		"id": "72ec65ebdc67",
		"ts": "2026-10-13T05:16:49.628Z",
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
		"liquidityUsd": 18265339.88,
		"hash": "72ec65ebdc67110c2b564fc018b7c8d8ca47fb122d47d063da59f17411e401ef"
	},
	{
		"id": "c3007edcbe7d",
		"ts": "2026-10-13T05:16:49.875Z",
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
		"liquidityUsd": 806557.86,
		"hash": "c3007edcbe7d24854d74744d2ffb35d68ce055d90259dde6c8c1c45ffcb1cadd"
	},
	{
		"id": "f59a733cd768",
		"ts": "2026-10-13T05:16:50.186Z",
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
		"liquidityUsd": 41224533.21,
		"hash": "f59a733cd76870b107d4542bb699766c513be057a081d182fa92466f237c6487"
	},
	{
		"id": "5b7402619d6f",
		"ts": "2026-10-13T05:16:50.451Z",
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
		"liquidityUsd": 4804475.14,
		"hash": "5b7402619d6f45b2be72faf25de7136ca0269f7defa3958f729afcab58fef32c"
	},
	{
		"id": "687b66230f9f",
		"ts": "2026-10-13T05:16:50.711Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1218231.64,
		"hash": "687b66230f9f11b9293fe42cd99624490884f8a41027ff5a74bfacd8e47801ab"
	},
	{
		"id": "5ccd74469fea",
		"ts": "2026-10-13T05:16:50.983Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41224533.21,
		"hash": "5ccd74469fea564738ff3970df00473631fb31dad79c5d1b2ace92dcb791f0aa"
	},
	{
		"id": "8c3e88972695",
		"ts": "2026-10-13T05:16:51.262Z",
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
		"liquidityUsd": 3277950.22,
		"hash": "8c3e889726956998110c256456479de87d6884dcfd1c82d12cc3d361a5f3814d"
	},
	{
		"id": "cb06347b35f3",
		"ts": "2026-10-13T05:16:51.518Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1879884.32,
		"hash": "cb06347b35f33e663c2390225c1e62ad6c4221537ec4856f53f713592da8e539"
	},
	{
		"id": "7475ef833b4d",
		"ts": "2026-10-13T05:16:51.895Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5076577.18,
		"hash": "7475ef833b4dc61d79f11b52c21a1d1fd19468935e04763f74049d860ca73239"
	},
	{
		"id": "72a4d3bfa9b7",
		"ts": "2026-10-13T05:16:52.127Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 182383.13,
		"hash": "72a4d3bfa9b757dce7e79e58ee45dacba13cb35e7f48da69ce5face5e5253463"
	},
	{
		"id": "582c4d071f7d",
		"ts": "2026-10-13T05:16:52.355Z",
		"symbol": "THEO",
		"token": "0xebE516a20238F79DC20b07eaD6768e08891Ed309",
		"score": 76,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.52,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 45332.16,
		"hash": "582c4d071f7d78ada34fcba57dbbdf3959030711c69a9299f4526f8536c847df"
	},
	{
		"id": "f758ff064ccf",
		"ts": "2026-10-13T05:16:52.590Z",
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
		"liquidityUsd": 15860762.58,
		"hash": "f758ff064ccf01075532f8f7b246a5436164d64002ba66d18354737c209b35b3"
	},
	{
		"id": "87a1f3027860",
		"ts": "2026-10-13T05:16:52.827Z",
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
		"liquidityUsd": 1197773.06,
		"hash": "87a1f3027860c04d7d5261142e7f7cabcd114d9a43275e644ce6ad9ab42fe2df"
	},
	{
		"id": "b2b969309229",
		"ts": "2026-10-13T05:16:53.055Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 4723325.91,
		"hash": "b2b969309229fafddde683b82ae6a817fed446afa0dbbf0713a1c0e21379e4ad"
	},
	{
		"id": "0eefb7ec3049",
		"ts": "2026-10-13T05:16:53.292Z",
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
		"liquidityUsd": 324590.59,
		"hash": "0eefb7ec30496b826132e9e45c8f5bd205f54003a520d024af562d31555629ac"
	},
	{
		"id": "11f12b690ff0",
		"ts": "2026-10-13T05:16:53.525Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1492681.98,
		"hash": "11f12b690ff07381a4d6f6a9180ae810a1878c43d1e91098ce950fb5c46177c6"
	},
	{
		"id": "a99840e27938",
		"ts": "2026-10-13T05:16:53.749Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2192684.34,
		"hash": "a99840e279385130a9d12eed9e096b69502a42d238142e85f46228ef20fc6a5c"
	},
	{
		"id": "f19e8a5a775f",
		"ts": "2026-10-13T05:16:53.985Z",
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
		"liquidityUsd": 1122178.39,
		"hash": "f19e8a5a775f595b4b5c39b389bfcc7ecd954a5510105c9a133a760b8f9633a1"
	},
	{
		"id": "c9b9bb71b647",
		"ts": "2026-10-12T23:27:01.783Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 148286914.2,
		"hash": "c9b9bb71b6473506a7de61718e53be1e5bd66af36bf8fa2d431b9295ff6ba835"
	},
	{
		"id": "b1d76ed09be3",
		"ts": "2026-10-12T23:27:02.251Z",
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
		"liquidityUsd": 17964237.32,
		"hash": "b1d76ed09be3f3297b81295b35cca71953baf60a3f10d78f7a022bb69c9d04af"
	},
	{
		"id": "296571f414dd",
		"ts": "2026-10-12T23:27:02.498Z",
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
		"liquidityUsd": 794125.89,
		"hash": "296571f414dd8d2848feb106e53467d8f5f56c541ff539f52e97173c26f126be"
	},
	{
		"id": "28e61f194daf",
		"ts": "2026-10-12T23:27:02.745Z",
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
		"liquidityUsd": 40731849.15,
		"hash": "28e61f194daf9f17fab8963de33b47f017b12941f36d2fffe0cb158522fc0c67"
	},
	{
		"id": "08fcc12c68a7",
		"ts": "2026-10-12T23:27:03.025Z",
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
		"liquidityUsd": 4719764.08,
		"hash": "08fcc12c68a798558a46c8b1abfcc9184f4d2194d9f89bd2184deafe97118cf4"
	},
	{
		"id": "cd3733e75cdf",
		"ts": "2026-10-12T23:27:03.302Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1227144.82,
		"hash": "cd3733e75cdf0510e788a6edd965221e079d625b545529dabb946410f8d3d7ff"
	},
	{
		"id": "fd3410e1adb7",
		"ts": "2026-10-12T23:27:03.609Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 40731853.46,
		"hash": "fd3410e1adb7f8c851a22157751566e863f9b2b7600c12b990711a576dd49aee"
	},
	{
		"id": "643ae574d9b8",
		"ts": "2026-10-12T23:27:03.859Z",
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
		"liquidityUsd": 641972.79,
		"hash": "643ae574d9b86ec6a986d14d90172d09556d6f352f7a2a92365d973af17a9673"
	},
	{
		"id": "5cd18a1eb770",
		"ts": "2026-10-12T23:27:04.101Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1885236.49,
		"hash": "5cd18a1eb7705d127a4611a2cc399480540242ecc11387ef4d074f46ebf3a817"
	},
	{
		"id": "38a24012ace8",
		"ts": "2026-10-12T23:27:04.348Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5083953.51,
		"hash": "38a24012ace8da13f5989d9cf068e890646c2c2df801143d8b5417e430d005cb"
	}
]
