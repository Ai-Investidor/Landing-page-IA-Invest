import { useEffect, useState } from 'react';

/**
 * Observa quais seções (por id) estão visíveis e retorna o id da seção "ativa" —
 * a mais próxima do topo do viewport entre as que estão parcialmente visíveis.
 * Alimenta o destaque permanente do link de nav correspondente (menu estilo Apple:
 * a seção atual fica marcada, não só o link sob o mouse).
 */
export function useActiveSection(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Entre as seções visíveis agora, a "ativa" é a que está mais perto do topo
        // (a próxima que o usuário está prestes a ler), não simplesmente a primeira do DOM.
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        const closest = visible.reduce((best, e) =>
          e.boundingClientRect.top < best.boundingClientRect.top ? e : best
        );
        setActive(closest.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
