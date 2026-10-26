// Dados do Mockup 2 — painel administrativo (bastidores do fechamento do mês). Fictícios, de demonstração.
// Decisão do usuário: nada de contagem de investidores (pareceria tração inventada); o painel mostra
// o processo — revisão, publicação, relatórios — e a distribuição da carteira por classe de ativo.

export const ADMIN_CANVAS = {
  desktop: { w: 1280, h: 700 },
  mobile: { w: 390, h: 960 },
} as const;
export type AdminVariant = keyof typeof ADMIN_CANVAS;

const MESES = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
];

/** Competência = mês vigente, como na plataforma real ("2026-10" / "Outubro de 2026"). */
export function competence(now = new Date()) {
  const m = now.getMonth();
  const y = now.getFullYear();
  return { code: `${y}-${String(m + 1).padStart(2, '0')}`, label: `${MESES[m]} de ${y}` };
}

export interface AdminKpi {
  label: string;
  value: number;
  /** "3 de 3": o total aparece fixo depois do número que conta */
  of?: number;
  sub: string;
}

export function adminKpis(code: string): AdminKpi[] {
  return [
    { label: 'Ativos revisados', value: 36, sub: '12 por carteira' },
    { label: 'Carteiras ativas', value: 3, sub: 'Três perfis de risco' },
    { label: 'Versões publicadas', value: 3, sub: `Competência ${code}` },
    { label: 'Relatórios gerados', value: 3, of: 3, sub: 'Fechamento concluído' },
  ];
}

export interface ClosingStep {
  title: string;
  path: string;
  done?: number;
  total?: number;
  status?: string;
}

export const CLOSING_STEPS: ClosingStep[] = [
  { title: 'Teses revisadas', path: 'Ativos → Teses', done: 36, total: 36 },
  { title: 'Versões publicadas', path: 'Carteiras → Composição', done: 3, total: 3 },
  { title: 'Relatórios gerados', path: 'Carteiras → Relatórios', done: 3, total: 3 },
  { title: 'Comunicado aos assinantes', path: 'Comunidade → WhatsApp', status: 'Enviado' },
];

/** Distribuição da Carteira Conservadora por classe — soma 100%. */
export const CLASS_SPLIT = [
  { label: 'Renda fixa pós-fixada', value: 35 },
  { label: 'Renda fixa IPCA+', value: 20 },
  { label: 'Fundos imobiliários', value: 25 },
  { label: 'Ações · dividendos', value: 14 },
  { label: 'Ações · crescimento', value: 6 },
];
