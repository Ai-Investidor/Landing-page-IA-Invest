import $ from 'jquery';

// Animações em jQuery do Mockup 2 (mesma técnica do counter-up do jquery.html do projeto).
// Cada função devolve um "parar": encerra a animação e deixa o valor final no lugar.

$.easing.easeOutExpo = (p: number) => (p === 1 ? 1 : 1 - Math.pow(2, -10 * p));
$.easing.easeOutCubic = (p: number) => 1 - Math.pow(1 - p, 3);
$.easing.easeInOutCubic = (p: number) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);

const fmtNum = (v: number, decimals: number) =>
  v.toLocaleString('pt-BR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

interface CountOptions {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  delay?: number;
}

/** Número sobe do zero até o valor final, formatado em pt-BR (1.248 / 35%). */
export function jqCountUp(el: HTMLElement, { to, decimals = 0, prefix = '', suffix = '', duration = 1600, delay = 0 }: CountOptions) {
  const $el = $(el);
  const render = (v: number) => $el.text(`${prefix}${fmtNum(v, decimals)}${suffix}`);
  const proxy = $({ v: 0 });
  render(0);
  proxy.delay(delay).animate(
    { v: to },
    {
      duration,
      easing: 'easeOutExpo',
      step: (now: number) => {
        render(now);
      },
      complete: () => {
        render(to);
      },
    }
  );
  return () => {
    proxy.stop(true, false);
    render(to);
  };
}

/** Zera o número sem animar (estado antes de a seção entrar na tela). */
export function jqZero(el: HTMLElement, { decimals = 0, prefix = '', suffix = '' }: Omit<CountOptions, 'to'>) {
  $(el).text(`${prefix}${fmtNum(0, decimals)}${suffix}`);
}

/**
 * Barra "enche e seca" até assentar: enche até o fim, esvazia quase tudo,
 * volta passando um pouco do valor e acomoda no valor final.
 */
export function jqFillAndDrain(bar: HTMLElement, to: number, delay = 0) {
  const $bar = $(bar);
  $bar
    .stop(true)
    .css('width', '0%')
    .delay(delay)
    .animate({ width: '100%' }, 620, 'easeInOutCubic')
    .animate({ width: '4%' }, 520, 'easeInOutCubic')
    .animate({ width: `${Math.min(100, to + 9)}%` }, 560, 'easeOutCubic')
    .animate({ width: `${to}%` }, 420, 'swing');
  return () => {
    $bar.stop(true, false).css('width', `${to}%`);
  };
}

/** Total de uma barra, pra sincronizar o número que conta ao lado. */
export const FILL_AND_DRAIN_MS = 620 + 520 + 560 + 420;
