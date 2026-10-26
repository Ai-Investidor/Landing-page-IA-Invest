import { type Ref, useCallback, useImperativeHandle, useLayoutEffect, useMemo, useRef } from 'react';
import { CHART_MAX, CHART_TICKS, SERIES_CARTEIRA, SERIES_CDI, fmtPct } from './heroData';

/** Controle imperativo do gráfico: o scroll chama draw(p) com p de 0 a 1. */
export interface ChartHandle {
  draw: (p: number) => void;
}

interface Props {
  ref?: Ref<ChartHandle>;
  width: number;
  height: number;
  labels: string[];
  compact?: boolean;
}

const MINT = '#6fbf9a';
const CDI = 'rgba(241,240,236,.62)';
const GRID = 'rgba(241,240,236,.08)';
const TICK = 'rgba(241,240,236,.5)';

/**
 * Gráfico "Evolução acumulada" (Carteira × CDI).
 * Funciona como o controle de volume do Windows: o progresso p define até onde a linha chegou,
 * e uma bolinha na ponta carrega o valor acumulado naquele ponto. Rolou pra baixo, sobe; voltou, desce.
 * A parte estática (grade, eixos) é React; a parte que se mexe é escrita direto no DOM a cada quadro.
 */
export function PerformanceChart({ ref, width, height, labels, compact = false }: Props) {
  const geo = useMemo(() => {
    const pad = compact ? { l: 34, r: 66, t: 12, b: 26 } : { l: 46, r: 98, t: 14, b: 30 };
    const n = SERIES_CARTEIRA.length;
    const plotW = width - pad.l - pad.r;
    const plotH = height - pad.t - pad.b;
    const x = (i: number) => pad.l + (i / (n - 1)) * plotW;
    const y = (v: number) => pad.t + (1 - v / CHART_MAX) * plotH;
    return { pad, n, x, y, base: pad.t + plotH, right: pad.l + plotW };
  }, [width, height, compact]);

  const lineC = useRef<SVGPathElement>(null);
  const areaC = useRef<SVGPathElement>(null);
  const lineD = useRef<SVGPathElement>(null);
  const dotsC = useRef<SVGGElement>(null);
  const dotsD = useRef<SVGGElement>(null);
  const headC = useRef<SVGGElement>(null);
  const headD = useRef<SVGGElement>(null);
  const labC = useRef<SVGTextElement>(null);
  const labD = useRef<SVGTextElement>(null);
  const lastP = useRef(1);

  const draw = useCallback(
    (p: number) => {
      lastP.current = p;
      const { n, x, y, base } = geo;
      const t = Math.max(0, Math.min(1, p)) * (n - 1);
      const i0 = Math.floor(t);
      const f = t - i0;
      const visible = Math.min(1, p * 40); // bolinha e rótulo aparecem assim que o traço começa

      const trace = (vals: number[]) => {
        const pts: [number, number][] = [];
        for (let i = 0; i <= i0; i++) pts.push([x(i), y(vals[i])]);
        let hv = vals[i0];
        if (i0 < n - 1 && f > 0) {
          hv = vals[i0] + (vals[i0 + 1] - vals[i0]) * f;
          pts.push([x(i0 + f), y(hv)]);
        }
        const d = 'M' + pts.map(([px, py]) => `${px.toFixed(1)},${py.toFixed(1)}`).join('L');
        const [hx, hy] = pts[pts.length - 1];
        return { d, pts, hx, hy, hv };
      };

      const c = trace(SERIES_CARTEIRA);
      const k = trace(SERIES_CDI);

      lineC.current?.setAttribute('d', c.d);
      lineD.current?.setAttribute('d', k.d);
      areaC.current?.setAttribute(
        'd',
        `M${c.pts[0][0].toFixed(1)},${base}L` +
          c.pts.map(([px, py]) => `${px.toFixed(1)},${py.toFixed(1)}`).join('L') +
          `L${c.hx.toFixed(1)},${base}Z`
      );

      // Pontos de cada mês: acendem quando a linha passa por eles
      [dotsC.current, dotsD.current].forEach((g) => {
        if (!g) return;
        Array.from(g.children).forEach((dot, i) => dot.setAttribute('opacity', i <= t + 1e-6 && p > 0 ? '1' : '0'));
      });

      headC.current?.setAttribute('transform', `translate(${c.hx.toFixed(1)},${c.hy.toFixed(1)})`);
      headD.current?.setAttribute('transform', `translate(${k.hx.toFixed(1)},${k.hy.toFixed(1)})`);
      headC.current?.setAttribute('opacity', String(visible));
      headD.current?.setAttribute('opacity', String(visible));

      if (labC.current && labD.current) {
        labC.current.textContent = fmtPct(c.hv);
        labD.current.textContent = fmtPct(k.hv);
        const lx = (hx: number) => hx + (compact ? 9 : 14);
        labC.current.setAttribute('x', lx(c.hx).toFixed(1));
        labC.current.setAttribute('y', (c.hy - (compact ? 7 : 9)).toFixed(1));
        labD.current.setAttribute('x', lx(k.hx).toFixed(1));
        labD.current.setAttribute('y', (k.hy + (compact ? 14 : 19)).toFixed(1));
        labC.current.setAttribute('opacity', String(visible));
        labD.current.setAttribute('opacity', String(visible));
      }
    },
    [geo, compact]
  );

  useImperativeHandle(ref, () => ({ draw }), [draw]);
  useLayoutEffect(() => draw(lastP.current), [draw]);

  const { pad, x, y, base, right } = geo;
  const fs = compact ? 10 : 12;
  const gradId = compact ? 'areaGradM' : 'areaGradD';

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="block overflow-visible" aria-hidden="true">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={MINT} stopOpacity=".26" />
          <stop offset="100%" stopColor={MINT} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Grade horizontal + rótulos do eixo Y */}
      {CHART_TICKS.map((v) => (
        <g key={v}>
          <line data-b="grid-h" x1={pad.l} x2={right} y1={y(v)} y2={y(v)} stroke={v === 0 ? 'rgba(241,240,236,.22)' : GRID} />
          <text data-b="ylab" x={pad.l - 10} y={y(v) + fs * 0.35} textAnchor="end" fontSize={fs} fill={TICK}>
            {v}%
          </text>
        </g>
      ))}

      {/* Grade vertical + meses */}
      {labels.map((label, i) => (
        <g key={label}>
          <line data-b="grid-v" x1={x(i)} x2={x(i)} y1={pad.t} y2={base} stroke={GRID} />
          {(!compact || i % 2 === 1) && (
            <text data-b="xlab" x={x(i)} y={base + (compact ? 17 : 21)} textAnchor="middle" fontSize={fs} fill={TICK}>
              {label}
            </text>
          )}
        </g>
      ))}

      <path ref={areaC} fill={`url(#${gradId})`} />
      <path ref={lineD} fill="none" stroke={CDI} strokeWidth={compact ? 1.6 : 2} strokeDasharray="6 6" strokeLinecap="round" />
      <path ref={lineC} fill="none" stroke={MINT} strokeWidth={compact ? 2.2 : 2.6} strokeLinejoin="round" strokeLinecap="round" />

      <g ref={dotsD}>
        {SERIES_CDI.map((v, i) => (
          <circle key={i} cx={x(i)} cy={y(v)} r={compact ? 2.4 : 3.2} fill="#d9dcdf" />
        ))}
      </g>
      <g ref={dotsC}>
        {SERIES_CARTEIRA.map((v, i) => (
          <circle key={i} cx={x(i)} cy={y(v)} r={compact ? 2.6 : 3.4} fill={MINT} />
        ))}
      </g>

      {/* As "bolinhas" de volume na ponta de cada linha */}
      <g ref={headD}>
        <circle r={compact ? 7 : 9} fill="#d9dcdf" opacity=".18" />
        <circle r={compact ? 3.6 : 4.6} fill="#d9dcdf" stroke="#0f1c2c" strokeWidth="2" />
      </g>
      <g ref={headC}>
        <circle r={compact ? 9 : 12} fill={MINT} opacity=".22" />
        <circle r={compact ? 4.4 : 5.8} fill={MINT} stroke="#0f1c2c" strokeWidth="2" />
      </g>

      <text ref={labC} fontSize={compact ? 12 : 16} fontWeight={600} fill={MINT} style={{ fontVariantNumeric: 'tabular-nums' }} />
      <text ref={labD} fontSize={compact ? 12 : 16} fontWeight={600} fill="rgba(241,240,236,.78)" style={{ fontVariantNumeric: 'tabular-nums' }} />
    </svg>
  );
}
