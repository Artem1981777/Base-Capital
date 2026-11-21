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
	"updatedAt": "2026-11-21T05:27:39.009Z",
	"tokensScored": 23271,
	"verdictsIssued": 23271,
	"safe": 19812,
	"risky": 1628,
	"likelyRug": 1831,
	"ticks": 1306
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "56ca8fb458a2",
		"ts": "2026-11-21T05:27:34.132Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 75595379.02,
		"hash": "56ca8fb458a2132703565555d588f9b50bcf803177d891ff26b83111e8959113"
	},
	{
		"id": "4e0a3520194e",
		"ts": "2026-11-21T05:27:34.614Z",
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
		"liquidityUsd": 19787829.47,
		"hash": "4e0a3520194ebdcb78c2c7350a9c8e8113543206c24cd902e30f2649e559d640"
	},
	{
		"id": "4d63172c27f5",
		"ts": "2026-11-21T05:27:35.078Z",
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
		"liquidityUsd": 339127.29,
		"hash": "4d63172c27f5a0b559ace207f07f227df033340f5702815e5b66694998d556ab"
	},
	{
		"id": "de1f6e3af9d8",
		"ts": "2026-11-21T05:27:35.337Z",
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
		"liquidityUsd": 3226654.8,
		"hash": "de1f6e3af9d8e5ada0a393e9f1fc2f99de8f1428d91e7ada26f9f6f5e2570543"
	},
	{
		"id": "7d2c11c2f778",
		"ts": "2026-11-21T05:27:35.605Z",
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
		"liquidityUsd": 408364.35,
		"hash": "7d2c11c2f77893ac68e48fc4bb608b8792b4fca1ca7a22944b90aaf94de45db7"
	},
	{
		"id": "70dbcf027ac6",
		"ts": "2026-11-21T05:27:35.862Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 741692.11,
		"hash": "70dbcf027ac6c99f8f6401e15586623d47ef806658ceff539664335ee5aa3c69"
	},
	{
		"id": "7a430ba51825",
		"ts": "2026-11-21T05:27:36.113Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 84552.56,
		"hash": "7a430ba51825336647e4bd11859b79f3f4d40591a835aca24becaac31df0cc67"
	},
	{
		"id": "2188a0253001",
		"ts": "2026-11-21T05:27:36.372Z",
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
		"liquidityUsd": 811503.67,
		"hash": "2188a02530017400d307dc0c66e50c11fc08e437157b962976235fc568768a54"
	},
	{
		"id": "427bfdc21ff0",
		"ts": "2026-11-21T05:27:36.619Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 12,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.76,
		"flags": [
			"volume_liquidity_anomaly",
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1320121.55,
		"hash": "427bfdc21ff0249a0a9de3b0d9354bc39b2edab98ba3c8ae4db90ddeff96cdb0"
	},
	{
		"id": "2fd26be7aa7d",
		"ts": "2026-11-21T05:27:36.880Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 693624.65,
		"hash": "2fd26be7aa7df81ee3c9a9886ce886583a996ba8323c8c43bdc9993d45aa0d56"
	},
	{
		"id": "2362a3e606e1",
		"ts": "2026-11-21T05:27:37.113Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 482023.6,
		"hash": "2362a3e606e126ca7973b9fb8daddf76fa39012e378a73c803df8c3e9fcbc963"
	},
	{
		"id": "c5e8155a7478",
		"ts": "2026-11-21T05:27:37.350Z",
		"symbol": "ANTc",
		"token": "0xb20000000000000000000016e38FD364d271Ba28",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1141159.17,
		"hash": "c5e8155a74786beee2b23ce2e8b11b649e8bb03f612e0ceddf8f5b8aed5088f5"
	},
	{
		"id": "26978a9eb1a5",
		"ts": "2026-11-21T05:27:37.788Z",
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
		"liquidityUsd": 1672070.2,
		"hash": "26978a9eb1a504ae06194970de1b552e11bed2203fd2cee572650018cd78f186"
	},
	{
		"id": "0147e5adc306",
		"ts": "2026-11-21T05:27:38.021Z",
		"symbol": "CHECK",
		"token": "0x9126236476eFBA9Ad8aB77855c60eB5BF37586Eb",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 529077.46,
		"hash": "0147e5adc306adcbbc9acdb0e767a46b8b5ebccd7382eb253c8441076145b2cc"
	},
	{
		"id": "55f29b2ddcd2",
		"ts": "2026-11-21T05:27:38.265Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2171492.04,
		"hash": "55f29b2ddcd23ac929cbc1cf6be78aa2450986e85d313d9aa0bf6ef55b0f724d"
	},
	{
		"id": "408b91759e89",
		"ts": "2026-11-21T05:27:38.505Z",
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
		"liquidityUsd": 211513.83,
		"hash": "408b91759e89cd945d2fdaefe5ee34736d9166d501ae6748832150cb82568d89"
	},
	{
		"id": "cd131ea19dd4",
		"ts": "2026-11-21T05:27:38.767Z",
		"symbol": "SPCXc",
		"token": "0xb2000000000000000000007b9fcbd005511aCBd5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 920001.42,
		"hash": "cd131ea19dd496b44f996cbee1a28c74b609716265a72e0ffc5a3d9fe89b38f9"
	},
	{
		"id": "d8ec8062d890",
		"ts": "2026-11-21T05:27:39.008Z",
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
		"liquidityUsd": 142169.04,
		"hash": "d8ec8062d890b117c39fecb9bed2ffa4ff3eab2c7c8f3904b516cc0ad832096a"
	},
	{
		"id": "e3652e573806",
		"ts": "2026-11-20T23:38:19.940Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 77306646.09,
		"hash": "e3652e573806515da941b99145f74146eba0ea55e6606079f47bc8de9c2bb9dd"
	},
	{
		"id": "f4323a96cb95",
		"ts": "2026-11-20T23:38:20.149Z",
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
		"liquidityUsd": 20493027.27,
		"hash": "f4323a96cb956d9eb5296ee80411f9898a3127c00e5f86db1ee1e56a6e48c17b"
	},
	{
		"id": "054a6dfdaf71",
		"ts": "2026-11-20T23:38:20.362Z",
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
		"liquidityUsd": 326722.19,
		"hash": "054a6dfdaf71747397212765942ffaa80baed02880c3559225883e387ae2e0d2"
	},
	{
		"id": "8b32f39f715e",
		"ts": "2026-11-20T23:38:20.583Z",
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
		"liquidityUsd": 3318950.59,
		"hash": "8b32f39f715e26877503d072b8e8a963a7415facc9a7cd3d4814abebade92db5"
	},
	{
		"id": "90b9ac533fd9",
		"ts": "2026-11-20T23:38:20.768Z",
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
		"liquidityUsd": 433047.05,
		"hash": "90b9ac533fd95d9885a7ff8b5b3887d2fa1b3f91df92a67e322cc59e7cb91311"
	},
	{
		"id": "3b0158a084e1",
		"ts": "2026-11-20T23:38:20.948Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 763491.21,
		"hash": "3b0158a084e13b83c95c1ecd4a44c990bc6855b74a852da100e82917f5d927da"
	},
	{
		"id": "9ae041c7b7a6",
		"ts": "2026-11-20T23:38:21.148Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 84552.22,
		"hash": "9ae041c7b7a601610557f70756c70f62c36004bf016961576358edff16edeee8"
	},
	{
		"id": "da44097bdc21",
		"ts": "2026-11-20T23:38:21.330Z",
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
		"liquidityUsd": 1496047.11,
		"hash": "da44097bdc210ca0c01cfc3fd6aba03ece67081ea6555e4ef4538ae0d070e641"
	},
	{
		"id": "01559f0d3128",
		"ts": "2026-11-20T23:38:21.518Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 739656.79,
		"hash": "01559f0d3128661475e7956a7b9b998e083c0f23b19e62c23399b098d5355ff2"
	},
	{
		"id": "1af95fba013b",
		"ts": "2026-11-20T23:38:21.723Z",
		"symbol": "ANTc",
		"token": "0xb20000000000000000000016e38FD364d271Ba28",
		"score": 8,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.84,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1149051.25,
		"hash": "1af95fba013bb7f74a1c92bfd406521448d0c7cf4112adeb11950368dc99a81a"
	},
	{
		"id": "b0c52f03f14c",
		"ts": "2026-11-20T23:38:21.910Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1317115.96,
		"hash": "b0c52f03f14c21e5c2b5988527bfc3a2b7089efedc5571fdd2c2857a6962c56d"
	},
	{
		"id": "05184f3691a3",
		"ts": "2026-11-20T23:38:22.098Z",
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
		"liquidityUsd": 1747569.48,
		"hash": "05184f3691a3ca8650d3474e9d16f89b988b7219fdafe6a6781bfb9c183ba7ce"
	},
	{
		"id": "ceef45389573",
		"ts": "2026-11-20T23:38:22.290Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 520214.91,
		"hash": "ceef45389573a9708d4ae3f4fc8905f46c5cb2ba68c75ddb3ab99b7b15a9eebd"
	},
	{
		"id": "d7ae2b2c28c7",
		"ts": "2026-11-20T23:38:22.476Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3068669.04,
		"hash": "d7ae2b2c28c701e30c456b65f056595d35b7aa3f426e4a9b7844682b77809728"
	},
	{
		"id": "0db64baae206",
		"ts": "2026-11-20T23:38:22.706Z",
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
		"liquidityUsd": 145917.04,
		"hash": "0db64baae206f6d74f4d270aaa87a48a573c50af330ee00c7d0a06113947a0dd"
	},
	{
		"id": "5669f54845ee",
		"ts": "2026-11-20T23:38:22.917Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2590565.56,
		"hash": "5669f54845ee7f0fe7cba169b9954ea3f6a555af5d7d3d968d805737a01ca3ab"
	},
	{
		"id": "3a6130c87cba",
		"ts": "2026-11-20T23:38:23.118Z",
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
		"liquidityUsd": 758303.06,
		"hash": "3a6130c87cba7aabb6b14a8f6a20636040293b3c32bc9bce7f2bf351304f7db0"
	},
	{
		"id": "a98a8cde3291",
		"ts": "2026-11-20T23:38:23.297Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1249217.17,
		"hash": "a98a8cde3291f72c8b84a42290f6f51b487b43ea2500f7d4b296ed557742c3f9"
	},
	{
		"id": "7abd17efaaf7",
		"ts": "2026-11-20T17:30:01.349Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 79423428.17,
		"hash": "7abd17efaaf783bc1c160ee268c09fac95a9041fc709c0f1443ab8053d3ee678"
	},
	{
		"id": "b50da3ff6453",
		"ts": "2026-11-20T17:30:02.135Z",
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
		"liquidityUsd": 19955450.83,
		"hash": "b50da3ff64536b6d6a6a6777fa72247a6f3320029e8de051b0cf7c7df6428c6c"
	},
	{
		"id": "70dc14935785",
		"ts": "2026-11-20T17:30:02.670Z",
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
		"liquidityUsd": 342112.06,
		"hash": "70dc1493578549305e8cb2e2b673965fbe94f5c03bfc1f601b1187ec253d85e1"
	},
	{
		"id": "4a3b1fcbf388",
		"ts": "2026-11-20T17:30:02.908Z",
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
		"liquidityUsd": 3341701.85,
		"hash": "4a3b1fcbf388bb91c7b1b003a0a2451d6e1967c9f9b2425cab980e4c1fb65a88"
	},
	{
		"id": "8b32d974f6f7",
		"ts": "2026-11-20T17:30:03.180Z",
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
		"liquidityUsd": 423404.25,
		"hash": "8b32d974f6f7dbc7af15453ad165579259c4c83ddebb426a776c2bab6bf1702b"
	},
	{
		"id": "1dcd7943acab",
		"ts": "2026-11-20T17:30:03.442Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 759347.13,
		"hash": "1dcd7943acabbb35bfdac957784d8afac331085a1d1ebd7b6e3fc46e1730cdaa"
	},
	{
		"id": "88b1b3d6587f",
		"ts": "2026-11-20T17:30:03.700Z",
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
		"liquidityUsd": 248412.99,
		"hash": "88b1b3d6587f51809f04c95e0f478b76f07810bc95dbbc3646ae4bddca6b84db"
	},
	{
		"id": "4fbdeac23f5a",
		"ts": "2026-11-20T17:30:03.971Z",
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
		"liquidityUsd": 1506633.07,
		"hash": "4fbdeac23f5afc7d2b24ec593eaee844e329080a8699f6ddfa594858aeeb7af0"
	},
	{
		"id": "babb5452c97a",
		"ts": "2026-11-20T17:30:04.213Z",
		"symbol": "ANTc",
		"token": "0xb20000000000000000000016e38FD364d271Ba28",
		"score": 8,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.84,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1140409.84,
		"hash": "babb5452c97aa698d6e593371c6d80a4cc19925173d594b8034780a3baa81770"
	},
	{
		"id": "c0b121521232",
		"ts": "2026-11-20T17:30:04.471Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 730335.05,
		"hash": "c0b1215212321199cde8443e9f7aca853c6dacf41337fa42e956ed9eae1a4fc5"
	},
	{
		"id": "5affbd53c6c5",
		"ts": "2026-11-20T17:30:04.691Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3043740.97,
		"hash": "5affbd53c6c5f8ae56fb87c5c5a8b358cc1feaf1ff8007c48f1792cc18e473dd"
	},
	{
		"id": "6b8eb670622d",
		"ts": "2026-11-20T17:30:04.909Z",
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
		"liquidityUsd": 1759333.14,
		"hash": "6b8eb670622d0ca89e166b8fab470a5ec2ebb7094ffee0b2cda95914ab188f1f"
	},
	{
		"id": "c04dbc991e00",
		"ts": "2026-11-20T17:30:05.160Z",
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
		"liquidityUsd": 148094.19,
		"hash": "c04dbc991e001c8164fa1897d1a643715279fa1b3cd78401fc9aca42370034c8"
	},
	{
		"id": "d7a8e64335f0",
		"ts": "2026-11-20T17:30:05.378Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 528833.73,
		"hash": "d7a8e64335f0e7d33f03fd8779503759cde3d05eac8c6ae6bf528330e7f8fc21"
	},
	{
		"id": "abc832ed7274",
		"ts": "2026-11-20T17:30:05.597Z",
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
		"liquidityUsd": 776624.37,
		"hash": "abc832ed7274b3336c88e579f75ab71b3895f37ea02f23fb9f479a349a426364"
	},
	{
		"id": "09a658c9b47c",
		"ts": "2026-11-20T17:30:05.817Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 361803.38,
		"hash": "09a658c9b47c46535ff3e36ce4deeee1193e92170e0e7f2aa2f1d0b024b60964"
	},
	{
		"id": "2dcd409a548a",
		"ts": "2026-11-20T17:30:06.036Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 323773.21,
		"hash": "2dcd409a548a85e638079b57f06f381c761a0e2212c15138525fb6db36c89fb0"
	},
	{
		"id": "be84cdbf01ac",
		"ts": "2026-11-20T17:30:06.255Z",
		"symbol": "SPCXc",
		"token": "0xb2000000000000000000007b9fcbd005511aCBd5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 871850.22,
		"hash": "be84cdbf01aca2fb58460e6a26f9d891dc4dbf139d0da770d4ac0a84e4a26405"
	},
	{
		"id": "546d803438d7",
		"ts": "2026-11-20T08:21:11.274Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 85369732.06,
		"hash": "546d803438d7b5fc08c631d7c24380d1d97045fa878067d23a1b0d6cce86cea3"
	},
	{
		"id": "e67651ea09a1",
		"ts": "2026-11-20T08:21:11.551Z",
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
		"liquidityUsd": 21194717.99,
		"hash": "e67651ea09a1f80d29e639ca03a34b6d9894ae1e4ce8e23fd1115c6cfe742fbc"
	},
	{
		"id": "6c023d10dd2d",
		"ts": "2026-11-20T08:21:11.928Z",
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
		"liquidityUsd": 358201.89,
		"hash": "6c023d10dd2d216657eb86d1fc7450f03c38f6f766024a51546d8ebdac0aeac3"
	},
	{
		"id": "2bf7a2b5a10e",
		"ts": "2026-11-20T08:21:12.133Z",
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
		"liquidityUsd": 3583221.86,
		"hash": "2bf7a2b5a10edcd4244c47542650815717232b37adbf8bff18fb366a4e9cb2e7"
	},
	{
		"id": "bb9b9f937b01",
		"ts": "2026-11-20T08:21:12.339Z",
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
		"liquidityUsd": 829606.05,
		"hash": "bb9b9f937b01683a0bf891d0bebc0ade9bd30622c51a537f5974cc3799d33529"
	},
	{
		"id": "555fd3b903bf",
		"ts": "2026-11-20T08:21:12.661Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 821596.51,
		"hash": "555fd3b903bf186c4c190b859c727c4489b8fdae110d92e1f565b3b3830a4b88"
	},
	{
		"id": "9a8fb0c4ebda",
		"ts": "2026-11-20T08:21:12.883Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3583221.86,
		"hash": "9a8fb0c4ebdaab311eaef6b4ad0fee9f0dba35db2281b1153d31d326d0ba8017"
	},
	{
		"id": "74e870883e1e",
		"ts": "2026-11-20T08:21:13.380Z",
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
		"liquidityUsd": 1587761.02,
		"hash": "74e870883e1e8e79fde4ae709c029b977976d3b26fcf386d0ad0ae46b92e059d"
	},
	{
		"id": "97d9ea2a757d",
		"ts": "2026-11-20T08:21:13.589Z",
		"symbol": "ANTc",
		"token": "0xb20000000000000000000016e38FD364d271Ba28",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1107246.83,
		"hash": "97d9ea2a757dcfdd81de03e444b1693372ca60eef1f2f55d2031bf1539fc0fb9"
	},
	{
		"id": "0173e3a677a2",
		"ts": "2026-11-20T08:21:13.809Z",
		"symbol": "Anthropic",
		"token": "0xBc6066cCD5a9b3E23688b49A64De55f8396b26fB",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 10272163.36,
		"hash": "0173e3a677a2a1bd4bcb295cefb962b961c34216b26e9653ce8604e1875f72d0"
	},
	{
		"id": "d0c382e7b72b",
		"ts": "2026-11-20T08:21:13.997Z",
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
		"liquidityUsd": 1095992.87,
		"hash": "d0c382e7b72b37ed73661aa612d39f00d8faee2e41abae1d4f6f22869cb1d9dc"
	},
	{
		"id": "20025cda650f",
		"ts": "2026-11-20T08:21:14.213Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3218148.54,
		"hash": "20025cda650fdc6c00fd81b3b0131c30154faeb862e3babfb3ad75770a354507"
	},
	{
		"id": "4d7f8ae95e0b",
		"ts": "2026-11-20T08:21:14.586Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 150824.48,
		"hash": "4d7f8ae95e0ba282449730e11766a7277d6701420152f93113a8b3e0aeff17fe"
	},
	{
		"id": "18edb38362de",
		"ts": "2026-11-20T08:21:14.804Z",
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
		"liquidityUsd": 823476.37,
		"hash": "18edb38362de42cb377973ac8e55df2e9afec924feb48eee54239ff1aab6b931"
	},
	{
		"id": "82c0b935760d",
		"ts": "2026-11-20T08:21:14.994Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 789786.75,
		"hash": "82c0b935760d86ca60166d0db70de2b17fda0a3a89276b975be710268f22ea81"
	},
	{
		"id": "54f4f728c00f",
		"ts": "2026-11-20T08:21:15.185Z",
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
		"liquidityUsd": 1231970.11,
		"hash": "54f4f728c00f4e50ad01e3896ffca1d10220600cba830660479216425c966cd1"
	},
	{
		"id": "4f5b8fe9dc5d",
		"ts": "2026-11-20T08:21:15.397Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 345314.16,
		"hash": "4f5b8fe9dc5db353a67cc9fae6a3de4a82776f5b3cc439d2891b82167cc6db62"
	},
	{
		"id": "3e0f0eb9fd8a",
		"ts": "2026-11-20T08:21:15.597Z",
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
		"liquidityUsd": 6499324.3,
		"hash": "3e0f0eb9fd8a6e5ce6b49cebd6b45f4fce106716f82c636d94564603a622c764"
	},
	{
		"id": "84544225feb2",
		"ts": "2026-11-20T08:21:15.787Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2721046.29,
		"hash": "84544225feb2f6fcc024d63943d7fad69092ae61d6e6955e18469304e20330e2"
	},
	{
		"id": "35f2bd91944a",
		"ts": "2026-11-20T01:00:09.305Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 85423866.81,
		"hash": "35f2bd91944ad5d63c1571c69da907ddd27cc74d47d7e98fad341835b060c585"
	},
	{
		"id": "5eb8a4b89f68",
		"ts": "2026-11-20T01:00:09.511Z",
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
		"liquidityUsd": 21171184.5,
		"hash": "5eb8a4b89f68a81b54938798a3027d8713cfb0fb28ce23d2b617112fc3f1d2ca"
	},
	{
		"id": "c7f0d1abfd73",
		"ts": "2026-11-20T01:00:09.709Z",
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
		"liquidityUsd": 356716.16,
		"hash": "c7f0d1abfd73a0a96f8a7e03cf6094c30b6638c4d002a8a9745f200ade97136d"
	},
	{
		"id": "fb7e7e3bff63",
		"ts": "2026-11-20T01:00:09.927Z",
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
		"liquidityUsd": 3573589.7,
		"hash": "fb7e7e3bff6363e9dbaa3cdafa2a79784946cd651d55c70a60738ede3cfdea86"
	},
	{
		"id": "6aeb06afa106",
		"ts": "2026-11-20T01:00:10.147Z",
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
		"liquidityUsd": 836987.14,
		"hash": "6aeb06afa106e3fb9e7d5f2ddb801a6a309165eacdb6a77bb7bc64e3532948ae"
	},
	{
		"id": "07e786864b04",
		"ts": "2026-11-20T01:00:10.358Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 818705.73,
		"hash": "07e786864b04745824e0f34f50bda82d42f148cea081e60643cfab7e7f27f006"
	},
	{
		"id": "51164609eae7",
		"ts": "2026-11-20T01:00:10.595Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3573589.7,
		"hash": "51164609eae79b1975773dcda0a93d128fce4d7467d2b16d7596f56837010e21"
	},
	{
		"id": "1853514c10ef",
		"ts": "2026-11-20T01:00:10.792Z",
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
		"liquidityUsd": 1585240.88,
		"hash": "1853514c10ef92dbb6983e2dcd2bdd2cce447ff98f12c6a2a6be9c74bbd37799"
	},
	{
		"id": "81fd2e109119",
		"ts": "2026-11-20T01:00:10.995Z",
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
		"liquidityUsd": 1091724.13,
		"hash": "81fd2e109119074db7f702d684b24a9c2da86e834005a867e910336ee331e174"
	},
	{
		"id": "fd76d5fae9bc",
		"ts": "2026-11-20T01:00:11.206Z",
		"symbol": "ANTc",
		"token": "0xb20000000000000000000016e38FD364d271Ba28",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 998500.71,
		"hash": "fd76d5fae9bcab1caca4861dae8bae35f16bd2a714773f2e1009cbc6fe340efe"
	},
	{
		"id": "3d5dccfb6d8c",
		"ts": "2026-11-20T01:00:11.388Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3287881.07,
		"hash": "3d5dccfb6d8c8dc7bad4babc91b8dca3749d9edcd35ac9a1160d5eddb15dbd2b"
	},
	{
		"id": "2bf5a4e2ad97",
		"ts": "2026-11-20T01:00:11.586Z",
		"symbol": "Anthropic",
		"token": "0xBc6066cCD5a9b3E23688b49A64De55f8396b26fB",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10272297.33,
		"hash": "2bf5a4e2ad97cf180f466f1f387a78f5133e0afbecc2e034889b4aa1222595b5"
	},
	{
		"id": "abcd80b4132d",
		"ts": "2026-11-20T01:00:11.800Z",
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
		"liquidityUsd": 6622282.68,
		"hash": "abcd80b4132dddece00684444a0bc1020e14314cff9eeb1fee1c4257203bfc8c"
	},
	{
		"id": "3e4bb36c21a2",
		"ts": "2026-11-20T01:00:12.009Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 147350.47,
		"hash": "3e4bb36c21a225a451461a2a1b950c9fb021be7757c56d78f9507f923bc6023b"
	},
	{
		"id": "61ef3e85c36f",
		"ts": "2026-11-20T01:00:12.221Z",
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
		"liquidityUsd": 1463121.55,
		"hash": "61ef3e85c36f19b90a584df46c2030894078207bbf9a2b5af9a96533f8a75469"
	},
	{
		"id": "f733ff080495",
		"ts": "2026-11-20T01:00:12.413Z",
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
		"liquidityUsd": 1663178.93,
		"hash": "f733ff0804957c6144a4367dbd555978b1e7ae3ac78a47cb658ddf8be3cb5285"
	},
	{
		"id": "67b2785baf0e",
		"ts": "2026-11-20T01:00:12.610Z",
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
		"liquidityUsd": 848575.43,
		"hash": "67b2785baf0ede9acdbb4e98a0cf230c56c971a2f246bcc0a05d9c79de1b840d"
	},
	{
		"id": "febdc8dc3f1d",
		"ts": "2026-11-20T01:00:12.806Z",
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
		"liquidityUsd": 1967715.58,
		"hash": "febdc8dc3f1d85db9cad48fb71ef8a178d920993f87fafaaf3155cef0f7d6ab6"
	},
	{
		"id": "9c6c05f77ec8",
		"ts": "2026-11-20T01:00:12.998Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 803646.93,
		"hash": "9c6c05f77ec82a0cbec576cb2df9e18d4bb0a36eb4416dba02fa8a9c8a683435"
	},
	{
		"id": "05494a4402a0",
		"ts": "2026-11-19T18:49:24.292Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 86595682.9,
		"hash": "05494a4402a02137b76b532b9cee4657db479ec5c1bcccc93c94fd7c127cf03f"
	},
	{
		"id": "95c5d10654df",
		"ts": "2026-11-19T18:49:24.776Z",
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
		"liquidityUsd": 21511942.5,
		"hash": "95c5d10654dfca678569a430aef15f56c7af79945396f60ba455fade320f2226"
	},
	{
		"id": "193dfed8780a",
		"ts": "2026-11-19T18:49:25.066Z",
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
		"liquidityUsd": 362545.51,
		"hash": "193dfed8780a11c5d78d5ad8ddf04c6157edea3f103dd79c06dc168ed85f5ba2"
	},
	{
		"id": "9942af7035b4",
		"ts": "2026-11-19T18:49:25.349Z",
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
		"liquidityUsd": 3617617.76,
		"hash": "9942af7035b4670ddd448bfd62ea90dd7d95e47973bafb0b82f7a6e865021bdc"
	},
	{
		"id": "7ba737ac0f5b",
		"ts": "2026-11-19T18:49:25.626Z",
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
		"liquidityUsd": 856092.53,
		"hash": "7ba737ac0f5b164c35d1928f18af03936718f8e95fba9b8e7e47ece1fbf2551f"
	},
	{
		"id": "00b3717309ca",
		"ts": "2026-11-19T18:49:25.932Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 835439.47,
		"hash": "00b3717309caebf3e365a4f6ea54700f7c39ec7940799fb23a90344b875a15e3"
	},
	{
		"id": "f9236ea4b906",
		"ts": "2026-11-19T18:49:26.230Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3617617.76,
		"hash": "f9236ea4b9065221a293e53ec15a7a4b1b7f704c6fef137900b7c126193516b2"
	},
	{
		"id": "d7f1394e7e1c",
		"ts": "2026-11-19T18:49:26.524Z",
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
		"liquidityUsd": 1613691.93,
		"hash": "d7f1394e7e1c86dde2497a594857e4a0dde97ace7a5f04cbe05b0ebcaac9f706"
	},
	{
		"id": "1f8ee1321f61",
		"ts": "2026-11-19T18:49:26.799Z",
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
		"liquidityUsd": 1141978.17,
		"hash": "1f8ee1321f61c418dc1f47c85429acb79b131954a35618fa7d23505497ab8636"
	},
	{
		"id": "e60a80b910d1",
		"ts": "2026-11-19T18:49:27.097Z",
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
		"liquidityUsd": 3349357.98,
		"hash": "e60a80b910d121893c36e5c40f6d2a7d8e5c6a114e19f6e5dca8020c35205122"
	},
	{
		"id": "7e69034d9ca9",
		"ts": "2026-11-19T18:49:27.358Z",
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
		"liquidityUsd": 1719977.22,
		"hash": "7e69034d9ca9b5351aa1cf9a0d0a21e00dcd865ce0a7821aa5752ae9a98fed76"
	},
	{
		"id": "ba35c57d4b7c",
		"ts": "2026-11-19T18:49:27.630Z",
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
		"liquidityUsd": 6853000.45,
		"hash": "ba35c57d4b7c78fd7a0dd837f783d884a4fe405f38015791f3f937df8fe559b5"
	},
	{
		"id": "b41e02431421",
		"ts": "2026-11-19T18:49:27.893Z",
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
		"liquidityUsd": 149624.32,
		"hash": "b41e02431421c83be88a7126fc9e175abc8b2deb137d5088a49cdb5f26db3c16"
	},
	{
		"id": "f4204ec4d02f",
		"ts": "2026-11-19T18:49:28.176Z",
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
		"liquidityUsd": 2026084.3,
		"hash": "f4204ec4d02f6e848f4ebfd82d6efe2337a236f86cabc0ff9b65d3c574ff5834"
	},
	{
		"id": "a06b6dc3a5b5",
		"ts": "2026-11-19T18:49:28.435Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2783150.02,
		"hash": "a06b6dc3a5b5511e70f220a702aa84050a44b0fb618fb4ba509295684b31bcc1"
	},
	{
		"id": "be1b2d78debd",
		"ts": "2026-11-19T18:49:28.693Z",
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
		"liquidityUsd": 1381874.77,
		"hash": "be1b2d78debd2f8986b4b6e70a47e389e8328a294fa610461a55555ca7d6c192"
	},
	{
		"id": "9d797b24bac7",
		"ts": "2026-11-19T18:49:28.950Z",
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
		"liquidityUsd": 856960.32,
		"hash": "9d797b24bac7cdaa0a08e4fc6e0d5cbc9f7d67d7c63276de2c49b89b0027178f"
	},
	{
		"id": "498f24393638",
		"ts": "2026-11-19T18:49:29.210Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 574858.47,
		"hash": "498f2439363877a5ef5f40acf8d60974168cd4d2a5a5ad0cbd73bc0fe52ff00d"
	},
	{
		"id": "a7757b4c2615",
		"ts": "2026-11-19T18:49:29.606Z",
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
		"liquidityUsd": 1627295.23,
		"hash": "a7757b4c26150cf6efb538b4550585b626f22400ad5c4764397a83eb39c9b570"
	},
	{
		"id": "a7a82b96440f",
		"ts": "2026-11-19T09:49:07.898Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 86934981.58,
		"hash": "a7a82b96440f43bd6d75c40d3f3f4f5f33e359a4d72893b074fdd7fca7b36b19"
	},
	{
		"id": "6d3b617fb63e",
		"ts": "2026-11-19T09:49:08.624Z",
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
		"liquidityUsd": 18039366.66,
		"hash": "6d3b617fb63e70fdbd813f2f757f47720aa2819cdf4cbe84b984ba08926976a2"
	},
	{
		"id": "47515b8d7155",
		"ts": "2026-11-19T09:49:08.896Z",
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
		"liquidityUsd": 367527.66,
		"hash": "47515b8d7155f217c0af4c9c8ebcd6dfc4d4ec8663b249a4118fcc8034a09ac5"
	},
	{
		"id": "a8d34756a2ef",
		"ts": "2026-11-19T09:49:09.209Z",
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
		"liquidityUsd": 3668142.21,
		"hash": "a8d34756a2ef06d2172e7d5a36e13b9f928b1c4d39c22db9437307a65dbf626a"
	},
	{
		"id": "ece192099ba9",
		"ts": "2026-11-19T09:49:09.507Z",
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
		"liquidityUsd": 870121.61,
		"hash": "ece192099ba9d4d9a87814fcf7d79195260964def2d38397399a6d55eae42ebf"
	},
	{
		"id": "275f5eeed7e5",
		"ts": "2026-11-19T09:49:09.772Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 850774.59,
		"hash": "275f5eeed7e54d4246b830392cdf795273dae758d5d5c44e4c2b521af91dac2f"
	},
	{
		"id": "a590e8c7eaf1",
		"ts": "2026-11-19T09:49:10.050Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3668142.21,
		"hash": "a590e8c7eaf11f0c54f39302325a7405c476a2dd91b6ef754b46f5c1e8b9700f"
	},
	{
		"id": "f21a6156a6e1",
		"ts": "2026-11-19T09:49:10.326Z",
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
		"liquidityUsd": 1707413.41,
		"hash": "f21a6156a6e156b661a4ddff891d4a5003707bbfb5d8d44e9611f59161921f3c"
	},
	{
		"id": "c6c0bbb27e20",
		"ts": "2026-11-19T09:49:10.592Z",
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
		"liquidityUsd": 1169371.66,
		"hash": "c6c0bbb27e2011cfe2882ba16137eedc2c7c17ca9a38da7bc4369837eaab493c"
	},
	{
		"id": "aa58a57942ad",
		"ts": "2026-11-19T09:49:10.862Z",
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
		"liquidityUsd": 1834484.52,
		"hash": "aa58a57942ad14104897463e1ad097735776410a53a4612f1faa6516d506beb9"
	},
	{
		"id": "074be99257a7",
		"ts": "2026-11-19T09:49:11.135Z",
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
		"liquidityUsd": 6987273.04,
		"hash": "074be99257a7a932d384c383bcf6f328ac71772b995963068c3652ffe1aee161"
	},
	{
		"id": "04b0f3067e37",
		"ts": "2026-11-19T09:49:11.390Z",
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
		"liquidityUsd": 145221.12,
		"hash": "04b0f3067e378bba0fec1b57baeb14b8baa523958fd6660fe5dd4c78664ce6c1"
	},
	{
		"id": "b5db5dff7011",
		"ts": "2026-11-19T09:49:11.639Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2768121.07,
		"hash": "b5db5dff70115c429e7b170f1c813d36c9d8fd808b6f3cdd2b9da2dc71b6d3ec"
	},
	{
		"id": "6da2fecd149c",
		"ts": "2026-11-19T09:49:11.887Z",
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
		"liquidityUsd": 2039770.3,
		"hash": "6da2fecd149c45d5689dca92da1c7b3683bd7fa7e1a0a90b38605ced0c71301c"
	},
	{
		"id": "4d3e4f386d1b",
		"ts": "2026-11-19T09:49:12.139Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 831232.38,
		"hash": "4d3e4f386d1b1f1494d2eb29ae2a56ac410717e523e3f56d6a92d5eeeb635489"
	},
	{
		"id": "ca9fe2ad8bed",
		"ts": "2026-11-19T09:49:12.387Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3435581.02,
		"hash": "ca9fe2ad8bed88ba98bc271ba32dbe640eb0c6a71ed3a67bed6ed52fd835e17f"
	},
	{
		"id": "9dfcd3508d3a",
		"ts": "2026-11-19T09:49:12.634Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 876278.92,
		"hash": "9dfcd3508d3a418f01d8b4c266be907fd68811af83c45e09d787d8508e556043"
	},
	{
		"id": "368576e5c69f",
		"ts": "2026-11-19T09:49:12.898Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1347764.25,
		"hash": "368576e5c69f23231ea171a9eea1bb8b53901ae787ed4e91e36e7dd998a8c1c5"
	},
	{
		"id": "24b8b69a934b",
		"ts": "2026-11-19T09:49:13.150Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 584191.97,
		"hash": "24b8b69a934b66874c2085770563829a664fdaa1a4bd5da8f85ab63ead67946a"
	},
	{
		"id": "3563794642a0",
		"ts": "2026-11-19T01:40:17.295Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 87697133.65,
		"hash": "3563794642a017732e9c1e7b828cac1e2681976c5da53ea89acbd25519d029eb"
	},
	{
		"id": "b9edddae4aa8",
		"ts": "2026-11-19T01:40:17.543Z",
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
		"liquidityUsd": 17539030.66,
		"hash": "b9edddae4aa803414b37f71c3b8d1ee4838786d0042b1f08706ab32ee14c0704"
	},
	{
		"id": "c1ad8399c7de",
		"ts": "2026-11-19T01:40:17.787Z",
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
		"liquidityUsd": 361455.68,
		"hash": "c1ad8399c7de987798dd42a665bb2d1303a9c63ea63fe183a1df1225f493e128"
	},
	{
		"id": "7bcc051fa509",
		"ts": "2026-11-19T01:40:18.032Z",
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
		"liquidityUsd": 3665624.85,
		"hash": "7bcc051fa509d8e0ba73d1dcd63e81822bf6edcc325c508ac2126fa65360a10c"
	},
	{
		"id": "3945631f0aed",
		"ts": "2026-11-19T01:40:18.288Z",
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
		"liquidityUsd": 851667.83,
		"hash": "3945631f0aed374ccfa82dc0907b5d148290831d1fb0667df8087100e7c73d05"
	},
	{
		"id": "a3867fa9bfbf",
		"ts": "2026-11-19T01:40:18.532Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 834926.97,
		"hash": "a3867fa9bfbf2cfba4c3736102ba4cea70951e43444b1719160eaf986fc68277"
	},
	{
		"id": "537f5c75c5d8",
		"ts": "2026-11-19T01:40:18.777Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3665624.85,
		"hash": "537f5c75c5d820741c40c60d81571537edee167a014ed2d42441e14a41ea746e"
	},
	{
		"id": "8c060e805188",
		"ts": "2026-11-19T01:40:19.021Z",
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
		"liquidityUsd": 1676144.63,
		"hash": "8c060e805188ebe6a0f1e64f799af35b50b6d59b05659342c2085aec13702333"
	},
	{
		"id": "d34242b9151a",
		"ts": "2026-11-19T01:40:19.281Z",
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
		"liquidityUsd": 1724208.22,
		"hash": "d34242b9151a3416c7aa809754595bba63bbc5f4894e8385f8738fcb3ab6b76d"
	},
	{
		"id": "e0929084adc0",
		"ts": "2026-11-19T01:40:19.545Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"volume_liquidity_anomaly",
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 976669.42,
		"hash": "e0929084adc0220efdc6eeb0585cec1e0a956b5e9463c94b93908f98cddf2c8d"
	},
	{
		"id": "ee651e4b7e3e",
		"ts": "2026-11-19T01:40:19.773Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 820025.12,
		"hash": "ee651e4b7e3ec9a3ea3fa9fbe5376d838e33bc7f0e4512c8dc785bcf62f006e8"
	},
	{
		"id": "68c82725ed26",
		"ts": "2026-11-19T01:40:20.000Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 132382.07,
		"hash": "68c82725ed263fd072df6f7bf69310a3f9e511d13865420ccb2960f95821bdf9"
	},
	{
		"id": "e23736076105",
		"ts": "2026-11-19T01:40:20.228Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2719661.24,
		"hash": "e237360761058f17bf36761959e2bf6f5853ad58096f71893cf64807854f0738"
	},
	{
		"id": "c341c0c66373",
		"ts": "2026-11-19T01:40:20.466Z",
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
		"liquidityUsd": 2040961.92,
		"hash": "c341c0c66373fd8641f76762dbda497c6934e66bea057959cc05cb752d6c2887"
	},
	{
		"id": "2e59f2d66307",
		"ts": "2026-11-19T01:40:20.706Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 571408.62,
		"hash": "2e59f2d6630740c2abc66965e3b89c0eb425903c2401abf90fb7cb5aa6ec95af"
	},
	{
		"id": "4ed07abbfeee",
		"ts": "2026-11-19T01:40:20.933Z",
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
		"liquidityUsd": 6630155.54,
		"hash": "4ed07abbfeee698d34379d2d1f24559e6f0b56ccfa27c1b6d59ee825e28a11b7"
	},
	{
		"id": "056f266a0461",
		"ts": "2026-11-19T01:40:21.157Z",
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
		"liquidityUsd": 1667529.44,
		"hash": "056f266a0461580eb77ccc8d5db62037e76ebf4c350dcae23e50fed45ad5b072"
	},
	{
		"id": "c5acb3836718",
		"ts": "2026-11-19T01:40:21.383Z",
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
		"liquidityUsd": 884018,
		"hash": "c5acb38367185d05c4e759587a7e0dee70a50fd565e625041f7ec06263f25fb8"
	},
	{
		"id": "b1789f9f548b",
		"ts": "2026-11-19T01:40:21.618Z",
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
		"liquidityUsd": 1123447.71,
		"hash": "b1789f9f548b97eec71fcc4fe2f67cf9250c7dbea63fd362b2cb5a2ce12b6f18"
	},
	{
		"id": "c27ad7898d0c",
		"ts": "2026-11-18T19:54:57.868Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 86825422.62,
		"hash": "c27ad7898d0cac6072c1a92402283201da6cb285cf1619be5fe8a1a73324b451"
	},
	{
		"id": "a58148ac96f0",
		"ts": "2026-11-18T19:54:58.106Z",
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
		"liquidityUsd": 16021993.5,
		"hash": "a58148ac96f0dfb08b63770c6f401f848bb5dc3170e565b526d956747451c3d4"
	},
	{
		"id": "f4abf858b978",
		"ts": "2026-11-18T19:54:58.306Z",
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
		"liquidityUsd": 361674.35,
		"hash": "f4abf858b978013e8be3302a815308c74dae147962c3bd6d73a5a520ec93e31a"
	},
	{
		"id": "d2c5a89a8f2e",
		"ts": "2026-11-18T19:54:58.538Z",
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
		"liquidityUsd": 3621233.18,
		"hash": "d2c5a89a8f2ee8ee6481776c526cbc7bb823df353f7e5c51df446adbe4261f97"
	},
	{
		"id": "37d9384e6982",
		"ts": "2026-11-18T19:54:58.745Z",
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
		"liquidityUsd": 865344.92,
		"hash": "37d9384e6982da6bd02df83d25437fb504bc9bcac3b580cd70fc1292666003a7"
	},
	{
		"id": "10adc974ef55",
		"ts": "2026-11-18T19:54:58.967Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 826439.02,
		"hash": "10adc974ef555e169ab657ff991815d985b8ffd4e31d312a31daf534521e07b1"
	},
	{
		"id": "16e3d0f57b85",
		"ts": "2026-11-18T19:54:59.160Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3621233.18,
		"hash": "16e3d0f57b85503ae7030d82aaf6456ebd97dc99adb014248a701f5c6d4977fe"
	},
	{
		"id": "cb9053bf13c4",
		"ts": "2026-11-18T19:54:59.449Z",
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
		"liquidityUsd": 1665468.7,
		"hash": "cb9053bf13c43adbea84425c3d0cdfadb11977940cbe010774c574ceaa8ae986"
	},
	{
		"id": "431332d8c28f",
		"ts": "2026-11-18T19:54:59.653Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"volume_liquidity_anomaly",
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 967436.7,
		"hash": "431332d8c28f1d28aa0c60d1982dedafbb76679b682bb9aae887a065f5b74850"
	},
	{
		"id": "88926950a93e",
		"ts": "2026-11-18T19:54:59.855Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 814503.3,
		"hash": "88926950a93eb455328b5d8d371c14f3dfca592c3a1e7ac00effb4255dda6f8c"
	},
	{
		"id": "54df2f362a32",
		"ts": "2026-11-18T19:55:00.055Z",
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
		"liquidityUsd": 1715751.35,
		"hash": "54df2f362a322b861f4d24e72748f7f57ed1cbaaa378f36e7fc8be0f54148f44"
	},
	{
		"id": "ee5e6245af82",
		"ts": "2026-11-18T19:55:00.252Z",
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
		"liquidityUsd": 131757.75,
		"hash": "ee5e6245af827d3f91a2caac4723061470205e414f45d23cbb1400bd54d7de3a"
	},
	{
		"id": "078535eaf237",
		"ts": "2026-11-18T19:55:00.455Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 2750873.93,
		"hash": "078535eaf23725fb4fd0235498ca61e2a6dc3cfbca76e36cb253361c2dd0016e"
	},
	{
		"id": "5fbb0f831795",
		"ts": "2026-11-18T19:55:00.702Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1325338.12,
		"hash": "5fbb0f8317957612212d6cf7b1c3f37972501b9be444a818f7071c111fb1faee"
	},
	{
		"id": "c5a20e24f7ad",
		"ts": "2026-11-18T19:55:01.151Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2022831.89,
		"hash": "c5a20e24f7ad6aa6439322ba7558c349fa9729cb94de109d58c839a68f486d66"
	},
	{
		"id": "667a1e50bcb2",
		"ts": "2026-11-18T19:55:01.340Z",
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
		"liquidityUsd": 1609199.6,
		"hash": "667a1e50bcb297a4855665364654ab8a9048afc085d47a63e8c12786a1e76468"
	},
	{
		"id": "c5b79c9bd13c",
		"ts": "2026-11-18T19:55:01.534Z",
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
		"liquidityUsd": 6713925.25,
		"hash": "c5b79c9bd13c7db61eac7f4fdbb7067713cca5cd976450346fa3713606b94a60"
	},
	{
		"id": "cd59e31e2fd1",
		"ts": "2026-11-18T19:55:01.728Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1003215.25,
		"hash": "cd59e31e2fd187e089bb2ed04aed2881655e044f82f56eb63a4b87124bd42ce2"
	},
	{
		"id": "637b38e06167",
		"ts": "2026-11-18T19:55:01.944Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 815427.57,
		"hash": "637b38e061670fef2b75485b4ad5ee9eb4434b47dc1241199a60ea993c923fde"
	},
	{
		"id": "325b791401e9",
		"ts": "2026-11-18T11:02:03.314Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 88713458.61,
		"hash": "325b791401e9a4b4ae034d6284be8fff6534b04b6d87f7be693051c31ca630a3"
	},
	{
		"id": "19bba16fd9dd",
		"ts": "2026-11-18T11:02:04.183Z",
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
		"liquidityUsd": 16311817.83,
		"hash": "19bba16fd9dd12a6a3d88e973d525ee68d3830cc43175d28d51d0508fa4a92c8"
	},
	{
		"id": "5c1a83963875",
		"ts": "2026-11-18T11:02:04.624Z",
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
		"liquidityUsd": 366228.49,
		"hash": "5c1a8396387593b7240dd43a4f543b1c1ebc6addd51f075626d2765365a80af2"
	},
	{
		"id": "6c3af2fa29d6",
		"ts": "2026-11-18T11:02:05.097Z",
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
		"liquidityUsd": 3671606.06,
		"hash": "6c3af2fa29d6dd16faaa28111b74459c316fd2e4c61484241414c5b804352829"
	},
	{
		"id": "848c479ffa51",
		"ts": "2026-11-18T11:02:05.528Z",
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
		"liquidityUsd": 885004.76,
		"hash": "848c479ffa5144d788ebbf7699d3dbdede0311da5b4152ae7483c5f106cd14b0"
	},
	{
		"id": "8c5ae287a555",
		"ts": "2026-11-18T11:02:05.968Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 844148.55,
		"hash": "8c5ae287a555e868fd5d0f5520290aeb705777b5b636133acbb9cfcb7d1f277b"
	},
	{
		"id": "eb11b391ee4d",
		"ts": "2026-11-18T11:02:06.200Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3671606.06,
		"hash": "eb11b391ee4dda441ff924c20a4000606210e3c1eabfe8b40f6ee5237b8bcda1"
	},
	{
		"id": "7896d097a8c0",
		"ts": "2026-11-18T11:02:06.691Z",
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
		"liquidityUsd": 1713847.25,
		"hash": "7896d097a8c098f6ec97ef473765c70dc1702ba0725b59d9122105a1d5e257d9"
	},
	{
		"id": "3147ea45d7ed",
		"ts": "2026-11-18T11:02:06.923Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"volume_liquidity_anomaly",
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 830428.36,
		"hash": "3147ea45d7ed3810b398f337a9d81e5ecad475e0bf0a3c5c576991d9222da055"
	},
	{
		"id": "80645f1c2104",
		"ts": "2026-11-18T11:02:07.392Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 885024.88,
		"hash": "80645f1c2104b807cf4756be422228621f797552460e4fc7b8ed7d519ac452b6"
	},
	{
		"id": "4625e17c3c04",
		"ts": "2026-11-18T11:02:07.619Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 57379.93,
		"hash": "4625e17c3c04462c2fb6c082fe17af188af9bc909093739a6fba69c0c8accaed"
	},
	{
		"id": "507129148b11",
		"ts": "2026-11-18T11:02:07.840Z",
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
		"liquidityUsd": 1807199.77,
		"hash": "507129148b11698b7c749fc6b2a84e8dab140096f9b9aee49c6b49a2fd851984"
	},
	{
		"id": "2b7bd2e59397",
		"ts": "2026-11-18T11:02:08.080Z",
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
		"liquidityUsd": 790590.35,
		"hash": "2b7bd2e59397607f2ac12cc4b438ccedc8f347f6b1ccbf317b005ab6a6b9e8a5"
	},
	{
		"id": "165101013531",
		"ts": "2026-11-18T11:02:08.309Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1360300.77,
		"hash": "1651010135314b1c8972b470105ebde8fc7aec904fa9312e9cfe7094e97cc92a"
	},
	{
		"id": "22890d5c3d0c",
		"ts": "2026-11-18T11:02:08.528Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2793866.96,
		"hash": "22890d5c3d0c463429f705f8717cfe5134cd8e02e6a4e45e8218b172a6101518"
	},
	{
		"id": "2e3413784c71",
		"ts": "2026-11-18T11:02:08.751Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3429443.43,
		"hash": "2e3413784c714a82533532fd915b118bc73080676130902e247ed8c99532143e"
	},
	{
		"id": "10411727e9f7",
		"ts": "2026-11-18T11:02:08.970Z",
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
		"liquidityUsd": 804896.74,
		"hash": "10411727e9f7c0a0fba076b79d707fcdd0106936bd1a75a4f9cc1e95f20f25b8"
	},
	{
		"id": "1cc559e9bc90",
		"ts": "2026-11-18T11:02:09.191Z",
		"symbol": "AX1",
		"token": "0x0947FB7076BFa307796F8fd533055f6016C6cccC",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 392831.55,
		"hash": "1cc559e9bc9010fb2f41781b55109604064ea9b07ac0680216ed5042c68f05a8"
	},
	{
		"id": "354dc236cbff",
		"ts": "2026-11-18T11:02:09.410Z",
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
		"liquidityUsd": 2157314.33,
		"hash": "354dc236cbff210511e331898e9667b7deb4b2d16173e336b5d9f49a065a19bc"
	},
	{
		"id": "689ab77601a1",
		"ts": "2026-11-18T11:02:09.645Z",
		"symbol": "infi",
		"token": "0x9f4c76F421f47b3C234f841F477897f1D895177D",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 347593.83,
		"hash": "689ab77601a12303e1799f12a9dd54359a65c7dc83820e51576e2ae2c81f7aa5"
	},
	{
		"id": "c8f669e5f290",
		"ts": "2026-11-18T02:03:16.113Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 88768099.46,
		"hash": "c8f669e5f290f8adbd78c3c52f89842543fb415c2ad3179c5f84adaa104e8fb1"
	},
	{
		"id": "a2d952ee28cb",
		"ts": "2026-11-18T02:03:16.340Z",
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
		"liquidityUsd": 16276943.17,
		"hash": "a2d952ee28cbc68d9e68f88ae734569b30b2cef401288cfd3b9c850f4839053e"
	},
	{
		"id": "d67a76d7aae6",
		"ts": "2026-11-18T02:03:16.584Z",
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
		"liquidityUsd": 370347.53,
		"hash": "d67a76d7aae6e307b01643538766fc3bb3620cbf204ee2d9d97218744e112845"
	},
	{
		"id": "36ba027d674c",
		"ts": "2026-11-18T02:03:16.818Z",
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
		"liquidityUsd": 3696119.25,
		"hash": "36ba027d674c1095e4ca6b14b9d839d75dbd9a661bd1722d8b34db84f0df2329"
	},
	{
		"id": "02d062fd7577",
		"ts": "2026-11-18T02:03:17.050Z",
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
		"liquidityUsd": 882086.73,
		"hash": "02d062fd7577c9185da284fa25b967bc45855e9103fe8e77b37cd86505181a0c"
	},
	{
		"id": "2f165739ed32",
		"ts": "2026-11-18T02:03:17.268Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 842602.95,
		"hash": "2f165739ed32a37b9dd20d601f143ad856b204d5d15f1d6b625cad378883e37a"
	},
	{
		"id": "761b7349258b",
		"ts": "2026-11-18T02:03:17.483Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3696833.62,
		"hash": "761b7349258bb8205f911a72f06f442c9f8ecf821dc6717775d7bf8bced4b731"
	},
	{
		"id": "b1270f58cb70",
		"ts": "2026-11-18T02:03:17.737Z",
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
		"liquidityUsd": 1805121.33,
		"hash": "b1270f58cb705db1d1eb3eda53b32150ed7e154c46685fe443154a09f4339f20"
	},
	{
		"id": "59ef54b37bb6",
		"ts": "2026-11-18T02:03:17.969Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"volume_liquidity_anomaly",
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 833977.05,
		"hash": "59ef54b37bb6a3802cf5259f62e9796bea72d8cace16408c5f8da51709fdf1a8"
	},
	{
		"id": "d8bbbb1dd70c",
		"ts": "2026-11-18T02:03:18.177Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 902503.16,
		"hash": "d8bbbb1dd70c9d1308104eb3daa20b629a096ca08b7862d1e8a7ae6f324dcf09"
	},
	{
		"id": "82ed82caae16",
		"ts": "2026-11-18T02:03:18.425Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 56338.12,
		"hash": "82ed82caae166306c286232a00af065af6fde98bc11288098ab99864315d36af"
	},
	{
		"id": "56ed7843c8f3",
		"ts": "2026-11-18T02:03:18.647Z",
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
		"liquidityUsd": 784869.46,
		"hash": "56ed7843c8f34feb7fe152beeb78ffe67b69ad07bc73b0618b774a366f31451b"
	}
]
