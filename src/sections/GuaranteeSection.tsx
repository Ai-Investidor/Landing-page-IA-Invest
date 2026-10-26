// Seção 9 — Garantia de 7 dias.

export function GuaranteeSection() {
  return (
    <section className="bg-paper-2 py-16 md:py-20">
      <div data-reveal className="page flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
        <div className="grid h-16 w-16 flex-none place-items-center rounded-full border border-emerald/25 bg-paper text-[1.6rem] text-emerald">
          <i className="bi bi-shield-check" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-[1.6rem] text-navy md:text-[1.95rem]">Garantia de 7 dias — veja tudo antes de se comprometer</h3>
          <p className="lead mt-3 max-w-[74ch] text-navy-soft">
            Em 7 dias você já vê a carteira completa, o raciocínio por trás de cada escolha e a primeira recomendação do mês.
            Não dá pra julgar o retorno nesse prazo — mas dá pra julgar a qualidade e a clareza do que você está comprando.
            Se não gostar do que viu, devolvemos 100% do valor. Sem perguntas.
          </p>
        </div>
      </div>
    </section>
  );
}
