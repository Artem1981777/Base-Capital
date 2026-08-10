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
	"updatedAt": "2026-08-10T19:52:57.960Z",
	"tokensScored": 8914,
	"verdictsIssued": 8914,
	"safe": 7783,
	"risky": 664,
	"likelyRug": 467,
	"ticks": 541
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "acf242ee2fc4",
		"ts": "2026-08-10T19:52:54.221Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112817218.34,
		"hash": "acf242ee2fc43dfc2a5f43b32051808fc407658aeae2671b151fa4e403f27fea"
	},
	{
		"id": "02d7f2960930",
		"ts": "2026-08-10T19:52:54.660Z",
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
		"liquidityUsd": 18187757.29,
		"hash": "02d7f2960930d5dd3448342b4cf7c6d27d9a273429aef920bc420ae444812dbd"
	},
	{
		"id": "2c575cf915f9",
		"ts": "2026-08-10T19:52:54.898Z",
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
		"liquidityUsd": 1027492.82,
		"hash": "2c575cf915f94b0149131f6e9ed28877b5d83e396d70e7d4032f8f1ce15c247f"
	},
	{
		"id": "e21a95be924a",
		"ts": "2026-08-10T19:52:55.133Z",
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
		"liquidityUsd": 26774631.84,
		"hash": "e21a95be924ad87792961b502b722a6a50125dd21efefa4ec17fddb01c1a96b1"
	},
	{
		"id": "49c0e9bf7860",
		"ts": "2026-08-10T19:52:55.371Z",
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
		"liquidityUsd": 4311145.96,
		"hash": "49c0e9bf786038cb9957ed00a9604c0201f89098d6cccde646cadd06c6a54ca0"
	},
	{
		"id": "c6d39f6ff421",
		"ts": "2026-08-10T19:52:55.608Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 922974.45,
		"hash": "c6d39f6ff4219f973bd5453cae3ee03b3fcdb8834cb1ef58ab2074b275bff505"
	},
	{
		"id": "13040a0c06d0",
		"ts": "2026-08-10T19:52:55.856Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26774631.84,
		"hash": "13040a0c06d0c84e6ff3754a13b36e44e6163732a26b67bc52ea837ded547dc6"
	},
	{
		"id": "86c261f9899d",
		"ts": "2026-08-10T19:52:56.091Z",
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
		"liquidityUsd": 4061360.13,
		"hash": "86c261f9899d9b67679e203f1888c2ac6a3adaaa047f41d978ae80a64d0e2d53"
	},
	{
		"id": "77c5767aab17",
		"ts": "2026-08-10T19:52:56.335Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 65444.38,
		"hash": "77c5767aab17677585c0fc520d81f2927599697fbce1b59ba59e2901c39cf727"
	},
	{
		"id": "b294fb457dbc",
		"ts": "2026-08-10T19:52:56.564Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2137566.5,
		"hash": "b294fb457dbc5002b2b08fb4d3547201b6caf228d06451fa7972d8f4e21e3ce0"
	},
	{
		"id": "6021b15be732",
		"ts": "2026-08-10T19:52:56.852Z",
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
		"liquidityUsd": 268053.11,
		"hash": "6021b15be732a011c7fdf08748b0c0bbdf86a225fdceefff0826d95f27ce6754"
	},
	{
		"id": "b897434ee9a1",
		"ts": "2026-08-10T19:52:57.071Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1003048.36,
		"hash": "b897434ee9a1f484208b024c377020222a1d141602b708828029f262f743964d"
	},
	{
		"id": "75f12b26ec33",
		"ts": "2026-08-10T19:52:57.288Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 266450.35,
		"hash": "75f12b26ec33d6c9371c4b8de21c02672f8a1fbaaea7f90f43fe9eda9ebdee15"
	},
	{
		"id": "bc758984ed5e",
		"ts": "2026-08-10T19:52:57.522Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9433593.29,
		"hash": "bc758984ed5ea2780c3f34d5a26439b91670d9beea4d8950d590b8d35ff3d522"
	},
	{
		"id": "d89850925f0d",
		"ts": "2026-08-10T19:52:57.739Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4122459.34,
		"hash": "d89850925f0ddfaffaab64283bc0fba7bb1b84891c1bf68f037cf50f83c6f146"
	},
	{
		"id": "a71accf645d7",
		"ts": "2026-08-10T19:52:57.960Z",
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
		"liquidityUsd": 1274141.55,
		"hash": "a71accf645d75b133b77d572e6c629cf2079a584cbb0fc7153ee189abdb7f6b7"
	},
	{
		"id": "88a9291d279f",
		"ts": "2026-08-10T18:51:55.461Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112771174.4,
		"hash": "88a9291d279fef45296f72a9dbf48e8de2851f49754686ca55434e025c51e413"
	},
	{
		"id": "9bed576dfb61",
		"ts": "2026-08-10T18:51:55.690Z",
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
		"liquidityUsd": 17933012.35,
		"hash": "9bed576dfb61bdbc67a382f07b45513f8d33c7127554b984efcd18f91d312c54"
	},
	{
		"id": "e0296420a1b3",
		"ts": "2026-08-10T18:51:55.942Z",
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
		"liquidityUsd": 1027492.82,
		"hash": "e0296420a1b3c63fde5212d0bb8da904a356e105c7f405d442368b5c045744aa"
	},
	{
		"id": "594bfaaa8a64",
		"ts": "2026-08-10T18:51:56.390Z",
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
		"liquidityUsd": 26702751.43,
		"hash": "594bfaaa8a649c381fe5e32fa2123c93a5201ac4990260b04220e3c9478320f9"
	},
	{
		"id": "b25d38f8b027",
		"ts": "2026-08-10T18:51:56.619Z",
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
		"liquidityUsd": 4302898.23,
		"hash": "b25d38f8b02709173ca08c84857601a6b6e32d91b621b2bbe5fd652e1b7a2f00"
	},
	{
		"id": "6bcc6ff6fda6",
		"ts": "2026-08-10T18:51:56.863Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 922974.45,
		"hash": "6bcc6ff6fda6a85a7789dc8b644de04b3d8b94b4f824c5ddc872185bab1a138c"
	},
	{
		"id": "3a7e1de8e53f",
		"ts": "2026-08-10T18:51:57.092Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26702751.43,
		"hash": "3a7e1de8e53f3ac7e98d44ff3eccbd32396f1655836df51d0923f49f8cdd3509"
	},
	{
		"id": "53430aea6ce8",
		"ts": "2026-08-10T18:51:57.342Z",
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
		"liquidityUsd": 4340347.96,
		"hash": "53430aea6ce8c92c923247afea3070b37e0379d2f61116fd26a0c51dc55594d6"
	},
	{
		"id": "499cb3da2c50",
		"ts": "2026-08-10T18:51:57.568Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 65889.11,
		"hash": "499cb3da2c50452ad148cca9a607061f517284d714aa9cf945518fb18c27cd5d"
	},
	{
		"id": "69dc7ca2b564",
		"ts": "2026-08-10T18:51:57.795Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2181473.49,
		"hash": "69dc7ca2b564a8bfaab85c1732bd94ff541d6050d77073d9c855285d617edc72"
	},
	{
		"id": "a255c45cbf8c",
		"ts": "2026-08-10T18:51:58.014Z",
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
		"liquidityUsd": 266843.25,
		"hash": "a255c45cbf8c5512a6d43bb7984396f1eac3a3d04c4ae7ca2586cb46a729d539"
	},
	{
		"id": "e2ea4ab1cab8",
		"ts": "2026-08-10T18:51:58.228Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1005279.42,
		"hash": "e2ea4ab1cab8d23f22f70cc7e1ec1c6a9a5e3f5d51797edea68d2b0991b9a6f0"
	},
	{
		"id": "88e00d4678ca",
		"ts": "2026-08-10T18:51:58.464Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 264252.33,
		"hash": "88e00d4678ca52ff177c3e37317e68531e50503114194de86fd5b3d952d81bb1"
	},
	{
		"id": "c47608d9902a",
		"ts": "2026-08-10T18:51:58.676Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9394014.9,
		"hash": "c47608d9902afd187ff878e0fdd8335a01b2a91f63b721b20a528eaa4fa59ff3"
	},
	{
		"id": "13d1e0fa4c58",
		"ts": "2026-08-10T18:51:58.892Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4101163.96,
		"hash": "13d1e0fa4c583b8389a020647583dc983591dc038e9eb19d574ec9523fc79d84"
	},
	{
		"id": "d4cbe2dcb7e0",
		"ts": "2026-08-10T18:51:59.105Z",
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
		"liquidityUsd": 1230169.09,
		"hash": "d4cbe2dcb7e050182df4db0229f6cdedc9ecba37aa6d7912bf94ab08878f5cf3"
	},
	{
		"id": "3213a5187f18",
		"ts": "2026-08-10T17:48:36.446Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112792206.3,
		"hash": "3213a5187f18e17c2f110325c1ec62488c3be5f54738a6810b2915e737d28986"
	},
	{
		"id": "f61230d8ccfe",
		"ts": "2026-08-10T17:48:36.885Z",
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
		"liquidityUsd": 13710931.9,
		"hash": "f61230d8ccfe8d5f79d1a4e142d7e4454b5524943c0e3b3c9774f2d52521f073"
	},
	{
		"id": "7bcd7fe9c0ff",
		"ts": "2026-08-10T17:48:37.131Z",
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
		"liquidityUsd": 1027492.82,
		"hash": "7bcd7fe9c0ff391c48df9e7acaa60004af246265217f69fae384bedd80855921"
	},
	{
		"id": "d049c501c109",
		"ts": "2026-08-10T17:48:37.371Z",
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
		"liquidityUsd": 26703251.69,
		"hash": "d049c501c109b0c179c7e79fea190859d26128ca6005a116282ee8260a73286f"
	},
	{
		"id": "7f805125dce7",
		"ts": "2026-08-10T17:48:37.611Z",
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
		"liquidityUsd": 4313709.95,
		"hash": "7f805125dce79fa59f7e7c62cd50cd451888ddf46ace7cfb499350968fb7bbe4"
	},
	{
		"id": "a1b04b938b71",
		"ts": "2026-08-10T17:48:37.865Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 914421.18,
		"hash": "a1b04b938b71dc7bac269e6a90e3031fb815cc7cf2d377cab083b64b81b627e8"
	},
	{
		"id": "cb3b2ab9afd3",
		"ts": "2026-08-10T17:48:38.106Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26703251.69,
		"hash": "cb3b2ab9afd34a72823665b89943f2c57faf03dfb72755a07180e66e60e28d26"
	},
	{
		"id": "c7d85d299042",
		"ts": "2026-08-10T17:48:38.346Z",
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
		"liquidityUsd": 4345671.32,
		"hash": "c7d85d299042dd9be298d96aa866b3ec004bb948f337463c56b9bb1f5c3a260a"
	},
	{
		"id": "a3f444edd19f",
		"ts": "2026-08-10T17:48:38.607Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 66136.75,
		"hash": "a3f444edd19fce041ffb758226b16674f3e769a508796ed777e9d480dd01ffdf"
	},
	{
		"id": "2c16744cc7bf",
		"ts": "2026-08-10T17:48:38.845Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2119508.41,
		"hash": "2c16744cc7bf2901acb1b89238ade368fb0d6ff35a423cad4565a79a036bd291"
	},
	{
		"id": "838e0ca0c5b2",
		"ts": "2026-08-10T17:48:39.069Z",
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
		"liquidityUsd": 265214.48,
		"hash": "838e0ca0c5b27375b3618c50c6c31cae03adf50c9e6e31a231399e4e1486a0ec"
	},
	{
		"id": "11494264812b",
		"ts": "2026-08-10T17:48:39.300Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1003913.27,
		"hash": "11494264812bc8cd6504123a66531a631ab60a5bde5c09abf4f3ad1febba6ed6"
	},
	{
		"id": "093c45d9c2cb",
		"ts": "2026-08-10T17:48:39.554Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 245764.12,
		"hash": "093c45d9c2cb7371b80ed68e2662963a4830df25f2049f785993931da76d03f2"
	},
	{
		"id": "9a6bf6679d2c",
		"ts": "2026-08-10T17:48:39.775Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9425544.94,
		"hash": "9a6bf6679d2c9f854045726b589d9b20c8a24446f3713d9d980ef7e640b27f86"
	},
	{
		"id": "e862b85a9c8d",
		"ts": "2026-08-10T17:48:40.000Z",
		"symbol": "EURC",
		"token": "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2245981.24,
		"hash": "e862b85a9c8d05d994592dd153932a3e47af2943b0eb419273d472d541b41f07"
	},
	{
		"id": "9e717afa4208",
		"ts": "2026-08-10T17:48:40.231Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 70303.95,
		"hash": "9e717afa4208b858aa0ee9f2cf3585e602cc3d2c9343d5f557f71c14b61b7581"
	},
	{
		"id": "4b66c9088ae3",
		"ts": "2026-08-10T16:54:12.897Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112728103.93,
		"hash": "4b66c9088ae39d695d1d4d5af7d576f06de9c7447b6a4f2a3260a4871424eb4f"
	},
	{
		"id": "de15e1475328",
		"ts": "2026-08-10T16:54:13.330Z",
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
		"liquidityUsd": 15350717.54,
		"hash": "de15e1475328bbd70f6d5b558c5b64b101bd904d89b76c55b487820820659983"
	},
	{
		"id": "9911008f95a0",
		"ts": "2026-08-10T16:54:13.576Z",
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
		"liquidityUsd": 1030673.4,
		"hash": "9911008f95a08205199c0970394b3a451259d912d7b41a6a7f801e9b97864a84"
	},
	{
		"id": "2bb407343bf4",
		"ts": "2026-08-10T16:54:13.811Z",
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
		"liquidityUsd": 26702206.41,
		"hash": "2bb407343bf4362b0a94b99cb0cdf40a8fe2ed945525db0be20a254f252c53fa"
	},
	{
		"id": "a446f1f825f2",
		"ts": "2026-08-10T16:54:14.052Z",
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
		"liquidityUsd": 4304951.71,
		"hash": "a446f1f825f2108d10873643726e923e25dbc1acf969edc153e9370016804ab2"
	},
	{
		"id": "0b8288641fd3",
		"ts": "2026-08-10T16:54:14.295Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 920950.37,
		"hash": "0b8288641fd3c0569735189964db8156b14b9bd80db6f93b6ee5c15eaa762336"
	},
	{
		"id": "d4d05da546e6",
		"ts": "2026-08-10T16:54:14.532Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26702206.41,
		"hash": "d4d05da546e679341475b79a116aaafa57593faebaa427e55c993a3b4ec41f8e"
	},
	{
		"id": "cb50c56abcee",
		"ts": "2026-08-10T16:54:14.770Z",
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
		"liquidityUsd": 4476131.43,
		"hash": "cb50c56abcee4e9951bdea2ede2f0497ec581448f37f91b05d098a0a8fb2d227"
	},
	{
		"id": "318128b6d075",
		"ts": "2026-08-10T16:54:15.008Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 66311.72,
		"hash": "318128b6d0755a8ba400e398a9657b733b725a656334363af0cf33e6d3da08dc"
	},
	{
		"id": "daaeca2070f8",
		"ts": "2026-08-10T16:54:15.246Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2087644.47,
		"hash": "daaeca2070f88379512d0954ec7de08a0afcb027ccbce3e1e41693f8da53dce3"
	},
	{
		"id": "646fbc7fb218",
		"ts": "2026-08-10T16:54:15.472Z",
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
		"liquidityUsd": 265148.98,
		"hash": "646fbc7fb218faa9e7ee2259a265a757fbb9cca1bbbc65d67d9b61c175ec7a59"
	},
	{
		"id": "bdc9026e088b",
		"ts": "2026-08-10T16:54:15.693Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1005064.86,
		"hash": "bdc9026e088bf4f4ac951c649293b2a1d394e550521ddaf1a6c35ee07f8883fe"
	},
	{
		"id": "0aebb727cf99",
		"ts": "2026-08-10T16:54:15.915Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 229468.71,
		"hash": "0aebb727cf997ae706f36bdb31b9cc0333bed523fa0908c0abbb96dbb54e977c"
	},
	{
		"id": "56f295f851be",
		"ts": "2026-08-10T16:54:16.153Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9400266.94,
		"hash": "56f295f851be1eaba4a53e4a6afff942776a31196ec0a5335a1a9bc86a2936b2"
	},
	{
		"id": "4af3827489e7",
		"ts": "2026-08-10T16:54:16.378Z",
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
		"liquidityUsd": 1309350.29,
		"hash": "4af3827489e79cb8ccac330f6a6d5de38a52f371d4cfcb38881c56cce5423a37"
	},
	{
		"id": "157d84bfa831",
		"ts": "2026-08-10T16:54:16.598Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4117463.27,
		"hash": "157d84bfa8314d5f234621ce189e3879b9005ce7d89398e2a5595c35942249db"
	},
	{
		"id": "0d5c71d3478b",
		"ts": "2026-08-10T15:57:08.601Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112789926.14,
		"hash": "0d5c71d3478b51a8bfc87e6a0a81fa63fd37daa7df390bc3508ac69947b63067"
	},
	{
		"id": "0b30e241e9c6",
		"ts": "2026-08-10T15:57:09.026Z",
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
		"liquidityUsd": 13353555.81,
		"hash": "0b30e241e9c68b4ee5a474923dc8a59814df84de21b34c622dd44e7fee82594a"
	},
	{
		"id": "e038f30d677c",
		"ts": "2026-08-10T15:57:09.239Z",
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
		"liquidityUsd": 1031144.63,
		"hash": "e038f30d677ccafd45047a04836c9cf2f71da72d9c24453c6ab7ee9ea6f3787e"
	},
	{
		"id": "0c70bfcc4530",
		"ts": "2026-08-10T15:57:09.499Z",
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
		"liquidityUsd": 26691405.32,
		"hash": "0c70bfcc45301e68a96d8cbc40aa80ea6c8932f7a969cbc261fcf8193a2def03"
	},
	{
		"id": "c0bdbf51dada",
		"ts": "2026-08-10T15:57:09.748Z",
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
		"liquidityUsd": 4314631.43,
		"hash": "c0bdbf51dada5da28d0fa29eae6aca4bcfdfd0aa931cac6d43af06a34fac14b7"
	},
	{
		"id": "084c2163086a",
		"ts": "2026-08-10T15:57:09.946Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 936140.73,
		"hash": "084c2163086a55924d59f7f15f89455c973a49382099a341b0b6ad7f8a5cb801"
	},
	{
		"id": "88bb81d87c6e",
		"ts": "2026-08-10T15:57:10.225Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26691405.32,
		"hash": "88bb81d87c6eb414a9d877ffefed0be90320cc084ce333cec5e7412088ea7333"
	},
	{
		"id": "c5a9c98f5648",
		"ts": "2026-08-10T15:57:10.451Z",
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
		"liquidityUsd": 4824984.28,
		"hash": "c5a9c98f5648c09014ce23b14e7138d221a093fa70fdadee7673b4ec17d6a43c"
	},
	{
		"id": "6f783fd2e8e2",
		"ts": "2026-08-10T15:57:10.650Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 66180.64,
		"hash": "6f783fd2e8e2d7a54db077cbb4d24639449f4295a2dac3510b807a7044851113"
	},
	{
		"id": "ef2a749588b9",
		"ts": "2026-08-10T15:57:10.861Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2085205.6,
		"hash": "ef2a749588b973cf583f7291e26171e589d86d96adb9aa78e1c360c8ed0869f0"
	},
	{
		"id": "053f7fc26227",
		"ts": "2026-08-10T15:57:11.061Z",
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
		"liquidityUsd": 265098.48,
		"hash": "053f7fc26227cfa3eae1240b24e8d1a340abcba4a67034b37c4e6476d559396b"
	},
	{
		"id": "92a7432e3da2",
		"ts": "2026-08-10T15:57:11.274Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 998217.9,
		"hash": "92a7432e3da28a4694490527a60c2020a0fdf271c49b90499fccd595bea0feb6"
	},
	{
		"id": "084f50160e7b",
		"ts": "2026-08-10T15:57:11.472Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 234134.08,
		"hash": "084f50160e7b578b7f3e46805a123514157f9b58de7c61995fd9c071c1ec797a"
	},
	{
		"id": "10f0f24f473b",
		"ts": "2026-08-10T15:57:11.703Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9417433.64,
		"hash": "10f0f24f473b599767356cae65681a84b754eb419ebb19da057a6be4b7c47997"
	},
	{
		"id": "755e3c7a62bc",
		"ts": "2026-08-10T15:57:11.926Z",
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
		"liquidityUsd": 1306055.97,
		"hash": "755e3c7a62bcce3ba8a96bf1f377a56df5b1c124e1d2f7772940cdc46b3b574b"
	},
	{
		"id": "cc6dbaea3ee7",
		"ts": "2026-08-10T15:57:12.136Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4136657.72,
		"hash": "cc6dbaea3ee70dc987b35d6c14a61fc74999cd920d6731203ebba42a6a919dd6"
	},
	{
		"id": "4dddc2cdee24",
		"ts": "2026-08-10T14:21:44.619Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114599100,
		"hash": "4dddc2cdee24f7bbe625619e1657740ca5456f7f080035fb059fa59a441eaabf"
	},
	{
		"id": "252fd63d6245",
		"ts": "2026-08-10T14:21:44.852Z",
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
		"liquidityUsd": 14368834.9,
		"hash": "252fd63d624500839b19044e63e94826331556973bdc135e62b08bfb53fc727b"
	},
	{
		"id": "19d963c2f05e",
		"ts": "2026-08-10T14:21:45.395Z",
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
		"liquidityUsd": 1047930.17,
		"hash": "19d963c2f05e03d43b7adf12ce536355404f40d68f38c9eb9a058adb14ba081e"
	},
	{
		"id": "6541924b5b41",
		"ts": "2026-08-10T14:21:45.590Z",
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
		"liquidityUsd": 26857668.08,
		"hash": "6541924b5b419787d98c357822eed81c44dd694dc9d6425a05486c0e22585612"
	},
	{
		"id": "2018492e3bd2",
		"ts": "2026-08-10T14:21:46.094Z",
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
		"liquidityUsd": 4360829.77,
		"hash": "2018492e3bd26a6cc5e27aa223c8f4ebae637c4cee3dad0e8f688956a632f9c7"
	},
	{
		"id": "4dbf04246502",
		"ts": "2026-08-10T14:21:46.286Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 936148.76,
		"hash": "4dbf04246502ae3ff4022e6ad95659979d4abf1f1202fb0f12b21f0c39c0ac2d"
	},
	{
		"id": "37960f60864e",
		"ts": "2026-08-10T14:21:46.756Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26857668.08,
		"hash": "37960f60864ee6322eee7647b4f68083a04fc89d6115865e5d4dbfb3408c97ea"
	},
	{
		"id": "9111c45d7074",
		"ts": "2026-08-10T14:21:46.953Z",
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
		"liquidityUsd": 4883502.76,
		"hash": "9111c45d7074c589b024bae9a829140769da465cff501e30a0c456b9a8a2b772"
	},
	{
		"id": "36618495e023",
		"ts": "2026-08-10T14:21:47.326Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 67918.18,
		"hash": "36618495e0232f22da1f7361e5529075d4decae41beb296ab2b62092d4a76fee"
	},
	{
		"id": "edca9fb6dc5a",
		"ts": "2026-08-10T14:21:47.535Z",
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
		"liquidityUsd": 276091.67,
		"hash": "edca9fb6dc5a95cf283d46a7cea64cccd7e8dcc3924adc5ac3ed5092e600c702"
	},
	{
		"id": "ba37e3afcc93",
		"ts": "2026-08-10T14:21:48.150Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2067266.32,
		"hash": "ba37e3afcc93aa2d1df96dd95d683d961b1607a950066e36239b4f2b73b7af6f"
	},
	{
		"id": "e02320804c21",
		"ts": "2026-08-10T14:21:48.338Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 992037.57,
		"hash": "e02320804c21e0bf542481fd4d43afd8c147681b9e3bbef6e10a26663baf04ef"
	},
	{
		"id": "0782b2384d8f",
		"ts": "2026-08-10T14:21:48.604Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 207554.07,
		"hash": "0782b2384d8fb39315a37fd0f0a1d4b91a70a769a766dec67b496e26af4a3510"
	},
	{
		"id": "9f303b964ce8",
		"ts": "2026-08-10T14:21:48.796Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9538918.21,
		"hash": "9f303b964ce86eb8b566ad41e2a6996ede3367b9f581a16e11b0e41746c26496"
	},
	{
		"id": "08247728013e",
		"ts": "2026-08-10T14:21:49.220Z",
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
		"liquidityUsd": 1338348.19,
		"hash": "08247728013e766e99078ee6102ffb932a962c5fcd67f2e8e6bbc013607305c2"
	},
	{
		"id": "8d6165f56313",
		"ts": "2026-08-10T14:21:49.418Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4188200.94,
		"hash": "8d6165f56313f01a1e0f8f7e2118f4849478df68232d7dedadcb70d43754c9c5"
	},
	{
		"id": "01d360e8b2f0",
		"ts": "2026-08-10T12:58:34.723Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114965806.85,
		"hash": "01d360e8b2f05e65269adecaa0f5588c7d3ac5533c11f1e04bddfe5cbf0942a4"
	},
	{
		"id": "0b959ac1a7e3",
		"ts": "2026-08-10T12:58:35.036Z",
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
		"liquidityUsd": 14935586.2,
		"hash": "0b959ac1a7e3fe1fb0d5665be58b9be1d4e4bbb10039aa3d5f05b64c90bca6cf"
	},
	{
		"id": "76793a7646b5",
		"ts": "2026-08-10T12:58:35.241Z",
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
		"liquidityUsd": 1050115.04,
		"hash": "76793a7646b519e25e97f191104324f2e1ea4391305658226b9e7d667fd04033"
	},
	{
		"id": "c58d10a75fa9",
		"ts": "2026-08-10T12:58:35.422Z",
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
		"liquidityUsd": 27034896.03,
		"hash": "c58d10a75fa90cd123649e0316d7b73db161e22414ece022ab9d9f5670a0f78f"
	},
	{
		"id": "8bca719623b5",
		"ts": "2026-08-10T12:58:35.624Z",
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
		"liquidityUsd": 4395536.48,
		"hash": "8bca719623b5f4f5afa461f627736b097aac5c3105c69c9c10cdaadda8379daf"
	},
	{
		"id": "393b92c406fc",
		"ts": "2026-08-10T12:58:35.805Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 940295.54,
		"hash": "393b92c406fc8e81237b3780e94abacea6b31608dcfdd2b0faea52ec5f4c26fd"
	},
	{
		"id": "8b110c4a0df6",
		"ts": "2026-08-10T12:58:35.998Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27033583.7,
		"hash": "8b110c4a0df64f5092f9b3cce0b5f94fc0eb0a25450606e79b73930932016cbf"
	},
	{
		"id": "1c2a8d5601b0",
		"ts": "2026-08-10T12:58:36.179Z",
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
		"liquidityUsd": 4904390.64,
		"hash": "1c2a8d5601b0eac09de1d754bf8c90f579c0ff7b3708bb1e7ba064dbcaf621db"
	},
	{
		"id": "9b95dc07544c",
		"ts": "2026-08-10T12:58:36.382Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 69400.97,
		"hash": "9b95dc07544cfeeea648950574c965ff34ac6f08329fb0afca37ac7efce7c385"
	},
	{
		"id": "d844ed9a1f37",
		"ts": "2026-08-10T12:58:36.594Z",
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
		"liquidityUsd": 275677.77,
		"hash": "d844ed9a1f37bdee844e7b55ffd63487047b236a4c40e696d95ff82d590e20b9"
	},
	{
		"id": "980843a305d3",
		"ts": "2026-08-10T12:58:36.775Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2089227.12,
		"hash": "980843a305d320714b38ca0e3f61f2ad78537fa433aa720309366120692c8575"
	},
	{
		"id": "ae37fa58f8b8",
		"ts": "2026-08-10T12:58:36.959Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 996859.28,
		"hash": "ae37fa58f8b89ba2974164f70af2935a0f779c8213faf192345d5bb7f979a00b"
	},
	{
		"id": "265b0acb3073",
		"ts": "2026-08-10T12:58:37.157Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 391850.03,
		"hash": "265b0acb307391069ebd6472f7d3e9b42fd26fae139eabe90bcb5903d7aace46"
	},
	{
		"id": "6029e7cd286e",
		"ts": "2026-08-10T12:58:37.345Z",
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
		"liquidityUsd": 1344926.98,
		"hash": "6029e7cd286eb81a60f3936f44b4c6d84c3c4b01d8f1e83c5a45cf7d8f2d8baa"
	},
	{
		"id": "1411ae8841e0",
		"ts": "2026-08-10T12:58:37.540Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4216996.6,
		"hash": "1411ae8841e0811a54ff48e061704f277046c9789e33e87c6e3007ecf9d00fc4"
	},
	{
		"id": "decb804a0196",
		"ts": "2026-08-10T12:58:37.720Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9513552.7,
		"hash": "decb804a0196659c03c2f8b716792230f59f89b831ca178bad8b48e20499ab94"
	},
	{
		"id": "62a1ffd54832",
		"ts": "2026-08-10T12:58:37.938Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 70347.94,
		"hash": "62a1ffd54832365dd5bbe9839bc71a99205aae2aafcef01d20265b3c056b77d8"
	},
	{
		"id": "e69f5127662b",
		"ts": "2026-08-10T11:04:19.391Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115510697.73,
		"hash": "e69f5127662b402751b08a058c7a92709c0e0b538646eedcfd635c7710a8da8c"
	},
	{
		"id": "8578193e2d0c",
		"ts": "2026-08-10T11:04:19.727Z",
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
		"liquidityUsd": 17415682.08,
		"hash": "8578193e2d0c6f33fc136a7470c2f1f8d80396502ce7dab4324999599b6cef9f"
	},
	{
		"id": "0d8066526711",
		"ts": "2026-08-10T11:04:19.917Z",
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
		"liquidityUsd": 1053417.8,
		"hash": "0d806652671160f3efa988bc1004df2cb05a790836e30433d6bb229af65fe51c"
	},
	{
		"id": "3e2cf9db0598",
		"ts": "2026-08-10T11:04:20.106Z",
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
		"liquidityUsd": 26796900.78,
		"hash": "3e2cf9db05989254d0a57b8e6d0c2eb269a7eeac3d9d3b54ea72a5d561a44c47"
	},
	{
		"id": "e4ba32d8fac4",
		"ts": "2026-08-10T11:04:20.296Z",
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
		"liquidityUsd": 4394062.19,
		"hash": "e4ba32d8fac4c850ceba596c6ff79c15958076bc42d29941765066dc7fc3d1f3"
	},
	{
		"id": "93c619fca0a8",
		"ts": "2026-08-10T11:04:20.486Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 942044.93,
		"hash": "93c619fca0a85d09319a22175a10362c48b6e0bf7d943712a2d8d91efc78ed7d"
	},
	{
		"id": "c45cb46befc4",
		"ts": "2026-08-10T11:04:20.686Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26796900.78,
		"hash": "c45cb46befc4103c3e2a158956d8b65bab4bbd6ed5e540629b7852d56c008d2d"
	},
	{
		"id": "b0bde82a004f",
		"ts": "2026-08-10T11:04:20.894Z",
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
		"liquidityUsd": 4928466.52,
		"hash": "b0bde82a004f1f4739ebd1c33db6231c02ad691ee512ac8c7c694bf027d1cb3f"
	},
	{
		"id": "7e5c4a6eee13",
		"ts": "2026-08-10T11:04:21.083Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 70260.41,
		"hash": "7e5c4a6eee13808e801c5d4f09b69b55b30654ae52ab2bf4892f1b644d19ba12"
	},
	{
		"id": "909325820ed3",
		"ts": "2026-08-10T11:04:21.273Z",
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
		"liquidityUsd": 281306.25,
		"hash": "909325820ed3e4f2e12341d13adb1a3c5976ebab25b8c93dcbdb200ce6f6ba70"
	},
	{
		"id": "d6c8d67fa2b7",
		"ts": "2026-08-10T11:04:21.463Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2121714.02,
		"hash": "d6c8d67fa2b769a8bbda915a06198e483944796688397abd767b82edddb71b27"
	},
	{
		"id": "59d58d4a533e",
		"ts": "2026-08-10T11:04:21.655Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1002033.75,
		"hash": "59d58d4a533eea3876771003e5aa69dbfdc9fdc4a02452cc484c029b445887f4"
	},
	{
		"id": "409a8a6ecfe9",
		"ts": "2026-08-10T11:04:21.842Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 379591.03,
		"hash": "409a8a6ecfe96636c0e122ec95f91109969a022de1d4590c3180f2abc1ca6746"
	},
	{
		"id": "c7c0db8bce5b",
		"ts": "2026-08-10T11:04:22.041Z",
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
		"liquidityUsd": 1350394.12,
		"hash": "c7c0db8bce5b97f8c50bb6dd81f6ac86ec88d0a949be60e79ff2f9c7a2725da7"
	},
	{
		"id": "8c119b827107",
		"ts": "2026-08-10T11:04:22.231Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9606685.61,
		"hash": "8c119b8271079f3be03443bcc1a5b9b3dcf0279fcc69c09391fed2444dfd8215"
	},
	{
		"id": "8545cfcfa546",
		"ts": "2026-08-10T11:04:22.421Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4216012.77,
		"hash": "8545cfcfa5465d28e95824d0e1ad18f002400a01387aa41c25fd7c68f5f9b5ae"
	},
	{
		"id": "6d3c5b551421",
		"ts": "2026-08-10T11:04:22.610Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 71286.28,
		"hash": "6d3c5b551421d4a29824b8c50d8802046098bddd31873497487c3a6f613273b7"
	},
	{
		"id": "110ed325ad82",
		"ts": "2026-08-10T09:15:19.272Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115566839.51,
		"hash": "110ed325ad827058f676d10198099d9c02a7a3e374b3a1736de3b610bf1727c7"
	},
	{
		"id": "ebcb32e50c6c",
		"ts": "2026-08-10T09:15:19.721Z",
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
		"liquidityUsd": 17211272.81,
		"hash": "ebcb32e50c6cb1fe4f1c93b25a5d10c01cc5918fbc908865e57f2f5758306943"
	},
	{
		"id": "a82db116dceb",
		"ts": "2026-08-10T09:15:19.978Z",
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
		"liquidityUsd": 1058052.87,
		"hash": "a82db116dceb0f6df87671e90a8bfac47a1e9a9687143c3ca9130e46d36c33e0"
	},
	{
		"id": "e6572ffe43f6",
		"ts": "2026-08-10T09:15:20.219Z",
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
		"liquidityUsd": 26847984.43,
		"hash": "e6572ffe43f643e02ce0cd8e58e30830092aaf2ddfc7e8f88634ef867d75029a"
	},
	{
		"id": "846c00308e3e",
		"ts": "2026-08-10T09:15:20.461Z",
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
		"liquidityUsd": 4411355.95,
		"hash": "846c00308e3e769dba7997d7497bfbe848c92772e51ad6804c4595b9995d0909"
	},
	{
		"id": "108f90b9f338",
		"ts": "2026-08-10T09:15:20.699Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 944945.23,
		"hash": "108f90b9f3386092be15b234348fefd243dd470efe198d34fae4eef6447080d2"
	},
	{
		"id": "cb70507b59b2",
		"ts": "2026-08-10T09:15:20.942Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26847984.43,
		"hash": "cb70507b59b2d44312ec53ef295179569350bf00ce08f1f5586c4e2aa7d3bfa5"
	},
	{
		"id": "f0bf2b22f119",
		"ts": "2026-08-10T09:15:21.185Z",
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
		"liquidityUsd": 4949186.6,
		"hash": "f0bf2b22f119819c06d99e5fcc6ed407d6e1f1ea927d32dd5f9126f321046bc6"
	},
	{
		"id": "493b70404efc",
		"ts": "2026-08-10T09:15:21.437Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 69560.36,
		"hash": "493b70404efc90f25764a28b74bf3d7ca6043a3050d08b6993478b3bda89795c"
	},
	{
		"id": "b89b60088107",
		"ts": "2026-08-10T09:15:21.686Z",
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
		"liquidityUsd": 291124.6,
		"hash": "b89b60088107495ea564feda838042ffcb8a6f146f402fc89f6f24260cf03ace"
	},
	{
		"id": "d3ff1e04c6fe",
		"ts": "2026-08-10T09:15:21.910Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1008597.81,
		"hash": "d3ff1e04c6fef1b437219a1ed1bdf6b7d942968c4f95ca2311ff3d9f648f1df2"
	},
	{
		"id": "5fe875d6713a",
		"ts": "2026-08-10T09:15:22.135Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2064905.33,
		"hash": "5fe875d6713a6aa4f4b0b7cecfb94484859df9c9321bb7a1b828e31bcf10fc9c"
	},
	{
		"id": "a8b4470c8274",
		"ts": "2026-08-10T09:15:22.361Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 379223.91,
		"hash": "a8b4470c8274593af1ef7fccd15d2dfd3fc88cf699a0ea74d293efe0e24ac8f0"
	},
	{
		"id": "2e1753c68325",
		"ts": "2026-08-10T09:15:22.583Z",
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
		"liquidityUsd": 1367399.49,
		"hash": "2e1753c683258a68e7ec6e7f790aa4e63db3edb58e9e812fd221382d18f2a9a2"
	},
	{
		"id": "e8e8e5a0a056",
		"ts": "2026-08-10T09:15:22.805Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4234652.44,
		"hash": "e8e8e5a0a056eabab7759d6165f7d98b3e8a41986cd72c6a0c9cf95ff90f515c"
	},
	{
		"id": "1c54ec551f40",
		"ts": "2026-08-10T09:15:23.028Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 70933.1,
		"hash": "1c54ec551f409de483c152b58a6d70d4a50e35922057bf30c0f9a5263bb90930"
	},
	{
		"id": "a9e27601f817",
		"ts": "2026-08-10T09:15:23.249Z",
		"symbol": "PROMPT",
		"token": "0x30c7235866872213F68cb1F08c37Cb9eCCB93452",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 101373.33,
		"hash": "a9e27601f817c4740a7e2ae3328c72339b9a38bb626baaf49127a83e7099c52e"
	},
	{
		"id": "f465b559dd3e",
		"ts": "2026-08-10T07:24:08.740Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115449919.12,
		"hash": "f465b559dd3eb7d842566f517b628c9d41e45d0e783d78a465326d659b1869df"
	},
	{
		"id": "b2c60d694df0",
		"ts": "2026-08-10T07:24:08.938Z",
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
		"liquidityUsd": 16769555.79,
		"hash": "b2c60d694df0c0f4c5e69fbeadc49e3d8a4689df07cc79e921674d6e469b0d8e"
	},
	{
		"id": "fd636d9df17a",
		"ts": "2026-08-10T07:24:09.144Z",
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
		"liquidityUsd": 1063533.02,
		"hash": "fd636d9df17a8a62a6ef5c1ed97152459dd91107d2a677db86f3fd077ba3768e"
	},
	{
		"id": "9d1be334cd3c",
		"ts": "2026-08-10T07:24:09.359Z",
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
		"liquidityUsd": 26824700.98,
		"hash": "9d1be334cd3cdbcce2971675c9d9d019f22ee20b626473e752579a982d764e7c"
	},
	{
		"id": "6f5e8db78356",
		"ts": "2026-08-10T07:24:09.548Z",
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
		"liquidityUsd": 4410276.07,
		"hash": "6f5e8db783565d0faab7cb97186f91a345cf3084ada392b1d0fb873e5ae867ce"
	},
	{
		"id": "08948363abec",
		"ts": "2026-08-10T07:24:09.740Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 944945.23,
		"hash": "08948363abec261de563f3b2f8b9d4686c354846e2f3f3c2abdd6c8d1b4fee90"
	},
	{
		"id": "65da75e2928c",
		"ts": "2026-08-10T07:24:09.936Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26824700.98,
		"hash": "65da75e2928c7173a7784e38d5f0b8c48204072fcf25fc464f37413c34b8ce73"
	},
	{
		"id": "1d39f16e8ebe",
		"ts": "2026-08-10T07:24:10.148Z",
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
		"liquidityUsd": 4952602.67,
		"hash": "1d39f16e8ebe82ef419edcd00b90b3148639c3469e056fc7a61632d4e16bf56f"
	},
	{
		"id": "5bb80f1b68ea",
		"ts": "2026-08-10T07:24:10.334Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 70015.69,
		"hash": "5bb80f1b68eaa92afcb29757863307ad6f051d800478a2e14326b873d47f749b"
	},
	{
		"id": "10f23e542ba6",
		"ts": "2026-08-10T07:24:10.532Z",
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
		"liquidityUsd": 291379.01,
		"hash": "10f23e542ba63ce7c202010e78be0add0763bb9de8f7c5d701abba260a146939"
	},
	{
		"id": "a2491a6004dc",
		"ts": "2026-08-10T07:24:10.712Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1002848.95,
		"hash": "a2491a6004dc73a4d5048ecaed09ba40e211d8853e40ff1b6169fb2f86f39337"
	},
	{
		"id": "cb30ecad526c",
		"ts": "2026-08-10T07:24:10.896Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2102304.23,
		"hash": "cb30ecad526c81a2a9029311fcd1ad9522041c98fcb98186727e7c7784b8b88d"
	},
	{
		"id": "e26d03ae2591",
		"ts": "2026-08-10T07:24:11.096Z",
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
		"liquidityUsd": 1363785.42,
		"hash": "e26d03ae25919afce6c7bf3111f74f12721ccea9871f1b099e3e01e23d9775c0"
	},
	{
		"id": "58eb9e1f83d5",
		"ts": "2026-08-10T07:24:11.309Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 376336.98,
		"hash": "58eb9e1f83d50216f9cc291a131fbb75b286719adbbac0635a0c30031429e8ad"
	},
	{
		"id": "0779c8664446",
		"ts": "2026-08-10T07:24:11.514Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9611008.11,
		"hash": "0779c8664446efc813cf91af67ebd4464bfe3db8041531b0a3387b6ae552a578"
	},
	{
		"id": "f9687c64391a",
		"ts": "2026-08-10T07:24:11.786Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4231678.72,
		"hash": "f9687c64391a0b0e997f7f499ad433c5262d36cfa4ea2eb1e9338ae7060d5f23"
	},
	{
		"id": "6f09697785ea",
		"ts": "2026-08-10T07:24:12.004Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 71063.25,
		"hash": "6f09697785ea2b045525a1b111b1ec0c34c8f8d9dd3111f337c9e795aabb02e5"
	},
	{
		"id": "e15e08a2b11d",
		"ts": "2026-08-10T05:22:25.625Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115163066.91,
		"hash": "e15e08a2b11dc21376f79010a13c4a4fe4366078656604537371842bae9d31f7"
	},
	{
		"id": "cf6cbb080195",
		"ts": "2026-08-10T05:22:25.866Z",
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
		"liquidityUsd": 16615739.54,
		"hash": "cf6cbb080195398461687cdf254e843cc027e0449687f2f13741593ee00a66de"
	},
	{
		"id": "7380f1db3b13",
		"ts": "2026-08-10T05:22:26.113Z",
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
		"liquidityUsd": 1056181.88,
		"hash": "7380f1db3b13453d602fe19f07d1c5ae4685649028071bc07755525577af33b8"
	},
	{
		"id": "1dd8d8dd1316",
		"ts": "2026-08-10T05:22:26.343Z",
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
		"liquidityUsd": 26838075.08,
		"hash": "1dd8d8dd131614259a7b9f364a11087553dfd734b3e36747cf0abd0f758d391a"
	},
	{
		"id": "ae457afb70e4",
		"ts": "2026-08-10T05:22:26.579Z",
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
		"liquidityUsd": 4384895.1,
		"hash": "ae457afb70e496d781f0c0f401fd16828de3ef2982db8cda601be562e67c17a6"
	},
	{
		"id": "c2252a24366a",
		"ts": "2026-08-10T05:22:26.823Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 940103.29,
		"hash": "c2252a24366a14b73f98d4f3bdce27de98703928efb699ee78249af39953a083"
	},
	{
		"id": "722c501e0ae2",
		"ts": "2026-08-10T05:22:27.051Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26838159.73,
		"hash": "722c501e0ae2eea247cf11cc8ae875e9302dd22a7dc5a840a388a000d57c65ee"
	},
	{
		"id": "d5c82923ab44",
		"ts": "2026-08-10T05:22:27.289Z",
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
		"liquidityUsd": 4818470.91,
		"hash": "d5c82923ab44da4fb0de563048c37a3dd0d220d7f23a8e89bff707f1dbd4aeab"
	},
	{
		"id": "6dae4c7fd0a3",
		"ts": "2026-08-10T05:22:27.534Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 69599.48,
		"hash": "6dae4c7fd0a38a3585a353ffa7a5fbaeef499ad18716f792cbd2536e0d02438c"
	},
	{
		"id": "1141e107305c",
		"ts": "2026-08-10T05:22:27.769Z",
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
		"liquidityUsd": 291069.17,
		"hash": "1141e107305c6a770435d245be37022242a2d8cd73e5b2ff2be32d9de5f47167"
	},
	{
		"id": "27d04c4e1082",
		"ts": "2026-08-10T05:22:27.994Z",
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
		"liquidityUsd": 1368258.88,
		"hash": "27d04c4e1082a0da20d8592dac80b23e1fe84ee1e8dd5196276edf88b84c1b45"
	},
	{
		"id": "a8fa30ad31a5",
		"ts": "2026-08-10T05:22:28.221Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 998694.59,
		"hash": "a8fa30ad31a529642b64e3cd7a8a16ab2fa6dd816bed30a2665c801716af86f3"
	},
	{
		"id": "a1aa5f644907",
		"ts": "2026-08-10T05:22:28.436Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2105596,
		"hash": "a1aa5f644907235088afd9741cf7a54587f33a1b271c7a9986532d0fe5acde1d"
	},
	{
		"id": "9ef0e9325a7a",
		"ts": "2026-08-10T05:22:28.658Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 374174.39,
		"hash": "9ef0e9325a7ab5c2ef3034d9f8542e95602e89e381f0af1707cc5148955f2a91"
	},
	{
		"id": "df8e90d96432",
		"ts": "2026-08-10T05:22:28.884Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9494528.71,
		"hash": "df8e90d96432d4643223a9cf5b17ba031740f62fb8aa5f88b8e2c7318f15b685"
	},
	{
		"id": "14f95948c399",
		"ts": "2026-08-10T05:22:29.097Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4202867.24,
		"hash": "14f95948c399cc75649b32a42a0b6c38c1549311890d40fdae6223de3494a892"
	},
	{
		"id": "419a2ebd369f",
		"ts": "2026-08-10T05:22:29.318Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 71261.87,
		"hash": "419a2ebd369fc39ebafdcfff0d4df27988ceefebb7b6936cfc53f61bc160af53"
	},
	{
		"id": "33d6928536c0",
		"ts": "2026-08-10T03:50:23.369Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115068824.68,
		"hash": "33d6928536c012159b9b3d2f5af76efe37048bf85e9d3b937b07bd28267b392a"
	},
	{
		"id": "d6f11d5ab397",
		"ts": "2026-08-10T03:50:23.662Z",
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
		"liquidityUsd": 16513128.4,
		"hash": "d6f11d5ab39752c97d4a91b92ed2f81fd24d8abf582f54efe66b85f9c0a98d41"
	},
	{
		"id": "7a14e992b2b5",
		"ts": "2026-08-10T03:50:23.958Z",
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
		"liquidityUsd": 1056181.88,
		"hash": "7a14e992b2b5a0011317220064f999c2c9309be589240ebf717aaa1f1f224eb2"
	},
	{
		"id": "d2288c907bf3",
		"ts": "2026-08-10T03:50:24.209Z",
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
		"liquidityUsd": 26888499.76,
		"hash": "d2288c907bf35e9f7ef9e95dc29524df8eebc6e61f054280dd0214f02f1815b5"
	},
	{
		"id": "a72769eae1e3",
		"ts": "2026-08-10T03:50:24.463Z",
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
		"liquidityUsd": 4400127.54,
		"hash": "a72769eae1e3f3cd1dac8e0a8a398dcca7124d618d0a500a533e575857139f8c"
	},
	{
		"id": "52d77d56e0a9",
		"ts": "2026-08-10T03:50:24.709Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 940274.8,
		"hash": "52d77d56e0a9668fd0981c88d0462b9dca246a5c12f27c9537f10664e22c7972"
	},
	{
		"id": "7cde2eae73d0",
		"ts": "2026-08-10T03:50:24.958Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26888499.76,
		"hash": "7cde2eae73d00ad5b264fdd2416f3405c201a726c8a465c4755c2a183ab820a9"
	},
	{
		"id": "3734f791209d",
		"ts": "2026-08-10T03:50:25.198Z",
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
		"liquidityUsd": 4826060.18,
		"hash": "3734f791209d86ec17e0994850f0e1f40451f092bdb36ada8de621a9e8e8a04b"
	},
	{
		"id": "5c1d22f21431",
		"ts": "2026-08-10T03:50:25.444Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 72663.16,
		"hash": "5c1d22f214314ac76ad5df574dbc48a617e45be87c84159e1f4e721092762316"
	},
	{
		"id": "b15c60e122e4",
		"ts": "2026-08-10T03:50:25.703Z",
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
		"liquidityUsd": 290420.27,
		"hash": "b15c60e122e42bd3122333d64ab66a7bb3870aaba291b7e75682516bcd436a83"
	},
	{
		"id": "58a3ab8def7b",
		"ts": "2026-08-10T03:50:25.926Z",
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
		"liquidityUsd": 1336847.45,
		"hash": "58a3ab8def7b22442a11d2cc1792c86d68626eff2c860d148745b876f7cb50ac"
	},
	{
		"id": "50955e8a031e",
		"ts": "2026-08-10T03:50:26.156Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 990272.98,
		"hash": "50955e8a031e520eb989520a84f9b3c3de2b9c2457090b9e75c90f7e0ee66bfe"
	},
	{
		"id": "1bfedcfed1d1",
		"ts": "2026-08-10T03:50:26.396Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9472723.9,
		"hash": "1bfedcfed1d18082a66de0694d20802967da0badd3ab189bf7504741c3eec065"
	},
	{
		"id": "7a1939ddbecc",
		"ts": "2026-08-10T03:50:26.620Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 376472.09,
		"hash": "7a1939ddbecc1f1c96034089155eeb7a8b42da6e191ff1ff0037cfa46aebac46"
	},
	{
		"id": "de54e2a6c86a",
		"ts": "2026-08-10T03:50:26.859Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2087586.33,
		"hash": "de54e2a6c86a16f7f73638c187bc36cd302491e5154f7a825596e9f5f70a8cad"
	},
	{
		"id": "0a5d0cb837e3",
		"ts": "2026-08-10T03:50:27.081Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4210373.5,
		"hash": "0a5d0cb837e3bb1a518aca47a5a5ec57600dc2093454781109591903781bc11f"
	},
	{
		"id": "37a62815c17b",
		"ts": "2026-08-10T03:50:27.321Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 942739.62,
		"hash": "37a62815c17ba8dd52facfb6befa031bd95208d41db1168e8fde06247e87f18e"
	},
	{
		"id": "b4ca9b92b0c4",
		"ts": "2026-08-10T01:23:38.630Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114812671.92,
		"hash": "b4ca9b92b0c4d4ccefb4cd3b7312cb2323ff593349404009235288665ae951e3"
	},
	{
		"id": "47bd32e0fc96",
		"ts": "2026-08-10T01:23:38.875Z",
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
		"liquidityUsd": 16744740.58,
		"hash": "47bd32e0fc968d2c711a9a3e847955bbb6dbb112d330be65d5770cd8d6055127"
	}
]
