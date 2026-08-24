import { useState } from 'react';
import { Reveal } from './Reveal';

export function ExpertSection() {
  const [photoFailed, setPhotoFailed] = useState(false);
  const [certFailed, setCertFailed] = useState(false);

  return (
    <section className="sec" id="especialista">
      <div className="container">
        <Reveal as="div" className="sec-head">
          <h2>
            A análise é assistida por dados. <em>A decisão tem dono.</em>
          </h2>
          <p>
            "AI Invest" é o nome do produto — não uma descrição do método. Cada recomendação é
            escrita, revisada e assinada por uma pessoa certificada, com nome e registro.
          </p>
        </Reveal>

        <Reveal as="div" className="expert">
          <div className="expert-photo">
            {photoFailed ? (
              <div className="expert-photo-fallback" role="img" aria-label="Foto de Matheus Miranda indisponível">
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
              />
            )}
          </div>
          <div className="expert-body">
            <div className="expert-id">
              <span className="nm">Matheus Miranda</span>
              <span className="verified-badge" role="img" aria-label="Certificação verificada">
                <i className="bi bi-check-lg" />
              </span>
            </div>
            <div className="expert-role">Especialista de Investimentos · Economia · CEA ANBIMA</div>
            <p className="expert-quote">
              "Sou apaixonado por finanças, investimentos e análise econômica. Essa paixão me
              levou a me formar em Economia e a buscar aperfeiçoamento constante — incluindo a
              conquista da certificação CEA."
            </p>
            <div className="cert-row">
              {!certFailed && (
                <img
                  className="cert-thumb"
                  src="assets/certificacao-cea-anbima.jpg"
                  alt="Certificação CEA ANBIMA de Matheus Miranda Carneiro"
                  width={1286}
                  height={909}
                  loading="lazy"
                  onError={() => setCertFailed(true)}
                />
              )}
              <div className="cert-meta">
                <div className="ct">Certificação CEA — ANBIMA</div>
                <div className="cs">
                  Certificação de Especialista em Investimentos ANBIMA, emitida pela Associação
                  Brasileira das Entidades dos Mercados Financeiro e de Capitais. Certificação
                  ativa.
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
