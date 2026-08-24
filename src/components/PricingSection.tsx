import { Reveal } from './Reveal';
import { priceList } from '../data/content';

export function PricingSection() {
  return (
    <section className="sec price-sec" id="preco">
      <div className="container">
        <Reveal as="div" className="sec-head center">
          <h2>
            O custo de não decidir <em>também existe.</em>
          </h2>
          <p>
            Dinheiro parado numa conta não some do extrato — mas perde poder de compra pra
            inflação, mês após mês, sem nenhuma linha avisando. Isto é o custo de ter alguém
            decidindo por você.
          </p>
        </Reveal>

        <Reveal as="div" className="price-card">
          <div className="price-top">
            <div className="price-name">Plano anual · Carteira AI Invest</div>
            <div className="price-main" aria-label="497 reais por ano">
              <span className="price-cur" aria-hidden="true">R$</span>
              <span className="price-val" aria-hidden="true">497</span>
            </div>
            <div className="price-per">por ano · acesso completo aos 12 meses</div>
            <div className="price-or">
              ou <b>12x de R$&nbsp;51,34</b> — menos de R$52 por mês
            </div>
            <p className="price-anchor">
              Não prometemos retorno. Prometemos uma decisão revisada e assinada todo mês — em vez
              de nenhuma decisão nenhuma.
            </p>
          </div>
          <div className="price-body">
            <ul className="price-list">
              {priceList.map((item) => (
                <li key={item}>
                  <i className="bi bi-check-circle-fill ck" /> {item}
                </li>
              ))}
            </ul>
            <a
              href="https://pay.cakto.com.br/347ejud_926364"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-block"
            >
              Assinar agora — R$&nbsp;497/ano <i className="bi bi-arrow-right arrow" />
            </a>
            <div className="price-foot">
              <i className="bi bi-shield-lock-fill" /> Acesso imediato · garantia de 7 dias, reembolso integral
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
