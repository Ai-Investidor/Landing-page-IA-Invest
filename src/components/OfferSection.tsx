import { Reveal } from './Reveal';
import { offerItems, reportShots } from '../data/content';

/** Consolida "o que você recebe" + "como funciona" + "a entrega" — três seções redundantes do
 *  mundo anterior (13 itens numerados em cards de ícone) — numa lista editorial só, com peso
 *  real em vez de repetição. Nenhum card de ícone+título+texto do mesmo tamanho: cada item é uma
 *  linha de lista com hairline, número de referência em mono, e prosa de verdade. */
export function OfferSection() {
  return (
    <section className="sec" id="recebe">
      <div className="container">
        <Reveal as="div" className="sec-head">
          <h2>
            O que você recebe, <em>sem repetição.</em>
          </h2>
          <p>Cinco fatos, não treze variações da mesma frase.</p>
        </Reveal>

        <div className="offer-list">
          {offerItems.map((item) => (
            <Reveal as="div" className="offer-item" key={item.n}>
              <span className="offer-n num">{item.n}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" className="offer-gallery">
          <div className="og-head">
            <h3>
              É assim que chega, todo mês: <em>um relatório de verdade.</em>
            </h3>
          </div>
          <div className="dp-gallery">
            {reportShots.map((shot) => (
              <figure className="dp-shot" key={shot.src}>
                <img src={shot.src} alt={shot.alt} width={600} height={850} loading="lazy" />
              </figure>
            ))}
          </div>
          <div className="dp-cta">
            <a
              href="assets/PDF/Carteira-Dividendos-Aiinvest.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <i className="bi bi-file-earmark-pdf" /> Ver um exemplo da carteira
            </a>
          </div>
          <p className="dp-note">
            Exemplo ilustrativo · Carteira de Dividendos — simulação para Junho/2026. Valores
            ilustrativos.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
