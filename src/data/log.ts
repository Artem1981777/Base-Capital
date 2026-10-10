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
	"updatedAt": "2026-10-10T15:00:18.293Z",
	"tokensScored": 19859,
	"verdictsIssued": 19859,
	"safe": 16927,
	"risky": 1418,
	"likelyRug": 1514,
	"ticks": 1125
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "2c2fc844cc6c",
		"ts": "2026-10-10T15:00:14.605Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 148474387.17,
		"hash": "2c2fc844cc6c0aa20e17b6d4082c3f52906f3afc869b658f326e23bb8d78711f"
	},
	{
		"id": "806fd16e1097",
		"ts": "2026-10-10T15:00:14.854Z",
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
		"liquidityUsd": 18238977.09,
		"hash": "806fd16e10972e06268560c065b697d8f3e65813934e61bcd8669811c35424f5"
	},
	{
		"id": "2fdb9e2a9031",
		"ts": "2026-10-10T15:00:15.082Z",
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
		"liquidityUsd": 805641.54,
		"hash": "2fdb9e2a9031132da69296143866f4dcb6dd4c75c8ad8e88f9a508c83d308cd2"
	},
	{
		"id": "171171ff16ff",
		"ts": "2026-10-10T15:00:15.329Z",
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
		"liquidityUsd": 46687122.47,
		"hash": "171171ff16ffc6effc3e5b8dc97dc08a5e0311d23b8ce6c94ef8d2dc1f4ca84a"
	},
	{
		"id": "88216be2c194",
		"ts": "2026-10-10T15:00:15.529Z",
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
		"liquidityUsd": 4925719.42,
		"hash": "88216be2c194a6a7e0bf6623c8dbeda0f894b39b3a77d583c51bddf2118844aa"
	},
	{
		"id": "83630f84e754",
		"ts": "2026-10-10T15:00:15.726Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1215637.69,
		"hash": "83630f84e7544cb7b55f60c30c1fa3134af300dd7cc018135e9cbb2f31dba0a7"
	},
	{
		"id": "55301cd1d2ee",
		"ts": "2026-10-10T15:00:15.937Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 46687122.47,
		"hash": "55301cd1d2eed96fe96ed2a877705534cced7e86c9bad6646ef9cd5e3c43bbcb"
	},
	{
		"id": "21b579417e6f",
		"ts": "2026-10-10T15:00:16.160Z",
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
		"liquidityUsd": 2302613.55,
		"hash": "21b579417e6f06902fec2c58bd9cf9aa9ac47b7d75370c3be27a70b94078f8b7"
	},
	{
		"id": "90f368cd06f8",
		"ts": "2026-10-10T15:00:16.376Z",
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
		"liquidityUsd": 1949502.1,
		"hash": "90f368cd06f8a8505b6f65b3d7a90552edd4307107bb0c2e848ccb653432b182"
	},
	{
		"id": "84b901fd9a9b",
		"ts": "2026-10-10T15:00:16.620Z",
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
		"liquidityUsd": 5667854.77,
		"hash": "84b901fd9a9bcead2c49619ce4110c2801a40c879021e1c96044e4f5af8bbe21"
	},
	{
		"id": "e7576fff1f75",
		"ts": "2026-10-10T15:00:16.803Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1531990.22,
		"hash": "e7576fff1f753a45bf6dfba89705275d7567abd52f0214088ac06bcbfef3608e"
	},
	{
		"id": "c2d29f5badac",
		"ts": "2026-10-10T15:00:16.986Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4099429.51,
		"hash": "c2d29f5badac29b1c57198917efda42b6df1db707ac979b0a4fb5f730853eb83"
	},
	{
		"id": "cb9b26513454",
		"ts": "2026-10-10T15:00:17.169Z",
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
		"liquidityUsd": 15546562.13,
		"hash": "cb9b26513454f1ea04ab4e1e4adf68a46e60fd347bf8a0b0eb61195ed34ba5ac"
	},
	{
		"id": "543d2d35f584",
		"ts": "2026-10-10T15:00:17.354Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1277584.43,
		"hash": "543d2d35f584367c4444e621bcf15754abcf2c07e8644a6b2b160fc5dcd5c9d1"
	},
	{
		"id": "04d1ad00584a",
		"ts": "2026-10-10T15:00:17.544Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 147759.88,
		"hash": "04d1ad00584a989825d3dc541dab355fa35a582734b77cbc36253691033eeee5"
	},
	{
		"id": "1e5c884e46a0",
		"ts": "2026-10-10T15:00:17.727Z",
		"symbol": "MAGIC",
		"token": "0xF1572d1Da5c3CcE14eE5a1c9327d17e9ff0E3f43",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 394762.88,
		"hash": "1e5c884e46a0cfb8a91031f4c56db9b5b816ff6a9cc6c8ab4463c3e94be4b2cd"
	},
	{
		"id": "d4abb6f2f9ef",
		"ts": "2026-10-10T15:00:17.928Z",
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
		"liquidityUsd": 183022.8,
		"hash": "d4abb6f2f9ef8b3c740c45b88c8de497c51834de1eb2648b47d47d7f8eff1464"
	},
	{
		"id": "78f8ddbfb123",
		"ts": "2026-10-10T15:00:18.111Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2193712.71,
		"hash": "78f8ddbfb1237c9cbebc1a3eb690af4897c02ac41e079d86738d240db3e221ab"
	},
	{
		"id": "f7dd71a7f0ae",
		"ts": "2026-10-10T15:00:18.293Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1156628.08,
		"hash": "f7dd71a7f0ae25ba969a846b155eabc82f0b98e2b458d9694017af4126e58d6c"
	},
	{
		"id": "22f869f6aca7",
		"ts": "2026-10-10T08:02:45.512Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 147842255.18,
		"hash": "22f869f6aca7b8c2a1223e3465145c6191ae023c438a012f508a941b2f17a446"
	},
	{
		"id": "026c36925112",
		"ts": "2026-10-10T08:02:46.195Z",
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
		"liquidityUsd": 18136018.9,
		"hash": "026c36925112068b3eac25e641dab3833dfb849bfedb387269c041c23a4e14e4"
	},
	{
		"id": "31958e6fc736",
		"ts": "2026-10-10T08:02:46.718Z",
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
		"liquidityUsd": 807645.08,
		"hash": "31958e6fc73622039f3581a5658a8edccf4568a23ad15ef14100ab0df4ab14a1"
	},
	{
		"id": "332ebdcbe946",
		"ts": "2026-10-10T08:02:46.995Z",
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
		"liquidityUsd": 44940574.6,
		"hash": "332ebdcbe946262f07dea8f517ffb09ef2a4527a8bb015db4ae3ae64e22822af"
	},
	{
		"id": "103938927d3f",
		"ts": "2026-10-10T08:02:47.319Z",
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
		"liquidityUsd": 4873835.98,
		"hash": "103938927d3f06fe0acf69f5cdc1c45144d33ba3075e5ffa20d68b0a3f982e68"
	},
	{
		"id": "12ada9f182dc",
		"ts": "2026-10-10T08:02:47.592Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1219689.63,
		"hash": "12ada9f182dc6f91cf2150606bff84253a05d3906338c3915a56649de613c375"
	},
	{
		"id": "434b7985c16e",
		"ts": "2026-10-10T08:02:47.911Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 44947149.49,
		"hash": "434b7985c16e4838d109a74a218663e6712ad26b564642d014a5bfcdf6c40d80"
	},
	{
		"id": "1f36a5856f1f",
		"ts": "2026-10-10T08:02:48.189Z",
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
		"liquidityUsd": 804128.09,
		"hash": "1f36a5856f1fcdccf45687a71d2e66c60257d0945d0b849d716ba249772355ca"
	},
	{
		"id": "4c9437b25e4f",
		"ts": "2026-10-10T08:02:48.511Z",
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
		"liquidityUsd": 1955956.73,
		"hash": "4c9437b25e4fe287ccf0ecb2f91801df24d7e1972c5d8f433afa8af67063dbb5"
	},
	{
		"id": "01608d33d72a",
		"ts": "2026-10-10T08:02:48.771Z",
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
		"liquidityUsd": 5705265.9,
		"hash": "01608d33d72a2afe4d22e5a3581077485bac0166485c64c9fc289f22c2ccbaf8"
	},
	{
		"id": "594e8e842274",
		"ts": "2026-10-10T08:02:49.026Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1526471.2,
		"hash": "594e8e842274aa47150077ce1f978174a40a9b060b811ca6f81295cf82fdc51e"
	},
	{
		"id": "4d706567c16c",
		"ts": "2026-10-10T08:02:49.269Z",
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
		"liquidityUsd": 15512594.29,
		"hash": "4d706567c16c31c772257710764b2ad20ac62a1dd798dc53297dec57d305d5a6"
	},
	{
		"id": "57b932a42184",
		"ts": "2026-10-10T08:02:49.523Z",
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
		"liquidityUsd": 3498323.35,
		"hash": "57b932a4218426bc8b2129851e992b60a6b3549244a7eb4f012b7d22fe7bd618"
	},
	{
		"id": "991f9707bbc4",
		"ts": "2026-10-10T08:02:49.776Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1300185.05,
		"hash": "991f9707bbc406ef5cb919b92ed58bc1d5e1b53a257303ab05ff12f87ffde114"
	},
	{
		"id": "f7dc8c8837c6",
		"ts": "2026-10-10T08:02:50.030Z",
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
		"liquidityUsd": 174927.37,
		"hash": "f7dc8c8837c652e4686d8237141eae844c3d03ba36026e7b2eadabcb65fc738c"
	},
	{
		"id": "acccf9cfcf35",
		"ts": "2026-10-10T08:02:50.269Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 153722.91,
		"hash": "acccf9cfcf35b2ca116f8c58e460b5ee7859364cb7644736d441b26fadb7bc2c"
	},
	{
		"id": "2f3231dcac53",
		"ts": "2026-10-10T08:02:50.523Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4266217.72,
		"hash": "2f3231dcac53bf8b20250746c2f2d0001eeac5415aece3e5542380c49de20ed1"
	},
	{
		"id": "0f7e5bc706eb",
		"ts": "2026-10-10T08:02:50.763Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 362868.88,
		"hash": "0f7e5bc706ebea23f34dc9d34fceee21aef605c476ae161d4aefbe3c6b60050b"
	},
	{
		"id": "44a8d8351177",
		"ts": "2026-10-10T08:02:51.015Z",
		"symbol": "MAGIC",
		"token": "0xF1572d1Da5c3CcE14eE5a1c9327d17e9ff0E3f43",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 397741.74,
		"hash": "44a8d8351177ac8f41010158ec601b62061bda9f3a0e5266b386c0901b3acf62"
	},
	{
		"id": "9d1b829cffa1",
		"ts": "2026-10-10T01:28:53.519Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 147695324.63,
		"hash": "9d1b829cffa1017dae07cce169156240c21308c4fceb762336747e9549ebdafa"
	},
	{
		"id": "e52b02176bc6",
		"ts": "2026-10-10T01:28:53.731Z",
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
		"liquidityUsd": 18088826.28,
		"hash": "e52b02176bc642cdfcc00a6c892b939f85f87a9829732b06fd81aa626c90a594"
	},
	{
		"id": "6696e2d89635",
		"ts": "2026-10-10T01:28:53.939Z",
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
		"liquidityUsd": 805056.78,
		"hash": "6696e2d89635af2596b35d3c87bb52faf99d4fa18d0367bb75a1ee5052c6bb94"
	},
	{
		"id": "36ffca7bde3f",
		"ts": "2026-10-10T01:28:54.141Z",
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
		"liquidityUsd": 43977100.79,
		"hash": "36ffca7bde3f58b08e87fa88c02bf97e89e0d1ee27e6da774f75c76f52448615"
	},
	{
		"id": "8ec9b39daaf0",
		"ts": "2026-10-10T01:28:54.338Z",
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
		"liquidityUsd": 4832780.69,
		"hash": "8ec9b39daaf0b71e7b3d9b4e43571c0ada8a1756a0a163fa6a784d07b9294eef"
	},
	{
		"id": "41e59d049569",
		"ts": "2026-10-10T01:28:54.547Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1228481.1,
		"hash": "41e59d049569946fe35797da4e93036b18d60eb40dfd42bf3a7f2c01e39b7a56"
	},
	{
		"id": "c77e73a6f87a",
		"ts": "2026-10-10T01:28:54.744Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 43977100.79,
		"hash": "c77e73a6f87a6ed7146763d0956e67edc8d16f0fdd3deb26dbb6ce9be9b188d7"
	},
	{
		"id": "d1d21136ab34",
		"ts": "2026-10-10T01:28:54.979Z",
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
		"liquidityUsd": 803405.28,
		"hash": "d1d21136ab34c1b6ce590a90ea2410d51e88cb64d2d811953db2542f532e3b9e"
	},
	{
		"id": "df00be666aa3",
		"ts": "2026-10-10T01:28:55.208Z",
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
		"liquidityUsd": 1913618.73,
		"hash": "df00be666aa3bb15f59764325a058687d9a71bba6f789826fdd8de49d3b3e604"
	},
	{
		"id": "babb61ccb202",
		"ts": "2026-10-10T01:28:55.445Z",
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
		"liquidityUsd": 5694589.38,
		"hash": "babb61ccb2021cf01f21b49fd96209f497ae226a6b1fffff5e60778fbfa4e5af"
	},
	{
		"id": "283ad60fa334",
		"ts": "2026-10-10T01:28:55.710Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1531197.73,
		"hash": "283ad60fa3349747702c319c4a9f143054506d7b1affd53d8119636165ace250"
	},
	{
		"id": "c09b0cd82600",
		"ts": "2026-10-10T01:28:55.905Z",
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
		"liquidityUsd": 15554191.23,
		"hash": "c09b0cd8260056363d60549713a88b620fce264c6b935ad76cc2bb4848422e90"
	},
	{
		"id": "6e69db00cf50",
		"ts": "2026-10-10T01:28:56.113Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1297191.09,
		"hash": "6e69db00cf5024d466c95a856997631aff10ee0aea642007cceaa74b5d6d95a8"
	},
	{
		"id": "c551ed4fc1cc",
		"ts": "2026-10-10T01:28:56.322Z",
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
		"liquidityUsd": 3454253.38,
		"hash": "c551ed4fc1cc8ca86cba3653e07695c6a237b334a5bc245395413ad73230f19c"
	},
	{
		"id": "c53a4b55a00e",
		"ts": "2026-10-10T01:28:56.511Z",
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
		"liquidityUsd": 173185.97,
		"hash": "c53a4b55a00e6f3310ebdcf91e5d87032edc511d4ff4e47c13235a946d4b8441"
	},
	{
		"id": "a0ed278c6d03",
		"ts": "2026-10-10T01:28:56.724Z",
		"symbol": "whuf",
		"token": "0xeeee77bC7e82c0d4166d52F58239D4c5Bf41eeee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 280554.01,
		"hash": "a0ed278c6d0316a55d8f99104313f523685a3fe0e4c1dcba4127882d440cc61d"
	},
	{
		"id": "af1b298347fd",
		"ts": "2026-10-10T01:28:56.910Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 142667.44,
		"hash": "af1b298347fd1ac855dab2aadb372d59c990cc5a389053fcb717a64a551c629c"
	},
	{
		"id": "573f6bf00489",
		"ts": "2026-10-10T01:28:57.099Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4026434.2,
		"hash": "573f6bf004895d5141f18164efa86440ca666b204ef3a707b7430fd9d97675d6"
	},
	{
		"id": "e123703b0ed4",
		"ts": "2026-10-10T01:28:57.295Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 354654.82,
		"hash": "e123703b0ed4f2e9d38c6a799425ae8f87a2c6e6ddc622c0b3da93640a516333"
	},
	{
		"id": "0952712c0495",
		"ts": "2026-10-09T21:27:05.295Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 147607192.19,
		"hash": "0952712c04950332dc237ea00cbcefff6c0cafbe80c5a2eda7d4f723aecd09e2"
	},
	{
		"id": "5283a22550d3",
		"ts": "2026-10-09T21:27:05.654Z",
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
		"liquidityUsd": 18068004.85,
		"hash": "5283a22550d3d520a395ed3f575c22fdf87a0e70c8d3da16ac8d6f7a4b76af79"
	},
	{
		"id": "03b1d3a8bcdc",
		"ts": "2026-10-09T21:27:05.872Z",
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
		"liquidityUsd": 805056.78,
		"hash": "03b1d3a8bcdc1ce851c134a122a8276582bcfc1222afcd56e6030e555bc1c0d3"
	},
	{
		"id": "18c754bee308",
		"ts": "2026-10-09T21:27:06.085Z",
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
		"liquidityUsd": 43756756.31,
		"hash": "18c754bee30845aaf831cece3afcf4aec57720eb68b9fad16d532c5de973aed0"
	},
	{
		"id": "782bdc265b74",
		"ts": "2026-10-09T21:27:06.271Z",
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
		"liquidityUsd": 4766537.73,
		"hash": "782bdc265b7484a03417955ebdb4b4cbb131039f8c25a36f1c28a32336d8c20f"
	},
	{
		"id": "24770b2324d8",
		"ts": "2026-10-09T21:27:06.476Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1206558.48,
		"hash": "24770b2324d808c8e23184334f538db556e91559c38b959496f3f86603111170"
	},
	{
		"id": "67513dc0ae46",
		"ts": "2026-10-09T21:27:06.683Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 43756375.29,
		"hash": "67513dc0ae46378f3c2242b260018f971061c43cc325a86cabf55e30d0eddec1"
	},
	{
		"id": "fa2924524d28",
		"ts": "2026-10-09T21:27:06.933Z",
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
		"liquidityUsd": 800857.62,
		"hash": "fa2924524d28744be8a53589a1f5f0c1f068f030ee622773a8c293a3d257692c"
	},
	{
		"id": "da2587c9f065",
		"ts": "2026-10-09T21:27:07.148Z",
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
		"liquidityUsd": 1900578.34,
		"hash": "da2587c9f0652a5fc8f151e5c17047aae09865e4c6f98743f6d2c1308d43e3bf"
	},
	{
		"id": "62fc4f5c8920",
		"ts": "2026-10-09T21:27:07.370Z",
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
		"liquidityUsd": 5279874.94,
		"hash": "62fc4f5c8920ae9539615bd29061fb3ed15c00119fca8181adb8e77db80c782d"
	},
	{
		"id": "c63933405ad4",
		"ts": "2026-10-09T21:27:07.563Z",
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
		"liquidityUsd": 15259186.63,
		"hash": "c63933405ad495a864d3fd7fb3358b6419ca545e0766439e8175219a44042aa2"
	},
	{
		"id": "1a145a75799f",
		"ts": "2026-10-09T21:27:07.812Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1527909.91,
		"hash": "1a145a75799f2ac61f698b0d03c01bc7d3bf4e6ae878f72882fb5b024eabf99f"
	},
	{
		"id": "14f18e607d07",
		"ts": "2026-10-09T21:27:08.025Z",
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
		"liquidityUsd": 182790.05,
		"hash": "14f18e607d07d4981093c700f785ed2304951af1cb224e0fc848eb46ba14e290"
	},
	{
		"id": "98ac2be28a85",
		"ts": "2026-10-09T21:27:08.234Z",
		"symbol": "whuf",
		"token": "0xeeee77bC7e82c0d4166d52F58239D4c5Bf41eeee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 300763.23,
		"hash": "98ac2be28a85c14beba3a0b6786704c3661ebc3fafb4688cd2b310d3f3f8d7a7"
	},
	{
		"id": "0851adc8e5ec",
		"ts": "2026-10-09T21:27:08.423Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1298363.99,
		"hash": "0851adc8e5ecf72fca584deb300f4ba3892d7514115100c455ceeaa5f95423ce"
	},
	{
		"id": "2cc04bb9829f",
		"ts": "2026-10-09T21:27:08.633Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 150567.25,
		"hash": "2cc04bb9829fbe3f8d8318705cff0200567d483cb61dc212dcd641d54c311a75"
	},
	{
		"id": "7fb2b563d4b8",
		"ts": "2026-10-09T21:27:08.858Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2188210.75,
		"hash": "7fb2b563d4b80a43a7e94c15502bac1c0071090e1a145453acf3e5f1d1edceef"
	},
	{
		"id": "a60a5a611743",
		"ts": "2026-10-09T21:27:09.078Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1140202.69,
		"hash": "a60a5a61174302910b3ffe22fa8323dcf456e93231644e4214c63d0427cf251f"
	},
	{
		"id": "3e67ce339f96",
		"ts": "2026-10-09T21:27:09.296Z",
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
		"liquidityUsd": 3388101.38,
		"hash": "3e67ce339f96e6df022409b7571f7c410616d4fe4827d1f78293d03d39acb163"
	},
	{
		"id": "4f043b1ef46d",
		"ts": "2026-10-09T16:52:40.276Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 147899702.92,
		"hash": "4f043b1ef46d17d498627550427dc7195394e6c2a7280595fc30f970c71151a9"
	},
	{
		"id": "806c80f2fbc1",
		"ts": "2026-10-09T16:52:40.768Z",
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
		"liquidityUsd": 18084645.26,
		"hash": "806c80f2fbc14350d1556d305931309389d81de5cec3f13c2c334d64c68c4a08"
	},
	{
		"id": "bda5256fabed",
		"ts": "2026-10-09T16:52:40.973Z",
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
		"liquidityUsd": 803130.98,
		"hash": "bda5256fabedc2ae8b43d1808338f9f5dba39e8e22dcae839258157437e4620f"
	},
	{
		"id": "234d15380dcc",
		"ts": "2026-10-09T16:52:41.190Z",
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
		"liquidityUsd": 44056684.18,
		"hash": "234d15380dcc283dc55ac0a322578d17514bbf31657f3e02026281db74ec81d4"
	},
	{
		"id": "c135d282af8d",
		"ts": "2026-10-09T16:52:41.394Z",
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
		"liquidityUsd": 4789775.76,
		"hash": "c135d282af8de0a0b857c86e7ea1bd236edaac17ae2cde4be7983f92e4592437"
	},
	{
		"id": "0da777b7dccb",
		"ts": "2026-10-09T16:52:41.626Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1211881.37,
		"hash": "0da777b7dccb3de86ce0c6ed8c9bef26ce348d1c3a5d9b97eaf414d55fac52d9"
	},
	{
		"id": "dc3e33ce4279",
		"ts": "2026-10-09T16:52:41.842Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 44056684.18,
		"hash": "dc3e33ce42791413e989e9b5eb49f585abcc6ad603da5f44f4f121952dde690e"
	},
	{
		"id": "f2db4970abff",
		"ts": "2026-10-09T16:52:42.055Z",
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
		"liquidityUsd": 823840.53,
		"hash": "f2db4970abffac81ddb5f79ff24fdd36e369002c24a84d2719dd1c2b564f4884"
	},
	{
		"id": "639f672e1752",
		"ts": "2026-10-09T16:52:42.323Z",
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
		"liquidityUsd": 1900586.48,
		"hash": "639f672e17523bbb8f217dd6aba32d9d85ac48023aa83d37d8761cba676de1d4"
	},
	{
		"id": "a8f6008fb459",
		"ts": "2026-10-09T16:52:42.531Z",
		"symbol": "whuf",
		"token": "0xeeee77bC7e82c0d4166d52F58239D4c5Bf41eeee",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 311024.12,
		"hash": "a8f6008fb4595fe2caf819994d99e1041556021b45c2775042fa73bf10677cd1"
	},
	{
		"id": "1114998321f2",
		"ts": "2026-10-09T16:52:42.728Z",
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
		"liquidityUsd": 5644856.37,
		"hash": "1114998321f2c23e603e4578fa0a4b1ba940f75331c29f01639aa602fa562435"
	},
	{
		"id": "411adb199db7",
		"ts": "2026-10-09T16:52:42.942Z",
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
		"liquidityUsd": 15507147.26,
		"hash": "411adb199db7cbeba10492b7cc073cd3f4b5507d2b38ff4d13bb47e5a6653bd4"
	},
	{
		"id": "bd625e3a8145",
		"ts": "2026-10-09T16:52:43.130Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1537284.86,
		"hash": "bd625e3a8145d38515bd57b78899bce7e28c2b0313b0e595155dbb71597ff473"
	},
	{
		"id": "683b3029d85f",
		"ts": "2026-10-09T16:52:43.339Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1299123.78,
		"hash": "683b3029d85f964673830c7cd5ed3db248314b64826f2ac5cd7c6d9c963c3804"
	},
	{
		"id": "e55c51cecfdc",
		"ts": "2026-10-09T16:52:43.602Z",
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
		"liquidityUsd": 175848.75,
		"hash": "e55c51cecfdc574983b33b9b31f7291960f95dfd557c4bba301873b748ee6514"
	},
	{
		"id": "3d1eb25cadc1",
		"ts": "2026-10-09T16:52:43.841Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2162954.98,
		"hash": "3d1eb25cadc1fd00b0c4de0a191d042a0199a6fa663645a0b38dcd6bddce3b7e"
	},
	{
		"id": "7f418770e70f",
		"ts": "2026-10-09T16:52:44.019Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3996040.55,
		"hash": "7f418770e70f96831015c2f3d64760372ba6662a3942780df93d635f9b264044"
	},
	{
		"id": "cb75b4c05ab8",
		"ts": "2026-10-09T16:52:44.210Z",
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
		"liquidityUsd": 3392702.91,
		"hash": "cb75b4c05ab83799a148d056b2e12b87d55ebae258c5dac130539bfa9acb0c96"
	},
	{
		"id": "3e0571a9d7c1",
		"ts": "2026-10-09T16:52:44.409Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 359080.94,
		"hash": "3e0571a9d7c1821504718b17b373e16e0c8a0fa9add7ed88d190b1d2893e817b"
	},
	{
		"id": "dff1a45ae33c",
		"ts": "2026-10-09T09:58:05.786Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 147954134.59,
		"hash": "dff1a45ae33cbe1dc3893b267a5ba292a37a7af471fb5ec718b49184384a4dea"
	},
	{
		"id": "8cd100030c7e",
		"ts": "2026-10-09T09:58:06.040Z",
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
		"liquidityUsd": 15989312.07,
		"hash": "8cd100030c7e6ddc851dbd576caec293d5f6c85eaef96ed045bc0bf4c94ec336"
	},
	{
		"id": "2986f4c849fd",
		"ts": "2026-10-09T09:58:06.336Z",
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
		"liquidityUsd": 798089.36,
		"hash": "2986f4c849fd600000e1ecdad8a869535ab02cf0add92fb6e324caac9e0b9290"
	},
	{
		"id": "34e1a0ea65ec",
		"ts": "2026-10-09T09:58:06.586Z",
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
		"liquidityUsd": 44232445.95,
		"hash": "34e1a0ea65eccee8e7053f5d6ebef20f87f51b3631bd05f4ae1d5ea193e77891"
	},
	{
		"id": "1b876aa5a547",
		"ts": "2026-10-09T09:58:06.832Z",
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
		"liquidityUsd": 4812291.1,
		"hash": "1b876aa5a547c3ecbc05dc4e82900eb92a274be257eb0f9cb0dccd5dd520bb4c"
	},
	{
		"id": "5f4055ac9071",
		"ts": "2026-10-09T09:58:07.080Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1213515.42,
		"hash": "5f4055ac907109d9a7ca31957b65a77f008bdd4acfd6346e992010988dd7ff37"
	},
	{
		"id": "69f26bfc156a",
		"ts": "2026-10-09T09:58:07.329Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 143071.32,
		"hash": "69f26bfc156ae931191f1c8f64d06696a4b5228fec2d9b8fe97fb90dae7819d4"
	},
	{
		"id": "346f555c3edf",
		"ts": "2026-10-09T09:58:07.579Z",
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
		"liquidityUsd": 820746.78,
		"hash": "346f555c3edfc9cc6f6cef7ff7b122d800e7a93f48fe98abd232d59e2e78e1f8"
	},
	{
		"id": "f18366d2e319",
		"ts": "2026-10-09T09:58:07.828Z",
		"symbol": "whuf",
		"token": "0xeeee77bC7e82c0d4166d52F58239D4c5Bf41eeee",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 294731.38,
		"hash": "f18366d2e31988d15c62bd80f542ea5dfa61e70b21ea020148720d4085f4acff"
	},
	{
		"id": "45838d5816cf",
		"ts": "2026-10-09T09:58:08.076Z",
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
		"liquidityUsd": 15762575.2,
		"hash": "45838d5816cfb661d1771943f83f04855fb9b63a32fc7f725c1f3dc4a07f738b"
	},
	{
		"id": "323603548b3d",
		"ts": "2026-10-09T09:58:08.308Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 1862337.79,
		"hash": "323603548b3dbdb5e04d3edf0d1dd77342b6fe20f0f91cffbe8af84dbf6387ea"
	},
	{
		"id": "47d4d4df78b2",
		"ts": "2026-10-09T09:58:08.538Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1500860.99,
		"hash": "47d4d4df78b216de8c21a90f3b769ca136646add7a885d5aa3a645b460c04d9c"
	},
	{
		"id": "49f9ee3909a0",
		"ts": "2026-10-09T09:58:08.769Z",
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
		"liquidityUsd": 5477861.28,
		"hash": "49f9ee3909a07cd8397936c29eee40215cd3c62743a2faacd3e734a3fad446fe"
	},
	{
		"id": "9612ffd70f99",
		"ts": "2026-10-09T09:58:08.999Z",
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
		"liquidityUsd": 173638.66,
		"hash": "9612ffd70f99186654ac933e8c14b55c5df259c100a33bc9112ed19d7617048d"
	},
	{
		"id": "9413ef721492",
		"ts": "2026-10-09T09:58:09.229Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2221169.04,
		"hash": "9413ef7214927a570b10e1bab504bf4ec661aee136fe1856de5dd7e1035d164c"
	},
	{
		"id": "0f281c16ecbc",
		"ts": "2026-10-09T09:58:09.461Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1226098.05,
		"hash": "0f281c16ecbc7f971cf1336382674a6b6ee0a1940f77203b16e72e16b5af134e"
	},
	{
		"id": "08a6b1ba8db6",
		"ts": "2026-10-09T09:58:09.691Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3977279.17,
		"hash": "08a6b1ba8db619794423e6b42ac52a676846ebcbbc240235988f645ef7ff82f1"
	},
	{
		"id": "c6dca406e1c9",
		"ts": "2026-10-09T09:58:09.921Z",
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
		"liquidityUsd": 343590.74,
		"hash": "c6dca406e1c90c8ae83ebe1f7d4b463689d35495e7d9ceed982cfd9a975c4e3c"
	},
	{
		"id": "22f4f3e4cb30",
		"ts": "2026-10-09T09:58:10.151Z",
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
		"liquidityUsd": 3391327.83,
		"hash": "22f4f3e4cb30f65283a01995c8eb0afbba2b4cb9565d23459c83e1dd01009fe8"
	},
	{
		"id": "9c0feb84bf9e",
		"ts": "2026-10-09T02:43:46.191Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146931648.16,
		"hash": "9c0feb84bf9ed2f12b5aab7fb12021a502edcc30135674a275568ac5b646f85b"
	},
	{
		"id": "5cce214a56b9",
		"ts": "2026-10-09T02:43:46.462Z",
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
		"liquidityUsd": 15948588.5,
		"hash": "5cce214a56b9e9845769b5286345cbfc2a9ed583b48024d366b59eb7e67c1ede"
	},
	{
		"id": "45577929cdef",
		"ts": "2026-10-09T02:43:46.716Z",
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
		"liquidityUsd": 787331.17,
		"hash": "45577929cdef076180ff7ada4b49685ebeafdc811813cc3bb57fa3974db18304"
	},
	{
		"id": "a861f33d381f",
		"ts": "2026-10-09T02:43:46.977Z",
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
		"liquidityUsd": 45058486.97,
		"hash": "a861f33d381f0cb7f5fb5bc92c44db49c3ab83761ac11ff19b4ed8e6bd0d2112"
	},
	{
		"id": "92e6637da94d",
		"ts": "2026-10-09T02:43:47.416Z",
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
		"liquidityUsd": 4761450.36,
		"hash": "92e6637da94d93e428ad46c5438c93ec04e152e7f941496cc56bcbcaf04f3bf9"
	},
	{
		"id": "9aa56b989ea9",
		"ts": "2026-10-09T02:43:47.655Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1204571.65,
		"hash": "9aa56b989ea92bfa0fb52c0166d6c40c34c47d1e88b488df3064a905cf8edd04"
	},
	{
		"id": "7d6e6daaf810",
		"ts": "2026-10-09T02:43:47.899Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 143070.73,
		"hash": "7d6e6daaf810d704cf0a914ba013b713e648027db3f8dc47d0d4b0226809f677"
	},
	{
		"id": "9e5a76351b4e",
		"ts": "2026-10-09T02:43:48.152Z",
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
		"liquidityUsd": 757287.81,
		"hash": "9e5a76351b4e7baa3dbd62d94f28133c977c07e15e55694adcd9a2d0e87c8c4f"
	},
	{
		"id": "a99881a805bb",
		"ts": "2026-10-09T02:43:48.405Z",
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
		"liquidityUsd": 15681042.32,
		"hash": "a99881a805bb4092f895149e77d534f7aaf2489e6313168e58de1aa6f00810e3"
	},
	{
		"id": "064ae193d743",
		"ts": "2026-10-09T02:43:48.661Z",
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
		"liquidityUsd": 1761986,
		"hash": "064ae193d743505eb7e0a1de62bf9d87383efba89040f678ec3a6aba26ee5989"
	},
	{
		"id": "0c0512b55ebd",
		"ts": "2026-10-09T02:43:48.879Z",
		"symbol": "whuf",
		"token": "0xeeee77bC7e82c0d4166d52F58239D4c5Bf41eeee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 235246.85,
		"hash": "0c0512b55ebd1c910f792858c00bea10724af78c13659e218d447ce3764fab41"
	},
	{
		"id": "63bf3cb859db",
		"ts": "2026-10-09T02:43:49.106Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1477929.17,
		"hash": "63bf3cb859dbf788d68c2a0f06bfd0360bcdfce9527d45e1029571fcdf08aacd"
	},
	{
		"id": "2858da3f8553",
		"ts": "2026-10-09T02:43:49.327Z",
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
		"liquidityUsd": 173184.23,
		"hash": "2858da3f85535c66384e9c2db61f333a9e341b1d1e74193163eac85e687aa1f9"
	},
	{
		"id": "017e8290513e",
		"ts": "2026-10-09T02:43:49.556Z",
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
		"liquidityUsd": 5560780.07,
		"hash": "017e8290513ede41d61ee9dd5a55420fed07e7455ffbe2504acbeca7aef5d579"
	},
	{
		"id": "cce043292a15",
		"ts": "2026-10-09T02:43:49.793Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1202076.33,
		"hash": "cce043292a150008694d77b31ec5cb7e3ca6d8777e36327e28da78a5024439b6"
	},
	{
		"id": "acb5e69912e8",
		"ts": "2026-10-09T02:43:50.025Z",
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
		"liquidityUsd": 340477.8,
		"hash": "acb5e69912e85baee8946b48dff093f25bbc953fc0c05f36066afe8d97b100ff"
	},
	{
		"id": "21425fc72700",
		"ts": "2026-10-09T02:43:50.241Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2253525.88,
		"hash": "21425fc72700f55818abe6f724fccffb9813a81b96a7f94fd42b1174b9352931"
	},
	{
		"id": "bb704d2a1293",
		"ts": "2026-10-09T02:43:50.465Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3913612.26,
		"hash": "bb704d2a1293c7b2938e7bbe4679138ccddb27a00ef568cfad1af4ed18f1b070"
	},
	{
		"id": "9140dec20b9e",
		"ts": "2026-10-09T02:43:50.689Z",
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
		"liquidityUsd": 3319550.84,
		"hash": "9140dec20b9e3d551f0d20207ed63b166ce70d13a30f5da86d84e0a914e52de5"
	},
	{
		"id": "6b929062809e",
		"ts": "2026-10-08T22:49:34.025Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146809348.7,
		"hash": "6b929062809ebef180307664b3f405a393030e6e661a84a22c081ac277fa4f58"
	},
	{
		"id": "6b6f8a31cef0",
		"ts": "2026-10-08T22:49:34.268Z",
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
		"liquidityUsd": 15727209.21,
		"hash": "6b6f8a31cef0a9a8ecf118d940b82afa2463f6274507b614f0210ffe5608b2a6"
	},
	{
		"id": "5935858c9b87",
		"ts": "2026-10-08T22:49:34.531Z",
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
		"liquidityUsd": 787331.17,
		"hash": "5935858c9b87c694c10094fade89e519f542214b6a61cf17f610b92c0e453278"
	},
	{
		"id": "08da6928b35f",
		"ts": "2026-10-08T22:49:34.785Z",
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
		"liquidityUsd": 44513672.15,
		"hash": "08da6928b35f8aaaa019470b51b104bbf52f03c9197b0182a79fb96e7efb61cb"
	},
	{
		"id": "5ca0a7efd00f",
		"ts": "2026-10-08T22:49:35.037Z",
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
		"liquidityUsd": 4751785.26,
		"hash": "5ca0a7efd00f443a0e0da6198eba0251402639337f4718a9e627bab8bee44e08"
	},
	{
		"id": "417fa022df9e",
		"ts": "2026-10-08T22:49:35.276Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1197650.05,
		"hash": "417fa022df9ecb35d1c5af77102061334adb5e8beae5674c3b4c639319a98827"
	},
	{
		"id": "ee8e66d7c08d",
		"ts": "2026-10-08T22:49:35.534Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 143078.15,
		"hash": "ee8e66d7c08d17052ee5407175a73d6e33f5511e717f3c31ec800dd739f39831"
	},
	{
		"id": "c705f4696b6d",
		"ts": "2026-10-08T22:49:35.791Z",
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
		"liquidityUsd": 754087.32,
		"hash": "c705f4696b6d19e011d1a331e5326a73fafde1a526ec91b0df24281464885c7b"
	},
	{
		"id": "dbd31a48abef",
		"ts": "2026-10-08T22:49:36.046Z",
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
		"liquidityUsd": 1806506.69,
		"hash": "dbd31a48abefc632fb8938ebc9b78def4607f53442c2a8bb6aef815e72aa0d76"
	},
	{
		"id": "74bd2812b286",
		"ts": "2026-10-08T22:49:36.287Z",
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
		"liquidityUsd": 15759884.47,
		"hash": "74bd2812b286b210654f8bb6820eac6425db6c5d3d43002086dabdce9681af50"
	},
	{
		"id": "0355e827510c",
		"ts": "2026-10-08T22:49:36.531Z",
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
		"liquidityUsd": 153196.3,
		"hash": "0355e827510c8fe789f54157b7a18586e0d8442588ef1e751b9c85d98f7e74ea"
	},
	{
		"id": "85adf39432eb",
		"ts": "2026-10-08T22:49:36.765Z",
		"symbol": "whuf",
		"token": "0xeeee77bC7e82c0d4166d52F58239D4c5Bf41eeee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 233466.15,
		"hash": "85adf39432eb84aae7828ddfa75017c742f5456bade5d6ba52793268191f99f2"
	},
	{
		"id": "6ed78f208a9d",
		"ts": "2026-10-08T22:49:37.001Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1494153.66,
		"hash": "6ed78f208a9d999455b99eec72c8c1e6011a810c8224feb89b75385a240ebd8b"
	},
	{
		"id": "8bdf626b007d",
		"ts": "2026-10-08T22:49:37.226Z",
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
		"liquidityUsd": 342115.1,
		"hash": "8bdf626b007d303de2c84c16dede96401813c6a9d1b164cdc845b7d334e7efbe"
	},
	{
		"id": "1ad95acc390d",
		"ts": "2026-10-08T22:49:37.465Z",
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
		"liquidityUsd": 5426362.38,
		"hash": "1ad95acc390dd38b1cb37ddc57e8a965c2caaa6a7d019e912ff802709e7d6b20"
	},
	{
		"id": "f959e6a74ea6",
		"ts": "2026-10-08T22:49:37.703Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1189527,
		"hash": "f959e6a74ea6b5cb9b86af275dcf62aecf4df7f92deb21cc1e635a0965473e45"
	},
	{
		"id": "77dd9af66e76",
		"ts": "2026-10-08T22:49:37.998Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2252892.1,
		"hash": "77dd9af66e769d2ec9db4cb900a5721f152ae3b489e919438b4e9e199db6091c"
	},
	{
		"id": "9227557ffd70",
		"ts": "2026-10-08T22:49:38.219Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 522688.59,
		"hash": "9227557ffd7077deae8e8350b0b4bfbee9fdc197416f9b88ee41c2508f8a2f71"
	},
	{
		"id": "cd52ab3f7d15",
		"ts": "2026-10-08T22:49:38.461Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 1163375.43,
		"hash": "cd52ab3f7d156455cc03db021aad5ebf2bc80320c58522c8d21efd0b6782cd37"
	},
	{
		"id": "b42443b1efb2",
		"ts": "2026-10-08T17:09:36.631Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 145218644.1,
		"hash": "b42443b1efb2c5c926667e880405418b2fe970072ea9e11a95ea97e456cb7a2c"
	},
	{
		"id": "764a81137c38",
		"ts": "2026-10-08T17:09:37.259Z",
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
		"liquidityUsd": 14975579.08,
		"hash": "764a81137c38170e57a2d0443a4d1008492ba653d331715d23dea5c73da1cf52"
	},
	{
		"id": "2f7019a8f3d4",
		"ts": "2026-10-08T17:09:37.541Z",
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
		"liquidityUsd": 778950.27,
		"hash": "2f7019a8f3d41310941cc13b4d43cc0fcd6b977e56c4432776f0913e068a51df"
	},
	{
		"id": "bebc418cd17d",
		"ts": "2026-10-08T17:09:37.793Z",
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
		"liquidityUsd": 43485571.56,
		"hash": "bebc418cd17dcefb2678151572c4635eb8030f8587c811a94ae49e5fbfa14f18"
	},
	{
		"id": "2069b6b48a83",
		"ts": "2026-10-08T17:09:38.139Z",
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
		"liquidityUsd": 4653924.81,
		"hash": "2069b6b48a8364d47a50cf833374f62dfd306eec1c4439d01f30759daa95678d"
	},
	{
		"id": "da48563389e1",
		"ts": "2026-10-08T17:09:38.417Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1166243.77,
		"hash": "da48563389e15320388a5943997a584727cb981e74cae1dfe83b9f4c8a36d233"
	},
	{
		"id": "4765e6de3d67",
		"ts": "2026-10-08T17:09:38.622Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 143079.13,
		"hash": "4765e6de3d671f4d21ec1975f4749f6245660ed4f27e5c890fd9642fb8b711c7"
	},
	{
		"id": "b0cbbab57f76",
		"ts": "2026-10-08T17:09:38.940Z",
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
		"liquidityUsd": 2217675.54,
		"hash": "b0cbbab57f768824842ac1193722168d49d202b18bf005c5e5eebbaab543b138"
	},
	{
		"id": "b6df1f72f044",
		"ts": "2026-10-08T17:09:39.166Z",
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
		"liquidityUsd": 1726471.68,
		"hash": "b6df1f72f04435eea4dc407e97f20571c47b9e038671d6ba2b3790384bd9d538"
	},
	{
		"id": "2c54b52b5104",
		"ts": "2026-10-08T17:09:39.559Z",
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
		"liquidityUsd": 1220551.8,
		"hash": "2c54b52b510431965e5f84f7307fd2e37b4d9090507c18c6f805dd6e5b5a8a02"
	},
	{
		"id": "13f64f2d0d7f",
		"ts": "2026-10-08T17:09:39.777Z",
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
		"liquidityUsd": 15245347.88,
		"hash": "13f64f2d0d7f5b4826b297099076bf149815f30d47adb17cf65fd4f6df562656"
	},
	{
		"id": "016ff36d9121",
		"ts": "2026-10-08T17:09:40.007Z",
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
		"liquidityUsd": 146418.29,
		"hash": "016ff36d91210068e1fd7936bc2573b332f8f9f0fd1f9ab319cb843d1de65cd1"
	},
	{
		"id": "b68d35fd3f94",
		"ts": "2026-10-08T17:09:40.205Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1437745.67,
		"hash": "b68d35fd3f94d5e88f8baeb6bf355af331b79190870170850cb421571b937658"
	},
	{
		"id": "553c15fc24c6",
		"ts": "2026-10-08T17:09:40.394Z",
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
		"liquidityUsd": 5052728.08,
		"hash": "553c15fc24c6573daed22d55ec55d43c06b28039b24ba9860fae77d7c0c1f85f"
	},
	{
		"id": "e69e49f81a34",
		"ts": "2026-10-08T17:09:40.612Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1186775.35,
		"hash": "e69e49f81a34dba069a3dd4477736fac28c6621a96b40188a1cb4dd60a83f119"
	},
	{
		"id": "f7174b2fea59",
		"ts": "2026-10-08T17:09:40.807Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 477720.86,
		"hash": "f7174b2fea59678ae90feccf3d754112b18bc2b581b5b7fe30f915a5f413c2cf"
	},
	{
		"id": "a75a9a1bdc39",
		"ts": "2026-10-08T17:09:41.027Z",
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
		"liquidityUsd": 331565.77,
		"hash": "a75a9a1bdc39eeac1f1bbe8715181c235bb67b14e20588f7aafba8dca4e6c4cf"
	},
	{
		"id": "0cc3498658f0",
		"ts": "2026-10-08T17:09:41.223Z",
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
		"liquidityUsd": 3239366.5,
		"hash": "0cc3498658f07dcf68350b6e015120dbd178464b18a0e2c05c0c785dad2d39b4"
	},
	{
		"id": "84c978a220c8",
		"ts": "2026-10-08T17:09:41.427Z",
		"symbol": "1F916",
		"token": "0x9E00FC92493451EBA1c63DD3880D68b622037bA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 344743.51,
		"hash": "84c978a220c8d5982b6c59719d10104da6399009eed863e5a53977243b73ee57"
	},
	{
		"id": "cb00c032fb60",
		"ts": "2026-10-08T09:54:02.788Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156442772.5,
		"hash": "cb00c032fb60cf858a7758456117c48e36d78cd6f6f2b8c06f23146746b79afe"
	},
	{
		"id": "3ca446f405b9",
		"ts": "2026-10-08T09:54:03.289Z",
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
		"liquidityUsd": 15839110.51,
		"hash": "3ca446f405b90c27a730e264c79241d04843f93d9f89c709d8c7b3d5908cfb95"
	},
	{
		"id": "95fef88ec64f",
		"ts": "2026-10-08T09:54:03.535Z",
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
		"liquidityUsd": 816770.98,
		"hash": "95fef88ec64fcc0c9f4c7f2a55180f89960bbbd2750e8e04035938e3452ecada"
	},
	{
		"id": "6a52a782a1f6",
		"ts": "2026-10-08T09:54:04.006Z",
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
		"liquidityUsd": 43300980.08,
		"hash": "6a52a782a1f6b8083ba6a82ff2d618e4d1e372836c5cccb9b21cd1e9d83eb506"
	},
	{
		"id": "fb0d4dc39588",
		"ts": "2026-10-08T09:54:04.272Z",
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
		"liquidityUsd": 4457474.91,
		"hash": "fb0d4dc39588e8b821bc5ff98724fe43600df0cf37c246d24d1931c448e50ff7"
	},
	{
		"id": "1c6f0cbc9112",
		"ts": "2026-10-08T09:54:04.512Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1243379.73,
		"hash": "1c6f0cbc9112488d5fe5e0ff26512e329383c8d063a60b9219c107b29ee8a8eb"
	},
	{
		"id": "37e59e2a3563",
		"ts": "2026-10-08T09:54:04.756Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 143071.45,
		"hash": "37e59e2a3563ea3aac2612596108e058c6db2b22df85c69db9f3d56ef1659204"
	},
	{
		"id": "e92449353a8b",
		"ts": "2026-10-08T09:54:04.996Z",
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
		"liquidityUsd": 661358.56,
		"hash": "e92449353a8b20e75a6b2b44b72a000788b700fec91033824d6fc6fa3ba8612f"
	},
	{
		"id": "5ca398f1581e",
		"ts": "2026-10-08T09:54:05.236Z",
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
		"liquidityUsd": 1840461.18,
		"hash": "5ca398f1581e99577c314e5fead4d5c02487f1c8f65765d336778e175a15b51a"
	},
	{
		"id": "2fc721789d91",
		"ts": "2026-10-08T09:54:05.482Z",
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
		"liquidityUsd": 1088187.88,
		"hash": "2fc721789d912417731e4a565001683efdffa93a7a9a59a2af62a0ae93fc319e"
	},
	{
		"id": "8178a2301306",
		"ts": "2026-10-08T09:54:05.706Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 151426.26,
		"hash": "8178a23013062485d556dbeb57f507ab1a1865aa08c51b5185093de96b8eb400"
	},
	{
		"id": "1995c6043db3",
		"ts": "2026-10-08T09:54:05.932Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1245686.07,
		"hash": "1995c6043db33a5871c3b1fc96b29259a58fc5c0a074fef59b88a6d8afbb4fae"
	},
	{
		"id": "0740369176c9",
		"ts": "2026-10-08T09:54:06.155Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1550774.97,
		"hash": "0740369176c9f3678b5492a45fc219e477bdd6d6dc56835fb09fc6bb9aa247c6"
	},
	{
		"id": "273996aaae35",
		"ts": "2026-10-08T09:54:06.381Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 16661659.84,
		"hash": "273996aaae35fa9b55e158b70df2d9c230d16e07499e12906a9edd620324c080"
	},
	{
		"id": "ff7dd3d47272",
		"ts": "2026-10-08T09:54:06.602Z",
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
		"liquidityUsd": 1015770.47,
		"hash": "ff7dd3d4727225a8778fc3a4774e3f38ae8205ae48a1345166d86a2fdfa275cc"
	},
	{
		"id": "e96c578169c4",
		"ts": "2026-10-08T09:54:06.826Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3527627.82,
		"hash": "e96c578169c469e5cc0923ada8345790e790408d90b230d72528eecba45ad4e3"
	},
	{
		"id": "077f5a00dd21",
		"ts": "2026-10-08T09:54:07.048Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 534039.84,
		"hash": "077f5a00dd2170e21480343d216a8487b5392ca5dc4bf3449a5b059869034ff9"
	},
	{
		"id": "686b9d6cd1b9",
		"ts": "2026-10-08T09:54:07.268Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 212390.92,
		"hash": "686b9d6cd1b9e6f7182c1b1f9710215ecce23bdf372e94f242e9b408f88d0d9d"
	},
	{
		"id": "5661d5ea0078",
		"ts": "2026-10-08T09:54:07.491Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1044163.15,
		"hash": "5661d5ea00783c37e9d9c7a3951510ec648630ebe5083464fa22a9f48bfd2efc"
	},
	{
		"id": "c57a44009bd0",
		"ts": "2026-10-08T02:26:53.790Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156848860.03,
		"hash": "c57a44009bd06378994f6cdd8ac04e27b6bd208503a0fbbe3e9c3cc539eddfb5"
	},
	{
		"id": "884a2a4e4be8",
		"ts": "2026-10-08T02:26:54.173Z",
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
		"liquidityUsd": 15432744.77,
		"hash": "884a2a4e4be8e3bd198e693e9db1f47a5e96da40fceec56e6e58e909e2780b9b"
	},
	{
		"id": "3d7507aec4be",
		"ts": "2026-10-08T02:26:54.382Z",
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
		"liquidityUsd": 823028.3,
		"hash": "3d7507aec4bece33f798434e02e67420157a4381b2a89696cce4db6cdb12ce7f"
	},
	{
		"id": "62b1bca5e63b",
		"ts": "2026-10-08T02:26:54.601Z",
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
		"liquidityUsd": 43819089.43,
		"hash": "62b1bca5e63b5d920da459109cddb1a836ef4dec605abf16aca9383e1b6a65d7"
	},
	{
		"id": "69b5dc9a62ee",
		"ts": "2026-10-08T02:26:54.811Z",
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
		"liquidityUsd": 4422947.44,
		"hash": "69b5dc9a62ee430b8fd861cc577d11c5896de7212869391fd01f1a6a8aca6b67"
	},
	{
		"id": "89f1bc9b3df1",
		"ts": "2026-10-08T02:26:55.021Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1255490.72,
		"hash": "89f1bc9b3df13806146891f18472e31622b0d17ee3c9478c4cb1851b2c81564a"
	},
	{
		"id": "a39590ca255d",
		"ts": "2026-10-08T02:26:55.227Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 143053.37,
		"hash": "a39590ca255d9cf7d6a217eb535f42eff0d3c05da506577dd6da2047097d324e"
	},
	{
		"id": "70fd267963ad",
		"ts": "2026-10-08T02:26:55.456Z",
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
		"liquidityUsd": 691119.16,
		"hash": "70fd267963adf3244e12eef5e6359d92757b8cc378d058ed9edec0b2fdf9c354"
	},
	{
		"id": "730feb2b7e52",
		"ts": "2026-10-08T02:26:55.663Z",
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
		"liquidityUsd": 1764308.73,
		"hash": "730feb2b7e526d83675a1ce96ceeaebcf200ed6cd91fe0bfab2972048a59a1c0"
	},
	{
		"id": "3644cfec56e3",
		"ts": "2026-10-08T02:26:55.890Z",
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
		"liquidityUsd": 1169576.95,
		"hash": "3644cfec56e3fb1b078f19af409bdf9e00132fd0970a232c26a0b9a054f46286"
	}
]
