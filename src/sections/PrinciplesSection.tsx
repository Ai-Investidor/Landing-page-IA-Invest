import { principleFeats } from '../data/content';

// Seção 7 — Princípios. Ser uma empresa nova é a posição, não letra miúda.

export function PrinciplesSection() {
  return (
    <section id="comeco" className="section bg-navy text-paper">
      <div className="page">
        <div data-reveal className="max-w-[880px]">
          <h2 className="h2 text-paper">
            Todo concorrente deste mercado esconde o tamanho real da operação. <em className="accent-light">Nós não.</em>
          </h2>
          <p className="lead mt-5 max-w-[62ch] text-paper/75">
            A AI Invest está no início. Isso não é um aviso em letra miúda — é a posição. Entrar agora é entrar no andar
            térreo, com o método já validado e nada escondido.
          </p>
        </div>

        <div className="mt-14 grid border-t border-paper/15 md:grid-cols-3">
          {principleFeats.map((f, i) => (
            <div
              data-reveal
              key={f.title}
              className={`border-b border-paper/15 py-8 md:border-b-0 md:py-10 ${i > 0 ? 'md:border-l md:pl-9' : ''} ${
                i < principleFeats.length - 1 ? 'md:pr-9' : ''
              }`}
            >
              <span className="font-mono text-[.82rem] font-semibold text-gold">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 text-[1.4rem] text-paper">{f.title}</h3>
              <p className="mt-3 text-[.96rem] leading-[1.7] text-paper/70">{f.text}</p>
            </div>
          ))}
        </div>

        <p data-reveal className="mt-10 flex items-start gap-3 text-[1rem] leading-[1.6] text-paper/80 md:mt-12">
          <i className="bi bi-shield-check mt-0.5 text-[1.1rem] text-emerald-light" aria-hidden="true" />
          <span>
            Nossa única receita é a assinatura. Não somos corretora, não distribuímos produto e não recebemos comissão de
            nenhum ativo recomendado.
          </span>
        </p>
      </div>
    </section>
  );
}
