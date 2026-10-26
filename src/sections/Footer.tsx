import { BrandLogo } from '../components/Logo';
import { useCurrentDate } from '../hooks/useCurrentDate';

// Rodapé. O aviso regulatório é parte obrigatória da página, não enfeite — não encurtar.

export function Footer() {
  const { ano } = useCurrentDate();

  return (
    <footer className="border-t border-line bg-paper-2 pb-[max(40px,env(safe-area-inset-bottom))] pt-14">
      <div className="page">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <BrandLogo className="h-6" />
          <a
            href="https://www.instagram.com/aiinvest.oficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[.92rem] font-medium text-navy-soft transition-colors hover:text-emerald"
          >
            <i className="bi bi-instagram" aria-hidden="true" /> @aiinvest.oficial
          </a>
        </div>
        <p className="mt-8 max-w-[100ch] border-t border-line pt-6 text-[.84rem] leading-[1.7] text-navy-faint">
          A AI Invest não é corretora de valores, banco ou gestora de recursos regulamentada pela CVM. As informações têm
          caráter educacional e analítico e não constituem recomendação personalizada de investimento nos termos da Resolução
          CVM 20/2021. Rentabilidade passada não é garantia de rentabilidade futura. Investimentos envolvem riscos e podem
          resultar em perda do capital investido. Invista de acordo com o seu perfil de risco.
        </p>
        <p className="mt-4 text-[.8rem] text-navy-faint">© {ano} AI Invest · Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
