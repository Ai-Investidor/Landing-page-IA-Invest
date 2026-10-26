import { useRef, useState } from 'react';
import { gsap, useGSAP } from '../lib/gsap';

// Seção 5 — Especialista. Foto retangular (nunca avatar redondo), revelada de baixo pra cima;
// a única forma circular é o selo de verificação ao lado do nome.
// Certificações conforme o atestado ANBIMA: CPA, C-Pro R e C-Pro I.

const CERT_PDF = 'assets/PDF/certificado-anbima-matheus-miranda.pdf';

export function ExpertSection() {
  const ref = useRef<HTMLElement>(null);
  const [photoFailed, setPhotoFailed] = useState(false);
  const [certFailed, setCertFailed] = useState(false);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const q = gsap.utils.selector(ref);
        const tl = gsap.timeline({ scrollTrigger: { trigger: q('[data-photo]')[0], start: 'top 80%', once: true } });
        tl.from(q('[data-photo]'), { clipPath: 'inset(100% 0% 0% 0%)', duration: 1.3, ease: 'power3.inOut' }, 0)
          .from(q('[data-photo] img'), { scale: 1.14, duration: 1.6, ease: 'power3.out' }, 0)
          .from(q('[data-cert-card]'), { y: 24, opacity: 0, duration: 0.7, ease: 'power3.out' }, 0.9);
      });
    },
    { scope: ref }
  );

  return (
    <section id="especialista" ref={ref} className="section bg-paper-2">
      <div className="page grid items-center gap-x-20 gap-y-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative mx-auto w-full max-w-[420px]">
          <div data-photo className="aspect-[3/4] overflow-hidden rounded-card bg-paper shadow-paper">
            {photoFailed ? (
              <div className="grid h-full w-full place-items-center font-display text-[3rem] text-navy-faint" role="img" aria-label="Foto de Matheus Miranda indisponível">
                MM
              </div>
            ) : (
              <img
                src="assets/matheus-miranda.jpg"
                alt="Matheus Miranda — especialista de investimentos da AI Invest"
                width={1024}
                height={1365}
                loading="lazy"
                onError={() => setPhotoFailed(true)}
                className="h-full w-full object-cover"
              />
            )}
          </div>
          {!certFailed && (
            <a
              data-cert-card
              href={CERT_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="group absolute -bottom-7 right-4 flex items-center gap-3 rounded-card border border-line bg-paper p-2.5 pr-4 shadow-paper transition-colors hover:border-emerald/40 sm:-right-8"
            >
              <img
                src="assets/certificacoes-anbima-selos.jpg"
                alt="Selos das certificações ANBIMA CPA, C-Pro R e C-Pro I"
                width={1000}
                height={328}
                loading="lazy"
                onError={() => setCertFailed(true)}
                className="h-[38px] w-auto rounded-[2px] sm:h-[46px]"
              />
              <div>
                <div className="text-[.86rem] font-semibold text-navy">Certificações ANBIMA</div>
                <div className="font-mono text-[.72rem] text-navy-faint transition-colors group-hover:text-emerald">
                  Ver atestado <i className="bi bi-arrow-up-right text-[.65rem]" aria-hidden="true" />
                </div>
              </div>
            </a>
          )}
        </div>

        <div>
          <div data-reveal>
            <h2 className="h2 text-navy">
              A análise é assistida por dados. <em className="accent">A decisão tem dono.</em>
            </h2>
            <p className="lead mt-5 max-w-[56ch] text-navy-soft">
              "AI Invest" é o nome do produto — não uma descrição do método. Cada recomendação é escrita, revisada e
              assinada por uma pessoa certificada, com nome e registro.
            </p>
          </div>

          <div data-reveal className="mt-10 border-t border-line pt-8">
            <div className="flex items-center gap-2.5">
              <span className="font-display text-[1.9rem] leading-none text-navy">Matheus Miranda</span>
              <span
                className="grid h-[18px] w-[18px] place-items-center rounded-full bg-emerald text-[.7rem] text-paper"
                role="img"
                aria-label="Certificação verificada"
              >
                <i className="bi bi-check-lg" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-2 font-mono text-[.78rem] tracking-[.02em] text-navy-faint">
              Especialista de Investimentos · Economia · CPA · C-Pro R · C-Pro I
            </div>
            <blockquote className="mt-6 border-l-2 border-emerald pl-5 font-display text-[1.25rem] leading-[1.5] text-navy md:text-[1.35rem]">
              "Sou apaixonado por finanças, investimentos e análise econômica. Essa paixão me levou a me formar em Economia e
              a buscar aperfeiçoamento constante — incluindo as certificações CPA, C-Pro R e C-Pro I da ANBIMA."
            </blockquote>
            <p className="mt-6 max-w-[60ch] text-[.92rem] leading-[1.65] text-navy-soft">
              Detém as certificações CPA, C-Pro R (Relacionamento) e C-Pro I (Investimento), emitidas pela ANBIMA — Associação
              Brasileira das Entidades dos Mercados Financeiros e de Capitais.{' '}
              <a
                href={CERT_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald underline decoration-emerald/30 underline-offset-4 hover:decoration-emerald"
              >
                Confira o atestado
              </a>{' '}
              — ele tem um QR Code para verificar a veracidade junto à ANBIMA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
