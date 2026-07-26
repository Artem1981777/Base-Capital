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
	"updatedAt": "2026-07-26T16:55:30.427Z",
	"tokensScored": 5736,
	"verdictsIssued": 5736,
	"safe": 5025,
	"risky": 453,
	"likelyRug": 258,
	"ticks": 349
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "9947f511526c",
		"ts": "2026-07-26T16:55:26.363Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111589175.59,
		"hash": "9947f511526c07023396f887630fd658eee8ed7d9cedbd09bd58fab547439d8b"
	},
	{
		"id": "f5d8b5e2a5ec",
		"ts": "2026-07-26T16:55:26.902Z",
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
		"liquidityUsd": 17474748.53,
		"hash": "f5d8b5e2a5eccc7e6e0144e4d4db273476d55462839e8e927723d7f6c0238f49"
	},
	{
		"id": "38aad41619cf",
		"ts": "2026-07-26T16:55:27.272Z",
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
		"liquidityUsd": 1098738.66,
		"hash": "38aad41619cf4e978e5c85306bf87566ced403e11a3507d895bc614a2f65a7a2"
	},
	{
		"id": "57251a19d377",
		"ts": "2026-07-26T16:55:27.639Z",
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
		"liquidityUsd": 25144727.09,
		"hash": "57251a19d37784bfb1779b98dd0fd2d60ad7e0a4ce9e0297d3bbfd5312de0fbd"
	},
	{
		"id": "9efda858440c",
		"ts": "2026-07-26T16:55:28.010Z",
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
		"liquidityUsd": 5077451.93,
		"hash": "9efda858440c452e63336f9f80f35388ec01193c0f117cca79a68024d74c7edd"
	},
	{
		"id": "c0da0b983d18",
		"ts": "2026-07-26T16:55:28.247Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 971755.61,
		"hash": "c0da0b983d1897fd2c924ef73409f717e07105cde9e98fbf3c2304009f80ad8b"
	},
	{
		"id": "8e653bc3923c",
		"ts": "2026-07-26T16:55:28.447Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25144727.09,
		"hash": "8e653bc3923c5685388aea3d9504e76ba7067d97c45465d7388491ce1d68a822"
	},
	{
		"id": "6f9eed5ac21a",
		"ts": "2026-07-26T16:55:28.691Z",
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
		"liquidityUsd": 2435078.25,
		"hash": "6f9eed5ac21ae0545635494250dceb830941e2792fbbd4c9d3ac333bd7cdf7d6"
	},
	{
		"id": "1b825b47f3e7",
		"ts": "2026-07-26T16:55:28.893Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1811669.18,
		"hash": "1b825b47f3e7f62619f19465ab473dad7ff81482cb8e7cfc559db991f514d92a"
	},
	{
		"id": "29050321ad3f",
		"ts": "2026-07-26T16:55:29.096Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1386338.59,
		"hash": "29050321ad3fd36496b837579a49e9cde983ba421b4b9edd560be2f65d6a0ee9"
	},
	{
		"id": "5a322c9d1158",
		"ts": "2026-07-26T16:55:29.292Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10372471.76,
		"hash": "5a322c9d115835f666e845a8ba8d6f2c94c5cc76d48ad01176148a9391338738"
	},
	{
		"id": "fd7b90acbce4",
		"ts": "2026-07-26T16:55:29.481Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 130727.58,
		"hash": "fd7b90acbce45d65113706c027537b8e0fecac70fab371aa558047ada836044e"
	},
	{
		"id": "095924df336b",
		"ts": "2026-07-26T16:55:29.675Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1067710.07,
		"hash": "095924df336bfd6c9fde1e65f83e6ea11f9fae724282ea554a21e98e251f97b6"
	},
	{
		"id": "f444641aec3c",
		"ts": "2026-07-26T16:55:29.860Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4700154.14,
		"hash": "f444641aec3cc51804e6c379a0dffee800ef9413a6fbc346a125d8d26cbd9af7"
	},
	{
		"id": "be1b5c4fccc0",
		"ts": "2026-07-26T16:55:30.049Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 253809.3,
		"hash": "be1b5c4fccc0917cd1173ecfaa9660aa9caf893383235b26ca98e271166a9cd0"
	},
	{
		"id": "afb68a7b01a8",
		"ts": "2026-07-26T16:55:30.236Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6033697.23,
		"hash": "afb68a7b01a85456c8c378fb80114507f44aa1d22afac550efd1f5df5db12ace"
	},
	{
		"id": "78173be64bf7",
		"ts": "2026-07-26T16:55:30.426Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 862579.35,
		"hash": "78173be64bf7ea6245e099ccae07e5e3fedda3ae73c5427efee025a1faabe592"
	},
	{
		"id": "1fdd51cee60e",
		"ts": "2026-07-26T15:01:37.775Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110708085.41,
		"hash": "1fdd51cee60e5cf286ba4ee405894aff7bd12a2340c425cf7ad86abf8bc5811e"
	},
	{
		"id": "27feb55d2b0e",
		"ts": "2026-07-26T15:01:38.128Z",
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
		"liquidityUsd": 14998692.27,
		"hash": "27feb55d2b0e81d400692cf34df3f57eaa793e3600d3dfa40cdabc6682dbd8a9"
	},
	{
		"id": "5164bfab94d3",
		"ts": "2026-07-26T15:01:38.329Z",
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
		"liquidityUsd": 1092883.37,
		"hash": "5164bfab94d3c44fd66bb7a199caf99462fc0d95d18ab8e7a090ba64490a8d41"
	},
	{
		"id": "1f1e8bcf98ac",
		"ts": "2026-07-26T15:01:38.703Z",
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
		"liquidityUsd": 24980075.65,
		"hash": "1f1e8bcf98acccc5dd203076c3223099d7d12356c88298504f47d3a3aa95c54e"
	},
	{
		"id": "fc05d3a1dd8f",
		"ts": "2026-07-26T15:01:38.899Z",
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
		"liquidityUsd": 4987507.15,
		"hash": "fc05d3a1dd8f0dfdc87139aca79a3c9dec06c585fa935764970f74326e6d4965"
	},
	{
		"id": "27ec874c8c6e",
		"ts": "2026-07-26T15:01:39.093Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 966600.44,
		"hash": "27ec874c8c6e3e33fc9c88e0c04c0953c19ef507ba73f72c8e389e3c1836e014"
	},
	{
		"id": "d8ef7aa75bd0",
		"ts": "2026-07-26T15:01:39.297Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24980075.65,
		"hash": "d8ef7aa75bd0ebf61c1196c28989886e55d40be23b2bbd4a7ac26b6acb136c06"
	},
	{
		"id": "142f680597ca",
		"ts": "2026-07-26T15:01:39.495Z",
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
		"liquidityUsd": 2409928.82,
		"hash": "142f680597cad0843f46bc6240646e41439b5643859212a58b807221e0deee18"
	},
	{
		"id": "c6b5a88017c8",
		"ts": "2026-07-26T15:01:39.694Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1779285.84,
		"hash": "c6b5a88017c8ace16440fd18c25eb6fde34fece7306ff7e8b41981b4538e355b"
	},
	{
		"id": "9ed1a6d7e663",
		"ts": "2026-07-26T15:01:39.889Z",
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
		"liquidityUsd": 10362754.95,
		"hash": "9ed1a6d7e663f0241a95c4f6b2fd05fe4d147bf6e315b1877cb75bcd6a75f39d"
	},
	{
		"id": "8e0980baea8b",
		"ts": "2026-07-26T15:01:40.087Z",
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
		"liquidityUsd": 1368742.51,
		"hash": "8e0980baea8b3ccc84214ebc41e67e1c3f6cdc2ffadc11629603ed0b875ded28"
	},
	{
		"id": "08346500a834",
		"ts": "2026-07-26T15:01:40.275Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4626634.01,
		"hash": "08346500a83493fb01d1f7b20ec5e09bcb710733f64e889c986f246e096a2ae3"
	},
	{
		"id": "3d7649675ea9",
		"ts": "2026-07-26T15:01:40.471Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 1066173.04,
		"hash": "3d7649675ea9c74b7a310927c8d7783a7a9f4cced4ef7980293939391fb779d9"
	},
	{
		"id": "c3515f705a7c",
		"ts": "2026-07-26T15:01:40.655Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 127523.49,
		"hash": "c3515f705a7ceaee45e8d0934a7ead6b3f1661884be53061221dd9c1347da1a0"
	},
	{
		"id": "ee02594c82d8",
		"ts": "2026-07-26T15:01:40.846Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 222487.36,
		"hash": "ee02594c82d8456cd8d27ff58cb9b4c66f116dfb2f353157cb4ad7956e6a51e9"
	},
	{
		"id": "caa212ab22f2",
		"ts": "2026-07-26T15:01:41.033Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 857510.69,
		"hash": "caa212ab22f2374781c0766a53314bfa44253635c59322a65c36604077729875"
	},
	{
		"id": "f895aa998d00",
		"ts": "2026-07-26T15:01:41.232Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6013995.19,
		"hash": "f895aa998d008f155bf07ba1e2a455b6d19e69821a3110b2359828ca7f1928e9"
	},
	{
		"id": "6296d4c053f7",
		"ts": "2026-07-26T13:46:55.047Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110459597.63,
		"hash": "6296d4c053f70d0e3d66e9f9652673d7471045fb289cd6d8fae289e0668eadda"
	},
	{
		"id": "09e31dc65d57",
		"ts": "2026-07-26T13:46:55.421Z",
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
		"liquidityUsd": 15672486.67,
		"hash": "09e31dc65d57e2836de93b374d05111d74cbc455f619bcf48e99a7fbf25a563f"
	},
	{
		"id": "e62a2aba3438",
		"ts": "2026-07-26T13:46:55.625Z",
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
		"liquidityUsd": 1086147.94,
		"hash": "e62a2aba343811adf5432e418838d680ff320475fa01de2ec03944ba635ffe2f"
	},
	{
		"id": "862eeb8e7d91",
		"ts": "2026-07-26T13:46:55.830Z",
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
		"liquidityUsd": 25057662,
		"hash": "862eeb8e7d911fb7c50facb11e3750e82a3f6e7b51b8d8d2f659e7ef76bb6fad"
	},
	{
		"id": "06f4ef199f40",
		"ts": "2026-07-26T13:46:56.036Z",
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
		"liquidityUsd": 4998623.07,
		"hash": "06f4ef199f40e31d416a27748d5cff7a943653d20ad332a44b16568b226ac4bb"
	},
	{
		"id": "4cf57e0e17a2",
		"ts": "2026-07-26T13:46:56.244Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 965952.41,
		"hash": "4cf57e0e17a216d03eb75b214ec14b8932fba5afac0da019c4d93c9a22dcef61"
	},
	{
		"id": "c3e80848bf78",
		"ts": "2026-07-26T13:46:56.477Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25057662,
		"hash": "c3e80848bf782b4c9dce7d68847b96e38ca0595772611a384e9b497fd9d790f0"
	},
	{
		"id": "71aa184f0b03",
		"ts": "2026-07-26T13:46:56.690Z",
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
		"liquidityUsd": 2393633.12,
		"hash": "71aa184f0b0346724d3425abab4e1b75e417158c7e1263404b2c9c998a381df4"
	},
	{
		"id": "66f07b97bf73",
		"ts": "2026-07-26T13:46:56.895Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1802213.36,
		"hash": "66f07b97bf731e512721074b712c6437779a9a70aff23c1ee3be8c2895bb0c46"
	},
	{
		"id": "2d5f96f4f1af",
		"ts": "2026-07-26T13:46:57.102Z",
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
		"liquidityUsd": 10316759.69,
		"hash": "2d5f96f4f1af1cef6fb0ae7ced542cfe68aa1992c9797418576f8a1454fbf23f"
	},
	{
		"id": "869bcfa4a6e3",
		"ts": "2026-07-26T13:46:57.292Z",
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
		"liquidityUsd": 1372077.08,
		"hash": "869bcfa4a6e3604af7e9504fad88e7cdac83030d9f698a1b0c608f1b0b4b6de9"
	},
	{
		"id": "bdd579cb1f45",
		"ts": "2026-07-26T13:46:57.480Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4606596.88,
		"hash": "bdd579cb1f45f60dea6f5462894d384c5f613315747675c2eed98bfe429972a1"
	},
	{
		"id": "be152d4888e5",
		"ts": "2026-07-26T13:46:57.671Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1058374.29,
		"hash": "be152d4888e5207f8aceb49e9426ec4bab3041ad24dbc55f94271dc4b51ea1c4"
	},
	{
		"id": "e4f5c74515ef",
		"ts": "2026-07-26T13:46:57.858Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 125294.75,
		"hash": "e4f5c74515ef7ce956b97b0e4da36f07a388c80cf10cd28e9cc2e01d2e3f619f"
	},
	{
		"id": "b5834a14c7de",
		"ts": "2026-07-26T13:46:58.050Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 219599.55,
		"hash": "b5834a14c7deca57479aafb14ea5965ea8b5d056e181345db966b91c45703a77"
	},
	{
		"id": "bd421dd21005",
		"ts": "2026-07-26T13:46:58.250Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 854056.82,
		"hash": "bd421dd21005033896b93a40fb65c3b835eb31ed4f42e088ce07793d6d503e83"
	},
	{
		"id": "8e0d95c2a4b0",
		"ts": "2026-07-26T13:46:58.438Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5717987.95,
		"hash": "8e0d95c2a4b0ca3de825be907f00a26a14d64b6efbbd334c9ac9ad5fffd2f136"
	},
	{
		"id": "9f3a283c3aa8",
		"ts": "2026-07-26T11:59:56.876Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110296921.88,
		"hash": "9f3a283c3aa8029eb3ff13655dcf01c3ebe3728703467ead7597205cf8f668b3"
	},
	{
		"id": "ac724f6aab47",
		"ts": "2026-07-26T11:59:57.089Z",
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
		"liquidityUsd": 15646625.18,
		"hash": "ac724f6aab478ea633261673a4076e22455b5fa94e2dc7129ea7a112fa3880e3"
	},
	{
		"id": "795074b8c4f6",
		"ts": "2026-07-26T11:59:57.310Z",
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
		"liquidityUsd": 1090124.71,
		"hash": "795074b8c4f6bbeadae15929c87b1e248cef555aa33b2dd6e585ad8f94ee05c5"
	},
	{
		"id": "694ce36378ad",
		"ts": "2026-07-26T11:59:57.521Z",
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
		"liquidityUsd": 25429317.44,
		"hash": "694ce36378ad30e7ec0db276684d555687285cdf66ea46dad2b8b728ebb8a045"
	},
	{
		"id": "8af378e5c044",
		"ts": "2026-07-26T11:59:57.728Z",
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
		"liquidityUsd": 4991317.94,
		"hash": "8af378e5c0447063022ff28b6cb345f6b3f919bb68ef1ec9b00d0f2b1ed998ed"
	},
	{
		"id": "6b1e01195bd5",
		"ts": "2026-07-26T11:59:58.058Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 965571.66,
		"hash": "6b1e01195bd57f584006d78518c0bf5851c1836221a6a884062a34c6929f8619"
	},
	{
		"id": "54b3bc680fea",
		"ts": "2026-07-26T11:59:58.260Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25429317.44,
		"hash": "54b3bc680feae3e7425190a7d4ff9b97f9048dbfe702f2fc6f5551315cfd752b"
	},
	{
		"id": "f476b3f56317",
		"ts": "2026-07-26T11:59:58.487Z",
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
		"liquidityUsd": 2396222.1,
		"hash": "f476b3f5631755426f243d91453eac640a21d4406e529b4428401eada8df9b9b"
	},
	{
		"id": "7e62910a1e62",
		"ts": "2026-07-26T11:59:58.697Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1802807.35,
		"hash": "7e62910a1e629abe98e3b10059bd5bec2c02eca8f30ae5c95e83d0313ead6019"
	},
	{
		"id": "e8a0c78decf2",
		"ts": "2026-07-26T11:59:58.906Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 123382.23,
		"hash": "e8a0c78decf267514856ab3ba5868bbc806fe8492b781fa847ef6f33a20e2b6d"
	},
	{
		"id": "1572066a76c6",
		"ts": "2026-07-26T11:59:59.127Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10428366.12,
		"hash": "1572066a76c67877d1d037cc2b3d53be038619c0c47283aff721ce46634ca1f5"
	},
	{
		"id": "ca1be70a707f",
		"ts": "2026-07-26T11:59:59.394Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 854289.41,
		"hash": "ca1be70a707f7e5f1d08dcd63594342cec0edd0b2fbd424ab015bcedbc8ccaea"
	},
	{
		"id": "cacf9151e84e",
		"ts": "2026-07-26T11:59:59.583Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 77430.52,
		"hash": "cacf9151e84edf4738ed8f0ee1c5a89f94a1408043101474d429992e41743f3b"
	},
	{
		"id": "05d784613b0d",
		"ts": "2026-07-26T11:59:59.780Z",
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
		"liquidityUsd": 1339764.87,
		"hash": "05d784613b0d2b79b31b11855500911c4ef9b30107effb247655507c9bc56160"
	},
	{
		"id": "49e84bab6808",
		"ts": "2026-07-26T11:59:59.969Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4603019.9,
		"hash": "49e84bab68082a7622b9b2df748fa741d67dc1bc220e1677cd0d2e383b3f4f44"
	},
	{
		"id": "97b281b24347",
		"ts": "2026-07-26T12:00:00.227Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 180776.92,
		"hash": "97b281b2434749107519790113511ab9646d8d72bf09eccec2f8f8bb2b4d19c2"
	},
	{
		"id": "d211b083a74f",
		"ts": "2026-07-26T12:00:00.507Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 361427.97,
		"hash": "d211b083a74ffbbb114003aca444f7417fab0854c4a1b9ecc45dcaeaf1756c5d"
	},
	{
		"id": "f3daa856953d",
		"ts": "2026-07-26T10:42:03.807Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110294032.67,
		"hash": "f3daa856953dda52dc45ca09294d6a6ca14291cba24f114543d0bce6e46b74c4"
	},
	{
		"id": "4ce5be56aef4",
		"ts": "2026-07-26T10:42:04.039Z",
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
		"liquidityUsd": 16158060.23,
		"hash": "4ce5be56aef4ee52ab855fc11ec72b8513e27329142536ddd48abb75f2e879e4"
	},
	{
		"id": "c39291895a61",
		"ts": "2026-07-26T10:42:04.257Z",
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
		"liquidityUsd": 1088499.84,
		"hash": "c39291895a61a0a0a610796bf5e3504800ed48fee0bfe8947782d6dd90c29da0"
	},
	{
		"id": "92199e1d3b8b",
		"ts": "2026-07-26T10:42:04.492Z",
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
		"liquidityUsd": 25449308.94,
		"hash": "92199e1d3b8b3baeddb299ff29062e4563ca1f94f7cc4fdbaca3e034fd13a58c"
	},
	{
		"id": "ba776ca8a683",
		"ts": "2026-07-26T10:42:04.708Z",
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
		"liquidityUsd": 5005897,
		"hash": "ba776ca8a683f7f99fd6f60d2ad73da99f239908a9f5fbfb2a529b712d2fbb13"
	},
	{
		"id": "c62437c1f334",
		"ts": "2026-07-26T10:42:04.923Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 964661.36,
		"hash": "c62437c1f3340f269c434fcc471fee8c3fa841f4c9633baf375cdb6ba0b0f217"
	},
	{
		"id": "d6e084c9802d",
		"ts": "2026-07-26T10:42:05.140Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25449308.94,
		"hash": "d6e084c9802dcc5a3bf28bec59af4cceba218e94823e1f318ff82df39724710b"
	},
	{
		"id": "217900e2eb04",
		"ts": "2026-07-26T10:42:05.348Z",
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
		"liquidityUsd": 3406809.76,
		"hash": "217900e2eb04c245ae7fe9d7fca5901ec8490c3ee751fab3c9925b1c313ffbea"
	},
	{
		"id": "32a9c7fe73ce",
		"ts": "2026-07-26T10:42:05.574Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1801679.93,
		"hash": "32a9c7fe73cef4f981b9fe198b05f1a5e5673845760784ab0fd17a0f45f558c6"
	},
	{
		"id": "8c87e535679d",
		"ts": "2026-07-26T10:42:05.797Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 123193.3,
		"hash": "8c87e535679d416da325529a40b47c06c8251cb9feb8c4c48ca2bb26a74df03a"
	},
	{
		"id": "b9b0ec52c3f6",
		"ts": "2026-07-26T10:42:05.989Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10515721.58,
		"hash": "b9b0ec52c3f636836f2da1077c39d3c1fd292a1c7e75c9f38f28c8fc2dc29bd1"
	},
	{
		"id": "877ce150c0c9",
		"ts": "2026-07-26T10:42:06.214Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 854289.41,
		"hash": "877ce150c0c9b0346460e91fac565f544c3f8241e2c81c52bb502d9c29b1d367"
	},
	{
		"id": "7f31911ac8dc",
		"ts": "2026-07-26T10:42:06.458Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 76977.98,
		"hash": "7f31911ac8dcbe3135e4e03e9d016f5fe38414a0c14c35086c05f2480845d734"
	},
	{
		"id": "946a08f5924e",
		"ts": "2026-07-26T10:42:06.645Z",
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
		"liquidityUsd": 1337893.29,
		"hash": "946a08f5924e41d299caaf134c897451a68574e5a9e071b098c7748968dd2dbf"
	},
	{
		"id": "f17462654396",
		"ts": "2026-07-26T10:42:06.835Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4604242.29,
		"hash": "f17462654396d7dfdb3ae5cf64e4cabe8976a9888a3728e35f8236748b47d0a1"
	},
	{
		"id": "d948040c6af9",
		"ts": "2026-07-26T10:42:07.022Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 178361.47,
		"hash": "d948040c6af9c5a81a9c454e89a915804ca8957d6823ef28b24e02eb7fb1457d"
	},
	{
		"id": "2b99e7b1609d",
		"ts": "2026-07-26T10:42:07.216Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 361266.91,
		"hash": "2b99e7b1609de022627c9f3fd219052cf6bc643a61aadd72ad117d92fdae27aa"
	},
	{
		"id": "a7a441e90c4d",
		"ts": "2026-07-26T08:30:32.314Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110327495.2,
		"hash": "a7a441e90c4d9b98df70e7f0cb7c646d61a06ef90677088298f720d83ef18169"
	},
	{
		"id": "a2af945e0982",
		"ts": "2026-07-26T08:30:32.527Z",
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
		"liquidityUsd": 15233452.07,
		"hash": "a2af945e09827a8c3ef07873f10ab3445eeb545ddae242622b183bb38ae2ab98"
	},
	{
		"id": "33b6c9c3a0fd",
		"ts": "2026-07-26T08:30:32.743Z",
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
		"liquidityUsd": 1087538.28,
		"hash": "33b6c9c3a0fd8d313dca52dde67a439b7c9e82ca14db9e5cf354b21c3e03e678"
	},
	{
		"id": "bad03e5a9eae",
		"ts": "2026-07-26T08:30:32.949Z",
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
		"liquidityUsd": 25539868.08,
		"hash": "bad03e5a9eae232d581ac213c4c751af1bb55e8d5930ac56b4a9d1ebcebca027"
	},
	{
		"id": "dd43e283c2c8",
		"ts": "2026-07-26T08:30:33.151Z",
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
		"liquidityUsd": 4964479.98,
		"hash": "dd43e283c2c86d592a5c3f8f41116fbc83fda63de9d73dc8ef62dd321c20e8e6"
	},
	{
		"id": "3e5ccd008da6",
		"ts": "2026-07-26T08:30:33.353Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 965383.71,
		"hash": "3e5ccd008da6bf76d8cdc2b87465d540d48df9336ab4495c142e4bceef21aadd"
	},
	{
		"id": "ce0803c3d755",
		"ts": "2026-07-26T08:30:33.561Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25539868.08,
		"hash": "ce0803c3d755c6389c7e04571c356ee5a42c28ad5d9c4c55b565b374e7fd3d1a"
	},
	{
		"id": "aedce261758c",
		"ts": "2026-07-26T08:30:33.763Z",
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
		"liquidityUsd": 2387984.71,
		"hash": "aedce261758c8f913084be72f5641277e5cc596ea5f3b6a9b2375a34785330bb"
	},
	{
		"id": "823a98dab81a",
		"ts": "2026-07-26T08:30:33.965Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1771992.18,
		"hash": "823a98dab81a8427096d3e6e95203a00e54ccbddbf899f1e009911a9d6ef3eee"
	},
	{
		"id": "a1c82b5853dd",
		"ts": "2026-07-26T08:30:34.167Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 122754.45,
		"hash": "a1c82b5853dd7e9a140a9a6bdaa887dfb75b691b518c2a25b16a40e38189a38f"
	},
	{
		"id": "adfe524d20b2",
		"ts": "2026-07-26T08:30:34.356Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10447322.28,
		"hash": "adfe524d20b2a313096d0d4c76c5e94c8e22f5a25d9e611fe774213f2176d664"
	},
	{
		"id": "127924efa26e",
		"ts": "2026-07-26T08:30:34.548Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 854963.12,
		"hash": "127924efa26eb1d7a5e36402eb46cea74e250bd1e57063931ba8fd70ebb44794"
	},
	{
		"id": "e3e35631b8d0",
		"ts": "2026-07-26T08:30:34.735Z",
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
		"liquidityUsd": 1352727.32,
		"hash": "e3e35631b8d0ba68c2e302f0d7f4d41e6e1441757e311d2a80c86dfd416e78a6"
	},
	{
		"id": "147edc959150",
		"ts": "2026-07-26T08:30:34.925Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 77024.58,
		"hash": "147edc959150c7e6ce626dd040e28932be52569662b4dce04d5e3efe47554153"
	},
	{
		"id": "6436a0cc7d87",
		"ts": "2026-07-26T08:30:35.112Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 179828.4,
		"hash": "6436a0cc7d8788f776f5c3752029583f362f8d7adb86203d38923c022cf7c209"
	},
	{
		"id": "a723fd95b951",
		"ts": "2026-07-26T08:30:35.299Z",
		"symbol": "HAYLORD",
		"token": "0xb200000000000000000000DfEa18f58CD9ADBC01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 50755.17,
		"hash": "a723fd95b9512f646894d89ed06409e98d822ad0d359b1bc129c8d0379274f59"
	},
	{
		"id": "d4cd4e1d9cd3",
		"ts": "2026-07-26T08:30:35.486Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4599351.25,
		"hash": "d4cd4e1d9cd3fb0bbaffc2d692606563cff1108cffe99e58be31a95b0deb2209"
	},
	{
		"id": "3aaa8e9554c6",
		"ts": "2026-07-26T08:30:35.676Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 360505.33,
		"hash": "3aaa8e9554c67d77efa1ea62c9642c7cdf41eb91aa5e12519679c92e4a11b998"
	},
	{
		"id": "68f0505f8e37",
		"ts": "2026-07-26T05:57:49.832Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110318130.46,
		"hash": "68f0505f8e37674f1722a85e00bb533fbda46bec91f7f6cba04764010328a7d6"
	},
	{
		"id": "60a5657d0433",
		"ts": "2026-07-26T05:57:50.271Z",
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
		"liquidityUsd": 14497916.11,
		"hash": "60a5657d0433578f893e2fdf7a2071c4b9ec4ad1ac0c27ae494cf95c9e720fcb"
	},
	{
		"id": "be5ed8b6ee90",
		"ts": "2026-07-26T05:57:50.718Z",
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
		"liquidityUsd": 1100870.04,
		"hash": "be5ed8b6ee90f6933f570e8b24d3ff0bf9744ab5419964eba04d92f16a81d739"
	},
	{
		"id": "76e847034b7e",
		"ts": "2026-07-26T05:57:50.950Z",
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
		"liquidityUsd": 25617049.42,
		"hash": "76e847034b7ed5bb1fac01430f6c4388b0d11dd7afdd666588778db3089145ef"
	},
	{
		"id": "a794597e0bd6",
		"ts": "2026-07-26T05:57:51.382Z",
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
		"liquidityUsd": 4964922.97,
		"hash": "a794597e0bd60251aa472e4c419483e34daa2375fe1d9187224ba478f1aaff10"
	},
	{
		"id": "a8c3b55d913f",
		"ts": "2026-07-26T05:57:51.617Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 957001.87,
		"hash": "a8c3b55d913fa64af031fcdca5be55886e993b0a17a57151d807de2be6e433f7"
	},
	{
		"id": "bab44651d2bb",
		"ts": "2026-07-26T05:57:51.851Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25617049.42,
		"hash": "bab44651d2bb5b7605b646934432aecc61284b520ea92e5e150c2a90e2c08aa1"
	},
	{
		"id": "d6294b05017d",
		"ts": "2026-07-26T05:57:52.091Z",
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
		"liquidityUsd": 2394878.12,
		"hash": "d6294b05017dae61dc944467da7e4861912b6cc7342f1a2e32dcf08d4958e447"
	},
	{
		"id": "986e21437723",
		"ts": "2026-07-26T05:57:52.326Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1759574.9,
		"hash": "986e21437723f0270e2fdb2b3d25bf3af0a30a510a0f31b8051c6f7c35022c8f"
	},
	{
		"id": "1ee82e6f4b25",
		"ts": "2026-07-26T05:57:52.556Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 123880.67,
		"hash": "1ee82e6f4b250d465bb83d1a9599e73e878f2291f46f6c36aeb351a079b9337b"
	},
	{
		"id": "8207859f64fb",
		"ts": "2026-07-26T05:57:52.775Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10410490.9,
		"hash": "8207859f64fbf1d764f87ded1808a303b1dda9892014aaf22e6d7417bc5beb00"
	},
	{
		"id": "7ce60b7b14cd",
		"ts": "2026-07-26T05:57:52.993Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 851545.7,
		"hash": "7ce60b7b14cd8a39026a7d0c69f262f7e06d7260201647af069366d8e41b6664"
	},
	{
		"id": "72effe4daf68",
		"ts": "2026-07-26T05:57:53.216Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 77347.37,
		"hash": "72effe4daf68539317d7698bdfb416c319aaabf5287824d76a083d6525559b25"
	},
	{
		"id": "4f606f98fb7f",
		"ts": "2026-07-26T05:57:53.436Z",
		"symbol": "HAYLORD",
		"token": "0xb200000000000000000000DfEa18f58CD9ADBC01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 50670.99,
		"hash": "4f606f98fb7fb5d8ba50923c309cabfe13fb29812300aabb46b7cee81d001499"
	},
	{
		"id": "162a8f8bc7f6",
		"ts": "2026-07-26T05:57:53.652Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4631318.94,
		"hash": "162a8f8bc7f6e304c2e70a7029e39f6804d51605ff69acabe73b9bc703301258"
	},
	{
		"id": "395dca96e49e",
		"ts": "2026-07-26T05:57:53.871Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 180504.79,
		"hash": "395dca96e49eae9fc1c5c7a9bd7bd07376cfb31d86b8066a6a8ccd7c4f59455e"
	},
	{
		"id": "b4659a0dbee1",
		"ts": "2026-07-26T05:57:54.089Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1066821.23,
		"hash": "b4659a0dbee1f724daa00aa88ddb6087d1e96a9dc1d021dc09589fa530e79de5"
	},
	{
		"id": "83899faa1701",
		"ts": "2026-07-26T02:53:43.467Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110032109.72,
		"hash": "83899faa170148bc197e038fea652525f29285fdfd9804a12a67e8db815b8ed2"
	},
	{
		"id": "a707e4a361ac",
		"ts": "2026-07-26T02:53:43.974Z",
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
		"liquidityUsd": 15623626.48,
		"hash": "a707e4a361ac9d2eefc8f1554493929b40e0bd1949a3af3a3db4bc18139622eb"
	},
	{
		"id": "00972d7a3857",
		"ts": "2026-07-26T02:53:44.316Z",
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
		"liquidityUsd": 1094951.62,
		"hash": "00972d7a385756c2993906eb217016b40e029032aa499533b962dfd4889d971f"
	},
	{
		"id": "6eb61d2f21a3",
		"ts": "2026-07-26T02:53:44.663Z",
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
		"liquidityUsd": 25659414.15,
		"hash": "6eb61d2f21a359923ef8e55475c32683651b1ba380dff7c82cfe59f5ad508806"
	},
	{
		"id": "ad4a7ce56a77",
		"ts": "2026-07-26T02:53:44.864Z",
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
		"liquidityUsd": 4951755.67,
		"hash": "ad4a7ce56a77c6d6836d7b0c6fbc1cb79052c7375b35a089e26300524493dde7"
	},
	{
		"id": "73f468cbcef0",
		"ts": "2026-07-26T02:53:45.068Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 949448.46,
		"hash": "73f468cbcef0a216e86da192eecd4798c5fc53e75cc55d3e0e2b152c0b1f1564"
	},
	{
		"id": "bb8db4c80362",
		"ts": "2026-07-26T02:53:45.268Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25659414.15,
		"hash": "bb8db4c8036233f60aa5e582d103cd8f03f94182b41bc6070c65564d005f9893"
	},
	{
		"id": "79816f151e4d",
		"ts": "2026-07-26T02:53:45.524Z",
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
		"liquidityUsd": 2386990.19,
		"hash": "79816f151e4d2cbba0d0802a67ac409a369c385a6a7d53db4342eedc96a20dff"
	},
	{
		"id": "553db416d8e6",
		"ts": "2026-07-26T02:53:45.738Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1732341.24,
		"hash": "553db416d8e6f5dcad24c22c24684198e23a542746954189907920d98d10a28c"
	},
	{
		"id": "679ee262e0b8",
		"ts": "2026-07-26T02:53:45.931Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 76664.09,
		"hash": "679ee262e0b89b713f3ceab0118f6f121b7098a860079a8a0c2b07351eccde59"
	},
	{
		"id": "91e84e44ef1c",
		"ts": "2026-07-26T02:53:46.133Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10093692.19,
		"hash": "91e84e44ef1cfc1537b436661b663f9629281e3bbde2b985be267d62cf058a2b"
	},
	{
		"id": "58c5fbca4d51",
		"ts": "2026-07-26T02:53:46.325Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 812655.4,
		"hash": "58c5fbca4d514c5a59d45c459a71c809ce84bc6fc969e018e57cf0883dcdee2c"
	},
	{
		"id": "50dac8d3a385",
		"ts": "2026-07-26T02:53:46.521Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1059733.35,
		"hash": "50dac8d3a385f226cff5f0330bafdb0baa9d9b6eed916b668ee32e6ba2202093"
	},
	{
		"id": "d9887da55dbc",
		"ts": "2026-07-26T02:53:46.747Z",
		"symbol": "HAYLORD",
		"token": "0xb200000000000000000000DfEa18f58CD9ADBC01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 52233.31,
		"hash": "d9887da55dbc4c20435d0003c28b9f849218aac5805b64e3cb9a3f541be166d3"
	},
	{
		"id": "180c663f5a60",
		"ts": "2026-07-26T02:53:47.120Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1836203.41,
		"hash": "180c663f5a60fac67fb5139c381b6551d2557b30ff61c102c35df4efd99723f3"
	},
	{
		"id": "9182cb2b5139",
		"ts": "2026-07-26T02:53:47.307Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4635471.89,
		"hash": "9182cb2b51394753c00cc078a2823add294b7da8658ffc3bb8bad9d25b326637"
	},
	{
		"id": "99a7159e6d2b",
		"ts": "2026-07-26T02:53:47.540Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 184580.84,
		"hash": "99a7159e6d2bc8e57b1e953e65bb4266d60d320515070bcfd0523f4ddfc81e27"
	},
	{
		"id": "8843b40e7567",
		"ts": "2026-07-25T23:57:15.745Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109937299.89,
		"hash": "8843b40e7567f9adaa572b4173b9aae638257fcc4ecf7f2ab86b8726aa440c95"
	},
	{
		"id": "7fc0f747b73e",
		"ts": "2026-07-25T23:57:16.034Z",
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
		"liquidityUsd": 16290303.29,
		"hash": "7fc0f747b73efe5736d5694dfa556bc46e4ff5d435ee0a35d43092785abc1ae2"
	},
	{
		"id": "38b12d2fce9d",
		"ts": "2026-07-25T23:57:16.287Z",
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
		"liquidityUsd": 1093353.25,
		"hash": "38b12d2fce9dd0057a1327f564c8eecd3e99fceca16792ad644d78d0851d094f"
	},
	{
		"id": "b29b9113d5f3",
		"ts": "2026-07-25T23:57:16.550Z",
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
		"liquidityUsd": 25450785.75,
		"hash": "b29b9113d5f3fe28e1066f135aa0b4d6e1d15fd99d35dd89e7335d179cb148ce"
	},
	{
		"id": "0cc712ea95cf",
		"ts": "2026-07-25T23:57:16.801Z",
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
		"liquidityUsd": 4940773.27,
		"hash": "0cc712ea95cfddfbcc55bded1891addb3d0c626fb02dbedec745a1f471db1336"
	},
	{
		"id": "dd431098b872",
		"ts": "2026-07-25T23:57:17.044Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 950229.35,
		"hash": "dd431098b87266617fd524612be84247597d3f15a05a7927e35f37285345b96a"
	},
	{
		"id": "51f258604c5f",
		"ts": "2026-07-25T23:57:17.313Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25450785.75,
		"hash": "51f258604c5f10ebf75ed0a6463ecc3d4a29f64ef65e70a3cf2d28c8a855e2a2"
	},
	{
		"id": "f1ba805a5b79",
		"ts": "2026-07-25T23:57:17.561Z",
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
		"liquidityUsd": 2381660.93,
		"hash": "f1ba805a5b79587bcda1c80b70c9e15b7350f9df39a4b8cf2e528b7a2f57b4bd"
	},
	{
		"id": "8b9b11723e0f",
		"ts": "2026-07-25T23:57:17.808Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1749322.99,
		"hash": "8b9b11723e0f0e19c2089be30a4c937f900ef73e4bf8f487dcfad7e28f7383cf"
	},
	{
		"id": "be47c21c697f",
		"ts": "2026-07-25T23:57:18.055Z",
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
		"liquidityUsd": 10109897.46,
		"hash": "be47c21c697f61df94f154aa86b8712d636b8222d960fb4eeb25d4152eb83c47"
	},
	{
		"id": "829399252652",
		"ts": "2026-07-25T23:57:18.287Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 77593.57,
		"hash": "829399252652261110be42d6ed98b2709e8d30e9fb0fb7471575e946b91a0732"
	},
	{
		"id": "ab0d172210fe",
		"ts": "2026-07-25T23:57:18.520Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 815887.04,
		"hash": "ab0d172210fefeada7a727726c27ce7ec8f476ac502bb75d52c11571aa77847d"
	},
	{
		"id": "5b3cdd6e2a18",
		"ts": "2026-07-25T23:57:18.750Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1908058.78,
		"hash": "5b3cdd6e2a18f097d1f16b773e3215900da457fba3a5e71982ff9fba073c783b"
	},
	{
		"id": "4add57e0470b",
		"ts": "2026-07-25T23:57:18.982Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3311934.79,
		"hash": "4add57e0470b842d645a5f3adbeeae740f18e3d7c3241d769623b672035c1512"
	},
	{
		"id": "0d32d82daa09",
		"ts": "2026-07-25T23:57:19.214Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1072334.78,
		"hash": "0d32d82daa098942a8da6bae329bf073d6744a1bda7529a747013a21943c2d8b"
	},
	{
		"id": "5b208692d228",
		"ts": "2026-07-25T23:57:19.448Z",
		"symbol": "HAYLORD",
		"token": "0xb200000000000000000000DfEa18f58CD9ADBC01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55302.75,
		"hash": "5b208692d2286de831951102a0adfc70794c89223f8259a896a7df2c7aa554ae"
	},
	{
		"id": "78891c8a628d",
		"ts": "2026-07-25T23:57:19.678Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4619573.5,
		"hash": "78891c8a628d5f36809d2491a6c2c3161eece7da0e6fccd4661793ec06db0d7b"
	},
	{
		"id": "49b0656d0bde",
		"ts": "2026-07-25T22:51:48.145Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109840592.85,
		"hash": "49b0656d0bde6f0c09539e243a8dc7961caa9ab0dbf58fb187e928009bcef2db"
	},
	{
		"id": "4208721dec53",
		"ts": "2026-07-25T22:51:48.495Z",
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
		"liquidityUsd": 16216867.7,
		"hash": "4208721dec53ed11990bce9a8c428e0727c334738b2acba68c2564c319696908"
	},
	{
		"id": "150c80097d96",
		"ts": "2026-07-25T22:51:48.698Z",
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
		"liquidityUsd": 1093830.82,
		"hash": "150c80097d96d39d4758ac1ca4fc3d854f7f77344ef0c150c4f8d773defa5fe7"
	},
	{
		"id": "d8a6ce1f95bb",
		"ts": "2026-07-25T22:51:48.891Z",
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
		"liquidityUsd": 25451044.01,
		"hash": "d8a6ce1f95bba9c38a01ddfa8fc3f058cf767c9268d3c4e14275d112b4d58d04"
	},
	{
		"id": "499e6d55b003",
		"ts": "2026-07-25T22:51:49.092Z",
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
		"liquidityUsd": 4943359.17,
		"hash": "499e6d55b0036ee20bb915dfdcb0c83a42a998de60a8b02412cf13c400014860"
	},
	{
		"id": "420ce29c38fa",
		"ts": "2026-07-25T22:51:49.286Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 950225.07,
		"hash": "420ce29c38fa9dcddd35f8cc28c43bf556f25167a333088d7ade3b0641601c5d"
	},
	{
		"id": "d58980d6f2d8",
		"ts": "2026-07-25T22:51:49.480Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25451044.01,
		"hash": "d58980d6f2d899e326e06acf7e24bca19c20c096978e928b337f2ba82080e58b"
	},
	{
		"id": "bee2e57a2659",
		"ts": "2026-07-25T22:51:49.685Z",
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
		"liquidityUsd": 2382435.66,
		"hash": "bee2e57a2659e2c15dc3b5a978f9b6e9ad05dcc502b307176145476fb7453655"
	},
	{
		"id": "5e2b42b65795",
		"ts": "2026-07-25T22:51:49.887Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1724915.01,
		"hash": "5e2b42b6579534fb116b4cd04d037df7c813868448fbb2464bfee526146fba39"
	},
	{
		"id": "e63b90355608",
		"ts": "2026-07-25T22:51:50.093Z",
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
		"liquidityUsd": 10090050.57,
		"hash": "e63b90355608064ca73b8a8bc541251cbafe39475d0096064a0e82339b2a4822"
	},
	{
		"id": "73b3df3b301d",
		"ts": "2026-07-25T22:51:50.308Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 77577.64,
		"hash": "73b3df3b301de8c911806115a0667ac3ff014c8d224f8ebaeeefd11a212e63ba"
	},
	{
		"id": "1a24c9af2110",
		"ts": "2026-07-25T22:51:50.500Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 3337516.14,
		"hash": "1a24c9af2110dc2dcbd1a0f1864400f75bb64eff15370b8daf71647c8d30994a"
	},
	{
		"id": "a3de40ae4989",
		"ts": "2026-07-25T22:51:50.684Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1930937.01,
		"hash": "a3de40ae49896563858f8b387de9d0bdb1540020a1747809f9e58d524ff1809a"
	},
	{
		"id": "86d5d613728c",
		"ts": "2026-07-25T22:51:50.878Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4625162.77,
		"hash": "86d5d613728cb03cbd86543b8857a789d8301c3320eb91654389104ffefd9e6a"
	},
	{
		"id": "62a0d80ae8d1",
		"ts": "2026-07-25T22:51:51.069Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 185640.43,
		"hash": "62a0d80ae8d1b8f14faf1bfac2f985bd10498d477d4b499d14d91fac07ffbd47"
	},
	{
		"id": "0996827ac4bf",
		"ts": "2026-07-25T22:51:51.256Z",
		"symbol": "HAYLORD",
		"token": "0xb200000000000000000000DfEa18f58CD9ADBC01",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 49822.3,
		"hash": "0996827ac4bf648e53c72407ee859a3dfdc28bd8ef823e41e38278edf539db31"
	},
	{
		"id": "5fbd4a530f92",
		"ts": "2026-07-25T22:51:51.434Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 121900.69,
		"hash": "5fbd4a530f92445641fa66cdd0a268c3a875bc04e637b1aef9c486be95f5e722"
	},
	{
		"id": "09b1b5542aa5",
		"ts": "2026-07-25T21:51:45.732Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109823361.33,
		"hash": "09b1b5542aa5b299362b7c04d58535c5bc4a52a45e32139985ac08a9ce5971ce"
	},
	{
		"id": "c5e5b9a4b9ec",
		"ts": "2026-07-25T21:51:46.117Z",
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
		"liquidityUsd": 16431739.61,
		"hash": "c5e5b9a4b9ec5ef13b2d48eea651f9d40211b68aaaf07318bcc71c9f418bfeb5"
	},
	{
		"id": "ae2b2673bd0b",
		"ts": "2026-07-25T21:51:46.496Z",
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
		"liquidityUsd": 1087154.96,
		"hash": "ae2b2673bd0b5d540ba4adcf3b25e65e6baf6fe35d65910d0cbd44cd310e3d5f"
	},
	{
		"id": "4efc9138b301",
		"ts": "2026-07-25T21:51:46.876Z",
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
		"liquidityUsd": 25493056.29,
		"hash": "4efc9138b301e676fc983d0ea3233c0bc9a0195d25e108999dfcf044509799b0"
	},
	{
		"id": "c43916bf5792",
		"ts": "2026-07-25T21:51:47.273Z",
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
		"liquidityUsd": 4932601.51,
		"hash": "c43916bf579238525c33964f7973d23b45ef88a8ae4f82e122d949be1648cea1"
	},
	{
		"id": "fc35d2c78ede",
		"ts": "2026-07-25T21:51:47.487Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 950237.38,
		"hash": "fc35d2c78ede6fa032f1aae1642086101904d751c0a8b1fd5df236dd8ab17efc"
	},
	{
		"id": "9b6bfb2e6621",
		"ts": "2026-07-25T21:51:47.695Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25493056.29,
		"hash": "9b6bfb2e66218e85a69c0deda1e9c86104527cc944dff60fcc2dc9583158f13c"
	},
	{
		"id": "f68dc3610714",
		"ts": "2026-07-25T21:51:47.906Z",
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
		"liquidityUsd": 3388214.12,
		"hash": "f68dc36107146bb4c4201fea255a6b04f7393200d913c104fcc071e346f1aa7f"
	},
	{
		"id": "4c2c52fd9066",
		"ts": "2026-07-25T21:51:48.284Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1711953.08,
		"hash": "4c2c52fd906685d007657f8bff910945d1c76b6d198b3bf186587b12fefb744a"
	},
	{
		"id": "50d30e177c37",
		"ts": "2026-07-25T21:51:48.517Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 77602.66,
		"hash": "50d30e177c37a32afcaf92b3e94ffa5168f70e9194f7c85eaf8943270f7aea8a"
	},
	{
		"id": "172705b46d93",
		"ts": "2026-07-25T21:51:48.723Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10075743.29,
		"hash": "172705b46d9383ef317c4df2a8c6457021747f8fd5cf49c94a660827fb0dfa62"
	},
	{
		"id": "8ca198087f90",
		"ts": "2026-07-25T21:51:48.919Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3368570.41,
		"hash": "8ca198087f906fe77f1806bddbdd537d2ea39479c860ad92a2be63d8d246dada"
	},
	{
		"id": "2b6766aa7847",
		"ts": "2026-07-25T21:51:49.116Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1895598.85,
		"hash": "2b6766aa7847471c6fb8b16cbbeabb6067b8fa4bd795f039ac2a58cd99a92f5c"
	},
	{
		"id": "de28fa64a13c",
		"ts": "2026-07-25T21:51:49.316Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4611010.35,
		"hash": "de28fa64a13c7553d5a64a58f51e5c62f328883e2b2f4856ed9b026cd889c8c6"
	},
	{
		"id": "eb12a4b8782d",
		"ts": "2026-07-25T21:51:49.546Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 185673.81,
		"hash": "eb12a4b8782d9d72f433f68575c0c9e658d5aeb4ecee0d1b6ce36fcf0cb4c89a"
	},
	{
		"id": "bbce939e8940",
		"ts": "2026-07-25T21:51:49.741Z",
		"symbol": "HAYLORD",
		"token": "0xb200000000000000000000DfEa18f58CD9ADBC01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 50691.74,
		"hash": "bbce939e89408edcfe57df3976277e9e1e2dc61fb04fa767d596bd7c9a281268"
	},
	{
		"id": "3337ed08b1ed",
		"ts": "2026-07-25T20:45:52.937Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109863534.01,
		"hash": "3337ed08b1edb4ff896a4053017ea860cd0ada01ab6c6d57312ebb70fadee376"
	},
	{
		"id": "08e9625b5244",
		"ts": "2026-07-25T20:45:53.380Z",
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
		"liquidityUsd": 16177560.12,
		"hash": "08e9625b5244e74a3e6f3e9eb847b1117da7c54c5c830c1759f19773e0138dbe"
	},
	{
		"id": "5db92d27c7ba",
		"ts": "2026-07-25T20:45:53.623Z",
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
		"liquidityUsd": 810030,
		"hash": "5db92d27c7bab83b1e5859f80cf301303c6f6a67b63c05f239ae87885ae3a5fa"
	},
	{
		"id": "689d0e2ea6f2",
		"ts": "2026-07-25T20:45:53.865Z",
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
		"liquidityUsd": 25368998.21,
		"hash": "689d0e2ea6f27f3b430878ed64494fac5c95f4307232423fb90c6d605ee4c1bd"
	},
	{
		"id": "e6d36c62b353",
		"ts": "2026-07-25T20:45:54.105Z",
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
		"liquidityUsd": 4932199.28,
		"hash": "e6d36c62b35337b4694ef4f8691e5c73b0870b6a18777608460b10413618fefe"
	},
	{
		"id": "b3904bd36724",
		"ts": "2026-07-25T20:45:54.429Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 944099.2,
		"hash": "b3904bd36724202cb10270852589c871eda79de5923d97a4e09df90c12a3afb9"
	},
	{
		"id": "4db550536c42",
		"ts": "2026-07-25T20:45:54.671Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25368998.21,
		"hash": "4db550536c42c22982f71eceefe073ee5a253a5ddf05d876b40c27f708d1dd66"
	},
	{
		"id": "190f37e69203",
		"ts": "2026-07-25T20:45:54.910Z",
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
		"liquidityUsd": 3383062.2,
		"hash": "190f37e6920345937fa2418c3cd150a44134b304c0d04eceacb5bbd9ddaceda5"
	},
	{
		"id": "b99de2b9333a",
		"ts": "2026-07-25T20:45:55.151Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 76929.49,
		"hash": "b99de2b9333ab4dcd08ea3f887372590bccb58edd429ad2d7a3a214eca929086"
	},
	{
		"id": "1bb972c0104b",
		"ts": "2026-07-25T20:45:55.392Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3384858.38,
		"hash": "1bb972c0104bf399d9227535d9809d48e83a7909d743e4e356c20509730f232a"
	},
	{
		"id": "7b2f877aa580",
		"ts": "2026-07-25T20:45:55.614Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10113390.26,
		"hash": "7b2f877aa580abd57f8def37ad530cd671edf9bb6abc9121a0efc31abcbd35e1"
	},
	{
		"id": "739e5bc77efb",
		"ts": "2026-07-25T20:45:55.840Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1923018.38,
		"hash": "739e5bc77efba067709ba626232cb556bf10ff123feb2c985f1860215bb75541"
	},
	{
		"id": "3d6bf86bb0c0",
		"ts": "2026-07-25T20:45:56.066Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1810484.07,
		"hash": "3d6bf86bb0c03ac07362c91adb3dc6ea55bb27dd877ae6531ddcfc3450eb8237"
	}
]
