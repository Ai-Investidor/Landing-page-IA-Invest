import { useEffect, useRef, useState } from 'react';

// Um único IntersectionObserver compartilhado por toda a página — replica exatamente o
// comportamento do main.js original (`document.querySelectorAll('.reveal').forEach(el => io.observe(el))`),
// só que cada componente se registra a si mesmo em vez de uma varredura global do DOM.
let sharedObserver: IntersectionObserver | null = null;
const callbacks = new WeakMap<Element, () => void>();

function getObserver() {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callbacks.get(entry.target)?.();
            sharedObserver!.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
  }
  return sharedObserver;
}

/** Anexa a um elemento a animação de entrada por scroll (.reveal / .reveal.in). */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = getObserver();
    callbacks.set(el, () => setVisible(true));
    observer.observe(el);
    return () => {
      observer.unobserve(el);
      callbacks.delete(el);
    };
  }, []);

  return { ref, revealClass: `reveal${visible ? ' in' : ''}` };
}
