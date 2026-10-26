import { gsap } from '../../lib/gsap';
import type { ChartHandle } from './PerformanceChart';

interface Parts {
  section: HTMLElement;
  text: HTMLElement;
  hint: HTMLElement | null;
  stage: HTMLElement;
  frame: HTMLElement;
  chart: ChartHandle | null;
}

/** Distância do elemento até o topo do ancestral, ignorando transforms (que mudam durante o scroll). */
function offsetTopWithin(el: HTMLElement, ancestor: HTMLElement) {
  let top = 0;
  let node: HTMLElement | null = el;
  while (node && node !== ancestor) {
    top += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return top;
}

/**
 * Hero presa na tela por ~3 alturas de scroll. A posição do scroll é a agulha da timeline:
 * rolar pra baixo constrói a plataforma, rolar pra cima desmonta. `scrub: 1` dá o "deslizar"
 * suave entre um giro e outro da bolinha do mouse, como o controle de volume.
 *
 * Etapas (unidades da timeline, total ~10,3):
 *   0    texto sai, a moldura vazia endireita do 3D e sobe pro centro
 *   0,45 a tela limpa ganha fundo (a moldura "liga")
 *   1,3  sidebar e topo · 2,0 título e selo · 2,6 abas
 *   3,2  KPIs chegam de frente, um a um, com os números contando
 *   4,75 card do gráfico · 5,45 grade e eixos se desenham
 *   6,4  o gráfico cresce junto com o scroll até 9,6 · respiro final
 */
export function buildHeroTimeline({ section, text, hint, stage, frame, chart }: Parts) {
  const q = gsap.utils.selector(section);
  const restore: (() => void)[] = [];

  const navH = () => document.querySelector<HTMLElement>('[data-nav]')?.offsetHeight ?? 72;
  // Quanto o palco sobe pra terminar centralizado na área visível abaixo da nav
  const lift = () => {
    const top = navH();
    const target = top + Math.max(12, (window.innerHeight - top - stage.offsetHeight) / 2);
    return target - offsetTopWithin(stage, section);
  };

  const tl = gsap.timeline({
    defaults: { ease: 'power2.out' },
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: () => `+=${Math.round(window.innerHeight * 3.2)}`,
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      refreshPriority: 1, // a hero presa empurra tudo abaixo: precisa ser calculada antes das outras
    },
  });

  // Atalho que ignora seletores vazios (ex.: a sidebar não existe no mockup mobile)
  const from = (name: string, vars: gsap.TweenVars, at: number) => {
    const targets = q(`[data-b="${name}"]`);
    if (targets.length) tl.from(targets, vars, at);
    return targets;
  };

  // 1 — texto sai, moldura aterrissa
  tl.to(text, { y: -70, opacity: 0, duration: 1, ease: 'power1.in' }, 0);
  if (hint) tl.to(hint, { y: 10, opacity: 0, duration: 0.35 }, 0);
  tl.fromTo(stage, { y: 0 }, { y: () => lift(), duration: 1.6, ease: 'power2.inOut' }, 0);
  tl.fromTo(frame, { rotateX: 34, scale: 0.9 }, { rotateX: 0, scale: 1, duration: 1.6, ease: 'power2.inOut' }, 0);
  tl.fromTo(
    frame,
    {
      backgroundColor: 'rgba(11,21,34,0)',
      borderColor: 'rgba(15,27,45,0.3)',
      boxShadow: '0px 0px 0px -40px rgba(15,27,45,0)',
    },
    {
      backgroundColor: 'rgba(11,21,34,1)',
      borderColor: 'rgba(241,240,236,0.09)',
      boxShadow: '0px 40px 80px -40px rgba(15,27,45,0.55)',
      duration: 0.9,
      ease: 'power1.inOut',
    },
    0.45
  );

  // 2 — estrutura da tela
  from('side', { x: -18, opacity: 0, duration: 0.8 }, 1.3);
  from('side-item', { x: -12, opacity: 0, stagger: 0.06, duration: 0.45 }, 1.45);
  from('top', { y: -22, opacity: 0, duration: 0.7 }, 1.45);
  from('head', { y: 22, z: 160, opacity: 0, stagger: 0.14, duration: 0.8 }, 2.0);
  from('tabs', { y: 12, opacity: 0, duration: 0.6 }, 2.6);
  from('tab-line', { scaleX: 0, transformOrigin: '0% 50%', duration: 0.5 }, 2.95);

  // 3 — KPIs vêm "de frente" (z), cada um com o número contando do zero
  const kpis = from('kpi', { z: 220, y: 40, rotateX: -22, opacity: 0, stagger: 0.22, duration: 1, ease: 'power3.out' }, 3.2);
  kpis.forEach((card, i) => {
    card.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
      const original = el.textContent ?? '';
      restore.push(() => {
        el.textContent = original;
      });
      const to = Number(el.dataset.to);
      const dec = Number(el.dataset.dec ?? 2);
      const pre = el.dataset.prefix ?? '';
      const suf = el.dataset.suffix ?? '';
      const proxy = { v: 0 };
      const render = () => {
        el.textContent = `${pre}${proxy.v.toLocaleString('pt-BR', { minimumFractionDigits: dec, maximumFractionDigits: dec })}${suf}`;
      };
      render();
      tl.to(proxy, { v: to, duration: 1.1, ease: 'power2.out', onUpdate: render }, 3.3 + i * 0.22);
    });
  });

  // 4 — card do gráfico e grade
  from('card', { z: 220, y: 56, opacity: 0, duration: 1 }, 4.75);
  from('card-head', { y: 10, opacity: 0, stagger: 0.1, duration: 0.5 }, 5.15);
  from('grid-h', { scaleX: 0, transformOrigin: '0% 50%', stagger: 0.06, duration: 0.6 }, 5.45);
  from('ylab', { x: -6, opacity: 0, stagger: 0.05, duration: 0.4 }, 5.55);
  from('grid-v', { scaleY: 0, transformOrigin: '50% 100%', stagger: 0.03, duration: 0.5 }, 5.7);
  from('xlab', { y: 6, opacity: 0, stagger: 0.04, duration: 0.4 }, 5.8);

  // 5 — o gráfico cresce com o scroll (o "controle de volume")
  if (chart) {
    const state = { p: 0 };
    chart.draw(0);
    tl.to(state, { p: 1, duration: 3.2, ease: 'none', onUpdate: () => chart.draw(state.p) }, 6.4);
    restore.push(() => chart.draw(1));
  }
  from('note', { opacity: 0, duration: 0.5 }, 9.3);
  tl.to({}, { duration: 0.7 }, 9.6); // respiro com a tela pronta antes de soltar a seção

  return {
    tl,
    cleanup: () => restore.forEach((fn) => fn()),
  };
}
