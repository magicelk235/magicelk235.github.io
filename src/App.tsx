import Nav from './components/Nav';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Now from './sections/Now';
import Studio from './sections/Studio';
import Metal from './sections/Metal';
import Worldspawn from './sections/Worldspawn';
import Workflow from './sections/Workflow';
import Background from './sections/Background';
import Index from './sections/Index';
import Contact from './sections/Contact';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Now />
        <Studio />
        <Metal />
        <Worldspawn />
        <Workflow />
        <Background />
        <Index />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
