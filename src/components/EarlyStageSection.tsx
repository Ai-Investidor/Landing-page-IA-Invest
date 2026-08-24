import { Reveal } from './Reveal';
import { principleFeats } from '../data/content';

/** Reposicionada como declaração de princípio — não confissão. Mesmo registro editorial sóbrio
 *  de toda a página, não uma caixa de "honestidade" separada. */
export function EarlyStageSection() {
  return (
    <section className="sec principle-sec" id="comeco">
      <div className="container">
        <Reveal as="div" className="sec-head">
          <h2>
            Todo concorrente deste mercado esconde o tamanho real da operação. <em>Nós não.</em>
          </h2>
          <p>
            A AI Invest está no início. Isso não é um aviso em letra miúda — é a posição. Entrar
            agora é entrar no andar térreo, com o método já validado e nada escondido.
          </p>
        </Reveal>

        <Reveal as="div" className="principle-box">
          <div className="feat-list">
            {principleFeats.map((f) => (
              <div className="feat-li" key={f.title}>
                <span className="ck">
                  <i className="bi bi-check-lg" />
                </span>
                <div>
                  <b>{f.title}</b>
                  <span>{f.text}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
