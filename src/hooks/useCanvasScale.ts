import { useCallback, useLayoutEffect, useState } from 'react';

/**
 * Escala de um mockup desenhado em tamanho fixo (w × h) pra caber no contêiner da página.
 * Com `fitHeight`, também cabe na altura da janela abaixo da nav (usado na hero, que fica presa).
 * Nunca amplia além do tamanho de desenho.
 */
export function useCanvasScale(w: number, h: number, fitHeight = false) {
  const calc = useCallback(() => {
    const vw = document.documentElement.clientWidth;
    const navH = vw >= 1024 ? 72 : 64;
    const availW = Math.min(vw, 1180) - 48;
    const byWidth = availW / w;
    const byHeight = fitHeight ? (window.innerHeight - navH - 40) / h : Infinity;
    return Math.min(byWidth, byHeight, 1);
  }, [w, h, fitHeight]);

  const [scale, setScale] = useState(calc);

  useLayoutEffect(() => {
    setScale(calc());
    let lastW = window.innerWidth;
    let lastH = window.innerHeight;
    const onResize = () => {
      // ignora o sobe-e-desce da barra de endereço do celular
      if (window.innerWidth === lastW && Math.abs(window.innerHeight - lastH) < 120) return;
      lastW = window.innerWidth;
      lastH = window.innerHeight;
      setScale(calc());
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [calc]);

  return scale;
}
