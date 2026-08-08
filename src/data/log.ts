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
	"updatedAt": "2026-08-08T12:39:05.575Z",
	"tokensScored": 8152,
	"verdictsIssued": 8152,
	"safe": 7117,
	"risky": 619,
	"likelyRug": 416,
	"ticks": 496
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "8ced17eb7009",
		"ts": "2026-08-08T12:39:01.980Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115601179.67,
		"hash": "8ced17eb7009f44c1b87f4fba0054b145563913dc73836de46ef86c1dfaae39c"
	},
	{
		"id": "d01e76a32ca2",
		"ts": "2026-08-08T12:39:02.235Z",
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
		"liquidityUsd": 16939826.14,
		"hash": "d01e76a32ca20a0e3332602a83597530c7bbd9af8b5612ffbf15db262bc822f7"
	},
	{
		"id": "4a24ff3267ae",
		"ts": "2026-08-08T12:39:02.473Z",
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
		"liquidityUsd": 1049933.91,
		"hash": "4a24ff3267ae57aff7efae41cfd90f654f317b6d2d77678676fdce559e204192"
	},
	{
		"id": "a3d1e9a10c25",
		"ts": "2026-08-08T12:39:02.701Z",
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
		"liquidityUsd": 27367971.34,
		"hash": "a3d1e9a10c2590f5867b03c2ba3075ef4f8c66c6f9a89738ba8ebae612d2ec18"
	},
	{
		"id": "7a7bc18d7bb3",
		"ts": "2026-08-08T12:39:02.928Z",
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
		"liquidityUsd": 4432679.06,
		"hash": "7a7bc18d7bb3c409b71c4fd021bdf9f953379ac0c0688955b4538d4d564c0f79"
	},
	{
		"id": "7ca102b2df91",
		"ts": "2026-08-08T12:39:03.154Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 934823.41,
		"hash": "7ca102b2df912f08c16d872dd79226c7bf98f14c56c668f877f71a488e6e4bc2"
	},
	{
		"id": "f21cb4e2cadd",
		"ts": "2026-08-08T12:39:03.418Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27367971.34,
		"hash": "f21cb4e2cadd7b6c74da14544cc706ca57708a05e6f74b3ad4948948667550a4"
	},
	{
		"id": "0f9ee557faac",
		"ts": "2026-08-08T12:39:03.644Z",
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
		"liquidityUsd": 4878459.18,
		"hash": "0f9ee557faac86b8396b278f09b7034202c9e871e0509a3cb19ea7d854c001dd"
	},
	{
		"id": "5902b2b0e048",
		"ts": "2026-08-08T12:39:03.868Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 999500.04,
		"hash": "5902b2b0e048f7c1775d37a5738523220ec4278aefb6ae3d4c0dbdc9acd3fb38"
	},
	{
		"id": "7b25e3ffa2df",
		"ts": "2026-08-08T12:39:04.093Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 508253.25,
		"hash": "7b25e3ffa2dfd4a581347fce3249f535e92954319ec7fee206f7cfde704c7492"
	},
	{
		"id": "2ed63be810f6",
		"ts": "2026-08-08T12:39:04.308Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 348034.58,
		"hash": "2ed63be810f610b6bdcfd70a78e0d659848cf2b1727a466a66df8cf8a7c4172c"
	},
	{
		"id": "f840f8e4de77",
		"ts": "2026-08-08T12:39:04.522Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4058994.74,
		"hash": "f840f8e4de77dbc7561d87e06022d5086a929c49554e34d4eba74315e463fbfc"
	},
	{
		"id": "ab30689b9286",
		"ts": "2026-08-08T12:39:04.734Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2132356.57,
		"hash": "ab30689b9286a93f9c258c5870947c0f9f75d65b9d0cab3164bec2f7c4df99de"
	},
	{
		"id": "c90a8b6828ea",
		"ts": "2026-08-08T12:39:04.943Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1800759.53,
		"hash": "c90a8b6828ea2879a4963c01d46eb2ee365f2825a45e9955dbbf4bc87eeb963a"
	},
	{
		"id": "c146279e68ec",
		"ts": "2026-08-08T12:39:05.155Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9275547.52,
		"hash": "c146279e68ec99f01d8be47ea074dc045388416aaeecb371be63aa9ed6e50d28"
	},
	{
		"id": "02b752c2eee0",
		"ts": "2026-08-08T12:39:05.364Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 691334.47,
		"hash": "02b752c2eee04f94ba7ae9e851981b67c9e931953b73a068f5d2fad2df0f9cac"
	},
	{
		"id": "26e8197c61dd",
		"ts": "2026-08-08T12:39:05.574Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 544187.5,
		"hash": "26e8197c61ddf33207d78b40a4f21789bc2d7021a1555f8d9cf0f0c5f1091a3e"
	},
	{
		"id": "9bba2ff1e35f",
		"ts": "2026-08-08T11:24:03.763Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115537840.22,
		"hash": "9bba2ff1e35f20763448757258efb4abde61b24908ee8834ad9790c08e39238e"
	},
	{
		"id": "45013377a886",
		"ts": "2026-08-08T11:24:03.974Z",
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
		"liquidityUsd": 16115824.69,
		"hash": "45013377a886bb6bb6b6785b23dc66f8a97541a98e31f9bab36cfb15dd5dd322"
	},
	{
		"id": "74c519e4d129",
		"ts": "2026-08-08T11:24:04.168Z",
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
		"liquidityUsd": 1050366.49,
		"hash": "74c519e4d129a14d9ef511db8fd5f1cac8a90968595a7546cd41198bc92afe37"
	},
	{
		"id": "7e1c3ccc75f0",
		"ts": "2026-08-08T11:24:04.362Z",
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
		"liquidityUsd": 27365103.2,
		"hash": "7e1c3ccc75f06e9e4ba4eaf7311df69fdecd8814b1d7f87f00316cc6c5e48e78"
	},
	{
		"id": "0a1befca3829",
		"ts": "2026-08-08T11:24:04.693Z",
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
		"liquidityUsd": 4432679.06,
		"hash": "0a1befca38296bac41995269ad3493a31116488ceed9d67be432b2d608c8de81"
	},
	{
		"id": "41cee9f56489",
		"ts": "2026-08-08T11:24:04.909Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 927249.71,
		"hash": "41cee9f5648968c92c87be3564b57645ed80651f58d6823458a422b1adc0abc8"
	},
	{
		"id": "c27f1047da20",
		"ts": "2026-08-08T11:24:05.127Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27365103.47,
		"hash": "c27f1047da20be93f02e15ed01117a616ba93fd6d87fa8e8c2798209028a5f0a"
	},
	{
		"id": "a3da667ec387",
		"ts": "2026-08-08T11:24:05.321Z",
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
		"liquidityUsd": 4878559.28,
		"hash": "a3da667ec387e0e09d2ecfb43d19468f2f66eb4881bd6d78f2d6dddabed1ef59"
	},
	{
		"id": "2a8213ac8f5d",
		"ts": "2026-08-08T11:24:05.516Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 984224.97,
		"hash": "2a8213ac8f5d9063573f941864fe48c9f452e22395397e38ebf2fd7093651d28"
	},
	{
		"id": "6e4455d48494",
		"ts": "2026-08-08T11:24:05.862Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 527622.06,
		"hash": "6e4455d4849498f0e496bcd36ae52bdd94353bb6f445819fc0ec2aec837dc5cf"
	},
	{
		"id": "7e9a5570e187",
		"ts": "2026-08-08T11:24:06.054Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 347551.46,
		"hash": "7e9a5570e1872e8a15c2fceed1f0081c3e4d97dbf4b93da983b2cb1f62d41e5d"
	},
	{
		"id": "e1f955d1b04b",
		"ts": "2026-08-08T11:24:06.334Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4067200.91,
		"hash": "e1f955d1b04b2ec92c0701e58c8754610000930e973c5de647e233152fa9d064"
	},
	{
		"id": "cfafb14bbd91",
		"ts": "2026-08-08T11:24:06.526Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2143338.92,
		"hash": "cfafb14bbd9130dc9c1d6e7e9451232fb8ff9d7a3ca5feaa4f93f32e169c70a1"
	},
	{
		"id": "dfc62e31b6c5",
		"ts": "2026-08-08T11:24:06.847Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1801275.45,
		"hash": "dfc62e31b6c5e9537a7979bac1d07d508cf3b88f6324bd2d2f424a515b2768e5"
	},
	{
		"id": "c5a12090c199",
		"ts": "2026-08-08T11:24:07.040Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9304720.35,
		"hash": "c5a12090c199ad75be40a079238454280062f3cb06bc354bf200b2ae1e6c0297"
	},
	{
		"id": "f1cd449b0ca1",
		"ts": "2026-08-08T11:24:07.258Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 677069.44,
		"hash": "f1cd449b0ca1ce439f245da2c01207cbeb79a6c56a6474f7a601f52cab8b8303"
	},
	{
		"id": "25cc68b4b918",
		"ts": "2026-08-08T11:24:07.451Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 546663.52,
		"hash": "25cc68b4b9180f65cf0c7ec050df96445aad6e9eb9a937e2baf0ac760795d637"
	},
	{
		"id": "ebc89b22af82",
		"ts": "2026-08-08T10:27:26.854Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115535064.5,
		"hash": "ebc89b22af82ab96e11ef7cd70b71b91355e28e994afa90bce83fb854f7cd1cf"
	},
	{
		"id": "0e447acbb416",
		"ts": "2026-08-08T10:27:27.320Z",
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
		"liquidityUsd": 16344535.81,
		"hash": "0e447acbb416d23045a89058c954f5fd28b94086795764ef564e25e720c5eec2"
	},
	{
		"id": "f2a88de8f6ec",
		"ts": "2026-08-08T10:27:27.812Z",
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
		"liquidityUsd": 1049474.14,
		"hash": "f2a88de8f6ec98d66915afc55c26fcafde68accb82a2fba4a4a752fcef560faa"
	},
	{
		"id": "9ee9e3714cff",
		"ts": "2026-08-08T10:27:28.257Z",
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
		"liquidityUsd": 27365871.45,
		"hash": "9ee9e3714cfff767ecd7633e557dac51d1c2c33fe5452e184c4d443e10c44787"
	},
	{
		"id": "94697f25f3dd",
		"ts": "2026-08-08T10:27:28.493Z",
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
		"liquidityUsd": 4430490.52,
		"hash": "94697f25f3dde3d0052e031576b4804c824d89673890c28f6a688d1bbda0f6f8"
	},
	{
		"id": "4c409c6bb0ca",
		"ts": "2026-08-08T10:27:28.771Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 927249.71,
		"hash": "4c409c6bb0ca1025a298926a24fc36778dc1103dc7e0f99a959ae2792369a7e5"
	},
	{
		"id": "02adcd37e71c",
		"ts": "2026-08-08T10:27:29.002Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27365871.45,
		"hash": "02adcd37e71cda6f697433d77dbc2b988efd847889894a2d16a366b7f7df49e1"
	},
	{
		"id": "8c5b68296075",
		"ts": "2026-08-08T10:27:29.243Z",
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
		"liquidityUsd": 4879626.24,
		"hash": "8c5b682960754ae1f48ad4c81612b38aba4d36d145893e25e58e4a86534d1ebe"
	},
	{
		"id": "483c38df3746",
		"ts": "2026-08-08T10:27:29.486Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 987489.78,
		"hash": "483c38df37462d9ee3908a06b662629f5425356d7b6ef1cc0be5411f964b50aa"
	},
	{
		"id": "49a5da6d6cc6",
		"ts": "2026-08-08T10:27:29.759Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 541720.36,
		"hash": "49a5da6d6cc6057cd053e88d9b5d96f9fe63458524b3d0f7982fcdd19ab57d26"
	},
	{
		"id": "49d6bfa17b91",
		"ts": "2026-08-08T10:27:29.975Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 348869.55,
		"hash": "49d6bfa17b910bf71a2bdc6308b5e9dee646ba4cce7ab785d278a62b5e19dbee"
	},
	{
		"id": "c6f8f614ff63",
		"ts": "2026-08-08T10:27:30.193Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4060384.28,
		"hash": "c6f8f614ff6307e7bf71430f1d12ddd9a5c2387c6479f6bc68dd624942532d55"
	},
	{
		"id": "f77d737e14f5",
		"ts": "2026-08-08T10:27:30.423Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2144403.22,
		"hash": "f77d737e14f58c2ba6368938440a8642d2be1db3392f6f7912ab8337b3b8a0be"
	},
	{
		"id": "1b17148206a8",
		"ts": "2026-08-08T10:27:30.650Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1799184.12,
		"hash": "1b17148206a80ae0f873aca3032dad0083cce2c97bd145bc8b318a39e9e6f001"
	},
	{
		"id": "d5b7f8d4d72b",
		"ts": "2026-08-08T10:27:30.865Z",
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
		"liquidityUsd": 9293392.23,
		"hash": "d5b7f8d4d72b5f21f7851fd5e28dd3687c662227a0c1bb047e9efb3d5e40bffc"
	},
	{
		"id": "9732d2ab4227",
		"ts": "2026-08-08T10:27:31.084Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 676247.14,
		"hash": "9732d2ab4227409b9f06fe7bb0413ac5670ea257933fbc6ceae533bf42dc069f"
	},
	{
		"id": "252cd34ea565",
		"ts": "2026-08-08T10:27:31.313Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 540419.32,
		"hash": "252cd34ea5655ff100122ff378d8bce1bc15d8b818f97d64c47bc817d1aefea8"
	},
	{
		"id": "b1401b0fdb76",
		"ts": "2026-08-08T09:33:28.027Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115531806.5,
		"hash": "b1401b0fdb76d098f0204ad065a9f836f3d5047e26ea2d6bae31916a76cb6d45"
	},
	{
		"id": "4bf15c10300d",
		"ts": "2026-08-08T09:33:28.447Z",
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
		"liquidityUsd": 17590878.18,
		"hash": "4bf15c10300daa8e09838a4759eca9dfce06a6a7e2862950d6a7d27d2d433ca4"
	},
	{
		"id": "84cb119a0082",
		"ts": "2026-08-08T09:33:28.679Z",
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
		"liquidityUsd": 1048216.29,
		"hash": "84cb119a0082b6dbc3ed04cbe1e1d2c46f74b1fcf47d7c84d238b13219b4c224"
	},
	{
		"id": "8248faaffc36",
		"ts": "2026-08-08T09:33:28.908Z",
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
		"liquidityUsd": 27370565.36,
		"hash": "8248faaffc366eb49167e5ba488b3eeec6416d393c5165dcac60a91d01d174d8"
	},
	{
		"id": "3828815913f8",
		"ts": "2026-08-08T09:33:29.148Z",
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
		"liquidityUsd": 4435293.77,
		"hash": "3828815913f8091a901edb3daeafbf8984e85a666a51eb94afc8e00d6e0bc97a"
	},
	{
		"id": "fb44dffdf1f0",
		"ts": "2026-08-08T09:33:29.368Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 927249.71,
		"hash": "fb44dffdf1f0868dd9dbfef802673700a7edbc5604740315ae405a0497557285"
	},
	{
		"id": "29fff59d92a4",
		"ts": "2026-08-08T09:33:29.594Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27370565.36,
		"hash": "29fff59d92a49cec589d74ee184c2273499ba4c516e3c414a524d65bd3f5806e"
	},
	{
		"id": "c32f3f7ffb7f",
		"ts": "2026-08-08T09:33:29.823Z",
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
		"liquidityUsd": 4871200.78,
		"hash": "c32f3f7ffb7f0ceed9b0bc02c6d033644351c7d0f14e84d8f9912a4660c1eeeb"
	},
	{
		"id": "660209c835d3",
		"ts": "2026-08-08T09:33:30.058Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 8,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.84,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 992618.46,
		"hash": "660209c835d3fc05afe8227ee7ea51da9f9591c689d37c9087697d25296b2874"
	},
	{
		"id": "1a6d221cdb1e",
		"ts": "2026-08-08T09:33:30.279Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 600896.27,
		"hash": "1a6d221cdb1e86096d6a95debea755f934d9e3c7d786f1b8e41d6605ca1278d2"
	},
	{
		"id": "2f923dd0bdf1",
		"ts": "2026-08-08T09:33:30.493Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1796888.1,
		"hash": "2f923dd0bdf1d35a1ad7df3a7682e457400e42ef036352123594a320c7cdd17b"
	},
	{
		"id": "f3c29818e20b",
		"ts": "2026-08-08T09:33:30.708Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4043071.54,
		"hash": "f3c29818e20babd4b0dda5d2fcb6137277f5e254e66dcaafd5c04ba90c97ffa8"
	},
	{
		"id": "8481a5046975",
		"ts": "2026-08-08T09:33:30.925Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2145737.63,
		"hash": "8481a5046975125ea15ccb099750936e0c7956476be043e2845e20c9c164e91c"
	},
	{
		"id": "20f7a9ef1ec4",
		"ts": "2026-08-08T09:33:31.133Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9288569.49,
		"hash": "20f7a9ef1ec4a623fae5b59505ddd14b3ab5f98581b4e25a57f6eaa9ba0381ad"
	},
	{
		"id": "1529afa39099",
		"ts": "2026-08-08T09:33:31.349Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 672289.24,
		"hash": "1529afa3909942e9daf6522d4a227504858944639b4713bb6184d2a4bddbb9aa"
	},
	{
		"id": "597fecbaa805",
		"ts": "2026-08-08T08:35:38.501Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115497022.05,
		"hash": "597fecbaa805c4530439b7b365b667264e0ef6b3a63dda5d012f9a156e12bd96"
	},
	{
		"id": "2285204a075b",
		"ts": "2026-08-08T08:35:38.717Z",
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
		"liquidityUsd": 16616171.18,
		"hash": "2285204a075be40cc84d61d8074997c4bfba14260c87215303c7238aad4b3a6f"
	},
	{
		"id": "5ebc232cb65d",
		"ts": "2026-08-08T08:35:38.925Z",
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
		"liquidityUsd": 1048216.29,
		"hash": "5ebc232cb65dab36e9b03ef36bcce50edfe63a60a8654c15e5cadf0d3f569d9d"
	},
	{
		"id": "5334f1e2d981",
		"ts": "2026-08-08T08:35:39.128Z",
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
		"liquidityUsd": 27370770.91,
		"hash": "5334f1e2d9817404cb59d46bc5bb32d0deba31aa1510f9ccc96c15bf9f9f1e4e"
	},
	{
		"id": "e21f64d632b8",
		"ts": "2026-08-08T08:35:39.324Z",
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
		"liquidityUsd": 4416896.84,
		"hash": "e21f64d632b8156f2d520a3215a11b6eccc61c3510a3db199eb2071c441b97c1"
	},
	{
		"id": "fdf75fcd9278",
		"ts": "2026-08-08T08:35:39.519Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 927249.71,
		"hash": "fdf75fcd9278b8148115a407941b0928396548f357c77c42197e2a2febfde0f5"
	},
	{
		"id": "fabc7d599c15",
		"ts": "2026-08-08T08:35:39.753Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27370770.91,
		"hash": "fabc7d599c15e483b7d53946c6ae2eea795dd24d6eec6b1291d1fa27ca95fe19"
	},
	{
		"id": "180185ef2ea4",
		"ts": "2026-08-08T08:35:39.955Z",
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
		"liquidityUsd": 4861888.39,
		"hash": "180185ef2ea4446dbeb70083efd13e0fc367b69a8ed5ac3b6abb503339a2ebb4"
	},
	{
		"id": "fdba4152892c",
		"ts": "2026-08-08T08:35:40.152Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 984125.8,
		"hash": "fdba4152892c2c789301d112b81d0a1a21fcc1beb603155126b03214ebfbf073"
	},
	{
		"id": "2ee501f4b0cc",
		"ts": "2026-08-08T08:35:40.366Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 504340.17,
		"hash": "2ee501f4b0ccce516b08fa5d55dcf8db0daf62e34c7ad0d469f7ec5d2ea4cd2f"
	},
	{
		"id": "01f097594caa",
		"ts": "2026-08-08T08:35:40.561Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1795436.85,
		"hash": "01f097594caad8aa3e5eb437c39a4a49bc9bb60c3e0028dc2878d7bf4f1672d2"
	},
	{
		"id": "262d4a01d9c9",
		"ts": "2026-08-08T08:35:40.751Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4051801.06,
		"hash": "262d4a01d9c91bf05ef6e11ae3ae7074d7564f88e46d3048737500765b479288"
	},
	{
		"id": "beeba939c0c5",
		"ts": "2026-08-08T08:35:40.935Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2139334.5,
		"hash": "beeba939c0c55e1ae976014ee1242862ec62267f5fe420779e37c759938ded39"
	},
	{
		"id": "dfb33a7eccd7",
		"ts": "2026-08-08T08:35:41.126Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 675850.75,
		"hash": "dfb33a7eccd7df3c33bd02bca69a4f6ffabc991101cf36b82145e8754c5d375c"
	},
	{
		"id": "4adcc6bb490e",
		"ts": "2026-08-08T08:35:41.317Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9283893.07,
		"hash": "4adcc6bb490e6f2578011e0f1f661f553b31379de362926b891a24e63aacc623"
	},
	{
		"id": "22157e0492bc",
		"ts": "2026-08-08T07:44:58.588Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115501684.32,
		"hash": "22157e0492bca2695050808cda372f99435fd209373ebe6f7092eb84ae1edc11"
	},
	{
		"id": "d22f1dff08b0",
		"ts": "2026-08-08T07:44:59.011Z",
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
		"liquidityUsd": 16596039.7,
		"hash": "d22f1dff08b00dcabb750c0cbe79f120c71b62b07e96e5ed146d82b484526026"
	},
	{
		"id": "4284cf64df4e",
		"ts": "2026-08-08T07:44:59.509Z",
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
		"liquidityUsd": 1048216.29,
		"hash": "4284cf64df4e782be87a5b99f089f9f44dd6c65bf42dbe8330e0379fb6e23dcb"
	},
	{
		"id": "49ecf371417c",
		"ts": "2026-08-08T07:44:59.771Z",
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
		"liquidityUsd": 27388429.42,
		"hash": "49ecf371417ca389aaab8033c1b3098529a689b1f44fa734f1426dd706464580"
	},
	{
		"id": "2b21885d2447",
		"ts": "2026-08-08T07:45:00.003Z",
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
		"liquidityUsd": 4405414,
		"hash": "2b21885d2447a21bf33e8fdea674d284237269701989373dd968b8ae8c2f2c54"
	},
	{
		"id": "13fa91b62928",
		"ts": "2026-08-08T07:45:00.235Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 927249.71,
		"hash": "13fa91b62928faf862bfc3b07ce8564ea3fac0cf723f89e06ede58f980fdfaba"
	},
	{
		"id": "df022902a25f",
		"ts": "2026-08-08T07:45:00.450Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27388429.42,
		"hash": "df022902a25fc4cf0248b57d62d9d55a86b67d3d02091840299d392d5eb4267c"
	},
	{
		"id": "0c7de29cdf80",
		"ts": "2026-08-08T07:45:00.671Z",
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
		"liquidityUsd": 4804403.59,
		"hash": "0c7de29cdf801ed0e27921e2f41de7ee48f01e33e60891d3391fa8a78ff3c5dc"
	},
	{
		"id": "5c931c619f84",
		"ts": "2026-08-08T07:45:00.894Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 982889.52,
		"hash": "5c931c619f84408ee7dfebba94b4c3c8d8548ed15339b54d266c9a757b369eed"
	},
	{
		"id": "b347177ac81e",
		"ts": "2026-08-08T07:45:01.245Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 511114.21,
		"hash": "b347177ac81e8dbc0decd51a82f432911afc236782be30f4bc46e24354668888"
	},
	{
		"id": "2698eca33641",
		"ts": "2026-08-08T07:45:01.476Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1796170.52,
		"hash": "2698eca3364112fa1ac503a46e723800a28b208dd54c007267fb2b5fe1dbb931"
	},
	{
		"id": "15eac27334fe",
		"ts": "2026-08-08T07:45:01.697Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4047880.06,
		"hash": "15eac27334fe01ea6123671cff76308ced937f20e4bed4f4f4ef81a6c45254e0"
	},
	{
		"id": "7e628ddbe73f",
		"ts": "2026-08-08T07:45:02.082Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2139089.12,
		"hash": "7e628ddbe73f0333c0f3bc000a6119bae072c76b177c37e27bb8eb16907dc05a"
	},
	{
		"id": "ac940d543e5b",
		"ts": "2026-08-08T07:45:02.347Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 677961.27,
		"hash": "ac940d543e5b6ea6be387ee8e70d3906c158d7c9a067d96ff88e3552551f6dec"
	},
	{
		"id": "e04fe090428d",
		"ts": "2026-08-08T07:45:02.599Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1210502.45,
		"hash": "e04fe090428d9536a631770cd64c3ad0aad24e39a343539a15f7494ec9610aae"
	},
	{
		"id": "9fa7fa6668ca",
		"ts": "2026-08-08T07:45:02.803Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9273152.36,
		"hash": "9fa7fa6668caa03e584455af56fb509ceb33e0946ffbf5ccf25ee2f483f0e1f9"
	},
	{
		"id": "072359835843",
		"ts": "2026-08-08T06:44:03.718Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115439764.05,
		"hash": "0723598358439be724d00f7497c06b016ad59d2dcf28c19448e4c557f19c0306"
	},
	{
		"id": "95c692c08ab8",
		"ts": "2026-08-08T06:44:04.165Z",
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
		"liquidityUsd": 16921285.37,
		"hash": "95c692c08ab8e73ada89f033f0577b2fbbae2283be0b776c599154c3e211608e"
	},
	{
		"id": "2cf33f601f32",
		"ts": "2026-08-08T06:44:04.431Z",
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
		"liquidityUsd": 1048216.29,
		"hash": "2cf33f601f32593c9dbdb143ffc63224ce4063e527440a7c9763af31f73ac0f8"
	},
	{
		"id": "345fe8ce75fe",
		"ts": "2026-08-08T06:44:04.855Z",
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
		"liquidityUsd": 27429880.98,
		"hash": "345fe8ce75fe392152281611aad33a44c6361dadbcd092cc8419ffe49df6d466"
	},
	{
		"id": "16616df18e9a",
		"ts": "2026-08-08T06:44:05.094Z",
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
		"liquidityUsd": 4405414,
		"hash": "16616df18e9a565b8d3ff466c63cced90d9ad3f7f640877ccd294c541ff51be5"
	},
	{
		"id": "2a341b536b3d",
		"ts": "2026-08-08T06:44:05.321Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 927249.71,
		"hash": "2a341b536b3d0b052aa75d3a05e9334c3f27f1b8c1f29db451326dee1422aefe"
	},
	{
		"id": "b55d4c00c07e",
		"ts": "2026-08-08T06:44:05.725Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27429880.98,
		"hash": "b55d4c00c07ea789dacc769fd8f06406d6c5cf0a5880bfa2009906f341ce6c68"
	},
	{
		"id": "2e1a135488f4",
		"ts": "2026-08-08T06:44:05.947Z",
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
		"liquidityUsd": 4537613.92,
		"hash": "2e1a135488f40016298c7fd6a534c0d137298f9fb46ca7f616108a169a9361c7"
	},
	{
		"id": "62afd324b9d2",
		"ts": "2026-08-08T06:44:06.177Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 981585.91,
		"hash": "62afd324b9d224b46cc5ee983ffb84b469942f1d00646eb4069104663396efc7"
	},
	{
		"id": "324db1963f53",
		"ts": "2026-08-08T06:44:06.394Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 503337.13,
		"hash": "324db1963f539418e6de27515b9b804af966ee6943e1451f7e55cd128ff60246"
	},
	{
		"id": "9f93a9a09040",
		"ts": "2026-08-08T06:44:06.619Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1796919.41,
		"hash": "9f93a9a0904039e7a7cb705fab398b0f5d05a45ad5257ed9a664a06975551554"
	},
	{
		"id": "e5d322f5ad1c",
		"ts": "2026-08-08T06:44:06.836Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4029418.91,
		"hash": "e5d322f5ad1c59a69dc79a2eaadb5b85a5d54213ffe1ff2bfbad3e876f6f419d"
	},
	{
		"id": "98cafc074b07",
		"ts": "2026-08-08T06:44:07.051Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9252169.12,
		"hash": "98cafc074b07585120999a776c8b36d67b489b546bee8b8abe45db3dcca13bc4"
	},
	{
		"id": "0d7c1a639fe3",
		"ts": "2026-08-08T06:44:07.245Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2145491.84,
		"hash": "0d7c1a639fe3f5bb4eec92a7b73710c9e9217e79ba7c835e990c8e9ff7c1ce47"
	},
	{
		"id": "5957fe6a7a29",
		"ts": "2026-08-08T06:44:07.459Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 667495.63,
		"hash": "5957fe6a7a29d221e1244406d73e24407c75786331069264ba5a4a32fdfaac4b"
	},
	{
		"id": "a3c973ab8510",
		"ts": "2026-08-08T06:44:07.672Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1211595.67,
		"hash": "a3c973ab8510c315db6c0a6fa4ea0cf6bc3333787e10193b80affd6aa49848cd"
	},
	{
		"id": "2cbd70826d47",
		"ts": "2026-08-08T05:39:51.351Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115429690.2,
		"hash": "2cbd70826d4774774ee42146adf53a9c0c304679bdb5aaa6feb1fd8b79e4b926"
	},
	{
		"id": "1c55ab084e88",
		"ts": "2026-08-08T05:39:51.587Z",
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
		"liquidityUsd": 16933899,
		"hash": "1c55ab084e8802a9233501381cfccc94ab50681bfb5edea83ba25110a2887cf4"
	},
	{
		"id": "bba1d466d346",
		"ts": "2026-08-08T05:39:51.783Z",
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
		"liquidityUsd": 1047603.88,
		"hash": "bba1d466d346c8a15d91d5d448d401a2020ed274d7592982519602eff8553a48"
	},
	{
		"id": "751fd6ff3f8b",
		"ts": "2026-08-08T05:39:51.971Z",
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
		"liquidityUsd": 27485506.57,
		"hash": "751fd6ff3f8ba88167258e6e56bce05d42c16971327204a059a9c0e0b9e65223"
	},
	{
		"id": "9c99514daf31",
		"ts": "2026-08-08T05:39:52.182Z",
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
		"liquidityUsd": 4405414,
		"hash": "9c99514daf31141e1a53d6d4aa812c21fb9ca3788434b9a19a4bbe0c25c57294"
	},
	{
		"id": "982bff1320d9",
		"ts": "2026-08-08T05:39:52.375Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 927249.71,
		"hash": "982bff1320d92c369a72c1eb6d3f4f308a509a9e1f112f4ad5fee4db50fee582"
	},
	{
		"id": "637d3768b74f",
		"ts": "2026-08-08T05:39:52.559Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27485506.57,
		"hash": "637d3768b74fd93ef741630499c34014703372bf4cadca54505b811aeff272ad"
	},
	{
		"id": "2c64d4aba5f9",
		"ts": "2026-08-08T05:39:52.757Z",
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
		"liquidityUsd": 3943876.52,
		"hash": "2c64d4aba5f9ff7b17ead1f5b49ef21828c567a799863230f2f033db51d37031"
	},
	{
		"id": "395bedb4880e",
		"ts": "2026-08-08T05:39:52.949Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 986601.77,
		"hash": "395bedb4880e4f056a2e9e11e2663cc5ca0f61c6be8961f16cff6010065d65a2"
	},
	{
		"id": "b9dd710b7636",
		"ts": "2026-08-08T05:39:53.132Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 509362.88,
		"hash": "b9dd710b7636555680a1a58beac14799ec355113b16a8a416ff7be5f721fa6dc"
	},
	{
		"id": "8a3d13aad28e",
		"ts": "2026-08-08T05:39:53.325Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9283219.81,
		"hash": "8a3d13aad28ead79dd1afcafd48c4f6619e4c33f4f0be15ca20a58b76ebc1942"
	},
	{
		"id": "20987d6e8db9",
		"ts": "2026-08-08T05:39:53.501Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1796870.07,
		"hash": "20987d6e8db9f56d07ba538e7fc7204d97d22f92bd3024e487d2a79be65efc39"
	},
	{
		"id": "882333893aad",
		"ts": "2026-08-08T05:39:53.693Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4019179.07,
		"hash": "882333893aadd4a643f3d9e84c2c2ab56d28c5724da265cdf65a3dffa6b8cddd"
	},
	{
		"id": "29e67f3b8239",
		"ts": "2026-08-08T05:39:53.877Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2150926.47,
		"hash": "29e67f3b823962a1eda07cdb13781122004b91cb17ad1fde8fbd3eeb6eabe273"
	},
	{
		"id": "48809d99f7ef",
		"ts": "2026-08-08T05:39:54.069Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 681789.98,
		"hash": "48809d99f7eff38106e86387d2803132e22200a63e9371fe78b6201746875f1c"
	},
	{
		"id": "017957935ba4",
		"ts": "2026-08-08T04:52:22.456Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115511766.14,
		"hash": "017957935ba4d398ab91fc208fb279cfd7ee03f11c94994baea5c8ba30fb7b05"
	},
	{
		"id": "bb9ad7fd2376",
		"ts": "2026-08-08T04:52:22.795Z",
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
		"liquidityUsd": 17193664.14,
		"hash": "bb9ad7fd23767ffa52a8e9a879d664140cb602d1f7f4727c34c632bb80cb3da6"
	},
	{
		"id": "9d145b379c0c",
		"ts": "2026-08-08T04:52:23.143Z",
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
		"liquidityUsd": 1047603.88,
		"hash": "9d145b379c0ce0d10b52f4dd16fa3938623d425958a8fe316c8e99f4c8cbf8c9"
	},
	{
		"id": "73693b3c3ebd",
		"ts": "2026-08-08T04:52:23.469Z",
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
		"liquidityUsd": 27480211.28,
		"hash": "73693b3c3ebde0132d50d2104b94d46931f3d821fb7ea0a275f7c1a6e556d70c"
	},
	{
		"id": "ab4f384e10e0",
		"ts": "2026-08-08T04:52:23.795Z",
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
		"liquidityUsd": 4405414,
		"hash": "ab4f384e10e0fb2042cce61bd3da71e890dc834b52f1d37f00a00107c82eb523"
	},
	{
		"id": "0fb7da02a73c",
		"ts": "2026-08-08T04:52:23.979Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 927249.71,
		"hash": "0fb7da02a73c3c97ec5f5241fd4746602331948720103ec5b9800b09b55f88f3"
	},
	{
		"id": "47733e2254e8",
		"ts": "2026-08-08T04:52:24.163Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27480211.28,
		"hash": "47733e2254e8f82cf903766348e69845ce8ab11bdd76ad4713334309839eb8be"
	},
	{
		"id": "3a6a9713278f",
		"ts": "2026-08-08T04:52:24.488Z",
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
		"liquidityUsd": 3942807.07,
		"hash": "3a6a9713278f08c72ff4cdb78fd31c85f4eb09a68aeece1219f0d0c2034d7229"
	},
	{
		"id": "eca55792bcf6",
		"ts": "2026-08-08T04:52:24.753Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 987383.75,
		"hash": "eca55792bcf68ab104fb96e2bd9afeb4a8b98d10277292b0a51b302627d682fe"
	},
	{
		"id": "5ab5132346d8",
		"ts": "2026-08-08T04:52:24.942Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 521986.24,
		"hash": "5ab5132346d80a21d8aae0dd40f7236f564bc7f16b66f2a41d5c4cda8ea967a4"
	},
	{
		"id": "d74c18fd2d66",
		"ts": "2026-08-08T04:52:25.134Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9320547.78,
		"hash": "d74c18fd2d66a7167ce2f490753711fb68bbbe68a52cd2cfba3e92dbf9cd79ad"
	},
	{
		"id": "a0b150206fd8",
		"ts": "2026-08-08T04:52:25.340Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1797103.43,
		"hash": "a0b150206fd82d8d50ce71186a4e3cd50f175183bbb6c40cbcbe617a6bda8d55"
	},
	{
		"id": "fbce59660b03",
		"ts": "2026-08-08T04:52:25.523Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4024985.45,
		"hash": "fbce59660b036e197a7a8a4d711d2655b40e1b92dc02be36e49924f5d9495cac"
	},
	{
		"id": "ac03ff100698",
		"ts": "2026-08-08T04:52:25.711Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2147207.92,
		"hash": "ac03ff1006980d3e233e43b0adbaa88b13575f4ef867337632fb028bb5ed931b"
	},
	{
		"id": "159baacd59c8",
		"ts": "2026-08-08T04:52:25.906Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 692336.39,
		"hash": "159baacd59c81c3ab287d2333b1a7a6b7564282b0f5054e9029bdb083f2aeb1d"
	},
	{
		"id": "4358bd27e402",
		"ts": "2026-08-08T03:21:29.922Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115506601.94,
		"hash": "4358bd27e402218f5c8b33d188bf4205115fed486d5ed4609dcdb85278b10b09"
	},
	{
		"id": "31ec60bbca8b",
		"ts": "2026-08-08T03:21:30.446Z",
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
		"liquidityUsd": 16878498.79,
		"hash": "31ec60bbca8b44630bb1c295193d54430acae403600a57f5e2435406e8ee4a18"
	},
	{
		"id": "59a2a5156cdd",
		"ts": "2026-08-08T03:21:30.715Z",
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
		"liquidityUsd": 1047603.88,
		"hash": "59a2a5156cdd23fe1d0b310a640516db3674b6145f3ff86075b9cfcd527123b3"
	},
	{
		"id": "c8d92726cb90",
		"ts": "2026-08-08T03:21:31.206Z",
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
		"liquidityUsd": 27483473.05,
		"hash": "c8d92726cb9010e8335a96993684de0a33283b56151a2e579252f1b337b6aac2"
	},
	{
		"id": "baa97bf54d1f",
		"ts": "2026-08-08T03:21:31.478Z",
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
		"liquidityUsd": 4389889.23,
		"hash": "baa97bf54d1f91a8fa973001fe021e672438bc3dc3e495ef18a6311c8ca78c1c"
	},
	{
		"id": "036746dcf73b",
		"ts": "2026-08-08T03:21:31.742Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 915017.88,
		"hash": "036746dcf73b1b69f8123d6b3db4e31e7c27da653195a441becfee729f43ca39"
	},
	{
		"id": "da93db2aab30",
		"ts": "2026-08-08T03:21:32.014Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27483473.05,
		"hash": "da93db2aab3086338f88f90ac21f311de1e0a5df9551d90699ff484f1d091630"
	},
	{
		"id": "ad2703efbbb0",
		"ts": "2026-08-08T03:21:32.285Z",
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
		"liquidityUsd": 3936536.51,
		"hash": "ad2703efbbb094df39203a80cb0a13b8166704b6556f963e2ff2fb3ab4c0acab"
	},
	{
		"id": "d918d4492502",
		"ts": "2026-08-08T03:21:32.561Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 979690.37,
		"hash": "d918d449250208608ac89fc23a8ad625ef9e1262817d3b3f11ad79ba497e835f"
	},
	{
		"id": "2604beec9de3",
		"ts": "2026-08-08T03:21:32.826Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 519036.57,
		"hash": "2604beec9de35d35b716ffd8b9b2911f7da10403ffa18d43f5d73bd4fa7e31b5"
	},
	{
		"id": "80b82285a10e",
		"ts": "2026-08-08T03:21:33.074Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 289926.11,
		"hash": "80b82285a10e779f18b1d0db29986bd82e5eb65a1ee6e8bb6d2cde5b08f81541"
	},
	{
		"id": "f55b9c3badba",
		"ts": "2026-08-08T03:21:33.331Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9314229.12,
		"hash": "f55b9c3badbaf24890602b7e8634176e5bcf6398e94feea71bfa7df7e57daa87"
	},
	{
		"id": "a7ca501dec04",
		"ts": "2026-08-08T03:21:33.592Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1794355.78,
		"hash": "a7ca501dec04a8d39a978059916cb7420cbef29c69ebfe78553cceeff874147f"
	},
	{
		"id": "d817c84aec5b",
		"ts": "2026-08-08T03:21:33.841Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2146449.99,
		"hash": "d817c84aec5bf2f387f41d6c17ac7179c6a8e5bf2f3a085427d9b08edf6483e1"
	},
	{
		"id": "190f1224f2e3",
		"ts": "2026-08-08T03:21:34.090Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4027115.68,
		"hash": "190f1224f2e3aefe6203b53ce3c228787b5579b7e84c5d42c4a6e543f75828ea"
	},
	{
		"id": "09123de9f477",
		"ts": "2026-08-08T03:21:34.335Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 551004.58,
		"hash": "09123de9f4775393ab91f1c0a438011cd7547bafa705014481ba0babd5f95266"
	},
	{
		"id": "935b532e0c67",
		"ts": "2026-08-08T03:21:34.591Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 723102.71,
		"hash": "935b532e0c67f48c377b49e639494da3a1ca1030cd07afe7095f2de3ef15f1ce"
	},
	{
		"id": "3b561a8fe53c",
		"ts": "2026-08-08T01:16:48.033Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115632319.16,
		"hash": "3b561a8fe53ce4989c5cb9bbb6f70ea0c290841220ee1f394dd52bf76c7543e1"
	},
	{
		"id": "f19ee5cbc12c",
		"ts": "2026-08-08T01:16:48.261Z",
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
		"liquidityUsd": 17397232.3,
		"hash": "f19ee5cbc12cd798a6099f8320d856fb662a52c06346d4b8aba852bd37c296b1"
	},
	{
		"id": "56d6d851136d",
		"ts": "2026-08-08T01:16:48.485Z",
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
		"liquidityUsd": 1047603.88,
		"hash": "56d6d851136d281e3a2a22e2c519834245655b4d0a572a1c717d1f4b46fb143b"
	},
	{
		"id": "16a5e23504e6",
		"ts": "2026-08-08T01:16:48.706Z",
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
		"liquidityUsd": 27465082.69,
		"hash": "16a5e23504e6958abb6cd6430c9eaacda1ebfa29180c1c9e3b004d251a24c9d5"
	},
	{
		"id": "dab23c902527",
		"ts": "2026-08-08T01:16:48.923Z",
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
		"liquidityUsd": 4410759.83,
		"hash": "dab23c902527cd082d9d0d1ee02e4a586505928de1002b16c5d569d0c9276257"
	},
	{
		"id": "7e76c602bbea",
		"ts": "2026-08-08T01:16:49.159Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 922623.23,
		"hash": "7e76c602bbeab07ebe5bcceb735e707846f3e55c0ead16e798215fc062b4ec63"
	},
	{
		"id": "66c0e0552331",
		"ts": "2026-08-08T01:16:49.376Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27465082.69,
		"hash": "66c0e0552331c5166a0d041ba8f43f7cbcf1b9768480bfaba85cc521c331c4a3"
	},
	{
		"id": "a15862bad9d2",
		"ts": "2026-08-08T01:16:49.621Z",
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
		"liquidityUsd": 4339184.12,
		"hash": "a15862bad9d2019e24bbfc13b7d218ceef74c4053b7e05e9dfd05ea1e22fcddb"
	},
	{
		"id": "9174ad7f6211",
		"ts": "2026-08-08T01:16:49.839Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 985033.52,
		"hash": "9174ad7f6211172dd6ec78dbcce4b944ce0b2120279b91eb24f808038e51efcc"
	},
	{
		"id": "d2d430b14a31",
		"ts": "2026-08-08T01:16:50.060Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 14,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.72,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 288426.94,
		"hash": "d2d430b14a31e8bfb43e24e9176bf4ae872df08eaae58aae70f7059fb5d06c27"
	},
	{
		"id": "6b1a8c653810",
		"ts": "2026-08-08T01:16:50.265Z",
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
		"liquidityUsd": 9306371.63,
		"hash": "6b1a8c653810774ff1864d57d233dbe5b6aa35c55c594029dfdc20e393ada9cd"
	},
	{
		"id": "d276e2ef8f01",
		"ts": "2026-08-08T01:16:50.471Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3998229.5,
		"hash": "d276e2ef8f0138a364d561923f21e6862a00e59f2d27992fb385537dd2e1e9d0"
	},
	{
		"id": "160dd36b3585",
		"ts": "2026-08-08T01:16:50.677Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2149511.88,
		"hash": "160dd36b35858f5f2fff3d2d9f9778cfdcf791fdf580948de0391216c965f4eb"
	},
	{
		"id": "4b0eefdea04e",
		"ts": "2026-08-08T01:16:50.885Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 551220.14,
		"hash": "4b0eefdea04e7770d7d88a7114ad40d78bb4e0efb3e1bcaf287042bd59f7cb4e"
	},
	{
		"id": "3f68c5c6ab0e",
		"ts": "2026-08-08T01:16:51.089Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 527924.47,
		"hash": "3f68c5c6ab0e936a3a565867553dd9441195ca75d12d4b05049aaf193c0d11d7"
	},
	{
		"id": "70276db3522f",
		"ts": "2026-08-08T01:16:51.297Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 735337.9,
		"hash": "70276db3522fa7de4de8548c4712a6024a635ab9b7415ceeb13cd0c39d2c227e"
	},
	{
		"id": "1e937493da02",
		"ts": "2026-08-08T01:16:51.500Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1794549.66,
		"hash": "1e937493da0258be022393f1bbebee3de93aee6048df9831d9d556e20688c3f0"
	},
	{
		"id": "3cb9ac934232",
		"ts": "2026-08-07T23:29:58.537Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115510626.31,
		"hash": "3cb9ac93423206efbb9d15a55473f43ea6b9f5c132a2df11c40ef861ed9a419a"
	},
	{
		"id": "7117138b624b",
		"ts": "2026-08-07T23:29:58.806Z",
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
		"liquidityUsd": 16845661.43,
		"hash": "7117138b624bbdcfb7ac1708d91051bbe1717fd4613934d4b373020d0fdc2524"
	},
	{
		"id": "a382aa24cc70",
		"ts": "2026-08-07T23:29:59.151Z",
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
		"liquidityUsd": 1048148.87,
		"hash": "a382aa24cc70f15266b5fa002a0417b8357dbe7a67dc33e5bc7e3fa483095d18"
	},
	{
		"id": "5f50f8bf45a0",
		"ts": "2026-08-07T23:29:59.431Z",
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
		"liquidityUsd": 27427992.84,
		"hash": "5f50f8bf45a0fcf1984755eba1f1d11d025f33c258eaf813955d948458985036"
	},
	{
		"id": "179460a60e6f",
		"ts": "2026-08-07T23:29:59.706Z",
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
		"liquidityUsd": 4408671.49,
		"hash": "179460a60e6f9f23212992dad3b75a00ba7ba5374554f04e148ad65ce750c5e9"
	},
	{
		"id": "827049188782",
		"ts": "2026-08-07T23:29:59.969Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 922623.23,
		"hash": "827049188782a476661b8e741a6dcbe9555eb16132bccd120e66bf2de198070c"
	},
	{
		"id": "9a9340d5c295",
		"ts": "2026-08-07T23:30:00.291Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27427992.84,
		"hash": "9a9340d5c2959b25b5d717bf477ca7ed40d747ca0cfbfb113b47bad60dfd2b6b"
	},
	{
		"id": "cb5d6c2d50a3",
		"ts": "2026-08-07T23:30:00.564Z",
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
		"liquidityUsd": 4341832.11,
		"hash": "cb5d6c2d50a360c7125967fc15ec9cad6727d0757fae1a4341b4cb0d4ebc839c"
	},
	{
		"id": "d99d40bcc251",
		"ts": "2026-08-07T23:30:00.831Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 985255.47,
		"hash": "d99d40bcc2511f6c207ccae204b1ccc5f71370d93190acfe0a4e0483eb0f4480"
	},
	{
		"id": "e94ce1b9becf",
		"ts": "2026-08-07T23:30:01.157Z",
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
		"liquidityUsd": 9286930.09,
		"hash": "e94ce1b9becf5017233b0e5b3eca2f1ec8538a39389e7822022fb2c25ddcaf2a"
	},
	{
		"id": "a00b19b54c6c",
		"ts": "2026-08-07T23:30:01.471Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2149284.18,
		"hash": "a00b19b54c6c3b6dda1d1735843001a6f4d7ce8caa164b021e2330128758b4f8"
	},
	{
		"id": "8bff0598f73c",
		"ts": "2026-08-07T23:30:01.850Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 14,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.72,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 287188.79,
		"hash": "8bff0598f73cbf388085cdd623e96d573868eace6aed0907a39ff683f88c9efc"
	},
	{
		"id": "ac77b824e644",
		"ts": "2026-08-07T23:30:02.134Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3981489.77,
		"hash": "ac77b824e644639da9e554f2d1d4739ea2e319e8d9db2d8b36e7ba038a2c0fa1"
	},
	{
		"id": "797afe4078ca",
		"ts": "2026-08-07T23:30:02.431Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 554151.87,
		"hash": "797afe4078ca576fc7b98518057a3cfd592c623b60273e26f08bf82872de0d64"
	},
	{
		"id": "2601a1e07033",
		"ts": "2026-08-07T23:30:03.011Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 82501.23,
		"hash": "2601a1e07033d7cf334281c573e449ed79026dd7e04f9a163e85d92f108d953c"
	},
	{
		"id": "c988ec3f24dc",
		"ts": "2026-08-07T23:30:03.340Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1797349.66,
		"hash": "c988ec3f24dcff6a745627ce32a8f990248c60a4864933dedb9cad35d796ffaf"
	},
	{
		"id": "2bd07dda6bcc",
		"ts": "2026-08-07T22:30:39.905Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115521842,
		"hash": "2bd07dda6bccad2ba38bbc1a01b60118919ccc4f67d225ebcfe5f6f1987b4c99"
	},
	{
		"id": "097e151fd2b5",
		"ts": "2026-08-07T22:30:40.319Z",
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
		"liquidityUsd": 16531051.9,
		"hash": "097e151fd2b5d60bc3250370e1ff2706786e723acf6a088df80ee3b5df44be03"
	},
	{
		"id": "9e6bb25e2d86",
		"ts": "2026-08-07T22:30:40.548Z",
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
		"liquidityUsd": 1048634.39,
		"hash": "9e6bb25e2d867c17a992e8023ed9205ec5692029b19cf808ad6f6b2eee874a3f"
	},
	{
		"id": "52a7a4c34a52",
		"ts": "2026-08-07T22:30:40.778Z",
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
		"liquidityUsd": 27442494.5,
		"hash": "52a7a4c34a52a8c284ac50535831333854589cc6c67e15c21bc582593310da06"
	},
	{
		"id": "9bb3b8b85dc2",
		"ts": "2026-08-07T22:30:41.005Z",
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
		"liquidityUsd": 4404960.54,
		"hash": "9bb3b8b85dc2ac40af2d19f01a346e6414b6e75e7fd1e7b41fc6a1ee448398c4"
	},
	{
		"id": "99a941e93116",
		"ts": "2026-08-07T22:30:41.233Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 922623.23,
		"hash": "99a941e931162a351b34c0c107764ffa44ce51e33887a91c1b338d123dbf6b26"
	},
	{
		"id": "1a2aa316cbb6",
		"ts": "2026-08-07T22:30:41.459Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27442494.5,
		"hash": "1a2aa316cbb682178ba6015d3e9d9a9bf4b58f6a64d6ebf606a6460fb6c42ee8"
	}
]
