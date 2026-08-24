import { type RefObject, useEffect, useState } from 'react';

/**
 * Delight: o "sinal" do dividendo percorre o ciclo de reinvestimento uma vez, ao entrar na tela —
 * visualiza o mecanismo (o argumento central do produto), não é decoração solta. Porta 1:1 a lógica
 * que estava em main.js, incluindo o respeito a prefers-reduced-motion.
 */
export function useCyclePlay(ref: RefObject<HTMLElement | null>): boolean {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPlay(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return play;
}
