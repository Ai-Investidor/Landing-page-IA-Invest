# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Confirmed ICP (2026-08-24 — supersedes the earlier broader description below).** Brazilian man, 40–48, established professional: doctor, lawyer, engineer, or local business owner. Income R$20–60k/month; investable net worth R$300k–R$1M.

Mental state on arrival:
- Already has capital deployed, badly: bank-pushed CDB, a fund the manager steered him into, stocks bought on a tip, a FII from a referral — a scattered portfolio with no thesis.
- Already lost money to a bank product and carries resentment about it.
- Skeptical but educable. Doesn't fall for easy-return promises. Responds to technique, data, and consistency.
- Loss aversion outweighs desire for gain — predictability converts better than a spectacular return.
- Wants to delegate without losing understanding. Doesn't want to be told what to do — wants the reasoning.
- Decides slowly. Once he trusts, he's loyal and refers others.

**Anti-persona — the product must not court these:** a beginner with under R$100k, a day trader, someone hunting a stray tip, anyone chasing a fast return. Qualifying language should describe the scattered-portfolio situation this ICP recognizes, never a crude net-worth cutoff, and never in a way that humiliates or expels someone with less — they just aren't who the page is written for.

*Superseded description, kept for context:* Brazilian, roughly 30–55, income but money sitting idle, no time or technical repertoire, doesn't want to research investments themselves, fears easy-return promises, decides by trust not numbers.

## Product Purpose

AI Invest is a paid subscription to a model investment portfolio, reviewed monthly by a human specialist team. Subscribers receive direct, jargon-free recommendations — buy, hold, or sell, with a suggested allocation percentage per asset — spanning renda fixa, FIIs, and ações. Success is a subscriber who trusts and executes the monthly recommendations at their own broker, receiving dividend income while their position compounds over time.

## Positioning

"AI Invest" is a brand name only — confirmed no AI performs or assists the asset analysis; every recommendation is made and owned by a human, ANBIMA-certified specialist (Matheus Miranda — CPA, C-Pro R and C-Pro I). Future copy must not reintroduce a claim that AI generates or curates the portfolio.

Differentiation vs. a generic tip sheet or DIY investing: a monthly, expert-curated, ready-to-execute portfolio (not scattered tips) delivered as a formal report plus a community channel, with an explicit mechanism (dividend reinvestment / compounding) instead of promised returns, and deliberate transparency about being an early-stage company rather than inflated traction claims.

Central brand tension that all future work (copy and design alike) has to resolve: a new company in a market where authority is everything. The answer is not to fake scale or a track record — it's to be the one competitor that admits what it is. Radical transparency about being early-stage is a positioning choice, not a legal disclaimer bolted on.

**Confirmed fact — alignment of interest:** AI Invest is not a broker, does not distribute financial products, and does not earn commission on any recommended asset. Revenue comes solely from the subscription. This is a genuine differentiator against bank managers and product-pushing advisors and may be stated plainly in copy.

## Operating Context

- Checkout: the Cakto link was removed from the pricing section on 2026-10-26; the new checkout destination is still being decided by the founders. Access unlocks immediately on payment.
- Delivery: subscribers join an exclusive WhatsApp community where the monthly portfolio is delivered and discussed, plus a monthly PDF report (assets, weights, buy/hold/sell calls, and the thesis per asset).
- Platform (confirmed 2026-10-26, launching): an investor web platform (Painel, Minha carteira with Composição/Movimentações/Performance, Relatórios, Carteiras, investor profile). Landing-page mockups of it use fictitious demo data and must always carry the "Dados fictícios · Demonstração" label.
- Execution happens outside the product: the subscriber places trades themselves at any B3-registered brokerage (XP, Clear, Rico, Inter, BTG, Nubank, etc.) — the product is broker-agnostic.
- Portfolio composition spans renda fixa, FIIs, and ações, weighted toward dividend payers plus long-term growth positions.

## Capabilities and Constraints

