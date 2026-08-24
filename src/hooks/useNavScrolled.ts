import { useEffect, useState } from 'react';

/** Estado "rolado" da nav fixa — vira `.nav.scrolled` acima de 30px de scroll. */
export function useNavScrolled(): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrolled;
}
