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
	"updatedAt": "2026-09-16T07:09:16.260Z",
	"tokensScored": 17564,
	"verdictsIssued": 17564,
	"safe": 14873,
	"risky": 1288,
	"likelyRug": 1403,
	"ticks": 1003
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "68a2e7b9df5f",
		"ts": "2026-09-16T07:09:12.698Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 124619821.08,
		"hash": "68a2e7b9df5f3fce29cea2ed3a27d849a41c5e0dd44362379978ebfab90d1a75"
	},
	{
		"id": "bdfc68526291",
		"ts": "2026-09-16T07:09:12.920Z",
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
		"liquidityUsd": 15532160.25,
		"hash": "bdfc685262910b86229a979b7ac6be17cfad8206e796be2faee95f5dcea0229f"
	},
	{
		"id": "5e074662ce2e",
		"ts": "2026-09-16T07:09:13.150Z",
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
		"liquidityUsd": 922394.03,
		"hash": "5e074662ce2e81d10fcca0ea007d2b16f31a8643ecc16fc93a9c8f09e33e5d60"
	},
	{
		"id": "7a516784955a",
		"ts": "2026-09-16T07:09:13.358Z",
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
		"liquidityUsd": 33225098.46,
		"hash": "7a516784955a56ad285c0dce12348dcb9332a9ada82b3df8a5fa296f19c64079"
	},
	{
		"id": "c44b850bec7a",
		"ts": "2026-09-16T07:09:13.564Z",
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
		"liquidityUsd": 3759936.66,
		"hash": "c44b850bec7af876fa19f560c51390db3d9492c31ad8ce62739d467eb76446d5"
	},
	{
		"id": "9cf55c1b20da",
		"ts": "2026-09-16T07:09:13.781Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1131463.17,
		"hash": "9cf55c1b20daca1aa3c13d25f1289a2442bb60c0e10b46b37b82fa12e4393ed8"
	},
	{
		"id": "4cf55f8ce026",
		"ts": "2026-09-16T07:09:14.006Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2221146.98,
		"hash": "4cf55f8ce02696aa92ff12300782664ec0a85c7c3bdec282782dae8a0cfe0b59"
	},
	{
		"id": "deb79463f5b7",
		"ts": "2026-09-16T07:09:14.228Z",
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
		"liquidityUsd": 1219797.12,
		"hash": "deb79463f5b7338c4617c0ebdc57e8d7ce8194565d766511348c7c4d77b4c9d4"
	},
	{
		"id": "7d38831ed6a7",
		"ts": "2026-09-16T07:09:14.439Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1016920.25,
		"hash": "7d38831ed6a7de9326f232dc7d93ab621593227d1d0cc0196733ed876eee94be"
	},
	{
		"id": "8a3cb4f496d9",
		"ts": "2026-09-16T07:09:14.654Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1420102.57,
		"hash": "8a3cb4f496d9c1cc9f21d493242e695f02fec33930e6d3f6e2db001d2561fbcc"
	},
	{
		"id": "ae68fa1122b7",
		"ts": "2026-09-16T07:09:14.860Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 775617.84,
		"hash": "ae68fa1122b7470e7bd19ccd71a925e4cee099c205ef7b4731632e61a821a8e1"
	},
	{
		"id": "8d8d86190040",
		"ts": "2026-09-16T07:09:15.059Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1340341.93,
		"hash": "8d8d86190040ea59a1fa4e666e1f0f04126988353f44cbb2663359d9274960dd"
	},
	{
		"id": "430d7adca2c0",
		"ts": "2026-09-16T07:09:15.265Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13629714.06,
		"hash": "430d7adca2c0d7dc9403a509509c7ae8a7e651b031d952cf20ccfd0802fe1d40"
	},
	{
		"id": "92a61c969763",
		"ts": "2026-09-16T07:09:15.459Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2833536.25,
		"hash": "92a61c96976390dbdb85aa5020813fb8a357b498b5724a08f355dad2ad82132c"
	},
	{
		"id": "8e94cd6a20d0",
		"ts": "2026-09-16T07:09:15.665Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1643440,
		"hash": "8e94cd6a20d02deffddf9c799112c1e4de7eb5307e58f19584c270f2a23e48d0"
	},
	{
		"id": "66091ac005f7",
		"ts": "2026-09-16T07:09:15.862Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4278773.48,
		"hash": "66091ac005f750db84634170248ac9a128fc999ae0bea124c9a984cc63d54443"
	},
	{
		"id": "bffa0ce722e3",
		"ts": "2026-09-16T07:09:16.067Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 441944.82,
		"hash": "bffa0ce722e353605dbba2654d69bc5b03ba4646dbfdbba6b5e56d2753aceb45"
	},
	{
		"id": "26de85784746",
		"ts": "2026-09-16T07:09:16.260Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1104939.59,
		"hash": "26de85784746b988272b687d47d541ae036c704df855541c3624874edfd4e130"
	},
	{
		"id": "608a0ed556db",
		"ts": "2026-09-16T01:01:50.716Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 124027463.34,
		"hash": "608a0ed556db7bbb55210e34ab9a945cb8913475ccd0b5eaf15a3fbb67525ca8"
	},
	{
		"id": "56789a30c91e",
		"ts": "2026-09-16T01:01:50.953Z",
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
		"liquidityUsd": 15958919.9,
		"hash": "56789a30c91ea7c8adc5f1ce7d117bca8ab30bd25a49bf81112eb21f63ce6910"
	},
	{
		"id": "cac9f42ea8af",
		"ts": "2026-09-16T01:01:51.165Z",
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
		"liquidityUsd": 921211.37,
		"hash": "cac9f42ea8af371a8e5a55545d0b281ff3f135be1b5d09c3325e7106ec33b178"
	},
	{
		"id": "86f8a0b7cc2b",
		"ts": "2026-09-16T01:01:51.586Z",
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
		"liquidityUsd": 33080143.3,
		"hash": "86f8a0b7cc2bbd98487d8d6d9f19ece759c26ef6772d567bb0b4b983393cbfcd"
	},
	{
		"id": "8930e7b0f138",
		"ts": "2026-09-16T01:01:51.833Z",
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
		"liquidityUsd": 3744719.15,
		"hash": "8930e7b0f1380853dd86c5a588678fa9d68620cd34e57c1ed2740e29b23235de"
	},
	{
		"id": "e96cd8eff13a",
		"ts": "2026-09-16T01:01:52.066Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1126192.58,
		"hash": "e96cd8eff13af5c4eb3fe691623cfaec7acef683ea946061f0db7f99f3ec3c1d"
	},
	{
		"id": "ffacbaa22be6",
		"ts": "2026-09-16T01:01:52.305Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1634100.24,
		"hash": "ffacbaa22be6676e0e33b7ad41d20a64079c4467bd618a6f30bba465f735ec2f"
	},
	{
		"id": "a11f190a2d4a",
		"ts": "2026-09-16T01:01:52.540Z",
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
		"liquidityUsd": 2592515.28,
		"hash": "a11f190a2d4a28ff726645688a4a18e853b0ef6327a6266287f7fb9a6221a803"
	},
	{
		"id": "99fc20e4cf17",
		"ts": "2026-09-16T01:01:52.825Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 956091.01,
		"hash": "99fc20e4cf178d9d652f13db54d362fa79ebe86f833cf1979d4f1a6b1ab6f076"
	},
	{
		"id": "77b111153eb8",
		"ts": "2026-09-16T01:01:53.041Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1634100.24,
		"hash": "77b111153eb8e0e52abcc298aebc614d170dfef87171268b26cf161ecaae2c2f"
	},
	{
		"id": "59e1796386e3",
		"ts": "2026-09-16T01:01:53.255Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 806557.11,
		"hash": "59e1796386e3992c2391a793e8a0bd54837e4a6f64e2964ba18705aee012833f"
	},
	{
		"id": "2596e2b72f36",
		"ts": "2026-09-16T01:01:53.453Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1340745.53,
		"hash": "2596e2b72f36939ff7340fe173dd4859a03510aa438dd99c3ced9851e3da21ce"
	},
	{
		"id": "9d199ec4873c",
		"ts": "2026-09-16T01:01:53.647Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2819984.53,
		"hash": "9d199ec4873c4655e0a1903e20d0eaacffe61d980faf843cf9b070c9a81cbce5"
	},
	{
		"id": "cca7e0b4ef07",
		"ts": "2026-09-16T01:01:53.893Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 587399.07,
		"hash": "cca7e0b4ef07b53d5a28fb890504a9f59763ba8aed10615e8efdc76590b4569b"
	},
	{
		"id": "46f537ab710b",
		"ts": "2026-09-16T01:01:54.084Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 557507.21,
		"hash": "46f537ab710b5cd4dbf58d88c4a891b27032648cd7a969c9f374dc0a3dcd4138"
	},
	{
		"id": "473a550697cd",
		"ts": "2026-09-16T01:01:54.308Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13430656.38,
		"hash": "473a550697cd416aed97e3d599815c7422686da421354f45939d319dfe4d874a"
	},
	{
		"id": "1e3ef4b1baef",
		"ts": "2026-09-16T01:01:54.515Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 464344.22,
		"hash": "1e3ef4b1baef35a4daeab5949b5e3e542ef03b293d8d63a698d854c24d85fea7"
	},
	{
		"id": "678fa9a810cd",
		"ts": "2026-09-16T01:01:54.730Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4269557.95,
		"hash": "678fa9a810cd2e2fda773acb02897808fc658892eaaf4b987fa684f16b806f67"
	},
	{
		"id": "9691a33a373d",
		"ts": "2026-09-15T22:41:16.179Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 123716227.16,
		"hash": "9691a33a373d7ee19c1643a12680439338ad0dade60b7ef6d2a33920705b381f"
	},
	{
		"id": "b00897c69020",
		"ts": "2026-09-15T22:41:16.493Z",
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
		"liquidityUsd": 12121033.86,
		"hash": "b00897c690201fac964dcec202b976528fa069b9509649a2edc956aaf61288b9"
	},
	{
		"id": "42c8e59eb974",
		"ts": "2026-09-15T22:41:16.773Z",
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
		"liquidityUsd": 922992.82,
		"hash": "42c8e59eb974631e4ab4d5bc31f506e4997e4075b82457869ff69e4e4f5a151a"
	},
	{
		"id": "a79dc986bc2c",
		"ts": "2026-09-15T22:41:16.986Z",
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
		"liquidityUsd": 33042911.39,
		"hash": "a79dc986bc2c254855c81466b79ecf88099d9bb69186cfc630cdf86bc77f3314"
	},
	{
		"id": "d65fb5e8fff2",
		"ts": "2026-09-15T22:41:17.208Z",
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
		"liquidityUsd": 3734350.3,
		"hash": "d65fb5e8fff2a4d130046ae7b179bf1c8548b5491831d95d8c962b3084493af4"
	},
	{
		"id": "36e837c43bd1",
		"ts": "2026-09-15T22:41:17.418Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1120040.3,
		"hash": "36e837c43bd13fcdcb65fa7e7cdf259ac7a5af85f910224b90e37256a9941db7"
	},
	{
		"id": "ec24c04b3e8c",
		"ts": "2026-09-15T22:41:17.627Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1597222.29,
		"hash": "ec24c04b3e8c9b6da46f03f23607677fe1807ef55d5066ab11c2c6f135fe3e02"
	},
	{
		"id": "d86ca78f156a",
		"ts": "2026-09-15T22:41:17.826Z",
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
		"liquidityUsd": 2588514.39,
		"hash": "d86ca78f156af5ab4340748aa1e6fb47ef1b0c8960ba87378725620bafcb35d0"
	},
	{
		"id": "dfa1976fe99e",
		"ts": "2026-09-15T22:41:18.020Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 920157.31,
		"hash": "dfa1976fe99e7e7470544efb3dd96a92cf4b3cf200f24558aa3ae1af9cf771df"
	},
	{
		"id": "1df13b674664",
		"ts": "2026-09-15T22:41:18.227Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1597222.29,
		"hash": "1df13b674664ff096680a859857189ded42461033f7bf5cae8e89420192474ca"
	},
	{
		"id": "6c0ac25f2421",
		"ts": "2026-09-15T22:41:18.436Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 809364.01,
		"hash": "6c0ac25f242138f2fc642ddbf988ef64e120124ea311f4701a4cd8e08f1714d8"
	},
	{
		"id": "cf4fe849ae4b",
		"ts": "2026-09-15T22:41:18.625Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1366017.65,
		"hash": "cf4fe849ae4b30b945cc6ff95b6ef8a45574bbde262f76b697ba490c4de679a0"
	},
	{
		"id": "4965e9d52e38",
		"ts": "2026-09-15T22:41:18.817Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2834308.02,
		"hash": "4965e9d52e3840d291262e9b2cafb5c4c33951112df0bad8bf5b50c346422242"
	},
	{
		"id": "7c75f12153e5",
		"ts": "2026-09-15T22:41:19.018Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 455319.47,
		"hash": "7c75f12153e59a59eb30be818851fd9dbc12beea575a2565860a727d70f05945"
	},
	{
		"id": "da57b661c4fb",
		"ts": "2026-09-15T22:41:19.208Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13415971.51,
		"hash": "da57b661c4fb3f89c6456edef757e24d472c97332566a8c1b4d2caa67ddca3ec"
	},
	{
		"id": "63efb7f04677",
		"ts": "2026-09-15T22:41:19.468Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 581449.64,
		"hash": "63efb7f04677b2aa1a4aaf3e950b3d8200cbc03a7977af5ebcdd5180375d817c"
	},
	{
		"id": "05eb9d8a13ba",
		"ts": "2026-09-15T22:41:19.649Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 557350.95,
		"hash": "05eb9d8a13bac90813a3b313e5c40dbfad248f581710263ba5539b3ab9de7db8"
	},
	{
		"id": "04ef985d840a",
		"ts": "2026-09-15T22:41:19.830Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1679468.22,
		"hash": "04ef985d840a48d994ec1567d0ce02a474b83d890aaa8405159af06e6bdf7520"
	},
	{
		"id": "5947fbc82e0a",
		"ts": "2026-09-15T19:29:44.179Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 124410306.15,
		"hash": "5947fbc82e0aac255924fe9c918a18ffdadac2fb2de405a42ee2acfaaa8e56ad"
	},
	{
		"id": "dd842fabf060",
		"ts": "2026-09-15T19:29:44.529Z",
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
		"liquidityUsd": 14095088.42,
		"hash": "dd842fabf0606803a6c68ff42bee56a6431b7b789f78e1e0ef518a7d311a46eb"
	},
	{
		"id": "a8936647e142",
		"ts": "2026-09-15T19:29:44.721Z",
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
		"liquidityUsd": 929150.04,
		"hash": "a8936647e142a59b87df1c6814dff2123dc885b7aaa89f1b5fa4908117723029"
	},
	{
		"id": "609548ef3225",
		"ts": "2026-09-15T19:29:44.915Z",
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
		"liquidityUsd": 33170896.31,
		"hash": "609548ef3225ae417f9cc86300da0700b5002c3b233c2184f3b06df3a488c368"
	},
	{
		"id": "111220873796",
		"ts": "2026-09-15T19:29:45.115Z",
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
		"liquidityUsd": 3774141.63,
		"hash": "111220873796c1bcc974b7e3d4fa01732be503b3134160afaefd896f413b1af3"
	},
	{
		"id": "35a430fd6d47",
		"ts": "2026-09-15T19:29:45.324Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1130316.22,
		"hash": "35a430fd6d4758b11efc13ce688a777c1ccb3833332fbafe49e4c5594b77e787"
	},
	{
		"id": "7bbb501bfb3a",
		"ts": "2026-09-15T19:29:45.515Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2290868.79,
		"hash": "7bbb501bfb3a43fac5a4b32bc98e24907e2f3c31c492ff21dccbb6933918e7f9"
	},
	{
		"id": "71df07b80db3",
		"ts": "2026-09-15T19:29:45.707Z",
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
		"liquidityUsd": 2711071.39,
		"hash": "71df07b80db3ad46ca1d8beb0fb29e706f4dc77898cc8209a7844263ece67ea6"
	},
	{
		"id": "2786d4c64100",
		"ts": "2026-09-15T19:29:45.908Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 979032.86,
		"hash": "2786d4c64100ad4fedcc9c12c0169b86b5cc80f6dfca35557510b0c1b8ddb19e"
	},
	{
		"id": "d1248aaf5ed0",
		"ts": "2026-09-15T19:29:46.104Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1612786.36,
		"hash": "d1248aaf5ed0ca49490dbd9182432772d334237f598632ac2980c9084e4f7974"
	},
	{
		"id": "2219805ed10b",
		"ts": "2026-09-15T19:29:46.287Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1390525.39,
		"hash": "2219805ed10ba77d227d3364456322649bd8365187db82b735f572476982b0f3"
	},
	{
		"id": "b8324b33c758",
		"ts": "2026-09-15T19:29:46.485Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2929519.54,
		"hash": "b8324b33c75893543c0c337344271bd9d73616e721ae8f85967cfa5a87cdd04f"
	},
	{
		"id": "5516a4e21e50",
		"ts": "2026-09-15T19:29:46.662Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 437257.34,
		"hash": "5516a4e21e50dfc91a471d901c732edadcd7c17a0c5ffac65fd370aa3476c398"
	},
	{
		"id": "9c9cd094cd50",
		"ts": "2026-09-15T19:29:46.853Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13692625.43,
		"hash": "9c9cd094cd50934038dd821e0770c16200e467c53fd45e30d6fc168851e1e35e"
	},
	{
		"id": "b56784c79a2b",
		"ts": "2026-09-15T19:29:47.039Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 784768.07,
		"hash": "b56784c79a2bd83a59e9e06f3c4ea72879196e9d096654b792fb2d220dcfa181"
	},
	{
		"id": "c22554579903",
		"ts": "2026-09-15T19:29:47.233Z",
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
		"liquidityUsd": 644226.19,
		"hash": "c22554579903ac3cb9e92b1eb695fccb01275eefa899dd8127578c33fa8af659"
	},
	{
		"id": "88bbe4c5624f",
		"ts": "2026-09-15T19:29:47.415Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 551151.05,
		"hash": "88bbe4c5624fab389e5e4ac04e43cc424822d4788e3ee1ba6da66844c3948ac1"
	},
	{
		"id": "2e086c37e7bc",
		"ts": "2026-09-15T19:29:47.619Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 581511.48,
		"hash": "2e086c37e7bc7e374257ae1fbeb533c6d76d6299901189c036abf898c50cbf98"
	},
	{
		"id": "6ac01e2edf58",
		"ts": "2026-09-15T15:29:18.204Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118718291.2,
		"hash": "6ac01e2edf58a5111714bf01b8140ce2c969cdebad58aee69d79bd7b150a6c2f"
	},
	{
		"id": "3490bc4827cb",
		"ts": "2026-09-15T15:29:18.486Z",
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
		"liquidityUsd": 13979532.01,
		"hash": "3490bc4827cb8c57e69739567ee3eda171bb19070c08bde01b63fdf4ef565655"
	},
	{
		"id": "5146343de38f",
		"ts": "2026-09-15T15:29:18.791Z",
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
		"liquidityUsd": 924761.04,
		"hash": "5146343de38f57cb8672afdb454b8d70dbb190f26bd7b5594b32f8f65378fccb"
	},
	{
		"id": "d7a4c1490e36",
		"ts": "2026-09-15T15:29:19.101Z",
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
		"liquidityUsd": 33591516.35,
		"hash": "d7a4c1490e3652a4a44f503e136603d5cf3275a304bf6e169f01e6e6fc440dcf"
	},
	{
		"id": "6a085ea1978d",
		"ts": "2026-09-15T15:29:19.625Z",
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
		"liquidityUsd": 3812958.12,
		"hash": "6a085ea1978d57167679ce851f56de23e3e38a1a2783766384f7ba91d695aa53"
	},
	{
		"id": "53ebb16f3057",
		"ts": "2026-09-15T15:29:19.928Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1138408.77,
		"hash": "53ebb16f30578e9e34028e2c52994d02d3f1cb30b6bbdaea4afcc7b10bf7b340"
	},
	{
		"id": "6534e2e272cd",
		"ts": "2026-09-15T15:29:20.208Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1411275.47,
		"hash": "6534e2e272cdbec8860b4ce8f52770a5db57b7210f10f90e32305a5225186317"
	},
	{
		"id": "887fe97641db",
		"ts": "2026-09-15T15:29:20.490Z",
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
		"liquidityUsd": 1121254.82,
		"hash": "887fe97641dba0a6fe7db44a8f30761393890f8dc0f74715a70ec9061ffd17c5"
	},
	{
		"id": "f6664c351e07",
		"ts": "2026-09-15T15:29:20.816Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 861250.46,
		"hash": "f6664c351e07cc2b2d641ed4ad795897a97dc24e20d849dad6ae5fc379014d94"
	},
	{
		"id": "328408c375b4",
		"ts": "2026-09-15T15:29:21.103Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1411275.47,
		"hash": "328408c375b4a65d4c38ec33e57a76c999c7f0e8c743e098b75e852a30057dfc"
	},
	{
		"id": "e83ec8a815d2",
		"ts": "2026-09-15T15:29:21.373Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2999746.02,
		"hash": "e83ec8a815d20628489e1cc71d980b8d4c82ae3a7488ea23e52c1a8a8bcce7a1"
	},
	{
		"id": "11576e76fd32",
		"ts": "2026-09-15T15:29:21.635Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1385466.74,
		"hash": "11576e76fd32111de2720e79f8e16653b9625b17cd825af8d299a157bce91b65"
	},
	{
		"id": "b7834ec5a283",
		"ts": "2026-09-15T15:29:21.901Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 454399.11,
		"hash": "b7834ec5a28333cf4c6ef0187d46ce7e948c2f996754644f6629b84327993965"
	},
	{
		"id": "2899ae467186",
		"ts": "2026-09-15T15:29:22.168Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13730849.68,
		"hash": "2899ae467186977644da55e4fd60badcfb20b765a35d705cd564b8a60c58c274"
	},
	{
		"id": "ab2403cf362b",
		"ts": "2026-09-15T15:29:22.432Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 288447.26,
		"hash": "ab2403cf362b4e97dadb34fa3cfbca029c9ac69e16a5fb5810e54a561703e2f9"
	},
	{
		"id": "4a9decefb8a0",
		"ts": "2026-09-15T15:29:22.723Z",
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
		"liquidityUsd": 657101.13,
		"hash": "4a9decefb8a0619429902261f7281b0253716bdf2a7451110019adb7e57ffae3"
	},
	{
		"id": "1dcd1db6f11b",
		"ts": "2026-09-15T15:29:22.994Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 553194.01,
		"hash": "1dcd1db6f11bde64f7b4da368ceac27263d8c9df5b3f737168bee37123b6290d"
	},
	{
		"id": "40c1356beaa1",
		"ts": "2026-09-15T15:29:23.259Z",
		"symbol": "AAPL",
		"token": "0xb200000000000000000000C2e324d24d7eEcd1fb",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1196818.28,
		"hash": "40c1356beaa19c9243affa4f4992503fc6f990bec4218006a2c8a1823b8853f3"
	},
	{
		"id": "5dad214a1988",
		"ts": "2026-09-15T10:58:26.508Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120950250.06,
		"hash": "5dad214a1988e46c96ca1c8b62777c398e576fa2589001ff5d8c5a07d756acc7"
	},
	{
		"id": "6ad97990dcc2",
		"ts": "2026-09-15T10:58:26.733Z",
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
		"liquidityUsd": 13853498.22,
		"hash": "6ad97990dcc2ca400521f917195d32fe74f35ae0fe23b5ed9cb792264a8456a6"
	},
	{
		"id": "f63296ff6d39",
		"ts": "2026-09-15T10:58:26.943Z",
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
		"liquidityUsd": 946486.98,
		"hash": "f63296ff6d39bc94f698b50f7b15f1c5f385dd8d4db9297c25fee69f668333aa"
	},
	{
		"id": "9babc9e989a0",
		"ts": "2026-09-15T10:58:27.151Z",
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
		"liquidityUsd": 33762984.39,
		"hash": "9babc9e989a05cb8b1b0867281da6f807a0e5f7a7c4ffd2b1ae90ab25f105e8c"
	},
	{
		"id": "c5ca8dea0067",
		"ts": "2026-09-15T10:58:27.368Z",
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
		"liquidityUsd": 3874536.47,
		"hash": "c5ca8dea0067304a2d2eecfc121db833edcdd08a6b3a6c76461e0f9532c3f7a2"
	},
	{
		"id": "a4209396bfbb",
		"ts": "2026-09-15T10:58:27.576Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1163831.04,
		"hash": "a4209396bfbb43b2c7e7b9d0855139c8ea0f64b6ba781a69dceac122f14031db"
	},
	{
		"id": "c9e006c65ae3",
		"ts": "2026-09-15T10:58:27.792Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1622066.19,
		"hash": "c9e006c65ae3217fd72dffbfc709ceacc4d3173c36701f46795458fab62c073f"
	},
	{
		"id": "e19cd2294c1d",
		"ts": "2026-09-15T10:58:28.021Z",
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
		"liquidityUsd": 1147738.7,
		"hash": "e19cd2294c1de383874eabea8f6bbfda2fb8a8d1a25fdff35e6a84b6f7b87396"
	},
	{
		"id": "864044902c21",
		"ts": "2026-09-15T10:58:28.232Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1622066.19,
		"hash": "864044902c212e07113479c9d5520a53482fc651b3fd585e702e93d99632ec63"
	},
	{
		"id": "b4a625a4f196",
		"ts": "2026-09-15T10:58:28.442Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 856219.59,
		"hash": "b4a625a4f196cd3e84df26c661e40bf4301fe926933daefd3f7e70d99c606450"
	},
	{
		"id": "3906c905b591",
		"ts": "2026-09-15T10:58:28.645Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2986994.82,
		"hash": "3906c905b591f2ae2ce9d1a1f9871ff89b44f01dfb54dcc90712cb7a24ec26d2"
	},
	{
		"id": "3a17b21aad71",
		"ts": "2026-09-15T10:58:28.861Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13909697.09,
		"hash": "3a17b21aad7111a877375d55575b6e1e8b357e04e56f5f028f8809d6be2f1418"
	},
	{
		"id": "1f398d3f00e6",
		"ts": "2026-09-15T10:58:29.063Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 450746.14,
		"hash": "1f398d3f00e6f6631a6a437248538f80b1d956e64f61649f78cd3368b6c34958"
	},
	{
		"id": "e0fe59441294",
		"ts": "2026-09-15T10:58:29.272Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1435895.68,
		"hash": "e0fe594412945f1bd4dccda94765b0c105143a0cb53f51254a0645f4c5767df5"
	},
	{
		"id": "ef10202728a9",
		"ts": "2026-09-15T10:58:29.465Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 297171.94,
		"hash": "ef10202728a9028ebd78d49f393cceb2b5310d429145c711f526058805850e79"
	},
	{
		"id": "675ca56bda97",
		"ts": "2026-09-15T10:58:29.667Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 551496.26,
		"hash": "675ca56bda970222dbf22b1cf21dbf951589a48bff99fff6123a490e7646ddac"
	},
	{
		"id": "4df7b41c0284",
		"ts": "2026-09-15T10:58:29.899Z",
		"symbol": "AAPL",
		"token": "0xb200000000000000000000C2e324d24d7eEcd1fb",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1196482.72,
		"hash": "4df7b41c02844fffa7c38550491bb4f40c8a1bc3c86cd2e6dde9782ef7ac2bf6"
	},
	{
		"id": "79b5a59c675c",
		"ts": "2026-09-15T05:45:02.858Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120903172.3,
		"hash": "79b5a59c675cd096c9815cf05900249d20bafbbc58df3dc1d13bc2648d9ca9bb"
	},
	{
		"id": "fb0940b5a53e",
		"ts": "2026-09-15T05:45:03.112Z",
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
		"liquidityUsd": 14773440.49,
		"hash": "fb0940b5a53e81fed1f5c9153472d6420cc6d06674577c7040d638d741e6b9da"
	},
	{
		"id": "7b765a0a7e82",
		"ts": "2026-09-15T05:45:03.361Z",
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
		"liquidityUsd": 946853.5,
		"hash": "7b765a0a7e82e0218922b01daf182f2a08d5e02baf8008063fce6d153aa6b816"
	},
	{
		"id": "5a88aade3073",
		"ts": "2026-09-15T05:45:03.839Z",
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
		"liquidityUsd": 33773775.14,
		"hash": "5a88aade3073acb88dec648fb448ee428eec6746cf8469043ae895d6aae625e6"
	},
	{
		"id": "d7b1079751ee",
		"ts": "2026-09-15T05:45:04.341Z",
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
		"liquidityUsd": 3889705.23,
		"hash": "d7b1079751ee0695e9dde20abd57530722ba4e3c0f78fb181fab4410432534d8"
	},
	{
		"id": "c1b03ade1983",
		"ts": "2026-09-15T05:45:04.578Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1167799.76,
		"hash": "c1b03ade19830928786d8ec930bbf0c72e4c6e63cde8c98ac135e08752d2c86b"
	},
	{
		"id": "017fc016f4dc",
		"ts": "2026-09-15T05:45:04.837Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1583092.74,
		"hash": "017fc016f4dc383d6c8c4a72dfcab5cad4a26cd73d6f578598a508877b90e202"
	},
	{
		"id": "df7377ef19f2",
		"ts": "2026-09-15T05:45:05.092Z",
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
		"liquidityUsd": 1150437.42,
		"hash": "df7377ef19f264d05e6a5ecf2cc019c870ab9caeecc0d6097daf7067c77c8c0c"
	},
	{
		"id": "015d50ea7048",
		"ts": "2026-09-15T05:45:05.368Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3031444.91,
		"hash": "015d50ea7048fd92d98a0ee2e6578d0d8100e6d6983e802dcfc02701149097ad"
	},
	{
		"id": "739f7d09154f",
		"ts": "2026-09-15T05:45:05.649Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1583010.83,
		"hash": "739f7d09154f6418bb419e143527acb9e02ad95f3f1d17765bec009b78c8fe3a"
	},
	{
		"id": "9db6003772f7",
		"ts": "2026-09-15T05:45:05.866Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 842733.18,
		"hash": "9db6003772f7c55a62a6ab93853eef5ad7e4c251ca22e00e54fd21045ac98c90"
	},
	{
		"id": "9693954aa806",
		"ts": "2026-09-15T05:45:06.099Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 365443.04,
		"hash": "9693954aa806ed7da856b3216e8bfed98d8240e60d77e7ee010225c72df8f029"
	},
	{
		"id": "10774ee6bcad",
		"ts": "2026-09-15T05:45:06.330Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1413793.04,
		"hash": "10774ee6bcadcaa5cb7aef596d18275b80fbdf9390fd1c7c7e9a7998834efacc"
	},
	{
		"id": "565d24a1a90b",
		"ts": "2026-09-15T05:45:06.563Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13863885.5,
		"hash": "565d24a1a90bce5cad8f1de7275d752540de07e0917b32dcf4f6c8a1ae553d96"
	},
	{
		"id": "101bebc0286f",
		"ts": "2026-09-15T05:45:06.795Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 289169.1,
		"hash": "101bebc0286ff52ac2c3e1db1d3bec168e69126efd670eea521a6cf68e91f31e"
	},
	{
		"id": "fb44a2c05ab9",
		"ts": "2026-09-15T05:45:07.012Z",
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
		"liquidityUsd": 668473.26,
		"hash": "fb44a2c05ab9ec516c73bf42f0bfd561ee523e7f33b4e99a3b3c28f44864d781"
	},
	{
		"id": "e20b795deffc",
		"ts": "2026-09-15T05:45:07.248Z",
		"symbol": "AAPL",
		"token": "0xb200000000000000000000C2e324d24d7eEcd1fb",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1562424.3,
		"hash": "e20b795deffcb6bc219e5a611b3862397919fa4935bc360b18ee8662dbfbee86"
	},
	{
		"id": "5949c42d610f",
		"ts": "2026-09-15T00:13:10.798Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 121773810.41,
		"hash": "5949c42d610ffc5f010cc2d9612545ed959ae7a4aed766edcab827a7c2b03dc9"
	},
	{
		"id": "4c21299b9326",
		"ts": "2026-09-15T00:13:11.448Z",
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
		"liquidityUsd": 13075217.73,
		"hash": "4c21299b93260786a326c146734cac80b4956605ab6e824c7e8a50b5dd112627"
	},
	{
		"id": "20b0bdd5ee0e",
		"ts": "2026-09-15T00:13:11.726Z",
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
		"liquidityUsd": 955983.91,
		"hash": "20b0bdd5ee0e49d1d1aa6ee6561c17d3cc8c150b1cc926f11d44dca6abaeb24b"
	},
	{
		"id": "eb85cb3e551a",
		"ts": "2026-09-15T00:13:12.170Z",
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
		"liquidityUsd": 34290032.23,
		"hash": "eb85cb3e551a796f2dc463cf7ded0ea269319866a02243ab46a0d55bfe9ed767"
	},
	{
		"id": "96163ce17a9c",
		"ts": "2026-09-15T00:13:12.418Z",
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
		"liquidityUsd": 3941061.4,
		"hash": "96163ce17a9ced4e104d3da7034be0eb614c28e231bdbceac4e951b165363c09"
	},
	{
		"id": "9b29e51470e7",
		"ts": "2026-09-15T00:13:12.681Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1182410.69,
		"hash": "9b29e51470e7142bd58a188a66a49ca4e1268d76bb2b29bce9c3571344f5c348"
	},
	{
		"id": "43634dface76",
		"ts": "2026-09-15T00:13:12.945Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1579288.9,
		"hash": "43634dface76cfe6a205b89875bbe62a5e6b4075c2e8f609b9a6925c5e52b817"
	},
	{
		"id": "75a1960e4be9",
		"ts": "2026-09-15T00:13:13.214Z",
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
		"liquidityUsd": 1162084.34,
		"hash": "75a1960e4be971cab6cb2f15d823b1dc0a115ca1b784f93215fbb49075d8f5c2"
	},
	{
		"id": "015bb8516702",
		"ts": "2026-09-15T00:13:13.488Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3118964.88,
		"hash": "015bb8516702feca347077505481a73929479db7fd621f2f80b5b064a3fc6e58"
	},
	{
		"id": "41f547d4d423",
		"ts": "2026-09-15T00:13:13.736Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1579288.9,
		"hash": "41f547d4d423545a86ce9147a948739bf3233ae6067169ab2fb8c5d051d1768d"
	},
	{
		"id": "60c8cbdaf1ed",
		"ts": "2026-09-15T00:13:13.968Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 458732.09,
		"hash": "60c8cbdaf1ed392d8439c3a72894dba1dedb52051bfbd56f9058810086213d0a"
	},
	{
		"id": "7f87d2d65fa6",
		"ts": "2026-09-15T00:13:14.201Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14260713.95,
		"hash": "7f87d2d65fa6327a19daab5132ff4144fc6616f571af1e11b75e2365d8a55dee"
	},
	{
		"id": "ad933b214710",
		"ts": "2026-09-15T00:13:14.433Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1437335.56,
		"hash": "ad933b2147103ed774dd76b373fa946f328903be2741ad1f9794c6bbc9dfea3e"
	},
	{
		"id": "44fb79c353ae",
		"ts": "2026-09-15T00:13:14.663Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 277734.56,
		"hash": "44fb79c353ae30a3652c1f58e0d552160232cf54296d7d49efefbf4350482187"
	},
	{
		"id": "8ed9b2423fb5",
		"ts": "2026-09-15T00:13:14.895Z",
		"symbol": "AAPL",
		"token": "0xb200000000000000000000C2e324d24d7eEcd1fb",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1449054.85,
		"hash": "8ed9b2423fb5f59ac422f4768ddb868465bd959d18fed4a45eb5bc774dab9fa4"
	},
	{
		"id": "271d7ca3305e",
		"ts": "2026-09-15T00:13:15.126Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 652895.48,
		"hash": "271d7ca3305ee25b226a05f73b627fddc798e316ede9bdaade596b492e7bb235"
	},
	{
		"id": "dea4e23af548",
		"ts": "2026-09-15T00:13:15.355Z",
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
		"liquidityUsd": 690192.63,
		"hash": "dea4e23af5488050157a47312f4258a7b4d067eb84fcd5e9a9bf851f0c31ba7c"
	},
	{
		"id": "a7776017dd68",
		"ts": "2026-09-14T21:23:48.611Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 122436232.55,
		"hash": "a7776017dd681d959e9b88fa3246caa5fbf155c5b694b7b85a1edb951f070983"
	},
	{
		"id": "5c495995c7aa",
		"ts": "2026-09-14T21:23:49.077Z",
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
		"liquidityUsd": 14741910.07,
		"hash": "5c495995c7aa77cb9c40e699f67ff9f676962333dd2287c9ebd0334025c4ab01"
	},
	{
		"id": "3a6e20353f49",
		"ts": "2026-09-14T21:23:49.467Z",
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
		"liquidityUsd": 970851.43,
		"hash": "3a6e20353f49fc821011171f009c237426121678e2df53b713763902c77df88a"
	},
	{
		"id": "fb1da9cd6c4d",
		"ts": "2026-09-14T21:23:49.774Z",
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
		"liquidityUsd": 34381159.28,
		"hash": "fb1da9cd6c4d30987e3e8925b81be7ca017d7216b4b48a06dfda7b29d7b943c6"
	},
	{
		"id": "e546971aea64",
		"ts": "2026-09-14T21:23:50.033Z",
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
		"liquidityUsd": 4010121.71,
		"hash": "e546971aea642c272e23093149baa4e84fbb466a80562be9dbedace3ab89622e"
	},
	{
		"id": "1753ece90a21",
		"ts": "2026-09-14T21:23:50.275Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1208979.69,
		"hash": "1753ece90a2164b1e0d0b564bd1148286f5feb2034d611375dc5c8f7a46ebcd1"
	},
	{
		"id": "1127a3a684b3",
		"ts": "2026-09-14T21:23:50.546Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1589354.94,
		"hash": "1127a3a684b35a63343aa9790009d31356ee5d7549685b4a449d5e940adf8857"
	},
	{
		"id": "f35fded8b9ea",
		"ts": "2026-09-14T21:23:50.795Z",
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
		"liquidityUsd": 1181437.67,
		"hash": "f35fded8b9eafd0a873e9d12abc142b10e261430324b343a8dcc941bb21595af"
	},
	{
		"id": "ced0a93569ce",
		"ts": "2026-09-14T21:23:51.043Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1589354.94,
		"hash": "ced0a93569ce3ef26efbd010f3be9043b652a5c83e13cd39649c359e981d58d3"
	},
	{
		"id": "7ced82adcd61",
		"ts": "2026-09-14T21:23:51.303Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3228951.05,
		"hash": "7ced82adcd615d09ea371c65d5787dca36401d2d5c7c738f36ae2241cd77fd01"
	},
	{
		"id": "e81adaa0621d",
		"ts": "2026-09-14T21:23:51.539Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 453967.89,
		"hash": "e81adaa0621d4b6bc2bf4e61ea16d59a46be4c1727c9facb8672be2bc82d3a01"
	},
	{
		"id": "240b455f1860",
		"ts": "2026-09-14T21:23:51.774Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14166601.54,
		"hash": "240b455f18603e6573de86907b10e603e6a64925e4fc7c5c50371cf1f7f8d0d6"
	},
	{
		"id": "7e72032550e0",
		"ts": "2026-09-14T21:23:52.011Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 267280.66,
		"hash": "7e72032550e09d813375664439d6750f1b4a299ca1150b01aa6521c62f54a4e5"
	},
	{
		"id": "d34a276105fc",
		"ts": "2026-09-14T21:23:52.238Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1562813.26,
		"hash": "d34a276105fca5f351ae0404e9cc2f6f55cd79c0661aff88b58610c15d1a3f76"
	},
	{
		"id": "0743145b13ff",
		"ts": "2026-09-14T21:23:52.472Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 665915.38,
		"hash": "0743145b13fff3b6a8fb56abc0416bffa6ba7a4eea7db530279077df978c2f76"
	},
	{
		"id": "a24289e2b780",
		"ts": "2026-09-14T21:23:52.719Z",
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
		"liquidityUsd": 728193.83,
		"hash": "a24289e2b7803ae0f1291e6ca87ead831e7674968de698241b13702408a5a271"
	},
	{
		"id": "847345033c67",
		"ts": "2026-09-14T21:23:52.957Z",
		"symbol": "AAPL",
		"token": "0xb200000000000000000000C2e324d24d7eEcd1fb",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1560884.57,
		"hash": "847345033c67f64e9689e32d4c19f6e1dab768c9d5ee4ec98a3d41d2a65da663"
	},
	{
		"id": "7acccfa39bb1",
		"ts": "2026-09-14T21:23:53.194Z",
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
		"liquidityUsd": 1441952.22,
		"hash": "7acccfa39bb1146a7152be4e9d5c11f3d64084dddb8cbf5d20ecaee0ee48b41c"
	},
	{
		"id": "df2518ddfd43",
		"ts": "2026-09-14T17:34:48.012Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 121845593.09,
		"hash": "df2518ddfd436aaec103942d2dc8577541a187678fcd819e7d238183772ee92f"
	},
	{
		"id": "dcfe83d9707c",
		"ts": "2026-09-14T17:34:48.222Z",
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
		"liquidityUsd": 18504626.93,
		"hash": "dcfe83d9707c04cad97d619435ac3b3b4a2cf194bc8fd589371b70dc1d18602c"
	},
	{
		"id": "57aa80c017e9",
		"ts": "2026-09-14T17:34:48.432Z",
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
		"liquidityUsd": 962134.87,
		"hash": "57aa80c017e9cb5f791ecfcad313e2329c2ccc43c05fbe00f0507b308c29261a"
	},
	{
		"id": "551cba0a8642",
		"ts": "2026-09-14T17:34:48.645Z",
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
		"liquidityUsd": 34413703.76,
		"hash": "551cba0a8642363060ed8ea2906c1ce6588bf68fc9d9bfac868b69809c548ba2"
	},
	{
		"id": "be0cd0210ea6",
		"ts": "2026-09-14T17:34:48.851Z",
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
		"liquidityUsd": 3962293.07,
		"hash": "be0cd0210ea6c0c761fc7c845bca24dfdab182975e2498fb1c7d16e278f38c04"
	},
	{
		"id": "81e464ca3fbf",
		"ts": "2026-09-14T17:34:49.093Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1196234.07,
		"hash": "81e464ca3fbfdf2f9687a5645ed8fee0c598136d1a8f2c2b068ad523461f12f0"
	},
	{
		"id": "cddceedfd357",
		"ts": "2026-09-14T17:34:49.294Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1429452.76,
		"hash": "cddceedfd3579fa4ac736a42ab137c6592a96bd9fa5a4a45518c0071fbd02578"
	},
	{
		"id": "9891f75419b5",
		"ts": "2026-09-14T17:34:49.511Z",
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
		"liquidityUsd": 1109694.17,
		"hash": "9891f75419b5a11fc5710398d4df3b3835961d011738aca661ec41506f83c037"
	},
	{
		"id": "88e110cc70a1",
		"ts": "2026-09-14T17:34:49.724Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1361053.25,
		"hash": "88e110cc70a1f673e1da40f16e6ed195371d37ca4394221cf7daf71c226e473b"
	},
	{
		"id": "5dff40e21b37",
		"ts": "2026-09-14T17:34:49.931Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3277849.21,
		"hash": "5dff40e21b37f4f7c815b29ea33d219915ea880975bf10c52c365a06eef01870"
	},
	{
		"id": "4de1e872a1bf",
		"ts": "2026-09-14T17:34:50.142Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14054360.87,
		"hash": "4de1e872a1bfbb90b33506dea42688d32e2970c4448aab0ee7c9e5324c19b1bd"
	},
	{
		"id": "bfa7e9a77165",
		"ts": "2026-09-14T17:34:50.331Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 445408.64,
		"hash": "bfa7e9a771656dcb488812430d6dfe9783b8d1f8b8806c5020b1d02caa9ed039"
	},
	{
		"id": "bdba134f66ce",
		"ts": "2026-09-14T17:34:50.530Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 685749.64,
		"hash": "bdba134f66ce6b341e4e728b8f5675adc125673a4aa0b92a3cf45c1e5d66e88d"
	},
	{
		"id": "2a27841f5889",
		"ts": "2026-09-14T17:34:50.718Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1487099.33,
		"hash": "2a27841f588949385fc69d538cdf94b93a25e9d28f595ded83f6cb7e2778c43b"
	},
	{
		"id": "a6c355ae8cf4",
		"ts": "2026-09-14T17:34:51.039Z",
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
		"liquidityUsd": 670047.73,
		"hash": "a6c355ae8cf4665605a15db77c7c9337c915054801ae38201a99fd863b375615"
	},
	{
		"id": "6e0346032cd9",
		"ts": "2026-09-14T17:34:51.254Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 269802.73,
		"hash": "6e0346032cd98b6313016c67ff908c2e116017880d003c43492d6c08922f5cf0"
	},
	{
		"id": "5624d6529f3e",
		"ts": "2026-09-14T17:34:51.475Z",
		"symbol": "AAPL",
		"token": "0xb200000000000000000000C2e324d24d7eEcd1fb",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1374785.24,
		"hash": "5624d6529f3e5d69b436cb9fe1275af68539975b8b470b3f69c6a7fe7632b046"
	},
	{
		"id": "a794286308f2",
		"ts": "2026-09-14T17:34:51.675Z",
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
		"liquidityUsd": 1429452.76,
		"hash": "a794286308f24ff1f0eac0789576dd9678f8582e9b26523d9a6fa794feab5878"
	},
	{
		"id": "23f493bf0d5a",
		"ts": "2026-09-14T11:40:07.649Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 121160919.18,
		"hash": "23f493bf0d5adb17cc584921434df385862655063aa3d18a0ae05cb49a3a4de0"
	},
	{
		"id": "fc9613938da9",
		"ts": "2026-09-14T11:40:07.937Z",
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
		"liquidityUsd": 16855430.17,
		"hash": "fc9613938da9f8c2ab04511337639ebb298f44c8c1273d0784680cc3ab781cd0"
	},
	{
		"id": "17494df42d6b",
		"ts": "2026-09-14T11:40:08.391Z",
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
		"liquidityUsd": 967227.56,
		"hash": "17494df42d6bc05af09ce22009327a21916c3d303558f80d2f51d27b1dc09d81"
	},
	{
		"id": "ccaf5e222df2",
		"ts": "2026-09-14T11:40:08.731Z",
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
		"liquidityUsd": 34363540.43,
		"hash": "ccaf5e222df29c7519efc00f6d9d0abe1214b581dd68afd58d2eb92eda02f50e"
	},
	{
		"id": "7043457f0ef0",
		"ts": "2026-09-14T11:40:09.207Z",
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
		"liquidityUsd": 3935142.83,
		"hash": "7043457f0ef0bb2612db06a0212b4ddb3eccb05d2f8c6a42ddf8f97283b4a884"
	},
	{
		"id": "8508ad158dbb",
		"ts": "2026-09-14T11:40:09.498Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1184787.24,
		"hash": "8508ad158dbbbd9e24d2602dd1121c7ae532b685a6f05359be3c30826422612c"
	},
	{
		"id": "991861d2d4de",
		"ts": "2026-09-14T11:40:09.784Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1543197,
		"hash": "991861d2d4de422be0d5399063ec3c77f3e02074af7921aad15f304d789ddaf6"
	},
	{
		"id": "ca64e8c171c2",
		"ts": "2026-09-14T11:40:10.051Z",
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
		"liquidityUsd": 1102456.8,
		"hash": "ca64e8c171c2f29d44d2a31e9b52d84a6fee2117e0ea16b07c2060e25c4ffdd0"
	},
	{
		"id": "7445ffeff21e",
		"ts": "2026-09-14T11:40:10.420Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1543197,
		"hash": "7445ffeff21ee832023c336e280a874c8599d4d2d9c1c94e8c2d436064d2e15c"
	},
	{
		"id": "8be00c829a05",
		"ts": "2026-09-14T11:40:10.669Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 473437.69,
		"hash": "8be00c829a054f5fe3f479fbce427ac8a9ca8703ab2e90df65397c9f42ed86cc"
	},
	{
		"id": "08a376920f0d",
		"ts": "2026-09-14T11:40:10.892Z",
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
		"liquidityUsd": 3129622.91,
		"hash": "08a376920f0d30dd9d0d9f35aac76c7539f3de9343d609499e63291ecc81a2c1"
	},
	{
		"id": "8df458405349",
		"ts": "2026-09-14T11:40:11.128Z",
		"symbol": "LSK",
		"token": "0xac485391EB2d7D88253a7F1eF18C37f4242D1A24",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 343865.33,
		"hash": "8df45840534921d962199af029f025e4867a193fb06942c25a44d83b8f0d8236"
	},
	{
		"id": "11fb14fc08b0",
		"ts": "2026-09-14T11:40:11.405Z",
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
		"liquidityUsd": 691417.13,
		"hash": "11fb14fc08b0d82797136b490f5387edee9c2a70b54e7db40f3695cf46df06a3"
	},
	{
		"id": "f2f1fdbba86f",
		"ts": "2026-09-14T11:40:11.638Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14176917.64,
		"hash": "f2f1fdbba86ff9a187b42fe8c54660b5a2a05153a6ef001d25646f9059aa7b53"
	},
	{
		"id": "365699574a0a",
		"ts": "2026-09-14T11:40:11.858Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1485035.31,
		"hash": "365699574a0ac9e2eec09d02cd666093d4b6cb4b78196613dbd2df573c0e5a49"
	},
	{
		"id": "ea17d7bb32c3",
		"ts": "2026-09-14T11:40:12.077Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 671278.79,
		"hash": "ea17d7bb32c38c9e7a64730fb1e460a530b8d98918b9bcc6d7ccffdaeadf5cec"
	},
	{
		"id": "90d7dbba3e7d",
		"ts": "2026-09-14T11:40:12.301Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 284637.94,
		"hash": "90d7dbba3e7da440de63b88a10637aa5882af63b044df75291344378c5739917"
	},
	{
		"id": "23a46e5a1ea2",
		"ts": "2026-09-14T11:40:12.614Z",
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
		"liquidityUsd": 1536745.04,
		"hash": "23a46e5a1ea257f1b8d0932ebc3be8a5bc599bbdb493a2e81b8a4f9113a95026"
	},
	{
		"id": "c01d44ee534a",
		"ts": "2026-09-14T11:40:12.844Z",
		"symbol": "STONX",
		"token": "0x89d8CB38067b55f820F29A9E12d0CE18682A2Bfc",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 938641.19,
		"hash": "c01d44ee534aa72d5959a461cd00d2058d972186ee14e2df5769a83f33b20064"
	},
	{
		"id": "914069296d09",
		"ts": "2026-09-14T05:43:36.234Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120947876.53,
		"hash": "914069296d09ec709e712e8d18128c0b44711fb265df4c8c3be0e64684f96ef8"
	},
	{
		"id": "5826a3b98ff7",
		"ts": "2026-09-14T05:43:36.680Z",
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
		"liquidityUsd": 15081827.35,
		"hash": "5826a3b98ff7639968fc7be9d7cbcb3e1596e611481cc9158e2e0f97fb495449"
	},
	{
		"id": "d1318fa30c7b",
		"ts": "2026-09-14T05:43:36.924Z",
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
		"liquidityUsd": 971288.96,
		"hash": "d1318fa30c7bc254c61b0dd802304da8022598b5d250223fc1bf5b116efa05a7"
	},
	{
		"id": "0963e685a7be",
		"ts": "2026-09-14T05:43:37.168Z",
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
		"liquidityUsd": 34254719.83,
		"hash": "0963e685a7be540b64cceb506da22fcd4306875186d756b476ca098400c18704"
	}
]
