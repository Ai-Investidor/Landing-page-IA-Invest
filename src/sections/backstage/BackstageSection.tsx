import { useRef } from 'react';
import { gsap, useGSAP } from '../../lib/gsap';
import { FILL_AND_DRAIN_MS, jqCountUp, jqFillAndDrain, jqZero } from '../../lib/jquery';
import { useCanvasScale } from '../../hooks/useCanvasScale';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { AdminMockup } from './AdminMockup';
import { ADMIN_CANVAS, type AdminVariant } from './backstageData';

/**
 * Seção 4 — Bastidores (Mockup 2). Não depende do scroll: chegou na tela, a animação roda uma vez.
 *   GSAP: o painel surge inclinado e endireita; cabeçalho, KPIs e cards entram em cascata; checks "carimbam".
 *   jQuery: números sobem do zero até o valor final; as barras da distribuição enchem e secam até assentar.
 */
export function BackstageSection() {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const variant: AdminVariant = isDesktop ? 'desktop' : 'mobile';
  const { w, h } = ADMIN_CANVAS[variant];
  const scale = useCanvasScale(w, h);

  const ref = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const q = gsap.utils.selector(ref);
        const counts = q<HTMLElement>('[data-jq="count"]');
        const bars = q<HTMLElement>('[data-jq="bar"]');
        const group = (name: string) => counts.filter((el) => el.dataset.group === name);
        const stops: (() => void)[] = [];

        // Antes de entrar na tela: números zerados, barras vazias
        counts.forEach((el) => jqZero(el, { suffix: el.dataset.suffix }));
        bars.forEach((el) => (el.style.width = '0%'));

        const countGroup = (name: string, duration: number, delay: (i: number) => number) =>
          group(name).forEach((el, i) =>
            stops.push(jqCountUp(el, { to: Number(el.dataset.to), suffix: el.dataset.suffix, duration, delay: delay(i) }))
          );

        const tl = gsap.timeline({
          scrollTrigger: { trigger: stageRef.current, start: 'top 78%', once: true },
        });
        tl.from(frameRef.current, { rotateX: 18, y: 70, opacity: 0, duration: 1.1, ease: 'power3.out' }, 0)
          .from(q('[data-a="head"]'), { y: 14, opacity: 0, stagger: 0.08, duration: 0.6, ease: 'power2.out' }, 0.35)
          .from(q('[data-b="kpi"]'), { y: 18, opacity: 0, stagger: 0.08, duration: 0.6, ease: 'power2.out' }, 0.5)
          .add(() => countGroup('kpi', 1700, (i) => i * 120), 0.6)
          .from(q('[data-a="card"]'), { y: 22, opacity: 0, stagger: 0.12, duration: 0.7, ease: 'power2.out' }, 0.8)
          .add(() => {
            bars.forEach((bar, i) => stops.push(jqFillAndDrain(bar, Number(bar.dataset.to), i * 150)));
            countGroup('split', FILL_AND_DRAIN_MS, (i) => i * 150);
            countGroup('status', 900, (i) => 300 + i * 260);
          }, 1.0)
          .from(q('[data-a="check"]'), { scale: 0, rotation: -60, duration: 0.5, ease: 'back.out(2.2)', stagger: 0.26 }, 1.1);

        return () => {
          stops.forEach((stop) => stop());
          counts.forEach((el) => {
            el.textContent = `${Number(el.dataset.to).toLocaleString('pt-BR')}${el.dataset.suffix ?? ''}`;
          });
          bars.forEach((el) => (el.style.width = `${el.dataset.to}%`));
        };
      });
    },
    { scope: ref, dependencies: [variant], revertOnUpdate: true }
  );

  return (
    <section id="bastidores" ref={ref} className="section overflow-hidden">
      <div className="page">
        <div className="grid gap-x-20 gap-y-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <h2 data-reveal className="h2 text-navy">
            Todo mês, o mesmo fechamento. <em className="accent">Sem pular etapa.</em>
          </h2>
          <p data-reveal className="lead max-w-[52ch] text-navy-soft">
            Antes de chegar até você, cada carteira passa pela revisão das teses, pela publicação da versão do mês e pelo
            relatório. Este é o painel em que a equipe acompanha esse fechamento, etapa por etapa.
          </p>
        </div>

        <div
          ref={stageRef}
          role="img"
          aria-label="Demonstração do painel administrativo da AI Invest: fechamento do mês com teses revisadas, versões publicadas e relatórios gerados, e a distribuição da Carteira Conservadora por classe de ativo. Dados fictícios."
          className="relative mx-auto mt-14"
          style={{ width: w * scale, height: h * scale, perspective: 1600 }}
        >
          <AdminMockup variant={variant} scale={scale} frameRef={frameRef} />
        </div>
      </div>
    </section>
  );
}
