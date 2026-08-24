import { BrandLogo } from './Logo';
import { NAV_LINKS } from '../data/content';
import { useNavScrolled } from '../hooks/useNavScrolled';
import { useMobileDrawer } from '../hooks/useMobileDrawer';
import { useActiveSection } from '../hooks/useActiveSection';

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

export function Nav() {
  const scrolled = useNavScrolled();
  const { open, toggleDrawer, closeDrawer, menuBtnRef, firstLinkRef } = useMobileDrawer();
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} aria-label="Navegação principal">
      <div className="container">
        <BrandLogo />
        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeId === link.href.slice(1) ? 'active' : undefined}
              aria-current={activeId === link.href.slice(1) ? 'true' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="nav-cta">
          <a href="#preco" className="btn btn-primary">
            Quero a carteira
          </a>
          <button
            type="button"
            ref={menuBtnRef}
            className="menu-btn"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="navDrawer"
            onClick={toggleDrawer}
          >
            <i className={`bi ${open ? 'bi-x-lg' : 'bi-list'}`} aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className={`nav-scrim${open ? ' open' : ''}`} onClick={() => closeDrawer()} />
      <nav id="navDrawer" className={`nav-drawer${open ? ' open' : ''}`} aria-label="Menu de navegação">
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            ref={i === 0 ? firstLinkRef : undefined}
            onClick={() => closeDrawer()}
          >
            {link.label}
          </a>
        ))}
        <a href="#preco" className="btn btn-primary nav-drawer-cta" onClick={() => closeDrawer()}>
          Quero a carteira
        </a>
      </nav>
    </nav>
  );
}
