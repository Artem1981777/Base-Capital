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
	"updatedAt": "2026-07-18T15:52:59.410Z",
	"tokensScored": 4130,
	"verdictsIssued": 4130,
	"safe": 3647,
	"risky": 334,
	"likelyRug": 149,
	"ticks": 253
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "4ca2b4a47ab3",
		"ts": "2026-07-18T15:52:55.523Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106509562.79,
		"hash": "4ca2b4a47ab3c17e1f2f14c10cc4bd3421319193cc7d9c9b4a150dc34fd2dbee"
	},
	{
		"id": "327076c61fb0",
		"ts": "2026-07-18T15:52:55.769Z",
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
		"liquidityUsd": 16316711.57,
		"hash": "327076c61fb054dd83ae975b96a3e8ada5801cf90549b5e3e546d5681e39d736"
	},
	{
		"id": "f5add0d391f8",
		"ts": "2026-07-18T15:52:56.012Z",
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
		"liquidityUsd": 886492.02,
		"hash": "f5add0d391f8cedf29a139b05a721d0e90737668f4bdb1da969d5400a0258b1d"
	},
	{
		"id": "3a255932a141",
		"ts": "2026-07-18T15:52:56.255Z",
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
		"liquidityUsd": 26796720.18,
		"hash": "3a255932a1414912dd39f28b251536c32efe3d0f74ce9e132e50acf8b566b101"
	},
	{
		"id": "d7b66e8bf8f7",
		"ts": "2026-07-18T15:52:56.497Z",
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
		"liquidityUsd": 5004979.78,
		"hash": "d7b66e8bf8f79e9498232c572ff1d4e5255a018105d8e97dbcb9bb4d91eaea71"
	},
	{
		"id": "9481d31e1785",
		"ts": "2026-07-18T15:52:56.761Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 993437.89,
		"hash": "9481d31e17856fae904ec6202808e543b8860689a31f64a7e285755825566d7d"
	},
	{
		"id": "1cf98f275d6f",
		"ts": "2026-07-18T15:52:57.025Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26796720.18,
		"hash": "1cf98f275d6f3b97644bff98aa832062960cee89d66dfb8c3a187c711a35cd13"
	},
	{
		"id": "83c997d69d16",
		"ts": "2026-07-18T15:52:57.270Z",
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
		"liquidityUsd": 2490665.25,
		"hash": "83c997d69d1647ba1ecf0a540b27a6cc8c93bcc4b8fcdd8fc20d941e058efa2d"
	},
	{
		"id": "a704a5eefb5e",
		"ts": "2026-07-18T15:52:57.512Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 169980.46,
		"hash": "a704a5eefb5ecd8cb72cbcccce8ea3bb2ce0039ceb2927b7d383d46a227c94b0"
	},
	{
		"id": "27d625057ab3",
		"ts": "2026-07-18T15:52:57.753Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 56493.92,
		"hash": "27d625057ab31f0039727049f4d1edc81505fe1c765f9d90c317b55381079a69"
	},
	{
		"id": "ca878e89694d",
		"ts": "2026-07-18T15:52:58.057Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 437691.53,
		"hash": "ca878e89694ddd5198c510e7a52d002fec1afbe93eb4902c27509123b6e9ec7b"
	},
	{
		"id": "d2321f4d047e",
		"ts": "2026-07-18T15:52:58.283Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 227546.48,
		"hash": "d2321f4d047e91c3fcde6aef5e2e2b1798c4602ec3e964f9f6c245efc8533799"
	},
	{
		"id": "34b9e5c1dd0b",
		"ts": "2026-07-18T15:52:58.505Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 97232.85,
		"hash": "34b9e5c1dd0bd99e43f59716d51ab914500676cc602694e6a2b73dad998fdd4e"
	},
	{
		"id": "9d5cfa4e7c55",
		"ts": "2026-07-18T15:52:58.731Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9107994.81,
		"hash": "9d5cfa4e7c555caf7e8be8bbb150cc46a2879b5975296bb8f61e7eb56cae3c23"
	},
	{
		"id": "0d2392cd422b",
		"ts": "2026-07-18T15:52:58.958Z",
		"symbol": "TOSHI",
		"token": "0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 995097.19,
		"hash": "0d2392cd422b3010a9b694f5ee5003c4891aad1ab11980cf585706e4105adedf"
	},
	{
		"id": "fd382f092bca",
		"ts": "2026-07-18T15:52:59.185Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1365373.6,
		"hash": "fd382f092bcacbc0174099ba7545a95626a40225e4a028e1bcaa5700ad1ecbe4"
	},
	{
		"id": "dc028fa0600a",
		"ts": "2026-07-18T15:52:59.409Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 608576.45,
		"hash": "dc028fa0600a7dace32557a4594d9423bb9721de0dcf3a3f36a03092e2b4a111"
	},
	{
		"id": "f898371e6294",
		"ts": "2026-07-18T14:48:17.373Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106465226.2,
		"hash": "f898371e6294dd7371f09e34bd34f25768e3ceaf1802bf8c64ef074f57a56997"
	},
	{
		"id": "c84ed2d35dc8",
		"ts": "2026-07-18T14:48:17.587Z",
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
		"liquidityUsd": 15673806.15,
		"hash": "c84ed2d35dc8ff6390e303064923828e9fcfe7a01c1e69939f60c61f879957e8"
	},
	{
		"id": "86a5e0f3e07f",
		"ts": "2026-07-18T14:48:17.934Z",
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
		"liquidityUsd": 872449.3,
		"hash": "86a5e0f3e07f150e9d8bfe9c5f8808acff6a8c0553d6d07b578bee16ffac996d"
	},
	{
		"id": "b9438bddc7c7",
		"ts": "2026-07-18T14:48:18.280Z",
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
		"liquidityUsd": 26877545.27,
		"hash": "b9438bddc7c75369ce92207b909007afa10aea542f8fbf1bf7a166df29f75704"
	},
	{
		"id": "4f2ae8c993fc",
		"ts": "2026-07-18T14:48:18.470Z",
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
		"liquidityUsd": 5020086,
		"hash": "4f2ae8c993fcc34217f1f824e4fab98f4859b23b9893b9deff95270be3831115"
	},
	{
		"id": "3ba85407d111",
		"ts": "2026-07-18T14:48:18.662Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 986404.49,
		"hash": "3ba85407d1112264685f3da2c477a6d2b957f8106625410305f3f470f7f1a091"
	},
	{
		"id": "22c8fd9c7c57",
		"ts": "2026-07-18T14:48:18.859Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26877545.27,
		"hash": "22c8fd9c7c576ba597e4c0f1e67efec3b66e66bf25f97c9d7cbfb1138f826451"
	},
	{
		"id": "77912fdfc322",
		"ts": "2026-07-18T14:48:19.051Z",
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
		"liquidityUsd": 2475549.33,
		"hash": "77912fdfc32297dbdead87c054faee9697c8036c5e582aa7492c0069f83b6d17"
	},
	{
		"id": "7bc7d7e1fe18",
		"ts": "2026-07-18T14:48:19.247Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 154711.85,
		"hash": "7bc7d7e1fe1889339ea502f2aff281e8057fe8036aded96f86e50c49230b1f82"
	},
	{
		"id": "ae1b4bfa28bd",
		"ts": "2026-07-18T14:48:19.473Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 60548.27,
		"hash": "ae1b4bfa28bdc7cbc6f241d4cef5219ae1d6776e10673c3198f0212318c2a708"
	},
	{
		"id": "2fa90694abdd",
		"ts": "2026-07-18T14:48:19.666Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 232106.58,
		"hash": "2fa90694abdde19b21fa8c29563bf433cd64310fc323c01cd16d6028c84deca7"
	},
	{
		"id": "fe326f8527cf",
		"ts": "2026-07-18T14:48:19.856Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 440228.94,
		"hash": "fe326f8527cfa0cea07c389aaa53edf73e9035e0f4353580e1514ce37c0d057b"
	},
	{
		"id": "135432f6a5f9",
		"ts": "2026-07-18T14:48:20.051Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 95929.93,
		"hash": "135432f6a5f91f202e7359aecb13b1f7638690ae32db62d93d6e6c04af85c103"
	},
	{
		"id": "8c2c43495b17",
		"ts": "2026-07-18T14:48:20.241Z",
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
		"liquidityUsd": 1352779.12,
		"hash": "8c2c43495b17958f031a497ac327a18cd3fc5c992fada821c03c661c02b68a03"
	},
	{
		"id": "91016075c72c",
		"ts": "2026-07-18T14:48:20.435Z",
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
		"liquidityUsd": 9118619.66,
		"hash": "91016075c72cb3bd74586e2b4eddde16b9f730f07e394b4dcb1b30bef0181b9d"
	},
	{
		"id": "35a3896d9f71",
		"ts": "2026-07-18T14:48:20.627Z",
		"symbol": "TOSHI",
		"token": "0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 996480.81,
		"hash": "35a3896d9f71d75c34c81209bda23078369a3351f500022b5a796f0acae81fb4"
	},
	{
		"id": "9e98fdccaf90",
		"ts": "2026-07-18T14:48:20.825Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3589065.28,
		"hash": "9e98fdccaf905c40f902d6de6cf5e2048a38d71310da1bd71a1c24e2d3ed742a"
	},
	{
		"id": "35b9983e407a",
		"ts": "2026-07-18T13:24:05.409Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106453516.68,
		"hash": "35b9983e407ab9d591a1e648863cbc2b8a480c4a95cdbb405310c39e0f0b9499"
	},
	{
		"id": "21c7c8d51e69",
		"ts": "2026-07-18T13:24:05.687Z",
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
		"liquidityUsd": 16068410.58,
		"hash": "21c7c8d51e69f5734bfa72bf1c4b40cbbc935a6df93df6573ae976a3c536820c"
	},
	{
		"id": "4dee7fce9109",
		"ts": "2026-07-18T13:24:05.922Z",
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
		"liquidityUsd": 799819.37,
		"hash": "4dee7fce91091d14d3a9a48602af205cf007fa74dd69dfb711e374e29786deb1"
	},
	{
		"id": "72ee77287f3a",
		"ts": "2026-07-18T13:24:06.161Z",
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
		"liquidityUsd": 26678498.39,
		"hash": "72ee77287f3acf9a7f80603ccca42ab704ca2abfa441ce529e882dab3a69c17e"
	},
	{
		"id": "9a3842f778fe",
		"ts": "2026-07-18T13:24:06.433Z",
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
		"liquidityUsd": 5015218.87,
		"hash": "9a3842f778fe15ee56f2d2ff74b8a935c0ce262e37a3cef9e0a518223c8a6c53"
	},
	{
		"id": "b9e05156bd5e",
		"ts": "2026-07-18T13:24:06.666Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 981863.42,
		"hash": "b9e05156bd5e22b3803f8cc6ddcad981df7e85428e64c12f4460a3aaf6d8e0d9"
	},
	{
		"id": "5f5b0ad6859e",
		"ts": "2026-07-18T13:24:06.898Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26678498.39,
		"hash": "5f5b0ad6859e4dd37330726cffeb5ef792454f90aa3023e0e6a9af87eddb0dce"
	},
	{
		"id": "c6b5e200c287",
		"ts": "2026-07-18T13:24:07.133Z",
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
		"liquidityUsd": 2442521.32,
		"hash": "c6b5e200c28713243574bb4d3f276672bf5d972c188c801d6429438d19d97153"
	},
	{
		"id": "be736bd37346",
		"ts": "2026-07-18T13:24:07.373Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 147914.96,
		"hash": "be736bd373461949da6da36553ed6a9cb2dcecec4f9e138643d27a0afe203b07"
	},
	{
		"id": "50368bec307d",
		"ts": "2026-07-18T13:24:07.609Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 77163.12,
		"hash": "50368bec307d0bf541289e0a371cd6cfa60a1c6fc60e743950662b9b32550110"
	},
	{
		"id": "1874a793d028",
		"ts": "2026-07-18T13:24:07.829Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 216794.52,
		"hash": "1874a793d028023ee27617d5aba073b9e2427f4003e8394fac1cc513028c7eec"
	},
	{
		"id": "5ee961cc794f",
		"ts": "2026-07-18T13:24:08.045Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 448329.4,
		"hash": "5ee961cc794f5a4f51d4cc7cac7f6e4db0aa139f2be2c9dee75b2448194c5b2a"
	},
	{
		"id": "90f63252d05d",
		"ts": "2026-07-18T13:24:08.272Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 97566.37,
		"hash": "90f63252d05d11de43cbbe8aededb003059c505eb0b20e9b97b5e5148e9cec92"
	},
	{
		"id": "d92bf85102a9",
		"ts": "2026-07-18T13:24:08.489Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9041749.81,
		"hash": "d92bf85102a9299b608604c401637c6bee041afe70f2e6bdb7f3beb2d15152f7"
	},
	{
		"id": "e07c105a7e53",
		"ts": "2026-07-18T13:24:08.707Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1312507.86,
		"hash": "e07c105a7e530c396a70995a08b61823642849462a327ef7acbce042762e9726"
	},
	{
		"id": "c29b99124ad5",
		"ts": "2026-07-18T13:24:08.927Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3549357.62,
		"hash": "c29b99124ad510271abc85ad60e39132d8162d5ae59116c7d5e9d365f8457860"
	},
	{
		"id": "ebb9934e9c40",
		"ts": "2026-07-18T13:24:09.144Z",
		"symbol": "BASEMATE",
		"token": "0x07E61D8a4e197dfC269e90D7ECe1dF0D26702bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 131420.07,
		"hash": "ebb9934e9c4024ccbef0ce2a996eb9a6d7cf10776d6c3502e44dc629777d6dbc"
	},
	{
		"id": "40eaffe75cc4",
		"ts": "2026-07-18T11:58:11.941Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106370657.77,
		"hash": "40eaffe75cc42bb5a6de58715c8edb31639de19711c3372df782e8d8125fe48f"
	},
	{
		"id": "f1200676c8fe",
		"ts": "2026-07-18T11:58:12.433Z",
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
		"liquidityUsd": 15238016.29,
		"hash": "f1200676c8fee70ae43f0716e7882df98eb53d18ec68bf5ecae60b0dec199fa1"
	},
	{
		"id": "c63519f5fc42",
		"ts": "2026-07-18T11:58:12.691Z",
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
		"liquidityUsd": 800894.2,
		"hash": "c63519f5fc42b0e92e76a3aed0a55babfb299c2a308b87c9e0e079c3ece2e6f3"
	},
	{
		"id": "a5e74f7ae3cf",
		"ts": "2026-07-18T11:58:12.949Z",
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
		"liquidityUsd": 27027531.91,
		"hash": "a5e74f7ae3cf96219208fafd923d64e061700c492d6faf8c195ee2a8c2d3d696"
	},
	{
		"id": "94080bdde10a",
		"ts": "2026-07-18T11:58:13.208Z",
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
		"liquidityUsd": 5043823.47,
		"hash": "94080bdde10ac42fa29d23eb9f628f3a8cab72d0375438976022b64040623d63"
	},
	{
		"id": "5bf54fd7703d",
		"ts": "2026-07-18T11:58:13.470Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 981874.14,
		"hash": "5bf54fd7703d38ca96f68c2e1203dc5466e9edb1089fda0b6c386378acdc0c47"
	},
	{
		"id": "7dff91c4f50c",
		"ts": "2026-07-18T11:58:13.725Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27027531.91,
		"hash": "7dff91c4f50cef4c265a359d20e77cb20bf88610913b20c0d1625d11938136e9"
	},
	{
		"id": "e290a14e6f1e",
		"ts": "2026-07-18T11:58:13.987Z",
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
		"liquidityUsd": 2475080.06,
		"hash": "e290a14e6f1e6d6f696577cfc9cf6bf421966a02992e557d20077527a759cdb6"
	},
	{
		"id": "ff8a840e1dc9",
		"ts": "2026-07-18T11:58:14.265Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 144633.07,
		"hash": "ff8a840e1dc9323e06654a8ace31cb3b7b20345276ec11e45060ac1ca9feb6c8"
	},
	{
		"id": "6d2b9a2536c6",
		"ts": "2026-07-18T11:58:14.523Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 82,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.64,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 228844.02,
		"hash": "6d2b9a2536c6a7072e9a8970817f892f05f780abe145176c782a8a25d1e188e5"
	},
	{
		"id": "1459bfe445e3",
		"ts": "2026-07-18T11:58:14.759Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 54234.05,
		"hash": "1459bfe445e35520a718f637fc3a6864b45f07abf3aa933d9a218a83809c30a8"
	},
	{
		"id": "4b3f6e7414e1",
		"ts": "2026-07-18T11:58:15.000Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 455106.94,
		"hash": "4b3f6e7414e1d61d3e4dc3ad17a17001fa6bf82fedc4aa65b600a054f84f3d61"
	},
	{
		"id": "6d15187d3d86",
		"ts": "2026-07-18T11:58:15.242Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 98701.59,
		"hash": "6d15187d3d86f1201a827a090193bfaa861352f604ab5e6a3cdf84ddd15b95d0"
	},
	{
		"id": "3dfa67c74dda",
		"ts": "2026-07-18T11:58:15.483Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9200443.2,
		"hash": "3dfa67c74ddaac6a29e7383d3bbc9b1ba68564e182f4982585ce2a3ee793dd60"
	},
	{
		"id": "4be0d29162b1",
		"ts": "2026-07-18T11:58:15.724Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1271779.98,
		"hash": "4be0d29162b1c5dc5bf743f982a8058b328299f460b5c754c10bea00ce33f8d3"
	},
	{
		"id": "4b665753bc0d",
		"ts": "2026-07-18T11:58:15.965Z",
		"symbol": "BASEMATE",
		"token": "0x07E61D8a4e197dfC269e90D7ECe1dF0D26702bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 131504.62,
		"hash": "4b665753bc0df909238e6f3dd34b42f03634345e208eda4488530f9bb92312fc"
	},
	{
		"id": "d2f87315c4db",
		"ts": "2026-07-18T11:58:16.209Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1787927.22,
		"hash": "d2f87315c4db7290007b0687acf330b0afa080e77872abdb5fa356de256eba47"
	},
	{
		"id": "bacac5f28032",
		"ts": "2026-07-18T11:58:16.449Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3551169.3,
		"hash": "bacac5f2803206b5884de59b43b76a631a50b24b5451c9df44f509590c11321a"
	},
	{
		"id": "38c672c8617d",
		"ts": "2026-07-18T10:59:27.007Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106357693.78,
		"hash": "38c672c8617d6e30b18d35d25f44f2ee980f25e7ae3bbcc4f2ff92fbf2a04b95"
	},
	{
		"id": "cdfe8fc0640c",
		"ts": "2026-07-18T10:59:27.249Z",
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
		"liquidityUsd": 15242364.2,
		"hash": "cdfe8fc0640c5fc0d9616000b9313a35ead3d36e2df3844356f635ebca5429f7"
	},
	{
		"id": "6f00ad25f554",
		"ts": "2026-07-18T10:59:27.500Z",
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
		"liquidityUsd": 800477.91,
		"hash": "6f00ad25f5547befd952fae3e7b61bb68d5e8d4d24f1b1d7cf56ba1ed8de3856"
	},
	{
		"id": "efba9380f107",
		"ts": "2026-07-18T10:59:27.742Z",
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
		"liquidityUsd": 27042058.11,
		"hash": "efba9380f107a9252cc6aaf36af3ed4149cacb9c860a7df6980df50e1c8f67fd"
	},
	{
		"id": "dfccfd58827d",
		"ts": "2026-07-18T10:59:27.973Z",
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
		"liquidityUsd": 5044024.77,
		"hash": "dfccfd58827d5f55347beec042d503b9ae6bdf1a073088e287e63eaf75f9a226"
	},
	{
		"id": "c349d1bce16e",
		"ts": "2026-07-18T10:59:28.216Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 981940.43,
		"hash": "c349d1bce16ec60d614561d492fce06a418688524730d6835fc72f03e95aadf4"
	},
	{
		"id": "6dc03af2beca",
		"ts": "2026-07-18T10:59:28.447Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27042057.92,
		"hash": "6dc03af2becadd9ea4cf074ec8ef1a66336fd61ede4bfb0475c389239719fa85"
	},
	{
		"id": "2701b8eb3686",
		"ts": "2026-07-18T10:59:28.680Z",
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
		"liquidityUsd": 2474705.58,
		"hash": "2701b8eb368602f72511b058e7de04d376eb5a39312cad40ecd4d67787dc4173"
	},
	{
		"id": "d09fdc577b07",
		"ts": "2026-07-18T10:59:28.915Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 142004.03,
		"hash": "d09fdc577b07f4912ecfa1c32609b9d4fb34deae0a8cf1076be206c31b5f1d84"
	},
	{
		"id": "5af740592fb0",
		"ts": "2026-07-18T10:59:29.152Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 82,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.64,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 240612.08,
		"hash": "5af740592fb0fb05bc92c8114e38920709248a6e1a053c2d817619870922030f"
	},
	{
		"id": "faf282510448",
		"ts": "2026-07-18T10:59:29.368Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 53944.94,
		"hash": "faf282510448cb06ffedd000988c7f0444003b954f83234a371ddc24ce4233f1"
	},
	{
		"id": "07a3f8c3ef80",
		"ts": "2026-07-18T10:59:29.584Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 449332.43,
		"hash": "07a3f8c3ef80db434b500dd70b89d131b75f37a4ba17e222e6b24e81c9c12d00"
	},
	{
		"id": "428176d60f05",
		"ts": "2026-07-18T10:59:29.803Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 97766.38,
		"hash": "428176d60f05fded2cf6e4c85747d71f89c950ef57986e8fd642121aa2dc6cc1"
	},
	{
		"id": "68e797a878d0",
		"ts": "2026-07-18T10:59:30.019Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9192888.07,
		"hash": "68e797a878d03876e9d8502c68bf0c65530a8fc97436869af26b2f6f34871653"
	},
	{
		"id": "1e93458e38b5",
		"ts": "2026-07-18T10:59:30.236Z",
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
		"liquidityUsd": 1272749.65,
		"hash": "1e93458e38b52ada2c47aba3b7f6cbc86ac8e4f8bcda521f658303af6669dc94"
	},
	{
		"id": "95a854281a19",
		"ts": "2026-07-18T10:59:30.453Z",
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
		"liquidityUsd": 3541585.71,
		"hash": "95a854281a19f651b9a79896ed2c398260ada73a70acd1cf6c3129f4ed23b6c2"
	},
	{
		"id": "a942230286dc",
		"ts": "2026-07-18T10:59:30.670Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1788838.23,
		"hash": "a942230286dc32b6a973910d6b23385ca2a99a47a21eef5136c09360d3bfe4d0"
	},
	{
		"id": "0f1bd329907e",
		"ts": "2026-07-18T10:59:30.887Z",
		"symbol": "BASEMATE",
		"token": "0x07E61D8a4e197dfC269e90D7ECe1dF0D26702bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 130384.06,
		"hash": "0f1bd329907e34652f22a4b681fd7e45f0f2122e5e5665f1fb90810692a99067"
	},
	{
		"id": "f6a0d7e389fc",
		"ts": "2026-07-18T09:20:23.272Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106142000.25,
		"hash": "f6a0d7e389fc4cc77c65e47e64a5bec3e14552cc30cddafb5cbdb32423980bed"
	},
	{
		"id": "9a36f8e2a288",
		"ts": "2026-07-18T09:20:23.492Z",
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
		"liquidityUsd": 14845864.7,
		"hash": "9a36f8e2a288158bac90e10780e09e2e4155fddad116e3da8e7f94d5ea060bb7"
	},
	{
		"id": "0fbfa3d90731",
		"ts": "2026-07-18T09:20:23.699Z",
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
		"liquidityUsd": 797580.47,
		"hash": "0fbfa3d907316ac720bbb2fdae8e2cb8511926934c2752a08cb0e7f9ddeb74a9"
	},
	{
		"id": "41fdcb197dc4",
		"ts": "2026-07-18T09:20:23.901Z",
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
		"liquidityUsd": 27101503.58,
		"hash": "41fdcb197dc4ca3ec158135b0b2f78efd3ae8bebf1334d16759861ae49fee1c1"
	},
	{
		"id": "ba21fc2f8d57",
		"ts": "2026-07-18T09:20:24.106Z",
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
		"liquidityUsd": 5069776.48,
		"hash": "ba21fc2f8d572b0291101cffa2202bba84ee127289bb6306f6904b387e0cebbd"
	},
	{
		"id": "71f2f109a2af",
		"ts": "2026-07-18T09:20:24.308Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 980059.34,
		"hash": "71f2f109a2af1c074a64eb5a7097cbfd9a97491ed3ca0a11a01d12d221ddcff9"
	},
	{
		"id": "cb6accd45e5c",
		"ts": "2026-07-18T09:20:24.515Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27100253.62,
		"hash": "cb6accd45e5c646c833202f6bdcd53a4be2cd9d47b2d007b8dd9bbfdcc785278"
	},
	{
		"id": "0f03853335de",
		"ts": "2026-07-18T09:20:24.723Z",
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
		"liquidityUsd": 2473595.02,
		"hash": "0f03853335debf2af01795a03b9a79e8139ee1ac4d14a493c3b93dd6853dfd46"
	},
	{
		"id": "db6ddca328cb",
		"ts": "2026-07-18T09:20:24.936Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 135298.93,
		"hash": "db6ddca328cb4536bff619d175a124575a751d9de199bcbd9265158a2179f2f6"
	},
	{
		"id": "8f7c738b8d1f",
		"ts": "2026-07-18T09:20:25.139Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 82,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.64,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 239907.11,
		"hash": "8f7c738b8d1f998a64f41de45acfe7a7134f991d37068e1923cae78069774498"
	},
	{
		"id": "44c4b3ef74ed",
		"ts": "2026-07-18T09:20:25.330Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 445618.66,
		"hash": "44c4b3ef74ed144550b4cec442e352ba623b3b35872375c3417db36fd5a6b6a1"
	},
	{
		"id": "b81836bf9946",
		"ts": "2026-07-18T09:20:25.525Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 46081.5,
		"hash": "b81836bf9946ecf20815a81704f8b3e43b7f8567878344a16918fc7d6d17f5d9"
	},
	{
		"id": "86b0f45e991c",
		"ts": "2026-07-18T09:20:25.739Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 95069.47,
		"hash": "86b0f45e991c320244cd6c823a7f1c522d216ebd8ee46af13be68bfd8e83eb6f"
	},
	{
		"id": "88bf41d8a089",
		"ts": "2026-07-18T09:20:25.934Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 624550.02,
		"hash": "88bf41d8a089b36792bb7606c4f6140b64c7bece6e198ae156f1e5ca3b70aa46"
	},
	{
		"id": "1156e12d8ed3",
		"ts": "2026-07-18T09:20:26.121Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9169995.58,
		"hash": "1156e12d8ed375d1f9775befc8b31d34b17156528fb36b206427ec28c5d01013"
	},
	{
		"id": "1a3b640a873c",
		"ts": "2026-07-18T09:20:26.323Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1279298.19,
		"hash": "1a3b640a873c84334134785b776038f25c1f7fd49a8cc0a07c034e4f74125867"
	},
	{
		"id": "684c90dbbb8f",
		"ts": "2026-07-18T09:20:26.521Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1789535.84,
		"hash": "684c90dbbb8fc21ba93dc1356fe89bde3839911f898eae948d2d6f8f389e665d"
	},
	{
		"id": "4a0863a384f5",
		"ts": "2026-07-18T09:20:26.748Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3521723.32,
		"hash": "4a0863a384f524c328d507356f95cc1f406624af077a62af8d8f59dbdbad6a0c"
	},
	{
		"id": "9c56e1c56e24",
		"ts": "2026-07-18T07:43:15.535Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106150912.18,
		"hash": "9c56e1c56e24e8a19b0f478fbeb7203e143e72ba486eedd01c194d8d23e237cb"
	},
	{
		"id": "51a7033c62ab",
		"ts": "2026-07-18T07:43:15.773Z",
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
		"liquidityUsd": 15379832.48,
		"hash": "51a7033c62ab590d4813d90343df13e11095c8672fc3ca527403f33c8dc3a6c6"
	},
	{
		"id": "92cc258842ad",
		"ts": "2026-07-18T07:43:16.032Z",
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
		"liquidityUsd": 797265.36,
		"hash": "92cc258842ad1ae23cb52a468cf66c9c82a99e532bf27ff15226850bc8eae229"
	},
	{
		"id": "c39aaa56d7d6",
		"ts": "2026-07-18T07:43:16.488Z",
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
		"liquidityUsd": 27282310.72,
		"hash": "c39aaa56d7d65b7072218af38b6c34aea011b4b4279357d800ad2ecb9c1d9dc7"
	},
	{
		"id": "546c82d8e56b",
		"ts": "2026-07-18T07:43:16.735Z",
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
		"liquidityUsd": 5073736.26,
		"hash": "546c82d8e56b6cc48c1b7abc1e9c6367de892c9ad631a78cec1559fba1f48045"
	},
	{
		"id": "e5a0db170bc0",
		"ts": "2026-07-18T07:43:16.986Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 980698.21,
		"hash": "e5a0db170bc08960424af8f0caa62f7bdb124920e42bbd9b4a3750fde7f95a44"
	},
	{
		"id": "d7f22a3833ee",
		"ts": "2026-07-18T07:43:17.223Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27282310.72,
		"hash": "d7f22a3833ee2605260e8fc06c631f96f49013005c8bf3980581b890bdae7a84"
	},
	{
		"id": "0cccc293dd69",
		"ts": "2026-07-18T07:43:17.510Z",
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
		"liquidityUsd": 2474607.36,
		"hash": "0cccc293dd69b9eae676321066c2290e1a939031816ba7bb4939325bd9da91fa"
	},
	{
		"id": "80c829891741",
		"ts": "2026-07-18T07:43:17.747Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 142811.05,
		"hash": "80c8298917416af898383949083a5833e1453361552a2ad96a6cd0552fb1448d"
	},
	{
		"id": "616d4636fc17",
		"ts": "2026-07-18T07:43:17.983Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 82,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.64,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 229949.14,
		"hash": "616d4636fc17470a0af82e1c8fe705d2e66a3a87cfe07032aab26ab52cc23489"
	},
	{
		"id": "e33ba3692ad4",
		"ts": "2026-07-18T07:43:18.202Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 429183.18,
		"hash": "e33ba3692ad4a40512416abd7f080dced1ae0419e9cbd3a1367e51d16b2afbc7"
	},
	{
		"id": "48fed739a91e",
		"ts": "2026-07-18T07:43:18.421Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 45240.7,
		"hash": "48fed739a91e1b41036cbcf08dcd43f321486687d3c2665105c1acb5d26038f4"
	},
	{
		"id": "844357239382",
		"ts": "2026-07-18T07:43:18.641Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9163867.18,
		"hash": "84435723938204a4ca4ce7f0fb4eaf7502978afde096dbe4df71fb5b226f7fd3"
	},
	{
		"id": "958b54af519e",
		"ts": "2026-07-18T07:43:18.859Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 98205.65,
		"hash": "958b54af519ebb90bc2bc680d86ea7c8a313b7cd4c900338066bf63e43e60c95"
	},
	{
		"id": "43133f7564d5",
		"ts": "2026-07-18T07:43:19.078Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 616816.01,
		"hash": "43133f7564d55f403b3f2b50aed5ded7eff05cd12c9af4ba3061760c29528a53"
	},
	{
		"id": "d0ab3ef62f90",
		"ts": "2026-07-18T07:43:19.298Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3532594.58,
		"hash": "d0ab3ef62f90681fa0b43236f872d8efe9186326d0e166bef3fea95f10f36f76"
	},
	{
		"id": "ebb071390005",
		"ts": "2026-07-18T07:43:19.517Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1786985.68,
		"hash": "ebb07139000584d30787cd589a95ee34318ae3ed3c24653c1359ccee8a0b3129"
	},
	{
		"id": "21a89d57b719",
		"ts": "2026-07-18T07:43:19.736Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1264007.33,
		"hash": "21a89d57b7193f0801ab54b63e5e58aeea72c03b94fc338dacc8b0f0c885ba1d"
	},
	{
		"id": "2280479d928c",
		"ts": "2026-07-18T05:21:38.543Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106071193.89,
		"hash": "2280479d928c58e9f49481b6fd37cb79afd76207bb2878a811163f8e253153e6"
	},
	{
		"id": "72fafd2552ef",
		"ts": "2026-07-18T05:21:38.992Z",
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
		"liquidityUsd": 15195055.48,
		"hash": "72fafd2552efc5b14c05aeb8a77127b0cf016ef41236468614a2f87a698c2764"
	},
	{
		"id": "93e21f447fd4",
		"ts": "2026-07-18T05:21:39.236Z",
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
		"liquidityUsd": 794614.9,
		"hash": "93e21f447fd4f8b011e9c90b0ea7364f3b7b3df0fc3773c368bd5c23ba5bf9a1"
	},
	{
		"id": "1e0133a35034",
		"ts": "2026-07-18T05:21:39.481Z",
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
		"liquidityUsd": 27228313.63,
		"hash": "1e0133a3503452191efaac988989240c6c252765d69fbd319c2970238265c1ec"
	},
	{
		"id": "52187f6e4fd2",
		"ts": "2026-07-18T05:21:39.729Z",
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
		"liquidityUsd": 5100109.47,
		"hash": "52187f6e4fd25f7779a8a6aee56b408c98daaabd09dcf78f03148c5aedfa389a"
	},
	{
		"id": "033fbd68b702",
		"ts": "2026-07-18T05:21:39.979Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 984638.41,
		"hash": "033fbd68b702006951a4f4eac988870d5d7dc27add121319bfcd9fa961913970"
	},
	{
		"id": "dc0a8e7661fa",
		"ts": "2026-07-18T05:21:40.222Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27228313.63,
		"hash": "dc0a8e7661fa49569813d97f4a3c9032edf949ff1587ba8e4298b593f5cd82ac"
	},
	{
		"id": "5b8600f99097",
		"ts": "2026-07-18T05:21:40.468Z",
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
		"liquidityUsd": 2472757.63,
		"hash": "5b8600f99097c94cae8838b1a208a920628d9cebff3b06487a46b339a47541c1"
	},
	{
		"id": "56d6a79c507a",
		"ts": "2026-07-18T05:21:40.720Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 152507.09,
		"hash": "56d6a79c507ae3ab42ac4319487cf20e3056b5f208b7e1a93d097112d8eaa185"
	},
	{
		"id": "28a78149d78a",
		"ts": "2026-07-18T05:21:40.965Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 82,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.64,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 209898.24,
		"hash": "28a78149d78a3f2ded2afe153a6d06470a3097b11e7561f955fa75ec70b8dffd"
	},
	{
		"id": "1d3d731619a7",
		"ts": "2026-07-18T05:21:41.194Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 466818.8,
		"hash": "1d3d731619a71271af56d36ffdb4fff8cb8c6c3c683de6440cf06ad7d35da882"
	},
	{
		"id": "43ebf90c052a",
		"ts": "2026-07-18T05:21:41.421Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 57419.36,
		"hash": "43ebf90c052a52cc5506f7cb611329282da19c555441bbc93430adfd4360f653"
	},
	{
		"id": "c31c707b153c",
		"ts": "2026-07-18T05:21:41.647Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 626360.69,
		"hash": "c31c707b153ca58753104804c25d4c13f235c88516b5227dfe7ddcf6946cc2af"
	},
	{
		"id": "272a9fa403ac",
		"ts": "2026-07-18T05:21:41.874Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 94067.18,
		"hash": "272a9fa403aceebe606ba7b9e69f059df868814a578f2b42a042387b94761f04"
	},
	{
		"id": "0fab84a14d4c",
		"ts": "2026-07-18T05:21:42.102Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3529194.8,
		"hash": "0fab84a14d4c3e284279f7971737938850cf4720222be038d7d04f8c39fe1744"
	},
	{
		"id": "4ee987a301ff",
		"ts": "2026-07-18T05:21:42.332Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1787626.39,
		"hash": "4ee987a301ffe383b500faab8f5935a39da24f2bf3e3d8caa876cd344ed97e2e"
	},
	{
		"id": "ecfdbd004952",
		"ts": "2026-07-18T05:21:42.561Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1271828.31,
		"hash": "ecfdbd004952ac6b3daaea35d6ba113c79a856771c07ea366aaa7c83035f62e0"
	},
	{
		"id": "5de4fb5a903f",
		"ts": "2026-07-18T05:21:42.790Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 663951.46,
		"hash": "5de4fb5a903f3585d94c4458e86f033d6e6cf93851ffd2c6b2ba832e98c784ab"
	},
	{
		"id": "c65f4e684b97",
		"ts": "2026-07-18T02:05:41.661Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106022113.71,
		"hash": "c65f4e684b97fcf99dea31d9b97490e182c4ea0095daca268df01aa26c716d88"
	},
	{
		"id": "aad3e5324ae9",
		"ts": "2026-07-18T02:05:42.099Z",
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
		"liquidityUsd": 15292147.7,
		"hash": "aad3e5324ae9a45fd80ff06656f53ea8633f57da373c529e2f7c6f73b55c3ff9"
	},
	{
		"id": "38c1e214e251",
		"ts": "2026-07-18T02:05:42.335Z",
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
		"liquidityUsd": 795467.62,
		"hash": "38c1e214e2515ddd001f6998de00ea079f42c38dbacfce61933cba22023b42a2"
	},
	{
		"id": "d0fd4f1efd93",
		"ts": "2026-07-18T02:05:42.567Z",
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
		"liquidityUsd": 27142271.45,
		"hash": "d0fd4f1efd93e54812c8ddb91a76f7898fb72b81232cfc1c13d60cac860749d4"
	},
	{
		"id": "36fd277db608",
		"ts": "2026-07-18T02:05:42.803Z",
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
		"liquidityUsd": 5158534.25,
		"hash": "36fd277db608d464aef73326e02300a9b239a5514867338305af47a27d169d5c"
	},
	{
		"id": "2d9fe5df7c46",
		"ts": "2026-07-18T02:05:43.036Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 980434.84,
		"hash": "2d9fe5df7c46247d8d2d505b92172d30feacb1c60d6687d51d0f168f4f17ff68"
	},
	{
		"id": "fc6963fd6227",
		"ts": "2026-07-18T02:05:43.267Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27142271.45,
		"hash": "fc6963fd62276248c84e6ab4f7d2746ceb6e1a46c0bb6e7f0d9a78ffcb381617"
	},
	{
		"id": "db65e8214a12",
		"ts": "2026-07-18T02:05:43.501Z",
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
		"liquidityUsd": 2781041.65,
		"hash": "db65e8214a12c5405b97af25f1395feb01dac865e36e998d5cfbf136331fbead"
	},
	{
		"id": "42672c10588a",
		"ts": "2026-07-18T02:05:43.734Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 157817.46,
		"hash": "42672c10588adbcb7531717173277d287eca16988a42f848a2786fda7c06c30c"
	},
	{
		"id": "84190ff7b07e",
		"ts": "2026-07-18T02:05:43.969Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 241031.47,
		"hash": "84190ff7b07e251d320a2e911907726c50a194fbc290eb95ca6ba94006f7ea37"
	},
	{
		"id": "783465ed58e4",
		"ts": "2026-07-18T02:05:44.187Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 491963.5,
		"hash": "783465ed58e43abe6dfb6ffa24d468ec1f148baa0f3efd87b924e12b0726b532"
	},
	{
		"id": "d9c38d9095ba",
		"ts": "2026-07-18T02:05:44.407Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 726885.21,
		"hash": "d9c38d9095ba7eb55e884ab73927c1fdece99a59e3fd58a0ece656c26aa5d466"
	},
	{
		"id": "56bfe5d38b3b",
		"ts": "2026-07-18T02:05:44.624Z",
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
		"liquidityUsd": 1261825.22,
		"hash": "56bfe5d38b3b87227ba9df75b33b4fe14938d4332cc6ce7913c23cb8fa5468b1"
	},
	{
		"id": "dabc01c21621",
		"ts": "2026-07-18T02:05:44.842Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3603964.27,
		"hash": "dabc01c216219465e7dae280058e10f653ac5b5e6931c731a1f86c4b3525d5f6"
	},
	{
		"id": "8c4bf6ccbb0a",
		"ts": "2026-07-18T02:05:45.060Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 94648.55,
		"hash": "8c4bf6ccbb0a0529b584fee35f200d9372367ed1be129a9d248a0f6430ae13fd"
	},
	{
		"id": "c46307c6ceca",
		"ts": "2026-07-18T02:05:45.279Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 700743.23,
		"hash": "c46307c6ceca9d4ff7cd2f1ae50ed33b36a680a731540549c8665d51e337ed21"
	},
	{
		"id": "19eb782699cb",
		"ts": "2026-07-18T02:05:45.497Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 318768.35,
		"hash": "19eb782699cb5f65c1b3540606473e6bfca8e50ea8373ec3aba27942ba3c7667"
	},
	{
		"id": "43962d050e80",
		"ts": "2026-07-18T02:05:45.714Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1287957.96,
		"hash": "43962d050e8099e75d900b50b356009308e0862958f2d972c8ab29c1060cc2e2"
	},
	{
		"id": "81bef5b3ece4",
		"ts": "2026-07-17T23:49:03.218Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106228453.24,
		"hash": "81bef5b3ece4f6f01b3801723e569db8983bb90199875661db4920dfa9e53beb"
	},
	{
		"id": "6366057e82d0",
		"ts": "2026-07-17T23:49:03.480Z",
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
		"liquidityUsd": 14444033.63,
		"hash": "6366057e82d0e7796e318fb8acb7ca36aca0c3c9fb155bc51574ae48ecda477b"
	},
	{
		"id": "37d4328085a3",
		"ts": "2026-07-17T23:49:03.925Z",
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
		"liquidityUsd": 797988.08,
		"hash": "37d4328085a3247ec7ca842302e38602d850711c3edd1f9090fc5513fc4aa6ad"
	},
	{
		"id": "5dec96389fb4",
		"ts": "2026-07-17T23:49:04.164Z",
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
		"liquidityUsd": 27341351.4,
		"hash": "5dec96389fb48948b59514e8cde25ad081f85477d3f812fdb491b294724c1ee2"
	},
	{
		"id": "58795b4c7c26",
		"ts": "2026-07-17T23:49:04.415Z",
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
		"liquidityUsd": 5103047.21,
		"hash": "58795b4c7c265adccd42d3dd2c08979475bf1c455b590595149b579ddcfe9b4e"
	},
	{
		"id": "e8cf63296229",
		"ts": "2026-07-17T23:49:04.656Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 975007.88,
		"hash": "e8cf6329622935690efbc3abded643c2daffb6e684ac0fc2e8a87f26f26692be"
	},
	{
		"id": "f97b2590d5a0",
		"ts": "2026-07-17T23:49:04.895Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27341352.27,
		"hash": "f97b2590d5a0893cfd2cd8d0d23ce20f364008a72f492947ad087d8e5ad0ccc9"
	},
	{
		"id": "eda14351afc6",
		"ts": "2026-07-17T23:49:05.135Z",
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
		"liquidityUsd": 2780687.14,
		"hash": "eda14351afc66ff427b7b7aa1ce86fa0f015af6f310edbec35ed32a6baeff67a"
	},
	{
		"id": "061706f2cb7b",
		"ts": "2026-07-17T23:49:05.377Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 340800.06,
		"hash": "061706f2cb7b68a64d16290ecd7ee1678c38efc1d8b13b57d894b4ce73cc2781"
	},
	{
		"id": "e83f324aff4d",
		"ts": "2026-07-17T23:49:05.651Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 501657.68,
		"hash": "e83f324aff4dea0d19eb13805f086213590cde73728597dabf3d76eb3e422f21"
	},
	{
		"id": "0de7c6532fc3",
		"ts": "2026-07-17T23:49:05.875Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 288800.27,
		"hash": "0de7c6532fc3ab39f9ed4fcd5c46c5ef7cf6704de5154c24a653a9d3243b52c8"
	},
	{
		"id": "45c1e903caa9",
		"ts": "2026-07-17T23:49:06.098Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 747378.76,
		"hash": "45c1e903caa968d94fea06e056f7c79e5f270d1a8183499616c2cfe5bb15d51c"
	},
	{
		"id": "b36725bb8cd2",
		"ts": "2026-07-17T23:49:06.317Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 328522.73,
		"hash": "b36725bb8cd2241d63390d210563e64437bebefa24c9dfa9483cecbf512e37b5"
	},
	{
		"id": "c404bac9114f",
		"ts": "2026-07-17T23:49:06.538Z",
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
		"liquidityUsd": 1320467.14,
		"hash": "c404bac9114fb8a14c94c232941d269773ef96ad523761a12cb0e7b4d208b04c"
	},
	{
		"id": "d6ef49d8d194",
		"ts": "2026-07-17T23:49:06.760Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 693879.17,
		"hash": "d6ef49d8d19433daf64249171297a8f94d6151dd66f445e3b60cd51506290de4"
	},
	{
		"id": "745114747f9a",
		"ts": "2026-07-17T23:49:07.000Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3577530.04,
		"hash": "745114747f9aa1515608b038acd3efa66b96efa3d3ec44bd7f10410b64e2d57a"
	},
	{
		"id": "023bb79b83d0",
		"ts": "2026-07-17T23:49:07.222Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 507754.14,
		"hash": "023bb79b83d0d547459978d00c96f041e7031c12a1ff65b5ae852f149a30347b"
	},
	{
		"id": "37bdf1f9216d",
		"ts": "2026-07-17T23:49:07.445Z",
		"symbol": "ARMSTRONG",
		"token": "0xE2d5Bd0D349057D77Fcd2fa5B690161336ebE999",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 73565.11,
		"hash": "37bdf1f9216d451e7755ca169d480a3ce43631b5ad4fac14f12df462d0ad2515"
	},
	{
		"id": "381dc965256e",
		"ts": "2026-07-17T23:49:07.669Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 96349.37,
		"hash": "381dc965256e1cd85d83673842b493a522f6e6eb0a1f50cc67d9e69ea332be16"
	},
	{
		"id": "f9f0fa526090",
		"ts": "2026-07-17T22:44:49.655Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106727773.46,
		"hash": "f9f0fa526090ba0d2a2e941ff380b2b0c2079c96811d610fd79a3dea5f64d175"
	},
	{
		"id": "4e6b9fc2c1ae",
		"ts": "2026-07-17T22:44:49.904Z",
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
		"liquidityUsd": 15176049.32,
		"hash": "4e6b9fc2c1aee85ffc94977632c92a486c42ba0b2024f8809decf94d674878c7"
	},
	{
		"id": "96e4787e7c61",
		"ts": "2026-07-17T22:44:50.354Z",
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
		"liquidityUsd": 796339.55,
		"hash": "96e4787e7c612ee42e0909515674b26237033dc7563719aaf643414499c291ad"
	},
	{
		"id": "09980cd96a02",
		"ts": "2026-07-17T22:44:50.809Z",
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
		"liquidityUsd": 27361826.46,
		"hash": "09980cd96a02a8c505ffdc298c31b50ea4d510b9af8b33cdc57ef955149d7668"
	},
	{
		"id": "6bd6a0d4f186",
		"ts": "2026-07-17T22:44:51.056Z",
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
		"liquidityUsd": 5097698.88,
		"hash": "6bd6a0d4f18638eb060aa6daa9bc9f1824b216c0579b078435e3a9bfc7074e3e"
	},
	{
		"id": "8b7b0dface7e",
		"ts": "2026-07-17T22:44:51.307Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 979870.89,
		"hash": "8b7b0dface7e220669dbd9ef9db357297183d6e5ddbe44425456eefcfa83ec7f"
	},
	{
		"id": "5066c6475f22",
		"ts": "2026-07-17T22:44:51.548Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27361826.46,
		"hash": "5066c6475f22320d150f92fc257fa365a5c2957331883e5724ff1c639c10b86f"
	},
	{
		"id": "1a639b25baf6",
		"ts": "2026-07-17T22:44:51.792Z",
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
		"liquidityUsd": 2768780.61,
		"hash": "1a639b25baf68e7c019b01d1065dd3d20f971d963b685c890daab490369deae6"
	},
	{
		"id": "67499b5f8054",
		"ts": "2026-07-17T22:44:52.044Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 387072.71,
		"hash": "67499b5f805411954dd36bf8c794d219c36398964b20d3b62e9e3e3e77477452"
	},
	{
		"id": "a47f68242026",
		"ts": "2026-07-17T22:44:52.288Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 507320.79,
		"hash": "a47f6824202661ba1a0d2f6f62fa4b2dac6d322468eb697fb38645311f31b0b5"
	},
	{
		"id": "97875215601e",
		"ts": "2026-07-17T22:44:52.523Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 307529.64,
		"hash": "97875215601ed6a167e84097cb18b157f016781b621ca599162bf29e299c4e6c"
	},
	{
		"id": "46d210001809",
		"ts": "2026-07-17T22:44:52.751Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 755487.32,
		"hash": "46d21000180959315825a1eeb1be962e55703f9c4c667d4aa148d8a0b90ea42e"
	},
	{
		"id": "178d50199c21",
		"ts": "2026-07-17T22:44:52.980Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 338302.42,
		"hash": "178d50199c21807cb6040ecbbf47d1c7ff39c45fbeaeb9c37b8d73968041a483"
	},
	{
		"id": "94b935f68862",
		"ts": "2026-07-17T22:44:53.214Z",
		"symbol": "COBIE",
		"token": "0x02C4347ECE55Fe108c9A29e96221615f13070791",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 26158.64,
		"hash": "94b935f6886241598293526b05e09cbeb39834fd875cafeb606e7b69bac5ddf2"
	},
	{
		"id": "50a2d255cf30",
		"ts": "2026-07-17T22:44:53.448Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 692384.72,
		"hash": "50a2d255cf30bd5b173cec2dd47803f0db5b675cf7b09dc0310b4d3cce7d2998"
	},
	{
		"id": "92afb68d5234",
		"ts": "2026-07-17T22:44:53.684Z",
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
		"liquidityUsd": 1324250.2,
		"hash": "92afb68d52347c2c10409abe2cf18ba8b72d71e1f2c8b65aa5ea72c84ebd5e34"
	},
	{
		"id": "6ce71d93db71",
		"ts": "2026-07-17T22:44:53.915Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3590780.52,
		"hash": "6ce71d93db71f064f2cb0036858611bdff04b8b22b9a27302f32734151088619"
	},
	{
		"id": "fc658fcba3d0",
		"ts": "2026-07-17T22:44:54.143Z",
		"symbol": "ARMSTRONG",
		"token": "0xE2d5Bd0D349057D77Fcd2fa5B690161336ebE999",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 120803.15,
		"hash": "fc658fcba3d09a6cc4c0d7b6e79db22ada1c1ac05f2f3b72f876093fc7887990"
	},
	{
		"id": "b5de4e3c4a2c",
		"ts": "2026-07-17T21:49:16.912Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106729936.36,
		"hash": "b5de4e3c4a2c2550a02295badd9eaccc7a993c411bfe69b83d922df90f732f87"
	},
	{
		"id": "7c4bed507615",
		"ts": "2026-07-17T21:49:17.158Z",
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
		"liquidityUsd": 15244811.45,
		"hash": "7c4bed507615084c72f76503c17be9c459cc75b2e52c69a1147a5d2040da2f1b"
	},
	{
		"id": "b4af0eac84ab",
		"ts": "2026-07-17T21:49:17.402Z",
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
		"liquidityUsd": 797629.73,
		"hash": "b4af0eac84ab06294845703b6291deac98807f475ea945f2384c5274eff65a95"
	},
	{
		"id": "3bb542281d02",
		"ts": "2026-07-17T21:49:17.637Z",
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
		"liquidityUsd": 27537517.12,
		"hash": "3bb542281d0298fe05dd7ecc4d96138a9c817af6dddca97c8a7d96b49c562fb8"
	}
]
