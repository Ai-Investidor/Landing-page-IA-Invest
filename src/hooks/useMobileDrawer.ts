import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Porta 1:1 a lógica do drawer mobile que estava em main.js: abre/fecha, fecha com Esc
 * (devolvendo o foco pro botão), fecha ao redimensionar pra acima do breakpoint mobile,
 * e trava o scroll do body enquanto aberto.
 */
export function useMobileDrawer() {
  const [open, setOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  const openDrawer = useCallback(() => setOpen(true), []);

  const closeDrawer = useCallback((opts?: { restoreFocus?: boolean }) => {
    setOpen(false);
    if (opts?.restoreFocus) menuBtnRef.current?.focus();
  }, []);

  const toggleDrawer = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    if (open) firstLinkRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) closeDrawer({ restoreFocus: true });
    };
    const onResize = () => {
      if (window.innerWidth >= 1024 && open) closeDrawer();
    };
    document.addEventListener('keydown', onKeydown);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKeydown);
      window.removeEventListener('resize', onResize);
    };
  }, [open, closeDrawer]);

  // Garante que o scroll do body nunca fique travado se o componente desmontar com o drawer aberto
  useEffect(() => () => document.body.classList.remove('nav-open'), []);

  return { open, openDrawer, closeDrawer, toggleDrawer, menuBtnRef, firstLinkRef };
}
