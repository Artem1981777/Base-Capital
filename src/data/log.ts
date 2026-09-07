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
	"updatedAt": "2026-09-07T21:53:48.278Z",
	"tokensScored": 16567,
	"verdictsIssued": 16567,
	"safe": 14067,
	"risky": 1222,
	"likelyRug": 1278,
	"ticks": 950
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "f55813ecd5bd",
		"ts": "2026-09-07T21:53:44.634Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117284043.26,
		"hash": "f55813ecd5bd08025e2596820f55ce72cd0c40528583b313d49321b2d1fc717d"
	},
	{
		"id": "66f12450583b",
		"ts": "2026-09-07T21:53:44.933Z",
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
		"liquidityUsd": 20738200.56,
		"hash": "66f12450583bfe0868dda6f5759b251655982aef3bca83dcb98157b67f93b12a"
	},
	{
		"id": "d769e4bfdd7e",
		"ts": "2026-09-07T21:53:45.139Z",
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
		"liquidityUsd": 1017854.01,
		"hash": "d769e4bfdd7e5e071ea6500f396a546c9ef8dbe1e06f9086fbe5537ff58dc624"
	},
	{
		"id": "070d217dc8a3",
		"ts": "2026-09-07T21:53:45.339Z",
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
		"liquidityUsd": 33458966.97,
		"hash": "070d217dc8a3462d75ea6dc4d30272f4a698284ceb71a814fadf3973d44ffe71"
	},
	{
		"id": "53838b3c37e7",
		"ts": "2026-09-07T21:53:45.561Z",
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
		"liquidityUsd": 4391073.94,
		"hash": "53838b3c37e781094f9128750f63af5babd017edb5c201ea37acb70a04154d3b"
	},
	{
		"id": "fbbe89a10fa7",
		"ts": "2026-09-07T21:53:45.760Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1205806.08,
		"hash": "fbbe89a10fa7b9883cc3a46fd268b2c5d4ca0e35181c93e2f55c76da2b34168e"
	},
	{
		"id": "eacca3e99b0a",
		"ts": "2026-09-07T21:53:45.956Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33458966.97,
		"hash": "eacca3e99b0abcc223ad27b82c3949a0019ed5f312b1eb6c448449730ae8f05b"
	},
	{
		"id": "222745d74a26",
		"ts": "2026-09-07T21:53:46.171Z",
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
		"liquidityUsd": 2351320.26,
		"hash": "222745d74a266f02577713210b664de4849ecef0fcc8f4cde9f7ff8411938e9e"
	},
	{
		"id": "0bfb79349808",
		"ts": "2026-09-07T21:53:46.363Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 929094.34,
		"hash": "0bfb7934980872d410a4e0c04dfe1fc63446e841a7eba1591cb4b3179c2df84a"
	},
	{
		"id": "5f39031e7165",
		"ts": "2026-09-07T21:53:46.579Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 986616.57,
		"hash": "5f39031e716580023af1f612138717bfb0a4b8005759347bd161c5c1469d3ebc"
	},
	{
		"id": "9af29259e689",
		"ts": "2026-09-07T21:53:46.790Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1777476.33,
		"hash": "9af29259e6897a3b5c8f6bddf5ded7f7b8010ae735466ae4b2b293617f3eb614"
	},
	{
		"id": "2dea695ab50a",
		"ts": "2026-09-07T21:53:46.968Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 187221.42,
		"hash": "2dea695ab50aef275847afb697751c745f76cad13c4f5ca19987fceec0f53f32"
	},
	{
		"id": "e2d04158eba0",
		"ts": "2026-09-07T21:53:47.149Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 183562.2,
		"hash": "e2d04158eba0aae43020a42f99e3976c5a74c8055426c9ea8327402add52e265"
	},
	{
		"id": "507604042ede",
		"ts": "2026-09-07T21:53:47.425Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3296770.06,
		"hash": "507604042edeaf6718c07b81a660ec021d1b25b2eaa778aa82f57ff21b45773d"
	},
	{
		"id": "412e24c97d60",
		"ts": "2026-09-07T21:53:47.619Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1428034.69,
		"hash": "412e24c97d6063e23fc4aeaddd655a9d22c3ca62ebccd5e671ed015ca8e19a27"
	},
	{
		"id": "e3c29236d9e9",
		"ts": "2026-09-07T21:53:47.885Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4207336.06,
		"hash": "e3c29236d9e9070c91af736c69b77ab9964586a306be0ce7a29b3d3110e827f4"
	},
	{
		"id": "b40588ede9c1",
		"ts": "2026-09-07T21:53:48.086Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 305360.25,
		"hash": "b40588ede9c1f52384c584694804e16e9b862c55af4ad71ee4d291f1135f8474"
	},
	{
		"id": "5071e123d068",
		"ts": "2026-09-07T21:53:48.278Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1169975.09,
		"hash": "5071e123d0684ebf11bb770b65ab1aae69cd13f5939c6ca1be0ee628a07cc476"
	},
	{
		"id": "aa6d60ffc3aa",
		"ts": "2026-09-07T18:36:09.251Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117443800.72,
		"hash": "aa6d60ffc3aaa4dd5e7ec438fe63790951a7e37f04ee9257b7f1449902713237"
	},
	{
		"id": "037f4770cd83",
		"ts": "2026-09-07T18:36:09.494Z",
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
		"liquidityUsd": 20281582.4,
		"hash": "037f4770cd83ba66eba581deb90acf42a9e4567908a13c542059546c69d72cf1"
	},
	{
		"id": "2299647b6816",
		"ts": "2026-09-07T18:36:09.938Z",
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
		"liquidityUsd": 1017781.31,
		"hash": "2299647b6816a2424a6f19852966352551924da6f1aa4a9384c1eb0dc5fccd43"
	},
	{
		"id": "298c6f7c083f",
		"ts": "2026-09-07T18:36:10.200Z",
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
		"liquidityUsd": 32320424.88,
		"hash": "298c6f7c083fb0233bf5de42779be75556d7f7bf4d649e1c84590ef4d77e2d08"
	},
	{
		"id": "6f1eb657c47e",
		"ts": "2026-09-07T18:36:10.470Z",
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
		"liquidityUsd": 4386677.72,
		"hash": "6f1eb657c47e62805dcf49b3d5197adbf0e11288a18959d0155eba5c9e1f8cdb"
	},
	{
		"id": "ed7db794efb3",
		"ts": "2026-09-07T18:36:10.711Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1204682.43,
		"hash": "ed7db794efb31e64bf482eb5677c69d0565e561700ff82d01c70c2987057cf9b"
	},
	{
		"id": "5b7c1058b609",
		"ts": "2026-09-07T18:36:10.944Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 32320424.88,
		"hash": "5b7c1058b60908bc4b7bd624db4c03e7f272236a1a87ff58ca98ccbceb2bf731"
	},
	{
		"id": "5c4e10c0a714",
		"ts": "2026-09-07T18:36:11.199Z",
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
		"liquidityUsd": 2350893.38,
		"hash": "5c4e10c0a714099e9ba292378bb62dcdf92506695af9dfeb0b6dc736024e2569"
	},
	{
		"id": "568fed07f91d",
		"ts": "2026-09-07T18:36:11.459Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 995405.12,
		"hash": "568fed07f91de1051a78016937bd2536a72cd9d92183d3eaef7642a0d2f958a7"
	},
	{
		"id": "d21980ffc07a",
		"ts": "2026-09-07T18:36:11.714Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 997069.04,
		"hash": "d21980ffc07ac46ceef60a8cf2ec7fdda1787eb26f611d4fbdc518a629c7a6ef"
	},
	{
		"id": "ecb81c57acfc",
		"ts": "2026-09-07T18:36:11.937Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 283626.19,
		"hash": "ecb81c57acfc8376dccbbc3cb6ad655a95c079d3eb4f1bdfbc41733eb50c0c00"
	},
	{
		"id": "7c81dc44e77b",
		"ts": "2026-09-07T18:36:12.173Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1756477.54,
		"hash": "7c81dc44e77bec29ea7a5af21e7c959201ec31c4e3e5c7f16e96a5ffb1baa173"
	},
	{
		"id": "02bfa0acb93e",
		"ts": "2026-09-07T18:36:12.397Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 191493.91,
		"hash": "02bfa0acb93e78d087927aaedfbb9a37fb37f448316147f5784a0d23f8c8ec0f"
	},
	{
		"id": "76f2803d3a56",
		"ts": "2026-09-07T18:36:12.621Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 197893.77,
		"hash": "76f2803d3a5675504e7baf9ad21cb5924178ab196ab80ba0e80a29de213c0ecb"
	},
	{
		"id": "93434111c2ae",
		"ts": "2026-09-07T18:36:12.845Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1409053.76,
		"hash": "93434111c2ae0432b9647953c2b64003f866064e3d3876461dc7d8f9444b259c"
	},
	{
		"id": "6794597ac228",
		"ts": "2026-09-07T18:36:13.082Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3326559.62,
		"hash": "6794597ac22856d7ac035704ab6f434865a5c3fb9cf7d793b594a8eac9f7100d"
	},
	{
		"id": "f94bc175af0e",
		"ts": "2026-09-07T18:36:13.302Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4194493.6,
		"hash": "f94bc175af0ed9021225d9e0762cd4ed895c6bd9bbf8e8cd6758840eb78256d1"
	},
	{
		"id": "85e2a4b63023",
		"ts": "2026-09-07T18:36:13.524Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 394323.92,
		"hash": "85e2a4b63023e4de841821078b90a4fec06b8987b8823f131ed67dd332dae02d"
	},
	{
		"id": "220c0ec22e5d",
		"ts": "2026-09-07T13:56:22.757Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117445373.09,
		"hash": "220c0ec22e5d02e9c98019d291f8cc1cf716e528384b0a005fc484b861ff187f"
	},
	{
		"id": "a0fd9656079d",
		"ts": "2026-09-07T13:56:23.287Z",
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
		"liquidityUsd": 20638052.13,
		"hash": "a0fd9656079dbc27cc54f8216b193bd744f361baae94bb8a629191f63f583665"
	},
	{
		"id": "529737c6c97f",
		"ts": "2026-09-07T13:56:23.505Z",
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
		"liquidityUsd": 1020749.63,
		"hash": "529737c6c97f06888605658090c647a39cfb64aa0a5c4622a9cac38ef8b73534"
	},
	{
		"id": "dd2922c5ab8f",
		"ts": "2026-09-07T13:56:23.875Z",
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
		"liquidityUsd": 30432170.13,
		"hash": "dd2922c5ab8f01d1e01dc9c17074a81bdb53814be711a5477ee62f8d5e9490f5"
	},
	{
		"id": "aa2f3348d276",
		"ts": "2026-09-07T13:56:24.220Z",
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
		"liquidityUsd": 4396281.33,
		"hash": "aa2f3348d276bc9df3f77e7214d0e427ae560ce1672f8231bb3eb97a242eff18"
	},
	{
		"id": "9e5fdac6fb41",
		"ts": "2026-09-07T13:56:24.586Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1212372.22,
		"hash": "9e5fdac6fb41b788cc628833ad316b22a3e0109d9a81addf8e624311be0de750"
	},
	{
		"id": "264e1407ffc1",
		"ts": "2026-09-07T13:56:24.789Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30432170.13,
		"hash": "264e1407ffc13e6fc3290bee49ba2c86284875323d969fec026a9e99bf815670"
	},
	{
		"id": "e428421f4a7b",
		"ts": "2026-09-07T13:56:25.157Z",
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
		"liquidityUsd": 2825283.14,
		"hash": "e428421f4a7bca9b9728729258e809fc1a810d9b4a0fcfb0037ab465e1f201d1"
	},
	{
		"id": "bbcfb8aae326",
		"ts": "2026-09-07T13:56:25.357Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1031824.1,
		"hash": "bbcfb8aae32659c7c1128733365d3ce851b41cb3aafdc26b2db45baa90149228"
	},
	{
		"id": "24d275aeb8bb",
		"ts": "2026-09-07T13:56:25.589Z",
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
		"liquidityUsd": 282784.03,
		"hash": "24d275aeb8bba00af6e2b0235473798367b4efc8d6d53b0deeb222bb3a9a8a06"
	},
	{
		"id": "ca5836f5d9c3",
		"ts": "2026-09-07T13:56:25.787Z",
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
		"liquidityUsd": 1033687.75,
		"hash": "ca5836f5d9c337ec6d4d77ffb29a5e0b0186026d0b7220758773fc35db115a6c"
	},
	{
		"id": "f310419466cf",
		"ts": "2026-09-07T13:56:25.970Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1672232.29,
		"hash": "f310419466cf9efcf2c78d514e9756403d09434832431bd7083f5dedcacf6d10"
	},
	{
		"id": "851dedac25b4",
		"ts": "2026-09-07T13:56:26.172Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 193440.29,
		"hash": "851dedac25b491a6600692adf0982d24341eec4de787f835e9db6719ac0974c1"
	},
	{
		"id": "db5ae76d07ea",
		"ts": "2026-09-07T13:56:26.379Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 204793.18,
		"hash": "db5ae76d07ead5dad0cde44705764f310b55f4a7c6e11d1e8a9ed19ae9646118"
	},
	{
		"id": "5b8abd71d6fd",
		"ts": "2026-09-07T13:56:26.576Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1491488.31,
		"hash": "5b8abd71d6fd6323c2dd7dbbf6e19e4562d67b762c8bc7936eaa7a1591ade015"
	},
	{
		"id": "b29068f5e439",
		"ts": "2026-09-07T13:56:26.757Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 418417.62,
		"hash": "b29068f5e4391957f5f4f26815476109cedf8c46b50fc1292cab097842d17310"
	},
	{
		"id": "56545a6360e4",
		"ts": "2026-09-07T13:56:26.953Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 308985.07,
		"hash": "56545a6360e470ee3c0a9608e432a9491cd3618f3e160b3371de8c2e8105ea60"
	},
	{
		"id": "42347874ac0f",
		"ts": "2026-09-07T13:56:27.136Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3370572.98,
		"hash": "42347874ac0f4a6835cb414dfc51aeae40f010282bc1ef20cab2f5ecbf8e517f"
	},
	{
		"id": "89ee86297139",
		"ts": "2026-09-07T13:56:27.343Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1181539.48,
		"hash": "89ee8629713912843a44bd68791fadd882e21ddc5d3bc500e30e8d570ae4b390"
	},
	{
		"id": "be93de04cdb0",
		"ts": "2026-09-07T13:56:27.547Z",
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
		"liquidityUsd": 574351.6,
		"hash": "be93de04cdb0a69a0e2f3ddd176845568751332a7faf5289f7a63a0adc3dfa5c"
	},
	{
		"id": "79d37cfffdd7",
		"ts": "2026-09-07T07:52:00.864Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116967669.03,
		"hash": "79d37cfffdd7e4ba291f8d824fa0166649cbb194a655d324b27f4c81343c9ccc"
	},
	{
		"id": "d9f54c94a98f",
		"ts": "2026-09-07T07:52:01.134Z",
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
		"liquidityUsd": 19982775.76,
		"hash": "d9f54c94a98f16b2ee175cb6cdb4b4bb2f11db363e0805211039fe96bff8e736"
	},
	{
		"id": "09a5a8891bfc",
		"ts": "2026-09-07T07:52:01.391Z",
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
		"liquidityUsd": 1014178.78,
		"hash": "09a5a8891bfc4a05b4fe226c1b34ec6722a22a2f175673061dffbe8ca4769c6f"
	},
	{
		"id": "daad06e7a269",
		"ts": "2026-09-07T07:52:01.655Z",
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
		"liquidityUsd": 30317992.63,
		"hash": "daad06e7a2693a7cb023da6c2f65abc72ff5b4cdeb70d721c4317808c6b5d504"
	},
	{
		"id": "26ccfc525552",
		"ts": "2026-09-07T07:52:02.057Z",
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
		"liquidityUsd": 4382505.51,
		"hash": "26ccfc525552c71d9dff92fb0f26446fa2f130ae5112b75d64dd3ffd90da30e1"
	},
	{
		"id": "1dde9e863e27",
		"ts": "2026-09-07T07:52:02.425Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1201039.08,
		"hash": "1dde9e863e27b69a222e018a3693a1874736b3e06b63eaa24ea144689022faa1"
	},
	{
		"id": "a521d21e3125",
		"ts": "2026-09-07T07:52:02.757Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30317879.92,
		"hash": "a521d21e31254a02cfd0cbbe76c711e245029b69536ec3653d946893aee3b73d"
	},
	{
		"id": "3a8f8bfc1f56",
		"ts": "2026-09-07T07:52:03.038Z",
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
		"liquidityUsd": 2812283.23,
		"hash": "3a8f8bfc1f561315560263b5a0b6d5ce180e598b2c4d7c190f761d8c5a771917"
	},
	{
		"id": "f53e29e2c540",
		"ts": "2026-09-07T07:52:03.272Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 983287.43,
		"hash": "f53e29e2c5408cc1011d2a6d4c506c6c8ac8ece4977b05561e3600ea3274e7a3"
	},
	{
		"id": "9a250abb2ed1",
		"ts": "2026-09-07T07:52:03.568Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1015053.96,
		"hash": "9a250abb2ed1873782333948c01da05db0ec690c784cc19cb5057366e487635c"
	},
	{
		"id": "0c5b23e2476d",
		"ts": "2026-09-07T07:52:03.787Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 278641.76,
		"hash": "0c5b23e2476de2dd3fd67254b3329b06fc3ff8fc322d948b9a17d03e29e8d7ea"
	},
	{
		"id": "d13a0a2efc45",
		"ts": "2026-09-07T07:52:04.010Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 216257.87,
		"hash": "d13a0a2efc45e324cb127a509265a793212cd6a778af313bac2aeb8109edbc35"
	},
	{
		"id": "5bb9d27a33fa",
		"ts": "2026-09-07T07:52:04.243Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1667620.53,
		"hash": "5bb9d27a33fad2eaeae6a6289b3abacf0c64bcb3905efa87f9adec56d2ccf74b"
	},
	{
		"id": "fd84db0f939d",
		"ts": "2026-09-07T07:52:04.484Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 199557.25,
		"hash": "fd84db0f939d6a2be67db8b900f3e35039a930e6c77d4d6a0219f244d270b8dc"
	},
	{
		"id": "a77d353584c2",
		"ts": "2026-09-07T07:52:04.719Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1358564.98,
		"hash": "a77d353584c20d0c4768b26d6e00e4c406021e4c280c35dc304a08cfb1fcb398"
	},
	{
		"id": "1787fd2866c9",
		"ts": "2026-09-07T07:52:04.951Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 414396.35,
		"hash": "1787fd2866c955883846705a18f48e6895427385a9ba859811a4b7bc0abfdef1"
	},
	{
		"id": "36ab3454b20f",
		"ts": "2026-09-07T07:52:05.184Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3315765.35,
		"hash": "36ab3454b20f8b8efab908874956f6023f9ae250489a076b12f9f5acb868d965"
	},
	{
		"id": "525b13ed808e",
		"ts": "2026-09-07T07:52:05.403Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1175818.16,
		"hash": "525b13ed808e944365010d9d6dd60a691934ddeb6f3b652d011da3a8e71fe91e"
	},
	{
		"id": "ae3a2aff92ee",
		"ts": "2026-09-07T07:52:05.622Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13070837.71,
		"hash": "ae3a2aff92ee9f585b1f974f3e2facbc07086fe2d0ebdf0e9449bbe6db78f3d9"
	},
	{
		"id": "e74d59061e39",
		"ts": "2026-09-07T02:40:55.173Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117462939.66,
		"hash": "e74d59061e3918ed6bd53c901d357d62691f6b57f4d993db66b96993c10a6395"
	},
	{
		"id": "7eb87b752a52",
		"ts": "2026-09-07T02:40:55.482Z",
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
		"liquidityUsd": 14138822.68,
		"hash": "7eb87b752a52dd50b0d543863d29340f751767d11d3d6b1fa1c77aca0d2a80c1"
	},
	{
		"id": "70634813a6f2",
		"ts": "2026-09-07T02:40:55.765Z",
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
		"liquidityUsd": 1030066.59,
		"hash": "70634813a6f241409bad3f64f567fb343c848db3d89f849acfe0123e5765cf10"
	},
	{
		"id": "d0cd110468f6",
		"ts": "2026-09-07T02:40:56.089Z",
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
		"liquidityUsd": 30851922.59,
		"hash": "d0cd110468f63641d23ac9bc993be7548f0c18efce304d61440080aa90bd8d6d"
	},
	{
		"id": "ecf5cfe4f487",
		"ts": "2026-09-07T02:40:56.461Z",
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
		"liquidityUsd": 4415691.58,
		"hash": "ecf5cfe4f4877ac0735d3fceb089a2aa23f8a4d93b67fde9b48806e22800e893"
	},
	{
		"id": "deb72aa53c88",
		"ts": "2026-09-07T02:40:57.084Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1216092.96,
		"hash": "deb72aa53c88fdca24cdcafd7e75688700aaa250836cfa48110fc6c6bc69d97f"
	},
	{
		"id": "64d4b8aca088",
		"ts": "2026-09-07T02:40:57.479Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3328298.4,
		"hash": "64d4b8aca088bde54cb1ebc52668a9a3a48835fc96b81c68c41d2f4ee8ce9977"
	},
	{
		"id": "25945c34c7c8",
		"ts": "2026-09-07T02:40:57.728Z",
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
		"liquidityUsd": 1750378.58,
		"hash": "25945c34c7c8e04740a764cf8f7e6e7f1eb040e6ab3a9dd356f31d439772c288"
	},
	{
		"id": "ef30be3ca797",
		"ts": "2026-09-07T02:40:57.964Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1175221.97,
		"hash": "ef30be3ca7977357f91cb24e2e8d83d2ec3a2caf3dfebb3d08e50729267a2601"
	},
	{
		"id": "fc41804bf3ce",
		"ts": "2026-09-07T02:40:58.205Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1048331.32,
		"hash": "fc41804bf3ce8e4c1536128dc2c7490b90508d1ed30db0f6c2d3fdad9c17e5f4"
	},
	{
		"id": "4869eb8f6e97",
		"ts": "2026-09-07T02:40:58.425Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 240042.26,
		"hash": "4869eb8f6e97c5e75b1179900a992e52269a434de0283125cb46743eaf536392"
	},
	{
		"id": "4d7422d60744",
		"ts": "2026-09-07T02:40:58.663Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 277793.15,
		"hash": "4d7422d607444d018c3f551bfa3aff1918b010d8ce955847ea8c6a09e3c28cf6"
	},
	{
		"id": "148a7b86fbee",
		"ts": "2026-09-07T02:40:58.868Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1621459.51,
		"hash": "148a7b86fbeed3d8337e638b22c47e1ac9bf379fad0db5ba37fd625f881e6493"
	},
	{
		"id": "fd5edcbbdae0",
		"ts": "2026-09-07T02:40:59.066Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 207386.17,
		"hash": "fd5edcbbdae05893d70da54927049c0ad15ae67261b31621f8ee3ce5aef597c9"
	},
	{
		"id": "28e3c74d4623",
		"ts": "2026-09-07T02:40:59.268Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1407223.66,
		"hash": "28e3c74d4623a237899449e37589270417053d55f38d42b43c8283dd440cf5b0"
	},
	{
		"id": "6ba45a7d09ea",
		"ts": "2026-09-07T02:40:59.465Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1109744.27,
		"hash": "6ba45a7d09ea7672123a81288cd8c74eba4b6d9da653e200b24af4337f108c59"
	},
	{
		"id": "986c376acbfb",
		"ts": "2026-09-07T02:40:59.687Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 393021.76,
		"hash": "986c376acbfbb356915ec1ef26e1dece2bd418394b1dd941650c261c192d5b6b"
	},
	{
		"id": "190aedc24ed2",
		"ts": "2026-09-07T02:40:59.892Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3414009.04,
		"hash": "190aedc24ed2a8f4d6e1d49829a90cc4fa7a8babede51acbae4f346651611be0"
	},
	{
		"id": "fd37bc8c657a",
		"ts": "2026-09-07T02:41:00.117Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13219703.49,
		"hash": "fd37bc8c657a5e353b6f33808b5897272a7fbf11c45882a126582d99a5a02024"
	},
	{
		"id": "0b26d89c80d3",
		"ts": "2026-09-06T23:35:07.289Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117340720.03,
		"hash": "0b26d89c80d3789778644074741f96353f46f71380ea7d6250bffa007b1d6884"
	},
	{
		"id": "faf146e1f786",
		"ts": "2026-09-06T23:35:08.011Z",
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
		"liquidityUsd": 19384964.88,
		"hash": "faf146e1f786bbeea6b447ec994947b63583842a78aab13c6a9dedb7f61fb4ef"
	},
	{
		"id": "698a9ad1c923",
		"ts": "2026-09-06T23:35:08.509Z",
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
		"liquidityUsd": 1045181.99,
		"hash": "698a9ad1c9236d510eca07380a583c36915c41432082be09ca58e2a6ee0bcba4"
	},
	{
		"id": "32a6920f9ff9",
		"ts": "2026-09-06T23:35:08.994Z",
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
		"liquidityUsd": 30815227.36,
		"hash": "32a6920f9ff9cb260f6a4b8aab5e1b8503bd41805e7de5149bc693b2687ef62c"
	},
	{
		"id": "d9d350bb7d38",
		"ts": "2026-09-06T23:35:09.291Z",
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
		"liquidityUsd": 4398590.51,
		"hash": "d9d350bb7d38a9c7adbdd973a1713cb195497da71971d4785270872199f649f5"
	},
	{
		"id": "c34fe6010773",
		"ts": "2026-09-06T23:35:09.617Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1225625.73,
		"hash": "c34fe6010773eed6842015fc5006723833b15b6e1adcdd0728c3108eac8fc548"
	},
	{
		"id": "aa072633a1ed",
		"ts": "2026-09-06T23:35:09.885Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30815227.36,
		"hash": "aa072633a1ed907b582d94bcb729c6ba745963b61a22b92c8a899cf03d09090d"
	},
	{
		"id": "a674a5629463",
		"ts": "2026-09-06T23:35:10.150Z",
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
		"liquidityUsd": 1735952.12,
		"hash": "a674a56294635e09ca172c4334a60becabd6af974755718976fdfbdd131124bc"
	},
	{
		"id": "4781e40a7a83",
		"ts": "2026-09-06T23:35:10.420Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1260971.72,
		"hash": "4781e40a7a833f1ee1f4a952ef14fbca3381d58931d720b18616c82a19886c18"
	},
	{
		"id": "c3f31cccbd0f",
		"ts": "2026-09-06T23:35:11.224Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1130850.49,
		"hash": "c3f31cccbd0fb03ddc373c6b882969dc10f544393992ee7e30261247c828856f"
	},
	{
		"id": "686d3ea4b514",
		"ts": "2026-09-06T23:35:11.455Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 224926.68,
		"hash": "686d3ea4b514c435176622644a944a856ea1007af7a0fe0f7226f828c56219ab"
	},
	{
		"id": "d756e92d5d0c",
		"ts": "2026-09-06T23:35:11.686Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 288074.81,
		"hash": "d756e92d5d0c0495110422bbb8da4fab3258d0115051130faa1f42d1397dba1e"
	},
	{
		"id": "495ee060ca25",
		"ts": "2026-09-06T23:35:11.943Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1470198.06,
		"hash": "495ee060ca25fe4b378d46e03d77e0d0e68414b2a024d7c48d281a2c889e9c85"
	},
	{
		"id": "bff05cf0f06a",
		"ts": "2026-09-06T23:35:12.171Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 192940.76,
		"hash": "bff05cf0f06a33e4414b44d66da432799d9fbee5a67609850d9f2ad4f981fc43"
	},
	{
		"id": "4c5d23875606",
		"ts": "2026-09-06T23:35:12.403Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1482482.18,
		"hash": "4c5d2387560661fc87899386bf89cd68c231b6ae984f80fee83950be0e312e1e"
	},
	{
		"id": "3a95e963c60b",
		"ts": "2026-09-06T23:35:12.631Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1039715.97,
		"hash": "3a95e963c60b02006421805b81af1ccc1ee6ebaec0d7a71364f8790a9048dffd"
	},
	{
		"id": "2750033ccdaf",
		"ts": "2026-09-06T23:35:12.863Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13142024.05,
		"hash": "2750033ccdaf55a17c766def6ea1cca2d8e0a202d3ae2de3016182b55c8ea3c6"
	},
	{
		"id": "90c650e58eb8",
		"ts": "2026-09-06T23:35:13.091Z",
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
		"liquidityUsd": 932244.96,
		"hash": "90c650e58eb8b166b168d8e69ca8357bf67cf26ea82cb2cdf9661a84cca20319"
	},
	{
		"id": "8d5392094522",
		"ts": "2026-09-06T23:35:13.331Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 434253.85,
		"hash": "8d53920945224e6112ec8aebd65b5d863e79721d17d8715f896041d71b0aacab"
	},
	{
		"id": "c457a4089a4b",
		"ts": "2026-09-06T21:57:31.676Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117284810.79,
		"hash": "c457a4089a4bc5c87ee174df1786af6ee6c832bcdc7d6b77872b44e6b6deb475"
	},
	{
		"id": "1bf7028fe97e",
		"ts": "2026-09-06T21:57:32.210Z",
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
		"liquidityUsd": 19544527.29,
		"hash": "1bf7028fe97e40af5c7def01c43dee3286b947afc350c5ea1d9b24354226528d"
	},
	{
		"id": "c9d0c801d824",
		"ts": "2026-09-06T21:57:32.473Z",
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
		"liquidityUsd": 1044001.58,
		"hash": "c9d0c801d8240871e14fa7ad1314a4b97578e2af3ce55ba67dcb10c73aafd192"
	},
	{
		"id": "0b390791d837",
		"ts": "2026-09-06T21:57:32.924Z",
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
		"liquidityUsd": 31024913.55,
		"hash": "0b390791d8373d667ba421b8f23a47a2177b75d3611b8accf27e945f198948e0"
	},
	{
		"id": "4ff40e961cf4",
		"ts": "2026-09-06T21:57:33.176Z",
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
		"liquidityUsd": 4385628.27,
		"hash": "4ff40e961cf4039966f92b6f6478aeb06ae4124ff65c9f4b93d3306456948bf8"
	},
	{
		"id": "edb2bd6fcd72",
		"ts": "2026-09-06T21:57:33.421Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1223416.14,
		"hash": "edb2bd6fcd724a1b826a56e96a48a3afc22af2ac573720ba95047526d1906569"
	},
	{
		"id": "136aab895b5e",
		"ts": "2026-09-06T21:57:33.698Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 31024913.55,
		"hash": "136aab895b5efc5c3e91533995604d48b4b48afe3794428efe22fe76855896a8"
	},
	{
		"id": "c5c6d5366782",
		"ts": "2026-09-06T21:57:33.958Z",
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
		"liquidityUsd": 1731904.79,
		"hash": "c5c6d536678243f691fccddaa8cc82366bf5af149dc7a069e4bb23b905e1927d"
	},
	{
		"id": "86ac373f1798",
		"ts": "2026-09-06T21:57:34.225Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1152490.59,
		"hash": "86ac373f17981156516cd4049416fe1b919519d0036d9e4cbab3f34ee6656a29"
	},
	{
		"id": "49c4c18f26cd",
		"ts": "2026-09-06T21:57:34.676Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1115328.04,
		"hash": "49c4c18f26cd31c430cef2cf085012d4fe7530fa45964722a35b25b26c3c4d8a"
	},
	{
		"id": "f059e60a4161",
		"ts": "2026-09-06T21:57:34.900Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 190475.77,
		"hash": "f059e60a41614dad5992f84047590a47902bf9224f31bb532a436b46e9e41f8c"
	},
	{
		"id": "6e260fe5c835",
		"ts": "2026-09-06T21:57:35.132Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 287734.28,
		"hash": "6e260fe5c8356841b0331ced907f4eeef588084dd2946a5120763c10f9b1da9c"
	},
	{
		"id": "43afbb88d7a0",
		"ts": "2026-09-06T21:57:35.375Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1507285.54,
		"hash": "43afbb88d7a05f9c1faf646ce7648be803351417b984b372d00ffd25218e4513"
	},
	{
		"id": "90a13c33923c",
		"ts": "2026-09-06T21:57:35.607Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 201590.32,
		"hash": "90a13c33923cc42cfe4303e46f26588034b1588dc361874d7da01296302d13b7"
	},
	{
		"id": "5480df9c40d5",
		"ts": "2026-09-06T21:57:35.836Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1400954.92,
		"hash": "5480df9c40d55c3fb75be1450561894a55522b21ae390228bc68ad46bbc0756d"
	},
	{
		"id": "a078d8c98935",
		"ts": "2026-09-06T21:57:36.115Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1035742.47,
		"hash": "a078d8c98935c2c93e3fea647bb572721627de9bdfa01ca8bc1a2fbb78e89291"
	},
	{
		"id": "f855ca5d44a7",
		"ts": "2026-09-06T21:57:36.342Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3448457.55,
		"hash": "f855ca5d44a7aad9705b7108da54045c495bdf6f094da52fce7bcf1558ff5113"
	},
	{
		"id": "24e68bf8ee76",
		"ts": "2026-09-06T21:57:36.566Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13108091.81,
		"hash": "24e68bf8ee76932c2ffdc5d70a99d223ca7a5f2c799c45d399736189e4df1cd7"
	},
	{
		"id": "a33da504c17d",
		"ts": "2026-09-06T21:57:36.796Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4291029.63,
		"hash": "a33da504c17dae4e84399419e5176d77f78724944dc6b06ca4c88eeb29fa3734"
	},
	{
		"id": "e28688a62657",
		"ts": "2026-09-06T19:56:19.706Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117070051.85,
		"hash": "e28688a62657667183613b20fb530adcbd1ca899aad08d57b63c5dd0a5ad2e1f"
	},
	{
		"id": "b7603fa496e3",
		"ts": "2026-09-06T19:56:20.190Z",
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
		"liquidityUsd": 19833106.81,
		"hash": "b7603fa496e35d3bcdbe59e56d7376fce2f70a124c4b432f150428473c658d0d"
	},
	{
		"id": "a02848fc106c",
		"ts": "2026-09-06T19:56:20.510Z",
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
		"liquidityUsd": 1037889.82,
		"hash": "a02848fc106c20c572dcc400e44aa8901c5cc482d90669d403c923fb81206971"
	},
	{
		"id": "54cdfdf8c954",
		"ts": "2026-09-06T19:56:20.719Z",
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
		"liquidityUsd": 30616631.87,
		"hash": "54cdfdf8c95441886f63b46b7afba21babe869eb7e67a9f1ddac3dfea13b877c"
	},
	{
		"id": "3c60e2f33212",
		"ts": "2026-09-06T19:56:20.931Z",
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
		"liquidityUsd": 4306123.14,
		"hash": "3c60e2f33212ecc395b830697ea1192f5e56d126d2901b8ef2b4204a813ae92e"
	},
	{
		"id": "2dc5a2315e67",
		"ts": "2026-09-06T19:56:21.122Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1214711.71,
		"hash": "2dc5a2315e6743f5377acf27a1f3413512d398aa5b7d1a45b334d1b5ab6342d9"
	},
	{
		"id": "5b080c7b913a",
		"ts": "2026-09-06T19:56:21.328Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3609069.63,
		"hash": "5b080c7b913a40fb856273da860021394ff5f9c56103640405e91d628b201c39"
	},
	{
		"id": "e24090d2353a",
		"ts": "2026-09-06T19:56:21.540Z",
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
		"liquidityUsd": 1720374.24,
		"hash": "e24090d2353a741ae313d2a0080d57fe9de95546af29bd9322e1908a3924d5f7"
	},
	{
		"id": "02782426719a",
		"ts": "2026-09-06T19:56:21.743Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 919352.97,
		"hash": "02782426719a96c3973a5e429dbd7fa37025866d3f812381f8cc8450fcbb5ca1"
	},
	{
		"id": "042c377e4542",
		"ts": "2026-09-06T19:56:22.109Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1104808.09,
		"hash": "042c377e4542eee26b90e4b68611111cf2499ec22e1323d9f4ec9cc18803fb56"
	},
	{
		"id": "ea24e9713cff",
		"ts": "2026-09-06T19:56:22.316Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 222089.63,
		"hash": "ea24e9713cffe165a7140eef6fd0a6055548b81f8dfeb0ef428b663302b1b860"
	},
	{
		"id": "118cbe7a685a",
		"ts": "2026-09-06T19:56:22.544Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 288613.32,
		"hash": "118cbe7a685a7ad9a4f4ca84b4e39d0a3524c8c8baa6764c74e34e1b92efb1eb"
	},
	{
		"id": "4331bbcd0854",
		"ts": "2026-09-06T19:56:22.899Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1495368.47,
		"hash": "4331bbcd0854ae680b07c8aa77be165463d9fa4cebbf31bfef10bc040cd653e0"
	},
	{
		"id": "04d795145ea1",
		"ts": "2026-09-06T19:56:23.110Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 154968.47,
		"hash": "04d795145ea13da3062e5216bacb70d7394ad50d996f8d9de6e7f76a3677573b"
	},
	{
		"id": "ba3cdf2bb1e9",
		"ts": "2026-09-06T19:56:23.314Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1461375.71,
		"hash": "ba3cdf2bb1e994cca8ff2c01e04ca5f2da6f587feb6566d46dcbebb38e18217a"
	},
	{
		"id": "28a9fb6547b3",
		"ts": "2026-09-06T19:56:23.515Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3335855.36,
		"hash": "28a9fb6547b3f32cf73705488f0e5967f0809df8efe0917925c7cfd0e4d3299f"
	},
	{
		"id": "e27b89ec4821",
		"ts": "2026-09-06T19:56:23.717Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1031570.17,
		"hash": "e27b89ec4821f5de2c83c0a7283896dd834014b2b568c2cd9f516c6f882d3584"
	},
	{
		"id": "27e54d6c75f9",
		"ts": "2026-09-06T19:56:23.924Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13070961.33,
		"hash": "27e54d6c75f9d9009dc6a99e7e61fd7a4140a5a1a1d11ab133ee8bb894eee68d"
	},
	{
		"id": "621c7133150a",
		"ts": "2026-09-06T17:28:53.790Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117003327.22,
		"hash": "621c7133150ac33e2dac0172340e4acc3ea877d5e6200592139c266da9d7a421"
	},
	{
		"id": "a200ce56d4ba",
		"ts": "2026-09-06T17:28:54.290Z",
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
		"liquidityUsd": 17996206.42,
		"hash": "a200ce56d4bab933d2d90955ef061f5ce2e009567e0cc77316880f61c9857057"
	},
	{
		"id": "1f3396022ff6",
		"ts": "2026-09-06T17:28:54.535Z",
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
		"liquidityUsd": 1036878.15,
		"hash": "1f3396022ff641a9ea5feb6a365c15122f89a09c6cde5cf90fd24b9bac918e71"
	},
	{
		"id": "766ee5c21e12",
		"ts": "2026-09-06T17:28:54.825Z",
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
		"liquidityUsd": 30425464.59,
		"hash": "766ee5c21e122f5eeef9a026421f4fafda1a8bf45fcef67de23f7707f30ea0d1"
	},
	{
		"id": "e5c1c7af7e10",
		"ts": "2026-09-06T17:28:55.084Z",
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
		"liquidityUsd": 4307495.6,
		"hash": "e5c1c7af7e108a952f780ba70ce17d11cf17893fe1f41a55f8d597949427dfe6"
	},
	{
		"id": "3130b083ab7f",
		"ts": "2026-09-06T17:28:55.336Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1214485.59,
		"hash": "3130b083ab7f5df3e307a612fafb561f02a70b413b5c30a3519a918a40774d11"
	},
	{
		"id": "78fe60a4ea60",
		"ts": "2026-09-06T17:28:55.634Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3555687.34,
		"hash": "78fe60a4ea6078be8a0a4ed792a882b0ac32218497225ab3b7895ea2a6f3643c"
	},
	{
		"id": "9db574a37f18",
		"ts": "2026-09-06T17:28:55.917Z",
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
		"liquidityUsd": 1721225.63,
		"hash": "9db574a37f18ef8218a0d79325b61af8c69b784352e7ef08b11e35fefd1cd1ed"
	},
	{
		"id": "9450e7eba74a",
		"ts": "2026-09-06T17:28:56.251Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 916000.74,
		"hash": "9450e7eba74a5d1ec33cad3781c96badb32f95f11a11cb460f05ede45225f0de"
	},
	{
		"id": "18cf7b6740b4",
		"ts": "2026-09-06T17:28:56.535Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1132967.45,
		"hash": "18cf7b6740b4f7bcf50fbc02ee34820c6d3998d396c3f3f1a82ea3a08ee4056d"
	},
	{
		"id": "16be48eaeed1",
		"ts": "2026-09-06T17:28:56.756Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 245959.68,
		"hash": "16be48eaeed11e594ed1ebd86fe70111ff858ec69d95e2f9018d8483e9bb0d7c"
	},
	{
		"id": "5ebafd05c034",
		"ts": "2026-09-06T17:28:56.999Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1517186.64,
		"hash": "5ebafd05c03489b019dbcf0a969d4e9b1953d75442963c4b50603f5866466b08"
	},
	{
		"id": "0a4555af7af1",
		"ts": "2026-09-06T17:28:57.227Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 144210.96,
		"hash": "0a4555af7af19851c3c1882db401564297878f3632d89c7dbd66aa59b8f2eb26"
	},
	{
		"id": "9f86b966481f",
		"ts": "2026-09-06T17:28:57.467Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 289310.58,
		"hash": "9f86b966481fddd3231b94b7b74034bed6927060b76e124c7ff6bd1e07c2734e"
	},
	{
		"id": "7d1ac5f178b5",
		"ts": "2026-09-06T17:28:57.693Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3346796.46,
		"hash": "7d1ac5f178b5e1c9e1063d4dfe9b9314164900bf4251410913b4f43d69b0b40c"
	},
	{
		"id": "a3033b49363c",
		"ts": "2026-09-06T17:28:57.916Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1038067.99,
		"hash": "a3033b49363cfd81e50cc5a427944678ef01748f7d93da9e1a1fe0308c97c417"
	},
	{
		"id": "34a8b1e7ff3d",
		"ts": "2026-09-06T17:28:58.179Z",
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
		"liquidityUsd": 531930.87,
		"hash": "34a8b1e7ff3dd7e7962234e5386e10bb2fc5b95b8e3f333a105c9aa4baafdfcd"
	},
	{
		"id": "b29db8ffcc08",
		"ts": "2026-09-06T17:28:58.400Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 194413.17,
		"hash": "b29db8ffcc0873907b60746d267892b1e4d79e48554a0444ca804d75caf9a308"
	},
	{
		"id": "a32658ecc640",
		"ts": "2026-09-06T14:51:35.248Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116630218.45,
		"hash": "a32658ecc64099ac58fe7a3e7c93b5a0ac97ed6927d8ecd2a322f95fd5392e68"
	},
	{
		"id": "8c6af46a5ce3",
		"ts": "2026-09-06T14:51:35.681Z",
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
		"liquidityUsd": 21381379.93,
		"hash": "8c6af46a5ce3a4a44909f1c04e471d6ee61713263fd82e82b6c813b8527eccdf"
	},
	{
		"id": "8fff98c4d4bd",
		"ts": "2026-09-06T14:51:35.918Z",
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
		"liquidityUsd": 1021854.94,
		"hash": "8fff98c4d4bd9a342790e8e0011f9fcaba6efb1e6cdf31371bfde0043502bb4e"
	},
	{
		"id": "e52bfc907158",
		"ts": "2026-09-06T14:51:36.125Z",
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
		"liquidityUsd": 30400671.42,
		"hash": "e52bfc907158541c67a4c6ca5f2b4ab0a4fe60bc3252d44d041d3284b3979968"
	},
	{
		"id": "918f08e80141",
		"ts": "2026-09-06T14:51:36.342Z",
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
		"liquidityUsd": 4288946.78,
		"hash": "918f08e801411f0a5180bf56052c7f35d8bc8e87e6f9e0063bc0b836e224405d"
	},
	{
		"id": "2a4fea3a46bd",
		"ts": "2026-09-06T14:51:36.565Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1210336.71,
		"hash": "2a4fea3a46bd365ff6a52ecc51a6c5953a36eaa385bb11be335772ab16aa0acf"
	},
	{
		"id": "7453346c2823",
		"ts": "2026-09-06T14:51:36.805Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3486890.32,
		"hash": "7453346c2823150000621ccf134fd8489b121bfae2b463316c628e21eb73976a"
	},
	{
		"id": "6e22446ed6d2",
		"ts": "2026-09-06T14:51:37.022Z",
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
		"liquidityUsd": 1718563.07,
		"hash": "6e22446ed6d25ad77369cde9efeebceda7896199370c69e9c1ec099d3d558e1b"
	},
	{
		"id": "d721fdb5d1e0",
		"ts": "2026-09-06T14:51:37.235Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 946934.67,
		"hash": "d721fdb5d1e09f3ae492b26f7449edb8ef079bf28fd1d2bad209325994098ef3"
	},
	{
		"id": "873d97501da5",
		"ts": "2026-09-06T14:51:37.456Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1117352.04,
		"hash": "873d97501da5f3b009a564498637efb17758759f415ece069fdd09d858e34658"
	},
	{
		"id": "9748596690fe",
		"ts": "2026-09-06T14:51:37.655Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 239528.58,
		"hash": "9748596690fe42d9b58163416e574663a286cb3576e2a474dff2f5a48c1c11cc"
	},
	{
		"id": "c65a32479d0d",
		"ts": "2026-09-06T14:51:37.849Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1503571.55,
		"hash": "c65a32479d0d2e24ca55054d0692c3d36f299596a1f6a0f449b7d2601e862575"
	},
	{
		"id": "0bfeaf0c64b6",
		"ts": "2026-09-06T14:51:38.046Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 131318.24,
		"hash": "0bfeaf0c64b6bca76e96fba0ff3c3af6da5de5ad9f3daaef01af425bd7aa3aee"
	},
	{
		"id": "4d0cb3790b33",
		"ts": "2026-09-06T14:51:38.239Z",
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
		"liquidityUsd": 528436.75,
		"hash": "4d0cb3790b33ba81efe6aed7f98c52f5bc3641d41cc5577e006b5e7a72746cbe"
	},
	{
		"id": "6cf2919f27fb",
		"ts": "2026-09-06T14:51:38.442Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3318268.65,
		"hash": "6cf2919f27fb7c62d14159f5b93d18cdc8607de2e9714847b01826d0bbc3272e"
	},
	{
		"id": "abf04b43f470",
		"ts": "2026-09-06T14:51:38.634Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1036444.06,
		"hash": "abf04b43f4701dcfeacdcf4a6f0ec7bc2256e413f1100656ff612cb2e3c2015b"
	},
	{
		"id": "4b958c693ed6",
		"ts": "2026-09-06T14:51:38.830Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1176035.82,
		"hash": "4b958c693ed65571ddb45ced77fdc8f27f3ffd79ccd0b71e4b366576ac2ce5bc"
	},
	{
		"id": "9f5d62ca48d3",
		"ts": "2026-09-06T14:51:39.062Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13066247.43,
		"hash": "9f5d62ca48d3dc91ff3ffee1cfeee7b5b0c90ee2ff317dc5f8a29867f04b89b2"
	},
	{
		"id": "c091a1d2ee64",
		"ts": "2026-09-06T11:55:04.282Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116902055.33,
		"hash": "c091a1d2ee64ecbe1f0f30fb5d329808d6e8ae04520cd353f4b8bb34ab5a9fd7"
	},
	{
		"id": "146a38528c03",
		"ts": "2026-09-06T11:55:04.949Z",
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
		"liquidityUsd": 18738727.72,
		"hash": "146a38528c03dfdf3301c40ae42a4d868d0a9f5d493d2a6054cfbf2218505758"
	},
	{
		"id": "cbc643d513ec",
		"ts": "2026-09-06T11:55:05.359Z",
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
		"liquidityUsd": 1031526.39,
		"hash": "cbc643d513eccab9ba2797f831c5f8cd067c304e916b20c32f909e682e524c64"
	},
	{
		"id": "166972c9ea35",
		"ts": "2026-09-06T11:55:05.740Z",
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
		"liquidityUsd": 30880203.48,
		"hash": "166972c9ea3512699895fa96b631f2af10ca64a50084fe5e3ac53b33a740c990"
	},
	{
		"id": "70104c2d197c",
		"ts": "2026-09-06T11:55:06.252Z",
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
		"liquidityUsd": 4282632.21,
		"hash": "70104c2d197ced89e976f995e54331e333d9ceaddce3621da85e2475bf85f8b1"
	},
	{
		"id": "bc7ae79ad26a",
		"ts": "2026-09-06T11:55:06.713Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1231708.34,
		"hash": "bc7ae79ad26a8b054ed4b70822e9cf824567c9e127b0b16b68f91ff06c218882"
	},
	{
		"id": "f31bfc0eeb42",
		"ts": "2026-09-06T11:55:07.112Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3517213.72,
		"hash": "f31bfc0eeb4216cbf5dd7c0dfe7c193cad0625483e885588faae4cd0bc351781"
	},
	{
		"id": "675c8a278698",
		"ts": "2026-09-06T11:55:07.437Z",
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
		"liquidityUsd": 2822179.18,
		"hash": "675c8a278698f738f2730b511e46b7b21f9e6fb487b12085d79a32839268708d"
	},
	{
		"id": "a51dd57f804b",
		"ts": "2026-09-06T11:55:07.817Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 826731.56,
		"hash": "a51dd57f804bcc1e7446061947975239b4b67a9c98a6b8fed383ea442d8baccc"
	},
	{
		"id": "eb1bd12bc1ab",
		"ts": "2026-09-06T11:55:08.192Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 260582.84,
		"hash": "eb1bd12bc1abe735a01566bb5a6dea0e72b1d88062658aca8067fcfb78df19f6"
	},
	{
		"id": "89e9a177a601",
		"ts": "2026-09-06T11:55:08.419Z",
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
		"liquidityUsd": 1248035.12,
		"hash": "89e9a177a601508da3fcf8693dc1f40a0949f3315c95633f706974f2c6be79cb"
	},
	{
		"id": "8cc547651d36",
		"ts": "2026-09-06T11:55:08.644Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1517731.35,
		"hash": "8cc547651d36b28c30f0767c665f846173cabd736ae93531a67904075756c186"
	},
	{
		"id": "6a27e8c4e952",
		"ts": "2026-09-06T11:55:08.870Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 139882.07,
		"hash": "6a27e8c4e952149b9618abc7cb8cf309d79c250288a39316a16cb4772077837e"
	},
	{
		"id": "8e53fda90b60",
		"ts": "2026-09-06T11:55:09.099Z",
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
		"liquidityUsd": 563545.78,
		"hash": "8e53fda90b60ae7f1897073f11590970a064bd7a21ffd4f42f288a6ddd6d0ea9"
	}
]
