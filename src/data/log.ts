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
	"updatedAt": "2026-10-28T10:17:49.663Z",
	"tokensScored": 21652,
	"verdictsIssued": 21652,
	"safe": 18464,
	"risky": 1523,
	"likelyRug": 1665,
	"ticks": 1220
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "e81e3aad08f7",
		"ts": "2026-10-28T10:17:45.936Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 158524828.06,
		"hash": "e81e3aad08f7850a4ad00ba6a7351e7b950f6e85c8cce52a5f43472662066dd9"
	},
	{
		"id": "05583700a1c5",
		"ts": "2026-10-28T10:17:46.254Z",
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
		"liquidityUsd": 16761967.04,
		"hash": "05583700a1c5f0e5dfc19827d8f6eb72eb6f22abd9782f57ae60d324a973cfc0"
	},
	{
		"id": "1ffe7ea1d94d",
		"ts": "2026-10-28T10:17:46.497Z",
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
		"liquidityUsd": 266528.7,
		"hash": "1ffe7ea1d94d4fd16125ee4bd4908e82539a519fe02db43393ad994589df08f6"
	},
	{
		"id": "a9bd94c412c5",
		"ts": "2026-10-28T10:17:46.697Z",
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
		"liquidityUsd": 7235654.87,
		"hash": "a9bd94c412c54bef31a7a4b556e2c72d62cd1d79fe95903d5184dbc98bde7826"
	},
	{
		"id": "ba757b4edd4c",
		"ts": "2026-10-28T10:17:46.905Z",
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
		"liquidityUsd": 1264787.95,
		"hash": "ba757b4edd4ca156ce6ce049065ba976e5d832a3c809c1a492ec35e5ca7723bd"
	},
	{
		"id": "fbedbd63699a",
		"ts": "2026-10-28T10:17:47.089Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1130100.16,
		"hash": "fbedbd63699a018da8d16e55df64c720e15e587b21ae8d780073ff3c6ae67e9c"
	},
	{
		"id": "435133c2ad16",
		"ts": "2026-10-28T10:17:47.285Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 7235654.87,
		"hash": "435133c2ad164d66766f9a5f4e7432b4e133fe60dc8bc989aad58801df80d870"
	},
	{
		"id": "a13019f091ca",
		"ts": "2026-10-28T10:17:47.482Z",
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
		"liquidityUsd": 1737789.19,
		"hash": "a13019f091caa961dd99af9aee91db52fe6539c644223104638081b832c89f72"
	},
	{
		"id": "0685a3a84ce8",
		"ts": "2026-10-28T10:17:47.678Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h"
		],
		"liquidityUsd": 256025.23,
		"hash": "0685a3a84ce89f14c49ced9c835d28c45eab01cf892e20fa1dfa821d636202a4"
	},
	{
		"id": "fe6af7399ac0",
		"ts": "2026-10-28T10:17:47.878Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2493749.1,
		"hash": "fe6af7399ac0fbae21f916d7a248e9a04134012c3cf597e5ff231dc70c58e3e3"
	},
	{
		"id": "9721f4f1ee4e",
		"ts": "2026-10-28T10:17:48.076Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1168170.85,
		"hash": "9721f4f1ee4e0a49868326a6f7c584906dbe6a2d7629d946dd899ec97af561e0"
	},
	{
		"id": "6ba8a9e205ac",
		"ts": "2026-10-28T10:17:48.260Z",
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
		"liquidityUsd": 492179.92,
		"hash": "6ba8a9e205ac5c866705ce13e528abd936bd45a47a37d2e03a4154df17377022"
	},
	{
		"id": "8200f954a856",
		"ts": "2026-10-28T10:17:48.471Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1842996.79,
		"hash": "8200f954a856833080a0f7984ab2f440742a721dd0896a1d5653d564707b6ab7"
	},
	{
		"id": "2009ff21bd26",
		"ts": "2026-10-28T10:17:48.677Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4677631.01,
		"hash": "2009ff21bd26672ca942cc5fb508055294b79d6d788b126aee5cade7be97ff3d"
	},
	{
		"id": "8a79ac77203b",
		"ts": "2026-10-28T10:17:48.865Z",
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
		"liquidityUsd": 8366525.83,
		"hash": "8a79ac77203bcbddc5610172a3d54123f65fce49a02e9a62e21138c55d4d0d74"
	},
	{
		"id": "769c5671ef4b",
		"ts": "2026-10-28T10:17:49.076Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 507646.32,
		"hash": "769c5671ef4b190e2774ac7e7ca1c6ed6d899b4a36ecedb014d2e8faf9551fb0"
	},
	{
		"id": "bb026477b7a5",
		"ts": "2026-10-28T10:17:49.267Z",
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
		"liquidityUsd": 1051196.21,
		"hash": "bb026477b7a51f3bb1d776281845138c0ec2ecb4bc5d3e2f7e746b80db762421"
	},
	{
		"id": "9534628bc933",
		"ts": "2026-10-28T10:17:49.463Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 531704.91,
		"hash": "9534628bc93325e885bb64dece697775121f1bc9eae09c9e42f4fc28b0118aac"
	},
	{
		"id": "9faf2fd49c5e",
		"ts": "2026-10-28T10:17:49.663Z",
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
		"liquidityUsd": 3046869.62,
		"hash": "9faf2fd49c5e86e308b3f96cf6d8daf961985e9abd6294e64f35454af00d9e49"
	},
	{
		"id": "1cc39e942bc5",
		"ts": "2026-10-28T03:48:36.044Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 158236587.77,
		"hash": "1cc39e942bc5dc86be85c907d65bf0d6b2a67d41207fbf429dd0b155e0155a8a"
	},
	{
		"id": "e2d91ce788bc",
		"ts": "2026-10-28T03:48:36.258Z",
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
		"liquidityUsd": 16721716.44,
		"hash": "e2d91ce788bce4b8c632f56b849a7806d993296c8a71993baa4e9fb0bbd01d5b"
	},
	{
		"id": "989004b0ad53",
		"ts": "2026-10-28T03:48:36.470Z",
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
		"liquidityUsd": 262873.5,
		"hash": "989004b0ad53e9be94c3c835bf6ee5e10abdaa3965a34f646c9d8e8aecc7ddbd"
	},
	{
		"id": "4daed4289e34",
		"ts": "2026-10-28T03:48:36.736Z",
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
		"liquidityUsd": 6950197.06,
		"hash": "4daed4289e34469e9d8b4cf4b56d9b983d72294eeda381c5b35e992a7f1fbb3d"
	},
	{
		"id": "6e77088cb6ec",
		"ts": "2026-10-28T03:48:36.932Z",
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
		"liquidityUsd": 1263694.1,
		"hash": "6e77088cb6ecdb5e37ad529877e357963ad89cbc8da6fea2bb42127624a88d33"
	},
	{
		"id": "413fda8653bf",
		"ts": "2026-10-28T03:48:37.150Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1133076.61,
		"hash": "413fda8653bfb7e663e61eb875e3b9ade05288c2a3ce27b470c1c90975fc0d13"
	},
	{
		"id": "4fa7a9c66d0d",
		"ts": "2026-10-28T03:48:37.344Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6950197.06,
		"hash": "4fa7a9c66d0d0c1d5a09fd7d0566acd1d43087ef899b9a01c4cbe7a85a36ceeb"
	},
	{
		"id": "cef443fc5549",
		"ts": "2026-10-28T03:48:37.553Z",
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
		"liquidityUsd": 1732903.59,
		"hash": "cef443fc554956184ea7fb7f07fbd57dfaa624e6a8c3d16825fac658934b77d0"
	},
	{
		"id": "31392f230180",
		"ts": "2026-10-28T03:48:37.745Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h"
		],
		"liquidityUsd": 256025.23,
		"hash": "31392f230180b4940f65beba81f5fe167be5f8800334afafaf6fb716db0eab31"
	},
	{
		"id": "59704ea35d8f",
		"ts": "2026-10-28T03:48:37.968Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2465654.86,
		"hash": "59704ea35d8fac877c5875539658f44cb6f79ebb7f78159b145aec13ec75dd38"
	},
	{
		"id": "76dcf520a781",
		"ts": "2026-10-28T03:48:38.176Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1837603.19,
		"hash": "76dcf520a78119e0aa221640c71ef1892254847c68397581b33eade310610a45"
	},
	{
		"id": "aae619d12a84",
		"ts": "2026-10-28T03:48:38.375Z",
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
		"liquidityUsd": 505003.25,
		"hash": "aae619d12a844f273493a9162e7622da8b79d1f6caae3aa5c9ecec44f89eb1fb"
	},
	{
		"id": "1164ed0c8832",
		"ts": "2026-10-28T03:48:38.575Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1136139.3,
		"hash": "1164ed0c8832c3837bcfacbc86fc1bd1a4d89b6ade49d31ad2583774add5968d"
	},
	{
		"id": "a94090c46983",
		"ts": "2026-10-28T03:48:38.788Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4673899.93,
		"hash": "a94090c46983357273dd4ae1b8f7b240f1d1256277d3b7fc59b92ed5f5d3f7d2"
	},
	{
		"id": "aab8d746c267",
		"ts": "2026-10-28T03:48:38.987Z",
		"symbol": "wIRON",
		"token": "0x166e70941262AE7cBf9df5c8897A6242c546457d",
		"score": 5,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.9,
		"flags": [
			"low_liquidity",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 3250.34,
		"hash": "aab8d746c2672119f91d8cfac5c73290943a6629fb8f143160d798b9dc451528"
	},
	{
		"id": "0b3560e0f276",
		"ts": "2026-10-28T03:48:39.196Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 513080.06,
		"hash": "0b3560e0f276f23e76c8c77e0fb3ee64c3d3455ce13b7f88e30d5c4f3af8dd2c"
	},
	{
		"id": "35dc0214cef2",
		"ts": "2026-10-28T03:48:39.391Z",
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
		"liquidityUsd": 8523930.13,
		"hash": "35dc0214cef2b3c2590670341a1bdd69b5bbd8c68a9dd89c071c2c0c5fc8d224"
	},
	{
		"id": "3cf2d34241b9",
		"ts": "2026-10-28T03:48:39.608Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3775909.08,
		"hash": "3cf2d34241b9a19027120c3b2e950aee14c726dfb0e1e8a0d56e47a3e88a299a"
	},
	{
		"id": "77ea593431d9",
		"ts": "2026-10-28T03:48:39.794Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 523770.17,
		"hash": "77ea593431d9250a5ff4a782ad16ec3979420039fa82f0724afc5c24b6a476fb"
	},
	{
		"id": "3cdb2a518fa6",
		"ts": "2026-10-27T23:26:09.706Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 157670484.08,
		"hash": "3cdb2a518fa6fb6f0204748cdb778764a7187e7ca7ec83ff192a0c344b13caa0"
	},
	{
		"id": "fdc27b045a97",
		"ts": "2026-10-27T23:26:10.402Z",
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
		"liquidityUsd": 16620623.51,
		"hash": "fdc27b045a97f3638c2b6567e2007d4f6f560cee67565512e44693faddb812da"
	},
	{
		"id": "e29a710bbf60",
		"ts": "2026-10-27T23:26:10.681Z",
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
		"liquidityUsd": 260885.4,
		"hash": "e29a710bbf602d57bcbe5d4124808c22c607730d996beb4603dec67dbdf4a987"
	},
	{
		"id": "266a4f39f86e",
		"ts": "2026-10-27T23:26:10.961Z",
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
		"liquidityUsd": 6957513.68,
		"hash": "266a4f39f86e625c43ca796bd7d8ccb498211931c35b9e72556b5591555be997"
	},
	{
		"id": "3f9211f165ad",
		"ts": "2026-10-27T23:26:11.234Z",
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
		"liquidityUsd": 2154541.73,
		"hash": "3f9211f165ad5243251d3321de007815779b4d8783a33220c4c94ecef76952a6"
	},
	{
		"id": "53426d0689d1",
		"ts": "2026-10-27T23:26:11.493Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1115595.79,
		"hash": "53426d0689d121c9b27a17c4968cec9bc6631ad161ca953254680005588671c4"
	},
	{
		"id": "bc7789536192",
		"ts": "2026-10-27T23:26:11.758Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6957513.68,
		"hash": "bc77895361924f9b28dd12e259a8e844f329ce163db41e54e1221247478f89e1"
	},
	{
		"id": "a73cd1ea6ce0",
		"ts": "2026-10-27T23:26:12.026Z",
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
		"liquidityUsd": 1723658.89,
		"hash": "a73cd1ea6ce05e3b2b0612a74d381e3d9c08f05daa39a998c0de95d3a1600b6a"
	},
	{
		"id": "4da21c4e370e",
		"ts": "2026-10-27T23:26:12.294Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h"
		],
		"liquidityUsd": 256025.23,
		"hash": "4da21c4e370ea27631c84499a4183d400ec4d3b57c3c7416c1e530062ba35266"
	},
	{
		"id": "70a850a0eee9",
		"ts": "2026-10-27T23:26:12.557Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2471447.99,
		"hash": "70a850a0eee9c62784c6932d105d1b0c01878730eae337c6c2000f5b8bf38e3d"
	},
	{
		"id": "fc652434e51e",
		"ts": "2026-10-27T23:26:12.861Z",
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
		"liquidityUsd": 1822511.74,
		"hash": "fc652434e51e13f5ecfd39952b2e8993d6322761a68d3c46f67bc8298dae558b"
	},
	{
		"id": "be6cc85b4987",
		"ts": "2026-10-27T23:26:13.106Z",
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
		"liquidityUsd": 490026.91,
		"hash": "be6cc85b4987a31b2740f6d3101cd6e976b02c8687791496a844ccd47c2b086c"
	},
	{
		"id": "7f9c9e02a165",
		"ts": "2026-10-27T23:26:13.349Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1127996.32,
		"hash": "7f9c9e02a165014e6d9210a4a6a7d75632d7fb1f0c8ca5e8a4cc74bfaca0dc35"
	},
	{
		"id": "468a03a5d907",
		"ts": "2026-10-27T23:26:13.595Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4652552.17,
		"hash": "468a03a5d90760b9d15362661398aa65fa9d124f1a74ae083f8fac6597debaba"
	},
	{
		"id": "dec7ee9ed396",
		"ts": "2026-10-27T23:26:13.842Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 523099.53,
		"hash": "dec7ee9ed39651beff2034ff8666e2c66e378b5d9eb1d3c791d11bd6cc285d54"
	},
	{
		"id": "5b777af165e1",
		"ts": "2026-10-27T23:26:14.088Z",
		"symbol": "wIRON",
		"token": "0x166e70941262AE7cBf9df5c8897A6242c546457d",
		"score": 5,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.9,
		"flags": [
			"low_liquidity",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 3250.34,
		"hash": "5b777af165e18eb3df299eb9bd0bf28f6b1c52de2f067016dded54e78b39122e"
	},
	{
		"id": "01a81eb4d0a5",
		"ts": "2026-10-27T23:26:14.332Z",
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
		"liquidityUsd": 8627838.1,
		"hash": "01a81eb4d0a5bc7a59f30a5c32053c4d43c7df30dc353b656c43320dcf298a87"
	},
	{
		"id": "b5e159cfedac",
		"ts": "2026-10-27T23:26:14.578Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3730219.98,
		"hash": "b5e159cfedac6f71db2ef785f345418338116ab23021d3ae816fdb5e7454f7b6"
	},
	{
		"id": "d5e6b35c92dc",
		"ts": "2026-10-27T23:26:14.823Z",
		"symbol": "Paper",
		"token": "0xF5954f33798529917c4940317cAdA852f00C9B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10639278,
		"hash": "d5e6b35c92dc4bcf8f073ee83c17ba68bd415f2eb16c178328c23a51971374d0"
	},
	{
		"id": "9b438bc6953a",
		"ts": "2026-10-27T19:11:06.247Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 157653080.12,
		"hash": "9b438bc6953a0b92593ef4f385a899b775b46dc076dfc1c30db978ee991ca56e"
	},
	{
		"id": "86133c0856d0",
		"ts": "2026-10-27T19:11:06.510Z",
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
		"liquidityUsd": 16603347.95,
		"hash": "86133c0856d0ba16560328d1e8617e0ff16448c479fb30d81c1bb8a5370bd94e"
	},
	{
		"id": "f1a8a93927cd",
		"ts": "2026-10-27T19:11:06.774Z",
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
		"liquidityUsd": 260937.63,
		"hash": "f1a8a93927cda6b34115103cba7f02bf6c4ae8fbfb4ecd022a92352e2b0ffb7b"
	},
	{
		"id": "79f695402457",
		"ts": "2026-10-27T19:11:07.040Z",
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
		"liquidityUsd": 6999880.52,
		"hash": "79f6954024573248a03ccd934bbc11a556bd09a929d63841cbbc797baa2b8fda"
	},
	{
		"id": "b9a1bed064d8",
		"ts": "2026-10-27T19:11:07.300Z",
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
		"liquidityUsd": 2146929.07,
		"hash": "b9a1bed064d8fa466da3c5eeb5e68711147c5ba57e3b538a1de94757016a203d"
	},
	{
		"id": "78146ce84523",
		"ts": "2026-10-27T19:11:07.565Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1116048.09,
		"hash": "78146ce8452302c532ad269b029a58a9f9f25428ce859c502b952651ebf64168"
	},
	{
		"id": "3fec6faad010",
		"ts": "2026-10-27T19:11:07.828Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6999880.52,
		"hash": "3fec6faad01004894e0848742e0674ea3949c4186a92a8197e4ba3440937841b"
	},
	{
		"id": "4249e70e4f46",
		"ts": "2026-10-27T19:11:08.086Z",
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
		"liquidityUsd": 1722547.34,
		"hash": "4249e70e4f46047849442c99a8461e1b1405904602792c9d3ba21594d8273ace"
	},
	{
		"id": "aa1675539559",
		"ts": "2026-10-27T19:11:08.344Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h"
		],
		"liquidityUsd": 261462.23,
		"hash": "aa16755395592a5e74005bb661350192fe9f41edbfc488eb3ccaa31e5b3c4c9a"
	},
	{
		"id": "0566a1c16875",
		"ts": "2026-10-27T19:11:08.603Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2476295.44,
		"hash": "0566a1c16875b1598a76891584437dbae74e67fcc02bd84933fbf50691e7352d"
	},
	{
		"id": "3228c5f62c6e",
		"ts": "2026-10-27T19:11:08.833Z",
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
		"liquidityUsd": 1826395.59,
		"hash": "3228c5f62c6eb9570117af631a4190cde996a441aae345c1fe9f67a45286d087"
	},
	{
		"id": "aabd893274fd",
		"ts": "2026-10-27T19:11:09.072Z",
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
		"liquidityUsd": 476495.27,
		"hash": "aabd893274fd1407b8b3ba1fb04893696417f2db34035f902190e4f4b684ed7a"
	},
	{
		"id": "16460e10fc81",
		"ts": "2026-10-27T19:11:09.309Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4645947.42,
		"hash": "16460e10fc81ef3e694e2fed7e96cf5f5bb9c9d766a852b8eff9d4324743fedc"
	},
	{
		"id": "7a29972f4476",
		"ts": "2026-10-27T19:11:09.538Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1140501.76,
		"hash": "7a29972f44766816c3bd6dd24b5443b80e19a2682d425b75ac1ad8d5d279f8a2"
	},
	{
		"id": "a1f3a526746e",
		"ts": "2026-10-27T19:11:09.775Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 530162.48,
		"hash": "a1f3a526746ea33d32309c9a878723481346cf5742c2adccb43f376cfe925030"
	},
	{
		"id": "1ba0581e7648",
		"ts": "2026-10-27T19:11:10.011Z",
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
		"liquidityUsd": 8669554.9,
		"hash": "1ba0581e7648b8b18af3fbdce669df23bbbbd87f6f83f2e0bb70854a376ddf6b"
	},
	{
		"id": "b2cdea07da17",
		"ts": "2026-10-27T19:11:10.238Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3728504.51,
		"hash": "b2cdea07da17e8b924ebc90036b2809027d48758e072c7503e2fd4c63140589b"
	},
	{
		"id": "118c5c3fb184",
		"ts": "2026-10-27T19:11:10.477Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 551098.44,
		"hash": "118c5c3fb18470418486d582bcdf404372a5d8fb9be0e1f23e8c57e3e06d2fdc"
	},
	{
		"id": "540746753bc9",
		"ts": "2026-10-27T19:11:10.734Z",
		"symbol": "Paper",
		"token": "0xF5954f33798529917c4940317cAdA852f00C9B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10639275.74,
		"hash": "540746753bc96132ef25aa96e71ac0c63f81d5017fe276acc8eef8c486ed44ea"
	},
	{
		"id": "25b91356abc7",
		"ts": "2026-10-27T19:11:10.957Z",
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
		"liquidityUsd": 3060312.26,
		"hash": "25b91356abc7fdb316f9cb6ac3e73ceacf7c4ac50db506a461f759a05a41c4bb"
	},
	{
		"id": "2fd33ddff693",
		"ts": "2026-10-27T13:54:02.307Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156481639.96,
		"hash": "2fd33ddff6936e16908015717ea1c760c9dc8a372307a1e22cedb1fb0fa3e24f"
	},
	{
		"id": "7aa5a059ec7d",
		"ts": "2026-10-27T13:54:02.567Z",
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
		"liquidityUsd": 16304236.82,
		"hash": "7aa5a059ec7d58d104d66c466ae0ddb52fceea74b12a16cc72950ca879c26880"
	},
	{
		"id": "87e0353d4791",
		"ts": "2026-10-27T13:54:02.821Z",
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
		"liquidityUsd": 257862.43,
		"hash": "87e0353d4791da16db9f9adb818743d775993c290e7040c92f28716a6dc1408f"
	},
	{
		"id": "96bf6a23d7b0",
		"ts": "2026-10-27T13:54:03.080Z",
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
		"liquidityUsd": 7014660.79,
		"hash": "96bf6a23d7b0f2dcde6814f7264242b0b25c012e47d5714c00676e957e6c569b"
	},
	{
		"id": "234f0c8fdb0d",
		"ts": "2026-10-27T13:54:03.354Z",
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
		"liquidityUsd": 2119498.1,
		"hash": "234f0c8fdb0dca28537f8cfeb8b828758996ff0a3039613e63b2c383fcde44a4"
	},
	{
		"id": "e58fbd4768a8",
		"ts": "2026-10-27T13:54:03.602Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1101871.86,
		"hash": "e58fbd4768a899c6284a81f030ae4695b5f0266266917ed851cd6ad4226d17ff"
	},
	{
		"id": "ed4eb9cf0e20",
		"ts": "2026-10-27T13:54:03.857Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 7013030.98,
		"hash": "ed4eb9cf0e2099a21c0af66cc9c5277919c7f8777a8a793403ffdbfd474978d4"
	},
	{
		"id": "0a3e99453f0c",
		"ts": "2026-10-27T13:54:04.111Z",
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
		"liquidityUsd": 1708313.92,
		"hash": "0a3e99453f0c02407e71a1b0b29723014c290322b5fb95a5c3fc26fa4671b568"
	},
	{
		"id": "0674353f5638",
		"ts": "2026-10-27T13:54:04.378Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2470294.64,
		"hash": "0674353f56382a99cddabec74916746809955b1125f3b694f825a7a290778123"
	},
	{
		"id": "9e3ba1c9144f",
		"ts": "2026-10-27T13:54:04.627Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 180816.41,
		"hash": "9e3ba1c9144fdb7909b3200d01dea81d7d87fe61e0e36a41afe278a7bd66e61a"
	},
	{
		"id": "91e692048b9b",
		"ts": "2026-10-27T13:54:04.850Z",
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
		"liquidityUsd": 1830095.15,
		"hash": "91e692048b9b65c47cde25e9ea200162873683bf539dc606099ebbe875ad5d10"
	},
	{
		"id": "c7ae89cfb225",
		"ts": "2026-10-27T13:54:05.079Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1147112.43,
		"hash": "c7ae89cfb22500408d1df4a5668221fc55aba1f0434d3b77e99f09b36726cd45"
	},
	{
		"id": "be2a8cac8029",
		"ts": "2026-10-27T13:54:05.303Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4758234.04,
		"hash": "be2a8cac8029ec619d36c84201451dc07e66fda1bcf9c4412bd8c0506ff0a432"
	},
	{
		"id": "0d4dba834647",
		"ts": "2026-10-27T13:54:05.529Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 524384.4,
		"hash": "0d4dba8346471bb172236d4283a5d392edccb2e2d64fdbc42c92a65ca053a077"
	},
	{
		"id": "dbe11db89a9f",
		"ts": "2026-10-27T13:54:05.807Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3696731.43,
		"hash": "dbe11db89a9ff4d853cd427894aca41a2ceeb0e9d4c463e84b1161411c3a6b3a"
	},
	{
		"id": "b5a54441d5e4",
		"ts": "2026-10-27T13:54:06.035Z",
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
		"liquidityUsd": 8548490.44,
		"hash": "b5a54441d5e44583c749aaa8b8aa0c08fb0630212e2d81fe7c51ef45944a5975"
	},
	{
		"id": "2478377903d1",
		"ts": "2026-10-27T13:54:06.262Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 540704.74,
		"hash": "2478377903d1a216b3cd3da1d28672ddef20c4e9be6f7c0196e023824022d3c9"
	},
	{
		"id": "e25ff7a1b4a7",
		"ts": "2026-10-27T13:54:06.488Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 1215916.06,
		"hash": "e25ff7a1b4a70a8ed72e19234b2dc1dc8e55bf33881d0fc82dab32f13e68b3ea"
	},
	{
		"id": "dc4af9df8d81",
		"ts": "2026-10-27T13:54:06.713Z",
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
		"liquidityUsd": 3043885.68,
		"hash": "dc4af9df8d816420e707438d60629babbfee9d713c5ad62e9f9c26b60a986657"
	},
	{
		"id": "38ccc89c4025",
		"ts": "2026-10-27T07:13:37.251Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 155378363.55,
		"hash": "38ccc89c40251ba8ca41495039b3ad812390c42322fd7eb39a6bdcc4e122a76e"
	},
	{
		"id": "38aa935da606",
		"ts": "2026-10-27T07:13:37.961Z",
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
		"liquidityUsd": 16034744.92,
		"hash": "38aa935da606c8805dbe9fb93d4ffaabb97eb0c25068fcd70167f4a40a0bfbae"
	},
	{
		"id": "fd58f0a5a1de",
		"ts": "2026-10-27T07:13:38.227Z",
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
		"liquidityUsd": 253366.78,
		"hash": "fd58f0a5a1de8ac7e1f1179aa537e86e7ce157ae9a7393ecb741d1ffa1df007d"
	},
	{
		"id": "7c5f54f9073e",
		"ts": "2026-10-27T07:13:38.504Z",
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
		"liquidityUsd": 6940122.16,
		"hash": "7c5f54f9073e66b92e4e2024334f7815105a4828adcc8283bbd8a6253f002a4b"
	},
	{
		"id": "e8459ded8974",
		"ts": "2026-10-27T07:13:38.778Z",
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
		"liquidityUsd": 2008519.51,
		"hash": "e8459ded897465eaeffd3bda3411a380b2bbea7dcf4a5b67f24e9a2928d2751b"
	},
	{
		"id": "8c3a7f992546",
		"ts": "2026-10-27T07:13:39.037Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1095396.54,
		"hash": "8c3a7f9925464ceae015e4375e8e69b0a13376b2398b108444bbc0534085b453"
	},
	{
		"id": "fbd1dcd57393",
		"ts": "2026-10-27T07:13:39.298Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2467942.52,
		"hash": "fbd1dcd57393a2e45759c61b051fd5719fe54eaac0a6fc18b249ae97b42dff55"
	},
	{
		"id": "8d543e3ead69",
		"ts": "2026-10-27T07:13:39.565Z",
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
		"liquidityUsd": 1980834.86,
		"hash": "8d543e3ead69fc68f77a9a509c21ee3a55b26550940a20f5ebe39255a5c282c9"
	},
	{
		"id": "2fbf8aefa9cc",
		"ts": "2026-10-27T07:13:39.857Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2467942.52,
		"hash": "2fbf8aefa9cc5175c56e50af56fece013c5ec6197aa83c8ee4d3a3322ea67728"
	},
	{
		"id": "8c3daa8b2da8",
		"ts": "2026-10-27T07:13:40.116Z",
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
		"liquidityUsd": 1849281.82,
		"hash": "8c3daa8b2da874eaba8cb23b9479b31c7aac39a4864a54513a734ce102cb8e48"
	},
	{
		"id": "2ee8dde7616f",
		"ts": "2026-10-27T07:13:40.362Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1131884.43,
		"hash": "2ee8dde7616fa8a187f6de135a9809e6790f64aa6a9534dd74d24c715bc334b6"
	},
	{
		"id": "c96dfd250649",
		"ts": "2026-10-27T07:13:40.612Z",
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
		"liquidityUsd": 3003934.25,
		"hash": "c96dfd250649153e894e6c538a53a9781e93d9651254809ae5eff8ce14cb28d8"
	},
	{
		"id": "7eb0cd9fdf11",
		"ts": "2026-10-27T07:13:40.865Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3632496.13,
		"hash": "7eb0cd9fdf119d91c78ca3fc9a2a433919d70ba6811e74c00bdedcc74b5f515a"
	},
	{
		"id": "985022f4254a",
		"ts": "2026-10-27T07:13:41.127Z",
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
		"liquidityUsd": 8352894.95,
		"hash": "985022f4254a9f95ac012abd1b6064396c1b7c4acd67dd61f2d0261f5f731acf"
	},
	{
		"id": "8c62a1bbe8ba",
		"ts": "2026-10-27T07:13:41.372Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4096025.6,
		"hash": "8c62a1bbe8ba077de6098664733710240e06b73703dbada47e346059632838de"
	},
	{
		"id": "5c633eaa8eee",
		"ts": "2026-10-27T07:13:41.621Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 149025.03,
		"hash": "5c633eaa8eee144e41c3f36a5d0ec04ffe9baf124c7e11462aeb247ecaec019e"
	},
	{
		"id": "dfe25fc673a1",
		"ts": "2026-10-27T07:13:41.863Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 541945.18,
		"hash": "dfe25fc673a191cb0eb8e8e9c1063d709398f2d6607a136c075b2daa9d303532"
	},
	{
		"id": "03643c00e276",
		"ts": "2026-10-27T07:13:42.108Z",
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
		"liquidityUsd": 175955.67,
		"hash": "03643c00e276aad4c144f80e42dceda38974153f14a0182b8677248ba23d4963"
	},
	{
		"id": "42fa5d3cb96c",
		"ts": "2026-10-27T07:13:42.353Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 677735.14,
		"hash": "42fa5d3cb96cc688830da1d7ba8559182af01757917d360c7ef6938366af2f17"
	},
	{
		"id": "1c3f7f14d5e9",
		"ts": "2026-10-27T01:04:03.552Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156381454.22,
		"hash": "1c3f7f14d5e905a573368b1338758914b66d8b0dcade029b556b507bbf78fe1b"
	},
	{
		"id": "24da61564689",
		"ts": "2026-10-27T01:04:03.843Z",
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
		"liquidityUsd": 16077706.23,
		"hash": "24da615646895cc020e827d2b1ff1078fb20e24bf30501723077ee2c5be92a12"
	},
	{
		"id": "56321d670195",
		"ts": "2026-10-27T01:04:04.123Z",
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
		"liquidityUsd": 254304.9,
		"hash": "56321d6701955f5e460b3e27d3cdf068c840a85bd29bd1e8b0cdcb20761815f8"
	},
	{
		"id": "689c691af161",
		"ts": "2026-10-27T01:04:04.432Z",
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
		"liquidityUsd": 7033584.6,
		"hash": "689c691af161c8e6a4e49a86ca0d29e33598418b768389e482d0b1a90a83bf24"
	},
	{
		"id": "c43866c9e57d",
		"ts": "2026-10-27T01:04:04.726Z",
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
		"liquidityUsd": 2071046.74,
		"hash": "c43866c9e57d35427a5b24dd7de5fdcc862ad1842602c149f55ccd310935f17b"
	},
	{
		"id": "1aa2ec5dfa80",
		"ts": "2026-10-27T01:04:05.014Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1109040.13,
		"hash": "1aa2ec5dfa80a4c325302ea23895492d7dc3671a5972c5d6bcf4ca6a419aea7a"
	},
	{
		"id": "b59b5b0c20c2",
		"ts": "2026-10-27T01:04:05.289Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2466717.39,
		"hash": "b59b5b0c20c28c7b96de93229344e04f8c555a9e27d6b508e6c1ce71313ee7d1"
	},
	{
		"id": "cb6d43b2495c",
		"ts": "2026-10-27T01:04:05.566Z",
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
		"liquidityUsd": 1829840.74,
		"hash": "cb6d43b2495c7dd71a339c1fbec9c6231c4d9fcafc5c87a8bed3e6b30e517243"
	},
	{
		"id": "efeb8736f503",
		"ts": "2026-10-27T01:04:05.839Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2466717.39,
		"hash": "efeb8736f503b8e30e22cb85a473a04878e40aceb8323a6c6d90ef446751359a"
	},
	{
		"id": "b99293e4deee",
		"ts": "2026-10-27T01:04:06.109Z",
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
		"liquidityUsd": 1829046.44,
		"hash": "b99293e4deee57484fecf6d01875b94b2b08f4ee2a70138834296ef6caea89e5"
	},
	{
		"id": "0ba61a921730",
		"ts": "2026-10-27T01:04:06.371Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1148263.79,
		"hash": "0ba61a9217309eb7828608a7020beed75e2d6e440573b521127f55687e3f4bf2"
	},
	{
		"id": "4dcc4ee06904",
		"ts": "2026-10-27T01:04:06.631Z",
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
		"liquidityUsd": 3041550.25,
		"hash": "4dcc4ee06904c0ae7bd529ea4a6891c5520c85909f1038e8d148173d24dbbb7d"
	},
	{
		"id": "e7a83e9c5f1a",
		"ts": "2026-10-27T01:04:06.888Z",
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
		"liquidityUsd": 8689556.7,
		"hash": "e7a83e9c5f1a8b9e2975ce6a2bbf9fe0745d0aea85fac619aa71dc8091daff2f"
	},
	{
		"id": "43975a9d8da5",
		"ts": "2026-10-27T01:04:07.143Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 148399.45,
		"hash": "43975a9d8da56625692c40eb3365e69f7a92bdd41605960c402be7737dd77a5e"
	},
	{
		"id": "0c5bd60b24fa",
		"ts": "2026-10-27T01:04:07.399Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 546877.42,
		"hash": "0c5bd60b24fa100dd27be72394359bbf2f36c2b61f6f4fa10d394d92853ebd82"
	},
	{
		"id": "1c622a77dc38",
		"ts": "2026-10-27T01:04:07.655Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3787235.66,
		"hash": "1c622a77dc38662250412532affee2c8ccac717ef111db980d99f945ecd67d48"
	},
	{
		"id": "0881ce84993f",
		"ts": "2026-10-27T01:04:07.919Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 678315.01,
		"hash": "0881ce84993f6e7d297e5db080bdad5dd10db1b82caa3794c09cee11e30abbad"
	},
	{
		"id": "03e23c3545b6",
		"ts": "2026-10-27T01:04:08.177Z",
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
		"liquidityUsd": 234314.13,
		"hash": "03e23c3545b691a1a3bee1f4e3d8ccc9b66097edf251118efefa04684dd09f64"
	},
	{
		"id": "49c2fafde05a",
		"ts": "2026-10-27T01:04:08.435Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4276616.68,
		"hash": "49c2fafde05aff4be28b6ba6dfdfdb361999d4c8cfe3e11826e6686ce87439da"
	},
	{
		"id": "9e2d9dca4166",
		"ts": "2026-10-26T21:18:06.696Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156380087.34,
		"hash": "9e2d9dca41661085c50bb3d4d9cce41924898cbe165d5bec21cf7c66f0da9a7b"
	},
	{
		"id": "be40f2c556c2",
		"ts": "2026-10-26T21:18:07.399Z",
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
		"liquidityUsd": 16607282.56,
		"hash": "be40f2c556c29900d952126ef21c72b5914eb03b252c3ea7be7378630d10a173"
	},
	{
		"id": "e6fedaa93a65",
		"ts": "2026-10-26T21:18:07.691Z",
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
		"liquidityUsd": 254536.5,
		"hash": "e6fedaa93a65e536312ed9791a4c472320423c284ee0922a26b5a94452eeca29"
	},
	{
		"id": "d8bd4adb875d",
		"ts": "2026-10-26T21:18:07.957Z",
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
		"liquidityUsd": 7022438.35,
		"hash": "d8bd4adb875d31e89e27fe60c3f2edfd7c6bbed5c850b241409b41dc26270230"
	},
	{
		"id": "7a81a631045e",
		"ts": "2026-10-26T21:18:08.240Z",
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
		"liquidityUsd": 2100441.92,
		"hash": "7a81a631045eb4db6d95d13bc5fe6c3b0ed26880a8498fc6e4cdfd2fbd5b4114"
	},
	{
		"id": "dcbf77d57913",
		"ts": "2026-10-26T21:18:08.505Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1098021,
		"hash": "dcbf77d57913466838ba7ef883d3c1bd2719052a5f8b67a8d4281b9a411e6b2f"
	},
	{
		"id": "bb96288316d0",
		"ts": "2026-10-26T21:18:08.767Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2468127.72,
		"hash": "bb96288316d0761617536b35ee7afebba53ad408cdea18c4a1d429498bc05aa6"
	},
	{
		"id": "dca1d9f64d85",
		"ts": "2026-10-26T21:18:09.033Z",
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
		"liquidityUsd": 1814197.82,
		"hash": "dca1d9f64d85b772e23463507762c50c920d6d47b00d0b080d122e1b9ae88f6b"
	},
	{
		"id": "d78c9cc545f4",
		"ts": "2026-10-26T21:18:09.300Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2468127.96,
		"hash": "d78c9cc545f429c859cdf6eb47ecab795698c53d9f8c04104449c050ae55f2b8"
	},
	{
		"id": "dea57453fdb4",
		"ts": "2026-10-26T21:18:09.576Z",
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
		"liquidityUsd": 1809267.45,
		"hash": "dea57453fdb499260d6370f9af203571419d5aa4c388cce1567945b45ffe3e20"
	},
	{
		"id": "99a3daca5f64",
		"ts": "2026-10-26T21:18:09.825Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1139350.94,
		"hash": "99a3daca5f64a87164170b1b32070951410ecb266d3b61aa46516db356b8e5e2"
	},
	{
		"id": "645df5f3d7d0",
		"ts": "2026-10-26T21:18:10.071Z",
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
		"liquidityUsd": 2990460.64,
		"hash": "645df5f3d7d0ea56e9f47e6a8155f5f2d6acf7bf3cfc9516a5876b89dba441de"
	},
	{
		"id": "68120aea4fd0",
		"ts": "2026-10-26T21:18:10.317Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 56005.96,
		"hash": "68120aea4fd052697a871ba0092e9851abe612d5921690951f534ed99dff70a2"
	},
	{
		"id": "3c95c3c6713a",
		"ts": "2026-10-26T21:18:10.566Z",
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
		"liquidityUsd": 8814724.43,
		"hash": "3c95c3c6713a6e7dfd65b4f59c2d97cc98695ff40b41adda318bc2707d88d753"
	},
	{
		"id": "81b21eef8b31",
		"ts": "2026-10-26T21:18:10.814Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 251780.8,
		"hash": "81b21eef8b31bf030747daee138c7dabbfd13514ae9501ebb2150a46b2c8a483"
	},
	{
		"id": "568e20fef0f4",
		"ts": "2026-10-26T21:18:11.064Z",
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
		"liquidityUsd": 173894.74,
		"hash": "568e20fef0f43e4b282a358b82d32c21536ca7737518373d0cad6a8eddac7be2"
	},
	{
		"id": "3053f73f8115",
		"ts": "2026-10-26T21:18:11.314Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 680450.91,
		"hash": "3053f73f811530bb7c8bcbb6c21ee0627fe18dbe78b6e19b655ff146fcc46fe8"
	},
	{
		"id": "068fb67a4e7e",
		"ts": "2026-10-26T21:18:11.560Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 551721.12,
		"hash": "068fb67a4e7e1b82e197947905edfe9a6734a08f3ecff56be6f2613b4342348e"
	},
	{
		"id": "aaf27b116e75",
		"ts": "2026-10-26T21:18:11.808Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3762900.04,
		"hash": "aaf27b116e75b3d4e52fde31d16b9e3ea07e187697dd52cee39d0775fb833eaf"
	},
	{
		"id": "75936a911edd",
		"ts": "2026-10-26T16:26:12.447Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 136558214.42,
		"hash": "75936a911edd5fba6fd0af6ceef168e5d8539b7b38094ff02c118600981a4a20"
	},
	{
		"id": "383469903ec1",
		"ts": "2026-10-26T16:26:13.104Z",
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
		"liquidityUsd": 16761180.77,
		"hash": "383469903ec1eae75ed3c9eefe8d137d1624a190c1814cbb710518aff14bb30c"
	},
	{
		"id": "1b5a5e209a49",
		"ts": "2026-10-26T16:26:13.350Z",
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
		"liquidityUsd": 255489.66,
		"hash": "1b5a5e209a4970cf867571272f3283663bc08a46ee5d71ad6ebe425e08a432e5"
	},
	{
		"id": "52331ed42e6b",
		"ts": "2026-10-26T16:26:13.595Z",
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
		"liquidityUsd": 7092438.58,
		"hash": "52331ed42e6b2970e516670de1ba38fc9b1fc73779bd8eb299bf4d8aa83b228f"
	},
	{
		"id": "1e5db33a21ce",
		"ts": "2026-10-26T16:26:13.856Z",
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
		"liquidityUsd": 2075844.85,
		"hash": "1e5db33a21ce8b8c8f9208336c2ded613cd1dcb724e7a51b84832747cfd169eb"
	},
	{
		"id": "0575ec010c9b",
		"ts": "2026-10-26T16:26:14.109Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1106358.69,
		"hash": "0575ec010c9bbd8bb067d30e683f28a6e90c9b16ba3cbf91969093faa91d5fcc"
	},
	{
		"id": "c5aabb5877d0",
		"ts": "2026-10-26T16:26:14.347Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2467494.18,
		"hash": "c5aabb5877d01c27c5288bcc82538812db0f588ae6f2bdfb3715872923ea4665"
	},
	{
		"id": "9507105b8be5",
		"ts": "2026-10-26T16:26:14.592Z",
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
		"liquidityUsd": 1822052.6,
		"hash": "9507105b8be5857f9cf5703190134482b09e7a3a5518fca24416c5d15161e575"
	},
	{
		"id": "39cd4eeccd0e",
		"ts": "2026-10-26T16:26:14.840Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2467486.3,
		"hash": "39cd4eeccd0e8fe4cc32fbe14a08d19b53060207397f2a058a2a7fa2cbe124c1"
	},
	{
		"id": "4842ff2f22b0",
		"ts": "2026-10-26T16:26:15.079Z",
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
		"liquidityUsd": 1814075.55,
		"hash": "4842ff2f22b0433aec8bef6093dcb9bf4031d429e976d84c67e1e856a4234614"
	},
	{
		"id": "3913c775db20",
		"ts": "2026-10-26T16:26:15.305Z",
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
		"liquidityUsd": 8846822.29,
		"hash": "3913c775db20e4384d0d0022dd7895095ccde6f073c4d068fe41762b6d52cdf1"
	},
	{
		"id": "cad49e1474bb",
		"ts": "2026-10-26T16:26:15.532Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1157403.24,
		"hash": "cad49e1474bb01a07c352feba74f5489d072d9e9968b20d4a9e186f6bf438225"
	},
	{
		"id": "0fbdd9021fab",
		"ts": "2026-10-26T16:26:15.758Z",
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
		"liquidityUsd": 3010426.3,
		"hash": "0fbdd9021fab818facbb00a6a8622d954f3da21bd84e19909409010799030183"
	},
	{
		"id": "c347cb3fb4ab",
		"ts": "2026-10-26T16:26:15.998Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 56530.9,
		"hash": "c347cb3fb4ab974daa55d35a6fe14e46287f84f47eb3fe0b6b942790ab7a248e"
	},
	{
		"id": "739c254f4c5a",
		"ts": "2026-10-26T16:26:16.236Z",
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
		"liquidityUsd": 1057453.72,
		"hash": "739c254f4c5ab493e1aade8d88fe4fd7969bda35e54d1bce4ae4a64ce562a30d"
	},
	{
		"id": "d3abab71ab3a",
		"ts": "2026-10-26T16:26:16.462Z",
		"symbol": "PANGEA",
		"token": "0xA551dEF8a44ea423CaA58DA45b3F5764004286Ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 152009.88,
		"hash": "d3abab71ab3a2850ceea208c0902014bd6f48371f3a40f22bb1cab813c517457"
	},
	{
		"id": "e6d748955d6e",
		"ts": "2026-10-26T16:26:16.688Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 676885.84,
		"hash": "e6d748955d6e66d3ad479651c24e50491fb26e0fb260ddcfeae27bf72002e938"
	},
	{
		"id": "90b6289a37b9",
		"ts": "2026-10-26T16:26:16.917Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 260777.97,
		"hash": "90b6289a37b945440586070b7fa97d73fc1105d90c87a17cc3b67929f001661a"
	},
	{
		"id": "5a08ec8d29a1",
		"ts": "2026-10-26T16:26:17.145Z",
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
		"liquidityUsd": 175262.62,
		"hash": "5a08ec8d29a146b5c1dc300a7c8064f7ff97ac66f8f10a60f04b4a7d40d6c70e"
	},
	{
		"id": "34d9ee666071",
		"ts": "2026-10-26T09:38:04.415Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 157726876.16,
		"hash": "34d9ee66607195b90df984212c0d2629655550880a55348e3802c71a6c390c25"
	},
	{
		"id": "5c763e61d673",
		"ts": "2026-10-26T09:38:05.137Z",
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
		"liquidityUsd": 17521562.7,
		"hash": "5c763e61d6737ece1dc66bf17708adb08d20c71a411063fd60ea86e64e4c45f8"
	},
	{
		"id": "78a31bffcb37",
		"ts": "2026-10-26T09:38:05.468Z",
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
		"liquidityUsd": 256314.01,
		"hash": "78a31bffcb37764a4fb78714668bbc61be125bb474d1528a5ff068c8e360b23c"
	},
	{
		"id": "e9df78c49f10",
		"ts": "2026-10-26T09:38:05.735Z",
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
		"liquidityUsd": 7136841.63,
		"hash": "e9df78c49f10df0b88c13bdcc0031a12678586774313de5f7002a7c71e56630d"
	},
	{
		"id": "7f4a1460ef1a",
		"ts": "2026-10-26T09:38:06.017Z",
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
		"liquidityUsd": 2095894.74,
		"hash": "7f4a1460ef1abc69f3780bd009a2d6e18ca665a8d0584d3436a91f6a7d58e76f"
	},
	{
		"id": "9c3ce7212a04",
		"ts": "2026-10-26T09:38:06.287Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1110596.83,
		"hash": "9c3ce7212a04472d0da18f63af60aad6fa65356ce99dbb543c2e939333b2d954"
	},
	{
		"id": "65598aaf762a",
		"ts": "2026-10-26T09:38:06.558Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 7136841.63,
		"hash": "65598aaf762a1d4bd5f229dc81dafb38ee0040b7be5f8b883db32bfb8e8d4951"
	},
	{
		"id": "4a4843ed52a8",
		"ts": "2026-10-26T09:38:06.857Z",
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
		"liquidityUsd": 2201150.89,
		"hash": "4a4843ed52a83ec27f5429d03d3b0494ec921b1bff646cab02f312a0767bd677"
	},
	{
		"id": "5dee47688387",
		"ts": "2026-10-26T09:38:07.130Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2467759.74,
		"hash": "5dee476883875cf9380abfe6189614fcc80758c1ff05bf5be33ea9a7ab8717f3"
	},
	{
		"id": "e7b7bd349ab4",
		"ts": "2026-10-26T09:38:07.393Z",
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
		"liquidityUsd": 1839719.19,
		"hash": "e7b7bd349ab4d50f690bf3d8ac2928396e49d61b5fad6de9293437dc058fedd9"
	},
	{
		"id": "839fed3fe967",
		"ts": "2026-10-26T09:38:07.645Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1161669.8,
		"hash": "839fed3fe967fecece7283cffcac6e79d8f0ab3e3fb8e9ff331526b9969b43a6"
	},
	{
		"id": "170aa56e8d2b",
		"ts": "2026-10-26T09:38:07.895Z",
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
		"liquidityUsd": 8890460.48,
		"hash": "170aa56e8d2b9aadfd3d80ce62b19a9e29df72aee88ef226264e8993ce8c95d7"
	},
	{
		"id": "f01c936f9307",
		"ts": "2026-10-26T09:38:08.142Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 56958.54,
		"hash": "f01c936f930716e7c429199147bf7e38d4a4e381f1ad94837ebd6877736f8f99"
	},
	{
		"id": "3cd5245c4579",
		"ts": "2026-10-26T09:38:08.391Z",
		"symbol": "PANGEA",
		"token": "0xA551dEF8a44ea423CaA58DA45b3F5764004286Ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 158351.99,
		"hash": "3cd5245c457960f1e64acd8483794e17c130fd1beed12c058cda767ed5d3754a"
	},
	{
		"id": "a75c467248f9",
		"ts": "2026-10-26T09:38:08.647Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 513839.22,
		"hash": "a75c467248f99234a908c13c1c184f1048687897c07be4c83eace1313e9974d8"
	},
	{
		"id": "30a45730b8a3",
		"ts": "2026-10-26T09:38:08.905Z",
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
		"liquidityUsd": 1067341.56,
		"hash": "30a45730b8a3747920433903c73c87f7fa36b151553d83e4daa551b6e1dc5733"
	},
	{
		"id": "913cdb86bdf7",
		"ts": "2026-10-26T09:38:09.151Z",
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
		"liquidityUsd": 674740.16,
		"hash": "913cdb86bdf768855a3f91798837679a60813899a35ad37c29e94131e8b1f34e"
	},
	{
		"id": "b0b9a5e8fca7",
		"ts": "2026-10-26T09:38:09.399Z",
		"symbol": "GULD",
		"token": "0x14D6C649292c5c9790c5196D1a9EA039307947a1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1061360.6,
		"hash": "b0b9a5e8fca72fbe3eab757d8c18a632acd6d9c6b52873c19ec31fa7bfaddc65"
	},
	{
		"id": "f107d172ecd3",
		"ts": "2026-10-26T09:38:09.646Z",
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
		"liquidityUsd": 207162.48,
		"hash": "f107d172ecd3f7a134c1f2cc6b86fd4867a3d8c485a13c30ee13634f218fd235"
	},
	{
		"id": "8e3a459c3b87",
		"ts": "2026-10-26T03:00:40.416Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 156348177.4,
		"hash": "8e3a459c3b87258423f3156d4fb38d0a930ec35f206e5f53eee261f9fa4acbec"
	},
	{
		"id": "7f9cb999467f",
		"ts": "2026-10-26T03:00:40.639Z",
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
		"liquidityUsd": 17201609.78,
		"hash": "7f9cb999467f2ed3186342822c6c00fd268855f5ef6799878719b3b2b36b0b77"
	},
	{
		"id": "ec30b00d143c",
		"ts": "2026-10-26T03:00:40.864Z",
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
		"liquidityUsd": 253959.28,
		"hash": "ec30b00d143cc50b3f50cb2e85755e035307806dadbe8be44e19b178bf83949b"
	},
	{
		"id": "bb93b8742595",
		"ts": "2026-10-26T03:00:41.061Z",
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
		"liquidityUsd": 7194621.39,
		"hash": "bb93b8742595d5b2ce0b5d42eff948cb3c008c038fe8a6690484a6f52dffa5cc"
	},
	{
		"id": "a2f85abaac83",
		"ts": "2026-10-26T03:00:41.256Z",
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
		"liquidityUsd": 2033399.24,
		"hash": "a2f85abaac83a0113725923ef5693604fb3427353ae29b7d39d89678589cc66b"
	},
	{
		"id": "65e51fd092d5",
		"ts": "2026-10-26T03:00:41.472Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1104585.72,
		"hash": "65e51fd092d544713230f09a04705f39c06fae303e5fe28386a7ea4160cfa1c0"
	},
	{
		"id": "225631ec5254",
		"ts": "2026-10-26T03:00:41.668Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 7194621.62,
		"hash": "225631ec5254882cfe12aed9aad64ded7ee056372ada0ef0dc3edc21b3cbc929"
	},
	{
		"id": "fbdb413d3717",
		"ts": "2026-10-26T03:00:41.885Z",
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
		"liquidityUsd": 2087230.77,
		"hash": "fbdb413d3717dc7d0152dec342c393fcea9fa43b7c702746ea17229256fba674"
	},
	{
		"id": "f37a465fc803",
		"ts": "2026-10-26T03:00:42.097Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2467962.04,
		"hash": "f37a465fc8039d0b74176369f0f3cc46340797a215f4fb77fd50c28facc8e261"
	}
]
