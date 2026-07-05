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
	"updatedAt": "2026-07-05T20:55:46.274Z",
	"tokensScored": 1631,
	"verdictsIssued": 1631,
	"safe": 1434,
	"risky": 152,
	"likelyRug": 45,
	"ticks": 110
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "642b04234085",
		"ts": "2026-07-05T20:55:42.222Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100784617.48,
		"hash": "642b04234085d6725e7d7e23e16f8810f75bf6f26642484d6f0197b9acf5b7cf"
	},
	{
		"id": "ee0329b13043",
		"ts": "2026-07-05T20:55:42.473Z",
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
		"liquidityUsd": 16286013.83,
		"hash": "ee0329b13043355a19e613f771b9d4b49b79888638c43d09da74277149f10dba"
	},
	{
		"id": "06b36aff9848",
		"ts": "2026-07-05T20:55:42.720Z",
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
		"liquidityUsd": 1342055.14,
		"hash": "06b36aff9848efdc270d530570aa6c231bee612ce202e4e91a8b21e3c9db50f6"
	},
	{
		"id": "20641c4de85f",
		"ts": "2026-07-05T20:55:42.961Z",
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
		"liquidityUsd": 33003278.6,
		"hash": "20641c4de85f05345473d354238df36dd1b6fc8d280f1f5693d3d91c682750fc"
	},
	{
		"id": "9412b0bf4626",
		"ts": "2026-07-05T20:55:43.212Z",
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
		"liquidityUsd": 4159015.14,
		"hash": "9412b0bf4626e5467cda528bfb354aebb9ac6f1a0e3c0457629765dce95ab9e7"
	},
	{
		"id": "247bfd2bdad7",
		"ts": "2026-07-05T20:55:43.456Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1004002.36,
		"hash": "247bfd2bdad771889718d981f135381581ec4f1a1c6468c5cb9420304588e728"
	},
	{
		"id": "fe0c6867dfdf",
		"ts": "2026-07-05T20:55:43.699Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33003278.6,
		"hash": "fe0c6867dfdfc7df075e41c8e129a76fb436bbe2e48401f6190dae07449f48ea"
	},
	{
		"id": "cace9949c6ed",
		"ts": "2026-07-05T20:55:43.942Z",
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
		"liquidityUsd": 2401682.05,
		"hash": "cace9949c6ed863741ac86e608e4becfc903f3559323f24023965f697fad4f0a"
	},
	{
		"id": "cb2540b029d1",
		"ts": "2026-07-05T20:55:44.207Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 53,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.06,
		"flags": [
			"medium_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 38336.64,
		"hash": "cb2540b029d1876622e92c3d2230d8987ea7d01e5eb24cd99d3a13f5cc4da17a"
	},
	{
		"id": "968ee7be2f5a",
		"ts": "2026-07-05T20:55:44.454Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 694511.92,
		"hash": "968ee7be2f5a280b88a4254e41a53d948e7dbb1b6ad28cb4e4e1f3f899ad24f7"
	},
	{
		"id": "22d8bf3434b6",
		"ts": "2026-07-05T20:55:44.682Z",
		"symbol": "OpenAI",
		"token": "0x006b340bEE30F8425cf65f064712F57B2BC0bB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 517294.4,
		"hash": "22d8bf3434b615424b2becc345281bdef6752d8ad05b986d49536f6513500402"
	},
	{
		"id": "95a21d2dde5f",
		"ts": "2026-07-05T20:55:44.909Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3720942.1,
		"hash": "95a21d2dde5ff5d4b5a730f4450a66c3cf61c891d368e1f2248af8c98b5fb2c1"
	},
	{
		"id": "3c50e80d96d3",
		"ts": "2026-07-05T20:55:45.138Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7899397.73,
		"hash": "3c50e80d96d34ffa611e0a99f6ab3fd3897f6effb6832029041dd31796b0c02b"
	},
	{
		"id": "69e192882d51",
		"ts": "2026-07-05T20:55:45.366Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 411416.37,
		"hash": "69e192882d5122816fd4f98c9ae37a5221e530b877abbab4a3156b1abea9d1f0"
	},
	{
		"id": "9e3cdc85bfd3",
		"ts": "2026-07-05T20:55:45.592Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4788002.15,
		"hash": "9e3cdc85bfd33187b0d20d8655f1e6fe61cac5b3e75b9ac1b466849f5658deb0"
	},
	{
		"id": "c0c652080ae7",
		"ts": "2026-07-05T20:55:45.822Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 578656.2,
		"hash": "c0c652080ae7e07adf1758b181507cd94b537126187381bde71cb91bff365509"
	},
	{
		"id": "713c78da8f43",
		"ts": "2026-07-05T20:55:46.048Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1995469.26,
		"hash": "713c78da8f4320b68aa3f6fe16063f3574d17a89fdbb3de42ec4045b81794578"
	},
	{
		"id": "0fe2fdda68a4",
		"ts": "2026-07-05T20:55:46.274Z",
		"symbol": "Claude",
		"token": "0x7F42440C1E87187F523aE48980E7386508804B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 775757.81,
		"hash": "0fe2fdda68a4aa46ecf25c54f65dcdb8d91d68c10355373df387e24ea1b9f2af"
	},
	{
		"id": "97fae90c4978",
		"ts": "2026-07-05T19:37:34.651Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100780994.93,
		"hash": "97fae90c4978bad8e74a8db61e4362b21bd663232a855ed6ea11d7ec7b43587d"
	},
	{
		"id": "99696f9024f8",
		"ts": "2026-07-05T19:37:35.003Z",
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
		"liquidityUsd": 16279460.57,
		"hash": "99696f9024f8388ff56ce405de0e1bb1a267b2de49d6007c78184cc516789e76"
	},
	{
		"id": "480fd5d8f566",
		"ts": "2026-07-05T19:37:35.191Z",
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
		"liquidityUsd": 1342310.57,
		"hash": "480fd5d8f56642dfd5e9cbe847e6f8c299ff564a4520c0b8d55287cf84b832c3"
	},
	{
		"id": "82bfa6ca9d6d",
		"ts": "2026-07-05T19:37:35.385Z",
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
		"liquidityUsd": 32990683.52,
		"hash": "82bfa6ca9d6d9244bb21b05cf8df83b352c74481fc12a84fc7ebbf6c87aeb3e3"
	},
	{
		"id": "486fc68e7d96",
		"ts": "2026-07-05T19:37:35.579Z",
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
		"liquidityUsd": 4168579.53,
		"hash": "486fc68e7d96b04b786b9a609ed86250ff59caf4b966d6d030d2dfeed3f09fc0"
	},
	{
		"id": "6829d10a781e",
		"ts": "2026-07-05T19:37:35.772Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1003994.85,
		"hash": "6829d10a781ea609451c62587805c690af1372e7be5a9125d4b1d6fcc3882aae"
	},
	{
		"id": "061ffceeaa8d",
		"ts": "2026-07-05T19:37:35.961Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 32990683.52,
		"hash": "061ffceeaa8d129db7564307cc9e3ee6bed1d002f1bee6a34868c8f01a381be4"
	},
	{
		"id": "fda575cc7428",
		"ts": "2026-07-05T19:37:36.154Z",
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
		"liquidityUsd": 2406993.5,
		"hash": "fda575cc742829279d70a70fb0b3d754894e17b842497f04b6f683c4b517757a"
	},
	{
		"id": "92268271a18c",
		"ts": "2026-07-05T19:37:36.354Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 53,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.06,
		"flags": [
			"medium_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 38521.16,
		"hash": "92268271a18c8e4a3d21566000865c578674360f32aa3fc1efabffd6af1a391e"
	},
	{
		"id": "0d5a365023fe",
		"ts": "2026-07-05T19:37:36.544Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 715399.96,
		"hash": "0d5a365023feb684dc38827fa94e5d5e8be89900717cc6a1cd2272bbdab774ea"
	},
	{
		"id": "f8d83dbc914a",
		"ts": "2026-07-05T19:37:36.725Z",
		"symbol": "OpenAI",
		"token": "0x006b340bEE30F8425cf65f064712F57B2BC0bB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 517291.06,
		"hash": "f8d83dbc914abbc86b9999df9c518b4249f8fea621d6eeaeb6fff1ed9d817450"
	},
	{
		"id": "f5d721eff9d0",
		"ts": "2026-07-05T19:37:36.900Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3779406.79,
		"hash": "f5d721eff9d0ef5ec34f4e8288ff6fd67b265cb72eefa28207bbdf75f6905a0d"
	},
	{
		"id": "c7603bce5dcb",
		"ts": "2026-07-05T19:37:37.205Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8002107.02,
		"hash": "c7603bce5dcb322721dee42fecde7a1774c07aae3c8eee5524590064b275093f"
	},
	{
		"id": "52a99206f299",
		"ts": "2026-07-05T19:37:37.382Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 579048.15,
		"hash": "52a99206f2999dfbb9e836bddfcff5ac18c6463c560cd8e2f363927271cc3cda"
	},
	{
		"id": "bb41d7fe508e",
		"ts": "2026-07-05T19:37:37.570Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4790554.56,
		"hash": "bb41d7fe508e3c9edb537b2bc48142e52290e88519d20c5fdb19de38e1c54ea3"
	},
	{
		"id": "6e3615856f6e",
		"ts": "2026-07-05T19:37:37.744Z",
		"symbol": "Claude",
		"token": "0x7F42440C1E87187F523aE48980E7386508804B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 775757.81,
		"hash": "6e3615856f6e8aee5bb6012f6fb2678540b958d2af657f38e740fc32dbd42eb4"
	},
	{
		"id": "db3f3dda20b2",
		"ts": "2026-07-05T19:37:37.925Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 425085.15,
		"hash": "db3f3dda20b259a31041652037c6c74e15733733a7e72bb0c78b361d4e449254"
	},
	{
		"id": "3a392bbad964",
		"ts": "2026-07-05T19:37:38.104Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1963079.39,
		"hash": "3a392bbad96478faff76f1a8acd3266dda8abc20caffb9f83c43d34208c909b5"
	},
	{
		"id": "4248fd54650e",
		"ts": "2026-07-05T17:59:44.969Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100779003.97,
		"hash": "4248fd54650e680e9cda985aa6f7cbae5d65365548d6bf825c39a4a10fd1d9b6"
	},
	{
		"id": "08a7c9fd16f2",
		"ts": "2026-07-05T17:59:45.351Z",
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
		"liquidityUsd": 15458388.54,
		"hash": "08a7c9fd16f2347eab616b5ecca63f04c728021741eb9794a859d7269641a41e"
	},
	{
		"id": "539ffc398bbf",
		"ts": "2026-07-05T17:59:45.708Z",
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
		"liquidityUsd": 1351218.32,
		"hash": "539ffc398bbf2dab402f591accd42823416844082a7c1a8c33cbdb175814aa63"
	},
	{
		"id": "9c4a9ee776c7",
		"ts": "2026-07-05T17:59:46.160Z",
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
		"liquidityUsd": 33216281.89,
		"hash": "9c4a9ee776c747668470c176314ddb60af0b4b06347e5100844c4f0eb0772c5d"
	},
	{
		"id": "ef1f5c21b84b",
		"ts": "2026-07-05T17:59:46.520Z",
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
		"liquidityUsd": 4164487.85,
		"hash": "ef1f5c21b84b107db9b187a200df3260f22225598a5937b95f018d67cb12b4b4"
	},
	{
		"id": "85b8dfd8a19e",
		"ts": "2026-07-05T17:59:46.723Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 991625.31,
		"hash": "85b8dfd8a19ee832de109c3af8359b2b595da0d84e46d9b2a8103ca2871d31f0"
	},
	{
		"id": "d2ce9959b5a5",
		"ts": "2026-07-05T17:59:47.576Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33216281.89,
		"hash": "d2ce9959b5a5e86e5a304f7f085aec8b90ccb051771899e23337dfbcf541606b"
	},
	{
		"id": "c5b193811edf",
		"ts": "2026-07-05T17:59:47.775Z",
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
		"liquidityUsd": 2405499.11,
		"hash": "c5b193811edfe1112b17dafa62f899455380fc0d5c0d60a12845d2bc572af82b"
	},
	{
		"id": "df8bdfbbb2e5",
		"ts": "2026-07-05T17:59:47.975Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 61857.08,
		"hash": "df8bdfbbb2e5bafbb54c9de97f9fd828343e16daf553ec2d3d25b99ac40a0caf"
	},
	{
		"id": "eaf628ec3dd7",
		"ts": "2026-07-05T17:59:48.177Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 679978.04,
		"hash": "eaf628ec3dd7ce74b0f60cc8384745f073600b5392e8443641b9fc955995ef71"
	},
	{
		"id": "f5162bcbf052",
		"ts": "2026-07-05T17:59:48.365Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3624119.16,
		"hash": "f5162bcbf052c774c33186c387d0570195fb2798044501fcc06a5f3476419708"
	},
	{
		"id": "2ee96c6e74d4",
		"ts": "2026-07-05T17:59:48.549Z",
		"symbol": "OpenAI",
		"token": "0x006b340bEE30F8425cf65f064712F57B2BC0bB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 517297.22,
		"hash": "2ee96c6e74d4481016c03e7aaa48a376d1d1812201ad9f462606dddddf1eea64"
	},
	{
		"id": "301c2c9581d5",
		"ts": "2026-07-05T17:59:48.736Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7806916.08,
		"hash": "301c2c9581d5b1f0ebf712fe38e38251fe2850fd996020785f2e9b11775f3495"
	},
	{
		"id": "0d8a72bcf6be",
		"ts": "2026-07-05T17:59:48.921Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 579007.63,
		"hash": "0d8a72bcf6be23916ec9ac05e0adb5822fd0166a2f361af36c74a1b1f2f963ec"
	},
	{
		"id": "dea54148787c",
		"ts": "2026-07-05T17:59:49.169Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4780997.22,
		"hash": "dea54148787c1ecc54b64cc70b212d4f0949305e714805f738552681c7308ace"
	},
	{
		"id": "809420376981",
		"ts": "2026-07-05T17:59:49.355Z",
		"symbol": "Claude",
		"token": "0x7F42440C1E87187F523aE48980E7386508804B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 775757.81,
		"hash": "8094203769810bc922e25a03f8ba3430e1c2e5674d2f87e405dcf45c032be915"
	},
	{
		"id": "2bb3bf361348",
		"ts": "2026-07-05T17:59:49.542Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 432294.09,
		"hash": "2bb3bf3613486e0c5579691f287eb4e4fd777e0486244a489809a2c25e8dbd49"
	},
	{
		"id": "d9fc55f1d57b",
		"ts": "2026-07-05T17:59:49.733Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4823798.11,
		"hash": "d9fc55f1d57b6e7ec174e357d4c4a8fdf6f7cb04d33df047622acf19a9f8af25"
	},
	{
		"id": "be63017f08cc",
		"ts": "2026-07-05T17:59:49.949Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2048217.7,
		"hash": "be63017f08ccaeaf8256a542d4faeeab631f687fa4afa508e05ec3ba0de96c84"
	},
	{
		"id": "154ed5271643",
		"ts": "2026-07-05T16:04:39.748Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100665564.37,
		"hash": "154ed5271643fc1471d940a1ffcc7fb35033ce591ba68b7fdec2d9beea5862b6"
	},
	{
		"id": "40ba2c5e2608",
		"ts": "2026-07-05T16:04:39.952Z",
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
		"liquidityUsd": 15036367.48,
		"hash": "40ba2c5e26081845da68d6f6be5ee0f4f1b9add20e058822d1f9c70a81b5e6c7"
	},
	{
		"id": "bc4525f59848",
		"ts": "2026-07-05T16:04:40.170Z",
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
		"liquidityUsd": 1354532.22,
		"hash": "bc4525f598482a147131fd5dd803ef58877e0f24ce90b1b83f056242a1777866"
	},
	{
		"id": "22b6a313f83a",
		"ts": "2026-07-05T16:04:40.361Z",
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
		"liquidityUsd": 33174488.83,
		"hash": "22b6a313f83adde3af9beec1a514dbbfef11e7f845cb1089769b6626dedbadb4"
	},
	{
		"id": "18a5234ea8a7",
		"ts": "2026-07-05T16:04:40.549Z",
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
		"liquidityUsd": 4160450.09,
		"hash": "18a5234ea8a701481e83b785a88dae85f75c61378653330552f04cf742762502"
	},
	{
		"id": "7cbc74669eaa",
		"ts": "2026-07-05T16:04:40.748Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 991625.31,
		"hash": "7cbc74669eaaf44cf8da8ed6987b1427303dc28e03decb9a70cc207572f8ee5d"
	},
	{
		"id": "a28c17affb97",
		"ts": "2026-07-05T16:04:40.954Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33174488.83,
		"hash": "a28c17affb976b880787c34d654c1907926b08945892ab7ff68a09ec8b24d33b"
	},
	{
		"id": "0b9e4fb593f8",
		"ts": "2026-07-05T16:04:41.154Z",
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
		"liquidityUsd": 2413190.9,
		"hash": "0b9e4fb593f8ebc896c9b5b0509e54cce3fdd50dc0bc1717b1cfc8c6fc7951e7"
	},
	{
		"id": "808e490d76ce",
		"ts": "2026-07-05T16:04:41.340Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 75247.49,
		"hash": "808e490d76ce2b2f6d1129d923e91a6ba6cdd5acd3761aef6baca27aa8471cba"
	},
	{
		"id": "f3bb0555e2f4",
		"ts": "2026-07-05T16:04:41.529Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 704087.21,
		"hash": "f3bb0555e2f4ed2ef167d03b0b0d2ed5e3f9c685ba21156fb5ccf2569d0e9f78"
	},
	{
		"id": "7af16a7578a0",
		"ts": "2026-07-05T16:04:41.714Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7837668.4,
		"hash": "7af16a7578a00452b5588b36873b7356796291a11e7496039f4ab1f8cc846931"
	},
	{
		"id": "915e53e582d9",
		"ts": "2026-07-05T16:04:41.896Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3413471.63,
		"hash": "915e53e582d95ea400515a195fcfb60b298fbd0bdba3d1cc3f0db95ed431c4fd"
	},
	{
		"id": "8f7939bf2d1d",
		"ts": "2026-07-05T16:04:42.067Z",
		"symbol": "OpenAI",
		"token": "0x006b340bEE30F8425cf65f064712F57B2BC0bB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 517223.99,
		"hash": "8f7939bf2d1dcf320184863cb27416a32194c6890b213bda19460aaf831299c2"
	},
	{
		"id": "9a19d953d62c",
		"ts": "2026-07-05T16:04:42.292Z",
		"symbol": "Claude",
		"token": "0x7F42440C1E87187F523aE48980E7386508804B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 775757.81,
		"hash": "9a19d953d62c719fec1d400da74d8f36a32a1fb1265b49e7a4e152f83ed6ea64"
	},
	{
		"id": "5548655bd345",
		"ts": "2026-07-05T16:04:42.470Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4776245.15,
		"hash": "5548655bd3453c46be7968d7c34ea38b1f4dcad77989d2ba2c11cd25098e1ff3"
	},
	{
		"id": "6f6871649577",
		"ts": "2026-07-05T16:04:42.645Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4709000.17,
		"hash": "6f6871649577999bec8eef3d10424e7c10fc4a76522570b9800f0d0e067994ff"
	},
	{
		"id": "c35c43c5706f",
		"ts": "2026-07-05T16:04:42.819Z",
		"symbol": "deployer",
		"token": "0xaE7DC6559AeaAdd8A3c156fe695A650c7095C9cE",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 29901.55,
		"hash": "c35c43c5706f7caf6d4622db9e0131d10f19d0debff17e2e2a227b67c508cd8b"
	},
	{
		"id": "11e5b9a317b9",
		"ts": "2026-07-05T16:04:42.991Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 402191.93,
		"hash": "11e5b9a317b9d7894227beaff801f049a471d7072948a5baea61f06ed033e122"
	},
	{
		"id": "9762ba7c8574",
		"ts": "2026-07-05T16:04:43.174Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 580027.59,
		"hash": "9762ba7c8574a99560cdab9589f8cebcccc3b85e70e5f34e2bc5a29645636210"
	},
	{
		"id": "a430838e95bd",
		"ts": "2026-07-05T14:38:47.444Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100290883.23,
		"hash": "a430838e95bd6df9fbb9d7ee6d4bdf70a97655d30808abad81b5fd85dc111285"
	},
	{
		"id": "70a25eb51884",
		"ts": "2026-07-05T14:38:47.706Z",
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
		"liquidityUsd": 15857608.48,
		"hash": "70a25eb51884bd540a545cf4641e920c8e1b32dc078fa3ac14af22a35f35838c"
	},
	{
		"id": "4f516a55ea62",
		"ts": "2026-07-05T14:38:47.970Z",
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
		"liquidityUsd": 1350425.99,
		"hash": "4f516a55ea6248970c381927af7d01648b02ee79cd33727c8633b790e643e6dc"
	},
	{
		"id": "958091664e80",
		"ts": "2026-07-05T14:38:48.236Z",
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
		"liquidityUsd": 33124573.08,
		"hash": "958091664e80ae110b001399539189805902268acd01e0b32d8c64748ccca2cd"
	},
	{
		"id": "d76b43cb9b44",
		"ts": "2026-07-05T14:38:48.731Z",
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
		"liquidityUsd": 4136113.31,
		"hash": "d76b43cb9b44fc01eee1a8f4a9e31582d8342a1670f5c99b9f064fe4437a36b9"
	},
	{
		"id": "0f4543c6b20c",
		"ts": "2026-07-05T14:38:48.979Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 991625.31,
		"hash": "0f4543c6b20ca095462c65e1f73c6830a5bd0edb0a3e5bf606dbde6ada6f3d09"
	},
	{
		"id": "205722250c7c",
		"ts": "2026-07-05T14:38:49.260Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33124573.08,
		"hash": "205722250c7ca42efe6ebf60ea42cf4252e6666d6fcbcc60a35c29dce82f2caa"
	},
	{
		"id": "faa07aa09830",
		"ts": "2026-07-05T14:38:49.523Z",
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
		"liquidityUsd": 2404799.21,
		"hash": "faa07aa098304ce00ec3b6959051561421bfbe1c7601fb63d0a9d0a7ae989114"
	},
	{
		"id": "28da1aae97c9",
		"ts": "2026-07-05T14:38:49.786Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 670043.12,
		"hash": "28da1aae97c9807d6a0ebb62b6eabdbf1aca2d8dec833e64aa75940f9992e21e"
	},
	{
		"id": "1c096ed0ab1b",
		"ts": "2026-07-05T14:38:50.043Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 82188.77,
		"hash": "1c096ed0ab1bb49f52a2f80b83c562c88225e4db195a9f2751f74f8d7fd3474b"
	},
	{
		"id": "56cf8e028b40",
		"ts": "2026-07-05T14:38:50.292Z",
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
		"liquidityUsd": 7804886.39,
		"hash": "56cf8e028b4035edad689cb4a0093c4b1c99a92a13e3a41c05cd0bcae68ba281"
	},
	{
		"id": "4752ae9e3aa3",
		"ts": "2026-07-05T14:38:50.541Z",
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
		"liquidityUsd": 3356079.9,
		"hash": "4752ae9e3aa3381b2fc3569e41194e6643abd946cd081de22144041ca5ad432e"
	},
	{
		"id": "114263b1b03d",
		"ts": "2026-07-05T14:38:50.790Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 383010.57,
		"hash": "114263b1b03d8cb5517f6d16bf312dd51677fbbbba4715432934e3d48b1f1358"
	},
	{
		"id": "527fb209cd35",
		"ts": "2026-07-05T14:38:51.031Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4754862.19,
		"hash": "527fb209cd350e43b1929357d94930f9cff93a3ec273f61caa29a30509f31132"
	},
	{
		"id": "a35df75c440c",
		"ts": "2026-07-05T14:38:51.282Z",
		"symbol": "Claude",
		"token": "0x7F42440C1E87187F523aE48980E7386508804B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 775367.1,
		"hash": "a35df75c440cca023ecbbe291aa6aa0369eaa0dd025352bb3cfba4874eb5a266"
	},
	{
		"id": "9ee2c12c8f48",
		"ts": "2026-07-05T14:38:51.526Z",
		"symbol": "OpenAI",
		"token": "0x006b340bEE30F8425cf65f064712F57B2BC0bB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 517212.19,
		"hash": "9ee2c12c8f4826a794dca3a6b0eebada393cf63234a2b34afc7b64a74905db60"
	},
	{
		"id": "88339fc1f53b",
		"ts": "2026-07-05T14:38:51.763Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 578086.38,
		"hash": "88339fc1f53befed8b508c1169d259aef99089a607b6cad252a44f93b8053b45"
	},
	{
		"id": "421974b0b1f3",
		"ts": "2026-07-05T14:38:52.004Z",
		"symbol": "AMETA",
		"token": "0x90eC58EF4cc9F37B96DE1e203b65bD4e6E79580E",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 115408.3,
		"hash": "421974b0b1f3db69f20008258740a5a15f2a72f0b141301dc54ea8914ac5c8da"
	},
	{
		"id": "aefc75c1c4e9",
		"ts": "2026-07-05T14:38:52.253Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4699332.85,
		"hash": "aefc75c1c4e913b2d93568d50f3d3fcafa40740c79a889224365f5040761ac91"
	},
	{
		"id": "07ada9faa9cd",
		"ts": "2026-07-05T12:13:16.281Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100300125.97,
		"hash": "07ada9faa9cd5b5fd36f2d76792af46f4ef4c29e6ccb737f93a58ddec6c78607"
	},
	{
		"id": "6cb6720f1f01",
		"ts": "2026-07-05T12:13:16.627Z",
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
		"liquidityUsd": 15430367.98,
		"hash": "6cb6720f1f017d2fc3f5ba126ec59e37bb30f6c8f2997adbb9f17e15a41cb109"
	},
	{
		"id": "8114a807d637",
		"ts": "2026-07-05T12:13:17.002Z",
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
		"liquidityUsd": 1346834.27,
		"hash": "8114a807d637b7b0a450ff96c53fbd268ce6568ef2e98f9f2816844f634c086e"
	},
	{
		"id": "f0059b0555e7",
		"ts": "2026-07-05T12:13:17.188Z",
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
		"liquidityUsd": 32939690.63,
		"hash": "f0059b0555e7699f1f9d378bad2b5d894853bce69f3069f4a805f420b499136b"
	},
	{
		"id": "4c68fb2bc690",
		"ts": "2026-07-05T12:13:17.378Z",
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
		"liquidityUsd": 4113590.71,
		"hash": "4c68fb2bc690ea79ec2323ae9394e5a1f35cc529c7b465bde8617a6956a3d1f6"
	},
	{
		"id": "ee1ce7b6bb30",
		"ts": "2026-07-05T12:13:17.564Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 989883.42,
		"hash": "ee1ce7b6bb30b57d71b45695cbfdb6566736474bfafbda5fe367f468a234461d"
	},
	{
		"id": "b75883ed2cee",
		"ts": "2026-07-05T12:13:17.749Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 32939690.63,
		"hash": "b75883ed2cee7b4bb2859e6606393bda6a169a5c1a13d94db28b22e8762f57df"
	},
	{
		"id": "c6b3dc75c5b8",
		"ts": "2026-07-05T12:13:18.007Z",
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
		"liquidityUsd": 2425292.25,
		"hash": "c6b3dc75c5b8d4c586981c617e72b0ab94000513885a86eeefc87d1514941db9"
	},
	{
		"id": "ab4d06abe0f4",
		"ts": "2026-07-05T12:13:18.199Z",
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
		"liquidityUsd": 7775774.69,
		"hash": "ab4d06abe0f4816c45e0e74b75543b96bad04dbe47b000ba7b72260ff05a4c32"
	},
	{
		"id": "8a501b8ca0a4",
		"ts": "2026-07-05T12:13:18.387Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 675152.72,
		"hash": "8a501b8ca0a494bc5fc2b584d3bbdfad3fc7e090a2fc76d36c911dcae1d529d6"
	},
	{
		"id": "5236a82d24d3",
		"ts": "2026-07-05T12:13:18.847Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3321211.03,
		"hash": "5236a82d24d347764009fec41037af1390eb2178050d080509d6a704a97be43d"
	},
	{
		"id": "66b5774b2352",
		"ts": "2026-07-05T12:13:19.019Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 377174.95,
		"hash": "66b5774b2352b2b987a3bc14e3170d49295dd2aced306381c77435b6461738b4"
	},
	{
		"id": "3c8ebacfa2d1",
		"ts": "2026-07-05T12:13:19.190Z",
		"symbol": "Claude",
		"token": "0x7F42440C1E87187F523aE48980E7386508804B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 823433.88,
		"hash": "3c8ebacfa2d19bb060b5f2fbfe0646285328917345dee8ad24778f49f63ba00f"
	},
	{
		"id": "84da3de85086",
		"ts": "2026-07-05T12:13:19.378Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 96391.92,
		"hash": "84da3de8508632243b5dfb1e5a1b4580714fab1f9bca1432328c370d4b3a804e"
	},
	{
		"id": "63429883f35d",
		"ts": "2026-07-05T12:13:19.570Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 579242.81,
		"hash": "63429883f35d3c8a9846001b93fba9d289f5254d982adcd3f881843a98bd61a3"
	},
	{
		"id": "265300b52239",
		"ts": "2026-07-05T12:13:19.741Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4749674.43,
		"hash": "265300b52239108517bccdc5c4dd23cf78867362123dc32ff043657e9320543b"
	},
	{
		"id": "8c44df078de8",
		"ts": "2026-07-05T12:13:19.945Z",
		"symbol": "AMETA",
		"token": "0x90eC58EF4cc9F37B96DE1e203b65bD4e6E79580E",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 115369.08,
		"hash": "8c44df078de8305afeace84c25c84ed0a8a57153faff09c40c11945b6b9415a0"
	},
	{
		"id": "173ab82272ee",
		"ts": "2026-07-05T12:13:20.119Z",
		"symbol": "OpenAI",
		"token": "0x006b340bEE30F8425cf65f064712F57B2BC0bB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 517210.25,
		"hash": "173ab82272ee7711a33d41b9f958030fb2a51a7fcaa888781347fd5460e49c5a"
	},
	{
		"id": "58eb91e6c795",
		"ts": "2026-07-05T10:08:33.438Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 99959176.39,
		"hash": "58eb91e6c7956e9d4d5df06e6428adcc58b56e4a6b6c18dacec9381c09ec709f"
	},
	{
		"id": "f60dfa0bb2a2",
		"ts": "2026-07-05T10:08:33.689Z",
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
		"liquidityUsd": 15991273.48,
		"hash": "f60dfa0bb2a21a1df51d1645ab11a57dd33bc7526fac1f33d8721cf362e19cc4"
	},
	{
		"id": "52a790c3bae4",
		"ts": "2026-07-05T10:08:33.961Z",
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
		"liquidityUsd": 1348588.87,
		"hash": "52a790c3bae427b1a33bf3f4e9d752cfd31f4ea39fa8b1816d0be7a5b4e1723e"
	},
	{
		"id": "332af2d1540b",
		"ts": "2026-07-05T10:08:34.206Z",
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
		"liquidityUsd": 32822473.66,
		"hash": "332af2d1540baacad5f87e3e9781970c579544134977604357e042e5f3136497"
	},
	{
		"id": "e81024eaa0cf",
		"ts": "2026-07-05T10:08:34.450Z",
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
		"liquidityUsd": 4113115.36,
		"hash": "e81024eaa0cf37cd2671f2931d042a8a921f71114c5f1fafcce83b504508c525"
	},
	{
		"id": "c9e3dd3f1832",
		"ts": "2026-07-05T10:08:34.697Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 989822.99,
		"hash": "c9e3dd3f183205e155063798463d2a9091595a464113c2d2501a79a8ab521c28"
	},
	{
		"id": "060bf0080dbb",
		"ts": "2026-07-05T10:08:34.941Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 32822473.66,
		"hash": "060bf0080dbbe5116acfc08725dd58dc71f14677abc36d93ad46dd859be50681"
	},
	{
		"id": "1bda646f4400",
		"ts": "2026-07-05T10:08:35.187Z",
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
		"liquidityUsd": 2450062.75,
		"hash": "1bda646f44001fdd252d68b960d054524e4414e85ddeba985a7cf1a345612c36"
	},
	{
		"id": "a5da89a36964",
		"ts": "2026-07-05T10:08:35.436Z",
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
		"liquidityUsd": 7769448.76,
		"hash": "a5da89a36964b4cdf97ac995e713090b09cf759cc922cd3783e1504050baa94f"
	},
	{
		"id": "80a04b6a2af8",
		"ts": "2026-07-05T10:08:35.680Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3434107.72,
		"hash": "80a04b6a2af8a9ff5e183bae1ec88e62d501d7399288b30da9676d967c72e93b"
	},
	{
		"id": "10b577ca8162",
		"ts": "2026-07-05T10:08:35.910Z",
		"symbol": "Claude",
		"token": "0x7F42440C1E87187F523aE48980E7386508804B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 825747.87,
		"hash": "10b577ca8162be168c3da6e916820fb9c44f6f65d5868a81e7ddd2875f623884"
	},
	{
		"id": "37ffdc081a0a",
		"ts": "2026-07-05T10:08:36.138Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 369588.23,
		"hash": "37ffdc081a0a55d04c9236d2668945afe5313ad7de4203c1d11dc4187e5a7c6f"
	},
	{
		"id": "e6f294601a57",
		"ts": "2026-07-05T10:08:36.365Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 761019.54,
		"hash": "e6f294601a57bcbd14dfcc9798c122e04d2d450c56fff56baf572f73ef501dc9"
	},
	{
		"id": "df71867323ce",
		"ts": "2026-07-05T10:08:36.595Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2042404.33,
		"hash": "df71867323cee9ae7da96f1cf2f4cb12fb024844119fd961fe6247011bcf777b"
	},
	{
		"id": "2b759b46a847",
		"ts": "2026-07-05T10:08:36.823Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 577392.03,
		"hash": "2b759b46a847995ca51a3406fdc87710401a3a16ff55ad2aae58f545ea129c0f"
	},
	{
		"id": "eb29b8ee681a",
		"ts": "2026-07-05T10:08:37.050Z",
		"symbol": "AMETA",
		"token": "0x90eC58EF4cc9F37B96DE1e203b65bD4e6E79580E",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 115843.06,
		"hash": "eb29b8ee681a7a1a9045aa9a560756f1b935cf88458349c985e8bde042054d50"
	},
	{
		"id": "378ac981a6fa",
		"ts": "2026-07-05T10:08:37.278Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2071769.68,
		"hash": "378ac981a6fa70a12f9034d0e53d1424d86af1c6b20c9b8b35385a145041cab8"
	},
	{
		"id": "a927145b2ded",
		"ts": "2026-07-05T10:08:37.507Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 958900.2,
		"hash": "a927145b2ded828c1246ba5b7bab7779c566d2cb6e425a6c6d7f07e87f5c2571"
	},
	{
		"id": "021c294069c7",
		"ts": "2026-07-05T07:53:56.780Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100300961.55,
		"hash": "021c294069c7029e5c0c4035b41439d09657dceddcaf38666b9c11afccc6366e"
	},
	{
		"id": "2b432990888b",
		"ts": "2026-07-05T07:53:57.026Z",
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
		"liquidityUsd": 16474788.99,
		"hash": "2b432990888b72895e7149776781bb40befc7081b9f840fe6ec8ad6a4911f187"
	},
	{
		"id": "ef427eee9f74",
		"ts": "2026-07-05T07:53:58.201Z",
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
		"liquidityUsd": 1358838.72,
		"hash": "ef427eee9f741b7f4350840dd1645ad673a0b3e8d52249a07699e8a8118adc26"
	},
	{
		"id": "ac7c3ef06c12",
		"ts": "2026-07-05T07:53:58.437Z",
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
		"liquidityUsd": 33176052.67,
		"hash": "ac7c3ef06c128ef7b390b328f2f8a862bdd4cfd23f6363db62ff09b51cbfe8a0"
	},
	{
		"id": "e9374c3a4edd",
		"ts": "2026-07-05T07:53:58.677Z",
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
		"liquidityUsd": 4130008.34,
		"hash": "e9374c3a4edd8cd25b42cf09dd0b241add49fe0e7563fb29c9f8af31bc44e209"
	},
	{
		"id": "cedf4b73a2d1",
		"ts": "2026-07-05T07:53:58.921Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 988865.56,
		"hash": "cedf4b73a2d1733e828be22c160bdc780314eff1fb273bb8fe45da113f461bc2"
	},
	{
		"id": "e8cf26265a6f",
		"ts": "2026-07-05T07:53:59.561Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33176052.67,
		"hash": "e8cf26265a6fa60fd620299a0c85b489173f702461dfbc8974a9d64199fb85be"
	},
	{
		"id": "a35e09fbade7",
		"ts": "2026-07-05T07:54:00.210Z",
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
		"liquidityUsd": 2454603.54,
		"hash": "a35e09fbade74e9fb89e020b740474f2de40b890cdffbce7d18f7aa844a6e19c"
	},
	{
		"id": "fe9603b8c119",
		"ts": "2026-07-05T07:54:00.444Z",
		"symbol": "Claude",
		"token": "0x7F42440C1E87187F523aE48980E7386508804B07",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 857644.39,
		"hash": "fe9603b8c11975e2e1801552c382d5e0d53cd2922cc4a15b60a726f58db080d8"
	},
	{
		"id": "146d040ac39b",
		"ts": "2026-07-05T07:54:00.684Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 3475941.73,
		"hash": "146d040ac39b1156a588555172c15cc10981d2cdc93d9ffdc1788db5840c3d3e"
	},
	{
		"id": "5e8d3c137b54",
		"ts": "2026-07-05T07:54:00.931Z",
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
		"liquidityUsd": 7746080.1,
		"hash": "5e8d3c137b5492e28e56003c96ceeff6fae60517154ae82b503002fa98979226"
	},
	{
		"id": "c873fcd48956",
		"ts": "2026-07-05T07:54:01.168Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 360152.57,
		"hash": "c873fcd489567e81c970414727486b59f245dab848f24312a93de3cd27fde009"
	},
	{
		"id": "5dcc4a14b17b",
		"ts": "2026-07-05T07:54:01.404Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 582930.52,
		"hash": "5dcc4a14b17bc2c38b2d4c60f1c0eaefc46a29c8f1e6a5180cf051edf0348890"
	},
	{
		"id": "d55f0b05c8b6",
		"ts": "2026-07-05T07:54:01.641Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2070531.52,
		"hash": "d55f0b05c8b6b4a3917745d60a805d303d4ef96f03121598410dd1545735ac28"
	},
	{
		"id": "27a3d7edc5b9",
		"ts": "2026-07-05T07:54:01.916Z",
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
		"liquidityUsd": 1530675.34,
		"hash": "27a3d7edc5b9e0667a3bb6d659f47b9bcd38d7c122dce9b5ca46146ee07fa46b"
	},
	{
		"id": "dea93ef24a63",
		"ts": "2026-07-05T07:54:02.194Z",
		"symbol": "PLAY",
		"token": "0x853a7c99227499DbA9dB8C3A02aA691aFDeBf841",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 438522.05,
		"hash": "dea93ef24a632622d9ecdb69f31fe5723b5c268f85c1a165af367fb7341cd4e7"
	},
	{
		"id": "d7a0a60c4fcc",
		"ts": "2026-07-05T07:54:02.442Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2080568.41,
		"hash": "d7a0a60c4fcc0ce0f14d319bbedc8bec1965074490b24d6bd198d16d43bca7f2"
	},
	{
		"id": "fd273b805fd0",
		"ts": "2026-07-05T04:53:50.608Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100320311.51,
		"hash": "fd273b805fd0bca977c080e04923c62e19565e43f6c37e532e8d88cb432416db"
	},
	{
		"id": "59c653f99492",
		"ts": "2026-07-05T04:53:50.871Z",
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
		"liquidityUsd": 16026580.46,
		"hash": "59c653f994922f38a296724736474e3d094b453f6ccc3a83a64ea719e6d006fc"
	},
	{
		"id": "f3894d042b2b",
		"ts": "2026-07-05T04:53:51.138Z",
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
		"liquidityUsd": 1366559.92,
		"hash": "f3894d042b2b4c54ff02153eb4c5f337349a002d3149313fbb7a0a9af96fc9e9"
	},
	{
		"id": "082aa815b811",
		"ts": "2026-07-05T04:53:51.406Z",
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
		"liquidityUsd": 33418600.15,
		"hash": "082aa815b811edd7975fcee7a0c6f5c5a2ffd74af3fc29a52da01d3930f59c11"
	},
	{
		"id": "1f6432eeca0a",
		"ts": "2026-07-05T04:53:51.673Z",
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
		"liquidityUsd": 4137301.16,
		"hash": "1f6432eeca0a04ffab0288a51be7941961b8748023ab8288967b740c49cec836"
	},
	{
		"id": "7a2097cf1bc6",
		"ts": "2026-07-05T04:53:51.931Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 996363.77,
		"hash": "7a2097cf1bc6dd747c68ac807272e07c3aa0bdcc2546546f9c8daf82d830dcc6"
	},
	{
		"id": "017c3f6b890c",
		"ts": "2026-07-05T04:53:52.203Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33418600.15,
		"hash": "017c3f6b890c905d10a66b6832b418e9dc427802a8c02e71822280bdedda462f"
	},
	{
		"id": "bbf697b9e28f",
		"ts": "2026-07-05T04:53:52.468Z",
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
		"liquidityUsd": 2348219.61,
		"hash": "bbf697b9e28fc69e01333029f70ebb0cda00a6a1875859ddbf08b13be7bcbc58"
	},
	{
		"id": "107daae742e3",
		"ts": "2026-07-05T04:53:52.733Z",
		"symbol": "Claude",
		"token": "0x7F42440C1E87187F523aE48980E7386508804B07",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 857584.17,
		"hash": "107daae742e3c81d025b87b8f1773ff65262f2a2718e1ecb542ad7413b90e269"
	},
	{
		"id": "09d28946661a",
		"ts": "2026-07-05T04:53:52.999Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3801206.82,
		"hash": "09d28946661a9ebaa9ddc103c3de37b9f44c51ca22de250c404ea16b4d70f98b"
	},
	{
		"id": "14a52bb70206",
		"ts": "2026-07-05T04:53:53.243Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7740399.73,
		"hash": "14a52bb702064e09dc4319ef58ffbf6771d43a2b6557c9499f0b9c6437b05c13"
	},
	{
		"id": "c22856d7fbcc",
		"ts": "2026-07-05T04:53:53.478Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 375400.6,
		"hash": "c22856d7fbcc4fe6b7854e413442fd16a2156bebef2dc54dee8f94299169f401"
	},
	{
		"id": "eefc083b8be6",
		"ts": "2026-07-05T04:53:53.724Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2107645.51,
		"hash": "eefc083b8be6d05d06e27657920962a8f1b5cf53a92318ed582c8208185d8127"
	},
	{
		"id": "8ac78e333b96",
		"ts": "2026-07-05T04:53:53.976Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 583043.97,
		"hash": "8ac78e333b96bd9c41c04c3c301b220b8e0dfbadc76e66186f247f4f8efa7acd"
	},
	{
		"id": "d885b2aba731",
		"ts": "2026-07-05T04:53:54.227Z",
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
		"liquidityUsd": 1451768.13,
		"hash": "d885b2aba7311f6eb6a85acf4c168ca2835f35d83f849eac40e2fc3458346d56"
	},
	{
		"id": "f51a5f05c91f",
		"ts": "2026-07-05T04:53:54.463Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2089239.1,
		"hash": "f51a5f05c91f99796ee94cb609c42ca9cfa9d437d3448fa61be7564a689d7c7f"
	},
	{
		"id": "6547b2a372b0",
		"ts": "2026-07-05T04:53:54.714Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 980595.03,
		"hash": "6547b2a372b0df9a2875415092fdbe02ce3c15bc9d456ae259b9e34ca5e362d2"
	},
	{
		"id": "7b65e49b2fd0",
		"ts": "2026-07-05T00:01:53.446Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100638643.96,
		"hash": "7b65e49b2fd09ed4603b7c1872facb8928472805d94804b51bc5cc402010de22"
	},
	{
		"id": "a58defc85a98",
		"ts": "2026-07-05T00:01:53.954Z",
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
		"liquidityUsd": 16588408.01,
		"hash": "a58defc85a98cc2f28f65649da73e7fab3e48ff04eff5854f7e9f24bc65520cc"
	},
	{
		"id": "822c4adbc7eb",
		"ts": "2026-07-05T00:01:54.216Z",
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
		"liquidityUsd": 1380935.47,
		"hash": "822c4adbc7eb06d34aa38d66e559909a3209c501d62ac389101f9746ff958a4e"
	},
	{
		"id": "4ce515aeb4e7",
		"ts": "2026-07-05T00:01:54.491Z",
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
		"liquidityUsd": 33570690.86,
		"hash": "4ce515aeb4e79205704acfcc05d392a970ef7b96dda5d97205d9cc54f600510f"
	},
	{
		"id": "912f41205dc2",
		"ts": "2026-07-05T00:01:54.765Z",
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
		"liquidityUsd": 4167599.89,
		"hash": "912f41205dc295ae6ce9e4cdbe31d4ee1d6775b0830be9b93630a94708ac8545"
	},
	{
		"id": "23786de7749a",
		"ts": "2026-07-05T00:01:55.034Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1009188.36,
		"hash": "23786de7749aa4332fc2d00b72476ab52144a21c578fff6a29735d63b3917ad1"
	},
	{
		"id": "b619171a002e",
		"ts": "2026-07-05T00:01:55.295Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33570690.86,
		"hash": "b619171a002e65109af68eb7b0d56212b09c2d86d12748f473619c0208f27f5a"
	},
	{
		"id": "3a416f328084",
		"ts": "2026-07-05T00:01:55.564Z",
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
		"liquidityUsd": 2438344.76,
		"hash": "3a416f3280840dfc3580deee50f48f7063647c88af0b5f754a815056504e4f08"
	},
	{
		"id": "beaf080d2645",
		"ts": "2026-07-05T00:01:55.819Z",
		"symbol": "Claude",
		"token": "0x7F42440C1E87187F523aE48980E7386508804B07",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 857690.79,
		"hash": "beaf080d2645d13ce537194a8eed037599611171cb0f333fb0bdd43d7d831421"
	},
	{
		"id": "3c22c0fa6f1d",
		"ts": "2026-07-05T00:01:56.089Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2198046.37,
		"hash": "3c22c0fa6f1d490d61a6d5fadbe3bf8199fdf409f56ef90a5fe8855555a73c2a"
	},
	{
		"id": "2b9ee1f990e6",
		"ts": "2026-07-05T00:01:56.331Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 372706.44,
		"hash": "2b9ee1f990e6a5154b37d99206e7beee30bda298c40d104e0b178253f7db8eab"
	},
	{
		"id": "18995f7a2033",
		"ts": "2026-07-05T00:01:56.582Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3646996.22,
		"hash": "18995f7a2033a97cea806dba4c08b92f5e2bb03db5dd10eaa7e725ed35cf3794"
	},
	{
		"id": "58165ad633ae",
		"ts": "2026-07-05T00:01:56.825Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7985095.54,
		"hash": "58165ad633ae6b2c669a23e8d3bae12f388df478ebbe80519728bede349ca483"
	},
	{
		"id": "a6b8a10a90f6",
		"ts": "2026-07-05T00:01:57.078Z",
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
		"liquidityUsd": 1487529.66,
		"hash": "a6b8a10a90f6901364c805ae9ac1997c558e2963d376e3671c8b7e27ee071d1b"
	},
	{
		"id": "627712e7bdf6",
		"ts": "2026-07-05T00:01:57.320Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4642126.96,
		"hash": "627712e7bdf6a28883cccc136c5ba9a17797298e47f847315aab15a4c256075e"
	},
	{
		"id": "fe88b46da99d",
		"ts": "2026-07-05T00:01:57.573Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2106909.72,
		"hash": "fe88b46da99d67b4093cff15c190a0e315e56353498438df4e5d6bcf7a8377ea"
	},
	{
		"id": "b2757d1c24e7",
		"ts": "2026-07-05T00:01:57.814Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2040811.11,
		"hash": "b2757d1c24e780ef334a9fe62f27453bcb7279c55066beadc5635440377cd586"
	},
	{
		"id": "545525b37808",
		"ts": "2026-07-04T22:56:49.162Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100832589.76,
		"hash": "545525b37808ca803f4dd5c29996660c8aa280a3c3aec0ae55481bf7968a470a"
	},
	{
		"id": "605c81cee5c7",
		"ts": "2026-07-04T22:56:49.659Z",
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
		"liquidityUsd": 15878721.2,
		"hash": "605c81cee5c79652a8318cbbe8c29b078ee2a682f7975f238662a0752e2f86e3"
	},
	{
		"id": "5cc77a9a4751",
		"ts": "2026-07-04T22:56:49.922Z",
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
		"liquidityUsd": 1381911.71,
		"hash": "5cc77a9a4751bee4fd9af0476717d55c0fac4637f6acce05202ab0559ae8cb56"
	},
	{
		"id": "4be7a08f6ebf",
		"ts": "2026-07-04T22:56:50.190Z",
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
		"liquidityUsd": 33540582.02,
		"hash": "4be7a08f6ebf5f91ab2d7b46bc0fe86cfb40abc253219962d12dc63cef8ae303"
	},
	{
		"id": "c7afbe390529",
		"ts": "2026-07-04T22:56:50.458Z",
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
		"liquidityUsd": 4174472.49,
		"hash": "c7afbe390529fe227485e51bd52dc90fa1cce499b94a2cb6150cc16b0501add9"
	},
	{
		"id": "e8038f871fa6",
		"ts": "2026-07-04T22:56:50.722Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1009188.36,
		"hash": "e8038f871fa606d76818128b6b00329738de034d08306470a993c1b2a5ca00f2"
	},
	{
		"id": "55b198ba3178",
		"ts": "2026-07-04T22:56:50.983Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33540582.02,
		"hash": "55b198ba31787dc3424fd471d1f3f5df65d0ab7ca2bcb050ae0a1166b41e819c"
	},
	{
		"id": "ad27c1f04440",
		"ts": "2026-07-04T22:56:51.250Z",
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
		"liquidityUsd": 2443751.57,
		"hash": "ad27c1f044409b2492e63086623ac2de1ba3f8791084ca90e3acb72f430e2c48"
	},
	{
		"id": "7e26ac8b2915",
		"ts": "2026-07-04T22:56:51.513Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2206747.18,
		"hash": "7e26ac8b29155965b88f0c42413cf94a970b977f7f0e5206301b51fa82b765fe"
	},
	{
		"id": "6571a0d3d267",
		"ts": "2026-07-04T22:56:51.780Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 377439.08,
		"hash": "6571a0d3d2673fa5809973d90e4035f11405f827031d856ee6cfc0de09e753e5"
	},
	{
		"id": "15f67f654a93",
		"ts": "2026-07-04T22:56:52.024Z",
		"symbol": "Claude",
		"token": "0x7F42440C1E87187F523aE48980E7386508804B07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 857669.15,
		"hash": "15f67f654a934d5b2e62a720fac3cd1571dc92c7350d8b372015d8f91405401a"
	},
	{
		"id": "30c2dd6e270d",
		"ts": "2026-07-04T22:56:52.272Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3603644.73,
		"hash": "30c2dd6e270d6cda4d1570741089d644105bd042acc284626d9431bb1937c540"
	},
	{
		"id": "122fb17a42c8",
		"ts": "2026-07-04T22:56:52.515Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8028498.32,
		"hash": "122fb17a42c883b2508e66135f5b4d214bcb69cecb41ce9268c48d8c81fac4b6"
	},
	{
		"id": "391c2fa6f361",
		"ts": "2026-07-04T22:56:52.764Z",
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
		"liquidityUsd": 1515894.93,
		"hash": "391c2fa6f361fbfe1d1c6a79be92b96ebe14dddb844566a6ff181ace5c6de76e"
	},
	{
		"id": "9dbb20602427",
		"ts": "2026-07-04T22:56:53.007Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4769861.08,
		"hash": "9dbb20602427f8b0468407b65b708227f7d4e31fcd8b533cb29508e9ed7b8757"
	},
	{
		"id": "a7f8acf1d335",
		"ts": "2026-07-04T22:56:53.256Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2088631.58,
		"hash": "a7f8acf1d3356bec6fd3379ea714d6b4f5801be4cb7939f29471f8e0941c07c4"
	},
	{
		"id": "0570b4b141e2",
		"ts": "2026-07-04T22:56:53.502Z",
		"symbol": "AMETA",
		"token": "0x90eC58EF4cc9F37B96DE1e203b65bD4e6E79580E",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 118390.05,
		"hash": "0570b4b141e29e49b507f737620f738ddeec8300cf808f8c9bc9f1fd61cfd78c"
	},
	{
		"id": "be5b78bb286e",
		"ts": "2026-07-04T21:56:03.955Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100841594.53,
		"hash": "be5b78bb286e42280ce7c6d5d86e7c7b19a503c283e78f5ac2ba22d5c7f84a96"
	},
	{
		"id": "c4a6b2cdb105",
		"ts": "2026-07-04T21:56:04.294Z",
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
		"liquidityUsd": 16306328.49,
		"hash": "c4a6b2cdb105e88ffb5d45c36267d50b8224dfa2d156394f250ff875edd7f007"
	},
	{
		"id": "6ef1e3730a6f",
		"ts": "2026-07-04T21:56:04.479Z",
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
		"liquidityUsd": 1388665.71,
		"hash": "6ef1e3730a6ff34d9ffde313382ac6f8183136ee7267b2500a5e85e2e764e66a"
	}
]
