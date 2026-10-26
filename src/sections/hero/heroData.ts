// Dados do Mockup 1 ("Minha carteira" → aba Performance). Todos fictícios, de demonstração —
// o selo "Dados fictícios · Demonstração" e a nota do gráfico precisam acompanhar sempre.
// Regra do site: nenhum valor com sinal de menos.

/** Rentabilidade acumulada (%) mês a mês — 12 pontos, do mais antigo ao mês atual. */
export const SERIES_CARTEIRA = [0.12, 1.24, 2.31, 3.32, 4.41, 5.52, 6.63, 7.79, 8.96, 10.16, 11.42, 12.84];
export const SERIES_CDI = [0.06, 1.18, 2.04, 2.93, 3.81, 4.86, 5.9, 6.95, 8.04, 9.15, 10.38, 11.72];
export const CHART_MAX = 15;
export const CHART_TICKS = [0, 3, 6, 9, 12, 15];

export const KPIS = {
  mes: 1.08,
  periodo: 12.84,
  cdiPeriodo: 11.72,
  pctCdi: 109.56,
  mesesPositivos: 12,
};

/** Tamanho de desenho dos mockups, em px. O mockup é desenhado nesse tamanho e escalado pra caber. */
export const CANVAS = {
  desktop: { w: 1280, h: 760, chartW: 952, chartH: 206 },
  mobile: { w: 390, h: 790, chartW: 330, chartH: 180 },
} as const;
export type Variant = keyof typeof CANVAS;

const MESES_CURTOS = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
const MESES_LONGOS = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
];

/** Os 12 meses que terminam no mês atual — o mockup acompanha o calendário como o site real. */
export function buildPeriod(now = new Date()) {
  const months = Array.from({ length: 12 }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - 11 + i, 1);
    return { m: d.getMonth(), y: d.getFullYear() };
  });
  const first = months[0];
  const last = months[11];
  return {
    labels: months.map(({ m, y }) => `${MESES_CURTOS[m]}/${String(y).slice(2)}`),
    range: `${MESES_CURTOS[first.m]}/${first.y} a ${MESES_CURTOS[last.m]}/${last.y}`,
    currentMonth: `${MESES_LONGOS[last.m]} de ${last.y}`,
  };
}

/** "+12,84%" — sempre com sinal de mais, duas casas, vírgula decimal. */
export function fmtPct(v: number, decimals = 2, sign = true) {
  const n = v.toLocaleString('pt-BR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  return `${sign ? '+' : ''}${n}%`;
}
