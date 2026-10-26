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
      </main>
    </>
  );
}
