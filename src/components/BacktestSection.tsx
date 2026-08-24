import { Reveal } from './Reveal';

export function BacktestSection() {
  return (
    <section className="sec bt-sec" id="resultado">
      <div className="container">
        <Reveal as="div" className="sec-head center">
          <h2>
            A prova não é o mês bom. <em>É o mês ruim.</em>
          </h2>
          <p>
            Qualquer estratégia acompanha a alta. O que separa método de sorte é o que acontece
            quando o mercado cai.
          </p>
        </Reveal>

        <Reveal as="div" className="bt-lead">
          <span className="k">Simulação retroativa · mês de queda</span>
        </Reveal>

        <Reveal as="div" className="bt-compare">
          <div className="bt-bar-row">
            <div className="bt-bar-top">
              <span>Carteira AI Invest (simulada)</span>
              <b className="num">−4,1%</b>
            </div>
            <div className="bt-bar-track">
              <div className="bt-bar-fill carteira" style={{ width: '51%' }} />
            </div>
          </div>
          <div className="bt-bar-row">
            <div className="bt-bar-top">
              <span>IBOV, mesmo mês</span>
              <b className="num">−7,2%</b>
            </div>
            <div className="bt-bar-track">
              <div className="bt-bar-fill ibov" style={{ width: '90%' }} />
            </div>
          </div>
        </Reveal>

        <Reveal as="div" className="bt-cumulative">
          <div className="bt-cum-item">
            <div className="v up num">+42,6%</div>
            <div className="l">Carteira · acumulado 24 meses</div>
          </div>
          <div className="bt-cum-item">
            <div className="v num">+18,3%</div>
            <div className="l">IBOV · mesmo período</div>
          </div>
          <div className="bt-cum-item">
            <div className="v up num">+24,3 p.p.</div>
            <div className="l">Diferença acumulada</div>
          </div>
        </Reveal>

        <Reveal as="p" className="bt-note">
          <strong>Resultado de backtest (simulação retroativa)</strong> da metodologia de análise
          dos especialistas da AI Invest aplicada a dados públicos de mercado — não representa o
          desempenho de uma carteira realmente operada nem o patrimônio individual de qualquer
          investidor. Backtests têm limitações: não capturam custos, liquidez nem o comportamento
          em tempo real. Validação metodológica conduzida por Matheus Miranda e a equipe de
          analistas. Rentabilidade passada ou simulada não garante rentabilidade futura.
        </Reveal>
      </div>
    </section>
  );
}
