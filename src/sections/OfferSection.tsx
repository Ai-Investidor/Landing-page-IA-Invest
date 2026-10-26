import { type CSSProperties, useRef } from 'react';
import { gsap, useGSAP } from '../lib/gsap';
import { offerItems, reportShots } from '../data/content';

// Seção 3 — O que você recebe. Lista editorial com hairline (nunca grade de cards de ícone)
// e as três páginas do relatório, que se abrem em leque ao entrar na tela.

// Posição final de cada página no leque: [deslocamento X em % da própria largura, rotação]
const FAN: [number, number][] = [
  [-46, -7],
  [0, 0],
  [46, 7],
];

export function OfferSection() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const pages = gsap.utils.selector(ref)('[data-page]');
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // anima as variáveis do leque (e não o transform direto). Início e fim explícitos:
        // ler o valor "atual" falha quando o React monta o efeito duas vezes em desenvolvimento.
        gsap.fromTo(pages, { '--fx': '0%', '--fr': '0deg', '--fy': '40px', opacity: 0 }, {
          '--fx': (i: number) => `${FAN[i][0]}%`,
          '--fr': (i: number) => `${FAN[i][1]}deg`,
          '--fy': '0px',
          opacity: 1,
          duration: 1.1,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: { trigger: pages[1], start: 'top 82%', once: true },
        });
      });
    },
    { scope: ref }
  );

  return (
    <section id="recebe" ref={ref} className="section">
      <div className="page grid gap-x-20 gap-y-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="self-start lg:sticky lg:top-28">
          <div data-reveal>
            <h2 className="h2 text-navy">
              Uma carteira pronta pra executar. <em className="accent">Com a tese de cada escolha.</em>
            </h2>
            <p className="lead mt-5 max-w-[46ch] text-navy-soft">
              Seis coisas, todo mês. Nenhuma delas é uma promessa de retorno.
            </p>
          </div>

          <div data-reveal className="mt-12">
            <div className="relative mx-auto aspect-[1.3/1] w-full max-w-[460px]">
              {reportShots.map((shot, i) => (
                <figure
                  key={shot.src}
                  data-page
                  className="absolute left-[29%] top-[4%] w-[42%] overflow-hidden rounded-card border border-line bg-paper shadow-paper"
                  style={
                    {
                      zIndex: i === 1 ? 2 : 1,
                      '--fx': `${FAN[i][0]}%`,
                      '--fr': `${FAN[i][1]}deg`,
                      '--fy': '0px',
                      transform: 'translate(var(--fx), var(--fy)) rotate(var(--fr))',
                    } as CSSProperties
                  }
                >
                  <img src={shot.src} alt={shot.alt} width={600} height={850} loading="lazy" className="block h-auto w-full" />
                </figure>
              ))}
            </div>
            <div className="mt-6 flex flex-col items-center gap-3 text-center">
              <a
                href="assets/PDF/Carteira-Dividendos-Aiinvest.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-sm"
              >
                <i className="bi bi-file-earmark-pdf" aria-hidden="true" /> Ver um exemplo do relatório
              </a>
              <p className="text-[.82rem] text-navy-faint">
                Exemplo ilustrativo · Carteira de Dividendos — simulação para Junho/2026. Valores ilustrativos.
              </p>
            </div>
          </div>
        </div>

        <ol className="border-b border-line">
          {offerItems.map((item) => (
            <li data-reveal key={item.n} className="grid grid-cols-[52px_1fr] gap-x-4 border-t border-line py-7 md:grid-cols-[64px_1fr] md:py-8">
              <span className="pt-1.5 font-mono text-[.86rem] font-semibold text-gold-ink tabular-nums">{item.n}</span>
              <div>
                <h3 className="text-[1.45rem] text-navy md:text-[1.6rem]">{item.title}</h3>
                <p className="mt-2 max-w-[54ch] text-[1rem] leading-[1.7] text-navy-soft">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
