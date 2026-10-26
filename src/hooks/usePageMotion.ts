import { type RefObject, useEffect } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '../lib/gsap';

/**
 * Movimento comum da página:
 * - todo elemento com data-reveal entra subindo de leve quando aparece (uma vez, em cascata);
 * - links de âncora (#preco, #faq…) rolam suave até a seção.
 * Quem pediu "reduzir movimento" no sistema vê tudo no lugar, sem entrada.
 */
export function usePageMotion(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const items = gsap.utils.toArray<HTMLElement>('[data-reveal]');
        gsap.set(items, { y: 26, opacity: 0 });
        ScrollTrigger.batch(items, {
          start: 'top 88%',
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.09, overwrite: true }),
        });
      });
    },
    { scope }
  );

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;
      const link = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      const hash = link?.getAttribute('href');
      if (!link || !hash || hash === '#') return;
      const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (hash === '#top') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
        return;
      }
      const target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
}
