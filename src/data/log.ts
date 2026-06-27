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
	"updatedAt": "2026-06-27T20:59:21.739Z",
	"tokensScored": 320,
	"verdictsIssued": 320,
	"safe": 288,
	"risky": 32,
	"likelyRug": 0,
	"ticks": 34
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "a366e2921cfc",
		"ts": "2026-06-27T20:59:17.417Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93541578.81,
		"hash": "a366e2921cfc1c9c1ce64b06bbf2f33b319c6a998d054e0de5e3604ff52543e9"
	},
	{
		"id": "f46cc012aed5",
		"ts": "2026-06-27T20:59:17.677Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13149644.08,
		"hash": "f46cc012aed506ea1ddaee2d90e71dea7ec412a224133a3b35d0f71914e47e65"
	},
	{
		"id": "756baaee6946",
		"ts": "2026-06-27T20:59:17.933Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1340570.95,
		"hash": "756baaee69465836a47a57e65404acb2256f99f34211cd2dc4a2b2ea3473dd10"
	},
	{
		"id": "142fad8d605a",
		"ts": "2026-06-27T20:59:18.194Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 25092959.67,
		"hash": "142fad8d605ad27f7ca206ef5054b0abbcf0fc99448a9e1c351324603ebd92fb"
	},
	{
		"id": "fd3afab64539",
		"ts": "2026-06-27T20:59:18.450Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 4051383.3,
		"hash": "fd3afab645399c0ee7a870296a77b110e302a636822f01251f844d81f1c497fd"
	},
	{
		"id": "1d6c9e8834f7",
		"ts": "2026-06-27T20:59:18.705Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 918671.75,
		"hash": "1d6c9e8834f7a4a982f060b1d4e41168297123cd9b74e63d468b8d1f624070b1"
	},
	{
		"id": "992c3a0230ae",
		"ts": "2026-06-27T20:59:18.962Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25092959.67,
		"hash": "992c3a0230aed1cba4af76c4a15b10e0f0c71981d78571d0768ac4e312dfcfc8"
	},
	{
		"id": "dd089b38ce4a",
		"ts": "2026-06-27T20:59:19.220Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2025828.69,
		"hash": "dd089b38ce4a367b7ccc0db3943b2972541bc86659689734622efad38c3a4b19"
	},
	{
		"id": "da09db20e438",
		"ts": "2026-06-27T20:59:19.481Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 7746200.74,
		"hash": "da09db20e438605d7c5910ac67dd3bc0affef2f838a88c462a7651723565cae2"
	},
	{
		"id": "e5a29a9c0328",
		"ts": "2026-06-27T20:59:19.735Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 113892.01,
		"hash": "e5a29a9c03283af524ca58f11e8e94f34646928c546b1dbe8b48a4ad864e7e4d"
	},
	{
		"id": "c97a0aed705c",
		"ts": "2026-06-27T20:59:19.975Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 226585.03,
		"hash": "c97a0aed705c5f32330d318279d4589a1641f5f74bdd0793a77c2c2bd91b6385"
	},
	{
		"id": "168663f5a1be",
		"ts": "2026-06-27T20:59:20.218Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 213210.14,
		"hash": "168663f5a1be759dbf27b4f5011ee6563c005d361d1c4dd30a1c6917ee315b5d"
	},
	{
		"id": "d77f48f0a859",
		"ts": "2026-06-27T20:59:20.458Z",
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
		"liquidityUsd": 1724638.95,
		"hash": "d77f48f0a85965c355f7269d16d215ed0fd5227d8ca7469b44e30de69f52da76"
	},
	{
		"id": "10bfd0dea5c2",
		"ts": "2026-06-27T20:59:20.699Z",
		"symbol": "BLOOM",
		"token": "0xF53A3b2cf482494eEc4CA096af4b107A6c3b759B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 64595.72,
		"hash": "10bfd0dea5c2e411da68441cfd10cfb1fb566faadcc75af612f0847616760ca0"
	},
	{
		"id": "f7239745c456",
		"ts": "2026-06-27T20:59:20.944Z",
		"symbol": "VU",
		"token": "0x511ef9Ad5E645E533D15DF605B4628e3D0d0Ff53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 94957.02,
		"hash": "f7239745c45696464920aa33a1b12495954fe3c3a6fdb8f3afee12e9e5643f46"
	},
	{
		"id": "87cf674de7b3",
		"ts": "2026-06-27T20:59:21.256Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 280040.71,
		"hash": "87cf674de7b312619b09cce3bd508fc709e064a9156549ec0ef7422cd6beb9a0"
	},
	{
		"id": "a6fcbfb5050d",
		"ts": "2026-06-27T20:59:21.495Z",
		"symbol": "Sleuth",
		"token": "0x08512BC3570d2E9015a60866d1f6941A31576Ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 73009.41,
		"hash": "a6fcbfb5050d57deaae276198bc4bc74770a05bca5047b32a477971c25d865f5"
	},
	{
		"id": "ac1664bc06c2",
		"ts": "2026-06-27T20:59:21.739Z",
		"symbol": "RIZE",
		"token": "0x9818B6c09f5ECc843060927E8587c427C7C93583",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 63471.45,
		"hash": "ac1664bc06c2a4bc11d2540033cf7e0d3da287d0f28b5db8ec8baefc027cd28f"
	},
	{
		"id": "a8cf624bd7e7",
		"ts": "2026-06-27T19:39:25.285Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93527165.43,
		"hash": "a8cf624bd7e747428dc7b3fe3a0a32510423d22c35c9b6f76635fbd5b8074f2b"
	},
	{
		"id": "d6d2a54607ed",
		"ts": "2026-06-27T19:39:25.554Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12330397.29,
		"hash": "d6d2a54607ed889295d4db0b757350246d1840d05ed6be0dd26b2876a03fc175"
	},
	{
		"id": "39c5c80db41f",
		"ts": "2026-06-27T19:39:25.803Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1337099.27,
		"hash": "39c5c80db41f96e7ff1fd1b2f55463214224265024799a8d61af50b2623f20f9"
	},
	{
		"id": "33b32e3557de",
		"ts": "2026-06-27T19:39:26.068Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 25036954.64,
		"hash": "33b32e3557def214fa9a9d6562d1f53bc81c188eaf5e130353c2a61dc9d9581d"
	},
	{
		"id": "762bf99782a0",
		"ts": "2026-06-27T19:39:26.380Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 4072562.54,
		"hash": "762bf99782a065bd9c11f1486f520fdd3027d083117777f2a4fe3e9635955be6"
	},
	{
		"id": "8ad4eda07790",
		"ts": "2026-06-27T19:39:26.627Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 917532.68,
		"hash": "8ad4eda077904332a5a8db667692db21c7b492897746df3a82ea2d99dee356ee"
	},
	{
		"id": "b6777be6a582",
		"ts": "2026-06-27T19:39:26.906Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25036954.64,
		"hash": "b6777be6a582beb0b248accccc32d979544b3cad7dd7e87274b4d78d740107c0"
	},
	{
		"id": "4c9fab03495c",
		"ts": "2026-06-27T19:39:27.207Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2019226.83,
		"hash": "4c9fab03495c3818a7fb70aee1ba560bff9c56f58b51536ab8eba500b4d2b7ee"
	},
	{
		"id": "ed771ce8c301",
		"ts": "2026-06-27T19:39:27.453Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 7792544,
		"hash": "ed771ce8c3016ad79e1fd4ba9ebefbd8851e7c9e08f7250b62049b63be6c2486"
	},
	{
		"id": "d9440142b8d2",
		"ts": "2026-06-27T19:39:27.717Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 113531.35,
		"hash": "d9440142b8d2140080fbd8e1da7258ddbf08d6b040dd8e25d871d0fdcefbe58e"
	},
	{
		"id": "ff006cdf1693",
		"ts": "2026-06-27T19:39:27.948Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 228715.86,
		"hash": "ff006cdf169391f4de98f00fdcfdda63eeea0a15710316cc03ae33dc61602ff7"
	},
	{
		"id": "c637ab49ca1f",
		"ts": "2026-06-27T19:39:28.194Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 213214.43,
		"hash": "c637ab49ca1f9b6f598a5c74e2fcfe547130f754c1ee225eb95fc9ad28617dcd"
	},
	{
		"id": "3b557a9e9f5d",
		"ts": "2026-06-27T19:39:28.426Z",
		"symbol": "BLOOM",
		"token": "0xF53A3b2cf482494eEc4CA096af4b107A6c3b759B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 63834.67,
		"hash": "3b557a9e9f5d9887c97c6687f9e0d551953df9490a473e3e5552a97f42816911"
	},
	{
		"id": "744c4d85cc5e",
		"ts": "2026-06-27T19:39:28.676Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1743692.78,
		"hash": "744c4d85cc5e2e88b690df2c181e4611a7f305c47d62c9194e7ba7081d1f98ee"
	},
	{
		"id": "e841cfab6fe9",
		"ts": "2026-06-27T19:39:28.921Z",
		"symbol": "VU",
		"token": "0x511ef9Ad5E645E533D15DF605B4628e3D0d0Ff53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 96154.28,
		"hash": "e841cfab6fe9361bfb5ece0d8484007dec72830d9444004b18387a11fb8f96b8"
	},
	{
		"id": "4e8fd8902788",
		"ts": "2026-06-27T19:39:29.154Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 278884.66,
		"hash": "4e8fd8902788d41316487fc7a6257398b08101df27f6ed0cdf174eae94873526"
	},
	{
		"id": "2b127958042c",
		"ts": "2026-06-27T19:39:29.404Z",
		"symbol": "RIZE",
		"token": "0x9818B6c09f5ECc843060927E8587c427C7C93583",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 63942.01,
		"hash": "2b127958042c72d8dca5235e07b6981f5f121764b57c1b613233953fe96a431a"
	},
	{
		"id": "13792f5db3dc",
		"ts": "2026-06-27T19:39:29.649Z",
		"symbol": "Sleuth",
		"token": "0x08512BC3570d2E9015a60866d1f6941A31576Ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 70559.25,
		"hash": "13792f5db3dcb0537dae5e3c2f4edd02e3dff4593bd49f655c63d30d9c36f9c9"
	},
	{
		"id": "5e21baaa14e0",
		"ts": "2026-06-27T17:59:17.718Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 94053126.07,
		"hash": "5e21baaa14e0eb35990b5d270e25717bea9969fb637a8b0edbc64a05a5b24a5c"
	},
	{
		"id": "fc28fddecbf3",
		"ts": "2026-06-27T17:59:18.096Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12847157.47,
		"hash": "fc28fddecbf342efabb115f508d38752f0cca0c66c18e76923b2e92f5207fbd0"
	},
	{
		"id": "fa420c8d7ef4",
		"ts": "2026-06-27T17:59:18.498Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1362659.8,
		"hash": "fa420c8d7ef4e2abe769cf94e1d898de2ff7d0ba1784f5e9d8b31d142f474944"
	},
	{
		"id": "84f6643b560f",
		"ts": "2026-06-27T17:59:18.711Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 25149790.07,
		"hash": "84f6643b560f67418ab482ac1c435e2c93e399432ab3ada7c4cf8c7ccf09f66a"
	},
	{
		"id": "8f4ef8a351cc",
		"ts": "2026-06-27T17:59:18.946Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 4129414.9,
		"hash": "8f4ef8a351ccc2c42d546e70464a9e53807bd4dfd0708d5621484fe5485f4705"
	},
	{
		"id": "e8adf16a18f4",
		"ts": "2026-06-27T17:59:19.168Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 931410.31,
		"hash": "e8adf16a18f484e8635918db7f3fa938c940110fb15700dc73de54e42d55a24a"
	},
	{
		"id": "074a86250cec",
		"ts": "2026-06-27T17:59:19.390Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25149790.07,
		"hash": "074a86250cec1346cc250d4b232c2abe4e008e15138500d58b696367ea962d6e"
	},
	{
		"id": "45af6fb78329",
		"ts": "2026-06-27T17:59:19.615Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2043285.41,
		"hash": "45af6fb78329195339772778b9fdb9d264a211ea6c166b1331682f9118747652"
	},
	{
		"id": "50a93074366f",
		"ts": "2026-06-27T17:59:19.826Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 7657506.83,
		"hash": "50a93074366f45521c901643cf6e9c4a0c292407c96ac1e412ae039d31948af5"
	},
	{
		"id": "ba7e365f85a9",
		"ts": "2026-06-27T17:59:20.047Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 118237.44,
		"hash": "ba7e365f85a91c8c69aa66c02a792a98214b7328d088e3863d99258cce48b46b"
	},
	{
		"id": "d9138730492e",
		"ts": "2026-06-27T17:59:20.244Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 223455.38,
		"hash": "d9138730492e0756597013f4b0b6f40d3abd39a9ff59ea066bd4afbac7071248"
	},
	{
		"id": "6418b95f8061",
		"ts": "2026-06-27T17:59:20.447Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 213214.43,
		"hash": "6418b95f8061631a89535cc95f2bbcf5de9b96541500fd4d0299a06476e7fb1f"
	},
	{
		"id": "cba3e6ff10d8",
		"ts": "2026-06-27T17:59:20.673Z",
		"symbol": "BLOOM",
		"token": "0xF53A3b2cf482494eEc4CA096af4b107A6c3b759B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 63339.5,
		"hash": "cba3e6ff10d83e80ec74a9f723265bbf9134d46f56c70069eedeb95d483486d3"
	},
	{
		"id": "6071c1bd10b6",
		"ts": "2026-06-27T17:59:20.879Z",
		"symbol": "RIZE",
		"token": "0x9818B6c09f5ECc843060927E8587c427C7C93583",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 63344.18,
		"hash": "6071c1bd10b69841f254d3cb20651ba3113adada2956980624f3166746ba8662"
	},
	{
		"id": "5c0e31571f52",
		"ts": "2026-06-27T17:59:21.083Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1648405.79,
		"hash": "5c0e31571f52b77b54727091dde48728d9f78db34a09fe31685ed7d5c843c3eb"
	},
	{
		"id": "8377905665c9",
		"ts": "2026-06-27T17:59:21.278Z",
		"symbol": "VU",
		"token": "0x511ef9Ad5E645E533D15DF605B4628e3D0d0Ff53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 95453.35,
		"hash": "8377905665c9130b346a04c1329046c34a30cc59a841ccb510c9c6a1e335ac6a"
	},
	{
		"id": "118a2bcb110c",
		"ts": "2026-06-27T17:59:21.476Z",
		"symbol": "YAPPR",
		"token": "0x8C3E96713977E61C4180a5f0a6B02Fab86fb5bA3",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 60835.7,
		"hash": "118a2bcb110c556bd1beeed24ea3600586e489cd874cc9e80e34810b68b52ba1"
	},
	{
		"id": "bb32a28c7b6a",
		"ts": "2026-06-27T17:59:21.672Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 271601.24,
		"hash": "bb32a28c7b6a1a093bdca852732ba1bca52e00e4e730753c24f43c69e8d2fbad"
	},
	{
		"id": "ccac4601ecfa",
		"ts": "2026-06-27T16:02:23.899Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 94375396,
		"hash": "ccac4601ecfa97df35af95d52a91ee3e6b1105a7c1d88977bafa0c99812bd6c2"
	},
	{
		"id": "ed6503a41b7d",
		"ts": "2026-06-27T16:02:24.138Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13104134.09,
		"hash": "ed6503a41b7db2ea33a6d16704886ca2b7d05c87b69db0826850d11329a14fc4"
	},
	{
		"id": "ada60e99512a",
		"ts": "2026-06-27T16:02:25.065Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1374784.33,
		"hash": "ada60e99512ab5e1cb927f635d036432738497dc31aaa405d7f8ad10eaceb8ae"
	},
	{
		"id": "293f15557ef8",
		"ts": "2026-06-27T16:02:25.304Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 25354533.26,
		"hash": "293f15557ef8725258d6f504282ee1aff7cc7142856d465986833a8e00d2fc68"
	},
	{
		"id": "6db0c95cab84",
		"ts": "2026-06-27T16:02:25.538Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 4154314.66,
		"hash": "6db0c95cab84b28a934aa905f30a6e2b3eb3cf2bda3378b26710b736d36a9685"
	},
	{
		"id": "0a6947af097b",
		"ts": "2026-06-27T16:02:25.775Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 931248.89,
		"hash": "0a6947af097b6a1867c46657543effa1ec43afe74d4f6dea17ccd8f0c921ac8f"
	},
	{
		"id": "63c9a6d27eac",
		"ts": "2026-06-27T16:02:26.010Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25354533.26,
		"hash": "63c9a6d27eac6d8d2512f22f925ebd9c8b5ee6c5e1c1e12a61461d90bff1877e"
	},
	{
		"id": "26d536686132",
		"ts": "2026-06-27T16:02:26.865Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2208437.38,
		"hash": "26d5366861324e007036286c1d3e2ee8aa3a43a7da85b9a7a7cdf776df152979"
	},
	{
		"id": "f2650b8db494",
		"ts": "2026-06-27T16:02:27.101Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 8245025.9,
		"hash": "f2650b8db494d8e874ce9ec77b3472cdd14958356045c79596cc63d98200bd9d"
	},
	{
		"id": "2e6de5e2826b",
		"ts": "2026-06-27T16:02:27.333Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 120296,
		"hash": "2e6de5e2826badef635b53b716269b255582da9de2e76516463651cf7eb5ecfc"
	},
	{
		"id": "14cd0a422ab6",
		"ts": "2026-06-27T16:02:27.552Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 213214.43,
		"hash": "14cd0a422ab6beb18486d5bf5e9112a1ce7ad3bdc9e977f37a7fa74a40e78a05"
	},
	{
		"id": "a949029ac99e",
		"ts": "2026-06-27T16:02:27.802Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 228138.5,
		"hash": "a949029ac99ecedd19a66bcdccd5d24872d7369337f6007b329c5a343746ef30"
	},
	{
		"id": "ac1bb6b11767",
		"ts": "2026-06-27T16:02:28.848Z",
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
		"liquidityUsd": 1655543.6,
		"hash": "ac1bb6b117678c343c2ac9f732f96f5d64cd74a260eb63f721fa2f2b03fc45db"
	},
	{
		"id": "c70c2aa39ef7",
		"ts": "2026-06-27T16:02:29.065Z",
		"symbol": "BLOOM",
		"token": "0xF53A3b2cf482494eEc4CA096af4b107A6c3b759B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 60278.6,
		"hash": "c70c2aa39ef7456d840c63a598c967a4f53be7f09e12cfb3e457a8d9607cc388"
	},
	{
		"id": "19215ec07c8c",
		"ts": "2026-06-27T16:02:29.283Z",
		"symbol": "VU",
		"token": "0x511ef9Ad5E645E533D15DF605B4628e3D0d0Ff53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 96876.34,
		"hash": "19215ec07c8cf74d974f3bd8476307eb22bff8c4d328fcbbf8516b8967540753"
	},
	{
		"id": "39a2f43adeee",
		"ts": "2026-06-27T16:02:29.502Z",
		"symbol": "YAPPR",
		"token": "0x8C3E96713977E61C4180a5f0a6B02Fab86fb5bA3",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 59953.3,
		"hash": "39a2f43adeee9e3c3f1dd893dd6f4045b6f9a1b17f1be9b0c5a15b0dbf6a7e8c"
	},
	{
		"id": "2c316025c75f",
		"ts": "2026-06-27T16:02:29.722Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 275382.72,
		"hash": "2c316025c75f541fcdf04a27bdfa62139b5cb50505ec8e27e58d6c5b0eb41f41"
	},
	{
		"id": "0b0c1c74908c",
		"ts": "2026-06-27T14:26:55.315Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93949310.9,
		"hash": "0b0c1c74908c8034320ede67e417f0c956bee7a6a794bd3ca4bde49b145b82ed"
	},
	{
		"id": "94db63147316",
		"ts": "2026-06-27T14:26:55.559Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12979176.74,
		"hash": "94db6314731638579a1037ec4ab7dfe6ce55fe4de04e62c493fcc111a7c4dfaa"
	},
	{
		"id": "70a905e928ec",
		"ts": "2026-06-27T14:26:56.196Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1368201.84,
		"hash": "70a905e928ec1a0ddb1fe13e0118d06c85f53e3012e67ff95f413801550dafad"
	},
	{
		"id": "cb5457f2b274",
		"ts": "2026-06-27T14:26:56.437Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 25183415.7,
		"hash": "cb5457f2b274b0fd5b69ef967e75b448fe5ee2a3042f7e28e092d6716d17a5a4"
	},
	{
		"id": "a177db3903ea",
		"ts": "2026-06-27T14:26:56.678Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 4100156.82,
		"hash": "a177db3903ea97bffabecfe8c8b17bbeda3df920796fd6532585abac6500a873"
	},
	{
		"id": "752cb7c38da1",
		"ts": "2026-06-27T14:26:56.915Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 931108.67,
		"hash": "752cb7c38da19ddd261b927219edfb05b72d8e5ddf0fe1807260d4da6df05ea8"
	},
	{
		"id": "89b4dc3ea6e0",
		"ts": "2026-06-27T14:26:57.148Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25183415.7,
		"hash": "89b4dc3ea6e0463c3803b55b161ceb14f768b3997b4ebafab7ac314cec7de0de"
	},
	{
		"id": "ce8d17f41958",
		"ts": "2026-06-27T14:26:57.429Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2042349.32,
		"hash": "ce8d17f419589937d937015ac7628e2e28982b297beced351d88e0bcfed94f5c"
	},
	{
		"id": "ee35a2e03eb4",
		"ts": "2026-06-27T14:26:57.662Z",
		"symbol": "Claude",
		"token": "0x30EC37E22FF8865e2E439d84E7d2ffD58296DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 489284.45,
		"hash": "ee35a2e03eb42bd78255cc342d5cf6fb153991b3fa4605d3c3c2377dc4597acf"
	},
	{
		"id": "0f05a26b304e",
		"ts": "2026-06-27T14:26:57.911Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 7915930.17,
		"hash": "0f05a26b304e95977e08517debe9559b0287649f9ad51609b645b71332a1af8e"
	},
	{
		"id": "c94ada00df5b",
		"ts": "2026-06-27T14:26:58.131Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 121815.08,
		"hash": "c94ada00df5b36de48e856d438eef326432eefd8137c1277601cdf3ce75f4216"
	},
	{
		"id": "dcda7f6e8336",
		"ts": "2026-06-27T14:26:58.351Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 213287.96,
		"hash": "dcda7f6e83362375a736a9c1e56195703e090d145cc07d5c43d198668d7024cc"
	},
	{
		"id": "3c583c5b7d02",
		"ts": "2026-06-27T14:26:58.573Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 524114.93,
		"hash": "3c583c5b7d02302fa30c1ed0df41a4e10a465340378606d0307f067d27e7fd34"
	},
	{
		"id": "d35e0942cea2",
		"ts": "2026-06-27T14:26:58.793Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1630885.8,
		"hash": "d35e0942cea2d6fcb66213157ac7c1680c341abc5c3f33fca7affe356324a9a7"
	},
	{
		"id": "05b9a59e76b1",
		"ts": "2026-06-27T14:26:59.012Z",
		"symbol": "YAPPR",
		"token": "0x8C3E96713977E61C4180a5f0a6B02Fab86fb5bA3",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 65167.03,
		"hash": "05b9a59e76b1806da6568b2668c476943d8071168f368e3a74be196809620af2"
	},
	{
		"id": "35e5a222f990",
		"ts": "2026-06-27T14:26:59.231Z",
		"symbol": "VU",
		"token": "0x511ef9Ad5E645E533D15DF605B4628e3D0d0Ff53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 95813.02,
		"hash": "35e5a222f990e9c7a43708c1b4439a4043ab2ab5a9aaa62f8b3042d11ac1bfcf"
	},
	{
		"id": "ae395d42623e",
		"ts": "2026-06-27T14:26:59.449Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1310672.06,
		"hash": "ae395d42623e129fe19408530213056137329cd2c6370fb5f8f2ce6cf38edcac"
	},
	{
		"id": "9229792cf0d7",
		"ts": "2026-06-27T12:07:15.812Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93561704.49,
		"hash": "9229792cf0d71207605300ba194d885dc72abdcc875299b45068774014816c93"
	},
	{
		"id": "1c9c7b88f118",
		"ts": "2026-06-27T12:07:16.258Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13013710.31,
		"hash": "1c9c7b88f118e69b463a773a91bde76238e24f54e1d3607154da02e4bab0b1c2"
	},
	{
		"id": "550f245a74ce",
		"ts": "2026-06-27T12:07:16.525Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1357279.52,
		"hash": "550f245a74ce0004156fe48dcdb0435ae5e367c639318307c9d445742cd1364c"
	},
	{
		"id": "4edaa698a681",
		"ts": "2026-06-27T12:07:16.782Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24855685.9,
		"hash": "4edaa698a6817b0ccfb060f4455379c134b13e5928940411fc77ec7e69990287"
	},
	{
		"id": "c701eaa234d0",
		"ts": "2026-06-27T12:07:17.025Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3828267.16,
		"hash": "c701eaa234d0af5af08e309a21feb1430dcafb5d0a08cc5bbc99e93c6f0a3721"
	},
	{
		"id": "e05c4f0f0c10",
		"ts": "2026-06-27T12:07:17.268Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 922344.44,
		"hash": "e05c4f0f0c10a2b4fabe88da14f19988b8242fe7ada0379a82b6d79998cd4965"
	},
	{
		"id": "4e163ef34030",
		"ts": "2026-06-27T12:07:17.511Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24855685.9,
		"hash": "4e163ef3403096d6b2b273f16d70b08c7af8cb933863fce603ef0c5da200d53d"
	},
	{
		"id": "55d7a6ac1c18",
		"ts": "2026-06-27T12:07:17.754Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2029642.97,
		"hash": "55d7a6ac1c1887a29da9653c56ba104cadcbe25cfffd72a30f76cf33ff0aeaea"
	},
	{
		"id": "7b368767cde8",
		"ts": "2026-06-27T10:03:49.520Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93545281.97,
		"hash": "7b368767cde8dd463183a2c943b0f4ae59c6254c00188066fadcbe5b5b19dc20"
	},
	{
		"id": "a792366b9084",
		"ts": "2026-06-27T10:03:49.866Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12747895,
		"hash": "a792366b90846d142761368c2a03d264f7047d3b785e4e0c697caa9d029a6ea5"
	},
	{
		"id": "e3f1fdec8658",
		"ts": "2026-06-27T10:03:50.056Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1358721.25,
		"hash": "e3f1fdec8658948570af340145e82353bdd62304aca3f4f13e41d2ad1606c42a"
	},
	{
		"id": "3dc2b3a7ffac",
		"ts": "2026-06-27T10:03:50.242Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24687974.52,
		"hash": "3dc2b3a7ffacd65a7440d928bb8a98bae36fc1bc696794c070d2890393a3a81a"
	},
	{
		"id": "667f53b84095",
		"ts": "2026-06-27T10:03:50.427Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3822413.28,
		"hash": "667f53b84095e8309aa2cefde9e1f564c0de05cf73257775c873cce9fc9b74c6"
	},
	{
		"id": "d2f50d63f9bf",
		"ts": "2026-06-27T10:03:50.617Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 928597.92,
		"hash": "d2f50d63f9bfb4d2436b0e5c174dfc0707656330076816cd27b1aa3cb8a0758e"
	},
	{
		"id": "12f56ed35289",
		"ts": "2026-06-27T10:03:50.804Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24687974.52,
		"hash": "12f56ed352894c5eb8ba34b29e78f2587ec11148d44572a807b47b1efe38bb4e"
	},
	{
		"id": "d2de2ad395fa",
		"ts": "2026-06-27T10:03:51.011Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2028858.84,
		"hash": "d2de2ad395fa0595ae85d2bfacb14286f56c462052a9f7beeb50e1dbe0418c72"
	},
	{
		"id": "fe67bef5f884",
		"ts": "2026-06-27T07:46:50.595Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93320149.64,
		"hash": "fe67bef5f884cecee893d9dd667f31b1db0ca9870f344e53c5117718a8637e9d"
	},
	{
		"id": "e99ce8776f1f",
		"ts": "2026-06-27T07:46:50.838Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12663267.87,
		"hash": "e99ce8776f1f9a2462efc6c52c46b77be636ff941133fe9fd4c3a99db839fb33"
	},
	{
		"id": "d04afd423880",
		"ts": "2026-06-27T07:46:51.077Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1391702.46,
		"hash": "d04afd42388034afc0c279fe8834b4e2f20e024031114eef890451db84afd77f"
	},
	{
		"id": "a04a8ac24310",
		"ts": "2026-06-27T07:46:51.318Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24719677.55,
		"hash": "a04a8ac24310017879c7ab5231ab2cc7810adc5e6ef08b7aba13aa917e86eea1"
	},
	{
		"id": "60b6c0e8acd8",
		"ts": "2026-06-27T07:46:51.765Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3774439.81,
		"hash": "60b6c0e8acd8c0f60899b8d754faf5f2aa6f8a995ee37c5216f06e5ce8996957"
	},
	{
		"id": "2417a49e8940",
		"ts": "2026-06-27T07:46:52.018Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 925747.39,
		"hash": "2417a49e89407c98170889347603d617c22a5d898ece3627d498c05b3c2acdcf"
	},
	{
		"id": "ee4a065276ae",
		"ts": "2026-06-27T07:46:52.251Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24719677.55,
		"hash": "ee4a065276aeed9644694c375b22dbc6da621f5cde1eba396a6e61c0224fda05"
	},
	{
		"id": "c79be796553e",
		"ts": "2026-06-27T07:46:52.511Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2030011.32,
		"hash": "c79be796553e6762103d3e5bd77b06ee7eeab2d57edcfb95776b671d01fcfd89"
	},
	{
		"id": "60b8433e54c5",
		"ts": "2026-06-27T04:51:03.883Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93320747.3,
		"hash": "60b8433e54c516779c38abdc8fd5c3a5a1a0ad4e736b1e49b8e1ccdcadf4e29f"
	},
	{
		"id": "330a9d9b2d7e",
		"ts": "2026-06-27T04:51:04.326Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12520697.85,
		"hash": "330a9d9b2d7edc8251ef7b004e98e5a8644e4e6f65d5b8435a236f2a5183d88c"
	},
	{
		"id": "3fe49348127d",
		"ts": "2026-06-27T04:51:04.584Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1363061.99,
		"hash": "3fe49348127de26f71ec993e9ae908016189b5c718eeae60aea77cfd4c1d487a"
	},
	{
		"id": "3279b48dd1ed",
		"ts": "2026-06-27T04:51:04.826Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24862035.36,
		"hash": "3279b48dd1ed2bc6e540e51b5a62c87580f0f0efb2d66558bb50d55bfd89371c"
	},
	{
		"id": "13c955c7d960",
		"ts": "2026-06-27T04:51:05.090Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3771614.87,
		"hash": "13c955c7d9602b0bb076e8e0bf6a191ccb47c82379e314a35b93e0409a2cb74d"
	},
	{
		"id": "21037a815fef",
		"ts": "2026-06-27T04:51:05.325Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 925337.76,
		"hash": "21037a815fefcd46bfdbad12ae61465932bed81fd9f4f0c54fde7b049c7b79a6"
	},
	{
		"id": "961ce74603e6",
		"ts": "2026-06-27T04:51:05.570Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24862035.36,
		"hash": "961ce74603e67dc68a469d7bb77bfd1a5db5d05a6ab6d303bd266fad343f78ea"
	},
	{
		"id": "d28a172a984f",
		"ts": "2026-06-27T04:51:05.800Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2073920.65,
		"hash": "d28a172a984f1d6c158215c02db573693ba6744543a195f8c932072cc6d936d4"
	},
	{
		"id": "bbc4375fc1ee",
		"ts": "2026-06-27T00:03:20.821Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93133160.82,
		"hash": "bbc4375fc1eeb0a567078e5b8a709ac5b401ac7d5e5a52e6586fd9e81ee63a1e"
	},
	{
		"id": "3d963c7ea87e",
		"ts": "2026-06-27T00:03:21.196Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12843340.02,
		"hash": "3d963c7ea87ec7a0f0829ab307eaff1d4e54102770826a7ff50c066fe8d8e762"
	},
	{
		"id": "2637f764a6ce",
		"ts": "2026-06-27T00:03:21.408Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1347233.76,
		"hash": "2637f764a6ce7cd62bf294a51374f3bea630baae71ed5bddc52939bf9011694d"
	},
	{
		"id": "96ba539e8e70",
		"ts": "2026-06-27T00:03:21.651Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24656738.96,
		"hash": "96ba539e8e7090b10bfc0543a25b37316d1f21f71c9c047a7449a348de788d00"
	},
	{
		"id": "c871df9bcf89",
		"ts": "2026-06-27T00:03:21.876Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3768480.79,
		"hash": "c871df9bcf8949621e340c856c11105fc7201b4656299bbcb41c96694cabcc15"
	},
	{
		"id": "31eda563fc70",
		"ts": "2026-06-27T00:03:22.080Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 922086.77,
		"hash": "31eda563fc705742d58cd3e19c2b7fc17711d494d2c0f1fd3a987075cdcb41dc"
	},
	{
		"id": "34136f393243",
		"ts": "2026-06-27T00:03:22.298Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4474478.56,
		"hash": "34136f39324375cfa056a545db51f1ba36fd982020c428ab37bbee675a2ebc84"
	},
	{
		"id": "24317cdeebc9",
		"ts": "2026-06-27T00:03:22.502Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2070534.96,
		"hash": "24317cdeebc9dd139a3e4b355d7ac0753056fe62a29c1f7a8b5ca15bcb42820d"
	},
	{
		"id": "15368c04bf35",
		"ts": "2026-06-26T22:09:26.174Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93031957.32,
		"hash": "15368c04bf35c0ce6b53775419c3e0c5ab52afceb5355adb24e14a06f8ba104d"
	},
	{
		"id": "2a3492d78285",
		"ts": "2026-06-26T22:09:26.815Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13046441.38,
		"hash": "2a3492d78285d32260a2abed8e669dfd8d40591561cfb919bffae56821bc2e5e"
	},
	{
		"id": "f1f7d13a4180",
		"ts": "2026-06-26T22:09:27.246Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1339012.48,
		"hash": "f1f7d13a418004241d73f125b384fa20eb723f95ebc7379c3280d76993203a0a"
	},
	{
		"id": "2397e3871901",
		"ts": "2026-06-26T22:09:27.680Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24679163.51,
		"hash": "2397e38719019541d83f2b75e5205342c0561d210d5f30f148db3df51b05c334"
	},
	{
		"id": "d6210c3efa35",
		"ts": "2026-06-26T22:09:28.113Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3748702.54,
		"hash": "d6210c3efa3544dfec7449f7dfb06f62d0fb36b7ecccab2e92dd2c8d44d0066e"
	},
	{
		"id": "a677fa136121",
		"ts": "2026-06-26T22:09:28.361Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 915994.78,
		"hash": "a677fa1361219d0123055d5e321a9a31297daa69d38005610b67567a2dd44e69"
	},
	{
		"id": "e50ff971a13a",
		"ts": "2026-06-26T22:09:28.614Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4383488.89,
		"hash": "e50ff971a13a21865567dd716cc0850c1daa456996927d3b4dd6f73197e480ee"
	},
	{
		"id": "847c01abde20",
		"ts": "2026-06-26T22:09:28.868Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2064370.16,
		"hash": "847c01abde20f1cb142b5f50bb86aee6b85bc8c190b793ff11e0a0fa0ab058ae"
	},
	{
		"id": "2f134db9a8a6",
		"ts": "2026-06-26T20:44:57.242Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 92960468.06,
		"hash": "2f134db9a8a65f568e68690ae446fcf7d74a9bf8d507da7e7d87649b479feb53"
	},
	{
		"id": "c63ec3d13d8d",
		"ts": "2026-06-26T20:44:57.636Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12310002.35,
		"hash": "c63ec3d13d8da6e4022916274139bd312991e2cf6ec28e5f97d26d15a2e30921"
	},
	{
		"id": "99c8f93d16e5",
		"ts": "2026-06-26T20:44:57.827Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1341355.3,
		"hash": "99c8f93d16e5cb3ef130ccaf4cb80aad5cb7920b17e4423151f0fca2bb0d06e3"
	},
	{
		"id": "2aca4a50185b",
		"ts": "2026-06-26T20:44:58.017Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24616290.62,
		"hash": "2aca4a50185bea4cbd22e1968ac189b2a6537bffafd0e74cc0f8e99cf55a49c6"
	},
	{
		"id": "83188da1f81c",
		"ts": "2026-06-26T20:44:58.486Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3748035.23,
		"hash": "83188da1f81c352785fe85bd37f3124805587dc4a289bf71d108e97c92f7dcf7"
	},
	{
		"id": "ea77e8e36a6b",
		"ts": "2026-06-26T20:44:58.677Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 915249.79,
		"hash": "ea77e8e36a6bb10aa4de9aa8c59db6890d0da86aec8572eb8cb1259085d57993"
	},
	{
		"id": "c59d78f52830",
		"ts": "2026-06-26T20:44:58.868Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4560777.87,
		"hash": "c59d78f528309f872c2b147dac36a3bad335d723ab5551a5c5d6e9ab41cc12e1"
	},
	{
		"id": "0b5a9029503f",
		"ts": "2026-06-26T20:44:59.056Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2058612.88,
		"hash": "0b5a9029503f1ce28eb901d271cca58662a0e9810b799f0772066f944e7d0704"
	},
	{
		"id": "206d36a98007",
		"ts": "2026-06-26T18:29:18.611Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93272751.4,
		"hash": "206d36a98007cdc68b9341069eac3578eed59fcedba867cdf52cd390acc156ce"
	},
	{
		"id": "d7ee9300e3aa",
		"ts": "2026-06-26T18:29:19.063Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13220872.67,
		"hash": "d7ee9300e3aafb7885ab0dd54a53ee576e0c5499efaaebfa9aa06f53cc4e388e"
	},
	{
		"id": "59338cb54ead",
		"ts": "2026-06-26T18:29:19.317Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1350538.63,
		"hash": "59338cb54ead6d21d35be5c74e4bc6220cb1f368393511a582049aae33372915"
	},
	{
		"id": "517f9b7cf3be",
		"ts": "2026-06-26T18:29:19.569Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24768895.28,
		"hash": "517f9b7cf3be6dd3749da1d7b0a5e77547584f8dbe60cf6590cbb0b94060e211"
	},
	{
		"id": "373660b1c53c",
		"ts": "2026-06-26T18:29:19.822Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3760087.35,
		"hash": "373660b1c53c06ebc23dd0cab6fdcfb8c867be88b1b61872892676d35bf8b9a4"
	},
	{
		"id": "9b247d26a91e",
		"ts": "2026-06-26T18:29:20.083Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 919458.92,
		"hash": "9b247d26a91e0e8ae4d25042c44a7fa999c67e9962ea941617be8c5b06f1a1f4"
	},
	{
		"id": "2a03a2087189",
		"ts": "2026-06-26T18:29:20.331Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24768895.28,
		"hash": "2a03a208718953750143d8b41c7f3a35d84bb4822ce96921b23ddf094c243f32"
	},
	{
		"id": "b002a8397213",
		"ts": "2026-06-26T18:29:20.776Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2070431.81,
		"hash": "b002a8397213bd955c3de7352e8474f73193052627aae5e31ed552aac3994a36"
	},
	{
		"id": "aa3b295dc12e",
		"ts": "2026-06-26T16:13:24.104Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93292276.57,
		"hash": "aa3b295dc12e4aa2e4eaf85d21140981ecaaad9ae2db935e320fb5c5a900f138"
	},
	{
		"id": "fbc56a22b0c4",
		"ts": "2026-06-26T16:13:24.553Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12390025.37,
		"hash": "fbc56a22b0c4673f9993f55e64b43e6031c67f07d44c345addca8b8876c4c2fc"
	},
	{
		"id": "99063f830563",
		"ts": "2026-06-26T16:13:24.791Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1343568.39,
		"hash": "99063f830563321a49b530c9ac9a4586b43ec87bbc357f6e3b2065afff35076e"
	},
	{
		"id": "18d00b88f548",
		"ts": "2026-06-26T16:13:25.028Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 25326940.39,
		"hash": "18d00b88f548d540006f64b451d2a9fe3909b1938a6229763f10ce5d65c953c2"
	},
	{
		"id": "6fe61599d948",
		"ts": "2026-06-26T16:13:25.268Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3727488.52,
		"hash": "6fe61599d94890a3e0dcfbf21a039fe8b8baf0b2831d177aea88129c92d7a1a7"
	},
	{
		"id": "d92babb94463",
		"ts": "2026-06-26T16:13:25.522Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 900108.19,
		"hash": "d92babb94463499ae169aaa66fe6ce8f5de908150865d724aea28fadb1e9ff0a"
	},
	{
		"id": "fab3bbda68bb",
		"ts": "2026-06-26T16:13:25.756Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25326940.39,
		"hash": "fab3bbda68bb2b9504e22f1a95bff3a98ffc68faaa5e032286e5b20400d5ae13"
	},
	{
		"id": "1900be65f37e",
		"ts": "2026-06-26T16:13:25.991Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2024804.6,
		"hash": "1900be65f37ea732064ec464c7fae987a0a30247a3d4767a52baf9a1d99cb650"
	},
	{
		"id": "549e27f0ae50",
		"ts": "2026-06-26T13:08:47.222Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 91161670.47,
		"hash": "549e27f0ae50c713846fdfd490cd53c19920e7f29463e6290d5f7d3a7e48b7d2"
	},
	{
		"id": "67aa655ab170",
		"ts": "2026-06-26T13:08:47.570Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12548310.79,
		"hash": "67aa655ab17082790f899cdc3d2e600312082c401eb793420e014990abd1f88c"
	},
	{
		"id": "13c56a9317a2",
		"ts": "2026-06-26T13:08:47.757Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1314105.74,
		"hash": "13c56a9317a2177e9d9cb34564965f624b136186b2b96d753a31cf31470c57bb"
	},
	{
		"id": "308ce12fdf18",
		"ts": "2026-06-26T13:08:47.946Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24462878.5,
		"hash": "308ce12fdf1882c8b453790da4ae17ceba437c3bd129e9e1cf12a13abca21b38"
	},
	{
		"id": "03c49b5d0aca",
		"ts": "2026-06-26T13:08:48.138Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3664619.89,
		"hash": "03c49b5d0aca54c7d2d5948210743ed78954475dfcbd91ad2fe2affe22c136db"
	},
	{
		"id": "b379335b3f1f",
		"ts": "2026-06-26T13:08:48.326Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 890158.97,
		"hash": "b379335b3f1fe40f672cbc7b83de6078f87cd9d526f2b0b44463b323bcb50700"
	},
	{
		"id": "51e6bcd9b73c",
		"ts": "2026-06-26T13:08:48.510Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24462878.5,
		"hash": "51e6bcd9b73cddea9cc8ed5d915232d186ce43752a164983ad0eaa49d31ad4ea"
	},
	{
		"id": "3c2e519aa011",
		"ts": "2026-06-26T13:08:48.723Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1995876.72,
		"hash": "3c2e519aa01117a209d1fed9276541dd9a837498f67c739cf81e418f1221a18b"
	},
	{
		"id": "bbbe36c9187b",
		"ts": "2026-06-26T10:25:56.967Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 91754590.73,
		"hash": "bbbe36c9187bb6f19a59ba76f9353769ce5e9568bda9aec5c06b0991325aff9d"
	},
	{
		"id": "0bd856eb59fb",
		"ts": "2026-06-26T10:25:57.599Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13205814.02,
		"hash": "0bd856eb59fbec7319a484fc13f359ce429bbd7f1b8dc6228fe0993265f77523"
	},
	{
		"id": "f9a888e6851c",
		"ts": "2026-06-26T10:25:58.034Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1347854.09,
		"hash": "f9a888e6851c536900854a12a242691af6555c1851774f049d48cf6b67b012ca"
	},
	{
		"id": "1731f6e3eb50",
		"ts": "2026-06-26T10:25:58.509Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24531675.64,
		"hash": "1731f6e3eb50fef2c64ab9c3912afd1dfe6e63e896047a0cf36917bd2e76d78a"
	},
	{
		"id": "0e17ade44631",
		"ts": "2026-06-26T10:25:58.936Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3710213.54,
		"hash": "0e17ade4463116117384e8a2ce5070297104472f7108ab21918f610cc3ceb3de"
	},
	{
		"id": "ba59962c062e",
		"ts": "2026-06-26T10:25:59.167Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 906092.13,
		"hash": "ba59962c062e54758c48347f4c97172a484ebc62c373b1c66f4bf3c4fad0312c"
	},
	{
		"id": "3bd32c27b6ff",
		"ts": "2026-06-26T10:25:59.405Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24531675.64,
		"hash": "3bd32c27b6ff18a7fe9b352c872918d17346bf4c1ea27ef052a7ba2ce7647a52"
	},
	{
		"id": "fcd52b9bfe4b",
		"ts": "2026-06-26T10:26:00.279Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1994329.48,
		"hash": "fcd52b9bfe4be5a0d1eec7e606a466eeb369302855b060f60421d63194629e1f"
	},
	{
		"id": "02f4cbf28509",
		"ts": "2026-06-26T06:58:50.099Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 91934558.6,
		"hash": "02f4cbf28509628a88e61fb34e2ed7c8fd591fb9da488ac4f2b093f1b2574ef6"
	},
	{
		"id": "ecc60e1c9bea",
		"ts": "2026-06-26T06:58:50.314Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12962198.94,
		"hash": "ecc60e1c9beac9b893913dff6ddbe24415793b2370112b03020a56447edd5b19"
	},
	{
		"id": "4422311139ea",
		"ts": "2026-06-26T06:58:50.537Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1349089.76,
		"hash": "4422311139eaec9e392ae9bb51718eb227f8f6cc7de16039826640e6dcb422bb"
	},
	{
		"id": "b1ae904ac4cf",
		"ts": "2026-06-26T06:58:50.743Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24802001.59,
		"hash": "b1ae904ac4cfc1a128b6c14c2654e0b11a54cab46853f1db4c63fd3313ad4b48"
	},
	{
		"id": "c8b50de605ad",
		"ts": "2026-06-26T06:58:50.947Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3730987.88,
		"hash": "c8b50de605ad3528f2f580b696164032f2700bc7d1994169ce5a7b6604d8592e"
	},
	{
		"id": "e5850534c52b",
		"ts": "2026-06-26T06:58:51.158Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 891452.46,
		"hash": "e5850534c52be92554ff09f4e2f82212e36997080221b605e40ac941a863df61"
	},
	{
		"id": "54e708ba9eac",
		"ts": "2026-06-26T06:58:51.384Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24802001.59,
		"hash": "54e708ba9eacf63ba933f348d919208da6cce30c34f629c1b1accbfc7b5a9085"
	},
	{
		"id": "a2f15c88740c",
		"ts": "2026-06-26T06:58:51.593Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2016739.94,
		"hash": "a2f15c88740c0f8adb6dcd462d61fa3a969a59238aed2fe1456d67a433c65e39"
	},
	{
		"id": "7979b51dfee5",
		"ts": "2026-06-26T02:58:28.808Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 89984283.94,
		"hash": "7979b51dfee5b780faa7b19847c36eeeea231fc310090ca0926f19ae6de740c5"
	},
	{
		"id": "b23091f2e7a4",
		"ts": "2026-06-26T02:58:29.009Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12572403.36,
		"hash": "b23091f2e7a401ae46823e90857a781b58ad0918f0c03e1f7fab1eb7706d487e"
	},
	{
		"id": "a6bc0d3c1b66",
		"ts": "2026-06-26T02:58:29.198Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1293266.96,
		"hash": "a6bc0d3c1b669ff61b003a3d9de2661db15b3b29529b59026d885ca085fbe422"
	},
	{
		"id": "75120b822589",
		"ts": "2026-06-26T02:58:29.389Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24478830.5,
		"hash": "75120b8225894876f59293911181c2692f79e8df054344233dabdaa31e8698bb"
	},
	{
		"id": "fdb7d3ca5424",
		"ts": "2026-06-26T02:58:29.578Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3620058.34,
		"hash": "fdb7d3ca54249f66418b5b696ca71b9a99288f53d990708679ec3df4cd025947"
	},
	{
		"id": "6f4b3386f749",
		"ts": "2026-06-26T02:58:29.763Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 867239.45,
		"hash": "6f4b3386f749546317abeaac91cbc45a98331d93c1dcdb2d8cfd87cc9d8899f7"
	},
	{
		"id": "f28d70a5bab3",
		"ts": "2026-06-26T02:58:29.967Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24478830.5,
		"hash": "f28d70a5bab341f97330da1936003354435b151af4c74f95e53a2fd1337204a2"
	},
	{
		"id": "0c59ad5bcf4e",
		"ts": "2026-06-26T02:58:30.157Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1956342.21,
		"hash": "0c59ad5bcf4e154c1295851d099045c19683e66311510c65830be275396dbb88"
	},
	{
		"id": "19c1be7a1860",
		"ts": "2026-06-25T23:14:56.575Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 91755058.68,
		"hash": "19c1be7a1860ddf51c5105a43dba9c248943873b32931dffeb6dd9c2e545e67d"
	},
	{
		"id": "2aadb8bce8dc",
		"ts": "2026-06-25T23:14:57.268Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13119943.71,
		"hash": "2aadb8bce8dcfae89a25bfa421ba92e3836b89b94f9078a6171f144aaed957fb"
	},
	{
		"id": "8aee3834ffc8",
		"ts": "2026-06-25T23:14:57.739Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1333191.52,
		"hash": "8aee3834ffc8f10b81fd0fca0364a1fa45b86d5ea5317508413b6a948dbe0da7"
	},
	{
		"id": "1bfd9d12059a",
		"ts": "2026-06-25T23:14:58.230Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24753095.02,
		"hash": "1bfd9d12059af3698ce38e0312b86e0bb9828b664b3788b5793e3be3071f89e2"
	},
	{
		"id": "5ea219623da1",
		"ts": "2026-06-25T23:14:59.181Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3720381.98,
		"hash": "5ea219623da19569966c222a928e18669443515a569995a876faf4ad3c5ab08f"
	},
	{
		"id": "b68fd3ad0a48",
		"ts": "2026-06-25T23:14:59.435Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 901022.61,
		"hash": "b68fd3ad0a4882eb445f35803130b585b03de0a8c3cc23725898b4772149bec5"
	},
	{
		"id": "f57df64719e6",
		"ts": "2026-06-25T23:14:59.708Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24753095.02,
		"hash": "f57df64719e6e71be685959574774d9d9877e1d379ba0d70b59e08ce30d41ad1"
	},
	{
		"id": "83cb850f7aad",
		"ts": "2026-06-25T23:14:59.993Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2016350.45,
		"hash": "83cb850f7aad1517f3ce433b46e12a35ad651403dcf4a7d4c0308ab85a6b8c2d"
	}
]
