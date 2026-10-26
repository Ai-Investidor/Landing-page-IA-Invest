import { useRef } from 'react';
import { gsap, useGSAP } from '../lib/gsap';

// Seção 2 — Resultado (substitui o par do mês de queda). Só valores positivos.
// Números do backtest conforme PRODUCT.md: sempre rotulados como simulação retroativa.

const SCALE_MAX = 45; // escala das barras: 45% = barra cheia, pra comparação proporcional honesta

const ROWS = [
  { label: 'Carteira AI Invest (simulada)', value: 42.6, ours: true },
  { label: 'Ibovespa, mesmo período', value: 18.3, ours: false },
];

const fmt = (v: number) => `+${v.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%`;

export function ResultSection() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const q = gsap.utils.selector(ref);
        const tl = gsap.timeline({
          scrollTrigger: { trigger: q('[data-proof]')[0], start: 'top 75%', once: true },
        });
        tl.from(q('[data-bar]'), { scaleX: 0, transformOrigin: '0% 50%', duration: 1.4, ease: 'power3.out', stagger: 0.18 }, 0);
        q<HTMLElement>('[data-num]').forEach((el, i) => {
          const to = Number(el.dataset.num);
          const proxy = { v: 0 };
          el.textContent = fmt(0);
          tl.to(proxy, { v: to, duration: 1.4, ease: 'power3.out', onUpdate: () => (el.textContent = fmt(proxy.v)) }, i * 0.18);
        });
        tl.from(q('[data-diff]'), { opacity: 0, y: 10, duration: 0.6 }, 1.1);
        // ao desmontar, devolve os números finais (o revert do GSAP não reescreve texto)
        return () => q<HTMLElement>('[data-num]').forEach((el) => (el.textContent = fmt(Number(el.dataset.num))));
      });
    },
    { scope: ref }
  );

  return (
    <section id="resultado" ref={ref} className="section bg-navy text-paper">
      <div className="page">
        <div className="grid gap-x-20 gap-y-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div data-reveal>
            <h2 className="h2 text-paper">
              O método, testado <em className="accent-light">contra o índice.</em>
            </h2>
            <p className="lead mt-5 max-w-[50ch] text-paper/75">
              A mesma metodologia que monta a carteira, aplicada aos dados públicos de mercado dos últimos 24 meses e
              comparada com o Ibovespa no mesmo período.
            </p>
          </div>

          <div data-reveal data-proof>
            <div className="data-label text-gold">Backtest · Simulação retroativa · 24 meses</div>
            <div className="mt-6 space-y-7">
              {ROWS.map((row) => (
                <div key={row.label}>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className={`text-[.95rem] ${row.ours ? 'text-paper' : 'text-paper/70'}`}>{row.label}</span>
                    <b
                      data-num={row.value}
                      className={`font-mono font-semibold tabular-nums ${
                        row.ours ? 'text-[clamp(2rem,4vw,2.8rem)] text-emerald-light' : 'text-[clamp(1.6rem,3vw,2.1rem)] text-paper/60'
                      }`}
                    >
                      {fmt(row.value)}
                    </b>
                  </div>
                  <div className="mt-3 h-2 rounded-[1px] bg-paper/10">
                    <div
                      data-bar
                      className={`h-full rounded-[1px] ${row.ours ? 'bg-emerald-light' : 'bg-paper/45'}`}
                      style={{ width: `${(row.value / SCALE_MAX) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p data-diff className="mt-7 border-t border-paper/15 pt-5 text-[.98rem] text-paper/80">
              <b className="font-mono font-semibold text-gold">+24,3 p.p.</b> de diferença acumulada sobre o índice no
              período simulado.
            </p>
          </div>
        </div>

        <p data-reveal className="mt-14 max-w-[88ch] border-t border-paper/15 pt-6 text-[1rem] leading-[1.7] text-paper/70">
          <strong className="font-semibold text-paper">Resultado de backtest (simulação retroativa)</strong> da metodologia de
          análise dos especialistas da AI Invest aplicada a dados públicos de mercado — não representa o desempenho de uma
          carteira realmente operada nem o patrimônio individual de qualquer investidor. Backtests têm limitações: não
          capturam custos, liquidez nem o comportamento em tempo real. Validação metodológica conduzida por Matheus Miranda e
          a equipe de analistas. Rentabilidade passada ou simulada não garante rentabilidade futura.
        </p>
      </div>
    </section>
  );
}
