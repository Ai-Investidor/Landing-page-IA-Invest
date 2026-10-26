import { BrandLogo } from '../components/Logo';
import { NAV_LINKS } from '../data/content';
import { useNavScrolled } from '../hooks/useNavScrolled';
import { useMobileDrawer } from '../hooks/useMobileDrawer';
import { useActiveSection } from '../hooks/useActiveSection';

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

const linkBase =
  'relative text-[.86rem] font-medium transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-[1.5px] after:bg-emerald after:transition-[width] after:duration-300 hover:text-navy hover:after:w-full focus-visible:text-navy';

export function Nav() {
  const scrolled = useNavScrolled();
  const { open, toggleDrawer, closeDrawer, menuBtnRef, firstLinkRef } = useMobileDrawer();
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <header
      data-nav
      className={`fixed inset-x-0 top-0 z-50 border-b bg-paper pt-[env(safe-area-inset-top)] transition-[border-color,box-shadow] duration-300 ${
        scrolled ? 'border-line shadow-[0_1px_0_rgba(15,27,45,.02)]' : 'border-transparent'
      }`}
    >
      {/* z-[60]: logo e botão de fechar ficam por cima do drawer aberto */}
      <div className="page relative z-[60] flex h-16 items-center justify-between gap-6 lg:h-[72px]">
        <BrandLogo className="h-[22px] lg:h-6" />

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = activeId === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={active ? 'true' : undefined}
                className={`${linkBase} ${active ? 'font-semibold text-navy after:w-full' : 'text-navy-soft after:w-0'}`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#preco" className="btn btn-primary btn-sm hidden sm:inline-flex">
            Assinar a carteira
          </a>
          <button
            type="button"
            ref={menuBtnRef}
            className="flex h-11 w-11 flex-none items-center justify-center rounded-field border-[1.5px] border-line-strong bg-paper text-[1.1rem] text-navy transition-colors hover:border-navy focus-visible:border-emerald focus-visible:text-emerald lg:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="navDrawer"
            onClick={toggleDrawer}
          >
            <i className={`bi ${open ? 'bi-x-lg' : 'bi-list'}`} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Drawer mobile */}
      <div
        className={`fixed inset-0 z-40 bg-navy/40 transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => closeDrawer()}
        aria-hidden="true"
      />
      <nav
        id="navDrawer"
        aria-label="Menu de navegação"
        className={`fixed right-0 top-0 z-50 flex h-[100dvh] w-[min(82vw,320px)] flex-col border-l border-line bg-paper px-[max(26px,env(safe-area-inset-right))] pb-[max(32px,env(safe-area-inset-bottom))] pt-24 shadow-[-16px_0_40px_-20px_rgba(15,27,45,.25)] transition-[transform,visibility] duration-[350ms] ease-[cubic-bezier(.2,.7,.2,1)] lg:hidden ${
          open ? 'visible translate-x-0' : 'invisible translate-x-full'
        }`}
      >
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            ref={i === 0 ? firstLinkRef : undefined}
            onClick={() => closeDrawer()}
            className="border-b border-line px-1 py-3.5 font-display text-[1.05rem] text-navy-soft transition-colors hover:text-emerald focus-visible:text-emerald"
          >
            {link.label}
          </a>
        ))}
        <a href="#preco" className="btn btn-primary mt-5" onClick={() => closeDrawer()}>
          Assinar a carteira
        </a>
      </nav>
    </header>
  );
}
