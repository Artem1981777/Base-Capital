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
	"updatedAt": "2026-07-19T02:22:34.667Z",
	"tokensScored": 4266,
	"verdictsIssued": 4266,
	"safe": 3767,
	"risky": 342,
	"likelyRug": 157,
	"ticks": 261
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "99ae639075f0",
		"ts": "2026-07-19T02:22:30.532Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107655312.81,
		"hash": "99ae639075f02812f1d35bc32bc258821d2f5457d13016a76e639414f8fd0c15"
	},
	{
		"id": "91f8370264d1",
		"ts": "2026-07-19T02:22:30.943Z",
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
		"liquidityUsd": 15985672.55,
		"hash": "91f8370264d18facfc79bf5000fe6973c27a7ce99b0ff576ff50c91f587b5d78"
	},
	{
		"id": "48c524f3aa47",
		"ts": "2026-07-19T02:22:31.409Z",
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
		"liquidityUsd": 876268.21,
		"hash": "48c524f3aa475f25d897d7b54e30986161897511997032dc9df4ddac21a26a1f"
	},
	{
		"id": "1e9fd6b4086e",
		"ts": "2026-07-19T02:22:31.670Z",
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
		"liquidityUsd": 25023814.73,
		"hash": "1e9fd6b4086e674aacf4eed518bf4a5b7d8d34e1c11c3a6a1dcfd74c38484496"
	},
	{
		"id": "ab4e8d2cd8ba",
		"ts": "2026-07-19T02:22:31.910Z",
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
		"liquidityUsd": 5064165.01,
		"hash": "ab4e8d2cd8ba0369d2d69722786a34b0cffeac5b7b09895a3c4354e8635a0698"
	},
	{
		"id": "d28a9fc8c99d",
		"ts": "2026-07-19T02:22:32.149Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 999195.57,
		"hash": "d28a9fc8c99d2ca176a53f14c8b34bf207e6fce032a2d5a0bc4a4d1be80cfe80"
	},
	{
		"id": "bce48f791b6a",
		"ts": "2026-07-19T02:22:32.386Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25023814.73,
		"hash": "bce48f791b6a09845a3881ff95722a65e5b9d0853bcdcb4203d91fb7d7848a44"
	},
	{
		"id": "0cea28cee675",
		"ts": "2026-07-19T02:22:32.630Z",
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
		"liquidityUsd": 2971252.64,
		"hash": "0cea28cee6757acfab546eac419a0a58869ef79df5fb9f9eb6d18da4602455a4"
	},
	{
		"id": "3613360ff5a9",
		"ts": "2026-07-19T02:22:32.870Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 202175.18,
		"hash": "3613360ff5a9b327edcc08a09103912b98fcacb8e5944b0652bfa0cc67f01171"
	},
	{
		"id": "9b5d27469c4c",
		"ts": "2026-07-19T02:22:33.106Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 54060.5,
		"hash": "9b5d27469c4ce426620374dd1c1d8a16cb7b4105d20fccc141d3e80aa5e6e8b0"
	},
	{
		"id": "74a871ade858",
		"ts": "2026-07-19T02:22:33.329Z",
		"symbol": "TOSHI",
		"token": "0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 977465.66,
		"hash": "74a871ade8585689ca7385dc1802d301a4eff923f7bb8965a0dd57723aef57dd"
	},
	{
		"id": "b0ebd1cb1b2c",
		"ts": "2026-07-19T02:22:33.553Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9361279.68,
		"hash": "b0ebd1cb1b2c4db02099a7d600d514dd57f0c4a65e83623f229d866334ad256b"
	},
	{
		"id": "427d81f85346",
		"ts": "2026-07-19T02:22:33.777Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1294460.17,
		"hash": "427d81f8534637065a219e9586acdae86889e0e8d59c3bc7d18e1345cb0434b0"
	},
	{
		"id": "22ffbd3bf229",
		"ts": "2026-07-19T02:22:33.998Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 442431.19,
		"hash": "22ffbd3bf229f5105c2b3b12e11c786146530f6256acbca6a6170c82c06cd2b2"
	},
	{
		"id": "387cb4d4696f",
		"ts": "2026-07-19T02:22:34.220Z",
		"symbol": "OpenAI",
		"token": "0x5399592239C030Da026b58E4A0a45918895c6b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 190490.89,
		"hash": "387cb4d4696f66ba1636a0e5c72a480de6a0dea89f76996908e565336a0cba0d"
	},
	{
		"id": "1ff8973e7af7",
		"ts": "2026-07-19T02:22:34.443Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 509237.83,
		"hash": "1ff8973e7af7a14082769cc98ad09a3f364de99fe213f52b37c034cd493b4107"
	},
	{
		"id": "bb7a6e986d48",
		"ts": "2026-07-19T02:22:34.666Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4657108.94,
		"hash": "bb7a6e986d48926d4a533187db610ea630e9c85b93e8526254f6d443d381a86c"
	},
	{
		"id": "d318774b50d4",
		"ts": "2026-07-18T23:50:55.931Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107397391.84,
		"hash": "d318774b50d47724cf1e46b0fff290cad8ebe4ebf76d9f3d8a3ce128fdf8f7a2"
	},
	{
		"id": "ca9b118c0b7b",
		"ts": "2026-07-18T23:50:56.124Z",
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
		"liquidityUsd": 15602381.91,
		"hash": "ca9b118c0b7ba2dfef50a3e592d12ca4a14d29ceba9b93e5c743703999101c3e"
	},
	{
		"id": "6eb96b35826a",
		"ts": "2026-07-18T23:50:56.314Z",
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
		"liquidityUsd": 845745.95,
		"hash": "6eb96b35826acf9fa39f6f6473e51fd39af3fd35b0267c2fce47cadc08c36688"
	},
	{
		"id": "57519a5b9004",
		"ts": "2026-07-18T23:50:56.513Z",
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
		"liquidityUsd": 24855082.77,
		"hash": "57519a5b90048e4cf33bb466e3506df63ed117dc5b2d9314c7b4d2c47484f90e"
	},
	{
		"id": "638f2cc04d57",
		"ts": "2026-07-18T23:50:56.718Z",
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
		"liquidityUsd": 5052395.05,
		"hash": "638f2cc04d57ba272af0efda04356cf115056bd4212ad77a001e7ee1463b96e2"
	},
	{
		"id": "4e27e4a55eb6",
		"ts": "2026-07-18T23:50:56.916Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 997050.94,
		"hash": "4e27e4a55eb6b1d93711b3a30dcf26c64b78927c33ce425cbcdd70d4ec049823"
	},
	{
		"id": "d583833640ae",
		"ts": "2026-07-18T23:50:57.099Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24855082.77,
		"hash": "d583833640ae16c561fc5ba87a6eb6790b4f7849a3d3b25e5a29359d9413e92e"
	},
	{
		"id": "fbec2c642a70",
		"ts": "2026-07-18T23:50:57.290Z",
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
		"liquidityUsd": 2498030.62,
		"hash": "fbec2c642a700fac3709af0aa7fc45e6ed8a238159d85c2fd71ef3effd5de2ee"
	},
	{
		"id": "78f24e1e28d4",
		"ts": "2026-07-18T23:50:57.491Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 166203.48,
		"hash": "78f24e1e28d42e69f01c38ab7a98729a79a911abb2b1a113de58ca03bf600f85"
	},
	{
		"id": "f3436a736bd1",
		"ts": "2026-07-18T23:50:57.688Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 58192.9,
		"hash": "f3436a736bd17e87bdedeec7edb67e86c8e7a7e223fc031598f684125945e9ae"
	},
	{
		"id": "124705be9855",
		"ts": "2026-07-18T23:50:57.915Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9293325.8,
		"hash": "124705be98556039b68ea3b053a107186907efea4c6b9cbe6c4d4222e3367050"
	},
	{
		"id": "2517919f7d48",
		"ts": "2026-07-18T23:50:58.112Z",
		"symbol": "TOSHI",
		"token": "0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1001991.53,
		"hash": "2517919f7d486eb7c31b0ef05daa31daf10e0cb58b2386d0233929092aa0f4ca"
	},
	{
		"id": "3b9219c614cb",
		"ts": "2026-07-18T23:50:58.300Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 448408.32,
		"hash": "3b9219c614cbe7a1a4aa9acd3c5403fed020832fc6e004b2f2dee6fd317d4a84"
	},
	{
		"id": "854c0c35469e",
		"ts": "2026-07-18T23:50:58.513Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1301435.31,
		"hash": "854c0c35469e22b93d99faaa31b6fdb5b00785d3af3aa1fb578e67029c6bf933"
	},
	{
		"id": "9656eb8793d0",
		"ts": "2026-07-18T23:50:58.694Z",
		"symbol": "OpenAI",
		"token": "0x5399592239C030Da026b58E4A0a45918895c6b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 190827.2,
		"hash": "9656eb8793d0433c17df75f1985028a22d7d5cf14ad2a476ccf9cbc23a394fb4"
	},
	{
		"id": "e65821a5276d",
		"ts": "2026-07-18T23:50:58.893Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 603346.19,
		"hash": "e65821a5276d34a244928175c6706717534cc325a4785f37c73a490a82e132b5"
	},
	{
		"id": "a7dd8e6df216",
		"ts": "2026-07-18T23:50:59.267Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 508321.68,
		"hash": "a7dd8e6df2162de288147ad43db80ba65abedb00a3a1c7cd2c047b7cd710f989"
	},
	{
		"id": "b45edf805e32",
		"ts": "2026-07-18T22:44:02.731Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107389023.96,
		"hash": "b45edf805e32cde5bff1ef85c6576181c68bf42cb506b5ddeb5e67dc566e755a"
	},
	{
		"id": "b0704330bbf1",
		"ts": "2026-07-18T22:44:02.965Z",
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
		"liquidityUsd": 15687146.38,
		"hash": "b0704330bbf1f635b57fe02da29293bc92a5d7200181f9489a7d7a277f967242"
	},
	{
		"id": "d9329fa88360",
		"ts": "2026-07-18T22:44:03.200Z",
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
		"liquidityUsd": 847729.58,
		"hash": "d9329fa8836007631686c2fb15e105ade2e8108c40635b886c1b9fb5ea1eae72"
	},
	{
		"id": "129bd39b2b76",
		"ts": "2026-07-18T22:44:03.439Z",
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
		"liquidityUsd": 24822927.92,
		"hash": "129bd39b2b764ea91d9e68cb618d2aac49680c186960dc22f8eb6712042eec10"
	},
	{
		"id": "85e5e155c9be",
		"ts": "2026-07-18T22:44:03.676Z",
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
		"liquidityUsd": 5049448.33,
		"hash": "85e5e155c9be47fe84e3f47d59d4de1e704190e6fdd8b26e10a5eb467deb1e5b"
	},
	{
		"id": "7037ee09540c",
		"ts": "2026-07-18T22:44:03.910Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 998275.46,
		"hash": "7037ee09540c252f2bcc660f992fcb23e0a41ae4123c3ea9b44e2a3b2bdcd2ce"
	},
	{
		"id": "b27c2d1b8ee3",
		"ts": "2026-07-18T22:44:04.143Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24822927.92,
		"hash": "b27c2d1b8ee3fda18a6f28a8112fab85966d24b7f26429efd8ede85a3e9b9520"
	},
	{
		"id": "79145a702b50",
		"ts": "2026-07-18T22:44:04.384Z",
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
		"liquidityUsd": 2514236.84,
		"hash": "79145a702b502754f2bf49d8b71b8ca0a9cb513d9e7bc9040a3bdcf25ec98ca8"
	},
	{
		"id": "6021e261712a",
		"ts": "2026-07-18T22:44:04.619Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 168133.75,
		"hash": "6021e261712ae255ee49d96d853c794ea18cc87226490cb689c3ebbfa0721a63"
	},
	{
		"id": "c2ece80790f0",
		"ts": "2026-07-18T22:44:04.849Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 65701.8,
		"hash": "c2ece80790f06854f782c5091e873012cf608bc724c0267191075c87b5474664"
	},
	{
		"id": "25e8f3d8d870",
		"ts": "2026-07-18T22:44:05.068Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9301704.1,
		"hash": "25e8f3d8d870660ef6082b056ee45b8da587f20bd2f993340dd9fc17041aef51"
	},
	{
		"id": "184517663a38",
		"ts": "2026-07-18T22:44:05.285Z",
		"symbol": "TOSHI",
		"token": "0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1006493.26,
		"hash": "184517663a38c723cb14b3b194d193c379fd93fb5eef92aebc94f3f3a0d02385"
	},
	{
		"id": "79010f47c28d",
		"ts": "2026-07-18T22:44:05.501Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 445347.34,
		"hash": "79010f47c28d19d142b7e64514ec0950743526ef0cca57d74d954fb5d83635c5"
	},
	{
		"id": "79789c67c369",
		"ts": "2026-07-18T22:44:05.721Z",
		"symbol": "OpenAI",
		"token": "0x5399592239C030Da026b58E4A0a45918895c6b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 190814.63,
		"hash": "79789c67c36992fc49a7d8680283a2824661563dbc1544b6a01f98d58a15fe32"
	},
	{
		"id": "962556c82430",
		"ts": "2026-07-18T22:44:05.940Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 250997.71,
		"hash": "962556c8243010336962e7e98cb93d7abd5d891620bc6cbd71ed726e2ef6fb96"
	},
	{
		"id": "9c5df76f3b7f",
		"ts": "2026-07-18T22:44:06.156Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 592144.75,
		"hash": "9c5df76f3b7fbcf1ba60ca84db94a2a73ca5588649678613242ca3c5675d5d5c"
	},
	{
		"id": "24c49fc4f89f",
		"ts": "2026-07-18T22:44:06.375Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 510328.27,
		"hash": "24c49fc4f89f52f6184cced0e12eac4c4d5350ce61335d04e5a1a2b1f90d738d"
	},
	{
		"id": "a79a8cc2f6d9",
		"ts": "2026-07-18T21:46:22.914Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107393047.33,
		"hash": "a79a8cc2f6d9a3241397a2ba26c3704e4f8b48774fbc93a68115080a17cea3cd"
	},
	{
		"id": "5d79d1cbba63",
		"ts": "2026-07-18T21:46:23.177Z",
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
		"liquidityUsd": 16488038.23,
		"hash": "5d79d1cbba63b2b9d79b20132294038e3385925f962eb1504e2271d3a368aef9"
	},
	{
		"id": "abccfb544c53",
		"ts": "2026-07-18T21:46:23.434Z",
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
		"liquidityUsd": 850157.05,
		"hash": "abccfb544c53c7bad85564ad7af39a91a2a245a3950688ac6c161dcea3052c4e"
	},
	{
		"id": "d47c938ba065",
		"ts": "2026-07-18T21:46:23.679Z",
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
		"liquidityUsd": 24744584.75,
		"hash": "d47c938ba065edb358bade83e53264095bddec97be6ac8aad349630cbbbfa924"
	},
	{
		"id": "4831d982b369",
		"ts": "2026-07-18T21:46:23.921Z",
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
		"liquidityUsd": 5037435.49,
		"hash": "4831d982b369d5f6685b58695b5b3e14e3597490e71a3893c71462ce9d145f8f"
	},
	{
		"id": "3768043ba05f",
		"ts": "2026-07-18T21:46:24.165Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 996273.4,
		"hash": "3768043ba05f6a525f05be6669e14deda7c1de8c3e188cb6b25773ae825e58e2"
	},
	{
		"id": "efa070a508b8",
		"ts": "2026-07-18T21:46:24.409Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24744584.75,
		"hash": "efa070a508b83493bdf4830de019b86804c612af1df365eb24815c2158d28c85"
	},
	{
		"id": "603472c1bd80",
		"ts": "2026-07-18T21:46:24.656Z",
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
		"liquidityUsd": 2503283.46,
		"hash": "603472c1bd806b6ab24350700e802ee31cb31da225311d5d966d4ca9b1d2dd29"
	},
	{
		"id": "1e12be18aac4",
		"ts": "2026-07-18T21:46:24.905Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 170457.7,
		"hash": "1e12be18aac41633f6bfefa5bd89f30b65f3823d30867252ec9920131a41602f"
	},
	{
		"id": "cad9ee50b674",
		"ts": "2026-07-18T21:46:25.149Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 54358.44,
		"hash": "cad9ee50b674c449ce6b32aea6a0b619c474e6bb14ef5cfedfd8e5a38f0bad58"
	},
	{
		"id": "419d0582d467",
		"ts": "2026-07-18T21:46:25.372Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9282732.82,
		"hash": "419d0582d46766b104d226c56b3606d0091c48d0ea26d4ae5d52632fbe1b4f41"
	},
	{
		"id": "7806d893434c",
		"ts": "2026-07-18T21:46:25.596Z",
		"symbol": "TOSHI",
		"token": "0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1011609.43,
		"hash": "7806d893434c6b0263b5728dab5a0caa70c1ae46fcabbbd600600b53113aeedd"
	},
	{
		"id": "43f23ff72989",
		"ts": "2026-07-18T21:46:25.822Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 439664.27,
		"hash": "43f23ff7298995f7f3e007646fd10c4395540c71cd9d6d4ffebd2d3241ff9d97"
	},
	{
		"id": "c942e2968bef",
		"ts": "2026-07-18T21:46:26.048Z",
		"symbol": "OpenAI",
		"token": "0x5399592239C030Da026b58E4A0a45918895c6b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 190656.84,
		"hash": "c942e2968befa84724cfadc43e5ab1153a8e07c873bbd1836652d036fb7c156c"
	},
	{
		"id": "f892f88dce23",
		"ts": "2026-07-18T21:46:26.272Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 244953.45,
		"hash": "f892f88dce238dbfe183257ccfca6ce70263a7d597f2ad1c6ff55c3019724d98"
	},
	{
		"id": "86c4862db66d",
		"ts": "2026-07-18T21:46:26.496Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 592547.07,
		"hash": "86c4862db66dd623ca18bf437e1a9c61f9ee2560877ea6ee91efac9e8348dc17"
	},
	{
		"id": "929bba4c35be",
		"ts": "2026-07-18T21:46:26.719Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 653192.05,
		"hash": "929bba4c35bec2157d472d5db44570c00d2a4f9db075871c00cd51a3e3de89c6"
	},
	{
		"id": "3080d970c822",
		"ts": "2026-07-18T20:04:52.887Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107439026.68,
		"hash": "3080d970c822d9855b0dfa5930ab910bc79c71e931c085c1e87245c6fd0df8f6"
	},
	{
		"id": "c0bf58cef1d9",
		"ts": "2026-07-18T20:04:53.330Z",
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
		"liquidityUsd": 15940032.84,
		"hash": "c0bf58cef1d9ba8cde2b214e3ca971601d8b2489c724925989bacc06f74bf51f"
	},
	{
		"id": "a54ef6576122",
		"ts": "2026-07-18T20:04:53.567Z",
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
		"liquidityUsd": 826655.57,
		"hash": "a54ef65761227863480960359c7523db00393d553deb102f1fc1659b29eedd1e"
	},
	{
		"id": "79aa5b81cd88",
		"ts": "2026-07-18T20:04:53.808Z",
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
		"liquidityUsd": 26493393.49,
		"hash": "79aa5b81cd8827f0267abfbb61946c8cdfb201f9b73622b8241069017390d238"
	},
	{
		"id": "c32a9cdf1f99",
		"ts": "2026-07-18T20:04:54.048Z",
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
		"liquidityUsd": 5039900.29,
		"hash": "c32a9cdf1f99410c54f896838e0a2d008899eeae60b102976276eaaae5695877"
	},
	{
		"id": "798766eaba50",
		"ts": "2026-07-18T20:04:54.285Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 998312.64,
		"hash": "798766eaba50e02e3bd01a705d44cb2b8df695adb98a4a265fa2c7e435f3be33"
	},
	{
		"id": "c6fd5b80474b",
		"ts": "2026-07-18T20:04:54.518Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26493393.49,
		"hash": "c6fd5b80474b0bbaccadbc6efe46b94b9094e0b4cd67ad1e69081ec80381912f"
	},
	{
		"id": "170e40dd3bbe",
		"ts": "2026-07-18T20:04:54.754Z",
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
		"liquidityUsd": 2503448.71,
		"hash": "170e40dd3bbef29c44fe2baeb5cde7361679c86610f06f6d6e54dd915243a17d"
	},
	{
		"id": "d97a988090db",
		"ts": "2026-07-18T20:04:54.992Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 181851.33,
		"hash": "d97a988090db1aa3968004a600dabd965d1bb274ff20904538fec14c442bb74b"
	},
	{
		"id": "09f36555f574",
		"ts": "2026-07-18T20:04:55.227Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 50782.73,
		"hash": "09f36555f5743a5ecfa1024b95c4c71527ab71d076a08c5e5da971154dccc53f"
	},
	{
		"id": "9e49e05f922c",
		"ts": "2026-07-18T20:04:55.444Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 438775.01,
		"hash": "9e49e05f922c53b94cd56dd21390d1ddd866a1a000b9c0867ee388068951daa8"
	},
	{
		"id": "63ce3df7b01f",
		"ts": "2026-07-18T20:04:55.664Z",
		"symbol": "TOSHI",
		"token": "0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1004445.49,
		"hash": "63ce3df7b01f582fd6b752d04b7dcc78a7e5c5f30201fea7fff528a210b3b9d9"
	},
	{
		"id": "afe0a7d47792",
		"ts": "2026-07-18T20:04:55.886Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9163238.86,
		"hash": "afe0a7d4779287c12170603044a07181828f237f490cb788ee6da06cec086db2"
	},
	{
		"id": "27c343895d7b",
		"ts": "2026-07-18T20:04:56.109Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 260134.1,
		"hash": "27c343895d7b609b493c350e1004bb53acf441abbf19cfd70697e71d0126adb7"
	},
	{
		"id": "d924edcf5d41",
		"ts": "2026-07-18T20:04:56.328Z",
		"symbol": "OpenAI",
		"token": "0x5399592239C030Da026b58E4A0a45918895c6b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 190626.38,
		"hash": "d924edcf5d4154aae5357ad1423226742b75c5133ff30164a2916f743727f03b"
	},
	{
		"id": "24cab48a0786",
		"ts": "2026-07-18T20:04:56.549Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 593435.51,
		"hash": "24cab48a0786bd04f69221da6da295b82db585247d76e526262f9b505bbd31bd"
	},
	{
		"id": "42c0d813448f",
		"ts": "2026-07-18T20:04:56.771Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 658136.9,
		"hash": "42c0d813448f68f01dd94786dbbaaf775e3cdf320477c925e669e3412bbaf147"
	},
	{
		"id": "b81083b99dfe",
		"ts": "2026-07-18T18:58:17.152Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107449308.57,
		"hash": "b81083b99dfefd6f1c7b4862adc0a8d570e7cc761bd5ffd1c0f1c7dfcb711ab6"
	},
	{
		"id": "f3359f8cee00",
		"ts": "2026-07-18T18:58:17.344Z",
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
		"liquidityUsd": 15458688.35,
		"hash": "f3359f8cee00928a0cf84c71edbc840842322128ccf809e5248cac0f3d70c03c"
	},
	{
		"id": "2959894efd13",
		"ts": "2026-07-18T18:58:17.541Z",
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
		"liquidityUsd": 819538.94,
		"hash": "2959894efd1368d1e103357ceb02fe2ef595b1da7be9cc86dc9abfd75976f8b3"
	},
	{
		"id": "292f987a78c5",
		"ts": "2026-07-18T18:58:17.740Z",
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
		"liquidityUsd": 26429594.01,
		"hash": "292f987a78c5ca89e4e17ba4f688b279b557654ad5f7cc4dc9fd2070f56215fb"
	},
	{
		"id": "df41562fedf5",
		"ts": "2026-07-18T18:58:17.934Z",
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
		"liquidityUsd": 5034918.15,
		"hash": "df41562fedf5885a4cb734df40e5486b51506757d6d23178f4331bf5cb78664b"
	},
	{
		"id": "edbc018240cb",
		"ts": "2026-07-18T18:58:18.126Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 997283.13,
		"hash": "edbc018240cbc746277c6ef166259440060f2c8d0e0f5a5dee419cae7e15f11a"
	},
	{
		"id": "8925ea40546e",
		"ts": "2026-07-18T18:58:18.310Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26429594.01,
		"hash": "8925ea40546eb6e96074fb4e11bcd758cca7f2fa90399eba13156dad5784b536"
	},
	{
		"id": "788f7cdb84a6",
		"ts": "2026-07-18T18:58:18.495Z",
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
		"liquidityUsd": 2502420.89,
		"hash": "788f7cdb84a6ee9f5946e9455c74d5197dbb6c84b9173dc7ad26e93fbbe273ed"
	},
	{
		"id": "74f93dc0664d",
		"ts": "2026-07-18T18:58:18.683Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 186649.79,
		"hash": "74f93dc0664df5fdb8a0ff113046e65e89fe632a1ecf50a80aece6db43eab711"
	},
	{
		"id": "a2445d862c12",
		"ts": "2026-07-18T18:58:18.884Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 48528.4,
		"hash": "a2445d862c123da5a6da51c8fb154bf2fb634020cd4bb9f189d9a271592b1056"
	},
	{
		"id": "6ef3df55ab32",
		"ts": "2026-07-18T18:58:19.067Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 443522.26,
		"hash": "6ef3df55ab32b0e53a7bfeb74ef8cef11e5ae7ed60356245c8a17ade3fdd84d6"
	},
	{
		"id": "6306fc834a70",
		"ts": "2026-07-18T18:58:19.264Z",
		"symbol": "TOSHI",
		"token": "0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1009359.13,
		"hash": "6306fc834a70edadc1b78924b2be6dbfbba39134531abddf94488ce0bf0efd2f"
	},
	{
		"id": "cdf5138cb6a1",
		"ts": "2026-07-18T18:58:19.450Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 261400.14,
		"hash": "cdf5138cb6a108872d6c1967b279e43d6307ceba84232cf76d5b1f93881f556a"
	},
	{
		"id": "c93d1488b6af",
		"ts": "2026-07-18T18:58:19.641Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9147362.46,
		"hash": "c93d1488b6afed42ffadd6b977353349dc78a76f0a806f440412dcdd14417ab0"
	},
	{
		"id": "728b1c73db26",
		"ts": "2026-07-18T18:58:19.823Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1354354.04,
		"hash": "728b1c73db26afc51f75090746403851c73839d6ec2e0c03129b2f7088deb042"
	},
	{
		"id": "afb4a9c603fc",
		"ts": "2026-07-18T18:58:20.000Z",
		"symbol": "BASEMATE",
		"token": "0x07E61D8a4e197dfC269e90D7ECe1dF0D26702bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 131956.96,
		"hash": "afb4a9c603fc925dfc1006a1c4041422d0b82276cf277d32bb10f32fe7a45dba"
	},
	{
		"id": "4bfd8ad26e0f",
		"ts": "2026-07-18T18:58:20.194Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 599426.37,
		"hash": "4bfd8ad26e0f161987b22a6d3ab5e5a91319a90597dc07cc989baf1bcaedbbef"
	},
	{
		"id": "eff0c4d4c436",
		"ts": "2026-07-18T17:54:03.181Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106856065.15,
		"hash": "eff0c4d4c436f77e5e0b82c29f88006ed44b9ff11165928b6c4da32b12bd780c"
	},
	{
		"id": "b811bf2b5c3a",
		"ts": "2026-07-18T17:54:03.631Z",
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
		"liquidityUsd": 15698935,
		"hash": "b811bf2b5c3a1b725d35061d7e6646e07bc008c97229e77f2e3bfe52e837af5a"
	},
	{
		"id": "e0fbb51dc069",
		"ts": "2026-07-18T17:54:04.079Z",
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
		"liquidityUsd": 823166.93,
		"hash": "e0fbb51dc069f48a653188caaabdbfc029c1cd8e7917d928ef74498ba447bccc"
	},
	{
		"id": "4a23484beea2",
		"ts": "2026-07-18T17:54:04.325Z",
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
		"liquidityUsd": 26812342.37,
		"hash": "4a23484beea2df7355c0530089f5dade91943d56be740e1264401adfc12078ba"
	},
	{
		"id": "130a89e96fdb",
		"ts": "2026-07-18T17:54:04.563Z",
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
		"liquidityUsd": 5008960.51,
		"hash": "130a89e96fdbd2952744035d0bb5aba83d373c41b7aa15653577dd9c444f61cb"
	},
	{
		"id": "ac567a30237d",
		"ts": "2026-07-18T17:54:04.795Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 995973.7,
		"hash": "ac567a30237de30775c19cbfe1cf326b0403278944233b46773ad33ef460fe6c"
	},
	{
		"id": "9723fa8251ab",
		"ts": "2026-07-18T17:54:05.036Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26812342.37,
		"hash": "9723fa8251ab96fc6211e722d7bbfd97b0c8d173550a9052787dd2198d89ce1d"
	},
	{
		"id": "ede98139bc2b",
		"ts": "2026-07-18T17:54:05.279Z",
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
		"liquidityUsd": 2497723.09,
		"hash": "ede98139bc2bf1aa157e53eb7cb5cefab3623459b33ff2619b491e291a65db64"
	},
	{
		"id": "8a469ce0cb68",
		"ts": "2026-07-18T17:54:05.512Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 180017.1,
		"hash": "8a469ce0cb68ac3daf366cdc199d07ae980293442cae8cc3049181707f4b41c0"
	},
	{
		"id": "571ac5543b2b",
		"ts": "2026-07-18T17:54:05.753Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 49596.19,
		"hash": "571ac5543b2b29df67f79b06837e32811c239d133c5d983f43134da56e64c1cc"
	},
	{
		"id": "ef857e6c9fcf",
		"ts": "2026-07-18T17:54:05.978Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 446545.42,
		"hash": "ef857e6c9fcfad0e31f0417284b1fad7c9528bd82964b559e6d61b26c586a674"
	},
	{
		"id": "d2c7dee0dd31",
		"ts": "2026-07-18T17:54:06.195Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 267110.74,
		"hash": "d2c7dee0dd31035ccb7057b5eee926b5427746d3d1eaa3e3637101f95ab49265"
	},
	{
		"id": "cd7cb9c01cb9",
		"ts": "2026-07-18T17:54:06.417Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 93230.36,
		"hash": "cd7cb9c01cb9ec7bd8f44673eb9a736983732eb4ab5ca1037a591af3a1a643fb"
	},
	{
		"id": "4fb128dd4e6e",
		"ts": "2026-07-18T17:54:06.642Z",
		"symbol": "TOSHI",
		"token": "0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1009694.93,
		"hash": "4fb128dd4e6ed1cfbf1976d57caab609342c352fbc07bf240bb869715dfe2eda"
	},
	{
		"id": "69d349d18c06",
		"ts": "2026-07-18T17:54:06.866Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9141501.91,
		"hash": "69d349d18c0699ec9b0afac55d4f0d0b1df24c3b4c2fc693169f44b3dc1b01b5"
	},
	{
		"id": "78c288ab2fcb",
		"ts": "2026-07-18T17:54:07.089Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1351411.26,
		"hash": "78c288ab2fcb8778a0457dd2b33f2b88bf418ad94697efc5c703979c6dfe53fa"
	},
	{
		"id": "3015cb94ee87",
		"ts": "2026-07-18T17:54:07.314Z",
		"symbol": "BASEMATE",
		"token": "0x07E61D8a4e197dfC269e90D7ECe1dF0D26702bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 131121.72,
		"hash": "3015cb94ee87ad160f9c8e7ab372c610f4f6152b409fd43a5ff14906d1e01fe5"
	},
	{
		"id": "e4ca9eea4740",
		"ts": "2026-07-18T16:53:41.712Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106465034.86,
		"hash": "e4ca9eea4740412d77c1e3712148f4cca1cdd97f4827eaddc7a4099791f4b1af"
	},
	{
		"id": "c28dd577758f",
		"ts": "2026-07-18T16:53:42.211Z",
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
		"liquidityUsd": 14527535.14,
		"hash": "c28dd577758f84984e7cc76ac4f66b572ea530902978ab68c65829411f43d069"
	},
	{
		"id": "8295d7e1b527",
		"ts": "2026-07-18T16:53:42.648Z",
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
		"liquidityUsd": 837700.76,
		"hash": "8295d7e1b5279c9e91a005960ce55461bba4e9f3d53a077094e482a6dca0621b"
	},
	{
		"id": "f3f2a0817671",
		"ts": "2026-07-18T16:53:42.925Z",
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
		"liquidityUsd": 26766037.52,
		"hash": "f3f2a0817671e8da8f35a7c3ea53ee603c446c96dc99cfd8e5c812b45c88ee69"
	},
	{
		"id": "345058b08997",
		"ts": "2026-07-18T16:53:43.169Z",
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
		"liquidityUsd": 5007320.09,
		"hash": "345058b089973a9afaa039a8729550d7a64161a3ca99ba16f9161d63290d9f3d"
	},
	{
		"id": "38e9a24abe0a",
		"ts": "2026-07-18T16:53:43.405Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 992331.09,
		"hash": "38e9a24abe0af68a433d01702b186b876e6ce6245d75ef45311e96b69629dc80"
	},
	{
		"id": "b3079202ec88",
		"ts": "2026-07-18T16:53:43.636Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26766037.52,
		"hash": "b3079202ec8872dd9f9bdd0e8956d6b760837678bbe62dd2fe4fab30db41601c"
	},
	{
		"id": "b1f2aceb0f65",
		"ts": "2026-07-18T16:53:43.875Z",
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
		"liquidityUsd": 2486992.33,
		"hash": "b1f2aceb0f65608074f71ced9b863cb38d0297d4fd93fb12dcacfedc86e00778"
	},
	{
		"id": "690841660c9e",
		"ts": "2026-07-18T16:53:44.119Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 199666.37,
		"hash": "690841660c9e30f73dc836c0e153ea39287c5e0c9eba8e5ea235136fe18e873d"
	},
	{
		"id": "a3261b0768aa",
		"ts": "2026-07-18T16:53:44.354Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 63074.8,
		"hash": "a3261b0768aaa93567240d4e01d476b04911b3f7c110cdc9087d2c8b5d58d219"
	},
	{
		"id": "3cf38d6d55c3",
		"ts": "2026-07-18T16:53:44.573Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 449803.75,
		"hash": "3cf38d6d55c38cd4005eba3ff9358766aa8c246f5a2ff03bb84154e265dbadd4"
	},
	{
		"id": "a012a15f7c5a",
		"ts": "2026-07-18T16:53:44.798Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 274624.16,
		"hash": "a012a15f7c5a8447dfcf97252246d5df231ea5479771326ac13c184266c56afc"
	},
	{
		"id": "660104f17934",
		"ts": "2026-07-18T16:53:45.024Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 95084.03,
		"hash": "660104f17934581c63090c35c2639b79c49edd87b77932d809c3221e1f04137d"
	},
	{
		"id": "7766af86a199",
		"ts": "2026-07-18T16:53:45.246Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9114470.93,
		"hash": "7766af86a1992d057abf0cc4b1366f4cc026b210ff3ffc166886c8f310c59aa9"
	},
	{
		"id": "1e694301f03e",
		"ts": "2026-07-18T16:53:45.464Z",
		"symbol": "TOSHI",
		"token": "0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 995017.42,
		"hash": "1e694301f03e41fb7ee47dc3d9f2f9f9746aa367ededaf79e01fc9fa93cb3a1d"
	},
	{
		"id": "3ccbb9f37eef",
		"ts": "2026-07-18T16:53:45.688Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1351284.06,
		"hash": "3ccbb9f37eef4e0bb921705c238b73ff86a5cc50121d65ac997b761d85eeb0ab"
	},
	{
		"id": "460cb0019d54",
		"ts": "2026-07-18T16:53:45.912Z",
		"symbol": "BASEMATE",
		"token": "0x07E61D8a4e197dfC269e90D7ECe1dF0D26702bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 129751.72,
		"hash": "460cb0019d54bef344387eaf8d8aa570a2381025a45d9238af367c266ed91aca"
	},
	{
		"id": "4ca2b4a47ab3",
		"ts": "2026-07-18T15:52:55.523Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106509562.79,
		"hash": "4ca2b4a47ab3c17e1f2f14c10cc4bd3421319193cc7d9c9b4a150dc34fd2dbee"
	},
	{
		"id": "327076c61fb0",
		"ts": "2026-07-18T15:52:55.769Z",
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
		"liquidityUsd": 16316711.57,
		"hash": "327076c61fb054dd83ae975b96a3e8ada5801cf90549b5e3e546d5681e39d736"
	},
	{
		"id": "f5add0d391f8",
		"ts": "2026-07-18T15:52:56.012Z",
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
		"liquidityUsd": 886492.02,
		"hash": "f5add0d391f8cedf29a139b05a721d0e90737668f4bdb1da969d5400a0258b1d"
	},
	{
		"id": "3a255932a141",
		"ts": "2026-07-18T15:52:56.255Z",
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
		"liquidityUsd": 26796720.18,
		"hash": "3a255932a1414912dd39f28b251536c32efe3d0f74ce9e132e50acf8b566b101"
	},
	{
		"id": "d7b66e8bf8f7",
		"ts": "2026-07-18T15:52:56.497Z",
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
		"liquidityUsd": 5004979.78,
		"hash": "d7b66e8bf8f79e9498232c572ff1d4e5255a018105d8e97dbcb9bb4d91eaea71"
	},
	{
		"id": "9481d31e1785",
		"ts": "2026-07-18T15:52:56.761Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 993437.89,
		"hash": "9481d31e17856fae904ec6202808e543b8860689a31f64a7e285755825566d7d"
	},
	{
		"id": "1cf98f275d6f",
		"ts": "2026-07-18T15:52:57.025Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26796720.18,
		"hash": "1cf98f275d6f3b97644bff98aa832062960cee89d66dfb8c3a187c711a35cd13"
	},
	{
		"id": "83c997d69d16",
		"ts": "2026-07-18T15:52:57.270Z",
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
		"liquidityUsd": 2490665.25,
		"hash": "83c997d69d1647ba1ecf0a540b27a6cc8c93bcc4b8fcdd8fc20d941e058efa2d"
	},
	{
		"id": "a704a5eefb5e",
		"ts": "2026-07-18T15:52:57.512Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 169980.46,
		"hash": "a704a5eefb5ecd8cb72cbcccce8ea3bb2ce0039ceb2927b7d383d46a227c94b0"
	},
	{
		"id": "27d625057ab3",
		"ts": "2026-07-18T15:52:57.753Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 56493.92,
		"hash": "27d625057ab31f0039727049f4d1edc81505fe1c765f9d90c317b55381079a69"
	},
	{
		"id": "ca878e89694d",
		"ts": "2026-07-18T15:52:58.057Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 437691.53,
		"hash": "ca878e89694ddd5198c510e7a52d002fec1afbe93eb4902c27509123b6e9ec7b"
	},
	{
		"id": "d2321f4d047e",
		"ts": "2026-07-18T15:52:58.283Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 227546.48,
		"hash": "d2321f4d047e91c3fcde6aef5e2e2b1798c4602ec3e964f9f6c245efc8533799"
	},
	{
		"id": "34b9e5c1dd0b",
		"ts": "2026-07-18T15:52:58.505Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 97232.85,
		"hash": "34b9e5c1dd0bd99e43f59716d51ab914500676cc602694e6a2b73dad998fdd4e"
	},
	{
		"id": "9d5cfa4e7c55",
		"ts": "2026-07-18T15:52:58.731Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9107994.81,
		"hash": "9d5cfa4e7c555caf7e8be8bbb150cc46a2879b5975296bb8f61e7eb56cae3c23"
	},
	{
		"id": "0d2392cd422b",
		"ts": "2026-07-18T15:52:58.958Z",
		"symbol": "TOSHI",
		"token": "0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 995097.19,
		"hash": "0d2392cd422b3010a9b694f5ee5003c4891aad1ab11980cf585706e4105adedf"
	},
	{
		"id": "fd382f092bca",
		"ts": "2026-07-18T15:52:59.185Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1365373.6,
		"hash": "fd382f092bcacbc0174099ba7545a95626a40225e4a028e1bcaa5700ad1ecbe4"
	},
	{
		"id": "dc028fa0600a",
		"ts": "2026-07-18T15:52:59.409Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 608576.45,
		"hash": "dc028fa0600a7dace32557a4594d9423bb9721de0dcf3a3f36a03092e2b4a111"
	},
	{
		"id": "f898371e6294",
		"ts": "2026-07-18T14:48:17.373Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106465226.2,
		"hash": "f898371e6294dd7371f09e34bd34f25768e3ceaf1802bf8c64ef074f57a56997"
	},
	{
		"id": "c84ed2d35dc8",
		"ts": "2026-07-18T14:48:17.587Z",
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
		"liquidityUsd": 15673806.15,
		"hash": "c84ed2d35dc8ff6390e303064923828e9fcfe7a01c1e69939f60c61f879957e8"
	},
	{
		"id": "86a5e0f3e07f",
		"ts": "2026-07-18T14:48:17.934Z",
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
		"liquidityUsd": 872449.3,
		"hash": "86a5e0f3e07f150e9d8bfe9c5f8808acff6a8c0553d6d07b578bee16ffac996d"
	},
	{
		"id": "b9438bddc7c7",
		"ts": "2026-07-18T14:48:18.280Z",
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
		"liquidityUsd": 26877545.27,
		"hash": "b9438bddc7c75369ce92207b909007afa10aea542f8fbf1bf7a166df29f75704"
	},
	{
		"id": "4f2ae8c993fc",
		"ts": "2026-07-18T14:48:18.470Z",
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
		"liquidityUsd": 5020086,
		"hash": "4f2ae8c993fcc34217f1f824e4fab98f4859b23b9893b9deff95270be3831115"
	},
	{
		"id": "3ba85407d111",
		"ts": "2026-07-18T14:48:18.662Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 986404.49,
		"hash": "3ba85407d1112264685f3da2c477a6d2b957f8106625410305f3f470f7f1a091"
	},
	{
		"id": "22c8fd9c7c57",
		"ts": "2026-07-18T14:48:18.859Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26877545.27,
		"hash": "22c8fd9c7c576ba597e4c0f1e67efec3b66e66bf25f97c9d7cbfb1138f826451"
	},
	{
		"id": "77912fdfc322",
		"ts": "2026-07-18T14:48:19.051Z",
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
		"liquidityUsd": 2475549.33,
		"hash": "77912fdfc32297dbdead87c054faee9697c8036c5e582aa7492c0069f83b6d17"
	},
	{
		"id": "7bc7d7e1fe18",
		"ts": "2026-07-18T14:48:19.247Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 154711.85,
		"hash": "7bc7d7e1fe1889339ea502f2aff281e8057fe8036aded96f86e50c49230b1f82"
	},
	{
		"id": "ae1b4bfa28bd",
		"ts": "2026-07-18T14:48:19.473Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 60548.27,
		"hash": "ae1b4bfa28bdc7cbc6f241d4cef5219ae1d6776e10673c3198f0212318c2a708"
	},
	{
		"id": "2fa90694abdd",
		"ts": "2026-07-18T14:48:19.666Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 232106.58,
		"hash": "2fa90694abdde19b21fa8c29563bf433cd64310fc323c01cd16d6028c84deca7"
	},
	{
		"id": "fe326f8527cf",
		"ts": "2026-07-18T14:48:19.856Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 440228.94,
		"hash": "fe326f8527cfa0cea07c389aaa53edf73e9035e0f4353580e1514ce37c0d057b"
	},
	{
		"id": "135432f6a5f9",
		"ts": "2026-07-18T14:48:20.051Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 95929.93,
		"hash": "135432f6a5f91f202e7359aecb13b1f7638690ae32db62d93d6e6c04af85c103"
	},
	{
		"id": "8c2c43495b17",
		"ts": "2026-07-18T14:48:20.241Z",
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
		"liquidityUsd": 1352779.12,
		"hash": "8c2c43495b17958f031a497ac327a18cd3fc5c992fada821c03c661c02b68a03"
	},
	{
		"id": "91016075c72c",
		"ts": "2026-07-18T14:48:20.435Z",
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
		"liquidityUsd": 9118619.66,
		"hash": "91016075c72cb3bd74586e2b4eddde16b9f730f07e394b4dcb1b30bef0181b9d"
	},
	{
		"id": "35a3896d9f71",
		"ts": "2026-07-18T14:48:20.627Z",
		"symbol": "TOSHI",
		"token": "0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 996480.81,
		"hash": "35a3896d9f71d75c34c81209bda23078369a3351f500022b5a796f0acae81fb4"
	},
	{
		"id": "9e98fdccaf90",
		"ts": "2026-07-18T14:48:20.825Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3589065.28,
		"hash": "9e98fdccaf905c40f902d6de6cf5e2048a38d71310da1bd71a1c24e2d3ed742a"
	},
	{
		"id": "35b9983e407a",
		"ts": "2026-07-18T13:24:05.409Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106453516.68,
		"hash": "35b9983e407ab9d591a1e648863cbc2b8a480c4a95cdbb405310c39e0f0b9499"
	},
	{
		"id": "21c7c8d51e69",
		"ts": "2026-07-18T13:24:05.687Z",
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
		"liquidityUsd": 16068410.58,
		"hash": "21c7c8d51e69f5734bfa72bf1c4b40cbbc935a6df93df6573ae976a3c536820c"
	},
	{
		"id": "4dee7fce9109",
		"ts": "2026-07-18T13:24:05.922Z",
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
		"liquidityUsd": 799819.37,
		"hash": "4dee7fce91091d14d3a9a48602af205cf007fa74dd69dfb711e374e29786deb1"
	},
	{
		"id": "72ee77287f3a",
		"ts": "2026-07-18T13:24:06.161Z",
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
		"liquidityUsd": 26678498.39,
		"hash": "72ee77287f3acf9a7f80603ccca42ab704ca2abfa441ce529e882dab3a69c17e"
	},
	{
		"id": "9a3842f778fe",
		"ts": "2026-07-18T13:24:06.433Z",
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
		"liquidityUsd": 5015218.87,
		"hash": "9a3842f778fe15ee56f2d2ff74b8a935c0ce262e37a3cef9e0a518223c8a6c53"
	},
	{
		"id": "b9e05156bd5e",
		"ts": "2026-07-18T13:24:06.666Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 981863.42,
		"hash": "b9e05156bd5e22b3803f8cc6ddcad981df7e85428e64c12f4460a3aaf6d8e0d9"
	},
	{
		"id": "5f5b0ad6859e",
		"ts": "2026-07-18T13:24:06.898Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26678498.39,
		"hash": "5f5b0ad6859e4dd37330726cffeb5ef792454f90aa3023e0e6a9af87eddb0dce"
	},
	{
		"id": "c6b5e200c287",
		"ts": "2026-07-18T13:24:07.133Z",
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
		"liquidityUsd": 2442521.32,
		"hash": "c6b5e200c28713243574bb4d3f276672bf5d972c188c801d6429438d19d97153"
	},
	{
		"id": "be736bd37346",
		"ts": "2026-07-18T13:24:07.373Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 147914.96,
		"hash": "be736bd373461949da6da36553ed6a9cb2dcecec4f9e138643d27a0afe203b07"
	},
	{
		"id": "50368bec307d",
		"ts": "2026-07-18T13:24:07.609Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 77163.12,
		"hash": "50368bec307d0bf541289e0a371cd6cfa60a1c6fc60e743950662b9b32550110"
	},
	{
		"id": "1874a793d028",
		"ts": "2026-07-18T13:24:07.829Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 216794.52,
		"hash": "1874a793d028023ee27617d5aba073b9e2427f4003e8394fac1cc513028c7eec"
	},
	{
		"id": "5ee961cc794f",
		"ts": "2026-07-18T13:24:08.045Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 448329.4,
		"hash": "5ee961cc794f5a4f51d4cc7cac7f6e4db0aa139f2be2c9dee75b2448194c5b2a"
	},
	{
		"id": "90f63252d05d",
		"ts": "2026-07-18T13:24:08.272Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 97566.37,
		"hash": "90f63252d05d11de43cbbe8aededb003059c505eb0b20e9b97b5e5148e9cec92"
	},
	{
		"id": "d92bf85102a9",
		"ts": "2026-07-18T13:24:08.489Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9041749.81,
		"hash": "d92bf85102a9299b608604c401637c6bee041afe70f2e6bdb7f3beb2d15152f7"
	},
	{
		"id": "e07c105a7e53",
		"ts": "2026-07-18T13:24:08.707Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1312507.86,
		"hash": "e07c105a7e530c396a70995a08b61823642849462a327ef7acbce042762e9726"
	},
	{
		"id": "c29b99124ad5",
		"ts": "2026-07-18T13:24:08.927Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3549357.62,
		"hash": "c29b99124ad510271abc85ad60e39132d8162d5ae59116c7d5e9d365f8457860"
	},
	{
		"id": "ebb9934e9c40",
		"ts": "2026-07-18T13:24:09.144Z",
		"symbol": "BASEMATE",
		"token": "0x07E61D8a4e197dfC269e90D7ECe1dF0D26702bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 131420.07,
		"hash": "ebb9934e9c4024ccbef0ce2a996eb9a6d7cf10776d6c3502e44dc629777d6dbc"
	},
	{
		"id": "40eaffe75cc4",
		"ts": "2026-07-18T11:58:11.941Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106370657.77,
		"hash": "40eaffe75cc42bb5a6de58715c8edb31639de19711c3372df782e8d8125fe48f"
	},
	{
		"id": "f1200676c8fe",
		"ts": "2026-07-18T11:58:12.433Z",
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
		"liquidityUsd": 15238016.29,
		"hash": "f1200676c8fee70ae43f0716e7882df98eb53d18ec68bf5ecae60b0dec199fa1"
	},
	{
		"id": "c63519f5fc42",
		"ts": "2026-07-18T11:58:12.691Z",
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
		"liquidityUsd": 800894.2,
		"hash": "c63519f5fc42b0e92e76a3aed0a55babfb299c2a308b87c9e0e079c3ece2e6f3"
	},
	{
		"id": "a5e74f7ae3cf",
		"ts": "2026-07-18T11:58:12.949Z",
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
		"liquidityUsd": 27027531.91,
		"hash": "a5e74f7ae3cf96219208fafd923d64e061700c492d6faf8c195ee2a8c2d3d696"
	},
	{
		"id": "94080bdde10a",
		"ts": "2026-07-18T11:58:13.208Z",
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
		"liquidityUsd": 5043823.47,
		"hash": "94080bdde10ac42fa29d23eb9f628f3a8cab72d0375438976022b64040623d63"
	},
	{
		"id": "5bf54fd7703d",
		"ts": "2026-07-18T11:58:13.470Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 981874.14,
		"hash": "5bf54fd7703d38ca96f68c2e1203dc5466e9edb1089fda0b6c386378acdc0c47"
	},
	{
		"id": "7dff91c4f50c",
		"ts": "2026-07-18T11:58:13.725Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27027531.91,
		"hash": "7dff91c4f50cef4c265a359d20e77cb20bf88610913b20c0d1625d11938136e9"
	},
	{
		"id": "e290a14e6f1e",
		"ts": "2026-07-18T11:58:13.987Z",
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
		"liquidityUsd": 2475080.06,
		"hash": "e290a14e6f1e6d6f696577cfc9cf6bf421966a02992e557d20077527a759cdb6"
	},
	{
		"id": "ff8a840e1dc9",
		"ts": "2026-07-18T11:58:14.265Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 144633.07,
		"hash": "ff8a840e1dc9323e06654a8ace31cb3b7b20345276ec11e45060ac1ca9feb6c8"
	},
	{
		"id": "6d2b9a2536c6",
		"ts": "2026-07-18T11:58:14.523Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 82,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.64,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 228844.02,
		"hash": "6d2b9a2536c6a7072e9a8970817f892f05f780abe145176c782a8a25d1e188e5"
	},
	{
		"id": "1459bfe445e3",
		"ts": "2026-07-18T11:58:14.759Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 54234.05,
		"hash": "1459bfe445e35520a718f637fc3a6864b45f07abf3aa933d9a218a83809c30a8"
	},
	{
		"id": "4b3f6e7414e1",
		"ts": "2026-07-18T11:58:15.000Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 455106.94,
		"hash": "4b3f6e7414e1d61d3e4dc3ad17a17001fa6bf82fedc4aa65b600a054f84f3d61"
	},
	{
		"id": "6d15187d3d86",
		"ts": "2026-07-18T11:58:15.242Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 98701.59,
		"hash": "6d15187d3d86f1201a827a090193bfaa861352f604ab5e6a3cdf84ddd15b95d0"
	}
]
