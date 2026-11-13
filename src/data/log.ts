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
	"updatedAt": "2026-11-13T04:53:14.592Z",
	"tokensScored": 22759,
	"verdictsIssued": 22759,
	"safe": 19418,
	"risky": 1596,
	"likelyRug": 1745,
	"ticks": 1279
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "fb81b873ad4b",
		"ts": "2026-11-13T04:53:10.440Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 126799064.78,
		"hash": "fb81b873ad4b2d991df2128972cf7360e26016089235e016b472d15dd732415d"
	},
	{
		"id": "a689b31ef39f",
		"ts": "2026-11-13T04:53:10.703Z",
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
		"liquidityUsd": 14729738.13,
		"hash": "a689b31ef39fa0c0b5b0a95f685814e7d74e1f71048a204aaabb4a682f79d0f1"
	},
	{
		"id": "87f44978dcaa",
		"ts": "2026-11-13T04:53:10.927Z",
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
		"liquidityUsd": 216180.25,
		"hash": "87f44978dcaa99a05351f810b29f9920ab0342ca3a041d85feab62c3bfc64c31"
	},
	{
		"id": "991e5721d9a1",
		"ts": "2026-11-13T04:53:11.177Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4025389.6,
		"hash": "991e5721d9a15d769d083dd9407dc55d1002a5d9a375231d289bd5c99c9f2b40"
	},
	{
		"id": "ee64c08f2247",
		"ts": "2026-11-13T04:53:11.430Z",
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
		"liquidityUsd": 1034673.14,
		"hash": "ee64c08f224756d6425ba96e2427dbfd388ec19953d83809afb10451120a2a99"
	},
	{
		"id": "4e8f4a766193",
		"ts": "2026-11-13T04:53:11.643Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 887582.63,
		"hash": "4e8f4a7661934535cd8d247c2ee64e0a8e98aa7748353e659bf176a0a899c078"
	},
	{
		"id": "1816acc5ae71",
		"ts": "2026-11-13T04:53:11.889Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 173760.53,
		"hash": "1816acc5ae7169aa8e5a20ad3bf2ce2215e2868c8f030fcd1fb1742e87a5ceb2"
	},
	{
		"id": "0f5fb069918f",
		"ts": "2026-11-13T04:53:12.113Z",
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
		"liquidityUsd": 1478507.87,
		"hash": "0f5fb069918f0690bd6ef3a3bb94f049fd0c79793e9eae9594d938a46ef83cc2"
	},
	{
		"id": "0e967bac6e6b",
		"ts": "2026-11-13T04:53:12.324Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1405005.24,
		"hash": "0e967bac6e6b2462fe15a6c6ad5a8b7d9d9f43954685cd0eb96ab7f5db06c527"
	},
	{
		"id": "f56435b94e62",
		"ts": "2026-11-13T04:53:12.619Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 58342.24,
		"hash": "f56435b94e6279d14c8fa1fce5be73c3344daf7446d81cfb8c25a2e065c54321"
	},
	{
		"id": "462f39c133c8",
		"ts": "2026-11-13T04:53:12.821Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 612471.49,
		"hash": "462f39c133c8ab2f2e7cb6b88763c24f30030c7b21726480374125a7829b9892"
	},
	{
		"id": "1572b1d64bc4",
		"ts": "2026-11-13T04:53:13.040Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2723848.63,
		"hash": "1572b1d64bc4a33834043e695fefb4b413d666a054328b28c66d4fab3c02df4c"
	},
	{
		"id": "d145724c54e5",
		"ts": "2026-11-13T04:53:13.231Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 769123.21,
		"hash": "d145724c54e5978a0725ecb5500d81739a0988e8f0a7fd998b4734b87c5b08b1"
	},
	{
		"id": "820a01433222",
		"ts": "2026-11-13T04:53:13.450Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1936513.37,
		"hash": "820a01433222502c549562150a2600273e938c9e84d37b6b63a8abfc4a014fab"
	},
	{
		"id": "67ad58622ddc",
		"ts": "2026-11-13T04:53:13.709Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1434104.66,
		"hash": "67ad58622ddc5675d741b803a6c9461514a2b1585bd09b9f004688c1b202eab7"
	},
	{
		"id": "c6b70145f221",
		"ts": "2026-11-13T04:53:13.936Z",
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
		"liquidityUsd": 2242063.93,
		"hash": "c6b70145f2217c8daeafd9a7baa9ffc324dcfdc054c95c3849a8e13e0804a3b4"
	},
	{
		"id": "cd01f9c40bad",
		"ts": "2026-11-13T04:53:14.164Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1630084.83,
		"hash": "cd01f9c40bad1df5a27e3797be15f70d59c751acf32272eb8e0f2d237b691c1b"
	},
	{
		"id": "bd4837438f91",
		"ts": "2026-11-13T04:53:14.365Z",
		"symbol": "Claude",
		"token": "0xAb35c8ec5E51E31A350AbA8fBFc9cA132bc05b07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10272205.91,
		"hash": "bd4837438f912bb230e3c262fb54910fa6893d1e49fe1a662781dd0dcbc4df18"
	},
	{
		"id": "5c96585ed523",
		"ts": "2026-11-13T04:53:14.592Z",
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
		"liquidityUsd": 6355201.48,
		"hash": "5c96585ed5233a3ed0dcba64bc8f8127b332ad4380997886ae2faecabbecce20"
	},
	{
		"id": "5cff348509a7",
		"ts": "2026-11-12T23:09:34.810Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 132566997.7,
		"hash": "5cff348509a7e3d0e09355bb1c247bfb985c0bef69cfd91fab17625bfb9f4e27"
	},
	{
		"id": "34e9e4e06508",
		"ts": "2026-11-12T23:09:35.481Z",
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
		"liquidityUsd": 15358742.63,
		"hash": "34e9e4e06508f42d5a8eb7b836f01a66acf22153a956d7f9154ed524ea972f87"
	},
	{
		"id": "361908276be7",
		"ts": "2026-11-12T23:09:35.745Z",
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
		"liquidityUsd": 222424.34,
		"hash": "361908276be7852a2414e4a81e8feef8ffc569e928211acf6489403119b8951f"
	},
	{
		"id": "dd4f9627ca40",
		"ts": "2026-11-12T23:09:36.012Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4140197.88,
		"hash": "dd4f9627ca404c8d2011870e9170009d8c7faa8674e5c00da76c3893c574d358"
	},
	{
		"id": "48ed6cac9294",
		"ts": "2026-11-12T23:09:36.310Z",
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
		"liquidityUsd": 1082324.33,
		"hash": "48ed6cac92946822e6cff385230fb5c17fb9a3881e87b05dd60a80694b46f69d"
	},
	{
		"id": "d8c3adc3ba91",
		"ts": "2026-11-12T23:09:36.570Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 922230.88,
		"hash": "d8c3adc3ba91d0968e5968faee4b3d862fca64a31a622284756a793658599726"
	},
	{
		"id": "aeeefafe0344",
		"ts": "2026-11-12T23:09:36.841Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 778517.15,
		"hash": "aeeefafe0344bb6e247669cce976e7f67e0e4c1974e7bcf4b2bcf25b034efd7d"
	},
	{
		"id": "9593ff950e81",
		"ts": "2026-11-12T23:09:37.157Z",
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
		"liquidityUsd": 1445691.11,
		"hash": "9593ff950e81f2b647cd3cc650ab8eeda1e9ae6fb931df564604221216efb4be"
	},
	{
		"id": "a4af2975a642",
		"ts": "2026-11-12T23:09:37.437Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1409330.47,
		"hash": "a4af2975a642a2080670a1ff0e33b4dada0fc934d0f97b1e11a08a4470914e63"
	},
	{
		"id": "72116f9a453f",
		"ts": "2026-11-12T23:09:37.700Z",
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
		"liquidityUsd": 649113.55,
		"hash": "72116f9a453f6d4c1e53c03442b0e11a25bccddb927cdda2568a3d89c45507fc"
	},
	{
		"id": "915df8f2d0fa",
		"ts": "2026-11-12T23:09:37.944Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 57939.57,
		"hash": "915df8f2d0faa4bb0e6bb61f14e2b6521d1ff17a26133d7297a66c8ea1efcd3d"
	},
	{
		"id": "58c69278fa4d",
		"ts": "2026-11-12T23:09:38.190Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 806912.23,
		"hash": "58c69278fa4d9c2971ea2fd275a93725a2b37263c7c5f346ed2deb69571ecb08"
	},
	{
		"id": "bdf6eb53d485",
		"ts": "2026-11-12T23:09:38.433Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1503674.4,
		"hash": "bdf6eb53d485cdd1ce8070e78136a63fbe4ca04366b9899e7ddd4308e027bda4"
	},
	{
		"id": "7998b4d4e37f",
		"ts": "2026-11-12T23:09:38.690Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3442267.86,
		"hash": "7998b4d4e37fdc2598f3255a4cd042bd65366bfd1488431adcb06a12c1e3b671"
	},
	{
		"id": "255831856b95",
		"ts": "2026-11-12T23:09:38.934Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1939999.89,
		"hash": "255831856b956556efc78f68062b3f18fb5dab4a60f7c0f700a4d109a367a2ce"
	},
	{
		"id": "90993f6b3306",
		"ts": "2026-11-12T23:09:39.194Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1645837.13,
		"hash": "90993f6b33064daa69789fe0e4fd8da1f2f8ed2fdde5a40821f321d105b3cedc"
	},
	{
		"id": "9704f74df47f",
		"ts": "2026-11-12T23:09:39.435Z",
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
		"liquidityUsd": 6683313.52,
		"hash": "9704f74df47f8da0864c5a57771eced3a714bbc594cef819284912dcca2adeb2"
	},
	{
		"id": "36064800eb96",
		"ts": "2026-11-12T23:09:39.685Z",
		"symbol": "TSLAc",
		"token": "0xb2000000000000000000001e800a7f5189430cD0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 488185.34,
		"hash": "36064800eb965672545a689ea326cd62ce0e9e75269f17bf5c270e797c94d22a"
	},
	{
		"id": "297d5ab6eb76",
		"ts": "2026-11-12T23:09:39.926Z",
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
		"liquidityUsd": 2284857.87,
		"hash": "297d5ab6eb76b14a7ce60b98c08065a6783d61af218009de9b419d138bdfecf1"
	},
	{
		"id": "43d8aba4b9dd",
		"ts": "2026-11-12T17:53:14.132Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 132744476.79,
		"hash": "43d8aba4b9dd16ddbcbbc9e2cc39678b42347f1ed2197c593eab6e6767bf4dfc"
	},
	{
		"id": "f82f39c8aa14",
		"ts": "2026-11-12T17:53:14.648Z",
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
		"liquidityUsd": 15278573.76,
		"hash": "f82f39c8aa14d29dc9d2d86adff613c5e7f6620d8341abfe1dd29e80549c9350"
	},
	{
		"id": "b9349b4e5239",
		"ts": "2026-11-12T17:53:14.906Z",
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
		"liquidityUsd": 219226.56,
		"hash": "b9349b4e5239da78bae85e5e3d686a772a2157d7b966920ee5738fe8b84ad234"
	},
	{
		"id": "77dab721d33b",
		"ts": "2026-11-12T17:53:15.164Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4163065.24,
		"hash": "77dab721d33be06d9ec2d1af273aa3ffa617b8dedb4b4a3c1bedea1ce5d51731"
	},
	{
		"id": "b6ea8e5149eb",
		"ts": "2026-11-12T17:53:15.469Z",
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
		"liquidityUsd": 1063027.25,
		"hash": "b6ea8e5149eb72f5d34af9f53cab33217d51b6b630f080f64ae1f87216449707"
	},
	{
		"id": "3878a96a1e09",
		"ts": "2026-11-12T17:53:15.762Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 926005.39,
		"hash": "3878a96a1e098f81d2d7329ba47a063adf7363c226d47b225f29c9b709bdad0c"
	},
	{
		"id": "3833c46a0d45",
		"ts": "2026-11-12T17:53:16.012Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1306248.05,
		"hash": "3833c46a0d4593e67543571dc8b224b20c7c1d03ed246823ea74b7d441a1d893"
	},
	{
		"id": "a8d458db450b",
		"ts": "2026-11-12T17:53:16.313Z",
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
		"liquidityUsd": 1441464.63,
		"hash": "a8d458db450b4d0118488bc5e656b33eda7a598a5516b24330b64649849f658b"
	},
	{
		"id": "bf659d9fd4d9",
		"ts": "2026-11-12T17:53:16.566Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1305876.03,
		"hash": "bf659d9fd4d967fcaad5d61e0112f3edc6411c9303a12453d0ec25132d5351cd"
	},
	{
		"id": "caac8b9a4976",
		"ts": "2026-11-12T17:53:16.818Z",
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
		"liquidityUsd": 648277.18,
		"hash": "caac8b9a497618387c79023332128de71ff91c77cc600d954874f2a7664516b3"
	},
	{
		"id": "461cb8795717",
		"ts": "2026-11-12T17:53:17.060Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1522286.37,
		"hash": "461cb8795717b297ac443633fdcb1fe0b2a4a7be49e0320b1d998963ab19197d"
	},
	{
		"id": "ed1003d76b46",
		"ts": "2026-11-12T17:53:17.297Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2175037.09,
		"hash": "ed1003d76b46609b986499f8b4e6f3cb17fd455dcc6aab89dc63b7f05e5338f9"
	},
	{
		"id": "d8c0bfc33257",
		"ts": "2026-11-12T17:53:17.537Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1914849.41,
		"hash": "d8c0bfc33257d5508ce3d2d697444ec5cdb0cb74e2922d77abdfedfed40d1644"
	},
	{
		"id": "7e07d0a30579",
		"ts": "2026-11-12T17:53:17.775Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 823594.95,
		"hash": "7e07d0a30579925bee5a541aa38b14f89cb7392a2e19a8a05e451f853f9102bb"
	},
	{
		"id": "402f2694cf0e",
		"ts": "2026-11-12T17:53:18.012Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 57225.47,
		"hash": "402f2694cf0e32a806385168664c07b7d31d4224a68d02603855f3470fdf2d53"
	},
	{
		"id": "2d19ed770881",
		"ts": "2026-11-12T17:53:18.257Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1649429.91,
		"hash": "2d19ed770881e3512b730aea1c50ddd5391f8b332446649266db3233df4a98bd"
	},
	{
		"id": "f29af4b96590",
		"ts": "2026-11-12T17:53:18.495Z",
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
		"liquidityUsd": 6669993.39,
		"hash": "f29af4b96590669fb21c73f66351867176ec740367ce3e4ad27648703944c0a6"
	},
	{
		"id": "e921c310e7cc",
		"ts": "2026-11-12T17:53:18.733Z",
		"symbol": "REVVY",
		"token": "0x3441e8fCdD380c4e7F5C7F55CCd599B2a2afCcCC",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 57981.74,
		"hash": "e921c310e7cc3cf81b9d3144562fe5d66b499356a3595204273f964650e2511f"
	},
	{
		"id": "52d5287fb322",
		"ts": "2026-11-12T17:53:18.970Z",
		"symbol": "TSLAc",
		"token": "0xb2000000000000000000001e800a7f5189430cD0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 468141.95,
		"hash": "52d5287fb32221b42fc908d540486fe479fcd75bae0bc2e39ba33e43355fcb91"
	},
	{
		"id": "42ad0384068c",
		"ts": "2026-11-12T09:12:21.364Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 133853867.55,
		"hash": "42ad0384068c0dd29164b09a01b4ca0a87c89d154d604b1f0471d9bbb47db9e4"
	},
	{
		"id": "ba7b1d631956",
		"ts": "2026-11-12T09:12:21.888Z",
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
		"liquidityUsd": 15394452.71,
		"hash": "ba7b1d631956f5d3192d47a35ca0b05fa534344b271202173b2e1de4cd046668"
	},
	{
		"id": "fc5b8eef4ca1",
		"ts": "2026-11-12T09:12:22.138Z",
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
		"liquidityUsd": 229102.56,
		"hash": "fc5b8eef4ca10d04620d31a456e4922c39f7758324fed684c69ccde8a0db344b"
	},
	{
		"id": "0f0f7d163f2a",
		"ts": "2026-11-12T09:12:22.426Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4209550.58,
		"hash": "0f0f7d163f2afd7785e1d702ad8f149c4826bac74293fd8a6b54c489734f95a9"
	},
	{
		"id": "567feed4d615",
		"ts": "2026-11-12T09:12:22.695Z",
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
		"liquidityUsd": 1188272.81,
		"hash": "567feed4d6159f6851e8df70c26a892262c5a751f54a0b178079ac9268174cfe"
	},
	{
		"id": "ffa9c9a0c746",
		"ts": "2026-11-12T09:12:22.939Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 931481.87,
		"hash": "ffa9c9a0c746826427552f61c1539f747e605590388bc2343f78d5d241bf1fa6"
	},
	{
		"id": "e0524b4ca4f3",
		"ts": "2026-11-12T09:12:23.205Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4209591.43,
		"hash": "e0524b4ca4f326f5dcd3b715a581535d99ce059c5f04a340b9145a1d0d94da21"
	},
	{
		"id": "1bc5b31203c9",
		"ts": "2026-11-12T09:12:23.484Z",
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
		"liquidityUsd": 1178674.21,
		"hash": "1bc5b31203c99febc8843746314207f71b480025a6f82cf2f132863e40d49678"
	},
	{
		"id": "daa345cb1a19",
		"ts": "2026-11-12T09:12:23.735Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1623777.47,
		"hash": "daa345cb1a190566f5013f01fc13c1d5afd7efa06b6cece61fea864f4fc93bd9"
	},
	{
		"id": "0fcf9455628e",
		"ts": "2026-11-12T09:12:24.029Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1559370.47,
		"hash": "0fcf9455628e9f86ab24d9b50fd67931c07cf9a793832316efc85bd13b7f24fa"
	},
	{
		"id": "d264bb60912d",
		"ts": "2026-11-12T09:12:24.270Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 852759.64,
		"hash": "d264bb60912d3b2432ca9a3727a84618fd2072d1d533866a1cd16fda2625a496"
	},
	{
		"id": "d96f5e29c672",
		"ts": "2026-11-12T09:12:24.506Z",
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
		"liquidityUsd": 1516702.6,
		"hash": "d96f5e29c6722ffb24cc40df1c55799f30658e0d46e0515d713cbcf2022778c2"
	},
	{
		"id": "95894aa78e3e",
		"ts": "2026-11-12T09:12:24.734Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1726701.68,
		"hash": "95894aa78e3e0e3f22561a0cae928a148c7b70def7d070c2baef5a920a438442"
	},
	{
		"id": "69a983d1cf90",
		"ts": "2026-11-12T09:12:24.984Z",
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
		"liquidityUsd": 2342460.27,
		"hash": "69a983d1cf9024a7d627427230bdaf5d5ae40651a34189d59f7f25cbc3539c08"
	},
	{
		"id": "10fa9149455a",
		"ts": "2026-11-12T09:12:25.215Z",
		"symbol": "RSC",
		"token": "0xFbB75A59193A3525a8825BeBe7D4b56899E2f7e1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 150415.09,
		"hash": "10fa9149455a0499d5977294a3e2bfb608da4211c9a1fa84f45a6b886b08a883"
	},
	{
		"id": "b2359eaa9321",
		"ts": "2026-11-12T09:12:25.469Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1831132.4,
		"hash": "b2359eaa93212a114d66204945c648f2bfb04dee904bbffbe0822dd1e3cf198a"
	},
	{
		"id": "4129970778b6",
		"ts": "2026-11-12T09:12:25.714Z",
		"symbol": "REVVY",
		"token": "0x3441e8fCdD380c4e7F5C7F55CCd599B2a2afCcCC",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 62416.8,
		"hash": "4129970778b6a19efb46e81c6bf8558c8f4862184eaca64f3a841c5e92b6191f"
	},
	{
		"id": "3a9df75c12f3",
		"ts": "2026-11-12T09:12:25.950Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 182890.55,
		"hash": "3a9df75c12f3587413ac20b8234c07f8eb2a4cf3b0fb8a9b0c7b2c1bd2d3a977"
	},
	{
		"id": "06677c3066a8",
		"ts": "2026-11-12T09:12:26.188Z",
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
		"liquidityUsd": 6859775.56,
		"hash": "06677c3066a8044530c0fb55176064f2f3af02b2f6b3b4f45b2a15567c075b81"
	},
	{
		"id": "5cac2c919d63",
		"ts": "2026-11-12T01:15:34.613Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 134375133.91,
		"hash": "5cac2c919d63526c4c84e3fed6d0e29363f8b49fc8cec755b3606ef67dedf87d"
	},
	{
		"id": "ba91545295df",
		"ts": "2026-11-12T01:15:34.870Z",
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
		"liquidityUsd": 15412927.16,
		"hash": "ba91545295dfded257e679df65f6f910b520a721a2a66098dfc60c26445f68d2"
	},
	{
		"id": "6d42c4a75b50",
		"ts": "2026-11-12T01:15:35.121Z",
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
		"liquidityUsd": 234048.44,
		"hash": "6d42c4a75b5055a307a20eb4a2480f9a25ee5550b32047ba6630be87d96e3235"
	},
	{
		"id": "1be98806cb35",
		"ts": "2026-11-12T01:15:35.386Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4244469.1,
		"hash": "1be98806cb356e8121579b6ba24b392b91cd34575fc450eb80c35154a22484ce"
	},
	{
		"id": "ee0d4ac05d2e",
		"ts": "2026-11-12T01:15:35.637Z",
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
		"liquidityUsd": 1137035.55,
		"hash": "ee0d4ac05d2e3974a5a574c09060b1f9f893ec5f23ed150d1c8aa1c2da94ba31"
	},
	{
		"id": "fa411446be3d",
		"ts": "2026-11-12T01:15:35.914Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 935899.25,
		"hash": "fa411446be3dd8a9bd247bbc5df06aea80ebb73c4fc17a0cdb6b3e4df5484665"
	},
	{
		"id": "6d9b3f324292",
		"ts": "2026-11-12T01:15:36.167Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4244469.1,
		"hash": "6d9b3f32429287f4eded433062d07acaf092244fdb9df8fbcfe4e92549f73e1a"
	},
	{
		"id": "2baca47a711c",
		"ts": "2026-11-12T01:15:36.433Z",
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
		"liquidityUsd": 1170608.63,
		"hash": "2baca47a711c6f366e82b2770a955fc4e506f8723a16402c58fb1dd386c90811"
	},
	{
		"id": "29fdd193a125",
		"ts": "2026-11-12T01:15:36.688Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 857221.99,
		"hash": "29fdd193a12559dc068b0e1753a6ed41aff55689caf7e8c8e273bf2043b33301"
	},
	{
		"id": "4d1bb9f7f92a",
		"ts": "2026-11-12T01:15:36.950Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1618354.39,
		"hash": "4d1bb9f7f92a9901eb94d5df3f9f2f21d7de989391d7d63cfd695e0cd05e9c61"
	},
	{
		"id": "c3bb5b9652ef",
		"ts": "2026-11-12T01:15:37.185Z",
		"symbol": "RSC",
		"token": "0xFbB75A59193A3525a8825BeBe7D4b56899E2f7e1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 153817.24,
		"hash": "c3bb5b9652ef097a0b73a03875c09c6ac9346f63fd8dcc6c3f3cd0f45ccca3af"
	},
	{
		"id": "91875e9e4d97",
		"ts": "2026-11-12T01:15:37.437Z",
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
		"liquidityUsd": 2385419.87,
		"hash": "91875e9e4d97472e15173ed809d7fd97555e73bbb18f7667a6f248537e26ec4d"
	},
	{
		"id": "5f34a3f98ce0",
		"ts": "2026-11-12T01:15:37.677Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1568916.13,
		"hash": "5f34a3f98ce09a20366a2111cd7995762458ddde66854d9833172092f51604f5"
	},
	{
		"id": "57937416af2d",
		"ts": "2026-11-12T01:15:37.927Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1788802.77,
		"hash": "57937416af2d9fb503e28c09809f0825f234c7400e6330c30d8ab43f4d1a0fb7"
	},
	{
		"id": "81e418821d19",
		"ts": "2026-11-12T01:15:38.164Z",
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
		"liquidityUsd": 1693712.78,
		"hash": "81e418821d19a6de7507700d9cc56c2069a07076d4a04d6096b58a5d665d9639"
	},
	{
		"id": "16c6479edfb7",
		"ts": "2026-11-12T01:15:38.414Z",
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
		"liquidityUsd": 6880880.28,
		"hash": "16c6479edfb76fbb5697212c00900bc3512bbad008140d4a9e7c52abd01ceaf1"
	},
	{
		"id": "ff53fbdffce9",
		"ts": "2026-11-12T01:15:38.649Z",
		"symbol": "REVVY",
		"token": "0x3441e8fCdD380c4e7F5C7F55CCd599B2a2afCcCC",
		"score": 65,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.3,
		"flags": [
			"medium_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 45990.1,
		"hash": "ff53fbdffce9342a29818eb6c37bc98dd260bc1f9a6336d5e79769a68a9f1765"
	},
	{
		"id": "9bec39f076fc",
		"ts": "2026-11-12T01:15:38.896Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3394112.9,
		"hash": "9bec39f076fc8469375d6d8477c7d82a04e0238b92cea858736c286b7281fed1"
	},
	{
		"id": "11001fab23d3",
		"ts": "2026-11-12T01:15:39.130Z",
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
		"liquidityUsd": 1166939.31,
		"hash": "11001fab23d3d5b5b96333f3f30df27ebded0485bffc30c59c4b7b5e0384a5e9"
	},
	{
		"id": "c27b8daa822c",
		"ts": "2026-11-11T18:19:10.218Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 135656095.9,
		"hash": "c27b8daa822c842a83976ec60f73cf84313a88bd4aae4eb926629a5d8f69c543"
	},
	{
		"id": "c6846de72f55",
		"ts": "2026-11-11T18:19:10.711Z",
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
		"liquidityUsd": 15646213.09,
		"hash": "c6846de72f5594fa1076006ba2368ce354e02679eb0ffa0f2a0a844471a2a558"
	},
	{
		"id": "220660fcf237",
		"ts": "2026-11-11T18:19:10.948Z",
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
		"liquidityUsd": 234737.31,
		"hash": "220660fcf2374e56bdb5e2f82a5a812e872dbb3d8e8a4d6f83c56b10581f6de4"
	},
	{
		"id": "349238d2e74a",
		"ts": "2026-11-11T18:19:11.206Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4313640.53,
		"hash": "349238d2e74a064606fcc49ac0da44e33088aa9871b77569d2938224eb7af21e"
	},
	{
		"id": "e66f25f922e0",
		"ts": "2026-11-11T18:19:11.448Z",
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
		"liquidityUsd": 1214457.51,
		"hash": "e66f25f922e0608f11452d79fa9abb524e153612d267a1db952742b686126144"
	},
	{
		"id": "5184cdfde411",
		"ts": "2026-11-11T18:19:11.694Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 957063.61,
		"hash": "5184cdfde41183835195b9860492ac7251fd3c87372e6f0eaae55eb1d5f6b326"
	},
	{
		"id": "f4e3225c71f1",
		"ts": "2026-11-11T18:19:11.941Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4313640.53,
		"hash": "f4e3225c71f1a832517f6f95f80b543f67f1394b570b21fc8eb2af9eb6138b1f"
	},
	{
		"id": "bea19b281076",
		"ts": "2026-11-11T18:19:12.194Z",
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
		"liquidityUsd": 1037448.28,
		"hash": "bea19b2810768b155f9fdb3a55dbf9339a93ed70519f04f3c4f7415c5ee45302"
	},
	{
		"id": "c2f0b8ef800c",
		"ts": "2026-11-11T18:19:12.434Z",
		"symbol": "RSC",
		"token": "0xFbB75A59193A3525a8825BeBe7D4b56899E2f7e1",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 145591.74,
		"hash": "c2f0b8ef800cb969797b721b59d5d81184b09b49ba5f9b964b640aff28b902ee"
	},
	{
		"id": "f94e44f7cb07",
		"ts": "2026-11-11T18:19:12.669Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1616144.24,
		"hash": "f94e44f7cb07cb838d5159e603876aff3b4bb576efe75ce87cc00edca1987b80"
	},
	{
		"id": "a85df102a2a9",
		"ts": "2026-11-11T18:19:12.893Z",
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
		"liquidityUsd": 2414158.44,
		"hash": "a85df102a2a9e15f84b671e8d0d15d0d220cc2112def5277987719e9e756e29f"
	},
	{
		"id": "06e6f461e380",
		"ts": "2026-11-11T18:19:13.112Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 868094.98,
		"hash": "06e6f461e380548efb1ced37ab985685c13c51e4929d47e11e009ec5b601fea0"
	},
	{
		"id": "eedaf71f0b22",
		"ts": "2026-11-11T18:19:13.338Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1767509.13,
		"hash": "eedaf71f0b229096fbf097c0581bcbc01536a9110c54e352a9da3fdb914f20e5"
	},
	{
		"id": "64d6a6fa6c26",
		"ts": "2026-11-11T18:19:13.557Z",
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
		"liquidityUsd": 7042657.55,
		"hash": "64d6a6fa6c26fbd620b6323fab3498ad5423916a6eaa9ca5783caf7940a27e7f"
	},
	{
		"id": "f0103bcf490b",
		"ts": "2026-11-11T18:19:13.792Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1572753.09,
		"hash": "f0103bcf490bf1a676622d55619e0427a1f648239c837dc173573f831056869a"
	},
	{
		"id": "155ce31c9139",
		"ts": "2026-11-11T18:19:14.013Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2378969.46,
		"hash": "155ce31c913974fa3c48b6b8f3980b83ef7d0eca2e6762984677f5391af4aca7"
	},
	{
		"id": "faef60715cb8",
		"ts": "2026-11-11T18:19:14.237Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 127094.66,
		"hash": "faef60715cb8fcef2d641c9afc54e5c3cf23d9dfdadf6863301964737fcbeb9c"
	},
	{
		"id": "e1a320f8a597",
		"ts": "2026-11-11T18:19:14.459Z",
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
		"liquidityUsd": 666446.91,
		"hash": "e1a320f8a5971c7e3e8ede3ddf73238c4a347042fb2da1a10e1678d416c9954a"
	},
	{
		"id": "5e46338bb064",
		"ts": "2026-11-11T18:19:14.684Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 641104.77,
		"hash": "5e46338bb06401c9fc57ca920e4d512601556ce6b6d7091bb71a7f0054bfa3c3"
	},
	{
		"id": "95aafc9a11b8",
		"ts": "2026-11-11T10:15:09.630Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 133795939.05,
		"hash": "95aafc9a11b86d58bcd1c59939e4c834f3c7ce101d6b19c9fd59ba7215ac6ea4"
	},
	{
		"id": "43acc10f534f",
		"ts": "2026-11-11T10:15:09.918Z",
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
		"liquidityUsd": 15443806.14,
		"hash": "43acc10f534f14c59de1f45b1ff24ddd4dbb3e3d1917d60abc04902cc20a2eae"
	},
	{
		"id": "e842ecd7ea76",
		"ts": "2026-11-11T10:15:10.217Z",
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
		"liquidityUsd": 232758.41,
		"hash": "e842ecd7ea76073e3d01575bb7e1153387847f4596c882df0b71152325eb9955"
	},
	{
		"id": "eb4022f8efa5",
		"ts": "2026-11-11T10:15:10.509Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4278046.22,
		"hash": "eb4022f8efa5908d80e93c116ac238ed058ad520233571d1e380008f476aebd7"
	},
	{
		"id": "cd1207a5d844",
		"ts": "2026-11-11T10:15:11.025Z",
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
		"liquidityUsd": 1356167.58,
		"hash": "cd1207a5d8442a67f3723bc3a499078016112dac7308cc99ae78cd19d57c6e81"
	},
	{
		"id": "d8f4e2f14c4e",
		"ts": "2026-11-11T10:15:11.341Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 942505.65,
		"hash": "d8f4e2f14c4e0e5cb3dfe44620204ac19f5493bd1347853bd0a030ebd243241f"
	},
	{
		"id": "6fd4abacd205",
		"ts": "2026-11-11T10:15:11.571Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 127783.81,
		"hash": "6fd4abacd20589dc295fefcda0018cdf9901499556e5bfbe215094cbff2aeebf"
	},
	{
		"id": "eaecce5e4136",
		"ts": "2026-11-11T10:15:11.841Z",
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
		"liquidityUsd": 1491212.02,
		"hash": "eaecce5e4136f5de8aba51059b08182f7173da0eee1f4ab43430700fca488a20"
	},
	{
		"id": "4d35e4dd9834",
		"ts": "2026-11-11T10:15:12.105Z",
		"symbol": "RSC",
		"token": "0xFbB75A59193A3525a8825BeBe7D4b56899E2f7e1",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 148164.46,
		"hash": "4d35e4dd9834ef4df98649366cc123aa63ede8e1dda42631289d0b34ffe6878b"
	},
	{
		"id": "1dc829f1828c",
		"ts": "2026-11-11T10:15:12.367Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1607685.92,
		"hash": "1dc829f1828cafa4994813d98970dde5b3df9c8553e671129bcc5c75e9087daa"
	},
	{
		"id": "1a4d2d3b0c31",
		"ts": "2026-11-11T10:15:12.593Z",
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
		"liquidityUsd": 6738870.9,
		"hash": "1a4d2d3b0c31e186a5e3a7d1a755e2ab213374fbc179ddba4eaf4e27aa03ced9"
	},
	{
		"id": "72a5c91986f0",
		"ts": "2026-11-11T10:15:12.821Z",
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
		"liquidityUsd": 2377912.35,
		"hash": "72a5c91986f000c495ef8ed4d59df287d0e21968928b8c534849fa42bf76a9b1"
	},
	{
		"id": "b992aac63f4c",
		"ts": "2026-11-11T10:15:13.035Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 875871.72,
		"hash": "b992aac63f4cc047edd7d3db8dbfe3604c97002e2efe2beeaadcfcaa87829cf9"
	},
	{
		"id": "8339a3f2c65b",
		"ts": "2026-11-11T10:15:13.260Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 127767.66,
		"hash": "8339a3f2c65b708b58f5018a85ba8c07be940ecacdbce3b64b40c82fe420cb27"
	},
	{
		"id": "3f6d0779353e",
		"ts": "2026-11-11T10:15:13.493Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1620063.25,
		"hash": "3f6d0779353e57cafef7ea60ab07a4da8d0ebaa16b8a216be5e4a131f88e0876"
	},
	{
		"id": "0f2b2f796ce9",
		"ts": "2026-11-11T10:15:13.728Z",
		"symbol": "MUc",
		"token": "0xb200000000000000000000Fd2f87532B90095211",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 553641.67,
		"hash": "0f2b2f796ce9905ef7a12a6d3df9a12b458415452810746aef95cf82ce8b1c71"
	},
	{
		"id": "117355032171",
		"ts": "2026-11-11T10:15:13.956Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1552588.35,
		"hash": "1173550321718eefbf0b1206ff52cf07564084bed1291217a1612e1eb71dec1e"
	},
	{
		"id": "c19d66e02dc0",
		"ts": "2026-11-11T10:15:14.182Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 397930.07,
		"hash": "c19d66e02dc01600a2b1cd35d585928a402d74a80a3698f6f705a054ef06fe76"
	},
	{
		"id": "5ceaf0a439c5",
		"ts": "2026-11-11T02:29:32.461Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 133751324.07,
		"hash": "5ceaf0a439c5928ceb14e1b3b85b827886048efc0cd1a0ea49c7b10eaa4159df"
	},
	{
		"id": "5d4ddd612dbb",
		"ts": "2026-11-11T02:29:32.747Z",
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
		"liquidityUsd": 15334361.55,
		"hash": "5d4ddd612dbbed7f13b81cefb665e492f4e227eebf90c53b8343f265422849e1"
	},
	{
		"id": "1c2fb79a51e7",
		"ts": "2026-11-11T02:29:32.993Z",
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
		"liquidityUsd": 231376.31,
		"hash": "1c2fb79a51e7d465c8542defd44f73c6b2f4254674586587aada4d1b35541bfa"
	},
	{
		"id": "7da54f167805",
		"ts": "2026-11-11T02:29:33.253Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4253645.42,
		"hash": "7da54f167805ba0141498bfa0b85adec9e961a1fafdd1f2c2d614bed50e08b38"
	},
	{
		"id": "375816576801",
		"ts": "2026-11-11T02:29:33.521Z",
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
		"liquidityUsd": 1290292.03,
		"hash": "3758165768015f1c5c82964d906605fd18dba127569aacb9900e52613736dee0"
	},
	{
		"id": "db43c2e64fc1",
		"ts": "2026-11-11T02:29:33.772Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 942557.97,
		"hash": "db43c2e64fc186c3ff4c54d1a13fdcae8ea356b1eb03ae47aaedad7068da59ee"
	},
	{
		"id": "71e6619dc0cc",
		"ts": "2026-11-11T02:29:34.101Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 127780.64,
		"hash": "71e6619dc0cc965f3efa971ac8454046fe4463c825b4f6c0c188135384738f44"
	},
	{
		"id": "2d6e41740fb5",
		"ts": "2026-11-11T02:29:34.357Z",
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
		"liquidityUsd": 1462729,
		"hash": "2d6e41740fb55368fa7e64be0df801b810a0b85592df1eb13d8fef1a45f9dcb9"
	},
	{
		"id": "cda6f0cfa9dc",
		"ts": "2026-11-11T02:29:34.601Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1611758.94,
		"hash": "cda6f0cfa9dc6925053337d9903765521441e42a2ffb6a955b864fc037fc59e3"
	},
	{
		"id": "be2b1bc575f8",
		"ts": "2026-11-11T02:29:34.894Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 402793.33,
		"hash": "be2b1bc575f8f5ae4d7cc8542162d99302a7111c30cc71db050246013c02942a"
	},
	{
		"id": "4b535408764d",
		"ts": "2026-11-11T02:29:35.170Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 861054.21,
		"hash": "4b535408764ddf87b37328d0975ab83a734acb569bd9fe8ba7c64657d3567efb"
	},
	{
		"id": "f4556c4f21d7",
		"ts": "2026-11-11T02:29:35.546Z",
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
		"liquidityUsd": 6780554.67,
		"hash": "f4556c4f21d743a06e2459668f162a9c811865eb99ca786c15de7094e92ca18f"
	},
	{
		"id": "bf92b223bdcb",
		"ts": "2026-11-11T02:29:35.774Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 470062.55,
		"hash": "bf92b223bdcb240e8d32927764a02909aca43a1a2e6e3077dcb9d4e999700633"
	},
	{
		"id": "1f19bee2b74d",
		"ts": "2026-11-11T02:29:36.002Z",
		"symbol": "RSC",
		"token": "0xFbB75A59193A3525a8825BeBe7D4b56899E2f7e1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 151551.44,
		"hash": "1f19bee2b74dd5d1bdf216c395ba153121c6245d563990bc0f811a9d9cdad425"
	},
	{
		"id": "095ce533dfe6",
		"ts": "2026-11-11T02:29:36.237Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3056617.25,
		"hash": "095ce533dfe6bf0dd422096009d5e51f2cee5488449235db6607c7fa8004b3c6"
	},
	{
		"id": "744136dfa841",
		"ts": "2026-11-11T02:29:36.486Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1577177.02,
		"hash": "744136dfa841d4ecd5b027d451cb7b2485a1bf4b8855a85acf9f5051de46beae"
	},
	{
		"id": "794e5abee1f8",
		"ts": "2026-11-11T02:29:36.736Z",
		"symbol": "MUc",
		"token": "0xb200000000000000000000Fd2f87532B90095211",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 603246.81,
		"hash": "794e5abee1f82a1617b85c314e12401770995996593a3889e449c026ff822b82"
	},
	{
		"id": "d5dee41ce54f",
		"ts": "2026-11-11T02:29:36.971Z",
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
		"liquidityUsd": 2399815.89,
		"hash": "d5dee41ce54fdeeb0e60dba6bc88a05b79acca41b1119afa79cd9c2e9fdd541a"
	},
	{
		"id": "0359eab9d9a5",
		"ts": "2026-11-10T22:46:37.465Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 133761808.6,
		"hash": "0359eab9d9a57b1c8e10971abbe8ac4371f3180bf6355cd8c9736f4550177c7a"
	},
	{
		"id": "fd953a8a9e35",
		"ts": "2026-11-10T22:46:37.711Z",
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
		"liquidityUsd": 15374788.01,
		"hash": "fd953a8a9e354a6dd20771fd32b33bc72b3a15b9302b419273ac6493aa182069"
	},
	{
		"id": "9011b216f18b",
		"ts": "2026-11-10T22:46:37.960Z",
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
		"liquidityUsd": 232574.4,
		"hash": "9011b216f18b76f5fcf6ab6faf0fc95fc4b4ec8ad794457460760140bcc89677"
	},
	{
		"id": "7e4e1d7af3e1",
		"ts": "2026-11-10T22:46:38.239Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4306738.34,
		"hash": "7e4e1d7af3e1c50905c2a303be1c4dbae44a403be38310aa41c4d94afa05b4ff"
	},
	{
		"id": "741b74314d6b",
		"ts": "2026-11-10T22:46:38.496Z",
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
		"liquidityUsd": 1290440.65,
		"hash": "741b74314d6b2ad914702360ceeaa2794f57f4b1a00854464459dfb8fa5c415c"
	},
	{
		"id": "4c889c5cb4e1",
		"ts": "2026-11-10T22:46:38.750Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 941138.22,
		"hash": "4c889c5cb4e1a3927551ad90ce9c11b1f6a92f89ac6b6fef44607d4ebbee2e38"
	},
	{
		"id": "208b2fdf1e50",
		"ts": "2026-11-10T22:46:39.003Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 127772.47,
		"hash": "208b2fdf1e5018d5ed366284fa8f6c88f409292097289bd67511b73073e6e919"
	},
	{
		"id": "c2e7792d11eb",
		"ts": "2026-11-10T22:46:39.280Z",
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
		"liquidityUsd": 1459202.75,
		"hash": "c2e7792d11ebeab65638c6e314ca954fa4054d91a89c4afa6f0dd128aebadc1f"
	},
	{
		"id": "97920df16c51",
		"ts": "2026-11-10T22:46:39.530Z",
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
		"liquidityUsd": 6804288.58,
		"hash": "97920df16c511ec71c408ef4af7ef7dd7b4a8d96a6699e9688d5a99cf78af2a2"
	},
	{
		"id": "72fbb79db8ca",
		"ts": "2026-11-10T22:46:39.792Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 480206.63,
		"hash": "72fbb79db8ca1cd7ebbb0fd7b5f1c9932a9fa79385d88da7815133325ff39b14"
	},
	{
		"id": "6c99c344a708",
		"ts": "2026-11-10T22:46:40.023Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 863085.7,
		"hash": "6c99c344a708f57665d253fd177b80f6007ebc55260ddac839fcd87c07197787"
	},
	{
		"id": "020a8bd33eeb",
		"ts": "2026-11-10T22:46:40.259Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 408831.14,
		"hash": "020a8bd33eeba083f998b80b93d27cbc4eebc7f3300609f1796ea90ae1ccd67d"
	},
	{
		"id": "e5be1d6f6d75",
		"ts": "2026-11-10T22:46:40.485Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1620410.02,
		"hash": "e5be1d6f6d754361340fb8e5b52950b9b61591dec7870fa326bb58f42c196c2c"
	},
	{
		"id": "bf4a2599de29",
		"ts": "2026-11-10T22:46:40.715Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1709862.6,
		"hash": "bf4a2599de2953cec47e8d1c64be35dad972585fa57769ff553934b331f91121"
	},
	{
		"id": "7a26de24fde8",
		"ts": "2026-11-10T22:46:40.944Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3046284.12,
		"hash": "7a26de24fde8f3726607b676e67b813e622aee057643a4336a204e118f09fda3"
	},
	{
		"id": "d8d1da537726",
		"ts": "2026-11-10T22:46:41.166Z",
		"symbol": "MUc",
		"token": "0xb200000000000000000000Fd2f87532B90095211",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 586221.73,
		"hash": "d8d1da537726512efa11c6d2f51fdf5928c899e01059bf1a9c6d5834a8d5ad9d"
	},
	{
		"id": "8f8b1c9e9bc0",
		"ts": "2026-11-10T22:46:41.393Z",
		"symbol": "RSC",
		"token": "0xFbB75A59193A3525a8825BeBe7D4b56899E2f7e1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 148455.56,
		"hash": "8f8b1c9e9bc02520733767c557098d20d9b3a171c0f6f836af7e4e940334e391"
	},
	{
		"id": "66f7bdba61a6",
		"ts": "2026-11-10T22:46:41.626Z",
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
		"liquidityUsd": 2393682.79,
		"hash": "66f7bdba61a6e7dd05fa36001a548de6a389bedd6901805b2f2e4f87f2d9318f"
	},
	{
		"id": "23feb78eeca1",
		"ts": "2026-11-10T17:26:48.869Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 132320396.85,
		"hash": "23feb78eeca14bbe0cb05306846d06714acef40bb00e333ca2624741a790d271"
	},
	{
		"id": "08be08b47849",
		"ts": "2026-11-10T17:26:49.157Z",
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
		"liquidityUsd": 15125814.64,
		"hash": "08be08b478493429930c8630339949e5384612cb3363f8c15b8a331d3156c031"
	},
	{
		"id": "b4100bc45e50",
		"ts": "2026-11-10T17:26:49.416Z",
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
		"liquidityUsd": 230593.59,
		"hash": "b4100bc45e5008b4c2a1257bc2f96fca095c1c0d9295e00f4172a99540e2ca67"
	},
	{
		"id": "ba1b0e96fd0d",
		"ts": "2026-11-10T17:26:49.677Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4262297.7,
		"hash": "ba1b0e96fd0d5b2230c27ffbd7a88836047dea265830e24e3053b9db2941670e"
	},
	{
		"id": "9a088c574d39",
		"ts": "2026-11-10T17:26:49.964Z",
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
		"liquidityUsd": 1277379.55,
		"hash": "9a088c574d39eef98416cf988d7211b438e5dd669468f1f6f232136caace195f"
	},
	{
		"id": "a5ee6e76169f",
		"ts": "2026-11-10T17:26:50.306Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 929356.06,
		"hash": "a5ee6e76169fc4c4fcc5f25b265e778c18a7b3e83557bbc7e9b82f17a740ccfe"
	},
	{
		"id": "1ed90e475c0f",
		"ts": "2026-11-10T17:26:50.603Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 127613.32,
		"hash": "1ed90e475c0f261b57aca8987c988f1bad95d3397522e0ca7b04b6480ff708e7"
	},
	{
		"id": "303afd7d5b4a",
		"ts": "2026-11-10T17:26:51.250Z",
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
		"liquidityUsd": 1439889.01,
		"hash": "303afd7d5b4aae4cb3b8b2f7ab1fa6b6b70539608d8a159f61af1107aff1ac8c"
	},
	{
		"id": "4255a3a7ba7d",
		"ts": "2026-11-10T17:26:51.520Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 853219.7,
		"hash": "4255a3a7ba7da968af5199a5a3a71a0fff68ca5129f662978c7cbb6d524e0e65"
	},
	{
		"id": "b841377bbe69",
		"ts": "2026-11-10T17:26:51.766Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 482541.47,
		"hash": "b841377bbe697940e00c6654b483a1ff5220e3f534b1d08880656e08f24c0d96"
	},
	{
		"id": "a3ae3775a802",
		"ts": "2026-11-10T17:26:52.005Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 330097.49,
		"hash": "a3ae3775a802c3e7e07182e6dc5c82e83094843b1ebc0f3274716b136598cec8"
	},
	{
		"id": "46e5869a022f",
		"ts": "2026-11-10T17:26:52.239Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1495747.18,
		"hash": "46e5869a022fefd35d2b875542126c8c3aec99eaf72024d720c410069cd8ec94"
	},
	{
		"id": "2c061dca2765",
		"ts": "2026-11-10T17:26:52.477Z",
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
		"liquidityUsd": 6670626.31,
		"hash": "2c061dca276508080ebe2ee3b17dddf0a1e71b2965c16b6fa449930ca81c18ac"
	},
	{
		"id": "f9a2ec2b1c44",
		"ts": "2026-11-10T17:26:52.709Z",
		"symbol": "MUc",
		"token": "0xb200000000000000000000Fd2f87532B90095211",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 554924.74,
		"hash": "f9a2ec2b1c440c77a79e848e98b70973c63377e4ad2e540ec8f64a4e3fdf0735"
	},
	{
		"id": "e2c1ab78154c",
		"ts": "2026-11-10T17:26:52.945Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1619267.68,
		"hash": "e2c1ab78154caa8cd94c9f6e14e82ddeb20fb9fccf6710fff25c1bfc85446cb3"
	},
	{
		"id": "c8da5b13b1cc",
		"ts": "2026-11-10T17:26:53.183Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2979893.2,
		"hash": "c8da5b13b1cc0901e1fc1aa4f18e06ed6860856987310aa9c0572c22f633e666"
	},
	{
		"id": "7371ee30d9aa",
		"ts": "2026-11-10T17:26:53.420Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 131452.39,
		"hash": "7371ee30d9aa45c7946ddb11c3d517fa067987ce7cac5b2e17167859dc8f758f"
	},
	{
		"id": "349bcbdee6c2",
		"ts": "2026-11-10T17:26:54.351Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 120064.16,
		"hash": "349bcbdee6c2623bdb7b4b0bcb62c47511eade224d661debdf724cfc52576038"
	},
	{
		"id": "9103950e3bea",
		"ts": "2026-11-10T17:26:54.588Z",
		"symbol": "KNTQ",
		"token": "0xb80194e3868511b8f43E1D5d6E255cD9e7c3e7dD",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 800746.83,
		"hash": "9103950e3beabbfd35db0db6f34ec3aea414cbaf45fd02004fac69811ca81fe1"
	},
	{
		"id": "d6e012d298cb",
		"ts": "2026-11-10T17:26:54.823Z",
		"symbol": "VEIL",
		"token": "0x767A739D1A152639e9Ea1D8c1BD55FDC5B217D7f",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 18353.84,
		"hash": "d6e012d298cb98d0709777ff7c51b68872cc880c3e4fda7c210af89bf739c884"
	},
	{
		"id": "af6f610e29c7",
		"ts": "2026-11-10T09:09:53.922Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 138345896.6,
		"hash": "af6f610e29c741b891ba35848ca55a8736e0d45e5958e8f37068a5f0d1fe1a8a"
	},
	{
		"id": "d154c4ffa2a1",
		"ts": "2026-11-10T09:09:54.630Z",
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
		"liquidityUsd": 15482862.81,
		"hash": "d154c4ffa2a1de601196d8ecddbc092dee238bbdb8a3a7f3952bc05bd8fc58f3"
	},
	{
		"id": "1ff547860956",
		"ts": "2026-11-10T09:09:54.921Z",
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
		"liquidityUsd": 241010.01,
		"hash": "1ff5478609568ad52bb3f6c9a9322c233b0e9e706a3902a6bfa9e6abf3f53f96"
	},
	{
		"id": "29aa3c4acd9b",
		"ts": "2026-11-10T09:09:55.203Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4381506.96,
		"hash": "29aa3c4acd9b1b6c7f279a997283ec3b759498f305b91a587e0894bffe85a8d7"
	},
	{
		"id": "3abb1b1980f9",
		"ts": "2026-11-10T09:09:55.472Z",
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
		"liquidityUsd": 1293526.47,
		"hash": "3abb1b1980f9e5a458bfdf042b144ad6df73891197e301270a567888e3fe1a0b"
	},
	{
		"id": "d2882f248272",
		"ts": "2026-11-10T09:09:55.729Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 960791.26,
		"hash": "d2882f2482727f2e069628536e1207c657e4c234d9a7c9d80f2b026966f5202d"
	},
	{
		"id": "51430349ea1d",
		"ts": "2026-11-10T09:09:55.982Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4381506.96,
		"hash": "51430349ea1d99a547e0027ff994c2e2f0d734755a670a05ba88d9ef838a80eb"
	},
	{
		"id": "5e53dd009608",
		"ts": "2026-11-10T09:09:56.237Z",
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
		"liquidityUsd": 1147472.12,
		"hash": "5e53dd009608ae8fcb4c1f952db8d65477e0f6f10126961a76527a36bfdb1080"
	},
	{
		"id": "fd59d26c6ce8",
		"ts": "2026-11-10T09:09:56.489Z",
		"symbol": "KNTQ",
		"token": "0xb80194e3868511b8f43E1D5d6E255cD9e7c3e7dD",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 866732.75,
		"hash": "fd59d26c6ce800ed126af6ba2697f76b8d3301c830edca44d9ef3995b19bf7fd"
	},
	{
		"id": "8c8471100b44",
		"ts": "2026-11-10T09:09:56.744Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 893627.05,
		"hash": "8c8471100b446a21e8815a39952afca6f4b960f42dc60d34e1e532afceec6fb8"
	},
	{
		"id": "0fad3ac74a84",
		"ts": "2026-11-10T09:09:56.991Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 2417479.69,
		"hash": "0fad3ac74a849a9a2913c91d8d830c87572266c51c92dc284c2faa46070d37ab"
	},
	{
		"id": "9ce4111f22a1",
		"ts": "2026-11-10T09:09:57.232Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1833749.14,
		"hash": "9ce4111f22a1f5e21c25dacab6a34045327e22f61b8c4af5e46924b0629fea41"
	}
]
