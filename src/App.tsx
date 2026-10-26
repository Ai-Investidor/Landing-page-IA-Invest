import { LogoSymbolDefs } from './components/Logo';
import { Nav } from './sections/Nav';
import { Hero } from './sections/hero/Hero';

export default function App() {
  return (
    <>
      <LogoSymbolDefs />
      <Nav />
      <main>
        <Hero />
      </main>
    </>
  );
}
