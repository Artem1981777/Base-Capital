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
	"updatedAt": "2026-09-08T23:09:22.792Z",
	"tokensScored": 16700,
	"verdictsIssued": 16700,
	"safe": 14176,
	"risky": 1229,
	"likelyRug": 1295,
	"ticks": 957
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "dc78ac46c48f",
		"ts": "2026-09-08T23:09:17.958Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117461225.54,
		"hash": "dc78ac46c48f9989268b4a44b1263532a28908b46b60e6330e85c08ec1b1ac0a"
	},
	{
		"id": "9f170bbc7e85",
		"ts": "2026-09-08T23:09:18.520Z",
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
		"liquidityUsd": 19217820.34,
		"hash": "9f170bbc7e853664b3214479cec21e3f6625ed2409519de2d6cf34580773af8a"
	},
	{
		"id": "d28320bd177d",
		"ts": "2026-09-08T23:09:18.791Z",
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
		"liquidityUsd": 988725.8,
		"hash": "d28320bd177d8fd0ba63c10fcf9125062fe81ad5471e72f58bd4c8508ad2d854"
	},
	{
		"id": "136539a8b63a",
		"ts": "2026-09-08T23:09:19.061Z",
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
		"liquidityUsd": 32765891.28,
		"hash": "136539a8b63aadab5805e7357cb929aa60906da85035d120fe37bf090ad863f6"
	},
	{
		"id": "126a51e5baa1",
		"ts": "2026-09-08T23:09:19.356Z",
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
		"liquidityUsd": 4424705.05,
		"hash": "126a51e5baa1b8aee0d1c1dbc6a99cff496d9197056ac5e324347f3b3e40b189"
	},
	{
		"id": "5a89888e3e48",
		"ts": "2026-09-08T23:09:19.608Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1206401.45,
		"hash": "5a89888e3e48414a8492ea605956358478af78d4af40f351637038c69135856c"
	},
	{
		"id": "a5360f17aa80",
		"ts": "2026-09-08T23:09:19.876Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 32765891.28,
		"hash": "a5360f17aa804050675c695213dd7b149d89bb6cfe237ce048084093833e756c"
	},
	{
		"id": "1185cbf787bd",
		"ts": "2026-09-08T23:09:20.126Z",
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
		"liquidityUsd": 2348051.98,
		"hash": "1185cbf787bde1b4e1e036af2bc68326e80e8da01f04c103287a05e517dceab1"
	},
	{
		"id": "2edaf75227a8",
		"ts": "2026-09-08T23:09:20.382Z",
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
		"liquidityUsd": 15094174.1,
		"hash": "2edaf75227a8414249c9c03457874f6304b4131344814a4eb61080d15c0cfabc"
	},
	{
		"id": "fb391b8c5a4b",
		"ts": "2026-09-08T23:09:20.649Z",
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
		"liquidityUsd": 294549.33,
		"hash": "fb391b8c5a4b27ab414d835b8b4651a3252b1a7cc2d476580479ab83a26df9b7"
	},
	{
		"id": "3f3994f8fc39",
		"ts": "2026-09-08T23:09:20.881Z",
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
		"liquidityUsd": 950768.13,
		"hash": "3f3994f8fc390605d4d11578445f74a196300ad3ae3cc8e5fc31d7fd3399d336"
	},
	{
		"id": "497c8a100777",
		"ts": "2026-09-08T23:09:21.130Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 646871.06,
		"hash": "497c8a1007775ed356398770c2563a266d2846260958f45a1d02f1822377de2a"
	},
	{
		"id": "bd5d1649efe3",
		"ts": "2026-09-08T23:09:21.363Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1674149.09,
		"hash": "bd5d1649efe3686559de10c89e1b43c61a53665e82c5699b741dfdea0771a850"
	},
	{
		"id": "3257a802fb8c",
		"ts": "2026-09-08T23:09:21.596Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 329604.61,
		"hash": "3257a802fb8c89a992094d260adb7fd91a9ad49402f170d1a4e20e29515d1346"
	},
	{
		"id": "735325636227",
		"ts": "2026-09-08T23:09:21.843Z",
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
		"liquidityUsd": 1508811.14,
		"hash": "735325636227e6c4666bbfd98046f3364d2fe182ac0bb7ac3fe85000d46a6749"
	},
	{
		"id": "9e209c6262eb",
		"ts": "2026-09-08T23:09:22.074Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3161621.39,
		"hash": "9e209c6262eba91e3b2d7e9e768c42a65257fb6fd87c8035b6d617374afa9d12"
	},
	{
		"id": "addbf8828b92",
		"ts": "2026-09-08T23:09:22.322Z",
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
		"liquidityUsd": 633341.54,
		"hash": "addbf8828b92c6df3344bb18ae4508f8d9a352b1011bf5ae72e42cb87fb9a0e0"
	},
	{
		"id": "5e245f287420",
		"ts": "2026-09-08T23:09:22.556Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 148661.05,
		"hash": "5e245f287420790448b36a14fc50c5d8013c63dbfeeff7d8ac860827dfd0cbe9"
	},
	{
		"id": "0180be720253",
		"ts": "2026-09-08T23:09:22.792Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 437123.89,
		"hash": "0180be720253488189103255de6bc5d0d8949a493bb41f142a06325f529e61d4"
	},
	{
		"id": "8142bcbb3f5b",
		"ts": "2026-09-08T20:39:21.734Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117345400.72,
		"hash": "8142bcbb3f5b42ed607803fcdf255e55b63ef26cdfce3fa5473716594fe7d09d"
	},
	{
		"id": "f6aad872161c",
		"ts": "2026-09-08T20:39:22.380Z",
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
		"liquidityUsd": 16934786.29,
		"hash": "f6aad872161c9785bfde14d8a890a41a09869546c08052f43e9a0830b64aefcb"
	},
	{
		"id": "6c4d80b6953f",
		"ts": "2026-09-08T20:39:22.848Z",
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
		"liquidityUsd": 987331.98,
		"hash": "6c4d80b6953fc83dbd371b825dafbffb6e212c72d5e6ec9dcf3d07c89172ebeb"
	},
	{
		"id": "38232ff99acc",
		"ts": "2026-09-08T20:39:23.293Z",
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
		"liquidityUsd": 32606281.9,
		"hash": "38232ff99acc1db57be5c1ce1a6b7ea263869354389e27826a1feddd2e9af1ad"
	},
	{
		"id": "d482cf06170d",
		"ts": "2026-09-08T20:39:23.547Z",
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
		"liquidityUsd": 4424331.8,
		"hash": "d482cf06170dd531be699bafa6bc3cc92cc335cdd110eeecf5dea0792020509b"
	},
	{
		"id": "10fb4d87595d",
		"ts": "2026-09-08T20:39:23.808Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1210121.62,
		"hash": "10fb4d87595dca3f8edf726d90f7112b9769e15f23b2d3f3d30e55649d75a53b"
	},
	{
		"id": "149111d92feb",
		"ts": "2026-09-08T20:39:24.097Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 32606281.9,
		"hash": "149111d92feb8b32625f83dcc26720692fc48f95883a227061e8dee0c0ce0236"
	},
	{
		"id": "47c2105c07cd",
		"ts": "2026-09-08T20:39:24.365Z",
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
		"liquidityUsd": 2342235.26,
		"hash": "47c2105c07cd639d0cce83d1992c5907c94fb043b2125fb37f807ae2b4aa2838"
	},
	{
		"id": "a29e478e1a0e",
		"ts": "2026-09-08T20:39:24.823Z",
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
		"liquidityUsd": 14769614.11,
		"hash": "a29e478e1a0e243ecf2603e07e3dc610dfb5395b6a83dff0a7e828ca559acc42"
	},
	{
		"id": "038a371828b3",
		"ts": "2026-09-08T20:39:25.080Z",
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
		"liquidityUsd": 296336.64,
		"hash": "038a371828b38e4ac2a00c2bedc35b960a28d1fff3a2f48a47f3118b86dbe476"
	},
	{
		"id": "6f091a106d3a",
		"ts": "2026-09-08T20:39:25.317Z",
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
		"liquidityUsd": 919466.67,
		"hash": "6f091a106d3a8fc1c9e4c48ab8f7d67711e604cdd2e65e53330f7fc020c337e6"
	},
	{
		"id": "f09c3169ca0e",
		"ts": "2026-09-08T20:39:25.553Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 325952.94,
		"hash": "f09c3169ca0ee13e7076f09a64da21a202d5c207d093ed2a7856c18c933ea9e6"
	},
	{
		"id": "544aebd2cf3d",
		"ts": "2026-09-08T20:39:25.788Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1574317.49,
		"hash": "544aebd2cf3d30ec4a48186dec04adef9d3740935bc014884dafd2fffc40830e"
	},
	{
		"id": "e7db2a5cd009",
		"ts": "2026-09-08T20:39:26.020Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 737259.9,
		"hash": "e7db2a5cd009353b3232fce912415f6c856a374ef1ba673c4068611cae4274d1"
	},
	{
		"id": "c375655a4182",
		"ts": "2026-09-08T20:39:26.253Z",
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
		"liquidityUsd": 1517062.58,
		"hash": "c375655a418272e43ae6d3b23c54d43ce44c4ada47d276aac2ba964be3ae498f"
	},
	{
		"id": "33fcfafe8db2",
		"ts": "2026-09-08T20:39:26.492Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3108765.2,
		"hash": "33fcfafe8db25359ec053f5093bb5bd79c34a59034ac599d6c8cdc6ef6020b07"
	},
	{
		"id": "6efbdc6bcadf",
		"ts": "2026-09-08T20:39:26.734Z",
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
		"liquidityUsd": 680595.76,
		"hash": "6efbdc6bcadf37a46c363a0a59c5d3a01ab47719e277469c2f648ba60a9142ff"
	},
	{
		"id": "b1ba6eed5568",
		"ts": "2026-09-08T20:39:26.973Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 179540.25,
		"hash": "b1ba6eed55687c690e54a9cdbf448aac675840d81077da0373a414bbd27ad865"
	},
	{
		"id": "130aad4fe8e4",
		"ts": "2026-09-08T20:39:27.211Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3137563.27,
		"hash": "130aad4fe8e448bd0b39d2f9c6f11837e3bc2427fbf62a339015c4f5386fcab7"
	},
	{
		"id": "1be723694271",
		"ts": "2026-09-08T17:43:20.441Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117558547.09,
		"hash": "1be7236942718e837fb1a7e307d4ffd2e61ab2ccf233d6820649fa2e57f46cbd"
	},
	{
		"id": "f63ea5ecf762",
		"ts": "2026-09-08T17:43:20.948Z",
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
		"liquidityUsd": 17820295.37,
		"hash": "f63ea5ecf762ac9bd75f3a3969ee51c4b055144d2ec29b98891dc495ab969adf"
	},
	{
		"id": "60e28cf7b984",
		"ts": "2026-09-08T17:43:21.209Z",
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
		"liquidityUsd": 986674.78,
		"hash": "60e28cf7b9841e4833948e67c4f578a476cf9466f3a617c205ad721d58914e63"
	},
	{
		"id": "7be752022396",
		"ts": "2026-09-08T17:43:21.683Z",
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
		"liquidityUsd": 32713305.52,
		"hash": "7be7520223969fdab2b8f9ba8e96b2d4b3e733c4b6109b9f7b2bf148127d9799"
	},
	{
		"id": "750cd73b39d4",
		"ts": "2026-09-08T17:43:21.953Z",
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
		"liquidityUsd": 4454753.21,
		"hash": "750cd73b39d4fe6cda4fe3c40854a39c2b3a2fd9963fa5659bafedd63f6d410d"
	},
	{
		"id": "e322896a99ce",
		"ts": "2026-09-08T17:43:22.229Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1214160.07,
		"hash": "e322896a99ce0b366ba1ecb8a1fd93fb69aae7266c9cfeb245f3ab90c47f0f74"
	},
	{
		"id": "ec584c79d48e",
		"ts": "2026-09-08T17:43:22.476Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 32713305.52,
		"hash": "ec584c79d48ec35bf958d40eb8f7db17597f64894f20e8a41d446196e6e1e072"
	},
	{
		"id": "507fc47efe61",
		"ts": "2026-09-08T17:43:22.733Z",
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
		"liquidityUsd": 2350114.11,
		"hash": "507fc47efe6198b2b824c04d195245d709ab181581a5edbe39dac32543239079"
	},
	{
		"id": "5b11d1ac5bce",
		"ts": "2026-09-08T17:43:23.199Z",
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
		"liquidityUsd": 14476697.81,
		"hash": "5b11d1ac5bce14f8213ebf98e4e960f6ff0b48a6b0b1950dec73c5645c23f722"
	},
	{
		"id": "210e4eaece1b",
		"ts": "2026-09-08T17:43:23.454Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 746887.21,
		"hash": "210e4eaece1b1d9c927a63ff01d4c4ec509a8f4bf1f8f28888c4b4c69d3e0f34"
	},
	{
		"id": "ff63cf5fa5ca",
		"ts": "2026-09-08T17:43:23.690Z",
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
		"liquidityUsd": 979663.01,
		"hash": "ff63cf5fa5ca9a600b5722db458643f9b2f1b529b8bd974f6294c99fcebf6c31"
	},
	{
		"id": "0cc803aed5e9",
		"ts": "2026-09-08T17:43:23.927Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 296374.66,
		"hash": "0cc803aed5e9728a7bbf1ba840944618f48ee54fc0d9ef78cc2a51c97365c7ef"
	},
	{
		"id": "aa5a652b831d",
		"ts": "2026-09-08T17:43:24.570Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1600225.5,
		"hash": "aa5a652b831db3f72c57b81cd462fc982402b7bc595190039496761b0e0499ad"
	},
	{
		"id": "bfd107946ff9",
		"ts": "2026-09-08T17:43:24.809Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3191155.28,
		"hash": "bfd107946ff931776ef1f12dc7365e6530f3d7c60ec0d9ebb990418fc5b85188"
	},
	{
		"id": "34b3d281b51f",
		"ts": "2026-09-08T17:43:25.044Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 298876.54,
		"hash": "34b3d281b51f4773d866146b9f41e0f34bdf70314e11084fbb01e0b1a18b26f5"
	},
	{
		"id": "5fd57dddafc2",
		"ts": "2026-09-08T17:43:25.389Z",
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
		"liquidityUsd": 1536170.17,
		"hash": "5fd57dddafc2c07ded2d78c6a74443205f54cc78632b231b661d89d3c89f11ea"
	},
	{
		"id": "146b4e47f8d9",
		"ts": "2026-09-08T17:43:25.628Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 190860.17,
		"hash": "146b4e47f8d9ef0bb2d1d7a5b3130bcd5e3c6ee059ceacecd3925106f6821237"
	},
	{
		"id": "815fd3e2f415",
		"ts": "2026-09-08T17:43:25.872Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 163771.92,
		"hash": "815fd3e2f4151f62d6c57e2ea97086494e7da534dd83108b17ff72f77e9ad475"
	},
	{
		"id": "19b8012598f7",
		"ts": "2026-09-08T17:43:26.104Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3317961.59,
		"hash": "19b8012598f7bef4d14b09d06369281c871437210769969b475e4ac7920bdb13"
	},
	{
		"id": "fa385cae38bc",
		"ts": "2026-09-08T13:16:33.263Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116986457.56,
		"hash": "fa385cae38bce64aef4457ddf2d2ad192490e7f27fee33d1eee261418833645e"
	},
	{
		"id": "ecb0076e898e",
		"ts": "2026-09-08T13:16:33.547Z",
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
		"liquidityUsd": 14398305.56,
		"hash": "ecb0076e898ecc32b469e97d3a377d145d3f02d0eb0c557bdc3cc88a61e4927c"
	},
	{
		"id": "7c09ca8f39a5",
		"ts": "2026-09-08T13:16:33.792Z",
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
		"liquidityUsd": 995592.58,
		"hash": "7c09ca8f39a5152538ae7e3310b5909acd07f24b7375137017d53b8efea6c6d3"
	},
	{
		"id": "7ad95d18f5b2",
		"ts": "2026-09-08T13:16:34.060Z",
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
		"liquidityUsd": 33392075.96,
		"hash": "7ad95d18f5b247d5f437aedf54c2bd641bb91afcd290cc570c91ed67bc68b0b4"
	},
	{
		"id": "6e474296aa56",
		"ts": "2026-09-08T13:16:34.314Z",
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
		"liquidityUsd": 4413953.07,
		"hash": "6e474296aa56287ac77dfa0c65a9068ffcd1b86332b4f4eebc5e204f8e2fd7d8"
	},
	{
		"id": "70624ded1708",
		"ts": "2026-09-08T13:16:34.558Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1203323.75,
		"hash": "70624ded1708085d084b86d4ccdc972e07b51d73c6e89d256918fb941d2347c3"
	},
	{
		"id": "f55db0d84929",
		"ts": "2026-09-08T13:16:34.791Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33392075.96,
		"hash": "f55db0d849298d86db8920d8346fb97ba023c14109bee7c0c04cc5623ba2b8e9"
	},
	{
		"id": "f7bafc0eb820",
		"ts": "2026-09-08T13:16:35.051Z",
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
		"liquidityUsd": 2333100.37,
		"hash": "f7bafc0eb82074572a6678c60a9df5fcebb491b8ba4b11951b553d1e44c3acd9"
	},
	{
		"id": "f56be752e3f4",
		"ts": "2026-09-08T13:16:35.313Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 729738.89,
		"hash": "f56be752e3f4a5c02f5226d724c5dce63e5799103b95b7e69c5659b98e3515a3"
	},
	{
		"id": "6bbb30aff4cd",
		"ts": "2026-09-08T13:16:35.577Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 957832.17,
		"hash": "6bbb30aff4cd0f1eda5c6f8e913cbe4604a6930339efade3c5808fb6e3b78352"
	},
	{
		"id": "ad802bb3873c",
		"ts": "2026-09-08T13:16:35.808Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1586686.18,
		"hash": "ad802bb3873c11813d03fd5515ad3a944383215722ce51b8f6a224fa4b51beea"
	},
	{
		"id": "78d90629cec9",
		"ts": "2026-09-08T13:16:36.056Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 300419.8,
		"hash": "78d90629cec974fec734670595ceeeca4fc345eab06261f1be1717a6cd86f47f"
	},
	{
		"id": "8e4f9bd7b3f0",
		"ts": "2026-09-08T13:16:36.300Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3182590.84,
		"hash": "8e4f9bd7b3f0b4d2f80899150fe53942f359f7b1dad5cc59c241f613f964be99"
	},
	{
		"id": "96743211fa29",
		"ts": "2026-09-08T13:16:36.539Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13867265.25,
		"hash": "96743211fa29aad2760c5e78a7469abd8a3148871b81c71ca2761e25d3a621ca"
	},
	{
		"id": "752b63e2d2f5",
		"ts": "2026-09-08T13:16:36.774Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 194507.89,
		"hash": "752b63e2d2f5ec912bd1a019c197800dcc0e371eb470019bac620f4d586f2888"
	},
	{
		"id": "cf79a8106886",
		"ts": "2026-09-08T13:16:37.003Z",
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
		"liquidityUsd": 1433174.02,
		"hash": "cf79a8106886a0d77e723803d4aa2bf3879e87e9d79566d8705aee7504fca3ce"
	},
	{
		"id": "124a145b2a43",
		"ts": "2026-09-08T13:16:37.249Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 277087.49,
		"hash": "124a145b2a43a53462da8116c8ca1ab9ee1fcf0b6281ad60d83e5273005b14d3"
	},
	{
		"id": "8769fc01d563",
		"ts": "2026-09-08T13:16:37.491Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 171928.12,
		"hash": "8769fc01d5630fc1e89c47191d8baec1774b9bba965739c0985df9df5c711f98"
	},
	{
		"id": "cc2424e77781",
		"ts": "2026-09-08T13:16:37.734Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4266458.17,
		"hash": "cc2424e77781e8ebbdf7a586b915f614db02faed84aead2b43b6dbf8bb4340d3"
	},
	{
		"id": "b39c9d119125",
		"ts": "2026-09-08T08:32:46.830Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116725440.63,
		"hash": "b39c9d11912588aff8332c5363c98d495afc4221e158ea135ba30d38eca30f63"
	},
	{
		"id": "c9e92a314125",
		"ts": "2026-09-08T08:32:47.278Z",
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
		"liquidityUsd": 19228827.29,
		"hash": "c9e92a314125106b9cf7ed2b172524814fa1121541d230f9b11ef0b40979c634"
	},
	{
		"id": "45d46503bb65",
		"ts": "2026-09-08T08:32:47.546Z",
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
		"liquidityUsd": 1003298.73,
		"hash": "45d46503bb6566d8cdb2b3724f93d61265539db1b5dfe8c7f4b010521baa2cd2"
	},
	{
		"id": "c8369b8c70ef",
		"ts": "2026-09-08T08:32:47.786Z",
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
		"liquidityUsd": 33274430.13,
		"hash": "c8369b8c70ef808836b200a1aabedee8d6514cccdf732efb2fffabfdd975054e"
	},
	{
		"id": "7a55cee50b2f",
		"ts": "2026-09-08T08:32:48.054Z",
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
		"liquidityUsd": 4347149.36,
		"hash": "7a55cee50b2f9eb359eb776674512591c51552c3a7a9bc6e94c2ba42b1b77a60"
	},
	{
		"id": "6f9a6739d0de",
		"ts": "2026-09-08T08:32:48.298Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1194270,
		"hash": "6f9a6739d0de852d7c6be558d36bbe183d90f293ded0c7949da8e09dfbe0c31d"
	},
	{
		"id": "eceaf4bd6a73",
		"ts": "2026-09-08T08:32:48.554Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33246439.19,
		"hash": "eceaf4bd6a73ef9f90b1a739ac2ec9a7321c7e39afbe0977ca6cf1577d42a003"
	},
	{
		"id": "93f99a5aea15",
		"ts": "2026-09-08T08:32:48.859Z",
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
		"liquidityUsd": 2335240.59,
		"hash": "93f99a5aea154231b0140bf5cae278e5a1c80ea43c063c3ef9c69039dce0508d"
	},
	{
		"id": "613e95985d38",
		"ts": "2026-09-08T08:32:49.320Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 965043.77,
		"hash": "613e95985d380d893b4d13f28a4e571c9a5a671d35c3a4e4627e9f980e214783"
	},
	{
		"id": "e8ab574f05a4",
		"ts": "2026-09-08T08:32:49.563Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 868672.58,
		"hash": "e8ab574f05a4c5d79ed3333199169657301e6a1a445c8e3051f9b372f8b9f687"
	},
	{
		"id": "2471cb43c80b",
		"ts": "2026-09-08T08:32:49.787Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1636857.27,
		"hash": "2471cb43c80bb143ba8db495d1fb9474b414e6e96db941e50e7022d6b6f5e6c0"
	},
	{
		"id": "c399f2115a5d",
		"ts": "2026-09-08T08:32:50.006Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 199043.39,
		"hash": "c399f2115a5d1e33b4cec7b79580660628501cd79fa357247f7fbb5087776076"
	},
	{
		"id": "f734853c9700",
		"ts": "2026-09-08T08:32:50.225Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 300685.07,
		"hash": "f734853c9700a21f0bbedae88a022e21941e10e3aba9fe1f79850591d6588a58"
	},
	{
		"id": "4ec899d6121d",
		"ts": "2026-09-08T08:32:50.446Z",
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
		"liquidityUsd": 13347631.8,
		"hash": "4ec899d6121d4967566fe942303d8b77ea61e40908da0b9db2bf7972a6a1947f"
	},
	{
		"id": "f70c96702a1c",
		"ts": "2026-09-08T08:32:50.675Z",
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
		"liquidityUsd": 1402824.92,
		"hash": "f70c96702a1cb44061f1c35eaca79974c608e9ab874b5ea8f93f2f8140d21f63"
	},
	{
		"id": "49f52b141fef",
		"ts": "2026-09-08T08:32:50.899Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3159871.98,
		"hash": "49f52b141feffa9e3e9620bf8f0d488792f2702dc990cda6a6cc416758e88503"
	},
	{
		"id": "4b4738d8e53d",
		"ts": "2026-09-08T08:32:51.118Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 196901.7,
		"hash": "4b4738d8e53d275a1325e9bc9dfad1abacf852035f923604fde1f6afa3611b60"
	},
	{
		"id": "c3bcbbca6711",
		"ts": "2026-09-08T08:32:51.338Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4233092.5,
		"hash": "c3bcbbca671180b5d5c51940d704bc6bb1095d33c665cb38abbd2b0c5f96ed35"
	},
	{
		"id": "f6afcbdae609",
		"ts": "2026-09-08T08:32:51.557Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 279410.51,
		"hash": "f6afcbdae6094e3114490e4eedc38c51ff9635c71c7ff50d6a602111739b55b6"
	},
	{
		"id": "b617d5713c30",
		"ts": "2026-09-08T03:21:26.451Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117025537.86,
		"hash": "b617d5713c300901d71d45e310b62ed93143d366c7c18245072f28614dddc4ea"
	},
	{
		"id": "4dc03669133a",
		"ts": "2026-09-08T03:21:26.714Z",
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
		"liquidityUsd": 20420852.03,
		"hash": "4dc03669133aeaeba314b5bbcd871b07f46d3a143c9987de3684fad22cb89095"
	},
	{
		"id": "1680489ea6f2",
		"ts": "2026-09-08T03:21:26.975Z",
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
		"liquidityUsd": 1012970.55,
		"hash": "1680489ea6f2f5a0117ce8d2184b78c3466f2b85fc988a10294a1ca0de4a5ff1"
	},
	{
		"id": "a74901264e7e",
		"ts": "2026-09-08T03:21:27.239Z",
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
		"liquidityUsd": 33738218.19,
		"hash": "a74901264e7ecb93f5f6d135d883db7dd85068f5618c063b31257586150290da"
	},
	{
		"id": "846bfda9981b",
		"ts": "2026-09-08T03:21:27.474Z",
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
		"liquidityUsd": 4408513.83,
		"hash": "846bfda9981bb0bd0bdd2d126c7b89dc9fad27d89bcc322633867ce334471525"
	},
	{
		"id": "989938426de2",
		"ts": "2026-09-08T03:21:27.726Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1202086.87,
		"hash": "989938426de2fe92d0ae0c87549a5f129608b05a5cdb2831859019b274778ffd"
	},
	{
		"id": "e0bb4ca54f84",
		"ts": "2026-09-08T03:21:27.971Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33738218.19,
		"hash": "e0bb4ca54f84504a89e5f99f74a045f18c2cb5749a6cb889795d5091153b9caa"
	},
	{
		"id": "0e8fe1fe18d9",
		"ts": "2026-09-08T03:21:28.318Z",
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
		"liquidityUsd": 2344071.16,
		"hash": "0e8fe1fe18d9ead2218bdf761cc9d059c8b79d6dc88ad1e716da1f313b3650aa"
	},
	{
		"id": "fb2c1cea272c",
		"ts": "2026-09-08T03:21:28.570Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 950128.12,
		"hash": "fb2c1cea272c05e373b42cb52afc190e45ad0163d8a3fe0e60b8215923f2bf61"
	},
	{
		"id": "448b8b79a34d",
		"ts": "2026-09-08T03:21:28.816Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1006987.91,
		"hash": "448b8b79a34d387c6d431d8f220942054d2f1e3179823c7f3832811f0f486336"
	},
	{
		"id": "e914b5078c55",
		"ts": "2026-09-08T03:21:29.039Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1689826.62,
		"hash": "e914b5078c55c7dfebab66fe1b9488e2ead6d110f7191df276d374b61a646a42"
	},
	{
		"id": "d9e783e7de79",
		"ts": "2026-09-08T03:21:29.263Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 230098.47,
		"hash": "d9e783e7de799640633feebbebc900a3029d8c219bf3267466e241c29476fa79"
	},
	{
		"id": "71b5e7b462e5",
		"ts": "2026-09-08T03:21:29.485Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 286863.97,
		"hash": "71b5e7b462e570e9441e24faf746d700f971ac009f803cfffd2bcc6c7fa93d8b"
	},
	{
		"id": "e159af4f66db",
		"ts": "2026-09-08T03:21:29.709Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3308235.71,
		"hash": "e159af4f66db20ec7264b2364cef338dfdca5c9ff818ce0f85b6c59fab500566"
	},
	{
		"id": "d7ce38523b44",
		"ts": "2026-09-08T03:21:29.947Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13579663.28,
		"hash": "d7ce38523b445771a20967290c1c2781c79afe01210e346ff1bc7a7cac5efead"
	},
	{
		"id": "4f199afe7857",
		"ts": "2026-09-08T03:21:30.169Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 212670.62,
		"hash": "4f199afe7857d1437276023da7749a42d1ff18fe396abc69c5dc3e2c632aed8d"
	},
	{
		"id": "5e9af14affb6",
		"ts": "2026-09-08T03:21:30.387Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4214639.22,
		"hash": "5e9af14affb6e583a2f106610d5ef4b936be200ba05364302fa6c452535e39b1"
	},
	{
		"id": "9060ab9916f8",
		"ts": "2026-09-08T03:21:30.610Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1433661.67,
		"hash": "9060ab9916f89dc4cf1b9cc6c3afbbe7776f4b1a80ff81e5658d5bc442feb260"
	},
	{
		"id": "1ece77c9c522",
		"ts": "2026-09-08T03:21:30.828Z",
		"symbol": "LAPTOP",
		"token": "0x4FB636434b05C5dbcf0070f2e810f8E706277b07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5009424.76,
		"hash": "1ece77c9c5225247d4eba82f8082f9427143c0522522430de5e992c4a58540ae"
	},
	{
		"id": "5053ee8c6cac",
		"ts": "2026-09-07T23:56:48.875Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117256384.92,
		"hash": "5053ee8c6cacd6ca148593d80182c0ed22899b82166c5be149e8f56bd18f150c"
	},
	{
		"id": "c13271413996",
		"ts": "2026-09-07T23:56:49.591Z",
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
		"liquidityUsd": 20657046.67,
		"hash": "c13271413996f65d98c8854db9ac2453d074a9cc71689b6f4b5c67bd1eae39da"
	},
	{
		"id": "504e4bd2aed7",
		"ts": "2026-09-07T23:56:50.133Z",
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
		"liquidityUsd": 1018424.83,
		"hash": "504e4bd2aed739f8fa51326570ef6e61971f384d9533e93f3e9bed9f689e1da1"
	},
	{
		"id": "e4f799cb5a7d",
		"ts": "2026-09-07T23:56:50.586Z",
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
		"liquidityUsd": 32829186.71,
		"hash": "e4f799cb5a7db23540dd94873165b4954df4ec4b4337289ace12a22123bc60d9"
	},
	{
		"id": "e8d60577db2f",
		"ts": "2026-09-07T23:56:50.822Z",
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
		"liquidityUsd": 4387728.98,
		"hash": "e8d60577db2f5b35a8e806a6b31a1a6d8999d3051e3fcfbbab9c3628f47c21ab"
	},
	{
		"id": "e6125dc127dc",
		"ts": "2026-09-07T23:56:51.065Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1205973.81,
		"hash": "e6125dc127dc16afd88ef80eeb87dfe59cc30a04769817afb3955525f1fe7a05"
	},
	{
		"id": "a5ffc82ca6ee",
		"ts": "2026-09-07T23:56:51.308Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 32829186.71,
		"hash": "a5ffc82ca6ee890e7daf1421adcea386a87c7e9e92f6790ff681aa98364bb2f1"
	},
	{
		"id": "5f8d56a2af5d",
		"ts": "2026-09-07T23:56:51.625Z",
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
		"liquidityUsd": 2353868.08,
		"hash": "5f8d56a2af5d51f04213b0cd61b654e95db644d82766ef336b2b8228b8adc530"
	},
	{
		"id": "526abf2bee1f",
		"ts": "2026-09-07T23:56:51.884Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 955485.67,
		"hash": "526abf2bee1febe0a196dc59ba88e8b863632634d4c4a3e4469c307efd9ae2d6"
	},
	{
		"id": "824badc95202",
		"ts": "2026-09-07T23:56:52.569Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 965558.28,
		"hash": "824badc952026946022b969495c94efb10f3a36d7e0d0c6d269d2485ae63dc73"
	},
	{
		"id": "04bccf8a6c0d",
		"ts": "2026-09-07T23:56:52.794Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1670452.21,
		"hash": "04bccf8a6c0d9aab66dce680b231d4a5567f56a6a6686a20beb0c937f70c7c11"
	},
	{
		"id": "8d2632943d46",
		"ts": "2026-09-07T23:56:53.014Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 177913.41,
		"hash": "8d2632943d46e10d2d3641431c6f49dfe95481229ce4f99bea719094b90cc010"
	},
	{
		"id": "acdc52264f69",
		"ts": "2026-09-07T23:56:53.238Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3306550.33,
		"hash": "acdc52264f6916c6dbd20a7f2c84c65b82cbc1f22a1c6f61945ed1a3e71377ba"
	},
	{
		"id": "4238d223f505",
		"ts": "2026-09-07T23:56:53.456Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 298543.67,
		"hash": "4238d223f50594d89eeb5df957f15d10d6b14fb60863667e698fff1ea5caf4b2"
	},
	{
		"id": "b0b9a673940f",
		"ts": "2026-09-07T23:56:53.676Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13636850.68,
		"hash": "b0b9a673940f09c65d8a37aa45b049cbc679954fd838b63cec4fec16500fe9a8"
	},
	{
		"id": "cf32c620beb2",
		"ts": "2026-09-07T23:56:53.898Z",
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
		"liquidityUsd": 1458656.49,
		"hash": "cf32c620beb2e89e38f3e5dd778daf73023b1a65dd890cfe52f999423cef9d63"
	},
	{
		"id": "f8be1ae3c218",
		"ts": "2026-09-07T23:56:54.125Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 183385.25,
		"hash": "f8be1ae3c218aec8a1f15b74addd5ffbb923a379b91fec63c81f8425e8024164"
	},
	{
		"id": "7d3d6650d28c",
		"ts": "2026-09-07T23:56:54.352Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4210247.81,
		"hash": "7d3d6650d28ceb0e176990596cc3a50462470e4af8a9f1965d92c05e96fcb655"
	},
	{
		"id": "c2b1bfa76e83",
		"ts": "2026-09-07T23:56:54.583Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1170119.35,
		"hash": "c2b1bfa76e83f02793fa26d8ff1aa10e9a70c3889e25963f7859874b844d591c"
	},
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
	}
]
