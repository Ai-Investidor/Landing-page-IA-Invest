// Certidão de Comportamento — o par −4,1% / −7,2% trazido pra primeira dobra. Tipografia
// carregando sozinha: nenhum gráfico, nenhuma barra, nenhuma linha ascendente. O rótulo de
// simulação fica do tamanho do corpo do texto, nunca menor — o ponto do site é honestidade
// legível, não escondida em nota de rodapé.
export function HeroProof() {
  return (
    <div className="hero-proof">
      <div className="hero-proof-k">Backtest · Simulação Retroativa</div>
      <div className="hero-proof-row">
        <span className="hero-proof-l">Carteira (simulada)</span>
        <span className="hero-proof-v ours num">−4,1%</span>
      </div>
      <div className="hero-proof-row">
        <span className="hero-proof-l">IBOV, mesmo mês</span>
        <span className="hero-proof-v num">−7,2%</span>
      </div>
      <p className="hero-proof-cap">
        Caiu menos da metade do índice no mesmo mês — a prova de método, não de sorte.
      </p>
    </div>
  );
}
