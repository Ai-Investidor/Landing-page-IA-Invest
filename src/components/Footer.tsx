import { BrandLogo } from './Logo';
import { useCurrentDate } from '../hooks/useCurrentDate';

export function Footer() {
  const { ano } = useCurrentDate();

  return (
    <footer>
      <div className="container">
        <div className="foot-row">
          <BrandLogo />
          <a
            href="https://www.instagram.com/aiinvest.oficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="foot-ig"
          >
            <i className="bi bi-instagram" /> @aiinvest.oficial
          </a>
        </div>
        <p className="foot-legal">
          A AI Invest não é corretora de valores, banco ou gestora de recursos regulamentada pela
          CVM. As informações têm caráter educacional e analítico e não constituem recomendação
          personalizada de investimento nos termos da Resolução CVM 20/2021. Rentabilidade passada
          não é garantia de rentabilidade futura. Investimentos envolvem riscos e podem resultar em
          perda do capital investido. Invista de acordo com o seu perfil de risco.
        </p>
        <p className="foot-copy">© {ano} AI Invest · Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
