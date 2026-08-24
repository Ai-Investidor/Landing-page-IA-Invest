import { Reveal } from './Reveal';
import { HeroProof } from './HeroProof';
import { useCurrentDate } from '../hooks/useCurrentDate';

export function Hero() {
  const { mesAno } = useCurrentDate();

  return (
    <header className="hero">
      <div className="container">
        <div className="hero-text">
          <Reveal as="div" className="hero-fresh">
            <span className="dot" aria-hidden="true" /> Carteira de {mesAno} · revisão vigente
          </Reveal>
          <Reveal as="h1">
            A decisão sobre o seu dinheiro <em>tem um responsável.</em>
          </Reveal>
          <Reveal as="p" className="lead">
            Carteira pulverizada em CDB do banco, fundo empurrado pela gerência, ação comprada
            por dica? Todo mês, um especialista certificado analisa o cenário e assina a carteira
            que resolve isso: o que comprar, manter e vender, e em qual percentual.
          </Reveal>
          <Reveal as="p" className="hero-align">
            Não somos corretora. Não distribuímos produto. Não recebemos comissão de nenhum ativo
            recomendado.
          </Reveal>
          <Reveal as="div" className="hero-actions">
            <a href="#preco" className="btn btn-primary">
              Assinar a carteira <i className="bi bi-arrow-right arrow" />
            </a>
            <a href="#resultado" className="btn btn-ghost">
              Ver a simulação completa
            </a>
          </Reveal>
        </div>

        <Reveal as="div">
          <HeroProof />
        </Reveal>
      </div>
    </header>
  );
}
