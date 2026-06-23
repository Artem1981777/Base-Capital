# Base Capital

**x402 onchain risk-intelligence API for AI trading agents on Base.**

AI trading agents need to check a token before they swap. Base Capital answers
that in one paid request: an agent calls the endpoint, gets `402 Payment
Required`, pays ~$0.01 USDC over x402, and receives a JSON risk score.

**Every paid call is one USDC transaction stamped with your Base Builder Code
(`bc_dyp4dswh`) — so it counts toward Builder Rewards.** The agent pays gas and
the API fee, not you.

---

## How it earns

1. Agent calls `GET /v1/risk/{token}` → server returns `402` with payment terms.
2. Agent pays USDC; the CDP facilitator settles on Base and appends the
   **ERC-8021 attribution suffix** carrying your Builder Code.
3. The transaction is attributed to you; payout goes to **`artem00777.base.eth`**.
4. Once the facilitator processes a payment with the discovery extension on, the
   endpoint is **auto-indexed in the x402 Bazaar** — agents find it themselves.
   No separate registration.

---

## Project layout

```
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
```

## The endpoint

`GET /v1/risk/{token}` — `$0.01` USDC

```json
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
```

---

## Run it

```bash
npm install
cp .env.example .env      # defaults: testnet, payTo + builder code prefilled
npm run dev               # http://localhost:3000
```

Test the free manifest:

```bash
curl http://localhost:3000/
```

The paid route returns `402` to an unpaid `curl`. To call it as a paying client,
use an x402 client (`@x402/fetch`) with a funded wallet. Start on **testnet**
(Base Sepolia) — free, no keys.

## Go to mainnet (real rewards)

1. Get **free CDP keys** at https://portal.cdp.coinbase.com and put them in `.env`.
2. Set `NETWORK_MODE=mainnet`.
3. Confirm your Builder Code `bc_dyp4dswh` payout address is `artem00777.base.eth`
   at https://base.dev → Settings → Builder Codes.
4. Redeploy. That's the only switch.

## Deploy free (Vercel)

```bash
npm i -g vercel
vercel
```

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
| Facilitator (USDC on Base) | no facilitator fee |
| Gas on paid calls | paid by the buyer |

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
