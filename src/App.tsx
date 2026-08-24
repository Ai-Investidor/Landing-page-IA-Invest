import { LogoSymbolDefs } from './components/Logo';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { BacktestSection } from './components/BacktestSection';
import { OfferSection } from './components/OfferSection';
import { ExpertSection } from './components/ExpertSection';
import { CompoundSection } from './components/CompoundSection';
import { EarlyStageSection } from './components/EarlyStageSection';
import { PricingSection } from './components/PricingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <LogoSymbolDefs />
      <Nav />
      <Hero />
      <BacktestSection />
      <OfferSection />
      <ExpertSection />
      <CompoundSection />
      <EarlyStageSection />
      <PricingSection />
      <GuaranteeSection />
      <FaqSection />
      <FinalCta />
      <Footer />
    </>
  );
}
