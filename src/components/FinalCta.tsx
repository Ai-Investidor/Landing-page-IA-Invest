import { Reveal } from './Reveal';

export function FinalCta() {
  return (
    <section className="sec final">
      <div className="container">
        <Reveal as="h2">
          Sua carteira pronta. <em>Todo mês.</em>
        </Reveal>
        <Reveal as="p">
          Pare de deixar dinheiro parado. Invista com estratégia definida por especialistas — sem
          precisar acompanhar o mercado.
        </Reveal>
        <Reveal
          as="a"
          href="https://pay.cakto.com.br/347ejud_926364"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-lg"
        >
          Quero minha carteira agora <i className="bi bi-arrow-right arrow" />
        </Reveal>
      </div>
    </section>
  );
}
