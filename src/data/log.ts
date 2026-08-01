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
	"updatedAt": "2026-08-01T11:13:35.220Z",
	"tokensScored": 6701,
	"verdictsIssued": 6701,
	"safe": 5851,
	"risky": 520,
	"likelyRug": 330,
	"ticks": 409
}

export const verdicts: AgentVerdict[] = [
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
	},
	{
		"id": "915cd292a164",
		"ts": "2026-08-01T11:13:33.721Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 519240.68,
		"hash": "915cd292a164c971ad48886ea03b14d7b4f35083869806bdb02585f1f163b6b0"
	},
	{
		"id": "63bcf62ddafb",
		"ts": "2026-08-01T11:13:33.979Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1073546.89,
		"hash": "63bcf62ddafb126869d69f8f3bc96c0bb3af47f27dc3df1ab9a5f80f2c8d001a"
	},
	{
		"id": "07831a193e50",
		"ts": "2026-08-01T11:13:34.227Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1849899.4,
		"hash": "07831a193e50c4ac04a660406a52dcb43a5da9d9caaf6cdea15f3907ad08a30a"
	},
	{
		"id": "452e7c683110",
		"ts": "2026-08-01T11:13:34.475Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4380252,
		"hash": "452e7c6831102da8b4167ba275d4288b0609ad12694e2a51a4b50f8a734d55d1"
	},
	{
		"id": "55990aa3dbdf",
		"ts": "2026-08-01T11:13:34.723Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1735957.11,
		"hash": "55990aa3dbdf6fafa95546c21008b618181282391f42346fca3d636c5b38e67d"
	},
	{
		"id": "c64bc7df84e9",
		"ts": "2026-08-01T11:13:34.972Z",
		"symbol": "CLANKER",
		"token": "0x1bc0c42215582d5A085795f4baDbaC3ff36d1Bcb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1410131.62,
		"hash": "c64bc7df84e9b68e511bdab002974382550e45f415c03c192522e0185990aad4"
	},
	{
		"id": "25eddff8522e",
		"ts": "2026-08-01T11:13:35.219Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5378994.44,
		"hash": "25eddff8522e453001aa5c04ba4ee657204f3d48b8889dbe6516647acb69ac9b"
	},
	{
		"id": "dc0914437e58",
		"ts": "2026-08-01T09:02:42.167Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111883072.52,
		"hash": "dc0914437e58f9a625899cce93292103885d505bb320053bbb0cc663a34c2180"
	},
	{
		"id": "5edaafbb8a7b",
		"ts": "2026-08-01T09:02:42.482Z",
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
		"liquidityUsd": 17009095.55,
		"hash": "5edaafbb8a7bfdb6482b67fb4edb5d52def335191994be0fe60c72a6faf31836"
	},
	{
		"id": "e99c8a71ef72",
		"ts": "2026-08-01T09:02:42.678Z",
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
		"liquidityUsd": 1136242.28,
		"hash": "e99c8a71ef72c1865b43116aa4237400736066956ab52b904ca9c1e9bade76c9"
	},
	{
		"id": "7bb4c023d6db",
		"ts": "2026-08-01T09:02:42.874Z",
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
		"liquidityUsd": 25551249.14,
		"hash": "7bb4c023d6dbf6fdda7eb09eee613c65192bca649abe553901ed2d6820d31d5b"
	},
	{
		"id": "2a1e769aaab2",
		"ts": "2026-08-01T09:02:43.064Z",
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
		"liquidityUsd": 4395369.43,
		"hash": "2a1e769aaab2d6044571ecccb8242b9bb5909018e7030d23c2692e7122028ff2"
	},
	{
		"id": "92c74dab9fb5",
		"ts": "2026-08-01T09:02:43.249Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 905575.74,
		"hash": "92c74dab9fb5127c08cc7282fd4a4e26a719669858452bd20f946c72459c8af8"
	},
	{
		"id": "cec999f97607",
		"ts": "2026-08-01T09:02:43.442Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25551249.14,
		"hash": "cec999f9760758b15f58f17eb1d9c993bd10ae1772d80c1607b95495284aca1a"
	},
	{
		"id": "5d8494fcdca6",
		"ts": "2026-08-01T09:02:43.632Z",
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
		"liquidityUsd": 2111021.33,
		"hash": "5d8494fcdca60bd09b6c0500ff69ff0df7864d95cee8930f4e5eb52c3dd5a676"
	},
	{
		"id": "c80a1f830ec9",
		"ts": "2026-08-01T09:02:43.825Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1074604.58,
		"hash": "c80a1f830ec9cb39a523b37cdcd99a8d60878cae5cf84e4ef8e28d7c32c3fc40"
	},
	{
		"id": "7ab1403046eb",
		"ts": "2026-08-01T09:02:44.021Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 512023.46,
		"hash": "7ab1403046eb0941edd1a9ad387f63990f716438588ac47d9dde90ef3053c983"
	},
	{
		"id": "fffd91aec5ff",
		"ts": "2026-08-01T09:02:44.211Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1824734.04,
		"hash": "fffd91aec5ff2efee8be084e71d4601f42379daa4675a940a2654e6afe002884"
	},
	{
		"id": "fa5c13357366",
		"ts": "2026-08-01T09:02:44.414Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1739695.94,
		"hash": "fa5c13357366dec397b354ff5c071f6f0d6f7a199cd8e33e12f3e891f128cfdc"
	},
	{
		"id": "9aa115f38545",
		"ts": "2026-08-01T09:02:44.609Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4386082.45,
		"hash": "9aa115f38545e6daf2a0df90f25860f354b2e17a9af74cd9e2d67257662dfac6"
	},
	{
		"id": "77800935560e",
		"ts": "2026-08-01T09:02:44.805Z",
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
		"liquidityUsd": 732335.83,
		"hash": "77800935560efb85a549ae91ee5f3715375256350345db3f658d20ab4523864b"
	},
	{
		"id": "4f71e285dce6",
		"ts": "2026-08-01T09:02:45.026Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5382160.13,
		"hash": "4f71e285dce6536335a514090ed4b53f826b0154853dfcda2af11febbcfc2ab3"
	},
	{
		"id": "585117c750ab",
		"ts": "2026-08-01T06:25:15.685Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111784955.03,
		"hash": "585117c750abb5f366ae6bc2fab6e505bc2ef6088304ed20db3ac81afcffc1e2"
	},
	{
		"id": "d62e3948a1e9",
		"ts": "2026-08-01T06:25:16.190Z",
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
		"liquidityUsd": 16991839.48,
		"hash": "d62e3948a1e9840e38be9752a225d3257ab286dd54b2784ce16d2fa8f87e4b68"
	},
	{
		"id": "1ca9c91ec402",
		"ts": "2026-08-01T06:25:16.458Z",
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
		"liquidityUsd": 1132964.52,
		"hash": "1ca9c91ec402f7ada0e9d4de44e129fd1a90e9c84932598941dc1709e9df055f"
	},
	{
		"id": "980d72c8c527",
		"ts": "2026-08-01T06:25:16.733Z",
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
		"liquidityUsd": 25526845.18,
		"hash": "980d72c8c527ba32a04e0958ff817efc31c03613896cd427074f9765d81b2e2c"
	},
	{
		"id": "518914e861d5",
		"ts": "2026-08-01T06:25:17.002Z",
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
		"liquidityUsd": 4385060.54,
		"hash": "518914e861d5a9d09d65be7e06e1b0bf3e61295403e9c71ecc12d7b47e9cda0e"
	},
	{
		"id": "ddaf28648e2d",
		"ts": "2026-08-01T06:25:17.270Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 897902.9,
		"hash": "ddaf28648e2d73029cef8e433dffe21f9536c60b635d44aa05f176cbaf633f9f"
	},
	{
		"id": "5cc9252c9dac",
		"ts": "2026-08-01T06:25:17.537Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25526845.18,
		"hash": "5cc9252c9dac2382f32e5fd3121ca6d3e299454b9b9aa60e4a4542c37f6cc3ef"
	},
	{
		"id": "c1411a534ae3",
		"ts": "2026-08-01T06:25:17.811Z",
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
		"liquidityUsd": 2370005.7,
		"hash": "c1411a534ae3b2dd81484f999254fc0eff69b2972d5a62af93409567824b11fd"
	},
	{
		"id": "e94beeefdc00",
		"ts": "2026-08-01T06:25:18.080Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1079912.77,
		"hash": "e94beeefdc00932f5fec1f0b0d6a17b2dcbad462bc8427f977004dad8a856387"
	},
	{
		"id": "74c30a1c831f",
		"ts": "2026-08-01T06:25:18.346Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1833439.27,
		"hash": "74c30a1c831f8e6faec85ad889e8b11d1cb0bda588d935be5bcb42ccecab2836"
	},
	{
		"id": "2faeec6c2cb2",
		"ts": "2026-08-01T06:25:18.594Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1737224.18,
		"hash": "2faeec6c2cb2d79f1cc280c3e9222e9a6710804de2686a31bb4f3ed17286b84d"
	},
	{
		"id": "f78bd622ac8f",
		"ts": "2026-08-01T06:25:18.842Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4392045.65,
		"hash": "f78bd622ac8f87ceec94398910da9a4781fe60fb7c0e7f65822ecd48aead97b8"
	},
	{
		"id": "e221103c89b7",
		"ts": "2026-08-01T06:25:19.095Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5376304.79,
		"hash": "e221103c89b79be5575649e3b32f5c5fb2d8b42306929a785aad58283257ee94"
	},
	{
		"id": "1ea367c0284b",
		"ts": "2026-08-01T06:25:19.345Z",
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
		"liquidityUsd": 727673.73,
		"hash": "1ea367c0284b24f79399eb05abe9e566172c1ea98ebe9f4acf862295d04fb583"
	},
	{
		"id": "26c9206882af",
		"ts": "2026-08-01T06:25:19.599Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4754078.44,
		"hash": "26c9206882af5a134bfcbbf7439693902d94616422fd6d3259af45383b5bb170"
	},
	{
		"id": "fc497273560f",
		"ts": "2026-08-01T03:26:32.012Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111678589.02,
		"hash": "fc497273560f4ade592c7d804b58368b2b7d984a8acb8074f528a5e7b37b06bc"
	},
	{
		"id": "31461fe5ac92",
		"ts": "2026-08-01T03:26:32.379Z",
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
		"liquidityUsd": 16880732.43,
		"hash": "31461fe5ac9229cfee7128b405db5e94f5cbbc30d1c7b424f81b6908c22a34ee"
	},
	{
		"id": "26cf932b5e39",
		"ts": "2026-08-01T03:26:32.565Z",
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
		"liquidityUsd": 1124130.35,
		"hash": "26cf932b5e391fa29cf102ee8cbb1b6b54796046882ece8d6b44baf5abfd62f7"
	},
	{
		"id": "3580788d1278",
		"ts": "2026-08-01T03:26:32.798Z",
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
		"liquidityUsd": 25536380.04,
		"hash": "3580788d12782f07b7cc8b37c869fad653b07cb323f881017289a599e4a19379"
	},
	{
		"id": "6cfe5d17130d",
		"ts": "2026-08-01T03:26:32.986Z",
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
		"liquidityUsd": 4388997.86,
		"hash": "6cfe5d17130d197824c0fe856f79c93e07c076b91d0c2f41c3121cc289ce5ea9"
	},
	{
		"id": "d1b4199dbe25",
		"ts": "2026-08-01T03:26:33.207Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 895446.45,
		"hash": "d1b4199dbe25ee328f5e7a996988a05876fbb8c285279dd8a071c0b57c461d88"
	},
	{
		"id": "f6805671c9cd",
		"ts": "2026-08-01T03:26:33.411Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25536380.04,
		"hash": "f6805671c9cd092f75f9453ff2b28b5e08d90283d264bf847641bd743ee4c725"
	},
	{
		"id": "54e8cfee6465",
		"ts": "2026-08-01T03:26:33.625Z",
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
		"liquidityUsd": 2367354.16,
		"hash": "54e8cfee64653b0616420675146c73fc252db6c6a3633f147a1d88802dbd3ea3"
	},
	{
		"id": "842ebcfbd2c8",
		"ts": "2026-08-01T03:26:33.838Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5380266.37,
		"hash": "842ebcfbd2c8a0ec7d422236edee42e36a756936c87ff2c6ffee098488aae8b9"
	},
	{
		"id": "8bc5cd1d562e",
		"ts": "2026-08-01T03:26:34.022Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1086309.87,
		"hash": "8bc5cd1d562e10f9dc5a6aac84348dd0219dc085ec71dd101f6a3601f7d623d2"
	},
	{
		"id": "4a1ba7026d09",
		"ts": "2026-08-01T03:26:34.207Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1749691.96,
		"hash": "4a1ba7026d09ee5faaa1e3ddb59885f9f3057244db97802fdec94b297ee7419b"
	},
	{
		"id": "624240544849",
		"ts": "2026-08-01T03:26:34.410Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4394819.21,
		"hash": "6242405448496feae8c33f2d9daed9f2c5e64f892dafe9429081b644d059cf75"
	},
	{
		"id": "9ea71e97767d",
		"ts": "2026-08-01T03:26:34.599Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1848669.07,
		"hash": "9ea71e97767d8f73f5efae1e91ec9e749f7e544d1b5846308e8b8f37fe1367ab"
	},
	{
		"id": "ae8dcd9b0b81",
		"ts": "2026-08-01T03:26:34.803Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 176944.24,
		"hash": "ae8dcd9b0b818aa5291b92503acb307dd1b4226103f80ff3890754eafc146c9c"
	},
	{
		"id": "11f1ddab2e90",
		"ts": "2026-08-01T03:26:34.998Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4781248.15,
		"hash": "11f1ddab2e90759b430bb883146984abe6dbc40f4d43ac6eb4129d3df6b92893"
	},
	{
		"id": "040b574634f7",
		"ts": "2026-08-01T03:26:35.214Z",
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
		"liquidityUsd": 728989.65,
		"hash": "040b574634f7ce756e993e175b2a512ca9de3876f8f587a471397c362585fccd"
	},
	{
		"id": "2169872abf21",
		"ts": "2026-07-31T23:58:32.410Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111707638.29,
		"hash": "2169872abf2189cfb839e30fc69c661922daa0f629aca5a8060e3057388f798e"
	},
	{
		"id": "d3aaf4cb9de8",
		"ts": "2026-07-31T23:58:32.855Z",
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
		"liquidityUsd": 16921616.95,
		"hash": "d3aaf4cb9de8459e5a86db59f667be5552ffd43104e993a1378b0176f5ba8ad8"
	},
	{
		"id": "f891331b59b2",
		"ts": "2026-07-31T23:58:33.096Z",
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
		"liquidityUsd": 1121041.69,
		"hash": "f891331b59b294270ad0e6e84c58a8065bfcf7c2434b4cf8d79b468cac9484f1"
	},
	{
		"id": "7d6c8b9247a4",
		"ts": "2026-07-31T23:58:33.330Z",
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
		"liquidityUsd": 25444982.73,
		"hash": "7d6c8b9247a40208588c586e89f67e62f250f1b6fbaa8b670f1f901e19817ab5"
	},
	{
		"id": "899309df11e9",
		"ts": "2026-07-31T23:58:33.562Z",
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
		"liquidityUsd": 4642850.53,
		"hash": "899309df11e9a326c2fa0f8401f8f8f91442baf47b3eb498e7d4cd2fa090fef8"
	},
	{
		"id": "047104f72c41",
		"ts": "2026-07-31T23:58:33.795Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 892247.93,
		"hash": "047104f72c413dfa095320edf564b16026aebedea2385af5fed6480f4070f5e3"
	},
	{
		"id": "59a45ac553cc",
		"ts": "2026-07-31T23:58:34.046Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25444982.73,
		"hash": "59a45ac553cc56d4e00ba9b6138cb0a40ad6578efcdf3d046a421f92eccb91fc"
	},
	{
		"id": "f40fc90f5d63",
		"ts": "2026-07-31T23:58:34.278Z",
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
		"liquidityUsd": 2360843.84,
		"hash": "f40fc90f5d63a583a69c32f382c5ee66830afc380984ee6fee39d079d97a2b87"
	},
	{
		"id": "29b9fd4ba829",
		"ts": "2026-07-31T23:58:34.513Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5397450.32,
		"hash": "29b9fd4ba8293b00a83036a5cace1f3f2dcf3127d27e5ad88b1686baf428b50e"
	},
	{
		"id": "3ba18162b860",
		"ts": "2026-07-31T23:58:34.773Z",
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
		"liquidityUsd": 9349943.12,
		"hash": "3ba18162b86078e71e5e831dc93bc61c4d9fdcf4bac7a03da88f43b026dc7335"
	},
	{
		"id": "1c4317cc7316",
		"ts": "2026-07-31T23:58:34.992Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1094317.41,
		"hash": "1c4317cc731620d37d7e1109e1ef8af223ef9effbad35a0ebdcd3b6202440df6"
	},
	{
		"id": "fbfc1cbdd8e8",
		"ts": "2026-07-31T23:58:35.209Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1756665.65,
		"hash": "fbfc1cbdd8e83dfcbb1e1325227e093d471e2b86810da16b0ceedade8194ac48"
	},
	{
		"id": "7a058138e22b",
		"ts": "2026-07-31T23:58:35.427Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4333041.07,
		"hash": "7a058138e22b5d61c3e0b7f38397b77cff5bc041472d6d1ca42c618c37a36486"
	},
	{
		"id": "2845445665c2",
		"ts": "2026-07-31T23:58:35.642Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1825494.26,
		"hash": "2845445665c29fb4404b2099e86422ab64d96d324f518d72d63941046e17470e"
	},
	{
		"id": "38580019d64a",
		"ts": "2026-07-31T23:58:35.860Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4731216.18,
		"hash": "38580019d64aa198536a4a85204f2245ae8740f023098eae807cd0289f192336"
	},
	{
		"id": "f83741164f47",
		"ts": "2026-07-31T23:58:36.077Z",
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
		"liquidityUsd": 733713.66,
		"hash": "f83741164f47edd268413a331ffae562713765e5b447b5d23d906c57b375d1d6"
	},
	{
		"id": "6000321cdc63",
		"ts": "2026-07-31T22:00:57.730Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110860956.1,
		"hash": "6000321cdc63395f85b0e4abcb3ed4ea022f197ce3dba4d0e167da98fc007b94"
	},
	{
		"id": "a08b1d159e86",
		"ts": "2026-07-31T22:00:57.976Z",
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
		"liquidityUsd": 17247265.4,
		"hash": "a08b1d159e86dbc1942fa263e43409b2dc87c3485571b4f346cc3c468d476a9c"
	},
	{
		"id": "771878102063",
		"ts": "2026-07-31T22:00:58.419Z",
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
		"liquidityUsd": 1116023.76,
		"hash": "7718781020630a8dc5fcf709ebe4bd84cc0cbffe9a8be70082f7a3cf4e395f48"
	},
	{
		"id": "099fb8ddd107",
		"ts": "2026-07-31T22:00:58.653Z",
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
		"liquidityUsd": 25461031.1,
		"hash": "099fb8ddd107de28fa34ff66017bd439b049dc227d14fcc5c8d3a31de6d23140"
	},
	{
		"id": "fe8ce7f9b9af",
		"ts": "2026-07-31T22:00:58.889Z",
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
		"liquidityUsd": 4621248.26,
		"hash": "fe8ce7f9b9af9a813c0f9e9eb8417d741a83daba0016a7d7177f81c8576180b7"
	},
	{
		"id": "9f343a6f9d2e",
		"ts": "2026-07-31T22:00:59.134Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 891830.65,
		"hash": "9f343a6f9d2ec9b12c076151cc276ce89cc29c1bbf09dbf1a7cb3442c3387987"
	},
	{
		"id": "38846c0aad6e",
		"ts": "2026-07-31T22:00:59.363Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25461031.1,
		"hash": "38846c0aad6edceff255ed5a5d27d976ec922e0fe1ff8ba0effe6f93efd36314"
	},
	{
		"id": "abc708ef820c",
		"ts": "2026-07-31T22:00:59.627Z",
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
		"liquidityUsd": 4107897.01,
		"hash": "abc708ef820c269f8673fdd727ae60f2003fd03d8732062ba39c320fc03989c1"
	},
	{
		"id": "1f734ad435b8",
		"ts": "2026-07-31T22:00:59.869Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5409346.86,
		"hash": "1f734ad435b8097661a6c69120c214a77d832d5e9a9f2026cf2eec4b6ebf299a"
	},
	{
		"id": "8fa4443ca681",
		"ts": "2026-07-31T22:01:00.316Z",
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
		"liquidityUsd": 9303700.45,
		"hash": "8fa4443ca681ebe6503b88b21a127555d4c17948e9b7501562673790d2ce2807"
	},
	{
		"id": "6ed591d49539",
		"ts": "2026-07-31T22:01:00.782Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1089711.98,
		"hash": "6ed591d4953982d1d460be19c774ac44fb1b4c5d38cc1d99dfdab46a5956c27f"
	},
	{
		"id": "70eddb3ad077",
		"ts": "2026-07-31T22:01:01.190Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4322254.42,
		"hash": "70eddb3ad0771607f4e21c215f2315165e63cf5ef4bc1f74330eaed15e9980ff"
	},
	{
		"id": "70bc27b43579",
		"ts": "2026-07-31T22:01:01.669Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 10,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.8,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 730105.6,
		"hash": "70bc27b435792a9c1846d2e761e0aeebb9ab7f599921bf34b604723d5cc44593"
	},
	{
		"id": "82ffb02db347",
		"ts": "2026-07-31T22:01:01.905Z",
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
		"liquidityUsd": 4740767.76,
		"hash": "82ffb02db347bb156b13b26a634094d44b4f158a2be235ab5d4f3b2347c422ac"
	},
	{
		"id": "98e6f4229856",
		"ts": "2026-07-31T22:01:02.181Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 178855.29,
		"hash": "98e6f422985664f3693369233a4b60e80c69bf4dd73dd028ab498f963ae64734"
	},
	{
		"id": "c0ff02764c88",
		"ts": "2026-07-31T20:16:58.768Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110969817.71,
		"hash": "c0ff02764c88696f250fc515e82a5c56c4b926bea4bacb9271fdfab755b1b74a"
	},
	{
		"id": "e989fd67ac9c",
		"ts": "2026-07-31T20:16:59.407Z",
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
		"liquidityUsd": 16990591.63,
		"hash": "e989fd67ac9c5c47c57f19a43fc7e703eb7d0dfdc81fff2bb50065dc21a72e6d"
	},
	{
		"id": "5e6d2d15756f",
		"ts": "2026-07-31T20:16:59.641Z",
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
		"liquidityUsd": 1118568.02,
		"hash": "5e6d2d15756f3f6e54fd47a52f6f5d88c044d5f74a365662bd15cb9c10c5f112"
	},
	{
		"id": "4825290e36e6",
		"ts": "2026-07-31T20:16:59.878Z",
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
		"liquidityUsd": 25490248.69,
		"hash": "4825290e36e6adfceb79cea4a9fb23fa32f0f71d833b444a6aaf0b5015bedd7a"
	},
	{
		"id": "dee2f5a641fd",
		"ts": "2026-07-31T20:17:00.112Z",
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
		"liquidityUsd": 4646654,
		"hash": "dee2f5a641fdaa5db1d7bdc85badfa89e2466a5a31b9ace7503a8343a35aa53c"
	},
	{
		"id": "d8ecbc13ff77",
		"ts": "2026-07-31T20:17:00.348Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 894018.71,
		"hash": "d8ecbc13ff778dbeef9ae20f7a06ddbc5cb6ef8f4e33ed8e080d963b24e27103"
	},
	{
		"id": "200100ad06b1",
		"ts": "2026-07-31T20:17:00.588Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25490248.69,
		"hash": "200100ad06b11168c1d01599468bb9179d109efb7931be13a2e20587b63f68f0"
	},
	{
		"id": "57e037ae9fec",
		"ts": "2026-07-31T20:17:00.920Z",
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
		"liquidityUsd": 4119691.95,
		"hash": "57e037ae9fece93084d42de81a2582ff01ea6798b96de04d0e262b0d1332c5ac"
	},
	{
		"id": "f33dda891447",
		"ts": "2026-07-31T20:17:01.156Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5414343.34,
		"hash": "f33dda891447b6a76116f417ab24a640b562fe1ac86c3ef9d8e55b52aa9d401e"
	},
	{
		"id": "25cfe5da4ec6",
		"ts": "2026-07-31T20:17:01.388Z",
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
		"liquidityUsd": 9351936.52,
		"hash": "25cfe5da4ec6ced86d7659288d65194a6c54ae4477d943ef0c78dcf30bf2460b"
	},
	{
		"id": "bac4f2a86f34",
		"ts": "2026-07-31T20:17:01.622Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1116936.79,
		"hash": "bac4f2a86f3491212ceebeae298824fc4e7eadfbdb25d66e54a8b83112aa2e28"
	},
	{
		"id": "22fb0cf43ffb",
		"ts": "2026-07-31T20:17:01.858Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4333199.78,
		"hash": "22fb0cf43ffb9869fc158dfb888c075f08923591d3ee773e792f920790b5a59d"
	},
	{
		"id": "ac55f8f99d36",
		"ts": "2026-07-31T20:17:02.097Z",
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
		"liquidityUsd": 4840563.74,
		"hash": "ac55f8f99d362b6c5009468ee4aacfa5370d1fe524a4690208dcd26daaf930b8"
	},
	{
		"id": "86a715183e27",
		"ts": "2026-07-31T20:17:02.367Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 181548.02,
		"hash": "86a715183e2759cd2849c64a588a577e19ed027c9a5b5e41977fc383595bbb25"
	},
	{
		"id": "fdf63eda30d3",
		"ts": "2026-07-31T20:17:02.586Z",
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
		"liquidityUsd": 730962.75,
		"hash": "fdf63eda30d3ea259824f0b0e0510d8d8a5d78667a358e7fb56e5de02697dd7d"
	},
	{
		"id": "d1d963b3004a",
		"ts": "2026-07-31T18:17:24.177Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111232523.83,
		"hash": "d1d963b3004a463041d4dcaed78a66a7d92cbc60bd8f62a4594d124d771764e7"
	},
	{
		"id": "b6d402db384f",
		"ts": "2026-07-31T18:17:24.631Z",
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
		"liquidityUsd": 14236531.07,
		"hash": "b6d402db384f493548b6dfecff4b712612e61c64a9e56b4f511dab26fa338742"
	},
	{
		"id": "50a94e100190",
		"ts": "2026-07-31T18:17:24.877Z",
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
		"liquidityUsd": 1126941.36,
		"hash": "50a94e100190ca7fe81600d4e9c555767564c1ec66fa3fa969b37f3001cc61c2"
	},
	{
		"id": "7ed8d50e408d",
		"ts": "2026-07-31T18:17:25.132Z",
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
		"liquidityUsd": 25508128.62,
		"hash": "7ed8d50e408d554139368bb1cde8af2f7d20ad9ee8ca9fe2ed246d3eda68fe36"
	},
	{
		"id": "6bdcb8b17d7c",
		"ts": "2026-07-31T18:17:25.586Z",
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
		"liquidityUsd": 4693597.3,
		"hash": "6bdcb8b17d7c0fe889fbabe6fcec8c425de4f2d0650a89287d6826cb111dcbad"
	},
	{
		"id": "daa8f8620182",
		"ts": "2026-07-31T18:17:25.840Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 894304.26,
		"hash": "daa8f86201827b23bc89b6e33717011e5cc9d4d4cdcb967859f247dba62bb7a5"
	},
	{
		"id": "8963a560790b",
		"ts": "2026-07-31T18:17:26.087Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25508128.62,
		"hash": "8963a560790b3d226538b615a52216c72501f2e298250b8da385d9a915446285"
	},
	{
		"id": "cb135288702b",
		"ts": "2026-07-31T18:17:26.344Z",
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
		"liquidityUsd": 4127439.27,
		"hash": "cb135288702b9dff87b1849baa3515ac9439127e24605283a986d06d2320b828"
	},
	{
		"id": "443ef8f2928b",
		"ts": "2026-07-31T18:17:26.588Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5293246.21,
		"hash": "443ef8f2928b051f1a3ec814f081c55ce31e8babf315a918763f57f168a8f107"
	},
	{
		"id": "e146e7d2aa5e",
		"ts": "2026-07-31T18:17:26.839Z",
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
		"liquidityUsd": 9399873.83,
		"hash": "e146e7d2aa5ee08cbd0f6dab6970f6e512e6941cbf0bf3dfd57768452afb62bf"
	},
	{
		"id": "bce142eca6d3",
		"ts": "2026-07-31T18:17:27.068Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4350235.51,
		"hash": "bce142eca6d3e14f0575bdd69db9bffae3204eb087d834e41b6cd4b9219cd34c"
	},
	{
		"id": "1e638117f1c7",
		"ts": "2026-07-31T18:17:27.295Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 709650.6,
		"hash": "1e638117f1c7dd44207c5584167ab8568066594a4a991c24b79fa10d9e5dc52a"
	},
	{
		"id": "dc06097f3138",
		"ts": "2026-07-31T18:17:27.525Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4845023.81,
		"hash": "dc06097f313809f93db7fdfd4fea98ebfc04e51a97a74a0bdb2cd6bbc80cff7e"
	},
	{
		"id": "46220d96f254",
		"ts": "2026-07-31T18:17:27.755Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 185472.43,
		"hash": "46220d96f254beee376af89613781a493e81490f79acc4f0b2232489212fa0cd"
	},
	{
		"id": "d7487ba0140c",
		"ts": "2026-07-31T18:17:27.983Z",
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
		"liquidityUsd": 721630.35,
		"hash": "d7487ba0140c36921d6d9d0e5a2c5c298c9d419fced7734f783d73d527a18bcf"
	},
	{
		"id": "0ccd28ff4528",
		"ts": "2026-07-31T18:17:28.219Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 974366.16,
		"hash": "0ccd28ff452836b762f9170350b5ddb0b95a5a7d57045708c94805ec59e6a1f3"
	},
	{
		"id": "b4e8d10d46e1",
		"ts": "2026-07-31T18:17:28.451Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 548681.31,
		"hash": "b4e8d10d46e1c95e140328dd658402ef965e4d4630d3d03f08019383aa332507"
	},
	{
		"id": "f5da6ca2c3d4",
		"ts": "2026-07-31T16:42:54.078Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110644714.85,
		"hash": "f5da6ca2c3d4ea480e56c21a1bfd7759e452aabe5230939d95d2edf44f5fe5cf"
	},
	{
		"id": "f49005a64db7",
		"ts": "2026-07-31T16:42:54.334Z",
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
		"liquidityUsd": 15497786.14,
		"hash": "f49005a64db7243f9233761b71457346a4de2ccd3a2e700ecc2f89d4badbcd9b"
	},
	{
		"id": "5551b8f20aed",
		"ts": "2026-07-31T16:42:54.590Z",
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
		"liquidityUsd": 1133152.88,
		"hash": "5551b8f20aedf125903293061908a8c41d12b5eb89ce26574711afa8fe8adc16"
	},
	{
		"id": "f30e0bd3ca2a",
		"ts": "2026-07-31T16:42:54.844Z",
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
		"liquidityUsd": 25512246.16,
		"hash": "f30e0bd3ca2ab61e1e39050bee0ea3583a54f90688b8198d16eb3a4760ebccf4"
	},
	{
		"id": "09ae8db2c048",
		"ts": "2026-07-31T16:42:55.090Z",
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
		"liquidityUsd": 4665052.25,
		"hash": "09ae8db2c04828647f7a0cc1be8fbe8842778bb0497cb40e048b7b1a75f954b3"
	},
	{
		"id": "c7d2332b4da7",
		"ts": "2026-07-31T16:42:55.352Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 893148.3,
		"hash": "c7d2332b4da7eac82521e27c963eda4574a83dc91a8c55547251f34896cb7ac7"
	},
	{
		"id": "a3e1f89430bf",
		"ts": "2026-07-31T16:42:55.592Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25512246.16,
		"hash": "a3e1f89430bf35b8c66b04e2958c430b6b5ea5c08be2684007e40bca4b9212ce"
	},
	{
		"id": "e6140b1018a9",
		"ts": "2026-07-31T16:42:55.834Z",
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
		"liquidityUsd": 4107019.57,
		"hash": "e6140b1018a9e25878c959ea42ed1bedf9bb10bfc47e7a1ae58948c7acba57d5"
	},
	{
		"id": "ba0d137ddca8",
		"ts": "2026-07-31T16:42:56.087Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5284949.91,
		"hash": "ba0d137ddca88d2be03fd28a7b09791cd2250d235ee5057174600f199048e687"
	},
	{
		"id": "ac2eb71c8528",
		"ts": "2026-07-31T16:42:56.331Z",
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
		"liquidityUsd": 9331563.27,
		"hash": "ac2eb71c85283ee0da3f446f89a4f78c0e8f9c8b9b6e8bab63b1a73ebdd762b1"
	},
	{
		"id": "5b53d116edf9",
		"ts": "2026-07-31T16:42:56.571Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 703504.86,
		"hash": "5b53d116edf93d3dea5cd5a04df4e99c4c107ac69fdb8981d169aa0f16045e92"
	},
	{
		"id": "3329a18cdfd5",
		"ts": "2026-07-31T16:42:56.799Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 538285.16,
		"hash": "3329a18cdfd5db965e2eb0dc92c2dcfcdb1d64d2c3ed102e563979f02650a17d"
	},
	{
		"id": "585e2f42e448",
		"ts": "2026-07-31T16:42:57.025Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4305540.45,
		"hash": "585e2f42e4484877b392dd6905fdf09eb6b5248a7b06607f311335b8d1361f15"
	},
	{
		"id": "488b97f0fb10",
		"ts": "2026-07-31T16:42:57.267Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 734277.79,
		"hash": "488b97f0fb104be37221d5f319692389826da05b41ea970c415af26ed9df6031"
	},
	{
		"id": "26b9e27e7702",
		"ts": "2026-07-31T16:42:57.496Z",
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
		"liquidityUsd": 719023.32,
		"hash": "26b9e27e7702414030d588ba53869679d7273a5fa710a6dc5ee872f621e69176"
	},
	{
		"id": "b0da5dc4552f",
		"ts": "2026-07-31T16:42:57.723Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5068659.49,
		"hash": "b0da5dc4552fba892d9aa66564e0145d0a4f523e48b28dd58531bfddd76805e2"
	},
	{
		"id": "b023c0f70831",
		"ts": "2026-07-31T16:42:57.961Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 185460.9,
		"hash": "b023c0f70831b4fc9c4263081b256f4ea693a470e3d8fbc23d8d73aa19b992e4"
	},
	{
		"id": "e9715de12853",
		"ts": "2026-07-31T14:01:43.446Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110754402.9,
		"hash": "e9715de12853490e59244aaeefca43ea19e84c814f6119bb548ce18b09f5ecbb"
	},
	{
		"id": "b95e6b7e799c",
		"ts": "2026-07-31T14:01:43.887Z",
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
		"liquidityUsd": 16416707.31,
		"hash": "b95e6b7e799c517e99c47f0e7bed5a9c0404d0d67f1fc6b5181fbeeb37563363"
	},
	{
		"id": "27c857d8deef",
		"ts": "2026-07-31T14:01:44.132Z",
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
		"liquidityUsd": 1140870.32,
		"hash": "27c857d8deeff849385b767656de20ef4869562eb943c478f3fc90a068003a41"
	},
	{
		"id": "c5c0fd44dd4d",
		"ts": "2026-07-31T14:01:44.374Z",
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
		"liquidityUsd": 25490952.35,
		"hash": "c5c0fd44dd4dfef644738af6f85440d0223cc869d25b3854c89c39ab41ad12c3"
	},
	{
		"id": "998b39fa86f6",
		"ts": "2026-07-31T14:01:44.617Z",
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
		"liquidityUsd": 4696523.66,
		"hash": "998b39fa86f68bc9e496bf7fc872836945a9c1a19c4d8c740568730a7f10f7fa"
	},
	{
		"id": "f7b88e152309",
		"ts": "2026-07-31T14:01:44.858Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 895602.83,
		"hash": "f7b88e15230903676e63cf4709e1109610c75852e1a8b67883f93ef15d0f5fd4"
	},
	{
		"id": "373efbb16cf1",
		"ts": "2026-07-31T14:01:45.100Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25490952.35,
		"hash": "373efbb16cf17b13f3a3eb6d597416cd57501b1a89271316260992f879ea9be0"
	},
	{
		"id": "bb09573c5997",
		"ts": "2026-07-31T14:01:45.342Z",
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
		"liquidityUsd": 4122073.15,
		"hash": "bb09573c599777ab3bf0324d1d1ae56cb0d1e8c85b53a9791c90762c4e1d7463"
	},
	{
		"id": "5f24efa61c29",
		"ts": "2026-07-31T14:01:45.581Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5274364.16,
		"hash": "5f24efa61c29f1cf9c95ac0ec4e36ad366f1ee5636abaf88c97e35a67d9b0b58"
	},
	{
		"id": "ef8434beab04",
		"ts": "2026-07-31T14:01:45.821Z",
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
		"liquidityUsd": 9345911.51,
		"hash": "ef8434beab0454510fd127652ed634fdc0812a9fdaf1c31361fc4a74bda8c458"
	},
	{
		"id": "430bc0983c9d",
		"ts": "2026-07-31T14:01:46.048Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 639838.44,
		"hash": "430bc0983c9d67f96840ca1261865ef5dfb1ecc80753e83f2868ba143023e28f"
	},
	{
		"id": "963ceb7475cc",
		"ts": "2026-07-31T14:01:46.274Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 742951.65,
		"hash": "963ceb7475ccf99dcc8c39f4459e6fef3416e0721d4925f4699bccffb4447f0d"
	},
	{
		"id": "40a1cd22d832",
		"ts": "2026-07-31T14:01:46.501Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1758067.85,
		"hash": "40a1cd22d8329ad6f6124d3179b93a8b625c7fb539529c36fff8709932e43964"
	},
	{
		"id": "3821585960d6",
		"ts": "2026-07-31T14:01:46.730Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4278454.67,
		"hash": "3821585960d6f6aaf831ebf4f86753a9cf5f8aa8302cf6175f16eb9f8bcaccc0"
	},
	{
		"id": "78fe075f61e9",
		"ts": "2026-07-31T14:01:46.955Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 762004.79,
		"hash": "78fe075f61e9d6b66c82a5441a7b50ba501feb5a7317c914accb73c9f190ae39"
	},
	{
		"id": "7a0aae2caf38",
		"ts": "2026-07-31T14:01:47.184Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4970795.76,
		"hash": "7a0aae2caf38eea791ec36bd9518f6770eb3140bf0e253700ba7de981969eb60"
	},
	{
		"id": "77ccc92b6806",
		"ts": "2026-07-31T14:01:47.411Z",
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
		"liquidityUsd": 746670.34,
		"hash": "77ccc92b6806a1cea16f8b71992f474e5e311efdd4c568524776c177f79b4f0b"
	},
	{
		"id": "245648b70f0e",
		"ts": "2026-07-31T11:56:13.873Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111345865.44,
		"hash": "245648b70f0e94af09cc20e4b11f88b47e13161ed3d68645861235bc14e41920"
	},
	{
		"id": "f1309c71f5eb",
		"ts": "2026-07-31T11:56:14.308Z",
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
		"liquidityUsd": 15901310.51,
		"hash": "f1309c71f5ebbc4ea06ce9423561082bf07de21b2654fcd502232d982f506fff"
	},
	{
		"id": "caf33f29e33f",
		"ts": "2026-07-31T11:56:14.746Z",
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
		"liquidityUsd": 1118330.62,
		"hash": "caf33f29e33f77f1851cae90969f198407154d9369438b7cbc9eb9c7e859cbbe"
	},
	{
		"id": "b2e7fe6fe506",
		"ts": "2026-07-31T11:56:14.977Z",
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
		"liquidityUsd": 25558682.63,
		"hash": "b2e7fe6fe50658f376e6dedc63033f5c63d7ad1e6827ceefe2fefe9921f23fe6"
	},
	{
		"id": "462dd6fc26a6",
		"ts": "2026-07-31T11:56:15.213Z",
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
		"liquidityUsd": 4733407.73,
		"hash": "462dd6fc26a6bf03d649942b6e5010712a5433de20f10e0986b09930ed296d8c"
	},
	{
		"id": "b4b1b706e779",
		"ts": "2026-07-31T11:56:15.448Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 902499.74,
		"hash": "b4b1b706e779e6dad461f95855edd903818cf64b4136f0ba6d3fcc6a53307c3a"
	},
	{
		"id": "5c3374cd6c3f",
		"ts": "2026-07-31T11:56:15.683Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25558682.63,
		"hash": "5c3374cd6c3f81be544842aafe62302fb9bce08b6b23efeccd510087a0a32847"
	},
	{
		"id": "8337fa9c5046",
		"ts": "2026-07-31T11:56:15.916Z",
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
		"liquidityUsd": 4154976.43,
		"hash": "8337fa9c5046bd4d0a7c0ad64b488a081e4724ba859debbe9e6487ffc7588765"
	},
	{
		"id": "fad5e9420047",
		"ts": "2026-07-31T11:56:16.150Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5337008.76,
		"hash": "fad5e9420047de972cff987295b96fcf18206c3538f8fbee782f805fa9b97399"
	},
	{
		"id": "0daf3fb621b7",
		"ts": "2026-07-31T11:56:16.379Z",
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
		"liquidityUsd": 9446641.59,
		"hash": "0daf3fb621b78f8b76c5fedfc8b21071c99b897a1584b24aec4b041fb2634d98"
	},
	{
		"id": "02683b439769",
		"ts": "2026-07-31T11:56:16.598Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 664006.33,
		"hash": "02683b4397694218c20dac7a36f7fc3520af6dc3bebecbbc29cd47bfbc5eaf76"
	},
	{
		"id": "ffa09e98a01a",
		"ts": "2026-07-31T11:56:16.815Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 710878.97,
		"hash": "ffa09e98a01a1533c443d429b1ae674056c9896d5ce984343be4d484142c5c9f"
	},
	{
		"id": "443ad4e2f656",
		"ts": "2026-07-31T11:56:17.034Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1762657.65,
		"hash": "443ad4e2f656a8e22e26065c9541c4a0c5b230935db9d54b7db7b2071078f35e"
	},
	{
		"id": "528c8f0329d1",
		"ts": "2026-07-31T11:56:17.250Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4375016.22,
		"hash": "528c8f0329d12b76087367744adbbac1a2069e034e5319cbd2b659187952dc28"
	},
	{
		"id": "fd1377aae5c7",
		"ts": "2026-07-31T11:56:17.469Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4915377.07,
		"hash": "fd1377aae5c721fbb7f303cf0563b7f83e4e06cef8ce7e7e93aca82b741f00c6"
	},
	{
		"id": "93366e02d839",
		"ts": "2026-07-31T11:56:17.686Z",
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
		"liquidityUsd": 739008.78,
		"hash": "93366e02d839e778b68c3955cc33c32144c7e35b662c1906672ade9a8c8bf4e6"
	},
	{
		"id": "cd8aefda0a9c",
		"ts": "2026-07-31T11:56:17.905Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 878732.17,
		"hash": "cd8aefda0a9c3a7f3069c75fc9a9e76ea11cbda8d18bb8934e6f8c717fb6d41f"
	},
	{
		"id": "6dbac8b81c48",
		"ts": "2026-07-31T09:40:54.588Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111540430.49,
		"hash": "6dbac8b81c488aa79c21b569fde6fb1c893af6d09f095e74fa5c7c1fe10911c0"
	},
	{
		"id": "48fcda288902",
		"ts": "2026-07-31T09:40:55.063Z",
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
		"liquidityUsd": 15913158.09,
		"hash": "48fcda288902bed32d5493c46af413d444123778ae159bb79e8deca6da5c2e9f"
	},
	{
		"id": "11bf02b0b612",
		"ts": "2026-07-31T09:40:55.504Z",
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
		"liquidityUsd": 1120999.94,
		"hash": "11bf02b0b612a82d4fafd70d07d197a3738b3f61aec713aa0b91db9ed34fd7bf"
	},
	{
		"id": "7c363a875661",
		"ts": "2026-07-31T09:40:55.742Z",
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
		"liquidityUsd": 25573466.55,
		"hash": "7c363a875661010ef3d34975770dfec93ddd5ae39469e8f163f34ae1956e5ba7"
	},
	{
		"id": "cacc13720472",
		"ts": "2026-07-31T09:40:55.980Z",
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
		"liquidityUsd": 4714690.36,
		"hash": "cacc1372047278c1fd8f27594924e615d828700b9a831f3334cc75bd8ad4eadd"
	},
	{
		"id": "27e801457155",
		"ts": "2026-07-31T09:40:56.215Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 898812.98,
		"hash": "27e80145715576d81729f081f91f1e2b9a81308cabfb7e66aa604e03e21f51cd"
	},
	{
		"id": "8329ceaa7180",
		"ts": "2026-07-31T09:40:56.451Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25573466.55,
		"hash": "8329ceaa718068af00595ddb4a38e616e9398ae1ba3976d15a2c47b92bb48aab"
	},
	{
		"id": "07283fd0f7d6",
		"ts": "2026-07-31T09:40:56.690Z",
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
		"liquidityUsd": 4175143.26,
		"hash": "07283fd0f7d6646322ec7339db0ec4b2c9face1cc623554b744de3c3db54589b"
	},
	{
		"id": "e91cc20a349f",
		"ts": "2026-07-31T09:40:56.936Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5505258.88,
		"hash": "e91cc20a349faabf4dd00ff58eabc24fbc93dd22938d036e57ad0a57c6b33a4b"
	},
	{
		"id": "33c3dba0c47e",
		"ts": "2026-07-31T09:40:57.172Z",
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
		"liquidityUsd": 9501190.06,
		"hash": "33c3dba0c47e350cbce93ac00644e529b0afdc8b6440a1bf091f4aa472c6c697"
	},
	{
		"id": "157de4d213f6",
		"ts": "2026-07-31T09:40:57.394Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 633644.81,
		"hash": "157de4d213f69e92d3611fa5231d19b1c273784538ba0e2ee0dfc293d129eb6d"
	},
	{
		"id": "f2dcb6380c99",
		"ts": "2026-07-31T09:40:57.615Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 704920.54,
		"hash": "f2dcb6380c999539d66f2cde36f30581161f5878a6cd5c001c4eacf1f9f51d08"
	},
	{
		"id": "d12a9df72858",
		"ts": "2026-07-31T09:40:57.837Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1765619.88,
		"hash": "d12a9df72858a81cb08811e68a82a7009e4b1fe9c9bff4dc915476f4f2e839d6"
	},
	{
		"id": "7aeb9a643ea1",
		"ts": "2026-07-31T09:40:58.058Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4359127.89,
		"hash": "7aeb9a643ea1b912e370e636a7b6f873a166ff7eb79843b659dacb82772d30b9"
	},
	{
		"id": "e8ad46e615d1",
		"ts": "2026-07-31T09:40:58.296Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4858370.96,
		"hash": "e8ad46e615d17ac450eaff4b2258d72072e5c81124e7a4c5145c0461328a8c33"
	},
	{
		"id": "82fc2f22a529",
		"ts": "2026-07-31T09:40:58.516Z",
		"symbol": "msETH",
		"token": "0x7Ba6F01772924a82D9626c126347A28299E98c98",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14273735.46,
		"hash": "82fc2f22a529c4b48f2e3eccb1fd8cb0c9874092c42cbd0900784c0fa84a800c"
	},
	{
		"id": "ab99cf989b8c",
		"ts": "2026-07-31T09:40:58.739Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 746272.51,
		"hash": "ab99cf989b8cde0e81cfc7d516203639a1c1ac3f63261ee049e04bd357d6d926"
	},
	{
		"id": "ce6909d5a874",
		"ts": "2026-07-31T06:08:47.749Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111900683.85,
		"hash": "ce6909d5a874a830d8bf72414f7885cec491b9faf0d4883589450eb1f55938c7"
	},
	{
		"id": "ecffd00772cf",
		"ts": "2026-07-31T06:08:48.123Z",
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
		"liquidityUsd": 16355500.46,
		"hash": "ecffd00772cf46f44e78daccb8d15d65db3441c368b46b988070626976d43316"
	},
	{
		"id": "cd406154a2b1",
		"ts": "2026-07-31T06:08:48.331Z",
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
		"liquidityUsd": 1126784.49,
		"hash": "cd406154a2b15a9c7ceb71b9b6deb7dba286490ccbee3a3b712f3d7a62645849"
	},
	{
		"id": "d73515af1380",
		"ts": "2026-07-31T06:08:48.539Z",
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
		"liquidityUsd": 25734778.83,
		"hash": "d73515af13806c40db953f98672f2da2efa04b47e97310a23e4e4040531f009c"
	},
	{
		"id": "b7dd5d71e290",
		"ts": "2026-07-31T06:08:48.746Z",
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
		"liquidityUsd": 4757788.61,
		"hash": "b7dd5d71e2904b3b21a8fcce8a7a6dededca0dd453bc0f866ed1171310842560"
	},
	{
		"id": "911330acf06a",
		"ts": "2026-07-31T06:08:48.952Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 899046.83,
		"hash": "911330acf06a70dc59ebcf09615351a3493467522c8865bb9b5aaa540dd2d6f8"
	},
	{
		"id": "126f9b9b8cd2",
		"ts": "2026-07-31T06:08:49.173Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25734779.63,
		"hash": "126f9b9b8cd26d24c4c8ff73d3876e400d092938719d954a940f911b7d50903d"
	},
	{
		"id": "14c5570a4ac7",
		"ts": "2026-07-31T06:08:49.388Z",
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
		"liquidityUsd": 4232505.75,
		"hash": "14c5570a4ac7060270132b79fc9f91f6a75537257e2a1f7421d9c8890ec826ec"
	}
]
