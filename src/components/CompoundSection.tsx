import { Fragment, useRef } from 'react';
import { Reveal } from './Reveal';
import { compoundFeats, cycleSteps } from '../data/content';
import { useCyclePlay } from '../hooks/useCyclePlay';

export function CompoundSection() {
  const cycleRef = useRef<HTMLDivElement>(null);
  const play = useCyclePlay(cycleRef);

  return (
    <section className="sec">
      <div className="container">
        <div className="split">
          <Reveal as="div">
            <h2>
              Como o reinvestimento <em>trabalha por você</em>.
            </h2>
            <p className="intro">
              Não existe mágica nem promessa de número: existe um mecanismo. Cada dividendo
              recebido pode ser reinvestido pra comprar novos ativos — e mais ativos geram mais
              dividendos. É o efeito bola de neve dos juros compostos, o mesmo que constrói
              patrimônio de longo prazo no mundo inteiro.
            </p>
            <div className="feat-list">
              {compoundFeats.map((f) => (
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

          <Reveal as="div" className="cycle-card">
            <div className="cc-head">O ciclo do reinvestimento</div>
            <div className="cc-sub">O mecanismo — não uma projeção de retorno</div>
            {/* Fragment, não <div>, entre passo e seta — a coreografia de scroll (.cycle.play
                .cyc-step:nth-child(N)) em index.css depende dos dois serem filhos diretos e
                alternados de .cycle. */}
            <div className={`cycle${play ? ' play' : ''}`} ref={cycleRef}>
              {cycleSteps.map((s, i) => (
                <Fragment key={s.title}>
                  <div className="cyc-step">
                    <span className="cyc-ico">
                      <i className={`bi ${s.icon}`} />
                    </span>
                    <div>
                      <b>{s.title}</b>
                      <span>{s.text}</span>
                    </div>
                  </div>
                  {i < cycleSteps.length - 1 && (
                    <div className="cyc-arrow">
                      <i className="bi bi-arrow-down" />
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
            <div className="cyc-loop">
              <i className="bi bi-arrow-repeat" /> E o ciclo recomeça — maior a cada volta
            </div>
            <p className="cc-note">
              Não mostramos uma curva de patrimônio porque o resultado real depende do seu aporte,
              do seu perfil e do comportamento do mercado. Rentabilidade passada não garante
              rentabilidade futura.
            </p>
          </Reveal>
        </div>
        <Reveal as="p" className="compound-trust">
          Não prometemos um número porque o resultado de cada investidor é diferente. O que
          mostramos é o <strong>mecanismo</strong> — e ele é o mesmo que constrói patrimônio de
          longo prazo no mundo todo.
        </Reveal>
      </div>
    </section>
  );
}
