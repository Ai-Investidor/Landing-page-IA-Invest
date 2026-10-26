import { useEffect, useRef } from 'react';

// Fundo da página — malha de pontos (efeito "Dot Matrix Warp" do backgrounds.html, recolorido).
// Papel com pontos navy bem claros; perto do cursor os pontos se afastam de leve e ficam verdes.
// Fixo atrás de tudo: aparece nas seções claras e some atrás das seções navy.
// Só redesenha enquanto o mouse se mexe; parado, não gasta nada.

const SPACING = 22;
const REACH = 150; // alcance do cursor, em px
const PUSH = 13; // quanto o ponto mais próximo se afasta
const TAU = Math.PI * 2;

export function DotField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    // Sem mouse (celular) ou com "reduzir movimento": desenha a malha parada e pronto
    const interactive =
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let w = 0;
    let h = 0;
    const mouse = { x: 0, y: 0, tx: 0, ty: 0, power: 0, tpower: 0, seen: false };
    let raf = 0;
    let running = false;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const half = SPACING / 2;
      const reach2 = REACH * REACH;
      const hot: [number, number, number][] = [];

      ctx.fillStyle = 'rgba(15,27,45,0.10)';
      ctx.beginPath();
      for (let y = half; y < h; y += SPACING) {
        for (let x = half; x < w; x += SPACING) {
          if (mouse.power > 0.001) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < reach2) {
              const d = Math.sqrt(d2) || 1;
              const k = (1 - d / REACH) * mouse.power;
              hot.push([x + (dx / d) * k * PUSH, y + (dy / d) * k * PUSH, k]);
              continue;
            }
          }
          ctx.moveTo(x + 1, y);
          ctx.arc(x, y, 1, 0, TAU);
        }
      }
      ctx.fill();

      // Pontos sob a influência do cursor: navy → verde institucional, um pouco maiores
      for (const [x, y, k] of hot) {
        const r = Math.round(15 + (13 - 15) * k);
        const g = Math.round(27 + (92 - 27) * k);
        const b = Math.round(45 + (63 - 45) * k);
        ctx.fillStyle = `rgba(${r},${g},${b},${(0.1 + 0.62 * k).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(x, y, 1 + k * 1.1, 0, TAU);
        ctx.fill();
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };

    const tick = () => {
      mouse.x += (mouse.tx - mouse.x) * 0.14;
      mouse.y += (mouse.ty - mouse.y) * 0.14;
      mouse.power += (mouse.tpower - mouse.power) * 0.1;
      draw();
      const settled =
        Math.abs(mouse.tx - mouse.x) < 0.3 &&
        Math.abs(mouse.ty - mouse.y) < 0.3 &&
        Math.abs(mouse.tpower - mouse.power) < 0.004;
      if (settled) {
        mouse.power = mouse.tpower;
        draw();
        running = false;
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running || document.hidden) return;
      running = true;
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      mouse.tx = e.clientX;
      mouse.ty = e.clientY;
      if (!mouse.seen) {
        // primeira aparição: começa já no cursor, sem "varrer" a tela vindo do canto
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.seen = true;
      }
      mouse.tpower = 1;
      start();
    };
    const onLeave = () => {
      mouse.tpower = 0;
      start();
    };

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(resize, 120);
    };

    resize();
    window.addEventListener('resize', onResize);
    if (interactive) {
      window.addEventListener('pointermove', onMove, { passive: true });
      document.documentElement.addEventListener('pointerleave', onLeave);
      window.addEventListener('blur', onLeave);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('blur', onLeave);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10" />;
}
