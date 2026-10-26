import { CHECKOUT_URL, PRICE, priceList } from '../data/content';

// Seção 8 — Preço. R$ 997,86/ano à vista no Pix. Sem parcelamento na página (depende do gateway)
// e sem link da Cakto: o destino do botão está em CHECKOUT_URL (pendente).

export function PricingSection() {
  const checkoutProps = CHECKOUT_URL
    ? { href: CHECKOUT_URL, target: '_blank', rel: 'noopener noreferrer' }
    : { href: '#preco', 'data-checkout-pending': true };

  return (
    <section id="preco" className="section">
      <div className="page grid items-start gap-x-20 gap-y-12 lg:grid-cols-[1fr_470px]">
        <div data-reveal className="lg:sticky lg:top-32 lg:pt-6">
          <h2 className="h2 text-navy">
            O custo de não decidir <em className="accent">também existe.</em>
          </h2>
          <p className="lead mt-5 max-w-[50ch] text-navy-soft">
            Dinheiro mal alocado não some do extrato — mas fica parado em produto que não serve pra você, mês após mês, sem
            nenhuma linha avisando. Este é o custo de ter um especialista decidindo com método, todo mês.
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-[.92rem] text-navy-soft">
            <li className="flex items-center gap-2">
              <i className="bi bi-qr-code text-emerald" aria-hidden="true" /> Pagamento via Pix
            </li>
            <li className="flex items-center gap-2">
              <i className="bi bi-lightning-charge text-emerald" aria-hidden="true" /> Acesso imediato
            </li>
            <li className="flex items-center gap-2">
              <i className="bi bi-shield-check text-emerald" aria-hidden="true" /> Garantia de 7 dias
            </li>
          </ul>
        </div>

        <div data-reveal className="overflow-hidden rounded-card border border-emerald/30 bg-paper shadow-paper">
          <div className="bg-emerald-soft px-7 pb-7 pt-8 md:px-9">
            <div className="data-label text-emerald">Plano anual · Carteira AI Invest</div>
            <div className="mt-4 flex items-start text-navy" aria-label={`${PRICE.completo} por ano`}>
              <span className="mr-1.5 mt-3 font-display text-[1.5rem]" aria-hidden="true">
                R$
              </span>
              <span className="font-display text-[clamp(3.8rem,8vw,4.8rem)] leading-none tabular-nums" aria-hidden="true">
                {PRICE.inteiro}
              </span>
              <span className="mt-2 font-display text-[1.9rem] tabular-nums" aria-hidden="true">
                ,{PRICE.centavos}
              </span>
            </div>
            <div className="mt-3 text-[.94rem] text-navy-soft">por ano · à vista no Pix</div>
            <div className="mt-0.5 text-[.94rem] text-navy-soft">acesso completo aos 12 meses</div>
            <p className="mt-6 border-t border-line pt-5 text-[.96rem] leading-[1.6] text-navy">
              Não prometemos retorno. Prometemos uma decisão revisada e assinada todo mês — em vez de nenhuma decisão.
            </p>
          </div>
          <div className="px-7 pb-8 pt-4 md:px-9">
            <ul>
              {priceList.map((item) => (
                <li key={item} className="flex items-start gap-3 border-b border-line py-3.5 text-[.95rem] text-navy-soft last:border-b-0">
                  <i className="bi bi-check-circle-fill mt-[1px] text-emerald" aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
            <a {...checkoutProps} className="btn btn-primary mt-6 w-full">
              Assinar agora — {PRICE.completo} <i className="bi bi-arrow-right arrow" aria-hidden="true" />
            </a>
            <div className="mt-4 flex items-center justify-center gap-2 text-[.84rem] text-navy-faint">
              <i className="bi bi-shield-lock-fill" aria-hidden="true" /> Acesso imediato · garantia de 7 dias, reembolso integral
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
