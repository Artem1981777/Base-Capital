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
	"updatedAt": "2026-11-07T11:28:02.718Z",
	"tokensScored": 22389,
	"verdictsIssued": 22389,
	"safe": 19115,
	"risky": 1574,
	"likelyRug": 1700,
	"ticks": 1259
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "ed2f791a82df",
		"ts": "2026-11-07T11:27:57.882Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 146056184.05,
		"hash": "ed2f791a82df8f564af93f1ae5f26ef3a350a4756c31d3b96205586fe10e6330"
	},
	{
		"id": "ca08cf963896",
		"ts": "2026-11-07T11:27:58.541Z",
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
		"liquidityUsd": 15807127.39,
		"hash": "ca08cf963896d3af8e08a126af22ab4286a7108b7558c904b2ddcbb304ae5b67"
	},
	{
		"id": "23340b7fefc2",
		"ts": "2026-11-07T11:27:58.782Z",
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
		"liquidityUsd": 292546.19,
		"hash": "23340b7fefc27c146e42287e25a32b0596912d67b1fff6b3b0746b3c8635d95c"
	},
	{
		"id": "1a1a4e7d8371",
		"ts": "2026-11-07T11:27:59.021Z",
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
		"liquidityUsd": 4849245.97,
		"hash": "1a1a4e7d83717b136a7f03506a817a5a40b744c46c94ebf7658db73cbe22faa5"
	},
	{
		"id": "9333b4b8e76e",
		"ts": "2026-11-07T11:27:59.263Z",
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
		"liquidityUsd": 909609.75,
		"hash": "9333b4b8e76e238345189a235c1945cd781624a58c384a05571776d5a13fb8c4"
	},
	{
		"id": "0b64ee09f019",
		"ts": "2026-11-07T11:27:59.512Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1024550.64,
		"hash": "0b64ee09f0194defe748dbd709a3037565188d15aa41411abd61eabea357dac2"
	},
	{
		"id": "5598a91e4e87",
		"ts": "2026-11-07T11:27:59.768Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2430810.09,
		"hash": "5598a91e4e8735f582324d15c3ad569a867ad1f13f77c14ddc51a591e6ea6e16"
	},
	{
		"id": "464fd774ddf8",
		"ts": "2026-11-07T11:28:00.016Z",
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
		"liquidityUsd": 1396412.13,
		"hash": "464fd774ddf834b9a7e3bb8cc1281e3a0bb3279fc734936859b66ab443ffbd09"
	},
	{
		"id": "3754c5b9d2b9",
		"ts": "2026-11-07T11:28:00.268Z",
		"symbol": "DENIM",
		"token": "0x0BDdfA9a0a1Eb326593262c7aF47ee091dB9cB70",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 360327.63,
		"hash": "3754c5b9d2b961302f845c23f1b00641e1c9df367055a8ea8e80bc0b9504b419"
	},
	{
		"id": "c4904a6c562d",
		"ts": "2026-11-07T11:28:00.513Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 126468.37,
		"hash": "c4904a6c562daf4e4ec931d26804b9884d7b8847907b474712fd2dde309765ad"
	},
	{
		"id": "74a524ee97f9",
		"ts": "2026-11-07T11:28:00.751Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 8,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.84,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 2026755.33,
		"hash": "74a524ee97f9ea2aa4e69b52cdc733b10d563b1a8edc7ee40aa05c9ee679bedc"
	},
	{
		"id": "8256dcbdbb8e",
		"ts": "2026-11-07T11:28:01.233Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1004538.82,
		"hash": "8256dcbdbb8eb66659e4b4f007c1c1817bbd7c479151d1899206027eaaa6ed58"
	},
	{
		"id": "b1738c2a8afb",
		"ts": "2026-11-07T11:28:01.479Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1599038.3,
		"hash": "b1738c2a8afbf60413cca9586dca813f65f4a68b739e915fc6db1b16b994c66e"
	},
	{
		"id": "6043aadc2a89",
		"ts": "2026-11-07T11:28:01.712Z",
		"symbol": "Reboot",
		"token": "0xe125872D91A5a67704FA782Aa74014Adff7cAE7E",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 368080.17,
		"hash": "6043aadc2a898bd20af440c8e9f9cc10da9c77bcc21eb6d235c4a918bb66c4d4"
	},
	{
		"id": "212e8807492f",
		"ts": "2026-11-07T11:28:01.954Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1671118.43,
		"hash": "212e8807492f856ec5ee5e17101e93c37ddb1f497b60a384ca6397d2af66f971"
	},
	{
		"id": "b722319d4962",
		"ts": "2026-11-07T11:28:02.225Z",
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
		"liquidityUsd": 7384546.48,
		"hash": "b722319d496233df21bca11e9cce06a510aeab30739bc9ee2b62fa6d5a66a4ef"
	},
	{
		"id": "885aad1593f8",
		"ts": "2026-11-07T11:28:02.461Z",
		"symbol": "Anthropic",
		"token": "0xF6D41CBb39a6540a93e0d29a50B4eb720444e754",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 10332121.57,
		"hash": "885aad1593f8c6f3b5ffe652b601abd20c844133eeb987a4cfbea2b8d81dd354"
	},
	{
		"id": "eea8b6596d9d",
		"ts": "2026-11-07T11:28:02.717Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3325262.44,
		"hash": "eea8b6596d9d185924f770fa840b2b8900b7a0e2816b743b598e525011bad12d"
	},
	{
		"id": "48edc2365aad",
		"ts": "2026-11-07T04:27:35.820Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 145969211.11,
		"hash": "48edc2365aad84d037a5d18a85440df1634b40d94bd22f5df3ccaa4a9cc09d82"
	},
	{
		"id": "c5f27ed49d37",
		"ts": "2026-11-07T04:27:36.358Z",
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
		"liquidityUsd": 15765714.22,
		"hash": "c5f27ed49d37a7d8fe2689afb479b7cdb1d79f4b8c8384d10a533fb92ae13136"
	},
	{
		"id": "67459c4bfb7d",
		"ts": "2026-11-07T04:27:36.630Z",
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
		"liquidityUsd": 242917.86,
		"hash": "67459c4bfb7deec4354820bc9967294b148e68ade05244f51f27d5493324f477"
	},
	{
		"id": "afb29f776096",
		"ts": "2026-11-07T04:27:36.925Z",
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
		"liquidityUsd": 4870537.94,
		"hash": "afb29f776096e3a63b9bb809456185754f67565fd388b41fa43870cfe312b76d"
	},
	{
		"id": "2e5720d411e3",
		"ts": "2026-11-07T04:27:37.195Z",
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
		"liquidityUsd": 924225.37,
		"hash": "2e5720d411e321d8e7bfcd3fd6707cd240380d49e5b7484c05bb2631089a665e"
	},
	{
		"id": "185155bf8b60",
		"ts": "2026-11-07T04:27:37.466Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1031494.93,
		"hash": "185155bf8b6025faf2552c33c3a16e2b4ffc91820eb70ae64f215ed5d655df08"
	},
	{
		"id": "ac747b12885b",
		"ts": "2026-11-07T04:27:37.730Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4870537.94,
		"hash": "ac747b12885b61b1acadf437df8e63fce34a011fde604e9be0f41302af651f96"
	},
	{
		"id": "455038ce8451",
		"ts": "2026-11-07T04:27:38.007Z",
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
		"liquidityUsd": 1263732.72,
		"hash": "455038ce845112a379429eda6af36663a8e191ec73e0fe08d7b2c98073caa79c"
	},
	{
		"id": "91e258f0d8bb",
		"ts": "2026-11-07T04:27:38.268Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"volume_liquidity_anomaly",
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 122398.14,
		"hash": "91e258f0d8bba0d51876f9f7ddd06845ce4a74ffa7a7d037e09b0f6237d5bc4c"
	},
	{
		"id": "ce383d7d2910",
		"ts": "2026-11-07T04:27:38.535Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 521120.92,
		"hash": "ce383d7d2910e58e63b21a3f830be670133144eb6ed844c15d228bc37086de1b"
	},
	{
		"id": "d93f357ac598",
		"ts": "2026-11-07T04:27:38.778Z",
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
		"liquidityUsd": 1895693.6,
		"hash": "d93f357ac59891a60213b4c2f869ee2da4aa8233fe7075cdea06e1a74cf5195b"
	},
	{
		"id": "6eab695b871f",
		"ts": "2026-11-07T04:27:39.024Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 999680.31,
		"hash": "6eab695b871fb20e53f4daaeca1d6cb84b4d7a4b87328abed419123b0e0c630d"
	},
	{
		"id": "0e7a79541282",
		"ts": "2026-11-07T04:27:39.271Z",
		"symbol": "DENIM",
		"token": "0x0BDdfA9a0a1Eb326593262c7aF47ee091dB9cB70",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 363373.02,
		"hash": "0e7a795412824d92bfc0851ddc9c50519c72e322430407f4904eea9289c8d69e"
	},
	{
		"id": "dd17ffd99a74",
		"ts": "2026-11-07T04:27:39.516Z",
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
		"liquidityUsd": 7407655.68,
		"hash": "dd17ffd99a74c0ae84661f5e1252d9bb7670fd3a92d7b738f52e9f4a60868de5"
	},
	{
		"id": "74d55eed643d",
		"ts": "2026-11-07T04:27:39.774Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1619504.01,
		"hash": "74d55eed643d02ed2c3fb59092e89f595fbedab9de33081388fa3d8bf30f16dd"
	},
	{
		"id": "c5154d460593",
		"ts": "2026-11-07T04:27:40.023Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 565920.95,
		"hash": "c5154d4605938d6914027d2ccae3a94532d78b44217e4d7d35c3505578991b8d"
	},
	{
		"id": "c2d27abbc096",
		"ts": "2026-11-07T04:27:40.271Z",
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
		"liquidityUsd": 2613831.96,
		"hash": "c2d27abbc09689ee6c5b7b0b3a9d0368b00acaa4abcbc8431dad7ad7a8847ea1"
	},
	{
		"id": "7f4e6521f6d4",
		"ts": "2026-11-07T04:27:40.516Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3330691.53,
		"hash": "7f4e6521f6d41e424597427a554f41c24e314c96119d7bed41f59d51a171b99b"
	},
	{
		"id": "255ad41823fc",
		"ts": "2026-11-07T04:27:40.783Z",
		"symbol": "Reboot",
		"token": "0xe125872D91A5a67704FA782Aa74014Adff7cAE7E",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 352947.58,
		"hash": "255ad41823fc5bc1b6a0bfc09ffcab26ca2d99a4e777873a80001d6f453a1882"
	},
	{
		"id": "20c2184ced00",
		"ts": "2026-11-06T23:37:27.699Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 145945277.62,
		"hash": "20c2184ced009f0b4d7bb6949d65211f27b88bf7e4ced97b1e425a41d08228f7"
	},
	{
		"id": "e1d4e8f2c776",
		"ts": "2026-11-06T23:37:27.962Z",
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
		"liquidityUsd": 15756859.71,
		"hash": "e1d4e8f2c776af1aff58293c9b8f353eef0a9141d227b2027eba246253b40052"
	},
	{
		"id": "88e3ab746450",
		"ts": "2026-11-06T23:37:28.205Z",
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
		"liquidityUsd": 242963.91,
		"hash": "88e3ab746450415c01a3dbafa6f695ed633ab9ed579ca550e979959c30ef9e8c"
	},
	{
		"id": "d36fc42f7bf9",
		"ts": "2026-11-06T23:37:28.460Z",
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
		"liquidityUsd": 4910757.1,
		"hash": "d36fc42f7bf9f7d64bebfe42c4fba1730ee589dfd37515a8e48e7d00ecb0f6d6"
	},
	{
		"id": "6c4bced47ed0",
		"ts": "2026-11-06T23:37:28.731Z",
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
		"liquidityUsd": 879700.75,
		"hash": "6c4bced47ed09d518b30473c3d02ee2f84b420e91cf5281bbaa9638c7a446af5"
	},
	{
		"id": "6a38c691117d",
		"ts": "2026-11-06T23:37:28.980Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1026705.55,
		"hash": "6a38c691117d7694f9badf2bcb61be87975f1e18151a33d155fc57d9fa62503c"
	},
	{
		"id": "f7a47a87c66c",
		"ts": "2026-11-06T23:37:29.219Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4910757.1,
		"hash": "f7a47a87c66c11732d4c8108cd5b5e96354b156413fef9e54cb472b596364108"
	},
	{
		"id": "8dc1bf51155c",
		"ts": "2026-11-06T23:37:29.473Z",
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
		"liquidityUsd": 1490406.09,
		"hash": "8dc1bf51155c428aa399b7fd503bfa43ee31ab385585d4fe4400bc3ad8b63ad2"
	},
	{
		"id": "24e2864567d8",
		"ts": "2026-11-06T23:37:29.709Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"volume_liquidity_anomaly",
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 121865.39,
		"hash": "24e2864567d8112ac8cb77915c997fc1ff90f5ef1b08b02b7c97e9add3ab0554"
	},
	{
		"id": "1953c427d6e6",
		"ts": "2026-11-06T23:37:29.957Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 535020.89,
		"hash": "1953c427d6e6be0600f11c874b1dcd183e1ca0cf1b48196d5eff610a92965df5"
	},
	{
		"id": "c27564760ce4",
		"ts": "2026-11-06T23:37:30.188Z",
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
		"liquidityUsd": 1611445.99,
		"hash": "c27564760ce421dbf391b576241cb9ecc38e6ab4af3964422f9a06fef5d5c046"
	},
	{
		"id": "f4cc9a00e0d3",
		"ts": "2026-11-06T23:37:30.419Z",
		"symbol": "DENIM",
		"token": "0x0BDdfA9a0a1Eb326593262c7aF47ee091dB9cB70",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 393257.49,
		"hash": "f4cc9a00e0d317e4ab06374aa8aa810f2e10b29c8f8b7a82290a978f09b18a9f"
	},
	{
		"id": "aedada25e545",
		"ts": "2026-11-06T23:37:30.643Z",
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
		"liquidityUsd": 7384893.04,
		"hash": "aedada25e5453e04f8d14209ec71f5011a6359bc79c8a1f1eabfff61b946bd6b"
	},
	{
		"id": "fbd8513dde44",
		"ts": "2026-11-06T23:37:30.879Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1022713.25,
		"hash": "fbd8513dde4470465b7a708df759fecbdb9e8af0ee164993c2a998eb9498d7c2"
	},
	{
		"id": "b29f8db2873d",
		"ts": "2026-11-06T23:37:31.115Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1624540.62,
		"hash": "b29f8db2873d0fbff53bd58d87fd186e9171c2ab4822e76bb72fe9e7f90f8c4d"
	},
	{
		"id": "ac9d3f62cd15",
		"ts": "2026-11-06T23:37:31.344Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 673234.69,
		"hash": "ac9d3f62cd15ebf3bcdcf01e12dea4e467e130b80eb10a6f6c35a50542cb1dab"
	},
	{
		"id": "b0f61d9202c0",
		"ts": "2026-11-06T23:37:31.567Z",
		"symbol": "CLANKER",
		"token": "0x1bc0c42215582d5A085795f4baDbaC3ff36d1Bcb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1717228.41,
		"hash": "b0f61d9202c021730ede61ed4e740c05e4821668bcf8340a3d84b1edc922e663"
	},
	{
		"id": "3668b3234582",
		"ts": "2026-11-06T23:37:31.790Z",
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
		"liquidityUsd": 2589571.54,
		"hash": "3668b323458266056cd995c94182761739d2f6ca39ef82e9e62c8fb6276ccf35"
	},
	{
		"id": "9e682f60b3f0",
		"ts": "2026-11-06T18:49:42.616Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 144980868.33,
		"hash": "9e682f60b3f02d2725e08204831edb108bb3e17ee87ab4d5ccfe1475c7ae5638"
	},
	{
		"id": "69e7a54610c5",
		"ts": "2026-11-06T18:49:43.471Z",
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
		"liquidityUsd": 15684383.55,
		"hash": "69e7a54610c574837baf5cea8980bfc5e943fe235c0463ca7d2903f466d865f5"
	},
	{
		"id": "af32dc7c8dcf",
		"ts": "2026-11-06T18:49:43.944Z",
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
		"liquidityUsd": 241472.22,
		"hash": "af32dc7c8dcf78ef2518d196b5fcafa404f197c5157e550bcd5f8fd5986058c8"
	},
	{
		"id": "dd8f41e72312",
		"ts": "2026-11-06T18:49:44.392Z",
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
		"liquidityUsd": 4876892.95,
		"hash": "dd8f41e72312aefbc5d873c2d7a1cd923f2c6012471cc9f559b08d538264e73f"
	},
	{
		"id": "1116ed22064c",
		"ts": "2026-11-06T18:49:44.835Z",
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
		"liquidityUsd": 883854.9,
		"hash": "1116ed22064c7f524c439f058c9e00084073c5e659e3b856424dc38b72756c45"
	},
	{
		"id": "a156b7d0b754",
		"ts": "2026-11-06T18:49:45.102Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1018683.74,
		"hash": "a156b7d0b754699f1cae260b989a64ef06c58cb73fa06bb27c6054b7d28401b3"
	},
	{
		"id": "310925ddf933",
		"ts": "2026-11-06T18:49:45.366Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4876892.95,
		"hash": "310925ddf933c2c74aa109342371ae3d0709453f892e7f253680b92765d47722"
	},
	{
		"id": "994588d1b796",
		"ts": "2026-11-06T18:49:45.657Z",
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
		"liquidityUsd": 1527816.99,
		"hash": "994588d1b796c0f3e7a890822e76725ff9a90d797f1e6652c00649cb075fa644"
	},
	{
		"id": "70742f82a749",
		"ts": "2026-11-06T18:49:45.908Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 519925.46,
		"hash": "70742f82a749a05cd9715f80020a4cf32ed79afc87002246b51cbdf3944900fe"
	},
	{
		"id": "0971c1a69c87",
		"ts": "2026-11-06T18:49:46.367Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 120331.73,
		"hash": "0971c1a69c87720f8963907b94794241cde5b5499b673e3ca6f14af772fe9dd1"
	},
	{
		"id": "7dbb566e8de1",
		"ts": "2026-11-06T18:49:46.597Z",
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
		"liquidityUsd": 7402109.52,
		"hash": "7dbb566e8de1e5caf278c15a422988d6650800013d3acf3f4ff1115a99c61151"
	},
	{
		"id": "76a932ccc26c",
		"ts": "2026-11-06T18:49:46.827Z",
		"symbol": "CLANKER",
		"token": "0x1bc0c42215582d5A085795f4baDbaC3ff36d1Bcb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1787723.06,
		"hash": "76a932ccc26cdaf9131b97dfa34e26f0b9e71d6800379736749b979957d5c864"
	},
	{
		"id": "11184b0e914b",
		"ts": "2026-11-06T18:49:47.058Z",
		"symbol": "DENIM",
		"token": "0x0BDdfA9a0a1Eb326593262c7aF47ee091dB9cB70",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 388781.35,
		"hash": "11184b0e914b3581a12306c8e428ed4a36f504374bddd4fcf2f0849c45e8644f"
	},
	{
		"id": "1dce77a2c1b9",
		"ts": "2026-11-06T18:49:47.287Z",
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
		"liquidityUsd": 1269601.96,
		"hash": "1dce77a2c1b9122768267046059fdf5bd395121c521e9c1b62703061034a6c68"
	},
	{
		"id": "ba7f710258af",
		"ts": "2026-11-06T18:49:47.519Z",
		"symbol": "Reboot",
		"token": "0xe125872D91A5a67704FA782Aa74014Adff7cAE7E",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 401199.92,
		"hash": "ba7f710258af02f84f771327750e7cbf76bb7981d0229d4af6fc7de3c98a6780"
	},
	{
		"id": "2ef9720f4d24",
		"ts": "2026-11-06T18:49:47.874Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1606666.1,
		"hash": "2ef9720f4d2419cbee604857002819a9912bb185f0bc604bbbd289b2d7a35a86"
	},
	{
		"id": "8145b6cd0d53",
		"ts": "2026-11-06T18:49:48.103Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1017758.39,
		"hash": "8145b6cd0d533804171460ea185f7ebc907cad84d3c85a64968b4db2d44d935f"
	},
	{
		"id": "6c61d674c072",
		"ts": "2026-11-06T18:49:48.336Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 673744.53,
		"hash": "6c61d674c072e4bf18b6f7aa3ec6ec2636d19a1d38ae36baa50587d355a6608c"
	},
	{
		"id": "13d4fea63479",
		"ts": "2026-11-06T11:45:28.665Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 146318782.01,
		"hash": "13d4fea634798bd483845a805580bd47e1a66f654e683068ebd3c20c212e02dc"
	},
	{
		"id": "62fe63badbbb",
		"ts": "2026-11-06T11:45:29.150Z",
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
		"liquidityUsd": 15738289.74,
		"hash": "62fe63badbbb7c2af32eb842a8cd465fad55464b4cf3a0c2d77ef83c1aa85c5b"
	},
	{
		"id": "baedaa5348f1",
		"ts": "2026-11-06T11:45:29.398Z",
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
		"liquidityUsd": 238131.69,
		"hash": "baedaa5348f105c6e23bb288a5b093ab57c2c74756265da2bd2ef2cdd87dcabf"
	},
	{
		"id": "d5ecb05794ec",
		"ts": "2026-11-06T11:45:29.655Z",
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
		"liquidityUsd": 5093116.6,
		"hash": "d5ecb05794ec23f94ad25dc664fd3de5dff3b67dfd0b7b01473985fa2f2f5dd5"
	},
	{
		"id": "4a927bcbad65",
		"ts": "2026-11-06T11:45:29.922Z",
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
		"liquidityUsd": 886563.84,
		"hash": "4a927bcbad65d5cb2bb638bcd5da74653d75d827b1accbfb32fb3ed6d58db61d"
	},
	{
		"id": "8830a52672e7",
		"ts": "2026-11-06T11:45:30.167Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1024943.42,
		"hash": "8830a52672e7d54c475dc573df1b0b6b81dd390dfbf2c16c16d81ff4c2ba9df0"
	},
	{
		"id": "5640571fff26",
		"ts": "2026-11-06T11:45:30.419Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5093116.6,
		"hash": "5640571fff261b2c92b4f1343886c94d298e63bcff0fab46cb3ce8099183df08"
	},
	{
		"id": "49392560c9c7",
		"ts": "2026-11-06T11:45:30.672Z",
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
		"liquidityUsd": 2055007.46,
		"hash": "49392560c9c77f29ef1f8470f136237061f68e84ee12f96d8915403815a464e5"
	},
	{
		"id": "8967b1b164b3",
		"ts": "2026-11-06T11:45:30.923Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 525746.31,
		"hash": "8967b1b164b39e409bddd4b6ae79794b594e7cac6d93a053fa5ede22b268a2d8"
	},
	{
		"id": "5b39e8ecc07a",
		"ts": "2026-11-06T11:45:31.171Z",
		"symbol": "CLANKER",
		"token": "0x1bc0c42215582d5A085795f4baDbaC3ff36d1Bcb",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1807063.85,
		"hash": "5b39e8ecc07afa1671926a323137c49bca7af2ae92e3d196dfa6b4899177839c"
	},
	{
		"id": "a3ae5c5b3759",
		"ts": "2026-11-06T11:45:31.405Z",
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
		"liquidityUsd": 7437480.39,
		"hash": "a3ae5c5b375963b0229b1cd57eca1856f37b221895a23a34c3c2fdf555dccc33"
	},
	{
		"id": "7a4096e5af65",
		"ts": "2026-11-06T11:45:31.636Z",
		"symbol": "Reboot",
		"token": "0xe125872D91A5a67704FA782Aa74014Adff7cAE7E",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 364560.54,
		"hash": "7a4096e5af6559810fc11b6eb69232342ab83c2545e4dc665c2514151e09b735"
	},
	{
		"id": "c57a59b945a5",
		"ts": "2026-11-06T11:45:31.869Z",
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
		"liquidityUsd": 1245333.8,
		"hash": "c57a59b945a59c6663b1f431a315e458ecc4615fab806e561ebcdf5d80c671d6"
	},
	{
		"id": "3a580548097a",
		"ts": "2026-11-06T11:45:32.099Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1010134.45,
		"hash": "3a580548097a95c10aefd0685a1b2a8066c0252c8bf57484a7483fd04e1bc255"
	},
	{
		"id": "ba460f324193",
		"ts": "2026-11-06T11:45:32.333Z",
		"symbol": "DENIM",
		"token": "0x0BDdfA9a0a1Eb326593262c7aF47ee091dB9cB70",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 401393.16,
		"hash": "ba460f3241933faf901d5b92a76e2a7f625ffd23f665fd9a3409fc01f19f9a82"
	},
	{
		"id": "34ef6031e721",
		"ts": "2026-11-06T11:45:32.581Z",
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
		"liquidityUsd": 2667993.51,
		"hash": "34ef6031e721e684c81bad770b949056c977e5161016019ef2db6ae0b429832b"
	},
	{
		"id": "f0dbd0fd7fee",
		"ts": "2026-11-06T11:45:32.812Z",
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
		"liquidityUsd": 2431531.77,
		"hash": "f0dbd0fd7feed1c54ed24247dc7d13a1fc5afea4d67a0576a50fd6a1bbd3c2c8"
	},
	{
		"id": "d5f075c9bd13",
		"ts": "2026-11-06T11:45:33.042Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1645884.37,
		"hash": "d5f075c9bd13fd648e5f98d1f9170415acb7723b1ae0dec4e8508e7200f0b6f2"
	},
	{
		"id": "a55dacf34f1c",
		"ts": "2026-11-06T03:05:21.503Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146257158.18,
		"hash": "a55dacf34f1cdfddb9b6fa787c8b0b4d987fd54c1285afc85ad0dcfbfd1e51d7"
	},
	{
		"id": "f18d3028bb85",
		"ts": "2026-11-06T03:05:21.773Z",
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
		"liquidityUsd": 15561115.06,
		"hash": "f18d3028bb85b8686a35be7b1318dd0493476ed258a51c09f31d1c5ec5bea550"
	},
	{
		"id": "3f254db42a3a",
		"ts": "2026-11-06T03:05:22.033Z",
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
		"liquidityUsd": 238864.87,
		"hash": "3f254db42a3a7355dbdff680ffdfb83a5b30ea53453ee4565086c9459d27b7a3"
	},
	{
		"id": "e4a872074f73",
		"ts": "2026-11-06T03:05:22.292Z",
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
		"liquidityUsd": 5038940.67,
		"hash": "e4a872074f73c5a1fb4738871de64f1795b2c2e80f28737d97421ae8d61840cc"
	},
	{
		"id": "25ed5c4541cd",
		"ts": "2026-11-06T03:05:22.549Z",
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
		"liquidityUsd": 882486.17,
		"hash": "25ed5c4541cd6eebeeccc3d88c9bb0602d966a64afe6b599d337d1446e98dfa7"
	},
	{
		"id": "7f3293c4ca74",
		"ts": "2026-11-06T03:05:22.809Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1016364.25,
		"hash": "7f3293c4ca74aadbf9d73266aadefbddab08abcc0c2d72d6870b87865d9a3423"
	},
	{
		"id": "c9d85e6f5eb7",
		"ts": "2026-11-06T03:05:23.086Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5038940.67,
		"hash": "c9d85e6f5eb798e60ead2998145ccf724f9af421cd235fdf826b1d1b7ae62473"
	},
	{
		"id": "396622f5a48d",
		"ts": "2026-11-06T03:05:23.349Z",
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
		"liquidityUsd": 1989624.68,
		"hash": "396622f5a48d335c06b409322b217830cb15573eff873ad87867b01987278964"
	},
	{
		"id": "f9a93de4c326",
		"ts": "2026-11-06T03:05:23.605Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 522189.99,
		"hash": "f9a93de4c326cdcf8ad182cab8d08f8b74be798a31a9408b9f6021b339b4356b"
	},
	{
		"id": "785c43cf477a",
		"ts": "2026-11-06T03:05:23.864Z",
		"symbol": "CLANKER",
		"token": "0x1bc0c42215582d5A085795f4baDbaC3ff36d1Bcb",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1888300.51,
		"hash": "785c43cf477aeec64af5d07b39d3fae4e35a315c8ee11c876443f9317162dbc2"
	},
	{
		"id": "05e180372fe2",
		"ts": "2026-11-06T03:05:24.115Z",
		"symbol": "Reboot",
		"token": "0xe125872D91A5a67704FA782Aa74014Adff7cAE7E",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 336868.44,
		"hash": "05e180372fe2639105ce5bc772b7a5b666c1b3ad5c83bbf9f5dadbb8687c4ac9"
	},
	{
		"id": "17cd092e5c30",
		"ts": "2026-11-06T03:05:24.355Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1005392.82,
		"hash": "17cd092e5c30de38399b93ebd0e650ccee016adc0a0ebc946a90a2d00426c95b"
	},
	{
		"id": "48184f1c4aba",
		"ts": "2026-11-06T03:05:24.591Z",
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
		"liquidityUsd": 1257232.78,
		"hash": "48184f1c4aba7e95fda8d0cb52f7dad1454d6ae3457cb5eddba1c09510770d57"
	},
	{
		"id": "c9c6df94db61",
		"ts": "2026-11-06T03:05:24.832Z",
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
		"liquidityUsd": 7456381.94,
		"hash": "c9c6df94db618248df35605acb295745fb1caa0dc101ec0d293fe2ca52b364ae"
	},
	{
		"id": "2b69685102c7",
		"ts": "2026-11-06T03:05:25.067Z",
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
		"liquidityUsd": 221502.63,
		"hash": "2b69685102c7a39dd0f7db9aaed48a0d613038dd6166b04c1ee1b093cda399c6"
	},
	{
		"id": "baac169426b5",
		"ts": "2026-11-06T03:05:25.314Z",
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
		"liquidityUsd": 2651134.12,
		"hash": "baac169426b5b97ea1e4a40e9d5c03c2220c5b32b578e1a8cd8b20294696b716"
	},
	{
		"id": "1ead9bfb4420",
		"ts": "2026-11-06T03:05:25.552Z",
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
		"liquidityUsd": 2429472.78,
		"hash": "1ead9bfb4420162c96308d48e73941c70763eb431983f59d15584d53b544b306"
	},
	{
		"id": "fd9bff8776cd",
		"ts": "2026-11-06T03:05:25.794Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1637276.46,
		"hash": "fd9bff8776cddeff7d6bbec471b2cad6078b4c77cd493d9e7996f7d57e563636"
	},
	{
		"id": "10ad6bb57103",
		"ts": "2026-11-06T03:05:26.035Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 60393.69,
		"hash": "10ad6bb57103d22d5b6a8ec0eea600feec915da1dfbc0e1066b8646991416346"
	},
	{
		"id": "dbec829cf0df",
		"ts": "2026-11-05T22:29:37.001Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 145882064.59,
		"hash": "dbec829cf0df0b750265f61b92d69ae2b9698b4554e9d111edfe212fa15e48a4"
	},
	{
		"id": "d049a1c7e302",
		"ts": "2026-11-05T22:29:37.323Z",
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
		"liquidityUsd": 15517131.12,
		"hash": "d049a1c7e302df0a1520de9f1bb8d0f141d145f77946af072077d29fe85a0f4d"
	},
	{
		"id": "b7ac5a6b2d7a",
		"ts": "2026-11-05T22:29:37.636Z",
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
		"liquidityUsd": 241605.57,
		"hash": "b7ac5a6b2d7a20534e4bbe4a3afae02ddee492190c48f3b013f73ea1d42fba4b"
	},
	{
		"id": "372da19ec556",
		"ts": "2026-11-05T22:29:37.952Z",
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
		"liquidityUsd": 5108607.06,
		"hash": "372da19ec556fb6be2566a85071fac2bfd4b806c49ec68f97b81c34d89698946"
	},
	{
		"id": "8c7c6986b0d1",
		"ts": "2026-11-05T22:29:38.158Z",
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
		"liquidityUsd": 889916.71,
		"hash": "8c7c6986b0d106b6ab8c56e98269fe61a6cd9a466d5ae20861ea3cda104a18e5"
	},
	{
		"id": "20760da30e65",
		"ts": "2026-11-05T22:29:38.350Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1020469.66,
		"hash": "20760da30e65a06ec925c8b3249d4a56cf3eece34a31d7704c990520d3e59a20"
	},
	{
		"id": "d85e26255720",
		"ts": "2026-11-05T22:29:38.535Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5108607.06,
		"hash": "d85e26255720c04ab353e2cb52a6c0fa9a6b80a0055aad39d87682c686292eb4"
	},
	{
		"id": "880ae4c8b1fe",
		"ts": "2026-11-05T22:29:38.748Z",
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
		"liquidityUsd": 1584583.92,
		"hash": "880ae4c8b1fe5778346abe56eea1c69f183e82151ee86dc93d5aaa7e4d04292d"
	},
	{
		"id": "254eb537d9dd",
		"ts": "2026-11-05T22:29:38.956Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 551113.4,
		"hash": "254eb537d9ddced50664f0ac240bde4253548391dd3d17ccc62fcdeb5f75015f"
	},
	{
		"id": "5caadb06d358",
		"ts": "2026-11-05T22:29:39.145Z",
		"symbol": "CLANKER",
		"token": "0x1bc0c42215582d5A085795f4baDbaC3ff36d1Bcb",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1934269.68,
		"hash": "5caadb06d358660d2f85a6eab56e030d0686e011c59dd9c2d336a76795c93841"
	},
	{
		"id": "f5640b1949ef",
		"ts": "2026-11-05T22:29:39.319Z",
		"symbol": "Reboot",
		"token": "0xe125872D91A5a67704FA782Aa74014Adff7cAE7E",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 358957.97,
		"hash": "f5640b1949ef9792f4985cb08b5f0331358c98437268d07120a931406f8306b4"
	},
	{
		"id": "f0a1ac103494",
		"ts": "2026-11-05T22:29:39.511Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1004538.67,
		"hash": "f0a1ac1034942d8597f31fc98f57215ac0f13c97a20bca489dab04a263d8105e"
	},
	{
		"id": "253b7849cf27",
		"ts": "2026-11-05T22:29:39.714Z",
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
		"liquidityUsd": 1151112.38,
		"hash": "253b7849cf27d5b40a8471dc7f9dd4d4744626592e6f951ba57c264b1fd0f179"
	},
	{
		"id": "02ff912aedf0",
		"ts": "2026-11-05T22:29:39.926Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 59710.69,
		"hash": "02ff912aedf0d39cb199ecc0b76723b2a4e8ff244bd5f3f4bcd41fcd62e48c11"
	},
	{
		"id": "b86482fb57ab",
		"ts": "2026-11-05T22:29:40.108Z",
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
		"liquidityUsd": 2431008.12,
		"hash": "b86482fb57ab0245ebfecc712697bbe6c14c65e44e51e5549691681682cc7d65"
	},
	{
		"id": "5d707067604e",
		"ts": "2026-11-05T22:29:40.304Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1640543.14,
		"hash": "5d707067604e204d7f484708605a953523cf1acd839642f98e7bf167de02dc20"
	},
	{
		"id": "635803f86d34",
		"ts": "2026-11-05T22:29:40.505Z",
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
		"liquidityUsd": 7416434.19,
		"hash": "635803f86d34a829d23140914542757f471063d443d209fcb8a1eac33d2d2298"
	},
	{
		"id": "3f267be6730d",
		"ts": "2026-11-05T22:29:40.713Z",
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
		"liquidityUsd": 221135.11,
		"hash": "3f267be6730d90d5ee2c07b951f0bbf3cae10e7098ed1085fd013a3e134645b0"
	},
	{
		"id": "80e949e47499",
		"ts": "2026-11-05T22:29:40.892Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3008018.57,
		"hash": "80e949e474991d0178ab04a82096214c59ff5d06a13188d9e264e5526e5a4569"
	},
	{
		"id": "cb397ca0ca18",
		"ts": "2026-11-05T07:39:49.887Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 154768145.06,
		"hash": "cb397ca0ca18a06ee8ad68d54dc8468c872d9174a29a1a3199eba8d28d11860c"
	},
	{
		"id": "2448e256928f",
		"ts": "2026-11-05T07:39:50.136Z",
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
		"liquidityUsd": 16250817.16,
		"hash": "2448e256928f886e6cc330ee8f328c4d2a897bc892941fc9d1605a8ea44e309a"
	},
	{
		"id": "811a4c101ae4",
		"ts": "2026-11-05T07:39:50.369Z",
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
		"liquidityUsd": 243435.97,
		"hash": "811a4c101ae46ca02ef006dc183f6b32d2b9b9032b07911d06677505c1af56db"
	},
	{
		"id": "c8be3f198a46",
		"ts": "2026-11-05T07:39:50.604Z",
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
		"liquidityUsd": 5357946.09,
		"hash": "c8be3f198a46039b5886a6132753d7c2c70b466d3f4c38e3a3d4166bdccf405a"
	},
	{
		"id": "3c6c35324127",
		"ts": "2026-11-05T07:39:50.821Z",
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
		"liquidityUsd": 950880.91,
		"hash": "3c6c35324127b6ae41a5027bedf5e562e421388cb6d3a43dba2ba9e838d509f0"
	},
	{
		"id": "1dc59af62024",
		"ts": "2026-11-05T07:39:51.028Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1105067.65,
		"hash": "1dc59af62024f51b6f1f5473cf835c58d798d761f1d322299af305411fd0df6a"
	},
	{
		"id": "211aee84c4ba",
		"ts": "2026-11-05T07:39:51.254Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5357946.09,
		"hash": "211aee84c4ba85483ab49d3aa454663f923ed850d0c52369ca8fed610e67b212"
	},
	{
		"id": "e10b9f29b9d8",
		"ts": "2026-11-05T07:39:51.464Z",
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
		"liquidityUsd": 1903759.22,
		"hash": "e10b9f29b9d8b437f025e3b205427f47432102b675190bf65b47cea7078fb7ea"
	},
	{
		"id": "8f46908efc91",
		"ts": "2026-11-05T07:39:51.656Z",
		"symbol": "CLANKER",
		"token": "0x1bc0c42215582d5A085795f4baDbaC3ff36d1Bcb",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1850715.83,
		"hash": "8f46908efc911dc217b3412337b00a7af43c17ca3d4665567e321b8759c5eefb"
	},
	{
		"id": "cf084489db8f",
		"ts": "2026-11-05T07:39:51.854Z",
		"symbol": "Reboot",
		"token": "0xe125872D91A5a67704FA782Aa74014Adff7cAE7E",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 346962.29,
		"hash": "cf084489db8fc04dff2c47019e3b24e7e644c56aaac2092f56830d10b6dfd2eb"
	},
	{
		"id": "e10a500b3f7b",
		"ts": "2026-11-05T07:39:52.058Z",
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
		"liquidityUsd": 593489.71,
		"hash": "e10a500b3f7b5bf03483ff3f36ada580a4cf60adb1100c245c1c0d0013ecf052"
	},
	{
		"id": "83663654a36f",
		"ts": "2026-11-05T07:39:52.256Z",
		"symbol": "DENIM",
		"token": "0x0BDdfA9a0a1Eb326593262c7aF47ee091dB9cB70",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 319440.04,
		"hash": "83663654a36fc27b2f20780aa9517578380df9cb9b43b27e1d755d4ea613c292"
	},
	{
		"id": "b522e0766ee9",
		"ts": "2026-11-05T07:39:52.465Z",
		"symbol": "BOOTR",
		"token": "0xB1C3a6ac90E324c4072aD4B2a71c5d9382F9565c",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 80989.27,
		"hash": "b522e0766ee9accc803421a259ac6ad857e386e6a42f8966f43596493831e648"
	},
	{
		"id": "21d0d785c85f",
		"ts": "2026-11-05T07:39:52.674Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1145141.86,
		"hash": "21d0d785c85fb2b8d878537c7eb1f26fa5819506f58f08d645848aca1b2e84bb"
	},
	{
		"id": "65bc8dc8277c",
		"ts": "2026-11-05T07:39:52.874Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1754123.14,
		"hash": "65bc8dc8277c3382f13886244e324d13cb3d32f55a578adf6ac33f7dd1e11511"
	},
	{
		"id": "b30e6406562d",
		"ts": "2026-11-05T07:39:53.098Z",
		"symbol": "Reboot",
		"token": "0x6F18277E5566090Ad8Ab35e401ce9155739BFb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 395035.06,
		"hash": "b30e6406562de4bce3e2566ef31ec50a54035848270f716b963511b340d150ac"
	},
	{
		"id": "ce86b96b38f3",
		"ts": "2026-11-05T07:39:53.325Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 59561.06,
		"hash": "ce86b96b38f3f6d3f5c67e5006cb82917236d6f15111ffbb78bf9b34e1b710f1"
	},
	{
		"id": "5f69a76f78ab",
		"ts": "2026-11-05T07:39:53.522Z",
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
		"liquidityUsd": 2435125.29,
		"hash": "5f69a76f78abf67937fce551085b5d85a6b167bf188a06cac3eed5bb8b79d417"
	},
	{
		"id": "6563c74d9735",
		"ts": "2026-11-05T07:39:53.713Z",
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
		"liquidityUsd": 7823471.46,
		"hash": "6563c74d97352eef32ecdc0b8cc07b5346d23284daa27dbdd46d5c40cc32356a"
	},
	{
		"id": "0daa608928a3",
		"ts": "2026-11-05T00:05:55.928Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 154767148.05,
		"hash": "0daa608928a3e74824003b806e576f512a7c5b0c860a79643111e1cc1eca05ed"
	},
	{
		"id": "fea64bd87a2b",
		"ts": "2026-11-05T00:05:56.142Z",
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
		"liquidityUsd": 16316564.07,
		"hash": "fea64bd87a2b42e2a61a49514a9f4cec8b389da60155d903fd695799dcec42dc"
	},
	{
		"id": "07dce71046c6",
		"ts": "2026-11-05T00:05:56.360Z",
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
		"liquidityUsd": 244851.09,
		"hash": "07dce71046c66da305563f93d5f5577c3dd90020d67e4d082f81d80c5bf70f4a"
	},
	{
		"id": "d07bce8c0cd9",
		"ts": "2026-11-05T00:05:56.565Z",
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
		"liquidityUsd": 5306117.46,
		"hash": "d07bce8c0cd9de38a96aab139ee7ccad88f90acb71db7ae5f181e5fc971a36cb"
	},
	{
		"id": "19cad0fe0fad",
		"ts": "2026-11-05T00:05:56.769Z",
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
		"liquidityUsd": 944109.03,
		"hash": "19cad0fe0fad10f5207851dfe593746a272d896682ec73c4b8531b12a6bbbaf0"
	},
	{
		"id": "08024364501f",
		"ts": "2026-11-05T00:05:56.978Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1108683.62,
		"hash": "08024364501f0fc001727d1ee966b8f2c9fe9c2104fa8ada0cd9a24f1b231ee7"
	},
	{
		"id": "d52445ab2a97",
		"ts": "2026-11-05T00:05:57.202Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5306117.46,
		"hash": "d52445ab2a973b34f8af534d05012482f0cc7d186c745445a80cd1880915e77d"
	},
	{
		"id": "262f5a20a30b",
		"ts": "2026-11-05T00:05:57.414Z",
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
		"liquidityUsd": 1800223.97,
		"hash": "262f5a20a30bd0f06e63d467015ec76f8fd810fdfbb46eecdaffa0a3cdc1e89b"
	},
	{
		"id": "1ac4a9586ee9",
		"ts": "2026-11-05T00:05:57.626Z",
		"symbol": "CLANKER",
		"token": "0x1bc0c42215582d5A085795f4baDbaC3ff36d1Bcb",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1967655.9,
		"hash": "1ac4a9586ee9e251648f3f5d22599194568175a627b8f7d1d217fdaa363b414d"
	},
	{
		"id": "645ba16547e2",
		"ts": "2026-11-05T00:05:57.831Z",
		"symbol": "Reboot",
		"token": "0x6F18277E5566090Ad8Ab35e401ce9155739BFb07",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 429128.04,
		"hash": "645ba16547e24ef09a7a4165a4058ae0fc84678cbd4c54d623d60e71408c47f8"
	},
	{
		"id": "a3a2135f3a2b",
		"ts": "2026-11-05T00:05:58.025Z",
		"symbol": "DENIM",
		"token": "0x0BDdfA9a0a1Eb326593262c7aF47ee091dB9cB70",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 329359.46,
		"hash": "a3a2135f3a2bba323c4a46231b07871bcd58a3a62a6e896d708a8f7dd2095e2d"
	},
	{
		"id": "3a6fae226915",
		"ts": "2026-11-05T00:05:58.230Z",
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
		"liquidityUsd": 621354.22,
		"hash": "3a6fae2269159fd7b911e87e082a668a727c48d99294c22f954da689182d8a2f"
	},
	{
		"id": "a96a4b62bc27",
		"ts": "2026-11-05T00:05:58.418Z",
		"symbol": "Reboot",
		"token": "0xe125872D91A5a67704FA782Aa74014Adff7cAE7E",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 343768.08,
		"hash": "a96a4b62bc27d6ed032e18afa96ca3e843d670e4d49f2156d9a6da80ec767a2a"
	},
	{
		"id": "2b30b945b609",
		"ts": "2026-11-05T00:05:58.609Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1138715.39,
		"hash": "2b30b945b6098180a57ee9eac856c2dd37ef8419464f93540df9f56737a07142"
	},
	{
		"id": "ebf3e2f24c1d",
		"ts": "2026-11-05T00:05:58.809Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1751802.79,
		"hash": "ebf3e2f24c1dec699a800486929dbe95b8557f2f5f48c87210fdceda6a5ab875"
	},
	{
		"id": "b13c6f91bfc5",
		"ts": "2026-11-05T00:05:58.997Z",
		"symbol": "BOOTR",
		"token": "0xB1C3a6ac90E324c4072aD4B2a71c5d9382F9565c",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 94495.3,
		"hash": "b13c6f91bfc5a33feb5cc473e5f30073e27044d4bf08e09094e0e2ed91aad76d"
	},
	{
		"id": "5dfe4909d08c",
		"ts": "2026-11-05T00:05:59.233Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 58231.17,
		"hash": "5dfe4909d08c619096bd18cbb116c55d6714e5836437ad657e678ff2d7f11de2"
	},
	{
		"id": "e5f7e41eaf45",
		"ts": "2026-11-05T00:05:59.429Z",
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
		"liquidityUsd": 7810108.6,
		"hash": "e5f7e41eaf457beb9cd153e52ca0cc0b7d2c36801e5a8adcd47d61a582a6ebbd"
	},
	{
		"id": "bec2fefa9d09",
		"ts": "2026-11-05T00:05:59.622Z",
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
		"liquidityUsd": 2441892.79,
		"hash": "bec2fefa9d09a0cec6258068e7a192918b1bce944e87f33ee337244fc17fcdd9"
	},
	{
		"id": "740909bf0c66",
		"ts": "2026-11-04T18:24:31.207Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 155215678.8,
		"hash": "740909bf0c6603ec4811e81239d464f5d37e118fd266b822754f1da3c24f403f"
	},
	{
		"id": "11eb072f4222",
		"ts": "2026-11-04T18:24:31.489Z",
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
		"liquidityUsd": 16340192.76,
		"hash": "11eb072f42220eefa98def5bf8bc60b885f4aeb4e10fa681e02c32ed9aa5fe17"
	},
	{
		"id": "886534ef0d2a",
		"ts": "2026-11-04T18:24:31.751Z",
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
		"liquidityUsd": 248317.88,
		"hash": "886534ef0d2a94fc48e438dda1c8f798b716f690fb118a4c26246263d437eac6"
	},
	{
		"id": "69d5bcfe30d3",
		"ts": "2026-11-04T18:24:32.007Z",
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
		"liquidityUsd": 5429876.8,
		"hash": "69d5bcfe30d30667c62796129296263400760f0cd2d28bbcf7df12d77bdf8974"
	},
	{
		"id": "d9633bebf48d",
		"ts": "2026-11-04T18:24:32.256Z",
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
		"liquidityUsd": 935495.04,
		"hash": "d9633bebf48da9123b5add30a8ef844ca4caad74109de07c645f04138f41e3b5"
	},
	{
		"id": "482af7518848",
		"ts": "2026-11-04T18:24:32.498Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1117659.95,
		"hash": "482af751884899d5b2a1c06efd9626dbd816b1e0ded6d36278db0f4ba043744a"
	},
	{
		"id": "66388f65901b",
		"ts": "2026-11-04T18:24:32.818Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5429876.8,
		"hash": "66388f65901b9e532d2087751fab4af3699d5646f35c8a4c28b2034c6633c7cb"
	},
	{
		"id": "546dd369213a",
		"ts": "2026-11-04T18:24:33.064Z",
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
		"liquidityUsd": 1869479.91,
		"hash": "546dd369213a1290dff2d1099f04b8071d8639301186bc6979705544193312b4"
	},
	{
		"id": "835790af577a",
		"ts": "2026-11-04T18:24:33.307Z",
		"symbol": "Reboot",
		"token": "0x6F18277E5566090Ad8Ab35e401ce9155739BFb07",
		"score": 77,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.54,
		"flags": [
			"new_pair_under_24h",
			"high_holder_concentration"
		],
		"liquidityUsd": 379714.77,
		"hash": "835790af577ae81697176417f2d0223d962d40b8a31e7132030be27b19a78a3f"
	},
	{
		"id": "1de3ad8483bf",
		"ts": "2026-11-04T18:24:33.561Z",
		"symbol": "CLANKER",
		"token": "0x1bc0c42215582d5A085795f4baDbaC3ff36d1Bcb",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 2193088.72,
		"hash": "1de3ad8483bf154e6a23dab96eefa812e9ee04139dde4f7d3b8ad70adbc5f7c5"
	},
	{
		"id": "8234296ff7f0",
		"ts": "2026-11-04T18:24:33.800Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1154150.98,
		"hash": "8234296ff7f0504ff2759a320f153842e417445a94d7c02e12fc6cd9a6c9c7bb"
	},
	{
		"id": "96e3ddd9c172",
		"ts": "2026-11-04T18:24:34.028Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1752734.18,
		"hash": "96e3ddd9c172a0492b8f53c238f47b53433aa4efc30d80d2f04645d4cf48c131"
	},
	{
		"id": "c7fb70f6eb0a",
		"ts": "2026-11-04T18:24:34.279Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 59265.74,
		"hash": "c7fb70f6eb0a5945c4d5cd01239b850652975e2361f1986c06d408a55fd24e42"
	},
	{
		"id": "53544a12de94",
		"ts": "2026-11-04T18:24:34.520Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 408108.43,
		"hash": "53544a12de946c5bd77628abf77500313cbfe673ab651665796474a5f4ffaec1"
	},
	{
		"id": "047afba00092",
		"ts": "2026-11-04T18:24:34.755Z",
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
		"liquidityUsd": 2438006.84,
		"hash": "047afba000929b38ed58e48d9740be94e22353be0df55ae312d5dc85a4272944"
	},
	{
		"id": "c7fdcdd33afe",
		"ts": "2026-11-04T18:24:34.979Z",
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
		"liquidityUsd": 8047261.74,
		"hash": "c7fdcdd33afe112b8ce18eeeaabf2113ff42eef1e33f167e9d75ec6a8f10c902"
	},
	{
		"id": "0b9408a4fc19",
		"ts": "2026-11-04T18:24:35.221Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 98589.51,
		"hash": "0b9408a4fc195b5a0673af1c9bafc5bc15970ba611d6358e327cc5aca63ec61c"
	},
	{
		"id": "a7fe1c9fa10a",
		"ts": "2026-11-04T18:24:35.449Z",
		"symbol": "BOOTR",
		"token": "0xB1C3a6ac90E324c4072aD4B2a71c5d9382F9565c",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 89688.78,
		"hash": "a7fe1c9fa10ab194be4c5ff62d94358a6d2b68a61c2d1950bd0dbcb3ea81de71"
	},
	{
		"id": "43c0a028e1e1",
		"ts": "2026-11-04T18:24:35.678Z",
		"symbol": "DENIM",
		"token": "0x0BDdfA9a0a1Eb326593262c7aF47ee091dB9cB70",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 317389.52,
		"hash": "43c0a028e1e11de50e9b3da3bab3c72b4c8ea88ebf2289d8bf7b764941e0ba37"
	},
	{
		"id": "f0b4c7752092",
		"ts": "2026-11-04T10:23:16.753Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 152419056.45,
		"hash": "f0b4c7752092cbcb8b83f8870e357627fadc0d8d075989da26c916379dc02379"
	},
	{
		"id": "56f6a2c3b520",
		"ts": "2026-11-04T10:23:17.112Z",
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
		"liquidityUsd": 15947043.97,
		"hash": "56f6a2c3b5207db67bb39d3eaa05b7de8de78ef29dd4c1f16ec1bab3bd671a86"
	},
	{
		"id": "12a2125c65a3",
		"ts": "2026-11-04T10:23:17.326Z",
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
		"liquidityUsd": 241033.58,
		"hash": "12a2125c65a381ebb05995b9e6f924514fa393abe4bcdf06104acfaafd41e49c"
	},
	{
		"id": "159a09bd820b",
		"ts": "2026-11-04T10:23:17.531Z",
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
		"liquidityUsd": 5410703.26,
		"hash": "159a09bd820baa69fe68ac34768c3827cc7d34439661f24aad4120e231321d44"
	},
	{
		"id": "0ddc9087100b",
		"ts": "2026-11-04T10:23:17.760Z",
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
		"liquidityUsd": 889675.44,
		"hash": "0ddc9087100bf3ca7c3423bb2e541f5312bbc06b919cbca8b9e5215f57f848fc"
	},
	{
		"id": "0028cf36d0ee",
		"ts": "2026-11-04T10:23:17.980Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1066912.9,
		"hash": "0028cf36d0eed6bce76490ed1c1222da26f30ac8114596f0594111788c77add0"
	},
	{
		"id": "f3d266ef1bdb",
		"ts": "2026-11-04T10:23:18.217Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5410703.26,
		"hash": "f3d266ef1bdb54f06a0911f2c2dd6d2e5208c25cc38176f78beaf2f4abd3b4b3"
	},
	{
		"id": "5fe8457b045f",
		"ts": "2026-11-04T10:23:18.411Z",
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
		"liquidityUsd": 1676969,
		"hash": "5fe8457b045f4e8eb1392c53b3479ea0e081c28434e7716d32bad9b1d93a978a"
	},
	{
		"id": "d044b1e963a3",
		"ts": "2026-11-04T10:23:18.629Z",
		"symbol": "Reboot",
		"token": "0x6F18277E5566090Ad8Ab35e401ce9155739BFb07",
		"score": 77,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.54,
		"flags": [
			"new_pair_under_24h",
			"high_holder_concentration"
		],
		"liquidityUsd": 519719.15,
		"hash": "d044b1e963a313364f787bc3c18f59a2ce64afb4f8003daa2a0d0ef1ecb4112d"
	},
	{
		"id": "4fc5a660ebe2",
		"ts": "2026-11-04T10:23:18.820Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1063435.88,
		"hash": "4fc5a660ebe25d3ea5c84e1fbf5ade6f83539011068a93074490d94b5174605e"
	},
	{
		"id": "f916d1ab1522",
		"ts": "2026-11-04T10:23:19.021Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3521570.39,
		"hash": "f916d1ab152278d2d177a483344ed86afe9ed6ba6e8ab3805907bd18b63740e1"
	},
	{
		"id": "b1832956e9b7",
		"ts": "2026-11-04T10:23:19.228Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 379412.11,
		"hash": "b1832956e9b73385f155c30acc79199ad7b9e7040996eb7056f48abc7e1e0478"
	},
	{
		"id": "fbf0117639e0",
		"ts": "2026-11-04T10:23:19.423Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1746110.04,
		"hash": "fbf0117639e040e86235bf2de98135c7be1fe947f80fae8ace77ffb9bc1b7462"
	},
	{
		"id": "671be74c6f8e",
		"ts": "2026-11-04T10:23:19.607Z",
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
		"liquidityUsd": 99471.63,
		"hash": "671be74c6f8e003bf95d490471af2c09d4a6cb1c378aa77a1049a79d115dcf97"
	}
]
