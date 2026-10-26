import { LogoSymbolDefs } from './components/Logo';
import { DotField } from './components/DotField';
import { Nav } from './sections/Nav';
import { Hero } from './sections/hero/Hero';

export default function App() {
  return (
    <>
      <LogoSymbolDefs />
      <DotField />
      <Nav />
      <main>
        <Hero />
      </main>
    </>
  );
}
