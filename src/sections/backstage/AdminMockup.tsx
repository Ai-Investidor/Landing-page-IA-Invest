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
import { ADMIN_CANVAS, type AdminVariant, CLASS_SPLIT, CLOSING_STEPS, adminKpis, competence } from './backstageData';

// Mockup 2 — painel administrativo, "Visão geral" do fechamento do mês.
// Ganchos da animação: data-a="head" | "card" | "check" ; data-jq="count" + data-group (número que sobe) ;
// data-jq="bar" (barra que enche e seca). Os valores finais já vêm no HTML (valem sem animação).

const SIDEBAR: SideGroup[] = [
  {
    title: 'Gestão',
    items: [
      { icon: 'bi-grid', label: 'Painel', active: true },
      { icon: 'bi-layers', label: 'Carteiras' },
      { icon: 'bi-people', label: 'Usuários' },
    ],
  },
  { title: 'Sistema', items: [{ icon: 'bi-sliders', label: 'Configurações' }] },
  {
    title: 'Minha área',
    items: [
      { icon: 'bi-pie-chart', label: 'Área do investidor' },
      { icon: 'bi-person', label: 'Minha conta' },
    ],
  },
];

/** group: em que momento o número sobe — kpi (junto dos cards), status (com os checks), split (com as barras) */
function Num({ to, suffix = '', group }: { to: number; suffix?: string; group: 'kpi' | 'status' | 'split' }) {
  return (
    <span data-jq="count" data-group={group} data-to={to} data-suffix={suffix}>
      {to.toLocaleString('pt-BR')}
      {suffix}
    </span>
  );
}

function CompetenceCard({ code }: { code: string }) {
  return (
    <div className="rounded-[8px] border border-screen-line bg-screen-card p-3">
      <div className="text-[11px] font-semibold text-screen-faint">Competência vigente</div>
      <div className="mt-1 font-mono text-[13px] font-semibold text-screen-text">{code}</div>
      <div className="mt-1.5 flex items-center gap-1.5 text-[12px] font-medium text-emerald-light">
        <span className="h-[7px] w-[7px] rounded-full bg-emerald-light" aria-hidden="true" /> Fechamento concluído
      </div>
    </div>
  );
}

function Kpis({ compact, code }: { compact?: boolean; code: string }) {
  return (
    <div className={`grid ${compact ? 'mt-4 grid-cols-2 gap-2' : 'mt-6 grid-cols-4 gap-3'}`}>
      {adminKpis(code).map((k) => (
        <ScreenKpi
          key={k.label}
          compact={compact}
          label={k.label}
          sub={k.sub}
          value={
            <>
              <Num to={k.value} group="kpi" />
              {k.of !== undefined && ` de ${k.of}`}
            </>
          }
        />
      ))}
    </div>
  );
}

function StatusCard({ compact, code }: { compact?: boolean; code: string }) {
  return (
    <div data-a="card" className="flex min-h-0 flex-col rounded-[8px] border border-screen-line bg-screen-card">
      <div className={`flex items-center justify-between border-b border-screen-line ${compact ? 'px-3.5 py-3' : 'px-5 py-4'}`}>
        <span className={`${compact ? 'text-[13px]' : 'text-[14px]'} font-semibold text-screen-text`}>Status do fechamento</span>
        <span className="text-[12px] text-screen-faint">Competência {code}</span>
      </div>
      {CLOSING_STEPS.map((step, i) => (
        <div
          key={step.title}
          className={`flex items-center gap-3 ${i < CLOSING_STEPS.length - 1 ? 'border-b border-screen-line' : ''} ${
            compact ? 'px-3.5 py-3' : 'px-5 py-[15px]'
          }`}
        >
          <span data-a="check" className="grid h-5 w-5 flex-none place-items-center rounded-full bg-emerald-light text-[12px] text-screen">
            <i className="bi bi-check-lg" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <div className={`${compact ? 'text-[13px]' : 'text-[14px]'} font-semibold text-screen-text`}>{step.title}</div>
            <div className={`${compact ? 'text-[11px]' : 'text-[12px]'} text-screen-faint`}>{step.path}</div>
          </div>
          <span className={`${compact ? 'text-[12px]' : 'text-[13px]'} font-bold tabular-nums text-screen-text`}>
            {step.status ?? (
              <>
                <Num to={step.done ?? 0} group="status" /> de {step.total}
              </>
            )}
          </span>
          <i className="bi bi-arrow-right text-[12px] text-screen-faint" aria-hidden="true" />
        </div>
      ))}
    </div>
  );
}

