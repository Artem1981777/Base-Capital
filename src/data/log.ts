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
	"updatedAt": "2026-07-29T20:09:52.344Z",
	"tokensScored": 6277,
	"verdictsIssued": 6277,
	"safe": 5478,
	"risky": 486,
	"likelyRug": 313,
	"ticks": 382
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "b1a031aeec88",
		"ts": "2026-07-29T20:09:48.862Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111141827.43,
		"hash": "b1a031aeec883ffc4a149054a4d7f9125fe12d5b7bebba30c531cad06d6251c6"
	},
	{
		"id": "b284fa2b0111",
		"ts": "2026-07-29T20:09:49.107Z",
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
		"liquidityUsd": 16458994.72,
		"hash": "b284fa2b01119ca88807a9c25060bc7214ade1a4f38faa8ea59ad3d995eac208"
	},
	{
		"id": "aacc6c07595a",
		"ts": "2026-07-29T20:09:49.344Z",
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
		"liquidityUsd": 1109413.17,
		"hash": "aacc6c07595a26649d2454d6b62f35d43fc1d4c15e2ee866cfe4e5af9e5517ba"
	},
	{
		"id": "9384fa209fe8",
		"ts": "2026-07-29T20:09:49.585Z",
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
		"liquidityUsd": 25349956.46,
		"hash": "9384fa209fe8e27babff7b1e64d53d4309c47311c67df7505dac1c594bd2e43a"
	},
	{
		"id": "70676a3c01f4",
		"ts": "2026-07-29T20:09:50.031Z",
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
		"liquidityUsd": 4897786.13,
		"hash": "70676a3c01f4548be3f2b2d85673530ed08209ae4e7118a52e02338e88406cc4"
	},
	{
		"id": "aa00a6909e33",
		"ts": "2026-07-29T20:09:50.269Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 902610.18,
		"hash": "aa00a6909e33db841ec5e65a64f2f942965b09e6dc0208da14d4a4a677ad7ca3"
	},
	{
		"id": "6a8a0167fa31",
		"ts": "2026-07-29T20:09:50.530Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25349956.46,
		"hash": "6a8a0167fa31c72f42e61d7ec69d575d33b11bc91782007580b326a5a875ef83"
	},
	{
		"id": "a21896773285",
		"ts": "2026-07-29T20:09:50.769Z",
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
		"liquidityUsd": 2407313.48,
		"hash": "a21896773285322980f6a0d3fed79e10a74ab49c538b271e480c298b7fb81715"
	},
	{
		"id": "77910471a0ea",
		"ts": "2026-07-29T20:09:51.000Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 672537.21,
		"hash": "77910471a0ea9a4f845c5103515da80c0b938df52d8350b69314d13d923f4dc1"
	},
	{
		"id": "3d60efd8f020",
		"ts": "2026-07-29T20:09:51.238Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"modifiable_tax",
			"has_blacklist",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 441282.83,
		"hash": "3d60efd8f020da287aed9922a219f6d6f485a4da9e12c3113e12e83cb9a9b50a"
	},
	{
		"id": "b28d873fa428",
		"ts": "2026-07-29T20:09:51.460Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1808716.83,
		"hash": "b28d873fa42856d5b6d36c5b29f67b34d73002bc4233e79fb61de1126790db75"
	},
	{
		"id": "66eca6d54529",
		"ts": "2026-07-29T20:09:51.679Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 632472.08,
		"hash": "66eca6d545291e3924537a8f6b7ff05b033d478bad1bcd8ff2247d9f91316f6f"
	},
	{
		"id": "214780038a86",
		"ts": "2026-07-29T20:09:51.902Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1893066.47,
		"hash": "214780038a86fc482c85de51e505e2af6adf5427e8698fabfe50f5cfc8182bf8"
	},
	{
		"id": "ef673fdbf40e",
		"ts": "2026-07-29T20:09:52.122Z",
		"symbol": "MOLT",
		"token": "0xB695559b26BB2c9703ef1935c37AeaE9526bab07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1041323.51,
		"hash": "ef673fdbf40e67daecb7c3dece45fa7fbeb336f6488354869fbc997ea3ed3eed"
	},
	{
		"id": "44a1759bf8a9",
		"ts": "2026-07-29T20:09:52.344Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4354600.89,
		"hash": "44a1759bf8a9b17285d087056ac21920caf92d9473c2f4045b38d542be9ed743"
	},
	{
		"id": "7527b4e4326b",
		"ts": "2026-07-29T18:04:05.489Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112272074.15,
		"hash": "7527b4e4326b7039273059645cdbcf71ece8df04de86ef2d68707889e370c356"
	},
	{
		"id": "6c0625fcbb68",
		"ts": "2026-07-29T18:04:05.781Z",
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
		"liquidityUsd": 13371317.07,
		"hash": "6c0625fcbb681b89bd5bdba939510a0c8769a20b2f6890d14048bc4caccca40d"
	},
	{
		"id": "4f2d84d46038",
		"ts": "2026-07-29T18:04:06.029Z",
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
		"liquidityUsd": 1136436.12,
		"hash": "4f2d84d460386796c75597a7c08229dafd9b782dbcc0ac8ab0071944f83a20ff"
	},
	{
		"id": "1041e45d8d0d",
		"ts": "2026-07-29T18:04:06.271Z",
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
		"liquidityUsd": 25697591.82,
		"hash": "1041e45d8d0d18502c16243a7440c734b19dc1553637e77501f4c5ebbdea8788"
	},
	{
		"id": "49a0974fec7d",
		"ts": "2026-07-29T18:04:06.512Z",
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
		"liquidityUsd": 4884725.94,
		"hash": "49a0974fec7d77e2ca724cd3e2a447ba841801dba4f4f6ec3c63fb97bca197b3"
	},
	{
		"id": "72b7724db30e",
		"ts": "2026-07-29T18:04:06.751Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 928301.23,
		"hash": "72b7724db30e6c76984cc618641a64555377f3333a1b703d92c0282d629820e7"
	},
	{
		"id": "fc9b938dc4e5",
		"ts": "2026-07-29T18:04:07.014Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25697591.82,
		"hash": "fc9b938dc4e5632a9e17154c25ca837353ba3349af0f1716dbd8acc94d98b6c4"
	},
	{
		"id": "cfaf8b54432e",
		"ts": "2026-07-29T18:04:07.256Z",
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
		"liquidityUsd": 2460482.4,
		"hash": "cfaf8b54432e18add0c31c25353190fc339e7d6f9ed6a304617aa67a0ff30d43"
	},
	{
		"id": "c184bf7b9070",
		"ts": "2026-07-29T18:04:07.497Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1844112.63,
		"hash": "c184bf7b90705bb8fb5a04e034c2dd4ab0cef4963c3d31be65c0b36d117e00d5"
	},
	{
		"id": "5134124a11cf",
		"ts": "2026-07-29T18:04:07.728Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 523723.9,
		"hash": "5134124a11cfa6c8c26ee60cba950972786aabf39366cb129c922b4d64106175"
	},
	{
		"id": "b3e8ea63aacc",
		"ts": "2026-07-29T18:04:07.951Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 677931.54,
		"hash": "b3e8ea63aacc1df88d2eccc49a2151925f424140f62be80f860d16a24dc8d2b6"
	},
	{
		"id": "a9cf7193808d",
		"ts": "2026-07-29T18:04:08.220Z",
		"symbol": "MOLT",
		"token": "0xB695559b26BB2c9703ef1935c37AeaE9526bab07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1054589.93,
		"hash": "a9cf7193808d607e45a4fa234088afcb67779d5b830c7a417ea38cc1917e7f31"
	},
	{
		"id": "c206d8b3ab30",
		"ts": "2026-07-29T18:04:08.443Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 644477.37,
		"hash": "c206d8b3ab3040a028d8736b06a15346ece258036002d2873f3875b4aadf9185"
	},
	{
		"id": "faecb85968a9",
		"ts": "2026-07-29T18:04:08.666Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 439186.44,
		"hash": "faecb85968a90af007c78f1b333b0645dcf04337f8225b41c3882a24506455f3"
	},
	{
		"id": "2cc1077936f4",
		"ts": "2026-07-29T18:04:08.886Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9899549.17,
		"hash": "2cc1077936f41808c4e11bbd9b871b8b578b2e84752c34508c36ee6b503de1c4"
	},
	{
		"id": "9761a4eb78a2",
		"ts": "2026-07-29T16:18:28.695Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111212611.94,
		"hash": "9761a4eb78a22d375950f0756fdca0c22a08be59fd586cee895e93c8a2040dae"
	},
	{
		"id": "99b170ec479e",
		"ts": "2026-07-29T16:18:29.019Z",
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
		"liquidityUsd": 16841863,
		"hash": "99b170ec479e21a9d5f5266bf15998f1a7beb85220793c712ac3fbc170a937ab"
	},
	{
		"id": "90ee3b7e258e",
		"ts": "2026-07-29T16:18:29.258Z",
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
		"liquidityUsd": 1102290.05,
		"hash": "90ee3b7e258e43225d7ccc85a83c5d5331adf3844862206a483a40855a91aa47"
	},
	{
		"id": "fc934bff07f0",
		"ts": "2026-07-29T16:18:29.492Z",
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
		"liquidityUsd": 25428538.17,
		"hash": "fc934bff07f0a73ad5b504eeb475ef3f88f154f2c61fc111a3052d38dedfa234"
	},
	{
		"id": "5bdb52c26a78",
		"ts": "2026-07-29T16:18:29.728Z",
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
		"liquidityUsd": 4878022.61,
		"hash": "5bdb52c26a7862d762e66c1b8dc6b1b791fe2044b237968a6f5b20061fa11bb7"
	},
	{
		"id": "179261fa8e54",
		"ts": "2026-07-29T16:18:29.962Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 908904.94,
		"hash": "179261fa8e5472db897e97e1581c274c938c106cb5c3290d3234a63de5bacf1c"
	},
	{
		"id": "d6e2f439a07c",
		"ts": "2026-07-29T16:18:30.194Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25428538.17,
		"hash": "d6e2f439a07c25b345590ccfeaa34f14a3ebb19bc896c1379e714ff068d9e8c6"
	},
	{
		"id": "893cb613f9e6",
		"ts": "2026-07-29T16:18:30.432Z",
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
		"liquidityUsd": 2403085.49,
		"hash": "893cb613f9e63b7257409cc251ad18669e9092aad556a2cf45bda50c71936c0e"
	},
	{
		"id": "6ecceee763d9",
		"ts": "2026-07-29T16:18:30.675Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1825507.26,
		"hash": "6ecceee763d9178cf8a3640e3af95e684744c8d59b31819b78a1efba45a57719"
	},
	{
		"id": "450b04db80cb",
		"ts": "2026-07-29T16:18:30.912Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 518853.14,
		"hash": "450b04db80cb057f8bd4af26d1b8ab44f541474117878da64c8541b9975f8b68"
	},
	{
		"id": "f4e5e91e3039",
		"ts": "2026-07-29T16:18:31.133Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 643016.92,
		"hash": "f4e5e91e3039cc26446f85287a7227b0bb22a92202a051b83d408749fa507c10"
	},
	{
		"id": "bdae1b47b3cb",
		"ts": "2026-07-29T16:18:31.354Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 635765.2,
		"hash": "bdae1b47b3cb3eaa5aca8558a1ecc43ba959d7ac97d8b20f85cb06cd1f627877"
	},
	{
		"id": "cc2f9357ec42",
		"ts": "2026-07-29T16:18:31.577Z",
		"symbol": "MOLT",
		"token": "0xB695559b26BB2c9703ef1935c37AeaE9526bab07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1042820.24,
		"hash": "cc2f9357ec424425fdf6651a46939aedecfb3e73e3a7226f56b36198138f62c7"
	},
	{
		"id": "dbbf18be9f50",
		"ts": "2026-07-29T16:18:31.798Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9735311.35,
		"hash": "dbbf18be9f5000056e6ba0b3c6098907ea1afeb8299d92cfe4bda156c9427771"
	},
	{
		"id": "0d13c214ecd2",
		"ts": "2026-07-29T16:18:32.018Z",
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
		"liquidityUsd": 1373598.38,
		"hash": "0d13c214ecd2606fd3afaf06024b84423e30f7654b68a51af25efbd4f9ac2b6d"
	},
	{
		"id": "2153239c4c59",
		"ts": "2026-07-29T16:18:32.238Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4455653.71,
		"hash": "2153239c4c599fda2d9d6a11293a97348b9aca44ed60c1aaa1575b0da0c6e70b"
	},
	{
		"id": "7d11eac0286a",
		"ts": "2026-07-29T14:01:33.938Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111828503.97,
		"hash": "7d11eac0286ac097ca17426d066cdc0df67474ef90c75b6ce5147d92cf1a776d"
	},
	{
		"id": "d4cbf6a9fea5",
		"ts": "2026-07-29T14:01:34.398Z",
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
		"liquidityUsd": 15995417.01,
		"hash": "d4cbf6a9fea55594b974ead1ef5453d2e716d5b9058795857b37cee299515171"
	},
	{
		"id": "0d6344306bb8",
		"ts": "2026-07-29T14:01:34.728Z",
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
		"liquidityUsd": 1107398.82,
		"hash": "0d6344306bb8396abff6c572bd962ccda22a1a066cb26909cdba60844f775150"
	},
	{
		"id": "b06d1354fc7a",
		"ts": "2026-07-29T14:01:34.970Z",
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
		"liquidityUsd": 25473877.73,
		"hash": "b06d1354fc7a7d18e912f6fce8ffd6ff042d7c33d128524a0d9d86dc62e8ad3b"
	},
	{
		"id": "ed287076d2cd",
		"ts": "2026-07-29T14:01:35.212Z",
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
		"liquidityUsd": 4904904.53,
		"hash": "ed287076d2cd0ec9042e3ceae5ff3f62954e8f49d9ca4bc93ed1e4a51785d33d"
	},
	{
		"id": "015ef333142d",
		"ts": "2026-07-29T14:01:35.453Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 913851.87,
		"hash": "015ef333142ddc11a47f0d5069f30f0245eb2691598ba7383271e02e380031d2"
	},
	{
		"id": "2c09e2fa9a48",
		"ts": "2026-07-29T14:01:35.694Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25473877.73,
		"hash": "2c09e2fa9a482cd5fd7c90e70334dc525c2789d50a74489fa85de9a00e804ae8"
	},
	{
		"id": "1824e965fc1c",
		"ts": "2026-07-29T14:01:35.963Z",
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
		"liquidityUsd": 2363472.46,
		"hash": "1824e965fc1c178bf7d10a957d3930cef596d13d86d9b920f40133a615109fe1"
	},
	{
		"id": "3442cf6f1e16",
		"ts": "2026-07-29T14:01:36.203Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 516269.98,
		"hash": "3442cf6f1e16f40b48766ef91b84c368d3577d13e7350d3497b9f93970648a5a"
	},
	{
		"id": "a92dd15da117",
		"ts": "2026-07-29T14:01:36.446Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1797582.55,
		"hash": "a92dd15da1176a0ecc2d2a0939993f0f35b1b8dbb4867d5a72a18fae3c7cabdc"
	},
	{
		"id": "98197d3de7fd",
		"ts": "2026-07-29T14:01:36.669Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 642004.54,
		"hash": "98197d3de7fdfa0594edbad9052626d7f258705ee7ae92ce0b9a2167a8df76d9"
	},
	{
		"id": "c1ed0a776a78",
		"ts": "2026-07-29T14:01:36.894Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 671451.4,
		"hash": "c1ed0a776a78d6e0693c9fb03fa0dbab59c64969ea86d4307ea34d4d77f43c54"
	},
	{
		"id": "06a3903e376d",
		"ts": "2026-07-29T14:01:37.117Z",
		"symbol": "MOLT",
		"token": "0xB695559b26BB2c9703ef1935c37AeaE9526bab07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1059490.93,
		"hash": "06a3903e376d8570afef374409b2b9b80f87d5efafa162bbddfb7e50c0521cee"
	},
	{
		"id": "651f3d2117fd",
		"ts": "2026-07-29T14:01:37.340Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9864081.96,
		"hash": "651f3d2117fd69c5631e9f81f86189bb898f5fcf25b2c07255a66c4002877d42"
	},
	{
		"id": "e80a1c5184c4",
		"ts": "2026-07-29T14:01:37.563Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4467138.94,
		"hash": "e80a1c5184c43414dbb56e44aa395b950fa4bab6f00fbfc0545c401c40835ff0"
	},
	{
		"id": "947a005b580b",
		"ts": "2026-07-29T14:01:37.785Z",
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
		"liquidityUsd": 1359525.36,
		"hash": "947a005b580b98011a1b145791cc98f77361f7e2100661080be47b0b562081ce"
	},
	{
		"id": "a89669a2bb42",
		"ts": "2026-07-29T11:22:26.618Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112352030.39,
		"hash": "a89669a2bb4254125dd432b54989365d38518ce471cff88c651cf70d7696efeb"
	},
	{
		"id": "bdd211d177d8",
		"ts": "2026-07-29T11:22:27.057Z",
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
		"liquidityUsd": 14001831.19,
		"hash": "bdd211d177d82a1da659a5147f0ba6b76dc7db6e929a0bb244cad2223a79d085"
	},
	{
		"id": "a9a30a932ba3",
		"ts": "2026-07-29T11:22:27.292Z",
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
		"liquidityUsd": 1111759.51,
		"hash": "a9a30a932ba36fdbe85faaea94e4d62056d3adac2a8c861b6f2d5b8f91c951f4"
	},
	{
		"id": "d731c851ec76",
		"ts": "2026-07-29T11:22:27.522Z",
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
		"liquidityUsd": 25724119.83,
		"hash": "d731c851ec76290942a75492eade66407da69c2f78925212f049dd8db8ed12b3"
	},
	{
		"id": "ad0077c8927c",
		"ts": "2026-07-29T11:22:27.756Z",
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
		"liquidityUsd": 4933043.93,
		"hash": "ad0077c8927c5bf8fe3c643d0464a36c2213140f2eb003e4edf89d7a2769e57a"
	},
	{
		"id": "a21c2585f6b8",
		"ts": "2026-07-29T11:22:27.986Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 932885.64,
		"hash": "a21c2585f6b873545ff1d6d3f1b6fbf6642dca5f36ead0796f4716bc903bb3c2"
	},
	{
		"id": "84485a889bac",
		"ts": "2026-07-29T11:22:28.224Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25724119.83,
		"hash": "84485a889bac72f0b6ccf93109c9574f908a12c10778f354ed01101d0e7ce0ad"
	},
	{
		"id": "408200ce2b09",
		"ts": "2026-07-29T11:22:28.458Z",
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
		"liquidityUsd": 2384753.93,
		"hash": "408200ce2b0997a543e22eeac120c823a4b53eb49be6c0e3e075cf69d99e1f9c"
	},
	{
		"id": "d3d352671cbf",
		"ts": "2026-07-29T11:22:28.691Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 526753.87,
		"hash": "d3d352671cbf0f3b6924e9d3c3e50c4c3f57e91a5aef0af2160b90b22b47c8da"
	},
	{
		"id": "d42920955b05",
		"ts": "2026-07-29T11:22:28.923Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1807611.71,
		"hash": "d42920955b05afaa1ea90763b536d3f436881f7ed41b3d2d4c7c1f19ac2095d4"
	},
	{
		"id": "e4bbfc329266",
		"ts": "2026-07-29T11:22:29.142Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 667365.46,
		"hash": "e4bbfc329266681fa5653d8cd593df712d4520688c1366d59eec349e0316a0e8"
	},
	{
		"id": "32cc236b3333",
		"ts": "2026-07-29T11:22:29.357Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9978727.27,
		"hash": "32cc236b333372a136634f478a899c2baf7dd71f808a7267cbf2821973781c8b"
	},
	{
		"id": "49d3d809a253",
		"ts": "2026-07-29T11:22:29.576Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 644053.2,
		"hash": "49d3d809a2537965da9f94f446747f1044f09c1ee88f87f5af7840659e9a1210"
	},
	{
		"id": "d8b80b0d106d",
		"ts": "2026-07-29T11:22:29.791Z",
		"symbol": "MOLT",
		"token": "0xB695559b26BB2c9703ef1935c37AeaE9526bab07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1059892.01,
		"hash": "d8b80b0d106db611e2c26e7020f44211b2353ad2e1d51d9562ac305a6e38074f"
	},
	{
		"id": "d51841035706",
		"ts": "2026-07-29T11:22:30.008Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4487965.82,
		"hash": "d518410357069aeb6ffbb5618884ba330d510753c3903c926287518486aa0ba0"
	},
	{
		"id": "b01e6123a3b6",
		"ts": "2026-07-29T11:22:30.222Z",
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
		"liquidityUsd": 1966167.14,
		"hash": "b01e6123a3b6ea8fbcdfe2c6aaf6c1da74ee0ed604124c611663bb15823ad84e"
	},
	{
		"id": "1f9b666dee96",
		"ts": "2026-07-29T08:33:55.874Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112285610.83,
		"hash": "1f9b666dee9614f75c980c018ae1e2d2cd9f441f29755626bd2ece91791873d8"
	},
	{
		"id": "2658123219e6",
		"ts": "2026-07-29T08:33:56.225Z",
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
		"liquidityUsd": 16234167.73,
		"hash": "2658123219e6e3684895b6a5bc179ac866bdbfbd8339d06f3a51443603874103"
	},
	{
		"id": "feed9abc6d12",
		"ts": "2026-07-29T08:33:56.438Z",
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
		"liquidityUsd": 1080543.85,
		"hash": "feed9abc6d126b7dcbca8b3a03aa56e3181b1dbdafee542c630392086c322532"
	},
	{
		"id": "6727bf13cf2c",
		"ts": "2026-07-29T08:33:56.638Z",
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
		"liquidityUsd": 25727983.25,
		"hash": "6727bf13cf2ca4b321ecb5e9d3706f2160b11763e9cc66c9dd48955bd70a2b9c"
	},
	{
		"id": "2b8440830e9d",
		"ts": "2026-07-29T08:33:56.836Z",
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
		"liquidityUsd": 4937832.23,
		"hash": "2b8440830e9d6a0d72f9079e295af83c9bf5ad964319e2405028b352bab9c057"
	},
	{
		"id": "b966743e8685",
		"ts": "2026-07-29T08:33:57.035Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 930533.06,
		"hash": "b966743e868523209664e97d58614e7c74e898f199e6495e6ff2335a16258a9b"
	},
	{
		"id": "53020e4f0ddf",
		"ts": "2026-07-29T08:33:57.233Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25727983.25,
		"hash": "53020e4f0ddf553343abd800e2826faf7db4c09ef43f4d2f16e0723c40f863ef"
	},
	{
		"id": "3226d05f444a",
		"ts": "2026-07-29T08:33:57.442Z",
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
		"liquidityUsd": 2434037.52,
		"hash": "3226d05f444a4339a897c7114b63c46873509839866414997c12ee9b2716ad9e"
	},
	{
		"id": "ac4e92d6714d",
		"ts": "2026-07-29T08:33:57.649Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 528053.48,
		"hash": "ac4e92d6714df4e5996a0423946ecbe04162800abf093a11073ccb9559461317"
	},
	{
		"id": "cf3f7c18a858",
		"ts": "2026-07-29T08:33:57.846Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1851911.7,
		"hash": "cf3f7c18a8589c88f2585469caf21087a6ba0fced71fbe77a0e65af2343c1da9"
	},
	{
		"id": "4f6db6004716",
		"ts": "2026-07-29T08:33:58.032Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 274524.06,
		"hash": "4f6db600471671c985577d953875559c625253fab47da76eca1999d82ef406bb"
	},
	{
		"id": "83b7a590cfff",
		"ts": "2026-07-29T08:33:58.229Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9864164.99,
		"hash": "83b7a590cffff1fa06de856930d1163d9a5979ea4e5e766a1f1ddb5999c3f499"
	},
	{
		"id": "b8055301ddd9",
		"ts": "2026-07-29T08:33:58.419Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4476141.53,
		"hash": "b8055301ddd9317295047bcc372deeadc8e103b8b665d0fe938afe84a94e3a28"
	},
	{
		"id": "1222fae5c32b",
		"ts": "2026-07-29T08:33:58.618Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 743461.26,
		"hash": "1222fae5c32b49a88420093bfb1290d703c4850d38724de34819fda82cad6871"
	},
	{
		"id": "894c48a7e735",
		"ts": "2026-07-29T08:33:58.809Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1968368.5,
		"hash": "894c48a7e735fa77e28ea2e4c0d5217cd1e745ae1b16a44501bb791be08da105"
	},
	{
		"id": "48afc9ad0734",
		"ts": "2026-07-29T08:33:59.007Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 670179.61,
		"hash": "48afc9ad073472c0e085723bd4e2fd86c482ab869a481aa6de137c7dda189399"
	},
	{
		"id": "73ef477141bd",
		"ts": "2026-07-29T05:48:03.619Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111729267.89,
		"hash": "73ef477141bd6885f46c4af5d6ea40d2f276f984f826ead74bc1eec8f627ab26"
	},
	{
		"id": "015c5ac97a1b",
		"ts": "2026-07-29T05:48:04.060Z",
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
		"liquidityUsd": 16135806.09,
		"hash": "015c5ac97a1b7ffd04dba7c8b4d64ae65d5d3af485b7d1c9a9ed4be005c7bb4c"
	},
	{
		"id": "59bb3d0b9838",
		"ts": "2026-07-29T05:48:04.300Z",
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
		"liquidityUsd": 1079586.98,
		"hash": "59bb3d0b98385db1685d797c17ee6ffd203628822f3daeb96448f361baa4aa52"
	},
	{
		"id": "44d6986ab3f2",
		"ts": "2026-07-29T05:48:04.536Z",
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
		"liquidityUsd": 25772973.33,
		"hash": "44d6986ab3f2a9112c8dabb03bd5ced86420e5da56de585d15ac3441c5732a5e"
	},
	{
		"id": "9bb787d07243",
		"ts": "2026-07-29T05:48:04.773Z",
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
		"liquidityUsd": 4945760.69,
		"hash": "9bb787d0724360d181a29823d27b2eb2fe5b8d7bc6f15dc007cde3955b4a23ab"
	},
	{
		"id": "801d9456ad1d",
		"ts": "2026-07-29T05:48:05.042Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 929827.57,
		"hash": "801d9456ad1da4ce978fde99531b146258bbf7738efbdeda21c530306ab6074a"
	},
	{
		"id": "d061eaec13d5",
		"ts": "2026-07-29T05:48:05.398Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25772969,
		"hash": "d061eaec13d5c366c46931e57cd6331a15033ba7f30a09610bd6e887007aa382"
	},
	{
		"id": "efeba483c812",
		"ts": "2026-07-29T05:48:05.638Z",
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
		"liquidityUsd": 2434052.61,
		"hash": "efeba483c8125af8498f3349d3a7236178b7ab5f9bf9be810e30750618b6ff99"
	},
	{
		"id": "12f1f3743f8f",
		"ts": "2026-07-29T05:48:05.905Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 525089.68,
		"hash": "12f1f3743f8f2bd7e79142919e19bb48df53b00a58c47ded3023ff32b73787f9"
	},
	{
		"id": "1b923d145922",
		"ts": "2026-07-29T05:48:06.158Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 283767.27,
		"hash": "1b923d1459223d59e676c79133c54bc1b7fe63ebb45dedf29dc770b81c3654ad"
	},
	{
		"id": "54f925f1a379",
		"ts": "2026-07-29T05:48:06.380Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1832226.94,
		"hash": "54f925f1a37990c5adc62a3263db2b76302cc663e6c5a8cd1fd7f826099f5db8"
	},
	{
		"id": "60c1a25bcfc0",
		"ts": "2026-07-29T05:48:06.599Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 743902.54,
		"hash": "60c1a25bcfc07a87dcc499296738aa7b014d8cd6e918b21fd6799d23f429c095"
	},
	{
		"id": "4935eca0b530",
		"ts": "2026-07-29T05:48:06.818Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9874146.14,
		"hash": "4935eca0b53005eb3b4cefe553322328f39ac7c51fbec252a814dfbe2fcd2c9f"
	},
	{
		"id": "eb093241a4d1",
		"ts": "2026-07-29T05:48:07.039Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2953532.42,
		"hash": "eb093241a4d17cf9d3947a1ba368ae4474260b34f4ade2cc4184c2a9156c1f5c"
	},
	{
		"id": "7f53f610cb28",
		"ts": "2026-07-29T05:48:07.260Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1907911.26,
		"hash": "7f53f610cb2805295e764d553c61f880232bd7571ea3fcd0ff726c11c6c99991"
	},
	{
		"id": "0f6b93a7f033",
		"ts": "2026-07-29T05:48:07.480Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 473036.51,
		"hash": "0f6b93a7f0332b222dbfea11f9b5cbdf9f314bd4f58ef9a7bad8b395f9b027f3"
	},
	{
		"id": "63418fdd6788",
		"ts": "2026-07-29T05:48:07.703Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1968900.38,
		"hash": "63418fdd6788556e19352ed211ec8658b0a9cbed5ce455d188911a94d6fc7a49"
	},
	{
		"id": "e41ffb52e9b0",
		"ts": "2026-07-29T02:13:20.233Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111605455.96,
		"hash": "e41ffb52e9b0de181395124adf32dd5a6f813b345953f7d17520f828bfc6c01a"
	},
	{
		"id": "8d90464f62c6",
		"ts": "2026-07-29T02:13:20.432Z",
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
		"liquidityUsd": 16506443.39,
		"hash": "8d90464f62c6f85a9b1794c87ec007cc7896bdc196a7b3fbd1e5d6b651511499"
	},
	{
		"id": "c9492fc380ec",
		"ts": "2026-07-29T02:13:20.624Z",
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
		"liquidityUsd": 1083151.65,
		"hash": "c9492fc380ece0cd2d260cef8f5fcb2fba71dd07b24f3c634d67892ab276fdbc"
	},
	{
		"id": "83efc96c68d2",
		"ts": "2026-07-29T02:13:20.847Z",
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
		"liquidityUsd": 25744036.13,
		"hash": "83efc96c68d213630eb9460252a7e06108265e5853e4735e418559a0504f513c"
	},
	{
		"id": "1722c6093159",
		"ts": "2026-07-29T02:13:21.038Z",
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
		"liquidityUsd": 4936880.61,
		"hash": "1722c6093159b2bcc328ce32a68e638591a29a826a5ee129218f5decfe648a5e"
	},
	{
		"id": "d073e6c01358",
		"ts": "2026-07-29T02:13:21.227Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 948710.39,
		"hash": "d073e6c0135811643bc6f35a4fb34b42991b470e602a55b1858d7cf4f9f77484"
	},
	{
		"id": "55f1b6f473e1",
		"ts": "2026-07-29T02:13:21.417Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25744036.13,
		"hash": "55f1b6f473e1247145255086b15c4e8dd866ea60cc22b1d5b6360b9d5b46f997"
	},
	{
		"id": "46ed7bbab2fd",
		"ts": "2026-07-29T02:13:21.632Z",
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
		"liquidityUsd": 2284711.84,
		"hash": "46ed7bbab2fdea136d660938a0c8a80ddf8455f1f517ea0614a80d04bd3e14e7"
	},
	{
		"id": "500c7b471bd1",
		"ts": "2026-07-29T02:13:21.827Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 526964.8,
		"hash": "500c7b471bd1190cf8cb1be265a95fda39e5b858df3e3af6bb0ac0cc896b1f01"
	},
	{
		"id": "73317fde1827",
		"ts": "2026-07-29T02:13:22.018Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 293932.79,
		"hash": "73317fde1827ae6512145126c32778bc3209a787bcb52be05543de7869505994"
	},
	{
		"id": "d4596745953d",
		"ts": "2026-07-29T02:13:22.201Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1825833.05,
		"hash": "d4596745953d85e6074922f0c30b472158d732ca1248576366b091e30d80ce5b"
	},
	{
		"id": "1a9a63cfcd8f",
		"ts": "2026-07-29T02:13:22.393Z",
		"symbol": "evo",
		"token": "0x721B072dbb616F29eEA73ac004e03Fd4E884bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 167012.48,
		"hash": "1a9a63cfcd8fc9f1f2fb7429297c89b004740548438356c43c1fba06f2a544ef"
	},
	{
		"id": "65fdfbf88a38",
		"ts": "2026-07-29T02:13:22.588Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1884627.36,
		"hash": "65fdfbf88a380262991eb2e114ad0cf7b0e7916fd60785e3d4a0baac4cd17db1"
	},
	{
		"id": "0dd2630302cd",
		"ts": "2026-07-29T02:13:22.788Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 707014.87,
		"hash": "0dd2630302cd9f08f6f36f7459925a1a933c495a08b33d1aad8a1af5c5532c38"
	},
	{
		"id": "10dd862e3e7c",
		"ts": "2026-07-29T02:13:22.967Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9835057.49,
		"hash": "10dd862e3e7c8374e4be05599406107380b8547731016bc8340d544a7f66ed23"
	},
	{
		"id": "f01d949f7922",
		"ts": "2026-07-29T02:13:23.253Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2924451.73,
		"hash": "f01d949f7922ae429a4c94b7054ebac2235c337b61aa693194cd00f49fb346b1"
	},
	{
		"id": "272a44bea62c",
		"ts": "2026-07-29T02:13:23.454Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 474400.71,
		"hash": "272a44bea62ccf887acab66557f0e95cc5f1d82c8e0b3622a703fe501a2af65f"
	},
	{
		"id": "6b0d1b965476",
		"ts": "2026-07-28T23:55:24.524Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111851168.85,
		"hash": "6b0d1b965476396a7553bff2e852657a6f24c7b547267845b2a98fe3b83c52eb"
	},
	{
		"id": "cb2be85de563",
		"ts": "2026-07-28T23:55:25.029Z",
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
		"liquidityUsd": 16884427.08,
		"hash": "cb2be85de563fa55e90e3683e0540b9bb368663063c2436a3a0e00e098b36285"
	},
	{
		"id": "e0405c90cd75",
		"ts": "2026-07-28T23:55:25.218Z",
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
		"liquidityUsd": 1082829.08,
		"hash": "e0405c90cd757607295dad408031ec5ebd17a6f52b07fc4f4a16ced3e19b8049"
	},
	{
		"id": "882949287ddb",
		"ts": "2026-07-28T23:55:25.609Z",
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
		"liquidityUsd": 26068349.39,
		"hash": "882949287ddbee962ef0e6b17424716dc3ac175a2c32ff258078ccff74c087c9"
	},
	{
		"id": "00c712f735e3",
		"ts": "2026-07-28T23:55:25.797Z",
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
		"liquidityUsd": 4953671.42,
		"hash": "00c712f735e343a430681744a7509811c73ab72d9167eb6c9b29b324bad1afef"
	},
	{
		"id": "521d969b1b8c",
		"ts": "2026-07-28T23:55:25.984Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 946579.74,
		"hash": "521d969b1b8ca6a629d01724149ee2540e519e083e16d56f98b871c8bb6bc934"
	},
	{
		"id": "eb47e26564a4",
		"ts": "2026-07-28T23:55:26.178Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26068349.39,
		"hash": "eb47e26564a4308540b937a29c29867d97400b1cf5ddade004619992ad8e7888"
	},
	{
		"id": "ad69170f37ab",
		"ts": "2026-07-28T23:55:26.522Z",
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
		"liquidityUsd": 2451936.64,
		"hash": "ad69170f37ab9761cf00e0481de1bb5838430b176b1631e11b53a86058365c50"
	},
	{
		"id": "dc69e3d27ed7",
		"ts": "2026-07-28T23:55:26.716Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 529159.62,
		"hash": "dc69e3d27ed748509ce100c5470744f723e83efef8ac1cdd4f3698d6571a9529"
	},
	{
		"id": "e813247c0ea7",
		"ts": "2026-07-28T23:55:26.902Z",
		"symbol": "evo",
		"token": "0x721B072dbb616F29eEA73ac004e03Fd4E884bba3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 164247.49,
		"hash": "e813247c0ea725c2e9dec93d6ecdef0dc6882e53f578c1420b177d8036bbe6fa"
	},
	{
		"id": "da528eebcb02",
		"ts": "2026-07-28T23:55:27.090Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1830199.51,
		"hash": "da528eebcb0235e5a9ed587e25205ffece80ff3906a18faabbc3b5c573f4016b"
	},
	{
		"id": "6bb33d098c22",
		"ts": "2026-07-28T23:55:27.274Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1964354.64,
		"hash": "6bb33d098c226acfdd8f69cd33be66ae6291d2e38f9e551e3c12242a65e6c818"
	},
	{
		"id": "4abcd0b7bb67",
		"ts": "2026-07-28T23:55:27.452Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 291681.58,
		"hash": "4abcd0b7bb67e6337a6544ab63cb4f185417c6049efa0668b749ec6e6de024e5"
	},
	{
		"id": "ad82108517c2",
		"ts": "2026-07-28T23:55:27.637Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 720556.43,
		"hash": "ad82108517c2a20ad0e21bec810944a363284151ec39a23c114947a834116dd6"
	},
	{
		"id": "8e6ec6252a52",
		"ts": "2026-07-28T23:55:27.835Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9971979.8,
		"hash": "8e6ec6252a52b0cbe42f6c9dcfab303534e2ca1c644f89b4d54897be94036942"
	},
	{
		"id": "4d496b200735",
		"ts": "2026-07-28T23:55:28.055Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 641712.19,
		"hash": "4d496b20073599f3bc6fb30569f2a159e02f5a3e54a2538510d37d4f2f55d69b"
	},
	{
		"id": "fc1c4fd334b6",
		"ts": "2026-07-28T23:55:28.245Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2913164.7,
		"hash": "fc1c4fd334b6fa64b8ef2a67e5f466acfc137c9527e8779c6b7369a157040400"
	},
	{
		"id": "62244dd0c5f6",
		"ts": "2026-07-28T22:01:05.184Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111988337.94,
		"hash": "62244dd0c5f687fa150c5f85dc7b65bd86b103b061433323c8896e260bdea518"
	},
	{
		"id": "21f9a82db2dc",
		"ts": "2026-07-28T22:01:05.849Z",
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
		"liquidityUsd": 16411093.49,
		"hash": "21f9a82db2dc01263c10fdc74eee213239e451c7900decad7dde2a97b8375ca4"
	},
	{
		"id": "bfeb468b340b",
		"ts": "2026-07-28T22:01:06.334Z",
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
		"liquidityUsd": 1092522.46,
		"hash": "bfeb468b340b252f6424fb5f3b0234fab752116d7eb7be588555d0ad35a85266"
	},
	{
		"id": "973d33c3de58",
		"ts": "2026-07-28T22:01:06.757Z",
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
		"liquidityUsd": 26216646.99,
		"hash": "973d33c3de589f32cc2eadae22ab8d4792ce1dd2746972167a36c2d0d60a0063"
	},
	{
		"id": "563106feaeac",
		"ts": "2026-07-28T22:01:07.502Z",
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
		"liquidityUsd": 4996608.39,
		"hash": "563106feaeac75b0a29d3cbddcf631db02f4f7c1895d9f23a1d8f218410ba8f3"
	},
	{
		"id": "dde2aaef9cf6",
		"ts": "2026-07-28T22:01:07.896Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 955498.14,
		"hash": "dde2aaef9cf6ee4e9d7272b565a7d05c32adb5f35d1244285886eb6935bedb5a"
	},
	{
		"id": "ab5b478c5c59",
		"ts": "2026-07-28T22:01:08.558Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26216646.99,
		"hash": "ab5b478c5c59135bc8e29364fc74cfb026c761a07070b731fb0002a3f1f1c446"
	},
	{
		"id": "1260852249e5",
		"ts": "2026-07-28T22:01:08.991Z",
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
		"liquidityUsd": 2452043.78,
		"hash": "1260852249e50dd1d18d8bf7a0007d3818427ba09a3e0632244f14ed05533694"
	},
	{
		"id": "928989d97d3d",
		"ts": "2026-07-28T22:01:09.276Z",
		"symbol": "evo",
		"token": "0x721B072dbb616F29eEA73ac004e03Fd4E884bba3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 170331.37,
		"hash": "928989d97d3daa0bd632d71b2f3850f4c56f3fa10c438efa27b1f085ba5cf17f"
	},
	{
		"id": "c34eb4c4eb33",
		"ts": "2026-07-28T22:01:09.743Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 534841.09,
		"hash": "c34eb4c4eb33332867e0db2422a147a1a11fa476dc3bdec9f02b5523689c638a"
	},
	{
		"id": "92a284e5a8a5",
		"ts": "2026-07-28T22:01:10.403Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 296529.42,
		"hash": "92a284e5a8a55a0fc96c4eb4fdbe4e480d67ca6b4ad28780fa50001fef0e4758"
	},
	{
		"id": "bd379fcafcf3",
		"ts": "2026-07-28T22:01:10.661Z",
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
		"liquidityUsd": 10067333.91,
		"hash": "bd379fcafcf3485b4e1ae2a271ed0b8c008faf1b4196f6540d595760a56e2584"
	},
	{
		"id": "ef853e1430a1",
		"ts": "2026-07-28T22:01:11.111Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1874524.96,
		"hash": "ef853e1430a1ada7b5dd54502c9b7cf03f858172379fbf8b34cba759036609e4"
	},
	{
		"id": "b38e830ee787",
		"ts": "2026-07-28T22:01:11.430Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1916309.86,
		"hash": "b38e830ee787c72c2758c88b59bb4d98d0fc0f83df380060837ed5b4d64bfb27"
	},
	{
		"id": "2f2eb6a30a47",
		"ts": "2026-07-28T22:01:11.674Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 645495.46,
		"hash": "2f2eb6a30a4781c5739a53f87c357baa30bc91fd41e68a22279cc80f84e91aae"
	},
	{
		"id": "c2ce7b7625f7",
		"ts": "2026-07-28T22:01:11.938Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 736125.86,
		"hash": "c2ce7b7625f758d20237d7acb006fccd97e97599d3505d6e5d9b74aa7840713c"
	},
	{
		"id": "b6f78fe0b841",
		"ts": "2026-07-28T22:01:12.184Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 478285.23,
		"hash": "b6f78fe0b841aa99d3c7f4d1b8b4a2667db055a89bd3c80f0a5c63eed57f51ae"
	},
	{
		"id": "8119416eedad",
		"ts": "2026-07-28T20:14:00.292Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111835395.3,
		"hash": "8119416eedadd2f8af4f1669ff114b54efdbbb6c5051572113b0b89eedf5f61e"
	},
	{
		"id": "14589138311a",
		"ts": "2026-07-28T20:14:00.513Z",
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
		"liquidityUsd": 16477913.24,
		"hash": "14589138311a11903a1dfea32696182ac034841064dbd4505956af7f9e28ff3d"
	},
	{
		"id": "c8643c1e0f42",
		"ts": "2026-07-28T20:14:00.725Z",
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
		"liquidityUsd": 1089809.19,
		"hash": "c8643c1e0f423397151deea490abcb0798b93f86e81cd949e22493c11ee7b033"
	},
	{
		"id": "e525bd7e307b",
		"ts": "2026-07-28T20:14:01.071Z",
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
		"liquidityUsd": 26115839.64,
		"hash": "e525bd7e307b80fc5a5f5c44bfa6a6c2d93826fd0ac2f22e537f28a58b1de15a"
	},
	{
		"id": "d4bc165df941",
		"ts": "2026-07-28T20:14:01.342Z",
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
		"liquidityUsd": 5000617.57,
		"hash": "d4bc165df941c9bd81e7c7281bb8ed125bb82c1504870ae4c62f7ad6adf5e04d"
	},
	{
		"id": "a6d4877e95e1",
		"ts": "2026-07-28T20:14:01.541Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 955420.7,
		"hash": "a6d4877e95e1607cd447236646db9055fa8edf45b8787de0e3d21bde70fd6899"
	},
	{
		"id": "7fa4e173dcb9",
		"ts": "2026-07-28T20:14:01.744Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26115839.64,
		"hash": "7fa4e173dcb9f0a9d483a3619b4f925e8a90da4b374d74f7bbdb37675045aad9"
	},
	{
		"id": "e6dd6e20ee4a",
		"ts": "2026-07-28T20:14:01.941Z",
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
		"liquidityUsd": 2445515.46,
		"hash": "e6dd6e20ee4a5b4e1ee49b308ec66721c651d20e52b7c56aaef93985f48ba796"
	},
	{
		"id": "0455d66a7a92",
		"ts": "2026-07-28T20:14:02.142Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 534044.72,
		"hash": "0455d66a7a920ae4d34d78c39a218f525df9d912e5c8cbb1db6b6fc62ac03f18"
	},
	{
		"id": "702145e7a61c",
		"ts": "2026-07-28T20:14:02.335Z",
		"symbol": "evo",
		"token": "0x721B072dbb616F29eEA73ac004e03Fd4E884bba3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 180740.37,
		"hash": "702145e7a61cee6807ece404a5badaf7bb54fe11680f50e10c1c08c14893f6e6"
	},
	{
		"id": "fa35a90d38ef",
		"ts": "2026-07-28T20:14:02.537Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 760028.23,
		"hash": "fa35a90d38ef2c24b85e112b0f4ebace166c9faec6a80ec34c4ec835622e927f"
	},
	{
		"id": "16c170b1b2a8",
		"ts": "2026-07-28T20:14:02.732Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1879886.2,
		"hash": "16c170b1b2a82a2971ee40333f61c2815427b27da61d2cbae894f71449da9c68"
	},
	{
		"id": "69532541d12d",
		"ts": "2026-07-28T20:14:02.926Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 284715.96,
		"hash": "69532541d12dea128c7f183b8976aa9d7da050da38d345592faaac449595d862"
	},
	{
		"id": "38e856227f44",
		"ts": "2026-07-28T20:14:03.123Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1917420.69,
		"hash": "38e856227f445985f0cd2bbf5b0a66237e09358ab2ec913fbbee2fca702968fa"
	},
	{
		"id": "4578f337d39a",
		"ts": "2026-07-28T20:14:03.326Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 484494.46,
		"hash": "4578f337d39a45740460c21515ace9a27efbcb545a17431767927aa580060570"
	},
	{
		"id": "f506ce82bc99",
		"ts": "2026-07-28T20:14:03.528Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10046494.26,
		"hash": "f506ce82bc99493e8c54e9906f257439758b9c999655d0430869b49dfaac7431"
	},
	{
		"id": "37796d705d29",
		"ts": "2026-07-28T20:14:03.728Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 645490.57,
		"hash": "37796d705d291be2cf7f3db09fe41f2769fee307c39a2cab209252ced93f89c2"
	},
	{
		"id": "4076178a32b9",
		"ts": "2026-07-28T18:11:15.604Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111477946.13,
		"hash": "4076178a32b9d32859ce64aa005b96c3ad2ad07b4b7fd1305af7e83969c38d5a"
	},
	{
		"id": "bde0e6a3d433",
		"ts": "2026-07-28T18:11:16.261Z",
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
		"liquidityUsd": 15044800.5,
		"hash": "bde0e6a3d433509fe3265e8ab78186451b2a50d260000496f1c20b817890431c"
	},
	{
		"id": "cd6cc77fdaad",
		"ts": "2026-07-28T18:11:16.720Z",
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
		"liquidityUsd": 1084656.27,
		"hash": "cd6cc77fdaad5724ae98930312e3fe2e903f96a034104125a59da21743c90ef3"
	},
	{
		"id": "3eeba93ffe67",
		"ts": "2026-07-28T18:11:17.189Z",
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
		"liquidityUsd": 26082356.54,
		"hash": "3eeba93ffe67850dead44cda25f8d4562187512f5080dabc077584f279007608"
	},
	{
		"id": "0a9e616e99d5",
		"ts": "2026-07-28T18:11:17.649Z",
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
		"liquidityUsd": 4941395.37,
		"hash": "0a9e616e99d5f8ced95cea93dcb9221a5d1eb9b745df9d0f8c92ee3d4c145689"
	},
	{
		"id": "98cc7fafde59",
		"ts": "2026-07-28T18:11:17.912Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 949356.13,
		"hash": "98cc7fafde59790a3b24a7ca52eb18275e7676d1280c72b9eb24a8d95413a338"
	},
	{
		"id": "639db27227d2",
		"ts": "2026-07-28T18:11:18.172Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26082356.54,
		"hash": "639db27227d200cf7aa08f6683eb0d595a636ca7ab420e9f4f82c5a9a55fb874"
	},
	{
		"id": "89a58a8c1b00",
		"ts": "2026-07-28T18:11:18.447Z",
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
		"liquidityUsd": 2441215.77,
		"hash": "89a58a8c1b00c1e6049b58fbb6cc852f416443c51bd6353d54bbe8eee9e9d2cc"
	},
	{
		"id": "ba9962941951",
		"ts": "2026-07-28T18:11:18.715Z",
		"symbol": "evo",
		"token": "0x721B072dbb616F29eEA73ac004e03Fd4E884bba3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 200176.69,
		"hash": "ba99629419519c2a7dcd585aa70e933bed606ca805647ea6b26fd0266c378395"
	},
	{
		"id": "8d9a50000d88",
		"ts": "2026-07-28T18:11:19.008Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 531665.82,
		"hash": "8d9a50000d88b6e2e6fadee56bbc6b0c5c1e1e0ce0b304b92d23d219a3800c2d"
	},
	{
		"id": "098242cf901d",
		"ts": "2026-07-28T18:11:19.266Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 295314.58,
		"hash": "098242cf901d09fdbdd30345ad33464fcec96d49e1fc9a76b95afdc3902dab9f"
	},
	{
		"id": "62f57baa7014",
		"ts": "2026-07-28T18:11:19.511Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 483534.88,
		"hash": "62f57baa70143ba1cad317160cb12b1e6994ceb71e75b3eb1bf0be6ff0a8a7be"
	},
	{
		"id": "9bdba5badb21",
		"ts": "2026-07-28T18:11:19.760Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1859919.03,
		"hash": "9bdba5badb216d6670aa244a9ad2b2b76773bb610830924679d20956c104f212"
	},
	{
		"id": "0beea9cd69f6",
		"ts": "2026-07-28T18:11:20.009Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 777935.68,
		"hash": "0beea9cd69f6d883386650ad9b0e1fa664813c67bce04cc3afbfb28d7b0ec860"
	},
	{
		"id": "553d507ea519",
		"ts": "2026-07-28T18:11:20.261Z",
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
		"liquidityUsd": 9999306.33,
		"hash": "553d507ea5199c8e5bd2a174fdc1c9b7a50d63245121319c84fd6391c1b3d2f9"
	},
	{
		"id": "4e797f9663e5",
		"ts": "2026-07-28T18:11:20.509Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 643321.54,
		"hash": "4e797f9663e5334cead7674ac40fd5e5273bffbd0d267bb902e448861d8d286d"
	},
	{
		"id": "95620cb274ec",
		"ts": "2026-07-28T18:11:20.758Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1761048.17,
		"hash": "95620cb274ece872951a547fab579b09c9386c2b04c63be07f1e4717b82fa13b"
	},
	{
		"id": "571397a6c162",
		"ts": "2026-07-28T16:05:01.934Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111605827.44,
		"hash": "571397a6c162db1ae06392fb025200826c6f5b7f6c5da3e1315147f640ad796d"
	},
	{
		"id": "73deba0baad8",
		"ts": "2026-07-28T16:05:02.229Z",
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
		"liquidityUsd": 16186384.99,
		"hash": "73deba0baad8893233d3ae57c453bba3275f60dd2194c35240c4ecec3367b3e0"
	},
	{
		"id": "36e8bc839b83",
		"ts": "2026-07-28T16:05:02.479Z",
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
		"liquidityUsd": 1097659.5,
		"hash": "36e8bc839b83fa4bc6c066d56a12b75b28358c67d5ee78059427743708f201ef"
	},
	{
		"id": "e6d33d341e31",
		"ts": "2026-07-28T16:05:02.745Z",
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
		"liquidityUsd": 26295173.09,
		"hash": "e6d33d341e317fb1c0d93782f8adbba40f96881b154da96ba18ab89ee3d29c2f"
	}
]
