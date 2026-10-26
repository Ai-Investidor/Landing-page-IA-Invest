import { useRef } from 'react';
import { LogoSymbolDefs } from './components/Logo';
import { DotField } from './components/DotField';
import { usePageMotion } from './hooks/usePageMotion';
import { Nav } from './sections/Nav';
import { Hero } from './sections/hero/Hero';
import { ResultSection } from './sections/ResultSection';
import { OfferSection } from './sections/OfferSection';
import { BackstageSection } from './sections/backstage/BackstageSection';
import { ExpertSection } from './sections/ExpertSection';
import { CycleSection } from './sections/CycleSection';
import { PrinciplesSection } from './sections/PrinciplesSection';
import { PricingSection } from './sections/PricingSection';
import { GuaranteeSection } from './sections/GuaranteeSection';
import { FaqSection } from './sections/FaqSection';
import { FinalCta } from './sections/FinalCta';
import { Footer } from './sections/Footer';

// Ordem das seções — seções sem fundo próprio deixam a malha de pontos (DotField) aparecer;
// as navy e paper-2 cobrem.
export default function App() {
  const mainRef = useRef<HTMLElement>(null);
  usePageMotion(mainRef);

  return (
    <>
      <LogoSymbolDefs />
      <DotField />
      <Nav />
      <main ref={mainRef}>
        <Hero />
        <ResultSection />
        <OfferSection />
        <BackstageSection />
        <ExpertSection />
        <CycleSection />
        <PrinciplesSection />
        <PricingSection />
        <GuaranteeSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
