import { Reveal } from './Reveal';

export function GuaranteeSection() {
  return (
    <section className="sec">
      <div className="container">
        <Reveal as="div" className="guar">
          <h3>Garantia de 7 dias — veja tudo antes de se comprometer</h3>
          <p>
            Em 7 dias você já vê a carteira completa, o raciocínio por trás de cada escolha e a
            primeira recomendação do mês. Não dá pra julgar o retorno nesse prazo — mas dá pra
            julgar a qualidade e a clareza do que você está comprando. Se não gostar do que viu,
            devolvemos 100% do valor. Sem perguntas.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
