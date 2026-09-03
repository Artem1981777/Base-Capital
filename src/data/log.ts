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
	"updatedAt": "2026-09-03T19:37:04.008Z",
	"tokensScored": 16026,
	"verdictsIssued": 16026,
	"safe": 13617,
	"risky": 1188,
	"likelyRug": 1221,
	"ticks": 921
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "0540b5e5941f",
		"ts": "2026-09-03T19:36:57.548Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118928964,
		"hash": "0540b5e5941fc5543b0cca9b2b4ae3162417a00e09524118a4ac3234aeb56f2d"
	},
	{
		"id": "6eaa8673484d",
		"ts": "2026-09-03T19:36:58.186Z",
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
		"liquidityUsd": 19022635.8,
		"hash": "6eaa8673484de661d34e593eb84ed5a98631a341182703c5e1215173da256466"
	},
	{
		"id": "6b9531b51918",
		"ts": "2026-09-03T19:36:58.626Z",
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
		"liquidityUsd": 976617.11,
		"hash": "6b9531b51918c9c286553bfa882aa1d5066a87b48a27d0d841f18e211fcdfc19"
	},
	{
		"id": "7445e0b9f5df",
		"ts": "2026-09-03T19:36:59.068Z",
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
		"liquidityUsd": 29560194.34,
		"hash": "7445e0b9f5dfd08ebff84b85819055ba482d44f11ccd0f30e484e3226491240f"
	},
	{
		"id": "3d9731502445",
		"ts": "2026-09-03T19:36:59.350Z",
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
		"liquidityUsd": 4346214.94,
		"hash": "3d9731502445db4db4554b3a8f20f537a466f2a5128e3ba8e1495a6c256a427c"
	},
	{
		"id": "8f8be7c4c449",
		"ts": "2026-09-03T19:36:59.595Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1182318.33,
		"hash": "8f8be7c4c449f5c095f052975efbd5eb726c0efaec4d1f2bedb75d97cd230009"
	},
	{
		"id": "4c07c89e2937",
		"ts": "2026-09-03T19:36:59.842Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29560194.34,
		"hash": "4c07c89e2937a0ae6f8d4c32a6ad9ec832bc8724f5f1e2b4da78866cbb538edc"
	},
	{
		"id": "6d555205408d",
		"ts": "2026-09-03T19:37:00.093Z",
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
		"liquidityUsd": 3484877.73,
		"hash": "6d555205408d995622a712723a22ba43d53a435fb2e9ff411aaf3182797827c4"
	},
	{
		"id": "2dc35ec4984e",
		"ts": "2026-09-03T19:37:00.727Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 985517.76,
		"hash": "2dc35ec4984e2de12c23dd96fd58610f7b12ad3f081f6f38f13b9448b5931b66"
	},
	{
		"id": "c14729b8aed8",
		"ts": "2026-09-03T19:37:01.281Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1986782.31,
		"hash": "c14729b8aed84681e75fe44209ab5a120b5ee457aee5700548ed5d293164d254"
	},
	{
		"id": "f994162401f4",
		"ts": "2026-09-03T19:37:01.843Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1391512.56,
		"hash": "f994162401f4763cfc478b7f9f22aa18289e3b6e5eb65a8fce80563f1986bc3d"
	},
	{
		"id": "1bc13d3fd26d",
		"ts": "2026-09-03T19:37:02.110Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 892457.19,
		"hash": "1bc13d3fd26dd45a67121cfa86bcef6c0ac90e6e45ef8bb5f4a4f310b64abcfb"
	},
	{
		"id": "e866aa6ed932",
		"ts": "2026-09-03T19:37:02.373Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3423934.36,
		"hash": "e866aa6ed932387419b6bdcd87737becf880b79aa56c6260d08c01ac5787126a"
	},
	{
		"id": "390968b268ec",
		"ts": "2026-09-03T19:37:02.638Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 281523.41,
		"hash": "390968b268eca8a28bf6fe245853f56c8d33685da57525f4ce116371558b40b8"
	},
	{
		"id": "78993d862285",
		"ts": "2026-09-03T19:37:02.921Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 85679.34,
		"hash": "78993d862285de8c9bbff4acae9f11d236218955130031785cea0049395636d6"
	},
	{
		"id": "e7ba2a6770cd",
		"ts": "2026-09-03T19:37:03.230Z",
		"symbol": "umia",
		"token": "0x56ab53b77F07DA3af732150E8aeC4783eB5BbA7D",
		"score": 58,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.16,
		"flags": [
			"owner_can_change_balance",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 3280313.34,
		"hash": "e7ba2a6770cdf4e2ce6963c6a1b7f609d8744affe7f8ad6ab43aa8fa70b8476d"
	},
	{
		"id": "cc0b9d6e1843",
		"ts": "2026-09-03T19:37:03.498Z",
		"symbol": "BASEJUICE",
		"token": "0xb200000000000000000000046390aed221043f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 116109.36,
		"hash": "cc0b9d6e18431f7a5c18585d1e5d815dfd1b641e5db41d4d3cb9b9dda1479eba"
	},
	{
		"id": "849669cbfcd5",
		"ts": "2026-09-03T19:37:03.779Z",
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
		"liquidityUsd": 1189780.95,
		"hash": "849669cbfcd58419db186919ef1a8fd28e50160094d95667d628823edab458bc"
	},
	{
		"id": "18a912d501f5",
		"ts": "2026-09-03T19:37:04.008Z",
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
		"liquidityUsd": 457750.97,
		"hash": "18a912d501f538d6d7ad6fe88a5876aa3a1c61c2c46181ad453c6a91a13444cf"
	},
	{
		"id": "1685794daad3",
		"ts": "2026-09-03T16:53:35.274Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117931985.19,
		"hash": "1685794daad3231817a379354d227703e4c45b31159b8de2aa32628720e14ccb"
	},
	{
		"id": "45b4c8ae21c4",
		"ts": "2026-09-03T16:53:35.631Z",
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
		"liquidityUsd": 14995585.53,
		"hash": "45b4c8ae21c46342a237ad724056feb7d79d72b0d8e48dbaa383d3c1919d5489"
	},
	{
		"id": "656a94eebabf",
		"ts": "2026-09-03T16:53:35.832Z",
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
		"liquidityUsd": 979212.62,
		"hash": "656a94eebabfa65d9329773ed74e1cdc854dcde32b5b8d1d0e609efcf0c8b4c9"
	},
	{
		"id": "e481b65208e8",
		"ts": "2026-09-03T16:53:36.042Z",
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
		"liquidityUsd": 29274135.54,
		"hash": "e481b65208e8b4801bf120844c43c61a38b052d421445e6766a6098a73ec7a6b"
	},
	{
		"id": "156498c8f18c",
		"ts": "2026-09-03T16:53:36.245Z",
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
		"liquidityUsd": 4325045.45,
		"hash": "156498c8f18c4c2628362887cf705f702f524f3bd5d3a602ff297acdf7e94b91"
	},
	{
		"id": "103d263e13cb",
		"ts": "2026-09-03T16:53:36.446Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1182318.33,
		"hash": "103d263e13cb7a4703ef49724e8b3dec93ae94619427b39975a34c1c7b3d400b"
	},
	{
		"id": "c7ece9b91207",
		"ts": "2026-09-03T16:53:36.646Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29274135.54,
		"hash": "c7ece9b9120783ca073735a6ce17ff358e034c07a8affa59a3fd05c22ca84fc5"
	},
	{
		"id": "afd80793a615",
		"ts": "2026-09-03T16:53:36.848Z",
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
		"liquidityUsd": 3415630.55,
		"hash": "afd80793a615f1e6e22ef3d4cb4956d92b78501b5f7163e577236f6725011fed"
	},
	{
		"id": "fd522807d956",
		"ts": "2026-09-03T16:53:37.051Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 949963.55,
		"hash": "fd522807d956f6bee7a3702ce1efd91e0b00afb99abed9e37ccfcfc772377898"
	},
	{
		"id": "d6f4832c8b96",
		"ts": "2026-09-03T16:53:37.251Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1989448.73,
		"hash": "d6f4832c8b96d7b1fd23e37083ec93fe6390bb4a7c9aa65e360f2ac1548e9e13"
	},
	{
		"id": "c7e44b35782b",
		"ts": "2026-09-03T16:53:37.436Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1396185.96,
		"hash": "c7e44b35782b8f0833186d070594f2eae2f8214f04b6b780d9fc141ada47c8f9"
	},
	{
		"id": "d1d08ff819a6",
		"ts": "2026-09-03T16:53:37.619Z",
		"symbol": "umia",
		"token": "0x56ab53b77F07DA3af732150E8aeC4783eB5BbA7D",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3114289.2,
		"hash": "d1d08ff819a606acfbdbefe0582b7ce5f71c33eb7da205e284257083685255f5"
	},
	{
		"id": "b92bd08994c7",
		"ts": "2026-09-03T16:53:37.799Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 927213.02,
		"hash": "b92bd08994c72f4c5c41392250a9cb9d2e72593d64f1b717d6a7e5eae1790ac7"
	},
	{
		"id": "9466a32cc63c",
		"ts": "2026-09-03T16:53:37.982Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3222528.97,
		"hash": "9466a32cc63c3d1ef4527a1ec8fd71790cbc4bb2cf2b344f1abf46d25a52c2e8"
	},
	{
		"id": "dbed6df2ad84",
		"ts": "2026-09-03T16:53:38.169Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 282661.4,
		"hash": "dbed6df2ad8458c84f90242593bc52e34fa2a4177dd9e7915c77260099287e57"
	},
	{
		"id": "e5a7adf9ca31",
		"ts": "2026-09-03T16:53:38.355Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 87418.1,
		"hash": "e5a7adf9ca31531e49883affa7e075060aaefb8db9ab5488201c2e9bffd46e25"
	},
	{
		"id": "5bf297cbc8de",
		"ts": "2026-09-03T16:53:38.540Z",
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
		"liquidityUsd": 476386.97,
		"hash": "5bf297cbc8de85f8fe7db42e74d0a1ffef80160d30b154c8d1a5462ab5585b70"
	},
	{
		"id": "38d3e92ffb5a",
		"ts": "2026-09-03T16:53:38.724Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 692234.23,
		"hash": "38d3e92ffb5ae65eb86e09d594eeccb269a15aab1990cb101c2f75c7895aeeeb"
	},
	{
		"id": "c439093d8447",
		"ts": "2026-09-03T16:53:38.908Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1183170.98,
		"hash": "c439093d8447c8e47de6e8bd5b05c3364d3900797d8e493a05e1cd545e6961ca"
	},
	{
		"id": "d3b22766516c",
		"ts": "2026-09-03T12:32:43.762Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116059346.42,
		"hash": "d3b22766516c6ebbf9ccb3aa6518136da72f2b1a0fce8793953896d754e17cad"
	},
	{
		"id": "1f1c1d649ac5",
		"ts": "2026-09-03T12:32:44.036Z",
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
		"liquidityUsd": 17912741.3,
		"hash": "1f1c1d649ac5ac7676556a7753413f1fd3d4ce5cae9b0ac24489ad1f868b7bd3"
	},
	{
		"id": "3989848245cc",
		"ts": "2026-09-03T12:32:44.331Z",
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
		"liquidityUsd": 919528.63,
		"hash": "3989848245ccbc6897ee413d27b85b9afe5b7bdf5c8748a3d96be09e6a58f3d9"
	},
	{
		"id": "6f3d5cf79da3",
		"ts": "2026-09-03T12:32:44.577Z",
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
		"liquidityUsd": 28903118.15,
		"hash": "6f3d5cf79da3761c1eaf6221257b4afafec4fa71d513b5d4a649b2f35fa34b98"
	},
	{
		"id": "0065c9d8ed61",
		"ts": "2026-09-03T12:32:44.831Z",
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
		"liquidityUsd": 4156820.52,
		"hash": "0065c9d8ed617971169220026e131f8f26494c4eb023268ee38a842b857c944f"
	},
	{
		"id": "1f6b7e946d30",
		"ts": "2026-09-03T12:32:45.075Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1139815.31,
		"hash": "1f6b7e946d3094f3f96de6cefbab290faed6d5d66fdcb5e5a8763f2fcd02ac5d"
	},
	{
		"id": "8e7f94d885af",
		"ts": "2026-09-03T12:32:45.365Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28903118.15,
		"hash": "8e7f94d885af0d2dae300f947ed17a900757c194c626fb41e36d0d4c95f5bfc2"
	},
	{
		"id": "cc65fbfdd19d",
		"ts": "2026-09-03T12:32:45.648Z",
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
		"liquidityUsd": 3950694.91,
		"hash": "cc65fbfdd19d47a62ff77b2664b6bc0507863987ea224e8ec6d6b32e351a5748"
	},
	{
		"id": "95a5334c7900",
		"ts": "2026-09-03T12:32:45.909Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 971716.25,
		"hash": "95a5334c7900a76517e3e10a2eb70b95113de8b4904cd2e1d0fc4a9207da7b42"
	},
	{
		"id": "fd526866b58f",
		"ts": "2026-09-03T12:32:46.171Z",
		"symbol": "umia",
		"token": "0x56ab53b77F07DA3af732150E8aeC4783eB5BbA7D",
		"score": 58,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.16,
		"flags": [
			"owner_can_change_balance",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 2999036.07,
		"hash": "fd526866b58f82b2368e5c84b42bc2b01a143492f220600777c5a21e87aa4167"
	},
	{
		"id": "da1098d99b8c",
		"ts": "2026-09-03T12:32:46.406Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1900915.45,
		"hash": "da1098d99b8c66d12489f3dddc4429fe202b8dfbdacfb619c7f1700f1a8261f5"
	},
	{
		"id": "45ee9989a2cf",
		"ts": "2026-09-03T12:32:46.641Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 948592.74,
		"hash": "45ee9989a2cf5025705e80f5c819a5a68a154fff8ccf4665f462a75ca7cfec1e"
	},
	{
		"id": "0e483b85077f",
		"ts": "2026-09-03T12:32:46.873Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3135533.4,
		"hash": "0e483b85077f629ebcab411b8d873d2dc060aafc9da5405c2d7df229677529dd"
	},
	{
		"id": "a1f504a6e78a",
		"ts": "2026-09-03T12:32:47.109Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1310890.51,
		"hash": "a1f504a6e78a35a873bf920bbd00ba20df2f1859c9cabcbe773b7f156cdf41e6"
	},
	{
		"id": "d90d7f750260",
		"ts": "2026-09-03T12:32:47.345Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 281279.94,
		"hash": "d90d7f7502605d2738f3ef04dae6217338315424747d2f132603357f227c2768"
	},
	{
		"id": "01140406b9f7",
		"ts": "2026-09-03T12:32:47.576Z",
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
		"liquidityUsd": 505809.03,
		"hash": "01140406b9f7e43d254da5b9ad11e1b9a3431082f774af74b7f2055c60ffc03b"
	},
	{
		"id": "3bcf61c62c9b",
		"ts": "2026-09-03T12:32:47.814Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 733820.34,
		"hash": "3bcf61c62c9b81bdfad116c7be8000f91b6265e9c2d98b4c0d2971fdc0618fd2"
	},
	{
		"id": "84533dd516f1",
		"ts": "2026-09-03T12:32:48.062Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 92327.01,
		"hash": "84533dd516f18a0005c75c32ecebafe4999963acf84ed49308117cb2b1a3eb59"
	},
	{
		"id": "a7bd0ee53347",
		"ts": "2026-09-03T12:32:48.310Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1147244.99,
		"hash": "a7bd0ee53347dc54f0e58f56435a5c4893d267c490f65e2aab6627725e4eba71"
	},
	{
		"id": "e80f2444718e",
		"ts": "2026-09-03T07:43:13.893Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115726085.1,
		"hash": "e80f2444718e289930f66ba6f207cfb1647aa29c919d47659743ccaebd4973b0"
	},
	{
		"id": "c344b13356b6",
		"ts": "2026-09-03T07:43:14.132Z",
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
		"liquidityUsd": 18132140.54,
		"hash": "c344b13356b67e4c91988840ed72a5691f846d53029eb495fc07b28dd5576125"
	},
	{
		"id": "c3aebb25a300",
		"ts": "2026-09-03T07:43:14.356Z",
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
		"liquidityUsd": 929299.48,
		"hash": "c3aebb25a300f0be0fd34099e1d35e7f014d4a85ca5f8cab7a14aaeb6cda0f18"
	},
	{
		"id": "8ff4df3d047a",
		"ts": "2026-09-03T07:43:14.577Z",
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
		"liquidityUsd": 28762614.23,
		"hash": "8ff4df3d047af20248b3725006afaaa5735a6f9c11df62f1f555a770ffe61d76"
	},
	{
		"id": "ed74a22a1446",
		"ts": "2026-09-03T07:43:14.792Z",
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
		"liquidityUsd": 4147168.71,
		"hash": "ed74a22a1446513d2202cabe299158d178d5ca66fe941c8a18cb40a7ba573753"
	},
	{
		"id": "f2912d765e92",
		"ts": "2026-09-03T07:43:15.039Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1139780.52,
		"hash": "f2912d765e924273ab6d1985abac8b799112583533c1abd367e469c240e8ea31"
	},
	{
		"id": "76efdcd1adb1",
		"ts": "2026-09-03T07:43:15.265Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28762614.23,
		"hash": "76efdcd1adb1255bedb1765a6e7f7e319211bb0bde4a1018cf67c9db048b66e5"
	},
	{
		"id": "bf22061a32b5",
		"ts": "2026-09-03T07:43:15.473Z",
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
		"liquidityUsd": 3542143.53,
		"hash": "bf22061a32b5652e6a18c2c37a2624322815ac2bffb4217501da31f1cc975243"
	},
	{
		"id": "8b703e8b3694",
		"ts": "2026-09-03T07:43:15.841Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 957289.38,
		"hash": "8b703e8b3694b00fc46314191c94440529bb5af9b48a86e15911ec56594d9069"
	},
	{
		"id": "7e418c619645",
		"ts": "2026-09-03T07:43:16.052Z",
		"symbol": "umia",
		"token": "0x56ab53b77F07DA3af732150E8aeC4783eB5BbA7D",
		"score": 43,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.14,
		"flags": [
			"new_pair_under_24h",
			"owner_can_change_balance",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 3129318.68,
		"hash": "7e418c61964517b7bb54af700ed00a59b91d945180ca6af711e0e23ed39ef41f"
	},
	{
		"id": "e901798fa2eb",
		"ts": "2026-09-03T07:43:16.253Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1887812.51,
		"hash": "e901798fa2ebad0a61c0b631ce10998f6591e2eeb9390038e7e6d4fbe393bdcf"
	},
	{
		"id": "17fbd82cf744",
		"ts": "2026-09-03T07:43:16.449Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 977504.56,
		"hash": "17fbd82cf744678dd8c964235d43e914ef077907a6fb6ef3c41f6f36e3306012"
	},
	{
		"id": "a750456a0944",
		"ts": "2026-09-03T07:43:16.654Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3167217.95,
		"hash": "a750456a094458a9a82c69e25b4515f2b4f70a50c08e4b0732884b901af4fb65"
	},
	{
		"id": "9971b60e2a82",
		"ts": "2026-09-03T07:43:16.909Z",
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
		"liquidityUsd": 468548.25,
		"hash": "9971b60e2a82c3b50ecf9f887e03cdca19425efb01544dc490999d4b5bd5fa86"
	},
	{
		"id": "6fb6d997eeec",
		"ts": "2026-09-03T07:43:17.103Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 280647.36,
		"hash": "6fb6d997eeec145a7834237639e4ac1a7bde690b5eb19ebae2677284624b2436"
	},
	{
		"id": "7cfbfdbdb230",
		"ts": "2026-09-03T07:43:17.299Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 764319.52,
		"hash": "7cfbfdbdb2309e5182eaf53e482f919fdb375e107a206965932205c1e9b52153"
	},
	{
		"id": "2f5a69874a27",
		"ts": "2026-09-03T07:43:17.494Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1286468.04,
		"hash": "2f5a69874a27a7b52f127487d4b47777545efc13f6da6815130acbf22409ec9d"
	},
	{
		"id": "2243387a52e6",
		"ts": "2026-09-03T07:43:17.690Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 89138.08,
		"hash": "2243387a52e685fbd4b14e76a136e9f3cf7f6ce91bd79e9356cd0fbcc08bf5fb"
	},
	{
		"id": "7ec783aa43ff",
		"ts": "2026-09-03T07:43:17.922Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1145431.3,
		"hash": "7ec783aa43ffda294dfd4454d993e31842535b44e7f964a503e437e99e0da23e"
	},
	{
		"id": "48b81c6278cb",
		"ts": "2026-09-03T02:45:51.127Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115345542.59,
		"hash": "48b81c6278cbd2bef22e72a33aa31844da4046ff5b1f13e00cc82aafe3f51500"
	},
	{
		"id": "36fea7f7bae9",
		"ts": "2026-09-03T02:45:51.398Z",
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
		"liquidityUsd": 17407584.72,
		"hash": "36fea7f7bae9bfe114a8576948c3a80e57734a7d1b76f02c01a0e057749dd319"
	},
	{
		"id": "144b99db5cc9",
		"ts": "2026-09-03T02:45:51.686Z",
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
		"liquidityUsd": 936187.59,
		"hash": "144b99db5cc9d9fd19ea233fbecdedb982e4c6a29c1e260dce29b245841e2867"
	},
	{
		"id": "90a77ae82afb",
		"ts": "2026-09-03T02:45:51.969Z",
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
		"liquidityUsd": 28603773.74,
		"hash": "90a77ae82afbf8922b1acbd31060ee72f271c91c5d49272f5ef9e9ee6524048f"
	},
	{
		"id": "59c913e2f9dc",
		"ts": "2026-09-03T02:45:52.234Z",
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
		"liquidityUsd": 4060717.47,
		"hash": "59c913e2f9dc0cfc1590e07cd2351f62f2887d344419d0c0ef1f965005cca592"
	},
	{
		"id": "1ea2e702b8b8",
		"ts": "2026-09-03T02:45:52.495Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1132574.69,
		"hash": "1ea2e702b8b8d9da2d9276df08862bac756f992b1c09466b4d8333817fca7eb0"
	},
	{
		"id": "ac0177038f7a",
		"ts": "2026-09-03T02:45:52.755Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28603774.27,
		"hash": "ac0177038f7a79d7ffed15ecda57d2aa867f6b06c3a3ac9d9e059a87fb867415"
	},
	{
		"id": "41c0f8d31262",
		"ts": "2026-09-03T02:45:53.036Z",
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
		"liquidityUsd": 3681786.44,
		"hash": "41c0f8d312627af00204f1d9db87d62e36134afba8ca0453cb3b49edb3449c97"
	},
	{
		"id": "2b72b378ca09",
		"ts": "2026-09-03T02:45:53.299Z",
		"symbol": "umia",
		"token": "0x56ab53b77F07DA3af732150E8aeC4783eB5BbA7D",
		"score": 43,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.14,
		"flags": [
			"new_pair_under_24h",
			"owner_can_change_balance",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 3150145.32,
		"hash": "2b72b378ca09ba6f5faf0a838f86ca46a4fd67944cf2d40211c9ea98a02bd8aa"
	},
	{
		"id": "8e91c0acdeca",
		"ts": "2026-09-03T02:45:53.578Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 837745.67,
		"hash": "8e91c0acdecab559c11ef33b64f27a0c90999043b65c14602d19546e25bde167"
	},
	{
		"id": "a5e07d304fad",
		"ts": "2026-09-03T02:45:53.822Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 997307.49,
		"hash": "a5e07d304fad35405f8f798a03b6d4d7ab0fd6129313e5243e2780b6e79f9b59"
	},
	{
		"id": "75681745a2af",
		"ts": "2026-09-03T02:45:54.066Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3166465.54,
		"hash": "75681745a2afec2d9a29814fa5553c2bd07f266b4a82c35458a724c8e6186c55"
	},
	{
		"id": "e0cdcdfeeec0",
		"ts": "2026-09-03T02:45:54.344Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1943043.51,
		"hash": "e0cdcdfeeec02dccb94144de23cf64e45f560212bf882606bf9c3b0f3b93ccf4"
	},
	{
		"id": "04daf224f1b3",
		"ts": "2026-09-03T02:45:54.589Z",
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
		"liquidityUsd": 409214.14,
		"hash": "04daf224f1b386866b90d46acfaaf270177d2787c81f852cfea4da15479f361a"
	},
	{
		"id": "b1b206f9ede2",
		"ts": "2026-09-03T02:45:54.830Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 280055.73,
		"hash": "b1b206f9ede22459b6579e5ded34ccac52383c69771030ecb97d475507839f3a"
	},
	{
		"id": "eab3c68a1ce6",
		"ts": "2026-09-03T02:45:55.073Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1296435.52,
		"hash": "eab3c68a1ce602e6f0f5e65b742472c87f9dfe0c5ad76201f1c991f459129037"
	},
	{
		"id": "7dcdf2cafc12",
		"ts": "2026-09-03T02:45:55.314Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 698745.52,
		"hash": "7dcdf2cafc1242a7bfa4499d97b068295698a955b4a98de1b9c8a689e40de236"
	},
	{
		"id": "e540590ef12f",
		"ts": "2026-09-03T02:45:55.553Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 78965.99,
		"hash": "e540590ef12fe47cc3ea891ba1057cb5e9c993750416ace9cf98797f13b29b79"
	},
	{
		"id": "198911004956",
		"ts": "2026-09-03T02:45:55.796Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1015131.98,
		"hash": "198911004956388a6e2ab5867f31e659c1860541da8dc611b028fc3400771ba2"
	},
	{
		"id": "bec3df6ca389",
		"ts": "2026-09-03T02:45:56.044Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 656981.97,
		"hash": "bec3df6ca389b4979177c922625f21069984647c4c7658248b92948c2c7a1da9"
	},
	{
		"id": "bdc66192caa9",
		"ts": "2026-09-02T23:48:52.205Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115012491.86,
		"hash": "bdc66192caa957db1f5cc10de5334b8b59f03d2c8c4c2fa16f8c6174c4eab57f"
	},
	{
		"id": "e9d48ee8b68c",
		"ts": "2026-09-02T23:48:52.493Z",
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
		"liquidityUsd": 18930159.83,
		"hash": "e9d48ee8b68c28fa81c10260a1ab1cf1c915abf600b986a24c163ced8cd01917"
	},
	{
		"id": "eea1ac17ff08",
		"ts": "2026-09-02T23:48:52.984Z",
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
		"liquidityUsd": 930259.08,
		"hash": "eea1ac17ff08a1b8b7020982fab941db501bb06d7a5e3e0dd497c5e587969e59"
	},
	{
		"id": "40efa5d1f13b",
		"ts": "2026-09-02T23:48:53.239Z",
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
		"liquidityUsd": 28154403.86,
		"hash": "40efa5d1f13b9f75745dd77ebda46c5da626eb2e55ce10e742fd89b9f69921f3"
	},
	{
		"id": "0e1e23b683a6",
		"ts": "2026-09-02T23:48:53.489Z",
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
		"liquidityUsd": 4052986.74,
		"hash": "0e1e23b683a6d626a94a05b12138f515acff13689208685bfeaaddcc6cd7b229"
	},
	{
		"id": "fbc32c930b6b",
		"ts": "2026-09-02T23:48:53.763Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1124516.25,
		"hash": "fbc32c930b6baa25dd658250b761c9eb47b8393e4a313a1f3398003b115f11d2"
	},
	{
		"id": "d1f201a64691",
		"ts": "2026-09-02T23:48:54.090Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 81,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.62,
		"flags": [
			"new_pair_under_24h",
			"owner_not_renounced"
		],
		"liquidityUsd": 3213474.45,
		"hash": "d1f201a64691775739c27ee16b38e34127004fed21aabcf297d371bddf3b76d5"
	},
	{
		"id": "7559e8107aa2",
		"ts": "2026-09-02T23:48:54.383Z",
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
		"liquidityUsd": 3649728.22,
		"hash": "7559e8107aa24888e1cb0869e03386821205dd4eea25bd39359ad785accb7aac"
	},
	{
		"id": "6f66be4e1aed",
		"ts": "2026-09-02T23:48:54.653Z",
		"symbol": "umia",
		"token": "0x56ab53b77F07DA3af732150E8aeC4783eB5BbA7D",
		"score": 43,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.14,
		"flags": [
			"new_pair_under_24h",
			"owner_can_change_balance",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 3213474.45,
		"hash": "6f66be4e1aed5a0cd2e74e2d5574a6eb0ad311588c1c5c31539acafd12fdebbd"
	},
	{
		"id": "cfe527c48f8b",
		"ts": "2026-09-02T23:48:55.118Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 781593.1,
		"hash": "cfe527c48f8bf30f479f39eb658f35a028e0b82fb13af2a7a00b37b704b25b72"
	},
	{
		"id": "65975371353e",
		"ts": "2026-09-02T23:48:55.376Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 960146.61,
		"hash": "65975371353e8d960b06d8e6231d034f0df1e449cde598258581771725db7b52"
	},
	{
		"id": "b39d02ee19ff",
		"ts": "2026-09-02T23:48:55.636Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3113686.38,
		"hash": "b39d02ee19ff87acda37f5db677fd66ff9a1f32d21d07f83eebe8fd54d6bf057"
	},
	{
		"id": "8a6c1df521e9",
		"ts": "2026-09-02T23:48:55.874Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 67102.92,
		"hash": "8a6c1df521e905bdc7b7497e2789ed5c006cf30c6567071bb3f0167b24895397"
	},
	{
		"id": "e0bbc340c91e",
		"ts": "2026-09-02T23:48:56.119Z",
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
		"liquidityUsd": 388720.54,
		"hash": "e0bbc340c91eb2ef34ee22011bb333261e07b14cd6af34b9de1a599e41976115"
	},
	{
		"id": "5e622bf0fc27",
		"ts": "2026-09-02T23:48:56.371Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1484541.69,
		"hash": "5e622bf0fc271800f022407b46cf57013d00faeb3616e43f024982d3abf6f893"
	},
	{
		"id": "c3f418950831",
		"ts": "2026-09-02T23:48:56.625Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 281981.63,
		"hash": "c3f4189508319a11f041e6578be0ea30fcfefa4a8794d0a205bc6cb2c410e059"
	},
	{
		"id": "93860a5793d1",
		"ts": "2026-09-02T23:48:56.869Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 669421.69,
		"hash": "93860a5793d1f95d3657104ed77cdf6d153f61c198af22284d5b684522e12821"
	},
	{
		"id": "6c132086c8b2",
		"ts": "2026-09-02T23:48:57.120Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1237182.56,
		"hash": "6c132086c8b2c02e72b0755be9a1d545b8407a37e05482b6bb1554a89b80a31c"
	},
	{
		"id": "baf1caeaa5a0",
		"ts": "2026-09-02T23:48:57.357Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1141365.79,
		"hash": "baf1caeaa5a0fe2bdef58f92795babe47f0e553fac3badbd9663d956ff41694b"
	},
	{
		"id": "857d77522835",
		"ts": "2026-09-02T21:33:04.250Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115764422.45,
		"hash": "857d77522835651dbaa89510f971e960ab36db4b59eea800da580365a8f07cd8"
	},
	{
		"id": "f2898dadded5",
		"ts": "2026-09-02T21:33:04.491Z",
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
		"liquidityUsd": 17061472.36,
		"hash": "f2898dadded5a01df8f3057eaa075363f330ae1c7dba3dcda83b1d4b80505560"
	},
	{
		"id": "82a8a0b65935",
		"ts": "2026-09-02T21:33:04.998Z",
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
		"liquidityUsd": 933237.6,
		"hash": "82a8a0b659359f73d3ad90da16448b74f598e433bd950bbed513db3fbcdc18b0"
	},
	{
		"id": "c18856067cda",
		"ts": "2026-09-02T21:33:05.249Z",
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
		"liquidityUsd": 28118830.36,
		"hash": "c18856067cdaef080b5992a5860f3fd4428574442b6b6df87558d284d490d85e"
	},
	{
		"id": "39cac8868daa",
		"ts": "2026-09-02T21:33:05.550Z",
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
		"liquidityUsd": 4067272.7,
		"hash": "39cac8868daa50fdf5c5963faacb3e7f37c1a88a6fc777cf58ac2deaea5ab0fd"
	},
	{
		"id": "d6744ad8fe6d",
		"ts": "2026-09-02T21:33:05.784Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1131317.7,
		"hash": "d6744ad8fe6d77cca52b02f1f61e16cc9ea30fdce09055612aa619ad02102a46"
	},
	{
		"id": "246c102683b8",
		"ts": "2026-09-02T21:33:06.084Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 81,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.62,
		"flags": [
			"new_pair_under_24h",
			"owner_not_renounced"
		],
		"liquidityUsd": 3331485.25,
		"hash": "246c102683b824c48e5cb88e2d50d4163cea04b947d74852240cc98c572b3733"
	},
	{
		"id": "c0f375632f67",
		"ts": "2026-09-02T21:33:06.344Z",
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
		"liquidityUsd": 3661663.79,
		"hash": "c0f375632f679e6fbc56dce43a6eb531392ea1ce4a58e6988a594c750999fea6"
	},
	{
		"id": "f69591e01710",
		"ts": "2026-09-02T21:33:06.589Z",
		"symbol": "umia",
		"token": "0x56ab53b77F07DA3af732150E8aeC4783eB5BbA7D",
		"score": 43,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.14,
		"flags": [
			"new_pair_under_24h",
			"owner_can_change_balance",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 3331485.25,
		"hash": "f69591e0171099cb572e645c00e2d106977fcde11f5230e9fdc0968bdd470a1b"
	},
	{
		"id": "573ee3f117a1",
		"ts": "2026-09-02T21:33:06.852Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 806587.37,
		"hash": "573ee3f117a1a82a772b440c0d6dbc24a22bb6b8aa68e897c0c559b7a4d7f443"
	},
	{
		"id": "b91e4acf0fc7",
		"ts": "2026-09-02T21:33:07.073Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3147810,
		"hash": "b91e4acf0fc704a7454442850e27aec7781f31a7c3c5cc3328f5f811997b15df"
	},
	{
		"id": "0f2fb34a7c4a",
		"ts": "2026-09-02T21:33:07.292Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 969148.43,
		"hash": "0f2fb34a7c4a549522a796a0b57dc24b4a9bc34aa0661e303d32e9453883ec51"
	},
	{
		"id": "740a33af7481",
		"ts": "2026-09-02T21:33:07.512Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 61560.31,
		"hash": "740a33af74818cac27664d73af74a17bad501bd75863cc30c36e5d05b5e4d01f"
	},
	{
		"id": "9306baef24ea",
		"ts": "2026-09-02T21:33:07.740Z",
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
		"liquidityUsd": 414684.14,
		"hash": "9306baef24ea41f157990311eb9fd51f9b9d5565d7f4e4502ba008beb6a39a37"
	},
	{
		"id": "7c32dfbbbce1",
		"ts": "2026-09-02T21:33:07.959Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 282095.27,
		"hash": "7c32dfbbbce1ed1a59325e5ff5b467f1fe25328d086c3f8a85d296343a56a82e"
	},
	{
		"id": "c03b9e48425f",
		"ts": "2026-09-02T21:33:08.195Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1627450.16,
		"hash": "c03b9e48425fc2337778555d91f61d1e61939ee0415ec82141089a697c48887c"
	},
	{
		"id": "903e95670577",
		"ts": "2026-09-02T21:33:08.415Z",
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
		"liquidityUsd": 610258.12,
		"hash": "903e956705772f840cc865af7cc0eff0cbc1755950847b8ae82c6713eee8756c"
	},
	{
		"id": "ac4182004ff3",
		"ts": "2026-09-02T21:33:08.677Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 693873.5,
		"hash": "ac4182004ff325022eab5e7a919b46b42e78e7b5d785ef035508fb6e3be7b842"
	},
	{
		"id": "00ba2bd4418e",
		"ts": "2026-09-02T21:33:08.902Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1224514.08,
		"hash": "00ba2bd4418e1b87bae4298fa35fec2c203c22075f1a2965fc768ec7b334199f"
	},
	{
		"id": "b96de50e8a98",
		"ts": "2026-09-02T21:33:09.122Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1140912.34,
		"hash": "b96de50e8a983501b440a09d232cf5d9b7b5d2b6b9fdb73a8bb5a8d33580645f"
	},
	{
		"id": "6a14e52e1d79",
		"ts": "2026-09-02T18:25:05.766Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115696709.76,
		"hash": "6a14e52e1d798aec7c1d7e432242c34791b826f69942193bc4c7febacfdeb302"
	},
	{
		"id": "61210cf6c7ec",
		"ts": "2026-09-02T18:25:06.334Z",
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
		"liquidityUsd": 18505498.61,
		"hash": "61210cf6c7ec4ecac4d50e165d7eaa6f25a5502bd577401b6763301721191efb"
	},
	{
		"id": "7bb6eb9bfea1",
		"ts": "2026-09-02T18:25:06.610Z",
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
		"liquidityUsd": 934876.1,
		"hash": "7bb6eb9bfea11aa24d66bf456a9d42b2c5c5a55581159a139a4248293e7fe54e"
	},
	{
		"id": "59036265fcf1",
		"ts": "2026-09-02T18:25:06.881Z",
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
		"liquidityUsd": 28088149.99,
		"hash": "59036265fcf1d32f845f9fc4e415bd22c71f1b3ba21266c87477b6b4fb47bde4"
	},
	{
		"id": "e791ad37bfb3",
		"ts": "2026-09-02T18:25:07.163Z",
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
		"liquidityUsd": 4066566.5,
		"hash": "e791ad37bfb3e289509fda2ed7947bca9342c8a0cc9729f8829a9b9003c7a625"
	},
	{
		"id": "c1f799eb2526",
		"ts": "2026-09-02T18:25:07.434Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1132263.42,
		"hash": "c1f799eb2526b669ea438110267577f672f433f64f5f4b08e6eaf3bc25f5eacf"
	},
	{
		"id": "06ec4ca42361",
		"ts": "2026-09-02T18:25:07.712Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 81,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.62,
		"flags": [
			"new_pair_under_24h",
			"owner_not_renounced"
		],
		"liquidityUsd": 3426018.31,
		"hash": "06ec4ca42361d92af066be63c19fca120cf019b1abc903a52fff18c5f3033e5a"
	},
	{
		"id": "fdd6805b9610",
		"ts": "2026-09-02T18:25:07.975Z",
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
		"liquidityUsd": 3665502.14,
		"hash": "fdd6805b9610feb8030585591e6fbb27683c80be398324b4f6400ca125f5eba1"
	},
	{
		"id": "d7ab948f4ca5",
		"ts": "2026-09-02T18:25:08.241Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 791521.89,
		"hash": "d7ab948f4ca5d9a9226ee878cafed2df09f117e3ad557ec5b2a00ce77f58dae4"
	},
	{
		"id": "85d5ee8feb97",
		"ts": "2026-09-02T18:25:08.528Z",
		"symbol": "umia",
		"token": "0x56ab53b77F07DA3af732150E8aeC4783eB5BbA7D",
		"score": 43,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.14,
		"flags": [
			"new_pair_under_24h",
			"owner_can_change_balance",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 3426018.31,
		"hash": "85d5ee8feb9750ec2bc55cad5fa9c10581cb8d97f2d0b27bdb614c627ada760f"
	},
	{
		"id": "b6ea1b7e01a2",
		"ts": "2026-09-02T18:25:08.771Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2980347.43,
		"hash": "b6ea1b7e01a2f8f67937657be4bf05beeabbb46244fd8b73328cf78f9ea4287f"
	},
	{
		"id": "10d2f36acf39",
		"ts": "2026-09-02T18:25:09.017Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 60955.75,
		"hash": "10d2f36acf399d98afedb0aeb4b49bdb725ae9f50e8b62169645be71837966d5"
	},
	{
		"id": "0eedec0ef389",
		"ts": "2026-09-02T18:25:09.262Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 278243.74,
		"hash": "0eedec0ef389e18025d6f5181f76a51e3cac6fa9982b93805519c2a82cf8d64d"
	},
	{
		"id": "aa6ff0216cf9",
		"ts": "2026-09-02T18:25:09.512Z",
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
		"liquidityUsd": 414141.94,
		"hash": "aa6ff0216cf9e5770ba4187b34906c900377148a48338a211cb128a28253dfdb"
	},
	{
		"id": "a8db84efef8c",
		"ts": "2026-09-02T18:25:09.754Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4021343.72,
		"hash": "a8db84efef8c56ec2f22b2f236164dc2daf4a1f0e2678eb0de9d535c6adc3273"
	},
	{
		"id": "ba43b2aa53c6",
		"ts": "2026-09-02T18:25:09.993Z",
		"symbol": "RIPE",
		"token": "0x2A0a59d6B975828e781EcaC125dBA40d7ee5dDC0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 76022.72,
		"hash": "ba43b2aa53c69a9f4463e932e6cb9329fd4784ca91fdfa1f4f1c29d1211dd1b8"
	},
	{
		"id": "7da9ae2f037f",
		"ts": "2026-09-02T18:25:10.237Z",
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
		"liquidityUsd": 895222.4,
		"hash": "7da9ae2f037f7926315bcd6a8388ba2ce6d5cb38926870c79842f2efc0d2f1ae"
	},
	{
		"id": "b3446d519a87",
		"ts": "2026-09-02T18:25:10.480Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1237537.52,
		"hash": "b3446d519a87795715a936dbdf45a5cdd229be04a77f5937a8258c51a6130e16"
	},
	{
		"id": "ec7689b10849",
		"ts": "2026-09-02T18:25:10.727Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1140837.47,
		"hash": "ec7689b10849635a91a36317c66dec46214f48b667276d1094351675ddb11e15"
	},
	{
		"id": "ebc5d1bf4019",
		"ts": "2026-09-02T18:25:10.975Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 978878.22,
		"hash": "ebc5d1bf4019992f998ddae61cf294faf4f52406a26b5475018ca74220370378"
	},
	{
		"id": "e77a261173a3",
		"ts": "2026-09-02T14:55:57.501Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115110394.87,
		"hash": "e77a261173a33cb6e67dbb7f907f42c46a9d0597f3444fdd4f8eb0a2dc411dc1"
	},
	{
		"id": "bc634627202c",
		"ts": "2026-09-02T14:55:58.004Z",
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
		"liquidityUsd": 18988265.75,
		"hash": "bc634627202c3fdd9b253250d31f1698945f869e748a3011a181d5960537a997"
	},
	{
		"id": "0674dfdf8c9c",
		"ts": "2026-09-02T14:55:58.484Z",
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
		"liquidityUsd": 936683.76,
		"hash": "0674dfdf8c9c57125cb75eaaf7755c0942169a1c0baa2c891325dced2e7f9ca4"
	},
	{
		"id": "4697af86497b",
		"ts": "2026-09-02T14:55:58.801Z",
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
		"liquidityUsd": 28133716.48,
		"hash": "4697af86497ba6ce59149a6698f70b613843b00d129355f9270e5bdf79038b6e"
	},
	{
		"id": "7c35b8d7b50e",
		"ts": "2026-09-02T14:55:59.107Z",
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
		"liquidityUsd": 4088220.29,
		"hash": "7c35b8d7b50e6facb8318f2693dab9d8fc7f79c406b212f52b47853d933be7bf"
	},
	{
		"id": "d43b8aab7a9c",
		"ts": "2026-09-02T14:55:59.414Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1135633.15,
		"hash": "d43b8aab7a9c3dd34f9d71b04e9054d889540a41061fe5a7029ea9bc0124829d"
	},
	{
		"id": "1f3f2b0a951f",
		"ts": "2026-09-02T14:55:59.714Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 81,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.62,
		"flags": [
			"new_pair_under_24h",
			"owner_not_renounced"
		],
		"liquidityUsd": 3152565.75,
		"hash": "1f3f2b0a951fdd2556f0cec991d43af47f73654f62b96670bd7fd2bb59b41840"
	},
	{
		"id": "68e72bb3594e",
		"ts": "2026-09-02T14:56:00.050Z",
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
		"liquidityUsd": 1156546.01,
		"hash": "68e72bb3594ed0dd67ccaf095c49bd6d0b799657c8ad27724cd463bb7e634a0e"
	},
	{
		"id": "281cb689587e",
		"ts": "2026-09-02T14:56:00.349Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 769618.2,
		"hash": "281cb689587e4b83cad0995ae49f65fb6fbabe7a7db8ed3a3794216b2ea6d236"
	},
	{
		"id": "5a74ada548b8",
		"ts": "2026-09-02T14:56:00.679Z",
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
		"liquidityUsd": 1138231.33,
		"hash": "5a74ada548b8dd82a1abef21290f11e9a78f9bddc2b2faac40672c5267f4207f"
	},
	{
		"id": "65682c1b3ee5",
		"ts": "2026-09-02T14:56:00.984Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4003947.23,
		"hash": "65682c1b3ee53d1f7678b05f2c8ec2a67f4ea590729406095868c759fccd1c53"
	},
	{
		"id": "2b0b5727179c",
		"ts": "2026-09-02T14:56:01.840Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1280358.09,
		"hash": "2b0b5727179cb5566630edf85b3cbdbfe3fca819deb88e6da1131b2fb1fcecfb"
	},
	{
		"id": "64add1efa733",
		"ts": "2026-09-02T14:56:02.225Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3097200.03,
		"hash": "64add1efa733d165c92568e1cecae35728b7e65dc150c4a552f530ba9c2ba1dc"
	},
	{
		"id": "098d2c577d8a",
		"ts": "2026-09-02T14:56:02.545Z",
		"symbol": "umia",
		"token": "0x56ab53b77F07DA3af732150E8aeC4783eB5BbA7D",
		"score": 43,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.14,
		"flags": [
			"new_pair_under_24h",
			"owner_can_change_balance",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 3152565.75,
		"hash": "098d2c577d8a33998669361a7fa9561ec67c1eb3a7e0c583ad8c70238e437bab"
	},
	{
		"id": "565257e6cc0d",
		"ts": "2026-09-02T14:56:02.840Z",
		"symbol": "OPAL",
		"token": "0x119B63B1605Be3A8ff4543c7F76f7f1f79eECd1f",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"not_open_source"
		],
		"liquidityUsd": 2801208.6,
		"hash": "565257e6cc0d12bfc6720fdcba6346ac02058142a8edfdec2e7e7a271040fb4a"
	},
	{
		"id": "88ec7fc3a8c1",
		"ts": "2026-09-02T14:56:03.137Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 276703.73,
		"hash": "88ec7fc3a8c13ab9284a4777bfeb3d496f7413f8677d658a89bf085771352562"
	},
	{
		"id": "7ba25ce30c65",
		"ts": "2026-09-02T14:56:03.436Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 432228.95,
		"hash": "7ba25ce30c65e4f11d27fba6770fcff58f65c4f5628c31e326815af89f91693e"
	},
	{
		"id": "a1464cb25a59",
		"ts": "2026-09-02T14:56:03.751Z",
		"symbol": "RIPE",
		"token": "0x2A0a59d6B975828e781EcaC125dBA40d7ee5dDC0",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 78795.53,
		"hash": "a1464cb25a59e8f3f0ddf837412cd3ca2ce36f600aa58f7b2c9041f07628302c"
	},
	{
		"id": "ab773a9d54ce",
		"ts": "2026-09-02T14:56:04.033Z",
		"symbol": "VIBES",
		"token": "0xefFC8815487084a97edfdfF968b56Ea123421Acb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 65958.03,
		"hash": "ab773a9d54ce95545d80e9d23d35b57c30481ff0bbb3ffbdcc14b1d9bcfb5d6e"
	},
	{
		"id": "c31ba071cc6c",
		"ts": "2026-09-02T10:32:11.417Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114205676.65,
		"hash": "c31ba071cc6cf81f3aa3c76c927d0c8ec121f1cd2d5248f96a042ee913435828"
	},
	{
		"id": "eff0fffb1953",
		"ts": "2026-09-02T10:32:11.876Z",
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
		"liquidityUsd": 13332946.85,
		"hash": "eff0fffb19535f742d8c70a28627fe5d1a080dd0d1e82c716133bcf029ab0ce2"
	},
	{
		"id": "c98e25ad3de5",
		"ts": "2026-09-02T10:32:12.138Z",
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
		"liquidityUsd": 919394.64,
		"hash": "c98e25ad3de58656a7ca60b9b57a690137728b8c180eeed98f05800f6df01088"
	},
	{
		"id": "c18230c831b5",
		"ts": "2026-09-02T10:32:12.395Z",
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
		"liquidityUsd": 28152274.61,
		"hash": "c18230c831b55a90de6822483f02472858b564ff2cf165f9ac2643207b928993"
	},
	{
		"id": "29264aad037f",
		"ts": "2026-09-02T10:32:12.645Z",
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
		"liquidityUsd": 4034872.2,
		"hash": "29264aad037f42f1495671b8d55b55fe3a094c405b91b8137a0ddbb41db0a3df"
	},
	{
		"id": "cd307c4b23ae",
		"ts": "2026-09-02T10:32:12.885Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1128051.23,
		"hash": "cd307c4b23aec7797a15968f625bfe773588e5b6ffb5288190fd70d5401466b5"
	},
	{
		"id": "e3c91484ff68",
		"ts": "2026-09-02T10:32:13.143Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1667407.55,
		"hash": "e3c91484ff68605ebbbddf0e8c8961541b479731a2f40abd265e9dcd00ef7252"
	},
	{
		"id": "61d92388dd1b",
		"ts": "2026-09-02T10:32:13.385Z",
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
		"liquidityUsd": 1128982.88,
		"hash": "61d92388dd1b9e1eb3bcf65f0a1613db8d66f97815ac46f777d695811848d08d"
	},
	{
		"id": "200186131032",
		"ts": "2026-09-02T10:32:13.672Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 775185.01,
		"hash": "2001861310329addddbf3497a87cdbea43eb3f6f822110a9492aeaef4adf301d"
	},
	{
		"id": "b447aae7d663",
		"ts": "2026-09-02T10:32:13.927Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1284067.45,
		"hash": "b447aae7d6630a3624630d5b9a733bf5730f711eacc1b5b49b2e126a21fb2556"
	},
	{
		"id": "1917767106f2",
		"ts": "2026-09-02T10:32:14.154Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3997049.77,
		"hash": "1917767106f2d6e176b68210daad6c461a7cdcbf0488d657020c7414514fbc32"
	},
	{
		"id": "e3149d21d1fe",
		"ts": "2026-09-02T10:32:14.381Z",
		"symbol": "VIBES",
		"token": "0xefFC8815487084a97edfdfF968b56Ea123421Acb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 69209.03,
		"hash": "e3149d21d1fedc253fa88fe5a6fc80e6475fbfb6350b5f4cc9699c848ba8037c"
	},
	{
		"id": "d24448b948d9",
		"ts": "2026-09-02T10:32:14.608Z",
		"symbol": "RIPE",
		"token": "0x2A0a59d6B975828e781EcaC125dBA40d7ee5dDC0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 102037.34,
		"hash": "d24448b948d96f55f25c7939e3822ea59d773b1c3bf71f4a7e52d80a82081140"
	},
	{
		"id": "6f983c0daad1",
		"ts": "2026-09-02T10:32:14.834Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1127743.76,
		"hash": "6f983c0daad1a719717ffa9d921e5357adca822ef76beb6934c47fa176addff9"
	},
	{
		"id": "baae11c55de5",
		"ts": "2026-09-02T10:32:15.187Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3106605.1,
		"hash": "baae11c55de5ce5393d27ab1f956c8a866d186daa886b4a2542ff038094b757b"
	},
	{
		"id": "522b26d0cc55",
		"ts": "2026-09-02T10:32:15.414Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 273743.95,
		"hash": "522b26d0cc55e29cec7d56f75d8cb71056cf14bf95da3a4d1ca84cf7cab4789c"
	},
	{
		"id": "0889a28ff04d",
		"ts": "2026-09-02T10:32:15.641Z",
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
		"liquidityUsd": 465362.19,
		"hash": "0889a28ff04d3bd16718616be5f0735fb2ab12dc88cc81f5b235fa5cb22c0f71"
	},
	{
		"id": "83f06502d580",
		"ts": "2026-09-02T10:32:15.867Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11990198.52,
		"hash": "83f06502d580533890d6760b393424afdebc57b7897896136a1b50676a4220fc"
	},
	{
		"id": "9ea667f97efb",
		"ts": "2026-09-02T05:24:13.936Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115254408.32,
		"hash": "9ea667f97efb7eef5be9b0cfc6cf32a5603c8af1fdc29ed1cff103e792d6675c"
	},
	{
		"id": "0a6a49e6b497",
		"ts": "2026-09-02T05:24:14.433Z",
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
		"liquidityUsd": 19603062.84,
		"hash": "0a6a49e6b497a342049388c5185e003acd9887842311b53f01721eebf7e2a861"
	},
	{
		"id": "8ac406b97de3",
		"ts": "2026-09-02T05:24:14.912Z",
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
		"liquidityUsd": 935289.09,
		"hash": "8ac406b97de3c17ddfbd7aacdf734d30a4129f2494d4e8293b6054508d4610c1"
	},
	{
		"id": "ae13c5c0c29e",
		"ts": "2026-09-02T05:24:15.154Z",
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
		"liquidityUsd": 28541263.9,
		"hash": "ae13c5c0c29ea5878ab68302e61088300278ef213df412d6d90846abb0d9650e"
	},
	{
		"id": "e1545ac35adb",
		"ts": "2026-09-02T05:24:15.406Z",
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
		"liquidityUsd": 4120059.76,
		"hash": "e1545ac35adb0e5877e74974225073a3aea4fdb4306271d6533d924a16ce5b69"
	},
	{
		"id": "6f4f01148062",
		"ts": "2026-09-02T05:24:15.650Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1151964.24,
		"hash": "6f4f011480629ed630761e9621743d1a901aae20f917d17a2abc4a7ecd8ea51e"
	},
	{
		"id": "7dd91194d881",
		"ts": "2026-09-02T05:24:15.920Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28541263.9,
		"hash": "7dd91194d881857372eabf6d35a840d249214dfb689a0be9e478b0a9cce1a254"
	},
	{
		"id": "e0f8c191a3df",
		"ts": "2026-09-02T05:24:16.184Z",
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
		"liquidityUsd": 1632475.38,
		"hash": "e0f8c191a3dfe59c893ce52f1c35ae51554a9205518a5026566163f997c378cc"
	}
]
