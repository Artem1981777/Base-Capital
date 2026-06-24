# Base Capital

**x402 onchain risk-intelligence API for AI trading agents on Base.**

AI trading agents need to check a token before they swap. Base Capital answers
that in one paid request: an agent calls the endpoint, gets `402 Payment
Required`, pays ~$0.01 USDC over x402, and receives a JSON risk score.

**Every paid call is one USDC transaction stamped with your Base Builder Code
(`bc_kob8hqa0`) — so it counts toward Builder Rewards.** The agent pays the
API fee in USDC; gas is sponsored by the facilitator, so you pay nothing.

---

## How it earns

1. Agent calls `GET /v1/risk/{token}` → server returns `402` with payment terms.
2. Agent pays USDC; the **xpay facilitator** (`facilitator.xpay.sh`) settles on
   Base and appends the **ERC-8021 attribution suffix** carrying your Builder
   Code. Payments are gasless (EIP-3009) — the facilitator sponsors gas.
3. The transaction is attributed to you; payout goes to **`artem00777.base.eth`**.
4. The endpoint exposes an x402 manifest at `/` so any x402 client can discover
   its terms. (x402 Bazaar auto-indexing is specific to the CDP facilitator; with
   the keyless xpay facilitator, list it manually for a Bazaar presence.)

---

## Project layout

\`\`\`
base-capital/
  src/
    config.ts          # env + testnet/mainnet switch, builder code, payout
    app.ts             # Express app + x402 payment middleware + route
    server.ts          # local dev entry (npm run dev)
    lib/
      dexscreener.ts   # free market data (liquidity, volume, age)
      onchain.ts       # free RPC reads (owner, totalSupply) via viem
      risk.ts          # 0-100 scoring logic
      cache.ts         # TTL cache to respect free rate limits
  api/index.ts         # Vercel serverless entry
  .env.example
  vercel.json
\`\`\`

## The endpoint

`GET /v1/risk/{token}` — `$0.01` USDC

\`\`\`json
{
  "token": "0x...",
  "score": 72,
  "rating": "medium",
  "flags": ["medium_liquidity", "owner_not_renounced"],
  "data": {
    "liquidityUsd": 38000,
    "priceUsd": "0.0123",
    "volume24h": 91000,
    "ageHours": 53.2,
    "owner": "0x...",
    "ownerRenounced": false,
    "totalSupply": "1000000000000000000000000",
    "dex": "uniswap",
    "pairAddress": "0x..."
  },
  "disclaimer": "Heuristic score, not a buy/sell simulation...",
  "generatedAt": "2026-06-23T09:00:00.000Z"
}
\`\`\`

---

## Run it

\`\`\`bash
npm install
cp .env.example .env      # defaults: testnet, payTo + builder code prefilled
npm run dev               # http://localhost:3000
\`\`\`

Test the free manifest:

\`\`\`bash
curl http://localhost:3000/
\`\`\`

The paid route returns `402` to an unpaid `curl`. To call it as a paying client,
use an x402 client (`@x402/fetch`) with a funded wallet. Start on **testnet**
(Base Sepolia) — free, no keys.

## Go to mainnet (real rewards)

1. **No facilitator keys needed** — Base Capital uses the keyless **xpay
   facilitator** (`https://facilitator.xpay.sh`), non-custodial and gas-sponsored.
2. Set `NETWORK_MODE=mainnet`.
3. Confirm your Builder Code `bc_kob8hqa0` payout address is `artem00777.base.eth`
   at https://dashboard.base.org → your app → Builder Codes.
4. Redeploy. That's the only switch.

## Deploy free (Vercel)

\`\`\`bash
npm i -g vercel
vercel
\`\`\`

You get a free `*.vercel.app` domain — use it to verify the app on base.dev so
attributed activity shows in your builder dashboard.

---

## Cost = $0 to start

| Item | Cost |
|---|---|
| Hosting (Vercel) | free tier |
| Web domain (`*.vercel.app`) | free |
| Base RPC | free (`mainnet.base.org`) |
| Market data (DexScreener 60/min, GeckoTerminal 30/min) | free, no keys |
| Builder Code attribution | free (calldata) |
| Facilitator (xpay, USDC on Base) | no facilitator fee |
| Gas on paid calls | sponsored by facilitator (gasless EIP-3009) |

The in-memory cache keeps popular-token bursts under the free data rate limits.
If volume outgrows the free tier, that means rewards are flowing — then add a
paid data source.

---

## Roadmap

- **Phase 2:** `GET /v1/signal/trending` ($0.005), `GET /v1/wallet/{address}` ($0.005)
- **Moat:** cryptographically signed response receipts (cf. AgentOracle)
- Holder-concentration + LP-lock checks via an indexer

## Honest limitations

- Honeypot detection is **heuristic**, not a buy/sell simulation — false
  negatives are possible.
- The x402 Bazaar and the agent economy are early; call volume may start low.
- Builder Rewards require a Basename + Builder Score ≥ 40 + Human checkmark +
  real attributed volume. Not guaranteed income.
- Verify the `@x402/express` middleware signature and the Builder Code field
  against current docs before mainnet — the SDK changes quickly.

Not financial advice.
