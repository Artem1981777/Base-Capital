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
	"updatedAt": "2026-08-02T08:16:53.890Z",
	"tokensScored": 6893,
	"verdictsIssued": 6893,
	"safe": 6020,
	"risky": 532,
	"likelyRug": 341,
	"ticks": 421
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "1182adac37db",
		"ts": "2026-08-02T08:16:50.107Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112454935.51,
		"hash": "1182adac37dbb2a33e3d34bce40a74dc175f8b07a1e82d44553833ee20d8bd77"
	},
	{
		"id": "3befe6d5cceb",
		"ts": "2026-08-02T08:16:50.558Z",
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
		"liquidityUsd": 17125851.86,
		"hash": "3befe6d5cceb5d810d9a14865a45812c5e7f517879c6752b429ab42b2008089d"
	},
	{
		"id": "9e8c2287468d",
		"ts": "2026-08-02T08:16:50.806Z",
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
		"liquidityUsd": 1127293.31,
		"hash": "9e8c2287468d49aaf2e49e29ba847721f1f68c3893c1dae620e724249db7b9d6"
	},
	{
		"id": "e430ae757686",
		"ts": "2026-08-02T08:16:51.069Z",
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
		"liquidityUsd": 24656204.21,
		"hash": "e430ae757686d8275795ee4582e6b21ef841290bd4262595648fd6f003eda134"
	},
	{
		"id": "8131a7d48eeb",
		"ts": "2026-08-02T08:16:51.312Z",
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
		"liquidityUsd": 4426978.5,
		"hash": "8131a7d48eeb4723a2401c95e888696b905506dcb8dd0329a5e46ba7fa7aa1ca"
	},
	{
		"id": "251dd0feff99",
		"ts": "2026-08-02T08:16:51.556Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 899652.51,
		"hash": "251dd0feff9948a6d9c03b944a72a268bcb2952c5b3ce97f4fc4796cd8f96cc5"
	},
	{
		"id": "d1c16be44142",
		"ts": "2026-08-02T08:16:51.794Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 907362.44,
		"hash": "d1c16be441424d567193669e019597d7f65dca3939e156d5f9eb50391cc2fd42"
	},
	{
		"id": "34c1444eb195",
		"ts": "2026-08-02T08:16:52.035Z",
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
		"liquidityUsd": 4232065.04,
		"hash": "34c1444eb195f7a39c5d56325c0ebac7c6f0a85ae094100c12149269290f2f93"
	},
	{
		"id": "0dd779c65603",
		"ts": "2026-08-02T08:16:52.278Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 550567.15,
		"hash": "0dd779c65603adab30ea8aa4e8c8b041d2c381aedd6426b7a3af39301325043c"
	},
	{
		"id": "14652632daa5",
		"ts": "2026-08-02T08:16:52.528Z",
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
		"liquidityUsd": 9384241.99,
		"hash": "14652632daa590094e9a29b736f0d270e2d504c1942c31a6091c5335201f47ac"
	},
	{
		"id": "7286cab1ba47",
		"ts": "2026-08-02T08:16:52.756Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 377324.78,
		"hash": "7286cab1ba47ac660f0e3420db3a555580ef301bc4ffb941bdd18d3959233aa8"
	},
	{
		"id": "b9bcafbda690",
		"ts": "2026-08-02T08:16:52.983Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4650104.12,
		"hash": "b9bcafbda6900ee489497d416da7ad5773bc7b4df140c002716266a702a9a321"
	},
	{
		"id": "fad68a0e0302",
		"ts": "2026-08-02T08:16:53.209Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 749271.37,
		"hash": "fad68a0e0302dd0ca35087e9f2cd986f6239b67a714cb861c83e802c2bb3f8e7"
	},
	{
		"id": "d7ea599aa818",
		"ts": "2026-08-02T08:16:53.437Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 286468.99,
		"hash": "d7ea599aa81880ff3ccec14af142e55973f425cdf9efec1a4152c2467a34f10d"
	},
	{
		"id": "b59dd5814953",
		"ts": "2026-08-02T08:16:53.664Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 148283.13,
		"hash": "b59dd5814953d3854455f91b2e3d714dba7b2c1fe7b3b849e7f713c5a7b45ebd"
	},
	{
		"id": "e140e2a32ff3",
		"ts": "2026-08-02T08:16:53.889Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1863998.83,
		"hash": "e140e2a32ff3aa64732084fb20c2eac72bc463c7fa9707cf0d68a2148a5bd579"
	},
	{
		"id": "83ee6d348e8a",
		"ts": "2026-08-02T05:53:21.932Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112498832.49,
		"hash": "83ee6d348e8aeb646d1c4a5f525bf594cbac50ed195f1a64a05ea56710406b15"
	},
	{
		"id": "1e780b4e0c9b",
		"ts": "2026-08-02T05:53:22.377Z",
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
		"liquidityUsd": 17121031.79,
		"hash": "1e780b4e0c9b38478c446782b86a6d9fea252c8449beb4ce02a612b8b4d4ed55"
	},
	{
		"id": "2e15196807c8",
		"ts": "2026-08-02T05:53:22.621Z",
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
		"liquidityUsd": 1128691.44,
		"hash": "2e15196807c802c19a762a0942c5e87a365f39d7ab4f529b9e083060cae30a4a"
	},
	{
		"id": "acd558024653",
		"ts": "2026-08-02T05:53:23.080Z",
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
		"liquidityUsd": 24893468.71,
		"hash": "acd5580246530b81941fb32a8e668c138cb418068f60e9b326e69081c32bc5ea"
	},
	{
		"id": "13ddc80b0a9a",
		"ts": "2026-08-02T05:53:23.320Z",
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
		"liquidityUsd": 4391601.4,
		"hash": "13ddc80b0a9ad103ab4529d30476fb9f4f4579e3e8fc922c7dd0e4f3c5b20769"
	},
	{
		"id": "5e4ca6e2afda",
		"ts": "2026-08-02T05:53:23.566Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 904762.09,
		"hash": "5e4ca6e2afda37777954cc4eb3d12b7c52e654872d040175240ad95a387f0d22"
	},
	{
		"id": "22854a4919d6",
		"ts": "2026-08-02T05:53:23.804Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 907362.44,
		"hash": "22854a4919d6b1b9e58abb1e5da6e036b02153f402fb6794ae143dfc9c610330"
	},
	{
		"id": "89294eed0b79",
		"ts": "2026-08-02T05:53:24.064Z",
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
		"liquidityUsd": 4229398.8,
		"hash": "89294eed0b790a2e5425d9943e459f0646275eaa3ef378d4e3bff2b7808d65a2"
	},
	{
		"id": "c60e1093c37d",
		"ts": "2026-08-02T05:53:24.307Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 550950.68,
		"hash": "c60e1093c37db395f0bda20bf39555d52a84563db1feb7294ec4bc9b76dc0c27"
	},
	{
		"id": "63d90e153c61",
		"ts": "2026-08-02T05:53:24.556Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 379757.95,
		"hash": "63d90e153c613a05cbee64dde73af9a629d5268a2ffdbedbd82ac4c8bd38f05a"
	},
	{
		"id": "946eac0685c8",
		"ts": "2026-08-02T05:53:24.780Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 758364.53,
		"hash": "946eac0685c8be9eb5b8d7f3e7bcceff9f8b1a35841aa69c50012610f1c4fc24"
	},
	{
		"id": "31c7a402066b",
		"ts": "2026-08-02T05:53:25.006Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9386685.59,
		"hash": "31c7a402066bcdb3f93ae8b6a8c81b805eb1c304d70929bfbc318f5862901dfb"
	},
	{
		"id": "21ab83cdf279",
		"ts": "2026-08-02T05:53:25.229Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 143324.62,
		"hash": "21ab83cdf279f3087136357332bdc9f6a85a9b64b50aa0eac0ded88ecd8977a9"
	},
	{
		"id": "4ba061b6d1b1",
		"ts": "2026-08-02T05:53:25.457Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1845487.12,
		"hash": "4ba061b6d1b1f873217702bcd01ecf72af1fdef54f881b1a53de1cd4a606e35d"
	},
	{
		"id": "a87007a577dd",
		"ts": "2026-08-02T05:53:25.682Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4326446.61,
		"hash": "a87007a577dd1ac00208bb07cf2b706e060b5b03c961fa6875ebb34d76dae35c"
	},
	{
		"id": "2505d38939ea",
		"ts": "2026-08-02T02:26:02.233Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112438223.91,
		"hash": "2505d38939ea32ef1a1240d2b85436d5f47f15652851e9aa5563692d0ebf6293"
	},
	{
		"id": "9447543775c2",
		"ts": "2026-08-02T02:26:02.525Z",
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
		"liquidityUsd": 14000825.34,
		"hash": "9447543775c21c9d206139da098820156a3dd98abf9a80731fd935347e9a6e74"
	},
	{
		"id": "76a28b4b5357",
		"ts": "2026-08-02T02:26:02.782Z",
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
		"liquidityUsd": 1123683.6,
		"hash": "76a28b4b53572627e63aaf703a97e7b28ed0fc66ff5c8ac3dc32f2db6eb48caa"
	},
	{
		"id": "d183911a03f6",
		"ts": "2026-08-02T02:26:03.041Z",
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
		"liquidityUsd": 24793689.21,
		"hash": "d183911a03f649d8b20b22d3193b1dd24e54afb29b950603c66b451bc4b153df"
	},
	{
		"id": "b8f8557661f2",
		"ts": "2026-08-02T02:26:03.312Z",
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
		"liquidityUsd": 4388827.51,
		"hash": "b8f8557661f2c5d9d6d7a36e2f564425406c7f1991d9524133c00682e4e9ac75"
	},
	{
		"id": "da4e4cab9e76",
		"ts": "2026-08-02T02:26:03.615Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 904693.79,
		"hash": "da4e4cab9e76a9bea34cda97f3499c6662b4416e526267ad21e07dcad5ea19a4"
	},
	{
		"id": "ae8009a484e1",
		"ts": "2026-08-02T02:26:03.854Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24793689.21,
		"hash": "ae8009a484e1aec08ff5c519d83fc53add1054d1e2dd118fbdd2165abea6901e"
	},
	{
		"id": "05d1aff34f9c",
		"ts": "2026-08-02T02:26:04.119Z",
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
		"liquidityUsd": 4237154.32,
		"hash": "05d1aff34f9c3b57436c76db378d1f9b83f43fd7ff99ab200697370fdf1dcba5"
	},
	{
		"id": "be49bf5c818b",
		"ts": "2026-08-02T02:26:04.388Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1852159.61,
		"hash": "be49bf5c818be7cf0f548507478e306433201aff281c9e6bb0aaba97d8846249"
	},
	{
		"id": "57c92bba6a97",
		"ts": "2026-08-02T02:26:04.660Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 485193.78,
		"hash": "57c92bba6a97d8efb63f36e3a14ded1318e03c6d9ead98549c4e2d38426eeb4f"
	},
	{
		"id": "f2fc01c1068b",
		"ts": "2026-08-02T02:26:04.879Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9405543.18,
		"hash": "f2fc01c1068b26890903bad0519d242ba9d1c5d53f7ef2e88fb2d65b8af11821"
	},
	{
		"id": "862c843d2766",
		"ts": "2026-08-02T02:26:05.095Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 147958.34,
		"hash": "862c843d27666aebe375ce22a6e7d2a91bb645bccf28b8c9c916450e28cb6e29"
	},
	{
		"id": "b8f1575f561d",
		"ts": "2026-08-02T02:26:05.311Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 742844.5,
		"hash": "b8f1575f561dda84713b9ae1228e1c537837a36651eda1bdbd8623b8c4794d84"
	},
	{
		"id": "1eafa1d73f77",
		"ts": "2026-08-02T02:26:05.526Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4329553.17,
		"hash": "1eafa1d73f77eca088cbee48144589ea724b7107396f047cc26ea99b73932f1a"
	},
	{
		"id": "51d2adff4dab",
		"ts": "2026-08-02T02:26:05.743Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1057555.27,
		"hash": "51d2adff4dab4a0ef996fa03c8798838e9a4bd93fd74b9ed738e166b88422486"
	},
	{
		"id": "69254860c115",
		"ts": "2026-08-01T23:54:18.913Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110975550.61,
		"hash": "69254860c115caff98b2c8a86f4da24c4c31caa445d08af0158ec2ff8bc60592"
	},
	{
		"id": "dc1ac034dd7a",
		"ts": "2026-08-01T23:54:19.258Z",
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
		"liquidityUsd": 17723054.62,
		"hash": "dc1ac034dd7a654db91f88fed73d7aff9498fdc9b8442898d16aed427896c00b"
	},
	{
		"id": "ebba65966d25",
		"ts": "2026-08-01T23:54:19.514Z",
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
		"liquidityUsd": 1108651.09,
		"hash": "ebba65966d252c0fa54894bace892f1c3ebebcac7f4fce8a48068fe2543bc5e8"
	},
	{
		"id": "b0f718f9aba9",
		"ts": "2026-08-01T23:54:19.713Z",
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
		"liquidityUsd": 24594639.65,
		"hash": "b0f718f9aba94848f173507890f6cbde61cc6f54bedf422311478f36c3205e9d"
	},
	{
		"id": "3add2230e7be",
		"ts": "2026-08-01T23:54:19.972Z",
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
		"liquidityUsd": 4312632.73,
		"hash": "3add2230e7be52d5229ba6cf9eec3ff6876a4d03c6f16b725f8a03ac464a92c5"
	},
	{
		"id": "2ce4dfb5f910",
		"ts": "2026-08-01T23:54:20.173Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 887388.22,
		"hash": "2ce4dfb5f9100a66611de6c0ee9a4993cd29da9ab8cec2f5980ba711008a9468"
	},
	{
		"id": "dc230474bbc4",
		"ts": "2026-08-01T23:54:20.372Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24594639.65,
		"hash": "dc230474bbc440c72503d4a016ae99c53e4e6dfc4a387336f329ca96edba2eb6"
	},
	{
		"id": "4e5e9fb48b2d",
		"ts": "2026-08-01T23:54:20.575Z",
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
		"liquidityUsd": 4160550.14,
		"hash": "4e5e9fb48b2d3a9a03269c0b579f482a849fcc9312213596ea900ee7f9dce848"
	},
	{
		"id": "f27745efb582",
		"ts": "2026-08-01T23:54:20.774Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1829321.79,
		"hash": "f27745efb582ccbce3d775476ddaa6324e8e07709f6462ec0bbf9751eb5d5c04"
	},
	{
		"id": "7d8bc653feca",
		"ts": "2026-08-01T23:54:20.976Z",
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
		"liquidityUsd": 9224158.08,
		"hash": "7d8bc653feca474ad630fbaf555c1abe5513bf6d428618760824152c1af03e20"
	},
	{
		"id": "fbd5cb354c08",
		"ts": "2026-08-01T23:54:21.174Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 470767.31,
		"hash": "fbd5cb354c08057cf05fc3d99288d0d26e13a8cfe5f6fcc73852d4d7fb297fd4"
	},
	{
		"id": "3ba684f81cae",
		"ts": "2026-08-01T23:54:21.421Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 147721.67,
		"hash": "3ba684f81caed67ea7ba8df657c31609e306522b1af4d93d86916f683debfbcd"
	},
	{
		"id": "d85660db7392",
		"ts": "2026-08-01T23:54:21.629Z",
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
		"liquidityUsd": 558286.65,
		"hash": "d85660db7392be693e4e93d86bef3a6f0b2d094aa9108953aa8d418b9328dc5c"
	},
	{
		"id": "690b2029a41c",
		"ts": "2026-08-01T23:54:21.828Z",
		"symbol": "OMI",
		"token": "0x3792DBDD07e87413247DF995e692806aa13D3299",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 248356.17,
		"hash": "690b2029a41ca74927b37d8d7fe1cb1b2d0fa6efe54d1f6ada87f300515fe0a4"
	},
	{
		"id": "ceca0ea28d0a",
		"ts": "2026-08-01T23:54:22.031Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1061593.48,
		"hash": "ceca0ea28d0ac701118bfaa579836634f79efe2cb99c5b1c982bc85c163f60b0"
	},
	{
		"id": "e633a14557d6",
		"ts": "2026-08-01T22:52:06.069Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111017044.46,
		"hash": "e633a14557d642e5c86de9438b7666a26222fe02cbb3abf456a182a0f3e2ed0a"
	},
	{
		"id": "f94b69ffce1f",
		"ts": "2026-08-01T22:52:06.409Z",
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
		"liquidityUsd": 17818486.71,
		"hash": "f94b69ffce1f4d800c1a3257dfe4271ac65a7ad6f3650ee5f58cfde609511ffd"
	},
	{
		"id": "43943e0f278b",
		"ts": "2026-08-01T22:52:06.602Z",
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
		"liquidityUsd": 1110277.12,
		"hash": "43943e0f278bc2fb7ebbdf57f736dbaeeaf30cdc34f15b9d9421760711f775f4"
	},
	{
		"id": "f927dbea7b12",
		"ts": "2026-08-01T22:52:06.805Z",
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
		"liquidityUsd": 25055512.57,
		"hash": "f927dbea7b12320a3f473dc66b13fc65ea06a4cb2d23d8e1cbe8afd483b35fe3"
	},
	{
		"id": "c319fece0a22",
		"ts": "2026-08-01T22:52:07.012Z",
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
		"liquidityUsd": 4303858.15,
		"hash": "c319fece0a2291e423c2d2c9989172494bb363e79f4f8cfd2dadaa167489213b"
	},
	{
		"id": "2da76f15b79a",
		"ts": "2026-08-01T22:52:07.226Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 881919.06,
		"hash": "2da76f15b79a9e1d36ea78e08d0a9464145648ecf94a12fb951ebf1fc598ec9b"
	},
	{
		"id": "2ad78da0de4b",
		"ts": "2026-08-01T22:52:07.435Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25055512.57,
		"hash": "2ad78da0de4bf55bfb7def3e885a0508b991641a0f9e505ce5cd154ecf4a904c"
	},
	{
		"id": "5a3839f68426",
		"ts": "2026-08-01T22:52:07.870Z",
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
		"liquidityUsd": 4167584.67,
		"hash": "5a3839f6842686b3cc2117f72b60b685f0175440e11260d4ca26320bccb674b5"
	},
	{
		"id": "c7ddcf038eb9",
		"ts": "2026-08-01T22:52:08.071Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1831177.02,
		"hash": "c7ddcf038eb91c91b7182f2efdf020d992ad8e8e662d86edf48508ccd024583d"
	},
	{
		"id": "daa50530367c",
		"ts": "2026-08-01T22:52:08.278Z",
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
		"liquidityUsd": 9262738.32,
		"hash": "daa50530367c621182873f5c485b9ca89ce86694f13d17f78467560c3a56e75d"
	},
	{
		"id": "4de1886c37af",
		"ts": "2026-08-01T22:52:08.483Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 486753.72,
		"hash": "4de1886c37afe14dc8ffe19f466c149382509686132b6b9d1f545947b3322c57"
	},
	{
		"id": "b5da9fcd61a1",
		"ts": "2026-08-01T22:52:08.754Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 148978.69,
		"hash": "b5da9fcd61a16da8413d823a8da0f83fd881942cbbe296925683cc0084827d09"
	},
	{
		"id": "a2194b687488",
		"ts": "2026-08-01T22:52:08.977Z",
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
		"liquidityUsd": 559421.03,
		"hash": "a2194b687488b42f36cf91585d5988f82847dc2ea11dbdff30ba070288bc4ff6"
	},
	{
		"id": "97eb84378ab1",
		"ts": "2026-08-01T22:52:09.171Z",
		"symbol": "OMI",
		"token": "0x3792DBDD07e87413247DF995e692806aa13D3299",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 246290.47,
		"hash": "97eb84378ab1054448479eae6b1e37c35643b75c076a7255d76960f3246d837e"
	},
	{
		"id": "99b5d4be28d5",
		"ts": "2026-08-01T22:52:09.369Z",
		"symbol": "CLANKER",
		"token": "0x1bc0c42215582d5A085795f4baDbaC3ff36d1Bcb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1374735.29,
		"hash": "99b5d4be28d5af18458dbb04de7dff617b6400ae5839a5645e511e97b55f1914"
	},
	{
		"id": "f210d4f1d3ab",
		"ts": "2026-08-01T22:52:09.569Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4280394.95,
		"hash": "f210d4f1d3ab084995385b4a96e46e128adabaa9efc2d54fc97f0df8faeb8ea4"
	},
	{
		"id": "a66465258e94",
		"ts": "2026-08-01T21:51:34.038Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110858580.9,
		"hash": "a66465258e94d456f7f14a5a2afd4b9a81e92ae33b73efd12a294310ca249cc9"
	},
	{
		"id": "16f67b6fdce0",
		"ts": "2026-08-01T21:51:34.531Z",
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
		"liquidityUsd": 17225196.8,
		"hash": "16f67b6fdce09f7b72752a13f51c4e92a6f076192efbf4e6d9d66f84dcb62e60"
	},
	{
		"id": "94cf2d52b2e1",
		"ts": "2026-08-01T21:51:34.810Z",
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
		"liquidityUsd": 1112319.9,
		"hash": "94cf2d52b2e199ffe697d1d43156fc50c46f1fcf90f4a676566dfa29452074d9"
	},
	{
		"id": "fce66e037220",
		"ts": "2026-08-01T21:51:35.093Z",
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
		"liquidityUsd": 25055596.1,
		"hash": "fce66e03722090ae4f313bc896c06572de3e685855ccebac1aee746df2461c61"
	},
	{
		"id": "2126525b7a3d",
		"ts": "2026-08-01T21:51:35.434Z",
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
		"liquidityUsd": 4288415.94,
		"hash": "2126525b7a3d19c10fac28d2fb06e3cc083541652d57f982c1421d635a5023ed"
	},
	{
		"id": "26816456593a",
		"ts": "2026-08-01T21:51:35.698Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 881919.06,
		"hash": "26816456593a671c2b67a1f449ff95f77c6049bcb40b37fccabbffa0767d242d"
	},
	{
		"id": "79ca1490f0c9",
		"ts": "2026-08-01T21:51:35.970Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25055596.1,
		"hash": "79ca1490f0c9d9159b312fb55abfdf1279bdf178c37bda4958ec66cea5690f00"
	},
	{
		"id": "17e87b2e0bd8",
		"ts": "2026-08-01T21:51:36.236Z",
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
		"liquidityUsd": 4158935.05,
		"hash": "17e87b2e0bd85d6b2afe1551d39c33666d359eed5fe10e58275d2d5408f97481"
	},
	{
		"id": "2b4c397a6c75",
		"ts": "2026-08-01T21:51:36.500Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1813626.73,
		"hash": "2b4c397a6c75bb565bdab5aec278efb3c7f12676a0ca93cd6084c9bc5fbb6dcc"
	},
	{
		"id": "52813494aeff",
		"ts": "2026-08-01T21:51:36.766Z",
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
		"liquidityUsd": 9272374.67,
		"hash": "52813494aeffb7f688c5b1fbfcd8b04d108f562a757ebb16191aebfb83a8cfb4"
	},
	{
		"id": "9eec60b2c083",
		"ts": "2026-08-01T21:51:37.012Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 485894.9,
		"hash": "9eec60b2c083d4f57577f71cb27afdcbd9357e8bd9b22f6e6c6b1d72f6d74b99"
	},
	{
		"id": "93865e611b45",
		"ts": "2026-08-01T21:51:37.263Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 745311.8,
		"hash": "93865e611b458e10b95c094af1a3b0f41e2e7593744a22197b234ab7ad79149a"
	},
	{
		"id": "efa494e00bb8",
		"ts": "2026-08-01T21:51:37.509Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 149653.7,
		"hash": "efa494e00bb84f0eb8ae7a6a58c94c9da50a128f5b16ce6e10495c4bc2dacb9e"
	},
	{
		"id": "2fe83c0407bc",
		"ts": "2026-08-01T21:51:37.759Z",
		"symbol": "OMI",
		"token": "0x3792DBDD07e87413247DF995e692806aa13D3299",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 245782.5,
		"hash": "2fe83c0407bc2f0d2f544692e5d24c6f53f1261f66117f9414423a80b2c37ffe"
	},
	{
		"id": "c1e030b853cb",
		"ts": "2026-08-01T21:51:38.005Z",
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
		"liquidityUsd": 559207.18,
		"hash": "c1e030b853cb0d2009a002a0110cf6d8f7a72e53438540278624eff4b4496b38"
	},
	{
		"id": "38dc089e8f83",
		"ts": "2026-08-01T21:51:38.254Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1718835.71,
		"hash": "38dc089e8f83d5d3d1a569498d61e98808708d684b814408a6df1057a00a79b5"
	},
	{
		"id": "2f4821edbf98",
		"ts": "2026-08-01T21:51:38.510Z",
		"symbol": "CLANKER",
		"token": "0x1bc0c42215582d5A085795f4baDbaC3ff36d1Bcb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1371625.52,
		"hash": "2f4821edbf98319d7e4ab86873e74c815a416648673d6e738dd6e929433db31c"
	},
	{
		"id": "257c9946ca96",
		"ts": "2026-08-01T20:46:28.035Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110590827.48,
		"hash": "257c9946ca9694c21cd22a962bd4f3acb15c63a515afe8f9277fe548b0e2fd3c"
	},
	{
		"id": "0272e6562ee4",
		"ts": "2026-08-01T20:46:28.686Z",
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
		"liquidityUsd": 17313172.9,
		"hash": "0272e6562ee48f7491ce035038582e345343c8c9ed4cdc93fa805bfa71eda37c"
	},
	{
		"id": "763c19e0a374",
		"ts": "2026-08-01T20:46:29.138Z",
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
		"liquidityUsd": 1107488.88,
		"hash": "763c19e0a3748e4b497107200654be61006672f18b5c56dfa52a74352c1c3ffc"
	},
	{
		"id": "d613210d5cf4",
		"ts": "2026-08-01T20:46:29.627Z",
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
		"liquidityUsd": 25026245.26,
		"hash": "d613210d5cf416068f7208beb4b96e58c1cd34e1c44cb2581dd2c6e09026a6e5"
	},
	{
		"id": "18b05fa308f1",
		"ts": "2026-08-01T20:46:30.070Z",
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
		"liquidityUsd": 4284545.6,
		"hash": "18b05fa308f1547cca8ca00d88cc1517c3da8171089ca65a4a120a9fb5c9419d"
	},
	{
		"id": "e4626d29d2fb",
		"ts": "2026-08-01T20:46:30.312Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 881919.06,
		"hash": "e4626d29d2fb2458fb4bf4e59776b05009e4ef92a88bc3679c1195ce7f596d2d"
	},
	{
		"id": "1813d330b828",
		"ts": "2026-08-01T20:46:30.551Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25026245.26,
		"hash": "1813d330b828895ed04eb1bd87f0b4627ad822b64b0d578045239eaae8483de8"
	},
	{
		"id": "680bbbd1a981",
		"ts": "2026-08-01T20:46:30.799Z",
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
		"liquidityUsd": 4135977.76,
		"hash": "680bbbd1a9814085dabcb2236b63bc5b15648578850b1ebade1c58e2f47ff84c"
	},
	{
		"id": "16b4992d3cd0",
		"ts": "2026-08-01T20:46:31.047Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1804830.05,
		"hash": "16b4992d3cd02fd715ac4cac7bf81045f2dc29438b654476ca1190bc64c736a8"
	},
	{
		"id": "e0c4907dfd6b",
		"ts": "2026-08-01T20:46:31.287Z",
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
		"liquidityUsd": 9183990.73,
		"hash": "e0c4907dfd6bc8432168f1e1fdca75a54a4afc05eb8cd16dff0e27b7cd6ed994"
	},
	{
		"id": "869d2c8c6a4b",
		"ts": "2026-08-01T20:46:31.506Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 481775.39,
		"hash": "869d2c8c6a4bdc43e663a196b5e0e20d816548fd5b131b1119c743cff3d37678"
	},
	{
		"id": "5120db998fe3",
		"ts": "2026-08-01T20:46:31.729Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 747205.36,
		"hash": "5120db998fe34107f76ce0458252bddd410d3d0340f3ab60acac4b0465b679c1"
	},
	{
		"id": "98d2eb295209",
		"ts": "2026-08-01T20:46:31.948Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 149301.26,
		"hash": "98d2eb2952094db3abd5176c180d0f555df89c24cd1257a17828008078cc670e"
	},
	{
		"id": "61484081b1b2",
		"ts": "2026-08-01T20:46:32.170Z",
		"symbol": "OMI",
		"token": "0x3792DBDD07e87413247DF995e692806aa13D3299",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 244696.28,
		"hash": "61484081b1b2d1b9ca5f69f847b0ce451c0d4d87983028bcd7c8872bcc27a18a"
	},
	{
		"id": "e8824befc408",
		"ts": "2026-08-01T20:46:32.392Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1712499.26,
		"hash": "e8824befc408a76eee95360f6da2569238b8ee68dde940ca0e22df961ad80f63"
	},
	{
		"id": "b58a85f9f606",
		"ts": "2026-08-01T20:46:32.617Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 306419.84,
		"hash": "b58a85f9f606c349a16939dc34e39171447266d09138589cd06bf9eae5513177"
	},
	{
		"id": "62fc1c2d39fb",
		"ts": "2026-08-01T20:46:32.838Z",
		"symbol": "CLANKER",
		"token": "0x1bc0c42215582d5A085795f4baDbaC3ff36d1Bcb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1364907.53,
		"hash": "62fc1c2d39fb32ec839170acb81cc89c3e0db4155921104a46ac29cba3794b29"
	},
	{
		"id": "db7082dfef4e",
		"ts": "2026-08-01T19:08:44.133Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110489301.53,
		"hash": "db7082dfef4ed83ecd6f440de4501daf79a6bf65a1e6883bc4a98b3ce8bb550d"
	},
	{
		"id": "a6a1b7a34ba2",
		"ts": "2026-08-01T19:08:44.374Z",
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
		"liquidityUsd": 16349360.28,
		"hash": "a6a1b7a34ba20ed041f6a624dbd62b4235e9b4ab49c84e504311f1697fbe260b"
	},
	{
		"id": "0eff3ce255d5",
		"ts": "2026-08-01T19:08:44.610Z",
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
		"liquidityUsd": 1112413.24,
		"hash": "0eff3ce255d55c325a1f80779d99d6d5f347b7de28ef34d4abf11a39c2c616f5"
	},
	{
		"id": "9578b38abfdd",
		"ts": "2026-08-01T19:08:44.842Z",
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
		"liquidityUsd": 25097581.92,
		"hash": "9578b38abfddde72b4ad83168b539da287fb082b4aac06843ebab2a3d434f2c1"
	},
	{
		"id": "756e87248bf1",
		"ts": "2026-08-01T19:08:45.345Z",
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
		"liquidityUsd": 4352783.75,
		"hash": "756e87248bf179094c2d267be0371377d487ddd6d31b97e942d9511855c7a694"
	},
	{
		"id": "a367a0f17be2",
		"ts": "2026-08-01T19:08:45.582Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 905335.96,
		"hash": "a367a0f17be21c6553008e46a2e8e671afcee848978d9d60c75e2eb026ef8a51"
	},
	{
		"id": "fa6361c37a68",
		"ts": "2026-08-01T19:08:45.814Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25097581.92,
		"hash": "fa6361c37a68a23862e541f91d6eefb8e51ddf94c776fd05f15bcbcd220ee2da"
	},
	{
		"id": "2b3937c529ab",
		"ts": "2026-08-01T19:08:46.045Z",
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
		"liquidityUsd": 4141250.55,
		"hash": "2b3937c529ab48ab4899e74009a419e319a55ce1cdc79f1347eca6701208ecfe"
	},
	{
		"id": "cbd25c625b9c",
		"ts": "2026-08-01T19:08:46.286Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1809327.41,
		"hash": "cbd25c625b9c4df81e2698c8afe4a2049c71e30d5172968a9f58620d5d1bd4c7"
	},
	{
		"id": "b3b264f52ba4",
		"ts": "2026-08-01T19:08:46.552Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 482701.94,
		"hash": "b3b264f52ba4f9c338f55a5ca12e33ce9e1d0fc64b2bedaf82e76c3ffabe6cc1"
	},
	{
		"id": "0118050a33e8",
		"ts": "2026-08-01T19:08:46.772Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9281787.81,
		"hash": "0118050a33e8f718c2e0b89e63ef8c8d25ba6be34ed1f8e726cb784be1fe8cb9"
	},
	{
		"id": "f9ec0a87876a",
		"ts": "2026-08-01T19:08:46.988Z",
		"symbol": "OMI",
		"token": "0x3792DBDD07e87413247DF995e692806aa13D3299",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 247419.8,
		"hash": "f9ec0a87876a1b76c4d46a3d9f9a22507e101ded4cc50ed7830eed642b3bad34"
	},
	{
		"id": "092e494d9e30",
		"ts": "2026-08-01T19:08:47.211Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 149424.66,
		"hash": "092e494d9e30b2f32ecb96c263f07f534e449996c1ee5b3375138adc872329a7"
	},
	{
		"id": "f526b97742a4",
		"ts": "2026-08-01T19:08:47.431Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 745897.07,
		"hash": "f526b97742a43d50ba6c7b0c2aef6e5bfbbe466007a6679e1c67740ee1c564c9"
	},
	{
		"id": "035525285c72",
		"ts": "2026-08-01T19:08:47.648Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 311465.85,
		"hash": "035525285c723d4ffe97ca498fd12f80eb8985a67a34576f2dd0ce5aa7728c6e"
	},
	{
		"id": "2fd70271e89e",
		"ts": "2026-08-01T19:08:47.869Z",
		"symbol": "CLANKER",
		"token": "0x1bc0c42215582d5A085795f4baDbaC3ff36d1Bcb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1358989.34,
		"hash": "2fd70271e89efa8dc24242cbb0bd5edbc562f994c70b7ab747766b69da51078d"
	},
	{
		"id": "b90bf6bd1c8c",
		"ts": "2026-08-01T19:08:48.089Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1713964.55,
		"hash": "b90bf6bd1c8c37ed1b58fa8b59040743a20e2df293d20140153342a9ab626a8b"
	},
	{
		"id": "1f0b6a3ffff0",
		"ts": "2026-08-01T17:57:03.825Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111753100.5,
		"hash": "1f0b6a3ffff008fb003b0c519e32206be801281e50dd86de42eaab13d38db449"
	},
	{
		"id": "dfdb08670175",
		"ts": "2026-08-01T17:57:04.118Z",
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
		"liquidityUsd": 18153448.67,
		"hash": "dfdb08670175a64188d98631e9463d88852c0c979dead646b934d2067a47290b"
	},
	{
		"id": "1b7c47339825",
		"ts": "2026-08-01T17:57:04.412Z",
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
		"liquidityUsd": 1120441.74,
		"hash": "1b7c4733982537c272a81aed11b54086c015a642c2ef7926259568cdd20d435d"
	},
	{
		"id": "1da1df8fd31c",
		"ts": "2026-08-01T17:57:04.669Z",
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
		"liquidityUsd": 25218763.24,
		"hash": "1da1df8fd31c855bc60f8e1a2e61cb9d642ae4ffbfe90525cef770b1cd54beda"
	},
	{
		"id": "1f128686c31a",
		"ts": "2026-08-01T17:57:04.934Z",
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
		"liquidityUsd": 4350159.08,
		"hash": "1f128686c31a8b794f45fd27752bb6c427ad6b309d4c2ae6a7ca8d38294336e8"
	},
	{
		"id": "dae12281c5e1",
		"ts": "2026-08-01T17:57:05.364Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 905335.96,
		"hash": "dae12281c5e1288000fd59342c3cc1c204cec3a0175a50d20b11973b7e928ebb"
	},
	{
		"id": "04aacc131d17",
		"ts": "2026-08-01T17:57:05.723Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25218763.24,
		"hash": "04aacc131d172e073b7b55bad72f2357034c14bc678a7db334be33e818657c38"
	},
	{
		"id": "5515cadec219",
		"ts": "2026-08-01T17:57:05.963Z",
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
		"liquidityUsd": 4199506.35,
		"hash": "5515cadec21948a8f1a14c2c45f3994e4ed21ed2ba8bb2927aabff7d82877848"
	},
	{
		"id": "176b7d39d746",
		"ts": "2026-08-01T17:57:06.210Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 489417.51,
		"hash": "176b7d39d74639c95af5cb76db4e2c50445d0c976b385dbe21d1ae2922144790"
	},
	{
		"id": "4eb067e1ae3a",
		"ts": "2026-08-01T17:57:06.473Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1832141.42,
		"hash": "4eb067e1ae3a32376d733b0cd750ac2b21c4772c64a6805455ccdbbd3622f253"
	},
	{
		"id": "9744e8574ba4",
		"ts": "2026-08-01T17:57:06.691Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1071027.75,
		"hash": "9744e8574ba40814bc88f2a33bb111470f120169e9529f6e2e127467b82201c4"
	},
	{
		"id": "a8172f94e34f",
		"ts": "2026-08-01T17:57:06.909Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9414595.34,
		"hash": "a8172f94e34fa836a6396d2eb33dfad5f7e854a240681c71e84542b4b5f99b03"
	},
	{
		"id": "047af0a63402",
		"ts": "2026-08-01T17:57:07.129Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4295374.38,
		"hash": "047af0a63402b33d33259245f541d45ae47d18cbb668110f19d1be2f60d0b0f5"
	},
	{
		"id": "8525827b99ec",
		"ts": "2026-08-01T17:57:07.348Z",
		"symbol": "OMI",
		"token": "0x3792DBDD07e87413247DF995e692806aa13D3299",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 250020.45,
		"hash": "8525827b99ecd2d6c8c2164fba7c137bdcb286219ab31194537be6f042e01597"
	},
	{
		"id": "efec297c2e4b",
		"ts": "2026-08-01T17:57:07.565Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1737794.19,
		"hash": "efec297c2e4bf53e42733fb0fed6a5d80846b073310cf57f4ea499880f0b2327"
	},
	{
		"id": "ecc245b253ac",
		"ts": "2026-08-01T17:57:07.783Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 741814.02,
		"hash": "ecc245b253acff562d93f7f321952df7b58d28c9cfe749a0f1694acf3d06c62d"
	},
	{
		"id": "20e5fdbaae9d",
		"ts": "2026-08-01T17:57:08.000Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 144960.74,
		"hash": "20e5fdbaae9db0188ffc62cf7b9fdcad3fc80872900afa7855f3ecb0e1f5bb48"
	},
	{
		"id": "7770608de352",
		"ts": "2026-08-01T16:01:21.862Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111978247.82,
		"hash": "7770608de35206d25ba89ff19528d11afce9164144dcf4ad941565c492ff7ff4"
	},
	{
		"id": "d7480b10070f",
		"ts": "2026-08-01T16:01:40.540Z",
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
		"liquidityUsd": 14123067.01,
		"hash": "d7480b10070f3c90b0a1346a031423f62a2ff64e97e9064c48c19411c63cc943"
	},
	{
		"id": "6ef74f54d839",
		"ts": "2026-08-01T16:01:59.281Z",
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
		"liquidityUsd": 1123451.29,
		"hash": "6ef74f54d839539f032f402c29d7f2bf65246a8e579f92c226e655289ae1ea5c"
	},
	{
		"id": "98f7178bf3d7",
		"ts": "2026-08-01T16:02:18.038Z",
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
		"liquidityUsd": 25318519.95,
		"hash": "98f7178bf3d7feac6260f63584650f3aa60523f6cbac11d3464e763657e1ad24"
	},
	{
		"id": "aa4e11338227",
		"ts": "2026-08-01T16:02:18.338Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 37,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.26,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 4353885.53,
		"hash": "aa4e11338227dc3d4c11b58f6953c08a6f2e942988e620958c2200e41122664b"
	},
	{
		"id": "c362d97b0004",
		"ts": "2026-08-01T16:02:18.598Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 903076.65,
		"hash": "c362d97b0004803ed5cf67c02a9a30b7d3cdbd9e3c9dc239b7b661d129b3ee4f"
	},
	{
		"id": "55ee88ba99e4",
		"ts": "2026-08-01T16:02:18.844Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25318519.95,
		"hash": "55ee88ba99e44298997928caded15625dfb7ffec9287adfe585ec77bf1d4de06"
	},
	{
		"id": "2f4cb055e04f",
		"ts": "2026-08-01T16:02:19.141Z",
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
		"liquidityUsd": 4218288.46,
		"hash": "2f4cb055e04f3ae88a008fdb4a2b3b1e4057ab5f853521fc68d2407b40285c26"
	},
	{
		"id": "3c6bf94e5eb2",
		"ts": "2026-08-01T16:02:19.402Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 492894.37,
		"hash": "3c6bf94e5eb2bdd2b4332a1c6a62310c1df0ddbfc3e8708697a2b9b43b11eb60"
	},
	{
		"id": "f5d5a2055afa",
		"ts": "2026-08-01T16:02:19.649Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1827251.47,
		"hash": "f5d5a2055afa3741709da50a8718ac1a895068d4bb07795a419ec34ef2d26c24"
	},
	{
		"id": "2a51cfd08419",
		"ts": "2026-08-01T16:02:19.910Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1082531.08,
		"hash": "2a51cfd08419d4dd756de6385632408d7937cc8952eddcd64d0aa86d45485c56"
	},
	{
		"id": "8e18859ed690",
		"ts": "2026-08-01T16:02:20.183Z",
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
		"liquidityUsd": 9403391.98,
		"hash": "8e18859ed690cb50b5f45bd70082417a3826382154cce6ee4e796efdb004ad22"
	},
	{
		"id": "4fd43a32d89f",
		"ts": "2026-08-01T16:02:20.432Z",
		"symbol": "OMI",
		"token": "0x3792DBDD07e87413247DF995e692806aa13D3299",
		"score": 62,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.24,
		"flags": [
			"owner_can_change_balance",
			"mintable",
			"owner_not_renounced"
		],
		"liquidityUsd": 252122.65,
		"hash": "4fd43a32d89f071bbbecab5fbfd00d95c808d1603e17fd1b2733ed31c401158d"
	},
	{
		"id": "36c3df26dce8",
		"ts": "2026-08-01T16:02:20.706Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1743229.47,
		"hash": "36c3df26dce844157abd8e6ec4f05e605dc9f256113c87f6c27d4d39bf2b7a92"
	},
	{
		"id": "989a511cbc43",
		"ts": "2026-08-01T16:02:20.941Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4776567.25,
		"hash": "989a511cbc43da41b962c9d5d20c0dd727d3de20bec159d9521bf8dc3f6fb6e0"
	},
	{
		"id": "17f64a28d153",
		"ts": "2026-08-01T16:02:21.184Z",
		"symbol": "CLANKER",
		"token": "0x1bc0c42215582d5A085795f4baDbaC3ff36d1Bcb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1402042.5,
		"hash": "17f64a28d153b2e8262433a263c458f00593f6bfaaa972bbccc9641cf288bbbb"
	},
	{
		"id": "6dce49c9fabc",
		"ts": "2026-08-01T16:02:21.431Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4397650.5,
		"hash": "6dce49c9fabc0b8675f63dde526c4f0334b59d16d905c69b28e5644d1cd7f9a9"
	},
	{
		"id": "3b6bdc28f6f3",
		"ts": "2026-08-01T14:57:08.837Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111946291.14,
		"hash": "3b6bdc28f6f35ebcc8051017b8f5d34576c1219c957c8a7bc63ef0a3b986a8ff"
	},
	{
		"id": "b105bed881d3",
		"ts": "2026-08-01T14:57:09.087Z",
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
		"liquidityUsd": 16220414.47,
		"hash": "b105bed881d39a5323b6b69aa7f8f4ae3d6978ecdaef0f66f0f2b373b6b999c6"
	},
	{
		"id": "a6215cb1f699",
		"ts": "2026-08-01T14:57:09.338Z",
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
		"liquidityUsd": 1125962.8,
		"hash": "a6215cb1f699d24611c6469dd3d211e938187819f6928d3f911de1b31de57d0d"
	},
	{
		"id": "f13b3574e249",
		"ts": "2026-08-01T14:57:09.580Z",
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
		"liquidityUsd": 25324770.44,
		"hash": "f13b3574e2490d671d3ff34f1fd21532f40a906b4bb959afb5986d433e8d3f56"
	},
	{
		"id": "396d8d5ed1dd",
		"ts": "2026-08-01T14:57:09.829Z",
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
		"liquidityUsd": 4353885.53,
		"hash": "396d8d5ed1dd2b81e09deede03e60e8c33025854a92dd294293618efe22fcafa"
	},
	{
		"id": "4a32d8a8246c",
		"ts": "2026-08-01T14:57:10.082Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 904147.91,
		"hash": "4a32d8a8246c027a32ecc777fbc3b8430fe8d55c229848a2bf3bb06165e28ac1"
	},
	{
		"id": "02fc9fe81538",
		"ts": "2026-08-01T14:57:10.329Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25324770.44,
		"hash": "02fc9fe81538280270df540a18ab2402b93922d788d48b6ef8a726fa3ded9ac2"
	},
	{
		"id": "8e4e2e46233d",
		"ts": "2026-08-01T14:57:10.612Z",
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
		"liquidityUsd": 4221783.34,
		"hash": "8e4e2e46233d9a501e20d45410daa6440fcf2cea13c8ddaad2ca0d0e9b24422c"
	},
	{
		"id": "87cca675a320",
		"ts": "2026-08-01T14:57:10.855Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 508261.98,
		"hash": "87cca675a320d62f015a8c592f6e4e908299af5ec8e78975354c53a3b9c24269"
	},
	{
		"id": "970ef5fddd20",
		"ts": "2026-08-01T14:57:11.097Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1832605.13,
		"hash": "970ef5fddd20fcecda71bbc5da09641ec9eebf87336b293716789577b7447eea"
	},
	{
		"id": "0a0d8dffa11a",
		"ts": "2026-08-01T14:57:11.325Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1082707.91,
		"hash": "0a0d8dffa11a05591af5707fc7b97dcbc8583b69a3a1bd2220969d25d8da5c17"
	},
	{
		"id": "81edb3847c14",
		"ts": "2026-08-01T14:57:11.550Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1740779.02,
		"hash": "81edb3847c147f736198fe0816f93432ad2daa9391de028bf31a9f668009b4b3"
	},
	{
		"id": "961d182f77e7",
		"ts": "2026-08-01T14:57:11.777Z",
		"symbol": "OMI",
		"token": "0x3792DBDD07e87413247DF995e692806aa13D3299",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 254497.79,
		"hash": "961d182f77e73447f62b3b6046e191b04f5a4f91eeadc8d143c17d2617806f85"
	},
	{
		"id": "495c0a5dce18",
		"ts": "2026-08-01T14:57:12.004Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4782352.05,
		"hash": "495c0a5dce1871ad3be43151cc4284bfa7f700601f38c2fc4ee51bc61422c4e4"
	},
	{
		"id": "16161a47572e",
		"ts": "2026-08-01T14:57:12.233Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4392132.63,
		"hash": "16161a47572e0b86e395ffd190544350aa9d295ffbf4ebb5a7f4b82ad4b3c7b8"
	},
	{
		"id": "ebbebd6d2e84",
		"ts": "2026-08-01T13:10:51.318Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111907781.22,
		"hash": "ebbebd6d2e84bc4adbb713ea04e82060ef29131a22727156f780fe60140ae455"
	},
	{
		"id": "0a7b71c4d1f6",
		"ts": "2026-08-01T13:10:51.636Z",
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
		"liquidityUsd": 17017071.31,
		"hash": "0a7b71c4d1f6032f163d671ef968dd586e664ede2fce262b738cbb3faf09ecee"
	},
	{
		"id": "ce5f1c4a8f2a",
		"ts": "2026-08-01T13:10:52.110Z",
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
		"liquidityUsd": 1123128.21,
		"hash": "ce5f1c4a8f2ae8fef59d2b59c731cc1bff65b53a0c8e88747bfb44cacf239e07"
	},
	{
		"id": "5b92133f6d61",
		"ts": "2026-08-01T13:10:52.338Z",
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
		"liquidityUsd": 25386399.16,
		"hash": "5b92133f6d61b0ffcaf3ee151f097e4d237c400bb9a6350e120e56754330fbd2"
	},
	{
		"id": "0f7ae5cfcecb",
		"ts": "2026-08-01T13:10:52.566Z",
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
		"liquidityUsd": 4381180.18,
		"hash": "0f7ae5cfcecb9da5d00f0dd5b586a7ac9c3881d0d537660d12da1c720176e2c3"
	},
	{
		"id": "a1865d091a20",
		"ts": "2026-08-01T13:10:52.858Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 902874.48,
		"hash": "a1865d091a20b9a52fccc91d257c21629bdd40a5f399657374f88de5bd6a498d"
	},
	{
		"id": "d69fe1b4da1c",
		"ts": "2026-08-01T13:10:53.083Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25386399.16,
		"hash": "d69fe1b4da1c2cf4668501bf6e05b25efb8d0afedc605486a138d5b4fea58eb9"
	},
	{
		"id": "e127b8c39348",
		"ts": "2026-08-01T13:10:53.314Z",
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
		"liquidityUsd": 4066853.89,
		"hash": "e127b8c39348f82db8d0c06bdd14623f75b2e0769f1757d620fbedeca1823e5c"
	},
	{
		"id": "38f037ced20e",
		"ts": "2026-08-01T13:10:53.548Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 514549.66,
		"hash": "38f037ced20ed054cdc10eaccd1a2b992a012211e8890f84508aeb737a4aa9dc"
	},
	{
		"id": "35bce0aac2a6",
		"ts": "2026-08-01T13:10:53.795Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1840409.17,
		"hash": "35bce0aac2a6e8eeb28ac12064853a63671757166c804013e713e463583c9f96"
	},
	{
		"id": "d35daedf11ff",
		"ts": "2026-08-01T13:10:54.009Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1073465.66,
		"hash": "d35daedf11ff345df9c83841548d35e580eb460b67e6b656a0e7f65e844dd945"
	},
	{
		"id": "191d939d2d8a",
		"ts": "2026-08-01T13:10:54.227Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1738535.16,
		"hash": "191d939d2d8afb0737ed7d7c661afa3aea5d98c8f178d937fa7a283e8b312bde"
	},
	{
		"id": "3d553c147850",
		"ts": "2026-08-01T13:10:54.441Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4384676.42,
		"hash": "3d553c1478509f637f9ac64a5e1500cc37c8d365a7457f830c734a9f06fe457d"
	},
	{
		"id": "4e36509ad85b",
		"ts": "2026-08-01T13:10:54.659Z",
		"symbol": "CLANKER",
		"token": "0x1bc0c42215582d5A085795f4baDbaC3ff36d1Bcb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1397575.82,
		"hash": "4e36509ad85b5d7ac9ac937d18234f53108ecd82a36f7a8b8d42cd300d6f5593"
	},
	{
		"id": "abaf07226395",
		"ts": "2026-08-01T13:10:54.873Z",
		"symbol": "OMI",
		"token": "0x3792DBDD07e87413247DF995e692806aa13D3299",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 260890.62,
		"hash": "abaf07226395136b12675ac7d7755353ebed1ca5160c2a579c80998ffd6af9f8"
	},
	{
		"id": "015cdc9514c7",
		"ts": "2026-08-01T11:13:31.224Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111873707.64,
		"hash": "015cdc9514c7ced7d0cac6c90ed369179cc1ff71137f8ec8c7f03828d01b5560"
	},
	{
		"id": "8727e60f1fdb",
		"ts": "2026-08-01T11:13:31.712Z",
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
		"liquidityUsd": 16996042.05,
		"hash": "8727e60f1fdb7933cfb7b5fd49f425e350180a17875aa2dc568e8cd2339a9248"
	},
	{
		"id": "deeb796b6ee0",
		"ts": "2026-08-01T11:13:31.978Z",
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
		"liquidityUsd": 1130927.79,
		"hash": "deeb796b6ee0cb6ccf67af1ceea522c4bbaad9fc295220b6d1084e8b1bde6b79"
	},
	{
		"id": "f8d4ccf05aa5",
		"ts": "2026-08-01T11:13:32.320Z",
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
		"liquidityUsd": 25457529.18,
		"hash": "f8d4ccf05aa5512918876f3fd32e67439f5e2df2de692baaa20fbf7b456ff596"
	},
	{
		"id": "21ac9462bedd",
		"ts": "2026-08-01T11:13:32.580Z",
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
		"liquidityUsd": 4381508.59,
		"hash": "21ac9462bedd5631b6e96f2a0a4c9432667df89a0ca7397633b20a7eff11100a"
	},
	{
		"id": "b81e194e6aa4",
		"ts": "2026-08-01T11:13:32.843Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 905527.29,
		"hash": "b81e194e6aa49df811919899d26d6981f48fcc4b4ed3f32c30b4ab836ad1a55c"
	},
	{
		"id": "fd14c5f6d864",
		"ts": "2026-08-01T11:13:33.111Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25457529.18,
		"hash": "fd14c5f6d86459a77e8d9496690f4374a8632045268ec2f28c3d9eb41adc8b64"
	},
	{
		"id": "4777ea01fe65",
		"ts": "2026-08-01T11:13:33.458Z",
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
		"liquidityUsd": 2107918.62,
		"hash": "4777ea01fe659c6749071c33f4480654b1fd74e9ab24a7891dbc4e307416e04f"
	}
]
