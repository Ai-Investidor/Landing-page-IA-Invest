import { useId, useState } from 'react';
import { type FaqItemData, faqItems } from '../data/content';

// Seção 10 — Dúvidas. Acordeão com hairline entre perguntas; abre animando a altura (grid-template-rows).

function FaqRow({ item }: { item: FaqItemData }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div data-reveal className="group relative border-t border-line">
      {/* Cartão de papel atrás da pergunta: aparece de leve no hover e por inteiro quando aberta,
          cobrindo a malha de pontos do fundo pra leitura ficar limpa. Fica fora do fluxo (absolute),
          então o texto não se desloca. */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-px -top-px left-[-16px] right-[-16px] rounded-card border transition-[opacity,box-shadow,border-color] duration-300 md:left-[-22px] md:right-[-22px] ${
          open
            ? 'border-emerald/20 bg-paper opacity-100 shadow-paper'
            : 'border-transparent bg-paper opacity-0 group-hover:opacity-70'
        }`}
      />
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={id}
        className="relative flex w-full items-center justify-between gap-6 py-6 text-left font-display text-[1.2rem] text-navy transition-colors hover:text-emerald md:text-[1.3rem]"
      >
        {item.q}
        <span
          aria-hidden="true"
          className={`grid h-8 w-8 flex-none place-items-center rounded-full border border-line-strong text-[1rem] text-navy transition-transform duration-300 ${
            open ? 'rotate-45 border-emerald text-emerald' : ''
          }`}
        >
          <i className="bi bi-plus-lg" />
        </span>
      </button>
      <div
        id={id}
        role="region"
        className={`relative grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[64ch] pb-6 text-[1rem] leading-[1.75] text-navy-soft">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className="section">
      <div className="page grid gap-x-20 gap-y-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div data-reveal className="self-start lg:sticky lg:top-28">
          <h2 className="h2 text-navy">
            Tudo o que você precisa saber <em className="accent">antes de assinar.</em>
          </h2>
          <p className="lead mt-5 max-w-[40ch] text-navy-soft">
            Não achou sua dúvida? Fale com a gente no Instagram{' '}
            <a
              href="https://www.instagram.com/aiinvest.oficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald underline decoration-emerald/30 underline-offset-4 hover:decoration-emerald"
            >
              @aiinvest.oficial
            </a>
            .
          </p>
        </div>
        <div className="border-b border-line">
          {faqItems.map((item) => (
            <FaqRow item={item} key={item.q} />
          ))}
        </div>
      </div>
    </section>
  );
}
