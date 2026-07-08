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
	"updatedAt": "2026-07-08T13:55:02.989Z",
	"tokensScored": 2082,
	"verdictsIssued": 2082,
	"safe": 1826,
	"risky": 199,
	"likelyRug": 57,
	"ticks": 135
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "52b08bbb4d44",
		"ts": "2026-07-08T13:54:58.638Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 101828549.21,
		"hash": "52b08bbb4d4455017e0d1a831e03150668cb91e2b9cdf68d3adc3391963c9734"
	},
	{
		"id": "1d90c4f063fe",
		"ts": "2026-07-08T13:54:59.081Z",
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
		"liquidityUsd": 15660005.44,
		"hash": "1d90c4f063fe6b76f0c3de3ba9c421f7aff03e97d0cdd88fed94c9ee392608c5"
	},
	{
		"id": "549145914be1",
		"ts": "2026-07-08T13:54:59.328Z",
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
		"liquidityUsd": 1348975.01,
		"hash": "549145914be121420175c29bf8440d8995faf13f0bbfc701dad083025812c0e3"
	},
	{
		"id": "bf90b7879fb2",
		"ts": "2026-07-08T13:54:59.575Z",
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
		"liquidityUsd": 33045156.23,
		"hash": "bf90b7879fb2046e32928cffb435ab646273b95823fdf8e70695e0f2c5bb9e9b"
	},
	{
		"id": "a2b10dea83d5",
		"ts": "2026-07-08T13:54:59.820Z",
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
		"liquidityUsd": 3885419.23,
		"hash": "a2b10dea83d5f05ddee399b96256d745f628832a1c1d90256e77432d9886e283"
	},
	{
		"id": "77dc658ab8ba",
		"ts": "2026-07-08T13:55:00.066Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 953251.41,
		"hash": "77dc658ab8bafb012c55828b772c77af4489e45f962ce855fc44b5baa20f456e"
	},
	{
		"id": "93c212eceaed",
		"ts": "2026-07-08T13:55:00.307Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33045156.23,
		"hash": "93c212eceaed934a8d91948896a716cd94f2c62a722098239e105e7cd9c93ff7"
	},
	{
		"id": "a114d433a00f",
		"ts": "2026-07-08T13:55:00.579Z",
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
		"liquidityUsd": 2609070.38,
		"hash": "a114d433a00f7c001a0c94f5d500d48bddea9a94255bf88bdbba2f06f2454cb7"
	},
	{
		"id": "f3d730123ed1",
		"ts": "2026-07-08T13:55:00.821Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 55497.89,
		"hash": "f3d730123ed1c79eb932539909709dfd5d03a55a2ef1bede80218ba902212e83"
	},
	{
		"id": "e162b98daa9f",
		"ts": "2026-07-08T13:55:01.065Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 382591.27,
		"hash": "e162b98daa9f061af66bb58e7cb9870062ec5fd89451e765d008248641c02f67"
	},
	{
		"id": "4bf36744e793",
		"ts": "2026-07-08T13:55:01.307Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 955198,
		"hash": "4bf36744e7938139a828e5fb7fbc5df9a39b93eb84dcdab89a6b3f35f9dbbb26"
	},
	{
		"id": "5a17e009b089",
		"ts": "2026-07-08T13:55:01.550Z",
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
		"liquidityUsd": 4908135.31,
		"hash": "5a17e009b089d41e69ca8e71e59a1dd2b434b3c3e40cbf5378334c4ce7154352"
	},
	{
		"id": "f7b3e9f8cc59",
		"ts": "2026-07-08T13:55:01.795Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3146279.36,
		"hash": "f7b3e9f8cc598e3b92302d162acc5c9fe7f43278ed30aab206f109d74e2658a0"
	},
	{
		"id": "85ce6cc1e0a9",
		"ts": "2026-07-08T13:55:02.041Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1886531.29,
		"hash": "85ce6cc1e0a9ef44d28e816d84b99beaad690984ab7fad3ec430200bcef68a1b"
	},
	{
		"id": "f5f69ebde114",
		"ts": "2026-07-08T13:55:02.288Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4476879.06,
		"hash": "f5f69ebde1147e0bfc5372427034f5cceaa8d94624abc9546c7f42bf701d7cb4"
	},
	{
		"id": "a97a3f8cb1d9",
		"ts": "2026-07-08T13:55:02.534Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1560524.33,
		"hash": "a97a3f8cb1d914ea55c482280a77f91ee495b20fe7a490f0a6f468b4f4605ebd"
	},
	{
		"id": "2a7f4948e5e1",
		"ts": "2026-07-08T13:55:02.762Z",
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
		"liquidityUsd": 1318237.3,
		"hash": "2a7f4948e5e1ec1c95c4f765f8e61ff12541e25832631e45ffdada72b5534a62"
	},
	{
		"id": "cb64688ea783",
		"ts": "2026-07-08T13:55:02.989Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 259317.37,
		"hash": "cb64688ea783b1052b1f1baa41ffeb0a54bbb7c830c14ef4ed007292ec291b27"
	},
	{
		"id": "99eb1247c4ef",
		"ts": "2026-07-08T11:44:46.723Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 101829028.01,
		"hash": "99eb1247c4ef9d1bd1486cd6746c68844e13c76cbac316a4cb7e56b88301bbcc"
	},
	{
		"id": "b4e7c7fc68d2",
		"ts": "2026-07-08T11:44:47.441Z",
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
		"liquidityUsd": 15949100.13,
		"hash": "b4e7c7fc68d224397ca4e170daca09182350d0c5f88b2d6c49abbbcdb34bd56f"
	},
	{
		"id": "79561cad9d41",
		"ts": "2026-07-08T11:44:47.920Z",
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
		"liquidityUsd": 1347106.25,
		"hash": "79561cad9d41a4123e4a2087bb9f5d198252cf98d5104ba906ac6302aabec109"
	},
	{
		"id": "38850021ef4e",
		"ts": "2026-07-08T11:44:48.404Z",
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
		"liquidityUsd": 32465561.23,
		"hash": "38850021ef4e1eed5d67402d7642dab167127c5f60f50ab9866a63baa9ef1c7b"
	},
	{
		"id": "06ba362c4195",
		"ts": "2026-07-08T11:44:48.882Z",
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
		"liquidityUsd": 3908844.48,
		"hash": "06ba362c4195804debad3a80cb9b3a1526b9fe6f2e267f18509511241517effc"
	},
	{
		"id": "54f9cf73a744",
		"ts": "2026-07-08T11:44:49.138Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 953370.22,
		"hash": "54f9cf73a7444aa643a96b3ceee5d02cdc404387fcc112f1b8bcb1c3c642c333"
	},
	{
		"id": "484cc658cad9",
		"ts": "2026-07-08T11:44:49.393Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 32472796.81,
		"hash": "484cc658cad9a79c01f7c73323b1aa622f51224d4c7a28004e0d1ffbcf511864"
	},
	{
		"id": "18cc3c673302",
		"ts": "2026-07-08T11:44:49.650Z",
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
		"liquidityUsd": 2640135.32,
		"hash": "18cc3c673302439fffffd88e0bb7ded18491176c469a12fb0707783c13589d99"
	},
	{
		"id": "1d65b82dee6f",
		"ts": "2026-07-08T11:44:50.126Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 57373.1,
		"hash": "1d65b82dee6f9edb59d865aef0ede9f702ab4a374878981be21e969d6b1f6b41"
	},
	{
		"id": "5568c59358a2",
		"ts": "2026-07-08T11:44:50.384Z",
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
		"liquidityUsd": 4905872.45,
		"hash": "5568c59358a2e4cff92a3c0e51babface75041bbd4ab67e0e8e139e53f9d18e9"
	},
	{
		"id": "010ec85ac847",
		"ts": "2026-07-08T11:44:50.626Z",
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
		"liquidityUsd": 920569.53,
		"hash": "010ec85ac8472c341c9d60a388565f692f536d53f987b4f4fd970766e432ee7d"
	},
	{
		"id": "5b9d9283926c",
		"ts": "2026-07-08T11:44:50.864Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 378480.47,
		"hash": "5b9d9283926c5a4e36b336f857bc91263ff8385d6219d454c05d101a47f80d08"
	},
	{
		"id": "1ec31286d4a3",
		"ts": "2026-07-08T11:44:51.106Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3049853.06,
		"hash": "1ec31286d4a30073401b6267a43b6670d78c47b883b849574c471148713609c7"
	},
	{
		"id": "fe453411753b",
		"ts": "2026-07-08T11:44:51.347Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1868952.05,
		"hash": "fe453411753b7cfc43c05628bfb5c1a5d0d82d6bf5944576bab5b8e4a00b88a0"
	},
	{
		"id": "007949bdd335",
		"ts": "2026-07-08T11:44:51.587Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1608433.08,
		"hash": "007949bdd335bdd210be6f179475d9600a7e9ff8cca1c5ea9e4a10525faf600c"
	},
	{
		"id": "71444e11ea38",
		"ts": "2026-07-08T11:44:51.830Z",
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
		"liquidityUsd": 1245799.35,
		"hash": "71444e11ea385b9e28726f2f1d4ebd1dcd8e43badf0eff32c0c681cd48614828"
	},
	{
		"id": "1347fb3a4cc3",
		"ts": "2026-07-08T11:44:52.680Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4481033.87,
		"hash": "1347fb3a4cc3bcae7aa08a767c15446f17a4ce6ae7a54b66068f554880f81e9b"
	},
	{
		"id": "b25c779c4365",
		"ts": "2026-07-08T11:44:52.918Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7262008.12,
		"hash": "b25c779c436570648ccdc7ef6fd21957b74b663906d52d875a10d6e2da158294"
	},
	{
		"id": "daad8771a740",
		"ts": "2026-07-08T09:24:01.001Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 101703866.2,
		"hash": "daad8771a740a1b4671cebcda8f8a0a5d7a1d03a87bd051d9e23ce066041fac1"
	},
	{
		"id": "428e91185f65",
		"ts": "2026-07-08T09:24:01.576Z",
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
		"liquidityUsd": 15750187.85,
		"hash": "428e91185f65fe7ca859bec2b29da230b3bed2551ecbc3a7ffbc22c879d9e958"
	},
	{
		"id": "b1e6371265d1",
		"ts": "2026-07-08T09:24:01.819Z",
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
		"liquidityUsd": 1358383.69,
		"hash": "b1e6371265d1fbe71664747ebf34d46be2695b759ce15b7968f715b4a2f7d838"
	},
	{
		"id": "9909dfbf730f",
		"ts": "2026-07-08T09:24:02.066Z",
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
		"liquidityUsd": 33287219.69,
		"hash": "9909dfbf730f9cbc715aac1c4ec88e591055be0b948c887d7c18d132ff029084"
	},
	{
		"id": "6ac3b332c846",
		"ts": "2026-07-08T09:24:02.309Z",
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
		"liquidityUsd": 3905531.26,
		"hash": "6ac3b332c84642210c1b1a0d22e0176eaeacd7e4077472722695205df344db1e"
	},
	{
		"id": "6c223413085a",
		"ts": "2026-07-08T09:24:02.552Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 967813.39,
		"hash": "6c223413085acbc38789373f89b60297576a260ea9b736f673c6957be4263deb"
	},
	{
		"id": "70e2b6fb5fa0",
		"ts": "2026-07-08T09:24:02.796Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33287219.69,
		"hash": "70e2b6fb5fa0f14bae88b5b40a209f5d34d4559d5e1d50308b1347f6d9417ec6"
	},
	{
		"id": "4feac1b5f96e",
		"ts": "2026-07-08T09:24:03.052Z",
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
		"liquidityUsd": 2453407.23,
		"hash": "4feac1b5f96eabbc007d6ffee78d6c0107f20f3f25d5ee5a6052766b38438030"
	},
	{
		"id": "a9b3f20f469e",
		"ts": "2026-07-08T09:24:03.295Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 50861.13,
		"hash": "a9b3f20f469e4fc24b76e77f929ea8179041efcc863c5c2b9f2cc060ef39e047"
	},
	{
		"id": "79202d7dbb63",
		"ts": "2026-07-08T09:24:03.536Z",
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
		"liquidityUsd": 4773887.76,
		"hash": "79202d7dbb631e628030c376b7f519d6bb10f1ff6e046c9ee29e27748d5ece2a"
	},
	{
		"id": "44d52c683423",
		"ts": "2026-07-08T09:24:03.763Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1846331.6,
		"hash": "44d52c6834232e43ff542907048e4f32f70ec58655f39c337804f1fd3f7926a5"
	},
	{
		"id": "96e009aecf7d",
		"ts": "2026-07-08T09:24:03.990Z",
		"symbol": "Claude",
		"token": "0xeF34d1ba20131f0e6Ea93a8C3E9397a871Ab7B07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 689166.1,
		"hash": "96e009aecf7d7349be9f062024319e0f0daca5a5c2897cb7c7c2ed8f57744460"
	},
	{
		"id": "c6855f1f940a",
		"ts": "2026-07-08T09:24:04.215Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 901139.38,
		"hash": "c6855f1f940a6b3ead88140ddff05c12d1c98e218c5e281d15b63834a5c78337"
	},
	{
		"id": "f3968222126d",
		"ts": "2026-07-08T09:24:04.442Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2926529.9,
		"hash": "f3968222126d83903c6bd64a5d3d76def1667ec0490ab24ce0096e323ed7728b"
	},
	{
		"id": "6ed76c690047",
		"ts": "2026-07-08T09:24:04.668Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1597360.04,
		"hash": "6ed76c6900477e869490b773af3ed07f09ac7885ccaba84759a9da8fade57f97"
	},
	{
		"id": "d49a2bb9ec6f",
		"ts": "2026-07-08T09:24:04.896Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 381077.4,
		"hash": "d49a2bb9ec6fa9ed38dd48b06353d52b49c99174ce957e33b2b6d47988d96789"
	},
	{
		"id": "c98c82a336ce",
		"ts": "2026-07-08T09:24:05.612Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 112577.11,
		"hash": "c98c82a336ce709bbcf0ad4b4a6ad203b9272f836680098dbadc3dce589e66bf"
	},
	{
		"id": "b13122f323fe",
		"ts": "2026-07-08T09:24:05.837Z",
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
		"liquidityUsd": 1320506.19,
		"hash": "b13122f323feb62ec4a4113567d9306fa378bb462a7e8d86c1d666cca8aa67e4"
	},
	{
		"id": "6917b99df7bb",
		"ts": "2026-07-08T06:25:09.971Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102268080.43,
		"hash": "6917b99df7bbc67e3a34f637feb3d31d4e7f8c81829956fa4f87f18654a90c72"
	},
	{
		"id": "cb20ec06c141",
		"ts": "2026-07-08T06:25:10.500Z",
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
		"liquidityUsd": 15966488.52,
		"hash": "cb20ec06c14113c7592c1adcd5c4bb1a33815e9d8e86e04d635914b758d467cb"
	},
	{
		"id": "c50804986281",
		"ts": "2026-07-08T06:25:10.760Z",
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
		"liquidityUsd": 1371530.96,
		"hash": "c508049862816ad2b062397f284f661e6f017c374893cb40e99969c641dece0c"
	},
	{
		"id": "0e078cad7197",
		"ts": "2026-07-08T06:25:11.013Z",
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
		"liquidityUsd": 33828993.01,
		"hash": "0e078cad719761393244b6b8616a3406c901be15b64b40d721c0a2da079f4551"
	},
	{
		"id": "3a0a713d2273",
		"ts": "2026-07-08T06:25:11.270Z",
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
		"liquidityUsd": 3963947.64,
		"hash": "3a0a713d227382af8c19619ceb4d86db132f768934717772d120d61b4f88d38d"
	},
	{
		"id": "168a9fab3de8",
		"ts": "2026-07-08T06:25:13.221Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 968346.66,
		"hash": "168a9fab3de897505389ca40f0e03de88fdc80eca0c1ec59cc470cb6a2690389"
	},
	{
		"id": "72ded0e9a80a",
		"ts": "2026-07-08T06:25:13.472Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33828993.01,
		"hash": "72ded0e9a80a6cd75f9a0483ae68e63bf82c4b4c30b40c3b83d296117fd9599d"
	},
	{
		"id": "9512b7dfe006",
		"ts": "2026-07-08T06:25:13.725Z",
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
		"liquidityUsd": 2486944.75,
		"hash": "9512b7dfe0066dbc981e530a81d99fe997255044a31f162ebda9e19c93f01dcc"
	},
	{
		"id": "2366127ae0a9",
		"ts": "2026-07-08T06:25:13.974Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115305.91,
		"hash": "2366127ae0a9cc78ed9443e61ca39df0beb1a8f34d59c0a4f7ae8f657bd1e4ae"
	},
	{
		"id": "fb468e8d9003",
		"ts": "2026-07-08T06:25:14.226Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 54293.19,
		"hash": "fb468e8d9003f7a34ca56447a68d5360f89837f780363911c03b27c783660531"
	},
	{
		"id": "b0ac97fe2be5",
		"ts": "2026-07-08T06:25:14.463Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4911798.31,
		"hash": "b0ac97fe2be50d7e2b5cfa48bd5e0b9b313e7125ccb6c2b6b7298fd1114c88bc"
	},
	{
		"id": "81a643a7ff5d",
		"ts": "2026-07-08T06:25:14.700Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1883254.12,
		"hash": "81a643a7ff5da47a0e6fdd3f0a56a0deaedf7b0e09b733ac4728c9fbed8dfaca"
	},
	{
		"id": "3053b40289f7",
		"ts": "2026-07-08T06:25:14.938Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2989560.68,
		"hash": "3053b40289f7df08e6d65cac19c4178a38dd87bea6dd18627281827d83f74386"
	},
	{
		"id": "d3828583d626",
		"ts": "2026-07-08T06:25:15.174Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 534153.5,
		"hash": "d3828583d626d639cdd4cf34a93594eed5baba5518e1848df40f96ac17db9267"
	},
	{
		"id": "2d95937cc787",
		"ts": "2026-07-08T06:25:16.681Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 810875.25,
		"hash": "2d95937cc787994be2444d21f63c4713f1ef4f76ff4d8a084d6d99e098776529"
	},
	{
		"id": "77ebb0e3bd0d",
		"ts": "2026-07-08T06:25:19.462Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4529752.95,
		"hash": "77ebb0e3bd0d4ec1c7ad9c4edcc6f1f9c03324f99743f8e9308d41604c99c232"
	},
	{
		"id": "4a907aa813b9",
		"ts": "2026-07-08T06:25:19.698Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 150761.73,
		"hash": "4a907aa813b9464450d9d9188f2d739c381dbc3c32e416d3538bcda64d6ddf25"
	},
	{
		"id": "a0e97dcda267",
		"ts": "2026-07-08T06:25:20.558Z",
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
		"liquidityUsd": 1224177.47,
		"hash": "a0e97dcda267d29964fabcebc007d71f4958431cc2e6303647802bf64bcc49af"
	},
	{
		"id": "962799212369",
		"ts": "2026-07-08T06:25:20.796Z",
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
		"liquidityUsd": 7413249.25,
		"hash": "962799212369c34d6b40f267a5c1cfe9317cdfbfd6934a99ef4c462eb0b4239c"
	},
	{
		"id": "1b32f1e4ec45",
		"ts": "2026-07-08T03:32:13.205Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102201069.86,
		"hash": "1b32f1e4ec45e745d1c4b1a669f8507e230f9ec99ab50d02e567812b75f63b53"
	},
	{
		"id": "12a160e915e2",
		"ts": "2026-07-08T03:32:13.572Z",
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
		"liquidityUsd": 15653685.91,
		"hash": "12a160e915e260e16af070ebc58e373539b820ee253b7d9c4700f06b7bda5139"
	},
	{
		"id": "e1f085416166",
		"ts": "2026-07-08T03:32:13.787Z",
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
		"liquidityUsd": 1392702.16,
		"hash": "e1f0854161663f69dcc80a4e4789966c42c34334d1b7b0d88807f006f2f575c0"
	},
	{
		"id": "f1af0bb632c8",
		"ts": "2026-07-08T03:32:14.803Z",
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
		"liquidityUsd": 34407441.45,
		"hash": "f1af0bb632c8a927b273f2a8e3b96e1e2b274800935609383cfc79290d2d3bc5"
	},
	{
		"id": "846a129b0f1a",
		"ts": "2026-07-08T03:32:15.012Z",
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
		"liquidityUsd": 3991220.43,
		"hash": "846a129b0f1a30dabfc15405ae84e3eb03ac3fce4d7eb3d7d551ff66e80f6178"
	},
	{
		"id": "57b3a761b9bc",
		"ts": "2026-07-08T03:32:15.237Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 972088.63,
		"hash": "57b3a761b9bc52d4ec937b17992ea012ed9ce907ec234e1b0e9d75228df08b16"
	},
	{
		"id": "bc6a5db7c6eb",
		"ts": "2026-07-08T03:32:15.591Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34407441.45,
		"hash": "bc6a5db7c6eb3c325f997b80539a2d78df447bacd130ac57a4296a1377e8feef"
	},
	{
		"id": "bb76207ce611",
		"ts": "2026-07-08T03:32:16.592Z",
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
		"liquidityUsd": 2502210.35,
		"hash": "bb76207ce6110c7c1eb8fc3ee52ea91f8d2db3a4abb4c6eece49aa49af4cbe57"
	},
	{
		"id": "4624409da039",
		"ts": "2026-07-08T03:32:16.800Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 108380.53,
		"hash": "4624409da03941bcc955dd8cd624926c5b34d85d67768f5f47984222d90ce3bf"
	},
	{
		"id": "6870218569f0",
		"ts": "2026-07-08T03:32:17.008Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 63079.53,
		"hash": "6870218569f0baa104a1d2435d4d406e0f0a5e99a76df7f1c09d8b8a2d6cef07"
	},
	{
		"id": "0b79eb42b0b7",
		"ts": "2026-07-08T03:32:17.205Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1974409.52,
		"hash": "0b79eb42b0b7d0325fbeb8c3f51f20d7b7b20f56a2756ca3b0f6a4518c1af0f7"
	},
	{
		"id": "6904a72eed5d",
		"ts": "2026-07-08T03:32:17.399Z",
		"symbol": "hTEA",
		"token": "0xa1A0B2E02B0E6830aD5A4A7211691200945d8919",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 171633.27,
		"hash": "6904a72eed5d5f3a8f77bd205330ed02facdbbdcb87dc073de372a04e659409e"
	},
	{
		"id": "a22c63a732d0",
		"ts": "2026-07-08T03:32:17.597Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5110749.35,
		"hash": "a22c63a732d01cf1f220276228988b3d422d45b92ccf213fc7c25c35c7071d29"
	},
	{
		"id": "243187c627a3",
		"ts": "2026-07-08T03:32:17.791Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 549363.83,
		"hash": "243187c627a339a858c2dfa4ef850bf0813ecb41b058854beb037ce855d7384f"
	},
	{
		"id": "2d3e8aca32c4",
		"ts": "2026-07-08T03:32:17.994Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2961574.71,
		"hash": "2d3e8aca32c484ee9d83c98d8eee5904d65bcdb3c1d6e8efb9a537914dcd2b4e"
	},
	{
		"id": "3e170418f3e3",
		"ts": "2026-07-08T03:32:18.208Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 166117.5,
		"hash": "3e170418f3e337f28b1b9fe159363816b1cc1b5d8b8e71444505dec04e9e4c67"
	},
	{
		"id": "c3dffd36799d",
		"ts": "2026-07-08T03:32:18.406Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4600148.52,
		"hash": "c3dffd36799d0d2068715ab624b1b8a1d1775c800c6fae3d80a4dd447ec79f6f"
	},
	{
		"id": "d8feb24190af",
		"ts": "2026-07-08T03:32:18.609Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1012060.08,
		"hash": "d8feb24190af95800e50db4527e2dd106e048d70b982794251e5d03844feee9d"
	},
	{
		"id": "1ab6c9c3f1db",
		"ts": "2026-07-07T23:59:26.935Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102215332.8,
		"hash": "1ab6c9c3f1dbe514eeddeb163bb91f1ef60913925ca3aff6ab77a209a5a64769"
	},
	{
		"id": "4173b92065d7",
		"ts": "2026-07-07T23:59:27.287Z",
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
		"liquidityUsd": 16018922.57,
		"hash": "4173b92065d729ee3ecabd18c82e9c282d22d746f8495e7b75115359b4ec1c2a"
	},
	{
		"id": "b1d76e22da6e",
		"ts": "2026-07-07T23:59:27.516Z",
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
		"liquidityUsd": 1403557.06,
		"hash": "b1d76e22da6e5a17827cb41b49e8bc53b28cc2420ec64aeec1f3da7c7a2ca323"
	},
	{
		"id": "b3714284d245",
		"ts": "2026-07-07T23:59:27.711Z",
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
		"liquidityUsd": 34281576.39,
		"hash": "b3714284d24536c87457b6f2760481d97c46e5f5724af8f55faefcf9b90dac2d"
	},
	{
		"id": "05b59c129cae",
		"ts": "2026-07-07T23:59:27.904Z",
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
		"liquidityUsd": 4011452.65,
		"hash": "05b59c129caed32a43692c66ab1eb9e6b05069928be6633b10e1b16319979c74"
	},
	{
		"id": "5e866ddd0e22",
		"ts": "2026-07-07T23:59:28.125Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 984261.05,
		"hash": "5e866ddd0e22a9f1137dca9454d160cf9ded1a76351dd6ff39be713913e0cce5"
	},
	{
		"id": "a36478392811",
		"ts": "2026-07-07T23:59:28.314Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34281576.39,
		"hash": "a3647839281162d9ed77580e663f53f8936e27f659f85865d8728732004986bc"
	},
	{
		"id": "a5aa75199050",
		"ts": "2026-07-07T23:59:28.553Z",
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
		"liquidityUsd": 2553302.55,
		"hash": "a5aa751990509af8389f8c3cee899d9e5b5f4f56ddc743f88677d84eea029c97"
	},
	{
		"id": "5b2d944856d3",
		"ts": "2026-07-07T23:59:28.743Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 119386.1,
		"hash": "5b2d944856d31e226aff5db7ee2b86854eecad823c6de5faaa67b39c085847df"
	},
	{
		"id": "c8d1956aeb29",
		"ts": "2026-07-07T23:59:28.935Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 66360.24,
		"hash": "c8d1956aeb29d195a9bee87205d3b1c23db402fdd63a43bfe67d2655d2b6a974"
	},
	{
		"id": "ba3146ea61a2",
		"ts": "2026-07-07T23:59:29.120Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 174029.9,
		"hash": "ba3146ea61a27b5bbec78a2fde1831a05db24b7247f1c9397cc1ff251941a159"
	},
	{
		"id": "8d37a5f61575",
		"ts": "2026-07-07T23:59:29.308Z",
		"symbol": "hTEA",
		"token": "0xa1A0B2E02B0E6830aD5A4A7211691200945d8919",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 192939.02,
		"hash": "8d37a5f615753778f6e636f371b82b375296d71c3e826a681ab41bc43113d08d"
	},
	{
		"id": "e28f2abab656",
		"ts": "2026-07-07T23:59:29.490Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3039919.58,
		"hash": "e28f2abab65617a2ba8c5ed3b848b7300ac474fa24ba430218d10d12d208ec8d"
	},
	{
		"id": "db23ede89d6b",
		"ts": "2026-07-07T23:59:29.666Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5245225,
		"hash": "db23ede89d6b9339f5db774b2043861da8d761a427c333dcb0135cc6bd9570bd"
	},
	{
		"id": "1b8853a74fb4",
		"ts": "2026-07-07T23:59:30.564Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2055333.61,
		"hash": "1b8853a74fb4760300de69f28c57faaad19e5c5f2b3779300968fc2048210e59"
	},
	{
		"id": "1850cd807222",
		"ts": "2026-07-07T23:59:30.746Z",
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
		"liquidityUsd": 7385933.74,
		"hash": "1850cd807222e118a384199ea101ee863fd08e6562865aa7dc8883ca69b4722d"
	},
	{
		"id": "f8d591925dc6",
		"ts": "2026-07-07T23:59:30.923Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 1868387.63,
		"hash": "f8d591925dc61af994c673231a3ed6e5a4b8aabd9bb7d169da889a869b57bfaf"
	},
	{
		"id": "8c351800fba0",
		"ts": "2026-07-07T23:59:31.102Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1024413.69,
		"hash": "8c351800fba09ab04f227e5c29855f7f215b9cf60bb6eb457ffcd28e86ab258c"
	},
	{
		"id": "1c0426d1e34f",
		"ts": "2026-07-07T22:57:39.361Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102172088.04,
		"hash": "1c0426d1e34fa35220ec88db30996585a3e4098e7833da02d89113856e92818f"
	},
	{
		"id": "ba84feb30c6d",
		"ts": "2026-07-07T22:57:39.639Z",
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
		"liquidityUsd": 16044647.84,
		"hash": "ba84feb30c6db7c364e74affb7ffa2eb72d19507e75e597d2738ec41cd0c6fcd"
	},
	{
		"id": "a844e9d382d0",
		"ts": "2026-07-07T22:57:39.921Z",
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
		"liquidityUsd": 1406631.27,
		"hash": "a844e9d382d0c826a5d32b8674283645b7c76a0203646ffc8fb04c118224fcb2"
	},
	{
		"id": "f35d43932e9d",
		"ts": "2026-07-07T22:57:40.423Z",
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
		"liquidityUsd": 34436071.82,
		"hash": "f35d43932e9d96260e0bfbaf11a09cb37c77e90e6d349ee35eba878e3da23196"
	},
	{
		"id": "f2e348f55a2d",
		"ts": "2026-07-07T22:57:40.689Z",
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
		"liquidityUsd": 4027586.59,
		"hash": "f2e348f55a2de6b223ba405df089598d0b411ccd411d13d1cbc0908edf22ad04"
	},
	{
		"id": "097849fc4bef",
		"ts": "2026-07-07T22:57:40.962Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 986833.68,
		"hash": "097849fc4bef15b9dd28b285653b6cf448350707a6f318cf7e05943a34bab83a"
	},
	{
		"id": "1b4cc83c056c",
		"ts": "2026-07-07T22:57:41.212Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34436071.82,
		"hash": "1b4cc83c056c35b89bd81d7328ddea2f7f3a0d4eaaa16597ec56fc005a1ea48f"
	},
	{
		"id": "115b6d317846",
		"ts": "2026-07-07T22:57:41.482Z",
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
		"liquidityUsd": 2562170.3,
		"hash": "115b6d3178468b2fe76b8e4edfd9b46568d3d6fb362059ce06d09587063a0c49"
	},
	{
		"id": "8bd4a88fbefa",
		"ts": "2026-07-07T22:57:41.733Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118135.52,
		"hash": "8bd4a88fbefae31c23fd67951646e1edf82f99da2fdca7df0156778e634b62cc"
	},
	{
		"id": "0da3fc45192f",
		"ts": "2026-07-07T22:57:42.006Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 67296.57,
		"hash": "0da3fc45192fd93f424d084e9e8099c3569b5d720f7ce19f3be96e82ddb0e8fd"
	},
	{
		"id": "4cf675c42e3a",
		"ts": "2026-07-07T22:57:42.245Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 176052.23,
		"hash": "4cf675c42e3ac8be6c2d47114f8715330c2b01693064d8a932c9fb44f14c9131"
	},
	{
		"id": "881aa57e7fec",
		"ts": "2026-07-07T22:57:42.501Z",
		"symbol": "hTEA",
		"token": "0xa1A0B2E02B0E6830aD5A4A7211691200945d8919",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 182389.71,
		"hash": "881aa57e7fec83ce16dbb0e9f4e7001088ca8fb4064ba74f640192f35d1b242b"
	},
	{
		"id": "2225809e7412",
		"ts": "2026-07-07T22:57:42.741Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3038057.27,
		"hash": "2225809e7412731fd3585b73b20399eaf6e78601b6019d54392388329b1d3e86"
	},
	{
		"id": "67ff463c2628",
		"ts": "2026-07-07T22:57:42.996Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2058811.52,
		"hash": "67ff463c26289334427114f6333919fc231b18cfa4763017dbdaf9224dc95f46"
	},
	{
		"id": "44236aa6478a",
		"ts": "2026-07-07T22:57:43.234Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5232420.94,
		"hash": "44236aa6478a93d976a59046f22c32317bf295d1589b9af1ce1d9394da26a7ed"
	},
	{
		"id": "1bce91c7b53b",
		"ts": "2026-07-07T22:57:43.488Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7449396.99,
		"hash": "1bce91c7b53b7ab8601a22b1ddf949dacf767df7f7cd4ad8e30460991bdc39f8"
	},
	{
		"id": "b105ab6433a1",
		"ts": "2026-07-07T22:57:43.724Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1871200.16,
		"hash": "b105ab6433a1ffecdde2cdc2d8584d79f714ffa72095e7b166ca4b258ee92e0b"
	},
	{
		"id": "8005bf00afa6",
		"ts": "2026-07-07T22:57:43.979Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1033335.15,
		"hash": "8005bf00afa6995333ed87ceb74d556e9f18321f09cdf2c5208ed968e0ab063d"
	},
	{
		"id": "301e3d0a2acf",
		"ts": "2026-07-07T21:20:50.873Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102419300.89,
		"hash": "301e3d0a2acf72fd727d4af4171094cbdf5156367ea9f25c76fa14dd631d881b"
	},
	{
		"id": "bbfb511ac400",
		"ts": "2026-07-07T21:20:51.146Z",
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
		"liquidityUsd": 15328534.44,
		"hash": "bbfb511ac4006b8ab4dce6045fe510b02860169b97236d5a7f06a728f5e96d72"
	},
	{
		"id": "1aa0fb4841b5",
		"ts": "2026-07-07T21:20:51.653Z",
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
		"liquidityUsd": 1410253.78,
		"hash": "1aa0fb4841b505519fa2646e54fb98dfd752dcc7f8274bf012cfbacd73b24c8f"
	},
	{
		"id": "789d54df83b9",
		"ts": "2026-07-07T21:20:51.911Z",
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
		"liquidityUsd": 34714634.63,
		"hash": "789d54df83b9efc3a0e9527bbc1deb5aeca09eb40bd21e67ba85a51b772f33a6"
	},
	{
		"id": "f4f9bdc727cc",
		"ts": "2026-07-07T21:20:52.170Z",
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
		"liquidityUsd": 4034554.13,
		"hash": "f4f9bdc727ccd2863d7e3ecbc308187be35116384e43c205c5bb977723f4f1d8"
	},
	{
		"id": "ee503e892713",
		"ts": "2026-07-07T21:20:52.459Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 995433.05,
		"hash": "ee503e89271324dae9e06e974cabc775c3ecc7f7a88899e8a5220d142e30024e"
	},
	{
		"id": "d041e7899ee9",
		"ts": "2026-07-07T21:20:52.741Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34714634.63,
		"hash": "d041e7899ee9f920538478847d7ef11c1014312e060a0cf2dd18b8385cf68d47"
	},
	{
		"id": "7958fd0d50e9",
		"ts": "2026-07-07T21:20:53.037Z",
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
		"liquidityUsd": 2572349.1,
		"hash": "7958fd0d50e94a63af44481d8ff59fd64bdda3023d134290a44e971c5c20193a"
	},
	{
		"id": "381bc6c9a492",
		"ts": "2026-07-07T21:20:53.322Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113975.25,
		"hash": "381bc6c9a492a8b732f9345b27a156b3c1ebd8e979ec8bfa2ce669345eea4d84"
	},
	{
		"id": "f3f8f9cc1771",
		"ts": "2026-07-07T21:20:53.601Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 69683.72,
		"hash": "f3f8f9cc17716cb3a799cce766db85d26360075de419ee8e379dc7c1c62368d9"
	},
	{
		"id": "4c7597b91db4",
		"ts": "2026-07-07T21:20:53.850Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 176665.88,
		"hash": "4c7597b91db4fd95d75d13db2d7d6145dcf5e38893b274aca1733cdfba6cd40c"
	},
	{
		"id": "e8701778e8c5",
		"ts": "2026-07-07T21:20:54.107Z",
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
		"liquidityUsd": 1373913.05,
		"hash": "e8701778e8c5637ca3d839cad550273e229c766014ae6c0a064b5019edbcd1f8"
	},
	{
		"id": "daa5eaa4fe90",
		"ts": "2026-07-07T21:20:54.347Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7492297.97,
		"hash": "daa5eaa4fe9072c11a1cfd35fcebbe71499fe19fd6f135d21cf3247d74888ca5"
	},
	{
		"id": "e0a9587ce49b",
		"ts": "2026-07-07T21:20:54.592Z",
		"symbol": "hTEA",
		"token": "0xa1A0B2E02B0E6830aD5A4A7211691200945d8919",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 171364.71,
		"hash": "e0a9587ce49b334c21d4eb0eb56572cff20c6eb95ebba8f89961a6ffe8ef5c38"
	},
	{
		"id": "983466a3cbeb",
		"ts": "2026-07-07T21:20:54.848Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2889423.06,
		"hash": "983466a3cbeb009f3a6d604eff8e9b34c3c88be699e3fb985a2d5c2cd08ca818"
	},
	{
		"id": "e26fe50700fe",
		"ts": "2026-07-07T21:20:55.087Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2072258.04,
		"hash": "e26fe50700fe0a1dd210a9329459d79193d26029ee0fc70bbdccb04dae6571a3"
	},
	{
		"id": "91bb347d14ea",
		"ts": "2026-07-07T21:20:55.330Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5133351.74,
		"hash": "91bb347d14ea9fa29fba079b2e16779637eab6bd768e4f07548c7640a4dbeb3d"
	},
	{
		"id": "83d45b54812a",
		"ts": "2026-07-07T21:20:55.583Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 567139.11,
		"hash": "83d45b54812ac9d5271f96138a7a3a5ee039f980237eaa26695dffffdde3cc6d"
	},
	{
		"id": "69cf567223c9",
		"ts": "2026-07-07T19:50:14.090Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102569036.54,
		"hash": "69cf567223c9226db53f2778d6ff5305ffd140bbcf69fa05bbef9fc0e089deef"
	},
	{
		"id": "743dbf875e98",
		"ts": "2026-07-07T19:50:14.299Z",
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
		"liquidityUsd": 15789228.74,
		"hash": "743dbf875e98afcc12717a2a8396bff0fbdf9f64b81cd43d1da35dbc85abe1cb"
	},
	{
		"id": "191133fae472",
		"ts": "2026-07-07T19:50:14.569Z",
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
		"liquidityUsd": 1418140.6,
		"hash": "191133fae47213b984a9851cd8b1180113c2c75d50a4cfeb3523def2c0c08f27"
	},
	{
		"id": "b37df2545cc3",
		"ts": "2026-07-07T19:50:14.765Z",
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
		"liquidityUsd": 34823255.13,
		"hash": "b37df2545cc3be6a0f8c67ed960eefd77528c54335a32ecc6030057376045d91"
	},
	{
		"id": "93efbe9f5fb6",
		"ts": "2026-07-07T19:50:15.847Z",
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
		"liquidityUsd": 4053751.51,
		"hash": "93efbe9f5fb660f3f6342210b92d5a29475d75d3e0347fbecb4a8d7db199b5da"
	},
	{
		"id": "62ae2504bf70",
		"ts": "2026-07-07T19:50:16.615Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1000547.14,
		"hash": "62ae2504bf70bf043adfbf339e15fb0de25af208cace08bc8112098c639451c8"
	},
	{
		"id": "d4286507020a",
		"ts": "2026-07-07T19:50:17.740Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34823255.13,
		"hash": "d4286507020a933337cd88f2fe825f6feff5dfba3f3965f16ba7fa1621fe3676"
	},
	{
		"id": "8d33cdf492ea",
		"ts": "2026-07-07T19:50:17.941Z",
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
		"liquidityUsd": 2589409.77,
		"hash": "8d33cdf492ea269e249588ca1df40a2d3519fa7306e3c1888d821e386190b4d7"
	},
	{
		"id": "a549081474ce",
		"ts": "2026-07-07T19:50:18.138Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 123465.96,
		"hash": "a549081474ced71c499fedb96855758fce839ba28052cec7d8111e5a8bd3c893"
	},
	{
		"id": "e4f129309a22",
		"ts": "2026-07-07T19:50:18.332Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
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
		"liquidityUsd": 175349.06,
		"hash": "e4f129309a22dfe925d6e1b8eb5d524edce7948502cb71e75d8253801899b34a"
	},
	{
		"id": "84f8189480e1",
		"ts": "2026-07-07T19:50:18.515Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 71607.38,
		"hash": "84f8189480e16228bdec75d687b3021d7b790ff59467f815eea19127fbc17d17"
	},
	{
		"id": "1c7508fac7b9",
		"ts": "2026-07-07T19:50:19.520Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7568166.13,
		"hash": "1c7508fac7b99ec590113da10aee054c8c3d302d72fd0b364449da12edbd5141"
	},
	{
		"id": "029a80cc08cf",
		"ts": "2026-07-07T19:50:19.713Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2861797.94,
		"hash": "029a80cc08cf59ce8d426ae289f3b57a8b751df031fc582d9b46dc238c58c972"
	},
	{
		"id": "2bfa2417d881",
		"ts": "2026-07-07T19:50:19.897Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2056402.75,
		"hash": "2bfa2417d881d1ff882159fb86a08e27fb179bd644964d38b30cf079f497b083"
	},
	{
		"id": "c532d59dd5be",
		"ts": "2026-07-07T19:50:20.093Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5252322.94,
		"hash": "c532d59dd5bed1faa25bee0907d7d1595561f38dbc5d456ea1303c41379c9960"
	},
	{
		"id": "1d234fb29279",
		"ts": "2026-07-07T19:50:20.287Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 1853020.13,
		"hash": "1d234fb29279b613711f2e9ef9e5fbf92ad83c7358e512b62fd76361f2b0013d"
	},
	{
		"id": "cdb620d51899",
		"ts": "2026-07-07T19:50:20.481Z",
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
		"liquidityUsd": 1405348.36,
		"hash": "cdb620d51899296aa9ebaf2103d07e77299ed3943b25170ff096cfd486b0bc78"
	},
	{
		"id": "1f02a5cfa66d",
		"ts": "2026-07-07T19:50:20.668Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 565856.82,
		"hash": "1f02a5cfa66d082f2ea8b5b0724404884270e6641e55d1508ce253baf9ce66f1"
	},
	{
		"id": "bd41babd7d1b",
		"ts": "2026-07-07T17:10:47.558Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 103058882.42,
		"hash": "bd41babd7d1b5fcd5ceb9caa905503435862fb4347938cbd932be7e599c9123b"
	},
	{
		"id": "5e13711fec64",
		"ts": "2026-07-07T17:10:47.938Z",
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
		"liquidityUsd": 16639314.01,
		"hash": "5e13711fec64ae8b8e264913856f8120f09cf827fe3ea194a5bc457d89d56df9"
	},
	{
		"id": "f73db73cbaba",
		"ts": "2026-07-07T17:10:48.151Z",
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
		"liquidityUsd": 1420788.1,
		"hash": "f73db73cbabac78c35d498aed1bd79a5f69f824c407ad90d8a31a615fa08cd00"
	},
	{
		"id": "85d3366a9c6a",
		"ts": "2026-07-07T17:10:48.368Z",
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
		"liquidityUsd": 35179181.82,
		"hash": "85d3366a9c6a79ed7c47819a37e3b67de40af32a456d9ac9bdf834a81126b2c2"
	},
	{
		"id": "d69b0b3c4376",
		"ts": "2026-07-07T17:10:48.583Z",
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
		"liquidityUsd": 4109589.06,
		"hash": "d69b0b3c43765d797a425faa052f36cb0bf967104b77fb4437d41477851afdd8"
	},
	{
		"id": "b317a7ed62b0",
		"ts": "2026-07-07T17:10:48.797Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1008836.84,
		"hash": "b317a7ed62b0f76a5f25c3cb179453fd840c8f50dbbe81d8140e488c04988711"
	},
	{
		"id": "1493ca2ddad7",
		"ts": "2026-07-07T17:10:49.017Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 35179181.82,
		"hash": "1493ca2ddad723222be2c3b5a4241f6d867f314665e77354a3a1e71669813e6a"
	},
	{
		"id": "c00aa8e8f29c",
		"ts": "2026-07-07T17:10:49.238Z",
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
		"liquidityUsd": 2590290.04,
		"hash": "c00aa8e8f29cc7c075de49d6f232e33077348855fa8fa8ecf295ac7308fc420a"
	},
	{
		"id": "04693ab59f21",
		"ts": "2026-07-07T17:10:49.451Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 122075.71,
		"hash": "04693ab59f21d5608a49093f17c39720d60f5edfb6963069daba642ec29f0bbd"
	},
	{
		"id": "2ecc944019cf",
		"ts": "2026-07-07T17:10:49.664Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
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
		"liquidityUsd": 178164.37,
		"hash": "2ecc944019cfeba27cce75ce5d66b41ebe0cdbe7eb1436ccb9684d897a4f2a58"
	},
	{
		"id": "77800642f81c",
		"ts": "2026-07-07T17:10:49.869Z",
		"symbol": "hTEA",
		"token": "0xa1A0B2E02B0E6830aD5A4A7211691200945d8919",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 191586.96,
		"hash": "77800642f81c0e69ce066eb74a3ee3bbf9b6e5f5b9e19dc9e04d2325484fe578"
	},
	{
		"id": "c7b2dc3022fe",
		"ts": "2026-07-07T17:10:50.062Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7693649.36,
		"hash": "c7b2dc3022fe1e2cc8211c5505df98656e33a4a3de14251b30083897c7929eb9"
	},
	{
		"id": "e2c4e00d2730",
		"ts": "2026-07-07T17:10:50.262Z",
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
		"liquidityUsd": 2868942.84,
		"hash": "e2c4e00d27306ed1205220ff66414aa1d51e011cf931dbb53abb71322ee56b9d"
	},
	{
		"id": "7ddab028e385",
		"ts": "2026-07-07T17:10:50.464Z",
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
		"liquidityUsd": 1428447.13,
		"hash": "7ddab028e3855b96c2c42128082420a826ca16e6744236436ca6bb10d5cc4c01"
	},
	{
		"id": "c44de048f4a9",
		"ts": "2026-07-07T17:10:50.659Z",
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
		"liquidityUsd": 2111490.96,
		"hash": "c44de048f4a94746099e4cd5a6a78182d9a3f53191d8708405f2bbcd24cf9a04"
	},
	{
		"id": "b69a2b86e496",
		"ts": "2026-07-07T17:10:50.854Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 76338.66,
		"hash": "b69a2b86e496a9ab86d24b25307cf6927103cc28411bded84a332bbe6d088931"
	},
	{
		"id": "1830082d02a5",
		"ts": "2026-07-07T17:10:51.053Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 570578.62,
		"hash": "1830082d02a5187b80e2fcc9da333ca3ea9eea14ced7c32ba4a9c1220da1125b"
	},
	{
		"id": "0f9d9ad31504",
		"ts": "2026-07-07T17:10:51.254Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1895263.57,
		"hash": "0f9d9ad31504ade656405bc735d5fe369467a00eda0fa7ac64a18ef6db7ce3c1"
	},
	{
		"id": "52440840d206",
		"ts": "2026-07-07T16:07:35.300Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102861614.74,
		"hash": "52440840d20633dd018960061ec16c9b2bd9b1b79b18578ae35fc81d0412f3a3"
	},
	{
		"id": "0d4d88e67c1a",
		"ts": "2026-07-07T16:07:35.743Z",
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
		"liquidityUsd": 16549543.95,
		"hash": "0d4d88e67c1ab2123b62b55e6838a6f61b0fec03a22a2faca05adb62f2bf26d6"
	},
	{
		"id": "e62a6cb0b95a",
		"ts": "2026-07-07T16:07:35.978Z",
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
		"liquidityUsd": 1412820.26,
		"hash": "e62a6cb0b95a4716265f76fc3d4ce0528f148d400fda844838e7de3bdebb2c69"
	},
	{
		"id": "e05aa4709a72",
		"ts": "2026-07-07T16:07:36.220Z",
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
		"liquidityUsd": 35308635.76,
		"hash": "e05aa4709a72478c2740fa2ae2e606720cd641d4345b441b00651b7465742d78"
	},
	{
		"id": "f07184a5d232",
		"ts": "2026-07-07T16:07:36.525Z",
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
		"liquidityUsd": 4101181.51,
		"hash": "f07184a5d232865d24ec51932ce5e77044d29396338faad277b7217939851759"
	},
	{
		"id": "3c38c4ee7a29",
		"ts": "2026-07-07T16:07:36.758Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1008836.84,
		"hash": "3c38c4ee7a299bb1aeb14562f362fdc8a2f3f8f2c891a5112d0833deee8bffde"
	},
	{
		"id": "c2fbfafa1823",
		"ts": "2026-07-07T16:07:36.991Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 35308630.81,
		"hash": "c2fbfafa182301e5280595957ebceeea06dd9af46d29d586f21019a3ddacd749"
	},
	{
		"id": "589ecaee16d5",
		"ts": "2026-07-07T16:07:37.227Z",
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
		"liquidityUsd": 2525737.21,
		"hash": "589ecaee16d53214730f15606afb7c0193f6bcc5b82afade90a27a2614704f5b"
	},
	{
		"id": "493bdb585f44",
		"ts": "2026-07-07T16:07:37.461Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 127838.08,
		"hash": "493bdb585f44b5d0c97dd072be030410a42efb79b6019589fe9a2e2433abdc80"
	},
	{
		"id": "8becb6ce33ec",
		"ts": "2026-07-07T16:07:37.694Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
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
		"liquidityUsd": 179948.57,
		"hash": "8becb6ce33ece56dd0f8045bde74365edf2f18c4a75b0b6731a004657ac17515"
	},
	{
		"id": "e90483129e3b",
		"ts": "2026-07-07T16:07:37.913Z",
		"symbol": "hTEA",
		"token": "0xa1A0B2E02B0E6830aD5A4A7211691200945d8919",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 191582.08,
		"hash": "e90483129e3b9dc71db6c49a0504051120493a7cd39de15db311e320004e89f9"
	},
	{
		"id": "63a5693be75d",
		"ts": "2026-07-07T16:07:38.418Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7535399.41,
		"hash": "63a5693be75de0d9d296bdbab8de84d25894b20fd2ac15de2423fa6001982a28"
	},
	{
		"id": "a5a1b0a14f21",
		"ts": "2026-07-07T16:07:38.639Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2097519.41,
		"hash": "a5a1b0a14f21c8e5089269ede92602867cd11863c438b858a0ad5f21c0858cb6"
	},
	{
		"id": "1a07ced889cf",
		"ts": "2026-07-07T16:07:38.857Z",
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
		"liquidityUsd": 1444755.56,
		"hash": "1a07ced889cf7354ed69ea97baae327a4fffb0079f45a99b54da8872d386fbd3"
	},
	{
		"id": "519b02544f3d",
		"ts": "2026-07-07T16:07:39.077Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1952629.95,
		"hash": "519b02544f3dd33b84205123abdcf794ec401a2a519329186ef182912119bfc5"
	},
	{
		"id": "cfb6659bcdbd",
		"ts": "2026-07-07T16:07:39.298Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3072771.07,
		"hash": "cfb6659bcdbdd5147d5ba57553baa7eaf8931dfc727974e53a4fe8cbfacb1caa"
	},
	{
		"id": "76f8cf2a0a9b",
		"ts": "2026-07-07T16:07:39.565Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 566882.28,
		"hash": "76f8cf2a0a9bea9fcea63fdc56c8c5a2190f5adab1767b20736adb2e0a766e39"
	},
	{
		"id": "ee6eb85f4efa",
		"ts": "2026-07-07T16:07:39.783Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5402764.06,
		"hash": "ee6eb85f4efa96fc1d4b05e53888bebb63f020668a4dc1b09856fb5cb27ba7d5"
	},
	{
		"id": "a03a1bb04137",
		"ts": "2026-07-07T14:24:13.167Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102062767.25,
		"hash": "a03a1bb04137985be1b1a140c7ce1a65a3c813ef83163d48dd22c35c315f6ef6"
	}
]
