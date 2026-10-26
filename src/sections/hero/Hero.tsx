import { type MouseEvent, useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '../../lib/gsap';
import { useCurrentDate } from '../../hooks/useCurrentDate';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useCanvasScale } from '../../hooks/useCanvasScale';
import { DashboardMockup } from './DashboardMockup';
import type { ChartHandle } from './PerformanceChart';
import { CANVAS, KPIS, type Variant, fmtPct } from './heroData';
import { buildHeroTimeline } from './heroTimeline';

export function Hero() {
  const { mesAno } = useCurrentDate();
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const variant: Variant = isDesktop ? 'desktop' : 'mobile';
  const { w, h } = CANVAS[variant];
  const scale = useCanvasScale(w, h, true);

  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<ChartHandle>(null);
  const stRef = useRef<ScrollTrigger | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      // Quem pediu "reduzir movimento" no sistema vê a plataforma pronta, sem seção presa
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const section = sectionRef.current;
        const text = textRef.current;
        const stage = stageRef.current;
        const frame = frameRef.current;
        if (!section || !text || !stage || !frame) return;
        const { tl, cleanup } = buildHeroTimeline({
          section,
          text,
          hint: hintRef.current,
          stage,
          frame,
          chart: chartRef.current,
        });
        stRef.current = tl.scrollTrigger ?? null;
        return () => {
          stRef.current = null;
          cleanup();
        };
      });
    },
    { scope: sectionRef, dependencies: [variant], revertOnUpdate: true }
  );

  // Mudou o tamanho do mockup → recalcula onde a seção prende e solta
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [scale]);

  // As fontes do Google chegam depois do primeiro desenho e mudam a altura do título —
  // sem recalcular, o mockup terminaria fora do centro.
  useEffect(() => {
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
  }, []);

  // "Ver a plataforma por dentro": rola até o fim da montagem, e a animação roda sozinha no caminho
  const goToBuilt = (e: MouseEvent<HTMLAnchorElement>) => {
    const st = stRef.current;
    if (!st) return;
    e.preventDefault();
    window.scrollTo({ top: st.end, behavior: 'smooth' });
  };

  return (
    <section id="top" ref={sectionRef} className="relative overflow-hidden motion-safe:h-[100svh] motion-reduce:pb-20">

      <div className="page relative pt-[100px] lg:pt-[128px]">
        <div ref={textRef} className="mx-auto max-w-[820px] text-center">
          <div className="mb-5 inline-flex items-center gap-2 font-mono text-[.72rem] tracking-[.03em] text-navy-faint">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald" aria-hidden="true" />
            Carteira de {mesAno} · revisão vigente
          </div>
          <h1 className="text-[clamp(2.25rem,5vw,4rem)] text-navy">
            A decisão sobre o seu dinheiro <em className="accent">tem um responsável.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-[60ch] text-[1.02rem] leading-[1.65] text-navy-soft md:text-[1.14rem]">
            Todo mês, um especialista certificado pela ANBIMA revisa e assina a sua carteira: o que comprar, manter e
            vender, e em qual percentual. Você acompanha tudo numa plataforma própria.
          </p>
          <p className="mx-auto mt-5 max-w-[56ch] border-t border-line pt-4 text-[.9rem] leading-[1.55] text-navy-soft md:text-[.95rem]">
            Não somos corretora. Não distribuímos produto. Não recebemos comissão de nenhum ativo recomendado.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a href="#preco" className="btn btn-primary">
              Assinar a carteira <i className="bi bi-arrow-right arrow" aria-hidden="true" />
            </a>
            <a href="#plataforma" onClick={goToBuilt} className="btn btn-ghost">
              Ver a plataforma por dentro
            </a>
          </div>
        </div>

        <div
          id="plataforma"
          ref={stageRef}
          role="img"
          aria-label={`Demonstração da plataforma AI Invest, tela Minha carteira: rentabilidade acumulada de ${fmtPct(
            KPIS.periodo
          )} contra ${fmtPct(KPIS.cdiPeriodo)} do CDI em 12 meses. Dados fictícios.`}
          className="relative mx-auto mt-12 md:mt-14"
          style={{ width: w * scale, height: h * scale, perspective: 1800 }}
        >
          <DashboardMockup variant={variant} scale={scale} chartRef={chartRef} frameRef={frameRef} />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-5 flex justify-center motion-reduce:hidden">
        <div
          ref={hintRef}
          className="flex items-center gap-2 rounded-full border border-line bg-paper/90 px-3.5 py-1.5 font-mono text-[.7rem] tracking-[.03em] text-navy-faint"
        >
          <i className="bi bi-mouse text-[.85rem]" aria-hidden="true" />
          Role para montar a plataforma
        </div>
      </div>
    </section>
  );
}
