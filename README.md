# Base Capital

> 🪪 **Agent identity (ERC-8004):** registered on Base mainnet — agentId `57556` in IdentityRegistry [`0x8004A169…a432`](https://basescan.org/address/0x8004A169FB4a3325136EB29fA0ceB6D2e539a432).
> Owner & agent wallet `0x404d641eB58352c5AA23aF6b16d08f0C979f6778` · on-chain `tokenURI` metadata · [register tx](https://basescan.org/tx/0xf27f29322becb6a27c2dcc144e01f4f9d5a0991506e9aadad85887f29b625bbf).


**On-chain risk intelligence for Base — an autonomous agent that stakes real USDC behind every verdict, and a paid x402 API that AI trading agents can call before they swap.**

- 🌐 Live app: https://base-capital.vercel.app
- 🔗 RiskStake v1.0 contract (verified) — see v3 below: https://basescan.org/address/0x21d49dE1f154FF49608acbc750926e6d7Db22cCB#code
- 🏗 Built on Base mainnet · paid in USDC over [x402](https://www.x402.org) · attributed to Builder Code `bc_kob8hqa0`

---

## Why it's different

Most "risk score" APIs just *say* a token is safe. Base Capital's autonomous agent **puts money on it**: every verdict it publishes is also committed on-chain with a USDC stake in the `RiskStake` contract.

- A **correct** verdict → the stake is returned.
- A **wrong** verdict → the stake is **slashed to the treasury**.

The agent's entire track record — total staked, slashed, returned, and accuracy — is queryable on-chain by anyone, with **zero trust** in us. That is the moat: verifiable skin-in-the-game reputation for an AI agent.

---

## How it works

```mermaid
flowchart TD
    A["Hourly Risk Agent (agent/tick.ts)"] -->|"scores watchlist"| B["Verdict log (src/data/log.ts)"]
    B --> C["Free + paid API (Express + x402)"]
    A2["Hourly Stake Agent (agent/stake.ts)"] -->|"stakes / resolves USDC"| D["RiskStake contract on Base"]
    D -->|"getAgentStats()"| C
    C -->|"GET /v1/risk/:token ($0.01 USDC)"| E["AI trading agents"]
    C -->|"landing + live reputation"| F["Humans / judges"]
```

1. **Risk Agent** (`agent/tick.ts`, hourly) scores a watchlist of Base tokens 0–100 using free market + on-chain signals, and publishes a verdict log.
2. **Stake Agent** (`agent/stake.ts`, hourly) commits each fresh verdict on-chain with a $1 USDC stake, and resolves matured verdicts (return on correct, slash on wrong).
3. **API** serves the verdicts: free preview/feed/stats endpoints power the landing, paid x402 endpoints serve AI agents. Each paid call is a USDC transaction stamped with the Builder Code, counting toward Builder Rewards.
4. **On-chain reputation** is read live from the verified contract and surfaced on the landing page.

---

## On-chain layer — RiskStake (v1.0)

Minimal, audited-style staking contract (single file, no external dependencies). Verified on BaseScan.

| | |
|---|---|
| Contract | [`0x21d49dE1f154FF49608acbc750926e6d7Db22cCB`](https://basescan.org/address/0x21d49dE1f154FF49608acbc750926e6d7Db22cCB) (v1.0 — legacy; superseded by v3 below) |
| Network | Base mainnet (`eip155:8453`) |
| Stake asset | USDC `0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913` |
| Roles | `owner` (admin) · `oracle` (resolves) · `treasury` (receives slashes) — three independent on-chain roles |
| Stake per verdict | configurable, default **$1** (bounds $1–$1000) |
| Rescue | **48-hour timelock** + events (no instant drain) |

Key functions:

- `commitVerdict(id, token, rating, stake)` — agent stakes USDC behind a verdict (`rating`: 0 SAFE / 1 RISKY / 2 LIKELY_RUG). Stake must be within `[minStake, maxStake]`.
- `resolveVerdict(id, correct, proofHash)` — **`onlyOracle`**, `nonReentrant`, maturity-guarded. Publishes the deterministic resolution proof hash on-chain. Correct → stake returned; wrong → slashed to treasury.
- `getAgentStats(agent)` — public read: `totalVerdicts, totalStaked, totalSlashed, totalReturned, correct, wrong, accuracyBps, totalAtRisk, slashRateBps`.
- `pendingCount()` / `getPending(offset, limit)` — enumerate unresolved verdicts.
- `queueRescue` / `executeRescue` / `cancelRescue` — timelocked admin recovery (48h); every step emits an event.

---

## On-chain layer v3 — optimistic resolution & agentId reputation (live)

> **v3 is the current deployment.** It supersedes the one-step `resolveVerdict` flow above with **optimistic resolution + a public challenge window**, binds reputation to the agent's **ERC-8004 agentId** (not a raw address, so the signing key can rotate without losing track record), and adds **independently reproducible proofs** (on-chain rule version + input-snapshot pointer). Roles, stake bounds and the 48h timelocked rescue are unchanged.

| | |
|---|---|
| Contract (v3) | [`0x0eC7de61eE08659743A896FeB15BfB99361f440e`](https://basescan.org/address/0x0eC7de61eE08659743A896FeB15BfB99361f440e) — **verified (Sourcify `exact_match`)** |
| Legacy (v2) | [`0x21d49dE1f154FF49608acbc750926e6d7Db22cCB`](https://basescan.org/address/0x21d49dE1f154FF49608acbc750926e6d7Db22cCB) — original track record, retained read-only |
| Agent identity | ERC-8004 agentId `57556` · signer `0x404d641eB58352c5AA23aF6b16d08f0C979f6778` |
| Network · stake asset | Base mainnet (`eip155:8453`) · USDC `0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913` |

**Optimistic resolution flow:**

1. `commitVerdict(id, token, rating, stake)` — the signer must be a **registered agentId** (`registerAgent` / `rotateAgentSigner`); reputation accrues to the agentId.
2. `proposeResolution(id, correct, proofHash, ruleVersion, snapshotURI)` — **`onlyOracle`**, maturity-guarded. Posts the outcome **optimistically** and opens a **1h challenge window**; `proofHash`, on-chain `ruleVersion`, and the `snapshotURI` input pointer are all stored on-chain.
3. `challengeResolution(id)` — **anyone** can dispute within the window by posting a USDC bond.
4. `finalize(id)` — after the window elapses unchallenged, anyone can settle: correct → stake returned; wrong → slashed to treasury.
5. `resolveChallenge(id, challengeSucceeded)` — **`onlyOwner`** arbitrates a dispute: a successful challenge flips the outcome, returns the bond, and pays the challenger `challengeRewardBps` (default **50%**) of the slashed stake; a failed challenge sends the bond to the treasury.

- `getAgentStats(agentId)` — public read keyed by agentId: `totalVerdicts, totalStaked, totalSlashed, totalReturned, correct, wrong, accuracyBps, totalAtRisk, slashRateBps, identityAgeSeconds`.
- `pendingCount()` / `getPending(offset, limit)` — **O(1)** pending index (swap-pop), so enumeration cost no longer grows with history.
- `setChallengeParams(window, bond, rewardBps)` — owner-tunable challenge economics.

Tests: Foundry suite **16/16 passing** (`forge test --via-ir`) — commit, register/rotate, propose/finalize, challenge/resolve (both outcomes), bond accounting, maturity & bound guards, and the O(1) pending invariants.

---

## Resolution policy

Verdicts are resolved by a **deterministic rule**, not human discretion — anyone can predict and verify the outcome. The rule below is the single source of truth for every resolution.

At maturity the token is re-assessed live and classified as a *hard rug* if any of these flags are present: `honeypot`, `sim_honeypot`, `sim_extreme_sell_tax`, `cannot_sell_all`, `cannot_buy`.

- **SAFE (0)** is correct ⟺ the token is **not** a hard rug **and** its score ≥ 75.
- **RISKY (1) / LIKELY_RUG (2)** is correct ⟺ the token **is** a hard rug **or** its score < 75.

The agent computes a `keccak256` **proof hash** over the resolution snapshot (token, score, flags, rule version) and then:

1. passes it to `proposeResolution(...)` (settled by `finalize` after the 1h challenge window) so it is stored **on-chain**, and
2. prints it to the public CI logs.

Anyone can recompute the hash from the published verdict plus this rule and confirm the resolution was not tampered with.

---

## Trust model

- **Separation of powers.** The contract enforces three independent roles — `owner` (config/admin), `oracle` (the *only* address allowed to resolve verdicts) and `treasury` (receives slashed stakes) — each of which can be a distinct key. In the current deployment `treasury` is a **separate** address from the operator, so slashed stakes leave the agent's control entirely (recoverable only via the public 48h timelock). `owner`/`oracle` are run by the operator; resolution is trustless not through key custody but through the **deterministic rule + on-chain proof hash**, which anyone can recompute. The contract is therefore ready for full key separation / decentralization without redeployment.
- **Bounded authority.** `resolveVerdict` is `onlyOracle`, `nonReentrant`, and cannot run before a verdict reaches `minMaturity`.
- **Real skin in the game.** Stakes are bounded and default to **$1** (vs the previous $1). `getAgentStats` exposes `totalAtRisk` and `slashRateBps`, so the agent's live exposure and historical loss rate are public.
- **No silent drain.** Admin fund recovery is **timelocked 48h** with events at queue / execute / cancel — token holders always get notice.

---

## Security

- **No unbounded `rescue()`.** The previous instant-withdraw escape hatch is replaced by a 48-hour **timelocked** rescue (`queueRescue` → wait → `executeRescue`), cancellable via `cancelRescue`, with an event at every step.
- **Reentrancy-guarded** state-changing calls (`nonReentrant`).
- **Maturity guard** prevents premature resolution.
- **Minimal surface:** single-file contract, no external dependencies, Solc 0.8.24, optimizer (200 runs).
- **Tests:** Foundry suite **17/17 passing** — commit/resolve/return/slash, role enforcement (`onlyOracle` / `onlyOwner`), maturity guard, stake-bound checks, and the full timelock lifecycle. Reproduce with `forge test -vv`.

---

## API

Base URL: `https://base-capital.vercel.app`

| Method & path | Price | Description |
|---|---|---|
| `GET /v1/risk/:token` | $0.01 USDC | Full risk score for a Base token (liquidity, LP, ownership, age, flags). x402-gated. |
| `GET /v1/signal/trending` | $0.01 USDC | Risk-ranked watchlist, riskiest first. Built for agent-to-agent use. x402-gated. |
| `GET /v1/preview/:token` | free (20/min/IP) | Same scoring as the paid route; powers the browser demo. |
| `GET /v1/feed?limit=` | free | Recent autonomous agent verdicts. |
| `GET /v1/stats` | free | Autonomous agent activity stats. |
| `GET /v1/onchain/stats` | free | Live RiskStake reputation (staked, slashed, accuracy). |
| `GET /` | free | Landing page (HTML), or JSON manifest via `Accept: application/json`. |
| `GET /manifest` | free | x402 manifest. |

Example — paid risk score response:

```json
{
  "token": "0x...",
  "score": 72,
  "rating": "medium",
  "flags": ["medium_liquidity", "owner_not_renounced"],
  "data": { "liquidityUsd": 38000, "volume24h": 91000, "ageHours": 53.2, "ownerRenounced": false },
  "disclaimer": "Heuristic score combining market data, on-chain reads, GoPlus and a live honeypot.is simulation.",
  "generatedAt": "2026-06-24T07:00:00.000Z"
}
```

The paid routes return `402 Payment Required` to an unpaid request. To call them, use an x402 client (e.g. `@x402/fetch`) with a funded wallet. Payments are gasless (EIP-3009): the keyless **xpay facilitator** (`facilitator.xpay.sh`) sponsors gas and settles USDC directly to the payout address.

---

## Builder Rewards attribution

Every paid call carries the Base Builder Code `bc_kob8hqa0` via the ERC-8021 attribution extension, so attributed USDC volume counts toward [Builder Rewards](https://www.base.dev). Payout resolves to the Basename **`artem00777.base.eth`**. The landing page embeds the Base App id (`6a3a6b5ad79487d5e6aaca0a`) meta tag for `base.dev` domain verification.

---

## Tech stack

- **Runtime:** Node 22+, TypeScript (ESM), Express
- **Payments:** `@x402/express`, `@x402/core`, `@x402/evm`, `@x402/extensions` (Builder Code)
- **Chain:** [viem](https://viem.sh) against Base mainnet; Foundry (`forge`) for the contract
- **Data:** DexScreener + GeckoTerminal (free tiers), on-chain reads via public RPC, 60s TTL cache
- **Hosting:** Vercel (serverless) — free tier
- **Automation:** GitHub Actions (hourly risk tick + hourly on-chain stake/resolve)

---

## Project layout

```
base-capital/
  contracts/
    RiskStake.sol        # on-chain staking + reputation (verified)
  agent/
    watchlist.ts         # tracked Base tokens
    tick.ts              # hourly risk scoring -> verdict log
    stake.ts             # hourly on-chain commit + resolve
  src/
    config.ts            # env, testnet/mainnet switch, addresses, builder code
    app.ts               # Express app + x402 gate + all routes
    server.ts            # local dev entry
    landing.ts           # HTML landing + live on-chain reputation block
    data/log.ts          # published verdict log (regenerated each tick)
    lib/
      dexscreener.ts     # free market data
      onchain.ts         # free RPC reads (owner, supply)
      risk.ts            # 0-100 scoring
      verdict.ts         # classify + deterministic verdict id (SHA-256)
      stake.ts           # viem client for RiskStake (read + write)
      cache.ts           # TTL cache
  api/index.ts           # Vercel serverless entry
  .github/workflows/
    agent.yml            # hourly risk tick
    stake.yml            # hourly on-chain stake/resolve
    deploy-contract.yml  # one-shot contract deploy (manual)
  foundry.toml
  vercel.json
```

---

## Run locally

```bash
npm install
cp .env.example .env      # defaults to testnet (Base Sepolia) — free, no keys
npm run dev               # http://localhost:3000

curl http://localhost:3000/manifest
curl http://localhost:3000/v1/preview/0x4200000000000000000000000000000000000006
```

Go to mainnet by setting `NETWORK_MODE=mainnet` (the contract address, USDC, RPC and xpay facilitator are all selected automatically in `config.ts`). No facilitator API keys required.

---

## Automation (GitHub Actions)

- **`agent.yml`** — runs `agent/tick.ts` every hour: re-scores the watchlist and commits the updated verdict log.
- **`stake.yml`** — runs `agent/stake.ts` every hour: commits fresh verdicts on-chain (budget-capped) and resolves matured ones. Needs the `DEPLOYER_PRIVATE_KEY` repo secret.
- **`deploy-contract.yml`** — manual `workflow_dispatch` to deploy `RiskStake` with Foundry.

All on-chain actions are bounded: max 1 commit and 3 resolves per run, $1 stake each.

---

## Backtest results

The risk engine is validated against an **independent** ground-truth oracle — [honeypot.is](https://honeypot.is) buy/sell **simulation** (chainID 8453), which forks chain state and simulates a real buy then sell. It is independent of our DexScreener / GoPlus / owner heuristics, so it is a fair judge.

**Universe (latest run):** 39 candidate Base tokens — blue-chip controls + watchlist + live GeckoTerminal discovery + a low-liquidity new-pool harvest + the agent's own published verdicts. All real on-chain addresses; **no hardcoded rug list**. 21 tokens were oracle-labelled (2 unsafe / 19 safe); 18 the oracle could not classify were **skipped, not guessed**.

**Headline — slashing-grade verdicts (`score < 40`, LIKELY_RUG):**

| Metric | Value |
|---|---|
| Precision | **1.00** |
| Recall | **1.00** |
| F1 | **1.00** |
| Accuracy | **1.00** |

Both live honeypots in the set (`Surplus`, `NOCK`) were caught, with **zero** false LIKELY_RUG verdicts — the agent never stakes a rug call on a token that is actually sellable.

**Ablation — does the live simulation matter? (threshold 75)**

| Engine | Precision | Recall |
|---|---|---|
| With live simulation | 0.40 | **1.00** |
| Static only (no simulation) | 0.00 | 0.00 |

Without the simulation the static engine catches **0 of 2** honeypots; with it, **2 of 2**. The simulation is what turns the agent from "never flags a rug" into a real risk-taker.

**Threshold sweep (with simulation):**

| Threshold | Precision | Recall | F1 | Accuracy |
|---|---|---|---|---|
| 40 | 1.00 | 1.00 | 1.00 | 1.00 |
| 45–60 | 0.67 | 1.00 | 0.80 | 0.95 |
| 65 | 0.50 | 1.00 | 0.67 | 0.91 |
| 70–80 | 0.40 | 1.00 | 0.57 | 0.86 |
| 85 | 0.29 | 1.00 | 0.44 | 0.76 |

> Precision at `score < 75` is a deliberate **lower bound**: the engine also down-scores legitimate-but-risky tokens (modifiable tax, sub-24h pools, low liquidity) that the honeypot oracle still counts as "safe". On the slashing-grade boundary that actually risks capital (`< 40`), precision is 1.00.

**Reproduce:** `NETWORK_MODE=mainnet npx tsx agent/backtest.ts` — results are also served live at `GET /backtest`.

---

## Honest limitations

- Risk scoring now runs a live buy/sell simulation (honeypot.is), but it cannot simulate tokens it does not index — those are flagged and skipped, not guessed — and a token that is sellable now can still rug later.
- The public Base RPC can be flaky under load; on-chain reads may briefly lag a just-mined write.
- Builder Rewards require a Basename + Builder Score ≥ 40 + human verification + real attributed volume — not guaranteed income.

*Not financial advice.*

## 🔍 Discoverability & agent integrations

Base Capital ships a machine-readable x402 **discovery document** at [`/openapi.json`](https://base-capital.vercel.app/openapi.json) so AI agents and indexers can find, understand, and pay for the API automatically.

- **x402scan marketplace** — listed (2/2 resources) at <https://www.x402scan.com>
- **Poncho** — auto-generated agent merchant page at <https://tryponcho.com/m/base-capital.vercel.app>
- **Discovery doc** — `GET /openapi.json` declares the paid routes `/v1/risk/{token}` and `/v1/signal/trending` with `x-payment-info` ($0.01 USDC on Base mainnet), plus a free preview at `/v1/preview/{token}`.

Verified end-to-end: agents discover the endpoints via the discovery document, parse the capabilities, and call them — the free preview returns live GoPlus-backed risk data with no payment required.

---

## 🏁 Milestones

### 2026-06-30 — RiskStake v3 live (optimistic resolution + agentId reputation)

Upgraded the on-chain layer to **v3** and cut the live agent over to it: a backward-compatible commit path, optimistic resolution with a public challenge window, and ERC-8004 agentId-bound reputation.

- **Contract:** [`0x0eC7de61eE08659743A896FeB15BfB99361f440e`](https://basescan.org/address/0x0eC7de61eE08659743A896FeB15BfB99361f440e) — deploy tx [`0x729df4d4…91e9`](https://basescan.org/tx/0x729df4d48c2ced3c6ee7dc1c70653a9bf64dcc3dd696a0bec5fd167a376291e9), **verified on Sourcify (`exact_match`)**.
- **Agent registered:** agentId `57556` bound to signer `0x404d…6778` — [register tx](https://basescan.org/tx/0x2f9a0b2d2f533c0e89e03a3041c1543a6bc2ac07d640abf78a803d52d968fe6d).
- **What's new:** `proposeResolution → challengeResolution → finalize` (1h challenge window, bonded disputes, challenger reward), reputation keyed by agentId, on-chain `ruleVersion` + `snapshotURI` for reproducible proofs, and an O(1) pending index.
- **Migration:** TS layer + hourly cron cut over to v3 (type-checked, validated end-to-end on mainnet). The v2 contract `0x21d4…2cCB` is retained as legacy track record. The challenge window was later tuned to **1h** via setChallengeParams (tx 0xed2a0ce8623743293be7ed7819fe7a97b2f7710200db9578bfd945d09aa40c25) to recycle staking capital ~24x faster while keeping bonded disputes intact.

### 2026-06-30 - First v3 optimistic resolution on-chain
The autonomous agent proposed its first optimistic resolution on the v3 RiskStake contract: token `0x4ed4e862...efed` scored **88/100 (SAFE)**, proposed **CORRECT** via `proposeResolution` (tx `0x9f364159c0a5cae23d729a25bcacc8c971e96d4d4281a1db5af33a48935347bc`). The verdict then sits in the **1h challenge window**; absent a successful dispute, `finalize` settles it to `Correct` and the $1 stake returns to the agent - demonstrating the self-recycling stake loop on ~$1.3 of working capital (gas-only cost).

### 2026-06-30 - Recycle loop closed: first verdict finalized CORRECT
The 1h challenge window elapsed unchallenged and the agent FINALIZED its first v3 verdict to `Correct` (tx `0xa30aa2f8a9cf921c3406bf14e5544fcdc8ba86f4a68b44406de1c85f052e73d7`), returning the $1 stake - proving the self-funding loop end to end. In the same pass it deployed fresh capital into 3 new staked verdicts (cbBTC, DEGEN, AERO; $1 each). On-chain reputation now reads 4 verdicts, 1/1 correct (100% accuracy), $1 returned, $3 at-risk. The hourly cron runs the full commit -> propose -> finalize cycle autonomously.

### 2026-06-30 - Reproducible proofs verified end to end
All three proposed verdicts have their canonical risk snapshots archived under `proofs/` and independently verified: `verify-proof.ts` recomputes `keccak256(canonical)` locally and matches it byte-for-byte against the on-chain `proofHash` (3/3 PASS). Anyone can clone the repo and run `NETWORK_MODE=mainnet npx tsx verify-proof.ts` to confirm the agent cannot retroactively alter its stated reasoning. CI commit-back was hardened with git rebase --autostash so future snapshots auto-archive.

### 2026-06-27 — First live x402 payment

An external AI agent (Poncho — https://tryponcho.com) autonomously **discovered, paid for, and called** Base Capital over x402 on Base mainnet — fully end-to-end, no human in the loop.

- **Transaction:** [`0xff54c1b8a2186a8c02c20bfc60e2398682834a9eda6ddc29395d2a19b4d06821`](https://basescan.org/tx/0xff54c1b8a2186a8c02c20bfc60e2398682834a9eda6ddc29395d2a19b4d06821)
- **Amount:** 0.01 USDC · Base mainnet (`eip155:8453`) · keyless **xpay** facilitator
- **Path:** discovery (`/openapi.json`) -> `402 Payment Required` -> payment -> settlement -> live GoPlus-backed risk verdict (DEGEN, score 96/100).
- **Why it matters:** proves the full monetization loop works in production with a real third-party agent.
