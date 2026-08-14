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
	"updatedAt": "2026-08-14T17:49:46.734Z",
	"tokensScored": 10095,
	"verdictsIssued": 10095,
	"safe": 8787,
	"risky": 749,
	"likelyRug": 559,
	"ticks": 608
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "f81d556e5d99",
		"ts": "2026-08-14T17:49:41.873Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111814175.08,
		"hash": "f81d556e5d992dfaccef5dcb8bc5ccb20186fe6b9b2cd7e52c0434e165f3c9bd"
	},
	{
		"id": "c38508e309e6",
		"ts": "2026-08-14T17:49:43.356Z",
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
		"liquidityUsd": 16302933.09,
		"hash": "c38508e309e69108f94d45f6295c66c5a9c354d58d45ebe73edb21c3fd0103bb"
	},
	{
		"id": "227afef307e9",
		"ts": "2026-08-14T17:49:43.590Z",
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
		"liquidityUsd": 814940.32,
		"hash": "227afef307e90f1a7a675ca668e89c8e2b5b0e31e3e40acbfb397b7bbd3d6e31"
	},
	{
		"id": "5814fb35f5ca",
		"ts": "2026-08-14T17:49:43.791Z",
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
		"liquidityUsd": 26545971.02,
		"hash": "5814fb35f5ca8e0194b1d1d8884702602fbb546a58627d80e3ccb2d20aa4f3bb"
	},
	{
		"id": "9e910c457582",
		"ts": "2026-08-14T17:49:44.138Z",
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
		"liquidityUsd": 4175249.93,
		"hash": "9e910c45758214af17c4b22208a847f1629789b1c5c0f45a5993329be1d7cc36"
	},
	{
		"id": "b0071f1c898c",
		"ts": "2026-08-14T17:49:44.340Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 886332.26,
		"hash": "b0071f1c898c1f6621c5bb98823b2948ad5637118b9e8673b40def4749a0f756"
	},
	{
		"id": "01b3ad75af41",
		"ts": "2026-08-14T17:49:44.544Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5679399.41,
		"hash": "01b3ad75af4183aed3c2742e7a69680bbaec60d5770ada708d2054acfbc4045a"
	},
	{
		"id": "5f1a9743bfb3",
		"ts": "2026-08-14T17:49:44.753Z",
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
		"liquidityUsd": 3676828.94,
		"hash": "5f1a9743bfb34a8c366775459b7953810aa727a700c95311e11c48632bde77d1"
	},
	{
		"id": "58001353fe2f",
		"ts": "2026-08-14T17:49:44.951Z",
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
		"liquidityUsd": 890251.66,
		"hash": "58001353fe2ffd3027436ab5bf21fd4c845225a354ae37ab1dddbbf4c9f63144"
	},
	{
		"id": "d135894070e6",
		"ts": "2026-08-14T17:49:45.297Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"has_blacklist",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 662271.01,
		"hash": "d135894070e61d5fad131774d7a456f2db923e36e975f7b324d2c79611caee5d"
	},
	{
		"id": "b49ace2dae9e",
		"ts": "2026-08-14T17:49:45.519Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5679399.41,
		"hash": "b49ace2dae9ebbc6186f8ec87788668bddc99f2ec6695476691c21895d45aaa8"
	},
	{
		"id": "91141c8f4262",
		"ts": "2026-08-14T17:49:45.733Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 262811.6,
		"hash": "91141c8f426201e641ba826443121e511a7180513aefd2886f5acbed946b7db9"
	},
	{
		"id": "b24c168a09a6",
		"ts": "2026-08-14T17:49:45.930Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1526547.48,
		"hash": "b24c168a09a6bd13b624d656e8b8e8bbd0fc8853446c2d794681deaff9055847"
	},
	{
		"id": "54e31efd241c",
		"ts": "2026-08-14T17:49:46.126Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2402591.79,
		"hash": "54e31efd241cf7ca179462168c200849ce7803a3876f5bea0a9436be00c60d16"
	},
	{
		"id": "3bb0818540ff",
		"ts": "2026-08-14T17:49:46.329Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 850651.02,
		"hash": "3bb0818540ff219f23bee8e76a333faa810ea0db1c7082462bdbc489eb121e42"
	},
	{
		"id": "90c0dbc8619f",
		"ts": "2026-08-14T17:49:46.524Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9511186.46,
		"hash": "90c0dbc8619f921548a214367cc404637d6608b32a9c2ff30d97867143b6339d"
	},
	{
		"id": "3825cec24adf",
		"ts": "2026-08-14T17:49:46.734Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1857063.85,
		"hash": "3825cec24adf2721ce3d91dd98584e57a6b791815627c475ea0297ce9c4e14be"
	},
	{
		"id": "296c778c71ec",
		"ts": "2026-08-14T16:48:40.648Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111715286.51,
		"hash": "296c778c71ecb4a399773f3358667912d832b46bb810ae4bb9ceecc78a5d5fd4"
	},
	{
		"id": "717bd4bc6de7",
		"ts": "2026-08-14T16:48:41.097Z",
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
		"liquidityUsd": 16854480.57,
		"hash": "717bd4bc6de7af20bcaf630bb8440cca427de87e55ffa2c93e5500a0269ec84a"
	},
	{
		"id": "562099fb8902",
		"ts": "2026-08-14T16:48:41.336Z",
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
		"liquidityUsd": 817645.36,
		"hash": "562099fb8902a003ea8f15996a8e0b73935426b508a35854da9e20d6d3f1ed58"
	},
	{
		"id": "1298067eaf1c",
		"ts": "2026-08-14T16:48:41.579Z",
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
		"liquidityUsd": 26634761.93,
		"hash": "1298067eaf1cda2e0d3f50ad940c364c69d89429159e209d73bdeb874649ee9b"
	},
	{
		"id": "791ca21b8383",
		"ts": "2026-08-14T16:48:41.814Z",
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
		"liquidityUsd": 4175290.18,
		"hash": "791ca21b838344670589b196efd7194a75725f0fbff4a16afda46571716f8783"
	},
	{
		"id": "621a74dff82d",
		"ts": "2026-08-14T16:48:42.052Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889156.03,
		"hash": "621a74dff82d322a57ff1fa2a33c567b642be3feea935e29e8974e2876187dbd"
	},
	{
		"id": "e54d59ff8ab4",
		"ts": "2026-08-14T16:48:42.299Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5687479.75,
		"hash": "e54d59ff8ab42d6fafc22fe7032c44f36c687b6847323921edc1325ef636995f"
	},
	{
		"id": "17a051141dd0",
		"ts": "2026-08-14T16:48:42.946Z",
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
		"liquidityUsd": 3680204.06,
		"hash": "17a051141dd0c548e0d898029c6be2b6131fbff00b941b5d8b749144fa4488f5"
	},
	{
		"id": "1ab414c22fc6",
		"ts": "2026-08-14T16:48:43.293Z",
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
		"liquidityUsd": 890014.05,
		"hash": "1ab414c22fc6c9e5d35d24223e55a11c59004b3dd0f62f5cba9f3c16b5200584"
	},
	{
		"id": "fe75c5cf769f",
		"ts": "2026-08-14T16:48:43.533Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"has_blacklist",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 645527.51,
		"hash": "fe75c5cf769f2641ef8b6cc281ff7f62a909aad0d900f44e83c2b3d8c0e9da48"
	},
	{
		"id": "cc0283af22db",
		"ts": "2026-08-14T16:48:43.753Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 260577.02,
		"hash": "cc0283af22db4f6aae53b91f103356b9078b40ee10d121a9154f3cc26ddb4de6"
	},
	{
		"id": "f35253b61148",
		"ts": "2026-08-14T16:48:43.972Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5684129.19,
		"hash": "f35253b61148fe79c219a464c345e6c2b24638345e2cd2ab47a907c488950205"
	},
	{
		"id": "6434e7eadc13",
		"ts": "2026-08-14T16:48:44.276Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1549654.7,
		"hash": "6434e7eadc1343643b53b27d012fc9a92a9c069d630209d9c9d946eb3b3e7ef2"
	},
	{
		"id": "9d3658933f36",
		"ts": "2026-08-14T16:48:44.496Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2373042.6,
		"hash": "9d3658933f36405a5deeb1cd3a91f189f3c81fbae6d19c346c1eb39e6ba80536"
	},
	{
		"id": "d0279202edc2",
		"ts": "2026-08-14T16:48:44.714Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 851520.32,
		"hash": "d0279202edc2bb0b9619fd886e77937c8e860941c17463257581db35d61dd506"
	},
	{
		"id": "8bd690c30214",
		"ts": "2026-08-14T16:48:44.935Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9542777.6,
		"hash": "8bd690c302146b62ad79268540d0cabc8b0d874e7a16a4b5d5521843ece162ee"
	},
	{
		"id": "65087f86ed4c",
		"ts": "2026-08-14T16:48:45.157Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 74895.49,
		"hash": "65087f86ed4c951c9bd0ad3d5337711b4d6e53e141c73b680e89ffb21c77c39b"
	},
	{
		"id": "4a87f7d60e10",
		"ts": "2026-08-14T15:47:00.844Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111560142.11,
		"hash": "4a87f7d60e10822391ff3ce6143b16cd6db2bdb253977b38eb2cb3f1edf8f7f2"
	},
	{
		"id": "51e3243d71d5",
		"ts": "2026-08-14T15:47:01.470Z",
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
		"liquidityUsd": 16184844.22,
		"hash": "51e3243d71d5a9d53b925bd5f9232b019d50aedf02f030b970497458bf7e20d8"
	},
	{
		"id": "6acefe3188b4",
		"ts": "2026-08-14T15:47:01.757Z",
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
		"liquidityUsd": 811502.37,
		"hash": "6acefe3188b4239158644a994be748053f0c4c069063e4a3382100d09d9b3ae0"
	},
	{
		"id": "049fcc0b0c7e",
		"ts": "2026-08-14T15:47:02.185Z",
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
		"liquidityUsd": 26577628.41,
		"hash": "049fcc0b0c7e68601c4c023ea3a5c179ad5a7c025ac4e9c9fe98697d8b555746"
	},
	{
		"id": "5f07688b0f02",
		"ts": "2026-08-14T15:47:02.418Z",
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
		"liquidityUsd": 4140181.89,
		"hash": "5f07688b0f026910b83a71c546548c33354c05b985aa82ea84179a564470002e"
	},
	{
		"id": "6073751a0cf0",
		"ts": "2026-08-14T15:47:02.696Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889156.03,
		"hash": "6073751a0cf0787684a876af5d42232f16e773c2617092d28a53a686924a8efc"
	},
	{
		"id": "280449597f63",
		"ts": "2026-08-14T15:47:02.927Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5604851.56,
		"hash": "280449597f63dd5e5eda06e765ee71f0911c70e51ac9c8aef8377991f9f3c7b2"
	},
	{
		"id": "5296b680f5ea",
		"ts": "2026-08-14T15:47:03.166Z",
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
		"liquidityUsd": 3676105.87,
		"hash": "5296b680f5ea83df062050eb2d715b35360c3f289d8cc2c9e8bf5015f276d081"
	},
	{
		"id": "7ec573a8ce12",
		"ts": "2026-08-14T15:47:03.536Z",
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
		"liquidityUsd": 897909.13,
		"hash": "7ec573a8ce12f46e3348e4b0fe77b1b56fefcf4c77ad56bfda8f548b83b61764"
	},
	{
		"id": "43add7332bec",
		"ts": "2026-08-14T15:47:03.784Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"has_blacklist",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 635315.06,
		"hash": "43add7332beca277a0bb366e09cc4a86d7ebabfdd6f278f3f3bf94758225212b"
	},
	{
		"id": "db186ad10c8c",
		"ts": "2026-08-14T15:47:03.998Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 261961.37,
		"hash": "db186ad10c8c4f59cba3f9e2fc1582c355c314de311076909e4d2bf13bbec6c1"
	},
	{
		"id": "4bdc5443a05d",
		"ts": "2026-08-14T15:47:04.212Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5604851.76,
		"hash": "4bdc5443a05df324a33462749dcb44c6a53c974c39580ac192c9065052c46610"
	},
	{
		"id": "e5a3035d2834",
		"ts": "2026-08-14T15:47:04.426Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2379713.28,
		"hash": "e5a3035d2834fff55c588523c782d08cec53adeddd45dec99c4d1b4ab30d1d79"
	},
	{
		"id": "6a3db4ae3455",
		"ts": "2026-08-14T15:47:04.672Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1539522.93,
		"hash": "6a3db4ae3455b0822d0027b2a79c586b5768f1ba04e353c970bcbe6bbc32c4d7"
	},
	{
		"id": "ab9741df6822",
		"ts": "2026-08-14T15:47:04.886Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 851259.11,
		"hash": "ab9741df6822b1823b6c35aa5693290f72925cb39656b9843a294ecdeff6a791"
	},
	{
		"id": "0f684c65937b",
		"ts": "2026-08-14T15:47:05.098Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9511572.24,
		"hash": "0f684c65937b1b84b2c10397823b335dfa72f0017d2adbd50e30eb55478454f4"
	},
	{
		"id": "3b6d66993a4d",
		"ts": "2026-08-14T15:47:05.311Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 83636.51,
		"hash": "3b6d66993a4dbc9104b7a913ebcb92aceea69169383c0fd206a00d465b5dce30"
	},
	{
		"id": "a5128094a131",
		"ts": "2026-08-14T14:15:14.632Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111286068.51,
		"hash": "a5128094a13153d01bfe344f1e9e9460f20ef2991e3d72f704d106ec5b52b253"
	},
	{
		"id": "0d81a2ed9b13",
		"ts": "2026-08-14T14:15:15.272Z",
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
		"liquidityUsd": 17725421.41,
		"hash": "0d81a2ed9b13951bd13561ed5fdd8288ef83bd32378491c8f8d1394ce6ac6e6f"
	},
	{
		"id": "b1a587c83070",
		"ts": "2026-08-14T14:15:15.701Z",
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
		"liquidityUsd": 813939.28,
		"hash": "b1a587c83070563441154ef0e8f780c9a8813b8091776eb2dc5c35e88f76bc14"
	},
	{
		"id": "06a0fa513b68",
		"ts": "2026-08-14T14:15:16.136Z",
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
		"liquidityUsd": 26506767.83,
		"hash": "06a0fa513b6851259d2e07569842cc67428df83ad76e7f6b2841d7b956a05980"
	},
	{
		"id": "db8df4b6976b",
		"ts": "2026-08-14T14:15:16.566Z",
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
		"liquidityUsd": 4142043.39,
		"hash": "db8df4b6976b840ea32bd0c76174d6c0b3a3966d37eedd1adadc945451f4ad9e"
	},
	{
		"id": "c0bfe701c14f",
		"ts": "2026-08-14T14:15:16.798Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 888496.77,
		"hash": "c0bfe701c14f2820face127cb0d65b5ef59f42272e171f2ea6685edba0753f91"
	},
	{
		"id": "3a679f364c27",
		"ts": "2026-08-14T14:15:17.029Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5480099.93,
		"hash": "3a679f364c27c4a8fe863430e731846bbb23aada2b97f0cef029455ed47d128c"
	},
	{
		"id": "6ef51017b9c4",
		"ts": "2026-08-14T14:15:17.264Z",
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
		"liquidityUsd": 3642402.14,
		"hash": "6ef51017b9c4154fc7258bf9f74d3b71f5a8f2fb43b03f76a20dfe5790d42c66"
	},
	{
		"id": "b210c817c534",
		"ts": "2026-08-14T14:15:17.496Z",
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
		"liquidityUsd": 889359.57,
		"hash": "b210c817c5349235b1eb5766b27f96d5fff29959c4d47b1ecfbd641814a74fde"
	},
	{
		"id": "f55b548d1035",
		"ts": "2026-08-14T14:15:17.928Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"has_blacklist",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 625554.82,
		"hash": "f55b548d1035685cc63f3ce9804651fb73972a9ea3f955c22992fe213477a844"
	},
	{
		"id": "63fa148d840e",
		"ts": "2026-08-14T14:15:18.147Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 260554.36,
		"hash": "63fa148d840e8b8a543d156ae870d25e39d37985b3d6dbdf7ec6ef3f40015134"
	},
	{
		"id": "737f8fc02198",
		"ts": "2026-08-14T14:15:18.364Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5477506.72,
		"hash": "737f8fc02198eeccf044744963897b57201c687e245cb120151ba7df746f8697"
	},
	{
		"id": "5419331ee13f",
		"ts": "2026-08-14T14:15:18.583Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2320007.42,
		"hash": "5419331ee13f20550d0a37476011b17652c4742243ae660316023fe8105f28e0"
	},
	{
		"id": "84948d03a755",
		"ts": "2026-08-14T14:15:18.799Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1525917.07,
		"hash": "84948d03a755d1229a04f17293c32b871972969141d0592e99580fb15cedd059"
	},
	{
		"id": "ebaeb267f657",
		"ts": "2026-08-14T14:15:19.017Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 717961.42,
		"hash": "ebaeb267f657abbf33a527fb49e62d590b1d198c60fbc57ee086ce4b686a46fd"
	},
	{
		"id": "dc0228286777",
		"ts": "2026-08-14T14:15:19.264Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 829066.32,
		"hash": "dc0228286777f4cfc6920702d1232f709daa770b30a8e0ea5c37583e2d873d66"
	},
	{
		"id": "0335d452df8a",
		"ts": "2026-08-14T14:15:19.540Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 91720.1,
		"hash": "0335d452df8adcb258be05b4e9a30953ccc996160a040dc10579c20f2777e4d1"
	},
	{
		"id": "4368a1cce7b2",
		"ts": "2026-08-14T12:56:37.367Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111419415.22,
		"hash": "4368a1cce7b225b92d907afb6c7e984fbff8e147990812589d553e46407da836"
	},
	{
		"id": "2de838763f04",
		"ts": "2026-08-14T12:56:37.712Z",
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
		"liquidityUsd": 16010462.68,
		"hash": "2de838763f04b54d30aa4fa2c087fe4ebabdb80ce390e8ea72dc6205c719b83d"
	},
	{
		"id": "1d53c1dbeea9",
		"ts": "2026-08-14T12:56:38.074Z",
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
		"liquidityUsd": 813939.28,
		"hash": "1d53c1dbeea97f9115cddf4c8b5b7305d80afdc94d00260e8306117f609215cf"
	},
	{
		"id": "d16295f9e746",
		"ts": "2026-08-14T12:56:38.271Z",
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
		"liquidityUsd": 26534832.7,
		"hash": "d16295f9e746344190304305eed2f4e8741af5a63dc147fa403af948aa847208"
	},
	{
		"id": "d3e7395f3d3e",
		"ts": "2026-08-14T12:56:38.471Z",
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
		"liquidityUsd": 4162146.71,
		"hash": "d3e7395f3d3e48e17145092e8624b9a49933a0be880b8692e63a3aed970bac57"
	},
	{
		"id": "d603dc7239d9",
		"ts": "2026-08-14T12:56:38.672Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 888496.77,
		"hash": "d603dc7239d9a8350902fa795ab279aea4e24eb9c84474420f44f4241e3af3f6"
	},
	{
		"id": "32830b8ddb3b",
		"ts": "2026-08-14T12:56:38.867Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6394405.66,
		"hash": "32830b8ddb3b3d0d78dad2ac3296dc784bc83712542d35080148dea3c1636853"
	},
	{
		"id": "00f0819e6934",
		"ts": "2026-08-14T12:56:39.066Z",
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
		"liquidityUsd": 3659332.34,
		"hash": "00f0819e693402c5cabc813af67ce9998901404df4ef84a2cc725ce1fd89c97a"
	},
	{
		"id": "3a5ea0f85880",
		"ts": "2026-08-14T12:56:39.272Z",
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
		"liquidityUsd": 884900.71,
		"hash": "3a5ea0f85880c56aa9c34009151c3d328e7dfd4a9e89f1facd0f8b2aae2f1789"
	},
	{
		"id": "7e641bfd718c",
		"ts": "2026-08-14T12:56:39.469Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"has_blacklist",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 617386.06,
		"hash": "7e641bfd718cc774d05d38e4c38e7ca1aa40d662de557169f601b3831837d6da"
	},
	{
		"id": "69af2553854f",
		"ts": "2026-08-14T12:56:39.657Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2296209.45,
		"hash": "69af2553854f1fb3f3b4cac2d8877dd72c1badd321404a197b26d137fc118701"
	},
	{
		"id": "a98292ab5d0f",
		"ts": "2026-08-14T12:56:39.842Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 260755.65,
		"hash": "a98292ab5d0f02c263051e71818c17161100c4909ffab8f7b4896885f9c72d7e"
	},
	{
		"id": "35e984248eb2",
		"ts": "2026-08-14T12:56:40.040Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6394405.3,
		"hash": "35e984248eb2cf075d8d9d3b2de48b8ed1063a5b345bf336ed918287d4bcd101"
	},
	{
		"id": "8fe9ad98e037",
		"ts": "2026-08-14T12:56:40.223Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1530378.07,
		"hash": "8fe9ad98e03709f9c7c501773dd481e41ad442612150a072b66fcd8a8f7f098d"
	},
	{
		"id": "7a50c294fba7",
		"ts": "2026-08-14T12:56:40.412Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 721078.77,
		"hash": "7a50c294fba7ae4fc5fff4a2ff1059b218a444bc3d2e6e6b3498f9c7dc5fa667"
	},
	{
		"id": "f254b75a5d49",
		"ts": "2026-08-14T12:56:40.596Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 831076.72,
		"hash": "f254b75a5d49c34ab1c8be284cc2ba61283aaea19659b0a156606eb77af73a53"
	},
	{
		"id": "3ef1766f1770",
		"ts": "2026-08-14T12:56:40.809Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9422318.29,
		"hash": "3ef1766f1770d895722504650d427b2e1db141bf78397ef1669f99557a3a4f9e"
	},
	{
		"id": "00ca7292603b",
		"ts": "2026-08-14T12:56:40.996Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4115653.24,
		"hash": "00ca7292603b114cdc2a9f7a0758b0040090a6b7d43c020de615b8ff0cc0038d"
	},
	{
		"id": "3eedd8fd46d2",
		"ts": "2026-08-14T11:42:50.773Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111383191.69,
		"hash": "3eedd8fd46d205b7e695e5c1a6473c3db15a55523ac3e0009d0134099b919aeb"
	},
	{
		"id": "827a3e6d966f",
		"ts": "2026-08-14T11:42:51.006Z",
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
		"liquidityUsd": 14330570.88,
		"hash": "827a3e6d966fee3775b1ef135166b70d11cabf5db68ed705eb4487b1645d198c"
	},
	{
		"id": "9b12902da988",
		"ts": "2026-08-14T11:42:51.242Z",
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
		"liquidityUsd": 813939.28,
		"hash": "9b12902da98829cba962675db9a88d7711bf538ff23a78f3135154b1d41648aa"
	},
	{
		"id": "ec0024d8eaa4",
		"ts": "2026-08-14T11:42:51.503Z",
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
		"liquidityUsd": 26584642.44,
		"hash": "ec0024d8eaa49da0a8d9ebae2e4b2a85839ee61ca840e977f03230b46108b286"
	},
	{
		"id": "d3da81d4887a",
		"ts": "2026-08-14T11:42:51.734Z",
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
		"liquidityUsd": 4179616.07,
		"hash": "d3da81d4887ac16ce78fa887e8faa558028b4627392a346a271b6790474781cf"
	},
	{
		"id": "315d3eeade84",
		"ts": "2026-08-14T11:42:51.992Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 888498.95,
		"hash": "315d3eeade84cfee46d629e923111d989a7c705770932655b302468fcf3c8901"
	},
	{
		"id": "eb489a4a3842",
		"ts": "2026-08-14T11:42:52.225Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6066820.2,
		"hash": "eb489a4a38422212127a43db83576853b69d9ede1bcdbada20422eef7f588548"
	},
	{
		"id": "d6f62f876ca7",
		"ts": "2026-08-14T11:42:52.474Z",
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
		"liquidityUsd": 3959425.16,
		"hash": "d6f62f876ca716ca9de87781d07ba31b0a157ee09f2d1844a1b2d0817816141d"
	},
	{
		"id": "42e00180c039",
		"ts": "2026-08-14T11:42:52.701Z",
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
		"liquidityUsd": 892163.86,
		"hash": "42e00180c0395a0a75dab63d01a58a8523c830e7330046ea3a92512bf6aa5929"
	},
	{
		"id": "a0dfea67b06e",
		"ts": "2026-08-14T11:42:52.937Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"has_blacklist",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 621826.89,
		"hash": "a0dfea67b06e094881e3ddb7272b930f8695940e159de5bac02e5c2306b7cb0c"
	},
	{
		"id": "da02a361a40f",
		"ts": "2026-08-14T11:42:53.165Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2308323.59,
		"hash": "da02a361a40faf85db9e50f5e86ca808fe739a1c0eb127daff4c8a468733f65f"
	},
	{
		"id": "d5da5a61bf88",
		"ts": "2026-08-14T11:42:53.376Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 257266.18,
		"hash": "d5da5a61bf8833fd9fabc19d2e1dc64e235401d2674940003045fe1d92671174"
	},
	{
		"id": "28159f7c6b96",
		"ts": "2026-08-14T11:42:53.597Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6066820.2,
		"hash": "28159f7c6b96c736f1e559670781abdd8f85e8ae8af4c2114fac9447cca7dd0b"
	},
	{
		"id": "862738784072",
		"ts": "2026-08-14T11:42:53.825Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1526634.11,
		"hash": "862738784072dd91bfb493445ce546f51326ba4a3fc582c0c87c56a2e4f0fc86"
	},
	{
		"id": "26907036fdfc",
		"ts": "2026-08-14T11:42:54.037Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 728192.5,
		"hash": "26907036fdfc47c38957c252a4fb063b2e03a073a50ef60992cbac737d03e3db"
	},
	{
		"id": "96e78b3d62d3",
		"ts": "2026-08-14T11:42:54.255Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9147746.84,
		"hash": "96e78b3d62d3cd5a7252cf2d6531de6278fdb0a5994e462af592bcf4e3069821"
	},
	{
		"id": "902bc725aa03",
		"ts": "2026-08-14T11:42:54.482Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4134247.87,
		"hash": "902bc725aa03e325b60df9c8580e03caee53e87cf39d045898f76964f35f3fba"
	},
	{
		"id": "53ab94411768",
		"ts": "2026-08-14T11:42:54.740Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 74860.55,
		"hash": "53ab9441176896b3301121310e0837f48bc95e4e55285f9a083d242c2fbbbc3c"
	},
	{
		"id": "ddcc03c42249",
		"ts": "2026-08-14T10:56:46.533Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111221207.38,
		"hash": "ddcc03c422496891305ea47d3e7f9a1066bd1ae4ecdc320283025df521da6a93"
	},
	{
		"id": "63104eded064",
		"ts": "2026-08-14T10:56:46.771Z",
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
		"liquidityUsd": 13455467.56,
		"hash": "63104eded0641005b269401c2e128afa2280742ec18c3fab2e89e439a4ad5602"
	},
	{
		"id": "6f7f316ee77c",
		"ts": "2026-08-14T10:56:47.216Z",
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
		"liquidityUsd": 813939.28,
		"hash": "6f7f316ee77c902f1550a9713e0175adb5e77da4a288e342dddcc099c3850a19"
	},
	{
		"id": "3d70f0ce2288",
		"ts": "2026-08-14T10:56:47.447Z",
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
		"liquidityUsd": 26585706.62,
		"hash": "3d70f0ce22885f32c2ea0fd39aac231d40f71e1ad5ed537b08803158fa74922e"
	},
	{
		"id": "736b91bbc870",
		"ts": "2026-08-14T10:56:47.696Z",
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
		"liquidityUsd": 4178824.67,
		"hash": "736b91bbc8700919541d9aea756c842e3d841ac3d5bc2df30a963b291bac52e3"
	},
	{
		"id": "3d1863178b10",
		"ts": "2026-08-14T10:56:47.927Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 890670.96,
		"hash": "3d1863178b102220c52cc372d01a05b4f708f97a94b1b64a7c994d3c2406e721"
	},
	{
		"id": "9e5a88d64db6",
		"ts": "2026-08-14T10:56:48.156Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5987061.33,
		"hash": "9e5a88d64db6e8f74f3aa12c574ad5f793bb45341b4ec6d826115c0ed356d3db"
	},
	{
		"id": "ca6d9f8cc738",
		"ts": "2026-08-14T10:56:48.396Z",
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
		"liquidityUsd": 3949922.86,
		"hash": "ca6d9f8cc7380b9c9e050eb0bebb8f241fadb10d633b6a76210c19e6d80c1f26"
	},
	{
		"id": "af3fb252644c",
		"ts": "2026-08-14T10:56:48.631Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"has_blacklist",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 620558.75,
		"hash": "af3fb252644c0393edfdbdac0f96aea6ff1ff0bbe775c0b558ac3791b4f4c2d8"
	},
	{
		"id": "735ef6b955b3",
		"ts": "2026-08-14T10:56:48.868Z",
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
		"liquidityUsd": 888606.85,
		"hash": "735ef6b955b36ae122a2840a7912cb52515c11856b28ac4f90a70654e708fe43"
	},
	{
		"id": "144a4d0658ad",
		"ts": "2026-08-14T10:56:49.084Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2303645.37,
		"hash": "144a4d0658adb116c18d5b07387f6ff0427df051f75c1c88fc57330cc9dd0b1c"
	},
	{
		"id": "f64c292ec42c",
		"ts": "2026-08-14T10:56:49.309Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 257880.05,
		"hash": "f64c292ec42c318b93e73954418b5c2fd81aa390ccc01d8dd2966d40c2feb7fe"
	},
	{
		"id": "82b139e86f3f",
		"ts": "2026-08-14T10:56:49.523Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1520863.71,
		"hash": "82b139e86f3fe97351b03050766d3da30cb53dffde67c4c98377860bb234f156"
	},
	{
		"id": "306500c3ed1e",
		"ts": "2026-08-14T10:56:49.748Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5987061.33,
		"hash": "306500c3ed1efd03bbfd86d12350acae340c5678a6c7e7c3bedd365c073ca785"
	},
	{
		"id": "f77f51f0dd60",
		"ts": "2026-08-14T10:56:49.963Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 726288,
		"hash": "f77f51f0dd607351cd3de64f101edb9ac8a264a61e1f5b9df2d076ccd18d75ec"
	},
	{
		"id": "b14ff3935f39",
		"ts": "2026-08-14T10:56:50.189Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9101776.64,
		"hash": "b14ff3935f392abf440130b38149bb6ea35c6c27da88d7a33ac53c7f5483a03e"
	},
	{
		"id": "6e71a39f5c1b",
		"ts": "2026-08-14T10:56:50.403Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 87766.89,
		"hash": "6e71a39f5c1bc6de5d350941a96ba70cf9d8d3f4ee430723dac3d2c19dfc5581"
	},
	{
		"id": "1d14b3f482a5",
		"ts": "2026-08-14T10:56:50.627Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 578995.13,
		"hash": "1d14b3f482a579993d024b88183e39a7a19dc459665988aea457442c71ac18c8"
	},
	{
		"id": "7c3e1e43b50e",
		"ts": "2026-08-14T09:56:25.730Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111327848.68,
		"hash": "7c3e1e43b50ea0cc6535a65309dc7262cf19dc3b52a366ba2be5f25188864161"
	},
	{
		"id": "a931e273dd10",
		"ts": "2026-08-14T09:56:26.057Z",
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
		"liquidityUsd": 16810416.19,
		"hash": "a931e273dd1000c876fdff09b785d61ba06949fd9e8e4f55239deffef1e077b2"
	},
	{
		"id": "f519ca696039",
		"ts": "2026-08-14T09:56:26.262Z",
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
		"liquidityUsd": 812015.55,
		"hash": "f519ca6960397a711f85258c20eefda4213775ae2e5ee72eede747b02706d867"
	},
	{
		"id": "4ecdedb0b078",
		"ts": "2026-08-14T09:56:26.462Z",
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
		"liquidityUsd": 26561920.29,
		"hash": "4ecdedb0b078daa836ba1ec0883189012df10713f8408924935d34c67de2061f"
	},
	{
		"id": "e596e9b6a1ba",
		"ts": "2026-08-14T09:56:26.663Z",
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
		"liquidityUsd": 4169751.6,
		"hash": "e596e9b6a1bad9817efc294225229cacc3f8ff365ffb825fc4c86af6f76e58ac"
	},
	{
		"id": "b2c10e1290fc",
		"ts": "2026-08-14T09:56:26.853Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 891885.07,
		"hash": "b2c10e1290fcfda61f62d55e6a62a8a59da744d1f8388fa4021fe11b01dfe1fc"
	},
	{
		"id": "bda2a57faf35",
		"ts": "2026-08-14T09:56:27.051Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5630262.34,
		"hash": "bda2a57faf35dcd7bf5dda8116d22080eb351aa98a1e09071a278454293cf301"
	},
	{
		"id": "18d67c821704",
		"ts": "2026-08-14T09:56:27.258Z",
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
		"liquidityUsd": 3955505.08,
		"hash": "18d67c82170415d51e6419ae0693d87a7e9a4725171704ba172f21a28b57d91e"
	},
	{
		"id": "bfeecd63b307",
		"ts": "2026-08-14T09:56:27.474Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"has_blacklist",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 619012.25,
		"hash": "bfeecd63b307eb55ed28a61980a27c79c2deaaf63ec5fa9c220d11b2fe94351e"
	},
	{
		"id": "9cdbdf7d9e3a",
		"ts": "2026-08-14T09:56:27.657Z",
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
		"liquidityUsd": 879381.2,
		"hash": "9cdbdf7d9e3abc902a2f97c7f6b3239dcb10de9924dc47c07a91490447755c25"
	},
	{
		"id": "f448216ed8f3",
		"ts": "2026-08-14T09:56:27.858Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2337469.66,
		"hash": "f448216ed8f349a0e85201fb87f9ed261c0b47571688c5f3c252e5e96e8f3e77"
	},
	{
		"id": "02d72b66715c",
		"ts": "2026-08-14T09:56:28.050Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 255984.31,
		"hash": "02d72b66715cc507a1708512db0b43e8a3804e58f7e244f459421cb62de9977d"
	},
	{
		"id": "0e2a7de577e3",
		"ts": "2026-08-14T09:56:28.276Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1515756.07,
		"hash": "0e2a7de577e390229ed763f604a1359034a190db2eda37123dad12e85ccca1d7"
	},
	{
		"id": "45f4e89a61f2",
		"ts": "2026-08-14T09:56:28.470Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5630262.34,
		"hash": "45f4e89a61f20433c31e43a25cc9f1d54a2e002fdd4d8df519c19404aec40455"
	},
	{
		"id": "956b4a98a05e",
		"ts": "2026-08-14T09:56:28.652Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 726288,
		"hash": "956b4a98a05e379f75da1d906718a9d03056a2a8db280f06918048f8cb534a61"
	},
	{
		"id": "c62a0ee6832e",
		"ts": "2026-08-14T09:56:28.862Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 89926.32,
		"hash": "c62a0ee6832e5a612792284783b08abcb9e1c0c7fa9ad77b4db747aa86b5b9e3"
	},
	{
		"id": "7ec406557e6a",
		"ts": "2026-08-14T09:56:29.043Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9076532.63,
		"hash": "7ec406557e6a9c0573fa5ece5744f3a46fbca69225414041692844061beb86ed"
	},
	{
		"id": "7a934df30875",
		"ts": "2026-08-14T09:56:29.259Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 577763.53,
		"hash": "7a934df3087530dfb443720e1eb9d5c3d76bcf69e672dc3cb8c0794add658e79"
	},
	{
		"id": "917841f6a339",
		"ts": "2026-08-14T08:12:01.464Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111467225.92,
		"hash": "917841f6a339dad9f99a63148506a28993839aac30b6e6dc336b6e5169dcbc80"
	},
	{
		"id": "1ffa22760498",
		"ts": "2026-08-14T08:12:01.760Z",
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
		"liquidityUsd": 16084563.66,
		"hash": "1ffa227604987f30a3328508bec830a05574e92762e6112d997c253ae791a008"
	},
	{
		"id": "eeb906ece59d",
		"ts": "2026-08-14T08:12:02.016Z",
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
		"liquidityUsd": 813070.37,
		"hash": "eeb906ece59dd29ea542d59b84db0e7ca7d46f3f254dd3edfba2e9367f0aac03"
	},
	{
		"id": "5314d9df912f",
		"ts": "2026-08-14T08:12:02.293Z",
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
		"liquidityUsd": 26690107.48,
		"hash": "5314d9df912f78a53635dd809d7065b489c3bd775ca41099c0d945c3febd2c4b"
	},
	{
		"id": "da9d83abd905",
		"ts": "2026-08-14T08:12:02.692Z",
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
		"liquidityUsd": 4192313.78,
		"hash": "da9d83abd905c9e733efd9b8b39011580ea32d6b4dec608571b9be3523df6be9"
	},
	{
		"id": "a40065bc4fcf",
		"ts": "2026-08-14T08:12:02.950Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 891885.07,
		"hash": "a40065bc4fcf8353d4ed339c5696ccd1ca883d3cd6729e8d135c4457333a03ac"
	},
	{
		"id": "021a2bf1ab21",
		"ts": "2026-08-14T08:12:03.277Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5829617.53,
		"hash": "021a2bf1ab212223b246e56171af4f93f943b90c5a235018c5fac9872c7e979e"
	},
	{
		"id": "a04754500716",
		"ts": "2026-08-14T08:12:03.488Z",
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
		"liquidityUsd": 3968905.92,
		"hash": "a04754500716b2ad0fcb7297e776834caf76afd222d9a027d6934e095faf5f7a"
	},
	{
		"id": "e16c24cc2d3c",
		"ts": "2026-08-14T08:12:03.702Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"has_blacklist",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 619680,
		"hash": "e16c24cc2d3cc70a592711b59b20862a2be4ed2c8bc72a8c0a606bc74038ee43"
	},
	{
		"id": "75bd78f5246b",
		"ts": "2026-08-14T08:12:03.932Z",
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
		"liquidityUsd": 877386.46,
		"hash": "75bd78f5246bd47da2ad07838ff6d983daa13f3fe5429dc5b707a994c5d1d7ff"
	},
	{
		"id": "4f856f669e4a",
		"ts": "2026-08-14T08:12:04.127Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2330791.49,
		"hash": "4f856f669e4ab8dd93ca23da483b00a4dfe6e7bdae702dffcb4c9da02879b77d"
	},
	{
		"id": "bd9feab7fe7a",
		"ts": "2026-08-14T08:12:04.366Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 254031.66,
		"hash": "bd9feab7fe7ae2392673de02d7212b22833a0c422cc56aa1603d551b80a6a295"
	},
	{
		"id": "f98260a5ea80",
		"ts": "2026-08-14T08:12:04.558Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1501791.29,
		"hash": "f98260a5ea80f179ea30c1f7eca301fb20d7f4c757485d3cb5cd8e3108a36be7"
	},
	{
		"id": "b8e1211a684d",
		"ts": "2026-08-14T08:12:04.745Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5784879.73,
		"hash": "b8e1211a684dd651ddd30476326802f0fdd1ca46e75ecf014bbaaba404bb653d"
	},
	{
		"id": "929b796b16cc",
		"ts": "2026-08-14T08:12:04.954Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 727835.69,
		"hash": "929b796b16cc2c9eb22fd6be720ec44472937ac14b14882d26d139b66c053557"
	},
	{
		"id": "e84218889cf4",
		"ts": "2026-08-14T08:12:05.143Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 88670.08,
		"hash": "e84218889cf41d32dd0e643b7434dd7c1ba570ee49d424e138a0958219416450"
	},
	{
		"id": "9f1c9ce2308d",
		"ts": "2026-08-14T08:12:05.335Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9068887.23,
		"hash": "9f1c9ce2308ddbf74641e33e5c80442c5f0e039bd4e753b22344531d3c688d24"
	},
	{
		"id": "d3d70d9a8b26",
		"ts": "2026-08-14T08:12:05.555Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 565661.64,
		"hash": "d3d70d9a8b26371884e6780f8f0f491ddc7dd735db1dba7b9f843cbe6ab26937"
	},
	{
		"id": "fbea008ede83",
		"ts": "2026-08-14T06:10:13.693Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111755728.56,
		"hash": "fbea008ede83a5569b20287f216392a9fedcb332a7d17379fe1ef50e27332bbe"
	},
	{
		"id": "6ab3bd46416d",
		"ts": "2026-08-14T06:10:14.077Z",
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
		"liquidityUsd": 17696819.83,
		"hash": "6ab3bd46416d9939275f20a72502c4f029f3f1640444595426c8e7c490eaec04"
	},
	{
		"id": "dca6afc12055",
		"ts": "2026-08-14T06:10:14.326Z",
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
		"liquidityUsd": 813038.64,
		"hash": "dca6afc12055e80f94c20bc26820370ea9d41ac3613c3de4854a5167a3ca9e6d"
	},
	{
		"id": "f1f40848319f",
		"ts": "2026-08-14T06:10:14.530Z",
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
		"liquidityUsd": 26808228.43,
		"hash": "f1f40848319fd9eea98dc6f38934c7880b76b2092bbc27a48ffd5ee18b6d788f"
	},
	{
		"id": "eb4ed019fec0",
		"ts": "2026-08-14T06:10:14.733Z",
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
		"liquidityUsd": 4220276.23,
		"hash": "eb4ed019fec0a3bdff0b0c7d91f6087aa6f5b885a13bfb9efe34787c050ad85d"
	},
	{
		"id": "76d2229bd67d",
		"ts": "2026-08-14T06:10:14.947Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 888062.26,
		"hash": "76d2229bd67d11ea3fe1f6e052311b5798bc9b5221203de2a001685de43e8e8b"
	},
	{
		"id": "625df9f32fad",
		"ts": "2026-08-14T06:10:15.153Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5272846.84,
		"hash": "625df9f32fadf9121e8752c8ee0995836c0d95b44a86ca5ff41316ddd4082889"
	},
	{
		"id": "20a624921d64",
		"ts": "2026-08-14T06:10:15.384Z",
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
		"liquidityUsd": 3961567.01,
		"hash": "20a624921d6466ffe784fe13fbfc5dde445bc4aed9a13fed8692690a7e747c1a"
	},
	{
		"id": "6cae59ac238b",
		"ts": "2026-08-14T06:10:15.592Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"has_blacklist",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 623570.09,
		"hash": "6cae59ac238bb8cd32bc5f275a98386c7bd04778f0d56372ad89c5b0be766205"
	},
	{
		"id": "5c61803c13a3",
		"ts": "2026-08-14T06:10:15.793Z",
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
		"liquidityUsd": 876884.63,
		"hash": "5c61803c13a334a8ee19e4e16ae2824ecc4f58cd8dafde8d1c1a8a0c3ae3fa4b"
	},
	{
		"id": "8dca8b0196d8",
		"ts": "2026-08-14T06:10:16.000Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2341544.67,
		"hash": "8dca8b0196d87597270001ffdb8bb86dd03dee79ea4d59d33e76c7246f70b0c2"
	},
	{
		"id": "832aefbd5983",
		"ts": "2026-08-14T06:10:16.203Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 253679.57,
		"hash": "832aefbd59830547632f8731e3fb3ea5ac2349cebf7ecbc23191316f4e5927ab"
	},
	{
		"id": "f15719f0fb6b",
		"ts": "2026-08-14T06:10:16.409Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1538137.25,
		"hash": "f15719f0fb6ba9e1ce8738f06b0dac6b431191f676ea0cea9dcf2aa7f8b67447"
	},
	{
		"id": "212592a3afe7",
		"ts": "2026-08-14T06:10:16.612Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 736052.81,
		"hash": "212592a3afe7635586a3ddfe84c6a151345fa91a973a544c7101c1390ae61cbf"
	},
	{
		"id": "ae3432896ee4",
		"ts": "2026-08-14T06:10:16.944Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5272844.57,
		"hash": "ae3432896ee48440b3ba2131fa3e1c48f646cc945ba07ccc3cab5425edb1c5b5"
	},
	{
		"id": "964adc9134a8",
		"ts": "2026-08-14T06:10:17.151Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 88213.78,
		"hash": "964adc9134a888f96d6c2c5cb0c4ec4bad575210622a1dc143e64c9f3570ec66"
	},
	{
		"id": "7fe4580eb4e6",
		"ts": "2026-08-14T06:10:17.360Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9225316.46,
		"hash": "7fe4580eb4e6feeab2b1c45804d6e41c2bb40d55ebdf88814001d324619a7472"
	},
	{
		"id": "943871a49972",
		"ts": "2026-08-14T04:04:16.087Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111761603.89,
		"hash": "943871a49972b3f9013c312862194227010f86b59d099e0cf4bed38a1cae3551"
	},
	{
		"id": "cab50ef2ee03",
		"ts": "2026-08-14T04:04:16.432Z",
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
		"liquidityUsd": 17561931.93,
		"hash": "cab50ef2ee03e26d3ddc0a40f2fcb2808f1a3efc197e009e8c82a57659a415fd"
	},
	{
		"id": "a4fe20654513",
		"ts": "2026-08-14T04:04:16.767Z",
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
		"liquidityUsd": 815462.7,
		"hash": "a4fe20654513a7b49a241c5b76ba9daadba5a6867e4039f3aab3969d192fb923"
	},
	{
		"id": "8c217b1f2cda",
		"ts": "2026-08-14T04:04:17.104Z",
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
		"liquidityUsd": 26857433.68,
		"hash": "8c217b1f2cdaa7c33df8aadadcaf4bfc72b04c172fff12e9042ba763b736bf35"
	},
	{
		"id": "ceb30fa6f777",
		"ts": "2026-08-14T04:04:17.447Z",
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
		"liquidityUsd": 4220276.23,
		"hash": "ceb30fa6f7770d7dcbb03033e45e36a447242ae8246b294a93aeed518f63ff15"
	},
	{
		"id": "0ed3ace2f1cc",
		"ts": "2026-08-14T04:04:17.643Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 893647.46,
		"hash": "0ed3ace2f1ccb7a32e133c83329c2c071e2a8d1c41be9afc6b664dfb11156320"
	},
	{
		"id": "e27b0015ab97",
		"ts": "2026-08-14T04:04:17.835Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4417515.95,
		"hash": "e27b0015ab9791e107bd6a71d23e600726adbbd2cc77092dd2cea075290fc69b"
	},
	{
		"id": "a86cf5f3d6ca",
		"ts": "2026-08-14T04:04:18.036Z",
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
		"liquidityUsd": 4010145.59,
		"hash": "a86cf5f3d6cad92c2b53818c81003726aa0b3fb911589931367ab4a7b4ce56f9"
	},
	{
		"id": "94091ba456ae",
		"ts": "2026-08-14T04:04:18.226Z",
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
		"liquidityUsd": 876578.74,
		"hash": "94091ba456aecb13b72f404fd2805ae0e04103d76e14761d3fb1c64414744cbd"
	},
	{
		"id": "151aafa658f0",
		"ts": "2026-08-14T04:04:18.551Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2309086.81,
		"hash": "151aafa658f0b880b022d29b2813f88c65daf935ff4ec61b524b52919783037a"
	},
	{
		"id": "4a0d19d81282",
		"ts": "2026-08-14T04:04:18.847Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 648008.07,
		"hash": "4a0d19d81282e389a5bc5c1d1b436cc440fbf9be1a48e4c6d80aae5ae954de0a"
	},
	{
		"id": "de787ecf1ee8",
		"ts": "2026-08-14T04:04:19.078Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 248101.44,
		"hash": "de787ecf1ee87dff89f4496775158468fd0bf72bfc4a1afcf0b943ae8f39782b"
	},
	{
		"id": "31b12e254299",
		"ts": "2026-08-14T04:04:19.300Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 736253.35,
		"hash": "31b12e254299f03e5588677826263b25a856938db228c13d39940cddffd3f321"
	},
	{
		"id": "39515e9d3d39",
		"ts": "2026-08-14T04:04:19.499Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1560336.85,
		"hash": "39515e9d3d394ab859573de01bfbfce75504b07a9ee706a240b4f781647eae81"
	},
	{
		"id": "48112b5435d9",
		"ts": "2026-08-14T04:04:19.676Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4417515.95,
		"hash": "48112b5435d9eeead648b08efd88bfcf300f49a61e856d52acad2a4f84517332"
	},
	{
		"id": "9188d6378824",
		"ts": "2026-08-14T04:04:19.891Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 87417.45,
		"hash": "9188d6378824e218b24ddf6365221f0bb677be689f5f5cd67cdc3f5c8b173daa"
	},
	{
		"id": "f5a83bee4d54",
		"ts": "2026-08-14T04:04:20.105Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 478606.1,
		"hash": "f5a83bee4d541851b091d29504ddc710ac21fe9d5fe6b0cfea2dec0501068b80"
	},
	{
		"id": "f9379f3d27d9",
		"ts": "2026-08-14T04:04:20.319Z",
		"symbol": "KellyClaude",
		"token": "0x50D2280441372486BeecdD328c1854743EBaCb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 765004.27,
		"hash": "f9379f3d27d919fc7f4976b27cf22317e462cbdc363d13f0879f250a0523a4d2"
	},
	{
		"id": "f0d32ea04b37",
		"ts": "2026-08-14T01:38:49.142Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111827650.59,
		"hash": "f0d32ea04b3793bdf6d19573fba2b97ad5d6c50354afb1194f68dc73ca853b4a"
	},
	{
		"id": "4a36d754393d",
		"ts": "2026-08-14T01:38:49.369Z",
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
		"liquidityUsd": 17609443.51,
		"hash": "4a36d754393d420d672226fe3edffe9e45c01502bbbf04979d0d34101863b7ae"
	},
	{
		"id": "6d47eb3f3cd3",
		"ts": "2026-08-14T01:38:49.596Z",
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
		"liquidityUsd": 815663.77,
		"hash": "6d47eb3f3cd30fcb9c27351a6f71c625986fa6df2dbf51022e78ff4921eff95c"
	},
	{
		"id": "c7845f4c7435",
		"ts": "2026-08-14T01:38:49.821Z",
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
		"liquidityUsd": 26874186.8,
		"hash": "c7845f4c7435111973a328ba57b526ddb790c2b7496bc44f8d2079a6b1f84ee4"
	},
	{
		"id": "1e36cdb96470",
		"ts": "2026-08-14T01:38:50.024Z",
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
		"liquidityUsd": 4241113.74,
		"hash": "1e36cdb96470cf64820d31baa6eedb1bdfffdd85dc61a4890748a73cae7645eb"
	},
	{
		"id": "ead1c35acece",
		"ts": "2026-08-14T01:38:50.242Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 897321.66,
		"hash": "ead1c35acece97c8c02bd36565eceba400eed4aa1289c38b8a4f6e8bfcec0ebb"
	},
	{
		"id": "7c9711617337",
		"ts": "2026-08-14T01:38:50.480Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4525160.71,
		"hash": "7c9711617337c3b8c1e0aa02495a7fd93757981f85d587737f8cc159cbf1ff57"
	}
]
