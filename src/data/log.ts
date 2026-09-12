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
	"updatedAt": "2026-09-12T16:42:47.037Z",
	"tokensScored": 17159,
	"verdictsIssued": 17159,
	"safe": 14543,
	"risky": 1260,
	"likelyRug": 1356,
	"ticks": 981
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "edc7c9aab945",
		"ts": "2026-09-12T16:42:42.257Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120650736.68,
		"hash": "edc7c9aab9452b7cc46c6d70f39d4e4d2ad944dfb4545b0f52fe445d8a21dd79"
	},
	{
		"id": "9424e29ba295",
		"ts": "2026-09-12T16:42:42.509Z",
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
		"liquidityUsd": 12518122.62,
		"hash": "9424e29ba29527ba1f1b02fd2add05e35e20597870cc97b8fc8e64be9953eba7"
	},
	{
		"id": "d533568ccc45",
		"ts": "2026-09-12T16:42:42.745Z",
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
		"liquidityUsd": 994890.49,
		"hash": "d533568ccc45159819c6cd9f6d3cdef3cdd41a8143ab9f7de616128280776768"
	},
	{
		"id": "245e0bac6e30",
		"ts": "2026-09-12T16:42:42.981Z",
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
		"liquidityUsd": 33811293.64,
		"hash": "245e0bac6e3058dd79328c857569c534a1c43a36ee03abbd31d1d2aa0e98a564"
	},
	{
		"id": "c9fe2ce3272d",
		"ts": "2026-09-12T16:42:43.230Z",
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
		"liquidityUsd": 4006766.71,
		"hash": "c9fe2ce3272d65a5ccfc2b2fbd58bc6b4b5c344e0b30854723d37855567dd48a"
	},
	{
		"id": "b79c2171e5f4",
		"ts": "2026-09-12T16:42:43.497Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1189839.15,
		"hash": "b79c2171e5f4e883db1380f8fda66f7afe161d1dd4f273a7cd3a9f82aaae6237"
	},
	{
		"id": "72fbc4b875d2",
		"ts": "2026-09-12T16:42:43.745Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1608326.85,
		"hash": "72fbc4b875d270a963340161144ec1041728acfed8da2e8a3d55536324505052"
	},
	{
		"id": "5a2472361fb1",
		"ts": "2026-09-12T16:42:44.040Z",
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
		"liquidityUsd": 1154002.21,
		"hash": "5a2472361fb1ac06236433131a18e24dbb08949d0f0001d478e85bfed3c9a181"
	},
	{
		"id": "793aa54650f2",
		"ts": "2026-09-12T16:42:44.281Z",
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
		"liquidityUsd": 1608326.85,
		"hash": "793aa54650f28890dcff0b70979e1f19cd8a035c006b3c92c6543df9f4516970"
	},
	{
		"id": "0efdab2b4489",
		"ts": "2026-09-12T16:42:44.532Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 610293.32,
		"hash": "0efdab2b4489925936ffc3510c5b0250ce5960717666fd5d7cdd92491f326ed4"
	},
	{
		"id": "01f361d76823",
		"ts": "2026-09-12T16:42:44.754Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14243910.39,
		"hash": "01f361d768239b8ceb7a829d9a7514aabf0780e55e743c59b4800e91fd3b6384"
	},
	{
		"id": "d51dbb4772da",
		"ts": "2026-09-12T16:42:44.974Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 564414.73,
		"hash": "d51dbb4772dacc0132ade5d2451d2812021f8a68c491e56f42f53c2c54f44006"
	},
	{
		"id": "175d2f36d09c",
		"ts": "2026-09-12T16:42:45.685Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 266778.2,
		"hash": "175d2f36d09cd7ceb7fb0e2943d3ff06dbfd39502afccef487bc57334dc2a5b3"
	},
	{
		"id": "33bd1928b21a",
		"ts": "2026-09-12T16:42:45.911Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1566727.17,
		"hash": "33bd1928b21af94b0f7df8189367349dd2286cdfcbf87c05bec7381580510215"
	},
	{
		"id": "227244ba40df",
		"ts": "2026-09-12T16:42:46.145Z",
		"symbol": "ELON",
		"token": "0xA3d353743164972B37C8E5358fb1E76f0Be8abA3",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 89652.7,
		"hash": "227244ba40df818311d0863f557b18430fa9d22611e8a02eff29b1ed844bf454"
	},
	{
		"id": "11dbe6ca97da",
		"ts": "2026-09-12T16:42:46.365Z",
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
		"liquidityUsd": 716435.18,
		"hash": "11dbe6ca97dab2f8973451170957f30be43bc3acd752a3acfd953ad8f47b5f02"
	},
	{
		"id": "00106d9cc3ba",
		"ts": "2026-09-12T16:42:46.584Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 75908.5,
		"hash": "00106d9cc3baf9253a724eef4953c76503e6cc0ce3946e91baeaf523ca606926"
	},
	{
		"id": "48e4a3a0ba8d",
		"ts": "2026-09-12T16:42:46.815Z",
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
		"liquidityUsd": 503118.53,
		"hash": "48e4a3a0ba8d8198028f9dd061f2b86ee6f44637a6e4b27db2ecb63ae749a40f"
	},
	{
		"id": "329c6a7ed457",
		"ts": "2026-09-12T16:42:47.037Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 350281.2,
		"hash": "329c6a7ed457959c87f45a95a7f133e1cac7292af1e998e46dc656b98fc64fe9"
	},
	{
		"id": "a5d389a985c4",
		"ts": "2026-09-12T13:31:18.131Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120050242.14,
		"hash": "a5d389a985c488a1b22f6f489a316fcf25585fce86ada5bfbffae1c2eebe74a1"
	},
	{
		"id": "14f7dcb553ab",
		"ts": "2026-09-12T13:31:18.375Z",
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
		"liquidityUsd": 16115168.67,
		"hash": "14f7dcb553ab90972bfddc894273e32addc5e8dbb77dc61cd5552c63bda83bac"
	},
	{
		"id": "bc352cb8be28",
		"ts": "2026-09-12T13:31:18.617Z",
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
		"liquidityUsd": 999547.65,
		"hash": "bc352cb8be287f6a7465828494c8bdef39ef6cb5ea20b43f7ac55d9f8560da4d"
	},
	{
		"id": "4b0da0d4fbab",
		"ts": "2026-09-12T13:31:19.092Z",
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
		"liquidityUsd": 33939793.61,
		"hash": "4b0da0d4fbab9bab239f3a9c216fde469c78140fc224fac6e8fba8e1ea21cd54"
	},
	{
		"id": "27644dc0c8ad",
		"ts": "2026-09-12T13:31:19.559Z",
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
		"liquidityUsd": 4111814.34,
		"hash": "27644dc0c8adb65b7f3aee98d34c6c9a89dbc2bfb4c7a89a0e6aba6a6d9b5db2"
	},
	{
		"id": "ba36f5569aca",
		"ts": "2026-09-12T13:31:19.795Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1194783.76,
		"hash": "ba36f5569aca7ca8675f4e709f9aeed76ca629af9107481257432441e80b05eb"
	},
	{
		"id": "926a166b9243",
		"ts": "2026-09-12T13:31:20.029Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1638911.16,
		"hash": "926a166b9243d18cad849e3e5a831ee1d696809888ff5b8d085ce086981ff618"
	},
	{
		"id": "7b2517a88b06",
		"ts": "2026-09-12T13:31:20.266Z",
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
		"liquidityUsd": 2605938.52,
		"hash": "7b2517a88b062f6949dd143a5032428752e8d0ca7c715a4ea81f1db604d73324"
	},
	{
		"id": "91f7a4c9de18",
		"ts": "2026-09-12T13:31:20.504Z",
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
		"liquidityUsd": 1638911.16,
		"hash": "91f7a4c9de18ec7a7394ad7bd30dd4164063d434b146e91a3ecb9164a7610e00"
	},
	{
		"id": "e44907f185a4",
		"ts": "2026-09-12T13:31:20.754Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 663862.73,
		"hash": "e44907f185a46d00667f8c40a28c6e23c1d57b32cfe996abe3d428249cc96f6d"
	},
	{
		"id": "cf3944c715cf",
		"ts": "2026-09-12T13:31:20.987Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14188510.34,
		"hash": "cf3944c715cfb8cc1dcec62ae3d72318052af9aebdf4b3fb21f3ef0f3f3d84be"
	},
	{
		"id": "53567df730f4",
		"ts": "2026-09-12T13:31:21.206Z",
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
		"liquidityUsd": 743085.09,
		"hash": "53567df730f49986a43a529aac6ae61caa065598d73ae081efe341eed311b7c6"
	},
	{
		"id": "ed7d1d10a61b",
		"ts": "2026-09-12T13:31:21.431Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 264585.41,
		"hash": "ed7d1d10a61b5ce7e81f8fd4be2ce35d62d3290d8a11445f689614f91c278437"
	},
	{
		"id": "fc1ff6dbdf03",
		"ts": "2026-09-12T13:31:21.651Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 559718.58,
		"hash": "fc1ff6dbdf037549e52b1719e903907826a9b3c005b5507b90f0db2505255e0f"
	},
	{
		"id": "1f807c52d5ef",
		"ts": "2026-09-12T13:31:21.870Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1527579.43,
		"hash": "1f807c52d5efbba5121fa390e318651c71cf1e741c7d6b6a2e3a1b09071298a5"
	},
	{
		"id": "16a8ba64b1c9",
		"ts": "2026-09-12T13:31:22.499Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 149847.97,
		"hash": "16a8ba64b1c93563f60f48aa0b8e0d5caa51706ad2e5aac6e4993bfbd1468fd6"
	},
	{
		"id": "8d75e8aa7931",
		"ts": "2026-09-12T13:31:22.720Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 90531.41,
		"hash": "8d75e8aa7931af806f78afcf4540b9cea6b4a6f1bcda61522e9064f5ce5106f0"
	},
	{
		"id": "53d231bfca46",
		"ts": "2026-09-12T13:31:22.972Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1808619,
		"hash": "53d231bfca4658150c35a99b97acf5cdc6a66ff4d2f006ecb411d0c24a5a35e0"
	},
	{
		"id": "7b3397f8be2d",
		"ts": "2026-09-12T13:31:23.278Z",
		"symbol": "ELON",
		"token": "0xA3d353743164972B37C8E5358fb1E76f0Be8abA3",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 123209.03,
		"hash": "7b3397f8be2df740b46439bfefd12efb288ac3d319539ea1e64a3c13c112e35a"
	},
	{
		"id": "92af01aeb3f5",
		"ts": "2026-09-12T13:31:23.497Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1173687.45,
		"hash": "92af01aeb3f5c4f677b61659e3069196ed1c2fe648e3326824f5cb98e09f5422"
	},
	{
		"id": "1c9c00e98556",
		"ts": "2026-09-12T10:00:12.061Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 119650780.78,
		"hash": "1c9c00e98556956ad5148f720c236b80e36a30fde6094522db1b2b7a60321703"
	},
	{
		"id": "658247ac1ca5",
		"ts": "2026-09-12T10:00:12.747Z",
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
		"liquidityUsd": 16047979.59,
		"hash": "658247ac1ca55d96ac9ae9935cd54fe23e204ff8851c1589a59f0de89f980a4a"
	},
	{
		"id": "edaa5edd9ca7",
		"ts": "2026-09-12T10:00:13.324Z",
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
		"liquidityUsd": 998805.62,
		"hash": "edaa5edd9ca7cdc53ec5869dfd765696680c4a0be24f8a9370889664c29a417d"
	},
	{
		"id": "65a001608d60",
		"ts": "2026-09-12T10:00:13.807Z",
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
		"liquidityUsd": 33898258.76,
		"hash": "65a001608d60120e08fd6dd773cce6f7be5d07c12ed4ec794a931a62de4c0c14"
	},
	{
		"id": "c9691f89bf2f",
		"ts": "2026-09-12T10:00:14.103Z",
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
		"liquidityUsd": 4095826.75,
		"hash": "c9691f89bf2f073c3d53dae897c4d363bdcf3559b91b6341fe56176f03c59532"
	},
	{
		"id": "a33664d9f579",
		"ts": "2026-09-12T10:00:14.385Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1192905.5,
		"hash": "a33664d9f57982722ea8de7b8ab8ae4dfb892f3d9167120b8d68a3472786ced7"
	},
	{
		"id": "503914343f4d",
		"ts": "2026-09-12T10:00:14.659Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1614996.51,
		"hash": "503914343f4d82405d0a5ba6f70fc620ef39dcd84025b30b35f2f6a4ac857c88"
	},
	{
		"id": "e503bc81c24e",
		"ts": "2026-09-12T10:00:15.123Z",
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
		"liquidityUsd": 1153296.11,
		"hash": "e503bc81c24e33d097c91535043543ad2752f973fbaaef2d6b0e3a21829f894f"
	},
	{
		"id": "efa26abc6b09",
		"ts": "2026-09-12T10:00:15.620Z",
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
		"liquidityUsd": 1614996.51,
		"hash": "efa26abc6b0911dc868b02dcf9377f377e0094d9cfb57b0002aff843f4b6b6c4"
	},
	{
		"id": "6ea9c2ce5b9f",
		"ts": "2026-09-12T10:00:15.882Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 609616.7,
		"hash": "6ea9c2ce5b9fa7f8678ae1de5f8ae252cd12550ae7b12da775238d648a50dff1"
	},
	{
		"id": "0fcb65dae5b9",
		"ts": "2026-09-12T10:00:16.123Z",
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
		"liquidityUsd": 726305.34,
		"hash": "0fcb65dae5b9af6717adb0c9eaa8f5e3921728ec2e2ff2d93679e2ed33186f20"
	},
	{
		"id": "3750be42f3a3",
		"ts": "2026-09-12T10:00:16.365Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14174053.94,
		"hash": "3750be42f3a360205292cc61c610ec4508ed7df07394cedf4e3c2ce42a9e1e5a"
	},
	{
		"id": "a365228e874f",
		"ts": "2026-09-12T10:00:16.607Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 149253.68,
		"hash": "a365228e874f36966c0918406cb753b5120967e5bc517fe457a0c760ccb02812"
	},
	{
		"id": "deb922a50943",
		"ts": "2026-09-12T10:00:16.851Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1499931.32,
		"hash": "deb922a509439676f64518f008e28ad3f815ed79561942dd8d48ee5bf37f1e4e"
	},
	{
		"id": "eb2f527c063e",
		"ts": "2026-09-12T10:00:17.092Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 261886.7,
		"hash": "eb2f527c063e5ca0a7e4358e834de6fbd4946cf144022032036e7cb6aae4d3f6"
	},
	{
		"id": "4d312e2f5c20",
		"ts": "2026-09-12T10:00:17.334Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 537765.17,
		"hash": "4d312e2f5c20a9b372f47d72d1aafff7ac7ee4ff0c728ddb4fb880775ab5d184"
	},
	{
		"id": "7bd864fde641",
		"ts": "2026-09-12T10:00:17.576Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1808517.04,
		"hash": "7bd864fde641985da7d212434b8adf85acd72b692e66e4f74e6a7b4c1156a0cf"
	},
	{
		"id": "70dc1af710be",
		"ts": "2026-09-12T10:00:17.819Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 78107,
		"hash": "70dc1af710be0dd3e20262564dcd517ee3f45be5f3002cdb8197587364d47de5"
	},
	{
		"id": "2aabe1c68c86",
		"ts": "2026-09-12T10:00:18.060Z",
		"symbol": "ELON",
		"token": "0xA3d353743164972B37C8E5358fb1E76f0Be8abA3",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 116288.07,
		"hash": "2aabe1c68c86b0c9cd3d2efd93b39f6997ff9aa339b47ca3b9c22a81eb690eb2"
	},
	{
		"id": "b8d0aa4dd72a",
		"ts": "2026-09-12T10:00:18.301Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1174493.48,
		"hash": "b8d0aa4dd72a9f4009acae4bf4b725abbbe6c9af78dc418871635b88a00974b0"
	},
	{
		"id": "8bdd4ba13123",
		"ts": "2026-09-12T05:21:25.903Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 119165241.05,
		"hash": "8bdd4ba13123baac89e55ba7308c6545a67ad323a0c9475d3975608dbd1b8342"
	},
	{
		"id": "6e1a9965250f",
		"ts": "2026-09-12T05:21:26.357Z",
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
		"liquidityUsd": 16143863.18,
		"hash": "6e1a9965250fe0d8fff704603f48909f8a7a5891ab2bc5e393dc4f6712c7509b"
	},
	{
		"id": "ce4b150e6692",
		"ts": "2026-09-12T05:21:26.603Z",
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
		"liquidityUsd": 993077.58,
		"hash": "ce4b150e669295ea012585cc592f7b4430cf69f3a78c6ef5297cf6f62ca35975"
	},
	{
		"id": "a17db334687e",
		"ts": "2026-09-12T05:21:26.862Z",
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
		"liquidityUsd": 33702481.56,
		"hash": "a17db334687ef7c999d525dec52db94f0e850165c5fe1b6120ddcbb851a07344"
	},
	{
		"id": "5bdeb9aaa2de",
		"ts": "2026-09-12T05:21:27.103Z",
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
		"liquidityUsd": 4066636.3,
		"hash": "5bdeb9aaa2ded3de0067e2d53d93a6c8046953bb4da7dd32ef85317ce6ff0a7c"
	},
	{
		"id": "f3fb4b30071c",
		"ts": "2026-09-12T05:21:27.350Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1183215.41,
		"hash": "f3fb4b30071c5d6dd8ab5b6a85dea78cfab0bafb5aa16ad74ee6cbc3fd8dc78b"
	},
	{
		"id": "fffa1b33cb23",
		"ts": "2026-09-12T05:21:27.605Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1584045.26,
		"hash": "fffa1b33cb236fcddc34c41f580381217bd863242fcd6e13680cc8dcb0f07af9"
	},
	{
		"id": "a0a5e730faa0",
		"ts": "2026-09-12T05:21:27.849Z",
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
		"liquidityUsd": 1142061.06,
		"hash": "a0a5e730faa08a1a5ce9b2f0c548ec2596cddb179e6b972e7c3726ed75d69f51"
	},
	{
		"id": "781bc720c618",
		"ts": "2026-09-12T05:21:28.303Z",
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
		"liquidityUsd": 1586678.1,
		"hash": "781bc720c6180e9481b20de52c4c10c8aec11af636785af381259dbff6fff6d3"
	},
	{
		"id": "6f7a5dc69fd7",
		"ts": "2026-09-12T05:21:28.545Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 620029.5,
		"hash": "6f7a5dc69fd7831f3fe5108bcbb2acb9163ce25e3f373109a54f2f326be5e539"
	},
	{
		"id": "b7e4bf7ef74b",
		"ts": "2026-09-12T05:21:28.775Z",
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
		"liquidityUsd": 728314.45,
		"hash": "b7e4bf7ef74b422263a317f3a439ade610576eafedcf6f602faaf2739ae701f3"
	},
	{
		"id": "ee6e4b76cdb0",
		"ts": "2026-09-12T05:21:29.002Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1505210.13,
		"hash": "ee6e4b76cdb0bc0887202db2fa66d6a1b983d06f99bcfc6c714b7516e8c8fbef"
	},
	{
		"id": "8bf84d18f2d7",
		"ts": "2026-09-12T05:21:29.241Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14239730.49,
		"hash": "8bf84d18f2d758f22bd1be3d1b05853a3af145b4c4fe9631249ec93cf930efc1"
	},
	{
		"id": "7547447c4b3e",
		"ts": "2026-09-12T05:21:29.470Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 274881.22,
		"hash": "7547447c4b3e77ef05400c5a58ef7c5355ce41a36782c36da87131a99f3047df"
	},
	{
		"id": "95afd2a223c1",
		"ts": "2026-09-12T05:21:29.698Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 157363.39,
		"hash": "95afd2a223c1321b0e7d805ee671ab042af5c8b175d93aacf3fb0909ae7a5170"
	},
	{
		"id": "90abe8c6f4c7",
		"ts": "2026-09-12T05:21:29.941Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 506770.45,
		"hash": "90abe8c6f4c7bc790e40a9b4145d4ccd7836018ef890e2a508aca49b42275c4d"
	},
	{
		"id": "69f1d2b15662",
		"ts": "2026-09-12T05:21:30.168Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 373218.38,
		"hash": "69f1d2b15662f39e70dce09980055bd1df516508177e0fdaa953b396bbb3364d"
	},
	{
		"id": "bf9362162106",
		"ts": "2026-09-12T05:21:30.395Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 74097.46,
		"hash": "bf93621621065e7bb4fb0afcec848aba1f8aca8a597731206301cc7ee88f41d6"
	},
	{
		"id": "c4a7de5afd34",
		"ts": "2026-09-12T05:21:30.636Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4684131.93,
		"hash": "c4a7de5afd34e64f741110483ee5175496ce0c8a14e6d0e28f7bc0d4a91b2050"
	},
	{
		"id": "8dfa604ceaf0",
		"ts": "2026-09-12T00:52:02.933Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 119181172.65,
		"hash": "8dfa604ceaf0d8c57a705250e7837dfb310e59016522c3e1a056de49d66f4912"
	},
	{
		"id": "ec8df7daeca7",
		"ts": "2026-09-12T00:52:03.264Z",
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
		"liquidityUsd": 12438092.41,
		"hash": "ec8df7daeca7f257c17a1c66453d6e92907eae340b93696f1ea7f5b127b25c8a"
	},
	{
		"id": "e911bec94fb1",
		"ts": "2026-09-12T00:52:03.517Z",
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
		"liquidityUsd": 993396.7,
		"hash": "e911bec94fb1265bb64e956e948ad8114339c39ce20dfc1fdbb6402907a44672"
	},
	{
		"id": "8681cef775b6",
		"ts": "2026-09-12T00:52:03.771Z",
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
		"liquidityUsd": 33803407.21,
		"hash": "8681cef775b64cd325c87729023286dd28442cf929d8ac41861f9fe0cd0a6188"
	},
	{
		"id": "0eeadb8a1816",
		"ts": "2026-09-12T00:52:04.018Z",
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
		"liquidityUsd": 4043688.05,
		"hash": "0eeadb8a1816400e634649f6b6f186bae34576016537d5b807253b04f0cb0fc9"
	},
	{
		"id": "a6335f5679ad",
		"ts": "2026-09-12T00:52:04.263Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1179164.56,
		"hash": "a6335f5679adcc32938beefad4aee6cb65defd05770d346938f12091b604f456"
	},
	{
		"id": "19a1dbb5eead",
		"ts": "2026-09-12T00:52:04.577Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1619947.38,
		"hash": "19a1dbb5eeade72686fa57f50bd8864014986fb945df9b4f0aee8e89bf300781"
	},
	{
		"id": "f942e04adf9b",
		"ts": "2026-09-12T00:52:04.826Z",
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
		"liquidityUsd": 1145224.38,
		"hash": "f942e04adf9bc92ddd8248dcb4d22a0c2650de3ed57d101b3f4b6cf4f6601e22"
	},
	{
		"id": "0b530ac2f085",
		"ts": "2026-09-12T00:52:05.082Z",
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
		"liquidityUsd": 1619947.38,
		"hash": "0b530ac2f085d18f6a763e05304f2eae8c7dd45b67da8d0d6150b3fdd6d2b406"
	},
	{
		"id": "348d8e991bf0",
		"ts": "2026-09-12T00:52:05.324Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 627789.84,
		"hash": "348d8e991bf0209bde21d951cff881062b796b3e213af4edd9a312071808fb36"
	},
	{
		"id": "13f81afc6a05",
		"ts": "2026-09-12T00:52:05.558Z",
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
		"liquidityUsd": 694495.82,
		"hash": "13f81afc6a055f9fe7bec0b99ff3d95e80f3b7b8a126af3a38d1ab48912331b7"
	},
	{
		"id": "09fb831413ac",
		"ts": "2026-09-12T00:52:05.788Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1507292.01,
		"hash": "09fb831413ac631d7b8d2b6647e2bbd2146da90ec0ece839af894ff60cacd590"
	},
	{
		"id": "f4b25b4eb35e",
		"ts": "2026-09-12T00:52:06.016Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14185789.79,
		"hash": "f4b25b4eb35e87b3c2ce84477ebb857b6d861067e73afb9a13669ded9f09a964"
	},
	{
		"id": "30f94dec2cb9",
		"ts": "2026-09-12T00:52:06.250Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 152680.17,
		"hash": "30f94dec2cb9ba49854bd3d0a1bb18985aeb09446cbce180a5cf855753caa04f"
	},
	{
		"id": "8b3778f98edb",
		"ts": "2026-09-12T00:52:06.479Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 296627.05,
		"hash": "8b3778f98edb301f8fc56b0c9ae70f8de8b88c62c15f3a9b32111d87b5357983"
	},
	{
		"id": "54ff6ffa57e3",
		"ts": "2026-09-12T00:52:06.709Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 385561.74,
		"hash": "54ff6ffa57e34f4943fcfb7f7a038bc14ee5ad8fc45d3d63c2553f9824fc85f4"
	},
	{
		"id": "85113c81a4aa",
		"ts": "2026-09-12T00:52:06.938Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 503259.99,
		"hash": "85113c81a4aa379dbe0c435409a53f70d009763d3636bd3f53d028e7b7700c9a"
	},
	{
		"id": "6df54045e28c",
		"ts": "2026-09-12T00:52:07.170Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 451177.32,
		"hash": "6df54045e28ce09b0acb91e40a3d328dc38fc9eed15345a0ee324f224560ec2a"
	},
	{
		"id": "5c485ab6ba34",
		"ts": "2026-09-12T00:52:07.401Z",
		"symbol": "ELON",
		"token": "0xA3d353743164972B37C8E5358fb1E76f0Be8abA3",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 192779.94,
		"hash": "5c485ab6ba34fd34b86aaacb0b8078e748a725c57368a3d68b51d65baab587a3"
	},
	{
		"id": "94a63e63447c",
		"ts": "2026-09-11T22:12:04.904Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 119159206.5,
		"hash": "94a63e63447c740e51714a582c5c05757f18e7572f39ed38401ae2fbd17dce78"
	},
	{
		"id": "b64ec042dcad",
		"ts": "2026-09-11T22:12:05.544Z",
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
		"liquidityUsd": 18012465.83,
		"hash": "b64ec042dcad7995802429949692969ad8ae5f6ecfb7ba55b156389b857ad668"
	},
	{
		"id": "7d16b07226be",
		"ts": "2026-09-11T22:12:05.992Z",
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
		"liquidityUsd": 994339.84,
		"hash": "7d16b07226be7f8607b43611f647c67b9dd47b994208b43e7ac2a11382eea9e6"
	},
	{
		"id": "900f06ebda46",
		"ts": "2026-09-11T22:12:06.296Z",
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
		"liquidityUsd": 33845538.16,
		"hash": "900f06ebda46cccfddc8380d23069c9bcbf87750e2d545c6d3a83ca3572df063"
	},
	{
		"id": "025d7719f24e",
		"ts": "2026-09-11T22:12:06.544Z",
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
		"liquidityUsd": 4049251.59,
		"hash": "025d7719f24ee2ae1c0c93f92d46551d9d8c2e5c0611faeb032267f8f760cfa8"
	},
	{
		"id": "b1da67df81cc",
		"ts": "2026-09-11T22:12:06.789Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1173887.05,
		"hash": "b1da67df81cc15080e78fc09a0c43c7d8d52bae874b85ee4bb2897839e523335"
	},
	{
		"id": "5e52c732fe4b",
		"ts": "2026-09-11T22:12:07.044Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1610825.82,
		"hash": "5e52c732fe4bf209328e9f4e5ad54cc6090e062cbd2067456172b527684bc81d"
	},
	{
		"id": "2425cad16cde",
		"ts": "2026-09-11T22:12:07.297Z",
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
		"liquidityUsd": 1145799.06,
		"hash": "2425cad16cdef4f662bf2275fb2af4881acd0b02ce8ebd99adb8bdc07f49a3dd"
	},
	{
		"id": "0d2744a4a5b1",
		"ts": "2026-09-11T22:12:07.811Z",
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
		"liquidityUsd": 1611369.2,
		"hash": "0d2744a4a5b147304f08c212a6298e18fa502878d0d1e62f606dce3aa0c28087"
	},
	{
		"id": "0b28dacb19a0",
		"ts": "2026-09-11T22:12:08.061Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 560491.22,
		"hash": "0b28dacb19a0810f0c212f9fb249807f0f6917ce2f5cd43a15ccf7366547f6b4"
	},
	{
		"id": "14df6c830fe2",
		"ts": "2026-09-11T22:12:08.293Z",
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
		"liquidityUsd": 716532.07,
		"hash": "14df6c830fe219b4a96bdb5e000f6b14e8ddf600e07fa5e08ee86d70ef691268"
	},
	{
		"id": "1d8028648be2",
		"ts": "2026-09-11T22:12:08.529Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1622128.71,
		"hash": "1d8028648be2b4524d19741981040af516295a29ffeaeeb75a9923faf3dbed59"
	},
	{
		"id": "404b889428e2",
		"ts": "2026-09-11T22:12:08.765Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14422252.01,
		"hash": "404b889428e266f0a6a99a5aebf00fe3886f6183233a9b0a776bcbe072306fed"
	},
	{
		"id": "9f31af612422",
		"ts": "2026-09-11T22:12:08.995Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 159374.48,
		"hash": "9f31af6124220421a97d8ad1b391b709cfe6d072380f452f0751f7873f8861ef"
	},
	{
		"id": "299b135c79f4",
		"ts": "2026-09-11T22:12:09.224Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 280127.89,
		"hash": "299b135c79f4760836ebf1b3eec1d26f65972dfd56994964d76b018becfd4fb1"
	},
	{
		"id": "8ec3c05f5abc",
		"ts": "2026-09-11T22:12:09.457Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 387851.36,
		"hash": "8ec3c05f5abcd79aa3e4fc9f77bde42e6589ec627341a1d9d06da321b8a5a830"
	},
	{
		"id": "e9393faecc2c",
		"ts": "2026-09-11T22:12:09.685Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 461262.36,
		"hash": "e9393faecc2c257d52084ed913b6db9df3552eacd4dddd97ce1d0cbd827ebd75"
	},
	{
		"id": "7418d09a4a65",
		"ts": "2026-09-11T22:12:09.915Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1826706.3,
		"hash": "7418d09a4a65e6c84d2db95cc0f917856331710d2a4438e4f40c51df0e9f4e46"
	},
	{
		"id": "c0d577d231b2",
		"ts": "2026-09-11T22:12:10.145Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1175314.66,
		"hash": "c0d577d231b209f1d0094ee2847170ae8fc8b84a50b51785fac27dacec68e956"
	},
	{
		"id": "e54672455765",
		"ts": "2026-09-11T19:25:09.626Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 119275123.44,
		"hash": "e54672455765369076059227e1cc58c100c63139dd5d278d03274a578a92fcaf"
	},
	{
		"id": "c4a9d85059be",
		"ts": "2026-09-11T19:25:09.838Z",
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
		"liquidityUsd": 17885725.8,
		"hash": "c4a9d85059be4ffdd5f7f320f6ac6e151edfd03c96ac4fe8ac285e0aa273752e"
	},
	{
		"id": "0094f0759f18",
		"ts": "2026-09-11T19:25:10.042Z",
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
		"liquidityUsd": 1004620.48,
		"hash": "0094f0759f182f69c604ed6cbbf5902ba5c0a66454ecbedae3fbed354e2ef9da"
	},
	{
		"id": "bc1fd98a28c9",
		"ts": "2026-09-11T19:25:10.255Z",
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
		"liquidityUsd": 33305652.58,
		"hash": "bc1fd98a28c939d5b0210d8d2f54650b28f633a820d16332bdcb6b961784f8db"
	},
	{
		"id": "30c48b8c067a",
		"ts": "2026-09-11T19:25:10.475Z",
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
		"liquidityUsd": 4093784.18,
		"hash": "30c48b8c067a520df1370662b69e587c7f67742097c5c53bc973479aa7305978"
	},
	{
		"id": "8e2eefb8a37a",
		"ts": "2026-09-11T19:25:10.694Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1185979.65,
		"hash": "8e2eefb8a37a7974913a71293d3c4ca4755bfd342adb61ea6051fdc17ef440ff"
	},
	{
		"id": "41368d826c96",
		"ts": "2026-09-11T19:25:10.897Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1369937.69,
		"hash": "41368d826c96988582c5e48ff5f9db7a7d7ad51bcf8fd11e3ede4e47e706c828"
	},
	{
		"id": "d5e0a37a2e8a",
		"ts": "2026-09-11T19:25:11.126Z",
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
		"liquidityUsd": 1156802.05,
		"hash": "d5e0a37a2e8a5e7c6c95961f4ce1e47faced5a2218922a8caa8158c086314ab4"
	},
	{
		"id": "02baec08897d",
		"ts": "2026-09-11T19:25:11.485Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 175759.34,
		"hash": "02baec08897d3b7c9afb45bf852423444348d199e65d2e84f6ba0b81e7e80687"
	},
	{
		"id": "67796c4b3cd6",
		"ts": "2026-09-11T19:25:11.690Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 616054.28,
		"hash": "67796c4b3cd62f1743cba69c7afd4f81509dc443df7341f777200350b022d236"
	},
	{
		"id": "a43ffc72521c",
		"ts": "2026-09-11T19:25:11.904Z",
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
		"liquidityUsd": 747151.28,
		"hash": "a43ffc72521cc0c872ddb1cb36f1e0568ef7b3a5ca359836cae63c6126253150"
	},
	{
		"id": "c28b313ce1c2",
		"ts": "2026-09-11T19:25:12.114Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1650816.69,
		"hash": "c28b313ce1c264d0e59ad92e724fcdb48920aad4be7ecf7f25ba2cc5d97f83a0"
	},
	{
		"id": "c5d3db03c7d9",
		"ts": "2026-09-11T19:25:12.303Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14510157.84,
		"hash": "c5d3db03c7d9dfc106750773d9c4721f75cb12798f81e63184b412755f850443"
	},
	{
		"id": "a87c4b2f9245",
		"ts": "2026-09-11T19:25:12.497Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 153771.42,
		"hash": "a87c4b2f9245c6d9b9fc68ee4cbf4cd00fb559f6efc464e5cfb2acbcf7d00f53"
	},
	{
		"id": "f76f90e3be9e",
		"ts": "2026-09-11T19:25:12.771Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 260236.41,
		"hash": "f76f90e3be9e642488ef84a2942eba68a7c136e9616deca7746aa3413318643f"
	},
	{
		"id": "5d138b40c3f1",
		"ts": "2026-09-11T19:25:12.985Z",
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
		"liquidityUsd": 785691.8,
		"hash": "5d138b40c3f1243b68c26bfe5eae061a113646acd15941439988d7d37ae5605f"
	},
	{
		"id": "3ae3a86cd2c9",
		"ts": "2026-09-11T19:25:13.220Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 469566.34,
		"hash": "3ae3a86cd2c9ccc3702c1ff437599444fb1689d53f7d112da3ab58985a5ab26b"
	},
	{
		"id": "d135876ce167",
		"ts": "2026-09-11T19:25:13.419Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 381692,
		"hash": "d135876ce167c93560af3ef4f2790b2200e5e3a6c54b508c8e411f3b352ad842"
	},
	{
		"id": "7afcba7a1395",
		"ts": "2026-09-11T19:25:13.619Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1166007.61,
		"hash": "7afcba7a13954e40272fa2314c3e091fbbbcf28d1f74214944b70ae360acbcea"
	},
	{
		"id": "133f11aa1810",
		"ts": "2026-09-11T16:52:42.828Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118018689.27,
		"hash": "133f11aa18104082ef97e1a198e6f93500f72765aca3615f99e228cbac78766f"
	},
	{
		"id": "694d96d8d4bc",
		"ts": "2026-09-11T16:52:43.209Z",
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
		"liquidityUsd": 13360525.39,
		"hash": "694d96d8d4bca12ca70e5cd4042a1f38ac50d8491a6693407c76969607c864ff"
	},
	{
		"id": "c6d9d1861a45",
		"ts": "2026-09-11T16:52:43.416Z",
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
		"liquidityUsd": 1019455.68,
		"hash": "c6d9d1861a45530c8f5599fa50f6e4f730c2d6492ee2df1520a43a411c177ce4"
	},
	{
		"id": "111825ffac3b",
		"ts": "2026-09-11T16:52:43.626Z",
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
		"liquidityUsd": 34393319.79,
		"hash": "111825ffac3b0c02ecac0a678fda6910eafdf76b2009e1d852897bc85686ad7e"
	},
	{
		"id": "ecfae83a6313",
		"ts": "2026-09-11T16:52:43.834Z",
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
		"liquidityUsd": 4176557.15,
		"hash": "ecfae83a6313aa37d36a80ff6ef82ee680394676b1bc2541e59ac491365a9b34"
	},
	{
		"id": "dc7e1de0546e",
		"ts": "2026-09-11T16:52:44.047Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1203332.37,
		"hash": "dc7e1de0546ef0e7c40c8c8ffb5515a143337fd591268471fdfe7a095aa649b1"
	},
	{
		"id": "5d8a3d742920",
		"ts": "2026-09-11T16:52:44.262Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34393319.79,
		"hash": "5d8a3d742920dcd8687caa07d193ef0a047b08b024e155b63fa8ae6fed5e0295"
	},
	{
		"id": "8ba58da05bd8",
		"ts": "2026-09-11T16:52:44.528Z",
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
		"liquidityUsd": 1174591.01,
		"hash": "8ba58da05bd8ab14a515df1064658b48b4aeb19c3d065cbdeb96eb4903ffc351"
	},
	{
		"id": "1e7fab35535d",
		"ts": "2026-09-11T16:52:44.742Z",
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
		"liquidityUsd": 1596550.86,
		"hash": "1e7fab35535d473d70cff1303260e9721cd0f156efe413b34f13fa302f1a36db"
	},
	{
		"id": "b5c41db0f29e",
		"ts": "2026-09-11T16:52:44.946Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 634682.49,
		"hash": "b5c41db0f29e4cd4193d83f2b6b62c0b2ed388615fbfa3d9698528b78a045166"
	},
	{
		"id": "3fd3db0d3b8d",
		"ts": "2026-09-11T16:52:45.146Z",
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
		"liquidityUsd": 748034.78,
		"hash": "3fd3db0d3b8dcd31a82a5c67252a465c6824cc4f5f346818a48c8b309026e859"
	},
	{
		"id": "c517a00d5e36",
		"ts": "2026-09-11T16:52:45.369Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1673386.38,
		"hash": "c517a00d5e36af3f7f26948b60dc87f430376766d42e39b50d0b2a25164e7f25"
	},
	{
		"id": "2c6fa5506d45",
		"ts": "2026-09-11T16:52:45.577Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14836879.65,
		"hash": "2c6fa5506d45c2637efd5ab703bdb3ae97b5213814630223d7c0b62b86ab1aae"
	},
	{
		"id": "b312d7b45b74",
		"ts": "2026-09-11T16:52:46.184Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 255915.33,
		"hash": "b312d7b45b74c7cde957ed0e93dc2ea3b7a34b6012480ca76fe51b3b9e80a984"
	},
	{
		"id": "668816aaab3a",
		"ts": "2026-09-11T16:52:46.386Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 164674.18,
		"hash": "668816aaab3a8e1489e5631151f4ba67028b339420f9ad0bbcfa4ade06ce7802"
	},
	{
		"id": "d3b31b52209d",
		"ts": "2026-09-11T16:52:46.580Z",
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
		"liquidityUsd": 806555.43,
		"hash": "d3b31b52209d10f63fb9b939f7b3f96e1d121960fa8dcb8716600e0cdd328ff4"
	},
	{
		"id": "f8c27dbf2e14",
		"ts": "2026-09-11T16:52:46.786Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 398318.39,
		"hash": "f8c27dbf2e14928c344bc25dc0c94076cfbcb8db125bdce4b3799a985fc74151"
	},
	{
		"id": "7600a91748e0",
		"ts": "2026-09-11T16:52:46.975Z",
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
		"liquidityUsd": 554215.28,
		"hash": "7600a91748e0b585b7b1565f4af93ba7bafb4dcca6f78b2e595698304e865171"
	},
	{
		"id": "f5acfea0925c",
		"ts": "2026-09-11T16:52:47.169Z",
		"symbol": "HTTPBASE20",
		"token": "0xB2000000000000000000004b27c608b6e9814Cc0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 28863.8,
		"hash": "f5acfea0925ce405d390d8463e6afe35f062ce431448cdf9e55e903256fcb414"
	},
	{
		"id": "d6a4e66726f6",
		"ts": "2026-09-11T12:33:13.415Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118102299.58,
		"hash": "d6a4e66726f6e9680ece25f3788b8bfc13722a8636cff2ba0b013d3b8199e4b2"
	},
	{
		"id": "304f110162a8",
		"ts": "2026-09-11T12:33:13.688Z",
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
		"liquidityUsd": 13626906.97,
		"hash": "304f110162a89bb5be9e09251bdf44544b575990c110dc1582a76875c14088da"
	},
	{
		"id": "ede1ed9ad7a1",
		"ts": "2026-09-11T12:33:13.949Z",
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
		"liquidityUsd": 987571.67,
		"hash": "ede1ed9ad7a1fae834f57d189b9cf28b003e462027b104014b4c6eb6959b3468"
	},
	{
		"id": "cbc4dc78b33a",
		"ts": "2026-09-11T12:33:14.223Z",
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
		"liquidityUsd": 32716689.67,
		"hash": "cbc4dc78b33a1eae2d90a7d39fb2dd1be62c10c77dd460e97d37fe975986baa1"
	},
	{
		"id": "d415a86f1d0b",
		"ts": "2026-09-11T12:33:14.474Z",
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
		"liquidityUsd": 3974813.2,
		"hash": "d415a86f1d0b71ea0ef425fa330cd930390b73295e58b682c3bf232a94a2d918"
	},
	{
		"id": "53a4e29c77df",
		"ts": "2026-09-11T12:33:14.727Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1139976.34,
		"hash": "53a4e29c77df09364acb4c274da82847f456d536acd76ebe7455ca5ae4a22c82"
	},
	{
		"id": "0e063d0d8ae6",
		"ts": "2026-09-11T12:33:14.982Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 32634558.24,
		"hash": "0e063d0d8ae6b57546987c5655d3a75be9509fa21d871d85fba4f4d415a188a8"
	},
	{
		"id": "d0685ebcf596",
		"ts": "2026-09-11T12:33:15.250Z",
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
		"liquidityUsd": 1113863.01,
		"hash": "d0685ebcf59659fb484371c4f973d902f773b74e865d3db151782a464fcd181c"
	},
	{
		"id": "72444d461c20",
		"ts": "2026-09-11T12:33:15.541Z",
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
		"liquidityUsd": 1566931.95,
		"hash": "72444d461c20b637c6c0d3db1dd0630600c6dede37591920d97badadebe929bd"
	},
	{
		"id": "41a1d744088b",
		"ts": "2026-09-11T12:33:15.795Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 605234.07,
		"hash": "41a1d744088b1030e800399a22a91937cd9ff0e2628fe32afe1225ea5adc128b"
	},
	{
		"id": "acb9c89e016b",
		"ts": "2026-09-11T12:33:16.035Z",
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
		"liquidityUsd": 719051.58,
		"hash": "acb9c89e016bca331442c35b94dad7a5d9ddbd71b6ed2ccdac1747bc4b0f1593"
	},
	{
		"id": "7dfe0f912908",
		"ts": "2026-09-11T12:33:16.288Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1589637.51,
		"hash": "7dfe0f912908550f1d273f9ad7efbcc620a00221422d35612dc00260b2990091"
	},
	{
		"id": "da2c546ef03a",
		"ts": "2026-09-11T12:33:16.524Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14376158.65,
		"hash": "da2c546ef03a926547df02369cc0fe0e6d2d289d100231e773f3c4bad22e5667"
	},
	{
		"id": "caeccde05f02",
		"ts": "2026-09-11T12:33:16.780Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 254017.75,
		"hash": "caeccde05f02d8f95664309fafe65494e4e5457a187b18c63961ffd2c255a787"
	},
	{
		"id": "e39b34082f99",
		"ts": "2026-09-11T12:33:17.035Z",
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
		"liquidityUsd": 575014.8,
		"hash": "e39b34082f991cdb6435b9a9d17e1e5d677684a0661fea3cdaebe3344e5c447a"
	},
	{
		"id": "2999b010c4e3",
		"ts": "2026-09-11T12:33:17.270Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 429881.06,
		"hash": "2999b010c4e386cfc722aee2ed0be4b36bf756892883e69a668c4a4664729712"
	},
	{
		"id": "5eab06f4a0af",
		"ts": "2026-09-11T12:33:17.533Z",
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
		"liquidityUsd": 730468.3,
		"hash": "5eab06f4a0affd189b24f539bca59cd73b0081e31a99c534d00b615c3524a667"
	},
	{
		"id": "373b3cf21a1d",
		"ts": "2026-09-11T12:33:17.796Z",
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
		"liquidityUsd": 1319721.55,
		"hash": "373b3cf21a1d2ab84362538eadf36fbe6d82eed15a80e9d70d684d1716bb2829"
	},
	{
		"id": "67b0f53f6d99",
		"ts": "2026-09-11T12:33:18.054Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 370669.99,
		"hash": "67b0f53f6d99fd4263a9e0b0b5f2570ef3f3df7285c6232f2bbef2c7bd04d623"
	},
	{
		"id": "f4ce1e7b402c",
		"ts": "2026-09-11T07:44:14.975Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117888260.85,
		"hash": "f4ce1e7b402c4d518997bafb8f4e76cefdca32f5d64bea0c61186b37c7c15c36"
	},
	{
		"id": "900e03f2601c",
		"ts": "2026-09-11T07:44:15.624Z",
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
		"liquidityUsd": 18049271.09,
		"hash": "900e03f2601ca649d57d1c532fa01a5bb5ff625fec2aaf3990be65ffdd72e731"
	},
	{
		"id": "e2bda2d8ebc8",
		"ts": "2026-09-11T07:44:16.078Z",
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
		"liquidityUsd": 992062.46,
		"hash": "e2bda2d8ebc854865f9c98abb962792903f2fc35a340e7a973ef84a01fdc1492"
	},
	{
		"id": "aee2e4228ce9",
		"ts": "2026-09-11T07:44:16.518Z",
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
		"liquidityUsd": 32897295.53,
		"hash": "aee2e4228ce9c489ff5405535d21228950b0902768e4d0ab00d8635b4157c3fb"
	},
	{
		"id": "769bb140469c",
		"ts": "2026-09-11T07:44:16.765Z",
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
		"liquidityUsd": 4048520.32,
		"hash": "769bb140469cdd308ebb37405f9a66a85b6af656d7dd44d4e0683c497c0eceb2"
	},
	{
		"id": "66da50a91c64",
		"ts": "2026-09-11T07:44:17.013Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1161552.79,
		"hash": "66da50a91c642612a3067e5caa95c567e280906cd970f817a70872dea38b11e7"
	},
	{
		"id": "d47cd5e8264f",
		"ts": "2026-09-11T07:44:17.261Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 32897295.53,
		"hash": "d47cd5e8264f43f81432608c37fdb63fc3b4e2fbe160671f2e80e459b4287959"
	},
	{
		"id": "32ecc60c6622",
		"ts": "2026-09-11T07:44:17.532Z",
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
		"liquidityUsd": 1123216.07,
		"hash": "32ecc60c6622bfdc9e052a8187cd710120f688fc8d2ecdf7b50b2b9db79d74be"
	},
	{
		"id": "0a5e47f50e4a",
		"ts": "2026-09-11T07:44:18.375Z",
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
		"liquidityUsd": 1544005.36,
		"hash": "0a5e47f50e4affc2f9ee4a5176f6c474be1fd8da74992bd285cbc2130976ecd3"
	},
	{
		"id": "20d3310c3640",
		"ts": "2026-09-11T07:44:18.618Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 551884.35,
		"hash": "20d3310c364028c4374d74d2f251d43c933e26045431215385c7b2f0390b9c45"
	},
	{
		"id": "022a9ebcbd24",
		"ts": "2026-09-11T07:44:18.845Z",
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
		"liquidityUsd": 791313.37,
		"hash": "022a9ebcbd24e05693197479563387fc6b0931fe9ad1e060821ecd4385b75433"
	},
	{
		"id": "088f7996e1df",
		"ts": "2026-09-11T07:44:19.072Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1636770.57,
		"hash": "088f7996e1df88cbdd7452ce1ddf4c333dcdae3493bef0df4f4b4f5b5a6464ff"
	},
	{
		"id": "2f10d1bc5492",
		"ts": "2026-09-11T07:44:19.305Z",
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
		"liquidityUsd": 524013.22,
		"hash": "2f10d1bc54928081a61f37de3f3955b86f4096cf52454c3b3ebc9f0ca8d22dde"
	},
	{
		"id": "9d4e7a09de18",
		"ts": "2026-09-11T07:44:19.533Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 241093.6,
		"hash": "9d4e7a09de188f9620ca6bf26b63505f8fd7ae9e819cdf055658b59604881624"
	},
	{
		"id": "5b93fdb9d7dd",
		"ts": "2026-09-11T07:44:19.761Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14350147.42,
		"hash": "5b93fdb9d7ddd2c49d780d213802f0edb54ca00fbda084594166e745c85750b1"
	},
	{
		"id": "f5853af07b0a",
		"ts": "2026-09-11T07:44:19.988Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 437894.17,
		"hash": "f5853af07b0ae6a8bfe2e0222fb91d1b170f82fb5dc4cba8b6709b6f222b3b8b"
	},
	{
		"id": "02a6d0a52cee",
		"ts": "2026-09-11T07:44:20.215Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 744425.63,
		"hash": "02a6d0a52cee726ee3dd44aa06736dc28969d4cef670f613d823a59c1b1de8fc"
	},
	{
		"id": "856f5e7825c0",
		"ts": "2026-09-11T07:44:20.442Z",
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
		"liquidityUsd": 251404.32,
		"hash": "856f5e7825c096f423e6e6108d5cf022e92b55ae5924e0b09125ffb93586667d"
	},
	{
		"id": "b256d32666c6",
		"ts": "2026-09-11T07:44:20.668Z",
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
		"liquidityUsd": 1351382.18,
		"hash": "b256d32666c677dc48e2aa4f82bc28c6b593bc819da7badca9925b6b5c63953e"
	},
	{
		"id": "7a8d81db5423",
		"ts": "2026-09-11T07:44:20.895Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 611126.08,
		"hash": "7a8d81db542365a3d16189b48f5e8138d15472ea514c6b6f3c6bce1da1906194"
	},
	{
		"id": "9e3dd91b7474",
		"ts": "2026-09-11T02:48:22.910Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117488636.43,
		"hash": "9e3dd91b7474aa1f3760db15202dd6b1386baf341cb0ab6b751f3890c014de33"
	},
	{
		"id": "b394fed8056a",
		"ts": "2026-09-11T02:48:23.334Z",
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
		"liquidityUsd": 16854677.76,
		"hash": "b394fed8056ac3834f8d80c7a0e28a7bfb33ad9c7f047a44b0de2f98ff3a1946"
	},
	{
		"id": "b67c10c5b8c4",
		"ts": "2026-09-11T02:48:23.593Z",
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
		"liquidityUsd": 984857.03,
		"hash": "b67c10c5b8c484b0a6d771259056be7299d0a0a3efaeb40f6c661230f358cf04"
	},
	{
		"id": "237156fbf52a",
		"ts": "2026-09-11T02:48:23.826Z",
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
		"liquidityUsd": 32496841.08,
		"hash": "237156fbf52a5aee11701150dc1bc3b034b2ba9e11de3e217ad8975e405ad68f"
	},
	{
		"id": "25a0cbafbe28",
		"ts": "2026-09-11T02:48:24.067Z",
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
		"liquidityUsd": 4015401.05,
		"hash": "25a0cbafbe28ac34600b0bd1f19598c1388d95f36fbd44f987b1b16b5c285d61"
	},
	{
		"id": "99d2424c7a4a",
		"ts": "2026-09-11T02:48:24.306Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1150217.72,
		"hash": "99d2424c7a4a63110758472c11e297559b25dc741746fb095c9e471f31873458"
	},
	{
		"id": "f788b5377a6c",
		"ts": "2026-09-11T02:48:24.551Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2419194.2,
		"hash": "f788b5377a6cc814d1c91b843cf48d7ea5736ef4a7c0aa9d723519110120af28"
	}
]
