// Copy do site como dado tipado. Regras (ver PRODUCT.md): nenhum valor com sinal de menos,
// nada de IA montando a carteira, simulação sempre rotulada, sem promessa de retorno.

/** Preço do plano anual — à vista via Pix. Parcelamento existe, mas não aparece até o gateway ser definido. */
export const PRICE = {
  inteiro: '997',
  centavos: '86',
  completo: 'R$ 997,86',
};

/**
 * Destino do botão de assinar. PENDENTE: a definir com o sócio (o link da Cakto foi removido).
 * Enquanto for null, os botões levam até a seção de preço.
 */
export const CHECKOUT_URL: string | null = null;

export interface OfferItem {
  n: string;
  title: string;
  text: string;
}

export const offerItems: OfferItem[] = [
  {
    n: '01',
    title: 'A carteira do mês',
    text: 'Ativos com percentual e tese definidos — renda fixa, FIIs e ações. Comprar, manter ou vender, sem você precisar interpretar nada.',
  },
  {
    n: '02',
    title: 'A revisão',
    text: 'Matheus Miranda revisa e assina pessoalmente a carteira todo mês, considerando o cenário econômico e os resultados das empresas.',
  },
  {
    n: '03',
    title: 'A plataforma',
    text: 'Composição, movimentações do mês e performance comparada ao CDI num só lugar, atualizados a cada competência.',
  },
  {
    n: '04',
    title: 'O relatório e a comunidade',
    text: 'Relatório completo em PDF, com a tese por trás de cada escolha, e acesso à comunidade exclusiva no WhatsApp.',
  },
  {
    n: '05',
    title: 'A execução',
    text: 'Você aplica na sua própria corretora — qualquer uma habilitada na B3. A carteira é independente de onde você já investe.',
  },
  {
    n: '06',
    title: 'O foco',
    text: 'Dividendos para renda recorrente hoje, valorização para patrimônio de longo prazo. Os dois ao mesmo tempo, não um ou outro.',
  },
];

export interface ReportShot {
  src: string;
  alt: string;
}

export const reportShots: ReportShot[] = [
  { src: 'assets/carteira-preview-capa.png', alt: 'Capa do relatório da Carteira de Dividendos AI Invest' },
  { src: 'assets/carteira-preview-ativos.png', alt: 'Tabela de ativos da carteira com pesos e dividend yield' },
  { src: 'assets/carteira-preview-rentabilidade.png', alt: 'Rentabilidade histórica da carteira comparada ao IBOV' },
];

export interface FeatListItem {
  title: string;
  text: string;
}

export const compoundFeats: FeatListItem[] = [
  { title: 'Renda que cresce sozinha', text: 'Reinveste os proventos e aumenta a base que paga dividendos.' },
  { title: 'Patrimônio acelerado', text: 'O reinvestimento compõe o crescimento ao longo dos anos.' },
  { title: 'Dinheiro no seu bolso', text: 'Renda recorrente hoje, valorização amanhã. Os dois ao mesmo tempo.' },
];

export interface CycleStep {
  icon: string;
  title: string;
  text: string;
}

export const cycleSteps: CycleStep[] = [
  { icon: 'bi-cash-coin', title: 'Você recebe dividendos', text: 'Os ativos da carteira pagam proventos.' },
  { icon: 'bi-arrow-repeat', title: 'Você reinveste', text: 'Em vez de gastar, aplica os proventos de volta.' },
  { icon: 'bi-bag-plus', title: 'Compra mais ativos', text: 'Sua base de investimentos aumenta.' },
  { icon: 'bi-graph-up-arrow', title: 'Recebe ainda mais dividendos', text: 'Mais ativos pagam mais proventos.' },
];

/** Declaração de princípio, não confissão. */
export const principleFeats: FeatListItem[] = [
  { title: 'Honestidade desde o primeiro contato', text: 'Sem números inflados, sem "milhares de clientes". Você sabe exatamente onde está pisando.' },
  { title: 'Você faz parte desde o começo', text: 'Os primeiros assinantes ajudam a moldar a carteira e o produto. Sua voz pesa mais aqui do que em qualquer lugar consolidado.' },
  { title: 'Preço de quem chega cedo', text: 'O valor de entrada de hoje é o reconhecimento de quem confiou primeiro. Quem entra no início entra nas melhores condições.' },
];

export const priceList: string[] = [
  'Carteira revisada e assinada todos os meses',
  'Recomendações de compra, manutenção e venda',
  'Percentual sugerido para cada ativo',
  'Acesso à plataforma AI Invest',
  'Relatório completo em PDF + comunidade no WhatsApp',
  'Acesso imediato após a confirmação do pagamento',
];

export interface FaqItemData {
  q: string;
  a: string;
}

export const faqItems: FaqItemData[] = [
  {
    q: 'Preciso entender de investimentos pra usar?',
    a: 'Não precisa ser especialista de mercado — é por isso que a carteira existe. Mas você não recebe uma ordem de compra sem explicação: cada recomendação vem com a tese por trás, pra você entender o raciocínio, não só executar. Basta ter conta numa corretora habilitada na B3.',
  },
  {
    q: 'Como eu recebo a carteira?',
    a: 'Assim que o pagamento é confirmado, o acesso é liberado: a carteira fica na plataforma AI Invest, com composição, movimentações e performance; o relatório completo chega em PDF; e você entra na comunidade exclusiva no WhatsApp.',
  },
  {
    q: 'Qual valor mínimo pra começar?',
    a: 'A carteira foi desenhada para patrimônio já formado, não para o primeiro aporte. A diversificação entre renda fixa, FIIs e ações só compensa com capital suficiente pra se distribuir entre as classes sem que o custo de cada operação pese no resultado. Se você já tem uma carteira dispersa — CDB do banco, fundo indicado pela gerência, ação comprada por dica — pra reorganizar com uma tese, é esse o momento.',
  },
  {
    q: 'A AI Invest garante retorno?',
    a: 'Não — e desconfie de quem promete isso. Investimento em renda variável não tem retorno garantido. O que entregamos é uma análise estratégica baseada em dados pra aumentar suas chances de decisões melhores. Rentabilidade passada ou simulada não garante rentabilidade futura.',
  },
  {
    q: 'Com que frequência a carteira é atualizada?',
    a: 'Uma vez por mês. O cenário econômico, os resultados das empresas e as condições de mercado são analisados, e as recomendações são ajustadas. Você recebe a atualização no início de cada mês.',
  },
  {
    q: 'Funciona com qualquer corretora?',
    a: 'Sim. Qualquer corretora habilitada na B3 serve — XP, Clear, Rico, Inter, BTG, Nubank, entre outras. A carteira é independente de corretora; você executa onde preferir.',
  },
  {
    q: 'Como é feito o pagamento?',
    a: `O plano anual custa ${PRICE.completo}, pago à vista via Pix. O acesso é liberado assim que o pagamento é confirmado.`,
  },
  {
    q: 'Como funciona o cancelamento?',
    a: 'Dentro dos 7 dias de garantia, é reembolso total — sem perguntas. Depois desse prazo, a assinatura segue ativa até o fim dos 12 meses contratados.',
  },
];

export const NAV_LINKS: { href: string; label: string }[] = [
  { href: '#resultado', label: 'Resultado' },
  { href: '#recebe', label: 'O que você recebe' },
  { href: '#especialista', label: 'Especialista' },
  { href: '#preco', label: 'Preço' },
  { href: '#faq', label: 'Dúvidas' },
];
