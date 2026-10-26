import type { Ref } from 'react';
import {
  DemoBadge,
  ScreenFrame,
  ScreenKpi,
  ScreenSidebar,
  ScreenTopbar,
  ScreenTopbarMobile,
  type SideGroup,
} from '../../components/screen/ScreenParts';
import { PerformanceChart, type ChartHandle } from './PerformanceChart';
import { CANVAS, KPIS, type Variant, buildPeriod, fmtPct } from './heroData';

// Mockup 1 — plataforma AI Invest, tela "Minha carteira" na aba Performance.
// Cada peça leva um data-b="…" que a timeline do hero usa pra montar a tela no scroll:
//   side / side-item · top · head · tabs / tab-line · kpi · card / card-head · note
// (grid-h, grid-v, ylab, xlab ficam dentro do gráfico).
// A classe p3d (preserve-3d) precisa estar em todo nível entre a moldura e as peças que vêm "de frente".

type Period = ReturnType<typeof buildPeriod>;

const SIDEBAR: SideGroup[] = [
  {
    title: 'Principal',
    items: [
      { icon: 'bi-grid', label: 'Painel' },
      { icon: 'bi-pie-chart', label: 'Minha carteira', active: true },
    ],
  },
  { title: 'Documentos', items: [{ icon: 'bi-file-earmark-text', label: 'Relatórios' }] },
  { title: 'Descobrir', items: [{ icon: 'bi-layers', label: 'Carteiras' }] },
  { title: 'Conta', items: [{ icon: 'bi-person', label: 'Minha conta' }] },
];

function ProfileCard() {
  return (
    <div className="rounded-[8px] border border-screen-line bg-screen-card p-3">
      <div className="text-[11px] font-semibold text-screen-faint">Seu perfil</div>
      <div className="mt-1.5 flex items-center gap-2 text-[12.5px] font-semibold text-screen-text">
        <span className="flex gap-[3px]" aria-hidden="true">
          <span className="h-[7px] w-[7px] rounded-full bg-emerald-light" />
          <span className="h-[7px] w-[7px] rounded-full border border-screen-faint" />
          <span className="h-[7px] w-[7px] rounded-full border border-screen-faint" />
          <span className="h-[7px] w-[7px] rounded-full border border-screen-faint" />
        </span>
        Conservador
      </div>
      <div className="mt-1.5 text-[12px] font-medium text-emerald-light">Refazer avaliação</div>
    </div>
  );
}

/** Número que a timeline faz contar do zero. O texto inicial já é o valor final (vale sem animação). */
function Count({ to, dec = 2, prefix = '', suffix = '' }: { to: number; dec?: number; prefix?: string; suffix?: string }) {
  const text = `${prefix}${to.toLocaleString('pt-BR', { minimumFractionDigits: dec, maximumFractionDigits: dec })}${suffix}`;
  return (
    <span data-count data-to={to} data-dec={dec} data-prefix={prefix} data-suffix={suffix}>
      {text}
    </span>
  );
}

function KpiRow({ compact, period }: { compact?: boolean; period: Period }) {
  return (
    <div className={`p3d grid ${compact ? 'mt-4 grid-cols-2 gap-2' : 'mt-5 grid-cols-4 gap-3'}`}>
      <ScreenKpi compact={compact} accent label="Mês" value={<Count to={KPIS.mes} prefix="+" suffix="%" />} sub={period.currentMonth} />
      <ScreenKpi
        compact={compact}
        accent
        label="No período"
        value={<Count to={KPIS.periodo} prefix="+" suffix="%" />}
        sub={`CDI ${fmtPct(KPIS.cdiPeriodo)}`}
      />
      <ScreenKpi compact={compact} label="% do CDI" value={<Count to={KPIS.pctCdi} suffix="%" />} sub="Acumulado do período" />
      <ScreenKpi
        compact={compact}
        label="Meses positivos"
        value={
          <>
            <Count to={KPIS.mesesPositivos} dec={0} /> de 12
          </>
        }
        sub="No período selecionado"
      />
    </div>
  );
}

function Tabs({ compact }: { compact?: boolean }) {
  return (
    <div
      data-b="tabs"
      className={`flex border-b border-screen-line font-medium ${compact ? 'mt-4 gap-5 text-[13px]' : 'mt-5 gap-8 text-[14px]'}`}
    >
      <span className="pb-2.5 text-screen-muted">Composição</span>
      <span className="pb-2.5 text-screen-muted">Movimentações</span>
      <span className="relative pb-2.5 font-semibold text-screen-text">
        Performance
        <span data-b="tab-line" className="absolute inset-x-0 -bottom-px h-[2px] bg-emerald-light" />
      </span>
    </div>
  );
}

function LegendLine({ dashed }: { dashed?: boolean }) {
  return (
    <svg width="22" height="8" viewBox="0 0 22 8" aria-hidden="true">
      <line
        x1="1"
        x2="21"
        y1="4"
        y2="4"
        stroke={dashed ? 'rgba(241,240,236,.62)' : '#6fbf9a'}
        strokeWidth="2"
        strokeDasharray={dashed ? '3 3' : undefined}
      />
      <circle cx="11" cy="4" r="2.6" fill={dashed ? '#d9dcdf' : '#6fbf9a'} />
    </svg>
  );
}

