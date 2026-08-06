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
	"updatedAt": "2026-08-06T05:45:13.809Z",
	"tokensScored": 7612,
	"verdictsIssued": 7612,
	"safe": 6616,
	"risky": 585,
	"likelyRug": 411,
	"ticks": 463
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "9de30ebc3151",
		"ts": "2026-08-06T05:45:09.504Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114377117.76,
		"hash": "9de30ebc315180699b50bd725d2041e172cf9b4830716710b626822916f5ba93"
	},
	{
		"id": "82504ed1127b",
		"ts": "2026-08-06T05:45:09.973Z",
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
		"liquidityUsd": 17421739.43,
		"hash": "82504ed1127b2cec7410b80b7ac200762be4384f7654a3b6da803f4266389917"
	},
	{
		"id": "231b8093334e",
		"ts": "2026-08-06T05:45:10.227Z",
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
		"liquidityUsd": 1036709.8,
		"hash": "231b8093334e0a7f5cd7075d3ee08621a5fbfc9aa7bbe350988209ae60c4f926"
	},
	{
		"id": "b8651989a91e",
		"ts": "2026-08-06T05:45:10.496Z",
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
		"liquidityUsd": 25795736.12,
		"hash": "b8651989a91e0483b0cb470b00a84f69daf24f938576424c8d8a0e3ef2f6cfc7"
	},
	{
		"id": "c56c8c1a29e3",
		"ts": "2026-08-06T05:45:10.739Z",
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
		"liquidityUsd": 4478369.52,
		"hash": "c56c8c1a29e396289363567c414e798c82167f2d243b657aa66204b703fe6cc8"
	},
	{
		"id": "1ff57d9e6e16",
		"ts": "2026-08-06T05:45:11.006Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 917733.26,
		"hash": "1ff57d9e6e164f1554023b98eb2c59f7f34f46e65d009862e22e4ef8f50c458a"
	},
	{
		"id": "ab39be54e377",
		"ts": "2026-08-06T05:45:11.245Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25795736.12,
		"hash": "ab39be54e37774900a184d761a0cb087170436a94221d58a5335f23b8582149d"
	},
	{
		"id": "3d7b673197af",
		"ts": "2026-08-06T05:45:11.492Z",
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
		"liquidityUsd": 1968268.76,
		"hash": "3d7b673197af0c2769fb91c37e353be6d769edbe6ce4d9f22f8ff83107857864"
	},
	{
		"id": "78a1cee50be5",
		"ts": "2026-08-06T05:45:11.737Z",
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
		"liquidityUsd": 1044872.15,
		"hash": "78a1cee50be5cbfc17a2967e5e5afecb216611f31f1d681c076601efbfb4e7a2"
	},
	{
		"id": "af51a2ca14e2",
		"ts": "2026-08-06T05:45:11.980Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3422767.91,
		"hash": "af51a2ca14e24a345c8a51f80b501f1d29226175322037c782045b5d51835a2c"
	},
	{
		"id": "702ab3166a19",
		"ts": "2026-08-06T05:45:12.211Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 283136.6,
		"hash": "702ab3166a195ed1a0353a77b55d6a161cdec96ce9b7119124a4801ed428a8cd"
	},
	{
		"id": "84d4c7bf6471",
		"ts": "2026-08-06T05:45:12.452Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 770714.88,
		"hash": "84d4c7bf6471111fe68d899d4d57880057420aa1dcb2b7b47eb6fb9c93cac49d"
	},
	{
		"id": "d354b790a249",
		"ts": "2026-08-06T05:45:12.676Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4138694.92,
		"hash": "d354b790a249da13821eee40746d2afa13db5c1ed8b47f7ed129a338b2cf69f5"
	},
	{
		"id": "9142d21a7eae",
		"ts": "2026-08-06T05:45:12.905Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2003720.78,
		"hash": "9142d21a7eaeaf63a144bd3f11b758056930df7d7556e19aee3cd9e8c7c82351"
	},
	{
		"id": "30372b2966e0",
		"ts": "2026-08-06T05:45:13.132Z",
		"symbol": "SOSO",
		"token": "0x624e2e7fDc8903165F64891672267AB0FCB98831",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 305335.91,
		"hash": "30372b2966e06f3172563ec6d5b57601b8645c0e6595d1da1d63ae8ec4eb1ef4"
	},
	{
		"id": "d6dcedb64291",
		"ts": "2026-08-06T05:45:13.358Z",
		"symbol": "msETH",
		"token": "0x7Ba6F01772924a82D9626c126347A28299E98c98",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13899439.94,
		"hash": "d6dcedb642917da9b36b9182fe1cb7203e97dd6164140f49704964c7e0923185"
	},
	{
		"id": "7fd75f72f4b8",
		"ts": "2026-08-06T05:45:13.584Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 480033.88,
		"hash": "7fd75f72f4b81303a0c1edde4684d5c963a6bf87cdd3f21df85511a8081329a0"
	},
	{
		"id": "8300fbf58c7c",
		"ts": "2026-08-06T05:45:13.809Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1118007.53,
		"hash": "8300fbf58c7cc7884a38f359eb0746a5994bd74d3442ccead112a7a592823749"
	},
	{
		"id": "1bc0b2d6b1ef",
		"ts": "2026-08-06T02:36:21.136Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113943942.07,
		"hash": "1bc0b2d6b1efbd2c479d08d89a5256c40b0bc4b1493c1c53d003f9bcaba23e56"
	},
	{
		"id": "fe30261e4594",
		"ts": "2026-08-06T02:36:21.335Z",
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
		"liquidityUsd": 16394653.43,
		"hash": "fe30261e459454a000569f2fe9444b9b3f2007f737002c7c708f891253da48c5"
	},
	{
		"id": "99480da41a1e",
		"ts": "2026-08-06T02:36:21.532Z",
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
		"liquidityUsd": 1045085.85,
		"hash": "99480da41a1e3129d967ffb6539b64bbd556665481dd07ff1cd0de7ed99360f3"
	},
	{
		"id": "312fa8d29642",
		"ts": "2026-08-06T02:36:21.726Z",
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
		"liquidityUsd": 25681222.79,
		"hash": "312fa8d296422897d26ad29e70d55dfc3e08d16d5d1e4817149726eb0634b6ac"
	},
	{
		"id": "b21e8085578f",
		"ts": "2026-08-06T02:36:22.074Z",
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
		"liquidityUsd": 4458274.27,
		"hash": "b21e8085578f46aa36e626c8a1958ef810320aa3193d75ef4fdc5c9206f3eef5"
	},
	{
		"id": "51a7e56ffe6f",
		"ts": "2026-08-06T02:36:22.273Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 917720.58,
		"hash": "51a7e56ffe6ff45cd49b740d855fe7f67e4e3713e7efddc43b69428ce421cc44"
	},
	{
		"id": "9ec1d247634f",
		"ts": "2026-08-06T02:36:22.465Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25681222.79,
		"hash": "9ec1d247634ff38fd3c5aa7389d6f682a9bd49258b249d615aae92bd72d16e3f"
	},
	{
		"id": "0ce0efe91a67",
		"ts": "2026-08-06T02:36:22.657Z",
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
		"liquidityUsd": 1955333.38,
		"hash": "0ce0efe91a672c1963b70f0c156745febb04e93b1c4a2e0608c36d9f0fd60e3a"
	},
	{
		"id": "1c9751c13236",
		"ts": "2026-08-06T02:36:22.854Z",
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
		"liquidityUsd": 1052567.2,
		"hash": "1c9751c13236aa95733b3874ad3dc03307f570925fd8df2cd982705225dcef88"
	},
	{
		"id": "9d0fe3ed90bb",
		"ts": "2026-08-06T02:36:23.046Z",
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
		"liquidityUsd": 741374.23,
		"hash": "9d0fe3ed90bb6632d7e05ace2e405a8314fcc2f410a1e5bde03390fde0c7e6ea"
	},
	{
		"id": "8972a4b72695",
		"ts": "2026-08-06T02:36:23.226Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 283776.57,
		"hash": "8972a4b726957e785489b91929b1acd9766801d996fbdfe80830644879b6e7b2"
	},
	{
		"id": "f6d8c242c3ec",
		"ts": "2026-08-06T02:36:23.403Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3242419.94,
		"hash": "f6d8c242c3ec30216c02e1a5e33f48b3201ec50ccd6bd520b15234c130ecb7a5"
	},
	{
		"id": "2b9d4bc24a85",
		"ts": "2026-08-06T02:36:23.584Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4132597.65,
		"hash": "2b9d4bc24a859028a67933e95f8a0c4d6c230148429b15f384a9821407ca19c4"
	},
	{
		"id": "3199fc20e049",
		"ts": "2026-08-06T02:36:23.762Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1979860.24,
		"hash": "3199fc20e04918e9e81dd896119c85b3736bb30db28a4d53099c0b4abbe4738b"
	},
	{
		"id": "0b2c88e4a8d9",
		"ts": "2026-08-06T02:36:23.957Z",
		"symbol": "msETH",
		"token": "0x7Ba6F01772924a82D9626c126347A28299E98c98",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13807645.74,
		"hash": "0b2c88e4a8d92f49a8a6041b69b060cb81cbcd846aaa5f5a34809af831a4a12c"
	},
	{
		"id": "5347608d05eb",
		"ts": "2026-08-06T02:36:24.159Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 478551.86,
		"hash": "5347608d05eb9b18a78a1ff6a060d21e1d8081ca38c997421c44cc3a313d72f7"
	},
	{
		"id": "341dd94e80cb",
		"ts": "2026-08-06T02:36:24.343Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 71370.39,
		"hash": "341dd94e80cb33fc1b53d65bf4060573c957653ef3e3757208a8835d445bf27b"
	},
	{
		"id": "a438234fd9af",
		"ts": "2026-08-05T23:57:01.372Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114116739.11,
		"hash": "a438234fd9af33218d3e13b0a437cc056c3df127324d7cac9380223cceb6d62a"
	},
	{
		"id": "ba2bc62befe4",
		"ts": "2026-08-05T23:57:01.825Z",
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
		"liquidityUsd": 16618307.56,
		"hash": "ba2bc62befe419891a8a6f08e646ff8189ac59c1d6eb38398a93c407608579a2"
	},
	{
		"id": "104309a678c5",
		"ts": "2026-08-05T23:57:02.071Z",
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
		"liquidityUsd": 1047081.42,
		"hash": "104309a678c5eaf4c7a461a23dccceefe584995e16e33d7b4399b1dd88116f0f"
	},
	{
		"id": "7cc42e5a1ff4",
		"ts": "2026-08-05T23:57:02.328Z",
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
		"liquidityUsd": 25709515.3,
		"hash": "7cc42e5a1ff4ac3c6ae8dd60a77ed546191baed4c229f632a3bc38f0036fdfb3"
	},
	{
		"id": "2cdfa6594579",
		"ts": "2026-08-05T23:57:02.660Z",
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
		"liquidityUsd": 4481439.49,
		"hash": "2cdfa6594579a39c2016b697788f7bc2abebcb818b55023ed4e834b778896d7a"
	},
	{
		"id": "ee146f160ffc",
		"ts": "2026-08-05T23:57:02.902Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 922530.37,
		"hash": "ee146f160ffc383e8026acd2f7954a2523867a7714d778fc9006db1c75d5c26d"
	},
	{
		"id": "6b1121997800",
		"ts": "2026-08-05T23:57:03.136Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25709515.3,
		"hash": "6b1121997800e8d4910e1a9ca257c80f489653c520e347ed06a32b270938aeed"
	},
	{
		"id": "afecf2c8cc6a",
		"ts": "2026-08-05T23:57:03.413Z",
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
		"liquidityUsd": 2118414.79,
		"hash": "afecf2c8cc6a5a29248bd3bc383b412137d3659bc3f6723a533a2f13f7ebd8b1"
	},
	{
		"id": "d554b692c47e",
		"ts": "2026-08-05T23:57:03.648Z",
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
		"liquidityUsd": 1055346.48,
		"hash": "d554b692c47ea777f80851697222e9a95ce1d4c76c92cb0b862cad6c3bcfca27"
	},
	{
		"id": "ad56cdeea855",
		"ts": "2026-08-05T23:57:03.884Z",
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
		"liquidityUsd": 760051,
		"hash": "ad56cdeea855f3cccf714f850f4f293bf5c5930d7abc40813d191c1ee2d10f31"
	},
	{
		"id": "3ce4b740aeb5",
		"ts": "2026-08-05T23:57:04.107Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 279984.5,
		"hash": "3ce4b740aeb5062c74bfd7d42884c3708cb52d15d474ab57bb155f15c30f1102"
	},
	{
		"id": "59afb992de5e",
		"ts": "2026-08-05T23:57:04.329Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3262856.66,
		"hash": "59afb992de5e026c1f5515958578238613a2a47d599e3c3374be085c1fd9a9d4"
	},
	{
		"id": "24905eb5c662",
		"ts": "2026-08-05T23:57:04.550Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1993513.35,
		"hash": "24905eb5c6629655caa331b372ee69bee577a721e0cdfd08194bd62a80e56ab8"
	},
	{
		"id": "89286d38ae07",
		"ts": "2026-08-05T23:57:04.774Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 482216.29,
		"hash": "89286d38ae07e2ec877b135c927635fc90f84ec232d885288db6449fc13aad36"
	},
	{
		"id": "9877edc659dc",
		"ts": "2026-08-05T23:57:04.993Z",
		"symbol": "msETH",
		"token": "0x7Ba6F01772924a82D9626c126347A28299E98c98",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13894893.26,
		"hash": "9877edc659dcd41ba80934492bcdc8ad2ab6bd0e2647f73667155f5fb6cbe546"
	},
	{
		"id": "06dd5b6884e2",
		"ts": "2026-08-05T23:57:05.215Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4153793.3,
		"hash": "06dd5b6884e2f2056809187cf61900eb0747b43c6d8d5d0f301a4a3f91608a92"
	},
	{
		"id": "078bd66420ba",
		"ts": "2026-08-05T23:57:05.435Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 100493.79,
		"hash": "078bd66420bace8d73b4edc15480c65b91434e414018ea622c3f3ade085af873"
	},
	{
		"id": "9092d5a1fb15",
		"ts": "2026-08-05T22:09:16.314Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114152192.09,
		"hash": "9092d5a1fb15f8dce6fdd0d12b858f355e5f50f0d39f7f29ef8370567ba9cf7b"
	},
	{
		"id": "0f86499e73a7",
		"ts": "2026-08-05T22:09:16.758Z",
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
		"liquidityUsd": 16853224.32,
		"hash": "0f86499e73a7190af9bbe71a30208b6a28ce5d6a50a9b027001cdc8d150f0312"
	},
	{
		"id": "7d0306aa0332",
		"ts": "2026-08-05T22:09:17.007Z",
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
		"liquidityUsd": 1049310.32,
		"hash": "7d0306aa03324ad54e5e12b3f328fbc18d0c0fc7022928d7cb4633e85f37b5f9"
	},
	{
		"id": "a17cdb922fc3",
		"ts": "2026-08-05T22:09:17.257Z",
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
		"liquidityUsd": 25694913.23,
		"hash": "a17cdb922fc30f98e8b560c9363e8483a9caa85c69abe899884d766bfe799d68"
	},
	{
		"id": "2e4ca16a5456",
		"ts": "2026-08-05T22:09:17.529Z",
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
		"liquidityUsd": 4498629.4,
		"hash": "2e4ca16a5456b0e94b469aa714c4cc8763eaf9101e9addf8183cb3c02c05da25"
	},
	{
		"id": "e6d87cc892db",
		"ts": "2026-08-05T22:09:17.774Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 922530.37,
		"hash": "e6d87cc892dbf637a1d71347d75afbbd97907ea331eaae7cf3668d5e23920281"
	},
	{
		"id": "0d97a9e3e10a",
		"ts": "2026-08-05T22:09:18.012Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25694913.23,
		"hash": "0d97a9e3e10a9b2bd4c9c91f0072e3a7c6f1e6579f36312d6831301ff70b4cd8"
	},
	{
		"id": "062514e223ed",
		"ts": "2026-08-05T22:09:18.286Z",
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
		"liquidityUsd": 2128361.05,
		"hash": "062514e223ed3ec2aa38391a014903a4bf1decac4c28e9cf34d57e84a6a4b2b9"
	},
	{
		"id": "1cd6009189e7",
		"ts": "2026-08-05T22:09:18.539Z",
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
		"liquidityUsd": 1050541.02,
		"hash": "1cd6009189e73a7b665a5e7c26396944815f39bea4e761809305550650138ead"
	},
	{
		"id": "99cbacc0ff4f",
		"ts": "2026-08-05T22:09:18.809Z",
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
		"liquidityUsd": 766705.98,
		"hash": "99cbacc0ff4fcd72841e5716d686f6cb5da1d76b70ea07b1e379118fbff499b1"
	},
	{
		"id": "75b75de507e8",
		"ts": "2026-08-05T22:09:19.039Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3414515.38,
		"hash": "75b75de507e8fe9e4c7adc120d90b009b5d02b0b727d6b5570615aa5377a14c9"
	},
	{
		"id": "039cd9d1e71e",
		"ts": "2026-08-05T22:09:19.265Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1992012.47,
		"hash": "039cd9d1e71e091301022e962700854ce434a5670c9c6c5fbfc53404d0fb5610"
	},
	{
		"id": "178997f8327f",
		"ts": "2026-08-05T22:09:19.490Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 279428.59,
		"hash": "178997f8327f9a3ef57e78e28e7e774b71a6488201bb707a929444c5e29697fc"
	},
	{
		"id": "cdfb52c6c060",
		"ts": "2026-08-05T22:09:19.720Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 476043.32,
		"hash": "cdfb52c6c0604d25836baa0c4c8b77b8ed17f6adfa5df3da95b47e180ade6895"
	},
	{
		"id": "2cde4818e195",
		"ts": "2026-08-05T22:09:19.939Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 85095.65,
		"hash": "2cde4818e1958c960ca04883fea592bf28e3847e8c6d311878ff8b13e0a44f03"
	},
	{
		"id": "2703be3b4bad",
		"ts": "2026-08-05T22:09:20.166Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4230112.08,
		"hash": "2703be3b4badf7445d535bca51b6ebaaf3f47685585d993782d161ac31b31df5"
	},
	{
		"id": "a84d7f3ebaba",
		"ts": "2026-08-05T20:23:27.865Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114439392.99,
		"hash": "a84d7f3ebaba7e8f8fa3d8c460ab8451e4f78a794832c12b999aa6946704db19"
	},
	{
		"id": "38be43cd3cd5",
		"ts": "2026-08-05T20:23:28.317Z",
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
		"liquidityUsd": 17342601.31,
		"hash": "38be43cd3cd524ea624ac0c0adfeec1c8973766a37de7d7e94ca9902de6f0e9e"
	},
	{
		"id": "a3495e0289e0",
		"ts": "2026-08-05T20:23:29.006Z",
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
		"liquidityUsd": 1049310.32,
		"hash": "a3495e0289e07311ad69ac8eee48cc7ccd1242719b71902a1cb110bff6e2a47f"
	},
	{
		"id": "8a53725fc16b",
		"ts": "2026-08-05T20:23:29.249Z",
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
		"liquidityUsd": 25785648.09,
		"hash": "8a53725fc16b2626a6a5a2544858d2dc7f34f8c06061486956f0b482386182c9"
	},
	{
		"id": "998dc27b0f0b",
		"ts": "2026-08-05T20:23:29.504Z",
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
		"liquidityUsd": 4498582.53,
		"hash": "998dc27b0f0b705764801e01f46f0294ae6825f4c3505d474b671c1434274439"
	},
	{
		"id": "d5c4a96393ae",
		"ts": "2026-08-05T20:23:29.749Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 921884.59,
		"hash": "d5c4a96393aecc8af67edafff3ccc3367f1dc2c5710bb840456bc839f05ed688"
	},
	{
		"id": "93ce39520476",
		"ts": "2026-08-05T20:23:29.994Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25785647.89,
		"hash": "93ce39520476c45cab2cac0b36de0363b05a8efc06fd014e4293b663d6b15bef"
	},
	{
		"id": "13d672e574ad",
		"ts": "2026-08-05T20:23:30.241Z",
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
		"liquidityUsd": 2139423.48,
		"hash": "13d672e574ad2cafea93d343be0c33761a399bfe83ffc02604ba506c3b335270"
	},
	{
		"id": "33f3b44f506f",
		"ts": "2026-08-05T20:23:30.540Z",
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
		"liquidityUsd": 1062815.9,
		"hash": "33f3b44f506f9342d9a8a57ebf8e1b470505782bc0464c8d0a879b7dbea6f9a1"
	},
	{
		"id": "35fc3d504165",
		"ts": "2026-08-05T20:23:30.779Z",
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
		"liquidityUsd": 3430768.83,
		"hash": "35fc3d504165b84e4ae8173a92043ed7d8e040c0a7ce3df7df148b04431b73c6"
	},
	{
		"id": "863d73f18396",
		"ts": "2026-08-05T20:23:31.005Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 739030.47,
		"hash": "863d73f18396686ad9bcadae83eb879fb3d677e264d19cf2ae9a311b99748c1a"
	},
	{
		"id": "56381998ebde",
		"ts": "2026-08-05T20:23:31.231Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 279433.22,
		"hash": "56381998ebde5406a934a11d149d4b3734d748d67b589ba3d0976656cce9d96a"
	},
	{
		"id": "6f7c0c072ce0",
		"ts": "2026-08-05T20:23:31.467Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1997055.31,
		"hash": "6f7c0c072ce0d66140ae04427c4e9328ce828383c74e5cad47b1ed3140b02a9f"
	},
	{
		"id": "5abd16589a51",
		"ts": "2026-08-05T20:23:31.693Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 482623.13,
		"hash": "5abd16589a518192cd6ffde890dff148bf09e36ee25cacddf8df282705b3f833"
	},
	{
		"id": "f2165b44f0d1",
		"ts": "2026-08-05T20:23:31.919Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4256582.97,
		"hash": "f2165b44f0d1bcd8897f0715e8275e60e862096c8bcea9bf8f572a641251a1a2"
	},
	{
		"id": "177c2e44ebe4",
		"ts": "2026-08-05T20:23:32.148Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 85254.85,
		"hash": "177c2e44ebe446e2cf08473c3e02bab681b25c184feed2bc9d03a8ecb5577578"
	},
	{
		"id": "e8ca0539f9c8",
		"ts": "2026-08-05T18:17:55.062Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113588742.37,
		"hash": "e8ca0539f9c8ffb8a722c2a16fac058992002b1c840d58fa07b3030ec66874ed"
	},
	{
		"id": "e4fbbd3b02bb",
		"ts": "2026-08-05T18:17:55.273Z",
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
		"liquidityUsd": 13935032.4,
		"hash": "e4fbbd3b02bbf187f962f38e09d4c34a577537cf5231b5c1a8b9f0f512be2b5c"
	},
	{
		"id": "04845c9737d2",
		"ts": "2026-08-05T18:17:55.493Z",
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
		"liquidityUsd": 1051562.57,
		"hash": "04845c9737d27e734a7c0de44b4da8635150b5c4b1e9ddcaec6634e22f6fd34d"
	},
	{
		"id": "409a599ce5a2",
		"ts": "2026-08-05T18:17:55.676Z",
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
		"liquidityUsd": 25857645.93,
		"hash": "409a599ce5a2e7ae5c2a83493eb8547ede6f25829891216f7367bb2d1e1e51ae"
	},
	{
		"id": "372ebec55cf0",
		"ts": "2026-08-05T18:17:55.864Z",
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
		"liquidityUsd": 4491937.9,
		"hash": "372ebec55cf07578f7f50fb3354d5544122cfa42e277e94911d1ea7184778398"
	},
	{
		"id": "2508030ed1c8",
		"ts": "2026-08-05T18:17:56.047Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 923175.11,
		"hash": "2508030ed1c809a341aaa5aabe06f2ed8b2a94063319073a783609da088df526"
	},
	{
		"id": "33d19d0f17a5",
		"ts": "2026-08-05T18:17:56.230Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25857645.93,
		"hash": "33d19d0f17a5e04e9eb7de22fb0976b571d4a78b22b1c0cc2b893601ea597308"
	},
	{
		"id": "d82e1c5bad42",
		"ts": "2026-08-05T18:17:56.409Z",
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
		"liquidityUsd": 2138417.4,
		"hash": "d82e1c5bad42efc045598493af9b24e06e4b8ae1fb4159c250df9e3c8ed3eb51"
	},
	{
		"id": "e41496e1f013",
		"ts": "2026-08-05T18:17:56.589Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1059641.52,
		"hash": "e41496e1f013e1d9035cd43e4e03181718f07561b145f4b4b139a40eaa140c3e"
	},
	{
		"id": "9446d146ccd5",
		"ts": "2026-08-05T18:17:56.771Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3706775.54,
		"hash": "9446d146ccd56e5ff64eef001145cd92806032bdf072dc19a2dfdc1b2c001429"
	},
	{
		"id": "9c1e4a47a08e",
		"ts": "2026-08-05T18:17:56.974Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 279796.48,
		"hash": "9c1e4a47a08ea73f272a9a928bc3d3762d1154909934f0f6afb9939aef294f89"
	},
	{
		"id": "6e351f393c2e",
		"ts": "2026-08-05T18:17:57.167Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2008966.46,
		"hash": "6e351f393c2ed5a9a394e516a72d2d247e21bdbc22a4d471b2f496ad46400956"
	},
	{
		"id": "5cb0fc1afb35",
		"ts": "2026-08-05T18:17:57.358Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 832392.06,
		"hash": "5cb0fc1afb35f987f56fe43d98a54e4bb7357969e4bda1becebbe7eed105c138"
	},
	{
		"id": "9a73a6dbcb6f",
		"ts": "2026-08-05T18:17:57.567Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 480467.54,
		"hash": "9a73a6dbcb6f2656672d781051333ba48db5d908bf342f656f3ef47e761fdded"
	},
	{
		"id": "2d8567aecfd4",
		"ts": "2026-08-05T18:17:57.757Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4329941.68,
		"hash": "2d8567aecfd43269fa19d7de24678fd21624dcfc7c9dbe500763c8560d9869ba"
	},
	{
		"id": "e6507eab9655",
		"ts": "2026-08-05T18:17:57.934Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 77244.01,
		"hash": "e6507eab9655fba176322480ccc18f4a2da757ec9932d678264872d7c6ea6add"
	},
	{
		"id": "96019033712a",
		"ts": "2026-08-05T16:29:14.938Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113605309.31,
		"hash": "96019033712a59e25b37fc7eacf5fb1f585654ea46a40df45e20ff00e53d0d6d"
	},
	{
		"id": "d29afb9cc44a",
		"ts": "2026-08-05T16:29:15.285Z",
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
		"liquidityUsd": 13849043.72,
		"hash": "d29afb9cc44a68ebae2401f0001fb833c260185ad042cc1ca19bf5fa49765c78"
	},
	{
		"id": "4fe1f5b928e1",
		"ts": "2026-08-05T16:29:15.632Z",
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
		"liquidityUsd": 1033298.87,
		"hash": "4fe1f5b928e1d1619b5e51df0893341a86cb4f329757472a9e2770f6a6c890ad"
	},
	{
		"id": "38d0b6861db7",
		"ts": "2026-08-05T16:29:15.820Z",
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
		"liquidityUsd": 25414812.92,
		"hash": "38d0b6861db7b68509611a011fc7eb473cfd59fcb4a79bd5186fc1551c944fcb"
	},
	{
		"id": "7bf1a1695333",
		"ts": "2026-08-05T16:29:16.007Z",
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
		"liquidityUsd": 4434521.5,
		"hash": "7bf1a16953331fb8b7a8875e0945abd7ebd1c6fed04bdc210a6fe51f57c2284b"
	},
	{
		"id": "cfa0528fe89f",
		"ts": "2026-08-05T16:29:16.208Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 914065.64,
		"hash": "cfa0528fe89f3791ebca5c2e260f73345f5edb5c5a958703f65b1236872569a0"
	},
	{
		"id": "c0afbba84524",
		"ts": "2026-08-05T16:29:16.400Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25414812.92,
		"hash": "c0afbba84524703675999c3c4697a9394687d2c711651c10cf233bc8cfb23c22"
	},
	{
		"id": "d37ea801effc",
		"ts": "2026-08-05T16:29:16.764Z",
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
		"liquidityUsd": 3658295.9,
		"hash": "d37ea801effc9150016674395262bdf360f0bff48af47a52c09c38e4dfa39017"
	},
	{
		"id": "46dfa0029811",
		"ts": "2026-08-05T16:29:16.953Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1051870.09,
		"hash": "46dfa0029811bcf92b7afae104fea183385237e0861d9ad884237369495aff85"
	},
	{
		"id": "5c9509752c88",
		"ts": "2026-08-05T16:29:17.143Z",
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
		"liquidityUsd": 279973.31,
		"hash": "5c9509752c883429f64ae0b0922de7d04ff323f3a3f73f9e712813f8b37a0967"
	},
	{
		"id": "737a60bcbea1",
		"ts": "2026-08-05T16:29:17.323Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3545219.31,
		"hash": "737a60bcbea10277c4438a0fb3c5fc27b08fb27f6ba4a347ce3c92b314e87b58"
	},
	{
		"id": "51e0a0c85c55",
		"ts": "2026-08-05T16:29:17.528Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1973453.84,
		"hash": "51e0a0c85c55157a8c758d4aa0afb2281fcc92799666dce2f1fe31e1b4cdd227"
	},
	{
		"id": "c69734fbec94",
		"ts": "2026-08-05T16:29:17.704Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 69839.77,
		"hash": "c69734fbec940332c053edb95907ecb63089f6831f8d15235c0036a86b53fbb1"
	},
	{
		"id": "f1a0f26cda6d",
		"ts": "2026-08-05T16:29:17.910Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 846231.86,
		"hash": "f1a0f26cda6d851771b605a21a414f9c5483c9c385237a62300221ae67525b1c"
	},
	{
		"id": "252a345f0832",
		"ts": "2026-08-05T16:29:18.116Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 475398.33,
		"hash": "252a345f0832c0d78f6d312c1c18481bc7a02733a603819e62315c170614c92c"
	},
	{
		"id": "0a08a2fdfb8a",
		"ts": "2026-08-05T16:29:18.309Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4284794.2,
		"hash": "0a08a2fdfb8ac193adc9427d71dd016b6f3678764ff869a30bfed00e39ac360e"
	},
	{
		"id": "e1222b92fad3",
		"ts": "2026-08-05T16:29:18.488Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 79351.49,
		"hash": "e1222b92fad34fc9a4d10ff053972d0ffd4958690c2071a1196d71bb4bab1edd"
	},
	{
		"id": "499294a98877",
		"ts": "2026-08-05T14:07:23.906Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113190885.78,
		"hash": "499294a98877313f4a9245fcb5f28d32af2ceca0fb9658505f799dd5f6366b24"
	},
	{
		"id": "fc599b3a60d1",
		"ts": "2026-08-05T14:07:24.377Z",
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
		"liquidityUsd": 17660412.88,
		"hash": "fc599b3a60d103df45fbe832bcaf0e4dcd32ac760c7ff490cee9c5fd90342d3a"
	},
	{
		"id": "c52a5e2e45b7",
		"ts": "2026-08-05T14:07:24.625Z",
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
		"liquidityUsd": 1033298.87,
		"hash": "c52a5e2e45b799982e823b5c6ae69aad775a35bf672b2fc0d2d43a0f7d8de97d"
	},
	{
		"id": "5b6028c5d2da",
		"ts": "2026-08-05T14:07:24.867Z",
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
		"liquidityUsd": 25392665.31,
		"hash": "5b6028c5d2da298bc4a84f84ce041a57d54168bbe12ebdf091fbe3948bfd8c82"
	},
	{
		"id": "ad4808ba643f",
		"ts": "2026-08-05T14:07:25.110Z",
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
		"liquidityUsd": 4401416.49,
		"hash": "ad4808ba643fe4622ae41a72066895c13b88b34b2c7ceb729ec1d1ba9465f1b9"
	},
	{
		"id": "a469ba4dfef4",
		"ts": "2026-08-05T14:07:25.370Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 920856.33,
		"hash": "a469ba4dfef41bbf798ac8818da6e5ab484cb310db1cd5caeeba66e4d06c66d0"
	},
	{
		"id": "f0ca2d5389d4",
		"ts": "2026-08-05T14:07:25.609Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25392665.31,
		"hash": "f0ca2d5389d467914b4f0caa5e2886d4a4b416dd1744c748c33e5cf81be9420e"
	},
	{
		"id": "217e45cf71da",
		"ts": "2026-08-05T14:07:25.850Z",
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
		"liquidityUsd": 3622106.07,
		"hash": "217e45cf71da64fcd6dadb6e229789cf8b8e444f53e8395ee719a582514f12c8"
	},
	{
		"id": "e9ffa29e3ee7",
		"ts": "2026-08-05T14:07:26.091Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1053997.57,
		"hash": "e9ffa29e3ee782d1922ba2c8b0c39233f58cd02e99a0e26bcf9a09391b11a7e3"
	},
	{
		"id": "08ef266202ab",
		"ts": "2026-08-05T14:07:26.332Z",
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
		"liquidityUsd": 280765.33,
		"hash": "08ef266202ab7181a15ac11d763c93611d4f896e9e7ffb36ee65f291f23b177f"
	},
	{
		"id": "19e24f7920e7",
		"ts": "2026-08-05T14:07:26.560Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3548810.76,
		"hash": "19e24f7920e7e9f65bd2f75b2146900b0786045815a8de56ed9c04de955ba386"
	},
	{
		"id": "e7a31031c925",
		"ts": "2026-08-05T14:07:26.788Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1963102.38,
		"hash": "e7a31031c925c9499299eb19af6204d56f170f946f085f75cbc8609af22a0350"
	},
	{
		"id": "1654dd78eb25",
		"ts": "2026-08-05T14:07:27.013Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 71697.65,
		"hash": "1654dd78eb252b0c0c613884136f48713efe7e0141217f7b82f3857318ba9be6"
	},
	{
		"id": "e7fe522687d5",
		"ts": "2026-08-05T14:07:27.304Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 933228.3,
		"hash": "e7fe522687d59d1c1a999ba758904629c551daecc8063c2c36f9f9b291309f14"
	},
	{
		"id": "7ae1c6c81c45",
		"ts": "2026-08-05T14:07:27.608Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2039951.27,
		"hash": "7ae1c6c81c45b86c1723a49a9ce08ab24cd0aea5dc33b013fb459bac92ab505f"
	},
	{
		"id": "e4d000b6bf15",
		"ts": "2026-08-05T14:07:27.834Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4269629.6,
		"hash": "e4d000b6bf155e24d6a7b7a8ba9ef3c330b1c6e8bdf098f2f5d1aa15964cf188"
	},
	{
		"id": "03293ced3996",
		"ts": "2026-08-05T14:07:28.064Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9206071.52,
		"hash": "03293ced3996d4acc95977d709d99c2a740820a24021d9bd260a1bb3507f499c"
	},
	{
		"id": "b2940b90a07f",
		"ts": "2026-08-05T11:56:32.850Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112922692.81,
		"hash": "b2940b90a07fcd083bb45e3d278028440ffbd9f20b583b1e3656f84e76d1ef2d"
	},
	{
		"id": "536e9b0dcd4a",
		"ts": "2026-08-05T11:56:33.197Z",
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
		"liquidityUsd": 17729870.79,
		"hash": "536e9b0dcd4a4002d130cbeaf57be53022dae053dc0636c3f3136a3520125c53"
	},
	{
		"id": "b6a42f882d61",
		"ts": "2026-08-05T11:56:33.393Z",
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
		"liquidityUsd": 1030836.18,
		"hash": "b6a42f882d61c2f7a109cf35745a4f5e82099c753894a09b646056757403afb9"
	},
	{
		"id": "7301aff350e1",
		"ts": "2026-08-05T11:56:33.598Z",
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
		"liquidityUsd": 25365309.44,
		"hash": "7301aff350e12eabd9ebef4b7827a4884fcdd1668cdf5cf02afd2310700556f9"
	},
	{
		"id": "7dbef1da2a24",
		"ts": "2026-08-05T11:56:33.790Z",
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
		"liquidityUsd": 4383513.16,
		"hash": "7dbef1da2a247849e5e4e9c8e9b5690573a9d81ba05e337669eb602b31f053cb"
	},
	{
		"id": "e35713bdde97",
		"ts": "2026-08-05T11:56:33.991Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 916519.08,
		"hash": "e35713bdde972ed7890d32678bb9e9dd70738d1bbc185bbbe86069f209952174"
	},
	{
		"id": "a4215aaddb6a",
		"ts": "2026-08-05T11:56:34.183Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25365309.44,
		"hash": "a4215aaddb6a70d57dcbf333fc8c27db479cd9ed274f5d36829fad9e65de8b4f"
	},
	{
		"id": "a56fa6d9cb8b",
		"ts": "2026-08-05T11:56:34.405Z",
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
		"liquidityUsd": 3605040.27,
		"hash": "a56fa6d9cb8baec605ff02c33089e8f04eb163cc7ca9df63ef3ce01950e323fe"
	},
	{
		"id": "f51e29958400",
		"ts": "2026-08-05T11:56:34.595Z",
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
		"liquidityUsd": 1031926.25,
		"hash": "f51e299584006abbb4c514719ab492dc0c009c2803335b380237b578d0db439a"
	},
	{
		"id": "5552b85d1ccb",
		"ts": "2026-08-05T11:56:34.794Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 69908.17,
		"hash": "5552b85d1ccb201a0585f4d2e11e8e114eafa4e84528529f1473aeeea917877a"
	},
	{
		"id": "756d9c044957",
		"ts": "2026-08-05T11:56:34.984Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3409733.11,
		"hash": "756d9c044957f58a8eaf286687badd2080f09b5c99240ce0a883679461a29fc7"
	},
	{
		"id": "e6caf857186c",
		"ts": "2026-08-05T11:56:35.190Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1982882.68,
		"hash": "e6caf857186c08899f7348a39fbb540a24d22e618ab8101c2ee139021571ac62"
	},
	{
		"id": "c6f1133396c6",
		"ts": "2026-08-05T11:56:35.380Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 277547.35,
		"hash": "c6f1133396c6a63332934a0ca68faf1bacd8c9087c51f95e7346d33cfb0edac1"
	},
	{
		"id": "0f38b8d854d0",
		"ts": "2026-08-05T11:56:35.585Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1980471.11,
		"hash": "0f38b8d854d0f94fd6fd479eedad3663499f9f89a26019142fee0988d0f25ede"
	},
	{
		"id": "795189e807ca",
		"ts": "2026-08-05T11:56:35.771Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4261133.89,
		"hash": "795189e807ca3fafd0b486742344beb35ba96d9a3715b9ee0d441d928705fe8d"
	},
	{
		"id": "17e8e6ce788b",
		"ts": "2026-08-05T11:56:35.972Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9150516.38,
		"hash": "17e8e6ce788b15a616b1df0dd8efe33d1aa20069efab9f0206fdf735d74b640f"
	},
	{
		"id": "f62d3b083bdc",
		"ts": "2026-08-05T11:56:36.161Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 951826.5,
		"hash": "f62d3b083bdcd9c44e098b5c4d7a9cc2185e068da49fb3c69065d91c5a941e95"
	},
	{
		"id": "deae67206f5c",
		"ts": "2026-08-05T09:34:09.816Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112885400.15,
		"hash": "deae67206f5c2c4a2d2af88d2846332ad867aac539695cc888e64114ae503b0a"
	},
	{
		"id": "b51215a65f4f",
		"ts": "2026-08-05T09:34:10.283Z",
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
		"liquidityUsd": 14850332.16,
		"hash": "b51215a65f4f771b670b437592d1a892185cc68eb81c5dd64062c4d4af615ce7"
	},
	{
		"id": "58627f364331",
		"ts": "2026-08-05T09:34:10.533Z",
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
		"liquidityUsd": 1029068.18,
		"hash": "58627f36433163f45dd87349a797aee0bafd7485eee174f7cc37f00d4410f778"
	},
	{
		"id": "34afb71e63bb",
		"ts": "2026-08-05T09:34:10.809Z",
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
		"liquidityUsd": 25330498.44,
		"hash": "34afb71e63bbd9a4664b8f4d2b56636e2c129524d44cae2dac9cab060b94837a"
	},
	{
		"id": "cb6cf79c92ff",
		"ts": "2026-08-05T09:34:11.060Z",
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
		"liquidityUsd": 4392680.8,
		"hash": "cb6cf79c92ff4ede5adabcfc1072e6843713557cf2d1b3432835a20174056ce1"
	},
	{
		"id": "dc0d66b6e352",
		"ts": "2026-08-05T09:34:11.310Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 923892.18,
		"hash": "dc0d66b6e352f021dbabee054846c1a8e20b61ba6753e2b20a50e7292135748b"
	},
	{
		"id": "281ecf02324b",
		"ts": "2026-08-05T09:34:11.555Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25330498.44,
		"hash": "281ecf02324b6658f31515addc8afd2e6d6128c1b2b0f8de8e0b43ebd97b0aec"
	},
	{
		"id": "cbfa08420286",
		"ts": "2026-08-05T09:34:11.805Z",
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
		"liquidityUsd": 3613549.62,
		"hash": "cbfa084202864c45aa35fe01c1a761acfdf82b21e95fce531c60cb2f3db71134"
	},
	{
		"id": "68c747033b24",
		"ts": "2026-08-05T09:34:12.059Z",
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
		"liquidityUsd": 1028794.33,
		"hash": "68c747033b24c3dfdc274c8990a0e325bcbc995e846d30fc3841c84775d3fb4b"
	},
	{
		"id": "9e53942c895f",
		"ts": "2026-08-05T09:34:12.312Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 72827.31,
		"hash": "9e53942c895f84c260092fefc2d13cfe67d1499764ad0df368d3487a65760c3c"
	},
	{
		"id": "d5c083661c50",
		"ts": "2026-08-05T09:34:12.544Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1936797.48,
		"hash": "d5c083661c502f1425102b92d1ab470e980122d0657cddd23df5fa6a32727429"
	},
	{
		"id": "be732233c2cd",
		"ts": "2026-08-05T09:34:12.780Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 278203.42,
		"hash": "be732233c2cd3f5c30e66993daa32eb0289598104d5e97d5010a7f1286d6c634"
	},
	{
		"id": "d42f07f60708",
		"ts": "2026-08-05T09:34:13.012Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3334789.03,
		"hash": "d42f07f60708fa1b6c3d42e4acbbb3efd14919c827ab76da551be4d8793fc45c"
	},
	{
		"id": "e684cb0909a8",
		"ts": "2026-08-05T09:34:13.246Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1916079.6,
		"hash": "e684cb0909a8a2150b9994364312d5b51d7452a053fbc80d0c74c476b450602a"
	},
	{
		"id": "943d16e48dc1",
		"ts": "2026-08-05T09:34:13.478Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 922136.1,
		"hash": "943d16e48dc191baf2f914a4b709633a29cb08c0b3fde7ad9393cd229b70c6ba"
	},
	{
		"id": "90c98629b17d",
		"ts": "2026-08-05T09:34:13.711Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4278320.4,
		"hash": "90c98629b17d51ada44661891ed2e3a256ae5b4c7d53a35af6ac61d49450dd42"
	},
	{
		"id": "02a204426c66",
		"ts": "2026-08-05T09:34:13.944Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9323295.86,
		"hash": "02a204426c66d599930d2feab4612b0169bf2946aeb289325136bdbed3649dd1"
	},
	{
		"id": "ff5b676c394d",
		"ts": "2026-08-05T06:29:16.390Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112911458.66,
		"hash": "ff5b676c394d2d4cc3b7cd4ff44807d0c2a782ea999cfffeb55c1c8a6c001bcf"
	},
	{
		"id": "3c126d8ebeae",
		"ts": "2026-08-05T06:29:16.897Z",
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
		"liquidityUsd": 17228104.84,
		"hash": "3c126d8ebeaee72257ecb913dde55343c610355192d41d7b7209721c0cdd8bba"
	},
	{
		"id": "3a31fa6af00f",
		"ts": "2026-08-05T06:29:17.388Z",
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
		"liquidityUsd": 1024234.24,
		"hash": "3a31fa6af00fe2b9aaaa2f991b7507e017e3df61f96d7ba08faeed843d77f8b1"
	},
	{
		"id": "b2ad44fc9997",
		"ts": "2026-08-05T06:29:17.655Z",
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
		"liquidityUsd": 25333155.13,
		"hash": "b2ad44fc999756290f70feffff317e5a55d4beb5987eff9fd8e300baf5cff089"
	},
	{
		"id": "d568f8931528",
		"ts": "2026-08-05T06:29:18.155Z",
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
		"liquidityUsd": 4394798.78,
		"hash": "d568f8931528a018134498f1a322980506c998fc4e18e7402900c87da50467f4"
	},
	{
		"id": "1b588922163e",
		"ts": "2026-08-05T06:29:18.424Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 925141.04,
		"hash": "1b588922163e0c629e4b35eec3787cf20f3e88abfb22c52e53a9f51026f8e830"
	},
	{
		"id": "1de74004ba50",
		"ts": "2026-08-05T06:29:18.690Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25333155.13,
		"hash": "1de74004ba507b55e3e91d3b68a0e7d70da6ba3613ab4baa3afd141d3bb25d8b"
	},
	{
		"id": "2ad9b064f85f",
		"ts": "2026-08-05T06:29:18.975Z",
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
		"liquidityUsd": 3467666.09,
		"hash": "2ad9b064f85fa1d94685fe507f5748b51decc1fcfdd3129835ac844b99c8cb2e"
	},
	{
		"id": "33e84d0fbdb1",
		"ts": "2026-08-05T06:29:19.250Z",
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
		"liquidityUsd": 1053420.33,
		"hash": "33e84d0fbdb1a1a0301478a9938da247bac8188cce8ddf1973fbfe87ec3af022"
	},
	{
		"id": "88dea84e6cbc",
		"ts": "2026-08-05T06:29:19.537Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 71541.79,
		"hash": "88dea84e6cbc13d9ffaec9c4e1e25bc15f39d35024f04322975311694af777e5"
	},
	{
		"id": "fc633aa9deca",
		"ts": "2026-08-05T06:29:19.788Z",
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
		"liquidityUsd": 283405.22,
		"hash": "fc633aa9deca141f98f62f1ab17ada942a9585acbada15b3914bdb5608cbb016"
	},
	{
		"id": "b43688c85985",
		"ts": "2026-08-05T06:29:20.040Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 888934.56,
		"hash": "b43688c85985da287e31a8519736b6251b0ca9c899a5c046bffb12435f498aae"
	},
	{
		"id": "62ebe582f7fa",
		"ts": "2026-08-05T06:29:20.289Z",
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
		"liquidityUsd": 1929107.19,
		"hash": "62ebe582f7fad86516822415d1ae8d37c1e106fde465df05f48227bedc64c66d"
	},
	{
		"id": "a905e269ea71",
		"ts": "2026-08-05T06:29:20.542Z",
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
		"liquidityUsd": 1450838.11,
		"hash": "a905e269ea71671c14aecaca9de725b19114b0da2fedf3de59bcabc16fbce0e3"
	},
	{
		"id": "5826c9b37ad0",
		"ts": "2026-08-05T06:29:20.791Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4266988.12,
		"hash": "5826c9b37ad07be6916659d3a20d880154f2de7257c45b1c2fb1580db2f997bd"
	},
	{
		"id": "40ce6e02b041",
		"ts": "2026-08-05T06:29:21.041Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1914058.06,
		"hash": "40ce6e02b0417fafaa9e00f8849dab26958e39fe9b309c18e72ab97a835c9d41"
	},
	{
		"id": "cb4e29fd5a63",
		"ts": "2026-08-05T06:29:21.285Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 456460.09,
		"hash": "cb4e29fd5a635a8d07a01c919b634488df47a9acb8370898bd1f2102a72f31cb"
	},
	{
		"id": "934a64c1c8e6",
		"ts": "2026-08-05T03:57:19.843Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112756838.18,
		"hash": "934a64c1c8e6815f37214b9d712357601918d180006bf99d619d23e24c66f2d6"
	},
	{
		"id": "05dc918be429",
		"ts": "2026-08-05T03:57:20.344Z",
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
		"liquidityUsd": 16815441.21,
		"hash": "05dc918be429fee3da2eb5304e877dc5c6b08ebde4a1d5fa7bbd615e6af0d2c2"
	},
	{
		"id": "26efd6a393c5",
		"ts": "2026-08-05T03:57:20.624Z",
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
		"liquidityUsd": 1023756.33,
		"hash": "26efd6a393c5b6d6514a730ac07db81b52f51e87cca6379ec61728ee493610bf"
	},
	{
		"id": "575c414085af",
		"ts": "2026-08-05T03:57:20.887Z",
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
		"liquidityUsd": 25135692.49,
		"hash": "575c414085afec1377dbb1ecb764ae581fd56782106af7af43cad3479bbb6a52"
	},
	{
		"id": "a3c25ca6603d",
		"ts": "2026-08-05T03:57:21.163Z",
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
		"liquidityUsd": 4364794.67,
		"hash": "a3c25ca6603d15f1ae1cd3b82f8d3ca86c4c767c6d9ea10793a4b59bc1db9c32"
	},
	{
		"id": "f23609815ece",
		"ts": "2026-08-05T03:57:21.426Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 907442.74,
		"hash": "f23609815ece6742042062eac018c2599fecf2cbc1c36679757717cb3876fd47"
	},
	{
		"id": "d8d4d34aebf1",
		"ts": "2026-08-05T03:57:21.687Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25135692.49,
		"hash": "d8d4d34aebf17cfb8944556e08284eaad2e2729c169b46cd731957ebcdf6333a"
	},
	{
		"id": "73b5afe2c690",
		"ts": "2026-08-05T03:57:21.954Z",
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
		"liquidityUsd": 3462955.33,
		"hash": "73b5afe2c6909c2f9078c5b6ff3ab078217384d5bb10646cb63cb1f6bab552e3"
	},
	{
		"id": "8cecdfe09752",
		"ts": "2026-08-05T03:57:22.216Z",
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
		"liquidityUsd": 1063338.82,
		"hash": "8cecdfe097529fc44047078ea5377bdd3181d3495b689ab490399020eec484ad"
	},
	{
		"id": "0b2ef8c77ba7",
		"ts": "2026-08-05T03:57:22.477Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 73698.61,
		"hash": "0b2ef8c77ba78e8b72268a7c433965de7c2ad5626f367ed6ccd51f516cc7bef6"
	},
	{
		"id": "f490c4772d39",
		"ts": "2026-08-05T03:57:22.725Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1908588.77,
		"hash": "f490c4772d398a0129b88d4d59ed8782a7786061009b1521675a0c97e6e1079a"
	},
	{
		"id": "cf6957756ffe",
		"ts": "2026-08-05T03:57:22.971Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 280668.95,
		"hash": "cf6957756ffefc5fc67d6680b860dac77f8a7d523d8b55c3d2f1de8ded58acb7"
	},
	{
		"id": "1fe17b848202",
		"ts": "2026-08-05T03:57:23.216Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1943743.46,
		"hash": "1fe17b848202b1cd9ca75ea34ed391cbf5fd28239a32532db7e43b48396e45c0"
	},
	{
		"id": "2ddf4abfaef5",
		"ts": "2026-08-05T03:57:23.463Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4262409.12,
		"hash": "2ddf4abfaef57532ed08290ea283b1238295897a548e4c27c89a4d6fe36a8231"
	},
	{
		"id": "afefb84779b4",
		"ts": "2026-08-05T03:57:23.707Z",
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
		"liquidityUsd": 1493450.42,
		"hash": "afefb84779b44a09bf4fe6156a40aecf2ba868da4b0fa92614dd110a64e4413a"
	}
]
