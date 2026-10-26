import type { ReactNode, Ref } from 'react';
import { LogoMark } from '../Logo';

// Peças compartilhadas pelos mockups da plataforma (hero e bastidores).
// Os data-b="…" são os ganchos da timeline da hero; nos bastidores ficam inofensivos.

export interface SideGroup {
  title: string;
  items: { icon: string; label: string; active?: boolean }[];
}

/** Moldura da tela + conteúdo desenhado em w×h e reduzido com zoom (texto continua nítido). */
export function ScreenFrame({
  w,
  h,
  scale,
  frameRef,
  children,
}: {
  w: number;
  h: number;
  scale: number;
  frameRef?: Ref<HTMLDivElement>;
  children: ReactNode;
}) {
  return (
    <div
      data-frame
      aria-hidden="true"
      ref={frameRef}
      className="p3d absolute inset-0 origin-[50%_0%] rounded-[10px] border border-screen-line bg-screen shadow-[0_40px_80px_-40px_rgba(15,27,45,.55)]"
    >
      <div className="p3d absolute left-0 top-0" style={{ width: w, height: h, zoom: scale }}>
        {children}
      </div>
    </div>
  );
}

export function ScreenSidebar({ groups, footer }: { groups: SideGroup[]; footer?: ReactNode }) {
  return (
    <aside
      data-b="side"
      className="flex w-[224px] flex-none flex-col rounded-l-[11px] border-r border-screen-line bg-screen-side px-4 pb-4 pt-6"
    >
      <div data-b="side-item" className="mb-8 px-2 text-screen-text">
        <LogoMark className="h-[17px]" />
      </div>
      {groups.map((group) => (
        <div key={group.title} className="mb-4">
          <div data-b="side-item" className="mb-1.5 px-2 text-[11px] font-semibold text-screen-faint">
            {group.title}
          </div>
          {group.items.map((item) => (
            <div
              data-b="side-item"
              key={item.label}
              className={`flex items-center gap-3 rounded-[6px] px-2.5 py-2 text-[13.5px] font-medium ${
                item.active ? 'bg-screen-raise text-screen-text shadow-[inset_2px_0_0_#6fbf9a]' : 'text-screen-muted'
              }`}
            >
              <i className={`bi ${item.icon} text-[14px]`} aria-hidden="true" /> {item.label}
            </div>
          ))}
        </div>
      ))}
      {footer && (
        <div data-b="side-item" className="mt-auto">
          {footer}
        </div>
      )}
    </aside>
  );
}

export function ScreenTopbar({ title }: { title: string }) {
  return (
    <div data-b="top" className="flex h-14 flex-none items-center justify-between border-b border-screen-line px-8">
      <span className="text-[14px] font-semibold text-screen-text">{title}</span>
      <div className="flex items-center gap-3">
        <span className="grid h-8 w-8 place-items-center rounded-[6px] border border-screen-line text-[14px] text-screen-muted">
          <i className="bi bi-sun" aria-hidden="true" />
        </span>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-screen-text text-[11px] font-bold text-screen">AI</span>
        <i className="bi bi-chevron-down text-[10px] text-screen-faint" aria-hidden="true" />
      </div>
    </div>
  );
}

export function ScreenTopbarMobile() {
  return (
    <div data-b="top" className="flex h-[52px] flex-none items-center justify-between border-b border-screen-line px-4">
      <span className="text-screen-text">
        <LogoMark className="h-[14px]" />
      </span>
      <div className="flex items-center gap-2.5">
        <span className="grid h-7 w-7 place-items-center rounded-[6px] border border-screen-line text-[12px] text-screen-muted">
          <i className="bi bi-sun" aria-hidden="true" />
        </span>
        <span className="grid h-7 w-7 place-items-center rounded-full bg-screen-text text-[10px] font-bold text-screen">AI</span>
        <i className="bi bi-list text-[18px] text-screen-muted" aria-hidden="true" />
      </div>
    </div>
  );
}

export function DemoBadge({ compact }: { compact?: boolean }) {
  return (
    <span
      className={`whitespace-nowrap rounded-[6px] border border-screen-line bg-screen-card font-medium text-screen-text ${
        compact ? 'px-2 py-1 text-[11px]' : 'px-3 py-1.5 text-[12px]'
      }`}
    >
      Dados fictícios · Demonstração
    </span>
  );
}

export function ScreenKpi({
  label,
  value,
  sub,
  accent,
  compact,
}: {
  label: string;
  value: ReactNode;
  sub: string;
  accent?: boolean;
  compact?: boolean;
}) {
  return (
    <div data-b="kpi" className={`rounded-[8px] border border-screen-line bg-screen-card ${compact ? 'px-3 py-2.5' : 'px-5 py-3.5'}`}>
      <div className={`${compact ? 'text-[11px]' : 'text-[12px]'} font-semibold text-screen-faint`}>{label}</div>
      <div
        className={`font-bold leading-none tracking-[-0.01em] tabular-nums ${compact ? 'mt-1 text-[20px]' : 'mt-1.5 text-[30px]'} ${
          accent ? 'text-emerald-light' : 'text-screen-text'
        }`}
      >
        {value}
      </div>
      <div className={`${compact ? 'mt-1.5 text-[11px]' : 'mt-2 text-[13px]'} truncate text-screen-muted`}>{sub}</div>
    </div>
  );
}