- Regulatory: AI Invest is not a CVM-regulated broker, bank, or asset manager. Content is educational/analytical, not personalized investment advice under CVM Resolution 20/2021 — this disclaimer is load-bearing and must persist in any redesign.
- No guaranteed-return claims anywhere; past/simulated performance is not a guarantee of future performance.
- Backtest/performance data (currently: +42.6% vs. IBOV +18.3% over 24 months) is **mixed-provenance**: older months in that track are a retroactive simulation (methodology backtested against public market data), while more recent months reflect real, live subscriber-portfolio performance. Future work must not present the whole series as either pure backtest or a fully real audited track record without checking which months are which. Wherever these numbers appear, they must be labeled as a retroactive simulation/backtest — never shown as an audited live track record.
- No AI performs the asset selection or analysis today — "AI Invest" is the brand name only, not a functional claim. (See Positioning.)
- Pricing (updated 2026-10-26): R$ 997,86/year, shown as a Pix price. Installments (up to 12x) exist but are not shown on the page until the payment gateway is chosen, because the rate depends on it. 7-day full-refund guarantee. (The old R$497 / 12x R$51,34 is retired.)
- Capital: the product is designed for an already-formed portfolio, not a first investment. The proposed diversification (renda fixa + FIIs + ações, income and growth positions together) assumes enough capital to spread across asset classes without disproportionate per-trade cost. No specific minimum R$ figure is confirmed — the earlier "~R$1,000" figure is retired from public copy as of 2026-08-24 (ICP update) because it undersells and misdirects the confirmed audience; do not reintroduce a specific low minimum without checking with the user first.

## Brand Commitments

- Name: **AI Invest** (renamed from an earlier "IA Invest"; keep consistent).
- Inline SVG wordmark/logo (recolorable via `currentColor`), Bootstrap Icons. (Typefaces are a visual-world choice — tracked in DESIGN.md, not here, since they change with the visual world and the current one no longer uses Sora/Inter.)
- Voice: honest to the point of discomfort — sober, direct, no euphoria. Reads like an analyst who doesn't need to sell, not like a copywriter. If a line sounds excited, it's wrong.
- Human face of the product: Matheus Miranda, Especialista de Investimentos, degree in Economia, holds the ANBIMA certifications CPA, C-Pro R (Relacionamento) and C-Pro I (Investimento) per the ANBIMA attestation (updated 2026-10-26; earlier copy said CEA, which is retired from the page) — his photo and certification assets are real, not placeholders.
- Instagram: @aiinvest.oficial.
- Deliberate transparency about being an early-stage company (no inflated client counts or fabricated traction) is a stated brand value, not just current copy.

## Evidence on Hand

- Real assets: specialist photo (`public/assets/matheus-miranda.jpg`), ANBIMA attestation PDF (`public/assets/PDF/certificado-anbima-matheus-miranda.pdf`, has a verification QR Code) and the badge crop made from it (`public/assets/certificacoes-anbima-selos.jpg`), sample monthly report PDF (`public/assets/PDF/Carteira-Dividendos-Aiinvest.pdf`), report preview screenshots (`carteira-preview-capa.png`, `-ativos.png`, `-rentabilidade.png`).
- Backtest stats shown today (+42.6% cumulative vs. IBOV +18.3%; −4.1% vs. IBOV −7.2% in the down month) are real methodology output, mixed-provenance per Capabilities and Constraints above — do not present as either fully simulated or fully real without re-checking the current month split.
- No testimonials, subscriber counts, or press mentions exist — the company is explicitly new; do not fabricate social proof of this kind.

## Product Principles

1. Never claim AI creates, generates, or curates the portfolio — a human specialist owns every recommendation; "AI Invest" is a name, not a mechanism claim. This was an explicit prior correction, not a style preference.
2. Regulatory disclaimers (not CVM-regulated, no guaranteed returns, past/simulated performance ≠ future performance) are load-bearing copy, not boilerplate to trim.
3. Honesty about early stage over borrowed credibility — no inflated numbers, no fabricated social proof; being new is framed as an advantage ("ground floor"), not hidden.
4. Recommendations must read as directly actionable for a non-expert: buy/hold/sell plus a percentage, no unexplained jargon.
5. Lead with mechanism (dividend reinvestment / compounding), not promised outcomes — this is how the product earns trust without overselling.
6. No value on the page may carry a minus sign (e.g. the old −4,1% / −7,2% down-month proof is retired) — explicit user rule, 2026-10-26. Applies to copy, mockups, images and the sample PDF.
