import { useLayoutEffect, useRef } from 'react';
import { gsap, useGSAP } from '../lib/gsap';
import { compoundFeats, cycleSteps } from '../data/content';

// Seção 6 — Mecanismo do reinvestimento. Visualiza o processo, nunca uma curva de patrimônio:
// o "dividendo" (o ponto verde) percorre o ciclo uma vez ao entrar na tela e acende cada passo.

const LIT = { backgroundColor: '#0d5c3f', borderColor: '#0d5c3f', color: '#f9f8f6' };
const UNLIT = { backgroundColor: '#f9f8f6', borderColor: 'rgba(15,27,45,0.22)', color: '#3a4552' };

export function CycleSection() {
  const ref = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLOListElement>(null);

  // O trilho vai do centro do primeiro ícone ao centro do último — medido, porque o texto quebra
  // em mais ou menos linhas conforme a largura da tela.
  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const layout = () => {
      const icons = list.querySelectorAll<HTMLElement>('[data-cycle-ico]');
      if (icons.length < 2) return;
      const center = (ico: HTMLElement) => (ico.parentElement?.offsetTop ?? 0) + ico.offsetTop + ico.offsetHeight / 2;
      const top = center(icons[0]);
      const height = center(icons[icons.length - 1]) - top;
      list.querySelectorAll<HTMLElement>('[data-cycle-track]').forEach((el) => {
        el.style.top = `${top}px`;
        el.style.height = `${height}px`;
      });
    };
    layout();
    const ro = new ResizeObserver(layout);
    ro.observe(list);
    return () => ro.disconnect();
  }, []);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const q = gsap.utils.selector(ref);
        const icons = q('[data-cycle-ico]');
        const line = q<HTMLElement>('[data-cycle-line]')[0];
        const dot = q('[data-cycle-dot]');
        const travel = 2.6;

        gsap.set(icons, UNLIT);
        const tl = gsap.timeline({ scrollTrigger: { trigger: q('[data-cycle]')[0], start: 'top 68%', once: true } });
        tl.from(line, { scaleY: 0, transformOrigin: '50% 0%', duration: travel, ease: 'none' }, 0.2)
          .fromTo(dot, { y: 0, opacity: 0 }, { opacity: 1, duration: 0.2 }, 0.2)
          .to(dot, { y: () => line.offsetHeight, duration: travel, ease: 'none' }, 0.2)
          .to(dot, { opacity: 0, scale: 2.2, duration: 0.5 }, 0.2 + travel);
        icons.forEach((ico, i) => {
          const at = 0.2 + (i / (icons.length - 1)) * travel;
          tl.to(ico, { ...LIT, duration: 0.35, ease: 'power1.out' }, at - 0.1);
          tl.fromTo(ico, { scale: 1 }, { scale: 1.12, duration: 0.18, yoyo: true, repeat: 1, ease: 'power1.inOut' }, at - 0.1);
        });
        tl.from(q('[data-cycle-loop]'), { opacity: 0, y: 8, duration: 0.6 }, 0.2 + travel);
      });
    },
    { scope: ref }
  );

  return (
    <section ref={ref} className="section">
      <div className="page grid gap-x-20 gap-y-14 lg:grid-cols-2 lg:items-center">
        <div data-reveal>
          <h2 className="h2 text-navy">
            Como o reinvestimento <em className="accent">trabalha por você.</em>
          </h2>
          <p className="lead mt-5 max-w-[54ch] text-navy-soft">
            Não existe mágica nem promessa de número: existe um mecanismo. Cada dividendo recebido pode ser reinvestido pra
            comprar novos ativos — e mais ativos geram mais dividendos. É o efeito bola de neve dos juros compostos, o mesmo
            que constrói patrimônio de longo prazo no mundo inteiro.
          </p>
          <ul className="mt-8 border-b border-line">
            {compoundFeats.map((f) => (
              <li key={f.title} className="flex gap-4 border-t border-line py-4">
                <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-emerald-soft text-[.8rem] text-emerald">
                  <i className="bi bi-check-lg" aria-hidden="true" />
                </span>
                <div>
                  <b className="block font-semibold text-navy">{f.title}</b>
                  <span className="text-[.95rem] text-navy-soft">{f.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal data-cycle className="rounded-card border border-line bg-paper p-7 shadow-paper md:p-10">
          <div className="font-display text-[1.4rem] text-navy">O ciclo do reinvestimento</div>
          <div className="mt-1 text-[.88rem] text-navy-faint">O mecanismo — não uma projeção de retorno</div>

          <ol ref={listRef} className="relative mt-8">
            {/* trilho e preenchimento entre o primeiro e o último ícone (top/height medidos acima) */}
            <span data-cycle-track aria-hidden="true" className="absolute left-[21.5px] top-[22px] w-px bg-line-strong" />
            <span data-cycle-track data-cycle-line aria-hidden="true" className="absolute left-[21.5px] top-[22px] w-px bg-emerald" />
            <span
              data-cycle-dot
              aria-hidden="true"
              className="absolute left-[16.5px] top-[16.5px] z-10 h-[11px] w-[11px] rounded-full bg-emerald opacity-0 shadow-[0_0_0_5px_rgba(13,92,63,.16)]"
            />
            {cycleSteps.map((s) => (
              <li key={s.title} className="relative flex items-start gap-5 pb-8 last:pb-0">
                <span
                  data-cycle-ico
                  className="relative z-[1] grid h-11 w-11 flex-none place-items-center rounded-full border border-emerald bg-emerald text-[1.05rem] text-paper"
                >
                  <i className={`bi ${s.icon}`} aria-hidden="true" />
                </span>
                <div className="pt-1">
                  <b className="block font-semibold text-navy">{s.title}</b>
                  <span className="text-[.94rem] text-navy-soft">{s.text}</span>
                </div>
              </li>
            ))}
          </ol>

          <div data-cycle-loop className="mt-8 flex items-center gap-2.5 border-t border-line pt-5 text-[.94rem] font-medium text-emerald">
            <i className="bi bi-arrow-repeat inline-block motion-safe:animate-[spin_7s_linear_infinite]" aria-hidden="true" />
            E o ciclo recomeça — maior a cada volta
          </div>
          <p className="mt-4 text-[.86rem] leading-[1.6] text-navy-faint">
            Não mostramos uma curva de patrimônio porque o resultado real depende do seu aporte, do seu perfil e do
            comportamento do mercado. Rentabilidade passada não garante rentabilidade futura.
          </p>
        </div>
      </div>
    </section>
  );
}