function ChartCard({ chartRef, period, variant }: { chartRef?: Ref<ChartHandle>; period: Period; variant: Variant }) {
  const compact = variant === 'mobile';
  const { chartW, chartH } = CANVAS[variant];
  return (
    <div
      data-b="card"
      className={`flex min-h-0 flex-1 flex-col rounded-[8px] border border-screen-line bg-screen-card ${
        compact ? 'mt-3 px-3.5 py-3.5' : 'mt-4 px-5 py-[18px]'
      }`}
    >
      <div className="flex items-center justify-between">
        <span data-b="card-head" className={`${compact ? 'text-[13px]' : 'text-[14px]'} font-semibold text-screen-text`}>
          Evolução acumulada
        </span>
        <div data-b="card-head" className="flex gap-0.5 rounded-[6px] border border-screen-line p-0.5 text-[11px] font-semibold">
          {['3M', '6M', '12M', 'Máx'].map((r) => (
            <span key={r} className={`rounded-[4px] px-2 py-[3px] ${r === '12M' ? 'bg-screen-text text-screen' : 'text-screen-muted'}`}>
              {r}
            </span>
          ))}
        </div>
      </div>
      <div data-b="card-head" className="mt-2.5 flex gap-5 text-[12px] text-screen-muted">
        <span className="flex items-center gap-1.5">
          <LegendLine /> Carteira
        </span>
        <span className="flex items-center gap-1.5">
          <LegendLine dashed /> CDI
        </span>
      </div>
      <div className="mt-2.5">
        <PerformanceChart ref={chartRef} width={chartW} height={chartH} labels={period.labels} compact={compact} />
      </div>
      <div data-b="note" className="mt-auto pt-2 text-[12px] text-screen-faint">
        Simulação ilustrativa com dados fictícios.
      </div>
    </div>
  );
}

function DesktopScreen({ chartRef, period }: { chartRef?: Ref<ChartHandle>; period: Period }) {
  return (
    <div className="p3d flex h-full w-full">
      <ScreenSidebar groups={SIDEBAR} footer={<ProfileCard />} />
      <div className="p3d flex min-w-0 flex-1 flex-col">
        <ScreenTopbar title="Minha carteira" />
        <div className="p3d flex min-h-0 flex-1 flex-col px-8 py-6">
          <div className="p3d flex items-start justify-between gap-6">
            <div className="p3d max-w-[540px]">
              <div data-b="head" className="text-[12px] font-medium text-screen-faint">
                Minha carteira
              </div>
              <div data-b="head" className="mt-1 text-[26px] font-semibold leading-tight tracking-[-0.01em] text-screen-text">
                Carteira Conservadora Segurança
              </div>
              <p data-b="head" className="mt-2 text-[14px] leading-[1.55] text-screen-muted">
                Composição, movimentações do mês e rentabilidade comparada aos benchmarks. Todos os dados seguem a
                competência vigente da carteira.
              </p>
            </div>
            <div data-b="head" className="flex flex-none flex-col items-end gap-2">
              <DemoBadge />
              <span className="text-[12px] text-screen-faint">{period.range}</span>
            </div>
          </div>
          <Tabs />
          <KpiRow period={period} />
          <ChartCard chartRef={chartRef} period={period} variant="desktop" />
        </div>
      </div>
    </div>
  );
}

function MobileScreen({ chartRef, period }: { chartRef?: Ref<ChartHandle>; period: Period }) {
  return (
    <div className="p3d flex h-full w-full flex-col">
      <ScreenTopbarMobile />
      <div className="p3d flex min-h-0 flex-1 flex-col px-4 pb-4 pt-4">
        <div data-b="head" className="text-[11px] font-medium text-screen-faint">
          Minha carteira
        </div>
        <div data-b="head" className="mt-1 text-[20px] font-semibold leading-tight tracking-[-0.01em] text-screen-text">
          Carteira Conservadora Segurança
        </div>
        <p data-b="head" className="mt-1.5 text-[12.5px] leading-[1.5] text-screen-muted">
          Composição, movimentações e rentabilidade comparada aos benchmarks.
        </p>
        <div data-b="head" className="mt-2.5 flex items-center gap-2.5">
          <DemoBadge compact />
          <span className="text-[11px] text-screen-faint">{period.range}</span>
        </div>
        <Tabs compact />
        <KpiRow compact period={period} />
        <ChartCard chartRef={chartRef} period={period} variant="mobile" />
      </div>
    </div>
  );
}

interface MockupProps {
  variant: Variant;
  scale: number;
  chartRef?: Ref<ChartHandle>;
  frameRef?: Ref<HTMLDivElement>;
}

/** A moldura é quem inclina em 3D; o fundo escuro dela começa transparente (a "tela limpa"). */
export function DashboardMockup({ variant, scale, chartRef, frameRef }: MockupProps) {
  const { w, h } = CANVAS[variant];
  const period = buildPeriod();

  return (
    <ScreenFrame w={w} h={h} scale={scale} frameRef={frameRef}>
      {variant === 'desktop' ? <DesktopScreen chartRef={chartRef} period={period} /> : <MobileScreen chartRef={chartRef} period={period} />}
    </ScreenFrame>
  );
}
