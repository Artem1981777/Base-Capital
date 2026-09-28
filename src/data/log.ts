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
	"updatedAt": "2026-09-28T03:24:24.285Z",
	"tokensScored": 18834,
	"verdictsIssued": 18834,
	"safe": 16018,
	"risky": 1356,
	"likelyRug": 1460,
	"ticks": 1071
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "5068419f9547",
		"ts": "2026-09-28T03:24:20.302Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 155417296.59,
		"hash": "5068419f9547b9916c56f3e3adc3f5ef7ee809da9b8ad4ff7dca7f4b5fe4e1fd"
	},
	{
		"id": "112f8320aebe",
		"ts": "2026-09-28T03:24:20.554Z",
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
		"liquidityUsd": 15703012.83,
		"hash": "112f8320aebe64c2c4a0b595b9c2b5db977e2efbe071dab88276ecfbb37cec4d"
	},
	{
		"id": "654087dc53d3",
		"ts": "2026-09-28T03:24:20.783Z",
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
		"liquidityUsd": 883638.23,
		"hash": "654087dc53d3431642b9c6b2cdcdd498f387431c0b7a8f212ecdd39096dc66fd"
	},
	{
		"id": "b02c680cd5a9",
		"ts": "2026-09-28T03:24:21.006Z",
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
		"liquidityUsd": 41260532.64,
		"hash": "b02c680cd5a97addc08cea4884461e2fe0426b7052590f4f96387200c1325170"
	},
	{
		"id": "8d8384a55155",
		"ts": "2026-09-28T03:24:21.230Z",
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
		"liquidityUsd": 4586501.87,
		"hash": "8d8384a55155924ca9b5c1292294d750ce3e0f0fcf603c669a0316a94c15f60b"
	},
	{
		"id": "a9b8033761fc",
		"ts": "2026-09-28T03:24:21.447Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1316584.03,
		"hash": "a9b8033761fc795203e792f619a4393ada4188b40b9afbbf1bc9f2ae0a28cef5"
	},
	{
		"id": "a3d62b4c2d05",
		"ts": "2026-09-28T03:24:21.680Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41260532.64,
		"hash": "a3d62b4c2d05be5ef6a4b7208f9cf2904d5c1c92c42e853dc1fe390836214101"
	},
	{
		"id": "1e053491e0db",
		"ts": "2026-09-28T03:24:21.924Z",
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
		"liquidityUsd": 2437339.89,
		"hash": "1e053491e0db0d0433c2c6d3b1d3975eca2756c6125d62f79364d65227035c94"
	},
	{
		"id": "ce084559c403",
		"ts": "2026-09-28T03:24:22.152Z",
		"symbol": "EDGE",
		"token": "0xED6E000dEF95780fb89734c07EE2ce9F6dcAf110",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 714320.43,
		"hash": "ce084559c403bce73a13fc14ae2361ee255e64abe3db7c54e1818b223f51be6c"
	},
	{
		"id": "14b36a234c36",
		"ts": "2026-09-28T03:24:22.368Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 2806749.39,
		"hash": "14b36a234c3685418adee2f4550180f7300d331ab6b522d67bd556ec5878daee"
	},
	{
		"id": "04f522142a6c",
		"ts": "2026-09-28T03:24:22.570Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 318190.75,
		"hash": "04f522142a6c81877533940c6f73882bab6f2c4f00bdb202c99391954490ef10"
	},
	{
		"id": "2b625698b007",
		"ts": "2026-09-28T03:24:22.773Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1567236.06,
		"hash": "2b625698b0075b4acc3244eb52f91db86a556a04a0caeef5ad54817d3d13af45"
	},
	{
		"id": "7d22cb844aeb",
		"ts": "2026-09-28T03:24:22.974Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4006970.32,
		"hash": "7d22cb844aebe8c4ad1fe35d33e8e68312e2360486c10541dfbca64eaa20a14f"
	},
	{
		"id": "fd799555f071",
		"ts": "2026-09-28T03:24:23.195Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1496250.01,
		"hash": "fd799555f0719073660a87c705bb37befa3715decafc74350756a896ff7fbada"
	},
	{
		"id": "775f1b1f5aff",
		"ts": "2026-09-28T03:24:23.423Z",
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
		"liquidityUsd": 443276.71,
		"hash": "775f1b1f5aff325bf8f084d504ada960222dc58c0eef45b3a1c3a70ce50f3349"
	},
	{
		"id": "0abda1f25885",
		"ts": "2026-09-28T03:24:23.660Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18588715.73,
		"hash": "0abda1f2588508055099c9180ccd8ef2a7f08e35e7aa3b283691368cfb567a82"
	},
	{
		"id": "b23107ed1f8f",
		"ts": "2026-09-28T03:24:23.863Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 670148.17,
		"hash": "b23107ed1f8f663c84067a44423865d26d66821316fade3a8dc6b1c55555e6f6"
	},
	{
		"id": "ae5a4bfd0881",
		"ts": "2026-09-28T03:24:24.080Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4476790.82,
		"hash": "ae5a4bfd088120112813cd2f83e351c4e778bba96032d65929f954193af2fcd2"
	},
	{
		"id": "0d65001c874d",
		"ts": "2026-09-28T03:24:24.285Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1232955.86,
		"hash": "0d65001c874d9accbbf354b089a6a1ec9cf7be0354f5bfcbf0a317ffeaee7899"
	},
	{
		"id": "5376727c01c6",
		"ts": "2026-09-27T23:35:29.490Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156359458.15,
		"hash": "5376727c01c6b196c1650dc3e33f4f55480a2aeedd91f122aae2d3b3c48aadcd"
	},
	{
		"id": "b19b95dbf61b",
		"ts": "2026-09-27T23:35:29.736Z",
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
		"liquidityUsd": 13358968.25,
		"hash": "b19b95dbf61b0dfe65e01a1886fffa2737fc5f15893e1270c12884a4c7a4c03e"
	},
	{
		"id": "4557114a366d",
		"ts": "2026-09-27T23:35:29.985Z",
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
		"liquidityUsd": 894862.42,
		"hash": "4557114a366dab883df6058ea80189f6192d7ab394b3a85b522cf03ca0526e72"
	},
	{
		"id": "7292c7418227",
		"ts": "2026-09-27T23:35:30.272Z",
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
		"liquidityUsd": 42059970.01,
		"hash": "7292c741822721ae3934337bffe3a3d4ddc8f44cb761d6657bd404a20a19f361"
	},
	{
		"id": "530e021339c4",
		"ts": "2026-09-27T23:35:30.533Z",
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
		"liquidityUsd": 4629545.8,
		"hash": "530e021339c4960dd5bc8858bb5b298a505de1ea45507e17c41160f230156212"
	},
	{
		"id": "97a8d491d92b",
		"ts": "2026-09-27T23:35:30.783Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1340622.56,
		"hash": "97a8d491d92be8e36628648574279ba7e8c90d9de6ba4f774ea2e7f2c2b26328"
	},
	{
		"id": "89654bcee520",
		"ts": "2026-09-27T23:35:31.030Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42059970.01,
		"hash": "89654bcee520e3a5f22360e046a1c328f5300958eacb5249b42452c8642e7739"
	},
	{
		"id": "e7c338df7fa3",
		"ts": "2026-09-27T23:35:31.275Z",
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
		"liquidityUsd": 2465357.3,
		"hash": "e7c338df7fa3708a92acb42d8429ec6942ce12e75181c93bded34ff00dfb6c5f"
	},
	{
		"id": "bcfd9b17c798",
		"ts": "2026-09-27T23:35:31.618Z",
		"symbol": "EDGE",
		"token": "0xED6E000dEF95780fb89734c07EE2ce9F6dcAf110",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 750184.55,
		"hash": "bcfd9b17c7988bda57630c5f9c67e8181c1936289785bdce6ab886a0404b6044"
	},
	{
		"id": "41c254a70fbb",
		"ts": "2026-09-27T23:35:31.889Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 2912302.94,
		"hash": "41c254a70fbb1cec25a7d44f6d503f8d7e27d109afbd01c4b4a877424eab573f"
	},
	{
		"id": "64bc7fe52ec4",
		"ts": "2026-09-27T23:35:32.119Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 332983.79,
		"hash": "64bc7fe52ec4ddcc731ffb508a8ce11a2631d5497f4d58be4506298223cd7a5e"
	},
	{
		"id": "8eb21573b950",
		"ts": "2026-09-27T23:35:32.355Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1574600.2,
		"hash": "8eb21573b9501167fce75493263c22b671d70f1ee4c477fec69e0140f0afa081"
	},
	{
		"id": "649a1a52ea65",
		"ts": "2026-09-27T23:35:32.586Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4042224.47,
		"hash": "649a1a52ea658ade5288166b3048332631fddb65ed0780587269f3e24a06a59d"
	},
	{
		"id": "b9534989a944",
		"ts": "2026-09-27T23:35:32.811Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 19019760.73,
		"hash": "b9534989a94450fee54321e99e590431af0aae9058ba9442dcfef94fff4e248d"
	},
	{
		"id": "b40bb8ffe6d9",
		"ts": "2026-09-27T23:35:33.040Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1597693.96,
		"hash": "b40bb8ffe6d946c08630d17864b58be2145209f1395ada83bbb09b0e4504cfa8"
	},
	{
		"id": "e6887cd016f4",
		"ts": "2026-09-27T23:35:33.268Z",
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
		"liquidityUsd": 402998.98,
		"hash": "e6887cd016f4633aadae177644819ad481092bee80e335207fd6176fa6edec21"
	},
	{
		"id": "1c2613dd96a2",
		"ts": "2026-09-27T23:35:33.496Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 669666.89,
		"hash": "1c2613dd96a204893af8efd444a86d7cf348f95f9f30e56f658c2d635b08aac0"
	},
	{
		"id": "855656fa444e",
		"ts": "2026-09-27T23:35:33.730Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4515659.81,
		"hash": "855656fa444e0dd81c42d1315908910aea1a3d84b92bb760f9ec93884fbb8ae9"
	},
	{
		"id": "60bab4bca16f",
		"ts": "2026-09-27T23:35:33.960Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1236298.26,
		"hash": "60bab4bca16f3d40602360a89c399e63f6f16c4c7f07cd85860b5763699e5409"
	},
	{
		"id": "48e3ee3bb739",
		"ts": "2026-09-27T20:48:09.848Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156712581.84,
		"hash": "48e3ee3bb739256fbb438aa83c5c4271759c09b45e38a91372e8bc05629a299f"
	},
	{
		"id": "1713b79411bf",
		"ts": "2026-09-27T20:48:10.119Z",
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
		"liquidityUsd": 18324318.63,
		"hash": "1713b79411bf84167a01e9d5164211e5a0809a0737878ede9edd37416a3a731d"
	},
	{
		"id": "5923e1eeb080",
		"ts": "2026-09-27T20:48:10.389Z",
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
		"liquidityUsd": 898365.84,
		"hash": "5923e1eeb080b01f70798a174914050e2a5b11568304867682e59115c8131795"
	},
	{
		"id": "5cc2079af7d1",
		"ts": "2026-09-27T20:48:10.645Z",
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
		"liquidityUsd": 42186607.38,
		"hash": "5cc2079af7d10c1b4bc8f7458ac8f35d142dbeac84532598a72ba6b3d0842f10"
	},
	{
		"id": "c26a44ad2b55",
		"ts": "2026-09-27T20:48:10.904Z",
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
		"liquidityUsd": 4604345.32,
		"hash": "c26a44ad2b55e7f708444cba306e7a7ad79988a1294c6ec800d4024a729c53cc"
	},
	{
		"id": "7b57f6a98325",
		"ts": "2026-09-27T20:48:11.161Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1346482.41,
		"hash": "7b57f6a9832527872a325b910633ecb0aa02465666db1912eeded55ebb9c68b8"
	},
	{
		"id": "de71a64d49c4",
		"ts": "2026-09-27T20:48:11.435Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42187084.09,
		"hash": "de71a64d49c4ed919d3fd6b90450b7e057f1fc15c75f141e3cb73a4b7f67dace"
	},
	{
		"id": "4bb9e55a4f26",
		"ts": "2026-09-27T20:48:11.694Z",
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
		"liquidityUsd": 2468522.05,
		"hash": "4bb9e55a4f269c613dad81a712e30479cabc92ba1337a8fdadb66dafdf031d16"
	},
	{
		"id": "573997ce6540",
		"ts": "2026-09-27T20:48:11.949Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 2930767.57,
		"hash": "573997ce65406f305e1e11f2bd43c06991ce28e7c748fe9f9cca5e3a52073d9d"
	},
	{
		"id": "a743cbe2fabb",
		"ts": "2026-09-27T20:48:12.226Z",
		"symbol": "EDGE",
		"token": "0xED6E000dEF95780fb89734c07EE2ce9F6dcAf110",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 755251.44,
		"hash": "a743cbe2fabb938eb53b3d0690b06688690643af3abb79c25bbeafbb9c4bbfe2"
	},
	{
		"id": "c47b07f18fb4",
		"ts": "2026-09-27T20:48:12.474Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 365355.09,
		"hash": "c47b07f18fb44a909db1ac0bb43fe55651a4a22e891cfd969341293901c4daf9"
	},
	{
		"id": "ce582735c8c8",
		"ts": "2026-09-27T20:48:12.718Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1595369.73,
		"hash": "ce582735c8c8db52e54b884ae83c7f12a367bfab7c8b2c850bedb3a692ed8689"
	},
	{
		"id": "a1bda0a7973a",
		"ts": "2026-09-27T20:48:12.961Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3948191.9,
		"hash": "a1bda0a7973af5092c35986c3d9a67ccfedef07665d0fc4285cf6af94c60c7be"
	},
	{
		"id": "af180211b35e",
		"ts": "2026-09-27T20:48:13.193Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 19262352.74,
		"hash": "af180211b35e90efde1f5d90a7d2b74807bdcf48a9b5bb1970c881756975a560"
	},
	{
		"id": "40356f8551f2",
		"ts": "2026-09-27T20:48:13.453Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 821899.2,
		"hash": "40356f8551f23b9a1ecda84067d2b6fd1ffceb0c32303e9cd122e365ff2cb2c9"
	},
	{
		"id": "8cd07c97d95d",
		"ts": "2026-09-27T20:48:13.689Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 688809.7,
		"hash": "8cd07c97d95d1e1dd2002fb6feecb8f0bc22b9b103945c4e142ddfc1c39a9510"
	},
	{
		"id": "d20f8eaaf6ce",
		"ts": "2026-09-27T20:48:13.934Z",
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
		"liquidityUsd": 423122.97,
		"hash": "d20f8eaaf6ce83d53734c985580a7bf28ba72b5afabdc1c1f3bc5c7e2baacb7b"
	},
	{
		"id": "df2389e3f92f",
		"ts": "2026-09-27T20:48:14.178Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1240529.12,
		"hash": "df2389e3f92fcad9ee7959359a3db91e2de757da28f54f6c261cc2b7738c1b57"
	},
	{
		"id": "7a69f3fe5737",
		"ts": "2026-09-27T20:48:14.411Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4497505.57,
		"hash": "7a69f3fe5737494bb049d7738b1d911d8aff56f34e572be7e45ec38ba9bba02d"
	},
	{
		"id": "1e19dcd7833c",
		"ts": "2026-09-27T17:26:21.422Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156557721.37,
		"hash": "1e19dcd7833cabeaf287e692b9ae7207dd702df7b9f5006638fc02deb18e91b7"
	},
	{
		"id": "1561df06f71a",
		"ts": "2026-09-27T17:26:21.801Z",
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
		"liquidityUsd": 17431118.94,
		"hash": "1561df06f71ac458e0d35e69b0bbc9654906d2e47f03c6a2370f235d5916b02c"
	},
	{
		"id": "e55ef90e4a8d",
		"ts": "2026-09-27T17:26:22.013Z",
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
		"liquidityUsd": 897321.68,
		"hash": "e55ef90e4a8dbfc466c60d8235e20bb47054096f3c61f13ca7b9e74b05622ac5"
	},
	{
		"id": "81eda5950e7f",
		"ts": "2026-09-27T17:26:22.208Z",
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
		"liquidityUsd": 41704413.94,
		"hash": "81eda5950e7fe336dd4b2e09cd3e7e9ca354fd432803191bdb27f30942dfd690"
	},
	{
		"id": "cc380d00b831",
		"ts": "2026-09-27T17:26:22.406Z",
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
		"liquidityUsd": 4573275.32,
		"hash": "cc380d00b831bd7c82c45bef5712aa19a9a148bba7f24c7c6e26ef6ccc877499"
	},
	{
		"id": "aabf3549de86",
		"ts": "2026-09-27T17:26:22.598Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1341045.73,
		"hash": "aabf3549de869f66a7d47c951ddf8e051f9eebc7b258532021fefd761a768f2f"
	},
	{
		"id": "d0af876ccfda",
		"ts": "2026-09-27T17:26:22.789Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41704413.94,
		"hash": "d0af876ccfdae331e8b3738a070d7958769e2d1f461a17f0ff0c5b6d4502dfb9"
	},
	{
		"id": "533f394618c8",
		"ts": "2026-09-27T17:26:22.989Z",
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
		"liquidityUsd": 2466585.26,
		"hash": "533f394618c82cca0cfc4cde5cf022bacccced7fcbaa0094b12223ab1e9b8e7e"
	},
	{
		"id": "aeeea326cffd",
		"ts": "2026-09-27T17:26:23.189Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 368080.55,
		"hash": "aeeea326cffdc800156d2ba03ca129169a9fc6985be8cfdb6c332ee13f534fb3"
	},
	{
		"id": "8176f66961e2",
		"ts": "2026-09-27T17:26:23.405Z",
		"symbol": "EDGE",
		"token": "0xED6E000dEF95780fb89734c07EE2ce9F6dcAf110",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 753680.83,
		"hash": "8176f66961e264405e883429656ecc145fda44659e869647400d7127fc4e9c59"
	},
	{
		"id": "6dd2bbba7649",
		"ts": "2026-09-27T17:26:23.626Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2949771.1,
		"hash": "6dd2bbba764917faa471d1733447201066f2c3dcbc5a8117a02e8165168c9fec"
	},
	{
		"id": "df952402bdc0",
		"ts": "2026-09-27T17:26:23.802Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1624911.61,
		"hash": "df952402bdc0e5d71bd7b576c63374dcf1e6e51eb42eb24472ff851f42239c67"
	},
	{
		"id": "eefa43e68215",
		"ts": "2026-09-27T17:26:23.988Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3916407.72,
		"hash": "eefa43e6821589f713b26a0b8dbb1f135043424ca0f820047614d471d0572108"
	},
	{
		"id": "330fac7f84b4",
		"ts": "2026-09-27T17:26:24.189Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 19234113.17,
		"hash": "330fac7f84b426a83237779f3236e916c157714dc01a0692c34cf55d40f2dbf6"
	},
	{
		"id": "a9f3e23be9f2",
		"ts": "2026-09-27T17:26:24.370Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 681768.72,
		"hash": "a9f3e23be9f293a97b18331bd93c2694dba9e6dbee29e1473326c514375de289"
	},
	{
		"id": "43dbedf50fa8",
		"ts": "2026-09-27T17:26:24.558Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 673338.8,
		"hash": "43dbedf50fa8eff710c1d595ed8c43f065ed9dfdd5b7faaedfa16751e6205f5d"
	},
	{
		"id": "9fa5a5e82ca4",
		"ts": "2026-09-27T17:26:24.745Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1237175.83,
		"hash": "9fa5a5e82ca42c96cf32ce9662b3fc5de2203e79b702ae08d263a4e3198095d1"
	},
	{
		"id": "86b7ac999afb",
		"ts": "2026-09-27T17:26:24.943Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4476562.06,
		"hash": "86b7ac999afbad1faccdbc48703b143c99f0acd0f80fb6201c88bed77c7fe9a1"
	},
	{
		"id": "41c47ac6f0b0",
		"ts": "2026-09-27T17:26:25.124Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 965988.57,
		"hash": "41c47ac6f0b0743ef1f01e4f11cb1a868324d663ff1c7c963f01d8ab0cdcd6e7"
	},
	{
		"id": "2bd967af1755",
		"ts": "2026-09-27T12:41:34.184Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156847183.16,
		"hash": "2bd967af175543d81a33549f071cb34e7a329619d00fea3751607ffbfbc31f00"
	},
	{
		"id": "1a81f6faba30",
		"ts": "2026-09-27T12:41:34.431Z",
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
		"liquidityUsd": 18987990.13,
		"hash": "1a81f6faba30e66bd9ba3a404485527626405ba754f2ab5b2e44c0d82d8ced64"
	},
	{
		"id": "1eb38a21ed1f",
		"ts": "2026-09-27T12:41:34.819Z",
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
		"liquidityUsd": 896326.31,
		"hash": "1eb38a21ed1f96563962f87c2dbea227b7d96958c9c2575f8212bf7c08b6fe8e"
	},
	{
		"id": "e55a6e00fa97",
		"ts": "2026-09-27T12:41:35.037Z",
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
		"liquidityUsd": 42304955.98,
		"hash": "e55a6e00fa97dc37ef60ac4342b59e9839affdb6efcaa464c8be88e6aceccba1"
	},
	{
		"id": "001dc01e495e",
		"ts": "2026-09-27T12:41:35.258Z",
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
		"liquidityUsd": 4645323.54,
		"hash": "001dc01e495eb7dd6f723f20607f13c9b6ddc5031cd8faeafcbf9f6979fa4bc9"
	},
	{
		"id": "f4f75de5e064",
		"ts": "2026-09-27T12:41:35.498Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1364250.16,
		"hash": "f4f75de5e0648ba805a08c8093984eafd23ed8fa2856eaeecf9e77c05f547356"
	},
	{
		"id": "2ff62b0e150e",
		"ts": "2026-09-27T12:41:35.720Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42304955.98,
		"hash": "2ff62b0e150ec7f1a3b0a6df230dbe24a7f4fd54bef40dd54a2f5e7eddd9f364"
	},
	{
		"id": "5b8f6074ccbd",
		"ts": "2026-09-27T12:41:35.970Z",
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
		"liquidityUsd": 2448566.82,
		"hash": "5b8f6074ccbdfa91a74fdcc240df72d7240aa0055179b30891b6150a2b5a2ef7"
	},
	{
		"id": "b05061c0cc6e",
		"ts": "2026-09-27T12:41:36.217Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 499949.56,
		"hash": "b05061c0cc6e6ba0605cf0d5efa16ef649056389a401d9921f4cc0dc9b92ba8a"
	},
	{
		"id": "0f4474799e43",
		"ts": "2026-09-27T12:41:36.435Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 2926983.63,
		"hash": "0f4474799e4310ab3b9140c8bdabc02005d5f8c080be0a2ce66a47c4a5150ca1"
	},
	{
		"id": "2ee3d8bf6f78",
		"ts": "2026-09-27T12:41:36.645Z",
		"symbol": "EDGE",
		"token": "0xED6E000dEF95780fb89734c07EE2ce9F6dcAf110",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 774352.54,
		"hash": "2ee3d8bf6f78b237168e49eb56ea2e5c7ba7b5a0aad3cf179c9589ec28f5a7c3"
	},
	{
		"id": "e02dc8171194",
		"ts": "2026-09-27T12:41:36.851Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4017903.12,
		"hash": "e02dc817119433094286ebaf24b71028b6da025595fe078da1315047389d701a"
	},
	{
		"id": "4f1ce68c87f5",
		"ts": "2026-09-27T12:41:37.086Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1615595.17,
		"hash": "4f1ce68c87f5344e2e40b09dec60c9f9655e403aadb707cfc2e244d65eaa17a0"
	},
	{
		"id": "34ebe3ddbf4e",
		"ts": "2026-09-27T12:41:37.312Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 19851292.92,
		"hash": "34ebe3ddbf4e81fffd1abd94d9b12fb5868e4ff477c5a24b73675b0b99074a8c"
	},
	{
		"id": "a5bd726c547d",
		"ts": "2026-09-27T12:41:37.534Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 821040.81,
		"hash": "a5bd726c547d9f7441c122dbb55a315d8ab33ab3a86cb6dc435c61658e8a784a"
	},
	{
		"id": "c56fc502989e",
		"ts": "2026-09-27T12:41:37.764Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 786844.46,
		"hash": "c56fc502989ed71748ab7f96fada29244e89b4cd61a00e56877ba26d1416c9fc"
	},
	{
		"id": "24c27b270b30",
		"ts": "2026-09-27T12:41:37.997Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 724822.82,
		"hash": "24c27b270b3021ff54824dfffd062f09b5624d3f127a12a714f1ba718256ea44"
	},
	{
		"id": "548d83271b83",
		"ts": "2026-09-27T12:41:38.202Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 489059.56,
		"hash": "548d83271b83e637dd8f4fca3c6da3db5c879f37fe829116c35a76f3b6a2bdff"
	},
	{
		"id": "9ce020cb2024",
		"ts": "2026-09-27T12:41:38.420Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1160155.67,
		"hash": "9ce020cb20241216c2833476addd7bc800cbe42d56515a1b93304e9417ecc3e9"
	},
	{
		"id": "c54c35cab184",
		"ts": "2026-09-27T06:08:33.813Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156536195.45,
		"hash": "c54c35cab184e6187a12cc726f3f4050082f71ab0ce9ef1ed92999604a344f84"
	},
	{
		"id": "77c53783972f",
		"ts": "2026-09-27T06:08:34.071Z",
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
		"liquidityUsd": 14084646.82,
		"hash": "77c53783972f19307323d0c303da84ac137480d72eac827e10f82d9a8f3e5bb6"
	},
	{
		"id": "7fbb2467fed2",
		"ts": "2026-09-27T06:08:34.318Z",
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
		"liquidityUsd": 883781.68,
		"hash": "7fbb2467fed21012737ba1185f7de69363620441f3e93cdab09bbe2a2f12f6f3"
	},
	{
		"id": "51eae7e1aa5b",
		"ts": "2026-09-27T06:08:34.562Z",
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
		"liquidityUsd": 42451098.93,
		"hash": "51eae7e1aa5bd6b001c628cbdf61ce38f43e867c6f5d6f8a2535149dcf9fcd40"
	},
	{
		"id": "184ad804820c",
		"ts": "2026-09-27T06:08:34.815Z",
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
		"liquidityUsd": 4558808.38,
		"hash": "184ad804820cc389656934291a28e63effef533bacc7c95486ffedf33487a572"
	},
	{
		"id": "f3c3efc043cb",
		"ts": "2026-09-27T06:08:35.051Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1328591.78,
		"hash": "f3c3efc043cbafe354284a902d332ff55790e97858391180b020675acfd6d5e6"
	},
	{
		"id": "c99d0784ad5f",
		"ts": "2026-09-27T06:08:35.285Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42451098.93,
		"hash": "c99d0784ad5f478644fb4b6d9c05bb96c2970819fda892e1ae1a7126a2509cb3"
	},
	{
		"id": "8e55219efc33",
		"ts": "2026-09-27T06:08:35.558Z",
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
		"liquidityUsd": 2441338.59,
		"hash": "8e55219efc337d86d3925c5462af36d66ed1e6bc03c4708791039d26524e4887"
	},
	{
		"id": "8ae7d92e57c4",
		"ts": "2026-09-27T06:08:35.820Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 515579.63,
		"hash": "8ae7d92e57c405bc7cb15c50ae151404c169511969de3e2752a69f24240ed361"
	},
	{
		"id": "488bab5ee1c6",
		"ts": "2026-09-27T06:08:36.064Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3926540.32,
		"hash": "488bab5ee1c6705b537366de4f78e84d2055e8f4e12020af0fce256f2a63eb4e"
	},
	{
		"id": "4b77b0bfbad1",
		"ts": "2026-09-27T06:08:36.299Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1600405.21,
		"hash": "4b77b0bfbad15a841420cad03956f9e6e46fff72e064fccec4dc8e128ffd8cf2"
	},
	{
		"id": "fb93a248c927",
		"ts": "2026-09-27T06:08:36.555Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2898350.26,
		"hash": "fb93a248c92727248d5c46d900a985311a29a433d4796e85d66bed14caef8fb6"
	},
	{
		"id": "851eec254ed8",
		"ts": "2026-09-27T06:08:36.790Z",
		"symbol": "EDGE",
		"token": "0xED6E000dEF95780fb89734c07EE2ce9F6dcAf110",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 781172.9,
		"hash": "851eec254ed8eb0c0924be1736b8abb45a32ab34ebb91454cb1d978621840e91"
	},
	{
		"id": "755111f91080",
		"ts": "2026-09-27T06:08:37.008Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1586804,
		"hash": "755111f91080693771123cc80f7a6c95b98a92595053df2afb24ceaad9b47473"
	},
	{
		"id": "5b76b2ce040d",
		"ts": "2026-09-27T06:08:37.225Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 718596.12,
		"hash": "5b76b2ce040db0c2cd64b6b5bd0b9f3d231a8abdfec9bd540bf53edba19aaad0"
	},
	{
		"id": "92fd6625a148",
		"ts": "2026-09-27T06:08:37.449Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1238047.8,
		"hash": "92fd6625a148170f4c4dba4efcdd952d755a0ef9945622faf625de1be49d4e32"
	},
	{
		"id": "460a6de50023",
		"ts": "2026-09-27T06:08:37.682Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1152560.96,
		"hash": "460a6de50023d922b84318855795177d9889bb8d99ce65f59900d7cbed545765"
	},
	{
		"id": "d258cb3bf676",
		"ts": "2026-09-27T06:08:37.897Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 741548.39,
		"hash": "d258cb3bf676b6e0c1a1a2560fc009a8c0611a91e7bb4ec855b4fc787c761371"
	},
	{
		"id": "0a33ab77b32f",
		"ts": "2026-09-27T06:08:38.115Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 486110.46,
		"hash": "0a33ab77b32f7263e4c662de4f166326f993e0ca1b7b73b9bade04fb96421d03"
	},
	{
		"id": "a011e6d19221",
		"ts": "2026-09-27T00:10:29.451Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156252751.97,
		"hash": "a011e6d19221b696d39dbc7ec23000361e164963e804430204018666e841cd41"
	},
	{
		"id": "854ae80fcbed",
		"ts": "2026-09-27T00:10:29.660Z",
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
		"liquidityUsd": 16866670.66,
		"hash": "854ae80fcbed1630e1fdd96c5388d76963da6fb9402b291a54a3182d8c76a2d3"
	},
	{
		"id": "6a2032d83cc4",
		"ts": "2026-09-27T00:10:29.884Z",
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
		"liquidityUsd": 891213.16,
		"hash": "6a2032d83cc44d2408fba12a0dc1f764fb1cc142b9394de0c4448c77ba8b3c15"
	},
	{
		"id": "b5718f93d86d",
		"ts": "2026-09-27T00:10:30.084Z",
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
		"liquidityUsd": 42485766.16,
		"hash": "b5718f93d86de2991b27e9e36d0c9dbc410921163aa120dd85a6308b48fff1ca"
	},
	{
		"id": "2d3468802b4f",
		"ts": "2026-09-27T00:10:30.333Z",
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
		"liquidityUsd": 4569185.82,
		"hash": "2d3468802b4f65a082c4035dfa3bcbf28e0b5486541843408eb64b4c0ea32e73"
	},
	{
		"id": "c01cb50160e3",
		"ts": "2026-09-27T00:10:30.554Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1333318.22,
		"hash": "c01cb50160e34c1853951325f25c4725d2ae01473e944cbf651e0d5e98c2587f"
	},
	{
		"id": "3bf00c52d2f4",
		"ts": "2026-09-27T00:10:30.772Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42485765.11,
		"hash": "3bf00c52d2f4965b4636d641f9c3e33e548aac3fc28878fb87d787bf168a9e45"
	},
	{
		"id": "893ee3f0f95a",
		"ts": "2026-09-27T00:10:31.138Z",
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
		"liquidityUsd": 2427019.67,
		"hash": "893ee3f0f95acc13264e6d9895ee3e53a93928222b93e25e494f57bcafb40e17"
	},
	{
		"id": "9dad771bfa30",
		"ts": "2026-09-27T00:10:31.365Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 514998.6,
		"hash": "9dad771bfa307601e136e1bd487eeb66878efb7176f03cc9a0db6382f4503d76"
	},
	{
		"id": "0b1083a32a30",
		"ts": "2026-09-27T00:10:31.572Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1661594.2,
		"hash": "0b1083a32a304636c89a14c064bc663357a25d616f596183708cf362ef9c288e"
	},
	{
		"id": "fe2a067077b4",
		"ts": "2026-09-27T00:10:31.770Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2927729.69,
		"hash": "fe2a067077b4ae02a204de788cf3a9e59854ef040e56e7353b72c1bdbcfdee28"
	},
	{
		"id": "2ab5a8d4fa74",
		"ts": "2026-09-27T00:10:31.961Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3957228.75,
		"hash": "2ab5a8d4fa749c41bd46c9f0155348396bde9020f0e589a152f84ac139122f14"
	},
	{
		"id": "e0c24e4854f6",
		"ts": "2026-09-27T00:10:32.144Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1587276.73,
		"hash": "e0c24e4854f64ccaa0c4fa2eeb24620ef8eaa2be98f5add43796ae8aeaaece5c"
	},
	{
		"id": "a065e767705a",
		"ts": "2026-09-27T00:10:32.334Z",
		"symbol": "EDGE",
		"token": "0xED6E000dEF95780fb89734c07EE2ce9F6dcAf110",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 787163.29,
		"hash": "a065e767705aeabf8a92b7e2777849056c548cd6391428218f1b0de346a61fae"
	},
	{
		"id": "d3217359bea3",
		"ts": "2026-09-27T00:10:32.558Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 743215.06,
		"hash": "d3217359bea317f4a1b1dc49e994563548ec6e914029a417d2f292fa92723692"
	},
	{
		"id": "7cc700161db9",
		"ts": "2026-09-27T00:10:32.766Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 700821.71,
		"hash": "7cc700161db9ef8eddb2d3d18c9371741844dc3385de42189ea5dfb938202037"
	},
	{
		"id": "3be763394961",
		"ts": "2026-09-27T00:10:33.041Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18948835.79,
		"hash": "3be76339496148c723524d4684571ada421dc9273502826563d00a3f94bd86cd"
	},
	{
		"id": "c17b0c978967",
		"ts": "2026-09-27T00:10:33.254Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1271040.78,
		"hash": "c17b0c978967f3c97dc16671ba338011e450678c5e53d88c53755d4208f93491"
	},
	{
		"id": "45e853e520ca",
		"ts": "2026-09-27T00:10:33.458Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1175883.68,
		"hash": "45e853e520ca589cf680fdbdbf866d315115720c0f9b13d989aa369f23b906af"
	},
	{
		"id": "e8419aa101e4",
		"ts": "2026-09-26T21:47:08.101Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 155922930.04,
		"hash": "e8419aa101e4d9fa020b657b84e93aaed3a53e502a70bdaf6e8f1153ba5cbf76"
	},
	{
		"id": "b09720c2c55f",
		"ts": "2026-09-26T21:47:08.556Z",
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
		"liquidityUsd": 16546477.17,
		"hash": "b09720c2c55fd0daa23e8fc21d1877ee5cea8a3a2443990bdcbfd90519066317"
	},
	{
		"id": "e6ad456e75b4",
		"ts": "2026-09-26T21:47:08.822Z",
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
		"liquidityUsd": 887053.3,
		"hash": "e6ad456e75b4a56695ccc2008a448bcdcc71a88fdf960114edda9130fc67a7f2"
	},
	{
		"id": "4aaa2662e568",
		"ts": "2026-09-26T21:47:09.293Z",
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
		"liquidityUsd": 42599081.25,
		"hash": "4aaa2662e568bc61811278ee08faf80d531797006e2da8c26d464e48dc5af68c"
	},
	{
		"id": "b9481927cce9",
		"ts": "2026-09-26T21:47:09.538Z",
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
		"liquidityUsd": 4548398.82,
		"hash": "b9481927cce9f8450c0a310d0b4e44dffe3b1d3c968ef7e6a5673dc2a79317ea"
	},
	{
		"id": "c64c17f8b59a",
		"ts": "2026-09-26T21:47:09.795Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1326850.77,
		"hash": "c64c17f8b59a38fa0fa40566363cd1b16ea406cbc2361fd13b28d577e5e30008"
	},
	{
		"id": "ecd8a08e08d5",
		"ts": "2026-09-26T21:47:10.051Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42599081.25,
		"hash": "ecd8a08e08d5cb02a2799f7ebf5bb3162d7c56dec87284216cea9cd2d7a818d1"
	},
	{
		"id": "f25c4554573e",
		"ts": "2026-09-26T21:47:10.306Z",
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
		"liquidityUsd": 2420433.86,
		"hash": "f25c4554573e78db4f82b8af669b1e92bfecfb404621ebbb8987c16676b8d5a8"
	},
	{
		"id": "ddcac3dd42f2",
		"ts": "2026-09-26T21:47:10.558Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 453883.31,
		"hash": "ddcac3dd42f21dba44774ee1a9bac74bdfd93a50968a4a7e89e72196d6be7dd1"
	},
	{
		"id": "61afba5e8282",
		"ts": "2026-09-26T21:47:10.822Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1658491.15,
		"hash": "61afba5e82826965110e347a81c4d8efaef336c2d938fda333b5f7d72ab0289b"
	},
	{
		"id": "567818c730db",
		"ts": "2026-09-26T21:47:11.050Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2944722.46,
		"hash": "567818c730dbf94226539933f7984d6f36b63a5a96abda83efbf581515227c3d"
	},
	{
		"id": "3d43872aae84",
		"ts": "2026-09-26T21:47:11.279Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3848788.73,
		"hash": "3d43872aae84f1ff8af5e4df944ad216d81c331b0ee2e604fedff5f6a3658eb4"
	},
	{
		"id": "44b61851a919",
		"ts": "2026-09-26T21:47:11.513Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1589659.9,
		"hash": "44b61851a91939f024a0da3e6010ccc40fc229895ef7b118490812ca20c618b6"
	},
	{
		"id": "ba230e0a1c51",
		"ts": "2026-09-26T21:47:11.750Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 2490869.48,
		"hash": "ba230e0a1c51cd1b23ade23b6c1a174ef136df0fdd667bc5570c4c528eca413f"
	},
	{
		"id": "1b8ae4ecb916",
		"ts": "2026-09-26T21:47:11.977Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18930824.19,
		"hash": "1b8ae4ecb916a2180235f9f13bb85e909fc5f6937cfd25b2e686390de724b4ff"
	},
	{
		"id": "4169c89b3a39",
		"ts": "2026-09-26T21:47:12.213Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 747953.8,
		"hash": "4169c89b3a391102c3cc48833a90afbfd33b15729ef0c67fa84f33c7dc96b194"
	},
	{
		"id": "38e51bfc6807",
		"ts": "2026-09-26T21:47:12.443Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 696653.57,
		"hash": "38e51bfc68078d3cea5c8ec324094f8088ebe9f8d21d2b3512cb3128f8a70438"
	},
	{
		"id": "be861ade80b3",
		"ts": "2026-09-26T21:47:12.673Z",
		"symbol": "EDGE",
		"token": "0xED6E000dEF95780fb89734c07EE2ce9F6dcAf110",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 793319.27,
		"hash": "be861ade80b3f27cb606e2e09b311b3d48e466b669f4c2064a649269041fd074"
	},
	{
		"id": "aa11681e6e75",
		"ts": "2026-09-26T21:47:12.911Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1182762.92,
		"hash": "aa11681e6e75c6163553cafd1304c0b9f8257f4d8cbae38d69c32158c3670991"
	},
	{
		"id": "dd71d121d162",
		"ts": "2026-09-26T18:16:07.392Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 155993818.54,
		"hash": "dd71d121d16284a3c865f62c753a641bbf2683d83cdea9f213883c5c2c827ab6"
	},
	{
		"id": "66454aa40c0d",
		"ts": "2026-09-26T18:16:07.658Z",
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
		"liquidityUsd": 17462294.43,
		"hash": "66454aa40c0de0e00c40181fa3e6093884b494c6e5e68dfb9fb34e4bf667ddcb"
	},
	{
		"id": "42dd2c0bbab8",
		"ts": "2026-09-26T18:16:07.908Z",
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
		"liquidityUsd": 885670.27,
		"hash": "42dd2c0bbab836b07bd48fa78bea8675d149523ca33ffe430e69d5887eb00bf4"
	},
	{
		"id": "cd947f9f7e3f",
		"ts": "2026-09-26T18:16:08.172Z",
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
		"liquidityUsd": 42902425.39,
		"hash": "cd947f9f7e3f7668263308fb68834803841475108508e73c04a07a98f10e7425"
	},
	{
		"id": "d854a7fc4f40",
		"ts": "2026-09-26T18:16:08.423Z",
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
		"liquidityUsd": 4611153.78,
		"hash": "d854a7fc4f406796556595e704dd36e229ae0eaee1034ffcbac772340a27b8de"
	},
	{
		"id": "fc554c224051",
		"ts": "2026-09-26T18:16:08.673Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1327350.09,
		"hash": "fc554c224051481d517ffe8e921a5e74c62621cd4137b16e4e0ab719f7f20be3"
	},
	{
		"id": "3be7ae9d8e33",
		"ts": "2026-09-26T18:16:08.918Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42902425.39,
		"hash": "3be7ae9d8e33027f0fd7bf3758be0ed2babc45f0ff49741dc2b412272ce60567"
	},
	{
		"id": "6df5dadd0938",
		"ts": "2026-09-26T18:16:09.171Z",
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
		"liquidityUsd": 2422737.48,
		"hash": "6df5dadd0938a017ee5a6ddca4fef9ffcb6ec4a5a48d6eda6f88871f8e861392"
	},
	{
		"id": "09affb2b8ac7",
		"ts": "2026-09-26T18:16:09.418Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 524292.51,
		"hash": "09affb2b8ac704481916b40f5b1fd1e0c3234defc1e3f7594e5fc663c821916f"
	},
	{
		"id": "9d27bbf8760b",
		"ts": "2026-09-26T18:16:09.673Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1662868,
		"hash": "9d27bbf8760b25bda03d17c510b70fce9ffd8705a142bab7e3082c2890da8852"
	},
	{
		"id": "875cd41e593b",
		"ts": "2026-09-26T18:16:09.909Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2948870.48,
		"hash": "875cd41e593bf49d8a1d9ed10dc62ddb44c4ef9c0f83bbc4ed759d93d8da14e8"
	},
	{
		"id": "75a8840e012f",
		"ts": "2026-09-26T18:16:10.137Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1589711.73,
		"hash": "75a8840e012fb022da22483fd20343c8adc0a8802f7c37068e10ecce8c6747ab"
	},
	{
		"id": "b1e5f02e9957",
		"ts": "2026-09-26T18:16:10.373Z",
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
		"liquidityUsd": 3842240.81,
		"hash": "b1e5f02e99579228fe210c599c87c2475ad1cc2581dcf62928f47c7c63dc5aab"
	},
	{
		"id": "a05887852b36",
		"ts": "2026-09-26T18:16:10.613Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 81,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.62,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 2490869.48,
		"hash": "a05887852b36b7851a2e5300bf9eb23656f2414721875851319d5d21d23c2d9a"
	},
	{
		"id": "55411b09c43d",
		"ts": "2026-09-26T18:16:10.848Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3472028.27,
		"hash": "55411b09c43d83acb3526200e28819b307a1a820362a9a4b062bedef64f619fa"
	},
	{
		"id": "125128967538",
		"ts": "2026-09-26T18:16:11.081Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18816950.48,
		"hash": "125128967538e74d518f056943af83b1d0e2a7e3fa10898f99914111e2262d8d"
	},
	{
		"id": "6e79f0d95feb",
		"ts": "2026-09-26T18:16:11.308Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 748834.21,
		"hash": "6e79f0d95feb8e38a21a33076b5cd5d3535af627c0c711731e1d4eb01caba289"
	},
	{
		"id": "eefdb666b097",
		"ts": "2026-09-26T18:16:11.542Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 729650.48,
		"hash": "eefdb666b09793c905395a6cee6ba9bb714333e7eb0e9370e1b2a54cb3e08e1c"
	},
	{
		"id": "ea58f3297041",
		"ts": "2026-09-26T18:16:11.884Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1193668.41,
		"hash": "ea58f3297041d82f8b8730776d979276d7bca1406893c07d1b5b151ed2c9b88b"
	},
	{
		"id": "f9847c046615",
		"ts": "2026-09-26T14:02:42.652Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156077545.24,
		"hash": "f9847c046615cda61104444bf93ba0d8b78df60715a8f2b5be1d4e4bd1f19243"
	},
	{
		"id": "6fe4c65bd3c4",
		"ts": "2026-09-26T14:02:43.308Z",
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
		"liquidityUsd": 17949771.72,
		"hash": "6fe4c65bd3c4136cf5bff60cb15e498f2bd530e20b5d2da54a82c39522ccd1e0"
	},
	{
		"id": "dd8d66a8609f",
		"ts": "2026-09-26T14:02:43.559Z",
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
		"liquidityUsd": 870897.7,
		"hash": "dd8d66a8609f9cdd3d3d3f51fecc2c4cc1650ab23042d9de9046820146ff81d0"
	},
	{
		"id": "24c86dd5a0a8",
		"ts": "2026-09-26T14:02:43.814Z",
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
		"liquidityUsd": 39287656.13,
		"hash": "24c86dd5a0a89e1ccd9feff56a70e31a67740f01072098c80c8c8ab9a65eaefe"
	},
	{
		"id": "b473cbd26c05",
		"ts": "2026-09-26T14:02:44.263Z",
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
		"liquidityUsd": 4547405.51,
		"hash": "b473cbd26c05689f664a384784e98b1811c4c8e3368b654749240da928722b68"
	},
	{
		"id": "4fb221cdbbf1",
		"ts": "2026-09-26T14:02:44.534Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1338180.1,
		"hash": "4fb221cdbbf122818eb4c02e1831667c5da98bd43d077a1d9a4393c6d39fcaa6"
	},
	{
		"id": "558d243ddeef",
		"ts": "2026-09-26T14:02:44.787Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 39287656.13,
		"hash": "558d243ddeef53a49d69e57a3da691a8e7f40c46067999bcbd86c48173d7c50a"
	},
	{
		"id": "12d8a7cb909b",
		"ts": "2026-09-26T14:02:45.228Z",
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
		"liquidityUsd": 1326651.17,
		"hash": "12d8a7cb909bc1dde8aa1f85739140c2f8d51f2b524be1d779169d0a2be81e3b"
	},
	{
		"id": "1baab975ad95",
		"ts": "2026-09-26T14:02:45.506Z",
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
		"liquidityUsd": 1579430.5,
		"hash": "1baab975ad9508c9a154219801568e8b15fa42608030dc95e9ccfc97a49bec1e"
	},
	{
		"id": "9d02a9c03db8",
		"ts": "2026-09-26T14:02:45.751Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1659831.24,
		"hash": "9d02a9c03db8c60dca29b5f167ef887be3852f4ed86a01cc68450ec3ac1050ff"
	},
	{
		"id": "305d00cdcbaa",
		"ts": "2026-09-26T14:02:45.970Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2908347.07,
		"hash": "305d00cdcbaaca95570ca1b43e9253f260e74210c92becc47c7372f107c6f44d"
	},
	{
		"id": "963832bc1ae1",
		"ts": "2026-09-26T14:02:46.193Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3753011.56,
		"hash": "963832bc1ae128e7f16b1a5536f3fd9e9f6412fbdecc8228ab634e9711eac444"
	},
	{
		"id": "6f7dec526295",
		"ts": "2026-09-26T14:02:46.415Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18848847.72,
		"hash": "6f7dec52629574739fe4860f40eac49d5f02376f960fdacd9fc469c40f09086d"
	},
	{
		"id": "2eed546ac4aa",
		"ts": "2026-09-26T14:02:46.636Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1170131.94,
		"hash": "2eed546ac4aa67476545b211032f41aa6431914756736a83064363b7140975d5"
	},
	{
		"id": "c07f1f34b773",
		"ts": "2026-09-26T14:02:46.866Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3432101.99,
		"hash": "c07f1f34b773bfb98de2592a878b517dedbb073f59ee6214bcddf63cca39c22b"
	},
	{
		"id": "6517d442e339",
		"ts": "2026-09-26T14:02:47.086Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 2490869.48,
		"hash": "6517d442e339b0c5717995b69d6b94fbe836d1145436c358aceb5ce47f5874b9"
	},
	{
		"id": "8dbfcd73264d",
		"ts": "2026-09-26T14:02:47.314Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 754266.96,
		"hash": "8dbfcd73264d559b88e9601a99c6454beae7e7dab1e80e3fcfe715fc6c5d11e3"
	},
	{
		"id": "0bbcf4d4324e",
		"ts": "2026-09-26T14:02:47.532Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 729828.46,
		"hash": "0bbcf4d4324ec181de238bbd9847c9878c7d79b0ea4e46f79aac13b59e0077b1"
	},
	{
		"id": "86f12395ffa8",
		"ts": "2026-09-26T14:02:47.755Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 477416.16,
		"hash": "86f12395ffa8da51d34bdd2be64092647c6590671005e81c58ac12c3e839a69f"
	},
	{
		"id": "b3afdd1fa05e",
		"ts": "2026-09-26T09:02:43.796Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156041095.75,
		"hash": "b3afdd1fa05ead0fba2b03c3fd9f67c46172e233ffcf61c8ecd4c5b94e4ac5a0"
	},
	{
		"id": "89c57217bb3a",
		"ts": "2026-09-26T09:02:44.049Z",
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
		"liquidityUsd": 14134612.54,
		"hash": "89c57217bb3a9232ca2796265f709ffa6c2a7ecfedd8b7c9e9650b26309fe50a"
	},
	{
		"id": "ebf0268370b4",
		"ts": "2026-09-26T09:02:44.302Z",
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
		"liquidityUsd": 871262.69,
		"hash": "ebf0268370b4dddc06d960ae4ede0df4c3b5dfdb3f4736a41608f9007904c0ce"
	},
	{
		"id": "27129df5e3c8",
		"ts": "2026-09-26T09:02:44.554Z",
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
		"liquidityUsd": 39474360.77,
		"hash": "27129df5e3c839a310f0f1eb1a5f8cbde883993550a8045e8b3db8efbe8fbc0e"
	},
	{
		"id": "3f8a4f33ccf0",
		"ts": "2026-09-26T09:02:44.799Z",
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
		"liquidityUsd": 4539877.98,
		"hash": "3f8a4f33ccf0f09acd2394853ea2220e6af9c1ff2099e06e9962d21fba195e39"
	},
	{
		"id": "9a06aef6578b",
		"ts": "2026-09-26T09:02:45.042Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1308150.6,
		"hash": "9a06aef6578b2534de9eeb9eedcfd7409f98ad246d3f4555da8b03a7e7ae3479"
	},
	{
		"id": "e320366a0ca5",
		"ts": "2026-09-26T09:02:45.289Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 39474360.77,
		"hash": "e320366a0ca56cad4d4d803dd363ec601243567a9ab3718092da71c7cb75488c"
	},
	{
		"id": "f137a50a2ff5",
		"ts": "2026-09-26T09:02:45.548Z",
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
		"liquidityUsd": 1190523.22,
		"hash": "f137a50a2ff5e64365f365fb873b1ef0733c5ae5d0c7ed06fb06c89f5227f0df"
	},
	{
		"id": "a93ca04b8815",
		"ts": "2026-09-26T09:02:45.802Z",
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
		"liquidityUsd": 1579330.48,
		"hash": "a93ca04b88153b424e274ba7fb63fc39cc4ddd293e6362378cc6cdcbdaf51ce5"
	},
	{
		"id": "6dfd70c767f0",
		"ts": "2026-09-26T09:02:46.044Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1658268.45,
		"hash": "6dfd70c767f0cffc78c3e24e51efd0ec5285fb346021237df42a94d64d81dd8c"
	}
]