function SplitCard({ compact }: { compact?: boolean }) {
  return (
    <div data-a="card" className="flex min-h-0 flex-col rounded-[8px] border border-screen-line bg-screen-card">
      <div className={`border-b border-screen-line ${compact ? 'px-3.5 py-3' : 'px-5 py-4'}`}>
        <div className={`${compact ? 'text-[13px]' : 'text-[14px]'} font-semibold text-screen-text`}>Distribuição por classe</div>
        <div className="mt-0.5 text-[12px] text-screen-faint">Carteira Conservadora</div>
      </div>
      <div className={`flex flex-1 flex-col ${compact ? 'gap-3 px-3.5 py-3.5' : 'justify-between gap-3 px-5 py-4'}`}>
        {CLASS_SPLIT.map((row) => (
          <div key={row.label}>
            <div className="flex items-baseline justify-between">
              <span className={`${compact ? 'text-[12px]' : 'text-[13px]'} text-screen-muted`}>{row.label}</span>
              <span className={`${compact ? 'text-[12px]' : 'text-[13px]'} font-bold tabular-nums text-screen-text`}>
                <Num to={row.value} suffix="%" group="split" />
              </span>
            </div>
            <div className="mt-1.5 h-[7px] rounded-full bg-screen-raise">
              <div data-jq="bar" data-to={row.value} className="h-full rounded-full bg-emerald-light" style={{ width: `${row.value}%` }} />
            </div>
          </div>
        ))}
        <div className="pt-1 text-[12px] text-screen-faint">100% alocado · 12 ativos</div>
      </div>
    </div>
  );
}

function Header({ compact, label }: { compact?: boolean; label: string }) {
  if (compact) {
    return (
      <>
        <div data-a="head" className="text-[11px] font-medium text-screen-faint">
          Administração
        </div>
        <div data-a="head" className="mt-1 text-[20px] font-semibold leading-tight text-screen-text">
          Visão geral
        </div>
        <p data-a="head" className="mt-1.5 text-[12.5px] leading-[1.5] text-screen-muted">
          {label} · 3 versões publicadas e 3 relatórios gerados.
        </p>
        <div data-a="head" className="mt-2.5">
          <DemoBadge compact />
        </div>
      </>
    );
  }
  return (
    <div className="flex items-start justify-between gap-6">
      <div>
        <div data-a="head" className="text-[12px] font-medium text-screen-faint">
          Administração
        </div>
        <div data-a="head" className="mt-1 text-[26px] font-semibold leading-tight tracking-[-0.01em] text-screen-text">
          Visão geral
        </div>
        <p data-a="head" className="mt-2 text-[14px] text-screen-muted">
          {label} · 3 versões publicadas e 3 relatórios gerados.
        </p>
      </div>
      <div data-a="head" className="flex flex-none flex-col items-end gap-2.5">
        <DemoBadge />
        <span className="rounded-[6px] border border-screen-line bg-screen-raise px-3 py-1.5 text-[13px] font-semibold text-screen-text">
          Gerenciar carteiras
        </span>
      </div>
    </div>
  );
}

export function AdminMockup({ variant, scale, frameRef }: { variant: AdminVariant; scale: number; frameRef?: Ref<HTMLDivElement> }) {
  const { w, h } = ADMIN_CANVAS[variant];
  const { code, label } = competence();

  return (
    <ScreenFrame w={w} h={h} scale={scale} frameRef={frameRef}>
      {variant === 'desktop' ? (
        <div className="flex h-full w-full">
          <ScreenSidebar groups={SIDEBAR} footer={<CompetenceCard code={code} />} />
          <div className="flex min-w-0 flex-1 flex-col">
            <ScreenTopbar title="Painel administrativo" />
            <div className="flex min-h-0 flex-1 flex-col px-8 py-6">
              <Header label={label} />
              <Kpis code={code} />
              <div className="mt-5 grid min-h-0 flex-1 grid-cols-[1fr_340px] gap-4">
                <StatusCard code={code} />
                <SplitCard />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-full w-full flex-col">
          <ScreenTopbarMobile />
          <div className="flex min-h-0 flex-1 flex-col gap-3 px-4 pb-4 pt-4">
            <div>
              <Header compact label={label} />
              <Kpis compact code={code} />
            </div>
            <StatusCard compact code={code} />
            <SplitCard compact />
          </div>
        </div>
      )}
    </ScreenFrame>
  );
}
