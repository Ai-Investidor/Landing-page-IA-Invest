// Toda a copy do site como dado tipado. Redesign "Research House Editorial": o mock de carteira
// (PETR4/VALE3/MXRF11 com percentuais ilustrativos) e os 13 itens numerados espalhados em três
// seções redundantes ("o que você recebe" + "como funciona" + "a entrega") foram removidos —
// consolidados em `offerItems`, uma lista só, com peso real em vez de repetição.

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
    title: 'A entrega',
    text: 'Assinatura confirmada, acesso liberado na hora: comunidade exclusiva no WhatsApp e relatório completo em PDF, com a tese por trás de cada escolha.',
  },
  {
    n: '04',
    title: 'A execução',
    text: 'Você aplica na sua própria corretora — qualquer uma habilitada na B3. A carteira é independente de onde você já investe.',
  },
  {
    n: '05',
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

/** Reposicionada como declaração de princípio, não confissão — ver o brief de redesign. */
export const principleFeats: FeatListItem[] = [
  { title: 'Honestidade desde o primeiro contato', text: 'Sem números inflados, sem "milhares de clientes". Você sabe exatamente onde está pisando.' },
  { title: 'Você faz parte desde o começo', text: 'Os primeiros assinantes ajudam a moldar a carteira e o produto. Sua voz pesa mais aqui do que em qualquer lugar consolidado.' },
  { title: 'Preço de quem chega cedo', text: 'O valor de entrada de hoje é o reconhecimento de quem confiou primeiro. Quem entra no início entra nas melhores condições.' },
];

export const priceList: string[] = [
  'Carteira revisada e assinada todos os meses',
  'Recomendações de compra, manutenção e venda',
  'Percentual sugerido para cada ativo',
  'Relatório completo em PDF + comunidade no WhatsApp',
  'Foco em dividendos e valorização de longo prazo',
  'Acesso imediato após a assinatura',
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
