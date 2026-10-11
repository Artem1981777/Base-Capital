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
	"updatedAt": "2026-10-11T20:45:56.103Z",
	"tokensScored": 19968,
	"verdictsIssued": 19968,
	"safe": 17017,
	"risky": 1424,
	"likelyRug": 1527,
	"ticks": 1131
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "f7d0764fac9c",
		"ts": "2026-10-11T20:45:50.596Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 149647745.33,
		"hash": "f7d0764fac9c88edd0fdf363d7498c6bf0072ee5d136a6716fa280ffd63d55c5"
	},
	{
		"id": "52f58a6af170",
		"ts": "2026-10-11T20:45:51.398Z",
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
		"liquidityUsd": 18496198.49,
		"hash": "52f58a6af170affe7742407ad18b3f3be4f5aa9abda8f98e27135030a0d27d53"
	},
	{
		"id": "ec3d5bab2e17",
		"ts": "2026-10-11T20:45:51.748Z",
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
		"liquidityUsd": 814198.53,
		"hash": "ec3d5bab2e17fd698a82410f418eb1de7fc200c6cde9f96bcf1710cf2236e31f"
	},
	{
		"id": "f9d9cf17cf3f",
		"ts": "2026-10-11T20:45:52.047Z",
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
		"liquidityUsd": 42821796.15,
		"hash": "f9d9cf17cf3f685ad6ada048fd7fbfef17fca2c8ae1f07b370eb7108f36f8624"
	},
	{
		"id": "cfdcf3df2435",
		"ts": "2026-10-11T20:45:52.347Z",
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
		"liquidityUsd": 4970720.72,
		"hash": "cfdcf3df2435f0ad2d7e236d16c11441a9b9da5adafcc9aa4adc5f736a0b8350"
	},
	{
		"id": "431a1d333628",
		"ts": "2026-10-11T20:45:52.652Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1271098.36,
		"hash": "431a1d3336282a4569f520e9afff14b1b0e8691665bbdd2fe6ecdcc1b364ff93"
	},
	{
		"id": "7f04c07ea2d5",
		"ts": "2026-10-11T20:45:52.946Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42821796.15,
		"hash": "7f04c07ea2d5fa29c861d27bd404259ed3ed8cf82dd88effa4b12dc37f94e165"
	},
	{
		"id": "da4862d6ad74",
		"ts": "2026-10-11T20:45:53.270Z",
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
		"liquidityUsd": 2300844.95,
		"hash": "da4862d6ad74cbaad9a11376010e7bb11e5a56b4994e48c33fb2e803887515a6"
	},
	{
		"id": "c680129c601d",
		"ts": "2026-10-11T20:45:53.575Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1952461.78,
		"hash": "c680129c601d1f4b94984647b2d5d2da7b2a163eb7c51c20f4e54a15bb771f4a"
	},
	{
		"id": "87b043812df5",
		"ts": "2026-10-11T20:45:53.874Z",
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
		"liquidityUsd": 16355782.53,
		"hash": "87b043812df5e05ab121dcdfa2b010b813a5d86598e75e13af90e5129be6a8f1"
	},
	{
		"id": "d6c8014c096b",
		"ts": "2026-10-11T20:45:54.170Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2274819.37,
		"hash": "d6c8014c096bad97382c768eeb44c7c06a84693d17912ca66150cdae4b3382e5"
	},
	{
		"id": "56ad8d391704",
		"ts": "2026-10-11T20:45:54.466Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 5341147.63,
		"hash": "56ad8d39170400f8cd3f49ed341d6d723f59f861f6964e79c448f541c50557f7"
	},
	{
		"id": "39ee2a3c6619",
		"ts": "2026-10-11T20:45:54.746Z",
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
		"liquidityUsd": 597775,
		"hash": "39ee2a3c66190b31573ed860a0eb6a891c6ecf5cb49f3632540fa71074deb07b"
	},
	{
		"id": "a269709062ef",
		"ts": "2026-10-11T20:45:55.031Z",
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
		"liquidityUsd": 354869.31,
		"hash": "a269709062efc6ef2eb200ffa9bc1dff990e2ff6fbe0ea34c3f5d604c624b24c"
	},
	{
		"id": "dca0d3d46b19",
		"ts": "2026-10-11T20:45:55.311Z",
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
		"liquidityUsd": 3327742.92,
		"hash": "dca0d3d46b19a5ff96678604afbc1c9e08e7b7427e50618694d8af95f26346bc"
	},
	{
		"id": "96291db97ae5",
		"ts": "2026-10-11T20:45:55.591Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 193311.19,
		"hash": "96291db97ae592e8c5a1b8e0e816c3d336f7de8b0b342a445c7febcd97dd915f"
	},
	{
		"id": "94ba96cdddde",
		"ts": "2026-10-11T20:45:55.823Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 592907.26,
		"hash": "94ba96cdddded8c60fcf0c0d1aa89dab67306826b9a32100086c6b03df962f51"
	},
	{
		"id": "8f1be3cfdd4f",
		"ts": "2026-10-11T20:45:56.102Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1575808.1,
		"hash": "8f1be3cfdd4f1cca225aa44e1ae35c2f807cce3f7cc5bb408e86a09e2bc1e57b"
	},
	{
		"id": "f210b17f6222",
		"ts": "2026-10-11T16:30:42.728Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 149762163.66,
		"hash": "f210b17f6222660057b9d82afa1ff2dfc6c69d737616e7a20dc12b7c08b9d1cb"
	},
	{
		"id": "f39b005dfcdc",
		"ts": "2026-10-11T16:30:42.999Z",
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
		"liquidityUsd": 18457715.62,
		"hash": "f39b005dfcdcad464a14afe22bdea4dae49d1cfae4b9c3f849edb01153de4df4"
	},
	{
		"id": "915cbcb205c3",
		"ts": "2026-10-11T16:30:43.264Z",
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
		"liquidityUsd": 814949.96,
		"hash": "915cbcb205c3f79d88e3f6bda8b55e1361bdf7a5a98ce93c3e08738242604d47"
	},
	{
		"id": "dcdc2f7f4aba",
		"ts": "2026-10-11T16:30:43.752Z",
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
		"liquidityUsd": 44316413.87,
		"hash": "dcdc2f7f4aba3294ea678f0eee2906eb523aed7d969525941d2e1f1e350c3104"
	},
	{
		"id": "87dd5c24f478",
		"ts": "2026-10-11T16:30:44.032Z",
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
		"liquidityUsd": 4989540.12,
		"hash": "87dd5c24f4786e9340dca12e58b2a096f229e505657f91d28ebdeee9b2fe268b"
	},
	{
		"id": "019558ed76f8",
		"ts": "2026-10-11T16:30:44.291Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1280111.96,
		"hash": "019558ed76f8e7a9db94179ce7a3dab6d8fc99edfafb40e14992bee74a182661"
	},
	{
		"id": "b60c076866cd",
		"ts": "2026-10-11T16:30:44.545Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 44316413.87,
		"hash": "b60c076866cd09d51cace936b56a8937ac9009964a663cde344c3e268f086015"
	},
	{
		"id": "b5680c97f2e3",
		"ts": "2026-10-11T16:30:44.823Z",
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
		"liquidityUsd": 2298832.6,
		"hash": "b5680c97f2e313c5a1e668605c15ed3f18142998b421eabfabfa817b72a82a08"
	},
	{
		"id": "54a64e9bb36c",
		"ts": "2026-10-11T16:30:45.104Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1980197.14,
		"hash": "54a64e9bb36cd8b6cb597d11f73508e08dce20f578835d798fca9d45a75f2081"
	},
	{
		"id": "0fb4e6466dcf",
		"ts": "2026-10-11T16:30:45.372Z",
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
		"liquidityUsd": 16225258.79,
		"hash": "0fb4e6466dcf26c745f0cdeeaa206399efb00bbf691622509619bb5492362955"
	},
	{
		"id": "ce0af345b917",
		"ts": "2026-10-11T16:30:45.615Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 5282159.63,
		"hash": "ce0af345b91755239d158f347ae752393a8e99133f607752063c019ffbe57890"
	},
	{
		"id": "a72a9fff444a",
		"ts": "2026-10-11T16:30:45.862Z",
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
		"liquidityUsd": 600931.86,
		"hash": "a72a9fff444a19f00afc9d9490f3c1911b22cf56ea2c293c6205bc66ec28027c"
	},
	{
		"id": "5038c70d1d91",
		"ts": "2026-10-11T16:30:46.113Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4010845.21,
		"hash": "5038c70d1d911c1f4c64701457454d771776c72f7dcced53398a9bc7f2f707f0"
	},
	{
		"id": "44d6c342eda1",
		"ts": "2026-10-11T16:30:46.372Z",
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
		"liquidityUsd": 1292820.82,
		"hash": "44d6c342eda1d35e6e3fab139a65d46c0b04c1e4fe7e373496e7ef9949a7da8f"
	},
	{
		"id": "54545619130d",
		"ts": "2026-10-11T16:30:46.615Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 589943.77,
		"hash": "54545619130d9201d168895fae392219fa1df6da36ce603399a61d1efab34e31"
	},
	{
		"id": "d9293fc04557",
		"ts": "2026-10-11T16:30:46.855Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 150971.33,
		"hash": "d9293fc04557805f904428a8a6f08d221e8ef19750eb55aa820020628fc3abb5"
	},
	{
		"id": "9472a131568e",
		"ts": "2026-10-11T16:30:47.094Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2261396.18,
		"hash": "9472a131568ef3e7516771fe7c2f5c1931a13dab8742116b3752b1ab07d69007"
	},
	{
		"id": "10e40bb09afb",
		"ts": "2026-10-11T16:30:47.333Z",
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
		"liquidityUsd": 378190.63,
		"hash": "10e40bb09afb7656c8edfe469f5c2f70f212986e8c652c55d8c08467d55ab08c"
	},
	{
		"id": "32aa6ef953bf",
		"ts": "2026-10-11T10:33:22.013Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 148651118.2,
		"hash": "32aa6ef953bf92a0510ed78cf5b409868a1427c8a64ae0de6efc62e886582684"
	},
	{
		"id": "5c7776d396a9",
		"ts": "2026-10-11T10:33:22.652Z",
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
		"liquidityUsd": 18236706.22,
		"hash": "5c7776d396a988f4f953cab99c094787c51708fb874db41a417153664f34213d"
	},
	{
		"id": "70e89d710902",
		"ts": "2026-10-11T10:33:22.898Z",
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
		"liquidityUsd": 807023.9,
		"hash": "70e89d7109020e8d82835a03ed04afb06bcead0e7bdfa52a904a74e66b17cfb1"
	},
	{
		"id": "4ed583013319",
		"ts": "2026-10-11T10:33:23.137Z",
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
		"liquidityUsd": 44024520.12,
		"hash": "4ed5830133191854cfbc9b5e29cac8302cd42bc780e93334789ffd8baf0cfe9b"
	},
	{
		"id": "47f05f72d7cd",
		"ts": "2026-10-11T10:33:23.569Z",
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
		"liquidityUsd": 4885735.83,
		"hash": "47f05f72d7cdfd9d92ddd38ca9f5eeed5de4761e970b25724c22d5a784d62ea0"
	},
	{
		"id": "9636b8ff29ce",
		"ts": "2026-10-11T10:33:23.815Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1256262.77,
		"hash": "9636b8ff29ce16ea8d09dcca060d940c75e5a4cba61f3017ba6167c0e7006223"
	},
	{
		"id": "1ed12b98fd7e",
		"ts": "2026-10-11T10:33:24.052Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 44024520.12,
		"hash": "1ed12b98fd7e29d2a4556c8dff2bde369311d266624431cb273eca46e19993a6"
	},
	{
		"id": "a2bdf0a75af8",
		"ts": "2026-10-11T10:33:24.289Z",
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
		"liquidityUsd": 2324933.71,
		"hash": "a2bdf0a75af80144c245177312bd2a2b54927e1b182e3fa6abce7a59b95ce7ff"
	},
	{
		"id": "c8d2b0f6dd51",
		"ts": "2026-10-11T10:33:24.526Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2020337.75,
		"hash": "c8d2b0f6dd5188c87cedf26ae240dd7de888f1c118e5358580eed64e480a84bd"
	},
	{
		"id": "020c8bda4871",
		"ts": "2026-10-11T10:33:24.813Z",
		"symbol": "Paper",
		"token": "0x5F8FC6a725De67e74ec489819D8848C1545aAb07",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 7072091.13,
		"hash": "020c8bda4871c2f0dbab262dfe7d22a756307f80366d42883835fb358184e924"
	},
	{
		"id": "bd1d13ae6e07",
		"ts": "2026-10-11T10:33:25.053Z",
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
		"liquidityUsd": 1253921.14,
		"hash": "bd1d13ae6e07465eecaeede30e57106b7f3432faf4d24e2ce9cb6b3baa086ed3"
	},
	{
		"id": "75cc5829215e",
		"ts": "2026-10-11T10:33:25.275Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 5239039.22,
		"hash": "75cc5829215ebbc4da27fd6055b3d38a5d8f4447322aa7f8b61bb2c5005414c7"
	},
	{
		"id": "7055e2c81e06",
		"ts": "2026-10-11T10:33:25.504Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4039019.97,
		"hash": "7055e2c81e0601a8f65f84cfda4eeb90964d9e36d14be3af2a3fc4d7e5b7b6f4"
	},
	{
		"id": "ff9605efd458",
		"ts": "2026-10-11T10:33:25.726Z",
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
		"liquidityUsd": 15461562.36,
		"hash": "ff9605efd458eff6d4064b2d79df5fbe641b4b1c4c6dfb6bd605a2b6e6029eee"
	},
	{
		"id": "ddfdce35d654",
		"ts": "2026-10-11T10:33:25.948Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 583970.79,
		"hash": "ddfdce35d654372f55f90b0a1c230f3bcd0be1314d3027ff9e2770da79d16b07"
	},
	{
		"id": "0a00014c3d96",
		"ts": "2026-10-11T10:33:26.173Z",
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
		"liquidityUsd": 544421.2,
		"hash": "0a00014c3d96f1948c75b210a81a2bf26984c888f923207d6bbb8883934e91ce"
	},
	{
		"id": "23dc2d24c03a",
		"ts": "2026-10-11T10:33:26.394Z",
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
		"liquidityUsd": 352484.42,
		"hash": "23dc2d24c03a522d70d38bf134ddd52fc63c0bdcbdbcb3bd6fa977ee461062aa"
	},
	{
		"id": "f0f98f7be4be",
		"ts": "2026-10-11T10:33:26.617Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 151545.35,
		"hash": "f0f98f7be4bea7e4f1209e51f4f5545afe32990001241e155616f785e79e44d5"
	},
	{
		"id": "0cd9523b3b3b",
		"ts": "2026-10-11T03:44:54.067Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 148684950.07,
		"hash": "0cd9523b3b3b3f61b573f9fdd153a46eb49eaf6ada6871efce32d06e7798242f"
	},
	{
		"id": "138a78e92d29",
		"ts": "2026-10-11T03:44:54.295Z",
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
		"liquidityUsd": 18244478.51,
		"hash": "138a78e92d29de9a73fed84818ccc54358bb87d63c3ecc31189b036d5e6ada56"
	},
	{
		"id": "c1b3b673e147",
		"ts": "2026-10-11T03:44:54.504Z",
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
		"liquidityUsd": 810918.47,
		"hash": "c1b3b673e147a928162de03921bd9c15f32b0d58925a13b81a83b8e64f1665fb"
	},
	{
		"id": "3a5346b81e7b",
		"ts": "2026-10-11T03:44:54.713Z",
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
		"liquidityUsd": 48118433.58,
		"hash": "3a5346b81e7b7dc6b88b2978397b443f24801b3af536d48c4e6394aa486380f9"
	},
	{
		"id": "87d76e7a8004",
		"ts": "2026-10-11T03:44:54.919Z",
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
		"liquidityUsd": 4896485.22,
		"hash": "87d76e7a80045518716104a727eaf968daba1c4a536fc3620557ba9c80f4a0b1"
	},
	{
		"id": "7a436c1c5043",
		"ts": "2026-10-11T03:44:55.122Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1268450.98,
		"hash": "7a436c1c5043cf9d0584fc6d9484565c861a5ba5e1d4ab5cae4ebb7bd9f30947"
	},
	{
		"id": "22ee98edc245",
		"ts": "2026-10-11T03:44:55.339Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 48118432.84,
		"hash": "22ee98edc2453baf661f4e7f43462b3e38d64a186b32d32c62a307bfcf453a2d"
	},
	{
		"id": "2c2e91b49035",
		"ts": "2026-10-11T03:44:55.556Z",
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
		"liquidityUsd": 2302778.98,
		"hash": "2c2e91b490351d207a5eb925b907b7e214bd39518df91f297baff99f37022bd1"
	},
	{
		"id": "05b30da746ab",
		"ts": "2026-10-11T03:44:55.763Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2060625.56,
		"hash": "05b30da746aba2e045a74845dc1682ec578e356c047085f4cc1131562faad95a"
	},
	{
		"id": "b7be879798bb",
		"ts": "2026-10-11T03:44:55.969Z",
		"symbol": "Paper",
		"token": "0x5F8FC6a725De67e74ec489819D8848C1545aAb07",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 7072090.95,
		"hash": "b7be879798bbd82556c20361e1cb6d855341838d1a0a1bd30c3371096f0e54f6"
	},
	{
		"id": "e7abf242e7ed",
		"ts": "2026-10-11T03:44:56.166Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4051379.3,
		"hash": "e7abf242e7ed3c67caa5cce564b658fd63133573d02c628907cb9e9e289277f8"
	},
	{
		"id": "19a87607eb3a",
		"ts": "2026-10-11T03:44:56.365Z",
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
		"liquidityUsd": 1269071.16,
		"hash": "19a87607eb3a1593f9ea040934b7ec03325cc29ead38eb63fbbee17baa55b314"
	},
	{
		"id": "f2d9794d611a",
		"ts": "2026-10-11T03:44:56.556Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 5337951.03,
		"hash": "f2d9794d611aedec9a8edec468ee85418e3694689eabcc57af8c09961916afa2"
	},
	{
		"id": "43087f117ddd",
		"ts": "2026-10-11T03:44:56.773Z",
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
		"liquidityUsd": 353414.08,
		"hash": "43087f117ddd66c9fc93e1045e9b56b009e27e33571d30457cc2053443d6ad67"
	},
	{
		"id": "4cbe645abd4a",
		"ts": "2026-10-11T03:44:56.963Z",
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
		"liquidityUsd": 15537934.77,
		"hash": "4cbe645abd4a26357b9a2f63d56d87aa3e2cd21a310de4dd1cd1150eb43f6a30"
	},
	{
		"id": "b9c25dfbe40a",
		"ts": "2026-10-11T03:44:57.171Z",
		"symbol": "1F916",
		"token": "0x9E00FC92493451EBA1c63DD3880D68b622037bA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 406068.78,
		"hash": "b9c25dfbe40afd3a30689fa7ff49460d0210eaf6cbca58f581236c1471b84c46"
	},
	{
		"id": "a29b6f1dd174",
		"ts": "2026-10-11T03:44:57.363Z",
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
		"liquidityUsd": 3341256.76,
		"hash": "a29b6f1dd174533ec8ec013ea1d3491e1bfbb6f8c3dbd21a83a24e62ca5806ee"
	},
	{
		"id": "311f74ff19fb",
		"ts": "2026-10-11T03:44:57.583Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 154446.38,
		"hash": "311f74ff19fb77a24f5ee21724fc26d2cce30418375d204a0c6e95c8e9032e8c"
	},
	{
		"id": "a5f4eb5bd0f7",
		"ts": "2026-10-10T23:10:31.131Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 148538613.3,
		"hash": "a5f4eb5bd0f75b32f8e25b839879633e8cc48b36d503d2b963c484ef224ee009"
	},
	{
		"id": "879b06ff2d74",
		"ts": "2026-10-10T23:10:31.338Z",
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
		"liquidityUsd": 18255618.38,
		"hash": "879b06ff2d74ed9dec9c3440f1978560a61d99194f95c7fffe629c90fdb3e40f"
	},
	{
		"id": "a4abc6b85cdf",
		"ts": "2026-10-10T23:10:31.535Z",
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
		"liquidityUsd": 810927.11,
		"hash": "a4abc6b85cdf2dd9c76db84f30d950c587d0d3a9462f9de084b8eff886be5a06"
	},
	{
		"id": "0f61021a5bff",
		"ts": "2026-10-10T23:10:31.757Z",
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
		"liquidityUsd": 48072556.25,
		"hash": "0f61021a5bff8f3489727f72e48f9c1ba893c80adccb1e768829fccad0c202ea"
	},
	{
		"id": "578e65b2dba0",
		"ts": "2026-10-10T23:10:31.948Z",
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
		"liquidityUsd": 4919722.6,
		"hash": "578e65b2dba030d6dd6366e468dfa0b2273315add4e7a03f2714c5278587b1ca"
	},
	{
		"id": "aa9a61ea9d19",
		"ts": "2026-10-10T23:10:32.141Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1296090.72,
		"hash": "aa9a61ea9d19a6aa2e47d9f0173482e5da8e403dfa49ac9df3194f3ffe60bb12"
	},
	{
		"id": "0d6c626f2988",
		"ts": "2026-10-10T23:10:32.336Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 48072556.25,
		"hash": "0d6c626f29888a1b18a4ce14d47492798988274ccc0c7d86e6f1136352585225"
	},
	{
		"id": "bae376f5a779",
		"ts": "2026-10-10T23:10:32.530Z",
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
		"liquidityUsd": 2303189.59,
		"hash": "bae376f5a779e508f6d6783f9f8d38fd66ff9c06c01004f7e270b74969953ccb"
	},
	{
		"id": "9a7ff5671dec",
		"ts": "2026-10-10T23:10:32.724Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2044673.7,
		"hash": "9a7ff5671dec8cf0f8029afdbd07ebe45ec36ccc0b843066fe6622985f4e9e29"
	},
	{
		"id": "0e27d38a923c",
		"ts": "2026-10-10T23:10:32.951Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4076669.09,
		"hash": "0e27d38a923c1b2af876ada9462a4f1c54e4cec113cfbe85aaea9e6b534afcf2"
	},
	{
		"id": "c97fa045fa36",
		"ts": "2026-10-10T23:10:33.144Z",
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
		"liquidityUsd": 3387665.76,
		"hash": "c97fa045fa36ea8272928a7418d2bb855dcf7d48deff3c9147511ae132635d0b"
	},
	{
		"id": "cb25a99d2f8a",
		"ts": "2026-10-10T23:10:33.330Z",
		"symbol": "Paper",
		"token": "0x5F8FC6a725De67e74ec489819D8848C1545aAb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7231593.53,
		"hash": "cb25a99d2f8a33eb37367d03b7253979a34b79f31faebb3f754cd3e8b08a5951"
	},
	{
		"id": "8bc7fb1d996e",
		"ts": "2026-10-10T23:10:33.563Z",
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
		"liquidityUsd": 15600366.91,
		"hash": "8bc7fb1d996ecbf913d4d9f182efe9d1eaab5f0e583e76343a8e65d7617aaf70"
	},
	{
		"id": "a4d9528bff74",
		"ts": "2026-10-10T23:10:33.752Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 5545587.63,
		"hash": "a4d9528bff7432f846a9d3c7fa4382a6bb47495a44fb528b022b933b700ea10b"
	},
	{
		"id": "4ee3208a711c",
		"ts": "2026-10-10T23:10:33.937Z",
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
		"liquidityUsd": 1324200.33,
		"hash": "4ee3208a711cbddbbd01fcd87987ba27c287bf94292e0917c206556eb2af2373"
	},
	{
		"id": "c8390110ab3f",
		"ts": "2026-10-10T23:10:34.126Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2209946.88,
		"hash": "c8390110ab3f40a894b5115da45efabe6d129ddfb6ab2fd050dded500083ce93"
	},
	{
		"id": "1c30337edb0f",
		"ts": "2026-10-10T23:10:34.338Z",
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
		"liquidityUsd": 352940.77,
		"hash": "1c30337edb0fc5a67848a0066d6af5704e8bb5e8b08fc24517454008c5f18202"
	},
	{
		"id": "6c93874729d5",
		"ts": "2026-10-10T23:10:34.535Z",
		"symbol": "1F916",
		"token": "0x9E00FC92493451EBA1c63DD3880D68b622037bA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 424096.09,
		"hash": "6c93874729d59f7eca728f24a882d2781d4232ab3f0de558f02cfd5aae86f4b3"
	},
	{
		"id": "62a667510292",
		"ts": "2026-10-10T19:13:21.144Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 148486302.03,
		"hash": "62a667510292cfdf46dd4bce4445658340141d06955c0cf8bb9e7885edfcbdcf"
	},
	{
		"id": "6b69c1322723",
		"ts": "2026-10-10T19:13:21.401Z",
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
		"liquidityUsd": 18261920.42,
		"hash": "6b69c1322723b884aed432554828c2ada2dc91a468aa3895a8a4399cd6b6a9de"
	},
	{
		"id": "1ac7d6415222",
		"ts": "2026-10-10T19:13:21.650Z",
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
		"liquidityUsd": 111480.69,
		"hash": "1ac7d6415222c2f032141bfbf7df79f6f8a96b75a413e24cc93507a05fa87af1"
	},
	{
		"id": "0b5a2227bbed",
		"ts": "2026-10-10T19:13:21.906Z",
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
		"liquidityUsd": 47075839.89,
		"hash": "0b5a2227bbedf8425d2996a79eeed0f293e10f955c40ea20ea2429a550e6fe1d"
	},
	{
		"id": "02a78bee2b2a",
		"ts": "2026-10-10T19:13:22.156Z",
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
		"liquidityUsd": 4931092.41,
		"hash": "02a78bee2b2a153546883abb15a59ca93f1d0c40d620ab94d3d0f992b6303896"
	},
	{
		"id": "43c024bacfdf",
		"ts": "2026-10-10T19:13:22.401Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1241460.11,
		"hash": "43c024bacfdf69227519491f59995716af244f4066f471b6b51cd541465d5d0b"
	},
	{
		"id": "5a70be6de079",
		"ts": "2026-10-10T19:13:22.646Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 47075839.89,
		"hash": "5a70be6de079734735dde73cc57b1e6115138514adb930785c1fd2cc5d513e50"
	},
	{
		"id": "82673d2b9c91",
		"ts": "2026-10-10T19:13:22.902Z",
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
		"liquidityUsd": 2305714.68,
		"hash": "82673d2b9c91ac6ad7f51da8eb55645b31e44e25b4e21c8c72c9515478b7c36e"
	},
	{
		"id": "6e90feede9ea",
		"ts": "2026-10-10T19:13:23.156Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1954043.37,
		"hash": "6e90feede9ea62a449522a0ed2b94c960bf98b5af22b3ea36936fce065165456"
	},
	{
		"id": "0846fc662b2d",
		"ts": "2026-10-10T19:13:23.413Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 5583410.83,
		"hash": "0846fc662b2dc499a0d18566036432282bba918f61966102d227def033da8a8e"
	},
	{
		"id": "351dd8699572",
		"ts": "2026-10-10T19:13:23.640Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4096507.06,
		"hash": "351dd8699572ee4fe94de7647286bfd1ed925fe748542f972da310851fe92d85"
	},
	{
		"id": "78e7e74f5e39",
		"ts": "2026-10-10T19:13:23.873Z",
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
		"liquidityUsd": 15525495.72,
		"hash": "78e7e74f5e39fb007062f147d189a1a9ec9c2f569c033ed8a29ff4f7e79c07af"
	},
	{
		"id": "13d207800106",
		"ts": "2026-10-10T19:13:24.102Z",
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
		"liquidityUsd": 3391633.83,
		"hash": "13d207800106b25629e8a6c47a603ff046c185cd24a09a499ab38b1932394e2a"
	},
	{
		"id": "75a28ef377db",
		"ts": "2026-10-10T19:13:24.336Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2207024.19,
		"hash": "75a28ef377db3c0878d235305d33f0869f1d562eb49682cb2eed3a0d62e3cc07"
	},
	{
		"id": "05255ceade1f",
		"ts": "2026-10-10T19:13:24.568Z",
		"symbol": "MAGIC",
		"token": "0xF1572d1Da5c3CcE14eE5a1c9327d17e9ff0E3f43",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 387927.64,
		"hash": "05255ceade1f8815e089fd8e6c601c5d61dcf2be9e6ee9fc265e6556ebb47f6c"
	},
	{
		"id": "8a9716f5d8b5",
		"ts": "2026-10-10T19:13:24.804Z",
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
		"liquidityUsd": 1300771.73,
		"hash": "8a9716f5d8b5e20b31a39d2bb4c81a177c5d371a7e94cbca273856611b6476e8"
	},
	{
		"id": "c82cafc387a9",
		"ts": "2026-10-10T19:13:25.043Z",
		"symbol": "Paper",
		"token": "0x5F8FC6a725De67e74ec489819D8848C1545aAb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7231599.18,
		"hash": "c82cafc387a90a1bd9cbdf7199f27d30b7a47468f6c8c75249af2c5dd0a38ce2"
	},
	{
		"id": "e088d6cebc16",
		"ts": "2026-10-10T19:13:25.272Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 186660.12,
		"hash": "e088d6cebc1644855e65225fe3d55ee3e063a3e176b47eeea01561a7b3d419a1"
	},
	{
		"id": "0113621f2beb",
		"ts": "2026-10-10T19:13:25.504Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 146582.87,
		"hash": "0113621f2beba63db4e360b46f96de427132c12f1cbc89bd35241c59428dd8c2"
	},
	{
		"id": "2c2fc844cc6c",
		"ts": "2026-10-10T15:00:14.605Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 148474387.17,
		"hash": "2c2fc844cc6c0aa20e17b6d4082c3f52906f3afc869b658f326e23bb8d78711f"
	},
	{
		"id": "806fd16e1097",
		"ts": "2026-10-10T15:00:14.854Z",
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
		"liquidityUsd": 18238977.09,
		"hash": "806fd16e10972e06268560c065b697d8f3e65813934e61bcd8669811c35424f5"
	},
	{
		"id": "2fdb9e2a9031",
		"ts": "2026-10-10T15:00:15.082Z",
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
		"liquidityUsd": 805641.54,
		"hash": "2fdb9e2a9031132da69296143866f4dcb6dd4c75c8ad8e88f9a508c83d308cd2"
	},
	{
		"id": "171171ff16ff",
		"ts": "2026-10-10T15:00:15.329Z",
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
		"liquidityUsd": 46687122.47,
		"hash": "171171ff16ffc6effc3e5b8dc97dc08a5e0311d23b8ce6c94ef8d2dc1f4ca84a"
	},
	{
		"id": "88216be2c194",
		"ts": "2026-10-10T15:00:15.529Z",
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
		"liquidityUsd": 4925719.42,
		"hash": "88216be2c194a6a7e0bf6623c8dbeda0f894b39b3a77d583c51bddf2118844aa"
	},
	{
		"id": "83630f84e754",
		"ts": "2026-10-10T15:00:15.726Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1215637.69,
		"hash": "83630f84e7544cb7b55f60c30c1fa3134af300dd7cc018135e9cbb2f31dba0a7"
	},
	{
		"id": "55301cd1d2ee",
		"ts": "2026-10-10T15:00:15.937Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 46687122.47,
		"hash": "55301cd1d2eed96fe96ed2a877705534cced7e86c9bad6646ef9cd5e3c43bbcb"
	},
	{
		"id": "21b579417e6f",
		"ts": "2026-10-10T15:00:16.160Z",
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
		"liquidityUsd": 2302613.55,
		"hash": "21b579417e6f06902fec2c58bd9cf9aa9ac47b7d75370c3be27a70b94078f8b7"
	},
	{
		"id": "90f368cd06f8",
		"ts": "2026-10-10T15:00:16.376Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1949502.1,
		"hash": "90f368cd06f8a8505b6f65b3d7a90552edd4307107bb0c2e848ccb653432b182"
	},
	{
		"id": "84b901fd9a9b",
		"ts": "2026-10-10T15:00:16.620Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 5667854.77,
		"hash": "84b901fd9a9bcead2c49619ce4110c2801a40c879021e1c96044e4f5af8bbe21"
	},
	{
		"id": "e7576fff1f75",
		"ts": "2026-10-10T15:00:16.803Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1531990.22,
		"hash": "e7576fff1f753a45bf6dfba89705275d7567abd52f0214088ac06bcbfef3608e"
	},
	{
		"id": "c2d29f5badac",
		"ts": "2026-10-10T15:00:16.986Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4099429.51,
		"hash": "c2d29f5badac29b1c57198917efda42b6df1db707ac979b0a4fb5f730853eb83"
	},
	{
		"id": "cb9b26513454",
		"ts": "2026-10-10T15:00:17.169Z",
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
		"liquidityUsd": 15546562.13,
		"hash": "cb9b26513454f1ea04ab4e1e4adf68a46e60fd347bf8a0b0eb61195ed34ba5ac"
	},
	{
		"id": "543d2d35f584",
		"ts": "2026-10-10T15:00:17.354Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1277584.43,
		"hash": "543d2d35f584367c4444e621bcf15754abcf2c07e8644a6b2b160fc5dcd5c9d1"
	},
	{
		"id": "04d1ad00584a",
		"ts": "2026-10-10T15:00:17.544Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 147759.88,
		"hash": "04d1ad00584a989825d3dc541dab355fa35a582734b77cbc36253691033eeee5"
	},
	{
		"id": "1e5c884e46a0",
		"ts": "2026-10-10T15:00:17.727Z",
		"symbol": "MAGIC",
		"token": "0xF1572d1Da5c3CcE14eE5a1c9327d17e9ff0E3f43",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 394762.88,
		"hash": "1e5c884e46a0cfb8a91031f4c56db9b5b816ff6a9cc6c8ab4463c3e94be4b2cd"
	},
	{
		"id": "d4abb6f2f9ef",
		"ts": "2026-10-10T15:00:17.928Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 183022.8,
		"hash": "d4abb6f2f9ef8b3c740c45b88c8de497c51834de1eb2648b47d47d7f8eff1464"
	},
	{
		"id": "78f8ddbfb123",
		"ts": "2026-10-10T15:00:18.111Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2193712.71,
		"hash": "78f8ddbfb1237c9cbebc1a3eb690af4897c02ac41e079d86738d240db3e221ab"
	},
	{
		"id": "f7dd71a7f0ae",
		"ts": "2026-10-10T15:00:18.293Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1156628.08,
		"hash": "f7dd71a7f0ae25ba969a846b155eabc82f0b98e2b458d9694017af4126e58d6c"
	},
	{
		"id": "22f869f6aca7",
		"ts": "2026-10-10T08:02:45.512Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 147842255.18,
		"hash": "22f869f6aca7b8c2a1223e3465145c6191ae023c438a012f508a941b2f17a446"
	},
	{
		"id": "026c36925112",
		"ts": "2026-10-10T08:02:46.195Z",
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
		"liquidityUsd": 18136018.9,
		"hash": "026c36925112068b3eac25e641dab3833dfb849bfedb387269c041c23a4e14e4"
	},
	{
		"id": "31958e6fc736",
		"ts": "2026-10-10T08:02:46.718Z",
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
		"liquidityUsd": 807645.08,
		"hash": "31958e6fc73622039f3581a5658a8edccf4568a23ad15ef14100ab0df4ab14a1"
	},
	{
		"id": "332ebdcbe946",
		"ts": "2026-10-10T08:02:46.995Z",
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
		"liquidityUsd": 44940574.6,
		"hash": "332ebdcbe946262f07dea8f517ffb09ef2a4527a8bb015db4ae3ae64e22822af"
	},
	{
		"id": "103938927d3f",
		"ts": "2026-10-10T08:02:47.319Z",
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
		"liquidityUsd": 4873835.98,
		"hash": "103938927d3f06fe0acf69f5cdc1c45144d33ba3075e5ffa20d68b0a3f982e68"
	},
	{
		"id": "12ada9f182dc",
		"ts": "2026-10-10T08:02:47.592Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1219689.63,
		"hash": "12ada9f182dc6f91cf2150606bff84253a05d3906338c3915a56649de613c375"
	},
	{
		"id": "434b7985c16e",
		"ts": "2026-10-10T08:02:47.911Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 44947149.49,
		"hash": "434b7985c16e4838d109a74a218663e6712ad26b564642d014a5bfcdf6c40d80"
	},
	{
		"id": "1f36a5856f1f",
		"ts": "2026-10-10T08:02:48.189Z",
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
		"liquidityUsd": 804128.09,
		"hash": "1f36a5856f1fcdccf45687a71d2e66c60257d0945d0b849d716ba249772355ca"
	},
	{
		"id": "4c9437b25e4f",
		"ts": "2026-10-10T08:02:48.511Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1955956.73,
		"hash": "4c9437b25e4fe287ccf0ecb2f91801df24d7e1972c5d8f433afa8af67063dbb5"
	},
	{
		"id": "01608d33d72a",
		"ts": "2026-10-10T08:02:48.771Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 5705265.9,
		"hash": "01608d33d72a2afe4d22e5a3581077485bac0166485c64c9fc289f22c2ccbaf8"
	},
	{
		"id": "594e8e842274",
		"ts": "2026-10-10T08:02:49.026Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1526471.2,
		"hash": "594e8e842274aa47150077ce1f978174a40a9b060b811ca6f81295cf82fdc51e"
	},
	{
		"id": "4d706567c16c",
		"ts": "2026-10-10T08:02:49.269Z",
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
		"liquidityUsd": 15512594.29,
		"hash": "4d706567c16c31c772257710764b2ad20ac62a1dd798dc53297dec57d305d5a6"
	},
	{
		"id": "57b932a42184",
		"ts": "2026-10-10T08:02:49.523Z",
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
		"liquidityUsd": 3498323.35,
		"hash": "57b932a4218426bc8b2129851e992b60a6b3549244a7eb4f012b7d22fe7bd618"
	},
	{
		"id": "991f9707bbc4",
		"ts": "2026-10-10T08:02:49.776Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1300185.05,
		"hash": "991f9707bbc406ef5cb919b92ed58bc1d5e1b53a257303ab05ff12f87ffde114"
	},
	{
		"id": "f7dc8c8837c6",
		"ts": "2026-10-10T08:02:50.030Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 174927.37,
		"hash": "f7dc8c8837c652e4686d8237141eae844c3d03ba36026e7b2eadabcb65fc738c"
	},
	{
		"id": "acccf9cfcf35",
		"ts": "2026-10-10T08:02:50.269Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 153722.91,
		"hash": "acccf9cfcf35b2ca116f8c58e460b5ee7859364cb7644736d441b26fadb7bc2c"
	},
	{
		"id": "2f3231dcac53",
		"ts": "2026-10-10T08:02:50.523Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4266217.72,
		"hash": "2f3231dcac53bf8b20250746c2f2d0001eeac5415aece3e5542380c49de20ed1"
	},
	{
		"id": "0f7e5bc706eb",
		"ts": "2026-10-10T08:02:50.763Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 362868.88,
		"hash": "0f7e5bc706ebea23f34dc9d34fceee21aef605c476ae161d4aefbe3c6b60050b"
	},
	{
		"id": "44a8d8351177",
		"ts": "2026-10-10T08:02:51.015Z",
		"symbol": "MAGIC",
		"token": "0xF1572d1Da5c3CcE14eE5a1c9327d17e9ff0E3f43",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 397741.74,
		"hash": "44a8d8351177ac8f41010158ec601b62061bda9f3a0e5266b386c0901b3acf62"
	},
	{
		"id": "9d1b829cffa1",
		"ts": "2026-10-10T01:28:53.519Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 147695324.63,
		"hash": "9d1b829cffa1017dae07cce169156240c21308c4fceb762336747e9549ebdafa"
	},
	{
		"id": "e52b02176bc6",
		"ts": "2026-10-10T01:28:53.731Z",
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
		"liquidityUsd": 18088826.28,
		"hash": "e52b02176bc642cdfcc00a6c892b939f85f87a9829732b06fd81aa626c90a594"
	},
	{
		"id": "6696e2d89635",
		"ts": "2026-10-10T01:28:53.939Z",
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
		"liquidityUsd": 805056.78,
		"hash": "6696e2d89635af2596b35d3c87bb52faf99d4fa18d0367bb75a1ee5052c6bb94"
	},
	{
		"id": "36ffca7bde3f",
		"ts": "2026-10-10T01:28:54.141Z",
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
		"liquidityUsd": 43977100.79,
		"hash": "36ffca7bde3f58b08e87fa88c02bf97e89e0d1ee27e6da774f75c76f52448615"
	},
	{
		"id": "8ec9b39daaf0",
		"ts": "2026-10-10T01:28:54.338Z",
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
		"liquidityUsd": 4832780.69,
		"hash": "8ec9b39daaf0b71e7b3d9b4e43571c0ada8a1756a0a163fa6a784d07b9294eef"
	},
	{
		"id": "41e59d049569",
		"ts": "2026-10-10T01:28:54.547Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1228481.1,
		"hash": "41e59d049569946fe35797da4e93036b18d60eb40dfd42bf3a7f2c01e39b7a56"
	},
	{
		"id": "c77e73a6f87a",
		"ts": "2026-10-10T01:28:54.744Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 43977100.79,
		"hash": "c77e73a6f87a6ed7146763d0956e67edc8d16f0fdd3deb26dbb6ce9be9b188d7"
	},
	{
		"id": "d1d21136ab34",
		"ts": "2026-10-10T01:28:54.979Z",
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
		"liquidityUsd": 803405.28,
		"hash": "d1d21136ab34c1b6ce590a90ea2410d51e88cb64d2d811953db2542f532e3b9e"
	},
	{
		"id": "df00be666aa3",
		"ts": "2026-10-10T01:28:55.208Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1913618.73,
		"hash": "df00be666aa3bb15f59764325a058687d9a71bba6f789826fdd8de49d3b3e604"
	},
	{
		"id": "babb61ccb202",
		"ts": "2026-10-10T01:28:55.445Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 5694589.38,
		"hash": "babb61ccb2021cf01f21b49fd96209f497ae226a6b1fffff5e60778fbfa4e5af"
	},
	{
		"id": "283ad60fa334",
		"ts": "2026-10-10T01:28:55.710Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1531197.73,
		"hash": "283ad60fa3349747702c319c4a9f143054506d7b1affd53d8119636165ace250"
	},
	{
		"id": "c09b0cd82600",
		"ts": "2026-10-10T01:28:55.905Z",
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
		"liquidityUsd": 15554191.23,
		"hash": "c09b0cd8260056363d60549713a88b620fce264c6b935ad76cc2bb4848422e90"
	},
	{
		"id": "6e69db00cf50",
		"ts": "2026-10-10T01:28:56.113Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1297191.09,
		"hash": "6e69db00cf5024d466c95a856997631aff10ee0aea642007cceaa74b5d6d95a8"
	},
	{
		"id": "c551ed4fc1cc",
		"ts": "2026-10-10T01:28:56.322Z",
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
		"liquidityUsd": 3454253.38,
		"hash": "c551ed4fc1cc8ca86cba3653e07695c6a237b334a5bc245395413ad73230f19c"
	},
	{
		"id": "c53a4b55a00e",
		"ts": "2026-10-10T01:28:56.511Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 173185.97,
		"hash": "c53a4b55a00e6f3310ebdcf91e5d87032edc511d4ff4e47c13235a946d4b8441"
	},
	{
		"id": "a0ed278c6d03",
		"ts": "2026-10-10T01:28:56.724Z",
		"symbol": "whuf",
		"token": "0xeeee77bC7e82c0d4166d52F58239D4c5Bf41eeee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 280554.01,
		"hash": "a0ed278c6d0316a55d8f99104313f523685a3fe0e4c1dcba4127882d440cc61d"
	},
	{
		"id": "af1b298347fd",
		"ts": "2026-10-10T01:28:56.910Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 142667.44,
		"hash": "af1b298347fd1ac855dab2aadb372d59c990cc5a389053fcb717a64a551c629c"
	},
	{
		"id": "573f6bf00489",
		"ts": "2026-10-10T01:28:57.099Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4026434.2,
		"hash": "573f6bf004895d5141f18164efa86440ca666b204ef3a707b7430fd9d97675d6"
	},
	{
		"id": "e123703b0ed4",
		"ts": "2026-10-10T01:28:57.295Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 354654.82,
		"hash": "e123703b0ed4f2e9d38c6a799425ae8f87a2c6e6ddc622c0b3da93640a516333"
	},
	{
		"id": "0952712c0495",
		"ts": "2026-10-09T21:27:05.295Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 147607192.19,
		"hash": "0952712c04950332dc237ea00cbcefff6c0cafbe80c5a2eda7d4f723aecd09e2"
	},
	{
		"id": "5283a22550d3",
		"ts": "2026-10-09T21:27:05.654Z",
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
		"liquidityUsd": 18068004.85,
		"hash": "5283a22550d3d520a395ed3f575c22fdf87a0e70c8d3da16ac8d6f7a4b76af79"
	},
	{
		"id": "03b1d3a8bcdc",
		"ts": "2026-10-09T21:27:05.872Z",
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
		"liquidityUsd": 805056.78,
		"hash": "03b1d3a8bcdc1ce851c134a122a8276582bcfc1222afcd56e6030e555bc1c0d3"
	},
	{
		"id": "18c754bee308",
		"ts": "2026-10-09T21:27:06.085Z",
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
		"liquidityUsd": 43756756.31,
		"hash": "18c754bee30845aaf831cece3afcf4aec57720eb68b9fad16d532c5de973aed0"
	},
	{
		"id": "782bdc265b74",
		"ts": "2026-10-09T21:27:06.271Z",
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
		"liquidityUsd": 4766537.73,
		"hash": "782bdc265b7484a03417955ebdb4b4cbb131039f8c25a36f1c28a32336d8c20f"
	},
	{
		"id": "24770b2324d8",
		"ts": "2026-10-09T21:27:06.476Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1206558.48,
		"hash": "24770b2324d808c8e23184334f538db556e91559c38b959496f3f86603111170"
	},
	{
		"id": "67513dc0ae46",
		"ts": "2026-10-09T21:27:06.683Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 43756375.29,
		"hash": "67513dc0ae46378f3c2242b260018f971061c43cc325a86cabf55e30d0eddec1"
	},
	{
		"id": "fa2924524d28",
		"ts": "2026-10-09T21:27:06.933Z",
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
		"liquidityUsd": 800857.62,
		"hash": "fa2924524d28744be8a53589a1f5f0c1f068f030ee622773a8c293a3d257692c"
	},
	{
		"id": "da2587c9f065",
		"ts": "2026-10-09T21:27:07.148Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1900578.34,
		"hash": "da2587c9f0652a5fc8f151e5c17047aae09865e4c6f98743f6d2c1308d43e3bf"
	},
	{
		"id": "62fc4f5c8920",
		"ts": "2026-10-09T21:27:07.370Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 5279874.94,
		"hash": "62fc4f5c8920ae9539615bd29061fb3ed15c00119fca8181adb8e77db80c782d"
	},
	{
		"id": "c63933405ad4",
		"ts": "2026-10-09T21:27:07.563Z",
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
		"liquidityUsd": 15259186.63,
		"hash": "c63933405ad495a864d3fd7fb3358b6419ca545e0766439e8175219a44042aa2"
	},
	{
		"id": "1a145a75799f",
		"ts": "2026-10-09T21:27:07.812Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1527909.91,
		"hash": "1a145a75799f2ac61f698b0d03c01bc7d3bf4e6ae878f72882fb5b024eabf99f"
	},
	{
		"id": "14f18e607d07",
		"ts": "2026-10-09T21:27:08.025Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 182790.05,
		"hash": "14f18e607d07d4981093c700f785ed2304951af1cb224e0fc848eb46ba14e290"
	},
	{
		"id": "98ac2be28a85",
		"ts": "2026-10-09T21:27:08.234Z",
		"symbol": "whuf",
		"token": "0xeeee77bC7e82c0d4166d52F58239D4c5Bf41eeee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 300763.23,
		"hash": "98ac2be28a85c14beba3a0b6786704c3661ebc3fafb4688cd2b310d3f3f8d7a7"
	},
	{
		"id": "0851adc8e5ec",
		"ts": "2026-10-09T21:27:08.423Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1298363.99,
		"hash": "0851adc8e5ecf72fca584deb300f4ba3892d7514115100c455ceeaa5f95423ce"
	},
	{
		"id": "2cc04bb9829f",
		"ts": "2026-10-09T21:27:08.633Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 150567.25,
		"hash": "2cc04bb9829fbe3f8d8318705cff0200567d483cb61dc212dcd641d54c311a75"
	},
	{
		"id": "7fb2b563d4b8",
		"ts": "2026-10-09T21:27:08.858Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2188210.75,
		"hash": "7fb2b563d4b80a43a7e94c15502bac1c0071090e1a145453acf3e5f1d1edceef"
	},
	{
		"id": "a60a5a611743",
		"ts": "2026-10-09T21:27:09.078Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1140202.69,
		"hash": "a60a5a61174302910b3ffe22fa8323dcf456e93231644e4214c63d0427cf251f"
	},
	{
		"id": "3e67ce339f96",
		"ts": "2026-10-09T21:27:09.296Z",
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
		"liquidityUsd": 3388101.38,
		"hash": "3e67ce339f96e6df022409b7571f7c410616d4fe4827d1f78293d03d39acb163"
	},
	{
		"id": "4f043b1ef46d",
		"ts": "2026-10-09T16:52:40.276Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 147899702.92,
		"hash": "4f043b1ef46d17d498627550427dc7195394e6c2a7280595fc30f970c71151a9"
	},
	{
		"id": "806c80f2fbc1",
		"ts": "2026-10-09T16:52:40.768Z",
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
		"liquidityUsd": 18084645.26,
		"hash": "806c80f2fbc14350d1556d305931309389d81de5cec3f13c2c334d64c68c4a08"
	},
	{
		"id": "bda5256fabed",
		"ts": "2026-10-09T16:52:40.973Z",
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
		"liquidityUsd": 803130.98,
		"hash": "bda5256fabedc2ae8b43d1808338f9f5dba39e8e22dcae839258157437e4620f"
	},
	{
		"id": "234d15380dcc",
		"ts": "2026-10-09T16:52:41.190Z",
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
		"liquidityUsd": 44056684.18,
		"hash": "234d15380dcc283dc55ac0a322578d17514bbf31657f3e02026281db74ec81d4"
	},
	{
		"id": "c135d282af8d",
		"ts": "2026-10-09T16:52:41.394Z",
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
		"liquidityUsd": 4789775.76,
		"hash": "c135d282af8de0a0b857c86e7ea1bd236edaac17ae2cde4be7983f92e4592437"
	},
	{
		"id": "0da777b7dccb",
		"ts": "2026-10-09T16:52:41.626Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1211881.37,
		"hash": "0da777b7dccb3de86ce0c6ed8c9bef26ce348d1c3a5d9b97eaf414d55fac52d9"
	},
	{
		"id": "dc3e33ce4279",
		"ts": "2026-10-09T16:52:41.842Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 44056684.18,
		"hash": "dc3e33ce42791413e989e9b5eb49f585abcc6ad603da5f44f4f121952dde690e"
	},
	{
		"id": "f2db4970abff",
		"ts": "2026-10-09T16:52:42.055Z",
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
		"liquidityUsd": 823840.53,
		"hash": "f2db4970abffac81ddb5f79ff24fdd36e369002c24a84d2719dd1c2b564f4884"
	},
	{
		"id": "639f672e1752",
		"ts": "2026-10-09T16:52:42.323Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1900586.48,
		"hash": "639f672e17523bbb8f217dd6aba32d9d85ac48023aa83d37d8761cba676de1d4"
	},
	{
		"id": "a8f6008fb459",
		"ts": "2026-10-09T16:52:42.531Z",
		"symbol": "whuf",
		"token": "0xeeee77bC7e82c0d4166d52F58239D4c5Bf41eeee",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 311024.12,
		"hash": "a8f6008fb4595fe2caf819994d99e1041556021b45c2775042fa73bf10677cd1"
	},
	{
		"id": "1114998321f2",
		"ts": "2026-10-09T16:52:42.728Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 5644856.37,
		"hash": "1114998321f2c23e603e4578fa0a4b1ba940f75331c29f01639aa602fa562435"
	},
	{
		"id": "411adb199db7",
		"ts": "2026-10-09T16:52:42.942Z",
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
		"liquidityUsd": 15507147.26,
		"hash": "411adb199db7cbeba10492b7cc073cd3f4b5507d2b38ff4d13bb47e5a6653bd4"
	},
	{
		"id": "bd625e3a8145",
		"ts": "2026-10-09T16:52:43.130Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1537284.86,
		"hash": "bd625e3a8145d38515bd57b78899bce7e28c2b0313b0e595155dbb71597ff473"
	},
	{
		"id": "683b3029d85f",
		"ts": "2026-10-09T16:52:43.339Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1299123.78,
		"hash": "683b3029d85f964673830c7cd5ed3db248314b64826f2ac5cd7c6d9c963c3804"
	},
	{
		"id": "e55c51cecfdc",
		"ts": "2026-10-09T16:52:43.602Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 175848.75,
		"hash": "e55c51cecfdc574983b33b9b31f7291960f95dfd557c4bba301873b748ee6514"
	}
]
