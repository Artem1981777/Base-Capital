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
	"updatedAt": "2026-09-07T02:41:00.118Z",
	"tokensScored": 16492,
	"verdictsIssued": 16492,
	"safe": 14005,
	"risky": 1218,
	"likelyRug": 1269,
	"ticks": 946
}

export const verdicts: AgentVerdict[] = [
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
	},
	{
		"id": "fc4f29499a21",
		"ts": "2026-09-06T11:55:09.326Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3345625.39,
		"hash": "fc4f29499a21020590a60a8b6afd7feaa57b9ed51cf8adfc8cc153c9401bb931"
	},
	{
		"id": "a82b1170958e",
		"ts": "2026-09-06T11:55:09.553Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13113256.49,
		"hash": "a82b1170958ec45a2867b76908c33030773aa87971ca5e6148e459a99c93d04d"
	},
	{
		"id": "e6356307f594",
		"ts": "2026-09-06T11:55:09.779Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1203816.23,
		"hash": "e6356307f594b2354bbf6ec79363032b3400f0ed0c31830c35ba354feffe6af3"
	},
	{
		"id": "8dc6b6d44654",
		"ts": "2026-09-06T11:55:10.006Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1179479.32,
		"hash": "8dc6b6d446548bcb997320e5e13b7387cbb85ea2de3329a16ed3fd15a8bd4b6f"
	},
	{
		"id": "152c93d617a2",
		"ts": "2026-09-06T11:55:10.232Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 201968.45,
		"hash": "152c93d617a26e3392d1671c5675ad5a72266d7daae611ea8f6cccd7f4f800a0"
	},
	{
		"id": "2822db6f5732",
		"ts": "2026-09-06T07:34:35.931Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116787654.01,
		"hash": "2822db6f5732d9ee0009e1ac4747d9542f625908b84cbcc679dac9fb5408e1fe"
	},
	{
		"id": "c0d6bbc07f2c",
		"ts": "2026-09-06T07:34:36.460Z",
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
		"liquidityUsd": 18277654.94,
		"hash": "c0d6bbc07f2c71ee15e174f7fda62d392b7ab6d0e735aea7d8f9343f0d6b3aa8"
	},
	{
		"id": "457ce24608c4",
		"ts": "2026-09-06T07:34:36.648Z",
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
		"liquidityUsd": 1031486.81,
		"hash": "457ce24608c45600c704b0f729dfd22613847019814d097b02d4355efe81ffbd"
	},
	{
		"id": "122634023cf7",
		"ts": "2026-09-06T07:34:36.838Z",
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
		"liquidityUsd": 30389867.27,
		"hash": "122634023cf75989f9d0d4f4051e32646a12f72bc8d51627acf39cdc28a45467"
	},
	{
		"id": "beb67585711b",
		"ts": "2026-09-06T07:34:37.057Z",
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
		"liquidityUsd": 4257117.16,
		"hash": "beb67585711baeb9f21c4f2e1c5445deaface9daa7a7b4aeffa6fbfb6085ed62"
	},
	{
		"id": "1ab1f6023555",
		"ts": "2026-09-06T07:34:37.269Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1215317.1,
		"hash": "1ab1f60235558e03a46b18777662164cf5a58da1d16eda5e0e869866797d604e"
	},
	{
		"id": "23638656211d",
		"ts": "2026-09-06T07:34:37.541Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30389866.92,
		"hash": "23638656211dab60ba7b7119e2e744e0872618eea2f89409fb8251ee3084a466"
	},
	{
		"id": "090a21c9000e",
		"ts": "2026-09-06T07:34:37.731Z",
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
		"liquidityUsd": 1776481.95,
		"hash": "090a21c9000e947bfd134c713e978d723b0c109126bab83412ad5935383e9817"
	},
	{
		"id": "c52ac8e5d7c8",
		"ts": "2026-09-06T07:34:37.921Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 665630.08,
		"hash": "c52ac8e5d7c84f5cbbf8ca7a6d763a5c8e569fb55d11c8d45650f0159a6432e6"
	},
	{
		"id": "3d3a0c04458f",
		"ts": "2026-09-06T07:34:38.111Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 255963.32,
		"hash": "3d3a0c04458ff4cf8efb80501b6bf4ca6c9817878ad4853aa7c0b5e326792e4e"
	},
	{
		"id": "2118b61fcddd",
		"ts": "2026-09-06T07:34:38.287Z",
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
		"liquidityUsd": 1229561.47,
		"hash": "2118b61fcdddbb1556fcc5928ee7068ead5de5cdf4286b8d806d8d6b871d4f99"
	},
	{
		"id": "b81bc80d8ceb",
		"ts": "2026-09-06T07:34:38.478Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1422876.16,
		"hash": "b81bc80d8ceba2b09b99de22a958147830e20af6dd758b4a1759f55113e73987"
	},
	{
		"id": "6b09fadd2217",
		"ts": "2026-09-06T07:34:38.653Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 130469.26,
		"hash": "6b09fadd2217f5d6d6e249e5671c536c92842290da62de69eac0fd2dce598da1"
	},
	{
		"id": "36656b903b19",
		"ts": "2026-09-06T07:34:38.834Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3295890,
		"hash": "36656b903b19952e000fa16e999bbc551fd31a655c497934cee25b5966635e9a"
	},
	{
		"id": "832063c1a155",
		"ts": "2026-09-06T07:34:39.011Z",
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
		"liquidityUsd": 583596.01,
		"hash": "832063c1a1559444020bf6435d08933a8fb5ddc6a23b3c22be71702571e70d90"
	},
	{
		"id": "1d9a930bd436",
		"ts": "2026-09-06T07:34:39.193Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 142224.34,
		"hash": "1d9a930bd436946c27f07c23020fc0b0308777cb9ad47d17358e0230a2decf32"
	},
	{
		"id": "6c2ffdd72801",
		"ts": "2026-09-06T07:34:39.371Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 188261.21,
		"hash": "6c2ffdd7280141b790d5eea7563e45917a524b59322d04ed39fdf1df574aeac1"
	},
	{
		"id": "b0ff0be12840",
		"ts": "2026-09-06T07:34:39.552Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 58128.29,
		"hash": "b0ff0be128409e637ba4c9142c0097522bfb06e13272bfc9582b60c463d2da69"
	},
	{
		"id": "f9bd12281688",
		"ts": "2026-09-06T07:34:39.729Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1877058.61,
		"hash": "f9bd1228168827d0fbe9517256d82c432d323f7c67d2d2589fdcbb8a9a118646"
	},
	{
		"id": "302357f53478",
		"ts": "2026-09-06T02:43:06.412Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116850676.98,
		"hash": "302357f53478c571424d685b3cea3c21585a58a51c8b77d86834884e8ef0bfe5"
	},
	{
		"id": "0272af286fe3",
		"ts": "2026-09-06T02:43:06.689Z",
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
		"liquidityUsd": 18418616.62,
		"hash": "0272af286fe3b1cc8e3504d49e3b17ad13c58b7f437b6f62c574cb72c0fd5629"
	},
	{
		"id": "6250fb624a38",
		"ts": "2026-09-06T02:43:06.962Z",
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
		"liquidityUsd": 1043530.68,
		"hash": "6250fb624a38d8ab9a0ad8f469cc345757a7ba1897d644706ea26a4dfb325fd2"
	},
	{
		"id": "eabc02d4b2e7",
		"ts": "2026-09-06T02:43:07.235Z",
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
		"liquidityUsd": 30487046.97,
		"hash": "eabc02d4b2e75d47e0e903603fa696ee713535954cbb236f9a08636ea2db8e33"
	},
	{
		"id": "0d8680f1a4d3",
		"ts": "2026-09-06T02:43:07.484Z",
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
		"liquidityUsd": 4277573.85,
		"hash": "0d8680f1a4d3dedd5d6030276df950bf58243fa80101f4032bf22db91d24e4c4"
	},
	{
		"id": "474e2eeedbf7",
		"ts": "2026-09-06T02:43:07.740Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1212982.58,
		"hash": "474e2eeedbf7cc7c9360157a3f30ca1597319f8a8bf2b8e5142c04ac2d249b26"
	},
	{
		"id": "9f91a4515a13",
		"ts": "2026-09-06T02:43:08.224Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30487046.97,
		"hash": "9f91a4515a13f36f64e138d591666c7977bb2894bae4d7a214ec0943acd5ec02"
	},
	{
		"id": "222a3412d3a0",
		"ts": "2026-09-06T02:43:08.517Z",
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
		"liquidityUsd": 1775414.06,
		"hash": "222a3412d3a02bbdf4d0227121c2e18244fc74a179a970ec53723272d2c0c332"
	},
	{
		"id": "0ee05ab99f89",
		"ts": "2026-09-06T02:43:08.785Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 478932.21,
		"hash": "0ee05ab99f8984521aacd27a4eab03db45abe8ee03107f50de679a1df468164b"
	},
	{
		"id": "234b6fed43a1",
		"ts": "2026-09-06T02:43:09.077Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 234877.96,
		"hash": "234b6fed43a1f47c928c4ee45eefc1a51f72a314a9615f2e081ea17224253a9b"
	},
	{
		"id": "166c3ce72d51",
		"ts": "2026-09-06T02:43:09.310Z",
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
		"liquidityUsd": 1290653.53,
		"hash": "166c3ce72d51466ff7622a80f79685832fcfba816cc6a3f58e9d63b46654a5a7"
	},
	{
		"id": "965ebbe12321",
		"ts": "2026-09-06T02:43:09.543Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1461229.47,
		"hash": "965ebbe12321d44c6f7b594a76a06551188953f64a26231d12e37ccd227e567a"
	},
	{
		"id": "736b09fbdc51",
		"ts": "2026-09-06T02:43:09.777Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 121586.19,
		"hash": "736b09fbdc5195bea0455f30477a8ec25774a1bae6ba4071ac7501dcc4bb9fae"
	},
	{
		"id": "67016b580512",
		"ts": "2026-09-06T02:43:10.010Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3329655.61,
		"hash": "67016b58051286b6912b20a11b8a5ebd4d22a5b1f3086407865fea2121f3d8ae"
	},
	{
		"id": "efecd2ef7bdd",
		"ts": "2026-09-06T02:43:10.242Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 53761.81,
		"hash": "efecd2ef7bdd34b554db9119200d370c8858bd0ee8c44d853890e17c21182fdf"
	},
	{
		"id": "d1fd5bba3dff",
		"ts": "2026-09-06T02:43:10.475Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 181470.33,
		"hash": "d1fd5bba3dff72b6ae311a36500679b14b7472b6246107c3bfa8711c110f66f9"
	},
	{
		"id": "b99141e53ef3",
		"ts": "2026-09-06T02:43:10.707Z",
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
		"liquidityUsd": 602443.74,
		"hash": "b99141e53ef397563f3a6de1a1cf0f32cdfe0886631f4fefbe93769edd37367c"
	},
	{
		"id": "1877d52185e8",
		"ts": "2026-09-06T02:43:10.940Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 131633.04,
		"hash": "1877d52185e88ab9b04bb2fa4ac178b047d2f76da4c1a1653a78144e6e9e0215"
	},
	{
		"id": "763d57640cec",
		"ts": "2026-09-06T02:43:11.174Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1879023.26,
		"hash": "763d57640cec06d2451c026e4e541ca0f9d9944743a622a0923fbb6e3c64c57e"
	},
	{
		"id": "64e315258da6",
		"ts": "2026-09-05T23:31:24.894Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116674120.36,
		"hash": "64e315258da6ffcf549c76e8b83ea5b6eee045c4b754243c1a6372cb11a28ba5"
	},
	{
		"id": "44ac4595cca9",
		"ts": "2026-09-05T23:31:25.522Z",
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
		"liquidityUsd": 19685395.81,
		"hash": "44ac4595cca9e247cf6003c208f8155f6625d86bf9d064cb1d3d54400888ac86"
	},
	{
		"id": "b01ed3a70157",
		"ts": "2026-09-05T23:31:25.776Z",
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
		"liquidityUsd": 1027570.44,
		"hash": "b01ed3a701579b8c8d919db661f7aaf86ca900324b9a74db41435cc0317d747f"
	},
	{
		"id": "18d618362ba7",
		"ts": "2026-09-05T23:31:26.020Z",
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
		"liquidityUsd": 30627753.82,
		"hash": "18d618362ba720092d8a63c0342960e7b796928807297c8f924387ea1eb02349"
	},
	{
		"id": "28c2ce7ea784",
		"ts": "2026-09-05T23:31:26.228Z",
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
		"liquidityUsd": 4265501.24,
		"hash": "28c2ce7ea7843aaa6b11aca70e46af5851689d46fa2b2b0d3f4dfa88a098296c"
	},
	{
		"id": "c90464a20625",
		"ts": "2026-09-05T23:31:26.435Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1201784.47,
		"hash": "c90464a206257ab73c375f0898bd41a98c2be3d38b7e4c8b77ea9d9762d186a1"
	},
	{
		"id": "677f6ec520ea",
		"ts": "2026-09-05T23:31:26.860Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30627753.82,
		"hash": "677f6ec520ea132b5a145e499d7f072c00919320dffa210affb45b02af4d9582"
	},
	{
		"id": "e652469130ee",
		"ts": "2026-09-05T23:31:27.118Z",
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
		"liquidityUsd": 2592862.29,
		"hash": "e652469130ee60e3d7bf4b549bc187d3e153cba2d85a5a3b3b5d6ca9c4168ce4"
	},
	{
		"id": "567a78d6bcb4",
		"ts": "2026-09-05T23:31:27.373Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 220807.04,
		"hash": "567a78d6bcb4878c85a6114561d2b9e5886a3902aeab91f8b555b8be4abde4f7"
	},
	{
		"id": "dc0081b1ff4c",
		"ts": "2026-09-05T23:31:27.617Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 336990.42,
		"hash": "dc0081b1ff4c2732f2178751957b72976a76f7402a3cebffb8aa2e589d9ccc3f"
	},
	{
		"id": "542266f17827",
		"ts": "2026-09-05T23:31:27.823Z",
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
		"liquidityUsd": 1264002.96,
		"hash": "542266f1782716b0b776fadb2cbe4c33d96114de274cc41c6976b3f4b30472bf"
	},
	{
		"id": "d8cfd1ab97fc",
		"ts": "2026-09-05T23:31:28.028Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1377400.58,
		"hash": "d8cfd1ab97fc0bf2065fd2a004a2b615a7d97989f7f150391556d6535efed72d"
	},
	{
		"id": "97cbcd05a112",
		"ts": "2026-09-05T23:31:28.208Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3309073.75,
		"hash": "97cbcd05a112d002c1486fd8c2eb5560eb553097f6c2bb49e9e0517cc36e5024"
	},
	{
		"id": "ce87833b4688",
		"ts": "2026-09-05T23:31:28.403Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 178161.48,
		"hash": "ce87833b468878183a9ec4a3ef1b406eeb92767641e489c14b765e118ecbc5fa"
	},
	{
		"id": "31fc39e77253",
		"ts": "2026-09-05T23:31:28.578Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55474.99,
		"hash": "31fc39e772536b0234aedeb4f8a05d22ff6c59db077e8080145ceea35c657659"
	},
	{
		"id": "f97795aeef4b",
		"ts": "2026-09-05T23:31:28.784Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 121703.2,
		"hash": "f97795aeef4b0a4e28b2146f5dcfb60510d83ddc3e53f066d26ff2fd87cd59d6"
	},
	{
		"id": "de51241b4d3f",
		"ts": "2026-09-05T23:31:28.970Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 142164.39,
		"hash": "de51241b4d3fc74a04975f816430209f3d7d27930f9a21dee56d5a83863d8c69"
	},
	{
		"id": "06084167bbd1",
		"ts": "2026-09-05T23:31:29.167Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 963809.74,
		"hash": "06084167bbd1c9ff01f3ea43a5e270bdc3661bd4eae21f0e02f6bafb6bf7f016"
	},
	{
		"id": "f615ffa787a5",
		"ts": "2026-09-05T23:31:29.341Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1233733.34,
		"hash": "f615ffa787a503a01df68bf8d777d5146c21a5725cce2693a6161ef027004083"
	},
	{
		"id": "5305a8ffa554",
		"ts": "2026-09-05T21:53:09.732Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116724235.04,
		"hash": "5305a8ffa5542e0bc81406aacdbc95d5ba2646f6bbc558fd35d05ca14b2106d8"
	},
	{
		"id": "ee9106f8a276",
		"ts": "2026-09-05T21:53:10.216Z",
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
		"liquidityUsd": 14973404.31,
		"hash": "ee9106f8a2761eb7089cefb04d305edfa43b10714ebdbee42a6d7e844d116ee4"
	},
	{
		"id": "2f83dbca6dca",
		"ts": "2026-09-05T21:53:10.573Z",
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
		"liquidityUsd": 1030791.71,
		"hash": "2f83dbca6dcac64ecadd8f0a9fac6bae19c83ca8a021c81dc30bf81697b11783"
	},
	{
		"id": "d17954f2f594",
		"ts": "2026-09-05T21:53:10.844Z",
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
		"liquidityUsd": 30427633.22,
		"hash": "d17954f2f594a48eef417d7743a924f4b870072a556545f135f7378221424c78"
	},
	{
		"id": "e67564055bb5",
		"ts": "2026-09-05T21:53:11.130Z",
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
		"liquidityUsd": 4282024.14,
		"hash": "e67564055bb5483447d36d0c69c6a56ecae19f22ce45e21a4c6248621cb426f5"
	},
	{
		"id": "1fcbd9fd5dc2",
		"ts": "2026-09-05T21:53:11.392Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1200229.96,
		"hash": "1fcbd9fd5dc2c5e890fdcc3037c0158715e22a352034f7e9871175aa0c381f3b"
	},
	{
		"id": "c8ea3eff0850",
		"ts": "2026-09-05T21:53:11.681Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30427633.22,
		"hash": "c8ea3eff0850f42cd3905d9ebd6709ef09027a7b34fb79d95a34c3c13709e607"
	},
	{
		"id": "905f31a0e2e4",
		"ts": "2026-09-05T21:53:11.997Z",
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
		"liquidityUsd": 3022718.7,
		"hash": "905f31a0e2e486e0fc475a22f709db99418422b7ba32954794f90a02da74e965"
	},
	{
		"id": "7b36ec00f09b",
		"ts": "2026-09-05T21:53:12.262Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1211141.89,
		"hash": "7b36ec00f09bc1f6cac05089ecdb1aee45d80f57f8936b38093c507fb82b33ef"
	},
	{
		"id": "649cef5ed36c",
		"ts": "2026-09-05T21:53:12.512Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 337162.41,
		"hash": "649cef5ed36c42935fd6771bf23267a661d9c5dfb44fc9e39079f4eadf875b1f"
	},
	{
		"id": "2d3883fdaf81",
		"ts": "2026-09-05T21:53:12.739Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 236418.32,
		"hash": "2d3883fdaf819051cc2c60acad622d4ca88e9367c68e1961046f0518e1652451"
	},
	{
		"id": "1ca7f61f340c",
		"ts": "2026-09-05T21:53:12.970Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1364063.75,
		"hash": "1ca7f61f340c6e80ea531c6d3536dae46ee20d35ed01b69c9c519e9752d1c520"
	},
	{
		"id": "4e8f7baccae7",
		"ts": "2026-09-05T21:53:13.197Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3325924.89,
		"hash": "4e8f7baccae726e241709ed73264161fc0f4b4e7d34d77737e49f9641b8f322c"
	}
]
