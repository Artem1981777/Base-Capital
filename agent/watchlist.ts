// Tokens the autonomous risk agent scores every tick. Extend freely.
export type WatchToken = { symbol: string; address: string }

export const WATCHLIST: WatchToken[] = [
	{ symbol: "WETH", address: "0x4200000000000000000000000000000000000006" },
	{ symbol: "cbBTC", address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf" },
	{ symbol: "DEGEN", address: "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed" },
	{ symbol: "AERO", address: "0x940181a94A35A4569E4529A3CDfB74e38FD98631" },
	{ symbol: "VIRTUAL", address: "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b" },
	{ symbol: "BRETT", address: "0x532f27101965dd16442E59d40670FaF5eBB142E4" },
	{ symbol: "USDC", address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913" },
	{ symbol: "cbETH", address: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22" },
]
