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
	"updatedAt": "2026-09-19T23:51:45.983Z",
	"tokensScored": 17992,
	"verdictsIssued": 17992,
	"safe": 15249,
	"risky": 1311,
	"likelyRug": 1432,
	"ticks": 1026
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "e32f1d05336b",
		"ts": "2026-09-19T23:51:41.704Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129248855.48,
		"hash": "e32f1d05336b9344828f6f0841103bc07bfae3fecd53ffd9aa6aef36b87a15a6"
	},
	{
		"id": "320c064763ac",
		"ts": "2026-09-19T23:51:42.168Z",
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
		"liquidityUsd": 17424981.94,
		"hash": "320c064763ac7f93a04cbe6264566ab03ee67f93be39ca67ff17c964ca46f570"
	},
	{
		"id": "4981a36fa96a",
		"ts": "2026-09-19T23:51:42.417Z",
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
		"liquidityUsd": 883035.78,
		"hash": "4981a36fa96a12d36ab21985ce9952325b73488cbb8eecc017fbc44188366d19"
	},
	{
		"id": "e23ea780563c",
		"ts": "2026-09-19T23:51:42.664Z",
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
		"liquidityUsd": 34507652.89,
		"hash": "e23ea780563c16acde9d3fbf6beed47f3cffe8e107baae2d1f99c6495fd418e3"
	},
	{
		"id": "c5a73bd0a4fd",
		"ts": "2026-09-19T23:51:42.908Z",
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
		"liquidityUsd": 4425393.83,
		"hash": "c5a73bd0a4fd72cc035422c2bd2407229a87a99a45b6605eca8f981b723d4d99"
	},
	{
		"id": "6c4bb6c0cebf",
		"ts": "2026-09-19T23:51:43.153Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1261997.35,
		"hash": "6c4bb6c0cebf503e1e0d1cfefde11951cc7014abc28835c45ab86b67a5bf9ce6"
	},
	{
		"id": "14aa47083c1a",
		"ts": "2026-09-19T23:51:43.398Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34507652.89,
		"hash": "14aa47083c1a7c955d081e31f489408c56f51d6e96587ea41385408b7da9d04c"
	},
	{
		"id": "56b65e3dfe10",
		"ts": "2026-09-19T23:51:43.670Z",
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
		"liquidityUsd": 1959278.78,
		"hash": "56b65e3dfe105a614e22c8d7b4cd7d94ff70790d29e3f7d6a6fefd97a6b180d3"
	},
	{
		"id": "e684cbf17917",
		"ts": "2026-09-19T23:51:43.915Z",
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
		"liquidityUsd": 16569402.28,
		"hash": "e684cbf179177a2be0d4c9565930d23e1fbd042f23d0e356cbaf1952c9447c4b"
	},
	{
		"id": "b4abc8034e5f",
		"ts": "2026-09-19T23:51:44.166Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 3564413.78,
		"hash": "b4abc8034e5fe7f400a2a78aeb835b73ea3402d101dd812b298376e7d7faa4ba"
	},
	{
		"id": "202093715fac",
		"ts": "2026-09-19T23:51:44.395Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1631182.75,
		"hash": "202093715fac620b7484b40ddcbfebbba1087d406f8add9519669106e82bfe94"
	},
	{
		"id": "c4d4f71794a9",
		"ts": "2026-09-19T23:51:44.621Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1514202.23,
		"hash": "c4d4f71794a9dbae5f580f9748ce9e82cb82b6d47caae60495b6350295350c7c"
	},
	{
		"id": "00426ecafd22",
		"ts": "2026-09-19T23:51:44.846Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 525812.47,
		"hash": "00426ecafd22e4c5ecebf5d7678f5bb8302f6e8fbd7c1198d448f1b3b1b2dc05"
	},
	{
		"id": "d78445cde837",
		"ts": "2026-09-19T23:51:45.074Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 915206.56,
		"hash": "d78445cde837a772a3bea5bc1ffc2a1bddd5e6ac55325f28a596150316cafe58"
	},
	{
		"id": "9c874370681c",
		"ts": "2026-09-19T23:51:45.302Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 945212.45,
		"hash": "9c874370681cf04e84f9aa05514dd3ed51c10c2b869ea057902e9f7888128eea"
	},
	{
		"id": "80dfc6554167",
		"ts": "2026-09-19T23:51:45.527Z",
		"symbol": "VCAT",
		"token": "0xFDCC845c048Ad96B5C80b6A55D65C20A98d37777",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 190020.93,
		"hash": "80dfc6554167184d3bd7302f2a1c8e261b8d327ec1c4ec101c9b3dcb2ebcaa36"
	},
	{
		"id": "374beec81432",
		"ts": "2026-09-19T23:51:45.754Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4687492.01,
		"hash": "374beec81432f591307d726b5fcc867317e1a73ac5df14dd05ac9031a61d7326"
	},
	{
		"id": "d9f5d5e86f34",
		"ts": "2026-09-19T23:51:45.982Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1930149.04,
		"hash": "d9f5d5e86f34da16fb5bdbde268589b8ccc8fee4631052bdf054c2c15b00c630"
	},
	{
		"id": "2ffc533aec9d",
		"ts": "2026-09-19T21:15:12.263Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129306899.6,
		"hash": "2ffc533aec9d7d0bdbb2263c01c73c50f539d26de6dcf87626cf17306a13adeb"
	},
	{
		"id": "5eaa1df2ea22",
		"ts": "2026-09-19T21:15:12.740Z",
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
		"liquidityUsd": 17676847.48,
		"hash": "5eaa1df2ea22f373cb70ed13865b0834296a613c1b905562f5073c282fb0ed47"
	},
	{
		"id": "06e93eb13dea",
		"ts": "2026-09-19T21:15:13.003Z",
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
		"liquidityUsd": 881478.58,
		"hash": "06e93eb13deaca6de9adda1a985d174c38ab0c3ed62819ad0c55ffb938e91fcc"
	},
	{
		"id": "25ba154f8c03",
		"ts": "2026-09-19T21:15:13.268Z",
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
		"liquidityUsd": 34448262.35,
		"hash": "25ba154f8c032c9cf5017d74ba02ac80637c2f50d063cf0be15f0af11e9d1c21"
	},
	{
		"id": "b5c164f4ec6b",
		"ts": "2026-09-19T21:15:13.737Z",
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
		"liquidityUsd": 4428402.9,
		"hash": "b5c164f4ec6b80bbca39b7050789dfc92cae14fecd84d5f87175338bc74133c8"
	},
	{
		"id": "c6ce4ffd789d",
		"ts": "2026-09-19T21:15:14.006Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1261810.48,
		"hash": "c6ce4ffd789df8e9a2f16d3322dad2a6198972cb2b310b9167ebcbda74ba5ea7"
	},
	{
		"id": "a8508fb34f7c",
		"ts": "2026-09-19T21:15:14.260Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34443409.72,
		"hash": "a8508fb34f7ce74b71f3737b134899aac9a9508dd6965eedc72f7a6bcccb980e"
	},
	{
		"id": "0819da94f17e",
		"ts": "2026-09-19T21:15:14.515Z",
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
		"liquidityUsd": 1952168.78,
		"hash": "0819da94f17ea9b24ad0cd03091a90fde21f4e47774fa5d9dc358aea5f4c899a"
	},
	{
		"id": "98ef8848f4a4",
		"ts": "2026-09-19T21:15:14.771Z",
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
		"liquidityUsd": 16527864.82,
		"hash": "98ef8848f4a46c86d97f40ba86b6e65875a8ef183ad9acb2acdb4b590a53e294"
	},
	{
		"id": "b7705e7132d1",
		"ts": "2026-09-19T21:15:15.036Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 3251477.03,
		"hash": "b7705e7132d143fd2a4e99990b8479febf4ab9a74b9844089352d2fb33e66dac"
	},
	{
		"id": "edf9910f7945",
		"ts": "2026-09-19T21:15:15.283Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1634739.36,
		"hash": "edf9910f794551c5f734f20a8ca86a549965051f693164ad46899906908866ac"
	},
	{
		"id": "0e43f046b310",
		"ts": "2026-09-19T21:15:15.524Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1537505.6,
		"hash": "0e43f046b310e5161578ca8ab610a8427e486f4b69c006fc3383c7a92ec7f4f8"
	},
	{
		"id": "416e351eca6d",
		"ts": "2026-09-19T21:15:15.771Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4695736.02,
		"hash": "416e351eca6d4dd25c346b790a490c3fcfc0c75473789d8570103a19aa768d9f"
	},
	{
		"id": "2077e20d84da",
		"ts": "2026-09-19T21:15:16.007Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 888212.45,
		"hash": "2077e20d84daa917a3f6e6be35a439933b52aeeb9f14960839e9d293a88efc70"
	},
	{
		"id": "166a0847a1c3",
		"ts": "2026-09-19T21:15:16.243Z",
		"symbol": "VCAT",
		"token": "0xFDCC845c048Ad96B5C80b6A55D65C20A98d37777",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 203486.2,
		"hash": "166a0847a1c3c0c1bee4bc70e79b85933ca3d64f498aa36e49ce50e5310eb674"
	},
	{
		"id": "7b1a3605c8f2",
		"ts": "2026-09-19T21:15:16.480Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1930622.26,
		"hash": "7b1a3605c8f26e9be03980e3fb9ba6701dfa422af5c1d1fac56fa84f3e3c47e2"
	},
	{
		"id": "efd57e9f37ef",
		"ts": "2026-09-19T21:15:16.726Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 930324.57,
		"hash": "efd57e9f37efc546acc79af6c5dd15e9363575bb2ecfa4ea3ee09a254139ad27"
	},
	{
		"id": "9059b4ded8e4",
		"ts": "2026-09-19T21:15:16.973Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1447027.28,
		"hash": "9059b4ded8e47bfae35758d92f2f9346e87a8cd1cf5a62ebd24d0b7a174e8b34"
	},
	{
		"id": "69f502c65a9d",
		"ts": "2026-09-19T18:22:42.137Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129281744.92,
		"hash": "69f502c65a9d3ffe7c1868be2ca75c885454991117af4f4fd88fae32cbef0e9c"
	},
	{
		"id": "977e14fa54fa",
		"ts": "2026-09-19T18:22:42.614Z",
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
		"liquidityUsd": 12765916.58,
		"hash": "977e14fa54fa1d06d0069da8c582182d7b8ad15bf0173e679d04c2308eed9a39"
	},
	{
		"id": "9aed855dc56f",
		"ts": "2026-09-19T18:22:42.879Z",
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
		"liquidityUsd": 886353.02,
		"hash": "9aed855dc56f53b1cb8d6936ebd83c4fd24d598e7a8bcfce150f5eb8d4740798"
	},
	{
		"id": "7c5b7b20dc4c",
		"ts": "2026-09-19T18:22:43.138Z",
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
		"liquidityUsd": 34564838.74,
		"hash": "7c5b7b20dc4c060eeb21b964e73309ca090b9426765340a274cd0d550720f69c"
	},
	{
		"id": "06b708053f5a",
		"ts": "2026-09-19T18:22:43.462Z",
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
		"liquidityUsd": 4455000.24,
		"hash": "06b708053f5a9b0368b09d052a267bcdc13a8125fc96cba9519621a854da70f1"
	},
	{
		"id": "1f59db2f8f0a",
		"ts": "2026-09-19T18:22:43.718Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1260483.56,
		"hash": "1f59db2f8f0aadedaa6f52a5b50e71b89545678a954b85b901a15fb0b46d7a0f"
	},
	{
		"id": "0f131b951f16",
		"ts": "2026-09-19T18:22:43.977Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34564319.91,
		"hash": "0f131b951f16a8aed9b7b6001da9dac9189c20415ff9d2142e62b18c10695172"
	},
	{
		"id": "012623c770ce",
		"ts": "2026-09-19T18:22:44.238Z",
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
		"liquidityUsd": 1963216.23,
		"hash": "012623c770ceb91cc30c9faeab18072d80c764334c07f045e7ba4615c8b4bff5"
	},
	{
		"id": "f01098c81294",
		"ts": "2026-09-19T18:22:44.499Z",
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
		"liquidityUsd": 16965349.98,
		"hash": "f01098c812942f1b9c7b336bacd9379c8d8773ab8021bf2f0cf358306a41f70a"
	},
	{
		"id": "3be40654e419",
		"ts": "2026-09-19T18:22:44.755Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 3174634.08,
		"hash": "3be40654e419d08416f54f7babea305c90223f990e580ff27dcf016c5824d285"
	},
	{
		"id": "0738764dabec",
		"ts": "2026-09-19T18:22:44.996Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1725899.48,
		"hash": "0738764dabecb287733d4bacdec58a2623655dd14b42932dd564d24189cdb5d7"
	},
	{
		"id": "20e524788b63",
		"ts": "2026-09-19T18:22:45.238Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1524730.97,
		"hash": "20e524788b63f24adf4304daf527e71919e810a7b310c6e563920b6986056d3f"
	},
	{
		"id": "f519b648721e",
		"ts": "2026-09-19T18:22:45.481Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1450441.15,
		"hash": "f519b648721ee0e6a6426c2fc8e39719278feca9488ecd38df3e28fc4f19d2db"
	},
	{
		"id": "31f6fcf73456",
		"ts": "2026-09-19T18:22:45.723Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 944910.91,
		"hash": "31f6fcf73456e2949ffcb8dea378afbdcc468e5ca06f8b6d943b93d064ba8a08"
	},
	{
		"id": "faaf4a64ab7b",
		"ts": "2026-09-19T18:22:45.963Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2395242.56,
		"hash": "faaf4a64ab7b82f841b6e315c79c34b80644ff1f3cd2a9b55ab45530de54578c"
	},
	{
		"id": "3872f83247fa",
		"ts": "2026-09-19T18:22:46.202Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3101217.35,
		"hash": "3872f83247faa2d65622feaca390bc7cea3f20fd041804e4321c55aff8be4dd7"
	},
	{
		"id": "6951a288cf5d",
		"ts": "2026-09-19T18:22:46.509Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1931974.71,
		"hash": "6951a288cf5da9d894b1fb2f6fc6717d452200c9d770c73d0a3bc010d65448e4"
	},
	{
		"id": "20f77b6e3e5d",
		"ts": "2026-09-19T18:22:46.748Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4737324.19,
		"hash": "20f77b6e3e5d9492ad6cc6cbb4de470f13e30b8411ba9adf7f26e8a93cc3e67d"
	},
	{
		"id": "f8b38aabd49b",
		"ts": "2026-09-19T15:16:34.454Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 128559632.28,
		"hash": "f8b38aabd49b4166f9e03b0807e66cfc44801ad39c545457860745be7ae5a8e5"
	},
	{
		"id": "776d87138611",
		"ts": "2026-09-19T15:16:34.932Z",
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
		"liquidityUsd": 13925231.61,
		"hash": "776d87138611c977b4dcffd218dcb49baaaf480f463e4479ae4d766dd6b567df"
	},
	{
		"id": "42ac18ac9a11",
		"ts": "2026-09-19T15:16:35.184Z",
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
		"liquidityUsd": 883922.91,
		"hash": "42ac18ac9a11c57ead522dcd24eab61a9821962c4fb2a82dff8ae8168950be42"
	},
	{
		"id": "41d5d62e5b0d",
		"ts": "2026-09-19T15:16:35.440Z",
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
		"liquidityUsd": 34931127.38,
		"hash": "41d5d62e5b0de19ca901d9127b97eb1f675426e924dd4aa8a51978158fbe9215"
	},
	{
		"id": "6d85439a27b1",
		"ts": "2026-09-19T15:16:35.693Z",
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
		"liquidityUsd": 4442886.27,
		"hash": "6d85439a27b1583ba05cb88d579457a0b9e39e796aa575603821669f7d5f61f6"
	},
	{
		"id": "5cea97b58ed6",
		"ts": "2026-09-19T15:16:35.944Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1239562.92,
		"hash": "5cea97b58ed67ed62d08f472800f2069234ea8ba6571a0c749291241559ad37e"
	},
	{
		"id": "a2ce0b02415b",
		"ts": "2026-09-19T15:16:36.282Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34931127.38,
		"hash": "a2ce0b02415bf6af8dd32db45cdaff6abe93c846f22a9e11939b4d4837acfc07"
	},
	{
		"id": "b57befc99022",
		"ts": "2026-09-19T15:16:36.539Z",
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
		"liquidityUsd": 1965292.99,
		"hash": "b57befc990228b54141a7a4771136ef12321b24963fb837fc5a4bae2ba3d191e"
	},
	{
		"id": "cd010041b50b",
		"ts": "2026-09-19T15:16:36.794Z",
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
		"liquidityUsd": 17424027.75,
		"hash": "cd010041b50b1cde018f004a3a0f8a99948c6bc15f4f4c37862fb9adeaf377d5"
	},
	{
		"id": "4220c14f7d90",
		"ts": "2026-09-19T15:16:37.046Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 3171536.37,
		"hash": "4220c14f7d90c68ae86dbc02905bbc7b666d15e76be134a0c19374f7a4a82ecd"
	},
	{
		"id": "51eaf8ac9648",
		"ts": "2026-09-19T15:16:37.279Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1660115.11,
		"hash": "51eaf8ac9648baddc52ea94b54211d0fca5d199d4a0e77ef95a288d164ad136f"
	},
	{
		"id": "050ba24e3022",
		"ts": "2026-09-19T15:16:37.515Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1490245.1,
		"hash": "050ba24e30226284d46d11842967d2c0902f08853b2bd69c27caa2d71b4a1c52"
	},
	{
		"id": "56d22cbf26a1",
		"ts": "2026-09-19T15:16:37.752Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 502312.33,
		"hash": "56d22cbf26a15d397d21ec785d25915a61553bcf8e27ffaaae87e2f78aaee57b"
	},
	{
		"id": "bbb4982caafc",
		"ts": "2026-09-19T15:16:37.987Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1462732.42,
		"hash": "bbb4982caafced6059b430e1f6827d4db89a1e6f4fcad10317ade52b41529803"
	},
	{
		"id": "57b1a436d294",
		"ts": "2026-09-19T15:16:38.221Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 951423.85,
		"hash": "57b1a436d294ffa3c96246c24404ca8115963f8ef2672eab8cb28b3009005cc6"
	},
	{
		"id": "46db82975a03",
		"ts": "2026-09-19T15:16:38.458Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3109276.05,
		"hash": "46db82975a03caa760887e56e8e6d19da63516cd5f34d9446f5cc068533acaf1"
	},
	{
		"id": "5b4822adabcf",
		"ts": "2026-09-19T15:16:38.693Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4762600.96,
		"hash": "5b4822adabcf9e36b86ff237c88f613122001970a756701ed1bb491ba6fb12ee"
	},
	{
		"id": "44cdf1cc4d70",
		"ts": "2026-09-19T15:16:38.927Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 488429.05,
		"hash": "44cdf1cc4d70d825a1cf5834cc39ce6a6c2707e2756be09afeef0e1ff1553549"
	},
	{
		"id": "e3c21e63e10e",
		"ts": "2026-09-19T11:51:17.140Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129613838.49,
		"hash": "e3c21e63e10e7510dbce110487ed014d45dc1fa9be6ab548c81ae6be41162e7d"
	},
	{
		"id": "daa3d32d36ce",
		"ts": "2026-09-19T11:51:17.888Z",
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
		"liquidityUsd": 17976221.51,
		"hash": "daa3d32d36ce56784faa18521843c1480ad11ed3334a1a84f2d1a756552daf11"
	},
	{
		"id": "54d20d6db43f",
		"ts": "2026-09-19T11:51:18.173Z",
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
		"liquidityUsd": 884011.29,
		"hash": "54d20d6db43fbb2306fdec25494665d295164ff8bade2f2aa8ac98765b908ee0"
	},
	{
		"id": "3f18a9c04c9d",
		"ts": "2026-09-19T11:51:18.682Z",
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
		"liquidityUsd": 34979909.03,
		"hash": "3f18a9c04c9d8f5d7aaff22c8de96cebbd73ede6baa0232605edc9756d7d1a9e"
	},
	{
		"id": "14970b69cb24",
		"ts": "2026-09-19T11:51:18.957Z",
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
		"liquidityUsd": 4438379.98,
		"hash": "14970b69cb2436c3551db8ee2de284d9e3dfdecb726b9fbccc9a92b7ba0905dc"
	},
	{
		"id": "dfe7aa1fcfe0",
		"ts": "2026-09-19T11:51:19.256Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1229135.19,
		"hash": "dfe7aa1fcfe089aa1dec9b001cf8fc78a947d17b46ec652280f5d6a98d0a6efb"
	},
	{
		"id": "93b818a41cb0",
		"ts": "2026-09-19T11:51:19.538Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34979909.03,
		"hash": "93b818a41cb003fcdb86e3f53a066a174ae4475d0d0eaba72c439248e2f46659"
	},
	{
		"id": "60fe7804aa0e",
		"ts": "2026-09-19T11:51:19.818Z",
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
		"liquidityUsd": 2171612.49,
		"hash": "60fe7804aa0e27db283563b216100e52d9c77f82af09a77719014990ed0e79a2"
	},
	{
		"id": "b8a06f6fd7af",
		"ts": "2026-09-19T11:51:20.091Z",
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
		"liquidityUsd": 17008868.68,
		"hash": "b8a06f6fd7af03a6a61b8e9bb805e93a1d8e197399d2f83df07c2a6e36ee1ba9"
	},
	{
		"id": "cf2e2766b90b",
		"ts": "2026-09-19T11:51:20.371Z",
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
		"liquidityUsd": 3189653.17,
		"hash": "cf2e2766b90b6f7544b77a646d4434b1b4c8cc6496df2c2ee83aef14a088cb70"
	},
	{
		"id": "07adf70bfa06",
		"ts": "2026-09-19T11:51:20.638Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1659806.75,
		"hash": "07adf70bfa067e838778fd3a48f84f65eb15137fa358167560c14d189d339bc5"
	},
	{
		"id": "b4bad0dcbcf8",
		"ts": "2026-09-19T11:51:20.910Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1508998.55,
		"hash": "b4bad0dcbcf81605beb72783e4c4c151c1b43947421743ea5b23c2cc6a35c846"
	},
	{
		"id": "ca0b9f1d7081",
		"ts": "2026-09-19T11:51:21.181Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1462895.98,
		"hash": "ca0b9f1d708145971b1dfb4657ab79b3e4695a724c03fa87064f01c121a969e4"
	},
	{
		"id": "c02bc802dffe",
		"ts": "2026-09-19T11:51:21.448Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4793554.05,
		"hash": "c02bc802dffe74e33d1aca7c7fffcdc2b3eb0f8a874f175d4556114a0d32df71"
	},
	{
		"id": "b2392df341c9",
		"ts": "2026-09-19T11:51:21.707Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 461758.16,
		"hash": "b2392df341c96b9d01f341ab451f836a9935442bbe0eb0134a11c6cbe3d694ed"
	},
	{
		"id": "230a82e62500",
		"ts": "2026-09-19T11:51:21.953Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3137455.71,
		"hash": "230a82e625004f974367be810970b63a3c0e412034febfe8ab3175cafbb030fe"
	},
	{
		"id": "5cbdf70e09f0",
		"ts": "2026-09-19T11:51:22.219Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 939832.55,
		"hash": "5cbdf70e09f05fc2426cc4c7cd3b8305f0e78c80fa21202902a2de99343bd465"
	},
	{
		"id": "57d2ba815137",
		"ts": "2026-09-19T11:51:22.575Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3314407.29,
		"hash": "57d2ba8151370ee93f9595ca53adf497a65a212ffbe75591173e07da0ae64715"
	},
	{
		"id": "cdabc7aea84a",
		"ts": "2026-09-19T06:58:29.913Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 128290369.21,
		"hash": "cdabc7aea84acb576477fa3fc7aab670f1d498595b422c2ea332fd5ca3230cfb"
	},
	{
		"id": "11d00163a40e",
		"ts": "2026-09-19T06:58:30.592Z",
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
		"liquidityUsd": 17710225.32,
		"hash": "11d00163a40ef24bfb21666ff27ccf38d30f56ec12b9d59d69c6105b07b465c0"
	},
	{
		"id": "f7a926f4b050",
		"ts": "2026-09-19T06:58:31.077Z",
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
		"liquidityUsd": 878581.1,
		"hash": "f7a926f4b050bac720c2771df837d6fc02f2d4f3e33c068430cb1ac078227ad7"
	},
	{
		"id": "7d7b8e378af8",
		"ts": "2026-09-19T06:58:31.548Z",
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
		"liquidityUsd": 34813467.25,
		"hash": "7d7b8e378af82f24b73a0ed453695688f5794a51ca93fc08c06fb7330010e7da"
	},
	{
		"id": "74a03421f1a7",
		"ts": "2026-09-19T06:58:31.816Z",
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
		"liquidityUsd": 4406828.18,
		"hash": "74a03421f1a703c274e8368a127745d9b960aabe72dbf385c85ac38417920983"
	},
	{
		"id": "6a03d98b80d7",
		"ts": "2026-09-19T06:58:32.087Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1210379.47,
		"hash": "6a03d98b80d7f12ce70be778aa10c86d212221c7752055ed1f03a55548c01fcb"
	},
	{
		"id": "224faae5130d",
		"ts": "2026-09-19T06:58:32.356Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34813467.25,
		"hash": "224faae5130d14c03f09cdaa359fa5456894e50e93b9a2502120781d8b5fb355"
	},
	{
		"id": "32c91191abad",
		"ts": "2026-09-19T06:58:32.696Z",
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
		"liquidityUsd": 2065403.15,
		"hash": "32c91191abadaf9d94296a64b07d0f4d0b81958f70fa9c882509af287f4137a4"
	},
	{
		"id": "6bc1589d169d",
		"ts": "2026-09-19T06:58:32.982Z",
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
		"liquidityUsd": 17093547.92,
		"hash": "6bc1589d169d8dcb85b8138fc4173c1248c19fd58574a43299679711121a14fa"
	},
	{
		"id": "74f1e747bace",
		"ts": "2026-09-19T06:58:33.261Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3007036.93,
		"hash": "74f1e747bace66dce626f84a3d5d49724e96168b8be7b334999744f0b289c1bd"
	},
	{
		"id": "9c6982c0051b",
		"ts": "2026-09-19T06:58:33.500Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 751635.09,
		"hash": "9c6982c0051bfe3866bb43157ae7c70c8f2dcf6ec8b69338346370405934e819"
	},
	{
		"id": "6280f8f52bcb",
		"ts": "2026-09-19T06:58:33.744Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1605618.05,
		"hash": "6280f8f52bcbca1a9453f6489aa1d56f8f94e24ef4a813148b041dbcc83ddc94"
	},
	{
		"id": "6749ae06ec92",
		"ts": "2026-09-19T06:58:33.989Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1459909.65,
		"hash": "6749ae06ec928ef98f57276e08b078cd1ad7371906fea1279d95bab20f751ed1"
	},
	{
		"id": "eaafee7589fe",
		"ts": "2026-09-19T06:58:34.229Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3087169.18,
		"hash": "eaafee7589fef779ad9a026c5267637a67b50b0515405bc9458df326d8d4bec8"
	},
	{
		"id": "0587b434f825",
		"ts": "2026-09-19T06:58:34.465Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4746279.31,
		"hash": "0587b434f825bcec26fc9bc5b662d7336ed29cdc8efcc227a17cbc0d6bb83d26"
	},
	{
		"id": "fa674fee27f6",
		"ts": "2026-09-19T06:58:34.700Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 450770.79,
		"hash": "fa674fee27f6c4ae54909432f9d0e3f63b9df05aa24adceff5dbcb61e6b6ddee"
	},
	{
		"id": "2b92c1d5baff",
		"ts": "2026-09-19T06:58:34.940Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 962266.37,
		"hash": "2b92c1d5baff74a2218c19f7185bba7a216d54a534ac5df7aea2fea8a9e74047"
	},
	{
		"id": "eb31901ef752",
		"ts": "2026-09-19T06:58:35.185Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3359313.22,
		"hash": "eb31901ef7524860e102a06b8acbf4667e9e951318814493cf3a43f6e72fa614"
	},
	{
		"id": "b88a2cd54eee",
		"ts": "2026-09-19T01:04:37.893Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129562327.09,
		"hash": "b88a2cd54eee3f2e0ca14cb095e15dc0f20b6de91a17fcdbeb9f576f19326e8a"
	},
	{
		"id": "fc04d3ffef16",
		"ts": "2026-09-19T01:04:38.533Z",
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
		"liquidityUsd": 12618350.52,
		"hash": "fc04d3ffef1639072f8f15c518fc4f6d1d149abe06c167575be92b1cf03a1fa3"
	},
	{
		"id": "3a31f19f445f",
		"ts": "2026-09-19T01:04:38.781Z",
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
		"liquidityUsd": 878145.94,
		"hash": "3a31f19f445f1621d8926f8ecf57a7b190be8a4fb374c0afb83329b35fc4e4e9"
	},
	{
		"id": "c31a4da9d071",
		"ts": "2026-09-19T01:04:39.031Z",
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
		"liquidityUsd": 34251158.7,
		"hash": "c31a4da9d0715859312fdbcd611bd250cb3e0ff428c18ac14ac1c75c1572bbee"
	},
	{
		"id": "d80fc02b574b",
		"ts": "2026-09-19T01:04:39.278Z",
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
		"liquidityUsd": 4384667.84,
		"hash": "d80fc02b574b103650fa6ef1e58f6dd7e9c126dc0980c68a966956035b71acbd"
	},
	{
		"id": "473ba3faffac",
		"ts": "2026-09-19T01:04:39.526Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1229864.75,
		"hash": "473ba3faffac212b7d842ef16b570375440bfbfe2700a91ab77841d8307e02c9"
	},
	{
		"id": "056f90702d79",
		"ts": "2026-09-19T01:04:39.770Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34250190.78,
		"hash": "056f90702d79710f2f6ec911f0b6b6fac036bbc6665bcaa3eb408f95a2fbe480"
	},
	{
		"id": "323f466dd6e9",
		"ts": "2026-09-19T01:04:40.033Z",
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
		"liquidityUsd": 2061273.57,
		"hash": "323f466dd6e97108f609d7f1bd9d1451ac17971a9a421cc2ba6883e997336572"
	},
	{
		"id": "23eb93d5b819",
		"ts": "2026-09-19T01:04:40.279Z",
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
		"liquidityUsd": 70592.98,
		"hash": "23eb93d5b8197c450548a751302cdc9ce4ff48ceb6017d2e87a1210e6cd233cc"
	},
	{
		"id": "399eb5607543",
		"ts": "2026-09-19T01:04:40.530Z",
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
		"liquidityUsd": 17487801.49,
		"hash": "399eb5607543dee6b600435cecd2a6a0a41be2d92816a3b8a1dbc045cd1e89a2"
	},
	{
		"id": "4f5cd20a5868",
		"ts": "2026-09-19T01:04:40.759Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1491597.92,
		"hash": "4f5cd20a586815662f987047ae380da995227ab4d26b528171e88282d5f22e86"
	},
	{
		"id": "84ec265a3384",
		"ts": "2026-09-19T01:04:40.987Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1925195.22,
		"hash": "84ec265a338435e1f6e5044be2218d5700a57c670d5d588d074399bbfaea8c0f"
	},
	{
		"id": "32ff9efcb743",
		"ts": "2026-09-19T01:04:41.215Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1484743.27,
		"hash": "32ff9efcb743c72f3fdecba3cc74bf81e040ea01697c64296e8841947ec6ff41"
	},
	{
		"id": "62e0803abf10",
		"ts": "2026-09-19T01:04:41.444Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3132944.63,
		"hash": "62e0803abf10b9a2ae7ce75e1bc3cb58d54d894c129b4db2084a5afeec7a45ad"
	},
	{
		"id": "bce24d31a654",
		"ts": "2026-09-19T01:04:41.671Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4771017.59,
		"hash": "bce24d31a6546b996217a9b13980de7a42c7ee27ad54f66bdef9dd8dd613655a"
	},
	{
		"id": "b0d90ea95a3a",
		"ts": "2026-09-19T01:04:41.899Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 469212.01,
		"hash": "b0d90ea95a3a2844419943b9dd4d1666abdb41883661b4f57a1c825e5c400165"
	},
	{
		"id": "25b6136c56a0",
		"ts": "2026-09-19T01:04:42.127Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3380718.23,
		"hash": "25b6136c56a0435ea9df3067e3df1db1c74ad326942940ac48cd322cf31a3aac"
	},
	{
		"id": "1343a64d297e",
		"ts": "2026-09-19T01:04:42.355Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 972603.41,
		"hash": "1343a64d297e3c32563c7765f85becd6d50d9889f5d201a604cc25acf2f0e258"
	},
	{
		"id": "ce7de5c4e47c",
		"ts": "2026-09-18T22:59:18.178Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129575573.8,
		"hash": "ce7de5c4e47c2d103a61638b871149186ec93e2d7546c435f13d273c004d6bf7"
	},
	{
		"id": "2361ccedbb7e",
		"ts": "2026-09-18T22:59:18.448Z",
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
		"liquidityUsd": 18552337.63,
		"hash": "2361ccedbb7efd111688829fb08a71c41fdeb7190b5173fa63d35c065bd802b8"
	},
	{
		"id": "d2fe65549149",
		"ts": "2026-09-18T22:59:18.702Z",
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
		"liquidityUsd": 870562.52,
		"hash": "d2fe6554914978b565ba7735864e1315bfb61a81be6113e36b10305942d8c2d9"
	},
	{
		"id": "497c9b08409d",
		"ts": "2026-09-18T22:59:18.962Z",
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
		"liquidityUsd": 34381442.87,
		"hash": "497c9b08409d9e085b48c3f039e13c44a1e82e396a113c8e5892a0dac51ae97d"
	},
	{
		"id": "72cf5258f328",
		"ts": "2026-09-18T22:59:19.213Z",
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
		"liquidityUsd": 4375597.3,
		"hash": "72cf5258f32875d569434205dabb1be53338e8683d54e4f025403276d345527f"
	},
	{
		"id": "a890111bc6eb",
		"ts": "2026-09-18T22:59:19.482Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1235238.65,
		"hash": "a890111bc6eb9e5935caeffeae21f91a5f9aa95ecb6d4d9ae623ed4f389ae55b"
	},
	{
		"id": "ddd77c1dfcbc",
		"ts": "2026-09-18T22:59:19.748Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34381442.87,
		"hash": "ddd77c1dfcbc9ed9ac8d107b1b5f00377defbf6780e4a111b4a2f5ac67b93805"
	},
	{
		"id": "c4717844251a",
		"ts": "2026-09-18T22:59:20.006Z",
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
		"liquidityUsd": 2517248.86,
		"hash": "c4717844251aecd0c9ee308fb004d5577d3f1dd309a38603f4cf69de1952b1e6"
	},
	{
		"id": "7b906bc3661a",
		"ts": "2026-09-18T22:59:20.276Z",
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
		"liquidityUsd": 1485333.33,
		"hash": "7b906bc3661af38533d9791989a9e870dab4cdbbbcf74edca99914bddef9c924"
	},
	{
		"id": "4331902c26cc",
		"ts": "2026-09-18T22:59:20.555Z",
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
		"liquidityUsd": 17424941.05,
		"hash": "4331902c26ccff3d1768c953c769ec1f4eb3f0e5753c3edec06e7f8ff75aee84"
	},
	{
		"id": "745fefea0512",
		"ts": "2026-09-18T22:59:20.806Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1475263.96,
		"hash": "745fefea05120069a48cef67949617f39666bb8c1566df241c51f739bd367b3b"
	},
	{
		"id": "093bcce954f3",
		"ts": "2026-09-18T22:59:21.043Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1476699.41,
		"hash": "093bcce954f32f465784f6fb0d07b406ccd87da64b59e3ee6d3295dab9f13c90"
	},
	{
		"id": "85161474da1c",
		"ts": "2026-09-18T22:59:21.287Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3089159.61,
		"hash": "85161474da1c9a5707e9af560e800b0cf2e6298384c11e9bfa1d0bafb566978b"
	},
	{
		"id": "3211fd6db718",
		"ts": "2026-09-18T22:59:21.539Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4766026.81,
		"hash": "3211fd6db7189660e8c8fd71b8a80db1b305d5b6897fd33b93bf35f52d9b74e6"
	},
	{
		"id": "33f08420b504",
		"ts": "2026-09-18T22:59:21.796Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 478722.36,
		"hash": "33f08420b5049ee71a468989700bc257caf1bb5a440e907783e4630887de26f2"
	},
	{
		"id": "868ab24a0069",
		"ts": "2026-09-18T22:59:22.031Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1668186.38,
		"hash": "868ab24a00695d01307ba7a8bebad4dd1b3048a2a28e1605bab51293ad3ed34d"
	},
	{
		"id": "c64298ee637c",
		"ts": "2026-09-18T22:59:22.273Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3274254.05,
		"hash": "c64298ee637c5d62a428f57f331340a534e47fb0144e767f71c6cac6106943af"
	},
	{
		"id": "3e30885fce33",
		"ts": "2026-09-18T22:59:22.509Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 968752.35,
		"hash": "3e30885fce336fb4edf6d9f027074cad314e3bc5ef469636ab44e63f71f6da8b"
	},
	{
		"id": "13c70c87d4cc",
		"ts": "2026-09-18T20:20:12.596Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129122894.24,
		"hash": "13c70c87d4ccd567761b7acd169ee1a17140fa175904e3f914026cfc008b7fbd"
	},
	{
		"id": "dbb7fb4bb659",
		"ts": "2026-09-18T20:20:12.964Z",
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
		"liquidityUsd": 16151011.11,
		"hash": "dbb7fb4bb659278d2775a2c3f40f9a99fa88693a26ccccddebc8dfd67267d531"
	},
	{
		"id": "f1b7442b87c4",
		"ts": "2026-09-18T20:20:13.177Z",
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
		"liquidityUsd": 899454.59,
		"hash": "f1b7442b87c4865a3c385fcfbe7be4ad56454b1d70ac78135852418d33187bc8"
	},
	{
		"id": "56d1f2a06d95",
		"ts": "2026-09-18T20:20:13.412Z",
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
		"liquidityUsd": 34827387.23,
		"hash": "56d1f2a06d954c682170aec76b3bb7699440d43894575a8a39029c48d57c02e2"
	},
	{
		"id": "f4eb981bf750",
		"ts": "2026-09-18T20:20:13.615Z",
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
		"liquidityUsd": 4373853.84,
		"hash": "f4eb981bf750a9ff52cd58ecf1b64eb6eae4191b29593bb3608f9638954f11a5"
	},
	{
		"id": "5812f1aa7b8e",
		"ts": "2026-09-18T20:20:13.822Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1236999.3,
		"hash": "5812f1aa7b8ec1c9c00fc50b5fe66eb72af18eaa497751b318b73cad7d781adb"
	},
	{
		"id": "d325a71e4d98",
		"ts": "2026-09-18T20:20:14.060Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34827387.23,
		"hash": "d325a71e4d98378f1dee0cbdfc2ba69d1bd9036a6a7462f9dca31314e2c28187"
	},
	{
		"id": "de0e3c6f36bc",
		"ts": "2026-09-18T20:20:14.427Z",
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
		"liquidityUsd": 2325889.41,
		"hash": "de0e3c6f36bceca93130992006a842d064cdb9f37d815bbe6aed500da8aad158"
	},
	{
		"id": "60c85043e94e",
		"ts": "2026-09-18T20:20:14.790Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1489885.71,
		"hash": "60c85043e94e9069ea9d4ce90c7ec6b0da1117eb6ce87a0d809094c32d546d9f"
	},
	{
		"id": "91b116a9efd5",
		"ts": "2026-09-18T20:20:15.003Z",
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
		"liquidityUsd": 17539364.58,
		"hash": "91b116a9efd5072867b5daa7ff98f9013b079b0d80219034f9c1f02ad87816f0"
	},
	{
		"id": "e73f61ce349b",
		"ts": "2026-09-18T20:20:15.199Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1497775.79,
		"hash": "e73f61ce349bd24afa046172444513c0388bb8c173ce0d83cd5f3df5e28afd6f"
	},
	{
		"id": "3fa67780eec1",
		"ts": "2026-09-18T20:20:15.403Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4745994.54,
		"hash": "3fa67780eec1dde047e4f5ee132400947902818dafa510bda2d35c3f47d67e8a"
	},
	{
		"id": "61642d159ebc",
		"ts": "2026-09-18T20:20:15.599Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3093600.77,
		"hash": "61642d159ebc0e3a7ebe4070520619125e2c733fb039b245ec0079b8681c4fd6"
	},
	{
		"id": "fdc7d821b768",
		"ts": "2026-09-18T20:20:15.800Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1487018.79,
		"hash": "fdc7d821b76809e814b7da80a3ae6a68af169c7edd9e683bdf991f68b33513d0"
	},
	{
		"id": "6f2a4439721d",
		"ts": "2026-09-18T20:20:16.001Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 492176.62,
		"hash": "6f2a4439721d7973def129b267c625ea5736ea0e67c91d65c464d53867b5897a"
	},
	{
		"id": "be54d8b10242",
		"ts": "2026-09-18T20:20:16.233Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3290763.34,
		"hash": "be54d8b10242f279d23c9a570684f2daef8211f784e376c0b5d3a67a737036ea"
	},
	{
		"id": "f5f74bd90996",
		"ts": "2026-09-18T20:20:16.608Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1332545.33,
		"hash": "f5f74bd90996721bd6d055efebbcf3947ab00ecb4630bb90c56fbd6ea9aecd8f"
	},
	{
		"id": "30fdd3d8fca7",
		"ts": "2026-09-18T20:20:17.203Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 994510.95,
		"hash": "30fdd3d8fca7175f525001a4a45907b1819d3dff0710a30ec80cf011419d2a69"
	},
	{
		"id": "bec5c69c6c10",
		"ts": "2026-09-18T17:26:48.651Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129280515.89,
		"hash": "bec5c69c6c10ce813f2879b1c9e9400b0b248ade17d961d5750230cec57e6ea6"
	},
	{
		"id": "6ca1145b19a9",
		"ts": "2026-09-18T17:26:48.965Z",
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
		"liquidityUsd": 17287546.4,
		"hash": "6ca1145b19a974f46a2ef0d8d114828ed6a28b050f901f29d0b9e1330450d98c"
	},
	{
		"id": "700532fda5e9",
		"ts": "2026-09-18T17:26:49.192Z",
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
		"liquidityUsd": 896345.23,
		"hash": "700532fda5e909bf2e33711eeec7dce13c7bc313d25a29b2b471859422110a07"
	},
	{
		"id": "b83cbb2a45c0",
		"ts": "2026-09-18T17:26:49.394Z",
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
		"liquidityUsd": 33909458.97,
		"hash": "b83cbb2a45c086caca389d74a62a37bf3515bb63a7b8dce9b5e46c25199c3038"
	},
	{
		"id": "1346dce9c431",
		"ts": "2026-09-18T17:26:49.588Z",
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
		"liquidityUsd": 4311212.49,
		"hash": "1346dce9c431021d078a1f652f8395483e1616fa8ea38c7c54ccc208cc2fa9c4"
	},
	{
		"id": "d216a2f6b698",
		"ts": "2026-09-18T17:26:49.802Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1216152.64,
		"hash": "d216a2f6b698ad5c2d01ff042526a5e88f0d95f7901e46f3af7c0a4372f52492"
	},
	{
		"id": "ed6f0df46153",
		"ts": "2026-09-18T17:26:50.026Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1485761.86,
		"hash": "ed6f0df46153ae438552a2b8d93bcdfb5ba61bd022bae147cb729663e8bfbda3"
	},
	{
		"id": "ddf98d359958",
		"ts": "2026-09-18T17:26:50.212Z",
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
		"liquidityUsd": 2260853.7,
		"hash": "ddf98d3599582b95b2c7e9ee9728e5f1e6a352bd7ef77d5e624852d4fb77f790"
	},
	{
		"id": "fa86dc7a6ca7",
		"ts": "2026-09-18T17:26:50.408Z",
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
		"liquidityUsd": 1485761.86,
		"hash": "fa86dc7a6ca75f26bcff1e34728fd89780a13ff25a43acc9c862c6d52b390e69"
	},
	{
		"id": "83822a219874",
		"ts": "2026-09-18T17:26:50.624Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1453410.3,
		"hash": "83822a2198744863ecc979a9d8eeb753ff9974f406bd99ba9f2e0b1d1ca6948b"
	},
	{
		"id": "fa80e267e40f",
		"ts": "2026-09-18T17:26:50.823Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4745906.85,
		"hash": "fa80e267e40f5d81e43a8d02dadd54f65cc9079138eab75dd6d942d4d513f6ea"
	},
	{
		"id": "9c13afda404b",
		"ts": "2026-09-18T17:26:51.012Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3136185.91,
		"hash": "9c13afda404b64728cd3965031bad791d58b5a268eda54685203107b617af759"
	},
	{
		"id": "00a08700cd30",
		"ts": "2026-09-18T17:26:51.205Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 17145616.84,
		"hash": "00a08700cd3001753c89855240b597d54ba86beda5fa35b9db0273273187873a"
	},
	{
		"id": "5d2d01c29e86",
		"ts": "2026-09-18T17:26:51.421Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1458947.96,
		"hash": "5d2d01c29e8629549c36a70e825f25fc8b751f85af42ed16141f2637c1d1d995"
	},
	{
		"id": "0dc1ca815f19",
		"ts": "2026-09-18T17:26:51.614Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1010004,
		"hash": "0dc1ca815f1969ee32d44211001d587a2dca0cda7c64c4d4729517afb95edf74"
	},
	{
		"id": "bfc43dee3315",
		"ts": "2026-09-18T17:26:51.825Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 439330.68,
		"hash": "bfc43dee3315bd15021a8a4c1990259278f41ff14571ceabd613abeca12edba3"
	},
	{
		"id": "062c601c798f",
		"ts": "2026-09-18T17:26:52.026Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 528796.39,
		"hash": "062c601c798f5b3980e5a5c338a91f29a1d3c56be3f6adcee38d17e9d7aa7ab3"
	},
	{
		"id": "f49533b134ca",
		"ts": "2026-09-18T17:26:52.243Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1275895.98,
		"hash": "f49533b134ca8512b6e9a3d26d30fe34fbe68af11b631d519b8c3b5d833fa5ab"
	},
	{
		"id": "4cde7d975bb6",
		"ts": "2026-09-18T17:26:52.436Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3240114.9,
		"hash": "4cde7d975bb688bfe1d52b37e52b1eff215fcab74671b5ef65e6670181190566"
	},
	{
		"id": "5e5cfe936881",
		"ts": "2026-09-18T13:21:28.775Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 128895312.2,
		"hash": "5e5cfe936881f77413c1d338fa40e7735541a295c037411f37c48a55ea60d8c1"
	},
	{
		"id": "ea0d54fa00d1",
		"ts": "2026-09-18T13:21:28.983Z",
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
		"liquidityUsd": 16016468.01,
		"hash": "ea0d54fa00d170c211170e09ef646e1ef9bae8acd86a5f4eeb20d837c4939075"
	},
	{
		"id": "144538f2622c",
		"ts": "2026-09-18T13:21:29.189Z",
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
		"liquidityUsd": 856737.26,
		"hash": "144538f2622c7743e3b692a8eed911a7199327ec205f64c939625b5cb3bd9ff6"
	},
	{
		"id": "7879fbbd76c7",
		"ts": "2026-09-18T13:21:29.371Z",
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
		"liquidityUsd": 35986098.01,
		"hash": "7879fbbd76c74aa42a8899af20c1835cfd5e7ebd67aa36348a8dedbce0f832eb"
	},
	{
		"id": "5582038f35ec",
		"ts": "2026-09-18T13:21:29.561Z",
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
		"liquidityUsd": 4197912.98,
		"hash": "5582038f35ec7215a11978da2f46c8cec68c9efe6ab461f40489df5ade93131f"
	},
	{
		"id": "69f4b26671ba",
		"ts": "2026-09-18T13:21:29.743Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1176402.08,
		"hash": "69f4b26671ba2ff094a75350048ce25bdd72b774012f68b7a46b2e8d14180b81"
	},
	{
		"id": "385180d10ed6",
		"ts": "2026-09-18T13:21:29.933Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 35986098.01,
		"hash": "385180d10ed657bb8849f963dff104d6cd4d91c0a0b4901e961c4b3e8e20e232"
	},
	{
		"id": "875840da5d9c",
		"ts": "2026-09-18T13:21:30.116Z",
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
		"liquidityUsd": 2316519.53,
		"hash": "875840da5d9c822aba68d57848400eef02e1c06c63c9174ae89355f77dedcc5c"
	},
	{
		"id": "381c79740ae4",
		"ts": "2026-09-18T13:21:30.305Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1377580.49,
		"hash": "381c79740ae4b1d7a4d8f84bc9028116c4d91e8ed61d044842b7d9c0272adc74"
	},
	{
		"id": "f563ae090ed1",
		"ts": "2026-09-18T13:21:30.489Z",
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
		"liquidityUsd": 133080.93,
		"hash": "f563ae090ed1193759f789bc18c7ff2feefacd103cc5e794fc8ce86b8e04e62b"
	},
	{
		"id": "460e527c8b65",
		"ts": "2026-09-18T13:21:30.704Z",
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
		"liquidityUsd": 2926886.41,
		"hash": "460e527c8b6582a5f14d3b09e53d6e18aa4c5bca09cd3aa2e8b9546c95bc82d3"
	},
	{
		"id": "3fd66f2d4137",
		"ts": "2026-09-18T13:21:30.891Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4577242.65,
		"hash": "3fd66f2d413733a96a4c164ee0ea3bf438a41c19784985799801ad0df745aa37"
	},
	{
		"id": "02b2df549deb",
		"ts": "2026-09-18T13:21:31.077Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 16664967.14,
		"hash": "02b2df549deb413801f1aedc56a6a84076ab8c4271c0dbd315ce30e07788f549"
	},
	{
		"id": "79ba48a56cfa",
		"ts": "2026-09-18T13:21:31.265Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1382892.14,
		"hash": "79ba48a56cfa477f6ad399c38ed6c72fde0d57dbc5ed03f22aabef96e9389613"
	},
	{
		"id": "0eb294f2f51e",
		"ts": "2026-09-18T13:21:31.447Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 395884.23,
		"hash": "0eb294f2f51e6cd9b05153c65a067f6c956fccf74776163911ce5fc5a6849f72"
	},
	{
		"id": "e7b1be0dbdb7",
		"ts": "2026-09-18T13:21:31.640Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 962560.1,
		"hash": "e7b1be0dbdb730dcd2bd60517f618debee85867ac8b3c44f00c27ee07e19c71e"
	},
	{
		"id": "d5cc4b3bc116",
		"ts": "2026-09-18T13:21:31.827Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 187602.02,
		"hash": "d5cc4b3bc11602a55f924670c6150a1aadc9e23902013b6485be8344e6b63a16"
	},
	{
		"id": "903c678cc1ef",
		"ts": "2026-09-18T13:21:32.011Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1891867.62,
		"hash": "903c678cc1ef75b808c3ca5bcc57ff4a20f85f7a8f826c613a6618f1d199b318"
	},
	{
		"id": "538a4b2df2ae",
		"ts": "2026-09-18T13:21:32.190Z",
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
		"liquidityUsd": 519217.84,
		"hash": "538a4b2df2ae728206f43281fb5b5ccbaff95ce744b746ce6aebd164a3ec2512"
	}
]
