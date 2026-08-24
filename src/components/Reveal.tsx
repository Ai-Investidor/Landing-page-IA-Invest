import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

type RevealProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className' | 'children'>;

/** Wrapper genérico pro padrão `.reveal` — qualquer elemento vira "revela ao entrar na tela".
 *  Genérico sobre `as` pra aceitar props específicas da tag (href numa <a>, etc.) com tipagem real. */
export function Reveal<T extends ElementType = 'div'>({
  as,
  className = '',
  children,
  ...rest
}: RevealProps<T>) {
  const Tag = (as ?? 'div') as ElementType;
  const { ref, revealClass } = useReveal();
  // `as` é dinâmico (div/section/p/a/...), então o tipo exato do ref não se resolve estaticamente
  // contra HTMLDivElement; o cast é seguro porque useReveal só usa a API comum de Element.
  return (
    <Tag ref={ref as never} className={`${className} ${revealClass}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
