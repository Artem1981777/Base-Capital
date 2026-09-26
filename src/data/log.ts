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
	"updatedAt": "2026-09-26T09:02:48.085Z",
	"tokensScored": 18644,
	"verdictsIssued": 18644,
	"safe": 15841,
	"risky": 1346,
	"likelyRug": 1457,
	"ticks": 1061
}

export const verdicts: AgentVerdict[] = [
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
	},
	{
		"id": "98608a146b58",
		"ts": "2026-09-26T09:02:46.270Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2932652.64,
		"hash": "98608a146b5859ffc43e4353d6498b20dfe3673fa612fa3dc8a12b2a2db4e237"
	},
	{
		"id": "1c9f144d6524",
		"ts": "2026-09-26T09:02:46.496Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3855169.79,
		"hash": "1c9f144d6524378b45c689eee355260cce6d6df568b6b51423b9ddebacc0535b"
	},
	{
		"id": "8d81055761f2",
		"ts": "2026-09-26T09:02:46.724Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18748198.98,
		"hash": "8d81055761f2049f45674dc2cf4b8066ca005341fe00a3534e2516d6ad0ff028"
	},
	{
		"id": "6e23a6e74422",
		"ts": "2026-09-26T09:02:46.952Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 479460.03,
		"hash": "6e23a6e744221b2572fc0c53942a53ba28f242bc9b44ecd1a86abe5d45cc1b6e"
	},
	{
		"id": "73ddc9f66422",
		"ts": "2026-09-26T09:02:47.179Z",
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
		"hash": "73ddc9f6642210571f4f0cae90e7290e253552587b6bb254776b6b08dc803df1"
	},
	{
		"id": "d47d9f8b3abc",
		"ts": "2026-09-26T09:02:47.406Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 761403.31,
		"hash": "d47d9f8b3abc0a7bfa89314bbffed7850a48b213636df21190edaa34626bf51a"
	},
	{
		"id": "b0b023d59139",
		"ts": "2026-09-26T09:02:47.632Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 122573.32,
		"hash": "b0b023d59139ffb95e80f46fc54767a58643210180136a5f6214a815fe61a106"
	},
	{
		"id": "04862ce21b51",
		"ts": "2026-09-26T09:02:47.859Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3469146.66,
		"hash": "04862ce21b512d764115b0ee1cee5c692b48497cd05601ca7c59b8208447962c"
	},
	{
		"id": "2f24b115c1ab",
		"ts": "2026-09-26T09:02:48.085Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1148283.32,
		"hash": "2f24b115c1ab097529e92f704a6a354a5f2b28c40da39bd4e2b29af83e1b9232"
	},
	{
		"id": "77507d58aa3a",
		"ts": "2026-09-26T03:18:54.510Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 154222732.01,
		"hash": "77507d58aa3a5fb6e056a3014ace27910da551ae4c57928031d61e8766888a91"
	},
	{
		"id": "9ff134472edd",
		"ts": "2026-09-26T03:18:54.961Z",
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
		"liquidityUsd": 17239412.26,
		"hash": "9ff134472edd5016db7fbe4e125dfe116e36982b449a78024ff9d14994b122a6"
	},
	{
		"id": "afb256d21ae3",
		"ts": "2026-09-26T03:18:55.226Z",
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
		"liquidityUsd": 872384.22,
		"hash": "afb256d21ae330cbcfd5bee8b52df7cd610a5638bc9aefc542f4db97f58a5856"
	},
	{
		"id": "45db43cea500",
		"ts": "2026-09-26T03:18:55.470Z",
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
		"liquidityUsd": 39169047.99,
		"hash": "45db43cea5005665e71f174e218fbde2d6d747dc8ee09c4690dbc00f05ee2324"
	},
	{
		"id": "0291881a6450",
		"ts": "2026-09-26T03:18:55.719Z",
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
		"liquidityUsd": 4548715.12,
		"hash": "0291881a64502e4f14385839c5a3f6a02e5f9fcfed6b84b6b1e6d6f617b866d5"
	},
	{
		"id": "df8a4491f562",
		"ts": "2026-09-26T03:18:55.977Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1309088.41,
		"hash": "df8a4491f562cbc9e1597f0d900d7aa79b40d2eaaea8ce9015ef383ed52e5440"
	},
	{
		"id": "dcba0206e4ee",
		"ts": "2026-09-26T03:18:56.268Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 39169047.99,
		"hash": "dcba0206e4ee0dc5a3086530fc5c27c6ef37cf32689df19ef1c3e2ec63b4b771"
	},
	{
		"id": "6b36fd27b5fe",
		"ts": "2026-09-26T03:18:56.526Z",
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
		"liquidityUsd": 1130733.12,
		"hash": "6b36fd27b5fe8d873d2ea849345f24e30ced32aad27833338cbc0047de26826d"
	},
	{
		"id": "bf6daf673bdd",
		"ts": "2026-09-26T03:18:56.783Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1727348.03,
		"hash": "bf6daf673bdd77b62e62ba1f9c4e4b6b68d836b91ce7080ad471e93e68c94349"
	},
	{
		"id": "d935b74df269",
		"ts": "2026-09-26T03:18:57.252Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2934132.05,
		"hash": "d935b74df2694a4f8242a896fcce42bf42ba9fad8c4bef7d9dabda0a160ee28f"
	},
	{
		"id": "935081a29c81",
		"ts": "2026-09-26T03:18:57.488Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3797326.93,
		"hash": "935081a29c812934547ffaaefd4872e8c0f344a5158853efc40a207dd460c8da"
	},
	{
		"id": "b26fdee3344d",
		"ts": "2026-09-26T03:18:57.739Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1579921.53,
		"hash": "b26fdee3344d315e2b4fb25a569c23fe351cdeb8ecb03d1a9048ab9a2011af23"
	},
	{
		"id": "833d3961690a",
		"ts": "2026-09-26T03:18:57.985Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18974399.62,
		"hash": "833d3961690af10ca5972f3237cf7cd8aaacd31f8daa532e211033db59d9f6e4"
	},
	{
		"id": "62106fa0a65e",
		"ts": "2026-09-26T03:18:58.222Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 485806.26,
		"hash": "62106fa0a65e791726e9ca13860a0428d8cfd6c51d8dfbb3747250a1f002f0c0"
	},
	{
		"id": "8fbbf9faa18d",
		"ts": "2026-09-26T03:18:58.445Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 863069.76,
		"hash": "8fbbf9faa18d5598409ae5697a36fabcfa15b7ce8fb2a716ee0e7f0a8d7bdaca"
	},
	{
		"id": "767889823081",
		"ts": "2026-09-26T03:18:58.666Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 766800.35,
		"hash": "7678898230812b06cdf4998b2bfac07f8222d70f4ea017214eae56322b63b83c"
	},
	{
		"id": "69edb058103c",
		"ts": "2026-09-26T03:18:58.900Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1147046.31,
		"hash": "69edb058103cff5f0c1d2fbd980b92c470130074c0b7a2c5bc3477305afd5fec"
	},
	{
		"id": "e789392aa11d",
		"ts": "2026-09-26T03:18:59.124Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3466094.84,
		"hash": "e789392aa11d1c0dd02238665f33d1fdac6c2780a99e871736312cf4907cb639"
	},
	{
		"id": "e5d0dad5ee9d",
		"ts": "2026-09-26T03:18:59.354Z",
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
		"hash": "e5d0dad5ee9d8fcc6fba6a692a0dcf2450ffc1767c5631957a87cf0653cadae0"
	},
	{
		"id": "d5f8ce8cb0d1",
		"ts": "2026-09-25T23:46:26.984Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 154197278.56,
		"hash": "d5f8ce8cb0d115042d34ee031efce89e0fa6c2254186c8d1b872c0a75fc311f6"
	},
	{
		"id": "1c241db899e0",
		"ts": "2026-09-25T23:46:27.202Z",
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
		"liquidityUsd": 17271565.92,
		"hash": "1c241db899e03cc0e1a8de53df87dc21bfcac8729e3f82ca89c4d211dd3c51a5"
	},
	{
		"id": "2cf1657b5310",
		"ts": "2026-09-25T23:46:27.414Z",
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
		"liquidityUsd": 866102.38,
		"hash": "2cf1657b5310b9160c8a1701d05571dca3fed356a98867528e188eb36bf491f8"
	},
	{
		"id": "ae241dd6bbad",
		"ts": "2026-09-25T23:46:27.616Z",
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
		"liquidityUsd": 39353460.48,
		"hash": "ae241dd6bbad85768e82fdefd37b536b899a3d0e4cc7b1dc65c103caa011ad73"
	},
	{
		"id": "64428e691445",
		"ts": "2026-09-25T23:46:27.815Z",
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
		"liquidityUsd": 4573313.56,
		"hash": "64428e6914450759bf317e3a8dbaf2471a6e3f2d4283d097b7f09f23a87636dc"
	},
	{
		"id": "5391945dcb4e",
		"ts": "2026-09-25T23:46:28.019Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1307806.82,
		"hash": "5391945dcb4e97ad56f9ac11c953707ee11be4e640cd9e56d69fff3753c1126f"
	},
	{
		"id": "870a57352b2a",
		"ts": "2026-09-25T23:46:28.386Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 39353460.48,
		"hash": "870a57352b2ab99cd405c1c77ce9434904bb3c2b2e7f5e8ac31c5de6a4cbd200"
	},
	{
		"id": "534b3ba0921b",
		"ts": "2026-09-25T23:46:28.627Z",
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
		"liquidityUsd": 1293536.29,
		"hash": "534b3ba0921b3bc66c18203601ed62039e6969381b617f849e6493a886b1db9b"
	},
	{
		"id": "10df17405415",
		"ts": "2026-09-25T23:46:28.834Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2978931.97,
		"hash": "10df174054158c03687596dada818dba3a5e90528d1d975c90e7c0aee00654ba"
	},
	{
		"id": "91506d45c754",
		"ts": "2026-09-25T23:46:29.038Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3829675.78,
		"hash": "91506d45c7542f3aae6107c58af5ef6fafcadb86c5fd08e1e3af9adbad84702c"
	},
	{
		"id": "518874c6ee12",
		"ts": "2026-09-25T23:46:29.234Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1595908.45,
		"hash": "518874c6ee120ba45ed58a0479146f9f1f597855bf17d3891c41827f0e9c5b35"
	},
	{
		"id": "ffb012d1b3a1",
		"ts": "2026-09-25T23:46:29.443Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1669285.44,
		"hash": "ffb012d1b3a1a5c15b5f3c0b2d1584cb246dbcf43a7d487fd4012f364f4f9938"
	},
	{
		"id": "20103e69ffb3",
		"ts": "2026-09-25T23:46:29.629Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18912094.4,
		"hash": "20103e69ffb30773d1ff1d1c82cbdc17130d84b3470b3d8182f4221a1f61c4ca"
	},
	{
		"id": "439fee4de46f",
		"ts": "2026-09-25T23:46:29.829Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 860682.35,
		"hash": "439fee4de46f001b76e73d9100bd76a4caae68149fd1089abb5f4a22fdfe38c9"
	},
	{
		"id": "efd68ede31ec",
		"ts": "2026-09-25T23:46:30.019Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 493682.42,
		"hash": "efd68ede31ec544c2d5ac9a96524c41a5a664fc8ff46c045c53af5c931e0b71e"
	},
	{
		"id": "2b32d1af72e8",
		"ts": "2026-09-25T23:46:30.222Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1137857.13,
		"hash": "2b32d1af72e8c2566e77f0b323f708d90277f2cb630c38cb95a1474b558b3fb6"
	},
	{
		"id": "17200efeaa29",
		"ts": "2026-09-25T23:46:30.424Z",
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
		"liquidityUsd": 795790.67,
		"hash": "17200efeaa29b9f6837ef0d9a866950e5438739792264f599f896349da2dfe0b"
	},
	{
		"id": "7d94a010278e",
		"ts": "2026-09-25T23:46:30.621Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3396965.15,
		"hash": "7d94a010278ea5ddeeda3c486bd268f4739ba240db65e86065c965a39f412c8b"
	},
	{
		"id": "2fd6ebd8892c",
		"ts": "2026-09-25T23:46:30.821Z",
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
		"hash": "2fd6ebd8892c7301c34e350ecc33330e8ddda43e441119a5377bcdf4bc395405"
	},
	{
		"id": "567ee5da9b0f",
		"ts": "2026-09-25T20:12:52.397Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 154185920.93,
		"hash": "567ee5da9b0f721c9a0291bf52070c8e5cc2f016b4ad265751827198e49fef69"
	},
	{
		"id": "ed4df2aca68c",
		"ts": "2026-09-25T20:12:52.695Z",
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
		"liquidityUsd": 16340307.1,
		"hash": "ed4df2aca68cc02875249fdde4583998b31f7af2a62e020d1d093b71ce26d4ce"
	},
	{
		"id": "e2c163ff786e",
		"ts": "2026-09-25T20:12:52.988Z",
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
		"liquidityUsd": 868467.09,
		"hash": "e2c163ff786e66d54983f525108ecca20188942c77750e8c41c388059b55f35c"
	},
	{
		"id": "061769b28b75",
		"ts": "2026-09-25T20:12:53.259Z",
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
		"liquidityUsd": 38805960.1,
		"hash": "061769b28b75753390ed1248d40aace95ed01a1f4549729d1446224e8f182e92"
	},
	{
		"id": "199cef5850c1",
		"ts": "2026-09-25T20:12:53.573Z",
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
		"liquidityUsd": 4537481.62,
		"hash": "199cef5850c131d67368aa01ab8289f10c36b35fe2239678b90375b7f0591513"
	},
	{
		"id": "996839f5908d",
		"ts": "2026-09-25T20:12:53.854Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1305471.04,
		"hash": "996839f5908d71e8212483c76f0f8f7d9661e604d4594e411b094473ce870113"
	},
	{
		"id": "bd79979f4134",
		"ts": "2026-09-25T20:12:54.123Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 38806040.04,
		"hash": "bd79979f413429fedacff1f28df2e29889065f0e258c1a6af88b9c27c174bbe3"
	},
	{
		"id": "9325aac46b90",
		"ts": "2026-09-25T20:12:54.423Z",
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
		"liquidityUsd": 1398124.41,
		"hash": "9325aac46b9049cc85a1a027bf54f3813e8e953c70e201413a03561a61c0d377"
	},
	{
		"id": "4bb2a1584e84",
		"ts": "2026-09-25T20:12:54.695Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 3000089.56,
		"hash": "4bb2a1584e8465ad1b357979b8f3f1b84e33884c5c137a0bcd79e6af3ae8d57e"
	},
	{
		"id": "13b306cbe2c1",
		"ts": "2026-09-25T20:12:54.976Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3719111.7,
		"hash": "13b306cbe2c10d15f2a91ca05e1c71f7840887f6e9c2346dabab898084838e05"
	},
	{
		"id": "747e9c5f3a72",
		"ts": "2026-09-25T20:12:55.235Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 856639.72,
		"hash": "747e9c5f3a7215f4c245c9dbd6458904dd9bce093c82d4d4c0f64ab7f1d29b6f"
	},
	{
		"id": "72317fec7cbf",
		"ts": "2026-09-25T20:12:55.487Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18870066.65,
		"hash": "72317fec7cbf712253e6181bfa48bdb926680491ba3a603115ddb1ec09a0fd35"
	},
	{
		"id": "31b3e3adcc2a",
		"ts": "2026-09-25T20:12:55.753Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1565729.97,
		"hash": "31b3e3adcc2a108a6f3349d4f8206e5b4f9643f4304f9ab1e7a3d1d5a68773e0"
	},
	{
		"id": "d8c29c0eb802",
		"ts": "2026-09-25T20:12:56.018Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 506969.95,
		"hash": "d8c29c0eb802d25c17cc40f0fa4e614c296543ea705de1fabd9d5297fdc40966"
	},
	{
		"id": "85373cc1d5d7",
		"ts": "2026-09-25T20:12:56.269Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1591131.95,
		"hash": "85373cc1d5d7c900ab1f4c502e1f2fb354328c5fe2373dbd100948d20be2715a"
	},
	{
		"id": "88a7ac68bb26",
		"ts": "2026-09-25T20:12:56.523Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 814265.14,
		"hash": "88a7ac68bb26f6affa45259e3af6dede9fe041a272b8f596fa0add1dffdbf942"
	},
	{
		"id": "5bc433e20a0a",
		"ts": "2026-09-25T20:12:56.777Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1139670.65,
		"hash": "5bc433e20a0ae74f7257ac8a315a449967c1cf93ef2cb798dc8b293945599657"
	},
	{
		"id": "04972905bdd5",
		"ts": "2026-09-25T20:12:57.029Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 121719.35,
		"hash": "04972905bdd52f9c272b891affa2a0c3b208a48bf7d5c737c848c784e67c126a"
	},
	{
		"id": "2963aff10571",
		"ts": "2026-09-25T20:12:57.291Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 954920.67,
		"hash": "2963aff10571471f990f4f4d7156ed9aa1c36e7835cf879d1883908d7e9d7890"
	},
	{
		"id": "1ddbfb1f9d35",
		"ts": "2026-09-25T16:26:03.698Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 154046568.35,
		"hash": "1ddbfb1f9d35046776dece1b1e088e1096f5b8a70e0b19520aee98edec6f2121"
	},
	{
		"id": "ee90320a65a3",
		"ts": "2026-09-25T16:26:03.963Z",
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
		"liquidityUsd": 16438231.04,
		"hash": "ee90320a65a3138103c606ba7f60d6ecbeee8f652e4c6ed83c39e1a36aebdb4f"
	},
	{
		"id": "48241f4216dd",
		"ts": "2026-09-25T16:26:04.207Z",
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
		"liquidityUsd": 872388.31,
		"hash": "48241f4216dd0153b395d4b1e736276293ba6024b0c29faa141478a326c53a25"
	},
	{
		"id": "36baf74f79bd",
		"ts": "2026-09-25T16:26:04.457Z",
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
		"liquidityUsd": 38353685.9,
		"hash": "36baf74f79bd8a6f9cd748ed4b11760685bf5bf3b7b7ded408cb908f9fa03f4f"
	},
	{
		"id": "766b9e99c0ad",
		"ts": "2026-09-25T16:26:04.724Z",
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
		"liquidityUsd": 4524544.63,
		"hash": "766b9e99c0adc08aa624215520fb5b745262374cb813fc3875210aa3ca44a96f"
	},
	{
		"id": "314b56a1ba91",
		"ts": "2026-09-25T16:26:04.994Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1305009.76,
		"hash": "314b56a1ba9197a1cc16aca82a49acf804a48faa7d5211337ba50f15814ab2c2"
	},
	{
		"id": "26fd93a9634d",
		"ts": "2026-09-25T16:26:05.258Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 38353693.08,
		"hash": "26fd93a9634d88d4248e5961af02a6ef804d229382b65efedde5b5f69d67e115"
	},
	{
		"id": "b983c9e2867b",
		"ts": "2026-09-25T16:26:05.506Z",
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
		"liquidityUsd": 1302146.39,
		"hash": "b983c9e2867b6e014146f1678f68518be8b2ca4c1590d40091e9524bb119930a"
	},
	{
		"id": "777a232c7906",
		"ts": "2026-09-25T16:26:05.770Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2982550.15,
		"hash": "777a232c79065aa31788d041b1fd060c4b972253cabc0de76218c1c4304543f0"
	},
	{
		"id": "c28050321735",
		"ts": "2026-09-25T16:26:06.018Z",
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
		"liquidityUsd": 18913677.81,
		"hash": "c28050321735ebb609430f3245fb05494e00f7e70b4f390e7c791aef694bc13e"
	},
	{
		"id": "9b8a93bfea0c",
		"ts": "2026-09-25T16:26:06.243Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3747048.99,
		"hash": "9b8a93bfea0c61747283beb098e264c6f14ac02cd3c6addc1cda72374663b579"
	},
	{
		"id": "c1724ed6f029",
		"ts": "2026-09-25T16:26:06.482Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 851890.09,
		"hash": "c1724ed6f029ca05f2416da07b86b3ba8d96766818ba5fe2245f792c942529ee"
	},
	{
		"id": "0e1816f33529",
		"ts": "2026-09-25T16:26:06.718Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 520027.19,
		"hash": "0e1816f335299e2128a261811adf5e3c89a915dc880321ba3d175d151a0abacd"
	},
	{
		"id": "fea22e187a2c",
		"ts": "2026-09-25T16:26:06.955Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 133125.24,
		"hash": "fea22e187a2c495934ab0160a490ff1de8f43751b54ca9e6449778ed4b4a3409"
	},
	{
		"id": "5a10cfa266a0",
		"ts": "2026-09-25T16:26:07.185Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 824598.75,
		"hash": "5a10cfa266a0329a9e74c98d088715aff2fe139501f5d9599ae8c8d0d4a7f050"
	},
	{
		"id": "14365c1c95e6",
		"ts": "2026-09-25T16:26:07.422Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1533432.26,
		"hash": "14365c1c95e65a6660d12daeb2669ed54d023cee206390c2d7d68933a5565d38"
	},
	{
		"id": "03cee7539a80",
		"ts": "2026-09-25T16:26:07.648Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1582592.57,
		"hash": "03cee7539a80c8655cf482b48258dd47318f16504c04e3ae32153fad19fdf75a"
	},
	{
		"id": "9e1a245c14f3",
		"ts": "2026-09-25T16:26:07.882Z",
		"symbol": "EDGE",
		"token": "0xED6E000dEF95780fb89734c07EE2ce9F6dcAf110",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 658205.68,
		"hash": "9e1a245c14f37f1060118ba17d6805686894e34969f077942aaa7baf3e58113b"
	},
	{
		"id": "c0c267a3a3c2",
		"ts": "2026-09-25T16:26:08.121Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4573324.63,
		"hash": "c0c267a3a3c2893e26456113a2fa7f88ad7994d1901f50d9dd75cca457d6821f"
	},
	{
		"id": "67524480009f",
		"ts": "2026-09-25T11:02:41.609Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 154261845.93,
		"hash": "67524480009fee1fbf7c94814d5a164782206a30c0011ba487133306012a06e9"
	},
	{
		"id": "e31764819d72",
		"ts": "2026-09-25T11:02:41.879Z",
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
		"liquidityUsd": 13818891.01,
		"hash": "e31764819d726a88c6b71aa2f04db42c6f563e52f253ac1ffa4304101e12baac"
	},
	{
		"id": "20e206e2e8e0",
		"ts": "2026-09-25T11:02:42.146Z",
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
		"liquidityUsd": 880659.12,
		"hash": "20e206e2e8e0a2fc5947c0ba1dc0d14b78346324d7ec81d7c299c5564b51fa25"
	},
	{
		"id": "f907846fd977",
		"ts": "2026-09-25T11:02:42.389Z",
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
		"liquidityUsd": 38850724.57,
		"hash": "f907846fd9772ba2fa429002a1b2bdf0989eff4e782d4691987036c9abb057b2"
	},
	{
		"id": "67177efbafd5",
		"ts": "2026-09-25T11:02:42.642Z",
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
		"liquidityUsd": 4659450.45,
		"hash": "67177efbafd525674ac8d823d0f98e294d28840488bb0bc217f49350244ba541"
	},
	{
		"id": "b17130b2ee0a",
		"ts": "2026-09-25T11:02:42.885Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1307802.98,
		"hash": "b17130b2ee0aba7486a9357e4d779b86cfa553aa73861e0569537ee055cb39fe"
	},
	{
		"id": "f50233d60f52",
		"ts": "2026-09-25T11:02:43.145Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 38850724.57,
		"hash": "f50233d60f52106ecd980eee35e3ea1b5092078dccb4f2b8256ed0a2ce46c216"
	},
	{
		"id": "57e5c63bfea8",
		"ts": "2026-09-25T11:02:43.387Z",
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
		"liquidityUsd": 2065529.36,
		"hash": "57e5c63bfea8a3cf52c6b8586d1f011ed73d69e348bc22f1cebc1f4cfc51abd8"
	},
	{
		"id": "281e6d2e7414",
		"ts": "2026-09-25T11:02:43.631Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2953748.46,
		"hash": "281e6d2e74144dc0076f0e5f8637bbbeedb2c0c685d5f28222fdbc6ade7e94af"
	},
	{
		"id": "2c263f106424",
		"ts": "2026-09-25T11:02:43.909Z",
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
		"liquidityUsd": 19476962.5,
		"hash": "2c263f106424fb2c12081f3ec19be15a19cdd013b71adc6ff2af84b2ad62f342"
	},
	{
		"id": "77b3703f7f20",
		"ts": "2026-09-25T11:02:44.132Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 142127.37,
		"hash": "77b3703f7f20605dda9a03b872418e302e2e044b48aae56e830895278090f30e"
	},
	{
		"id": "9bdbc6bfc256",
		"ts": "2026-09-25T11:02:44.359Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 868286.98,
		"hash": "9bdbc6bfc25619f2f3427decd84f996cd75a5b357478753b75f2b4ddd0186573"
	},
	{
		"id": "375bc75ee4fe",
		"ts": "2026-09-25T11:02:44.585Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3783271.06,
		"hash": "375bc75ee4fefaf656b44cef8fc37f4fb083bb50948a82b7483fc17744729330"
	},
	{
		"id": "46a6a9980aa8",
		"ts": "2026-09-25T11:02:44.808Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 821675.49,
		"hash": "46a6a9980aa844e6ddb6517ab8d0d3a616ad685aada00ff59761abdf8271985b"
	},
	{
		"id": "048dc219edcb",
		"ts": "2026-09-25T11:02:45.033Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1179065.72,
		"hash": "048dc219edcbd5b982fbb9fe24db98f4db2555d835f1d25d5583b5b3e421bfc7"
	},
	{
		"id": "a70d25abafc5",
		"ts": "2026-09-25T11:02:45.258Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1537866.05,
		"hash": "a70d25abafc560e64f62ba0cf3b277d24d7b3e2ebed50c1c3d3d7f1e8905b09b"
	},
	{
		"id": "ef8855bd7445",
		"ts": "2026-09-25T11:02:45.483Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3364244.51,
		"hash": "ef8855bd74454f8c9757afe4d176c447699696e6ab4147d432b3c9c125ccdc06"
	},
	{
		"id": "53912703b76e",
		"ts": "2026-09-25T11:02:45.707Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 578070.31,
		"hash": "53912703b76e887608f902809db4998afaaff2de0c7557b2d69f67c640ca281b"
	},
	{
		"id": "34b554a280a9",
		"ts": "2026-09-25T11:02:45.932Z",
		"symbol": "EDGE",
		"token": "0xED6E000dEF95780fb89734c07EE2ce9F6dcAf110",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 656245.3,
		"hash": "34b554a280a97dc562445ac68e30ff5066ae13f688c130319f910b2cf55daeb1"
	},
	{
		"id": "4c289749ff07",
		"ts": "2026-09-25T05:44:34.592Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 153270800.85,
		"hash": "4c289749ff07547ff96d8c60e72e3556b520e15b4f0784df396464413c319b0f"
	},
	{
		"id": "292dca3bbe6f",
		"ts": "2026-09-25T05:44:35.265Z",
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
		"liquidityUsd": 17130253.67,
		"hash": "292dca3bbe6faf17e196ca21034dd83bab428f292db89d9eb77d7a0dc4226057"
	},
	{
		"id": "2d8753f4856a",
		"ts": "2026-09-25T05:44:35.540Z",
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
		"liquidityUsd": 861348.25,
		"hash": "2d8753f4856aaaa14eb4d585b18e12bb262b48373506c17e80ac62873174d762"
	},
	{
		"id": "34544f8f4dc8",
		"ts": "2026-09-25T05:44:35.803Z",
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
		"liquidityUsd": 36997411.97,
		"hash": "34544f8f4dc8477fbbaa7bdb22c9e387b0af84a001fb32e6b78db2c42189b6c1"
	},
	{
		"id": "24a9be58baf0",
		"ts": "2026-09-25T05:44:36.071Z",
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
		"liquidityUsd": 4577116.49,
		"hash": "24a9be58baf013d86efb4ec7a044346bfa77602d1b23fe995ef9f6973e3bc778"
	},
	{
		"id": "f980b7f8886c",
		"ts": "2026-09-25T05:44:36.331Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1299274.13,
		"hash": "f980b7f8886c0827c66dc4ae539dd3ffeef3579f0dbfdc293b0da4c1accfdaf1"
	},
	{
		"id": "5e890b31f175",
		"ts": "2026-09-25T05:44:36.615Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36997411.97,
		"hash": "5e890b31f17511933f999e41daebee3586bf509335947db68be9365473b2a6cb"
	},
	{
		"id": "b43a6c8cc24e",
		"ts": "2026-09-25T05:44:36.881Z",
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
		"liquidityUsd": 2291831.43,
		"hash": "b43a6c8cc24e6467a78033102109e8cfd324c380dc6f6f523fab4c07310525ac"
	},
	{
		"id": "0ea5a059f059",
		"ts": "2026-09-25T05:44:37.134Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2894231.75,
		"hash": "0ea5a059f059f6fd31ae2708b32df5d1c72daabeb84cb180af3abd671a1aa8d3"
	},
	{
		"id": "8fb1c544c6fc",
		"ts": "2026-09-25T05:44:37.402Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 137613.2,
		"hash": "8fb1c544c6fcb886e7e464acec37b847e3d4cf1fee25059bd11f7acc7b9c2bfa"
	},
	{
		"id": "ac1c4cc9ac0d",
		"ts": "2026-09-25T05:44:37.633Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 19170356.56,
		"hash": "ac1c4cc9ac0d23f6cc3cdd2ba33eb636b8d1207c841b52c9a75f54e2c1772c72"
	},
	{
		"id": "ce5a151e9d06",
		"ts": "2026-09-25T05:44:37.886Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 812992.76,
		"hash": "ce5a151e9d06c9fba1a11c44ffe0e4b46022e703b261757064e7a22592f02eae"
	},
	{
		"id": "865a89444b16",
		"ts": "2026-09-25T05:44:38.121Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 889320.69,
		"hash": "865a89444b16dcd5dea18a49cd3d4aa26929277cd9a8e0388064bb2dafffa6bf"
	},
	{
		"id": "17401cf3ae73",
		"ts": "2026-09-25T05:44:38.352Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3695951.09,
		"hash": "17401cf3ae7314adca4e7bbaa487f32b7ed7a60c6628d2572464b1e27cbbf23c"
	},
	{
		"id": "52198476c8a5",
		"ts": "2026-09-25T05:44:38.585Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1349369.44,
		"hash": "52198476c8a5dedcb8feb3352cdbb1d865aa3e6bab4816df50da7d393b8954e0"
	},
	{
		"id": "981891375c78",
		"ts": "2026-09-25T05:44:38.815Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1632151.74,
		"hash": "981891375c787dde41f3dc48cbea18a6bc1b4c80a7c98b2f20a1e060eb6c8123"
	},
	{
		"id": "d8103b280b1b",
		"ts": "2026-09-25T05:44:39.050Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1514359.55,
		"hash": "d8103b280b1b3d91dd2c6b3076a1c758de7158ff8ed332fff9dbd352e1b5a713"
	},
	{
		"id": "421ef637ce93",
		"ts": "2026-09-25T05:44:39.297Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 159863.94,
		"hash": "421ef637ce931aeee6b9b0879b1772598c254d59ad0e99e42b3a1094de7d6ae1"
	},
	{
		"id": "f2b0e22225f5",
		"ts": "2026-09-25T05:44:39.542Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3313127.2,
		"hash": "f2b0e22225f57713b1bc3fb8c29a4c8c29210e0860380a4105a5418670f6a275"
	},
	{
		"id": "b6f652ba93d1",
		"ts": "2026-09-25T00:15:53.726Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 153591123.63,
		"hash": "b6f652ba93d1a53f4fbf701b97a1262f518d86af4d7b725cdff74e3bd52edb75"
	},
	{
		"id": "648c936783ba",
		"ts": "2026-09-25T00:15:54.423Z",
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
		"liquidityUsd": 16995708.54,
		"hash": "648c936783ba53760535df2b7569f9f48c52a130fb159ac71a6dd5e47a9dce53"
	},
	{
		"id": "ce51e155a7f5",
		"ts": "2026-09-25T00:15:54.674Z",
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
		"liquidityUsd": 868765.83,
		"hash": "ce51e155a7f5b490fe2352fd66604f700eafb0ca76c7c533de09155e6a7ab477"
	},
	{
		"id": "096cd99767e2",
		"ts": "2026-09-25T00:15:54.935Z",
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
		"liquidityUsd": 36591810.54,
		"hash": "096cd99767e201e0cf96802813e2109cd1913084220ef2c9318dc98b680e7923"
	},
	{
		"id": "9a5d60a65d16",
		"ts": "2026-09-25T00:15:55.184Z",
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
		"liquidityUsd": 4557022.62,
		"hash": "9a5d60a65d163a4b3e6c1af426388bb04678b521614a3fab535471339e2c2e28"
	},
	{
		"id": "621e14e08525",
		"ts": "2026-09-25T00:15:55.441Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1301564.18,
		"hash": "621e14e08525fed52d64d7996c770a985bf3e63ac0bd3a28d121529a47ececa4"
	},
	{
		"id": "1f80f49a5f68",
		"ts": "2026-09-25T00:15:55.686Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36591810.64,
		"hash": "1f80f49a5f6888b9d1190a4e25a64e18a673a046709b79326de89e6db5aae965"
	},
	{
		"id": "ae7f6ac3d41a",
		"ts": "2026-09-25T00:15:55.943Z",
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
		"liquidityUsd": 2302744.52,
		"hash": "ae7f6ac3d41a9d08dcd70913e9c1985ff137973cc482b8536ecf675c6bfc1e39"
	},
	{
		"id": "b63d54abdd3e",
		"ts": "2026-09-25T00:15:56.193Z",
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
		"liquidityUsd": 19081748.8,
		"hash": "b63d54abdd3e346ad99f87b0abfb89afa337d0f96d169eac341c3a8d5e63e760"
	},
	{
		"id": "bd53e5388d76",
		"ts": "2026-09-25T00:15:56.448Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 137684.43,
		"hash": "bd53e5388d7682a40c71e6e05857125e3624109bc06b149fee5ca05ad82a40c3"
	},
	{
		"id": "c7f110bf847c",
		"ts": "2026-09-25T00:15:56.675Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2919434.55,
		"hash": "c7f110bf847cf38a938e3c1648eae7e68ea66c570b88c07de1a7f64fcdfd511b"
	},
	{
		"id": "4ba4a87f8f0a",
		"ts": "2026-09-25T00:15:56.911Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 491378.31,
		"hash": "4ba4a87f8f0a4f10be3e0e4e8742e3bcd59509addd065b4391f513b2bc0c29af"
	},
	{
		"id": "1f87f83ebdb8",
		"ts": "2026-09-25T00:15:57.141Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3565050.11,
		"hash": "1f87f83ebdb8965de64697c108b5f2981c8e58e27fbceaffb2014be7e90110d5"
	},
	{
		"id": "3900bc14edaa",
		"ts": "2026-09-25T00:15:57.380Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1528192.17,
		"hash": "3900bc14edaa834fbb33022c716b46fa88c968ff832ac30bf5ee2f7f71893edd"
	},
	{
		"id": "e27ffe5cfe78",
		"ts": "2026-09-25T00:15:57.607Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 818852.31,
		"hash": "e27ffe5cfe78a7a41ee310ce92a83f66b8e554800aa7062c2ede967298d586d2"
	},
	{
		"id": "6a6fae577702",
		"ts": "2026-09-25T00:15:57.845Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1876973.95,
		"hash": "6a6fae577702a97b03a60583211f5f9c4a11ac5f48603ef5f432685a958a418a"
	},
	{
		"id": "df216e1a8faf",
		"ts": "2026-09-25T00:15:58.071Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1254636.18,
		"hash": "df216e1a8faf3fd16c5aed8003ef0b1206d4d86d370bf2f1309fee1424a8b7c6"
	},
	{
		"id": "9dedffdddc63",
		"ts": "2026-09-25T00:15:58.310Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 153599.61,
		"hash": "9dedffdddc630c6351a8f495af64d00b0c33b8c6a656748239de415aa4076814"
	},
	{
		"id": "301ad6edebbf",
		"ts": "2026-09-25T00:15:58.536Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3336695.06,
		"hash": "301ad6edebbf561d8c6d3cb502efcde3ca79a214c1d17982044b6ec450b94911"
	},
	{
		"id": "e7c8ce9ba1d3",
		"ts": "2026-09-24T21:55:53.511Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 153687094.04,
		"hash": "e7c8ce9ba1d35e92f377039b02fa2722cf9d47ad9a929f909a93f7ce06584c41"
	},
	{
		"id": "475037c2e7fc",
		"ts": "2026-09-24T21:55:54.186Z",
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
		"liquidityUsd": 17004085.04,
		"hash": "475037c2e7fc17af6b108eae47e90af21f1f78f1754dab1b4bd9486ca71ad65b"
	},
	{
		"id": "f20474183395",
		"ts": "2026-09-24T21:55:54.666Z",
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
		"liquidityUsd": 867628.64,
		"hash": "f20474183395c17af2f9ab64794d4fb6f608a6635452461a9607701eab25163a"
	},
	{
		"id": "d5fd14eaefaf",
		"ts": "2026-09-24T21:55:55.149Z",
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
		"liquidityUsd": 36645290.13,
		"hash": "d5fd14eaefaf84fa7d250d3e38da681ca910d2910afbc75a2afe47e4d11a2e4a"
	},
	{
		"id": "96e13964414c",
		"ts": "2026-09-24T21:55:55.627Z",
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
		"liquidityUsd": 4542802.93,
		"hash": "96e13964414c637ce0413d2d26328b2064c526a32ff324c9fbe2ea44a33a9dfb"
	},
	{
		"id": "7c200771aa18",
		"ts": "2026-09-24T21:55:55.915Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1302911.68,
		"hash": "7c200771aa183b957f38acaa50840b9055f400ab3dc4d0eb3eb63c9fa998d063"
	},
	{
		"id": "cb78fcd92584",
		"ts": "2026-09-24T21:55:56.203Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36639604.64,
		"hash": "cb78fcd925849f2bbaf2589834c664b02b844ab607c971b6bdab9a6a2f0b9064"
	},
	{
		"id": "54556559ce49",
		"ts": "2026-09-24T21:55:56.707Z",
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
		"liquidityUsd": 1453175.29,
		"hash": "54556559ce49f02ff758a1cb935147f45ffae2af2f0038faad615e2818a881dd"
	},
	{
		"id": "e255993c6aaa",
		"ts": "2026-09-24T21:55:56.986Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 114524.77,
		"hash": "e255993c6aaa4599e265414359faa866f204395956f60a203c10a4a9ce079430"
	},
	{
		"id": "f637cdd0ada6",
		"ts": "2026-09-24T21:55:57.466Z",
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
		"liquidityUsd": 19088968.58,
		"hash": "f637cdd0ada633d419428bec4607dd7371f25b1b06bd3babe9d2d829d60b12f5"
	},
	{
		"id": "8d99047773fa",
		"ts": "2026-09-24T21:55:57.765Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2973585.04,
		"hash": "8d99047773fa135aadd3fcefd46beaa84242afa07a5c2a3720eb0bad82de3a0b"
	},
	{
		"id": "16509f594648",
		"ts": "2026-09-24T21:55:58.028Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1533626.24,
		"hash": "16509f59464863b56155d2fd888d5e50fc4ab6ccbf271ee79de22237b4893958"
	},
	{
		"id": "2441eac201b6",
		"ts": "2026-09-24T21:55:58.291Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 477215.16,
		"hash": "2441eac201b6eb54ce27308c979d8d4600c651a57c6e5da4277033b6527595b5"
	},
	{
		"id": "c31700a5de91",
		"ts": "2026-09-24T21:55:58.556Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3466592.65,
		"hash": "c31700a5de9195e6b216504c629df35bd3aada06f54da272c08fb28f7abd0763"
	},
	{
		"id": "76c95ba75522",
		"ts": "2026-09-24T21:55:58.819Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 819530.53,
		"hash": "76c95ba75522a4b1a2bf55183b0484a6892af1e7237a58ffd96553974aa2a225"
	},
	{
		"id": "94f225df5965",
		"ts": "2026-09-24T21:55:59.083Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 162153.07,
		"hash": "94f225df59659dfe4a2b99d283ef3d23965cadad44a93debe9f64f6291b31a69"
	},
	{
		"id": "e10351610704",
		"ts": "2026-09-24T21:55:59.345Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2823177.94,
		"hash": "e103516107044da03f36c6b1c6473a347074d3dac70fc2a1d64bdb3350ad8170"
	},
	{
		"id": "abadca215e89",
		"ts": "2026-09-24T21:55:59.608Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 560946.9,
		"hash": "abadca215e896638a1510f880f45a952981a7be51725dd2b8a4ef3367762bb1e"
	},
	{
		"id": "278b680259c8",
		"ts": "2026-09-24T21:55:59.873Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1119221.64,
		"hash": "278b680259c8bc871c89b0160fe2e30276f63c50afca1720e47b0735e85b8761"
	},
	{
		"id": "2802c22e1df5",
		"ts": "2026-09-24T18:07:43.284Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 152867881.74,
		"hash": "2802c22e1df5ecf83bd401dea836687e4788f682449b30b0910d0b889e1708a7"
	},
	{
		"id": "a20190ed4678",
		"ts": "2026-09-24T18:07:43.657Z",
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
		"liquidityUsd": 13960095.1,
		"hash": "a20190ed4678c63de9622e4d1ca14fd7526c74420f0f3eba42b90fe524cbae0c"
	},
	{
		"id": "ad17f6a4fecb",
		"ts": "2026-09-24T18:07:43.860Z",
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
		"liquidityUsd": 860696.72,
		"hash": "ad17f6a4fecbe839c53537ebf83d56c8c23ded5a28f9c34d778959085b005a77"
	},
	{
		"id": "4d368f40e4b9",
		"ts": "2026-09-24T18:07:44.057Z",
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
		"liquidityUsd": 36566754.05,
		"hash": "4d368f40e4b9dfa70ca7fc7204ae65dce8069326848b74c0adab46d91094bc51"
	},
	{
		"id": "d6f1c277fb72",
		"ts": "2026-09-24T18:07:44.254Z",
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
		"liquidityUsd": 4512964.39,
		"hash": "d6f1c277fb72cc181392c20a9b169f8b225be1b6bde6fdeb9a84adcce9470848"
	},
	{
		"id": "f7b15b303f18",
		"ts": "2026-09-24T18:07:44.502Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1292512.77,
		"hash": "f7b15b303f18d758dd619f14797f7c9110dbc57c88df3e2a83e13b17841a28f2"
	},
	{
		"id": "f39f2869e12b",
		"ts": "2026-09-24T18:07:44.698Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36566754.05,
		"hash": "f39f2869e12b2457868bb196c3104dc33e40b30654e4d3e49b5c74d17b00b573"
	},
	{
		"id": "d57b50c7df49",
		"ts": "2026-09-24T18:07:44.908Z",
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
		"liquidityUsd": 1437561.34,
		"hash": "d57b50c7df49bd70f4e56a31bb5f0aa1c375d5cd40c25131e08ff46e3c369b7b"
	},
	{
		"id": "4a6d7643d8e2",
		"ts": "2026-09-24T18:07:45.109Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 141506.41,
		"hash": "4a6d7643d8e24e1984ffa8a65a6d5c21b85309f0d9ce341f3a6f58913198846a"
	},
	{
		"id": "8493a83c136f",
		"ts": "2026-09-24T18:07:45.304Z",
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
		"liquidityUsd": 18659754.94,
		"hash": "8493a83c136fc6aef1ab4f1419859e5d3e414534333990b6f808e57a2fcaa382"
	},
	{
		"id": "366d94b61019",
		"ts": "2026-09-24T18:07:45.527Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2935505.27,
		"hash": "366d94b610197a61564c172ef56da7ea60cc63845010759fe4d6ad92f3d1b137"
	},
	{
		"id": "ddc014678756",
		"ts": "2026-09-24T18:07:45.715Z",
		"symbol": "CATALYST",
		"token": "0xcA7A1E31b36779cf32acb18714Ab26982CF36B05",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1122031.6,
		"hash": "ddc014678756da153478244bacd425767827e825d82acc6e86d8b8551b5dc043"
	},
	{
		"id": "354309a70467",
		"ts": "2026-09-24T18:07:45.895Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1527750.86,
		"hash": "354309a70467920e32fb0648228f3e5cfd3167b8cea91cdb851377ccd2fef23c"
	},
	{
		"id": "660a40f4d0c2",
		"ts": "2026-09-24T18:07:46.092Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 483821.98,
		"hash": "660a40f4d0c2e72b52030fdc20323ab0a79fdb3580fd3d16df419b867e61455c"
	},
	{
		"id": "3f8f63773559",
		"ts": "2026-09-24T18:07:46.282Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3415773.79,
		"hash": "3f8f637735598c1224f2db645593bad67d739a9a194489226062958e18a324fb"
	},
	{
		"id": "ad5448dfa6b3",
		"ts": "2026-09-24T18:07:46.463Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 824919.59,
		"hash": "ad5448dfa6b30aa65a78ee69e3eec3edf8c89f9b720b800128a36a4d0a4b0bca"
	},
	{
		"id": "9cef5a5ba1a8",
		"ts": "2026-09-24T18:07:46.655Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 611696.98,
		"hash": "9cef5a5ba1a867f84b2c1b5bfceb9995762568ef7b22a32803a63f5ad32310e2"
	},
	{
		"id": "35ac403fba4a",
		"ts": "2026-09-24T18:07:46.854Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 149758.63,
		"hash": "35ac403fba4af8847bb3a5f42dbdeeeb8bd5d4d236609e3d3dfd76f0e7a67793"
	},
	{
		"id": "e70fe1bb6eae",
		"ts": "2026-09-24T18:07:47.050Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1214834.25,
		"hash": "e70fe1bb6eaefcc1284266270e3b4cc618008a34a3b17ed0b306f5b093a2a580"
	},
	{
		"id": "4bc4cbec49f8",
		"ts": "2026-09-24T13:07:51.148Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 151626100.07,
		"hash": "4bc4cbec49f82287c92959e235008b70f522cfaad29f8886447840a0a329fb5f"
	},
	{
		"id": "43819347b10a",
		"ts": "2026-09-24T13:07:51.446Z",
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
		"liquidityUsd": 17267215.62,
		"hash": "43819347b10a7b9ed82d90a5a3e5e1aaa2c17928638c42d56009dda49c9da77d"
	},
	{
		"id": "bbc9b61b349f",
		"ts": "2026-09-24T13:07:51.708Z",
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
		"liquidityUsd": 866418.43,
		"hash": "bbc9b61b349f6a80115e60532653e431a6b16cc84302361c948fd7654dad9073"
	},
	{
		"id": "e80d2943eab7",
		"ts": "2026-09-24T13:07:51.972Z",
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
		"liquidityUsd": 36028926.45,
		"hash": "e80d2943eab78ab898e16fad706795d24c95a07ba8e628e26c1adf69d16184ce"
	},
	{
		"id": "ab3751eeb7e7",
		"ts": "2026-09-24T13:07:52.238Z",
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
		"liquidityUsd": 4380578.51,
		"hash": "ab3751eeb7e7bf2995d8d72d91410ec17178bfaab6954c87da997bcff54d0a4d"
	},
	{
		"id": "52b8c303f312",
		"ts": "2026-09-24T13:07:52.501Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1262549.22,
		"hash": "52b8c303f312963789abd619122086d45c595bdc4cf93f256e45fe9ad8600c98"
	},
	{
		"id": "a0904fe9dbdb",
		"ts": "2026-09-24T13:07:52.763Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36028926.45,
		"hash": "a0904fe9dbdbbeefc7f00e1d5832953a6937307e343fdd7bc622257f80fae60e"
	},
	{
		"id": "f3decff26606",
		"ts": "2026-09-24T13:07:53.039Z",
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
		"liquidityUsd": 2661060.5,
		"hash": "f3decff266061896356599a9535f4dec49438ad8ad82fcd87be4d3809abe9463"
	},
	{
		"id": "74a19ddbce07",
		"ts": "2026-09-24T13:07:53.300Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 209071.16,
		"hash": "74a19ddbce07807483ffa472fef78a08abdc089f8065987cad9351d25ee3bf08"
	},
	{
		"id": "3999689d519c",
		"ts": "2026-09-24T13:07:53.565Z",
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
		"liquidityUsd": 18032392.1,
		"hash": "3999689d519ce2667de55cb3ed1a625e83e4d67ec778d9afedabe5c395bcf86b"
	}
]
