import { PRICE } from '../data/content';

// Seção 11 — CTA final. Leva até o preço (o checkout ainda está em definição).

export function FinalCta() {
  return (
    <section className="section bg-navy text-center text-paper">
      <div className="page">
        <h2 data-reveal className="text-[clamp(2.1rem,4.6vw,3.3rem)] text-paper">
          Sua carteira pronta. <em className="accent-light">Todo mês.</em>
        </h2>
        <p data-reveal className="lead mx-auto mt-5 max-w-[54ch] text-paper/75">
          Pare de decidir sozinho entre a dica, o gerente e o CDB do banco. Todo mês, uma carteira revisada e assinada por um
          especialista certificado — sem precisar acompanhar o mercado.
        </p>
        <div data-reveal className="mt-9">
          <a href="#preco" className="btn btn-primary btn-lg">
            Quero minha carteira <i className="bi bi-arrow-right arrow" aria-hidden="true" />
          </a>
        </div>
        <p data-reveal className="mt-5 text-[.86rem] text-paper/55">
          {PRICE.completo} por ano · à vista no Pix · garantia de 7 dias
        </p>
      </div>
    </section>
  );
}
